/* Подари Топлина — home page behaviour (Christmas 2026). */
(function () {
  'use strict';

  const CHRISTMAS = new Date(2026, 11, 25);
  const SLIDE_MS = 5000;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const smooth = reducedMotion ? 'auto' : 'smooth';
  const t = (key) => (window.I18n ? window.I18n.t(key) : key);
  const lang = () => (window.I18n ? window.I18n.currentLang : 'bg');

  // ---------- Countdown ----------
  function renderCountdown() {
    const days = Math.ceil((CHRISTMAS - new Date()) / 864e5);
    document.querySelectorAll('[data-countdown]').forEach((el) => {
      el.hidden = days <= 0;
      if (days > 0) el.innerHTML = t((el.dataset.countdown === 'short' ? 'count.short' : 'count') + (days === 1 ? '.one' : '')).replace('{n}', `<strong>${days}</strong>`);
    });
  }

  // ---------- Offer: price × number of children, or any amount the donor types ----------
  const offer = document.querySelector('[data-offer]');
  const thanks = document.querySelector('[data-thanks]');
  const amountInput = offer && offer.querySelector('input[name="amount"]');
  const kidRadios = offer ? [...offer.querySelectorAll('input[name="kids"]')] : [];
  let lastKids = kidRadios.find((r) => r.checked);

  // Custom amount in euros, or 0 when the field is empty/invalid.
  const customAmount = () => {
    const v = Number(amountInput.value);
    return amountInput.value !== '' && Number.isFinite(v) && v >= 1 ? v : 0;
  };

  function renderOffer() {
    if (!offer) return;
    const price = Number(offer.dataset.pricePerChild);
    const custom = customAmount();
    const checked = kidRadios.find((r) => r.checked);
    const kids = checked ? Number(checked.value) : 1;
    const total = custom || price * kids;
    const money = new Intl.NumberFormat(lang() === 'en' ? 'en-IE' : 'bg-BG', { style: 'currency', currency: 'EUR', minimumFractionDigits: 0, maximumFractionDigits: 2 });
    document.querySelectorAll('[data-price]').forEach((el) => { el.textContent = money.format(price); });
    document.querySelectorAll('[data-total]').forEach((el) => { el.textContent = money.format(total); });
    offer.querySelector('[data-cta]').textContent = custom
      ? t('offer.ctaAmount').replace('{total}', money.format(total))
      : t('offer.ctaKids').replace('{kids}', t(kids === 1 ? 'offer.kid' : 'offer.kids').replace('{n}', kids)).replace('{total}', money.format(total));
    thanks.querySelector('[data-thanks-text]').textContent = custom
      ? t('thanks.custom')
      : t(kids === 1 ? 'thanks.one' : 'thanks.many').replace('{n}', kids);
  }

  if (offer) {
    // Typing an amount deselects the child options; picking an option clears the amount.
    amountInput.addEventListener('input', () => {
      if (customAmount()) kidRadios.forEach((r) => { r.checked = false; });
      else if (!kidRadios.some((r) => r.checked)) lastKids.checked = true;
      renderOffer();
    });
    offer.addEventListener('change', (e) => {
      if (e.target.name === 'kids') { lastKids = e.target; amountInput.value = ''; }
      renderOffer();
    });

    // Peak-end: the donor says they've sent it -> thank them and invite a share.
    offer.querySelector('[data-done]').addEventListener('click', () => {
      offer.classList.add('is-done');
      thanks.hidden = false;
      thanks.focus({ preventScroll: true });
      offer.scrollIntoView({ block: 'center', behavior: smooth });
    });
    offer.querySelector('[data-again]').addEventListener('click', () => {
      offer.classList.remove('is-done');
      thanks.hidden = true;
      offer.querySelector('details.pay').open = false;
      (kidRadios.find((r) => r.checked) || amountInput).focus();
    });
    offer.querySelector('[data-share]').addEventListener('click', async (e) => {
      const url = location.origin + location.pathname;
      if (navigator.share) {
        try { await navigator.share({ title: document.title, text: t('share.text'), url }); } catch {}
        return;
      }
      try {
        await navigator.clipboard.writeText(`${t('share.text')} ${url}`);
        e.currentTarget.querySelector('span').textContent = t('thanks.copied');
      } catch {}
    });
  }

  // ---------- Copy buttons ----------
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    const target = document.querySelector(btn.dataset.copy);
    const label = btn.querySelector('span');
    btn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(target.textContent.trim());
        label.textContent = t('pay.copied');
        btn.classList.add('is-done');
        setTimeout(() => { label.textContent = t('pay.copy'); btn.classList.remove('is-done'); }, 2000);
      } catch {
        getSelection().selectAllChildren(target); // let the user copy manually
      }
    });
  });

  // ---------- Mobile dock: hide while another donate button is on screen ----------
  const dock = document.querySelector('[data-dock]');
  if (dock) {
    const onScreen = new Set();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? onScreen.add(e.target) : onScreen.delete(e.target)));
      dock.classList.toggle('is-hidden', onScreen.size > 0);
      dock.inert = onScreen.size > 0;
    });
    document.querySelectorAll('#offer, .band, .site-footer').forEach((el) => io.observe(el));
  }

  // ---------- Gallery carousel ----------
  // Desktop: cross-fade. Touch / narrow screens: native scroll-snap track (follows the finger).
  const gallery = document.querySelector('[data-gallery]');
  if (gallery) {
    const track = gallery.querySelector('[data-track]');
    const slides = [...track.querySelectorAll('.slide')];
    const thumbs = [...gallery.querySelectorAll('.thumb')];
    const strip = gallery.querySelector('.thumbs');
    const count = gallery.querySelector('[data-count]');
    const pauseBtn = gallery.querySelector('[data-pause]');
    const snapQuery = matchMedia('(hover: none), (max-width: 960px)');
    const n = slides.length;
    let index = 0;
    let timer = null;
    let userPaused = reducedMotion;
    let holding = false; // mouse over, finger down or keyboard focus inside
    let lockSyncUntil = 0;

    const load = (i) => {
      const img = slides[(i + n) % n].querySelector('img[data-src]');
      if (img) { img.src = img.dataset.src; img.removeAttribute('data-src'); }
    };

    // Update everything except the track position.
    const setActive = (i) => {
      index = (i + n) % n;
      [index - 1, index, index + 1].forEach(load);
      slides.forEach((s, k) => {
        s.classList.toggle('is-active', k === index);
        s.setAttribute('aria-hidden', String(k !== index));
      });
      thumbs.forEach((b, k) => b.setAttribute('aria-current', String(k === index)));
      count.textContent = `${index + 1} / ${n}`;
      const thumb = thumbs[index];
      strip.scrollTo({ left: thumb.offsetLeft - (strip.clientWidth - thumb.offsetWidth) / 2, behavior: smooth });
    };

    const show = (i) => {
      setActive(i);
      if (snapQuery.matches) {
        lockSyncUntil = performance.now() + 900;
        track.scrollTo({ left: index * track.clientWidth, behavior: smooth });
      }
    };

    const stop = () => { clearInterval(timer); timer = null; };
    const start = () => {
      stop();
      if (!userPaused && !holding) timer = setInterval(() => show(index + 1), SLIDE_MS);
    };
    const go = (i) => { show(i); start(); };
    const hold = (on) => { holding = on; start(); };

    // Keep index in sync with native swipes.
    const syncFromScroll = () => {
      const i = Math.round(track.scrollLeft / track.clientWidth);
      if (i !== index && i >= 0 && i < n) { setActive(i); start(); }
    };
    let frame = 0;
    track.addEventListener('scroll', () => {
      if (!snapQuery.matches || frame || performance.now() < lockSyncUntil) return;
      frame = requestAnimationFrame(() => { frame = 0; syncFromScroll(); });
    }, { passive: true });
    track.addEventListener('scrollend', () => { if (snapQuery.matches) syncFromScroll(); });
    snapQuery.addEventListener('change', () => {
      if (snapQuery.matches) track.scrollTo({ left: index * track.clientWidth, behavior: 'instant' });
    });

    const renderPause = () => {
      pauseBtn.querySelector('use').setAttribute('href', userPaused ? '#i-play' : '#i-pause');
      pauseBtn.setAttribute('aria-label', t(userPaused ? 'gal.play' : 'gal.pause'));
    };

    gallery.querySelector('[data-prev]').addEventListener('click', () => go(index - 1));
    gallery.querySelector('[data-next]').addEventListener('click', () => go(index + 1));
    thumbs.forEach((b, k) => b.addEventListener('click', () => go(k)));
    pauseBtn.addEventListener('click', () => { userPaused = !userPaused; renderPause(); start(); });

    const stage = gallery.querySelector('.gallery-stage');
    stage.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') hold(true); });
    stage.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') hold(false); });
    track.addEventListener('touchstart', () => hold(true), { passive: true });
    track.addEventListener('touchend', () => hold(false), { passive: true });
    gallery.addEventListener('focusin', (e) => { if (e.target.matches(':focus-visible')) hold(true); });
    gallery.addEventListener('focusout', (e) => { if (!gallery.contains(e.relatedTarget)) hold(false); });

    document.addEventListener('languageChanged', renderPause);
    renderPause();
    load(1);
    load(n - 1);
    start();
  }

  // ---------- i18n hooks ----------
  document.addEventListener('languageChanged', () => { renderCountdown(); renderOffer(); });
  renderCountdown();
  renderOffer();
  setInterval(renderCountdown, 60 * 60 * 1000);
})();

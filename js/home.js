/* Подари Топлина — home page behaviour (Christmas 2026). */
(function () {
  'use strict';

  const CHRISTMAS = new Date(2026, 11, 25);
  const SLIDE_MS = 5000;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const t = (key) => (window.I18n ? window.I18n.t(key) : key);
  const lang = () => (window.I18n ? window.I18n.currentLang : 'bg');

  // ---------- Countdown ----------
  function renderCountdown() {
    const days = Math.ceil((CHRISTMAS - new Date()) / 864e5);
    document.querySelectorAll('[data-countdown]').forEach((el) => {
      el.hidden = days <= 0;
      if (days > 0) el.innerHTML = t(days === 1 ? 'count.one' : 'count').replace('{n}', `<strong>${days}</strong>`);
    });
  }

  // ---------- Offer: price × number of children ----------
  const offer = document.querySelector('[data-offer]');
  function renderOffer() {
    if (!offer) return;
    const price = Number(offer.dataset.pricePerChild);
    const kids = Number(offer.querySelector('input[name="kids"]:checked').value);
    const money = new Intl.NumberFormat(lang() === 'en' ? 'en-IE' : 'bg-BG', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 });
    document.querySelectorAll('[data-price]').forEach((el) => { el.textContent = money.format(price); });
    document.querySelectorAll('[data-total]').forEach((el) => { el.textContent = money.format(price * kids); });
    document.querySelectorAll('[data-kids]').forEach((el) => { el.textContent = t(kids === 1 ? 'offer.kid' : 'offer.kids').replace('{n}', kids); });
  }
  if (offer) offer.addEventListener('change', renderOffer);

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

  // ---------- Gallery carousel ----------
  const gallery = document.querySelector('[data-gallery]');
  if (gallery) {
    const slides = [...gallery.querySelectorAll('.slide')];
    const thumbs = [...gallery.querySelectorAll('.thumb')];
    const strip = gallery.querySelector('.thumbs');
    const count = gallery.querySelector('[data-count]');
    const pauseBtn = gallery.querySelector('[data-pause]');
    let index = 0;
    let timer = null;
    let userPaused = reducedMotion;

    const load = (i) => {
      const img = slides[i % slides.length].querySelector('img[data-src]');
      if (img) { img.src = img.dataset.src; img.removeAttribute('data-src'); }
    };

    const show = (i) => {
      index = (i + slides.length) % slides.length;
      load(index);
      load(index + 1);
      slides.forEach((s, k) => {
        s.classList.toggle('is-active', k === index);
        s.setAttribute('aria-hidden', String(k !== index));
      });
      thumbs.forEach((b, k) => b.setAttribute('aria-current', String(k === index)));
      count.textContent = `${index + 1} / ${slides.length}`;
      const thumb = thumbs[index];
      strip.scrollTo({ left: thumb.offsetLeft - (strip.clientWidth - thumb.offsetWidth) / 2, behavior: reducedMotion ? 'auto' : 'smooth' });
    };

    let hovering = false;
    let keyboardFocus = false;
    const stop = () => { clearInterval(timer); timer = null; };
    const start = () => {
      stop();
      if (!userPaused && !hovering && !keyboardFocus) timer = setInterval(() => show(index + 1), SLIDE_MS);
    };
    const go = (i) => { show(i); start(); };

    const renderPause = () => {
      pauseBtn.querySelector('use').setAttribute('href', userPaused ? '#i-play' : '#i-pause');
      pauseBtn.setAttribute('aria-label', t(userPaused ? 'gal.play' : 'gal.pause'));
    };

    gallery.querySelector('[data-prev]').addEventListener('click', () => go(index - 1));
    gallery.querySelector('[data-next]').addEventListener('click', () => go(index + 1));
    thumbs.forEach((b, k) => b.addEventListener('click', () => go(k)));
    pauseBtn.addEventListener('click', () => { userPaused = !userPaused; renderPause(); start(); });

    // Pause while the visitor is looking at or interacting with the gallery.
    const stage = gallery.querySelector('.gallery-stage');
    stage.addEventListener('mouseenter', () => { hovering = true; stop(); });
    stage.addEventListener('mouseleave', () => { hovering = false; start(); });
    gallery.addEventListener('focusin', (e) => { keyboardFocus = e.target.matches(':focus-visible'); start(); });
    gallery.addEventListener('focusout', (e) => { if (!gallery.contains(e.relatedTarget)) { keyboardFocus = false; start(); } });

    // Swipe on touch screens (arrows and thumbnails are the non-gesture alternative).
    let touchX = null;
    stage.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
    stage.addEventListener('touchend', (e) => {
      if (touchX === null) return;
      const dx = e.changedTouches[0].clientX - touchX;
      touchX = null;
      if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
    }, { passive: true });

    document.addEventListener('languageChanged', renderPause);
    renderPause();
    load(1);
    start();
  }

  // ---------- i18n hooks ----------
  document.addEventListener('languageChanged', () => { renderCountdown(); renderOffer(); });
  renderCountdown();
  renderOffer();
  setInterval(renderCountdown, 60 * 60 * 1000);
})();

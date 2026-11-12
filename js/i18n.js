/**
 * Internationalization (i18n) for the home page — Bulgarian (bg) and English (en).
 * data-i18n -> textContent, data-i18n-html -> innerHTML, data-i18n-label -> aria-label.
 */
(function () {
  'use strict';

  const translations = {
    bg: {
      'page.title': 'Подари Топлина | Облечи дете за Коледа 2026',
      'skip': 'Към съдържанието',
      'brand': 'Подари Топлина',
      'nav.how': 'Как помагаме',
      'nav.campaigns': 'Предни кампании',
      'nav.faq': 'Въпроси',
      'nav.donate': 'Дари',

      'hero.eyebrow': 'Коледа 2026 · Пловдивска област',
      'count': 'Остават {n} дни до Коледа',
      'count.one': 'Остава {n} ден до Коледа',
      'count.short': '{n} дни до Коледа',
      'count.short.one': '{n} ден до Коледа',
      'hero.title': 'Тази Коледа облечи <em>едно дете</em> от Пловдивско в нови топли дрехи',
      'hero.lede': 'Някои деца в Пловдивска област ще посрещнат зимата без топло яке. С <b data-price>35 €</b> ти им даряваш нови топли дрехи и Библия. Ние ги купуваме, опаковаме и предаваме лично в ръцете на детето преди 25 декември.',
      'hero.proof1': '131 деца облечени миналата Коледа',
      'hero.proof2': '57 дарители',
      'hero.proof3': 'Регистрирана фондация',

      'gal.label': 'Снимки от предните ни кампании',
      'gal.prev': 'Предишна снимка',
      'gal.next': 'Следваща снимка',
      'gal.pause': 'Спри въртенето',
      'gal.play': 'Пусни въртенето',
      'cap.e': 'Великден 2026 · 22 деца получиха нови дрехи',
      'cap.x': 'Коледа 2025 · 131 деца облечени за зимата',
      'cap.p': 'Коледа 2025 · купуваме и опаковаме дрехите сами',

      'ben.title': 'Какво прави твоят подарък',
      'ben.1.t': 'Детето отива на училище топло.',
      'ben.1.d': 'Новите дрехи са само негови — не наследени, не втора ръка.',
      'ben.2.t': 'Получава и Библия.',
      'ben.2.d': 'Подарък, който остава, когато дрехите омалеят.',
      'ben.3.t': 'Предаваме всичко лично.',
      'ben.3.d': 'Купуваме дрехите сами и ги даваме в ръцете на детето. Без посредници.',
      'ben.4.t': 'Виждаш къде отиде дарението ти.',
      'ben.4.d': 'Публикуваме снимки и видео от раздаването — точно както с 131 деца миналата Коледа.',

      'offer.label': 'Подарък за едно дете',
      'offer.per': 'на дете',
      'offer.inc1': 'Нови топли дрехи',
      'offer.inc2': 'Библия',
      'offer.inc3': 'Лично предаване преди Коледа',
      'offer.qty': 'Колко деца ще облечеш?',
      'offer.k1': '1 дете',
      'offer.k2': '2 деца',
      'offer.k3': '3 деца',
      'offer.k5': '5 деца',
      'offer.custom': 'Или въведи друга сума',
      'offer.customPh': 'напр. 50…',
      'offer.ctaKids': 'Облечи {kids} — {total}',
      'offer.ctaAmount': 'Дари {total}',
      'offer.kid': '{n} дете',
      'offer.kids': '{n} деца',
      'offer.note': 'Банков превод · Отнема 2 минути. Усещането остава много по-дълго.',

      'pay.title': 'Преведи сумата по тази сметка:',
      'pay.recipient': 'Получател',
      'pay.bank': 'Банка',
      'pay.amount': 'Сума',
      'pay.reason': 'Основание',
      'pay.reason.value': 'Дарение Подари Топлина',
      'pay.copy': 'Копирай',
      'pay.copied': 'Копирано',
      'pay.done': 'Преведох',

      'thanks.title': 'Благодарим ти!',
      'thanks.one': 'Тази Коледа едно дете ще бъде на топло — заради теб.',
      'thanks.many': 'Тази Коледа {n} деца ще бъдат на топло — заради теб.',
      'thanks.custom': 'Тази Коледа твоят подарък ще стигне до дете в нужда — заради теб.',
      'thanks.sub': 'Ще публикуваме снимки от раздаването преди Коледа. Сподели страницата и още едно дете може да получи подарък.',
      'thanks.share': 'Сподели с приятел',
      'thanks.copied': 'Линкът е копиран',
      'thanks.again': 'Облечи още деца',
      'share.text': 'Тази Коледа облякох дете в нови топли дрехи с Подари Топлина. Присъедини се и ти:',

      'trust.title': 'Защо да ни се довериш',
      'trust.1.t': 'Регистрирана фондация',
      'trust.1.d': 'Издаваме документ за дарение за данъчни цели.',
      'trust.2.t': 'Всичко е публично',
      'trust.2.d': 'Показваме покупките, снимки и видео от раздаването.',
      'trust.3.t': 'Правили сме го два пъти',
      'trust.3.d': '131 деца облечени по Коледа 2025. 150 пенсионери нахранени и 22 деца облечени по Великден 2026.',

      'faq.title': 'Въпроси преди да дариш',
      'faq.q1': 'Как да съм сигурен, че дарението стига до детето?',
      'faq.a1': 'Купуваме дрехите сами и ги раздаваме лично. Документираме целия процес — от покупката до раздаването — и публикуваме снимки и видео. Така направихме и при предните две кампании.',
      'faq.q2': 'Защо подарявате и Библия?',
      'faq.a2': 'Вярваме, че топлината не е само в дрехите. Библията е подарък, който остава, когато дрехите омалеят — и напомня на детето, че някой се е сетил за него.',
      'faq.q3': 'Издавате ли документ за дарение?',
      'faq.a3': 'Да. Ние сме регистрирана фондация и издаваме официален документ за дарение за данъчни цели.',
      'faq.q4': 'Мога ли да даря дрехи вместо пари?',
      'faq.a4': 'Да. Пиши на Алекс в <a href="https://www.instagram.com/a.donchevv" target="_blank" rel="noopener noreferrer">Instagram</a> и ще уговорим как да ги предадеш.',
      'faq.q5': 'Какво става, ако не съберете цялата сума?',
      'faq.a5': 'Купуваме толкова, за колкото стигнат даренията. Всяко облечено дете е успех.',
      'faq.q6': 'Кога ще видя резултата?',
      'faq.a6': 'Раздаваме подаръците преди Коледа и веднага след това публикуваме снимки и видео в социалните мрежи.',
      'faq.q7': 'Как мога да помогна освен с пари?',
      'faq.a7': 'Сподели тази страница с приятели и колеги. Ако си фирма, стани спонсор с лого на сайта — пиши ни в Instagram.',

      'past.eyebrow': 'Доказателството',
      'past.title': 'Вече го направихме два пъти',
      'past.lede': 'Ето какво постигнахме заедно с вас досега.',
      'past.x.date': 'Декември 2025',
      'past.x.title': 'Коледа 2025',
      'past.x.s1': 'събрани',
      'past.x.s2': 'деца облечени',
      'past.x.s3': 'дарители',
      'past.x.text': 'Първата ни кампания. Купихме топли шапки, блузи и панталони и на 19 декември ги раздадохме лично на деца от Видраре, Роман и Ловеч.',
      'past.x.vlog': 'Гледай влога',
      'past.x.more': 'Снимки и дарители',
      'past.e.date': 'Април 2026',
      'past.e.title': 'Великден 2026',
      'past.e.s1': 'пенсионери нахранени по 3 пъти',
      'past.e.s2': 'деца облечени в нови дрехи',
      'past.e.text': 'Нахранихме 150 пенсионери по три пъти в храм „Свети Георги Победоносец“ и облякохме 22 деца в нови дрехи.',

      'band.title': 'Едно дете в Пловдивско чака своя подарък.',
      'band.cta': 'Облечи едно дете',

      'team.eyebrow': 'Кои сме ние',
      'team.title': 'Хората зад Подари Топлина',
      'team.lede': 'Не сме голяма организация. Затова всяко дарение минава през нашите ръце.',
      'team.dimitar.name': 'Димитър',
      'team.dimitar.role': 'Софтуерен разработчик с мисия да създава технологии, които наистина помагат.',
      'team.alex.name': 'Алекс',
      'team.alex.role': 'Фитнес треньор с мисия да помага на хората да станат по-силни — физически и духовно.',
      'team.mihail.name': 'Михаил',
      'team.mihail.role': 'Студент с желание да допринесе за по-добро бъдеще на децата в нужда.',

      'footer.quote': '„Който има две ризи, нека даде на оногова, който няма.“',
      'footer.source': 'Лука 3:11',
      'footer.contact': 'Контакт',
      'footer.more': 'Още',
      'footer.archive': 'Коледа 2025',
      'footer.privacy': 'Политика за поверителност',
      'footer.copyright': '© 2026 Фондация Подари Топлина',
      'footer.made': 'Създадено с любов от Димитър, Алекс и Михаил'
    },

    en: {
      'page.title': 'Gift Warmth | Dress a Child for Christmas 2026',
      'skip': 'Skip to content',
      'brand': 'Gift Warmth',
      'nav.how': 'How It Works',
      'nav.campaigns': 'Past Campaigns',
      'nav.faq': 'FAQ',
      'nav.donate': 'Donate',

      'hero.eyebrow': 'Christmas 2026 · Plovdiv Region',
      'count': 'Only {n} days until Christmas',
      'count.one': 'Only {n} day until Christmas',
      'count.short': '{n} days to Christmas',
      'count.short.one': '{n} day to Christmas',
      'hero.title': 'This Christmas, dress <em>one child</em> from the Plovdiv region in new warm clothes',
      'hero.lede': 'Some children in the Plovdiv region will face winter without a warm coat. For <b data-price>€35</b> you give one of them new warm clothes and a Bible. We buy them, wrap them and put them in the child’s hands ourselves before December 25.',
      'hero.proof1': '131 children dressed last Christmas',
      'hero.proof2': '57 donors',
      'hero.proof3': 'Registered foundation',

      'gal.label': 'Photos from our past campaigns',
      'gal.prev': 'Previous photo',
      'gal.next': 'Next photo',
      'gal.pause': 'Pause slideshow',
      'gal.play': 'Play slideshow',
      'cap.e': 'Easter 2026 · 22 children got new clothes',
      'cap.x': 'Christmas 2025 · 131 children dressed for winter',
      'cap.p': 'Christmas 2025 · buying and packing the clothes ourselves',

      'ben.title': 'What your gift does',
      'ben.1.t': 'A child walks to school warm.',
      'ben.1.d': 'The clothes are new and theirs alone — not handed down, not second-hand.',
      'ben.2.t': 'They get a Bible too.',
      'ben.2.d': 'A gift that stays long after the clothes are outgrown.',
      'ben.3.t': 'We deliver everything in person.',
      'ben.3.d': 'We buy the clothes ourselves and hand them to each child. No middlemen.',
      'ben.4.t': 'You see where your money went.',
      'ben.4.d': 'We publish photos and video of the handover — just as we did for 131 children last Christmas.',

      'offer.label': 'A gift for one child',
      'offer.per': 'per child',
      'offer.inc1': 'New warm clothes',
      'offer.inc2': 'A Bible',
      'offer.inc3': 'Delivered in person before Christmas',
      'offer.qty': 'How many children will you dress?',
      'offer.k1': '1 child',
      'offer.k2': '2 children',
      'offer.k3': '3 children',
      'offer.k5': '5 children',
      'offer.custom': 'Or enter any amount',
      'offer.customPh': 'e.g. 50…',
      'offer.ctaKids': 'Dress {kids} — {total}',
      'offer.ctaAmount': 'Give {total}',
      'offer.kid': '{n} child',
      'offer.kids': '{n} children',
      'offer.note': 'Bank transfer · Takes 2 minutes. The feeling lasts much longer.',

      'pay.title': 'Transfer the amount to this account:',
      'pay.recipient': 'Recipient',
      'pay.bank': 'Bank',
      'pay.amount': 'Amount',
      'pay.reason': 'Reference',
      'pay.reason.value': 'Donation Gift Warmth',
      'pay.copy': 'Copy',
      'pay.copied': 'Copied',
      'pay.done': 'I’ve sent it',

      'thanks.title': 'Thank you!',
      'thanks.one': 'This Christmas, a child will be warm — because of you.',
      'thanks.many': 'This Christmas, {n} children will be warm — because of you.',
      'thanks.custom': 'This Christmas, your gift will reach a child in need — because of you.',
      'thanks.sub': 'We’ll publish photos of the handover before Christmas. Share this page and one more child could get a gift.',
      'thanks.share': 'Share with a friend',
      'thanks.copied': 'Link copied',
      'thanks.again': 'Dress more children',
      'share.text': 'This Christmas I dressed a child in new warm clothes with Gift Warmth. Join me:',

      'trust.title': 'Why you can trust us',
      'trust.1.t': 'Registered foundation',
      'trust.1.d': 'We issue an official donation receipt for tax purposes.',
      'trust.2.t': 'Everything is public',
      'trust.2.d': 'We show what we bought, with photos and video of the handover.',
      'trust.3.t': 'We’ve done it twice',
      'trust.3.d': '131 children dressed at Christmas 2025. 150 pensioners fed and 22 children dressed at Easter 2026.',

      'faq.title': 'Questions before you give',
      'faq.q1': 'How do I know my donation reaches the child?',
      'faq.a1': 'We buy the clothes ourselves and hand them out in person. We document the whole process — from purchase to handover — and publish photos and video. We did the same for both previous campaigns.',
      'faq.q2': 'Why a Bible?',
      'faq.a2': 'We believe warmth isn’t only about clothes. A Bible is a gift that stays when the clothes are outgrown — and reminds a child that someone thought of them.',
      'faq.q3': 'Do you issue donation receipts?',
      'faq.a3': 'Yes. We are a registered foundation and issue an official donation document for tax purposes.',
      'faq.q4': 'Can I donate clothes instead of money?',
      'faq.a4': 'Yes. Message Alex on <a href="https://www.instagram.com/a.donchevv" target="_blank" rel="noopener noreferrer">Instagram</a> and we’ll arrange the handover.',
      'faq.q5': 'What if you don’t raise the full amount?',
      'faq.a5': 'We buy as much as the donations allow. Every child we dress is a success.',
      'faq.q6': 'When will I see the results?',
      'faq.a6': 'We hand out the gifts before Christmas and publish photos and video on social media right after.',
      'faq.q7': 'How else can I help?',
      'faq.a7': 'Share this page with friends and colleagues. If you’re a company, become a sponsor with your logo on the site — message us on Instagram.',

      'past.eyebrow': 'The proof',
      'past.title': 'We’ve done this twice already',
      'past.lede': 'Here’s what we’ve achieved with you so far.',
      'past.x.date': 'December 2025',
      'past.x.title': 'Christmas 2025',
      'past.x.s1': 'raised',
      'past.x.s2': 'children dressed',
      'past.x.s3': 'donors',
      'past.x.text': 'Our first campaign. We bought warm hats, sweaters and trousers and on December 19 handed them out in person to children in Vidrare, Roman and Lovech.',
      'past.x.vlog': 'Watch the vlog',
      'past.x.more': 'Photos & donors',
      'past.e.date': 'April 2026',
      'past.e.title': 'Easter 2026',
      'past.e.s1': 'pensioners fed 3 times',
      'past.e.s2': 'children dressed in new clothes',
      'past.e.text': 'We fed 150 pensioners three times at St. George the Victorious church and dressed 22 children in new clothes.',

      'band.title': 'A child in the Plovdiv region is waiting for their gift.',
      'band.cta': 'Dress a child',

      'team.eyebrow': 'Who we are',
      'team.title': 'The people behind Gift Warmth',
      'team.lede': 'We are not a big organisation. That’s why every donation passes through our own hands.',
      'team.dimitar.name': 'Dimitar',
      'team.dimitar.role': 'Software developer on a mission to build technology that truly helps.',
      'team.alex.name': 'Alex',
      'team.alex.role': 'Fitness coach on a mission to help people grow stronger — physically and spiritually.',
      'team.mihail.name': 'Michael',
      'team.mihail.role': 'Student who wants to build a better future for children in need.',

      'footer.quote': '“Whoever has two tunics is to share with him who has none.”',
      'footer.source': 'Luke 3:11',
      'footer.contact': 'Contact',
      'footer.more': 'More',
      'footer.archive': 'Christmas 2025',
      'footer.privacy': 'Privacy Policy',
      'footer.copyright': '© 2026 Gift Warmth Foundation',
      'footer.made': 'Made with love by Dimitar, Alex and Michael'
    }
  };

  const I18n = {
    currentLang: 'bg',
    defaultLang: 'bg',
    supportedLangs: ['bg', 'en'],

    init() {
      let stored = null;
      try { stored = localStorage.getItem('preferred-language'); } catch {}
      this.currentLang = this.supportedLangs.includes(stored) ? stored : this.defaultLang;
      this.apply();
    },

    setLanguage(lang) {
      if (!this.supportedLangs.includes(lang)) return;
      this.currentLang = lang;
      try { localStorage.setItem('preferred-language', lang); } catch {}
      this.apply();
    },

    t(key) {
      if (key in translations[this.currentLang]) return translations[this.currentLang][key];
      if (key in translations[this.defaultLang]) return translations[this.defaultLang][key];
      return key;
    },

    apply() {
      // A missing key keeps the Bulgarian text already in the HTML instead of printing the key.
      const each = (attr, write) => document.querySelectorAll(`[data-${attr}]`).forEach((el) => {
        const key = el.getAttribute(`data-${attr}`);
        const value = this.t(key);
        if (value !== key) write(el, value);
      });
      each('i18n', (el, v) => { el.textContent = v; });
      each('i18n-html', (el, v) => { el.innerHTML = v; });
      each('i18n-label', (el, v) => { el.setAttribute('aria-label', v); });
      each('i18n-placeholder', (el, v) => { el.placeholder = v; });
      document.title = this.t('page.title');
      document.documentElement.lang = this.currentLang;
      document.querySelectorAll('.lang-btn').forEach((btn) => {
        const on = btn.dataset.lang === this.currentLang;
        btn.classList.toggle('active', on);
        btn.setAttribute('aria-pressed', String(on));
      });
      document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: this.currentLang } }));
    }
  };

  window.I18n = I18n;

  function start() {
    I18n.init();
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => I18n.setLanguage(btn.dataset.lang));
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();

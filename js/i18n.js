/**
 * Internationalization (i18n) System
 * Supports Bulgarian (bg) and English (en)
 */

(function() {
  'use strict';

  const translations = {
    bg: {
      // Navigation
      'nav.about': 'За нас',
      'nav.how': 'Как работи',
      'nav.faq': 'Въпроси',
      'nav.archive': 'Предни кампании',
      'nav.donate': 'Дари сега',

      // Hero
      'hero.countdown': 'Остават',
      'hero.countdown.days': 'дни до Великден',
      'hero.title': 'Подари Топлина',
      'hero.subtitle': '200 възрастни и деца очакват топла храна и дрехи този Великден',
      'hero.quote': '"Който има две ризи, нека даде на оногова, който няма."',
      'hero.quote.source': '— Лука 3:11',
      'hero.btn.donate': 'Дари сега',
      'hero.btn.learn': 'Научи повече',

      // Progress
      'progress.currency': '€',
      'progress.goal': 'събрани от 5,000€',
      'progress.children': 'възрастни и деца очакват помощ',
      'progress.btn': 'Помогни да стигнем целта',

      // Mission
      'mission.title': 'Защо го правим?',
      'mission.text': 'След невероятния успех на Коледната ни кампания, в която облякохме над 150 деца, продължаваме мисията си. Този Великден 200 възрастни и деца очакват топла храна и дрехи. Целта ни е да съберем 5,000€ и да подарим топлина там, където е най-нужна.',
      'mission.stat.children': 'възрастни и деца очакват помощ',
      'mission.stat.goal': 'цел на кампанията',
      'mission.stat.note': 'Топла храна и дрехи за Великден',

      // About
      'about.title': 'Кои сме ние',
      'about.dimitar.name': 'Димитър',
      'about.dimitar.role': 'Софтуерен разработчик и инженер с мисия да създава технологии, които наистина помагат.',
      'about.alex.name': 'Алекс',
      'about.alex.role': 'Фитнес треньор с мисия да помага на хората да станат по-силни - физически и духовно.',
      'about.mihail.name': 'Михаил',
      'about.mihail.role': 'Студент с желание да допринесе за по-добро бъдеще на децата в нужда.',
      'about.quote': '"Коледната ни кампания беше невероятен успех — облякохме над 150 деца! Но успехът не е причина да спрем, напротив — той ни мотивира да направим още повече. Този Великден продължаваме с нова цел и нова енергия."',

      // Timeline
      'timeline.title': 'Пътят на вашето дарение',
      'timeline.date1': '7-11 АПРИЛ',
      'timeline.title1': 'Събираме средства',
      'timeline.desc1': 'Всяко дарение се отчита публично. Следете напредъка в реално време.',
      'timeline.date2': '8-11 АПРИЛ',
      'timeline.title2': 'Купуваме храна и дрехи',
      'timeline.desc2': 'Публикуваме какво сме купили с касови бележки и снимки.',
      'timeline.date3': '11-12 АПРИЛ',
      'timeline.title3': 'Раздаваме подаръците',
      'timeline.desc3': 'Посещаваме хората лично и предаваме храната и дрехите.',
      'timeline.date4': 'ДО 20 АПРИЛ',
      'timeline.title4': 'Споделяме влога',
      'timeline.desc4': 'Качваме пълен видео документ от цялото пътуване.',

      // Donation
      'donate.title': 'Дари за Великден',
      'donate.subtitle': 'Направи дарение чрез банков превод:',
      'donate.bank.iban': 'IBAN:',
      'donate.bank.bank': 'Банка:',
      'donate.bank.address': 'Адрес:',
      'donate.bank.address.value': 'София, 1000 Ул. Джон Ленън 8',
      'donate.bank.recipient': 'Получател:',
      'donate.bank.reason': 'Основание:',
      'donate.bank.reason.value': 'Дарение Подари Топлина',
      'donate.copy': 'Копирай',
      'donate.copied': 'Копирано!',
      'donate.security.secure': 'Сигурен банков превод',
      'donate.security.nodata': 'Регистрирана фондация',

      // FAQ
      'faq.title': 'Често задавани въпроси',
      'faq.q1': 'Как знам, че парите отиват за хора в нужда?',
      'faq.a1': 'Документираме целия процес - от събирането на средства, през покупките, до самото раздаване. Всичко се публикува с видео и снимки.',
      'faq.q2': 'Мога ли да даря дрехи или храна вместо пари?',
      'faq.a2': 'Да, можеш! Свържи се с Алекс в Instagram за координация.',
      'faq.q3': 'Издавате ли документ за дарение?',
      'faq.a3': 'Да, издаваме официални документи за дарение. Ние сме регистрирана фондация и можем да предоставим необходимите документи за данъчни цели.',
      'faq.q4': 'Какво става ако не съберете цялата сума?',
      'faq.a4': 'Ще купим толкова, за колкото ни стигнат парите. Всеки човек, на когото помогнем, е успех.',
      'faq.q5': 'Как мога да помогна освен с пари?',
      'faq.a5.1': 'Сподели кампанията в социалните мрежи',
      'faq.a5.2': 'Разкажи на приятели и колеги',
      'faq.a5.3': 'Ако си фирма - стани спонсор с лого на сайта',
      'faq.a5.4': 'Свържи се с нас за други идеи',
      'faq.q6': 'Кога ще видя резултата?',
      'faq.a6': 'Влогът от раздаването ще бъде готов до 20 април. Ще го споделим във всички социални мрежи.',

      // Donors
      'donors.title': 'Нашите дарители',
      'donors.subtitle': 'Благодарим на всички, които подкрепят каузата',
      'donors.join': 'Искаш да се присъединиш към списъка?',
      'donors.empty': 'Бъди първият дарител!',

      // Footer
      'footer.contact': 'Свържи се с нас',
      'footer.social': 'Социални мрежи',
      'footer.quote': '"Който има две ризи, нека даде на оногова, който няма."',
      'footer.copyright': '© 2026 Фондация Подари Топлина',
      'footer.privacy': 'Политика за поверителност',
      'footer.made': 'Създадено с любов от Димитър, Алекс и Михаил'
    },

    en: {
      // Navigation
      'nav.about': 'About Us',
      'nav.how': 'How It Works',
      'nav.faq': 'FAQ',
      'nav.archive': 'Past Campaigns',
      'nav.donate': 'Donate Now',

      // Hero
      'hero.countdown': '',
      'hero.countdown.days': 'days remaining until Easter',
      'hero.title': 'Gift Warmth',
      'hero.subtitle': '200 adults and children are waiting for warm food and clothes this Easter',
      'hero.quote': '"Whoever has two tunics is to share with him who has none, and whoever has food is to do likewise,"',
      'hero.quote.source': '— Luke 3:11',
      'hero.btn.donate': 'Donate Now',
      'hero.btn.learn': 'Learn More',

      // Progress
      'progress.currency': '€',
      'progress.goal': 'raised of €5,000',
      'progress.children': 'adults and children waiting for help',
      'progress.btn': 'Help us reach the goal',

      // Mission
      'mission.title': 'Why We Do This',
      'mission.text': 'After the incredible success of our Christmas campaign, where we clothed over 150 children, we continue our mission. This Easter, 200 adults and children are waiting for warm food and clothes. Our goal is to raise €5,000 and bring warmth where it is needed most.',
      'mission.stat.children': 'adults and children need help',
      'mission.stat.goal': 'campaign goal',
      'mission.stat.note': 'Warm food and clothes for Easter',

      // About
      'about.title': 'Who We Are',
      'about.dimitar.name': 'Dimitar',
      'about.dimitar.role': 'Software developer and engineer with a mission to create technologies that truly help.',
      'about.alex.name': 'Alexander',
      'about.alex.role': 'Fitness trainer with a mission to help people become stronger - physically and spiritually.',
      'about.mihail.name': 'Michael',
      'about.mihail.role': 'Student with a desire to contribute to a better future for children in need.',
      'about.quote': '"Our Christmas campaign was an incredible success — we clothed over 150 children! But success is no reason to stop, on the contrary — it motivates us to do even more. This Easter we continue with a new goal and renewed energy."',

      // Timeline
      'timeline.title': 'The Journey of Your Donation',
      'timeline.date1': 'APRIL 7-11',
      'timeline.title1': 'Collecting Funds',
      'timeline.desc1': 'Every donation is publicly reported. Track progress in real time.',
      'timeline.date2': 'APRIL 8-11',
      'timeline.title2': 'Buying Food & Clothes',
      'timeline.desc2': 'We publish what we bought with receipts and photos.',
      'timeline.date3': 'APRIL 11-12',
      'timeline.title3': 'Delivering Gifts',
      'timeline.desc3': 'We visit people in person and hand over the food and clothes.',
      'timeline.date4': 'BY APRIL 20',
      'timeline.title4': 'Sharing the Vlog',
      'timeline.desc4': 'We upload a full video documentary of the entire journey.',

      // Donation
      'donate.title': 'Donate for Easter',
      'donate.subtitle': 'Make a donation via bank transfer:',
      'donate.bank.iban': 'IBAN:',
      'donate.bank.bank': 'Bank:',
      'donate.bank.address': 'Address:',
      'donate.bank.address.value': 'Sofia, 1000 John Lennon St. 8',
      'donate.bank.recipient': 'Recipient:',
      'donate.bank.reason': 'Reference:',
      'donate.bank.reason.value': 'Donation Gift Warmth',
      'donate.copy': 'Copy',
      'donate.copied': 'Copied!',
      'donate.security.secure': 'Secure bank transfer',
      'donate.security.nodata': 'Registered foundation',

      // FAQ
      'faq.title': 'Frequently Asked Questions',
      'faq.q1': 'How do I know the money goes to people in need?',
      'faq.a1': 'We document the entire process - from fundraising, through purchases, to distribution. Everything is published with videos and photos.',
      'faq.q2': 'Can I donate clothes or food instead of money?',
      'faq.a2': 'Yes, you can! Contact Alexander on Instagram to coordinate.',
      'faq.q3': 'Do you issue donation receipts?',
      'faq.a3': 'Yes, we issue official donation documents. We are a registered foundation and can provide the necessary documents for tax purposes.',
      'faq.q4': 'What happens if you don\'t raise the full amount?',
      'faq.a4': 'We will buy as much as the money allows. Every person we help is a success.',
      'faq.q5': 'How can I help besides money?',
      'faq.a5.1': 'Share the campaign on social media',
      'faq.a5.2': 'Tell friends and colleagues',
      'faq.a5.3': 'If you\'re a company - become a sponsor with your logo on the site',
      'faq.a5.4': 'Contact us for other ideas',
      'faq.q6': 'When will I see the results?',
      'faq.a6': 'The vlog from the distribution will be ready by April 20. We\'ll share it on all social media.',

      // Donors
      'donors.title': 'Our Donors',
      'donors.subtitle': 'Thank you to everyone who supports the cause',
      'donors.join': 'Want to join the list?',
      'donors.empty': 'Be the first donor!',

      // Footer
      'footer.contact': 'Contact Us',
      'footer.social': 'Social Media',
      'footer.quote': '"Whoever has two tunics is to share with him who has none, and whoever has food is to do likewise,"',
      'footer.copyright': '© 2026 Gift Warmth Foundation',
      'footer.privacy': 'Privacy Policy',
      'footer.made': 'Made with love by Dimitar, Alexander, and Michael'
    }
  };

  const I18n = {
    currentLang: 'bg',
    defaultLang: 'bg',
    supportedLangs: ['bg', 'en'],

    init() {
      // Check for stored preference (only use if user explicitly chose a language)
      const storedLang = localStorage.getItem('preferred-language');

      if (storedLang && this.supportedLangs.includes(storedLang)) {
        this.currentLang = storedLang;
      } else {
        // Default to Bulgarian (primary language of the site)
        this.currentLang = 'bg';
      }

      this.applyTranslations();
      this.updateLangSwitcher();
      this.updateHtmlLang();
    },

    setLanguage(lang) {
      if (!this.supportedLangs.includes(lang)) return;

      this.currentLang = lang;
      localStorage.setItem('preferred-language', lang);
      this.applyTranslations();
      this.updateLangSwitcher();
      this.updateHtmlLang();
    },

    t(key) {
      // Check if key exists in current language (allows empty strings)
      if (key in translations[this.currentLang]) {
        return translations[this.currentLang][key];
      }
      // Fallback to default language
      if (key in translations[this.defaultLang]) {
        return translations[this.defaultLang][key];
      }
      return key;
    },

    applyTranslations() {
      // Translate all elements with data-i18n attribute
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = this.t(key);

        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translation;
        } else {
          el.textContent = translation;
        }
      });

      // Translate elements with data-i18n-html (for HTML content)
      document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        el.innerHTML = this.t(key);
      });

      // Update page title
      document.title = this.currentLang === 'en'
        ? 'Gift Warmth | Easter Initiative for People in Need'
        : 'Подари Топлина | Великденска инициатива за хора в нужда';

      // Update logo text
      const logoText = document.querySelector('.logo');
      if (logoText) {
        const svg = logoText.querySelector('svg');
        logoText.innerHTML = '';
        if (svg) logoText.appendChild(svg);
        logoText.appendChild(document.createTextNode(this.currentLang === 'en' ? ' Gift Warmth' : ' Подари Топлина'));
      }

      // Dispatch event for components that need to re-render (like donors list)
      document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: this.currentLang } }));
    },

    updateLangSwitcher() {
      const switcher = document.getElementById('lang-switcher');
      if (switcher) {
        const buttons = switcher.querySelectorAll('button');
        buttons.forEach(btn => {
          btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
        });
      }
    },

    updateHtmlLang() {
      document.documentElement.lang = this.currentLang;
    }
  };

  // Expose globally
  window.I18n = I18n;

  // Initialize when DOM is ready
  function initI18n() {
    I18n.init();

    // Add click handlers for language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        I18n.setLanguage(lang);

        // Update all language buttons (including mobile)
        document.querySelectorAll('.lang-btn').forEach(b => {
          b.classList.toggle('active', b.dataset.lang === lang);
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
  } else {
    initI18n();
  }

})();

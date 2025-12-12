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
      'nav.transparency': 'Прозрачност',
      'nav.how': 'Как работи',
      'nav.faq': 'Въпроси',
      'nav.donate': 'Дари сега',

      // Hero
      'hero.countdown': 'Остават',
      'hero.countdown.days': 'дни до Коледа',
      'hero.title': 'Подари Топлина',
      'hero.subtitle': '200 деца очакват своята първа топла дреха тази зима',
      'hero.quote': '"Който има две ризи, нека даде на оногова, който няма."',
      'hero.quote.source': '— Лука 3:11',
      'hero.btn.donate': 'Дари сега',
      'hero.btn.learn': 'Научи повече',

      // Progress
      'progress.currency': '€',
      'progress.goal': 'събрани от 5,000€',
      'progress.children': 'деца вече имат топли дрехи',
      'progress.btn': 'Помогни да стигнем целта',

      // Mission
      'mission.title': 'Защо го правим?',
      'mission.text': 'В цяла България има деца от финансово и социално уязвими семейства, които нямат топли дрехи за зимата. Тази година ще посетим село Видраре, град Роман и град Ловеч - един от най-бедните региони в страната според официалната статистика на НСИ. Искаме да донесем топлина там, където е най-нужна.',
      'mission.stat.children': 'деца чакат помощ',
      'mission.stat.price': '= 1 комплект дрехи',
      'mission.stat.note': '1 топла горница с дълъг ръкав + 1 топла долница',

      // About
      'about.title': 'Кои сме ние',
      'about.dimitar.name': 'Димитър',
      'about.dimitar.role': 'Софтуерен разработчик и инженер с мисия да създава технологии, които наистина помагат.',
      'about.alex.name': 'Алекс',
      'about.alex.role': 'Фитнес треньор с мисия да помага на хората да станат по-силни - физически и духовно.',
      'about.mihail.name': 'Михаил',
      'about.mihail.role': 'Студент с желание да допринесе за по-добро бъдеще на децата в нужда.',
      'about.quote': '"Тази Коледа решихме да направим нещо различно. Не просто да дарим пари някъде, а да се включим лично. Да видим очите на децата. Да усетим какво означава да помогнеш."',

      // Timeline
      'timeline.title': 'Пътят на вашето дарение',
      'timeline.date1': '9-13 ДЕКЕМВРИ',
      'timeline.title1': 'Събираме средства',
      'timeline.desc1': 'Всяко дарение се отчита публично. Следете напредъка в реално време.',
      'timeline.date2': '13-16 ДЕКЕМВРИ',
      'timeline.title2': 'Купуваме дрехите',
      'timeline.desc2': 'Публикуваме какво сме купили с касови бележки и снимки.',
      'timeline.date3': '19 ДЕКЕМВРИ',
      'timeline.title3': 'Раздаваме подаръците',
      'timeline.desc3': 'Посещаваме селата лично и предаваме дрехите на децата.',
      'timeline.date4': 'ДО 25 ДЕКЕМВРИ',
      'timeline.title4': 'Споделяме влога',
      'timeline.desc4': 'Качваме пълен видео документ от цялото пътуване.',

      // Map
      'map.title': 'Къде ще бъдем',
      'map.note': 'Кликнете върху маркерите за повече информация',
      'map.city.vidrare': 'Видраре',
      'map.city.roman': 'Роман',
      'map.city.lovech': 'Ловеч',
      'map.partner.badge': 'Партньор на място',
      'map.partner.name': 'Фондация "Добро за всеки"',
      'map.partner.desc': 'Нашият доверен партньор, който работи директно с общностите в Северозападна България от години.',
      'map.partner.btn': 'Научи повече за фондацията',

      // Transparency
      'transparency.title': 'Пълна прозрачност',
      'transparency.intro': 'Всяка стотинка е проследима. Ето какво купуваме:',
      'transparency.sizes': 'Размери: 1-9 години',
      'transparency.carousel.hint': 'Плъзни наляво/надясно за повече снимки',
      'transparency.total.label': 'Общо на комплект:',
      'transparency.total.includes': 'Включва: 1 горница с дълъг ръкав + 1 долница',
      'transparency.btn': 'Дари 1 комплект',

      // Donation
      'donate.title': 'Подари Топлина',
      'donate.subtitle': 'Направи дарение чрез банков превод:',
      'donate.bank.iban': 'IBAN:',
      'donate.bank.bank': 'Банка:',
      'donate.bank.recipient': 'Получател:',
      'donate.bank.reason': 'Основание:',
      'donate.bank.reason.value': 'Дарение Подари Топлина',
      'donate.copy': 'Копирай',
      'donate.copied': 'Копирано!',
      'donate.security.secure': 'Сигурен банков превод',
      'donate.security.nodata': 'Регистрирана фондация',

      // FAQ
      'faq.title': 'Често задавани въпроси',
      'faq.q1': 'Как знам, че парите отиват за деца?',
      'faq.a1': 'Ще документираме целия процес - от събирането на средства, през покупката на дрехите, до самото раздаване. Всичко ще бъде публикувано с видео и снимки.',
      'faq.q2': 'Мога ли да даря дрехи вместо пари?',
      'faq.a2': 'Да, можеш! Свържи се с Алекс в Instagram за координация на дарението на дрехи.',
      'faq.q3': 'Издавате ли документ за дарение?',
      'faq.a3': 'Да, издаваме официални документи за дарение. Ние сме легитимна регистрирана фондация и можем да предоставим необходимите документи за данъчни цели.',
      'faq.q4': 'Какво става ако не съберете цялата сума?',
      'faq.a4': 'Ще купим толкова комплекти, за колкото ни стигнат парите. Всяко дете, което облечем, е успех.',
      'faq.q5': 'Как мога да помогна освен с пари?',
      'faq.a5.1': 'Сподели кампанията в социалните мрежи',
      'faq.a5.2': 'Разкажи на приятели и колеги',
      'faq.a5.3': 'Ако си фирма - стани спонсор с лого на сайта',
      'faq.a5.4': 'Свържи се с нас за други идеи',
      'faq.q6': 'Кога ще видя резултата?',
      'faq.a6': 'Влогът от раздаването ще бъде готов до Коледа (25 декември). Ще го споделим във всички социални мрежи.',

      // Donors
      'donors.title': 'Нашите дарители',
      'donors.subtitle': 'Благодарим на всички, които подкрепиха каузата',
      'donors.join': 'Искаш да се присъединиш към списъка?',
      'donors.empty': 'Бъди първият дарител!',

      // Footer
      'footer.contact': 'Свържи се с нас',
      'footer.social': 'Социални мрежи',
      'footer.support': 'С подкрепата на',
      'footer.quote': '"Който има две ризи, нека даде на оногова, който няма."',
      'footer.copyright': '© 2025 Подари Топлина | Лична благотворителна инициатива',
      'footer.privacy': 'Политика за поверителност',
      'footer.made': 'Създадено с любов от Димитър, Алекс и Михаил'
    },

    en: {
      // Navigation
      'nav.about': 'About Us',
      'nav.transparency': 'Transparency',
      'nav.how': 'How It Works',
      'nav.faq': 'FAQ',
      'nav.donate': 'Donate Now',

      // Hero
      'hero.countdown': '',
      'hero.countdown.days': 'days remaining until Christmas',
      'hero.title': 'Gift Warmth',
      'hero.subtitle': '200 children are waiting for their first warm clothes this winter',
      'hero.quote': '"If you have two shirts, give one to someone who has none."',
      'hero.quote.source': '— Luke 3:11',
      'hero.btn.donate': 'Donate Now',
      'hero.btn.learn': 'Learn More',

      // Progress
      'progress.currency': '€',
      'progress.goal': 'raised of €5,000',
      'progress.children': 'children already have warm clothes',
      'progress.btn': 'Help us reach the goal',

      // Mission
      'mission.title': 'Why We Do This',
      'mission.text': 'Across Bulgaria, there are children from financially and socially vulnerable families who lack warm clothes for winter. This year we will visit the village of Vidrare, the town of Roman, and the city of Lovech - one of the poorest regions in the country according to official statistics. We want to bring warmth where it is needed most.',
      'mission.stat.children': 'children need help',
      'mission.stat.price': '= 1 clothing set',
      'mission.stat.note': '1 warm long-sleeve top + 1 warm pants',

      // About
      'about.title': 'Who We Are',
      'about.dimitar.name': 'Dimitar',
      'about.dimitar.role': 'Software developer and engineer with a mission to create technologies that truly help.',
      'about.alex.name': 'Alexander',
      'about.alex.role': 'Fitness trainer with a mission to help people become stronger - physically and spiritually.',
      'about.mihail.name': 'Michael',
      'about.mihail.role': 'Student with a desire to contribute to a better future for children in need.',
      'about.quote': '"This Christmas we decided to do something different. Not just donate money somewhere, but get personally involved. To see the children\'s eyes. To feel what it means to help."',

      // Timeline
      'timeline.title': 'The Journey of Your Donation',
      'timeline.date1': 'DECEMBER 9-13',
      'timeline.title1': 'Collecting Funds',
      'timeline.desc1': 'Every donation is publicly reported. Track progress in real time.',
      'timeline.date2': 'DECEMBER 13-16',
      'timeline.title2': 'Buying Clothes',
      'timeline.desc2': 'We publish what we bought with receipts and photos.',
      'timeline.date3': 'DECEMBER 19',
      'timeline.title3': 'Delivering Gifts',
      'timeline.desc3': 'We visit the villages in person and hand over the clothes to the children.',
      'timeline.date4': 'BY DECEMBER 25',
      'timeline.title4': 'Sharing the Vlog',
      'timeline.desc4': 'We upload a full video documentary of the entire journey.',

      // Map
      'map.title': 'Where We Will Be',
      'map.note': 'Click on markers for more information',
      'map.city.vidrare': 'Vidrare',
      'map.city.roman': 'Roman',
      'map.city.lovech': 'Lovech',
      'map.partner.badge': 'Local Partner',
      'map.partner.name': '"Good for Everyone" Foundation',
      'map.partner.desc': 'Our trusted partner who has been working directly with communities in Northwestern Bulgaria for years.',
      'map.partner.btn': 'Learn more about the foundation',

      // Transparency
      'transparency.title': 'Full Transparency',
      'transparency.intro': 'Every penny is traceable. Here\'s what we buy:',
      'transparency.sizes': 'Sizes: 1-9 years old',
      'transparency.carousel.hint': 'Swipe left/right for more photos',
      'transparency.total.label': 'Total per set:',
      'transparency.total.includes': 'Includes: 1 long-sleeve top + 1 pants',
      'transparency.btn': 'Donate 1 set',

      // Donation
      'donate.title': 'Gift Warmth',
      'donate.subtitle': 'Make a donation via bank transfer:',
      'donate.bank.iban': 'IBAN:',
      'donate.bank.bank': 'Bank:',
      'donate.bank.recipient': 'Recipient:',
      'donate.bank.reason': 'Reference:',
      'donate.bank.reason.value': 'Donation Gift Warmth',
      'donate.copy': 'Copy',
      'donate.copied': 'Copied!',
      'donate.security.secure': 'Secure bank transfer',
      'donate.security.nodata': 'Registered foundation',

      // FAQ
      'faq.title': 'Frequently Asked Questions',
      'faq.q1': 'How do I know the money goes to children?',
      'faq.a1': 'We will document the entire process - from fundraising, through buying clothes, to distribution. Everything will be published with videos and photos.',
      'faq.q2': 'Can I donate clothes instead of money?',
      'faq.a2': 'Yes, you can! Contact Alexander on Instagram to coordinate clothing donations.',
      'faq.q3': 'Do you issue donation receipts?',
      'faq.a3': 'Yes, we issue official donation documents. We are a legitimate registered foundation and can provide the necessary documents for tax purposes.',
      'faq.q4': 'What happens if you don\'t raise the full amount?',
      'faq.a4': 'We will buy as many sets as the money allows. Every child we clothe is a success.',
      'faq.q5': 'How can I help besides money?',
      'faq.a5.1': 'Share the campaign on social media',
      'faq.a5.2': 'Tell friends and colleagues',
      'faq.a5.3': 'If you\'re a company - become a sponsor with your logo on the site',
      'faq.a5.4': 'Contact us for other ideas',
      'faq.q6': 'When will I see the results?',
      'faq.a6': 'The vlog from the distribution will be ready by Christmas (December 25). We\'ll share it on all social media.',

      // Donors
      'donors.title': 'Our Donors',
      'donors.subtitle': 'Thank you to everyone who supported the cause',
      'donors.join': 'Want to join the list?',
      'donors.empty': 'Be the first donor!',

      // Footer
      'footer.contact': 'Contact Us',
      'footer.social': 'Social Media',
      'footer.support': 'Supported by',
      'footer.quote': '"If you have two shirts, give one to someone who has none."',
      'footer.copyright': '© 2025 Gift Warmth | Personal Charity Initiative',
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
      return translations[this.currentLang][key] || translations[this.defaultLang][key] || key;
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
        ? 'Gift Warmth | Christmas Initiative for Children in Need'
        : 'Подари Топлина | Коледна инициатива за деца в нужда';

      // Update logo text
      const logoText = document.querySelector('.logo');
      if (logoText) {
        const svg = logoText.querySelector('svg');
        logoText.innerHTML = '';
        if (svg) logoText.appendChild(svg);
        logoText.appendChild(document.createTextNode(this.currentLang === 'en' ? ' Gift Warmth' : ' Подари Топлина'));
      }
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

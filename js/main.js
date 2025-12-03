/**
 * Подари Топлина - Main JavaScript
 * Christmas Charity Initiative 2025
 */

(function() {
  'use strict';

  // ==========================================================================
  // Configuration
  // ==========================================================================

  const CONFIG = {
    targetDate: new Date('2025-12-20T00:00:00'),
    christmasDate: new Date('2025-12-25T00:00:00'),
    donationsDataPath: 'data/donations.json',
    pricePerChild: 40,
    animationDuration: 2000,
    snowflakeCount: 50
  };

  // ==========================================================================
  // Utility Functions
  // ==========================================================================

  /**
   * Debounce function to limit function calls
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  /**
   * Animate a number from start to end
   */
  function animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    const range = end - start;

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + range * easeOut);

      element.textContent = current.toLocaleString('bg-BG');

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  /**
   * Format number with Bulgarian locale
   */
  function formatNumber(num) {
    return num.toLocaleString('bg-BG');
  }

  // ==========================================================================
  // Countdown Timer
  // ==========================================================================

  const Countdown = {
    element: null,
    daysElement: null,

    init() {
      this.element = document.getElementById('countdown');
      this.daysElement = document.getElementById('daysLeft');

      if (!this.element || !this.daysElement) return;

      this.update();
      setInterval(() => this.update(), 60000); // Update every minute
    },

    update() {
      const now = new Date();
      const diff = CONFIG.christmasDate - now;

      if (diff <= 0) {
        this.daysElement.textContent = '0';
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      this.daysElement.textContent = days;
    }
  };

  // ==========================================================================
  // Progress Bar
  // ==========================================================================

  const ProgressBar = {
    progressBar: null,
    currentAmountEl: null,
    childrenCountEl: null,
    hasAnimated: false,
    data: { current: 0, goal: 10000 },

    init() {
      this.progressBar = document.getElementById('progressBar');
      this.currentAmountEl = document.getElementById('currentAmount');
      this.childrenCountEl = document.getElementById('childrenCount');

      if (!this.progressBar) return;

      this.loadData();
      this.observeProgress();
    },

    async loadData() {
      try {
        const response = await fetch(CONFIG.donationsDataPath);
        if (response.ok) {
          this.data = await response.json();
        }
      } catch (error) {
        // Use default values if fetch fails
        console.log('Using default donation data');
        this.data = { current: 0, goal: 10000 };
      }
    },

    observeProgress() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.animate();
            this.hasAnimated = true;
          }
        });
      }, { threshold: 0.5 });

      const progressSection = document.getElementById('progress');
      if (progressSection) {
        observer.observe(progressSection);
      }
    },

    animate() {
      const percentage = (this.data.current / this.data.goal) * 100;
      const childrenCount = Math.floor(this.data.current / CONFIG.pricePerChild);

      // Animate progress bar width
      setTimeout(() => {
        this.progressBar.style.width = `${percentage}%`;
        this.progressBar.setAttribute('aria-valuenow', this.data.current);
      }, 100);

      // Animate numbers
      if (this.currentAmountEl) {
        animateNumber(this.currentAmountEl, 0, this.data.current, CONFIG.animationDuration);
      }

      if (this.childrenCountEl) {
        animateNumber(this.childrenCountEl, 0, childrenCount, CONFIG.animationDuration);
      }
    }
  };

  // ==========================================================================
  // FAQ Accordion
  // ==========================================================================

  const FAQ = {
    init() {
      const faqItems = document.querySelectorAll('.faq-item');

      faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (!question) return;

        question.addEventListener('click', () => {
          const isOpen = item.classList.contains('open');

          // Close all other items
          faqItems.forEach(otherItem => {
            if (otherItem !== item) {
              otherItem.classList.remove('open');
              const otherQuestion = otherItem.querySelector('.faq-question');
              if (otherQuestion) {
                otherQuestion.setAttribute('aria-expanded', 'false');
              }
            }
          });

          // Toggle current item
          item.classList.toggle('open');
          question.setAttribute('aria-expanded', !isOpen);
        });
      });
    }
  };

  // ==========================================================================
  // Mobile Menu
  // ==========================================================================

  const MobileMenu = {
    toggle: null,
    menu: null,
    overlay: null,

    init() {
      this.toggle = document.getElementById('menuToggle');
      this.menu = document.getElementById('mobileMenu');
      this.overlay = document.getElementById('mobileOverlay');

      if (!this.toggle || !this.menu) return;

      this.toggle.addEventListener('click', () => this.toggleMenu());

      if (this.overlay) {
        this.overlay.addEventListener('click', () => this.closeMenu());
      }

      // Close menu when clicking a link
      const menuLinks = this.menu.querySelectorAll('a');
      menuLinks.forEach(link => {
        link.addEventListener('click', () => this.closeMenu());
      });

      // Close menu on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.menu.classList.contains('open')) {
          this.closeMenu();
        }
      });
    },

    toggleMenu() {
      const isOpen = this.menu.classList.toggle('open');
      this.toggle.classList.toggle('active');
      this.toggle.setAttribute('aria-expanded', isOpen);

      if (this.overlay) {
        this.overlay.classList.toggle('open');
      }

      // Prevent body scroll when menu is open
      document.body.style.overflow = isOpen ? 'hidden' : '';
    },

    closeMenu() {
      this.menu.classList.remove('open');
      this.toggle.classList.remove('active');
      this.toggle.setAttribute('aria-expanded', 'false');

      if (this.overlay) {
        this.overlay.classList.remove('open');
      }

      document.body.style.overflow = '';
    }
  };

  // ==========================================================================
  // Smooth Scroll
  // ==========================================================================

  const SmoothScroll = {
    init() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          const href = anchor.getAttribute('href');
          if (href === '#') return;

          const target = document.querySelector(href);
          if (!target) return;

          e.preventDefault();

          const headerHeight = document.getElementById('header')?.offsetHeight || 80;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        });
      });
    }
  };

  // ==========================================================================
  // Header Scroll Effect
  // ==========================================================================

  const HeaderScroll = {
    header: null,
    lastScroll: 0,

    init() {
      this.header = document.getElementById('header');
      if (!this.header) return;

      window.addEventListener('scroll', debounce(() => this.onScroll(), 10));
    },

    onScroll() {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 50) {
        this.header.classList.add('scrolled');
      } else {
        this.header.classList.remove('scrolled');
      }

      this.lastScroll = currentScroll;
    }
  };

  // ==========================================================================
  // Snow Animation
  // ==========================================================================

  const SnowAnimation = {
    container: null,

    init() {
      this.container = document.getElementById('snowflakes');
      if (!this.container) return;

      // Check for reduced motion preference
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      this.createSnowflakes();
    },

    createSnowflakes() {
      const snowflakeChars = ['❄', '❅', '❆', '•'];

      for (let i = 0; i < CONFIG.snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = snowflakeChars[Math.floor(Math.random() * snowflakeChars.length)];

        // Random positioning and animation
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.fontSize = `${Math.random() * 10 + 8}px`;
        snowflake.style.opacity = Math.random() * 0.6 + 0.2;
        snowflake.style.animationDuration = `${Math.random() * 10 + 10}s`;
        snowflake.style.animationDelay = `${Math.random() * 10}s`;

        this.container.appendChild(snowflake);
      }
    }
  };

  // ==========================================================================
  // Share Functionality
  // ==========================================================================

  const Share = {
    data: {
      title: 'Подари Топлина',
      text: '250 деца от Северозападна България очакват топли дрехи за Коледа. Можеш ли да помогнеш?',
      url: window.location.href
    },

    async share() {
      if (navigator.share) {
        try {
          await navigator.share(this.data);
        } catch (error) {
          if (error.name !== 'AbortError') {
            this.copyLink();
          }
        }
      } else {
        this.copyLink();
      }
    },

    copyLink() {
      navigator.clipboard.writeText(this.data.url).then(() => {
        alert('Линкът е копиран!');
      }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = this.data.url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Линкът е копиран!');
      });
    }
  };

  // ==========================================================================
  // Hero Image Carousel
  // ==========================================================================

  const HeroCarousel = {
    images: null,
    currentIndex: 0,
    interval: null,
    rotationSpeed: 5000, // 5 seconds per image

    init() {
      this.images = document.querySelectorAll('.hero-bg');
      if (this.images.length <= 1) return;

      // Check for reduced motion preference
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
      }

      this.startRotation();
    },

    startRotation() {
      this.interval = setInterval(() => this.nextImage(), this.rotationSpeed);
    },

    nextImage() {
      // Remove active class from current image
      this.images[this.currentIndex].classList.remove('active');

      // Move to next image
      this.currentIndex = (this.currentIndex + 1) % this.images.length;

      // Add active class to new image
      this.images[this.currentIndex].classList.add('active');
    },

    stopRotation() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    }
  };

  // ==========================================================================
  // Lazy Loading Images
  // ==========================================================================

  const LazyLoad = {
    init() {
      if ('loading' in HTMLImageElement.prototype) {
        // Native lazy loading supported
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
          if (img.dataset.src) {
            img.src = img.dataset.src;
          }
        });
      } else {
        // Fallback to Intersection Observer
        const images = document.querySelectorAll('img[data-src]');

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          });
        });

        images.forEach(img => observer.observe(img));
      }
    }
  };

  // ==========================================================================
  // Initialize All Modules
  // ==========================================================================

  function init() {
    Countdown.init();
    ProgressBar.init();
    FAQ.init();
    MobileMenu.init();
    SmoothScroll.init();
    HeaderScroll.init();
    SnowAnimation.init();
    HeroCarousel.init();
    LazyLoad.init();

    // Expose share function globally for potential button use
    window.shareWebsite = () => Share.share();
  }

  // Run initialization when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();

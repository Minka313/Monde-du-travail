(function () {
  'use strict';

  // ===== Mobile Menu =====
  // ===== Robust Delegated Mobile Menu =====
  function getMobileNavElements() {
    return {
      hamburger: document.querySelector('.hamburger'),
      navLinks: document.querySelector('.nav-links'),
      mainNav: document.querySelector('.main-nav'),
      overlay: document.getElementById('navOverlay') || (() => {
        let el = document.createElement('div');
        el.id = 'navOverlay';
        el.className = 'nav-overlay';
        document.body.appendChild(el);
        return el;
      })()
    };
  }

  function openMobileMenu() {
    const { hamburger, navLinks, mainNav } = getMobileNavElements();
    if (navLinks) navLinks.classList.add('open');
    if (mainNav) mainNav.classList.add('open');
    if (hamburger) {
      hamburger.classList.add('active');
      hamburger.setAttribute('aria-expanded', 'true');
    }
    document.body.classList.add('nav-open');
  }

  function closeMobileMenu() {
    const { hamburger, navLinks, mainNav } = getMobileNavElements();
    if (navLinks) navLinks.classList.remove('open');
    if (mainNav) mainNav.classList.remove('open');
    if (hamburger) {
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
    document.body.classList.remove('nav-open');
  }

  function toggleMobileMenu() {
    const { navLinks } = getMobileNavElements();
    if (navLinks && navLinks.classList.contains('open')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  let mobileListenersAttached = false;
  function initMobileMenu() {
    // Ensure overlay element exists in DOM
    let overlay = document.getElementById('navOverlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'navOverlay';
      overlay.className = 'nav-overlay';
      document.body.appendChild(overlay);
    }

    if (mobileListenersAttached) return;
    mobileListenersAttached = true;

    document.addEventListener('click', (e) => {
      const hamburger = e.target.closest('.hamburger');
      if (hamburger) {
        e.preventDefault();
        e.stopPropagation();
        toggleMobileMenu();
        return;
      }

      const closeBtn = e.target.closest('#mobileNavClose');
      if (closeBtn) {
        e.preventDefault();
        e.stopPropagation();
        closeMobileMenu();
        return;
      }

      const overlay = e.target.closest('#navOverlay');
      if (overlay) {
        e.preventDefault();
        e.stopPropagation();
        closeMobileMenu();
        return;
      }

      const navLink = e.target.closest('.nav-links a, .mobile-nav-menu a, .btn-mobile-cta');
      if (navLink) {
        closeMobileMenu();
        return;
      }

      // Tap outside open navigation modal
      const navLinks = document.querySelector('.nav-links');
      if (navLinks && navLinks.classList.contains('open')) {
        if (!navLinks.contains(e.target) && !e.target.closest('.hamburger')) {
          closeMobileMenu();
        }
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && document.body.classList.contains('nav-open')) {
        closeMobileMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      const navLinks = document.querySelector('.nav-links');
      if (!navLinks || !navLinks.classList.contains('open')) return;

      if (e.key === 'Escape') {
        closeMobileMenu();
        return;
      }

      if (e.key === 'Tab') {
        const focusable = Array.from(navLinks.querySelectorAll('a, button'));
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    });
  }

  // ===== Active Nav Link =====
  function initActiveNav() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    const current = path.endsWith('.html') ? path : (path ? `${path}.html` : 'index.html');
    document.querySelectorAll('.nav-links a, .mobile-nav-menu a').forEach(link => {
      const href = link.getAttribute('href');
      if (href === current) {
        link.setAttribute('aria-current', 'page');
        link.classList.add('active');
      }
    });
  }

  // ===== Search =====
  function initSearch() {
    const searchForms = document.querySelectorAll('[data-search]');
    searchForms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = form.querySelector('input').value.trim().toLowerCase();
        if (!query) return;
        const target = form.getAttribute('data-search');
        if (target) {
          const el = document.querySelector(target);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            highlightText(el, query);
          }
        }
      });
    });
  }

  function highlightText(container, query) {
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null, false);
    const nodesToReplace = [];
    let node;
    while ((node = walker.nextNode())) {
      if (node.parentElement.tagName === 'SCRIPT' || node.parentElement.tagName === 'STYLE' || node.parentElement.tagName === 'MARK') continue;
      if (node.textContent.toLowerCase().includes(query)) {
        nodesToReplace.push(node);
      }
    }
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    nodesToReplace.forEach(node => {
      const parent = node.parentNode;
      if (!parent) return;
      const text = node.textContent;
      const fragment = document.createDocumentFragment();
      let lastIndex = 0;
      text.replace(regex, (match, p1, offset) => {
        if (offset > lastIndex) {
          fragment.appendChild(document.createTextNode(text.substring(lastIndex, offset)));
        }
        const mark = document.createElement('mark');
        mark.textContent = match;
        fragment.appendChild(mark);
        lastIndex = offset + match.length;
      });
      if (lastIndex < text.length) {
        fragment.appendChild(document.createTextNode(text.substring(lastIndex)));
      }
      parent.replaceChild(fragment, node);
    });
  }

  // ===== Smooth Animated Filters =====
  function initFilters() {
    document.querySelectorAll('[data-filter]').forEach(select => {
      select.addEventListener('change', () => {
        const target = select.getAttribute('data-filter');
        const value = select.value;
        const container = document.querySelector(target);
        if (!container) return;
        const items = container.querySelectorAll('[data-filter-item]');
        let visibleCount = 0;
        items.forEach(item => {
          const category = item.getAttribute('data-filter-item');
          const shouldShow = !value || category === value;
          if (shouldShow) {
            item.classList.remove('filter-hidden', 'filter-fading-out');
            item.style.display = '';
            item.style.setProperty('--stagger-idx', visibleCount++);
            item.classList.add('is-revealed');
          } else {
            item.classList.add('filter-fading-out');
            setTimeout(() => {
              if (item.classList.contains('filter-fading-out')) {
                item.classList.add('filter-hidden');
              }
            }, 250);
          }
        });
      });
    });
  }

  // ===== Form Validation =====
  function initValidation() {
    document.querySelectorAll('form[data-validate]').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        form.querySelectorAll('[required]').forEach(input => {
          const group = input.closest('.form-group') || input.parentElement;
          const error = group.querySelector('.form-error');
          if (!input.value.trim()) {
            isValid = false;
            group.classList.add('has-error');
            if (error) error.textContent = 'Ce champ est requis.';
          } else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
            isValid = false;
            group.classList.add('has-error');
            if (error) error.textContent = 'Veuillez entrer un email valide.';
          } else {
            group.classList.remove('has-error');
          }
        });
        if (isValid) {
          form.reset();
          showAlert('success', 'Opération effectuée avec succès.');
        }
      });
    });

    // Clear errors on input
    document.querySelectorAll('.form-input, .form-textarea, .form-select').forEach(input => {
      input.addEventListener('input', () => {
        const group = input.closest('.form-group') || input.parentElement;
        group.classList.remove('has-error');
      });
    });
  }

  // ===== Alert / Toast =====
  function showAlert(type, message, title) {
    const main = document.querySelector('main');
    if (!main) return;

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `
      ${title ? `<div class="toast-title">${escapeHtml(title)}</div>` : ''}
      <div class="toast-body">${escapeHtml(message)}</div>
    `;

    const container = document.querySelector('.toast-container') || createToastContainer();
    container.appendChild(toast);

    const timeout = setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-8px)';
      toast.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
      setTimeout(() => toast.remove(), 200);
    }, 4000);

    toast.addEventListener('click', () => {
      clearTimeout(timeout);
      toast.remove();
    });
  }

  window.toast = {
    success: (message, title) => showAlert('success', message, title),
    error: (message, title) => showAlert('error', message, title),
    info: (message, title) => showAlert('info', message, title),
  };

  function createToastContainer() {
    const container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
    return container;
  }

  function escapeHtml(text) {
    if (text == null) return '';
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function showConfirm(message, title) {
    return new Promise((resolve) => {
      const overlay = document.createElement('div');
      overlay.className = 'confirm-overlay';
      overlay.innerHTML = `
        <div class="confirm-modal" role="dialog" aria-modal="true" aria-labelledby="confirmTitle">
          <h3 id="confirmTitle">${escapeHtml(title || 'Confirmation')}</h3>
          <p>${escapeHtml(message)}</p>
          <div class="confirm-actions">
            <button class="btn btn-ghost" data-confirm-cancel>Annuler</button>
            <button class="btn btn-primary" data-confirm-ok>Confirmer</button>
          </div>
        </div>
      `;

      document.body.appendChild(overlay);

      const cancelBtn = overlay.querySelector('[data-confirm-cancel]');
      const okBtn = overlay.querySelector('[data-confirm-ok]');

      function cleanup(value) {
        overlay.remove();
        resolve(value);
      }

      cancelBtn.addEventListener('click', () => cleanup(false));
      okBtn.addEventListener('click', () => cleanup(true));
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) cleanup(false);
      });

      document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
          cleanup(false);
          document.removeEventListener('keydown', escHandler);
        }
      });

      okBtn.focus();
    });
  }

  // ===== Topic Interactions =====
  function initForumInteractions() {
    document.querySelectorAll('[data-topic]').forEach(topic => {
      topic.addEventListener('click', () => {
        const topicId = topic.getAttribute('data-topic');
        if (topicId) {
          window.location.href = `forum-topic.html?id=${encodeURIComponent(topicId)}`;
        } else {
          window.location.href = 'forum.html';
        }
      });
    });
    const newTopicBtn = document.querySelector('[data-new-topic]');
    if (newTopicBtn) {
      newTopicBtn.addEventListener('click', () => {
        window.location.href = 'forum-create.html';
      });
    }
  }

  // ===== Universal Image Fallback =====
  // Intercepte silencieusement toute image défaillante (404/réseau) et la remplace par une photo officielle vérifiée
  window.addEventListener('error', function (e) {
    if (e.target && e.target.tagName === 'IMG') {
      const img = e.target;
      if (img.dataset.fallbackApplied) return;
      img.dataset.fallbackApplied = 'true';
      img.src = 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80';
    }
  }, true);

  // ===== Immersive Page Transitions & View Transitions API =====
  function initPageTransitions() {
    // 1. Marquer le contenu principal comme chargé avec fluidité
    const mainContent = document.getElementById('main-content') || document.querySelector('main');
    if (mainContent) {
      mainContent.classList.remove('content-is-exiting', 'content-is-entering');
      mainContent.classList.add('content-loaded');
    }

    // 2. Assurer la présence de la barre de progression ambrée et discrète
    let progressBar = document.getElementById('pageTransitionProgress');
    if (!progressBar) {
      progressBar = document.createElement('div');
      progressBar.id = 'pageTransitionProgress';
      document.body.prepend(progressBar);
    }

    let progressTimer = null;
    function startProgress() {
      if (!progressBar) return;
      if (progressTimer) clearInterval(progressTimer);
      progressBar.classList.add('active');
      progressBar.style.width = '30%';
      let current = 30;
      progressTimer = setInterval(() => {
        if (current < 85) {
          current += Math.random() * 6 + 2;
          progressBar.style.width = `${Math.min(current, 86)}%`;
        }
      }, 100);
    }

    function resetProgress() {
      if (!progressBar) return;
      if (progressTimer) {
        clearInterval(progressTimer);
        progressTimer = null;
      }
      progressBar.style.width = '100%';
      setTimeout(() => {
        progressBar.classList.remove('active');
        setTimeout(() => {
          progressBar.style.width = '0%';
        }, 220);
      }, 160);
    }

    // 3. Préchargement intelligent au survol / touch (Hover & Touch Preload)
    const prefetchedUrls = new Set();
    function prefetchUrl(url) {
      if (!url || prefetchedUrls.has(url)) return;
      try {
        const targetUrl = new URL(url, window.location.href);
        if (targetUrl.origin !== window.location.origin) return;
        if (targetUrl.pathname === window.location.pathname && targetUrl.search === window.location.search) return;
        prefetchedUrls.add(targetUrl.href);
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = targetUrl.href;
        link.as = 'document';
        document.head.appendChild(link);
      } catch (_) {}
    }

    document.addEventListener('mouseover', (e) => {
      const a = e.target.closest('a[href]');
      if (a && a.origin === window.location.origin) {
        prefetchUrl(a.href);
      }
    }, { passive: true });

    document.addEventListener('touchstart', (e) => {
      const a = e.target.closest('a[href]');
      if (a && a.origin === window.location.origin) {
        prefetchUrl(a.href);
      }
    }, { passive: true });

    // 4. Intercepter les clics sur les liens internes avec discernement
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href]');
      if (!link) return;

      // Garde-fous : touches modificatrices, target blank, pas de transition
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      if (link.target === '_blank') return;
      if (link.getAttribute('data-no-transition') !== null) return;

      const rawHref = link.getAttribute('href');
      if (!rawHref || rawHref.startsWith('javascript:') || rawHref.startsWith('mailto:') || rawHref.startsWith('tel:')) return;
      if (rawHref.startsWith('#')) return;

      let targetUrl;
      try {
        targetUrl = new URL(link.href, window.location.href);
      } catch (_) {
        return;
      }

      if (targetUrl.origin !== window.location.origin) return;
      if (targetUrl.pathname === window.location.pathname && targetUrl.search === window.location.search && targetUrl.hash) return;
      if (targetUrl.href === window.location.href) return;

      startProgress();

      // Vérification du support natif Cross-Document View Transitions (Chromium 126+)
      // Si supporté, laisser la navigation standard du navigateur opérer pour animer nativement à 60 FPS
      const supportsNativeCrossDoc = ('navigation' in window) && (typeof CSS !== 'undefined' && CSS.supports && CSS.supports('view-transition-name', 'root'));
      if (supportsNativeCrossDoc) {
        return;
      }

      // Fallback gracieux pour les autres navigateurs (Safari, Firefox)
      // Animation douce exclusivement sur #main-content pour maintenir le header fixe
      e.preventDefault();
      const content = document.getElementById('main-content') || document.querySelector('main');
      if (content) {
        content.classList.add('content-is-exiting');
      }
      setTimeout(() => {
        window.location.href = targetUrl.href;
      }, 220);
    });

    // 5. Gestion optimale de l'historique et du bouton Retour (Back-Forward Cache)
    window.addEventListener('pageshow', () => {
      const content = document.getElementById('main-content') || document.querySelector('main');
      if (content) {
        content.classList.remove('content-is-exiting', 'content-is-entering');
        content.classList.add('content-loaded');
      }
      resetProgress();
    });
  }

  // ===== Scroll Reveal & Dynamic Cascade Engine (Zéro FOUC) =====
  let revealObserver = null;
  function initScrollReveal() {
    // Si l'utilisateur préfère réduire les animations
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll(`
        .reveal, [data-reveal], .reveal-up, .reveal-scale, .reveal-fade,
        .reveal-left, .reveal-right, .reveal-mask, .card, .job-card,
        .family-card, .formation-card, .article-card, .impact-item,
        .feature-card, .home-topic-card, .testimonial-card, .objective-dna-card
      `).forEach(el => {
        el.classList.add('is-revealed', 'revealed');
      });
      return;
    }

    // 1. Initialiser l'IntersectionObserver réutilisable
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add('is-revealed', 'revealed');
            observer.unobserve(el);
          }
        });
      }, {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08
      });
    }

    // 2. Balayer automatiquement les grilles pour attribuer un ordre en cascade fluide
    const gridContainers = document.querySelectorAll(`
      .cards-grid, .impact-grid, .features-grid, .jobs-grid,
      .formations-grid, .families-cards-grid, .testimonials-grid,
      .home-topics-grid, .objectives-dna-grid, .stagger-group,
      .formation-features-grid, .editorial-duo-grid
    `);
    gridContainers.forEach(container => {
      const items = Array.from(container.children).filter(el => el.nodeType === 1);
      items.forEach((child, idx) => {
        if (!child.style.getPropertyValue('--stagger-idx')) {
          child.style.setProperty('--stagger-idx', idx % 8);
        }
        child.classList.add('stagger-item');
      });
    });

    // 3. Éléments cibles : afficher immédiatement ceux au-dessus de la ligne de flottaison
    const targets = document.querySelectorAll(`
      .reveal:not(.is-revealed),
      [data-reveal]:not(.is-revealed),
      .reveal-up:not(.is-revealed),
      .reveal-scale:not(.is-revealed),
      .reveal-fade:not(.is-revealed),
      .reveal-left:not(.is-revealed),
      .reveal-right:not(.is-revealed),
      .reveal-mask:not(.is-revealed),
      .card:not(.is-revealed),
      .job-card:not(.is-revealed),
      .family-card:not(.is-revealed),
      .formation-card:not(.is-revealed),
      .article-card:not(.is-revealed),
      .impact-item:not(.is-revealed),
      .feature-card:not(.is-revealed),
      .home-topic-card:not(.is-revealed),
      .testimonial-card:not(.is-revealed),
      .objective-dna-card:not(.is-revealed)
    `);

    const vh = window.innerHeight || document.documentElement.clientHeight;
    targets.forEach(el => {
      const rect = el.getBoundingClientRect();
      // Si l'élément est déjà visible dans l'écran ou au-dessus, ne pas le masquer (évite le FOUC)
      if (rect.top < vh * 0.92 && rect.bottom > 0) {
        el.classList.add('is-revealed', 'revealed');
        return;
      }
      if (!el.classList.contains('reveal') && !el.classList.contains('reveal-up') && !el.classList.contains('reveal-scale') && !el.classList.contains('reveal-fade') && !el.classList.contains('reveal-mask')) {
        el.classList.add('reveal');
      }
      revealObserver.observe(el);
    });
  }

  // ===== Subtle Hero Depth & Cursor Parallax (Desktop Only) =====
  function initHeroDepthParallax() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const hero = document.querySelector('.hero');
    if (!hero) return;

    let ticking = false;
    let mouseX = 0;
    let mouseY = 0;

    window.addEventListener('mousemove', (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX = ((e.clientX - centerX) / centerX) * 14;
      mouseY = ((e.clientY - centerY) / centerY) * 10;

      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          hero.style.setProperty('--mouse-shift-x', `${mouseX.toFixed(2)}px`);
          hero.style.setProperty('--mouse-shift-y', `${mouseY.toFixed(2)}px`);
          ticking = false;
        });
      }
    }, { passive: true });

    let scrollTicking = false;
    window.addEventListener('scroll', () => {
      if (!scrollTicking) {
        scrollTicking = true;
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          if (scrollY < window.innerHeight * 1.2) {
            const parallaxY = scrollY * 0.28;
            hero.style.setProperty('--parallax-y', `${parallaxY.toFixed(1)}px`);
          }
          scrollTicking = false;
        });
      }
    }, { passive: true });
  }

  // ===== Card Spotlight & Cursor Tracking (Desktop) =====
  function initCardSpotlight() {
    if (!window.matchMedia || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    let ticking = false;
    document.addEventListener('mousemove', (e) => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const card = e.target.closest(`
          .card, .formation-card, .article-card, .job-card,
          .impact-item, .feature-card, .home-topic-card,
          .testimonial-card, .family-card, .objective-dna-card
        `);
        if (card) {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
        }
        ticking = false;
      });
    }, { passive: true });
  }

  // ===== Staggered Mobile Menu Animation =====
  function initMobileMenuEnhancements() {
    const links = document.querySelectorAll('.mobile-nav-menu a');
    links.forEach((link, idx) => {
      if (!link.style.getPropertyValue('--item-idx')) {
        link.style.setProperty('--item-idx', idx + 1);
      }
    });
  }

  // ===== Top Scroll Reading Progress Bar =====
  function initScrollProgressBar() {
    let bar = document.getElementById('scrollProgressBar');
    if (!bar) {
      bar = document.createElement('div');
      bar.id = 'scrollProgressBar';
      document.body.prepend(bar);
    }
    let ticking = false;
    function updateProgress() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = Math.min(Math.max(progress, 0), 100) + '%';
      ticking = false;
    }
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    }, { passive: true });
    updateProgress();
  }

  // ===== Dynamic Header Scroll Morphing (RAF Throttled) =====
  function initHeaderScrollEffect() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let ticking = false;

    function checkScroll() {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      ticking = false;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(checkScroll);
        ticking = true;
      }
    }, { passive: true });

    checkScroll();
  }

  // ===== Animated Number Counters & Live Verified Stats Sync =====
  async function initCounters() {
    const counters = document.querySelectorAll('[data-count-to]:not([data-counter-ready])');
    if (!counters.length) return;

    // Synchronisation en direct avec la base de données
    const apiBase = window.AppConfig?.API_BASE || '/api';
    try {
      const res = await fetch(`${apiBase}/public-stats`);
      if (res.ok) {
        const json = await res.json();
        if (json && json.success && json.data) {
          const stats = json.data;
          document.querySelectorAll('[data-stat-key]').forEach(el => {
            const key = el.getAttribute('data-stat-key');
            if (stats[key] !== undefined && stats[key] !== null) {
              el.setAttribute('data-count-to', stats[key]);
            }
          });
        }
      }
    } catch (e) {
      // Tolérance aux pannes : fallback gracieux vers les valeurs locales vérifiées
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          observer.unobserve(el);
          animateCounter(el);
        }
      });
    }, { threshold: 0.1 });

    counters.forEach(el => {
      el.setAttribute('data-counter-ready', 'true');
      observer.observe(el);
    });

    function animateCounter(el) {
      const targetVal = parseFloat(el.getAttribute('data-count-to')) || 0;
      const duration = 1200;
      const startTime = performance.now();

      function easeOutExpo(t) {
        return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      }

      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentVal = Math.round(targetVal * easeOutExpo(progress));
        el.textContent = currentVal.toLocaleString('fr-FR');

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = targetVal.toLocaleString('fr-FR');
        }
      }

      requestAnimationFrame(update);
    }
  }

  // ===== Navigation Auth State (Membre & Administrateur) =====
  async function initNavAuth() {
    if (!window.Api) return;
    const token = window.Api.getToken();
    if (!token) return;

    let user = null;
    try {
      const cached = localStorage.getItem('currentUser');
      if (cached) user = JSON.parse(cached);
    } catch (_) {}

    // Rendu immédiat si les données sont en cache pour zéro clignotement
    if (user) {
      renderNavUser(user);
    }

    // Validation silencieuse et fraîche auprès de l'API
    try {
      const res = await window.Api.auth.me();
      user = res?.data;
      if (user) {
        try { localStorage.setItem('currentUser', JSON.stringify(user)); } catch (_) {}
        renderNavUser(user);
      }
    } catch (e) {
      if (e.message?.includes('401') || e.message?.includes('invalide') || e.message?.includes('expiré')) {
        window.Api.removeToken();
        try { localStorage.removeItem('currentUser'); } catch (_) {}
      }
    }

    // Écouter les mises à jour en direct de l'avatar et du profil
    window.addEventListener('user-avatar-updated', (e) => {
      if (e.detail) renderNavUser(e.detail);
    });
  }

  function renderNavUser(user) {
    if (!user) return;
    const isUltraAdmin = user.role === 'ULTRA_ADMIN';
    const adminRoles = user.adminRoles || [];
    const isAdmin = isUltraAdmin || user.role === 'ADMIN' || adminRoles.length > 0;
    const firstName = user.firstName || 'Membre';
    const lastName = user.lastName || '';
    const fullName = `${firstName} ${lastName}`.trim();
    const initial = (firstName[0] || 'M').toUpperCase();
    const adminUrl = window.location.protocol === 'file:' ? '../admin-frontend/index.html' : '/admin-frontend/index.html';

    let roleBadge = 'Membre du Club';
    if (isUltraAdmin) roleBadge = 'Ultra Admin';
    else if (user.role === 'ADMIN') roleBadge = 'Administrateur';
    else if (user.membershipStatus === 'PENDING') roleBadge = 'Adhésion en cours';

    const avatarHtml = user.avatarUrl
      ? `<img src="${escapeHtml(user.avatarUrl)}" alt="${escapeHtml(firstName)}" class="user-avatar-img">`
      : escapeHtml(initial);

    // 1. Desktop Header Slot (#headerAuthSlot ou .header-actions .btn-cta)
    const authSlot = document.getElementById('headerAuthSlot') || document.querySelector('.header-actions');
    if (authSlot) {
      const existingContainer = document.getElementById('userMenuContainer');
      if (existingContainer) {
        // Mise à jour réactive des éléments existants
        const badgeEl = existingContainer.querySelector('.user-avatar-badge');
        if (badgeEl) {
          badgeEl.innerHTML = avatarHtml;
          badgeEl.classList.toggle('has-avatar-img', !!user.avatarUrl);
        }
        const nameEl = existingContainer.querySelector('.user-menu-name');
        if (nameEl) nameEl.textContent = firstName;
        const fullNameEl = existingContainer.querySelector('.user-dropdown-name');
        if (fullNameEl) fullNameEl.textContent = fullName;
      } else {
        const slotWrapper = document.createElement('div');
        slotWrapper.id = 'userMenuContainer';
        slotWrapper.className = 'user-menu-container';
        slotWrapper.innerHTML = `
          <button type="button" class="user-menu-btn" id="userMenuBtn" aria-expanded="false" aria-label="Menu de ${escapeHtml(firstName)}">
            <span class="user-avatar-badge ${user.avatarUrl ? 'has-avatar-img' : ''}">${avatarHtml}</span>
            <span class="user-menu-name">${escapeHtml(firstName)}</span>
            <span class="user-menu-arrow">▾</span>
          </button>
          <div class="user-dropdown-menu" id="userDropdownMenu" style="display:none;">
            <div class="user-dropdown-info">
              <span class="user-dropdown-name">${escapeHtml(fullName)}</span>
              <span class="user-dropdown-badge">${escapeHtml(roleBadge)}</span>
            </div>
            <div class="user-dropdown-divider"></div>
            <a href="profile.html" class="user-dropdown-item"><span>👤</span> Mon Espace & Profil</a>
            <a href="formations.html" class="user-dropdown-item"><span>🎓</span> Mes Formations</a>
            <a href="forum.html" class="user-dropdown-item"><span>💬</span> Forum Communautaire</a>
            ${isAdmin ? `<a href="${adminUrl}" class="user-dropdown-item user-dropdown-admin"><span>🛡️</span> Administration</a>` : ''}
            <div class="user-dropdown-divider"></div>
            <button type="button" class="user-dropdown-item user-dropdown-logout" id="btnLogoutAction"><span>🚪</span> Se déconnecter</button>
          </div>
        `;

        const oldBtn = authSlot.querySelector('#headerAuthBtn, .btn-cta');
        if (oldBtn) {
          oldBtn.replaceWith(slotWrapper);
        } else {
          authSlot.appendChild(slotWrapper);
        }

        const userMenuBtn = document.getElementById('userMenuBtn');
        const userDropdownMenu = document.getElementById('userDropdownMenu');
        if (userMenuBtn && userDropdownMenu) {
          userMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = userDropdownMenu.style.display !== 'none';
            userDropdownMenu.style.display = isOpen ? 'none' : 'block';
            userMenuBtn.setAttribute('aria-expanded', !isOpen);
          });

          document.addEventListener('click', (e) => {
            if (!slotWrapper.contains(e.target)) {
              userDropdownMenu.style.display = 'none';
              userMenuBtn.setAttribute('aria-expanded', 'false');
            }
          });
        }

        const btnLogoutAction = document.getElementById('btnLogoutAction');
        if (btnLogoutAction) {
          btnLogoutAction.addEventListener('click', async () => {
            try { await window.Api?.auth?.logout(); } catch (_) {}
            window.Api?.removeToken();
            try { localStorage.removeItem('currentUser'); } catch (_) {}
            window.location.href = 'index.html';
          });
        }
      }
    }

    // 2. Mobile Nav Drawer (#mobileNavFooter)
    const mobileFooter = document.getElementById('mobileNavFooter') || document.querySelector('.mobile-nav-footer');
    if (mobileFooter) {
      mobileFooter.innerHTML = `
        <div class="mobile-user-box">
          <a href="profile.html" class="btn-mobile-cta">
            <span>👤</span> Mon Espace (${escapeHtml(firstName)})
          </a>
          ${isAdmin ? `<a href="${adminUrl}" class="btn-mobile-secondary"><span>🛡️</span> Administration</a>` : ''}
          <button type="button" class="btn-mobile-logout" id="btnMobileLogout">Se déconnecter</button>
        </div>
      `;

      const btnMobileLogout = document.getElementById('btnMobileLogout');
      if (btnMobileLogout) {
        btnMobileLogout.addEventListener('click', async () => {
          try { await window.Api?.auth?.logout(); } catch (_) {}
          window.Api?.removeToken();
          try { localStorage.removeItem('currentUser'); } catch (_) {}
          window.location.href = 'index.html';
        });
      }
    }
  }

  // ===== Dynamic Sections on Homepage (Discussions récentes du Forum & Newsletter) =====
  async function initHomeDynamicSections() {
    const forumContainer = document.getElementById('homeForumContainer');
    if (forumContainer && window.Api?.forum) {
      try {
        const res = await window.Api.forum.getTopics({ limit: 3 });
        const topics = res?.data?.topics || res?.data || [];
        if (Array.isArray(topics) && topics.length > 0) {
          forumContainer.innerHTML = topics.slice(0, 3).map(t => {
            const cat = t.category?.name || 'Général';
            const replies = t._count?.replies ?? t.repliesCount ?? 0;
            const author = t.author ? `${t.author.firstName || ''} ${t.author.lastName ? t.author.lastName[0] + '.' : ''}`.trim() : 'Membre';
            const snippet = t.content ? escapeHtml(t.content.substring(0, 110)) + '...' : 'Rejoins la discussion pour échanger avec la communauté.';
            return `
              <a href="forum-topic.html?id=${t.id}" class="home-topic-card">
                <div class="home-topic-top">
                  <span class="home-topic-badge">${escapeHtml(cat)}</span>
                  <h4 class="home-topic-title">${escapeHtml(t.title)}</h4>
                  <p class="home-topic-snippet">${snippet}</p>
                </div>
                <div class="home-topic-footer">
                  <span class="home-topic-author">👤 ${escapeHtml(author)}</span>
                  <span class="home-topic-replies">💬 ${replies} réponse${replies > 1 ? 's' : ''}</span>
                </div>
              </a>
            `;
          }).join('');
        }
      } catch (_) {}
    }

    const newsletterForm = document.getElementById('homeNewsletterForm');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = newsletterForm.querySelector('input[type="email"]');
        const feedback = document.getElementById('newsletterFeedback');
        if (input && input.value.trim()) {
          input.value = '';
          if (feedback) {
            feedback.style.display = 'block';
            feedback.textContent = '🎉 Merci ! Vous êtes désormais inscrit à notre veille hebdomadaire.';
            setTimeout(() => { feedback.style.display = 'none'; }, 6000);
          }
        }
      });
    }
  }

  let initialized = false;
  function safeInit() {
    if (initialized) return;
    initialized = true;
    init();
  }

  // ===== Non-blocking Anonymous & Member Visitor Tracking =====
  function initVisitorTracking() {
    try {
      if (window.location.protocol === 'file:') return;

      const STORAGE_KEY = 'lmt_visitor_id';
      let visitorId = null;
      try {
        visitorId = localStorage.getItem(STORAGE_KEY);
        if (!visitorId) {
          visitorId = 'lmt_v_' + Math.random().toString(36).substring(2, 11) + Date.now().toString(36);
          localStorage.setItem(STORAGE_KEY, visitorId);
        }
      } catch (_) {
        visitorId = 'anon_' + Math.random().toString(36).substring(2, 10);
      }

      const width = window.innerWidth || document.documentElement.clientWidth;
      const device = width <= 768 ? 'mobile' : width <= 1024 ? 'tablet' : 'desktop';
      const apiBase = (window.LMT_CONFIG && window.LMT_CONFIG.API_URL) ? window.LMT_CONFIG.API_URL : (window.Api && window.Api.baseUrl ? window.Api.baseUrl : '/api');

      const payload = JSON.stringify({
        visitorId,
        path: window.location.pathname || '/',
        referrer: document.referrer || '',
        device,
      });

      const token = window.Api?.getToken ? window.Api.getToken() : null;
      const headers = { 'Content-Type': 'application/json' };
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      if (typeof fetch === 'function') {
        fetch(`${apiBase}/analytics/track`, {
          method: 'POST',
          headers,
          body: payload,
          keepalive: true,
        }).catch(() => {});
      }
    } catch (_) {}
  }

  /**
   * PROFILAGE PROGRESSIF (ZÉRO FRICTION)
   * Affiche une bannière discrète après 2 pages vues ou 45s de navigation
   * pour qualifier le visiteur (Lycéen, Étudiant, Jeune Pro, Reconversion)
   * et lier son profil à son session_id pour les analytics d'orientation.
   */
  function initProgressiveProfiling() {
    try {
      // 1. Si le profil est déjà connu, ne rien afficher
      const existingProfile = (window.AnalyticsTracker && typeof window.AnalyticsTracker.getUserProfile === 'function')
        ? window.AnalyticsTracker.getUserProfile()
        : localStorage.getItem('lmt_user_profile');
      if (existingProfile) return;

      // 2. Si l'utilisateur a fermé la bannière récemment (rappel dans 7 jours)
      const dismissedUntil = localStorage.getItem('lmt_profile_dismissed_until');
      if (dismissedUntil && Date.now() < Number(dismissedUntil)) return;

      // 3. Calcul du seuil de déclenchement (2 pages vues dans la session ou 45 secondes)
      let sessionViews = 1;
      try {
        sessionViews = (parseInt(sessionStorage.getItem('lmt_session_views'), 10) || 0) + 1;
        sessionStorage.setItem('lmt_session_views', sessionViews);
      } catch (_) {}

      let bannerShown = false;

      function renderBanner() {
        if (bannerShown) return;
        if (document.getElementById('progressiveProfileBanner')) return;

        bannerShown = true;

        const banner = document.createElement('div');
        banner.className = 'progressive-profile-banner';
        banner.id = 'progressiveProfileBanner';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-label', 'Profilage d\'orientation personnalisé');

        banner.innerHTML = `
          <div class="prog-profile-header">
            <span class="prog-profile-badge">🎯 Orientation sur-mesure</span>
            <button type="button" class="prog-profile-close" id="closeProfileBanner" aria-label="Fermer pour l'instant">&times;</button>
          </div>
          <h3 class="prog-profile-title">Pour te suggérer de meilleurs parcours...</h3>
          <p class="prog-profile-desc">Dis-nous qui tu es pour adapter automatiquement les opportunités et les conseils à ta situation :</p>
          <div class="prog-profile-chips" id="progProfileChips">
            <button type="button" class="prog-profile-chip" data-profile="Lycéen">
              <span class="chip-emoji">🎒</span>
              <span>Lycéen</span>
            </button>
            <button type="button" class="prog-profile-chip" data-profile="Étudiant">
              <span class="chip-emoji">🎓</span>
              <span>Étudiant</span>
            </button>
            <button type="button" class="prog-profile-chip" data-profile="Jeune Pro">
              <span class="chip-emoji">💼</span>
              <span>Jeune Pro</span>
            </button>
            <button type="button" class="prog-profile-chip" data-profile="Reconversion">
              <span class="chip-emoji">🔄</span>
              <span>Reconversion</span>
            </button>
          </div>
          <div class="prog-profile-success" id="progProfileSuccess" style="display:none;">
            <span>✨</span>
            <span>Profil mémorisé ! Les parcours d'orientation s'adaptent désormais à toi.</span>
          </div>
        `;

        document.body.appendChild(banner);

        // Animation d'entrée douce
        setTimeout(() => banner.classList.add('visible'), 50);

        // Écouteur de sélection de profil
        banner.querySelectorAll('.prog-profile-chip').forEach(chip => {
          chip.addEventListener('click', () => {
            const selectedProfile = chip.getAttribute('data-profile');
            if (window.AnalyticsTracker) {
              window.AnalyticsTracker.setUserProfile(selectedProfile);
            } else {
              try { localStorage.setItem('lmt_user_profile', selectedProfile); } catch (_) {}
            }

            const chipsContainer = banner.querySelector('#progProfileChips');
            const successBox = banner.querySelector('#progProfileSuccess');
            if (chipsContainer) chipsContainer.style.display = 'none';
            if (successBox) successBox.style.display = 'flex';

            // Fermeture automatique après confirmation
            setTimeout(() => {
              banner.classList.remove('visible');
              setTimeout(() => banner.remove(), 350);
            }, 1800);
          });
        });

        // Écouteur de fermeture discrète
        const closeBtn = banner.querySelector('#closeProfileBanner');
        if (closeBtn) {
          closeBtn.addEventListener('click', () => {
            try {
              localStorage.setItem('lmt_profile_dismissed_until', Date.now() + 7 * 24 * 3600 * 1000);
            } catch (_) {}
            banner.classList.remove('visible');
            setTimeout(() => banner.remove(), 350);
          });
        }
      }

      // Déclenchement conditionnel : immédiat si >= 2 pages explorées, sinon après 45 secondes
      if (sessionViews >= 2) {
        setTimeout(renderBanner, 1500);
      } else {
        setTimeout(renderBanner, 45000);
      }
    } catch (_) {}
  }

  function init() {
    initPageTransitions();
    initScrollProgressBar();
    initHeaderScrollEffect();
    initScrollReveal();
    initHeroDepthParallax();
    initCardSpotlight();
    initMobileMenuEnhancements();
    initCounters();
    initMobileMenu();
    initActiveNav();
    initSearch();
    initFilters();
    initForumInteractions();
    initNavAuth();
    initHomeDynamicSections();
    initVisitorTracking();
    initProgressiveProfiling();
  }

  document.addEventListener('layout:loaded', () => {
    safeInit();
    initMobileMenu();
    initActiveNav();
    initNavAuth();
    initHomeDynamicSections();
    initMobileMenuEnhancements();
    initScrollReveal();
    initHeroDepthParallax();
  });
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', safeInit);
  } else {
    safeInit();
  }

  window.showAlert = showAlert;
  window.showConfirm = showConfirm;
})();
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
      document.querySelectorAll('.reveal, [data-reveal]').forEach(el => {
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
        rootMargin: '0px 0px -30px 0px',
        threshold: 0.08
      });
    }

    // 2. Balayer automatiquement les grilles pour attribuer un ordre en cascade fluide
    const gridContainers = document.querySelectorAll('.cards-grid, .impact-grid, .features-grid, .jobs-grid, .formations-grid');
    gridContainers.forEach(container => {
      const items = Array.from(container.children).filter(el => el.nodeType === 1);
      items.forEach((child, idx) => {
        if (!child.style.getPropertyValue('--stagger-idx')) {
          child.style.setProperty('--stagger-idx', idx % 6);
        }
        child.classList.add('stagger-item');
      });
    });

    // 3. Éléments cibles : afficher immédiatement ceux au-dessus de la ligne de flottaison
    const targets = document.querySelectorAll(`
      .reveal:not(.is-revealed),
      [data-reveal]:not(.is-revealed),
      .section-header:not(.is-revealed),
      .centered-editorial:not(.is-revealed),
      .hero-content:not(.is-revealed),
      .card:not(.is-revealed),
      .job-card:not(.is-revealed),
      .formation-card:not(.is-revealed),
      .article-card:not(.is-revealed),
      .impact-item:not(.is-revealed)
    `);

    const vh = window.innerHeight || document.documentElement.clientHeight;
    targets.forEach(el => {
      const rect = el.getBoundingClientRect();
      // Si l'élément est déjà visible dans l'écran ou au-dessus, ne pas le masquer (évite le FOUC)
      if (rect.top < vh * 0.92 && rect.bottom > 0) {
        el.classList.add('is-revealed', 'revealed');
        return;
      }
      if (!el.classList.contains('reveal')) {
        el.classList.add('reveal');
      }
      revealObserver.observe(el);
    });
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
        const card = e.target.closest('.card, .formation-card, .article-card, .job-card, .impact-item');
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

  // ===== Navigation Auth State =====
  // Seul l'ULTRA_ADMIN voit les liens Administration.
  // Tous les autres utilisateurs gardent le nav par défaut (Connexion + Espace Membre).
  async function initNavAuth() {
    if (!window.Api) return;
    const token = window.Api.getToken();
    if (!token) return;

    try {
      const res = await window.Api.auth.me();
      const user = res?.data;
      if (!user || user.role !== 'ULTRA_ADMIN') return;

      // Synchroniser le token pour l'espace d'administration
      if (token) {
        try { localStorage.setItem('adminAccessToken', token); } catch (_) {}
      }

      const adminUrl = window.location.protocol === 'file:' ? '../admin-frontend/index.html' : '/admin-frontend/index.html';

      function onAdminClick() {
        const curToken = window.Api?.getToken();
        if (curToken) {
          try { localStorage.setItem('adminAccessToken', curToken); } catch (_) {}
        }
      }

      // — Nav link : remplacer "Connexion" par "Administration" —
      const navLinks = document.getElementById('navLinks');
      if (navLinks) {
        const loginLink = Array.from(navLinks.querySelectorAll('a')).find(a => a.getAttribute('href') === 'login.html');
        if (loginLink) {
          loginLink.href = adminUrl;
          loginLink.innerHTML = '🛡️ Administration';
          loginLink.style.color = 'var(--color-primary)';
          loginLink.style.fontWeight = '600';
          loginLink.onclick = onAdminClick;
        }
      }

      // — Header CTA : remplacer "Espace Membre" par "Administration" —
      const headerBtn = document.querySelector('.header-actions .btn-cta');
      if (headerBtn) {
        headerBtn.href = adminUrl;
        headerBtn.innerHTML = '🛡️ Administration';
        headerBtn.onclick = onAdminClick;
      }
    } catch (e) {
      // Token invalide → nettoyage silencieux, le nav reste par défaut
      window.Api.removeToken();
    }
  }

  let initialized = false;
  function safeInit() {
    if (initialized) return;
    initialized = true;
    init();
  }

  function init() {
    initPageTransitions();
    initScrollProgressBar();
    initHeaderScrollEffect();
    initScrollReveal();
    initCardSpotlight();
    initMobileMenuEnhancements();
    initCounters();
    initMobileMenu();
    initActiveNav();
    initSearch();
    initFilters();
    initForumInteractions();
    initNavAuth();
  }

  document.addEventListener('layout:loaded', () => {
    safeInit();
    initMobileMenu();
    initActiveNav();
    initMobileMenuEnhancements();
    initScrollReveal();
  });
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', safeInit);
  } else {
    safeInit();
  }

  window.showAlert = showAlert;
  window.showConfirm = showConfirm;
})();
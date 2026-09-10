(function () {
  'use strict';

  // ===== Mobile Menu =====
  // ===== Robust Delegated Mobile Menu =====
  function getMobileNavElements() {
    return {
      hamburger: document.querySelector('.hamburger'),
      navLinks: document.querySelector('.nav-links'),
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
    const { hamburger, navLinks } = getMobileNavElements();
    if (!navLinks) return;
    navLinks.classList.add('open');
    if (hamburger) {
      hamburger.classList.add('active');
      hamburger.setAttribute('aria-expanded', 'true');
    }
    document.body.classList.add('nav-open');
  }

  function closeMobileMenu() {
    const { hamburger, navLinks } = getMobileNavElements();
    if (navLinks) navLinks.classList.remove('open');
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

      const navLink = e.target.closest('.nav-links a');
      if (navLink) {
        closeMobileMenu();
        return;
      }

      // Tap outside open navigation modal
      const navLinks = document.querySelector('.nav-links');
      if (navLinks && navLinks.classList.contains('open')) {
        if (!navLinks.contains(e.target)) {
          closeMobileMenu();
        }
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
    const current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
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

  // ===== Filters =====
  function initFilters() {
    document.querySelectorAll('[data-filter]').forEach(select => {
      select.addEventListener('change', () => {
        const target = select.getAttribute('data-filter');
        const value = select.value;
        const container = document.querySelector(target);
        if (!container) return;
        container.querySelectorAll('[data-filter-item]').forEach(item => {
          const category = item.getAttribute('data-filter-item');
          if (!value || category === value) {
            item.style.display = '';
            item.classList.add('animate-in');
          } else {
            item.style.display = 'none';
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

  // ===== Scroll Reveal =====
  function initScrollReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.section-header, .card, .section-box, .stat-card, .topic, .skill-item').forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });
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

      // — Nav link : remplacer "Connexion" par "Administration" —
      const navLinks = document.getElementById('navLinks');
      if (navLinks) {
        const loginLink = Array.from(navLinks.querySelectorAll('a')).find(a => a.getAttribute('href') === 'login.html');
        if (loginLink) {
          loginLink.href = '../admin-frontend/index.html';
          loginLink.innerHTML = '🛡️ Administration';
          loginLink.style.color = 'var(--color-primary)';
          loginLink.style.fontWeight = '600';
        }
      }

      // — Header CTA : remplacer "Espace Membre" par "Administration" —
      const headerBtn = document.querySelector('.header-actions .btn-cta');
      if (headerBtn) {
        headerBtn.href = '../admin-frontend/index.html';
        headerBtn.innerHTML = '🛡️ Administration';
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
    initMobileMenu();
    initActiveNav();
    initSearch();
    initFilters();
    initForumInteractions();
    initScrollReveal();
    initNavAuth();
  }

  document.addEventListener('layout:loaded', () => {
    safeInit();
    initMobileMenu();
    initActiveNav();
  });
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(safeInit, 50);
    });
  } else {
    setTimeout(safeInit, 50);
  }

  window.showAlert = showAlert;
  window.showConfirm = showConfirm;
})();
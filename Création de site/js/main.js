(function() {
  'use strict';

  // ===== Mobile Menu =====
  function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (!hamburger || !navLinks) return;

    function openMenu() {
      navLinks.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      const firstLink = navLinks.querySelector('a');
      if (firstLink) firstLink.focus();
    }

    function closeMenu() {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.focus();
    }

    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
      if (isOpen) {
        const firstLink = navLinks.querySelector('a');
        if (firstLink) firstLink.focus();
      } else {
        hamburger.focus();
      }
    });

    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        closeMenu();
      }
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        closeMenu();
      }
    });

    // Focus trap basique
    navLinks.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab' || !navLinks.classList.contains('open')) return;

      const focusable = Array.from(navLinks.querySelectorAll('a, button'));
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
      if (node.parentElement.tagName === 'SCRIPT' || node.parentElement.tagName === 'STYLE') continue;
      if (node.textContent.toLowerCase().includes(query)) {
        nodesToReplace.push(node);
      }
    }
    nodesToReplace.forEach(node => {
      const span = document.createElement('span');
      span.innerHTML = node.textContent.replace(
        new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'),
        '<mark>$1</mark>'
      );
      node.parentNode.replaceChild(span, node);
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
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
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
        showAlert('info', 'Cette fonctionnalité sera disponible prochainement.');
      });
    });
    const newTopicBtn = document.querySelector('[data-new-topic]');
    if (newTopicBtn) {
      newTopicBtn.addEventListener('click', () => showAlert('info', 'Cette fonctionnalité sera disponible prochainement.'));
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

  function init() {
    initMobileMenu();
    initActiveNav();
    initSearch();
    initFilters();
    initForumInteractions();
    initScrollReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      document.addEventListener('layout:loaded', init, { once: true });
    });
  } else {
    document.addEventListener('layout:loaded', init, { once: true });
  }

  window.showAlert = showAlert;
  window.showConfirm = showConfirm;
})();
(function() {
  'use strict';

  async function includeFragment(selector, url) {
    const el = document.querySelector(selector);
    if (!el) return Promise.resolve();
    // Ne pas recharger si l'élément possède déjà la structure moderne complète
    if (selector.includes('nav') && el.querySelector('.mobile-nav-menu')) {
      return Promise.resolve();
    }
    if (!selector.includes('nav') && el.children && el.children.length > 0 && el.textContent.trim().length > 0) {
      return Promise.resolve();
    }
    try {
      const cacheKey = 'layout_fragment:' + url;
      let html = null;
      try {
        html = sessionStorage.getItem(cacheKey);
      } catch (_) {}

      if (!html) {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Fragment load failed: ' + response.status);
        html = await response.text();
        try {
          sessionStorage.setItem(cacheKey, html);
        } catch (_) {}
      }

      el.outerHTML = html;
      if (selector.includes('nav')) {
        const path = window.location.pathname.split('/').pop() || 'index.html';
        const current = path.endsWith('.html') ? path : (path ? `${path}.html` : 'index.html');
        document.querySelectorAll('.mobile-nav-menu a, .nav-links a').forEach(link => {
          if (link.getAttribute('href') === current) {
            link.setAttribute('aria-current', 'page');
          }
        });
      }
      return Promise.resolve();
    } catch (error) {
      // Ignorer silencieusement si inaccessible (ex. protocole file://)
      return Promise.resolve();
    }
  }

  window.Layout = {
    init: function() {
      const headerEl = document.querySelector('header[data-layout="header"]');
      const originalTitle = headerEl ? headerEl.querySelector('.site-title')?.textContent : null;

      return Promise.all([
        includeFragment('header[data-layout="header"]', 'fragments/header.html').then(() => {
          if (originalTitle) {
            const newTitle = document.querySelector('header[data-layout="header"] .site-title');
            if (newTitle) newTitle.textContent = originalTitle;
          }
        }),
        includeFragment('nav[data-layout="nav"]', 'fragments/nav.html'),
        includeFragment('footer[data-layout="footer"]', 'fragments/footer.html')
      ]).then(() => {
        if (!window.LMTNotifications && !document.querySelector('script[src*="notifications.js"]')) {
          const s = document.createElement('script');
          s.src = 'js/notifications.js?v=2.3.0';
          document.body.appendChild(s);
        }
        if (!window.LMTTheme && !document.querySelector('script[src*="theme-engine.js"]')) {
          const s = document.createElement('script');
          s.src = 'js/theme-engine.js?v=1.0.0';
          document.head.appendChild(s);
        } else if (window.LMTTheme && typeof window.LMTTheme.initButtons === 'function') {
          window.LMTTheme.initButtons();
        }
        initSocialLinks();
        document.dispatchEvent(new Event('layout:loaded'));
      });
    },
  };

  async function initSocialLinks() {
    try {
      const apiUrl = (window.LMT_CONFIG && window.LMT_CONFIG.API_URL) ? window.LMT_CONFIG.API_URL : '/api';
      const cacheKey = 'lmt_public_settings';
      let settings = null;
      try {
        const cached = sessionStorage.getItem(cacheKey);
        if (cached) settings = JSON.parse(cached);
      } catch (_) {}

      if (!settings) {
        const res = await fetch(`${apiUrl}/settings/public`);
        if (res.ok) {
          const json = await res.json();
          settings = json.data || [];
          try {
            sessionStorage.setItem(cacheKey, JSON.stringify(settings));
          } catch (_) {}
        }
      }

      if (Array.isArray(settings)) {
        const socialMap = {
          twitter: settings.find(s => s.key === 'social.twitter')?.value,
          linkedin: settings.find(s => s.key === 'social.linkedin')?.value,
          instagram: settings.find(s => s.key === 'social.instagram')?.value,
          facebook: settings.find(s => s.key === 'social.facebook')?.value,
          youtube: settings.find(s => s.key === 'social.youtube')?.value,
          tiktok: settings.find(s => s.key === 'social.tiktok')?.value,
        };

        Object.entries(socialMap).forEach(([platform, url]) => {
          const btn = document.querySelector(`.footer-social-btn[data-social="${platform}"]`);
          if (btn) {
            if (url && url.trim().length > 0) {
              btn.href = url.trim();
              btn.style.display = 'inline-flex';
            } else if (platform === 'youtube' || platform === 'tiktok') {
              btn.style.display = 'none';
            }
          }
        });
      }
    } catch (_) {
      // Ignorer silencieusement si hors-ligne
    }
  }

  // Gestionnaire global pour le bouton Retour en haut (Back to top)
  document.addEventListener('click', function(e) {
    const btn = e.target.closest('.footer-back-to-top, #footerBackToTop');
    if (btn) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.Layout.init();
      initSocialLinks();
    });
  } else {
    window.Layout.init();
    initSocialLinks();
  }
})();

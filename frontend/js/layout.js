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
        initPublicSettingsAndMaintenance();
        document.dispatchEvent(new Event('layout:loaded'));
      });
    },
  };

  async function initPublicSettingsAndMaintenance() {
    try {
      const apiUrl = (window.LMT_CONFIG && window.LMT_CONFIG.API_URL) ? window.LMT_CONFIG.API_URL : '/api';
      const cacheKey = 'lmt_public_settings';
      const cacheTimeKey = 'lmt_public_settings_time';
      let settings = null;
      try {
        const cached = sessionStorage.getItem(cacheKey);
        const cachedTime = parseInt(sessionStorage.getItem(cacheTimeKey) || '0', 10);
        if (cached && (Date.now() - cachedTime < 60000)) {
          settings = JSON.parse(cached);
          window.__LMT_PUBLIC_SETTINGS__ = settings;
        }
      } catch (_) {}

      if (!settings) {
        const res = await fetch(`${apiUrl}/settings/public`);
        if (res.ok) {
          const json = await res.json();
          settings = json.data || {};
          window.__LMT_PUBLIC_SETTINGS__ = settings;
          try {
            sessionStorage.setItem(cacheKey, JSON.stringify(settings));
            sessionStorage.setItem(cacheTimeKey, String(Date.now()));
          } catch (_) {}
        }
      }

      if (!settings) return;

      // 1. Détection du mode maintenance
      let isMaintenance = false;
      if (Array.isArray(settings)) {
        isMaintenance = settings.find(s => s.key === 'platform.maintenanceMode')?.value === 'true';
      } else if (typeof settings === 'object') {
        isMaintenance = settings['platform.maintenanceMode'] === true || settings['platform.maintenanceMode'] === 'true';
      }

      const isMaintenancePage = window.location.pathname.endsWith('maintenance.html');

      if (isMaintenance && !isMaintenancePage) {
        // Vérifier si l'utilisateur est un administrateur connecté
        const adminToken = localStorage.getItem('adminAccessToken') || localStorage.getItem('accessToken');
        let isAdmin = false;
        if (adminToken) {
          try {
            const payload = JSON.parse(atob(adminToken.split('.')[1]));
            if (payload && (payload.role === 'ADMIN' || payload.role === 'ULTRA_ADMIN' || payload.permissions?.includes('*') || payload.permissions?.includes('settings.manage'))) {
              isAdmin = true;
            }
          } catch (_) {}
        }

        if (!isAdmin) {
          try {
            sessionStorage.setItem('maintenance_return_url', window.location.href);
          } catch (_) {}
          window.location.href = 'maintenance.html';
          return;
        } else {
          // Affichage d'un bandeau avertisseur pour l'administrateur
          if (!document.getElementById('lmt-admin-maintenance-banner')) {
            const banner = document.createElement('div');
            banner.id = 'lmt-admin-maintenance-banner';
            banner.style.cssText = 'background:#dc2626;color:#ffffff;text-align:center;padding:0.45rem 1rem;font-size:0.85rem;font-weight:600;position:sticky;top:0;z-index:99999;box-shadow:0 2px 10px rgba(0,0,0,0.15);display:flex;align-items:center;justify-content:center;gap:0.75rem;';
            banner.innerHTML = '<span>⚠️ <strong>Mode Maintenance Actif</strong> : Le site est actuellement masqué au public.</span> <a href="/admin-frontend/#settings" style="color:#ffffff;text-decoration:underline;font-weight:700;">Gérer dans l\'Admin</a>';
            document.body.prepend(banner);
          }
        }
      }

      // 2. Initialisation des Réseaux Sociaux
      let socialMap = {};
      if (Array.isArray(settings)) {
        socialMap = {
          twitter: settings.find(s => s.key === 'social.twitter')?.value,
          linkedin: settings.find(s => s.key === 'social.linkedin')?.value,
          instagram: settings.find(s => s.key === 'social.instagram')?.value,
          facebook: settings.find(s => s.key === 'social.facebook')?.value,
          youtube: settings.find(s => s.key === 'social.youtube')?.value,
          tiktok: settings.find(s => s.key === 'social.tiktok')?.value,
        };
      } else if (typeof settings === 'object') {
        socialMap = {
          twitter: settings['social.twitter'],
          linkedin: settings['social.linkedin'],
          instagram: settings['social.instagram'],
          facebook: settings['social.facebook'],
          youtube: settings['social.youtube'],
          tiktok: settings['social.tiktok'],
        };
      }

      Object.entries(socialMap).forEach(([platform, url]) => {
        const btn = document.querySelector(`.footer-social-btn[data-social="${platform}"]`);
        if (btn) {
          if (url && typeof url === 'string' && url.trim().length > 0) {
            btn.href = url.trim();
            btn.style.display = 'inline-flex';
          } else if (platform === 'youtube' || platform === 'tiktok') {
            btn.style.display = 'none';
          }
        }
      });
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
      initPublicSettingsAndMaintenance();
    });
  } else {
    window.Layout.init();
    initPublicSettingsAndMaintenance();
  }
})();

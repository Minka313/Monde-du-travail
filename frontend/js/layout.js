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
      const response = await fetch(url);
      if (!response.ok) throw new Error('Fragment load failed: ' + response.status);
      const html = await response.text();
      el.outerHTML = html;
      if (selector.includes('nav')) {
        const current = window.location.pathname.split('/').pop() || 'index.html';
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
        document.dispatchEvent(new Event('layout:loaded'));
      });
    },
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => window.Layout.init());
  } else {
    window.Layout.init();
  }
})();

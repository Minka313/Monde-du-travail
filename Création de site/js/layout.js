(function() {
  'use strict';

  async function includeFragment(selector, url) {
    const el = document.querySelector(selector);
    if (!el) return Promise.resolve();
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Fragment load failed: ' + response.status);
      const html = await response.text();
      el.outerHTML = html;
      return Promise.resolve();
    } catch (error) {
      console.error(error);
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

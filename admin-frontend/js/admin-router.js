(function() {
  'use strict';

  window.AdminRouter = {
    currentModule: 'dashboard',
    isInitialized: false,

    getModuleFromHash: function() {
      const hash = (window.location.hash || '').replace(/^#\/?/, '').trim();
      const authorized = window.AdminApp?.authorizedModules || [];
      if (hash && authorized.includes(hash)) return hash;
      if (authorized.includes('dashboard')) return 'dashboard';
      return authorized[0] || null;
    },

    navigate: async function(module, updateHash = true) {
      if (!window.AdminApp || !window.AdminApp.currentUser) {
        return;
      }

      const availableModules = window.AdminPages?.ADMIN_MODULES || {};
      const authorized = window.AdminApp.authorizedModules || [];

      if (!authorized || authorized.length === 0) {
        const denied = document.getElementById('admin-denied');
        const root = document.getElementById('admin-root');
        if (root) root.classList.add('hidden');
        if (denied) denied.classList.remove('hidden');
        return;
      }

      let targetModule = module;
      if (!authorized.includes(targetModule)) {
        targetModule = authorized.includes('dashboard') ? 'dashboard' : authorized[0];
      }

      if (!availableModules[targetModule] || !authorized.includes(targetModule)) {
        const denied = document.getElementById('admin-denied');
        const root = document.getElementById('admin-root');
        if (root) root.classList.add('hidden');
        if (denied) denied.classList.remove('hidden');
        return;
      }

      this.currentModule = targetModule;

      if (updateHash) {
        if (window.location.hash !== '#' + targetModule) {
          window.location.hash = targetModule;
        }
      }

      if (availableModules[targetModule]) {
        document.title = `Admin - ${availableModules[targetModule].label} - Le Monde du Travail`;
      }

      if (window.AdminPages) {
        window.AdminPages.buildSidebar(targetModule, window.AdminApp.authorizedModules);
        await window.AdminPages.loadPage(targetModule);
      }
    },

    init: async function() {
      if (this.isInitialized) return;
      this.isInitialized = true;

      const ok = await window.AdminApp.guard();
      if (!ok) return;

      const initialModule = this.getModuleFromHash();
      await this.navigate(initialModule, false);

      window.addEventListener('hashchange', () => {
        const mod = this.getModuleFromHash();
        if (mod !== this.currentModule) {
          this.navigate(mod, false);
        }
      });
    },

    guard: async function() {
      return await window.AdminApp.guard();
    },
  };
})();

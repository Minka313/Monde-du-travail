(function() {
  'use strict';

  window.AdminRouter = {
    currentModule: 'dashboard',

    navigate: function(module) {
      if (!window.AdminApp.authorizedModules.includes(module)) {
        window.AdminPages.showToast('Accès interdit à ce module', 'error');
        return;
      }

      this.currentModule = module;
      AdminPages.buildSidebar(module, window.AdminApp.authorizedModules);
      AdminPages.loadPage(module);
    },

    guard: async function() {
      return await window.AdminApp.guard();
    },
  };
})();

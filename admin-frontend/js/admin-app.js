(function() {
  'use strict';

  // Chaque onglet de l'admin est strictement soumis à une permission RBAC.
  // La source de vérité est le backend : les permissions et rôles viennent de /auth/me.
  const MODULE_PERMISSIONS = {
    dashboard: 'dashboard.read',
    analytics: 'analytics.read',
    organization: 'organization.read',
    formations: 'formation.read',
    metiers: 'metier.read',
    blog: 'blog.read',
    forum: 'forum.read',
    users: 'users.read',
    admins: 'admins.read',
    approvals: 'approvals.read',
    logs: 'logs.read',
    notifications: 'notifications.send',
    vitrine: 'vitrine.manage',
    settings: 'settings.manage',
  };

  window.AdminApp = {
    currentUser: null,
    authorizedModules: [],

    hasPermission: function(user, permission) {
      if (!permission) return true;
      // Seul l'ULTRA_ADMIN possède un passe-droit total
      if (user?.role === 'ULTRA_ADMIN') return true;
      const permissions = user?.permissions || [];
      return permissions.includes('*') || permissions.includes(permission);
    },

    // Un compte est admin s'il a le rôle de base ADMIN/ULTRA_ADMIN
    // ou au moins un rôle admin effectif (renvoyé par le backend).
    isAdminUser: function(user) {
      return ['ADMIN', 'ULTRA_ADMIN'].includes(user?.role)
        || (user?.adminRoles || []).length > 0;
    },

    getAuthorizedModules: function(user) {
      if (!user) return [];
      // Seul l'ULTRA_ADMIN (ou porteur de la permission globale *) a accès à tous les modules
      if (user?.role === 'ULTRA_ADMIN' || (user?.permissions || []).includes('*')) {
        return Object.keys(MODULE_PERMISSIONS);
      }

      return Object.keys(MODULE_PERMISSIONS).filter(module => {
        if (module === 'dashboard') {
          return this.hasPermission(user, 'dashboard.read');
        }
        if (module === 'approvals') {
          return this.hasPermission(user, 'approvals.read')
            || this.hasPermission(user, 'membership.read')
            || this.hasPermission(user, 'membership.approve');
        }
        if (module === 'vitrine') {
          return this.hasPermission(user, 'vitrine.manage')
            || this.hasPermission(user, 'media.manage')
            || this.hasPermission(user, 'settings.manage');
        }
        if (module === 'notifications') {
          return this.hasPermission(user, 'notifications.send')
            || this.hasPermission(user, 'settings.manage');
        }
        if (module === 'analytics') {
          return this.hasPermission(user, 'analytics.read');
        }
        const requiredPerm = MODULE_PERMISSIONS[module];
        return requiredPerm ? this.hasPermission(user, requiredPerm) : false;
      });
    },

    login: async function(email, password) {
      const response = await window.AdminApi.auth.login(email, password);
      window.AdminApi.setToken(response.data.accessToken);
      if (response.data.refreshToken && window.AdminApi.setRefreshToken) {
        window.AdminApi.setRefreshToken(response.data.refreshToken);
      }
      return response.data;
    },

    logout: async function() {
      try {
        await window.AdminApi.auth.logout();
      } catch (e) {
        // ignore
      }
      window.AdminApi.removeTokens();
      const loginUrl = (window.location.protocol === 'file:' || window.location.pathname.includes('/admin-frontend/')) ? 'login.html' : '/admin-frontend/login.html';
      window.location.href = loginUrl;
    },

    guard: async function() {
      const loading = document.getElementById('admin-loading');
      const root = document.getElementById('admin-root');
      const denied = document.getElementById('admin-denied');
      const loginUrl = (window.location.protocol === 'file:' || window.location.pathname.includes('/admin-frontend/')) ? 'login.html' : '/admin-frontend/login.html';

      if (loading) loading.classList.remove('hidden');
      if (root) root.classList.add('hidden');
      if (denied) denied.classList.add('hidden');

      if (!window.AdminApi || !window.AdminApi.isLoggedIn()) {
        if (loading) loading.classList.add('hidden');
        window.location.href = loginUrl;
        return false;
      }

      try {
        const response = await window.AdminApi.auth.me();
        const user = response.data;

        if (!user) {
          window.AdminApi.removeToken();
          if (loading) loading.classList.add('hidden');
          window.location.href = loginUrl;
          return false;
        }

        if (!this.isAdminUser(user)) {
          window.AdminApi.removeTokens();
          if (loading) loading.classList.add('hidden');
          if (denied) denied.classList.remove('hidden');
          return false;
        }

        this.currentUser = user;
        this.authorizedModules = this.getAuthorizedModules(user);

        if (loading) loading.classList.add('hidden');
        if (root) root.classList.remove('hidden');

        const userName = document.getElementById('admin-user-name');
        if (userName) {
          const roleLabel = window.AdminPages?.formatUserRole ? window.AdminPages.formatUserRole(user) : (user.role === 'ULTRA_ADMIN' ? '👑 Ultra Admin' : user.role);
          userName.textContent = `${user.firstName} ${user.lastName} • ${roleLabel}`;
        }

        const logoutBtn = document.getElementById('admin-logout-btn');
        if (logoutBtn && !logoutBtn.dataset.bound) {
          logoutBtn.dataset.bound = 'true';
          logoutBtn.addEventListener('click', () => this.logout());
        }

        return true;
      } catch (error) {
        window.AdminApi.removeToken();
        if (loading) loading.classList.add('hidden');
        window.location.href = loginUrl;
        return false;
      }
    },
  };
})();

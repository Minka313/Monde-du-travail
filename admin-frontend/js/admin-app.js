(function() {
  'use strict';

  // Chaque onglet de l'admin est soumis à une permission RBAC
  // (null = accessible à tout compte admin authentifié).
  // La source de vérité est le backend : ces permissions viennent de /auth/me.
  const MODULE_PERMISSIONS = {
    dashboard: null,
    analytics: null,
    organization: 'organization.read',
    formations: 'formation.read',
    metiers: 'metier.read',
    blog: 'blog.read',
    forum: 'forum.read',
    users: 'users.read',
    admins: 'admins.read',
    approvals: 'approvals.read',
    logs: 'logs.read',
    notifications: null,
    vitrine: null,
    settings: 'settings.manage',
  };

  window.AdminApp = {
    currentUser: null,
    authorizedModules: [],

    hasPermission: function(user, permission) {
      if (!permission) return true;
      if (['ADMIN', 'ULTRA_ADMIN'].includes(user?.role)) return true;
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
      if (['ADMIN', 'ULTRA_ADMIN'].includes(user?.role)) {
        return Object.keys(MODULE_PERMISSIONS);
      }
      return Object.keys(MODULE_PERMISSIONS).filter(module => {
        if (['analytics', 'notifications', 'organization', 'vitrine'].includes(module)) {
          return this.isAdminUser(user);
        }
        if (module === 'dashboard') return ['ADMIN', 'ULTRA_ADMIN'].includes(user?.role);
        if (module === 'approvals') {
          return this.hasPermission(user, 'approvals.read')
            || this.hasPermission(user, 'membership.read')
            || this.hasPermission(user, 'membership.approve');
        }
        return this.hasPermission(user, MODULE_PERMISSIONS[module]);
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

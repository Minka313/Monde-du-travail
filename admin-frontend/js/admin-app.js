(function() {
  'use strict';

  // Chaque onglet de l'admin est soumis à une permission RBAC
  // (null = accessible à tout compte admin authentifié).
  // La source de vérité est le backend : ces permissions viennent de /auth/me.
  const MODULE_PERMISSIONS = {
    dashboard: null,
    formations: 'formation.read',
    metiers: 'metier.read',
    blog: 'blog.read',
    forum: 'forum.read',
    users: 'users.read',
    admins: 'admins.read',
    approvals: 'approvals.read',
    logs: 'logs.read',
    settings: 'settings.manage',
  };

  window.AdminApp = {
    currentUser: null,
    authorizedModules: [],

    hasPermission: function(user, permission) {
      if (!permission) return true;
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
      return Object.keys(MODULE_PERMISSIONS).filter(
        module => this.hasPermission(user, MODULE_PERMISSIONS[module])
      );
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
      window.location.href = 'login.html';
    },

    guard: async function() {
      const loading = document.getElementById('admin-loading');
      const root = document.getElementById('admin-root');
      const denied = document.getElementById('admin-denied');

      if (loading) loading.classList.remove('hidden');
      if (root) root.classList.add('hidden');
      if (denied) denied.classList.add('hidden');

      if (!window.AdminApi || !window.AdminApi.isLoggedIn()) {
        if (loading) loading.classList.add('hidden');
        window.location.href = 'login.html';
        return false;
      }

      try {
        const response = await window.AdminApi.auth.me();
        const user = response.data;

        if (!user) {
          window.AdminApi.removeToken();
          if (loading) loading.classList.add('hidden');
          window.location.href = 'login.html';
          return false;
        }

        if (!this.isAdminUser(user)) {
          if (loading) loading.classList.add('hidden');
          if (denied) denied.classList.remove('hidden');
          return false;
        }

        this.currentUser = user;
        this.authorizedModules = this.getAuthorizedModules(user);

        if (loading) loading.classList.add('hidden');
        if (root) root.classList.remove('hidden');

        const userName = document.getElementById('admin-user-name');
        if (userName) userName.textContent = `${user.firstName} ${user.lastName}`;

        AdminPages.buildSidebar('dashboard', this.authorizedModules);
        await AdminPages.loadPage('dashboard');

        document.getElementById('admin-logout-btn')?.addEventListener('click', () => this.logout());

        return true;
      } catch (error) {
        window.AdminApi.removeToken();
        if (loading) loading.classList.add('hidden');
        window.location.href = 'login.html';
        return false;
      }
    },
  };
})();

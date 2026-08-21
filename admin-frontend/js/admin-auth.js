(function() {
  'use strict';

  const API_BASE = (window.AppConfig && window.AppConfig.API_BASE)
    ? window.AppConfig.API_BASE
    : ((window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:')
        ? 'http://localhost:5000/api'
        : '/api');

  const IS_FILE_PROTOCOL = window.location.protocol === 'file:';
  console.log('[AdminApi] API_BASE:', API_BASE, 'IS_FILE_PROTOCOL:', IS_FILE_PROTOCOL);

  function getToken() {
    return localStorage.getItem('adminAccessToken');
  }

  function setToken(token) {
    if (token) {
      localStorage.setItem('adminAccessToken', token);
    } else {
      localStorage.removeItem('adminAccessToken');
    }
  }

  function getRefreshToken() {
    return localStorage.getItem('adminRefreshToken');
  }

  function setRefreshToken(token) {
    if (token) {
      localStorage.setItem('adminRefreshToken', token);
    } else {
      localStorage.removeItem('adminRefreshToken');
    }
  }

  function removeTokens() {
    localStorage.removeItem('adminAccessToken');
    localStorage.removeItem('adminRefreshToken');
  }

  async function apiRequest(endpoint, options = {}) {
    const token = getToken();
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    };

    const url = `${API_BASE}${endpoint}`;
    console.log('[AdminApi] Request:', options.method || 'GET', url);

    const response = await fetch(url, {
      ...options,
      headers,
      credentials: IS_FILE_PROTOCOL ? 'omit' : 'include',
    });

    const data = await response.json().catch(() => ({}));

    if (response.status === 401) {
      removeTokens();
      window.location.href = 'login.html';
      throw new Error('Session expirée');
    }

    if (response.status === 403 && data.code === 'REAUTH_REQUIRED' && !options._reauthTried) {
      // Action critique : confirmation par mot de passe, puis nouvel essai
      const password = window.prompt('⚠️ Action critique.\nConfirmez avec votre mot de passe pour continuer.');
      if (password !== null) {
        return apiRequest(endpoint, {
          ...options,
          _reauthTried: true,
          headers: { ...options.headers, 'x-confirm-password': password },
        });
      }
      throw new Error('Action annulée : confirmation requise.');
    }

    if (response.status === 403) {
      throw new Error(data.message || 'Accès interdit');
    }

    if (!response.ok || !data.success) {
      throw new Error(data.message || `Erreur HTTP ${response.status}`);
    }

    return data;
  }

  async function apiRequestWithRefresh(endpoint, options = {}) {
    try {
      return await apiRequest(endpoint, options);
    } catch (error) {
      if (error.message === 'Session expirée') {
        throw error;
      }
      throw error;
    }
  }

  function contentListQuery(endpoint, params = {}) {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '' && value !== false) {
        query.set(key, value);
      }
    });
    const qs = query.toString();
    return apiRequestWithRefresh(`${endpoint}${qs ? `?${qs}` : ''}`);
  }

  window.AdminApi = {
    auth: {
      login: (email, password) => apiRequestWithRefresh('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      }),
      logout: () => apiRequestWithRefresh('/auth/logout', { method: 'POST' }),
      me: () => apiRequestWithRefresh('/auth/me'),
    },
    admin: {
      getStats: () => apiRequestWithRefresh('/admin/stats'),
      getPendingMemberships: () => apiRequestWithRefresh('/admin/memberships/pending'),
      getAllPosts: (params = {}) => {
        const query = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== '') {
            query.set(key, value);
          }
        });
        const qs = query.toString();
        return apiRequestWithRefresh(`/admin/blog/posts${qs ? `?${qs}` : ''}`);
      },
      approveMembership: (id) => apiRequestWithRefresh(`/admin/memberships/${id}/approve`, { method: 'POST' }),
      rejectMembership: (id) => apiRequestWithRefresh(`/admin/memberships/${id}/reject`, { method: 'POST' }),
      getAllAdmins: (params = {}) => {
        const query = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== '') {
            query.set(key, value);
          }
        });
        const qs = query.toString();
        return apiRequestWithRefresh(`/admin/admins${qs ? `?${qs}` : ''}`);
      },
      getPendingAdmins: () => apiRequestWithRefresh('/admin/admins/pending'),
      approveAdmin: (id) => apiRequestWithRefresh(`/admin/admins/${id}/approve`, { method: 'POST' }),
      rejectAdmin: (id, reason) => apiRequestWithRefresh(`/admin/admins/${id}/reject`, {
        method: 'POST',
        body: JSON.stringify({ reason }),
      }),
      suspendAdmin: (id) => apiRequestWithRefresh(`/admin/admins/${id}/suspend`, { method: 'POST' }),
      reactivateAdmin: (id) => apiRequestWithRefresh(`/admin/admins/${id}/reactivate`, { method: 'POST' }),
      revokeAdmin: (id) => apiRequestWithRefresh(`/admin/admins/${id}/revoke`, { method: 'POST' }),
    },
    rbac: {
      getRoles: () => apiRequestWithRefresh('/rbac/roles'),
      getRole: (id) => apiRequestWithRefresh(`/rbac/roles/${id}`),
      getPermissions: () => apiRequestWithRefresh('/rbac/permissions'),
      createRole: (data) => apiRequestWithRefresh('/rbac/roles', { method: 'POST', body: JSON.stringify(data) }),
      updateRole: (id, data) => apiRequestWithRefresh(`/rbac/roles/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
      deleteRole: (id) => apiRequestWithRefresh(`/rbac/roles/${id}`, { method: 'DELETE' }),
      getUserRoles: (userId) => apiRequestWithRefresh(`/rbac/users/${userId}/roles`),
      assignRole: (userId, adminRoleId) => apiRequestWithRefresh('/rbac/users/roles', { method: 'POST', body: JSON.stringify({ userId, adminRoleId }) }),
      removeRoleAssignment: (userId, adminRoleId) => apiRequestWithRefresh('/rbac/users/roles/remove', { method: 'POST', body: JSON.stringify({ userId, adminRoleId }) }),
      getAuditLogs: (params = {}) => {
        const query = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== '') {
            query.set(key, value);
          }
        });
        const qs = query.toString();
        return apiRequestWithRefresh(`/rbac/audit-logs${qs ? `?${qs}` : ''}`);
      },
    },
    approvals: {
      getPending: () => apiRequestWithRefresh('/approvals/pending'),
      getAll: (params = {}) => {
        const query = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== '') {
            query.set(key, value);
          }
        });
        const qs = query.toString();
        return apiRequestWithRefresh(`/approvals${qs ? `?${qs}` : ''}`);
      },
      approve: (id, comment) => apiRequestWithRefresh(`/approvals/${id}/approve`, {
        method: 'POST',
        body: JSON.stringify({ comment }),
      }),
      reject: (id, comment) => apiRequestWithRefresh(`/approvals/${id}/reject`, {
        method: 'POST',
        body: JSON.stringify({ comment }),
      }),
    },
    formations: {
      getAll: () => apiRequestWithRefresh('/formations'),
      getAdmin: (params = {}) => contentListQuery('/formations/admin/list', params),
      create: (data) => apiRequestWithRefresh('/formations', { method: 'POST', body: JSON.stringify(data) }),
      update: (id, data) => apiRequestWithRefresh(`/formations/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
      remove: (id) => apiRequestWithRefresh(`/formations/${id}`, { method: 'DELETE' }),
      submit: (id) => apiRequestWithRefresh(`/formations/${id}/submit`, { method: 'POST' }),
      publish: (id) => apiRequestWithRefresh(`/formations/${id}/publish`, { method: 'POST' }),
      unpublish: (id) => apiRequestWithRefresh(`/formations/${id}/unpublish`, { method: 'POST' }),
      archive: (id) => apiRequestWithRefresh(`/formations/${id}/archive`, { method: 'POST' }),
    },
    jobs: {
      getAll: () => apiRequestWithRefresh('/jobs'),
      getAdmin: (params = {}) => contentListQuery('/jobs/admin/list', params),
      create: (data) => apiRequestWithRefresh('/jobs', { method: 'POST', body: JSON.stringify(data) }),
      update: (id, data) => apiRequestWithRefresh(`/jobs/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
      remove: (id) => apiRequestWithRefresh(`/jobs/${id}`, { method: 'DELETE' }),
      submit: (id) => apiRequestWithRefresh(`/jobs/${id}/submit`, { method: 'POST' }),
      publish: (id) => apiRequestWithRefresh(`/jobs/${id}/publish`, { method: 'POST' }),
      unpublish: (id) => apiRequestWithRefresh(`/jobs/${id}/unpublish`, { method: 'POST' }),
      archive: (id) => apiRequestWithRefresh(`/jobs/${id}/archive`, { method: 'POST' }),
    },
    blog: {
      getAll: (params = {}) => {
        const query = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== '') {
            query.set(key, value);
          }
        });
        const qs = query.toString();
        return apiRequestWithRefresh(`/blog${qs ? `?${qs}` : ''}`);
      },
    },
    users: {
      getAll: (params = {}) => contentListQuery('/users', params),
      get: (id) => apiRequestWithRefresh(`/users/${id}`),
      update: (id, data) => apiRequestWithRefresh(`/users/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
      activate: (id) => apiRequestWithRefresh(`/users/${id}/activate`, { method: 'POST' }),
      deactivate: (id) => apiRequestWithRefresh(`/users/${id}/deactivate`, { method: 'POST' }),
      verify: (id) => apiRequestWithRefresh(`/users/${id}/verify`, { method: 'POST' }),
      remove: (id) => apiRequestWithRefresh(`/users/${id}`, { method: 'DELETE' }),
    },
    settings: {
      getAll: () => apiRequestWithRefresh('/settings'),
      update: (key, value) => apiRequestWithRefresh(`/settings/${key}`, { method: 'PUT', body: JSON.stringify({ value }) }),
    },
    forum: {
      getAll: (params = {}) => {
        const query = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== '') {
            query.set(key, value);
          }
        });
        const qs = query.toString();
        return apiRequestWithRefresh(`/forum${qs ? `?${qs}` : ''}`);
      },
    },
    getToken,
    setToken,
    removeTokens,
    isLoggedIn: () => !!getToken(),
  };
})();

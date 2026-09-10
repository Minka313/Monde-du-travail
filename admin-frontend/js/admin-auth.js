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
    return null; // Déprécié : les refresh tokens sont gérés via cookies HttpOnly
  }

  function setRefreshToken(token) {
    // Ne pas stocker le refresh token en localStorage pour prévenir l'exfiltration XSS
  }

  function removeTokens() {
    localStorage.removeItem('adminAccessToken');
    localStorage.removeItem('adminRefreshToken');
  }

  function showReauthModal() {
    return new Promise((resolve) => {
      const existingModal = document.getElementById('admin-reauth-modal');
      if (existingModal) existingModal.remove();

      const overlay = document.createElement('div');
      overlay.id = 'admin-reauth-modal';
      overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(15,23,42,0.65);display:flex;align-items:center;justify-content:center;z-index:99999;backdrop-filter:blur(4px);';

      overlay.innerHTML = `
        <div style="background:#ffffff;border-radius:12px;padding:24px;max-width:420px;width:90%;box-shadow:0 20px 25px -5px rgba(0,0,0,0.25);border:1px solid #e2e8f0;font-family:inherit;">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
            <span style="font-size:26px;">🛡️</span>
            <div>
              <h3 style="margin:0;font-size:1.15rem;color:#0f172a;font-weight:600;">Confirmation critique</h3>
              <span style="font-size:0.82rem;color:#64748b;">Authentification requise</span>
            </div>
          </div>
          <p style="margin:0 0 16px 0;font-size:0.9rem;color:#475569;line-height:1.45;">
            Cette opération a un impact de sécurité majeur. Veuillez saisir votre mot de passe pour confirmer.
          </p>
          <form id="reauth-form" style="margin:0;">
            <div style="margin-bottom:18px;">
              <input type="password" id="reauth-password-input" placeholder="Mot de passe administrateur" required autocomplete="current-password"
                style="width:100%;box-sizing:border-box;padding:10px 12px;border:1.5px solid #cbd5e1;border-radius:8px;font-size:0.95rem;outline:none;" />
            </div>
            <div style="display:flex;justify-content:flex-end;gap:10px;">
              <button type="button" id="reauth-cancel-btn" style="padding:8px 16px;background:#f1f5f9;color:#475569;border:none;border-radius:6px;cursor:pointer;font-weight:500;">Annuler</button>
              <button type="submit" id="reauth-confirm-btn" style="padding:8px 20px;background:#2563eb;color:#ffffff;border:none;border-radius:6px;cursor:pointer;font-weight:600;">Confirmer</button>
            </div>
          </form>
        </div>
      `;

      document.body.appendChild(overlay);

      const input = overlay.querySelector('#reauth-password-input');
      const form = overlay.querySelector('#reauth-form');
      const cancelBtn = overlay.querySelector('#reauth-cancel-btn');

      input.focus();

      function cleanup(result) {
        window.removeEventListener('keydown', handleKey);
        overlay.remove();
        resolve(result);
      }

      function handleKey(e) {
        if (e.key === 'Escape') cleanup(null);
      }
      window.addEventListener('keydown', handleKey);

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const val = input.value;
        if (val) cleanup(val);
      });

      cancelBtn.addEventListener('click', () => cleanup(null));
    });
  }

  let refreshPromise = null;

  async function refreshToken() {
    if (refreshPromise) return refreshPromise;

    refreshPromise = fetch(`${API_BASE}/auth/refresh`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
      credentials: IS_FILE_PROTOCOL ? 'omit' : 'include',
    })
      .then(async response => {
        const data = await response.json().catch(() => ({}));
        if (!response.ok || !data.success || !data.data?.accessToken) {
          throw new Error(data.message || 'Impossible de renouveler la session');
        }
        setToken(data.data.accessToken);
        return data.data.accessToken;
      })
      .catch(() => {
        removeTokens();
        return null;
      })
      .finally(() => {
        refreshPromise = null;
      });

    return refreshPromise;
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

    if (response.status === 401 && !options._retry && !endpoint.includes('/auth/')) {
      const newToken = await refreshToken();
      if (newToken) {
        return apiRequest(endpoint, { ...options, _retry: true });
      }
    }

    if (response.status === 401) {
      removeTokens();
      window.location.href = 'login.html';
      throw new Error('Session expirée');
    }

    if (response.status === 403 && data.code === 'REAUTH_REQUIRED' && !options._reauthTried) {
      // Action critique : modale sécurisée avec saisie masquée (évite window.prompt)
      const password = await showReauthModal();
      if (password) {
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
      login2FA: (tempToken, code) => apiRequestWithRefresh('/auth/login-2fa', {
        method: 'POST',
        body: JSON.stringify({ tempToken, code }),
      }),
      logout: () => apiRequestWithRefresh('/auth/logout', { method: 'POST' }),
      me: () => apiRequestWithRefresh('/auth/me'),
    },
    twoFactor: {
      getStatus: () => apiRequestWithRefresh('/admin/2fa/status'),
      setup: () => apiRequestWithRefresh('/admin/2fa/setup', { method: 'POST' }),
      verify: (code) => apiRequestWithRefresh('/admin/2fa/verify', {
        method: 'POST',
        body: JSON.stringify({ code }),
      }),
      disable: (password) => apiRequestWithRefresh('/admin/2fa/disable', {
        method: 'POST',
        body: JSON.stringify({ password }),
      }),
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
      create: (data) => apiRequestWithRefresh('/admin/admins', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
      getLogs: (id) => apiRequestWithRefresh(`/admin/admins/${id}/logs`),
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
      getCategories: () => apiRequestWithRefresh('/formations/categories'),
      getAdmin: (params = {}) => contentListQuery('/formations/admin/list', params),
      create: (data) => apiRequestWithRefresh('/formations', { method: 'POST', body: JSON.stringify(data) }),
      update: (id, data) => apiRequestWithRefresh(`/formations/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
      remove: (id) => apiRequestWithRefresh(`/formations/${id}`, { method: 'DELETE' }),
      removeBulk: (ids) => apiRequestWithRefresh('/formations/bulk-delete', { method: 'POST', body: JSON.stringify({ ids }) }),
      submit: (id) => apiRequestWithRefresh(`/formations/${id}/submit`, { method: 'POST' }),
      publish: (id) => apiRequestWithRefresh(`/formations/${id}/publish`, { method: 'POST' }),
      unpublish: (id) => apiRequestWithRefresh(`/formations/${id}/unpublish`, { method: 'POST' }),
      archive: (id) => apiRequestWithRefresh(`/formations/${id}/archive`, { method: 'POST' }),
    },
    jobs: {
      getAll: () => apiRequestWithRefresh('/jobs'),
      getDomains: () => apiRequestWithRefresh('/jobs/domains'),
      getAdmin: (params = {}) => contentListQuery('/jobs/admin/list', params),
      create: (data) => apiRequestWithRefresh('/jobs', { method: 'POST', body: JSON.stringify(data) }),
      update: (id, data) => apiRequestWithRefresh(`/jobs/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
      remove: (id) => apiRequestWithRefresh(`/jobs/${id}`, { method: 'DELETE' }),
      removeBulk: (ids) => apiRequestWithRefresh('/jobs/bulk-delete', { method: 'POST', body: JSON.stringify({ ids }) }),
      submit: (id) => apiRequestWithRefresh(`/jobs/${id}/submit`, { method: 'POST' }),
      publish: (id) => apiRequestWithRefresh(`/jobs/${id}/publish`, { method: 'POST' }),
      unpublish: (id) => apiRequestWithRefresh(`/jobs/${id}/unpublish`, { method: 'POST' }),
      archive: (id) => apiRequestWithRefresh(`/jobs/${id}/archive`, { method: 'POST' }),
    },
    blog: {
      getAll: (params = {}) => contentListQuery('/blog/admin/list', params),
      get: (id) => apiRequestWithRefresh(`/blog/${id}`),
      create: (data) => apiRequestWithRefresh('/blog', { method: 'POST', body: JSON.stringify(data) }),
      update: (id, data) => apiRequestWithRefresh(`/blog/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
      remove: (id) => apiRequestWithRefresh(`/blog/${id}`, { method: 'DELETE' }),
      submit: (id) => apiRequestWithRefresh(`/blog/${id}/submit`, { method: 'POST' }),
      publish: (id) => apiRequestWithRefresh(`/blog/${id}/publish`, { method: 'POST' }),
      unpublish: (id) => apiRequestWithRefresh(`/blog/${id}/unpublish`, { method: 'POST' }),
      archive: (id) => apiRequestWithRefresh(`/blog/${id}/archive`, { method: 'POST' }),
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
      getById: (id) => apiRequestWithRefresh(`/forum/${id}`),
      pin: (id) => apiRequestWithRefresh(`/forum/${id}/pin`, { method: 'PUT' }),
      lock: (id) => apiRequestWithRefresh(`/forum/${id}/lock`, { method: 'PUT' }),
      resolve: (id) => apiRequestWithRefresh(`/forum/${id}/resolve`, { method: 'PUT' }),
      remove: (id) => apiRequestWithRefresh(`/forum/${id}`, { method: 'DELETE' }),
    },
    getToken,
    setToken,
    removeTokens,
    isLoggedIn: () => !!getToken(),
  };
})();

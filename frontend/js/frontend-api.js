(function() {
  'use strict';

  const API_BASE = window.AppConfig?.API_BASE || '/api';
  let isRefreshing = false;

  const NetLog = {
    enabled: false,
    logs: [],
    maxLogs: 50,

    log(method, endpoint, status, duration, error) {
      if (!this.enabled) return;
      const entry = {
        time: new Date().toISOString(),
        method,
        endpoint,
        status,
        duration: `${duration}ms`,
        error: error ? String(error) : null,
      };
      this.logs.unshift(entry);
      if (this.logs.length > this.maxLogs) this.logs.pop();
      console.log(`[NetLog] ${method} ${endpoint} -> ${status} (${duration}ms)`, error || '');
    },

    enable() {
      this.enabled = true;
      console.log('[NetLog] Enabled');
    },

    disable() {
      this.enabled = false;
      console.log('[NetLog] Disabled');
    },

    clear() {
      this.logs = [];
      console.log('[NetLog] Cleared');
    },

    getLogs() {
      return [...this.logs];
    },
  };

  window.NetLog = NetLog;

  // Enable network logging if URL has ?netlog=1
  if (window.location.search.includes('netlog=1')) {
    NetLog.enable();
  }

  function getToken() {
    const token = localStorage.getItem('accessToken') || localStorage.getItem('adminAccessToken');
    if (token && !localStorage.getItem('accessToken')) {
      try { localStorage.setItem('accessToken', token); } catch (_) {}
    }
    return token;
  }

  function setToken(token) {
    if (token) {
      try {
        localStorage.setItem('accessToken', token);
        localStorage.setItem('adminAccessToken', token);
      } catch (_) {}
    } else {
      removeToken();
    }
  }

  function removeToken() {
    try {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('adminAccessToken');
    } catch (_) {}
  }

  function escapeHtml(value) {
    if (value == null) return '';
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function safeUrl(value, fallback = '') {
    try {
      const url = new URL(value, window.location.href);
      return ['http:', 'https:'].includes(url.protocol) ? url.href : fallback;
    } catch {
      return fallback;
    }
  }

  // Photo de profil : lien http(s) (photo importée) ou image intégrée (avatars prédéfinis)
  function avatarSrc(value) {
    if (!value || typeof value !== 'string') return '';
    if (/^data:image\/(svg\+xml|png|jpe?g|webp|gif)[;,]/i.test(value)) return value;
    return safeUrl(value);
  }

  // Avatar d'une personne : sa photo si elle en a une, sinon ses initiales.
  // `person` : { firstName, lastName, avatarUrl } ou { name, photo } ; `size` en pixels.
  function avatarHtml(person, { size = 40, className = '' } = {}) {
    const p = person || {};
    const name = p.name || `${p.firstName || ''} ${p.lastName || ''}`.trim();
    const initials = name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase() || '?';
    const src = avatarSrc(p.avatarUrl || p.photo);
    const style = `width:${size}px;height:${size}px;font-size:${Math.round(size * 0.38)}px;`;
    return src
      ? `<img class="user-avatar ${escapeHtml(className)}" src="${escapeHtml(src)}" alt="${escapeHtml(name)}" width="${size}" height="${size}" loading="lazy" style="${style}border-radius:50%;object-fit:cover;flex-shrink:0;">`
      : `<span class="user-avatar user-avatar--initials ${escapeHtml(className)}" aria-hidden="true" style="${style}border-radius:50%;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;font-weight:700;color:#fff;background:linear-gradient(135deg,#0f2b46,#1a3f5f);">${escapeHtml(initials)}</span>`;
  }

  window.escapeHtml = escapeHtml;
  window.safeUrl = safeUrl;
  window.avatarSrc = avatarSrc;
  window.avatarHtml = avatarHtml;

  async function refreshToken() {
    if (isRefreshing) return;
    isRefreshing = true;

    try {
      const response = await fetch(`${API_BASE}/auth/refresh`, {
        method: 'POST',
        credentials: 'include',
      });
      const data = await response.json();

      if (data.success && data.data?.accessToken) {
        setToken(data.data.accessToken);
        return data.data.accessToken;
      }
    } catch (error) {
      console.error('Token refresh failed:', error);
    } finally {
      isRefreshing = false;
    }

    removeToken();
    if (window.location.pathname !== '/login.html' && !window.location.pathname.endsWith('login.html')) {
      window.location.href = 'login.html';
    }
    return null;
  }

  function getHeaders() {
    const headers = {
      'Content-Type': 'application/json',
    };
    const token = getToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
return headers;
  }

  async function apiRequest(endpoint, options = {}) {
    const url = `${API_BASE}${endpoint}`;
    const config = {
      ...options,
      credentials: options.credentials || 'include',
      headers: {
        ...getHeaders(),
        ...options.headers,
      },
    };
    // Le navigateur fixe lui-même l'en-tête multipart d'un FormData
    if (options.body instanceof FormData) delete config.headers['Content-Type'];

    const startTime = performance.now();
    let status = null;
    let error = null;

    try {
      const response = await fetch(url, config);
      status = response.status;
      let data = {};
      try {
        data = await response.json();
      } catch (_) {
        data = { success: false, message: response.status >= 500 ? 'Erreur interne du serveur' : `Erreur HTTP ${response.status}` };
      }

      const duration = Math.round(performance.now() - startTime);
      NetLog.log(options.method || 'GET', endpoint, status, duration);

      if (response.status === 503 || data.code === 'MAINTENANCE') {
        if (!window.location.pathname.endsWith('maintenance.html')) {
          try { sessionStorage.setItem('maintenance_return_url', window.location.href); } catch (_) {}
          window.location.href = 'maintenance.html';
        }
        const err = new Error(data.message || 'La plateforme est actuellement en cours de maintenance.');
        err.status = 503;
        err.data = data;
        throw err;
      }

      if (!response.ok || !data.success) {
        const err = new Error(data.message || `Erreur HTTP ${response.status}`);
        err.status = response.status;
        err.data = data;
        throw err;
      }

      return data;
    } catch (err) {
      error = err;
      const duration = Math.round(performance.now() - startTime);
      NetLog.log(options.method || 'GET', endpoint, status || 'ERR', duration, err.message);
      throw err;
    }
  }

  async function apiRequestWithRefresh(endpoint, options = {}) {
    const url = `${API_BASE}${endpoint}`;
    const config = {
      ...options,
      credentials: options.credentials || 'include',
      headers: {
        ...getHeaders(),
        ...options.headers,
      },
    };
    // Le navigateur fixe lui-même l'en-tête multipart d'un FormData
    if (options.body instanceof FormData) delete config.headers['Content-Type'];

    const startTime = performance.now();
    let status = null;
    let error = null;

    try {
      const response = await fetch(url, config);
      status = response.status;
      let data = {};
      try {
        data = await response.json();
      } catch (_) {
        data = { success: false, message: response.status >= 500 ? 'Erreur interne du serveur' : `Erreur HTTP ${response.status}` };
      }

      if (response.status === 503 || data.code === 'MAINTENANCE') {
        if (!window.location.pathname.endsWith('maintenance.html')) {
          try { sessionStorage.setItem('maintenance_return_url', window.location.href); } catch (_) {}
          window.location.href = 'maintenance.html';
        }
        const err = new Error(data.message || 'La plateforme est actuellement en cours de maintenance.');
        err.status = 503;
        err.data = data;
        throw err;
      }

      if (response.status === 401 && !options._retry && !endpoint.includes('/auth/')) {
        const newToken = await refreshToken();
        if (newToken) {
          return apiRequestWithRefresh(endpoint, { ...options, _retry: true });
        }
      }

      const duration = Math.round(performance.now() - startTime);
      NetLog.log(options.method || 'GET', endpoint, status, duration);

      if (!response.ok || !data.success) {
        const err = new Error(data.message || `Erreur HTTP ${response.status}`);
        err.status = response.status;
        err.data = data;
        throw err;
      }

      return data;
    } catch (err) {
      error = err;
      const duration = Math.round(performance.now() - startTime);
      NetLog.log(options.method || 'GET', endpoint, status || 'ERR', duration, err.message);
      throw err;
    }
  }

  window.Api = {
    // Requête générique authentifiée (composants partagés site / admin, ex. Espace Mentor)
    request: (endpoint, options = {}) => apiRequestWithRefresh(endpoint, options),
    // Authentification
    auth: {
      register: (userData) => apiRequestWithRefresh('/auth/register', {
        method: 'POST',
        body: JSON.stringify(userData),
      }),
      login2FA: (tempToken, code) => apiRequestWithRefresh('/auth/login-2fa', { method: 'POST', body: JSON.stringify({ tempToken, code }) }),
      resend2FA: (tempToken) => apiRequestWithRefresh('/auth/login-2fa/resend', { method: 'POST', body: JSON.stringify({ tempToken }) }),
      login: (email, password) => apiRequestWithRefresh('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      }),
      forgotPassword: (email) => apiRequest('/auth/forgot-password', {
        method: 'POST',
        body: JSON.stringify({ email }),
      }),
      resetPassword: (token, newPassword) => apiRequest('/auth/reset-password', {
        method: 'POST',
        body: JSON.stringify({ token, newPassword }),
      }),
      logout: () => apiRequestWithRefresh('/auth/logout', { method: 'POST' }),
      me: () => apiRequestWithRefresh('/auth/me'),
      updateAvatar: (avatarUrl) => apiRequestWithRefresh('/auth/me/avatar', {
        method: 'PUT',
        body: JSON.stringify({ avatarUrl }),
      }),
      uploadAvatar: (blob) => {
        const form = new FormData();
        form.append('file', blob, 'avatar.jpg');
        return apiRequestWithRefresh('/auth/me/avatar/upload', { method: 'POST', body: form });
      },
    },

    // Blog / Actualités
    events: {
      getAll: (type) => {
        const query = type ? `?type=${encodeURIComponent(type)}` : '';
        return apiRequestWithRefresh(`/events${query}`);
      },
      getById: (id) => apiRequestWithRefresh(`/events/${id}`),
    },

    // Métiers
    jobs: {
      getAll: (params = {}) => {
        if (typeof params === 'string') {
          const q = params ? `?category=${encodeURIComponent(params)}` : '';
          return apiRequestWithRefresh(`/jobs${q}`);
        }
        const query = new URLSearchParams();
        if (params.category) query.set('category', params.category);
        if (params.domain) query.set('domain', params.domain);
        if (params.search) query.set('search', params.search);
        const qs = query.toString();
        return apiRequestWithRefresh(`/jobs${qs ? `?${qs}` : ''}`);
      },
      getDomains: () => apiRequestWithRefresh('/jobs/domains'),
      getById: (id) => apiRequestWithRefresh(`/jobs/${id}`),
    },

    // Rapports du bureau (espace personnel des postes)
    reports: {
      context: () => apiRequestWithRefresh('/reports/context'),
      list: (params = {}) => {
        const query = new URLSearchParams();
        Object.entries(params).forEach(([key, value]) => { if (value) query.set(key, value); });
        const qs = query.toString();
        return apiRequestWithRefresh(`/reports${qs ? `?${qs}` : ''}`);
      },
      get: (id) => apiRequestWithRefresh(`/reports/${encodeURIComponent(id)}`),
      create: (data) => apiRequestWithRefresh('/reports', { method: 'POST', body: JSON.stringify(data) }),
      update: (id, data) => apiRequestWithRefresh(`/reports/${encodeURIComponent(id)}`, { method: 'PUT', body: JSON.stringify(data) }),
      remove: (id) => apiRequestWithRefresh(`/reports/${encodeURIComponent(id)}`, { method: 'DELETE' }),
      archive: (id) => apiRequestWithRefresh(`/reports/${encodeURIComponent(id)}/archive`, { method: 'POST' }),
      unarchive: (id) => apiRequestWithRefresh(`/reports/${encodeURIComponent(id)}/unarchive`, { method: 'POST' }),
      submit: (id) => apiRequestWithRefresh(`/reports/${encodeURIComponent(id)}/submit`, { method: 'POST' }),
      review: (id, decision, comment) => apiRequestWithRefresh(`/reports/${encodeURIComponent(id)}/review`, {
        method: 'POST',
        body: JSON.stringify({ decision, comment }),
      }),
      summary: (year) => apiRequestWithRefresh(`/reports/summary${year ? `?year=${encodeURIComponent(year)}` : ''}`),
      uploadAttachment: (file) => {
        const body = new FormData();
        body.append('file', file);
        return apiRequestWithRefresh('/reports/attachments', { method: 'POST', body });
      },
    },

    // Concours & opportunités
    opportunities: {
      getAll: (params = {}) => {
        const query = new URLSearchParams();
        ['category', 'level', 'destination', 'phase', 'search', 'domain', 'series'].forEach((key) => {
          if (params[key]) query.set(key, params[key]);
        });
        const qs = query.toString();
        return apiRequestWithRefresh(`/opportunities${qs ? `?${qs}` : ''}`);
      },
      getById: (id) => apiRequestWithRefresh(`/opportunities/${encodeURIComponent(id)}`),
      report: (id, data) => apiRequestWithRefresh(`/opportunities/${encodeURIComponent(id)}/reports`, { method: 'POST', body: JSON.stringify(data) }),
      alert: (id, email) => apiRequestWithRefresh(`/opportunities/${encodeURIComponent(id)}/alerts`, { method: 'POST', body: JSON.stringify({ email }) }),
      confirmAlert: (token) => apiRequestWithRefresh('/opportunities/alerts/confirm', { method: 'POST', body: JSON.stringify({ token }) }),
      stopAlert: (token) => apiRequestWithRefresh('/opportunities/alerts/unsubscribe', { method: 'POST', body: JSON.stringify({ token }) }),
    },

    // Formations
    formations: {
      getAll: (params = {}) => {
        if (typeof params === 'string') {
          const q = params ? `?category=${encodeURIComponent(params)}` : '';
          return apiRequestWithRefresh(`/formations${q}`);
        }
        const query = new URLSearchParams();
        if (params.category) query.set('category', params.category);
        if (params.search) query.set('search', params.search);
        const qs = query.toString();
        return apiRequestWithRefresh(`/formations${qs ? `?${qs}` : ''}`);
      },
      getCategories: () => apiRequestWithRefresh('/formations/categories'),
      getById: (id) => apiRequestWithRefresh(`/formations/${id}`),
      register: (id, data) => apiRequestWithRefresh(`/formations/${id}/register`, {
        method: 'POST',
        body: JSON.stringify(data),
      }),
      getVisioSession: (id) => apiRequestWithRefresh(`/formations/${id}/visio`),
    },

    // Forum
    forum: {
      getAll: (params = {}) => {
        const query = new URLSearchParams();
        if (params.page) query.set('page', params.page);
        if (params.limit) query.set('limit', params.limit);
        if (params.category) query.set('category', params.category);
        if (params.tag) query.set('tag', params.tag);
        if (params.search) query.set('search', params.search);
        if (params.status) query.set('status', params.status);
        if (params.sort) query.set('sort', params.sort);
        const qs = query.toString();
        return apiRequestWithRefresh(`/forum${qs ? `?${qs}` : ''}`);
      },
      getCategories: () => apiRequestWithRefresh('/forum/categories'),
      getPopularTags: () => apiRequestWithRefresh('/forum/tags/popular'),
      getById: (id) => apiRequestWithRefresh(`/forum/${id}`),
      getSimilar: (id) => apiRequestWithRefresh(`/forum/${id}/similar`),
      createTopic: (data) => apiRequestWithRefresh('/forum', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
      updateTopic: (id, data) => apiRequestWithRefresh(`/forum/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      }),
      deleteTopic: (id) => apiRequestWithRefresh(`/forum/${id}`, {
        method: 'DELETE',
      }),
      createReply: (topicId, content) => apiRequestWithRefresh(`/forum/${topicId}/replies`, {
        method: 'POST',
        body: JSON.stringify({ content }),
      }),
      updateReply: (replyId, content) => apiRequestWithRefresh(`/forum/replies/${replyId}`, {
        method: 'PUT',
        body: JSON.stringify({ content }),
      }),
      deleteReply: (replyId) => apiRequestWithRefresh(`/forum/replies/${replyId}`, {
        method: 'DELETE',
      }),
      toggleTopicLike: (id) => apiRequestWithRefresh(`/forum/${id}/like`, {
        method: 'POST',
      }),
      toggleReplyLike: (replyId) => apiRequestWithRefresh(`/forum/replies/${replyId}/like`, {
        method: 'POST',
      }),
      toggleSolution: (topicId, replyId) => apiRequestWithRefresh(`/forum/${topicId}/solution/${replyId}`, {
        method: 'PUT',
      }),
      createReport: (data) => apiRequestWithRefresh('/forum/reports', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
      togglePin: (id) => apiRequestWithRefresh(`/forum/${id}/pin`, { method: 'PUT' }),
      toggleResolved: (id) => apiRequestWithRefresh(`/forum/${id}/resolve`, { method: 'PUT' }),
      toggleLock: (id) => apiRequestWithRefresh(`/forum/${id}/lock`, { method: 'PUT' }),
    },

    // Blog / Actualités
    blog: {
      getAll: (params = {}) => {
        const query = new URLSearchParams();
        if (params.page) query.set('page', params.page);
        if (params.limit) query.set('limit', params.limit);
        if (params.category) query.set('category', params.category);
        if (params.tag) query.set('tag', params.tag);
        if (params.search) query.set('search', params.search);
        if (params.sort) query.set('sort', params.sort);
        if (params.featured !== undefined) query.set('featured', String(params.featured));
        const qs = query.toString();
        return apiRequestWithRefresh(`/blog${qs ? `?${qs}` : ''}`);
      },
      getById: (id) => apiRequestWithRefresh(`/blog/${id}`),
      getBySlug: (slug) => apiRequestWithRefresh(`/blog/slug/${encodeURIComponent(slug)}`),
      getPopular: (limit = 4) => apiRequestWithRefresh(`/blog/popular?limit=${encodeURIComponent(limit)}`),
      getRelated: (id, limit) => apiRequestWithRefresh(`/blog/related/${id}?limit=${encodeURIComponent(limit || 4)}`),
      getCategories: () => apiRequestWithRefresh('/blog/categories'),
      toggleLike: (id) => apiRequestWithRefresh(`/blog/${id}/like`, { method: 'POST' }),
      create: (data) => apiRequestWithRefresh('/blog', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
      update: (id, data) => apiRequestWithRefresh(`/blog/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      }),
      delete: (id) => apiRequestWithRefresh(`/blog/${id}`, {
        method: 'DELETE',
      }),
      publish: (id) => apiRequestWithRefresh(`/blog/${id}/publish`, {
        method: 'POST',
      }),
      unpublish: (id) => apiRequestWithRefresh(`/blog/${id}/unpublish`, {
        method: 'POST',
      }),
    },

    // Paramètres publics et statut de la plateforme
    settings: {
      getPublic: () => apiRequest('/settings/public'),
      getPublicByKey: (key) => apiRequest(`/settings/public/${encodeURIComponent(key)}`),
    },

    // Utilitaires
    getToken,
    setToken,
    removeToken,
    isLoggedIn: () => !!getToken(),
  };
})();

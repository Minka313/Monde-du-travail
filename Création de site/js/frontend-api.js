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
    return localStorage.getItem('accessToken');
  }

  function setToken(token) {
    if (token) {
      localStorage.setItem('accessToken', token);
    } else {
      localStorage.removeItem('accessToken');
    }
  }

  function removeToken() {
    localStorage.removeItem('accessToken');
  }

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

    const startTime = performance.now();
    let status = null;
    let error = null;

    try {
      const response = await fetch(url, config);
      status = response.status;
      const data = await response.json();

      const duration = Math.round(performance.now() - startTime);
      NetLog.log(options.method || 'GET', endpoint, status, duration);

      if (!response.ok || !data.success) {
        throw new Error(data.message || `Erreur HTTP ${response.status}`);
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

    const startTime = performance.now();
    let status = null;
    let error = null;

    try {
      const response = await fetch(url, config);
      status = response.status;
      const data = await response.json();

      if (response.status === 401 && !options._retry && !endpoint.includes('/auth/')) {
        const newToken = await refreshToken();
        if (newToken) {
          return apiRequestWithRefresh(endpoint, { ...options, _retry: true });
        }
      }

      const duration = Math.round(performance.now() - startTime);
      NetLog.log(options.method || 'GET', endpoint, status, duration);

      if (!response.ok || !data.success) {
        throw new Error(data.message || `Erreur HTTP ${response.status}`);
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
    // Authentification
    auth: {
      register: (userData) => apiRequestWithRefresh('/auth/register', {
        method: 'POST',
        body: JSON.stringify(userData),
      }),
      login: (email, password) => apiRequestWithRefresh('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      }),
      logout: () => apiRequestWithRefresh('/auth/logout', { method: 'POST' }),
      me: () => apiRequestWithRefresh('/auth/me'),
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
      getAll: (category) => {
        const query = category ? `?category=${encodeURIComponent(category)}` : '';
        return apiRequestWithRefresh(`/jobs${query}`);
      },
      getById: (id) => apiRequestWithRefresh(`/jobs/${id}`),
    },

    // Formations
    formations: {
      getAll: () => apiRequestWithRefresh('/formations'),
      getById: (id) => apiRequestWithRefresh(`/formations/${id}`),
    },

    // Forum
    forum: {
      getAll: (params = {}) => {
        const query = new URLSearchParams();
        if (params.page) query.set('page', params.page);
        if (params.limit) query.set('limit', params.limit);
        if (params.category) query.set('category', params.category);
        if (params.search) query.set('search', params.search);
        if (params.status) query.set('status', params.status);
        if (params.sort) query.set('sort', params.sort);
        const qs = query.toString();
        return apiRequestWithRefresh(`/forum${qs ? `?${qs}` : ''}`);
      },
      getCategories: () => apiRequestWithRefresh('/forum/categories'),
      getById: (id) => apiRequestWithRefresh(`/forum/${id}`),
      createTopic: (data) => apiRequestWithRefresh('/forum', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
      createReply: (topicId, content) => apiRequestWithRefresh(`/forum/${topicId}/replies`, {
        method: 'POST',
        body: JSON.stringify({ content }),
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
        if (params.search) query.set('search', params.search);
        if (params.featured !== undefined) query.set('featured', String(params.featured));
        const qs = query.toString();
        return apiRequestWithRefresh(`/blog${qs ? `?${qs}` : ''}`);
      },
      getById: (id) => apiRequestWithRefresh(`/blog/${id}`),
      getBySlug: (slug) => apiRequestWithRefresh(`/blog/slug/${encodeURIComponent(slug)}`),
      getRelated: (id, limit) => apiRequestWithRefresh(`/blog/related/${id}?limit=${encodeURIComponent(limit || 4)}`),
      getCategories: () => apiRequestWithRefresh('/blog/categories'),
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

    // Utilitaires
    getToken,
    setToken,
    removeToken,
    isLoggedIn: () => !!getToken(),
  };
})();

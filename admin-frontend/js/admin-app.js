(function() {
  'use strict';

  // Chaque onglet de l'admin est strictement soumis à une permission RBAC.
  // La source de vérité est le backend : les permissions et rôles viennent de /auth/me.
  const MODULE_PERMISSIONS = {
    dashboard: 'dashboard.read',
    analytics: 'analytics.read',
    visiteurs: 'analytics.read',
    organization: 'organization.read',
    // Examen des rapports : Présidence (Ultra Admin) uniquement
    rapports: 'reports.review',
    // Mentorat : Présidence (Ultra Admin) uniquement ; les mentors utilisent leur Espace Mentor
    mentorat: 'mentoring.manage',
    formations: 'formation.read',
    metiers: 'metier.read',
    opportunites: 'opportunite.read',
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

    /**
     * Tant que la double authentification n'est pas activée, l'administration reste
     * fermée derrière une fenêtre d'activation (application d'authentification + code).
     */
    ensureTwoFactor: async function() {
      let enabled = true;
      try {
        const res = await window.AdminApi.twoFactor.getStatus();
        enabled = Boolean(res?.data?.enabled);
      } catch (_) {
        return; // service indisponible : on ne bloque pas l'accès
      }
      if (enabled) return;

      await new Promise((resolve) => {
        const esc = (v) => String(v == null ? '' : v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[c]));
        const overlay = document.createElement('div');
        overlay.id = 'force-2fa-overlay';
        overlay.style.cssText = 'position:fixed;inset:0;z-index:20000;background:rgba(9,27,46,0.92);display:flex;align-items:center;justify-content:center;padding:1rem;overflow-y:auto;';
        overlay.innerHTML = `
          <div role="dialog" aria-modal="true" aria-labelledby="f2fa-title" style="background:#fff;color:#0f172a;max-width:520px;width:100%;border-radius:16px;padding:1.75rem;box-shadow:0 25px 60px rgba(0,0,0,0.4);">
            <h2 id="f2fa-title" style="margin:0 0 0.5rem;font-size:1.3rem;">🔐 Sécurise ton accès à l'administration</h2>
            <p style="margin:0 0 1rem;color:#475569;line-height:1.55;font-size:0.95rem;">Pour protéger les données des membres, la <strong>double authentification</strong> est obligatoire pour toute l'équipe. À chaque connexion, un code à 6 chiffres te sera demandé en plus du mot de passe.</p>
            <ol style="margin:0 0 1rem;padding-left:1.2rem;color:#334155;line-height:1.6;font-size:0.92rem;">
              <li>Installe une application d'authentification gratuite sur ton téléphone : <strong>Google Authenticator</strong> ou <strong>Microsoft Authenticator</strong>.</li>
              <li>Clique sur « Commencer », puis scanne le QR code avec l'application.</li>
              <li>Saisis le code à 6 chiffres affiché dans l'application.</li>
            </ol>
            <div id="f2fa-step" style="text-align:center;"><button type="button" class="btn btn-primary" id="f2fa-start">Commencer</button></div>
            <p id="f2fa-error" role="alert" style="color:#b91c1c;font-size:0.88rem;min-height:1.2em;margin:0.75rem 0 0;"></p>
            <p style="margin:0.75rem 0 0;font-size:0.8rem;color:#64748b;text-align:center;">Tu n'as pas ton téléphone ? <button type="button" id="f2fa-logout" style="border:0;background:none;color:#0369a1;text-decoration:underline;cursor:pointer;font:inherit;">Se déconnecter</button></p>
          </div>`;
        document.body.appendChild(overlay);
        const step = overlay.querySelector('#f2fa-step');
        const error = overlay.querySelector('#f2fa-error');
        overlay.querySelector('#f2fa-logout').addEventListener('click', () => this.logout());

        const showCodeStep = (data) => {
          const secret = String(data.secret || '').match(/.{1,4}/g)?.join(' ') || '';
          step.innerHTML = `
            <img src="${esc(data.qrCodeUrl)}" alt="QR code de configuration" width="200" height="200" style="display:block;margin:0 auto 0.75rem;border:1px solid #e2e8f0;border-radius:8px;">
            <p style="margin:0 0 0.75rem;font-size:0.82rem;color:#64748b;">Pas de lecteur de QR code ? Saisis cette clé dans l'application :<br><code style="font-size:0.95rem;font-weight:700;letter-spacing:0.08em;user-select:all;">${esc(secret)}</code></p>
            <div style="display:flex;gap:0.5rem;justify-content:center;flex-wrap:wrap;">
              <input type="text" id="f2fa-code" inputmode="numeric" autocomplete="one-time-code" maxlength="6" placeholder="000000" aria-label="Code à 6 chiffres" style="width:150px;text-align:center;font-size:1.25rem;font-weight:700;letter-spacing:0.2em;padding:0.5rem;border:1.5px solid #cbd5e1;border-radius:8px;">
              <button type="button" class="btn btn-primary" id="f2fa-verify">Activer</button>
            </div>`;
          const input = step.querySelector('#f2fa-code');
          const verify = step.querySelector('#f2fa-verify');
          input.focus();
          const submit = async () => {
            const code = input.value.replace(/\s/g, '');
            if (!/^\d{6}$/.test(code)) { error.textContent = 'Saisis le code à 6 chiffres affiché dans l\'application.'; return; }
            verify.disabled = true;
            error.textContent = '';
            try {
              await window.AdminApi.twoFactor.verify(code);
              overlay.remove();
              resolve();
            } catch (e) {
              error.textContent = e.message || 'Code incorrect : vérifie l\'heure de ton téléphone et réessaie.';
              verify.disabled = false;
              input.select();
            }
          };
          verify.addEventListener('click', submit);
          input.addEventListener('keydown', (e) => { if (e.key === 'Enter') submit(); });
        };

        overlay.querySelector('#f2fa-start').addEventListener('click', async (e) => {
          e.target.disabled = true;
          error.textContent = '';
          try {
            const res = await window.AdminApi.twoFactor.setup();
            showCodeStep(res.data || {});
          } catch (err) {
            error.textContent = err.message || 'Impossible de préparer la double authentification. Réessaie.';
            e.target.disabled = false;
          }
        });
      });
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

        // Double authentification obligatoire pour toute l'équipe d'administration
        if (loading) loading.classList.add('hidden');
        await this.ensureTwoFactor();

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

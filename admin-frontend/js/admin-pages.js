(function () {
  'use strict';

  const ADMIN_MODULES = {
    dashboard: { label: 'Tableau de bord', icon: '📊' },
    vitrine: { label: 'Vitrine & Éditorial', icon: '🎨' },
    analytics: { label: 'Audience & Présence', icon: '📈' },
    organization: { label: 'Organisation & Fonctionnement', icon: '🏛️' },
    notifications: { label: 'Notifications Push', icon: '🔔' },
    formations: { label: 'Formations', icon: '📚' },
    metiers: { label: 'Métiers', icon: '💼' },
    blog: { label: 'Blog', icon: '📝' },
    forum: { label: 'Forum', icon: '💬' },
    users: { label: 'Utilisateurs', icon: '👥' },
    admins: { label: 'Administrateurs', icon: '🛡️' },
    approvals: { label: 'Approbations', icon: '✅' },
    logs: { label: 'Journal d\'activité', icon: '📋' },
    settings: { label: 'Paramètres', icon: '⚙️' },
  };

  function getAuthorizedModules(user) {
    return window.AdminApp?.getAuthorizedModules(user) || [];
  }

  const ROLE_DISPLAY_NAMES = {
    ULTRA_ADMIN: '👑 Ultra Admin',
    ADMIN_FORMATION: 'Admin Formations',
    ADMIN_METIER: 'Admin Métiers',
    ADMIN_BLOG: 'Admin Blog',
    ADMIN_FORUM: 'Admin Forum',
  };

  function formatUserRole(user) {
    if (user?.role === 'ULTRA_ADMIN') return '👑 Ultra Admin';
    const roles = user?.adminRoles || [];
    if (roles.length > 0) {
      return roles.map(r => ROLE_DISPLAY_NAMES[r] || r).join(', ');
    }
    return user?.role || '';
  }

  function closeMobileSidebar() {
    const sidebar = document.getElementById('admin-sidebar');
    if (sidebar) sidebar.classList.remove('open');
    document.body.classList.remove('admin-sidebar-open');
  }

  function openMobileSidebar() {
    const sidebar = document.getElementById('admin-sidebar');
    if (sidebar) sidebar.classList.add('open');
    document.body.classList.add('admin-sidebar-open');
  }

  function initMobileAdminSidebar() {
    const toggleBtn = document.getElementById('admin-sidebar-toggle');
    const closeBtn = document.getElementById('admin-sidebar-close');
    const backdrop = document.getElementById('admin-sidebar-backdrop');

    if (toggleBtn) {
      toggleBtn.onclick = (e) => {
        e.stopPropagation();
        openMobileSidebar();
      };
    }
    if (closeBtn) {
      closeBtn.onclick = (e) => {
        e.stopPropagation();
        closeMobileSidebar();
      };
    }
    if (backdrop) {
      backdrop.onclick = (e) => {
        e.stopPropagation();
        closeMobileSidebar();
      };
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMobileSidebar();
      }
    });
  }

  // ===== GESTION DU THÈME SOMBRE (DARK MODE) =====
  function initAdminTheme() {
    const savedTheme = localStorage.getItem('lmt_admin_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    const toggleBtn = document.getElementById('admin-theme-toggle');
    const sidebarToggleBtn = document.getElementById('admin-sidebar-theme-toggle');

    const handleThemeToggle = () => {
      const current = document.body.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      document.body.setAttribute('data-theme', next);
      localStorage.setItem('lmt_admin_theme', next);
      updateThemeIcon(next);
      showToast(next === 'dark' ? 'Mode sombre activé' : 'Mode clair activé', 'info');
    };

    if (toggleBtn && !toggleBtn.dataset.bound) {
      toggleBtn.dataset.bound = 'true';
      toggleBtn.addEventListener('click', handleThemeToggle);
    }

    if (sidebarToggleBtn && !sidebarToggleBtn.dataset.bound) {
      sidebarToggleBtn.dataset.bound = 'true';
      sidebarToggleBtn.addEventListener('click', handleThemeToggle);
    }
  }

  function updateThemeIcon(theme) {
    const icon = document.getElementById('theme-toggle-icon');
    if (icon) {
      icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
    const sidebarIcon = document.getElementById('sidebar-theme-toggle-icon');
    if (sidebarIcon) {
      sidebarIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
    const sidebarText = document.getElementById('sidebar-theme-toggle-text');
    if (sidebarText) {
      sidebarText.textContent = theme === 'dark' ? 'Mode Clair' : 'Mode Sombre';
    }
  }

  // Initialisation immédiate du thème
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAdminTheme);
  } else {
    initAdminTheme();
  }

  // ===== COMMAND PALETTE (CTRL + K / CMD + K) =====
  let cmdPaletteBound = false;
  function initCommandPalette() {
    if (cmdPaletteBound) return;
    cmdPaletteBound = true;

    const openPalette = () => {
      let overlay = document.getElementById('admin-cmd-palette');
      if (overlay) {
        overlay.remove();
        return;
      }

      overlay = document.createElement('div');
      overlay.id = 'admin-cmd-palette';
      overlay.className = 'cmd-palette-backdrop';
      overlay.innerHTML = `
        <div class="cmd-palette-modal">
          <input type="text" class="cmd-search-input" id="cmd-search" placeholder="Rechercher un module, une action rapide... (Échap pour quitter)" autofocus>
          <div class="cmd-results" id="cmd-results"></div>
        </div>
      `;
      document.body.appendChild(overlay);

      const input = overlay.querySelector('#cmd-search');
      const results = overlay.querySelector('#cmd-results');

      const actions = [
        { label: 'Tableau de bord', icon: '📊', shortcut: 'Naviguer', action: () => window.AdminRouter.navigate('dashboard') },
        { label: 'Vitrine & Éditorial (À la Une / Jalons)', icon: '🎨', shortcut: 'Naviguer', action: () => window.AdminRouter.navigate('vitrine') },
        { label: 'Métiers & Fiches', icon: '💼', shortcut: 'Naviguer', action: () => window.AdminRouter.navigate('metiers') },
        { label: 'Créer une nouvelle fiche Métier', icon: '➕', shortcut: 'Action', action: () => { window.AdminRouter.navigate('metiers'); setTimeout(() => openContentModal('jobs'), 300); } },
        { label: 'Formations & Programmes', icon: '📚', shortcut: 'Naviguer', action: () => window.AdminRouter.navigate('formations') },
        { label: 'Créer une nouvelle Formation', icon: '➕', shortcut: 'Action', action: () => { window.AdminRouter.navigate('formations'); setTimeout(() => openContentModal('formations'), 300); } },
        { label: 'Blog & Articles', icon: '📝', shortcut: 'Naviguer', action: () => window.AdminRouter.navigate('blog') },
        { label: 'Rédiger un article de blog', icon: '✍️', shortcut: 'Action', action: () => { window.AdminRouter.navigate('blog'); setTimeout(() => openBlogPostModal(), 300); } },
        { label: 'Approbations & Validations', icon: '✅', shortcut: 'Naviguer', action: () => window.AdminRouter.navigate('approvals') },
        { label: 'Audience & Présence des membres', icon: '📈', shortcut: 'Naviguer', action: () => window.AdminRouter.navigate('analytics') },
        { label: 'Gestion des Utilisateurs', icon: '👥', shortcut: 'Naviguer', action: () => window.AdminRouter.navigate('users') },
        { label: 'Organisation & Bureau', icon: '🏛️', shortcut: 'Naviguer', action: () => window.AdminRouter.navigate('organization') },
        { label: 'Notifications Push', icon: '🔔', shortcut: 'Naviguer', action: () => window.AdminRouter.navigate('notifications') },
        { label: 'Journal d\'activité (Logs)', icon: '📋', shortcut: 'Naviguer', action: () => window.AdminRouter.navigate('logs') },
        { label: 'Paramètres système & 2FA', icon: '⚙️', shortcut: 'Naviguer', action: () => window.AdminRouter.navigate('settings') },
        { label: 'Basculer Mode Sombre / Clair', icon: '🌓', shortcut: 'Thème', action: () => (document.getElementById('admin-theme-toggle') || document.getElementById('admin-sidebar-theme-toggle'))?.click() },
        { label: 'Voir le site public', icon: '🌐', shortcut: 'Lien', action: () => window.open('../frontend/index.html', '_blank') },
        { label: 'Déconnexion', icon: '🚪', shortcut: 'Compte', action: () => window.AdminApp?.logout() },
      ];

      const renderResults = (query = '') => {
        const q = query.toLowerCase().trim();
        const filtered = actions.filter(a => !q || a.label.toLowerCase().includes(q));
        if (filtered.length === 0) {
          results.innerHTML = '<div style="padding:1rem;color:var(--color-muted);text-align:center;">Aucun résultat trouvé</div>';
          return;
        }
        results.innerHTML = filtered.map((item, idx) => `
          <div class="cmd-item ${idx === 0 ? 'selected' : ''}" data-idx="${idx}">
            <div style="display:flex;align-items:center;gap:0.75rem;">
              <span style="font-size:1.15rem;">${item.icon}</span>
              <span style="font-weight:500;">${escapeHtml(item.label)}</span>
            </div>
            <span class="cmd-item-shortcut">${item.shortcut}</span>
          </div>
        `).join('');

        results.querySelectorAll('.cmd-item').forEach(el => {
          el.addEventListener('click', () => {
            const idx = parseInt(el.getAttribute('data-idx'), 10);
            overlay.remove();
            filtered[idx]?.action();
          });
        });
      };

      renderResults();
      input.focus();

      input.addEventListener('input', () => renderResults(input.value));

      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.remove();
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          overlay.remove();
        } else if (e.key === 'Enter') {
          const first = results.querySelector('.cmd-item');
          if (first) first.click();
        }
      });
    };

    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        openPalette();
      }
    });

    document.getElementById('admin-cmd-palette-btn')?.addEventListener('click', openPalette);
  }

  // ===== BADGES SIDEBAR =====
  let sidebarBadges = { approvals: 0, users: 0 };
  let badgesFetched = false;

  async function fetchSidebarBadges() {
    try {
      const [approvalsRes, membershipsRes] = await Promise.allSettled([
        window.AdminApi.approvals ? window.AdminApi.approvals.getPending() : Promise.resolve({ data: [] }),
        window.AdminApi.admin ? window.AdminApi.admin.getPendingMemberships() : Promise.resolve({ data: [] }),
      ]);
      const pendingApps = (approvalsRes.status === 'fulfilled' && Array.isArray(approvalsRes.value?.data)) ? approvalsRes.value.data.length : 0;
      const pendingMems = (membershipsRes.status === 'fulfilled' && Array.isArray(membershipsRes.value?.data)) ? membershipsRes.value.data.length : 0;

      sidebarBadges.approvals = pendingApps + pendingMems;
      sidebarBadges.users = pendingMems;
      badgesFetched = true;
      updateSidebarBadgesDOM();
    } catch (_) {}
  }

  function updateSidebarBadgesDOM() {
    const nav = document.getElementById('admin-nav');
    if (!nav) return;
    const approvalBtn = nav.querySelector('[data-module="approvals"]');
    if (approvalBtn) {
      let badge = approvalBtn.querySelector('.nav-badge');
      if (sidebarBadges.approvals > 0) {
        if (!badge) {
          badge = document.createElement('span');
          badge.className = 'nav-badge';
          approvalBtn.appendChild(badge);
        }
        badge.textContent = sidebarBadges.approvals;
      } else if (badge) {
        badge.remove();
      }
    }

    const usersBtn = nav.querySelector('[data-module="users"]');
    if (usersBtn) {
      let badge = usersBtn.querySelector('.nav-badge');
      if (sidebarBadges.users > 0) {
        if (!badge) {
          badge = document.createElement('span');
          badge.className = 'nav-badge badge-blue';
          usersBtn.appendChild(badge);
        }
        badge.textContent = sidebarBadges.users;
      } else if (badge) {
        badge.remove();
      }
    }
  }

  // ===== EXPORT CSV GÉNÉRIQUE =====
  function exportTableToCsv(filename, headers, rows) {
    const escapeCsv = (str) => {
      const val = str == null ? '' : String(str).replace(/"/g, '""');
      return `"${val}"`;
    };

    let csvContent = '\uFEFF'; // BOM pour UTF-8 Excel
    csvContent += headers.map(escapeCsv).join(';') + '\r\n';

    rows.forEach(row => {
      csvContent += row.map(escapeCsv).join(';') + '\r\n';
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast(`Export CSV téléchargé : ${filename}`, 'success');
  }

  function buildSidebar(currentModule, authorizedModules) {
    const nav = document.getElementById('admin-nav');
    if (!nav) return;

    initMobileAdminSidebar();
    initAdminTheme();
    initCommandPalette();

    nav.innerHTML = '';

    Object.entries(ADMIN_MODULES).forEach(([key, mod]) => {
      if (!authorizedModules.includes(key)) return;

      const btn = document.createElement('button');
      btn.className = 'nav-item' + (key === currentModule ? ' active' : '');
      btn.setAttribute('data-module', key);
      btn.innerHTML = `<span>${mod.icon}</span> <span>${mod.label}</span>`;
      btn.addEventListener('click', () => {
        closeMobileSidebar();
        window.AdminRouter.navigate(key);
      });
      nav.appendChild(btn);
    });

    updateSidebarBadgesDOM();
    if (!badgesFetched) {
      fetchSidebarBadges();
    }
  }

  // ===== OPTIMISATIONS HAUTE PERFORMANCE & UX RÉACTIVE =====
  let activeModule = null;
  let analyticsRefreshTimer = null;

  function syncAnalyticsRefresh(module) {
    if (analyticsRefreshTimer) {
      clearInterval(analyticsRefreshTimer);
      analyticsRefreshTimer = null;
    }
    if (module === 'analytics') {
      analyticsRefreshTimer = setInterval(() => {
        if (activeModule === 'analytics' && document.visibilityState === 'visible') {
          loadPage('analytics', true);
        }
      }, 15000);
    }
  }

  function showTopLoader() {
    let loader = document.getElementById('admin-top-progress');
    if (!loader) {
      loader = document.createElement('div');
      loader.id = 'admin-top-progress';
      document.body.appendChild(loader);
    }
    loader.classList.add('active');
  }

  function hideTopLoader() {
    const loader = document.getElementById('admin-top-progress');
    if (loader) loader.classList.remove('active');
  }

  function renderSkeleton() {
    return `
      <div style="animation: dossierFadeIn 0.2s ease; padding: 0.5rem 0;">
        <div class="skeleton-grid">
          <div class="skeleton-shimmer skeleton-card"></div>
          <div class="skeleton-shimmer skeleton-card"></div>
          <div class="skeleton-shimmer skeleton-card"></div>
          <div class="skeleton-shimmer skeleton-card"></div>
        </div>
        <div class="skeleton-shimmer skeleton-table-card"></div>
      </div>
    `;
  }

  function applyOptimisticMembershipDecision(membershipId, statusText, badgeClass) {
    // 1. Mise à jour visuelle instantanée des lignes du tableau (Dashboard & Approbations)
    const approveButtons = document.querySelectorAll(`[data-approve-membership="${membershipId}"], [data-approve-membership-approval="${membershipId}"]`);
    approveButtons.forEach(btn => {
      const row = btn.closest('tr');
      if (row) {
        row.style.transition = 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)';
        row.style.background = badgeClass === 'badge-success' ? 'rgba(16, 185, 129, 0.12)' : 'rgba(239, 68, 68, 0.12)';
        const actionCell = row.querySelector('td:last-child');
        if (actionCell) {
          actionCell.innerHTML = `<span class="badge ${badgeClass}" style="animation:dossierFadeIn 0.2s ease;font-weight:600;">${statusText}</span>`;
        }
        // Disparition en douceur de la ligne traitée après 1.2s
        setTimeout(() => {
          row.style.opacity = '0';
          row.style.transform = 'translateX(20px)';
          setTimeout(() => {
            const tableBody = row.parentElement;
            row.remove();
            if (tableBody && tableBody.children.length === 0) {
              const table = tableBody.closest('table');
              if (table) {
                const emptyBox = document.createElement('div');
                emptyBox.className = 'empty-state';
                emptyBox.style.padding = '2.5rem 1rem';
                emptyBox.innerHTML = '<div style="font-size:2rem;margin-bottom:0.5rem;">🎉</div><p><strong>Toutes les adhésions sont traitées !</strong></p>';
                table.replaceWith(emptyBox);
              }
            }
          }, 300);
        }, 1200);
      }
    });

    // 2. Décrémentation instantanée des compteurs dans les badges
    document.querySelectorAll('.approval-tab-btn[data-approval-filter="memberships"] .badge, #approval-section-memberships .badge, .dash-kpi-card[data-dash-navigate="approvals"] .dash-kpi-value').forEach(el => {
      const current = parseInt(el.textContent, 10);
      if (!isNaN(current) && current > 0) {
        el.textContent = Math.max(0, current - 1);
      }
    });

    // 3. Mise à jour immédiate à l'intérieur du dossier candidat si ouvert
    const dossierApproveBtn = document.getElementById('dossier-act-approve-membership');
    if (dossierApproveBtn && dossierApproveBtn.getAttribute('data-membership-id') === membershipId) {
      const parent = dossierApproveBtn.parentElement;
      if (parent) {
        parent.innerHTML = `<span class="badge ${badgeClass}" style="padding:0.5rem 1rem;font-size:0.9rem;animation:dossierFadeIn 0.2s ease;">${statusText}</span>`;
      }
    }
  }

  async function loadPage(module, isSoftRefresh = false) {
    const content = document.getElementById('admin-content');
    const title = document.getElementById('admin-page-title');
    if (!content) return;

    if (title) title.textContent = ADMIN_MODULES[module]?.label || 'Administration';

    // Afficher la barre de chargement discrète sans écran blanc
    showTopLoader();

    // Si changement de module froid, afficher un skeleton moderne
    if (!isSoftRefresh && activeModule !== module) {
      if (!content.children.length || content.querySelector('.empty-state')) {
        content.innerHTML = renderSkeleton();
      } else {
        content.style.opacity = '0.65';
        content.style.pointerEvents = 'none';
        content.style.transition = 'opacity 0.15s ease';
      }
    }

    try {
      let html = '';
      switch (module) {
        case 'dashboard':
          html = await loadDashboard();
          break;
        case 'analytics':
          html = await loadAnalytics();
          break;
        case 'organization':
          html = await loadOrganization();
          break;
        case 'notifications':
          html = await loadNotifications();
          break;
        case 'formations':
          html = await loadFormations();
          break;
        case 'metiers':
          html = await loadMetiers();
          break;
        case 'blog':
          html = await loadBlog();
          break;
        case 'forum':
          html = await loadForum();
          break;
        case 'users':
          html = await loadUsers();
          break;
        case 'admins':
          html = await loadAdmins();
          break;
        case 'approvals':
          html = await loadApprovals();
          break;
        case 'logs':
          html = await loadLogs();
          break;
        case 'settings':
          html = await loadSettings();
          break;
        case 'vitrine':
          html = await loadVitrine();
          break;
        default:
          html = '<div class="empty-state">Module en cours de développement</div>';
      }
      content.style.opacity = '1';
      content.style.pointerEvents = '';
      content.innerHTML = html;
      bindPageEvents(module);
      activeModule = module;
      syncAnalyticsRefresh(module);
    } catch (error) {
      content.style.opacity = '1';
      content.style.pointerEvents = '';
      content.innerHTML = `<div class="empty-state">${escapeHtml(error.message)}</div>`;
    } finally {
      hideTopLoader();
    }
  }

  async function loadDashboard() {
    // Récupération consolidée et optimisée (4 requêtes ciblées au lieu de 7)
    const safely = (promise, fallback = null) => promise.catch(() => fallback);
    const [superStatsRes, pendingMembershipsRes, activitiesRes, mentorsRes] = await Promise.all([
      safely(window.AdminApi.superDashboard?.getStats()),
      safely(window.AdminApi.admin.getPendingMemberships()),
      safely(window.AdminApi.superDashboard?.getActivities(8)),
      safely(window.AdminApi.rbac?.getMentors()),
    ]);

    const user = window.AdminApp.currentUser;
    const isUltraAdmin = user?.role === 'ULTRA_ADMIN';
    const canApproveMemberships = window.AdminApp.hasPermission(user, 'membership.approve');

    if (isUltraAdmin && !superStatsRes?.data) {
      throw new Error('Les statistiques du tableau de bord sont momentanément indisponibles.');
    }

    const superData = superStatsRes?.data || {};

    const activeMembers = superData.activeUsers ?? 0;
    const totalUsers = superData.totalUsers ?? activeMembers;
    const publishedFormations = superData.publishedFormations ?? 0;
    const draftFormations = superData.draftFormations ?? 0;
    const publishedJobs = superData.publishedJobs ?? 0;
    const draftJobs = superData.draftJobs ?? 0;
    const publishedPosts = superData.publishedPosts ?? 0;
    const draftPosts = superData.draftPosts ?? 0;
    const totalTopics = superData.totalTopics ?? 0;
    const totalAdmins = superData.totalAdmins ?? 0;
    const pendingAdminsCount = superData.pendingAdmins ?? 0;
    const pendingApprovalsCount = superData.pendingApprovals ?? 0;
    const isMaintenance = superData.isMaintenance === true;

    const mentors = mentorsRes?.data || [];
    const totalMentors = superData.totalMentors ?? mentors.length;

    const memberships = pendingMembershipsRes?.data || [];
    const totalApprovalsCount = pendingApprovalsCount + memberships.length;
    // Les alertes sont désormais incluses directement dans getStats()
    const alerts = superData.alerts || [];
    const activities = activitiesRes?.data || [];

    const visitorStats = superData.visitorStats || {};
    const mostActiveUsers = superData.mostActiveUsers || [];
    const summaryVisits = visitorStats.summary || {};
    const uniqueVisitorsToday = summaryVisits.today?.uniqueVisitors ?? 0;
    const visitsToday = summaryVisits.today?.visits ?? 0;
    const uniqueVisitorsWeek = summaryVisits.week?.uniqueVisitors ?? 0;
    const visitsWeek = summaryVisits.week?.visits ?? 0;
    const totalAllTimeVisits = summaryVisits.allTime?.totalVisits ?? visitsWeek;
    const topPages = visitorStats.topPages || [];
    const dailyTrend = visitorStats.dailyTrend || [];
    const devices = visitorStats.devices || { desktop: 0, mobile: 0 };

    const activityIcons = {
      AUTH: '🔐',
      MEMBERSHIP: '📋',
      FORMATION: '📚',
      JOB: '💼',
      BLOG: '📝',
      FORUM: '💬',
      USER: '👥',
      ADMIN: '🛡️',
      SETTINGS: '⚙️',
      APPROVAL: '✅',
    };

    return `
      <div class="dash-container">
        <!-- Hero Header Ultra Admin -->
        <div class="dash-hero">
          <div class="dash-hero-info">
            <h2>Bonjour, ${escapeHtml(user?.firstName || 'Administrateur')} 👋</h2>
            <p>Supervision globale, gouvernance et pilotage opérationnel en temps réel.</p>
          </div>
          <div class="dash-hero-actions">
            <span class="dash-status-pill ${isMaintenance ? 'status-maintenance' : 'status-online'}" id="dash-status-indicator">
              ${isMaintenance ? '🔴 Mode Maintenance Actif' : '🟢 Plateforme Opérationnelle'}
            </span>
            <span class="badge badge-primary" style="padding:0.45rem 0.85rem;font-size:0.82rem;">
              ${escapeHtml(formatUserRole(user))}
            </span>
            ${isUltraAdmin ? `
              <button class="btn btn-sm" id="dash-toggle-maint" style="background:${isMaintenance ? '#16a34a' : 'rgba(255,255,255,0.15)'};color:#ffffff;border:none;cursor:pointer;">
                ${isMaintenance ? 'Désactiver Maintenance' : 'Basculer Maintenance'}
              </button>
            ` : ''}
            <button class="btn btn-sm" id="dash-refresh-btn" style="background:rgba(255,255,255,0.15);color:#ffffff;border:none;cursor:pointer;" title="Rafraîchir les métriques">
              🔄 Actualiser
            </button>
          </div>
        </div>

        <!-- Actions Rapides Opérationnelles (100% Cliquables) -->
        <div class="dash-quick-section">
          <div class="dash-quick-title">⚡ Actions Rapides Opérationnelles</div>
          <div class="dash-quick-bar">
            <button class="dash-quick-btn btn-accent" id="dash-btn-new-formation">
              <span>📚</span> <span>+ Nouvelle Formation</span>
            </button>
            <button class="dash-quick-btn btn-accent" id="dash-btn-new-job">
              <span>💼</span> <span>+ Nouveau Métier</span>
            </button>
            <button class="dash-quick-btn btn-accent" id="dash-btn-new-post">
              <span>📝</span> <span>+ Rédiger Article</span>
            </button>
            <button class="dash-quick-btn btn-accent" id="dash-btn-nominate-mentor">
              <span>🎓</span> <span>+ Nommer un Mentor</span>
            </button>
            <button class="dash-quick-btn" id="dash-btn-goto-admins">
              <span>🛡️</span> <span>Gérer Admins & Droits</span>
            </button>
            <button class="dash-quick-btn" id="dash-btn-goto-logs">
              <span>📋</span> <span>Journal d'Audit</span>
            </button>
            <button class="dash-quick-btn" id="dash-btn-goto-settings">
              <span>⚙️</span> <span>Paramètres Système</span>
            </button>
          </div>
        </div>

        <!-- Alertes Opérationnelles (si présentes) -->
        ${alerts.length > 0 ? `
          <div class="dash-alerts-container">
            ${alerts.map(a => `
              <div class="dash-alert dash-alert-${a.type || 'info'}">
                <div style="display:flex;align-items:center;gap:0.6rem;">
                  <span style="font-size:1.1rem;">${a.type === 'danger' ? '🚨' : a.type === 'warning' ? '⚠️' : 'ℹ️'}</span>
                  <div>
                    <strong>${escapeHtml(a.title)}</strong> : ${escapeHtml(a.message)}
                  </div>
                </div>
                ${a.targetModule ? `
                  <button class="btn btn-sm ${a.type === 'danger' ? 'btn-danger' : a.type === 'warning' ? 'btn-warning' : 'btn-primary'}" data-dash-navigate="${a.targetModule}">
                    Traiter maintenant →
                  </button>
                ` : ''}
              </div>
            `).join('')}
          </div>
        ` : ''}

        <!-- Grille des KPIs Stratégiques (100% Cliquables vers les modules) -->
        <div class="dash-kpi-grid">
          <div class="dash-kpi-card" data-dash-navigate="analytics" title="Consulter les statistiques d'audience et de visiteurs">
            <div class="dash-kpi-header">
              <span class="dash-kpi-label"><span class="dash-kpi-icon">👁️</span> Visiteurs du Site</span>
              <span class="dash-kpi-arrow">→</span>
            </div>
            <div class="dash-kpi-value">${uniqueVisitorsToday} <span style="font-size:0.92rem;font-weight:500;color:var(--color-muted);">uniques auj.</span></div>
            <div class="dash-kpi-footer">
              <span>${uniqueVisitorsWeek} uniques / 7j • ${totalAllTimeVisits} vues</span>
              <span class="badge badge-accent">Audience</span>
            </div>
          </div>

          <div class="dash-kpi-card" data-dash-action="scroll-presence" title="Voir les membres les plus présents">
            <div class="dash-kpi-header">
              <span class="dash-kpi-label"><span class="dash-kpi-icon">👥</span> Membres & Présence</span>
              <span class="dash-kpi-arrow">↓</span>
            </div>
            <div class="dash-kpi-value">${activeMembers} <span style="font-size:0.92rem;font-weight:500;color:var(--color-muted);">actifs</span></div>
            <div class="dash-kpi-footer">
              <span>Top présent : ${escapeHtml(mostActiveUsers[0]?.fullName || '—')}</span>
              <span class="badge badge-success">Présence</span>
            </div>
          </div>

          <div class="dash-kpi-card" data-dash-action="scroll-memberships" title="Examiner les demandes d'adhésion">
            <div class="dash-kpi-header">
              <span class="dash-kpi-label"><span class="dash-kpi-icon">📋</span> Adhésions en attente</span>
              <span class="dash-kpi-arrow">↓</span>
            </div>
            <div class="dash-kpi-value">${memberships.length}</div>
            <div class="dash-kpi-footer">
              <span>Candidatures à valider</span>
              <span class="badge ${memberships.length > 0 ? 'badge-warning' : 'badge-muted'}">${memberships.length > 0 ? 'Action requise' : 'À jour'}</span>
            </div>
          </div>

          <div class="dash-kpi-card" data-dash-navigate="formations" title="Gérer le catalogue de formations">
            <div class="dash-kpi-header">
              <span class="dash-kpi-label"><span class="dash-kpi-icon">📚</span> Formations Actives</span>
              <span class="dash-kpi-arrow">→</span>
            </div>
            <div class="dash-kpi-value">${publishedFormations}</div>
            <div class="dash-kpi-footer">
              <span>${draftFormations} formation(s) en brouillon</span>
              <span class="badge badge-primary">Catalogue</span>
            </div>
          </div>

          <div class="dash-kpi-card" data-dash-navigate="metiers" title="Gérer les fiches métiers et débouchés">
            <div class="dash-kpi-header">
              <span class="dash-kpi-label"><span class="dash-kpi-icon">💼</span> Fiches Métiers</span>
              <span class="dash-kpi-arrow">→</span>
            </div>
            <div class="dash-kpi-value">${publishedJobs}</div>
            <div class="dash-kpi-footer">
              <span>${draftJobs} en cours de rédaction</span>
              <span class="badge badge-primary">Orientation</span>
            </div>
          </div>

          <div class="dash-kpi-card" data-dash-navigate="blog" title="Gérer les publications du blog">
            <div class="dash-kpi-header">
              <span class="dash-kpi-label"><span class="dash-kpi-icon">📝</span> Articles de Blog</span>
              <span class="dash-kpi-arrow">→</span>
            </div>
            <div class="dash-kpi-value">${publishedPosts}</div>
            <div class="dash-kpi-footer">
              <span>${draftPosts} brouillon(s) à relire</span>
              <span class="badge badge-primary">Éditorial</span>
            </div>
          </div>

          <div class="dash-kpi-card" data-dash-navigate="forum" title="Modérer et animer les discussions">
            <div class="dash-kpi-header">
              <span class="dash-kpi-label"><span class="dash-kpi-icon">💬</span> Forum & Entraide</span>
              <span class="dash-kpi-arrow">→</span>
            </div>
            <div class="dash-kpi-value">${totalTopics}</div>
            <div class="dash-kpi-footer">
              <span>Sujets ouverts & résolus</span>
              <span class="badge badge-success">Communauté</span>
            </div>
          </div>

          <div class="dash-kpi-card" data-dash-navigate="admins" title="Gérer les administrateurs et rôles RBAC">
            <div class="dash-kpi-header">
              <span class="dash-kpi-label"><span class="dash-kpi-icon">🛡️</span> Administrateurs</span>
              <span class="dash-kpi-arrow">→</span>
            </div>
            <div class="dash-kpi-value">${totalAdmins}</div>
            <div class="dash-kpi-footer">
              <span>${pendingAdminsCount} demande(s) de rôle</span>
              <span class="badge ${pendingAdminsCount > 0 ? 'badge-warning' : 'badge-muted'}">Gouvernance</span>
            </div>
          </div>

          <div class="dash-kpi-card" data-dash-navigate="approvals" title="Consulter le centre d'approbations (adhésions et workflows)">
            <div class="dash-kpi-header">
              <span class="dash-kpi-label"><span class="dash-kpi-icon">✅</span> Approbations</span>
              <span class="dash-kpi-arrow">→</span>
            </div>
            <div class="dash-kpi-value">${totalApprovalsCount}</div>
            <div class="dash-kpi-footer">
              <span>${memberships.length} adhésion(s) • ${pendingApprovalsCount} workflow(s)</span>
              <span class="badge ${totalApprovalsCount > 0 ? 'badge-warning' : 'badge-muted'}">À traiter</span>
            </div>
          </div>

          <div class="dash-kpi-card" data-dash-action="scroll-mentors" title="Consulter le collège des Mentors & Experts">
            <div class="dash-kpi-header">
              <span class="dash-kpi-label"><span class="dash-kpi-icon">🎓</span> Mentors & Experts</span>
              <span class="dash-kpi-arrow">↓</span>
            </div>
            <div class="dash-kpi-value">${totalMentors}</div>
            <div class="dash-kpi-footer">
              <span>${mentors.length} mentor(s) actif(s)</span>
              <span class="badge badge-accent">Partenaires</span>
            </div>
          </div>
        </div>

        <!-- Section Spéciale : Audience & Fréquentation du Site -->
        <div class="card" id="dash-analytics-section" style="margin-bottom: 1.5rem;">
          <div class="card-header" style="flex-wrap: wrap; gap: 0.75rem;">
            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <h2>📈 Fréquentation du Site & Visiteurs</h2>
              <span class="badge badge-accent">${uniqueVisitorsToday} visiteurs uniques aujourd'hui</span>
            </div>
            <button class="btn btn-sm btn-ghost" data-dash-navigate="analytics">
              Voir l'analyse détaillée →
            </button>
          </div>

          <!-- 4 Cartes Synthétiques d'Audience -->
          <div class="analytics-metrics-grid">
            <div class="analytics-stat-box">
              <span class="analytics-stat-label">Aujourd'hui</span>
              <div class="analytics-stat-val">${uniqueVisitorsToday} <span class="analytics-stat-unit">visiteurs uniques</span></div>
              <div class="analytics-stat-sub">${visitsToday} pages vues au total</div>
            </div>
            <div class="analytics-stat-box">
              <span class="analytics-stat-label">7 Derniers Jours</span>
              <div class="analytics-stat-val">${uniqueVisitorsWeek} <span class="analytics-stat-unit">visiteurs uniques</span></div>
              <div class="analytics-stat-sub">${visitsWeek} pages vues cumulées</div>
            </div>
            <div class="analytics-stat-box">
              <span class="analytics-stat-label">30 Derniers Jours</span>
              <div class="analytics-stat-val">${summaryVisits.month?.uniqueVisitors ?? 0} <span class="analytics-stat-unit">visiteurs uniques</span></div>
              <div class="analytics-stat-sub">${summaryVisits.month?.visits ?? 0} pages vues</div>
            </div>
            <div class="analytics-stat-box">
              <span class="analytics-stat-label">Total Historique</span>
              <div class="analytics-stat-val">${summaryVisits.allTime?.totalVisits ?? totalAllTimeVisits} <span class="analytics-stat-unit">visites</span></div>
              <div class="analytics-stat-sub">${summaryVisits.allTime?.totalLoginSessions ?? 0} sessions de connexion</div>
            </div>
          </div>

          <!-- Double Colonne : Évolution 7 Jours & Pages les plus Vues -->
          <div class="analytics-split-row">
            <div class="analytics-chart-col">
              <div class="analytics-subtitle">📅 Évolution des visites sur 7 jours</div>
              <div class="analytics-daily-bars">
                ${dailyTrend.map(d => {
                  const maxV = Math.max(...dailyTrend.map(b => b.visits), 1);
                  const heightPercent = Math.max(8, Math.round((d.visits / maxV) * 100));
                  return `
                    <div class="analytics-bar-item" title="${d.label}: ${d.visits} visites (${d.uniqueVisitors} uniques)">
                      <div class="analytics-bar-val">${d.visits}</div>
                      <div class="analytics-bar-track">
                        <div class="analytics-bar-fill" style="height: ${heightPercent}%;"></div>
                      </div>
                      <div class="analytics-bar-label">${d.label.split(' ')[0]}</div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <div class="analytics-pages-col">
              <div class="analytics-subtitle">📑 Pages les plus consultées</div>
              ${topPages.length === 0 ? '<div class="empty-state">Données en cours de collecte...</div>' : `
                <div class="analytics-pages-list">
                  ${topPages.slice(0, 5).map(p => `
                    <div class="analytics-page-row">
                      <div class="analytics-page-info">
                        <span class="analytics-page-title">${escapeHtml(p.label)}</span>
                        <span class="analytics-page-path">${escapeHtml(p.path)}</span>
                      </div>
                      <div class="analytics-page-count">
                        <strong>${p.views}</strong> vues
                        <span class="badge badge-sm badge-muted">${p.percentage}%</span>
                      </div>
                    </div>
                    <div class="analytics-page-progress-bg">
                      <div class="analytics-page-progress-bar" style="width: ${Math.max(5, p.percentage)}%;"></div>
                    </div>
                  `).join('')}
                </div>
              `}
              <div class="analytics-devices-badge-row">
                <span>💻 Ordinateur : <strong>${devices.desktop || 0}</strong></span>
                <span>📱 Mobile : <strong>${devices.mobile || 0}</strong></span>
                <span>📟 Tablette : <strong>${devices.tablet || 0}</strong></span>
              </div>
            </div>
          </div>
        </div>

        <!-- Section Spéciale : Personnes les Plus Présentes & Actives -->
        <div class="card" id="dash-presence-section" style="margin-bottom: 1.5rem;">
          <div class="card-header" style="flex-wrap: wrap; gap: 0.75rem;">
            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <h2>🏆 Personnes les Plus Présentes & Actives</h2>
              <span class="badge badge-success">Temps Réel</span>
            </div>
            <button class="btn btn-sm btn-ghost" data-dash-navigate="analytics">
              Voir le classement complet →
            </button>
          </div>
          <p style="color: var(--color-muted); font-size: 0.9rem; margin-bottom: 1rem;">
            Classement direct mesurant l'assiduité, la récence de présence et l'activité des adhérents et administrateurs du club.
          </p>

          ${mostActiveUsers.length === 0 ? `
            <div class="empty-state">Aucun membre enregistré pour le moment.</div>
          ` : `
            <div class="table-wrapper">
              <table class="presence-table">
                <thead>
                  <tr>
                    <th style="width: 50px;">Rang</th>
                    <th>Membre</th>
                    <th>Rôle</th>
                    <th>Statut en Direct</th>
                    <th>Dernière Présence</th>
                    <th>Contributions</th>
                    <th style="text-align: right;">Action</th>
                  </tr>
                </thead>
                <tbody>
                  ${mostActiveUsers.slice(0, 6).map(u => {
                    const lastLoginText = u.lastLoginAt ? new Date(u.lastLoginAt).toLocaleString('fr-FR', {
                      day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit'
                    }) : 'Jamais connecté';
                    return `
                      <tr>
                        <td>
                          <span class="presence-medal">${u.medal}</span>
                        </td>
                        <td>
                          <div style="display: flex; align-items: center; gap: 0.75rem;">
                            <div class="presence-avatar">${escapeHtml(u.initials)}</div>
                            <div>
                              <div style="font-weight: 700; color: var(--color-text); font-size: 0.95rem;">
                                ${escapeHtml(u.fullName)}
                              </div>
                              <div style="font-size: 0.8rem; color: var(--color-muted);">${escapeHtml(u.email)}</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span class="badge ${u.role === 'ULTRA_ADMIN' ? 'badge-primary' : u.role === 'ADMIN' ? 'badge-info' : 'badge-muted'}">
                            ${escapeHtml(u.displayRole)}
                          </span>
                        </td>
                        <td>
                          <span class="presence-status-pill status-${u.presenceStatus.toLowerCase()}">
                            <span class="presence-dot"></span>
                            ${escapeHtml(u.presenceLabel)}
                          </span>
                        </td>
                        <td style="font-size: 0.88rem;">
                          ${lastLoginText}
                        </td>
                        <td>
                          <div style="display: flex; gap: 0.5rem; font-size: 0.85rem;">
                            <span title="Actions / Connexions">⚡ ${u.actionsCount}</span>
                            <span title="Sujets créés">💬 ${u.forumTopics}</span>
                            <span title="Réponses postées">✍️ ${u.forumReplies}</span>
                          </div>
                        </td>
                        <td style="text-align: right;">
                          <button class="btn btn-ghost btn-sm" data-view-dossier="${escapeHtml(u.id)}" title="Consulter le dossier membre">
                            📁 Dossier
                          </button>
                        </td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          `}
        </div>

        <!-- Section Split : Adhésions Récentes & Flux d'Activité Récente -->
        <div class="dash-split-grid">
          <!-- Colonne Gauche : Table des Demandes d'Adhésion -->
          <div class="card" id="dash-memberships-section">
            <div class="card-header">
              <h2>Demandes d'adhésion</h2>
              <span class="badge ${memberships.length > 0 ? 'badge-warning' : 'badge-muted'}">${memberships.length} en attente</span>
            </div>
            ${memberships.length === 0
              ? '<div class="empty-state">Aucune demande en attente — toutes les candidatures sont traitées 🎉</div>'
              : canApproveMemberships || memberships.length === 0
                ? `<div class="table-wrapper">
                     <table>
                       <thead><tr><th>Candidat</th><th>Email</th><th>Motivation</th><th>Date</th><th>Actions</th></tr></thead>
                       <tbody>
                         ${memberships.map(m => `
                           <tr>
                             <td><strong>${escapeHtml(m.user?.firstName || '')} ${escapeHtml(m.user?.lastName || '')}</strong></td>
                             <td>${escapeHtml(m.user?.email || '')}</td>
                             <td style="max-width:260px;">${escapeHtml((m.motivation || '—').slice(0, 110))}${(m.motivation || '').length > 110 ? '…' : ''}</td>
                             <td>${new Date(m.createdAt).toLocaleDateString('fr-FR')}</td>
                             <td>
                               <div style="display:flex;gap:0.35rem;align-items:center;">
                                 <button class="btn btn-ghost btn-sm" data-view-dossier="${m.user?.id || m.userId}" title="Consulter le dossier candidat">📁 Dossier</button>
                                 ${canApproveMemberships ? `
                                   <button class="btn btn-success btn-sm" data-approve-membership="${m.id}" data-candidate-name="${escapeHtml(((m.user?.firstName || '') + ' ' + (m.user?.lastName || '')).trim() || 'le candidat')}">Approuver</button>
                                   <button class="btn btn-danger btn-sm" data-reject-membership="${m.id}" data-candidate-name="${escapeHtml(((m.user?.firstName || '') + ' ' + (m.user?.lastName || '')).trim() || 'le candidat')}">Refuser</button>
                                 ` : '<span class="text-muted">Lecture seule</span>'}
                               </div>
                             </td>
                           </tr>
                         `).join('')}
                       </tbody>
                     </table>
                   </div>`
                : '<div class="empty-state">Consultation réservée</div>'}
          </div>

          <!-- Colonne Droite : Flux d'Activité et Audit de Sécurité -->
          <div class="card" id="dash-activity-section">
            <div class="card-header">
              <h2>Activité Récente & Sécurité</h2>
              <span class="badge badge-muted">${activities.length} événements</span>
            </div>
            ${activities.length === 0
              ? '<div class="empty-state">Aucune activité récente enregistrée</div>'
              : `<div class="dash-activity-list">
                   ${activities.map(act => {
                     const icon = activityIcons[act.module] || '📋';
                     const userName = act.user ? `${escapeHtml(act.user.firstName || '')} ${escapeHtml(act.user.lastName || '')}`.trim() : 'Système';
                     const timeStr = new Date(act.createdAt).toLocaleString('fr-FR', {
                       day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit'
                     });
                     return `
                       <div class="dash-activity-item">
                         <span class="dash-activity-icon">${icon}</span>
                         <div class="dash-activity-details">
                           <div class="dash-activity-action">${escapeHtml(act.action)}</div>
                           <div class="dash-activity-meta">
                             Par <strong>${userName}</strong> • ${timeStr} • <span class="badge badge-sm ${act.result === 'SUCCESS' ? 'badge-success' : 'badge-danger'}">${escapeHtml(act.result)}</span>
                           </div>
                         </div>
                       </div>
                     `;
                   }).join('')}
                 </div>
                 <div style="margin-top:1.25rem;">
                   <button class="btn btn-ghost btn-sm" id="dash-view-all-logs" style="width:100%;text-align:center;justify-content:center;">
                     Consulter le journal d'audit complet →
                   </button>
                 </div>`
            }
          </div>
        </div>

        <!-- Section Spéciale : Collège des Mentors & Experts d'Industrie -->
        <div class="card" id="dash-mentors-section" style="margin-top: 1.5rem;">
          <div class="card-header" style="flex-wrap: wrap; gap: 0.75rem;">
            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <h2>🎓 Collège des Mentors & Experts d'Industrie</h2>
              <span class="badge badge-mentor">${mentors.length} membres distingués</span>
            </div>
            ${(isUltraAdmin || canApproveMemberships) ? `
              <button class="btn btn-sm btn-primary" id="dash-btn-open-nominate-modal">
                <span>🎓</span> <span>+ Nommer un Mentor & Expert</span>
              </button>
            ` : ''}
          </div>
          <p style="color: var(--color-muted); font-size: 0.9rem; margin-bottom: 1rem;">
            Statut honorifique récompensant les professionnels et mentors actifs du club. Leurs contributions réelles alimentent la reconnaissance communautaire et la vitrine publique.
          </p>
          ${mentors.length === 0 ? `
            <div class="empty-state" style="padding: 2.5rem 1rem;">
              <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🎓</div>
              <p><strong>Aucun Mentor & Expert désigné pour le moment.</strong></p>
              <p style="color: var(--color-muted); max-width: 480px; margin: 0.5rem auto 1.25rem;">
                Distinguez dès maintenant un membre ou intervenant pour reconnaître son apport d'expérience et lui permettre d'animer le club.
              </p>
              ${(isUltraAdmin || canApproveMemberships) ? `
                <button class="btn btn-primary btn-sm" id="dash-btn-open-nominate-empty">
                  Nommer le premier Mentor
                </button>
              ` : ''}
            </div>
          ` : `
            <div class="mentor-card-grid">
              ${mentors.map(m => {
                const u = m.user || {};
                const initials = ((u.firstName?.[0] || '') + (u.lastName?.[0] || '')).toUpperCase() || 'M';
                const assignedDate = m.assignedAt ? new Date(m.assignedAt).toLocaleDateString('fr-FR') : '—';
                const met = m.metrics || {};
                return `
                  <div class="mentor-card">
                    <div class="mentor-card-header">
                      <div style="display: flex; align-items: center; gap: 0.75rem;">
                        <div class="mentor-avatar">${initials}</div>
                        <div>
                          <div style="font-weight: 700; color: var(--color-text); font-size: 1rem;">
                            ${escapeHtml(u.firstName || '')} ${escapeHtml(u.lastName || '')}
                          </div>
                          <div style="font-size: 0.8rem; color: var(--color-muted);">${escapeHtml(u.email || '')}</div>
                        </div>
                      </div>
                      <span class="badge badge-mentor">🎓 Mentor</span>
                    </div>

                    <div class="mentor-metrics-row">
                      <div class="mentor-metric-item">
                        <strong>${met.postsCount ?? 0}</strong>
                        <span>Articles</span>
                      </div>
                      <div class="mentor-metric-item">
                        <strong>${met.formationsCount ?? 0}</strong>
                        <span>Formations</span>
                      </div>
                      <div class="mentor-metric-item">
                        <strong>${met.jobsCount ?? 0}</strong>
                        <span>Métiers</span>
                      </div>
                      <div class="mentor-metric-item">
                        <strong>${met.forumTotalInteractions ?? 0}</strong>
                        <span>Forum</span>
                      </div>
                    </div>

                    <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 0.75rem; font-size: 0.8rem; color: var(--color-muted); gap: 0.5rem; flex-wrap: wrap;">
                      <span>Nommé le ${assignedDate}</span>
                      <div style="display: flex; gap: 0.4rem; align-items: center;">
                        <button class="btn btn-sm btn-ghost" data-view-dossier="${u.id}" style="padding: 0.25rem 0.55rem; font-size: 0.75rem;" title="Consulter le dossier du mentor">
                          📁 Dossier
                        </button>
                        ${(isUltraAdmin || canApproveMemberships) ? `
                          <button class="btn btn-sm btn-outline-danger" data-mentor-revoke="${u.id}" data-mentor-name="${escapeHtml((u.firstName || '') + ' ' + (u.lastName || ''))}" style="padding: 0.25rem 0.55rem; font-size: 0.75rem;">
                            Révoquer
                          </button>
                        ` : ''}
                      </div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          `}
        </div>
      </div>
    `;
  }

  // ===== MODULE AUDIENCE & PRÉSENCE DES MEMBRES =====
  let analyticsUsersCache = [];

  function renderPresenceRows(users) {
    if (!users || users.length === 0) {
      return `<tr><td colspan="7"><div class="empty-state" style="padding:1.5rem;">Aucun membre ne correspond aux critères de recherche.</div></td></tr>`;
    }
    return users.map(u => {
      const lastLoginText = u.lastLoginAt ? new Date(u.lastLoginAt).toLocaleString('fr-FR', {
        day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
      }) : 'Jamais connecté';

      const roleBadgeClass = u.role === 'ULTRA_ADMIN' ? 'badge-primary' : u.role === 'ADMIN' ? 'badge-info' : 'badge-muted';
      const statusClass = `status-${(u.presenceStatus || 'older').toLowerCase()}`;

      return `
        <tr class="presence-row" data-user-id="${escapeHtml(u.id)}">
          <td style="text-align: center;">
            <span class="presence-medal">${escapeHtml(u.medal || '—')}</span>
          </td>
          <td>
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <div class="presence-avatar">${escapeHtml(u.initials || '??')}</div>
              <div>
                <div style="font-weight: 700; color: var(--color-text); font-size: 0.95rem;">
                  ${escapeHtml(u.fullName)}
                </div>
                <div style="font-size: 0.8rem; color: var(--color-muted);">${escapeHtml(u.email)}</div>
              </div>
            </div>
          </td>
          <td>
            <span class="badge ${roleBadgeClass}">
              ${escapeHtml(u.displayRole || u.role)}
            </span>
          </td>
          <td>
            <span class="presence-status-pill ${statusClass}">
              <span class="presence-dot"></span>
              ${escapeHtml(u.presenceLabel || 'Inconnu')}
            </span>
          </td>
          <td style="font-size: 0.88rem; color: var(--color-text);">
            ${lastLoginText}
          </td>
          <td>
            <div class="presence-score-badge">
              <span class="presence-score-val">${u.presenceScore || 0}</span>
              <span class="presence-score-sub">pts</span>
            </div>
          </td>
          <td>
            <div style="display: flex; gap: 0.6rem; font-size: 0.85rem; color: var(--color-muted);">
              <span title="Actions enregistrées (connexions, modifications)">⚡ <strong>${u.actionsCount || 0}</strong></span>
              <span title="Sujets de forum créés">💬 <strong>${u.forumTopics || 0}</strong></span>
              <span title="Réponses postées sur le forum">✍️ <strong>${u.forumReplies || 0}</strong></span>
            </div>
          </td>
          <td style="text-align: right;">
            <button class="btn btn-ghost btn-sm" data-view-dossier="${escapeHtml(u.id)}" title="Consulter le dossier membre">
              📁 Dossier
            </button>
          </td>
        </tr>
      `;
    }).join('');
  }

  async function loadAnalytics() {
    let visitorStats = {
      summary: {
        today: { uniqueVisitors: 0, visits: 0 },
        week: { uniqueVisitors: 0, visits: 0 },
        month: { uniqueVisitors: 0, visits: 0 },
        allTime: { totalUniqueVisitors: 0, totalVisits: 0 },
      },
      dailyTrend: [],
      topPages: [],
      devices: { desktop: 0, mobile: 0, tablet: 0, total: 0 }
    };
    let presenceUsers = [];
    let impactStats = { profilesDistribution: {} };
    let analyticsUnavailable = false;

    try {
      const [visRes, presRes, impactRes] = await Promise.allSettled([
        window.AdminApi.analytics.getVisitors(),
        window.AdminApi.analytics.getPresence(100),
        window.AdminApi.analytics.getImpactStats()
      ]);

      if (visRes.status === 'fulfilled' && visRes.value?.data) {
        visitorStats = visRes.value.data;
      } else {
        analyticsUnavailable = true;
      }
      if (presRes.status === 'fulfilled' && Array.isArray(presRes.value?.data)) {
        presenceUsers = presRes.value.data;
      }
      if (impactRes.status === 'fulfilled' && impactRes.value?.data) {
        impactStats = impactRes.value.data;
      }
    } catch (err) {
      console.warn('[Analytics] Erreur chargement stats:', err);
    }

    analyticsUsersCache = presenceUsers;

    // Calculs pour les graphiques CSS
    const dailyTrend = visitorStats.dailyTrend || [];
    const maxDayViews = Math.max(1, ...dailyTrend.map(d => d.visits || 0));

    const totalDevices = visitorStats.devices?.total || 1;
    const desktopPct = Math.round(((visitorStats.devices?.desktop || 0) / totalDevices) * 100);
    const mobilePct = Math.round(((visitorStats.devices?.mobile || 0) / totalDevices) * 100);
    const tabletPct = Math.round(((visitorStats.devices?.tablet || 0) / totalDevices) * 100);

    const maxPageViews = Math.max(1, ...(visitorStats.topPages || []).map(p => p.views || 0));

    // Comptage par statut de présence
    const onlineCount = presenceUsers.filter(u => u.presenceStatus === 'ONLINE').length;
    const todayCount = presenceUsers.filter(u => u.presenceStatus === 'ONLINE' || u.presenceStatus === 'TODAY').length;
    const profileEntries = Object.entries(impactStats.profilesDistribution || {}).sort((a, b) => b[1] - a[1]);
    const profileTotal = profileEntries.reduce((sum, [, count]) => sum + count, 0);

    return `
      <div class="analytics-page-root" style="display: flex; flex-direction: column; gap: 1.5rem;">
        <!-- En-tête de la page Analytics -->
        <div class="card" style="background: linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(16, 185, 129, 0.05) 100%); border-left: 4px solid var(--color-primary);">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <div>
              <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.25rem;">
                <h1 style="font-size: 1.5rem; font-weight: 800; margin: 0; color: var(--color-text);">
                  📈 Audience & Fréquentation de la Plateforme
                </h1>
                <span class="badge badge-success" style="display: inline-flex; align-items: center; gap: 0.35rem;">
                  <span class="presence-dot" style="background:#10b981;"></span> Direct
                </span>
              </div>
              <p style="color: var(--color-muted); margin: 0; font-size: 0.92rem;">
                Mesure de l'audience publique, analyse du trafic par appareil et classement d'assiduité des membres les plus engagés.
              </p>
            </div>
            <div style="display: flex; gap: 0.6rem; align-items: center;">
              <button class="btn btn-secondary btn-sm" id="analytics-refresh-btn" title="Recharger les statistiques en direct">
                🔄 Actualiser
              </button>
            </div>
          </div>
        </div>

        <!-- Grille des Cartes KPI d'Audience -->
        <div class="analytics-metrics-grid">
          <div class="analytics-stat-box">
            <div class="analytics-stat-header">
              <span class="analytics-stat-title">Aujourd'hui</span>
              <span class="analytics-stat-icon">🌅</span>
            </div>
            <div class="analytics-stat-val">
              ${(visitorStats.summary?.today?.uniqueVisitors || 0).toLocaleString('fr-FR')}
              <span class="analytics-stat-unit">visiteurs</span>
            </div>
            <div class="analytics-stat-sub">
              <strong>${(visitorStats.summary?.today?.visits || 0).toLocaleString('fr-FR')}</strong> pages consultées
            </div>
          </div>

          <div class="analytics-stat-box">
            <div class="analytics-stat-header">
              <span class="analytics-stat-title">7 Derniers Jours</span>
              <span class="analytics-stat-icon">📊</span>
            </div>
            <div class="analytics-stat-val">
              ${(visitorStats.summary?.week?.uniqueVisitors || 0).toLocaleString('fr-FR')}
              <span class="analytics-stat-unit">visiteurs</span>
            </div>
            <div class="analytics-stat-sub">
              <strong>${(visitorStats.summary?.week?.visits || 0).toLocaleString('fr-FR')}</strong> pages consultées
            </div>
          </div>

          <div class="analytics-stat-box">
            <div class="analytics-stat-header">
              <span class="analytics-stat-title">30 Derniers Jours</span>
              <span class="analytics-stat-icon">🗓️</span>
            </div>
            <div class="analytics-stat-val">
              ${(visitorStats.summary?.month?.uniqueVisitors || 0).toLocaleString('fr-FR')}
              <span class="analytics-stat-unit">visiteurs</span>
            </div>
            <div class="analytics-stat-sub">
              <strong>${(visitorStats.summary?.month?.visits || 0).toLocaleString('fr-FR')}</strong> pages consultées
            </div>
          </div>

          <div class="analytics-stat-box">
            <div class="analytics-stat-header">
              <span class="analytics-stat-title">Total Historique</span>
              <span class="analytics-stat-icon">🌐</span>
            </div>
            <div class="analytics-stat-val">
              ${(visitorStats.summary?.allTime?.totalUniqueVisitors || 0).toLocaleString('fr-FR')}
              <span class="analytics-stat-unit">uniques</span>
            </div>
            <div class="analytics-stat-sub">
              <strong>${(visitorStats.summary?.allTime?.totalVisits || 0).toLocaleString('fr-FR')}</strong> lectures cumulées
            </div>
          </div>

          <div class="analytics-stat-box" style="border-color: rgba(16, 185, 129, 0.4);">
            <div class="analytics-stat-header">
              <span class="analytics-stat-title">Présence en Direct</span>
              <span class="analytics-stat-icon">🟢</span>
            </div>
            <div class="analytics-stat-val" style="color: #10b981;">
              ${onlineCount}
              <span class="analytics-stat-unit">en ligne (&lt;30m)</span>
            </div>
            <div class="analytics-stat-sub">
              <strong>${todayCount}</strong> membres actifs aujourd'hui
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <div>
              <h2>🎯 Profils déclarés par les visiteurs</h2>
              <p style="color: var(--color-muted); font-size: 0.88rem; margin: 0.25rem 0 0 0;">
                Répartition réelle des profils renseignés dans la notification d'orientation.
              </p>
            </div>
            <span class="badge badge-primary">${profileTotal} réponses</span>
          </div>
          ${!impactStats || Object.keys(impactStats).length === 0 ? `
            <div class="empty-state">Les statistiques de profils sont momentanément indisponibles.</div>
          ` : profileEntries.length === 0 ? `
            <div class="empty-state">Aucun profil déclaré pour le moment.</div>
          ` : `
            <div class="analytics-devices-badge-row">
              ${profileEntries.map(([profile, count]) => `
                <div class="analytics-device-pill">
                  <span class="device-icon">🎯</span>
                  <div class="device-meta">
                    <span class="device-name">${escapeHtml(profile)}</span>
                    <strong class="device-pct">${count} (${profileTotal ? Math.round((count / profileTotal) * 100) : 0}%)</strong>
                  </div>
                </div>
              `).join('')}
            </div>
          `}
        </div>

        <!-- Section Graphiques & Répartition (Split) -->
        <div class="analytics-split-row">
          <!-- Graphique de tendance 7 jours -->
          <div class="card analytics-chart-col">
            <div class="card-header">
              <div>
                <h2>📅 Fréquentation Quotidienne (7 derniers jours)</h2>
                <p style="color: var(--color-muted); font-size: 0.85rem; margin: 0.2rem 0 0 0;">
                  Comparaison du volume de visiteurs uniques et des pages vues par jour
                </p>
              </div>
            </div>

            ${dailyTrend.length === 0 ? `
              <div class="empty-state">Données insuffisantes pour tracer la courbe des 7 jours.</div>
            ` : `
              <div class="analytics-daily-bars-container">
                <div class="analytics-daily-bars">
                  ${dailyTrend.map(d => {
                    const heightPct = Math.max(12, Math.round(((d.visits || 0) / maxDayViews) * 100));
                    const dateObj = new Date(d.date);
                    const dayName = dateObj.toLocaleDateString('fr-FR', { weekday: 'short' });
                    const dayNum = dateObj.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit' });
                    return `
                      <div class="analytics-bar-item" title="${d.date}: ${d.uniqueVisitors || 0} visiteurs, ${d.visits || 0} pages vues">
                        <div class="analytics-bar-track">
                          <div class="analytics-bar-fill" style="height: ${heightPct}%;">
                            <span class="analytics-bar-tooltip">${d.visits || 0} vues<br>${d.uniqueVisitors || 0} vis.</span>
                          </div>
                        </div>
                        <div class="analytics-bar-label">
                          <strong>${dayName}</strong>
                          <span style="font-size:0.75rem;color:var(--color-muted);">${dayNum}</span>
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
                <div style="display: flex; justify-content: center; gap: 1.5rem; margin-top: 1rem; font-size: 0.85rem; color: var(--color-muted);">
                  <span style="display: flex; align-items: center; gap: 0.4rem;">
                    <span style="width: 12px; height: 12px; border-radius: 3px; background: var(--color-primary); display: inline-block;"></span>
                    Pages Vues (hauteur)
                  </span>
                  <span style="display: flex; align-items: center; gap: 0.4rem;">
                    <span style="width: 8px; height: 8px; border-radius: 50%; background: #10b981; display: inline-block;"></span>
                    Visiteurs Uniques (survol)
                  </span>
                </div>
              </div>
            `}
          </div>

          <!-- Répartition Pages & Appareils -->
          <div class="card analytics-pages-col">
            <div class="card-header">
              <h2>🧭 Pages Populaires & Supports</h2>
            </div>

            <div style="margin-bottom: 1.5rem;">
              <h3 style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; color: var(--color-muted); margin-bottom: 0.75rem;">
                Appareils Utilisés
              </h3>
              <div class="analytics-devices-badge-row">
                <div class="analytics-device-pill">
                  <span class="device-icon">💻</span>
                  <div class="device-meta">
                    <span class="device-name">Ordinateurs</span>
                    <strong class="device-pct">${desktopPct}%</strong>
                  </div>
                </div>
                <div class="analytics-device-pill">
                  <span class="device-icon">📱</span>
                  <div class="device-meta">
                    <span class="device-name">Smartphones</span>
                    <strong class="device-pct">${mobilePct}%</strong>
                  </div>
                </div>
                <div class="analytics-device-pill">
                  <span class="device-icon">📟</span>
                  <div class="device-meta">
                    <span class="device-name">Tablettes</span>
                    <strong class="device-pct">${tabletPct}%</strong>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; color: var(--color-muted); margin-bottom: 0.75rem;">
                Top Pages Consultées
              </h3>
              ${(visitorStats.topPages || []).length === 0 ? `
                <div class="empty-state" style="padding: 1rem;">Aucune navigation enregistrée récemment.</div>
              ` : `
                <div class="analytics-pages-list">
                  ${(visitorStats.topPages || []).slice(0, 6).map(p => {
                    const widthPct = Math.max(8, Math.round(((p.views || 0) / maxPageViews) * 100));
                    return `
                      <div class="analytics-page-row">
                        <div class="analytics-page-meta">
                          <span class="analytics-page-path" title="${escapeHtml(p.path)}">${escapeHtml(p.path)}</span>
                          <span class="analytics-page-count">${p.views || 0} vues</span>
                        </div>
                        <div class="analytics-page-progress-bg">
                          <div class="analytics-page-progress-bar" style="width: ${widthPct}%;"></div>
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
              `}
            </div>
          </div>
        </div>

        <!-- Section Classement des Membres les Plus Présents -->
        <div class="card" id="analytics-presence-section">
          <div class="card-header" style="flex-wrap: wrap; gap: 1rem;">
            <div>
              <div style="display: flex; align-items: center; gap: 0.6rem;">
                <h2>🏆 Classement d'Assiduité & Présence des Membres</h2>
                <span class="badge badge-primary" id="presence-count-badge">${presenceUsers.length} membres</span>
              </div>
              <p style="color: var(--color-muted); font-size: 0.88rem; margin: 0.25rem 0 0 0;">
                Calcul dynamique d'engagement basé sur la récence des connexions, l'assiduité sur la plateforme et les contributions au forum.
              </p>
            </div>
          </div>

          <!-- Barre de recherche et filtres de présence -->
          <div style="display: flex; gap: 1rem; align-items: center; margin: 1rem 0; flex-wrap: wrap; background: var(--color-bg); padding: 0.85rem 1rem; border-radius: var(--radius); border: 1px solid var(--color-border);">
            <div style="flex: 1; min-width: 240px;">
              <input type="text" id="analytics-search-input" placeholder="🔍 Rechercher un membre (nom, email)..." style="width: 100%;">
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <label for="analytics-status-filter" style="font-size: 0.88rem; font-weight: 600; color: var(--color-muted); margin: 0;">
                Statut :
              </label>
              <select id="analytics-status-filter" style="min-width: 180px;">
                <option value="">Tous les statuts</option>
                <option value="ONLINE">🟢 En ligne récemment</option>
                <option value="TODAY">🟡 Actif aujourd'hui</option>
                <option value="THIS_WEEK">⚪ Cette semaine</option>
                <option value="OLDER">💤 Inactif (&gt;7j)</option>
              </select>
            </div>
          </div>

          <!-- Tableau complet de présence -->
          <div class="table-wrapper">
            <table class="presence-table">
              <thead>
                <tr>
                  <th style="width: 60px; text-align: center;">Rang</th>
                  <th>Membre</th>
                  <th>Rôle</th>
                  <th>Statut de Présence</th>
                  <th>Dernière Connexion</th>
                  <th>Score d'Activité</th>
                  <th>Contributions</th>
                  <th style="text-align: right;">Action</th>
                </tr>
              </thead>
              <tbody id="presence-table-tbody">
                ${renderPresenceRows(presenceUsers)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  // Filtres courants des listes de contenu (formations / métiers)
  const contentFilters = {
    formations: { status: '', mine: false },
    jobs: { status: '', mine: false },
  };
  // Derniers items chargés, pour préremplir la modale d'édition
  const contentCache = {
    formations: {},
    jobs: {},
  };

  const JOB_CATEGORIES = ['TECH', 'ENERGIE', 'FINANCE', 'SECURITE', 'SANTE', 'EDUCATION', 'AUTRE'];
  const BLOG_CATEGORIES = ['CLUB', 'FORMATION', 'ATELIER', 'RENCONTRE', 'CONFERENCE', 'VISITE', 'PROJET', 'TEMOIGNAGE', 'ANNONCE'];
  const blogFilters = { status: '', category: '', search: '', mine: false };
  const blogCache = {};
  const forumFilters = { search: '', status: '', category: '' };
  const forumCache = {};
  const STATUS_LABELS = {
    DRAFT: 'Brouillon',
    PENDING_REVIEW: 'En validation',
    PUBLISHED: 'Publié',
    ARCHIVED: 'Archivé',
  };

  function contentStatusBadge(status) {
    const cls = {
      DRAFT: 'badge-muted',
      PENDING_REVIEW: 'badge-warning',
      PUBLISHED: 'badge-success',
      ARCHIVED: 'badge-danger',
    }[status] || 'badge-muted';
    return `<span class="badge ${cls}">${STATUS_LABELS[status] || status}</span>`;
  }

  function contentActionButtons(item, moduleKey, permPrefix) {
    const user = window.AdminApp.currentUser;
    const can = permission => window.AdminApp.hasPermission(user, permission);
    const btn = (action, label, style = '') =>
      `<button class="btn btn-sm ${style}" data-content-module="${moduleKey}" data-content-action="${action}" data-content-id="${item.id}">${label}</button>`;

    let html = '';
    if (can(`${permPrefix}.publish`)) {
      if (item.status === 'DRAFT' || item.status === 'ARCHIVED') html += btn('publish', 'Publier', 'btn-success');
      if (item.status === 'PUBLISHED') html += btn('unpublish', 'Dépublier', 'btn-warning');
    } else if (can(`${permPrefix}.update`) && (item.status === 'DRAFT' || item.status === 'ARCHIVED')) {
      html += btn('submit', 'Soumettre à validation');
    }
    if (item.status === 'PENDING_REVIEW') {
      html += '<span class="text-muted">En attente d\'approbation</span>';
    }
    if (can(`${permPrefix}.update`)) html += btn('edit', 'Modifier');
    if (can(`${permPrefix}.archive`) && item.status !== 'ARCHIVED') html += btn('archive', 'Archiver');
    if (can(`${permPrefix}.delete`)) html += btn('delete', 'Supprimer', 'btn-danger');
    return html;
  }

  async function loadContentModule(moduleKey, config) {
    const filters = contentFilters[moduleKey];
    const client = moduleKey === 'formations' ? window.AdminApi.formations : window.AdminApi.jobs;
    const response = await client.getAdmin(filters);
    const items = response.data || [];
    contentCache[moduleKey] = {};
    items.forEach(item => { contentCache[moduleKey][item.id] = item; });

    const statusOptions = ['', 'DRAFT', 'PENDING_REVIEW', 'PUBLISHED', 'ARCHIVED']
      .map(s => `<option value="${s}" ${filters.status === s ? 'selected' : ''}>${s ? STATUS_LABELS[s] : 'Tous les statuts'}</option>`)
      .join('');

    const categoryCell = item => moduleKey === 'jobs'
      ? (item.domain ? `<span style="font-weight:600;color:#1e293b;">📁 ${escapeHtml(item.domain)}</span> <span class="badge" style="font-size:0.7rem;margin-left:0.3rem;">${escapeHtml(item.category || '')}</span>` : escapeHtml(item.category || '—'))
      : (item.category ? `<span style="font-weight:600;color:#1e293b;">📁 ${escapeHtml(item.category)}</span>` : '—');

    return `
      <div class="card">
        <div class="card-header">
          <h2>${config.title}</h2>
          <div style="display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap;">
            <button class="btn btn-secondary" id="btn-export-${moduleKey}-csv" style="display:inline-flex;align-items:center;gap:0.4rem;">
              <span>📥</span> <span>Exporter CSV</span>
            </button>
            ${window.AdminApp.hasPermission(window.AdminApp.currentUser, `${config.permPrefix}.delete`) ? '<button class="btn btn-danger" id="btn-bulk-delete" style="display:none;">Supprimer la sélection (<span id="bulk-count">0</span>)</button>' : ''}
            <button class="btn btn-primary" id="btn-create-content" data-content-module="${moduleKey}">${moduleKey === 'jobs' ? '+ Ajouter un métier' : '+ Ajouter une formation'}</button>
          </div>
        </div>
        <div style="display:flex;gap:1rem;align-items:center;margin-bottom:1rem;flex-wrap:wrap;">
          <label>Statut&nbsp;
            <select id="content-status-filter">${statusOptions}</select>
          </label>
          <label style="display:flex;align-items:center;gap:0.4rem;">
            <input type="checkbox" id="content-mine-filter" ${filters.mine ? 'checked' : ''}>
            Mes créations uniquement
          </label>
        </div>
        <div class="table-wrapper">
          <table>
            <thead><tr>${window.AdminApp.hasPermission(window.AdminApp.currentUser, `${config.permPrefix}.delete`) ? '<th style="width:40px;text-align:center;"><input type="checkbox" id="content-select-all" title="Tout sélectionner" style="cursor:pointer;"></th>' : ''}<th>Titre</th><th>Dossier / Catégorie</th><th>Statut</th><th>Auteur</th><th>Mise à jour</th><th>Actions</th></tr></thead>
            <tbody>
              ${items.length === 0
        ? `<tr><td colspan="7"><div class="empty-state">Aucun contenu</div></td></tr>`
        : items.map(item => `
                  <tr>
                    ${window.AdminApp.hasPermission(window.AdminApp.currentUser, `${config.permPrefix}.delete`) ? `<td style="text-align:center;"><input type="checkbox" class="content-select" value="${item.id}" style="cursor:pointer;"></td>` : ''}
                    <td>${escapeHtml(item.title)}</td>
                    <td>${categoryCell(item)}</td>
                    <td>${contentStatusBadge(item.status)}</td>
                    <td>${escapeHtml(item.createdBy ? `${item.createdBy.firstName} ${item.createdBy.lastName}` : '—')}</td>
                    <td>${new Date(item.updatedAt).toLocaleDateString('fr-FR')}</td>
                    <td>${contentActionButtons(item, moduleKey, config.permPrefix)}</td>
                  </tr>
                `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // Modale complète de création / édition (formations et métiers avec dossiers thématiques)
  async function openContentModal(moduleKey, item = null) {
    const existing = document.getElementById('content-modal-overlay');
    if (existing) existing.remove();

    const isJob = moduleKey === 'jobs';

    // Récupérer les domaines / dossiers existants depuis l'API
    let existingDomains = [];
    let existingCategories = [];

    if (isJob) {
      try {
        const res = await window.AdminApi.jobs.getDomains();
        existingDomains = res.data || [];
      } catch (e) {
        existingDomains = [];
      }
      if (item?.domain && !existingDomains.includes(item.domain)) {
        existingDomains.unshift(item.domain);
      }
    } else {
      try {
        const res = await window.AdminApi.formations.getCategories();
        existingCategories = res.data || [];
      } catch (e) {
        existingCategories = [];
      }
      if (item?.category && !existingCategories.includes(item.category)) {
        existingCategories.unshift(item.category);
      }
    }

    // Sélecteur dynamique de Domaine / Dossier pour les métiers
    const domainSelectorHtml = isJob ? `
      <div style="background:#f8fafc;padding:0.9rem;border-radius:8px;border:1px solid #cbd5e1;margin-bottom:0.5rem;">
        <label style="font-weight:600;display:block;margin-bottom:0.4rem;color:#0f172a;">
          📁 Dossier / Domaine thématique *
        </label>
        <select id="field-domain-select" style="width:100%;padding:0.55rem;border:1px solid #94a3b8;border-radius:6px;background:#fff;font-size:0.9rem;">
          <option value="">-- Sélectionner un domaine existant --</option>
          ${existingDomains.map(d => `<option value="${escapeHtml(d)}" ${item?.domain === d ? 'selected' : ''}>📁 ${escapeHtml(d)}</option>`).join('')}
          <option value="__NEW__" ${(!item?.domain && existingDomains.length === 0) ? 'selected' : ''}>➕ Créer un nouveau domaine / dossier...</option>
        </select>
        <div id="field-domain-new-wrap" style="margin-top:0.6rem;display:${(item?.domain && existingDomains.includes(item?.domain)) ? 'none' : 'block'};">
          <label style="font-size:0.8rem;color:#475569;display:block;margin-bottom:0.25rem;">Nom du nouveau domaine / dossier :</label>
          <input type="text" id="field-domain-new" placeholder="Ex. Technologies & Développement, Cybersécurité & Réseaux" value="${item?.domain && !existingDomains.includes(item.domain) ? escapeHtml(item.domain) : ''}" style="width:100%;padding:0.5rem;border:1px solid #3b82f6;border-radius:6px;">
        </div>
      </div>
    ` : '';

    // Sélecteur dynamique de Catégorie / Dossier pour les formations
    const categorySelectorHtml = !isJob ? `
      <div style="background:#f8fafc;padding:0.9rem;border-radius:8px;border:1px solid #cbd5e1;margin-bottom:0.5rem;">
        <label style="font-weight:600;display:block;margin-bottom:0.4rem;color:#0f172a;">
          📁 Dossier / Filière de formation *
        </label>
        <select id="field-cat-select" style="width:100%;padding:0.55rem;border:1px solid #94a3b8;border-radius:6px;background:#fff;font-size:0.9rem;">
          <option value="">-- Sélectionner une filière existante --</option>
          ${existingCategories.map(c => `<option value="${escapeHtml(c)}" ${item?.category === c ? 'selected' : ''}>📁 ${escapeHtml(c)}</option>`).join('')}
          <option value="__NEW__" ${(!item?.category && existingCategories.length === 0) ? 'selected' : ''}>➕ Créer une nouvelle filière / dossier...</option>
        </select>
        <div id="field-cat-new-wrap" style="margin-top:0.6rem;display:${(item?.category && existingCategories.includes(item?.category)) ? 'none' : 'block'};">
          <label style="font-size:0.8rem;color:#475569;display:block;margin-bottom:0.25rem;">Nom de la nouvelle filière / dossier :</label>
          <input type="text" id="field-cat-new" placeholder="Ex. Soft Skills & Communication, Management & Direction" value="${item?.category && !existingCategories.includes(item.category) ? escapeHtml(item.category) : ''}" style="width:100%;padding:0.5rem;border:1px solid #3b82f6;border-radius:6px;">
        </div>
      </div>
    ` : '';

    const categorySelectField = isJob ? `
      <label>Branche standard *
        <select name="category" required>
          ${JOB_CATEGORIES.map(c => `<option value="${c}" ${item?.category === c ? 'selected' : ''}>${c}</option>`).join('')}
        </select>
      </label>
    ` : '';

    // Convert syllabus object/json to editable text
    let syllabusText = '';
    if (item?.syllabus) {
      if (typeof item.syllabus === 'string') {
        syllabusText = item.syllabus;
      } else if (Array.isArray(item.syllabus)) {
        syllabusText = item.syllabus.map(m => {
          const modName = m.module || 'Module';
          const dur = m.duration ? ` (${m.duration})` : '';
          const lessons = Array.isArray(m.lessons) ? m.lessons.map(l => `- ${l}`).join('\n') : '';
          return `${modName}${dur}\n${lessons}`;
        }).join('\n\n');
      } else {
        syllabusText = JSON.stringify(item.syllabus, null, 2);
      }
    }

    const specificFields = isJob ? `
      <!-- Section Métier Spécifique -->
      <div style="border-top:1px solid #e2e8f0;padding-top:0.75rem;margin-top:0.5rem;">
        <h4 style="font-size:0.95rem;color:#1e293b;margin-bottom:0.6rem;">📋 Contenu du dossier métier</h4>
        
        <label>Missions & Activités quotidiennes clés
          <textarea name="content" rows="3" placeholder="Missions détaillées, contexte d'intervention, activités quotidiennes...">${escapeHtml(item?.content || '')}</textarea>
        </label>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-top:0.5rem;">
          <label>Salaire indicatif
            <input type="text" name="salary" value="${escapeHtml(item?.salary || '')}" placeholder="Ex. 450 000 - 1 200 000 FCFA / mois">
          </label>
          <label>Localisation / Mobilité
            <input type="text" name="location" value="${escapeHtml(item?.location || '')}" placeholder="Ex. Dakar / Hybride">
          </label>
        </div>

        <label style="margin-top:0.5rem;">Compétences clés (séparées par des virgules)
          <input type="text" name="skills" value="${escapeHtml(Array.isArray(item?.skills) ? item.skills.join(', ') : (item?.skills || ''))}" placeholder="Ex. JavaScript, Node.js, Résolution de bugs, Communication">
        </label>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-top:0.5rem;">
          <label>Prérequis & Profil conseillé
            <textarea name="prerequisites" rows="2" placeholder="Qualités requises, appétences...">${escapeHtml(item?.prerequisites || '')}</textarea>
          </label>
          <label>Études & Diplômes recommandés
            <textarea name="studies" rows="2" placeholder="Bac+2 à Bac+5, filières, écoles, certifications...">${escapeHtml(item?.studies || '')}</textarea>
          </label>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-top:0.5rem;">
          <label>Avantages & Points forts du métier
            <textarea name="advantages" rows="2" placeholder="Opportunités, perspectives, impact...">${escapeHtml(item?.advantages || '')}</textarea>
          </label>
          <label>Inconvénients & Contraintes terrain
            <textarea name="disadvantages" rows="2" placeholder="Veille continue, stress, astreintes...">${escapeHtml(item?.disadvantages || '')}</textarea>
          </label>
        </div>

        <label style="margin-top:0.5rem;">Sous-métiers & Spécialisations (séparés par des virgules)
          <input type="text" name="subProfessions" value="${escapeHtml(Array.isArray(item?.subProfessions) ? item.subProfessions.join(', ') : (item?.subProfessions || ''))}" placeholder="Ex. Développeur Frontend, Ingénieur DevOps, Lead Tech">
        </label>

        <label style="margin-top:0.5rem;">Lien vidéo YouTube d'immersion
          <input type="url" name="videoUrl" value="${escapeHtml(item?.videoUrl || '')}" placeholder="https://www.youtube.com/watch?v=...">
        </label>

        <!-- Section Éditoriale : Le saviez-vous ? -->
        <div style="border-top:2px solid #e2e8f0;padding-top:1rem;margin-top:1.25rem;background:#f8fafc;padding:1.1rem;border-radius:10px;border:1px solid #e2e8f0;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;flex-wrap:wrap;gap:0.5rem;">
            <div style="display:flex;align-items:center;gap:0.5rem;">
              <span style="font-size:1.2rem;">💡</span>
              <div>
                <h4 style="margin:0;font-size:1rem;color:#0f172a;font-weight:700;">Rubrique « Le saviez-vous ? »</h4>
                <p style="margin:0.15rem 0 0 0;font-size:0.78rem;color:#64748b;">
                  Situe le métier dans son évolution face aux mutations technologiques (automatisation, stabilité, émergence).
                </p>
              </div>
            </div>
            <div style="display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap;">
              <button type="button" id="btn-clear-saviez-vous" class="btn btn-sm" style="background:#fff;border:1px solid #cbd5e1;color:#64748b;font-size:0.78rem;padding:0.35rem 0.7rem;cursor:pointer;border-radius:6px;">
                🧹 Vider / Désactiver
              </button>
              ${item?.id ? `
                <button type="button" id="btn-save-only-saviez-vous" class="btn btn-sm btn-primary" style="font-size:0.78rem;padding:0.35rem 0.7rem;cursor:pointer;border-radius:6px;display:inline-flex;align-items:center;gap:0.3rem;">
                  💾 Enregistrer cette rubrique uniquement
                </button>
              ` : ''}
            </div>
          </div>

          <div style="display:grid;grid-template-columns:1fr;gap:0.75rem;">
            <label style="font-weight:600;font-size:0.85rem;color:#334155;">
              Statut d'évolution du métier *
              <select id="field-sv-statut" name="sv_statut" style="width:100%;margin-top:0.25rem;padding:0.55rem;border:1px solid #cbd5e1;border-radius:6px;background:#fff;font-size:0.88rem;color:#0f172a;">
                <option value="">-- Non renseigné (rubrique masquée sur la fiche) --</option>
                <option value="en_transformation" ${(item?.saviezVous?.statut === 'en_transformation') ? 'selected' : ''}>🔸 En transformation (Automatisation / Mutation des compétences)</option>
                <option value="valeur_sure" ${(item?.saviezVous?.statut === 'valeur_sure') ? 'selected' : ''}>🔹 Valeur sûre (Stabilité / Résilience durable de l'emploi)</option>
                <option value="en_emergence" ${(item?.saviezVous?.statut === 'en_emergence') ? 'selected' : ''}>🟢 En émergence (Forte création / Besoins pionniers)</option>
              </select>
            </label>

            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.25rem;">
                <label style="font-weight:600;font-size:0.85rem;color:#334155;margin:0;">Fait marquant / Chiffre clé (~120-160 car.)</label>
                <span id="sv-count-fait" style="font-size:0.75rem;color:#64748b;">0 / 160 car.</span>
              </div>
              <textarea id="field-sv-fait" name="sv_fait" rows="2" maxlength="300" placeholder="Ex. L'adoption des assistants de code IA accélère de 35 % à 50 % la production des fonctionnalités courantes..." style="width:100%;padding:0.5rem;border:1px solid #cbd5e1;border-radius:6px;font-size:0.88rem;font-family:inherit;">${escapeHtml(item?.saviezVous?.fait || '')}</textarea>
            </div>

            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.25rem;">
                <label style="font-weight:600;font-size:0.85rem;color:#334155;margin:0;">Explication / Pourquoi (~200-300 car.)</label>
                <span id="sv-count-pourquoi" style="font-size:0.75rem;color:#64748b;">0 / 300 car.</span>
              </div>
              <textarea id="field-sv-pourquoi" name="sv_pourquoi" rows="3" maxlength="500" placeholder="Ex. Les outils génératifs automatisent les tâches répétitives. Le rôle du développeur évolue vers la supervision d'architecture et la sécurité applicative..." style="width:100%;padding:0.5rem;border:1px solid #cbd5e1;border-radius:6px;font-size:0.88rem;font-family:inherit;">${escapeHtml(item?.saviezVous?.pourquoi || '')}</textarea>
            </div>

            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.25rem;">
                <label style="font-weight:600;font-size:0.85rem;color:#334155;margin:0;">Clé de lecture / À retenir (~120-160 car.)</label>
                <span id="sv-count-aretenir" style="font-size:0.75rem;color:#64748b;">0 / 160 car.</span>
              </div>
              <textarea id="field-sv-aretenir" name="sv_aretenir" rows="2" maxlength="300" placeholder="Ex. L'expertise se déplace de la simple saisie de syntaxe vers la conception système globale et le contrôle qualité exigeant..." style="width:100%;padding:0.5rem;border:1px solid #cbd5e1;border-radius:6px;font-size:0.88rem;font-family:inherit;">${escapeHtml(item?.saviezVous?.a_retenir || item?.saviezVous?.aRetenir || '')}</textarea>
            </div>
          </div>

          <!-- Aperçu en direct (Live Preview) -->
          <div style="margin-top:1rem;border-top:1px dashed #cbd5e1;padding-top:0.75rem;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">
              <span style="font-size:0.78rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#475569;">👁️ Aperçu en direct (Rendu public)</span>
              <span id="sv-preview-status-indicator" style="font-size:0.75rem;color:#64748b;">Masqué</span>
            </div>
            <div id="sv-live-preview-box" style="display:none;background:#ffffff;border:1px solid #e2e8f0;border-left:4px solid #f59e0b;border-radius:8px;padding:0.9rem 1.1rem;box-shadow:0 2px 6px rgba(0,0,0,0.04);">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.5rem;">
                <span style="font-weight:750;color:#0f172a;font-size:0.92rem;display:inline-flex;align-items:center;gap:0.35rem;">
                  <span>💡</span> Le saviez-vous ?
                </span>
                <span id="sv-preview-dot" style="display:inline-block;width:9px;height:9px;border-radius:50%;background:#f59e0b;" title="Statut"></span>
              </div>
              <p id="sv-preview-fait" style="font-weight:650;color:#1e293b;font-size:0.88rem;margin:0 0 0.45rem 0;line-height:1.45;"></p>
              <p id="sv-preview-pourquoi" style="color:#475569;font-size:0.82rem;margin:0 0 0.5rem 0;line-height:1.5;"></p>
              <div id="sv-preview-takeaway-wrap" style="background:#f1f5f9;border-radius:6px;padding:0.5rem 0.75rem;font-size:0.8rem;color:#334155;">
                <strong style="color:#0f172a;">À retenir :</strong> <span id="sv-preview-aretenir" style="font-style:italic;"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ` : `
      <!-- Section Formation Spécifique -->
      <div style="border-top:1px solid #e2e8f0;padding-top:0.75rem;margin-top:0.5rem;">
        <h4 style="font-size:0.95rem;color:#1e293b;margin-bottom:0.6rem;">🎓 Dossier pédagogique de la formation</h4>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;">
          <label>Durée indicative
            <input type="text" name="duration" value="${escapeHtml(item?.duration || '')}" placeholder="Ex. 6 semaines (45h)">
          </label>
          <label>Lieu / Modalités
            <input type="text" name="location" value="${escapeHtml(item?.location || '')}" placeholder="Ex. Hybride (Dakar & Zoom)">
          </label>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-top:0.5rem;">
          <label>Date de début
            <input type="date" name="startDate" value="${item?.startDate ? item.startDate.split('T')[0] : ''}">
          </label>
          <label>Date de fin
            <input type="date" name="endDate" value="${item?.endDate ? item.endDate.split('T')[0] : ''}">
          </label>
        </div>

        <label style="margin-top:0.5rem;">Objectifs pédagogiques & Acquis
          <textarea name="objectives" rows="2" placeholder="Ce que l'apprenant saura accomplir à l'issue de la formation...">${escapeHtml(item?.objectives || '')}</textarea>
        </label>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-top:0.5rem;">
          <label>Public cible visé
            <textarea name="targetAudience" rows="2" placeholder="Étudiants, professionnels, managers...">${escapeHtml(item?.targetAudience || '')}</textarea>
          </label>
          <label>Prérequis exigés
            <textarea name="prerequisites" rows="2" placeholder="Aucun, ou prérequis de base...">${escapeHtml(item?.prerequisites || '')}</textarea>
          </label>
        </div>

        <label style="margin-top:0.5rem;">Syllabus détaillé (Modules et cours)
          <span style="font-size:0.78rem;color:#64748b;display:block;margin-bottom:0.2rem;">Format libre par modules (ex: 'Module 1 : Titre' puis '- Leçon 1') ou format JSON</span>
          <textarea name="syllabus" rows="5" placeholder="Module 1 : Vaincre le trac\n- Respiration et ancrage\n- Posture scénique\n\nModule 2 : Storytelling\n- Structure narrative\n- Pitch d'impact">${escapeHtml(syllabusText)}</textarea>
        </label>

        <label style="margin-top:0.5rem;">Certification / Attestation délivrée
          <input type="text" name="certification" value="${escapeHtml(item?.certification || '')}" placeholder="Ex. Certificat d'Aptitude à l'Éloquence Professionnelle">
        </label>

        <label style="margin-top:0.5rem;">Modalités d'apprentissage & Méthodologie
          <textarea name="content" rows="2" placeholder="Ateliers pratiques, simulations filmées, coaching individualisé...">${escapeHtml(item?.content || '')}</textarea>
        </label>

        <label style="margin-top:0.5rem;">Lien vidéo YouTube de présentation
          <input type="url" name="videoUrl" value="${escapeHtml(item?.videoUrl || '')}" placeholder="https://www.youtube.com/watch?v=...">
        </label>
      </div>
    `;

    const draftKey = `admin_draft_${moduleKey}`;
    const hasDraft = !item && !!localStorage.getItem(draftKey);

    const overlay = document.createElement('div');
    overlay.id = 'content-modal-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(15,23,42,0.65);display:flex;align-items:center;justify-content:center;z-index:1000;padding:1rem;backdrop-filter:blur(4px);';
    overlay.innerHTML = `
      <div class="card" style="max-width:760px;width:100%;padding:1.75rem;max-height:92vh;overflow-y:auto;background:var(--bg-card, #fff);box-shadow:0 20px 40px rgba(0,0,0,0.25);border-radius:12px;">
        <div class="card-header" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem;border-bottom:1px solid #e2e8f0;padding-bottom:0.85rem;">
          <div>
            <h2 style="margin:0;font-size:1.3rem;color:#0f172a;">${item ? 'Modifier le dossier' : 'Nouveau dossier'} — ${isJob ? 'Fiche Métier' : 'Programme Formation'}</h2>
            <p style="margin:0.2rem 0 0 0;font-size:0.82rem;color:#64748b;">Remplissez les informations pour une immersion complète des apprenants.</p>
          </div>
          <button type="button" id="content-modal-close-btn" style="border:none;background:transparent;font-size:1.5rem;cursor:pointer;line-height:1;color:#64748b;">&times;</button>
        </div>

        <div id="draft-restore-banner" class="draft-banner-restore" style="display: ${hasDraft ? 'flex' : 'none'};">
          <span>⚠️ Un brouillon non enregistré a été retrouvé pour cette création.</span>
          <div style="display:flex;gap:0.5rem;align-items:center;">
            <button type="button" class="btn btn-sm btn-primary" id="btn-restore-draft">Restaurer</button>
            <button type="button" class="btn btn-sm btn-ghost" id="btn-dismiss-draft">Effacer</button>
          </div>
        </div>

        <form id="content-modal-form" style="display:flex;flex-direction:column;gap:0.85rem;">
          
          <!-- Dossier thématique -->
          ${domainSelectorHtml}
          ${categorySelectorHtml}

          <div style="display:grid;grid-template-columns:2fr 1fr;gap:0.75rem;">
            <label>Intitulé / Titre *
              <input type="text" name="title" required minlength="3" value="${escapeHtml(item?.title || '')}" placeholder="Ex. Analyste Cybersécurité">
            </label>
            ${categorySelectField}
          </div>

          <div style="display:grid;grid-template-columns:1fr 2fr;gap:0.75rem;">
            <label>Icône (emoji)
              <input type="text" name="icon" value="${escapeHtml(item?.icon || '')}" placeholder="💼">
            </label>
            <div>
              <label style="display:flex;justify-content:space-between;align-items:center;">
                <span>Image d'illustration</span>
                <span id="content-image-badge" style="font-size:0.75rem;font-weight:normal;color:#64748b;">
                  ${item?.image ? (item.image.includes('media.lemondedutravail') || item.image.includes('r2.dev') || item.image.includes('r2.cloudflarestorage') ? '🛡️ Cloudflare R2' : '📦 Supabase / Externe') : '☁️ R2 CDN'}
                </span>
              </label>
              <div style="display:flex;gap:0.5rem;align-items:center;">
                <input type="url" id="content-field-image" name="image" value="${escapeHtml(item?.image || '')}" placeholder="https://..." style="flex:1;">
                <label class="btn" style="margin:0;cursor:pointer;display:inline-flex;align-items:center;gap:0.35rem;font-size:0.8rem;white-space:nowrap;padding:0.45rem 0.75rem;background:#f8fafc;border:1px solid #cbd5e1;border-radius:6px;" title="Téléverser vers Cloudflare R2">
                  <span>☁️ Uploader</span>
                  <input type="file" id="content-r2-file" accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml,application/pdf" style="display:none;">
                </label>
              </div>
              <small id="content-r2-status" style="display:block;color:#64748b;margin-top:0.25rem;font-size:0.75rem;"></small>
            </div>
          </div>

          <label>Description courte (accroche pour la carte) *
            <textarea name="description" required minlength="10" rows="2" placeholder="Résumé percutant qui apparaît sur la carte catalogue...">${escapeHtml(item?.description || '')}</textarea>
          </label>

          ${specificFields}

          <div style="display:flex;gap:0.75rem;justify-content:flex-end;margin-top:1rem;padding-top:1rem;border-top:1px solid #e2e8f0;">
            <button type="button" class="btn" id="content-modal-cancel">Annuler</button>
            <button type="submit" class="btn btn-primary" style="font-weight:600;">${item ? '💾 Enregistrer les modifications' : '✨ Créer le dossier (Brouillon)'}</button>
          </div>
        </form>
      </div>
    `;
    document.body.appendChild(overlay);

    // Autosave & draft restore
    if (!item) {
      const formEl = overlay.querySelector('#content-modal-form');
      const draftBanner = overlay.querySelector('#draft-restore-banner');
      const btnRestore = overlay.querySelector('#btn-restore-draft');
      const btnDismiss = overlay.querySelector('#btn-dismiss-draft');

      let autosaveTimer = null;
      formEl.addEventListener('input', () => {
        clearTimeout(autosaveTimer);
        autosaveTimer = setTimeout(() => {
          const formData = new FormData(formEl);
          const draftObj = {};
          formData.forEach((val, k) => { draftObj[k] = val; });
          if (Object.keys(draftObj).length > 0) {
            localStorage.setItem(draftKey, JSON.stringify(draftObj));
          }
        }, 500);
      });

      btnRestore?.addEventListener('click', () => {
        try {
          const raw = localStorage.getItem(draftKey);
          if (raw) {
            const draft = JSON.parse(raw);
            Object.entries(draft).forEach(([k, v]) => {
              const field = formEl.elements[k];
              if (field && v != null) {
                field.value = v;
              }
            });
            showToast('Brouillon restauré avec succès', 'info');
            if (draftBanner) draftBanner.style.display = 'none';
          }
        } catch (e) {
          console.error(e);
        }
      });

      btnDismiss?.addEventListener('click', () => {
        localStorage.removeItem(draftKey);
        if (draftBanner) draftBanner.style.display = 'none';
        showToast('Brouillon effacé', 'info');
      });
    }

    // Upload interactif vers Cloudflare R2 avec bouclier CDN
    const r2FileInput = overlay.querySelector('#content-r2-file');
    const imageInput = overlay.querySelector('#content-field-image');
    const r2Status = overlay.querySelector('#content-r2-status');
    const imageBadge = overlay.querySelector('#content-image-badge');

    if (r2FileInput) {
      r2FileInput.addEventListener('change', async () => {
        const file = r2FileInput.files[0];
        if (!file) return;

        r2Status.innerHTML = '<span style="color:#2563eb;">⚡ Envoi vers Cloudflare R2 (CDN Edge)...</span>';

        try {
          const res = await window.AdminApi.upload.file(file, isJob ? 'metiers' : 'formations');
          if (res.success && res.data?.url) {
            imageInput.value = res.data.url;
            r2Status.innerHTML = '<span style="color:#10b981;">✓ Hébergé sur Cloudflare R2 (Cache Edge 1 an)</span>';
            if (imageBadge) imageBadge.innerHTML = '🛡️ Cloudflare R2';
            showToast('Fichier hébergé sur Cloudflare R2 avec succès', 'success');
          } else {
            throw new Error(res.message || 'Échec du téléversement');
          }
        } catch (err) {
          r2Status.innerHTML = `<span style="color:#ef4444;">❌ Erreur: ${err.message}</span>`;
          showToast(`Erreur upload R2 : ${err.message}`, 'error');
        }
      });
    }

    // Dynamic show/hide for new domain / category inputs
    const domSelect = overlay.querySelector('#field-domain-select');
    const domNewWrap = overlay.querySelector('#field-domain-new-wrap');
    if (domSelect && domNewWrap) {
      domSelect.addEventListener('change', () => {
        domNewWrap.style.display = domSelect.value === '__NEW__' ? 'block' : 'none';
        if (domSelect.value === '__NEW__') {
          const inp = overlay.querySelector('#field-domain-new');
          if (inp) inp.focus();
        }
      });
    }

    const catSelect = overlay.querySelector('#field-cat-select');
    const catNewWrap = overlay.querySelector('#field-cat-new-wrap');
    if (catSelect && catNewWrap) {
      catSelect.addEventListener('change', () => {
        catNewWrap.style.display = catSelect.value === '__NEW__' ? 'block' : 'none';
        if (catSelect.value === '__NEW__') {
          const inp = overlay.querySelector('#field-cat-new');
          if (inp) inp.focus();
        }
      });
    }

    const closeModal = () => overlay.remove();
    overlay.querySelector('#content-modal-cancel').addEventListener('click', closeModal);
    overlay.querySelector('#content-modal-close-btn').addEventListener('click', closeModal);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });

    // Gestion interactive spécifique de la rubrique "Le saviez-vous ?"
    if (isJob) {
      const svStatutEl = overlay.querySelector('#field-sv-statut');
      const svFaitEl = overlay.querySelector('#field-sv-fait');
      const svPourquoiEl = overlay.querySelector('#field-sv-pourquoi');
      const svARetenirEl = overlay.querySelector('#field-sv-aretenir');
      const svPreviewBox = overlay.querySelector('#sv-live-preview-box');
      const svPreviewStatus = overlay.querySelector('#sv-preview-status-indicator');
      const svPreviewDot = overlay.querySelector('#sv-preview-dot');
      const svPreviewFait = overlay.querySelector('#sv-preview-fait');
      const svPreviewPourquoi = overlay.querySelector('#sv-preview-pourquoi');
      const svPreviewARetenir = overlay.querySelector('#sv-preview-aretenir');
      const svTakeawayWrap = overlay.querySelector('#sv-preview-takeaway-wrap');
      const countFait = overlay.querySelector('#sv-count-fait');
      const countPourquoi = overlay.querySelector('#sv-count-pourquoi');
      const countARetenir = overlay.querySelector('#sv-count-aretenir');

      const dotColorMap = {
        en_transformation: '#f59e0b',
        valeur_sure: '#3b82f6',
        en_emergence: '#10b981'
      };

      const dotTitleMap = {
        en_transformation: 'Métier en transformation',
        valeur_sure: 'Métier valeur sûre',
        en_emergence: 'Métier en émergence'
      };

      const updateSaviezVousPreview = () => {
        const statut = svStatutEl?.value || '';
        const fait = (svFaitEl?.value || '').trim();
        const pourquoi = (svPourquoiEl?.value || '').trim();
        const aRetenir = (svARetenirEl?.value || '').trim();

        if (countFait) countFait.textContent = `${(svFaitEl?.value || '').length} / 160 car.`;
        if (countPourquoi) countPourquoi.textContent = `${(svPourquoiEl?.value || '').length} / 300 car.`;
        if (countARetenir) countARetenir.textContent = `${(svARetenirEl?.value || '').length} / 160 car.`;

        const isVisible = statut && fait;
        if (isVisible && svPreviewBox) {
          svPreviewBox.style.display = 'block';
          const color = dotColorMap[statut] || '#f59e0b';
          svPreviewBox.style.borderLeftColor = color;
          if (svPreviewDot) {
            svPreviewDot.style.background = color;
            svPreviewDot.title = dotTitleMap[statut] || statut;
          }
          if (svPreviewFait) svPreviewFait.textContent = fait;
          if (svPreviewPourquoi) {
            svPreviewPourquoi.textContent = pourquoi;
            svPreviewPourquoi.style.display = pourquoi ? 'block' : 'none';
          }
          if (svTakeawayWrap && svPreviewARetenir) {
            svPreviewARetenir.textContent = aRetenir;
            svTakeawayWrap.style.display = aRetenir ? 'block' : 'none';
          }
          if (svPreviewStatus) {
            svPreviewStatus.innerHTML = '<span style="color:#10b981;font-weight:600;">✓ Affiché en public</span>';
          }
        } else if (svPreviewBox) {
          svPreviewBox.style.display = 'none';
          if (svPreviewStatus) {
            svPreviewStatus.innerHTML = '<span style="color:#94a3b8;">Masqué (statut ou fait manquant)</span>';
          }
        }
      };

      [svStatutEl, svFaitEl, svPourquoiEl, svARetenirEl].forEach(el => {
        el?.addEventListener('input', updateSaviezVousPreview);
        el?.addEventListener('change', updateSaviezVousPreview);
      });
      updateSaviezVousPreview();

      // Bouton Vider / Désactiver
      const btnClearSv = overlay.querySelector('#btn-clear-saviez-vous');
      btnClearSv?.addEventListener('click', () => {
        if (svStatutEl) svStatutEl.value = '';
        if (svFaitEl) svFaitEl.value = '';
        if (svPourquoiEl) svPourquoiEl.value = '';
        if (svARetenirEl) svARetenirEl.value = '';
        updateSaviezVousPreview();
        showToast('Rubrique « Le saviez-vous ? » réinitialisée.', 'info');
      });

      // Bouton Sauvegarde indépendante
      const btnSaveOnlySv = overlay.querySelector('#btn-save-only-saviez-vous');
      btnSaveOnlySv?.addEventListener('click', async () => {
        if (!item || !item.id) {
          showToast('Veuillez d\'abord enregistrer la fiche métier.', 'warning');
          return;
        }

        const statut = svStatutEl?.value || '';
        const fait = (svFaitEl?.value || '').trim();
        const pourquoi = (svPourquoiEl?.value || '').trim();
        const aRetenir = (svARetenirEl?.value || '').trim();

        let svPayload = null;
        if (statut || fait || pourquoi || aRetenir) {
          if (!statut || !fait) {
            showToast('Le statut et le fait marquant sont obligatoires pour activer la rubrique.', 'warning');
            return;
          }
          svPayload = {
            statut,
            fait,
            pourquoi: pourquoi || undefined,
            a_retenir: aRetenir || undefined,
            aRetenir: aRetenir || undefined
          };
        }

        btnSaveOnlySv.disabled = true;
        btnSaveOnlySv.textContent = '⏳ Enregistrement...';
        try {
          await window.AdminApi.jobs.updateSaviezVous(item.id, svPayload);
          if (item) item.saviezVous = svPayload;
          showToast(svPayload ? 'Rubrique « Le saviez-vous ? » mise à jour avec succès !' : 'Rubrique « Le saviez-vous ? » retirée.', 'success');
        } catch (err) {
          showToast('Erreur : ' + err.message, 'error');
        } finally {
          btnSaveOnlySv.disabled = false;
          btnSaveOnlySv.textContent = '💾 Enregistrer cette rubrique uniquement';
        }
      });
    }

    overlay.querySelector('#content-modal-form').addEventListener('submit', async e => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      // Résolution du domaine pour métier
      if (isJob) {
        const selVal = domSelect ? domSelect.value : '';
        if (selVal === '__NEW__') {
          const newDomVal = overlay.querySelector('#field-domain-new')?.value.trim();
          if (!newDomVal) {
            showToast('Veuillez saisir un nom pour le nouveau domaine / dossier.', 'warning');
            return;
          }
          data.domain = newDomVal;
        } else if (selVal) {
          data.domain = selVal;
        } else {
          data.domain = null;
        }

        // Nettoyer skills et subProfessions
        if (typeof data.skills === 'string') {
          data.skills = data.skills.split(',').map(s => s.trim()).filter(Boolean);
        }
        if (typeof data.subProfessions === 'string') {
          data.subProfessions = data.subProfessions.split(',').map(s => s.trim()).filter(Boolean);
        }

        // Rubrique Le saviez-vous ?
        const svStatut = data.sv_statut;
        const svFait = (data.sv_fait || '').trim();
        const svPourquoi = (data.sv_pourquoi || '').trim();
        const svARetenir = (data.sv_aretenir || '').trim();
        delete data.sv_statut;
        delete data.sv_fait;
        delete data.sv_pourquoi;
        delete data.sv_aretenir;

        if (svStatut && svFait) {
          data.saviezVous = {
            statut: svStatut,
            fait: svFait,
            pourquoi: svPourquoi || undefined,
            a_retenir: svARetenir || undefined,
            aRetenir: svARetenir || undefined
          };
        } else {
          data.saviezVous = null;
        }
      } else {
        // Résolution de la catégorie pour formation
        const selVal = catSelect ? catSelect.value : '';
        if (selVal === '__NEW__') {
          const newCatVal = overlay.querySelector('#field-cat-new')?.value.trim();
          if (!newCatVal) {
            showToast('Veuillez saisir un nom pour la nouvelle filière / dossier.', 'warning');
            return;
          }
          data.category = newCatVal;
        } else if (selVal) {
          data.category = selVal;
        } else {
          data.category = null;
        }

        // Traitement du syllabus
        if (data.syllabus && typeof data.syllabus === 'string') {
          const raw = data.syllabus.trim();
          if (raw.startsWith('[') || raw.startsWith('{')) {
            try {
              data.syllabus = JSON.parse(raw);
            } catch (err) {
              // Garder tel quel
            }
          } else {
            // Découpage automatique par modules
            const blocks = raw.split(/\n\s*\n/).map(b => b.trim()).filter(Boolean);
            const parsedModules = [];
            for (const b of blocks) {
              const lines = b.split('\n').map(l => l.trim()).filter(Boolean);
              if (lines.length > 0) {
                const titleLine = lines[0];
                const lessons = lines.slice(1).map(l => l.replace(/^[-*•]\s*/, ''));
                parsedModules.push({
                  module: titleLine.replace(/^#+\s*/, ''),
                  lessons: lessons.length > 0 ? lessons : undefined
                });
              }
            }
            if (parsedModules.length > 0) {
              data.syllabus = parsedModules;
            }
          }
        }
      }

      const client = isJob ? window.AdminApi.jobs : window.AdminApi.formations;
      try {
        if (item) {
          await client.update(item.id, data);
          showToast('Dossier mis à jour avec succès', 'success');
        } else {
          await client.create(data);
          localStorage.removeItem(draftKey);
          showToast('Nouveau dossier créé en brouillon avec succès', 'success');
        }
        overlay.remove();
        loadPage(moduleKey === 'jobs' ? 'metiers' : moduleKey);
      } catch (error) {
        showToast(error.message, 'error');
      }
    });
  }

  async function loadFormations() {
    return loadContentModule('formations', { title: 'Formations', permPrefix: 'formation' });
  }

  async function loadMetiers() {
    return loadContentModule('jobs', { title: 'Métiers', permPrefix: 'metier' });
  }

  function blogActionButtons(item) {
    const can = perm => window.AdminApp.hasPermission(window.AdminApp.currentUser, perm);
    const btn = (action, label, cls = '') =>
      `<button class="btn btn-sm ${cls} btn-blog-action" data-action="${action}" data-id="${item.id}" style="margin-right:0.25rem;">${label}</button>`;

    let html = '';
    if (can('blog.update')) html += btn('edit', 'Modifier');
    if (can('blog.update') && (item.status === 'DRAFT' || item.status === 'ARCHIVED')) {
      html += btn('submit', 'Soumettre', 'btn-primary');
    }
    if (can('blog.publish') && item.status !== 'PUBLISHED') {
      html += btn('publish', 'Publier', 'btn-success');
    }
    if (can('blog.publish') && item.status === 'PUBLISHED') {
      html += btn('unpublish', 'Dépublier', 'btn-warning');
    }
    if (can('blog.archive') && item.status !== 'ARCHIVED') {
      html += btn('archive', 'Archiver');
    }
    if (can('blog.delete')) {
      html += btn('delete', 'Supprimer', 'btn-danger');
    }
    return html;
  }

  function openBlogPostModal(post = null) {
    const existing = document.getElementById('blog-modal-overlay');
    if (existing) existing.remove();

    const draftKey = 'admin_draft_blog';
    const hasDraft = !post && !!localStorage.getItem(draftKey);

    const overlay = document.createElement('div');
    overlay.id = 'blog-modal-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:1000;padding:1rem;';
    overlay.innerHTML = `
      <div class="card" style="max-width:680px;width:100%;padding:1.5rem;max-height:90vh;overflow-y:auto;background:var(--bg-card, #fff);box-shadow:0 10px 30px rgba(0,0,0,0.2);border-radius:8px;">
        <div class="card-header" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;border-bottom:1px solid #e2e8f0;padding-bottom:0.75rem;">
          <h2 style="margin:0;font-size:1.25rem;">${post ? 'Modifier l\'article' : 'Rédiger un nouvel article'}</h2>
          <button type="button" id="blog-modal-close-btn" style="border:none;background:transparent;font-size:1.5rem;cursor:pointer;line-height:1;">&times;</button>
        </div>

        <div id="blog-draft-restore-banner" class="draft-banner-restore" style="display: ${hasDraft ? 'flex' : 'none'};">
          <span>⚠️ Un brouillon d'article non enregistré a été retrouvé.</span>
          <div style="display:flex;gap:0.5rem;align-items:center;">
            <button type="button" class="btn btn-sm btn-primary" id="btn-blog-restore-draft">Restaurer</button>
            <button type="button" class="btn btn-sm btn-ghost" id="btn-blog-dismiss-draft">Effacer</button>
          </div>
        </div>

        <form id="blog-modal-form" style="display:flex;flex-direction:column;gap:0.8rem;">
          <div style="display:grid;grid-template-columns:2fr 1fr;gap:0.75rem;">
            <label>Titre de l'article *
              <input type="text" name="title" required minlength="3" value="${escapeHtml(post?.title || '')}" placeholder="Titre percutant">
            </label>
            <label>Catégorie *
              <select name="category" required>
                ${BLOG_CATEGORIES.map(c => `<option value="${c}" ${post?.category === c ? 'selected' : ''}>${c}</option>`).join('')}
              </select>
            </label>
          </div>
          <div>
            <label style="display:flex;justify-content:space-between;align-items:center;">
              <span>Image de couverture</span>
              <span id="blog-cover-badge" style="font-size:0.75rem;font-weight:normal;color:#64748b;">
                ${post?.coverImage ? (post.coverImage.includes('media.lemondedutravail') || post.coverImage.includes('r2.dev') || post.coverImage.includes('r2.cloudflarestorage') ? '🛡️ Cloudflare R2' : '📦 Supabase / Externe') : '☁️ R2 CDN'}
              </span>
            </label>
            <div style="display:flex;gap:0.5rem;align-items:center;">
              <input type="url" id="blog-field-cover" name="coverImage" value="${escapeHtml(post?.coverImage || '')}" placeholder="https://..." style="flex:1;">
              <label class="btn" style="margin:0;cursor:pointer;display:inline-flex;align-items:center;gap:0.35rem;font-size:0.8rem;white-space:nowrap;padding:0.45rem 0.75rem;background:#f8fafc;border:1px solid #cbd5e1;border-radius:6px;" title="Téléverser vers Cloudflare R2">
                <span>☁️ Uploader</span>
                <input type="file" id="blog-r2-file" accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml" style="display:none;">
              </label>
            </div>
            <small id="blog-r2-status" style="display:block;color:#64748b;margin-top:0.25rem;font-size:0.75rem;"></small>
          </div>
          <label>Extrait / Résumé (affiché dans la liste)
            <textarea name="excerpt" rows="2" maxlength="500" placeholder="Brève introduction ou accroche pour les lecteurs...">${escapeHtml(post?.excerpt || '')}</textarea>
          </label>
          <label>Contenu complet de l'article *
            <textarea name="content" required minlength="10" rows="8" placeholder="Rédigez l'article ici...">${escapeHtml(post?.content || '')}</textarea>
          </label>
          <label style="display:flex;align-items:center;gap:0.5rem;cursor:pointer;">
            <input type="checkbox" name="featured" ${post?.featured ? 'checked' : ''}>
            <span>Mettre cet article en avant (à la une sur la page d'accueil)</span>
          </label>
          <div style="display:flex;gap:0.5rem;justify-content:flex-end;margin-top:0.5rem;padding-top:0.75rem;border-top:1px solid #e2e8f0;">
            <button type="button" class="btn" id="blog-modal-cancel">Annuler</button>
            <button type="submit" class="btn btn-primary">${post ? 'Enregistrer les modifications' : 'Créer l\'article (brouillon)'}</button>
          </div>
        </form>
      </div>
    `;
    document.body.appendChild(overlay);

    // Upload interactif de couverture vers Cloudflare R2
    const blogR2File = overlay.querySelector('#blog-r2-file');
    const blogCoverInput = overlay.querySelector('#blog-field-cover');
    const blogR2Status = overlay.querySelector('#blog-r2-status');
    const blogCoverBadge = overlay.querySelector('#blog-cover-badge');

    if (blogR2File) {
      blogR2File.addEventListener('change', async () => {
        const file = blogR2File.files[0];
        if (!file) return;

        blogR2Status.innerHTML = '<span style="color:#2563eb;">⚡ Envoi vers Cloudflare R2 (CDN Edge)...</span>';

        try {
          const res = await window.AdminApi.upload.file(file, 'blog');
          if (res.success && res.data?.url) {
            blogCoverInput.value = res.data.url;
            blogR2Status.innerHTML = '<span style="color:#10b981;">✓ Hébergé sur Cloudflare R2 (Cache Edge 1 an)</span>';
            if (blogCoverBadge) blogCoverBadge.innerHTML = '🛡️ Cloudflare R2';
            showToast('Image de couverture hébergée sur Cloudflare R2', 'success');
          } else {
            throw new Error(res.message || 'Échec du téléversement');
          }
        } catch (err) {
          blogR2Status.innerHTML = `<span style="color:#ef4444;">❌ Erreur: ${err.message}</span>`;
          showToast(`Erreur upload R2: ${err.message}`, 'error');
        }
      });
    }

    // Autosave & draft restore
    if (!post) {
      const formEl = overlay.querySelector('#blog-modal-form');
      const draftBanner = overlay.querySelector('#blog-draft-restore-banner');
      const btnRestore = overlay.querySelector('#btn-blog-restore-draft');
      const btnDismiss = overlay.querySelector('#btn-blog-dismiss-draft');

      let autosaveTimer = null;
      formEl.addEventListener('input', () => {
        clearTimeout(autosaveTimer);
        autosaveTimer = setTimeout(() => {
          const formData = new FormData(formEl);
          const draftObj = {};
          formData.forEach((val, k) => { draftObj[k] = val; });
          if (Object.keys(draftObj).length > 0) {
            localStorage.setItem(draftKey, JSON.stringify(draftObj));
          }
        }, 500);
      });

      btnRestore?.addEventListener('click', () => {
        try {
          const raw = localStorage.getItem(draftKey);
          if (raw) {
            const draft = JSON.parse(raw);
            Object.entries(draft).forEach(([k, v]) => {
              const field = formEl.elements[k];
              if (field && v != null) {
                if (field.type === 'checkbox') {
                  field.checked = v === 'on' || v === true;
                } else {
                  field.value = v;
                }
              }
            });
            showToast('Brouillon d\'article restauré', 'info');
            if (draftBanner) draftBanner.style.display = 'none';
          }
        } catch (e) {
          console.error(e);
        }
      });

      btnDismiss?.addEventListener('click', () => {
        localStorage.removeItem(draftKey);
        if (draftBanner) draftBanner.style.display = 'none';
        showToast('Brouillon effacé', 'info');
      });
    }

    const closeModal = () => overlay.remove();
    overlay.querySelector('#blog-modal-cancel').addEventListener('click', closeModal);
    overlay.querySelector('#blog-modal-close-btn').addEventListener('click', closeModal);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });

    overlay.querySelector('#blog-modal-form').addEventListener('submit', async e => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = {
        title: formData.get('title'),
        category: formData.get('category'),
        coverImage: formData.get('coverImage') || null,
        excerpt: formData.get('excerpt') || null,
        content: formData.get('content'),
        featured: formData.get('featured') === 'on',
      };

      try {
        if (post) {
          await window.AdminApi.blog.update(post.id, data);
          showToast('Article mis à jour avec succès', 'success');
        } else {
          await window.AdminApi.blog.create(data);
          localStorage.removeItem(draftKey);
          showToast('Article créé en brouillon', 'success');
        }
        overlay.remove();
        loadPage('blog');
      } catch (error) {
        showToast(error.message, 'error');
      }
    });
  }

  async function loadBlog() {
    const response = await window.AdminApi.blog.getAll(blogFilters);
    const items = response.data || [];
    items.forEach(p => { blogCache[p.id] = p; });

    const statusOptions = ['', 'DRAFT', 'PENDING_REVIEW', 'PUBLISHED', 'ARCHIVED']
      .map(s => `<option value="${s}" ${blogFilters.status === s ? 'selected' : ''}>${s ? (STATUS_LABELS[s] || s) : 'Tous les statuts'}</option>`)
      .join('');

    const categoryOptions = ['', ...BLOG_CATEGORIES]
      .map(c => `<option value="${c}" ${blogFilters.category === c ? 'selected' : ''}>${c ? c : 'Toutes les catégories'}</option>`)
      .join('');

    const canCreate = window.AdminApp.hasPermission(window.AdminApp.currentUser, 'blog.create');

    return `
      <div class="card">
        <div class="card-header">
          <h2>Articles du Blog</h2>
          ${canCreate ? '<button class="btn btn-primary" id="btn-create-post">+ Rédiger un article</button>' : ''}
        </div>
        <div style="display:flex;gap:1rem;align-items:center;margin-bottom:1rem;flex-wrap:wrap;">
          <label>Statut&nbsp;
            <select id="blog-status-filter">${statusOptions}</select>
          </label>
          <label>Catégorie&nbsp;
            <select id="blog-category-filter">${categoryOptions}</select>
          </label>
          <label style="display:flex;align-items:center;gap:0.4rem;">
            <input type="checkbox" id="blog-mine-filter" ${blogFilters.mine ? 'checked' : ''}>
            Mes articles uniquement
          </label>
          <div style="margin-left:auto;display:flex;gap:0.5rem;">
            <input type="text" id="blog-search-filter" placeholder="Rechercher par titre..." value="${escapeHtml(blogFilters.search || '')}" style="padding:0.4rem 0.6rem;font-size:0.9rem;border:1px solid #cbd5e1;border-radius:4px;">
            <button class="btn btn-sm" id="btn-search-blog">Filtrer</button>
          </div>
        </div>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Titre</th>
                <th>Catégorie</th>
                <th>Statut</th>
                <th>Mis en avant</th>
                <th>Auteur</th>
                <th>Mise à jour</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${items.length === 0 ? '<tr><td colspan="7"><div class="empty-state">Aucun article trouvé</div></td></tr>' : items.map(item => `
                <tr>
                  <td>
                    <strong>${escapeHtml(item.title)}</strong>
                    ${item.excerpt ? `<div style="font-size:0.8rem;color:#64748b;max-width:300px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(item.excerpt)}</div>` : ''}
                  </td>
                  <td><span class="badge" style="background:#e0e7ff;color:#3730a3;font-size:0.75rem;">${escapeHtml(item.category)}</span></td>
                  <td>${contentStatusBadge(item.status)}</td>
                  <td>${item.featured ? '<span class="badge badge-warning" style="font-size:0.75rem;">⭐ Oui</span>' : 'Non'}</td>
                  <td>${escapeHtml(item.author ? `${item.author.firstName} ${item.author.lastName}` : '—')}</td>
                  <td>${new Date(item.updatedAt || item.createdAt).toLocaleDateString('fr-FR')}</td>
                  <td>${blogActionButtons(item)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  function forumActionButtons(item) {
    const can = perm => window.AdminApp.hasPermission(window.AdminApp.currentUser, perm);
    const btn = (action, label, cls = '') =>
      `<button class="btn btn-sm ${cls} btn-forum-action" data-action="${action}" data-id="${item.id}" style="margin-right:0.25rem;">${label}</button>`;

    let html = '';
    html += btn('view', 'Consulter');
    if (can('forum.moderate')) {
      html += btn('pin', item.isPinned ? 'Désépingler' : 'Épingler', item.isPinned ? '' : 'btn-outline');
      html += btn('lock', item.isLocked ? 'Déverrouiller' : 'Verrouiller', item.isLocked ? '' : 'btn-outline');
      html += btn('resolve', item.isResolved ? 'Non résolu' : 'Résolu', item.isResolved ? '' : 'btn-outline');
    }
    if (can('forum.delete')) {
      html += btn('delete', 'Supprimer', 'btn-danger');
    }
    return html;
  }

  async function openForumTopicModal(topicId) {
    const existing = document.getElementById('forum-topic-modal-overlay');
    if (existing) existing.remove();

    try {
      const response = await window.AdminApi.forum.getById(topicId);
      const topic = response.data;
      if (!topic) return;

      const overlay = document.createElement('div');
      overlay.id = 'forum-topic-modal-overlay';
      overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:1000;padding:1rem;';
      overlay.innerHTML = `
        <div class="card" style="max-width:720px;width:100%;padding:1.5rem;max-height:90vh;overflow-y:auto;background:var(--bg-card, #fff);box-shadow:0 10px 30px rgba(0,0,0,0.2);border-radius:8px;">
          <div class="card-header" style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:1rem;border-bottom:1px solid #e2e8f0;padding-bottom:0.75rem;">
            <div>
              <div style="display:flex;align-items:center;gap:0.5rem;margin-bottom:0.3rem;">
                <span class="badge" style="background:#e0e7ff;color:#3730a3;font-size:0.8rem;">${escapeHtml(topic.category)}</span>
                ${topic.isPinned ? '<span class="badge badge-warning">📌 Épinglé</span>' : ''}
                ${topic.isLocked ? '<span class="badge badge-danger">🔒 Verrouillé</span>' : ''}
                ${topic.isResolved ? '<span class="badge badge-success">✅ Résolu</span>' : ''}
              </div>
              <h2 style="margin:0;font-size:1.3rem;">${escapeHtml(topic.title)}</h2>
              <div style="font-size:0.85rem;color:#64748b;margin-top:0.25rem;">
                Par ${escapeHtml(topic.author ? `${topic.author.firstName} ${topic.author.lastName}` : 'Utilisateur')} le ${new Date(topic.createdAt).toLocaleString('fr-FR')}
              </div>
            </div>
            <button type="button" id="forum-modal-close-btn" style="border:none;background:transparent;font-size:1.5rem;cursor:pointer;line-height:1;">&times;</button>
          </div>
          <div style="background:#f8fafc;padding:1rem;border-radius:6px;line-height:1.6;font-size:0.95rem;color:#1e293b;white-space:pre-wrap;margin-bottom:1.5rem;">${escapeHtml(topic.content)}</div>
          <h3 style="font-size:1.05rem;margin-bottom:0.75rem;border-bottom:1px solid #f1f5f9;padding-bottom:0.4rem;">
            Réponses (${topic.replies?.length || 0})
          </h3>
          <div style="display:flex;flex-direction:column;gap:0.75rem;margin-bottom:1rem;">
            ${!topic.replies || topic.replies.length === 0
          ? '<p class="text-muted" style="font-size:0.9rem;">Aucune réponse sur ce sujet pour le moment.</p>'
          : topic.replies.map(r => `
                <div style="background:#fff;border:1px solid #e2e8f0;border-radius:6px;padding:0.75rem 1rem;">
                  <div style="display:flex;justify-content:space-between;font-size:0.8rem;color:#64748b;margin-bottom:0.3rem;">
                    <strong>${escapeHtml(r.author ? `${r.author.firstName} ${r.author.lastName}` : 'Membre')}</strong>
                    <span>${new Date(r.createdAt).toLocaleString('fr-FR')}</span>
                  </div>
                  <div style="font-size:0.9rem;color:#334155;line-height:1.5;white-space:pre-wrap;">${escapeHtml(r.content)}</div>
                </div>
              `).join('')}
          </div>
          <div style="display:flex;gap:0.5rem;justify-content:flex-end;border-top:1px solid #e2e8f0;padding-top:0.75rem;">
            <button type="button" class="btn" id="forum-modal-close">Fermer</button>
          </div>
        </div>
      `;
      document.body.appendChild(overlay);

      const close = () => overlay.remove();
      overlay.querySelector('#forum-modal-close').addEventListener('click', close);
      overlay.querySelector('#forum-modal-close-btn').addEventListener('click', close);
      overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    } catch (error) {
      showToast(error.message, 'error');
    }
  }

  async function loadForum() {
    const response = await window.AdminApi.forum.getAll({
      search: forumFilters.search || undefined,
      status: forumFilters.status || undefined,
      category: forumFilters.category || undefined,
      limit: 50,
    });
    const items = response.data || [];
    items.forEach(t => { forumCache[t.id] = t; });

    const statusOptions = [
      { value: '', label: 'Tous les sujets' },
      { value: 'pinned', label: '📌 Épinglés uniquement' },
      { value: 'resolved', label: '✅ Résolus uniquement' },
      { value: 'locked', label: '🔒 Verrouillés uniquement' },
    ].map(opt => `<option value="${opt.value}" ${forumFilters.status === opt.value ? 'selected' : ''}>${opt.label}</option>`).join('');

    return `
      <div class="card">
        <div class="card-header">
          <h2>Modération du Forum</h2>
          <span class="badge badge-primary">${response.pagination?.total ?? items.length} sujets</span>
        </div>
        <div style="display:flex;gap:1rem;align-items:center;margin-bottom:1rem;flex-wrap:wrap;">
          <label>Filtre état&nbsp;
            <select id="forum-status-filter">${statusOptions}</select>
          </label>
          <div style="margin-left:auto;display:flex;gap:0.5rem;">
            <input type="text" id="forum-search-filter" placeholder="Rechercher sujet, mot-clé..." value="${escapeHtml(forumFilters.search || '')}" style="padding:0.4rem 0.6rem;font-size:0.9rem;border:1px solid #cbd5e1;border-radius:4px;">
            <button class="btn btn-sm" id="btn-search-forum">Rechercher</button>
          </div>
        </div>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Titre</th>
                <th>Catégorie</th>
                <th>Auteur</th>
                <th>Réponses</th>
                <th>Vues</th>
                <th>État</th>
                <th>Date</th>
                <th>Actions de modération</th>
              </tr>
            </thead>
            <tbody>
              ${items.length === 0 ? '<tr><td colspan="8"><div class="empty-state">Aucun sujet trouvé</div></td></tr>' : items.map(item => `
                <tr>
                  <td>
                    <strong>${escapeHtml(item.title)}</strong>
                  </td>
                  <td><span class="badge" style="background:#e0e7ff;color:#3730a3;font-size:0.75rem;">${escapeHtml(item.category)}</span></td>
                  <td>${escapeHtml(item.author ? `${item.author.firstName} ${item.author.lastName}` : 'Anonyme')}</td>
                  <td><span class="badge badge-info" style="font-size:0.75rem;">💬 ${item.replyCount || 0}</span></td>
                  <td>${item.views || 0}</td>
                  <td>
                    ${item.isPinned ? '<span class="badge badge-warning" style="font-size:0.75rem;">📌 Épinglé</span> ' : ''}
                    ${item.isLocked ? '<span class="badge badge-danger" style="font-size:0.75rem;">🔒 Verrouillé</span> ' : ''}
                    ${item.isResolved ? '<span class="badge badge-success" style="font-size:0.75rem;">✅ Résolu</span> ' : ''}
                    ${!item.isPinned && !item.isLocked && !item.isResolved ? '<span class="badge badge-muted" style="font-size:0.75rem;">Normal</span>' : ''}
                  </td>
                  <td>${new Date(item.createdAt).toLocaleDateString('fr-FR')}</td>
                  <td>${forumActionButtons(item)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // ===== Utilisateurs =====
  const userFilters = { search: '', role: '', status: '', page: 1, limit: 20 };
  let lastUsersItems = [];
  let lastUsersPagination = null;

  async function loadUsers() {
    const response = await window.AdminApi.users.getAll(userFilters);
    const items = response.data || [];
    lastUsersItems = items;
    const pagination = response.pagination || {
      page: userFilters.page || 1,
      limit: userFilters.limit || 20,
      total: items.length,
      totalPages: Math.max(1, Math.ceil(items.length / (userFilters.limit || 20)))
    };
    lastUsersPagination = pagination;
    const user = window.AdminApp.currentUser;
    const can = permission => window.AdminApp.hasPermission(user, permission);

    return `
      <div class="card">
        <div class="card-header">
          <div>
            <h2>Utilisateurs</h2>
            <span class="badge badge-primary">${pagination.total ?? items.length} comptes</span>
          </div>
          <button class="btn btn-secondary" id="btn-export-users-csv" style="display:inline-flex;align-items:center;gap:0.4rem;">
            <span>📥</span> <span>Exporter CSV</span>
          </button>
        </div>
        <div style="display:flex;gap:1rem;align-items:center;margin-bottom:1rem;flex-wrap:wrap;">
          <input type="text" id="user-search" placeholder="Rechercher (email, nom)…" value="${escapeHtml(userFilters.search)}" style="min-width:220px;">
          <label>Rôle de base
            <select id="user-role-filter">
              <option value="" ${userFilters.role === '' ? 'selected' : ''}>Tous</option>
              <option value="MEMBER" ${userFilters.role === 'MEMBER' ? 'selected' : ''}>MEMBER</option>
              <option value="ADMIN" ${userFilters.role === 'ADMIN' ? 'selected' : ''}>ADMIN</option>
              <option value="ULTRA_ADMIN" ${userFilters.role === 'ULTRA_ADMIN' ? 'selected' : ''}>ULTRA_ADMIN</option>
              <option value="VISITOR" ${userFilters.role === 'VISITOR' ? 'selected' : ''}>VISITOR</option>
            </select>
          </label>
          <label>Statut
            <select id="user-status-filter">
              <option value="" ${userFilters.status === '' ? 'selected' : ''}>Tous</option>
              <option value="active" ${userFilters.status === 'active' ? 'selected' : ''}>Actifs</option>
              <option value="inactive" ${userFilters.status === 'inactive' ? 'selected' : ''}>Désactivés</option>
            </select>
          </label>
        </div>
        <div class="table-wrapper">
          <table>
            <thead><tr><th>Nom</th><th>Email</th><th>Rôle(s)</th><th>Statut</th><th>Dernière connexion</th><th>Actions</th></tr></thead>
            <tbody>
              ${items.length === 0 ? '<tr><td colspan="6"><div class="empty-state">Aucun utilisateur</div></td></tr>' : items.map(u => `
                <tr>
                  <td>${escapeHtml(u.firstName)} ${escapeHtml(u.lastName)}</td>
                  <td>${escapeHtml(u.email)}</td>
                  <td>
                    <span class="badge badge-primary">${u.role}</span>
                    ${(u.adminRoles || []).map(r => r === 'MENTOR_EXPERT'
                      ? `<span class="badge badge-mentor">🎓 Mentor</span>`
                      : `<span class="badge badge-muted">${escapeHtml(r)}</span>`
                    ).join(' ')}
                  </td>
                  <td>
                    ${u.isActive ? '<span class="badge badge-success">Actif</span>' : '<span class="badge badge-danger">Désactivé</span>'}
                    ${u.isVerified ? '' : '<span class="badge badge-warning">Non vérifié</span>'}
                  </td>
                  <td>${u.lastLoginAt ? new Date(u.lastLoginAt).toLocaleString('fr-FR') : '—'}</td>
                  <td>
                    <div style="display:flex;gap:0.35rem;flex-wrap:wrap;align-items:center;">
                      <button class="btn btn-primary btn-sm" data-user-action="dossier" data-user-id="${u.id}" title="Consulter le dossier complet">📁 Dossier</button>
                      ${can('users.suspend') ? (u.isActive
                        ? `<button class="btn btn-warning btn-sm" data-user-action="deactivate" data-user-id="${u.id}">Désactiver</button>`
                        : `<button class="btn btn-success btn-sm" data-user-action="activate" data-user-id="${u.id}">Activer</button>`) : ''}
                      ${can('users.verify') && !u.isVerified ? `<button class="btn btn-sm" data-user-action="verify" data-user-id="${u.id}">Vérifier</button>` : ''}
                      ${can('admins.assign') ? `<button class="btn btn-sm" data-user-action="roles" data-user-id="${u.id}" data-user-name="${escapeHtml(u.firstName + ' ' + u.lastName)}">Rôles</button>` : ''}
                      ${can('admins.assign') ? (
                        (u.adminRoles || []).includes('MENTOR_EXPERT')
                          ? `<button class="btn btn-outline-danger btn-sm" data-user-action="revoke-mentor" data-user-id="${u.id}" data-user-name="${escapeHtml(u.firstName + ' ' + u.lastName)}" title="Révoquer le statut de Mentor">Révoquer Mentor</button>`
                          : `<button class="btn btn-sm" data-user-action="nominate-mentor" data-user-id="${u.id}" data-user-name="${escapeHtml(u.firstName + ' ' + u.lastName)}" style="background:linear-gradient(135deg,#fef3c7,#fde68a);color:#92400e;border:1px solid #f59e0b;font-weight:600;" title="Nommer au rang de Mentor & Expert">🎓 Nommer Mentor</button>`
                      ) : ''}
                      ${can('users.delete') && u.id !== user.id ? `<button class="btn btn-danger btn-sm" data-user-action="delete" data-user-id="${u.id}">Supprimer</button>` : ''}
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:1rem;flex-wrap:wrap;gap:0.75rem;">
          <div style="font-size:0.88rem;color:var(--color-muted);">
            Page <strong>${pagination.page || 1}</strong> sur <strong>${pagination.totalPages || 1}</strong> (${pagination.total ?? items.length} utilisateurs au total)
          </div>
          <div style="display:flex;gap:0.5rem;">
            <button type="button" class="btn btn-sm" id="user-prev-page" ${(pagination.page || 1) <= 1 ? 'disabled' : ''}>← Précédent</button>
            <button type="button" class="btn btn-sm" id="user-next-page" ${(pagination.page || 1) >= (pagination.totalPages || 1) ? 'disabled' : ''}>Suivant →</button>
          </div>
        </div>
      </div>
    `;
  }

  // ===== Modale Dossier Membre / Utilisateur =====
  async function openUserDossierModal(userId) {
    const existing = document.getElementById('user-dossier-modal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'user-dossier-modal';
    overlay.className = 'dossier-modal-overlay';
    overlay.innerHTML = `
      <div class="dossier-modal-card">
        <div class="dossier-modal-header">
          <h2 style="margin:0;font-size:1.2rem;display:flex;align-items:center;gap:0.5rem;">
            <span>📁</span> Dossier Membre
          </h2>
          <button class="sidebar-close-btn" id="dossier-modal-close" style="position:static;font-size:1.5rem;">&times;</button>
        </div>
        <div class="dossier-modal-body" style="padding:3rem 1.5rem;text-align:center;">
          <div style="font-size:2rem;margin-bottom:0.5rem;">⏳</div>
          <p style="color:var(--color-muted);font-weight:500;">Chargement du dossier complet...</p>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    const close = () => overlay.remove();
    overlay.querySelector('#dossier-modal-close').addEventListener('click', close);
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });

    try {
      const response = await window.AdminApi.users.getDossier(userId);
      const u = response.data;
      const currentUser = window.AdminApp.currentUser;
      const can = permission => window.AdminApp.hasPermission(currentUser, permission);

      const initials = ((u.firstName?.[0] || '') + (u.lastName?.[0] || '')).toUpperCase() || 'U';
      const createdDate = new Date(u.createdAt).toLocaleDateString('fr-FR', {
        day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit'
      });
      const lastLoginStr = u.lastLoginAt
        ? new Date(u.lastLoginAt).toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
        : 'Aucune connexion enregistrée';

      const memberships = u.memberships || [];
      const latestMembership = memberships[0];
      const pendingMembership = memberships.find(m => m.status === 'PENDING');
      const candidateName = `${u.firstName || ''} ${u.lastName || ''}`.trim() || 'le candidat';

      const adminRoles = (u.adminRoles || []).map(r => r.role?.name).filter(Boolean);
      const isMentor = adminRoles.includes('MENTOR_EXPERT');

      const modalContent = `
        <div class="dossier-modal-header">
          <div style="display:flex;align-items:center;gap:0.6rem;">
            <span style="font-size:1.3rem;">📁</span>
            <div>
              <h2 style="margin:0;font-size:1.2rem;color:#0f172a;">Dossier de suivi : ${escapeHtml(u.firstName)} ${escapeHtml(u.lastName)}</h2>
              <span style="font-size:0.8rem;color:#64748b;">ID : ${escapeHtml(u.id)}</span>
            </div>
          </div>
          <button class="sidebar-close-btn" id="dossier-modal-close" style="position:static;font-size:1.5rem;" aria-label="Fermer">&times;</button>
        </div>

        <div class="dossier-modal-body">
          <!-- Hero Profil & Identité -->
          <div class="dossier-profile-hero">
            <div class="dossier-avatar">${initials}</div>
            <div class="dossier-profile-info">
              <div class="dossier-profile-name">
                <span>${escapeHtml(u.firstName)} ${escapeHtml(u.lastName)}</span>
                <span class="badge badge-primary">${u.role}</span>
                ${isMentor ? '<span class="badge badge-mentor">🎓 Mentor & Expert</span>' : ''}
              </div>
              <div class="dossier-profile-email">
                <a href="mailto:${escapeHtml(u.email)}" style="color:var(--color-primary);text-decoration:none;display:inline-flex;align-items:center;gap:0.35rem;">
                  <span>✉️</span> ${escapeHtml(u.email)}
                </a>
              </div>
              <div class="dossier-pills-row">
                <span class="badge ${u.isActive ? 'badge-success' : 'badge-danger'}">
                  ${u.isActive ? '🟢 Compte Actif' : '🔴 Compte Suspendu / Inactif'}
                </span>
                <span class="badge ${u.isVerified ? 'badge-success' : 'badge-warning'}">
                  ${u.isVerified ? '✓ Email Vérifié' : '⚠️ Non vérifié'}
                </span>
                ${u.twoFactorEnabled ? '<span class="badge badge-primary">🔐 2FA Activé</span>' : ''}
                ${adminRoles.filter(r => r !== 'MENTOR_EXPERT').map(r => `<span class="badge badge-muted">🛡️ ${escapeHtml(r)}</span>`).join('')}
              </div>
            </div>
          </div>

          <!-- Métadonnées Rapides -->
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:0.85rem;background:#f8fafc;padding:0.9rem 1.1rem;border-radius:10px;border:1px solid #e2e8f0;font-size:0.85rem;">
            <div>
              <span style="color:#64748b;display:block;font-size:0.78rem;">Date d'inscription</span>
              <strong style="color:#0f172a;">${createdDate}</strong>
            </div>
            <div>
              <span style="color:#64748b;display:block;font-size:0.78rem;">Dernière connexion</span>
              <strong style="color:#0f172a;">${lastLoginStr}</strong>
            </div>
            <div>
              <span style="color:#64748b;display:block;font-size:0.78rem;">Statut d'adhésion</span>
              <strong style="color:#0f172a;">
                ${pendingMembership ? '🟡 En attente de validation' : latestMembership ? (latestMembership.status === 'APPROVED' ? '🟢 Adhérent validé' : '🔴 Candidature refusée') : '⚪ Membre direct'}
              </strong>
            </div>
          </div>

          <!-- SECTION CLÉ : MOTIVATION D'INTÉGRATION AU CLUB -->
          <div class="dossier-motivation-box">
            <div class="dossier-motivation-header">
              <h3 class="dossier-motivation-title">
                <span>🎯</span> Motivation & Raisons d'intégration au club
              </h3>
              ${latestMembership ? `
                <span class="badge ${latestMembership.status === 'APPROVED' ? 'badge-success' : latestMembership.status === 'PENDING' ? 'badge-warning' : 'badge-danger'}">
                  ${latestMembership.status === 'APPROVED' ? 'Adhésion approuvée' : latestMembership.status === 'PENDING' ? 'En attente d\'approbation' : 'Adhésion refusée'}
                </span>
              ` : '<span class="badge badge-muted">Sans demande formelle</span>'}
            </div>

            ${latestMembership ? `
              <div class="dossier-motivation-quote">
                ${latestMembership.motivation && latestMembership.motivation.trim().length > 0
                  ? escapeHtml(latestMembership.motivation)
                  : '<span style="color:#94a3b8;font-style:italic;">(Le candidat n\'a pas rédigé de lettre de motivation facultative lors de sa demande.)</span>'
                }
              </div>
              <div class="dossier-motivation-meta">
                <span>Demande soumise le <strong>${new Date(latestMembership.createdAt).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</strong></span>
                ${latestMembership.reviewedAt ? `<span>Traitée le <strong>${new Date(latestMembership.reviewedAt).toLocaleDateString('fr-FR')}</strong></span>` : ''}
              </div>

              ${latestMembership.status === 'PENDING' && can('membership.approve') ? `
                <div style="margin-top:1rem;display:flex;gap:0.6rem;padding-top:0.85rem;border-top:1px dashed #fcd34d;">
                  <button class="btn btn-success btn-sm" id="dossier-act-approve-membership" data-membership-id="${latestMembership.id}" data-candidate-name="${escapeHtml(candidateName)}">
                    ✅ Approuver cette adhésion
                  </button>
                  <button class="btn btn-danger btn-sm" id="dossier-act-reject-membership" data-membership-id="${latestMembership.id}" data-candidate-name="${escapeHtml(candidateName)}">
                    ❌ Refuser cette adhésion
                  </button>
                </div>
              ` : ''}
            ` : `
              <div style="padding:1rem;color:#64748b;font-size:0.9rem;background:#ffffff;border-radius:8px;border-left:4px solid #cbd5e1;">
                Aucune demande d'adhésion formelle enregistrée pour ce profil (compte créé directement par un administrateur ou sans procédure d'adhésion initiale).
              </div>
            `}
          </div>

          <!-- Section Contributions & Activité -->
          <div>
            <h3 style="margin:0 0 0.75rem;font-size:1.05rem;color:#0f172a;display:flex;align-items:center;gap:0.5rem;">
              <span>📊</span> Activité & Contributions
            </h3>
            <div class="dossier-metrics-grid">
              <div class="dossier-metric-card">
                <div class="dossier-metric-val">${u._count?.topics || 0}</div>
                <div class="dossier-metric-lbl">Sujets Forum</div>
              </div>
              <div class="dossier-metric-card">
                <div class="dossier-metric-val">${u._count?.replies || 0}</div>
                <div class="dossier-metric-lbl">Réponses Forum</div>
              </div>
              <div class="dossier-metric-card">
                <div class="dossier-metric-val">${u._count?.posts || 0}</div>
                <div class="dossier-metric-lbl">Articles Blog</div>
              </div>
              <div class="dossier-metric-card">
                <div class="dossier-metric-val">${u._count?.createdFormations || 0}</div>
                <div class="dossier-metric-lbl">Formations</div>
              </div>
              <div class="dossier-metric-card">
                <div class="dossier-metric-val">${u._count?.createdJobs || 0}</div>
                <div class="dossier-metric-lbl">Fiches Métiers</div>
              </div>
            </div>
          </div>

          <!-- Section Journal d'Audit Récent -->
          ${(u.recentLogs || []).length > 0 ? `
            <div>
              <h3 style="margin:0 0 0.75rem;font-size:1.05rem;color:#0f172a;display:flex;align-items:center;gap:0.5rem;">
                <span>📜</span> Historique d'Audit Récent
              </h3>
              <div style="display:flex;flex-direction:column;gap:0.45rem;max-height:200px;overflow-y:auto;border:1px solid #e2e8f0;border-radius:10px;padding:0.6rem;background:#f8fafc;">
                ${u.recentLogs.map(l => `
                  <div style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem;font-size:0.8rem;padding:0.35rem 0.5rem;background:#ffffff;border-radius:6px;border:1px solid #f1f5f9;">
                    <div>
                      <strong style="color:#1e293b;">${escapeHtml(l.action)}</strong>
                      <span style="color:#64748b;margin-left:0.35rem;">(${escapeHtml(l.module)})</span>
                    </div>
                    <div style="display:flex;align-items:center;gap:0.5rem;">
                      <span class="badge badge-sm ${l.result === 'SUCCESS' || l.result === 'APPROVED' ? 'badge-success' : 'badge-muted'}">${escapeHtml(l.result || 'OK')}</span>
                      <span style="color:#94a3b8;font-size:0.75rem;">${new Date(l.createdAt).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>

        <!-- Footer Actions Rapides -->
        <div class="dossier-modal-footer">
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center;">
            ${can('users.suspend') ? `
              <button class="btn btn-sm ${u.isActive ? 'btn-warning' : 'btn-success'}" id="dossier-act-toggle-status">
                ${u.isActive ? 'Suspendre le compte' : 'Activer le compte'}
              </button>
            ` : ''}
            ${can('users.verify') && !u.isVerified ? `
              <button class="btn btn-sm btn-primary" id="dossier-act-verify">
                ✓ Marquer comme vérifié
              </button>
            ` : ''}
            ${can('admins.assign') ? `
              <button class="btn btn-sm" id="dossier-act-roles">
                🛡️ Gérer les rôles
              </button>
            ` : ''}
          </div>
          <button class="btn btn-ghost btn-sm" id="dossier-modal-close-footer">Fermer le dossier</button>
        </div>
      `;

      overlay.querySelector('.dossier-modal-card').innerHTML = modalContent;

      // Écouteurs de fermeture
      overlay.querySelectorAll('#dossier-modal-close, #dossier-modal-close-footer').forEach(btn => {
        btn.addEventListener('click', close);
      });

      // Actions rapides depuis le dossier :
      // 1. Approuver adhésion
      overlay.querySelector('#dossier-act-approve-membership')?.addEventListener('click', (e) => {
        const membershipId = e.currentTarget.getAttribute('data-membership-id');
        const candName = e.currentTarget.getAttribute('data-candidate-name') || candidateName;
        openApproveMembershipModal(membershipId, candName, () => {
          close();
          const cur = window.location.hash.replace('#', '') || 'dashboard';
          loadPage(cur);
        });
      });

      // 2. Refuser adhésion
      overlay.querySelector('#dossier-act-reject-membership')?.addEventListener('click', (e) => {
        const membershipId = e.currentTarget.getAttribute('data-membership-id');
        const candName = e.currentTarget.getAttribute('data-candidate-name') || candidateName;
        openRejectMembershipModal(membershipId, candName, () => {
          close();
          const cur = window.location.hash.replace('#', '') || 'dashboard';
          loadPage(cur);
        });
      });

      // 3. Activer / Suspendre
      overlay.querySelector('#dossier-act-toggle-status')?.addEventListener('click', async () => {
        try {
          if (u.isActive) {
            await window.AdminApi.users.deactivate(u.id);
            showToast('Compte désactivé', 'warning');
          } else {
            await window.AdminApi.users.activate(u.id);
            showToast('Compte activé', 'success');
          }
          openUserDossierModal(u.id);
          const cur = window.location.hash.replace('#', '') || 'users';
          loadPage(cur);
        } catch (err) {
          showToast(err.message, 'error');
        }
      });

      // 4. Vérifier
      overlay.querySelector('#dossier-act-verify')?.addEventListener('click', async () => {
        try {
          await window.AdminApi.users.verify(u.id);
          showToast('Compte vérifié', 'success');
          openUserDossierModal(u.id);
          const cur = window.location.hash.replace('#', '') || 'users';
          loadPage(cur);
        } catch (err) {
          showToast(err.message, 'error');
        }
      });

      // 5. Rôles
      overlay.querySelector('#dossier-act-roles')?.addEventListener('click', () => {
        close();
        openUserRolesModal(u.id, `${u.firstName} ${u.lastName}`);
      });

    } catch (err) {
      overlay.querySelector('.dossier-modal-body').innerHTML = `
        <div class="empty-state" style="padding:2rem 1rem;">
          <div style="font-size:2rem;color:var(--color-danger);margin-bottom:0.5rem;">⚠️</div>
          <p><strong>Impossible de charger le dossier</strong></p>
          <p style="color:var(--color-muted);font-size:0.85rem;">${escapeHtml(err.message)}</p>
          <button class="btn btn-sm" id="dossier-modal-retry" style="margin-top:1rem;">Réessayer</button>
        </div>
      `;
      overlay.querySelector('#dossier-modal-retry')?.addEventListener('click', () => openUserDossierModal(userId));
    }
  }

  // Modale de gestion des rôles d'un utilisateur (attribuer / retirer)
  async function openUserRolesModal(userId, userName) {
    const [rolesResponse, userRolesResponse] = await Promise.all([
      window.AdminApi.rbac.getRoles(),
      window.AdminApi.rbac.getUserRoles(userId).catch(() => ({ data: [] })),
    ]);
    const allRoles = rolesResponse.data || [];
    const assignments = (userRolesResponse.data || []).filter(a => a.isActive);

    const overlay = document.createElement('div');
    overlay.id = 'user-roles-modal';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:1000;';
    overlay.innerHTML = `
      <div class="card" style="max-width:560px;width:90%;padding:1.5rem;max-height:90vh;overflow:auto;">
        <div class="card-header" style="display:flex;justify-content:space-between;align-items:center;">
          <h2>Rôles de ${escapeHtml(userName)}</h2>
          <button type="button" class="btn btn-ghost btn-sm" id="user-roles-header-close" style="font-size:1.25rem;line-height:1;padding:0.25rem 0.5rem;" title="Fermer">&times;</button>
        </div>
        <div style="display:flex;flex-direction:column;gap:0.6rem;margin-bottom:1.2rem;">
          ${assignments.length === 0 ? '<div class="empty-state">Aucun rôle admin</div>' : assignments.map(a => `
            <div style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem;">
              <div>
                <strong>${escapeHtml(a.role.name)}</strong>
                <span class="badge ${a.status === 'APPROVED' ? 'badge-success' : a.status === 'PENDING' ? 'badge-warning' : 'badge-danger'}">${a.status}</span>
              </div>
              <button class="btn btn-danger btn-sm" data-remove-role="${a.role.id}">Retirer</button>
            </div>
          `).join('')}
        </div>
        <div style="display:flex;gap:0.5rem;align-items:center;">
          <select id="assign-role-select" style="flex:1;">
            ${allRoles.map(r => `<option value="${r.id}">${escapeHtml(r.name)}</option>`).join('')}
          </select>
          <button class="btn btn-primary" id="assign-role-btn">Attribuer</button>
        </div>
        <p class="text-muted" style="margin-top:0.8rem;font-size:0.85rem;">Les rôles soumis à approbation restent en attente jusqu'à validation.</p>
        <div style="display:flex;justify-content:flex-end;margin-top:1rem;">
          <button class="btn" id="user-roles-close">Fermer</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    overlay.querySelector('#user-roles-header-close')?.addEventListener('click', () => overlay.remove());
    overlay.querySelector('#user-roles-close').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });

    overlay.querySelector('#assign-role-btn').addEventListener('click', async () => {
      const roleId = overlay.querySelector('#assign-role-select').value;
      try {
        await window.AdminApi.rbac.assignRole(userId, roleId);
        showToast('Rôle attribué', 'success');
        overlay.remove();
        loadPage('users');
      } catch (error) {
        showToast(error.message, 'error');
      }
    });

    overlay.querySelectorAll('[data-remove-role]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const roleId = btn.getAttribute('data-remove-role');
        if (!confirm('Retirer ce rôle à l\'utilisateur ?')) return;
        try {
          await window.AdminApi.rbac.removeRoleAssignment(userId, roleId);
          showToast('Rôle retiré', 'warning');
          overlay.remove();
          loadPage('users');
        } catch (error) {
          showToast(error.message, 'error');
        }
      });
    });
  }

  // Modale de distinction d'un Mentor & Expert d'Industrie
  async function openNominateMentorModal() {
    try {
      const usersRes = await window.AdminApi.users.getAll({ limit: 100 });
      const allUsers = usersRes?.data || [];

      const overlay = document.createElement('div');
      overlay.id = 'nominate-mentor-modal';
      overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.55);display:flex;align-items:center;justify-content:center;z-index:1000;backdrop-filter:blur(3px);';
      overlay.innerHTML = `
        <div class="card" style="max-width:540px;width:92%;padding:1.5rem;max-height:90vh;overflow:auto;border-top:4px solid #f59e0b;">
          <div class="card-header" style="margin-bottom:1rem;display:flex;justify-content:space-between;align-items:center;">
            <h2>🎓 Nommer un Mentor & Expert</h2>
            <button type="button" class="btn btn-ghost btn-sm" id="nominate-header-close" style="font-size:1.25rem;line-height:1;padding:0.25rem 0.5rem;" title="Fermer">&times;</button>
          </div>
          <p style="color:var(--color-muted);font-size:0.88rem;margin-bottom:1.25rem;">
            Sélectionnez un membre ou un administrateur pour l'élever au rang officiel de <strong>Mentor & Expert d'Industrie</strong>. Ce statut confère des droits d'animation pédagogique et met en valeur son expertise sur la plateforme.
          </p>

          <div style="margin-bottom:1.25rem;">
            <label style="display:block;font-weight:600;margin-bottom:0.4rem;">Choisir l'utilisateur :</label>
            <select id="nominate-user-select" style="width:100%;padding:0.6rem;border:1px solid var(--color-border);border-radius:0.4rem;background:var(--color-surface);font-size:0.95rem;">
              <option value="">-- Sélectionner un utilisateur --</option>
              ${allUsers.map(u => {
                const isMentor = (u.adminRoles || []).includes('MENTOR_EXPERT');
                return `<option value="${u.id}" ${isMentor ? 'disabled' : ''}>
                  ${escapeHtml(u.firstName)} ${escapeHtml(u.lastName)} (${escapeHtml(u.email)}) - [${u.role}] ${isMentor ? '⭐ Déjà Mentor' : ''}
                </option>`;
              }).join('')}
            </select>
          </div>

          <div style="display:flex;justify-content:flex-end;gap:0.75rem;margin-top:1.5rem;">
            <button class="btn btn-ghost" id="nominate-close-btn">Annuler</button>
            <button class="btn btn-primary" id="nominate-confirm-btn" style="background:linear-gradient(135deg,#f59e0b,#d97706);border:none;">
              🎓 Confirmer la nomination
            </button>
          </div>
        </div>
      `;
      document.body.appendChild(overlay);

      overlay.querySelector('#nominate-header-close')?.addEventListener('click', () => overlay.remove());
      overlay.querySelector('#nominate-close-btn').addEventListener('click', () => overlay.remove());
      overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });

      overlay.querySelector('#nominate-confirm-btn').addEventListener('click', async () => {
        const select = overlay.querySelector('#nominate-user-select');
        const userId = select.value;
        if (!userId) {
          showToast('Veuillez sélectionner un utilisateur', 'warning');
          return;
        }

        const confirmBtn = overlay.querySelector('#nominate-confirm-btn');
        confirmBtn.disabled = true;
        confirmBtn.textContent = 'Nomination en cours...';

        try {
          const res = await window.AdminApi.rbac.nominateMentor(userId);
          showToast(res.message || 'Mentor nommé avec succès !', 'success');
          overlay.remove();
          loadPage('dashboard');
        } catch (err) {
          showToast(err.message || 'Erreur lors de la nomination', 'error');
          confirmBtn.disabled = false;
          confirmBtn.textContent = '🎓 Confirmer la nomination';
        }
      });
    } catch (e) {
      showToast('Impossible de charger les utilisateurs : ' + (e.message || e), 'error');
    }
  }

  async function openApprovalPreviewModal(workflowId) {
    const existing = document.getElementById('approval-preview-overlay');
    if (existing) existing.remove();

    try {
      const response = await window.AdminApi.approvals.get(workflowId);
      const w = response.data;
      if (!w) return;

      let resourceDetails = '';
      try {
        if (w.resourceType === 'Formation') {
          const res = await window.AdminApi.formations.get(w.resourceId);
          const f = res.data;
          resourceDetails = `
            <div style="background:#f8fafc;padding:1rem;border-radius:6px;margin:1rem 0;border-left:4px solid #4f46e5;">
              <h4 style="margin:0 0 0.5rem 0;">${escapeHtml(f.title)} (${escapeHtml(f.category || 'Général')})</h4>
              <p style="margin:0.5rem 0;color:#475569;">${escapeHtml(f.description)}</p>
              ${f.duration ? `<div><strong>Durée :</strong> ${escapeHtml(f.duration)}</div>` : ''}
              ${f.location ? `<div><strong>Lieu :</strong> ${escapeHtml(f.location)}</div>` : ''}
              ${f.content ? `<div style="margin-top:0.5rem;white-space:pre-wrap;font-size:0.85rem;color:#334155;background:#fff;padding:0.75rem;border-radius:4px;">${escapeHtml(f.content)}</div>` : ''}
            </div>
          `;
        } else if (w.resourceType === 'Job') {
          const res = await window.AdminApi.jobs.get(w.resourceId);
          const j = res.data;
          resourceDetails = `
            <div style="background:#f8fafc;padding:1rem;border-radius:6px;margin:1rem 0;border-left:4px solid #10b981;">
              <h4 style="margin:0 0 0.5rem 0;">${escapeHtml(j.title)} (${escapeHtml(j.category)})</h4>
              <p style="margin:0.5rem 0;color:#475569;">${escapeHtml(j.description)}</p>
              ${j.salary ? `<div><strong>Salaire :</strong> ${escapeHtml(j.salary)}</div>` : ''}
              ${j.location ? `<div><strong>Lieu :</strong> ${escapeHtml(j.location)}</div>` : ''}
              ${j.content ? `<div style="margin-top:0.5rem;white-space:pre-wrap;font-size:0.85rem;color:#334155;background:#fff;padding:0.75rem;border-radius:4px;">${escapeHtml(j.content)}</div>` : ''}
            </div>
          `;
        } else if (w.resourceType === 'Post') {
          const res = await window.AdminApi.blog.get(w.resourceId);
          const p = res.data;
          resourceDetails = `
            <div style="background:#f8fafc;padding:1rem;border-radius:6px;margin:1rem 0;border-left:4px solid #f59e0b;">
              <h4 style="margin:0 0 0.5rem 0;">${escapeHtml(p.title)} (${escapeHtml(p.category)})</h4>
              <p style="margin:0.5rem 0;color:#475569;">${escapeHtml(p.excerpt || '')}</p>
              ${p.content ? `<div style="margin-top:0.5rem;white-space:pre-wrap;font-size:0.85rem;color:#334155;background:#fff;padding:0.75rem;border-radius:4px;">${escapeHtml(p.content)}</div>` : ''}
            </div>
          `;
        }
      } catch (e) {
        resourceDetails = `<p class="text-muted">Aperçu du contenu indisponible (${escapeHtml(e.message)})</p>`;
      }

      const overlay = document.createElement('div');
      overlay.id = 'approval-preview-overlay';
      overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:1000;padding:1rem;';
      overlay.innerHTML = `
        <div class="card" style="max-width:680px;width:100%;padding:1.5rem;max-height:90vh;overflow-y:auto;background:var(--bg-card, #fff);box-shadow:0 10px 30px rgba(0,0,0,0.2);border-radius:8px;">
          <div class="card-header" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;border-bottom:1px solid #e2e8f0;padding-bottom:0.75rem;">
            <h2 style="margin:0;font-size:1.25rem;">Examen de la demande — ${escapeHtml(w.resourceType)}</h2>
            <button type="button" id="approval-preview-close-btn" style="border:none;background:transparent;font-size:1.5rem;cursor:pointer;line-height:1;">&times;</button>
          </div>
          <div>
            <p style="margin:0.25rem 0;"><strong>Demandeur :</strong> ${escapeHtml(w.createdBy ? `${w.createdBy.firstName} ${w.createdBy.lastName} (${w.createdBy.email})` : '—')}</p>
            <p style="margin:0.25rem 0;"><strong>Date de soumission :</strong> ${new Date(w.createdAt).toLocaleString('fr-FR')}</p>
            <p style="margin:0.25rem 0;"><strong>Objet :</strong> ${escapeHtml(w.comment || 'Demande de publication')}</p>
          </div>
          ${resourceDetails}
          <div style="margin-top:1rem;border-top:1px solid #e2e8f0;padding-top:1rem;">
            <label style="display:block;margin-bottom:0.5rem;font-size:0.9rem;font-weight:600;">Commentaire / Motif :
              <input type="text" id="approval-decision-comment" placeholder="Ex: Contenu conforme et validé" style="width:100%;padding:0.5rem;margin-top:0.25rem;border:1px solid #cbd5e1;border-radius:4px;">
            </label>
          </div>
          <div style="display:flex;gap:0.5rem;justify-content:flex-end;margin-top:1rem;">
            <button type="button" class="btn" id="approval-preview-cancel">Fermer</button>
            <button type="button" class="btn btn-danger" id="approval-preview-reject">Refuser (notifier)</button>
            <button type="button" class="btn btn-success" id="approval-preview-approve">Approuver &amp; Publier</button>
          </div>
        </div>
      `;
      document.body.appendChild(overlay);

      const close = () => overlay.remove();
      overlay.querySelector('#approval-preview-cancel').addEventListener('click', close);
      overlay.querySelector('#approval-preview-close-btn').addEventListener('click', close);
      overlay.addEventListener('click', e => { if (e.target === overlay) close(); });

      overlay.querySelector('#approval-preview-approve').addEventListener('click', async () => {
        const comment = overlay.querySelector('#approval-decision-comment').value || 'Approuvé';
        try {
          await window.AdminApi.approvals.approve(w.id, comment);
          showToast('Demande approuvée avec succès', 'success');
          close();
          loadPage('approvals');
        } catch (err) {
          showToast(err.message, 'error');
        }
      });

      overlay.querySelector('#approval-preview-reject').addEventListener('click', async () => {
        const comment = overlay.querySelector('#approval-decision-comment').value;
        if (!comment || comment.trim().length < 3) {
          showToast('Veuillez indiquer un motif de révision pour le collaborateur', 'error');
          return;
        }
        try {
          await window.AdminApi.approvals.reject(w.id, comment);
          showToast('Demande refusée', 'warning');
          close();
          loadPage('approvals');
        } catch (err) {
          showToast(err.message, 'error');
        }
      });
    } catch (err) {
      showToast(err.message, 'error');
    }
  }

  // Modale d'approbation d'adhésion avec mot de bienvenue personnalisable
  function openApproveMembershipModal(membershipId, candidateName = 'le candidat', onSuccess = null) {
    const existing = document.getElementById('membership-approve-overlay');
    if (existing) existing.remove();

    const defaultWelcome = "C'est un réel plaisir de vous accueillir parmi nous ! Vos motivations et votre dynamisme correspondent parfaitement aux valeurs d'excellence, de partage d'expérience et d'entraide de notre club. Nous avons hâte de découvrir vos contributions et de vous accompagner dans votre parcours professionnel. Bienvenue dans la grande famille du Monde du Travail !";

    const overlay = document.createElement('div');
    overlay.id = 'membership-approve-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(15,23,42,0.6);backdrop-filter:blur(3px);display:flex;align-items:center;justify-content:center;z-index:1100;padding:1rem;';
    overlay.innerHTML = `
      <div class="card" style="max-width:580px;width:100%;padding:1.75rem;background:var(--bg-card, #fff);box-shadow:0 20px 40px rgba(0,0,0,0.25);border-radius:12px;border:1px solid #e2e8f0;animation:dossierFadeIn 0.2s ease;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:1.25rem;border-bottom:1px solid #e2e8f0;padding-bottom:1rem;">
          <div>
            <span style="display:inline-block;padding:0.25rem 0.6rem;background:#ecfdf5;color:#059669;font-size:0.75rem;font-weight:700;border-radius:999px;margin-bottom:0.35rem;text-transform:uppercase;letter-spacing:0.04em;">Validation &amp; Bienvenue</span>
            <h2 style="margin:0;font-size:1.3rem;color:#0f172a;font-weight:700;">Approuver l'adhésion</h2>
            <p style="margin:0.25rem 0 0;font-size:0.88rem;color:#64748b;">Candidat : <strong style="color:#0f172a;">${escapeHtml(candidateName)}</strong></p>
          </div>
          <button type="button" id="approve-modal-close-btn" style="border:none;background:transparent;font-size:1.5rem;cursor:pointer;color:#94a3b8;line-height:1;padding:0.25rem;">&times;</button>
        </div>

        <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;padding:0.85rem 1rem;margin-bottom:1.25rem;display:flex;gap:0.75rem;align-items:flex-start;">
          <span style="font-size:1.25rem;line-height:1.2;">🎉</span>
          <div style="font-size:0.85rem;color:#166534;line-height:1.45;">
            L'approbation active immédiatement le compte membre et lui expédie un <strong>email officiel de bienvenue</strong> contenant vos félicitations et le lien direct pour se connecter.
          </div>
        </div>

        <div style="margin-bottom:1.25rem;">
          <label for="approve-welcome-message" style="display:block;margin-bottom:0.45rem;font-size:0.88rem;font-weight:600;color:#1e293b;">
            Mot de bienvenue de l'administrateur <span style="font-weight:normal;color:#64748b;">(personnalisable)</span> :
          </label>
          <textarea id="approve-welcome-message" rows="5" style="width:100%;box-sizing:border-box;padding:0.75rem;border:1.5px solid #cbd5e1;border-radius:8px;font-family:inherit;font-size:0.88rem;line-height:1.5;color:#1e293b;resize:vertical;transition:border-color 0.2s;" placeholder="Rédigez votre mot d'accueil...">${escapeHtml(defaultWelcome)}</textarea>
          <small style="display:block;margin-top:0.35rem;color:#94a3b8;font-size:0.78rem;">Ce message apparaîtra en évidence dans le courriel de validation reçu par le nouveau membre.</small>
        </div>

        <div style="display:flex;gap:0.75rem;justify-content:flex-end;margin-top:1.5rem;padding-top:1rem;border-top:1px solid #f1f5f9;">
          <button type="button" class="btn btn-ghost" id="approve-modal-cancel">Annuler</button>
          <button type="button" class="btn btn-success" id="approve-modal-confirm" style="font-weight:600;padding:0.6rem 1.25rem;">
            ✅ Valider et envoyer le mot de bienvenue
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    const close = () => overlay.remove();
    overlay.querySelector('#approve-modal-close-btn').addEventListener('click', close);
    overlay.querySelector('#approve-modal-cancel').addEventListener('click', close);
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });

    const textarea = overlay.querySelector('#approve-welcome-message');
    textarea.focus();
    textarea.setSelectionRange(textarea.value.length, textarea.value.length);

    overlay.querySelector('#approve-modal-confirm').addEventListener('click', () => {
      const welcomeMessage = textarea.value.trim();
      close();

      // Rendu optimiste instantané (0 ms de latence ressentie)
      applyOptimisticMembershipDecision(membershipId, '✅ Approuvé — Email expédié', 'badge-success');
      showToast('Adhésion approuvée — email de bienvenue expédié à ' + candidateName, 'success');

      // Appel réseau en arrière-plan avec soft refresh
      window.AdminApi.admin.approveMembership(membershipId, welcomeMessage)
        .then(() => {
          if (typeof onSuccess === 'function') {
            onSuccess();
          } else {
            const cur = window.location.hash.replace('#', '') || 'dashboard';
            loadPage(cur, true);
          }
        })
        .catch(err => {
          showToast(err.message || 'Erreur lors de l\'approbation', 'error');
        });
    });
  }

  // Modale de refus d'adhésion avec motif d'accompagnement
  function openRejectMembershipModal(membershipId, candidateName = 'le candidat', onSuccess = null) {
    const existing = document.getElementById('membership-reject-overlay');
    if (existing) existing.remove();

    const defaultReason = "Les places pour notre actuelle promotion sont limitées afin de garantir un accompagnement de qualité. Nous vous encourageons à renouveler votre candidature lors de notre prochaine session d'ouverture ou à participer à nos conférences publiques.";

    const overlay = document.createElement('div');
    overlay.id = 'membership-reject-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(15,23,42,0.6);backdrop-filter:blur(3px);display:flex;align-items:center;justify-content:center;z-index:1100;padding:1rem;';
    overlay.innerHTML = `
      <div class="card" style="max-width:580px;width:100%;padding:1.75rem;background:var(--bg-card, #fff);box-shadow:0 20px 40px rgba(0,0,0,0.25);border-radius:12px;border:1px solid #e2e8f0;animation:dossierFadeIn 0.2s ease;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:1.25rem;border-bottom:1px solid #e2e8f0;padding-bottom:1rem;">
          <div>
            <span style="display:inline-block;padding:0.25rem 0.6rem;background:#fef2f2;color:#dc2626;font-size:0.75rem;font-weight:700;border-radius:999px;margin-bottom:0.35rem;text-transform:uppercase;letter-spacing:0.04em;">Décision de refus</span>
            <h2 style="margin:0;font-size:1.3rem;color:#0f172a;font-weight:700;">Refuser la candidature</h2>
            <p style="margin:0.25rem 0 0;font-size:0.88rem;color:#64748b;">Candidat : <strong style="color:#0f172a;">${escapeHtml(candidateName)}</strong></p>
          </div>
          <button type="button" id="reject-modal-close-btn" style="border:none;background:transparent;font-size:1.5rem;cursor:pointer;color:#94a3b8;line-height:1;padding:0.25rem;">&times;</button>
        </div>

        <div style="background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:0.85rem 1rem;margin-bottom:1.25rem;display:flex;gap:0.75rem;align-items:flex-start;">
          <span style="font-size:1.25rem;line-height:1.2;">⚠️</span>
          <div style="font-size:0.85rem;color:#92400e;line-height:1.45;">
            Cette action marquera la demande comme refusée et transmettra un <strong>courriel courtois et bienveillant</strong> au candidat avec le motif ci-dessous.
          </div>
        </div>

        <div style="margin-bottom:1.25rem;">
          <label for="reject-reason-message" style="display:block;margin-bottom:0.45rem;font-size:0.88rem;font-weight:600;color:#1e293b;">
            Motif ou conseils pour le candidat <span style="font-weight:normal;color:#64748b;">(personnalisable)</span> :
          </label>
          <textarea id="reject-reason-message" rows="4" style="width:100%;box-sizing:border-box;padding:0.75rem;border:1.5px solid #cbd5e1;border-radius:8px;font-family:inherit;font-size:0.88rem;line-height:1.5;color:#1e293b;resize:vertical;transition:border-color 0.2s;" placeholder="Précisez le motif ou des encouragements...">${escapeHtml(defaultReason)}</textarea>
          <small style="display:block;margin-top:0.35rem;color:#94a3b8;font-size:0.78rem;">Ce message sera inclus dans la notification transmise au candidat.</small>
        </div>

        <div style="display:flex;gap:0.75rem;justify-content:flex-end;margin-top:1.5rem;padding-top:1rem;border-top:1px solid #f1f5f9;">
          <button type="button" class="btn btn-ghost" id="reject-modal-cancel">Annuler</button>
          <button type="button" class="btn btn-danger" id="reject-modal-confirm" style="font-weight:600;padding:0.6rem 1.25rem;">
            ❌ Confirmer le refus et notifier
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    const close = () => overlay.remove();
    overlay.querySelector('#reject-modal-close-btn').addEventListener('click', close);
    overlay.querySelector('#reject-modal-cancel').addEventListener('click', close);
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });

    const textarea = overlay.querySelector('#reject-reason-message');
    textarea.focus();
    textarea.setSelectionRange(textarea.value.length, textarea.value.length);

    overlay.querySelector('#reject-modal-confirm').addEventListener('click', () => {
      const reason = textarea.value.trim();
      close();

      // Rendu optimiste instantané (0 ms de latence ressentie)
      applyOptimisticMembershipDecision(membershipId, '❌ Refusé — Candidat notifié', 'badge-danger');
      showToast('Candidature refusée — notification envoyée à ' + candidateName, 'warning');

      // Appel réseau en arrière-plan avec soft refresh
      window.AdminApi.admin.rejectMembership(membershipId, reason)
        .then(() => {
          if (typeof onSuccess === 'function') {
            onSuccess();
          } else {
            const cur = window.location.hash.replace('#', '') || 'dashboard';
            loadPage(cur, true);
          }
        })
        .catch(err => {
          showToast(err.message || 'Erreur lors du refus', 'error');
        });
    });
  }

  // ===== Approbations =====
  async function loadApprovals() {
    const safely = (promise, fallback = { data: [] }) => promise.catch(() => fallback);
    const [workflowsRes, membershipsRes] = await Promise.all([
      safely(window.AdminApi.approvals.getPending()),
      safely(window.AdminApi.admin.getPendingMemberships()),
    ]);
    const workflows = workflowsRes?.data || [];
    const memberships = membershipsRes?.data || [];
    window._currentPendingMemberships = memberships;
    const user = window.AdminApp.currentUser;
    const canManageWorkflows = window.AdminApp.hasPermission(user, 'approvals.manage');
    const canApproveMemberships = window.AdminApp.hasPermission(user, 'membership.approve');

    const totalCount = workflows.length + memberships.length;
    const resourceLabels = { Formation: 'Formation', Job: 'Métier', Post: 'Article', ADMIN: 'Admin' };

    return `
      <!-- En-tête & Statut Global -->
      <div style="margin-bottom: 1.25rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
        <div>
          <h2 style="margin: 0; font-size: 1.35rem; color: #0f172a; display: flex; align-items: center; gap: 0.5rem;">
            <span>✅</span> Centre d'Approbations & Validations
          </h2>
          <p style="margin: 0.25rem 0 0; font-size: 0.88rem; color: #64748b;">
            Traitez les adhésions des nouveaux inscrits ainsi que les publications soumises au principe des 4 yeux.
          </p>
        </div>
        <div>
          <span class="badge ${totalCount > 0 ? 'badge-warning' : 'badge-success'}" style="font-size: 0.88rem; padding: 0.45rem 0.85rem; font-weight: 700;">
            ${totalCount > 0 ? `${totalCount} demande(s) en attente` : 'Toutes les demandes sont traitées 🎉'}
          </span>
        </div>
      </div>

      <!-- Filtres d'onglets rapides -->
      <div class="approval-filter-tabs">
        <button class="approval-tab-btn active" data-approval-filter="all">
          <span>📋</span> Toutes les demandes
          <span class="badge ${totalCount > 0 ? 'badge-warning' : 'badge-muted'}">${totalCount}</span>
        </button>
        <button class="approval-tab-btn" data-approval-filter="memberships">
          <span>👤</span> Adhésions & Inscriptions
          <span class="badge ${memberships.length > 0 ? 'badge-warning' : 'badge-muted'}">${memberships.length}</span>
        </button>
        <button class="approval-tab-btn" data-approval-filter="workflows">
          <span>⚖️</span> Workflows de contenu (4-Yeux)
          <span class="badge ${workflows.length > 0 ? 'badge-warning' : 'badge-muted'}">${workflows.length}</span>
        </button>
      </div>

      <!-- Section 1 : Demandes d'adhésion (Nouveaux membres) -->
      <div class="card approval-section-card" id="approval-section-memberships">
        <div class="card-header" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <span style="font-size: 1.25rem;">👤</span>
            <div>
              <h2 style="margin: 0; font-size: 1.1rem;">Demandes d'adhésion & Inscriptions</h2>
              <p style="margin: 0.15rem 0 0; font-size: 0.82rem; color: #64748b;">Candidats inscrits en attente de validation pour activer leur compte membre.</p>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
            <input type="search" id="membershipSearchInput" placeholder="🔍 Rechercher..." style="height: 34px; border-radius: 6px; border: 1px solid #cbd5e1; padding: 0 10px; font-size: 0.82rem; width: 180px;">
            <button type="button" class="btn btn-outline btn-sm" id="btnExportMembershipsCSV" style="display: inline-flex; align-items: center; gap: 4px; font-size: 0.82rem; height: 34px;">
              <span>📥</span> <span>Export CSV</span>
            </button>
            <span class="badge ${memberships.length > 0 ? 'badge-warning' : 'badge-muted'}">${memberships.length} en attente</span>
          </div>
        </div>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Candidat</th>
                <th>Email</th>
                <th>Motivation</th>
                <th>Date d'inscription</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="membershipsTableBody">
              ${memberships.length === 0 ? `
                <tr>
                  <td colspan="5">
                    <div class="empty-state" style="padding: 2.25rem 1rem;">
                      <span style="font-size: 2.2rem;">🎉</span>
                      <p style="margin-top: 0.5rem; font-weight: 600;">Aucune demande d'adhésion en attente</p>
                      <p style="color: #64748b; font-size: 0.85rem; margin: 0.25rem 0 0;">Toutes les inscriptions ont été approuvées ou traitées.</p>
                    </div>
                  </td>
                </tr>
              ` : memberships.map(m => `
                <tr class="membership-row">
                  <td><strong>${escapeHtml(m.user?.firstName || '')} ${escapeHtml(m.user?.lastName || '')}</strong></td>
                  <td><a href="mailto:${escapeHtml(m.user?.email || '')}" style="color: var(--color-primary); text-decoration: none;">${escapeHtml(m.user?.email || '')}</a></td>
                  <td style="max-width: 320px; line-height: 1.45;">
                    <div title="${escapeHtml(m.motivation || '')}">
                      ${escapeHtml((m.motivation || '—').slice(0, 140))}${(m.motivation || '').length > 140 ? '…' : ''}
                    </div>
                  </td>
                  <td>${new Date(m.createdAt).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
                  <td>
                    ${canApproveMemberships ? `
                      <div style="display: flex; gap: 0.4rem; align-items: center;">
                        <button class="btn btn-sm btn-ghost" data-view-dossier="${m.user?.id || m.userId}" title="Consulter le dossier candidat">📁 Dossier</button>
                        <button class="btn btn-success btn-sm" data-approve-membership-approval="${m.id}" data-candidate-name="${escapeHtml(((m.user?.firstName || '') + ' ' + (m.user?.lastName || '')).trim() || 'le candidat')}" title="Activer le compte membre et envoyer le mot de bienvenue">Approuver</button>
                        <button class="btn btn-danger btn-sm" data-reject-membership-approval="${m.id}" data-candidate-name="${escapeHtml(((m.user?.firstName || '') + ' ' + (m.user?.lastName || '')).trim() || 'le candidat')}" title="Refuser cette inscription">Refuser</button>
                      </div>
                    ` : `
                      <button class="btn btn-sm btn-ghost" data-view-dossier="${m.user?.id || m.userId}" title="Consulter le dossier candidat">📁 Dossier</button>
                    `}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Section 2 : Workflows de validation (Principe des 4 Yeux) -->
      <div class="card approval-section-card" id="approval-section-workflows">
        <div class="card-header">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <span style="font-size: 1.25rem;">⚖️</span>
            <div>
              <h2 style="margin: 0; font-size: 1.1rem;">Workflows de validation de contenus & rôles</h2>
              <p style="margin: 0.15rem 0 0; font-size: 0.82rem; color: #64748b;">Actions critiques et publications nécessitant la validation d'un second administrateur.</p>
            </div>
          </div>
          <span class="badge ${workflows.length > 0 ? 'badge-warning' : 'badge-muted'}">${workflows.length} en attente</span>
        </div>
        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Objet / Ressource</th>
                <th>Type</th>
                <th>Demandeur</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${workflows.length === 0 ? `
                <tr>
                  <td colspan="5">
                    <div class="empty-state" style="padding: 2.25rem 1rem;">
                      <span style="font-size: 2.2rem;">✅</span>
                      <p style="margin-top: 0.5rem; font-weight: 600;">Aucun workflow de validation en attente</p>
                      <p style="color: #64748b; font-size: 0.85rem; margin: 0.25rem 0 0;">Toutes les propositions de contenu sont à jour.</p>
                    </div>
                  </td>
                </tr>
              ` : workflows.map(w => `
                <tr>
                  <td><strong>${escapeHtml(w.comment || 'Demande de publication')}</strong></td>
                  <td><span class="badge badge-primary">${resourceLabels[w.resourceType] || w.resourceType}</span></td>
                  <td>${escapeHtml(w.createdBy ? `${w.createdBy.firstName} ${w.createdBy.lastName}` : '—')}</td>
                  <td>${new Date(w.createdAt).toLocaleString('fr-FR')}</td>
                  <td>
                    <div style="display: flex; gap: 0.4rem; align-items: center;">
                      <button class="btn btn-sm" data-preview-workflow="${w.id}">Examiner</button>
                      ${canManageWorkflows ? `
                        <button class="btn btn-success btn-sm" data-approve-workflow="${w.id}">Approuver</button>
                        <button class="btn btn-danger btn-sm" data-reject-workflow="${w.id}">Rejeter</button>
                      ` : '<span class="text-muted">Lecture seule</span>'}
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  async function loadAdmins() {
    const [adminsResponse, rolesResponse] = await Promise.all([
      window.AdminApi.admin.getAllAdmins({ limit: 50 }),
      window.AdminApi.rbac.getRoles().catch(() => ({ data: [] })),
    ]);
    const items = adminsResponse.data || [];
    const roles = rolesResponse.data || [];
    const user = window.AdminApp.currentUser;
    const can = permission => window.AdminApp.hasPermission(user, permission);

    const roleSpaceMap = {
      ADMIN_FORMATION: { hash: '#formations', label: 'Formations', icon: '🎓' },
      ADMIN_METIER: { hash: '#metiers', label: 'Métiers', icon: '💼' },
      ADMIN_BLOG: { hash: '#blog', label: 'Blog', icon: '✍️' },
      ADMIN_FORUM: { hash: '#forum', label: 'Forum', icon: '💬' },
    };

    const workspaceCards = `
      <div class="card" style="margin-bottom:1.5rem;background:#ffffff;border:1px solid #e2e8f0;">
        <div class="card-header" style="border-bottom:1px solid #f1f5f9;padding-bottom:0.75rem;">
          <div>
            <h2 style="margin:0;font-size:1.15rem;display:flex;align-items:center;gap:0.5rem;color:#0f172a;">
              <span>🗂️</span> Espaces de travail spécialisés
            </h2>
            <p style="margin:0.25rem 0 0;font-size:0.85rem;color:#64748b;">
              Accès direct de supervision Ultra Admin aux 4 espaces de travail délégués (Formations, Métiers, Blog, Forum).
            </p>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:1rem;padding-top:1rem;">
          
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:1.1rem;display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.6rem;">
                <span style="font-size:1.6rem;">🎓</span>
                <span class="badge badge-primary" style="font-size:0.75rem;">ADMIN_FORMATION</span>
              </div>
              <h3 style="margin:0 0 0.35rem;font-size:1.05rem;color:#0f172a;">Espace Formations</h3>
              <p style="font-size:0.84rem;color:#64748b;margin:0 0 1rem;line-height:1.45;">Sessions, dates, durées, objectifs et programmes pédagogiques.</p>
            </div>
            <button type="button" class="btn btn-primary btn-sm btn-full" data-dash-navigate="formations" style="text-align:center;font-weight:600;cursor:pointer;">Ouvrir cet espace &rarr;</button>
          </div>

          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:1.1rem;display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.6rem;">
                <span style="font-size:1.6rem;">💼</span>
                <span class="badge badge-primary" style="font-size:0.75rem;">ADMIN_METIER</span>
              </div>
              <h3 style="margin:0 0 0.35rem;font-size:1.05rem;color:#0f172a;">Espace Métiers</h3>
              <p style="font-size:0.84rem;color:#64748b;margin:0 0 1rem;line-height:1.45;">Fiches métiers, salaires indicatifs, compétences et débouchés.</p>
            </div>
            <button type="button" class="btn btn-primary btn-sm btn-full" data-dash-navigate="metiers" style="text-align:center;font-weight:600;cursor:pointer;">Ouvrir cet espace &rarr;</button>
          </div>

          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:1.1rem;display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.6rem;">
                <span style="font-size:1.6rem;">✍️</span>
                <span class="badge badge-primary" style="font-size:0.75rem;">ADMIN_BLOG</span>
              </div>
              <h3 style="margin:0 0 0.35rem;font-size:1.05rem;color:#0f172a;">Espace Blog</h3>
              <p style="font-size:0.84rem;color:#64748b;margin:0 0 1rem;line-height:1.45;">Rédaction d'articles, catégories, publication et validation.</p>
            </div>
            <button type="button" class="btn btn-primary btn-sm btn-full" data-dash-navigate="blog" style="text-align:center;font-weight:600;cursor:pointer;">Ouvrir cet espace &rarr;</button>
          </div>

          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:1.1rem;display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.6rem;">
                <span style="font-size:1.6rem;">💬</span>
                <span class="badge badge-primary" style="font-size:0.75rem;">ADMIN_FORUM</span>
              </div>
              <h3 style="margin:0 0 0.35rem;font-size:1.05rem;color:#0f172a;">Espace Forum</h3>
              <p style="font-size:0.84rem;color:#64748b;margin:0 0 1rem;line-height:1.45;">Modération des sujets, réponses, épinglage et résolution.</p>
            </div>
            <button type="button" class="btn btn-primary btn-sm btn-full" data-dash-navigate="forum" style="text-align:center;font-weight:600;cursor:pointer;">Ouvrir cet espace &rarr;</button>
          </div>

        </div>
      </div>
    `;

    const rolesCard = `
      <div class="card" style="margin-top:1.5rem;">
        <div class="card-header">
          <h2>Rôles &amp; permissions</h2>
          ${can('admins.create') ? '<button class="btn" id="btn-create-role">Nouveau rôle</button>' : ''}
        </div>
        <div class="table-wrapper">
          <table>
            <thead><tr><th>Rôle</th><th>Description</th><th>Permissions</th><th>Utilisateurs</th><th>Actions</th></tr></thead>
            <tbody>
              ${roles.length === 0 ? '<tr><td colspan="5"><div class="empty-state">Aucun rôle</div></td></tr>' : roles.map(r => `
                <tr>
                  <td><strong>${escapeHtml(r.name)}</strong>${r.isSystem ? ' <span class="badge badge-primary">système</span>' : ''}</td>
                  <td>${escapeHtml(r.description || '—')}</td>
                  <td><span class="badge badge-muted">${r.permissionCount} permissions</span></td>
                  <td>${r.userCount}</td>
                  <td>
                    <div style="display:flex;gap:0.35rem;flex-wrap:wrap;align-items:center;">
                      ${roleSpaceMap[r.name] ? `<a href="${roleSpaceMap[r.name].hash}" class="btn btn-primary btn-sm" style="text-decoration:none;">${roleSpaceMap[r.name].icon} Ouvrir l'espace</a>` : ''}
                      ${can('admins.update') ? `<button class="btn btn-sm" data-edit-role="${r.id}">Permissions</button>` : ''}
                      ${can('admins.delete') && !r.isSystem ? `<button class="btn btn-danger btn-sm" data-delete-role="${r.id}">Supprimer</button>` : ''}
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;

    return `
      ${workspaceCards}
      <div class="card">
        <div class="card-header">
          <h2>Administrateurs</h2>
          ${can('admins.create') ? '<button class="btn btn-primary" id="btn-create-admin">Ajouter un administrateur</button>' : ''}
        </div>
        <div class="table-wrapper">
          <table>
            <thead><tr><th>Nom</th><th>Email</th><th>Rôle</th><th>Statut</th><th>Actions</th></tr></thead>
            <tbody>
              ${items.length === 0 ? '<tr><td colspan="5"><div class="empty-state">Aucun administrateur</div></td></tr>' : items.map(item => {
      const isUltraRow = item.role?.name === 'ULTRA_ADMIN' || item.user?.role === 'ULTRA_ADMIN';
      const roleLabel = ROLE_DISPLAY_NAMES[item.role?.name] || escapeHtml(item.role?.name || '');
      return `
                <tr>
                  <td><strong>${escapeHtml(item.user?.firstName || '')} ${escapeHtml(item.user?.lastName || '')}</strong></td>
                  <td>${escapeHtml(item.user?.email || '')}</td>
                  <td><span class="badge ${isUltraRow ? 'badge-primary' : 'badge-muted'}">${roleLabel}</span></td>
                  <td><span class="badge ${item.status === 'APPROVED' ? 'badge-success' : item.status === 'PENDING' ? 'badge-warning' : 'badge-danger'}">${escapeHtml(item.status)}</span></td>
                  <td>
                    <div style="display:flex;gap:0.35rem;flex-wrap:wrap;align-items:center;">
                      ${isUltraRow ? '<span class="badge badge-primary">Immuable (Ultra Admin)</span>' : `
                        <button class="btn btn-sm" data-admin-logs="${item.user?.id}" data-admin-name="${escapeHtml(item.user?.firstName || '')} ${escapeHtml(item.user?.lastName || '')}">Activité</button>
                        ${item.status === 'PENDING' && can('admins.approve') ? `<button class="btn btn-success btn-sm" data-approve-admin="${item.id}">Approuver</button>` : ''}
                        ${item.status === 'APPROVED' && can('admins.suspend') ? `<button class="btn btn-warning btn-sm" data-suspend-admin="${item.id}">Suspendre</button>` : ''}
                        ${item.status === 'SUSPENDED' && can('admins.suspend') ? `<button class="btn btn-success btn-sm" data-reactivate-admin="${item.id}">Réactiver</button>` : ''}
                        ${can('admins.revoke') ? `<button class="btn btn-danger btn-sm" data-revoke-admin="${item.id}">Révoquer</button>` : ''}
                      `}
                    </div>
                  </td>
                </tr>
              `;
    }).join('')}
            </tbody>
          </table>
        </div>
      </div>
      ${rolesCard}
    `;
  }

  function openCreateAdminModal() {
    const existing = document.getElementById('admin-create-modal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'admin-create-modal';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:1000;';
    overlay.innerHTML = `
      <div class="card" style="max-width:540px;width:92%;padding:1.5rem;max-height:90vh;overflow:auto;">
        <div class="card-header" style="margin-bottom:1rem;display:flex;justify-content:space-between;align-items:center;">
          <h2>Ajouter un administrateur</h2>
          <button type="button" class="btn btn-ghost btn-sm" id="admin-create-header-close" style="font-size:1.25rem;line-height:1;padding:0.25rem 0.5rem;" title="Fermer">&times;</button>
        </div>
        <form id="admin-create-form" style="display:flex;flex-direction:column;gap:0.85rem;">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;">
            <label>Prénom *
              <input type="text" name="firstName" required minlength="2" placeholder="Ex. Amadou" style="width:100%;margin-top:0.25rem;">
            </label>
            <label>Nom *
              <input type="text" name="lastName" required minlength="2" placeholder="Ex. Diallo" style="width:100%;margin-top:0.25rem;">
            </label>
          </div>
          <label>Adresse email *
            <input type="email" name="email" required placeholder="admin@mondedutravail.com" style="width:100%;margin-top:0.25rem;">
          </label>
          <label>Mot de passe provisoire *
            <input type="password" name="password" required minlength="8" placeholder="Minimum 8 caractères" style="width:100%;margin-top:0.25rem;">
          </label>
          <label>Rôle fonctionnel &amp; périmètre *
            <select name="roleName" required style="width:100%;margin-top:0.25rem;">
              <option value="ADMIN_FORMATION">Admin Formations — Gestion du module Formations</option>
              <option value="ADMIN_METIER">Admin Métiers — Gestion du module Métiers</option>
              <option value="ADMIN_BLOG">Admin Blog — Gestion et rédaction du Blog</option>
              <option value="ADMIN_FORUM">Admin Forum — Modération du Forum</option>
            </select>
          </label>
          <p style="font-size:0.85rem;color:var(--color-muted);margin:0.25rem 0;">
            L'administrateur aura un accès strictement limité à son espace fonctionnel assigné.
          </p>
          <div style="display:flex;gap:0.5rem;justify-content:flex-end;margin-top:0.5rem;">
            <button type="button" class="btn" id="admin-create-cancel">Annuler</button>
            <button type="submit" class="btn btn-primary" id="admin-create-submit">Créer l'administrateur</button>
          </div>
        </form>
      </div>
    `;
    document.body.appendChild(overlay);

    overlay.querySelector('#admin-create-header-close')?.addEventListener('click', () => overlay.remove());
    overlay.querySelector('#admin-create-cancel').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });

    overlay.querySelector('#admin-create-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = overlay.querySelector('#admin-create-submit');
      const formData = new FormData(e.target);
      const payload = Object.fromEntries(formData.entries());

      try {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Création en cours...';
        await window.AdminApi.admin.create(payload);
        showToast(`Administrateur ${payload.firstName} ${payload.lastName} créé avec succès !`, 'success');
        overlay.remove();
        loadPage('admins');
      } catch (error) {
        showToast(error.message || 'Erreur lors de la création de l\'administrateur', 'error');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Créer l\'administrateur';
      }
    });
  }

  async function openAdminActivityModal(userId, adminName) {
    const existing = document.getElementById('admin-activity-modal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'admin-activity-modal';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:1000;';
    overlay.innerHTML = `
      <div class="card" style="max-width:720px;width:95%;padding:1.5rem;max-height:85vh;overflow:auto;">
        <div class="card-header" style="margin-bottom:1rem;">
          <h2>Activité de ${escapeHtml(adminName)}</h2>
          <button class="btn btn-sm" id="admin-activity-close">Fermer</button>
        </div>
        <div id="admin-activity-body">
          <div class="empty-state">Chargement de l'historique...</div>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    overlay.querySelector('#admin-activity-close').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });

    try {
      const response = await window.AdminApi.admin.getLogs(userId);
      const logs = response.data || [];
      const body = overlay.querySelector('#admin-activity-body');
      if (!body) return;

      if (logs.length === 0) {
        body.innerHTML = '<div class="empty-state">Aucune action enregistrée pour cet administrateur.</div>';
        return;
      }

      body.innerHTML = `
        <div class="table-wrapper">
          <table>
            <thead><tr><th>Date &amp; Heure</th><th>Action</th><th>Module</th><th>Résultat</th></tr></thead>
            <tbody>
              ${logs.map(log => `
                <tr>
                  <td>${new Date(log.createdAt).toLocaleString('fr-FR')}</td>
                  <td><code>${escapeHtml(log.action)}</code></td>
                  <td>${escapeHtml(log.module || '—')}</td>
                  <td><span class="badge ${log.result === 'SUCCESS' || log.result === 'APPROVED' || log.result === 'CREATED' ? 'badge-success' : 'badge-muted'}">${escapeHtml(log.result || '—')}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    } catch (error) {
      const body = overlay.querySelector('#admin-activity-body');
      if (body) body.innerHTML = `<div class="empty-state">${escapeHtml(error.message)}</div>`;
    }
  }

  // Modale d'édition d'un rôle : matrice de permissions groupée par module
  async function openRoleModal(roleId = null) {
    const [permissionsResponse, rolesResponse] = await Promise.all([
      window.AdminApi.rbac.getPermissions(),
      roleId ? window.AdminApi.rbac.getRole(roleId) : Promise.resolve({ data: null }),
    ]);
    const permissions = permissionsResponse.data || [];
    const role = rolesResponse.data;

    // Regrouper les permissions par module
    const byModule = {};
    permissions.forEach(p => {
      (byModule[p.module] = byModule[p.module] || []).push(p);
    });
    const currentPermIds = new Set((role?.permissions || []).map(rp => rp.permission?.id || rp.permissionId).filter(Boolean));

    const overlay = document.createElement('div');
    overlay.id = 'role-modal';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:1000;';
    overlay.innerHTML = `
      <div class="card" style="max-width:640px;width:92%;padding:1.5rem;max-height:90vh;overflow:auto;">
        <div class="card-header" style="display:flex;justify-content:space-between;align-items:center;">
          <h2>${role ? 'Modifier' : 'Nouveau'} rôle</h2>
          <button type="button" class="btn btn-ghost btn-sm" id="role-header-close" style="font-size:1.25rem;line-height:1;padding:0.25rem 0.5rem;" title="Fermer">&times;</button>
        </div>
        <form id="role-form" style="display:flex;flex-direction:column;gap:0.8rem;">
          <label>Nom *<input type="text" name="name" required minlength="3" value="${escapeHtml(role?.name || '')}" ${role?.isSystem && role?.name === 'ULTRA_ADMIN' ? 'readonly' : ''}></label>
          <label>Description<input type="text" name="description" value="${escapeHtml(role?.description || '')}"></label>
          <div>
            <strong>Permissions</strong>
            ${role?.isSystem && role?.name === 'ULTRA_ADMIN'
        ? '<p class="text-muted">Le rôle ULTRA_ADMIN possède toutes les permissions (immuable).</p>'
        : Object.entries(byModule).map(([moduleName, perms]) => `
                <fieldset style="border:1px solid #e0e0e0;border-radius:0.5rem;padding:0.6rem 0.9rem;margin:0.5rem 0;">
                  <legend style="font-size:0.85rem;text-transform:capitalize;">${escapeHtml(moduleName)}</legend>
                  ${perms.map(p => `
                    <label style="display:flex;align-items:center;gap:0.5rem;font-weight:400;">
                      <input type="checkbox" name="permissions" value="${p.id}" ${currentPermIds.has(p.id) ? 'checked' : ''}>
                      ${escapeHtml(p.code)}
                    </label>
                  `).join('')}
                </fieldset>
              `).join('')}
          </div>
          <div style="display:flex;gap:0.5rem;justify-content:flex-end;">
            <button type="button" class="btn" id="role-cancel">Annuler</button>
            <button type="submit" class="btn btn-primary">${role ? 'Enregistrer' : 'Créer'}</button>
          </div>
        </form>
      </div>
    `;
    document.body.appendChild(overlay);

    overlay.querySelector('#role-header-close')?.addEventListener('click', () => overlay.remove());
    overlay.querySelector('#role-cancel').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });

    overlay.querySelector('#role-form').addEventListener('submit', async e => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const name = formData.get('name');
      const description = formData.get('description') || undefined;
      const selected = formData.getAll('permissions');
      const data = { name, description, permissions: selected };
      try {
        if (role) {
          await window.AdminApi.rbac.updateRole(role.id, data);
          showToast('Rôle mis à jour', 'success');
        } else {
          await window.AdminApi.rbac.createRole(data);
          showToast('Rôle créé', 'success');
        }
        overlay.remove();
        loadPage('admins');
      } catch (error) {
        showToast(error.message, 'error');
      }
    });
  }

  // ===== Organisation & Fonctionnement (Bureau du Club & Postes) =====
  let orgActiveTab = 'bureau'; // 'bureau' | 'positions' | 'assignments'
  let cachedOrgPositions = [];
  let cachedOrgUsers = [];
  let orgSelectedCategory = 'ALL';

  const ORG_CATEGORIES = {
    BUREAU_EXECUTIF: { label: 'Bureau Exécutif', icon: '🏛️', color: '#1d4ed8', bg: '#eff6ff', border: '#bfdbfe' },
    POLE_COMMUNICATION: { label: 'Pôle Communication & Médias', icon: '📢', color: '#0284c7', bg: '#f0f9ff', border: '#bae6fd' },
    POLE_LOGISTIQUE: { label: 'Pôle Organisation & Logistique', icon: '📦', color: '#d97706', bg: '#fffbeb', border: '#fde68a' },
    POLE_PEDAGOGIQUE: { label: 'Pôle Pédagogique & Formations', icon: '🎓', color: '#16a34a', bg: '#f0fdf4', border: '#bbf7d0' },
    POLE_RELATIONS: { label: 'Pôle Partenariats & Relations', icon: '🤝', color: '#7c3aed', bg: '#faf5ff', border: '#e9d5ff' },
    POLE_PROJETS: { label: 'Pôle Projets & Innovation', icon: '💡', color: '#4f46e5', bg: '#eef2ff', border: '#c7d2fe' },
    POLE_COMMUNAUTE: { label: 'Pôle Accueil & Vie Associative', icon: '🌱', color: '#059669', bg: '#ecfdf5', border: '#a7f3d0' },
    AUTRE: { label: 'Autre Commission', icon: '📌', color: '#475569', bg: '#f8fafc', border: '#e2e8f0' },
  };

  async function loadOrganization() {
    const isUltraAdmin = window.AdminApp.currentUser?.role === 'ULTRA_ADMIN';

    // Récupération simultanée des données de l'organisation
    const [bureauRes, positionsRes, assignmentsRes, usersRes] = await Promise.all([
      window.AdminApi.organization.getBureau().catch(() => ({ data: [] })),
      window.AdminApi.organization.getPositions().catch(() => ({ data: [] })),
      window.AdminApi.organization.getAssignments().catch(() => ({ data: [] })),
      window.AdminApi.users.getAll({ limit: 300 }).catch(() => ({ data: [] })),
    ]);

    const bureau = bureauRes.data || [];
    const positions = positionsRes.data || [];
    const assignments = assignmentsRes.data || [];
    const users = usersRes.data || [];

    cachedOrgPositions = positions;
    cachedOrgUsers = users;

    const totalPositions = positions.length;
    const occupiedCount = positions.filter(p => p.activeMembersCount > 0).length;
    const vacantCount = totalPositions - occupiedCount;
    const activeAssignments = assignments.filter(a => a.isActive);

    const filteredBureau = orgSelectedCategory === 'ALL'
      ? bureau
      : bureau.filter(p => p.category === orgSelectedCategory);

    const execBoard = filteredBureau.filter(p => p.category === 'BUREAU_EXECUTIF');
    const polesBoard = filteredBureau.filter(p => p.category !== 'BUREAU_EXECUTIF');

    return `
      <div class="org-container">
        <!-- En-tête de section avec statistiques -->
        <div class="card" style="margin-bottom:1.5rem;background:linear-gradient(135deg, #0f172a 0%, #1e293b 100%);color:#ffffff;border:none;box-shadow:0 10px 25px -5px rgba(15,23,42,0.3);overflow:hidden;">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1.25rem;padding:1.75rem 2rem;">
            <div>
              <div style="display:inline-flex;align-items:center;gap:0.5rem;background:rgba(255,255,255,0.12);padding:0.35rem 0.8rem;border-radius:20px;font-size:0.8rem;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;color:#93c5fd;margin-bottom:0.6rem;">
                <span>🏛️</span> Gouvernance &amp; Direction
              </div>
              <h2 style="margin:0 0 0.4rem;font-size:1.65rem;font-weight:700;letter-spacing:-0.02em;color:#ffffff;">
                Organisation &amp; Fonctionnement
              </h2>
              <p style="margin:0;font-size:0.92rem;color:#cbd5e1;max-width:680px;line-height:1.5;">
                Supervision du bureau exécutif, attributions des postes et structuration des commissions du club.
              </p>
            </div>

            <div style="display:flex;gap:0.6rem;flex-wrap:wrap;align-items:center;">
              ${isUltraAdmin ? `
                <button class="btn btn-primary" id="btn-org-assign-top" style="box-shadow:0 4px 14px rgba(37,99,235,0.45);font-weight:600;padding:0.6rem 1.15rem;">
                  <span>👤</span> Attribuer un poste
                </button>
                <button class="btn" id="btn-org-create-pos-top" style="background:rgba(255,255,255,0.1);color:#ffffff;border:1px solid rgba(255,255,255,0.25);font-weight:500;padding:0.6rem 1.15rem;">
                  <span>➕</span> Nouveau poste
                </button>
              ` : `
                <span class="badge" style="background:rgba(255,255,255,0.15);color:#ffffff;padding:0.5rem 0.85rem;font-size:0.85rem;">
                  🔒 Mode consultation (Ultra Admin requis pour modifier)
                </span>
              `}
            </div>
          </div>

          <!-- KPI Bar -->
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(150px, 1fr));gap:1px;background:rgba(255,255,255,0.1);border-top:1px solid rgba(255,255,255,0.1);">
            <div style="padding:1rem 1.75rem;background:rgba(15,23,42,0.45);">
              <span style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;color:#94a3b8;display:block;">Postes configurés</span>
              <strong style="font-size:1.55rem;font-weight:700;color:#ffffff;">${totalPositions}</strong>
            </div>
            <div style="padding:1rem 1.75rem;background:rgba(15,23,42,0.45);">
              <span style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;color:#94a3b8;display:block;">Postes pourvus</span>
              <strong style="font-size:1.55rem;font-weight:700;color:#4ade80;">${occupiedCount}</strong>
              <span style="font-size:0.8rem;color:#86efac;margin-left:0.35rem;">(${totalPositions ? Math.round((occupiedCount / totalPositions) * 100) : 0}%)</span>
            </div>
            <div style="padding:1rem 1.75rem;background:rgba(15,23,42,0.45);">
              <span style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;color:#94a3b8;display:block;">Postes vacants</span>
              <strong style="font-size:1.55rem;font-weight:700;color:${vacantCount > 0 ? '#fbbf24' : '#cbd5e1'};">${vacantCount}</strong>
            </div>
            <div style="padding:1rem 1.75rem;background:rgba(15,23,42,0.45);">
              <span style="font-size:0.75rem;text-transform:uppercase;letter-spacing:0.05em;color:#94a3b8;display:block;">Membres en mandat</span>
              <strong style="font-size:1.55rem;font-weight:700;color:#60a5fa;">${activeAssignments.length}</strong>
            </div>
          </div>
        </div>

        <!-- Sous-navigation onglets -->
        <div class="org-subnav" style="display:flex;gap:0.5rem;margin-bottom:1.5rem;border-bottom:2px solid #e2e8f0;padding-bottom:0.5rem;flex-wrap:wrap;">
          <button class="btn btn-sm ${orgActiveTab === 'bureau' ? 'btn-primary' : 'btn-ghost'}" id="org-tab-bureau" style="font-weight:600;">
            <span>🏛️</span> Organigramme du Bureau
          </button>
          <button class="btn btn-sm ${orgActiveTab === 'positions' ? 'btn-primary' : 'btn-ghost'}" id="org-tab-positions" style="font-weight:600;">
            <span>📋</span> Gestion des Postes (${totalPositions})
          </button>
          <button class="btn btn-sm ${orgActiveTab === 'assignments' ? 'btn-primary' : 'btn-ghost'}" id="org-tab-assignments" style="font-weight:600;">
            <span>👥</span> Affectations &amp; Mandats (${assignments.length})
          </button>
        </div>

        ${orgActiveTab === 'bureau' ? renderOrgBureauTab(execBoard, polesBoard, isUltraAdmin) : ''}
        ${orgActiveTab === 'positions' ? renderOrgPositionsTab(positions, isUltraAdmin) : ''}
        ${orgActiveTab === 'assignments' ? renderOrgAssignmentsTab(assignments, isUltraAdmin) : ''}
      </div>
    `;
  }

  function renderOrgBureauTab(execBoard, polesBoard, isUltraAdmin) {
    const categoriesFilter = `
      <div style="display:flex;gap:0.5rem;overflow-x:auto;padding-bottom:0.75rem;margin-bottom:1.5rem;scrollbar-width:thin;">
        <button class="btn btn-sm ${orgSelectedCategory === 'ALL' ? 'btn-primary' : 'btn-ghost'}" data-org-cat="ALL" style="white-space:nowrap;font-size:0.85rem;">
          Tous les pôles
        </button>
        ${Object.entries(ORG_CATEGORIES).map(([key, meta]) => `
          <button class="btn btn-sm ${orgSelectedCategory === key ? 'btn-primary' : 'btn-ghost'}" data-org-cat="${key}" style="white-space:nowrap;font-size:0.85rem;">
            <span>${meta.icon}</span> ${meta.label}
          </button>
        `).join('')}
      </div>
    `;

    return `
      ${categoriesFilter}

      <!-- Section 1 : Bureau Exécutif -->
      ${execBoard.length > 0 ? `
        <div style="margin-bottom:2.5rem;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
            <div style="display:flex;align-items:center;gap:0.6rem;">
              <span style="font-size:1.4rem;">🏛️</span>
              <h3 style="margin:0;font-size:1.25rem;color:#0f172a;font-weight:700;">Bureau Exécutif</h3>
              <span class="badge badge-primary" style="font-size:0.75rem;">Haute Direction</span>
            </div>
            <span style="font-size:0.85rem;color:var(--color-muted);">${execBoard.length} postes</span>
          </div>

          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:1.25rem;">
            ${execBoard.map(pos => renderPositionCard(pos, isUltraAdmin, true)).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Section 2 : Pôles Opérationnels & Commissions -->
      ${polesBoard.length > 0 ? `
        <div>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
            <div style="display:flex;align-items:center;gap:0.6rem;">
              <span style="font-size:1.4rem;">💼</span>
              <h3 style="margin:0;font-size:1.25rem;color:#0f172a;font-weight:700;">Pôles Opérationnels &amp; Commissions</h3>
              <span class="badge badge-muted" style="font-size:0.75rem;">Missions Thématiques</span>
            </div>
            <span style="font-size:0.85rem;color:var(--color-muted);">${polesBoard.length} postes</span>
          </div>

          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(310px, 1fr));gap:1.25rem;">
            ${polesBoard.map(pos => renderPositionCard(pos, isUltraAdmin, false)).join('')}
          </div>
        </div>
      ` : ''}

      ${execBoard.length === 0 && polesBoard.length === 0 ? `
        <div class="card empty-state" style="padding:3rem 1rem;text-align:center;">
          <span style="font-size:2.5rem;display:block;margin-bottom:0.75rem;">🔍</span>
          <h3 style="margin:0 0 0.5rem;color:#0f172a;">Aucun poste trouvé dans cette catégorie</h3>
          <p style="color:var(--color-muted);margin:0 0 1rem;">Sélectionnez une autre commission ou créez un nouveau poste.</p>
          ${isUltraAdmin ? '<button class="btn btn-primary btn-sm" id="btn-org-create-empty">Créer un poste</button>' : ''}
        </div>
      ` : ''}
    `;
  }

  function renderPositionCard(pos, isUltraAdmin, isExec = false) {
    const meta = ORG_CATEGORIES[pos.category] || ORG_CATEGORIES.AUTRE;
    const isOccupied = pos.isOccupied;
    const holder = isOccupied ? pos.currentHolders[0] : null;

    const initials = holder
      ? `${(holder.firstName || '')[0] || ''}${(holder.lastName || '')[0] || ''}`.toUpperCase()
      : '?';

    return `
      <div class="card org-position-card" style="background:#ffffff;border:1px solid ${isOccupied ? '#e2e8f0' : '#f1f5f9'};border-radius:12px;padding:1.4rem;display:flex;flex-direction:column;justify-content:space-between;position:relative;box-shadow:0 2px 6px rgba(0,0,0,0.03);transition:all 0.2s ease;border-top:4px solid ${meta.color};">
        
        <!-- En-tête de la carte -->
        <div>
          <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:0.75rem;margin-bottom:0.75rem;">
            <div>
              <div style="display:inline-flex;align-items:center;gap:0.35rem;padding:0.2rem 0.55rem;border-radius:6px;font-size:0.72rem;font-weight:600;background:${meta.bg};color:${meta.color};border:1px solid ${meta.border};margin-bottom:0.4rem;">
                <span>${meta.icon}</span> ${meta.label}
              </div>
              <h4 style="margin:0;font-size:1.12rem;color:#0f172a;font-weight:700;line-height:1.3;">
                ${escapeHtml(pos.title)}
              </h4>
            </div>

            <div style="display:flex;align-items:center;gap:0.3rem;">
              <span class="badge badge-muted" style="font-size:0.7rem;padding:0.2rem 0.4rem;">Rang #${pos.order}</span>
              ${isUltraAdmin ? `
                <button class="btn btn-ghost btn-sm" data-org-edit-pos="${pos.id}" title="Modifier le poste" style="padding:0.25rem 0.45rem;font-size:0.85rem;">✏️</button>
                <button class="btn btn-ghost btn-sm text-danger" data-org-del-pos="${pos.id}" data-pos-title="${escapeHtml(pos.title)}" title="Supprimer le poste" style="padding:0.25rem 0.45rem;font-size:0.85rem;color:var(--color-danger);">🗑️</button>
              ` : ''}
            </div>
          </div>

          <p style="font-size:0.84rem;color:#475569;margin:0 0 1.25rem;line-height:1.45;min-height:2.6rem;">
            ${escapeHtml(pos.description || 'Aucune description spécifique des missions pour ce poste.')}
          </p>
        </div>

        <!-- Titulaire ou État Vacant -->
        <div style="border-top:1px solid #f1f5f9;padding-top:1rem;margin-top:auto;">
          ${isOccupied && holder ? `
            <div style="display:flex;align-items:center;justify-content:space-between;gap:0.75rem;margin-bottom:0.85rem;">
              <div style="display:flex;align-items:center;gap:0.75rem;">
                <div style="width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg, ${meta.color} 0%, #0f172a 100%);color:#ffffff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:0.95rem;box-shadow:0 2px 6px rgba(0,0,0,0.15);">
                  ${initials}
                </div>
                <div>
                  <div style="font-weight:700;color:#0f172a;font-size:0.95rem;">
                    ${escapeHtml(holder.fullName)}
                  </div>
                  <div style="font-size:0.78rem;color:#64748b;">
                    ${escapeHtml(holder.email)}
                  </div>
                </div>
              </div>
              <span class="badge badge-success" style="font-size:0.72rem;white-space:nowrap;">
                ${escapeHtml(holder.mandateYear || 'Mandat en cours')}
              </span>
            </div>

            ${isUltraAdmin ? `
              <div style="display:flex;gap:0.5rem;align-items:center;margin-top:0.75rem;">
                <button class="btn btn-sm btn-outline btn-full" data-org-change-post="${pos.id}" data-user-id="${holder.userId || ''}" style="font-size:0.82rem;font-weight:600;">
                  🔄 Changer le titulaire
                </button>
                <button class="btn btn-sm btn-danger" data-org-free="${holder.assignmentId}" data-pos-title="${escapeHtml(pos.title)}" style="font-size:0.82rem;white-space:nowrap;">
                  Libérer
                </button>
              </div>
            ` : ''}
          ` : `
            <div style="background:#fffbeb;border:1px dashed #fde68a;border-radius:8px;padding:0.85rem 1rem;margin-bottom:0.85rem;text-align:center;">
              <span style="font-size:0.82rem;font-weight:600;color:#b45309;display:block;">
                ⚠️ Poste actuellement vacant
              </span>
              <span style="font-size:0.75rem;color:#78350f;">Aucun titulaire n'a encore été nommé.</span>
            </div>

            ${isUltraAdmin ? `
              <button class="btn btn-primary btn-sm btn-full" data-org-assign="${pos.id}" style="font-weight:600;font-size:0.84rem;">
                <span>➕</span> Nommer un membre
              </button>
            ` : `
              <span style="font-size:0.78rem;color:var(--color-muted);display:block;text-align:center;">En attente de nomination</span>
            `}
          `}
        </div>

      </div>
    `;
  }

  function renderOrgPositionsTab(positions, isUltraAdmin) {
    return `
      <div class="card">
        <div class="card-header" style="border-bottom:1px solid #f1f5f9;padding-bottom:1rem;margin-bottom:1rem;">
          <div>
            <h3 style="margin:0;font-size:1.15rem;color:#0f172a;display:flex;align-items:center;gap:0.5rem;">
              <span>📋</span> Catalogue des Postes du Club
            </h3>
            <p style="margin:0.25rem 0 0;font-size:0.85rem;color:var(--color-muted);">
              Personnalisez les intitulés, les missions associatives et l'ordre d'apparition dans l'organigramme.
            </p>
          </div>
          ${isUltraAdmin ? `
            <button class="btn btn-primary btn-sm" id="btn-org-create-pos-table">
              <span>➕</span> Nouveau poste
            </button>
          ` : ''}
        </div>

        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th style="width:60px;">Ordre</th>
                <th>Intitulé du Poste</th>
                <th>Pôle / Catégorie</th>
                <th>Missions &amp; Responsabilités</th>
                <th>Titulaires Actifs</th>
                <th>Statut</th>
                ${isUltraAdmin ? '<th style="text-align:right;">Actions</th>' : ''}
              </tr>
            </thead>
            <tbody>
              ${positions.length === 0 ? '<tr><td colspan="7"><div class="empty-state">Aucun poste configuré</div></td></tr>' : positions.map(p => {
                const meta = ORG_CATEGORIES[p.category] || ORG_CATEGORIES.AUTRE;
                const isOccupied = p.activeMembersCount > 0;
                return `
                  <tr>
                    <td><strong style="color:#64748b;">#${p.order}</strong></td>
                    <td>
                      <div style="font-weight:700;color:#0f172a;font-size:0.95rem;">${escapeHtml(p.title)}</div>
                      ${p.isSystem ? '<span class="badge badge-muted" style="font-size:0.7rem;">Poste Général</span>' : '<span class="badge badge-primary" style="font-size:0.7rem;">Personnalisé</span>'}
                    </td>
                    <td>
                      <span class="badge" style="background:${meta.bg};color:${meta.color};border:1px solid ${meta.border};">
                        <span>${meta.icon}</span> ${meta.label}
                      </span>
                    </td>
                    <td style="max-width:320px;font-size:0.85rem;color:#475569;line-height:1.4;">
                      ${escapeHtml(p.description || '—')}
                    </td>
                    <td>
                      <strong style="color:${isOccupied ? '#16a34a' : '#94a3b8'};">${p.activeMembersCount}</strong> titulaire(s)
                    </td>
                    <td>
                      <span class="badge ${isOccupied ? 'badge-success' : 'badge-warning'}">
                        ${isOccupied ? 'Pourvu' : 'Vacant'}
                      </span>
                    </td>
                    ${isUltraAdmin ? `
                      <td style="text-align:right;">
                        <div style="display:inline-flex;gap:0.35rem;align-items:center;">
                          <button class="btn btn-sm btn-outline" data-org-assign="${p.id}" title="Attribuer ce poste">👤 Attribuer</button>
                          <button class="btn btn-sm btn-ghost" data-org-edit-pos="${p.id}" title="Modifier">✏️</button>
                          <button class="btn btn-sm btn-ghost text-danger" data-org-del-pos="${p.id}" data-pos-title="${escapeHtml(p.title)}" title="Supprimer">🗑️</button>
                        </div>
                      </td>
                    ` : ''}
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  function renderOrgAssignmentsTab(assignments, isUltraAdmin) {
    return `
      <div class="card">
        <div class="card-header" style="border-bottom:1px solid #f1f5f9;padding-bottom:1rem;margin-bottom:1rem;">
          <div>
            <h3 style="margin:0;font-size:1.15rem;color:#0f172a;display:flex;align-items:center;gap:0.5rem;">
              <span>👥</span> Registre des Nominations &amp; Mandats
            </h3>
            <p style="margin:0.25rem 0 0;font-size:0.85rem;color:var(--color-muted);">
              Historique de toutes les attributions de postes, mandats en cours et nominations passées.
            </p>
          </div>
          ${isUltraAdmin ? `
            <button class="btn btn-primary btn-sm" id="btn-org-assign-table">
              <span>👤</span> Nouvelle attribution
            </button>
          ` : ''}
        </div>

        <div class="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Membre Nommé</th>
                <th>Poste Attribué</th>
                <th>Pôle / Commission</th>
                <th>Mandat</th>
                <th>Date d'effet</th>
                <th>Statut</th>
                <th>Désigné par</th>
                ${isUltraAdmin ? '<th style="text-align:right;">Actions</th>' : ''}
              </tr>
            </thead>
            <tbody>
              ${assignments.length === 0 ? '<tr><td colspan="8"><div class="empty-state">Aucune affectation enregistrée</div></td></tr>' : assignments.map(a => {
                const meta = ORG_CATEGORIES[a.position?.category] || ORG_CATEGORIES.AUTRE;
                return `
                  <tr>
                    <td>
                      <strong>${escapeHtml(a.user?.firstName || '')} ${escapeHtml(a.user?.lastName || '')}</strong>
                      <div style="font-size:0.78rem;color:#64748b;">${escapeHtml(a.user?.email || '')}</div>
                    </td>
                    <td>
                      <strong style="color:#0f172a;">${escapeHtml(a.position?.title || '—')}</strong>
                    </td>
                    <td>
                      <span class="badge" style="background:${meta.bg};color:${meta.color};border:1px solid ${meta.border};font-size:0.75rem;">
                        <span>${meta.icon}</span> ${meta.label}
                      </span>
                    </td>
                    <td>
                      <span class="badge badge-muted">${escapeHtml(a.mandateYear || 'En cours')}</span>
                    </td>
                    <td>
                      ${new Date(a.startDate).toLocaleDateString('fr-FR')}
                    </td>
                    <td>
                      <span class="badge ${a.isActive ? 'badge-success' : 'badge-danger'}">
                        ${a.isActive ? 'En fonction' : 'Archivé'}
                      </span>
                    </td>
                    <td style="font-size:0.84rem;color:#64748b;">
                      ${a.assignedBy ? `${escapeHtml(a.assignedBy.firstName || '')} ${escapeHtml(a.assignedBy.lastName || '')}` : 'Direction'}
                    </td>
                    ${isUltraAdmin ? `
                      <td style="text-align:right;">
                        <div style="display:inline-flex;gap:0.35rem;align-items:center;">
                          <button class="btn btn-sm btn-outline" data-org-edit-assign="${a.id}" data-mandate="${escapeHtml(a.mandateYear || '')}" data-notes="${escapeHtml(a.notes || '')}">Modifier</button>
                          <button class="btn btn-sm btn-danger" data-org-free="${a.id}" data-pos-title="${escapeHtml(a.position?.title || 'ce poste')}">Retirer</button>
                        </div>
                      </td>
                    ` : ''}
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // --- Modales Interactives de l'Organisation ---

  function openPositionModal(positionId = null) {
    const isEdit = !!positionId;
    const position = isEdit ? cachedOrgPositions.find(p => p.id === positionId) : null;

    const existing = document.getElementById('org-position-modal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'org-position-modal';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(15,23,42,0.65);display:flex;align-items:center;justify-content:center;z-index:9999;backdrop-filter:blur(4px);';
    overlay.innerHTML = `
      <div class="card" style="max-width:540px;width:92%;padding:1.75rem;max-height:92vh;overflow:auto;box-shadow:0 25px 50px -12px rgba(0,0,0,0.25);border-radius:12px;">
        <div class="card-header" style="margin-bottom:1.25rem;border-bottom:1px solid #f1f5f9;padding-bottom:0.75rem;">
          <div>
            <h3 style="margin:0;font-size:1.2rem;color:#0f172a;font-weight:700;">
              ${isEdit ? 'Modifier le poste associatif' : 'Nouveau poste associatif'}
            </h3>
            <span style="font-size:0.84rem;color:#64748b;">
              ${isEdit ? `Ajustez les missions de "${escapeHtml(position?.title || '')}"` : 'Créez un nouveau rôle au sein de l\'organigramme du club.'}
            </span>
          </div>
          <button type="button" class="btn btn-ghost btn-sm" id="org-pos-modal-close" style="font-size:1.2rem;">&times;</button>
        </div>

        <form id="org-position-form" style="display:flex;flex-direction:column;gap:1rem;">
          <label style="display:flex;flex-direction:column;font-weight:600;font-size:0.9rem;color:#0f172a;">
            Intitulé du poste *
            <input type="text" name="title" required minlength="2" placeholder="Ex. Responsable Relations Entreprises" value="${escapeHtml(position?.title || '')}" style="width:100%;margin-top:0.35rem;padding:0.6rem 0.75rem;border:1.5px solid #cbd5e1;border-radius:8px;font-size:0.95rem;">
          </label>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;">
            <label style="display:flex;flex-direction:column;font-weight:600;font-size:0.9rem;color:#0f172a;">
              Pôle / Catégorie *
              <select name="category" required style="width:100%;margin-top:0.35rem;padding:0.6rem 0.75rem;border:1.5px solid #cbd5e1;border-radius:8px;font-size:0.95rem;">
                ${Object.entries(ORG_CATEGORIES).map(([key, meta]) => `
                  <option value="${key}" ${position?.category === key ? 'selected' : ''}>${meta.icon} ${meta.label}</option>
                `).join('')}
              </select>
            </label>

            <label style="display:flex;flex-direction:column;font-weight:600;font-size:0.9rem;color:#0f172a;">
              Ordre d'affichage *
              <input type="number" name="order" required min="1" max="999" value="${position ? position.order : 10}" style="width:100%;margin-top:0.35rem;padding:0.6rem 0.75rem;border:1.5px solid #cbd5e1;border-radius:8px;font-size:0.95rem;">
            </label>
          </div>

          <label style="display:flex;flex-direction:column;font-weight:600;font-size:0.9rem;color:#0f172a;">
            Missions &amp; Responsabilités
            <textarea name="description" rows="4" placeholder="Décrivez les objectifs, attributions et responsabilités associées à ce poste..." style="width:100%;margin-top:0.35rem;padding:0.6rem 0.75rem;border:1.5px solid #cbd5e1;border-radius:8px;font-size:0.92rem;line-height:1.45;">${escapeHtml(position?.description || '')}</textarea>
          </label>

          <div style="display:flex;justify-content:flex-end;gap:0.6rem;margin-top:0.75rem;border-top:1px solid #f1f5f9;padding-top:1rem;">
            <button type="button" class="btn" id="org-pos-modal-cancel">Annuler</button>
            <button type="submit" class="btn btn-primary" id="org-pos-modal-submit" style="font-weight:600;">
              ${isEdit ? 'Enregistrer les modifications' : 'Créer le poste'}
            </button>
          </div>
        </form>
      </div>
    `;

    document.body.appendChild(overlay);

    const close = () => overlay.remove();
    overlay.querySelector('#org-pos-modal-close').addEventListener('click', close);
    overlay.querySelector('#org-pos-modal-cancel').addEventListener('click', close);
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });

    overlay.querySelector('#org-position-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = overlay.querySelector('#org-pos-modal-submit');
      const formData = new FormData(e.target);
      const payload = {
        title: formData.get('title')?.trim(),
        category: formData.get('category'),
        order: parseInt(formData.get('order'), 10) || 0,
        description: formData.get('description')?.trim() || null,
      };

      try {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enregistrement...';
        if (isEdit) {
          await window.AdminApi.organization.updatePosition(positionId, payload);
          showToast(`Poste "${payload.title}" mis à jour avec succès !`, 'success');
        } else {
          await window.AdminApi.organization.createPosition(payload);
          showToast(`Poste "${payload.title}" créé avec succès !`, 'success');
        }
        overlay.remove();
        loadPage('organization');
      } catch (error) {
        showToast(error.message || 'Erreur lors de l\'enregistrement du poste', 'error');
        submitBtn.disabled = false;
        submitBtn.textContent = isEdit ? 'Enregistrer les modifications' : 'Créer le poste';
      }
    });
  }

  function openAssignPositionModal(preselectedPositionId = null, preselectedUserId = null) {
    const existing = document.getElementById('org-assign-modal');
    if (existing) existing.remove();

    const currentYear = new Date().getFullYear();
    const defaultMandate = `${currentYear}-${currentYear + 1}`;

    const overlay = document.createElement('div');
    overlay.id = 'org-assign-modal';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(15,23,42,0.65);display:flex;align-items:center;justify-content:center;z-index:9999;backdrop-filter:blur(4px);';
    overlay.innerHTML = `
      <div class="card" style="max-width:560px;width:92%;padding:1.75rem;max-height:92vh;overflow:auto;box-shadow:0 25px 50px -12px rgba(0,0,0,0.25);border-radius:12px;">
        <div class="card-header" style="margin-bottom:1.25rem;border-bottom:1px solid #f1f5f9;padding-bottom:0.75rem;">
          <div>
            <h3 style="margin:0;font-size:1.2rem;color:#0f172a;font-weight:700;">
              Nomination &amp; Attribution de Poste
            </h3>
            <span style="font-size:0.84rem;color:#64748b;">
              Désignez le membre responsable de cette mission pour le mandat officiel.
            </span>
          </div>
          <button type="button" class="btn btn-ghost btn-sm" id="org-assign-modal-close" style="font-size:1.2rem;">&times;</button>
        </div>

        <form id="org-assign-form" style="display:flex;flex-direction:column;gap:1rem;">
          <label style="display:flex;flex-direction:column;font-weight:600;font-size:0.9rem;color:#0f172a;">
            Poste à pourvoir *
            <select name="positionId" required style="width:100%;margin-top:0.35rem;padding:0.6rem 0.75rem;border:1.5px solid #cbd5e1;border-radius:8px;font-size:0.95rem;">
              <option value="">-- Sélectionnez un poste --</option>
              ${cachedOrgPositions.map(p => `
                <option value="${p.id}" ${p.id === preselectedPositionId ? 'selected' : ''}>
                  #${p.order} • ${escapeHtml(p.title)} (${(ORG_CATEGORIES[p.category] || ORG_CATEGORIES.AUTRE).label})
                </option>
              `).join('')}
            </select>
          </label>

          <label style="display:flex;flex-direction:column;font-weight:600;font-size:0.9rem;color:#0f172a;">
            Membre à nommer *
            <select name="userId" required style="width:100%;margin-top:0.35rem;padding:0.6rem 0.75rem;border:1.5px solid #cbd5e1;border-radius:8px;font-size:0.95rem;">
              <option value="">-- Sélectionnez un membre adhérent --</option>
              ${cachedOrgUsers.map(u => `
                <option value="${u.id}" ${u.id === preselectedUserId ? 'selected' : ''}>
                  ${escapeHtml(u.firstName)} ${escapeHtml(u.lastName)} (${escapeHtml(u.email)}) • ${escapeHtml(u.role)}
                </option>
              `).join('')}
            </select>
          </label>

          <label style="display:flex;flex-direction:column;font-weight:600;font-size:0.9rem;color:#0f172a;">
            Année ou Période du mandat
            <input type="text" name="mandateYear" placeholder="Ex. 2026-2027" value="${defaultMandate}" style="width:100%;margin-top:0.35rem;padding:0.6rem 0.75rem;border:1.5px solid #cbd5e1;border-radius:8px;font-size:0.95rem;">
          </label>

          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:0.85rem;display:flex;align-items:flex-start;gap:0.6rem;">
            <input type="checkbox" name="replaceCurrent" id="replaceCurrent" checked style="margin-top:0.25rem;">
            <label for="replaceCurrent" style="font-size:0.85rem;color:#334155;cursor:pointer;line-height:1.4;">
              <strong>Remplacer automatiquement le titulaire actuel</strong> si ce poste est déjà occupé (son mandat sera archivé).
            </label>
          </div>

          <label style="display:flex;flex-direction:column;font-weight:600;font-size:0.9rem;color:#0f172a;">
            Notes ou Lettre de mission
            <textarea name="notes" rows="3" placeholder="Objectifs prioritaires fixés pour ce mandat, décret de nomination..." style="width:100%;margin-top:0.35rem;padding:0.6rem 0.75rem;border:1.5px solid #cbd5e1;border-radius:8px;font-size:0.92rem;line-height:1.45;"></textarea>
          </label>

          <div style="display:flex;justify-content:flex-end;gap:0.6rem;margin-top:0.75rem;border-top:1px solid #f1f5f9;padding-top:1rem;">
            <button type="button" class="btn" id="org-assign-modal-cancel">Annuler</button>
            <button type="submit" class="btn btn-primary" id="org-assign-modal-submit" style="font-weight:600;">
              Confirmer la nomination
            </button>
          </div>
        </form>
      </div>
    `;

    document.body.appendChild(overlay);

    const close = () => overlay.remove();
    overlay.querySelector('#org-assign-modal-close').addEventListener('click', close);
    overlay.querySelector('#org-assign-modal-cancel').addEventListener('click', close);
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });

    overlay.querySelector('#org-assign-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = overlay.querySelector('#org-assign-modal-submit');
      const formData = new FormData(e.target);
      const payload = {
        positionId: formData.get('positionId'),
        userId: formData.get('userId'),
        mandateYear: formData.get('mandateYear')?.trim() || defaultMandate,
        replaceCurrent: formData.get('replaceCurrent') === 'on',
        notes: formData.get('notes')?.trim() || null,
      };

      try {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Nomination en cours...';
        await window.AdminApi.organization.assignPosition(payload);
        showToast('Membre nommé au poste avec succès !', 'success');
        overlay.remove();
        loadPage('organization');
      } catch (error) {
        showToast(error.message || 'Erreur lors de l\'attribution du poste', 'error');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Confirmer la nomination';
      }
    });
  }

  function openEditAssignmentModal(assignmentId, currentMandate, currentNotes) {
    const existing = document.getElementById('org-edit-assign-modal');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'org-edit-assign-modal';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(15,23,42,0.65);display:flex;align-items:center;justify-content:center;z-index:9999;backdrop-filter:blur(4px);';
    overlay.innerHTML = `
      <div class="card" style="max-width:480px;width:92%;padding:1.75rem;border-radius:12px;box-shadow:0 25px 50px -12px rgba(0,0,0,0.25);">
        <div class="card-header" style="margin-bottom:1rem;border-bottom:1px solid #f1f5f9;padding-bottom:0.75rem;">
          <h3 style="margin:0;font-size:1.15rem;color:#0f172a;font-weight:700;">Modifier le mandat</h3>
          <button type="button" class="btn btn-ghost btn-sm" id="org-edit-assign-close" style="font-size:1.2rem;">&times;</button>
        </div>

        <form id="org-edit-assign-form" style="display:flex;flex-direction:column;gap:1rem;">
          <label style="display:flex;flex-direction:column;font-weight:600;font-size:0.9rem;color:#0f172a;">
            Année ou Période du mandat
            <input type="text" name="mandateYear" value="${escapeHtml(currentMandate || '')}" required style="width:100%;margin-top:0.35rem;padding:0.6rem 0.75rem;border:1.5px solid #cbd5e1;border-radius:8px;font-size:0.95rem;">
          </label>

          <label style="display:flex;flex-direction:column;font-weight:600;font-size:0.9rem;color:#0f172a;">
            Notes
            <textarea name="notes" rows="3" style="width:100%;margin-top:0.35rem;padding:0.6rem 0.75rem;border:1.5px solid #cbd5e1;border-radius:8px;font-size:0.92rem;">${escapeHtml(currentNotes || '')}</textarea>
          </label>

          <div style="display:flex;justify-content:flex-end;gap:0.6rem;margin-top:0.5rem;">
            <button type="button" class="btn" id="org-edit-assign-cancel">Annuler</button>
            <button type="submit" class="btn btn-primary" id="org-edit-assign-submit" style="font-weight:600;">Enregistrer</button>
          </div>
        </form>
      </div>
    `;

    document.body.appendChild(overlay);

    const close = () => overlay.remove();
    overlay.querySelector('#org-edit-assign-close').addEventListener('click', close);
    overlay.querySelector('#org-edit-assign-cancel').addEventListener('click', close);
    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });

    overlay.querySelector('#org-edit-assign-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = overlay.querySelector('#org-edit-assign-submit');
      const formData = new FormData(e.target);
      const payload = {
        mandateYear: formData.get('mandateYear')?.trim(),
        notes: formData.get('notes')?.trim() || null,
      };

      try {
        submitBtn.disabled = true;
        await window.AdminApi.organization.updateAssignment(assignmentId, payload);
        showToast('Mandat mis à jour avec succès !', 'success');
        overlay.remove();
        loadPage('organization');
      } catch (error) {
        showToast(error.message || 'Erreur lors de la mise à jour', 'error');
        submitBtn.disabled = false;
      }
    });
  }

  function bindOrganizationEvents() {
    // Navigation onglets secondaires
    document.getElementById('org-tab-bureau')?.addEventListener('click', () => {
      orgActiveTab = 'bureau';
      loadPage('organization');
    });

    document.getElementById('org-tab-positions')?.addEventListener('click', () => {
      orgActiveTab = 'positions';
      loadPage('organization');
    });

    document.getElementById('org-tab-assignments')?.addEventListener('click', () => {
      orgActiveTab = 'assignments';
      loadPage('organization');
    });

    // Filtres catégories
    document.querySelectorAll('[data-org-cat]').forEach(btn => {
      btn.addEventListener('click', () => {
        orgSelectedCategory = btn.getAttribute('data-org-cat') || 'ALL';
        loadPage('organization');
      });
    });

    // Boutons d'attribution de poste
    document.getElementById('btn-org-assign-top')?.addEventListener('click', () => openAssignPositionModal());
    document.getElementById('btn-org-assign-table')?.addEventListener('click', () => openAssignPositionModal());

    document.querySelectorAll('[data-org-assign]').forEach(btn => {
      btn.addEventListener('click', () => {
        const positionId = btn.getAttribute('data-org-assign');
        openAssignPositionModal(positionId);
      });
    });

    document.querySelectorAll('[data-org-assign-pos]').forEach(btn => {
      btn.addEventListener('click', () => {
        const positionId = btn.getAttribute('data-org-assign-pos');
        openAssignPositionModal(positionId);
      });
    });

    document.querySelectorAll('[data-org-change-post]').forEach(btn => {
      btn.addEventListener('click', () => {
        const positionId = btn.getAttribute('data-org-change-post');
        const userId = btn.getAttribute('data-user-id');
        openAssignPositionModal(positionId, userId);
      });
    });

    // Boutons de création de poste
    document.getElementById('btn-org-create-pos-top')?.addEventListener('click', () => openPositionModal());
    document.getElementById('btn-org-create-pos-table')?.addEventListener('click', () => openPositionModal());
    document.getElementById('btn-org-create-empty')?.addEventListener('click', () => openPositionModal());

    // Boutons d'édition de poste
    document.querySelectorAll('[data-org-edit-pos]').forEach(btn => {
      btn.addEventListener('click', () => {
        const positionId = btn.getAttribute('data-org-edit-pos');
        openPositionModal(positionId);
      });
    });

    // Boutons de suppression de poste
    document.querySelectorAll('[data-org-del-pos]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const positionId = btn.getAttribute('data-org-del-pos');
        const title = btn.getAttribute('data-pos-title') || 'ce poste';
        if (!confirm(`Êtes-vous sûr de vouloir supprimer définitivement le poste "${title}" ?\nLes affectations liées seront également supprimées.`)) {
          return;
        }

        try {
          await window.AdminApi.organization.deletePosition(positionId);
          showToast(`Poste "${title}" supprimé avec succès`, 'warning');
          loadPage('organization');
        } catch (error) {
          showToast(error.message || 'Erreur lors de la suppression', 'error');
        }
      });
    });

    // Boutons de libération / révocation d'affectation
    document.querySelectorAll('[data-org-free]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const assignmentId = btn.getAttribute('data-org-free');
        const title = btn.getAttribute('data-pos-title') || 'ce poste';
        if (!confirm(`Voulez-vous libérer le titulaire actuel de "${title}" ?\nLe poste redeviendra vacant.`)) {
          return;
        }

        try {
          await window.AdminApi.organization.removeAssignment(assignmentId);
          showToast(`Le poste "${title}" est désormais vacant`, 'info');
          loadPage('organization');
        } catch (error) {
          showToast(error.message || 'Erreur lors du retrait de l\'affectation', 'error');
        }
      });
    });

    // Boutons d'édition de mandat
    document.querySelectorAll('[data-org-edit-assign]').forEach(btn => {
      btn.addEventListener('click', () => {
        const assignmentId = btn.getAttribute('data-org-edit-assign');
        const mandate = btn.getAttribute('data-mandate') || '';
        const notes = btn.getAttribute('data-notes') || '';
        openEditAssignmentModal(assignmentId, mandate, notes);
      });
    });
  }

  // ===== Notifications Push & Diffusions Flash =====
  async function loadNotifications() {
    const [statsRes, notifsRes] = await Promise.all([
      window.AdminApi.notifications?.getStats().catch(() => ({ data: { subscribersCount: 0, totalNotifications: 0, unreadCount: 0 } })),
      window.AdminApi.notifications?.getAll({ limit: 20 }).catch(() => ({ data: [] })),
    ]);

    const stats = statsRes?.data || { subscribersCount: 0, totalNotifications: 0, unreadCount: 0 };
    const notifications = notifsRes?.data || [];

    return `
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(220px, 1fr));gap:1rem;margin-bottom:1.5rem;">
        <div class="card" style="padding:1.25rem;border-left:4px solid #2563eb;">
          <div style="display:flex;align-items:center;justify-content:space-between;">
            <span style="font-size:0.85rem;color:var(--color-muted);font-weight:600;">Appareils abonnés au Push</span>
            <span style="font-size:1.5rem;">📲</span>
          </div>
          <div style="font-size:1.75rem;font-weight:800;color:var(--color-primary);margin-top:0.35rem;">
            ${stats.subscribersCount}
          </div>
          <small style="color:var(--color-muted);">Terminaux mobiles et PC enregistrés</small>
        </div>

        <div class="card" style="padding:1.25rem;border-left:4px solid #16a34a;">
          <div style="display:flex;align-items:center;justify-content:space-between;">
            <span style="font-size:0.85rem;color:var(--color-muted);font-weight:600;">Total Notifications</span>
            <span style="font-size:1.5rem;">🔔</span>
          </div>
          <div style="font-size:1.75rem;font-weight:800;color:#16a34a;margin-top:0.35rem;">
            ${stats.totalNotifications}
          </div>
          <small style="color:var(--color-muted);">Émises depuis le lancement</small>
        </div>

        <div class="card" style="padding:1.25rem;border-left:4px solid #d97706;">
          <div style="display:flex;align-items:center;justify-content:space-between;">
            <span style="font-size:0.85rem;color:var(--color-muted);font-weight:600;">En attente de lecture</span>
            <span style="font-size:1.5rem;">📬</span>
          </div>
          <div style="font-size:1.75rem;font-weight:800;color:#d97706;margin-top:0.35rem;">
            ${stats.unreadCount}
          </div>
          <small style="color:var(--color-muted);">Notifications non consultées</small>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:1.5rem;margin-bottom:2rem;">
        <!-- Formulaire de diffusion -->
        <div class="card" style="padding:1.5rem;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:1.25rem;">
            <span style="font-size:1.35rem;">📣</span>
            <h3 style="margin:0;font-size:1.15rem;font-weight:700;">Diffuser une alerte Push Flash</h3>
          </div>
          <p style="color:var(--color-muted);font-size:0.88rem;margin-top:-0.5rem;margin-bottom:1.25rem;">
            Envoyez un message push instantané à tous les membres et visiteurs ayant autorisé les notifications.
          </p>

          <div style="display:flex;flex-direction:column;gap:1rem;">
            <div>
              <label style="display:block;font-size:0.82rem;font-weight:600;margin-bottom:4px;">Type d'alerte</label>
              <select id="broadcast-type" style="width:100%;box-sizing:border-box;padding:8px 10px;border-radius:6px;border:1px solid #cbd5e1;background:#ffffff;">
                <option value="ANNOUNCEMENT">🏛️ Annonce officielle du Bureau</option>
                <option value="FORMATION">🎓 Nouvelle formation / Masterclass</option>
                <option value="JOB">💼 Opportunité métier & orientation</option>
                <option value="BLOG">📝 Nouvel article de blog</option>
                <option value="SYSTEM">⚡ Message système important</option>
              </select>
            </div>

            <div>
              <label style="display:block;font-size:0.82rem;font-weight:600;margin-bottom:4px;">Titre de la notification *</label>
              <input type="text" id="broadcast-title" placeholder="Ex: Séance d'orientation spéciale samedi à 15h !" maxlength="80"
                style="width:100%;box-sizing:border-box;padding:8px 10px;border-radius:6px;border:1px solid #cbd5e1;" />
            </div>

            <div>
              <label style="display:block;font-size:0.82rem;font-weight:600;margin-bottom:4px;">Message de la notification *</label>
              <textarea id="broadcast-message" rows="3" placeholder="Ex: Rejoignez-nous pour découvrir les meilleures filières d'avenir avec nos mentors..." maxlength="200"
                style="width:100%;box-sizing:border-box;padding:8px 10px;border-radius:6px;border:1px solid #cbd5e1;font-family:inherit;"></textarea>
            </div>

            <div>
              <label style="display:block;font-size:0.82rem;font-weight:600;margin-bottom:4px;">Lien de redirection (au clic)</label>
              <input type="text" id="broadcast-url" placeholder="/frontend/formations.html"
                style="width:100%;box-sizing:border-box;padding:8px 10px;border-radius:6px;border:1px solid #cbd5e1;" />
            </div>

            <button type="button" class="btn btn-primary" id="btn-send-broadcast" style="padding:10px 16px;font-weight:600;display:flex;align-items:center;justify-content:center;gap:8px;">
              <span>🚀</span> Diffuser la notification push maintenant
            </button>
          </div>
        </div>

        <!-- Aperçu Smartphone en direct -->
        <div class="card" style="padding:1.5rem;background:#f8fafc;">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:1rem;">
            <span style="font-size:1.25rem;">📱</span>
            <h3 style="margin:0;font-size:1.05rem;font-weight:700;">Aperçu sur Smartphone</h3>
          </div>
          <p style="color:var(--color-muted);font-size:0.82rem;margin-top:-0.5rem;margin-bottom:1.5rem;">
            Rendu simulé de la notification sur l'écran d'accueil d'un utilisateur.
          </p>

          <div style="max-width:320px;margin:0 auto;background:#1e293b;border-radius:24px;padding:12px 10px;box-shadow:0 15px 30px rgba(0,0,0,0.2);">
            <div style="background:#ffffff;border-radius:16px;padding:12px;display:flex;gap:10px;align-items:flex-start;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
              <img src="../frontend/logo.png" style="width:36px;height:36px;border-radius:8px;object-fit:contain;flex-shrink:0;" />
              <div style="flex:1;min-width:0;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2px;">
                  <span style="font-size:0.75rem;font-weight:700;color:#0f172a;">Le Monde du Travail</span>
                  <span style="font-size:0.68rem;color:#94a3b8;">À l'instant</span>
                </div>
                <div id="phone-preview-title" style="font-size:0.82rem;font-weight:600;color:#0f172a;line-height:1.3;margin-bottom:2px;">
                  Titre de la notification
                </div>
                <div id="phone-preview-body" style="font-size:0.75rem;color:#475569;line-height:1.35;">
                  Le contenu de votre message apparaîtra ici...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Historique des notifications -->
      <div class="card" style="padding:1.5rem;">
        <div class="card-header" style="margin-bottom:1rem;">
          <h3 style="margin:0;font-size:1.15rem;font-weight:700;">Historique des dernières notifications émises</h3>
          <span class="badge badge-primary">${notifications.length} affichée(s)</span>
        </div>

        <div style="overflow-x:auto;">
          <table class="table" style="width:100%;border-collapse:collapse;">
            <thead>
              <tr style="text-align:left;border-bottom:1px solid #e2e8f0;font-size:0.82rem;color:var(--color-muted);">
                <th style="padding:8px 12px;">Type</th>
                <th style="padding:8px 12px;">Titre</th>
                <th style="padding:8px 12px;">Message</th>
                <th style="padding:8px 12px;">Cible</th>
                <th style="padding:8px 12px;">Date</th>
              </tr>
            </thead>
            <tbody>
              ${notifications.length === 0 ? `
                <tr><td colspan="5" style="text-align:center;padding:2rem;color:var(--color-muted);">Aucune notification émise pour le moment.</td></tr>
              ` : notifications.map(n => `
                <tr style="border-bottom:1px solid #f1f5f9;font-size:0.85rem;">
                  <td style="padding:10px 12px;"><span class="badge badge-info">${escapeHtml(n.type)}</span></td>
                  <td style="padding:10px 12px;font-weight:600;color:#0f172a;">${escapeHtml(n.title)}</td>
                  <td style="padding:10px 12px;color:#475569;max-width:280px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escapeHtml(n.message)}</td>
                  <td style="padding:10px 12px;color:var(--color-muted);">${n.userId ? '👤 Individuel' : '📢 Tous (Broadcast)'}</td>
                  <td style="padding:10px 12px;color:var(--color-muted);font-size:0.78rem;">${new Date(n.createdAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // ===== Journal d'audit =====
  const logFilters = { module: '', action: '', email: '', from: '', to: '', page: 1 };
  let lastLogsPagination = null;

  async function loadLogs() {
    const response = await window.AdminApi.rbac.getAuditLogs({ ...logFilters, limit: 50 });
    const items = response.data || [];
    const pagination = response.pagination || { page: 1, totalPages: 1, total: items.length };
    lastLogsPagination = pagination;

    return `
      <div class="card">
        <div class="card-header">
          <h2>Journal d'activité</h2>
          <span class="badge badge-primary">${pagination.total} événements</span>
        </div>
        <div style="display:flex;gap:0.8rem;align-items:flex-end;margin-bottom:1rem;flex-wrap:wrap;">
          <label>Acteur<input type="text" id="log-email-filter" placeholder="email…" value="${escapeHtml(logFilters.email)}"></label>
          <label>Module<input type="text" id="log-module-filter" placeholder="formation, users…" value="${escapeHtml(logFilters.module)}"></label>
          <label>Action<input type="text" id="log-action-filter" placeholder="publish, delete…" value="${escapeHtml(logFilters.action)}"></label>
          <label>Du<input type="date" id="log-from-filter" value="${logFilters.from}"></label>
          <label>Au<input type="date" id="log-to-filter" value="${logFilters.to}"></label>
          <button class="btn btn-primary" id="log-apply-filters">Filtrer</button>
        </div>
        <div class="table-wrapper">
          <table>
            <thead><tr><th>Date</th><th>Acteur</th><th>Action</th><th>Module</th><th>Résultat</th></tr></thead>
            <tbody>
              ${items.length === 0 ? '<tr><td colspan="5"><div class="empty-state">Aucune activité</div></td></tr>' : items.map(item => `
                <tr>
                  <td>${new Date(item.createdAt).toLocaleString('fr-FR')}</td>
                  <td>${escapeHtml(item.user?.email || 'Système')}</td>
                  <td>${escapeHtml(item.action)}</td>
                  <td>${escapeHtml(item.module)}</td>
                  <td>${escapeHtml(item.result)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        <div style="display:flex;gap:0.5rem;justify-content:space-between;align-items:center;margin-top:1rem;">
          <button class="btn" id="log-prev-page" ${pagination.page <= 1 ? 'disabled' : ''}>← Précédent</button>
          <span class="text-muted">Page ${pagination.page} / ${pagination.totalPages || 1}</span>
          <button class="btn" id="log-next-page" ${pagination.page >= (pagination.totalPages || 1) ? 'disabled' : ''}>Suivant →</button>
        </div>
      </div>
    `;
  }

  // ===== Paramètres de plateforme & 2FA =====
  async function loadSettings() {
    const [settingsRes, twoFactorRes] = await Promise.all([
      window.AdminApi.settings.getAll().catch(() => ({ data: [] })),
      window.AdminApi.twoFactor.getStatus().catch(() => ({ data: { enabled: false } })),
    ]);

    const settings = settingsRes.data || [];
    const is2faEnabled = !!twoFactorRes.data?.enabled;

    const byCategory = {};
    settings.filter(s => s.category !== 'vitrine').forEach(s => {
      (byCategory[s.category] = byCategory[s.category] || []).push(s);
    });
    const categoryLabels = { general: 'Général', membres: 'Membres', plateforme: 'Plateforme' };

    return `
      <div class="card">
        <div class="card-header">
          <h2>Paramètres de la plateforme</h2>
          <button class="btn btn-primary" id="btn-save-settings">Enregistrer</button>
        </div>
        ${Object.entries(byCategory).map(([category, items]) => `
          <fieldset style="border:1px solid #e0e0e0;border-radius:0.5rem;padding:0.8rem 1rem;margin-bottom:1rem;">
            <legend style="font-weight:600;">${categoryLabels[category] || category}</legend>
            ${items.map(s => {
      const isBool = s.value === 'true' || s.value === 'false';
      return `
                <label style="display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:0.4rem 0;">
                  <span>
                    ${escapeHtml(s.label || s.key)}
                    ${s.isSensitive ? ' <span class="badge badge-warning">sensible 🔒</span>' : ''}
                    <br><small class="text-muted">${escapeHtml(s.key)}</small>
                  </span>
                  ${isBool
          ? `<input type="checkbox" data-setting-key="${s.key}" data-setting-bool="true" ${s.value === 'true' ? 'checked' : ''}>`
          : `<input type="text" data-setting-key="${s.key}" value="${escapeHtml(s.value)}" style="max-width:340px;">`}
                </label>
              `;
    }).join('')}
          </fieldset>
        `).join('')}
        <p class="text-muted" style="font-size:0.85rem;">Les paramètres marqués « sensible » demandent votre mot de passe à l'enregistrement.</p>
      </div>

      <!-- Section Sécurité & 2FA -->
      <div class="card two-factor-card" style="margin-top:1.5rem;">
        <div class="card-header">
          <div style="display:flex;align-items:center;gap:0.75rem;">
            <span style="font-size:1.5rem;">🛡️</span>
            <div>
              <h2 style="margin:0;">Sécurité du compte & Authentification à 2 facteurs (2FA)</h2>
              <span class="text-muted" style="font-size:0.85rem;">Protégez votre compte administrateur avec un code à usage unique (Google Authenticator, Authy, etc.).</span>
            </div>
          </div>
          <div>
            <span class="two-factor-badge ${is2faEnabled ? 'enabled' : 'disabled'}">
              ${is2faEnabled ? '✓ 2FA Activé' : '✕ 2FA Désactivé'}
            </span>
          </div>
        </div>

        <div style="margin-top:1rem;">
          ${is2faEnabled ? `
            <p style="color:var(--color-muted);margin-bottom:1rem;">Votre compte administrateur est protégé par la double authentification.</p>
            <button class="btn btn-danger" id="btn-disable-2fa">Désactiver le 2FA</button>
          ` : `
            <p style="color:var(--color-muted);margin-bottom:1rem;">La double authentification n'est pas encore activée sur votre compte.</p>
            <button class="btn btn-primary" id="btn-start-2fa-setup">Activer le 2FA maintenant</button>
            <div id="setup-2fa-container" style="display:none;margin-top:1.5rem;padding:1.25rem;border:1px dashed var(--color-border);border-radius:0.75rem;background:#fafafa;">
              <h3 style="margin-top:0;font-size:1.05rem;">1. Scannez le QR Code</h3>
              <p class="text-muted" style="font-size:0.9rem;">Ouvrez votre application d'authentification (Google Authenticator, Microsoft Authenticator, 1Password) et scannez ce code :</p>
              <div style="display:flex;align-items:center;gap:2rem;flex-wrap:wrap;margin:1rem 0;">
                <div id="qr-code-wrapper" style="background:#fff;padding:8px;border:1px solid #ddd;border-radius:8px;display:inline-block;">
                  <img id="qr-code-img" src="" alt="QR Code 2FA" style="display:block;width:180px;height:180px;">
                </div>
                <div style="flex:1;min-width:260px;">
                  <div style="font-size:0.85rem;color:var(--color-muted);margin-bottom:0.25rem;">Ou saisissez manuellement cette clé secrète :</div>
                  <code id="manual-2fa-secret" style="background:#e2e8f0;padding:0.4rem 0.6rem;border-radius:4px;font-weight:700;font-size:1rem;display:inline-block;letter-spacing:0.1em;user-select:all;"></code>
                </div>
              </div>
              <h3 style="margin-top:1.25rem;font-size:1.05rem;">2. Confirmez le code à 6 chiffres</h3>
              <div style="display:flex;gap:0.75rem;align-items:center;margin-top:0.5rem;flex-wrap:wrap;">
                <input type="text" id="input-verify-2fa" class="form-input totp-code-input" maxlength="6" placeholder="000000" inputmode="numeric" style="width:160px;font-size:1.2rem;font-weight:700;letter-spacing:0.2em;text-align:center;">
                <button class="btn btn-primary" id="btn-confirm-enable-2fa">Vérifier & Activer</button>
                <button class="btn btn-ghost" id="btn-cancel-2fa-setup">Annuler</button>
              </div>
            </div>
          `}
        </div>
      </div>
    `;
  }

  // ===== Vitrine & Éditorial (À la Une & Frise Chronologique) =====
  async function loadVitrine() {
    let settings = [];
    try {
      const res = await window.AdminApi.settings.getAll();
      settings = res.data || [];
    } catch (e) {
      console.warn('Impossible de charger les paramètres:', e);
    }

    const rawFeatured = settings.find(s => s.key === 'home.featured_monthly')?.value;
    const rawTimeline = settings.find(s => s.key === 'about.timeline_steps')?.value;

    let featured = {
      tag: '🔥 À la Une ce mois-ci',
      title: 'Dossier Spécial : IA & Cybersécurité',
      description: 'Découvrez les compétences les plus recherchées par les recruteurs en 2025 et nos fiches immersives dédiées aux nouveaux métiers technologiques.',
      perks: [
        '+2 500 offres analysées',
        'Salaires et grilles réelles',
        'Tutoriels d\'experts'
      ],
      primaryButtonText: 'Découvrir la sélection',
      primaryButtonLink: '#orientation',
      sideboxBadge: 'Tendance Métiers',
      sideboxCounter: '+34%',
      sideboxDesc: 'd\'offres dans la tech en Afrique de l\'Ouest ce trimestre',
      sideboxButtonText: 'Explorer le dossier',
      sideboxButtonLink: '#contact'
    };

    if (rawFeatured) {
      try {
        const parsed = typeof rawFeatured === 'string' ? JSON.parse(rawFeatured) : rawFeatured;
        featured = { ...featured, ...parsed };
      } catch (err) {
        console.error('Erreur parsing featured_monthly:', err);
      }
    }

    let timelineSteps = [
      {
        year: '2024',
        title: 'Idéation & Naissance',
        description: 'Constat du fossé entre formation académique et marché du travail. Création du noyau fondateur de mentors et experts.'
      },
      {
        year: '2025',
        title: 'Structuration & Plateforme',
        description: 'Lancement de la plateforme Le Monde du Travail, des fiches métiers immersives et des premiers cohortes d\'accompagnement.'
      },
      {
        year: '2026',
        title: 'Réseau National & Impact',
        description: 'Ouverture aux entreprises partenaires, certifications reconnues et mentorat one-to-one pour des milliers de jeunes talents.'
      }
    ];

    if (rawTimeline) {
      try {
        const parsed = typeof rawTimeline === 'string' ? JSON.parse(rawTimeline) : rawTimeline;
        if (Array.isArray(parsed) && parsed.length > 0) {
          timelineSteps = parsed;
        }
      } catch (err) {
        console.error('Erreur parsing timeline_steps:', err);
      }
    }

    const perks = featured.perks || [];

    return `
      <div class="card" style="margin-bottom:1.5rem;">
        <div class="card-header">
          <div>
            <h2 style="display:flex;align-items:center;gap:0.6rem;margin:0;">
              <span>🎨</span> <span>Vitrine & Éditorial</span>
            </h2>
            <p style="margin:0.25rem 0 0 0;font-size:0.85rem;color:var(--color-muted);">
              Personnalisez les sections stratégiques de la page d'Accueil et de la page À Propos en temps réel.
            </p>
          </div>
          <div style="display:flex;gap:0.75rem;align-items:center;">
            <a href="../frontend/index.html" target="_blank" class="btn btn-secondary" style="font-size:0.85rem;display:inline-flex;align-items:center;gap:0.4rem;">
              <span>🌐</span> <span>Voir le site en direct</span>
            </a>
          </div>
        </div>

        <div class="vitrine-tabs">
          <button class="vitrine-tab-btn active" data-vitrine-tab="home">
            🔥 À la Une ce mois-ci (Accueil)
          </button>
          <button class="vitrine-tab-btn" data-vitrine-tab="about">
            🏛️ Les Grandes Étapes du Club (À Propos)
          </button>
        </div>

        <!-- TAB 1 : ACCUEIL (À LA UNE CE MOIS-CI) -->
        <div id="vitrine-tab-home-pane" class="vitrine-tab-pane">
          <div class="vitrine-grid">
            <!-- Formulaire d'édition -->
            <form id="form-vitrine-featured" style="display:flex;flex-direction:column;gap:1.25rem;">
              
              <fieldset style="border:1px solid var(--color-border);border-radius:10px;padding:1.2rem;background:var(--color-bg-card);">
                <legend style="font-weight:700;padding:0 0.5rem;color:var(--color-primary);">🏷️ Accroche & Titre Principal</legend>
                
                <label style="display:block;margin-bottom:0.75rem;">
                  <span style="font-weight:600;font-size:0.85rem;">Badge supérieur (Tag)</span>
                  <input type="text" id="feat-tag" class="form-input" value="${escapeHtml(featured.tag)}" placeholder="🔥 À la Une ce mois-ci" required style="width:100%;margin-top:0.25rem;">
                </label>

                <label style="display:block;margin-bottom:0.75rem;">
                  <span style="font-weight:600;font-size:0.85rem;">Grand Titre du dossier *</span>
                  <input type="text" id="feat-title" class="form-input" value="${escapeHtml(featured.title)}" placeholder="Ex. Dossier Spécial : IA & Cybersécurité" required style="width:100%;margin-top:0.25rem;">
                </label>

                <label style="display:block;">
                  <span style="font-weight:600;font-size:0.85rem;">Description éditoriale *</span>
                  <textarea id="feat-desc" rows="3" class="form-input" placeholder="Présentation synthétique du dossier..." required style="width:100%;margin-top:0.25rem;resize:vertical;">${escapeHtml(featured.description)}</textarea>
                </label>
              </fieldset>

              <fieldset style="border:1px solid var(--color-border);border-radius:10px;padding:1.2rem;background:var(--color-bg-card);">
                <legend style="font-weight:700;padding:0 0.5rem;color:var(--color-primary);">✨ Points Forts / Avantages Clés (Puces)</legend>
                
                <div style="display:grid;grid-template-columns:1fr;gap:0.6rem;">
                  <label>
                    <span style="font-size:0.82rem;color:var(--color-muted);">Puce n°1 :</span>
                    <input type="text" id="feat-perk-1" class="form-input feat-perk-input" value="${escapeHtml(perks[0] || '')}" placeholder="Ex. +2 500 offres analysées" style="width:100%;margin-top:0.2rem;">
                  </label>
                  <label>
                    <span style="font-size:0.82rem;color:var(--color-muted);">Puce n°2 :</span>
                    <input type="text" id="feat-perk-2" class="form-input feat-perk-input" value="${escapeHtml(perks[1] || '')}" placeholder="Ex. Salaires et grilles réelles" style="width:100%;margin-top:0.2rem;">
                  </label>
                  <label>
                    <span style="font-size:0.82rem;color:var(--color-muted);">Puce n°3 :</span>
                    <input type="text" id="feat-perk-3" class="form-input feat-perk-input" value="${escapeHtml(perks[2] || '')}" placeholder="Ex. Tutoriels d'experts" style="width:100%;margin-top:0.2rem;">
                  </label>
                </div>
              </fieldset>

              <fieldset style="border:1px solid var(--color-border);border-radius:10px;padding:1.2rem;background:var(--color-bg-card);">
                <legend style="font-weight:700;padding:0 0.5rem;color:var(--color-primary);">🚀 Call to Action Principal</legend>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;">
                  <label>
                    <span style="font-weight:600;font-size:0.85rem;">Libellé du bouton</span>
                    <input type="text" id="feat-btn-text" class="form-input" value="${escapeHtml(featured.primaryButtonText || 'Découvrir la sélection')}" style="width:100%;margin-top:0.25rem;">
                  </label>
                  <label>
                    <span style="font-weight:600;font-size:0.85rem;">Lien de destination</span>
                    <input type="text" id="feat-btn-link" class="form-input" value="${escapeHtml(featured.primaryButtonLink || '#orientation')}" placeholder="#orientation ou https://..." style="width:100%;margin-top:0.25rem;">
                  </label>
                </div>
              </fieldset>

              <fieldset style="border:1px solid var(--color-border);border-radius:10px;padding:1.2rem;background:var(--color-bg-card);">
                <legend style="font-weight:700;padding:0 0.5rem;color:var(--color-primary);">📊 Encart Latéral Statistique (Sidebox)</legend>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;margin-bottom:0.75rem;">
                  <label>
                    <span style="font-weight:600;font-size:0.85rem;">Badge de l'encart</span>
                    <input type="text" id="feat-side-badge" class="form-input" value="${escapeHtml(featured.sideboxBadge || 'Tendance Métiers')}" style="width:100%;margin-top:0.25rem;">
                  </label>
                  <label>
                    <span style="font-weight:600;font-size:0.85rem;">Chiffre clé / Compteur</span>
                    <input type="text" id="feat-side-counter" class="form-input" value="${escapeHtml(featured.sideboxCounter || '+34%')}" placeholder="+34%" style="width:100%;margin-top:0.25rem;">
                  </label>
                </div>
                <label style="display:block;margin-bottom:0.75rem;">
                  <span style="font-weight:600;font-size:0.85rem;">Description du chiffre</span>
                  <input type="text" id="feat-side-desc" class="form-input" value="${escapeHtml(featured.sideboxDesc || '')}" placeholder="d'offres dans la tech..." style="width:100%;margin-top:0.25rem;">
                </label>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;">
                  <label>
                    <span style="font-weight:600;font-size:0.85rem;">Bouton Encart : Libellé</span>
                    <input type="text" id="feat-side-btn-text" class="form-input" value="${escapeHtml(featured.sideboxButtonText || 'Explorer le dossier')}" style="width:100%;margin-top:0.25rem;">
                  </label>
                  <label>
                    <span style="font-weight:600;font-size:0.85rem;">Bouton Encart : Lien</span>
                    <input type="text" id="feat-side-btn-link" class="form-input" value="${escapeHtml(featured.sideboxButtonLink || '#contact')}" style="width:100%;margin-top:0.25rem;">
                  </label>
                </div>
              </fieldset>

              <div style="display:flex;justify-content:flex-end;margin-top:0.5rem;">
                <button type="button" id="btn-save-featured" class="btn btn-primary" style="padding:0.75rem 1.5rem;font-size:1rem;font-weight:700;">
                  💾 Enregistrer la section Accueil
                </button>
              </div>
            </form>

            <!-- Aperçu interactif en direct -->
            <div class="vitrine-preview-sticky">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.6rem;">
                <span style="font-weight:700;font-size:0.9rem;text-transform:uppercase;letter-spacing:0.05em;color:var(--color-muted);">
                  👁️ Aperçu Temps Réel
                </span>
                <span class="badge badge-success" style="font-size:0.72rem;">Synchronisé</span>
              </div>
              
              <div class="vitrine-preview-card" id="preview-featured-card">
                <span id="pv-tag" style="background:rgba(255,255,255,0.15);padding:0.25rem 0.65rem;border-radius:9999px;font-size:0.75rem;font-weight:600;display:inline-block;margin-bottom:0.75rem;">
                  ${escapeHtml(featured.tag)}
                </span>
                
                <h3 id="pv-title" style="margin:0 0 0.5rem 0;font-size:1.35rem;font-weight:800;line-height:1.25;color:#ffffff;">
                  ${escapeHtml(featured.title)}
                </h3>
                
                <p id="pv-desc" style="font-size:0.88rem;color:#cbd5e1;line-height:1.5;margin-bottom:1rem;">
                  ${escapeHtml(featured.description)}
                </p>

                <div id="pv-perks" style="display:flex;flex-wrap:wrap;gap:0.4rem;margin-bottom:1.25rem;">
                  ${perks.filter(Boolean).map(p => `<span class="vitrine-preview-perk-badge">✓ ${escapeHtml(p)}</span>`).join('')}
                </div>

                <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;">
                  <span id="pv-btn" style="background:#2563eb;color:#fff;font-weight:700;font-size:0.85rem;padding:0.5rem 1rem;border-radius:6px;display:inline-flex;align-items:center;gap:0.4rem;">
                    <span id="pv-btn-text">${escapeHtml(featured.primaryButtonText || 'Découvrir')}</span> &rarr;
                  </span>
                </div>

                <!-- Mini Encart Sidebox Preview -->
                <div style="margin-top:1.25rem;padding:1rem;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);border-radius:8px;">
                  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem;">
                    <span id="pv-side-badge" style="font-size:0.72rem;text-transform:uppercase;color:#93c5fd;font-weight:700;">${escapeHtml(featured.sideboxBadge)}</span>
                    <span id="pv-side-counter" style="font-size:1.25rem;font-weight:900;color:#60a5fa;">${escapeHtml(featured.sideboxCounter)}</span>
                  </div>
                  <p id="pv-side-desc" style="font-size:0.78rem;color:#e2e8f0;margin:0 0 0.6rem 0;line-height:1.4;">
                    ${escapeHtml(featured.sideboxDesc)}
                  </p>
                  <span id="pv-side-btn-text" style="font-size:0.78rem;color:#93c5fd;text-decoration:underline;">${escapeHtml(featured.sideboxButtonText)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- TAB 2 : À PROPOS (LES GRANDES ÉTAPES DU CLUB) -->
        <div id="vitrine-tab-about-pane" class="vitrine-tab-pane" style="display:none;">
          <div class="vitrine-grid">
            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;">
                <p style="margin:0;font-size:0.9rem;color:var(--color-muted);">
                  Gérez la frise chronologique affichée sur la page <strong>À Propos</strong>.
                </p>
                <button type="button" id="btn-add-timeline-step" class="btn btn-secondary" style="font-size:0.85rem;display:inline-flex;align-items:center;gap:0.35rem;">
                  <span>➕</span> <span>Ajouter une étape</span>
                </button>
              </div>

              <div id="timeline-steps-editor">
                ${timelineSteps.map((step, idx) => `
                  <div class="timeline-step-card" data-step-index="${idx}">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;">
                      <span class="badge badge-primary" style="font-size:0.8rem;">Étape n°${idx + 1}</span>
                      <button type="button" class="btn btn-danger btn-sm btn-delete-step" data-step-index="${idx}" title="Supprimer cette étape">🗑️ Supprimer</button>
                    </div>
                    <div style="display:grid;grid-template-columns:120px 1fr;gap:0.75rem;margin-bottom:0.75rem;">
                      <label>
                        <span style="font-size:0.8rem;font-weight:600;display:block;margin-bottom:0.2rem;">Année / Date</span>
                        <input type="text" class="form-input step-year-input" value="${escapeHtml(step.year || '')}" placeholder="Ex. 2024" style="width:100%;">
                      </label>
                      <label>
                        <span style="font-size:0.8rem;font-weight:600;display:block;margin-bottom:0.2rem;">Titre de l'étape *</span>
                        <input type="text" class="form-input step-title-input" value="${escapeHtml(step.title || '')}" placeholder="Titre marquant de l'étape" style="width:100%;">
                      </label>
                    </div>
                    <label style="display:block;">
                      <span style="font-size:0.8rem;font-weight:600;display:block;margin-bottom:0.2rem;">Description détaillée</span>
                      <textarea rows="2" class="form-input step-desc-input" placeholder="Détaillez les réalisations de cette étape..." style="width:100%;">${escapeHtml(step.description || '')}</textarea>
                    </label>
                  </div>
                `).join('')}
              </div>

              <div style="display:flex;justify-content:flex-end;margin-top:1.25rem;">
                <button type="button" id="btn-save-timeline" class="btn btn-primary" style="padding:0.75rem 1.5rem;font-size:1rem;font-weight:700;">
                  💾 Enregistrer la Frise Chronologique
                </button>
              </div>
            </div>

            <!-- Aperçu interactif Timeline -->
            <div class="vitrine-preview-sticky">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:0.6rem;">
                <span style="font-weight:700;font-size:0.9rem;text-transform:uppercase;letter-spacing:0.05em;color:var(--color-muted);">
                  👁️ Aperçu Frise Chronologique
                </span>
                <span class="badge badge-success" style="font-size:0.72rem;">Synchronisé</span>
              </div>

              <div class="card" style="background:var(--color-bg-card);border:1px solid var(--color-border);padding:1.5rem;border-radius:12px;">
                <h4 style="margin:0 0 1.25rem 0;font-size:1.1rem;color:var(--color-text);">Grandes Étapes du Club</h4>
                <div id="pv-timeline-list">
                  ${timelineSteps.map(step => `
                    <div class="vitrine-timeline-preview-item">
                      <div style="display:inline-block;background:rgba(59,130,246,0.15);color:#2563eb;font-weight:800;font-size:0.75rem;padding:0.15rem 0.5rem;border-radius:4px;margin-bottom:0.25rem;">
                        ${escapeHtml(step.year || '')}
                      </div>
                      <h5 style="margin:0.2rem 0;font-size:0.95rem;color:var(--color-text);font-weight:700;">
                        ${escapeHtml(step.title || '')}
                      </h5>
                      <p style="margin:0;font-size:0.8rem;color:var(--color-muted);line-height:1.4;">
                        ${escapeHtml(step.description || '')}
                      </p>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    `;
  }

  function bindPageEvents(module) {
    if (module === 'dashboard') {
      // Navigation interactive depuis les cartes KPI et alertes
      document.querySelectorAll('[data-dash-navigate]').forEach(el => {
        el.addEventListener('click', (e) => {
          e.preventDefault();
          const target = el.getAttribute('data-dash-navigate');
          if (target && window.AdminRouter) {
            window.AdminRouter.navigate(target);
          }
        });
      });

      // Défilement automatique et focus sur la table des adhésions
      document.querySelectorAll('[data-dash-action="scroll-memberships"]').forEach(el => {
        el.addEventListener('click', (e) => {
          e.preventDefault();
          const target = document.getElementById('dash-memberships-section');
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            target.style.transition = 'box-shadow 0.3s ease';
            target.style.boxShadow = '0 0 0 3px rgba(37, 99, 235, 0.4)';
            setTimeout(() => { target.style.boxShadow = ''; }, 1500);
          }
        });
      });

      // Défilement automatique et focus sur la section de présence en direct
      document.querySelectorAll('[data-dash-action="scroll-presence"]').forEach(el => {
        el.addEventListener('click', (e) => {
          e.preventDefault();
          const target = document.getElementById('dash-presence-section');
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            target.style.transition = 'box-shadow 0.3s ease';
            target.style.boxShadow = '0 0 0 3px rgba(16, 185, 129, 0.4)';
            setTimeout(() => { target.style.boxShadow = ''; }, 1500);
          }
        });
      });

      // Actions Rapides Opérationnelles
      document.getElementById('dash-btn-new-formation')?.addEventListener('click', () => {
        openContentModal('formations');
      });

      document.getElementById('dash-btn-new-job')?.addEventListener('click', () => {
        openContentModal('jobs');
      });

      document.getElementById('dash-btn-new-post')?.addEventListener('click', () => {
        openBlogPostModal();
      });

      document.getElementById('dash-btn-goto-admins')?.addEventListener('click', () => {
        window.AdminRouter?.navigate('admins');
      });

      document.getElementById('dash-btn-goto-logs')?.addEventListener('click', () => {
        window.AdminRouter?.navigate('logs');
      });

      document.getElementById('dash-btn-goto-settings')?.addEventListener('click', () => {
        window.AdminRouter?.navigate('settings');
      });

      document.getElementById('dash-view-all-logs')?.addEventListener('click', () => {
        window.AdminRouter?.navigate('logs');
      });

      // Bouton Actualiser en direct
      document.getElementById('dash-refresh-btn')?.addEventListener('click', () => {
        showToast('Actualisation des métriques en direct...', 'info');
        loadPage('dashboard');
      });

      // Bascule rapide du mode maintenance
      document.getElementById('dash-toggle-maint')?.addEventListener('click', async () => {
        try {
          const settingsRes = await window.AdminApi.settings.getAll();
          const maintSetting = (settingsRes.data || []).find(s => s.key === 'platform.maintenanceMode');
          const isCurrentlyMaint = maintSetting?.value === 'true';
          const nextVal = !isCurrentlyMaint;

          const promptMsg = nextVal
            ? 'Activer le mode maintenance ? Le public ne pourra plus accéder au site.'
            : 'Désactiver le mode maintenance ? La plateforme sera de nouveau accessible à tous.';

          if (!confirm(promptMsg)) return;

          await window.AdminApi.settings.update('platform.maintenanceMode', nextVal ? 'true' : 'false');
          showToast(nextVal ? 'Mode maintenance activé' : 'Plateforme réouverte avec succès', 'success');
          loadPage('dashboard');
        } catch (err) {
          showToast(err.message || 'Impossible de modifier le mode maintenance', 'error');
        }
      });

      // Approbation d'adhésion
      document.querySelectorAll('[data-approve-membership]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-approve-membership');
          const candidateName = btn.getAttribute('data-candidate-name') || 'le candidat';
          openApproveMembershipModal(id, candidateName, () => loadPage('dashboard'));
        });
      });

      // Refus d'adhésion
      document.querySelectorAll('[data-reject-membership]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-reject-membership');
          const candidateName = btn.getAttribute('data-candidate-name') || 'le candidat';
          openRejectMembershipModal(id, candidateName, () => loadPage('dashboard'));
        });
      });

      // Défilement automatique vers le collège des mentors
      document.querySelectorAll('[data-dash-action="scroll-mentors"]').forEach(el => {
        el.addEventListener('click', (e) => {
          e.preventDefault();
          const target = document.getElementById('dash-mentors-section');
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            target.style.transition = 'box-shadow 0.3s ease';
            target.style.boxShadow = '0 0 0 3px rgba(245, 158, 11, 0.4)';
            setTimeout(() => { target.style.boxShadow = ''; }, 1500);
          }
        });
      });

      // Boutons pour ouvrir la modale de nomination de mentor
      ['dash-btn-nominate-mentor', 'dash-btn-open-nominate-modal', 'dash-btn-open-nominate-empty'].forEach(id => {
        document.getElementById(id)?.addEventListener('click', () => {
          openNominateMentorModal();
        });
      });

      // Révocation de statut mentor depuis le dashboard
      document.querySelectorAll('[data-mentor-revoke]').forEach(btn => {
        btn.addEventListener('click', async () => {
          const userId = btn.getAttribute('data-mentor-revoke');
          const name = btn.getAttribute('data-mentor-name') || 'ce mentor';
          if (!confirm(`Révoquer le statut de Mentor & Expert de ${name} ?`)) return;
          try {
            const res = await window.AdminApi.rbac.revokeMentor(userId);
            showToast(res.message || 'Statut révoqué avec succès', 'warning');
            loadPage('dashboard');
          } catch (err) {
            showToast(err.message || 'Erreur lors de la révocation', 'error');
          }
        });
      });
    }

    if (module === 'analytics') {
      const refreshBtn = document.getElementById('analytics-refresh-btn');
      if (refreshBtn) {
        refreshBtn.addEventListener('click', () => {
          showToast('Actualisation des statistiques d\'audience...', 'info');
          loadPage('analytics', true);
        });
      }

      const searchInput = document.getElementById('analytics-search-input');
      const statusFilter = document.getElementById('analytics-status-filter');
      const tbody = document.getElementById('presence-table-tbody');
      const countBadge = document.getElementById('presence-count-badge');

      const applyPresenceFilter = () => {
        if (!tbody) return;
        const q = (searchInput?.value || '').trim().toLowerCase();
        const st = statusFilter?.value || '';

        const filtered = analyticsUsersCache.filter(u => {
          const matchQ = !q || (u.fullName && u.fullName.toLowerCase().includes(q)) || (u.email && u.email.toLowerCase().includes(q));
          const matchSt = !st || u.presenceStatus === st;
          return matchQ && matchSt;
        });

        tbody.innerHTML = renderPresenceRows(filtered);
        if (countBadge) {
          countBadge.textContent = `${filtered.length} membre${filtered.length > 1 ? 's' : ''}`;
        }
      };

      searchInput?.addEventListener('input', applyPresenceFilter);
      statusFilter?.addEventListener('change', applyPresenceFilter);
    }

    if (module === 'formations' || module === 'jobs' || module === 'metiers') {
      const isJob = module === 'jobs' || module === 'metiers';
      const contentKey = isJob ? 'jobs' : 'formations';
      const reloadPage = module === 'jobs' ? 'metiers' : module;
      const client = isJob ? window.AdminApi.jobs : window.AdminApi.formations;

      // Suppression massive : les cases cochées alimentent le bouton d'action
      const bulkButton = document.getElementById('btn-bulk-delete');
      const bulkCount = document.getElementById('bulk-count');
      const selectAll = document.getElementById('content-select-all');

      const updateBulkButton = () => {
        const all = document.querySelectorAll('.content-select');
        const checked = document.querySelectorAll('.content-select:checked');
        if (selectAll && all.length > 0) {
          selectAll.checked = checked.length === all.length;
          selectAll.indeterminate = checked.length > 0 && checked.length < all.length;
        }
        if (bulkButton) bulkButton.style.display = checked.length > 0 ? '' : 'none';
        if (bulkCount) bulkCount.textContent = checked.length;
      };

      if (selectAll) {
        selectAll.addEventListener('change', () => {
          document.querySelectorAll('.content-select').forEach(cb => {
            cb.checked = selectAll.checked;
          });
          updateBulkButton();
        });
      }

      document.querySelectorAll('.content-select').forEach(cb => {
        cb.addEventListener('change', updateBulkButton);
      });

      if (bulkButton) {
        bulkButton.addEventListener('click', async () => {
          if (bulkButton.disabled) return;
          const ids = Array.from(document.querySelectorAll('.content-select:checked')).map(cb => cb.value);
          if (ids.length === 0) return;
          if (!confirm(`Supprimer définitivement ${ids.length} élément(s) ? Cette action demande votre mot de passe.`)) return;
          bulkButton.disabled = true;
          try {
            const res = await client.removeBulk(ids);
            showToast(res.message, 'warning');
            loadPage(reloadPage);
          } catch (error) {
            showToast(error.message, 'error');
            bulkButton.disabled = false;
          }
        });
      }

      const statusFilter = document.getElementById('content-status-filter');
      if (statusFilter) {
        statusFilter.addEventListener('change', () => {
          contentFilters[contentKey].status = statusFilter.value;
          loadPage(reloadPage);
        });
      }

      const mineFilter = document.getElementById('content-mine-filter');
      if (mineFilter) {
        mineFilter.addEventListener('change', () => {
          contentFilters[contentKey].mine = mineFilter.checked;
          loadPage(reloadPage);
        });
      }

      document.getElementById('btn-create-content')?.addEventListener('click', () => {
        openContentModal(contentKey);
      });

      document.getElementById(`btn-export-${contentKey}-csv`)?.addEventListener('click', () => {
        const items = Object.values(contentCache[contentKey] || {});
        if (items.length === 0) {
          showToast('Aucun élément à exporter', 'info');
          return;
        }
        if (isJob) {
          const headers = ['Titre', 'Domaine', 'Catégorie', 'Statut', 'Auteur', 'Créé le', 'Mis à jour le'];
          const rows = items.map(j => [
            j.title || '',
            j.domain || '',
            j.category || '',
            j.status || '',
            j.createdBy ? `${j.createdBy.firstName} ${j.createdBy.lastName}` : '',
            j.createdAt ? new Date(j.createdAt).toLocaleDateString('fr-FR') : '',
            j.updatedAt ? new Date(j.updatedAt).toLocaleDateString('fr-FR') : ''
          ]);
          exportTableToCsv(`metiers_${new Date().toISOString().slice(0, 10)}.csv`, headers, rows);
          showToast('Export CSV des métiers téléchargé', 'success');
        } else {
          const headers = ['Titre', 'Filière', 'Niveau', 'Format', 'Prix', 'Statut', 'Auteur', 'Créé le', 'Mis à jour le'];
          const rows = items.map(f => [
            f.title || '',
            f.category || '',
            f.level || '',
            f.format || '',
            f.price != null ? `${f.price} FCFA` : '',
            f.status || '',
            f.createdBy ? `${f.createdBy.firstName} ${f.createdBy.lastName}` : '',
            f.createdAt ? new Date(f.createdAt).toLocaleDateString('fr-FR') : '',
            f.updatedAt ? new Date(f.updatedAt).toLocaleDateString('fr-FR') : ''
          ]);
          exportTableToCsv(`formations_${new Date().toISOString().slice(0, 10)}.csv`, headers, rows);
          showToast('Export CSV des formations téléchargé', 'success');
        }
      });

      document.querySelectorAll('[data-content-action]').forEach(btn => {
        btn.addEventListener('click', async () => {
          if (btn.disabled) return;
          const actionModule = btn.getAttribute('data-content-module');
          const action = btn.getAttribute('data-content-action');
          const id = btn.getAttribute('data-content-id');
          const actionClient = actionModule === 'formations' ? window.AdminApi.formations : window.AdminApi.jobs;

          if (action === 'edit') {
            openContentModal(actionModule, contentCache[actionModule][id] || { id });
            return;
          }
          if (action === 'delete' && !confirm('Supprimer définitivement ce contenu ?')) return;

          btn.disabled = true;
          const method = action === 'delete' ? 'remove' : action;
          const messages = {
            publish: 'Contenu publié',
            unpublish: 'Contenu dépublié',
            archive: 'Contenu archivé',
            submit: 'Soumis à validation',
            delete: 'Contenu supprimé',
          };
          try {
            await actionClient[method](id);
            showToast(messages[action] || 'Action effectuée', action === 'delete' ? 'warning' : 'success');
            loadPage(actionModule === 'jobs' ? 'metiers' : actionModule);
          } catch (error) {
            showToast(error.message, 'error');
            btn.disabled = false;
          }
        });
      });
    }

    if (module === 'blog') {
      const btnCreate = document.getElementById('btn-create-post');
      if (btnCreate) {
        btnCreate.addEventListener('click', () => openBlogPostModal());
      }

      const statusFilter = document.getElementById('blog-status-filter');
      if (statusFilter) {
        statusFilter.addEventListener('change', () => {
          blogFilters.status = statusFilter.value;
          loadPage('blog');
        });
      }

      const categoryFilter = document.getElementById('blog-category-filter');
      if (categoryFilter) {
        categoryFilter.addEventListener('change', () => {
          blogFilters.category = categoryFilter.value;
          loadPage('blog');
        });
      }

      const mineFilter = document.getElementById('blog-mine-filter');
      if (mineFilter) {
        mineFilter.addEventListener('change', () => {
          blogFilters.mine = mineFilter.checked;
          loadPage('blog');
        });
      }

      const searchInput = document.getElementById('blog-search-filter');
      const searchBtn = document.getElementById('btn-search-blog');
      const executeSearch = () => {
        blogFilters.search = searchInput?.value || '';
        loadPage('blog');
      };
      if (searchBtn) searchBtn.addEventListener('click', executeSearch);
      if (searchInput) {
        searchInput.addEventListener('keydown', e => {
          if (e.key === 'Enter') executeSearch();
        });
      }

      // Actions sur chaque article
      document.querySelectorAll('.btn-blog-action').forEach(btn => {
        btn.addEventListener('click', async () => {
          if (btn.disabled) return;
          const action = btn.getAttribute('data-action');
          const id = btn.getAttribute('data-id');
          const post = blogCache[id];

          if (action === 'edit') {
            openBlogPostModal(post);
            return;
          }

          if (action === 'delete') {
            if (!confirm(`Supprimer définitivement l'article « ${post?.title || ''} » ?`)) return;
            btn.disabled = true;
            try {
              await window.AdminApi.blog.remove(id);
              showToast('Article supprimé avec succès', 'warning');
              loadPage('blog');
            } catch (error) {
              showToast(error.message, 'error');
              btn.disabled = false;
            }
            return;
          }

          if (action === 'submit') {
            btn.disabled = true;
            try {
              await window.AdminApi.blog.submit(id);
              showToast('Article soumis à validation', 'success');
              loadPage('blog');
            } catch (error) {
              showToast(error.message, 'error');
              btn.disabled = false;
            }
            return;
          }

          if (action === 'publish') {
            btn.disabled = true;
            try {
              await window.AdminApi.blog.publish(id);
              showToast('Article publié avec succès', 'success');
              loadPage('blog');
            } catch (error) {
              showToast(error.message, 'error');
              btn.disabled = false;
            }
            return;
          }

          if (action === 'unpublish') {
            btn.disabled = true;
            try {
              await window.AdminApi.blog.unpublish(id);
              showToast('Article dépublié (retour brouillon)', 'info');
              loadPage('blog');
            } catch (error) {
              showToast(error.message, 'error');
              btn.disabled = false;
            }
            return;
          }

          if (action === 'archive') {
            btn.disabled = true;
            try {
              await window.AdminApi.blog.archive(id);
              showToast('Article archivé', 'info');
              loadPage('blog');
            } catch (error) {
              showToast(error.message, 'error');
              btn.disabled = false;
            }
            return;
          }
        });
      });
    }

    if (module === 'forum') {
      const statusFilter = document.getElementById('forum-status-filter');
      if (statusFilter) {
        statusFilter.addEventListener('change', () => {
          forumFilters.status = statusFilter.value;
          loadPage('forum');
        });
      }

      const searchInput = document.getElementById('forum-search-filter');
      const searchBtn = document.getElementById('btn-search-forum');
      const executeSearch = () => {
        forumFilters.search = searchInput?.value || '';
        loadPage('forum');
      };
      if (searchBtn) searchBtn.addEventListener('click', executeSearch);
      if (searchInput) {
        searchInput.addEventListener('keydown', e => {
          if (e.key === 'Enter') executeSearch();
        });
      }

      document.querySelectorAll('.btn-forum-action').forEach(btn => {
        btn.addEventListener('click', async () => {
          const action = btn.getAttribute('data-action');
          const id = btn.getAttribute('data-id');

          if (action === 'view') {
            openForumTopicModal(id);
            return;
          }

          if (action === 'delete') {
            if (!confirm('Supprimer définitivement ce sujet et toutes ses réponses ?')) return;
            try {
              await window.AdminApi.forum.remove(id);
              showToast('Sujet supprimé avec succès', 'warning');
              loadPage('forum');
            } catch (error) {
              showToast(error.message, 'error');
            }
            return;
          }

          if (action === 'pin') {
            try {
              const res = await window.AdminApi.forum.pin(id);
              showToast(res.message || 'Action effectuée', 'success');
              loadPage('forum');
            } catch (error) {
              showToast(error.message, 'error');
            }
            return;
          }

          if (action === 'lock') {
            try {
              const res = await window.AdminApi.forum.lock(id);
              showToast(res.message || 'Action effectuée', 'success');
              loadPage('forum');
            } catch (error) {
              showToast(error.message, 'error');
            }
            return;
          }

          if (action === 'resolve') {
            try {
              const res = await window.AdminApi.forum.resolve(id);
              showToast(res.message || 'Action effectuée', 'success');
              loadPage('forum');
            } catch (error) {
              showToast(error.message, 'error');
            }
            return;
          }
        });
      });
    }

    if (module === 'users') {
      const searchInput = document.getElementById('user-search');
      if (searchInput) {
        let debounce;
        searchInput.addEventListener('input', () => {
          clearTimeout(debounce);
          debounce = setTimeout(() => {
            userFilters.search = searchInput.value;
            userFilters.page = 1;
            loadPage('users');
          }, 400);
        });
      }

      const roleFilter = document.getElementById('user-role-filter');
      if (roleFilter) {
        roleFilter.addEventListener('change', () => {
          userFilters.role = roleFilter.value;
          userFilters.page = 1;
          loadPage('users');
        });
      }

      const statusFilter = document.getElementById('user-status-filter');
      if (statusFilter) {
        statusFilter.addEventListener('change', () => {
          userFilters.status = statusFilter.value;
          userFilters.page = 1;
          loadPage('users');
        });
      }

      document.getElementById('user-prev-page')?.addEventListener('click', () => {
        if ((userFilters.page || 1) > 1) {
          userFilters.page = (userFilters.page || 1) - 1;
          loadPage('users');
        }
      });

      document.getElementById('user-next-page')?.addEventListener('click', () => {
        const totalPages = lastUsersPagination?.totalPages || 1;
        if ((userFilters.page || 1) < totalPages) {
          userFilters.page = (userFilters.page || 1) + 1;
          loadPage('users');
        }
      });

      document.getElementById('btn-export-users-csv')?.addEventListener('click', () => {
        if (!lastUsersItems || lastUsersItems.length === 0) {
          showToast('Aucun utilisateur à exporter', 'info');
          return;
        }
        const headers = ['Nom', 'Prénom', 'Email', 'Rôle', 'Rôles Secondaires', 'Statut', 'Vérifié', 'Dernière Connexion'];
        const rows = lastUsersItems.map(u => [
          u.lastName || '',
          u.firstName || '',
          u.email || '',
          u.role || '',
          (u.adminRoles || []).join('; '),
          u.isActive ? 'Actif' : 'Désactivé',
          u.isVerified ? 'Oui' : 'Non',
          u.lastLoginAt ? new Date(u.lastLoginAt).toLocaleString('fr-FR') : 'Jamais'
        ]);
        exportTableToCsv(`utilisateurs_${new Date().toISOString().slice(0, 10)}.csv`, headers, rows);
        showToast('Export CSV des utilisateurs téléchargé', 'success');
      });

      document.querySelectorAll('[data-user-action]').forEach(btn => {
        btn.addEventListener('click', async () => {
          if (btn.disabled) return;
          const action = btn.getAttribute('data-user-action');
          const userId = btn.getAttribute('data-user-id');
          const userName = btn.getAttribute('data-user-name') || 'cet utilisateur';

          if (action === 'dossier') {
            openUserDossierModal(userId);
            return;
          }

          if (action === 'roles') {
            openUserRolesModal(userId, userName);
            return;
          }

          if (action === 'nominate-mentor') {
            if (!confirm(`Nommer ${userName} au rang officiel de Mentor & Expert d'Industrie ?`)) return;
            btn.disabled = true;
            try {
              const res = await window.AdminApi.rbac.nominateMentor(userId);
              showToast(res.message || 'Mentor nommé avec succès !', 'success');
              loadPage('users');
            } catch (error) {
              showToast(error.message, 'error');
              btn.disabled = false;
            }
            return;
          }

          if (action === 'revoke-mentor') {
            if (!confirm(`Révoquer le statut de Mentor & Expert de ${userName} ?`)) return;
            btn.disabled = true;
            try {
              const res = await window.AdminApi.rbac.revokeMentor(userId);
              showToast(res.message || 'Statut de Mentor révoqué', 'warning');
              loadPage('users');
            } catch (error) {
              showToast(error.message, 'error');
              btn.disabled = false;
            }
            return;
          }

          if (action === 'delete' && !confirm('Supprimer définitivement ce compte ?')) return;

          const messages = {
            activate: 'Compte activé',
            deactivate: 'Compte désactivé',
            verify: 'Compte vérifié',
            delete: 'Utilisateur supprimé',
          };
          const method = action === 'delete' ? 'remove' : action;
          btn.disabled = true;
          try {
            await window.AdminApi.users[method](userId);
            showToast(messages[action] || 'Action effectuée', action === 'delete' ? 'warning' : 'success');
            loadPage('users');
          } catch (error) {
            showToast(error.message, 'error');
            btn.disabled = false;
          }
        });
      });
    }

    if (module === 'approvals') {
      // Filtres d'onglets (Toutes / Adhésions / Workflows)
      document.querySelectorAll('[data-approval-filter]').forEach(tabBtn => {
        tabBtn.addEventListener('click', () => {
          const filter = tabBtn.getAttribute('data-approval-filter');
          document.querySelectorAll('[data-approval-filter]').forEach(b => b.classList.remove('active'));
          tabBtn.classList.add('active');

          const secMemberships = document.getElementById('approval-section-memberships');
          const secWorkflows = document.getElementById('approval-section-workflows');

          if (filter === 'all') {
            if (secMemberships) secMemberships.style.display = '';
            if (secWorkflows) secWorkflows.style.display = '';
          } else if (filter === 'memberships') {
            if (secMemberships) secMemberships.style.display = '';
            if (secWorkflows) secWorkflows.style.display = 'none';
          } else if (filter === 'workflows') {
            if (secMemberships) secMemberships.style.display = 'none';
            if (secWorkflows) secWorkflows.style.display = '';
          }
        });
      });

      // Filtre de recherche instantané adhésions
      const searchMembershipInput = document.getElementById('membershipSearchInput');
      if (searchMembershipInput) {
        searchMembershipInput.addEventListener('input', () => {
          const q = searchMembershipInput.value.toLowerCase().trim();
          document.querySelectorAll('#membershipsTableBody .membership-row').forEach(row => {
            const text = row.innerText.toLowerCase();
            row.style.display = text.includes(q) ? '' : 'none';
          });
        });
      }

      // Export CSV adhésions
      const btnExportCSV = document.getElementById('btnExportMembershipsCSV');
      if (btnExportCSV) {
        btnExportCSV.addEventListener('click', () => {
          const list = window._currentPendingMemberships || [];
          if (!list || list.length === 0) {
            showToast('Aucune demande d\'adhésion à exporter', 'info');
            return;
          }
          const headers = ['Nom', 'Prénom', 'Email', 'Téléphone', 'Motivation', 'Date Inscription'];
          const rows = list.map(m => [
            `"${(m.user?.lastName || '').replace(/"/g, '""')}"`,
            `"${(m.user?.firstName || '').replace(/"/g, '""')}"`,
            `"${(m.user?.email || '').replace(/"/g, '""')}"`,
            `"${(m.user?.phone || m.phone || '').replace(/"/g, '""')}"`,
            `"${(m.motivation || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`,
            `"${m.createdAt ? new Date(m.createdAt).toLocaleDateString('fr-FR') : ''}"`
          ]);
          const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
          const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.setAttribute('href', url);
          link.setAttribute('download', `adhesions_lmt_${new Date().toISOString().slice(0, 10)}.csv`);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          showToast('Fichier CSV exporté avec succès !', 'success');
        });
      }

      // Approbation d'adhésion depuis l'onglet Approbations
      document.querySelectorAll('[data-approve-membership-approval]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-approve-membership-approval');
          const candidateName = btn.getAttribute('data-candidate-name') || 'le candidat';
          openApproveMembershipModal(id, candidateName, () => loadPage('approvals'));
        });
      });

      // Refus d'adhésion depuis l'onglet Approbations
      document.querySelectorAll('[data-reject-membership-approval]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-reject-membership-approval');
          const candidateName = btn.getAttribute('data-candidate-name') || 'le candidat';
          openRejectMembershipModal(id, candidateName, () => loadPage('approvals'));
        });
      });

      document.querySelectorAll('[data-preview-workflow]').forEach(btn => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-preview-workflow');
          openApprovalPreviewModal(id);
        });
      });

      document.querySelectorAll('[data-approve-workflow]').forEach(btn => {
        btn.addEventListener('click', async () => {
          const id = btn.getAttribute('data-approve-workflow');
          try {
            await window.AdminApi.approvals.approve(id, 'Approuvé depuis la boîte d\'approbations');
            showToast('Demande approuvée avec succès', 'success');
            loadPage('approvals');
          } catch (error) {
            showToast(error.message, 'error');
          }
        });
      });

      document.querySelectorAll('[data-reject-workflow]').forEach(btn => {
        btn.addEventListener('click', async () => {
          const id = btn.getAttribute('data-reject-workflow');
          openApprovalPreviewModal(id);
        });
      });
    }

    if (module === 'logs') {
      document.getElementById('log-apply-filters')?.addEventListener('click', () => {
        logFilters.email = document.getElementById('log-email-filter')?.value || '';
        logFilters.module = document.getElementById('log-module-filter')?.value || '';
        logFilters.action = document.getElementById('log-action-filter')?.value || '';
        logFilters.from = document.getElementById('log-from-filter')?.value || '';
        logFilters.to = document.getElementById('log-to-filter')?.value || '';
        logFilters.page = 1;
        loadPage('logs');
      });

      document.getElementById('log-prev-page')?.addEventListener('click', () => {
        if (logFilters.page > 1) {
          logFilters.page -= 1;
          loadPage('logs');
        }
      });

      document.getElementById('log-next-page')?.addEventListener('click', () => {
        const totalPages = lastLogsPagination?.totalPages || 1;
        if (logFilters.page < totalPages) {
          logFilters.page += 1;
          loadPage('logs');
        }
      });
    }

    if (module === 'settings') {
      document.getElementById('btn-save-settings')?.addEventListener('click', async () => {
        const inputs = document.querySelectorAll('[data-setting-key]');
        let saved = 0;
        let failed = null;
        for (const input of inputs) {
          const key = input.getAttribute('data-setting-key');
          const value = input.getAttribute('data-setting-bool')
            ? String(input.checked)
            : input.value;
          try {
            await window.AdminApi.settings.update(key, value);
            saved += 1;
          } catch (error) {
            failed = error.message;
            break;
          }
        }
        if (saved > 0 && !failed) {
          showToast(`${saved} paramètre(s) enregistré(s)`, 'success');
          loadPage('settings');
        } else if (failed) {
          showToast(failed, 'error');
        }
      });

      // Gestion du 2FA dans settings
      const btnStart2FA = document.getElementById('btn-start-2fa-setup');
      const btnCancel2FA = document.getElementById('btn-cancel-2fa-setup');
      const btnConfirm2FA = document.getElementById('btn-confirm-enable-2fa');
      const btnDisable2FA = document.getElementById('btn-disable-2fa');
      const container2FA = document.getElementById('setup-2fa-container');

      btnStart2FA?.addEventListener('click', async () => {
        try {
          btnStart2FA.disabled = true;
          btnStart2FA.textContent = 'Génération en cours...';
          const res = await window.AdminApi.twoFactor.setup();
          const qrImg = document.getElementById('qr-code-img');
          const manualSecret = document.getElementById('manual-2fa-secret');
          if (qrImg) qrImg.src = res.data.qrCodeUrl;
          if (manualSecret) manualSecret.textContent = res.data.secret.match(/.{1,4}/g).join(' ');
          if (container2FA) container2FA.style.display = 'block';
          btnStart2FA.style.display = 'none';
        } catch (error) {
          showToast(error.message || 'Impossible d\'initialiser le 2FA', 'error');
          btnStart2FA.disabled = false;
          btnStart2FA.textContent = 'Activer le 2FA maintenant';
        }
      });

      btnCancel2FA?.addEventListener('click', () => {
        if (container2FA) container2FA.style.display = 'none';
        if (btnStart2FA) {
          btnStart2FA.style.display = 'inline-block';
          btnStart2FA.disabled = false;
          btnStart2FA.textContent = 'Activer le 2FA maintenant';
        }
      });

      btnConfirm2FA?.addEventListener('click', async () => {
        const input = document.getElementById('input-verify-2fa');
        const code = (input?.value || '').trim();
        if (!code || code.length !== 6) {
          showToast('Veuillez saisir un code à 6 chiffres valide', 'warning');
          return;
        }

        try {
          btnConfirm2FA.disabled = true;
          btnConfirm2FA.textContent = 'Validation...';
          await window.AdminApi.twoFactor.verify(code);
          showToast('Double authentification activée avec succès !', 'success');
          loadPage('settings');
        } catch (error) {
          showToast(error.message || 'Code 2FA invalide', 'error');
          btnConfirm2FA.disabled = false;
          btnConfirm2FA.textContent = 'Vérifier & Activer';
        }
      });

      btnDisable2FA?.addEventListener('click', async () => {
        if (!confirm('Êtes-vous sûr de vouloir désactiver la double authentification sur votre compte ?')) return;

        const password = await window.AdminApi.reauth();
        if (!password) return;

        try {
          btnDisable2FA.disabled = true;
          await window.AdminApi.twoFactor.disable(password);
          showToast('Authentification 2FA désactivée', 'warning');
          loadPage('settings');
        } catch (error) {
          showToast(error.message || 'Échec de la désactivation du 2FA', 'error');
          btnDisable2FA.disabled = false;
        }
      });
    }

    if (module === 'vitrine') {
      bindVitrineEvents();
    }

    if (module === 'organization') {
      bindOrganizationEvents();
    }

    if (module === 'notifications') {
      const btnSend = document.getElementById('btn-send-broadcast');
      const inputTitle = document.getElementById('broadcast-title');
      const inputMsg = document.getElementById('broadcast-message');
      const selectType = document.getElementById('broadcast-type');
      const inputUrl = document.getElementById('broadcast-url');

      const previewTitle = document.getElementById('phone-preview-title');
      const previewBody = document.getElementById('phone-preview-body');

      inputTitle?.addEventListener('input', () => {
        if (previewTitle) previewTitle.textContent = inputTitle.value || 'Titre de la notification';
      });
      inputMsg?.addEventListener('input', () => {
        if (previewBody) previewBody.textContent = inputMsg.value || 'Le contenu de votre message apparaîtra ici...';
      });

      btnSend?.addEventListener('click', async () => {
        const title = (inputTitle?.value || '').trim();
        const message = (inputMsg?.value || '').trim();
        const type = selectType?.value || 'ANNOUNCEMENT';
        const url = (inputUrl?.value || '').trim() || '/frontend/index.html';

        if (!title || !message) {
          showToast('Veuillez renseigner le titre et le message', 'warning');
          return;
        }

        if (!confirm('Confirmez-vous l\'envoi immédiat de cette notification push à tous les abonnés ?')) {
          return;
        }

        try {
          btnSend.disabled = true;
          btnSend.textContent = 'Diffusion en cours...';
          await window.AdminApi.notifications.broadcast({ title, message, type, url });
          showToast('Notification push diffusée avec succès !', 'success');
          loadPage('notifications');
        } catch (err) {
          showToast(err.message || 'Échec de la diffusion', 'error');
          btnSend.disabled = false;
          btnSend.textContent = 'Diffuser la notification push maintenant 🚀';
        }
      });
    }

    if (module === 'admins') {
      document.getElementById('btn-create-admin')?.addEventListener('click', openCreateAdminModal);

      document.querySelectorAll('[data-admin-logs]').forEach(btn => {
        btn.addEventListener('click', () => {
          const userId = btn.getAttribute('data-admin-logs');
          const adminName = btn.getAttribute('data-admin-name') || 'cet administrateur';
          openAdminActivityModal(userId, adminName);
        });
      });

      document.getElementById('btn-create-role')?.addEventListener('click', () => openRoleModal(null));

      document.querySelectorAll('[data-edit-role]').forEach(btn => {
        btn.addEventListener('click', () => openRoleModal(btn.getAttribute('data-edit-role')));
      });

      document.querySelectorAll('[data-delete-role]').forEach(btn => {
        btn.addEventListener('click', async () => {
          const id = btn.getAttribute('data-delete-role');
          if (!confirm('Supprimer ce rôle ? Les utilisateurs concernés perdront ses permissions.')) return;
          try {
            await window.AdminApi.rbac.deleteRole(id);
            showToast('Rôle supprimé', 'warning');
            loadPage('admins');
          } catch (error) {
            showToast(error.message, 'error');
          }
        });
      });

      document.querySelectorAll('[data-approve-admin]').forEach(btn => {
        btn.addEventListener('click', async () => {
          const id = btn.getAttribute('data-approve-admin');
          try {
            await window.AdminApi.admin.approveAdmin(id);
            showToast('Administrateur approuvé', 'success');
            loadPage('admins');
          } catch (error) {
            showToast(error.message, 'error');
          }
        });
      });

      document.querySelectorAll('[data-suspend-admin]').forEach(btn => {
        btn.addEventListener('click', async () => {
          const id = btn.getAttribute('data-suspend-admin');
          try {
            await window.AdminApi.admin.suspendAdmin(id);
            showToast('Administrateur suspendu', 'warning');
            loadPage('admins');
          } catch (error) {
            showToast(error.message, 'error');
          }
        });
      });

      document.querySelectorAll('[data-reactivate-admin]').forEach(btn => {
        btn.addEventListener('click', async () => {
          const id = btn.getAttribute('data-reactivate-admin');
          try {
            await window.AdminApi.admin.reactivateAdmin(id);
            showToast('Administrateur réactivé', 'success');
            loadPage('admins');
          } catch (error) {
            showToast(error.message, 'error');
          }
        });
      });

      document.querySelectorAll('[data-revoke-admin]').forEach(btn => {
        btn.addEventListener('click', async () => {
          const id = btn.getAttribute('data-revoke-admin');
          if (!confirm('Révoquer cet administrateur ?')) return;
          try {
            await window.AdminApi.admin.revokeAdmin(id);
            showToast('Administrateur révoqué', 'warning');
            loadPage('admins');
          } catch (error) {
            showToast(error.message, 'error');
          }
        });
      });
    }

    // Écouteur global pour l'ouverture du dossier utilisateur depuis n'importe quel module
    document.querySelectorAll('[data-view-dossier]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const userId = btn.getAttribute('data-view-dossier');
        if (userId) openUserDossierModal(userId);
      });
    });

    // Écouteur global pour la navigation inter-modules depuis n'importe quel module
    document.querySelectorAll('[data-dash-navigate]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const target = el.getAttribute('data-dash-navigate');
        if (target && window.AdminRouter) {
          window.AdminRouter.navigate(target);
        }
      });
    });
  }

  function bindVitrineEvents() {
    // Gestion des onglets Vitrine
    const tabBtns = document.querySelectorAll('.vitrine-tab-btn');
    const paneHome = document.getElementById('vitrine-tab-home-pane');
    const paneAbout = document.getElementById('vitrine-tab-about-pane');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const target = btn.getAttribute('data-vitrine-tab');
        if (target === 'home') {
          if (paneHome) paneHome.style.display = 'block';
          if (paneAbout) paneAbout.style.display = 'none';
        } else {
          if (paneHome) paneHome.style.display = 'none';
          if (paneAbout) paneAbout.style.display = 'block';
        }
      });
    });

    // Synchronisation en direct pour "À la Une ce mois-ci"
    const featTag = document.getElementById('feat-tag');
    const featTitle = document.getElementById('feat-title');
    const featDesc = document.getElementById('feat-desc');
    const featBtnText = document.getElementById('feat-btn-text');
    const featSideBadge = document.getElementById('feat-side-badge');
    const featSideCounter = document.getElementById('feat-side-counter');
    const featSideDesc = document.getElementById('feat-side-desc');
    const featSideBtnText = document.getElementById('feat-side-btn-text');

    const pvTag = document.getElementById('pv-tag');
    const pvTitle = document.getElementById('pv-title');
    const pvDesc = document.getElementById('pv-desc');
    const pvBtnText = document.getElementById('pv-btn-text');
    const pvSideBadge = document.getElementById('pv-side-badge');
    const pvSideCounter = document.getElementById('pv-side-counter');
    const pvSideDesc = document.getElementById('pv-side-desc');
    const pvSideBtnText = document.getElementById('pv-side-btn-text');
    const pvPerks = document.getElementById('pv-perks');

    const updateFeaturedPreview = () => {
      if (pvTag && featTag) pvTag.textContent = featTag.value || '🔥 À la Une ce mois-ci';
      if (pvTitle && featTitle) pvTitle.textContent = featTitle.value || 'Titre du dossier';
      if (pvDesc && featDesc) pvDesc.textContent = featDesc.value || 'Description du dossier...';
      if (pvBtnText && featBtnText) pvBtnText.textContent = featBtnText.value || 'Découvrir';
      if (pvSideBadge && featSideBadge) pvSideBadge.textContent = featSideBadge.value || 'Tendance';
      if (pvSideCounter && featSideCounter) pvSideCounter.textContent = featSideCounter.value || '+0%';
      if (pvSideDesc && featSideDesc) pvSideDesc.textContent = featSideDesc.value || 'Statistique...';
      if (pvSideBtnText && featSideBtnText) pvSideBtnText.textContent = featSideBtnText.value || 'Explorer';

      if (pvPerks) {
        const p1 = document.getElementById('feat-perk-1')?.value.trim();
        const p2 = document.getElementById('feat-perk-2')?.value.trim();
        const p3 = document.getElementById('feat-perk-3')?.value.trim();
        const activePerks = [p1, p2, p3].filter(Boolean);
        pvPerks.innerHTML = activePerks.map(p => `<span class="vitrine-preview-perk-badge">✓ ${escapeHtml(p)}</span>`).join('');
      }
    };

    [featTag, featTitle, featDesc, featBtnText, featSideBadge, featSideCounter, featSideDesc, featSideBtnText].forEach(el => {
      el?.addEventListener('input', updateFeaturedPreview);
    });
    document.querySelectorAll('.feat-perk-input').forEach(el => el.addEventListener('input', updateFeaturedPreview));

    // Soumission du formulaire Accueil (clic bouton ou touche Entrée)
    document.getElementById('form-vitrine-featured')?.addEventListener('submit', (e) => {
      e.preventDefault();
      document.getElementById('btn-save-featured')?.click();
    });

    document.getElementById('btn-save-featured')?.addEventListener('click', async () => {
      const btn = document.getElementById('btn-save-featured');
      const tag = document.getElementById('feat-tag')?.value.trim() || '🔥 À la Une ce mois-ci';
      const title = document.getElementById('feat-title')?.value.trim();
      const description = document.getElementById('feat-desc')?.value.trim();
      const p1 = document.getElementById('feat-perk-1')?.value.trim();
      const p2 = document.getElementById('feat-perk-2')?.value.trim();
      const p3 = document.getElementById('feat-perk-3')?.value.trim();
      const primaryButtonText = document.getElementById('feat-btn-text')?.value.trim() || 'Découvrir la sélection';
      const primaryButtonLink = document.getElementById('feat-btn-link')?.value.trim() || '#orientation';
      const sideboxBadge = document.getElementById('feat-side-badge')?.value.trim() || 'Tendance Métiers';
      const sideboxCounter = document.getElementById('feat-side-counter')?.value.trim() || '+34%';
      const sideboxDesc = document.getElementById('feat-side-desc')?.value.trim() || '';
      const sideboxButtonText = document.getElementById('feat-side-btn-text')?.value.trim() || 'Explorer le dossier';
      const sideboxButtonLink = document.getElementById('feat-side-btn-link')?.value.trim() || '#contact';

      if (!title || !description) {
        showToast('Veuillez remplir au moins le titre et la description du dossier.', 'warning');
        return;
      }

      const payload = {
        tag,
        title,
        description,
        perks: [p1, p2, p3].filter(Boolean),
        primaryButtonText,
        primaryButtonLink,
        sideboxBadge,
        sideboxCounter,
        sideboxDesc,
        sideboxButtonText,
        sideboxButtonLink
      };

      try {
        btn.disabled = true;
        btn.textContent = 'Enregistrement en cours...';
        await window.AdminApi.settings.update('home.featured_monthly', JSON.stringify(payload, null, 2));
        showToast('Section "À la Une ce mois-ci" enregistrée et déployée avec succès !', 'success');
      } catch (err) {
        showToast(err.message || 'Échec de l\'enregistrement', 'error');
      } finally {
        btn.disabled = false;
        btn.textContent = '💾 Enregistrer la section Accueil';
      }
    });

    // Synchronisation en direct & édition pour "Les Grandes Étapes du Club"
    const timelineContainer = document.getElementById('timeline-steps-editor');
    const pvTimelineList = document.getElementById('pv-timeline-list');

    const updateTimelinePreview = () => {
      if (!timelineContainer || !pvTimelineList) return;
      const cards = timelineContainer.querySelectorAll('.timeline-step-card');
      const steps = [];
      cards.forEach(c => {
        const year = c.querySelector('.step-year-input')?.value.trim() || '';
        const title = c.querySelector('.step-title-input')?.value.trim() || '';
        const desc = c.querySelector('.step-desc-input')?.value.trim() || '';
        steps.push({ year, title, description: desc });
      });

      pvTimelineList.innerHTML = steps.map(s => `
        <div class="vitrine-timeline-preview-item">
          <div style="display:inline-block;background:rgba(59,130,246,0.15);color:#2563eb;font-weight:800;font-size:0.75rem;padding:0.15rem 0.5rem;border-radius:4px;margin-bottom:0.25rem;">
            ${escapeHtml(s.year || '')}
          </div>
          <h5 style="margin:0.2rem 0;font-size:0.95rem;color:var(--color-text);font-weight:700;">
            ${escapeHtml(s.title || 'Titre de l\'étape')}
          </h5>
          <p style="margin:0;font-size:0.8rem;color:var(--color-muted);line-height:1.4;">
            ${escapeHtml(s.description || 'Description...')}
          </p>
        </div>
      `).join('');
    };

    const attachTimelineStepListeners = (card) => {
      card.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', updateTimelinePreview);
      });
      card.querySelector('.btn-delete-step')?.addEventListener('click', () => {
        const allCards = timelineContainer.querySelectorAll('.timeline-step-card');
        if (allCards.length <= 1) {
          showToast('Vous devez conserver au moins une étape chronologique.', 'warning');
          return;
        }
        card.remove();
        // Renumérotation des étapes
        timelineContainer.querySelectorAll('.timeline-step-card').forEach((c, i) => {
          const badge = c.querySelector('.badge');
          if (badge) badge.textContent = `Étape n°${i + 1}`;
        });
        updateTimelinePreview();
      });
    };

    timelineContainer?.querySelectorAll('.timeline-step-card').forEach(attachTimelineStepListeners);

    // Ajouter une nouvelle étape
    document.getElementById('btn-add-timeline-step')?.addEventListener('click', () => {
      if (!timelineContainer) return;
      const count = timelineContainer.querySelectorAll('.timeline-step-card').length + 1;
      const nextYear = new Date().getFullYear() + 1;
      const card = document.createElement('div');
      card.className = 'timeline-step-card';
      card.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;">
          <span class="badge badge-primary" style="font-size:0.8rem;">Étape n°${count}</span>
          <button type="button" class="btn btn-danger btn-sm btn-delete-step" title="Supprimer cette étape">🗑️ Supprimer</button>
        </div>
        <div style="display:grid;grid-template-columns:120px 1fr;gap:0.75rem;margin-bottom:0.75rem;">
          <label>
            <span style="font-size:0.8rem;font-weight:600;display:block;margin-bottom:0.2rem;">Année / Date</span>
            <input type="text" class="form-input step-year-input" value="${nextYear}" placeholder="Ex. ${nextYear}" style="width:100%;">
          </label>
          <label>
            <span style="font-size:0.8rem;font-weight:600;display:block;margin-bottom:0.2rem;">Titre de l'étape *</span>
            <input type="text" class="form-input step-title-input" value="" placeholder="Titre de la nouvelle étape" style="width:100%;">
          </label>
        </div>
        <label style="display:block;">
          <span style="font-size:0.8rem;font-weight:600;display:block;margin-bottom:0.2rem;">Description détaillée</span>
          <textarea rows="2" class="form-input step-desc-input" placeholder="Détaillez les réalisations de cette étape..." style="width:100%;"></textarea>
        </label>
      `;
      timelineContainer.appendChild(card);
      attachTimelineStepListeners(card);
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      card.querySelector('.step-title-input')?.focus();
      updateTimelinePreview();
    });

    // Sauvegarde de la frise chronologique
    document.getElementById('btn-save-timeline')?.addEventListener('click', async () => {
      const btn = document.getElementById('btn-save-timeline');
      if (!timelineContainer) return;
      const cards = timelineContainer.querySelectorAll('.timeline-step-card');
      const steps = [];

      for (const c of cards) {
        const year = c.querySelector('.step-year-input')?.value.trim();
        const title = c.querySelector('.step-title-input')?.value.trim();
        const desc = c.querySelector('.step-desc-input')?.value.trim();

        if (!year || !title) {
          showToast('Toutes les étapes doivent comporter une année et un titre.', 'warning');
          return;
        }
        steps.push({ year, title, description: desc || '' });
      }

      try {
        btn.disabled = true;
        btn.textContent = 'Enregistrement en cours...';
        await window.AdminApi.settings.update('about.timeline_steps', JSON.stringify(steps, null, 2));
        showToast('Frise chronologique enregistrée et déployée avec succès !', 'success');
      } catch (err) {
        showToast(err.message || 'Échec de l\'enregistrement', 'error');
      } finally {
        btn.disabled = false;
        btn.textContent = '💾 Enregistrer la Frise Chronologique';
      }
    });
  }

  function escapeHtml(text) {
    if (text == null) return '';
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function showToast(message, type = 'info') {
    let container = document.getElementById('admin-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'admin-toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `admin-toast admin-toast-${type}`;
    const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : type === 'warning' ? '⚠' : 'ℹ';
    toast.innerHTML = `<span style="font-weight:700;">${icon}</span> <span>${escapeHtml(message)}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('hiding');
      setTimeout(() => toast.remove(), 250);
    }, 4000);
  }

  window.AdminPages = {
    ADMIN_MODULES,
    getAuthorizedModules,
    buildSidebar,
    loadPage,
    escapeHtml,
    showToast,
  };
})();

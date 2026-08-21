(function() {
  'use strict';

  const ADMIN_MODULES = {
    dashboard: { label: 'Tableau de bord', icon: '📊' },
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

  function formatUserRole(user) {
    if (user?.role === 'ULTRA_ADMIN') return '👑 Ultra Admin';
    const roles = user?.adminRoles || [];
    if (roles.length > 0) return roles.join(', ');
    return user?.role || '';
  }

  function buildSidebar(currentModule, authorizedModules) {
    const nav = document.getElementById('admin-nav');
    if (!nav) return;

    nav.innerHTML = '';

    Object.entries(ADMIN_MODULES).forEach(([key, mod]) => {
      if (!authorizedModules.includes(key)) return;

      const btn = document.createElement('button');
      btn.className = 'nav-item' + (key === currentModule ? ' active' : '');
      btn.innerHTML = `<span>${mod.icon}</span> ${mod.label}`;
      btn.addEventListener('click', () => {
        window.AdminRouter.navigate(key);
      });
      nav.appendChild(btn);
    });
  }

  async function loadPage(module) {
    const content = document.getElementById('admin-content');
    const title = document.getElementById('admin-page-title');
    if (!content) return;

    content.innerHTML = '<div class="empty-state">Chargement...</div>';
    if (title) title.textContent = ADMIN_MODULES[module]?.label || 'Administration';

    try {
      let html = '';
      switch (module) {
        case 'dashboard':
          html = await loadDashboard();
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
        default:
          html = '<div class="empty-state">Module en cours de développement</div>';
      }
      content.innerHTML = html;
      bindPageEvents(module);
    } catch (error) {
      content.innerHTML = `<div class="empty-state">${escapeHtml(error.message)}</div>`;
    }
  }

  async function loadDashboard() {
    // Chaque appel dégrade indépendamment : un refus de permission ne doit
    // pas vider tout le tableau de bord.
    const safely = promise => promise.catch(() => null);
    const [stats, pendingMemberships, pendingAdmins, posts] = await Promise.all([
      safely(window.AdminApi.admin.getStats()),
      safely(window.AdminApi.admin.getPendingMemberships()),
      safely(window.AdminApi.admin.getPendingAdmins()),
      safely(window.AdminApi.admin.getAllPosts({ limit: 5 })),
    ]);

    const user = window.AdminApp.currentUser;
    const canApproveMemberships = window.AdminApp.hasPermission(user, 'membership.approve');
    const memberships = pendingMemberships?.data || [];

    const membershipCard = `
      <div class="card" style="margin-top:1.5rem;">
        <div class="card-header">
          <h2>Demandes d'adhésion</h2>
          <span class="badge ${memberships.length > 0 ? 'badge-warning' : 'badge-muted'}">${memberships.length} en attente</span>
        </div>
        ${memberships.length === 0
          ? '<div class="empty-state">Aucune demande en attente 🎉</div>'
          : canApproveMemberships || memberships.length === 0
            ? `<div class="table-wrapper">
                 <table>
                   <thead><tr><th>Candidat</th><th>Email</th><th>Motivation</th><th>Date</th><th>Actions</th></tr></thead>
                   <tbody>
                     ${memberships.map(m => `
                       <tr>
                         <td>${escapeHtml(m.user?.firstName || '')} ${escapeHtml(m.user?.lastName || '')}</td>
                         <td>${escapeHtml(m.user?.email || '')}</td>
                         <td style="max-width:280px;">${escapeHtml((m.motivation || '—').slice(0, 120))}${(m.motivation || '').length > 120 ? '…' : ''}</td>
                         <td>${new Date(m.createdAt).toLocaleDateString('fr-FR')}</td>
                         <td>
                           ${canApproveMemberships ? `
                             <button class="btn btn-success btn-sm" data-approve-membership="${m.id}">Approuver</button>
                             <button class="btn btn-danger btn-sm" data-reject-membership="${m.id}">Refuser</button>
                           ` : '<span class="text-muted">Lecture seule</span>'}
                         </td>
                       </tr>
                     `).join('')}
                   </tbody>
                 </table>
               </div>`
            : '<div class="empty-state">Consultation réservée</div>'}
      </div>
    `;

    return `
      <div class="card">
        <div class="card-header">
          <h2>Tableau de bord</h2>
          <span class="badge badge-primary">${escapeHtml(formatUserRole(window.AdminApp.currentUser))}</span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:1rem;">
          <div class="card"><strong>${stats?.data?.activeMembers ?? '-'}</strong><div class="text-muted">Membres actifs</div></div>
          <div class="card"><strong>${stats?.data?.pendingRequests ?? '-'}</strong><div class="text-muted">Adhésions en attente</div></div>
          <div class="card"><strong>${stats?.data?.totalTopics ?? '-'}</strong><div class="text-muted">Sujets forum</div></div>
          <div class="card"><strong>${pendingAdmins?.data?.length ?? 0}</strong><div class="text-muted">Admins en attente</div></div>
        </div>
      </div>
      ${membershipCard}
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
      ? escapeHtml(item.category || '')
      : escapeHtml(item.category || '—');

    return `
      <div class="card">
        <div class="card-header">
          <h2>${config.title}</h2>
          <button class="btn" id="btn-create-content" data-content-module="${moduleKey}">Ajouter</button>
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
            <thead><tr><th>Titre</th><th>Catégorie</th><th>Statut</th><th>Auteur</th><th>Mise à jour</th><th>Actions</th></tr></thead>
            <tbody>
              ${items.length === 0
                ? '<tr><td colspan="6"><div class="empty-state">Aucun contenu</div></td></tr>'
                : items.map(item => `
                  <tr>
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

  // Modale légère de création / édition (formations et métiers)
  function openContentModal(moduleKey, item = null) {
    const existing = document.getElementById('content-modal-overlay');
    if (existing) existing.remove();

    const isJob = moduleKey === 'jobs';
    const categoryField = isJob
      ? `<label>Catégorie *<select name="category" required>${JOB_CATEGORIES.map(c => `<option value="${c}" ${item?.category === c ? 'selected' : ''}>${c}</option>`).join('')}</select></label>`
      : `<label>Catégorie (libre)<input type="text" name="category" value="${escapeHtml(item?.category || '')}" placeholder="Ex. Communication"></label>`;

    const overlay = document.createElement('div');
    overlay.id = 'content-modal-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:1000;';
    overlay.innerHTML = `
      <div class="card" style="max-width:520px;width:90%;padding:1.5rem;max-height:90vh;overflow:auto;">
        <div class="card-header"><h2>${item ? 'Modifier' : 'Nouveau'} — ${isJob ? 'métier' : 'formation'}</h2></div>
        <form id="content-modal-form" style="display:flex;flex-direction:column;gap:0.8rem;">
          <label>Titre *<input type="text" name="title" required minlength="3" value="${escapeHtml(item?.title || '')}"></label>
          <label>Description *<textarea name="description" required minlength="10" rows="4">${escapeHtml(item?.description || '')}</textarea></label>
          ${categoryField}
          <label>Icône (emoji)<input type="text" name="icon" value="${escapeHtml(item?.icon || '')}" placeholder="📚"></label>
          <div style="display:flex;gap:0.5rem;justify-content:flex-end;">
            <button type="button" class="btn" id="content-modal-cancel">Annuler</button>
            <button type="submit" class="btn btn-primary">${item ? 'Enregistrer' : 'Créer (brouillon)'}</button>
          </div>
        </form>
      </div>
    `;
    document.body.appendChild(overlay);

    overlay.querySelector('#content-modal-cancel').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });

    overlay.querySelector('#content-modal-form').addEventListener('submit', async e => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
      const client = isJob ? window.AdminApi.jobs : window.AdminApi.formations;
      try {
        if (item) {
          await client.update(item.id, data);
          showToast('Contenu mis à jour', 'success');
        } else {
          await client.create(data);
          showToast('Contenu créé en brouillon', 'success');
        }
        overlay.remove();
        loadPage(moduleKey);
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

  async function loadBlog() {
    const response = await window.AdminApi.blog.getAll({ limit: 20 });
    const items = response.data || [];
    return `
      <div class="card">
        <div class="card-header">
          <h2>Articles</h2>
          <button class="btn" id="btn-create-post">Ajouter</button>
        </div>
        <div class="table-wrapper">
          <table>
            <thead><tr><th>Titre</th><th>Statut</th><th>Date</th></tr></thead>
            <tbody>
              ${items.length === 0 ? '<tr><td colspan="3"><div class="empty-state">Aucun article</div></td></tr>' : items.map(item => `<tr><td>${escapeHtml(item.title)}</td><td><span class="badge badge-primary">${escapeHtml(item.status)}</span></td><td>${new Date(item.createdAt).toLocaleDateString('fr-FR')}</td></tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  async function loadForum() {
    const response = await window.AdminApi.forum.getAll({ limit: 20 });
    const items = response.data || [];
    return `
      <div class="card">
        <div class="card-header">
          <h2>Sujets</h2>
        </div>
        <div class="table-wrapper">
          <table>
            <thead><tr><th>Titre</th><th>Auteur</th><th>Réponses</th><th>Date</th></tr></thead>
            <tbody>
              ${items.length === 0 ? '<tr><td colspan="4"><div class="empty-state">Aucun sujet</div></td></tr>' : items.map(item => `<tr><td>${escapeHtml(item.title)}</td><td>${escapeHtml(item.author?.firstName || '')} ${escapeHtml(item.author?.lastName || '')}</td><td>${item.replyCount}</td><td>${new Date(item.createdAt).toLocaleDateString('fr-FR')}</td></tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // ===== Utilisateurs =====
  const userFilters = { search: '', role: '', status: '' };

  async function loadUsers() {
    const response = await window.AdminApi.users.getAll(userFilters);
    const items = response.data || [];
    const user = window.AdminApp.currentUser;
    const can = permission => window.AdminApp.hasPermission(user, permission);

    return `
      <div class="card">
        <div class="card-header">
          <h2>Utilisateurs</h2>
          <span class="badge badge-primary">${response.pagination?.total ?? items.length} comptes</span>
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
                    ${(u.adminRoles || []).map(r => `<span class="badge badge-muted">${escapeHtml(r)}</span>`).join(' ')}
                  </td>
                  <td>
                    ${u.isActive ? '<span class="badge badge-success">Actif</span>' : '<span class="badge badge-danger">Désactivé</span>'}
                    ${u.isVerified ? '' : '<span class="badge badge-warning">Non vérifié</span>'}
                  </td>
                  <td>${u.lastLoginAt ? new Date(u.lastLoginAt).toLocaleString('fr-FR') : '—'}</td>
                  <td>
                    ${can('users.suspend') ? (u.isActive
                      ? `<button class="btn btn-warning btn-sm" data-user-action="deactivate" data-user-id="${u.id}">Désactiver</button>`
                      : `<button class="btn btn-success btn-sm" data-user-action="activate" data-user-id="${u.id}">Activer</button>`) : ''}
                    ${can('users.verify') && !u.isVerified ? `<button class="btn btn-sm" data-user-action="verify" data-user-id="${u.id}">Vérifier</button>` : ''}
                    ${can('admins.assign') ? `<button class="btn btn-sm" data-user-action="roles" data-user-id="${u.id}" data-user-name="${escapeHtml(u.firstName + ' ' + u.lastName)}">Rôles</button>` : ''}
                    ${can('users.delete') && u.id !== user.id ? `<button class="btn btn-danger btn-sm" data-user-action="delete" data-user-id="${u.id}">Supprimer</button>` : ''}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
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
        <div class="card-header"><h2>Rôles de ${escapeHtml(userName)}</h2></div>
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

  // ===== Approbations =====
  async function loadApprovals() {
    const response = await window.AdminApi.approvals.getPending();
    const items = response.data || [];
    const user = window.AdminApp.currentUser;
    const canManage = window.AdminApp.hasPermission(user, 'approvals.manage');

    const resourceLabels = { Formation: 'Formation', Job: 'Métier', Post: 'Article', ADMIN: 'Admin' };

    return `
      <div class="card">
        <div class="card-header">
          <h2>Demandes d'approbation</h2>
          <span class="badge badge-warning">${items.length} en attente</span>
        </div>
        <div class="table-wrapper">
          <table>
            <thead><tr><th>Demande</th><th>Ressource</th><th>Demandeur</th><th>Date</th><th>Actions</th></tr></thead>
            <tbody>
              ${items.length === 0 ? '<tr><td colspan="5"><div class="empty-state">Aucune demande en attente 🎉</div></td></tr>' : items.map(w => `
                <tr>
                  <td>Publication</td>
                  <td>${resourceLabels[w.resourceType] || w.resourceType}</td>
                  <td>${escapeHtml(w.createdBy ? `${w.createdBy.firstName} ${w.createdBy.lastName}` : '—')}</td>
                  <td>${new Date(w.createdAt).toLocaleString('fr-FR')}</td>
                  <td>
                    ${canManage ? `
                      <button class="btn btn-success btn-sm" data-approve-workflow="${w.id}">Approuver</button>
                      <button class="btn btn-danger btn-sm" data-reject-workflow="${w.id}">Rejeter</button>
                    ` : '<span class="text-muted">Lecture seule</span>'}
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
                    ${can('admins.update') ? `<button class="btn btn-sm" data-edit-role="${r.id}">Permissions</button>` : ''}
                    ${can('admins.delete') && !r.isSystem ? `<button class="btn btn-danger btn-sm" data-delete-role="${r.id}">Supprimer</button>` : ''}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;

    return `
      <div class="card">
        <div class="card-header">
          <h2>Administrateurs</h2>
        </div>
        <div class="table-wrapper">
          <table>
            <thead><tr><th>Nom</th><th>Email</th><th>Rôle</th><th>Statut</th><th>Actions</th></tr></thead>
            <tbody>
              ${items.length === 0 ? '<tr><td colspan="5"><div class="empty-state">Aucun administrateur</div></td></tr>' : items.map(item => `
                <tr>
                  <td>${escapeHtml(item.user?.firstName || '')} ${escapeHtml(item.user?.lastName || '')}</td>
                  <td>${escapeHtml(item.user?.email || '')}</td>
                  <td>${escapeHtml(item.role?.name || '')}</td>
                  <td><span class="badge ${item.status === 'APPROVED' ? 'badge-success' : item.status === 'PENDING' ? 'badge-warning' : 'badge-danger'}">${escapeHtml(item.status)}</span></td>
                  <td>
                    ${item.status === 'PENDING' && can('admins.approve') ? `<button class="btn btn-success btn-sm" data-approve-admin="${item.id}">Approuver</button>` : ''}
                    ${item.status === 'APPROVED' && can('admins.suspend') ? `<button class="btn btn-warning btn-sm" data-suspend-admin="${item.id}">Suspendre</button>` : ''}
                    ${item.status === 'SUSPENDED' && can('admins.suspend') ? `<button class="btn btn-success btn-sm" data-reactivate-admin="${item.id}">Réactiver</button>` : ''}
                    ${item.status === 'APPROVED' && can('admins.revoke') ? `<button class="btn btn-danger btn-sm" data-revoke-admin="${item.id}">Révoquer</button>` : ''}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
      ${rolesCard}
    `;
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
        <div class="card-header"><h2>${role ? 'Modifier' : 'Nouveau'} rôle</h2></div>
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

  // ===== Journal d'audit =====
  const logFilters = { module: '', action: '', from: '', to: '', page: 1 };

  async function loadLogs() {
    const response = await window.AdminApi.rbac.getAuditLogs({ ...logFilters, limit: 50 });
    const items = response.data || [];
    const pagination = response.pagination || { page: 1, totalPages: 1, total: items.length };

    return `
      <div class="card">
        <div class="card-header">
          <h2>Journal d'activité</h2>
          <span class="badge badge-primary">${pagination.total} événements</span>
        </div>
        <div style="display:flex;gap:0.8rem;align-items:flex-end;margin-bottom:1rem;flex-wrap:wrap;">
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

  // ===== Paramètres de plateforme =====
  async function loadSettings() {
    const response = await window.AdminApi.settings.getAll();
    const settings = response.data || [];

    const byCategory = {};
    settings.forEach(s => {
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
    `;
  }

  function bindPageEvents(module) {
    if (module === 'dashboard') {
      document.querySelectorAll('[data-approve-membership]').forEach(btn => {
        btn.addEventListener('click', async () => {
          const id = btn.getAttribute('data-approve-membership');
          try {
            await window.AdminApi.admin.approveMembership(id);
            showToast('Adhésion approuvée — compte activé', 'success');
            loadPage('dashboard');
          } catch (error) {
            showToast(error.message, 'error');
          }
        });
      });

      document.querySelectorAll('[data-reject-membership]').forEach(btn => {
        btn.addEventListener('click', async () => {
          const id = btn.getAttribute('data-reject-membership');
          if (!confirm('Refuser cette demande d\'adhésion ?')) return;
          try {
            await window.AdminApi.admin.rejectMembership(id);
            showToast('Adhésion refusée', 'warning');
            loadPage('dashboard');
          } catch (error) {
            showToast(error.message, 'error');
          }
        });
      });
    }

    if (module === 'formations' || module === 'jobs') {
      const statusFilter = document.getElementById('content-status-filter');
      if (statusFilter) {
        statusFilter.addEventListener('change', () => {
          contentFilters[module].status = statusFilter.value;
          loadPage(module);
        });
      }

      const mineFilter = document.getElementById('content-mine-filter');
      if (mineFilter) {
        mineFilter.addEventListener('change', () => {
          contentFilters[module].mine = mineFilter.checked;
          loadPage(module);
        });
      }

      document.getElementById('btn-create-content')?.addEventListener('click', () => {
        openContentModal(module);
      });

      document.querySelectorAll('[data-content-action]').forEach(btn => {
        btn.addEventListener('click', async () => {
          const actionModule = btn.getAttribute('data-content-module');
          const action = btn.getAttribute('data-content-action');
          const id = btn.getAttribute('data-content-id');
          const client = actionModule === 'formations' ? window.AdminApi.formations : window.AdminApi.jobs;

          if (action === 'edit') {
            openContentModal(actionModule, contentCache[actionModule][id] || { id });
            return;
          }
          if (action === 'delete' && !confirm('Supprimer définitivement ce contenu ?')) return;

          const method = action === 'delete' ? 'remove' : action;
          const messages = {
            publish: 'Contenu publié',
            unpublish: 'Contenu dépublié',
            archive: 'Contenu archivé',
            submit: 'Soumis à validation',
            delete: 'Contenu supprimé',
          };
          try {
            await client[method](id);
            showToast(messages[action] || 'Action effectuée', action === 'delete' ? 'warning' : 'success');
            loadPage(actionModule);
          } catch (error) {
            showToast(error.message, 'error');
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
            loadPage('users');
          }, 400);
        });
      }

      const roleFilter = document.getElementById('user-role-filter');
      if (roleFilter) {
        roleFilter.addEventListener('change', () => {
          userFilters.role = roleFilter.value;
          loadPage('users');
        });
      }

      const statusFilter = document.getElementById('user-status-filter');
      if (statusFilter) {
        statusFilter.addEventListener('change', () => {
          userFilters.status = statusFilter.value;
          loadPage('users');
        });
      }

      document.querySelectorAll('[data-user-action]').forEach(btn => {
        btn.addEventListener('click', async () => {
          const action = btn.getAttribute('data-user-action');
          const userId = btn.getAttribute('data-user-id');
          const userName = btn.getAttribute('data-user-name') || 'cet utilisateur';

          if (action === 'roles') {
            openUserRolesModal(userId, userName);
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
          try {
            await window.AdminApi.users[method](userId);
            showToast(messages[action] || 'Action effectuée', action === 'delete' ? 'warning' : 'success');
            loadPage('users');
          } catch (error) {
            showToast(error.message, 'error');
          }
        });
      });
    }

    if (module === 'approvals') {
      document.querySelectorAll('[data-approve-workflow]').forEach(btn => {
        btn.addEventListener('click', async () => {
          const id = btn.getAttribute('data-approve-workflow');
          try {
            await window.AdminApi.approvals.approve(id, 'Approuvé depuis la boîte d\'approbations');
            showToast('Demande approuvée', 'success');
            loadPage('approvals');
          } catch (error) {
            showToast(error.message, 'error');
          }
        });
      });

      document.querySelectorAll('[data-reject-workflow]').forEach(btn => {
        btn.addEventListener('click', async () => {
          const id = btn.getAttribute('data-reject-workflow');
          const comment = window.prompt('Motif du rejet (optionnel) :') ?? '';
          try {
            await window.AdminApi.approvals.reject(id, comment);
            showToast('Demande rejetée', 'warning');
            loadPage('approvals');
          } catch (error) {
            showToast(error.message, 'error');
          }
        });
      });
    }

    if (module === 'logs') {
      document.getElementById('log-apply-filters')?.addEventListener('click', () => {
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
        logFilters.page += 1;
        loadPage('logs');
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
    }

    if (module === 'admins') {
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
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.style.cssText = 'position:fixed;bottom:1rem;right:1rem;padding:0.75rem 1rem;border-radius:0.5rem;color:#fff;font-weight:500;z-index:9999;';
    toast.style.background = type === 'success' ? 'var(--color-success)' : type === 'error' ? 'var(--color-danger)' : type === 'warning' ? 'var(--color-warning)' : 'var(--color-primary)';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
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

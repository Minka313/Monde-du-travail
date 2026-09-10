(function () {
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

  function buildSidebar(currentModule, authorizedModules) {
    const nav = document.getElementById('admin-nav');
    if (!nav) return;

    initMobileAdminSidebar();

    nav.innerHTML = '';

    Object.entries(ADMIN_MODULES).forEach(([key, mod]) => {
      if (!authorizedModules.includes(key)) return;

      const btn = document.createElement('button');
      btn.className = 'nav-item' + (key === currentModule ? ' active' : '');
      btn.innerHTML = `<span>${mod.icon}</span> ${mod.label}`;
      btn.addEventListener('click', () => {
        closeMobileSidebar();
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
          <div style="display:flex;gap:0.5rem;">
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
            <thead><tr>${window.AdminApp.hasPermission(window.AdminApp.currentUser, `${config.permPrefix}.delete`) ? '<th></th>' : ''}<th>Titre</th><th>Dossier / Catégorie</th><th>Statut</th><th>Auteur</th><th>Mise à jour</th><th>Actions</th></tr></thead>
            <tbody>
              ${items.length === 0
        ? `<tr><td colspan="7"><div class="empty-state">Aucun contenu</div></td></tr>`
        : items.map(item => `
                  <tr>
                    ${window.AdminApp.hasPermission(window.AdminApp.currentUser, `${config.permPrefix}.delete`) ? `<td><input type="checkbox" class="content-select" value="${item.id}"></td>` : ''}
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
            <label>Image d'illustration (URL)
              <input type="url" name="image" value="${escapeHtml(item?.image || '')}" placeholder="https://images.unsplash.com/photo-...">
            </label>
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

    const overlay = document.createElement('div');
    overlay.id = 'blog-modal-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;z-index:1000;padding:1rem;';
    overlay.innerHTML = `
      <div class="card" style="max-width:680px;width:100%;padding:1.5rem;max-height:90vh;overflow-y:auto;background:var(--bg-card, #fff);box-shadow:0 10px 30px rgba(0,0,0,0.2);border-radius:8px;">
        <div class="card-header" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;border-bottom:1px solid #e2e8f0;padding-bottom:0.75rem;">
          <h2 style="margin:0;font-size:1.25rem;">${post ? 'Modifier l\'article' : 'Rédiger un nouvel article'}</h2>
          <button type="button" id="blog-modal-close-btn" style="border:none;background:transparent;font-size:1.5rem;cursor:pointer;line-height:1;">&times;</button>
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
          <label>Image de couverture (URL)
            <input type="url" name="coverImage" value="${escapeHtml(post?.coverImage || '')}" placeholder="https://images.unsplash.com/photo-...">
          </label>
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
            <thead><tr><th>Objet / Ressource</th><th>Type</th><th>Demandeur</th><th>Date</th><th>Actions</th></tr></thead>
            <tbody>
              ${items.length === 0 ? '<tr><td colspan="5"><div class="empty-state">Aucune demande en attente 🎉</div></td></tr>' : items.map(w => `
                <tr>
                  <td><strong>${escapeHtml(w.comment || 'Demande de publication')}</strong></td>
                  <td><span class="badge badge-primary">${resourceLabels[w.resourceType] || w.resourceType}</span></td>
                  <td>${escapeHtml(w.createdBy ? `${w.createdBy.firstName} ${w.createdBy.lastName}` : '—')}</td>
                  <td>${new Date(w.createdAt).toLocaleString('fr-FR')}</td>
                  <td>
                    <button class="btn btn-sm" data-preview-workflow="${w.id}">Examiner</button>
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
            <a href="#formations" class="btn btn-primary btn-sm btn-full" style="text-align:center;font-weight:600;">Ouvrir cet espace &rarr;</a>
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
            <a href="#metiers" class="btn btn-primary btn-sm btn-full" style="text-align:center;font-weight:600;">Ouvrir cet espace &rarr;</a>
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
            <a href="#blog" class="btn btn-primary btn-sm btn-full" style="text-align:center;font-weight:600;">Ouvrir cet espace &rarr;</a>
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
            <a href="#forum" class="btn btn-primary btn-sm btn-full" style="text-align:center;font-weight:600;">Ouvrir cet espace &rarr;</a>
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
        <div class="card-header" style="margin-bottom:1rem;">
          <h2>Ajouter un administrateur</h2>
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
  const logFilters = { module: '', action: '', email: '', from: '', to: '', page: 1 };

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

    if (module === 'formations' || module === 'jobs' || module === 'metiers') {
      const isJob = module === 'jobs' || module === 'metiers';
      const contentKey = isJob ? 'jobs' : 'formations';
      const reloadPage = module === 'jobs' ? 'metiers' : module;
      const client = isJob ? window.AdminApi.jobs : window.AdminApi.formations;

      // Suppression massive : les cases cochées alimentent le bouton d'action
      const bulkButton = document.getElementById('btn-bulk-delete');
      const bulkCount = document.getElementById('bulk-count');
      const updateBulkButton = () => {
        const checked = document.querySelectorAll('.content-select:checked');
        if (bulkButton) bulkButton.style.display = checked.length > 0 ? '' : 'none';
        if (bulkCount) bulkCount.textContent = checked.length;
      };
      document.querySelectorAll('.content-select').forEach(cb => {
        cb.addEventListener('change', updateBulkButton);
      });

      if (bulkButton) {
        bulkButton.addEventListener('click', async () => {
          const ids = Array.from(document.querySelectorAll('.content-select:checked')).map(cb => cb.value);
          if (ids.length === 0) return;
          if (!confirm(`Supprimer définitivement ${ids.length} élément(s) ? Cette action demande votre mot de passe.`)) return;
          try {
            const res = await client.removeBulk(ids);
            showToast(res.message, 'warning');
            loadPage(reloadPage);
          } catch (error) {
            showToast(error.message, 'error');
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

      document.querySelectorAll('[data-content-action]').forEach(btn => {
        btn.addEventListener('click', async () => {
          const actionModule = btn.getAttribute('data-content-module');
          const action = btn.getAttribute('data-content-action');
          const id = btn.getAttribute('data-content-id');
          const actionClient = actionModule === 'formations' ? window.AdminApi.formations : window.AdminApi.jobs;

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
            await actionClient[method](id);
            showToast(messages[action] || 'Action effectuée', action === 'delete' ? 'warning' : 'success');
            loadPage(actionModule === 'jobs' ? 'metiers' : actionModule);
          } catch (error) {
            showToast(error.message, 'error');
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
          const action = btn.getAttribute('data-action');
          const id = btn.getAttribute('data-id');
          const post = blogCache[id];

          if (action === 'edit') {
            openBlogPostModal(post);
            return;
          }

          if (action === 'delete') {
            if (!confirm(`Supprimer définitivement l'article « ${post?.title || ''} » ?`)) return;
            try {
              await window.AdminApi.blog.remove(id);
              showToast('Article supprimé avec succès', 'warning');
              loadPage('blog');
            } catch (error) {
              showToast(error.message, 'error');
            }
            return;
          }

          if (action === 'submit') {
            try {
              await window.AdminApi.blog.submit(id);
              showToast('Article soumis à validation', 'success');
              loadPage('blog');
            } catch (error) {
              showToast(error.message, 'error');
            }
            return;
          }

          if (action === 'publish') {
            try {
              await window.AdminApi.blog.publish(id);
              showToast('Article publié avec succès', 'success');
              loadPage('blog');
            } catch (error) {
              showToast(error.message, 'error');
            }
            return;
          }

          if (action === 'unpublish') {
            try {
              await window.AdminApi.blog.unpublish(id);
              showToast('Article dépublié (retour brouillon)', 'info');
              loadPage('blog');
            } catch (error) {
              showToast(error.message, 'error');
            }
            return;
          }

          if (action === 'archive') {
            try {
              await window.AdminApi.blog.archive(id);
              showToast('Article archivé', 'info');
              loadPage('blog');
            } catch (error) {
              showToast(error.message, 'error');
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

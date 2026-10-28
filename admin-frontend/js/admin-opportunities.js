/**
 * Admin — rubrique « Concours & opportunités ».
 * Liste, signalements des visiteurs, création/édition d'une annonce complète (formulaire
 * par onglets avec indicateur de complétude), nouvelle session, vérification et publication.
 * Règle : une annonce n'est publiable qu'avec un lien officiel vérifié.
 */
(function () {
  'use strict';

  const CATEGORIES = { CONCOURS: '🏆 Concours', BOURSE: '🎓 Bourse', ADMISSION: '🏫 Admission', STAGE: '💼 Stage', PROGRAMME: '🌍 Programme', EXAMEN: '📝 Examen' };
  const LEVELS = {
    PRIMAIRE: 'Primaire (CM2)', COLLEGE: 'Collège', LYCEE: 'Lycée (Terminale)', BACHELIER: 'Bachelier', ETUDIANT: 'Étudiant',
    DIPLOME: 'Diplômé (licence/master)', PROFESSIONNEL: 'Professionnel en poste',
  };
  const DESTINATIONS = { SENEGAL: 'Sénégal', AFRIQUE: 'Afrique', INTERNATIONAL: 'International' };
  const DOMAINS = {
    PLURIDISCIPLINAIRE: 'Toutes filières', INGENIERIE: 'Ingénierie & technologie', NUMERIQUE: 'Numérique & télécoms',
    SCIENCES: 'Sciences & recherche', SANTE: 'Santé', DEFENSE: 'Défense & sécurité', ENSEIGNEMENT: 'Enseignement',
    ADMINISTRATION: 'Administration, droit & justice', ECONOMIE: 'Économie, gestion & statistique',
    AGRICULTURE: 'Agriculture, pêche & environnement', COMMUNICATION: 'Journalisme & information', SPORT: 'Sport & animation',
  };
  const FUNDING = { FULL: 'Bourse complète', PARTIAL: 'Financement partiel', NONE: 'Sans financement' };
  const PHASES = { OPEN: ['Ouvert', 'badge-success'], UPCOMING: ['À venir', 'badge-primary'], CLOSED: ['Clôturé', 'badge-muted'], RESULTS: ['Résultats', 'badge-warning'] };
  const STATUSES = { DRAFT: ['Brouillon', 'badge-muted'], PENDING_REVIEW: ['En attente', 'badge-warning'], PUBLISHED: ['Publiée', 'badge-success'], ARCHIVED: ['Archivée', 'badge-danger'] };
  const REPORT_KINDS = { DATE: '📅 Date', LIEN: '🔗 Lien', CONDITIONS: '👤 Conditions', FRAIS: '💳 Frais / places', ARNAQUE: '⚠️ Arnaque', AUTRE: '💬 Autre' };
  // Au-delà, une annonce publiée mérite une nouvelle vérification de sa source
  const STALE_VERIFICATION_DAYS = 30;

  const TABS = [
    ['essentiel', '1. Essentiel'],
    ['public', '2. Public & conditions'],
    ['calendrier', '3. Calendrier'],
    ['dossier', '4. Dossier & épreuves'],
    ['candidature', '5. Candidature & avantages'],
    ['enrichi', '6. Conseils, FAQ, liens'],
    ['source', '7. Source & publication'],
  ];

  const filters = { status: '', category: '', search: '' };
  let items = [];
  let reports = [];

  const esc = (value) => window.AdminPages.escapeHtml(value == null ? '' : value);
  const toast = (message, type) => window.AdminPages.showToast(message, type);
  const can = (permission) => window.AdminApp.hasPermission(window.AdminApp.currentUser, `opportunite.${permission}`);
  const day = (value) => (value ? String(value).slice(0, 10) : '');
  const frDate = (value) => (value ? new Date(value).toLocaleDateString('fr-FR', { timeZone: 'UTC' }) : '—');
  const badge = ([label, cls]) => `<span class="badge ${cls}">${esc(label)}</span>`;
  const previewUrl = (item) => `../frontend/opportunite.html?${item.slug ? `slug=${encodeURIComponent(item.slug)}` : `id=${encodeURIComponent(item.id)}`}`;

  function daysSince(value) {
    return value ? Math.floor((Date.now() - new Date(value)) / 86400000) : Infinity;
  }

  // Complétude d'une fiche : ce qui aide vraiment un candidat, selon le type d'annonce
  function completeness(o) {
    const has = (v) => (Array.isArray(v) ? v.length > 0 : Boolean(v && String(v).trim()));
    const competitive = ['CONCOURS', 'ADMISSION', 'EXAMEN'].includes(o.category);
    const funded = ['BOURSE', 'PROGRAMME'].includes(o.category);
    const checks = [
      ['Lien officiel vérifié', has(o.officialUrl) && Boolean(o.lastVerifiedAt || o.markVerified)],
      ['Public (niveaux)', has(o.levels)],
      ['Domaine', has(o.domains)],
      ['Date limite ou calendrier habituel', has(o.deadline) || has(o.usualPeriod)],
      ["Conditions d'éligibilité", has(o.eligibility)],
      ['Dossier à fournir', has(o.documents)],
      ['Comment candidater', has(o.applyMode)],
      ...(competitive ? [['Frais de dossier', has(o.fees)], ['Épreuves', has(o.exams)]] : []),
      ...(funded ? [['Avantages / financement', has(o.benefits) || has(o.funding)]] : []),
      ['Destination', has(o.destination)],
      ['Contact', has(o.contact)],
    ];
    const missing = checks.filter(([, ok]) => !ok).map(([label]) => label);
    return { score: Math.round(((checks.length - missing.length) / checks.length) * 100), missing };
  }

  function meter(score) {
    const color = score >= 85 ? '#059669' : score >= 60 ? '#d97706' : '#dc2626';
    return `<div style="display:flex;align-items:center;gap:0.4rem;min-width:90px;"><div style="flex:1;height:6px;border-radius:99px;background:#e2e8f0;overflow:hidden;"><div style="width:${score}%;height:100%;background:${color};"></div></div><span style="font-size:0.78rem;font-weight:700;color:${color};">${score}%</span></div>`;
  }

  function verificationCell(item) {
    if (!item.officialUrl) return '<span style="color:#dc2626;font-size:0.8rem;">⚠️ Aucun lien officiel</span>';
    if (!item.lastVerifiedAt) return '<span style="color:#d97706;font-size:0.8rem;">⏳ Non vérifiée</span>';
    const stale = item.status === 'PUBLISHED' && daysSince(item.lastVerifiedAt) > STALE_VERIFICATION_DAYS;
    return `<span style="font-size:0.82rem;${stale ? 'color:#d97706;font-weight:600;' : ''}">${stale ? '⏳ ' : '✅ '}${esc(frDate(item.lastVerifiedAt))}</span>`;
  }

  function actionButtons(item) {
    const buttons = [];
    const more = [];
    if (can('update')) buttons.push(`<button class="btn btn-sm btn-secondary" data-opp-action="edit" data-id="${esc(item.id)}">Modifier</button>`);
    if (can('publish')) {
      if (item.status === 'PUBLISHED') {
        buttons.push(`<button class="btn btn-sm btn-ghost" data-opp-action="unpublish" data-id="${esc(item.id)}">Dépublier</button>`);
      } else {
        buttons.push(`<button class="btn btn-sm btn-primary" data-opp-action="publish" data-id="${esc(item.id)}">Publier</button>`);
      }
    }
    buttons.push(`<a class="btn btn-sm btn-outline" style="text-decoration:none;" target="_blank" rel="noopener" href="${previewUrl(item)}">${item.status === 'PUBLISHED' ? 'Voir' : 'Aperçu'}</a>`);
    if (can('create')) more.push(`<button class="btn btn-sm btn-ghost" data-opp-action="duplicate" data-id="${esc(item.id)}" title="Créer la fiche de la session suivante (brouillon)">🔁 Nouvelle session</button>`);
    if (can('archive') && item.status !== 'ARCHIVED') more.push(`<button class="btn btn-sm btn-ghost" data-opp-action="archive" data-id="${esc(item.id)}">🗄️ Archiver</button>`);
    if (can('delete')) more.push(`<button class="btn btn-sm btn-ghost" style="color:#dc2626;" data-opp-action="delete" data-id="${esc(item.id)}">🗑️ Supprimer</button>`);
    const menu = more.length ? `
      <details style="position:relative;">
        <summary class="btn btn-sm btn-ghost" style="list-style:none;cursor:pointer;" aria-label="Plus d'actions">⋯</summary>
        <div style="position:absolute;right:0;top:110%;z-index:20;display:flex;flex-direction:column;align-items:stretch;gap:0.2rem;min-width:170px;padding:0.35rem;background:#fff;border:1px solid #e2e8f0;border-radius:8px;box-shadow:0 10px 25px rgba(15,23,42,0.15);">${more.join('')}</div>
      </details>` : '';
    return `<div style="display:flex;gap:0.3rem;flex-wrap:wrap;align-items:flex-start;">${buttons.join('')}${menu}</div>`;
  }

  function options(map, selected, allLabel) {
    return `<option value="">${allLabel}</option>` + Object.entries(map)
      .map(([value, label]) => `<option value="${value}" ${selected === value ? 'selected' : ''}>${esc(Array.isArray(label) ? label[0] : label)}</option>`).join('');
  }

  function reportsPanel() {
    if (!reports.length) return '';
    return `
      <div style="margin-bottom:1rem;padding:0.85rem 1rem;border-radius:10px;border:1px solid #fecaca;background:#fef2f2;">
        <h3 style="margin:0 0 0.6rem;font-size:0.98rem;color:#991b1b;">🚩 ${reports.length} signalement(s) de visiteurs à traiter</h3>
        <div style="display:flex;flex-direction:column;gap:0.5rem;">
          ${reports.map((r) => `
            <div style="display:flex;gap:0.75rem;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;padding:0.6rem 0.75rem;border-radius:8px;background:#fff;border:1px solid #fee2e2;">
              <div style="flex:1;min-width:240px;">
                <div style="font-size:0.8rem;color:#64748b;">${esc(REPORT_KINDS[r.kind] || r.kind)} · ${esc(frDate(r.createdAt))} · <strong style="color:#0f172a;">${esc(r.opportunity?.title || '')}</strong></div>
                <div style="margin-top:0.25rem;font-size:0.9rem;white-space:pre-wrap;">${esc(r.message)}</div>
                ${r.contact ? `<div style="margin-top:0.25rem;font-size:0.8rem;color:#475569;">Contact : ${esc(r.contact)}</div>` : ''}
              </div>
              <div style="display:flex;gap:0.3rem;flex-wrap:wrap;">
                ${can('update') && r.opportunity ? `<button class="btn btn-sm btn-secondary" data-opp-action="edit" data-id="${esc(r.opportunity.id)}">Corriger l'annonce</button>` : ''}
                ${can('update') ? `<button class="btn btn-sm btn-primary" data-opp-resolve="${esc(r.id)}">Marquer traité</button>` : ''}
              </div>
            </div>`).join('')}
        </div>
      </div>`;
  }

  // Concours annuels dont la session suivante approche (30 jours avant) : créer la nouvelle fiche
  function sessionsPanel() {
    const due = items.filter((i) => i.sessionReminderDue);
    if (!due.length) return '';
    return `
      <div style="margin-bottom:1rem;padding:0.85rem 1rem;border-radius:10px;border:1px solid #bfdbfe;background:#eff6ff;">
        <h3 style="margin:0 0 0.6rem;font-size:0.98rem;color:#1e3a8a;">📅 ${due.length} nouvelle(s) session(s) à préparer</h3>
        <div style="display:flex;flex-direction:column;gap:0.5rem;">
          ${due.map((i) => `
            <div style="display:flex;gap:0.75rem;align-items:center;justify-content:space-between;flex-wrap:wrap;padding:0.6rem 0.75rem;border-radius:8px;background:#fff;border:1px solid #dbeafe;">
              <div style="flex:1;min-width:240px;font-size:0.9rem;">
                <strong>${esc(i.title)}</strong> · ${esc(i.organization)}
                <div style="font-size:0.8rem;color:#475569;margin-top:0.2rem;">Session attendue vers le ${esc(frDate(i.expectedSessionAt))}${i.usualPeriod ? ` · ${esc(i.usualPeriod)}` : ''}. Vérifiez le site officiel puis créez la fiche.</div>
              </div>
              <div style="display:flex;gap:0.3rem;flex-wrap:wrap;">
                ${i.officialUrl ? `<a class="btn btn-sm btn-ghost" href="${esc(i.officialUrl)}" target="_blank" rel="noopener">Site officiel ↗</a>` : ''}
                ${can('create') ? `<button class="btn btn-sm btn-primary" data-opp-action="duplicate" data-id="${esc(i.id)}">🔁 Nouvelle session</button>` : ''}
              </div>
            </div>`).join('')}
        </div>
      </div>`;
  }

  async function render() {
    const [res, rep] = await Promise.all([
      window.AdminApi.opportunities.getAdmin(filters),
      window.AdminApi.opportunities.reports('OPEN').catch(() => ({ data: [] })),
    ]);
    items = res.data || [];
    reports = rep.data || [];
    const published = items.filter((i) => i.status === 'PUBLISHED');
    const toArchive = published.filter((i) => i.phase === 'CLOSED' && daysSince(i.deadline) > 30).length;
    const toReverify = published.filter((i) => daysSince(i.lastVerifiedAt) > STALE_VERIFICATION_DAYS).length;
    const incomplete = published.filter((i) => completeness(i).score < 60).length;

    return `
      <div class="card">
        <div class="card-header">
          <div>
            <h2 style="margin:0 0 0.25rem 0;">Concours & opportunités</h2>
            <p style="margin:0;font-size:0.85rem;color:#64748b;">Concours, bourses, admissions, stages et programmes. Une annonce ne peut être publiée qu'avec son lien officiel, vérifié par l'équipe. Visez une fiche complète à plus de 85 %.</p>
          </div>
          ${can('create') ? '<button class="btn btn-primary" id="btn-opp-create">+ Nouvelle annonce</button>' : ''}
        </div>

        ${reportsPanel()}
        ${sessionsPanel()}

        ${(toArchive || toReverify || incomplete) ? `
          <div style="display:flex;flex-direction:column;gap:0.35rem;margin-bottom:1rem;padding:0.75rem 1rem;border-radius:8px;background:#fffbeb;border:1px solid #fde68a;color:#78350f;font-size:0.88rem;">
            ${toReverify ? `<span>⏳ <strong>${toReverify}</strong> annonce(s) publiée(s) vérifiée(s) il y a plus de ${STALE_VERIFICATION_DAYS} jours : revérifiez la source officielle.</span>` : ''}
            ${incomplete ? `<span>📝 <strong>${incomplete}</strong> annonce(s) publiée(s) complète(s) à moins de 60 % : enrichissez-les (dossier, épreuves, conditions…).</span>` : ''}
            ${toArchive ? `<span>🗄️ <strong>${toArchive}</strong> annonce(s) clôturée(s) depuis plus d'un mois : pensez à les archiver ou à créer la nouvelle session.</span>` : ''}
          </div>` : ''}

        <div style="display:flex;gap:1rem;align-items:flex-end;margin-bottom:1rem;flex-wrap:wrap;">
          <label style="flex:1;min-width:220px;">Recherche
            <input type="search" id="opp-filter-search" value="${esc(filters.search)}" placeholder="Intitulé ou organisme">
          </label>
          <label>Statut <select id="opp-filter-status">${options(STATUSES, filters.status, 'Tous')}</select></label>
          <label>Catégorie <select id="opp-filter-category">${options(CATEGORIES, filters.category, 'Toutes')}</select></label>
        </div>

        <div class="table-wrapper">
          <table>
            <thead><tr><th>Annonce</th><th>Catégorie</th><th>Phase</th><th>Date limite</th><th>Statut</th><th>Fiche</th><th>Source vérifiée</th><th>Actions</th></tr></thead>
            <tbody>
              ${items.length === 0
                ? '<tr><td colspan="8"><div class="empty-state">Aucune annonce. Cliquez sur « Nouvelle annonce » pour publier la première.</div></td></tr>'
                : items.map((item) => {
                  const c = completeness(item);
                  const open = item._count?.reports || 0;
                  return `
                  <tr>
                    <td><div style="font-weight:600;">${esc(item.title)}${open ? ` <span class="badge badge-danger" title="Signalements ouverts">🚩 ${open}</span>` : ''}</div><div style="font-size:0.78rem;color:#64748b;">${esc(item.organization)}${item.sessionLabel ? ` · ${esc(item.sessionLabel)}` : ''}</div></td>
                    <td>${esc(CATEGORIES[item.category] || item.category)}</td>
                    <td>${badge(PHASES[item.phase] || [item.phase, 'badge-muted'])}${item.nextSession ? '<div style="font-size:0.72rem;color:#9a3412;margin-top:0.2rem;">Prochaine session</div>' : ''}</td>
                    <td>${esc(frDate(item.deadline))}</td>
                    <td>${badge(STATUSES[item.status] || [item.status, 'badge-muted'])}</td>
                    <td title="${esc(c.missing.length ? `À compléter : ${c.missing.join(', ')}` : 'Fiche complète')}">${meter(c.score)}</td>
                    <td>${verificationCell(item)}</td>
                    <td>${actionButtons(item)}</td>
                  </tr>`;
                }).join('')}
            </tbody>
          </table>
        </div>
      </div>`;
  }

  function reload() {
    return window.AdminPages.loadPage('opportunites', true);
  }

  // ---------- Lignes répétables (dates, épreuves, étapes, liens, FAQ) ----------
  const removeButton = (cls, label) => `<button type="button" class="btn btn-sm btn-ghost ${cls}" data-row-remove aria-label="${label}">✕</button>`;

  const ROWS = {
    keydate: (e = {}) => `
      <div class="opp-row" style="display:grid;grid-template-columns:160px 1fr auto;gap:0.5rem;align-items:center;">
        <input type="date" data-f="date" value="${esc(e.date || '')}" aria-label="Date">
        <input type="text" data-f="label" value="${esc(e.label || '')}" maxlength="120" placeholder="Ex. : Épreuves écrites, Publication des résultats…" aria-label="Libellé">
        ${removeButton('', 'Retirer cette date')}
      </div>`,
    exam: (e = {}) => `
      <div class="opp-row" style="display:grid;grid-template-columns:3fr 1fr 1fr auto;gap:0.4rem;align-items:center;">
        <input type="text" data-f="subject" value="${esc(e.subject || '')}" maxlength="200" placeholder="Matière ou épreuve" aria-label="Épreuve">
        <input type="text" data-f="duration" value="${esc(e.duration || '')}" maxlength="30" placeholder="Durée (4 h)" aria-label="Durée">
        <input type="text" data-f="coefficient" value="${esc(e.coefficient || '')}" maxlength="40" placeholder="Coef." aria-label="Coefficient">
        ${removeButton('', 'Retirer cette épreuve')}
      </div>`,
    step: (e = {}) => `
      <div class="opp-row" style="display:grid;grid-template-columns:1fr 2fr auto;gap:0.4rem;align-items:center;">
        <input type="text" data-f="title" value="${esc(e.title || '')}" maxlength="150" placeholder="Ex. : Présélection sur dossier" aria-label="Étape">
        <input type="text" data-f="detail" value="${esc(e.detail || '')}" maxlength="600" placeholder="Précisions (facultatif)" aria-label="Précisions">
        ${removeButton('', 'Retirer cette étape')}
      </div>`,
    resource: (e = {}) => `
      <div class="opp-row" style="display:grid;grid-template-columns:1fr 2fr auto;gap:0.4rem;align-items:center;">
        <input type="text" data-f="label" value="${esc(e.label || '')}" maxlength="150" placeholder="Ex. : Plateforme d'inscription" aria-label="Libellé du lien">
        <input type="url" data-f="url" value="${esc(e.url || '')}" maxlength="500" placeholder="https://…" aria-label="Adresse">
        ${removeButton('', 'Retirer ce lien')}
      </div>`,
    faq: (e = {}) => `
      <div class="opp-row" style="display:grid;grid-template-columns:1fr auto;gap:0.4rem;align-items:start;border:1px solid #e2e8f0;border-radius:8px;padding:0.5rem;">
        <div style="display:flex;flex-direction:column;gap:0.35rem;">
          <input type="text" data-f="question" value="${esc(e.question || '')}" maxlength="250" placeholder="Question" aria-label="Question">
          <textarea data-f="answer" maxlength="1500" rows="2" placeholder="Réponse" aria-label="Réponse">${esc(e.answer || '')}</textarea>
        </div>
        ${removeButton('', 'Retirer cette question')}
      </div>`,
  };

  function rowList(key, entries, addLabel) {
    return `
      <div data-rows="${key}" style="display:flex;flex-direction:column;gap:0.4rem;">${(entries || []).map(ROWS[key]).join('')}</div>
      <button type="button" class="btn btn-sm btn-secondary" data-row-add="${key}" style="margin-top:0.4rem;align-self:flex-start;">${addLabel}</button>`;
  }

  function readRows(root, key) {
    return [...root.querySelectorAll(`[data-rows="${key}"] .opp-row`)].map((row) => Object.fromEntries(
      [...row.querySelectorAll('[data-f]')].map((input) => [input.dataset.f, input.value.trim()]),
    ));
  }

  const checkboxes = (name, map, selected) => `<div style="display:flex;gap:0.4rem 1rem;flex-wrap:wrap;">${Object.entries(map)
    .map(([v, l]) => `<label style="flex-direction:row;align-items:center;font-weight:500;gap:0.35rem;"><input type="checkbox" name="${name}" value="${v}" ${selected.includes(v) ? 'checked' : ''}> ${esc(l)}</label>`).join('')}</div>`;

  const fs = (title, body, style = '') => `<fieldset style="border:1px solid #e2e8f0;border-radius:8px;padding:0.75rem;${style}"><legend style="font-weight:600;font-size:0.88rem;padding:0 0.3rem;">${title}</legend>${body}</fieldset>`;
  const hint = (text) => `<small style="color:#64748b;font-weight:400;">${text}</small>`;

  function openForm(item) {
    document.getElementById('opp-modal-overlay')?.remove();
    const v = item || {};
    const overlay = document.createElement('div');
    overlay.id = 'opp-modal-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(15,23,42,0.65);display:flex;align-items:center;justify-content:center;z-index:1000;padding:1rem;';
    overlay.innerHTML = `
      <div class="card" role="dialog" aria-modal="true" aria-labelledby="opp-modal-title" style="max-width:920px;width:100%;padding:0;max-height:94vh;display:flex;flex-direction:column;border-radius:12px;overflow:hidden;">
        <div style="padding:1rem 1.5rem 0.75rem;border-bottom:1px solid #e2e8f0;">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:1rem;">
            <h2 id="opp-modal-title" style="margin:0;font-size:1.2rem;">${item ? "Modifier l'annonce" : 'Nouvelle annonce'}</h2>
            <div style="display:flex;align-items:center;gap:0.5rem;">
              ${item ? `<a class="btn btn-sm btn-outline" style="text-decoration:none;" target="_blank" rel="noopener" href="${previewUrl(item)}">👁️ Aperçu</a>` : ''}
              <button type="button" data-opp-close style="border:none;background:transparent;font-size:1.5rem;cursor:pointer;line-height:1;" aria-label="Fermer">&times;</button>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:0.75rem;margin-top:0.6rem;">
            <span style="font-size:0.8rem;font-weight:600;color:#475569;white-space:nowrap;">Fiche complète à</span>
            <div style="flex:1;" id="opp-meter"></div>
          </div>
          <div id="opp-missing" style="font-size:0.78rem;color:#64748b;margin-top:0.3rem;min-height:1em;"></div>
          <div role="tablist" style="display:flex;gap:0.3rem;flex-wrap:wrap;margin-top:0.6rem;">
            ${TABS.map(([key, label], i) => `<button type="button" role="tab" class="btn btn-sm ${i === 0 ? 'btn-primary' : 'btn-ghost'}" data-tab="${key}" aria-selected="${i === 0}">${label}</button>`).join('')}
          </div>
        </div>
        <form id="opp-form" style="display:flex;flex-direction:column;gap:0.85rem;padding:1rem 1.5rem;overflow-y:auto;flex:1;">
          <div data-panel="essentiel" style="display:flex;flex-direction:column;gap:0.85rem;">
            <div style="display:grid;grid-template-columns:2fr 1fr;gap:0.75rem;">
              <label>Intitulé *<input name="title" required minlength="3" maxlength="200" value="${esc(v.title)}" placeholder="Ex. : Concours d'entrée en 1re année — École Polytechnique de Thiès"></label>
              <label>Catégorie *<select name="category" required>${Object.entries(CATEGORIES).map(([c, l]) => `<option value="${c}" ${v.category === c ? 'selected' : ''}>${l}</option>`).join('')}</select></label>
            </div>
            <div style="display:grid;grid-template-columns:2fr 1fr 1fr;gap:0.75rem;">
              <label>Organisme responsable *<input name="organization" required minlength="2" maxlength="200" value="${esc(v.organization)}" placeholder="Ex. : École Polytechnique de Thiès (EPT)"></label>
              <label>Ville / lieu<input name="location" maxlength="150" value="${esc(v.location)}" placeholder="Ex. : Thiès"></label>
              <label>Session<input name="sessionLabel" maxlength="60" value="${esc(v.sessionLabel)}" placeholder="Ex. : Session 2027"></label>
            </div>
            <label>Résumé (affiché sur la carte et en tête de fiche) *<textarea name="summary" required minlength="10" maxlength="600" rows="3">${esc(v.summary)}</textarea></label>
            ${fs('Domaine(s)', checkboxes('domains', DOMAINS, v.domains || []))}
          </div>

          <div data-panel="public" style="display:none;flex-direction:column;gap:0.85rem;">
            ${fs('Public concerné', checkboxes('levels', LEVELS, v.levels || []))}
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;">
              <label>Destination<select name="destination">${options(DESTINATIONS, v.destination || '', '— Non précisée —')}</select></label>
              <label>Pays (facultatif)<input name="country" maxlength="100" value="${esc(v.country)}" placeholder="Ex. : Maroc, France"></label>
            </div>
            <label>Séries du bac acceptées ${hint('(séparées par des virgules)')}<input name="series" maxlength="400" value="${esc((v.series || []).join(', '))}" placeholder="S1, S2, S3, T1, T2"></label>
            <label>Limite d'âge<input name="ageLimit" maxlength="300" value="${esc(v.ageLimit)}" placeholder="Ex. : Moins de 22 ans au 1er octobre de l'année du concours"></label>
            <label>Conditions d'éligibilité<textarea name="eligibility" maxlength="2000" rows="4" placeholder="Diplôme, moyenne, nationalité, situation…">${esc(v.eligibility)}</textarea></label>
          </div>

          <div data-panel="calendrier" style="display:none;flex-direction:column;gap:0.85rem;">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;">
              <label>Ouverture des candidatures<input type="date" name="openingDate" value="${day(v.openingDate)}"></label>
              <label>Date limite<input type="date" name="deadline" value="${day(v.deadline)}"></label>
            </div>
            ${fs('Autres dates importantes (épreuves, résultats…)', rowList('keydate', v.keyDates, '+ Ajouter une date'))}
            <label>Calendrier habituel ${hint('(affiché quand la session est passée)')}<input name="usualPeriod" maxlength="200" value="${esc(v.usualPeriod)}" placeholder="Ex. : Dépôt de janvier à mi-avril · concours mi-juin"></label>
            <label style="flex-direction:row;align-items:center;font-weight:500;gap:0.4rem;"><input type="checkbox" name="recurring" ${v.recurring ? 'checked' : ''}> Session annuelle : une fois la date limite passée, annoncer la prochaine session</label>
            <label style="flex-direction:row;align-items:center;font-weight:500;gap:0.4rem;"><input type="checkbox" name="results" ${v.phaseOverride === 'RESULTS' ? 'checked' : ''}> Les résultats sont publiés</label>
          </div>

          <div data-panel="dossier" style="display:none;flex-direction:column;gap:0.85rem;">
            <label>Documents à préparer ${hint('(un par ligne — ils deviennent une liste à cocher pour le candidat)')}<textarea name="documents" rows="6" placeholder="Copie légalisée du relevé de notes du bac&#10;Extrait de naissance de moins de 3 mois&#10;Reçu des frais de dossier">${esc((v.documents || []).join('\n'))}</textarea></label>
            <div style="display:grid;grid-template-columns:2fr 1fr;gap:0.75rem;">
              <label>Frais de dossier<input name="fees" maxlength="300" value="${esc(v.fees)}" placeholder="Ex. : 7 000 FCFA, non remboursables"></label>
              <label>Nombre de places<input type="number" name="places" min="1" max="100000" value="${esc(v.places ?? '')}"></label>
            </div>
            ${fs('Épreuves', rowList('exam', v.exams, '+ Ajouter une épreuve'))}
            ${fs('Étapes de sélection ' + hint('(facultatif : sinon le parcours est construit à partir de la fiche)'), rowList('step', v.selectionSteps, '+ Ajouter une étape'))}
          </div>

          <div data-panel="candidature" style="display:none;flex-direction:column;gap:0.85rem;">
            <label>Comment candidater<textarea name="applyMode" maxlength="1500" rows="4" placeholder="Plateforme, lieu de dépôt, étapes…">${esc(v.applyMode)}</textarea></label>
            <label>Contact<input name="contact" maxlength="500" value="${esc(v.contact)}" placeholder="Téléphone, e-mail de la scolarité…"></label>
            <div style="display:grid;grid-template-columns:1fr 2fr;gap:0.75rem;">
              <label>Prise en charge<select name="funding">${options(FUNDING, v.funding || '', '— Non précisée —')}</select></label>
              <label>Avantages / financement<textarea name="benefits" maxlength="1000" rows="3" placeholder="Frais de scolarité, allocation mensuelle, billet d'avion, internat…">${esc(v.benefits)}</textarea></label>
            </div>
            <label>À savoir aussi ${hint('(options, débouchés, mises en garde)')}<textarea name="details" maxlength="5000" rows="4">${esc(v.details)}</textarea></label>
          </div>

          <div data-panel="enrichi" style="display:none;flex-direction:column;gap:0.85rem;">
            <label>Conseils du club pour réussir ${hint('(un conseil par ligne ; vide = conseils généraux selon le type et le domaine)')}<textarea name="tips" maxlength="3000" rows="5" placeholder="Procure-toi les annales des 5 dernières sessions&#10;Commence l'entraînement physique dès janvier">${esc(v.tips)}</textarea></label>
            ${fs('Liens utiles (plateforme, annales, brochure, communiqué)', rowList('resource', v.resources, '+ Ajouter un lien'))}
            ${fs('Questions fréquentes', rowList('faq', v.faq, '+ Ajouter une question'))}
          </div>

          <div data-panel="source" style="display:none;flex-direction:column;gap:0.85rem;">
            ${fs('Source officielle (obligatoire pour publier)', `
              <label>Lien officiel de l'annonce ou de la candidature<input type="url" name="officialUrl" maxlength="500" value="${esc(v.officialUrl)}" placeholder="https://…"></label>
              <label style="margin-top:0.6rem;">Origine des informations ${hint('(affichée au public)')}<input name="sourceNote" maxlength="300" value="${esc(v.sourceNote)}" placeholder="Ex. : Communiqué officiel de la session 2027"></label>
              <label style="flex-direction:row;align-items:flex-start;font-weight:500;margin-top:0.6rem;gap:0.5rem;">
                <input type="checkbox" name="markVerified" style="margin-top:0.2rem;">
                <span>J'ai vérifié aujourd'hui ces informations sur la source officielle.${v.lastVerifiedAt ? ` <small style="color:#64748b;">(Dernière vérification : ${esc(frDate(v.lastVerifiedAt))})</small>` : ''}</span>
              </label>`, 'border-color:#fde68a;background:#fffbeb;')}
            <p style="margin:0;font-size:0.85rem;color:#475569;">Avant de publier : relisez l'aperçu, vérifiez chaque date sur le communiqué officiel et visez une fiche complète à plus de 85 %.</p>
          </div>
        </form>
        <div style="display:flex;justify-content:space-between;gap:0.5rem;flex-wrap:wrap;border-top:1px solid #e2e8f0;padding:0.85rem 1.5rem;">
          <div style="display:flex;gap:0.4rem;">
            <button type="button" class="btn btn-ghost" data-step="-1">← Précédent</button>
            <button type="button" class="btn btn-ghost" data-step="1">Suivant →</button>
          </div>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            <button type="button" class="btn btn-ghost" data-opp-close>Annuler</button>
            <button type="submit" form="opp-form" class="btn btn-secondary" data-publish="0">Enregistrer</button>
            ${can('publish') && v.status !== 'PUBLISHED' ? '<button type="submit" form="opp-form" class="btn btn-primary" data-publish="1">Enregistrer et publier</button>' : ''}
          </div>
        </div>
      </div>`;

    document.body.appendChild(overlay);
    const form = overlay.querySelector('#opp-form');
    const close = () => overlay.remove();
    let tab = 0;

    function showTab(index) {
      tab = Math.max(0, Math.min(TABS.length - 1, index));
      overlay.querySelectorAll('[data-tab]').forEach((b, i) => {
        b.classList.toggle('btn-primary', i === tab);
        b.classList.toggle('btn-ghost', i !== tab);
        b.setAttribute('aria-selected', String(i === tab));
      });
      overlay.querySelectorAll('[data-panel]').forEach((p) => { p.style.display = p.dataset.panel === TABS[tab][0] ? 'flex' : 'none'; });
      form.scrollTop = 0;
    }

    function payload() {
      const data = new FormData(form);
      const text = (name) => (data.get(name) || '').toString().trim();
      const body = {
        title: text('title'),
        organization: text('organization'),
        category: text('category'),
        summary: text('summary'),
        location: text('location') || null,
        sessionLabel: text('sessionLabel') || null,
        domains: data.getAll('domains'),
        levels: data.getAll('levels'),
        destination: text('destination') || null,
        country: text('country') || null,
        series: text('series').split(',').map((x) => x.trim().toUpperCase()).filter(Boolean),
        ageLimit: text('ageLimit') || null,
        eligibility: text('eligibility') || null,
        openingDate: text('openingDate') || null,
        deadline: text('deadline') || null,
        keyDates: readRows(form, 'keydate').filter((d) => d.date && d.label),
        usualPeriod: text('usualPeriod') || null,
        recurring: Boolean(data.get('recurring')),
        phaseOverride: data.get('results') ? 'RESULTS' : null,
        documents: text('documents').split('\n').map((d) => d.trim()).filter(Boolean),
        fees: text('fees') || null,
        places: text('places') ? Number(text('places')) : null,
        exams: readRows(form, 'exam').filter((e) => e.subject).map((e) => ({ subject: e.subject, duration: e.duration || null, coefficient: e.coefficient || null })),
        selectionSteps: readRows(form, 'step').filter((s) => s.title).map((s) => ({ title: s.title, detail: s.detail || null })),
        applyMode: text('applyMode') || null,
        contact: text('contact') || null,
        funding: text('funding') || null,
        benefits: text('benefits') || null,
        details: text('details') || null,
        tips: text('tips') || null,
        resources: readRows(form, 'resource').filter((r) => r.label && r.url),
        faq: readRows(form, 'faq').filter((q) => q.question && q.answer),
        officialUrl: text('officialUrl') || null,
        sourceNote: text('sourceNote') || null,
      };
      if (data.get('markVerified')) body.markVerified = true;
      return body;
    }

    function refreshMeter() {
      const c = completeness({ ...payload(), lastVerifiedAt: v.lastVerifiedAt });
      overlay.querySelector('#opp-meter').innerHTML = meter(c.score);
      overlay.querySelector('#opp-missing').textContent = c.missing.length ? `À compléter : ${c.missing.join(' · ')}` : '✅ Toutes les informations essentielles sont renseignées.';
    }

    overlay.addEventListener('click', (event) => {
      if (event.target === overlay || event.target.closest('[data-opp-close]')) { close(); return; }
      const remove = event.target.closest('[data-row-remove]');
      if (remove) { remove.closest('.opp-row').remove(); refreshMeter(); return; }
      const add = event.target.closest('[data-row-add]');
      if (add) {
        const list = form.querySelector(`[data-rows="${add.dataset.rowAdd}"]`);
        list.insertAdjacentHTML('beforeend', ROWS[add.dataset.rowAdd]());
        list.lastElementChild.querySelector('input, textarea').focus();
        return;
      }
      const tabButton = event.target.closest('[data-tab]');
      if (tabButton) { showTab(TABS.findIndex(([key]) => key === tabButton.dataset.tab)); return; }
      const step = event.target.closest('[data-step]');
      if (step) showTab(tab + Number(step.dataset.step));
    });
    overlay.addEventListener('keydown', (event) => { if (event.key === 'Escape') close(); });
    form.addEventListener('input', refreshMeter);
    form.addEventListener('change', refreshMeter);
    form.querySelector('[name="title"]').focus();
    refreshMeter();

    // Champ requis vide dans un autre onglet : on affiche l'onglet concerné
    form.addEventListener('invalid', (event) => {
      const panel = event.target.closest('[data-panel]');
      if (panel && panel.style.display === 'none') showTab(TABS.findIndex(([key]) => key === panel.dataset.panel));
    }, true);

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const publish = event.submitter?.dataset.publish === '1';
      const body = payload();
      const buttons = overlay.querySelectorAll('button[type="submit"]');
      buttons.forEach((b) => { b.disabled = true; });
      try {
        const saved = item
          ? await window.AdminApi.opportunities.update(item.id, body)
          : await window.AdminApi.opportunities.create(body);
        if (publish) {
          try {
            await window.AdminApi.opportunities.publish(saved.data.id);
            toast('Annonce enregistrée et publiée', 'success');
          } catch (error) {
            toast(`Enregistrée en brouillon. ${error.message}`, 'warning');
          }
        } else {
          toast('Annonce enregistrée', 'success');
        }
        close();
        reload();
      } catch (error) {
        toast(error.message, 'error');
        buttons.forEach((b) => { b.disabled = false; });
      }
    });
  }

  const ACTIONS = {
    publish: { run: (id) => window.AdminApi.opportunities.publish(id), done: 'Annonce publiée' },
    unpublish: { run: (id) => window.AdminApi.opportunities.unpublish(id), done: 'Annonce dépubliée' },
    archive: { run: (id) => window.AdminApi.opportunities.archive(id), done: 'Annonce archivée', confirm: 'Archiver cette annonce ? Elle ne sera plus visible sur le site.' },
    delete: { run: (id) => window.AdminApi.opportunities.remove(id), done: 'Annonce supprimée', confirm: 'Supprimer définitivement cette annonce ?' },
  };

  async function editById(id) {
    try {
      const res = await window.AdminApi.opportunities.get(id);
      openForm(res.data);
    } catch (error) {
      toast(error.message, 'error');
    }
  }

  function bind() {
    document.getElementById('btn-opp-create')?.addEventListener('click', () => openForm(null));

    let searchTimer;
    document.getElementById('opp-filter-search')?.addEventListener('input', (event) => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => { filters.search = event.target.value.trim(); reload(); }, 350);
    });
    document.getElementById('opp-filter-status')?.addEventListener('change', (event) => { filters.status = event.target.value; reload(); });
    document.getElementById('opp-filter-category')?.addEventListener('change', (event) => { filters.category = event.target.value; reload(); });

    document.querySelectorAll('[data-opp-resolve]').forEach((button) => {
      button.addEventListener('click', async () => {
        button.disabled = true;
        try {
          await window.AdminApi.opportunities.resolveReport(button.dataset.oppResolve);
          toast('Signalement traité', 'success');
          reload();
        } catch (error) {
          toast(error.message, 'error');
          button.disabled = false;
        }
      });
    });

    document.querySelectorAll('[data-opp-action]').forEach((button) => {
      button.addEventListener('click', async () => {
        const { oppAction, id } = button.dataset;
        if (oppAction === 'edit') { editById(id); return; }
        if (oppAction === 'duplicate') {
          if (!confirm(`${items.find((i) => i.id === id)?.recurring ? '' : "Cette annonce n'est pas marquée comme session annuelle. "}Créer la fiche de la nouvelle session ? Elle reprend le contenu de celle-ci, en brouillon, sans les dates ni la vérification.`)) return;
          button.disabled = true;
          try {
            const res = await window.AdminApi.opportunities.duplicate(id);
            toast('Nouvelle session créée en brouillon : renseignez les nouvelles dates', 'success');
            await reload();
            openForm(res.data);
          } catch (error) {
            toast(error.message, 'error');
            button.disabled = false;
          }
          return;
        }
        const action = ACTIONS[oppAction];
        if (!action || (action.confirm && !confirm(action.confirm))) return;
        button.disabled = true;
        try {
          await action.run(id);
          toast(action.done, 'success');
          reload();
        } catch (error) {
          toast(error.message, 'error');
          button.disabled = false;
        }
      });
    });
  }

  window.AdminOpportunities = { render, bind, openCreate: () => openForm(null) };
})();

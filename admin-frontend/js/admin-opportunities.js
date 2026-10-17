/**
 * Admin — rubrique « Concours & opportunités ».
 * Liste, création/édition, vérification de la source et publication des annonces.
 * Règle : une annonce n'est publiable qu'avec un lien officiel vérifié.
 */
(function () {
  'use strict';

  const CATEGORIES = { BOURSE: '🎓 Bourse', CONCOURS: '🏆 Concours', EXAMEN: '📝 Examen', ADMISSION: '🏫 Admission' };
  const LEVELS = { COLLEGE: 'Collège', LYCEE: 'Lycée', BACHELIER: 'Bachelier', ETUDIANT: 'Étudiant' };
  const DESTINATIONS = { SENEGAL: 'Sénégal', AFRIQUE: 'Afrique', INTERNATIONAL: 'International' };
  const PHASES = { OPEN: ['Ouvert', 'badge-success'], UPCOMING: ['À venir', 'badge-primary'], CLOSED: ['Clôturé', 'badge-muted'], RESULTS: ['Résultats', 'badge-warning'] };
  const STATUSES = { DRAFT: ['Brouillon', 'badge-muted'], PENDING_REVIEW: ['En attente', 'badge-warning'], PUBLISHED: ['Publiée', 'badge-success'], ARCHIVED: ['Archivée', 'badge-danger'] };
  // Au-delà, une annonce publiée mérite une nouvelle vérification de sa source
  const STALE_VERIFICATION_DAYS = 30;

  const filters = { status: '', category: '', search: '' };
  let items = [];

  const esc = (value) => window.AdminPages.escapeHtml(value == null ? '' : value);
  const toast = (message, type) => window.AdminPages.showToast(message, type);
  const can = (permission) => window.AdminApp.hasPermission(window.AdminApp.currentUser, `opportunite.${permission}`);
  const day = (value) => (value ? String(value).slice(0, 10) : '');
  const frDate = (value) => (value ? new Date(value).toLocaleDateString('fr-FR', { timeZone: 'UTC' }) : '—');
  const badge = ([label, cls]) => `<span class="badge ${cls}">${esc(label)}</span>`;

  function daysSince(value) {
    return value ? Math.floor((Date.now() - new Date(value)) / 86400000) : Infinity;
  }

  function verificationCell(item) {
    if (!item.officialUrl) return '<span style="color:#dc2626;font-size:0.8rem;">⚠️ Aucun lien officiel</span>';
    if (!item.lastVerifiedAt) return '<span style="color:#d97706;font-size:0.8rem;">⏳ Non vérifiée</span>';
    const stale = item.status === 'PUBLISHED' && daysSince(item.lastVerifiedAt) > STALE_VERIFICATION_DAYS;
    return `<span style="font-size:0.82rem;${stale ? 'color:#d97706;font-weight:600;' : ''}">${stale ? '⏳ ' : '✅ '}${esc(frDate(item.lastVerifiedAt))}</span>`;
  }

  function actionButtons(item) {
    const buttons = [];
    if (can('update')) buttons.push(`<button class="btn btn-sm btn-secondary" data-opp-action="edit" data-id="${esc(item.id)}">Modifier</button>`);
    if (can('publish')) {
      if (item.status === 'PUBLISHED') {
        buttons.push(`<button class="btn btn-sm btn-ghost" data-opp-action="unpublish" data-id="${esc(item.id)}">Dépublier</button>`);
      } else {
        buttons.push(`<button class="btn btn-sm btn-primary" data-opp-action="publish" data-id="${esc(item.id)}">Publier</button>`);
      }
    }
    if (can('archive') && item.status !== 'ARCHIVED') buttons.push(`<button class="btn btn-sm btn-ghost" data-opp-action="archive" data-id="${esc(item.id)}">Archiver</button>`);
    if (item.status === 'PUBLISHED') buttons.push(`<a class="btn btn-sm btn-outline" style="text-decoration:none;" target="_blank" rel="noopener" href="../frontend/opportunites.html?id=${encodeURIComponent(item.id)}">Voir</a>`);
    if (can('delete')) buttons.push(`<button class="btn btn-sm btn-danger" data-opp-action="delete" data-id="${esc(item.id)}">Supprimer</button>`);
    return `<div style="display:flex;gap:0.3rem;flex-wrap:wrap;">${buttons.join('')}</div>`;
  }

  function options(map, selected, allLabel) {
    return `<option value="">${allLabel}</option>` + Object.entries(map)
      .map(([value, label]) => `<option value="${value}" ${selected === value ? 'selected' : ''}>${esc(Array.isArray(label) ? label[0] : label)}</option>`).join('');
  }

  async function render() {
    const res = await window.AdminApi.opportunities.getAdmin(filters);
    items = res.data || [];
    const published = items.filter((i) => i.status === 'PUBLISHED');
    const toArchive = published.filter((i) => i.phase === 'CLOSED' && daysSince(i.deadline) > 30).length;
    const toReverify = published.filter((i) => daysSince(i.lastVerifiedAt) > STALE_VERIFICATION_DAYS).length;

    return `
      <div class="card">
        <div class="card-header">
          <div>
            <h2 style="margin:0 0 0.25rem 0;">Concours & opportunités</h2>
            <p style="margin:0;font-size:0.85rem;color:#64748b;">Bourses, concours, examens et admissions. Une annonce ne peut être publiée qu'avec son lien officiel, vérifié par l'équipe.</p>
          </div>
          ${can('create') ? '<button class="btn btn-primary" id="btn-opp-create">+ Nouvelle annonce</button>' : ''}
        </div>

        ${(toArchive || toReverify) ? `
          <div style="display:flex;flex-direction:column;gap:0.35rem;margin-bottom:1rem;padding:0.75rem 1rem;border-radius:8px;background:#fffbeb;border:1px solid #fde68a;color:#78350f;font-size:0.88rem;">
            ${toReverify ? `<span>⏳ <strong>${toReverify}</strong> annonce(s) publiée(s) vérifiée(s) il y a plus de ${STALE_VERIFICATION_DAYS} jours : revérifiez la source officielle.</span>` : ''}
            ${toArchive ? `<span>🗄️ <strong>${toArchive}</strong> annonce(s) clôturée(s) depuis plus d'un mois : pensez à les archiver.</span>` : ''}
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
            <thead><tr><th>Annonce</th><th>Catégorie</th><th>Phase</th><th>Date limite</th><th>Statut</th><th>Source vérifiée</th><th>Actions</th></tr></thead>
            <tbody>
              ${items.length === 0
                ? '<tr><td colspan="7"><div class="empty-state">Aucune annonce. Cliquez sur « Nouvelle annonce » pour publier la première.</div></td></tr>'
                : items.map((item) => `
                  <tr>
                    <td><div style="font-weight:600;">${esc(item.title)}</div><div style="font-size:0.78rem;color:#64748b;">${esc(item.organization)}</div></td>
                    <td>${esc(CATEGORIES[item.category] || item.category)}</td>
                    <td>${badge(PHASES[item.phase] || [item.phase, 'badge-muted'])}</td>
                    <td>${esc(frDate(item.deadline))}</td>
                    <td>${badge(STATUSES[item.status] || [item.status, 'badge-muted'])}</td>
                    <td>${verificationCell(item)}</td>
                    <td>${actionButtons(item)}</td>
                  </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>`;
  }

  function reload() {
    return window.AdminPages.loadPage('opportunites', true);
  }

  function keyDateRow(entry = {}) {
    return `
      <div class="opp-keydate-row" style="display:grid;grid-template-columns:160px 1fr auto;gap:0.5rem;align-items:center;">
        <input type="date" class="opp-keydate-date" value="${esc(entry.date || '')}" aria-label="Date">
        <input type="text" class="opp-keydate-label" value="${esc(entry.label || '')}" maxlength="120" placeholder="Ex. : Épreuves écrites, Publication des résultats…" aria-label="Libellé">
        <button type="button" class="btn btn-sm btn-ghost opp-keydate-remove" aria-label="Retirer cette date">✕</button>
      </div>`;
  }

  function openForm(item) {
    document.getElementById('opp-modal-overlay')?.remove();
    const levels = item?.levels || [];
    const overlay = document.createElement('div');
    overlay.id = 'opp-modal-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(15,23,42,0.65);display:flex;align-items:center;justify-content:center;z-index:1000;padding:1rem;';
    overlay.innerHTML = `
      <div class="card" role="dialog" aria-modal="true" aria-labelledby="opp-modal-title" style="max-width:820px;width:100%;padding:1.5rem;max-height:92vh;overflow-y:auto;border-radius:12px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;border-bottom:1px solid #e2e8f0;padding-bottom:0.75rem;">
          <h2 id="opp-modal-title" style="margin:0;font-size:1.25rem;">${item ? "Modifier l'annonce" : 'Nouvelle annonce'}</h2>
          <button type="button" data-opp-close style="border:none;background:transparent;font-size:1.5rem;cursor:pointer;line-height:1;" aria-label="Fermer">&times;</button>
        </div>
        <form id="opp-form" style="display:flex;flex-direction:column;gap:0.85rem;">
          <div style="display:grid;grid-template-columns:2fr 1fr;gap:0.75rem;">
            <label>Intitulé *<input name="title" required minlength="3" maxlength="200" value="${esc(item?.title)}" placeholder="Ex. : Bourse d'excellence du Gouvernement"></label>
            <label>Catégorie *<select name="category" required>${Object.entries(CATEGORIES).map(([v, l]) => `<option value="${v}" ${item?.category === v ? 'selected' : ''}>${l}</option>`).join('')}</select></label>
          </div>
          <label>Organisme responsable *<input name="organization" required minlength="2" maxlength="200" value="${esc(item?.organization)}" placeholder="Ex. : Ministère de l'Enseignement supérieur"></label>
          <label>Résumé (affiché sur la carte) *<textarea name="summary" required minlength="10" maxlength="600" rows="2">${esc(item?.summary)}</textarea></label>

          <fieldset style="border:1px solid #e2e8f0;border-radius:8px;padding:0.75rem;">
            <legend style="font-weight:600;font-size:0.88rem;padding:0 0.3rem;">Public concerné et destination</legend>
            <div style="display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:0.75rem;">
              ${Object.entries(LEVELS).map(([v, l]) => `<label style="flex-direction:row;align-items:center;font-weight:500;"><input type="checkbox" name="levels" value="${v}" ${levels.includes(v) ? 'checked' : ''}> ${l}</label>`).join('')}
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;">
              <label>Destination<select name="destination">${options(DESTINATIONS, item?.destination || '', '— Non précisée —')}</select></label>
              <label>Pays / ville (facultatif)<input name="country" maxlength="100" value="${esc(item?.country)}" placeholder="Ex. : Maroc, France, Dakar"></label>
            </div>
          </fieldset>

          <fieldset style="border:1px solid #e2e8f0;border-radius:8px;padding:0.75rem;">
            <legend style="font-weight:600;font-size:0.88rem;padding:0 0.3rem;">Calendrier</legend>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;">
              <label>Ouverture des candidatures<input type="date" name="openingDate" value="${day(item?.openingDate)}"></label>
              <label>Date limite<input type="date" name="deadline" value="${day(item?.deadline)}"></label>
            </div>
            <p style="margin:0.6rem 0 0.35rem;font-size:0.85rem;font-weight:600;color:#334155;">Autres dates importantes (épreuves, résultats…)</p>
            <div id="opp-keydates" style="display:flex;flex-direction:column;gap:0.4rem;">${(item?.keyDates || []).map(keyDateRow).join('')}</div>
            <button type="button" class="btn btn-sm btn-secondary" id="opp-keydate-add" style="margin-top:0.4rem;">+ Ajouter une date</button>
            <label style="flex-direction:row;align-items:center;font-weight:500;margin-top:0.6rem;"><input type="checkbox" name="results" ${item?.phaseOverride === 'RESULTS' ? 'checked' : ''}> Les résultats sont publiés</label>
          </fieldset>

          <label>Conditions d'éligibilité<textarea name="eligibility" maxlength="2000" rows="3" placeholder="Âge, moyenne, nationalité, série du bac…">${esc(item?.eligibility)}</textarea></label>
          <label>Documents à préparer (un par ligne)<textarea name="documents" rows="3" placeholder="Copie du relevé de notes&#10;Extrait de naissance&#10;Lettre de motivation">${esc((item?.documents || []).join('\n'))}</textarea></label>
          <label>Avantages / financement<textarea name="benefits" maxlength="1000" rows="2" placeholder="Frais de scolarité, allocation mensuelle, billet d'avion…">${esc(item?.benefits)}</textarea></label>
          <label>Détails complémentaires<textarea name="details" maxlength="5000" rows="4" placeholder="Modalités, étapes de la candidature, conseils…">${esc(item?.details)}</textarea></label>

          <fieldset style="border:1px solid #fde68a;background:#fffbeb;border-radius:8px;padding:0.75rem;">
            <legend style="font-weight:600;font-size:0.88rem;padding:0 0.3rem;">Source officielle (obligatoire pour publier)</legend>
            <label>Lien officiel de l'annonce ou de la candidature<input type="url" name="officialUrl" maxlength="500" value="${esc(item?.officialUrl)}" placeholder="https://…"></label>
            <label style="flex-direction:row;align-items:flex-start;font-weight:500;margin-top:0.6rem;gap:0.5rem;">
              <input type="checkbox" name="markVerified" style="margin-top:0.2rem;">
              <span>J'ai vérifié aujourd'hui ces informations sur la source officielle.${item?.lastVerifiedAt ? ` <small style="color:#64748b;">(Dernière vérification : ${esc(frDate(item.lastVerifiedAt))})</small>` : ''}</span>
            </label>
          </fieldset>

          <div style="display:flex;justify-content:flex-end;gap:0.5rem;flex-wrap:wrap;border-top:1px solid #e2e8f0;padding-top:0.85rem;">
            <button type="button" class="btn btn-ghost" data-opp-close>Annuler</button>
            <button type="submit" class="btn btn-secondary" data-publish="0">Enregistrer</button>
            ${can('publish') && item?.status !== 'PUBLISHED' ? '<button type="submit" class="btn btn-primary" data-publish="1">Enregistrer et publier</button>' : ''}
          </div>
        </form>
      </div>`;

    document.body.appendChild(overlay);
    const form = overlay.querySelector('#opp-form');
    const keyDates = overlay.querySelector('#opp-keydates');
    const close = () => overlay.remove();

    overlay.addEventListener('click', (event) => {
      if (event.target === overlay || event.target.closest('[data-opp-close]')) close();
      const remove = event.target.closest('.opp-keydate-remove');
      if (remove) remove.closest('.opp-keydate-row').remove();
    });
    overlay.addEventListener('keydown', (event) => { if (event.key === 'Escape') close(); });
    overlay.querySelector('#opp-keydate-add').addEventListener('click', () => {
      keyDates.insertAdjacentHTML('beforeend', keyDateRow());
      keyDates.lastElementChild.querySelector('input').focus();
    });
    form.querySelector('[name="title"]').focus();

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const publish = event.submitter?.dataset.publish === '1';
      const data = new FormData(form);
      const text = (name) => (data.get(name) || '').toString().trim();
      const payload = {
        title: text('title'),
        organization: text('organization'),
        category: text('category'),
        summary: text('summary'),
        levels: data.getAll('levels'),
        destination: text('destination') || null,
        country: text('country') || null,
        openingDate: text('openingDate') || null,
        deadline: text('deadline') || null,
        keyDates: [...keyDates.querySelectorAll('.opp-keydate-row')]
          .map((row) => ({ date: row.querySelector('.opp-keydate-date').value, label: row.querySelector('.opp-keydate-label').value.trim() }))
          .filter((d) => d.date && d.label),
        phaseOverride: data.get('results') ? 'RESULTS' : null,
        eligibility: text('eligibility') || null,
        documents: text('documents').split('\n').map((d) => d.trim()).filter(Boolean),
        benefits: text('benefits') || null,
        details: text('details') || null,
        officialUrl: text('officialUrl') || null,
      };
      if (data.get('markVerified')) payload.markVerified = true;

      const buttons = form.querySelectorAll('button[type="submit"]');
      buttons.forEach((b) => { b.disabled = true; });
      try {
        const saved = item
          ? await window.AdminApi.opportunities.update(item.id, payload)
          : await window.AdminApi.opportunities.create(payload);
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

  function bind() {
    document.getElementById('btn-opp-create')?.addEventListener('click', () => openForm(null));

    let searchTimer;
    document.getElementById('opp-filter-search')?.addEventListener('input', (event) => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => { filters.search = event.target.value.trim(); reload(); }, 350);
    });
    document.getElementById('opp-filter-status')?.addEventListener('change', (event) => { filters.status = event.target.value; reload(); });
    document.getElementById('opp-filter-category')?.addEventListener('change', (event) => { filters.category = event.target.value; reload(); });

    document.querySelectorAll('[data-opp-action]').forEach((button) => {
      button.addEventListener('click', async () => {
        const { oppAction, id } = button.dataset;
        if (oppAction === 'edit') {
          try {
            const res = await window.AdminApi.opportunities.get(id);
            openForm(res.data);
          } catch (error) {
            toast(error.message, 'error');
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

  window.AdminOpportunities = { render, bind };
})();

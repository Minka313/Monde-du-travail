/**
 * Admin — « Propositions des mentors » : signalements et propositions de modification des fiches
 * formations et métiers. Les responsables du module (ou la Présidence) appliquent la modification
 * dans la fiche, puis marquent la proposition « appliquée » ou « non retenue » (le mentor est prévenu).
 */
(function () {
  'use strict';

  const KINDS = { ERREUR: 'Erreur à corriger', MISE_A_JOUR: 'Mise à jour', AJOUT: 'Ajout proposé', AUTRE: 'Autre' };
  const STATUS = { OPEN: ['À traiter', 'badge-warning'], APPLIED: ['Appliquée', 'badge-success'], REJECTED: ['Non retenue', 'badge-danger'] };
  const TYPES = { formation: ['Formation', '📚', 'formations'], job: ['Métier', '💼', 'metiers'] };
  const state = { status: 'OPEN', items: [] };

  const esc = (value) => window.AdminPages.escapeHtml(value == null ? '' : value);
  const toast = (message, type) => window.AdminPages.showToast(message, type);
  const frDate = (v) => (v ? new Date(v).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' }) : '');
  const ficheUrl = (s) => (s.targetType === 'formation'
    ? `../frontend/formation-detail.html?slug=${encodeURIComponent(s.targetId)}`
    : `../frontend/job-detail.html?slug=${encodeURIComponent(s.targetId)}`);

  function card(s) {
    const [typeLabel, icon, adminModule] = TYPES[s.targetType] || ['Fiche', '📄', 'dashboard'];
    const [statusLabel, statusClass] = STATUS[s.status] || STATUS.OPEN;
    return `
      <div class="card" style="margin-bottom:0.75rem;padding:1rem 1.1rem;">
        <div style="display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap;align-items:flex-start;">
          <div style="min-width:0;flex:1 1 320px;">
            <div style="font-size:0.8rem;color:#64748b;">${icon} ${esc(typeLabel)} · ${esc(KINDS[s.kind] || s.kind)}${s.section ? ` · ${esc(s.section)}` : ''} · ${esc(frDate(s.createdAt))}</div>
            <h3 style="margin:0.25rem 0 0.35rem;font-size:1.02rem;">${esc(s.targetTitle)}</h3>
            <div style="font-size:0.85rem;color:#475569;">Proposé par <strong>${esc(s.author?.fullName || 'un mentor')}</strong></div>
          </div>
          <span class="badge ${statusClass}">${esc(statusLabel)}</span>
        </div>
        <p style="margin:0.75rem 0 0;white-space:pre-wrap;font-size:0.92rem;">${esc(s.message)}</p>
        ${s.proposal ? `<div style="margin-top:0.6rem;padding:0.6rem 0.8rem;border-radius:8px;background:#f0f9ff;border:1px solid #bae6fd;font-size:0.9rem;"><strong style="font-size:0.78rem;letter-spacing:.04em;text-transform:uppercase;color:#0369a1;">Texte proposé</strong><div style="white-space:pre-wrap;margin-top:0.25rem;">${esc(s.proposal)}</div></div>` : ''}
        ${s.response ? `<p style="margin:0.6rem 0 0;font-size:0.85rem;color:#475569;"><strong>Réponse${s.resolvedBy ? ` de ${esc(s.resolvedBy)}` : ''} :</strong> ${esc(s.response)}</p>` : ''}
        <div style="display:flex;gap:0.4rem;flex-wrap:wrap;margin-top:0.8rem;">
          <a class="btn btn-sm btn-ghost" href="${esc(ficheUrl(s))}" target="_blank" rel="noopener">Voir la fiche ↗</a>
          ${s.status === 'OPEN' ? `
            <a class="btn btn-sm btn-secondary" href="#${adminModule}" data-sg-goto="${adminModule}">Modifier dans « ${esc(typeLabel)}s »</a>
            <button type="button" class="btn btn-sm btn-primary" data-sg-resolve="APPLIED" data-id="${esc(s.id)}">✅ Marquer appliquée</button>
            <button type="button" class="btn btn-sm btn-ghost" style="color:#b91c1c;" data-sg-resolve="REJECTED" data-id="${esc(s.id)}">Non retenue…</button>` : ''}
        </div>
      </div>`;
  }

  async function render() {
    const res = await window.AdminApi.request(`/mentoring/suggestions?scope=review&status=${encodeURIComponent(state.status)}`);
    state.items = res.data || [];
    const tabs = Object.entries(STATUS).map(([key, [label]]) => `<button type="button" class="vz-period${key === state.status ? ' is-active' : ''}" data-sg-status="${key}" aria-pressed="${key === state.status}">${esc(label)}</button>`).join('');
    return `
      <div class="card">
        <div class="card-header" style="flex-wrap:wrap;gap:0.75rem;">
          <div>
            <h2 style="margin:0 0 0.25rem;">✏️ Propositions des mentors</h2>
            <p style="margin:0;font-size:0.85rem;color:#64748b;">Erreurs signalées et modifications proposées par les mentors sur les fiches formations et métiers. Applique la modification dans la fiche, puis marque la proposition : le mentor est prévenu.</p>
          </div>
          <div class="vz-filters" role="group" aria-label="Statut">${tabs}</div>
        </div>
      </div>
      ${state.items.length ? state.items.map(card).join('') : `<div class="empty-state">${state.status === 'OPEN' ? 'Aucune proposition à traiter. 🎉' : 'Aucune proposition dans cette liste.'}</div>`}`;
  }

  const rerender = () => window.AdminPages.loadPage('suggestions', true);

  function bind() {
    document.querySelectorAll('[data-sg-status]').forEach((btn) => btn.addEventListener('click', () => {
      state.status = btn.dataset.sgStatus;
      rerender();
    }));
    document.querySelectorAll('[data-sg-goto]').forEach((a) => a.addEventListener('click', (e) => {
      e.preventDefault();
      window.AdminRouter.navigate(a.dataset.sgGoto);
    }));
    document.querySelectorAll('[data-sg-resolve]').forEach((btn) => btn.addEventListener('click', async () => {
      const status = btn.dataset.sgResolve;
      let response = null;
      if (status === 'REJECTED') {
        response = window.prompt('Explique au mentor pourquoi la proposition n\'est pas retenue :');
        if (!response || !response.trim()) return;
      } else {
        response = window.prompt('Un mot pour le mentor (facultatif) :', 'Corrigé, merci !');
        if (response === null) return;
      }
      btn.disabled = true;
      try {
        await window.AdminApi.request(`/mentoring/suggestions/${encodeURIComponent(btn.dataset.id)}/resolve`, {
          method: 'POST', body: JSON.stringify({ status, response: response.trim() || null }),
        });
        toast(status === 'APPLIED' ? 'Proposition marquée appliquée' : 'Réponse envoyée au mentor', 'success');
        rerender();
      } catch (error) {
        btn.disabled = false;
        toast(error.message || 'Action impossible', 'error');
      }
    }));
  }

  window.AdminSuggestions = { render, bind };
})();

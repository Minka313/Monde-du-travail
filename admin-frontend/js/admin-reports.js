/**
 * Admin — « Rapports du bureau » (Présidence / Ultra Admin).
 * Examen des rapports soumis par les postes, situation et échéances de chaque poste,
 * trésorerie de l'année et paramétrage du rythme de rapport.
 */
(function () {
  'use strict';

  const RV = window.ReportView;
  const esc = (value) => window.AdminPages.escapeHtml(value == null ? '' : value);
  const toast = (message, type) => window.AdminPages.showToast(message, type);
  const reload = () => window.AdminPages.loadPage('rapports', true);

  const filters = { status: '', positionId: '', periodKey: '', archived: '' };
  let state = { year: new Date().getUTCFullYear(), summary: null, templates: {}, reports: [] };

  function kpi(label, value, tone, hint) {
    return `
      <div class="ar-kpi ar-kpi-${tone}">
        <span>${esc(label)}</span>
        <strong>${value}</strong>
        ${hint ? `<small>${esc(hint)}</small>` : ''}
      </div>`;
  }

  function reportRow(r) {
    const tpl = state.templates[r.templateKey] || {};
    return `
      <tr>
        <td><div style="font-weight:600;">${esc(tpl.icon || '📋')} ${esc(r.title)}</div><div class="ar-sub">${esc(r.position.title)}</div></td>
        <td>${esc(r.author.fullName)}</td>
        <td>${esc(r.periodLabel || '—')}</td>
        <td>${RV.statusBadge(r.status)}</td>
        <td>${esc(r.submittedAt ? RV.frDate(r.submittedAt) : '—')}</td>
        <td>
          <div style="display:flex;gap:0.3rem;flex-wrap:wrap;">
            <button class="btn btn-sm ${r.permissions.review ? 'btn-primary' : 'btn-secondary'}" data-ar-action="view" data-id="${esc(r.id)}">${r.permissions.review ? 'Examiner' : 'Ouvrir'}</button>
            <button class="btn btn-sm btn-ghost" data-ar-action="pdf" data-id="${esc(r.id)}">PDF</button>
          </div>
        </td>
      </tr>`;
  }

  function reportsTable(rows, empty) {
    return `
      <div class="table-wrapper">
        <table>
          <thead><tr><th>Rapport</th><th>Auteur</th><th>Période</th><th>Statut</th><th>Soumis le</th><th>Actions</th></tr></thead>
          <tbody>${rows.length ? rows.map(reportRow).join('') : `<tr><td colspan="6"><div class="empty-state">${esc(empty)}</div></td></tr>`}</tbody>
        </table>
      </div>`;
  }

  function positionsTable(positions) {
    return `
      <div class="table-wrapper">
        <table>
          <thead><tr><th>Poste</th><th>Titulaire</th><th>Modèle</th><th>Rythme</th><th>Rapports</th><th>Échéances</th><th></th></tr></thead>
          <tbody>
            ${positions.map((p) => {
              const tpl = state.templates[p.templateKey] || {};
              const late = p.late.length
                ? `<span class="badge badge-danger">${p.late.length} en retard</span><div class="ar-sub">${esc(p.late.map((l) => l.label).join(', '))}</div>`
                : (p.holders.length && p.reportFrequency !== 'NONE' ? '<span class="badge badge-success">À jour</span>' : '<span class="ar-sub">—</span>');
              return `
                <tr>
                  <td><div style="font-weight:600;">${esc(p.title)}</div>${p.reportsTo ? `<div class="ar-sub">Rend compte à : ${esc(p.reportsTo.title)}</div>` : ''}${p.seesAllReports ? '<div class="ar-sub">👁️ Lit tous les rapports</div>' : ''}</td>
                  <td>${p.holders.length ? esc(p.holders.map((h) => h.fullName).join(', ')) : '<span class="ar-sub">Vacant</span>'}${p.teamCount ? `<div class="ar-sub">+ ${p.teamCount} en équipe</div>` : ''}</td>
                  <td>${esc(tpl.icon || '')} ${esc(tpl.label || '')}</td>
                  <td>${esc(RV.FREQUENCY_LABELS[p.reportFrequency] || '')}${p.reportFrequency !== 'NONE' ? `<div class="ar-sub">délai ${p.reportDueDays} j</div>` : ''}</td>
                  <td><span title="Validés">✅ ${p.counts.validated}</span> · <span title="À examiner">📨 ${p.counts.submitted}</span> · <span title="En correction">↩️ ${p.counts.needsChanges}</span></td>
                  <td>${late}${p.next ? `<div class="ar-sub">Prochaine : ${esc(p.next.label)} (${esc(RV.frDate(p.next.dueDate))})</div>` : ''}</td>
                  <td><button class="btn btn-sm btn-ghost" data-ar-action="settings" data-id="${esc(p.id)}">⚙️ Paramétrer</button></td>
                </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>`;
  }

  function treasuryBlock(t) {
    const max = Math.max(1, ...t.periods.map((p) => Math.max(p.income, p.expense)));
    return `
      <div class="rv-kpis rv-scope">
        <div class="rv-in"><span>Recettes</span><strong>+ ${esc(RV.amount(t.income))}</strong></div>
        <div class="rv-out"><span>Dépenses</span><strong>− ${esc(RV.amount(t.expense))}</strong></div>
        <div class="rv-balance"><span>Résultat</span><strong>${esc(RV.amount(t.balance))}</strong></div>
        <div><span>Rapports validés</span><strong>${t.periods.reduce((n, p) => n + p.reports, 0)}</strong></div>
      </div>
      ${t.periods.length ? `<div class="ar-flows">${t.periods.map((p) => `
        <div class="ar-flow">
          <span>${esc(p.label)}</span>
          <div>
            <div class="ar-bar ar-bar-in" style="width:${(p.income / max) * 100}%" title="Recettes ${esc(RV.amount(p.income))}"></div>
            <div class="ar-bar ar-bar-out" style="width:${(p.expense / max) * 100}%" title="Dépenses ${esc(RV.amount(p.expense))}"></div>
          </div>
          <small>${esc(RV.amount(p.income - p.expense))}</small>
        </div>`).join('')}</div>` : '<div class="empty-state">Aucun rapport financier validé pour cette année.</div>'}`;
  }

  async function render() {
    const [summaryRes, listRes, tplRes] = await Promise.all([
      window.AdminApi.reports.summary(state.year),
      window.AdminApi.reports.list(filters),
      window.AdminApi.reports.templates(),
    ]);
    state.summary = summaryRes.data;
    state.reports = listRes.data || [];
    state.templates = tplRes.data || {};
    const s = state.summary;
    const toReview = state.reports.filter((r) => r.permissions.review);
    const years = [0, 1, 2].map((d) => new Date().getUTCFullYear() - d);
    const periods = [...new Map(state.reports.filter((r) => r.periodKey).map((r) => [r.periodKey, r.periodLabel])).entries()]
      .sort((a, b) => b[0].localeCompare(a[0]));

    return `
      <div class="ar-page rv-scope">
        <div class="card ar-hero">
          <div>
            <h2 style="margin:0 0 0.25rem;">📑 Rapports du bureau</h2>
            <p style="margin:0;font-size:0.88rem;color:#64748b;">Chaque poste rédige ses rapports dans son espace personnel du site et les soumet à la Présidence. Validez-les ou demandez des corrections ici.</p>
          </div>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;align-items:center;">
            <label class="ar-inline">Année <select id="ar-year">${years.map((y) => `<option value="${y}" ${y === state.year ? 'selected' : ''}>${y}</option>`).join('')}</select></label>
            <button class="btn btn-secondary" id="ar-export-summary">⬇️ Synthèse PDF</button>
            <a class="btn btn-outline" style="text-decoration:none;" href="../frontend/bureau.html" target="_blank" rel="noopener">🏛️ Espace bureau du site</a>
          </div>
        </div>

        <div class="ar-kpis">
          ${kpi('À examiner', s.kpis.toReview, 'info', 'en attente de votre décision')}
          ${kpi('En correction', s.kpis.needsChanges, 'warn', 'renvoyés aux auteurs')}
          ${kpi('Validés', s.kpis.validated, 'ok', 'depuis le début')}
          ${kpi('Postes en retard', `${s.kpis.latePositions}<small> / ${s.kpis.occupiedPositions}</small>`, s.kpis.latePositions ? 'late' : 'ok', 'postes occupés')}
        </div>

        <div class="card">
          <div class="card-header"><h3 style="margin:0;">📥 À examiner</h3></div>
          ${reportsTable(toReview, 'Aucun rapport en attente. Les nouvelles soumissions apparaîtront ici et vous serez notifié.')}
        </div>

        <div class="card">
          <div class="card-header"><div><h3 style="margin:0;">🏛️ Situation des postes</h3><p class="ar-sub" style="margin:0.2rem 0 0;">Rythme, échéances et retards. « Paramétrer » règle le modèle, le rythme, le délai et la hiérarchie de lecture.</p></div></div>
          ${positionsTable(s.positions)}
        </div>

        <div class="card">
          <div class="card-header"><h3 style="margin:0;">💰 Trésorerie ${s.year}</h3></div>
          ${treasuryBlock(s.treasury)}
        </div>

        <div class="card">
          <div class="card-header"><h3 style="margin:0;">🗂️ Tous les rapports</h3></div>
          <div style="display:flex;gap:1rem;align-items:flex-end;margin-bottom:1rem;flex-wrap:wrap;">
            <label>Statut
              <select id="ar-filter-status">
                <option value="">Tous</option>
                ${Object.entries(RV.STATUS).filter(([k]) => k !== 'DRAFT').map(([k, v]) => `<option value="${k}" ${filters.status === k ? 'selected' : ''}>${esc(v.label)}</option>`).join('')}
              </select>
            </label>
            <label>Poste
              <select id="ar-filter-position">
                <option value="">Tous</option>
                ${s.positions.map((p) => `<option value="${esc(p.id)}" ${filters.positionId === p.id ? 'selected' : ''}>${esc(p.title)}</option>`).join('')}
              </select>
            </label>
            <label>Classement
              <select id="ar-filter-archived">
                <option value="">Rapports en cours</option>
                <option value="only" ${filters.archived === 'only' ? 'selected' : ''}>🗄️ Archives</option>
              </select>
            </label>
            <label>Période
              <select id="ar-filter-period">
                <option value="">Toutes</option>
                ${periods.map(([k, l]) => `<option value="${esc(k)}" ${filters.periodKey === k ? 'selected' : ''}>${esc(l)}</option>`).join('')}
              </select>
            </label>
            <button class="btn btn-secondary" id="ar-export-list" ${state.reports.some((r) => r.status === 'VALIDATED') ? '' : 'disabled'}>⬇️ Exporter les validés (PDF)</button>
          </div>
          ${reportsTable(state.reports.filter((r) => r.status !== 'DRAFT'), 'Aucun rapport pour ces critères.')}
        </div>
      </div>`;
  }

  function overlay(html, label) {
    document.getElementById('ar-modal-overlay')?.remove();
    const el = document.createElement('div');
    el.id = 'ar-modal-overlay';
    el.className = 'ar-overlay';
    el.innerHTML = `
      <div class="card ar-modal rv-scope" role="dialog" aria-modal="true" aria-label="${esc(label)}">
        <button type="button" class="ar-close" data-ar-close aria-label="Fermer">&times;</button>
        ${html}
      </div>`;
    document.body.appendChild(el);
    el.addEventListener('click', (e) => {
      if (e.target === el || e.target.closest('[data-ar-close]')) el.remove();
    });
    return el;
  }

  async function openReport(id) {
    let report;
    try {
      report = (await window.AdminApi.reports.get(id)).data;
    } catch (error) {
      toast(error.message, 'error');
      return;
    }
    const canReview = report.permissions.review;
    const el = overlay(`
      ${RV.render(report, state.templates)}
      ${canReview ? `
        <div class="ar-review">
          <h4 style="margin:0 0 0.5rem;">Décision de la Présidence</h4>
          <label for="ar-review-comment" style="display:block;font-size:0.85rem;font-weight:600;margin-bottom:0.3rem;">Commentaire <span class="ar-sub">(obligatoire pour demander des corrections)</span></label>
          <textarea id="ar-review-comment" rows="3" maxlength="3000" style="width:100%;" placeholder="Remarques, corrections attendues, félicitations…"></textarea>
        </div>` : ''}
      <div class="ar-modal-foot">
        <button class="btn btn-ghost" data-ar-pdf>⬇️ PDF</button>
        ${report.permissions.delete ? '<button class="btn btn-danger" data-ar-delete>Supprimer</button>' : ''}
        ${report.permissions.archive ? '<button class="btn btn-ghost" data-ar-archive="1">🗄️ Archiver</button>' : ''}
        ${report.permissions.unarchive ? '<button class="btn btn-ghost" data-ar-archive="0">↩️ Restaurer</button>' : ''}
        <span style="flex:1;"></span>
        ${canReview ? `
          <button class="btn btn-secondary" data-ar-review="NEEDS_CHANGES">↩️ Demander des corrections</button>
          <button class="btn btn-primary" data-ar-review="VALIDATED">✅ Valider</button>` : '<button class="btn btn-secondary" data-ar-close>Fermer</button>'}
      </div>`, report.title);

    el.addEventListener('click', async (e) => {
      if (e.target.closest('[data-ar-pdf]')) printReports([report]);
      if (e.target.closest('[data-ar-delete]')) {
        if (!confirm('Supprimer définitivement ce rapport ? Cette action est tracée dans le journal.')) return;
        try {
          await window.AdminApi.reports.remove(report.id);
          toast('Rapport supprimé', 'success');
          el.remove();
          reload();
        } catch (error) {
          toast(error.message, 'error');
        }
      }
      const archiveBtn = e.target.closest('[data-ar-archive]');
      if (archiveBtn) {
        const archive = archiveBtn.dataset.arArchive === '1';
        if (archive && !confirm('Archiver ce rapport ? Il quittera les listes courantes et restera consultable dans « Archives ».')) return;
        try {
          const res = archive ? await window.AdminApi.reports.archive(report.id) : await window.AdminApi.reports.unarchive(report.id);
          toast(res.message, 'success');
          el.remove();
          reload();
        } catch (error) {
          toast(error.message, 'error');
        }
        return;
      }
      const btn = e.target.closest('[data-ar-review]');
      if (!btn) return;
      const decision = btn.dataset.arReview;
      const comment = el.querySelector('#ar-review-comment').value.trim();
      if (decision === 'NEEDS_CHANGES' && !comment) {
        toast('Précisez les corrections attendues dans le commentaire', 'error');
        el.querySelector('#ar-review-comment').focus();
        return;
      }
      btn.disabled = true;
      try {
        const res = await window.AdminApi.reports.review(report.id, decision, comment);
        toast(res.message, 'success');
        el.remove();
        reload();
      } catch (error) {
        btn.disabled = false;
        toast(error.message, 'error');
      }
    });
  }

  function openSettings(positionId) {
    const p = state.summary.positions.find((x) => x.id === positionId);
    if (!p) return;
    const el = overlay(`
      <h3 style="margin:0 0 0.25rem;">⚙️ ${esc(p.title)}</h3>
      <p class="ar-sub" style="margin:0 0 1rem;">Réglages des rapports de ce poste.</p>
      <form id="ar-settings-form" class="ar-form">
        <label>Modèle de rapport
          <select name="reportTemplate">
            <option value="">Automatique (d'après l'intitulé : ${esc(state.templates[p.templateKey]?.label || '')})</option>
            ${Object.entries(state.templates).map(([k, t]) => `<option value="${k}" ${p.reportTemplate === k ? 'selected' : ''}>${esc(t.icon)} ${esc(t.label)}</option>`).join('')}
          </select>
        </label>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem;">
          <label>Rythme attendu
            <select name="reportFrequency">${Object.entries(RV.FREQUENCY_LABELS).map(([k, l]) => `<option value="${k}" ${p.reportFrequency === k ? 'selected' : ''}>${esc(l)}</option>`).join('')}</select>
          </label>
          <label>Délai de remise (jours après la période)
            <input type="number" name="reportDueDays" min="0" max="90" value="${p.reportDueDays}">
          </label>
        </div>
        <label>Rend compte à (lit ses rapports soumis)
          <select name="reportsToId">
            <option value="">— Présidence uniquement —</option>
            ${state.summary.positions.filter((x) => x.id !== p.id).map((x) => `<option value="${esc(x.id)}" ${p.reportsTo?.id === x.id ? 'selected' : ''}>${esc(x.title)}</option>`).join('')}
          </select>
        </label>
        <label class="ar-check"><input type="checkbox" name="seesAllReports" ${p.seesAllReports ? 'checked' : ''}> Ce poste lit tous les rapports soumis (ex. Vice-Présidence)</label>
        <div class="ar-modal-foot">
          <span style="flex:1;"></span>
          <button type="button" class="btn btn-secondary" data-ar-close>Annuler</button>
          <button type="submit" class="btn btn-primary">Enregistrer</button>
        </div>
      </form>`, `Paramètres ${p.title}`);

    el.querySelector('form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const f = e.target;
      try {
        await window.AdminApi.reports.updateSettings(p.id, {
          reportTemplate: f.reportTemplate.value || null,
          reportFrequency: f.reportFrequency.value,
          reportDueDays: Number(f.reportDueDays.value) || 0,
          reportsToId: f.reportsToId.value || null,
          seesAllReports: f.seesAllReports.checked,
        });
        toast('Paramètres enregistrés', 'success');
        el.remove();
        reload();
      } catch (error) {
        toast(error.message, 'error');
      }
    });
  }

  function printReports(reports, opts = {}) {
    RV.print(reports, state.templates, opts);
  }

  async function exportValidated() {
    const ids = state.reports.filter((r) => r.status === 'VALIDATED').map((r) => r.id);
    if (ids.length > 40) {
      toast('Affinez les filtres : 40 rapports au maximum par export', 'error');
      return;
    }
    try {
      const reports = await Promise.all(ids.map((id) => window.AdminApi.reports.get(id).then((r) => r.data)));
      printReports(reports, { title: 'Rapports du bureau', subtitle: `${reports.length} rapport(s) validé(s) · édité le ${RV.frDate(new Date())}` });
    } catch (error) {
      toast(error.message, 'error');
    }
  }

  function exportSummary() {
    const s = state.summary;
    const rows = s.positions.map((p) => `<tr><td>${esc(p.title)}</td><td>${esc(p.holders.map((h) => h.fullName).join(', ') || 'Vacant')}</td>
      <td>${esc(RV.FREQUENCY_LABELS[p.reportFrequency] || '')}</td><td>${p.counts.validated}</td><td>${p.counts.submitted}</td>
      <td>${p.late.length ? esc(p.late.map((l) => l.label).join(', ')) : '—'}</td></tr>`).join('');
    const flows = s.treasury.periods.map((p) => `<tr><td>${esc(p.label)}</td><td class="rv-num">${esc(RV.amount(p.income))}</td><td class="rv-num">${esc(RV.amount(p.expense))}</td><td class="rv-num">${esc(RV.amount(p.income - p.expense))}</td></tr>`).join('');
    printReports([], {
      title: `Synthèse des rapports du bureau — ${s.year}`,
      intro: `
        <h3>Situation des postes</h3>
        <table class="sum-table"><thead><tr><th>Poste</th><th>Titulaire</th><th>Rythme</th><th>Validés</th><th>À examiner</th><th>Retards</th></tr></thead><tbody>${rows}</tbody></table>
        <h3>Trésorerie ${s.year}</h3>
        <table class="sum-table"><thead><tr><th>Période</th><th>Recettes</th><th>Dépenses</th><th>Résultat</th></tr></thead>
        <tbody>${flows || '<tr><td colspan="4">Aucun rapport financier validé</td></tr>'}
        <tr><td><strong>Total</strong></td><td class="rv-num"><strong>${esc(RV.amount(s.treasury.income))}</strong></td><td class="rv-num"><strong>${esc(RV.amount(s.treasury.expense))}</strong></td><td class="rv-num"><strong>${esc(RV.amount(s.treasury.balance))}</strong></td></tr></tbody></table>`,
    });
  }

  function bind() {
    document.getElementById('ar-year')?.addEventListener('change', (e) => { state.year = Number(e.target.value); reload(); });
    document.getElementById('ar-filter-status')?.addEventListener('change', (e) => { filters.status = e.target.value; reload(); });
    document.getElementById('ar-filter-position')?.addEventListener('change', (e) => { filters.positionId = e.target.value; reload(); });
    document.getElementById('ar-filter-period')?.addEventListener('change', (e) => { filters.periodKey = e.target.value; reload(); });
    document.getElementById('ar-filter-archived')?.addEventListener('change', (e) => { filters.archived = e.target.value; reload(); });
    document.getElementById('ar-export-summary')?.addEventListener('click', exportSummary);
    document.getElementById('ar-export-list')?.addEventListener('click', exportValidated);

    document.querySelectorAll('[data-ar-action]').forEach((button) => {
      button.addEventListener('click', async () => {
        const { arAction, id } = button.dataset;
        if (arAction === 'view') openReport(id);
        if (arAction === 'settings') openSettings(id);
        if (arAction === 'pdf') {
          try {
            printReports([(await window.AdminApi.reports.get(id)).data]);
          } catch (error) {
            toast(error.message, 'error');
          }
        }
      });
    });
  }

  window.AdminReports = { render, bind };
})();

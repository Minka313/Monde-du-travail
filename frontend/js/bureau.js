/**
 * Espace bureau : chaque membre du bureau rédige et soumet les rapports de son poste,
 * consulte ceux de son équipe et du bureau ; la Présidence les examine.
 */
(function () {
  'use strict';

  const RV = window.ReportView;
  const esc = RV.esc;

  const state = {
    user: null,
    ctx: null,
    tab: 'mine',
    cache: {},
    summaryYear: new Date().getUTCFullYear(),
  };

  const $ = (sel, root = document) => root.querySelector(sel);
  const templates = () => state.ctx.templates;

  // ===== Utilitaires d'interface =====

  function toast(message, type = 'success') {
    const el = document.createElement('div');
    el.className = `bx-toast bx-toast-${type}`;
    el.setAttribute('role', 'status');
    el.textContent = message;
    document.body.appendChild(el);
    requestAnimationFrame(() => el.classList.add('is-visible'));
    setTimeout(() => {
      el.classList.remove('is-visible');
      setTimeout(() => el.remove(), 300);
    }, 3800);
  }

  function openModal(html, { wide = false, label = 'Fenêtre' } = {}) {
    closeModal();
    const overlay = document.createElement('div');
    overlay.className = 'bx-modal-overlay';
    overlay.id = 'bxModal';
    overlay.innerHTML = `
      <div class="bx-modal rv-scope ${wide ? 'bx-modal-wide' : ''}" role="dialog" aria-modal="true" aria-label="${esc(label)}">
        <button type="button" class="bx-modal-close" data-close aria-label="Fermer">&times;</button>
        <div class="bx-modal-body">${html}</div>
      </div>`;
    document.body.appendChild(overlay);
    document.body.classList.add('bx-no-scroll');
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay || e.target.closest('[data-close]')) closeModal();
    });
    requestAnimationFrame(() => overlay.classList.add('is-open'));
    return overlay;
  }

  function closeModal() {
    document.getElementById('bxModal')?.remove();
    document.body.classList.remove('bx-no-scroll');
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  function busy(button, isBusy, text) {
    if (!button) return;
    if (isBusy) {
      button.dataset.label = button.innerHTML;
      button.disabled = true;
      button.innerHTML = `<span class="bx-spinner"></span> ${esc(text || 'Patiente…')}`;
    } else {
      button.disabled = false;
      if (button.dataset.label) button.innerHTML = button.dataset.label;
    }
  }

  const emptyState = (icon, title, text) => `
    <div class="bx-empty"><div class="bx-empty-icon">${icon}</div><h3>${esc(title)}</h3><p>${esc(text)}</p></div>`;

  // ===== Données =====

  async function loadContext() {
    const res = await window.Api.reports.context();
    state.ctx = res.data;
  }

  async function loadList(tab, force = false) {
    if (state.cache[tab] && !force) return state.cache[tab];
    const scope = { mine: 'mine', team: 'team', review: 'review', bureau: 'bureau' }[tab];
    const res = await window.Api.reports.list({ scope });
    state.cache[tab] = res.data || [];
    return state.cache[tab];
  }

  async function refresh() {
    state.cache = {};
    await loadContext();
    renderHero();
    renderTabs();
    await renderTab();
  }

  // ===== En-tête =====

  function renderHero() {
    const { ctx, user } = state;
    const late = ctx.positions.reduce((n, p) => n + (p.deadlines?.late.length || 0), 0);
    const nextDue = ctx.positions
      .map((p) => p.deadlines?.next)
      .filter(Boolean)
      .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))[0];

    $('#bxGreeting').textContent = `Bonjour ${user.firstName || ''} 👋`;
    $('#bxPositions').innerHTML = ctx.positions.length
      ? ctx.positions.map((p) => `<span class="bx-pos-badge">${esc(templates()[p.position.templateKey]?.icon || '🏛️')} ${esc(p.position.title)}${p.memberRole === 'EQUIPE' ? ' · équipe' : ''}</span>`).join('')
      : '<span class="bx-pos-badge">👑 Présidence</span>';

    const chips = [];
    if (ctx.canReview || ctx.seesAll) {
      chips.push(`<div class="bx-chip ${ctx.pendingReview ? 'bx-chip-alert' : ''}"><strong>${ctx.pendingReview}</strong><span>à examiner</span></div>`);
    }
    chips.push(`<div class="bx-chip ${late ? 'bx-chip-alert' : ''}"><strong>${late}</strong><span>rapport${late > 1 ? 's' : ''} en retard</span></div>`);
    if (nextDue) {
      chips.push(`<div class="bx-chip"><strong>${esc(RV.frDate(nextDue.dueDate))}</strong><span>prochaine échéance · ${esc(nextDue.label)}</span></div>`);
    }
    $('#bxHeroChips').innerHTML = chips.join('');
  }

  function tabsList() {
    const { ctx } = state;
    const tabs = [];
    if (ctx.positions.length) tabs.push({ key: 'mine', label: 'Mes rapports', icon: '🗂️' });
    if (ctx.canReview || ctx.seesAll) tabs.push({ key: 'review', label: 'À examiner', icon: '📥', count: ctx.pendingReview });
    if (ctx.supervises) tabs.push({ key: 'team', label: 'Mon équipe', icon: '👥' });
    tabs.push({ key: 'bureau', label: 'Rapports du bureau', icon: '🏛️' });
    if (ctx.seesAll) tabs.push({ key: 'summary', label: 'Synthèse', icon: '📊' });
    return tabs;
  }

  function renderTabs() {
    const tabs = tabsList();
    if (!tabs.some((t) => t.key === state.tab)) state.tab = tabs[0].key;
    $('#bxTabs').innerHTML = tabs.map((t) => `
      <button type="button" role="tab" class="bx-tab ${t.key === state.tab ? 'is-active' : ''}" data-tab="${t.key}" aria-selected="${t.key === state.tab}">
        <span aria-hidden="true">${t.icon}</span> ${esc(t.label)}${t.count ? ` <span class="bx-tab-count">${t.count}</span>` : ''}
      </button>`).join('');
  }

  // ===== Cartes de rapports =====

  function reportCard(report, { showAuthor = true } = {}) {
    const tpl = templates()[report.templateKey] || {};
    const p = report.permissions;
    const actions = [`<button type="button" class="bx-btn bx-btn-ghost" data-action="view" data-id="${esc(report.id)}">Ouvrir</button>`];
    if (p.edit) actions.push(`<button type="button" class="bx-btn bx-btn-ghost" data-action="edit" data-id="${esc(report.id)}">Modifier</button>`);
    if (p.submit) actions.push(`<button type="button" class="bx-btn bx-btn-primary" data-action="submit" data-id="${esc(report.id)}">Soumettre</button>`);
    if (p.review) actions.push(`<button type="button" class="bx-btn bx-btn-primary" data-action="view" data-id="${esc(report.id)}">Examiner</button>`);
    if (report.status !== 'DRAFT') actions.push(`<button type="button" class="bx-btn bx-btn-ghost" data-action="pdf" data-id="${esc(report.id)}" title="Exporter en PDF">PDF</button>`);
    if (p.delete && report.status === 'DRAFT') actions.push(`<button type="button" class="bx-btn bx-btn-danger" data-action="delete" data-id="${esc(report.id)}">Supprimer</button>`);

    const money = tpl.totals && report.status !== 'DRAFT'
      ? `<span class="bx-card-money">+${esc(RV.amount(report.incomeTotal))} · −${esc(RV.amount(report.expenseTotal))}</span>` : '';

    return `
      <article class="bx-card bx-card-${report.status.toLowerCase()}">
        <div class="bx-card-icon" aria-hidden="true">${esc(tpl.icon || '📋')}</div>
        <div class="bx-card-main">
          <div class="bx-card-top">
            <h3>${esc(report.title)}</h3>
            ${RV.statusBadge(report.status)}
          </div>
          <p class="bx-card-meta">
            ${esc(report.position.title)}${report.periodLabel ? ` · ${esc(report.periodLabel)}` : ''}
            ${showAuthor ? ` · ${esc(report.author.fullName)}` : ''}
            · ${report.submittedAt ? `soumis le ${esc(RV.frDate(report.submittedAt))}` : `modifié le ${esc(RV.frDate(report.updatedAt))}`}
          </p>
          ${report.status === 'NEEDS_CHANGES' && report.reviewComment ? `<p class="bx-card-note">↩️ ${esc(report.reviewComment)}</p>` : ''}
          ${money}
        </div>
        <div class="bx-card-actions">${actions.join('')}</div>
      </article>`;
  }

  // ===== Onglets =====

  function deadlineStrip(deadlines) {
    if (!deadlines) return '<p class="bx-muted">Aucune échéance fixée pour ce poste : rédige un rapport quand c\'est utile.</p>';
    const label = { DONE: 'Rendu', LATE: 'En retard', DUE: 'À rendre' };
    return `
      <div class="bx-deadlines" aria-label="Échéances">
        ${deadlines.periods.map((p) => `
          <div class="bx-deadline bx-deadline-${p.status.toLowerCase()}" title="${esc(label[p.status])} — avant le ${esc(RV.frDate(p.dueDate))}">
            <strong>${esc(p.label)}</strong>
            <span>${esc(label[p.status])}${p.status !== 'DONE' ? ` · ${esc(RV.frDate(p.dueDate))}` : ''}</span>
          </div>`).join('')}
      </div>`;
  }

  async function renderMine() {
    const reports = await loadList('mine');
    const positionsHtml = state.ctx.positions.map((p) => {
      const tpl = templates()[p.position.templateKey];
      const mine = reports.filter((r) => r.position.id === p.position.id);
      return `
        <section class="bx-panel">
          <header class="bx-panel-head">
            <div class="bx-panel-title">
              <span class="bx-panel-icon" aria-hidden="true">${esc(tpl.icon)}</span>
              <div>
                <h2>${esc(p.position.title)}</h2>
                <p>${esc(tpl.label)} · ${esc(RV.FREQUENCY_LABELS[p.position.reportFrequency] || '')}${p.position.reportFrequency !== 'NONE' ? ` · à remettre sous ${p.position.reportDueDays} jours après la période` : ''}</p>
              </div>
            </div>
            <button type="button" class="bx-btn bx-btn-gold" data-action="new" data-position="${esc(p.position.id)}">+ Nouveau rapport</button>
          </header>
          <p class="bx-panel-desc">${esc(tpl.description)}</p>
          ${p.memberRole === 'EQUIPE' ? '<p class="bx-muted">Tu fais partie de l\'équipe de ce poste : tes rapports sont lus par le ou la responsable et par la Présidence.</p>' : deadlineStrip(p.deadlines)}
          <div class="bx-list">
            ${mine.length ? mine.map((r) => reportCard(r, { showAuthor: false })).join('') : emptyState('📝', 'Aucun rapport pour l\'instant', 'Commence par un brouillon : tu pourras le compléter avant de le soumettre.')}
          </div>
        </section>`;
    }).join('');
    return positionsHtml;
  }

  async function renderSimpleList(tab, empty) {
    const reports = await loadList(tab);
    return `<div class="bx-list">${reports.length ? reports.map((r) => reportCard(r)).join('') : emptyState(...empty)}</div>`;
  }

  async function renderBureau() {
    const reports = await loadList('bureau');
    const positions = [...new Map(reports.map((r) => [r.position.id, r.position.title])).entries()];
    const periods = [...new Map(reports.filter((r) => r.periodKey).map((r) => [r.periodKey, r.periodLabel])).entries()]
      .sort((a, b) => b[0].localeCompare(a[0]));
    const f = state.bureauFilters || { position: '', period: '' };
    const filtered = reports.filter((r) => (!f.position || r.position.id === f.position) && (!f.period || r.periodKey === f.period));

    return `
      <div class="bx-toolbar">
        <label>Poste
          <select data-filter="position"><option value="">Tous les postes</option>
            ${positions.map(([id, title]) => `<option value="${esc(id)}" ${f.position === id ? 'selected' : ''}>${esc(title)}</option>`).join('')}
          </select>
        </label>
        <label>Période
          <select data-filter="period"><option value="">Toutes les périodes</option>
            ${periods.map(([key, label]) => `<option value="${esc(key)}" ${f.period === key ? 'selected' : ''}>${esc(label)}</option>`).join('')}
          </select>
        </label>
        <button type="button" class="bx-btn bx-btn-ghost" data-action="pdf-selection" ${filtered.length ? '' : 'disabled'}>⬇️ Exporter la sélection (PDF)</button>
      </div>
      <p class="bx-muted">Rapports validés par la Présidence, consultables par tout le bureau.</p>
      <div class="bx-list">
        ${filtered.length ? filtered.map((r) => reportCard(r)).join('') : emptyState('🏛️', 'Aucun rapport validé', 'Les rapports validés par la Présidence apparaîtront ici.')}
      </div>`;
  }

  async function renderSummary() {
    const res = await window.Api.reports.summary(state.summaryYear);
    const s = res.data;
    state.summary = s;
    const k = s.kpis;
    const maxFlow = Math.max(1, ...s.treasury.periods.map((p) => Math.max(p.income, p.expense)));
    const years = [0, 1, 2].map((d) => new Date().getUTCFullYear() - d);

    const rows = s.positions.map((p) => {
      const holders = p.holders.map((h) => esc(h.fullName)).join(', ') || '<span class="bx-muted">Vacant</span>';
      const status = !p.holders.length ? '<span class="bx-muted">—</span>'
        : p.late.length ? `<span class="bx-pill bx-pill-late">${p.late.length} en retard</span>`
          : p.reportFrequency === 'NONE' ? '<span class="bx-pill">Libre</span>'
            : '<span class="bx-pill bx-pill-ok">À jour</span>';
      return `
        <tr>
          <td><strong>${esc(p.title)}</strong><br><span class="bx-muted">${esc(templates()[p.templateKey]?.label || '')}</span></td>
          <td>${holders}${p.teamCount ? `<br><span class="bx-muted">+ ${p.teamCount} en équipe</span>` : ''}</td>
          <td>${esc(RV.FREQUENCY_LABELS[p.reportFrequency] || '')}</td>
          <td>${p.lastReport ? `${esc(p.lastReport.title)}<br><span class="bx-muted">${esc(RV.frDate(p.lastReport.submittedAt))}</span>` : '<span class="bx-muted">Aucun</span>'}</td>
          <td>${p.counts.submitted ? `<span class="bx-pill bx-pill-info">${p.counts.submitted} à examiner</span> ` : ''}${status}</td>
          <td>${p.next ? `${esc(p.next.label)}<br><span class="bx-muted">avant le ${esc(RV.frDate(p.next.dueDate))}</span>` : '—'}</td>
        </tr>`;
    }).join('');

    return `
      <div class="bx-toolbar">
        <label>Année
          <select data-filter="year">${years.map((y) => `<option value="${y}" ${y === s.year ? 'selected' : ''}>${y}</option>`).join('')}</select>
        </label>
        <button type="button" class="bx-btn bx-btn-ghost" data-action="pdf-summary">⬇️ Exporter la synthèse (PDF)</button>
      </div>
      <div class="bx-kpis">
        <div class="bx-kpi bx-kpi-info"><span>À examiner</span><strong>${k.toReview}</strong></div>
        <div class="bx-kpi bx-kpi-warn"><span>En correction</span><strong>${k.needsChanges}</strong></div>
        <div class="bx-kpi bx-kpi-ok"><span>Validés</span><strong>${k.validated}</strong></div>
        <div class="bx-kpi ${k.latePositions ? 'bx-kpi-late' : ''}"><span>Postes en retard</span><strong>${k.latePositions}<small> / ${k.occupiedPositions}</small></strong></div>
      </div>

      <section class="bx-panel">
        <header class="bx-panel-head"><div class="bx-panel-title"><span class="bx-panel-icon">🏛️</span><div><h2>Situation des postes</h2><p>Rapports reçus, en attente et échéances de chaque poste.</p></div></div></header>
        <div class="bx-table-wrap">
          <table class="bx-table">
            <thead><tr><th>Poste</th><th>Titulaire</th><th>Rythme</th><th>Dernier rapport</th><th>État</th><th>Prochaine échéance</th></tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </section>

      <section class="bx-panel">
        <header class="bx-panel-head"><div class="bx-panel-title"><span class="bx-panel-icon">💰</span><div><h2>Trésorerie ${s.year}</h2><p>Cumul des rapports financiers validés.</p></div></div></header>
        <div class="rv-kpis rv-scope">
          <div class="rv-in"><span>Recettes</span><strong>+ ${esc(RV.amount(s.treasury.income))}</strong></div>
          <div class="rv-out"><span>Dépenses</span><strong>− ${esc(RV.amount(s.treasury.expense))}</strong></div>
          <div class="rv-balance"><span>Résultat</span><strong>${esc(RV.amount(s.treasury.balance))}</strong></div>
          <div><span>Rapports</span><strong>${s.treasury.periods.reduce((n, p) => n + p.reports, 0)}</strong></div>
        </div>
        ${s.treasury.periods.length ? `
          <div class="bx-flows">
            ${s.treasury.periods.map((p) => `
              <div class="bx-flow">
                <span class="bx-flow-label">${esc(p.label)}</span>
                <div class="bx-flow-bars">
                  <div class="bx-bar bx-bar-in" style="width:${(p.income / maxFlow) * 100}%"><span>${esc(RV.amount(p.income))}</span></div>
                  <div class="bx-bar bx-bar-out" style="width:${(p.expense / maxFlow) * 100}%"><span>${esc(RV.amount(p.expense))}</span></div>
                </div>
              </div>`).join('')}
            <p class="bx-legend"><span class="bx-dot bx-dot-in"></span> Recettes <span class="bx-dot bx-dot-out"></span> Dépenses</p>
          </div>` : '<p class="bx-muted">Aucun rapport financier validé pour cette année.</p>'}
      </section>`;
  }

  async function renderTab() {
    const root = $('#bxContent');
    root.innerHTML = '<div class="bx-loading"><span class="bx-spinner"></span> Chargement…</div>';
    try {
      let html = '';
      if (state.tab === 'mine') html = await renderMine();
      if (state.tab === 'review') html = await renderSimpleList('review', ['📥', 'Rien à examiner', 'Les rapports soumis par le bureau arriveront ici.']);
      if (state.tab === 'team') html = await renderSimpleList('team', ['👥', 'Aucun rapport d\'équipe', 'Les rapports soumis par ton équipe ou ton adjoint apparaîtront ici.']);
      if (state.tab === 'bureau') html = await renderBureau();
      if (state.tab === 'summary') html = await renderSummary();
      root.innerHTML = html;
    } catch (error) {
      root.innerHTML = `<div class="bx-error">⚠️ ${esc(error.message || 'Chargement impossible')}</div>`;
    }
  }

  // ===== Lecture d'un rapport =====

  async function openViewer(id) {
    let report;
    try {
      report = (await window.Api.reports.get(id)).data;
    } catch (error) {
      toast(error.status === 404 ? 'Rapport introuvable ou non accessible' : error.message, 'error');
      return;
    }
    const p = report.permissions;
    const review = p.review ? `
      <div class="bx-review">
        <h4>Examen de la Présidence</h4>
        <label for="bxReviewComment">Commentaire <span class="bx-muted">(obligatoire pour demander des corrections)</span></label>
        <textarea id="bxReviewComment" rows="3" maxlength="3000" placeholder="Remarques, corrections attendues, félicitations…"></textarea>
        <div class="bx-review-actions">
          <button type="button" class="bx-btn bx-btn-warn" data-review="NEEDS_CHANGES">↩️ Demander des corrections</button>
          <button type="button" class="bx-btn bx-btn-success" data-review="VALIDATED">✅ Valider le rapport</button>
        </div>
      </div>` : '';

    const modal = openModal(`
      ${RV.render(report, templates())}
      ${review}
      <footer class="bx-modal-foot">
        ${report.status !== 'DRAFT' ? '<button type="button" class="bx-btn bx-btn-ghost" data-v="pdf">⬇️ Exporter en PDF</button>' : ''}
        ${p.edit ? '<button type="button" class="bx-btn bx-btn-ghost" data-v="edit">Modifier</button>' : ''}
        ${p.submit ? '<button type="button" class="bx-btn bx-btn-primary" data-v="submit">Soumettre à la Présidence</button>' : ''}
        <button type="button" class="bx-btn bx-btn-ghost" data-close>Fermer</button>
      </footer>`, { wide: true, label: report.title });

    modal.addEventListener('click', async (e) => {
      const v = e.target.closest('[data-v]')?.dataset.v;
      if (v === 'pdf') RV.print([report], templates(), { title: report.title, subtitle: `${report.position.title}${report.periodLabel ? ` · ${report.periodLabel}` : ''}` });
      if (v === 'edit') openEditor({ report });
      if (v === 'submit') submitReport(report.id);

      const decision = e.target.closest('[data-review]')?.dataset.review;
      if (decision) {
        const comment = $('#bxReviewComment', modal).value.trim();
        if (decision === 'NEEDS_CHANGES' && !comment) {
          toast('Explique les corrections attendues dans le commentaire', 'error');
          $('#bxReviewComment', modal).focus();
          return;
        }
        const btn = e.target.closest('[data-review]');
        busy(btn, true);
        try {
          const res = await window.Api.reports.review(report.id, decision, comment);
          toast(res.message);
          closeModal();
          await refresh();
        } catch (error) {
          busy(btn, false);
          toast(error.message, 'error');
        }
      }
    });
  }

  // ===== Rédaction =====

  function fieldHtml(section, value) {
    const id = `bxf-${section.key}`;
    const req = section.required ? ' <span class="bx-req" title="Obligatoire">*</span>' : '';
    const ph = section.placeholder ? ` placeholder="${esc(section.placeholder)}"` : '';
    if (section.type === 'table') return tableHtml(section, Array.isArray(value) ? value : []);
    let input;
    if (section.type === 'textarea') input = `<textarea id="${id}" data-field="${section.key}" rows="4" maxlength="8000"${ph}>${esc(value || '')}</textarea>`;
    else if (section.type === 'select') {
      input = `<select id="${id}" data-field="${section.key}"><option value="">— Choisir —</option>${section.options.map((o) => `<option ${o === value ? 'selected' : ''}>${esc(o)}</option>`).join('')}</select>`;
    } else if (section.type === 'number') input = `<input id="${id}" type="number" inputmode="numeric" data-field="${section.key}" value="${value ?? ''}" step="any">`;
    else if (section.type === 'date') input = `<input id="${id}" type="date" data-field="${section.key}" value="${esc(value || '')}">`;
    else input = `<input id="${id}" type="text" data-field="${section.key}" maxlength="300" value="${esc(value || '')}"${ph}>`;
    return `<div class="bx-field"><label for="${id}">${esc(section.label)}${req}</label>${input}</div>`;
  }

  function rowHtml(section, row = {}) {
    return `<tr>${section.columns.map((c) => {
      const type = { date: 'date', amount: 'number', number: 'number' }[c.type] || 'text';
      const extra = c.type === 'amount' ? ' min="0" step="1" inputmode="numeric"' : (c.type === 'number' ? ' step="any"' : ' maxlength="500"');
      return `<td data-label="${esc(c.label)}"><input type="${type}" data-col="${c.key}"${extra} value="${esc(row[c.key] ?? '')}" aria-label="${esc(c.label)}"></td>`;
    }).join('')}<td class="bx-row-del"><button type="button" class="bx-icon-btn" data-row-del aria-label="Supprimer la ligne">✕</button></td></tr>`;
  }

  function tableHtml(section, rows) {
    return `
      <div class="bx-field bx-field-table" data-table="${section.key}">
        <div class="bx-field-table-head">
          <label>${esc(section.label)}</label>
          <span class="bx-table-total" data-total="${section.key}"></span>
        </div>
        <div class="bx-table-wrap">
          <table class="bx-edit-table">
            <thead><tr>${section.columns.map((c) => `<th>${esc(c.label)}</th>`).join('')}<th aria-label="Actions"></th></tr></thead>
            <tbody>${(rows.length ? rows : [{}]).map((r) => rowHtml(section, r)).join('')}</tbody>
          </table>
        </div>
        <button type="button" class="bx-btn bx-btn-ghost bx-btn-sm" data-row-add="${section.key}">+ Ajouter une ligne</button>
      </div>`;
  }

  function collect(form, template) {
    const content = {};
    template.sections.forEach((s) => {
      if (s.type === 'table') {
        content[s.key] = [...form.querySelectorAll(`[data-table="${s.key}"] tbody tr`)].map((tr) =>
          Object.fromEntries([...tr.querySelectorAll('[data-col]')].map((input) => [input.dataset.col, input.value])));
      } else {
        const el = form.querySelector(`[data-field="${s.key}"]`);
        content[s.key] = el ? el.value : '';
      }
    });
    return content;
  }

  function updateTotals(form, template) {
    template.sections.filter((s) => s.type === 'table').forEach((s) => {
      const amountCols = s.columns.filter((c) => c.type === 'amount').map((c) => c.key);
      const el = form.querySelector(`[data-total="${s.key}"]`);
      if (!el || !amountCols.length) return;
      const total = [...form.querySelectorAll(`[data-table="${s.key}"] [data-col]`)]
        .filter((i) => amountCols.includes(i.dataset.col))
        .reduce((sum, i) => sum + (Math.max(0, Math.round(Number(i.value))) || 0), 0);
      el.textContent = `Total : ${RV.amount(total)}`;
    });
    const balance = form.querySelector('[data-balance]');
    if (balance && template.totals) {
      const sum = (key) => [...form.querySelectorAll(`[data-table="${key}"] [data-col="montant"]`)].reduce((s, i) => s + (Math.max(0, Math.round(Number(i.value))) || 0), 0);
      const initial = Number(form.querySelector('[data-field="soldeInitial"]')?.value) || 0;
      balance.textContent = RV.amount(initial + sum(template.totals.income) - sum(template.totals.expense));
    }
  }

  function attachmentsHtml(files) {
    return files.map((f, i) => `
      <li><a href="${esc(window.safeUrl ? window.safeUrl(f.url, '#') : f.url)}" target="_blank" rel="noopener">📎 ${esc(f.name)}</a>
      <button type="button" class="bx-icon-btn" data-file-del="${i}" aria-label="Retirer ${esc(f.name)}">✕</button></li>`).join('');
  }

  function openEditor({ positionId, report }) {
    const assignment = state.ctx.positions.find((p) => p.position.id === (report?.position.id || positionId));
    if (!assignment) {
      toast('Ce poste ne fait pas partie de tes fonctions', 'error');
      return;
    }
    const position = assignment.position;
    const template = templates()[position.templateKey];
    let periods = assignment.periods.slice();
    if (report?.periodKey && !periods.some((p) => p.key === report.periodKey)) {
      periods = [{ key: report.periodKey, label: report.periodLabel }, ...periods];
    }
    // Par défaut : la première période non rendue (retard en priorité), sinon la période en cours
    const firstOpen = assignment.deadlines?.late[0]?.key || assignment.deadlines?.next?.key;
    const selectedPeriod = report?.periodKey || firstOpen || periods[0]?.key || '';
    const files = (report?.attachments || []).slice();
    let currentId = report?.id || null;

    const modal = openModal(`
      <form class="bx-editor" novalidate>
        <header class="bx-editor-head">
          <span class="bx-panel-icon" aria-hidden="true">${esc(template.icon)}</span>
          <div>
            <p class="rv-kicker">${esc(position.title)}</p>
            <h2>${report ? 'Modifier le rapport' : esc(template.label)}</h2>
            <p class="bx-muted">${esc(template.description)}</p>
          </div>
        </header>
        ${report?.status === 'NEEDS_CHANGES' && report.reviewComment ? `<div class="rv-alert"><strong>Corrections demandées :</strong><br>${esc(report.reviewComment).replace(/\n/g, '<br>')}</div>` : ''}

        <div class="bx-grid-2">
          <div class="bx-field">
            <label for="bxTitle">Titre <span class="bx-muted">(facultatif)</span></label>
            <input id="bxTitle" type="text" maxlength="200" value="${esc(report?.title || '')}" placeholder="${esc(template.label)}">
          </div>
          <div class="bx-field">
            <label for="bxPeriod">Période couverte${position.reportFrequency !== 'NONE' ? ' <span class="bx-req">*</span>' : ''}</label>
            <select id="bxPeriod">
              ${position.reportFrequency === 'NONE' ? `<option value="">Sans période</option>` : ''}
              ${periods.map((p) => `<option value="${esc(p.key)}" ${p.key === selectedPeriod ? 'selected' : ''}>${esc(p.label)}</option>`).join('')}
            </select>
          </div>
        </div>

        ${template.totals ? '<div class="bx-balance-live">Solde final estimé : <strong data-balance>0 FCFA</strong></div>' : ''}

        ${template.sections.map((s) => fieldHtml(s, report?.content?.[s.key])).join('')}

        <div class="bx-field">
          <label>Pièces jointes <span class="bx-muted">(PDF, images, Word, Excel · 10 Mo max · 10 fichiers)</span></label>
          <ul class="bx-files" data-files>${attachmentsHtml(files)}</ul>
          <label class="bx-upload">
            <input type="file" data-upload multiple accept=".pdf,.png,.jpg,.jpeg,.webp,.doc,.docx,.xls,.xlsx">
            <span>📎 Ajouter des fichiers</span>
          </label>
        </div>

        <footer class="bx-modal-foot bx-editor-foot">
          <span class="bx-muted bx-save-state" data-save-state></span>
          <button type="button" class="bx-btn bx-btn-ghost" data-close>Annuler</button>
          <button type="button" class="bx-btn bx-btn-ghost" data-save>💾 Enregistrer le brouillon</button>
          <button type="button" class="bx-btn bx-btn-primary" data-send>📨 ${state.ctx.canReview ? 'Enregistrer et valider' : 'Soumettre à la Présidence'}</button>
        </footer>
      </form>`, { wide: true, label: template.label });

    const form = $('form', modal);
    updateTotals(form, template);

    form.addEventListener('input', () => updateTotals(form, template));

    form.addEventListener('click', (e) => {
      const add = e.target.closest('[data-row-add]');
      if (add) {
        const section = template.sections.find((s) => s.key === add.dataset.rowAdd);
        form.querySelector(`[data-table="${section.key}"] tbody`).insertAdjacentHTML('beforeend', rowHtml(section));
        form.querySelector(`[data-table="${section.key}"] tbody tr:last-child input`)?.focus();
      }
      const del = e.target.closest('[data-row-del]');
      if (del) {
        const tbody = del.closest('tbody');
        if (tbody.children.length > 1) del.closest('tr').remove();
        else del.closest('tr').querySelectorAll('input').forEach((i) => { i.value = ''; });
        updateTotals(form, template);
      }
      const fileDel = e.target.closest('[data-file-del]');
      if (fileDel) {
        files.splice(Number(fileDel.dataset.fileDel), 1);
        form.querySelector('[data-files]').innerHTML = attachmentsHtml(files);
      }
    });

    form.querySelector('[data-upload]').addEventListener('change', async (e) => {
      const chosen = [...e.target.files];
      e.target.value = '';
      for (const file of chosen) {
        if (files.length >= 10) {
          toast('10 pièces jointes au maximum', 'error');
          break;
        }
        if (file.size > 10 * 1024 * 1024) {
          toast(`${file.name} dépasse 10 Mo`, 'error');
          continue;
        }
        const status = form.querySelector('[data-save-state]');
        status.textContent = `Envoi de ${file.name}…`;
        try {
          const res = await window.Api.reports.uploadAttachment(file);
          files.push(res.data);
          form.querySelector('[data-files]').innerHTML = attachmentsHtml(files);
          status.textContent = '';
        } catch (error) {
          status.textContent = '';
          toast(`${file.name} : ${error.message}`, 'error');
        }
      }
    });

    async function save() {
      const payload = {
        title: $('#bxTitle', form).value.trim(),
        periodKey: $('#bxPeriod', form).value || null,
        content: collect(form, template),
        attachments: files,
      };
      const res = currentId
        ? await window.Api.reports.update(currentId, payload)
        : await window.Api.reports.create({ positionId: position.id, ...payload });
      currentId = res.data.id;
      form.querySelector('[data-save-state]').textContent = `Enregistré à ${new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}`;
      state.cache = {};
      return res.data;
    }

    form.querySelector('[data-save]').addEventListener('click', async (e) => {
      busy(e.currentTarget, true, 'Enregistrement…');
      try {
        await save();
        toast('Brouillon enregistré');
      } catch (error) {
        toast(error.message, 'error');
      } finally {
        busy(e.currentTarget, false);
      }
    });

    form.querySelector('[data-send]').addEventListener('click', async (e) => {
      const message = state.ctx.canReview
        ? 'Enregistrer ce rapport ? En tant que Présidence, il sera directement validé.'
        : 'Soumettre ce rapport à la Présidence ? Tu ne pourras plus le modifier, sauf si des corrections te sont demandées.';
      if (!window.confirm(message)) return;
      const btn = e.currentTarget;
      busy(btn, true, 'Envoi…');
      try {
        const saved = await save();
        const res = await window.Api.reports.submit(saved.id);
        toast(res.message);
        closeModal();
        await refresh();
      } catch (error) {
        busy(btn, false);
        toast(error.message, 'error');
      }
    });
  }

  async function submitReport(id) {
    const message = state.ctx.canReview
      ? 'Enregistrer ce rapport ? En tant que Présidence, il sera directement validé.'
      : 'Soumettre ce rapport à la Présidence ? Tu ne pourras plus le modifier, sauf si des corrections te sont demandées.';
    if (!window.confirm(message)) return;
    try {
      const res = await window.Api.reports.submit(id);
      toast(res.message);
      closeModal();
      await refresh();
    } catch (error) {
      toast(error.message, 'error');
    }
  }

  async function exportReports(ids, opts) {
    if (!ids.length) return;
    if (ids.length > 40) {
      toast('Affine les filtres : 40 rapports au maximum par export', 'error');
      return;
    }
    try {
      const reports = await Promise.all(ids.map((id) => window.Api.reports.get(id).then((r) => r.data)));
      RV.print(reports, templates(), opts);
    } catch (error) {
      toast(error.message, 'error');
    }
  }

  function exportSummary() {
    const s = state.summary;
    if (!s) return;
    const rows = s.positions.map((p) => `<tr>
      <td>${esc(p.title)}</td><td>${esc(p.holders.map((h) => h.fullName).join(', ') || 'Vacant')}</td>
      <td>${esc(RV.FREQUENCY_LABELS[p.reportFrequency] || '')}</td>
      <td>${p.counts.validated}</td><td>${p.counts.submitted}</td>
      <td>${p.late.length ? esc(p.late.map((l) => l.label).join(', ')) : '—'}</td></tr>`).join('');
    const flows = s.treasury.periods.map((p) => `<tr><td>${esc(p.label)}</td><td class="rv-num">${esc(RV.amount(p.income))}</td><td class="rv-num">${esc(RV.amount(p.expense))}</td><td class="rv-num">${esc(RV.amount(p.income - p.expense))}</td></tr>`).join('');
    const intro = `
      <h3>Situation des postes</h3>
      <table class="sum-table"><thead><tr><th>Poste</th><th>Titulaire</th><th>Rythme</th><th>Validés</th><th>À examiner</th><th>Retards</th></tr></thead><tbody>${rows}</tbody></table>
      <h3>Trésorerie ${s.year}</h3>
      <table class="sum-table"><thead><tr><th>Période</th><th>Recettes</th><th>Dépenses</th><th>Résultat</th></tr></thead>
      <tbody>${flows || '<tr><td colspan="4">Aucun rapport financier validé</td></tr>'}
      <tr><td><strong>Total</strong></td><td class="rv-num"><strong>${esc(RV.amount(s.treasury.income))}</strong></td><td class="rv-num"><strong>${esc(RV.amount(s.treasury.expense))}</strong></td><td class="rv-num"><strong>${esc(RV.amount(s.treasury.balance))}</strong></td></tr></tbody></table>`;
    RV.print([], templates(), { title: `Synthèse des rapports du bureau — ${s.year}`, intro });
  }

  // ===== Événements =====

  function bind() {
    $('#bxTabs').addEventListener('click', (e) => {
      const tab = e.target.closest('[data-tab]')?.dataset.tab;
      if (!tab || tab === state.tab) return;
      state.tab = tab;
      renderTabs();
      renderTab();
    });

    $('#bxContent').addEventListener('change', (e) => {
      const filter = e.target.dataset.filter;
      if (!filter) return;
      if (filter === 'year') {
        state.summaryYear = Number(e.target.value);
      } else {
        state.bureauFilters = { ...(state.bureauFilters || { position: '', period: '' }), [filter]: e.target.value };
      }
      renderTab();
    });

    $('#bxContent').addEventListener('click', async (e) => {
      const btn = e.target.closest('[data-action]');
      if (!btn) return;
      const { action, id } = btn.dataset;
      if (action === 'new') openEditor({ positionId: btn.dataset.position });
      if (action === 'view') openViewer(id);
      if (action === 'edit') {
        try {
          openEditor({ report: (await window.Api.reports.get(id)).data });
        } catch (error) {
          toast(error.message, 'error');
        }
      }
      if (action === 'submit') submitReport(id);
      if (action === 'pdf') exportReports([id], {});
      if (action === 'pdf-summary') exportSummary();
      if (action === 'pdf-selection') {
        const f = state.bureauFilters || {};
        const ids = (state.cache.bureau || [])
          .filter((r) => (!f.position || r.position.id === f.position) && (!f.period || r.periodKey === f.period))
          .map((r) => r.id);
        exportReports(ids, { title: 'Rapports du bureau', subtitle: `${ids.length} rapport(s) validé(s) · édité le ${RV.frDate(new Date())}` });
      }
      if (action === 'delete') {
        if (!window.confirm('Supprimer définitivement ce brouillon ?')) return;
        try {
          await window.Api.reports.remove(id);
          toast('Brouillon supprimé');
          await refresh();
        } catch (error) {
          toast(error.message, 'error');
        }
      }
    });
  }

  async function init() {
    if (!window.Api?.getToken()) {
      window.location.href = 'login.html';
      return;
    }
    try {
      state.user = (await window.Api.auth.me()).data;
      await loadContext();
    } catch (error) {
      if (error.status === 401) {
        window.location.href = 'login.html';
        return;
      }
      $('#bxContent').innerHTML = `<div class="bx-error">⚠️ ${esc(error.message || 'Chargement impossible')}</div>`;
      return;
    }

    if (!state.ctx.isBureauMember) {
      $('#bxGreeting').textContent = 'Espace réservé au bureau';
      $('#bxTabs').remove();
      $('#bxContent').innerHTML = emptyState('🔒', 'Cet espace est réservé aux membres du bureau',
        'Il s\'ouvre automatiquement lorsque la Présidence te confie un poste dans l\'organisation du club.');
      return;
    }

    bind();
    renderHero();
    renderTabs();
    await renderTab();

    const deepLink = new URLSearchParams(window.location.search).get('report');
    if (deepLink) openViewer(deepLink);
  }

  document.addEventListener('DOMContentLoaded', init);
})();

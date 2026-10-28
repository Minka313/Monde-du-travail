/**
 * Affichage commun des rapports du bureau (site public et administration) :
 * statuts, rendu en lecture seule selon le modèle du poste et export PDF
 * (via l'impression du navigateur, « Enregistrer au format PDF »).
 */
(function () {
  'use strict';

  const STATUS = {
    DRAFT: { label: 'Brouillon', icon: '✏️', tone: 'muted' },
    SUBMITTED: { label: 'Soumis', icon: '📨', tone: 'info' },
    NEEDS_CHANGES: { label: 'À corriger', icon: '↩️', tone: 'warning' },
    VALIDATED: { label: 'Validé', icon: '✅', tone: 'success' },
  };

  const EVENT_LABELS = {
    SUBMITTED: 'Soumis à la Présidence',
    NEEDS_CHANGES: 'Corrections demandées',
    ARCHIVED: 'Archivé par la Présidence',
    UNARCHIVED: 'Restauré des archives',
    VALIDATED: 'Validé',
  };

  const FREQUENCY_LABELS = { NONE: 'Sans échéance', MONTHLY: 'Mensuel', QUARTERLY: 'Trimestriel', ANNUAL: 'Annuel' };

  function esc(value) {
    if (value == null) return '';
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function safeHref(value) {
    try {
      const url = new URL(value, window.location.href);
      return ['http:', 'https:'].includes(url.protocol) ? url.href : '#';
    } catch (_) {
      return '#';
    }
  }

  const amount = (n) => `${Number(n || 0).toLocaleString('fr-FR')} FCFA`;
  const frDate = (v) => (v ? new Date(v).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : '');
  const frDateTime = (v) => (v ? new Date(v).toLocaleString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '');
  const dayDate = (v) => (v && /^\d{4}-\d{2}-\d{2}$/.test(v) ? new Date(`${v}T00:00:00Z`).toLocaleDateString('fr-FR', { timeZone: 'UTC' }) : esc(v));
  const multiline = (text) => esc(text).replace(/\n/g, '<br>');

  function statusBadge(status) {
    const s = STATUS[status] || STATUS.DRAFT;
    return `<span class="rv-status rv-status-${s.tone}">${s.icon} ${s.label}</span>`;
  }

  function cell(column, value) {
    if (value === null || value === undefined || value === '') return '<span class="rv-empty">—</span>';
    if (column.type === 'amount') return esc(amount(value));
    if (column.type === 'date') return dayDate(value);
    if (column.key === 'lien') return `<a href="${esc(safeHref(value))}" target="_blank" rel="noopener">${esc(value)}</a>`;
    return esc(value);
  }

  function renderSection(section, value) {
    if (section.type === 'table') {
      const rows = Array.isArray(value) ? value : [];
      if (!rows.length) return '';
      const amountCols = section.columns.filter((c) => c.type === 'amount');
      const totalRow = amountCols.length
        ? `<tr class="rv-total">${section.columns.map((c, i) => {
          if (c.type === 'amount') return `<td>${esc(amount(rows.reduce((s, r) => s + (Number(r[c.key]) || 0), 0)))}</td>`;
          return `<td>${i === 0 ? 'Total' : ''}</td>`;
        }).join('')}</tr>`
        : '';
      return `
        <div class="rv-section">
          <h4>${esc(section.label)}</h4>
          <div class="rv-table-wrap">
            <table class="rv-table">
              <thead><tr>${section.columns.map((c) => `<th${c.type === 'amount' ? ' class="rv-num"' : ''}>${esc(c.label)}</th>`).join('')}</tr></thead>
              <tbody>
                ${rows.map((row) => `<tr>${section.columns.map((c) => `<td${c.type === 'amount' ? ' class="rv-num"' : ''}>${cell(c, row[c.key])}</td>`).join('')}</tr>`).join('')}
                ${totalRow}
              </tbody>
            </table>
          </div>
        </div>`;
    }
    if (value === null || value === undefined || value === '') return '';
    let display = multiline(value);
    if (section.type === 'date') display = dayDate(value);
    if (section.type === 'number' && /FCFA/.test(section.label)) display = esc(amount(value));
    return `
      <div class="rv-section">
        <h4>${esc(section.label)}</h4>
        <div class="rv-text">${display}</div>
      </div>`;
  }

  function treasurySummary(report, template) {
    if (!template.totals) return '';
    const initial = Number(report.content?.soldeInitial) || 0;
    const final = initial + report.incomeTotal - report.expenseTotal;
    return `
      <div class="rv-kpis">
        <div><span>Solde initial</span><strong>${esc(amount(initial))}</strong></div>
        <div class="rv-in"><span>Recettes</span><strong>+ ${esc(amount(report.incomeTotal))}</strong></div>
        <div class="rv-out"><span>Dépenses</span><strong>− ${esc(amount(report.expenseTotal))}</strong></div>
        <div class="rv-balance"><span>Solde final</span><strong>${esc(amount(final))}</strong></div>
      </div>`;
  }

  function attachmentsList(report) {
    const files = report.attachments || [];
    if (!files.length) return '';
    return `
      <div class="rv-section">
        <h4>Pièces jointes</h4>
        <ul class="rv-files">
          ${files.map((f) => `<li><a href="${esc(safeHref(f.url))}" target="_blank" rel="noopener">📎 ${esc(f.name)}</a></li>`).join('')}
        </ul>
      </div>`;
  }

  function timeline(report) {
    const events = report.events || [];
    if (!events.length) return '';
    return `
      <div class="rv-section rv-no-print">
        <h4>Historique</h4>
        <ol class="rv-timeline">
          ${events.map((e) => `
            <li class="rv-ev-${esc(e.action)}">
              <strong>${esc(EVENT_LABELS[e.action] || e.action)}</strong>
              <span>${esc(e.actor || '')} · ${esc(frDateTime(e.createdAt))}</span>
              ${e.comment ? `<blockquote>${multiline(e.comment)}</blockquote>` : ''}
            </li>`).join('')}
        </ol>
      </div>`;
  }

  /** Rendu complet d'un rapport en lecture seule. */
  function render(report, templates) {
    const template = templates[report.templateKey] || { sections: [] };
    const body = template.sections.map((s) => renderSection(s, report.content?.[s.key])).join('');
    return `
      <article class="rv-report">
        <header class="rv-head">
          <div>
            <p class="rv-kicker">${esc(template.icon || '📋')} ${esc(report.position.title)}${report.periodLabel ? ` · ${esc(report.periodLabel)}` : ''}</p>
            <h3>${esc(report.title)}</h3>
            <p class="rv-meta">Rédigé par <strong>${esc(report.author.fullName)}</strong>${report.submittedAt ? ` · soumis le ${esc(frDate(report.submittedAt))}` : ''}${report.reviewedBy && report.status === 'VALIDATED' ? ` · validé par ${esc(report.reviewedBy)}` : ''}</p>
          </div>
          ${statusBadge(report.status)}
        </header>
        ${report.status === 'NEEDS_CHANGES' && report.reviewComment ? `<div class="rv-alert"><strong>Corrections demandées :</strong><br>${multiline(report.reviewComment)}</div>` : ''}
        ${treasurySummary(report, template)}
        ${body || '<p class="rv-empty">Ce rapport ne contient encore aucune information.</p>'}
        ${attachmentsList(report)}
        ${timeline(report)}
      </article>`;
  }

  const PRINT_CSS = `
    * { box-sizing: border-box; }
    body { font-family: Inter, 'Segoe UI', system-ui, sans-serif; color: #0f172a; margin: 0; padding: 32px 40px; font-size: 13px; line-height: 1.55; }
    .doc-head { display: flex; align-items: center; gap: 14px; border-bottom: 3px solid #f5a623; padding-bottom: 14px; margin-bottom: 22px; }
    .doc-head img { width: 48px; height: 48px; }
    .doc-head .wow-seal { flex: 0 0 auto; }
    .doc-head h1 { font-family: 'Playfair Display', Georgia, serif; font-size: 20px; margin: 0; color: #0f2b46; }
    .doc-head p { margin: 2px 0 0; color: #64748b; font-size: 12px; }
    .rv-report { page-break-after: always; }
    .rv-report:last-child { page-break-after: auto; }
    .rv-head { display: flex; justify-content: space-between; gap: 16px; align-items: flex-start; margin-bottom: 14px; }
    .rv-head h3 { margin: 2px 0 4px; font-size: 18px; color: #0f2b46; }
    .rv-kicker { margin: 0; font-size: 11px; text-transform: uppercase; letter-spacing: .06em; color: #b7791f; font-weight: 700; }
    .rv-meta { margin: 0; color: #475569; font-size: 12px; }
    .rv-status { border: 1px solid #cbd5e1; border-radius: 999px; padding: 3px 10px; font-size: 11px; font-weight: 700; white-space: nowrap; }
    .rv-section { margin: 14px 0; break-inside: avoid; }
    .rv-section h4 { margin: 0 0 6px; font-size: 13px; color: #0f2b46; border-left: 3px solid #f5a623; padding-left: 8px; }
    .rv-text { white-space: normal; }
    .rv-table { width: 100%; border-collapse: collapse; font-size: 12px; }
    .rv-table th, .rv-table td { border: 1px solid #e2e8f0; padding: 5px 7px; text-align: left; vertical-align: top; }
    .rv-table th { background: #f1f5f9; }
    .rv-num { text-align: right !important; white-space: nowrap; }
    .rv-total td { font-weight: 700; background: #fffbeb; }
    .rv-kpis { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin: 12px 0; }
    .rv-kpis div { border: 1px solid #e2e8f0; border-radius: 8px; padding: 8px 10px; }
    .rv-kpis span { display: block; font-size: 10px; color: #64748b; text-transform: uppercase; }
    .rv-kpis strong { font-size: 14px; }
    .rv-alert { border: 1px solid #fde68a; background: #fffbeb; padding: 8px 12px; border-radius: 8px; }
    .rv-files { margin: 0; padding-left: 18px; }
    .rv-files a { color: #0f2b46; }
    .rv-empty { color: #94a3b8; }
    .rv-no-print { display: none; }
    .sum-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 12px; }
    .sum-table th, .sum-table td { border: 1px solid #e2e8f0; padding: 5px 7px; text-align: left; }
    .sum-table th { background: #f1f5f9; }
    .doc-foot { margin-top: 28px; color: #94a3b8; font-size: 10px; text-align: center; }
    @page { margin: 14mm; }
  `;

  /**
   * Ouvre une version imprimable (PDF) d'un ou plusieurs rapports.
   * @param {Array} reports rapports complets
   * @param {Object} templates modèles
   * @param {Object} [opts] { title, subtitle, intro } — intro : HTML déjà échappé
   */
  function print(reports, templates, opts = {}) {
    const win = window.open('', '_blank');
    if (!win) {
      window.alert('Autorisez l\'ouverture de fenêtres pour exporter le PDF.');
      return;
    }
    const logo = new URL('/logo.png', window.location.origin).href;
    const sealMark = window.WowBrand ? window.WowBrand.seal(52) : '';
    win.document.write(`<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8">
      <title>${esc(opts.title || reports[0]?.title || 'Rapport')}</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@400;600;700;800&family=Playfair+Display:wght@700&display=swap">
      <style>${PRINT_CSS}</style></head><body>
      <div class="doc-head">${sealMark}<img src="${esc(logo)}" alt="">
        <div><h1>${esc(opts.title || 'Le Monde du Travail — Rapport du bureau')}</h1>
        <p>${esc(opts.subtitle || `Édité le ${frDate(new Date())}`)}</p></div></div>
      ${opts.intro || ''}
      ${reports.map((r) => render(r, templates)).join('')}
      ${window.WowBrand ? window.WowBrand.signature({ kind: 'RAP', id: reports.map((r) => r.id).join(',') || opts.title || 'synthese' }) : ''}
      <p class="doc-foot">WOW · World Of Work — Le Monde du Travail · document généré depuis l'espace bureau</p>
      </body></html>`);
    win.document.close();
    win.addEventListener('load', () => setTimeout(() => win.print(), 150));
  }

  window.ReportView = {
    STATUS, FREQUENCY_LABELS, esc, amount, frDate, frDateTime, statusBadge, render, print,
  };
})();

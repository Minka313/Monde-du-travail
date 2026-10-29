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

  // ===== Document PDF : mise en page d'un rapport institutionnel aux couleurs du club =====

  const PRINT_CSS = `
    :root { --navy: #0f2b46; --navy-2: #1a3f5f; --gold: #f5a623; --gold-ink: #9a6512; --ink: #0f172a; --ink-2: #334155;
      --muted: #64748b; --line: #e2e8f0; --paper: #fffdf6; --soft: #f8fafc; --ok: #15803d; --warn: #b45309; --bad: #b91c1c; }
    * { box-sizing: border-box; }
    html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    body { margin: 0; background: #e9edf2; color: var(--ink); font: 400 10.5pt/1.6 Inter, 'Segoe UI', system-ui, sans-serif; }
    .sheet { width: 210mm; min-height: 297mm; margin: 72px auto 32px; background: #fff; padding: 0 0 18mm; box-shadow: 0 18px 50px rgba(15, 43, 70, .18); }
    .doc-report { page-break-after: always; break-after: page; }
    .doc-report:last-child { page-break-after: auto; break-after: auto; }

    /* Barre d'outils (écran seulement) */
    .toolbar { position: fixed; inset: 0 0 auto; z-index: 10; display: flex; align-items: center; justify-content: center; gap: 14px; flex-wrap: wrap;
      padding: 12px 16px; background: var(--navy); color: #e2e8f0; font-size: 13px; box-shadow: 0 4px 18px rgba(0,0,0,.2); }
    .toolbar button { font: 700 14px Inter, sans-serif; border: 0; border-radius: 999px; padding: 10px 20px; background: var(--gold); color: var(--navy); cursor: pointer; }
    .toolbar small { color: #b6c3d1; }

    /* En-tête officiel */
    .masthead { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 14mm 16mm 9mm;
      background: linear-gradient(135deg, var(--navy) 0%, var(--navy-2) 100%); color: #fff; position: relative; }
    .masthead::after { content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 3px; background: linear-gradient(90deg, var(--gold), #fcd58a 60%, rgba(245,166,35,0)); }
    .brand { display: flex; align-items: center; gap: 12px; }
    .brand img { width: 46px; height: 46px; border-radius: 10px; background: #fff; padding: 3px; }
    .brand b { display: block; font: 700 15pt/1.1 'Playfair Display', Georgia, serif; letter-spacing: .01em; }
    .brand span { display: block; font-size: 8pt; letter-spacing: .22em; text-transform: uppercase; color: #f8e7bd; margin-top: 3px; }
    .doc-type { text-align: right; }
    .doc-type b { display: block; font-size: 8pt; letter-spacing: .24em; text-transform: uppercase; color: var(--gold); }
    .doc-type span { display: block; font-size: 8.5pt; color: #cbd5e1; margin-top: 4px; }

    .page-pad { padding: 0 16mm; }

    /* Bloc titre */
    .title-block { padding: 11mm 0 6mm; border-bottom: 1px solid var(--line); }
    .kicker { margin: 0 0 6px; font-size: 8pt; font-weight: 800; letter-spacing: .2em; text-transform: uppercase; color: var(--gold-ink); }
    .title-row { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; }
    .title-block h1 { margin: 0; font: 700 23pt/1.15 'Playfair Display', Georgia, serif; color: var(--navy); }
    .status::before { content: ''; display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: currentColor; margin-right: 7px; vertical-align: 1px; }
    .status { flex: none; margin-top: 6px; padding: 5px 12px; border-radius: 999px; font-size: 8.5pt; font-weight: 800; letter-spacing: .04em; border: 1px solid; white-space: nowrap; }
    .status-success { color: var(--ok); border-color: #86efac; background: #f0fdf4; }
    .status-info { color: #1d4ed8; border-color: #bfdbfe; background: #eff6ff; }
    .status-warning { color: var(--warn); border-color: #fde68a; background: #fffbeb; }
    .status-muted { color: var(--muted); border-color: var(--line); background: var(--soft); }

    /* Fiche d'identification */
    .id-card { display: grid; grid-template-columns: repeat(3, 1fr); margin: 6mm 0 2mm; border: 1px solid var(--line); border-radius: 10px; overflow: hidden; }
    .id-card div { padding: 9px 12px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
    .id-card div:nth-child(3n) { border-right: 0; }
    .id-card div:nth-last-child(-n+3) { border-bottom: 0; }
    .id-card dt { font-size: 7pt; font-weight: 700; letter-spacing: .16em; text-transform: uppercase; color: var(--muted); }
    .id-card dd { margin: 3px 0 0; font-weight: 600; color: var(--ink); font-size: 9.5pt; }

    .facts { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; margin: 5mm 0 0; border: 1px solid var(--line); border-radius: 10px; background: var(--paper); }
    .facts div { padding: 8px 12px; border-bottom: 1px solid #f1e6c8; }
    .facts div:nth-child(odd) { border-right: 1px solid #f1e6c8; }
    .facts div:nth-last-child(-n+2) { border-bottom: 0; }
    .facts dt { font-size: 7pt; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: var(--gold-ink); }
    .facts dd { margin: 3px 0 0; color: var(--ink); font-size: 9.5pt; }
    .facts-title { margin: 6mm 0 0; font-size: 7.5pt; font-weight: 800; letter-spacing: .2em; text-transform: uppercase; color: var(--navy); }
    .notice { margin: 5mm 0 0; padding: 10px 14px; border-left: 4px solid var(--warn); background: #fffbeb; border-radius: 0 8px 8px 0; color: #78350f; font-size: 9.5pt; }

    /* Indicateurs de trésorerie */
    .kpis { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin: 6mm 0 0; }
    .kpi { padding: 10px 12px; border-radius: 10px; background: var(--soft); border: 1px solid var(--line); }
    .kpi span { display: block; font-size: 7pt; letter-spacing: .14em; text-transform: uppercase; color: var(--muted); font-weight: 700; }
    .kpi strong { display: block; margin-top: 4px; font-size: 12.5pt; font-variant-numeric: tabular-nums; color: var(--navy); }
    .kpi.in strong { color: var(--ok); } .kpi.out strong { color: var(--bad); }
    .kpi.total { background: var(--navy); border-color: var(--navy); } .kpi.total span { color: #f8e7bd; } .kpi.total strong { color: #fff; }

    /* Sections numérotées */
    .sec { margin: 8mm 0 0; break-inside: avoid; page-break-inside: avoid; }
    .sec-head { display: flex; align-items: baseline; gap: 10px; margin-bottom: 7px; padding-bottom: 5px; border-bottom: 1px solid var(--line); }
    .sec-num { font: 700 11pt 'Playfair Display', Georgia, serif; color: var(--gold); min-width: 22px; }
    .sec-head h2 { margin: 0; font-size: 11pt; font-weight: 700; color: var(--navy); letter-spacing: .01em; }
    .sec-body { color: var(--ink-2); }
    .sec-body p { margin: 0; }
    table.data { width: 100%; border-collapse: collapse; font-size: 9pt; }
    table.data th { text-align: left; font-size: 7pt; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); padding: 7px 8px; border-bottom: 2px solid var(--navy); }
    table.data td { padding: 7px 8px; border-bottom: 1px solid var(--line); vertical-align: top; }
    table.data tr:nth-child(even) td { background: #fbfcfd; }
    table.data .num { text-align: right; white-space: nowrap; font-variant-numeric: tabular-nums; }
    table.data tr.total td { font-weight: 800; color: var(--navy); background: var(--paper); border-top: 2px solid var(--gold); border-bottom: 0; }
    table.data a, .files a { color: var(--navy); }
    .files { margin: 0; padding: 0; list-style: none; display: grid; gap: 4px; }
    .files li { padding-left: 14px; position: relative; }
    .files li::before { content: ''; position: absolute; left: 0; top: .62em; width: 7px; height: 7px; border-radius: 2px; background: var(--gold); }
    .empty { color: #94a3b8; }

    /* Circuit de validation */
    .trail { margin: 0; padding: 0; list-style: none; border-left: 2px solid var(--line); }
    .trail li { position: relative; margin: 0 0 8px; padding-left: 14px; font-size: 9pt; }
    .trail li::before { content: ''; position: absolute; left: -6px; top: 5px; width: 10px; height: 10px; border-radius: 50%; background: #fff; border: 2px solid var(--gold); }
    .trail b { color: var(--navy); }
    .trail span { color: var(--muted); }
    .trail blockquote { margin: 4px 0 0; padding: 6px 10px; background: var(--soft); border-radius: 6px; color: var(--ink-2); }

    /* Visas */
    .visas { display: grid; grid-template-columns: 1fr 1fr; gap: 10mm; margin: 10mm 0 0; break-inside: avoid; page-break-inside: avoid; }
    .visa { border-top: 1px solid var(--navy); padding-top: 8px; }
    .visa dt { font-size: 7pt; letter-spacing: .16em; text-transform: uppercase; color: var(--muted); font-weight: 700; }
    .visa dd { margin: 4px 0 0; font-weight: 700; color: var(--navy); }
    .visa small { display: block; color: var(--muted); font-weight: 400; margin-top: 2px; }

    /* Sommaire (export de plusieurs rapports) */
    .toc-title { margin: 11mm 0 4mm; font: 700 20pt 'Playfair Display', Georgia, serif; color: var(--navy); }
    .lead { color: var(--ink-2); margin: 0 0 6mm; }
    .cover-kpis { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin: 0 0 8mm; }
    .sum-table { width: 100%; border-collapse: collapse; font-size: 9pt; margin-bottom: 6mm; }
    .sum-table th { text-align: left; font-size: 7pt; letter-spacing: .12em; text-transform: uppercase; color: var(--muted); padding: 7px 8px; border-bottom: 2px solid var(--navy); }
    .sum-table td { padding: 7px 8px; border-bottom: 1px solid var(--line); }

    /* Pages suivantes : marge haute ; première page : en-tête à fond perdu */
    @page :first { margin-top: 0; }
    @page { size: A4; margin: 12mm 0 14mm;
      @bottom-left { content: 'Le Monde du Travail · WOW — document interne du club'; font: 7.5pt Inter, sans-serif; color: #64748b; padding-left: 16mm; }
      @bottom-right { content: 'Page ' counter(page) ' / ' counter(pages); font: 7.5pt Inter, sans-serif; color: #64748b; padding-right: 16mm; }
    }
    @media print {
      body { background: #fff; }
      .toolbar { display: none !important; }
      .sheet { width: auto; min-height: 0; margin: 0; box-shadow: none; padding-bottom: 0; }
      .doc-report + .doc-report .masthead { margin-top: 0; }
    }
  `;

  const reference = (id) => (window.WowBrand ? window.WowBrand.reference('RAP', id) : `RAP-${String(id).slice(-8).toUpperCase()}`);
  const lastEvent = (report, action) => [...(report.events || [])].reverse().find((e) => e.action === action);

  function docSection(index, label, html) {
    if (!html) return '';
    return `<section class="sec"><div class="sec-head"><span class="sec-num">${String(index).padStart(2, '0')}</span><h2>${esc(label)}</h2></div><div class="sec-body">${html}</div></section>`;
  }

  function docSectionBody(section, value) {
    if (section.type === 'table') {
      const rows = Array.isArray(value) ? value : [];
      if (!rows.length) return '';
      const hasAmount = section.columns.some((c) => c.type === 'amount');
      const total = hasAmount ? `<tr class="total">${section.columns.map((c, i) => (c.type === 'amount'
        ? `<td class="num">${esc(amount(rows.reduce((t, r) => t + (Number(r[c.key]) || 0), 0)))}</td>`
        : `<td>${i === 0 ? 'Total' : ''}</td>`)).join('')}</tr>` : '';
      return `<table class="data"><thead><tr>${section.columns.map((c) => `<th${c.type === 'amount' ? ' class="num"' : ''}>${esc(c.label)}</th>`).join('')}</tr></thead>
        <tbody>${rows.map((row) => `<tr>${section.columns.map((c) => `<td${c.type === 'amount' ? ' class="num"' : ''}>${cell(c, row[c.key])}</td>`).join('')}</tr>`).join('')}${total}</tbody></table>`;
    }
    if (value === null || value === undefined || value === '') return '';
    if (section.type === 'date') return `<p>${dayDate(value)}</p>`;
    if (section.type === 'number' && /FCFA/.test(section.label)) return `<p>${esc(amount(value))}</p>`;
    return `<p>${multiline(value)}</p>`;
  }

  function masthead(label, sub) {
    return `<header class="masthead">
      <div class="brand"><img src="${esc(assetUrl('logo.png'))}" alt=""><div><b>Le Monde du Travail</b><span>WOW · World Of Work</span></div></div>
      <div class="doc-type"><b>${esc(label)}</b><span>${esc(sub)}</span></div>
    </header>`;
  }

  function printReport(report, template) {
    const s = STATUS[report.status] || STATUS.DRAFT;
    const validated = lastEvent(report, 'VALIDATED');
    const submitted = report.submittedAt || lastEvent(report, 'SUBMITTED')?.createdAt;
    const id = [
      ['Poste', report.position?.title],
      ['Période', report.periodLabel || '—'],
      ['Type de document', template.label || '—'],
      ['Rédigé par', report.author?.fullName],
      ['Soumis le', submitted ? frDate(submitted) : '—'],
      ['Référence', reference(report.id)],
    ];
    // Champs courts (date, choix, ligne de texte, nombre) regroupés ; textes longs et tableaux en sections numérotées
    const SHORT = ['date', 'select', 'text', 'number'];
    const filled = (v) => v !== null && v !== undefined && v !== '' && !(Array.isArray(v) && !v.length);
    const short = (template.sections || []).filter((sec) => SHORT.includes(sec.type) && !(template.totals && sec.key === 'soldeInitial') && filled(report.content?.[sec.key]));
    const facts = short.length ? `<p class="facts-title">Informations clés</p><dl class="facts">${short.map((sec) => {
      const v = report.content[sec.key];
      const shown = sec.type === 'date' ? dayDate(v) : (sec.type === 'number' && /FCFA/.test(sec.label) ? esc(amount(v)) : esc(v));
      return `<div><dt>${esc(sec.label.replace(/\s*\(FCFA\)$/, ''))}</dt><dd>${shown}</dd></div>`;
    }).join('')}${short.length % 2 ? '<div></div>' : ''}</dl>` : '';
    let n = 0;
    const sections = (template.sections || []).filter((sec) => !SHORT.includes(sec.type))
      .map((sec) => { const body = docSectionBody(sec, report.content?.[sec.key]); return body ? docSection(++n, sec.label, body) : ''; }).filter(Boolean);
    const files = (report.attachments || []).length
      ? `<ul class="files">${report.attachments.map((f) => `<li><a href="${esc(safeHref(f.url))}">${esc(f.name)}</a></li>`).join('')}</ul>` : '';
    const trail = (report.events || []).length
      ? `<ol class="trail">${report.events.map((e) => `<li><b>${esc(EVENT_LABELS[e.action] || e.action)}</b> <span>· ${esc(e.actor || '')} · ${esc(frDateTime(e.createdAt))}</span>${e.comment ? `<blockquote>${multiline(e.comment)}</blockquote>` : ''}</li>`).join('')}</ol>` : '';
    let kpis = '';
    if (template.totals) {
      const initial = Number(report.content?.soldeInitial) || 0;
      kpis = `<div class="kpis">
        <div class="kpi"><span>Solde initial</span><strong>${esc(amount(initial))}</strong></div>
        <div class="kpi in"><span>Recettes</span><strong>+ ${esc(amount(report.incomeTotal))}</strong></div>
        <div class="kpi out"><span>Dépenses</span><strong>− ${esc(amount(report.expenseTotal))}</strong></div>
        <div class="kpi total"><span>Solde final</span><strong>${esc(amount(initial + report.incomeTotal - report.expenseTotal))}</strong></div>
      </div>`;
    }
    return `<article class="doc-report">
      ${masthead('Rapport d\'activité', `Réf. ${reference(report.id)}`)}
      <div class="page-pad">
        <div class="title-block">
          <p class="kicker">${esc(report.position?.title || '')}${report.periodLabel ? ` · ${esc(report.periodLabel)}` : ''}</p>
          <div class="title-row"><h1>${esc(report.title)}</h1><span class="status status-${s.tone}">${esc(s.label)}</span></div>
          <dl class="id-card">${id.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v || '—')}</dd></div>`).join('')}</dl>
          ${report.status === 'NEEDS_CHANGES' && report.reviewComment ? `<div class="notice"><strong>Corrections demandées :</strong> ${multiline(report.reviewComment)}</div>` : ''}
          ${kpis}
          ${facts}
        </div>
        ${sections.join('') || '<p class="empty" style="margin-top:8mm">Ce rapport ne contient encore aucune information.</p>'}
        ${docSection(++n, 'Pièces jointes', files)}
        ${docSection(++n, 'Circuit de validation', trail)}
        <dl class="visas">
          <div class="visa"><dt>Rédacteur</dt><dd>${esc(report.author?.fullName || '')}<small>${esc(report.position?.title || '')}${submitted ? ` · soumis le ${esc(frDate(submitted))}` : ''}</small></dd></div>
          <div class="visa"><dt>Visa de la Présidence</dt><dd>${report.status === 'VALIDATED' ? `${esc(report.reviewedBy || validated?.actor || 'Présidence')}<small>Validé le ${esc(frDate(validated?.createdAt || report.reviewedAt || report.updatedAt))}</small>` : `<span class="empty">En attente de validation</span>`}</dd></div>
        </dl>
        ${window.WowBrand ? window.WowBrand.signature({ kind: 'RAP', id: report.id, sealSrc: assetUrl('images/wow-seal.svg') }) : ''}
      </div>
    </article>`;
  }

  // Fichiers du site public, depuis le site comme depuis l'administration (et en local sous /frontend/)
  function assetUrl(path) {
    const local = /\/(frontend|admin-frontend)\//.test(window.location.pathname);
    return new URL(`${local ? '/frontend/' : '/'}${path}`, window.location.origin).href;
  }

  // Nom du fichier proposé à l'enregistrement : « Rapport – Poste – Période – Auteur »
  function fileTitle(reports, opts) {
    if (opts.title) return opts.title;
    const r = reports[0];
    if (!r) return 'Rapport du bureau';
    if (reports.length > 1) return `Rapports du bureau – ${reports.length} rapports`;
    return ['Rapport', r.position?.title, r.periodLabel, r.author?.fullName].filter(Boolean).join(' – ');
  }

  /**
   * Ouvre le document PDF d'un ou plusieurs rapports, prêt à être téléchargé.
   * @param {Array} reports rapports complets
   * @param {Object} templates modèles
   * @param {Object} [opts] { title, subtitle, intro } — intro : HTML déjà échappé (synthèse)
   */
  function print(reports, templates, opts = {}) {
    const win = window.open('', '_blank');
    if (!win) {
      window.alert('Autorise l\'ouverture de fenêtres pour télécharger le PDF.');
      return;
    }
    const title = fileTitle(reports, opts);
    const edited = `Édité le ${frDate(new Date())}`;
    const cover = (reports.length !== 1 || opts.intro) ? `<section class="doc-report">
        ${masthead(reports.length ? 'Dossier de rapports' : 'Synthèse du bureau', opts.subtitle || edited)}
        <div class="page-pad">
          <h1 class="toc-title">${esc(opts.title || 'Rapports du bureau')}</h1>
          <p class="lead">${esc(opts.subtitle || edited)}</p>
          ${reports.length > 1 ? `<div class="cover-kpis">
            <div class="kpi total"><span>Rapports</span><strong>${reports.length}</strong></div>
            <div class="kpi"><span>Validés</span><strong>${reports.filter((r) => r.status === 'VALIDATED').length}</strong></div>
            <div class="kpi"><span>En attente</span><strong>${reports.filter((r) => ['SUBMITTED', 'NEEDS_CHANGES'].includes(r.status)).length}</strong></div>
            <div class="kpi"><span>Postes</span><strong>${new Set(reports.map((r) => r.position?.id || r.position?.title)).size}</strong></div>
          </div>` : ''}
          ${opts.intro || ''}
          ${reports.length > 1 ? `<table class="sum-table"><thead><tr><th>N°</th><th>Rapport</th><th>Poste</th><th>Période</th><th>Rédigé par</th><th>Statut</th></tr></thead><tbody>
            ${reports.map((r, i) => `<tr><td>${String(i + 1).padStart(2, '0')}</td><td><strong>${esc(r.title)}</strong></td><td>${esc(r.position?.title || '')}</td><td>${esc(r.periodLabel || '—')}</td><td>${esc(r.author?.fullName || '')}</td><td>${esc((STATUS[r.status] || STATUS.DRAFT).label)}</td></tr>`).join('')}
          </tbody></table>` : ''}
          ${window.WowBrand ? window.WowBrand.signature({ kind: 'RAP', id: opts.title || 'synthese', sealSrc: assetUrl('images/wow-seal.svg') }) : ''}
        </div>
      </section>` : '';
    win.document.write(`<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${esc(title)}</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Inter:wght@400;600;700;800&family=Playfair+Display:wght@700&display=swap">
      <style>${PRINT_CSS}</style></head><body>
      <div class="toolbar"><button type="button" onclick="window.print()">⬇️ Télécharger en PDF</button><small>Dans la fenêtre qui s'ouvre, choisis « Enregistrer au format PDF ».</small></div>
      <main class="sheet">
        ${cover}
        ${reports.map((r) => printReport(r, templates[r.templateKey] || { sections: [] })).join('')}
      </main>
      </body></html>`);
    win.document.close();
    // Impression lancée une fois les polices chargées (sinon le PDF prend une police de secours)
    win.addEventListener('load', () => {
      const ready = win.document.fonts && win.document.fonts.ready ? win.document.fonts.ready : Promise.resolve();
      ready.then(() => setTimeout(() => win.print(), 250));
    });
  }

  window.ReportView = {
    STATUS, FREQUENCY_LABELS, esc, amount, frDate, frDateTime, statusBadge, render, print,
  };
})();

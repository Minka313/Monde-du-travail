/**
 * Admin — « Profils visiteurs » : qui visite le site (situation, niveau, intérêts),
 * d'où (pays, ville), comment (nouveaux / revenants, temps passé, appareil)
 * et ce que chaque profil consulte. Données anonymes (voir visitorProfileService).
 */
(function () {
  'use strict';

  const esc = (value) => window.AdminPages.escapeHtml(value == null ? '' : value);
  const toast = (message, type) => window.AdminPages.showToast(message, type);
  const RIASEC = { R: 'Réaliste', I: 'Investigateur', A: 'Artistique', S: 'Social', E: 'Entreprenant', C: 'Conventionnel' };
  const PERIODS = [[7, '7 jours'], [30, '30 jours'], [90, '90 jours'], [365, '12 mois']];
  const state = { days: 30, data: null };
  const nf = new Intl.NumberFormat('fr-FR');
  const pct = (v) => `${Math.round(v * 100)} %`;
  let regionNames = null;
  try { regionNames = new Intl.DisplayNames(['fr'], { type: 'region' }); } catch (_) { /* navigateur ancien */ }
  const countryName = (code) => (regionNames && code ? regionNames.of(code) : code) || code;

  function duration(seconds) {
    if (!seconds) return '—';
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return m ? `${m} min ${String(s).padStart(2, '0')} s` : `${s} s`;
  }

  function tile(label, value, sub) {
    return `<div class="vz-tile"><span class="vz-tile-label">${esc(label)}</span><strong class="vz-tile-value">${value}</strong>${sub ? `<span class="vz-tile-sub">${sub}</span>` : ''}</div>`;
  }

  // Barres horizontales, une seule série : longueur = effectif, libellé et valeur en texte
  function bars(title, rows, { total, labelOf = (r) => r.label, empty = 'Pas encore de données sur la période.' } = {}) {
    const max = Math.max(1, ...rows.map((r) => r.count));
    const sum = total || rows.reduce((n, r) => n + r.count, 0) || 1;
    return `
      <section class="vz-card">
        <h3 class="vz-title">${esc(title)}</h3>
        ${rows.length ? `<ul class="vz-bars" role="list">
          ${rows.map((r) => {
            const label = labelOf(r);
            const share = r.count / sum;
            return `<li class="vz-bar-row" tabindex="0" data-tip="${esc(`${label} : ${nf.format(r.count)} (${pct(share)})`)}">
              <span class="vz-bar-label">${esc(label)}</span>
              <span class="vz-bar-track"><span class="vz-bar" style="width:${Math.max((r.count / max) * 100, 1.5)}%"></span></span>
              <span class="vz-bar-value">${nf.format(r.count)} <small>${pct(share)}</small></span>
            </li>`;
          }).join('')}
        </ul>` : `<p class="vz-empty">${esc(empty)}</p>`}
      </section>`;
  }

  // Part des nouveaux et des revenants : barre empilée à deux segments, légende et libellés directs
  function newVsReturning(k) {
    const total = Math.max(k.visitors, 1);
    const returning = k.returning;
    const fresh = Math.max(k.visitors - returning, 0);
    const seg = (cls, value, label) => (value ? `<span class="vz-seg ${cls}" style="flex-grow:${value}" data-tip="${esc(`${label} : ${nf.format(value)} (${pct(value / total)})`)}" tabindex="0"><span class="vz-seg-label">${pct(value / total)}</span></span>` : '');
    return `
      <section class="vz-card">
        <h3 class="vz-title">Nouveaux et revenants</h3>
        <div class="vz-legend">
          <span><i class="vz-key vz-key-1"></i>Première visite sur la période</span>
          <span><i class="vz-key vz-key-2"></i>Revenus au moins une fois</span>
        </div>
        ${k.visitors ? `<div class="vz-stack">${seg('vz-seg-1', fresh, 'Première visite')}${seg('vz-seg-2', returning, 'Revenants')}</div>
        <p class="vz-caption">${nf.format(fresh)} nouveaux · ${nf.format(returning)} revenants sur ${nf.format(k.visitors)} visiteurs</p>` : '<p class="vz-empty">Pas encore de visiteurs sur la période.</p>'}
      </section>`;
  }

  function contentTable(rows) {
    if (!rows.length) return '<p class="vz-empty">Aucune fiche consultée sur la période.</p>';
    const list = (items) => (items.length ? `<ol class="vz-top">${items.map((i) => `<li>${esc(i.title)} <small>${nf.format(i.count)}</small></li>`).join('')}</ol>` : '<span class="vz-muted">—</span>');
    return `
      <div class="table-wrapper">
        <table>
          <thead><tr><th>Profil</th><th>Fiches vues</th><th>Métiers les plus consultés</th><th>Formations les plus consultées</th></tr></thead>
          <tbody>${rows.map((r) => `<tr><td><strong>${esc(r.profile)}</strong></td><td>${nf.format(r.views)}</td><td>${list(r.jobs)}</td><td>${list(r.formations)}</td></tr>`).join('')}</tbody>
        </table>
      </div>`;
  }

  // Indicateurs clés : parcours d'orientation, concours, alertes, application et e-mails
  function keyIndicators(key) {
    if (!key) return '';
    const r = key.riasec;
    const a = key.app;
    return `
      <div class="card">
        <div class="card-header"><h3 style="margin:0;">🎯 Indicateurs clés</h3></div>
        <div class="vz-tiles" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,280px),1fr));">
          ${tile('Tests RIASEC terminés', nf.format(r.completed), `${nf.format(r.started)} commencés · ${pct(r.completionRate)} vont au bout`)}
          ${tile('Test puis adhésion', nf.format(r.thenMembers), `sur ${nf.format(r.newMembers)} inscriptions de la période`)}
          ${tile('Fiches concours vues', nf.format(key.opportunities.views), `${nf.format(key.opportunities.calendar)} ajouts à l'agenda`)}
          ${tile('Alertes e-mail actives', nf.format(key.alerts.active), `${nf.format(key.alerts.confirmed)} confirmées sur ${nf.format(key.alerts.requested)} demandes`)}
          ${tile('Application installée', nf.format(Math.max(a.installed, a.accepted)), `${nf.format(a.prompts)} invitations · ${nf.format(a.dismissed)} refus`)}
          ${tile('E-mails envoyés', nf.format(key.emails.sent), key.emails.failed ? `⚠️ ${nf.format(key.emails.failed)} en échec` : 'aucun échec')}
          ${key.accounts ? tile('Comptes gratuits créés', nf.format(key.accounts.newVisitorAccounts), `${nf.format(key.accounts.nudgeClicks)} clics sur ${nf.format(key.accounts.nudgeViews)} invitations · ${nf.format(key.accounts.membershipRequests)} demandes d'adhésion`) : ''}
        </div>
      </div>
      <div class="vz-grid vz-grid-wide" style="grid-template-columns:1fr;">
        ${bars('Concours & opportunités les plus consultés', key.opportunities.top, { empty: 'Aucune fiche consultée sur la période.' })}
      </div>`;
  }

  function emailJournal(emails) {
    if (!emails) return '';
    const fmt = (d) => new Date(d).toLocaleString('fr-FR', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
    return `
      <div class="card">
        <div class="card-header">
          <div>
            <h3 style="margin:0 0 0.25rem;">📧 Derniers e-mails envoyés par la plateforme</h3>
            <p style="margin:0;font-size:0.85rem;color:#64748b;">Les 25 derniers envois (adresses masquées). Le contenu complet reste consultable sur Resend.</p>
          </div>
        </div>
        ${emails.recent.length ? `<div class="table-wrapper"><table>
          <thead><tr><th>Date</th><th>Destinataire</th><th>Sujet</th><th>Résultat</th></tr></thead>
          <tbody>${emails.recent.map((e) => `<tr>
            <td style="white-space:nowrap;">${esc(fmt(e.at))}</td>
            <td>${esc(e.to)}</td>
            <td>${esc(e.subject)}</td>
            <td>${e.ok ? (e.mode === 'sandbox' ? '<span class="badge badge-warning">Simulé (clé Resend absente)</span>' : '<span class="badge badge-success">Envoyé</span>') : `<span class="badge badge-danger" title="${esc(e.error || '')}">Échec</span>`}</td>
          </tr>`).join('')}</tbody>
        </table></div>` : '<p class="vz-empty">Aucun e-mail envoyé depuis la mise en place du journal.</p>'}
      </div>`;
  }

  async function render() {
    const res = await window.AdminApi.request(`/analytics/profiles?days=${state.days}`);
    const d = res.data;
    state.data = d;
    const k = d.kpis;
    return `
      <div class="vz-root">
        <div class="card vz-head">
          <div>
            <h2 style="margin:0 0 0.25rem;">🧭 Profils visiteurs</h2>
            <p style="margin:0;font-size:0.85rem;color:#64748b;">Qui visite le site, d'où et pour quoi faire. Données anonymes : situation déclarée volontairement, localisation approximative fournie par l'hébergeur, aucune adresse IP conservée.</p>
          </div>
          <div class="vz-filters" role="group" aria-label="Période">
            ${PERIODS.map(([v, l]) => `<button type="button" class="vz-period${v === state.days ? ' is-active' : ''}" data-days="${v}" aria-pressed="${v === state.days}">${esc(l)}</button>`).join('')}
            <button type="button" class="btn btn-secondary btn-sm" id="vz-export">⬇️ Export CSV</button>
          </div>
        </div>

        <div class="vz-tiles">
          ${tile('Visiteurs uniques', nf.format(k.visitors), `${nf.format(k.newVisitors)} nouveaux`)}
          ${tile('Taux de retour', pct(k.returningRate), `${nf.format(k.returning)} revenants`)}
          ${tile('Profils renseignés', pct(k.profiledRate), `${nf.format(k.profiled)} visiteurs`)}
          ${tile('Temps moyen', duration(k.avgSeconds), `${k.avgPages} pages en moyenne`)}
          ${tile('PDF téléchargés', nf.format(k.pdfDownloads), `${nf.format(d.pdf.job_pdf || 0)} métiers · ${nf.format(d.pdf.formation_pdf || 0)} formations`)}
        </div>

        ${keyIndicators(d.key)}

        <div class="vz-grid">
          ${newVsReturning(k)}
          ${bars('Situation déclarée', d.byStatus, { total: k.profiled, empty: 'Aucun visiteur n\'a encore rempli le questionnaire.' })}
          ${bars('Niveau d\'études', d.byLevel)}
          ${bars('Centres d\'intérêt', d.byInterest, { total: k.profiled })}
          ${bars('Pays', d.byCountry, { labelOf: (r) => countryName(r.label), empty: 'La localisation est disponible une fois le site déployé sur Vercel.' })}
          ${bars('Villes', d.byCity)}
          ${bars(`Type RIASEC dominant (${nf.format(d.riasec?.tests || 0)} tests d'orientation)`, d.riasec?.byType || [], { labelOf: (r) => `${r.label} · ${RIASEC[r.label] || r.label}`, empty: 'Aucun test d\'orientation RIASEC terminé sur la période.' })}
          ${bars('Codes RIASEC les plus fréquents', d.riasec?.topCodes || [], { labelOf: (r) => `${r.label} (${r.label.split('').map((l) => RIASEC[l]).join(', ')})`, total: d.riasec?.tests, empty: 'Aucun test d\'orientation RIASEC terminé sur la période.' })}
          ${bars('Appareils', d.byDevice, { labelOf: (r) => ({ mobile: 'Téléphone', tablet: 'Tablette', desktop: 'Ordinateur' }[r.label] || r.label) })}
        </div>

        <div class="card">
          <div class="card-header"><h3 style="margin:0;">📚 Ce que consulte chaque profil</h3></div>
          ${contentTable(d.contentByProfile)}
        </div>
        ${emailJournal(d.key?.emails)}
        <div class="vz-tooltip" role="tooltip" hidden></div>
      </div>`;
  }

  function exportCsv() {
    const d = state.data;
    if (!d) return;
    const lines = [['Rubrique', 'Valeur', 'Effectif']];
    const add = (section, rows, labelOf = (r) => r.label) => rows.forEach((r) => lines.push([section, labelOf(r), r.count]));
    Object.entries(d.kpis).forEach(([key, value]) => lines.push(['Indicateur', key, value]));
    add('Situation', d.byStatus);
    add('Niveau', d.byLevel);
    add('Intérêt', d.byInterest);
    add('Pays', d.byCountry, (r) => countryName(r.label));
    add('Ville', d.byCity);
    add('Appareil', d.byDevice);
    add('RIASEC dominant', d.riasec?.byType || []);
    add('Code RIASEC', d.riasec?.topCodes || []);
    d.contentByProfile.forEach((p) => {
      p.jobs.forEach((j) => lines.push([`Métiers vus · ${p.profile}`, j.title, j.count]));
      p.formations.forEach((f) => lines.push([`Formations vues · ${p.profile}`, f.title, f.count]));
    });
    const csv = lines.map((row) => row.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(';')).join('\n');
    const url = URL.createObjectURL(new Blob([`\uFEFF${csv}`], { type: 'text/csv;charset=utf-8' }));
    const a = Object.assign(document.createElement('a'), { href: url, download: `profils-visiteurs-${d.days}j.csv` });
    a.click();
    URL.revokeObjectURL(url);
    toast('Export CSV téléchargé', 'success');
  }

  function bind() {
    const root = document.querySelector('.vz-root');
    if (!root) return;
    root.querySelectorAll('[data-days]').forEach((btn) => btn.addEventListener('click', () => {
      state.days = Number(btn.dataset.days);
      window.AdminPages.loadPage('visiteurs', true);
    }));
    document.getElementById('vz-export')?.addEventListener('click', exportCsv);

    // Info-bulle au survol ou au focus d'une barre (cible : toute la ligne)
    const tip = root.querySelector('.vz-tooltip');
    const show = (el, x, y) => {
      tip.textContent = el.dataset.tip;
      tip.hidden = false;
      const box = tip.getBoundingClientRect();
      tip.style.left = `${Math.min(x + 12, window.innerWidth - box.width - 8)}px`;
      tip.style.top = `${Math.max(y - box.height - 12, 8)}px`;
    };
    root.addEventListener('pointermove', (e) => {
      const el = e.target.closest('[data-tip]');
      if (el) show(el, e.clientX, e.clientY); else tip.hidden = true;
    });
    root.addEventListener('pointerleave', () => { tip.hidden = true; });
    root.addEventListener('focusin', (e) => {
      const el = e.target.closest('[data-tip]');
      if (!el) return;
      const r = el.getBoundingClientRect();
      show(el, r.left + r.width / 2, r.top);
    });
    root.addEventListener('focusout', () => { tip.hidden = true; });
  }

  window.AdminVisitors = { render, bind };
})();

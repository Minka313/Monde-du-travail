/**
 * Fiche détaillée d'une annonce « Concours & opportunités » (opportunite.html?slug=… ou ?id=…).
 * Tout ce qu'il faut pour candider : conditions, dossier (liste à cocher), épreuves, parcours,
 * calendrier, frais, contacts, source vérifiée, export agenda, partage et signalement d'erreur.
 */
(function () {
  'use strict';

  const O = window.Opp;
  const esc = (value) => O.esc(value);
  const track = (type, id, meta) => { try { window.AnalyticsTracker?.track?.(type, 'opportunity', id, meta || {}); } catch (_) { /* suivi facultatif */ } };

  // Conseils de préparation par défaut, quand l'équipe n'en a pas rédigé pour l'annonce
  const DEFAULT_TIPS = {
    BOURSE: [
      'Commence ton dossier au moins deux mois avant la date limite : traductions, légalisations et lettres de recommandation prennent du temps.',
      'Écris une lettre de motivation propre à cette bourse : ton projet, pourquoi ce pays, ce que tu feras au retour.',
      'Demande tes lettres de recommandation tôt à des enseignants qui te connaissent bien, avec ton CV et la date limite.',
      'Garde une copie numérique (PDF) de chaque pièce et du formulaire envoyé.',
    ],
    STAGE: [
      'Prépare un CV d\'une page et une lettre adaptée à l\'offre, en anglais si le stage le demande.',
      'Lis la mission et les valeurs de l\'organisation : elles reviennent toujours en entretien.',
      'Entraîne-toi à l\'entretien avec la méthode STAR (situation, tâche, action, résultat).',
    ],
    PROGRAMME: [
      'Mets en avant des actions concrètes : projets menés, engagement associatif, résultats obtenus.',
      'Relis chaque réponse du formulaire à voix haute et fais-la relire par quelqu\'un de confiance.',
      'Prépare l\'entretien en racontant ton parcours en deux minutes.',
    ],
    DEFENSE: [
      'L\'entraînement physique se prépare des mois à l\'avance : course, pompes, abdominaux, natation selon les épreuves.',
      'La visite médicale est éliminatoire : fais un bilan (vue, dents, tension) avant de déposer ton dossier.',
      'Révise la culture générale et l\'actualité : elles comptent souvent à l\'écrit comme à l\'oral.',
    ],
    SANTE: [
      'Révise en priorité la biologie (SVT) et la chimie sur les sujets des sessions passées.',
      'Prépare une motivation claire pour les métiers de la santé : elle est évaluée à l\'entretien.',
    ],
    ENSEIGNEMENT: [
      'Soigne l\'expression écrite : dissertation, résumé et orthographe sont décisifs.',
      'Prépare l\'oral comme une petite leçon : clarté, structure et posture devant un public.',
    ],
    ADMINISTRATION: [
      'Lis l\'actualité nationale et internationale chaque jour et fais des fiches.',
      'Entraîne-toi à la dissertation et à la note de synthèse en temps limité.',
    ],
    COMMUNICATION: [
      'Lis la presse tous les jours et résume un article par jour en dix lignes.',
      'Travaille la culture générale et l\'orthographe : elles éliminent beaucoup de candidats.',
    ],
    CONCOURS: [
      'Procure-toi les sujets des sessions passées et traite-les en temps réel.',
      'Planifie tes révisions par semaine et vérifie chaque dimanche ce qui a été fait.',
      'Prépare toutes les pièces du dossier dès l\'ouverture : un dossier incomplet est rejeté sans examen.',
      'Vérifie la limite d\'âge et la série demandée avant de payer les frais de dossier.',
    ],
  };

  const EXAM_WORDS = /épreuve|concours|écrit|oral|test|entretien|présélection|physique|admissib|sélection/i;
  const RESULT_WORDS = /résultat|admis|proclamation|liste/i;

  const state = { o: null, all: [] };

  const paragraphs = (text) => String(text).split(/\n{2,}/).map((p) => `<p>${esc(p).replace(/\n/g, '<br>')}</p>`).join('');
  const section = (id, icon, title, body, extra = '') => (body
    ? `<section class="opp-dsec" id="${id}" aria-labelledby="${id}-t"><h2 id="${id}-t"><span aria-hidden="true">${icon}</span> ${title}</h2>${extra}${body}</section>`
    : '');

  function tipsFor(o) {
    if (o.tips) return { custom: true, list: o.tips.split(/\n+/).map((t) => t.replace(/^[-•*]\s*/, '').trim()).filter(Boolean) };
    if (DEFAULT_TIPS[o.category] && o.category !== 'CONCOURS' && o.category !== 'ADMISSION') return { custom: false, list: DEFAULT_TIPS[o.category] };
    const domain = (o.domains || []).find((d) => DEFAULT_TIPS[d]);
    const list = [...(domain ? DEFAULT_TIPS[domain] : []), ...DEFAULT_TIPS.CONCOURS].slice(0, 5);
    return { custom: false, list };
  }

  // Parcours du candidat : étapes saisies par l'équipe, sinon construites à partir de la fiche
  function journey(o) {
    if (Array.isArray(o.selectionSteps) && o.selectionSteps.length) {
      return o.selectionSteps.map((s) => ({ title: s.title, detail: s.detail || '' }));
    }
    const keyDates = Array.isArray(o.keyDates) ? o.keyDates : [];
    const docs = (o.documents || []).length;
    const steps = [];
    const who = [O.levelText(o), (o.series || []).length ? `séries ${o.series.join(', ')}` : '', o.ageLimit ? 'limite d\'âge' : ''].filter(Boolean).join(' · ');
    steps.push({ title: 'Vérifier que tu es éligible', detail: who || 'Lis attentivement les conditions ci-dessous.' });
    if (docs) steps.push({ title: 'Préparer le dossier', detail: `${docs} pièce${docs > 1 ? 's' : ''} à réunir${o.fees ? ` · frais : ${o.fees}` : ''}`, anchor: 'dossier' });
    const period = o.openingDate && o.deadline
      ? `du ${O.formatDay(o.openingDate)} au ${O.formatDay(o.deadline)}`
      : o.deadline ? `jusqu'au ${O.formatDay(o.deadline)}` : (o.usualPeriod || '');
    steps.push({ title: 'Déposer sa candidature', detail: period ? `Candidatures ${period}${o.nextSession ? ' (dernière session)' : ''}.` : 'Selon le calendrier publié par l\'organisme.', anchor: o.applyMode ? 'candidature' : '' });
    const exams = keyDates.filter((d) => EXAM_WORDS.test(d.label) && !/clôture|dépôt|inscription/i.test(d.label));
    if (exams.length || (o.exams || []).length) {
      steps.push({
        title: 'Passer les épreuves',
        detail: exams.length ? exams.map((d) => `${d.label} : ${O.formatDay(d.date)}`).join(' · ') : `${o.exams.length} épreuve${o.exams.length > 1 ? 's' : ''} au programme`,
        anchor: (o.exams || []).length ? 'epreuves' : 'calendrier',
      });
    }
    const results = keyDates.find((d) => RESULT_WORDS.test(d.label));
    steps.push({ title: 'Résultats', detail: results ? `${results.label} : ${O.formatDay(results.date)}` : 'Publiés par l\'organisme sur son site officiel.' });
    return steps;
  }

  // ---------- Rendu ----------
  function renderHead(o) {
    const check = O.verification(o);
    const meta = [
      o.organization ? `<span>🏛️ ${esc(o.organization)}</span>` : '',
      O.place(o) ? `<span>📍 ${esc(O.place(o))}</span>` : '',
      o.sessionLabel ? `<span>🗓️ ${o.nextSession ? `Infos de la ${esc(o.sessionLabel.toLowerCase())}` : esc(o.sessionLabel)}</span>` : '',
    ].join('');
    return `
      ${o.status && o.status !== 'PUBLISHED' ? '<div class="opp-preview-banner">👁️ Aperçu : cette annonce n\'est pas publiée (visible uniquement par l\'équipe).</div>' : ''}
      <div class="opp-badges">${O.badges(o)}</div>
      <h1>${esc(o.title)}</h1>
      <div class="opp-detail-meta">${meta}</div>
      <p class="opp-detail-lead">${esc(o.summary)}</p>
      ${check ? `<p class="opp-detail-check${check.stale ? ' is-stale' : ''}">${check.stale
        ? `⏳ Dernière vérification le ${esc(check.date)} : informations à confirmer sur le site officiel.`
        : `✅ Informations vérifiées par le club le ${esc(check.date)}`}</p>` : ''}`;
  }

  function renderAside(o) {
    const timer = O.countdown(o);
    const officialUrl = o.officialUrl ? window.safeUrl(o.officialUrl) : '';
    const fav = O.favorites.has(o.id);
    const hasEvents = O.events(o).length > 0;
    const rows = [
      o.nextSession && O.expectedNext(o) ? ['Attendue vers', `${O.expectedNext(o).label} (estimation)`] : null,
      o.nextSession ? ['Calendrier habituel', o.usualPeriod || 'Dates à venir'] : null,
      !o.nextSession && o.openingDate ? ['Ouverture', O.formatDay(o.openingDate)] : null,
      !o.nextSession ? ['Date limite', o.deadline ? O.formatDay(o.deadline) : 'Non communiquée'] : null,
      o.fees ? ['Frais de dossier', o.fees] : null,
      o.places ? ['Places', String(o.places)] : null,
      o.funding ? ['Prise en charge', O.FUNDING[o.funding]] : null,
      O.levelText(o) ? ['Public', O.levelText(o)] : null,
      o.destination ? ['Destination', `${O.DESTINATION[o.destination]}${o.country ? ` · ${o.country}` : ''}`] : null,
    ].filter(Boolean);
    let status;
    if (timer) status = `<div class="opp-aside-status${timer.urgent ? ' is-urgent' : ''}"><strong>${esc(timer.text)}</strong><span>${esc(o.phase === 'OPEN' ? `Clôture le ${O.formatDay(o.deadline)}` : `Ouverture le ${O.formatDay(o.openingDate)}`)}</span></div>`;
    else if (o.nextSession) status = `<div class="opp-aside-status is-next"><strong>Prochaine session attendue</strong><span>La session précédente est terminée. Les nouvelles dates seront publiées ici dès leur annonce officielle.</span></div>`;
    else if (o.phase === 'OPEN') status = '<div class="opp-aside-status"><strong>Candidatures ouvertes</strong><span>Date limite non communiquée : renseigne-toi vite.</span></div>';
    else status = `<div class="opp-aside-status is-closed"><strong>${esc(O.PHASE[o.phase] || '')}</strong><span>${o.deadline ? `Clôturé le ${esc(O.formatDay(o.deadline))}` : ''}</span></div>`;

    return `
      <div class="opp-aside-card">
        ${status}
        <dl class="opp-aside-facts">${rows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>
        <div class="opp-aside-actions">
          ${officialUrl ? `<a class="btn btn-primary" href="${esc(officialUrl)}" target="_blank" rel="noopener noreferrer nofollow">Site officiel ↗</a>` : ''}
          ${hasEvents ? '<button type="button" class="btn btn-outline" data-action="ics">📅 Ajouter à mon agenda</button>' : ''}
          <button type="button" class="btn btn-outline" data-action="alert">🔔 M'alerter par e-mail</button>
          <button type="button" class="btn btn-outline" data-action="fav" aria-pressed="${fav}">${fav ? '★ Dans mes favoris' : '☆ Ajouter à mes favoris'}</button>
          <div class="opp-share">
            <a class="btn btn-ghost btn-sm" data-action="whatsapp" target="_blank" rel="noopener noreferrer" href="#">WhatsApp</a>
            <button type="button" class="btn btn-ghost btn-sm" data-action="share">🔗 Partager</button>
            <button type="button" class="btn btn-ghost btn-sm" data-action="print">🖨️ Imprimer</button>
          </div>
        </div>
        <button type="button" class="opp-report-link" data-action="report">🚩 Signaler une erreur</button>
      </div>`;
  }

  function renderMain(o) {
    const today = O.todayKey();
    const series = (o.series || []).filter(Boolean);
    const documents = (o.documents || []).filter(Boolean);
    const exams = Array.isArray(o.exams) ? o.exams : [];
    const keyDates = Array.isArray(o.keyDates) ? o.keyDates : [];
    const resources = Array.isArray(o.resources) ? o.resources : [];
    const faq = Array.isArray(o.faq) ? o.faq : [];
    const tips = tipsFor(o);
    const steps = journey(o);
    const done = docState(o).filter((i) => i < documents.length);

    const who = [
      O.levelText(o) ? `<div class="opp-who"><span>Niveau</span><strong>${esc(O.levelText(o))}</strong></div>` : '',
      series.length ? `<div class="opp-who"><span>Séries du bac</span><p class="opp-series">${series.map((x) => `<span>${esc(x)}</span>`).join('')}</p></div>` : '',
      o.ageLimit ? `<div class="opp-who"><span>Âge</span><strong>${esc(o.ageLimit)}</strong></div>` : '',
      (o.domains || []).length ? `<div class="opp-who"><span>Domaine</span><strong>${esc(o.domains.map((d) => O.DOMAIN[d]).join(' · '))}</strong></div>` : '',
    ].join('');

    const timeline = keyDates.length || o.deadline || o.openingDate;
    const timelineItems = [
      ...(o.openingDate ? [{ date: O.dayKey(o.openingDate), label: 'Ouverture des candidatures' }] : []),
      ...keyDates,
      ...(o.deadline && !keyDates.some((d) => d.date === O.dayKey(o.deadline)) ? [{ date: O.dayKey(o.deadline), label: 'Date limite de candidature' }] : []),
    ].sort((a, b) => a.date.localeCompare(b.date));

    const sections = [
      section('parcours', '🧭', 'Ton parcours, étape par étape', `
        <ol class="opp-steps">${steps.map((s, i) => `
          <li><span class="opp-step-n">${i + 1}</span><div><strong>${s.anchor ? `<a href="#${s.anchor}">${esc(s.title)}</a>` : esc(s.title)}</strong>${s.detail ? `<p>${esc(s.detail)}</p>` : ''}</div></li>`).join('')}
        </ol>`),
      section('conditions', '👤', 'Qui peut candidater ?', `${who ? `<div class="opp-who-grid">${who}</div>` : ''}${o.eligibility ? paragraphs(o.eligibility) : ''}`),
      section('calendrier', '🗓️', 'Calendrier', `
        ${o.nextSession ? `<div class="opp-note">🔁 <strong>Dates de la dernière session.</strong> La prochaine session suit en général le même calendrier${o.usualPeriod ? ` : ${esc(o.usualPeriod)}` : ''}. Vérifie le communiqué officiel.</div>` : ''}
        ${timeline ? `<ol class="opp-timeline2">${timelineItems.map((d) => `
          <li class="${d.date < today ? 'is-past' : ''}${d.date === O.dayKey(o.deadline) ? ' is-deadline' : ''}">
            <time datetime="${esc(d.date)}">${esc(O.formatDay(d.date))}</time><span>${esc(d.label)}</span>
            ${d.date >= today ? `<em>${O.daysUntil(d.date) === 0 ? "aujourd'hui" : `dans ${O.daysUntil(d.date)} j`}</em>` : ''}
          </li>`).join('')}</ol>` : ''}
        ${o.usualPeriod && !o.nextSession ? `<p class="opp-muted">Calendrier habituel : ${esc(o.usualPeriod)}</p>` : ''}`),
      section('dossier', '🗂️', 'Dossier à fournir', documents.length ? `
        <div class="opp-docs-progress"><div class="opp-docs-bar"><span style="width:${Math.round((done.length / documents.length) * 100)}%"></span></div><small id="oppDocsCount">${done.length} / ${documents.length} pièces prêtes</small></div>
        <ul class="opp-docs">${documents.map((d, i) => `
          <li><label><input type="checkbox" data-doc="${i}" ${done.includes(i) ? 'checked' : ''}><span>${esc(d)}</span></label></li>`).join('')}</ul>
        <p class="opp-muted">Coche les pièces au fur et à mesure : ta progression reste enregistrée sur cet appareil.</p>` : ''),
      section('epreuves', '📝', 'Épreuves', exams.length ? `
        <div class="opp-exams"><table><thead><tr><th>Épreuve</th><th>Durée</th><th>Coef.</th></tr></thead>
        <tbody>${exams.map((e) => `<tr><td>${esc(e.subject)}</td><td>${esc(e.duration || '—')}</td><td>${esc(e.coefficient || '—')}</td></tr>`).join('')}</tbody></table></div>` : ''),
      section('candidature', '📨', 'Comment candidater', `${o.applyMode ? paragraphs(o.applyMode) : ''}${o.contact ? `<div class="opp-contact"><span>Contact</span>${paragraphs(o.contact)}</div>` : ''}`),
      section('avantages', '🎁', o.category === 'BOURSE' || o.category === 'PROGRAMME' ? 'Ce que couvre la bourse' : 'Ce que tu y gagnes', `${o.funding ? `<p><span class="opp-badge opp-badge--funded">${esc(O.FUNDING[o.funding])}</span></p>` : ''}${o.benefits ? paragraphs(o.benefits) : ''}`.trim()),
      section('details', 'ℹ️', 'À savoir aussi', o.details ? paragraphs(o.details) : ''),
      section('ressources', '🔗', 'Liens utiles', resources.length ? `<ul class="opp-links">${resources.map((r) => `<li><a href="${esc(window.safeUrl(r.url))}" target="_blank" rel="noopener noreferrer nofollow">${esc(r.label)} ↗</a></li>`).join('')}</ul>` : ''),
      section('conseils', '💡', 'Conseils du club pour réussir', `<ul class="opp-tips">${tips.list.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
        <p class="opp-muted">${tips.custom ? 'Conseils rédigés par l\'équipe du club pour cette annonce.' : 'Conseils généraux du club pour ce type de candidature.'} <a href="formations.html">Prépare l'oral et l'entretien avec nos formations →</a></p>`),
      section('faq', '❓', 'Questions fréquentes', faq.length ? faq.map((q) => `<details class="opp-faq"><summary>${esc(q.question)}</summary>${paragraphs(q.answer)}</details>`).join('') : ''),
      section('source', '🛡️', 'Source et fiabilité', `
        <ul class="opp-source">
          ${o.officialUrl ? `<li>Lien officiel : <a href="${esc(window.safeUrl(o.officialUrl))}" target="_blank" rel="noopener noreferrer nofollow">${esc(o.officialUrl.replace(/^https?:\/\//, '').replace(/\/$/, ''))} ↗</a></li>` : ''}
          ${o.lastVerifiedAt ? `<li>Dernière vérification par le club : <strong>${esc(O.formatDay(o.lastVerifiedAt))}</strong></li>` : ''}
          ${o.sourceNote ? `<li>Origine des informations : ${esc(o.sourceNote)}</li>` : ''}
          ${o.updatedAt ? `<li>Fiche mise à jour le ${esc(O.formatDay(o.updatedAt))}</li>` : ''}
        </ul>
        <div class="opp-note opp-note--warn">⚠️ Le site et les communiqués officiels font foi. Personne ne doit te demander d'argent par message ou par Mobile Money pour « réserver » une place.</div>
        <button type="button" class="btn btn-outline btn-sm" data-action="report">🚩 Signaler une erreur sur cette fiche</button>`),
    ].filter(Boolean);

    const nav = sections.map((html) => {
      const [, id, title] = html.match(/id="([^"]+)" aria-labelledby="[^"]+"><h2 id="[^"]+"><span aria-hidden="true">[^<]*<\/span> ([^<]+)<\/h2>/) || [];
      return id ? `<a href="#${id}">${title}</a>` : '';
    }).join('');

    return `<nav class="opp-toc" aria-label="Sommaire de la fiche">${nav}</nav>${sections.join('')}`;
  }

  // ---------- Dossier : liste à cocher mémorisée sur l'appareil ----------
  const docKey = (o) => `opp:docs:${o.id}`;
  function docState(o) {
    try { return JSON.parse(localStorage.getItem(docKey(o))) || []; } catch (_) { return []; }
  }
  function saveDocs(o) {
    const checked = [...document.querySelectorAll('[data-doc]:checked')].map((x) => Number(x.dataset.doc));
    try { localStorage.setItem(docKey(o), JSON.stringify(checked)); } catch (_) { /* stockage indisponible */ }
    const total = document.querySelectorAll('[data-doc]').length;
    document.getElementById('oppDocsCount').textContent = `${checked.length} / ${total} pièces prêtes`;
    document.querySelector('.opp-docs-bar span').style.width = `${Math.round((checked.length / total) * 100)}%`;
  }

  // ---------- Annonces similaires ----------
  function renderSimilar(o) {
    const score = (x) => (x.category === o.category ? 2 : 0)
      + (x.domains || []).filter((d) => d !== 'PLURIDISCIPLINAIRE' && (o.domains || []).includes(d)).length * 3
      + (x.levels || []).filter((l) => (o.levels || []).includes(l)).length
      + (O.isActive(x) ? 1 : 0);
    const list = state.all.filter((x) => x.id !== o.id).map((x) => [score(x), x]).filter(([s]) => s >= 4)
      .sort((a, b) => b[0] - a[0]).slice(0, 3).map(([, x]) => x);
    if (!list.length) return;
    document.getElementById('oppSimilar').innerHTML = list.map(O.renderCard).join('');
    document.getElementById('oppSimilarSection').hidden = false;
  }

  // ---------- Référencement ----------
  function setMeta(o) {
    document.title = `${o.title} — Concours & Opportunités | Le Monde du Travail`;
    const description = `${o.summary}`.slice(0, 300);
    document.getElementById('metaDescription')?.setAttribute('content', description);
    document.getElementById('ogTitle')?.setAttribute('content', o.title);
    if (o.slug) {
      const canonical = `https://lemondedutravail.org/opportunite?slug=${encodeURIComponent(o.slug)}`;
      document.getElementById('canonicalLink')?.setAttribute('href', canonical);
      document.getElementById('ogUrl')?.setAttribute('content', canonical);
    }
    document.getElementById('oppCrumb').textContent = (O.CATEGORY[o.category] || {}).label || 'Fiche';
  }

  // ---------- Actions ----------
  function shareUrl(o) {
    return new URL(O.detailUrl(o), window.location.href).href;
  }

  function bind(o) {
    const wa = document.querySelector('[data-action="whatsapp"]');
    if (wa) {
      const text = `${o.title}${o.deadline && o.phase === 'OPEN' ? ` — date limite : ${O.formatDay(o.deadline)}` : ''}\n${shareUrl(o)}`;
      wa.href = `https://wa.me/?text=${encodeURIComponent(text)}`;
    }
    document.addEventListener('click', async (event) => {
      const button = event.target.closest('[data-action]');
      if (!button) return;
      const action = button.dataset.action;
      if (action === 'ics') { O.downloadIcs(o); track('opportunity_ics', o.id); }
      if (action === 'print') window.print();
      if (action === 'fav') {
        const on = O.favorites.toggle(o.id);
        button.setAttribute('aria-pressed', String(on));
        button.textContent = on ? '★ Dans mes favoris' : '☆ Ajouter à mes favoris';
      }
      if (action === 'share') {
        const url = shareUrl(o);
        try {
          if (navigator.share) await navigator.share({ title: o.title, url });
          else {
            await navigator.clipboard.writeText(url);
            button.textContent = '✓ Lien copié';
            setTimeout(() => { button.textContent = '🔗 Partager'; }, 2000);
          }
        } catch (_) { /* partage annulé */ }
      }
      if (action === 'report') openReport();
      if (action === 'alert') openAlert('subscribe');
    });
    document.getElementById('oppMain').addEventListener('change', (event) => {
      if (event.target.matches('[data-doc]')) saveDocs(o);
    });
  }

  function openReport() {
    const dialog = document.getElementById('oppReportDialog');
    document.getElementById('oppReportStatus').textContent = '';
    document.getElementById('oppReportForm').reset();
    dialog.showModal();
  }

  function bindReport(o) {
    const dialog = document.getElementById('oppReportDialog');
    const form = document.getElementById('oppReportForm');
    const status = document.getElementById('oppReportStatus');
    const submit = document.getElementById('oppReportSubmit');
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog || event.target.closest('[data-close]')) dialog.close();
    });
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const data = new FormData(form);
      submit.disabled = true;
      status.className = 'opp-report-status';
      status.textContent = 'Envoi…';
      try {
        const res = await window.Api.opportunities.report(o.id, {
          kind: data.get('kind'),
          message: String(data.get('message') || '').trim(),
          contact: String(data.get('contact') || '').trim() || null,
        });
        status.classList.add('is-ok');
        status.textContent = (res && res.message) || 'Merci ! Le signalement a été transmis.';
        form.querySelector('textarea').value = '';
        setTimeout(() => dialog.close(), 2200);
      } catch (error) {
        status.classList.add('is-error');
        status.textContent = error.message || 'Envoi impossible pour le moment.';
      } finally {
        submit.disabled = false;
      }
    });
  }

  // ===== Alertes e-mail : inscription, confirmation (lien reçu) et désinscription =====
  const alertState = { mode: 'subscribe', token: null };

  function openAlert(mode, token) {
    alertState.mode = mode;
    alertState.token = token || null;
    const dialog = document.getElementById('oppAlertDialog');
    const status = document.getElementById('oppAlertStatus');
    const submit = document.getElementById('oppAlertSubmit');
    const field = document.getElementById('oppAlertEmailField');
    status.className = 'opp-report-status';
    status.textContent = '';
    submit.disabled = false;
    submit.hidden = false;
    field.hidden = mode !== 'subscribe';
    field.querySelector('input').required = mode === 'subscribe';
    const texts = {
      subscribe: ['🔔 M\'alerter par e-mail', 'Reçois un e-mail à l\'ouverture des candidatures, 7 jours puis 2 jours avant la date limite, et quand la nouvelle session est publiée. Sans compte, sans publicité.', 'M\'alerter'],
      confirm: ['🔔 Confirmation de ton alerte', 'Un instant, nous confirmons ton adresse…', ''],
      stop: ['🔕 Arrêter les alertes', 'Tu ne recevras plus d\'e-mails pour cette annonce.', 'Arrêter les alertes'],
    }[mode];
    document.getElementById('oppAlertTitle').textContent = texts[0];
    document.getElementById('oppAlertLead').textContent = texts[1];
    submit.textContent = texts[2];
    submit.hidden = !texts[2];
    if (!dialog.open) dialog.showModal();
    if (mode === 'confirm') sendAlert();
  }

  async function sendAlert() {
    const form = document.getElementById('oppAlertForm');
    const status = document.getElementById('oppAlertStatus');
    const submit = document.getElementById('oppAlertSubmit');
    submit.disabled = true;
    status.className = 'opp-report-status';
    status.textContent = 'Envoi…';
    try {
      let res;
      if (alertState.mode === 'subscribe') res = await window.Api.opportunities.alert(state.o.id, String(new FormData(form).get('email') || '').trim());
      else if (alertState.mode === 'confirm') res = await window.Api.opportunities.confirmAlert(alertState.token);
      else res = await window.Api.opportunities.stopAlert(alertState.token);
      status.classList.add('is-ok');
      status.textContent = (res && res.message) || 'C\'est fait.';
      if (alertState.mode === 'subscribe') track('opportunity_alert', state.o.id);
      submit.hidden = true;
      if (alertState.mode !== 'subscribe') {
        // Le jeton ne doit pas rester dans l'adresse (partage, favoris du navigateur)
        const url = new URL(window.location.href);
        url.searchParams.delete('alerte_confirmer');
        url.searchParams.delete('alerte_arreter');
        window.history.replaceState(null, '', url);
      }
    } catch (error) {
      status.classList.add('is-error');
      status.textContent = error.message || 'Impossible pour le moment. Réessaie plus tard.';
      submit.disabled = false;
    }
  }

  function bindAlert() {
    const dialog = document.getElementById('oppAlertDialog');
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog || event.target.closest('[data-close]')) dialog.close();
    });
    document.getElementById('oppAlertForm').addEventListener('submit', (event) => {
      event.preventDefault();
      sendAlert();
    });
    const params = new URLSearchParams(window.location.search);
    if (params.get('alerte_confirmer')) openAlert('confirm', params.get('alerte_confirmer'));
    else if (params.get('alerte_arreter')) openAlert('stop', params.get('alerte_arreter'));
  }

  function notFound(message) {
    document.getElementById('oppHead').innerHTML = '<h1>Annonce introuvable</h1>';
    document.getElementById('oppAside').innerHTML = '';
    document.getElementById('oppMain').innerHTML = `
      <div class="opp-empty">
        <span class="opp-empty-icon" aria-hidden="true">🔎</span>
        <strong>${esc(message)}</strong><br>Elle a peut-être été retirée ou remplacée par une nouvelle session.
        <div style="margin-top:1rem;"><a class="btn btn-primary" href="opportunites.html">Voir toutes les annonces</a></div>
      </div>`;
  }

  async function init() {
    if (!window.Api || !O) return;
    const params = new URLSearchParams(window.location.search);
    const key = (params.get('slug') || params.get('id') || '').slice(0, 120);
    if (!key) {
      window.location.replace('opportunites.html');
      return;
    }
    let o;
    try {
      const res = await window.Api.opportunities.getById(key);
      o = res && res.data;
    } catch (error) {
      notFound(error && /introuvable|non trouvée|404/i.test(error.message || '') ? 'Cette annonce est introuvable.' : 'Impossible de charger la fiche pour le moment.');
      return;
    }
    if (!o) { notFound('Cette annonce est introuvable.'); return; }
    state.o = o;

    setMeta(o);
    document.getElementById('oppHead').innerHTML = renderHead(o);
    document.getElementById('oppAside').innerHTML = renderAside(o);
    document.getElementById('oppMain').innerHTML = renderMain(o);
    bind(o);
    bindReport(o);
    bindAlert();
    track('opportunity_view', o.id, { category: o.category });

    try {
      const res = await window.Api.opportunities.getAll();
      state.all = (res && res.data) || [];
      renderSimilar(o);
    } catch (_) { /* les annonces similaires sont facultatives */ }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

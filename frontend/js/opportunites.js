/**
 * Page « Concours & opportunités » : liste filtrable des annonces publiées
 * (bourses, concours, examens, admissions) et fiche détaillée.
 * Toutes les annonces publiées sont chargées une fois, puis filtrées sur place.
 */
(function () {
  'use strict';

  const CATEGORY_LABELS = { BOURSE: '🎓 Bourse', CONCOURS: '🏆 Concours', EXAMEN: '📝 Examen', ADMISSION: '🏫 Admission' };
  const LEVEL_LABELS = { COLLEGE: 'Collège', LYCEE: 'Lycée', BACHELIER: 'Bachelier', ETUDIANT: 'Étudiant' };
  const DESTINATION_LABELS = { SENEGAL: '🇸🇳 Sénégal', AFRIQUE: '🌍 Afrique', INTERNATIONAL: '✈️ International' };
  const PHASE_LABELS = { OPEN: 'Ouvert', UPCOMING: 'À venir', CLOSED: 'Clôturé', RESULTS: 'Résultats publiés' };
  const FILTER_KEYS = ['category', 'level', 'destination', 'phase', 'search'];
  const DAY_MS = 86400000;

  const state = { all: [], filters: { category: '', level: '', destination: '', phase: 'ACTIVE', search: '' } };
  let grid, countEl, dialog, dialogContent;

  const esc = (value) => window.escapeHtml(value);

  // Dakar est à UTC+0 : les dates sont affichées en UTC pour tomber sur le bon jour
  function formatDay(value) {
    if (!value) return '';
    return new Date(value).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
  }

  function countdown(opportunity) {
    if (opportunity.phase === 'UPCOMING' && opportunity.openingDate) {
      return { text: `Ouverture le ${formatDay(opportunity.openingDate)}`, urgent: false };
    }
    if (opportunity.phase !== 'OPEN' || !opportunity.deadline) return null;
    const days = Math.floor((new Date(opportunity.deadline) - Date.now()) / DAY_MS);
    if (days <= 0) return { text: "Dernier jour aujourd'hui", urgent: true };
    if (days === 1) return { text: 'Plus que 1 jour', urgent: true };
    return { text: `Plus que ${days} jours`, urgent: days <= 7 };
  }

  function matches(opportunity) {
    const { category, level, destination, phase, search } = state.filters;
    if (category && opportunity.category !== category) return false;
    if (level && !(opportunity.levels || []).includes(level)) return false;
    if (destination && opportunity.destination !== destination) return false;
    if (phase === 'ACTIVE' && !['OPEN', 'UPCOMING'].includes(opportunity.phase)) return false;
    if (phase && phase !== 'ACTIVE' && opportunity.phase !== phase) return false;
    if (search) {
      const haystack = [opportunity.title, opportunity.organization, opportunity.summary, opportunity.country]
        .filter(Boolean).join(' ').toLowerCase();
      if (!haystack.includes(search.toLowerCase())) return false;
    }
    return true;
  }

  function badges(opportunity) {
    return `
      <span class="opp-badge opp-badge--${esc(opportunity.category)}">${esc(CATEGORY_LABELS[opportunity.category] || opportunity.category)}</span>
      <span class="opp-badge opp-phase--${esc(opportunity.phase)}">${esc(PHASE_LABELS[opportunity.phase] || '')}</span>
      ${opportunity.destination ? `<span class="opp-badge">${esc(DESTINATION_LABELS[opportunity.destination])}${opportunity.country ? ` · ${esc(opportunity.country)}` : ''}</span>` : ''}`;
  }

  function renderCard(opportunity) {
    const timer = countdown(opportunity);
    const levels = (opportunity.levels || []).map((l) => LEVEL_LABELS[l]).filter(Boolean).join(', ');
    const closed = ['CLOSED', 'RESULTS'].includes(opportunity.phase);
    return `
      <article class="opp-card${closed ? ' is-closed' : ''}">
        <div class="opp-badges">${badges(opportunity)}</div>
        <h3>${esc(opportunity.title)}</h3>
        <p class="opp-org">${esc(opportunity.organization)}</p>
        <p class="opp-summary">${esc(opportunity.summary)}</p>
        ${levels ? `<p class="opp-org" style="font-weight:500;">👤 ${esc(levels)}</p>` : ''}
        <div class="opp-deadline">
          <span>${opportunity.deadline ? `📅 Date limite : <strong>${esc(formatDay(opportunity.deadline))}</strong>` : '📅 Date limite non communiquée'}</span>
          ${timer ? `<span class="opp-countdown${timer.urgent ? ' is-urgent' : ''}">${esc(timer.text)}</span>` : ''}
        </div>
        <div class="opp-card-actions">
          <button type="button" class="btn btn-primary btn-sm" data-open="${esc(opportunity.id)}">Voir les détails</button>
        </div>
      </article>`;
  }

  function render() {
    const results = state.all.filter(matches);
    const total = state.all.length;
    countEl.textContent = total === 0
      ? ''
      : `${results.length} annonce${results.length > 1 ? 's' : ''} sur ${total}`;

    if (results.length === 0) {
      grid.innerHTML = `
        <div class="opp-empty">
          <span class="opp-empty-icon" aria-hidden="true">🔎</span>
          ${total === 0
            ? "<strong>Aucune annonce pour le moment.</strong><br>L'équipe du club publie ici les bourses, concours et examens dès qu'ils sont vérifiés. Reviens bientôt !"
            : '<strong>Aucune annonce ne correspond à ces filtres.</strong><br>Essaie un autre niveau, une autre destination ou le statut « Toutes ».'}
        </div>`;
      return;
    }
    grid.innerHTML = results.map(renderCard).join('');
  }

  function paragraphs(text) {
    return String(text).split(/\n{2,}|\r\n\r\n/).map((p) => `<p>${esc(p).replace(/\n/g, '<br>')}</p>`).join('');
  }

  function section(title, body) {
    return body ? `<section><h3>${title}</h3>${body}</section>` : '';
  }

  function renderDetail(o) {
    const levels = (o.levels || []).map((l) => LEVEL_LABELS[l]).filter(Boolean).join(', ');
    const timer = countdown(o);
    const today = new Date().toISOString().slice(0, 10);
    const keyDates = Array.isArray(o.keyDates) ? o.keyDates : [];
    const documents = (o.documents || []).filter(Boolean);
    const officialUrl = o.officialUrl ? window.safeUrl(o.officialUrl) : '';

    const facts = [
      ['Date limite', o.deadline ? formatDay(o.deadline) : 'Non communiquée'],
      o.openingDate ? ['Ouverture', formatDay(o.openingDate)] : null,
      levels ? ['Public', levels] : null,
      o.destination ? ['Destination', `${DESTINATION_LABELS[o.destination]}${o.country ? ` · ${o.country}` : ''}`] : null,
    ].filter(Boolean);

    return `
      <div class="opp-dialog-head">
        <div>
          <div class="opp-badges">${badges(o)}</div>
          <h2 id="oppDialogTitle">${esc(o.title)}</h2>
          <p>${esc(o.organization)}</p>
        </div>
        <button type="button" class="opp-dialog-close" data-close aria-label="Fermer">&times;</button>
      </div>
      <div class="opp-dialog-body">
        <div class="opp-facts">
          ${facts.map(([label, value]) => `<div class="opp-fact"><span>${esc(label)}</span><strong>${esc(value)}</strong></div>`).join('')}
          ${timer ? `<div class="opp-fact"><span>Temps restant</span><strong class="opp-countdown${timer.urgent ? ' is-urgent' : ''}">${esc(timer.text)}</strong></div>` : ''}
        </div>
        ${section('En bref', paragraphs(o.summary))}
        ${o.details ? section('Détails', paragraphs(o.details)) : ''}
        ${o.eligibility ? section("Conditions d'éligibilité", paragraphs(o.eligibility)) : ''}
        ${documents.length ? section('Documents à préparer', `<ul>${documents.map((d) => `<li>${esc(d)}</li>`).join('')}</ul>`) : ''}
        ${o.benefits ? section('Avantages / financement', paragraphs(o.benefits)) : ''}
        ${keyDates.length ? section('Dates importantes', `<ul class="opp-timeline">${keyDates.map((d) => `<li class="${d.date < today ? 'is-past' : ''}"><time datetime="${esc(d.date)}">${esc(formatDay(`${d.date}T00:00:00Z`))}</time><span>${esc(d.label)}</span></li>`).join('')}</ul>`) : ''}
        <div class="opp-official">
          <small>${o.lastVerifiedAt ? `✅ Vérifié par le club le ${esc(formatDay(o.lastVerifiedAt))}` : ''}<br>Les informations officielles font foi.</small>
          ${officialUrl ? `<a class="btn btn-primary" href="${esc(officialUrl)}" target="_blank" rel="noopener noreferrer nofollow">Site officiel ↗</a>` : ''}
        </div>
      </div>`;
  }

  function setUrlParam(key, value) {
    const url = new URL(window.location.href);
    if (value) url.searchParams.set(key, value); else url.searchParams.delete(key);
    window.history.replaceState(null, '', url);
  }

  async function openDetail(id) {
    let opportunity = state.all.find((o) => o.id === id);
    try {
      // La liste n'embarque pas les champs longs : on charge la fiche complète
      const res = await window.Api.opportunities.getById(id);
      if (res && res.data) opportunity = res.data;
    } catch (_) {
      if (!opportunity) return;
    }
    if (!opportunity) return;
    dialogContent.innerHTML = renderDetail(opportunity);
    if (!dialog.open) dialog.showModal();
    setUrlParam('id', id);
  }

  function closeDetail() {
    if (dialog.open) dialog.close();
  }

  function syncControls() {
    document.querySelectorAll('#oppCategoryPills .opp-pill').forEach((pill) => {
      pill.setAttribute('aria-pressed', String(pill.dataset.category === state.filters.category));
    });
    document.getElementById('oppLevel').value = state.filters.level;
    document.getElementById('oppDestination').value = state.filters.destination;
    document.getElementById('oppPhase').value = state.filters.phase;
    document.getElementById('oppSearch').value = state.filters.search;
  }

  function setFilter(key, value) {
    state.filters[key] = value;
    setUrlParam(key, key === 'phase' && value === 'ACTIVE' ? '' : (key === 'phase' && value === '' ? 'ALL' : value));
    render();
  }

  function readUrl() {
    const params = new URLSearchParams(window.location.search);
    FILTER_KEYS.forEach((key) => {
      const value = params.get(key);
      if (value === null) return;
      state.filters[key] = key === 'phase' && value === 'ALL' ? '' : value.slice(0, 100);
    });
    return params.get('id');
  }

  function bindEvents() {
    document.getElementById('oppCategoryPills').addEventListener('click', (event) => {
      const pill = event.target.closest('.opp-pill');
      if (!pill) return;
      setFilter('category', pill.dataset.category);
      syncControls();
    });
    [['oppLevel', 'level'], ['oppDestination', 'destination'], ['oppPhase', 'phase']].forEach(([id, key]) => {
      document.getElementById(id).addEventListener('change', (event) => setFilter(key, event.target.value));
    });
    let searchTimer;
    document.getElementById('oppSearch').addEventListener('input', (event) => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => setFilter('search', event.target.value.trim()), 200);
    });

    grid.addEventListener('click', (event) => {
      const button = event.target.closest('[data-open]');
      if (button) openDetail(button.dataset.open);
    });
    dialog.addEventListener('click', (event) => {
      // Clic sur le fond (hors du contenu) ou sur le bouton fermer
      if (event.target === dialog || event.target.closest('[data-close]')) closeDetail();
    });
    dialog.addEventListener('close', () => setUrlParam('id', ''));
  }

  async function init() {
    grid = document.getElementById('oppGrid');
    countEl = document.getElementById('oppCount');
    dialog = document.getElementById('oppDialog');
    dialogContent = document.getElementById('oppDialogContent');
    if (!grid || !window.Api) return;

    const initialId = readUrl();
    syncControls();
    bindEvents();

    try {
      const res = await window.Api.opportunities.getAll();
      state.all = (res && res.data) || [];
      render();
    } catch (error) {
      countEl.textContent = '';
      grid.innerHTML = `
        <div class="opp-empty">
          <span class="opp-empty-icon" aria-hidden="true">⚠️</span>
          <strong>Impossible de charger les annonces pour le moment.</strong><br>Vérifie ta connexion puis recharge la page.
        </div>`;
    }

    if (initialId) openDetail(initialId);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

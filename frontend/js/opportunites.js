/**
 * Page « Concours & opportunités » : toutes les annonces publiées sont chargées une fois,
 * puis filtrées, triées et affichées sur place (fiches groupées par statut ou calendrier).
 * Les filtres sont reflétés dans l'adresse : une recherche se partage par simple lien.
 */
(function () {
  'use strict';

  const O = window.Opp;
  const esc = (value) => O.esc(value);

  const PHASE_FILTERS = [
    ['ACTIVE', 'Ouvertes et à venir'],
    ['OPEN', 'Candidatures ouvertes'],
    ['SOON', 'Ouvrent bientôt'],
    ['NEXT', 'Prochaine session attendue'],
    ['CLOSED', 'Clôturées'],
    ['', 'Toutes'],
  ];
  const WITHIN = [['', 'Peu importe'], ['7', 'Dans 7 jours'], ['30', 'Dans 30 jours'], ['90', 'Dans 3 mois']];
  const GROUPS = [
    { key: 'OPEN', title: 'Candidatures ouvertes', icon: '🟢', hint: 'Dépose ton dossier avant la date limite.' },
    { key: 'SOON', title: 'Ouvrent bientôt', icon: '🔵', hint: 'Les dates sont annoncées : prépare ton dossier dès maintenant.' },
    { key: 'NEXT', title: 'Prochaine session attendue', icon: '🔁', hint: "La dernière session est passée : voici le calendrier habituel pour t'organiser." },
    { key: 'CLOSED', title: 'Clôturées et résultats', icon: '⚪', hint: 'Pour information et pour préparer la session suivante.' },
  ];
  const DEFAULTS = {
    category: '', phase: 'ACTIVE', within: '', level: '', series: '', domains: [], destination: '',
    funded: false, free: false, favorites: false, search: '',
  };
  const SOON_DAYS = 60;
  // Fiches affichées par groupe avant « Afficher les autres »
  const GROUP_PREVIEW = 6;

  const state = { all: [], filters: { ...DEFAULTS, domains: [] }, sort: 'relevance', view: 'cards', expanded: new Set() };
  let els = {};

  const normalize = (text) => String(text || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

  function phaseGroup(o) {
    if (o.nextSession) return 'NEXT';
    if (o.phase === 'UPCOMING') return 'SOON';
    if (o.phase === 'OPEN') return 'OPEN';
    return 'CLOSED';
  }

  // Une annonce correspond-elle aux filtres ? `skip` ignore un groupe (calcul des compteurs)
  function matches(o, skip) {
    const f = state.filters;
    if (skip !== 'category' && f.category && o.category !== f.category) return false;
    if (skip !== 'phase' && f.phase) {
      if (f.phase === 'ACTIVE' ? !O.isActive(o) : phaseGroup(o) !== f.phase) return false;
    }
    if (skip !== 'within' && f.within) {
      const days = o.phase === 'OPEN' && o.deadline ? O.daysUntil(o.deadline) : null;
      if (days === null || days < 0 || days > Number(f.within)) return false;
    }
    if (skip !== 'level' && f.level && !(o.levels || []).includes(f.level)) return false;
    if (skip !== 'series' && f.series && !(o.series || []).includes(f.series)) return false;
    if (skip !== 'domains' && f.domains.length && !f.domains.some((d) => (o.domains || []).includes(d))) return false;
    if (skip !== 'destination' && f.destination && o.destination !== f.destination) return false;
    if (skip !== 'funded' && f.funded && o.funding !== 'FULL') return false;
    if (skip !== 'free' && f.free && !O.isFree(o)) return false;
    if (skip !== 'favorites' && f.favorites && !O.favorites.has(o.id)) return false;
    if (skip !== 'search' && f.search) {
      const haystack = normalize([
        o.title, o.organization, o.summary, o.country, o.location, o.sessionLabel,
        ...(o.series || []), ...(o.domains || []).map((d) => O.DOMAIN[d]), (O.CATEGORY[o.category] || {}).label,
      ].filter(Boolean).join(' '));
      if (!normalize(f.search).split(/\s+/).filter(Boolean).every((word) => haystack.includes(word))) return false;
    }
    return true;
  }

  const count = (skip, test) => state.all.filter((o) => matches(o, skip) && test(o)).length;

  // ---------- Filtres ----------
  function radioGroup(name, title, options) {
    return `
      <fieldset class="opp-fgroup">
        <legend>${title}</legend>
        ${options.map(([value, label, n]) => `
          <label class="opp-option${n === 0 && state.filters[name] !== value ? ' is-empty' : ''}">
            <input type="radio" name="opp-${name}" value="${esc(value)}" ${state.filters[name] === value ? 'checked' : ''}>
            <span>${label}</span>${n != null ? `<em>${n}</em>` : ''}
          </label>`).join('')}
      </fieldset>`;
  }

  function renderFilters() {
    const f = state.filters;
    const categories = Object.keys(O.CATEGORY).filter((c) => state.all.some((o) => o.category === c));
    const allSeries = [...new Set(state.all.flatMap((o) => o.series || []))].sort((a, b) => a.localeCompare(b, 'fr', { numeric: true }));
    const domains = Object.keys(O.DOMAIN).filter((d) => state.all.some((o) => (o.domains || []).includes(d)));
    const freeCount = count('free', O.isFree);
    const favCount = count('favorites', (o) => O.favorites.has(o.id));

    els.groups.innerHTML = `
      ${radioGroup('category', 'Type', [['', 'Tout', count('category', () => true)],
        ...categories.map((c) => [c, `${O.CATEGORY[c].icon} ${O.CATEGORY[c].plural}`, count('category', (o) => o.category === c)])])}
      ${radioGroup('phase', 'Statut', PHASE_FILTERS.map(([value, label]) => [value, label,
        count('phase', (o) => (value === '' ? true : value === 'ACTIVE' ? O.isActive(o) : phaseGroup(o) === value))]))}
      ${radioGroup('within', 'Date limite', WITHIN.map(([value, label]) => [value, label, value ? count('within', (o) => {
        const days = o.phase === 'OPEN' && o.deadline ? O.daysUntil(o.deadline) : null;
        return days !== null && days >= 0 && days <= Number(value);
      }) : null]))}
      <fieldset class="opp-fgroup">
        <legend>Mon profil</legend>
        <label class="opp-select">Mon niveau
          <select id="oppLevel">
            <option value="">Tous les niveaux</option>
            ${Object.entries(O.LEVEL).map(([value, label]) => `<option value="${value}" ${f.level === value ? 'selected' : ''}>${esc(label)} (${count('level', (o) => (o.levels || []).includes(value))})</option>`).join('')}
          </select>
        </label>
        <label class="opp-select">Ma série du bac
          <select id="oppSeries">
            <option value="">Toutes les séries</option>
            ${allSeries.map((s) => `<option value="${esc(s)}" ${f.series === s ? 'selected' : ''}>${esc(s)} (${count('series', (o) => (o.series || []).includes(s))})</option>`).join('')}
          </select>
        </label>
        <p class="opp-fhint">La série n'est indiquée que pour les concours qui la précisent.</p>
      </fieldset>
      <fieldset class="opp-fgroup">
        <legend>Domaine</legend>
        ${domains.map((d) => {
          const n = count('domains', (o) => (o.domains || []).includes(d));
          return `<label class="opp-option${n === 0 && !f.domains.includes(d) ? ' is-empty' : ''}"><input type="checkbox" name="opp-domain" value="${d}" ${f.domains.includes(d) ? 'checked' : ''}><span>${esc(O.DOMAIN[d])}</span><em>${n}</em></label>`;
        }).join('')}
      </fieldset>
      ${radioGroup('destination', 'Destination', [['', 'Toutes', null],
        ...Object.entries(O.DESTINATION).map(([value, label]) => [value, label, count('destination', (o) => o.destination === value)])])}
      <fieldset class="opp-fgroup">
        <legend>Options</legend>
        <label class="opp-option"><input type="checkbox" name="opp-flag" value="funded" ${f.funded ? 'checked' : ''}><span>💰 Bourses complètes</span><em>${count('funded', (o) => o.funding === 'FULL')}</em></label>
        ${freeCount || f.free ? `<label class="opp-option"><input type="checkbox" name="opp-flag" value="free" ${f.free ? 'checked' : ''}><span>Sans frais de dossier</span><em>${freeCount}</em></label>` : ''}
        <label class="opp-option"><input type="checkbox" name="opp-flag" value="favorites" ${f.favorites ? 'checked' : ''}><span>★ Mes favoris</span><em>${favCount}</em></label>
      </fieldset>`;
  }

  function activeFilters() {
    const f = state.filters;
    const list = [];
    if (f.search) list.push(['search', `« ${f.search} »`]);
    if (f.category) list.push(['category', O.CATEGORY[f.category].plural]);
    if (f.phase !== DEFAULTS.phase) list.push(['phase', (PHASE_FILTERS.find(([v]) => v === f.phase) || [])[1]]);
    if (f.within) list.push(['within', `Clôture ${WITHIN.find(([v]) => v === f.within)[1].toLowerCase()}`]);
    if (f.level) list.push(['level', O.LEVEL[f.level]]);
    if (f.series) list.push(['series', `Série ${f.series}`]);
    f.domains.forEach((d) => list.push([`domain:${d}`, O.DOMAIN[d]]));
    if (f.destination) list.push(['destination', O.DESTINATION[f.destination]]);
    if (f.funded) list.push(['funded', 'Bourses complètes']);
    if (f.free) list.push(['free', 'Sans frais de dossier']);
    if (f.favorites) list.push(['favorites', 'Mes favoris']);
    return list;
  }

  function renderActive() {
    const list = activeFilters();
    els.filterCount.textContent = list.length ? `(${list.length})` : '';
    els.active.innerHTML = list.length
      ? `${list.map(([key, label]) => `<button type="button" class="opp-active-chip" data-remove="${esc(key)}" aria-label="Retirer le filtre ${esc(label)}">${esc(label)} <span aria-hidden="true">×</span></button>`).join('')}
         <button type="button" class="opp-active-reset" data-reset>Tout effacer</button>`
      : '';
  }

  // ---------- Résultats ----------
  function sortItems(list) {
    const byTitle = (a, b) => a.title.localeCompare(b.title, 'fr');
    const nextDate = (o) => {
      if (o.phase === 'OPEN' && o.deadline) return O.dayKey(o.deadline);
      if (o.phase === 'UPCOMING' && !o.nextSession && o.openingDate) return O.dayKey(o.openingDate);
      return '9999';
    };
    const copy = [...list];
    if (state.sort === 'alpha') return copy.sort(byTitle);
    if (state.sort === 'verified') return copy.sort((a, b) => String(b.lastVerifiedAt || '').localeCompare(String(a.lastVerifiedAt || '')) || byTitle(a, b));
    if (state.sort === 'deadline') return copy.sort((a, b) => nextDate(a).localeCompare(nextDate(b)) || byTitle(a, b));
    // Par statut : l'ordre du serveur (date limite la plus proche d'abord) est conservé dans chaque groupe
    return copy;
  }

  function renderCards(results) {
    if (state.sort !== 'relevance') return `<div class="opp-grid">${sortItems(results).map(O.renderCard).join('')}</div>`;
    return GROUPS.map((group) => {
      const items = results.filter((o) => phaseGroup(o) === group.key);
      // Sessions passées : la prochaine attendue d'abord
      if (group.key === 'NEXT') {
        const key = (o) => (O.expectedNext(o) || { date: '9999' }).date;
        items.sort((a, b) => key(a).localeCompare(key(b)) || a.title.localeCompare(b.title, 'fr'));
      }
      if (!items.length) return '';
      return `
        <section class="opp-group" aria-labelledby="opp-group-${group.key}">
          <header class="opp-group-head">
            <h2 id="opp-group-${group.key}"><span aria-hidden="true">${group.icon}</span> ${group.title} <span class="opp-group-count">${items.length}</span></h2>
            <p>${group.hint}</p>
          </header>
          <div class="opp-grid">${(state.expanded.has(group.key) ? items : items.slice(0, GROUP_PREVIEW)).map(O.renderCard).join('')}</div>
          ${items.length > GROUP_PREVIEW && !state.expanded.has(group.key)
            ? `<div class="opp-more"><button type="button" class="btn btn-outline" data-expand="${group.key}">Afficher les ${items.length - GROUP_PREVIEW} autres</button></div>` : ''}
        </section>`;
    }).join('');
  }

  const EVENT_TAGS = { OPENING: ['Ouverture', 'opening'], DEADLINE: ['Date limite', 'deadline'], KEY: ['Étape', 'key'] };

  function eventRow(e, o, { withYear = false } = {}) {
    const date = O.toDate(e.date);
    const days = O.daysUntil(e.date);
    const [tag, cls] = EVENT_TAGS[e.type];
    return `
      <li class="opp-event opp-event--${cls}">
        <time class="opp-event-date" datetime="${esc(e.date)}">
          <strong>${date.getUTCDate()}</strong>
          <span>${esc(date.toLocaleDateString('fr-FR', { month: 'short', timeZone: 'UTC', ...(withYear ? {} : { weekday: 'short' }) }))}</span>
        </time>
        <div class="opp-event-body">
          <span class="opp-event-tag">${tag}</span>
          <a href="${esc(O.detailUrl(o))}">${esc(o.title)}</a>
          <small>${esc(e.label)}</small>
        </div>
        <span class="opp-event-in${days <= 7 ? ' is-urgent' : ''}">${days === 0 ? "Aujourd'hui" : days === 1 ? 'Demain' : `J-${days}`}</span>
      </li>`;
  }

  function renderCalendar(results) {
    const limit = new Date(Date.now() + 365 * 86400000).toISOString().slice(0, 10);
    const all = results.flatMap((o) => O.events(o).filter((e) => e.date <= limit).map((e) => ({ e, o })))
      .sort((a, b) => a.e.date.localeCompare(b.e.date));
    const months = new Map();
    all.forEach((entry) => {
      const key = entry.e.date.slice(0, 7);
      if (!months.has(key)) months.set(key, []);
      months.get(key).push(entry);
    });
    const waiting = results.filter((o) => o.nextSession || (O.isActive(o) && !O.events(o).length));
    return `
      <p class="opp-calendar-note">Toutes les dates à venir des annonces filtrées, sur les 12 prochains mois. Ajoute une fiche à ton agenda depuis sa page (bouton « Ajouter à mon agenda »).</p>
      ${months.size ? [...months.entries()].map(([key, entries]) => `
        <section class="opp-month">
          <h2>${esc(O.toDate(`${key}-01`).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric', timeZone: 'UTC' }))}</h2>
          <ol class="opp-events">${entries.map(({ e, o }) => eventRow(e, o)).join('')}</ol>
        </section>`).join('')
        : '<div class="opp-empty"><span class="opp-empty-icon" aria-hidden="true">📅</span><strong>Aucune date à venir pour ces filtres.</strong><br>Les prochaines sessions attendues sont listées ci-dessous.</div>'}
      ${waiting.length ? `
        <section class="opp-month opp-month--waiting">
          <h2>🔁 Dates pas encore publiées</h2>
          <p class="opp-calendar-note">La session précédente est passée ou le calendrier n'est pas encore annoncé. Période habituelle, pour t'organiser :</p>
          <ul class="opp-waiting">${waiting
            .map((o) => [O.expectedNext(o), o])
            .sort((a, b) => (a[0] ? a[0].date : '9999').localeCompare(b[0] ? b[0].date : '9999'))
            .map(([next, o]) => `<li><a href="${esc(O.detailUrl(o))}">${esc(o.title)}</a><span>${next ? `Attendue vers ${esc(next.label)} · ` : ''}${esc(o.usualPeriod || 'Dates annoncées par l\'organisme')}</span></li>`).join('')}</ul>
        </section>` : ''}`;
  }

  function render() {
    const results = state.all.filter((o) => matches(o));
    const total = state.all.length;
    els.count.innerHTML = total ? `<strong>${results.length}</strong> annonce${results.length > 1 ? 's' : ''} sur ${total}` : '';
    els.apply.textContent = `Voir ${results.length} résultat${results.length > 1 ? 's' : ''}`;
    renderFilters();
    renderActive();
    document.querySelectorAll('.opp-view [data-view]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.view === state.view)));
    els.sort.value = state.sort;
    els.sort.closest('label').hidden = state.view === 'calendar';

    if (!results.length) {
      els.results.innerHTML = `
        <div class="opp-empty">
          <span class="opp-empty-icon" aria-hidden="true">🔎</span>
          ${total === 0
            ? "<strong>Aucune annonce pour le moment.</strong><br>L'équipe du club publie ici les concours, bourses et admissions dès qu'ils sont vérifiés."
            : `<strong>Aucune annonce ne correspond à ces filtres.</strong><br>${state.filters.favorites ? 'Ajoute des annonces à tes favoris avec l\'étoile ☆.' : 'Retire un filtre ou choisis le statut « Toutes ».'}
               <div style="margin-top:1rem;"><button type="button" class="btn btn-outline btn-sm" data-reset>Réinitialiser les filtres</button></div>`}
        </div>`;
      return;
    }
    els.results.innerHTML = state.view === 'calendar' ? renderCalendar(results) : renderCards(results);
  }

  function renderStats() {
    const open = state.all.filter((o) => o.phase === 'OPEN');
    const closingSoon = open.filter((o) => o.deadline && O.daysUntil(o.deadline) <= 30).length;
    const stats = [
      [open.length, open.length > 1 ? 'candidatures ouvertes' : 'candidature ouverte', { phase: 'OPEN' }],
      closingSoon
        ? [closingSoon, 'clôturent sous 30 jours', { phase: 'OPEN', within: '30' }]
        : [state.all.filter((o) => o.nextSession).length, 'sessions annuelles suivies', { phase: 'NEXT' }],
      [state.all.filter((o) => o.category === 'CONCOURS').length, 'concours', { category: 'CONCOURS', phase: '' }],
      [state.all.filter((o) => ['BOURSE', 'PROGRAMME'].includes(o.category)).length, 'bourses et programmes', { category: 'BOURSE', phase: '' }],
    ];
    els.stats.innerHTML = stats.map(([n, label, apply], i) => `
      <button type="button" class="opp-stat" data-stat="${i}"><strong>${n}</strong><span>${label}</span></button>`).join('');
    els.stats.onclick = (event) => {
      const button = event.target.closest('[data-stat]');
      if (!button) return;
      state.filters = { ...DEFAULTS, domains: [], ...stats[Number(button.dataset.stat)][2] };
      update();
      document.getElementById('oppResults').scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
  }

  function renderSoon() {
    const limit = new Date(Date.now() + SOON_DAYS * 86400000).toISOString().slice(0, 10);
    const entries = state.all
      .flatMap((o) => O.events(o).filter((e) => e.date <= limit).map((e) => ({ e, o })))
      .sort((a, b) => a.e.date.localeCompare(b.e.date))
      .slice(0, 8);
    els.soonSection.hidden = entries.length === 0;
    els.soon.innerHTML = entries.map(({ e, o }) => eventRow(e, o)).join('');
  }

  // ---------- Adresse (filtres partageables) ----------
  function writeUrl() {
    const f = state.filters;
    const url = new URL(window.location.href);
    ['category', 'phase', 'within', 'level', 'series', 'destination', 'q', 'domain', 'funded', 'free', 'fav', 'sort', 'view', 'search', 'id']
      .forEach((key) => url.searchParams.delete(key));
    const set = (key, value) => { if (value) url.searchParams.set(key, value); };
    set('q', f.search);
    set('category', f.category);
    if (f.phase !== DEFAULTS.phase) url.searchParams.set('phase', f.phase || 'ALL');
    set('within', f.within);
    set('level', f.level);
    set('series', f.series);
    set('domain', f.domains.join(','));
    set('destination', f.destination);
    set('funded', f.funded ? '1' : '');
    set('free', f.free ? '1' : '');
    set('fav', f.favorites ? '1' : '');
    if (state.sort !== 'relevance') set('sort', state.sort);
    if (state.view !== 'cards') set('view', state.view);
    window.history.replaceState(null, '', url);
  }

  function readUrl() {
    const p = new URLSearchParams(window.location.search);
    const f = state.filters;
    const get = (key) => (p.get(key) || '').slice(0, 100);
    f.search = get('q') || get('search');
    if (O.CATEGORY[get('category')]) f.category = get('category');
    if (p.has('phase')) f.phase = get('phase') === 'ALL' ? '' : (PHASE_FILTERS.some(([v]) => v === get('phase')) ? get('phase') : (get('phase') === 'UPCOMING' ? 'SOON' : DEFAULTS.phase));
    if (WITHIN.some(([v]) => v === get('within'))) f.within = get('within');
    if (O.LEVEL[get('level')]) f.level = get('level');
    f.series = get('series');
    f.domains = get('domain').split(',').filter((d) => O.DOMAIN[d]);
    if (O.DESTINATION[get('destination')]) f.destination = get('destination');
    f.funded = p.get('funded') === '1';
    f.free = p.get('free') === '1';
    f.favorites = p.get('fav') === '1';
    if (['deadline', 'verified', 'alpha'].includes(get('sort'))) state.sort = get('sort');
    if (get('view') === 'calendar') state.view = 'calendar';
  }

  function update() {
    // Garde le focus sur le contrôle utilisé (la colonne de filtres est redessinée)
    const focused = document.activeElement;
    const focusKey = focused && focused.closest && focused.closest('#oppFilterGroups') ? `${focused.name || focused.id}|${focused.value}` : null;
    writeUrl();
    render();
    els.search.value = state.filters.search;
    if (focusKey) {
      const [name, value] = focusKey.split('|');
      const target = [...els.groups.querySelectorAll('input, select')].find((el) => (el.name || el.id) === name && (el.tagName === 'SELECT' || el.value === value));
      if (target) target.focus();
    }
  }

  function removeFilter(key) {
    const f = state.filters;
    if (key.startsWith('domain:')) f.domains = f.domains.filter((d) => d !== key.slice(7));
    else if (key in DEFAULTS) f[key] = Array.isArray(DEFAULTS[key]) ? [] : DEFAULTS[key];
    update();
  }

  function reset() {
    state.filters = { ...DEFAULTS, domains: [] };
    update();
  }

  function setDrawer(open) {
    // Le panneau mobile est rattaché au <body> : les animations de section (transform)
    // le positionneraient sinon par rapport à la section et non à l'écran
    if (open && els.sidebar.parentNode !== document.body) {
      els.sidebarHome = els.sidebar.parentNode;
      document.body.appendChild(els.sidebar);
    } else if (!open && els.sidebarHome && els.sidebar.parentNode === document.body) {
      els.sidebarHome.insertBefore(els.sidebar, els.sidebarHome.firstChild);
    }
    els.sidebar.classList.toggle('is-open', open);
    document.body.classList.toggle('opp-drawer-open', open);
    els.open.setAttribute('aria-expanded', String(open));
    if (open) els.sidebar.querySelector('input, select, button')?.focus();
  }

  function bind() {
    els.groups.addEventListener('change', (event) => {
      const input = event.target;
      const f = state.filters;
      if (input.id === 'oppLevel') f.level = input.value;
      else if (input.id === 'oppSeries') f.series = input.value;
      else if (input.name === 'opp-domain') f.domains = [...els.groups.querySelectorAll('input[name="opp-domain"]:checked')].map((x) => x.value);
      else if (input.name === 'opp-flag') f[input.value] = input.checked;
      else if (input.name && input.name.startsWith('opp-')) f[input.name.slice(4)] = input.value;
      update();
    });

    let timer;
    els.search.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(() => { state.filters.search = els.search.value.trim(); writeUrl(); render(); }, 200);
    });
    document.getElementById('oppSearchForm').addEventListener('submit', (event) => {
      event.preventDefault();
      state.filters.search = els.search.value.trim();
      update();
      document.getElementById('oppResults').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    els.sort.addEventListener('change', () => { state.sort = els.sort.value; update(); });
    document.querySelector('.opp-view').addEventListener('click', (event) => {
      const button = event.target.closest('[data-view]');
      if (!button) return;
      state.view = button.dataset.view;
      update();
    });

    document.addEventListener('click', (event) => {
      const remove = event.target.closest('[data-remove]');
      if (remove) { removeFilter(remove.dataset.remove); return; }
      if (event.target.closest('[data-reset]')) { reset(); return; }
      const expand = event.target.closest('[data-expand]');
      if (expand) { state.expanded.add(expand.dataset.expand); render(); return; }
      const fav = event.target.closest('[data-fav]');
      if (fav) {
        const on = O.favorites.toggle(fav.dataset.fav);
        if (state.filters.favorites) { update(); return; }
        fav.setAttribute('aria-pressed', String(on));
        fav.textContent = on ? '★' : '☆';
        fav.setAttribute('aria-label', on ? 'Retirer des favoris' : 'Ajouter aux favoris');
        renderFilters();
      }
    });
    document.getElementById('oppReset').addEventListener('click', reset);

    els.open.addEventListener('click', () => setDrawer(true));
    document.getElementById('oppFiltersClose').addEventListener('click', () => setDrawer(false));
    els.apply.addEventListener('click', () => {
      setDrawer(false);
      document.getElementById('oppResults').scrollIntoView({ block: 'start' });
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && els.sidebar.classList.contains('is-open')) setDrawer(false);
    });
  }

  async function init() {
    // Anciens liens partagés (fiche ouverte dans une fenêtre) : redirection vers la page de la fiche
    const legacyId = new URLSearchParams(window.location.search).get('id');
    if (legacyId) {
      window.location.replace(`opportunite.html?id=${encodeURIComponent(legacyId)}`);
      return;
    }
    els = {
      results: document.getElementById('oppResults'),
      count: document.getElementById('oppCount'),
      groups: document.getElementById('oppFilterGroups'),
      active: document.getElementById('oppActive'),
      filterCount: document.getElementById('oppFilterCount'),
      search: document.getElementById('oppSearch'),
      sort: document.getElementById('oppSort'),
      stats: document.getElementById('oppStats'),
      soon: document.getElementById('oppSoon'),
      soonSection: document.getElementById('oppSoonSection'),
      sidebar: document.getElementById('oppSidebar'),
      open: document.getElementById('oppFiltersOpen'),
      apply: document.getElementById('oppFiltersApply'),
    };
    if (!els.results || !window.Api || !O) return;

    readUrl();
    els.search.value = state.filters.search;
    bind();

    try {
      const res = await window.Api.opportunities.getAll();
      state.all = (res && res.data) || [];
    } catch (error) {
      els.count.textContent = '';
      els.results.innerHTML = `
        <div class="opp-empty">
          <span class="opp-empty-icon" aria-hidden="true">⚠️</span>
          <strong>Impossible de charger les annonces pour le moment.</strong><br>Vérifie ta connexion puis recharge la page.
        </div>`;
      return;
    }
    renderStats();
    renderSoon();
    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

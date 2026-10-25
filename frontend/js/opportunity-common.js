/**
 * Rubrique « Concours & opportunités » : briques partagées par la liste
 * (opportunites.html) et la fiche détaillée (opportunite.html).
 * Libellés, dates, phases, favoris, export agenda (.ics) et carte d'annonce.
 */
(function () {
  'use strict';

  const CATEGORY = {
    CONCOURS: { label: 'Concours', plural: 'Concours', icon: '🏆' },
    BOURSE: { label: 'Bourse', plural: 'Bourses', icon: '🎓' },
    ADMISSION: { label: 'Admission', plural: 'Admissions', icon: '🏫' },
    STAGE: { label: 'Stage', plural: 'Stages', icon: '💼' },
    PROGRAMME: { label: 'Programme', plural: 'Programmes', icon: '🌍' },
    EXAMEN: { label: 'Examen', plural: 'Examens', icon: '📝' },
  };
  const LEVEL = {
    PRIMAIRE: 'CM2', COLLEGE: 'Collège (BFEM)', LYCEE: 'Terminale', BACHELIER: 'Bachelier', ETUDIANT: 'Étudiant',
    DIPLOME: 'Diplômé (licence/master)', PROFESSIONNEL: 'Professionnel',
  };
  const DESTINATION = { SENEGAL: '🇸🇳 Sénégal', AFRIQUE: '🌍 Afrique', INTERNATIONAL: '✈️ International' };
  const DOMAIN = {
    PLURIDISCIPLINAIRE: 'Toutes filières',
    INGENIERIE: 'Ingénierie & technologie',
    NUMERIQUE: 'Numérique & télécoms',
    SCIENCES: 'Sciences & recherche',
    SANTE: 'Santé',
    DEFENSE: 'Défense & sécurité',
    ENSEIGNEMENT: 'Enseignement',
    ADMINISTRATION: 'Administration, droit & justice',
    ECONOMIE: 'Économie, gestion & statistique',
    AGRICULTURE: 'Agriculture, pêche & environnement',
    COMMUNICATION: 'Journalisme & information',
    SPORT: 'Sport & animation',
  };
  const FUNDING = { FULL: 'Bourse complète', PARTIAL: 'Financement partiel', NONE: 'Sans financement' };
  const PHASE = { OPEN: 'Candidatures ouvertes', UPCOMING: 'À venir', CLOSED: 'Clôturé', RESULTS: 'Résultats publiés', NEXT: 'Prochaine session' };

  const DAY_MS = 86400000;
  // Au-delà, l'annonce est signalée comme « à revérifier » au public
  const STALE_DAYS = 120;

  const esc = (value) => window.escapeHtml(value == null ? '' : String(value));

  // Dakar est à UTC+0 : toutes les dates sont lues et affichées en UTC
  function toDate(value) {
    if (!value) return null;
    return /^\d{4}-\d{2}-\d{2}$/.test(value) ? new Date(`${value}T00:00:00Z`) : new Date(value);
  }
  function formatDay(value, options) {
    const date = toDate(value);
    return date ? date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC', ...options }) : '';
  }
  const todayKey = () => new Date().toISOString().slice(0, 10);
  const dayKey = (value) => (value ? toDate(value).toISOString().slice(0, 10) : '');
  function daysUntil(value) {
    const date = toDate(value);
    if (!date) return null;
    return Math.round((Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()) - Date.parse(`${todayKey()}T00:00:00Z`)) / DAY_MS);
  }

  const phaseKey = (o) => (o.nextSession ? 'NEXT' : o.phase);
  const isActive = (o) => ['OPEN', 'UPCOMING'].includes(o.phase);

  function countdown(o) {
    if (o.nextSession) return null;
    if (o.phase === 'UPCOMING' && o.openingDate) {
      const days = daysUntil(o.openingDate);
      return { text: days <= 1 ? 'Ouvre demain' : `Ouvre dans ${days} jours`, short: `J-${days}`, urgent: false };
    }
    if (o.phase !== 'OPEN' || !o.deadline) return null;
    const days = daysUntil(o.deadline);
    if (days <= 0) return { text: "Dernier jour aujourd'hui", short: 'Dernier jour', urgent: true };
    if (days === 1) return { text: 'Clôture demain', short: 'J-1', urgent: true };
    return { text: `Plus que ${days} jours`, short: `J-${days}`, urgent: days <= 7 };
  }

  function verification(o) {
    if (!o.lastVerifiedAt) return null;
    const age = -daysUntil(o.lastVerifiedAt);
    return { date: formatDay(o.lastVerifiedAt), stale: age > STALE_DAYS, age };
  }

  // Session annuelle passée : date probable de la prochaine, au même moment de l'année que la dernière
  function expectedNext(o) {
    if (!o.nextSession) return null;
    const ref = o.deadline ? dayKey(o.deadline) : ((Array.isArray(o.keyDates) && o.keyDates[0]) || {}).date;
    if (!ref) return null;
    const today = todayKey();
    const year = Number(today.slice(0, 4));
    let candidate = `${year}${ref.slice(4)}`;
    if (candidate < today) candidate = `${year + 1}${ref.slice(4)}`;
    return { date: candidate, label: toDate(candidate).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric', timeZone: 'UTC' }) };
  }

  const isFree = (o) => Boolean(o.fees) && /gratuit|aucun frais|sans frais/i.test(o.fees);

  function detailUrl(o) {
    return o.slug ? `opportunite.html?slug=${encodeURIComponent(o.slug)}` : `opportunite.html?id=${encodeURIComponent(o.id)}`;
  }

  // Dates à venir d'une annonce : ouverture, clôture et dates clés
  function events(o, from = todayKey()) {
    const list = [];
    if (o.openingDate) list.push({ date: dayKey(o.openingDate), label: 'Ouverture des candidatures', type: 'OPENING' });
    if (o.deadline) list.push({ date: dayKey(o.deadline), label: 'Date limite de candidature', type: 'DEADLINE' });
    (Array.isArray(o.keyDates) ? o.keyDates : []).forEach((d) => {
      if (list.some((e) => e.date === d.date && e.type === 'DEADLINE' && /clôture|date limite|dépôt/i.test(d.label))) return;
      list.push({ date: d.date, label: d.label, type: 'KEY' });
    });
    return list.filter((e) => e.date >= from).sort((a, b) => a.date.localeCompare(b.date));
  }

  // Favoris : propres à cet appareil (stockage local), jamais indispensables au fonctionnement
  const FAV_KEY = 'opp:favorites';
  const favorites = {
    list() {
      try { return JSON.parse(localStorage.getItem(FAV_KEY)) || []; } catch (_) { return []; }
    },
    has(id) { return this.list().includes(id); },
    toggle(id) {
      const list = this.list();
      const next = list.includes(id) ? list.filter((x) => x !== id) : [...list, id];
      try { localStorage.setItem(FAV_KEY, JSON.stringify(next)); } catch (_) { /* stockage indisponible */ }
      return next.includes(id);
    },
  };

  // Export agenda (Google Agenda, Outlook, téléphone) : un événement « journée entière » par date
  function icsText(o) {
    const pad = (s) => s.replace(/-/g, '');
    const clean = (s) => String(s).replace(/([,;\\])/g, '\\$1').replace(/\n/g, '\\n');
    const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+/, '');
    const url = new URL(detailUrl(o), window.location.href).href;
    const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Le Monde du Travail//Concours et opportunites//FR', 'CALSCALE:GREGORIAN'];
    events(o).forEach((e, i) => {
      const next = new Date(Date.parse(`${e.date}T00:00:00Z`) + DAY_MS).toISOString().slice(0, 10);
      lines.push('BEGIN:VEVENT', `UID:${o.id}-${i}-${pad(e.date)}@lemondedutravail.org`, `DTSTAMP:${stamp}`,
        `DTSTART;VALUE=DATE:${pad(e.date)}`, `DTEND;VALUE=DATE:${pad(next)}`,
        `SUMMARY:${clean(`${e.label} — ${o.title}`)}`,
        `DESCRIPTION:${clean(`${o.organization}\nFiche : ${url}${o.officialUrl ? `\nSite officiel : ${o.officialUrl}` : ''}`)}`);
      if (e.type === 'DEADLINE') lines.push('BEGIN:VALARM', 'TRIGGER:-P3D', 'ACTION:DISPLAY', `DESCRIPTION:${clean(`J-3 : ${o.title}`)}`, 'END:VALARM');
      lines.push('END:VEVENT');
    });
    lines.push('END:VCALENDAR');
    return lines.join('\r\n');
  }
  function downloadIcs(o) {
    const blob = new Blob([icsText(o)], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${o.slug || 'annonce'}.ics`;
    document.body.appendChild(link);
    link.click();
    setTimeout(() => { URL.revokeObjectURL(link.href); link.remove(); }, 500);
  }

  function badges(o) {
    const cat = CATEGORY[o.category] || { label: o.category, icon: '' };
    return `<span class="opp-badge opp-badge--${esc(o.category)}">${cat.icon} ${esc(cat.label)}</span>`
      + `<span class="opp-badge opp-phase--${esc(phaseKey(o))}">${esc(PHASE[phaseKey(o)] || '')}</span>`
      + (o.funding === 'FULL' ? '<span class="opp-badge opp-badge--funded">💰 Bourse complète</span>' : '');
  }

  const levelText = (o) => (o.levels || []).map((l) => LEVEL[l]).filter(Boolean).join(', ');
  const place = (o) => [o.location, o.country].filter(Boolean).join(', ') || (o.destination ? DESTINATION[o.destination].replace(/^\S+\s/, '') : '');

  function deadlineFact(o) {
    if (o.nextSession) {
      const next = expectedNext(o);
      return ['Prochaine session', next ? `Vers ${next.label} (estimation)` : 'Dates à venir'];
    }
    if (o.phase === 'UPCOMING' && o.openingDate) return ['Ouverture', formatDay(o.openingDate)];
    return ['Date limite', o.deadline ? formatDay(o.deadline) : 'Non communiquée'];
  }

  function renderCard(o) {
    const timer = countdown(o);
    const closed = ['CLOSED', 'RESULTS'].includes(o.phase);
    const fav = favorites.has(o.id);
    const [deadlineLabel, deadlineValue] = deadlineFact(o);
    const facts = [
      [deadlineLabel, deadlineValue],
      o.fees ? ['Frais', o.fees] : null,
      levelText(o) ? ['Public', levelText(o)] : null,
      o.places ? ['Places', String(o.places)] : null,
    ].filter(Boolean);
    const chips = [
      ...(o.domains || []).slice(0, 2).map((d) => `<span class="opp-chip">${esc(DOMAIN[d] || d)}</span>`),
      ...(o.series || []).slice(0, 5).map((x) => `<span class="opp-chip opp-chip--series">${esc(x)}</span>`),
      (o.series || []).length > 5 ? `<span class="opp-chip opp-chip--series">+${o.series.length - 5}</span>` : '',
    ].join('');
    const check = verification(o);
    return `
      <article class="opp-card${closed ? ' is-closed' : ''}${timer && timer.urgent ? ' is-urgent' : ''}">
        <div class="opp-card-top">
          <div class="opp-badges">${badges(o)}</div>
          <button type="button" class="opp-fav" data-fav="${esc(o.id)}" aria-pressed="${fav}" aria-label="${fav ? 'Retirer des favoris' : 'Ajouter aux favoris'}" title="${fav ? 'Retirer des favoris' : 'Suivre cette annonce'}">${fav ? '★' : '☆'}</button>
        </div>
        <h3><a class="opp-card-link" href="${esc(detailUrl(o))}">${esc(o.title)}</a></h3>
        <p class="opp-org">${esc(o.organization)}${place(o) ? ` <span class="opp-place">· 📍 ${esc(place(o))}</span>` : ''}</p>
        <p class="opp-summary">${esc(o.summary)}</p>
        <dl class="opp-card-facts">
          ${facts.map(([label, value]) => `<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join('')}
        </dl>
        ${chips ? `<div class="opp-chips">${chips}</div>` : ''}
        <div class="opp-card-foot">
          ${timer ? `<span class="opp-countdown${timer.urgent ? ' is-urgent' : ''}">⏳ ${esc(timer.text)}</span>`
            : `<span class="opp-verified${check && check.stale ? ' is-stale' : ''}">${check ? `${check.stale ? '⏳ À revérifier' : '✓ Vérifié'} le ${esc(check.date)}` : ''}</span>`}
          <span class="opp-card-more" aria-hidden="true">Voir la fiche →</span>
        </div>
      </article>`;
  }

  window.Opp = {
    CATEGORY, LEVEL, DESTINATION, DOMAIN, FUNDING, PHASE, STALE_DAYS,
    esc, toDate, formatDay, todayKey, dayKey, daysUntil, phaseKey, isActive, countdown, verification, isFree,
    detailUrl, events, expectedNext, favorites, icsText, downloadIcs, badges, levelText, place, renderCard,
  };
})();

/**
 * Page du test d'orientation RIASEC (test-riasec.html) : passation, résultats détaillés,
 * métiers et formations du club recommandés, PDF signé WOW. Calculs : riasec-engine.js.
 * Le résultat est conservé sur l'appareil (localStorage) et réutilisé par les fiches métiers.
 */
(function () {
  'use strict';

  const E = window.RiasecEngine;
  const STORE = 'lmdt_riasec_result';
  const PROGRESS = 'lmdt_riasec_progress';
  const LEVELS = [
    { key: 'all', label: 'Tous les niveaux', max: null },
    { key: 'bac3', label: 'Jusqu\'à Bac +3', max: 3 },
    { key: 'bac2', label: 'Jusqu\'à Bac +2', max: 2 },
    { key: 'pro', label: 'Sans bac · CAP · Bac pro', max: 0 },
  ];
  // Formations du club qui développent les compétences attendues par chaque type
  const FORMATIONS_BY_TYPE = {
    R: ['energies-renouvelables', 'gestion-de-projet', 'numerique-ia-au-travail'],
    I: ['numerique-ia-au-travail', 'gestion-de-projet', 'communication-efficace'],
    A: ['communication-efficace', 'prise-de-parole-en-public', 'entrepreneuriat'],
    S: ['developpement-personnel', 'communication-efficace', 'ethique-citoyennete-professionnelle'],
    E: ['entrepreneuriat', 'leadership-management', 'negociation-gestion-conflits', 'prise-de-parole-en-public'],
    C: ['finance-personnelle', 'gestion-de-projet', 'numerique-ia-au-travail'],
  };

  const $ = (id) => document.getElementById(id);
  const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const store = {
    get(key) { try { return JSON.parse(localStorage.getItem(key) || 'null'); } catch (_) { return null; } },
    set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch (_) { /* stockage indisponible */ } },
    del(key) { try { localStorage.removeItem(key); } catch (_) { /* stockage indisponible */ } },
  };
  const track = (type, id, meta) => { try { window.AnalyticsTracker?.track?.(type, 'riasec', id, meta || {}); } catch (_) { /* suivi facultatif */ } };

  const state = { mode: 'complet', questions: [], index: 0, answers: {}, started: 0, result: null, jobs: null, level: 'all', shown: 12, formations: null };

  document.addEventListener('DOMContentLoaded', () => {
    if (!E) return;
    renderIntro();
    const saved = store.get(STORE);
    if (new URLSearchParams(location.search).has('resultat') && saved) showResults(saved);
  });

  // ===================== Présentation =====================

  function renderIntro() {
    $('rxTypesIntro').innerHTML = E.ORDER.map((t) => {
      const ty = E.TYPES[t];
      return `<li><b><span class="rx-letter" style="background:${ty.color}">${t}</span>${esc(ty.name)}</b><span>${esc(ty.tagline)}</span></li>`;
    }).join('');
    document.querySelectorAll('.rx-mode').forEach((b) => b.addEventListener('click', () => start(b.dataset.mode)));

    const saved = store.get(STORE);
    const progress = store.get(PROGRESS);
    const box = $('rxResume');
    const parts = [];
    if (progress && Object.keys(progress.answers || {}).length) {
      parts.push(`<p>Tu as un test ${esc(E.MODES[progress.mode]?.label.toLowerCase() || '')} en cours (${Object.keys(progress.answers).length} réponses).</p><button type="button" class="rx-btn rx-btn-primary" data-act="resume">Reprendre</button>`);
    }
    if (saved) {
      parts.push(`<p>Ton dernier profil : <strong>${esc(saved.code)}</strong> (${esc(new Date(saved.date).toLocaleDateString('fr-FR'))}).</p><button type="button" class="rx-btn rx-btn-primary" data-act="last">Voir mon résultat</button>`);
    }
    if (parts.length) {
      box.innerHTML = parts.join('');
      box.hidden = false;
      box.querySelector('[data-act="resume"]')?.addEventListener('click', () => start(progress.mode, progress));
      box.querySelector('[data-act="last"]')?.addEventListener('click', () => showResults(saved));
    }
  }

  // ===================== Questionnaire =====================

  function start(mode, resume) {
    state.mode = E.MODES[mode] ? mode : 'complet';
    state.questions = E.buildQuestions(state.mode);
    state.answers = resume?.answers || {};
    state.index = resume ? Math.min(state.questions.findIndex((q) => state.answers[q.id] == null), state.questions.length - 1) : 0;
    if (state.index < 0) state.index = state.questions.length - 1;
    state.started = Date.now() - (resume?.seconds || 0) * 1000;
    $('rxIntro').hidden = true;
    $('rxResults').hidden = true;
    $('rxQuiz').hidden = false;
    if (!resume) track('riasec_start', state.mode);
    renderQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderQuestion() {
    const q = state.questions[state.index];
    const total = state.questions.length;
    $('rxCounter').textContent = `Question ${state.index + 1} sur ${total}`;
    const left = Math.ceil(((total - state.index) * 9) / 60);
    $('rxRemaining').textContent = left > 1 ? `≈ ${left} min restantes` : 'Presque fini !';
    $('rxProgress').style.width = `${(state.index / total) * 100}%`;
    $('rxItem').textContent = `${q.text} ?`;
    $('rxScale').innerHTML = E.SCALE.map((s) => `
      <button type="button" class="rx-choice" role="radio" aria-checked="${state.answers[q.id] === s.value}" data-value="${s.value}">
        <span class="rx-dot" aria-hidden="true"></span>${esc(s.label)}
      </button>`).join('');
    $('rxScale').querySelectorAll('.rx-choice').forEach((b) => b.addEventListener('click', () => answer(Number(b.dataset.value))));
    $('rxPrev').disabled = state.index === 0;
  }

  let advancing = false;
  function answer(value) {
    if (advancing) return;
    const q = state.questions[state.index];
    state.answers[q.id] = value;
    $('rxScale').querySelectorAll('.rx-choice').forEach((b) => b.setAttribute('aria-checked', String(Number(b.dataset.value) === value)));
    store.set(PROGRESS, { mode: state.mode, answers: state.answers, seconds: Math.round((Date.now() - state.started) / 1000) });
    advancing = true;
    // Court délai : la personne voit son choix avant la question suivante
    setTimeout(() => {
      advancing = false;
      if (state.index < state.questions.length - 1) {
        state.index += 1;
        renderQuestion();
      } else {
        finish();
      }
    }, 220);
  }

  $('rxPrev')?.addEventListener('click', () => {
    if (state.index > 0) { state.index -= 1; renderQuestion(); }
  });
  $('rxQuit')?.addEventListener('click', () => {
    $('rxQuiz').hidden = true;
    $('rxIntro').hidden = false;
    renderIntro();
  });
  document.addEventListener('keydown', (e) => {
    if ($('rxQuiz').hidden || e.altKey || e.ctrlKey || e.metaKey) return;
    if (/^[1-5]$/.test(e.key)) answer(Number(e.key) - 1);
    else if (e.key === 'ArrowLeft' && state.index > 0) { state.index -= 1; renderQuestion(); }
  });

  function finish() {
    const seconds = Math.round((Date.now() - state.started) / 1000);
    const result = E.score(state.answers, { mode: state.mode, seconds });
    const saved = { ...result, date: new Date().toISOString(), seconds };
    store.set(STORE, saved);
    store.del(PROGRESS);
    track('riasec_result', result.code, { mode: state.mode, scores: result.scores, reliable: result.indicators.reliable });
    reveal(saved);
  }

  // ===================== Révélation par la roue =====================

  // La roue s'arrête successivement sur les 3 lettres du code : la 1re avec suspense, puis plus vite
  const SPINS = [{ duration: 4200, turns: 5 }, { duration: 2600, turns: 3 }, { duration: 2600, turns: 3 }];
  const RANKS = ['Ton intérêt n°1', 'En 2e position', 'En 3e position'];
  let wheel = null;
  let revealRun = 0;

  function reveal(result) {
    if (!window.OrientationWheel) { showResults(result); return; }
    state.result = result;
    const run = ++revealRun;
    $('rxQuiz').hidden = true;
    $('rxIntro').hidden = true;
    $('rxResults').hidden = true;
    $('rxReveal').hidden = false;
    $('rxRevealGo').hidden = true;
    $('rxRevealSkip').hidden = false;
    $('rxRevealTitle').textContent = 'La roue révèle ton profil…';
    $('rxRevealText').textContent = '';
    const letters = result.code.split('');
    $('rxRevealCode').innerHTML = letters.map(() => '<li class="rx-slot"><span>?</span></li>').join('');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (!wheel) {
      const sectors = ['R', 'I', 'A', 'S', 'E', 'C'].map((code) => ({ code, label: E.TYPES[code].name, icon: E.TYPES[code].icon, color: E.TYPES[code].color, textColor: '#ffffff' }));
      wheel = new window.OrientationWheel($('rxWheel'), { sectors });
    }
    wheel.initCanvasSize();
    wheel.draw();

    const step = (i) => {
      if (run !== revealRun) return;
      if (i >= letters.length) {
        $('rxRevealTitle').textContent = `Ton code : ${result.code}`;
        $('rxRevealText').textContent = `${E.TYPES[letters[0]].tagline} : c'est ce qui t'attire le plus aujourd'hui.`;
        $('rxRevealSkip').hidden = true;
        $('rxRevealGo').hidden = false;
        $('rxRevealGo').focus({ preventScroll: true });
        return;
      }
      $('rxRevealText').textContent = i === 0 ? 'La roue tourne…' : 'Et ensuite…';
      wheel.spinTo(letters[i], () => {
        if (run !== revealRun) return;
        const t = E.TYPES[letters[i]];
        const slot = $('rxRevealCode').children[i];
        slot.classList.add('is-on');
        slot.style.setProperty('--slot', t.color);
        slot.innerHTML = `<span>${letters[i]}</span><small>${esc(t.icon)} ${esc(t.name)}</small>`;
        $('rxRevealText').textContent = `${RANKS[i]} : ${t.icon} ${t.name}`;
        setTimeout(() => step(i + 1), 1100);
      }, SPINS[i]);
    };
    setTimeout(() => step(0), 400);
  }

  function endReveal() {
    revealRun++;
    wheel?.destroy();
    $('rxReveal').hidden = true;
    showResults(state.result || store.get(STORE));
  }
  $('rxRevealGo')?.addEventListener('click', endReveal);
  $('rxRevealSkip')?.addEventListener('click', endReveal);

  // ===================== Résultats =====================

  async function showResults(result) {
    state.result = result;
    state.shown = 12;
    $('rxIntro').hidden = true;
    $('rxQuiz').hidden = true;
    $('rxReveal').hidden = true;
    const root = $('rxResults');
    root.hidden = false;
    root.innerHTML = `<div class="container">${heroHtml(result)}${chartHtml(result)}${indicatorsHtml(result)}${typesHtml(result)}
      <section class="rx-section" id="rxJobsSection"><h2>Métiers qui te correspondent</h2>
        <p class="rx-sub">Classés par affinité entre ton profil et le code RIASEC de chacun des métiers du catalogue.</p>
        <div class="rx-filters" role="group" aria-label="Niveau d'études visé">${LEVELS.map((l) => `<button type="button" class="rx-filter" data-level="${l.key}" aria-pressed="${l.key === state.level}">${esc(l.label)}</button>`).join('')}</div>
        <div class="rx-jobs" id="rxJobs"><p class="rx-note">Chargement des métiers…</p></div>
        <div class="rx-more"><button type="button" class="rx-btn rx-btn-ghost" id="rxMore" hidden>Voir plus de métiers</button></div>
        <p class="rx-note">L'affinité compare la forme de ton profil à celle du métier (100 % = mêmes intérêts dominants, dans le même ordre). Elle ne mesure ni tes compétences ni tes chances de réussite.</p>
      </section>
      <section class="rx-section"><h2>Formations du club pour progresser</h2><p class="rx-sub">Des compétences utiles aux métiers de ton profil.</p><div class="rx-forms" id="rxForms"></div></section>
      ${methodHtml()}
      <div class="rx-actions">
        <button type="button" class="rx-btn rx-btn-primary" id="rxPdf">⬇️ Télécharger mon profil (PDF signé WOW)</button>
        <button type="button" class="rx-btn rx-btn-navy" id="rxShare">🔗 Partager mon code</button>
        <a class="rx-btn rx-btn-ghost" href="forum.html">💬 En parler sur le forum</a>
        <button type="button" class="rx-btn rx-btn-ghost" id="rxReplay">🎡 Revoir la roue</button>
        <button type="button" class="rx-btn rx-btn-ghost" id="rxRestart">↺ Refaire le test</button>
      </div>
      ${window.Api?.isLoggedIn?.() ? '' : `<p class="rx-account-hint">💾 Ton résultat n'est gardé que sur cet appareil. <a href="login.html?redirect=${encodeURIComponent('test-riasec.html?resultat=1')}#register">Crée ton compte gratuit</a> pour le retrouver sur ton téléphone comme sur un ordinateur.</p>`}
      <div class="print-only" id="rxPrintSignature" style="display:none;"></div></div>`;

    $('rxPrintMeta').textContent = [`Profil ${result.code}`, `version ${E.MODES[result.mode]?.label.toLowerCase() || ''}`, new Date(result.date || Date.now()).toLocaleDateString('fr-FR'), location.host + location.pathname].join(' · ');
    if (window.WowBrand) $('rxPrintSignature').innerHTML = window.WowBrand.signature({ kind: 'ORI', id: result.code.toLowerCase(), sealSrc: 'images/wow-seal.svg' });

    root.querySelectorAll('[data-level]').forEach((b) => b.addEventListener('click', () => {
      state.level = b.dataset.level;
      state.shown = 12;
      root.querySelectorAll('[data-level]').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
      renderJobs();
    }));
    $('rxMore').addEventListener('click', () => { state.shown += 12; renderJobs(); });
    $('rxRestart').addEventListener('click', () => { $('rxResults').hidden = true; $('rxIntro').hidden = false; renderIntro(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
    $('rxPdf').addEventListener('click', () => {
      const previous = document.title;
      document.title = `Profil RIASEC WOW - ${result.code}`;
      window.addEventListener('afterprint', () => { document.title = previous; }, { once: true });
      track('riasec_pdf', result.code);
      window.print();
    });
    $('rxShare').addEventListener('click', share);
    $('rxReplay').addEventListener('click', () => reveal(result));
    window.scrollTo({ top: 0, behavior: 'smooth' });

    renderJobs();
    renderFormations();
  }

  const typeName = (t) => E.TYPES[t].name;
  const list = (items) => (items.length > 1 ? `${items.slice(0, -1).join(', ')} et ${items[items.length - 1]}` : items[0] || '');

  function heroHtml(r) {
    const [a, b, c] = r.ranking;
    return `<div class="rx-hero">
      <div><span class="rx-kicker">Ton profil d'intérêts · ${esc(E.MODES[r.mode]?.label || '')}</span>
        <h1>${esc(E.TYPES[a].icon)} ${esc(typeName(a))}, ${esc(typeName(b).toLowerCase())} et ${esc(typeName(c).toLowerCase())}</h1>
        <p>${esc(E.TYPES[a].tagline)} : c'est ce qui t'attire le plus aujourd'hui. Viennent ensuite « ${esc(E.TYPES[b].short.toLowerCase())} » et « ${esc(E.TYPES[c].short.toLowerCase())} ».</p></div>
      <div class="rx-code" aria-label="Code de Holland ${esc(r.code)}">${r.code.split('').map((t) => `<span style="background:${E.TYPES[t].color}">${t}<small>${esc(E.TYPES[t].name)}</small></span>`).join('')}</div>
    </div>`;
  }

  // Hexagone (ordre de Holland) + barres triées : une seule série, valeurs écrites en clair
  function chartHtml(r) {
    const cx = 230; const cy = 165; const R = 112;
    const pt = (i, v) => {
      const a = (-90 + i * 60) * (Math.PI / 180);
      return [cx + Math.cos(a) * R * v, cy + Math.sin(a) * R * v];
    };
    const ring = (v) => E.ORDER.map((_, i) => pt(i, v).map((n) => n.toFixed(1)).join(',')).join(' ');
    const area = E.ORDER.map((t, i) => pt(i, Math.max(r.scores[t], 2) / 100).map((n) => n.toFixed(1)).join(',')).join(' ');
    const labels = E.ORDER.map((t, i) => {
      const [x, y] = pt(i, 1.24);
      const anchor = Math.abs(x - cx) < 5 ? 'middle' : x > cx ? 'start' : 'end';
      return `<text x="${x.toFixed(1)}" y="${(y + 4).toFixed(1)}" text-anchor="${anchor}">${esc(E.TYPES[t].name)}</text>
        <text class="val" x="${x.toFixed(1)}" y="${(y + 18).toFixed(1)}" text-anchor="${anchor}">${r.scores[t]}</text>`;
    }).join('');
    const svg = `<svg class="rx-hex" viewBox="0 0 460 340" role="img" aria-label="Hexagone RIASEC : ${E.ORDER.map((t) => `${E.TYPES[t].name} ${r.scores[t]}`).join(', ')}">
      ${[0.25, 0.5, 0.75, 1].map((v) => `<polygon class="grid" points="${ring(v)}"/>`).join('')}
      ${E.ORDER.map((_, i) => { const [x, y] = pt(i, 1); return `<line class="axis" x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}"/>`; }).join('')}
      <polygon class="area" points="${area}"/>
      ${E.ORDER.map((t, i) => { const [x, y] = pt(i, Math.max(r.scores[t], 2) / 100); return `<circle class="pt" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="4.5"/>`; }).join('')}
      ${labels}</svg>`;
    const bars = r.ranking.map((t, i) => `<li class="rx-bar${i < 3 ? ' is-top' : ''}"><b>${esc(E.TYPES[t].icon)} ${esc(E.TYPES[t].name)}</b>
      <span class="rx-bar-track"><span class="rx-bar-fill" style="width:${Math.max(r.scores[t], 1)}%"></span></span><span class="rx-bar-val">${r.scores[t]}</span></li>`).join('');
    return `<section class="rx-section"><h2>Tes six scores</h2><p class="rx-sub">Chaque type est noté de 0 à 100 selon ton intérêt pour ses activités. Les types voisins sur l'hexagone se ressemblent ; les types opposés s'éloignent.</p>
      <div class="rx-chart-wrap">${svg}<ol class="rx-bars" aria-label="Scores classés">${bars}</ol></div></section>`;
  }

  function indicatorsHtml(r) {
    const ind = r.indicators;
    const levelText = {
      fort: 'Tes intérêts sont nets : ton profil est une base solide pour cibler des métiers.',
      moyen: 'Tes intérêts sont présents sans être très marqués : explore plusieurs pistes autour de ton code.',
      faible: 'Peu d\'activités t\'attirent vraiment pour l\'instant. C\'est fréquent : découvre des métiers sur le terrain, puis refais le test.',
    }[ind.level];
    const diffText = ind.differentiationLabel === 'net'
      ? 'Tes types dominants se détachent clairement des autres.'
      : ind.differentiationLabel === 'modéré'
        ? 'Tes préférences se distinguent, avec plusieurs types assez proches.'
        : 'Tes six scores sont proches : ton profil est encore ouvert. Lis ton code comme une piste parmi d\'autres.';
    const consText = {
      forte: 'Tes deux premiers types sont voisins sur l\'hexagone : ils vont naturellement ensemble dans beaucoup de métiers.',
      moyenne: 'Tes deux premiers types sont assez compatibles : de nombreux métiers les combinent.',
      faible: 'Tes deux premiers types sont opposés sur l\'hexagone : peu de métiers les réunissent. Tu pourras chercher un métier pour l\'un et une activité (associative, créative…) pour l\'autre.',
    }[ind.consistency];
    const alerts = [];
    if (ind.warnings.includes('uniform')) alerts.push('Tu as donné presque toujours la même réponse : le résultat est peu fiable. Refais le test en nuançant tes réponses.');
    if (ind.warnings.includes('fast')) alerts.push('Le test a été rempli très vite : prends le temps de lire chaque activité pour un résultat plus juste.');
    if (r.ties.length) alerts.push(`Égalité entre ${r.ties.map(([x, y]) => `${typeName(x)} et ${typeName(y)}`).join(', ')} : ton code peut aussi se lire en inversant ces lettres.`);
    return `<section class="rx-section"><h2>Comment lire ton résultat</h2>
      <div class="rx-indicators">
        <div class="rx-ind"><span>Intensité</span><strong>Intérêts ${esc(ind.level)}s</strong><p>${esc(levelText)}</p></div>
        <div class="rx-ind"><span>Différenciation</span><strong>${esc(ind.differentiationLabel[0].toUpperCase() + ind.differentiationLabel.slice(1))} (${ind.differentiation} pts)</strong><p>${esc(diffText)}</p></div>
        <div class="rx-ind"><span>Cohérence</span><strong>${esc(ind.consistency[0].toUpperCase() + ind.consistency.slice(1))}</strong><p>${esc(consText)}</p></div>
      </div>
      ${alerts.map((a) => `<p class="rx-alert">⚠️ ${esc(a)}</p>`).join('')}</section>`;
  }

  function typesHtml(r) {
    const cards = r.ranking.slice(0, 3).map((t, i) => {
      const ty = E.TYPES[t];
      return `<article class="rx-type-card" style="--rx-type:${ty.color}">
        <span class="rx-rank">${['Type dominant', 'Deuxième type', 'Troisième type'][i]} · ${r.scores[t]}/100</span>
        <h3>${esc(ty.icon)} ${esc(ty.name)} — ${esc(ty.short)}</h3>
        <p>${esc(ty.description)}</p>
        <h4>Points forts</h4><div class="rx-tags">${ty.strengths.map((s) => `<span class="rx-tag">${esc(s)}</span>`).join('')}</div>
        <h4>Environnements</h4><div class="rx-tags">${ty.environments.map((s) => `<span class="rx-tag">${esc(s)}</span>`).join('')}</div>
        <h4>À savoir</h4><p>${esc(ty.watch)}</p>
        <h4>Pour vérifier sur le terrain</h4><p>${esc(ty.tryIt)}</p>
      </article>`;
    }).join('');
    return `<section class="rx-section"><h2>Tes trois types en détail</h2><p class="rx-sub">Ton code ${esc(r.code)} se lit dans l'ordre : le premier type compte le plus.</p><div class="rx-type-cards">${cards}</div></section>`;
  }

  function methodHtml() {
    return `<section class="rx-section rx-method"><h2>Méthode et limites</h2>
      <p>Ce test s'appuie sur la typologie de John L. Holland (<em>Making Vocational Choices</em>, 1997), utilisée par les conseillers d'orientation du monde entier et par la base de métiers O*NET. Chaque type est mesuré par ${E.MODES.complet.perType} activités dans la version complète (${E.MODES.express.perType} en express), notées de 0 à 4.</p>
      <p>Les codes des métiers viennent des profils d'intérêts O*NET pour les métiers équivalents, sinon des activités décrites dans chaque fiche.</p>
      <p><strong>Un test d'intérêts n'est pas un test d'aptitudes</strong> : il dit ce qui t'attire, pas ce que tu sais faire ni ce que tu vaux. Tes intérêts évoluent, surtout avant 25 ans : refais le test dans quelques mois et parles-en avec un conseiller ou un mentor du club.</p></section>`;
  }

  // ===================== Métiers et formations =====================

  async function loadJobs() {
    if (state.jobs) return state.jobs;
    const res = await fetch('data/riasec-jobs.json');
    if (!res.ok) throw new Error('catalogue indisponible');
    state.jobs = (await res.json()).jobs;
    return state.jobs;
  }

  async function renderJobs() {
    const box = $('rxJobs');
    if (!box) return;
    let jobs;
    try { jobs = await loadJobs(); } catch (_) {
      box.innerHTML = '<p class="rx-note">Impossible de charger les métiers. Vérifie ta connexion puis réessaie.</p>';
      return;
    }
    const level = LEVELS.find((l) => l.key === state.level);
    const all = E.matchJobs(state.result.scores, jobs, { maxLevel: level.max, limit: 200 });
    const shown = all.slice(0, state.shown);
    box.innerHTML = shown.length ? shown.map(({ job, affinity, shared }) => `
      <a class="rx-job" href="job-detail.html?slug=${encodeURIComponent(job.slug || job.id)}">
        <div class="rx-job-head"><span class="rx-job-icon" aria-hidden="true">${esc(job.icon || '💼')}</span>
          <div><h3>${esc(job.title)}</h3><span class="rx-job-family">${esc(job.familyName || '')}</span></div></div>
        ${job.shortDescription ? `<p>${esc(job.shortDescription)}</p>` : ''}
        <div class="rx-job-foot">
          <span class="rx-mini-code" title="Code RIASEC du métier">${esc(job.riasec)}</span>
          <span class="rx-aff-track" aria-hidden="true"><span class="rx-aff-fill" style="width:${affinity}%"></span></span>
          <span class="rx-aff">${affinity} %</span>
        </div>
        <span class="rx-job-family">${shared.length ? `En commun : ${esc(list(shared.map(typeName)))}` : 'Profil complémentaire'}${job.level ? ` · ${esc(job.level)}` : ''}</span>
      </a>`).join('') : '<p class="rx-note">Aucun métier du catalogue à ce niveau pour ton profil. Élargis le niveau d\'études.</p>';
    $('rxMore').hidden = all.length <= state.shown;
  }

  async function renderFormations() {
    const box = $('rxForms');
    if (!box) return;
    try {
      if (!state.formations) state.formations = (await (await fetch('data/formations/index.json')).json()).formations;
    } catch (_) {
      box.innerHTML = '<p class="rx-note">Formations indisponibles pour le moment.</p>';
      return;
    }
    const slugs = [];
    state.result.ranking.slice(0, 2).forEach((t) => FORMATIONS_BY_TYPE[t].forEach((s) => { if (!slugs.includes(s)) slugs.push(s); }));
    if (!slugs.includes('cv-entretien-embauche')) slugs.push('cv-entretien-embauche');
    box.innerHTML = slugs.map((s) => state.formations.find((f) => f.slug === s)).filter(Boolean).slice(0, 6)
      .map((f) => `<a class="rx-form" href="formation-detail.html?slug=${encodeURIComponent(f.slug)}"><span aria-hidden="true">${esc(f.icon)}</span><span>${esc(f.title)}</span></a>`).join('');
  }

  async function share() {
    const r = state.result;
    const text = `Mon profil d'orientation RIASEC est ${r.code} (${r.code.split('').map(typeName).join(', ')}). Et toi ? Fais le test gratuit du club Le Monde du Travail :`;
    const url = `${location.origin}${location.pathname}`;
    try {
      if (navigator.share) await navigator.share({ title: 'Mon profil RIASEC', text, url });
      else { await navigator.clipboard.writeText(`${text} ${url}`); window.toast?.success?.('Texte copié : colle-le où tu veux !'); }
      track('riasec_share', r.code);
    } catch (_) { /* partage annulé */ }
  }
}());

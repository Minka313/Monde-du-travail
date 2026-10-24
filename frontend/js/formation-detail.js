/**
 * Fiche formation (formation-detail.html?slug=…), sur le modèle de la fiche métier :
 * contenu pédagogique statique (data/formations/<slug>.json), données vivantes de la
 * base (inscription, dates) via l'API, export PDF signé WOW.
 */
(function () {
  'use strict';

  const esc = (value) => (window.escapeHtml ? window.escapeHtml(value) : String(value ?? ''));
  const $ = (id) => document.getElementById(id);
  const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

  const TABS = [
    { key: 'overview', icon: '📌', label: 'Présentation', print: 'Présentation' },
    { key: 'program', icon: '📚', label: 'Programme', print: 'Programme détaillé' },
    { key: 'toolkit', icon: '🧰', label: 'Boîte à outils', print: 'Boîte à outils' },
    { key: 'case', icon: '🎬', label: 'Cas pratique', print: 'Cas pratique' },
    { key: 'quiz', icon: '✅', label: 'Auto-évaluation', print: 'Auto-évaluation' },
    { key: 'plan', icon: '🗓️', label: 'Plan 30 jours & ressources', print: 'Plan d\'action et ressources' },
    { key: 'related', icon: '🧭', label: 'Métiers liés', print: '' },
  ];

  const state = { formation: null, dbFormation: null };

  function track(eventType, metadata = {}) {
    try {
      window.AnalyticsTracker?.track?.(eventType, 'formation', state.formation?.slug, metadata);
    } catch (_) { /* suivi facultatif */ }
  }

  function toast(message) {
    const el = document.createElement('div');
    el.className = 'fd-toast';
    el.setAttribute('role', 'status');
    el.textContent = message;
    document.body.appendChild(el);
    requestAnimationFrame(() => el.classList.add('is-visible'));
    setTimeout(() => { el.classList.remove('is-visible'); setTimeout(() => el.remove(), 300); }, 3200);
  }

  // Ordre des réponses mélangé : la bonne réponse ne doit pas se deviner à sa position
  function shuffled(items) {
    const copy = items.slice();
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  const list = (items, cls = 'fd-check-list') => `<ul class="${cls}">${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;

  // ===== Bandeau =====

  function renderHero(f) {
    document.title = `${f.title} — Fiche formation WOW | Le Monde du Travail`;
    $('metaDescription')?.setAttribute('content', f.tagline);
    $('ogTitle')?.setAttribute('content', `${f.title} — Fiche formation`);
    $('ogDescription')?.setAttribute('content', f.tagline);
    $('ogImage')?.setAttribute('content', f.image);

    $('fdBreadcrumbTitle').textContent = f.title;
    $('fdHeroImg').src = f.image;
    $('fdHeroImg').alt = f.title;
    $('fdIcon').textContent = f.icon;
    $('fdTitle').textContent = f.title;
    $('fdTagline').textContent = f.tagline;
    $('fdBadges').innerHTML = [
      `<span class="job-tag-pill pill-family"><span>📁</span> <span>${esc(f.category)}</span></span>`,
      '<span class="job-tag-pill pill-subdomain fd-badge-wow"><span>✦</span> <span>Fiche WOW</span></span>',
      '<span class="job-tag-pill pill-domain"><span>🏅</span> <span>Attestation</span></span>',
    ].join('');

    const lessons = f.modules.reduce((n, m) => n + m.lessons.length, 0);
    const metrics = [
      ['⏱️', 'Durée', f.duration],
      ['🎯', 'Niveau', f.level],
      ['📚', 'Programme', `${f.modules.length} modules · ${lessons} leçons`],
      ['🧪', 'Pratique', `${f.modules.filter((m) => m.exercise).length} exercices · quiz`],
    ];
    $('fdMetrics').innerHTML = metrics.map(([icon, label, value]) => `
      <div class="metric-ribbon-card">
        <span class="metric-icon" aria-hidden="true">${icon}</span>
        <div class="metric-text-group">
          <span class="metric-label">${esc(label)}</span>
          <strong class="metric-val">${esc(value)}</strong>
        </div>
      </div>`).join('');

    $('fdPrintMeta').textContent = [f.title, f.category, f.duration, window.location.host + window.location.pathname].join(' · ');
    if (window.WowBrand) {
      $('fdPrintSignature').innerHTML = window.WowBrand.signature({ kind: 'FOR', id: f.slug, sealSrc: 'images/wow-seal.svg' });
    }
  }

  // ===== Onglets =====

  function panelOverview(f) {
    const db = state.dbFormation;
    const session = db && (db.startDate || db.location)
      ? `<div class="fd-session">📅 ${db.startDate ? `Prochaine session : <strong>${esc(new Date(db.startDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }))}</strong>` : 'Session à venir'}${db.location ? ` · 📍 ${esc(db.location)}` : ''}</div>` : '';
    return `
      <div class="job-info-card job-highlight-card fd-hook">
        <div class="card-icon-badge" aria-hidden="true">💡</div>
        <div class="card-content-block">
          <h2 class="card-section-title">${esc(f.hook.title)}</h2>
          <p class="fd-lead">${esc(f.hook.text)}</p>
          ${session}
        </div>
      </div>

      <div class="fd-facts">
        ${f.keyFacts.map((k) => `
          <figure class="fd-fact">
            <strong>${esc(k.value)}</strong>
            <figcaption>${esc(k.label)}<span class="fd-fact-source">Source : ${esc(k.source)}</span></figcaption>
          </figure>`).join('')}
      </div>

      <div class="job-info-card">
        <h2 class="card-section-title">À la fin de la formation, tu sauras…</h2>
        ${list(f.outcomes, 'fd-check-list fd-outcomes')}
      </div>

      <div class="fd-grid-3">
        <div class="job-info-card fd-mini"><h3>👥 Pour qui ?</h3><p>${esc(f.audience)}</p></div>
        <div class="job-info-card fd-mini"><h3>🎒 Prérequis</h3><p>${esc(f.prerequisites)}</p></div>
        <div class="job-info-card fd-mini"><h3>🏫 Format</h3><p>${esc(f.format)}</p></div>
      </div>

      <div class="job-info-card fd-certif">
        <img src="images/wow-mark.svg" alt="" width="44" height="44">
        <div><h3>Attestation WOW</h3><p>${esc(f.certification)}</p></div>
      </div>`;
  }

  function panelProgram(f) {
    return `
      <p class="fd-intro">Chaque module associe des leçons, une méthode à appliquer et un exercice concret. Ouvre-les un par un ou télécharge la fiche complète en PDF.</p>
      <div class="fd-modules">
        ${f.modules.map((m, i) => `
          <article class="fd-module${i === 0 ? ' is-open' : ''}">
            <button type="button" class="fd-module-head" aria-expanded="${i === 0}" aria-controls="fdModule${i}">
              <span class="fd-module-num">${String(i + 1).padStart(2, '0')}</span>
              <span class="fd-module-titles">
                <strong>${esc(m.title)}</strong>
                <span>${esc(m.duration || '')}${m.goal ? ` · ${esc(m.goal)}` : ''}</span>
              </span>
              <span class="fd-module-chevron" aria-hidden="true">⌄</span>
            </button>
            <div class="fd-module-body" id="fdModule${i}">
              ${m.lessons.map((l, j) => `
                <section class="fd-lesson">
                  <h4><span class="fd-lesson-num">${i + 1}.${j + 1}</span> ${esc(l.title)}</h4>
                  <p>${esc(l.content)}</p>
                  ${l.keyPoints?.length ? `<ul class="fd-keypoints">${l.keyPoints.map((k) => `<li>${esc(k)}</li>`).join('')}</ul>` : ''}
                </section>`).join('')}
              ${m.method ? `
                <div class="fd-method">
                  <h4>🛠️ Méthode : ${esc(m.method.name)}</h4>
                  <ol>${m.method.steps.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>
                </div>` : ''}
              ${m.exercise ? `
                <div class="fd-exercise">
                  <h4>✍️ Exercice : ${esc(m.exercise.title)}</h4>
                  <ol>${m.exercise.instructions.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>
                  ${m.exercise.deliverable ? `<p class="fd-deliverable"><strong>À produire :</strong> ${esc(m.exercise.deliverable)}</p>` : ''}
                </div>` : ''}
            </div>
          </article>`).join('')}
      </div>`;
  }

  function panelToolkit(f) {
    return `
      <div class="fd-tools">
        ${f.toolkit.map((t) => `
          <div class="fd-tool">
            <h3>${esc(t.name)}</h3>
            <span class="fd-tool-use">${esc(t.use)}</span>
            <p>${esc(t.how)}</p>
          </div>`).join('')}
      </div>
      <div class="job-info-card fd-pitfalls">
        <h2 class="card-section-title">⚠️ Les erreurs à éviter</h2>
        ${list(f.pitfalls, 'fd-cross-list')}
      </div>`;
  }

  function panelCase(f) {
    const c = f.caseStudy;
    return `
      <div class="job-info-card fd-case">
        <h2 class="card-section-title">${esc(c.title)}</h2>
        <div class="fd-case-steps">
          <div><span>Contexte</span><p>${esc(c.context)}</p></div>
          <div><span>Le défi</span><p>${esc(c.challenge)}</p></div>
          <div><span>Ce qui a été fait</span><p>${esc(c.solution)}</p></div>
          <div class="fd-case-lesson"><span>La leçon</span><p>${esc(c.lesson)}</p></div>
        </div>
      </div>`;
  }

  function panelQuiz(f) {
    return `
      <div class="job-info-card fd-quiz" id="fdQuiz">
        <div class="fd-quiz-head">
          <h2 class="card-section-title">Teste-toi : ${f.quiz.length} questions</h2>
          <span class="fd-quiz-score" id="fdQuizScore" aria-live="polite">0 / ${f.quiz.length}</span>
        </div>
        ${f.quiz.map((q, i) => `
          <fieldset class="fd-question" data-q="${i}">
            <legend><span>${i + 1}</span> ${esc(q.q)}</legend>
            <div class="fd-options">
              ${shuffled(q.options.map((o, j) => [o, j])).map(([o, j]) => `<button type="button" class="fd-option" data-q="${i}" data-o="${j}">${esc(o)}</button>`).join('')}
            </div>
            <p class="fd-explanation" hidden></p>
            <p class="fd-answer-print print-only">Réponse : ${esc(q.options[q.answer])}. ${esc(q.explanation)}</p>
          </fieldset>`).join('')}
        <div class="fd-quiz-result" id="fdQuizResult" hidden></div>
      </div>`;
  }

  function panelPlan(f) {
    return `
      <div class="job-info-card">
        <h2 class="card-section-title">🗓️ Ton plan d'action sur 30 jours</h2>
        <ol class="fd-timeline">
          ${f.actionPlan.map((a) => `<li><span>${esc(a.period)}</span><p>${esc(a.action)}</p></li>`).join('')}
        </ol>
      </div>
      <div class="job-info-card">
        <h2 class="card-section-title">📎 Ressources pour aller plus loin</h2>
        <div class="fd-resources">
          ${f.resources.map((r) => {
    const href = r.url ? (window.safeUrl ? window.safeUrl(r.url, '') : r.url) : '';
    const inner = `<span class="fd-res-type">${esc(r.type)}${r.free ? ' · gratuit' : ''}</span><strong>${esc(r.title)}</strong><span class="fd-res-org">${esc(r.org)}</span>${r.note ? `<p>${esc(r.note)}</p>` : ''}`;
    return href ? `<a class="fd-resource" href="${esc(href)}" target="_blank" rel="noopener">${inner}</a>` : `<div class="fd-resource">${inner}</div>`;
  }).join('')}
        </div>
      </div>
      ${f.faq?.length ? `
        <div class="job-info-card">
          <h2 class="card-section-title">❓ Questions fréquentes</h2>
          ${f.faq.map((q) => `<details class="fd-faq"><summary>${esc(q.q)}</summary><p>${esc(q.a)}</p></details>`).join('')}
        </div>` : ''}
      <div class="job-info-card fd-sources">
        <h2 class="card-section-title">📚 Sources</h2>
        <ul>${f.sources.map((s) => `<li>${esc(s.title)} — ${esc(s.org)}${s.year ? ` (${esc(s.year)})` : ''}${s.url ? ` · <a href="${esc(window.safeUrl ? window.safeUrl(s.url, '#') : s.url)}" target="_blank" rel="noopener">${esc(new URL(s.url).host)}</a>` : ''}</li>`).join('')}</ul>
      </div>`;
  }

  function panelRelated() {
    return `
      <div class="job-info-card">
        <h2 class="card-section-title">Métiers où ces compétences font la différence</h2>
        <div class="related-jobs-grid" id="fdRelatedGrid"><p class="text-muted">Chargement…</p></div>
      </div>`;
  }

  const RENDERERS = { overview: panelOverview, program: panelProgram, toolkit: panelToolkit, case: panelCase, quiz: panelQuiz, plan: panelPlan, related: panelRelated };

  function renderTabs(f) {
    $('fdTabs').innerHTML = TABS.map((t, i) => `
      <button type="button" class="job-tab-btn${i === 0 ? ' active' : ''}" role="tab" aria-selected="${i === 0}" aria-controls="fdPanel-${t.key}" data-tab="${t.key}">
        <span class="tab-icon">${t.icon}</span><span class="tab-text">${esc(t.label)}</span>
      </button>`).join('');
    $('fdPanels').innerHTML = TABS.map((t, i) => `
      <section id="fdPanel-${t.key}" class="job-tab-panel${i === 0 ? ' active' : ''}${t.print ? '' : ' print-hide'}"${t.print ? ` data-print-title="${esc(t.print)}"` : ''} role="tabpanel" style="${i === 0 ? '' : 'display:none;'}">
        ${RENDERERS[t.key](f)}
      </section>`).join('');

    $('fdTabs').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-tab]');
      if (!btn) return;
      $('fdTabs').querySelectorAll('.job-tab-btn').forEach((b) => { b.classList.toggle('active', b === btn); b.setAttribute('aria-selected', String(b === btn)); });
      document.querySelectorAll('#fdPanels .job-tab-panel').forEach((p) => {
        const on = p.id === `fdPanel-${btn.dataset.tab}`;
        p.classList.toggle('active', on);
        p.style.display = on ? 'block' : 'none';
      });
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      track('formation_tab', { tab: btn.dataset.tab });
    });
  }

  // ===== Interactions =====

  function bindProgram() {
    $('fdPanels').addEventListener('click', (e) => {
      const head = e.target.closest('.fd-module-head');
      if (!head) return;
      const module = head.closest('.fd-module');
      const open = !module.classList.contains('is-open');
      module.classList.toggle('is-open', open);
      head.setAttribute('aria-expanded', String(open));
    });
  }

  function bindQuiz(f) {
    const answered = new Map();
    const quiz = $('fdQuiz');
    if (!quiz) return;
    quiz.addEventListener('click', (e) => {
      const opt = e.target.closest('.fd-option');
      if (!opt) return;
      const qi = Number(opt.dataset.q);
      if (answered.has(qi)) return;
      const q = f.quiz[qi];
      const chosen = Number(opt.dataset.o);
      answered.set(qi, chosen === q.answer);
      const fs = opt.closest('.fd-question');
      fs.querySelectorAll('.fd-option').forEach((b) => {
        b.disabled = true;
        if (Number(b.dataset.o) === q.answer) b.classList.add('is-correct');
      });
      if (chosen !== q.answer) opt.classList.add('is-wrong');
      const exp = fs.querySelector('.fd-explanation');
      exp.hidden = false;
      exp.textContent = `${chosen === q.answer ? '✅ Bonne réponse.' : '❌ Pas tout à fait.'} ${q.explanation}`;
      const score = [...answered.values()].filter(Boolean).length;
      $('fdQuizScore').textContent = `${score} / ${f.quiz.length}`;
      if (answered.size === f.quiz.length) {
        const ratio = score / f.quiz.length;
        const result = $('fdQuizResult');
        result.hidden = false;
        result.innerHTML = ratio === 1
          ? '🏆 Parfait ! Tu maîtrises les bases : passe au plan d\'action sur 30 jours.'
          : ratio >= 0.5
            ? '👍 Bon résultat. Relis les modules liés aux questions manquées, puis passe au plan d\'action.'
            : '📖 Reprends le programme module par module : les réponses s\'y trouvent, puis refais le test.';
        result.insertAdjacentHTML('beforeend', ' <button type="button" class="fd-quiz-retry">Recommencer</button>');
        track('formation_quiz_completed', { score, total: f.quiz.length });
      }
    });
    quiz.addEventListener('click', (e) => {
      if (!e.target.closest('.fd-quiz-retry')) return;
      answered.clear();
      quiz.querySelectorAll('.fd-option').forEach((b) => { b.disabled = false; b.classList.remove('is-correct', 'is-wrong'); });
      quiz.querySelectorAll('.fd-explanation').forEach((p) => { p.hidden = true; });
      $('fdQuizScore').textContent = `0 / ${f.quiz.length}`;
      $('fdQuizResult').hidden = true;
    });
  }

  async function loadRelated(f) {
    const grid = $('fdRelatedGrid');
    const jobs = await Promise.all(f.relatedJobs.map((slug) => fetch(`data/jobs/${encodeURIComponent(slug)}.json`)
      .then((r) => (r.ok ? r.json() : null)).then((d) => d?.job).catch(() => null)));
    const found = jobs.filter(Boolean);
    grid.innerHTML = found.length ? found.map((job) => `
      <a href="job-detail.html?slug=${encodeURIComponent(job.slug || job.id)}" class="card related-job-card">
        <div class="related-card-media">
          <img src="${esc(window.safeUrl ? window.safeUrl(job.image, 'images/orientation.webp') : job.image)}" alt="${esc(job.title)}" loading="lazy" width="300" height="180">
          <span class="related-card-icon">${esc(job.icon || '💼')}</span>
        </div>
        <div class="related-card-body">
          <span class="related-card-family">${esc(job.subdomain || job.familyName || '')}</span>
          <h3 class="related-card-title">${esc(job.title)}</h3>
          <span class="related-card-cta">Découvrir la fiche métier &rarr;</span>
        </div>
      </a>`).join('') : '<p class="text-muted">Explore le catalogue des métiers pour trouver ceux qui te correspondent.</p>';
  }

  function openRegistration(f) {
    const db = state.dbFormation;
    document.getElementById('fdRegModal')?.remove();
    const overlay = document.createElement('div');
    overlay.id = 'fdRegModal';
    overlay.className = 'fd-modal-overlay';
    let user = null;
    try { user = JSON.parse(localStorage.getItem('currentUser') || 'null'); } catch (_) { /* invité */ }
    overlay.innerHTML = `
      <div class="fd-modal" role="dialog" aria-modal="true" aria-labelledby="fdRegTitle">
        <button type="button" class="fd-modal-close" data-close aria-label="Fermer">&times;</button>
        <p class="fd-modal-kicker">${esc(f.icon)} Inscription</p>
        <h2 id="fdRegTitle">${esc(f.title)}</h2>
        ${db ? `
          <form class="fd-reg-form" novalidate>
            <label>Nom complet<input name="name" required minlength="2" autocomplete="name" value="${esc(user ? `${user.firstName || ''} ${user.lastName || ''}`.trim() : '')}"></label>
            <label>E-mail<input name="email" type="email" required autocomplete="email" value="${esc(user?.email || '')}"></label>
            <label>Téléphone (facultatif)<input name="phone" type="tel" autocomplete="tel"></label>
            <label>Ta motivation (facultatif)<textarea name="motivation" rows="3" maxlength="1000" placeholder="Ce que tu attends de cette formation…"></textarea></label>
            <button type="submit" class="btn btn-primary fd-reg-submit">Envoyer mon inscription</button>
          </form>` : '<p>Les inscriptions à cette formation ouvriront prochainement. Suis le club ou pose ta question sur le forum pour être informé.</p><a href="forum.html" class="btn btn-primary">Aller au forum</a>'}
      </div>`;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', (e) => { if (e.target === overlay || e.target.closest('[data-close]')) overlay.remove(); });
    overlay.querySelector('form')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const form = e.target;
      if (!form.reportValidity()) return;
      const btn = form.querySelector('.fd-reg-submit');
      btn.disabled = true;
      btn.textContent = 'Envoi…';
      try {
        await window.Api.formations.register(db.id, Object.fromEntries(new FormData(form)));
        overlay.querySelector('.fd-modal').innerHTML = `
          <p class="fd-modal-kicker">✅ Inscription envoyée</p>
          <h2>Merci !</h2>
          <p>Ta demande pour « ${esc(f.title)} » est bien enregistrée. L'équipe du club te recontactera pour confirmer ta place.</p>
          <button type="button" class="btn btn-primary" data-close>Fermer</button>`;
        track('formation_registration');
      } catch (error) {
        btn.disabled = false;
        btn.textContent = 'Envoyer mon inscription';
        toast(error.message || 'Inscription impossible pour le moment');
      }
    });
    overlay.querySelector('input')?.focus();
  }

  function bindActions(f) {
    // Le PDF contient tout : FAQ dépliée
    window.addEventListener('beforeprint', () => {
      document.querySelectorAll('.fd-faq').forEach((d) => { d.open = true; });
    });
    $('fdBtnRegister').addEventListener('click', () => openRegistration(f));
    $('fdBtnPdf').addEventListener('click', () => {
      const previous = document.title;
      document.title = `Fiche formation WOW - ${f.title}`;
      window.addEventListener('afterprint', () => { document.title = previous; }, { once: true });
      track('formation_pdf');
      window.print();
    });
    $('fdBtnShare').addEventListener('click', async () => {
      const data = { title: f.title, text: f.tagline, url: window.location.href };
      try {
        if (navigator.share) await navigator.share(data);
        else { await navigator.clipboard.writeText(window.location.href); toast('Lien copié'); }
      } catch (_) { /* partage annulé */ }
    });
  }

  async function init() {
    const params = new URLSearchParams(window.location.search);
    const slug = (params.get('slug') || params.get('id') || '').trim();
    const show = (id) => {
      ['fdSkeleton', 'fdNotFound', 'fdContent'].forEach((x) => { $(x).style.display = x === id ? '' : 'none'; });
    };
    if (!SLUG_PATTERN.test(slug)) { show('fdNotFound'); return; }

    let f;
    try {
      const res = await fetch(`data/formations/${slug}.json`);
      if (!res.ok) throw new Error('introuvable');
      f = await res.json();
    } catch (_) {
      show('fdNotFound');
      return;
    }
    state.formation = f;
    // Données vivantes (inscription, dates) : la fiche reste lisible si l'API ne répond pas
    try {
      state.dbFormation = (await window.Api.formations.getById(slug)).data || null;
    } catch (_) {
      state.dbFormation = null;
    }

    renderHero(f);
    renderTabs(f);
    bindProgram();
    bindQuiz(f);
    bindActions(f);
    show('fdContent');
    loadRelated(f);
    track('formation_view');
    if (params.get('inscription') === '1') openRegistration(f);
  }

  document.addEventListener('DOMContentLoaded', init);
})();

/**
 * Espace Mentor, composant partagé par le site (mentor.html) et l'administration.
 *   MentorSpace.mount(root, { request, user })
 * request(endpoint, options) : client API authentifié (Api.request ou AdminApi.request).
 * Vue mentor : mentorés, formations animées, comptes rendus, messages.
 * Vue Présidence : mentors, binômes, animateurs, comptes rendus à examiner, messages.
 */
(function () {
  'use strict';

  const RV = window.ReportView;
  const esc = RV.esc;
  const BASE = '/mentoring';
  const STATUS_MENTORSHIP = { ACTIVE: ['Actif', 'success'], PAUSED: ['En pause', 'warning'], ENDED: ['Terminé', 'muted'] };
  const REG_STATUS = { PENDING: 'En attente', CONFIRMED: 'Confirmé', ATTENDED: 'Présent', CANCELLED: 'Annulé' };
  const frDate = (v) => (v ? new Date(v).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' }) : '—');
  const frTime = (v) => (v ? new Date(v).toLocaleString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : '');
  const pill = ([label, tone]) => `<span class="rv-status rv-status-${tone}">${esc(label)}</span>`;

  function mount(root, { request, user }) {
    const state = { ctx: null, tab: null, threadUserId: null, mentors: null, poll: null };
    const api = (path, options = {}) => request(`${BASE}${path}`, options);
    const json = (method, body) => ({ method, body: JSON.stringify(body || {}) });
    const tpl = () => state.ctx.templates;

    // ===== Utilitaires =====

    function toast(message, type = 'success') {
      const el = document.createElement('div');
      el.className = `ms-toast ms-toast-${type}`;
      el.setAttribute('role', 'status');
      el.textContent = message;
      document.body.appendChild(el);
      requestAnimationFrame(() => el.classList.add('is-visible'));
      setTimeout(() => { el.classList.remove('is-visible'); setTimeout(() => el.remove(), 300); }, 3500);
    }

    function modal(html, { wide = false, label = 'Fenêtre' } = {}) {
      closeModal();
      const overlay = document.createElement('div');
      overlay.className = 'ms-overlay';
      overlay.id = 'msModal';
      overlay.innerHTML = `<div class="ms-modal rv-scope${wide ? ' ms-modal-wide' : ''}" role="dialog" aria-modal="true" aria-label="${esc(label)}">
        <button type="button" class="ms-close" data-close aria-label="Fermer">&times;</button>${html}</div>`;
      document.body.appendChild(overlay);
      document.body.classList.add('ms-no-scroll');
      overlay.addEventListener('click', (e) => { if (e.target === overlay || e.target.closest('[data-close]')) closeModal(); });
      return overlay;
    }

    function closeModal() {
      document.getElementById('msModal')?.remove();
      document.body.classList.remove('ms-no-scroll');
    }

    const empty = (icon, title, text) => `<div class="ms-empty"><div>${icon}</div><strong>${esc(title)}</strong><p>${esc(text)}</p></div>`;

    async function run(button, fn, done) {
      if (button) button.disabled = true;
      try {
        const res = await fn();
        if (done) toast(done);
        return res;
      } catch (error) {
        toast(error.message || 'Action impossible', 'error');
        return null;
      } finally {
        if (button) button.disabled = false;
      }
    }

    // ===== Données =====

    async function loadContext() {
      state.ctx = (await api('/context')).data;
    }

    function tabs() {
      const c = state.ctx;
      const list = [];
      if (c.isPresident) {
        list.push({ key: 'overview', icon: '🏛️', label: 'Mentors' });
        list.push({ key: 'pairs', icon: '🤝', label: 'Binômes' });
        list.push({ key: 'trainings', icon: '🎓', label: 'Formations' });
        list.push({ key: 'review', icon: '📥', label: 'Comptes rendus', count: c.pendingReview });
      }
      if (c.isMentor) {
        list.push({ key: 'mentees', icon: '🤝', label: 'Mes mentorés' });
        list.push({ key: 'myTrainings', icon: '🎓', label: 'Mes formations' });
        list.push({ key: 'myReports', icon: '📝', label: 'Mes comptes rendus' });
      }
      if (c.isMentor || c.isPresident) {
        list.push({ key: 'forumQueue', icon: '💬', label: 'Questions sans réponse' });
      }
      list.push({ key: 'messages', icon: '💬', label: c.isPresident ? 'Messages des mentors' : 'Messages à la Présidence', count: c.unreadMessages });
      return list;
    }

    // ===== Rendu général =====

    function frame() {
      root.innerHTML = `
        <div class="ms-root rv-scope">
          <nav class="ms-tabs" role="tablist" aria-label="Sections de l'espace mentor"></nav>
          <div class="ms-content" aria-live="polite"></div>
        </div>`;
      root.querySelector('.ms-tabs').addEventListener('click', (e) => {
        const btn = e.target.closest('[data-tab]');
        if (btn && btn.dataset.tab !== state.tab) go(btn.dataset.tab);
      });
      root.querySelector('.ms-content').addEventListener('click', onClick);
      root.querySelector('.ms-content').addEventListener('change', onChange);
      root.querySelector('.ms-content').addEventListener('submit', onSubmit);
    }

    function renderTabs() {
      const list = tabs();
      if (!list.some((t) => t.key === state.tab)) state.tab = list[0].key;
      root.querySelector('.ms-tabs').innerHTML = list.map((t) => `
        <button type="button" role="tab" class="ms-tab${t.key === state.tab ? ' is-active' : ''}" data-tab="${t.key}" aria-selected="${t.key === state.tab}">
          <span aria-hidden="true">${t.icon}</span> ${esc(t.label)}${t.count ? ` <span class="ms-count">${t.count}</span>` : ''}
        </button>`).join('');
    }

    async function go(tab) {
      state.tab = tab;
      clearInterval(state.poll);
      renderTabs();
      const content = root.querySelector('.ms-content');
      content.innerHTML = '<div class="ms-loading">Chargement…</div>';
      try {
        content.innerHTML = await VIEWS[tab]();
        if (tab === 'messages') afterMessages();
      } catch (error) {
        content.innerHTML = `<div class="ms-error">⚠️ ${esc(error.message || 'Chargement impossible')}</div>`;
      }
    }

    async function refresh() {
      await loadContext();
      await go(state.tab);
    }

    // ===== Vues Présidence =====

    async function viewOverview() {
      state.mentors = (await api('/mentors')).data;
      if (!state.mentors.length) {
        return empty('🧑‍🏫', 'Aucun mentor pour l\'instant', 'Nommez des mentors depuis l\'administration (Administrateurs › Mentors) : ils apparaîtront ici.');
      }
      const c = state.ctx;
      return `
        <div class="ms-kpis">
          <div class="ms-kpi"><span>Mentors</span><strong>${state.mentors.length}</strong></div>
          <div class="ms-kpi"><span>Binômes actifs</span><strong>${c.mentorships.filter((m) => m.status === 'ACTIVE').length}</strong></div>
          <div class="ms-kpi ms-kpi-info"><span>À examiner</span><strong>${c.pendingReview}</strong></div>
          <div class="ms-kpi ms-kpi-warn"><span>Messages non lus</span><strong>${c.unreadMessages}</strong></div>
        </div>
        <div class="ms-grid">
          ${state.mentors.map((m) => `
            <article class="ms-card">
              <div class="ms-card-head"><span class="ms-avatar">${esc((m.fullName || '?')[0])}</span><div><strong>${esc(m.fullName)}</strong><span>${esc(m.email)}</span></div></div>
              <div class="ms-stats"><span><strong>${m.mentorshipsCount}</strong> binôme(s)</span><span><strong>${m.formationsCount}</strong> formation(s)</span><span><strong>${m.reportsCount}</strong> compte(s) rendu(s)</span></div>
              <div class="ms-actions">
                <button type="button" class="ms-btn ms-btn-ghost" data-act="pair-new" data-mentor="${esc(m.id)}">+ Confier un mentoré</button>
                <button type="button" class="ms-btn ms-btn-ghost" data-act="open-thread" data-thread="${esc(m.id)}">💬 Écrire</button>
              </div>
            </article>`).join('')}
        </div>`;
    }

    function mentorshipCard(m, { president }) {
      return `
        <article class="ms-card">
          <div class="ms-card-head">
            <span class="ms-avatar">${esc((m.menteeName || '?')[0])}</span>
            <div><strong>${esc(m.menteeName)}</strong><span>${m.mentee ? esc(m.mentee.email) : esc(m.menteeContact || 'Sans compte sur le site')}</span></div>
            ${pill(STATUS_MENTORSHIP[m.status] || [m.status, 'muted'])}
          </div>
          ${president ? `<p class="ms-meta">Mentor : <strong>${esc(m.mentor.fullName)}</strong></p>` : ''}
          <p class="ms-goals">${m.goals ? esc(m.goals) : '<em>Objectifs à définir</em>'}</p>
          <p class="ms-meta">Depuis le ${esc(frDate(m.startDate))} · ${m.reportsCount} compte(s) rendu(s)${m.lastReportAt ? ` · dernier le ${esc(frDate(m.lastReportAt))}` : ''}</p>
          <div class="ms-actions">
            ${state.ctx.isMentor && !president ? `<button type="button" class="ms-btn ms-btn-primary" data-act="report-new" data-kind="MENTORAT" data-id="${esc(m.id)}">+ Compte rendu de séance</button>` : ''}
            <button type="button" class="ms-btn ms-btn-ghost" data-act="pair-edit" data-id="${esc(m.id)}">${president ? 'Gérer' : 'Objectifs'}</button>
          </div>
        </article>`;
    }

    async function viewPairs() {
      const list = state.ctx.mentorships;
      return `
        <div class="ms-toolbar"><button type="button" class="ms-btn ms-btn-primary" data-act="pair-new">+ Nouveau binôme</button></div>
        <div class="ms-grid">${list.length ? list.map((m) => mentorshipCard(m, { president: true })).join('') : empty('🤝', 'Aucun binôme', 'Confiez un mentoré à un mentor pour démarrer un accompagnement.')}</div>`;
    }

    function trainingCard(f, { president }) {
      const visio = f.visioStatus === 'LIVE' || f.visioStatus === 'ACTIVE';
      return `
        <article class="ms-card">
          <div class="ms-card-head"><span class="ms-avatar ms-avatar-gold">${esc(f.icon || '🎓')}</span><div><strong>${esc(f.title)}</strong><span>${f.registrationsCount} inscrit(s)${f.startDate ? ` · début ${esc(frDate(f.startDate))}` : ''}${f.location ? ` · ${esc(f.location)}` : ''}</span></div></div>
          <p class="ms-meta">Animateurs : ${f.trainers.length ? f.trainers.map((t) => esc(t.fullName)).join(', ') : '<em>aucun</em>'}</p>
          <div class="ms-actions">
            ${president ? `<button type="button" class="ms-btn ms-btn-ghost" data-act="trainers" data-id="${esc(f.id)}">Animateurs</button>` : ''}
            <button type="button" class="ms-btn ms-btn-ghost" data-act="registrations" data-id="${esc(f.id)}">Inscrits</button>
            <button type="button" class="ms-btn ms-btn-ghost" data-act="schedule" data-id="${esc(f.id)}">Planning</button>
            <button type="button" class="ms-btn ${visio ? 'ms-btn-danger' : 'ms-btn-ghost'}" data-act="${visio ? 'visio-stop' : 'visio-start'}" data-id="${esc(f.id)}">${visio ? '⏹ Fermer la visio' : '🎥 Ouvrir la visio'}</button>
            ${visio ? `<a class="ms-btn ms-btn-ghost" href="${esc(siteUrl(`visio.html?formation=${encodeURIComponent(f.id)}`))}" target="_blank" rel="noopener">Rejoindre</a>` : ''}
            ${state.ctx.isMentor && !president ? `<button type="button" class="ms-btn ms-btn-primary" data-act="report-new" data-kind="SESSION_FORMATION" data-id="${esc(f.id)}">+ Compte rendu de session</button>` : ''}
            ${f.slug ? `<a class="ms-btn ms-btn-ghost" href="${esc(siteUrl(`formation-detail.html?slug=${encodeURIComponent(f.slug)}`))}" target="_blank" rel="noopener">Fiche</a>` : ''}
          </div>
        </article>`;
    }

    // Liens vers les pages du site, depuis le site comme depuis l'administration
    function siteUrl(path) {
      return window.location.pathname.includes('/admin-frontend/') ? `../frontend/${path}` : path;
    }

    async function viewTrainings() {
      const list = state.ctx.formations;
      return `<p class="ms-hint">Confiez chaque formation à un ou plusieurs mentors : ils gèrent les inscrits, le planning, la visio et rédigent les comptes rendus de session.</p>
        <div class="ms-grid">${list.map((f) => trainingCard(f, { president: true })).join('') || empty('🎓', 'Aucune formation', 'Les formations publiées apparaîtront ici.')}</div>`;
    }

    function reportRow(r) {
      const p = r.permissions;
      return `
        <article class="ms-row">
          <div class="ms-row-main">
            <strong>${esc(tpl()[r.kind]?.icon || '📝')} ${esc(r.title)}</strong>
            <span>${esc(r.author.fullName)} · ${r.submittedAt ? `soumis le ${esc(frDate(r.submittedAt))}` : `modifié le ${esc(frDate(r.updatedAt))}`}</span>
            ${r.status === 'NEEDS_CHANGES' && r.reviewComment ? `<em>↩️ ${esc(r.reviewComment)}</em>` : ''}
          </div>
          ${RV.statusBadge(r.status)}
          <div class="ms-actions">
            <button type="button" class="ms-btn ${p.review ? 'ms-btn-primary' : 'ms-btn-ghost'}" data-act="report-view" data-id="${esc(r.id)}">${p.review ? 'Examiner' : 'Ouvrir'}</button>
            ${p.edit ? `<button type="button" class="ms-btn ms-btn-ghost" data-act="report-edit" data-id="${esc(r.id)}">Modifier</button>` : ''}
            ${p.submit ? `<button type="button" class="ms-btn ms-btn-primary" data-act="report-submit" data-id="${esc(r.id)}">Soumettre</button>` : ''}
            ${r.status !== 'DRAFT' ? `<button type="button" class="ms-btn ms-btn-ghost" data-act="report-pdf" data-id="${esc(r.id)}">PDF</button>` : ''}
            ${p.delete && r.status === 'DRAFT' ? `<button type="button" class="ms-btn ms-btn-danger" data-act="report-delete" data-id="${esc(r.id)}">Supprimer</button>` : ''}
          </div>
        </article>`;
    }

    async function viewReview() {
      const all = (await api('/reports')).data.filter((r) => r.author.id !== user.id || r.status !== 'DRAFT');
      const toReview = all.filter((r) => r.permissions.review);
      const others = all.filter((r) => !r.permissions.review);
      return `
        <h3 class="ms-h3">📥 À examiner</h3>
        <div class="ms-list">${toReview.length ? toReview.map(reportRow).join('') : empty('✅', 'Rien à examiner', 'Les comptes rendus soumis par les mentors arriveront ici.')}</div>
        <h3 class="ms-h3">🗂️ Tous les comptes rendus</h3>
        <div class="ms-list">${others.length ? others.map(reportRow).join('') : '<p class="ms-hint">Aucun autre compte rendu.</p>'}</div>`;
    }

    // ===== Vues mentor =====

    async function viewMentees() {
      const list = state.ctx.mentorships.filter((m) => m.mentor.id === user.id);
      return `<div class="ms-grid">${list.length ? list.map((m) => mentorshipCard(m, { president: false })).join('') : empty('🤝', 'Aucun mentoré pour l\'instant', 'La Présidence vous confiera des mentorés : vous serez notifié.')}</div>`;
    }

    async function viewMyTrainings() {
      const list = state.ctx.formations.filter((f) => f.trainers.some((t) => t.id === user.id));
      return `<div class="ms-grid">${list.length ? list.map((f) => trainingCard(f, { president: false })).join('') : empty('🎓', 'Aucune formation confiée', 'La Présidence vous confiera l\'animation de formations : vous les gérerez ici.')}</div>`;
    }

    async function viewMyReports() {
      const list = (await api('/reports?scope=mine')).data;
      return `<div class="ms-list">${list.length ? list.map(reportRow).join('') : empty('📝', 'Aucun compte rendu', 'Après chaque séance ou session, rédigez un compte rendu depuis « Mes mentorés » ou « Mes formations ».')}</div>`;
    }

    async function viewForumQueue() {
      const topics = (await request('/forum/unanswered')).data;
      if (!topics.length) return empty('✅', 'Aucune question en attente', 'Les nouvelles questions sans réponse apparaîtront ici.');
      return `
        <h3 class="ms-h3">💬 Questions à accompagner</h3>
        <p class="ms-hint">Les plus anciennes sont affichées en premier. Objectif : une première réponse sous 48 h. Les identités restent liées aux comptes pour la modération.</p>
        <div class="ms-list">${topics.map((topic) => {
          const author = topic.author || {};
          const identity = [author.firstName, author.lastName].filter(Boolean).join(' ');
          const authorLabel = author.forumDisplayName
            ? `${esc(author.forumDisplayName)} · compte : ${esc(identity)}`
            : esc(identity || 'Membre');
          const ageHours = Math.max(0, Math.floor((Date.now() - new Date(topic.createdAt).getTime()) / 3600000));
          const age = ageHours >= 24 ? `${Math.floor(ageHours / 24)} j` : `${ageHours} h`;
          return `
            <article class="ms-row">
              <div class="ms-row-main">
                <strong>${esc(topic.title)}</strong>
                <span>${esc(topic.category)} · ${authorLabel} · publiée il y a ${age}</span>
              </div>
              <a class="ms-btn ms-btn-primary" href="/frontend/forum-topic.html?id=${encodeURIComponent(topic.id)}">Répondre</a>
            </article>`;
        }).join('')}</div>`;
    }

    // ===== Messagerie =====

    async function viewMessages() {
      const c = state.ctx;
      let threadsHtml = '';
      if (c.isPresident) {
        const threads = (await api('/threads')).data;
        if (!state.threadUserId && threads.length) state.threadUserId = threads[0].threadUserId;
        threadsHtml = `<aside class="ms-threads">${threads.length ? threads.map((t) => `
          <button type="button" class="ms-thread${t.threadUserId === state.threadUserId ? ' is-active' : ''}" data-act="open-thread" data-thread="${esc(t.threadUserId)}">
            <strong>${esc(t.fullName)}</strong>${t.unread ? `<span class="ms-count">${t.unread}</span>` : ''}
            <span>${t.lastMessage ? esc(t.lastMessage.body) : '<em>Aucun message</em>'}</span>
          </button>`).join('') : '<p class="ms-hint">Aucun mentor.</p>'}</aside>`;
        if (!state.threadUserId) return `<div class="ms-chat-layout">${threadsHtml}${empty('💬', 'Aucune conversation', 'Les mentors vous écriront ici.')}</div>`;
      }
      const query = c.isPresident ? `?thread=${encodeURIComponent(state.threadUserId)}` : '';
      const messages = (await api(`/messages${query}`)).data;
      // Le fil ouvert vient d'être lu : compteur mis à jour sans recharger l'espace
      if (c.isPresident) {
        const threads = (await api('/threads')).data;
        c.unreadMessages = threads.reduce((n, t) => n + t.unread, 0);
      } else {
        c.unreadMessages = 0;
      }
      renderTabs();
      return `
        <div class="ms-chat-layout${c.isPresident ? '' : ' ms-chat-single'}">
          ${threadsHtml}
          <section class="ms-chat">
            <div class="ms-messages" id="msMessages">
              ${messages.length ? messages.map((m) => `
                <div class="ms-msg${m.mine ? ' is-mine' : ''}">
                  <p>${esc(m.body).replace(/\n/g, '<br>')}</p>
                  <span>${esc(m.mine ? 'Vous' : m.author.fullName)} · ${esc(frTime(m.createdAt))}</span>
                </div>`).join('') : `<p class="ms-hint">${c.isPresident ? 'Démarrez la conversation.' : 'Écrivez à la Présidence pour coordonner vos séances et formations.'}</p>`}
            </div>
            <form class="ms-compose" data-form="message">
              <label class="ms-sr" for="msBody">Votre message</label>
              <textarea id="msBody" name="body" rows="2" maxlength="4000" required placeholder="Votre message…"></textarea>
              <button type="submit" class="ms-btn ms-btn-primary">Envoyer</button>
            </form>
          </section>
        </div>`;
    }

    function afterMessages() {
      const box = root.querySelector('#msMessages');
      if (box) box.scrollTop = box.scrollHeight;
      // Nouveaux messages : rafraîchissement discret toutes les 20 s, tant que l'onglet est ouvert
      state.poll = setInterval(async () => {
        if (state.tab !== 'messages' || document.hidden || root.querySelector('#msBody')?.value) return;
        try {
          root.querySelector('.ms-content').innerHTML = await viewMessages();
          const b = root.querySelector('#msMessages');
          if (b) b.scrollTop = b.scrollHeight;
        } catch (_) { /* nouvel essai au prochain passage */ }
      }, 20000);
    }

    const VIEWS = {
      overview: viewOverview, pairs: viewPairs, trainings: viewTrainings, review: viewReview,
      forumQueue: viewForumQueue, mentees: viewMentees, myTrainings: viewMyTrainings, myReports: viewMyReports, messages: viewMessages,
    };

    // ===== Fenêtres d'action =====

    async function openPairForm(mentorId) {
      if (!state.mentors) state.mentors = (await api('/mentors')).data;
      const el = modal(`
        <h2 class="ms-modal-title">🤝 Nouveau binôme</h2>
        <form class="ms-form" data-form="pair">
          <label>Mentor<select name="mentorId" required>${state.mentors.map((m) => `<option value="${esc(m.id)}" ${m.id === mentorId ? 'selected' : ''}>${esc(m.fullName)}</option>`).join('')}</select></label>
          <label>Mentoré inscrit sur le site <span class="ms-hint">(recherche par nom ou e-mail)</span>
            <input type="search" name="search" autocomplete="off" placeholder="Ex. : Diallo, awa@…">
          </label>
          <div class="ms-suggest" data-suggest></div>
          <input type="hidden" name="menteeId">
          <label>Ou nom du mentoré (sans compte)<input name="menteeName" maxlength="150"></label>
          <label>Contact (téléphone, e-mail)<input name="menteeContact" maxlength="200"></label>
          <label>Objectifs de l'accompagnement<textarea name="goals" rows="3" maxlength="3000" placeholder="Orientation, recherche de stage, projet entrepreneurial…"></textarea></label>
          <button type="submit" class="ms-btn ms-btn-primary">Créer le binôme</button>
        </form>`, { label: 'Nouveau binôme' });
      if (!state.mentors.length) el.querySelector('form').innerHTML = '<p>Aucun mentor : nommez d\'abord des mentors dans l\'administration.</p>';
      let timer;
      el.querySelector('[name=search]')?.addEventListener('input', (e) => {
        clearTimeout(timer);
        timer = setTimeout(async () => {
          const q = e.target.value.trim();
          const box = el.querySelector('[data-suggest]');
          if (q.length < 2) { box.innerHTML = ''; return; }
          const users = (await api(`/members?q=${encodeURIComponent(q)}`)).data;
          box.innerHTML = users.map((u) => `<button type="button" class="ms-suggest-item" data-pick="${esc(u.id)}" data-name="${esc(u.fullName)}">${esc(u.fullName)} <span>${esc(u.email)}</span></button>`).join('') || '<p class="ms-hint">Aucun membre trouvé.</p>';
        }, 250);
      });
      el.addEventListener('click', (e) => {
        const pick = e.target.closest('[data-pick]');
        if (!pick) return;
        const form = el.querySelector('form');
        form.menteeId.value = pick.dataset.pick;
        form.menteeName.value = pick.dataset.name;
        form.search.value = pick.dataset.name;
        el.querySelector('[data-suggest]').innerHTML = `<p class="ms-hint">✅ ${esc(pick.dataset.name)} sélectionné(e)</p>`;
      });
      el.querySelector('form')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const f = e.target;
        const body = { mentorId: f.mentorId.value, menteeId: f.menteeId.value || null, menteeName: f.menteeName.value.trim(), menteeContact: f.menteeContact.value.trim() || null, goals: f.goals.value.trim() || null };
        if (!body.menteeId && !body.menteeName) { toast('Choisissez un membre ou indiquez un nom', 'error'); return; }
        if (await run(f.querySelector('button[type=submit]'), () => api('/mentorships', json('POST', body)), 'Binôme créé')) {
          closeModal();
          refresh();
        }
      });
    }

    function openPairEdit(id) {
      const m = state.ctx.mentorships.find((x) => x.id === id);
      if (!m) return;
      const president = state.ctx.isPresident;
      const el = modal(`
        <h2 class="ms-modal-title">🤝 ${esc(m.menteeName)}</h2>
        <form class="ms-form" data-form="pair-edit">
          <label>Objectifs<textarea name="goals" rows="4" maxlength="3000">${esc(m.goals || '')}</textarea></label>
          <label>Contact<input name="menteeContact" maxlength="200" value="${esc(m.menteeContact || '')}"></label>
          ${president ? `<label>Statut<select name="status">${Object.entries(STATUS_MENTORSHIP).map(([k, [l]]) => `<option value="${k}" ${m.status === k ? 'selected' : ''}>${esc(l)}</option>`).join('')}</select></label>` : ''}
          <button type="submit" class="ms-btn ms-btn-primary">Enregistrer</button>
        </form>`, { label: 'Binôme' });
      el.querySelector('form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const f = e.target;
        const body = { goals: f.goals.value.trim() || null, menteeContact: f.menteeContact.value.trim() || null };
        if (president) body.status = f.status.value;
        if (await run(f.querySelector('button'), () => api(`/mentorships/${id}`, json('PUT', body)), 'Binôme mis à jour')) {
          closeModal();
          refresh();
        }
      });
    }

    async function openTrainers(id) {
      const f = state.ctx.formations.find((x) => x.id === id);
      if (!state.mentors) state.mentors = (await api('/mentors')).data;
      const el = modal(`
        <h2 class="ms-modal-title">🎓 ${esc(f.title)}</h2>
        <p class="ms-hint">Cochez les mentors qui animent cette formation.</p>
        <div class="ms-checks">${state.mentors.map((m) => `
          <label class="ms-check"><input type="checkbox" data-trainer="${esc(m.id)}" ${f.trainers.some((t) => t.id === m.id) ? 'checked' : ''}> ${esc(m.fullName)}</label>`).join('') || '<p>Aucun mentor.</p>'}</div>`, { label: 'Animateurs' });
      el.addEventListener('change', async (e) => {
        const box = e.target.closest('[data-trainer]');
        if (!box) return;
        const userId = box.dataset.trainer;
        const ok = await run(null, () => (box.checked
          ? api(`/formations/${id}/trainers`, json('POST', { userId }))
          : api(`/formations/${id}/trainers/${userId}`, { method: 'DELETE' })), box.checked ? 'Animateur ajouté' : 'Animateur retiré');
        if (!ok) box.checked = !box.checked;
        await loadContext();
      });
      el.addEventListener('click', (e) => { if (e.target.closest('[data-close]') || e.target === el) go(state.tab); });
    }

    async function openRegistrations(id) {
      const f = state.ctx.formations.find((x) => x.id === id);
      const res = (await api(`/formations/${id}/registrations`)).data;
      const list = res.registrations || res.data || res || [];
      const el = modal(`
        <h2 class="ms-modal-title">👥 Inscrits · ${esc(f.title)}</h2>
        ${list.length ? `<div class="ms-table-wrap"><table class="ms-table">
          <thead><tr><th>Nom</th><th>Contact</th><th>Inscrit le</th><th>Statut</th></tr></thead>
          <tbody>${list.map((r) => `<tr>
            <td><strong>${esc(r.name)}</strong>${r.motivation ? `<br><span class="ms-hint">${esc(r.motivation.slice(0, 120))}</span>` : ''}</td>
            <td>${esc(r.email)}${r.phone ? `<br>${esc(r.phone)}` : ''}</td>
            <td>${esc(frDate(r.createdAt))}</td>
            <td><select data-reg="${esc(r.id)}">${Object.entries(REG_STATUS).map(([k, l]) => `<option value="${k}" ${r.status === k ? 'selected' : ''}>${esc(l)}</option>`).join('')}</select></td>
          </tr>`).join('')}</tbody></table></div>` : empty('👥', 'Aucun inscrit', 'Les inscriptions faites depuis la fiche formation apparaîtront ici.')}`, { wide: true, label: 'Inscrits' });
      el.addEventListener('change', async (e) => {
        const sel = e.target.closest('[data-reg]');
        if (sel) await run(sel, () => api(`/registrations/${sel.dataset.reg}`, json('PUT', { status: sel.value })), 'Inscription mise à jour');
      });
    }

    function openSchedule(id) {
      const f = state.ctx.formations.find((x) => x.id === id);
      const day = (v) => (v ? new Date(v).toISOString().slice(0, 10) : '');
      const el = modal(`
        <h2 class="ms-modal-title">📅 Planning · ${esc(f.title)}</h2>
        <form class="ms-form">
          <div class="ms-form-2">
            <label>Début<input type="date" name="startDate" value="${esc(day(f.startDate))}"></label>
            <label>Fin<input type="date" name="endDate" value="${esc(day(f.endDate))}"></label>
          </div>
          <label>Lieu<input name="location" maxlength="200" value="${esc(f.location || '')}" placeholder="Dakar, salle du club / En ligne"></label>
          <button type="submit" class="ms-btn ms-btn-primary">Enregistrer</button>
        </form>`, { label: 'Planning' });
      el.querySelector('form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const form = e.target;
        const body = { startDate: form.startDate.value || null, endDate: form.endDate.value || null, location: form.location.value.trim() || null };
        if (await run(form.querySelector('button'), () => api(`/formations/${id}/schedule`, json('PUT', body)), 'Planning mis à jour')) {
          closeModal();
          refresh();
        }
      });
    }

    // ===== Comptes rendus =====

    function fieldHtml(s, value) {
      const id = `ms-f-${s.key}`;
      const req = s.required ? ' <span class="ms-req">*</span>' : '';
      if (s.type === 'table') {
        const rows = Array.isArray(value) && value.length ? value : [{}];
        return `<div class="ms-field" data-table="${s.key}"><label>${esc(s.label)}</label>
          <div class="ms-table-wrap"><table class="ms-edit-table"><thead><tr>${s.columns.map((c) => `<th>${esc(c.label)}</th>`).join('')}<th></th></tr></thead>
          <tbody>${rows.map((r) => rowHtml(s, r)).join('')}</tbody></table></div>
          <button type="button" class="ms-btn ms-btn-ghost ms-btn-sm" data-act="row-add" data-table="${s.key}">+ Ajouter une ligne</button></div>`;
      }
      let input;
      if (s.type === 'textarea') input = `<textarea id="${id}" data-field="${s.key}" rows="3" maxlength="8000">${esc(value || '')}</textarea>`;
      else if (s.type === 'select') input = `<select id="${id}" data-field="${s.key}"><option value="">— Choisir —</option>${s.options.map((o) => `<option ${o === value ? 'selected' : ''}>${esc(o)}</option>`).join('')}</select>`;
      else if (s.type === 'date') input = `<input id="${id}" type="date" data-field="${s.key}" value="${esc(value || '')}">`;
      else if (s.type === 'number') input = `<input id="${id}" type="number" data-field="${s.key}" value="${value ?? ''}" min="0">`;
      else input = `<input id="${id}" data-field="${s.key}" maxlength="300" value="${esc(value || '')}">`;
      return `<div class="ms-field"><label for="${id}">${esc(s.label)}${req}</label>${input}</div>`;
    }

    function rowHtml(s, r = {}) {
      return `<tr>${s.columns.map((c) => `<td><input type="${c.type === 'date' ? 'date' : 'text'}" data-col="${c.key}" value="${esc(r[c.key] || '')}" aria-label="${esc(c.label)}"></td>`).join('')}
        <td><button type="button" class="ms-icon" data-act="row-del" aria-label="Supprimer la ligne">✕</button></td></tr>`;
    }

    function collect(form, template) {
      const content = {};
      template.sections.forEach((s) => {
        if (s.type === 'table') {
          content[s.key] = [...form.querySelectorAll(`[data-table="${s.key}"] tbody tr`)]
            .map((tr) => Object.fromEntries([...tr.querySelectorAll('[data-col]')].map((i) => [i.dataset.col, i.value])));
        } else {
          content[s.key] = form.querySelector(`[data-field="${s.key}"]`)?.value ?? '';
        }
      });
      return content;
    }

    function openEditor({ kind, targetId, report }) {
      const template = tpl()[kind || report.kind];
      let currentId = report?.id || null;
      const subject = report ? report.position.title
        : kind === 'MENTORAT'
          ? `Mentorat · ${state.ctx.mentorships.find((m) => m.id === targetId)?.menteeName || ''}`
          : `Formation · ${state.ctx.formations.find((f) => f.id === targetId)?.title || ''}`;
      const el = modal(`
        <form class="ms-form ms-editor" novalidate>
          <p class="ms-kicker">${esc(template.icon)} ${esc(subject)}</p>
          <h2 class="ms-modal-title">${report ? 'Modifier le compte rendu' : esc(template.label)}</h2>
          ${report?.status === 'NEEDS_CHANGES' && report.reviewComment ? `<div class="rv-alert"><strong>Corrections demandées :</strong><br>${esc(report.reviewComment)}</div>` : ''}
          <div class="ms-field"><label for="ms-title">Titre <span class="ms-hint">(facultatif)</span></label><input id="ms-title" maxlength="200" value="${esc(report?.title || '')}"></div>
          ${template.sections.map((s) => fieldHtml(s, report?.content?.[s.key])).join('')}
          <div class="ms-editor-foot">
            <button type="button" class="ms-btn ms-btn-ghost" data-close>Annuler</button>
            <button type="button" class="ms-btn ms-btn-ghost" data-save>💾 Brouillon</button>
            <button type="button" class="ms-btn ms-btn-primary" data-send>📨 Soumettre à la Présidence</button>
          </div>
        </form>`, { wide: true, label: template.label });
      const form = el.querySelector('form');
      form.addEventListener('click', (e) => {
        const add = e.target.closest('[data-act="row-add"]');
        if (add) {
          const s = template.sections.find((x) => x.key === add.dataset.table);
          form.querySelector(`[data-table="${s.key}"] tbody`).insertAdjacentHTML('beforeend', rowHtml(s));
        }
        const del = e.target.closest('[data-act="row-del"]');
        if (del) {
          const tbody = del.closest('tbody');
          if (tbody.children.length > 1) del.closest('tr').remove();
          else del.closest('tr').querySelectorAll('input').forEach((i) => { i.value = ''; });
        }
      });
      async function save() {
        const payload = { title: form.querySelector('#ms-title').value.trim(), content: collect(form, template) };
        const res = currentId
          ? await api(`/reports/${currentId}`, json('PUT', payload))
          : await api('/reports', json('POST', { kind, ...(kind === 'MENTORAT' ? { mentorshipId: targetId } : { formationId: targetId }), ...payload }));
        currentId = res.data.id;
        return res.data;
      }
      form.querySelector('[data-save]').addEventListener('click', (e) => run(e.currentTarget, save, 'Brouillon enregistré'));
      form.querySelector('[data-send]').addEventListener('click', async (e) => {
        if (!window.confirm('Soumettre ce compte rendu à la Présidence ? Il ne sera plus modifiable, sauf si des corrections sont demandées.')) return;
        const ok = await run(e.currentTarget, async () => {
          const saved = await save();
          return api(`/reports/${saved.id}/submit`, { method: 'POST' });
        }, 'Compte rendu soumis à la Présidence');
        if (ok) { closeModal(); refresh(); }
      });
    }

    async function openReport(id) {
      let report;
      try {
        report = (await api(`/reports/${id}`)).data;
      } catch (error) {
        toast(error.message || 'Compte rendu introuvable', 'error');
        return;
      }
      const p = report.permissions;
      const el = modal(`
        ${RV.render(report, tpl())}
        ${p.review ? `
          <div class="ms-review">
            <label for="msReviewComment"><strong>Décision de la Présidence</strong> <span class="ms-hint">(commentaire obligatoire pour demander des corrections)</span></label>
            <textarea id="msReviewComment" rows="3" maxlength="3000"></textarea>
            <div class="ms-actions">
              <button type="button" class="ms-btn ms-btn-ghost" data-review="NEEDS_CHANGES">↩️ Demander des corrections</button>
              <button type="button" class="ms-btn ms-btn-primary" data-review="VALIDATED">✅ Valider</button>
            </div>
          </div>` : ''}
        <div class="ms-editor-foot">
          ${report.status !== 'DRAFT' ? '<button type="button" class="ms-btn ms-btn-ghost" data-pdf>⬇️ PDF</button>' : ''}
          ${p.edit ? '<button type="button" class="ms-btn ms-btn-ghost" data-edit>Modifier</button>' : ''}
          <button type="button" class="ms-btn ms-btn-ghost" data-close>Fermer</button>
        </div>`, { wide: true, label: report.title });
      el.addEventListener('click', async (e) => {
        if (e.target.closest('[data-pdf]')) RV.print([report], tpl(), { title: report.title, subtitle: `${report.position.title} · ${report.author.fullName}` });
        if (e.target.closest('[data-edit]')) openEditor({ report });
        const btn = e.target.closest('[data-review]');
        if (!btn) return;
        const comment = el.querySelector('#msReviewComment').value.trim();
        if (btn.dataset.review === 'NEEDS_CHANGES' && !comment) { toast('Précisez les corrections attendues', 'error'); return; }
        if (await run(btn, () => api(`/reports/${id}/review`, json('POST', { decision: btn.dataset.review, comment })), 'Décision enregistrée')) {
          closeModal();
          refresh();
        }
      });
    }

    // ===== Événements =====

    async function onClick(e) {
      const btn = e.target.closest('[data-act]');
      if (!btn) return;
      const { act, id } = btn.dataset;
      if (act === 'pair-new') openPairForm(btn.dataset.mentor);
      if (act === 'pair-edit') openPairEdit(id);
      if (act === 'trainers') openTrainers(id);
      if (act === 'registrations') openRegistrations(id);
      if (act === 'schedule') openSchedule(id);
      if (act === 'visio-start' || act === 'visio-stop') {
        if (await run(btn, () => api(`/formations/${id}/visio/${act === 'visio-start' ? 'start' : 'stop'}`, { method: 'POST' }), act === 'visio-start' ? 'Salle virtuelle ouverte' : 'Salle virtuelle fermée')) refresh();
      }
      if (act === 'report-new') openEditor({ kind: btn.dataset.kind, targetId: id });
      if (act === 'report-view') openReport(id);
      if (act === 'report-edit') {
        const r = await run(null, () => api(`/reports/${id}`));
        if (r) openEditor({ report: r.data });
      }
      if (act === 'report-submit' && window.confirm('Soumettre ce compte rendu à la Présidence ?')) {
        if (await run(btn, () => api(`/reports/${id}/submit`, { method: 'POST' }), 'Compte rendu soumis')) refresh();
      }
      if (act === 'report-pdf') {
        const r = await run(null, () => api(`/reports/${id}`));
        if (r) RV.print([r.data], tpl(), { title: r.data.title, subtitle: `${r.data.position.title} · ${r.data.author.fullName}` });
      }
      if (act === 'report-delete' && window.confirm('Supprimer définitivement ce brouillon ?')) {
        if (await run(btn, () => api(`/reports/${id}`, { method: 'DELETE' }), 'Brouillon supprimé')) refresh();
      }
      if (act === 'open-thread') {
        state.threadUserId = btn.dataset.thread;
        go('messages');
      }
    }

    function onChange() { /* réservé : filtres futurs */ }

    async function onSubmit(e) {
      const form = e.target.closest('[data-form="message"]');
      if (!form) return;
      e.preventDefault();
      const body = form.body.value.trim();
      if (!body) return;
      const payload = state.ctx.isPresident ? { threadUserId: state.threadUserId, body } : { body };
      if (await run(form.querySelector('button'), () => api('/messages', json('POST', payload)))) {
        form.body.value = '';
        go('messages');
      }
    }

    // ===== Démarrage =====

    (async () => {
      root.innerHTML = '<div class="ms-loading">Chargement de l\'espace mentor…</div>';
      try {
        await loadContext();
      } catch (error) {
        root.innerHTML = error.status === 403
          ? empty('🔒', 'Espace réservé aux mentors', 'Cet espace s\'ouvre lorsque la Présidence vous nomme mentor du club.')
          : `<div class="ms-error">⚠️ ${esc(error.message || 'Chargement impossible')}</div>`;
        return;
      }
      frame();
      const params = new URLSearchParams(window.location.search);
      if (params.get('thread')) state.threadUserId = params.get('thread');
      if (window.location.hash === '#messages') state.tab = 'messages';
      await go(state.tab || tabs()[0].key);
      if (params.get('report')) openReport(params.get('report'));
    })();

    return { refresh };
  }

  window.MentorSpace = { mount };
})();

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
        list.push({ key: 'requests', icon: '🙋', label: 'Demandes de mentor', count: c.pendingRequests });
        list.push({ key: 'applications', icon: '🌟', label: 'Candidatures', count: c.pendingApplications });
        list.push({ key: 'concerns', icon: '🔒', label: 'Signalements', count: c.stats?.openConcerns });
      }
      if (c.isMentor) {
        list.push({ key: 'mentees', icon: '🤝', label: 'Mes mentorés' });
        list.push({ key: 'myProfile', icon: '🪪', label: 'Mon profil', count: c.profileComplete ? 0 : '!' });
        list.push({ key: 'myTrainings', icon: '🎓', label: 'Mes formations' });
        list.push({ key: 'myReports', icon: '📝', label: 'Mes comptes rendus' });
      }
      if (c.isMentor || c.isPresident) {
        list.push({ key: 'forumQueue', icon: '💬', label: 'Questions sans réponse' });
        list.push({ key: 'suggestions', icon: '✏️', label: 'Fiches : signaler, proposer', count: c.isPresident ? c.openSuggestions : 0 });
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
        if (tab === 'suggestions') bindSuggestionForm();
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
      const st = c.stats || {};
      const nf = (v) => (v === null || v === undefined ? '—' : String(v).replace('.', ','));
      return `
        <div class="ms-kpis">
          <div class="ms-kpi"><span>Mentors</span><strong>${state.mentors.length}</strong></div>
          <div class="ms-kpi"><span>Binômes actifs</span><strong>${nf(st.activePairs ?? c.mentorships.filter((m) => m.status === 'ACTIVE').length)}</strong>${st.pausedPairs ? `<small>${st.pausedPairs} en pause</small>` : ''}</div>
          <div class="ms-kpi"><span>Séances (30 jours)</span><strong>${nf(st.sessionsDone30)}</strong><small>${nf(st.sessionsPlanned)} prévue(s)</small></div>
          <div class="ms-kpi"><span>Avis des mentorés</span><strong>${st.averageRating ? `${nf(st.averageRating)}/5` : '—'}</strong><small>${nf(st.ratingsCount)} avis (90 jours)</small></div>
          <div class="ms-kpi ms-kpi-info"><span>Demandes en attente</span><strong>${nf(st.pendingRequests)}</strong>${st.oldestRequestDays !== null && st.oldestRequestDays !== undefined ? `<small>la plus ancienne : ${st.oldestRequestDays} j</small>` : ''}</div>
          <div class="ms-kpi ms-kpi-info"><span>Comptes rendus à examiner</span><strong>${c.pendingReview}</strong></div>
          <div class="ms-kpi ms-kpi-warn"><span>Signalements ouverts</span><strong>${nf(st.openConcerns)}</strong></div>
          <div class="ms-kpi ms-kpi-warn"><span>Binômes sans séance (45 j)</span><strong>${nf(st.quietPairs)}</strong></div>
        </div>
        ${(st.toWatch || []).length ? `<section class="ms-card ms-watch"><h3 style="margin:0 0 0.5rem;">⚠️ Mentorés à suivre</h3>
          <p class="ms-hint" style="margin:0 0 0.5rem;">D'après le dernier compte rendu de leur mentor.</p>
          <ul class="ms-sessions">${st.toWatch.map((w) => `<li><span><strong>${esc(w.menteeName)}</strong> · mentor : ${esc(w.mentor)}<br><em>${esc(w.progression)} · ${esc(frDate(w.at))}</em></span></li>`).join('')}</ul></section>` : ''}
        <div class="ms-grid">
          ${state.mentors.map((m) => `
            <article class="ms-card">
              <div class="ms-card-head"><span class="ms-avatar">${esc((m.fullName || '?')[0])}</span><div><strong>${esc(m.fullName)}</strong><span>${esc(m.profile?.headline ? `${m.profile.headline}${m.profile.organization ? ` · ${m.profile.organization}` : ''}` : m.email)}</span></div></div>
              ${m.profile?.domains ? `<p class="ms-meta">Domaines : ${esc(m.profile.domains)}</p>` : '<p class="ms-meta"><em>Profil de mentor à compléter</em></p>'}
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
          <p class="ms-meta">Depuis le ${esc(frDate(m.startDate))} · ${m.reportsCount} compte(s) rendu(s)${m.lastReportAt ? ` · dernier le ${esc(frDate(m.lastReportAt))}` : ''}${m.rating ? ` · ⭐ ${String(m.rating.average).replace('.', ',')}/5 (${m.rating.count} avis)` : ''}</p>
          ${(m.upcomingSessions || []).length ? `<ul class="ms-sessions">${m.upcomingSessions.map((x) => `
            <li>
              <span>📅 <strong>${esc(frTime(x.scheduledAt))}</strong> · ${esc(x.format)}${x.place ? ` · ${esc(x.place)}` : ''}${x.topic ? `<br><em>${esc(x.topic)}</em>` : ''}</span>
              <span class="ms-session-actions">
                ${x.visioUrl ? `<a class="ms-btn ms-btn-ghost" href="${esc(siteUrl(x.visioUrl.replace(/^\//, '')))}" target="_blank" rel="noopener">${x.visioLive ? '🟢 Rejoindre' : '🎥 Salle visio'}</a>` : ''}
                <button type="button" class="ms-btn ms-btn-ghost" data-act="session-done" data-id="${esc(x.id)}">✓ Faite</button>
                <button type="button" class="ms-btn ms-btn-ghost" data-act="session-cancel" data-id="${esc(x.id)}">Annuler</button>
              </span>
            </li>`).join('')}</ul>` : ''}
          <div class="ms-actions">
            ${m.status !== 'ENDED' ? `<button type="button" class="ms-btn ms-btn-ghost" data-act="session-new" data-id="${esc(m.id)}">📅 Planifier une séance</button>` : ''}
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
            ${r.status !== 'DRAFT' ? `<button type="button" class="ms-btn ms-btn-ghost" data-act="report-pdf" data-id="${esc(r.id)}">⬇️ PDF</button>` : ''}
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
      return `${state.ctx.profileComplete ? '' : '<div class="ms-card ms-watch" style="margin-bottom:1rem;"><strong>🪪 Complète ton profil de mentor</strong><p class="ms-hint" style="margin:0.3rem 0 0.5rem;">Tes mentorés pourront découvrir ton métier et ton parcours.</p><button type="button" class="ms-btn ms-btn-primary" data-tab-go="myProfile">Compléter mon profil</button></div>'}<div class="ms-grid">${list.length ? list.map((m) => mentorshipCard(m, { president: false })).join('') : empty('🤝', 'Aucun mentoré pour l\'instant', 'La Présidence vous confiera des mentorés : vous serez notifié.')}</div>`;
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

    // ===== Demandes de mentor (Présidence) =====

    const REQ_STATUS = { PENDING: ['En attente', 'warning'], MATCHED: ['Binôme créé', 'success'], DECLINED: ['Non retenue', 'muted'] };

    async function viewRequests() {
      state.requests = (await api('/requests')).data;
      if (!state.requests.length) return empty('🙋', 'Aucune demande', 'Les adhérents peuvent demander un mentor depuis « Mon espace » : leurs demandes arrivent ici.');
      return `<div class="ms-grid">${state.requests.map((r) => `
        <article class="ms-card">
          <div class="ms-card-head"><span class="ms-avatar">${esc((r.user.fullName || '?')[0])}</span><div><strong>${esc(r.user.fullName)}</strong><span>${esc(r.user.email)}</span></div>${pill(REQ_STATUS[r.status] || [r.status, 'muted'])}</div>
          <p class="ms-goals">${esc(r.goals)}</p>
          <p class="ms-meta">${[r.domain && `Domaine : <strong>${esc(r.domain)}</strong>`, r.format && `Format : ${esc(r.format)}`, r.availability && `Disponibilités : ${esc(r.availability)}`].filter(Boolean).join(' · ') || 'Aucune préférence indiquée'}</p>
          <p class="ms-meta">Demande du ${esc(frDate(r.createdAt))}${r.handledAt ? ` · traitée le ${esc(frDate(r.handledAt))}${r.handledBy ? ` par ${esc(r.handledBy)}` : ''}` : ''}</p>
          ${r.response ? `<p class="ms-meta"><strong>Réponse :</strong> ${esc(r.response)}</p>` : ''}
          ${r.status === 'PENDING' ? `<div class="ms-actions">
            <button type="button" class="ms-btn ms-btn-primary" data-act="request-match" data-id="${esc(r.id)}">🤝 Former le binôme</button>
            <button type="button" class="ms-btn ms-btn-ghost" data-act="request-decline" data-id="${esc(r.id)}">Répondre sans binôme…</button>
          </div>` : ''}
        </article>`).join('')}</div>`;
    }

    // ===== Candidatures « Devenir mentor » (Présidence) =====

    const APP_STATUS = { PENDING: ['En attente', 'warning'], ACCEPTED: ['Acceptée', 'success'], DECLINED: ['Non retenue', 'muted'] };

    async function viewApplications() {
      state.applications = (await api('/applications')).data;
      if (!state.applications.length) return empty('🌟', 'Aucune candidature', 'Les candidatures déposées sur la page « Devenir mentor » du site arrivent ici.');
      return `<div class="ms-grid">${state.applications.map((a) => `
        <article class="ms-card">
          <div class="ms-card-head"><span class="ms-avatar">${esc((a.fullName || '?')[0])}</span><div><strong>${esc(a.fullName)}</strong><span>${esc(a.profession)}${a.organization ? ` · ${esc(a.organization)}` : ''}</span></div>${pill(APP_STATUS[a.status] || [a.status, 'muted'])}</div>
          <p class="ms-meta"><strong>Domaines :</strong> ${esc(a.domains)}</p>
          ${a.experience ? `<p class="ms-meta"><strong>Parcours :</strong> ${esc(a.experience)}</p>` : ''}
          <p class="ms-goals">${esc(a.motivation)}</p>
          <p class="ms-meta">${[`✉️ ${esc(a.email)}`, a.phone && `📞 ${esc(a.phone)}`, a.availability && `Disponibilités : ${esc(a.availability)}`, a.linkedinUrl && `<a href="${esc(a.linkedinUrl)}" target="_blank" rel="noopener noreferrer">Profil en ligne ↗</a>`].filter(Boolean).join(' · ')}</p>
          <p class="ms-meta">Reçue le ${esc(frDate(a.createdAt))} · ${a.hasAccount ? 'a déjà un compte sur le site' : 'pas encore de compte'}${a.status === 'ACCEPTED' ? ` · ${a.roleGranted ? 'rôle mentor attribué' : 'rôle attribué à sa première connexion'}` : ''}</p>
          ${a.response ? `<p class="ms-meta"><strong>Réponse :</strong> ${esc(a.response)}</p>` : ''}
          ${a.status === 'PENDING' ? `<div class="ms-actions">
            <button type="button" class="ms-btn ms-btn-primary" data-act="application-accept" data-id="${esc(a.id)}">🌟 Accepter comme mentor</button>
            <button type="button" class="ms-btn ms-btn-ghost" data-act="application-decline" data-id="${esc(a.id)}">Ne pas retenir…</button>
          </div>` : ''}
        </article>`).join('')}</div>`;
    }

    // ===== Profil du mentor (présenté à ses mentorés) =====

    async function viewMyProfile() {
      const p = (await api('/profile')).data;
      const field = (name, label, { area = false, max = 300, placeholder = '' } = {}) => `<label>${esc(label)}${area
        ? `<textarea name="${name}" rows="4" maxlength="${max}" placeholder="${esc(placeholder)}">${esc(p[name] || '')}</textarea>`
        : `<input name="${name}" maxlength="${max}" value="${esc(p[name] || '')}" placeholder="${esc(placeholder)}">`}</label>`;
      return `
        <section class="ms-card">
          <h3 style="margin:0 0 0.35rem;">🪪 Mon profil de mentor</h3>
          <p class="ms-hint" style="margin:0 0 0.75rem;">Tes mentorés voient ce profil dans leur espace pour savoir qui les accompagne ; la Présidence s'en sert pour former les binômes. Ton e-mail et ton téléphone ne sont jamais affichés.${p.draft ? ' <strong>Pré-rempli avec ta candidature : vérifie et complète.</strong>' : ''}</p>
          <form class="ms-form" data-form="mentor-profile">
            ${field('headline', 'Métier ou fonction *', { max: 150, placeholder: 'Ex. : ingénieure géomètre, étudiant en médecine (6e année)' })}
            ${field('organization', 'Entreprise ou établissement', { max: 150 })}
            ${field('domains', 'Domaines où tu peux aider *', { placeholder: 'Ex. : BTP, concours d\'ingénieur, premier emploi' })}
            ${field('bio', 'Présentation pour tes mentorés *', { area: true, max: 1500, placeholder: 'Qui tu es, ce que tu fais au quotidien, pourquoi tu accompagnes des jeunes…' })}
            ${field('experience', 'Parcours (études, postes)', { area: true, max: 1500 })}
            ${field('city', 'Ville', { max: 100 })}
            ${field('languages', 'Langues parlées', { max: 150, placeholder: 'Ex. : français, wolof, anglais' })}
            ${field('linkedinUrl', 'Profil en ligne (LinkedIn…)', { placeholder: 'https://' })}
            <button type="submit" class="ms-btn ms-btn-primary">Enregistrer mon profil</button>
          </form>
        </section>`;
    }

    // ===== Signalements confidentiels des mentorés (Présidence) =====

    async function viewConcerns() {
      state.concerns = (await api('/concerns')).data;
      if (!state.concerns.length) return empty('🔒', 'Aucun signalement', 'Les mentorés peuvent signaler, en toute confidentialité, une difficulté avec leur accompagnement depuis « Mon espace ».');
      return `<p class="ms-hint" style="margin:0 0 0.75rem;">Confidentiel : le mentor n'est jamais informé d'un signalement.</p>
        <div class="ms-grid">${state.concerns.map((x) => `
        <article class="ms-card">
          <div class="ms-card-head"><div><strong>${esc(x.mentee.fullName)}</strong><span>Mentor : ${esc(x.mentor)} · ${esc(frDate(x.createdAt))}</span></div>${pill(x.status === 'OPEN' ? ['À traiter', 'warning'] : ['Traité', 'success'])}</div>
          <p class="ms-goals">${esc(x.message)}</p>
          <p class="ms-meta">✉️ ${esc(x.mentee.email)}</p>
          ${x.resolution ? `<p class="ms-meta"><strong>Suite donnée :</strong> ${esc(x.resolution)}</p>` : ''}
          ${x.status === 'OPEN' ? `<div class="ms-actions">
            <button type="button" class="ms-btn ms-btn-primary" data-act="concern-resolve" data-id="${esc(x.id)}">Marquer traité…</button>
            <button type="button" class="ms-btn ms-btn-ghost" data-act="pair-edit" data-id="${esc(x.mentorshipId)}">Gérer le binôme</button>
          </div>` : ''}
        </article>`).join('')}</div>`;
    }

    function openSessionForm(mentorshipId) {
      const formats = state.ctx.sessionFormats || ['Visio du club', 'Présentiel', 'Téléphone', 'WhatsApp', 'Autre lien'];
      const tomorrow = new Date(Date.now() + 86400000);
      tomorrow.setHours(17, 0, 0, 0);
      const local = new Date(tomorrow.getTime() - tomorrow.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
      const el = modal(`
        <h2 class="ms-modal-title">📅 Planifier une séance</h2>
        <form class="ms-form" data-form="session">
          <label>Date et heure<input type="datetime-local" name="scheduledAt" required value="${local}"></label>
          <label>Durée<select name="durationMinutes">${[30, 45, 60, 90, 120].map((d) => `<option value="${d}" ${d === 60 ? 'selected' : ''}>${d} min</option>`).join('')}</select></label>
          <label>Format<select name="format">${formats.map((f) => `<option>${esc(f)}</option>`).join('')}</select></label>
          <label>Lieu, numéro ou lien <span class="ms-hint">(inutile pour « Visio du club » : la salle est sur le site)</span><input name="place" maxlength="300"></label>
          <label>Thème de la séance (facultatif)<input name="topic" maxlength="300" placeholder="Ex. : préparer l'oral du concours"></label>
          <p class="ms-hint">Ton mentoré est prévenu tout de suite, puis vous recevez tous les deux un rappel la veille.</p>
          <button type="submit" class="ms-btn ms-btn-primary">Planifier</button>
        </form>`, { label: 'Planifier une séance' });
      el.querySelector('form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const f = e.target;
        const when = new Date(f.scheduledAt.value);
        if (Number.isNaN(when.getTime())) { toast('Choisis une date', 'error'); return; }
        const body = { scheduledAt: when.toISOString(), durationMinutes: Number(f.durationMinutes.value), format: f.format.value, place: f.place.value.trim() || null, topic: f.topic.value.trim() || null };
        if (await run(f.querySelector('button[type=submit]'), () => api(`/mentorships/${mentorshipId}/sessions`, json('POST', body)), 'Séance planifiée : ton mentoré est prévenu')) {
          closeModal();
          refresh();
        }
      });
    }

    // ===== Fiches formations et métiers : signaler une erreur, proposer une modification =====

    const SUG_KINDS = { ERREUR: 'Erreur à corriger', MISE_A_JOUR: 'Information à mettre à jour', AJOUT: 'Contenu à ajouter', AUTRE: 'Autre' };
    const SUG_STATUS = { OPEN: ['En cours d\'examen', 'info'], APPLIED: ['Appliquée', 'success'], REJECTED: ['Non retenue', 'muted'] };
    let jobCatalog = null;

    async function loadJobCatalog() {
      if (jobCatalog) return jobCatalog;
      const res = await fetch(siteUrl('data/riasec-jobs.json'));
      const data = await res.json();
      jobCatalog = (data.jobs || []).map((j) => ({ id: j.slug || j.id, title: j.title, search: `${j.title} ${j.slug || ''}`.toLowerCase() }));
      return jobCatalog;
    }

    async function viewSuggestions() {
      const mine = (await api('/suggestions')).data;
      const preset = state.suggestPreset || {};
      return `
        <section class="ms-card ms-suggest-form">
          <h3 style="margin:0 0 0.35rem;">✏️ Signaler une erreur ou proposer une modification</h3>
          <p class="ms-hint" style="margin:0 0 0.75rem;">Ta proposition est examinée par les responsables des fiches (admins Formations ou Métiers) ou la Présidence, qui l'appliquent. Tu es prévenu de leur décision.</p>
          <form class="ms-form" data-form="suggestion">
            <label>Type de fiche<select name="targetType"><option value="job" ${preset.type === 'job' ? 'selected' : ''}>Fiche métier</option><option value="formation" ${preset.type === 'formation' ? 'selected' : ''}>Fiche formation</option></select></label>
            <label>Fiche concernée <span class="ms-hint">(tape quelques lettres du titre)</span><input type="search" name="targetSearch" autocomplete="off" value="${esc(preset.title || '')}" placeholder="Ex. : géomètre, prise de parole…"></label>
            <div class="ms-suggest" data-target-suggest>${preset.id ? `<p class="ms-hint">✅ ${esc(preset.title)}</p>` : ''}</div>
            <input type="hidden" name="targetId" value="${esc(preset.id || '')}"><input type="hidden" name="targetTitle" value="${esc(preset.title || '')}">
            <label>Nature<select name="kind">${Object.entries(SUG_KINDS).map(([k, v]) => `<option value="${k}">${esc(v)}</option>`).join('')}</select></label>
            <label>Partie de la fiche (facultatif)<input name="section" maxlength="150" placeholder="Ex. : Salaires, Module 2, Études…"></label>
            <label>Ce qui ne va pas ou ce qu'il faut changer<textarea name="message" rows="3" maxlength="3000" required minlength="10"></textarea></label>
            <label>Texte proposé (facultatif)<textarea name="proposal" rows="3" maxlength="5000" placeholder="Le texte corrigé, prêt à être recopié"></textarea></label>
            <button type="submit" class="ms-btn ms-btn-primary">Envoyer la proposition</button>
          </form>
        </section>
        <h3 class="ms-section-title" style="margin:1.25rem 0 0.6rem;">Mes propositions</h3>
        ${mine.length ? `<div class="ms-grid">${mine.map((x) => `
          <article class="ms-card">
            <div class="ms-card-head"><div><strong>${esc(x.targetTitle)}</strong><span>${x.targetType === 'formation' ? 'Formation' : 'Métier'} · ${esc(SUG_KINDS[x.kind] || x.kind)}${x.section ? ` · ${esc(x.section)}` : ''}</span></div>${pill(SUG_STATUS[x.status] || [x.status, 'muted'])}</div>
            <p class="ms-goals">${esc(x.message)}</p>
            ${x.response ? `<p class="ms-meta"><strong>Réponse${x.resolvedBy ? ` de ${esc(x.resolvedBy)}` : ''} :</strong> ${esc(x.response)}</p>` : ''}
            <p class="ms-meta">Envoyée le ${esc(frDate(x.createdAt))}</p>
          </article>`).join('')}</div>` : '<p class="ms-hint">Tu n\'as encore envoyé aucune proposition.</p>'}
        ${state.ctx.isPresident ? `<p class="ms-hint" style="margin-top:1rem;">Les propositions de tous les mentors se traitent dans l'administration, page « Propositions des mentors »${state.ctx.openSuggestions ? ` (${state.ctx.openSuggestions} à traiter)` : ''}.</p>` : ''}`;
    }

    function bindSuggestionForm() {
      const form = root.querySelector('[data-form="suggestion"]');
      if (!form) return;
      const box = form.querySelector('[data-target-suggest]');
      let timer;
      const reset = () => { form.targetId.value = ''; form.targetTitle.value = ''; };
      form.targetType.addEventListener('change', () => { reset(); form.targetSearch.value = ''; box.innerHTML = ''; });
      form.targetSearch.addEventListener('input', () => {
        reset();
        clearTimeout(timer);
        timer = setTimeout(async () => {
          const q = form.targetSearch.value.trim().toLowerCase();
          if (q.length < 2) { box.innerHTML = ''; return; }
          let items = [];
          try {
            items = form.targetType.value === 'job'
              ? (await loadJobCatalog()).filter((j) => j.search.includes(q)).slice(0, 10)
              : (await api(`/suggestions/targets?type=formation&q=${encodeURIComponent(q)}`)).data;
          } catch (_) { items = []; }
          box.innerHTML = items.map((i) => `<button type="button" class="ms-suggest-item" data-target="${esc(i.id)}" data-title="${esc(i.title)}">${esc(i.title)}</button>`).join('') || '<p class="ms-hint">Aucune fiche trouvée.</p>';
        }, 250);
      });
      box.addEventListener('click', (e) => {
        const pick = e.target.closest('[data-target]');
        if (!pick) return;
        form.targetId.value = pick.dataset.target;
        form.targetTitle.value = pick.dataset.title;
        form.targetSearch.value = pick.dataset.title;
        box.innerHTML = `<p class="ms-hint">✅ ${esc(pick.dataset.title)}</p>`;
      });
    }

    const VIEWS = {
      overview: viewOverview, pairs: viewPairs, trainings: viewTrainings, review: viewReview, requests: viewRequests, applications: viewApplications, concerns: viewConcerns, myProfile: viewMyProfile,
      forumQueue: viewForumQueue, suggestions: viewSuggestions, mentees: viewMentees, myTrainings: viewMyTrainings, myReports: viewMyReports, messages: viewMessages,
    };

    // ===== Fenêtres d'action =====

    async function openPairForm(mentorId, preset = {}) {
      if (!state.mentors) state.mentors = (await api('/mentors')).data;
      const el = modal(`
        <h2 class="ms-modal-title">🤝 Nouveau binôme</h2>
        <form class="ms-form" data-form="pair">
          <label>Mentor<select name="mentorId" required>${state.mentors.map((m) => `<option value="${esc(m.id)}" ${m.id === mentorId ? 'selected' : ''}>${esc(m.fullName)}${m.profile?.headline ? ` — ${esc(m.profile.headline)}` : ''}${m.profile?.domains ? ` (${esc(m.profile.domains)})` : ''}</option>`).join('')}</select></label>
          <label>Mentoré inscrit sur le site <span class="ms-hint">(recherche par nom ou e-mail)</span>
            <input type="search" name="search" autocomplete="off" placeholder="Ex. : Diallo, awa@…">
          </label>
          <div class="ms-suggest" data-suggest></div>
          <input type="hidden" name="menteeId" value="${esc(preset.menteeId || '')}">
          <input type="hidden" name="requestId" value="${esc(preset.requestId || '')}">
          ${preset.requestId ? `<p class="ms-hint">🙋 Demande de <strong>${esc(preset.menteeName)}</strong> : choisis le mentor qui lui correspond.</p>` : ''}
          <label>Ou nom du mentoré (sans compte)<input name="menteeName" maxlength="150" value="${esc(preset.menteeName || '')}"></label>
          <label>Contact (téléphone, e-mail)<input name="menteeContact" maxlength="200" value="${esc(preset.menteeContact || '')}"></label>
          <label>Objectifs de l'accompagnement<textarea name="goals" rows="3" maxlength="3000" placeholder="Orientation, recherche de stage, projet entrepreneurial…">${esc(preset.goals || '')}</textarea></label>
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
        const body = { mentorId: f.mentorId.value, menteeId: f.menteeId.value || null, menteeName: f.menteeName.value.trim(), menteeContact: f.menteeContact.value.trim() || null, goals: f.goals.value.trim() || null, requestId: f.requestId.value || null };
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
      const goTab = e.target.closest('[data-tab-go]');
      if (goTab) { go(goTab.dataset.tabGo); return; }
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
      if (act === 'session-new') openSessionForm(id);
      if (act === 'concern-resolve') {
        const resolution = window.prompt('Ce qui a été fait (le mentoré est prévenu que son signalement est traité) :');
        if (resolution && resolution.trim() && await run(btn, () => api(`/concerns/${id}/resolve`, json('POST', { resolution: resolution.trim() })), 'Signalement traité')) refresh();
      }
      if (act === 'session-done' || act === 'session-cancel') {
        const cancel = act === 'session-cancel';
        if (!cancel || window.confirm('Annuler cette séance ? Ton mentoré sera prévenu.')) {
          if (await run(btn, () => api(`/sessions/${id}`, json('PUT', { status: cancel ? 'CANCELLED' : 'DONE' })), cancel ? 'Séance annulée' : 'Séance marquée comme faite')) refresh();
        }
      }
      if (act === 'application-accept' && window.confirm('Accepter cette personne comme mentor du club ? Elle recevra son accès à l\'Espace mentor.')) {
        const response = window.prompt('Un mot de bienvenue (facultatif) :', '') ?? '';
        if (await run(btn, () => api(`/applications/${id}/decision`, json('POST', { decision: 'ACCEPTED', response: response.trim() || null })), 'Candidature acceptée')) refresh();
      }
      if (act === 'application-decline') {
        const response = window.prompt('Ta réponse au candidat (elle lui sera envoyée par e-mail) :');
        if (response && response.trim() && await run(btn, () => api(`/applications/${id}/decision`, json('POST', { decision: 'DECLINED', response: response.trim() })), 'Réponse envoyée')) refresh();
      }
      if (act === 'request-match') {
        const r = (state.requests || []).find((x) => x.id === id);
        if (r) openPairForm(null, { requestId: r.id, menteeId: r.user.id, menteeName: r.user.fullName, menteeContact: r.user.email, goals: [r.goals, r.domain && `Domaine : ${r.domain}`, r.format && r.format !== 'Peu importe' && `Format souhaité : ${r.format}`, r.availability && `Disponibilités : ${r.availability}`].filter(Boolean).join('\n') });
      }
      if (act === 'request-decline') {
        const response = window.prompt('Ta réponse à l\'adhérent (ex. : pas de mentor disponible dans ce domaine pour le moment, nous revenons vers toi en janvier) :');
        if (response && response.trim() && await run(btn, () => api(`/requests/${id}/decline`, json('POST', { response: response.trim() })), 'Réponse envoyée')) refresh();
      }
      if (act === 'open-thread') {
        state.threadUserId = btn.dataset.thread;
        go('messages');
      }
    }

    function onChange() { /* réservé : filtres futurs */ }

    async function onSubmit(e) {
      const profileForm = e.target.closest('[data-form="mentor-profile"]');
      if (profileForm) {
        e.preventDefault();
        const body = Object.fromEntries(['headline', 'organization', 'domains', 'bio', 'experience', 'city', 'languages', 'linkedinUrl'].map((k) => [k, profileForm[k].value.trim() || null]));
        if (!body.headline || !body.domains || !body.bio) { toast('Indique au moins ton métier, tes domaines et une présentation', 'error'); return; }
        if (await run(profileForm.querySelector('button[type=submit]'), () => api('/profile', json('PUT', body)), 'Profil de mentor enregistré')) refresh();
        return;
      }
      const sugForm = e.target.closest('[data-form="suggestion"]');
      if (sugForm) {
        e.preventDefault();
        const f = sugForm;
        if (!f.targetId.value) { toast('Choisis la fiche concernée dans la liste', 'error'); return; }
        const body = {
          targetType: f.targetType.value, targetId: f.targetId.value, targetTitle: f.targetTitle.value,
          kind: f.kind.value, section: f.section.value.trim() || null, message: f.message.value.trim(), proposal: f.proposal.value.trim() || null,
        };
        if (body.message.length < 10) { toast('Décris le problème en quelques mots (10 caractères minimum)', 'error'); return; }
        if (await run(f.querySelector('button[type=submit]'), () => api('/suggestions', json('POST', body)), 'Merci ! Proposition transmise aux responsables des fiches')) {
          state.suggestPreset = null;
          go('suggestions');
        }
        return;
      }
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
      if (params.get('tab')) state.tab = params.get('tab');
      // Lien « Proposer une correction » depuis une fiche : suggest=job:<slug> ou formation:<slug>, title=<titre>
      const suggest = /^(job|formation):([A-Za-z0-9_-]{1,120})$/.exec(params.get('suggest') || '');
      if (suggest) {
        state.suggestPreset = { type: suggest[1], id: suggest[2], title: (params.get('title') || '').slice(0, 200) };
        state.tab = 'suggestions';
      }
      await go(state.tab || tabs()[0].key);
      if (params.get('report')) openReport(params.get('report'));
    })();

    return { refresh };
  }

  window.MentorSpace = { mount };
})();

/**
 * Salon des membres (salon.html) : discussion réservée aux adhérents.
 *   Salon.mount(root)
 * Les messages s'actualisent toutes les quelques secondes tant que l'onglet est visible.
 * Tout le texte venant des membres est échappé avant affichage.
 */
(function () {
  'use strict';

  const POLL_MS = 5000;
  const LIST_MS = 20000;
  const LAST_KEY = 'lmdt_salon_channel';
  const esc = (v) => String(v == null ? '' : v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pad = (n) => String(n).padStart(2, '0');
  const hhmm = (d) => `${pad(d.getHours())}:${pad(d.getMinutes())}`;
  const dayKey = (d) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
  const dayLabel = (d) => {
    const today = new Date();
    const yesterday = new Date(Date.now() - 86400000);
    if (dayKey(d) === dayKey(today)) return 'Aujourd\'hui';
    if (dayKey(d) === dayKey(yesterday)) return 'Hier';
    return d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
  };
  // Liens cliquables : le texte est échappé d'abord, seuls http(s) sont transformés
  const linkify = (text) => esc(text).replace(/(https?:\/\/[^\s<]+[^\s<.,;:!?)\]'"])/g, '<a href="$1" target="_blank" rel="noopener noreferrer nofollow">$1</a>');
  const initials = (name) => name.split(/\s+/).filter(Boolean).slice(0, 2).map((p) => p[0]).join('').toUpperCase() || '?';
  const hue = (name) => { let h = 0; for (const c of name) h = (h * 31 + c.charCodeAt(0)) % 360; return h; };
  const safeStore = {
    get(k) { try { return localStorage.getItem(k); } catch (_) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (_) { /* stockage indisponible */ } },
  };

  function mount(root) {
    const api = (path, options) => window.Api.request(`/salon${path}`, options);
    const json = (method, body) => ({ method, body: JSON.stringify(body || {}) });
    const state = { channels: [], isStaff: false, isPresident: false, current: null, messages: [], cursor: null, hasMore: false, replyTo: null, editing: null, sending: false, meId: null, people: [], mentionMap: new Map(), files: [], uploading: 0, pollTimer: null, listTimer: null, stick: true };

    function toast(message, type) {
      const el = document.createElement('div');
      el.className = `sl-toast${type === 'error' ? ' sl-toast-error' : ''}`;
      el.setAttribute('role', 'status');
      el.textContent = message;
      document.body.appendChild(el);
      requestAnimationFrame(() => el.classList.add('is-visible'));
      setTimeout(() => { el.classList.remove('is-visible'); setTimeout(() => el.remove(), 300); }, 3500);
    }

    // ===== Accès =====

    // Le salon n'existe que pour les adhérents : les autres sont renvoyés vers leur espace sans explication
    const leave = () => { window.location.replace('profile.html'); };

    async function start() {
      let user = null;
      try { user = (await window.Api.auth.me()).data; } catch (error) {
        if (error.status === 401) { window.location.href = `login.html?redirect=${encodeURIComponent('salon.html')}`; return; }
      }
      state.meId = user?.id || null;
      if (user && user.role === 'VISITOR' && !(user.adminRoles || []).length) { leave(); return; }
      try { await loadChannels(); } catch (error) {
        if (error.status === 403) { leave(); return; }
        root.innerHTML = `<p class="sl-error">${esc(error.message || 'Salon momentanément indisponible')}</p>`;
        return;
      }
      renderShell();
      const wanted = new URLSearchParams(location.search).get('salon') || safeStore.get(LAST_KEY);
      const first = state.channels.find((c) => c.slug === wanted) || state.channels[0];
      if (first) await openChannel(first.id);
      state.listTimer = setInterval(() => { if (!document.hidden) refreshChannels(); }, LIST_MS);
      document.addEventListener('visibilitychange', () => { if (!document.hidden) { poll(); refreshChannels(); } });
    }

    async function loadChannels() {
      const { data } = await api('/channels');
      state.channels = data.channels;
      state.isStaff = data.isStaff;
      state.isPresident = data.isPresident;
    }

    async function refreshChannels() {
      try { await loadChannels(); renderChannels(); } catch (_) { /* nouvel essai au prochain passage */ }
    }

    // ===== Structure =====

    function renderShell() {
      root.innerHTML = `<div class="sl-app">
        <aside class="sl-side" aria-label="Salons">
          <div class="sl-side-title">Salons</div>
          <nav class="sl-channels" id="slChannels"></nav>
          ${state.isPresident ? '<button type="button" class="sl-new" id="slNew">+ Nouveau salon</button>' : ''}
        </aside>
        <section class="sl-main" aria-live="off">
          <header class="sl-head" id="slHead"></header>
          <div class="sl-scroll" id="slScroll" tabindex="0" aria-label="Messages"></div>
          <button type="button" class="sl-jump" id="slJump" hidden>↓ Nouveaux messages</button>
          <footer class="sl-composer" id="slComposer"></footer>
        </section>
      </div>`;
      renderChannels();
      root.querySelector('#slNew')?.addEventListener('click', createChannel);
      const scroll = root.querySelector('#slScroll');
      scroll.addEventListener('scroll', () => {
        state.stick = scroll.scrollHeight - scroll.scrollTop - scroll.clientHeight < 80;
        if (state.stick) root.querySelector('#slJump').hidden = true;
      });
      root.querySelector('#slJump').addEventListener('click', () => scrollDown(true));
    }

    function renderChannels() {
      const box = root.querySelector('#slChannels');
      if (!box) return;
      box.innerHTML = state.channels.map((c) => `<button type="button" class="sl-channel${state.current?.id === c.id ? ' is-active' : ''}" data-id="${esc(c.id)}">
        <span class="sl-ch-icon" aria-hidden="true">${esc(c.icon)}</span>
        <span class="sl-ch-name">${esc(c.name)}</span>${c.isPrivate ? '<span class="sl-lock" title="Groupe privé" aria-label="Groupe privé">🔒</span>' : ''}
        ${c.unread ? `<span class="sl-badge" aria-label="${c.unread} non lus">${c.unread > 99 ? '99+' : c.unread}</span>` : ''}
      </button>`).join('');
      box.querySelectorAll('[data-id]').forEach((b) => b.addEventListener('click', () => openChannel(b.dataset.id)));
      const total = state.channels.reduce((n, c) => n + c.unread, 0);
      document.title = `${total ? `(${total}) ` : ''}Salon des membres — Le Monde du Travail`;
    }

    // ----- Fenêtres (création de salon, membres d'un groupe privé) -----
    function modal(html, label) {
      document.getElementById('slModal')?.remove();
      const overlay = document.createElement('div');
      overlay.className = 'sl-overlay';
      overlay.id = 'slModal';
      overlay.innerHTML = `<div class="sl-modal" role="dialog" aria-modal="true" aria-label="${esc(label)}"><button type="button" class="sl-modal-close" data-close aria-label="Fermer">&times;</button>${html}</div>`;
      document.body.appendChild(overlay);
      overlay.addEventListener('click', (e) => { if (e.target === overlay || e.target.closest('[data-close]')) overlay.remove(); });
      return overlay;
    }

    // Liste cochable d'adhérents avec recherche ; renvoie un objet pour lire la sélection
    function picker(box, candidates, selected) {
      const chosen = new Set(selected);
      box.innerHTML = `<input type="search" class="sl-search" placeholder="Rechercher un adhérent…" aria-label="Rechercher un adhérent"><div class="sl-pick-count"></div><div class="sl-pick-list"></div>`;
      const list = box.querySelector('.sl-pick-list');
      const count = box.querySelector('.sl-pick-count');
      const draw = () => {
        const term = box.querySelector('.sl-search').value.trim().toLowerCase();
        const rows = candidates.filter((c) => !term || c.name.toLowerCase().includes(term));
        list.innerHTML = rows.length ? rows.map((c) => `<label class="sl-pick"><input type="checkbox" value="${esc(c.id)}" ${chosen.has(c.id) ? 'checked' : ''}><span class="sl-avatar" style="--h:${hue(c.name)}">${esc(initials(c.name))}</span><span>${esc(c.name)}</span></label>`).join('') : '<p class="sl-hint">Aucun adhérent trouvé.</p>';
        count.textContent = `${chosen.size} personne${chosen.size > 1 ? 's' : ''} choisie${chosen.size > 1 ? 's' : ''}`;
      };
      list.addEventListener('change', (e) => { if (e.target.matches('input[type=checkbox]')) { e.target.checked ? chosen.add(e.target.value) : chosen.delete(e.target.value); draw(); } });
      box.querySelector('.sl-search').addEventListener('input', draw);
      draw();
      return { ids: () => [...chosen] };
    }

    async function createChannel() {
      let candidates = [];
      try { candidates = (await api('/candidates')).data; } catch (error) { toast(error.message, 'error'); return; }
      const overlay = modal(`<h3>Nouveau salon</h3>
        <form id="slCreate" class="sl-create">
          <label>Nom du salon<input name="name" maxlength="60" required placeholder="Ex. : Équipe Agrinova"></label>
          <label>Description <small>(facultatif)</small><input name="description" maxlength="200" placeholder="À quoi sert ce salon ?"></label>
          <fieldset class="sl-kinds">
            <legend>Qui peut y accéder ?</legend>
            <label class="sl-kind"><input type="radio" name="kind" value="open" checked><span><strong>Tous les adhérents</strong><small>Tout le monde lit et écrit.</small></span></label>
            <label class="sl-kind"><input type="radio" name="kind" value="news"><span><strong>Annonces du bureau</strong><small>Tous lisent, seul le bureau écrit.</small></span></label>
            <label class="sl-kind"><input type="radio" name="kind" value="private"><span><strong>🔒 Groupe privé</strong><small>Invisible pour les autres : seules les personnes que tu choisis y accèdent.</small></span></label>
          </fieldset>
          <div id="slPickBox" hidden></div>
          <div class="sl-modal-actions"><button type="button" class="btn btn-outline" data-close>Annuler</button><button type="submit" class="btn btn-primary">Créer le salon</button></div>
        </form>`, 'Nouveau salon');
      const form = overlay.querySelector('#slCreate');
      const pickBox = overlay.querySelector('#slPickBox');
      const pick = picker(pickBox, candidates, []);
      form.addEventListener('change', (e) => { if (e.target.name === 'kind') pickBox.hidden = e.target.value !== 'private'; });
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const f = new FormData(form);
        const kind = f.get('kind');
        const payload = { name: String(f.get('name')).trim(), isPrivate: kind === 'private', staffOnlyPost: kind === 'news' };
        if (String(f.get('description')).trim()) payload.description = String(f.get('description')).trim();
        if (kind === 'private') {
          payload.memberIds = pick.ids();
          if (!payload.memberIds.length) { toast('Choisis au moins une personne pour le groupe privé', 'error'); return; }
        }
        try {
          const { data } = await api('/channels', json('POST', payload));
          overlay.remove();
          await loadChannels();
          renderChannels();
          await openChannel(data.id);
          toast(kind === 'private' ? 'Groupe privé créé' : 'Salon créé');
        } catch (error) { toast(error.message, 'error'); }
      });
    }

    async function editMembers() {
      const channel = state.current;
      let candidates = []; let current = [];
      try {
        [candidates, current] = await Promise.all([api('/candidates').then((r) => r.data), api(`/channels/${encodeURIComponent(channel.id)}/members`).then((r) => r.data)]);
      } catch (error) { toast(error.message, 'error'); return; }
      // Les membres déjà dans le groupe restent proposés même s'ils ne sont plus dans la liste (ex. compte désactivé)
      const known = new Set(candidates.map((c) => c.id));
      current.forEach((m) => { if (!known.has(m.id)) candidates.push(m); });
      const overlay = modal(`<h3>Membres de « ${esc(channel.name)} »</h3><p class="sl-hint">Coche les personnes qui ont accès à ce groupe. Celles que tu retires ne le voient plus ; leurs messages restent.</p><div id="slPickBox"></div><div class="sl-modal-actions"><button type="button" class="btn btn-outline" data-close>Annuler</button><button type="button" class="btn btn-primary" id="slSaveMembers">Enregistrer</button></div>`, 'Membres du groupe');
      const pick = picker(overlay.querySelector('#slPickBox'), candidates, current.map((m) => m.id));
      overlay.querySelector('#slSaveMembers').addEventListener('click', async () => {
        const ids = pick.ids();
        if (!ids.length) { toast('Un groupe privé garde au moins une personne', 'error'); return; }
        try {
          await api(`/channels/${encodeURIComponent(channel.id)}/members`, json('PUT', { userIds: ids }));
          overlay.remove();
          await refreshChannels();
          state.current = state.channels.find((c) => c.id === channel.id) || state.current;
          renderHead();
          toast('Membres mis à jour');
        } catch (error) { toast(error.message, 'error'); }
      });
    }

    // ===== Salon ouvert =====

    async function openChannel(id) {
      const channel = state.channels.find((c) => c.id === id);
      if (!channel) return;
      clearTimeout(state.pollTimer);
      state.current = channel;
      state.messages = [];
      state.cursor = null;
      state.replyTo = null;
      state.editing = null;
      state.stick = true;
      state.people = [];
      state.mentionMap = new Map();
      state.files = [];
      api(`/channels/${encodeURIComponent(id)}/people`).then((r) => { if (state.current?.id === id) state.people = r.data; }).catch(() => {});
      safeStore.set(LAST_KEY, channel.slug);
      renderHead();
      renderChannels();
      renderComposer();
      root.querySelector('#slScroll').innerHTML = '<p class="sl-loading">Chargement des messages…</p>';
      try {
        const { data } = await api(`/channels/${encodeURIComponent(id)}/messages`);
        state.messages = data.messages;
        state.hasMore = data.hasMore;
        state.cursor = data.serverTime;
        renderMessages();
        scrollDown();
        markRead();
      } catch (error) {
        root.querySelector('#slScroll').innerHTML = `<p class="sl-error">${esc(error.message || 'Messages indisponibles')}</p>`;
      }
      schedulePoll();
    }

    function renderHead() {
      const c = state.current;
      root.querySelector('#slHead').innerHTML = `<span class="sl-head-icon">${esc(c.icon)}</span><div><h2>${esc(c.name)}</h2>${c.description ? `<p>${esc(c.description)}</p>` : ''}</div>
        ${c.isPrivate ? `<span class="sl-pill">🔒 Groupe privé · ${c.memberCount} membre${c.memberCount > 1 ? 's' : ''}</span>` : ''}
        ${c.staffOnlyPost ? '<span class="sl-pill">Annonces du bureau</span>' : ''}
        <button type="button" class="sl-bell${c.muted ? ' is-muted' : ''}" id="slBell" title="${c.muted ? 'Réactiver les notifications de ce salon' : 'Couper les notifications de ce salon'}" aria-pressed="${c.muted ? 'true' : 'false'}">${c.muted ? '🔕 Sourdine' : '🔔 Notifications'}</button>
        ${c.isPrivate && state.isPresident ? '<button type="button" class="sl-members-btn" id="slMembers">👥 Gérer les membres</button>' : ''}`;
      root.querySelector('#slMembers')?.addEventListener('click', editMembers);
      root.querySelector('#slBell').addEventListener('click', toggleMute);
    }

    async function toggleMute() {
      const c = state.current;
      try {
        await api(`/channels/${encodeURIComponent(c.id)}/mute`, json('POST', { muted: !c.muted }));
        c.muted = !c.muted;
        renderHead();
        toast(c.muted ? 'Notifications coupées pour ce salon (les @mentions te sont toujours signalées)' : 'Notifications réactivées');
      } catch (error) { toast(error.message, 'error'); }
    }

    function schedulePoll() {
      clearTimeout(state.pollTimer);
      state.pollTimer = setTimeout(poll, POLL_MS);
    }

    async function poll() {
      clearTimeout(state.pollTimer);
      if (!state.current || document.hidden) { schedulePoll(); return; }
      const channelId = state.current.id;
      try {
        const { data } = await api(`/channels/${encodeURIComponent(channelId)}/messages?after=${encodeURIComponent(state.cursor)}`);
        if (state.current?.id === channelId) {
          state.cursor = data.serverTime;
          if (data.messages.length) mergeMessages(data.messages);
        }
      } catch (_) { /* réseau coupé : on réessaie au prochain tour */ }
      schedulePoll();
    }

    function mergeMessages(incoming) {
      let fresh = 0;
      incoming.forEach((m) => {
        const i = state.messages.findIndex((x) => x.id === m.id);
        if (i >= 0) state.messages[i] = m; else { state.messages.push(m); if (!m.mine) fresh += 1; }
      });
      state.messages.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      const wasStuck = state.stick;
      renderMessages();
      if (wasStuck) { scrollDown(); markRead(); } else if (fresh) root.querySelector('#slJump').hidden = false;
    }

    let readTimer = null;
    function markRead() {
      clearTimeout(readTimer);
      readTimer = setTimeout(async () => {
        if (!state.current || document.hidden) return;
        try { await api(`/channels/${encodeURIComponent(state.current.id)}/read`, json('POST')); state.current.unread = 0; renderChannels(); } catch (_) { /* sans importance */ }
      }, 600);
    }

    function scrollDown(smooth) {
      const el = root.querySelector('#slScroll');
      if (!el) return;
      el.scrollTo({ top: el.scrollHeight, behavior: smooth ? 'smooth' : 'auto' });
      state.stick = true;
      root.querySelector('#slJump').hidden = true;
    }

    // ===== Messages =====

    // Texte du message : liens cliquables, @mentions en relief (celles qui me concernent plus marquées)
    function textHtml(m) {
      let html = linkify(m.body);
      (m.mentions || []).forEach((p) => {
        const name = esc(`@${p.name}`);
        html = html.split(name).join(`<span class="sl-mention${p.id === state.meId ? ' is-me' : ''}">${name}</span>`);
      });
      return html;
    }

    const sizeLabel = (n) => (n >= 1048576 ? `${(n / 1048576).toFixed(1)} Mo` : `${Math.max(1, Math.round(n / 1024))} Ko`);
    function attachmentsHtml(m) {
      if (!m.attachments?.length) return '';
      return `<div class="sl-files">${m.attachments.map((a) => (a.mimeType.startsWith('image/')
        ? `<a class="sl-img" href="${esc(a.url)}" target="_blank" rel="noopener noreferrer"><img src="${esc(a.url)}" alt="${esc(a.name)}" loading="lazy"></a>`
        : `<a class="sl-file" href="${esc(a.url)}" target="_blank" rel="noopener noreferrer"><span>📄</span><span><strong>${esc(a.name)}</strong><small>${sizeLabel(a.size || 0)}</small></span></a>`)).join('')}</div>`;
    }

    function messageHtml(m, grouped) {
      const date = new Date(m.createdAt);
      if (m.deleted) return `<div class="sl-msg sl-msg-deleted${grouped ? ' is-grouped' : ''}" data-id="${esc(m.id)}"><span class="sl-avatar sl-avatar-ghost"></span><div class="sl-bubble"><em>Message supprimé</em></div></div>`;
      const reply = m.replyTo ? `<button type="button" class="sl-quote" data-goto="${esc(m.replyTo.id)}"><strong>${esc(m.replyTo.authorName)}</strong> ${esc(m.replyTo.excerpt)}</button>` : '';
      const head = grouped ? '' : `<div class="sl-meta"><strong>${esc(m.author.name)}</strong>${m.author.isStaff ? '<span class="sl-staff">Bureau</span>' : ''}<time datetime="${esc(m.createdAt)}">${hhmm(date)}</time></div>`;
      const avatar = grouped ? '<span class="sl-avatar sl-avatar-ghost"></span>' : (m.author.avatarUrl
        ? `<img class="sl-avatar" src="${esc(m.author.avatarUrl)}" alt="" loading="lazy">`
        : `<span class="sl-avatar" style="--h:${hue(m.author.name)}">${esc(initials(m.author.name))}</span>`);
      const actions = [
        state.current.canPost ? `<button type="button" data-act="reply" title="Répondre">↩</button>` : '',
        m.canEdit ? `<button type="button" data-act="edit" title="Modifier">✎</button>` : '',
        m.canDelete ? `<button type="button" data-act="delete" title="Supprimer">🗑</button>` : '',
      ].join('');
      return `<div class="sl-msg${m.mine ? ' is-mine' : ''}${grouped ? ' is-grouped' : ''}" data-id="${esc(m.id)}">${avatar}
        <div class="sl-bubble">${head}${reply}${m.body ? `<div class="sl-text">${textHtml(m)}${m.editedAt ? ' <span class="sl-edited">(modifié)</span>' : ''}</div>` : ''}${attachmentsHtml(m)}
        ${actions ? `<div class="sl-actions">${actions}</div>` : ''}</div></div>`;
    }

    function renderMessages() {
      const el = root.querySelector('#slScroll');
      if (!el) return;
      if (!state.messages.length) {
        el.innerHTML = `<div class="sl-empty"><div>${esc(state.current.icon)}</div><strong>Aucun message pour l'instant</strong><p>${state.current.canPost ? 'Lance la conversation, présente-toi, pose une question.' : 'Le bureau y publiera les informations du club.'}</p></div>`;
        return;
      }
      let html = state.hasMore ? '<button type="button" class="sl-older" id="slOlder">Voir les messages précédents</button>' : '';
      let prev = null;
      state.messages.forEach((m) => {
        const date = new Date(m.createdAt);
        if (!prev || dayKey(new Date(prev.createdAt)) !== dayKey(date)) html += `<div class="sl-day"><span>${esc(dayLabel(date))}</span></div>`;
        const grouped = prev && !prev.deleted && !m.deleted && prev.author.id === m.author.id && !m.replyTo && dayKey(new Date(prev.createdAt)) === dayKey(date) && date - new Date(prev.createdAt) < 5 * 60000;
        html += messageHtml(m, grouped);
        prev = m;
      });
      const top = el.scrollHeight - el.scrollTop;
      el.innerHTML = html;
      if (!state.stick) el.scrollTop = el.scrollHeight - top;
      el.querySelector('#slOlder')?.addEventListener('click', loadOlder);
      el.querySelectorAll('.sl-msg').forEach((row) => {
        const id = row.dataset.id;
        row.querySelectorAll('[data-act]').forEach((b) => b.addEventListener('click', () => act(b.dataset.act, id)));
      });
      el.querySelectorAll('[data-goto]').forEach((b) => b.addEventListener('click', () => {
        const target = el.querySelector(`.sl-msg[data-id="${CSS.escape(b.dataset.goto)}"]`);
        if (target) { target.scrollIntoView({ block: 'center', behavior: 'smooth' }); target.classList.add('is-flash'); setTimeout(() => target.classList.remove('is-flash'), 1600); }
      }));
    }

    async function loadOlder() {
      const first = state.messages[0];
      if (!first) return;
      state.stick = false;
      try {
        const { data } = await api(`/channels/${encodeURIComponent(state.current.id)}/messages?before=${encodeURIComponent(first.createdAt)}`);
        state.messages = [...data.messages, ...state.messages];
        state.hasMore = data.hasMore;
        renderMessages();
      } catch (error) { toast(error.message, 'error'); }
    }

    async function act(action, id) {
      const message = state.messages.find((m) => m.id === id);
      if (!message) return;
      if (action === 'reply') {
        state.replyTo = message;
        renderComposer();
        root.querySelector('#slInput')?.focus({ preventScroll: true });
      } else if (action === 'edit') {
        const text = prompt('Modifier ton message :', message.body);
        if (text === null || !text.trim() || text.trim() === message.body) return;
        try { const { data } = await api(`/messages/${encodeURIComponent(id)}`, json('PATCH', { body: text })); mergeMessages([data]); } catch (error) { toast(error.message, 'error'); }
      } else if (action === 'delete') {
        if (!confirm(message.mine ? 'Supprimer ton message ?' : `Retirer ce message de ${message.author.name} ?`)) return;
        try { await api(`/messages/${encodeURIComponent(id)}`, { method: 'DELETE' }); mergeMessages([{ ...message, deleted: true, body: '', canEdit: false, canDelete: false }]); } catch (error) { toast(error.message, 'error'); }
      }
    }

    // ===== Saisie =====

    function renderComposer() {
      const box = root.querySelector('#slComposer');
      if (!box || !state.current) return;
      if (!state.current.canPost) {
        box.innerHTML = '<p class="sl-readonly">🔔 Ce salon est réservé aux annonces du bureau. Tu peux le lire, pas y écrire.</p>';
        return;
      }
      const draft = box.querySelector('#slInput')?.value || '';
      box.innerHTML = `${state.replyTo ? `<div class="sl-replying"><span>↩ Réponse à <strong>${esc(state.replyTo.author.name)}</strong> : ${esc((state.replyTo.body || 'Fichier').slice(0, 90))}</span><button type="button" id="slCancelReply" aria-label="Annuler la réponse">&times;</button></div>` : ''}
        <div class="sl-pending" id="slPending"></div>
        <div class="sl-mention-box" id="slMentionBox" hidden role="listbox" aria-label="Mentionner un adhérent"></div>
        <form class="sl-form" id="slForm">
          <label class="sl-sr" for="slInput">Ton message</label>
          <button type="button" class="sl-attach" id="slAttach" title="Joindre une image ou un PDF (4 Mo max, les photos sont réduites automatiquement)" aria-label="Joindre un fichier">📎</button>
          <input type="file" id="slFile" accept="image/jpeg,image/png,image/webp,image/gif,application/pdf" multiple hidden>
          <textarea id="slInput" rows="1" maxlength="2000" placeholder="Écris un message pour ${esc(state.current.name)}…" autocomplete="off"></textarea>
          <button type="submit" class="sl-send" id="slSend" aria-label="Envoyer">Envoyer</button>
        </form>
        <p class="sl-tip">Entrée pour envoyer · Maj + Entrée pour aller à la ligne · @ pour mentionner quelqu'un. Reste respectueux : le bureau peut retirer un message.</p>`;
      const input = box.querySelector('#slInput');
      input.value = draft;
      const grow = () => { input.style.height = 'auto'; input.style.height = `${Math.min(input.scrollHeight, 160)}px`; };
      input.addEventListener('input', () => { grow(); suggestMentions(); });
      input.addEventListener('keydown', (e) => {
        const open = !box.querySelector('#slMentionBox').hidden;
        if (open && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) { e.preventDefault(); moveMention(e.key === 'ArrowDown' ? 1 : -1); return; }
        if (open && (e.key === 'Enter' || e.key === 'Tab')) { e.preventDefault(); pickMention(); return; }
        if (open && e.key === 'Escape') { box.querySelector('#slMentionBox').hidden = true; return; }
        if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); box.querySelector('#slForm').requestSubmit(); }
      });
      box.querySelector('#slCancelReply')?.addEventListener('click', () => { state.replyTo = null; renderComposer(); });
      box.querySelector('#slForm').addEventListener('submit', send);
      box.querySelector('#slAttach').addEventListener('click', () => box.querySelector('#slFile').click());
      box.querySelector('#slFile').addEventListener('change', (e) => { uploadFiles([...e.target.files]); e.target.value = ''; });
      renderPending();
      grow();
    }

    // ----- Fichiers joints -----
    // Le site n'accepte pas plus de ~4 Mo par envoi : les photos sont réduites avant l'envoi (qualité d'écran, pas d'impression)
    const MAX_BYTES = 4 * 1024 * 1024;
    const EXT_TYPES = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', webp: 'image/webp', gif: 'image/gif', pdf: 'application/pdf' };
    const typeOf = (file) => file.type || EXT_TYPES[(file.name.split('.').pop() || '').toLowerCase()] || '';

    function renderPending() {
      const el = root.querySelector('#slPending');
      if (!el) return;
      el.innerHTML = state.files.map((f, i) => `<span class="sl-chip">${f.mimeType.startsWith('image/') ? '🖼️' : '📄'} ${esc(f.name)} <button type="button" data-rm="${i}" aria-label="Retirer ${esc(f.name)}">&times;</button></span>`).join('')
        + (state.uploading ? '<span class="sl-chip sl-chip-wait">Envoi du fichier…</span>' : '');
      el.querySelectorAll('[data-rm]').forEach((b) => b.addEventListener('click', () => { state.files.splice(Number(b.dataset.rm), 1); renderPending(); }));
    }

    function shrinkImage(file, type) {
      return new Promise((resolve, reject) => {
        const url = URL.createObjectURL(file);
        const img = new Image();
        img.onload = () => {
          URL.revokeObjectURL(url);
          const scale = Math.min(1, 1600 / Math.max(img.naturalWidth, img.naturalHeight));
          const canvas = document.createElement('canvas');
          canvas.width = Math.max(1, Math.round(img.naturalWidth * scale));
          canvas.height = Math.max(1, Math.round(img.naturalHeight * scale));
          const ctx = canvas.getContext('2d');
          ctx.fillStyle = '#fff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error('Image illisible'))), 'image/jpeg', 0.82);
        };
        img.onerror = () => { URL.revokeObjectURL(url); reject(new Error(`« ${file.name} » : format d'image non pris en charge (envoie plutôt un JPEG ou un PNG)`)); };
        img.src = url;
      });
    }

    async function prepare(file) {
      const type = typeOf(file);
      if (!Object.values(EXT_TYPES).includes(type)) throw new Error(`« ${file.name} » : seuls les images (JPEG, PNG, WebP, GIF) et les PDF sont acceptés`);
      if (type === 'application/pdf') {
        if (file.size > MAX_BYTES) throw new Error(`« ${file.name} » pèse ${(file.size / 1048576).toFixed(1)} Mo : les PDF sont limités à 4 Mo`);
        return { blob: file, name: file.name, type };
      }
      // Les GIF animés restent tels quels s'ils sont assez légers ; le reste est réduit et recompressé
      if (type === 'image/gif' && file.size <= MAX_BYTES) return { blob: file, name: file.name, type };
      if (type !== 'image/gif' && file.size <= 600 * 1024) return { blob: file, name: file.name, type };
      const blob = await shrinkImage(file, type);
      if (blob.size > MAX_BYTES) throw new Error(`« ${file.name} » est trop lourd même après réduction`);
      return { blob, name: file.name.replace(/\.[^.]+$/, '') + '.jpg', type: 'image/jpeg' };
    }

    async function uploadFiles(files) {
      for (const file of files) {
        if (state.files.length + state.uploading >= 4) { toast('4 fichiers maximum par message', 'error'); break; }
        state.uploading += 1;
        renderPending();
        try {
          const ready = await prepare(file);
          const form = new FormData();
          form.append('file', new File([ready.blob], ready.name, { type: ready.type }));
          const { data } = await api('/upload', { method: 'POST', body: form });
          state.files.push(data);
        } catch (error) {
          toast(error.message || 'Fichier non envoyé : vérifie ta connexion et réessaie', 'error');
        }
        state.uploading -= 1;
        renderPending();
      }
    }

    // ----- Mentions (@) -----
    let mentionIndex = 0;
    let mentionMatches = [];
    function suggestMentions() {
      const input = root.querySelector('#slInput');
      const box = root.querySelector('#slMentionBox');
      if (!input || !box) return;
      const before = input.value.slice(0, input.selectionStart);
      const match = before.match(/(?:^|\s)@([^\s@]{0,30})$/);
      if (!match) { box.hidden = true; return; }
      const term = match[1].toLowerCase();
      mentionMatches = state.people.filter((p) => p.name.toLowerCase().includes(term)).slice(0, 6);
      if (!mentionMatches.length) { box.hidden = true; return; }
      mentionIndex = 0;
      box.hidden = false;
      box.innerHTML = mentionMatches.map((p, i) => `<button type="button" role="option" class="sl-mention-item${i === 0 ? ' is-on' : ''}" data-i="${i}"><span class="sl-avatar" style="--h:${hue(p.name)}">${esc(initials(p.name))}</span>${esc(p.name)}</button>`).join('');
      box.querySelectorAll('[data-i]').forEach((b) => b.addEventListener('mousedown', (e) => { e.preventDefault(); mentionIndex = Number(b.dataset.i); pickMention(); }));
    }
    function moveMention(step) {
      mentionIndex = (mentionIndex + step + mentionMatches.length) % mentionMatches.length;
      root.querySelectorAll('.sl-mention-item').forEach((el, i) => el.classList.toggle('is-on', i === mentionIndex));
    }
    function pickMention() {
      const person = mentionMatches[mentionIndex];
      const input = root.querySelector('#slInput');
      if (!person || !input) return;
      const pos = input.selectionStart;
      const before = input.value.slice(0, pos).replace(/@[^\s@]{0,30}$/, `@${person.name} `);
      input.value = before + input.value.slice(pos);
      input.setSelectionRange(before.length, before.length);
      state.mentionMap.set(person.name, person.id);
      root.querySelector('#slMentionBox').hidden = true;
      input.focus({ preventScroll: true });
    }

    async function send(event) {
      event.preventDefault();
      if (state.sending) return;
      if (state.uploading) { toast('Patiente : un fichier est en cours d\'envoi', 'error'); return; }
      const input = root.querySelector('#slInput');
      const body = input.value.trim();
      if (!body && !state.files.length) return;
      // Seules les personnes dont le @nom est encore dans le texte sont mentionnées
      const mentionIds = [...state.mentionMap].filter(([name]) => body.includes(`@${name}`)).map(([, id]) => id);
      state.sending = true;
      root.querySelector('#slSend').disabled = true;
      try {
        const { data } = await api(`/channels/${encodeURIComponent(state.current.id)}/messages`, json('POST', { body, replyToId: state.replyTo?.id || null, mentionIds, attachments: state.files }));
        state.replyTo = null;
        state.files = [];
        state.mentionMap = new Map();
        state.stick = true;
        input.value = '';
        mergeMessages([data]);
        renderComposer();
        root.querySelector('#slInput')?.focus({ preventScroll: true });
      } catch (error) {
        toast(error.message || 'Message non envoyé', 'error');
      } finally {
        state.sending = false;
        const btn = root.querySelector('#slSend');
        if (btn) btn.disabled = false;
      }
    }

    start();
  }

  window.Salon = { mount };
})();

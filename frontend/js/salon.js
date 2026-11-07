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
    const state = { channels: [], isStaff: false, isPresident: false, current: null, messages: [], cursor: null, hasMore: false, replyTo: null, editing: null, sending: false, pollTimer: null, listTimer: null, stick: true };

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

    function locked(user) {
      root.innerHTML = `<div class="sl-locked">
        <div class="sl-locked-icon">🔒</div>
        <h2>Le salon est réservé aux adhérents</h2>
        <p>${user ? `Bonjour ${esc(user.firstName || '')}, ton compte est celui d'un visiteur.` : ''} Dès que la Présidence aura accepté ta demande, tu pourras discuter avec les autres membres du club.</p>
        <a class="btn btn-primary" href="profile.html">Faire ma demande d'adhésion</a>
      </div>`;
    }

    async function start() {
      let user = null;
      try { user = (await window.Api.auth.me()).data; } catch (error) {
        if (error.status === 401) { window.location.href = `login.html?redirect=${encodeURIComponent('salon.html')}`; return; }
      }
      if (user && user.role === 'VISITOR' && !(user.adminRoles || []).length) { locked(user); return; }
      try { await loadChannels(); } catch (error) {
        if (error.status === 403) { locked(user); return; }
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
        <span class="sl-ch-name">${esc(c.name)}</span>
        ${c.unread ? `<span class="sl-badge" aria-label="${c.unread} non lus">${c.unread > 99 ? '99+' : c.unread}</span>` : ''}
      </button>`).join('');
      box.querySelectorAll('[data-id]').forEach((b) => b.addEventListener('click', () => openChannel(b.dataset.id)));
      const total = state.channels.reduce((n, c) => n + c.unread, 0);
      document.title = `${total ? `(${total}) ` : ''}Salon des membres — Le Monde du Travail`;
    }

    async function createChannel() {
      const name = prompt('Nom du nouveau salon :');
      if (!name || !name.trim()) return;
      const staffOnlyPost = confirm('Réserver ce salon au bureau (annonces) ?\n\nOK = seul le bureau écrit · Annuler = tous les adhérents écrivent');
      try {
        const { data } = await api('/channels', json('POST', { name: name.trim(), staffOnlyPost }));
        await loadChannels();
        renderChannels();
        await openChannel(data.id);
        toast('Salon créé');
      } catch (error) { toast(error.message, 'error'); }
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
      safeStore.set(LAST_KEY, channel.slug);
      root.querySelector('#slHead').innerHTML = `<span class="sl-head-icon">${esc(channel.icon)}</span><div><h2>${esc(channel.name)}</h2>${channel.description ? `<p>${esc(channel.description)}</p>` : ''}</div>${channel.staffOnlyPost ? '<span class="sl-pill">Annonces du bureau</span>' : ''}`;
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
        <div class="sl-bubble">${head}${reply}<div class="sl-text">${linkify(m.body)}${m.editedAt ? ' <span class="sl-edited">(modifié)</span>' : ''}</div>
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
      box.innerHTML = `${state.replyTo ? `<div class="sl-replying"><span>↩ Réponse à <strong>${esc(state.replyTo.author.name)}</strong> : ${esc(state.replyTo.body.slice(0, 90))}</span><button type="button" id="slCancelReply" aria-label="Annuler la réponse">&times;</button></div>` : ''}
        <form class="sl-form" id="slForm">
          <label class="sl-sr" for="slInput">Ton message</label>
          <textarea id="slInput" rows="1" maxlength="2000" placeholder="Écris un message pour ${esc(state.current.name)}…" autocomplete="off"></textarea>
          <button type="submit" class="sl-send" id="slSend" aria-label="Envoyer">Envoyer</button>
        </form>
        <p class="sl-tip">Entrée pour envoyer · Maj + Entrée pour aller à la ligne. Reste respectueux : le bureau peut retirer un message.</p>`;
      const input = box.querySelector('#slInput');
      input.value = draft;
      const grow = () => { input.style.height = 'auto'; input.style.height = `${Math.min(input.scrollHeight, 160)}px`; };
      input.addEventListener('input', grow);
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) { e.preventDefault(); box.querySelector('#slForm').requestSubmit(); }
      });
      box.querySelector('#slCancelReply')?.addEventListener('click', () => { state.replyTo = null; renderComposer(); });
      box.querySelector('#slForm').addEventListener('submit', send);
      grow();
    }

    async function send(event) {
      event.preventDefault();
      if (state.sending) return;
      const input = root.querySelector('#slInput');
      const body = input.value.trim();
      if (!body) return;
      state.sending = true;
      root.querySelector('#slSend').disabled = true;
      try {
        const { data } = await api(`/channels/${encodeURIComponent(state.current.id)}/messages`, json('POST', { body, replyToId: state.replyTo?.id || null }));
        state.replyTo = null;
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

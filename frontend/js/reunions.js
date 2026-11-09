/**
 * Réunions en visio (reunions.html) : liste des réunions où l'on est invité, accès à la salle (visio.html?reunion=<id>),
 * et, pour la Présidence et le bureau, planification (groupes invités + personnes choisies), modification, annulation.
 */
(function () {
  'use strict';

  const esc = (v) => String(v == null ? '' : v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const AUDIENCE = { BUREAU: '🏛️ Le bureau', MENTORS: '🧑‍🏫 Les mentors', MEMBERS: '👥 Tous les adhérents' };
  const hue = (name) => { let h = 0; for (const c of name) h = (h * 31 + c.charCodeAt(0)) % 360; return h; };
  const initials = (name) => name.split(/\s+/).filter(Boolean).slice(0, 2).map((p) => p[0]).join('').toUpperCase() || '?';
  const fmtDay = (d) => new Date(d).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
  const fmtHour = (d) => new Date(d).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  // Valeur d'un champ datetime-local (heure locale) à partir d'une date
  const localInput = (d) => { const x = new Date(d); x.setMinutes(x.getMinutes() - x.getTimezoneOffset()); return x.toISOString().slice(0, 16); };

  function mount(root) {
    const api = (path, options) => window.Api.request(`/meetings${path}`, options);
    const json = (method, body) => ({ method, body: JSON.stringify(body || {}) });
    const state = { ctx: null, list: [], timer: null };

    function toast(message, type) {
      const el = document.createElement('div');
      el.className = `rn-toast${type === 'error' ? ' rn-toast-error' : ''}`;
      el.setAttribute('role', 'status');
      el.textContent = message;
      document.body.appendChild(el);
      requestAnimationFrame(() => el.classList.add('is-visible'));
      setTimeout(() => { el.classList.remove('is-visible'); setTimeout(() => el.remove(), 300); }, 3800);
    }

    async function start() {
      try {
        const user = (await window.Api.auth.me()).data;
        if (user && user.role === 'VISITOR' && !(user.adminRoles || []).length) { window.location.replace('profile.html'); return; }
      } catch (error) {
        if (error.status === 401) { window.location.href = `login.html?redirect=${encodeURIComponent('reunions.html')}`; return; }
      }
      try {
        state.ctx = (await api('/context')).data;
        await refresh();
      } catch (error) {
        root.innerHTML = `<p class="rn-error">${esc(error.message || 'Réunions indisponibles pour le moment')}</p>`;
        return;
      }
      state.timer = setInterval(() => { if (!document.hidden) refresh(); }, 30000);
    }

    async function refresh() {
      state.list = (await api('/')).data;
      render();
    }

    function card(m) {
      const live = m.status === 'LIVE';
      const badge = live ? '<span class="rn-badge rn-live">🟢 En direct</span>'
        : m.status === 'CANCELLED' ? '<span class="rn-badge rn-cancel">Annulée</span>'
          : m.status === 'PAST' ? '<span class="rn-badge rn-past">Terminée</span>' : '';
      const who = [...m.audiences.map((a) => AUDIENCE[a]), ...(m.invitees.length ? [`👤 ${m.invitees.length} personne${m.invitees.length > 1 ? 's' : ''} choisie${m.invitees.length > 1 ? 's' : ''}`] : [])];
      const active = m.status === 'UPCOMING' || m.status === 'LIVE';
      return `<article class="rn-card${live ? ' is-live' : ''}${m.status === 'CANCELLED' ? ' is-cancelled' : ''}">
        <div class="rn-date"><strong>${esc(new Date(m.startsAt).toLocaleDateString('fr-FR', { day: 'numeric' }))}</strong><span>${esc(new Date(m.startsAt).toLocaleDateString('fr-FR', { month: 'short' }))}</span></div>
        <div class="rn-main">
          <div class="rn-title"><h3>${esc(m.title)}</h3>${badge}</div>
          <p class="rn-meta">${esc(fmtDay(m.startsAt))} · ${esc(fmtHour(m.startsAt))} · ${m.durationMinutes} min · organisée par ${esc(m.organizer)}</p>
          ${m.description ? `<p class="rn-desc">${esc(m.description)}</p>` : ''}
          ${m.isHost && who.length ? `<p class="rn-who">${who.map(esc).join(' · ')}</p>` : ''}
          ${m.isHost && m.invitees.length ? `<p class="rn-who">${m.invitees.map((i) => esc(i.name)).join(', ')}</p>` : ''}
          <div class="rn-actions">
            ${active ? `<a class="btn btn-primary btn-sm" href="visio.html?reunion=${esc(m.id)}">${live ? '📹 Rejoindre la réunion' : (m.isHost ? '▶️ Ouvrir la salle' : '🕒 Salle d\'attente')}</a>` : ''}
            ${active ? `<button type="button" class="rn-link" data-act="copy" data-id="${esc(m.id)}">🔗 Copier le lien</button>` : ''}
            ${m.isHost && active ? `<button type="button" class="rn-link" data-act="edit" data-id="${esc(m.id)}">✏️ Modifier</button><button type="button" class="rn-link rn-danger" data-act="cancel" data-id="${esc(m.id)}">Annuler</button>` : ''}
          </div>
        </div>
      </article>`;
    }

    function render() {
      const upcoming = state.list.filter((m) => m.status === 'UPCOMING' || m.status === 'LIVE');
      const past = state.list.filter((m) => m.status === 'PAST' || m.status === 'CANCELLED').reverse();
      root.innerHTML = `
        ${state.ctx.canOrganize ? '<div class="rn-toolbar"><button type="button" class="btn btn-primary" id="rnNew">+ Planifier une réunion</button></div>' : ''}
        <h2 class="rn-h">À venir</h2>
        ${upcoming.length ? `<div class="rn-list">${upcoming.map(card).join('')}</div>` : '<div class="rn-empty"><div>📅</div><strong>Aucune réunion à venir</strong><p>Quand le bureau planifie une réunion où tu es invité(e), tu la retrouves ici et tu reçois une notification.</p></div>'}
        ${past.length ? `<h2 class="rn-h">Récentes</h2><div class="rn-list">${past.slice(0, 8).map(card).join('')}</div>` : ''}
        ${!state.ctx.jaas ? '<p class="rn-note">ℹ️ La visio intégrée au site n\'est pas activée : la réunion s\'ouvrira dans un nouvel onglet sur meet.jit.si.</p>' : ''}`;
      root.querySelector('#rnNew')?.addEventListener('click', () => openForm());
      root.querySelectorAll('[data-act]').forEach((b) => b.addEventListener('click', () => act(b.dataset.act, b.dataset.id)));
    }

    async function act(action, id) {
      const m = state.list.find((x) => x.id === id);
      if (!m) return;
      if (action === 'copy') {
        const link = `${window.location.origin}/visio.html?reunion=${id}`;
        try { await navigator.clipboard.writeText(link); toast('Lien copié (réservé aux invités, connexion demandée)'); } catch (_) { window.prompt('Copie ce lien :', link); }
      }
      if (action === 'edit') openForm(m);
      if (action === 'cancel' && window.confirm(`Annuler « ${m.title} » ? Les invités sont prévenus.`)) {
        try { await api(`/${encodeURIComponent(id)}`, { method: 'DELETE' }); toast('Réunion annulée'); await refresh(); } catch (error) { toast(error.message, 'error'); }
      }
    }

    // ----- Planification -----
    function modal(html) {
      document.getElementById('rnModal')?.remove();
      const el = document.createElement('div');
      el.className = 'rn-overlay';
      el.id = 'rnModal';
      el.innerHTML = `<div class="rn-modal" role="dialog" aria-modal="true"><button type="button" class="rn-close" data-close aria-label="Fermer">&times;</button>${html}</div>`;
      document.body.appendChild(el);
      el.addEventListener('click', (e) => { if (e.target === el || e.target.closest('[data-close]')) el.remove(); });
      return el;
    }

    async function openForm(existing) {
      let people = [];
      try { people = (await api('/people')).data; } catch (error) { toast(error.message, 'error'); return; }
      const chosen = new Set((existing?.invitees || []).map((i) => i.id));
      const start = existing ? localInput(existing.startsAt) : localInput(new Date(Date.now() + 86400000 - (Date.now() % 3600000)));
      const el = modal(`<h3>${existing ? 'Modifier la réunion' : 'Planifier une réunion en visio'}</h3>
        <form id="rnForm" class="rn-form">
          <label>Titre<input name="title" required minlength="3" maxlength="120" value="${esc(existing?.title || '')}" placeholder="Ex. : Point mensuel du bureau"></label>
          <div class="rn-two">
            <label>Date et heure<input type="datetime-local" name="startsAt" required value="${esc(start)}"></label>
            <label>Durée (minutes)<input type="number" name="durationMinutes" min="15" max="480" step="5" value="${existing?.durationMinutes || 60}"></label>
          </div>
          <label>Ordre du jour <small>(facultatif)</small><textarea name="description" rows="3" maxlength="1500" placeholder="Sujets à aborder, documents à lire…">${esc(existing?.description || '')}</textarea></label>
          <fieldset class="rn-aud"><legend>Qui invites-tu ?</legend>
            ${Object.entries(AUDIENCE).map(([k, l]) => `<label class="rn-check"><input type="checkbox" name="aud" value="${k}" ${existing?.audiences.includes(k) ? 'checked' : ''}> ${esc(l)}</label>`).join('')}
            <p class="rn-hint">Et/ou des personnes précises :</p>
            <input type="search" class="rn-search" placeholder="Rechercher un adhérent…" aria-label="Rechercher un adhérent">
            <div class="rn-pick-count"></div>
            <div class="rn-pick-list"></div>
          </fieldset>
          <p class="rn-hint">Les invités reçoivent une notification, et une autre quand tu ouvres la salle. Seules les personnes invitées peuvent entrer.</p>
          <div class="rn-modal-actions"><button type="button" class="btn btn-outline" data-close>Annuler</button><button type="submit" class="btn btn-primary">${existing ? 'Enregistrer' : 'Planifier et prévenir'}</button></div>
        </form>`);
      const list = el.querySelector('.rn-pick-list');
      const count = el.querySelector('.rn-pick-count');
      const draw = () => {
        const term = el.querySelector('.rn-search').value.trim().toLowerCase();
        const rows = people.filter((p) => !term || p.name.toLowerCase().includes(term));
        list.innerHTML = rows.length ? rows.map((p) => `<label class="rn-pick"><input type="checkbox" value="${esc(p.id)}" ${chosen.has(p.id) ? 'checked' : ''}><span class="rn-av" style="--h:${hue(p.name)}">${esc(initials(p.name))}</span><span>${esc(p.name)}</span></label>`).join('') : '<p class="rn-hint">Aucun adhérent trouvé.</p>';
        count.textContent = chosen.size ? `${chosen.size} personne${chosen.size > 1 ? 's' : ''} choisie${chosen.size > 1 ? 's' : ''}` : '';
      };
      list.addEventListener('change', (e) => { if (e.target.matches('input[type=checkbox]')) { e.target.checked ? chosen.add(e.target.value) : chosen.delete(e.target.value); draw(); } });
      el.querySelector('.rn-search').addEventListener('input', draw);
      draw();
      el.querySelector('#rnForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const f = e.target;
        const audiences = [...f.querySelectorAll('input[name=aud]:checked')].map((i) => i.value);
        if (!audiences.length && !chosen.size) { toast('Choisis au moins un groupe ou une personne à inviter', 'error'); return; }
        const body = {
          title: f.title.value.trim(), description: f.description.value.trim() || null,
          startsAt: new Date(f.startsAt.value).toISOString(), durationMinutes: Number(f.durationMinutes.value) || 60,
          audiences, inviteeIds: [...chosen],
        };
        const submit = f.querySelector('button[type=submit]');
        submit.disabled = true;
        try {
          if (existing) await api(`/${encodeURIComponent(existing.id)}`, json('PUT', body)); else await api('/', json('POST', body));
          el.remove();
          toast(existing ? 'Réunion mise à jour' : 'Réunion planifiée : les invités sont prévenus');
          await refresh();
        } catch (error) { toast(error.message, 'error'); submit.disabled = false; }
      });
    }

    start();
  }

  window.Reunions = { mount };
})();

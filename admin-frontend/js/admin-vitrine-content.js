/**
 * Admin — Vitrine & Éditorial : témoignages (accueil), mentors et leur mot (À propos),
 * discussions épinglées à l'accueil. Aucun contenu fictif : une section reste masquée
 * sur le site tant qu'elle est vide. Une personne reliée à un compte membre garde
 * automatiquement sa photo de profil et son nom à jour.
 */
(function () {
  'use strict';

  const TABS = [
    ['testimonials', '💬 Témoignages (Accueil)'],
    ['mentors', '🎓 Mentors & leur mot (À Propos)'],
    ['forum', '📌 Discussions à l\'accueil'],
  ];

  let members = [];
  const state = { testimonials: [], mentors: [] };

  const esc = (value) => window.AdminPages.escapeHtml(value == null ? '' : value);
  const toast = (message, type) => window.AdminPages.showToast(message, type);

  function parseList(raw) {
    try {
      const value = typeof raw === 'string' ? JSON.parse(raw) : raw;
      return Array.isArray(value) ? value : [];
    } catch (_) {
      return [];
    }
  }

  const memberById = (id) => members.find((m) => m.id === id);
  const memberLabel = (m) => `${m.firstName || ''} ${m.lastName || ''}`.trim() + (m.email ? ` (${m.email})` : '');

  function photoPreview(src, name) {
    const ok = typeof src === 'string' && (/^https:\/\//i.test(src) || /^data:image\//i.test(src));
    const initials = String(name || '?').split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase() || '?';
    return ok
      ? `<img src="${esc(src)}" alt="" style="width:56px;height:56px;border-radius:50%;object-fit:cover;">`
      : `<span style="width:56px;height:56px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;background:#0f2b46;color:#fff;font-weight:700;">${esc(initials)}</span>`;
  }

  // Champs communs : membre relié (facultatif), nom, photo
  function personFields(item) {
    const linked = item.userId ? memberById(item.userId) : null;
    const photo = linked?.avatarUrl || item.photo || '';
    return `
      <div style="display:grid;grid-template-columns:64px 1fr;gap:0.75rem;align-items:start;">
        <div data-photo-preview>${photoPreview(photo, item.name || (linked && `${linked.firstName} ${linked.lastName}`))}</div>
        <div style="display:flex;flex-direction:column;gap:0.5rem;">
          <label style="font-size:0.82rem;font-weight:600;">Membre du site relié <span style="font-weight:400;color:#64748b;">(facultatif : sa photo de profil et son nom sont alors repris automatiquement)</span>
            <input type="text" class="form-input" data-f="member" list="vc-members" value="${esc(linked ? memberLabel(linked) : '')}" data-user-id="${esc(item.userId || '')}" placeholder="Tapez un nom ou un e-mail de membre…" style="width:100%;">
          </label>
          <label style="font-size:0.82rem;font-weight:600;">Nom affiché
            <input type="text" class="form-input" data-f="name" maxlength="80" value="${esc(item.name || '')}" placeholder="Ex. Fatou Kiné S. (vide = nom du membre relié)" style="width:100%;">
          </label>
          <div style="display:flex;gap:0.5rem;align-items:flex-end;flex-wrap:wrap;">
            <label style="flex:1;min-width:200px;font-size:0.82rem;font-weight:600;">Photo <span style="font-weight:400;color:#64748b;">(si aucun membre n'est relié)</span>
              <input type="url" class="form-input" data-f="photo" maxlength="500" value="${esc(item.photo || '')}" placeholder="https://…" style="width:100%;">
            </label>
            <label class="btn btn-secondary btn-sm" style="cursor:pointer;margin:0;">📷 Importer une photo
              <input type="file" accept="image/png,image/jpeg,image/webp" data-upload hidden>
            </label>
          </div>
        </div>
      </div>`;
  }

  const ROWS = {
    testimonials: (t = {}) => `
      <div class="timeline-step-card vc-row" style="display:flex;flex-direction:column;gap:0.6rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span class="badge badge-primary" style="font-size:0.78rem;">Témoignage</span>
          <button type="button" class="btn btn-danger btn-sm" data-vc-remove>🗑️ Retirer</button>
        </div>
        ${personFields(t)}
        <label style="font-size:0.82rem;font-weight:600;">Situation / légende
          <input type="text" class="form-input" data-f="role" maxlength="120" value="${esc(t.role || '')}" placeholder="Ex. Élève de Terminale S2 — LYNAQE" style="width:100%;">
        </label>
        <label style="font-size:0.82rem;font-weight:600;">Témoignage *
          <textarea class="form-input" data-f="quote" rows="3" maxlength="600" placeholder="Ce que le club lui a apporté, avec ses mots." style="width:100%;">${esc(t.quote || '')}</textarea>
        </label>
      </div>`,
    mentors: (m = {}) => `
      <div class="timeline-step-card vc-row" style="display:flex;flex-direction:column;gap:0.6rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <span class="badge badge-primary" style="font-size:0.78rem;">Mentor</span>
          <button type="button" class="btn btn-danger btn-sm" data-vc-remove>🗑️ Retirer</button>
        </div>
        ${personFields(m)}
        <label style="font-size:0.82rem;font-weight:600;">Fonction *
          <input type="text" class="form-input" data-f="role" maxlength="120" value="${esc(m.role || '')}" placeholder="Ex. Professeur de mathématiques, ingénieur, médecin…" style="width:100%;">
        </label>
        <label style="font-size:0.82rem;font-weight:600;">Présentation courte
          <textarea class="form-input" data-f="bio" rows="2" maxlength="400" placeholder="Parcours et domaines d'accompagnement." style="width:100%;">${esc(m.bio || '')}</textarea>
        </label>
        <label style="font-size:0.82rem;font-weight:600;">Le mot du mentor
          <textarea class="form-input" data-f="quote" rows="3" maxlength="600" placeholder="Son message aux jeunes du club." style="width:100%;">${esc(m.quote || '')}</textarea>
        </label>
        <label style="font-size:0.82rem;font-weight:600;">Profil LinkedIn (facultatif)
          <input type="url" class="form-input" data-f="linkedin" maxlength="300" value="${esc(m.linkedin || '')}" placeholder="https://www.linkedin.com/in/…" style="width:100%;">
        </label>
      </div>`,
  };

  function listPane(key, intro, addLabel, saveLabel) {
    return `
      <div id="vitrine-tab-${key}-pane" class="vitrine-tab-pane" style="display:none;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:1rem;flex-wrap:wrap;margin-bottom:1rem;">
          <p style="margin:0;font-size:0.9rem;color:var(--color-muted);max-width:640px;">${intro}</p>
          <button type="button" class="btn btn-secondary" data-vc-add="${key}">➕ ${addLabel}</button>
        </div>
        <div data-vc-list="${key}" style="display:flex;flex-direction:column;gap:1rem;">
          ${state[key].length ? state[key].map(ROWS[key]).join('') : ''}
        </div>
        <p data-vc-empty="${key}" style="${state[key].length ? 'display:none;' : ''}padding:1rem;border:1px dashed var(--color-border);border-radius:10px;color:var(--color-muted);font-size:0.9rem;">Aucun élément : la section est masquée sur le site.</p>
        <div style="display:flex;justify-content:flex-end;margin-top:1.25rem;">
          <button type="button" class="btn btn-primary" data-vc-save="${key}" style="padding:0.75rem 1.5rem;font-weight:700;">💾 ${saveLabel}</button>
        </div>
      </div>`;
  }

  function renderPanes(settings) {
    state.testimonials = parseList(settings.find((s) => s.key === 'home.testimonials')?.value);
    state.mentors = parseList(settings.find((s) => s.key === 'about.mentors')?.value);
    return `
      <datalist id="vc-members"></datalist>
      ${listPane('testimonials', "Témoignages réels de membres, affichés sur la page d'accueil. Demandez l'accord de la personne avant de publier son témoignage et sa photo.", 'Ajouter un témoignage', 'Enregistrer les témoignages')}
      ${listPane('mentors', "Mentors et professionnels du club, avec leur mot aux jeunes, affichés sur la page À Propos. Reliez le mentor à son compte pour afficher sa photo de profil.", 'Ajouter un mentor', 'Enregistrer les mentors')}
      <div id="vitrine-tab-forum-pane" class="vitrine-tab-pane" style="display:none;">
        <p style="margin:0 0 1rem;font-size:0.9rem;color:var(--color-muted);max-width:720px;">
          Les discussions <strong>épinglées</strong> s'affichent en premier sur la page d'accueil (3 au maximum) et en tête du forum. Sans discussion épinglée, l'accueil montre les plus récentes.
        </p>
        <div id="vc-forum-list"><div class="empty-state">Chargement des discussions…</div></div>
      </div>`;
  }

  function readRows(key) {
    return [...document.querySelectorAll(`[data-vc-list="${key}"] .vc-row`)].map((row) => {
      const item = {};
      row.querySelectorAll('[data-f]').forEach((input) => {
        if (input.dataset.f === 'member') {
          if (input.dataset.userId) item.userId = input.dataset.userId;
          return;
        }
        const value = input.value.trim();
        if (value) item[input.dataset.f] = value;
      });
      return item;
    });
  }

  async function save(key, button) {
    const settingKey = key === 'testimonials' ? 'home.testimonials' : 'about.mentors';
    const items = readRows(key);
    button.disabled = true;
    try {
      await window.AdminApi.settings.update(settingKey, JSON.stringify(items));
      toast(items.length ? 'Enregistré : visible sur le site dans une minute' : 'Liste vidée : la section est masquée sur le site', 'success');
    } catch (error) {
      toast(error.message, 'error');
    } finally {
      button.disabled = false;
    }
  }

  function refreshPreview(row) {
    const input = row.querySelector('[data-f="member"]');
    const linked = input.dataset.userId ? memberById(input.dataset.userId) : null;
    const photo = linked?.avatarUrl || row.querySelector('[data-f="photo"]').value.trim();
    const name = row.querySelector('[data-f="name"]').value.trim() || (linked ? `${linked.firstName} ${linked.lastName}` : '');
    row.querySelector('[data-photo-preview]').innerHTML = photoPreview(photo, name);
  }

  async function loadMembers() {
    try {
      const res = await window.AdminApi.users.getAll({ limit: 100 });
      members = res.data?.users || res.data || [];
    } catch (_) {
      members = [];
    }
    const list = document.getElementById('vc-members');
    if (list) list.innerHTML = members.map((m) => `<option value="${esc(memberLabel(m))}"></option>`).join('');
    document.querySelectorAll('.vc-row').forEach((row) => {
      const input = row.querySelector('[data-f="member"]');
      const linked = input.dataset.userId ? memberById(input.dataset.userId) : null;
      if (linked) input.value = memberLabel(linked);
      refreshPreview(row);
    });
  }

  async function loadForum() {
    const box = document.getElementById('vc-forum-list');
    if (!box) return;
    try {
      const res = await window.AdminApi.forum.getAll({ limit: 30, sort: 'recent' });
      const topics = res.data?.topics || res.data || [];
      box.innerHTML = topics.length
        ? `<div class="table-wrapper"><table><thead><tr><th>Discussion</th><th>Auteur</th><th>Réponses</th><th>Accueil</th></tr></thead><tbody>
            ${topics.map((t) => `
              <tr>
                <td><div style="font-weight:600;">${t.isPinned ? '📌 ' : ''}${esc(t.title)}</div><div style="font-size:0.78rem;color:#64748b;">${esc(t.category || '')}</div></td>
                <td>${esc(t.author ? `${t.author.firstName || ''} ${t.author.lastName || ''}` : '')}</td>
                <td>${esc(t.replyCount ?? 0)}</td>
                <td><button type="button" class="btn btn-sm ${t.isPinned ? 'btn-ghost' : 'btn-primary'}" data-vc-pin="${esc(t.id)}">${t.isPinned ? 'Désépingler' : '📌 Épingler'}</button></td>
              </tr>`).join('')}
          </tbody></table></div>`
        : '<div class="empty-state">Aucune discussion sur le forum pour le moment. L\'accueil invite les visiteurs à lancer la première.</div>';
    } catch (error) {
      box.innerHTML = `<div class="empty-state">Impossible de charger les discussions : ${esc(error.message)}</div>`;
    }
  }

  function bind() {
    const root = document.getElementById('vitrine-tab-testimonials-pane')?.parentElement;
    if (!root) return;

    root.addEventListener('click', async (event) => {
      const add = event.target.closest('[data-vc-add]');
      if (add) {
        const key = add.dataset.vcAdd;
        const list = root.querySelector(`[data-vc-list="${key}"]`);
        list.insertAdjacentHTML('beforeend', ROWS[key]());
        root.querySelector(`[data-vc-empty="${key}"]`).style.display = 'none';
        list.lastElementChild.querySelector('input').focus();
        return;
      }
      const remove = event.target.closest('[data-vc-remove]');
      if (remove) {
        const list = remove.closest('[data-vc-list]');
        remove.closest('.vc-row').remove();
        if (!list.children.length) root.querySelector(`[data-vc-empty="${list.dataset.vcList}"]`).style.display = '';
        return;
      }
      const saveButton = event.target.closest('[data-vc-save]');
      if (saveButton) { save(saveButton.dataset.vcSave, saveButton); return; }
      const pin = event.target.closest('[data-vc-pin]');
      if (pin) {
        pin.disabled = true;
        try {
          await window.AdminApi.forum.pin(pin.dataset.vcPin);
          toast('Discussion mise à jour', 'success');
          loadForum();
        } catch (error) {
          toast(error.message, 'error');
          pin.disabled = false;
        }
      }
    });

    root.addEventListener('input', (event) => {
      const row = event.target.closest('.vc-row');
      if (!row) return;
      if (event.target.dataset.f === 'member') {
        const value = event.target.value.trim();
        const match = members.find((m) => memberLabel(m) === value || m.email === value);
        event.target.dataset.userId = match ? match.id : '';
      }
      if (['member', 'photo', 'name'].includes(event.target.dataset.f)) refreshPreview(row);
    });

    root.addEventListener('change', async (event) => {
      const fileInput = event.target.closest('[data-upload]');
      if (!fileInput || !fileInput.files[0]) return;
      const row = fileInput.closest('.vc-row');
      const file = fileInput.files[0];
      if (file.size > 3 * 1024 * 1024) { toast('Photo trop lourde (3 Mo maximum)', 'error'); return; }
      try {
        const res = await window.AdminApi.upload.file(file, 'vitrine');
        if (!res.success || !res.data?.url) throw new Error(res.message || 'Échec de l\'import');
        row.querySelector('[data-f="photo"]').value = res.data.url;
        refreshPreview(row);
        toast('Photo importée : pensez à enregistrer', 'success');
      } catch (error) {
        toast(error.message, 'error');
      } finally {
        fileInput.value = '';
      }
    });

    loadMembers();
    loadForum();
  }

  window.AdminVitrineContent = { TABS, renderPanes, bind };
})();

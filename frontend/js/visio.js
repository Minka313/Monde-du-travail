/**
 * Salle virtuelle (visio.html?formation=<id ou slug>) : salle d'attente des formations en direct.
 * Aussi les séances de mentorat individuelles (visio.html?seance=<id>) : le mentor ouvre la salle,
 * seuls le mentor, le mentoré et la Présidence y entrent.
 * L'animateur (Présidence, mentor de la formation, administrateur) ouvre et ferme la salle.
 * - JaaS configuré (session.provider === 'jaas') : la réunion s'affiche dans la page ; chacun
 *   entre avec un jeton personnel délivré par le serveur, l'animateur y est modérateur d'office.
 * - Sinon : réunion sur meet.jit.si dans un nouvel onglet (intégration non permise par le service
 *   public) ; l'animateur s'y connecte avec Google, GitHub ou Facebook.
 * Les participants n'ont besoin d'aucun compte.
 */
(function () {
  'use strict';

  const params = new URLSearchParams(window.location.search);
  const seanceId = params.get('seance') || '';
  const formationId = seanceId || params.get('formation') || params.get('id') || '';
  // Points d'entrée de l'API selon le type de salle
  const API = seanceId
    ? {
      session: () => window.Api.request(`/mentoring/sessions/${encodeURIComponent(seanceId)}/visio`),
      join: () => `/mentoring/sessions/${encodeURIComponent(seanceId)}/visio/join`,
      host: (action) => window.Api.request(`/mentoring/sessions/${encodeURIComponent(seanceId)}/visio/${action}`, { method: 'POST' }),
    }
    : {
      session: () => window.Api.formations.getVisioSession(formationId),
      join: () => `/formations/${encodeURIComponent(session.formationId)}/visio/join`,
      host: null,
    };
  const NOTES_KEY = `lmdt_visio_notes_${formationId}`;
  const ECO_KEY = 'lmdt_visio_eco';
  const NAME_KEY = 'lmdt_user_name';
  const REFRESH_MS = 30000;

  let session = null;
  let refreshTimer = null;
  let meeting = null;
  const $ = (id) => document.getElementById(id);
  const esc = (value) => (window.escapeHtml ? window.escapeHtml(value) : String(value ?? ''));

  document.addEventListener('DOMContentLoaded', async () => {
    setupSidebar();
    setupNotes();
    setupEcoToggle();
    if (!formationId) return renderError('Aucune formation indiquée dans le lien.');
    if (seanceId && !(window.Api && window.Api.getToken && window.Api.getToken())) {
      return renderError('Connecte-toi pour rejoindre ta séance de mentorat.');
    }
    await load();
  });

  // ===== Données =====

  async function load() {
    clearTimeout(refreshTimer);
    if (meeting) return;
    try {
      session = (await API.session()).data;
    } catch (error) {
      renderError(error.status === 404 ? (seanceId ? 'Cette séance est introuvable.' : 'Cette formation est introuvable. Vérifie le lien reçu.') : (error.message || 'Salle indisponible pour le moment.'));
      return;
    }
    renderSidebar(session);
    if (session.visioStatus === 'LIVE') renderLive();
    else renderClosed();
    // Tant que la salle est fermée, on vérifie régulièrement si l'animateur l'a ouverte
    if (session.visioStatus !== 'LIVE') refreshTimer = setTimeout(load, REFRESH_MS);
  }

  function setStatus(live) {
    $('visioStatusBadge').classList.toggle('is-closed', !live);
    $('visioStatusLabel').textContent = live ? 'EN DIRECT' : 'SALLE FERMÉE';
  }

  // ===== Lien Jitsi =====

  function accountName() {
    try {
      const u = JSON.parse(localStorage.getItem('currentUser') || 'null');
      return u ? `${u.firstName || ''} ${u.lastName || ''}`.trim() : '';
    } catch (_) {
      return '';
    }
  }

  function displayName() {
    return ($('visioNameInput')?.value || '').trim() || session.userName || localStorage.getItem(NAME_KEY) || accountName();
  }

  // Réglages passés à Jitsi dans l'adresse : langue, nom, micro coupé, mode économie de données
  function meetingLink({ withName = true } = {}) {
    const eco = localStorage.getItem(ECO_KEY) === '1';
    const options = {
      'config.defaultLanguage': 'fr',
      'config.prejoinConfig.enabled': true,
      'config.disableDeepLinking': true,
      'config.startWithAudioMuted': !session.isModerator,
      ...(eco ? { 'config.startAudioOnly': true, 'config.resolution': 180 } : {}),
      ...(withName && displayName() ? { 'userInfo.displayName': displayName() } : {}),
    };
    const hash = Object.entries(options).map(([k, v]) => `${k}=${encodeURIComponent(JSON.stringify(v))}`).join('&');
    return `${session.meetingUrl}#${hash}`;
  }

  // ===== Rendu =====

  function renderError(message) {
    setStatus(false);
    $('visioFormationTitle').textContent = 'Salle virtuelle';
    $('visioLobby').innerHTML = `
      <div class="lobby-card">
        <div class="lobby-icon">⚠️</div>
        <h2>Salle indisponible</h2>
        <p>${esc(message)}</p>
        <a class="lobby-btn lobby-btn-ghost" href="formations.html">Voir les formations</a>
      </div>`;
  }

  function hostBlock(live) {
    if (!session.isModerator) return '';
    return `
      <div class="lobby-host">
        <h3>🎙️ Vous animez cette session</h3>
        ${live && isEmbedded() ? `
          <ol>
            <li>Entrez dans la salle : vous êtes modérateur d'office (couper un micro, exclure, partager l'écran).</li>
            <li>Partagez le lien de cette page : chacun y entre avec son nom, sans compte.</li>
          </ol>
          <div class="lobby-actions">
            <button type="button" class="lobby-btn lobby-btn-ghost" data-act="copy">🔗 Copier le lien de la salle</button>
            <button type="button" class="lobby-btn lobby-btn-danger" data-act="stop">⏹ Fermer la salle</button>
          </div>` : live ? `
          <ol>
            <li>Cliquez sur « Rejoindre la visio » : la réunion s'ouvre dans un nouvel onglet.</li>
            <li>Jitsi vous demande de vous connecter : choisissez <strong>Google</strong> (compte du club ou le vôtre). Les participants patientent jusqu'à votre arrivée.</li>
            <li>Une réunion dure au maximum ${session.maxDurationMinutes} minutes sur meet.jit.si : au-delà, fermez puis rouvrez la salle ici pour obtenir un nouveau lien.</li>
          </ol>
          <div class="lobby-actions">
            <button type="button" class="lobby-btn lobby-btn-ghost" data-act="copy">🔗 Copier le lien de la salle</button>
            <button type="button" class="lobby-btn lobby-btn-danger" data-act="stop">⏹ Fermer la salle</button>
          </div>` : `
          <p>Ouvrez la salle quelques minutes avant le début : les participants qui attendent sur cette page verront le bouton « Rejoindre » apparaître automatiquement.</p>
          <div class="lobby-actions"><button type="button" class="lobby-btn lobby-btn-primary" data-act="start">▶️ Ouvrir la salle</button></div>`}
      </div>`;
  }

  function renderClosed() {
    setStatus(false);
    const when = session.visioScheduledAt || session.startDate;
    $('visioLobby').innerHTML = `
      <div class="lobby-card">
        <div class="lobby-icon">🕒</div>
        <h2>La salle n'est pas encore ouverte</h2>
        <p>${when ? `Session prévue le <strong>${esc(new Date(when).toLocaleString('fr-FR', { dateStyle: 'full', timeStyle: 'short' }))}</strong>.` : 'L\'animateur ouvrira la salle au début de la session.'}</p>
        <p class="lobby-muted">Garde cette page ouverte : elle se met à jour toute seule dès que la salle ouvre.</p>
        ${hostBlock(false)}
      </div>`;
    bindActions();
  }

  function renderLive() {
    setStatus(true);
    const eco = localStorage.getItem(ECO_KEY) === '1';
    $('visioLobby').innerHTML = `
      <div class="lobby-card lobby-live">
        <div class="lobby-icon">🟢</div>
        <h2>La salle est ouverte</h2>
        <label class="lobby-field" for="visioNameInput">Ton nom dans la réunion
          <input id="visioNameInput" maxlength="60" value="${esc(displayName())}" placeholder="Prénom Nom">
        </label>
        <label class="lobby-check"><input type="checkbox" id="visioEcoCheck" ${eco ? 'checked' : ''}> 📶 Mode Éco-Data : vidéo réduite, idéal en 4G</label>
        ${isEmbedded()
          ? '<button type="button" class="lobby-btn lobby-btn-join" id="visioJoinBtn">Entrer dans la salle</button>'
          : '<a class="lobby-btn lobby-btn-join" id="visioJoinBtn" href="#" target="_blank" rel="noopener">Rejoindre la visio ↗</a>'}
        <ul class="lobby-tips">
          <li>${isEmbedded() ? 'La réunion s\'affiche ici, sans quitter le site' : 'La réunion s\'ouvre dans un nouvel onglet sur <strong>meet.jit.si</strong>'} : aucun compte n'est nécessaire pour les participants.</li>
          <li>Autorise l'accès au micro et à la caméra quand le navigateur le demande.</li>
          <li>Sur téléphone, reste dans le navigateur (Chrome ou Safari) : l'application n'est pas obligatoire.</li>
          <li>Si le message « en attente de l'organisateur » s'affiche, patiente : l'animateur arrive.</li>
        </ul>
        ${hostBlock(true)}
      </div>`;
    const join = $('visioJoinBtn');
    const sync = () => { if (!isEmbedded()) join.href = meetingLink(); };
    sync();
    $('visioNameInput').addEventListener('input', () => {
      try { localStorage.setItem(NAME_KEY, $('visioNameInput').value.trim()); } catch (_) { /* stockage indisponible */ }
      sync();
    });
    $('visioEcoCheck').addEventListener('change', (e) => { setEco(e.target.checked); sync(); });
    join.addEventListener('click', () => {
      try { window.AnalyticsTracker?.track?.('visio_join', 'formation', session.slug || session.formationId, { host: session.isModerator }); } catch (_) { /* suivi facultatif */ }
      if (isEmbedded()) enterRoom(join);
    });
    bindActions();
  }

  // ===== Réunion intégrée (JaaS) =====

  function isEmbedded() {
    return session?.provider === 'jaas';
  }

  const scripts = {};
  function loadScript(src) {
    scripts[src] = scripts[src] || new Promise((resolve, reject) => {
      const el = Object.assign(document.createElement('script'), { src, async: true, onload: resolve });
      el.onerror = () => { delete scripts[src]; el.remove(); reject(new Error('Le service de visio ne répond pas. Vérifie ta connexion puis réessaie.')); };
      document.head.appendChild(el);
    });
    return scripts[src];
  }

  async function enterRoom(btn) {
    btn.disabled = true;
    btn.textContent = 'Connexion…';
    try {
      const access = (await window.Api.request(API.join(), {
        method: 'POST',
        body: JSON.stringify({ name: displayName() }),
      })).data;
      await loadScript(access.scriptUrl);
      const eco = localStorage.getItem(ECO_KEY) === '1';
      const area = $('visioStreamArea');
      area.insertAdjacentHTML('beforeend', `
        <div class="visio-stage" id="visioStage">
          <div class="visio-stage-bar">
            <span>🟢 ${esc(session.title || 'Session en direct')}</span>
            ${access.isModerator ? '<button type="button" class="lobby-btn lobby-btn-danger" data-stage="stop">⏹ Fermer la salle</button>' : ''}
            <button type="button" class="lobby-btn lobby-btn-ghost" data-stage="leave">Quitter</button>
          </div>
          <div class="visio-stage-frame" id="visioStageFrame"></div>
        </div>`);
      $('visioLobby').hidden = true;
      meeting = new window.JitsiMeetExternalAPI(access.domain, {
        roomName: access.roomName,
        jwt: access.jwt,
        parentNode: $('visioStageFrame'),
        width: '100%',
        height: '100%',
        lang: 'fr',
        userInfo: { displayName: access.displayName },
        configOverwrite: {
          prejoinConfig: { enabled: true },
          disableDeepLinking: true,
          startWithAudioMuted: !access.isModerator,
          ...(eco ? { startAudioOnly: true, resolution: 180, constraints: { video: { height: { ideal: 180, max: 180 } } } } : {}),
        },
      });
      meeting.addListener('readyToClose', leaveRoom);
      $('visioStage').querySelectorAll('[data-stage]').forEach((b) => b.addEventListener('click', async () => {
        if (b.dataset.stage === 'leave') return leaveRoom();
        if (!window.confirm('Fermer la salle pour tout le monde ?')) return;
        try {
          meeting.executeCommand('endConference');
        } catch (_) { /* fin de réunion facultative */ }
        try { await hostRequest('stop'); notify('⏹ Salle fermée'); } catch (error) { notify(`⚠️ ${error.message || 'Action impossible'}`); }
        leaveRoom();
      }));
    } catch (error) {
      leaveRoom();
      btn.disabled = false;
      btn.textContent = 'Entrer dans la salle';
      notify(`⚠️ ${error.message || 'Impossible d\'entrer dans la salle'}`);
    }
  }

  function leaveRoom() {
    try { meeting?.dispose(); } catch (_) { /* déjà fermée */ }
    meeting = null;
    $('visioStage')?.remove();
    $('visioLobby').hidden = false;
    load();
  }

  // ===== Actions de l'animateur =====

  async function hostRequest(action) {
    if (API.host) return API.host(action);
    const id = encodeURIComponent(session.formationId);
    // Mentors de la formation et Présidence : Espace Mentor ; autres administrateurs : API des formations
    try {
      return await window.Api.request(`/mentoring/formations/${id}/visio/${action}`, { method: 'POST' });
    } catch (error) {
      if (error.status !== 403) throw error;
      return window.Api.request(`/formations/${id}/visio/${action}`, { method: 'POST' });
    }
  }

  function bindActions() {
    $('visioLobby').querySelectorAll('[data-act]').forEach((btn) => btn.addEventListener('click', async () => {
      const act = btn.dataset.act;
      if (act === 'copy') {
        // Réunion intégrée : on partage cette page (le jeton est délivré à l'entrée)
        const link = isEmbedded() ? window.location.href.split('#')[0] : meetingLink({ withName: false });
        try { await navigator.clipboard.writeText(link); notify('🔗 Lien copié : partage-le aux participants'); } catch (_) { window.prompt('Lien de la salle :', link); }
        return;
      }
      if (act === 'stop' && !window.confirm('Fermer la salle ? Le lien actuel ne fonctionnera plus.')) return;
      btn.disabled = true;
      try {
        await hostRequest(act);
        notify(act === 'start' ? '▶️ Salle ouverte' : '⏹ Salle fermée');
        await load();
      } catch (error) {
        btn.disabled = false;
        notify(`⚠️ ${error.message || 'Action impossible'}`);
      }
    }));
  }

  // ===== Barre latérale, notes, mode Éco-Data =====

  function renderSidebar(s) {
    $('visioFormationTitle').textContent = s.title || 'Formation';
    document.title = `${s.title} — Salle virtuelle | Le Monde du Travail`;
    $('visioObjectivesContent').textContent = s.objectives || 'Les objectifs seront présentés par l\'animateur en début de session.';
    // Séance de mentorat : thème et objectifs du binôme, pas de programme en modules
    if (s.kind === 'seance') {
      const heading = $('visioObjectivesContent').previousElementSibling;
      if (heading) heading.textContent = '🎯 Thème et objectifs de la séance';
      $('visioObjectivesContent').style.whiteSpace = 'pre-line';
      const modules = $('visioSyllabusList').parentElement;
      if (modules) modules.hidden = true;
    }
    $('visioDuration').textContent = s.duration || 'Session en direct';
    $('visioLocation').textContent = s.location || 'En ligne';
    let syllabus = s.syllabus || [];
    if (typeof syllabus === 'string') { try { syllabus = JSON.parse(syllabus); } catch (_) { syllabus = []; } }
    $('visioSyllabusList').innerHTML = Array.isArray(syllabus) && syllabus.length
      ? syllabus.map((m, i) => `
          <div class="visio-module-card">
            <div class="visio-module-title"><span>${esc(m.module || `Étape ${i + 1}`)}</span>${m.duration ? `<span class="visio-module-duration">${esc(m.duration)}</span>` : ''}</div>
            ${Array.isArray(m.lessons) ? `<ul class="visio-lessons-list">${m.lessons.map((l) => `<li>${esc(l)}</li>`).join('')}</ul>` : ''}
          </div>`).join('')
      : '<div class="pane-card" style="font-size:0.82rem;color:#94a3b8;">Le programme sera partagé en direct par l\'animateur.</div>';
    $('visioRelatedJobsList').innerHTML = s.slug
      ? `<a href="formation-detail.html?slug=${encodeURIComponent(s.slug)}" target="_blank" rel="noopener" class="visio-job-item"><span>📚 Fiche complète de la formation</span><span style="color:#0284c7;">&rarr;</span></a>
         <a href="job.html" target="_blank" rel="noopener" class="visio-job-item"><span>🎯 Explorer les métiers liés</span><span style="color:#0284c7;">&rarr;</span></a>`
      : '<a href="job.html" target="_blank" rel="noopener" class="visio-job-item"><span>🎯 Explorer les métiers</span><span style="color:#0284c7;">&rarr;</span></a>';
  }

  function setEco(on) {
    try { localStorage.setItem(ECO_KEY, on ? '1' : '0'); } catch (_) { /* stockage indisponible */ }
    $('btnDataSaver').classList.toggle('active', on);
    $('dataSaverState').textContent = on ? 'ON' : 'OFF';
    const check = $('visioEcoCheck');
    if (check) check.checked = on;
  }

  function setupEcoToggle() {
    setEco(localStorage.getItem(ECO_KEY) === '1');
    $('btnDataSaver').addEventListener('click', () => {
      const on = localStorage.getItem(ECO_KEY) !== '1';
      setEco(on);
      if (session?.visioStatus === 'LIVE' && !isEmbedded() && $('visioJoinBtn')) $('visioJoinBtn').href = meetingLink();
      notify(on ? '📶 Mode Éco-Data activé pour la réunion' : '📶 Qualité vidéo normale');
    });
  }

  function setupNotes() {
    const input = $('visioNotesInput');
    const saved = $('notesSavedIndicator');
    input.value = localStorage.getItem(NOTES_KEY) || '';
    let timer;
    input.addEventListener('input', () => {
      saved.textContent = '⏳ Enregistrement…';
      saved.style.color = '#f59e0b';
      clearTimeout(timer);
      timer = setTimeout(() => {
        try { localStorage.setItem(NOTES_KEY, input.value); } catch (_) { /* stockage indisponible */ }
        saved.textContent = '✓ Enregistré';
        saved.style.color = '#10b981';
      }, 500);
    });
    $('btnDownloadNotes').addEventListener('click', () => {
      if (!input.value.trim()) { notify('Le bloc-notes est vide'); return; }
      const title = session?.title || 'formation';
      const blob = new Blob([`LE MONDE DU TRAVAIL — NOTES D'ATELIER\nFormation : ${title}\nDate : ${new Date().toLocaleString('fr-FR')}\n\n${input.value}`], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = Object.assign(document.createElement('a'), { href: url, download: `notes_${title.toLowerCase().replace(/[^a-z0-9]+/g, '_')}.txt` });
      a.click();
      URL.revokeObjectURL(url);
    });
  }

  function setupSidebar() {
    const sidebar = $('visioSidebar');
    // Sur téléphone, la salle d'attente (bouton « Rejoindre ») passe avant le programme
    if (window.matchMedia('(max-width: 860px)').matches) sidebar.classList.add('collapsed');
    $('btnToggleSidebar').addEventListener('click', () => sidebar.classList.toggle('collapsed'));
    $('btnCloseSidebar').addEventListener('click', () => sidebar.classList.add('collapsed'));
    document.querySelectorAll('.sidebar-tab').forEach((tab) => tab.addEventListener('click', () => {
      document.querySelectorAll('.sidebar-tab').forEach((t) => t.classList.toggle('active', t === tab));
      document.querySelectorAll('.sidebar-pane').forEach((p) => p.classList.toggle('active', p.id === tab.dataset.tab));
    }));
  }

  function notify(message) {
    document.getElementById('visioToast')?.remove();
    const toast = document.createElement('div');
    toast.id = 'visioToast';
    toast.className = 'visio-toast';
    toast.setAttribute('role', 'status');
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 3500);
  }
})();

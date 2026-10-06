/**
 * Contrôleur de Salle Virtuelle & Visioconférence (Jitsi Meet WebRTC)
 * Plateforme : Le Monde du Travail
 */

(function () {
  'use strict';

  // 1. État global de la session
  let jitsiApi = null;
  let currentFormation = null;
  let currentSession = null;
  let isDataSaverActive = false;

  const urlParams = new URLSearchParams(window.location.search);
  const formationId = urlParams.get('formation') || urlParams.get('id') || 'fb-3'; // fallback vers Prise de parole en public
  const queryRoom = urlParams.get('room');
  const queryRole = urlParams.get('role'); // 'moderator' ou 'participant'
  const queryName = urlParams.get('name');

  // Éléments DOM
  const elements = {
    title: document.getElementById('visioFormationTitle'),
    statusBadge: document.getElementById('visioStatusBadge'),
    statusLabel: document.getElementById('visioStatusLabel'),
    loadingScreen: document.getElementById('visioLoadingScreen'),
    loadingDesc: document.getElementById('visioLoadingDesc'),
    meetContainer: document.getElementById('meetContainer'),
    btnDataSaver: document.getElementById('btnDataSaver'),
    dataSaverState: document.getElementById('dataSaverState'),
    btnToggleSidebar: document.getElementById('btnToggleSidebar'),
    btnCloseSidebar: document.getElementById('btnCloseSidebar'),
    sidebar: document.getElementById('visioSidebar'),
    objectives: document.getElementById('visioObjectivesContent'),
    duration: document.getElementById('visioDuration'),
    location: document.getElementById('visioLocation'),
    syllabusList: document.getElementById('visioSyllabusList'),
    relatedJobsList: document.getElementById('visioRelatedJobsList'),
    notesInput: document.getElementById('visioNotesInput'),
    notesSavedIndicator: document.getElementById('notesSavedIndicator'),
    btnDownloadNotes: document.getElementById('btnDownloadNotes'),
  };

  // 2. Initialisation au chargement de la page
  document.addEventListener('DOMContentLoaded', async () => {
    setupSidebarControls();
    setupNotesPad();
    setupDataSaverToggle();

    try {
      await loadSessionData();
      await loadJitsiSdkAndInit();
    } catch (error) {
      console.error('[Visio] Erreur lors de l\'initialisation de la salle virtuelle :', error);
      if (elements.loadingDesc) {
        elements.loadingDesc.innerHTML = `<span style="color:#ef4444;">⚠️ Impossible de charger la session : ${error.message}</span>`;
      }
    }
  });

  // 3. Récupération des métadonnées de la session et de la formation
  async function loadSessionData() {
    let session = null;
    let formation = null;

    try {
      if (window.Api && window.Api.formations && typeof window.Api.formations.getVisioSession === 'function') {
        const res = await window.Api.formations.getVisioSession(formationId);
        if (res && res.data) {
          session = res.data;
          formation = session;
        }
      }
    } catch (e) {
      console.warn('[Visio] API session non disponible, utilisation des données de secours :', e);
    }

    // Données de secours enrichies si l'API est hors ligne ou formation mockée
    if (!formation) {
      const fallbackFormations = {
        'fb-1': {
          title: 'Leadership & Management',
          duration: '4 semaines (30h)',
          location: 'Dakar & En ligne',
          objectives: 'Développer son intelligence managériale, fédérer des équipes multidisciplinaires et gérer les situations de crise.',
          syllabus: [
            { module: 'Module 1 : Posture et Styles de Leadership', duration: '1 sem.', lessons: ['Auto-évaluation de son leadership', 'Délégation efficace'] },
            { module: 'Module 2 : Intelligence émotionnelle d\'équipe', duration: '1 sem.', lessons: ['Gestion des conflits', 'Communication non-violente'] },
          ],
          jobs: [{ title: 'Chef de projet', slug: 'chef-de-projet' }, { title: 'Directeur des opérations', slug: 'directeur-operations' }]
        },
        'fb-2': {
          title: 'Communication efficace',
          duration: '3 semaines (25h)',
          location: 'Dakar & En ligne',
          objectives: 'Adopter une écoute active bienveillante, formuler des feedbacks constructifs et négocier des accords gagnant-gagnant.',
          syllabus: [
            { module: 'Module 1 : Écoute active et questionnement', duration: '1 sem.', lessons: ['Filtres de communication', 'Feedback constructif'] }
          ],
          jobs: [{ title: 'Consultant en communication', slug: 'consultant-communication' }, { title: 'Responsable relations publiques', slug: 'charge-relations-publiques' }]
        },
        'fb-3': {
          title: 'Prise de parole en public',
          duration: '3 semaines (20h)',
          location: 'Dakar & En ligne',
          objectives: 'Maîtriser la gestion du trac, perfectionner sa posture scénique, poser sa voix et structurer un pitch persuasif d\'impact.',
          syllabus: [
            { module: 'Module 1 : Vaincre le trac et ancrage corporel', duration: '1 sem.', lessons: ['Respiration ventrale', 'Regard et occupation de l\'espace'] },
            { module: 'Module 2 : Éloquence et structure de pitch', duration: '1 sem.', lessons: ['Règle des 3 arguments', 'Accroche et conclusion mémorable'] },
          ],
          jobs: [{ title: 'Juriste d\'affaires', slug: 'juriste-d-affaires' }, { title: 'Responsable plaidoyer', slug: 'responsable-plaidoyer' }, { title: 'Porte-parole', slug: 'porte-parole' }]
        },
        'fb-4': {
          title: 'Énergies renouvelables & Solaire',
          duration: '5 semaines (40h)',
          location: 'Atelier Dakar & Hybride',
          objectives: 'Dimensionner une installation photovoltaïque autonome et maîtriser les normes de sécurité en Afrique de l\'Ouest.',
          syllabus: [
            { module: 'Module 1 : Rayonnement et technologies solaires', duration: '2 sem.', lessons: ['Panneaux monocristallins', 'Onduleurs hybrides'] }
          ],
          jobs: [{ title: 'Ingénieur énergies renouvelables', slug: 'ingenieur-energies-renouvelables' }, { title: 'Technicien solaire', slug: 'technicien-solaire' }]
        }
      };

      formation = fallbackFormations[formationId] || fallbackFormations['fb-3'];
    }

    currentFormation = formation;

    // Normalisation de la salle Jitsi
    const cleanTitle = (formation.title || 'atelier')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    currentSession = {
      roomId: queryRoom || session?.roomId || `lmdt-${cleanTitle}-${formationId.slice(-6)}`,
      domain: session?.domain || 'meet.jit.si',
      isModerator: queryRole === 'moderator' || !!session?.isModerator,
      userName: queryName || session?.userName || (window.localStorage.getItem('lmdt_user_name') || 'Apprenant Invité'),
      userEmail: session?.userEmail || '',
    };

    // Rendu des informations de la sidebar
    renderSidebarData(formation);
  }

  // 4. Affichage des informations pédagogiques
  function renderSidebarData(f) {
    if (elements.title) {
      elements.title.textContent = f.title || 'Atelier en direct';
      document.title = `${f.title} — Salle Virtuelle | Le Monde du Travail`;
    }

    if (elements.objectives) {
      elements.objectives.textContent = f.objectives || 'Développer les compétences pratiques et l\'assurance professionnelle.';
    }

    if (elements.duration) elements.duration.textContent = f.duration || 'Session intensive';
    if (elements.location) elements.location.textContent = f.location || 'Dakar / En ligne';

    // Rendu Syllabus
    if (elements.syllabusList) {
      let syllabus = f.syllabus || [];
      if (typeof syllabus === 'string') {
        try { syllabus = JSON.parse(syllabus); } catch (e) { syllabus = []; }
      }

      if (Array.isArray(syllabus) && syllabus.length > 0) {
        elements.syllabusList.innerHTML = syllabus.map((m, idx) => `
          <div class="visio-module-card">
            <div class="visio-module-title">
              <span>${escapeHtml(m.module || `Étape ${idx + 1}`)}</span>
              ${m.duration ? `<span class="visio-module-duration">${escapeHtml(m.duration)}</span>` : ''}
            </div>
            ${Array.isArray(m.lessons) ? `
              <ul class="visio-lessons-list">
                ${m.lessons.map(l => `<li>${escapeHtml(l)}</li>`).join('')}
              </ul>
            ` : ''}
          </div>
        `).join('');
      } else {
        elements.syllabusList.innerHTML = `
          <div class="pane-card" style="font-size:0.82rem;color:#94a3b8;">
            Les modules et exercices pratiques seront partagés en direct par l'intervenant.
          </div>
        `;
      }
    }

    // Rendu Métiers associés
    if (elements.relatedJobsList) {
      const defaultJobs = [
        { title: 'Chargé de mission & Projets', slug: 'chef-de-projet' },
        { title: 'Consultant & Formateur', slug: 'consultant' },
        { title: 'Responsable d\'équipe', slug: 'manager-equipe' }
      ];
      const jobs = f.jobs || defaultJobs;

      elements.relatedJobsList.innerHTML = jobs.map(j => `
        <a href="job-detail.html?slug=${encodeURIComponent(j.slug || '')}" target="_blank" class="visio-job-item" title="Consulter la fiche métier">
          <span>🎯 ${escapeHtml(j.title)}</span>
          <span style="color:#0284c7;">&rarr;</span>
        </a>
      `).join('');
    }
  }

  // 5. Chargement dynamique du SDK Jitsi Meet et démarrage de la visio
  async function loadJitsiSdkAndInit() {
    if (window.JitsiMeetExternalAPI) {
      initJitsiMeeting();
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://meet.jit.si/external_api.js';
    script.async = true;

    script.onload = () => {
      initJitsiMeeting();
    };

    script.onerror = () => {
      throw new Error('Impossible de charger le moteur WebRTC Jitsi Meet. Vérifiez votre connexion Internet.');
    };

    document.head.appendChild(script);
  }

  function initJitsiMeeting() {
    const domain = currentSession.domain || 'meet.jit.si';
    const roomName = currentSession.roomId;
    const isMod = currentSession.isModerator;

    const options = {
      roomName: roomName,
      width: '100%',
      height: '100%',
      parentNode: elements.meetContainer,
      userInfo: {
        displayName: currentSession.userName,
        email: currentSession.userEmail,
      },
      configOverwrite: {
        startWithAudioMuted: !isMod, // Les apprenants entrent micro coupé pour préserver la clarté
        startWithVideoMuted: false,
        prejoinPageEnabled: true,
        disableDeepLinking: true, // Très important : empêche de forcer l'installation de l'application mobile
        defaultLanguage: 'fr',
        enableWelcomePage: false,
        enableClosePage: false,
        disableInviteFunctions: false,
        toolbarButtons: [
          'microphone',
          'camera',
          'closedcaptions',
          'desktop',
          'fullscreen',
          'fodeviceselection',
          'hangup',
          'profile',
          'chat',
          'recording',
          'livestreaming',
          'settings',
          'raisehand',
          'videoquality',
          'filmstrip',
          'tileview',
          'select-background',
          'mute-everyone',
        ],
      },
      interfaceConfigOverwrite: {
        SHOW_JITSI_WATERMARK: false,
        SHOW_WATERMARK_FOR_GUESTS: false,
        DEFAULT_BACKGROUND: '#090d16',
        TOOLBAR_ALWAYS_VISIBLE: false,
        MOBILE_APP_PROMO: false, // Pas de popup poussant vers les stores applicatifs
        LANG_DETECTION: true,
      },
    };

    try {
      jitsiApi = new window.JitsiMeetExternalAPI(domain, options);

      // Événements de la conférence
      jitsiApi.addEventListener('videoConferenceJoined', onConferenceJoined);
      jitsiApi.addEventListener('videoConferenceLeft', onConferenceLeft);
      jitsiApi.addEventListener('readyToClose', onConferenceLeft);
      jitsiApi.addEventListener('participantJoined', onParticipantJoined);
    } catch (err) {
      console.error('[Visio] Erreur lors de l\'instanciation Jitsi :', err);
      if (elements.loadingDesc) {
        elements.loadingDesc.textContent = 'Erreur d\'initialisation du flux vidéo.';
      }
    }
  }

  function onConferenceJoined(event) {
    if (elements.loadingScreen) {
      elements.loadingScreen.style.opacity = '0';
      elements.loadingScreen.style.pointerEvents = 'none';
      setTimeout(() => {
        elements.loadingScreen.style.display = 'none';
      }, 350);
    }

    if (elements.statusLabel) {
      elements.statusLabel.textContent = 'EN DIRECT';
    }
  }

  function onConferenceLeft() {
    if (confirm('Souhaitez-vous quitter la session et revenir aux formations ?')) {
      window.location.href = 'formations.html';
    }
  }

  function onParticipantJoined(participant) {
    console.log('[Visio] Nouveau participant :', participant);
  }

  // 6. Mode Économie de Données (Optimisé pour forfaits 4G Sénégal)
  function setupDataSaverToggle() {
    if (!elements.btnDataSaver) return;

    elements.btnDataSaver.addEventListener('click', () => {
      isDataSaverActive = !isDataSaverActive;

      if (isDataSaverActive) {
        elements.btnDataSaver.classList.add('active');
        if (elements.dataSaverState) elements.dataSaverState.textContent = 'ON';

        if (jitsiApi) {
          // Réduire drastiquement la résolution pour économiser la bande passante
          jitsiApi.executeCommand('setVideoQuality', 180); // Basse définition (audio + diapos nettes)
        }

        showNotification('📶 Mode Éco-Data activé : la consommation de données est réduite au minimum.');
      } else {
        elements.btnDataSaver.classList.remove('active');
        if (elements.dataSaverState) elements.dataSaverState.textContent = 'OFF';

        if (jitsiApi) {
          jitsiApi.executeCommand('setVideoQuality', 720); // Retour à la haute définition
        }

        showNotification('📶 Mode Haute Qualité rétabli.');
      }
    });
  }

  // 7. Bloc-notes Interactif avec Sauvegarde Locale
  function setupNotesPad() {
    if (!elements.notesInput) return;

    const storageKey = `lmdt_visio_notes_${formationId}`;
    const savedNotes = localStorage.getItem(storageKey);
    if (savedNotes) {
      elements.notesInput.value = savedNotes;
    }

    let saveTimeout = null;
    elements.notesInput.addEventListener('input', () => {
      if (elements.notesSavedIndicator) {
        elements.notesSavedIndicator.textContent = '⏳ Enregistrement...';
        elements.notesSavedIndicator.style.color = '#f59e0b';
      }

      clearTimeout(saveTimeout);
      saveTimeout = setTimeout(() => {
        localStorage.setItem(storageKey, elements.notesInput.value);
        if (elements.notesSavedIndicator) {
          elements.notesSavedIndicator.textContent = '✓ Enregistré';
          elements.notesSavedIndicator.style.color = '#10b981';
        }
      }, 500);
    });

    if (elements.btnDownloadNotes) {
      elements.btnDownloadNotes.addEventListener('click', () => {
        const text = elements.notesInput.value;
        if (!text.trim()) {
          alert('Votre bloc-notes est vide.');
          return;
        }

        const title = currentFormation?.title || 'formation';
        const filename = `notes_${title.toLowerCase().replace(/[^a-z0-9]+/g, '_')}_${new Date().toISOString().slice(0, 10)}.txt`;

        const blob = new Blob([
          `LE MONDE DU TRAVAIL — NOTES D'ATELIER\nFormation : ${title}\nDate : ${new Date().toLocaleString('fr-FR')}\n\n` + text
        ], { type: 'text/plain;charset=utf-8' });

        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      });
    }
  }

  // 8. Contrôle de la Sidebar
  function setupSidebarControls() {
    // Basculer l'ouverture/fermeture de la sidebar
    if (elements.btnToggleSidebar && elements.sidebar) {
      elements.btnToggleSidebar.addEventListener('click', () => {
        elements.sidebar.classList.toggle('collapsed');
      });
    }

    if (elements.btnCloseSidebar && elements.sidebar) {
      elements.btnCloseSidebar.addEventListener('click', () => {
        elements.sidebar.classList.add('collapsed');
      });
    }

    // Gestion des onglets de la sidebar
    const tabs = document.querySelectorAll('.sidebar-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const targetId = tab.getAttribute('data-tab');
        document.querySelectorAll('.sidebar-pane').forEach(pane => {
          pane.classList.remove('active');
        });
        const targetPane = document.getElementById(targetId);
        if (targetPane) targetPane.classList.add('active');
      });
    });
  }

  // Notification Toast légère
  function showNotification(msg) {
    const existing = document.getElementById('visioToast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'visioToast';
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      background: #0f172a;
      color: #f8fafc;
      padding: 10px 18px;
      border-radius: 9999px;
      font-size: 0.85rem;
      font-weight: 600;
      border: 1px solid rgba(255, 255, 255, 0.15);
      box-shadow: 0 10px 25px rgba(0,0,0,0.4);
      z-index: 1000;
      transition: all 0.3s ease;
    `;
    toast.textContent = msg;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

})();

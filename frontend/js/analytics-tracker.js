/**
 * ============================================================================
 * LE MONDE DU TRAVAIL — SERVICE DE TRACKING D'IMPACT D'ORIENTATION
 * Fichier : frontend/js/analytics-tracker.js
 * ============================================================================
 * 
 * PHILOSOPHIE D'IMPACT :
 * Contrairement aux outils d'audience traditionnels (qui comptabilisent de simples
 * "pages vues"), ce tracker mesure la transformation concrète du parcours de
 * l'utilisateur :
 *   1. Découverte d'un univers / métier (job_view, temps de lecture réel)
 *   2. Exploration des compétences & passerelles (tab_switch, cross_recommendation)
 *   3. Pivot d'action vers l'avenir : Clic vers les formations (job_to_training_click)
 *   4. Adhésion & Satisfaction réelle : Micro-sondages (survey_vote)
 * 
 * CARACTÉRISTIQUES TECHNIQUES :
 * - Zéro friction : Aucun compte requis pour suivre le parcours anonyme.
 * - Non-bloquant : Utilisation prioritaire de navigator.sendBeacon et fetch(keepalive).
 * - Profilage progressif : Association automatique du profil (Lycéen, Étudiant, etc.)
 *   à l'identifiant anonyme de session dès qu'il est renseigné.
 */

(function(window) {
  'use strict';

  // Clés de persistance locale
  const STORAGE_SESSION_ID = 'lmt_analytics_sid';
  const STORAGE_USER_PROFILE = 'lmt_user_profile';
  const STORAGE_SURVEY_VOTES = 'lmt_survey_votes';
  const STORAGE_BOOKMARKS = 'lmt_bookmarked_jobs';

  // Durée de validité du cookie de secours (1 an en secondes)
  const COOKIE_MAX_AGE_SEC = 365 * 24 * 60 * 60;

  /**
   * Obtient un cookie par son nom
   */
  function getCookie(name) {
    const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
    return match ? decodeURIComponent(match[3]) : null;
  }

  /**
   * Enregistre un cookie sécurisé
   */
  function setCookie(name, value, maxAgeSec) {
    try {
      const isHttps = window.location.protocol === 'https:';
      document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAgeSec}; SameSite=Lax${isHttps ? '; Secure' : ''}`;
    } catch (_) {}
  }

  /**
   * Génère un identifiant cryptographique ou pseudo-aléatoire unique de session anonyme.
   */
  function generateSessionId() {
    try {
      if (window.crypto && window.crypto.randomUUID) {
        return window.crypto.randomUUID();
      }
      if (window.crypto && window.crypto.getRandomValues) {
        const bytes = new Uint8Array(16);
        window.crypto.getRandomValues(bytes);
        return Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
      }
    } catch (_) {}
    return 'sid_' + Math.random().toString(36).substring(2, 12) + '_' + Date.now().toString(36);
  }

  /**
   * Classe singleton de gestion du tracking d'impact
   */
  class AnalyticsTrackerService {
    constructor() {
      this.apiUrl = this._resolveApiUrl();
      this.sessionId = this._initSessionId();
      this.userProfile = this._initUserProfile();
      this.profileListeners = [];
      this.eventQueue = [];
      this.flushTimer = null;
      this.isPageUnloading = false;

      this._initLifecycleEvents();
    }

    /**
     * Résout l'URL de base de l'API backend
     */
    _resolveApiUrl() {
      if (window.LMT_CONFIG && window.LMT_CONFIG.API_URL) return window.LMT_CONFIG.API_URL;
      if (window.AppConfig && window.AppConfig.API_BASE) return window.AppConfig.API_BASE;
      if (window.Api && window.Api.baseUrl) return window.Api.baseUrl;
      return '/api';
    }

    /**
     * Récupère ou initialise le session_id anonyme persistant
     */
    _initSessionId() {
      let sid = null;
      try {
        sid = localStorage.getItem(STORAGE_SESSION_ID);
      } catch (_) {}

      if (!sid) {
        sid = getCookie(STORAGE_SESSION_ID);
      }

      if (!sid) {
        sid = generateSessionId();
        try {
          localStorage.setItem(STORAGE_SESSION_ID, sid);
        } catch (_) {}
        setCookie(STORAGE_SESSION_ID, sid, COOKIE_MAX_AGE_SEC);
      }

      return sid;
    }

    /**
     * Récupère le profil utilisateur déjà récolté (s'il existe)
     */
    _initUserProfile() {
      try {
        return localStorage.getItem(STORAGE_USER_PROFILE) || getCookie(STORAGE_USER_PROFILE) || null;
      } catch (_) {
        return null;
      }
    }

    /**
     * Attache les écouteurs de cycle de vie (fermeture de page, flush de la queue)
     */
    _initLifecycleEvents() {
      const handleFlush = () => {
        this.isPageUnloading = true;
        this.flushQueue();
      };

      window.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
          this.flushQueue();
        }
      });
      window.addEventListener('pagehide', handleFlush);
      window.addEventListener('beforeunload', handleFlush);
    }

    /**
     * Renvoie le session_id actuel
     */
    getSessionId() {
      return this.sessionId;
    }

    /**
     * Renvoie le profil actuel (ex: 'Lycéen', 'Étudiant', 'Pro', 'Reconversion')
     */
    getUserProfile() {
      return this.userProfile;
    }

    /**
     * Définit le profil progressif de l'utilisateur, l'enregistre en local
     * et informe le backend pour qu'il le rattache à la session.
     */
    async setUserProfile(profile) {
      if (!profile) return false;
      const cleanProfile = String(profile).trim();
      if (!cleanProfile) return false;
      this.userProfile = cleanProfile;

      let saved = false;
      try {
        const token = window.Api?.getToken ? window.Api.getToken() : localStorage.getItem('accessToken');
        const headers = { 'Content-Type': 'application/json' };
        if (token) headers.Authorization = `Bearer ${token}`;
        const response = await fetch(`${this.apiUrl}/analytics/profile`, {
          method: 'POST',
          headers,
          body: JSON.stringify({ sessionId: this.sessionId, profile: cleanProfile }),
          keepalive: true,
        });
        saved = response.ok;
      } catch (_) {}

      if (!saved) return false;

      try {
        localStorage.setItem(STORAGE_USER_PROFILE, cleanProfile);
      } catch (_) {}
      setCookie(STORAGE_USER_PROFILE, cleanProfile, COOKIE_MAX_AGE_SEC);

      this.profileListeners.forEach(cb => {
        try { cb(cleanProfile); } catch (_) {}
      });

      // Événement d'audit analytique
      this.track('progressive_profile_set', 'profile', cleanProfile, {
        source: 'user_action',
        timestamp: new Date().toISOString(),
      });
      return true;
    }

    /**
     * Permet à un composant UI de réagir quand l'utilisateur renseigne son profil
     */
    onProfileChange(callback) {
      if (typeof callback === 'function') {
        this.profileListeners.push(callback);
      }
    }

    /**
     * Ingestion générique d'un événement d'impact
     * @param {string} eventType Type d'événement (ex: job_view, job_to_training_click)
     * @param {string} entityType Type d'entité ('job', 'training', 'resource', 'survey')
     * @param {string} entityId Slug ou ID de l'élément
     * @param {object} metadata Données contextuelles (onglets, durée, tags, etc.)
     */
    track(eventType, entityType = null, entityId = null, metadata = {}) {
      if (!eventType) return;

      const eventPayload = {
        sessionId: this.sessionId,
        userProfile: this.userProfile,
        eventType: String(eventType),
        entityType: entityType ? String(entityType) : null,
        entityId: entityId ? String(entityId) : null,
        metadata: {
          ...metadata,
          path: window.location.pathname || '/',
          device: (window.innerWidth <= 768 ? 'mobile' : window.innerWidth <= 1024 ? 'tablet' : 'desktop'),
          url: window.location.href,
          timestamp: new Date().toISOString(),
        },
      };

      // Si l'utilisateur est connecté, attacher le token pour corrélation
      const token = (window.Api && typeof window.Api.getToken === 'function') ? window.Api.getToken() : (localStorage.getItem('accessToken') || null);
      if (token) {
        eventPayload.hasAuth = true;
      }

      this.eventQueue.push(eventPayload);

      // Déclenche un envoi groupé sous 400ms pour éviter de multiplier les micro-requêtes
      if (!this.flushTimer && !this.isPageUnloading) {
        this.flushTimer = setTimeout(() => {
          this.flushTimer = null;
          this.flushQueue();
        }, 400);
      }
    }

    /**
     * Vide la file d'attente d'événements et expédie vers le backend
     */
    flushQueue() {
      if (this.eventQueue.length === 0) return;

      const eventsToSend = [...this.eventQueue];
      this.eventQueue = [];

      const endpoint = `${this.apiUrl}/analytics/events`;
      const payload = {
        events: eventsToSend,
      };

      this._sendPayload(endpoint, payload);
    }

    /**
     * Mécanisme de transport ultra-robuste et non-bloquant :
     * 1. navigator.sendBeacon si disponible (prioritaire pour garantir la livraison même lors de la fermeture)
     * 2. fetch() avec option keepalive: true
     */
    _sendPayload(url, data) {
      const jsonString = JSON.stringify(data);

      if (navigator.sendBeacon && typeof Blob !== 'undefined') {
        try {
          const blob = new Blob([jsonString], { type: 'application/json' });
          const success = navigator.sendBeacon(url, blob);
          if (success) return;
        } catch (_) {}
      }

      // Fallback via Fetch non-bloquant
      try {
        const token = (window.Api && typeof window.Api.getToken === 'function') ? window.Api.getToken() : (localStorage.getItem('accessToken') || null);
        const headers = { 'Content-Type': 'application/json' };
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }

        fetch(url, {
          method: 'POST',
          headers,
          body: jsonString,
          keepalive: true,
          mode: 'cors',
        }).catch(() => {
          // Échec silencieux délibéré : le tracking ne doit jamais perturber l'expérience utilisateur
        });
      } catch (_) {}
    }

    // ========================================================================
    // HELPERS SPÉCIFIQUES POUR LA PHILOSOPHIE D'IMPACT D'ORIENTATION
    // ========================================================================

    /**
     * Enregistre la consultation d'une fiche métier avec son niveau et son domaine
     */
    trackJobView(jobSlug, metadata = {}) {
      this.track('job_view', 'job', jobSlug, metadata);
    }

    /**
     * Enregistre LE point de pivot fondamental : l'utilisateur passe de la théorie
     * (fiche métier) à la pratique concrète (formation vers laquelle s'orienter).
     */
    trackJobToTraining(jobSlug, trainingInfo, metadata = {}) {
      this.track('job_to_training_click', 'job', jobSlug, {
        targetTraining: trainingInfo,
        ...metadata,
      });
    }

    /**
     * Enregistre la consultation d'une fiche formation
     */
    trackTrainingView(trainingIdOrSlug, metadata = {}) {
      this.track('training_view', 'training', trainingIdOrSlug, metadata);
    }

    /**
     * Enregistre un vote de satisfaction au micro-sondage avec ses tags qualitatifs
     * @param {string} entityType 'job' ou 'training'
     * @param {string} entityId slug du métier ou id de la formation
     * @param {string} vote 'up' (👍), 'neutral' (😐), 'down' (👎)
     * @param {Array<string>} tags Tags sélectionnés (ex: ['salaire', 'etudes'])
     * @param {string} feedbackCommentaire texte facultatif
     */
    trackSurveyVote(entityType, entityId, vote, tags = [], feedback = '') {
      // Mémorisation locale pour ne pas reposer la question sur la même fiche
      try {
        const votes = JSON.parse(localStorage.getItem(STORAGE_SURVEY_VOTES) || '{}');
        votes[`${entityType}_${entityId}`] = { vote, tags, date: Date.now() };
        localStorage.setItem(STORAGE_SURVEY_VOTES, JSON.stringify(votes));
      } catch (_) {}

      this.track('survey_vote', entityType, entityId, {
        vote,
        rating: vote,
        tags,
        feedback: feedback ? String(feedback).substring(0, 500) : null,
      });
    }

    /**
     * Vérifie si l'utilisateur a déjà voté au micro-sondage pour cette entité
     */
    hasVotedSurvey(entityType, entityId) {
      try {
        const votes = JSON.parse(localStorage.getItem(STORAGE_SURVEY_VOTES) || '{}');
        return Boolean(votes[`${entityType}_${entityId}`]);
      } catch (_) {
        return false;
      }
    }

    /**
     * Enregistre le clic sur un métier suggéré dans "Ceux qui s'intéressent à ce métier explorent aussi..."
     */
    trackCrossRecommendation(sourceJobSlug, targetJobSlug, metadata = {}) {
      this.track('cross_recommendation_click', 'job', sourceJobSlug, {
        targetJob: targetJobSlug,
        ...metadata,
      });
    }

    /**
     * Enregistre l'ajout d'une fiche aux favoris
     */
    trackBookmark(jobSlug, isBookmarked = true) {
      this.track(isBookmarked ? 'bookmark_add' : 'bookmark_remove', 'job', jobSlug, {
        isBookmarked,
      });
    }

    /**
     * Enregistre un clic sortant vers le site web d'une école ou université
     */
    trackOutboundSchool(jobOrTrainingSlug, schoolName, externalUrl) {
      this.track('outbound_school_click', 'resource', schoolName, {
        fromEntity: jobOrTrainingSlug,
        externalUrl,
      });
    }
  }

  // Initialisation du Singleton
  const trackerInstance = new AnalyticsTrackerService();
  window.AnalyticsTracker = trackerInstance;

  // Exposition sous forme de "hook" pour les architectures modulaires (React / SPA)
  window.useAnalytics = function() {
    return {
      tracker: trackerInstance,
      sessionId: trackerInstance.getSessionId(),
      userProfile: trackerInstance.getUserProfile(),
      setUserProfile: (prof) => trackerInstance.setUserProfile(prof),
      track: (type, entityType, entityId, meta) => trackerInstance.track(type, entityType, entityId, meta),
      trackJobView: (slug, meta) => trackerInstance.trackJobView(slug, meta),
      trackJobToTraining: (slug, train, meta) => trackerInstance.trackJobToTraining(slug, train, meta),
      trackTrainingView: (id, meta) => trackerInstance.trackTrainingView(id, meta),
      trackSurveyVote: (type, id, vote, tags, text) => trackerInstance.trackSurveyVote(type, id, vote, tags, text),
      hasVotedSurvey: (type, id) => trackerInstance.hasVotedSurvey(type, id),
      trackCrossRecommendation: (from, to, meta) => trackerInstance.trackCrossRecommendation(from, to, meta),
      trackBookmark: (slug, isBookmarked) => trackerInstance.trackBookmark(slug, isBookmarked),
    };
  };

})(window);

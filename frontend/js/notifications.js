/**
 * Le Monde du Travail - Système de Notifications Push Natives & In-App
 * Gère le Service Worker, l'abonnement Push (VAPID), la cloche interactive et le son chime.
 */

(function () {
  'use strict';

  const API_BASE = (window.AppConfig && window.AppConfig.API_BASE)
    ? window.AppConfig.API_BASE
    : ((window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:')
        ? 'http://localhost:5000/api'
        : '/api');

  const TYPE_ICONS = {
    FORMATION: { icon: '🎓', label: 'Formation', color: '#16a34a', bg: '#f0fdf4' },
    JOB: { icon: '💼', label: 'Métier & Orientation', color: '#0284c7', bg: '#f0f9ff' },
    BLOG: { icon: '📝', label: 'Blog', color: '#d97706', bg: '#fffbeb' },
    FORUM: { icon: '💬', label: 'Forum', color: '#7c3aed', bg: '#faf5ff' },
    MEMBERSHIP: { icon: '🎉', label: 'Adhésion', color: '#2563eb', bg: '#eff6ff' },
    ANNOUNCEMENT: { icon: '🏛️', label: 'Bureau & Club', color: '#b91c1c', bg: '#fef2f2' },
    SYSTEM: { icon: '⚡', label: 'Système', color: '#4b5563', bg: '#f3f4f6' },
  };

  let swRegistration = null;
  let unreadCount = 0;
  let cachedNotifications = [];
  let pollInterval = null;
  let isDropdownOpen = false;

  // Conversion clé VAPID base64 en Uint8Array pour le pushManager
  function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  function getAuthHeader() {
    const token = localStorage.getItem('accessToken') || localStorage.getItem('adminAccessToken');
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  // Carillon audio moderne haute fidélité généré via Web Audio API
  function playNotificationChime() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      // Double note harmonieuse (D5 587.33Hz + A5 880Hz) style messagerie mobile
      const now = ctx.currentTime;

      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(587.33, now);
      osc1.frequency.exponentialRampToValueAtTime(880, now + 0.12);

      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(880, now + 0.08);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.exponentialRampToValueAtTime(0.18, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);

      osc1.start(now);
      osc2.start(now + 0.08);
      osc1.stop(now + 0.35);
      osc2.stop(now + 0.35);
    } catch (_) {
      // Ignorer si la politique audio du navigateur bloque
    }
  }

  function formatRelativeTime(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now - date;
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHours = Math.floor(diffMin / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffSec < 60) return 'À l\'instant';
    if (diffMin < 60) return `Il y a ${diffMin} min`;
    if (diffHours < 24) return `Il y a ${diffHours} h`;
    if (diffDays === 1) return 'Hier';
    if (diffDays < 7) return `Il y a ${diffDays} j`;
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
  }

  // ================= ENREGISTREMENT SERVICE WORKER & PUSH =================
  async function initServiceWorker() {
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
      return null;
    }

    try {
      const registration = await navigator.serviceWorker.register('/sw.js', { scope: '/' });
      swRegistration = registration;
      console.log('[Push] Service Worker enregistré avec succès:', registration.scope);

      // Si déjà autorisé, vérifier l'abonnement
      if (Notification.permission === 'granted') {
        syncPushSubscription();
      } else if (Notification.permission === 'default') {
        // Afficher l'invitation engageante après quelques secondes de navigation
        setTimeout(showPushBannerPrompt, 3500);
      }
      return registration;
    } catch (err) {
      console.warn('[Push] Erreur enregistrement SW:', err);
      return null;
    }
  }

  async function syncPushSubscription() {
    if (!swRegistration) return;
    try {
      let subscription = await swRegistration.pushManager.getSubscription();

      // Si pas encore abonné, tenter l'inscription
      if (!subscription) {
        const vapidRes = await fetch(`${API_BASE}/notifications/vapid-key`);
        const vapidData = await vapidRes.json();
        const publicKey = vapidData?.data?.publicKey;

        if (!publicKey) return;

        subscription = await swRegistration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(publicKey),
        });
      }

      if (subscription) {
        const subJson = subscription.toJSON();
        await fetch(`${API_BASE}/notifications/subscribe`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader(),
          },
          body: JSON.stringify({
            endpoint: subJson.endpoint,
            keys: subJson.keys,
            userAgent: navigator.userAgent,
          }),
        });
        console.log('[Push] Abonnement synchronisé avec le serveur');
      }
    } catch (err) {
      console.warn('[Push] Erreur synchronisation abonnement:', err);
    }
  }

  async function requestPushPermission() {
    if (!('Notification' in window)) {
      alert('Votre navigateur ne prend pas en charge les notifications push.');
      return false;
    }

    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        await syncPushSubscription();
        hidePushBannerPrompt();
        playNotificationChime();
        showNotificationToast('Notifications activées ! Vous serez alerté dès qu\'un nouvel événement est publié.', 'success');
        return true;
      } else {
        hidePushBannerPrompt();
        return false;
      }
    } catch (err) {
      console.warn('[Push] Erreur demande permission:', err);
      return false;
    }
  }

  // ================= BANNIÈRE / MODALE D'INVITATION PUSH =================
  function showPushBannerPrompt() {
    if (localStorage.getItem('lmt_push_prompt_dismissed')) return;
    if (document.getElementById('lmt-push-prompt')) return;
    if (Notification.permission !== 'default') return;

    const banner = document.createElement('div');
    banner.id = 'lmt-push-prompt';
    banner.className = 'lmt-push-prompt';
    banner.innerHTML = `
      <div class="lmt-push-content">
        <div class="lmt-push-icon">🔔</div>
        <div class="lmt-push-text">
          <strong>Ne manquez rien du club !</strong>
          <p>Activez les alertes instantanées pour les nouvelles formations, opportunités métiers et articles de blog.</p>
        </div>
      </div>
      <div class="lmt-push-actions">
        <button type="button" class="btn btn-primary btn-sm" id="lmt-push-enable-btn">Activer les alertes</button>
        <button type="button" class="btn btn-ghost btn-sm" id="lmt-push-later-btn">Plus tard</button>
      </div>
    `;

    document.body.appendChild(banner);

    // Animation d'entrée
    setTimeout(() => banner.classList.add('visible'), 50);

    document.getElementById('lmt-push-enable-btn')?.addEventListener('click', () => {
      requestPushPermission();
    });

    document.getElementById('lmt-push-later-btn')?.addEventListener('click', () => {
      hidePushBannerPrompt();
      localStorage.setItem('lmt_push_prompt_dismissed', Date.now());
    });
  }

  function hidePushBannerPrompt() {
    const banner = document.getElementById('lmt-push-prompt');
    if (banner) {
      banner.classList.remove('visible');
      setTimeout(() => banner.remove(), 300);
    }
  }

  // ================= CENTRE DE NOTIFICATIONS IN-APP =================
  async function fetchNotifications() {
    try {
      const res = await fetch(`${API_BASE}/notifications?limit=15`, {
        headers: getAuthHeader(),
      });
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        const previousUnread = unreadCount;
        cachedNotifications = data.data;
        unreadCount = data.pagination?.unreadCount ?? data.data.filter(n => !n.isRead).length;

        updateBellBadge();
        if (isDropdownOpen) {
          renderNotificationsList();
        }

        // Si le nombre de non-lus a augmenté pendant que la page était active, jouer le carillon
        if (unreadCount > previousUnread && previousUnread >= 0 && document.visibilityState === 'visible') {
          playNotificationChime();
          triggerBellAnimation();
        }
      }
    } catch (_) {
      // Échec silencieux
    }
  }

  function updateBellBadge() {
    const badge = document.getElementById('notification-badge');
    const bellBtn = document.getElementById('notificationBellBtn');
    if (!badge || !bellBtn) return;

    if (unreadCount > 0) {
      badge.textContent = unreadCount > 99 ? '99+' : unreadCount;
      badge.style.display = 'flex';
      bellBtn.setAttribute('aria-label', `${unreadCount} notifications non lues`);
    } else {
      badge.style.display = 'none';
      bellBtn.setAttribute('aria-label', 'Aucune nouvelle notification');
    }
  }

  function triggerBellAnimation() {
    const bellBtn = document.getElementById('notificationBellBtn');
    if (bellBtn) {
      bellBtn.classList.remove('bell-ring');
      void bellBtn.offsetWidth; // Trigger reflow
      bellBtn.classList.add('bell-ring');
    }
  }

  function renderNotificationsList() {
    const container = document.getElementById('notification-list-body');
    if (!container) return;

    if (cachedNotifications.length === 0) {
      container.innerHTML = `
        <div class="notif-empty">
          <div class="notif-empty-icon">✨</div>
          <p>Aucune notification pour le moment.</p>
          <span>Vous serez averti dès qu'un nouvel événement est publié !</span>
        </div>
      `;
      return;
    }

    container.innerHTML = cachedNotifications.map(notif => {
      const meta = TYPE_ICONS[notif.type] || TYPE_ICONS.SYSTEM;
      const unreadClass = notif.isRead ? '' : 'is-unread';
      const safeTitle = escapeHtml(notif.title);
      const safeMsg = escapeHtml(notif.message);
      const relTime = formatRelativeTime(notif.createdAt);

      return `
        <div class="notif-item ${unreadClass}" data-id="${notif.id}" data-url="${notif.url || ''}">
          <div class="notif-item-icon" style="background:${meta.bg};color:${meta.color};">
            ${meta.icon}
          </div>
          <div class="notif-item-content">
            <div class="notif-item-header">
              <span class="notif-item-badge" style="color:${meta.color};">${meta.label}</span>
              <span class="notif-item-time">${relTime}</span>
            </div>
            <h4 class="notif-item-title">${safeTitle}</h4>
            <p class="notif-item-desc">${safeMsg}</p>
          </div>
          ${!notif.isRead ? '<span class="notif-unread-dot" title="Non lu"></span>' : ''}
        </div>
      `;
    }).join('');

    // Événements de clic sur chaque notification
    container.querySelectorAll('.notif-item').forEach(item => {
      item.addEventListener('click', async (e) => {
        const notifId = item.getAttribute('data-id');
        const targetUrl = item.getAttribute('data-url');

        // Marquer comme lu
        markSingleAsRead(notifId);

        // Fermer le dropdown
        toggleDropdown(false);

        // Navigation
        if (targetUrl && targetUrl !== '#' && targetUrl !== '/') {
          window.location.href = targetUrl;
        }
      });
    });
  }

  async function markSingleAsRead(id) {
    try {
      await fetch(`${API_BASE}/notifications/${id}/read`, {
        method: 'PATCH',
        headers: getAuthHeader(),
      });
      const notif = cachedNotifications.find(n => n.id === id);
      if (notif && !notif.isRead) {
        notif.isRead = true;
        unreadCount = Math.max(0, unreadCount - 1);
        updateBellBadge();
      }
    } catch (_) {}
  }

  async function markAllAsRead() {
    try {
      await fetch(`${API_BASE}/notifications/read-all`, {
        method: 'PATCH',
        headers: getAuthHeader(),
      });
      cachedNotifications.forEach(n => { n.isRead = true; });
      unreadCount = 0;
      updateBellBadge();
      renderNotificationsList();
    } catch (_) {}
  }

  function toggleDropdown(forceState = null) {
    const dropdown = document.getElementById('notification-dropdown');
    if (!dropdown) return;

    isDropdownOpen = (forceState !== null) ? forceState : !isDropdownOpen;

    if (isDropdownOpen) {
      dropdown.classList.add('open');
      dropdown.setAttribute('aria-hidden', 'false');
      renderNotificationsList();
      fetchNotifications();
    } else {
      dropdown.classList.remove('open');
      dropdown.setAttribute('aria-hidden', 'true');
    }
  }

  // ================= INJECTION DU COMPOSANT CLOCHE DANS LE HEADER =================
  function injectBellUI() {
    const headerActions = document.querySelector('.header-actions');
    if (!headerActions || document.getElementById('notification-bell-container')) return;

    const bellContainer = document.createElement('div');
    bellContainer.id = 'notification-bell-container';
    bellContainer.className = 'notification-bell-container';

    bellContainer.innerHTML = `
      <button type="button" class="notification-bell-btn" id="notificationBellBtn" aria-label="Notifications" title="Notifications">
        <span class="bell-icon">🔔</span>
        <span class="notification-badge" id="notification-badge" style="display:none;">0</span>
      </button>

      <div class="notification-dropdown" id="notification-dropdown" aria-hidden="true">
        <div class="notif-dropdown-header">
          <div class="notif-header-title">
            <h3>Notifications</h3>
            <span class="notif-header-pulse"></span>
          </div>
          <button type="button" class="notif-mark-all-btn" id="notifMarkAllReadBtn">Tout marquer comme lu</button>
        </div>

        <div class="notification-list-body" id="notification-list-body">
          <div class="notif-loading">Chargement des notifications...</div>
        </div>

        <div class="notif-dropdown-footer">
          <button type="button" class="notif-push-settings-btn" id="notifEnablePushBtn">
            <span>📲</span> Activer les alertes sur mon téléphone / PC
          </button>
        </div>
      </div>
    `;

    // Insérer avant le premier bouton ou au début de header-actions
    headerActions.insertBefore(bellContainer, headerActions.firstChild);

    // Événements
    document.getElementById('notificationBellBtn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleDropdown();
    });

    document.getElementById('notifMarkAllReadBtn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      markAllAsRead();
    });

    document.getElementById('notifEnablePushBtn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      requestPushPermission();
    });

    // Fermeture au clic à l'extérieur
    document.addEventListener('click', (e) => {
      if (isDropdownOpen && !bellContainer.contains(e.target)) {
        toggleDropdown(false);
      }
    });

    // Touche Echap
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isDropdownOpen) {
        toggleDropdown(false);
      }
    });

    fetchNotifications();
  }

  function showNotificationToast(msg, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `lmt-toast lmt-toast-${type}`;
    toast.innerHTML = `<span>✓</span> <span>${escapeHtml(msg)}</span>`;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
      }, 3500);
    }, 50);
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

  // ================= INITIALISATION =================
  function init() {
    injectBellUI();
    initServiceWorker();

    document.addEventListener('layout:loaded', () => {
      injectBellUI();
    });

    // Polling toutes les 45 secondes pour les nouvelles notifications quand l'onglet est actif
    if (pollInterval) clearInterval(pollInterval);
    pollInterval = setInterval(() => {
      if (document.visibilityState === 'visible') {
        fetchNotifications();
      }
    }, 45000);

    // Rafraîchir dès que l'onglet redevient visible
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        fetchNotifications();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.LMTNotifications = {
    fetch: fetchNotifications,
    requestPush: requestPushPermission,
    playChime: playNotificationChime,
    markAllAsRead,
  };
})();

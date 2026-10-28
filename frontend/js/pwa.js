/**
 * Application installable (PWA) : enregistre le service worker pour tous les visiteurs
 * (pages déjà consultées lisibles hors connexion) et propose l'installation sur l'écran d'accueil.
 * Android / ordinateur : invitation native ; iPhone : mode d'emploi « Partager → Sur l'écran d'accueil ».
 */
(function () {
  'use strict';

  const SNOOZE_KEY = 'lmdt_pwa_snooze_until';
  const VIEWS_KEY = 'lmdt_pwa_views';
  const SNOOZE_DAYS = 30;
  // Le site local de développement sert les pages sous /frontend/
  const SW_URL = location.pathname.startsWith('/frontend/') ? '/frontend/sw.js' : '/sw.js';
  const SW_SCOPE = location.pathname.startsWith('/frontend/') ? '/frontend/' : '/';

  const store = {
    get(key) { try { return localStorage.getItem(key); } catch (_) { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch (_) { /* stockage indisponible */ } },
  };
  const track = (type, meta) => { try { window.AnalyticsTracker?.track?.(type, 'pwa', 'app', meta || {}); } catch (_) { /* suivi facultatif */ } };

  const isStandalone = () => window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  const isIos = () => /iphone|ipad|ipod/i.test(navigator.userAgent) && !/crios|fxios/i.test(navigator.userAgent);
  const snoozed = () => Number(store.get(SNOOZE_KEY) || 0) > Date.now();

  function register() {
    if (!('serviceWorker' in navigator)) return Promise.resolve(null);
    return navigator.serviceWorker.register(SW_URL, { scope: SW_SCOPE }).catch(() => null);
  }

  let deferredPrompt = null;

  function injectStyles() {
    if (document.getElementById('pwaStyles')) return;
    const style = document.createElement('style');
    style.id = 'pwaStyles';
    style.textContent = `
      .pwa-banner { --pwa-bg: #ffffff; --pwa-ink: #0f172a; --pwa-ink-2: #475569; --pwa-border: #e2e8f0;
        position: fixed; z-index: 9000; left: 16px; right: 16px; bottom: 16px; max-width: 420px; margin: 0 auto;
        display: flex; gap: 0.85rem; align-items: flex-start; padding: 0.9rem 1rem; border-radius: 16px;
        background: var(--pwa-bg); color: var(--pwa-ink); border: 1px solid var(--pwa-border);
        box-shadow: 0 18px 40px rgba(15, 23, 42, 0.22); font-family: 'Inter', 'Segoe UI', sans-serif;
        animation: pwa-in 0.35s ease-out; }
      [data-theme="dark"] .pwa-banner { --pwa-bg: #111827; --pwa-ink: #f1f5f9; --pwa-ink-2: #cbd5e1; --pwa-border: #1f2a3c; }
      @media (min-width: 768px) { .pwa-banner { left: 24px; right: auto; margin: 0; } }
      @keyframes pwa-in { from { transform: translateY(20px); opacity: 0; } to { transform: none; opacity: 1; } }
      @media (prefers-reduced-motion: reduce) { .pwa-banner { animation: none; } }
      .pwa-banner img { width: 48px; height: 48px; border-radius: 12px; flex: none; border: 1px solid var(--pwa-border); background: #fff; }
      .pwa-banner strong { display: block; font-size: 0.98rem; margin-bottom: 0.2rem; }
      .pwa-banner p { margin: 0 0 0.65rem; font-size: 0.86rem; line-height: 1.5; color: var(--pwa-ink-2); }
      .pwa-banner-actions { display: flex; gap: 0.5rem; flex-wrap: wrap; }
      .pwa-banner button { font: inherit; font-size: 0.88rem; font-weight: 700; border-radius: 10px; padding: 0.55rem 1rem; cursor: pointer; border: 1px solid var(--pwa-border); background: transparent; color: var(--pwa-ink); }
      .pwa-banner button.pwa-primary { background: #f5a623; border-color: #f5a623; color: #0f172a; }
      .pwa-banner button:focus-visible { outline: 3px solid #2a78d6; outline-offset: 2px; }`;
    document.head.appendChild(style);
  }

  function closeBanner(banner, snooze) {
    if (snooze) store.set(SNOOZE_KEY, String(Date.now() + SNOOZE_DAYS * 86400000));
    banner.remove();
  }

  // Une seule invitation à la fois : on attend la fermeture du questionnaire ou de l'invitation aux notifications
  const otherPromptOpen = () => Boolean(document.querySelector('.progressive-profile-banner.visible, #lmt-push-prompt'));

  function showBanner(mode, attempt = 0) {
    if (document.getElementById('pwaBanner') || isStandalone() || snoozed()) return;
    if (otherPromptOpen()) {
      if (attempt < 40) setTimeout(() => showBanner(mode, attempt + 1), 5000);
      return;
    }
    injectStyles();
    const banner = document.createElement('div');
    banner.id = 'pwaBanner';
    banner.className = 'pwa-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', "Installer l'application");
    const ios = mode === 'ios';
    banner.innerHTML = `
      <img src="/images/app/icon-192.png" alt="" width="48" height="48">
      <div>
        <strong>📲 Installe l'application</strong>
        <p>${ios
          ? 'Touche <b>Partager</b> <span aria-hidden="true">⎋</span> en bas de Safari, puis <b>« Sur l\'écran d\'accueil »</b>. Le Monde du Travail s\'ouvrira comme une application.'
          : 'Accès en un geste depuis ton écran d\'accueil, et les pages déjà consultées restent lisibles sans connexion.'}</p>
        <div class="pwa-banner-actions">
          ${ios ? '' : '<button type="button" class="pwa-primary" data-pwa="install">Installer</button>'}
          <button type="button" data-pwa="later">${ios ? "J'ai compris" : 'Plus tard'}</button>
        </div>
      </div>`;
    banner.addEventListener('click', async (event) => {
      const action = event.target.closest('[data-pwa]')?.dataset.pwa;
      if (action === 'later') { closeBanner(banner, true); track('pwa_dismiss', { mode }); }
      if (action === 'install' && deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice.catch(() => ({ outcome: 'dismissed' }));
        deferredPrompt = null;
        closeBanner(banner, outcome !== 'accepted');
        track(outcome === 'accepted' ? 'pwa_install' : 'pwa_dismiss', { mode });
      }
    });
    document.body.appendChild(banner);
    track('pwa_prompt', { mode });
  }

  // Invitation seulement à partir de la 2e page vue, après un court moment de lecture
  const views = Number(store.get(VIEWS_KEY) || 0) + 1;
  store.set(VIEWS_KEY, String(views));
  const ready = views >= 2;

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    if (ready) setTimeout(() => deferredPrompt && showBanner('native'), 8000);
  });
  window.addEventListener('appinstalled', () => {
    document.getElementById('pwaBanner')?.remove();
    track('pwa_installed');
  });

  function start() {
    register();
    if (ready && isIos() && !isStandalone()) setTimeout(() => showBanner('ios'), 8000);
  }

  window.WowPwa = { register, swUrl: SW_URL, swScope: SW_SCOPE, isStandalone };
  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start, { once: true });
})();

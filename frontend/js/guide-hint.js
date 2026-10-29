/**
 * Faire connaître le guide d'utilisation (guide.html) :
 * - bouton « ? Guide » dans l'en-tête de chaque page, qui ouvre la partie du guide liée à la page ;
 * - lien dans le menu mobile ;
 * - bandeau de bienvenue lors des premières visites, jusqu'à ce qu'il soit fermé ou le guide ouvert.
 * Invitation au compte gratuit pour les visiteurs fidèles sans compte (3 jours de visite ou 8 pages) :
 * une seule invitation par visite, jamais en même temps que le bandeau du guide, 14 jours de pause si fermée.
 */
(function () {
  'use strict';

  const SEEN_KEY = 'lmdt_guide_seen';
  const DAYS_KEY = 'lmdt_visit_days';
  const PAGES_KEY = 'lmdt_visit_pages';
  const NUDGE_SNOOZE_KEY = 'lmdt_account_nudge_until';
  const NUDGE_SESSION_KEY = 'lmdt_account_nudge_shown';
  const NUDGE_QUIET_PAGES = ['login', 'connexion', 'adhesion', 'reset-password', 'guide', 'legal', 'forum-create', 'profile'];
  const VIEWS_KEY = 'lmdt_guide_hint_views';
  const MAX_VIEWS = 5;

  // Partie du guide correspondant à la page consultée
  const SECTIONS = {
    'job': 'orientation', 'job-detail': 'orientation', 'metiers': 'orientation', 'orientation': 'orientation',
    'test-riasec': 'riasec', 'test-orientation': 'riasec',
    'opportunites': 'opportunites', 'opportunite': 'opportunites',
    'formations': 'formations', 'formation-detail': 'formations',
    'forum': 'forum', 'forum-topic': 'forum', 'forum-create': 'forum',
    'profile': 'mon-espace', 'bureau': 'bureau', 'mentor': 'mentor', 'visio': 'visio',
    'login': 'compte', 'connexion': 'compte', 'adhesion': 'compte', 'reset-password': 'compte',
    'blog': 'blog', 'blog-post': 'blog',
  };

  const store = {
    get(key) { try { return localStorage.getItem(key); } catch (_) { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch (_) { /* stockage indisponible */ } },
  };
  const page = (location.pathname.split('/').pop() || 'index').replace(/\.html$/, '') || 'index';
  const guideUrl = `guide.html${SECTIONS[page] ? `#${SECTIONS[page]}` : '#par-ou-commencer'}`;
  const markSeen = () => store.set(SEEN_KEY, '1');

  function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .guide-help-btn { display: inline-flex; align-items: center; gap: 0.35rem; height: 38px; padding: 0 0.8rem; border-radius: 999px;
        background: rgba(15, 23, 42, 0.05); border: 1px solid rgba(15, 23, 42, 0.14); color: var(--color-gray-800, #1e293b);
        font-weight: 700; font-size: 0.88rem; text-decoration: none; white-space: nowrap; transition: background 0.2s, border-color 0.2s; }
      .guide-help-btn:hover, .guide-help-btn:focus-visible { background: rgba(245, 166, 35, 0.15); border-color: #f5a623; }
      .guide-help-btn .guide-help-q { display: inline-flex; align-items: center; justify-content: center; width: 20px; height: 20px; border-radius: 50%;
        background: #f5a623; color: #0f172a; font-size: 0.8rem; }
      [data-theme="dark"] .guide-help-btn { background: rgba(255, 255, 255, 0.08); border-color: rgba(255, 255, 255, 0.18); color: #f1f5f9; }
      @media (max-width: 640px) { .guide-help-btn { width: 38px; padding: 0; justify-content: center; } .guide-help-btn .guide-help-label { display: none; } }
      /* Téléphone : le nom du site ne doit pas être coupé. Le thème reste dans le menu (☰ › Mode sombre). */
      @media (max-width: 480px) {
        .header-actions #headerThemeToggleBtn { display: none !important; }
        .guide-help-btn { width: 34px; height: 34px; }
        .guide-help-btn .guide-help-q { width: 18px; height: 18px; font-size: 0.75rem; }
      }
      .guide-mobile-link { display: block; margin-bottom: 0.75rem; padding: 0.75rem 1rem; border-radius: 12px; text-align: center; font-weight: 700;
        text-decoration: none; color: inherit; border: 1px solid rgba(245, 166, 35, 0.5); background: rgba(245, 166, 35, 0.1); }
      .guide-welcome { --gw-bg: #fffbeb; --gw-ink: #78350f; --gw-border: #fde68a;
        display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; max-width: 1200px; margin: 0.75rem auto; padding: 0.7rem 1rem;
        border-radius: 12px; background: var(--gw-bg); color: var(--gw-ink); border: 1px solid var(--gw-border); font-size: 0.92rem; line-height: 1.5; }
      [data-theme="dark"] .guide-welcome { --gw-bg: #2a2110; --gw-ink: #fde68a; --gw-border: #5b4614; }
      .guide-welcome p { margin: 0; flex: 1 1 260px; }
      .guide-welcome a { font-weight: 700; color: inherit; }
      .guide-welcome .guide-welcome-go { display: inline-block; padding: 0.45rem 0.9rem; border-radius: 999px; background: #f5a623; color: #0f172a; text-decoration: none; }
      .account-nudge { --gw-bg: #eff6ff; --gw-ink: #1e3a8a; --gw-border: #bfdbfe; }
      [data-theme="dark"] .account-nudge { --gw-bg: #0f1f3a; --gw-ink: #bfdbfe; --gw-border: #1e3a8a; }
      .guide-welcome button { font: inherit; background: none; border: 0; color: inherit; cursor: pointer; font-size: 1.2rem; line-height: 1; padding: 0.25rem 0.4rem; }
      @media (max-width: 640px) { .guide-welcome { margin: 0.5rem 16px; } }
      @media print { .guide-help-btn, .guide-welcome, .guide-mobile-link { display: none !important; } }`;
    document.head.appendChild(style);
  }

  function addHeaderButton() {
    const actions = document.querySelector('.header-actions');
    if (!actions || actions.querySelector('.guide-help-btn')) return;
    const link = document.createElement('a');
    link.className = 'guide-help-btn';
    link.href = guideUrl;
    link.title = "Guide d'utilisation : comment profiter du site";
    link.setAttribute('aria-label', "Guide d'utilisation");
    link.innerHTML = '<span class="guide-help-q" aria-hidden="true">?</span><span class="guide-help-label">Guide</span>';
    link.addEventListener('click', markSeen);
    actions.insertBefore(link, actions.firstChild);
  }

  function addMobileLink() {
    const footer = document.getElementById('mobileNavFooter');
    if (!footer || footer.querySelector('.guide-mobile-link')) return;
    const link = document.createElement('a');
    link.className = 'guide-mobile-link';
    link.href = guideUrl;
    link.textContent = "📘 Guide d'utilisation du site";
    link.addEventListener('click', markSeen);
    footer.insertBefore(link, footer.firstChild);
  }

  function addWelcome() {
    if (page === 'guide' || store.get(SEEN_KEY)) return false;
    const views = Number(store.get(VIEWS_KEY) || 0) + 1;
    store.set(VIEWS_KEY, String(views));
    if (views > MAX_VIEWS) return false;
    const main = document.querySelector('main');
    if (!main) return false;
    const box = document.createElement('div');
    box.className = 'guide-welcome';
    box.setAttribute('role', 'note');
    box.innerHTML = `
      <p>👋 <strong>Première visite ?</strong> Le guide t'explique en quelques minutes comment t'orienter, trouver un concours, suivre une formation ou poser une question au forum.</p>
      <a class="guide-welcome-go" href="${guideUrl}">📘 Lire le guide</a>
      <button type="button" aria-label="Fermer ce message" title="Fermer">&times;</button>`;
    box.querySelector('a').addEventListener('click', markSeen);
    box.querySelector('button').addEventListener('click', () => { markSeen(); box.remove(); });
    main.insertBefore(box, main.firstChild);
    return true;
  }

  const track = (type, meta) => { try { window.AnalyticsTracker?.track?.(type, 'account', 'nudge', meta || {}); } catch (_) { /* suivi facultatif */ } };

  // Fidélité du visiteur : jours de visite distincts et pages vues (sur cet appareil)
  function recordVisit() {
    let days = [];
    try { days = JSON.parse(store.get(DAYS_KEY) || '[]'); } catch (_) { days = []; }
    const today = new Date().toISOString().slice(0, 10);
    if (!days.includes(today)) days = [...days, today].slice(-10);
    store.set(DAYS_KEY, JSON.stringify(days));
    const pages = Number(store.get(PAGES_KEY) || 0) + 1;
    store.set(PAGES_KEY, String(pages));
    return { days: days.length, pages };
  }

  function addAccountNudge(visit, welcomeShown) {
    const loggedIn = Boolean(store.get('accessToken') || store.get('adminAccessToken'));
    if (loggedIn || welcomeShown || NUDGE_QUIET_PAGES.includes(page)) return;
    if (Number(store.get(NUDGE_SNOOZE_KEY) || 0) > Date.now()) return;
    try { if (sessionStorage.getItem(NUDGE_SESSION_KEY)) return; } catch (_) { /* stockage indisponible */ }
    if (visit.days < 3 && visit.pages < 8) return;
    const main = document.querySelector('main');
    if (!main) return;
    try { sessionStorage.setItem(NUDGE_SESSION_KEY, '1'); } catch (_) { /* stockage indisponible */ }
    const back = encodeURIComponent(`${location.pathname.split('/').pop() || 'index.html'}${location.search}`);
    const box = document.createElement('div');
    box.className = 'guide-welcome account-nudge';
    box.setAttribute('role', 'note');
    box.innerHTML = `
      <p>👋 <strong>Content de te revoir !</strong> Avec un compte gratuit, tu retrouves tes favoris et ton profil RIASEC sur tous tes appareils, et tu peux poser tes questions au forum.</p>
      <a class="guide-welcome-go" href="login.html?redirect=${back}#register">Créer mon compte gratuit</a>
      <button type="button" aria-label="Plus tard" title="Plus tard">&times;</button>`;
    box.querySelector('a').addEventListener('click', () => {
      store.set(NUDGE_SNOOZE_KEY, String(Date.now() + 30 * 86400000));
      track('account_nudge_click', { page });
    });
    box.querySelector('button').addEventListener('click', () => {
      store.set(NUDGE_SNOOZE_KEY, String(Date.now() + 14 * 86400000));
      track('account_nudge_dismiss', { page });
      box.remove();
    });
    main.insertBefore(box, main.firstChild);
    track('account_nudge_view', { page, days: visit.days, pages: visit.pages });
  }

  function start() {
    if (page === 'guide') markSeen();
    injectStyles();
    addHeaderButton();
    addMobileLink();
    const visit = recordVisit();
    const welcomeShown = addWelcome();
    addAccountNudge(visit, welcomeShown);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();

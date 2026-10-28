/**
 * Faire connaître le guide d'utilisation (guide.html) :
 * - bouton « ? Guide » dans l'en-tête de chaque page, qui ouvre la partie du guide liée à la page ;
 * - lien dans le menu mobile ;
 * - bandeau de bienvenue lors des premières visites, jusqu'à ce qu'il soit fermé ou le guide ouvert.
 */
(function () {
  'use strict';

  const SEEN_KEY = 'lmdt_guide_seen';
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
      .guide-mobile-link { display: block; margin-bottom: 0.75rem; padding: 0.75rem 1rem; border-radius: 12px; text-align: center; font-weight: 700;
        text-decoration: none; color: inherit; border: 1px solid rgba(245, 166, 35, 0.5); background: rgba(245, 166, 35, 0.1); }
      .guide-welcome { --gw-bg: #fffbeb; --gw-ink: #78350f; --gw-border: #fde68a;
        display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; max-width: 1200px; margin: 0.75rem auto; padding: 0.7rem 1rem;
        border-radius: 12px; background: var(--gw-bg); color: var(--gw-ink); border: 1px solid var(--gw-border); font-size: 0.92rem; line-height: 1.5; }
      [data-theme="dark"] .guide-welcome { --gw-bg: #2a2110; --gw-ink: #fde68a; --gw-border: #5b4614; }
      .guide-welcome p { margin: 0; flex: 1 1 260px; }
      .guide-welcome a { font-weight: 700; color: inherit; }
      .guide-welcome .guide-welcome-go { display: inline-block; padding: 0.45rem 0.9rem; border-radius: 999px; background: #f5a623; color: #0f172a; text-decoration: none; }
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
    if (page === 'guide' || store.get(SEEN_KEY)) return;
    const views = Number(store.get(VIEWS_KEY) || 0) + 1;
    store.set(VIEWS_KEY, String(views));
    if (views > MAX_VIEWS) return;
    const main = document.querySelector('main');
    if (!main) return;
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
  }

  function start() {
    if (page === 'guide') markSeen();
    injectStyles();
    addHeaderButton();
    addMobileLink();
    addWelcome();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();

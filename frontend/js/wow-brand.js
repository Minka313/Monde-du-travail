/**
 * Identité WOW · World Of Work (sigle anglais du club Le Monde du Travail).
 * - WowBrand.seal(size) : sceau vectoriel (SVG) à insérer dans une page ou un document ;
 * - WowBrand.signature({ kind, id, title }) : bloc de signature des documents (fiches PDF, rapports) ;
 * - écran de chargement : n'apparaît que si la page tarde (> 350 ms), ou pendant une navigation lente.
 *
 * Chargé de façon synchrone dans le <head> : ce fichier doit rester léger et sans dépendance.
 * Désactiver l'écran de chargement : <script src="…/wow-brand.js" data-loader="off">.
 */
(function () {
  'use strict';

  const script = document.currentScript;
  let uid = 0;

  /** Sceau WOW en SVG (chaque appel a ses propres identifiants de dégradés). */
  function seal(size = 120, { title = 'Sceau WOW · World Of Work · Le Monde du Travail', spin = false } = {}) {
    const id = `wow${(uid += 1)}${Math.random().toString(36).slice(2, 6)}`;
    // En petit, les textes circulaires deviennent illisibles : monogramme seul
    if (size < 56) return compactSeal(size, id, title);
    return `
<svg class="wow-seal${spin ? ' wow-seal-spin' : ''}" width="${size}" height="${size}" viewBox="0 0 200 200" role="img" aria-label="${title}" xmlns="http://www.w3.org/2000/svg">
  <title>${title}</title>
  <defs>
    <linearGradient id="${id}g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#fff1c1"/><stop offset=".35" stop-color="#f5c25b"/>
      <stop offset=".65" stop-color="#f5a623"/><stop offset="1" stop-color="#a86a12"/>
    </linearGradient>
    <radialGradient id="${id}n" cx=".38" cy=".32" r=".8">
      <stop offset="0" stop-color="#1f4a6e"/><stop offset=".6" stop-color="#0f2b46"/><stop offset="1" stop-color="#071624"/>
    </radialGradient>
    <linearGradient id="${id}q" x1="0" y1="1" x2="1" y2="0">
      <stop offset="0" stop-color="#2b7fa6"/><stop offset=".55" stop-color="#5fb3d4"/><stop offset="1" stop-color="#f5a623"/>
    </linearGradient>
    <path id="${id}top" d="M 31 100 A 69 69 0 0 1 169 100"/>
    <path id="${id}bot" d="M 24 100 A 76 76 0 0 0 176 100"/>
  </defs>
  <g class="wow-seal-ring">
    <circle cx="100" cy="100" r="98" fill="url(#${id}g)"/>
    <circle cx="100" cy="100" r="98" fill="none" stroke="#7a4b08" stroke-opacity=".35" stroke-width="1"/>
    <circle cx="100" cy="100" r="93" fill="none" stroke="#fff6d8" stroke-opacity=".7" stroke-width=".8" stroke-dasharray="1.6 2.6"/>
  </g>
  <circle cx="100" cy="100" r="89" fill="url(#${id}n)"/>
  <circle cx="100" cy="100" r="85" fill="none" stroke="url(#${id}g)" stroke-width="1.2"/>
  <circle cx="100" cy="100" r="58" fill="none" stroke="url(#${id}g)" stroke-width=".9"/>
  <circle cx="100" cy="100" r="54.5" fill="none" stroke="#f5c25b" stroke-opacity=".45" stroke-width=".6" stroke-dasharray="1 3"/>
  <text font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="13.5" font-weight="800" letter-spacing="4.2" fill="url(#${id}g)">
    <textPath href="#${id}top" startOffset="50%" text-anchor="middle">WORLD · OF · WORK</textPath>
  </text>
  <text font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="9.2" font-weight="700" letter-spacing="2.6" fill="#f8e7bd">
    <textPath href="#${id}bot" startOffset="50%" text-anchor="middle">LE MONDE DU TRAVAIL</textPath>
  </text>
  <g fill="url(#${id}g)">
    <path d="M22 100l3.2-2.4 3.2 2.4-3.2 2.4z"/><path d="M171.6 100l3.2-2.4 3.2 2.4-3.2 2.4z"/>
  </g>
  <g opacity=".42">
    <path d="M70 146c15-27 39-58 74-82-12 30-33 57-66 79z" fill="url(#${id}q)"/>
    <path d="M70 146c20-24 44-50 74-82" fill="none" stroke="#fff4d6" stroke-opacity=".8" stroke-width="1"/>
    <path d="M70 146l-6 9" stroke="url(#${id}g)" stroke-width="2.2" stroke-linecap="round"/>
  </g>
  <g fill="#f5c25b">
    <path d="M86 66l1.3 2.7 3 .4-2.2 2.1.5 3-2.6-1.4-2.7 1.4.5-3-2.2-2.1 3-.4z"/>
    <path d="M100 62l1.5 3.1 3.4.5-2.5 2.4.6 3.4-3-1.6-3 1.6.6-3.4-2.5-2.4 3.4-.5z"/>
    <path d="M114 66l1.3 2.7 3 .4-2.2 2.1.5 3-2.6-1.4-2.7 1.4.5-3-2.2-2.1 3-.4z"/>
  </g>
  <text x="100" y="112" text-anchor="middle" font-family="'Playfair Display', Georgia, 'Times New Roman', serif" font-size="40" font-weight="700" letter-spacing="1" fill="url(#${id}g)" stroke="#071624" stroke-width=".6" paint-order="stroke">WOW</text>
  <path d="M78 121h44" stroke="url(#${id}g)" stroke-width="1.1"/>
  <text x="100" y="134" text-anchor="middle" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="6.4" font-weight="700" letter-spacing="1.6" fill="#f8e7bd">DEMAIN SE PRÉPARE</text>
  <text x="100" y="142.5" text-anchor="middle" font-family="Inter, 'Segoe UI', Arial, sans-serif" font-size="6.4" font-weight="700" letter-spacing="1.6" fill="#f8e7bd">AUJOURD’HUI</text>
</svg>`;
  }

  function compactSeal(size, id, title) {
    return `
<svg class="wow-seal wow-seal-compact" width="${size}" height="${size}" viewBox="0 0 100 100" role="img" aria-label="${title}" xmlns="http://www.w3.org/2000/svg">
  <title>${title}</title>
  <defs>
    <linearGradient id="${id}g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#fff1c1"/><stop offset=".45" stop-color="#f5b73d"/><stop offset="1" stop-color="#a86a12"/>
    </linearGradient>
    <radialGradient id="${id}n" cx=".38" cy=".32" r=".8">
      <stop offset="0" stop-color="#1f4a6e"/><stop offset="1" stop-color="#071624"/>
    </radialGradient>
  </defs>
  <circle cx="50" cy="50" r="49" fill="url(#${id}g)"/>
  <circle cx="50" cy="50" r="43" fill="url(#${id}n)"/>
  <text x="50" y="59" text-anchor="middle" font-family="'Playfair Display', Georgia, serif" font-size="27" font-weight="700" fill="url(#${id}g)">WOW</text>
</svg>`;
  }

  // Référence courte et stable d'un document (identifiant lisible, pas une preuve cryptographique)
  function reference(kind, id) {
    let h = 2166136261;
    const input = `${kind}:${id}`;
    for (let i = 0; i < input.length; i += 1) {
      h ^= input.charCodeAt(i);
      h = Math.imul(h, 16777619) >>> 0;
    }
    const code = h.toString(36).toUpperCase().padStart(7, '0').slice(-7);
    return `WOW-${String(kind).toUpperCase().slice(0, 3)}-${code.slice(0, 3)}-${code.slice(3)}`;
  }

  const KIND_LABELS = { MET: 'Fiche métier', FOR: 'Fiche formation', RAP: 'Rapport du bureau', MEN: 'Compte rendu de mentorat', ORI: 'Profil d\'orientation' };

  /**
   * Bloc de signature WOW (HTML autonome, styles en ligne pour les fenêtres d'impression).
   * @param {Object} opts { kind: 'MET'|'FOR'|'RAP'|'MEN'|'ORI', id, date, sealSrc }
   * sealSrc : URL du fichier wow-seal.svg. À utiliser dans une page dont la signature est
   * masquée à l'écran : Chromium perd alors les dégradés d'un SVG en ligne à l'impression.
   */
  function signature({ kind = 'MET', id = '', date = new Date(), sealSrc = '' } = {}) {
    const edited = new Date(date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
    return `
<div class="wow-signature" style="display:flex;align-items:center;gap:18px;margin-top:28px;padding:16px 20px;border:1px solid #e9d8a6;border-radius:14px;background:linear-gradient(135deg,#fffdf6,#fff7e3);break-inside:avoid;page-break-inside:avoid;font-family:Inter,'Segoe UI',Arial,sans-serif;color:#0f2b46;">
  <div style="flex:0 0 auto;line-height:0;">${sealSrc ? `<img src="${sealSrc}" width="92" height="92" alt="Sceau WOW">` : seal(92)}</div>
  <div style="min-width:0;">
    <div style="font-family:'Great Vibes','Allura','Brush Script MT','Segoe Script',cursive;font-size:30px;line-height:1.1;word-spacing:.18em;color:#0f2b46;">World Of Work</div>
    <div style="height:1px;width:220px;max-width:100%;margin:6px 0 8px;background:linear-gradient(90deg,#f5a623,rgba(245,166,35,0));"></div>
    <div style="font-size:11px;letter-spacing:.08em;text-transform:uppercase;font-weight:800;color:#b7791f;">Sceau numérique WOW · ${KIND_LABELS[kind] || 'Document'}</div>
    <div style="font-size:11.5px;color:#475569;margin-top:3px;">Le Monde du Travail · « Demain se prépare aujourd’hui »<br>Réf. <strong style="color:#0f2b46;letter-spacing:.04em;">${reference(kind, id)}</strong> · Édité le ${edited}</div>
  </div>
</div>`;
  }

  // ===== Écran de chargement =====

  const LOADER_CSS = `
#wowLoader{position:fixed;inset:0;z-index:2147483000;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;
  background:radial-gradient(circle at 50% 42%,#14385a 0%,#0b2238 55%,#06121f 100%);opacity:0;pointer-events:none;
  transition:opacity .28s ease;}
#wowLoader.wow-visible{opacity:1;pointer-events:auto;}
#wowLoader.wow-delayed{animation:wowIn .3s ease .35s forwards;}
#wowLoader .wow-loader-seal{position:relative;width:132px;height:132px;filter:drop-shadow(0 10px 30px rgba(245,166,35,.25));}
#wowLoader .wow-loader-seal svg{width:100%;height:100%;}
#wowLoader .wow-loader-orbit{position:absolute;inset:-12px;border-radius:50%;border:2px solid rgba(245,166,35,.18);border-top-color:#f5a623;animation:wowSpin 1.1s linear infinite;}
#wowLoader .wow-loader-name{font:600 12px/1 Inter,'Segoe UI',Arial,sans-serif;letter-spacing:.42em;text-transform:uppercase;color:rgba(248,231,189,.85);padding-left:.42em;}
.wow-seal-spin .wow-seal-ring{transform-origin:100px 100px;animation:wowSpin 18s linear infinite;}
@keyframes wowIn{to{opacity:1;pointer-events:auto;}}
@keyframes wowSpin{to{transform:rotate(360deg);}}
@media (prefers-reduced-motion:reduce){#wowLoader .wow-loader-orbit,.wow-seal-spin .wow-seal-ring{animation:none;}}
@media print{#wowLoader{display:none!important;}}`;

  let loader = null;
  let navTimer = null;

  function ensureLoader() {
    if (loader) return loader;
    const style = document.createElement('style');
    style.id = 'wowLoaderStyle';
    style.textContent = LOADER_CSS;
    (document.head || document.documentElement).appendChild(style);
    loader = document.createElement('div');
    loader.id = 'wowLoader';
    loader.setAttribute('role', 'status');
    loader.setAttribute('aria-live', 'polite');
    loader.innerHTML = `<div class="wow-loader-seal"><span class="wow-loader-orbit"></span>${seal(132, { spin: true })}</div>
      <div class="wow-loader-name">World Of Work</div><span style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);">Chargement…</span>`;
    // Avant que <body> n'existe, l'écran est rattaché à <html> (puis déplacé)
    (document.body || document.documentElement).appendChild(loader);
    return loader;
  }

  function hideLoader() {
    clearTimeout(navTimer);
    if (!loader) return;
    loader.classList.remove('wow-delayed', 'wow-visible');
    loader.style.opacity = '0';
    loader.style.pointerEvents = 'none';
  }

  // Navigation lente vers une autre page du site : l'écran apparaît après un court délai
  function showForNavigation() {
    clearTimeout(navTimer);
    navTimer = setTimeout(() => {
      ensureLoader();
      loader.style.opacity = '';
      loader.style.pointerEvents = '';
      loader.classList.add('wow-visible');
      // Navigation annulée ou très lente : l'écran ne doit jamais bloquer la page
      navTimer = setTimeout(hideLoader, 10000);
    }, 300);
  }

  function isInternalNavigation(event) {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return false;
    const link = event.target.closest && event.target.closest('a[href]');
    if (!link || link.target && link.target !== '_self' || link.hasAttribute('download')) return false;
    if ((link.getAttribute('href') || '').trim().startsWith('#')) return false;
    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin || !/^https?:$/.test(url.protocol)) return false;
    // Ancre dans la même page : pas de navigation
    return !(url.pathname === window.location.pathname && url.search === window.location.search && url.hash);
  }

  const loaderEnabled = !script || script.dataset.loader !== 'off';
  if (loaderEnabled) {
    ensureLoader().classList.add('wow-delayed');
    const ready = () => {
      if (loader && document.body && loader.parentNode !== document.body) document.body.appendChild(loader);
      hideLoader();
    };
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready, { once: true });
    else ready();
    document.addEventListener('click', (event) => { if (isInternalNavigation(event)) showForNavigation(); });
    // Retour arrière (cache du navigateur) : la page revient sans recharger
    window.addEventListener('pageshow', hideLoader);
  }

  window.WowBrand = { seal, signature, reference, hideLoader };
})();

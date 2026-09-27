/**
 * LE MONDE DU TRAVAIL — THEME ENGINE (DARK / LIGHT MODE)
 * Moteur de thème ultra-réactif : Zéro-FOUC (anti-flicker), détection OS, persistance localStorage et micro-interactions.
 */
(function () {
  'use strict';

  const STORAGE_KEY = 'lmt-theme';
  const THEME_DARK = 'dark';
  const THEME_LIGHT = 'light';

  // 1. Détection synchrone immédiate
  function getPreferredTheme() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === THEME_DARK || saved === THEME_LIGHT) return saved;
    } catch (_) {}

    // Détection préférence OS
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return THEME_DARK;
    }
    return THEME_LIGHT;
  }

  // 2. Application du thème sur l'élément racine
  function applyTheme(theme, save = true) {
    const validTheme = theme === THEME_DARK ? THEME_DARK : THEME_LIGHT;
    document.documentElement.setAttribute('data-theme', validTheme);
    document.documentElement.classList.remove('theme-light', 'theme-dark');
    document.documentElement.classList.add(`theme-${validTheme}`);

    if (save) {
      try {
        localStorage.setItem(STORAGE_KEY, validTheme);
      } catch (_) {}
    }

    updateToggleButtons(validTheme);

    // Déclencher l'événement personnalisé pour les composants tiers
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('theme:changed', { detail: { theme: validTheme } }));
    }
    return validTheme;
  }

  // 3. Mise à jour de l'état visuel de tous les boutons de bascule
  function updateToggleButtons(theme) {
    const isDark = theme === THEME_DARK;
    const icon = isDark ? '☀️' : '🌙';
    const label = isDark ? 'Mode Clair' : 'Mode Sombre';
    const title = isDark ? 'Passer en Mode Clair' : 'Passer en Mode Sombre';

    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      btn.setAttribute('title', title);
      btn.setAttribute('aria-label', title);
      const iconSpan = btn.querySelector('.theme-toggle-icon');
      if (iconSpan) iconSpan.textContent = icon;
      const labelSpan = btn.querySelector('.theme-toggle-label');
      if (labelSpan) labelSpan.textContent = label;
    });
  }

  // 4. Bascule (Toggle)
  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || THEME_LIGHT;
    const next = current === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    return applyTheme(next, true);
  }

  // 5. Liaison des événements sur les boutons
  function bindButtons() {
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      if (btn.dataset.themeBound === 'true') return;
      btn.dataset.themeBound = 'true';
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleTheme();
      });
    });
    const current = document.documentElement.getAttribute('data-theme') || getPreferredTheme();
    updateToggleButtons(current);
  }

  // Application immédiate avant même le parsing complet du DOM
  const initialTheme = getPreferredTheme();
  applyTheme(initialTheme, false);

  // Écoute des changements de préférence OS
  if (typeof window !== 'undefined' && window.matchMedia) {
    try {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = (e) => {
        try {
          if (!localStorage.getItem(STORAGE_KEY)) {
            applyTheme(e.matches ? THEME_DARK : THEME_LIGHT, false);
          }
        } catch (_) {}
      };
      if (typeof mediaQuery.addEventListener === 'function') {
        mediaQuery.addEventListener('change', listener);
      } else if (typeof mediaQuery.addListener === 'function') {
        mediaQuery.addListener(listener);
      }
    } catch (_) {}
  }

  // Attacher aux événements de chargement du DOM et des fragments
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindButtons);
  } else {
    bindButtons();
  }
  document.addEventListener('layout:loaded', bindButtons);

  // Exposer l'API globale
  window.LMTTheme = {
    getTheme: () => document.documentElement.getAttribute('data-theme') || THEME_LIGHT,
    setTheme: (t) => applyTheme(t, true),
    toggleTheme: toggleTheme,
    initButtons: bindButtons
  };
})();

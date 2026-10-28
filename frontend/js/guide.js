/**
 * Guide d'utilisation : recherche instantanée dans les rubriques et sommaire qui suit la lecture.
 */
(function () {
  'use strict';

  const normalize = (text) => String(text || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

  function init() {
    const input = document.getElementById('guideSearch');
    const empty = document.getElementById('guideSearchEmpty');
    const sections = [...document.querySelectorAll('.guide-sec')];
    const links = [...document.querySelectorAll('.guide-toc a')];
    if (!input || !sections.length) return;

    // Recherche : on n'affiche que les rubriques qui contiennent tous les mots tapés
    let timer;
    input.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const words = normalize(input.value).split(/\s+/).filter(Boolean);
        let shown = 0;
        sections.forEach((sec) => {
          const match = !words.length || words.every((w) => normalize(sec.textContent).includes(w));
          sec.hidden = !match;
          if (match) shown += 1;
          // Les blocs repliés qui contiennent la recherche s'ouvrent
          sec.querySelectorAll('details').forEach((d) => {
            if (words.length) d.open = words.every((w) => normalize(d.textContent).includes(w));
          });
        });
        links.forEach((a) => {
          const target = document.querySelector(a.getAttribute('href'));
          a.parentElement.hidden = Boolean(target && target.hidden);
        });
        empty.hidden = shown > 0;
      }, 150);
    });

    // Sommaire : la rubrique en cours de lecture est mise en évidence
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === `#${entry.target.id}`));
        });
      }, { rootMargin: '-30% 0px -60% 0px' });
      sections.forEach((sec) => observer.observe(sec));
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

/**
 * =========================================================================
 * LE MONDE DU TRAVAIL — SCROLLYTELLING & SMOOTH SCROLL ENGINE (Awwwards Grade)
 * =========================================================================
 * 
 * Stack :
 *  - Smooth Scroll : Lenis (Studio Freight / darkroom.engineering)
 *  - Animation & Triggers : GSAP + ScrollTrigger
 * 
 * GARANTIE ZÉRO ÉCRAN BLANC :
 *  Le contenu est toujours visible par défaut en HTML/CSS.
 *  Ce moteur applique des apparitions douces progressives (Fade-Up)
 *  sans jamais masquer ni bloquer les éléments si le défilement est rapide
 *  ou si un observateur tarde à réagir.
 * =========================================================================
 */

(function () {
  'use strict';

  // ===== CONFIGURATION CENTRALE =====
  const CONFIG = {
    // Réglages du Smooth Scroll (Lenis)
    lenis: {
      duration: 1.2,              // Durée d'inertie en secondes (1.0 à 1.4)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo.out soyeux
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.25,
      infinite: false,
    },
    // Réglages des apparitions douces (Fade-Up)
    reveal: {
      y: 24,                      // Déplacement vertical subtil
      duration: 0.85,             // Durée d'apparition (0.8s à 1.1s)
      ease: 'power3.out',
      startThreshold: 'top 94%',  // Déclenchement au bord bas de l'écran
    },
    // Réglages du Stagger (Cascade sur les grilles)
    stagger: {
      delay: 0.08,                // Intervalle entre chaque carte
      y: 20,
      duration: 0.75,
      ease: 'power3.out',
    },
    // Réglages du Zoom subtil d'image
    imageScale: {
      fromScale: 1.04,
      toScale: 1.0,
      duration: 1.1,
      ease: 'power2.out',
    },
    // Parallaxe Hero
    heroParallax: {
      yPercent: -12,
    }
  };

  let lenisInstance = null;
  const isReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isDesktop = () => window.innerWidth >= 992;

  /**
   * Filet de sécurité absolu : Garantir que tout contenu est visible
   * Élimine définitivement tout risque d'écran blanc.
   */
  function ensureVisibilityFailsafe() {
    const allRevealElements = document.querySelectorAll(`
      .reveal, [data-reveal], .reveal-up, .reveal-fade, .reveal-left,
      .reveal-right, .reveal-scale, .reveal-mask, .fade-in-up,
      [data-scrolly="fade-up"], fade-in-up, .card, .home-featured-card,
      .home-topic-card, .testimonial-card, .scrolly-step-card
    `);

    allRevealElements.forEach((el) => {
      // Si l'élément a déjà été animé ou s'il est au-dessus/dans le viewport
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top < vh + 100) {
        el.style.opacity = '1';
        el.classList.add('is-revealed', 'revealed');
      }
    });
  }

  /**
   * 1. Initialisation de Lenis (Smooth Scroll)
   */
  function initLenis() {
    if (isReducedMotion) {
      return null;
    }

    if (typeof window.Lenis === 'undefined') {
      return null;
    }

    try {
      lenisInstance = new window.Lenis({
        duration: CONFIG.lenis.duration,
        easing: CONFIG.lenis.easing,
        orientation: CONFIG.lenis.orientation,
        gestureOrientation: CONFIG.lenis.gestureOrientation,
        smoothWheel: CONFIG.lenis.smoothWheel,
        touchMultiplier: CONFIG.lenis.touchMultiplier,
        infinite: CONFIG.lenis.infinite,
      });

      window.lenis = lenisInstance;

      // Synchronisation avec GSAP ScrollTrigger
      if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
        lenisInstance.on('scroll', window.ScrollTrigger.update);

        window.gsap.ticker.add((time) => {
          lenisInstance.raf(time * 1000);
        });

        window.gsap.ticker.lagSmoothing(0);
      } else {
        function raf(time) {
          lenisInstance.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }

      document.documentElement.classList.add('has-lenis-smooth');
      return lenisInstance;
    } catch (err) {
      console.warn('Fallback scroll natif:', err);
      return null;
    }
  }

  /**
   * 2. Révélations douces (Fade-Up progressif sans masquage bloquant)
   */
  function initSmoothReveals() {
    if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined' || isReducedMotion) {
      ensureVisibilityFailsafe();
      return;
    }

    const targets = document.querySelectorAll(`
      .fade-in-up,
      [data-scrolly="fade-up"],
      fade-in-up,
      .reveal-up:not(.is-revealed)
    `);

    const vh = window.innerHeight;

    targets.forEach((el) => {
      if (el.dataset.scrollyInit === 'true') return;
      el.dataset.scrollyInit = 'true';

      const rect = el.getBoundingClientRect();

      // Si l'élément est déjà visible dans le viewport : afficher immédiatement à 100%
      if (rect.top < vh && rect.bottom > 0) {
        window.gsap.set(el, { opacity: 1, y: 0 });
        el.classList.add('is-revealed');
        return;
      }

      const customDuration = parseFloat(el.getAttribute('data-duration')) || CONFIG.reveal.duration;
      const customDelay = parseFloat(el.getAttribute('data-delay')) || 0;
      const customY = parseFloat(el.getAttribute('data-y')) || CONFIG.reveal.y;

      // Animation progressive avec immediateRender: false pour ne JAMAIS masquer par surprise
      window.gsap.fromTo(el, {
        opacity: 0.2,
        y: customY,
      }, {
        opacity: 1,
        y: 0,
        duration: customDuration,
        delay: customDelay,
        ease: CONFIG.reveal.ease,
        immediateRender: false,
        scrollTrigger: {
          trigger: el,
          start: CONFIG.reveal.startThreshold,
          once: true,
          onEnter: () => {
            el.style.opacity = '1';
            el.classList.add('is-revealed');
          },
        }
      });
    });
  }

  /**
   * 3. Parallaxe de profondeur Hero & Scale subtil d'images
   */
  function initDepthAndScale() {
    if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined' || isReducedMotion) {
      return;
    }

    // A. Parallaxe douce sur le Hero (Desktop)
    const heroVisual = document.querySelector('.hero-visual');
    const heroImg = heroVisual ? heroVisual.querySelector('img') : null;

    if (heroVisual && heroImg && isDesktop()) {
      window.gsap.to(heroImg, {
        yPercent: CONFIG.heroParallax.yPercent,
        ease: 'none',
        scrollTrigger: {
          trigger: heroVisual,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        }
      });
    }

    // B. Zoom inverse subtil (1.04 -> 1.0)
    const scalableImages = document.querySelectorAll(`
      .card-image-wrap img,
      .card img,
      .job-card img,
      .formation-card img,
      .home-featured-card img,
      [data-scrolly-scale]
    `);

    scalableImages.forEach((img) => {
      if (img.dataset.scaleInit === 'true') return;
      img.dataset.scaleInit = 'true';

      if (img.parentElement && !img.parentElement.classList.contains('card-image-wrap')) {
        img.parentElement.style.overflow = 'hidden';
      }

      window.gsap.fromTo(img, {
        scale: CONFIG.imageScale.fromScale,
      }, {
        scale: CONFIG.imageScale.toScale,
        duration: CONFIG.imageScale.duration,
        ease: CONFIG.imageScale.ease,
        scrollTrigger: {
          trigger: img,
          start: 'top 95%',
          once: true,
        }
      });
    });
  }

  /**
   * 4. Staggering organique sur les grilles (sans jamais masquer)
   */
  function initOrganicStaggers() {
    if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined' || isReducedMotion) {
      ensureVisibilityFailsafe();
      return;
    }

    const gridSelectors = [
      '.cards-grid',
      '.scrolly-cards-grid',
      '.impact-grid',
      '.features-grid',
      '.jobs-grid',
      '.formations-grid',
      '.families-cards-grid',
      '.testimonials-grid',
      '.home-topics-grid',
      '.objectives-dna-grid',
      '.stagger-group',
      '.editorial-duo-grid'
    ];

    document.querySelectorAll(gridSelectors.join(', ')).forEach((container) => {
      if (container.dataset.staggerInit === 'true') return;
      container.dataset.staggerInit = 'true';

      const items = Array.from(container.children).filter(el => el.nodeType === 1);
      if (items.length === 0) return;

      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight;

      // Si la grille est déjà visible : 100% visible directement
      if (rect.top < vh) {
        items.forEach(item => {
          item.style.opacity = '1';
          item.classList.add('is-revealed');
        });
        return;
      }

      window.gsap.fromTo(items, {
        opacity: 0.25,
        y: CONFIG.stagger.y,
      }, {
        opacity: 1,
        y: 0,
        duration: CONFIG.stagger.duration,
        stagger: CONFIG.stagger.delay,
        ease: CONFIG.stagger.ease,
        immediateRender: false,
        scrollTrigger: {
          trigger: container,
          start: 'top 92%',
          once: true,
          onEnter: () => {
            items.forEach(item => {
              item.style.opacity = '1';
              item.classList.add('is-revealed');
            });
          }
        }
      });
    });
  }

  /**
   * 5. Composant Web Custom Element <fade-in-up>
   */
  class FadeInUpElement extends HTMLElement {
    connectedCallback() {
      this.classList.add('fade-in-up-wrapper');
      this.style.opacity = '1'; // Visible par défaut

      if (isReducedMotion) {
        return;
      }

      requestAnimationFrame(() => {
        if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
          const rect = this.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            this.style.opacity = '1';
            return;
          }

          const delay = parseFloat(this.getAttribute('delay')) || 0;
          const duration = parseFloat(this.getAttribute('duration')) || CONFIG.reveal.duration;
          const y = parseFloat(this.getAttribute('y')) || CONFIG.reveal.y;

          window.gsap.fromTo(this, {
            opacity: 0.2,
            y: y,
          }, {
            opacity: 1,
            y: 0,
            duration: duration,
            delay: delay,
            ease: CONFIG.reveal.ease,
            immediateRender: false,
            scrollTrigger: {
              trigger: this,
              start: CONFIG.reveal.startThreshold,
              once: true,
              onEnter: () => { this.style.opacity = '1'; }
            }
          });
        }
      });
    }
  }

  if (typeof customElements !== 'undefined' && !customElements.get('fade-in-up')) {
    customElements.define('fade-in-up', FadeInUpElement);
  }

  /**
   * 6. Contrôle du Scroll lors des Modales et Tiroirs
   */
  function bindModalEvents() {
    document.addEventListener('modal:opened', () => {
      if (lenisInstance) lenisInstance.stop();
    });
    document.addEventListener('modal:closed', () => {
      if (lenisInstance) lenisInstance.start();
    });

    const bodyObserver = new MutationObserver(() => {
      const isLocked = document.body.classList.contains('nav-open') || 
                       document.body.classList.contains('modal-open') ||
                       document.body.style.overflow === 'hidden';
      if (lenisInstance) {
        if (isLocked) {
          lenisInstance.stop();
        } else {
          lenisInstance.start();
        }
      }
    });

    bodyObserver.observe(document.body, { attributes: true, attributeFilter: ['class', 'style'] });
  }

  /**
   * 7. Lancement et Boucle de Sécurité Anti-Écran Blanc
   */
  function initScrollytelling() {
    initLenis();
    initSmoothReveals();
    initDepthAndScale();
    initOrganicStaggers();
    bindModalEvents();

    // Filet de sécurité 1 : 200ms après démarrage
    setTimeout(ensureVisibilityFailsafe, 200);

    // Filet de sécurité 2 : 600ms après démarrage
    setTimeout(ensureVisibilityFailsafe, 600);

    // Filet de sécurité 3 : 1500ms (garantit qu'aucun élément ne reste invisible)
    setTimeout(ensureVisibilityFailsafe, 1500);

    // Filet de sécurité au scroll natif
    window.addEventListener('scroll', ensureVisibilityFailsafe, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollytelling);
  } else {
    setTimeout(initScrollytelling, 10);
  }

  window.addEventListener('pageshow', (e) => {
    if (e.persisted && lenisInstance) {
      lenisInstance.start();
      if (typeof window.ScrollTrigger !== 'undefined') {
        window.ScrollTrigger.refresh();
      }
      ensureVisibilityFailsafe();
    }
  });

  // API Globale
  window.scrollytelling = {
    config: CONFIG,
    getLenis: () => lenisInstance,
    refresh: () => {
      if (typeof window.ScrollTrigger !== 'undefined') {
        window.ScrollTrigger.refresh();
      }
      initSmoothReveals();
      initDepthAndScale();
      initOrganicStaggers();
      ensureVisibilityFailsafe();
    },
    fadeInUp: (element, options = {}) => {
      if (!window.gsap) return;
      const opts = Object.assign({}, CONFIG.reveal, options);
      window.gsap.fromTo(element, {
        opacity: 0.2,
        y: opts.y,
      }, {
        opacity: 1,
        y: 0,
        duration: opts.duration,
        delay: opts.delay || 0,
        ease: opts.ease,
      });
    }
  };

})();

/**
 * =========================================================================
 * LE MONDE DU TRAVAIL — SCROLLYTELLING & SMOOTH SCROLL ENGINE (Awwwards Grade)
 * =========================================================================
 * 
 * Stack :
 *  - Smooth Scroll : Lenis (Studio Freight / darkroom.engineering)
 *  - Animation & Triggers : GSAP + ScrollTrigger
 * 
 * Ce module orchestre :
 *  1. Le défilement inertiel ultra-doux (Lenis) synchronisé au GSAP Ticker.
 *  2. L'apparition douce (Smooth Reveal / Fade-Up) avec easing cinématique exponentiel.
 *  3. L'effet de profondeur & parallaxe légère sur les héros et images.
 *  4. L'effet de zoom inverse subtil (Scale 1.05 -> 1.0) sur les cartes au scroll.
 *  5. Les animations de groupe en cascade (Staggering organique).
 *  6. La scène Sticky Scrollytelling (« Le Parcours : Du Métier à la Formation »).
 *  7. Le composant Web Custom Element réutilisable <fade-in-up>.
 *  8. L'adaptation mobile et le respect strict de prefers-reduced-motion.
 * 
 * =========================================================================
 * GUIDE D'AJUSTEMENT RAPIDE DES VALEURS :
 * =========================================================================
 *  - DURÉE DU SMOOTH SCROLL : modifiez `CONFIG.lenis.duration` (défaut: 1.2s).
 *  - DURÉE DES APPARITIONS  : modifiez `CONFIG.reveal.duration` (défaut: 0.95s).
 *  - COURBE D'AMORTI (EASING): modifiez `CONFIG.reveal.ease` (ex: 'power3.out', 'expo.out').
 *  - DÉCALAGE STAGGER       : modifiez `CONFIG.stagger.delay` (défaut: 0.09s).
 *  - DISTANCE FADE-UP       : modifiez `CONFIG.reveal.y` (défaut: 30px).
 * =========================================================================
 */

(function () {
  'use strict';

  // ===== CONFIGURATION CENTRALE DU MOTEUR =====
  const CONFIG = {
    // Réglages du Smooth Scroll (Lenis)
    lenis: {
      duration: 1.2,              // Durée de décélération inertielle en secondes (1.0 à 1.4 conseillé)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing exponentiel soyeux (expo.out)
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.25,      // Réactivité tactile sur mobile
      infinite: false,
    },
    // Réglages des apparitions douces (Fade-Up)
    reveal: {
      y: 30,                      // Translation Y initiale en pixels (30px comme spécifié)
      duration: 0.95,             // Durée de l'animation en secondes (entre 0.8s et 1.2s)
      ease: 'power3.out',         // Easing GSAP : 'power3.out' ou 'expo.out' pour une douceur absolue
      startThreshold: 'top 88%',  // Point de déclenchement dans le viewport
    },
    // Réglages du Stagger (Effet de cascade dans les grilles)
    stagger: {
      delay: 0.09,                // Intervalle entre chaque carte successive (0.08s à 0.12s)
      y: 28,                      // Translation Y pour les cartes de grille
      duration: 0.85,
      ease: 'power3.out',
    },
    // Réglages du Zoom subtil d'image (Scale 1.05 -> 1.0)
    imageScale: {
      fromScale: 1.05,
      toScale: 1.0,
      duration: 1.2,
      ease: 'power2.out',
    },
    // Parallaxe Hero
    heroParallax: {
      yPercent: -15,              // Amplitude de recul de l'image de fond
    }
  };

  // État global
  let lenisInstance = null;
  const isReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isDesktop = () => window.innerWidth >= 992;

  /**
   * 1. Initialisation de Lenis (Smooth Scroll)
   */
  function initLenis() {
    if (isReducedMotion) {
      console.log('ℹ️ [Scrollytelling] Mode prefers-reduced-motion actif : défilement natif sans inertie.');
      return null;
    }

    if (typeof window.Lenis === 'undefined') {
      console.warn('⚠️ [Scrollytelling] Bibliothèque Lenis non détectée. Fallback vers scroll natif fluide.');
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

      // Synchronisation avec GSAP ScrollTrigger si présent
      if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
        lenisInstance.on('scroll', window.ScrollTrigger.update);

        window.gsap.ticker.add((time) => {
          lenisInstance.raf(time * 1000);
        });

        window.gsap.ticker.lagSmoothing(0);
      } else {
        // Boucle autonome si GSAP n'est pas encore prêt
        function raf(time) {
          lenisInstance.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
      }

      // Marquer la balise HTML
      document.documentElement.classList.add('has-lenis-smooth');
      console.log('✨ [Scrollytelling] Lenis Smooth Scroll initialisé avec succès.');
      return lenisInstance;
    } catch (err) {
      console.error('Erreur lors de l\'initialisation de Lenis:', err);
      return null;
    }
  }

  /**
   * 2. Révélations douces (Smooth Reveal / Fade-Up)
   */
  function initSmoothReveals() {
    if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') {
      // Fallback CSS / IntersectionObserver standard
      document.querySelectorAll('.fade-in-up, [data-scrolly="fade-up"], .reveal-up').forEach(el => {
        el.classList.add('is-revealed');
      });
      return;
    }

    if (isReducedMotion) {
      document.querySelectorAll('.fade-in-up, [data-scrolly="fade-up"], .reveal-up, fade-in-up').forEach(el => {
        window.gsap.set(el, { opacity: 1, y: 0, clearProps: 'all' });
      });
      return;
    }

    // Ciblage des éléments sous la ligne de flottaison
    const targets = document.querySelectorAll(`
      .fade-in-up,
      [data-scrolly="fade-up"],
      fade-in-up,
      .reveal-up:not(.is-revealed)
    `);

    const vh = window.innerHeight;

    targets.forEach((el) => {
      // Vérifier si l'élément a déjà été animé
      if (el.dataset.scrollyInit === 'true') return;
      el.dataset.scrollyInit = 'true';

      const rect = el.getBoundingClientRect();

      // Sécurité ZÉRO FOUC : si l'élément est déjà visible ou dans le premier écran, afficher immédiatement
      if (rect.top < vh && rect.bottom > 0) {
        window.gsap.set(el, { opacity: 1, y: 0 });
        el.classList.add('is-revealed');
        return;
      }

      // Récupération des attributs de personnalisation optionnels
      const customDuration = parseFloat(el.getAttribute('data-duration')) || CONFIG.reveal.duration;
      const customDelay = parseFloat(el.getAttribute('data-delay')) || 0;
      const customY = parseFloat(el.getAttribute('data-y')) || CONFIG.reveal.y;

      window.gsap.fromTo(el, {
        opacity: 0,
        y: customY,
      }, {
        opacity: 1,
        y: 0,
        duration: customDuration,
        delay: customDelay,
        ease: CONFIG.reveal.ease,
        scrollTrigger: {
          trigger: el,
          start: CONFIG.reveal.startThreshold,
          once: true,
          onEnter: () => el.classList.add('is-revealed'),
        }
      });
    });
  }

  /**
   * 3. Parallaxe de profondeur Hero & Scale d'images (1.05 -> 1.0)
   */
  function initDepthAndScale() {
    if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined' || isReducedMotion) {
      return;
    }

    // A. Parallaxe Hero (Desktop uniquement pour préserver les performances mobiles)
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

    // B. Effet Scale subtil des images : 1.05 -> 1.0 à l'entrée dans le viewport
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

      // S'assurer que le conteneur masque le débordement
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
          start: 'top 92%',
          once: true,
        }
      });
    });
  }

  /**
   * 4. Staggering organique (Animations en cascade sur les grilles)
   */
  function initOrganicStaggers() {
    if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined' || isReducedMotion) {
      return;
    }

    const gridSelectors = [
      '.cards-grid',
      '.impact-grid',
      '.features-grid',
      '.jobs-grid',
      '.formations-grid',
      '.families-cards-grid',
      '.testimonials-grid',
      '.home-topics-grid',
      '.objectives-dna-grid',
      '.stagger-group',
      '.formation-features-grid',
      '.editorial-duo-grid'
    ];

    document.querySelectorAll(gridSelectors.join(', ')).forEach((container) => {
      if (container.dataset.staggerInit === 'true') return;
      container.dataset.staggerInit = 'true';

      const items = Array.from(container.children).filter(el => el.nodeType === 1);
      if (items.length === 0) return;

      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight;

      // Si la grille est déjà visible au chargement, affichage immédiat
      if (rect.top < vh && rect.bottom > 0) {
        items.forEach(item => {
          window.gsap.set(item, { opacity: 1, y: 0 });
          item.classList.add('is-revealed');
        });
        return;
      }

      window.gsap.fromTo(items, {
        opacity: 0,
        y: CONFIG.stagger.y,
      }, {
        opacity: 1,
        y: 0,
        duration: CONFIG.stagger.duration,
        stagger: CONFIG.stagger.delay,
        ease: CONFIG.stagger.ease,
        scrollTrigger: {
          trigger: container,
          start: 'top 86%',
          once: true,
          onEnter: () => {
            items.forEach(item => item.classList.add('is-revealed'));
          }
        }
      });
    });
  }

  /**
   * 5. Scène Sticky Scrollytelling (« Le Parcours : Du Métier à la Formation »)
   * Bloque temporairement le scroll vertical sur desktop pour animer les étapes avant de relâcher.
   */
  function initStickyScrollytelling() {
    const scrollySection = document.getElementById('scrolly-journey-section');
    if (!scrollySection) return;

    if (typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined' || isReducedMotion) {
      // Dégradation douce sans blocage
      return;
    }

    // Utilisation de ScrollTrigger.matchMedia pour un comportement adapté
    const mm = window.ScrollTrigger.matchMedia();

    // Configuration Desktop (≥ 992px) avec Pinning cinématique
    mm.add('(min-width: 992px)', () => {
      const steps = scrollySection.querySelectorAll('.scrolly-step-card');
      const progressFill = scrollySection.querySelector('.scrolly-progress-fill');
      const stepIndicators = scrollySection.querySelectorAll('.scrolly-nav-dot');

      if (!steps || steps.length === 0) return;

      // Création de la timeline scrubbée
      const tl = window.gsap.timeline({
        scrollTrigger: {
          trigger: scrollySection,
          start: 'top top',
          end: '+=1800', // Distance de défilement pendant le pin
          pin: true,
          scrub: 0.8,    // Lissage inertiel du scrub
          anticipatePin: 1,
          onUpdate: (self) => {
            if (progressFill) {
              progressFill.style.height = `${self.progress * 100}%`;
            }
          }
        }
      });

      // Étape 1 : active par défaut
      window.gsap.set(steps[0], { opacity: 1, y: 0, pointerEvents: 'auto' });
      if (stepIndicators[0]) stepIndicators[0].classList.add('is-active');

      // Étapes 2 et suivantes : transition progressive
      for (let i = 1; i < steps.length; i++) {
        const prevStep = steps[i - 1];
        const currentStep = steps[i];

        tl.to(prevStep, {
          opacity: 0,
          y: -25,
          duration: 0.6,
          ease: 'power2.inOut',
          pointerEvents: 'none',
          onStart: () => {
            if (stepIndicators[i - 1]) stepIndicators[i - 1].classList.remove('is-active');
            if (stepIndicators[i]) stepIndicators[i].classList.add('is-active');
          },
          onReverseComplete: () => {
            if (stepIndicators[i]) stepIndicators[i].classList.remove('is-active');
            if (stepIndicators[i - 1]) stepIndicators[i - 1].classList.add('is-active');
          }
        })
        .fromTo(currentStep, {
          opacity: 0,
          y: 35,
          pointerEvents: 'none'
        }, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          pointerEvents: 'auto',
        }, '<0.2');
      }

      return () => {
        tl.kill();
      };
    });

    // Configuration Mobile (< 992px) : défilement naturel en pile sans blocage
    mm.add('(max-width: 991px)', () => {
      const steps = scrollySection.querySelectorAll('.scrolly-step-card');
      steps.forEach((step) => {
        window.gsap.set(step, {
          opacity: 1,
          y: 0,
          position: 'relative',
          pointerEvents: 'auto'
        });
      });
    });
  }

  /**
   * 6. Composant Web Custom Element <fade-in-up>
   * Permet d'envelopper n'importe quel texte ou carte de manière déclarative.
   */
  class FadeInUpElement extends HTMLElement {
    connectedCallback() {
      // Définir la classe de base
      this.classList.add('fade-in-up-wrapper');
      
      // Si l'utilisateur préfère réduire les animations, afficher directement
      if (isReducedMotion) {
        this.style.opacity = '1';
        this.style.transform = 'none';
        return;
      }

      // Déclencher le reveal une fois le DOM prêt
      requestAnimationFrame(() => {
        if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
          const delay = parseFloat(this.getAttribute('delay')) || 0;
          const duration = parseFloat(this.getAttribute('duration')) || CONFIG.reveal.duration;
          const y = parseFloat(this.getAttribute('y')) || CONFIG.reveal.y;

          const rect = this.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            window.gsap.set(this, { opacity: 1, y: 0 });
            return;
          }

          window.gsap.fromTo(this, {
            opacity: 0,
            y: y,
          }, {
            opacity: 1,
            y: 0,
            duration: duration,
            delay: delay,
            ease: CONFIG.reveal.ease,
            scrollTrigger: {
              trigger: this,
              start: CONFIG.reveal.startThreshold,
              once: true,
            }
          });
        } else {
          this.style.opacity = '1';
          this.style.transform = 'none';
        }
      });
    }
  }

  // Enregistrement du Custom Element
  if (typeof customElements !== 'undefined' && !customElements.get('fade-in-up')) {
    customElements.define('fade-in-up', FadeInUpElement);
  }

  /**
   * 7. Gestion de l'arrêt de Lenis lors de l'ouverture de modales ou tiroir mobile
   */
  function bindModalAndDrawerEvents() {
    // Écouter les événements d'ouverture de modale métier
    document.addEventListener('modal:opened', () => {
      if (lenisInstance) lenisInstance.stop();
    });
    document.addEventListener('modal:closed', () => {
      if (lenisInstance) lenisInstance.start();
    });

    // Observer les changements de classe sur le body pour le menu mobile
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
   * 8. Initialisation globale
   */
  function initScrollytelling() {
    // 1. Initialiser Lenis
    initLenis();

    // 2. Initialiser les apparitions douces
    initSmoothReveals();

    // 3. Initialiser les zooms d'images et la parallaxe
    initDepthAndScale();

    // 4. Initialiser les staggers
    initOrganicStaggers();

    // 5. Initialiser la section sticky narrative
    initStickyScrollytelling();

    // 6. Lier la gestion des modales et tiroirs
    bindModalAndDrawerEvents();
  }

  // Lancement dès que le DOM est interactif
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollytelling);
  } else {
    // Si déjà chargé
    setTimeout(initScrollytelling, 20);
  }

  // Relance lors des retours de cache (bfcache)
  window.addEventListener('pageshow', (e) => {
    if (e.persisted && lenisInstance) {
      lenisInstance.start();
      if (typeof window.ScrollTrigger !== 'undefined') {
        window.ScrollTrigger.refresh();
      }
    }
  });

  // Exposition de l'API globale pour contrôle ou réglages dynamiques
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
    },
    fadeInUp: (element, options = {}) => {
      if (!window.gsap) return;
      const opts = Object.assign({}, CONFIG.reveal, options);
      window.gsap.fromTo(element, {
        opacity: 0,
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

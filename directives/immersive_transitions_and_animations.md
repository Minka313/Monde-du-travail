# Directive : Transitions Naturelles, Scrollytelling & Expérience Fluide (UX Organique)

## 1. Objectifs & Philosophie
Offrir au site « Le Monde du Travail » une expérience immersive, fluide, moderne et mémorable (niveau Awwwards) :
```
« Ne pas regarder une page. Explorer un univers. »
« Le défilement n'est plus mécanique, c'est le moteur d'une histoire qui se dévoile avec une douceur absolue. »
```
Chaque section est pensée comme une scène narrative avec des révélations coordonnées au scroll, des micro-interactions soignées, une profondeur multicouche subtile, et une continuité visuelle entre les scènes.

---

## 2. Stack Technique & Moteurs

### A. Smooth Scrolling Inertiel : `Lenis` (v1.1.x)
- **Rôle** : Remplacer le défilement brusque natif par un glissement inertiel satiné.
- **Paramétrage** :
  - Durée d'inertie : `1.2s` (modifiable dans `scrollytelling-engine.js` via `CONFIG.lenis.duration`).
  - Fonction d'amorti (Easing) : `(t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))` (équivalent `expo.out`).
  - Synchronisation complète avec le GSAP Ticker via `gsap.ticker.lagSmoothing(0)`.
  - Pause automatique lors de l'ouverture de modales ou tiroirs mobiles (`lenis.stop()` / `lenis.start()`).

### B. Moteur d'Animation & Triggers : `GSAP` + `ScrollTrigger`
- **Synchronisation** :
  ```javascript
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => { lenis.raf(time * 1000); });
  ```
- **Apparitions douces (Smooth Reveal)** :
  - Animation `Fade-Up` : `opacity: 0 -> 1` et `y: 30px -> 0px`.
  - Durée standard : `0.95s` (plage recommandée : `0.8s` à `1.2s`).
  - Easing cinématique : `power3.out` / `expo.out`.
  - Zéro FOUC : les éléments au-dessus de la ligne de flottaison sont activés immédiatement au chargement.

---

## 3. Composant Réutilisable & Balisage

### A. Web Component Déclaratif `<fade-in-up>`
Enveloppe n'importe quel texte, titre ou bloc pour lui appliquer automatiquement l'apparition douce :
```html
<fade-in-up duration="0.9" delay="0.1" y="30">
    <h2>Votre titre narratif</h2>
</fade-in-up>
```
*Paramètres ajustables via attributs HTML :*
- `duration` (en secondes, ex: `1.0`)
- `delay` (en secondes, ex: `0.15`)
- `y` (déplacement initial en pixels, ex: `25` ou `35`)

### B. Attributs & Classes Alternatifs
- Classe CSS : `.fade-in-up`
- Attribut data : `data-scrolly="fade-up"`
- Effet zoom image : `data-scrolly-scale="true"` (passe de `scale(1.05)` à `scale(1.0)` à l'entrée dans le viewport).

---

## 4. Scène Sticky Scrollytelling (« Du Métier à la Formation »)
- **ID Section** : `#scrolly-journey-section`
- **Mécanique** :
  - Desktop (≥ 992px) : blocage temporaire du scroll vertical (`ScrollTrigger.pin: true`, distance `+=1800px`) avec scrub continu.
  - Révélation cadencée des 3 étapes narratives :
    1. *Phase 01 — Métiers & Décryptage*
    2. *Phase 02 — Formations & Entraînement*
    3. *Phase 03 — Insertion & Mentorat*
  - Barre de progression verticale (`.scrolly-progress-fill`) et puces actives reflétant l'avancement.
  - Mobile (< 992px) : désactivation transparente du pin pour préserver les performances tactiles, affichage en cartes empilées élégantes.

---

## 5. Garde-Fous de Performance & Accessibilité
- **GPU Exclusif** : Calculs portés exclusivement sur `transform` et `opacity`. Aucune animation sur `top`, `left`, `margin`, `width`.
- **Adaptation Mobile** : Parallaxe désactivée sur petits écrans, smooth scroll optimisé, animations allégées.
- **Respect de `prefers-reduced-motion: reduce`** : Si activé sur le système de l'utilisateur, Lenis et les ScrollTriggers sont désactivés instantanément, les éléments s'affichent à 100% d'opacité sans déplacement.



# Directive : Transitions Immersives & Expérience Vivante (Animations Professionnelles)

## 1. Objectifs & Philosophie
Transformer la navigation du site « Le Monde du Travail » en une expérience fluide, cinématographique et vivante, sans latence ni lourdeur (« transitions de ouf, qu'on ne se sente pas sur un document PDF mais totalement immergé, tout en restant très pro »).

## 2. Piliers d'Architecture

### A. Transitions Inter-Pages (Page Transitions)
* **View Transitions API (`document.startViewTransition`)** : Utilisée nativement dès que supportée par le navigateur.
* **Fallback Universel (CSS/JS)** :
  - Lors d'un clic sur un lien interne, déclencher immédiatement une classe d'éviction `page-is-exiting` avec fondu et léger zoom arrière (180ms).
  - Activer la barre de progression dynamique en tête d'écran (`#pageTransitionProgress`).
  - À l'arrivée sur la nouvelle page (`DOMContentLoaded`), déclencher `page-is-entering` puis retirer la classe après transition pour laisser le DOM net.
  - Intercepter `pageshow` avec `event.persisted` pour garantir que l'historique et le bouton retour du navigateur ne figent jamais l'affichage.

### B. Scroll Reveal & Cascades (Intersection Observer)
* Observer automatique ciblant :
  - `.reveal`, `.reveal-up`, `.reveal-fade`, `.reveal-scale`, `.reveal-left`, `.reveal-right`
  - Les conteneurs de cartes (`.cards-grid`, `.card`, `.formation-card`, `.job-card`, `.impact-item`, `.blog-card`)
* Attribution automatique d'un délai en cascade (`--stagger-delay: calc(var(--item-idx) * 70ms)`) pour une arrivée fluide et ordonnée.
* Easing standard : `cubic-bezier(0.16, 1, 0.3, 1)` (courbe naturelle et réactive).

### C. Arrière-Plans Vivants & Éléments Flottants
* Effet d'aurore vivante (`.hero-aurora`) : gradient animé en translation 3D et rotation lente continue (GPU accelerated).
* Halos d'ambiance et micro-mouvements non intrusifs.

### D. Tactilité & Micro-Interactions
* **Cartes avec Spotlight Suiveur (Desktop)** : Les cartes capturent le mouvement de la souris (`--mouse-x`, `--mouse-y`) pour projeter un reflet subtil d'accentuation.
* **Boutons CTA** : Balayage lumineux (`shimmer sweep`) et press effect (`active: scale(0.96)`).
* **Menu Mobile** :
  - Glissement avec courbe de ressort fluide (`cubic-bezier(0.32, 0.72, 0, 1)`).
  - Flou d'arrière-plan profond (`backdrop-filter: blur(18px)`).
  - Apparition échelonnée des liens (`transition-delay: calc(index * 45ms)`).

## 3. Garde-Fous de Performance & Accessibilité
* **60/120 FPS** : Utilisation exclusive des propriétés GPU (`transform`, `opacity`). Pas d'animation sur `top`, `left`, `width`, `height`.
* **Prefers-Reduced-Motion** : Si l'utilisateur a configuré une réduction de mouvement, désactiver les transitions de déplacement et conserver un affichage immédiat ou de légers fondus.

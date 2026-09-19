# Directive : Transitions Naturelles & Expérience Fluide (UX Organique)

## 1. Objectifs & Philosophie
Offrir au site « Le Monde du Travail » une navigation naturelle, douce et continue, inspirée des standards d'excellence produit (Apple, Linear, Stripe). 
Les transitions ne doivent jamais être brusques, distrayantes ou précipitées, mais accompagner le regard de l'utilisateur avec élégance et stabilité.

---

## 2. Piliers d'Architecture

### A. Transitions Inter-Pages (Page Transitions)
* **Stabilité absolue du Header** :
  - La barre de navigation `.site-header` possède la propriété `view-transition-name: site-header;`.
  - Elle reste statique, immobile et parfaitement ancrée lors des changements de page. Seul le contenu (`#main-content`) effectue une transition douce.
* **Cross-Document View Transitions (Chromium 126+)** :
  - Déclarée via `@view-transition { navigation: auto; }`.
  - Le navigateur orchestre la transition nativement sans blocage artificiel par `e.preventDefault()`.
  - Courbe d'amorti organique : `cubic-bezier(0.22, 1, 0.36, 1)` avec une durée de **340ms à 380ms** et un micro-glissement vertical de 4px seulement (dissolving naturel).
* **Préchargement Intelligent (Hover & Touch Preload)** :
  - Au survol (`mouseenter`) ou au toucher (`touchstart`) d'un lien interne, le document cible est préchargé en arrière-plan via cache navigateur.
  - La navigation devient quasi-instantanée, éliminant tout écran blanc intermédiaire.
* **Fallback Universel sans saut de Header (Safari / Firefox)** :
  - La classe de sortie `content-is-exiting` s'applique exclusivement sur `#main-content` (et JAMAIS sur `body`, ce qui briserait `position: fixed`).
  - Durée de fondu douce (260ms) avec amorti naturel.
  - Écoute de l'événement `pageshow` (`bfcache`) pour assurer un retour/avance immédiat sans freeze.
* **Indicateur de Progression Épuré** :
  - Barre discrète de 2px aux teintes ambrées du club (`#f5a623`) avec progression continue fluide (sans sauts par à-coups ni néon criard).

### B. Scroll Reveal Organique & Sans FOUC
* **Zéro Clignotement au Chargement (FOUC)** :
  - Les éléments déjà visibles dans le viewport au moment de l'initialisation sont immédiatement marqués comme révélés.
* **Micro-déplacement Doux** :
  - Translation ramenée à **12-14px** (au lieu de 28-36px).
  - Courbe d'apparition : `0.5s cubic-bezier(0.22, 1, 0.36, 1)`.
* **Cascade (Stagger) Allégée** :
  - Délai échelonné de **35ms à 45ms** par élément (au lieu de 80ms) pour une arrivée vive mais ordonnée qui ne retarde pas la consultation.

### C. Tactilité & Micro-Interactions Apaisées
* **Cartes & Conteneurs** :
  - Élévation mesurée au survol : `-3px` (au lieu de `-6px`) et légère ouverture de l'ombre portée.
  - Zoom très doux de l'image : `scale(1.025)` (au lieu de `1.05`) sur `0.4s`.
  - Halo de reflet de curseur (`--mouse-x`, `--mouse-y`) subtil et discret.
* **Boutons & Éléments d'Action** :
  - Micro-pression tactile naturelle : `active: scale(0.98)` (au lieu de `0.96`).
  - Balayage lumineux satiné (`0.8s ease-out`).

---

## 3. Garde-Fous de Performance & Accessibilité
* **60/120 FPS Garanti** : Mouvement exclusivement calculé sur `transform` et `opacity` (GPU accelerated).
* **Respect de `prefers-reduced-motion`** : Désactivation instantanée de tout mouvement de translation pour les utilisateurs sensibles, remplacé par un simple fondu ou un affichage direct.

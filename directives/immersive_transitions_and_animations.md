# Directive : Transitions Naturelles & Expérience Fluide (UX Organique)

## 1. Objectifs & Philosophie
Offrir au site « Le Monde du Travail » une expérience immersive, fluide, moderne et mémorable :
```
« Ne pas regarder une page. Explorer un univers. »
« Tout est calme, mais tout est vivant. »
```
Chaque section est pensée comme une scène narrative avec des révélations coordonnées au scroll, des micro-interactions soignées, une profondeur multicouche subtile, et une continuité visuelle entre les scènes.

---

## 2. Motion Design Tokens & Primitives

### A. Échelles d'Amorti (Easings Organiques)
- `--ease-out-cinematic`: `cubic-bezier(0.16, 1, 0.3, 1)` (amorce vive, ralentissement soyeux et précis)
- `--ease-in-out-smooth`: `cubic-bezier(0.65, 0, 0.35, 1)` (transitions de fond et de scènes)
- `--ease-spring`: `cubic-bezier(0.34, 1.56, 0.64, 1)` (micro-rebond satiné sur badges et boutons)

### B. Échelle Temporelle (Durées)
- `--motion-instant`: `150ms` (press, tactile, retour direct)
- `--motion-quick`: `250ms` (hover, tabs, dropdowns)
- `--motion-base`: `400ms` (entrées de cartes, modales, dialogues)
- `--motion-scene`: `650ms` (révélations narratives et transitions de fond)

---

## 3. Piliers d'Architecture

### A. Transitions Inter-Pages (Page Transitions)
* **Stabilité absolue du Header** :
  - La barre de navigation `.site-header` possède la propriété `view-transition-name: site-header;`.
  - Elle reste statique, immobile et parfaitement ancrée lors des changements de page. Seul le contenu (`#main-content`) effectue une transition douce.
* **Cross-Document View Transitions (Chromium 126+)** :
  - Déclarée via `@view-transition { navigation: auto; }`.
  - Le navigateur orchestre la transition nativement sans blocage artificiel.
  - Courbe d'amorti organique : `cubic-bezier(0.16, 1, 0.3, 1)` avec une durée de **340ms à 380ms** et un micro-glissement vertical de 4px seulement.
* **Préchargement Intelligent (Hover & Touch Preload)** :
  - Au survol (`mouseenter`) ou au toucher (`touchstart`) d'un lien interne, le document cible est préchargé en cache navigateur.
* **Fallback Universel sans saut de Header (Safari / Firefox)** :
  - La classe `content-is-exiting` s'applique exclusivement sur `#main-content`.
  - Fondu doux de 260ms et écoute de `pageshow` (`bfcache`).
* **Indicateur de Progression Épuré** :
  - Barre discrète de 2.5px aux teintes ambrées du club (`#f5a623`) avec lissage continu.

### B. Scroll Reveal Organique & Scénarisation
* **Zéro Clignotement au Chargement (FOUC)** :
  - Les éléments situés au-dessus de la ligne de flottaison au chargement sont immédiatement activés (`is-revealed`).
* **Micro-déplacement & Échelonnage (Stagger)** :
  - Translation mesurée : 12-16px sur desktop, 8px sur mobile.
  - Cascade hiérarchique : Titre (0ms) -> Description (+100ms) -> CTA (+180ms) -> Visuels (+250ms).
  - Déclenchement unique (`observer.unobserve(el)`) pour ne pas fatiguer l'utilisateur lors du va-et-vient de scroll.

### C. Tactilité & Micro-Interactions Apaisées
* **Cartes & Conteneurs** :
  - Élévation mesurée au survol : `-3px` à `-4px` avec ombre portée diffuse.
  - Zoom image très doux : `scale(1.025)` sur `0.4s`.
  - Halo de reflet de curseur (`--mouse-x`, `--mouse-y`) doux et désactivé sur mobile/touch.
* **Boutons & Éléments d'Action** :
  - Micro-pression tactile : `active: scale(0.98)`.
  - Balayage lumineux satiné discret.

### D. Modale Métier & Formations (Exploration Cinématique)
* Séquence d'ouverture :
  1. Clic déclencheur.
  2. Backdrop progressif (`backdrop-filter: blur(8px)`, 200ms).
  3. Élévation de la fenêtre modale (`translateY(0) scale(1)`, 280ms).
  4. Révélation étagée de l'en-tête (badge, titre, méta, onglets).
* Navigation par onglets fluide : transition douce en `opacity + transform` sans saut de scroll.

---

## 4. Garde-Fous de Performance & Mobile-First
* **60/120 FPS Garanti** : Mouvements calculés exclusivement sur `transform` et `opacity`.
* **Mobile-First** : Pas de parallaxe complexe sur écran tactile, distances réduites de 50%, timings resserrés.
* **Respect strict de `prefers-reduced-motion`** : Zéro translation ou mouvement continu ; affichage direct ou simple fondu instantané.


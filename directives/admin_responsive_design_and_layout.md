# Directive : Ergonomie & Responsivité de la Console d'Administration

## 1. Objectif & Vue d'Ensemble
Cette directive définit les normes d'ergonomie et de conception adaptative (responsive design) pour la console d'administration de *Le Monde du Travail*. Elle garantit que l'équipe d'administration (Ultra Admin, Admin, Mentor, Rédacteur) dispose d'une expérience de gestion fluide, rapide et sans friction visuelle quel que soit le terminal utilisé (ordinateur de bureau, tablette, ou smartphone).

---

## 2. Architecture 3-Couches

### Couche 1 : Directive & Spécification des Breakpoints (L'Architecte)
* **Emplacement :** `directives/admin_responsive_design_and_layout.md`
* **Grille de Résolution :**
  - **Desktop (> 960px) :**
    - Sidebar de navigation latérale fixe (260px).
    - Topbar de hauteur 64px avec titre de page complet, bouton de recherche rapide `Ctrl K`, bouton de thème sombre/clair, nom et prénom de l'administrateur, bouton complet *"🌐 Voir le site"*.
    - Disposition multi-colonnes pour les cartes métriques et les formulaires.
  - **Tablette (641px - 960px) :**
    - Sidebar masquée par défaut et transformée en tiroir coulissant (drawer) déclenché par le menu hamburger.
    - Nom de l'utilisateur masqué dans la topbar pour préserver l'espace.
    - Bouton `Ctrl K` masqué ou condensé.
    - Titre avec gestion d'ellipse en cas de texte long.
  - **Mobile Smartphone (<= 640px) :**
    - Topbar compacte (54px) sans débordement horizontal (`overflow: hidden; flex-wrap: nowrap;`).
    - Menu hamburger tactile (surface de contact minimum 38x38px).
    - Titre tronqué proprement avec points de suspension (`text-overflow: ellipsis`) et police fluide `clamp(1rem, 3.8vw, 1.25rem)`.
    - Bouton *"Voir le site"* transformé en pastille d'icône compacte `🌐` (surface 38x38px, bord arrondi, infobulle `title="Voir le site public"`).
    - Bouton de recherche `Ctrl K` masqué (inutile sur clavier tactile).
    - Hero Header du dashboard réorganisé en colonne verticale avec espacements réduits (padding latéral de 1rem au lieu de 2rem).
    - Barre d'actions rapides réorganisée en grille à 2 colonnes régulières (50% / 50%).

### Couche 2 : Orchestration & Routage (L'Orchestrateur)
* **Fichiers :** `admin-frontend/index.html` et `admin-frontend/js/admin-pages.js`.
* **Comportement des Tiroirs et Modales :**
  - Fermeture automatique du tiroir de navigation mobile lors du clic sur un lien du menu.
  - Verrouillage du scroll d'arrière-plan (`body.admin-sidebar-open { overflow: hidden; }`) lors de l'ouverture du tiroir ou des modales.
  - Modales dimensionnées dynamiquement en fonction de la hauteur d'écran (`max-height: 92vh; overflow-y: auto;`).

### Couche 3 : Exécution & Feuilles de Style (Le Développeur)
* **Emplacement :** `admin-frontend/css/admin.css`
* **Règles Strictes :**
  - Aucun élément ne doit forcer un défilement horizontal de la page entière (`overflow-x: hidden` sur les conteneurs principaux).
  - Les tableaux de données complexes doivent être encapsulés dans un conteneur `.table-wrapper` avec `-webkit-overflow-scrolling: touch`.
  - Les champs de saisie, selects et textareas doivent respecter une taille de police minimale de 16px sur mobile pour empêcher le zoom automatique indésirable d'iOS Safari.

---

## 3. Checklist de Validation Pré-Ship
1. Tester la topbar en résolution 360px, 390px (iPhone) et 768px (iPad).
2. Vérifier que le titre de la page ne chevauche jamais les boutons d'action.
3. Vérifier que le bouton *"Voir le site"* s'affiche comme une pastille élégante sur mobile et avec texte sur grand écran.
4. Vérifier que le panneau hero et les actions rapides s'adaptent harmonieusement sans décalage.

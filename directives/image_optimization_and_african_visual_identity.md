# Directive : Optimisation des Images & Identité Visuelle Sénégalaise et Africaine

## 1. Contexte & Objectif
Le projet **Le Monde du Travail** est une initiative portée par et pour des jeunes Sénégalais et Africains. La plateforme doit refléter avec fierté et authenticité cette identité dans tous ses visuels (Hero, fiches métiers, formations, blog, pages de présentation), tout en garantissant des performances web de premier ordre (Core Web Vitals, LCP < 1.8s, CLS = 0).

---

## 2. Charte d'Identité Visuelle & Représentation Culturelle

### Critères Fondamentaux
1. **Représentation Culturelle Authentique** :
   - Tous les visuels représentant des personnes doivent mettre en avant la **jeunesse africaine et sénégalaise** : étudiants, diplômés, ingénieurs, techniciens, entrepreneurs, artisans, formateurs.
   - Bannir les photos génériques de banques d'images occidentales déconnectées du contexte local (réunions stéréotypées de la Silicon Valley, poignées de main caucasiennes).
2. **Diversité & Modernité** :
   - Célébrer l'innovation, la tech à Dakar (hubs, coworking, startups), l'agro-industrie moderne, le BTP, la santé, les énergies renouvelables et l'artisanat d'excellence.
   - Respecter la mixité hommes/femmes et la diversité des parcours professionnels.
3. **Esthétique & Clarté** :
   - Éclairage naturel ou studio valorisant, attitudes professionnelles, confiantes et engagées.

---

## 3. Normes Techniques & Performance Web

### Formats & Compression
1. **Format WebP systématique** pour tous les assets locaux (`frontend/images/*.webp`).
2. **Compression visuelle sans perte perceptible** :
   - Compression Pillow / cwebp à qualité `q=75-80` avec `method=6`.
   - Tailles cibles :
     - Hero background : **< 120 Ko** (responsive `srcset` multi-résolution 480w, 960w, 1200w).
     - Cartes piliers / valeurs (400×250) : **< 40 Ko**.
     - Miniatures et badges : **< 20 Ko**.
3. **Paramétrage CDN Unsplash (quand utilisé)** :
   - Toujours forcer : `auto=format,compress&q=65&fit=crop`.
   - Dimensionner `w` exactement au conteneur cible (`w=450` pour cartes, `w=960` pour Hero desktop).

### Attributs HTML Obligatoires
* **Above-the-fold (Hero)** :
  - `loading="eager"` (ou omission de lazy)
  - `fetchpriority="high"`
  - `decoding="async"`
  - `<link rel="preload" as="image" href="..." fetchpriority="high">`
* **Below-the-fold (Toutes les autres images)** :
  - `loading="lazy"`
  - `decoding="async"`
  - Attributs `width` et `height` obligatoires pour réserver l'espace géométrique et bloquer le CLS.

---

## 4. Nomenclature & Structure des Fichiers Locaux
- Dossier cible : `frontend/images/`
- Règles de nommage :
  - Minuscules strictes sans accents ni espaces : `orientation.webp`, `communication.webp`, `leadership.webp`, `innovation.webp`, `ethique.webp`, `citoyennete.webp`.
  - Proscrire les doublons `.jpg` / `.jpeg` / `.webp` avec accents (`citoyenneté.webp`).

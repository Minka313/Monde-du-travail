# Directive : Modern Card-Style Footer (Design Ataraxis-Like)

## 1. Contexte & Objectif
Moderniser le composant footer de la plateforme « Le Monde du Travail » pour lui conférer une esthétique institutionnelle haut de gamme et contemporaine, inspirée des interfaces dark/emerald premium :
- Structure en carte flottante aux bords adoucis (`border-radius: 28px`).
- Arrière-plan minéral sombre vert émeraude (`#0a2e28` / `#0d3932`) orné de lignes géométriques vectorielles discrètes.
- Organisation en 3 colonnes : Identité de marque + Mission + Réseaux + Bouton « Back to top », Plan du site, et Légal & Support.
- Bandeau inférieur ocre/ambré (`#d99228`) contrasté avec mentions légales et copyright.
- Rétrocompatibilité totale avec chargement dynamique (`layout.js`) et balisage de secours statique (évitant tout FOUC).

## 2. Fichiers et Composants Impactés
- `frontend/fragments/footer.html` : Fragment HTML maître pour injection dynamique via `layout.js`.
- `frontend/css/styles.css` : Classes CSS `.site-footer-wrapper`, `.site-footer`, `.footer-bg-lines`, `.footer-card`, `.footer-col`, `.footer-social-link`, `.footer-back-to-top`, `.footer-bottom-bar`.
- `frontend/js/layout.js` : Gestion de l'interactivité du bouton retour en haut de page (`back-to-top`).
- Pages HTML (`index.html`, `about.html`, `job.html`, `formations.html`, `forum.html`, `forum-topic.html`, `forum-create.html`, `blog.html`, `blog-post.html`, `login.html`, `profile.html`, `reset-password.html`) : Synchronisation du balisage statique.

## 3. Critères d'Acceptation & Qualité
- **Accessibilité (a11y)** : Contrastes conformes WCAG AA sur fond sombre et sur bandeau ambré. Attributs `aria-label` sur les icônes de réseaux sociaux et le bouton `back-to-top`.
- **Responsive** : Passage fluide de 3 colonnes sur desktop (> 992px) à 2 colonnes sur tablette (600px - 992px) et 1 colonne empilée sur mobile (< 600px).
- **Interactivité** : Smooth scroll natif lors du clic sur « BACK TO TOP ». Micro-animations sur les liens et boutons au survol.
- **Continuité visuelle** : Cohérence aussi bien en mode clair qu'en mode sombre.

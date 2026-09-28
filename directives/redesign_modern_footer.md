# Directive : Footer Moderne Centré aux Couleurs Officielles du Site

## 1. Contexte & Objectif
Adapter le concept de footer en carte flottante contemporaine à la charte graphique officielle de la plateforme « Le Monde du Travail » :
- **Palette officielle** : Dégradé bleu marine nuit (`#0f2b46` vers `#091b2e`), accents or/ambre chaleureux (`#f5a623`).
- **Logo officiel** : Utilisation de `logo.webp` / `logo.png` avec le titre officiel « Le Monde du Travail ».
- **Mise en page centrée** : Alignement centré de tous les blocs (identité, description, réseaux, colonnes de liens, bouton back-to-top et bandeau copyright).
- **Correction textuelle** : Utilisation stricte de l'expression : « Préparer **une relève** professionnelle de qualité, consciente et innovante. »

## 2. Fichiers et Composants Impactés
- `frontend/fragments/footer.html` : Balisage HTML maître centré.
- `frontend/css/styles.css` : Styles CSS `.site-footer`, `.footer-card`, `.footer-brand-centered`, `.footer-links-grid`, `.footer-socials`, `.footer-back-to-top`, `.footer-bottom-bar`.
- `execution/update_footer_html.py` : Script déterministe de propagation sur toutes les pages.
- Les 12 pages HTML du dossier `frontend/`.

## 3. Critères de Qualité
- Harmonie totale avec l'en-tête et le reste du site.
- Centrage parfait sur desktop et mobile.
- Support du défilement fluide (« Back to top »).
- Mode sombre et mode clair parfaitement intégrés.

# Directive : Footer Pleine Largeur, Centrage du Bandeau et Gestion Admin des Réseaux Sociaux

## 1. Contexte & Objectif
1. **Pleine Largeur (Edge-to-Edge)** : Le footer doit s'étendre sur 100% de la largeur du viewport sans marges latérales. Le fond bleu nuit et le bandeau jaune inférieur touchent les extrémités de l'écran.
2. **Centrage strict du bandeau jaune** : Le texte de copyright doit être centré horizontalement et verticalement sur tous les navigateurs (`display: flex; justify-content: center; align-items: center`).
3. **Gestion des Réseaux Sociaux via l'Espace Admin** :
   - Les administrateurs peuvent renseigner et modifier les URLs des réseaux sociaux (X/Twitter, LinkedIn, Instagram, Facebook, YouTube, TikTok) depuis l'interface d'administration (`#settings`).
   - Le frontend public récupère dynamiquement ces liens via l'API publique `/api/settings/public` et actualise les boutons du footer.

## 2. Architecture Technique
- **Backend** : `backend/src/services/settingsService.js` intègre les clés `social.twitter`, `social.linkedin`, `social.instagram`, `social.facebook`, `social.youtube`, `social.tiktok` dans `DEFAULT_SETTINGS` avec `category: 'reseaux'` et `isSensitive: false`.
- **Admin** : `admin-frontend/js/admin-pages.js` affiche le groupe « Réseaux Sociaux » dans l'onglet Paramètres.
- **Frontend CSS** : `frontend/css/styles.css` applique les styles pleine largeur (`width: 100%; border-radius: 0; padding: 0;`) et le centrage flexbox sur `.footer-bottom-bar`.
- **Frontend JS** : `frontend/js/layout.js` charge les paramètres publics pour injecter les liens dynamiques dans le footer.

# Directive : Gestion du Mode Maintenance de la Plateforme

## 1. Objectif & Vue d'Ensemble
Cette directive régit la gestion du mode maintenance du site *Le Monde du Travail*. Elle définit le comportement attendu côté backend (interception des requêtes API), côté frontend public (redirection automatique, affichage d'une page d'attente interactive et polling automatique de réouverture), et côté console d'administration (contrôle centralisé, édition des messages et prévisualisation).

---

## 2. Architecture 3-Couches

### Couche 1 : Directive & Spécification (L'Architecte)
* **Emplacement :** `directives/manage_platform_maintenance.md`
* **Règles d'Exemption (Bypass) :**
  - Routes d'authentification (`/api/auth/*`) toujours accessibles pour permettre la connexion administrateur.
  - Routes de paramètres (`/api/settings/*`) toujours accessibles pour permettre au frontend et aux pages publiques de vérifier le statut de la plateforme sans être bloqués.
  - Tout utilisateur authentifié disposant de la permission `settings.manage` ou de l'étoile d'Ultra Admin `*` traverse le middleware et peut naviguer sur le site pour tester ou corriger la plateforme.
* **Paramètres de Configuration :**
  - `platform.maintenanceMode` (`'true'` / `'false'`) : État d'activation du mode maintenance.
  - `platform.maintenanceMessage` : Message explicatif affiché aux visiteurs publics.
  - `platform.maintenanceEstimatedReturn` : Indication horaire ou temporelle estimée du retour en ligne.

### Couche 2 : Orchestration & Contrôle (L'Orchestrateur)
* **Middleware Backend :** `backend/src/middleware/maintenance.js`
  - Cache en mémoire avec TTL de 30 secondes pour minimiser les requêtes SQL.
  - Invalidation immédiate du cache lors de la modification via `resetMaintenanceCache()`.
  - Réponse HTTP 503 formatée avec code machine `MAINTENANCE`, message dynamique et heure de reprise estimée.
* **Service Paramètres :** `backend/src/services/settingsService.js`
  - Exposition transparente dans `getPublicSettings()` pour que le frontend public sache instantanément si la plateforme est ouverte.

### Couche 3 : Exécution & Interface (Le Développeur)
* **Page Publique de Maintenance :** `frontend/maintenance.html`
  - Page standalone, ultra-rapide, sans dépendance lourde.
  - Animation visuelle premium adaptée à l'identité visuelle de *Le Monde du Travail*.
  - Polling en temps réel toutes les 10 secondes : si la maintenance est levée, transition visuelle immédiate et redirection automatique vers l'accueil.
  - Affichage des liens vers les réseaux sociaux et email de contact.
  - Support du paramètre d'URL `?preview=1` permettant à l'administrateur de tester le rendu sans activer la maintenance pour les autres utilisateurs.
* **Détection Frontend :** `frontend/js/layout.js` et `frontend/js/frontend-api.js`
  - Interception des erreurs 503 et redirection vers `maintenance.html`.
  - Affichage d'un bandeau d'avertissement en haut de page pour les administrateurs connectés en mode maintenance.
* **Espace d'Administration :** `admin-frontend/js/admin-pages.js`
  - Bouton d'action rapide dans le Super Dashboard ouvrant une fenêtre de paramétrage (message, estimation, activation, bouton d'aperçu).
  - Gestion sécurisée avec ré-authentification pour la modification du statut sensible.

---

## 3. Procédure Opérationnelle d'Urgence

### Activer la maintenance via la console Admin
1. Se rendre sur `/admin-frontend/` -> Dashboard.
2. Cliquer sur "Basculer Maintenance" ou "⚙️ Configurer".
3. Renseigner le message et l'estimation de reprise.
4. Confirmer la saisie avec le mot de passe administrateur si demandé.

### Sortie de maintenance
1. Re-cliquer sur "Désactiver Maintenance" dans la console d'administration.
2. Les visiteurs actuellement sur `maintenance.html` seront automatiquement redirigés vers l'accueil sous 10 secondes sans aucune action manuelle.

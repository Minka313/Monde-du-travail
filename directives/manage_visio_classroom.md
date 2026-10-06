# Directive : Gestion des Sessions de Visioconférence en Direct (Salle Virtuelle)

## 1. Objectif & Contexte
Permettre l'animation d'ateliers pratiques, de masterclasses et de sessions de formation en ligne directement intégrées au sein de la plateforme **Le Monde du Travail**, sans dépendance à des logiciels payants ou des installations d'applications tierces (Zoom / Teams).

Le système repose sur le protocole standard **WebRTC** via l'API IFrame de **Jitsi Meet**, complété par une interface immersive propriétaire adaptée aux réalités d'infrastructure et de connectivité en Afrique de l'Ouest (Sénégal).

---

## 2. Architecture & Composants

### A. Flux de Données & Nommage des Salles
1. **Identifiant de salle déterministe & chiffré** :
   * Préfixe sécurisé : `lmdt-formation-[slug_ou_id]-[token]`
   * Évite toute collision ou intrusion extérieure non sollicitée.
2. **Gestion des Rôles** :
   * **Formateur / Modérateur (Admin)** : Accès avec privilèges de gestion de la salle (couper tous les micros, verrouillage, partage d'écran, enregistrement).
   * **Apprenant (Auditeur)** : Accès simplifié avec prénom/nom prérempli, microphone désactivé par défaut à l'entrée pour préserver la clarté audio.

### B. Prise en Compte des Spécificités Régionales (Sénégal)
1. **Mode Économie de Données (Low-Bandwidth Mode)** :
   * Commutateur dédié dans l'interface permettant de basculer en mode audio-prioritaire + partage d'écran, réduisant la consommation de 4G jusqu'à 85%.
2. **Accessibilité Mobile First** :
   * Prise en charge native des navigateurs Android (Chrome) et iOS (Safari) sans obliger au téléchargement d'application.
3. **Synergie Pédagogique Intégrée** :
   * La salle virtuelle ne se limite pas à la vidéo : elle intègre un bloc-notes personnel persistant et des passerelles directes vers les fiches métiers du club.

---

## 3. Spécifications Techniques

### Endpoints API (`backend/src/routes/formations.js`)
* `GET /api/formations/:id/visio` : Récupère l'état de la session visio (statut, nom de salle, heure programmée).
* `POST /api/formations/:id/visio/start` : Démarre la session en tant que formateur/modérateur.
* `POST /api/formations/:id/visio/stop` : Clôture la session en direct.

### Pages & Contrôleurs Frontend
* `frontend/visio.html` : Conteneur principal de la salle virtuelle.
* `frontend/js/visio.js` : Initialisation du SDK Jitsi, gestion des événements de session, mode bas débit et bloc-notes.
* `admin-frontend/js/admin-pages.js` : Outils formateur pour piloter les sessions.

---

## 4. Mode Opératoire de Déploiement & Auto-Réparation
* Les colonnes SQL associées (`visioEnabled`, `visioRoomId`, `visioStatus`, etc.) doivent disposer d'un fallback d'auto-création résilient pour ne pas bloquer les environnements serverless.
* Toute modification du code doit être validée par le script `execution/verify_visio_system.js` avant le push Git sur la branche `main`.

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

---

## Mise à jour (octobre 2026) : réunion ouverte dans un nouvel onglet

Le service public **meet.jit.si** n'autorise plus son intégration dans un autre site (coupure rapide), exige depuis août 2023 que la personne qui démarre la réunion se connecte (Google, GitHub ou Facebook) et limite les réunions à **95 minutes** depuis le 9 octobre 2026. La salle virtuelle fonctionne donc ainsi :

1. **L'animateur ouvre la salle** (Présidence, administrateur, ou mentor à qui la formation est confiée) : bouton « Ouvrir la salle » sur `visio.html?formation=<id ou slug>`, dans l'Espace Mentor ou dans l'admin. Un **nom de salle imprévisible** est généré (`lmdt-<formation>-<12 caractères>`) ; il change à chaque nouvelle session.
2. **Les participants** gardent `visio.html` ouverte : tant que la salle est fermée, la page l'indique et se met à jour toute seule (toutes les 30 s). Dès l'ouverture, le bouton **« Rejoindre la visio »** ouvre meet.jit.si dans un nouvel onglet, avec la langue, le nom et, si demandé, le **mode Éco-Data** (vidéo 180p, audio seul au départ) déjà réglés. Aucun compte n'est nécessaire pour eux.
3. **L'animateur rejoint** et se connecte avec **Google** quand Jitsi le demande ; les participants patientent jusqu'à son arrivée.
4. Au-delà de 95 minutes, l'animateur **ferme puis rouvre** la salle pour obtenir un nouveau lien.
5. **Fermer la salle** rend le lien inutilisable depuis le site.

Le nom de la salle n'apparaît ni dans la liste publique des formations ni dans leur fiche publique : seule `GET /api/formations/:id/visio` le donne, et uniquement quand la salle est ouverte.

## JaaS : réunion intégrée au site (octobre 2026)

- Activée dès que `JAAS_APP_ID`, `JAAS_KEY_ID` et `JAAS_PRIVATE_KEY` sont définies sur Vercel ; sinon retour automatique à meet.jit.si (nouvel onglet).
- `POST /api/formations/:id/visio/join` (connexion facultative, `{ name }`) renvoie `{ domain: '8x8.vc', roomName: '<AppID>/<salle>', scriptUrl, jwt, isModerator }` ; 409 si la salle est fermée.
- Jeton RS256 (`backend/src/services/jaasService.js`) : `kid = <AppID>/<KeyID>`, valable 4 h et pour la seule salle ouverte ; `moderator: "true"` pour l'animateur (`canHostVisio`) ; enregistrement, diffusion, transcription et appels désactivés (options payantes).
- Facturation JaaS au nombre de participants distincts par mois (gratuit jusqu'à 25) : surveiller le tableau de bord 8x8.

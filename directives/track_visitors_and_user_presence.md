# Directive : Suivi d'Audience, Visiteurs du Site & Présence des Membres

## 1. Objectifs & Philosophie
Permettre aux administrateurs de la plateforme « Le Monde du Travail » de mesurer en temps réel la fréquentation du site (visiteurs uniques, pages vues, répartition des appareils et tendances) et d'identifier avec précision les membres et personnes les plus présents et engagés.

---

## 2. Piliers d'Architecture

### A. Collecte & Suivi des Visiteurs (Audience Tracking)
* **Génération de l'identifiant visiteur** : Côté frontend, un jeton anonyme persistant `visitorId` (préfixé `lmt_v_...`) est stocké dans le `localStorage` du navigateur.
* **Émission non-bloquante** : À chaque chargement de page publique, un appel vers `POST /api/analytics/track` est émis via `navigator.sendBeacon` ou `fetch(..., { keepalive: true })`.
* **Stockage dans `audit_logs`** :
  - `module: 'analytics'`
  - `action: 'site.visit'`
  - `resource: path` (ex: `/formations.html`, `/job.html`)
  - `userId`: identifiant du compte si connecté, ou `null` si visiteur anonyme
  - `metadata`: `{ visitorId, path, device, referrer }`
  - `ipAddress`: adresse IP cliente anonymisée
  - `userAgent`: chaîne client pour détection de l'appareil (`desktop`, `mobile`, `tablet`)
* **Garde-fous** : Pas d'enregistrement en rafale (anti-flood par session/chemin), coût minimal en base.

### B. Mesure de Présence des Membres (« Les plus présents »)
* **Horodatage de dernière présence** :
  - Dès qu'un membre connecté navigue ou interagit, son champ `lastLoginAt` est mis à jour si sa dernière trace remonte à plus de 10 minutes (palier anti-écritures).
* **Indicateurs d'engagement** :
  - Nombre total de visites et de connexions enregistrées.
  - Nombre de sujets créés (`topics`) et de réponses postées (`replies`) sur le forum.
  - Statut en temps réel :
    - 🟢 **En ligne récemment** : Actif au cours des 30 dernières minutes.
    - 🟡 **Actif aujourd'hui** : Actif dans les dernières 24 heures.
    - ⚪ **Actif cette semaine** : Actif au cours des 7 derniers jours.
    - 💤 **Inactif** : Aucune activité depuis plus de 7 jours.

### C. Restitution & Expérience Administrateur
* **Tableau de bord principal (`#dashboard`)** :
  - KPIs synthétiques cliquables (`👁️ Visiteurs` et `👥 Top Présence`).
  - Section graphique de fréquentation (visites quotidiennes sur 7 jours, top 5 pages).
  - Tableau d'honneur des membres les plus présents avec podium (🥇 🥈 🥉), statut en direct et compteurs.
* **Module dédié (`#analytics`)** :
  - Vue d'ensemble complète avec filtres par période (7 jours, 30 jours, tout) et moteur de recherche de membres.

---

## 3. Garde-Fous de Sécurité & Confidentialité
* **RGPD & Anonymisation** : Aucune donnée biométrique ou traçage intrusif. Les adresses IP sont tronquées/anonymisées si nécessaire.
* **Performance** : Les calculs d'agrégation d'audience utilisent un cache mémoire serveur court (TTL 20s) pour garantir un affichage instantané sous 100ms.

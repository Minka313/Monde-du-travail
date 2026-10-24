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

---

## Profils visiteurs (questionnaire, localisation, parcours)

- **Questionnaire facultatif et anonyme** (3 étapes : situation, niveau d'études, 3 centres d'intérêt au maximum), proposé après 2 pages vues ou 45 s, rappel 7 jours après une fermeture ; modifiable depuis l'espace membre (« Mon profil d'orientation »). Code : `initProgressiveProfiling` / `window.VisitorSurvey` dans `frontend/js/main.js`.
- **Table `visitor_profiles`** (une ligne par identifiant de session du navigateur) : situation, niveau, intérêts, pays / région / ville, appareil, première et dernière visite, nombre de visites (nouvelle visite après 30 min d'inactivité), pages vues, temps passé.
- **Localisation** : en-têtes `x-vercel-ip-country`, `x-vercel-ip-country-region`, `x-vercel-ip-city` fournis par Vercel. Aucune adresse IP n'est stockée dans ce profil. En local, la localisation reste vide.
- **Temps passé** : envoyé à la sortie de page (`navigator.sendBeacon` vers `POST /api/analytics/engagement`), plafonné à 30 min par page.
- **Tableau de bord** : admin › Profils visiteurs (`GET /api/analytics/profiles?days=7|30|90|365`, permission `analytics.read`) ; indicateurs, répartitions, contenus consultés par profil, export CSV.
- Les événements de parcours (`job_view`, `formation_view`, `job_pdf`, `formation_pdf`…) sont rattachés à la situation déclarée.

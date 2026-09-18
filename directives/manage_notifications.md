# Directive : Gestion du Système de Notifications (Push Natives & In-App)

## 1. Objectif
Définir le mode opératoire, l'architecture et les règles d'intégrité pour le système de notifications du club **Le Monde du Travail**. Le système assure une diffusion instantanée des alertes sur mobile et bureau (style WhatsApp/Instagram/TikTok) même lorsque le navigateur est fermé.

---

## 2. Architecture & Composants

### A. Web Push RFC 8291 / 8292 & VAPID
- Le serveur utilise le standard IETF Web Push avec le package `web-push`.
- Les clés VAPID (publique et privée) sont gérées dans les variables d'environnement (`VAPID_PUBLIC_KEY`, `VAPID_PRIVATE_KEY`, `VAPID_SUBJECT`).
- La clé publique est fournie au navigateur via l'endpoint `GET /api/notifications/vapid-key`.
- Le Service Worker (`/sw.js`) s'abonne auprès du Push Service du navigateur (Google FCM, Mozilla Autopush, Apple APNs).
- Le serveur enregistre l'abonnement dans la table `push_subscriptions`.

### B. Centre In-App (Cloche 🔔)
- Présent dans l'en-tête du site public et de l'espace membre.
- Affiche le compteur de non-lus en temps réel.
- Panneau déroulant avec liste interactive des notifications, horodatage relatif, filtrage, et suppression/lecture.
- Carillon audio moderne lors de la réception active via Web Audio API.

### C. Déclencheurs Automatiques (Triggers)
1. **Formations** : Notification à la publication d'une formation (`FORMATION`).
2. **Métiers & Orientation** : Notification à la publication d'un nouveau métier (`JOB`).
3. **Blog** : Notification à la publication d'un article (`BLOG`).
4. **Forum** : Notification à l'auteur lors d'une nouvelle réponse à son sujet (`FORUM`).
5. **Adhésions & Bureau** : Notification personnelle lors de l'approbation d'un dossier ou de nomination (`MEMBERSHIP`, `ANNOUNCEMENT`).

---

## 3. Sécurité & Bonnes Pratiques
- Aucun token ou secret privé VAPID ne doit être exposé côté client.
- Les endpoints révoqués (code HTTP 410 Gone de Google/Apple) doivent être automatiquement nettoyés de la table `push_subscriptions`.
- L'envoi de notifications manuelles massives (Broadcast) est strictement restreint au rôle `ULTRA_ADMIN`.

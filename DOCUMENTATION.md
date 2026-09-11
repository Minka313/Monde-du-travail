# 📘 Documentation Complète — Plateforme « Le Monde du Travail »

> **Version** : 1.0.0  
> **Dernière mise à jour** : Septembre 2026  
> **Architecture** : Serverless (Vercel) + Backend Express.js + Prisma ORM + Supabase PostgreSQL  

---

## 📑 Table des Matières
1. [Vue d'Ensemble & Vision](#1-vue-densemble--vision)
2. [Architecture Technique & Stack](#2-architecture-technique--stack)
3. [Fonctionnalités Utilisateurs (Site Public & Membres)](#3-fonctionnalités-utilisateurs-site-public--membres)
4. [Espace d'Administration & Back-Office](#4-espace-dadministration--back-office)
5. [Sécurité & Gouvernance (De A à Z)](#5-sécurité--gouvernance-de-a-à-z)
6. [Modèle de Données (Schéma Prisma / Supabase)](#6-modèle-de-données-schéma-prisma--supabase)
7. [Cycle de Vie & Workflows](#7-cycle-de-vie--workflows)
8. [Déploiement, Configuration & Maintenance](#8-déploiement-configuration--maintenance)

---

## 1. Vue d'Ensemble & Vision

**« Le Monde du Travail »** est une plateforme web moderne conçue pour accompagner les étudiants, les jeunes diplômés, les professionnels en reconversion et les passionnés dans leur insertion et leur évolution professionnelle.

### Objectifs Principaux
* **Immersion Métiers** : Présenter des fiches métiers concrètes et vivantes (réalités du terrain, fourchettes de salaires, avantages, inconvénients, vidéos d'immersion).
* **Développement des Compétences** : Proposer un catalogue de formations certifiantes avec programmes détaillés (syllabus par module).
* **Vie Communautaire & Réseau** : Organiser des événements professionnels (ateliers, conférences, rencontres) et offrir un forum d'échange actif.
* **Actualités & Inspiration** : Diffuser des articles, retours d'expérience et guides pratiques via un blog enrichi.

---

## 2. Architecture Technique & Stack

L'architecture repose sur une séparation claire entre interfaces statiques servies par CDN, une API Serverless et une base de données cloud managée.

```
┌─────────────────────────────────────────────────────────────┐
│                       UTILISATEUR                           │
└──────────────┬───────────────────────────────┬──────────────┘
               │                               │
               ▼                               ▼
  ┌─────────────────────────┐     ┌─────────────────────────┐
  │  frontend/ (Site Public)│     │ admin-frontend/ (Admin) │
  │   HTML5 / Vanilla CSS   │     │    HTML5 / Vanilla CSS  │
  └────────────┬────────────┘     └────────────┬────────────┘
               │                               │
               └───────────────┬───────────────┘
                               │ Requêtes HTTPS / JSON
                               ▼
        ┌─────────────────────────────────────────────┐
        │       Vercel Serverless Edge Gateway        │
        │        (api/index.js - Express 4)           │
        ├─────────────────────────────────────────────┤
        │  • Helmet (Headers Sécurisés)               │
        │  • Rate Limiting (Protection Brute-Force)   │
        │  • CORS Strict                              │
        │  • Validation Zod                           │
        │  • JWT & Sessions Sécurisées (HttpOnly)     │
        │  • Moteur RBAC & Step-up Auth (Re-auth)     │
        │  • Mode Maintenance Dynamique               │
        └──────────────────────┬──────────────────────┘
                               │ Prisma ORM
                               ▼
        ┌─────────────────────────────────────────────┐
        │        Supabase (PostgreSQL Managé)         │
        │  • Pooling de connexions                    │
        │  • Direct URL pour migrations               │
        └─────────────────────────────────────────────┘
```

### Stack Technologique

| Composant | Technologie | Rôle |
| :--- | :--- | :--- |
| **Frontend Public** | HTML5, Vanilla CSS, JS Vanilla | Vitrine rapide, responsive, accessible, optimisée SEO sans framework lourd. |
| **Frontend Admin** | HTML5, Vanilla CSS, JS Vanilla | Console d'administration interactive (KPIs, formulaires, modération). |
| **Backend API** | Node.js, Express.js | API REST modulaire (contrôleurs, services, middlewares). |
| **ORM** | Prisma ORM 5.x | Typage strict du schéma de données, requêtes optimisées et migrations. |
| **Base de Données**| Supabase (PostgreSQL) | Stockage persistant hautement disponible avec SSL forcé. |
| **Déploiement** | Vercel | Hébergement hybride : CDN mondial pour le statique + Serverless Functions pour l'API. |

---

## 3. Fonctionnalités Utilisateurs (Site Public & Membres)

### 3.1. Navigation & Accueil (`frontend/index.html`)
* **Bannière d'accroche (Hero)** : Présentation de la mission du club et appels à l'action immédiats.
* **Sections dynamiques** : Aperçu des derniers métiers ajoutés, des formations à venir et des articles récents du blog.
* **Statistiques clés** : Compteurs d'adhérents, de formations disponibles et de métiers documentés.

### 3.2. Dossiers d'Immersion Métiers (`frontend/job.html`)
Chaque métier fait l'objet d'un dossier immersif complet :
* **Informations de référence** : Intitulé, catégorie (`TECH`, `ENERGIE`, `FINANCE`, `SECURITE`, `SANTE`, `EDUCATION`, `AUTRE`), domaine d'activité.
* **Missions & Compétences** : Liste de compétences techniques et relationnelles (Soft skills).
* **Études & Cursus** : Diplômes recommandés, parcours types et passerelles.
* **Réalités Terrain** : Avantages réels et contraintes/inconvénients du poste.
* **Salaires Indicatifs** : Échelle salariale détaillée (débutant, intermédiaire, senior).
* **Spécialisations & Sous-métiers** : Arborescence des évolutions professionnelles possibles.
* **Vidéo d'Immersion** : Intégration YouTube pour découvrir le métier en images.

### 3.3. Catalogue de Formations (`frontend/formations.html`)
* **Filtres de recherche** : Par domaine, niveau ou durée.
* **Fiche formation détaillée** :
  * Objectifs pédagogiques clairs.
  * Prérequis indispensables.
  * Public cible.
  * **Syllabus modulaire interactif** : Découpage par chapitres avec durées estimées et acquis attendus.
  * Certification ou attestation délivrée.
  * Vidéo de présentation.

### 3.4. Forum Communautaire (`frontend/forum.html`, `forum-topic.html`, `forum-create.html`)
* **Catégorisation des sujets** : Orientation, retours d'expérience, recherche de stages/emplois, questions techniques.
* **Discussions riches** : Création de topics avec tags et comptage de vues/réponses.
* **Fil de réponses** : Horodatage précis, affichage des auteurs et badges de statut.
* **Statuts spéciaux** : Sujets épinglés en haut de liste (`isPinned`), verrouillés (`isLocked`) ou marqués comme résolus (`isResolved`).

### 3.5. Blog & Actualités (`frontend/blog.html`, `blog-post.html`)
* **Articles éditoriaux** : Catégories thématiques (`CLUB`, `ATELIER`, `CONFERENCE`, `FORMATION`, `TEMOIGNAGE`, `ANNONCE`).
* **Format multimédia** : Image de couverture principale et galerie de photographies d'événements.
* **URLs conviviales (Slugs)** : Optimisation SEO pour chaque publication.

### 3.6. Espace Membre & Inscription (`frontend/login.html`)
* **Création de compte** : Inscription avec contrôle de sécurité du mot de passe.
* **Formulaire d'adhésion (`MembershipRequest`)** : Saisie de la lettre de motivation pour intégrer officiellement le club.
* **Suivi du statut** : Notification du statut de l'adhésion (`PENDING`, `APPROVED`, `REJECTED`).

---

## 4. Espace d'Administration & Back-Office

Accessible sur `/admin` (ou `/admin-frontend/index.html`), le tableau de bord est réservé aux administrateurs autorisés.

```
┌─────────────────────────────────────────────────────────────┐
│                 PANEL D'ADMINISTRATION                      │
├─────────────────────────────────────────────────────────────┤
│ [📊 Tableau de bord]      KPIs, Métriques, Demandes urgentes│
│ [💼 Gestion Métiers]      CRUD, validation, vidéos          │
│ [🎓 Gestion Formations]   Syllabus, certifications, statut  │
│ [📝 Gestion Blog]         Rédaction, relecture, publication │
│ [💬 Modération Forum]     Épingler, verrouiller, modérer    │
│ [👥 Utilisateurs]         Membres, demandes d'adhésion      │
│ [🛡️ Rôles & Accès (RBAC)] Attributions, permissions         │
│ [⚖️ Approbations (4-Eyes)] Validation des actions sensibles │
│ [📜 Journal d'Audit]      Historique complet des actions    │
│ [⚙️ Paramètres Système]   Maintenance, sécurité, options    │
└─────────────────────────────────────────────────────────────┘
```

### 4.1. Tableau de bord analytique (SuperDashboard)
* Compteurs instantanés : Utilisateurs inscrits, membres validés, fiches en ligne, articles publiés.
* File d'attente d'approbation : Affichage immédiat des actions en attente de signature par un second administrateur ou un Ultra-Admin.

### 4.2. Gestion Éditoriale des Contenus (Métiers, Formations, Blog)
* Système d'états : `DRAFT` (Brouillon) ➔ `PENDING_REVIEW` (En relecture) ➔ `PUBLISHED` (En ligne) ➔ `ARCHIVED` (Archivé).
* Protection contre la publication accidentelle : Seuls les profils ayant la permission dédiée (`jobs:publish`, `formations:publish`, etc.) peuvent mettre en ligne un contenu.

### 4.3. Modération du Forum
* Possibilité pour les modérateurs de :
  * Épingler un sujet important en tête de forum.
  * Verrouiller les discussions pour clore les débats houleux.
  * Marquer un sujet comme résolu.
  * Supprimer les messages inappropriés.

### 4.4. Gestion des Paramètres Système (`/settings`)
* **Mode Maintenance** : Bascule immédiate de la plateforme en maintenance avec message personnalisé aux visiteurs, tout en permettant aux administrateurs connectés de continuer à travailler.
* **Ré-authentification obligatoire** : La modification des paramètres critiques requiert la confirmation immédiate du mot de passe.

---

## 5. Sécurité & Gouvernance (De A à Z)

La plateforme intègre des pratiques de sécurité de niveau bancaire/entreprise pour garantir la confidentialité et l'intégrité des données.

### 5.1. Authentification & Gestion des Sessions
1. **Hachage des Mots de Passe** : Chiffrement irréversible avec `bcrypt` (10 rounds de salage).
2. **Architecture Double Token JWT** :
   * **Access Token** : Durée de vie courte (15 minutes), transmis dans le header d'autorisation.
   * **Refresh Token** : Durée de vie longue (30 jours), stocké dans un cookie sécurisé :
     * `HttpOnly` : Inaccessible au JavaScript client (immunité contre les vols par injection XSS).
     * `Secure` : Transmis uniquement via HTTPS en production.
     * `SameSite=Strict` : Protection native contre les attaques CSRF (Cross-Site Request Forgery).

### 5.2. Authentification à Double Facteur (2FA / TOTP)
* Standard TOTP (Time-based One-Time Password) compatible avec Google Authenticator, Microsoft Authenticator, etc.
* Processus en 2 étapes lors de la connexion :
  1. Validation du mot de passe ➔ génération d'un jeton temporaire restreint (`tempToken`).
  2. Vérification du code à 6 chiffres à usage unique ➔ délivrance de la session finale.

### 5.3. Contrôle d'Accès Basé sur les Rôles (RBAC Granulaire)
Le système ne se limite pas à un simple booléen « isAdmin ». Il repose sur une matrice de permissions précises :
* **Rôles Système** :
  * `VISITOR` : Consultation publique uniquement.
  * `MEMBER` : Accès aux espaces communautaires, participation au forum.
  * `ADMIN` : Rôle d'administration déléguée selon les permissions attribuées (ex: Administrateur Formations, Modérateur Forum).
  * `ULTRA_ADMIN` : Super-administrateur disposant d'un droit de regard et de validation universel (`*`).
* **Permissions par Module** : Exemples : `jobs:read`, `jobs:create`, `jobs:publish`, `formations:delete`, `forum:moderate`, `audit:read`.

### 5.4. Principe des 4 Yeux (Workflow d'Approbation à Double Contrôle)
Pour prévenir les erreurs critiques ou les actions malveillantes internes, les opérations sensibles nécessitent une approbation par un second administrateur :
* Attribution ou révocation de rôles administrateurs.
* Suppression définitive de comptes ou de volumes importants de données.
* Modification des paramètres système critiques.
* Cycle : Création de la demande (`PENDING`) ➔ Notification ➔ Examen par un pair / Ultra-Admin (`APPROVED` ou `REJECTED`).

### 5.5. Re-authentification (Step-up Authentication)
Même si un administrateur a déjà une session ouverte, toute opération hautement sensible (passage en mode maintenance, modification de la sécurité) déclenche un contrôle de mot de passe à la volée via le middleware `reauth.js`.

### 5.6. Journalisation & Piste d'Audit Complète (`AuditLog`)
Toute action administrative est enregistrée de manière immuable en base de données :
* Identifiant de l'auteur de l'action.
* Module et ressource ciblée.
* Type d'action effectuée (`create`, `update`, `delete`, `approve`).
* Adresse IP source et User-Agent (navigateur/OS).
* Diff/Métadonnées au format JSON.
* Horodatage précis à la milliseconde.

### 5.7. Sécurité Réseau & Défense Applicative
* **Helmet.js** : Masque les signatures du serveur (`X-Powered-By`) et configure les en-têtes HTTP de sécurité (Content-Security-Policy, X-Frame-Options, Strict-Transport-Security).
* **Rate Limiting** :
  * Global : Plafond à 500 requêtes / 15 min par IP.
  * Authentification : Plafond strict à 50 requêtes / 15 min pour interdire les attaques par force brute sur les mots de passe.
* **CORS Strict** : N'autorise que les origines déclarées (domaines officiels et prévisualisations Vercel).
* **Protection anti-DoS** : Limitation stricte de la taille du corps de requête (`express.json({ limit: '10kb' })`).
* **Validation des Entrées** : Schémas Zod pour rejeter toute donnée non conforme avant traitement métier.

---

## 6. Modèle de Données (Schéma Prisma / Supabase)

Le schéma relationnel PostgreSQL est modélisé dans `backend/prisma/schema.prisma`.

```
                    ┌─────────────────────────┐
                    │          User           │
                    ├─────────────────────────┤
                    │ id, email, password     │
                    │ firstName, lastName     │
                    │ role, 2FA, isActive     │
                    └──────┬───────────┬──────┘
                           │           │
           ┌───────────────┘           └──────────────┐
           ▼                                          ▼
┌─────────────────────┐                    ┌─────────────────────┐
│  MembershipRequest  │                    │    UserAdminRole    │
├─────────────────────┤                    ├─────────────────────┤
│ motivation, status  │                    │ roleId, status      │
│ reviewedBy, dates   │                    │ assignedBy, expires │
└─────────────────────┘                    └──────────┬──────────┘
                                                      │
                                                      ▼
┌─────────────────────┐                    ┌─────────────────────┐
│  ApprovalWorkflow   │                    │      AdminRole      │
├─────────────────────┤                    ├─────────────────────┤
│ resourceType, action│                    │ name, description   │
│ status, priority    │                    │ isSystem            │
└──────────┬──────────┘                    └──────────┬──────────┘
           │                                          │
           ▼                                          ▼
┌─────────────────────┐                    ┌─────────────────────┐
│    ApprovalStep     │                    │ AdminRolePermission │
├─────────────────────┤                    ├─────────────────────┤
│ approverRole, status│                    │ permissionId        │
└─────────────────────┘                    └──────────┬──────────┘
                                                      │
                                                      ▼
                                           ┌─────────────────────┐
                                           │     Permission      │
                                           ├─────────────────────┤
                                           │ code, module, action│
                                           └─────────────────────┘
```

### Principales Tables Métier

| Table | Description |
| :--- | :--- |
| `users` | Comptes utilisateurs, profils, états de vérification et secrets 2FA. |
| `jobs` | Fiches métiers complètes (salaires, compétences, études, sous-métiers, vidéos). |
| `formations` | Formations avec syllabus structuré, prérequis, objectifs et certifications. |
| `posts` | Articles du blog, actualités, photos de couverture et galeries. |
| `topics` & `replies` | Sujets et réponses du forum de discussion communautaire. |
| `events` | Événements du club (ateliers, conférences, visites, webinaires). |
| `admin_roles` | Définition des rôles d'administration personnalisés. |
| `permissions` | Catalogue des droits fins par module. |
| `user_admin_roles` | Jonction liant un utilisateur à un rôle avec validation. |
| `approval_workflows` | File d'attente des approbations à 4 yeux. |
| `audit_logs` | Piste d'audit et historique des événements de sécurité. |
| `settings` | Paires clé/valeur pour les paramètres système de la plateforme. |

---

## 7. Cycle de Vie & Workflows

### Cycle de Vie d'un Contenu Éditorial (Métier ou Formation)
```
  [ Création ]
       │
       ▼
 ┌───────────┐         Soumission
 │   DRAFT   │ ──────────────────────────┐
 └─────▲─────┘                           │
       │ Dépublication                   ▼
       │                          ┌───────────────┐
       │                          │ PENDING_REVIEW│
       │                          └───────┬───────┘
       │                                  │
       │                Validation Admin  │ Rejet / Corrections
       │               ┌──────────────────┴────────────────────┐
       │               ▼                                       ▼
 ┌─────┴─────┐  ┌─────────────┐                         ┌─────────────┐
 │ Dépublié  │  │  PUBLISHED  │                         │ Modif DRAFT │
 └───────────┘  └──────┬──────┘                         └─────────────┘
                       │
                       │ Archivage
                       ▼
                ┌─────────────┐
                │  ARCHIVED   │
                └─────────────┘
```

### Cycle d'Adhésion d'un Nouveau Membre
1. Inscription en ligne par l'utilisateur.
2. Soumission d'une demande avec lettre de motivation (`MembershipRequest`).
3. Examen du profil par le bureau du club dans l'interface admin.
4. Validation : Le compte passe à `APPROVED`, le statut `MEMBER` est activé, donnant accès au forum et aux événements privés.

---

## 8. Déploiement, Configuration & Maintenance

### 8.1. Déploiement Serverless sur Vercel
* Le fichier `vercel.json` route automatiquement :
  * `/api/*` vers la fonction serverless `api/index.js`.
  * `/health` vers le point de santé de l'API.
  * `/admin` vers l'application d'administration `admin-frontend/index.html`.
  * `/` et tous les fichiers statiques vers le dossier `frontend/`.
* Le schéma Prisma inclut `binaryTargets = ["native", "rhel-openssl-3.0.x"]` pour fonctionner de manière transparente dans l'environnement AWS Lambda de Vercel.

### 8.2. Variables d'Environnement Obligatoires
Dans Vercel ou dans `backend/.env` :

```env
# Base de données Supabase
DATABASE_URL="postgresql://postgres:[PASSWORD]@[HOST]:5432/postgres?sslmode=require"
DIRECT_URL="postgresql://postgres:[PASSWORD]@[HOST]:5432/postgres?sslmode=require"

# Clés de sécurité JWT
JWT_SECRET="une_cle_secrete_tres_longue_et_aleatoire"
JWT_REFRESH_SECRET="une_autre_cle_secrete_refresh_tres_longue"

# Configuration Supabase API
SUPABASE_URL="https://[PROJECT-REF].supabase.co"
SUPABASE_ANON_KEY="eyJhbGciOi..."

# Super-Administrateur initial
ULTRA_ADMIN_EMAIL="admin@monde-du-travail.com"

# Environnement
NODE_ENV="production"
```

### 8.3. Procédures Courantes (SOP)
* **Mise à jour du schéma de base de données** :
  ```bash
  cd backend
  node ./node_modules/prisma/build/index.js db push
  node ./node_modules/prisma/build/index.js generate
  ```
* **Injection des dossiers immersifs de démo (Seed)** :
  ```bash
  node execution/seed_dossiers.js
  ```
* **Sauvegarde manuelle de la base de données** :
  ```bash
  ./scripts/backup-db.sh
  ```

---

## 9. Conclusion

La plateforme **« Le Monde du Travail »** combine une interface moderne et fluide pour les utilisateurs, un back-office complet pour la gestion de contenu et de communauté, et un socle d'ingénierie sécurisé, résilient et conçu pour évoluer sans friction grâce à Supabase, Prisma et Vercel.

# Backend - Le Monde du Travail

API REST pour le club Le Monde du Travail.

## Stack technique

- **Runtime** : Node.js
- **Framework** : Express.js
- **Base de données** : PostgreSQL
- **ORM** : Prisma
- **Authentification** : JWT + bcrypt
- **Validation** : Zod
- **Sécurité** : Helmet, CORS, express-rate-limit
- **Logs** : Winston

## Installation

```bash
cd backend
npm install
```

## Configuration

Copier `.env.example` vers `.env` et modifier les variables :

```bash
cp .env.example .env
```

Variables importantes :
- `DATABASE_URL` : chaîne de connexion PostgreSQL
- `JWT_SECRET` : clé secrète pour les tokens (changer en production)
- `FRONTEND_URL` : URL du frontend autorisée pour CORS

## Base de données

### Migrations

```bash
npm run prisma:migrate
```

Pour appliquer les migrations existantes dans un environnement de déploiement :

```bash
npm run prisma:migrate:deploy
```

### Seed (données initiales)

```bash
npx prisma db seed
```

### Interface graphique (optionnel)

```bash
npx prisma studio
```

## Démarrage

### Développement (avec rechargement automatique)

```bash
npm run dev
```

### Production

```bash
npm start
```

Le serveur démarre sur `http://localhost:5000`

## Tests

```bash
npm test
```

## Structure du projet

```
backend/
├── prisma/
│   └── schema.prisma      # Schéma de base de données
├── src/
│   ├── config/
│   │   └── database.js    # Client Prisma
│   ├── middleware/
│   │   ├── auth.js        # Vérification JWT
│   │   ├── errorHandler.js # Gestion centralisée des erreurs
│   │   └── validate.js    # Validation Zod
│   ├── routes/
│   │   ├── auth.js        # /api/auth/*
│   │   ├── users.js       # /api/users/*
│   │   ├── events.js      # /api/events/*
│   │   ├── jobs.js        # /api/jobs/*
│   │   ├── formations.js  # /api/formations/*
│   │   ├── forum.js       # /api/forum/*
│   │   └── admin.js       # /api/admin/*
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── eventController.js
│   │   ├── jobController.js
│   │   ├── formationController.js
│   │   ├── forumController.js
│   │   └── adminController.js
│   ├── services/
│   │   ├── authService.js
│   │   ├── userService.js
│   │   ├── eventService.js
│   │   ├── jobService.js
│   │   ├── formationService.js
│   │   ├── forumService.js
│   │   └── adminService.js
│   └── app.js             # Point d'entrée Express
├── logs/                  # Logs applicatifs
├── tests/                 # Tests unitaires et d'intégration
├── .env                   # Variables d'environnement
├── .env.example
├── .gitignore
└── package.json
```

## Endpoints API

### Authentification
- `POST /api/auth/register` - Inscription
- `POST /api/auth/login` - Connexion
- `POST /api/auth/refresh` - Rafraîchir le token
- `POST /api/auth/logout` - Déconnexion
- `GET /api/auth/me` - Profil utilisateur connecté

### Utilisateurs (permission `users.*`)
- `GET /api/users?search=&role=&status=&verified=&page=&limit=` - Liste filtrable (rôles admin effectifs inclus)
- `GET /api/users/:id` - Détail d'un utilisateur
- `PUT /api/users/:id` - Modifier profil (liste blanche : nom/prénom uniquement)
- `POST /api/users/:id/activate` - Activer un compte (`users.suspend`)
- `POST /api/users/:id/deactivate` - Désactiver un compte (`users.suspend`)
- `POST /api/users/:id/verify` - Vérifier un compte (`users.verify`)
- `DELETE /api/users/:id` - Supprimer un utilisateur (`users.delete` + confirmation par mot de passe)

### Événements
- `GET /api/events` - Liste des événements
- `GET /api/events/:id` - Détail d'un événement
- `POST /api/events` - Créer un événement (admin)
- `PUT /api/events/:id` - Modifier un événement (admin)
- `DELETE /api/events/:id` - Supprimer un événement (admin)

### Métiers (workflow éditorial)
- `GET /api/jobs` - Liste publique (contenu publié uniquement)
- `GET /api/jobs/admin/list?status=&mine=&search=&category=` - Liste admin filtrable
- `GET /api/jobs/:id` - Détail d'un métier
- `POST /api/jobs` - Créer un métier (brouillon) (`metier.create`)
- `PUT /api/jobs/:id` - Modifier (`metier.update`)
- `POST /api/jobs/:id/submit` - Soumettre à validation (`metier.update`)
- `POST /api/jobs/:id/publish` - Publier (`metier.publish`)
- `POST /api/jobs/:id/unpublish` - Dépublier (`metier.publish`)
- `POST /api/jobs/:id/archive` - Archiver (`metier.archive`)
- `DELETE /api/jobs/:id` - Supprimer (`metier.delete`)

### Formations (workflow éditorial)
- `GET /api/formations` - Liste publique (contenu publié uniquement)
- `GET /api/formations/admin/list?status=&mine=&search=&category=` - Liste admin filtrable
- `GET /api/formations/:id` - Détail d'une formation
- `POST /api/formations` - Créer une formation (brouillon) (`formation.create`)
- `PUT /api/formations/:id` - Modifier (`formation.update`)
- `POST /api/formations/:id/submit` - Soumettre à validation (`formation.update`)
- `POST /api/formations/:id/publish` - Publier (`formation.publish`)
- `POST /api/formations/:id/unpublish` - Dépublier (`formation.publish`)
- `POST /api/formations/:id/archive` - Archiver (`formation.archive`)
- `DELETE /api/formations/:id` - Supprimer (`formation.delete`)

### Forum
- `GET /api/forum` - Liste des sujets
- `GET /api/forum/:id` - Détail d'un sujet avec réponses
- `POST /api/forum` - Créer un sujet (membre/admin)
- `POST /api/forum/:topicId/replies` - Ajouter une réponse (membre/admin)
- `DELETE /api/forum/:id` - Supprimer un sujet (admin)

### Administration
- `GET /api/admin/stats` - Statistiques (staff admin)
- `GET /api/admin/memberships/pending` - Adhésions en attente (`membership.read`)
- `POST /api/admin/memberships/:id/approve|reject` - Traiter une adhésion (`membership.approve`)
- `GET /api/admin/admins` - Attributions de rôles (`admins.read`)
- `POST /api/admin/admins/:id/approve|reject` - Valider une attribution (`admins.approve`)
- `POST /api/admin/admins/:id/suspend|reactivate` - Suspendre / réactiver (`admins.suspend`)
- `POST /api/admin/admins/:id/revoke` - Révoquer (`admins.revoke` + mot de passe)

### RBAC (rôles & permissions)
- `GET /api/rbac/roles` · `GET /api/rbac/permissions` - Catalogue (`admins.read`)
- `POST /api/rbac/roles` - Créer un rôle (`admins.create`)
- `PUT /api/rbac/roles/:id` - Modifier (`admins.update` + mot de passe ; rôle ULTRA_ADMIN immuable)
- `DELETE /api/rbac/roles/:id` - Supprimer (`admins.delete` + mot de passe)
- `POST /api/rbac/users/roles` - Attribuer un rôle (`admins.assign`)
- `POST /api/rbac/users/roles/remove` - Retirer un rôle (`admins.assign`)
- `GET /api/rbac/audit-logs?module=&action=&result=&from=&to=&page=` - Journal d'audit (`logs.read`)

### Approbations
- `GET /api/approvals/pending` - Demandes en attente (`approvals.read`)
- `POST /api/approvals/:id/approve|reject|cancel` - Traiter (`approvals.manage`)
- L'approbation d'une demande `publish` publie automatiquement la ressource

### Paramètres de plateforme
- `GET /api/settings` - Liste (`settings.manage`)
- `PUT /api/settings/:key` - Modifier (mot de passe requis si le paramètre est sensible)

## Administration & RBAC

L'administration repose sur **une seule source de vérité** : les tables `AdminRole` /
`AdminRolePermission` / `UserAdminRole`. Le champ `User.role` n'est qu'un cache du
niveau de base (`VISITOR` < `MEMBER` < `ADMIN` < `ULTRA_ADMIN`), synchronisé
automatiquement : une attribution approuvée promeut en `ADMIN`, la révocation du
dernier rôle rétrograde en `MEMBER`, le rôle ULTRA_ADMIN effectif promeut en
`ULTRA_ADMIN`.

### Rôles système
- `ULTRA_ADMIN` : toutes les permissions (bypass `*`), rôle racine immuable
- `ADMIN_FORMATION` : module Formations (lecture, création, modification, publication, archivage, suppression)
- `ADMIN_METIER` : module Métiers (idem)
- `ADMIN_BLOG` : module Blog
- `ADMIN_FORUM` : modération du Forum

L'ULTRA_ADMIN peut créer des rôles personnalisés et composer les permissions
au grain `module.action` (catalogue dans `src/scripts/seed-rbac.js`).

### Workflow éditorial
`DRAFT → PENDING_REVIEW → PUBLISHED → (DRAFT | ARCHIVED)`.
Avec la permission `formation.publish` (ou `metier.publish`) la publication est
directe ; sans elle, la soumission crée une demande d'approbation traitée dans
la boîte « Approbations ».

### Actions critiques
Suppression d'utilisateur, révocation de rôle, modification/suppression de rôle
et paramètres sensibles exigent le mot de passe de l'appelant dans l'en-tête
`x-confirm-password` (réponses `REAUTH_REQUIRED` / `REAUTH_INVALID`).
Garde-fous absolus : pas d'auto-suppression, pas de suppression/désactivation
d'un compte Ultra Admin, pas de révocation du dernier Ultra Admin, permissions
du rôle ULTRA_ADMIN immuables.

Tout est journalisé dans `AuditLog` (acteur, action, module, IP, résultat),
consultable avec filtres dans l'onglet « Journal d'activité ».

## Sécurité

- Authentification par JWT avec refresh token
- Mots de passe hashés avec bcrypt (12 rounds)
- Protection des routes par rôle
- Rate limiting sur toutes les routes
- Headers de sécurité avec Helmet
- Validation systématique des entrées avec Zod
- Gestion centralisée des erreurs
- Logs applicatifs

## Scripts disponibles

```bash
npm start          # Démarrer en production
npm run dev        # Démarrer en développement (nodemon)
npm test           # Lancer les tests
npm run prisma:generate   # Générer le client Prisma
npm run prisma:migrate    # Créer une migration
npm run prisma:studio     # Ouvrir Prisma Studio
npm run prisma:seed       # Peupler la base de données
```
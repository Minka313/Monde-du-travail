# Le Monde du Travail

Plateforme web du club **Le Monde du Travail** : orientation professionnelle, fiches métiers, formations, blog et forum communautaire, avec un espace d'administration complet.

🌐 Site en ligne : <https://monde-du-travail.vercel.app>

![CI](https://github.com/Minka313/Monde-du-travail/actions/workflows/ci.yml/badge.svg)

## Sommaire

- [Fonctionnalités](#fonctionnalités)
- [Architecture](#architecture)
- [Démarrage en local](#démarrage-en-local)
- [Tests et qualité](#tests-et-qualité)
- [Déploiement](#déploiement)
- [Sécurité](#sécurité)
- [Documentation](#documentation)

## Fonctionnalités

- **Orientation** : catalogue de plus de 500 fiches métiers, quiz et roue d'orientation.
- **Formations** : catalogue, inscriptions et salles de visioconférence (Jitsi).
- **Blog** et **forum** : publication, likes, modération, signalements.
- **Espace membre** : adhésion soumise à validation, profil, notifications.
- **Espace bureau** : chaque poste (secrétariat, trésorerie, pôles…) rédige ses rapports selon un modèle adapté et les soumet à la Présidence, qui les valide ou demande des corrections ; échéances, synthèse et export PDF (voir [`directives/manage_club_organization.md`](directives/manage_club_organization.md)).
- **Administration** : rôles et permissions par module (RBAC), circuit de validation des contenus, journal d'audit, double authentification (2FA), mode maintenance, statistiques.

## Architecture

| Partie | Technologie | Dossier |
| :--- | :--- | :--- |
| Site public | HTML, CSS et JavaScript sans framework | [`frontend/`](frontend/) |
| Console d'administration | HTML, CSS et JavaScript sans framework | [`admin-frontend/`](admin-frontend/) |
| API REST | Node.js, Express, Zod, JWT | [`backend/`](backend/) |
| Base de données | PostgreSQL (Supabase) via Prisma | [`backend/prisma/`](backend/prisma/) |
| Hébergement | Vercel : fichiers statiques + fonction serverless [`api/index.js`](api/index.js) | [`vercel.json`](vercel.json) |

Le routage des pages, de l'API et de la page 404 est défini dans [`vercel.json`](vercel.json).

## Démarrage en local

### Prérequis

- Node.js 22 ou plus récent
- Une base PostgreSQL : de préférence locale (par exemple `docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=postgres postgres:16`)

### Installation

```bash
npm install            # dépendances racine (Vercel, ESLint)
cd backend
npm install            # dépendances de l'API
cp .env.example .env   # puis compléter les valeurs
```

Variables indispensables dans `backend/.env` : `DATABASE_URL`, `DIRECT_URL`, `JWT_SECRET`, `JWT_REFRESH_SECRET`, `FRONTEND_URL`. Les autres (emails Resend, notifications VAPID, stockage Cloudflare R2) sont décrites dans [`backend/.env.example`](backend/.env.example).

### Base de données

```bash
cd backend
npx prisma migrate deploy   # crée les tables à partir des migrations versionnées
npm run prisma:seed         # contenu initial, rôles et compte Ultra Admin
```

#### Modifier la structure de la base

La structure est versionnée dans [`backend/prisma/migrations/`](backend/prisma/migrations/) ; `0_init` décrit la base de production telle qu'elle existait à l'introduction des migrations.

1. Modifier [`schema.prisma`](backend/prisma/schema.prisma), puis générer la migration **sur une base locale** :
   `npx prisma migrate dev --create-only --name description_courte`
2. Relire le SQL généré : il ne doit contenir **aucune suppression imprévue** (`DROP TABLE`, `DROP COLUMN`).
3. Après validation, appliquer en production : `npx prisma migrate deploy` avec `DIRECT_URL` pointant vers Supabase.

Ne jamais utiliser `prisma db push` ni `prisma migrate reset` contre la production.

Le seed exige `ULTRA_ADMIN_EMAIL` et `ULTRA_ADMIN_PASSWORD` dans `backend/.env`.

### Lancer le projet

```bash
cd backend && npm run dev      # API sur http://localhost:5000
npx serve . -l 3000            # depuis la racine, dans un second terminal
```

Puis ouvrir <http://localhost:3000/frontend/index.html> (site) ou <http://localhost:3000/admin-frontend/login.html> (administration). En local, le site appelle automatiquement l'API sur `localhost:5000`.

## Tests et qualité

```bash
cd backend && npm test   # tests d'intégration de l'API (Jest + Supertest)
npm run lint             # depuis la racine : ESLint sur l'API, le site et l'admin
```

- ⚠️ **Les tests suppriment des données.** Ils refusent de démarrer si `DATABASE_URL` ne pointe pas vers une base locale. Ne jamais les lancer contre Supabase.
- Les tests créent leurs propres comptes : aucun identifiant réel n'est nécessaire.
- La [CI GitHub Actions](.github/workflows/ci.yml) lance les tests et le lint à chaque push sur `main` et sur chaque pull request, avec une base PostgreSQL jetable.
- ESLint est en phase d'introduction : les règles signalent sans bloquer.

### Catalogue d'orientation et fiches métiers

Les fiches métiers (`job-detail.html`) chargent un fichier pré-calculé `frontend/data/jobs/<slug>.json` (~2 Ko compressé) au lieu du catalogue complet. **Après toute modification d'un fichier `frontend/js/orientation-*.js`**, régénérer ces fichiers et les commiter :

```bash
npm run build:job-data
```

La CI échoue si les fichiers ne sont plus à jour. Les modifications faites dans l'admin (table `jobs`) restent appliquées à l'affichage.

## Déploiement

Chaque push sur `main` déclenche un déploiement automatique sur Vercel. Les variables d'environnement de production se configurent dans Vercel (*Settings → Environment Variables*) ; la liste complète est dans [`directives/deploy_vercel.md`](directives/deploy_vercel.md).

> Une variable modifiée dans Vercel n'est prise en compte qu'au déploiement suivant (*Deployments → Redeploy*).

## Sécurité

- **Aucun secret dans le dépôt** : mots de passe, clés et URL de base de données vivent uniquement dans `backend/.env` (ignoré par git) et dans Vercel.
- Les sessions sont des jetons JWT ; changer un mot de passe révoque toutes les sessions ouvertes avec l'ancien.
- Le contenu HTML des articles est nettoyé par [DOMPurify](https://github.com/cure53/DOMPurify) avant affichage.
- Pour signaler une faille, contacter les responsables du club directement plutôt que d'ouvrir une issue publique.

## Documentation

- [`DOCUMENTATION.md`](DOCUMENTATION.md) : documentation fonctionnelle et technique complète.
- [`backend/README.md`](backend/README.md) : détails de l'API.
- [`directives/`](directives/) : procédures (déploiement, base Supabase, maintenance, notifications…).

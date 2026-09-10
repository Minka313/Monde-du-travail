# SOP: Déploiement et Maintenance sur Vercel

## Contexte
L'application "Le Monde du Travail" est configurée pour être déployée sur **Vercel** :
- **Frontends statiques** : `frontend/` (site public) et `admin-frontend/` (espace administrateur) servis via le réseau CDN mondial de Vercel.
- **Backend API Express** : Servi en serverless via `api/index.js` et routé par `vercel.json`.
- **Base de Données** : PostgreSQL hébergé sur Supabase.

---

## 1. Variables d'Environnement Vercel

Sur le dashboard de votre projet Vercel (**Project Settings > Environment Variables**) :

| Variable | Valeur / Description | Environnements |
| :--- | :--- | :--- |
| `DATABASE_URL` | `postgresql://postgres:BayeMoyMinka@db.vbyileuqgzooedcwjoxe.supabase.co:5432/postgres?sslmode=require` | Production, Preview, Development |
| `DIRECT_URL` | `postgresql://postgres:BayeMoyMinka@db.vbyileuqgzooedcwjoxe.supabase.co:5432/postgres?sslmode=require` | Production, Preview, Development |
| `JWT_SECRET` | Clé secrète JWT complexe | Production, Preview, Development |
| `JWT_REFRESH_SECRET` | Clé secrète Refresh JWT complexe | Production, Preview, Development |
| `SUPABASE_URL` | `https://vbyileuqgzooedcwjoxe.supabase.co` | Production, Preview, Development |
| `SUPABASE_ANON_KEY` | `sb_publishable_n0L0_d-EP3swfxCszP4FaQ_Fd2kOUNW` | Production, Preview, Development |
| `NODE_ENV` | `production` | Production |

---

## 2. Déploiement Automatique via GitHub

1. Commiter et pousser les modifications sur la branche `main` de GitHub :
   ```bash
   git add .
   git commit -m "feat: configuration déploiement Vercel et Supabase"
   git push origin main
   ```
2. Si le projet n'est pas encore importé sur Vercel :
   - Rendez-vous sur [vercel.com/new](https://vercel.com/new).
   - Sélectionnez le dépôt `Minka313/Monde-du-travail`.
   - Laissez le Framework Preset sur **Other** (racine).
   - Renseignez les variables d'environnement listées ci-dessus.
   - Cliquez sur **Deploy**.
3. Tout commit futur sur `main` déclenchera automatiquement un redéploiement.

---

## 3. Points d'Attention & Bonnes Pratiques
- **Prisma Engines** : Le fichier `backend/prisma/schema.prisma` inclut `binaryTargets = ["native", "rhel-openssl-3.0.x"]` pour assurer l'exécution dans les fonctions AWS Lambda de Vercel.
- **Routage** : `vercel.json` route automatiquement `/api/*` vers l'application Express sans altérer les URL des assets statiques.

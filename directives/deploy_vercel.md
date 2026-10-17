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
| `DATABASE_URL` | `postgresql://postgres.[PROJECT-REF]:[MOT_DE_PASSE]@aws-0-[REGION].pooler.supabase.com:6543/postgres?sslmode=require&pgbouncer=true&connection_limit=5&pool_timeout=20` (à copier depuis Supabase > Connect, ne jamais commiter) | Production, Preview, Development |
| `DIRECT_URL` | `postgresql://postgres:[MOT_DE_PASSE]@db.[PROJECT-REF].supabase.co:5432/postgres?sslmode=require` (ne jamais commiter) | Production, Preview, Development |
| `JWT_SECRET` | Clé secrète JWT complexe | Production, Preview, Development |
| `JWT_REFRESH_SECRET` | Clé secrète Refresh JWT complexe | Production, Preview, Development |
| `SUPABASE_URL` | `https://[PROJECT-REF].supabase.co` | Production, Preview, Development |
| `SUPABASE_ANON_KEY` | Clé publishable du projet (Supabase > Settings > API Keys) | Production, Preview, Development |
| `NODE_ENV` | `production` | Production |
| `ULTRA_ADMIN_EMAIL` | `khadimoulbarham@gmail.com` (Email recevant les alertes d'adhésion) | Production, Preview, Development |
| `RESEND_API_KEY` | Clé API Resend (`re_...` créée sur [resend.com](https://resend.com)) | Production, Preview, Development |
| `EMAIL_FROM` | `Le Monde du Travail <onboarding@resend.dev>` (ou votre domaine vérifié) | Production, Preview, Development |
| `VAPID_PUBLIC_KEY` / `VAPID_PRIVATE_KEY` | Clés Web Push générées par `node execution/generate_vapid_keys.js` (la clé privée ne doit jamais être commitée) | Production, Preview, Development |
| `VAPID_SUBJECT` | `mailto:` de contact pour les notifications push | Production, Preview, Development |
| `R2_ACCOUNT_ID`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY` | Identifiants Cloudflare R2 (upload d'images ; sans eux l'upload est refusé en production) | Production, Preview |
| `R2_BUCKET_NAME`, `R2_PUBLIC_DOMAIN` | Bucket R2 et domaine public servant les fichiers | Production, Preview |

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

# SOP: Configuration & Exploitation de la Base Supabase

## Contexte
La base de données relationnelle du club "Le Monde du Travail" est hébergée sur **Supabase** (PostgreSQL managé).
Le backend Express interagit avec Supabase via **Prisma ORM**.

## Architecture & Paramètres d'Environnement
Dans `backend/.env` :
- `DATABASE_URL` : Chaîne de connexion PostgreSQL vers le pooler transactionnel Supabase (ex: `postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres?sslmode=require&pgbouncer=true&connection_limit=5&pool_timeout=20`). **Obligatoire en Serverless (Vercel) pour éviter l'erreur EMAXCONNSESSION (limite 15 connexions en session mode)**.
- `DIRECT_URL` : URL directe sur le port 5432 utilisée exclusivement par Prisma pour les migrations (`directUrl` dans `schema.prisma`).
- `SUPABASE_URL` : URL de l'API Supabase (pour intégrations client ou stockage de fichiers).
- `SUPABASE_ANON_KEY` : Clé publique anonyme Supabase.

## Procédures Opérationnelles

### 1. Synchronisation du Schéma
Quand le fichier `backend/prisma/schema.prisma` est modifié :
```bash
cd backend
node ./node_modules/prisma/build/index.js db push
node ./node_modules/prisma/build/index.js generate
```

### 2. Ré-injection des Données Initiales (Seed Idempotent)
Le script de seed est idempotent (il ne recrée pas les doublons) :
```bash
cd backend
node prisma/seed.js
```

### 3. Consultation des Tables
- Directement sur le dashboard web Supabase (section **Table Editor**).
- Ou localement via Prisma Studio :
```bash
cd backend
node ./node_modules/prisma/build/index.js studio
```

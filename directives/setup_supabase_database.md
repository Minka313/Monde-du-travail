# SOP: Configuration & Exploitation de la Base Supabase

## Contexte
La base de données relationnelle du club "Le Monde du Travail" est hébergée sur **Supabase** (PostgreSQL managé).
Le backend Express interagit avec Supabase via **Prisma ORM**.

## Architecture & Paramètres d'Environnement
Dans `backend/.env` :
- `DATABASE_URL` : Chaîne de connexion PostgreSQL vers le cluster Supabase (ex: `postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres?sslmode=require`).
- `DIRECT_URL` : Même URL directe pour les migrations et synchronisations Prisma (`directUrl` dans `schema.prisma`).
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

# SOP : Architecture Hybride Cloudflare R2 (Le Bouclier) & Rétention Analytics Supabase

## 1. Objectif & Contexte
Cette directive régit l'hébergement des médias sur Cloudflare R2 avec bouclier CDN Edge et la politique de rétention automatique des événements d'analyse sur Supabase via `pg_cron`.
Elle garantit :
- Zéro dépassement des quotas gratuits Supabase Storage (1 Go) et Base de données (500 Mo).
- Un temps de réponse inférieur à 50ms sur 99% des requêtes médias mondiales grâce au CDN Edge Cloudflare.
- Rétrocompatibilité totale avec les URLs existantes (Supabase Storage et Unsplash).

---

## 2. Configuration Cloudflare R2 (Le Bouclier CDN)

### A. Variables d'Environnement Requises (Backend & Vercel)
| Variable | Description | Exemple |
| :--- | :--- | :--- |
| `R2_ACCOUNT_ID` | ID de compte Cloudflare | `a1b2c3d4e5f6...` |
| `R2_ACCESS_KEY_ID` | Clé d'accès API R2 | `9f8e7d6c5b4a...` |
| `R2_SECRET_ACCESS_KEY` | Clé secrète API R2 | `1a2b3c4d5e6f...` |
| `R2_BUCKET_NAME` | Nom du bucket Cloudflare R2 | `monde-du-travail-assets` |
| `R2_PUBLIC_DOMAIN` | Domaine personnalisé CDN proxyfié (Orange Cloud) | `https://media.lemondedutravail.com` |

### B. Association du Domaine Personnalisé (Nuage Orange)
1. Dans le tableau de bord Cloudflare, naviguer vers **R2** > Sélectionner le bucket `monde-du-travail-assets`.
2. Ouvrir l'onglet **Settings** > Section **Custom Domains** > Cliquer sur **Connect Domain**.
3. Renseigner `media.lemondedutravail.com` et valider. L'entrée DNS est automatiquement proxifiée (nuage orange activé).
4. Créer une **Cache Rule** dans **Caching** > **Cache Rules** :
   - Règle : `Hostname equals media.lemondedutravail.com`
   - Edge TTL : `Respect origin` ou `1 year`
   - Cache Everything

### C. Règle d'Immuabilité du Cache
Tout fichier envoyé via `R2StorageService` génère une clé préfixée et fingerprinted (`{folder}/{YYYY}/{MM}/{timestamp}-{hash}-{nom}.{ext}`) avec l'en-tête forcé :
```http
Cache-Control: public, max-age=31536000, immutable
```
Comme chaque nouveau fichier possède une URL unique, le cache navigateur et CDN ne devient jamais obsolète lors de la mise à jour d'une fiche métier ou formation.

---

## 3. Rétention et Sauvetage Base de Données (Supabase `pg_cron`)

### A. Fichier de Migration SQL
Le script se trouve dans `backend/prisma/migrations/analytics_retention_cron.sql`. Il doit être exécuté dans l'**Éditeur SQL** de Supabase.

### B. Fonctionnement Nocturne (02:00 AM UTC)
1. **Agrégation idempotente** : Calcule les totaux d'événements, sessions uniques et utilisateurs uniques de la veille par type d'événement, profil et entité dans `analytics_daily_stats`.
2. **Purge des données brutes** : Supprime les entrées de `analytics_events` vieilles de plus de 30 jours (`created_at < CURRENT_DATE - INTERVAL '30 days'`).
3. **Pérennité** : La volumétrie de la base de données reste constante même avec des millions de vues.

---

## 4. Rétrocompatibilité & Modèle de Données
Le champ `image` dans les tables `Job` et `Formation` accepte :
- Les anciennes URLs Supabase Storage : `https://*.supabase.co/storage/v1/object/public/...`
- Les liens externes : `https://images.unsplash.com/...`
- Les nouvelles URLs CDN R2 : `https://media.lemondedutravail.com/...`

Le frontend restitue ces URLs de façon transparente grâce à `safeUrl(item.image)`.

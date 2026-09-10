#!/usr/bin/env bash
# Sauvegarde de la base PostgreSQL du club.
# Usage : ./scripts/backup-db.sh
# Planifié automatiquement chaque dimanche soir (voir crontab -l).
set -euo pipefail

PROJET="$(cd "$(dirname "$0")/.." && pwd)"
source_env="$PROJET/backend/.env"
dest="$PROJET/backups"

# Extraction robuste de DATABASE_URL depuis le .env (avec ou sans guillemets)
raw_url=$(grep -E '^[[:space:]]*DATABASE_URL=' "$source_env" | head -1 | sed -E 's/^[[:space:]]*DATABASE_URL=["'"'"']?([^"'"'"']+)["'"'"']?[[:space:]]*$/\1/')
DB_URL=$(echo "$raw_url" | sed -E 's/([?&])schema=public(&|$)/\1/' | sed 's/[?&]$//')

if [[ -z "$DB_URL" ]]; then
  echo "❌ DATABASE_URL introuvable ou invalide dans $source_env" >&2
  exit 1
fi

mkdir -p "$dest"
horodatage=$(date +%Y%m%d-%H%M%S)
fichier="$dest/mondedutravail-$horodatage.sql.gz"

if pg_dump "$DB_URL" | gzip > "$fichier"; then
  echo "✅ Sauvegarde créée : $fichier ($(du -h "$fichier" | cut -f1))"
else
  echo "❌ Échec de la sauvegarde" >&2
  rm -f "$fichier"
  exit 1
fi

# Conservation des 10 dernières sauvegardes uniquement
ls -1t "$dest"/mondedutravail-*.sql.gz 2>/dev/null | tail -n +11 | xargs -r rm --
echo "🧹 Conservation des 10 dernières sauvegardes"

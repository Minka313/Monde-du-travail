#!/usr/bin/env bash
# Sauvegarde de la base PostgreSQL du club.
# Usage : ./scripts/backup-db.sh
# Planifié automatiquement chaque dimanche soir (voir crontab -l).
set -euo pipefail

PROJET="$(cd "$(dirname "$0")/.." && pwd)"
source_env="$PROJET/backend/.env"
dest="$PROJET/backups"

# Extraction de DATABASE_URL depuis le .env (sans l'exposer dans les logs)
if [[ ! -f "$source_env" ]]; then
  echo "❌ $source_env introuvable" >&2
  exit 1
fi
DB_URL=$(grep '^DATABASE_URL' "$source_env" | head -1 | cut -d'"' -f2 | sed 's/?schema=public//')

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

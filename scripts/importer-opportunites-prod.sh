#!/usr/bin/env bash
# Met en ligne les fiches « Concours & opportunités » de scripts/data/opportunites sur la base de production :
#  1. crée les annonces absentes (les annonces existantes et les corrections de l'admin ne sont pas touchées) ;
#  2. complète les annonces existantes avec enrichissements/*.json, uniquement là où un champ est vide.
# Les identifiants sont lus dans backend/.env (jamais affichés). Ajouter --dry pour un essai sans écriture.
set -euo pipefail

cd "$(dirname "$0")/../backend"
if [ ! -f .env ]; then
  echo "backend/.env introuvable : impossible de joindre la base de production." >&2
  exit 1
fi

set -a
. ./.env
set +a
unset NODE_ENV

DRY=""
[ "${1:-}" = "--dry" ] && DRY="--dry"

node src/scripts/import-opportunities.js $DRY
node src/scripts/import-opportunities.js --enrich $DRY

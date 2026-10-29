#!/usr/bin/env bash
# Applique les migrations Prisma en attente sur la base de production (Supabase).
# N'ajoute que ce qui manque : `prisma migrate deploy` ne supprime ni ne réinitialise rien.
# Les identifiants sont lus dans backend/.env (jamais affichés). Délai de connexion allongé à
# 60 s : avec une connexion lente, Prisma abandonne sinon au bout de 5 s (erreur P1001).
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

case "${DIRECT_URL:-}" in
  *connect_timeout=*) ;;
  *\?*) DIRECT_URL="${DIRECT_URL}&connect_timeout=60" ;;
  ?*) DIRECT_URL="${DIRECT_URL}?connect_timeout=60" ;;
  *) echo "DIRECT_URL absent de backend/.env." >&2; exit 1 ;;
esac
export DIRECT_URL

npx prisma migrate deploy

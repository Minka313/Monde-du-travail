#!/usr/bin/env bash
# Enregistre dans GitHub (secrets chiffrés du dépôt) les accès nécessaires à la
# sauvegarde automatique hebdomadaire de la base (.github/workflows/sauvegarde.yml).
#
# Usage, une seule fois : ./scripts/configurer-sauvegardes.sh
# Prérequis : gh connecté (gh auth status), backend/.env avec la base et le stockage,
# ~/.secrets/sauvegarde-mot-de-passe.txt (mot de passe de chiffrement, à garder précieusement).
set -euo pipefail

PROJET="$(cd "$(dirname "$0")/.." && pwd)"
ENV_FILE="$PROJET/backend/.env"
PASS_FILE="$HOME/.secrets/sauvegarde-mot-de-passe.txt"
REPO="Minka313/Monde-du-travail"

lire() {
  grep -E "^[[:space:]]*$1=" "$ENV_FILE" | head -1 | sed -E "s/^[[:space:]]*$1=[\"']?([^\"']*)[\"']?[[:space:]]*$/\1/"
}

[[ -f "$ENV_FILE" ]] || { echo "❌ $ENV_FILE introuvable" >&2; exit 1; }
[[ -f "$PASS_FILE" ]] || { echo "❌ $PASS_FILE introuvable" >&2; exit 1; }

# Connexion directe à la base (sans les paramètres propres à Prisma)
DB_URL="$(lire DIRECT_URL)"
[[ -n "$DB_URL" ]] || DB_URL="$(lire DATABASE_URL)"
DB_URL="$(echo "$DB_URL" | sed -E 's/([?&])(schema=public|pgbouncer=true|connection_limit=[0-9]+)(&|$)/\1/g; s/[?&]$//')"

declare -A SECRETS=(
  [BACKUP_DATABASE_URL]="$DB_URL"
  [BACKUP_S3_ENDPOINT]="$(lire STORAGE_S3_ENDPOINT)"
  [BACKUP_S3_REGION]="$(lire STORAGE_S3_REGION)"
  [BACKUP_S3_ACCESS_KEY_ID]="$(lire STORAGE_ACCESS_KEY_ID)"
  [BACKUP_S3_SECRET_ACCESS_KEY]="$(lire STORAGE_SECRET_ACCESS_KEY)"
  [BACKUP_PASSPHRASE]="$(cat "$PASS_FILE")"
)

for nom in "${!SECRETS[@]}"; do
  valeur="${SECRETS[$nom]}"
  [[ -n "$valeur" ]] || { echo "❌ Valeur vide pour $nom" >&2; exit 1; }
  printf '%s' "$valeur" | gh secret set "$nom" --repo "$REPO"
  echo "✅ $nom"
done

echo "Lancement d'une première sauvegarde de contrôle…"
gh workflow run sauvegarde.yml --repo "$REPO"
echo "✅ Terminé. Suivi : https://github.com/$REPO/actions/workflows/sauvegarde.yml"

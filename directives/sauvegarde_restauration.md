# Sauvegardes de la base et veille du site

## Ce qui tourne automatiquement (GitHub Actions)

| Tâche | Quand | Rôle |
|---|---|---|
| `sauvegarde.yml` | chaque dimanche à 23 h (UTC = heure de Dakar), et à la demande | copie complète de la base, chiffrée AES-256, rangée dans l'espace de stockage **privé** `backups` (Supabase Storage) ; les 12 dernières sont gardées |
| `veille.yml` | toutes les heures | vérifie l'accueil, l'API et la base ; en cas de panne la tâche échoue et **GitHub envoie un e-mail** ; chaque passage garde la base Supabase gratuite éveillée |

Le dépôt est public : aucune sauvegarde n'est jamais conservée dans GitHub, seulement dans l'espace privé, et toujours chiffrée.

**Attention :** GitHub suspend les tâches planifiées d'un dépôt public sans aucun commit pendant 60 jours. Un commit (même minime) ou un clic sur « Enable workflow » dans l'onglet Actions les relance.

## Mise en place (une seule fois)

1. Le mot de passe de chiffrement est dans `~/.secrets/sauvegarde-mot-de-passe.txt`.
   **Copie-le aussi dans un gestionnaire de mots de passe** : sans lui, les sauvegardes sont illisibles.
2. Depuis la racine du projet : `./scripts/configurer-sauvegardes.sh`
   (enregistre les accès dans les secrets chiffrés du dépôt et lance une première sauvegarde).
3. Vérifier le résultat : onglet **Actions** du dépôt → « Sauvegarde de la base ».

## Lancer une sauvegarde tout de suite

`gh workflow run sauvegarde.yml --repo Minka313/Monde-du-travail` (ou bouton « Run workflow » dans l'onglet Actions).

## Restaurer

À faire seulement en cas d'incident, de préférence d'abord sur une base de test.

```bash
# 1. Récupérer la sauvegarde voulue (identifiants du stockage dans backend/.env)
export AWS_ACCESS_KEY_ID=… AWS_SECRET_ACCESS_KEY=… AWS_DEFAULT_REGION=…
aws s3 ls s3://backups/ --endpoint-url "$STORAGE_S3_ENDPOINT"
aws s3 cp s3://backups/mondedutravail-AAAAMMJJ-HHMM.dump.gpg . --endpoint-url "$STORAGE_S3_ENDPOINT"

# 2. Déchiffrer
gpg --batch --passphrase-file ~/.secrets/sauvegarde-mot-de-passe.txt -d mondedutravail-AAAAMMJJ-HHMM.dump.gpg > sauvegarde.dump

# 3. Restaurer (PostgreSQL 17) — remplace le contenu de la base cible
pg_restore --clean --if-exists --no-owner --no-privileges -d "postgresql://…/postgres" sauvegarde.dump
```

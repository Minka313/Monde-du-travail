#!/usr/bin/env node
/**
 * Déménagement des fichiers multimédias d'un stockage S3 vers un autre
 * (ex. Supabase Storage → Cloudflare R2), puis mise à jour des liens en base.
 *
 *   node src/scripts/migrate-media-storage.js --dry    compte ce qui serait copié et remplacé
 *   node src/scripts/migrate-media-storage.js          copie les fichiers puis réécrit les liens
 *
 * Source : STORAGE_S3_ENDPOINT, STORAGE_S3_REGION, STORAGE_ACCESS_KEY_ID,
 *          STORAGE_SECRET_ACCESS_KEY, STORAGE_BUCKET, STORAGE_PUBLIC_URL
 * Cible  : DEST_S3_ENDPOINT, DEST_ACCESS_KEY_ID, DEST_SECRET_ACCESS_KEY,
 *          DEST_BUCKET, DEST_PUBLIC_URL (région « auto » pour R2)
 *
 * Les fichiers gardent leur chemin : seule la base d'URL change dans la base de données
 * (toutes les colonnes texte et JSON du schéma public). Relançable sans risque :
 * un fichier déjà présent à l'identique dans la cible n'est pas recopié.
 */
const { S3Client, ListObjectsV2Command, GetObjectCommand, PutObjectCommand, HeadObjectCommand } = require('@aws-sdk/client-s3');
const prisma = require('../config/database');

const trimSlash = (value) => String(value || '').replace(/\/+$/, '');

function storage(prefix, { region, forcePathStyle }) {
  const env = (name) => process.env[`${prefix}_${name}`];
  const endpoint = env('S3_ENDPOINT');
  const missing = ['S3_ENDPOINT', 'ACCESS_KEY_ID', 'SECRET_ACCESS_KEY', 'BUCKET', 'PUBLIC_URL'].filter((n) => !env(n));
  if (missing.length) throw new Error(`Configuration ${prefix} incomplète : ${missing.map((n) => `${prefix}_${n}`).join(', ')}`);
  return {
    bucket: env('BUCKET'),
    publicUrl: trimSlash(env('PUBLIC_URL')),
    client: new S3Client({
      region: env('S3_REGION') || region,
      endpoint,
      forcePathStyle,
      credentials: { accessKeyId: env('ACCESS_KEY_ID'), secretAccessKey: env('SECRET_ACCESS_KEY') },
    }),
  };
}

async function listAll(src) {
  const objects = [];
  let token;
  do {
    // eslint-disable-next-line no-await-in-loop
    const page = await src.client.send(new ListObjectsV2Command({ Bucket: src.bucket, ContinuationToken: token }));
    objects.push(...(page.Contents || []));
    token = page.NextContinuationToken;
  } while (token);
  return objects;
}

async function alreadyCopied(dest, key, size) {
  try {
    const head = await dest.client.send(new HeadObjectCommand({ Bucket: dest.bucket, Key: key }));
    return head.ContentLength === size;
  } catch (_) {
    return false;
  }
}

async function copyObjects(src, dest, objects, dry) {
  let copied = 0;
  let skipped = 0;
  for (const object of objects) {
    // eslint-disable-next-line no-await-in-loop
    if (await alreadyCopied(dest, object.Key, object.Size)) { skipped += 1; continue; }
    if (dry) { copied += 1; continue; }
    // eslint-disable-next-line no-await-in-loop
    const source = await src.client.send(new GetObjectCommand({ Bucket: src.bucket, Key: object.Key }));
    // eslint-disable-next-line no-await-in-loop
    const body = Buffer.from(await source.Body.transformToByteArray());
    // eslint-disable-next-line no-await-in-loop
    await dest.client.send(new PutObjectCommand({
      Bucket: dest.bucket,
      Key: object.Key,
      Body: body,
      ContentType: source.ContentType || 'application/octet-stream',
      // Noms de fichiers uniques (horodatés) : mise en cache longue durée
      CacheControl: source.CacheControl || 'public, max-age=31536000, immutable',
    }));
    copied += 1;
  }
  return { copied, skipped };
}

// Colonnes texte et JSON du schéma public contenant l'ancienne base d'URL
async function columnsWithUrl(oldBase) {
  const columns = await prisma.$queryRaw`
    SELECT table_name, column_name, data_type FROM information_schema.columns
    WHERE table_schema = 'public' AND data_type IN ('text', 'character varying', 'jsonb', 'ARRAY')
      AND table_name NOT LIKE '\\_prisma%'`;
  const hits = [];
  for (const col of columns) {
    const expr = col.data_type === 'text' || col.data_type === 'character varying' ? `"${col.column_name}"` : `"${col.column_name}"::text`;
    // eslint-disable-next-line no-await-in-loop
    const [{ count }] = await prisma.$queryRawUnsafe(
      `SELECT COUNT(*)::int AS count FROM "${col.table_name}" WHERE ${expr} LIKE '%' || $1 || '%'`, oldBase,
    );
    if (count) hits.push({ ...col, count });
  }
  return hits;
}

async function rewriteUrls(hits, oldBase, newBase) {
  await prisma.$transaction(hits.map((col) => {
    const column = `"${col.column_name}"`;
    let set;
    if (col.data_type === 'jsonb') set = `${column} = replace(${column}::text, $1, $2)::jsonb`;
    else if (col.data_type === 'ARRAY') set = `${column} = string_to_array(replace(array_to_string(${column}, chr(31)), $1, $2), chr(31))`;
    else set = `${column} = replace(${column}, $1, $2)`;
    const cast = col.data_type === 'text' || col.data_type === 'character varying' ? column : `${column}::text`;
    return prisma.$executeRawUnsafe(`UPDATE "${col.table_name}" SET ${set} WHERE ${cast} LIKE '%' || $1 || '%'`, oldBase, newBase);
  }));
}

async function run({ dry = false } = {}) {
  const src = storage('STORAGE', { region: 'us-east-1', forcePathStyle: true });
  const dest = storage('DEST', { region: 'auto', forcePathStyle: true });
  if (src.publicUrl === dest.publicUrl) throw new Error('Source et cible identiques : rien à faire');

  const objects = await listAll(src);
  const files = await copyObjects(src, dest, objects, dry);
  console.log(`${dry ? '[essai] ' : ''}Fichiers : ${files.copied} à copier${dry ? '' : ' copiés'}, ${files.skipped} déjà présents, sur ${objects.length}.`);

  const hits = await columnsWithUrl(src.publicUrl);
  hits.forEach((h) => console.log(`  ${h.table_name}.${h.column_name} : ${h.count} ligne(s)`));
  if (!dry && hits.length) await rewriteUrls(hits, src.publicUrl, dest.publicUrl);
  console.log(`${dry ? '[essai] ' : ''}Liens : ${hits.reduce((n, h) => n + h.count, 0)} ligne(s) ${dry ? 'à mettre à jour' : 'mises à jour'} vers ${dest.publicUrl}.`);
  return { objects: objects.length, ...files, rows: hits.reduce((n, h) => n + h.count, 0) };
}

if (require.main === module) {
  require('dotenv').config();
  run({ dry: process.argv.includes('--dry') })
    .catch((error) => { console.error(error.message); process.exitCode = 1; })
    .finally(() => prisma.$disconnect());
}

module.exports = { run, columnsWithUrl, rewriteUrls };

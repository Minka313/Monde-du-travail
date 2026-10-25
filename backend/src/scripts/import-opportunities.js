#!/usr/bin/env node
/**
 * Import des annonces « Concours & opportunités » depuis scripts/data/opportunites/*.json.
 *
 *   node src/scripts/import-opportunities.js            crée les annonces absentes (par slug)
 *   node src/scripts/import-opportunities.js --update   met aussi à jour le contenu des annonces existantes
 *   node src/scripts/import-opportunities.js --update --fields=domains,location
 *                                                       ne met à jour que ces champs (le reste est conservé)
 *   node src/scripts/import-opportunities.js --dry      vérifie les fichiers sans rien écrire
 *
 * Par défaut, une annonce déjà présente n'est jamais modifiée : les corrections faites
 * dans l'espace admin sont conservées. Chaque annonce est validée avec les mêmes règles
 * que l'API d'administration. Une annonce dont le lien officiel a été contrôlé
 * (linkChecked) est publiée ; les autres restent en brouillon pour vérification.
 */
const fs = require('fs');
const path = require('path');
const { z } = require('zod');
const prisma = require('../config/database');
const OpportunityService = require('../services/opportunityService');
const { fields } = require('../services/opportunityFields');

const DATA_DIR = path.resolve(__dirname, '..', '..', '..', 'scripts', 'data', 'opportunites');
const itemSchema = z.object({
  ...fields,
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'slug en minuscules et tirets'),
  linkChecked: z.boolean().optional(),
}).strict();

function loadItems() {
  const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith('.json')).sort();
  const items = [];
  const errors = [];
  for (const file of files) {
    const { items: list = [], defaultSourceNote } = JSON.parse(fs.readFileSync(path.join(DATA_DIR, file), 'utf8'));
    list.forEach((raw, index) => {
      const parsed = itemSchema.safeParse(raw);
      if (!parsed.success) {
        errors.push(`${file} #${index + 1} (${raw.slug || raw.title}) : ${parsed.error.errors.map((e) => `${e.path.join('.')} ${e.message}`).join(' ; ')}`);
        return;
      }
      items.push({ ...parsed.data, sourceNote: parsed.data.sourceNote || defaultSourceNote || null, file });
    });
  }
  const seen = new Set();
  items.forEach((it) => {
    if (seen.has(it.slug)) errors.push(`slug en double : ${it.slug}`);
    seen.add(it.slug);
  });
  return { items, errors };
}

async function run({ update = false, dry = false, only = null } = {}) {
  const { items, errors } = loadItems();
  if (errors.length) {
    errors.forEach((e) => console.error(`✖ ${e}`));
    throw new Error(`${errors.length} annonce(s) invalide(s) : rien n'a été importé`);
  }
  if (dry) {
    console.log(`✔ ${items.length} annonces valides (aucune écriture)`);
    return { created: 0, updated: 0, skipped: 0, total: items.length };
  }

  const author = await prisma.user.findFirst({ where: { role: 'ULTRA_ADMIN' }, select: { id: true } });
  const now = new Date();
  const stats = { created: 0, updated: 0, skipped: 0, total: items.length };

  for (const item of items) {
    const { slug, linkChecked } = item;
    // file et markVerified ne sont pas des champs de l'annonce
    const input = { ...item };
    ['slug', 'linkChecked', 'file', 'markVerified'].forEach((key) => delete input[key]);
    const data = OpportunityService.buildData(input);
    const existing = await prisma.opportunity.findUnique({ where: { slug }, select: { id: true } });
    if (existing && !update) {
      stats.skipped += 1;
      continue;
    }
    const verified = Boolean(linkChecked && data.officialUrl);
    if (existing && only) {
      const picked = Object.fromEntries(Object.entries(data).filter(([key]) => only.includes(key)));
      if (Object.keys(picked).length) await prisma.opportunity.update({ where: { slug }, data: picked });
      stats.updated += 1;
    } else if (existing) {
      await prisma.opportunity.update({ where: { slug }, data: { ...data, ...(verified ? { lastVerifiedAt: now } : {}) } });
      stats.updated += 1;
    } else {
      await prisma.opportunity.create({
        data: {
          ...data,
          slug,
          lastVerifiedAt: verified ? now : null,
          status: verified ? 'PUBLISHED' : 'DRAFT',
          createdById: author?.id || null,
        },
      });
      stats.created += 1;
    }
  }
  console.log(`✔ Import terminé : ${stats.created} créée(s), ${stats.updated} mise(s) à jour, ${stats.skipped} conservée(s) telles quelles, sur ${stats.total}.`);
  return stats;
}

if (require.main === module) {
  const fieldsArg = process.argv.find((arg) => arg.startsWith('--fields='));
  const only = fieldsArg ? fieldsArg.slice('--fields='.length).split(',').map((f) => f.trim()).filter(Boolean) : null;
  run({ update: process.argv.includes('--update'), dry: process.argv.includes('--dry'), only })
    .catch((error) => { console.error(error.message); process.exitCode = 1; })
    .finally(() => prisma.$disconnect());
}

module.exports = { run, loadItems, DATA_DIR };

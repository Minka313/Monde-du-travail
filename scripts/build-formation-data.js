#!/usr/bin/env node
/**
 * Valide les fiches formations (frontend/data/formations/<slug>.json) et génère
 * l'index du catalogue (frontend/data/formations/index.json) lu par formations.html.
 *
 * Contrôles : champs obligatoires, quiz cohérent (réponse existante), métiers liés
 * présents dans le catalogue (frontend/data/jobs), liens en https.
 *
 * Usage : node scripts/build-formation-data.js          (valide et régénère l'index)
 *         node scripts/build-formation-data.js --check  (échoue si invalide ou index périmé)
 */
const fs = require('fs');
const path = require('path');

const FRONTEND = path.resolve(__dirname, '..', 'frontend');
const DIR = path.join(FRONTEND, 'data', 'formations');
const INDEX = path.join(DIR, 'index.json');
const JOBS_DIR = path.join(FRONTEND, 'data', 'jobs');

const REQUIRED = ['slug', 'title', 'icon', 'image', 'category', 'level', 'duration', 'format', 'tagline',
  'audience', 'prerequisites', 'hook', 'keyFacts', 'outcomes', 'modules', 'toolkit', 'caseStudy',
  'pitfalls', 'quiz', 'actionPlan', 'resources', 'sources', 'relatedJobs', 'certification'];
const INDEX_FIELDS = ['slug', 'title', 'icon', 'image', 'category', 'level', 'duration', 'format', 'tagline'];

function validate(file, data) {
  const errors = [];
  const where = (msg) => errors.push(`${file} : ${msg}`);
  REQUIRED.forEach((key) => {
    const value = data[key];
    if (value === undefined || value === null || value === '' || (Array.isArray(value) && value.length === 0)) {
      where(`champ obligatoire manquant « ${key} »`);
    }
  });
  if (`${data.slug}.json` !== file) where(`le slug « ${data.slug} » ne correspond pas au nom du fichier`);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(data.slug || '')) where('slug invalide');
  if (data.image && !fs.existsSync(path.join(FRONTEND, data.image))) where(`image introuvable « ${data.image} »`);

  (data.modules || []).forEach((m, i) => {
    if (!m.title || !Array.isArray(m.lessons) || m.lessons.length === 0) where(`module ${i + 1} incomplet`);
    (m.lessons || []).forEach((l, j) => {
      if (!l.title || !l.content) where(`module ${i + 1}, leçon ${j + 1} incomplète`);
    });
    if (m.exercise && (!m.exercise.title || !Array.isArray(m.exercise.instructions))) where(`module ${i + 1} : exercice incomplet`);
  });
  (data.quiz || []).forEach((q, i) => {
    if (!q.q || !Array.isArray(q.options) || q.options.length < 2) where(`question ${i + 1} incomplète`);
    if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= (q.options || []).length) where(`question ${i + 1} : réponse hors des options`);
    if (!q.explanation) where(`question ${i + 1} : explication manquante`);
  });
  (data.relatedJobs || []).forEach((slug) => {
    if (!fs.existsSync(path.join(JOBS_DIR, `${slug}.json`))) where(`métier lié introuvable « ${slug} »`);
  });
  [...(data.resources || []), ...(data.sources || [])].forEach((r) => {
    if (r.url && /^http:\/\//.test(r.url)) where(`lien non sécurisé « ${r.url} »`);
  });
  return errors;
}

function build() {
  const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.json') && f !== 'index.json').sort();
  const errors = [];
  const items = files.map((file) => {
    let data;
    try {
      data = JSON.parse(fs.readFileSync(path.join(DIR, file), 'utf8'));
    } catch (error) {
      errors.push(`${file} : JSON invalide (${error.message})`);
      return null;
    }
    errors.push(...validate(file, data));
    return {
      ...Object.fromEntries(INDEX_FIELDS.map((k) => [k, data[k]])),
      modulesCount: (data.modules || []).length,
      lessonsCount: (data.modules || []).reduce((n, m) => n + (m.lessons || []).length, 0),
      outcomes: (data.outcomes || []).slice(0, 3),
    };
  }).filter(Boolean);
  return { errors, index: `${JSON.stringify({ count: items.length, formations: items }, null, 2)}\n` };
}

const { errors, index } = build();
if (errors.length) {
  console.error(`Fiches formations invalides :\n- ${errors.join('\n- ')}`);
  process.exit(1);
}
if (process.argv.includes('--check')) {
  if (!fs.existsSync(INDEX) || fs.readFileSync(INDEX, 'utf8') !== index) {
    console.error('Index des formations périmé. Lancez : node scripts/build-formation-data.js');
    process.exit(1);
  }
  console.log('Fiches formations valides et index à jour.');
} else {
  fs.writeFileSync(INDEX, index);
  console.log(`Index des formations écrit (${JSON.parse(index).count} formations).`);
}

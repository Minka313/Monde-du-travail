#!/usr/bin/env node
/**
 * Génère frontend/data/jobs/<slug>.json : une fiche métier pré-fusionnée + ses
 * métiers connexes, pour que job-detail.html charge ~10 Ko au lieu du catalogue
 * complet (15 scripts, ~1,2 Mo compressés).
 *
 * Le catalogue est exécuté comme dans le navigateur (mêmes scripts, même ordre,
 * lus dans CATALOG_SCRIPTS de job-detail.js), sans API : les modifications de
 * l'admin sont appliquées à l'affichage par job-detail.js.
 *
 * Génère aussi frontend/data/catalog-lite.js : le catalogue fusionné réduit aux
 * champs de la liste (job.html), pour afficher la page sans charger les 15 scripts.
 * Les scripts complets ne sont chargés qu'à la recherche (OrientationData.loadFullCatalog).
 *
 * Ajoute à chaque métier son code RIASEC (scripts/data/riasec-job-codes.json) : un métier
 * sans code valide fait échouer la génération, pour que le test d'orientation couvre tout le catalogue.
 *
 * Usage : node scripts/build-job-data.js          (régénère)
 *         node scripts/build-job-data.js --check  (échoue si les fichiers sont périmés)
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const FRONTEND = path.resolve(__dirname, '..', 'frontend');
const OUT_DIR = path.join(FRONTEND, 'data', 'jobs');
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const RELATED_LIMIT = 6;
const RELATED_FIELDS = ['id', 'slug', 'title', 'image', 'icon', 'subdomain', 'familyName'];
const LITE_FILE = path.join(FRONTEND, 'data', 'catalog-lite.js');
const RIASEC_FILE = path.join(__dirname, 'data', 'riasec-job-codes.json');
// Catalogue réduit du test d'orientation (test-riasec.html) : ~100 Ko au lieu du catalogue complet
const RIASEC_OUT = path.join(FRONTEND, 'data', 'riasec-jobs.json');
const RIASEC_FIELDS = ['id', 'slug', 'title', 'icon', 'familyId', 'familyName', 'shortDescription', 'level', 'isEmerging', 'riasec'];
const RIASEC_PATTERN = /^(?!.*(.).*\1)[RIASEC]{3}$/;
// Champs lus par la liste, les filtres, le quiz et la roue (la recherche charge le catalogue complet)
const LITE_FIELDS = [
  'id', 'slug', 'title', 'aliases', 'icon', 'image', 'familyId', 'familyName', 'familyIcon',
  'connectedFamilies', 'domain', 'domainId', 'subdomain', 'shortDescription', 'simpleDefinition',
  'salary', 'level', 'isEmerging', 'compatibility', 'interests', 'specializations', 'saviezVous', 'riasec',
];
const LITE_SOURCE_FLAGS = ['sourceESD', 'sourceOnisep', 'sourceLetudiant', 'sourcePoitiers', 'sourceStudyrama',
  'sourceImagineTonFutur', 'sourceESP', 'sourceBRGM'];

function readCatalogScripts() {
  const source = fs.readFileSync(path.join(FRONTEND, 'js', 'job-detail.js'), 'utf8');
  const match = source.match(/const CATALOG_SCRIPTS = \[([\s\S]*?)\];/);
  if (!match) throw new Error('CATALOG_SCRIPTS introuvable dans job-detail.js');
  return [...match[1].matchAll(/'([^']+)'/g)].map((m) => m[1]);
}

async function buildFiles() {
  const context = { console: { log() {}, warn() {}, error() {} } };
  context.window = context;
  vm.createContext(context);
  for (const script of readCatalogScripts()) {
    vm.runInContext(fs.readFileSync(path.join(FRONTEND, script), 'utf8'), context, { filename: script });
  }

  const data = context.OrientationData;
  const jobs = await data.getAllJobs();
  attachRiasec(jobs);
  const files = new Map();

  for (const job of jobs) {
    const related = (await data.getRelatedJobs(job)).slice(0, RELATED_LIMIT)
      .map((rel) => Object.fromEntries(RELATED_FIELDS.filter((f) => rel[f] !== undefined).map((f) => [f, rel[f]])));
    const content = JSON.stringify({ job, related });
    // Les liens utilisent le slug ou l'id : un fichier sous chaque nom valide
    for (const name of new Set([job.slug, job.id])) {
      if (name && SLUG_PATTERN.test(name)) files.set(`${name}.json`, content);
    }
  }
  const riasecJobs = `${JSON.stringify({ jobs: jobs.map((j) => Object.fromEntries(RIASEC_FIELDS.filter((f) => j[f] !== undefined).map((f) => [f, j[f]]))) })}\n`;
  return { files, jobCount: jobs.length, lite: buildLite(context, jobs), riasecJobs };
}

function attachRiasec(jobs) {
  const { codes } = JSON.parse(fs.readFileSync(RIASEC_FILE, 'utf8'));
  const ids = new Set(jobs.map((j) => j.id));
  const missing = jobs.filter((j) => !RIASEC_PATTERN.test(codes[j.id] || '')).map((j) => j.id);
  const unknown = Object.keys(codes).filter((id) => !ids.has(id));
  if (missing.length || unknown.length) {
    throw new Error(`Codes RIASEC à corriger dans ${path.relative(process.cwd(), RIASEC_FILE)} : `
      + `${missing.length ? `absents ou invalides pour ${missing.join(', ')}` : ''}`
      + `${unknown.length ? ` ; métiers inconnus ${unknown.join(', ')}` : ''}`);
  }
  jobs.forEach((job) => { job.riasec = codes[job.id]; });
}

function liteJob(job) {
  const lite = Object.fromEntries(LITE_FIELDS.filter((f) => job[f] !== undefined).map((f) => [f, job[f]]));
  if (job.skills && typeof job.skills === 'object' && !Array.isArray(job.skills)) {
    lite.skills = { technical: job.skills.technical || [], tools: job.skills.tools || [] };
  }
  LITE_SOURCE_FLAGS.forEach((f) => { if (job[f]) lite[f] = true; });
  return lite;
}

function buildLite(context, jobs) {
  // Domaines de chaque secteur : seuls DOMAINS / getDomains() sont lus hors chargement des métiers
  const sectors = {};
  Object.keys(context)
    .filter((name) => /^Orientation[A-Za-z]+Data$/.test(name) && !['OrientationData', 'OrientationQuizData'].includes(name))
    .sort()
    .forEach((name) => {
      const sector = context[name];
      sectors[name] = sector.DOMAINS || (typeof sector.getDomains === 'function' ? sector.getDomains() : []);
    });
  const payload = JSON.stringify({ jobs: jobs.map(liteJob), sectors });
  return `/* Généré par scripts/build-job-data.js : ne pas modifier à la main. */
(function () {
  'use strict';
  var data = ${payload};
  window.OrientationCatalogLite = { jobs: data.jobs };
  // Secteurs allégés : domaines conservés, métiers déjà fusionnés dans data.jobs.
  // Les vrais scripts les remplacent lors du chargement complet.
  Object.keys(data.sectors).forEach(function (name) {
    if (window[name]) return;
    var domains = data.sectors[name];
    window[name] = {
      __lite: true,
      DOMAINS: domains,
      getDomains: function () { return domains; },
      getJobs: function () { return []; },
    };
  });
})();
`;
}

async function main() {
  const check = process.argv.includes('--check');
  const { files, jobCount, lite, riasecJobs } = await buildFiles();
  const existing = fs.existsSync(OUT_DIR) ? fs.readdirSync(OUT_DIR).filter((f) => f.endsWith('.json')) : [];

  if (check) {
    const stale = [...files].filter(([name, content]) => {
      const file = path.join(OUT_DIR, name);
      return !fs.existsSync(file) || fs.readFileSync(file, 'utf8') !== content;
    }).map(([name]) => name);
    const orphans = existing.filter((name) => !files.has(name));
    if (!fs.existsSync(LITE_FILE) || fs.readFileSync(LITE_FILE, 'utf8') !== lite) stale.push('catalog-lite.js');
    if (!fs.existsSync(RIASEC_OUT) || fs.readFileSync(RIASEC_OUT, 'utf8') !== riasecJobs) stale.push('riasec-jobs.json');
    if (stale.length || orphans.length) {
      console.error(`Données des fiches métiers périmées (${stale.length} à régénérer, ${orphans.length} en trop).`);
      console.error('Lancez : node scripts/build-job-data.js');
      process.exit(1);
    }
    console.log(`Données des fiches métiers à jour (${files.size} fichiers, ${jobCount} métiers).`);
    return;
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  for (const name of existing) {
    if (!files.has(name)) fs.unlinkSync(path.join(OUT_DIR, name));
  }
  for (const [name, content] of files) {
    fs.writeFileSync(path.join(OUT_DIR, name), content);
  }
  fs.writeFileSync(LITE_FILE, lite);
  fs.writeFileSync(RIASEC_OUT, riasecJobs);
  console.log(`${files.size} fichiers écrits dans frontend/data/jobs (${jobCount} métiers) et frontend/data/catalog-lite.js.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

/**
 * SCRIPT DE VALIDATION DE L'ARCHITECTURE D'ORIENTATION
 * Vérification exhaustive de la Grande Famille :
 * 📚 LETTRES, LANGUES & SCIENCES HUMAINES (LLSH)
 * 
 * Exécution : node execution/verify_llsh_architecture.js
 */

const fs = require('fs');
const path = require('path');

// Simulation environnement navigateur
global.window = global;

console.log('================================================================');
console.log('🧪 LANCEMENT DES TESTS D’INTÉGRITÉ : LETTRES, LANGUES & SH');
console.log('================================================================\n');

let testsPassed = 0;
let testsFailed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
    testsPassed++;
  } else {
    console.error(`  ❌ FAIL: ${message}`);
    testsFailed++;
  }
}

// 1. Chargement des modules dans l'ordre strict de job.html
try {
  global.OrientationDigitalData = require('../frontend/js/orientation-digital-data.js');
  global.OrientationFinanceData = require('../frontend/js/orientation-finance-data.js');
  global.OrientationAgriData = require('../frontend/js/orientation-agri-data.js');
  global.OrientationEnergyData = require('../frontend/js/orientation-energy-data.js');
  global.OrientationBtpData = require('../frontend/js/orientation-btp-data.js');
  global.OrientationLlshData = require('../frontend/js/orientation-llsh-data.js');
  global.OrientationIndustryData = require('../frontend/js/orientation-industry-data.js');
  global.OrientationGeosciencesData = require('../frontend/js/orientation-geosciences-data.js');
  require('../frontend/js/orientation-data.js');
  assert(true, 'Chargement sans erreur de l’ensemble des modules de données.');
} catch (e) {
  assert(false, `Échec du chargement des modules : ${e.message}`);
  process.exit(1);
}

// 2. Tests unitaires OrientationLlshData
console.log('\n--- 1. Structure du module OrientationLlshData ---');
assert(typeof OrientationLlshData === 'object', 'OrientationLlshData est défini.');
assert(typeof OrientationLlshData.getDomains === 'function', 'OrientationLlshData.getDomains est une fonction.');
assert(typeof OrientationLlshData.getJobs === 'function', 'OrientationLlshData.getJobs est une fonction.');

const domains = OrientationLlshData.getDomains();
assert(Array.isArray(domains) && domains.length === 20, `Exactement 20 domaines LLSH définis (trouvé : ${domains.length}).`);

const jobs = OrientationLlshData.getJobs();
assert(Array.isArray(jobs) && jobs.length === 32, `Exactement 32 fiches métiers LLSH définies (trouvé : ${jobs.length}).`);

// Vérification de la complétude de chaque domaine
let domainsComplete = true;
domains.forEach(d => {
  if (!d.id || !d.name || !d.icon || !d.description || !Array.isArray(d.subdomains) || d.subdomains.length === 0) {
    domainsComplete = false;
    console.error(`Domaine incomplet :`, d);
  }
});
assert(domainsComplete, 'Tous les 20 domaines possèdent id, name, icon, description et sous-domaines valides.');

// Vérification approfondie des 32 fiches métiers
console.log('\n--- 2. Fiches Métiers LLSH (32 fiches approfondies) ---');
let allJobsValid = true;
const llshIds = new Set();
const llshSlugs = new Set();

jobs.forEach((j, index) => {
  if (llshIds.has(j.id)) {
    allJobsValid = false;
    console.error(`ID dupliqué dans LLSH : ${j.id}`);
  }
  llshIds.add(j.id);

  if (llshSlugs.has(j.slug)) {
    allJobsValid = false;
    console.error(`Slug dupliqué dans LLSH : ${j.slug}`);
  }
  llshSlugs.add(j.slug);

  // Vérification des champs indispensables du schéma 6 onglets
  const hasBasicFields = j.id && j.title && j.slug && j.familyId === 'lettres-langues-sciences-humaines' && j.icon && j.domain && j.subdomain;
  const hasDescriptions = j.shortDescription && j.longDescription && j.level && j.salary && j.mainObjective;
  const hasSkills = j.skills && Array.isArray(j.skills.technical) && j.skills.technical.length >= 3 &&
                    Array.isArray(j.skills.human) && j.skills.human.length >= 3 &&
                    Array.isArray(j.skills.tools) && j.skills.tools.length >= 2;
  const hasStudies = j.studies && Array.isArray(j.studies.schools) && j.studies.schools.length > 0 &&
                     Array.isArray(j.studies.pathway) && j.studies.pathway.length > 0 &&
                     j.studies.schools.some(s => s.country && s.country.includes('France')) &&
                     j.studies.schools.some(s => s.country && s.country.includes('Sénégal'));
  const hasAfrica = j.africaContext && Boolean(j.africaContext.senegalInsight) && Boolean(j.africaContext.westAfricaOpportunities);
  const hasSources = Array.isArray(j.sources) && j.sources.length > 0;
  const hasCareer = j.career && Array.isArray(j.career.sectors) && Array.isArray(j.career.pros) && Array.isArray(j.career.cons);
  const hasMissions = Array.isArray(j.missions) && j.missions.length >= 3;

  if (!hasBasicFields || !hasDescriptions || !hasSkills || !hasStudies || !hasAfrica || !hasSources || !hasCareer || !hasMissions) {
    allJobsValid = false;
    console.error(`Fiche #${index + 1} (${j.id || 'sans-id'}) invalide ou incomplète.`);
  }
});

assert(allJobsValid, 'Les 32 fiches métiers LLSH possèdent l’intégralité des 6 onglets, compétences, études France/Sénégal, piliers, éthique et sources.');
assert(llshIds.size === 32, `32 IDs uniques dans LLSH (trouvé : ${llshIds.size}).`);
assert(llshSlugs.size === 32, `32 Slugs uniques dans LLSH (trouvé : ${llshSlugs.size}).`);

// 3. Tests d'intégration dans OrientationData
console.log('\n--- 3. Intégration globale dans OrientationData ---');

(async () => {
  const families = OrientationData.getFamilies();
  const llshFamily = families.find(f => f.id === 'lettres-langues-sciences-humaines');
  assert(Boolean(llshFamily), 'La grande famille "lettres-langues-sciences-humaines" est présente dans FAMILIES.');
  assert(llshFamily && llshFamily.order === 22, 'La grande famille LLSH porte le numéro d’ordre 22.');
  assert(llshFamily && llshFamily.icon === '📚', 'La grande famille LLSH possède l’icône 📚.');

  const familyDomains = OrientationData.getFamilyDomains('lettres-langues-sciences-humaines');
  assert(familyDomains && familyDomains.length === 20, `getFamilyDomains retourne bien les 20 domaines LLSH (trouvé : ${familyDomains.length}).`);

  const allJobs = await OrientationData.getAllJobs();
  assert(allJobs.length >= 299, `Le total des métiers de la plateforme atteint au moins 299 (trouvé : ${allJobs.length}).`);

  // Vérification de non-régression et d'unicité absolue
  const globalIds = new Set();
  const globalSlugs = new Set();
  let duplicateCount = 0;

  allJobs.forEach(j => {
    if (globalIds.has(j.id)) {
      console.error(`ID dupliqué global : ${j.id}`);
      duplicateCount++;
    }
    globalIds.add(j.id);

    if (globalSlugs.has(j.slug)) {
      console.error(`Slug dupliqué global : ${j.slug}`);
      duplicateCount++;
    }
    globalSlugs.add(j.slug);
  });

  assert(duplicateCount === 0, `Zéro doublon global d’ID ou de slug sur l’ensemble des ${allJobs.length} métiers.`);

  const familyJobs = await OrientationData.getJobsByFamily('lettres-langues-sciences-humaines');
  assert(familyJobs.length === 32, `getJobsByFamily("lettres-langues-sciences-humaines") renvoie exactement 32 métiers (trouvé : ${familyJobs.length}).`);

  // 4. Test du moteur de recherche universel
  console.log('\n--- 4. Moteur de Recherche Universel (Search Engine) ---');
  const queriesToTest = [
    { q: 'auteur', min: 1, desc: 'Recherche métier "auteur"' },
    { q: 'traducteur', min: 3, desc: 'Recherche "traducteur" (technique, audiovisuel, etc.)' },
    { q: 'psychologue', min: 2, desc: 'Recherche "psychologue" (clinicien, travail, etc.)' },
    { q: 'EBAD', min: 1, desc: 'Recherche école sénégalaise "EBAD"' },
    { q: 'UCAD', min: 1, desc: 'Recherche université "UCAD"' },
    { q: 'Chartes', min: 1, desc: 'Recherche grande école "Chartes"' },
    { q: 'archéologie', min: 1, desc: 'Recherche discipline "archéologie"' },
    { q: 'FLE', min: 1, desc: 'Recherche spécialité "FLE"' },
    { q: 'Imagine ton Futur', min: 10, desc: 'Recherche source "Imagine ton Futur"' }
  ];

  for (const item of queriesToTest) {
    const results = await OrientationData.searchJobs(item.q);
    assert(results.length >= item.min, `${item.desc} (résultats : ${results.length} >= ${item.min}).`);
  }

  // 5. Test des affinités croisées
  console.log('\n--- 5. Moteur d’Affinités & Recommandations ---');
  const affRes = await OrientationData.getExplorationByAffinities(['langues-traduire', 'lire-ecrire-litterature']);
  assert(affRes.matchedFamilies.some(f => f.id === 'lettres-langues-sciences-humaines'), 'Les affinités LLSH ciblent bien la famille "lettres-langues-sciences-humaines".');
  assert(affRes.matchedJobs.length > 0, `Métiers recommandés par affinité trouvés (${affRes.matchedJobs.length}).`);

  // Recommandations croisées sur un métier LLSH
  const tradJob = jobs.find(j => j.id === 'traducteur');
  if (tradJob) {
    const crossRecs = await OrientationData.getCrossRecommendations(tradJob);
    assert(crossRecs.length > 0, `Passerelles interdisciplinaires générées pour le métier "${tradJob.title}" (${crossRecs.length} suggestions).`);
  }

  console.log('\n================================================================');
  console.log(`📊 BILAN DES TESTS : ${testsPassed} PASSÉS, ${testsFailed} ÉCHOUÉS`);
  console.log('================================================================');

  if (testsFailed > 0) {
    process.exit(1);
  } else {
    console.log('\n🎉 TOUS LES TESTS SONT AU VERT ! L’ÉCOSYSTÈME LLSH EST INTÈGRE & OPÉRATIONNEL.');
    process.exit(0);
  }
})();

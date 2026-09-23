/**
 * TEST ET VALIDATION AUTOMATISÉE DU MODULE ORIENTATION & MÉTIERS
 */

const fs = require('fs');
const path = require('path');

console.log('--- Démarrage de la vérification du module Orientation & Métiers ---\n');

// 1. Vérification de l'intégrité de job.html et des éléments du DOM requis
const htmlPath = path.join(__dirname, '../frontend/job.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

const requiredDomIds = [
  'orientationSearchInput',
  'searchClearBtn',
  'btnDiscoverInterests',
  'btnExploreFamilies',
  'btnViewAllJobs',
  'breadcrumbNav',
  'breadcrumbList',
  'viewSectionTitle',
  'viewSectionSubtitle',
  'familiesGridContainer',
  'familyDrilldownContainer',
  'familyDetailTitle',
  'familyDetailDesc',
  'familyDetailIcon',
  'familyDetailBadge',
  'subdomainsBarContainer',
  'jobsGridContainer',
  'interestExplorerBox',
  'affinitiesChipsContainer',
  'affinityResultsNotice',
  'searchResultsSummary',
  'btnBackToFamilies',
  'btnResetSearch'
];

let domErrors = 0;
requiredDomIds.forEach(id => {
  if (!htmlContent.includes(`id="${id}"`)) {
    console.error(`❌ ID manquant dans job.html : ${id}`);
    domErrors++;
  }
});

if (domErrors === 0) {
  console.log(`✅ Tous les ${requiredDomIds.length} identifiants DOM critiques sont présents dans job.html.`);
} else {
  console.error(`❌ ${domErrors} identifiants DOM manquants.`);
  process.exit(1);
}

// 2. Simulation de l'environnement global Window pour tester OrientationData
global.window = {};

const dataScriptPath = path.join(__dirname, '../frontend/js/orientation-data.js');
const dataScriptContent = fs.readFileSync(dataScriptPath, 'utf8');
eval(dataScriptContent);

const OrientationData = global.window.OrientationData;
if (!OrientationData) {
  console.error('❌ OrientationData n’est pas défini sur window.');
  process.exit(1);
}
console.log('✅ OrientationData initialisé avec succès.');

// Test des Grandes Familles (au moins 21)
const families = OrientationData.getFamilies();
console.log(`📊 Nombre de familles retournées : ${families.length}`);
if (families.length < 21) {
  console.error(`❌ Attendu au moins 21 familles, obtenu ${families.length}`);
  process.exit(1);
}
console.log(`✅ Les ${families.length} Grandes Familles sont intégralement présentes.`);

// Vérifier que chaque famille possède ses sous-domaines et métadonnées
families.forEach(f => {
  if (!f.id || !f.name || !f.slug || !f.icon || !f.image || !f.description || !f.color) {
    console.error(`❌ Métadonnées incomplètes pour la famille ${f.name}`);
    process.exit(1);
  }
  if (!Array.isArray(f.subdomains) || f.subdomains.length === 0) {
    console.error(`❌ Aucun sous-domaine pour la famille ${f.name}`);
    process.exit(1);
  }
});
console.log('✅ Toutes les 21 familles possèdent leurs métadonnées, couleurs et sous-domaines.');

// Test des centres d'intérêt / affinités
const affinities = OrientationData.getAffinities();
console.log(`🧭 Nombre de profils d'affinités : ${affinities.length}`);
if (affinities.length < 8) {
  console.error('❌ Pas assez de profils d’affinités.');
  process.exit(1);
}
console.log('✅ Moteur d’affinités (« Je ne sais pas encore ») prêt.');

// Test du catalogue de métiers
OrientationData.getAllJobs().then(async (jobs) => {
  console.log(`💼 Nombre de dossiers métiers disponibles : ${jobs.length}`);
  if (jobs.length < 10) {
    console.error('❌ Moins de 10 métiers de référence.');
    process.exit(1);
  }

  // Vérifier la structure de chaque fiche métier
  jobs.forEach(j => {
    if (!j.id || !j.slug || !j.title || !j.familyId || !j.level || !j.salary) {
      console.error(`❌ Fiche métier incomplète pour ${j.title}`);
      process.exit(1);
    }
    if (!j.skills || !Array.isArray(j.skills.technical) || !Array.isArray(j.skills.human)) {
      console.error(`❌ Compétences non structurées pour ${j.title}`);
      process.exit(1);
    }
  });
  console.log('✅ Toutes les fiches métiers respectent scrupuleusement le contrat de données.');

  // Test de recherche textuelle
  const searchTech = await OrientationData.searchJobs('python');
  console.log(`🔍 Recherche "python" : ${searchTech.length} métier(s) trouvé(s) (${searchTech.map(j => j.title).join(', ')})`);
  if (searchTech.length === 0) {
    console.error('❌ La recherche par compétence technique (python) a échoué.');
    process.exit(1);
  }
  console.log('✅ Recherche par compétence technique validée.');

  // Test de recherche par école
  const searchSchool = await OrientationData.searchJobs('ESP');
  console.log(`🔍 Recherche établissement "ESP" : ${searchSchool.length} métier(s) trouvé(s)`);
  if (searchSchool.length === 0) {
    console.error('❌ La recherche par établissement (ESP) a échoué.');
    process.exit(1);
  }
  console.log('✅ Recherche par établissement / formation validée.');

  // Test des métiers proches
  const firstJob = jobs[0];
  const related = await OrientationData.getRelatedJobs(firstJob);
  console.log(`🧭 Métiers proches pour "${firstJob.title}" : ${related.length} trouvé(s) (${related.map(r => r.title).join(', ')})`);
  if (related.length === 0) {
    console.error(`❌ Aucun métier proche pour ${firstJob.title}`);
    process.exit(1);
  }
  console.log('✅ Relations et passerelles entre métiers validées.');

  // Test des recommandations d'affinités
  const rec = await OrientationData.getExplorationByAffinities(['technologie-code', 'resoudre-problemes']);
  console.log(`🌟 Recommandation affinités : ${rec.matchedFamilies.length} familles suggérées, ${rec.matchedJobs.length} métiers`);
  if (rec.matchedFamilies.length === 0 || rec.matchedJobs.length === 0) {
    console.error('❌ Le calcul d’affinités a échoué.');
    process.exit(1);
  }
  console.log('✅ Moteur de recommandation d’affinités validé.');

  console.log('\n🎉 TOUS LES TESTS FONCTIONNELS ET DE COHÉRENCE SONT AU VERT !');
}).catch(err => {
  console.error('❌ Erreur inattendue lors de la vérification :', err);
  process.exit(1);
});

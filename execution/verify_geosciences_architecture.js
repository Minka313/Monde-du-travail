/**
 * Test de validation automatisé de l'intégration de la Grande Famille :
 * 🌍 SCIENCES DE LA TERRE, GÉOSCIENCES & RESSOURCES NATURELLES
 *
 * Vérifie l'intégrité des 17 domaines, des 22 fiches métiers,
 * du respect des sources Université de Poitiers, BRGM & SGF, de la non-régression (>= 350 métiers),
 * de l'absence de doublons et du bon fonctionnement du moteur de recherche.
 */

const fs = require('fs');
const path = require('path');

// 1. Initialiser le contexte global comme dans le navigateur
global.window = global;

console.log('\n======================================================');
console.log('🧪 SUITE DE VALIDATION ARCHITECTURE : GÉOSCIENCES');
console.log('======================================================\n');

try {
  // Chargement séquentiel des modules de données
  global.OrientationDigitalData = require('../frontend/js/orientation-digital-data.js');
  global.OrientationFinanceData = require('../frontend/js/orientation-finance-data.js');
  global.OrientationAgriData = require('../frontend/js/orientation-agri-data.js');
  global.OrientationEnergyData = require('../frontend/js/orientation-energy-data.js');
  global.OrientationBtpData = require('../frontend/js/orientation-btp-data.js');
  global.OrientationLlshData = require('../frontend/js/orientation-llsh-data.js');
  global.OrientationIndustryData = require('../frontend/js/orientation-industry-data.js');
  global.OrientationGeosciencesData = require('../frontend/js/orientation-geosciences-data.js');
  global.OrientationData = require('../frontend/js/orientation-data.js');

  console.log('✅ Tous les modules JS ont été chargés sans erreur de syntaxe.\n');
} catch (err) {
  console.error('❌ Échec du chargement des modules :', err);
  process.exit(1);
}

const od = global.OrientationData;
const geoData = global.OrientationGeosciencesData;

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`  ✅ ${message}`);
    passedTests++;
  } else {
    console.error(`  ❌ ÉCHEC: ${message}`);
    process.exitCode = 1;
  }
}

async function runTests() {
  console.log('--- TEST GROUP 1 : Intégrité du module OrientationGeosciencesData ---');
  assert(geoData !== undefined, "OrientationGeosciencesData est disponible globalement");
  assert(typeof geoData.getDomains === 'function', "getDomains() est une fonction");
  assert(typeof geoData.getJobs === 'function', "getJobs() est une fonction");
  assert(geoData.DOMAINS.length === 17, `Le module contient exactement 17 domaines (actuel: ${geoData.DOMAINS.length})`);
  assert(geoData.JOBS.length === 22, `Le module contient exactement 22 métiers (actuel: ${geoData.JOBS.length})`);

  console.log('\n--- TEST GROUP 2 : Intégration dans OrientationData (Famille Géosciences & Routage) ---');
  const families = od.getFamilies();
  assert(families.length === 23, `La plateforme compte exactement 23 grandes familles (actuel: ${families.length})`);

  const famGeo = od.getFamily('sciences-terre-geosciences');
  assert(famGeo !== null, "La famille 'sciences-terre-geosciences' existe");
  assert(famGeo.order === 23, `L'ordre de la famille est 23 (actuel: ${famGeo.order})`);
  assert(famGeo.name === "Sciences de la Terre, Géosciences & Ressources Naturelles", `Nom de la famille conforme : "${famGeo.name}"`);
  assert(famGeo.subdomains.length === 17, `La famille contient 17 sous-domaines (actuel: ${famGeo.subdomains.length})`);

  const geoDomains = od.getFamilyDomains('sciences-terre-geosciences');
  assert(geoDomains.length === 17, `getFamilyDomains('sciences-terre-geosciences') renvoie 17 domaines (actuel: ${geoDomains.length})`);

  console.log('\n--- TEST GROUP 3 : Volumétrie globale & Non-régression ---');
  const allJobs = await od.getAllJobs();
  console.log(`  📊 Total métiers sur la plateforme : ${allJobs.length}`);
  assert(allJobs.length >= 350, `Le catalogue total contient au moins 350 métiers (actuel: ${allJobs.length})`);

  const geoJobs = await od.getJobsByFamily('sciences-terre-geosciences');
  assert(geoJobs.length === 22, `getJobsByFamily('sciences-terre-geosciences') renvoie exactement 22 fiches (actuel: ${geoJobs.length})`);

  console.log('\n--- TEST GROUP 4 : Unicité des Identifiants et Slugs ---');
  const seenIds = new Set();
  const duplicateIds = [];
  const seenSlugs = new Set();
  const duplicateSlugs = [];

  allJobs.forEach(job => {
    if (job.id) {
      if (seenIds.has(job.id)) duplicateIds.push(job.id);
      seenIds.add(job.id);
    }
    if (job.slug) {
      if (seenSlugs.has(job.slug)) duplicateSlugs.push(job.slug);
      seenSlugs.add(job.slug);
    }
  });

  assert(duplicateIds.length === 0, `0 doublon d'identifiant détecté (doublons: ${duplicateIds.join(', ') || 'aucun'})`);
  assert(duplicateSlugs.length === 0, `0 doublon de slug détecté (doublons: ${duplicateSlugs.join(', ') || 'aucun'})`);

  console.log('\n--- TEST GROUP 5 : Qualité éditoriale, Pédagogie & Sources ---');
  let validDescriptions = 0;
  let validSimpleDefs = 0;
  let validSalaries = 0;
  let validAfricaContext = 0;
  let validPoitiers = 0;
  let validPedagogy = 0;

  geoJobs.forEach(j => {
    if (j.shortDescription && j.shortDescription.length >= 60) validDescriptions++;
    if (j.simpleDefinition && j.simpleDefinition.length >= 40) validSimpleDefs++;
    if (j.salary && typeof j.salary === 'string' && j.salary.includes('€') && j.salary.includes('FCFA')) validSalaries++;
    if (j.africaContext && (j.africaContext.keyInstitutions || j.africaContext.localChampions || j.africaContext.opportunities || j.africaContext.senegalInsight)) validAfricaContext++;
    if (j.sourcePoitiers === true) validPoitiers++;
    if (j.geosciencesPedagogy && j.geosciencesPedagogy.length >= 30) validPedagogy++;
  });

  assert(validDescriptions === 22, `22/22 fiches avec descriptions riches (actuel: ${validDescriptions})`);
  assert(validSimpleDefs === 22, `22/22 fiches avec vulgarisation pédagogique accessible (actuel: ${validSimpleDefs})`);
  assert(validSalaries === 22, `22/22 fiches avec salaires bivalents € / FCFA (actuel: ${validSalaries})`);
  assert(validAfricaContext === 22, `22/22 fiches avec ancrage Sénégal & Afrique documenté (actuel: ${validAfricaContext})`);
  assert(validPoitiers === 22, `22/22 fiches rattachées aux enseignements Poitiers / BRGM (actuel: ${validPoitiers})`);
  assert(validPedagogy === 22, `22/22 fiches dotées d'une clé de lecture géosciences (actuel: ${validPedagogy})`);

  console.log('\n--- TEST GROUP 6 : Moteur de Recherche & Indexation ---');
  const searchHydro = await od.searchJobs('hydrogéologue');
  assert(searchHydro.length > 0 && searchHydro.some(j => j.id === 'hydrogeologue'), "Recherche 'hydrogéologue' retourne la fiche hydrogeologue");

  const searchPedo = await od.searchJobs('pédologue');
  assert(searchPedo.length > 0 && searchPedo.some(j => j.id === 'pedologue'), "Recherche 'pédologue' retourne la fiche pedologue");

  const searchGeo = await od.searchJobs('géotechnique');
  assert(searchGeo.length > 0 && searchGeo.some(j => j.id.includes('geotechnique')), "Recherche 'géotechnique' retourne les fiches géotechniques");

  const searchRoches = await od.searchJobs('roches');
  assert(searchRoches.length > 0, `Recherche par mot-clé 'roches' retourne des fiches (${searchRoches.length} résultats)`);

  console.log('\n--- TEST GROUP 7 : Affinités & Boussole d\'Orientation ---');
  const affinities = typeof od.getAffinities === 'function' ? od.getAffinities() : (od.INTEREST_AFFINITIES || []);
  const geoAffinity = affinities.find(a => a.id === 'geosciences-terre-planete');
  assert(geoAffinity !== undefined, "L'affinité 'geosciences-terre-planete' est enregistrée dans la boussole");
  if (geoAffinity) {
    assert(geoAffinity.familyIds.includes('sciences-terre-geosciences'), "L'affinité cible bien la famille 'sciences-terre-geosciences'");
  }

  console.log('\n======================================================');
  console.log(`🏁 RÉSULTAT FINAL : ${passedTests} / ${totalTests} tests réussis (${Math.round((passedTests / totalTests) * 100)}%)`);
  console.log('======================================================\n');

  if (passedTests === totalTests) {
    console.log('🎉 TOUS LES TESTS SONT AU VERT ! Intégration Géosciences validée.');
  } else {
    console.error('⚠️ Des anomalies ont été détectées. Veuillez corriger avant déploiement.');
    process.exit(1);
  }
}

runTests().catch(err => {
  console.error("Erreur inattendue durant les tests :", err);
  process.exit(1);
});

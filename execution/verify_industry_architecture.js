/**
 * Test de validation automatisé de l'intégration de la Grande Famille :
 * 🏭 INDUSTRIE, TECHNOLOGIES & INGÉNIERIE (Famille 11)
 *
 * Vérifie l'intégrité des 30 domaines, des 36 fiches métiers,
 * du respect des sources L'Étudiant & Onisep, de la non-régression (>= 335 métiers),
 * de l'absence de doublons et du moteur de recherche.
 */

const fs = require('fs');
const path = require('path');

// 1. Initialiser le contexte global comme dans le navigateur
global.window = global;

console.log('\n======================================================');
console.log('🧪 SUITE DE VALIDATION ARCHITECTURE : INDUSTRIE (Famille 11)');
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
  global.OrientationData = require('../frontend/js/orientation-data.js');

  console.log('✅ Tous les modules JS ont été chargés sans erreur de syntaxe.\n');
} catch (err) {
  console.error('❌ Échec du chargement des modules :', err);
  process.exit(1);
}

const od = global.OrientationData;
const industryData = global.OrientationIndustryData;

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
  console.log('--- TEST GROUP 1 : Intégrité du module OrientationIndustryData ---');
  assert(industryData !== undefined, "OrientationIndustryData est disponible globalement");
  assert(typeof industryData.getDomains === 'function', "getDomains() est une fonction");
  assert(typeof industryData.getJobs === 'function', "getJobs() est une fonction");
  assert(industryData.DOMAINS.length === 30, `Le module contient exactement 30 domaines (actuel: ${industryData.DOMAINS.length})`);
  assert(industryData.JOBS.length === 36, `Le module contient exactement 36 métiers (actuel: ${industryData.JOBS.length})`);

  console.log('\n--- TEST GROUP 2 : Intégration dans OrientationData (Famille 11 & Routage) ---');
  const families = od.getFamilies();
  assert(families.length === 22, `La plateforme compte exactement 22 grandes familles (actuel: ${families.length})`);

  const fam11 = od.getFamily('industrie-mecanique');
  assert(fam11 !== null, "La famille 'industrie-mecanique' existe");
  assert(fam11.order === 11, `L'ordre de la famille est 11 (actuel: ${fam11.order})`);
  assert(fam11.name === "Industrie, Technologies & Ingénierie", `Nom de la famille conforme : "${fam11.name}"`);
  assert(fam11.subdomains.length === 30, `La famille contient 30 sous-domaines (actuel: ${fam11.subdomains.length})`);

  const fam11Alias = od.getFamily('industrie-technologies-ingenierie');
  assert(fam11Alias !== null && fam11Alias.id === 'industrie-mecanique', "La famille est aussi accessible via l'alias 'industrie-technologies-ingenierie'");

  const indDomains = od.getFamilyDomains('industrie-mecanique');
  assert(indDomains.length === 30, `getFamilyDomains('industrie-mecanique') renvoie 30 domaines (actuel: ${indDomains.length})`);

  console.log('\n--- TEST GROUP 3 : Volumétrie globale & Non-régression ---');
  const allJobs = await od.getAllJobs();
  console.log(`  📊 Total métiers sur la plateforme : ${allJobs.length}`);
  assert(allJobs.length >= 335, `Le catalogue total contient au moins 335 métiers (actuel: ${allJobs.length})`);

  const indJobs = await od.getJobsByFamily('industrie-mecanique');
  assert(indJobs.length === 36, `getJobsByFamily('industrie-mecanique') renvoie exactement 36 fiches (actuel: ${indJobs.length})`);

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

  assert(duplicateIds.length === 0, `0 doublon d'identifiant ID sur l'ensemble de la plateforme (doublons: ${duplicateIds.join(', ')})`);
  assert(duplicateSlugs.length === 0, `0 doublon de slug sur l'ensemble de la plateforme (doublons: ${duplicateSlugs.join(', ')})`);

  console.log('\n--- TEST GROUP 5 : Conformité des Fiches Métiers Industrie ---');
  let validDeepJobs = 0;
  let hasDualSalary = 0;
  let hasDualEducation = 0;
  let hasOnisepSource = 0;
  let hasLetudiantSource = 0;

  indJobs.forEach(j => {
    const hasBasics = j.id && j.slug && j.title && j.icon && j.shortDescription && j.simpleDefinition;
    const hasTabs = j.missions && j.skills && j.skills.technical && j.skills.tools && j.studies && j.career && j.aiImpact && j.africaContext && j.gettingStarted;
    if (hasBasics && hasTabs) validDeepJobs++;

    if (j.salary && j.salary.includes('€') && j.salary.includes('FCFA')) hasDualSalary++;
    if (j.studies && j.studies.france && j.studies.senegal && j.studies.france.length > 0 && j.studies.senegal.length > 0) hasDualEducation++;
    if (j.sourceOnisep) hasOnisepSource++;
    if (j.sourceLetudiant) hasLetudiantSource++;
  });

  assert(validDeepJobs === 36, `Les 36 fiches métiers disposent de la structure profonde complète (actuel: ${validDeepJobs}/36)`);
  assert(hasDualSalary === 36, `Les 36 fiches ont un double salaire France (€) & Sénégal/Afrique (FCFA) (actuel: ${hasDualSalary}/36)`);
  assert(hasDualEducation === 36, `Les 36 fiches ont des parcours de formation France & Sénégal/Afrique de l'Ouest (actuel: ${hasDualEducation}/36)`);
  assert(hasOnisepSource >= 10, `Au moins 10 fiches intègrent la référence Onisep (actuel: ${hasOnisepSource})`);
  assert(hasLetudiantSource >= 20, `Au moins 20 fiches intègrent la référence L'Étudiant (actuel: ${hasLetudiantSource})`);

  console.log('\n--- TEST GROUP 6 : Moteur de Recherche & Indexation Industrie ---');
  const searchChaudronnier = await od.searchJobs('chaudronnier');
  assert(searchChaudronnier.some(j => j.slug === 'chaudronnier-industriel'), "Recherche 'chaudronnier' trouve 'chaudronnier-industriel'");

  const searchRobotique = await od.searchJobs('robotique');
  assert(searchRobotique.some(j => j.slug === 'roboticien-industriel'), "Recherche 'robotique' trouve 'roboticien-industriel'");

  const searchMaintenance = await od.searchJobs('maintenance');
  assert(searchMaintenance.some(j => j.slug === 'technicien-maintenance-industrielle'), "Recherche 'maintenance' trouve le technicien de maintenance industrielle");

  const searchLetudiant = await od.searchJobs("l'étudiant");
  assert(searchLetudiant.length >= 25, `Recherche "l'étudiant" indexe les fiches sourcées (trouvé: ${searchLetudiant.length})`);

  const searchOnisep = await od.searchJobs("onisep");
  assert(searchOnisep.length >= 10, `Recherche "onisep" indexe les fiches sourcées (trouvé: ${searchOnisep.length})`);

  console.log('\n--- TEST GROUP 7 : Script HTML job.html ---');
  const htmlContent = fs.readFileSync(path.join(__dirname, '../frontend/job.html'), 'utf8');
  assert(htmlContent.includes('orientation-industry-data.js'), "job.html contient bien l'inclusion du script orientation-industry-data.js");

  console.log('\n======================================================');
  console.log(`RÉSULTAT : ${passedTests}/${totalTests} tests réussis (${Math.round(passedTests / totalTests * 100)}%)`);
  console.log('======================================================\n');

  if (passedTests === totalTests) {
    console.log('🎉 TOUS LES TESTS SONT AU VERT ! Déploiement prêt pour production.');
  } else {
    console.error('❌ CERTAINS TESTS ONT ÉCHOUÉ.');
    process.exit(1);
  }
}

runTests();

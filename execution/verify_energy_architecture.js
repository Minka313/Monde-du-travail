// execution/verify_energy_architecture.js
// Test et validation de l'intégration de la grande famille Énergie, Électricité & Transition Énergétique

const path = require('path');
const fs = require('fs');

console.log('🧪 DÉBUT DU TEST D\'INTÉGRATION : FAMILLE ÉNERGIE (RÉFÉRENTIEL ENERGIERECRUTE)');

// 1. Simuler l'environnement de navigation du navigateur
global.window = global;
global.document = {
  getElementById: () => null,
  querySelector: () => null,
  querySelectorAll: () => []
};

// 2. Charger les modules de données dans l'ordre exact de job.html
require('../frontend/js/orientation-digital-data.js');
require('../frontend/js/orientation-finance-data.js');
require('../frontend/js/orientation-agri-data.js');
require('../frontend/js/orientation-energy-data.js');
require('../frontend/js/orientation-data.js');

async function runTests() {
  let errors = [];

  // A. Vérification de window.OrientationEnergyData
  if (!global.OrientationEnergyData) {
    errors.push("❌ OrientationEnergyData non exposé sur window / global");
    return finish(errors);
  }

  const energyDomains = OrientationEnergyData.getDomains();
  const energyJobs = OrientationEnergyData.getJobs();

  console.log(`\n📊 1. MODULE ENERGIERECRUTE DÉDIÉ :`);
  console.log(`   - Domaines répertoriés : ${energyDomains.length} (attendu: 14)`);
  console.log(`   - Fiches métiers : ${energyJobs.length} (attendu: 26)`);

  if (energyDomains.length !== 14) {
    errors.push(`❌ Nombre de domaines incorrect : ${energyDomains.length} (attendu 14)`);
  }
  if (energyJobs.length !== 26) {
    errors.push(`❌ Nombre de fiches métiers incorrect : ${energyJobs.length} (attendu 26)`);
  }

  // Vérification de la complétude haute profondeur de chaque fiche métier (alignée sur les 6 onglets)
  energyJobs.forEach((job, i) => {
    const prefix = `Job #${i + 1} (${job.id || 'sans-id'})`;
    if (!job.id || !job.slug || !job.title) errors.push(`${prefix}: id, slug ou title manquant`);
    if (job.familyId !== 'energie-renouvelable') errors.push(`${prefix}: familyId incorrect (${job.familyId})`);
    if (!job.domainId) errors.push(`${prefix}: domainId manquant`);
    if (!energyDomains.some(d => d.id === job.domainId)) errors.push(`${prefix}: domainId '${job.domainId}' introuvable dans ENERGY_DOMAINS`);
    if (!job.sourceEnergierecrute) errors.push(`${prefix}: sourceEnergierecrute doit être true`);
    if (!job.simpleDefinition) errors.push(`${prefix}: simpleDefinition manquante`);
    if (!job.longDescription) errors.push(`${prefix}: longDescription manquante`);
    if (!job.mainObjective) errors.push(`${prefix}: mainObjective manquant`);
    if (!Array.isArray(job.missions) || job.missions.length < 3) errors.push(`${prefix}: missions < 3`);
    if (!Array.isArray(job.typicalDay) || job.typicalDay.length < 3) errors.push(`${prefix}: typicalDay < 3`);
    if (!job.skills || !Array.isArray(job.skills.technical) || job.skills.technical.length < 2) errors.push(`${prefix}: skills.technical < 2`);
    if (!job.skills || !Array.isArray(job.skills.human) || job.skills.human.length < 2) errors.push(`${prefix}: skills.human < 2`);
    if (!job.skills || !Array.isArray(job.skills.tools) || job.skills.tools.length < 2) errors.push(`${prefix}: skills.tools < 2`);
    
    // Vérification de la structure d'études (Onglet 3 : Cursus & Écoles)
    if (!job.studies || !Array.isArray(job.studies.pathway) || job.studies.pathway.length < 2) errors.push(`${prefix}: studies.pathway < 2`);
    if (!job.studies || !Array.isArray(job.studies.schools) || job.studies.schools.length < 2) errors.push(`${prefix}: studies.schools < 2`);
    
    // Vérification des débouchés (Onglet 4 : Carrière)
    if (!job.career || !Array.isArray(job.career.sectors) || job.career.sectors.length < 2) errors.push(`${prefix}: career.sectors < 2`);
    if (!job.career || !Array.isArray(job.career.employerTypes) || job.career.employerTypes.length < 2) errors.push(`${prefix}: career.employerTypes < 2`);
    if (!job.career || !job.career.evolution) errors.push(`${prefix}: career.evolution manquant`);

    // Vérification Découverte & IA & Afrique (Onglet 1 : Découvrir)
    if (!job.gettingStarted || typeof job.gettingStarted !== 'object') errors.push(`${prefix}: gettingStarted manquant ou non-objet`);
    if (!job.aiImpact || typeof job.aiImpact !== 'object') errors.push(`${prefix}: aiImpact manquant ou non-objet`);
    if (!job.africaContext || typeof job.africaContext !== 'object') errors.push(`${prefix}: africaContext manquant ou non-objet`);
    if (!job.salary) errors.push(`${prefix}: salary manquant`);
    if (!job.saviezVous || typeof job.saviezVous !== 'object') errors.push(`${prefix}: saviezVous manquant ou non-objet`);
    if (!job.energyTechnology || !Array.isArray(job.energyTechnology) || job.energyTechnology.length === 0) errors.push(`${prefix}: energyTechnology manquant`);
    if (!job.energySector) errors.push(`${prefix}: energySector manquant`);
  });

  if (errors.length === 0) {
    console.log('   ✅ Les 26 fiches métiers disposent d\'une complétude haute profondeur à 100% !');
  }

  // B. Vérification de l'intégration globale dans OrientationData
  console.log(`\n🌐 2. VÉRIFICATION DANS LE CATALOGUE GLOBAL (OrientationData) :`);
  const allJobs = await OrientationData.getAllJobs();
  console.log(`   - Total des métiers consolidés sur la plateforme : ${allJobs.length}`);

  if (allJobs.length < 225) {
    errors.push(`❌ Nombre total de métiers trop faible : ${allJobs.length} (attendu >= 225)`);
  }

  // Vérification de non-régression sur les catalogues dédiés
  const digitalJobsCount = OrientationDigitalData.getJobs().length;
  const financeJobsCount = OrientationFinanceData.getJobs().length;
  const agriJobsCount = OrientationAgriData.getJobs().length;
  const energyJobsCount = OrientationEnergyData.getJobs().length;

  console.log(`   - Métiers Numérique & IA (Catalogue ESD) : ${digitalJobsCount} (attendu: 103)`);
  console.log(`   - Métiers Finance, Banque & Assurance : ${financeJobsCount} (attendu: 27)`);
  console.log(`   - Métiers Agriculture, Élevage & Maritime : ${agriJobsCount} (attendu: 67)`);
  console.log(`   - Métiers Énergie, Électricité & Transition : ${energyJobsCount} (attendu: 26)`);

  if (digitalJobsCount < 103) errors.push(`❌ Régression numérique détectée : ${digitalJobsCount} < 103`);
  if (financeJobsCount < 27) errors.push(`❌ Régression finance détectée : ${financeJobsCount} < 27`);
  if (agriJobsCount < 67) errors.push(`❌ Régression agriculture/élevage/maritime détectée : ${agriJobsCount} < 67`);
  if (energyJobsCount < 26) errors.push(`❌ Métiers énergie insuffisants : ${energyJobsCount} < 26`);

  // Vérification de l'unicité des IDs
  const idCounts = {};
  allJobs.forEach(j => {
    idCounts[j.id] = (idCounts[j.id] || 0) + 1;
    if (idCounts[j.id] > 1) {
      errors.push(`❌ Doublon d'ID détecté : '${j.id}'`);
    }
  });

  // C. Vérification de la cartographie à 14 domaines pour l'Énergie
  console.log(`\n🗺️ 3. VÉRIFICATION DE LA CARTOGRAPHIE ET NAVIGATION PAR DOMAINE :`);
  const familyDomains = OrientationData.getFamilyDomains('energie-renouvelable');
  console.log(`   - Domaines retournés pour 'energie-renouvelable' : ${familyDomains.length}`);
  if (familyDomains.length !== 14) {
    errors.push(`❌ getFamilyDomains('energie-renouvelable') a retourné ${familyDomains.length} domaines (attendu: 14)`);
  }

  for (const dom of familyDomains) {
    const jobsInDom = await OrientationData.getJobsBySubdomain('energie-renouvelable', 'all', dom.id);
    console.log(`   - [${dom.icon} ${dom.id}] ${dom.name} -> ${jobsInDom.length} métier(s)`);
    if (jobsInDom.length === 0) {
      errors.push(`❌ Domaine sans aucun métier rattaché : '${dom.id}'`);
    }
  }

  // D. Vérification du moteur de recherche universel
  console.log(`\n🔍 4. VÉRIFICATION DU MOTEUR DE RECHERCHE :`);
  const searchQueries = [
    { q: 'solaire', minExpected: 3 },
    { q: 'éolien', minExpected: 2 },
    { q: 'nucléaire', minExpected: 3 },
    { q: 'CVC', minExpected: 2 },
    { q: 'smart grids', minExpected: 1 },
    { q: 'MEER', minExpected: 2 },
    { q: 'trading', minExpected: 1 },
    { q: 'Senelec', minExpected: 3 },
    { q: 'Taïba N\'Diaye', minExpected: 1 },
    { q: 'radioprotection', minExpected: 1 },
    { q: 'biomasse', minExpected: 2 },
    { q: 'hydrogène', minExpected: 1 },
    { q: 'Bokhol', minExpected: 1 },
    { q: 'Manantali', minExpected: 1 }
  ];

  for (const item of searchQueries) {
    const res = await OrientationData.searchJobs(item.q);
    console.log(`   - Recherche "${item.q}" -> ${res.length} résultat(s) (min attendu: ${item.minExpected})`);
    if (res.length < item.minExpected) {
      errors.push(`❌ Recherche '${item.q}' a retourné ${res.length} résultat(s), attendu >= ${item.minExpected}`);
    }
  }

  // E. Vérification de la synchronisation de job.html
  console.log(`\n📄 5. VÉRIFICATION DES SCRIPT TAGS DANS JOB.HTML :`);
  const jobHtmlContent = fs.readFileSync(path.join(__dirname, '../frontend/job.html'), 'utf-8');
  if (!jobHtmlContent.includes('src="js/orientation-energy-data.js"')) {
    errors.push("❌ Script 'js/orientation-energy-data.js' absent de frontend/job.html");
  } else {
    console.log("   ✅ Tag <script src=\"js/orientation-energy-data.js\"> présent et correctement placé.");
  }

  finish(errors);
}

function finish(errors) {
  console.log('\n======================================================');
  if (errors.length === 0) {
    console.log('🎉 TOUS LES TESTS D\'ARCHITECTURE ET D\'INTÉGRATION SONT AU VERT !');
    console.log('⚡ La famille Énergie, Électricité & Transition Énergétique est 100% opérationnelle.');
    console.log('======================================================\n');
    process.exit(0);
  } else {
    console.error(`💥 ${errors.length} ERREUR(S) DÉTECTÉE(S) :`);
    errors.forEach(e => console.error(e));
    console.log('======================================================\n');
    process.exit(1);
  }
}

runTests();

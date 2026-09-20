/**
 * Automated Verification Script: Production Animale, Élevage & Filières (Groupe ESA Reference)
 * Verifies data integrity, domain mapping, search engine, and non-regression.
 */

const fs = require('fs');
const path = require('path');

console.log('================================================================');
console.log('🧪 VÉRIFICATION ARCHITECTURE : PRODUCTION ANIMALE & ÉLEVAGE');
console.log('================================================================\n');

let passCount = 0;
let failCount = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
    passCount++;
  } else {
    console.error(`  ❌ FAIL: ${message}`);
    failCount++;
  }
}

// 1. Charger OrientationAgriData
const agriData = require('../frontend/js/orientation-agri-data.js');

console.log('--- 1. Vérification du module OrientationAgriData ---');
assert(agriData && typeof agriData === 'object', 'Le module OrientationAgriData est bien exporté');
assert(Array.isArray(agriData.DOMAINS) && agriData.DOMAINS.length === 11, `11 domaines d'excellence présents (trouvé: ${agriData.DOMAINS.length})`);
assert(Array.isArray(agriData.JOBS) && agriData.JOBS.length === 67, `67 fiches métiers dans le catalogue (trouvé: ${agriData.JOBS.length})`);

// 2. Vérification du domaine "elevage-productions-animales"
console.log('\n--- 2. Vérification du domaine Production Animale, Élevage & Filières ---');
const animalDomain = agriData.DOMAINS.find(d => d.id === 'elevage-productions-animales');
assert(animalDomain !== undefined, 'Le domaine elevage-productions-animales existe');
assert(animalDomain.name === 'Production Animale, Élevage & Filières', `Nom harmonisé : "${animalDomain.name}"`);
assert(animalDomain.icon === '🐄', `Icône conforme : "${animalDomain.icon}"`);
assert(Array.isArray(animalDomain.subdomains) && animalDomain.subdomains.length === 12, `12 sous-domaines configurés (trouvé: ${animalDomain.subdomains.length})`);

const expectedSubdomains = [
  'Élevage & conduite des animaux',
  'Génétique & reproduction animale',
  'Alimentation animale & agrofourniture',
  'Santé, bien-être & suivi des animaux',
  'Recherche & expérimentation animale',
  'Conseil & accompagnement des élevages',
  'Bâtiments & infrastructures d\'élevage',
  'Filière lait & collecte',
  'Filière viande & allotement',
  'Filières avicole, porcine, ovine & caprine',
  'Qualité, hygiène, sécurité & environnement (QHSE)',
  'Achats, approvisionnement & commerce du bétail'
];

expectedSubdomains.forEach(sub => {
  assert(animalDomain.subdomains.includes(sub), `Sous-domaine présent : "${sub}"`);
});

// 3. Vérification du cheptel de métiers animaux
console.log('\n--- 3. Vérification des 25 métiers de la production animale ---');
const animalJobs = agriData.JOBS.filter(j => j.domainId === 'elevage-productions-animales');
assert(animalJobs.length === 25, `25 fiches métiers associées au domaine elevage-productions-animales (trouvé: ${animalJobs.length})`);

const expected22EsaSlugs = [
  'eleveur',
  'technicien-centre-allotement',
  'responsable-collecte-laitiere',
  'ingenieur-production-animale',
  'technicien-recherche-animale',
  'responsable-experimentation-animale',
  'geneticien',
  'directeur-rd-agri-animal',
  'responsable-usine-aliment-betail',
  'manager-agrofourniture',
  'technico-commercial-nutrition-animale',
  'ingenieur-conseil-productions-animales',
  'conseiller-batiment-elevage',
  'coordinateur-qhse-agro',
  'auditeur-interne-charte-qualite',
  'inspecteur-sanitaire',
  'coordinateur-formation-securite',
  'acheteur-estimateur-betail',
  'responsable-achat-approvisionnement-agri',
  'controleur-gestion-usine-agri',
  'directeur-marketing-filiere-animale',
  'conseiller-affaires-europeennes-agri'
];

expected22EsaSlugs.forEach(slug => {
  const job = agriData.JOBS.find(j => j.slug === slug || j.id === slug);
  assert(job !== undefined, `Métier ESA présent : "${slug}"`);
  if (job) {
    assert(job.sourceESA === true, `Source ESA taguée pour "${slug}"`);
    assert(job.missions && job.missions.length >= 4, `Missions détaillées (>= 4) pour "${slug}" (trouvé: ${job.missions.length})`);
    assert(job.typicalDay && job.typicalDay.length >= 3, `Journée type (>= 3 étapes) pour "${slug}"`);
    assert(job.skills && job.skills.technical && job.skills.technical.length >= 3, `Compétences techniques pour "${slug}"`);
    assert(job.africaContext && job.africaContext.senegalInsight, `Contextualisation Sénégal / Afrique pour "${slug}"`);
    assert(job.salaryRanges && job.salaryRanges.france && job.salaryRanges.senegal, `Fourchettes de salaire France & Sénégal pour "${slug}"`);
  }
});

// Vérification des notes documentaires spécifiques
console.log('\n--- 4. Vérification des notes documentaires méthodologiques ---');
const controleurJob = agriData.JOBS.find(j => j.id === 'controleur-gestion-usine-agri');
assert(controleurJob && controleurJob.documentaryNote && controleurJob.documentaryNote.includes('Groupe ESA'), 'Note documentaire présente sur Contrôleur de gestion usine');

const allotementJob = agriData.JOBS.find(j => j.id === 'technicien-centre-allotement');
assert(allotementJob && allotementJob.documentaryNote && allotementJob.documentaryNote.includes('Groupe ESA'), 'Note documentaire présente sur Technicien centre d\'allotement');

// 5. Charger OrientationData (avec émulation globale si nécessaire)
console.log('\n--- 5. Vérification du catalogue unifié OrientationData ---');
global.OrientationAgriData = agriData;
const digitalData = require('../frontend/js/orientation-digital-data.js');
global.OrientationDigitalData = digitalData;
const financeData = require('../frontend/js/orientation-finance-data.js');
global.OrientationFinanceData = financeData;

const orientationData = require('../frontend/js/orientation-data.js');

async function runAsyncTests() {
  const allJobs = await orientationData.getAllJobs();
  console.log(`Total fiches métiers unifiées dans la plateforme : ${allJobs.length}`);

  // Test non-régression
  const digitalCatalogJobs = digitalData.getJobs();
  assert(digitalCatalogJobs.length === 103, `Non-régression Numérique : 103 fiches métiers réparties sur 13 domaines (trouvé: ${digitalCatalogJobs.length})`);

  const financeJobs = allJobs.filter(j => j.familyId === 'finance-fintech');
  assert(financeJobs.length === 27, `Non-régression Finance & Fintech : 27 fiches métiers (trouvé: ${financeJobs.length})`);

  const agriFamilyJobs = allJobs.filter(j => j.familyId === 'agriculture-agritech');
  assert(agriFamilyJobs.length >= 67, `Famille Agriculture, Élevage & Agroalimentaire >= 67 fiches (trouvé: ${agriFamilyJobs.length})`);
  assert(allJobs.length >= 200, `Total catalogue unifié >= 200 fiches métiers haute profondeur (trouvé: ${allJobs.length})`);

  // Unicité des identifiants
  const ids = allJobs.map(j => j.id);
  const duplicates = ids.filter((item, index) => ids.indexOf(item) !== index);
  assert(duplicates.length === 0, `Unicité totale des IDs de la plateforme (doublons: ${duplicates.join(', ') || 'aucun'})`);

  // 6. Tests du moteur de recherche universelle
  console.log('\n--- 6. Tests du moteur de recherche universelle ---');
  
  const testA = await orientationData.searchJobs('allotement');
  assert(testA.some(j => j.id === 'technicien-centre-allotement'), 'Recherche "allotement" -> Technicien centre d\'allotement');

  const testB = await orientationData.searchJobs('collecte laitière');
  assert(testB.some(j => j.id === 'responsable-collecte-laitiere'), 'Recherche "collecte laitière" -> Responsable de la collecte laitière');

  const testC = await orientationData.searchJobs('nutrition animale');
  assert(testC.some(j => j.id === 'technico-commercial-nutrition-animale'), 'Recherche "nutrition animale" -> Technico-commercial');
  assert(testC.some(j => j.id === 'responsable-usine-aliment-betail'), 'Recherche "nutrition animale" -> Responsable usine aliment bétail');

  const testD = await orientationData.searchJobs('généticien');
  assert(testD.some(j => j.id === 'geneticien'), 'Recherche "généticien" -> Généticien sciences & production animale');

  const testE = await orientationData.searchJobs('bâtiment d\'élevage');
  assert(testE.some(j => j.id === 'conseiller-batiment-elevage'), 'Recherche "bâtiment d\'élevage" -> Conseiller en bâtiment d\'élevage');

  const testF = await orientationData.searchJobs('acheteur-estimateur');
  assert(testF.some(j => j.id === 'acheteur-estimateur-betail'), 'Recherche "acheteur-estimateur" -> Acheteur-estimateur de bétail');

  const testG = await orientationData.searchJobs('Groupe ESA');
  assert(testG.length >= 20, `Recherche "Groupe ESA" retourne les fiches documentées (trouvé: ${testG.length})`);

  // 7. Boussole & Affinités
  console.log('\n--- 7. Vérification de la Boussole & des Affinités ---');
  const affRes = await orientationData.getExplorationByAffinities(['nature-environnement']);
  assert(affRes.matchedFamilies.some(f => f.id === 'agriculture-agritech'), 'Affinité "nature-environnement" oriente bien vers agriculture-agritech');
  assert(affRes.matchedJobs.some(j => j.domainId === 'elevage-productions-animales'), 'Affinité "nature-environnement" remonte des métiers d\'élevage');

  // Bilan
  console.log('\n================================================================');
  console.log(`🏁 BILAN DE LA VÉRIFICATION : ${passCount} SUCCÈS / ${failCount} ÉCHECS`);
  console.log('================================================================');

  if (failCount > 0) {
    process.exit(1);
  }
}

runAsyncTests().catch(err => {
  console.error('Erreur fatale lors des tests :', err);
  process.exit(1);
});

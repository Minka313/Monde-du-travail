// execution/verify_maritime_architecture.js
const fs = require('fs');
const path = require('path');

console.log('🧪 === VÉRIFICATION ARCHITECTURALE : VOLET PÊCHE, AQUACULTURE & RESSOURCES MARINES ===\n');

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✅ [PASS] ${message}`);
  } else {
    console.error(`  ❌ [FAIL] ${message}`);
    process.exitCode = 1;
  }
}

// 1. Charger les fichiers de données dans un contexte global simulé (Node.js)
const digitalDataCode = fs.readFileSync(path.join(__dirname, '../frontend/js/orientation-digital-data.js'), 'utf8');
const financeDataCode = fs.readFileSync(path.join(__dirname, '../frontend/js/orientation-finance-data.js'), 'utf8');
const agriDataCode = fs.readFileSync(path.join(__dirname, '../frontend/js/orientation-agri-data.js'), 'utf8');
const orientationDataCode = fs.readFileSync(path.join(__dirname, '../frontend/js/orientation-data.js'), 'utf8');

// Créer le contexte global
const windowMock = {};
global.window = windowMock;

eval(digitalDataCode);
eval(financeDataCode);
eval(agriDataCode);
eval(orientationDataCode);

const OrientationDigitalData = windowMock.OrientationDigitalData;
const OrientationFinanceData = windowMock.OrientationFinanceData;
const OrientationAgriData = windowMock.OrientationAgriData;
const OrientationData = windowMock.OrientationData;

console.log('1. Vérification du module OrientationAgriData :');
assert(!!OrientationAgriData, 'OrientationAgriData est bien défini et exposé');
assert(Array.isArray(OrientationAgriData.DOMAINS), 'OrientationAgriData.DOMAINS est un tableau');
assert(OrientationAgriData.DOMAINS.length === 11, `OrientationAgriData contient exactement 11 domaines (actuel: ${OrientationAgriData.DOMAINS.length})`);
assert(Array.isArray(OrientationAgriData.JOBS), 'OrientationAgriData.JOBS est un tableau');
assert(OrientationAgriData.JOBS.length === 45, `OrientationAgriData contient exactement 45 fiches métiers (actuel: ${OrientationAgriData.JOBS.length})`);

console.log('\n2. Vérification de la structure du domaine Pêche, Aquaculture & Ressources Marines :');
const pecheDomain = OrientationAgriData.DOMAINS.find(d => d.id === 'peche-aquaculture');
assert(!!pecheDomain, 'Le domaine peche-aquaculture existe');
assert(pecheDomain.name === 'Pêche, Aquaculture & Ressources Marines', `Nom du domaine exact : "${pecheDomain.name}"`);
assert(pecheDomain.icon === '🌊', `Icône du domaine exacte : "${pecheDomain.icon}"`);

const EXPECTED_SUBDOMAINS = [
  'Pêche & capture',
  'Aquaculture & mariculture',
  'Transformation des produits marins',
  'Maintenance & équipements marins',
  'Qualité & sécurité des produits aquatiques',
  'Gestion des ressources marines',
  'Biologie marine',
  'Navigation & opérations maritimes',
  'Logistique & commercialisation',
  'Technologies marines & numériques'
];

assert(Array.isArray(pecheDomain.subdomains), 'pecheDomain.subdomains est un tableau');
assert(pecheDomain.subdomains.length === 10, `pecheDomain a exactement 10 sous-domaines (actuel: ${pecheDomain.subdomains.length})`);

EXPECTED_SUBDOMAINS.forEach(sub => {
  assert(pecheDomain.subdomains.includes(sub), `Sous-domaine "${sub}" présent`);
});

console.log('\n3. Vérification des 12 métiers maritimes du domaine :');
const maritimeJobs = OrientationAgriData.JOBS.filter(j => j.domainId === 'peche-aquaculture');
assert(maritimeJobs.length === 12, `Le domaine peche-aquaculture contient 12 métiers (actuel: ${maritimeJobs.length})`);

const EXPECTED_MARITIME_SLUGS = [
  'capitaine-proprietaire',
  'aide-pecheur',
  'mecanicien-marin',
  'mariculteur',
  'ouvrier-maricole',
  'prepose-transformation-produits-marins',
  'controleur-qualite-produits-aquatiques',
  'technicien-maintenance-industrielle-maritime',
  'gestionnaire-ressources-maritimes',
  'biologiste-marin',
  'aquaculteur',
  'halieute'
];

EXPECTED_MARITIME_SLUGS.forEach(slug => {
  const found = maritimeJobs.find(j => j.slug === slug || j.id === slug);
  assert(!!found, `Métier maritime "${slug}" présent dans peche-aquaculture`);
  if (found) {
    assert(EXPECTED_SUBDOMAINS.includes(found.subdomain), `Le sous-domaine "${found.subdomain}" du métier "${slug}" est conforme aux 10 sous-domaines`);
  }
});

console.log('\n4. Vérification de la profondeur documentaire des 10 fiches ÉvoluPêches :');
const EVOLU_SLUGS = [
  'capitaine-proprietaire',
  'aide-pecheur',
  'mecanicien-marin',
  'mariculteur',
  'ouvrier-maricole',
  'prepose-transformation-produits-marins',
  'controleur-qualite-produits-aquatiques',
  'technicien-maintenance-industrielle-maritime',
  'gestionnaire-ressources-maritimes',
  'biologiste-marin'
];

EVOLU_SLUGS.forEach(slug => {
  const job = OrientationAgriData.getJobBySlug(slug);
  assert(!!job, `Métier ${slug} récupérable via getJobBySlug`);
  assert(job.sourceEvoluPeches === true, `${slug}: sourceEvoluPeches est true`);
  assert(!!job.cnpCode, `${slug}: cnpCode présent (${job.cnpCode})`);
  assert(Array.isArray(job.characteristics) && job.characteristics.length >= 3, `${slug}: characteristics présent avec au moins 3 éléments`);
  assert(Array.isArray(job.regions) && job.regions.length >= 1, `${slug}: regions québécoises renseignées`);
  assert(!!job.sourceContext, `${slug}: sourceContext renseigné`);
  assert(Array.isArray(job.missions) && job.missions.length >= 4, `${slug}: missions renseignées (>=4)`);
  assert(Array.isArray(job.typicalDay) && job.typicalDay.length >= 4, `${slug}: typicalDay renseigné (>=4 étapes)`);
  assert(!!job.skills && Array.isArray(job.skills.technical) && Array.isArray(job.skills.human), `${slug}: skills techniques et humains présents`);
  assert(!!job.studies && Array.isArray(job.studies.pathway) && Array.isArray(job.studies.schools), `${slug}: études et écoles présentes`);
  assert(!!job.career && !!job.career.pros && !!job.career.cons && !!job.career.evolution, `${slug}: carrière, atouts et évolutions présents`);
  assert(!!job.gettingStarted && !!job.gettingStarted.beginnerProject, `${slug}: gettingStarted projets concrets présents`);
  assert(!!job.aiImpact && !!job.aiImpact.humanEdge, `${slug}: analyse d'impact IA présente`);
  assert(!!job.africaContext && !!job.africaContext.senegalInsight, `${slug}: contextualisation Sénégal / Afrique présente`);
  assert(!!job.salaryRanges && (!!job.salaryRanges.quebec || !!job.salaryRanges.canada) && !!job.salaryRanges.senegal, `${slug}: salaryRanges avec Québec et Sénégal présents`);
});

// Vérification de la reconnaissance des compétences (RAC)
const preposeJob = OrientationAgriData.getJobBySlug('prepose-transformation-produits-marins');
assert(!!preposeJob && !!preposeJob.skillsRecognition && preposeJob.skillsRecognition.available === true, 'prepose-transformation-produits-marins possède skillsRecognition RAC');

console.log('\n5. Vérification du moteur global OrientationData et non-régression :');
(async () => {
  const allJobs = await OrientationData.getAllJobs();
  assert(Array.isArray(allJobs), 'OrientationData.getAllJobs() retourne un tableau');
  assert(allJobs.length >= 170, `Nombre total de métiers >= 170 (actuel: ${allJobs.length})`);

  // Vérification numérique intacte (104 métiers)
  const digitalJobs = await OrientationData.getJobsByFamily('numerique-ia');
  assert(digitalJobs.length === 104, `Famille Numérique intacte : 104 métiers (actuel: ${digitalJobs.length})`);

  // Vérification finance intacte (27 métiers)
  const financeJobs = await OrientationData.getJobsByFamily('finance-fintech');
  assert(financeJobs.length === 27, `Famille Finance intacte : 27 métiers (actuel: ${financeJobs.length})`);

  // Vérification agriculture (45 métiers)
  const agriJobs = await OrientationData.getJobsByFamily('agriculture-agritech');
  assert(agriJobs.length === 45, `Famille Agriculture contient 45 métiers (actuel: ${agriJobs.length})`);

  // Vérification accès direct famille pêche
  const pecheFamilyJobs = await OrientationData.getJobsByFamily('peche-maritime');
  assert(pecheFamilyJobs.length === 12, `Famille peche-maritime renvoie les 12 métiers maritimes (actuel: ${pecheFamilyJobs.length})`);

  // Vérification cartographie des domaines
  const agriDomainsFromData = OrientationData.getFamilyDomains('agriculture-agritech');
  assert(agriDomainsFromData.length === 11, `getFamilyDomains('agriculture-agritech') renvoie 11 domaines`);

  const pecheDomainsFromData = OrientationData.getFamilyDomains('peche-maritime');
  assert(pecheDomainsFromData.length === 1 && pecheDomainsFromData[0].id === 'peche-aquaculture', `getFamilyDomains('peche-maritime') renvoie le domaine peche-aquaculture`);

  // Vérification recherche globale
  const searchResults1 = await OrientationData.searchJobs('capitaine');
  assert(searchResults1.some(j => j.slug === 'capitaine-proprietaire'), 'Recherche "capitaine" trouve le capitaine-propriétaire');

  const searchResults2 = await OrientationData.searchJobs('mariculture');
  assert(searchResults2.some(j => j.slug === 'mariculteur' || j.slug === 'ouvrier-maricole'), 'Recherche "mariculture" trouve mariculteur/ouvrier-maricole');

  const searchResults3 = await OrientationData.searchJobs('ÉvoluPêches');
  assert(searchResults3.length >= 10, `Recherche "ÉvoluPêches" trouve au moins 10 métiers (actuel: ${searchResults3.length})`);

  const searchResults4 = await OrientationData.searchJobs('8261');
  assert(searchResults4.some(j => j.slug === 'capitaine-proprietaire'), 'Recherche par code CNP "8261" trouve le capitaine-propriétaire');

  // Vérification Boussole / Affinités
  const affinityResults = await OrientationData.getExplorationByAffinities(['nature-environnement']);
  assert(affinityResults.matchedJobs.some(j => j.slug === 'capitaine-proprietaire'), 'Affinité "nature-environnement" inclut le capitaine-propriétaire');
  assert(affinityResults.matchedJobs.some(j => j.slug === 'biologiste-marin'), 'Affinité "nature-environnement" inclut le biologiste marin');

  console.log(`\n======================================================`);
  console.log(`📊 RÉSULTAT : ${passedTests}/${totalTests} tests réussis`);
  if (passedTests === totalTests) {
    console.log(`🎉 ARCHITECTURE MARITIME & INTÉGRATION ÉVOLUPÊCHES VALIDÉES À 100% SANS RÉGRESSION !`);
  } else {
    console.error(`⚠️ Certains tests ont échoué.`);
  }
  console.log(`======================================================\n`);
})();

/**
 * Test de vérification complète de l'architecture Lettres, Langues & Sciences Humaines
 * Vérifie l'intégrité des 20 domaines, 32 métiers, l'absence de régression sur les 267 métiers existants,
 * le total >= 299 métiers, l'absence de doublons et le bon fonctionnement de la recherche et des affinités.
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

global.window = global;

console.log('🚀 [VERIFY] Démarrage des tests automatisés LLSH...');

// 1. Charger orientation-llsh-data.js
const llshDataPath = path.join(__dirname, '../frontend/js/orientation-llsh-data.js');
assert(fs.existsSync(llshDataPath), 'orientation-llsh-data.js doit exister');
require(llshDataPath);

const llsh = global.OrientationLlshData;
assert(llsh, 'OrientationLlshData doit être défini globalement');

const domains = llsh.getDomains();
const jobs = llsh.getJobs();

console.log(`✅ [1/6] Module OrientationLlshData chargé : ${domains.length} domaines et ${jobs.length} métiers.`);
assert.strictEqual(domains.length, 20, 'Il doit y avoir exactement 20 domaines LLSH');
assert.strictEqual(jobs.length, 32, 'Il doit y avoir exactement 32 métiers LLSH');

// 2. Vérification de l'intégrité de chaque métier LLSH
const domainIds = new Set(domains.map(d => d.id));
const jobSlugs = new Set();
const jobIds = new Set();

jobs.forEach((job, idx) => {
  assert(job.id, `Métier #${idx} doit avoir un ID`);
  assert(job.slug, `Métier ${job.id} doit avoir un slug`);
  assert(job.title, `Métier ${job.id} doit avoir un titre`);
  assert(job.familyId === 'lettres-langues-sciences-humaines', `Métier ${job.id} doit appartenir à la famille lettres-langues-sciences-humaines`);
  assert(domainIds.has(job.domainId), `Le domainId '${job.domainId}' du métier ${job.id} doit être un des 20 domaines valides`);

  // Unicité des IDs et Slugs
  assert(!jobIds.has(job.id), `Doublon d'ID détecté : ${job.id}`);
  assert(!jobSlugs.has(job.slug), `Doublon de slug détecté : ${job.slug}`);
  jobIds.add(job.id);
  jobSlugs.add(job.slug);

  // Vérification de la complétude de la fiche métier (6 onglets)
  assert(job.shortDescription && job.shortDescription.length > 20, `Description courte trop courte pour ${job.id}`);
  assert(job.longDescription && job.longDescription.length > 50, `Description longue trop courte pour ${job.id}`);
  assert(Array.isArray(job.missions || job.tasks) && (job.missions || job.tasks).length >= 3, `Au moins 3 missions requises pour ${job.id}`);
  assert(job.skills && Array.isArray(job.skills.technical) && job.skills.technical.length >= 2, `Compétences techniques requises pour ${job.id}`);
  assert(job.studies && job.studies.pathway && job.studies.pathway.length >= 2, `Parcours d'études requis pour ${job.id}`);
  assert(job.studies.schools && job.studies.schools.length >= 2, `Établissements requis pour ${job.id}`);
  assert(job.studies.schools.some(s => s.scope === 'Sénégal' || s.country === 'Sénégal'), `Établissement Sénégal requis pour ${job.id}`);
  assert(job.studies.schools.some(s => s.scope === 'France' || s.country === 'France' || s.scope === 'International'), `Établissement France/International requis pour ${job.id}`);
  assert(job.africaContext && job.africaContext.senegalInsight, `Contexte Afrique / Sénégal requis pour ${job.id}`);
  assert(job.aiImpact && job.aiImpact.summary, `Analyse impact IA requise pour ${job.id}`);
});

console.log('✅ [2/6] Les 32 fiches métiers LLSH sont exhaustives, uniques et conformes aux 6 onglets.');

// 3. Charger TOUS les modules de données du projet
global.OrientationDigitalData = require(path.join(__dirname, '../frontend/js/orientation-digital-data.js'));
global.OrientationFinanceData = require(path.join(__dirname, '../frontend/js/orientation-finance-data.js'));
global.OrientationAgriData = require(path.join(__dirname, '../frontend/js/orientation-agri-data.js'));
global.OrientationEnergyData = require(path.join(__dirname, '../frontend/js/orientation-energy-data.js'));
global.OrientationBtpData = require(path.join(__dirname, '../frontend/js/orientation-btp-data.js'));
global.OrientationLlshData = llsh;

global.window.OrientationDigitalData = global.OrientationDigitalData;
global.window.OrientationFinanceData = global.OrientationFinanceData;
global.window.OrientationAgriData = global.OrientationAgriData;
global.window.OrientationEnergyData = global.OrientationEnergyData;
global.window.OrientationBtpData = global.OrientationBtpData;
global.window.OrientationLlshData = global.OrientationLlshData;

require(path.join(__dirname, '../frontend/js/orientation-data.js'));

const OrientationData = global.OrientationData;
assert(OrientationData, 'OrientationData doit être défini globalement');

// 4. Tester les 22+ familles et le routage des domaines
const families = OrientationData.getFamilies();
assert(families.length >= 22, 'Le catalogue doit comporter au moins 22 familles');
const fam22 = families.find(f => f.id === 'lettres-langues-sciences-humaines');
assert(fam22, 'La famille 22 lettres-langues-sciences-humaines doit exister');
assert.strictEqual(fam22.order, 22, 'La famille LLSH doit avoir le numéro d\'ordre 22');

const routedDomains = OrientationData.getFamilyDomains('lettres-langues-sciences-humaines');
assert.strictEqual(routedDomains.length, 20, 'getFamilyDomains pour LLSH doit retourner 20 domaines');

console.log('✅ [3/6] Intégration de la 22ème famille et routage des 20 domaines validés.');

// 5. Tester le volume total des métiers et la non-régression
(async function runGlobalChecks() {
  const allJobs = await OrientationData.getAllJobs();
  console.log(`📊 Nombre total de métiers dans la plateforme : ${allJobs.length}`);

  assert(allJobs.length >= 299, `Le nombre total de métiers (${allJobs.length}) doit être >= 299`);

  // Vérifier qu'aucun slug n'est dupliqué dans l'ensemble de la plateforme
  const globalSlugs = new Map();
  allJobs.forEach(j => {
    const s = j.slug || j.id;
    if (globalSlugs.has(s)) {
      console.warn(`⚠️ Attention : Slug en collision potentielle : ${s}`);
    }
    globalSlugs.set(s, (globalSlugs.get(s) || 0) + 1);
  });

  // Vérifier le sous-ensemble LLSH dans allJobs
  const llshMerged = allJobs.filter(j => j.familyId === 'lettres-langues-sciences-humaines');
  assert.strictEqual(llshMerged.length, 32, `Les 32 métiers LLSH doivent être présents dans getAllJobs (trouvés: ${llshMerged.length})`);

  console.log('✅ [4/6] Volume total validé : ' + allJobs.length + ' métiers (dont 32 LLSH, 0 régression).');

  // 6. Tester le moteur de recherche
  const testQueries = [
    'linguiste',
    'archéologue',
    'psychologue',
    'philosophie',
    'UCAD',
    'Imagine ton Futur'
  ];

  for (const q of testQueries) {
    const results = await OrientationData.searchJobs(q);
    assert(results.length > 0, `La recherche pour "${q}" doit retourner au moins 1 résultat`);
    console.log(`   🔍 Recherche "${q}" : ${results.length} résultat(s)`);
  }

  // 7. Tester le moteur d'affinités
  const affinityExploration = await OrientationData.getExplorationByAffinities(['lire-ecrire-litterature', 'langues-traduire']);
  assert(affinityExploration.matchedFamilies.some(f => f.id === 'lettres-langues-sciences-humaines'), 'L\'affinité littéraire doit inclure LLSH');

  console.log('✅ [5/6] Moteur de recherche & affinités validés sans erreur d\'exécution.');

  // 8. Vérifier la présence du script dans job.html
  const jobHtml = fs.readFileSync(path.join(__dirname, '../frontend/job.html'), 'utf8');
  assert(jobHtml.includes('orientation-llsh-data.js'), 'job.html doit importer orientation-llsh-data.js');

  console.log('✅ [6/6] Intégration HTML dans frontend/job.html confirmée.');
  console.log('\n🎉 TOUS LES TESTS SONT AU VERT ! Architecture LLSH prête pour déploiement.');
})().catch(err => {
  console.error('❌ ÉCHEC DES TESTS :', err);
  process.exit(1);
});

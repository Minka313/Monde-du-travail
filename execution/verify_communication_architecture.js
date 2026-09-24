/**
 * Script de vérification automatisé de l'architecture Communication, Marketing, Médias & Création
 */

const assert = require('assert');
const path = require('path');

// Mock browser environment for UMD modules
global.window = global;

console.log('--- TEST 1 : Chargement des modules ---');
require(path.join(__dirname, '../frontend/js/orientation-communication-data.js'));
require(path.join(__dirname, '../frontend/js/orientation-data.js'));

assert(global.OrientationCommunicationData, 'OrientationCommunicationData doit être défini globalement');
assert(global.OrientationData, 'OrientationData doit être défini globalement');
console.log('✓ Modules chargés avec succès');

console.log('\n--- TEST 2 : Vérification des Domaines Consolidés (Max 6-7, zéro éparpillement) ---');
const domains = global.OrientationCommunicationData.getDomains();
console.log(`Nombre de domaines : ${domains.length}`);
assert.strictEqual(domains.length, 6, 'Il doit y avoir exactement 6 domaines consolidés');

const expectedDomainIds = [
  'communication-relations-publiques',
  'marketing-strategie-marque',
  'marketing-digital-acquisition',
  'medias-publicite-contenu',
  'creation-design',
  'evenementiel-experience'
];

domains.forEach((d, idx) => {
  console.log(`  [${d.order}] ${d.name} (${d.id}) : ${d.subdomains.length} sous-domaines, ${d.jobsCount} métiers`);
  assert.strictEqual(d.id, expectedDomainIds[idx], `Le domaine à l'index ${idx} doit être ${expectedDomainIds[idx]}`);
  assert(d.subdomains && d.subdomains.length >= 3, `Le domaine ${d.id} doit avoir au moins 3 sous-domaines`);
});
console.log('✓ 6 domaines consolidés validés sans fragmentation inutile');

console.log('\n--- TEST 3 : Vérification de l\'absence de doublons (IDs & Slugs) ---');
const jobs = global.OrientationCommunicationData.getJobs();
console.log(`Total métiers dans le module Communication : ${jobs.length}`);
assert(jobs.length >= 60, `Le nombre de métiers doit être d'au moins 60 (reçu ${jobs.length})`);

const seenIds = new Set();
const seenSlugs = new Set();

jobs.forEach(j => {
  assert(!seenIds.has(j.id), `ID en doublon détecté : ${j.id}`);
  assert(!seenSlugs.has(j.slug), `Slug en doublon détecté : ${j.slug}`);
  seenIds.add(j.id);
  seenSlugs.add(j.slug);

  // Vérification de l'ancrage salarial double France & Sénégal
  assert(j.salaries, `Le métier ${j.id} doit avoir un objet salaries`);
  assert(j.salaries.france, `Le métier ${j.id} doit avoir les salaires France`);
  assert(j.salaries.senegal, `Le métier ${j.id} doit avoir les salaires Sénégal`);

  // Vérification des sources
  assert(j.sources && j.sources.length > 0, `Le métier ${j.id} doit citer ses sources`);
});
console.log(`✓ 0 doublon détecté parmi les ${jobs.length} métiers ! Double ancrage salarial validé.`);

console.log('\n--- TEST 4 : Vérification de la Famille 19 & rétrocompatibilité des alias ---');
const families = global.OrientationData.getFamilies();
const fam19 = families.find(f => f.order === 19);
assert(fam19, 'La famille 19 doit exister');
assert.strictEqual(fam19.id, 'communication-marketing-medias-creation', 'L\'id de la famille 19 doit être communication-marketing-medias-creation');
assert(fam19.aliases.includes('culture-medias'), 'La famille 19 doit inclure culture-medias dans ses aliases');
assert.strictEqual(fam19.aliasSlug, 'culture-medias', 'L\'aliasSlug doit être culture-medias pour les URLs existantes');

const famByNewId = global.OrientationData.getFamily('communication-marketing-medias-creation');
const famByOldId = global.OrientationData.getFamily('culture-medias');
assert.strictEqual(famByNewId, fam19, 'getFamily avec nouvel id doit retourner la famille 19');
assert.strictEqual(famByOldId, fam19, 'getFamily avec ancien slug "culture-medias" doit retourner la famille 19');
console.log('✓ Famille 19 et rétrocompatibilité des alias validées');

console.log('\n--- TEST 5 : Vérification de getFamilyDomains ---');
const domainsFromNewId = global.OrientationData.getFamilyDomains('communication-marketing-medias-creation');
const domainsFromOldId = global.OrientationData.getFamilyDomains('culture-medias');
assert.strictEqual(domainsFromNewId.length, 6, 'getFamilyDomains pour nouvel id doit retourner 6 domaines');
assert.strictEqual(domainsFromOldId.length, 6, 'getFamilyDomains pour ancien id doit retourner 6 domaines');
console.log('✓ getFamilyDomains résout les 6 domaines pour le nouvel ID et l\'alias');

async function runAsyncTests() {
  console.log('\n--- TEST 6 : Intégration dans getAllJobs() & Cross-linking ---');
  const allJobs = await global.OrientationData.getAllJobs();
  console.log(`Nombre total de métiers dans la plateforme : ${allJobs.length}`);

  // Vérifier qu'un métier nouveau est bien présent
  const brandStrategist = allJobs.find(j => j.id === 'brand-strategist');
  assert(brandStrategist, 'brand-strategist doit être présent dans getAllJobs()');
  console.log(`  ✓ Fiche trouvée : ${brandStrategist.title} (${brandStrategist.domain})`);

  // Vérifier le cross-linking d'un métier existant (ex: ui-designer)
  const uiDesigner = allJobs.find(j => j.id === 'ui-designer');
  if (uiDesigner) {
    assert(uiDesigner.connectedFamilies && (uiDesigner.connectedFamilies.includes('communication-marketing-medias-creation') || uiDesigner.connectedFamilies.includes('culture-medias')),
      'ui-designer doit être relié à la famille communication');
    console.log(`  ✓ Cross-linking validé pour ui-designer : ${uiDesigner.connectedFamilies.join(', ')}`);
  }

  console.log('\n--- TEST 7 : Test de Recherche Multi-critères ---');
  const queries = ['publicité', 'relations presse', 'brand', 'acquisition', 'événementiel', 'graphiste', 'direction artistique'];
  for (const q of queries) {
    const results = await global.OrientationData.searchJobs(q);
    console.log(`  Recherche "${q}" : ${results.length} résultats`);
    assert(results.length > 0, `La recherche "${q}" doit retourner au moins un résultat`);
  }
  console.log('✓ Moteur de recherche opérationnel sur le vocabulaire communication & marketing');

  console.log('\n--- TEST 8 : Moteur d\'Affinités (Boussole) ---');
  const affinityResult = await global.OrientationData.getExplorationByAffinities([
    'ecrire-publicites-slogans',
    'creer-visuels-identite-marque'
  ]);
  assert(affinityResult.matchedFamilies.some(f => f.id === 'communication-marketing-medias-creation'),
    'Les affinités publicitaires doivent recommander la famille communication');
  console.log(`  Familles matchées : ${affinityResult.matchedFamilies.map(f => f.name).join(' | ')}`);
  console.log(`  Métiers matchés : ${affinityResult.matchedJobs.length}`);
  console.log('✓ Boussole d\'orientation validée avec succès');

  console.log('\n======================================================');
  console.log('🎉 TOUS LES TESTS SONT AU VERT ! ARCHITECTURE VALIDÉE');
  console.log('======================================================');
}

runAsyncTests().catch(err => {
  console.error('ÉCHEC DES TESTS :', err);
  process.exit(1);
});

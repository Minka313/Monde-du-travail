/**
 * SCRIPT DE VÉRIFICATION & AUDIT DE QUALITÉ
 * Mission : Enrichissement profond du secteur numérique (Le Monde du Travail)
 */

const assert = require('assert');

// Simuler l'environnement browser si besoin
global.window = global;

console.log('🔍 Début de la vérification de conformité...');

// 1. Charger OrientationDigitalData
require('../frontend/js/orientation-digital-data.js');
const DigitalData = global.window.OrientationDigitalData;
assert(DigitalData, '❌ OrientationDigitalData doit être défini');
console.log('✅ 1. OrientationDigitalData chargé avec succès.');

// 2. Charger OrientationData
const OrientationData = require('../frontend/js/orientation-data.js');
assert(OrientationData, '❌ OrientationData doit être défini');
console.log('✅ 2. OrientationData chargé avec succès.');

async function runTests() {
  // Test 1: Les 21 Grandes Familles
  const families = OrientationData.getFamilies();
  assert.strictEqual(families.length, 21, `❌ Doit comporter exactement 21 grandes familles, reçu : ${families.length}`);
  console.log(`✅ Test 1 : 21 Grandes Familles intactes (reçu ${families.length}).`);

  // Vérifier la famille numérique
  const numFamily = OrientationData.getFamily('numerique-ia');
  assert(numFamily, '❌ La famille numerique-ia doit exister');
  assert.strictEqual(numFamily.id, 'numerique-ia');
  console.log(`✅ Test 1.1 : Famille "numerique-ia" présente : "${numFamily.name}" (${numFamily.icon}).`);

  // Test 2: Les 13 Pôles du Numérique
  const digitalDomains = OrientationData.getDigitalDomains();
  assert.strictEqual(digitalDomains.length, 13, `❌ Doit comporter exactement 13 pôles du numérique, reçu : ${digitalDomains.length}`);
  console.log(`✅ Test 2 : 13 Pôles d'excellence du numérique présents.`);
  digitalDomains.forEach(d => {
    assert(d.id && d.name && d.icon && Array.isArray(d.subdomains), `❌ Pôle invalide : ${JSON.stringify(d)}`);
  });

  // Test 3: Totalité des fiches métiers
  const allJobs = await OrientationData.getAllJobs();
  assert(allJobs.length >= 110, `❌ Le catalogue doit comporter au moins 110 métiers, reçu : ${allJobs.length}`);
  console.log(`✅ Test 3 : Catalogue global chargé (${allJobs.length} métiers total).`);

  // Test 4: Exploration Pôle Numérique (100+ métiers sous numerique-ia)
  const digitalFamilyJobs = await OrientationData.getJobsByFamily('numerique-ia');
  assert(digitalFamilyJobs.length >= 100, `❌ numerique-ia doit rassembler au moins 100 métiers, reçu : ${digitalFamilyJobs.length}`);
  console.log(`✅ Test 4 : Cartographie numérique rassemble ${digitalFamilyJobs.length} métiers.`);

  // Test 5: Filtrage par domaine
  const iaJobs = await OrientationData.getJobsBySubdomain('numerique-ia', 'all', 'intelligence-artificielle');
  assert(iaJobs.length >= 8, `❌ Le pôle IA doit comporter au moins 8 métiers, reçu : ${iaJobs.length}`);
  console.log(`✅ Test 5 : Filtrage Pôle IA OK (${iaJobs.length} métiers : ${iaJobs.map(j => j.title).join(', ')}).`);

  const cyberJobs = await OrientationData.getJobsBySubdomain('numerique-ia', 'all', 'cybersecurite');
  assert(cyberJobs.length >= 10, `❌ Le pôle Cyber doit comporter au moins 10 métiers, reçu : ${cyberJobs.length}`);
  console.log(`✅ Test 5.1 : Filtrage Pôle Cyber OK (${cyberJobs.length} métiers).`);

  // Test 6: Recherche multi-critères
  console.log('🔍 Test 6 : Validation du moteur de recherche...');
  const searchPython = await OrientationData.searchJobs('python');
  assert(searchPython.length >= 10, `❌ Recherche 'python' doit trouver au moins 10 métiers, reçu : ${searchPython.length}`);
  console.log(`   - Recherche 'python' : ${searchPython.length} métiers trouvés.`);

  const searchFigma = await OrientationData.searchJobs('figma');
  assert(searchFigma.length >= 5, `❌ Recherche 'figma' doit trouver au moins 5 métiers, reçu : ${searchFigma.length}`);
  console.log(`   - Recherche 'figma' : ${searchFigma.length} métiers trouvés.`);

  const searchDocker = await OrientationData.searchJobs('docker');
  assert(searchDocker.length >= 5, `❌ Recherche 'docker' doit trouver au moins 5 métiers, reçu : ${searchDocker.length}`);
  console.log(`   - Recherche 'docker' : ${searchDocker.length} métiers trouvés.`);

  const searchESD = await OrientationData.searchJobs('ESD');
  assert(searchESD.length >= 20, `❌ Recherche 'ESD' doit trouver les fiches référencées ESD, reçu : ${searchESD.length}`);
  console.log(`   - Recherche 'ESD' : ${searchESD.length} métiers trouvés.`);

  // Test 7: Boussole des affinités
  console.log('🧭 Test 7 : Validation de la Boussole des affinités...');
  const affinityResult = await OrientationData.getExplorationByAffinities(['technologie-code', 'resoudre-problemes']);
  assert(affinityResult.matchedFamilies.length > 0, '❌ Doit recommander des familles');
  assert(affinityResult.matchedJobs.length > 0, '❌ Doit recommander des métiers');
  console.log(`   - Boussole Affinités : ${affinityResult.matchedFamilies.length} familles et ${affinityResult.matchedJobs.length} métiers suggérés.`);

  // Test 8: Complétude des fiches métiers enrichies
  console.log('📋 Test 8 : Vérification de la structure des fiches métiers...');
  const sampleDigitalJob = await OrientationData.getJobBySlug('developpeur-fullstack');
  assert(sampleDigitalJob, '❌ Le job developpeur-fullstack doit exister');
  assert(sampleDigitalJob.simpleDefinition, '❌ Doit avoir simpleDefinition');
  assert(sampleDigitalJob.aiImpact && sampleDigitalJob.aiImpact.assistedTasks, '❌ Doit avoir aiImpact complet');
  assert(sampleDigitalJob.gettingStarted && sampleDigitalJob.gettingStarted.beginnerProject, '❌ Doit avoir gettingStarted');
  assert(sampleDigitalJob.africaContext && sampleDigitalJob.africaContext.senegalInsight, '❌ Doit avoir africaContext avec Sénégal');
  assert(sampleDigitalJob.aliases && sampleDigitalJob.aliases.length > 0, '❌ Doit avoir des alias');
  assert(sampleDigitalJob.skills && sampleDigitalJob.skills.technical.length > 0, '❌ Doit avoir skills.technical');
  assert(sampleDigitalJob.studies && sampleDigitalJob.studies.schools.length > 0, '❌ Doit avoir schools');
  console.log('✅ Test 8 : Fiche Développeur Fullstack ultra-complète (Définition simple, Impact IA, Sénégal/Afrique, Getting Started, Alias, Formations).');

  // Test 9: Vérification des drapeaux ESD et Émergents
  const esdCount = allJobs.filter(j => j.sourceESD).length;
  const emergingCount = allJobs.filter(j => j.isEmerging).length;
  console.log(`✅ Test 9 : Traçabilité des sources -> ${esdCount} métiers sourcés ESD, ${emergingCount} métiers émergents.`);
  assert(esdCount >= 50, '❌ Au moins 50 métiers doivent être tagués sourceESD');

  console.log('\n🎉 TOUS LES TESTS SONT AU VERT ! CONFORMITÉ 100% VALIDÉE.');
}

runTests().catch(err => {
  console.error('❌ Erreur lors de la vérification :', err);
  process.exit(1);
});

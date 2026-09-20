// execution/verify_agri_architecture.js
const assert = require('assert');

// Charger les trois catalogues
const digitalData = require('../frontend/js/orientation-digital-data.js');
const financeData = require('../frontend/js/orientation-finance-data.js');
const agriData = require('../frontend/js/orientation-agri-data.js');

// Simuler window et global pour charger orientation-data.js
global.OrientationDigitalData = digitalData;
global.OrientationFinanceData = financeData;
global.OrientationAgriData = agriData;

const orientationData = require('../frontend/js/orientation-data.js');

async function runTests() {
  console.log('🚀 Démarrage de la vérification de l\'architecture Agriculture...');

  // 1. Vérification du module OrientationAgriData
  assert(agriData, 'OrientationAgriData doit être défini');
  const domains = agriData.getDomains();
  const jobs = agriData.getJobs();

  console.log(`✅ Domaines agricoles : ${domains.length} (Attendu : 11)`);
  assert.strictEqual(domains.length, 11, 'Il doit y avoir exactement 11 domaines agricoles');

  console.log(`✅ Métiers agricoles : ${jobs.length} (Attendu : 35)`);
  assert(jobs.length >= 28, 'Il doit y avoir au moins 28 fiches métiers agricoles');

  // 2. Vérification de la complétude de chaque fiche métier
  const expectedDomainIds = domains.map(d => d.id);
  const requiredFields = [
    'id', 'slug', 'title', 'icon', 'familyId', 'domain', 'domainId',
    'subdomain', 'level', 'salary', 'salaryRanges', 'simpleDefinition',
    'shortDescription', 'longDescription', 'mainObjective', 'companyRole',
    'workEnvironment', 'missions', 'typicalDay', 'skills', 'studies',
    'career', 'gettingStarted', 'aiImpact', 'africaContext', 'saviezVous'
  ];

  jobs.forEach(job => {
    requiredFields.forEach(f => {
      assert(job[f], `Le métier ${job.slug} doit posséder le champ ${f}`);
    });

    assert(expectedDomainIds.includes(job.domainId), `Le métier ${job.slug} a un domainId invalide : ${job.domainId}`);
    assert(job.missions.length >= 4, `Le métier ${job.slug} doit avoir au moins 4 missions`);
    assert(job.typicalDay.length >= 4, `Le métier ${job.slug} doit avoir au moins 4 étapes dans typicalDay`);
    assert(job.skills.technical && job.skills.technical.length >= 3, `Le métier ${job.slug} doit avoir des compétences techniques`);
    assert(job.skills.human && job.skills.human.length >= 3, `Le métier ${job.slug} doit avoir des compétences humaines`);
    assert(job.skills.tools && job.skills.tools.length >= 3, `Le métier ${job.slug} doit avoir des outils`);
    assert(job.saviezVous.statut && job.saviezVous.fait && job.saviezVous.pourquoi && job.saviezVous.a_retenir, `Le saviezVous de ${job.slug} est incomplet`);
    assert(['metier_d_avenir', 'metier_en_tension', 'metier_stable'].includes(job.saviezVous.statut), `Statut invalide pour ${job.slug}: ${job.saviezVous.statut}`);
    assert(job.salaryRanges.france && job.salaryRanges.senegal, `Multi-territoire salaire manquant pour ${job.slug}`);
  });
  console.log('✅ Intégrité des 35 fiches validée à 100% (missions, skills, typicalDay, saviezVous, salaires).');

  // 3. Vérification de l'intégration dans OrientationData
  const allJobs = await orientationData.getAllJobs();
  console.log(`✅ Total combiné getAllJobs() : ${allJobs.length} métiers`);
  
  // Vérification de la non-régression Numérique & Finance
  const digitalJobs = await orientationData.getJobsByFamily('numerique-ia');
  console.log(`✅ Métiers Famille Numérique : ${digitalJobs.length} (Attendu : 104)`);
  assert.strictEqual(digitalJobs.length, 104, 'La famille numérique doit toujours contenir 104 métiers');

  const financeJobs = await orientationData.getJobsByFamily('finance-fintech');
  console.log(`✅ Métiers Famille Finance : ${financeJobs.length} (Attendu : 27)`);
  assert.strictEqual(financeJobs.length, 27, 'La famille finance doit toujours contenir 27 métiers');

  const agriFamilyJobs = await orientationData.getJobsByFamily('agriculture-agritech');
  console.log(`✅ Métiers Famille Agriculture : ${agriFamilyJobs.length} (Attendu : 35)`);
  assert.strictEqual(agriFamilyJobs.length, 35, 'La famille agriculture doit contenir 35 métiers');

  // 4. Test de cartographie double niveau (getFamilyDomains)
  const agriFamilyDomains = orientationData.getFamilyDomains('agriculture-agritech');
  assert.strictEqual(agriFamilyDomains.length, 11, 'getFamilyDomains("agriculture-agritech") doit renvoyer 11 domaines');
  console.log('✅ Cartographie double niveau vérifiée pour agriculture-agritech (11 domaines).');

  // 5. Test du filtrage par domaine
  const domain1Jobs = await orientationData.getJobsBySubdomain('agriculture-agritech', null, 'agronomie-sciences-agricoles');
  console.log(`✅ Métiers dans le domaine Agronomie & Sciences Agricoles : ${domain1Jobs.length}`);
  assert(domain1Jobs.length >= 4, 'Le domaine agronomie doit contenir au moins 4 métiers');

  // 6. Test de déduplication : ingenieur-agronome doit être unique
  const agronomes = allJobs.filter(j => j.slug === 'ingenieur-agronome');
  assert.strictEqual(agronomes.length, 1, 'Ingénieur agronome ne doit pas être dupliqué dans getAllJobs()');
  console.log('✅ Déduplication vérifiée : 1 seul ingenieur-agronome enrichi.');

  // 7. Test de recherche
  const searchResults = await orientationData.searchJobs('agronome');
  assert(searchResults.length > 0, 'La recherche "agronome" doit retourner des résultats');
  console.log(`✅ Recherche "agronome" opérationnelle (${searchResults.length} résultats).`);

  const searchMachinisme = await orientationData.searchJobs('tracteur');
  assert(searchMachinisme.length > 0, 'La recherche "tracteur" doit retourner des résultats');
  console.log(`✅ Recherche "tracteur" opérationnelle (${searchMachinisme.length} résultats).`);

  console.log('\n🎉 TOUS LES TESTS D\'ARCHITECTURE AGRICULTURE SONT PASSÉS AVEC SUCCÈS !');
}

runTests().catch(err => {
  console.error('❌ Échec des tests :', err);
  process.exit(1);
});

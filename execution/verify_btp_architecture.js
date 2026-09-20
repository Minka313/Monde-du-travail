// execution/verify_btp_architecture.js
// Script de vérification automatisée de l'architecture BTP, Architecture & Construction

const fs = require('fs');
const path = require('path');

// Simuler l'environnement de navigateur
global.window = global;

const d = require('../frontend/js/orientation-digital-data.js');
const f = require('../frontend/js/orientation-finance-data.js');
const a = require('../frontend/js/orientation-agri-data.js');
const e = require('../frontend/js/orientation-energy-data.js');
const b = require('../frontend/js/orientation-btp-data.js');

global.window.OrientationDigitalData = d;
global.window.OrientationFinanceData = f;
global.window.OrientationAgriData = a;
global.window.OrientationEnergyData = e;
global.window.OrientationBtpData = b;

require('../frontend/js/orientation-data.js');

async function runVerification() {
  console.log('🚀 Démarrage des tests automatisés pour BTP, Architecture & Construction...\n');

  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✅ ${message}`);
      passed++;
    } else {
      console.error(`  ❌ ÉCHEC: ${message}`);
      failed++;
    }
  }

  // 1. Vérification d'OrientationBtpData
  console.log('--- Test 1 : Module OrientationBtpData ---');
  assert(typeof b === 'object' && b !== null, 'OrientationBtpData est bien exporté');
  const domains = b.getDomains();
  assert(Array.isArray(domains) && domains.length === 15, `OrientationBtpData expose exactement 15 domaines (obtenu: ${domains.length})`);
  
  const jobs = b.getJobs();
  assert(Array.isArray(jobs) && jobs.length === 37, `OrientationBtpData expose exactement 37 fiches métiers (obtenu: ${jobs.length})`);

  // Vérifier l'intégrité de chaque fiche
  const domainIds = new Set(domains.map(d => d.id));
  const jobIds = new Set();
  const jobSlugs = new Set();
  let invalidJobs = 0;

  jobs.forEach(j => {
    if (!j.id || !j.slug || !j.title || !j.domainId || !domainIds.has(j.domainId)) invalidJobs++;
    if (jobIds.has(j.id) || jobSlugs.has(j.slug)) invalidJobs++;
    jobIds.add(j.id);
    jobSlugs.add(j.slug);

    if (!j.missions || j.missions.length < 3) invalidJobs++;
    if (!j.typicalDay || j.typicalDay.length < 3) invalidJobs++;
    if (!j.skills || !j.skills.technical || !j.skills.human || !j.skills.tools) invalidJobs++;
    if (!j.studies || !j.studies.pathway || !j.studies.schools) invalidJobs++;
    if (!j.career || !j.career.sectors || !j.career.evolution) invalidJobs++;
    if (!j.gettingStarted || !j.gettingStarted.beginnerProject) invalidJobs++;
    if (!j.aiImpact || !j.aiImpact.summary) invalidJobs++;
    if (!j.africaContext || !j.africaContext.senegalInsight) invalidJobs++;
    if (!j.saviezVous || !j.saviezVous.fait) invalidJobs++;
  });

  assert(invalidJobs === 0, `Les 37 fiches métiers BTP respectent 100% du schéma 6 onglets approfondi (anomalies: ${invalidJobs})`);

  // 2. Vérification des métadonnées de la famille 10 dans OrientationData
  console.log('\n--- Test 2 : Métadonnées Famille 10 dans OrientationData ---');
  const family = OrientationData.getFamily('btp-architecture');
  assert(family !== null, 'La famille btp-architecture existe');
  assert(family.name === 'BTP, Architecture & Construction', `Nom de la famille conforme : "${family.name}"`);
  assert(family.icon === '🏗️', `Icône de la famille conforme : "${family.icon}"`);
  assert(family.stats && family.stats.subdomainsCount === 15, `Compteur de sous-domaines = 15`);
  assert(Array.isArray(family.subdomains) && family.subdomains.length === 15, `Liste des sous-domaines = 15`);

  // 3. Vérification de getFamilyDomains('btp-architecture')
  console.log('\n--- Test 3 : Routage des domaines d\'excellence ---');
  const btpFamilyDomains = OrientationData.getFamilyDomains('btp-architecture');
  assert(Array.isArray(btpFamilyDomains) && btpFamilyDomains.length === 15, `OrientationData.getFamilyDomains('btp-architecture') renvoie les 15 domaines`);

  // 4. Intégration globale dans getAllJobs() et non-régression
  console.log('\n--- Test 4 : getAllJobs() et Non-régression multi-familles ---');
  const allJobs = await OrientationData.getAllJobs();
  assert(Array.isArray(allJobs), 'getAllJobs() renvoie une liste');
  assert(allJobs.length >= 267, `Total des métiers sur la plateforme >= 267 (obtenu: ${allJobs.length})`);

  // Vérifier l'absence absolue de doublons d'IDs globaux
  const globalIds = new Set();
  let duplicateCount = 0;
  allJobs.forEach(j => {
    if (globalIds.has(j.id)) duplicateCount++;
    globalIds.add(j.id);
  });
  assert(duplicateCount === 0, `Zéro doublon d'ID détecté sur la plateforme entière (doublons: ${duplicateCount})`);

  // Vérifier la non-régression des familles précédentes
  const digitalIds = new Set(d.getJobs().map(j => j.id));
  const financeIds = new Set(f.getJobs().map(j => j.id));
  const agriIds = new Set(a.getJobs().map(j => j.id));
  const energyIds = new Set(e.getJobs().map(j => j.id));
  const btpIds = new Set(b.getJobs().map(j => j.id));

  const presentDigital = allJobs.filter(j => digitalIds.has(j.id));
  const presentFinance = allJobs.filter(j => financeIds.has(j.id));
  const presentAgri = allJobs.filter(j => agriIds.has(j.id));
  const presentEnergy = allJobs.filter(j => energyIds.has(j.id));
  const presentBtp = allJobs.filter(j => btpIds.has(j.id));

  assert(presentDigital.length >= 103, `Non-régression Numérique & IA : ${presentDigital.length} métiers (attendu: 103)`);
  assert(presentFinance.length >= 27, `Non-régression Finance & Banque : ${presentFinance.length} métiers (attendu: 27)`);
  assert(presentAgri.length >= 67, `Non-régression Agriculture/Élevage/Pêche : ${presentAgri.length} métiers (attendu: 67)`);
  assert(presentEnergy.length >= 26, `Non-régression Énergie & Électricité : ${presentEnergy.length} métiers (attendu: 26)`);
  assert(presentBtp.length >= 37, `Intégration BTP & Architecture : ${presentBtp.length} métiers (attendu: 37)`);

  // 5. Test du moteur de recherche universel
  console.log('\n--- Test 5 : Recherche universelle sur les termes clés BTP ---');
  const searchQueries = [
    { q: 'architecte', expectedMin: 2 },
    { q: 'maçon', expectedMin: 1 },
    { q: 'BIM', expectedMin: 1 },
    { q: 'géomètre', expectedMin: 1 },
    { q: 'conducteur de travaux', expectedMin: 1 },
    { q: 'chef de chantier', expectedMin: 1 },
    { q: 'électricien', expectedMin: 1 },
    { q: 'plombier', expectedMin: 1 },
    { q: 'climatisation', expectedMin: 1 },
    { q: 'grutier', expectedMin: 1 },
    { q: 'carreleur', expectedMin: 1 },
    { q: 'couvreur', expectedMin: 1 },
    { q: 'charpentier', expectedMin: 1 },
    { q: 'tailleur de pierre', expectedMin: 1 },
    { q: 'cordiste', expectedMin: 1 },
    { q: 'domotique', expectedMin: 1 },
    { q: 'éco-conception', expectedMin: 1 },
    { q: 'AGEROUTE', expectedMin: 2 }
  ];

  for (const { q, expectedMin } of searchQueries) {
    const results = await OrientationData.searchJobs(q);
    assert(results.length >= expectedMin, `Recherche "${q}" : ${results.length} résultat(s) (attendu >= ${expectedMin})`);
  }

  console.log(`\n========================================`);
  console.log(`RÉSULTAT GLOBAL : ${passed} passés, ${failed} échoués`);
  console.log(`========================================`);

  if (failed > 0) {
    process.exit(1);
  } else {
    console.log('🎉 TOUS LES TESTS SONT AU VERT ! Intégration BTP 100% conforme.\n');
  }
}

runVerification().catch(err => {
  console.error('Erreur fatale lors de la vérification :', err);
  process.exit(1);
});

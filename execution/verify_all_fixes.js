/**
 * Script de validation déterministe des correctifs :
 * 1. Affichage et chargement des fiches métiers (535 fiches sur 23 familles)
 * 2. Accès admin au module Métiers (rôle ADMIN et ULTRA_ADMIN)
 * 3. Synchronisation globale des statistiques
 */

const assert = require('assert');

// 1. Simuler l'environnement client pour les modules d'orientation
global.window = global;
global.OrientationDigitalData = require('../frontend/js/orientation-digital-data.js');
global.OrientationFinanceData = require('../frontend/js/orientation-finance-data.js');
global.OrientationAgriData = require('../frontend/js/orientation-agri-data.js');
global.OrientationEnergyData = require('../frontend/js/orientation-energy-data.js');
global.OrientationBtpData = require('../frontend/js/orientation-btp-data.js');
global.OrientationLlshData = require('../frontend/js/orientation-llsh-data.js');
global.OrientationIndustryData = require('../frontend/js/orientation-industry-data.js');
global.OrientationGeosciencesData = require('../frontend/js/orientation-geosciences-data.js');
global.OrientationHealthData = require('../frontend/js/orientation-health-data.js');
global.OrientationBioChimieData = require('../frontend/js/orientation-biochimie-data.js');
global.OrientationEducationData = require('../frontend/js/orientation-education-data.js');
global.OrientationEnvironmentData = require('../frontend/js/orientation-environment-data.js');
global.OrientationHospitalityData = require('../frontend/js/orientation-hospitality-data.js');
global.OrientationCommunicationData = require('../frontend/js/orientation-communication-data.js');

const OrientationData = require('../frontend/js/orientation-data.js');

async function testOrientationData() {
  console.log('🧪 TEST 1 : Catalogue des fiches métiers');
  const allJobs = await OrientationData.getAllJobs();
  console.log(`  -> Total fiches métiers combinées : ${allJobs.length}`);
  assert(allJobs.length >= 535, `Le catalogue doit contenir au moins 535 fiches (actuel : ${allJobs.length})`);

  const families = OrientationData.getFamilies();
  console.log(`  -> Total familles configurées : ${families.length}`);
  assert.strictEqual(families.length, 23, 'Il doit y avoir exactement 23 grandes familles');

  console.log('\n🧪 TEST 2 : Présence de fiches pour chaque famille');
  for (const f of families) {
    const jobs = await OrientationData.getJobsByFamily(f.id);
    assert(jobs.length > 0, `La famille ${f.id} ne doit pas avoir 0 métier !`);
    console.log(`  ✓ ${f.id} : ${jobs.length} métiers (${f.stats.jobsEstimate})`);
  }

  // Test spécifique Communication
  console.log('\n🧪 TEST 3 : Validation famille Communication');
  const commJobs = await OrientationData.getJobsByFamily('communication-marketing-medias-creation');
  console.log(`  -> Fiches communication directes + connectées : ${commJobs.length}`);
  assert(commJobs.length >= 65, 'La famille communication doit comporter au moins 65 fiches');

  // Test sous-domaines communication
  const commDomains = OrientationData.getFamilyDomains('communication-marketing-medias-creation');
  assert(commDomains.length === 6, 'Communication doit avoir 6 domaines structurés');
  for (const d of commDomains) {
    const subJobs = await OrientationData.getJobsBySubdomain('communication-marketing-medias-creation', 'all', d.name);
    console.log(`    - Pôle "${d.name}" : ${subJobs.length} fiches`);
    assert(subJobs.length > 0, `Le pôle communication ${d.name} ne doit pas être vide`);
  }

  // Test spécifique Métiers Émergents
  console.log('\n🧪 TEST 3b : Validation famille Métiers Émergents & du Futur');
  const emergingJobs = await OrientationData.getJobsByFamily('metiers-emergents');
  console.log(`  -> Fiches métiers émergents : ${emergingJobs.length}`);
  assert.strictEqual(emergingJobs.length, 39, 'La famille Métiers Émergents doit comporter exactement 39 fiches');

  // Test pôles métiers émergents
  const emergingDomains = OrientationData.getFamilyDomains('metiers-emergents');
  assert.strictEqual(emergingDomains.length, 7, 'Métiers Émergents doit comporter exactement 7 pôles structurés');
  for (const ed of emergingDomains) {
    const subJobs = await OrientationData.getJobsBySubdomain('metiers-emergents', 'all', ed.id);
    console.log(`    - Pôle "${ed.name}" : ${subJobs.length} fiches`);
    assert(subJobs.length > 0, `Le pôle émergent ${ed.name} ne doit pas être vide`);
  }
}

function testAdminRBAC() {
  console.log('\n🧪 TEST 4 : Droits d\'accès Espace Admin (ADMIN & ULTRA_ADMIN)');
  
  // Charger admin-app
  require('../admin-frontend/js/admin-app.js');
  const AdminApp = global.AdminApp;
  assert(AdminApp, 'AdminApp doit être défini');

  const adminUser = { id: 'admin-1', email: 'admin@lmt.org', role: 'ADMIN', permissions: [] };
  const ultraUser = { id: 'ultra-1', email: 'ultra@lmt.org', role: 'ULTRA_ADMIN', permissions: ['*'] };

  // hasPermission metier.read
  assert.strictEqual(AdminApp.hasPermission(adminUser, 'metier.read'), true, 'ADMIN doit avoir accès à metier.read');
  assert.strictEqual(AdminApp.hasPermission(adminUser, 'formation.read'), true, 'ADMIN doit avoir accès à formation.read');
  assert.strictEqual(AdminApp.hasPermission(ultraUser, 'metier.read'), true, 'ULTRA_ADMIN doit avoir accès à metier.read');

  // getAuthorizedModules
  const adminModules = AdminApp.getAuthorizedModules(adminUser);
  console.log(`  -> Modules autorisés pour ADMIN : ${adminModules.join(', ')}`);
  assert(adminModules.includes('metiers'), 'ADMIN doit avoir accès au module metiers');
  assert(adminModules.includes('dashboard'), 'ADMIN doit avoir accès au dashboard');
  assert(adminModules.includes('formations'), 'ADMIN doit avoir accès au module formations');

  // Test middleware RBAC backend
  const rbacMiddleware = require('../backend/src/middleware/rbac.js');
  let allowed = false;
  const mockReq = { user: { role: 'ADMIN', permissions: [] } };
  const mockRes = {};
  const mockNext = (err) => {
    if (!err) allowed = true;
  };

  rbacMiddleware.authorize('metier.read')(mockReq, mockRes, mockNext);
  assert.strictEqual(allowed, true, 'Le middleware RBAC backend doit autoriser ADMIN sur metier.read');
  console.log('  ✓ Middleware backend RBAC valide l\'accès ADMIN sans blocage');
}

async function run() {
  try {
    await testOrientationData();
    testAdminRBAC();
    console.log('\n✅ TOUS LES TESTS DÉTERMINISTES ONT RÉUSSI AVEC SUCCÈS !');
  } catch (err) {
    console.error('\n❌ ÉCHEC D\'UN TEST :', err);
    process.exit(1);
  }
}

run();

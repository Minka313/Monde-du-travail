/**
 * Script déterministe de vérification des optimisations de performance
 * Valide le comportement du cache, des requêtes SQL et des assets statiques.
 */

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../backend/.env') });

const prisma = require('../backend/src/config/database');
const SettingsService = require('../backend/src/services/settingsService');
const JobService = require('../backend/src/services/jobService');
const FormationService = require('../backend/src/services/formationService');
const AnalyticsService = require('../backend/src/services/analyticsService');
const fs = require('fs');

async function runBenchmarkAndVerification() {
  console.log('=== TEST DE VÉRIFICATION DES PERFORMANCES ===\n');

  let passed = 0;
  let total = 0;

  function assert(condition, message) {
    total++;
    if (condition) {
      console.log(`  ✅ [PASS] ${message}`);
      passed++;
    } else {
      console.error(`  ❌ [FAIL] ${message}`);
    }
  }

  try {
    // 1. Test du cache mémoire des Settings
    console.log('1. Test de SettingsService & Cache Mémoire :');
    SettingsService.invalidatePublicCache();

    const t0 = Date.now();
    const firstCall = await SettingsService.getPublicSettings();
    const tFirst = Date.now() - t0;

    const t1 = Date.now();
    const secondCall = await SettingsService.getPublicSettings();
    const tSecond = Date.now() - t1;

    assert(firstCall && typeof firstCall === 'object', 'Premier appel getPublicSettings retourne un objet');
    assert(firstCall['platform.maintenanceMode'] !== undefined, 'platform.maintenanceMode est bien défini');
    assert(tSecond <= tFirst, `Deuxième appel en cache (${tSecond}ms) plus rapide que premier (${tFirst}ms)`);

    // Invalidation de cache
    SettingsService.invalidatePublicCache();
    const thirdCall = await SettingsService.getPublicSettings();
    assert(thirdCall && thirdCall['site.name'] !== undefined, 'Cache réactif après invalidation');

    // 2. Test des requêtes distinctes pour domaines et catégories
    console.log('\n2. Test des requêtes SQL distinctes :');
    const domains = await JobService.getDomains();
    assert(Array.isArray(domains), `getDomains retourne un tableau (${domains.length} domaines trouvés)`);

    const categories = await FormationService.getCategories();
    assert(Array.isArray(categories), `getCategories retourne un tableau (${categories.length} catégories trouvées)`);

    // 3. Test de la borne des analytics
    console.log('\n3. Test des Analytics bornés :');
    const visitorStats = await AnalyticsService.getVisitorStats();
    assert(visitorStats && visitorStats.summary, 'getVisitorStats retourne les métriques d\'audience');

    // 4. Test des assets statiques
    console.log('\n4. Test des assets et de la configuration :');
    const minCssPath = path.resolve(__dirname, '../frontend/css/styles.min.css');
    const minCssExists = fs.existsSync(minCssPath);
    const minCssSize = minCssExists ? fs.statSync(minCssPath).size : 0;
    assert(minCssExists && minCssSize > 150000, `styles.min.css présent et valide (${minCssSize} octets)`);

    const vercelConfig = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../vercel.json'), 'utf-8'));
    assert(Array.isArray(vercelConfig.regions) && vercelConfig.regions.includes('lhr1'), 'vercel.json configuré en région lhr1 (Londres)');

    const swContent = fs.readFileSync(path.resolve(__dirname, '../frontend/sw.js'), 'utf-8');
    assert(swContent.includes('lmt-static-v2.4.0'), 'sw.js contient la nouvelle version du cache statique');

    console.log(`\n=== RÉSULTATS : ${passed}/${total} VÉRIFICATIONS RÉUSSIES ===`);
  } catch (error) {
    console.error('Erreur critique pendant la vérification :', error);
  } finally {
    await prisma.$disconnect();
  }
}

runBenchmarkAndVerification();

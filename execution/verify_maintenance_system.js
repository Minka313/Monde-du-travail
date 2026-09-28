/**
 * Script de vérification déterministe de la Couche 3 pour le système de maintenance
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

async function verifyMaintenanceSystem() {
  console.log('=== VÉRIFICATION GLOBALE DU SYSTÈME DE MAINTENANCE ===\n');
  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✅ SUCCÈS: ${message}`);
      passed++;
    } else {
      console.error(`  ❌ ÉCHEC: ${message}`);
      failed++;
    }
  }

  try {
    // 1. Fichiers requis
    console.log('1. Vérification des fichiers clés...');
    const files = [
      'directives/manage_platform_maintenance.md',
      'backend/src/middleware/maintenance.js',
      'backend/src/services/settingsService.js',
      'frontend/maintenance.html',
      'frontend/js/frontend-api.js',
      'frontend/js/layout.js',
      'admin-frontend/js/admin-pages.js',
    ];
    for (const f of files) {
      const fullPath = path.resolve(__dirname, '..', f);
      assert(fs.existsSync(fullPath), `Fichier présent : ${f}`);
    }

    // 2. Vérification du contenu de frontend/maintenance.html
    console.log('\n2. Vérification de la page publique de maintenance...');
    const htmlPath = path.resolve(__dirname, '..', 'frontend/maintenance.html');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    assert(htmlContent.includes('/settings/public'), 'maintenance.html interroge /settings/public');
    assert(htmlContent.includes('platform.maintenanceMode'), 'maintenance.html gère la fin du mode maintenance');
    assert(htmlContent.includes('?preview=1'), 'maintenance.html supporte le mode prévisualisation');
    assert(htmlContent.includes('admin-frontend/login.html'), 'maintenance.html fournit un accès discret à l\'admin');
    assert(htmlContent.includes('maint-beacon'), 'maintenance.html intègre un indicateur d\'état lumineux animé');
    assert(htmlContent.includes('setInterval(checkStatus, 10000)'), 'maintenance.html effectue un polling toutes les 10s');

    // 3. Vérification de frontend-api.js et layout.js
    console.log('\n3. Vérification des scripts frontend...');
    const apiJs = fs.readFileSync(path.resolve(__dirname, '..', 'frontend/js/frontend-api.js'), 'utf8');
    assert(apiJs.includes("response.status === 503 || data.code === 'MAINTENANCE'"), 'frontend-api.js intercepte le 503 MAINTENANCE');
    assert(apiJs.includes("window.location.href = 'maintenance.html'"), 'frontend-api.js redirige vers maintenance.html');
    assert(apiJs.includes("settings: {"), 'frontend-api.js expose window.API.settings');

    const layoutJs = fs.readFileSync(path.resolve(__dirname, '..', 'frontend/js/layout.js'), 'utf8');
    assert(layoutJs.includes("initPublicSettingsAndMaintenance"), 'layout.js possède initPublicSettingsAndMaintenance');
    assert(layoutJs.includes("platform.maintenanceMode"), 'layout.js vérifie le statut de maintenance proactivement');
    assert(layoutJs.includes("lmt-admin-maintenance-banner"), 'layout.js affiche un bandeau pour l\'admin sur le site public');

    // 4. Vérification de la console d'administration
    console.log('\n4. Vérification de la console d\'administration...');
    const adminPagesJs = fs.readFileSync(path.resolve(__dirname, '..', 'admin-frontend/js/admin-pages.js'), 'utf8');
    assert(adminPagesJs.includes("openMaintenanceControlModal"), 'admin-pages.js contient openMaintenanceControlModal');
    assert(adminPagesJs.includes("dash-config-maint"), 'admin-pages.js possède le bouton hero dash-config-maint');
    assert(adminPagesJs.includes("../frontend/maintenance.html?preview=1"), 'admin-pages.js offre l\'aperçu direct de maintenance.html');

    // 5. Contrôle direct des paramètres en base Supabase
    console.log('\n5. Contrôle des paramètres de maintenance dans Supabase...');
    const dbUrl = "postgresql://postgres:BayeMoyMinka@db.vbyileuqgzooedcwjoxe.supabase.co:5432/postgres?sslmode=require";
    const psqlOutput = execSync(`psql "${dbUrl}" -t -c "SELECT key FROM settings WHERE key LIKE 'platform.maintenance%' ORDER BY key;"`, { encoding: 'utf8' });
    const foundKeys = psqlOutput.trim().split('\n').map(k => k.trim());
    
    assert(foundKeys.includes('platform.maintenanceMode'), 'Clé platform.maintenanceMode présente en base');
    assert(foundKeys.includes('platform.maintenanceMessage'), 'Clé platform.maintenanceMessage présente en base');
    assert(foundKeys.includes('platform.maintenanceEstimatedReturn'), 'Clé platform.maintenanceEstimatedReturn présente en base');

    console.log('\n======================================================');
    console.log(`BILAN DU SYSTÈME DE MAINTENANCE : ${passed} succès, ${failed} échec(s)`);
    console.log('======================================================\n');

    process.exit(failed > 0 ? 1 : 0);
  } catch (err) {
    console.error('Erreur critique de test:', err);
    process.exit(1);
  }
}

verifyMaintenanceSystem();

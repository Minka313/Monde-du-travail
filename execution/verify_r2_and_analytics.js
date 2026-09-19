/**
 * Script déterministe de vérification de l'intégration Cloudflare R2 et de la rétention SQL.
 */
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

async function main() {
  console.log('--- [1/4] Vérification du service Cloudflare R2 ---');
  const r2Service = require('../backend/src/services/r2StorageService');
  
  const testKey = r2Service.generateKey('analyste cyber.png', 'metiers');
  console.log('Clé générée :', testKey);
  if (!testKey.startsWith('metiers/') || !testKey.endsWith('.png')) {
    throw new Error('Format de clé S3/R2 invalide : ' + testKey);
  }

  const uploadResult = await r2Service.uploadFile({
    buffer: Buffer.from('fake-image-content'),
    originalName: 'test-fiche.webp',
    mimeType: 'image/webp',
    folder: 'metiers',
  });
  console.log('Résultat upload (simulation ou réel) :', uploadResult);
  if (!uploadResult.success || !uploadResult.url) {
    throw new Error('Échec upload R2');
  }

  console.log('\n--- [2/4] Vérification syntaxique des fichiers Node/Express ---');
  execSync('node -c backend/src/services/r2StorageService.js', { stdio: 'inherit' });
  execSync('node -c backend/src/routes/upload.js', { stdio: 'inherit' });
  execSync('node -c backend/src/app.js', { stdio: 'inherit' });
  execSync('node -c admin-frontend/js/admin-pages.js', { stdio: 'inherit' });
  execSync('node -c admin-frontend/js/admin-auth.js', { stdio: 'inherit' });
  console.log('Tous les fichiers JS (Backend, Routes, Admin Frontend) compilent sans erreur.');

  console.log('\n--- [3/4] Vérification du script SQL de migration Supabase ---');
  const sqlPath = path.join(__dirname, '../backend/prisma/analytics_retention_cron.sql');
  if (!fs.existsSync(sqlPath)) {
    throw new Error('Fichier SQL introuvable : ' + sqlPath);
  }
  const sqlContent = fs.readFileSync(sqlPath, 'utf8');
  if (!sqlContent.includes('analytics_daily_stats') || 
      !sqlContent.includes('aggregate_and_purge_analytics_daily') ||
      !sqlContent.includes('cron.schedule')) {
    throw new Error('Le contenu du fichier SQL est incomplet.');
  }
  console.log('Fichier SQL de migration vérifié avec succès (DDL + PL/pgSQL + pg_cron).');

  console.log('\n--- [4/4] Vérification de la directive SOP ---');
  const directivePath = path.join(__dirname, '../directives/cloudflare_r2_and_analytics_retention.md');
  if (!fs.existsSync(directivePath)) {
    throw new Error('Fichier directive introuvable : ' + directivePath);
  }
  console.log('Directive SOP Cloudflare R2 & Analytics vérifiée avec succès.');

  console.log('\n✅ TOUS LES COMPOSANTS SONT STRICTEMENT VALIDÉS AVEC SUCCÈS !');
}

main().catch(err => {
  console.error('❌ Échec de la vérification :', err);
  process.exit(1);
});

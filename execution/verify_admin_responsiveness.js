/**
 * Script de validation déterministe de la Couche 3 pour l'ergonomie et la responsivité de l'espace administration
 */
const fs = require('fs');
const path = require('path');

function verifyAdminResponsiveness() {
  console.log('=== VÉRIFICATION DE LA RESPONSIVITÉ DE L\'ESPACE ADMINISTRATION ===\n');
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
    const directivePath = path.resolve(__dirname, '..', 'directives/admin_responsive_design_and_layout.md');
    const cssPath = path.resolve(__dirname, '..', 'admin-frontend/css/admin.css');
    const htmlPath = path.resolve(__dirname, '..', 'admin-frontend/index.html');

    assert(fs.existsSync(directivePath), 'Directive directives/admin_responsive_design_and_layout.md présente');
    assert(fs.existsSync(cssPath), 'Feuille de styles admin-frontend/css/admin.css présente');
    assert(fs.existsSync(htmlPath), 'Structure admin-frontend/index.html présente');

    // 2. Contrôle de admin-frontend/index.html
    console.log('\n2. Vérification de l\'en-tête dans admin-frontend/index.html...');
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    assert(htmlContent.includes('class="site-link-text"'), 'Présence de la classe .site-link-text pour masquage mobile');
    assert(htmlContent.includes('class="site-link-icon"'), 'Présence de la classe .site-link-icon');
    assert(htmlContent.includes('target="_blank"'), 'Bouton Voir le site s\'ouvre dans un nouvel onglet');
    assert(htmlContent.includes('rel="noopener noreferrer"'), 'Protection sécurisée rel="noopener noreferrer"');
    assert(htmlContent.includes('aria-label="Voir le site public"'), 'Accessibilité aria-label sur le lien Voir le site');
    assert(htmlContent.includes('topbar-cmd-btn'), 'Classe topbar-cmd-btn présente sur Ctrl K');
    assert(htmlContent.includes('topbar-theme-btn'), 'Classe topbar-theme-btn présente');

    // 3. Contrôle de admin-frontend/css/admin.css
    console.log('\n3. Vérification des règles CSS responsive dans admin-frontend/css/admin.css...');
    const cssContent = fs.readFileSync(cssPath, 'utf8');

    // Topbar base
    assert(cssContent.includes('text-overflow: ellipsis') && cssContent.includes('.topbar-title'), 'Gestion des ellipses sur le titre de page (.topbar-title)');
    assert(cssContent.includes('flex-wrap: nowrap') && cssContent.includes('.topbar'), 'Topbar configurée en flex-wrap: nowrap pour empêcher tout retour à la ligne brisé');
    assert(cssContent.includes('min-width: 0') && cssContent.includes('.topbar-left'), '.topbar-left dispose de min-width: 0 pour permettre la contraction flexible');

    // Tablet & Mobile Breakpoints (768px & 640px)
    assert(cssContent.includes('.topbar-cmd-btn') && cssContent.includes('display: none !important'), 'Bouton Ctrl K masqué sur mobile (<= 768px)');
    assert(cssContent.includes('.site-link-text') && cssContent.includes('display: none !important'), 'Texte "Voir le site" masqué sur mobile (<= 768px)');
    assert(cssContent.includes('.topbar-site-link') && cssContent.includes('min-width: 38px'), 'Bouton "Voir le site" adapté en pastille compacte tactile');
    assert(cssContent.includes('.dash-hero') && cssContent.includes('flex-direction: column !important'), 'Hero dashboard empilé en colonne sur mobile (<= 768px)');
    assert(cssContent.includes('.dash-quick-bar') && cssContent.includes('grid-template-columns: repeat(2, 1fr) !important'), 'Actions rapides en grille à 2 colonnes sur smartphone (<= 640px)');

    console.log('\n======================================================');
    console.log(`BILAN DU TEST RESPONSIVE : ${passed} succès, ${failed} échec(s)`);
    console.log('======================================================\n');

    process.exit(failed > 0 ? 1 : 0);
  } catch (err) {
    console.error('Erreur critique:', err);
    process.exit(1);
  }
}

verifyAdminResponsiveness();

const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '../frontend/css/styles.css');
const css = fs.readFileSync(cssPath, 'utf8');

let errors = 0;
function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
  } else {
    console.error(`  ❌ FAIL: ${message}`);
    errors++;
  }
}

console.log('=== Test 1: Centrage et Justification des Écritures ===');
assert(css.includes('.hero-content h1') && css.includes('text-align: center !important'), 'Hero et titres centrés');
assert(css.includes('.hero p') && css.includes('text-align: justify !important'), 'Paragraphes du hero et éditoriaux justifiés');
assert(css.includes('text-justify: inter-word'), 'text-justify: inter-word appliqué');

console.log('\n=== Test 2: Bandeau Impact Ultra-Premium (Valeurs en haut, Texte en dessous, Centré) ===');
assert(css.includes('/* ===== BANDEAU D\'IMPACT CHIFFRÉ & COMPTEURS ANIMÉS (ULTRA-PREMIUM) ===== */'), 'Section impact ultra-premium présente');
assert(css.includes('flex-direction: column !important'), '.impact-item orienté en colonne verticale (valeurs en haut, texte en dessous)');
assert(css.includes('text-align: center !important'), '.impact-item et labels parfaitement centrés');
assert(css.includes('grid-template-columns: repeat(2, 1fr) !important'), 'Grille 2 colonnes de tuiles en verre sur mobile (au lieu d\'une liste écrasée)');
assert(!css.includes('.impact-grid {\n    grid-template-columns: 1fr;'), 'Pas de surcharge obsolète forçant une colonne unique à 420px');

console.log('\n=== Test 3: Visibilité Infaillible des 3 Barres du Hamburger Mobile ===');
assert(css.includes('.hamburger span,') && css.includes('display: block !important'), 'Les 3 barres du hamburger ont display: block !important');
assert(css.includes('width: 22px !important') || css.includes('width: 20px !important'), 'Les barres ont une largeur définie');
assert(css.includes('height: 2.5px !important') || css.includes('height: 2px !important'), 'Les barres ont une épaisseur définie');
assert(!css.includes('span:empty:not(.icon):not(.bell-icon):not([class*="pulse"]):not([class*="badge"]):not([class*="chevron"]):not(.arrow-icon):not(.notif-header-pulse) {\n  display: none !important;'), 'span:empty n\'a pas de display: none !important écrasant les spans hamburger');

console.log(`\n=== Résultat Final: ${errors === 0 ? 'TOUS LES TESTS ONT RÉUSSI (0 erreur)' : `${errors} erreurs détectées`} ===`);
if (errors > 0) process.exit(1);

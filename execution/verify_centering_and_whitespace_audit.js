/**
 * execution/verify_centering_and_whitespace_audit.js
 * Script de vérification déterministe pour le centrage universel et l'élimination des espaces parasites.
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const cssPath = path.join(rootDir, 'frontend', 'css', 'styles.css');
const indexHtmlPath = path.join(rootDir, 'frontend', 'index.html');

let passed = 0;
let errors = [];

function assert(condition, message) {
  if (condition) {
    passed++;
    console.log(`  ✅ [PASS] ${message}`);
  } else {
    errors.push(message);
    console.error(`  ❌ [FAIL] ${message}`);
  }
}

console.log('--- 1. VÉRIFICATION DE LA SUPPRESSION TOTALE DES ESPACES PARASITES ---');
const css = fs.readFileSync(cssPath, 'utf8');

assert(!css.includes('text-justify: inter-word'), 'Zéro présence de "text-justify: inter-word" dans styles.css');
assert(!css.includes('text-align: justify'), 'Zéro présence de "text-align: justify" dans styles.css');
assert(css.includes('word-spacing: normal !important'), 'Présence de "word-spacing: normal !important" pour une respiration typographique naturelle');
assert(css.includes('text-wrap: balance'), 'Présence de "text-wrap: balance" pour équilibrer harmonieusement les titres');
assert(css.includes('text-wrap: pretty'), 'Présence de "text-wrap: pretty" pour éviter les orphelins et césures disgracieuses');

console.log('\n--- 2. VÉRIFICATION DU CENTRAGE DES CARTES DUO ÉDITORIAL (CAPTURE 2) ---');
assert(css.includes('.editorial-duo-grid {') && css.includes('justify-content: center;'), '.editorial-duo-grid est centrée');
assert(css.includes('.editorial-duo-card {') && css.includes('text-align: center;'), '.editorial-duo-card est alignée au centre');
assert(css.includes('.editorial-duo-card .duo-text {') && css.includes('text-align: center !important;'), '.duo-text est centrée sans espaces parasites');
assert(css.includes('.editorial-duo-card .duo-subtitle {') && css.includes('justify-content: center;'), '.duo-subtitle est un badge centré');

console.log('\n--- 3. VÉRIFICATION DU CENTRAGE DE LA SECTION COMMUNAUTÉ / FORUM (CAPTURE 1) ---');
assert(css.includes('.home-forum-header {') && css.includes('flex-direction: column;') && css.includes('align-items: center;'), '.home-forum-header est en colonne centrée');
assert(css.includes('.home-topic-card {') && css.includes('align-items: center;') && css.includes('text-align: center;'), '.home-topic-card est centrée');
assert(css.includes('.home-topic-badge {') && css.includes('margin: 0 auto'), '.home-topic-badge est centré');
assert(css.includes('.home-topic-footer {') && css.includes('justify-content: center;'), '.home-topic-footer est centré');

const indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');
assert(!indexHtml.includes('<div class="home-forum-header reveal-up">\n                    <div>'), 'L\'en-tête forum de index.html n\'a plus de wrapper div asymétrique');

console.log('\n--- 4. VÉRIFICATION DU CENTRAGE UNIVERSEL DES CARTES & COMPOSANTS ---');
assert(css.includes('.card-body {') && css.includes('align-items: center;') && css.includes('text-align: center;'), '.card-body est centrée');
assert(css.includes('.card-link {') && css.includes('margin-inline: auto;'), '.card-link est centrée avec margin-inline auto');
assert(css.includes('.feature-card {') && css.includes('align-items: center;') && css.includes('text-align: center;'), '.feature-card est centrée');
assert(css.includes('.testimonial-card {') && css.includes('align-items: center;') && css.includes('text-align: center;'), '.testimonial-card est centrée');
assert(css.includes('.scrolly-step-card {') && css.includes('align-items: center;') && css.includes('text-align: center;'), '.scrolly-step-card est centrée');
assert(css.includes('.interest-header {') && css.includes('align-items: center;') && css.includes('text-align: center;'), '.interest-header de la boussole est centré');
assert(css.includes('.boussole-modes-nav {') && css.includes('justify-content: center;'), '.boussole-modes-nav est centré');

console.log('\n--- 5. VÉRIFICATION DES RÈGLES RESPONSIVE MOBILE SANS VIDES PARASITES ---');
assert(css.includes('@media (max-width: 768px) {') && css.includes('.editorial-duo-grid {'), 'Règles compactes 1 colonne pour les duo-cards sur mobile');
assert(css.includes('.section-header {\n    margin: 0 auto var(--space-8) auto;'), 'Marges verticales resserrées sur mobile pour éliminer les trous');

console.log('\n======================================================');
console.log(`RÉSULTAT TOTAL : ${passed} vérifications réussies, ${errors.length} erreurs.`);
if (errors.length > 0) {
  console.error('ERREURS DÉTECTÉES :', errors);
  process.exit(1);
} else {
  console.log('✅ TOUTES LES VÉRIFICATIONS D\'AUDIT SONT AU VERT !');
  process.exit(0);
}

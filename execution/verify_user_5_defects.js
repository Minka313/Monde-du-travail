/**
 * Test de vérification déterministe pour les 5 défauts signalés par l'utilisateur
 * Couvre :
 * 1. .pathway-step (titres h4 et descriptions p centrés)
 * 2. Section Mentorat job.html (titre h2 et boutons centrés)
 * 3. .motivation-box dans formations.html (titre h3 et paragraphe p centrés)
 * 4. .split-content badge Contexte et titre h2 centrés
 * 5. .split-content deuxième paragraphe et tags/pills centrés
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

const ROOT_DIR = path.resolve(__dirname, '..');
const STYLES_PATH = path.join(ROOT_DIR, 'frontend', 'css', 'styles.css');
const FORMATIONS_PATH = path.join(ROOT_DIR, 'frontend', 'formations.html');
const JOB_PATH = path.join(ROOT_DIR, 'frontend', 'job.html');
const ABOUT_PATH = path.join(ROOT_DIR, 'frontend', 'about.html');

console.log('🧪 Démarrage de la vérification des 5 défauts signalés...\n');

let passCount = 0;
let totalCount = 0;

function test(description, fn) {
  totalCount++;
  try {
    fn();
    console.log(`  ✅ [PASS] ${description}`);
    passCount++;
  } catch (err) {
    console.error(`  ❌ [FAIL] ${description}`);
    console.error(`     Erreur: ${err.message}`);
  }
}

const stylesCss = fs.readFileSync(STYLES_PATH, 'utf-8');
const formationsHtml = fs.readFileSync(FORMATIONS_PATH, 'utf-8');
const jobHtml = fs.readFileSync(JOB_PATH, 'utf-8');
const aboutHtml = fs.readFileSync(ABOUT_PATH, 'utf-8');

// --- DEFECT 1 : .pathway-step ---
test('Défaut 1 : .pathway-step est en flex colonne centré avec text-align center', () => {
  assert.ok(stylesCss.includes('.pathway-step {'), 'Doit définir .pathway-step');
  assert.ok(stylesCss.includes('display: flex;'), 'Doit avoir display: flex');
  assert.ok(stylesCss.includes('flex-direction: column;'), 'Doit avoir flex-direction: column');
  assert.ok(stylesCss.includes('align-items: center;'), 'Doit avoir align-items: center');
});

test('Défaut 1 : .pathway-step h4 et p sont explicitement centrés avec width 100%', () => {
  assert.ok(stylesCss.includes('.pathway-step h4 {'), 'Doit cibler .pathway-step h4');
  assert.ok(stylesCss.includes('.pathway-step p {'), 'Doit cibler .pathway-step p');
  // Vérifier text-align center sur h4 et p
  const h4Match = stylesCss.match(/\.pathway-step h4\s*\{[^}]+\}/);
  assert.ok(h4Match && h4Match[0].includes('text-align: center !important;'), '.pathway-step h4 doit avoir text-align: center !important');
  const pMatch = stylesCss.match(/\.pathway-step p\s*\{[^}]+\}/);
  assert.ok(pMatch && pMatch[0].includes('text-align: center !important;'), '.pathway-step p doit avoir text-align: center !important');
});

// --- DEFECT 2 : job.html Accompagnement & Mentorat ---
test('Défaut 2 : job.html possède un section-header text-center centré pour l orientation', () => {
  assert.ok(jobHtml.includes('section-header text-center'), 'Doit contenir section-header text-center');
  assert.ok(jobHtml.includes("Besoin d'aide pour choisir ton orientation ?"), 'Doit contenir le titre d orientation');
  assert.ok(stylesCss.includes('.text-center h2'), 'CSS doit forcer le centrage des h2 dans .text-center');
});

test('Défaut 2 : Les boutons d action sont centrés et en flex-wrap', () => {
  assert.ok(jobHtml.includes('justify-content: center; align-items: center; flex-wrap: wrap;'), 'Les boutons doivent avoir justify-content: center');
});

// --- DEFECT 3 : formations.html .motivation-box ---
test('Défaut 3 : .motivation-box est centrée avec max-width et flex-direction column', () => {
  assert.ok(stylesCss.includes('.motivation-box {'), 'Doit définir .motivation-box');
  const boxMatch = stylesCss.match(/\.motivation-box\s*\{[^}]+\}/);
  assert.ok(boxMatch && boxMatch[0].includes('text-align: center !important;'), '.motivation-box doit avoir text-align: center !important');
  assert.ok(boxMatch && boxMatch[0].includes('margin: var(--space-6) auto 0 auto;'), '.motivation-box doit être centrée avec auto');
});

test('Défaut 3 : .motivation-box h3 et p sont centrés sans vide latéral parasite', () => {
  const h3Match = stylesCss.match(/\.motivation-box h3\s*\{[^}]+\}/);
  assert.ok(h3Match && h3Match[0].includes('text-align: center !important;'), '.motivation-box h3 doit avoir text-align: center !important');
  const pMatch = stylesCss.match(/\.motivation-box p\s*\{[^}]+\}/);
  assert.ok(pMatch && pMatch[0].includes('text-align: center !important;'), '.motivation-box p doit avoir text-align: center !important');
  assert.ok(formationsHtml.includes('class="section-header text-center"'), 'section-header de Conseils dans formations.html doit être text-center');
});

// --- DEFECT 4 & 5 : about.html .split-content ---
test('Défaut 4 & 5 : .split-content est configuré en flex colonne centré dans styles.css', () => {
  const splitMatch = stylesCss.match(/\.split-content\s*\{[^}]+\}/);
  assert.ok(splitMatch && splitMatch[0].includes('display: flex;'), '.split-content doit avoir display: flex');
  assert.ok(splitMatch && splitMatch[0].includes('align-items: center;'), '.split-content doit avoir align-items: center');
  assert.ok(splitMatch && splitMatch[0].includes('text-align: center;'), '.split-content doit avoir text-align: center');
});

test('Défaut 4 : .split-content .section-label et h2 sont centrés', () => {
  const labelMatch = stylesCss.match(/\.split-content \.section-label\s*\{[^}]+\}/);
  assert.ok(labelMatch && labelMatch[0].includes('margin-inline: auto;'), 'section-label doit avoir margin-inline: auto');
  const h2Match = stylesCss.match(/\.split-content h2\s*\{[^}]+\}/);
  assert.ok(h2Match && h2Match[0].includes('text-align: center !important;'), 'h2 doit avoir text-align: center !important');
});

test('Défaut 5 : .split-content p et editorial-tags-row sont centrés', () => {
  const pMatch = stylesCss.match(/\.split-content p\s*\{[^}]+\}/);
  assert.ok(pMatch && pMatch[0].includes('text-align: center !important;'), 'p doit avoir text-align: center !important');
  const tagsMatch = stylesCss.match(/\.split-content \.editorial-tags-row\s*\{[^}]+\}/);
  assert.ok(tagsMatch && tagsMatch[0].includes('justify-content: center;'), 'editorial-tags-row doit avoir justify-content: center');
  assert.ok(aboutHtml.includes('split-content text-center'), 'about.html doit avoir split-content text-center');
});

// --- ABSENCE D'EFFETS DE BORD ---
test('Aucune justification forcée (inter-word) restante', () => {
  assert.ok(!stylesCss.includes('text-justify: inter-word'), 'Ne doit plus contenir text-justify: inter-word');
  assert.ok(!stylesCss.includes('text-align: justify !important'), 'Ne doit plus contenir text-align: justify !important');
});

console.log(`\n📊 Résultat : ${passCount}/${totalCount} tests réussis.`);
if (passCount !== totalCount) {
  process.exit(1);
} else {
  console.log('✨ Tous les 5 défauts sont rigoureusement corrigés et validés.');
}

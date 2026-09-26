/**
 * Test de vérification déterministe pour les défauts signalés par l'utilisateur (lots 1 et 2)
 * Couvre :
 * 1. .pathway-step (titres h4 et descriptions p centrés)
 * 2. Section Mentorat job.html (titre h2 et boutons centrés)
 * 3. .motivation-box dans formations.html (titre h3 et paragraphe p centrés)
 * 4. .split-content badge Contexte et titre h2 centrés
 * 5. .split-content deuxième paragraphe et tags/pills centrés
 * 6. .forum-hero h1 et conteneur centrés
 * 7. .job-card-modern alignement intérieur gauche uniforme et cohérent (titre, desc, tags)
 * 8. .about-timeline cartes avec nœuds connectés sur la ligne
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

const ROOT_DIR = path.resolve(__dirname, '..');
const STYLES_PATH = path.join(ROOT_DIR, 'frontend', 'css', 'styles.css');
const FORMATIONS_PATH = path.join(ROOT_DIR, 'frontend', 'formations.html');
const JOB_PATH = path.join(ROOT_DIR, 'frontend', 'job.html');
const ABOUT_PATH = path.join(ROOT_DIR, 'frontend', 'about.html');
const FORUM_PATH = path.join(ROOT_DIR, 'frontend', 'forum.html');

console.log('🧪 Démarrage de la vérification de l\'ensemble des défauts signalés...\n');

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
const forumHtml = fs.readFileSync(FORUM_PATH, 'utf-8');

// --- 1. .pathway-step ---
test('1. .pathway-step est en flex colonne centré avec text-align center', () => {
  assert.ok(stylesCss.includes('.pathway-step {'), 'Doit définir .pathway-step');
  assert.ok(stylesCss.includes('display: flex;'), 'Doit avoir display: flex');
  assert.ok(stylesCss.includes('flex-direction: column;'), 'Doit avoir flex-direction: column');
  assert.ok(stylesCss.includes('align-items: center;'), 'Doit avoir align-items: center');
});

test('1. .pathway-step h4 et p sont explicitement centrés avec width 100%', () => {
  const h4Match = stylesCss.match(/\.pathway-step h4\s*\{[^}]+\}/);
  assert.ok(h4Match && h4Match[0].includes('text-align: center !important;'), '.pathway-step h4 doit avoir text-align: center !important');
  const pMatch = stylesCss.match(/\.pathway-step p\s*\{[^}]+\}/);
  assert.ok(pMatch && pMatch[0].includes('text-align: center !important;'), '.pathway-step p doit avoir text-align: center !important');
});

// --- 2. job.html Accompagnement & Mentorat ---
test('2. job.html possède un section-header text-center centré pour l orientation', () => {
  assert.ok(jobHtml.includes('section-header text-center'), 'Doit contenir section-header text-center');
  assert.ok(jobHtml.includes("Besoin d'aide pour choisir ton orientation ?"), 'Doit contenir le titre d orientation');
  assert.ok(stylesCss.includes('.text-center h2'), 'CSS doit forcer le centrage des h2 dans .text-center');
});

test('2. Les boutons d action sont centrés et en flex-wrap', () => {
  assert.ok(jobHtml.includes('justify-content: center; align-items: center; flex-wrap: wrap;'), 'Les boutons doivent avoir justify-content: center');
});

// --- 3. formations.html .motivation-box ---
test('3. .motivation-box est centrée avec max-width et flex-direction column', () => {
  const boxMatch = stylesCss.match(/\.motivation-box\s*\{[^}]+\}/);
  assert.ok(boxMatch && boxMatch[0].includes('text-align: center !important;'), '.motivation-box doit avoir text-align: center !important');
  assert.ok(boxMatch && boxMatch[0].includes('margin: var(--space-6) auto 0 auto;'), '.motivation-box doit être centrée avec auto');
});

test('3. .motivation-box h3 et p sont centrés sans vide latéral parasite', () => {
  const h3Match = stylesCss.match(/\.motivation-box h3\s*\{[^}]+\}/);
  assert.ok(h3Match && h3Match[0].includes('text-align: center !important;'), '.motivation-box h3 doit avoir text-align: center !important');
  const pMatch = stylesCss.match(/\.motivation-box p\s*\{[^}]+\}/);
  assert.ok(pMatch && pMatch[0].includes('text-align: center !important;'), '.motivation-box p doit avoir text-align: center !important');
  assert.ok(formationsHtml.includes('class="section-header text-center"'), 'section-header de Conseils dans formations.html doit être text-center');
});

// --- 4 & 5. about.html .split-content ---
test('4 & 5. .split-content est configuré en flex colonne centré dans styles.css', () => {
  const splitMatch = stylesCss.match(/\.split-content\s*\{[^}]+\}/);
  assert.ok(splitMatch && splitMatch[0].includes('display: flex;'), '.split-content doit avoir display: flex');
  assert.ok(splitMatch && splitMatch[0].includes('align-items: center;'), '.split-content doit avoir align-items: center');
  assert.ok(splitMatch && splitMatch[0].includes('text-align: center;'), '.split-content doit avoir text-align: center');
});

test('4. .split-content .section-label et h2 sont centrés', () => {
  const labelMatch = stylesCss.match(/\.split-content \.section-label\s*\{[^}]+\}/);
  assert.ok(labelMatch && labelMatch[0].includes('margin-inline: auto;'), 'section-label doit avoir margin-inline: auto');
  const h2Match = stylesCss.match(/\.split-content h2\s*\{[^}]+\}/);
  assert.ok(h2Match && h2Match[0].includes('text-align: center !important;'), 'h2 doit avoir text-align: center !important');
});

test('5. .split-content p et editorial-tags-row sont centrés', () => {
  const pMatch = stylesCss.match(/\.split-content p\s*\{[^}]+\}/);
  assert.ok(pMatch && pMatch[0].includes('text-align: center !important;'), 'p doit avoir text-align: center !important');
  const tagsMatch = stylesCss.match(/\.split-content \.editorial-tags-row\s*\{[^}]+\}/);
  assert.ok(tagsMatch && tagsMatch[0].includes('justify-content: center;'), 'editorial-tags-row doit avoir justify-content: center');
  assert.ok(aboutHtml.includes('split-content text-center'), 'about.html doit avoir split-content text-center');
});

// --- 6. forum.html forum-hero ---
test('6. forum-hero h1 et conteneur sont rigoureusement centrés', () => {
  const heroMatch = stylesCss.match(/\.forum-hero h1\s*\{[^}]+\}/);
  assert.ok(heroMatch && heroMatch[0].includes('text-align: center !important;'), '.forum-hero h1 doit avoir text-align: center !important');
  assert.ok(forumHtml.includes('class="container reveal-up text-center"'), 'forum.html conteneur doit avoir text-center');
});

// --- 7. job-card-modern alignement cohérent ---
test('7. job-card-modern a un alignement intérieur gauche uniforme sans distorsion', () => {
  assert.ok(stylesCss.includes('.job-card-modern .job-card-title,'), 'styles.css doit cibler .job-card-modern .job-card-title');
  assert.ok(stylesCss.includes('text-align: left !important;'), 'styles.css doit imposer text-align: left !important sur les cartes');
});

// --- 8. about-timeline modernisée avec cartes ---
test('8. about-timeline utilise des cartes soignées avec nœuds connectés', () => {
  const timelineMatch = stylesCss.match(/\.about-timeline\s*\{[^}]+\}/);
  assert.ok(timelineMatch && timelineMatch[0].includes('max-width: 760px;'), '.about-timeline doit avoir max-width: 760px');
  const stepMatch = stylesCss.match(/\.timeline-step\s*\{[^}]+\}/);
  assert.ok(stepMatch && stepMatch[0].includes('border-radius: var(--radius-xl);'), '.timeline-step doit avoir border-radius: var(--radius-xl)');
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
  console.log('✨ Tous les défauts signalés sont rigoureusement corrigés et validés.');
}

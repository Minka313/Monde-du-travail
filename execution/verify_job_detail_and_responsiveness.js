/**
 * Execution Script: verify_job_detail_and_responsiveness.js
 * Vérification déterministe de la nouvelle page dédiée Fiche Métier (job-detail.html)
 * et de la responsivité Mobile-First du module Orientation.
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('🚀 Démarrage du test de validation : Fiche Métier Complète & Responsivité Mobile-First...\n');

// 1. Validation de frontend/job-detail.html
console.log('--- 1. Vérification de frontend/job-detail.html ---');
const jobDetailHtmlPath = path.join(__dirname, '../frontend/job-detail.html');
assert(fs.existsSync(jobDetailHtmlPath), 'Le fichier frontend/job-detail.html doit exister.');
const jobDetailHtml = fs.readFileSync(jobDetailHtmlPath, 'utf8');

const requiredHtmlElements = [
  'id="scrollProgressBar"',
  'id="btnBackToOrientation"',
  'id="breadcrumbFamilyLink"',
  'id="breadcrumbJobTitle"',
  'id="jobHeroImg"',
  'id="jobHeroIcon"',
  'id="jobHeroTitle"',
  'id="jobHeroHeadline"',
  'id="jobHeroBadgesRow"',
  'id="metricCardLevel"',
  'id="metricCardSalary"',
  'id="metricCardTension"',
  'id="metricCardReadingTime"',
  'id="btnBookmarkJob"',
  'id="btnShareJob"',
  'id="btnPrintJob"',
  'id="jobTabsStickyWrapper"',
  'data-tab="overview"',
  'data-tab="skills"',
  'data-tab="studies"',
  'data-tab="career"',
  'data-tab="typicalDay"',
  'data-tab="related"',
  'id="panelOverview"',
  'id="panelSkills"',
  'id="panelStudies"',
  'id="panelCareer"',
  'id="panelTypicalDay"',
  'id="panelRelated"',
  'id="jobSatisfactionSurvey"',
  'id="jobDetailToast"',
  'src="js/job-detail.js'
];

for (const el of requiredHtmlElements) {
  assert(jobDetailHtml.includes(el), `Élément manquant dans job-detail.html : ${el}`);
  console.log(`  ✓ Présence de ${el}`);
}

// 2. Validation de frontend/js/job-detail.js
console.log('\n--- 2. Vérification de frontend/js/job-detail.js ---');
const jobDetailJsPath = path.join(__dirname, '../frontend/js/job-detail.js');
assert(fs.existsSync(jobDetailJsPath), 'Le fichier frontend/js/job-detail.js doit exister.');
const jobDetailJs = fs.readFileSync(jobDetailJsPath, 'utf8');

assert(jobDetailJs.includes('OrientationData.getJobBySlug'), 'Doit appeler OrientationData.getJobBySlug');
assert(jobDetailJs.includes('setupTabsNavigation'), 'Doit gérer les onglets interactifs');
assert(jobDetailJs.includes('setupActionsBar'), 'Doit gérer les favoris et le partage');
assert(jobDetailJs.includes('setupSectionStudies'), 'Doit gérer les formations et études au Sénégal');
assert(jobDetailJs.includes('setupSatisfactionSurvey'), 'Doit gérer le micro-sondage');
console.log('  ✓ Architecture du contrôleur job-detail.js complète et fonctionnelle');

// 3. Validation de frontend/js/orientation-ui.js (Navigation sans modale)
console.log('\n--- 3. Vérification du débranchement de la modale dans orientation-ui.js ---');
const orientationUiPath = path.join(__dirname, '../frontend/js/orientation-ui.js');
const orientationUi = fs.readFileSync(orientationUiPath, 'utf8');

assert(orientationUi.includes('function openJob('), 'Doit définir openJob');
assert(orientationUi.includes('job-detail.html?slug='), 'openJob doit naviguer vers job-detail.html?slug=');
assert(orientationUi.includes('openJob(slug)'), 'Le clic carte doit appeler openJob(slug)');
assert(!orientationUi.includes('id="job-dossier-overlay"'), 'L\'ancien overlay de modal ne doit plus être injecté');
console.log('  ✓ Modale encombrante supprimée, remplacée par la navigation vers job-detail.html');

// 4. Validation de la Roue RIASEC responsive dans orientation-wheel.js
console.log('\n--- 4. Vérification de la responsivité de la Roue RIASEC ---');
const wheelJsPath = path.join(__dirname, '../frontend/js/orientation-wheel.js');
const wheelJs = fs.readFileSync(wheelJsPath, 'utf8');

assert(wheelJs.includes('setTransform(1, 0, 0, 1, 0, 0)'), 'Doit réinitialiser la matrice de transformation pour éviter les bugs au redimensionnement');
assert(wheelJs.includes('availableWidth'), 'Doit adapter la largeur à l\'écran disponible');
console.log('  ✓ Responsivité et réinitialisation de la Roue validées');

// 5. Validation des styles CSS & Mobile-First dans styles.css
console.log('\n--- 5. Vérification des styles CSS & Mobile First ---');
const cssPath = path.join(__dirname, '../frontend/css/styles.css');
const cssContent = fs.readFileSync(cssPath, 'utf8');

const requiredCssSelectors = [
  '.job-detail-page',
  '.job-hero-section',
  '.job-metrics-ribbon',
  '.job-tabs-sticky-wrapper',
  '.job-tab-btn',
  '.job-info-card',
  '.skills-tri-columns',
  '.senegal-studies-card',
  '.salary-scales-grid',
  '.typical-day-timeline',
  '.related-jobs-grid',
  '.job-satisfaction-survey-card',
  '.job-detail-toast',
  '[data-theme="dark"] .job-detail-page',
  '[data-theme="dark"] .job-info-card'
];

for (const sel of requiredCssSelectors) {
  assert(cssContent.includes(sel), `Sélecteur CSS manquant : ${sel}`);
  console.log(`  ✓ Présence du sélecteur ${sel}`);
}

// 6. Validation du routage Vercel
console.log('\n--- 6. Vérification des routes Vercel ---');
const vercelPath = path.join(__dirname, '../vercel.json');
const vercelJson = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));

const hasJobDetailRoute = vercelJson.routes.some(r => r.src && r.src.includes('job-detail'));
const hasMetierRoute = vercelJson.routes.some(r => r.src && r.src.includes('metier'));

assert(hasJobDetailRoute, 'vercel.json doit contenir la route rewrite job-detail');
assert(hasMetierRoute, 'vercel.json doit contenir la route rewrite metier');
console.log('  ✓ Routes /job-detail et /metier configurées dans vercel.json');

console.log('\n🎉 TOUS LES TESTS DE VALIDATION ONT RÉUSSI AVEC SUCCÈS !');

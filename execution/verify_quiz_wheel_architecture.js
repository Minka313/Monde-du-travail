/**
 * execution/verify_quiz_wheel_architecture.js
 * Script de test et de validation déterministe pour la Boussole RIASEC et la Roue d'Orientation
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rootDir = path.resolve(__dirname, '..');
const jobHtmlPath = path.join(rootDir, 'frontend', 'job.html');
const cssPath = path.join(rootDir, 'frontend', 'css', 'styles.css');
const quizDataPath = path.join(rootDir, 'frontend', 'js', 'orientation-quiz-data.js');
const wheelPath = path.join(rootDir, 'frontend', 'js', 'orientation-wheel.js');
const orientationUiPath = path.join(rootDir, 'frontend', 'js', 'orientation-ui.js');
const orientationDataPath = path.join(rootDir, 'frontend', 'js', 'orientation-data.js');

let errors = [];
let passed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
    console.log(`  ✅ [PASS] ${message}`);
  } else {
    errors.push(message);
    console.error(`  ❌ [FAIL] ${message}`);
  }
}

console.log('--- 1. VALIDATION DES FICHIERS ET INTÉGRATION HTML ---');

const jobHtml = fs.readFileSync(jobHtmlPath, 'utf8');

// Vérification de la présence des scripts
assert(jobHtml.includes('<script src="js/orientation-quiz-data.js"></script>'), 'job.html inclut orientation-quiz-data.js');
assert(jobHtml.includes('<script src="js/orientation-wheel.js"></script>'), 'job.html inclut orientation-wheel.js');

const quizIdx = jobHtml.indexOf('js/orientation-quiz-data.js');
const wheelIdx = jobHtml.indexOf('js/orientation-wheel.js');
const uiIdx = jobHtml.indexOf('js/orientation-ui.js');
assert(quizIdx < uiIdx && wheelIdx < uiIdx, 'Les scripts quiz et wheel sont chargés avant orientation-ui.js');

// Vérification des éléments DOM de la Boussole
const requiredElements = [
  'id="tabModeQuiz"',
  'id="tabModeWheel"',
  'id="tabModeChips"',
  'id="boussoleQuizView"',
  'id="boussoleWheelView"',
  'id="boussoleChipsView"',
  'id="boussoleResultsView"',
  'id="quizQuestionCategory"',
  'id="quizQuestionCounter"',
  'id="quizProgressFill"',
  'id="quizQuestionText"',
  'id="quizOptionsGrid"',
  'id="btnQuizPrev"',
  'id="btnQuizNext"',
  'id="orientationWheelCanvas"',
  'id="btnSpinWheelFree"',
  'id="wheelStatusNotice"',
  'id="quizProfileBanner"',
  'id="resProfileIcon"',
  'id="resHollandBadge"',
  'id="resProfileTitle"',
  'id="resProfileSummary"',
  'id="riasecGaugesGrid"',
  'id="senegalPathwayCard"',
  'id="resBacSeries"',
  'id="resUniversities"',
  'id="resSalaryFcfa"',
  'id="resVisionPillar"',
  'id="quizRecommendedJobsGrid"',
  'id="btnRestartQuiz"',
  'id="btnViewAllMatchedJobs"'
];

requiredElements.forEach(elem => {
  assert(jobHtml.includes(elem), `job.html contient l'élément requis : ${elem}`);
});

console.log('\n--- 2. VALIDATION DES DONNÉES DU QUIZ RIASEC (orientation-quiz-data.js) ---');

const quizDataCode = fs.readFileSync(quizDataPath, 'utf8');
const mockSandbox = {
  window: {},
  console: console
};
vm.createContext(mockSandbox);
vm.runInContext(quizDataCode, mockSandbox);

const quizData = mockSandbox.window.OrientationQuizData;
assert(quizData !== undefined, 'window.OrientationQuizData est bien exporté');

const riasecCodes = ['R', 'I', 'A', 'S', 'E', 'C'];
assert(Object.keys(quizData.PROFILES).length === 6, 'PROFILES contient exactement les 6 profils RIASEC');

riasecCodes.forEach(code => {
  const p = quizData.PROFILES[code];
  assert(p && p.code === code, `Profil ${code} est défini avec code '${code}'`);
  assert(p.name && p.title && p.icon && p.color, `Profil ${code} a un nom, titre, icône et couleur`);
  assert(Array.isArray(p.seriesBac) && p.seriesBac.length > 0, `Profil ${code} contient les séries de Bac sénégalais`);
  assert(Array.isArray(p.universities) && p.universities.length > 0, `Profil ${code} contient les universités/écoles sénégalaises`);
  assert(p.salaryRangeFcfa && p.salaryRangeFcfa.includes('FCFA'), `Profil ${code} contient la fourchette de salaire en FCFA`);
  assert(p.vision2050Pillar && p.vision2050Pillar.length > 10, `Profil ${code} est aligné sur un pilier Sénégal 2050`);
});

assert(Array.isArray(quizData.QUESTIONS) && quizData.QUESTIONS.length === 8, 'QUESTIONS contient exactement 8 questions immersives');

quizData.QUESTIONS.forEach((q, idx) => {
  assert(q.id && q.category && q.question, `Question #${idx + 1} a un id, catégorie et libellé`);
  assert(Array.isArray(q.options) && q.options.length === 4, `Question #${idx + 1} a 4 options de réponse`);
  q.options.forEach(opt => {
    assert(opt.id && opt.icon && opt.text && opt.weights, `Option ${opt.id} a id, icône, texte et pondérations`);
    const weightKeys = Object.keys(opt.weights);
    const validWeights = weightKeys.every(k => riasecCodes.includes(k));
    assert(validWeights, `Pondérations de ${opt.id} ciblent des codes RIASEC valides : ${weightKeys.join(',')}`);
  });
});

// Test du moteur de calcul de score calculateScore()
console.log('\n--- 3. TEST UNITAIRE DU MOTEUR DE CALCUL DE SCORE ---');
const sampleInvestigationAnswers = ['1B', '2B', '3B', '4D', '5B', '6B', '7B', '8A'];
const resultI = quizData.calculateScore(sampleInvestigationAnswers);
assert(resultI.dominantCode === 'I', `Score test Investigateur donne profil dominant 'I' (obtenu: ${resultI.dominantCode})`);
assert(resultI.dominantProfile.name === 'Investigateur', `Nom du profil dominant est 'Investigateur'`);
assert(resultI.percentages.I >= 50, `Pourcentage du profil 'I' est dominant (>= 50%, obtenu: ${resultI.percentages.I}%)`);
assert(resultI.hollandCode.startsWith('I'), `Code Holland commence par 'I' (obtenu: ${resultI.hollandCode})`);

const sampleRealisteAnswers = ['1A', '2A', '3A', '4A', '5A', '6A', '7A', '8A'];
const resultR = quizData.calculateScore(sampleRealisteAnswers);
assert(resultR.dominantCode === 'R', `Score test Réaliste donne profil dominant 'R' (obtenu: ${resultR.dominantCode})`);
assert(resultR.dominantProfile.name === 'Réaliste', `Nom du profil dominant est 'Réaliste'`);

console.log('\n--- 4. VALIDATION DE LA ROUE CANVAS (orientation-wheel.js) ---');
const wheelCode = fs.readFileSync(wheelPath, 'utf8');
const wheelSandbox = {
  window: {
    matchMedia: () => ({ matches: false }),
    addEventListener: () => {}
  },
  requestAnimationFrame: () => 1,
  cancelAnimationFrame: () => {},
  performance: { now: () => 0 },
  console: console
};
vm.createContext(wheelSandbox);
vm.runInContext(wheelCode, wheelSandbox);

assert(typeof wheelSandbox.window.OrientationWheel === 'function', 'OrientationWheel est une classe instantiable');
const dummyCanvas = {
  getContext: () => ({
    scale: () => {},
    clearRect: () => {},
    save: () => {},
    restore: () => {},
    translate: () => {},
    rotate: () => {},
    beginPath: () => {},
    arc: () => {},
    moveTo: () => {},
    lineTo: () => {},
    closePath: () => {},
    fill: () => {},
    stroke: () => {},
    fillText: () => {},
    createRadialGradient: () => ({ addColorStop: () => {} }),
    createLinearGradient: () => ({ addColorStop: () => {} })
  }),
  getBoundingClientRect: () => ({ width: 380, height: 380 }),
  style: {}
};

const wheelInstance = new wheelSandbox.window.OrientationWheel(dummyCanvas);
assert(wheelInstance.sectors && wheelInstance.sectors.length === 6, 'La roue a 6 secteurs');
assert(typeof wheelInstance.spinTo === 'function', 'Méthode spinTo() existe');
assert(typeof wheelInstance.spinFree === 'function', 'Méthode spinFree() existe');
assert(typeof wheelInstance.draw === 'function', 'Méthode draw() existe');

console.log('\n--- 5. VALIDATION DU CSS DÉDIÉ (styles.css) ---');
const css = fs.readFileSync(cssPath, 'utf8');
const requiredCssClasses = [
  '.boussole-modes-nav',
  '.boussole-mode-btn',
  '.quiz-card',
  '.quiz-options-grid',
  '.quiz-option-card',
  '.wheel-canvas-container',
  '.wheel-spin-btn',
  '.quiz-results-card',
  '.riasec-gauges-grid',
  '.senegal-pathway-card',
  '.quiz-job-card'
];

requiredCssClasses.forEach(cls => {
  assert(css.includes(cls), `styles.css contient la classe CSS : ${cls}`);
});

console.log('\n======================================================');
console.log(`RÉSULTAT TOTAL : ${passed} vérifications réussies, ${errors.length} erreurs.`);
if (errors.length > 0) {
  console.error('ERREURS DÉTECTÉES :', errors);
  process.exit(1);
} else {
  console.log('✅ TOUTES LES VÉRIFICATIONS SONT AU VERT !');
  process.exit(0);
}

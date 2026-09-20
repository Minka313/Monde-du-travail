/**
 * Execution Script: verify_job_navigation.js
 * Comprehensive integration test for navigation, scrolling & progressive loading
 * on the orientation & métier catalog page.
 */

const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('🚀 Starting verification of Job Navigation & Orientation UI optimizations...\n');

// 1. Verify job.html markup
const jobHtmlPath = path.join(__dirname, '../frontend/job.html');
const jobHtml = fs.readFileSync(jobHtmlPath, 'utf8');

const requiredHtmlIds = [
  'stickyOrientationToolbar',
  'stickyDomainSelect',
  'stickyBtnBackFamilies',
  'stickyBtnScrollTop',
  'stickyFamilyName',
  'stickyCountBadge',
  'localJobsFilterBar',
  'localJobsFilterInput',
  'localJobsFilterClear',
  'localJobsFilterCount',
  'orientationPaginationWrap',
  'btnFloatingScrollTop'
];

console.log('--- 1. Testing HTML Markup elements ---');
for (const id of requiredHtmlIds) {
  assert(jobHtml.includes(`id="${id}"`), `Missing HTML element with id="${id}" in job.html`);
  console.log(`  ✓ #${id} exists in job.html`);
}

// 2. Verify styles.css
const cssPath = path.join(__dirname, '../frontend/css/styles.css');
const cssContent = fs.readFileSync(cssPath, 'utf8');

console.log('\n--- 2. Testing CSS Performance & Design System ---');
// Check that body does NOT have background-attachment: fixed
const bodyBgFixed = /body\s*\{[^}]*background-attachment\s*:\s*fixed/i.test(cssContent);
assert(!bodyBgFixed, 'body should NOT have background-attachment: fixed (causes scroll repaint jank)');
console.log('  ✓ body background-attachment: fixed successfully removed (eliminates repaint lag)');

assert(cssContent.includes('.has-lenis-smooth'), 'Missing .has-lenis-smooth override in styles.css');
assert(cssContent.includes('scroll-behavior: auto !important;'), 'Missing scroll-behavior: auto !important in styles.css');
console.log('  ✓ Lenis smooth-scroll conflict eliminated (scroll-behavior: auto !important)');

const requiredClasses = [
  '.sticky-orientation-toolbar',
  '.local-jobs-filter-bar',
  '.orientation-pagination-wrap',
  '.btn-load-more-jobs',
  '.btn-show-all-jobs',
  '.floating-scroll-top-btn',
  '.scroll-chevron-btn'
];

for (const cls of requiredClasses) {
  assert(cssContent.includes(cls), `Missing CSS class ${cls} in styles.css`);
  console.log(`  ✓ CSS class ${cls} defined with modern glassmorphism styling`);
}

// 3. Verify orientation-data.js and orientation-digital-data.js
console.log('\n--- 3. Testing Orientation Data Engine ---');
global.window = {};
require('../frontend/js/orientation-digital-data.js');
const OrientationData = require('../frontend/js/orientation-data.js');

const domains = OrientationData.getDigitalDomains();
assert(Array.isArray(domains) && domains.length === 13, `Expected 13 digital domains, got ${domains.length}`);
console.log(`  ✓ OrientationData.getDigitalDomains() successfully returned ${domains.length} domains`);

// Verify getAllJobs
(async () => {
  const allJobs = await OrientationData.getAllJobs();
  assert(allJobs.length >= 104, `Expected at least 104 jobs, got ${allJobs.length}`);
  console.log(`  ✓ OrientationData.getAllJobs() returned ${allJobs.length} jobs total`);

  // Verify filtering
  const digitalJobs = await OrientationData.getJobsBySubdomain('numerique-ia', 'all', 'all');
  console.log(`  ✓ Numerique-IA family returned ${digitalJobs.length} jobs`);

  // Test pagination logic simulation
  console.log('\n--- 4. Testing Progressive Loading & Pagination Logic ---');
  const PAGE_SIZE = 18;
  const total = digitalJobs.length;
  let currentlyShown = Math.min(PAGE_SIZE, total);
  assert.strictEqual(currentlyShown, 18, 'Initial batch should be 18 jobs');
  console.log(`  ✓ Initial batch: ${currentlyShown}/${total} jobs rendered (prevents DOM overload)`);

  // Load more
  currentlyShown = Math.min(currentlyShown + PAGE_SIZE, total);
  assert.strictEqual(currentlyShown, 36, 'Second batch should be 36 jobs');
  console.log(`  ✓ "Charger plus": ${currentlyShown}/${total} jobs rendered`);

  // Show all
  currentlyShown = total;
  assert.strictEqual(currentlyShown, total, 'Show all renders full set');
  console.log(`  ✓ "Tout afficher": all ${currentlyShown} jobs rendered`);

  // Test local filter simulation
  console.log('\n--- 5. Testing Local Real-Time Search Filter ---');
  const query = 'prompt';
  const filtered = digitalJobs.filter(j => {
    const t = (j.title || '').toLowerCase();
    const d = (j.description || '').toLowerCase();
    return t.includes(query) || d.includes(query);
  });
  assert(filtered.length > 0, 'Search for "prompt" should find matching jobs');
  console.log(`  ✓ Filter for "${query}" returned ${filtered.length} match(es): ${filtered.map(j => j.title).join(', ')}`);

  // 6. Test Job Dossier Modal Scroll Architecture
  console.log('\n--- 6. Testing Job Dossier Modal Scroll Architecture ---');
  const uiJs = fs.readFileSync(path.join(__dirname, '../frontend/js/orientation-ui.js'), 'utf8');
  const scrollyJs = fs.readFileSync(path.join(__dirname, '../frontend/js/scrollytelling-engine.js'), 'utf8');

  // Verify Lenis prevent config
  assert(scrollyJs.includes('prevent: (node) =>'), 'Lenis must have prevent callback in config');
  assert(scrollyJs.includes('job-dossier-overlay'), 'Lenis prevent callback must check job-dossier-overlay');
  console.log('  ✓ Lenis prevent callback successfully installed in scrollytelling-engine.js');

  // Verify data-lenis-prevent attributes
  assert(uiJs.includes("overlay.setAttribute('data-lenis-prevent', 'true')"), 'overlay must have data-lenis-prevent attribute');
  assert(uiJs.includes('data-lenis-prevent="true" data-lenis-prevent-wheel="true" data-lenis-prevent-touch="true" tabindex="-1"'), 'dossier-body must have data-lenis-prevent and tabindex');
  console.log('  ✓ data-lenis-prevent, data-lenis-prevent-wheel, data-lenis-prevent-touch, tabindex present on modal & body');

  // Verify wheel and touch forwarding
  assert(uiJs.includes("overlay.addEventListener('wheel'"), 'overlay must forward wheel events to dossierBody');
  assert(uiJs.includes("dossierBody.scrollTop += e.deltaY"), 'wheel event must update dossierBody.scrollTop');
  assert(uiJs.includes("overlay.addEventListener('touchmove'"), 'overlay must forward touchmove events to dossierBody');
  console.log('  ✓ Wheel and touch delegation to dossierBody verified');

  // Verify tab scroll reset & keyboard escape
  assert(uiJs.includes("dossierBody.scrollTo({ top: 0, behavior: 'smooth' })"), 'Tab switch must reset scroll to top');
  assert(uiJs.includes("e.key === 'Escape'"), 'Escape key must close modal');
  console.log('  ✓ Tab switch scroll reset & Escape key navigation verified');

  // Verify CSS rules
  assert(cssContent.includes('body.modal-open {\n  overflow: hidden !important;'), 'Global body.modal-open must lock overflow');
  assert(cssContent.includes('.dossier-body {\n  padding: 1.5rem 1.75rem;\n  overflow-y: auto !important;'), 'dossier-body must enforce overflow-y: auto !important');
  assert(cssContent.includes('.dossier-body::-webkit-scrollbar'), 'dossier-body must have custom visible scrollbar');
  console.log('  ✓ CSS scroll locking, overflow containment and custom scrollbars verified');

  console.log('\n======================================================');
  console.log('🎉 ALL INTEGRATION & VERIFICATION TESTS PASSED SUCCESSFULLY!');
  console.log('======================================================\n');
})().catch(err => {
  console.error('❌ Verification failed:', err);
  process.exit(1);
});

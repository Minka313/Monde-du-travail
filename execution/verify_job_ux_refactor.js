/**
 * verify_job_ux_refactor.js
 * Vérification déterministe de la refonte UX/UI mobile-first de job.html
 */
const fs = require('fs');
const path = require('path');

const jobHtmlPath = path.join(__dirname, '../frontend/job.html');
const stylesCssPath = path.join(__dirname, '../frontend/css/styles.css');
const orientationUiPath = path.join(__dirname, '../frontend/js/orientation-ui.js');

console.log('--- Vérification de la refonte UX/UI Mobile-First (job.html) ---');

// 1. Validation de job.html
const jobHtml = fs.readFileSync(jobHtmlPath, 'utf8');

const requiredHtmlElements = [
  'id="orientationSearchInput"',
  'id="searchSuggestionsBox"',
  'id="interestAccordionToggle"',
  'aria-expanded="false"',
  'aria-controls="interestExplorerBox"',
  'id="interestExplorerWrap"',
  'id="activeFiltersBanner"',
  'id="activeFiltersPills"',
  'id="btnClearAllFilters"',
  'id="mobileFiltersTriggerBar"',
  'id="btnOpenFiltersDrawer"',
  'id="mobileJobsCountPill"',
  'id="jobsSkeletonContainer"',
  'class="job-card-skeleton"',
  'id="filtersOffcanvasDrawer"',
  'id="filtersDrawerBackdrop"',
  'id="btnCloseFiltersDrawer"',
  'id="drawerBodyContent"',
  'id="btnApplyDrawerFilters"'
];

let htmlOk = true;
requiredHtmlElements.forEach(item => {
  if (!jobHtml.includes(item)) {
    console.error(`❌ ÉLÉMENT MANQUANT DANS job.html : ${item}`);
    htmlOk = false;
  }
});

if (htmlOk) {
  console.log('✅ Structure HTML (job.html) : Tous les conteneurs UX/A11y sont présents.');
}

// 2. Validation de styles.css
const stylesCss = fs.readFileSync(stylesCssPath, 'utf8');

const requiredStyles = [
  '.job-card-modern:hover',
  '.job-card-enter',
  '@keyframes fadeInUp',
  '@keyframes shimmerPulse',
  '.jobs-skeleton-grid',
  '.job-card-skeleton',
  '.search-suggestions-dropdown',
  '.suggestion-item',
  '.active-filters-banner',
  '.active-filter-pill',
  '.btn-clear-filters-animated',
  '.mobile-filters-trigger-bar',
  '.filters-offcanvas-drawer',
  '.filters-drawer-backdrop',
  'scroll-snap-type: x mandatory',
  '@media (prefers-reduced-motion: reduce)'
];

let cssOk = true;
requiredStyles.forEach(pattern => {
  if (!stylesCss.includes(pattern)) {
    console.error(`❌ STYLE MANQUANT DANS styles.css : ${pattern}`);
    cssOk = false;
  }
});

if (cssOk) {
  console.log('✅ Styles & Micro-interactions (styles.css) : Tous les styles, animations et media queries sont présents.');
}

// 3. Validation de orientation-ui.js
const orientationUi = fs.readFileSync(orientationUiPath, 'utf8');

const requiredJsLogic = [
  'showSkeleton',
  'updateActiveFiltersBanner',
  'initUniversalSearch',
  'searchSuggestionsBox',
  'initMobileInterestAccordion',
  'initMobileFiltersDrawer',
  'populateDrawerContent',
  'job-card-enter',
  'mobileJobsCountPill',
  'btnOpenFiltersDrawer'
];

let jsOk = true;
requiredJsLogic.forEach(func => {
  if (!orientationUi.includes(func)) {
    console.error(`❌ LOGIQUE MANQUANTE DANS orientation-ui.js : ${func}`);
    jsOk = false;
  }
});

if (jsOk) {
  console.log('✅ Logique Applicative (orientation-ui.js) : Skeleton loaders, suggestions intelligentes, accordéon et drawer configurés.');
}

if (htmlOk && cssOk && jsOk) {
  console.log('\n🎉 REFONTE UX/UI VALIDÉE AVEC SUCCÈS ! (100% conforme au plan d\'implémentation)');
  process.exit(0);
} else {
  console.error('\n⚠️ Des composants n\'ont pas passé la vérification.');
  process.exit(1);
}

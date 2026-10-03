const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const frontendDir = path.join(rootDir, 'frontend');

console.log('--- VÉRIFICATION DU SYSTÈME MODE SOMBRE / CLAIR ---');
let errors = 0;

// 1. theme-engine.js
const themeEnginePath = path.join(frontendDir, 'js/theme-engine.js');
if (!fs.existsSync(themeEnginePath)) {
  console.error('❌ frontend/js/theme-engine.js est manquant !');
  errors++;
} else {
  const content = fs.readFileSync(themeEnginePath, 'utf8');
  if (content.includes('window.LMTTheme') && content.includes('toggleTheme') && content.includes('applyTheme')) {
    console.log('✅ theme-engine.js existe et expose window.LMTTheme');
  } else {
    console.error('❌ theme-engine.js ne possède pas les fonctions requises');
    errors++;
  }
}

// 2. Fragments header & nav
const headerFrag = path.join(frontendDir, 'fragments/header.html');
const navFrag = path.join(frontendDir, 'fragments/nav.html');
if (fs.existsSync(headerFrag) && fs.readFileSync(headerFrag, 'utf8').includes('headerThemeToggleBtn')) {
  console.log('✅ fragments/header.html contient headerThemeToggleBtn');
} else {
  console.error('❌ fragments/header.html ne contient pas headerThemeToggleBtn');
  errors++;
}

if (fs.existsSync(navFrag) && fs.readFileSync(navFrag, 'utf8').includes('mobileThemeToggleBtn')) {
  console.log('✅ fragments/nav.html contient mobileThemeToggleBtn');
} else {
  console.error('❌ fragments/nav.html ne contient pas mobileThemeToggleBtn');
  errors++;
}

// 3. Toutes les pages HTML
const htmlFiles = fs.readdirSync(frontendDir).filter(f => f.endsWith('.html'));
console.log(`\nContrôle des ${htmlFiles.length} fichiers HTML...`);
htmlFiles.forEach(file => {
  const c = fs.readFileSync(path.join(frontendDir, file), 'utf8');
  const hasScript = c.includes('theme-engine.js');
  const hasHeaderBtn = c.includes('headerThemeToggleBtn');
  const hasMobileBtn = c.includes('mobileThemeToggleBtn');
  const hasMaintenanceBtn = file === 'maintenance.html' && c.includes('maintThemeToggleBtn') && c.includes('theme-toggle-btn');

  if (hasScript && ((hasHeaderBtn && hasMobileBtn) || hasMaintenanceBtn)) {
    console.log(`✅ [${file}] <head> script + theme toggle OK`);
  } else {
    console.error(`❌ [${file}] Manquant: ${!hasScript ? 'script ' : ''}${!hasHeaderBtn ? 'headerBtn ' : ''}${!hasMobileBtn ? 'mobileBtn' : ''}`);
    errors++;
  }
});

const adminLoginPath = path.join(rootDir, 'admin-frontend/login.html');
const adminLoginContent = fs.readFileSync(adminLoginPath, 'utf8');
if (adminLoginContent.includes('../frontend/js/theme-engine.js') && adminLoginContent.includes('class="theme-toggle-btn"')) {
  console.log('✅ Connexion admin reliée au moteur de thème partagé');
} else {
  console.error('❌ Connexion admin sans moteur ou bouton de thème partagé');
  errors++;
}

const adminPagesContent = fs.readFileSync(path.join(rootDir, 'admin-frontend/js/admin-pages.js'), 'utf8');
if (adminPagesContent.includes("localStorage.getItem('lmt-theme')") && adminPagesContent.includes("localStorage.setItem('lmt-theme', next)")) {
  console.log('✅ Tableau admin persistant sur la préférence de thème partagée');
} else {
  console.error('❌ Tableau admin non relié à la préférence de thème partagée');
  errors++;
}

// 4. Styles CSS
const cssPath = path.join(frontendDir, 'css/styles.css');
const cssContent = fs.readFileSync(cssPath, 'utf8');
const checks = [
  '[data-theme="dark"]',
  '.theme-toggle-btn',
  '[data-theme="dark"] .site-footer',
  '[data-theme="dark"] .login-container',
  '[data-theme="dark"] .job-card-modern',
  '[data-theme="dark"] #job-dossier-overlay .dossier-modal'
];
console.log('\nContrôle des règles CSS du mode sombre...');
checks.forEach(check => {
  if (cssContent.includes(check)) {
    console.log(`✅ CSS contient: ${check}`);
  } else {
    console.error(`❌ CSS manquant pour: ${check}`);
    errors++;
  }
});

if (errors === 0) {
  console.log('\n🎉 Tous les contrôles structurels du thème sont au vert.');
  process.exit(0);
} else {
  console.error(`\n⚠️ ${errors} erreur(s) détectée(s).`);
  process.exit(1);
}

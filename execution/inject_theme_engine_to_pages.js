const fs = require('fs');
const path = require('path');

const frontendDir = path.resolve(__dirname, '../frontend');
const htmlFiles = fs.readdirSync(frontendDir).filter(f => f.endsWith('.html'));

const SCRIPT_TAG = '    <script src="js/theme-engine.js"></script>';
const HEADER_BTN = `            <button type="button" class="theme-toggle-btn" id="headerThemeToggleBtn" aria-label="Changer de thème" title="Passer en Mode Sombre">
                <span class="theme-toggle-icon">🌙</span>
            </button>`;
const MOBILE_BTN = `                <button type="button" class="theme-toggle-btn theme-toggle-btn-mobile" id="mobileThemeToggleBtn" aria-label="Changer de thème">
                    <span class="theme-toggle-icon">🌙</span>
                    <span class="theme-toggle-label">Mode Sombre</span>
                </button>`;

console.log(`Traitement de ${htmlFiles.length} fichiers HTML...`);

htmlFiles.forEach(file => {
  const filePath = path.join(frontendDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // 1. Injecter theme-engine.js dans le <head>
  if (!content.includes('theme-engine.js')) {
    const cssMatch = content.match(/<link rel="stylesheet" href="css\/styles\.css[^"]*">/);
    if (cssMatch) {
      content = content.replace(cssMatch[0], `${cssMatch[0]}\n${SCRIPT_TAG}`);
      modified = true;
      console.log(`[${file}] theme-engine.js injecté dans <head>`);
    }
  }

  // 2. Injecter headerThemeToggleBtn dans .header-actions
  if (!content.includes('headerThemeToggleBtn')) {
    const headerActionsMatch = content.match(/<div class="header-actions">(\s*)/);
    if (headerActionsMatch) {
      content = content.replace(
        headerActionsMatch[0],
        `<div class="header-actions">\n${HEADER_BTN}\n`
      );
      modified = true;
      console.log(`[${file}] headerThemeToggleBtn injecté dans .header-actions`);
    }
  }

  // 3. Injecter mobileThemeToggleBtn dans .mobile-nav-footer
  if (!content.includes('mobileThemeToggleBtn')) {
    const mobileFooterMatch = content.match(/<div class="mobile-nav-footer"([^>]*)>(\s*)/);
    if (mobileFooterMatch) {
      content = content.replace(
        mobileFooterMatch[0],
        `<div class="mobile-nav-footer"${mobileFooterMatch[1]}>\n${MOBILE_BTN}\n`
      );
      modified = true;
      console.log(`[${file}] mobileThemeToggleBtn injecté dans .mobile-nav-footer`);
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`[${file}] Sauvegardé avec succès.`);
  } else {
    console.log(`[${file}] Déjà à jour.`);
  }
});

console.log('Traitement terminé.');

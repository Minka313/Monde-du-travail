const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const frontendDir = path.join(rootDir, 'frontend');

console.log('=== VÉRIFICATION DE L\'ARCHITECTURE DE PERFORMANCE ===');
let errors = 0;

// 1. Contrôle des préconnexions dans les fichiers HTML
const htmlFiles = fs.readdirSync(frontendDir).filter(f => f.endsWith('.html'));
console.log(`\n1. Contrôle des préconnexions DNS/TLS sur ${htmlFiles.length} fichiers HTML...`);
htmlFiles.forEach(file => {
  const content = fs.readFileSync(path.join(frontendDir, file), 'utf8');
  if (content.includes('images.unsplash.com') && content.includes('dns-prefetch')) {
    console.log(`✅ [${file}] Preconnect Unsplash OK`);
  } else {
    console.error(`❌ [${file}] Preconnect Unsplash manquant`);
    errors++;
  }
});

// 2. Contrôle de defer sur les scripts
console.log(`\n2. Contrôle de l'attribut defer sur les scripts de bas de page...`);
htmlFiles.forEach(file => {
  const content = fs.readFileSync(path.join(frontendDir, file), 'utf8');
  const headEndIdx = content.indexOf('</head>');
  if (headEndIdx !== -1) {
    const bodyContent = content.slice(headEndIdx);
    const nonDeferredScripts = bodyContent.match(/<script\s+(?!defer|async)src="[^"]+"/gi);
    if (!nonDeferredScripts || nonDeferredScripts.length === 0) {
      console.log(`✅ [${file}] Tous les scripts de body sont différés (defer)`);
    } else {
      console.error(`❌ [${file}] Scripts non différés trouvés :`, nonDeferredScripts);
      errors++;
    }
  }
});

// 3. Contrôle de l'optimiseur d'image dans orientation-ui.js
console.log(`\n3. Contrôle de l'optimiseur d'image dans orientation-ui.js...`);
const uiContent = fs.readFileSync(path.join(frontendDir, 'js/orientation-ui.js'), 'utf8');
if (uiContent.includes('optimizeImageUrl') && uiContent.includes('decoding="async"')) {
  console.log(`✅ orientation-ui.js intègre optimizeImageUrl et decoding="async"`);
} else {
  console.error(`❌ orientation-ui.js ne contient pas optimizeImageUrl ou decoding="async"`);
  errors++;
}

// 4. Contrôle des fichiers WebP locaux
console.log(`\n4. Contrôle de l'existence des images locales WebP...`);
const requiredWebp = [
  'images/orientation.webp',
  'images/communication.webp',
  'images/innovation.webp',
  'images/citoyennete.webp',
  'logo.webp'
];
requiredWebp.forEach(relPath => {
  const fullPath = path.join(frontendDir, relPath);
  if (fs.existsSync(fullPath)) {
    const size = Math.round(fs.statSync(fullPath).size / 1024);
    console.log(`✅ ${relPath} (${size} Ko) présent`);
  } else {
    console.error(`❌ ${relPath} manquant`);
    errors++;
  }
});

// 5. Contrôle de vercel.json
console.log(`\n5. Contrôle de la configuration Vercel (vercel.json)...`);
const vercelContent = fs.readFileSync(path.join(rootDir, 'vercel.json'), 'utf8');
if (vercelContent.includes('/logo') && vercelContent.includes('webp')) {
  console.log(`✅ vercel.json cache logo.webp correctement`);
} else {
  console.error(`❌ vercel.json ne prend pas en compte logo.webp`);
  errors++;
}

// Bilan
if (errors === 0) {
  console.log('\n🎉 TOUS LES CONTRÔLES DE PERFORMANCE SONT VALIDÉS !');
  process.exit(0);
} else {
  console.error(`\n⚠️ ${errors} anomalie(s) détectée(s).`);
  process.exit(1);
}

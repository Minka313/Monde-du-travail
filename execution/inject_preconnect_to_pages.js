const fs = require('fs');
const path = require('path');

const frontendDir = path.resolve(__dirname, '../frontend');
const htmlFiles = fs.readdirSync(frontendDir).filter(f => f.endsWith('.html'));

const PRECONNECT_BLOCK = `    <link rel="preconnect" href="https://images.unsplash.com" crossorigin>
    <link rel="dns-prefetch" href="https://images.unsplash.com">
    <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>
    <link rel="preconnect" href="https://unpkg.com" crossorigin>`;

console.log(`Injection des préconnexions DNS/TLS dans ${htmlFiles.length} fichiers HTML...`);

htmlFiles.forEach(file => {
  const filePath = path.join(frontendDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  if (!content.includes('images.unsplash.com') || !content.includes('rel="dns-prefetch" href="https://images.unsplash.com"')) {
    // Injecter juste après <meta charset="UTF-8">
    if (content.includes('<meta charset="UTF-8">')) {
      content = content.replace(
        '<meta charset="UTF-8">',
        `<meta charset="UTF-8">\n${PRECONNECT_BLOCK}`
      );
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ [${file}] Preconnect injecté avec succès`);
    } else {
      console.warn(`⚠️ [${file}] <meta charset="UTF-8"> non trouvé`);
    }
  } else {
    console.log(`ℹ️ [${file}] Preconnect déjà présent`);
  }
});

console.log('Fin de l\'injection des préconnexions.');

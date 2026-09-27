const fs = require('fs');
const path = require('path');

const frontendDir = path.resolve(__dirname, '../frontend');
const htmlFiles = fs.readdirSync(frontendDir).filter(f => f.endsWith('.html'));

console.log(`Ajout de l'attribut defer aux scripts de bas de page sur ${htmlFiles.length} fichiers HTML...`);

htmlFiles.forEach(file => {
  const filePath = path.join(frontendDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Séparer <head> et <body> pour ne pas toucher au script theme-engine dans <head>
  const headEndIdx = content.indexOf('</head>');
  if (headEndIdx === -1) return;

  const headPart = content.slice(0, headEndIdx + 7);
  let bodyPart = content.slice(headEndIdx + 7);

  let modified = false;

  // Remplacer <script src="..." par <script defer src="..." si defer ou async n'est pas déjà présent
  const updatedBody = bodyPart.replace(/<script\s+(?!defer|async)(src="[^"]+")/gi, (match, srcGroup) => {
    modified = true;
    return `<script defer ${srcGroup}`;
  });

  if (modified) {
    fs.writeFileSync(filePath, headPart + updatedBody, 'utf8');
    console.log(`✅ [${file}] Scripts de bas de page différés (defer) avec succès`);
  } else {
    console.log(`ℹ️ [${file}] Tous les scripts possèdent déjà defer`);
  }
});

console.log('Fin de l\'application de defer.');

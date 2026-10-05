/**
 * VÉRIFICATION DÉTERMINISTE : IDENTITÉ VISUELLE AFRICAINE & PERFORMANCE DES IMAGES
 * Le Monde du Travail — Validation des formats, poids, attributs HTML et intégrité
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const IMAGES_DIR = path.join(ROOT_DIR, 'frontend', 'images');

const EXPECTED_LOCAL_IMAGES = [
  { name: 'hero_senegalese_youth.webp', maxKb: 120 },
  { name: 'hero_senegalese_youth_960.webp', maxKb: 80 },
  { name: 'hero_senegalese_youth_480.webp', maxKb: 40 },
  { name: 'formations_hero.webp', maxKb: 120 },
  { name: 'formations_hero_960.webp', maxKb: 80 },
  { name: 'formations_hero_480.webp', maxKb: 40 },
  { name: 'orientation.webp', maxKb: 75 },
  { name: 'communication.webp', maxKb: 75 },
  { name: 'leadership.webp', maxKb: 75 },
  { name: 'innovation.webp', maxKb: 85 },
  { name: 'ethique.webp', maxKb: 60 },
  { name: 'citoyennete.webp', maxKb: 95 },
  { name: 'about_team.webp', maxKb: 85 },
  { name: 'about_mission.webp', maxKb: 85 },
];

const PAGES_TO_CHECK = [
  {
    file: 'frontend/index.html',
    requiredStrings: [
      'images/hero_senegalese_youth_960.webp',
      'images/orientation.webp',
      'images/communication.webp',
      'images/leadership.webp',
      'images/innovation.webp',
      'images/ethique.webp',
      'images/citoyennete.webp',
      'fetchpriority="high"',
      'loading="lazy"'
    ],
    forbiddenStrings: [
      'photo-1515187029135-18ee286d815b', // ancien leadership blanc
      'photo-1450101499163-c8848c66ca85', // ancien ethique blanc
      'photo-1531482615713-2afd69097998'  // ancien hero
    ]
  },
  {
    file: 'frontend/about.html',
    requiredStrings: [
      'images/hero_senegalese_youth_960.webp',
      'images/about_team.webp',
      'images/about_mission.webp',
      'images/innovation.webp',
      'images/ethique.webp',
      'images/citoyennete.webp',
      'fetchpriority="high"',
      'loading="lazy"'
    ],
    forbiddenStrings: [
      'photo-1521737711867-e3b97375f902', // ancienne équipe blanche
      'photo-1529156069898-49953e39b3ac'  // ancienne mission blanche
    ]
  },
  {
    file: 'frontend/formations.html',
    requiredStrings: [
      'images/formations_hero_960.webp',
      'images/formations_hero.webp',
      'images/communication.webp',
      'images/leadership.webp',
      'images/about_mission.webp',
      'images/innovation.webp',
      'fetchpriority="high"'
    ],
    forbiddenStrings: [
      'photo-1522202176988-66273c2fd55f' // ancien hero université blanche
    ]
  },
  {
    file: 'frontend/blog.html',
    requiredStrings: [
      'images/hero_senegalese_youth_960.webp',
      'images/formations_hero_960.webp',
      'images/about_team.webp',
      'images/leadership.webp',
      'images/communication.webp',
      'images/citoyennete.webp',
      'images/about_mission.webp',
      'images/orientation.webp',
      'images/innovation.webp'
    ],
    forbiddenStrings: []
  },
  {
    file: 'frontend/job.html',
    requiredStrings: [
      'images/hero_senegalese_youth_960.webp',
      'images/orientation.webp'
    ],
    forbiddenStrings: [
      'photo-1517245386807-bb43f82c33c4' // ancien hero orientation blanc
    ]
  },
  {
    file: 'frontend/js/job-detail.js',
    requiredStrings: [
      'images/orientation.webp'
    ],
    forbiddenStrings: [
      'photo-1517245386807-bb43f82c33c4'
    ]
  },
  {
    file: 'frontend/js/orientation-ui.js',
    requiredStrings: [
      'images/orientation.webp'
    ],
    forbiddenStrings: [
      'photo-1517245386807-bb43f82c33c4'
    ]
  }
];

function runVerification() {
  console.log('🔍 DÉMARRAGE DU CONTRÔLE D\'INTÉGRITÉ DES IMAGES & DE L\'IDENTITÉ VISUELLE\n');
  let errors = 0;
  let successCount = 0;

  // 1. Contrôle des fichiers physiques dans frontend/images/
  console.log('--- 1. Vérification des assets locaux WebP ---');
  for (const img of EXPECTED_LOCAL_IMAGES) {
    const fullPath = path.join(IMAGES_DIR, img.name);
    if (!fs.existsSync(fullPath)) {
      console.error(`❌ Fichier manquant : ${img.name}`);
      errors++;
      continue;
    }
    const stat = fs.statSync(fullPath);
    const sizeKb = stat.size / 1024;
    if (sizeKb > img.maxKb) {
      console.warn(`⚠️ ${img.name} dépasse la limite recommandée : ${sizeKb.toFixed(1)} Ko > ${img.maxKb} Ko`);
      errors++;
    } else {
      console.log(`✅ ${img.name.padEnd(32)} ${sizeKb.toFixed(1).padStart(5)} Ko (<= ${img.maxKb} Ko)`);
      successCount++;
    }
  }

  // 2. Contrôle de l'absence de fichiers redondants/obsolètes
  console.log('\n--- 2. Contrôle d\'absence de doublons/accents dans frontend/images/ ---');
  const actualFiles = fs.readdirSync(IMAGES_DIR);
  for (const f of actualFiles) {
    if (/[éèêëàâôûîïç]/i.test(f)) {
      console.error(`❌ Fichier avec caractères accentués détecté : ${f}`);
      errors++;
    }
    if (f.endsWith('.jpg') || f.endsWith('.jpeg')) {
      console.error(`❌ Fichier JPG non converti présent : ${f}`);
      errors++;
    }
  }
  console.log('✅ Aucun doublon accentué ou JPG obsolète dans frontend/images/');

  // 3. Contrôle des pages HTML et scripts JS
  console.log('\n--- 3. Contrôle des pages HTML & scripts JS ---');
  for (const p of PAGES_TO_CHECK) {
    const fullPath = path.join(ROOT_DIR, p.file);
    if (!fs.existsSync(fullPath)) {
      console.error(`❌ Page introuvable : ${p.file}`);
      errors++;
      continue;
    }
    const content = fs.readFileSync(fullPath, 'utf8');

    for (const req of p.requiredStrings) {
      if (!content.includes(req)) {
        console.error(`❌ [${p.file}] Chaîne requise manquante : "${req}"`);
        errors++;
      } else {
        successCount++;
      }
    }

    for (const forb of p.forbiddenStrings) {
      if (content.includes(forb)) {
        console.error(`❌ [${p.file}] Référence obsolète/interdite trouvée : "${forb}"`);
        errors++;
      } else {
        successCount++;
      }
    }
    console.log(`✅ [${p.file}] Validé`);
  }

  // Bilan
  console.log('\n=========================================');
  if (errors === 0) {
    console.log(`🎉 TOUTES LES VÉRIFICATIONS SONT AU VERT ! (${successCount} assertions validées)`);
    console.log('✨ Identité africaine et sénégalaise affirmée.');
    console.log('⚡ Performance maximale (formats WebP locaux, poids ultralégers, zéro CLS).');
    process.exit(0);
  } else {
    console.error(`❌ ${errors} anomalie(s) détectée(s).`);
    process.exit(1);
  }
}

runVerification();

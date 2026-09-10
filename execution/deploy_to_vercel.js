const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');
dns.setServers(['8.8.8.8', '1.1.1.1']);

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
require('dotenv').config({ path: path.resolve(__dirname, '../backend/.env') });

const VERCEL_TOKEN = process.env.VERCEL_TOKEN;
const PROJECT_NAME = process.env.VERCEL_PROJECT_NAME || 'monde-du-travail';

const headers = {
  Authorization: `Bearer ${VERCEL_TOKEN}`,
  'Content-Type': 'application/json',
};

async function apiRequest(endpoint, method = 'GET', body = null, extraHeaders = {}) {
  const options = { method, headers: { ...headers, ...extraHeaders } };
  if (body) {
    if (Buffer.isBuffer(body) || typeof body === 'string') {
      options.body = body;
    } else {
      options.body = JSON.stringify(body);
    }
  }
  const res = await fetch(`https://api.vercel.com${endpoint}`, options);
  const data = await res.json();
  if (!res.ok) {
    const err = new Error(`API Error ${res.status}: ${data.error?.message || JSON.stringify(data)}`);
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

const envVars = [
  {
    key: 'DATABASE_URL',
    value: 'postgresql://postgres:BayeMoyMinka@db.vbyileuqgzooedcwjoxe.supabase.co:5432/postgres?sslmode=require',
    type: 'encrypted',
    target: ['production', 'preview', 'development'],
  },
  {
    key: 'DIRECT_URL',
    value: 'postgresql://postgres:BayeMoyMinka@db.vbyileuqgzooedcwjoxe.supabase.co:5432/postgres?sslmode=require',
    type: 'encrypted',
    target: ['production', 'preview', 'development'],
  },
  {
    key: 'JWT_SECRET',
    value: 'super_secret_jwt_key_pour_le_monde_du_travail_2026_securise',
    type: 'encrypted',
    target: ['production', 'preview', 'development'],
  },
  {
    key: 'JWT_REFRESH_SECRET',
    value: 'super_refresh_jwt_key_pour_le_monde_du_travail_2026_securise',
    type: 'encrypted',
    target: ['production', 'preview', 'development'],
  },
  {
    key: 'SUPABASE_URL',
    value: 'https://vbyileuqgzooedcwjoxe.supabase.co',
    type: 'encrypted',
    target: ['production', 'preview', 'development'],
  },
  {
    key: 'SUPABASE_ANON_KEY',
    value: 'sb_publishable_n0L0_d-EP3swfxCszP4FaQ_Fd2kOUNW',
    type: 'encrypted',
    target: ['production', 'preview', 'development'],
  },
  {
    key: 'NODE_ENV',
    value: 'production',
    type: 'plain',
    target: ['production', 'preview', 'development'],
  },
];

// Récupérer la liste des fichiers à déployer (sans node_modules, git, etc.)
function collectFiles(dir, baseDir = dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  const ignored = ['.git', 'node_modules', '.tmp', '.agents', 'backups', 'coverage'];

  for (const entry of entries) {
    if (ignored.includes(entry.name)) continue;
    if (entry.name.startsWith('.env')) continue; // Ne jamais envoyer les .env locaux
    const fullPath = path.join(dir, entry.name);
    try {
      if (!fs.existsSync(fullPath)) continue;
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        files = files.concat(collectFiles(fullPath, baseDir));
      } else if (stat.isFile()) {
        const relPath = path.relative(baseDir, fullPath).replace(/\\/g, '/');
        files.push({ fullPath, relPath });
      }
    } catch {
      continue;
    }
  }
  return files;
}

async function uploadFile(fileObj) {
  const content = fs.readFileSync(fileObj.fullPath);
  const sha = crypto.createHash('sha1').update(content).digest('hex');
  const size = content.length;

  const res = await fetch('https://api.vercel.com/v2/files', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${VERCEL_TOKEN}`,
      'Content-Type': 'application/octet-stream',
      'x-vercel-digest': sha,
      'Content-Length': size,
    },
    body: content,
  });

  if (!res.ok && res.status !== 409) { // 409 means already uploaded
    const errText = await res.text();
    console.warn(`Avertissement upload ${fileObj.relPath}: ${errText}`);
  }

  return { file: fileObj.relPath, sha, size };
}

async function main() {
  console.log('🚀 Démarrage du déploiement direct vers Vercel...');

  // 1. Créer ou récupérer le projet Vercel
  let project;
  try {
    project = await apiRequest(`/v9/projects/${PROJECT_NAME}`);
    console.log(`✅ Projet existant trouvé : ${project.name} (${project.id})`);
    await apiRequest(`/v9/projects/${project.id}`, 'PATCH', { outputDirectory: null });
    console.log(`   Paramètre outputDirectory réinitialisé.`);
  } catch (err) {
    if (err.status === 404) {
      console.log(`Création du projet ${PROJECT_NAME}...`);
      project = await apiRequest('/v9/projects', 'POST', {
        name: PROJECT_NAME,
        framework: null,
      });
      console.log(`✅ Projet ${PROJECT_NAME} créé !`);
    } else {
      throw err;
    }
  }

  // 2. Configurer les variables d'environnement
  console.log('🔐 Vérification et injection des variables d\'environnement...');
  const existingEnvs = await apiRequest(`/v9/projects/${project.id}/env`);
  const existingKeys = new Set(existingEnvs.envs?.map(e => e.key) || []);

  for (const env of envVars) {
    if (existingKeys.has(env.key)) {
      console.log(`   - Variable ${env.key} déjà présente`);
      continue;
    }
    try {
      await apiRequest(`/v10/projects/${project.id}/env`, 'POST', env);
      console.log(`   + Variable ${env.key} ajoutée`);
    } catch (e) {
      console.warn(`   ⚠️ Erreur pour ${env.key}:`, e.message);
    }
  }

  // 3. Préparer et téléverser les fichiers
  console.log('📦 Collecte des fichiers du projet...');
  const rootDir = path.resolve(__dirname, '..');
  const filesList = collectFiles(rootDir);
  console.log(`   Nombre de fichiers à déployer : ${filesList.length}`);

  console.log('☁️ Téléversement des fichiers sur Vercel...');
  const deployedFiles = [];
  for (let i = 0; i < filesList.length; i++) {
    const f = filesList[i];
    const uploaded = await uploadFile(f);
    deployedFiles.push(uploaded);
    if ((i + 1) % 20 === 0 || i + 1 === filesList.length) {
      console.log(`   Progression : ${i + 1}/${filesList.length} fichiers synchronisés`);
    }
  }

  // 4. Déclencher le déploiement de production
  console.log('🚀 Déclenchement du build de production sur Vercel...');
  const deployment = await apiRequest('/v13/deployments', 'POST', {
    name: PROJECT_NAME,
    project: project.id,
    target: 'production',
    files: deployedFiles,
  });

  console.log(`🎉 Déploiement initié avec succès !`);
  console.log(`   ID Déploiement : ${deployment.id}`);
  console.log(`   URL temporaire : https://${deployment.url}`);

  // 5. Suivi du statut de build
  console.log('⏳ Suivi du build Vercel...');
  for (let i = 0; i < 40; i++) {
    await new Promise(r => setTimeout(r, 5000));
    const check = await apiRequest(`/v13/deployments/${deployment.id}`);
    const state = check.readyState || check.status;
    console.log(`   Statut (${(i + 1) * 5}s) : ${state}`);

    if (state === 'READY') {
      console.log('\n=============================================================');
      console.log('🎊 FÉLICITATIONS ! VOTRE SITE EST EN LIGNE SUR VERCEL ! 🎊');
      console.log(`🌐 URL du déploiement : https://${check.url}`);
      console.log(`🌐 URL du projet      : https://${PROJECT_NAME}.vercel.app`);
      console.log('=============================================================\n');
      return;
    }

    if (state === 'ERROR' || state === 'CANCELED') {
      console.error(`\n❌ Échec du build Vercel (${state}) :`);
      console.error(check.errorMessage || JSON.stringify(check.error, null, 2));
      process.exit(1);
    }
  }
}

main().catch(e => {
  console.error('\n❌ Erreur :', e.message);
  if (e.data) console.error(JSON.stringify(e.data, null, 2));
  process.exit(1);
});

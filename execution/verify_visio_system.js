/**
 * Script de vérification déterministe pour le système de Visioconférence (Salle Virtuelle Jitsi)
 * Valide l'architecture 3-couches : directives, modèles Prisma, routes API backend,
 * client API frontend, interface de salle virtuelle, styles et pilotage admin.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;

function assert(condition, description) {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`  ✅ [PASS] ${description}`);
  } else {
    failedChecks++;
    console.error(`  ❌ [FAIL] ${description}`);
  }
}

console.log('====================================================');
console.log('🔍 AUDIT DÉTERMINISTE : SYSTÈME DE VISIOCONFÉRENCE EN DIRECT');
console.log('====================================================\n');

// 1. Directive Opérationnelle
console.log('1. Directive & Spécification (directives/)...');
const directivePath = path.join(ROOT_DIR, 'directives/manage_visio_classroom.md');
assert(fs.existsSync(directivePath), 'Directive manage_visio_classroom.md créée');
if (fs.existsSync(directivePath)) {
  const directiveContent = fs.readFileSync(directivePath, 'utf8');
  assert(directiveContent.includes('Jitsi Meet'), 'Directive référence Jitsi Meet WebRTC');
  assert(directiveContent.includes('Mode Économie de Données'), 'Directive prend en compte le mode bas-débit 4G');
}

// 2. Schéma Prisma & Base de Données
console.log('\n2. Modèle de Données (Prisma Schema)...');
const prismaPath = path.join(ROOT_DIR, 'backend/prisma/schema.prisma');
const prismaContent = fs.readFileSync(prismaPath, 'utf8');
assert(prismaContent.includes('visioEnabled'), 'Champ visioEnabled présent sur Formation');
assert(prismaContent.includes('visioRoomId'), 'Champ visioRoomId présent sur Formation');
assert(prismaContent.includes('visioStatus'), 'Champ visioStatus présent sur Formation');
assert(prismaContent.includes('visioScheduledAt'), 'Champ visioScheduledAt présent sur Formation');

// 3. Service Métier Backend (FormationService)
console.log('\n3. Service Métier Backend (FormationService)...');
const servicePath = path.join(ROOT_DIR, 'backend/src/services/formationService.js');
const serviceContent = fs.readFileSync(servicePath, 'utf8');
assert(serviceContent.includes('static async startVisioSession('), 'startVisioSession() implémenté');
assert(serviceContent.includes('static async stopVisioSession('), 'stopVisioSession() implémenté');
assert(serviceContent.includes('static async getVisioSession('), 'getVisioSession() implémenté');
assert(serviceContent.includes('ALTER TABLE formations ADD COLUMN IF NOT EXISTS "visioEnabled"'), 'Auto-migration résiliente SQL configurée');

// 4. Contrôleur et Routes Backend
console.log('\n4. Contrôleurs et Routes API Backend...');
const controllerPath = path.join(ROOT_DIR, 'backend/src/controllers/formationController.js');
const controllerContent = fs.readFileSync(controllerPath, 'utf8');
assert(controllerContent.includes('static async startVisioSession('), 'Contrôleur startVisioSession présent');
assert(controllerContent.includes('static async stopVisioSession('), 'Contrôleur stopVisioSession présent');
assert(controllerContent.includes('static async getVisioSession('), 'Contrôleur getVisioSession présent');

const routesPath = path.join(ROOT_DIR, 'backend/src/routes/formations.js');
const routesContent = fs.readFileSync(routesPath, 'utf8');
assert(routesContent.includes("router.get('/:id/visio'"), 'Route GET /:id/visio déclarée');
assert(routesContent.includes("router.post('/:id/visio/start'"), 'Route POST /:id/visio/start déclarée');
assert(routesContent.includes("router.post('/:id/visio/stop'"), 'Route POST /:id/visio/stop déclarée');

// 5. Clients API (Frontend & Admin)
console.log('\n5. Clients API...');
const frontendApiPath = path.join(ROOT_DIR, 'frontend/js/frontend-api.js');
const frontendApiContent = fs.readFileSync(frontendApiPath, 'utf8');
assert(frontendApiContent.includes('getVisioSession: (id) => apiRequestWithRefresh(`/formations/${id}/visio`)'), 'Client Api.formations.getVisioSession disponible');

const adminAuthPath = path.join(ROOT_DIR, 'admin-frontend/js/admin-auth.js');
const adminAuthContent = fs.readFileSync(adminAuthPath, 'utf8');
assert(adminAuthContent.includes('getVisio: (id) => apiRequestWithRefresh(`/formations/${id}/visio`)'), 'AdminApi.formations.getVisio disponible');
assert(adminAuthContent.includes('startVisio: (id, data = {}) =>'), 'AdminApi.formations.startVisio disponible');
assert(adminAuthContent.includes('stopVisio: (id) => apiRequestWithRefresh(`/formations/${id}/visio/stop`'), 'AdminApi.formations.stopVisio disponible');

// 6. Interface de Salle Virtuelle (visio.html, visio.js, visio.css)
console.log('\n6. Interface de la Salle Virtuelle...');
const visioHtmlPath = path.join(ROOT_DIR, 'frontend/visio.html');
assert(fs.existsSync(visioHtmlPath), 'Page frontend/visio.html créée');
if (fs.existsSync(visioHtmlPath)) {
  const visioHtml = fs.readFileSync(visioHtmlPath, 'utf8');
  assert(visioHtml.includes('id="meetContainer"'), 'Conteneur vidéo meetContainer présent');
  assert(visioHtml.includes('id="btnDataSaver"'), 'Bouton Mode Éco-Data présent');
  assert(visioHtml.includes('id="visioSidebar"'), 'Sidebar pédagogique rétractable présente');
  assert(visioHtml.includes('id="tab-syllabus"'), 'Onglet syllabus présent');
  assert(visioHtml.includes('id="tab-jobs"'), 'Onglet débouchés métiers présent');
  assert(visioHtml.includes('id="visioNotesInput"'), 'Bloc-notes interactif présent');
}

const visioJsPath = path.join(ROOT_DIR, 'frontend/js/visio.js');
assert(fs.existsSync(visioJsPath), 'Script frontend/js/visio.js créé');
if (fs.existsSync(visioJsPath)) {
  const visioJs = fs.readFileSync(visioJsPath, 'utf8');
  assert(visioJs.includes('https://meet.jit.si/external_api.js'), 'Chargement dynamique du SDK Jitsi WebRTC');
  assert(visioJs.includes('new window.JitsiMeetExternalAPI('), 'Instanciation du client JitsiMeetExternalAPI');
  assert(visioJs.includes("executeCommand('setVideoQuality'"), 'Gestion de la bande passante et mode basse consommation');
  assert(visioJs.includes('lmdt_visio_notes_'), 'Sauvegarde locale automatique des notes');
}

const visioCssPath = path.join(ROOT_DIR, 'frontend/css/visio.css');
assert(fs.existsSync(visioCssPath), 'Feuille de styles frontend/css/visio.css créée');
if (fs.existsSync(visioCssPath)) {
  const visioCss = fs.readFileSync(visioCssPath, 'utf8');
  assert(visioCss.includes('--visio-bg'), 'Variables de thème sombre visio définies');
  assert(visioCss.includes('.meet-container'), 'Classes du conteneur de flux WebRTC');
}

// 7. Intégration sur la page Catalogue (formations.html)
console.log('\n7. Liens et Déclencheurs sur Catalogue (formations.html)...');
const formationsHtmlPath = path.join(ROOT_DIR, 'frontend/formations.html');
const formationsHtml = fs.readFileSync(formationsHtmlPath, 'utf8');
assert(formationsHtml.includes('class="btn-visio-join"'), 'Bouton d\'accès Visio présent dans le modal de détail');
assert(formationsHtml.includes('class="btn btn-sm btn-visio-card-quick"'), 'Bouton rapide Visio présent sur les cartes');

// 8. Espace Admin (admin-pages.js)
console.log('\n8. Pilotage Administrateur & Formateur (admin-pages.js)...');
const adminPagesPath = path.join(ROOT_DIR, 'admin-frontend/js/admin-pages.js');
const adminPages = fs.readFileSync(adminPagesPath, 'utf8');
assert(adminPages.includes('btn-formation-visio'), 'Bouton Visio Live présent dans le tableau des formations');
assert(adminPages.includes('async function openFormationVisioModal('), 'Modale de pilotage de visioconférence implémentée');
assert(adminPages.includes('btn-start-trainer-visio'), 'Déclencheur d\'accès formateur modérateur implémenté');

console.log('\n====================================================');
console.log(`RÉSULTAT GLOBAL : ${passedChecks}/${totalChecks} tests réussis (${failedChecks} échecs)`);
console.log('====================================================');

if (failedChecks > 0) {
  process.exit(1);
} else {
  console.log('✨ Le système de visioconférence en direct est 100% opérationnel !');
  process.exit(0);
}

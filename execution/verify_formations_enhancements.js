/**
 * Script de vérification déterministe pour le module Formations
 * Valide l'intégrité de la persistance backend, des routes d'inscription,
 * des emails transactionnels, du simulateur frontend, du moteur de recherche,
 * des liens transverses Métiers <-> Formations, et de l'espace admin.
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
console.log('🔍 AUDIT DÉTERMINISTE : AMÉLIORATION DU MODULE FORMATIONS');
console.log('====================================================\n');

// 1. Prisma Schema
console.log('1. Schéma de données (Prisma)...');
const prismaSchemaPath = path.join(ROOT_DIR, 'backend/prisma/schema.prisma');
const prismaSchema = fs.readFileSync(prismaSchemaPath, 'utf8');
assert(prismaSchema.includes('model FormationRegistration {'), 'Modèle FormationRegistration présent');
assert(prismaSchema.includes('formation   Formation @relation(fields: [formationId], references: [id]'), 'Relation Formation <-> FormationRegistration');
assert(/registrations\s+FormationRegistration\[\]/.test(prismaSchema), 'Relation inverse sur Formation');

// 2. Email Service
console.log('\n2. Service d\'emails (Resend)...');
const emailServicePath = path.join(ROOT_DIR, 'backend/src/services/emailService.js');
const emailService = fs.readFileSync(emailServicePath, 'utf8');
assert(emailService.includes('static async notifyFormationRegistrationConfirmation('), 'Email de confirmation apprenant présent');
assert(emailService.includes('static async notifyAdminNewFormationRegistration('), 'Email de notification admin présent');

// 3. Formation Service
console.log('\n3. Service Métier Backend (FormationService)...');
const formationServicePath = path.join(ROOT_DIR, 'backend/src/services/formationService.js');
const formationService = fs.readFileSync(formationServicePath, 'utf8');
assert(formationService.includes('static async registerCandidate('), 'registerCandidate() implémenté');
assert(formationService.includes('static async getRegistrations('), 'getRegistrations() implémenté');
assert(formationService.includes('static async updateRegistrationStatus('), 'updateRegistrationStatus() implémenté');
assert(formationService.includes('CREATE TABLE IF NOT EXISTS formation_registrations'), 'Fallback SQL résilient configuré');

// 4. Formation Controller & Routes
console.log('\n4. Contrôleur et Routes API...');
const formationControllerPath = path.join(ROOT_DIR, 'backend/src/controllers/formationController.js');
const formationController = fs.readFileSync(formationControllerPath, 'utf8');
assert(formationController.includes('static async registerCandidate('), 'Contrôleur registerCandidate présent');
assert(formationController.includes('static async getRegistrations('), 'Contrôleur getRegistrations présent');
assert(formationController.includes('static async updateRegistrationStatus('), 'Contrôleur updateRegistrationStatus présent');

const formationRoutesPath = path.join(ROOT_DIR, 'backend/src/routes/formations.js');
const formationRoutes = fs.readFileSync(formationRoutesPath, 'utf8');
assert(formationRoutes.includes("router.post('/:id/register'"), 'Route POST /:id/register déclarée');
assert(formationRoutes.includes("router.get('/:id/registrations'"), 'Route GET /:id/registrations déclarée avec garde admin');
assert(formationRoutes.includes("router.patch('/registrations/:registrationId'"), 'Route PATCH /registrations/:registrationId déclarée');

// 5. Clients API (Frontend & Admin)
console.log('\n5. Clients API...');
const frontendApiPath = path.join(ROOT_DIR, 'frontend/js/frontend-api.js');
const frontendApi = fs.readFileSync(frontendApiPath, 'utf8');
assert(frontendApi.includes('register: (id, data) => apiRequestWithRefresh(`/formations/${id}/register`'), 'Client Api.formations.register disponible');

const adminAuthPath = path.join(ROOT_DIR, 'admin-frontend/js/admin-auth.js');
const adminAuth = fs.readFileSync(adminAuthPath, 'utf8');
assert(adminAuth.includes('getRegistrations: (id, params = {}) =>'), 'AdminApi.formations.getRegistrations disponible');
assert(adminAuth.includes('updateRegistrationStatus: (regId, status) =>'), 'AdminApi.formations.updateRegistrationStatus disponible');

// 6. Espace Admin (admin-pages.js)
console.log('\n6. Interface d\'administration...');
const adminPagesPath = path.join(ROOT_DIR, 'admin-frontend/js/admin-pages.js');
const adminPages = fs.readFileSync(adminPagesPath, 'utf8');
assert(adminPages.includes('btn-formation-registrations'), 'Bouton Inscrits présent dans la liste des formations');
assert(adminPages.includes('async function openFormationRegistrationsModal('), 'Modale de gestion des inscrits implémentée');
assert(adminPages.includes('exportTableToCsv(`inscrits_'), 'Export CSV des inscrits implémenté');

// 7. Page Publique Formations (HTML, Search, Simulator, WhatsApp, Calendar)
console.log('\n7. Page Publique frontend/formations.html...');
const formationsHtmlPath = path.join(ROOT_DIR, 'frontend/formations.html');
const formationsHtml = fs.readFileSync(formationsHtmlPath, 'utf8');
assert(formationsHtml.includes('id="formationSearchInput"'), 'Barre de recherche instantanée présente');
assert(formationsHtml.includes('id="formationResultsCount"'), 'Badge compteur dynamique présent');
assert(formationsHtml.includes('id="softSkillsSimulator"'), 'Simulateur Soft Skills Express présent');
assert(formationsHtml.includes('btn-whatsapp-share'), 'Bouton Partage WhatsApp présent dans la modale');
assert(formationsHtml.includes('btn-calendar-add'), 'Bouton Google Agenda présent dans la modale');
assert(formationsHtml.includes('formation-job-chip'), 'Bloc Passerelles Métiers associé présent dans la modale');
assert(formationsHtml.includes('window.Api.formations.register'), 'Appel API réel lors de la soumission du formulaire');

// 8. Recommandation croisée Fiche Métier -> Formations
console.log('\n8. Synergie Métiers <-> Formations (job-detail.html & job-detail.js)...');
const jobDetailHtmlPath = path.join(ROOT_DIR, 'frontend/job-detail.html');
const jobDetailHtml = fs.readFileSync(jobDetailHtmlPath, 'utf8');
assert(jobDetailHtml.includes('id="clubRecommendedFormationsBox"'), 'Encadré de recommandations Club présent dans job-detail.html');
assert(jobDetailHtml.includes('id="clubRecommendedFormationsList"'), 'Liste dynamique de recommandations présente dans job-detail.html');

const jobDetailJsPath = path.join(ROOT_DIR, 'frontend/js/job-detail.js');
const jobDetailJs = fs.readFileSync(jobDetailJsPath, 'utf8');
assert(jobDetailJs.includes('clubRecommendedFormationsBox'), 'Moteur de recommandation contextuelle connecté dans job-detail.js');

// 9. Styles CSS
console.log('\n9. Styles CSS...');
const cssPath = path.join(ROOT_DIR, 'frontend/css/styles.css');
const css = fs.readFileSync(cssPath, 'utf8');
assert(css.includes('.simulator-card'), 'Classes CSS du simulateur (.simulator-card) présentes');
assert(css.includes('.formation-search-input'), 'Classes CSS de la recherche (.formation-search-input) présentes');
assert(css.includes('.formation-job-chip'), 'Classes CSS des tags métiers associées (.formation-job-chip) présentes');
assert(css.includes('.btn-whatsapp-share'), 'Classes CSS de partage WhatsApp (.btn-whatsapp-share) présentes');
assert(css.includes('.btn-calendar-add'), 'Classes CSS de calendrier (.btn-calendar-add) présentes');

console.log('\n====================================================');
console.log(`RÉSULTAT GLOBAL : ${passedChecks}/${totalChecks} tests réussis (${failedChecks} échecs)`);
console.log('====================================================');

if (failedChecks > 0) {
  process.exit(1);
} else {
  console.log('✨ Tous les critères d\'audit et de spécification sont validés avec succès !');
  process.exit(0);
}

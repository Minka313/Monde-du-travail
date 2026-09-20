/**
 * TEST SUITE DÉTERMINISTE : ARCHITECTURE & INTÉGRATION FINANCE, BANQUE & ASSURANCE
 * Validation stricte 10 domaines, 27 fiches détaillées, zéro régression numérique
 */

const fs = require('fs');
const path = require('path');

// Simuler l'environnement de navigateur pour les scripts IIFE
const windowMock = {
  location: { href: 'http://localhost/frontend/job.html' },
  history: { replaceState: () => {} }
};
global.window = windowMock;

// 1. Charger OrientationDigitalData
const digitalDataCode = fs.readFileSync(path.join(__dirname, '../frontend/js/orientation-digital-data.js'), 'utf8');
eval(digitalDataCode);

// 2. Charger OrientationFinanceData
const financeDataCode = fs.readFileSync(path.join(__dirname, '../frontend/js/orientation-finance-data.js'), 'utf8');
eval(financeDataCode);

// 3. Charger OrientationData
const orientationDataCode = fs.readFileSync(path.join(__dirname, '../frontend/js/orientation-data.js'), 'utf8');
eval(orientationDataCode);

async function runTests() {
  console.log('================================================================');
  console.log('🧪 VÉRIFICATION ARCHITECTURALE : FINANCE, BANQUE & ASSURANCE');
  console.log('================================================================\n');

  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`  ✅ [PASS] ${message}`);
      passed++;
    } else {
      console.error(`  ❌ [FAIL] ${message}`);
      failed++;
    }
  }

  // --- SECTION 1 : OrientationFinanceData Direct Checks ---
  console.log('📁 Section 1: Module OrientationFinanceData');
  const financeData = window.OrientationFinanceData;
  assert(!!financeData, 'OrientationFinanceData est défini sur window');
  assert(Array.isArray(financeData.DOMAINS) && financeData.DOMAINS.length === 10, `OrientationFinanceData contient exactement 10 domaines d'excellence (trouvé: ${financeData.DOMAINS ? financeData.DOMAINS.length : 0})`);
  assert(Array.isArray(financeData.JOBS) && financeData.JOBS.length === 27, `OrientationFinanceData contient exactement 27 fiches métiers détaillées (trouvé: ${financeData.JOBS ? financeData.JOBS.length : 0})`);

  // Vérifier la présence des 10 domaines attendus
  const expectedDomainIds = [
    'banque-services-financiers',
    'finance-marche',
    'finance-entreprise',
    'comptabilite-audit',
    'assurance-gestion-risques',
    'actuariat',
    'patrimoine-investissement',
    'risque-conformite-controle',
    'operations-back-office',
    'finance-numerique-fintech'
  ];
  const actualDomainIds = financeData.DOMAINS.map(d => d.id);
  const allDomainsPresent = expectedDomainIds.every(id => actualDomainIds.includes(id));
  assert(allDomainsPresent, 'Les 10 identifiants de domaines correspondent exactement au cahier des charges');

  // Vérifier la structure de chaque fiche métier finance
  let allJobsValid = true;
  let allSalariesValid = true;
  let allSaviezVousValid = true;

  financeData.JOBS.forEach(job => {
    if (!job.id || !job.slug || !job.title || !job.domain || !job.domainId || !job.subdomain || job.familyId !== 'finance-fintech') {
      allJobsValid = false;
      console.error(`Fiche invalide: ${job.id}`);
    }
    if (!job.salaryRanges || !job.salaryRanges.france || !job.salaryRanges.senegal) {
      allSalariesValid = false;
      console.error(`Salaire multi-territoire manquant: ${job.id}`);
    }
    if (!job.saviezVous || !job.saviezVous.statut || !job.saviezVous.fait || !job.saviezVous.pourquoi || !job.saviezVous.a_retenir) {
      allSaviezVousValid = false;
      console.error(`Encart Le Saviez-vous incomplet: ${job.id}`);
    }
  });

  assert(allJobsValid, 'Les 27 fiches possèdent tous les champs requis (id, slug, title, domain, domainId, subdomain, familyId)');
  assert(allSalariesValid, 'Les 27 fiches possèdent des repères salariaux multi-territoriaux stricts (France + Sénégal/UEMOA)');
  assert(allSaviezVousValid, 'Les 27 fiches possèdent un encart éditorial "Le saviez-vous ?" complet (statut, fait, pourquoi, a_retenir)');

  // --- SECTION 2 : OrientationData Integration Checks ---
  console.log('\n📁 Section 2: Intégration dans OrientationData');
  const orientationData = window.OrientationData;
  assert(!!orientationData, 'OrientationData est accessible');

  const familyFinance = orientationData.getFamily('finance-fintech');
  assert(!!familyFinance, 'La famille finance-fintech est trouvée par getFamily()');
  assert(familyFinance.representativeJobs.length >= 5, `La famille finance propose ${familyFinance.representativeJobs.length} métiers représentatifs`);
  assert(familyFinance.subdomains.length >= 20, `La famille finance liste ${familyFinance.subdomains.length} sous-domaines et spécialisations`);

  const financeDomainsFromHelper = orientationData.getFamilyDomains('finance-fintech');
  assert(financeDomainsFromHelper.length === 10, `getFamilyDomains('finance-fintech') retourne 10 domaines`);

  const digitalDomainsFromHelper = orientationData.getFamilyDomains('numerique-ia');
  assert(digitalDomainsFromHelper.length === 13, `getFamilyDomains('numerique-ia') retourne 13 pôles intacts (zéro régression)`);

  const allJobs = await orientationData.getAllJobs();
  const digitalJobs = await orientationData.getJobsByFamily('numerique-ia');
  const financeJobs = await orientationData.getJobsByFamily('finance-fintech');

  assert(digitalJobs.length >= 100, `Catalogue numérique intact : ${digitalJobs.length} métiers numériques trouvés (attendu >= 100)`);
  assert(financeJobs.length >= 27, `Catalogue finance intégré : ${financeJobs.length} métiers finance trouvés (attendu >= 27)`);

  // Vérifier qu'aucun métier finance n'a fuité dans le catalogue numérique et vice-versa
  const leakedInDigital = digitalJobs.filter(j => j.familyId === 'finance-fintech');
  assert(leakedInDigital.length === 0, 'Étanchéité parfaite : 0 métier finance dans le catalogue numérique');

  const leakedInFinance = financeJobs.filter(j => j.sourceESD);
  assert(leakedInFinance.length === 0, 'Étanchéité parfaite : 0 métier numérique dans le catalogue finance');

  // Vérifier getJobsByFamily
  const jobsInFinanceFamily = await orientationData.getJobsByFamily('finance-fintech');
  assert(jobsInFinanceFamily.length >= 27, `getJobsByFamily('finance-fintech') retourne ${jobsInFinanceFamily.length} métiers`);

  // Vérifier le filtrage par domaine
  const banqueJobs = await orientationData.getJobsBySubdomain('finance-fintech', 'all', 'banque-services-financiers');
  assert(banqueJobs.length >= 4, `Filtrage par domaine 'banque-services-financiers' : ${banqueJobs.length} métiers trouvés`);

  const marcheJobs = await orientationData.getJobsBySubdomain('finance-fintech', 'all', 'finance-marche');
  assert(marcheJobs.length >= 1, `Filtrage par domaine 'finance-marche' : ${marcheJobs.length} métiers trouvés`);

  const assuranceJobs = await orientationData.getJobsBySubdomain('finance-fintech', 'all', 'assurance-gestion-risques');
  assert(assuranceJobs.length >= 5, `Filtrage par domaine 'assurance-gestion-risques' : ${assuranceJobs.length} métiers trouvés`);

  // --- SECTION 3 : Recherche Universelle ---
  console.log('\n📁 Section 3: Recherche Universelle');
  const searchActuaire = await orientationData.searchJobs('actuaire');
  assert(searchActuaire.length >= 2, `Recherche 'actuaire' : ${searchActuaire.length} métiers trouvés (ex: Actuaire, Actuaire Big Data)`);

  const searchTrader = await orientationData.searchJobs('trader');
  assert(searchTrader.some(j => j.slug === 'trader-operateur-marche'), `Recherche 'trader' trouve 'trader-operateur-marche'`);

  const searchSinistres = await orientationData.searchJobs('sinistres');
  assert(searchSinistres.length >= 2, `Recherche 'sinistres' : ${searchSinistres.length} métiers trouvés`);

  const searchCredit = await orientationData.searchJobs('crédit');
  assert(searchCredit.length >= 1, `Recherche 'crédit' : ${searchCredit.length} métiers trouvés`);

  // --- SECTION 4 : Moteur d'Affinités Boussole ---
  console.log('\n📁 Section 4: Moteur d\'Affinités (Boussole)');
  const affDonnees = await orientationData.getExplorationByAffinities(['donnees-chiffres']);
  assert(affDonnees.matchedFamilies.some(f => f.id === 'finance-fintech'), `Affinité 'donnees-chiffres' recommande 'finance-fintech'`);

  const affNegocier = await orientationData.getExplorationByAffinities(['negocier-convaincre']);
  assert(affNegocier.matchedFamilies.some(f => f.id === 'finance-fintech'), `Affinité 'negocier-convaincre' recommande 'finance-fintech'`);

  const affProteger = await orientationData.getExplorationByAffinities(['proteger-defendre']);
  assert(affProteger.matchedFamilies.some(f => f.id === 'finance-fintech'), `Affinité 'proteger-defendre' recommande 'finance-fintech'`);

  // --- RÉCAPITULATIF ---
  console.log('\n================================================================');
  console.log(`📊 BILAN DES TESTS : ${passed} passés, ${failed} échoués sur ${passed + failed}`);
  console.log('================================================================\n');

  if (failed > 0) {
    process.exit(1);
  }
}

runTests().catch(err => {
  console.error('Erreur non capturée dans la suite de tests:', err);
  process.exit(1);
});

/**
 * SUITE DE VALIDATION ARCHITECTURALE & FONCTIONNELLE
 * 🏥 SANTÉ, SOINS & PARAMÉDICAL (30 Métiers • 11 Domaines • Studyrama & Ordres)
 * 🧬 BIOLOGIE & CHIMIE (24 Métiers CIDJ • 15 Domaines • France Chimie & Forensique)
 *
 * Vérifie l'absence de régression, la non-duplication d'identifiants,
 * le double ancrage géographique France (€) / Sénégal (FCFA),
 * l'indexation de recherche universelle et les affinités de la Boussole.
 */

const fs = require('fs');
const path = require('path');

// 1. Initialiser le contexte global comme dans le navigateur
global.window = global;

console.log('\n========================================================================');
console.log('🧪 SUITE DE VALIDATION ARCHITECTURE : SANTÉ & BIOLOGIE-CHIMIE');
console.log('========================================================================\n');

try {
  // Chargement ordonné de l'ensemble de la cartographie
  global.OrientationDigitalData = require('../frontend/js/orientation-digital-data.js');
  global.OrientationFinanceData = require('../frontend/js/orientation-finance-data.js');
  global.OrientationAgriData = require('../frontend/js/orientation-agri-data.js');
  global.OrientationEnergyData = require('../frontend/js/orientation-energy-data.js');
  global.OrientationBtpData = require('../frontend/js/orientation-btp-data.js');
  global.OrientationLlshData = require('../frontend/js/orientation-llsh-data.js');
  global.OrientationIndustryData = require('../frontend/js/orientation-industry-data.js');
  global.OrientationGeosciencesData = require('../frontend/js/orientation-geosciences-data.js');
  global.OrientationHealthData = require('../frontend/js/orientation-health-data.js');
  global.OrientationBioChimieData = require('../frontend/js/orientation-biochimie-data.js');
  global.OrientationEducationData = require('../frontend/js/orientation-education-data.js');
  global.OrientationData = require('../frontend/js/orientation-data.js');

  console.log('✅ Tous les modules JS ont été chargés avec succès dans le runtime Node.js.\n');
} catch (err) {
  console.error('❌ Échec du chargement des modules :', err);
  process.exit(1);
}

const od = global.OrientationData;
const healthData = global.OrientationHealthData;
const bioData = global.OrientationBioChimieData;

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`  ✅ ${message}`);
    passedTests++;
  } else {
    console.error(`  ❌ ÉCHEC: ${message}`);
    process.exitCode = 1;
  }
}

async function runTests() {
  // -------------------------------------------------------------------------
  // TEST GROUP 1 : Intégrité du module OrientationHealthData
  // -------------------------------------------------------------------------
  console.log('--- TEST GROUP 1 : Intégrité du module OrientationHealthData (Santé & Soins) ---');
  assert(healthData !== undefined, "OrientationHealthData est disponible globalement");
  assert(typeof healthData.getDomains === 'function', "healthData.getDomains() est une fonction");
  assert(typeof healthData.getJobs === 'function', "healthData.getJobs() est une fonction");
  assert(healthData.DOMAINS.length === 11, `Exactement 11 domaines santé (actuel: ${healthData.DOMAINS.length})`);
  assert(healthData.JOBS.length === 30, `Exactement 30 fiches métiers santé (actuel: ${healthData.JOBS.length})`);

  // Vérifier la conformité de chaque fiche santé
  const validHealthDomainIds = new Set(healthData.DOMAINS.map(d => d.id));
  let validHealthJobsCount = 0;
  let dualSalariesHealthCount = 0;
  let dualStudiesHealthCount = 0;

  healthData.JOBS.forEach(j => {
    const hasValidDomain = validHealthDomainIds.has(j.domainId);
    const hasDualSalary = j.salary && j.salary.includes('🇫🇷') && j.salary.includes('🇸🇳');
    const hasDaily = j.daily && (j.daily.morning || j.daily.afternoon);
    const hasSkills = j.skills && j.skills.technical && (j.skills.human || j.skills.soft);
    const hasSaviezVous = j.saviezVous && j.saviezVous.fait;
    const hasSources = j.sources && j.sources.length >= 1;

    if (hasValidDomain && hasDaily && hasSkills && hasSaviezVous && hasSources) validHealthJobsCount++;
    if (hasDualSalary) dualSalariesHealthCount++;
    if (j.studies && j.studies.pathway && j.studies.schools) dualStudiesHealthCount++;
  });

  assert(validHealthJobsCount === 30, `30/30 fiches santé conformes au standard riche à 6 volets (actuel: ${validHealthJobsCount})`);
  assert(dualSalariesHealthCount === 30, `30/30 fiches santé avec salaires bivalents France (€) / Sénégal (FCFA) (actuel: ${dualSalariesHealthCount})`);
  assert(dualStudiesHealthCount === 30, `30/30 fiches santé avec parcours et écoles France/Afrique (actuel: ${dualStudiesHealthCount})`);

  // -------------------------------------------------------------------------
  // TEST GROUP 2 : Intégrité du module OrientationBioChimieData (CIDJ)
  // -------------------------------------------------------------------------
  console.log('\n--- TEST GROUP 2 : Intégrité du module OrientationBioChimieData (CIDJ) ---');
  assert(bioData !== undefined, "OrientationBioChimieData est disponible globalement");
  assert(typeof bioData.getDomains === 'function', "bioData.getDomains() est une fonction");
  assert(typeof bioData.getJobs === 'function', "bioData.getJobs() est une fonction");
  assert(bioData.DOMAINS.length === 15, `Exactement 15 domaines biologie & chimie (actuel: ${bioData.DOMAINS.length})`);
  assert(bioData.JOBS.length === 24, `Exactement 24 fiches métiers CIDJ (actuel: ${bioData.JOBS.length})`);

  const validBioDomainIds = new Set(bioData.DOMAINS.map(d => d.id));
  let validBioJobsCount = 0;
  let cidjUrlCount = 0;
  let dualSalariesBioCount = 0;

  bioData.JOBS.forEach(j => {
    const hasValidDomain = validBioDomainIds.has(j.domainId);
    const hasCidjUrl = typeof j.cidjUrl === 'string' && j.cidjUrl.includes('cidj.com');
    const hasDualSalary = j.salary && j.salary.includes('🇫🇷') && j.salary.includes('🇸🇳');
    const hasSaviezVous = j.saviezVous && j.saviezVous.fait;

    if (hasValidDomain && hasSaviezVous) validBioJobsCount++;
    if (hasCidjUrl) cidjUrlCount++;
    if (hasDualSalary) dualSalariesBioCount++;
  });

  assert(validBioJobsCount === 24, `24/24 fiches biochimie conformes au standard riche (actuel: ${validBioJobsCount})`);
  assert(cidjUrlCount === 24, `24/24 fiches biochimie rattachées à leur URL CIDJ officielle (actuel: ${cidjUrlCount})`);
  assert(dualSalariesBioCount === 24, `24/24 fiches biochimie avec salaires bivalents France (€) / Sénégal (FCFA) (actuel: ${dualSalariesBioCount})`);

  // -------------------------------------------------------------------------
  // TEST GROUP 3 : Intégration globale dans OrientationData (Familles & Aliases)
  // -------------------------------------------------------------------------
  console.log('\n--- TEST GROUP 3 : Intégration dans OrientationData (Familles & Aliases) ---');
  const families = od.getFamilies();
  assert(families.length === 23, `Exactement 23 grandes familles préservées (actuel: ${families.length})`);

  // Famille 14 : Santé, Soins & Paramédical
  const famHealth = od.getFamily('sante-soins-paramedical');
  const famHealthAlias = od.getFamily('sante-biomedical');
  assert(famHealth !== null, "La famille 'sante-soins-paramedical' existe");
  assert(famHealth.order === 14, `Ordre de la famille Santé est 14 (actuel: ${famHealth.order})`);
  assert(famHealthAlias !== null && famHealthAlias.id === famHealth.id, "Alias 'sante-biomedical' résout bien vers la famille Santé");
  assert(famHealth.subdomains.length === 11, `La famille Santé compte 11 sous-domaines officiels (actuel: ${famHealth.subdomains.length})`);

  const healthDomainsList = od.getFamilyDomains('sante-soins-paramedical');
  const healthDomainsListAlias = od.getFamilyDomains('sante-biomedical');
  assert(healthDomainsList.length === 11, `getFamilyDomains('sante-soins-paramedical') renvoie 11 domaines (actuel: ${healthDomainsList.length})`);
  assert(healthDomainsListAlias.length === 11, `getFamilyDomains('sante-biomedical') renvoie 11 domaines par alias (actuel: ${healthDomainsListAlias.length})`);

  // Famille 16 : Biologie & Chimie
  const famBio = od.getFamily('biologie-chimie');
  const famBioAlias = od.getFamily('sciences-biotech');
  assert(famBio !== null, "La famille 'biologie-chimie' existe");
  assert(famBio.order === 16, `Ordre de la famille Biologie-Chimie est 16 (actuel: ${famBio.order})`);
  assert(famBioAlias !== null && famBioAlias.id === famBio.id, "Alias 'sciences-biotech' résout bien vers la famille Biologie-Chimie");
  assert(famBio.subdomains.length === 15, `La famille Biologie-Chimie compte 15 sous-domaines officiels (actuel: ${famBio.subdomains.length})`);

  const bioDomainsList = od.getFamilyDomains('biologie-chimie');
  const bioDomainsListAlias = od.getFamilyDomains('sciences-biotech');
  assert(bioDomainsList.length === 15, `getFamilyDomains('biologie-chimie') renvoie 15 domaines (actuel: ${bioDomainsList.length})`);
  assert(bioDomainsListAlias.length === 15, `getFamilyDomains('sciences-biotech') renvoie 15 domaines par alias (actuel: ${bioDomainsListAlias.length})`);

  // -------------------------------------------------------------------------
  // TEST GROUP 4 : Volumétrie globale & Règle Stricte Zéro Doublon
  // -------------------------------------------------------------------------
  console.log('\n--- TEST GROUP 4 : Volumétrie globale & Règle Stricte Zéro Doublon ---');
  const allJobs = await od.getAllJobs();
  console.log(`  📊 Total catalogue unifié : ${allJobs.length} métiers`);
  assert(allJobs.length >= 410, `Le catalogue total compte au moins 410 métiers (actuel: ${allJobs.length})`);
  assert(allJobs.length === 431, `Le catalogue unifié atteint exactement 431 métiers (410 précédents + 21 Éducation) (actuel: ${allJobs.length})`);

  const seenIds = new Set();
  const duplicateIds = [];
  const seenSlugs = new Set();
  const duplicateSlugs = [];

  allJobs.forEach(job => {
    if (job.id) {
      if (seenIds.has(job.id)) duplicateIds.push(job.id);
      seenIds.add(job.id);
    }
    if (job.slug) {
      if (seenSlugs.has(job.slug)) duplicateSlugs.push(job.slug);
      seenSlugs.add(job.slug);
    }
  });

  assert(duplicateIds.length === 0, `0 doublon d'ID sur toute la plateforme (doublons: ${duplicateIds.join(', ') || 'aucun'})`);
  assert(duplicateSlugs.length === 0, `0 doublon de slug sur toute la plateforme (doublons: ${duplicateSlugs.join(', ') || 'aucun'})`);

  // Vérification de la non-duplication des profils existants
  const psychologue = allJobs.find(j => j.id === 'psychologue-clinicien');
  assert(psychologue !== undefined && psychologue.familyId === 'lettres-langues-sciences-humaines', "psychologue-clinicien est conservé dans LLSH sans duplication");

  const ingBiomedical = allJobs.find(j => j.id === 'ingenieur-biomedical');
  assert(ingBiomedical !== undefined, "ingenieur-biomedical est préservé sans conflit");

  const bioMarin = allJobs.find(j => j.id === 'biologiste-marin');
  assert(bioMarin !== undefined && (bioMarin.familyId === 'agriculture-agritech' || bioMarin.familyId === 'peche-maritime'), "biologiste-marin est conservé dans Agri/Pêche sans conflit");

  const techLaboGeo = allJobs.find(j => j.id === 'technicien-laboratoire-geosciences');
  const techLaboCIDJ = allJobs.find(j => j.id === 'technicien-laboratoire');
  assert(techLaboGeo !== undefined && techLaboCIDJ !== undefined, "technicien-laboratoire (CIDJ) et technicien-laboratoire-geosciences coexistent sans conflit");

  // -------------------------------------------------------------------------
  // TEST GROUP 5 : Filtrage par Famille & Catalogue Spécifique
  // -------------------------------------------------------------------------
  console.log('\n--- TEST GROUP 5 : Filtrage par Famille & Catalogue Spécifique ---');
  const healthJobs = await od.getJobsByFamily('sante-soins-paramedical');
  assert(healthJobs.length === 31, `getJobsByFamily('sante-soins-paramedical') renvoie exactement 31 fiches (30 Santé + 1 Ingénieur biomédical) (actuel: ${healthJobs.length})`);

  const bioJobs = await od.getJobsByFamily('biologie-chimie');
  assert(bioJobs.length === 24, `getJobsByFamily('biologie-chimie') renvoie exactement 24 fiches CIDJ (actuel: ${bioJobs.length})`);

  // -------------------------------------------------------------------------
  // TEST GROUP 6 : Moteur de Recherche Universel (Keywords, Écoles, Formations)
  // -------------------------------------------------------------------------
  console.log('\n--- TEST GROUP 6 : Moteur de Recherche Universel ---');
  const searchChirurgien = await od.searchJobs('chirurgien');
  assert(searchChirurgien.length >= 1, `Recherche 'chirurgien' trouve des résultats (trouvé: ${searchChirurgien.length})`);

  const searchMicrobio = await od.searchJobs('microbiologiste');
  assert(searchMicrobio.length >= 1, `Recherche 'microbiologiste' trouve la fiche (trouvé: ${searchMicrobio.length})`);

  const searchCIDJ = await od.searchJobs('cidj');
  assert(searchCIDJ.length >= 24, `Recherche 'cidj' indexe les 24 fiches certifiées (trouvé: ${searchCIDJ.length})`);

  const searchSterilisation = await od.searchJobs('stérilisation');
  assert(searchSterilisation.length >= 1, `Recherche 'stérilisation' trouve agent-sterilisation (trouvé: ${searchSterilisation.length})`);

  const searchParfumeur = await od.searchJobs('parfumeur');
  assert(searchParfumeur.length >= 1, `Recherche 'parfumeur' trouve le Nez (trouvé: ${searchParfumeur.length})`);

  const searchPasteur = await od.searchJobs('Institut Pasteur');
  assert(searchPasteur.length >= 1, `Recherche 'Institut Pasteur' trouve les fiches associées (trouvé: ${searchPasteur.length})`);

  const searchIsipca = await od.searchJobs('ISIPCA');
  assert(searchIsipca.length >= 1, `Recherche 'ISIPCA' trouve parfumeur/aromaticien (trouvé: ${searchIsipca.length})`);

  // -------------------------------------------------------------------------
  // TEST GROUP 7 : Affinités de la Boussole & Recommandations
  // -------------------------------------------------------------------------
  console.log('\n--- TEST GROUP 7 : Affinités de la Boussole & Recommandations ---');
  const affinities = od.getAffinities();
  const affIds = new Set(affinities.map(a => a.id));

  assert(affIds.has('soigner-aider'), "Affinité 'soigner-aider' présente");
  assert(affIds.has('urgences-secours'), "Affinité 'urgences-secours' présente");
  assert(affIds.has('comprendre-corps-humain'), "Affinité 'comprendre-corps-humain' présente");
  assert(affIds.has('observer-microscope'), "Affinité 'observer-microscope' présente");
  assert(affIds.has('experiences-laboratoire'), "Affinité 'experiences-laboratoire' présente");
  assert(affIds.has('creer-produits-chimie'), "Affinité 'creer-produits-chimie' présente");
  assert(affIds.has('nature-plantes-botanique'), "Affinité 'nature-plantes-botanique' présente");
  assert(affIds.has('police-scientifique-enquete'), "Affinité 'police-scientifique-enquete' présente");

  const expPolice = await od.getExplorationByAffinities(['police-scientifique-enquete']);
  assert(expPolice.matchedJobs.some(j => j.id === 'technicien-police-scientifique'), "Exploration par affinité police-scientifique trouve le technicien PTS");

  const expSoigner = await od.getExplorationByAffinities(['soigner-aider']);
  assert(expSoigner.matchedJobs.some(j => j.id === 'medecin-generaliste'), "Exploration par affinité soigner-aider trouve le médecin généraliste");

  // -------------------------------------------------------------------------
  // TEST GROUP 8 : Inclusion des scripts dans job.html
  // -------------------------------------------------------------------------
  console.log('\n--- TEST GROUP 8 : Inclusion des scripts dans job.html ---');
  const jobHtmlPath = path.join(__dirname, '..', 'frontend', 'job.html');
  const jobHtmlContent = fs.readFileSync(jobHtmlPath, 'utf8');

  assert(jobHtmlContent.includes('orientation-health-data.js'), "job.html inclut orientation-health-data.js");
  assert(jobHtmlContent.includes('orientation-biochimie-data.js'), "job.html inclut orientation-biochimie-data.js");

  // -------------------------------------------------------------------------
  // TEST GROUP 9 : Accessibilité & Navigation Intégrale Santé (Zéro État Vide)
  // -------------------------------------------------------------------------
  console.log('\n--- TEST GROUP 9 : Accessibilité & Navigation Intégrale Santé (Zéro État Vide) ---');
  const healthDomains = od.getFamilyDomains('sante-soins-paramedical');
  assert(healthDomains.length === 11, `La famille santé possède bien 11 domaines (trouvé: ${healthDomains.length})`);

  // Vérification de l'ingénieur biomédical rattaché au domaine 11
  const bioEng = (await od.getAllJobs()).find(j => j.id === 'ingenieur-biomedical');
  assert(Boolean(bioEng), "Ingénieur biomédical présent dans le catalogue global");
  assert(bioEng && bioEng.domainId === 'technologies-biomedicales', "Ingénieur biomédical rattaché au domaine 'technologies-biomedicales'");
  assert(bioEng && bioEng.subdomain === 'Dispositifs médicaux', "Ingénieur biomédical sous-domaine 'Dispositifs médicaux'");

  // Test de chaque domaine santé (aucun ne doit retourner 0 métiers)
  for (const dom of healthDomains) {
    const jobsInDom = await od.getJobsBySubdomain('sante-soins-paramedical', 'all', dom.id);
    assert(jobsInDom.length > 0, `Domaine [${dom.id}] ${dom.name} retourne > 0 métiers (trouvé: ${jobsInDom.length})`);

    // Test de chaque sous-domaine sous ce domaine
    for (const sub of (dom.subdomains || [])) {
      const jobsInSub = await od.getJobsBySubdomain('sante-soins-paramedical', sub, dom.id);
      assert(jobsInSub.length > 0, `Sous-domaine [${sub}] sous [${dom.id}] retourne > 0 métiers (trouvé: ${jobsInSub.length})`);
    }
  }

  // Test de chaque pilule de sous-domaine au niveau famille (selectedDomain = 'all')
  const famHealthPills = od.getFamilies().find(f => f.id === 'sante-soins-paramedical');
  assert(famHealthPills && famHealthPills.subdomains && famHealthPills.subdomains.length > 0, "La famille santé a une liste de sous-domaines définie");
  for (const subPill of famHealthPills.subdomains) {
    const jobsForPill = await od.getJobsBySubdomain('sante-soins-paramedical', subPill, 'all');
    assert(jobsForPill.length > 0, `Pilule sous-domaine [${subPill}] au niveau famille retourne > 0 métiers (trouvé: ${jobsForPill.length})`);
  }

  // Vérification de l'accès direct aux métiers santé par slug (getJobBySlug)
  const sampleSlugs = ['medecin-generaliste', 'chirurgien', 'infirmier-diplome-etat', 'sage-femme', 'pharmacien-officine', 'ingenieur-biomedical'];
  for (const s of sampleSlugs) {
    const j = await od.getJobBySlug(s);
    assert(Boolean(j), `Accès direct au métier par slug réussi : '${s}'`);
  }

  // -------------------------------------------------------------------------
  // BILAN FINAL
  // -------------------------------------------------------------------------
  console.log('\n========================================================================');
  console.log(`🏁 BILAN FINAL : ${passedTests} / ${totalTests} tests réussis (${Math.round((passedTests / totalTests) * 100)}%)`);
  console.log('========================================================================\n');

  if (passedTests === totalTests) {
    console.log('🎉 TOUS LES TESTS SONT AU VERT ! Intégration Santé & Biologie-Chimie validée à 100%.\n');
  } else {
    console.error('❌ DES ANOMALIES ONT ÉTÉ DÉTECTÉES. Corrigez les échecs ci-dessus.\n');
    process.exit(1);
  }
}

runTests();

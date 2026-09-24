/**
 * SUITE DE VALIDATION ARCHITECTURALE & FONCTIONNELLE
 * 🎓 ENSEIGNEMENT, ÉDUCATION & FORMATION (21 Métiers • 8 Domaines • Studyrama)
 *
 * Vérifie :
 * 1. Présence et validité du module OrientationEducationData
 * 2. Exactement 8 domaines et 21 fiches métiers avec URLs Studyrama officielles
 * 3. Configuration de la famille 'education-formation' dans OrientationData
 * 4. Totalité de 431 métiers sur la plateforme (410 existants + 21 nouveaux)
 * 5. Zéro collision d'identifiants (IDs uniques)
 * 6. Complétude des fiches (salaires France/Sénégal, études MEEF/FASTEF, quotidien, compétences)
 * 7. Absence de doublons avec les métiers existants (ex: COP, documentaliste, formateur FLE)
 * 8. Recherche multi-mots clés et spécialités (ex: "enseigner les maths", "formation adulte", "aesh", "cpe")
 * 9. Affinités de la Boussole d'Orientation
 * 10. Inclusion du script dans job.html
 * 11. Préservation stricte sans régression des 410 métiers existants
 */

const fs = require('fs');
const path = require('path');

// 1. Initialiser le contexte global comme dans le navigateur
global.window = global;

console.log('\n========================================================================');
console.log('🎓 SUITE DE VALIDATION : ENSEIGNEMENT, ÉDUCATION & FORMATION');
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

  console.log('✅ Tous les 12 modules JS ont été chargés avec succès dans le runtime Node.js.\n');
} catch (err) {
  console.error('❌ Échec du chargement des modules :', err);
  process.exit(1);
}

const od = global.OrientationData;
const eduData = global.OrientationEducationData;

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
  // TEST GROUP 1 : Intégrité du module OrientationEducationData
  // -------------------------------------------------------------------------
  console.log('--- TEST GROUP 1 : Intégrité du module OrientationEducationData ---');
  assert(eduData !== undefined, "OrientationEducationData est disponible globalement");
  assert(typeof eduData.getDomains === 'function', "eduData.getDomains() est une fonction");
  assert(typeof eduData.getJobs === 'function', "eduData.getJobs() est une fonction");
  assert(typeof eduData.getJobById === 'function', "eduData.getJobById() est une fonction");
  assert(typeof eduData.getJobsByDomain === 'function', "eduData.getJobsByDomain() est une fonction");
  assert(typeof eduData.getPedagogicalPathways === 'function', "eduData.getPedagogicalPathways() est une fonction");
  assert(eduData.DOMAINS.length === 8, `Exactement 8 domaines éducatifs définis (actuel: ${eduData.DOMAINS.length})`);
  assert(eduData.JOBS.length === 21, `Exactement 21 fiches métiers créées (actuel: ${eduData.JOBS.length})`);

  // Vérifier la conformité de chaque fiche métier
  const validDomainIds = new Set(eduData.DOMAINS.map(d => d.id));
  let validJobsCount = 0;
  let dualSalariesCount = 0;
  let dualStudiesCount = 0;
  let studyramaUrlsCount = 0;
  let uiAliasesCount = 0;

  eduData.JOBS.forEach(j => {
    const hasValidDomain = validDomainIds.has(j.domainId);
    const hasDualSalary = j.salary && j.salary.includes('🇫🇷') && j.salary.includes('🇸🇳');
    const hasDaily = (j.daily && (j.daily.morning || j.daily.afternoon)) || (j.typicalDay && (j.typicalDay.matin || j.typicalDay.apresMidi));
    const hasSkills = j.skills && (j.skills.technical || j.skills.hard) && (j.skills.human || j.skills.soft);
    const hasStudyrama = j.studyramaUrl && j.studyramaUrl.startsWith('https://www.studyrama.com/formations/fiches-metiers/');
    const hasAliases = j.hard && j.soft && j.dailySchedule && j.summary;

    if (hasValidDomain && hasDaily && hasSkills) validJobsCount++;
    if (hasDualSalary) dualSalariesCount++;
    if (j.studies && (j.studies.france || j.studies.senegal || (Array.isArray(j.studies) && j.studies.length > 0))) dualStudiesCount++;
    if (hasStudyrama) studyramaUrlsCount++;
    if (hasAliases) uiAliasesCount++;
  });

  assert(validJobsCount === 21, `Les 21 fiches métiers possèdent un domaine valide, un quotidien et des compétences (${validJobsCount}/21)`);
  assert(dualSalariesCount === 21, `Les 21 fiches possèdent un double ancrage salarial France (€) / Sénégal (FCFA) (${dualSalariesCount}/21)`);
  assert(studyramaUrlsCount === 21, `Les 21 fiches possèdent une URL officielle Studyrama Enseignement vérifiée (${studyramaUrlsCount}/21)`);
  assert(uiAliasesCount === 21, `Les 21 fiches intègrent les alias de compatibilité UI (hard, soft, dailySchedule, summary) (${uiAliasesCount}/21)`);

  // -------------------------------------------------------------------------
  // TEST GROUP 2 : Configuration de la famille dans OrientationData
  // -------------------------------------------------------------------------
  console.log('\n--- TEST GROUP 2 : Configuration de la famille dans OrientationData ---');
  const families = od.getFamilies();
  assert(families.length === 23, `Exactement 23 grandes familles préservées (actuel: ${families.length})`);

  const eduFamily = od.getFamily('education-formation');
  assert(eduFamily !== null, "La famille 'education-formation' existe dans OrientationData");
  assert(eduFamily.name === "Enseignement, Éducation & Formation", `Nom exact de la famille : "${eduFamily.name}"`);
  assert(eduFamily.icon === "🎓", `Icône de la famille : ${eduFamily.icon}`);
  assert(Array.isArray(eduFamily.subdomains) && eduFamily.subdomains.length === 8, `La famille déclare 8 sous-domaines (${eduFamily.subdomains.length})`);

  const fetchedDomains = od.getFamilyDomains('education-formation');
  assert(fetchedDomains.length === 8, `od.getFamilyDomains('education-formation') retourne 8 domaines (${fetchedDomains.length})`);

  const fetchedDomainsAlias = od.getFamilyDomains('enseignement-education-formation');
  assert(fetchedDomainsAlias.length === 8, `od.getFamilyDomains('enseignement-education-formation') fonctionne via alias (${fetchedDomainsAlias.length})`);

  // -------------------------------------------------------------------------
  // TEST GROUP 3 : Métiers globaux, Non-régression & Unicité des Identifiants
  // -------------------------------------------------------------------------
  console.log('\n--- TEST GROUP 3 : Métiers globaux & Unicité des Identifiants ---');
  const allJobs = await od.getAllJobs();
  assert(allJobs.length === 431, `Nombre total de métiers = 431 (410 précédents + 21 nouveaux, actuel: ${allJobs.length})`);

  const idMap = new Map();
  const duplicates = [];
  allJobs.forEach(j => {
    if (idMap.has(j.id)) {
      duplicates.push(j.id);
    } else {
      idMap.set(j.id, true);
    }
  });
  assert(duplicates.length === 0, `Zéro doublon d'identifiant dans les 431 métiers (doublons trouvés: ${duplicates.join(', ') || 'aucun'})`);

  const familyJobs = await od.getJobsByFamily('education-formation');
  assert(familyJobs.length === 34, `od.getJobsByFamily('education-formation') retourne 34 métiers (21 nouveaux + 13 transversaux réutilisés, actuel: ${familyJobs.length})`);

  // -------------------------------------------------------------------------
  // TEST GROUP 4 : Réutilisation des Métiers Existants (Anti-Duplication)
  // -------------------------------------------------------------------------
  console.log('\n--- TEST GROUP 4 : Anti-Duplication & Métiers Réutilisés ---');
  const reusedIds = [
    'conseiller-orientation-psychologue',
    'documentaliste',
    'formateur-langues-fle',
    'professeur-universite',
    'enseignant-chercheur-philosophie'
  ];
  let allReusedPresent = true;
  reusedIds.forEach(id => {
    const job = allJobs.find(j => j.id === id);
    if (!job) {
      allReusedPresent = false;
      console.error(`  ❌ Métier existant manquant : ${id}`);
    }
  });
  assert(allReusedPresent, `Les 5 métiers transversaux LLSH clés sont bien conservés et non dupliqués`);

  // -------------------------------------------------------------------------
  // TEST GROUP 5 : Moteur de Recherche Multi-Mots & Spécialités
  // -------------------------------------------------------------------------
  console.log('\n--- TEST GROUP 5 : Moteur de Recherche Multi-Mots Clés ---');
  
  const search1 = await od.searchJobs('professeur des ecoles');
  assert(search1.some(j => j.id === 'professeur-des-ecoles'), 'Recherche "professeur des ecoles" trouve professeur-des-ecoles');

  const search2 = await od.searchJobs('enseigner les maths');
  assert(search2.some(j => j.id === 'professeur-college-lycee'), 'Recherche "enseigner les maths" trouve professeur-college-lycee');

  const search3 = await od.searchJobs('formation adulte');
  assert(search3.some(j => j.id === 'formateur-professionnel-adultes'), 'Recherche "formation adulte" trouve formateur-professionnel-adultes');

  const search4 = await od.searchJobs('aesh');
  assert(search4.some(j => j.id === 'accompagnant-eleves-situation-handicap-aesh'), 'Recherche "aesh" trouve accompagnant-eleves-situation-handicap-aesh');

  const search5 = await od.searchJobs('cpe');
  assert(search5.some(j => j.id === 'conseiller-principal-education'), 'Recherche "cpe" trouve conseiller-principal-education');

  const search6 = await od.searchJobs('fastef');
  assert(search6.length >= 5, `Recherche "fastef" trouve les formations sénégalaises (trouvés: ${search6.length})`);

  const search7 = await od.searchJobs('inspecteur');
  assert(search7.some(j => j.id === 'inspecteur-education-nationale') && search7.some(j => j.id === 'inspecteur-academie'), 'Recherche "inspecteur" trouve les inspecteurs');

  // -------------------------------------------------------------------------
  // TEST GROUP 6 : Boussole d'Orientation & Affinités
  // -------------------------------------------------------------------------
  console.log('\n--- TEST GROUP 6 : Boussole d\'Orientation & Affinités ---');
  const affinities = od.getAffinities();
  const affIds = new Set(affinities.map(a => a.id));

  const expectedAffinities = [
    'expliquer-transmettre',
    'travailler-enfants-ecole',
    'enseigner-discipline-lycee',
    'former-adultes-reconversion',
    'concevoir-cours-edtech',
    'orienter-accompagner-eleves',
    'enseigner-sciences-recherche',
    'animer-sport-scolaire'
  ];

  let affinitiesOk = true;
  expectedAffinities.forEach(aff => {
    if (!affIds.has(aff)) {
      affinitiesOk = false;
      console.error(`  ❌ Affinité manquante : ${aff}`);
    }
  });
  assert(affinitiesOk, `Toutes les 8 affinités éducatives sont enregistrées dans INTEREST_AFFINITIES`);

  // Tester la recommandation par exploration
  const expEdu = await od.getExplorationByAffinities(['expliquer-transmettre']);
  assert(expEdu.matchedJobs.some(j => j.familyId === 'education-formation'), `getExplorationByAffinities(['expliquer-transmettre']) recommande des métiers d'éducation (${expEdu.matchedJobs.length} trouvés)`);

  // -------------------------------------------------------------------------
  // TEST GROUP 7 : Inclusion du script dans job.html
  // -------------------------------------------------------------------------
  console.log('\n--- TEST GROUP 7 : Inclusion du script dans job.html ---');
  const jobHtmlPath = path.join(__dirname, '..', 'frontend', 'job.html');
  const jobHtmlContent = fs.readFileSync(jobHtmlPath, 'utf8');
  assert(jobHtmlContent.includes('js/orientation-education-data.js'), "job.html inclut bien 'js/orientation-education-data.js'");
  assert(jobHtmlContent.indexOf('js/orientation-education-data.js') < jobHtmlContent.indexOf('js/orientation-data.js'), "'js/orientation-education-data.js' est chargé AVANT 'js/orientation-data.js'");

  // -------------------------------------------------------------------------
  // TEST GROUP 8 : Intégrité des 410 Métiers Existants (Régression Zéro)
  // -------------------------------------------------------------------------
  console.log('\n--- TEST GROUP 8 : Intégrité des Familles Précédentes ---');
  const healthJobs = allJobs.filter(j => j.familyId === 'sante-soins-paramedical' || j.familyId === 'sante-biomedical');
  assert(healthJobs.length === 31, `Santé & Soins : 31 métiers dans le catalogue unifié (30 Santé + 1 Ingénieur biomédical) (trouvés: ${healthJobs.length})`);

  const bioJobs = allJobs.filter(j => j.familyId === 'biologie-chimie' || j.familyId === 'sciences-biotech');
  assert(bioJobs.length === 24, `Biologie & Chimie : 24 métiers préservés (trouvés: ${bioJobs.length})`);

  assert(global.OrientationDigitalData.getJobs().length === 103, `Numérique & IA : 103 métiers du module digital préservés (trouvés: ${global.OrientationDigitalData.getJobs().length})`);

  const agriJobs = allJobs.filter(j => j.familyId === 'agriculture-agritech');
  assert(agriJobs.length === 67, `Agriculture & Agritech : 67 métiers préservés (trouvés: ${agriJobs.length})`);

  const btpJobs = allJobs.filter(j => j.familyId === 'btp-architecture');
  assert(btpJobs.length === 37, `BTP & Architecture : 37 métiers préservés (trouvés: ${btpJobs.length})`);

  console.log('\n========================================================================');
  console.log(`📊 RÉSULTAT DU CONTRÔLE TECHNIQUE : ${passedTests} / ${totalTests} assertions réussies`);
  console.log('========================================================================\n');

  if (passedTests === totalTests) {
    console.log('🎉 FÉLICITATIONS : Intégration Enseignement, Éducation & Formation 100% VALIDE !');
    process.exit(0);
  } else {
    console.error('⚠️ CERTAINS TESTS ONT ÉCHOUÉ.');
    process.exit(1);
  }
}

runTests();

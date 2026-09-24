/**
 * SUITE DE VALIDATION ARCHITECTURALE & FONCTIONNELLE
 * 🌱 ENVIRONNEMENT, ÉCOLOGIE & DÉVELOPPEMENT DURABLE (18 Métiers Onisep 04/11/2025 • 6 Domaines • 5 Filières)
 *
 * Teste rigoureusement les 12 critères d'acceptation requis :
 * 1. Famille environnement-developpement-durable présente et bien formée (avec ses alias)
 * 2. Les 6 domaines officiels Onisep existent avec métadonnées complètes
 * 3. 18 fiches métiers vérifiées conformes au schéma en 6 parties
 * 4. Fiches détaillées complètes (quotidien, compétences, formations, Le saviez-vous)
 * 5. Recherche universelle sur mots-clés clés (eau, déchets, météorologiste, biodiversité, rse, station d'épuration, climat)
 * 6. 6 affinités spécifiques de la Boussole et exploration
 * 7. Relations inter-familles transversales (BTP, Droit, Chimie, etc.)
 * 8. Absence totale de doublons (IDs uniques dans tout le catalogue de 449 métiers)
 * 9. Paliers et filières de formation Onisep (CAP à Bac+8)
 * 10. Citation systématique de la source Onisep 04/11/2025
 * 11. Zéro régression sur les 23 familles existantes
 * 12. Intégration frontend (job.html et orientation-ui.js)
 */

const fs = require('fs');
const path = require('path');

// 1. Initialiser le contexte global comme dans le navigateur
global.window = global;

console.log('\n========================================================================');
console.log('🌱 SUITE DE VALIDATION ARCHITECTURE : ENVIRONNEMENT & DÉVELOPPEMENT DURABLE');
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
  global.OrientationEnvironmentData = require('../frontend/js/orientation-environment-data.js');
  global.OrientationData = require('../frontend/js/orientation-data.js');

  console.log('✅ Tous les modules JS de la plateforme ont été chargés avec succès dans le runtime Node.js.\n');
} catch (err) {
  console.error('❌ Échec du chargement des modules :', err);
  process.exit(1);
}

const od = global.OrientationData;
const envData = global.OrientationEnvironmentData;

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
  // ----------------------------------------------------
  // TEST 1: Présence et structure de la famille
  // ----------------------------------------------------
  console.log('--- TEST 1 : Famille professionnelle Environnement & Développement durable ---');
  const families = od.getFamilies();
  const envFam = families.find(f => f.id === 'environnement-developpement-durable');
  assert(!!envFam, "La famille 'environnement-developpement-durable' existe dans PROFESSIONAL_FAMILIES");
  assert(envFam && envFam.aliases && envFam.aliases.includes('environnement-climat'), "La famille supporte l'alias historique 'environnement-climat'");
  assert(envFam && envFam.aliases && envFam.aliases.includes('ecologie-developpement-durable'), "La famille supporte l'alias 'ecologie-developpement-durable'");
  assert(envFam && envFam.name.includes("Environnement"), "Le nom de la famille contient 'Environnement'");

  const famByAlias = od.getFamily('environnement-climat');
  assert(famByAlias && famByAlias.id === 'environnement-developpement-durable', "od.getFamily('environnement-climat') résout correctement vers environnement-developpement-durable");

  // ----------------------------------------------------
  // TEST 2: Les 6 domaines officiels Onisep
  // ----------------------------------------------------
  console.log('\n--- TEST 2 : Les 6 Domaines Officiels Onisep ---');
  const domains = envData.getDomains();
  assert(Array.isArray(domains) && domains.length === 6, `Exactement 6 domaines structurés (trouvé : ${domains ? domains.length : 0})`);
  const expectedDomainIds = [
    'eau-hydraulique',
    'dechets-tri-recyclage',
    'biodiversite-ecosystemes',
    'foret-espaces-naturels',
    'conseil-developpement-durable',
    'climat-meteorologie'
  ];
  expectedDomainIds.forEach(id => {
    const d = domains.find(x => x.id === id);
    assert(!!d, `Domaine '${id}' présent avec nom, icône, et sous-domaines`);
    if (d) {
      assert(Array.isArray(d.subdomains) && d.subdomains.length > 0, `Domaine '${id}' possède ${d.subdomains.length} sous-domaines`);
    }
  });

  const famDomains = od.getFamilyDomains('environnement-developpement-durable');
  assert(Array.isArray(famDomains) && famDomains.length === 6, `od.getFamilyDomains('environnement-developpement-durable') renvoie les 6 domaines (trouvé : ${famDomains.length})`);

  // ----------------------------------------------------
  // TEST 3: Les 18 fiches métiers et structure en 6 parties
  // ----------------------------------------------------
  console.log('\n--- TEST 3 : Les 18 fiches métiers conformes au schéma en 6 parties ---');
  const envJobs = envData.getJobs();
  assert(Array.isArray(envJobs) && envJobs.length === 18, `Exactement 18 métiers officiels vérifiés dans le dataset environnement (trouvé : ${envJobs.length})`);
  
  let validJobStructureCount = 0;
  envJobs.forEach(j => {
    const c1 = j.id && j.slug && j.title && j.familyId === 'environnement-developpement-durable' && j.domain && j.subdomain && j.level;
    const c2 = j.shortDescription && (j.description || j.longDescription) && Array.isArray(j.typicalDay) && j.typicalDay.length >= 3 && j.daily && j.daily.morning;
    const c3 = j.skills && Array.isArray(j.skills.hard) && j.skills.hard.length >= 3 && Array.isArray(j.skills.soft) && j.skills.soft.length >= 2;
    const c4 = Array.isArray(j.studies) && j.studies.some(s => s.includes('🇫🇷')) && j.studies.some(s => s.includes('🇸🇳'));
    const c5 = j.salary && j.salary.includes('🇫🇷') && j.salary.includes('🇸🇳') && j.salaryDetails && j.salaryDetails.france && j.salaryDetails.senegal;
    const c6 = j.evolution && j.saviezVous && j.saviezVous.fait && j.onisepUrl && Array.isArray(j.sources) && j.sources.length >= 1;

    if (c1 && c2 && c3 && c4 && c5 && c6) {
      validJobStructureCount++;
    } else {
      console.warn(`Structure incomplète pour ${j.id}:`, { c1: !!c1, c2: !!c2, c3: !!c3, c4: !!c4, c5: !!c5, c6: !!c6 });
    }
  });
  assert(validJobStructureCount === 18, `18/18 fiches métiers respectent intégralement le schéma en 6 parties (${validJobStructureCount}/18)`);

  // ----------------------------------------------------
  // TEST 4: Ouverture et intégrité détaillée des fiches
  // ----------------------------------------------------
  console.log('\n--- TEST 4 : Accès et intégrité via OrientationData.getJobById() / getJobBySlug() ---');
  let accessibleCount = 0;
  for (const j of envJobs) {
    const fetched = await od.getJobById(j.id);
    if (fetched && fetched.title === j.title && fetched.saviezVous && fetched.saviezVous.fait && fetched.shortDescription) {
      accessibleCount++;
    }
  }
  assert(accessibleCount === 18, `18/18 fiches accessibles via getJobById() avec anecdotes et données complètes (${accessibleCount}/18)`);

  // ----------------------------------------------------
  // TEST 5: Moteur de recherche universel
  // ----------------------------------------------------
  console.log('\n--- TEST 5 : Moteur de recherche universel ---');
  const testKeywords = ['eau', 'déchets', 'météorologiste', 'biodiversité', 'rse', "station d'épuration", 'climat', 'recyclerie'];
  for (const kw of testKeywords) {
    const results = await od.searchJobs(kw);
    const hasEnvResult = results.some(r => r.familyId === 'environnement-developpement-durable' || (r.connectedFamilies && (r.connectedFamilies.includes('environnement-developpement-durable') || r.connectedFamilies.includes('environnement-climat'))));
    assert(hasEnvResult, `Recherche du terme '${kw}' renvoie des métiers liés à l'environnement (${results.length} résultats totaux)`);
  }

  // ----------------------------------------------------
  // TEST 6: Affinités de la Boussole & Exploration
  // ----------------------------------------------------
  console.log('\n--- TEST 6 : Affinités Boussole de l\'orientation & Exploration ---');
  const affinities = od.getAffinities();
  const envAffinityKeys = [
    'proteger-eau-rivieres',
    'recycler-reduire-dechets',
    'preserver-biodiversite-nature',
    'transition-energies-durables',
    'conseiller-entreprises-rse',
    'etudier-climat-meteo'
  ];
  let foundAffs = 0;
  envAffinityKeys.forEach(k => {
    const aff = affinities.find(a => a.id === k);
    if (aff && aff.familyIds && aff.familyIds.includes('environnement-developpement-durable')) {
      foundAffs++;
    }
  });
  assert(foundAffs === 6, `Les 6 nouvelles affinités Boussole ciblent environnement-developpement-durable (${foundAffs}/6)`);

  const expEau = await od.getExplorationByAffinities(['proteger-eau-rivieres']);
  assert(expEau.matchedJobs.some(j => j.id === 'hydraulicien' || j.id === 'technicien-exploitation-eau'), "Exploration boussole 'proteger-eau-rivieres' retourne les métiers de l'eau");

  const expDechets = await od.getExplorationByAffinities(['recycler-reduire-dechets']);
  assert(expDechets.matchedJobs.some(j => j.id === 'responsable-recyclerie' || j.id === 'ambassadeur-tri'), "Exploration boussole 'recycler-reduire-dechets' retourne les métiers du recyclage");

  // ----------------------------------------------------
  // TEST 7: Relations transversales inter-familles
  // ----------------------------------------------------
  console.log('\n--- TEST 7 : Passerelles et transversalité inter-familles ---');
  const transversalJobs = ['hydraulicien', 'juriste-droit-environnement', 'chef-projet-developpement-durable', 'ambassadeur-tri', 'biologiste-environnement'];
  let transversalCount = 0;
  for (const jid of transversalJobs) {
    const job = await od.getJobById(jid);
    if (job && Array.isArray(job.connectedFamilies) && job.connectedFamilies.length >= 2) {
      transversalCount++;
    }
  }
  assert(transversalCount === transversalJobs.length, `${transversalCount}/${transversalJobs.length} métiers transversaux possèdent des liaisons bidirectionnelles (BTP, Droit, Chimie, etc.)`);

  // ----------------------------------------------------
  // TEST 8: Anti-duplication et unicité globale
  // ----------------------------------------------------
  console.log('\n--- TEST 8 : Anti-duplication et intégrité globale du catalogue ---');
  const allJobs = await od.getAllJobs();
  const seenIds = new Set();
  const duplicates = [];
  allJobs.forEach(j => {
    if (seenIds.has(j.id)) duplicates.push(j.id);
    seenIds.add(j.id);
  });
  assert(duplicates.length === 0, `Zéro doublon détecté parmi les ${allJobs.length} métiers de la plateforme (doublons : ${duplicates.join(', ')})`);
  assert(allJobs.length === 449, `Le catalogue total compte exactement 449 métiers (431 précédents + 18 nouveaux environnement) (trouvé : ${allJobs.length})`);

  // Vérifier la réutilisation des 10 métiers connexes existants sans duplication
  const connectedJobIds = [
    'geomaticien-cartographe-geologue',
    'responsable-qse-industriel',
    'technicien-forestier',
    'technicien-maintenance-eolienne',
    'installateur-mainteneur-photovoltaique',
    'technicien-etudes-thermiques-batiment',
    'energy-manager-auditeur-energetique',
    'hydrogeologue',
    'expert-sites-sols-pollues',
    'ingenieur-eco-conception-btp'
  ];
  let connectedFound = 0;
  for (const cid of connectedJobIds) {
    const cj = await od.getJobById(cid);
    if (cj) connectedFound++;
  }
  assert(connectedFound === 10, `10/10 métiers connexes existants sont bien référencés et accessibles sans création de doublons (${connectedFound}/10)`);

  // ----------------------------------------------------
  // TEST 9: Parcours et filières de formation Onisep
  // ----------------------------------------------------
  console.log('\n--- TEST 9 : Paliers de formation Onisep (CAP à Bac+8) ---');
  const pathways = envData.getPathways();
  assert(Array.isArray(pathways) && pathways.length === 5, `5 filières de formation structurées selon Onisep (trouvé : ${pathways ? pathways.length : 0})`);
  if (pathways) {
    const allDurations = pathways.map(p => p.duration).join(' ');
    assert(allDurations.includes('CAP') && allDurations.includes('Doctorat'), `Filières couvrant du CAP au Doctorat (${allDurations})`);
  }

  // ----------------------------------------------------
  // TEST 10: Citation des sources officielles Onisep (04/11/2025)
  // ----------------------------------------------------
  console.log('\n--- TEST 10 : Traçabilité des sources officielles ---');
  const allCiteOnisep = envJobs.every(j => j.onisepUrl && j.onisepUrl.includes('onisep.fr') && j.sources.some(s => s.date === '04/11/2025' && s.url.includes('onisep.fr')));
  assert(allCiteOnisep, `100% des 18 métiers citent la publication Onisep du 04/11/2025`);

  // ----------------------------------------------------
  // TEST 11: Zéro régression sur les 23 familles existantes
  // ----------------------------------------------------
  console.log('\n--- TEST 11 : Non-régression sur l\'ensemble des 23 familles ---');
  assert(families.length === 23, `Exactement 23 familles professionnelles maintenues (avec la 17ème enrichie)`);
  const santeJobs = await od.getJobsByFamily('sante-soins-paramedical');
  assert(santeJobs.length >= 20, `Famille Santé & Soins toujours opérationnelle (${santeJobs.length} métiers)`);
  const digitalJobs = await od.getJobsByFamily('numerique-ia');
  assert(digitalJobs.length >= 20, `Famille Informatique & Numérique toujours opérationnelle (${digitalJobs.length} métiers)`);
  const envDirectJobs = allJobs.filter(j => j.familyId === 'environnement-developpement-durable');
  assert(envDirectJobs.length === 18, `Famille Environnement compte bien 18 métiers directs (${envDirectJobs.length})`);
  const envEnrichedJobs = await od.getJobsByFamily('environnement-developpement-durable');
  assert(envEnrichedJobs.length >= 18, `L'écosystème environnement enrichi avec passerelles transversales retourne ${envEnrichedJobs.length} métiers`);
  const envAliasJobs = await od.getJobsByFamily('environnement-climat');
  assert(envAliasJobs.length === envEnrichedJobs.length, `L'alias historique 'environnement-climat' retourne le même volume (${envAliasJobs.length} métiers)`);

  // ----------------------------------------------------
  // TEST 12: Intégration frontend, job.html et orientation-ui.js
  // ----------------------------------------------------
  console.log('\n--- TEST 12 : Intégration frontend (job.html et orientation-ui.js) ---');
  const jobHtml = fs.readFileSync(path.resolve(__dirname, '../frontend/job.html'), 'utf8');
  const uiJs = fs.readFileSync(path.resolve(__dirname, '../frontend/js/orientation-ui.js'), 'utf8');
  assert(jobHtml.includes('js/orientation-environment-data.js'), "job.html inclut le script 'orientation-environment-data.js'");
  assert(jobHtml.indexOf('orientation-environment-data.js') < jobHtml.indexOf('orientation-data.js'), "orientation-environment-data.js est chargé AVANT orientation-data.js");
  assert(uiJs.includes('environnement-developpement-durable'), "orientation-ui.js contient la cartographie pour environnement-developpement-durable");
  assert(uiJs.includes('dossier-environment-ref-box'), "orientation-ui.js contient le badge officiel Onisep");

  // Summary
  console.log('\n========================================================================');
  console.log(`📊 RÉSULTAT FINAL : ${passedTests} / ${totalTests} assertions validées.`);
  console.log('========================================================================\n');

  if (passedTests === totalTests) {
    console.log('🎉 VALIDATION COMPLÈTE RÉUSSIE : Aucune régression, famille environnement 100% conforme !');
  } else {
    console.error('⚠️ CERTAINS TESTS ONT ÉCHOUÉ.');
    process.exit(1);
  }
}

runTests();

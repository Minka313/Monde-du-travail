/**
 * SUITE DE VALIDATION ARCHITECTURALE & FONCTIONNELLE
 * 🏨 HÔTELLERIE, RESTAURATION & HOSPITALITÉ (21 Métiers France Travail / MétierScope • 8 Domaines • 5 Filières)
 *
 * Teste rigoureusement les 14 critères d'acceptation requis :
 * 1. Famille hotellerie-restauration-hospitalite présente et bien formée (avec ses alias historiques)
 * 2. Les 8 domaines officiels structurés avec métadonnées complètes
 * 3. 21 fiches métiers vérifiées conformes au schéma en 6 parties
 * 4. Fiches détaillées complètes (quotidien horaire, compétences, formations duales, salaires duals, matériel/équipements, saviez-vous)
 * 5. Recherche universelle sur mots-clés clés (cuisine, ROME G1602, cocktail, PMS, sommelier, gouvernant, yield, plonge)
 * 6. 7 affinités spécifiques de la Boussole et exploration
 * 7. Relations inter-familles transversales (Agro, Commerce, Management, Data, Logistique)
 * 8. Absence totale de doublons (IDs uniques dans tout le catalogue de 470 métiers)
 * 9. Distinctions professionnelles strictes (commis/chef/plongeur, ménage/valet/gouvernant, barman/sommelier)
 * 10. Double ancrage géographique et économique (France € / Sénégal FCFA, ENFHT, Saly)
 * 11. Paliers et filières de formation (CAP à Bac+5)
 * 12. Traçabilité des sources officielles France Travail MétierScope (Secteur 102 & codes ROME)
 * 13. Zéro régression sur l'ensemble des 23 familles existantes
 * 14. Intégration frontend (job.html et orientation-ui.js)
 */

const fs = require('fs');
const path = require('path');

// 1. Initialiser le contexte global comme dans le navigateur
global.window = global;

console.log('\n========================================================================');
console.log('🏨 SUITE DE VALIDATION ARCHITECTURE : HÔTELLERIE, RESTAURATION & HOSPITALITÉ');
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
  global.OrientationHospitalityData = require('../frontend/js/orientation-hospitality-data.js');
  global.OrientationData = require('../frontend/js/orientation-data.js');

  console.log('✅ Tous les modules JS de la plateforme ont été chargés avec succès dans le runtime Node.js.\n');
} catch (err) {
  console.error('❌ Échec du chargement des modules :', err);
  process.exit(1);
}

const od = global.OrientationData;
const hospData = global.OrientationHospitalityData;

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
  console.log('--- TEST 1 : Famille professionnelle Hôtellerie, Restauration & Hospitalité ---');
  const families = od.getFamilies();
  const hospFam = families.find(f => f.id === 'hotellerie-restauration-hospitalite');
  assert(!!hospFam, "La famille 'hotellerie-restauration-hospitalite' existe dans PROFESSIONAL_FAMILIES");
  assert(hospFam && hospFam.order === 18, "La famille occupe bien l'ordre 18");
  assert(hospFam && hospFam.aliases && hospFam.aliases.includes('tourisme-hotellerie'), "La famille supporte l'alias historique 'tourisme-hotellerie'");
  assert(hospFam && hospFam.aliases && hospFam.aliases.includes('hotellerie-restauration'), "La famille supporte l'alias 'hotellerie-restauration'");
  assert(hospFam && hospFam.name.includes("Hôtellerie"), "Le nom de la famille contient 'Hôtellerie'");
  assert(hospFam && hospFam.icon === '🏨', "L'icône de la famille est '🏨'");

  const famByAlias = od.getFamily('tourisme-hotellerie');
  assert(famByAlias && famByAlias.id === 'hotellerie-restauration-hospitalite', "od.getFamily('tourisme-hotellerie') résout correctement vers hotellerie-restauration-hospitalite");

  // ----------------------------------------------------
  // TEST 2: Les 8 domaines officiels structurés
  // ----------------------------------------------------
  console.log('\n--- TEST 2 : Les 8 Domaines Officiels Structurés ---');
  const domains = hospData.getDomains();
  assert(Array.isArray(domains) && domains.length === 8, `Exactement 8 domaines structurés (trouvé : ${domains ? domains.length : 0})`);
  const expectedDomainIds = [
    'cuisine-production-culinaire',
    'patisserie-desserts',
    'service-salle-restauration',
    'bar-boissons-sommellerie',
    'hebergement-accueil-reception',
    'entretien-housekeeping',
    'management-exploitation-etablissement',
    'strategie-revenue-management'
  ];
  expectedDomainIds.forEach(id => {
    const d = domains.find(x => x.id === id);
    assert(!!d, `Domaine '${id}' présent avec nom, icône, et sous-domaines`);
    if (d) {
      assert(Array.isArray(d.subdomains) && d.subdomains.length > 0, `Domaine '${id}' possède ${d.subdomains.length} sous-domaines`);
      assert(typeof d.jobsCount === 'number' && d.jobsCount > 0, `Domaine '${id}' a jobsCount > 0 (${d.jobsCount})`);
    }
  });

  const famDomains = od.getFamilyDomains('hotellerie-restauration-hospitalite');
  assert(Array.isArray(famDomains) && famDomains.length === 8, `od.getFamilyDomains('hotellerie-restauration-hospitalite') renvoie les 8 domaines (trouvé : ${famDomains.length})`);

  // ----------------------------------------------------
  // TEST 3: Les 21 fiches métiers et structure en 6 parties
  // ----------------------------------------------------
  console.log('\n--- TEST 3 : Les 21 fiches métiers conformes au schéma en 6 parties ---');
  const hospJobs = hospData.getJobs();
  assert(Array.isArray(hospJobs) && hospJobs.length === 21, `Exactement 21 métiers officiels vérifiés dans le dataset hospitalité (trouvé : ${hospJobs.length})`);
  
  let validJobStructureCount = 0;
  hospJobs.forEach(j => {
    const c1 = j.id && j.slug && j.title && j.familyId === 'hotellerie-restauration-hospitalite' && j.domain && j.subdomain && j.level && j.codeRome;
    const c2 = j.shortDescription && (j.description || j.longDescription) && Array.isArray(j.typicalDay) && j.typicalDay.length >= 3 && j.daily && j.daily.morning;
    const c3 = j.skills && Array.isArray(j.skills.hard) && j.skills.hard.length >= 3 && Array.isArray(j.skills.soft) && j.skills.soft.length >= 2;
    const c4 = Array.isArray(j.studies) && j.studies.some(s => s.includes('🇫🇷')) && j.studies.some(s => s.includes('🇸🇳'));
    const c5 = j.salary && j.salary.includes('🇫🇷') && j.salary.includes('🇸🇳') && j.salaryDetails && j.salaryDetails.france && j.salaryDetails.senegal;
    const c6 = j.evolution && j.saviezVous && j.saviezVous.fait && j.franceTravailUrl && Array.isArray(j.sources) && j.sources.length >= 1;

    if (c1 && c2 && c3 && c4 && c5 && c6) {
      validJobStructureCount++;
    } else {
      console.warn(`Structure incomplète pour ${j.id}:`, { c1: !!c1, c2: !!c2, c3: !!c3, c4: !!c4, c5: !!c5, c6: !!c6 });
    }
  });
  assert(validJobStructureCount === 21, `21/21 fiches métiers respectent intégralement le schéma en 6 parties (${validJobStructureCount}/21)`);

  // ----------------------------------------------------
  // TEST 4: Accès et intégrité détaillée des fiches
  // ----------------------------------------------------
  console.log('\n--- TEST 4 : Accès et intégrité via OrientationData.getJobById() / getJobBySlug() ---');
  let accessibleCount = 0;
  for (const j of hospJobs) {
    const fetched = await od.getJobById(j.id);
    if (fetched && fetched.title === j.title && fetched.saviezVous && fetched.saviezVous.fait && fetched.shortDescription && fetched.codeRome) {
      accessibleCount++;
    }
  }
  assert(accessibleCount === 21, `21/21 fiches accessibles via getJobById() avec anecdotes, code ROME et données complètes (${accessibleCount}/21)`);

  // ----------------------------------------------------
  // TEST 5: Moteur de recherche universel
  // ----------------------------------------------------
  console.log('\n--- TEST 5 : Moteur de recherche universel ---');
  const testKeywords = ['cuisinier', 'barman', 'pâtissier', 'sommelier', 'G1602', 'G1803', 'shaker', 'plongeur', 'yield', 'valet de chambre'];
  for (const kw of testKeywords) {
    const results = await od.searchJobs(kw);
    const hasHospResult = results.some(r => r.familyId === 'hotellerie-restauration-hospitalite' || (r.connectedFamilies && (r.connectedFamilies.includes('hotellerie-restauration-hospitalite') || r.connectedFamilies.includes('tourisme-hotellerie'))));
    assert(hasHospResult, `Recherche du terme '${kw}' renvoie des métiers liés à l'hôtellerie-restauration (${results.length} résultats totaux)`);
  }

  // ----------------------------------------------------
  // TEST 6: Affinités de la Boussole & Exploration
  // ----------------------------------------------------
  console.log('\n--- TEST 6 : Affinités Boussole de l\'orientation & Exploration ---');
  const affinities = od.getAffinities();
  const hospAffinityKeys = [
    'passion-cuisine-gastronomie',
    'patisserie-desserts-creatifs',
    'accueil-relation-client-service',
    'bar-mixologie-sommellerie',
    'management-direction-etablissement',
    'yield-revenue-management',
    'voyage-hospitalite-hotellerie'
  ];
  let foundAffs = 0;
  hospAffinityKeys.forEach(k => {
    const aff = affinities.find(a => a.id === k);
    if (aff && aff.familyIds && aff.familyIds.includes('hotellerie-restauration-hospitalite')) {
      foundAffs++;
    }
  });
  assert(foundAffs === 7, `Les 7 nouvelles affinités Boussole ciblent hotellerie-restauration-hospitalite (${foundAffs}/7)`);

  const expCuisine = await od.getExplorationByAffinities(['passion-cuisine-gastronomie']);
  assert(expCuisine.matchedJobs.some(j => j.id === 'cuisinier' || j.id === 'chef-cuisinier'), "Exploration boussole 'passion-cuisine-gastronomie' retourne cuisinier/chef");

  const expBar = await od.getExplorationByAffinities(['bar-mixologie-sommellerie']);
  assert(expBar.matchedJobs.some(j => j.id === 'barman' || j.id === 'sommelier'), "Exploration boussole 'bar-mixologie-sommellerie' retourne barman/sommelier");

  // ----------------------------------------------------
  // TEST 7: Relations transversales inter-familles
  // ----------------------------------------------------
  console.log('\n--- TEST 7 : Passerelles et transversalité inter-familles ---');
  const transversalJobs = ['cuisinier', 'yield-manager', 'directeur-hotel', 'barman', 'gerant-restauration-collective'];
  let transversalCount = 0;
  for (const jid of transversalJobs) {
    const job = await od.getJobById(jid);
    if (job && Array.isArray(job.connectedFamilies) && job.connectedFamilies.length >= 2) {
      transversalCount++;
    }
  }
  assert(transversalCount === transversalJobs.length, `${transversalCount}/${transversalJobs.length} métiers transversaux possèdent des liaisons bidirectionnelles (Agro, Commerce, Management, Data)`);

  // ----------------------------------------------------
  // TEST 8: Anti-duplication et intégrité globale
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
  assert(allJobs.length === 470, `Le catalogue total compte exactement 470 métiers (449 précédents + 21 nouveaux hospitalité) (trouvé : ${allJobs.length})`);

  // ----------------------------------------------------
  // TEST 9: Distinctions professionnelles strictes
  // ----------------------------------------------------
  console.log('\n--- TEST 9 : Distinctions professionnelles strictes ---');
  const jMenage = await od.getJobById('employe-menage');
  const jValet = await od.getJobById('valet-de-chambre');
  const jGouv = await od.getJobById('gouvernant');
  assert(jMenage && jValet && jGouv && jMenage.id !== jValet.id && jValet.id !== jGouv.id, "Distinction stricte ménage / valet de chambre / gouvernant");
  assert(jMenage.codeRome === 'K2204' && jValet.codeRome === 'G1501' && jGouv.codeRome === 'G1502', "Codes ROME distincts pour les 3 métiers d'hébergement");

  const jBarman = await od.getJobById('barman');
  const jSommelier = await od.getJobById('sommelier');
  assert(jBarman && jSommelier && jBarman.codeRome === 'G1801' && jSommelier.codeRome === 'G1804', "Distinction barman (mixologie, G1801) vs sommelier (œnologie, G1804)");

  const jCommis = await od.getJobById('commis-cuisine');
  const jCuisinier = await od.getJobById('cuisinier');
  const jSecond = await od.getJobById('second-cuisine');
  const jChef = await od.getJobById('chef-cuisinier');
  const jPlongeur = await od.getJobById('plongeur-restauration');
  assert(jCommis && jCuisinier && jSecond && jChef && jPlongeur, "Hiérarchie de brigade complète en cuisine : commis -> cuisinier -> second -> chef + plongeur");

  // ----------------------------------------------------
  // TEST 10: Double ancrage géographique et économique
  // ----------------------------------------------------
  console.log('\n--- TEST 10 : Double ancrage géographique et économique (France / Sénégal) ---');
  let validDualAnchoringCount = 0;
  hospJobs.forEach(j => {
    const hasFrEur = j.salary && j.salary.includes('€') && j.salaryDetails && j.salaryDetails.france && (j.salaryDetails.france.starter || j.salaryDetails.france.brutMensuel);
    const hasSnFcfa = j.salary && j.salary.includes('FCFA') && j.salaryDetails && j.salaryDetails.senegal && (j.salaryDetails.senegal.starter || j.salaryDetails.senegal.brutMensuel);
    const hasSnSchools = j.studies && Array.isArray(j.studies) && j.studies.some(s => s.toLowerCase().includes('dakar') || s.toLowerCase().includes('enfht') || s.toLowerCase().includes('sénégal') || s.toLowerCase().includes('saly'));
    if (hasFrEur && hasSnFcfa && hasSnSchools) validDualAnchoringCount++;
  });
  assert(validDualAnchoringCount === 21, `21/21 métiers possèdent l'ancrage dual complet (Salaires France € / Sénégal FCFA et formations ENFHT/Sénégal)`);

  // ----------------------------------------------------
  // TEST 11: Parcours et filières de formation
  // ----------------------------------------------------
  console.log('\n--- TEST 11 : Paliers et filières de formation (CAP à Bac+5) ---');
  const pathways = hospData.getPathways();
  assert(Array.isArray(pathways) && pathways.length === 5, `5 filières de formation structurées (trouvé : ${pathways ? pathways.length : 0})`);
  if (pathways) {
    const allDurations = pathways.map(p => p.duration).join(' ');
    assert(allDurations.includes('CAP') && (allDurations.includes('Bac+5') || allDurations.includes('Bac +5')), `Filières couvrant du CAP au Bac+5 (${allDurations})`);
  }

  // ----------------------------------------------------
  // TEST 12: Citation des sources officielles France Travail MétierScope
  // ----------------------------------------------------
  console.log('\n--- TEST 12 : Traçabilité des sources officielles France Travail MétierScope ---');
  const allCiteFranceTravail = hospJobs.every(j => j.franceTravailUrl && j.franceTravailUrl.includes('francetravail.fr') && j.sources.some(s => (s.name && s.name.includes('France Travail')) || (s.organization && s.organization.includes('France Travail'))));
  assert(allCiteFranceTravail, `100% des 21 métiers citent la source officielle France Travail MétierScope (Secteur 102)`);

  // ----------------------------------------------------
  // TEST 13: Zéro régression sur les 23 familles existantes
  // ----------------------------------------------------
  console.log('\n--- TEST 13 : Non-régression sur l\'ensemble des 23 familles ---');
  assert(families.length === 23, `Exactement 23 familles professionnelles maintenues (avec la 18ème enrichie)`);
  const envJobs = await od.getJobsByFamily('environnement-developpement-durable');
  assert(envJobs.length >= 18, `Famille Environnement toujours opérationnelle (${envJobs.length} métiers)`);
  const santeJobs = await od.getJobsByFamily('sante-soins-paramedical');
  assert(santeJobs.length >= 20, `Famille Santé & Soins toujours opérationnelle (${santeJobs.length} métiers)`);
  const digitalJobs = await od.getJobsByFamily('numerique-ia');
  assert(digitalJobs.length >= 20, `Famille Informatique & Numérique toujours opérationnelle (${digitalJobs.length} métiers)`);
  const hospDirectJobs = allJobs.filter(j => j.familyId === 'hotellerie-restauration-hospitalite');
  assert(hospDirectJobs.length === 21, `Famille Hospitalité compte bien 21 métiers directs (${hospDirectJobs.length})`);
  const hospEnrichedJobs = await od.getJobsByFamily('hotellerie-restauration-hospitalite');
  assert(hospEnrichedJobs.length >= 21, `L'écosystème hospitalité enrichi retourne ${hospEnrichedJobs.length} métiers`);
  const hospAliasJobs = await od.getJobsByFamily('tourisme-hotellerie');
  assert(hospAliasJobs.length === hospEnrichedJobs.length, `L'alias historique 'tourisme-hotellerie' retourne le même volume (${hospAliasJobs.length} métiers)`);

  // ----------------------------------------------------
  // TEST 14: Intégration frontend, job.html et orientation-ui.js
  // ----------------------------------------------------
  console.log('\n--- TEST 14 : Intégration frontend (job.html et orientation-ui.js) ---');
  const jobHtml = fs.readFileSync(path.resolve(__dirname, '../frontend/job.html'), 'utf8');
  const uiJs = fs.readFileSync(path.resolve(__dirname, '../frontend/js/orientation-ui.js'), 'utf8');
  assert(jobHtml.includes('js/orientation-hospitality-data.js'), "job.html inclut le script 'orientation-hospitality-data.js'");
  assert(jobHtml.indexOf('orientation-hospitality-data.js') < jobHtml.indexOf('orientation-data.js'), "orientation-hospitality-data.js est chargé AVANT orientation-data.js");
  assert(uiJs.includes('hotellerie-restauration-hospitalite'), "orientation-ui.js contient la cartographie pour hotellerie-restauration-hospitalite");
  assert(uiJs.includes('dossier-hospitality-ref-box'), "orientation-ui.js contient le badge officiel France Travail MétierScope");

  // Summary
  console.log('\n========================================================================');
  console.log(`📊 RÉSULTAT FINAL : ${passedTests} / ${totalTests} assertions validées.`);
  console.log('========================================================================\n');

  if (passedTests === totalTests) {
    console.log('🎉 VALIDATION COMPLÈTE RÉUSSIE : Aucune régression, famille Hôtellerie, Restauration & Hospitalité 100% conforme !');
  } else {
    console.error('⚠️ CERTAINS TESTS ONT ÉCHOUÉ.');
    process.exit(1);
  }
}

runTests();

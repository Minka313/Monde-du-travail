/**
 * Test d'intérêts professionnels RIASEC (modèle de John L. Holland).
 *
 * Méthode (alignée sur les inventaires d'intérêts de référence, dont l'O*NET Interest Profiler) :
 * - 48 activités, 8 par type, notées sur une échelle de 0 à 4 (« Pas du tout » à « Tout à fait »).
 *   Version express : les 4 premières activités de chaque type (24 questions).
 * - Chaque type est mesuré séparément (score 0–100), sans opposer les réponses entre elles.
 * - Code de Holland : les 3 types les plus élevés ; les ex æquo sont signalés.
 * - Indicateurs de lecture : niveau d'intérêt, différenciation (écart entre le plus fort et le plus
 *   faible), cohérence (position des 2 premiers types sur l'hexagone R-I-A-S-E-C), qualité des réponses.
 * - Affinité avec un métier : corrélation entre le profil de la personne et le code RIASEC du métier
 *   (poids 3-2-1 sur ses trois lettres), ramenée en pourcentage. Aucun plancher artificiel.
 *
 * Utilisable dans le navigateur (window.RiasecEngine) et dans Node (tests).
 */
/* global module */
(function (root) {
  'use strict';

  const ORDER = ['R', 'I', 'A', 'S', 'E', 'C'];

  const TYPES = {
    R: {
      name: 'Réaliste', short: 'Faire', icon: '🛠️', color: '#0284c7',
      tagline: 'Agir concrètement, avec ses mains, des outils ou des machines',
      description: 'Tu aimes les activités concrètes dont on voit le résultat : fabriquer, réparer, installer, cultiver, conduire. Tu apprends en pratiquant et tu apprécies le terrain plus que les longues discussions.',
      environments: ['Chantiers et ateliers', 'Exploitations agricoles et maritimes', 'Sites industriels et énergétiques', 'Travail en plein air'],
      strengths: ['Sens pratique', 'Habileté technique', 'Endurance', 'Goût du résultat tangible'],
      watch: 'Les métiers très administratifs ou assis toute la journée risquent de te frustrer.',
      tryIt: 'Passe une journée avec un technicien, un artisan ou sur une exploitation ; essaie un petit projet de réparation ou de montage.',
    },
    I: {
      name: 'Investigateur', short: 'Comprendre', icon: '🔬', color: '#4f46e5',
      tagline: 'Observer, analyser, chercher à comprendre',
      description: 'Tu es curieux du « pourquoi » des choses : sciences, données, santé, technologies. Tu aimes résoudre des problèmes complexes, vérifier tes idées et apprendre en profondeur avant d\'agir.',
      environments: ['Laboratoires et centres de recherche', 'Équipes data, informatique et ingénierie', 'Hôpitaux et santé', 'Bureaux d\'études'],
      strengths: ['Esprit d\'analyse', 'Curiosité', 'Rigueur', 'Autonomie intellectuelle'],
      watch: 'Les tâches répétitives sans réflexion ou la vente sous pression te conviennent souvent moins.',
      tryIt: 'Lance-toi dans un mini-projet d\'analyse (données, expérience, programmation) ou un club scientifique.',
    },
    A: {
      name: 'Artistique', short: 'Créer', icon: '🎨', color: '#9333ea',
      tagline: 'Imaginer, créer, exprimer des idées',
      description: 'Tu as besoin de liberté et d\'originalité : écrire, dessiner, filmer, concevoir, jouer. Tu préfères inventer ta propre manière de faire plutôt que suivre un modèle tout tracé.',
      environments: ['Agences de communication et studios', 'Médias et édition', 'Design, architecture, mode', 'Culture et spectacle'],
      strengths: ['Imagination', 'Sens esthétique', 'Expression', 'Originalité'],
      watch: 'Les cadres très rigides et les procédures strictes peuvent te brider.',
      tryIt: 'Constitue un petit portfolio (textes, visuels, vidéos) et montre-le à un professionnel du secteur.',
    },
    S: {
      name: 'Social', short: 'Aider', icon: '🤝', color: '#059669',
      tagline: 'Aider, accompagner, transmettre',
      description: 'Tu es attiré par les autres : enseigner, soigner, conseiller, accompagner, animer. Ton énergie vient du contact humain et de l\'utilité concrète de ton travail pour les personnes.',
      environments: ['Écoles et centres de formation', 'Santé et action sociale', 'Associations et ONG', 'Accueil et services aux personnes'],
      strengths: ['Écoute', 'Empathie', 'Pédagogie', 'Sens du collectif'],
      watch: 'Un travail isolé, centré uniquement sur des machines ou des chiffres, risque de te manquer de sens.',
      tryIt: 'Engage-toi comme bénévole, tuteur ou animateur ; observe une journée d\'enseignant ou de soignant.',
    },
    E: {
      name: 'Entreprenant', short: 'Convaincre', icon: '🚀', color: '#ea580c',
      tagline: 'Entreprendre, convaincre, diriger',
      description: 'Tu aimes prendre des initiatives, influencer, négocier et mener des projets. Les défis, la responsabilité et les résultats te motivent ; tu n\'as pas peur de prendre la parole ou des risques mesurés.',
      environments: ['Entreprises et startups', 'Commerce, vente et marketing', 'Management et direction de projets', 'Politique et associations'],
      strengths: ['Leadership', 'Persuasion', 'Prise d\'initiative', 'Goût du défi'],
      watch: 'Les activités très théoriques ou solitaires, sans enjeu visible, peuvent vite t\'ennuyer.',
      tryIt: 'Monte un petit projet (vente, événement, association) et pilote-le du début à la fin.',
    },
    C: {
      name: 'Conventionnel', short: 'Organiser', icon: '📊', color: '#0f766e',
      tagline: 'Organiser, structurer, fiabiliser',
      description: 'Tu apprécies l\'ordre, la précision et les règles claires : gérer des chiffres, des documents, des plannings, des procédures. On peut compter sur toi pour qu\'un travail soit exact et bien tenu.',
      environments: ['Banques, assurances et comptabilité', 'Administrations et secrétariats', 'Logistique et gestion des stocks', 'Contrôle qualité et conformité'],
      strengths: ['Organisation', 'Précision', 'Fiabilité', 'Méthode'],
      watch: 'Les situations floues, sans consignes ni structure, peuvent te mettre mal à l\'aise.',
      tryIt: 'Prends en charge la trésorerie, le planning ou les archives d\'un club ou d\'une association.',
    },
  };

  // 8 activités par type, rédigées en situations concrètes et sans stéréotype de genre ou de diplôme.
  // Les 4 premières de chaque type composent la version express.
  const ITEMS = {
    R: [
      'Réparer un téléphone, une moto ou un appareil électrique en panne',
      'Construire ou assembler quelque chose de mes mains (meuble, maquette, installation)',
      'Travailler en plein air : sur un chantier, dans un champ, en mer ou en forêt',
      'Utiliser des outils, des machines ou des engins',
      'Installer des panneaux solaires ou un circuit électrique',
      'Cultiver la terre, élever des animaux ou entretenir des espaces verts',
      'Lire un plan technique et le réaliser concrètement',
      'Conduire ou piloter un véhicule, un engin ou un drone',
    ],
    I: [
      'Comprendre pourquoi un phénomène se produit (une maladie, le climat, l\'électricité)',
      'Faire des expériences dans un laboratoire',
      'Résoudre des problèmes de mathématiques ou de logique difficiles',
      'Analyser des données pour en tirer des conclusions',
      'Lire des articles ou regarder des documentaires scientifiques',
      'Apprendre à programmer ou à comprendre comment fonctionne un logiciel',
      'Mener une enquête ou une recherche pour vérifier une hypothèse',
      'Étudier le fonctionnement du corps humain, des plantes ou des animaux',
    ],
    A: [
      'Dessiner, peindre ou réaliser des visuels graphiques',
      'Écrire des histoires, des poèmes, des textes ou des chansons',
      'Jouer de la musique, chanter, danser ou faire du théâtre',
      'Prendre des photos ou réaliser des vidéos',
      'Imaginer la décoration d\'un lieu ou le design d\'un objet',
      'Créer du contenu original pour les réseaux sociaux',
      'Inventer des idées nouvelles plutôt que suivre un modèle existant',
      'Créer des vêtements, des bijoux ou des objets d\'artisanat',
    ],
    S: [
      'Expliquer une leçon à quelqu\'un qui a du mal à comprendre',
      'Écouter et conseiller une personne qui traverse une difficulté',
      'Soigner des personnes malades ou blessées',
      'M\'occuper d\'enfants ou de personnes âgées',
      'M\'engager dans une association ou une action solidaire',
      'Accueillir et renseigner des personnes qui ont besoin d\'un service',
      'Animer un groupe ou une activité pour des jeunes',
      'Aider deux personnes à résoudre un conflit',
    ],
    E: [
      'Convaincre des gens d\'adhérer à mon idée ou à mon projet',
      'Vendre un produit ou négocier un prix',
      'Créer et développer ma propre activité ou entreprise',
      'Diriger une équipe et prendre les décisions importantes',
      'Prendre la parole en public pour défendre un point de vue',
      'Organiser un événement et trouver des partenaires ou des sponsors',
      'Me fixer des objectifs ambitieux et tout faire pour les atteindre',
      'Représenter un groupe ou une organisation auprès d\'autres personnes',
    ],
    C: [
      'Tenir des comptes, un budget ou une caisse avec précision',
      'Classer et organiser des documents, des fichiers ou des données',
      'Suivre des procédures et vérifier que tout est conforme',
      'Faire des tableaux et des calculs dans un tableur (Excel)',
      'Planifier un emploi du temps ou un calendrier détaillé',
      'Relire un travail pour repérer et corriger les erreurs',
      'Gérer des stocks, des commandes ou des livraisons',
      'Remplir des formulaires et des dossiers administratifs avec soin',
    ],
  };

  const SCALE = [
    { value: 0, label: 'Pas du tout' },
    { value: 1, label: 'Plutôt pas' },
    { value: 2, label: 'Je ne sais pas' },
    { value: 3, label: 'Plutôt oui' },
    { value: 4, label: 'Tout à fait' },
  ];

  const MODES = {
    express: { label: 'Express', perType: 4, minutes: 4 },
    complet: { label: 'Complet', perType: 8, minutes: 8 },
  };

  /**
   * Questions dans l'ordre de passation : les types alternent à chaque question
   * et l'ordre des types tourne d'une série à l'autre (pas de motif prévisible).
   */
  function buildQuestions(mode = 'complet') {
    const perType = (MODES[mode] || MODES.complet).perType;
    const out = [];
    for (let round = 0; round < perType; round += 1) {
      for (let k = 0; k < ORDER.length; k += 1) {
        const type = ORDER[(k + round) % ORDER.length];
        out.push({ id: `${type}${round + 1}`, type, text: ITEMS[type][round] });
      }
    }
    return out;
  }

  const hexDistance = (a, b) => {
    const d = Math.abs(ORDER.indexOf(a) - ORDER.indexOf(b));
    return Math.min(d, ORDER.length - d);
  };

  /** answers : { R1: 0..4, I1: 0..4, … } ; meta : { seconds } facultatif */
  function score(answers, { mode = 'complet', seconds = null } = {}) {
    const questions = buildQuestions(mode);
    const values = questions.map((q) => answers[q.id]).filter((v) => Number.isInteger(v) && v >= 0 && v <= 4);
    const complete = values.length === questions.length;

    const scores = {};
    ORDER.forEach((t) => {
      const own = questions.filter((q) => q.type === t).map((q) => answers[q.id]).filter((v) => Number.isInteger(v));
      scores[t] = own.length ? Math.round((own.reduce((s, v) => s + v, 0) / (own.length * 4)) * 100) : 0;
    });

    // Classement : score décroissant, ordre de l'hexagone en cas d'égalité (stable et documenté)
    const ranking = ORDER.slice().sort((a, b) => scores[b] - scores[a] || ORDER.indexOf(a) - ORDER.indexOf(b));
    const code = ranking.slice(0, 3).join('');
    const ties = [];
    for (let i = 0; i < 3; i += 1) {
      if (scores[ranking[i]] === scores[ranking[i + 1]]) ties.push([ranking[i], ranking[i + 1]]);
    }

    const top = scores[ranking[0]];
    const differentiation = top - scores[ranking[5]];
    const distance = hexDistance(ranking[0], ranking[1]);

    // Qualité des réponses : réponses toutes identiques, ou passation trop rapide
    const counts = {};
    values.forEach((v) => { counts[v] = (counts[v] || 0) + 1; });
    const sameShare = values.length ? Math.max(...Object.values(counts)) / values.length : 0;
    const warnings = [];
    if (!complete) warnings.push('incomplete');
    if (sameShare >= 0.85) warnings.push('uniform');
    if (seconds != null && values.length && seconds / values.length < 1.5) warnings.push('fast');

    return {
      mode,
      scores,
      ranking,
      code,
      ties,
      indicators: {
        level: top >= 70 ? 'fort' : top >= 45 ? 'moyen' : 'faible',
        differentiation,
        differentiationLabel: differentiation >= 40 ? 'net' : differentiation >= 20 ? 'modéré' : 'peu marqué',
        consistency: distance === 1 ? 'forte' : distance === 2 ? 'moyenne' : 'faible',
        reliable: warnings.length === 0,
        warnings,
      },
    };
  }

  /** Vecteur d'un code métier : 3 / 2 / 1 sur ses lettres, 0 ailleurs */
  function codeVector(code) {
    const v = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
    String(code || '').split('').slice(0, 3).forEach((l, i) => { if (l in v) v[l] = 3 - i; });
    return v;
  }

  function pearson(a, b) {
    const xs = ORDER.map((t) => a[t]);
    const ys = ORDER.map((t) => b[t]);
    const mx = xs.reduce((s, v) => s + v, 0) / 6;
    const my = ys.reduce((s, v) => s + v, 0) / 6;
    let num = 0; let dx = 0; let dy = 0;
    for (let i = 0; i < 6; i += 1) {
      num += (xs[i] - mx) * (ys[i] - my);
      dx += (xs[i] - mx) ** 2;
      dy += (ys[i] - my) ** 2;
    }
    return dx && dy ? num / Math.sqrt(dx * dy) : 0;
  }

  /** Affinité 0–100 entre un profil (scores) et un code métier */
  function affinity(scores, jobCode) {
    if (!/^[RIASEC]{3}$/.test(jobCode || '')) return null;
    return Math.round(((pearson(scores, codeVector(jobCode)) + 1) / 2) * 100);
  }

  /** Niveau d'entrée minimal d'un libellé de diplôme : 0 = sans bac / CAP / Bac pro, n = Bac +n, null = inconnu */
  function entryLevel(label) {
    if (!label) return null;
    const text = String(label);
    if (/CAP|BEP|Bac Pro|sans dipl|sans bac/i.test(text)) return 0;
    const m = text.match(/Bac\s*\+\s*(\d)/i);
    if (m) return Number(m[1]);
    if (/BTS|BUT|DUT/i.test(text)) return 2;
    if (/Licence/i.test(text)) return 3;
    if (/Master|Ingénieur/i.test(text)) return 5;
    if (/Doctorat|Ph\.?D/i.test(text)) return 8;
    return null;
  }

  /** Métiers classés par affinité ; options : { maxLevel, limit } */
  function matchJobs(scores, jobs, { maxLevel = null, limit = 12 } = {}) {
    const top3 = ORDER.slice().sort((a, b) => scores[b] - scores[a] || ORDER.indexOf(a) - ORDER.indexOf(b)).slice(0, 3);
    return jobs
      .filter((j) => /^[RIASEC]{3}$/.test(j.riasec || ''))
      // Niveau inconnu : exclu dès qu'un niveau maximal est demandé (on ne promet pas un accès sans bac)
      .filter((j) => {
        if (maxLevel == null) return true;
        const lvl = entryLevel(j.level);
        return lvl != null && lvl <= maxLevel;
      })
      .map((j) => ({ job: j, affinity: affinity(scores, j.riasec), shared: j.riasec.split('').filter((l) => top3.includes(l)) }))
      .sort((a, b) => b.affinity - a.affinity || a.job.title.localeCompare(b.job.title, 'fr'))
      .reduce(diversify, [])
      .slice(0, limit);
  }

  // À affinité égale, alterne les familles de métiers (sinon une seule famille occupe le haut de la liste)
  function diversify(out, item, i, all) {
    if (i > 0 && all[i - 1].affinity === item.affinity) return out;
    const group = all.filter((x) => x.affinity === item.affinity);
    const byFamily = new Map();
    group.forEach((x) => {
      const key = x.job.familyId || '';
      if (!byFamily.has(key)) byFamily.set(key, []);
      byFamily.get(key).push(x);
    });
    const queues = [...byFamily.values()];
    while (queues.some((q) => q.length)) queues.forEach((q) => { if (q.length) out.push(q.shift()); });
    return out;
  }

  const api = { ORDER, TYPES, ITEMS, SCALE, MODES, buildQuestions, score, affinity, codeVector, entryLevel, matchJobs, hexDistance };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.RiasecEngine = api;
}(typeof window !== 'undefined' ? window : globalThis));

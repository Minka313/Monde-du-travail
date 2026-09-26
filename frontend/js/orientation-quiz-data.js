/**
 * orientation-quiz-data.js
 * Modèle Psychométrique RIASEC, Questions Immersives, Référentiel Éducatif Sénégalais (CNOSP)
 * et Moteur de Calcul d'Affinité pour la Boussole d'Orientation.
 */

(function () {
  'use strict';

  // 1. LES 6 PROFILS RIASEC DE HOLLAND
  const PROFILES = {
    R: {
      code: 'R',
      name: 'Réaliste',
      title: 'Le Bâtisseur & Praticien',
      icon: '🛠️',
      color: '#0284c7', // Bleu saphir
      gradient: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
      summary: 'Tu aimes le concret, le terrain, les technologies appliquées, la matière et les défis physiques ou techniques.',
      description: 'Tu apprends en faisant. Tu apprécies manipuler des équipements, bâtir des structures solides, résoudre des problèmes mécaniques ou travailler au grand air. Tu as l\'esprit pratique, un sens aigu du réel et une grande endurance.',
      keyStrengths: ['Sens pratique & habileté technique', 'Endurance & pragmatisme', 'Orientation résultat concret', 'Maîtrise des outils et machines'],
      senegalFocus: 'Ce profil est au cœur des grands chantiers du Sénégal : modernisation agricole (AgriTech), exploitation des hydrocarbures (GTA, Sangomar), construction d\'infrastructures durables et industrie mécanique.',
      seriesBac: ['S1 / S2 / S3', 'T1 / T2 (Technique & Génie)', 'Formations Professionnelles (BT, BTS BTP, Électrotechnique, Mécanique)'],
      universities: ['EPT Thiès (Génie Civil/Mécanique)', 'ESP Dakar (Génie Électrique & Mécanique)', 'ISEP (Thiès, Diamniadio, Bignona)', 'CFPT Sénégal-Japon', 'UADB Bambey'],
      salaryRangeFcfa: '250 000 à 750 000 FCFA / mois (jusqu\'à 1 500 000+ FCFA pour profils seniors Pétrole/BTP)',
      vision2050Pillar: 'Infrastructures Stratégiques, Souveraineté Énergétique & Industrielle'
    },
    I: {
      code: 'I',
      name: 'Investigateur',
      title: 'Le Chercheur & Analyste',
      icon: '🔬',
      color: '#4f46e5', // Indigo profond
      gradient: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 100%)',
      summary: 'Tu es guidé par la curiosité intellectuelle, l\'analyse scientifique, la résolution d\'énigmes complexes et l\'innovation par la donnée.',
      description: 'Tu aimes comprendre le fonctionnement intime du monde, des algorithmes ou du corps humain. Avant d\'agir, tu observes, modélises et vérifies avec rigueur. Tu es attiré par la science, la data, l\'IA et la recherche de pointe.',
      keyStrengths: ['Esprit critique & curiosité insatiable', 'Capacité d\'abstraction & modélisation', 'Rigueur méthodologique', 'Résolution de problèmes complexes'],
      senegalFocus: 'Le Sénégal mise massivement sur ce profil pour son hub numérique dakarois, la recherche médicale de pointe (Institut Pasteur, UCAD) et l\'essor de l\'intelligence artificielle en Afrique de l\'Ouest.',
      seriesBac: ['S1 (Maths & Sciences Physiques)', 'S2 (Sciences Expérimentales)', 'S3 (Sciences & Technologies)'],
      universities: ['UCAD (Faculté des Sciences, Faculté de Médecine)', 'UGB Saint-Louis (UFR Sciences Appliquées & Technologie)', 'ENSAE Dakar (Statistique & Data)', 'ESP (Informatique & Réseaux)', 'ESMT Dakar'],
      salaryRangeFcfa: '350 000 à 950 000 FCFA / mois (jusqu\'à 2 000 000+ FCFA en IA & Cybersécurité)',
      vision2050Pillar: 'Capital Humain d\'Excellence, Recherche Scientifique & Hub Numérique Africain'
    },
    A: {
      code: 'A',
      name: 'Artistique',
      title: 'Le Créatif & Visionnaire',
      icon: '🎨',
      color: '#9333ea', // Pourpre vibrant
      gradient: 'linear-gradient(135deg, #9333ea 0%, #7e22ce 100%)',
      summary: 'Tu as besoin d\'exprimer tes idées, d\'innover visuellement, de raconter des histoires captivantes et d\'émouvoir.',
      description: 'L\'originalité et la liberté de ton sont tes moteurs essentiels. Tu as l\'œil pour le design, le sens des mots ou l\'instinct esthétique. Tu bouscules les conventions pour inventer de nouvelles manières de communiquer et d\'inspirer.',
      keyStrengths: ['Imagination débordante & intuition', 'Sens de l\'esthétique et du design', 'Aisance rédactionnelle & storytelling', 'Pensée latérale (hors du cadre)'],
      senegalFocus: 'Secteur en plein essor à Dakar : industries culturelles et créatives, publicité digitale, production audiovisuelle panafricaine, design UI/UX et création de contenu d\'influence.',
      seriesBac: ['L1a / L1b / L2 (Littérature & Arts)', 'LA (Langues Anciennes & Vivantes)', 'S2 avec fibre créative'],
      universities: ['CESTI Dakar (Journalisme & Médias)', 'EBAD (Sciences de l\'Information)', 'UGB Saint-Louis (CRAC - Civilisations, Religions, Arts & Com)', 'Écoles de Design & Communication de Dakar'],
      salaryRangeFcfa: '250 000 à 650 000 FCFA / mois (revenus très évolutifs en agence ou freelance)',
      vision2050Pillar: 'Rayonnement Culturel Panafricain & Économie Créative Digitale'
    },
    S: {
      code: 'S',
      name: 'Social',
      title: 'Le Protecteur & Pédagogue',
      icon: '🤝',
      color: '#059669', // Émeraude bienveillante
      gradient: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
      summary: 'Tu trouves ton épanouissement dans l\'aide aux autres, la transmission de savoirs, le soin et le développement harmonieux de la communauté.',
      description: 'Tu es doté d\'une empathie naturelle et d\'un sens profond de l\'écoute. Tu aimes former, guider, conseiller, soigner ou défendre les droits d\'autrui. Pour toi, la réussite professionnelle passe avant tout par l\'impact humain.',
      keyStrengths: ['Intelligence émotionnelle & empathie', 'Pédagogie & clarté de transmission', 'Sens de la justice et de l\'éthique', 'Médiation & résolution de conflits'],
      senegalFocus: 'Secteur vital : renforcement du système éducatif national, santé communautaire, action sociale, hospitalité hôtelière et accompagnement des jeunes talents.',
      seriesBac: ['L2 (Lettres & Sciences Humaines)', 'S2 (pour Santé/Paramédical)', 'L1 / STEG'],
      universities: ['FASTEF / UCAD (Enseignement & Pédagogie)', 'FMPO / Écoles de Santé (Endss)', 'UFR Sciences de la Santé (Saint-Louis, Thiès, Ziguinchor)', 'Écoles Hôtelières et Touristiques de Dakar & Saly'],
      salaryRangeFcfa: '200 000 à 600 000 FCFA / mois (accompagné d\'une grande sécurité et utilité publique)',
      vision2050Pillar: 'Justice Sociale, Éducation Universelle de Qualité & Santé pour Tous'
    },
    E: {
      code: 'E',
      name: 'Entreprenant',
      title: 'Le Leader & Stratège',
      icon: '💼',
      color: '#d97706', // Ambre doré
      gradient: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)',
      summary: 'Tu as l\'âme d\'un meneur : tu aimes convaincre, lancer des projets audacieux, fédérer des équipes et conquérir de nouveaux marchés.',
      description: 'Tu aimes l\'action, la négociation et les responsabilités. Tu n\'as pas peur de prendre des risques calculés pour transformer une opportunité en réussite concrète. Tu sais motiver, négocier et voir grand pour toi et pour les autres.',
      keyStrengths: ['Charisme & leadership d\'entraînement', 'Aisance relationnelle & force de persuasion', 'Vision stratégique & goût du challenge', 'Prise d\'initiative & résilience commerciale'],
      senegalFocus: 'Moteur de l\'écosystème : startups technologiques, commerce international, banques & microfinance, gestion de projets d\'envergure et développement de PME sénégalaises.',
      seriesBac: ['STEG (Sciences et Technologies de l\'Économie et de la Gestion)', 'S2 / S1', 'L2'],
      universities: ['FASEG / UCAD (Économie & Gestion)', 'UFR SEG Saint-Louis', 'Grandes Écoles de Commerce : ISM, IAM, BEM Dakar, CESAG', 'ESP (Section Gestion)'],
      salaryRangeFcfa: '350 000 à 1 200 000+ FCFA / mois (+ primes, commissions ou dividendes d\'entreprise)',
      vision2050Pillar: 'Compétitivité Économique, Hub Financier Régional & Entreprenariat Jeune'
    },
    C: {
      code: 'C',
      name: 'Conventionnel',
      title: 'L\'Organisateur & Garanti',
      icon: '📊',
      color: '#475569', // Ardoise acier
      gradient: 'linear-gradient(135deg, #475569 0%, #334155 100%)',
      summary: 'Tu excelles dans l\'organisation, la précision chiffrée, la méthode rigoureuse, la gestion administrative et le respect des règles.',
      description: 'Tu es le garant de la fiabilité. Grâce à toi, rien n\'est laissé au hasard : comptes exacts, conformité légale, processus logistiques sans faille et bases de données parfaitement structurées. On peut compter sur ton sérieux et ta loyauté.',
      keyStrengths: ['Précision chirurgicale & souci du détail', 'Fiabilité exemplaire & discrétion', 'Maîtrise des chiffres et réglementations', 'Sens aigu de la méthode et de la planification'],
      senegalFocus: 'Essentiel dans toutes les grandes entreprises, administrations fiscales (DGID, Douanes), cabinets d\'expertise comptable, banques de l\'UEMOA et plateformes logistiques du Port de Dakar.',
      seriesBac: ['STEG (Comptabilité, Gestion, Bureautique)', 'S1 / S2', 'L2 (pour Carrières Juridiques & Administratives)'],
      universities: ['FASEG UCAD (Comptabilité, Contrôle, Audit)', 'CESAG Dakar (Centre d\'Études Supérieures Africaines en Gestion)', 'ENAM (Administration Publique & Magistrature)', 'ISEP (Logistique & Banque)'],
      salaryRangeFcfa: '300 000 à 850 000 FCFA / mois (très forte stabilité et perspectives dans les institutions)',
      vision2050Pillar: 'Gouvernance Exemplaire, Sécurité Juridique & Efficacité Logistique'
    }
  };

  // 2. BANQUE DE QUESTIONS DU QUIZ (10 Questions Immersives & Contextualisées)
  const QUESTIONS = [
    {
      id: 1,
      category: 'Travail d\'équipe & Rôle naturel',
      question: 'Lors d\'un projet collectif ou d\'un travail de groupe, quel rôle prends-tu tout naturellement ?',
      options: [
        {
          id: '1A',
          icon: '🛠️',
          text: 'Je me concentre sur la fabrication, le montage pratique ou la réalisation technique concrète.',
          weights: { R: 3, C: 1 }
        },
        {
          id: '1B',
          icon: '🔬',
          text: 'Je creuse le sujet, analyse les données, vérifie les sources et structure les arguments scientifiques.',
          weights: { I: 3, C: 1 }
        },
        {
          id: '1C',
          icon: '🎨',
          text: 'Je m\'occupe de la mise en page, du design visuel, du storytelling et de la créativité de la présentation.',
          weights: { A: 3, S: 1 }
        },
        {
          id: '1D',
          icon: '💼',
          text: 'Je distribue les rôles, motive les troupes, surveille le calendrier et prends la parole devant le jury.',
          weights: { E: 3, S: 1 }
        }
      ]
    },
    {
      id: 2,
      category: 'Résolution de problèmes',
      question: 'Quand tu es confronté à une panne ou à un problème difficile, quel est ton premier réflexe ?',
      options: [
        {
          id: '2A',
          icon: '🔧',
          text: 'Démonter l\'objet, tester les pièces, mettre les mains dans le cambouis pour réparer immédiatement.',
          weights: { R: 3, I: 1 }
        },
        {
          id: '2B',
          icon: '🧠',
          text: 'Comprendre la cause racine en modélisant le système, en écrivant du code ou en lisant la documentation.',
          weights: { I: 3, R: 1 }
        },
        {
          id: '2C',
          icon: '💡',
          text: 'Imaginer une solution totalement inédite, décalée ou esthétique à laquelle personne n\'avait pensé.',
          weights: { A: 3, E: 1 }
        },
        {
          id: '2D',
          icon: '📋',
          text: 'Consulter la procédure officielle, vérifier les checklists étape par étape et sécuriser les processus.',
          weights: { C: 3, I: 1 }
        }
      ]
    },
    {
      id: 3,
      category: 'Environnement de travail idéal',
      question: 'Dans quel décor et rythme de travail te vois-tu le plus heureux et épanoui ?',
      options: [
        {
          id: '3A',
          icon: '🌾',
          text: 'Sur le terrain, sur un chantier, dans une exploitation agricole moderne ou une usine industrielle.',
          weights: { R: 3 }
        },
        {
          id: '3B',
          icon: '💻',
          text: 'Dans un laboratoire de pointe, un pôle R&D technologique ou devant des stations de data avancées.',
          weights: { I: 3, C: 1 }
        },
        {
          id: '3C',
          icon: '🏫',
          text: 'Au contact permanent de personnes : hôpital, centre de formation, ONG, communauté ou école.',
          weights: { S: 3, E: 1 }
        },
        {
          id: '3D',
          icon: '🏢',
          text: 'Dans une grande tour d\'affaires, une salle de réunion stratégique ou en déplacement avec des partenaires.',
          weights: { E: 3, C: 1 }
        }
      ]
    },
    {
      id: 4,
      category: 'Passions & Énergie personnelle',
      question: 'Durant tes week-ends ou ton temps libre, quelle activité te redonne le plus d\'énergie ?',
      options: [
        {
          id: '4A',
          icon: '📸',
          text: 'Dessiner, faire de la photo/vidéo, écrire, jouer d\'un instrument ou créer du contenu sur les réseaux.',
          weights: { A: 3 }
        },
        {
          id: '4B',
          icon: '🤝',
          text: 'Aider des amis à réviser, m\'investir dans une association solidaire, écouter et conseiller mes proches.',
          weights: { S: 3 }
        },
        {
          id: '4C',
          icon: '📈',
          text: 'Suivre les actualités économiques, investir, négocier des affaires ou imaginer de nouveaux commerces.',
          weights: { E: 3, C: 1 }
        },
        {
          id: '4D',
          icon: '🔍',
          text: 'Regarder des documentaires scientifiques, décoder des algorithmes, apprendre un nouveau langage tech.',
          weights: { I: 3 }
        }
      ]
    },
    {
      id: 5,
      category: 'Vision entrepreneuriale & Impact',
      question: 'Si tu avais les fonds pour créer un projet d\'envergure au Sénégal demain, tu choisirais :',
      options: [
        {
          id: '5A',
          icon: '🌱',
          text: 'Une ferme intelligente ou une centrale d\'énergie solaire produisant des ressources tangibles locales.',
          weights: { R: 3, E: 1 }
        },
        {
          id: '5B',
          icon: '🤖',
          text: 'Une startup d\'intelligence artificielle et de télémédecine révolutionnant l\'accès aux soins.',
          weights: { I: 3, E: 1 }
        },
        {
          id: '5C',
          icon: '🎬',
          text: 'Un studio créatif panafricain d\'animation, de jeux vidéo et de valorisation de la culture africaine.',
          weights: { A: 3, E: 1 }
        },
        {
          id: '5D',
          icon: '🏛️',
          text: 'Une banque d\'investissement solidaire ou une fintech régulée finançant les entrepreneurs africains.',
          weights: { E: 2, C: 2 }
        }
      ]
    },
    {
      id: 6,
      category: 'Matières & Disciplines préférées',
      question: 'Parmi ces matières scolaires ou universitaires, laquelle a toujours capté ton intérêt profond ?',
      options: [
        {
          id: '6A',
          icon: '📐',
          text: 'Dessin technique, technologie industrielle, physique appliquée ou travaux pratiques de mécanique.',
          weights: { R: 3 }
        },
        {
          id: '6B',
          icon: '🧬',
          text: 'Mathématiques pures, SVT, physique-chimie fondamentale, informatique et statistiques.',
          weights: { I: 3 }
        },
        {
          id: '6C',
          icon: '📚',
          text: 'Philosophie, littérature, langues vivantes, sociologie, histoire de l\'art ou communication.',
          weights: { A: 2, S: 2 }
        },
        {
          id: '6D',
          icon: '📑',
          text: 'Économie, gestion, droit des contrats, comptabilité analytique et organisation des entreprises.',
          weights: { C: 3, E: 1 }
        }
      ]
    },
    {
      id: 7,
      category: 'Outils de prédilection',
      question: 'Parmi cette sélection d\'outils, quel est celui que tu rêverais de manier avec une maîtrise absolue ?',
      options: [
        {
          id: '7A',
          icon: '🛸',
          text: 'Un drone agricole, une station totale de topographe ou une machine-outil à commande numérique.',
          weights: { R: 3, I: 1 }
        },
        {
          id: '7B',
          icon: '💻',
          text: 'Un environnement de développement Python/Data, des bibliothèques de machine learning et des serveurs cloud.',
          weights: { I: 3 }
        },
        {
          id: '7C',
          icon: '🎤',
          text: 'Un micro de conférencier, une tablette graphique professionnelle ou une caméra cinéma 4K.',
          weights: { A: 2, E: 2 }
        },
        {
          id: '7D',
          icon: '📊',
          text: 'Un progiciel ERP de gestion financière, des modèles de prévision budgétaire ou un terminal Bloomberg.',
          weights: { C: 3, E: 1 }
        }
      ]
    },
    {
      id: 8,
      category: 'Défis sociétaux & Ambition',
      question: 'Face aux grands défis du Sénégal et du continent africain d\'ici 2050, où veux-tu faire la différence ?',
      options: [
        {
          id: '8A',
          icon: '⚡',
          text: 'Assurer l\'indépendance énergétique et industrielle du pays grâce aux énergies propres et au gaz.',
          weights: { R: 2, I: 2 }
        },
        {
          id: '8B',
          icon: '🎓',
          text: 'Former la prochaine génération d\'élèves et d\'étudiants, et démocratiser la santé de qualité.',
          weights: { S: 3, I: 1 }
        },
        {
          id: '8C',
          icon: '🌍',
          text: 'Faire rayonner les marques et talents africains à l\'échelle mondiale par le storytelling et le design.',
          weights: { A: 3, E: 1 }
        },
        {
          id: '8D',
          icon: '⚖️',
          text: 'Structurer des institutions transparentes, des banques solides et une administration moderne sans corruption.',
          weights: { C: 2, E: 2 }
        }
      ]
    }
  ];

  // 3. MAPPING RIASEC VERS LES 23 FAMILLES DU SITE LE MONDE DU TRAVAIL
  const PROFILE_TO_FAMILIES = {
    R: [
      'btp-architecture',
      'agriculture-agritech',
      'energie-renouvelable',
      'industrie-mecanique',
      'peche-maritime',
      'elevage-veterinaire',
      'transport-logistique'
    ],
    I: [
      'numerique-ia',
      'cybersecurite-reseaux',
      'data-decision',
      'sante-soins-paramedical',
      'biologie-chimie',
      'sciences-terre-geosciences',
      'mines-geosciences',
      'environnement-developpement-durable'
    ],
    A: [
      'communication-marketing-medias-creation',
      'lettres-langues-sciences-humaines',
      'metiers-emergents'
    ],
    S: [
      'education-formation',
      'sante-soins-paramedical',
      'hotellerie-restauration-hospitalite',
      'droit-management'
    ],
    E: [
      'commerce-marketing',
      'finance-fintech',
      'droit-management',
      'communication-marketing-medias-creation',
      'metiers-emergents'
    ],
    C: [
      'finance-fintech',
      'droit-management',
      'transport-logistique',
      'commerce-marketing'
    ]
  };

  // 4. MOTEUR DE CALCUL DU SCORE ET SÉLECTION DES MÉTIERS COMPATIBLES
  function calculateScore(selectedOptionIds) {
    const rawScores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };

    QUESTIONS.forEach(q => {
      q.options.forEach(opt => {
        if (selectedOptionIds.includes(opt.id)) {
          Object.entries(opt.weights).forEach(([dim, weight]) => {
            rawScores[dim] = (rawScores[dim] || 0) + weight;
          });
        }
      });
    });

    const totalPoints = Object.values(rawScores).reduce((acc, v) => acc + v, 0) || 1;
    const percentages = {};
    Object.keys(rawScores).forEach(dim => {
      percentages[dim] = Math.round((rawScores[dim] / totalPoints) * 100);
    });

    // Trier les profils par score décroissant
    const sortedDims = Object.keys(rawScores).sort((a, b) => rawScores[b] - rawScores[a]);
    const dominantDim = sortedDims[0] || 'I';
    const secondaryDim = sortedDims[1] || 'E';

    return {
      rawScores,
      percentages,
      dominantCode: dominantDim,
      secondaryCode: secondaryDim,
      dominantProfile: PROFILES[dominantDim],
      secondaryProfile: PROFILES[secondaryDim],
      hollandCode: `${dominantDim}${secondaryDim}`
    };
  }

  // Filtrer les métiers d'excellence compatibles parmi la base de données
  async function getRecommendedJobs(hollandResult, limit = 6) {
    if (!window.OrientationData || !window.OrientationData.getAllJobs) {
      return [];
    }

    try {
      const allJobs = await window.OrientationData.getAllJobs();
      const targetFamilyIds = [
        ...(PROFILE_TO_FAMILIES[hollandResult.dominantCode] || []),
        ...(PROFILE_TO_FAMILIES[hollandResult.secondaryCode] || [])
      ];

      // Scorer chaque métier en fonction de son affinité avec les profils
      const scoredJobs = allJobs.map(job => {
        let score = 50; // Base de départ

        // Si le métier appartient directement à la famille dominante
        if ((PROFILE_TO_FAMILIES[hollandResult.dominantCode] || []).includes(job.familyId)) {
          score += 35;
        } else if ((PROFILE_TO_FAMILIES[hollandResult.secondaryCode] || []).includes(job.familyId)) {
          score += 20;
        }

        // Bonus d'affinité sémantique
        const textToAnalyze = `${job.title || ''} ${job.description || ''} ${job.skills || ''}`.toLowerCase();
        const profileKeywords = [
          ...(hollandResult.dominantProfile?.keyStrengths || []),
          ...(hollandResult.secondaryProfile?.keyStrengths || [])
        ];

        profileKeywords.forEach(kw => {
          const cleanKw = kw.toLowerCase().split(' ')[0];
          if (cleanKw.length > 3 && textToAnalyze.includes(cleanKw)) {
            score += 5;
          }
        });

        // Plafonner entre 72% et 98% pour un réalisme engageant
        const compatibility = Math.min(98, Math.max(72, score));

        return {
          ...job,
          compatibility
        };
      });

      // Trier par score décroissant
      scoredJobs.sort((a, b) => b.compatibility - a.compatibility);

      // Assurer une diversité de familles dans le top sélectionné
      const uniqueFamilyJobs = [];
      const seenFamilies = new Set();

      for (const job of scoredJobs) {
        if (!seenFamilies.has(job.familyId)) {
          uniqueFamilyJobs.push(job);
          seenFamilies.add(job.familyId);
        }
        if (uniqueFamilyJobs.length >= limit) break;
      }

      // Si pas assez avec familles uniques, compléter
      if (uniqueFamilyJobs.length < limit) {
        for (const job of scoredJobs) {
          if (!uniqueFamilyJobs.some(j => j.id === job.id)) {
            uniqueFamilyJobs.push(job);
          }
          if (uniqueFamilyJobs.length >= limit) break;
        }
      }

      return uniqueFamilyJobs;
    } catch (err) {
      console.error('[OrientationQuizData] Erreur lors de la sélection des métiers:', err);
      return [];
    }
  }

  // Export vers l'espace global
  window.OrientationQuizData = {
    PROFILES,
    QUESTIONS,
    PROFILE_TO_FAMILIES,
    calculateScore,
    getRecommendedJobs
  };

})();

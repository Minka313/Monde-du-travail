/**
 * CATALOGUE DES MÉTIERS DE LA FINANCE, BANQUE & ASSURANCE ENRICHI
 * Le Monde du Travail — 10 Domaines d'Excellence & Référentiel Pédagogique
 * Source documentaire principale : L'Étudiant (Secteur Banque & Assurance) + Observatoires FBF, France Assureurs & BCEAO
 * Total métiers documentés : 27 fiches détaillées haute profondeur
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. LES 10 DOMAINES DE LA FINANCE, BANQUE & ASSURANCE
  // =========================================================================
  const FINANCE_DOMAINS = [
    {
      id: 'banque-services-financiers',
      name: 'Banque & Services Financiers',
      icon: '🏦',
      description: 'Banque de détail, banque des professionnels, gestion des comptes, crédits d’investissement et commerce international.',
      subdomains: [
        'Banque de détail',
        'Banque professionnelle & PME',
        'Banque d’entreprise',
        'Banque privée',
        'Banque internationale & Commerce extérieur',
        'Relation client & Agence',
        'Conseil bancaire & Crédit'
      ]
    },
    {
      id: 'finance-marche',
      name: 'Finance de Marché',
      icon: '📈',
      description: 'Négociation d’actifs financiers, trading d’actions, obligations, devises, matières premières et gestion d’actifs.',
      subdomains: [
        'Marchés financiers & Bourse',
        'Trading & Exécution',
        'Analyse financière de marché',
        'Gestion d’actifs (Asset Management)',
        'Opérations de marché & Sales'
      ]
    },
    {
      id: 'finance-entreprise',
      name: 'Finance d’Entreprise',
      icon: '💼',
      description: 'Gestion de trésorerie d’entreprise, analyse de rentabilité, gestion du risque client, financements et fusions-acquisitions.',
      subdomains: [
        'Analyse financière d’entreprise',
        'Trésorerie & Financement',
        'Gestion du crédit client (Credit Management)',
        'Contrôle financier',
        'Fusions & Acquisitions (M&A)'
      ]
    },
    {
      id: 'comptabilite-audit',
      name: 'Comptabilité & Audit',
      icon: '🧾',
      description: 'Tenue des comptes, certification légale des états financiers, conformité aux normes comptables et audit financier préventif.',
      subdomains: [
        'Audit financier légal & contractuel',
        'Comptabilité générale & SYSCOHADA/IFRS',
        'Contrôle de gestion',
        'Commissariat aux comptes & Conseil'
      ]
    },
    {
      id: 'assurance-gestion-risques',
      name: 'Assurance & Gestion des Risques',
      icon: '🛡️',
      description: 'Conception, tarification et distribution des contrats d’assurance, expertise de sinistres, indemnisation et courtage.',
      subdomains: [
        'Souscription & Tarification des risques',
        'Gestion & Règlement des sinistres',
        'Courtage d’assurances',
        'Distribution & Agence générale',
        'Expertise technique de sinistres',
        'Conseil commercial & Prévoyance'
      ]
    },
    {
      id: 'actuariat',
      name: 'Actuariat & Modélisation',
      icon: '📊',
      description: 'Modélisation probabiliste et statistique de la longévité, des accidents, des aléas climatiques et de la solvabilité financière.',
      subdomains: [
        'Actuariat vie & santé',
        'Actuariat IARD & risques climatiques',
        'Modélisation quantitative & Solvabilité',
        'Statistiques financières',
        'Actuariat Big Data'
      ]
    },
    {
      id: 'patrimoine-investissement',
      name: 'Patrimoine & Investissement',
      icon: '🏠',
      description: 'Conseil aux familles et dirigeants dans l’optimisation patrimoniale, fiscale, successorale et l’investissement responsable.',
      subdomains: [
        'Gestion de patrimoine',
        'Conseil patrimonial & Ingénierie fiscale',
        'Investissement responsable (ISR / ESG)',
        'Private Banking & Family Office',
        'Immobilier de placement'
      ]
    },
    {
      id: 'risque-conformite-controle',
      name: 'Risque, Conformité & Contrôle',
      icon: '⚠️',
      description: 'Surveillance des risques opérationnels, de marché et de contrepartie, lutte anti-blanchiment (LCB-FT) et contrôle interne.',
      subdomains: [
        'Risk Management bancaire & assurantiel',
        'Conformité (Compliance) & Déontologie',
        'Lutte anti-blanchiment (LCB-FT)',
        'Contrôle interne & Inspection',
        'Réglementation prudentielle (Bâle III / Solvabilité II)'
      ]
    },
    {
      id: 'operations-back-office',
      name: 'Opérations & Back-Office',
      icon: '⚙️',
      description: 'Traitement administratif des virements, règlements/livraisons de titres, gestion de la vie des contrats d’assurance et flux bancaires.',
      subdomains: [
        'Gestion administrative des contrats d’assurance',
        'Traitement des opérations bancaires & virement',
        'Middle-office marchés & risques',
        'Back-office titres & règlements/livraisons'
      ]
    },
    {
      id: 'finance-numerique-fintech',
      name: 'Finance Numérique & FinTech',
      icon: '🚀',
      description: 'Mobile money, néobanques, IA financière, cybersécurité bancaire, blockchain, cryptomonnaies et solutions Cloud InsurTech.',
      subdomains: [
        'FinTech & Mobile Money',
        'InsurTech & digitalisation',
        'Finance & Data Science',
        'Cybersécurité financière',
        'Blockchain, Crypto-actifs & Smart Contracts',
        'Cloud bancaire & API Open Banking'
      ]
    }
  ];

  // =========================================================================
  // 2. LES 27 FICHES MÉTIERS DÉTAILLÉES (SOURCE L'ÉTUDIANT & OBSERVATOIRES)
  // =========================================================================
  const FINANCE_JOBS = [
    // -----------------------------------------------------------------------
    // 1. BANQUE & SERVICES FINANCIERS
    // -----------------------------------------------------------------------
    {
      id: 'charge-de-clientele',
      slug: 'charge-de-clientele',
      title: 'Chargé de Clientèle Banque',
      aliases: ['Conseiller Clientèle Particuliers', 'Conseiller Financier Agence', 'Gestionnaire de Comptes'],
      icon: '🤝',
      image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?w=800&auto=format&fit=crop&q=80',
      familyId: 'finance-fintech',
      familyName: 'Finance, Banque, Assurance & FinTech',
      domain: 'Banque & Services Financiers',
      domainId: 'banque-services-financiers',
      subdomain: 'Relation client & Agence',
      sourceLEtudiant: true,
      isEmerging: false,
      level: 'Bac +2 à Bac +3',
      salary: '🇫🇷 France : 28 000 € - 42 000 € brut/an (fixe + variable, Source : Apec / L’Étudiant) • 🇸🇳 Sénégal : 300 000 - 750 000 FCFA / mois',
      simpleDefinition: 'Le chargé de clientèle accueille, conseille et accompagne ses clients dans la gestion quotidienne de leur argent, l’obtention de crédits et le choix de solutions d’épargne.',
      shortDescription: 'Gère et développe un portefeuille de clients particuliers ou professionnels, propose des crédits, des assurances et des placements adaptés.',
      longDescription: 'Interlocuteur privilégié des clients en agence bancaire ou à distance, le chargé de clientèle analyse leur situation financière, évalue leur capacité d’emprunt et leur propose des solutions sur mesure : comptes courants, crédits immobiliers, crédits à la consommation, épargne et contrats de prévoyance. Il concilie sens de l’écoute, rigueur d’analyse des risques d’impayés et objectifs commerciaux.',
      mainObjective: 'Fidéliser et développer un portefeuille de clients tout en veillant à la maîtrise du risque de crédit.',
      companyRole: 'Visage de l’établissement bancaire, garant de la satisfaction client et premier rempart contre le surendettement.',
      workEnvironment: [
        '🏢 Agence bancaire avec accueil physique et bureau privé',
        '📞 Entretiens téléphoniques et visioconférences',
        '💻 Outils CRM, simulateurs de crédit et consoles bancaires'
      ],
      missions: {
        main: [
          'Instruire les demandes de prêts personnels, immobiliers ou professionnels',
          'Analyser les risques d’insolvabilité et vérifier les garanties financières',
          'Proposer des produits d’épargne, d’assurance-vie et de prévoyance',
          'Gérer les incidents de paiement et négocier des rééchelonnements de dettes'
        ],
        secondary: [
          'Mener des actions de prospection pour conquérir de nouveaux clients',
          'Veiller au respect des procédures de conformité KYC (Know Your Customer)'
        ]
      },
      typicalDay: [
        { time: '08:30', title: 'Consultation des alertes comptes', desc: 'Revue des soldes débiteurs et des chèques en attente d’autorisation de débit.' },
        { time: '10:00', title: 'Rendez-vous client emprunteur', desc: 'Montage d’un dossier de prêt immobilier avec simulation d’amortissement.' },
        { time: '14:30', title: 'Entretien d’épargne', desc: 'Conseil sur l’allocation d’un livret ou d’une assurance-vie selon les projets familiaux.' },
        { time: '16:45', title: 'Tâches administratives & conformité', desc: 'Saisie des pièces d’identité et justificatifs de revenus dans le logiciel bancaire.' }
      ],
      skills: {
        technical: ['Analyse de solvabilité & calcul d’endettement', 'Techniques de vente & négociation financière', 'Réglementation des crédits et de l’épargne', 'Conformité bancaire KYC / anti-blanchiment'],
        human: ['Aisance relationnelle & sens du contact', 'Écoute active & empathie', 'Rigueur administrative', 'Capacité de persuasion'],
        tools: ['Logiciels bancaires (Amplitude, Delta Bank, SAB)', 'CRM Salesforce / HubSpot', 'Simulateurs de crédit Excel'],
        analytical: ['Calcul d’intérêts composés', 'Évaluation de ratio charges/revenus']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac général, STMG ou technique', desc: 'Bases solides en mathématiques appliquées et communication.' },
          { step: 'Bac +2', title: 'BTS Banque, conseiller de clientèle (particuliers)', desc: 'Diplôme phare d’entrée rapide sur le marché bancaire.' },
          { step: 'Bac +3', title: 'Licence Pro mention Assurance, Banque, Finance', desc: 'Spécialisation chargé de clientèle particuliers ou professionnels.' }
        ],
        schools: [
          { name: 'CFA Banque / Réseau des universités', country: 'France', scope: 'France' },
          { name: 'Institut Supérieur de Management (ISM) Dakar', country: 'Sénégal', scope: 'Sénégal' },
          { name: 'CESAG Dakar — Banque & Finance', country: 'Sénégal', scope: 'Afrique' }
        ],
        certifications: ['Certification AMF (France)', 'Certification professionnelle bancaire CIB']
      },
      career: {
        sectors: ['Banques de réseau', 'Banques coopératives et mutualistes', 'Établissements de microfinance', 'Banques en ligne'],
        employerTypes: ['Banques commerciales (CBAO, SGBS, Ecobank, BNP Paribas, Crédit Agricole)', 'Institutions de microcrédit'],
        evolution: 'Chargé de clientèle particuliers ➔ Chargé de clientèle professionnels ➔ Conseiller en gestion de patrimoine ➔ Directeur d’agence bancaire',
        pros: 'Contact humain valorisant, diversité des situations de vie, opportunités d’évolution rapide en interne.',
        cons: 'Pression des objectifs commerciaux, gestion de clients parfois anxieux ou en difficulté financière.'
      },
      relatedJobSlugs: ['conseiller-bancaire', 'directeur-agence-bancaire', 'gestionnaire-patrimoine', 'conseiller-commercial-assurance'],
      connectedFamilies: ['commerce-marketing', 'droit-management'],
      resources: [
        { type: 'article', title: 'Le métier de chargé de clientèle expliqué par L’Étudiant', url: 'https://www.letudiant.fr/metiers/secteur/banque-assurance/charge-de-clientele-2.html', source: 'L’Étudiant' }
      ],
      sources: ['L’Étudiant', 'Fédération Bancaire Française (FBF)', 'BCEAO'],
      interests: ['negocier-convaincre', 'donnees-chiffres'],
      aiImpact: {
        level: 'Modéré',
        summary: 'L’IA automatise le pré-scoring de crédit et le traitement documentaire, recentrant le métier sur l’écoute empathique et le conseil personnalisé.',
        automatedTasks: ['Vérification des fiches de paie', 'Pré-calcul du taux d’endettement', 'Rédaction de courriers types'],
        emergingSkills: ['Maîtrise des simulateurs IA augmentés', 'Éthique de la recommandation financière'],
        humanEdge: 'La capacité à comprendre un projet de vie, à rassurer et à négocier des conditions sur mesure demeure irremplaçable.'
      },
      saviezVous: {
        statut: 'en_transformation',
        fait: 'Plus de 65 % des opérations bancaires courantes sont désormais initiées en ligne par les clients eux-mêmes sur application mobile.',
        pourquoi: 'La digitalisation pousse les agences physiques à devenir des centres d’expertise et de conseil à forte valeur ajoutée plutôt que de simples guichets de caisse.',
        a_retenir: 'Le métier se transforme vers un rôle d’accompagnateur patrimonial et de conseiller de projets d’envergure.'
      }
    },
    {
      id: 'conseiller-bancaire',
      slug: 'conseiller-bancaire',
      title: 'Conseiller Bancaire & Financier',
      aliases: ['Conseiller Financier', 'Conseiller d’Accueil Bancaire', 'Téléconseiller Bancaire'],
      icon: '💳',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
      familyId: 'finance-fintech',
      familyName: 'Finance, Banque, Assurance & FinTech',
      domain: 'Banque & Services Financiers',
      domainId: 'banque-services-financiers',
      subdomain: 'Conseil bancaire & Crédit',
      sourceLEtudiant: true,
      isEmerging: false,
      level: 'Bac +2 à Bac +3',
      salary: '🇫🇷 France : 24 000 € - 35 000 € brut/an (L’Étudiant) • 🇸🇳 Sénégal : 250 000 - 600 000 FCFA / mois',
      simpleDefinition: 'Premier contact des usagers de la banque, il répond aux demandes d’information, gère les opérations courantes et oriente vers les experts.',
      shortDescription: 'Accompagne les usagers au quotidien, propose les moyens de paiement et produits bancaires de base, détecte les besoins de financement.',
      longDescription: 'En agence ou au sein d’un centre de relation client multicanal, le conseiller bancaire guide les usagers sur leurs comptes, leurs cartes de paiement, la gestion de leur budget et leurs projets d’épargne. Il est attentif aux signaux faibles pour proposer des assurances de base ou orienter vers un conseiller spécialisé.',
      mainObjective: 'Offrir un accueil de qualité, résoudre les demandes courantes et amorcer la relation commerciale.',
      companyRole: 'Point d’ancrage de la confiance entre le client et l’institution bancaire.',
      workEnvironment: ['🏢 Agence bancaire ou plateforme de relation client', '💻 Téléphonie couplée à l’informatique (CTI)', '👥 Travail au sein d’une équipe commerciale'],
      missions: {
        main: ['Délivrer et configurer les cartes bancaires et accès web', 'Traiter les réclamations simples et demandes de découvert', 'Proposer des formules d’assurance pour moyens de paiement et habitat'],
        secondary: ['Participer aux campagnes de relance téléphonique', 'Contrôler les justificatifs réglementaires']
      },
      typicalDay: [
        { time: '09:00', title: 'Accueil et prise en charge', desc: 'Gestion des demandes d’opposition sur carte et délivrance de chéquiers.' },
        { time: '11:00', title: 'Rendez-vous ouverture de compte', desc: 'Accueil d’un jeune diplômé pour l’ouverture de son premier compte salarial.' },
        { time: '15:00', title: 'Phoning ciblé', desc: 'Appels aux clients pour leur présenter une offre d’assurance habitation.' }
      ],
      skills: {
        technical: ['Opérations bancaires courantes', 'Sécurité des moyens de paiement', 'Techniques d’accueil et d’orientation'],
        human: ['Patience et écoute active', 'Sens du service', 'Excellente expression orale et écrite'],
        tools: ['Système informatique bancaire', 'Outils de ticketing et messagerie sécurisée']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac général ou STMG', desc: 'Sens du contact et rigueur.' },
          { step: 'Bac +2', title: 'BTS Banque ou BTS Négociation et Digitalisation de la Relation Client (NDRC)', desc: 'Apprentissage des bases bancaires.' }
        ],
        schools: [
          { name: 'Centres de formation bancaire (CFPB)', country: 'France', scope: 'France' },
          { name: 'BEM Dakar — Filières Commerciales', country: 'Sénégal', scope: 'Sénégal' }
        ],
        certifications: ['Habilitation bancaire IOBSSP']
      },
      career: {
        sectors: ['Banques traditionnelles', 'Banques en ligne', 'Centres de relation client'],
        employerTypes: ['Banques de réseau', 'Filiales de paiement'],
        evolution: 'Conseiller bancaire ➔ Chargé de clientèle particuliers ➔ Chargé d’affaires PME',
        pros: 'Facilité d’accès avec un Bac+2, formation continue assurée par les banques.',
        cons: 'Répétitivité de certaines opérations, objectifs quantitatifs d’appels.'
      },
      relatedJobSlugs: ['charge-de-clientele', 'conseiller-commercial-assurance'],
      connectedFamilies: ['commerce-marketing'],
      resources: [{ type: 'article', title: 'Témoignage de Steeve, apprenti conseiller bancaire', url: 'https://www.letudiant.fr/metiers/secteur/banque-assurance/conseiller-bancaire-le-temoignage-de-steeve-apprenti.html', source: 'L’Étudiant' }],
      sources: ['L’Étudiant', 'Observatoire des Métiers de la Banque'],
      interests: ['negocier-convaincre'],
      aiImpact: { level: 'Élevé', summary: 'Les chatbots IA traitent les demandes simples, rehaussant l’exigence de compétence commerciale sur les appels complexes.', automatedTasks: ['Consultation de solde', 'Commande de chéquiers'], emergingSkills: ['Relation client omnicanale'], humanEdge: 'Gestion des réclamations sensibles et écoute humaine.' },
      saviezVous: { statut: 'en_transformation', fait: 'Les banques recrutent près de 40 % de leurs conseillers via l’alternance.', pourquoi: 'L’alternance permet d’acquérir à la fois la théorie financière et la posture commerciale face aux clients réels.', a_retenir: 'Une passerelle d’insertion professionnelle directe vers les métiers de la banque.' }
    },
    {
      id: 'directeur-agence-bancaire',
      slug: 'directeur-agence-bancaire',
      title: 'Directeur d’Agence Bancaire',
      aliases: ['Responsable d’Agence Bancaire', 'Manager de Point de Vente Bancaire'],
      icon: '🏢',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80',
      familyId: 'finance-fintech',
      familyName: 'Finance, Banque, Assurance & FinTech',
      domain: 'Banque & Services Financiers',
      domainId: 'banque-services-financiers',
      subdomain: 'Banque de détail',
      sourceLEtudiant: true,
      isEmerging: false,
      level: 'Bac +4/5',
      salary: '🇫🇷 France : De 2 500 € à 6 000 € brut/mois selon taille d’agence (L’Étudiant) • 🇸🇳 Sénégal : 900 000 - 2 500 000 FCFA / mois',
      simpleDefinition: 'Pilote l’activité commerciale, anime l’équipe de conseillers et garantit la conformité et la rentabilité d’une agence bancaire.',
      shortDescription: 'Manage l’agence, valide les crédits importants, veille à la maîtrise des risques et représente la banque dans le tissu économique local.',
      longDescription: 'Véritable chef d’entreprise à la tête de son point de vente, le directeur d’agence bancaire fixe les objectifs commerciaux de son équipe, supervise le développement du portefeuille clients, prend les décisions d’octroi des crédits à fort enjeu et veille au respect strict des normes réglementaires et prudentielles.',
      mainObjective: 'Développer le chiffre d’affaires de l’agence tout en garantissant la qualité de service et la maîtrise des risques financiers.',
      companyRole: 'Cadre dirigeant local assurant la déclinaison opérationnelle de la stratégie de la banque.',
      workEnvironment: ['🏢 Agence bancaire avec responsabilités de direction', '🤝 Représentation auprès des acteurs économiques locaux (notaires, chefs d’entreprise)', '📊 Pilotage par tableaux de bord'],
      missions: {
        main: ['Encadrer, motiver et former l’équipe de chargés de clientèle', 'Décider de l’octroi des crédits dépassant le pouvoir délégué des conseillers', 'Piloter le compte d’exploitation de l’agence et atteindre les objectifs financiers', 'Gérer les litiges clients graves et les dossiers contentieux'],
        secondary: ['Assurer la sécurité physique et informatique de l’agence', 'Représenter la banque lors des salons et réseaux d’affaires locaux']
      },
      typicalDay: [
        { time: '08:15', title: 'Briefing d’équipe matinal', desc: 'Partage des résultats de la veille, points de vigilance conformité et priorités du jour.' },
        { time: '10:30', title: 'Comité de crédit d’agence', desc: 'Examen des dossiers de prêts immobiliers et professionnels complexes.' },
        { time: '14:00', title: 'Rendez-vous client stratégique', desc: 'Entretien avec un chef d’entreprise pour le financement d’une flotte d’équipements.' },
        { time: '16:30', title: 'Pilotage financier & reporting', desc: 'Analyse du P&L de l’agence et transmission du rapport à la direction régionale.' }
      ],
      skills: {
        technical: ['Gestion de centre de profit bancaire', 'Analyse approfondie du risque de crédit', 'Droit bancaire et réglementation financière', 'Audit interne et sécurité des opérations'],
        human: ['Leadership et animation d’équipe', 'Capacité de décision sous pression', 'Sens de la négociation de haut niveau', 'Sens du devoir et intégrité'],
        tools: ['Outils de business intelligence bancaire', 'Logiciels d’octroi de crédits et de scoring']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac général ou économique', desc: 'Bases solides en mathématiques et économie.' },
          { step: 'Bac +3', title: 'Licence Économie-Gestion ou Banque', desc: 'Fondations en gestion d’entreprise.' },
          { step: 'Bac +5', title: 'Master Banque, Finance, Management ou Diplôme d’École de Commerce', desc: 'Préparation au management et à la gestion de risques.' }
        ],
        schools: [
          { name: 'Écoles de management & Universités', country: 'France', scope: 'France' },
          { name: 'CESAG Dakar — Master Management Bancaire', country: 'Sénégal', scope: 'Afrique' },
          { name: 'BEM Management School Dakar', country: 'Sénégal', scope: 'Sénégal' }
        ],
        certifications: ['Diplôme ITB (Institut Technique de Banque)', 'Certification Management Bancaire']
      },
      career: {
        sectors: ['Banques commerciales', 'Banques coopératives', 'Banques privées'],
        employerTypes: ['Grands groupes bancaires (Société Générale, BNP Paribas, Ecobank, Attijariwafa Bank)'],
        evolution: 'Directeur d’agence ➔ Directeur de groupe d’agences ➔ Directeur régional ➔ Directeur de réseau',
        pros: 'Autonomie managériale, responsabilités variées, statut de cadre respecté.',
        cons: 'Pression des résultats commerciaux, gestion d’incidents opérationnels imprévus.'
      },
      relatedJobSlugs: ['charge-de-clientele', 'gestionnaire-patrimoine', 'credit-manager'],
      connectedFamilies: ['droit-management'],
      resources: [{ type: 'article', title: 'Fiche métier Directeur d’agence bancaire', url: 'https://www.letudiant.fr/metiers/secteur/banque-assurance/directeur-d-agence-bancaire.html', source: 'L’Étudiant' }],
      sources: ['L’Étudiant', 'FBF'],
      interests: ['negocier-convaincre', 'donnees-chiffres'],
      aiImpact: { level: 'Modéré', summary: 'L’IA assiste le directeur dans le monitoring prédictif des risques de crédit et l’allocation des ressources d’agence.', automatedTasks: ['Reporting de performance', 'Détection d’anomalies dans les dossiers'], emergingSkills: ['Management d’équipes hybrides', 'Gouvernance de la data agence'], humanEdge: 'Leadership humain, résolution des crises relationnelles et décision finale d’octroi.' },
      saviezVous: { statut: 'valeur_sure', fait: 'Une agence bancaire moyenne gère un encours de crédits et d’épargne se chiffrant en dizaines de millions d’euros.', pourquoi: 'La responsabilité du directeur est comparable à celle d’un chef d’entreprise de PME avec une exigence éthique absolue.', a_retenir: 'Un poste clé d’encadrement à forte visibilité dans le secteur financier.' }
    },
    {
      id: 'banquier-commerce-international',
      slug: 'banquier-commerce-international',
      title: 'Banquier du Commerce International',
      aliases: ['Trade Finance Officer', 'Responsable Trade Finance', 'Chargé d’Affaires Internationales'],
      icon: '🌍',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
      familyId: 'finance-fintech',
      familyName: 'Finance, Banque, Assurance & FinTech',
      domain: 'Banque & Services Financiers',
      domainId: 'banque-services-financiers',
      subdomain: 'Banque internationale & Commerce extérieur',
      sourceLEtudiant: true,
      isEmerging: false,
      level: 'Bac +4/5',
      salary: '🇫🇷 France : De 2 100 € à 3 000 € brut/mois débutant, puis 4 500 €+ expérimenté (L’Étudiant) • 🇸🇳 Sénégal : 700 000 - 1 800 000 FCFA / mois',
      simpleDefinition: 'Sécurise et finance les transactions de marchandises et de services entre entreprises de pays différents (crédits documentaires, garanties).',
      shortDescription: 'Expert des flux financiers transfrontaliers, il met en place des crédits documentaires et des couvertures de change pour les importateurs et exportateurs.',
      longDescription: 'Indispensable aux échanges mondiaux, le banquier en commerce international conçoit des instruments financiers garantissant aux exportateurs qu’ils seront payés et aux importateurs qu’ils recevront la marchandise commandée. Il maîtrise les règles de la Chambre de Commerce Internationale (RUU 600, Incoterms) et protège les clients contre les risques politiques, de change et de solvabilité des pays partenaires.',
      mainObjective: 'Faciliter et sécuriser le financement des importations et exportations d’entreprises à l’échelle internationale.',
      companyRole: 'Pont financier stratégique ouvrant l’économie nationale aux échanges régionaux et mondiaux.',
      workEnvironment: ['🏢 Siège social ou pôle spécialisé Trade Finance de banque', '🌍 Échanges quotidiens en anglais avec des banques correspondantes mondiales', '💻 Réseau SWIFT et plateformes numériques de trade'],
      missions: {
        main: ['Émettre et vérifier des crédits documentaires (Credoc) et lettres de crédit stand-by', 'Structurer des garanties bancaires internationales (garanties de restitution d’acompte, de bonne exécution)', 'Conseiller les entreprises exportatrices sur la couverture du risque de change et pays', 'Assurer la conformité des opérations au regard des embargos et sanctions internationales'],
        secondary: ['Développer les relations avec les banques correspondantes étrangères', 'Former les entreprises clientes aux bonnes pratiques d’import-export']
      },
      typicalDay: [
        { time: '08:45', title: 'Vérification des messages SWIFT', desc: 'Réception des ouvertures de crédits documentaires transmises par des banques partenaires en Asie ou Europe.' },
        { time: '10:30', title: 'Audit documentaire', desc: 'Contrôle minutieux de conformité entre connaissements maritimes, factures commerciales et certificats d’inspection.' },
        { time: '14:00', title: 'Structuration de financement export', desc: 'Montage d’une facilité de préfinancement pour un exportateur de matières premières (arachide, cacao, minerai).' },
        { time: '16:00', title: 'Veille géopolitique et conformité', desc: 'Contrôle des contreparties dans les bases de données contre le blanchiment et le contournement d’embargos.' }
      ],
      skills: {
        technical: ['Règles et usances uniformes (RUU 600 / Incoterms 2020)', 'Instruments de Trade Finance (Credoc, Remdoc, Lettres de garantie)', 'Gestion du risque de change et des devises', 'Réseau interbancaire SWIFT (messages MT700/ISO 20022)', 'Droit commercial international'],
        human: ['Rigueur chirurgicale dans l’analyse des documents', 'Négociation multiculturelle', 'Réactivité face aux blocages portuaires ou douaniers'],
        tools: ['Réseau SWIFT', 'Logiciels Trade Finance (Misys, Finastra)', 'Plateformes de conformité World-Check'],
        analytical: ['Évaluation du risque souverain et pays', 'Analyse financière bilancielle']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac général ou technologique', desc: 'Anglais courant et goût pour les échanges mondiaux.' },
          { step: 'Bac +3', title: 'Licence Commerce International ou Économie', desc: 'Principes du commerce extérieur et logistique internationale.' },
          { step: 'Bac +5', title: 'Master Commerce International, Banque & Finance Internationale ou École de Commerce', desc: 'Ingénierie du Trade Finance et financements structurés.' }
        ],
        schools: [
          { name: 'Écoles de commerce et universités spécialisées Trade', country: 'France', scope: 'France' },
          { name: 'CESAG Dakar — Master Commerce & Finance Internationale', country: 'Sénégal', scope: 'Afrique' },
          { name: 'ESP Dakar — Filières Gestion & Logistique', country: 'Sénégal', scope: 'Sénégal' }
        ],
        certifications: ['CDCS (Certified Documentary Credit Specialist)', 'CSDG (Certificate for Specialists in Demand Guarantees)']
      },
      career: {
        sectors: ['Banques internationales', 'Grandes entreprises de négoce (Trading houses)', 'Bailleurs de fonds multilatéraux (BAD, Banque Mondiale)'],
        employerTypes: ['Départements Trade Finance des banques (BNP Paribas, Citi, Ecobank, Standard Chartered)'],
        evolution: 'Gestionnaire Trade Finance ➔ Responsable Crédits Documentaires ➔ Directeur du Trade Finance ➔ Directeur des Opérations Internationales',
        pros: 'Dimension internationale passionnante, pratique quotidienne de l’anglais, expertise technique très recherchée.',
        cons: 'Impact sévère d’une erreur de lecture documentaire (risques financiers élevés), décalages horaires.'
      },
      relatedJobSlugs: ['analyste-financier', 'credit-manager', 'responsable-conformite-compliance'],
      connectedFamilies: ['commerce-marketing', 'droit-management'],
      resources: [{ type: 'article', title: 'Fiche métier Banquier du commerce international', url: 'https://www.letudiant.fr/metiers/secteur/banque-assurance/banquier-du-commerce-international_2.html', source: 'L’Étudiant' }],
      sources: ['L’Étudiant', 'Chambre de Commerce Internationale (ICC)', 'BCEAO'],
      interests: ['donnees-chiffres', 'negocier-convaincre'],
      aiImpact: { level: 'Modéré', summary: 'L’intelligence artificielle et l’OCR automatisent l’analyse des documents maritimes, réduisant les délais de vérification.', automatedTasks: ['Lecture optique des factures et lettres de transport', 'Vérification automatisée des numéros de conteneurs'], emergingSkills: ['Digital Trade & Blockchain logistique'], humanEdge: 'Jugement critique sur les anomalies documentaires suspectes et arbitrage des litiges commerciaux.' },
      saviezVous: { statut: 'valeur_sure', fait: 'Plus de 80 % du commerce mondial dépend d’instruments de financement et de garanties de Trade Finance.', pourquoi: 'Sans crédit documentaire, la plupart des navires de marchandises ne quitteraient pas les ports par crainte d’impayés.', a_retenir: 'Un rouage fondamental et pérenne de la mondialisation économique.' }
    },

    // -----------------------------------------------------------------------
    // 2. FINANCE DE MARCHÉ
    // -----------------------------------------------------------------------
    {
      id: 'trader-operateur-marche',
      slug: 'trader-operateur-marche',
      title: 'Trader / Opérateur de Marché',
      aliases: ['Opérateur de Marché', 'Trader Actions / Devises', 'Market Maker', 'Négociateur de Valeurs'],
      icon: '📈',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80',
      familyId: 'finance-fintech',
      familyName: 'Finance, Banque, Assurance & FinTech',
      domain: 'Finance de Marché',
      domainId: 'finance-marche',
      subdomain: 'Trading & Exécution',
      sourceLEtudiant: true,
      isEmerging: false,
      level: 'Bac +5 (Master Finance de Marché / École d’Ingénieur)',
      salary: '🇫🇷 France : À partir de 3 700 € brut/mois débutant + primes significatives sur résultats (L’Étudiant) • 🇸🇳 Sénégal : 800 000 - 2 500 000 FCFA / mois + bonus',
      simpleDefinition: 'Achète et vend des actifs financiers (actions, devises, matières premières, obligations) en salle des marchés pour générer des gains tout en maîtrisant le risque.',
      shortDescription: 'Spécialiste de la négociation rapide en salle des marchés, il anticipe les fluctuations boursières pour optimiser les portefeuilles.',
      longDescription: 'Les yeux rivés sur plusieurs écrans diffusant les cours boursiers en temps réel, le trader prend des décisions d’achat et de vente en quelques secondes. Qu’il négocie pour le compte de clients (Sales Trader) ou pour son établissement (Trader pour compte propre), il analyse les flux macroéconomiques, structure des stratégies de couverture et exploite les micro-opportunités de marché tout en respectant des limites strictes de perte.',
      mainObjective: 'Maximiser le rendement des opérations de marché en saisissant les opportunités de cours dans un cadre de risque rigoureusement délimité.',
      companyRole: 'Générateur de liquidité et de rentabilité sur les marchés de capitaux pour sa banque ou société de gestion.',
      workEnvironment: ['🖥️ Salle des marchés dynamique et animée', '⚡ Prise de décision sous haute intensité temporelle', '📊 Terminaux financiers connectés en continu (Bloomberg, Reuters)'],
      missions: {
        main: ['Passer et exécuter les ordres d’achat/vente d’instruments financiers', 'Calculer les prix d’achat et de vente (cotation/spread) pour les clients', 'Surveiller les positions ouvertes et couvrir les risques de taux, de change ou de volatilité', 'Analyser les publications de banques centrales et indicateurs macroéconomiques'],
        secondary: ['Optimiser les algorithmes d’exécution d’ordres', 'Rédiger le compte-rendu quotidien des positions de trading']
      },
      typicalDay: [
        { time: '07:30', title: 'Revue des marchés asiatiques et overnight', desc: 'Analyse des clôtures des bourses de Tokyo et New York et des cours du pétrole et de l’or.' },
        { time: '09:00', title: 'Ouverture des bourses européennes / régionales', desc: 'Exécution des premiers ordres d’arbitrage et ajustement des spreads.' },
        { time: '14:30', title: 'Publication des statistiques américaines', desc: 'Forte volatilité lors de l’annonce des chiffres de l’emploi ou de l’inflation ; réajustement des positions.' },
        { time: '17:45', title: 'Clôture et calcul du P&L journalier', desc: 'Rapprochement des positions avec le middle-office et calcul du profit & loss de la journée.' }
      ],
      skills: {
        technical: ['Mathématiques financières & calcul stochastique', 'Produits dérivés (options, futures, swaps)', 'Microstructure des marchés financiers', 'Programmation d’analyse quantitative (Python, R, VBA)'],
        human: ['Résistance exceptionnelle au stress', 'Réactivité et lucidité immédiate', 'Discipline de fer et gestion de ses émotions', 'Sens de la stratégie'],
        tools: ['Bloomberg Terminal', 'Refinitiv Eikon', 'Python (pandas, numpy)', 'Plateformes d’exécution boursières']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac S ou filière à forte dominante mathématique', desc: 'Excellente maîtrise du calcul mental et des probabilités.' },
          { step: 'Bac +3', title: 'Licence Mathématiques-Informatique ou Économie quantitative', desc: 'Fondations solides en statistiques et modélisation.' },
          { step: 'Bac +5', title: 'Master 2 Finance de Marché / Diplôme Grande École d’Ingénieur ou de Commerce', desc: 'Cursus d’élite (type Master 203 Dauphine, El Karoui, Polytechnique, ENSAE).' }
        ],
        schools: [
          { name: 'Universités Paris-Dauphine, Sorbonne, Grandes Écoles', country: 'France', scope: 'France' },
          { name: 'Institut Africain de Finance (IAF) / CESAG', country: 'Sénégal', scope: 'Afrique' },
          { name: 'BEM Dakar — Master Finance de Marché', country: 'Sénégal', scope: 'Sénégal' }
        ],
        certifications: ['Certification AMF', 'CFA Level 1/2', 'CQF (Certificate in Quantitative Finance)']
      },
      career: {
        sectors: ['Banques d’investissement (BFI)', 'Sociétés de gestion d’actifs', 'Hedge Funds', 'Sociétés de Gestion et d’Intermédiation (SGI de la BRVM)'],
        employerTypes: ['Grandes banques internationales et régionales', 'Courtiers spécialisés'],
        evolution: 'Assistant Trader ➔ Trader Junior ➔ Senior Trader ➔ Head of Desk (Responsable de table) ➔ Gérant de Hedge Fund',
        pros: 'Métier stimulant intellectuellement, rémunération très attractive avec bonus liés à la performance.',
        cons: 'Niveau de stress élevé, journées intenses calées sur les horaires des places financières mondiales.'
      },
      relatedJobSlugs: ['analyste-financier', 'actuaire', 'gestionnaire-patrimoine'],
      connectedFamilies: ['data-decision', 'numerique-ia'],
      resources: [{ type: 'article', title: 'Fiche métier Opérateur de marché / Trader', url: 'https://www.letudiant.fr/metiers/secteur/banque-assurance/operateur-de-marche.html', source: 'L’Étudiant' }],
      sources: ['L’Étudiant', 'Autorité des Marchés Financiers (AMF)', 'BRVM'],
      interests: ['donnees-chiffres', 'resoudre-problemes'],
      aiImpact: { level: 'Très Élevé', summary: 'Le trading haute fréquence (THF) et les modèles d’apprentissage automatique exécutent une part majeure des ordres standard.', automatedTasks: ['Exécution algorithmique d’ordres', 'Détection d’arbitrages statistiques'], emergingSkills: ['Data Science appliquée au trading', 'Conception de bots quantitatifs'], humanEdge: 'Compréhension des mouvements géopolitiques imprévisibles et intuition sur les paniques de marché.' },
      saviezVous: { statut: 'en_transformation', fait: 'Plus de 70 % des volumes négociés sur les grands marchés boursiers sont désormais exécutés par des algorithmes automatisés.', pourquoi: 'Les traders modernes sont de plus en plus des profils quantitatifs capables de programmer et superviser des modèles autonomes.', a_retenir: 'L’expertise évolue de la négociation vocale traditionnelle vers le trading quantitatif assisté par l’IA.' }
    },
    {
      id: 'analyste-financier',
      slug: 'analyste-financier',
      title: 'Analyste Financier',
      aliases: ['Financial Analyst', 'Analyste Sell-Side / Buy-Side', 'Analyste Crédit & Investissement'],
      icon: '📊',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
      familyId: 'finance-fintech',
      familyName: 'Finance, Banque, Assurance & FinTech',
      domain: 'Finance d’Entreprise',
      domainId: 'finance-entreprise',
      subdomain: 'Analyse financière d’entreprise',
      sourceLEtudiant: true,
      isEmerging: false,
      level: 'Bac +4/5',
      salary: '🇫🇷 France : De 2 750 € à 5 250 € brut/mois (L’Étudiant) • 🇸🇳 Sénégal : 500 000 - 1 600 000 FCFA / mois',
      simpleDefinition: 'Étudie la santé financière, les bilans et les perspectives économiques des entreprises pour conseiller sur l’achat, la vente ou le financement.',
      shortDescription: 'Décortique les comptes d’entreprises, modélise les flux futurs et émet des recommandations stratégiques d’investissement.',
      longDescription: 'Expert de la valeur, l’analyste financier examine les états financiers, interroge les dirigeants, ausculte la concurrence et modélise les flux de trésorerie futurs (DCF). Qu’il travaille pour une société de bourse (Sell-Side) pour conseiller des investisseurs, pour un fonds de pension (Buy-Side) ou au sein d’une grande entreprise, ses recommandations guident des millions d’euros d’investissements.',
      mainObjective: 'Évaluer avec précision la valeur intrinsèque d’une entreprise et anticiper sa viabilité financière.',
      companyRole: 'Boussole analytique des comités d’investissement et des directions financières.',
      workEnvironment: ['🏢 Cabinet de conseil, banque d’affaires ou direction financière', '💻 Modélisation intensive sur tableurs', '📑 Analyse de rapports annuels et de données boursières'],
      missions: {
        main: ['Modéliser les prévisions de rentabilité et de flux de trésorerie (Discounted Cash Flows)', 'Calculer les ratios de solvabilité, de liquidité et de rentabilité des capitaux', 'Rédiger des notes d’analyse et recommander des décisions (Acheter / Conserver / Vendre)', 'Présenter les conclusions devant les comités de crédit ou investisseurs'],
        secondary: ['Participer aux audits d’évaluation lors d’opérations de fusions-acquisitions (Due Diligence)', 'Suivre l’actualité sectorielle et les politiques monétaires']
      },
      typicalDay: [
        { time: '08:30', title: 'Revue des actualités financières', desc: 'Analyse des résultats semestriels publiés par les sociétés cotées à la BRVM ou Euronext.' },
        { time: '10:15', title: 'Modélisation financière sous Excel', desc: 'Mise à jour d’un modèle de valorisation d’un groupe de télécommunications avec scénarios de sensibilité.' },
        { time: '14:00', title: 'Conférence téléphonique avec le management', desc: 'Échange avec le Directeur Financier (CFO) d’une entreprise cible sur ses marges opérationnelles.' },
        { time: '16:30', title: 'Rédaction de la note sectorielle', desc: 'Synthèse des perspectives de croissance du secteur des énergies renouvelables en Afrique de l’Ouest.' }
      ],
      skills: {
        technical: ['Analyse financière approfondie (IFRS, SYSCOHADA)', 'Modélisation financière prévisionnelle avancée (DCF, LBO, multiples)', 'Évaluation d’entreprises et d’actifs incorporels', 'Compréhension des marchés de capitaux'],
        human: ['Rigueur intellectuelle et esprit critique', 'Capacité de synthèse limpide', 'Excellente communication écrite et orale', 'Impartialité et éthique'],
        tools: ['Excel avancé (Power Query, macros)', 'Terminaux Bloomberg / FactSet', 'Outils de datavisualisation (Power BI)']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac général ou économique', desc: 'Excellentes bases en mathématiques et économie.' },
          { step: 'Bac +3', title: 'Licence Économie, Gestion ou Comptabilité-Finance', desc: 'Fondamentaux des états financiers.' },
          { step: 'Bac +5', title: 'Master Finance d’Entreprise / Diplôme d’École de Commerce ou d’Ingénieur', desc: 'Ingénierie financière, fusions-acquisitions, valorisation.' }
        ],
        schools: [
          { name: 'Grandes Écoles de Commerce & Universités Finance', country: 'France', scope: 'France' },
          { name: 'CESAG Dakar — Master Finance d’Entreprise', country: 'Sénégal', scope: 'Afrique' },
          { name: 'BEM Management School Dakar', country: 'Sénégal', scope: 'Sénégal' },
          { name: 'FASEG Université Cheikh Anta Diop', country: 'Sénégal', scope: 'Sénégal' }
        ],
        certifications: ['CFA (Chartered Financial Analyst)', 'FMVA (Financial Modeling & Valuation Analyst)']
      },
      career: {
        sectors: ['Banques d’affaires et d’investissement', 'Fonds de capital-investissement (Private Equity / Venture Capital)', 'Cabinets d’audit et de conseil (Big Four)', 'Grandes entreprises industrielles'],
        employerTypes: ['Sociétés de bourse', 'Fonds souverains', 'Institutions financières régionales (BOAD, BIDC)'],
        evolution: 'Analyste Junior ➔ Analyste Senior ➔ Chargé d’Affaires M&A ➔ Directeur Financier (CFO) ou Gestionnaire de Fonds',
        pros: 'Poste prestigieux, très formateur, offrant une compréhension globale du fonctionnement des entreprises.',
        cons: 'Horaires chargés lors de la saison des résultats comptables ou du bouclage d’opérations financières.'
      },
      relatedJobSlugs: ['trader-operateur-marche', 'auditeur-financier', 'credit-manager', 'gestionnaire-patrimoine'],
      connectedFamilies: ['data-decision', 'droit-management'],
      resources: [{ type: 'article', title: 'Fiche métier Analyste financier', url: 'https://www.letudiant.fr/metiers/secteur/banque-assurance/analyste-financier.html', source: 'L’Étudiant' }],
      sources: ['L’Étudiant', 'CFA Institute', 'SFAF'],
      interests: ['donnees-chiffres', 'resoudre-problemes'],
      aiImpact: { level: 'Modéré', summary: 'Les outils d’IA accélèrent l’extraction automatique des données de bilans et de rapports PDF, libérant du temps pour l’analyse stratégique.', automatedTasks: ['Saisie des ratios de base', 'Recherche d’occurrences dans les rapports annuels'], emergingSkills: ['Analyse de données ESG & durabilité', 'Prompting financier'], humanEdge: 'Interprétation qualitative de la stratégie des dirigeants et esprit critique.' },
      saviezVous: { statut: 'valeur_sure', fait: 'La certification CFA (Chartered Financial Analyst) est le passeport professionnel le plus reconnu au monde en finance.', pourquoi: 'Elle garantit une rigueur d’analyse et un respect des standards éthiques internationaux dans plus de 160 pays.', a_retenir: 'Un métier d’élite à forte mobilité géographique et aux perspectives durables.' }
    },
    {
      id: 'credit-manager',
      slug: 'credit-manager',
      title: 'Credit Manager / Responsable du Crédit Client',
      aliases: ['Gestionnaire du Crédit Client', 'Responsable du Recouvrement & Risque Client', 'Analyste Crédit Entreprise'],
      icon: '⚖️',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80',
      familyId: 'finance-fintech',
      familyName: 'Finance, Banque, Assurance & FinTech',
      domain: 'Finance d’Entreprise',
      domainId: 'finance-entreprise',
      subdomain: 'Gestion du crédit client (Credit Management)',
      sourceLEtudiant: true,
      isEmerging: false,
      level: 'Bac +4/5',
      salary: '🇫🇷 France : De 3 500 € à 6 200 € brut/mois (L’Étudiant) • 🇸🇳 Sénégal : 600 000 - 1 500 000 FCFA / mois',
      simpleDefinition: 'Fixe les limites de crédit accordées aux clients d’une entreprise, prévient les impayés et sécurise la trésorerie.',
      shortDescription: 'Arbitre entre développement des ventes et sécurisation de la trésorerie, surveille les encours clients et gère le recouvrement.',
      longDescription: 'À la croisée de la finance et du commerce, le Credit Manager analyse la santé financière des clients qui achètent à crédit ou avec des délais de paiement. Il accorde des lignes d’encours adaptées, souscrit des polices d’assurance-crédit et met en place des procédures de relance amiables et judiciaires pour éviter que des retards de paiement ne menacent la trésorerie de l’entreprise.',
      mainObjective: 'Accélérer les encaissements, minimiser le Besoin en Fonds de Roulement (BFR) et préserver la rentabilité.',
      companyRole: 'Gardien du cash et de la solvabilité de l’entreprise face aux aléas de paiement de ses partenaires.',
      workEnvironment: ['🏢 Direction financière d’une entreprise industrielle, commerciale ou de services', '💻 Outils d’ERP comptable et bases de données de solvabilité', '🤝 Coordination étroite avec les commerciaux et le service juridique'],
      missions: {
        main: ['Analyser la solvabilité des nouveaux clients et attribuer des plafonds de crédit', 'Négocier des garanties de paiement (cautions, lettres de crédit, assurances-crédit)', 'Surveiller les créances échues et piloter les plans de relance préventive et curative', 'Calculer et optimiser le DSO (Days Sales Outstanding — délai moyen de paiement)'],
        secondary: ['Gérer les dossiers de contentieux avec les avocats et huissiers', 'Sensibiliser les équipes commerciales aux risques d’impayés']
      },
      typicalDay: [
        { time: '08:45', title: 'Consultation du relevé des encaissements', desc: 'Rapprochement des virements clients reçus et mise à jour des comptes crédits.' },
        { time: '10:30', title: 'Analyse de dossier client pour un contrat majeur', desc: 'Étude des bilans d’un distributeur souhaitant un délai de 90 jours pour une commande de 100 millions FCFA.' },
        { time: '14:00', title: 'Médiation avec un directeur commercial', desc: 'Recherche d’une solution de garantie pour ne pas bloquer une vente importante sans faire courir de risque excessif.' },
        { time: '16:30', title: 'Revue des créances douteuses', desc: 'Transmission des dossiers irrécouvrables à l’assurance-crédit pour indemnisation.' }
      ],
      skills: {
        technical: ['Analyse financière du bilan et ratios de liquidité', 'Techniques de recouvrement amiable et judiciaire', 'Droit des contrats et des sûretés', 'Fonctionnement de l’assurance-crédit (Coface, Allianz Trade)'],
        human: ['Diplomatie et fermeté dans la négociation', 'Sens du compromis économique', 'Esprit d’investigation', 'Capacité de persuasion'],
        tools: ['ERP SAP / Oracle / Sage', 'Plateformes d’information financière (Infolégale, Altares, bases greffes)']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac général ou technologique STMG', desc: 'Aptitude pour la gestion et le droit.' },
          { step: 'Bac +3', title: 'Licence Gestion, Comptabilité ou Droit des Affaires', desc: 'Comptabilité générale et droit des contrats.' },
          { step: 'Bac +5', title: 'Master Finance d’Entreprise, Contrôle de Gestion ou Droit Bancaire', desc: 'Spécialisation en gestion des risques et trésorerie.' }
        ],
        schools: [
          { name: 'AFDCC (Association Française des Credit Managers)', country: 'France', scope: 'France' },
          { name: 'BEM Dakar / ISM — Filières Finance & Gestion', country: 'Sénégal', scope: 'Sénégal' }
        ],
        certifications: ['Certification AFDCC de Credit Manager']
      },
      career: {
        sectors: ['Grandes entreprises industrielles et de BTP', 'Sociétés de négoce et distribution', 'Entreprises de télécoms et d’énergie', 'Sociétés d’affacturage'],
        employerTypes: ['PME structurées, multinationales'],
        evolution: 'Analyste Crédit ➔ Credit Manager ➔ Trésorier de Groupe ➔ Directeur Financier',
        pros: 'Rôle stratégique d’arbitre au cœur de l’entreprise, forte reconnaissance par la direction générale.',
        cons: 'Tension fréquente entre l’envie de vendre des commerciaux et la nécessité de prudence financière.'
      },
      relatedJobSlugs: ['analyste-financier', 'auditeur-financier', 'charge-de-clientele'],
      connectedFamilies: ['droit-management', 'commerce-marketing'],
      resources: [{ type: 'article', title: 'Fiche métier Credit manager', url: 'https://www.letudiant.fr/metiers/secteur/banque-assurance/credit-manager-2.html', source: 'L’Étudiant' }],
      sources: ['L’Étudiant', 'AFDCC'],
      interests: ['donnees-chiffres', 'negocier-convaincre'],
      aiImpact: { level: 'Modéré', summary: 'L’IA évalue en temps réel la solvabilité des entreprises à partir de signaux faibles (retards de TVA, avis clients, flux bancaires).', automatedTasks: ['Scoring automatisé des petites créances', 'Envoi programmé de relances amiables'], emergingSkills: ['Credit Management prédictif'], humanEdge: 'Négociation délicate d’échéanciers personnalisés et maintien du lien commercial.' },
      saviezVous: { statut: 'valeur_sure', fait: 'Un quart des défaillances d’entreprises dans le monde sont causées par des impayés de clients.', pourquoi: 'Même rentable sur le papier, une entreprise dont les factures ne sont pas payées à temps peut se retrouver en cessation de paiements.', a_retenir: 'Le Credit Manager est le bouclier indispensable à la survie de la trésorerie des entreprises.' }
    },

    // -----------------------------------------------------------------------
    // 3. COMPTABILITÉ & AUDIT
    // -----------------------------------------------------------------------
    {
      id: 'auditeur-financier',
      slug: 'auditeur-financier',
      title: 'Auditeur Financier',
      aliases: ['Auditeur Légal', 'Auditeur Externe', 'Commissaire aux Comptes Junior/Senior'],
      icon: '🔍',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80',
      familyId: 'finance-fintech',
      familyName: 'Finance, Banque, Assurance & FinTech',
      domain: 'Comptabilité & Audit',
      domainId: 'comptabilite-audit',
      subdomain: 'Audit financier légal & contractuel',
      sourceLEtudiant: true,
      isEmerging: false,
      level: 'Bac +4/5',
      salary: '🇫🇷 France : À partir de 2 500 € brut/mois débutant (L’Étudiant) jusqu’à 5 000 €+ senior • 🇸🇳 Sénégal : 500 000 - 1 500 000 FCFA / mois',
      simpleDefinition: 'Vérifie la sincérité, la régularité et la conformité des comptes des entreprises pour rassurer actionnaires, banques et autorités.',
      shortDescription: 'Examine avec minutie les écritures comptables et les processus internes pour certifier la fiabilité des comptes annuels.',
      longDescription: 'Mandaté pour examiner les comptes d’une société, l’auditeur financier passe au crible les pièces justificatives, vérifie la réalité des stocks, s’assure que les dettes et créances sont bien comptabilisées et teste les contrôles informatiques internes. Ses constats permettent de certifier que les comptes donnent une image fidèle de la situation patrimoniale de l’entreprise.',
      mainObjective: 'Certifier la régularité et la sincérité des états financiers conformément aux normes en vigueur.',
      companyRole: 'Tiers de confiance indépendant garantissant la vérité des chiffres communiqués au public et aux marchés.',
      workEnvironment: ['🏢 Cabinets d’audit (Big Four ou cabinets régionaux)', '🚗 Déplacements fréquents chez les clients audités', '💻 Travail en équipe projet avec revues de travail hiérarchisées'],
      missions: {
        main: ['Contrôler la conformité des états financiers aux normes (SYSCOHADA, IFRS)', 'Réaliser des inventaires physiques inopinés et valider la valorisation des stocks', 'Tester la solidité du contrôle interne et identifier les zones de risque de fraude', 'Rédiger le rapport d’audit et formuler des recommandations d’amélioration'],
        secondary: ['Assister aux clôtures comptables et comités d’audit', 'Conseiller les entreprises lors d’opérations de restructuration']
      },
      typicalDay: [
        { time: '09:00', title: 'Installation dans les locaux du client', desc: 'Prise de contact avec le directeur comptable et recueil de la balance générale.' },
        { time: '10:30', title: 'Échantillonnage et tests de détail', desc: 'Sélection d’un échantillon de factures de vente pour vérifier la réalité des encaissements bancaires.' },
        { time: '14:30', title: 'Entretien sur les procédures d’achat', desc: 'Vérification de la séparation des tâches entre l’ordonnateur de dépense et le payeur.' },
        { time: '17:00', title: 'Synthèse des anomalies constatées', desc: 'Formalisation des feuilles de travail et discussion avec le manager d’audit.' }
      ],
      skills: {
        technical: ['Normes comptables internationales (SYSCOHADA révisé, IFRS)', 'Méthodologie d’audit et normes ISA', 'Fiscalité d’entreprise et droit des sociétés', 'Audit des systèmes d’information'],
        human: ['Rigueur analytique et curiosité d’enquêteur', 'Aisance relationnelle et diplomatie face aux audités', 'Résistance au stress des délais de clôture'],
        tools: ['Outils d’audit assisté par ordinateur (IDEA, Caseware)', 'Excel avancé', 'ERP SAP / Sage']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac général ou technologique STMG', desc: 'Goût pour la logique et la comptabilité.' },
          { step: 'Bac +3', title: 'DCG (Diplôme de Comptabilité et de Gestion) ou Licence Gestion', desc: 'Solides fondations en droit et comptabilité approfondie.' },
          { step: 'Bac +5', title: 'DSCG (Diplôme Supérieur de Comptabilité et de Gestion) ou Master CCA (Comptabilité, Contrôle, Audit)', desc: 'Diplôme de référence pour l’exercice de l’audit légal.' }
        ],
        schools: [
          { name: 'Universités (Masters CCA) et Écoles de Commerce', country: 'France', scope: 'France' },
          { name: 'CESAG Dakar — Master CCA', country: 'Sénégal', scope: 'Afrique' },
          { name: 'ESP Dakar — Département Gestion', country: 'Sénégal', scope: 'Sénégal' }
        ],
        certifications: ['DSCG / DEC (Diplôme d’Expertise Comptable)', 'CIA (Certified Internal Auditor)']
      },
      career: {
        sectors: ['Cabinets d’audit internationaux (PwC, EY, Deloitte, KPMG)', 'Cabinets d’expertise comptable régionaux', 'Direction de l’audit interne de grands groupes'],
        employerTypes: ['Cabinets d’audit et de conseil'],
        evolution: 'Auditeur Junior ➔ Auditeur Senior ➔ Manager d’Audit ➔ Associé de Cabinet ou Directeur Financier en entreprise',
        pros: 'Formation accélérée très valorisée sur le marché, tremplin de carrière exceptionnel vers les postes de direction.',
        cons: 'Période fiscale intense de janvier à mai avec fortes heures de travail, nombreux déplacements.'
      },
      relatedJobSlugs: ['analyste-financier', 'credit-manager', 'responsable-conformite-compliance'],
      connectedFamilies: ['droit-management'],
      resources: [{ type: 'article', title: 'Fiche métier Auditeur financier', url: 'https://www.letudiant.fr/metiers/secteur/banque-assurance/auditeur-financier.html', source: 'L’Étudiant' }],
      sources: ['L’Étudiant', 'Compagnie Nationale des Commissaires aux Comptes (CNCC)', 'ONECCA'],
      interests: ['donnees-chiffres', 'resoudre-problemes'],
      aiImpact: { level: 'Modéré', summary: 'L’IA effectue des contrôles exhaustifs sur 100 % des écritures comptables d’un grand livre en quelques minutes au lieu de simples sondages.', automatedTasks: ['Rapprochement bancaire automatisé', 'Détection des doublons et anomalies de TVA'], emergingSkills: ['Audit d’algorithmes financiers', 'Data analytics comptable'], humanEdge: 'L’esprit critique pour déceler les fraudes intentionnelles et le jugement sur les provisions.' },
      saviezVous: { statut: 'valeur_sure', fait: 'Les grands cabinets d’audit recrutent chaque année des centaines de jeunes diplômés dès la sortie d’école.', pourquoi: 'L’audit est considéré comme la meilleure école pratique pour apprendre le fonctionnement réel des entreprises.', a_retenir: 'Un des débouchés les plus stables et recherchés de toute la filière financière.' }
    },

    // -----------------------------------------------------------------------
    // 4. ASSURANCE & GESTION DES RISQUES
    // -----------------------------------------------------------------------
    {
      id: 'souscripteur-assurance',
      slug: 'souscripteur-assurance',
      title: 'Souscripteur en Assurance',
      aliases: ['Underwriter', 'Souscripteur Risques d’Entreprise', 'Tarificateur Assurance'],
      icon: '🛡️',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80',
      familyId: 'finance-fintech',
      familyName: 'Finance, Banque, Assurance & FinTech',
      domain: 'Assurance & Gestion des Risques',
      domainId: 'assurance-gestion-risques',
      subdomain: 'Souscription & Tarification des risques',
      sourceLEtudiant: true,
      isEmerging: false,
      level: 'Bac +4/5',
      salary: '🇫🇷 France : Entre 2 900 € et 6 200 € brut/mois avec l’expérience (L’Étudiant) • 🇸🇳 Sénégal : 600 000 - 1 700 000 FCFA / mois',
      simpleDefinition: 'Analyse les risques complexes (usines, flottes navales, chantiers BTP) pour décider si la compagnie d’assurance les accepte et à quel tarif.',
      shortDescription: 'Évalue la probabilité et le coût potentiel des sinistres industriels ou professionnels pour fixer le montant des primes et les clauses du contrat.',
      longDescription: 'Spécialiste de la pesée des risques d’envergure, le souscripteur examine les demandes d’assurance qui sortent des barèmes standardisés : plateformes pétrolières, risques cyber, chantiers d’infrastructures ou flottes d’avions. En lien avec les ingénieurs préventionnistes et les actuaires, il visite parfois les sites, fixe le montant de la prime d’assurance, détermine les franchises et rédige les conditions particulières de couverture.',
      mainObjective: 'Prendre en charge des risques assurables tout en protégeant l’équilibre financier de la compagnie d’assurance.',
      companyRole: 'Décideur stratégique engagé directement sur la rentabilité technique du portefeuille assurantiel.',
      workEnvironment: ['🏢 Compagnie d’assurance ou de réassurance', '🏭 Visites de sites industriels avec des ingénieurs de prévention', '💻 Outils de modélisation actuarielle et contractuelle'],
      missions: {
        main: ['Analyser les dossiers de risques industriels, maritimes, automobiles ou responsabilité civile', 'Fixer les conditions de tarification, limites de garantie et franchises', 'Négocier avec les courtiers d’assurances les aménagements contractuels', 'Transférer une part du risque aux réassureurs internationaux si les montants sont colossaux'],
        secondary: ['Suivre la sinistralité des contrats en cours et ajuster les primes à l’échéance', 'Rédiger des clauses contractuelles sur mesure']
      },
      typicalDay: [
        { time: '09:00', title: 'Étude d’un appel d’offres d’assurance', desc: 'Analyse des risques d’un nouvel aéroport ou d’une usine agro-industrielle.' },
        { time: '11:00', title: 'Échange technique avec l’ingénieur prévention', desc: 'Revue des dispositifs anti-incendie et des plans de continuité d’activité du client.' },
        { time: '14:30', title: 'Négociation avec le courtier', desc: 'Discussion sur le niveau de franchise et le montant de la prime globale annuelle.' },
        { time: '16:30', title: 'Cession en réassurance', desc: 'Placement de 40 % du risque auprès d’un réassureur (Munich Re, Swiss Re ou CICA-Re).' }
      ],
      skills: {
        technical: ['Droit des assurances (Code CIMA en Afrique francophone / Code des assurances)', 'Techniques de tarification et d’évaluation des risques', 'Techniques de réassurance (traités et facultatives)', 'Connaissance pointue des secteurs clients (BTP, maritime, cyber)'],
        human: ['Rigueur et sens de la mesure', 'Négociation commerciale ferme et argumentée', 'Esprit d’analyse de cas complexes'],
        tools: ['Logiciels de souscription métier', 'Outils de cartographie des risques géographiques']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac général ou scientifique', desc: 'Bonne maîtrise des mathématiques et de la logique.' },
          { step: 'Bac +3', title: 'Licence Droit, Économie ou Assurance', desc: 'Principes fondamentaux de la responsabilité et des contrats.' },
          { step: 'Bac +5', title: 'Master Droit des Assurances, Management des Risques ou Diplôme de l’ÉNASS / IFPASS', desc: 'Expertise reconnue dans le secteur de l’assurance.' }
        ],
        schools: [
          { name: 'ÉNASS (École Nationale d’Assurances) / IFPASS Paris', country: 'France', scope: 'France' },
          { name: 'Institut International des Assurances (IIA) Yaoundé', country: 'Cameroun', scope: 'Afrique' },
          { name: 'Institut Supérieur d’Assurance / BEM Dakar', country: 'Sénégal', scope: 'Sénégal' }
        ],
        certifications: ['Diplôme de Souscripteur International', 'Certification CII (Chartered Insurance Institute)']
      },
      career: {
        sectors: ['Compagnies d’assurances (AXA, Sanlam, Allianz, Sonam)', 'Sociétés de réassurance (Swiss Re, Africa Re, CICA Re)', 'Grands cabinets de courtage'],
        employerTypes: ['Assureurs directs et réassureurs'],
        evolution: 'Souscripteur Junior ➔ Souscripteur Senior Risques Spéciaux ➔ Directeur de la Souscription (Chief Underwriting Officer)',
        pros: 'Métier d’expertise pointu, contact avec des projets industriels passionnants, forte autonomie décisionnelle.',
        cons: 'Engage des sommes financières colossales, responsabilité morale en cas de sinistre imprévu mal tarifé.'
      },
      relatedJobSlugs: ['actuaire', 'expert-assurances', 'courtier-assurances', 'redacteur-assurances'],
      connectedFamilies: ['droit-management', 'industrie-mecanique'],
      resources: [{ type: 'article', title: 'Fiche métier Souscripteur en assurance', url: 'https://www.letudiant.fr/metiers/secteur/banque-assurance/souscripteur-d-assurances.html', source: 'L’Étudiant' }],
      sources: ['L’Étudiant', 'France Assureurs', 'Fédération des Sociétés d’Assurances de Droit National Africaines (FANAF)'],
      interests: ['donnees-chiffres', 'resoudre-problemes'],
      aiImpact: { level: 'Modéré', summary: 'L’IA assiste la tarification en croisant les données météo, sismiques et historiques d’accidents pour affiner les probabilités.', automatedTasks: ['Calcul des primes de référence', 'Vérification des antécédents de sinistralité'], emergingSkills: ['Souscription des cyber-risques et risques climatiques'], humanEdge: 'L’appréciation qualitative de la gouvernance et de la prévention humaine d’une entreprise.' },
      saviezVous: { statut: 'valeur_sure', fait: 'Certains contrats de souscription pour des satellites ou des plateformes offshore couvrent des risques dépassant le milliard d’euros.', pourquoi: 'Pour de tels montants, aucun algorithme ne décide seul : le regard critique du souscripteur et des réassureurs est indispensable.', a_retenir: 'Un métier d’élite au sommet de la technicité assurantielle.' }
    },
    {
      id: 'courtier-assurances',
      slug: 'courtier-assurances',
      title: 'Courtier d’Assurances',
      aliases: ['Courtier en Assurances', 'Consultant Courtage', 'Intermédiaire d’Assurance Indépendant'],
      icon: '🤝',
      image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&auto=format&fit=crop&q=80',
      familyId: 'finance-fintech',
      familyName: 'Finance, Banque, Assurance & FinTech',
      domain: 'Assurance & Gestion des Risques',
      domainId: 'assurance-gestion-risques',
      subdomain: 'Courtage d’assurances',
      sourceLEtudiant: true,
      isEmerging: false,
      level: 'Bac +3 à Bac +5',
      salary: '🇫🇷 France : Rémunération variable sous forme de commissions de courtage (L’Étudiant) • 🇸🇳 Sénégal : Commissions sur primes / 500 000 - 2 000 000+ FCFA / mois',
      simpleDefinition: 'Conseille ses clients en toute indépendance des compagnies d’assurance, compare les offres du marché et négocie les meilleurs contrats.',
      shortDescription: 'Mandataire de son client, il analyse ses risques, fait jouer la concurrence entre assureurs et défend ses intérêts lors des sinistres.',
      longDescription: 'À la différence de l’agent général qui représente une compagnie précise, le courtier d’assurances est mandaté par l’assuré (particulier ou entreprise). Il effectue un audit complet des risques, lance un appel d’offres auprès de multiples compagnies, compare les tarifs et garanties, et négocie le contrat le plus protecteur. En cas de sinistre, il accompagne son client face à l’assureur pour obtenir la meilleure indemnisation.',
      mainObjective: 'Optimiser la protection assurantielle de ses clients au meilleur coût en faisant jouer la concurrence entre compagnies.',
      companyRole: 'Conseiller juridique et financier indépendant défendant exclusivement les intérêts de l’assuré.',
      workEnvironment: ['🏢 Cabinet de courtage ou statut d’indépendant', '🤝 Rendez-vous chez les clients chefs d’entreprise', '📑 Comparatifs contractuels détaillés'],
      missions: {
        main: ['Réaliser un bilan complet des risques de l’entreprise cliente', 'Consulter le marché des compagnies d’assurances et négocier les conditions', 'Rédiger des propositions comparatives claires et transparentes', 'Défendre l’assuré lors du règlement des sinistres litigieux'],
        secondary: ['Suivre l’évolution des activités du client pour actualiser ses garanties', 'Assurer une veille réglementaire et juridique continue']
      },
      typicalDay: [
        { time: '09:00', title: 'Rendez-vous de découverte client', desc: 'Visite d’une entreprise de transport pour évaluer les risques de sa flotte de camions.' },
        { time: '11:30', title: 'Lancement d’un appel d’offres', desc: 'Transmission du cahier des charges à quatre compagnies d’assurance partenaires.' },
        { time: '14:30', title: 'Analyse comparative des devis reçus', desc: 'Mise en tableau des franchises, exclusions et tarifs proposés par les différents assureurs.' },
        { time: '16:30', title: 'Assistance sinistre client', desc: 'Point avec un expert d’assurance pour accélérer l’indemnisation d’un entrepôt inondé.' }
      ],
      skills: {
        technical: ['Connaissance panoramique des produits de toutes les compagnies', 'Droit des assurances et responsabilité civile', 'Techniques de négociation commerciale', 'Audit de risques'],
        human: ['Sens de l’écoute et impartialité', 'Capacité de conviction', 'Rigueur d’analyse contractuelle', 'Esprit d’entreprise'],
        tools: ['Logiciels de courtage (Novimex, Lya Protect)', 'Comparateurs professionnels d’assurance']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac général ou technologique STMG', desc: 'Aisance relationnelle et goût pour le droit.' },
          { step: 'Bac +3', title: 'BTS Assurance ou Licence Pro Courtage / Assurance', desc: 'Maîtrise des contrats et des conditions de souscription.' },
          { step: 'Bac +5', title: 'Master Droit des Assurances ou École Supérieure de Commerce', desc: 'Préparation à la direction de cabinet de courtage.' }
        ],
        schools: [
          { name: 'ÉNASS / IFPASS / Universités de Droit', country: 'France', scope: 'France' },
          { name: 'Institut International des Assurances (IIA)', country: 'Cameroun', scope: 'Afrique' },
          { name: 'CESAG Dakar — Pôle Assurance', country: 'Sénégal', scope: 'Sénégal' }
        ],
        certifications: ['Immatriculation ORIAS (France)', 'Agrément ministériel de courtier d’assurances (Zone CIMA)']
      },
      career: {
        sectors: ['Cabinets de courtage indépendants', 'Grands courtiers mondiaux (Marsh, Aon, Willis Towers Watson, Gras Savoye)'],
        employerTypes: ['Sociétés de courtage ou exercice en profession libérale'],
        evolution: 'Chargé de compte courtage ➔ Courtier associé ➔ Fondateur de son propre cabinet de courtage',
        pros: 'Grande liberté d’action, indépendance de conseil, potentiel de revenus élevé lié au portefeuille.',
        cons: 'Pression de la prospection commerciale, responsabilité professionnelle engagée en cas de défaut de conseil.'
      },
      relatedJobSlugs: ['agent-general-assurance', 'souscripteur-assurance', 'gestionnaire-patrimoine'],
      connectedFamilies: ['commerce-marketing', 'droit-management'],
      resources: [{ type: 'article', title: 'Fiche métier Courtier d’assurances', url: 'https://www.letudiant.fr/metiers/secteur/banque-assurance/courtier-d-assurances-2.html', source: 'L’Étudiant' }],
      sources: ['L’Étudiant', 'Chambre Syndicale des Courtiers d’Assurances (CSCA)', 'ORIAS'],
      interests: ['negocier-convaincre', 'proteger-defendre'],
      aiImpact: { level: 'Modéré', summary: 'Les comparateurs intelligents permettent d’analyser rapidement les clauses contractuelles concurrentes pour mettre en avant les écarts de garantie.', automatedTasks: ['Extraction automatique des franchises', 'Relance automatique d’échéance'], emergingSkills: ['Courtage digital (InsurTech)', 'Assurance des risques numériques'], humanEdge: 'La défense acharnée des intérêts du client face aux services contentieux des compagnies.' },
      saviezVous: { statut: 'valeur_sure', fait: 'Contrairement à une idée reçue, le courtier ne vend pas des contrats : il aide son client à en acheter après comparaison indépendante.', pourquoi: 'C’est ce statut juridique de mandataire du client qui garantit son impartialité face aux compagnies.', a_retenir: 'Un conseiller de confiance indispensable aux chefs d’entreprise.' }
    },
    {
      id: 'agent-general-assurance',
      slug: 'agent-general-assurance',
      title: 'Agent Général d’Assurance',
      aliases: ['Chef d’Agence d’Assurance', 'Assureur Conseil Mandataire'],
      icon: '🏢',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80',
      familyId: 'finance-fintech',
      familyName: 'Finance, Banque, Assurance & FinTech',
      domain: 'Assurance & Gestion des Risques',
      domainId: 'assurance-gestion-risques',
      subdomain: 'Distribution & Agence générale',
      sourceLEtudiant: true,
      isEmerging: false,
      level: 'Bac +3 à Bac +5',
      salary: '🇫🇷 France : Revenus issus des commissions de gestion de l’agence (L’Étudiant) • 🇸🇳 Sénégal : Rémunération liée au portefeuille / 500 000 - 1 800 000+ FCFA / mois',
      simpleDefinition: 'Professionnel libéral représentant une compagnie d’assurance sur un territoire, il conseille ses clients et gère son agence.',
      shortDescription: 'Entrepreneur indépendant lié par mandat à une compagnie d’assurance, il protège particuliers et entreprises de sa région.',
      longDescription: 'À la fois chef d’entreprise indépendant et ambassadeur d’une grande marque d’assurance (AXA, Allianz, Sanlam, etc.), l’agent général commercialise les contrats de sa compagnie, manage son équipe de collaborateurs, gère les sinistres courants de ses assurés et tisse des liens étroits avec la vie économique locale.',
      mainObjective: 'Développer et pérenniser son agence d’assurance tout en assurant un service de proximité de grande qualité.',
      companyRole: 'Visage territorial et entrepreneur indépendant partenaire d’une compagnie d’assurance.',
      workEnvironment: ['🏢 Agence commerciale ouverte au public', '👥 Encadrement d’une équipe de conseillers d’agence', '🤝 Ancrage local fort'],
      missions: {
        main: ['Conseiller les particuliers, artisans et PME sur leurs contrats d’assurance', 'Instruire et régler rapidement les sinistres du quotidien', 'Manager et animer les collaborateurs d’agence', 'Développer le portefeuille clients par la recommandation locale'],
        secondary: ['Garantir la conformité et la tenue des comptes de l’agence', 'Participer aux conventions du réseau de la compagnie']
      },
      typicalDay: [
        { time: '08:30', title: 'Organisation de la journée d’agence', desc: 'Point sur les dossiers de sinistres prioritaires et les rendez-vous clients prévus.' },
        { time: '10:00', title: 'Rendez-vous artisan local', desc: 'Souscription d’un contrat d’assurance décennale pour un entrepreneur du bâtiment.' },
        { time: '14:30', title: 'Gestion d’un dégât des eaux', desc: 'Déclenchement immédiat de l’expertise et validation de l’indemnisation de premier niveau.' },
        { time: '17:00', title: 'Gestion de l’agence', desc: 'Suivi de la comptabilité de l’agence et analyse des commissions perçues.' }
      ],
      skills: {
        technical: ['Droit et produits de l’assurance de la compagnie mandante', 'Gestion financière d’une agence indépendante', 'Techniques de vente et négociation', 'Gestion des sinistres courants'],
        human: ['Fibre entrepreneuriale', 'Sens du contact et empathie', 'Rigueur managériale et éthique'],
        tools: ['Outils informatiques de la compagnie mandante', 'CRM d’agence']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac général ou technologique', desc: 'Aisance relationnelle.' },
          { step: 'Bac +3', title: 'BTS Assurance, Licence Assurance ou Gestion', desc: 'Formation technique solide.' },
          { step: 'Bac +5', title: 'Master Assurance ou École de Commerce + Stage de formation obligatoire de la compagnie', desc: 'Habilitation officielle d’agent général.' }
        ],
        schools: [
          { name: 'Centres de formation des compagnies d’assurance', country: 'France', scope: 'France' },
          { name: 'Institut Supérieur d’Assurance Dakar', country: 'Sénégal', scope: 'Sénégal' }
        ],
        certifications: ['Habilitation professionnelle Agent Général (ORIAS / Direction des Assurances)']
      },
      career: {
        sectors: ['Réseaux d’agents généraux des compagnies d’assurances'],
        employerTypes: ['Profession libérale sous statut mandataire exclusif'],
        evolution: 'Reprise d’une petite agence ➔ Développement d’une multi-agence avec plusieurs points de vente',
        pros: 'Indépendance de chef d’entreprise associée à la force d’une grande marque d’assurance.',
        cons: 'Investissement initial pour le rachat du mandat d’agence, responsabilité sur fonds propres.'
      },
      relatedJobSlugs: ['courtier-assurances', 'conseiller-commercial-assurance', 'directeur-agence-bancaire'],
      connectedFamilies: ['commerce-marketing', 'droit-management'],
      resources: [{ type: 'article', title: 'Fiche métier Agent général d’assurance', url: 'https://www.letudiant.fr/metiers/secteur/banque-assurance/agent-general-d-assurances-2.html', source: 'L’Étudiant' }],
      sources: ['L’Étudiant', 'Agéa (Fédération nationale des syndicats d’agents généraux d’assurance)'],
      interests: ['negocier-convaincre', 'proteger-defendre'],
      aiImpact: { level: 'Modéré', summary: 'L’IA fluidifie les devis et la gestion des petits sinistres, permettant à l’agent général de se consacrer au conseil relationnel.', automatedTasks: ['Calcul instantané des tarifs auto et habitation', 'Télétransmission des constats amiables'], emergingSkills: ['Marketing digital local et présence sur les réseaux'], humanEdge: 'La présence physique lors d’un drame familial ou professionnel qui cimente la confiance.' },
      saviezVous: { statut: 'valeur_sure', fait: 'Les agents généraux exercent sous statut de profession libérale tout en représentant exclusivement une seule compagnie d’assurance.', pourquoi: 'Ce modèle allie la souplesse d’un entrepreneur local aux garanties financières d’un grand groupe international.', a_retenir: 'Un pilier de la proximité assurantielle au service des territoires.' }
    },
    {
      id: 'conseiller-commercial-assurance',
      slug: 'conseiller-commercial-assurance',
      title: 'Conseiller Commercial en Assurances',
      aliases: ['Chargé de Clientèle Assurance', 'Conseiller Prévoyance & Épargne', 'Attaché Commercial Assurance'],
      icon: '🛡️',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80',
      familyId: 'finance-fintech',
      familyName: 'Finance, Banque, Assurance & FinTech',
      domain: 'Assurance & Gestion des Risques',
      domainId: 'assurance-gestion-risques',
      subdomain: 'Conseil commercial & Prévoyance',
      sourceLEtudiant: true,
      isEmerging: false,
      level: 'Bac +2 à Bac +3',
      salary: '🇫🇷 France : Salaire fixe + commissions sur ventes (L’Étudiant) • 🇸🇳 Sénégal : 250 000 - 700 000 FCFA / mois + primes',
      simpleDefinition: 'Rencontre les particuliers et professionnels pour analyser leurs besoins de protection et leur proposer des contrats adaptés.',
      shortDescription: 'Développe la clientèle de l’assureur en proposant des garanties auto, habitation, santé, retraite et prévoyance.',
      longDescription: 'Sur le terrain ou en agence, le conseiller commercial en assurances identifie les risques qui pèsent sur la vie de ses clients : accidents, maladie, perte de revenus, dégâts matériels. Il conçoit des solutions d’assurance et de prévoyance sur mesure, explique les garanties avec clarté et négocie la souscription des contrats.',
      mainObjective: 'Protéger les familles et entreprises tout en développant le portefeuille de contrats de la compagnie.',
      companyRole: 'Force motrice du développement commercial et premier conseiller de protection des assurés.',
      workEnvironment: ['🏢 Agence d’assurance ou déplacements chez les clients', '📞 Prospection téléphonique et réseaux professionnels', '💻 Outils de devis et souscription électronique'],
      missions: {
        main: ['Prospecter de nouveaux clients particuliers, commerçants ou professions libérales', 'Établir des bilans de prévoyance et de couverture des biens', 'Présenter les offres, argumenter les garanties et conclure les ventes', 'Fidéliser les clients en adaptant leurs contrats aux changements de vie'],
        secondary: ['Organiser des réunions d’information auprès d’associations ou groupements professionnels']
      },
      typicalDay: [
        { time: '09:00', title: 'Prospection téléphonique et suivi de devis', desc: 'Appels aux prospects ayant réalisé des simulations en ligne.' },
        { time: '11:00', title: 'Rendez-vous bilan d’assurance chez un client', desc: 'Analyse des contrats d’assurance auto, habitation et mutuelle d’une famille.' },
        { time: '14:30', title: 'Signature d’un contrat prévoyance', desc: 'Souscription d’une assurance maintien de salaire pour un travailleur indépendant.' },
        { time: '16:30', title: 'Mise à jour des dossiers administratifs', desc: 'Validation des formulaires d’adhésion et enregistrement dans le logiciel d’assurance.' }
      ],
      skills: {
        technical: ['Gamme complète des contrats d’assurance vie et non-vie', 'Techniques de vente consultative et argumentation', 'Réglementation du démarchage et devoir de conseil'],
        human: ['Dynamisme commercial et ténacité', 'Écoute bienveillante', 'Aisance relationnelle immédiate'],
        tools: ['CRM commercial d’assurance', 'Outils de signature électronique et simulateurs de devis']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac général, STMG ou professionnel vente', desc: 'Sens du contact humain.' },
          { step: 'Bac +2', title: 'BTS Assurance, BTS NDRC ou BTS MCO', desc: 'Formation diplômante idéale pour démarrer.' },
          { step: 'Bac +3', title: 'Licence Pro Commercialisation des Produits d’Assurance', desc: 'Approfondissement des produits d’épargne et prévoyance.' }
        ],
        schools: [
          { name: 'IFPASS / Écoles de commerce', country: 'France', scope: 'France' },
          { name: 'Institut Supérieur de Management (ISM) Dakar', country: 'Sénégal', scope: 'Sénégal' }
        ],
        certifications: ['Capacité professionnelle en assurance niveau 1 / IAS']
      },
      career: {
        sectors: ['Compagnies d’assurances mutuelles', 'Bancassureurs', 'Sociétés de courtage'],
        employerTypes: ['Réseaux commerciaux salariés ou agences'],
        evolution: 'Conseiller commercial ➔ Conseiller expert entreprises ➔ Inspecteur commercial ➔ Directeur d’agence',
        pros: 'Nombreux postes ouverts aux jeunes diplômés, rémunération stimulante grâce aux primes.',
        cons: 'Pression des objectifs de vente mensuels, prospection active indispensable.'
      },
      relatedJobSlugs: ['agent-general-assurance', 'courtier-assurances', 'charge-de-clientele'],
      connectedFamilies: ['commerce-marketing'],
      resources: [{ type: 'article', title: 'Fiche métier Conseiller commercial en assurances', url: 'https://www.letudiant.fr/metiers/secteur/banque-assurance/conseiller-commercial-en-assurances.html', source: 'L’Étudiant' }],
      sources: ['L’Étudiant', 'France Assureurs'],
      interests: ['negocier-convaincre', 'proteger-defendre'],
      aiImpact: { level: 'Modéré', summary: 'L’IA qualifie les prospects en amont pour permettre au commercial de concentrer son énergie sur les rendez-vous à forte valeur.', automatedTasks: ['Rappels de devis automatiques', 'Génération d’offres personnalisées'], emergingSkills: ['Vente à distance en visioconférence'], humanEdge: 'Créer la confiance intime nécessaire pour parler de maladie, d’accident ou de décès.' },
      saviezVous: { statut: 'en_transformation', fait: 'Le devoir de conseil en assurance est une obligation légale stricte : le conseiller engage sa responsabilité s’il propose un produit inadapté.', pourquoi: 'L’objectif n’est pas de vendre à tout prix, mais de protéger durablement le client.', a_retenir: 'Un métier commercial exigeant une éthique rigoureuse.' }
    },
    {
      id: 'expert-assurances',
      slug: 'expert-assurances',
      title: 'Expert d’Assurances',
      aliases: ['Expert Sinistres', 'Expert Dommages', 'Expert Automobile / Bâtiment'],
      icon: '🔎',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80',
      familyId: 'finance-fintech',
      familyName: 'Finance, Banque, Assurance & FinTech',
      domain: 'Assurance & Gestion des Risques',
      domainId: 'assurance-gestion-risques',
      subdomain: 'Expertise technique de sinistres',
      sourceLEtudiant: true,
      isEmerging: false,
      level: 'Bac +3 à Bac +5',
      salary: '🇫🇷 France : Rémunération variable selon statut d’indépendant ou salarié (L’Étudiant) • 🇸🇳 Sénégal : 450 000 - 1 400 000 FCFA / mois',
      simpleDefinition: 'Se déplace sur les lieux d’un sinistre (incendie, accident, inondation) pour déterminer les causes des dégâts et chiffrer le montant des dommages.',
      shortDescription: 'Enquêteur technique indépendant, il évalue l’origine des sinistres et estime le montant exact des réparations et indemnisations.',
      longDescription: 'Après un incendie, un accident de la route, une catastrophe naturelle ou une malfaçon de chantier, l’expert d’assurances inspecte les lieux, interroge les témoins et recherche les causes précises de l’événement. Il vérifie que les dommages correspondent bien aux déclarations de l’assuré, s’assure de l’absence de fraude et remet un rapport d’expertise chiffré qui sert de base au versement des indemnités.',
      mainObjective: 'Déterminer les causes objectives d’un sinistre et chiffrer avec équité le montant de l’indemnisation.',
      companyRole: 'Tiers technique impartial garantissant la juste indemnisation sans surévaluation ni sous-évaluation.',
      workEnvironment: ['🚗 Déplacements constants sur le terrain (chantiers, habitations sinistrées, garages)', '📋 Rédaction de rapports techniques détaillés', '🤝 Réunions d’expertise contradictoire entre parties'],
      missions: {
        main: ['Examiner les dégâts matériels sur place et sécuriser les preuves techniques', 'Déterminer l’origine exacte du sinistre et rechercher d’éventuelles responsabilités de tiers', 'Chiffrer le coût des réparations ou de reconstruction à l’identique', 'Rédiger le rapport d’expertise opposable pour la compagnie d’assurance'],
        secondary: ['Détecter les incohérences techniques susceptibles de révéler une tentative de fraude', 'Préconiser des mesures conservatoires d’urgence pour éviter l’aggravation des dommages']
      },
      typicalDay: [
        { time: '08:30', title: 'Visite de sinistre incendie', desc: 'Examen des décombres d’un entrepôt commercial avec prélèvements pour identifier le point de départ du feu.' },
        { time: '11:30', title: 'Expertise contradictoire BTP', desc: 'Réunion sur un chantier avec l’architecte et le maître d’œuvre pour constater des fissures de façade.' },
        { time: '14:30', title: 'Chiffrage technique des devis', desc: 'Contrôle des devis de maçonnerie et d’électricité soumis par les artisans pour vérifier la cohérence des prix.' },
        { time: '16:45', title: 'Finalisation des rapports d’expertise', desc: 'Envoi des conclusions chiffrées aux compagnies d’assurance pour déclenchement des règlements.' }
      ],
      skills: {
        technical: ['Connaissances techniques pointues (BTP, mécanique automobile ou électronique)', 'Droit des assurances et responsabilité civile', 'Méthodologie d’investigation après sinistre', 'Économie de la construction et chiffrage de réparations'],
        human: ['Sens de l’observation et impartialité totale', 'Résistance aux pressions des parties en conflit', 'Pédagogie pour expliquer ses conclusions'],
        tools: ['Télémètres laser et caméras thermiques', 'Logiciels d’expertise et de chiffrage (Sidexa, Darva)', 'Drones d’inspection de toitures']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac général ou STI2D / Sciences', desc: 'Appétence technique et scientifique.' },
          { step: 'Bac +2 / +3', title: 'BTS Bâtiment, BTS Maintenance ou Licence Pro Expertise Sinistres', desc: 'Bases solides en ingénierie et matériaux.' },
          { step: 'Bac +5', title: 'Diplôme d’Ingénieur ou Master Droit des Assurances / Expertise', desc: 'Accès aux expertises complexes et judiciaires.' }
        ],
        schools: [
          { name: 'Écoles d’Ingénieurs (ESTP, INSA) & ÉNASS', country: 'France', scope: 'France' },
          { name: 'École Supérieure Polytechnique (ESP) Dakar', country: 'Sénégal', scope: 'Sénégal' }
        ],
        certifications: ['Agrément de la Fédération Française de l’Assurance (FFA)', 'Inscription sur la liste des experts judiciaires']
      },
      career: {
        sectors: ['Cabinets d’expertise indépendants', 'Compagnies d’assurance', 'Tribunaux (experts judiciaires)'],
        employerTypes: ['Cabinets d’expertise en sinistres ou exercice en profession libérale'],
        evolution: 'Expert Junior ➔ Expert Spécialiste Grands Sinistres Industriels ➔ Associé de cabinet d’expertise',
        pros: 'Grande variété d’enquêtes sur le terrain, travail captivant à la Sherlock Holmes technique, indépendance.',
        cons: 'Confrontation à des sinistrés en détresse émotionnelle, déplacements routiers quotidiens par tous les temps.'
      },
      relatedJobSlugs: ['souscripteur-assurance', 'redacteur-assurances', 'courtier-assurances'],
      connectedFamilies: ['btp-architecture', 'industrie-mecanique', 'droit-management'],
      resources: [{ type: 'article', title: 'Fiche métier Expert d’assurances', url: 'https://www.letudiant.fr/metiers/secteur/banque-assurance/expert-en-assurances-2.html', source: 'L’Étudiant' }],
      sources: ['L’Étudiant', 'Compagnie des Experts d’Assurance'],
      interests: ['resoudre-problemes', 'proteger-defendre'],
      aiImpact: { level: 'Modéré', summary: 'Les drones et l’analyse d’images par IA permettent d’inspecter les toitures et façades en quelques minutes après une tempête.', automatedTasks: ['Reconnaissance automatique des pièces auto froissées', 'Chiffrage standardisé de pièces'], emergingSkills: ['Pilotage de drones d’expertise', 'Analyse de données de capteurs IoT'], humanEdge: 'L’enquête humaine minutieuse pour déceler les départs de feu volontaires ou les fraudes organisées.' },
      saviezVous: { statut: 'valeur_sure', fait: 'En matière de sinistres majeurs, l’expert ne travaille pas pour faire économiser la compagnie : il est tenu à une stricte indépendance déontologique.', pourquoi: 'Ses conclusions doivent être opposables devant les tribunaux en cas de contentieux judiciaire.', a_retenir: 'Un métier d’autorité technique respecté au carrefour du droit et de l’ingénierie.' }
    },
    {
      id: 'redacteur-assurances',
      slug: 'redacteur-assurances',
      title: 'Rédacteur dans les Assurances / Gestionnaire Sinistres',
      aliases: ['Gestionnaire Sinistres Assurances', 'Rédacteur Sinistres Corporels / Matériels', 'Régleur Sinistres'],
      icon: '📑',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80',
      familyId: 'finance-fintech',
      familyName: 'Finance, Banque, Assurance & FinTech',
      domain: 'Assurance & Gestion des Risques',
      domainId: 'assurance-gestion-risques',
      subdomain: 'Gestion & Règlement des sinistres',
      sourceLEtudiant: true,
      isEmerging: false,
      level: 'Bac +2 à Bac +4',
      salary: '🇫🇷 France : Du SMIC à 2 300 € brut/mois débutant (L’Étudiant) jusqu’à 3 200 €+ expérimenté • 🇸🇳 Sénégal : 300 000 - 750 000 FCFA / mois',
      simpleDefinition: 'Prend en charge la déclaration de sinistre de l’assuré, vérifie les garanties du contrat et calcule l’indemnité financière à verser.',
      shortDescription: 'Instruit les dossiers de sinistres, applique le droit des assurances et déclenche le paiement des indemnisations dues aux victimes.',
      longDescription: 'Lorsqu’un assuré subit un accident de voiture, un vol ou un incendie, c’est le rédacteur dans les assurances qui instruit son dossier de bout en bout. Il vérifie que le contrat était bien à jour de cotisations, missionne l’expert, analyse les responsabilités juridiques entre compagnies adverses (conventions IRSA, IRSI), chiffre le préjudice et verse les indemnités financières.',
      mainObjective: 'Régler les dossiers de sinistres de manière juste, rapide et conforme aux clauses contractuelles.',
      companyRole: 'Cœur opérationnel de la promesse de l’assureur : indemniser efficacement au moment où l’assuré en a le plus besoin.',
      workEnvironment: ['🏢 Siège d’une compagnie d’assurance ou centre de gestion des sinistres', '💻 Logiciels spécialisés de gestion de sinistres et GED', '📞 Échanges réguliers avec les assurés, experts et avocats'],
      missions: {
        main: ['Réceptionner et enregistrer les déclarations de sinistres des assurés', 'Vérifier l’application des garanties et les éventuelles exclusions', 'Missionner les experts et ordonner les avances de fonds si nécessaire', 'Calculer le montant de l’indemnisation et procéder au règlement'],
        secondary: ['Exercer les recours légaux contre les compagnies des tiers responsables pour récupérer les fonds versés', 'Gérer les procédures amiables en cas de préjudice corporel']
      },
      typicalDay: [
        { time: '08:45', title: 'Traitement des nouvelles déclarations', desc: 'Analyse des constats amiables d’accidents de la route transmis sur l’application mobile.' },
        { time: '10:30', title: 'Lecture d’un rapport d’expertise', desc: 'Vérification du devis d’un carrossier et validation de l’indemnisation de l’assuré non responsable.' },
        { time: '14:00', title: 'Appel avec un assuré sinistré', desc: 'Explication pédagogique de l’application de la franchise contractuelle.' },
        { time: '16:30', title: 'Exercice de recours inter-compagnies', desc: 'Envoi d’un dossier de recours contre un tiers responsable pour remboursement des frais avancés.' }
      ],
      skills: {
        technical: ['Droit des assurances et de la responsabilité civile', 'Conventions inter-assurances de règlement de sinistres', 'Techniques d’évaluation des préjudices matériels et corporels', 'Procédures de recours subrogatoire'],
        human: ['Empathie et diplomatie face à des personnes en détresse', 'Rigueur juridique et méthode', 'Capacité de conciliation et de synthèse'],
        tools: ['Systèmes informatiques de gestion de sinistres', 'Logiciels de gestion électronique des documents (GED)']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac général ou technologique', desc: 'Sens de la rédaction et logique.' },
          { step: 'Bac +2', title: 'BTS Assurance ou DUT Carrières Juridiques', desc: 'Formation de référence très prisée des recruteurs.' },
          { step: 'Bac +3 / +4', title: 'Licence Pro Assurance ou Master 1 Droit Privé / Droit des Assurances', desc: 'Accès aux sinistres corporels complexes ou sinistres industriels.' }
        ],
        schools: [
          { name: 'IFPASS / Universités de Droit', country: 'France', scope: 'France' },
          { name: 'Institut International des Assurances (IIA)', country: 'Cameroun', scope: 'Afrique' },
          { name: 'UCAD Dakar — Faculté des Sciences Juridiques', country: 'Sénégal', scope: 'Sénégal' }
        ],
        certifications: ['Certification Professionnelle Règlement de Sinistres']
      },
      career: {
        sectors: ['Compagnies d’assurances', 'Sociétés de courtage', 'Mutuelles santé et prévoyance'],
        employerTypes: ['Centres de traitement des sinistres'],
        evolution: 'Rédacteur Sinistres Matériels ➔ Rédacteur Sinistres Corporels Graves ➔ Superviseur d’Équipe Sinistres ➔ Responsable Département Indemnisation',
        pros: 'Utilité sociale forte (aider des personnes à surmonter un accident), application concrète du droit, stabilité de l’emploi.',
        cons: 'Pression sur les délais de traitement des dossiers, gestion de clients parfois mécontents du montant de l’indemnité.'
      },
      relatedJobSlugs: ['expert-assurances', 'souscripteur-assurance', 'gestionnaire-contrats-assurance'],
      connectedFamilies: ['droit-management'],
      resources: [{ type: 'article', title: 'Fiche métier Rédacteur dans les assurances', url: 'https://www.letudiant.fr/metiers/secteur/banque-assurance/redacteur-dans-les-assurances.html', source: 'L’Étudiant' }],
      sources: ['L’Étudiant', 'France Assureurs'],
      interests: ['proteger-defendre', 'resoudre-problemes'],
      aiImpact: { level: 'Élevé', summary: 'L’IA traite les petits sinistres sans tiers (bris de glace, petits dégâts) en automatique, recentrant les rédacteurs sur les sinistres corporels et litigieux.', automatedTasks: ['Indemnisation automatique sur facture', 'Tri initial des constats'], emergingSkills: ['Médiation des conflits d’assurance'], humanEdge: 'Accompagner avec bienveillance une victime d’accident corporel grave.' },
      saviezVous: { statut: 'en_transformation', fait: 'C’est au moment d’un sinistre que l’assuré juge réellement la qualité de sa compagnie.', pourquoi: 'La rapidité et l’humanité du rédacteur sinistres sont le facteur n°1 de fidélisation ou de départ des clients.', a_retenir: 'Un métier fondamental où l’expertise juridique sert directement l’humain.' }
    },

    // -----------------------------------------------------------------------
    // 5. ACTUARIAT
    // -----------------------------------------------------------------------
    {
      id: 'actuaire',
      slug: 'actuaire',
      title: 'Actuaire',
      aliases: ['Ingénieur Actuaire', 'Modélisateur de Risques', 'Data Actuary', 'Analyste Quantitatif en Assurance'],
      icon: '📊',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
      familyId: 'finance-fintech',
      familyName: 'Finance, Banque, Assurance & FinTech',
      domain: 'Actuariat & Modélisation',
      domainId: 'actuariat',
      subdomain: 'Modélisation quantitative & Solvabilité',
      sourceLEtudiant: true,
      isEmerging: false,
      level: 'Bac +5 (Diplôme d’Actuaire certifié / Master Actuariat)',
      salary: '🇫🇷 France : De 2 900 € à 8 300 € brut/mois (L’Étudiant) • 🇸🇳 Sénégal : 900 000 - 2 800 000 FCFA / mois',
      simpleDefinition: 'Mathématicien du risque, il utilise les probabilités, la data et les statistiques pour calculer le coût futur des aléas et fixer les tarifs d’assurance.',
      shortDescription: 'Conçoit des modèles mathématiques prédictifs pour mesurer les risques financiers et garantir que l’assureur aura toujours les fonds pour indemniser.',
      longDescription: 'Véritable architecte mathématique de l’assurance et de la finance, l’actuaire évalue la probabilité d’événements futurs incertains : espérance de vie, accidents, épidémies, inondations, catastrophes climatiques ou krachs boursiers. En s’appuyant sur des millions de données statistiques, il calcule le juste prix des contrats d’assurance, détermine les réserves financières obligatoires et s’assure que la compagnie respecte les réglementations prudentielles (Solvabilité II).',
      mainObjective: 'Garantir la solvabilité financière à long terme des compagnies d’assurance et des caisses de retraite.',
      companyRole: 'Cerveau scientifique et garant légal de la pérennité financière de l’institution assurantielle.',
      workEnvironment: ['🏢 Siège social d’une compagnie d’assurance, de réassurance ou cabinet d’actuariat-conseil', '💻 Programmation mathématique et manipulation de bases de données massives', '📊 Présentation régulière devant la direction générale et les régulateurs'],
      missions: {
        main: ['Concevoir les formules mathématiques de tarification des nouveaux produits d’assurance', 'Calculer les provisions techniques (réserves financières) nécessaires au paiement des sinistres futurs', 'Modéliser les scénarios de crise financière et de catastrophes climatiques (Stress Testing)', 'Garantir la conformité aux normes réglementaires Solvabilité II et IFRS 17'],
        secondary: ['Optimiser les programmes de réassurance', 'Concevoir des algorithmes de scoring prédictif en intégrant le Big Data']
      },
      typicalDay: [
        { time: '09:00', title: 'Analyse de mortalité et de longévité', desc: 'Mise à jour des tables actuarielles de mortalité pour ajuster le tarif des rentes de retraite.' },
        { time: '11:00', title: 'Simulation de risques climatiques sous Python', desc: 'Modélisation probabiliste de l’impact de trois années consécutives de sécheresse sur le portefeuille agricole.' },
        { time: '14:30', title: 'Comité de solvabilité', desc: 'Présentation au Directeur Général du ratio de solvabilité prévisionnel à horizon 3 ans.' },
        { time: '16:45', title: 'Revue des modèles sous R / SQL', desc: 'Nettoyage des bases de sinistres pour tester un nouvel algorithme de machine learning.' }
      ],
      skills: {
        technical: ['Probabilités, statistiques avancées et processus stochastiques', 'Modélisation actuarielle vie et non-vie (GLM, tarification)', 'Réglementation prudentielle Solvabilité II et normes IFRS 17', 'Programmation scientifique (Python, R, SAS, SQL)'],
        human: ['Rigueur mathématique sans compromis', 'Curiosité intellectuelle insatiable', 'Capacité à vulgariser des concepts statistiques complexes aux dirigeants'],
        tools: ['Python (pandas, scikit-learn)', 'R & RStudio', 'SAS Actuariat', 'Logiciels spécialisés (Prophet, Moses, ResQ)', 'SQL avancé']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac S ou spécialités Mathématiques / Physique', desc: 'Excellence mathématique indispensable.' },
          { step: 'Bac +2', title: 'Classes Préparatoires (MPSI/MP) ou Licence Mathématiques', desc: 'Fondations solides en analyse et algèbre.' },
          { step: 'Bac +5', title: 'Diplôme d’Actuaire (Institut des Actuaires) ou Master Actuariat / Ingénierie Mathématique', desc: 'Titre d’actuaire hautement protégé et reconnu mondialement.' }
        ],
        schools: [
          { name: 'ISFA Lyon, ISUP Sorbonne, ENSAE Paris, Dauphine', country: 'France', scope: 'France' },
          { name: 'Institut Africain de Mathématiques et d’Actuariat (IAMA)', country: 'Bénin', scope: 'Afrique' },
          { name: 'AIMS Sénégal (Mbour) / ESP Dakar', country: 'Sénégal', scope: 'Afrique' }
        ],
        certifications: ['Membre certifié de l’Institut des Actuaires (France / International)']
      },
      career: {
        sectors: ['Compagnies d’assurance et mutuelles', 'Sociétés mondiales de réassurance', 'Caisses de retraite et de prévoyance', 'Cabinets d’actuariat-conseil (Milliman, Mazars, Big Four)', 'Banques et banques centrales'],
        employerTypes: ['Actuariat conseil ou compagnies institutionnelles'],
        evolution: 'Actuaire Junior ➔ Actuaire Senior ➔ Responsable de la Fonction Actuarielle ➔ Chief Risk Officer (Directeur des Risques) ou Directeur Général',
        pros: 'Salaires parmi les plus élevés du marché, plein-emploi quasi garanti dans le monde entier, statut professionnel très respecté.',
        cons: 'Études sélectives et très exigeantes en mathématiques, haute responsabilité réglementaire.'
      },
      relatedJobSlugs: ['actuaire-big-data', 'analyste-financier', 'souscripteur-assurance', 'risk-manager'],
      connectedFamilies: ['data-decision', 'sciences-biotech', 'numerique-ia'],
      resources: [{ type: 'article', title: 'Fiche métier Actuaire', url: 'https://www.letudiant.fr/metiers/secteur/banque-assurance/actuaire.html', source: 'L’Étudiant' }],
      sources: ['L’Étudiant', 'Institut des Actuaires', 'International Actuarial Association (IAA)'],
      interests: ['donnees-chiffres', 'resoudre-problemes'],
      aiImpact: { level: 'Élevé', summary: 'L’essor du Big Data et du machine learning transforme l’actuariat classique en « Actuariat augmenté », permettant une tarification ultra-personnalisée.', automatedTasks: ['Calculs de réserves standard', 'Extraction des données de sinistralité'], emergingSkills: ['Deep Learning appliqué au risque', 'Traitement des données d’objets connectés (IoT / télématique)'], humanEdge: 'La validation critique des hypothèses des modèles et la garantie éthique contre les biais discriminatoires.' },
      saviezVous: { statut: 'valeur_sure', fait: 'Le taux de chômage des actuaires diplômés est proche de zéro partout sur la planète.', pourquoi: 'La complexification des réglementations financières et l’intensification des risques climatiques rendent leur expertise plus indispensable que jamais.', a_retenir: 'L’un des métiers les plus prestigieux et pérennes de toute la sphère économique.' }
    },
    {
      id: 'actuaire-big-data',
      slug: 'actuaire-big-data',
      title: 'Actuaire Spécialisé en Big Data & IA',
      aliases: ['Data Actuary', 'Actuaire Data Scientist', 'Modélisateur Actuariel IA'],
      icon: '🤖',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop&q=80',
      familyId: 'finance-fintech',
      familyName: 'Finance, Banque, Assurance & FinTech',
      domain: 'Actuariat & Modélisation',
      domainId: 'actuariat',
      subdomain: 'Actuariat Big Data',
      sourceLEtudiant: true,
      isEmerging: true,
      level: 'Bac +5 (Master Actuariat & Data Science)',
      salary: '🇫🇷 France : De 3 500 € à 7 500 €+ brut/mois (L’Étudiant — Métier émergent) • 🇸🇳 Sénégal : 1 000 000 - 3 000 000 FCFA / mois',
      simpleDefinition: 'Combine les mathématiques actuarielles et l’intelligence artificielle pour exploiter des téraoctets de données (capteurs, météo, mobilité) et concevoir l’assurance de demain.',
      shortDescription: 'Pionnier de la data financière, il entraîne des modèles de machine learning pour tarifier sur mesure et prédire les comportements de risques.',
      longDescription: 'À la convergence de l’actuariat traditionnel et du génie logiciel de la Data Science, l’actuaire spécialisé en Big Data exploite de nouvelles sources de données massives : capteurs de conduite connectée, imagerie satellitaire des cultures agricoles, données de navigation web ou données biométriques de santé. Il conçoit des algorithmes d’apprentissage automatique capables d’adapter la prime d’assurance en temps réel tout en vérifiant la rigueur éthique des algorithmes.',
      mainObjective: 'Révolutionner la tarification et la détection précoce des sinistres grâce aux algorithmes d’intelligence artificielle et au Big Data.',
      companyRole: 'Fer de lance de l’innovation InsurTech au sein des directions techniques d’assurance.',
      workEnvironment: ['🏢 Lab d’innovation InsurTech ou direction actuarielle', '💻 Clusters de calcul cloud (AWS, Azure)', '👥 Collaboration quotidienne avec des Data Engineers et juristes'],
      missions: {
        main: ['Créer des modèles prédictifs de machine learning pour la tarification dynamique (Pay as you drive / Pay as you live)', 'Intégrer les données d’objets connectés et de capteurs IoT dans les modèles de risque', 'Automatiser la détection de fraudes complexes grâce au deep learning', 'Auditer les modèles d’IA pour éliminer les biais discriminatoires et respecter le RGPD'],
        secondary: ['Concevoir des architectures de données temps réel pour les sinistres climatiques', 'Publier des études de recherche en actuariat moderne']
      },
      typicalDay: [
        { time: '09:00', title: 'Exploration d’un jeu de données de télématique auto', desc: 'Analyse sous Python des accélérations et freinages de 50 000 conducteurs connectés.' },
        { time: '11:15', title: 'Entraînement d’un modèle Random Forest / XGBoost', desc: 'Optimisation des hyperparamètres pour prédire la probabilité de collision selon l’heure et la météo.' },
        { time: '14:30', title: 'Audit d’équité algorithmique', desc: 'Vérification que l’algorithme ne génère pas de discriminations indirectes interdites par la loi.' },
        { time: '16:30', title: 'Déploiement en production avec les MLOps', desc: 'Intégration du modèle prédictif dans l’API mobile de devis d’assurance.' }
      ],
      skills: {
        technical: ['Mathématiques actuarielles & théorie des risques', 'Machine Learning & Deep Learning (XGBoost, réseaux de neurones)', 'Big Data & Cloud distribué (Spark, Hadoop, AWS)', 'Traitement de données non structurées (texte, images satellites)'],
        human: ['Double culture mathématique et technologique', 'Éthique absolue dans l’usage des données personnelles', 'Créativité méthodologique'],
        tools: ['Python (pandas, scikit-learn, PyTorch)', 'PySpark & Databricks', 'R & RStudio', 'Git & Docker']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac S ou dominante Mathématiques / Informatique', desc: 'Passion pour le code et les maths.' },
          { step: 'Bac +3', title: 'Licence Mathématiques Appliquées & Informatique', desc: 'Algèbre, probabilités et algorithmique.' },
          { step: 'Bac +5', title: 'Double diplôme Actuaire + Master Data Science & IA', desc: 'Cursus d’excellence combinant finance et intelligence artificielle.' }
        ],
        schools: [
          { name: 'ENSAE Paris / Dauphine / ISFA', country: 'France', scope: 'France' },
          { name: 'AIMS Sénégal (Master Big Data & IA appliqué)', country: 'Sénégal', scope: 'Afrique' }
        ],
        certifications: ['Certification Actuaire Certifié', 'AWS Certified Machine Learning Specialist']
      },
      career: {
        sectors: ['InsurTech innovantes', 'Grands groupes d’assurance mondiaux', 'Cabinets de conseil en actuariat et IA'],
        employerTypes: ['Compagnies d’assurance pionnières et startups'],
        evolution: 'Data Actuary ➔ Lead Actuaire Data ➔ Chief Data & Analytics Officer en assurance',
        pros: 'Métier d’avant-garde ultra-recherché, au carrefour de deux compétences d’élite (Actuariat + IA).',
        cons: 'Nécessite une veille technologique permanente, équilibre délicat entre performance statistique et conformité réglementaire.'
      },
      relatedJobSlugs: ['actuaire', 'analyste-data-science-finance', 'architecte-cloud-assurance'],
      connectedFamilies: ['numerique-ia', 'data-decision'],
      resources: [{ type: 'article', title: 'L’actuaire spécialisé en Big Data : métier d’avenir de l’assurance', url: 'https://www.letudiant.fr/metiers/secteur/banque-assurance.html', source: 'L’Étudiant' }],
      sources: ['L’Étudiant', 'Institut des Actuaires', 'Observatoire de l’Évolution des Métiers de l’Assurance (OEMA)'],
      interests: ['donnees-chiffres', 'technologie-code', 'resoudre-problemes'],
      aiImpact: { level: 'Expert', summary: 'Ce professionnel est le concepteur même des modèles d’IA qui automatisent et transforment l’industrie de l’assurance.', automatedTasks: ['Traitement ETL des données brutes'], emergingSkills: ['IA générative appliquée aux polices d’assurance', 'Interprétabilité des modèles de boîte noire'], humanEdge: 'Garantir la conformité aux valeurs humaines et la sécurité financière globale.' },
      saviezVous: { statut: 'en_emergence', fait: 'Cité explicitement par L’Étudiant parmi les spécialisations les plus porteuses de la finance et de l’assurance.', pourquoi: 'La convergence des mégadonnées et des mathématiques probabilistes réinvente la prévention des catastrophes.', a_retenir: 'Un profil pionnier rare et extrêmement prisé sur les marchés mondiaux.' }
    },

    // -----------------------------------------------------------------------
    // 6. PATRIMOINE & INVESTISSEMENT
    // -----------------------------------------------------------------------
    {
      id: 'gestionnaire-patrimoine',
      slug: 'gestionnaire-patrimoine',
      title: 'Gestionnaire de Patrimoine',
      aliases: ['Conseiller en Gestion de Patrimoine (CGP)', 'Conseiller Patrimonial', 'Private Banker / Banquier Privé'],
      icon: '🏠',
      image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&auto=format&fit=crop&q=80',
      familyId: 'finance-fintech',
      familyName: 'Finance, Banque, Assurance & FinTech',
      domain: 'Patrimoine & Investissement',
      domainId: 'patrimoine-investissement',
      subdomain: 'Gestion de patrimoine',
      sourceLEtudiant: true,
      isEmerging: false,
      level: 'Bac +4/5',
      salary: '🇫🇷 France : De 2 500 € à 6 000 € brut/mois (L’Étudiant) jusqu’à 10 000 €+ pour les gestionnaires seniors et indépendants • 🇸🇳 Sénégal : 700 000 - 2 500 000 FCFA / mois',
      simpleDefinition: 'Conseille les familles et entrepreneurs pour protéger, faire fructifier et transmettre leur patrimoine (immobilier, bourse, succession).',
      shortDescription: 'Expert en ingénierie patrimoniale, fiscale et financière, il élabore des stratégies sur mesure pour valoriser les avoirs de ses clients.',
      longDescription: 'À la fois juriste, fiscaliste et financier d’élite, le gestionnaire de patrimoine réalise un bilan exhaustif des biens de ses clients (comptes bancaires, entreprises, biens immobiliers, œuvres d’art). Il bâtit une stratégie personnalisée d’optimisation fiscale, choisit les meilleurs investissements (assurance-vie, fonds d’actions, private equity, pierre-papier) et prépare la transmission successorale dans les meilleures conditions juridiques.',
      mainObjective: 'Optimiser la structure financière, fiscale et successorale du patrimoine de ses clients sur le long terme.',
      companyRole: 'Confident patrimonial stratégique des familles fortunées et des chefs d’entreprise.',
      workEnvironment: ['🏢 Banque privée, cabinet de conseil en gestion de patrimoine indépendant (CGPI) ou family office', '🤝 Entretiens personnalisés dans la plus stricte confidentialité', '📑 Rédaction d’études patrimoniales complexes'],
      missions: {
        main: ['Réaliser un audit patrimonial global (civil, fiscal, financier et prévoyance)', 'Définir une allocation d’actifs adaptée au profil de risque et aux objectifs du client', 'Proposer des placements financiers (assurance-vie, SCPI, PEA, FCPR) et investissements immobiliers', 'Organiser la transmission de patrimoine et la cession d’entreprises familiales'],
        secondary: ['Coordonner les actions avec les notaires, experts-comptables et avocats fiscalistes', 'Assurer une veille permanente sur les lois de finances et la fiscalité']
      },
      typicalDay: [
        { time: '09:00', title: 'Analyse d’une situation de succession', desc: 'Étude de l’impact fiscal d’une donation-partage pour les enfants d’un chef d’entreprise.' },
        { time: '11:00', title: 'Rendez-vous client investisseur', desc: 'Présentation d’une stratégie de diversification immobilière et d’assurance-vie multisupport.' },
        { time: '14:30', title: 'Point avec un notaire partenaire', desc: 'Rédaction des clauses bénéficiaires spécifiques d’un contrat d’assurance-vie.' },
        { time: '16:30', title: 'Revue des performances de portefeuille', desc: 'Vérification de l’adéquation des investissements avec les objectifs d’épargne fixés.' }
      ],
      skills: {
        technical: ['Droit civil de la famille (régimes matrimoniaux, successions)', 'Fiscalité des particuliers et des entreprises', 'Produits financiers et d’assurance-vie', 'Investissement immobilier locatif'],
        human: ['Discrétion et respect absolu du secret professionnel', 'Écoute psychologique et sens de l’empathie', 'Capacité de vulgarisation juridique'],
        tools: ['Logiciels de bilan patrimonial (Big Expert, Harvest)', 'Simulateurs fiscaux et d’assurance-vie']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac général ou économique', desc: 'Aisance générale en droit et calcul.' },
          { step: 'Bac +3', title: 'Licence Droit, Gestion ou Bachelor Gestion de Patrimoine', desc: 'Fondamentaux juridiques et financiers.' },
          { step: 'Bac +5', title: 'Master Gestion de Patrimoine / Ingénierie Patrimoniale ou Diplôme de Grande École', desc: 'Formation reine pour exercer le conseil patrimonial de haut niveau.' }
        ],
        schools: [
          { name: 'Universités Paris-Dauphine, Clermont-Ferrand, Lyon (Masters Gestion de Patrimoine)', country: 'France', scope: 'France' },
          { name: 'BEM Dakar — Master Banque Privée & Patrimoine', country: 'Sénégal', scope: 'Sénégal' },
          { name: 'ISM Dakar — Pôle Finance & Patrimoine', country: 'Sénégal', scope: 'Sénégal' }
        ],
        certifications: ['Certification AMF', 'Statut CIF (Conseiller en Investissements Financiers)', 'Carte T immobilière']
      },
      career: {
        sectors: ['Banques privées et banques de réseau', 'Cabinets de CGP indépendants', 'Compagnies d’assurance haut de gamme', 'Family Offices'],
        employerTypes: ['Banques privées ou exercice libéral'],
        evolution: 'Conseiller patrimonial junior ➔ Gestionnaire de fortune senior ➔ Directeur de la banque privée ou Fondateur de cabinet indépendant',
        pros: 'Relation client privilégiée dans la durée, métier transversal intellectuellement riche, revenus très attractifs.',
        cons: 'Exigence de confidentialité maximale, instabilité des règles fiscales nécessitant une actualisation continue.'
      },
      relatedJobSlugs: ['conseiller-investissement-responsable', 'charge-de-clientele', 'analyste-financier'],
      connectedFamilies: ['droit-management'],
      resources: [{ type: 'article', title: 'Fiche métier Gestionnaire de patrimoine', url: 'https://www.letudiant.fr/metiers/secteur/banque-assurance/gestionnaire-de-patrimoine_1.html', source: 'L’Étudiant' }],
      sources: ['L’Étudiant', 'Chambre Nationale des Conseils en Gestion de Patrimoine (CNCGP)'],
      interests: ['donnees-chiffres', 'negocier-convaincre'],
      aiImpact: { level: 'Modéré', summary: 'Les robo-advisors automatisent l’allocation standardisée, renforçant le rôle du gestionnaire humain sur le conseil successoral complexe et affectif.', automatedTasks: ['Génération automatique de rapports patrimoniaux', 'Rééquilibrage de portefeuilles'], emergingSkills: ['Finance verte et critères ESG', 'Patrimoine numérique et crypto-actifs'], humanEdge: 'Comprendre les dynamiques familiales, les peurs successorales et conseiller avec humanité.' },
      saviezVous: { statut: 'valeur_sure', fait: 'Dans les 15 prochaines années, la plus grande transmission de richesse intergénérationnelle de l’histoire moderne aura lieu dans le monde.', pourquoi: 'Des millions de familles auront besoin de gestionnaires de patrimoine pour structurer cette transmission sans déperdition fiscale.', a_retenir: 'Un métier d’avenir garanti par la démographie et l’accumulation de capital.' }
    },
    {
      id: 'conseiller-investissement-responsable',
      slug: 'conseiller-investissement-responsable',
      title: 'Conseiller en Investissement Responsable (ISR / ESG)',
      aliases: ['Analyste ESG', 'Consultant Finance Durable', 'Chargé d’Investissement Éthique'],
      icon: '🌱',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80',
      familyId: 'finance-fintech',
      familyName: 'Finance, Banque, Assurance & FinTech',
      domain: 'Patrimoine & Investissement',
      domainId: 'patrimoine-investissement',
      subdomain: 'Investissement responsable (ISR / ESG)',
      sourceLEtudiant: true,
      isEmerging: true,
      level: 'Bac +5 (Master Finance Durable / RSE)',
      salary: '🇫🇷 France : De 2 800 € à 5 500 € brut/mois (L’Étudiant — Métier émergent) • 🇸🇳 Sénégal : 600 000 - 1 800 000 FCFA / mois',
      simpleDefinition: 'Oriente l’épargne et les capitaux vers des entreprises qui respectent l’environnement, les droits sociaux et la bonne gouvernance (critères ESG).',
      shortDescription: 'Spécialiste de la finance verte et éthique, il audite les impacts environnementaux et sociétaux des placements pour concilier rentabilité et durabilité.',
      longDescription: 'Face à l’urgence climatique et aux attentes des citoyens, ce professionnel évalue les entreprises non seulement sur leurs bilans financiers, mais aussi sur leurs critères Environnementaux, Sociaux et de Gouvernance (ESG). Il sélectionne des fonds labellisés ISR (Investissement Socialement Responsable), des obligations vertes (Green Bonds) et conseille les épargnants soucieux de donner du sens à leur argent.',
      mainObjective: 'Canaliser les flux financiers vers des projets durables tout en assurant une performance financière compétitive.',
      companyRole: 'Moteur de la transition écologique et sociétale au sein des banques et sociétés de gestion.',
      workEnvironment: ['🏢 Société de gestion d’actifs éthiques ou banque privée', '📊 Analyse de rapports de durabilité extra-financière', '🌍 Échanges avec des ONG et auditeurs d’impact'],
      missions: {
        main: ['Évaluer les entreprises sur leur empreinte carbone, leur politique sociale et leur gouvernance', 'Sélectionner des fonds d’investissement labellisés (Greenfin, Label ISR, Finansol)', 'Accompagner les investisseurs privés et institutionnels dans leur politique d’impact positif', 'Mesurer et publier l’impact extra-financier des portefeuilles (tonnes de CO2 évitées)'],
        secondary: ['Dialoguer avec les entreprises en portefeuille pour les inciter à décarboner leurs activités', 'Assurer la conformité avec la réglementation européenne SFDR (Sustainable Finance Disclosure Regulation)']
      },
      typicalDay: [
        { time: '09:00', title: 'Veille sur les notations ESG', desc: 'Analyse des rapports publiés par les agences extra-financières (MSCI ESG, Sustainalytics).' },
        { time: '11:00', title: 'Audit d’un projet d’énergie solaire', desc: 'Évaluation de l’impact environnemental et sociétal d’une émission d’obligations vertes au Sénégal.' },
        { time: '14:30', title: 'Entretien avec un investisseur privé', desc: 'Proposition d’une allocation d’épargne orientée vers la transition écologique et l’inclusion locale.' },
        { time: '16:45', title: 'Calcul du bilan carbone d’un fonds', desc: 'Mesure de l’intensité carbone moyenne pondérée des actifs détenus.' }
      ],
      skills: {
        technical: ['Analyse financière et extra-financière (critères ESG)', 'Réglementation SFDR, taxonomie verte et labels durables', 'Compréhension des enjeux climatiques et de la biodiversité', 'Mesure d’impact et reporting de durabilité (CSRD)'],
        human: ['Conviction écologique et sociétale sincère', 'Rigueur méthodologique contre le greenwashing', 'Pédagogie et force de conviction'],
        tools: ['Bases de données ESG (Bloomberg ESG, MSCI)', 'Outils de calcul d’empreinte carbone']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac général ou économique', desc: 'Sensibilité aux enjeux sociétaux.' },
          { step: 'Bac +3', title: 'Licence Économie, Sciences Politiques ou Environnement', desc: 'Fondamentaux économiques et écologiques.' },
          { step: 'Bac +5', title: 'Master Finance Durable, RSE ou Diplôme d’École de Commerce spécialisée', desc: 'Expertise hybride en finance de marché et durabilité.' }
        ],
        schools: [
          { name: 'Écoles de Commerce & Universités (Masters Finance Verte)', country: 'France', scope: 'France' },
          { name: 'BEM Dakar — Master Management & RSE', country: 'Sénégal', scope: 'Sénégal' }
        ],
        certifications: ['CFA Certificate in ESG Investing', 'Certification AMF Finance Durable']
      },
      career: {
        sectors: ['Sociétés de gestion d’actifs durables', 'Banques de développement (AFD, Proparco, BOAD)', 'Fonds d’impact investing', 'Cabinets de conseil en durabilité'],
        employerTypes: ['Institutions financières engagées'],
        evolution: 'Analyste ESG Junior ➔ Conseiller en Investissement Responsable ➔ Directeur de la Gestion Durable (Chief Sustainability Officer)',
        pros: 'Sens profond au quotidien, secteur en explosion sous l’effet des réglementations climatiques mondiales.',
        cons: 'Risque de greenwashing à déjouer en permanence, complexité d’indicateurs non encore universellement standardisés.'
      },
      relatedJobSlugs: ['gestionnaire-patrimoine', 'analyste-financier', 'responsable-conformite-compliance'],
      connectedFamilies: ['environnement-climat', 'droit-management'],
      resources: [{ type: 'article', title: 'Le Conseiller en investissement responsable selon L’Étudiant', url: 'https://www.letudiant.fr/metiers/secteur/banque-assurance.html', source: 'L’Étudiant' }],
      sources: ['L’Étudiant', 'Principles for Responsible Investment (PRI)', 'Forum pour l’Investissement Responsable (FIR)'],
      interests: ['donnees-chiffres', 'nature-environnement'],
      aiImpact: { level: 'Modéré', summary: 'L’IA traite les données satellites et les rapports de durabilité pour repérer automatiquement les risques de pollution ou de déforestation des entreprises.', automatedTasks: ['Scan des controverses médiatiques', 'Extraction des données d’émissions carbone'], emergingSkills: ['IA appliquée à la taxonomie verte'], humanEdge: 'L’analyse éthique et la vérification terrain de la sincérité des engagements sociétaux.' },
      saviezVous: { statut: 'en_emergence', fait: 'Cité explicitement par L’Étudiant comme métier d’avenir né de la transformation sociétale du secteur financier.', pourquoi: 'La réglementation européenne et les exigences citoyennes imposent désormais que chaque épargnant soit interrogé sur ses préférences environnementales.', a_retenir: 'Un métier au cœur du basculement historique vers une économie bas-carbone.' }
    },

    // -----------------------------------------------------------------------
    // 7. RISQUE, CONFORMITÉ & CONTRÔLE
    // -----------------------------------------------------------------------
    {
      id: 'risk-manager',
      slug: 'risk-manager',
      title: 'Risk Manager / Responsable de la Gestion des Risques',
      aliases: ['Gestionnaire des Risques Financiers', 'Analyste Risques Opérationnels', 'Chief Risk Officer (CRO)'],
      icon: '⚠️',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80',
      familyId: 'finance-fintech',
      familyName: 'Finance, Banque, Assurance & FinTech',
      domain: 'Risque, Conformité & Contrôle',
      domainId: 'risque-conformite-controle',
      subdomain: 'Risk Management bancaire & assurantiel',
      sourceLEtudiant: true,
      isEmerging: false,
      level: 'Bac +5 (Master Gestion des Risques / Écoles d’Ingénieur)',
      salary: '🇫🇷 France : De 3 200 € à 7 000 € brut/mois (Source : L’Étudiant / Observatoire bancaire) • 🇸🇳 Sénégal : 800 000 - 2 200 000 FCFA / mois',
      simpleDefinition: 'Identifie, évalue et contrôle tous les dangers pouvant menacer une banque ou un assureur (crédits impayés, failles informatiques, fraudes, aléas de marché).',
      shortDescription: 'Cartographie les vulnérabilités de l’établissement financier et met en place des garde-fous pour éviter les pertes financières majeures.',
      longDescription: 'Sentinelle de l’institution financière, le Risk Manager scrute en permanence l’environnement interne et externe. Il modélise les pertes maximales possibles (Value at Risk), surveille le risque de non-remboursement des crédits, anticipe les cyberattaques et met en place des plans de continuité d’activité pour qu’en cas de séisme financier ou informatique, la banque continue de fonctionner.',
      mainObjective: 'Anticiper et atténuer tous les risques financiers, opérationnels et stratégiques pour préserver la solvabilité.',
      companyRole: 'Contre-pouvoir indépendant et garant de la sécurité systémique de l’institution.',
      workEnvironment: ['🏢 Siège social bancaire ou salle des marchés', '📊 Tableaux de bord de risques consolidés', '📑 Reporting aux régulateurs prudentiels (BCEAO, BCE, ACPR)'],
      missions: {
        main: ['Établir et actualiser la cartographie générale des risques de l’établissement', 'Définir les limites de tolérance au risque pour les salles de marchés et les prêts', 'Réaliser des simulations de résistance aux chocs extrêmes (Stress Tests)', 'Contrôler la conformité aux ratios prudentiels internationaux (Bâle III / Solvabilité II)'],
        secondary: ['Former les collaborateurs à la culture du risque', 'Piloter les cellules de crise lors d’incidents opérationnels majeurs']
      },
      typicalDay: [
        { time: '08:30', title: 'Monitoring des indicateurs de risque de marché', desc: 'Vérification du respect des limites de Value at Risk (VaR) par les traders.' },
        { time: '10:30', title: 'Audit d’un risque opérationnel', desc: 'Revue des protocoles de sécurité suite à une tentative d’intrusion sur une plateforme de paiement.' },
        { time: '14:30', title: 'Simulation de crise financière', desc: 'Stress test modélisant l’impact d’une hausse brutale des taux d’intérêt sur les marges bancaires.' },
        { time: '16:45', title: 'Rapport au comité des risques', desc: 'Présentation des conclusions trimestrielles aux membres du Conseil d’Administration.' }
      ],
      skills: {
        technical: ['Cadres réglementaires prudentiels (Bâle III/IV, Solvabilité II)', 'Méthodes quantitatives d’évaluation des risques (VaR, backtesting)', 'Audit des processus et contrôle interne', 'Cartographie des risques et plans de continuité'],
        human: ['Indépendance d’esprit et courage managérial', 'Sens aigu de la rigueur et esprit critique', 'Capacité à dire non de manière argumentée et constructive'],
        tools: ['Outils de risk analytics (RiskMetrics, SAS Risk)', 'Excel avancé / Python', 'Systèmes de GRC (Gouvernance, Risque, Conformité)']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac général à forte composante scientifique', desc: 'Goût pour les mathématiques et la logique.' },
          { step: 'Bac +3', title: 'Licence Économie, Mathématiques ou Gestion', desc: 'Fondamentaux statistiques et financiers.' },
          { step: 'Bac +5', title: 'Master Gestion des Risques Bancaires / Actuariat ou Diplôme d’Ingénieur / Commerce', desc: 'Spécialisation pointue en risk management.' }
        ],
        schools: [
          { name: 'Universités Paris-Dauphine, Paris 1 Panthéon-Sorbonne', country: 'France', scope: 'France' },
          { name: 'CESAG Dakar — Master Gestion des Risques', country: 'Sénégal', scope: 'Afrique' }
        ],
        certifications: ['FRM (Financial Risk Manager)', 'PRM (Professional Risk Manager)']
      },
      career: {
        sectors: ['Banques de réseau et d’investissement', 'Compagnies d’assurance et de réassurance', 'Grandes multinationales (énergie, télécoms)', 'Régulateurs financiers'],
        employerTypes: ['Directions des risques des banques'],
        evolution: 'Analyste Risques Junior ➔ Responsable Risques de Marché ou de Crédit ➔ Chief Risk Officer (Membre du Comité Exécutif)',
        pros: 'Poste stratégique indispensable à toute banque, très forte visibilité auprès de la direction générale.',
        cons: 'Pression lors des situations de crise, nécessité de concilier prudence et développement commercial.'
      },
      relatedJobSlugs: ['actuaire', 'responsable-conformite-compliance', 'analyste-financier'],
      connectedFamilies: ['data-decision', 'cybersecurite-reseaux'],
      resources: [{ type: 'article', title: 'La gestion des risques dans le secteur bancaire', url: 'https://www.letudiant.fr/metiers/secteur/banque-assurance.html', source: 'L’Étudiant' }],
      sources: ['L’Étudiant', 'GARP (Global Association of Risk Professionals)', 'BCEAO'],
      interests: ['donnees-chiffres', 'resoudre-problemes', 'proteger-defendre'],
      aiImpact: { level: 'Élevé', summary: 'L’IA permet de surveiller des milliards de transactions en temps réel pour repérer instantanément les comportements de risque atypiques.', automatedTasks: ['Calcul en continu des limites d’exposition', 'Détection des anomalies de flux'], emergingSkills: ['Gestion des risques liés à l’IA elle-même (IA éthique et robuste)'], humanEdge: 'L’arbitrage stratégique lors d’événements inédits jamais vus dans les données historiques.' },
      saviezVous: { statut: 'valeur_sure', fait: 'Depuis la crise financière de 2008, les régulateurs imposent aux banques un droit de veto formel du Risk Manager sur les décisions dangereuses.', pourquoi: 'Son rôle n’est pas de faire du profit immédiat, mais d’empêcher la faillite de l’institution financière.', a_retenir: 'Un rempart de stabilité hautement valorisé par toutes les institutions.' }
    },
    {
      id: 'responsable-conformite-compliance',
      slug: 'responsable-conformite-compliance',
      title: 'Responsable Conformité / Compliance Officer',
      aliases: ['Compliance Officer', 'Responsable Conformité & Déontologie', 'Chargé de Conformité LCB-FT'],
      icon: '🛡️',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80',
      familyId: 'finance-fintech',
      familyName: 'Finance, Banque, Assurance & FinTech',
      domain: 'Risque, Conformité & Contrôle',
      domainId: 'risque-conformite-controle',
      subdomain: 'Conformité (Compliance) & Déontologie',
      sourceLEtudiant: true,
      isEmerging: false,
      level: 'Bac +5 (Master Droit Bancaire / Conformité)',
      salary: '🇫🇷 France : De 3 000 € à 6 500 € brut/mois (L’Étudiant) • 🇸🇳 Sénégal : 650 000 - 1 900 000 FCFA / mois',
      simpleDefinition: 'Veille à ce que la banque ou l’assureur respecte scrupuleusement les lois, prévienne la corruption et combatte le blanchiment d’argent sale.',
      shortDescription: 'Garant de la probité de l’établissement, il s’assure du respect des lois nationales et internationales et pilote la lutte anti-blanchiment.',
      longDescription: 'Dans un secteur sous haute surveillance judiciaire et réglementaire, le Compliance Officer s’assure que chaque opération respecte les règles : lutte contre le blanchiment de capitaux et le financement du terrorisme (LCB-FT), respect des embargos internationaux, protection des données personnelles des clients et déontologie des collaborateurs. Il déclare les opérations suspectes aux autorités financières (TRACFIN en France, CENTIF au Sénégal).',
      mainObjective: 'Protéger l’établissement contre le risque de sanctions pénales, financières et de réputation.',
      companyRole: 'Garant de l’intégrité éthique et juridique de l’ensemble des activités bancaires et assurantielles.',
      workEnvironment: ['🏢 Direction générale d’une banque ou compagnie d’assurance', '💻 Logiciels de filtrage de transactions et bases de sanctions internationales', '⚖️ Échanges avec les régulateurs financiers et cellules de renseignement'],
      missions: {
        main: ['Superviser les procédures d’identification client (KYC — Know Your Customer)', 'Analyser les alertes de transactions financières atypiques et déclarer les soupçons aux autorités', 'Veiller à la stricte application des régimes de sanctions économiques et d’embargos', 'Former l’ensemble des collaborateurs aux règles de déontologie et de prévention de la corruption'],
        secondary: ['Examiner la conformité des nouveaux produits avant leur mise sur le marché', 'Rédiger le rapport annuel de contrôle de conformité']
      },
      typicalDay: [
        { time: '08:45', title: 'Triage des alertes de transactions suspectes', desc: 'Examen de virements internationaux signalés par le système de surveillance automatique.' },
        { time: '10:30', title: 'Investigation approfondie LCB-FT', desc: 'Recherche de la provenance des fonds d’une société offshore ; vérification des bénéficiaires effectifs.' },
        { time: '14:00', title: 'Validation d’une nouvelle offre de prêt digital', desc: 'Contrôle de la conformité du parcours client avec les règles de protection du consommateur.' },
        { time: '16:30', title: 'Rédaction d’une déclaration de soupçon', desc: 'Transmission d’un dossier argumenté à la cellule nationale de renseignement financier (CENTIF).' }
      ],
      skills: {
        technical: ['Droit bancaire et financier répressif', 'Réglementations internationales LCB-FT et recommandations du GAFI', 'Connaissance des listes de sanctions (OFAC, UE, ONU)', 'Méthodologie d’investigation et d’audit juridique'],
        human: ['Intégrité morale irréprochable', 'Ténacité et rigueur d’enquêteur', 'Sens de la discrétion et indépendance d’analyse'],
        tools: ['Outils de filtrage (World-Check, Fircosoft)', 'Logiciels AML (Anti-Money Laundering)']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac général', desc: 'Excellente capacité de rédaction et d’analyse.' },
          { step: 'Bac +3', title: 'Licence Droit ou Économie', desc: 'Solides fondations en droit des obligations et droit pénal.' },
          { step: 'Bac +5', title: 'Master Droit Bancaire et Financier, Droit Pénal des Affaires ou Master Conformité', desc: 'Spécialisation dans les métiers de la compliance.' }
        ],
        schools: [
          { name: 'Facultés de Droit (Paris 2 Panthéon-Assas, Dauphine)', country: 'France', scope: 'France' },
          { name: 'UCAD Dakar — Faculté des Sciences Juridiques', country: 'Sénégal', scope: 'Sénégal' },
          { name: 'CESAG Dakar — Master Juriste d’Entreprise & Conformité', country: 'Sénégal', scope: 'Afrique' }
        ],
        certifications: ['Certification CAMS (Certified Anti-Money Laundering Specialist)', 'Certification Conformité AMF']
      },
      career: {
        sectors: ['Banques, établissements de monnaie électronique, assurances, FinTech, cabinets d’avocats'],
        employerTypes: ['Institutions financières régulées'],
        evolution: 'Analyste Conformité ➔ Responsable LCB-FT ➔ Directeur de la Conformité (Chief Compliance Officer)',
        pros: 'Métier en plein essor avec forte demande d’embauche, sentiment de contribuer à la lutte contre la criminalité financière.',
        cons: 'Responsabilité lourde en cas de faille de contrôle, rigueur procédurale permanente.'
      },
      relatedJobSlugs: ['risk-manager', 'auditeur-financier', 'expert-cybersecurite-financiere'],
      connectedFamilies: ['droit-management', 'cybersecurite-reseaux'],
      resources: [{ type: 'article', title: 'L’importance de la conformité et de la réglementation', url: 'https://www.letudiant.fr/metiers/secteur/banque-assurance.html', source: 'L’Étudiant' }],
      sources: ['L’Étudiant', 'GAFI (Groupe d’Action Financière)', 'CENTIF Sénégal', 'ACPR'],
      interests: ['proteger-defendre', 'resoudre-problemes'],
      aiImpact: { level: 'Élevé', summary: 'Les algorithmes de Natural Language Processing scannent les registres mondiaux de sanctions et filtrent des millions de virements par seconde.', automatedTasks: ['Croisement des noms avec les listes de personnes politiquement exposées (PPE)', 'Filtrage systématique des messages SWIFT'], emergingSkills: ['Conformité des crypto-actifs (Travel Rule)'], humanEdge: 'L’appréciation qualitative du soupçon et l’investigation humaine sur les montages financiers frauduleux.' },
      saviezVous: { statut: 'en_emergence', fait: 'Les amendes infligées aux banques internationales pour non-respect des règles anti-blanchiment ont dépassé des dizaines de milliards de dollars ces dernières années.', pourquoi: 'La conformité est devenue une priorité absolue des conseils d’administration pour éviter des sanctions dévastatrices.', a_retenir: 'Une discipline stratégique en très forte croissance d’effectifs.' }
    },

    // -----------------------------------------------------------------------
    // 8. OPÉRATIONS & BACK-OFFICE
    // -----------------------------------------------------------------------
    {
      id: 'responsable-back-office',
      slug: 'responsable-back-office',
      title: 'Responsable du Back-Office Bancaire & Financier',
      aliases: ['Superviseur des Opérations Bancaires', 'Head of Back-Office', 'Responsable Traitement des Flux'],
      icon: '⚙️',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop&q=80',
      familyId: 'finance-fintech',
      familyName: 'Finance, Banque, Assurance & FinTech',
      domain: 'Opérations & Back-Office',
      domainId: 'operations-back-office',
      subdomain: 'Traitement des opérations bancaires & virement',
      sourceLEtudiant: true,
      isEmerging: false,
      level: 'Bac +3 à Bac +5',
      salary: '🇫🇷 France : De 3 700 € à 5 800 € brut/mois (L’Étudiant) • 🇸🇳 Sénégal : 600 000 - 1 600 000 FCFA / mois',
      simpleDefinition: 'Pilote les équipes chargées d’exécuter, contrôler et enregistrer les virements, règlements de titres et opérations financières négociées par la banque.',
      shortDescription: 'Garant du bon dénouement opérationnel des transactions, il supervise le traitement des flux massifs dans les délais et sans faille.',
      longDescription: 'Dans les coulisses indispensables de la finance, le responsable du back-office coordonne les opérations qui suivent une négociation : compensation des chèques, validation des virements interbancaires, règlement-livraison de titres boursiers et gestion des réclamations techniques. Il veille à ce que chaque centime aille au bon destinataire dans le respect des délais réglementaires.',
      mainObjective: 'Assurer le traitement fluide, sécurisé et rapide de l’ensemble des transactions financières de l’établissement.',
      companyRole: 'Moteur logistique invisible sans lequel aucune transaction financière ne peut se concrétiser.',
      workEnvironment: ['🏢 Centre de traitement des opérations bancaires', '💻 Plateformes de compensation et de routage de flux', '👥 Management d’équipes opérationnelles'],
      missions: {
        main: ['Superviser l’exécution des opérations financières et des virements de gros montants', 'Assurer le rapprochement bancaire et résoudre les suspens et écarts de trésorerie', 'Optimiser les processus de traitement pour réduire les délais et coûts opératoires', 'Gérer les relations avec les chambres de compensation (BCEAO, STEP2, Euroclear)'],
        secondary: ['Participer à la digitalisation et l’automatisation des circuits de traitement (STP)', 'Assurer le reporting opérationnel de conformité']
      },
      typicalDay: [
        { time: '08:15', title: 'Vérification des flux d’ouverture', desc: 'Contrôle des soldes de compensation de la nuit auprès de la banque centrale.' },
        { time: '10:00', title: 'Résolution d’un rejet de virement international', desc: 'Investigation sur un blocage de virement SWIFT pour divergence d’IBAN.' },
        { time: '14:30', title: 'Atelier d’optimisation avec les développeurs', desc: 'Paramétrage d’un nouveau robot RPA pour automatiser la saisie des chèques.' },
        { time: '16:45', title: 'Clôture journalière des opérations', desc: 'Validation de l’absence d’opérations en suspens avant l’arrêt des systèmes.' }
      ],
      skills: {
        technical: ['Circuits de règlement/livraison et compensation interbancaire', 'Normes de messagerie financière (ISO 20022 / SWIFT)', 'Comptabilité bancaire et gestion des suspens', 'Management opérationnel et lean management'],
        human: ['Rigueur chirurgicale', 'Sens de l’organisation et gestion des priorités', 'Calme sous la pression des délais de cut-off'],
        tools: ['Systèmes bancaires centraux (Core Banking)', 'Plateformes de réconciliation automatique', 'Outils de Robotic Process Automation (RPA)']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac général ou technologique STMG', desc: 'Rigueur et organisation.' },
          { step: 'Bac +3', title: 'Licence Pro Banque (supports opérationnels) ou Gestion', desc: 'Compréhension de la chaîne opérationnelle bancaire.' },
          { step: 'Bac +5', title: 'Master Banque, Finance ou Gestion des Opérations', desc: 'Préparation au management de grands centres de services partagés.' }
        ],
        schools: [
          { name: 'CFA Banque / Universités de Gestion', country: 'France', scope: 'France' },
          { name: 'CESAG Dakar — Pôle Banque & Finance', country: 'Sénégal', scope: 'Afrique' },
          { name: 'Institut Supérieur de Management (ISM) Dakar', country: 'Sénégal', scope: 'Sénégal' }
        ],
        certifications: ['Certification SWIFT Operations', 'Certification Lean Six Sigma Green Belt']
      },
      career: {
        sectors: ['Banques de réseau', 'Banques dépositaires et conservateurs de titres', 'Plateformes de paiement en ligne'],
        employerTypes: ['Centres de traitement des flux bancaires'],
        evolution: 'Gestionnaire Back-Office ➔ Superviseur d’Équipe ➔ Responsable Back-Office ➔ Directeur des Opérations (COO)',
        pros: 'Poste managérial concret, vision globale des rouages techniques d’une banque, stabilité forte.',
        cons: 'Horaires stricts liés aux cut-off de compensation, gestion des incidents techniques urgents.'
      },
      relatedJobSlugs: ['gestionnaire-contrats-assurance', 'charge-de-clientele', 'risk-manager'],
      connectedFamilies: ['droit-management', 'numerique-ia'],
      resources: [{ type: 'article', title: 'Fiche métier Responsable du back-office', url: 'https://www.letudiant.fr/metiers/secteur/banque-assurance/responsable-back-office.html', source: 'L’Étudiant' }],
      sources: ['L’Étudiant', 'FBF', 'Observatoire des Métiers de la Banque'],
      interests: ['donnees-chiffres', 'resoudre-problemes'],
      aiImpact: { level: 'Élevé', summary: 'La robotisation (RPA) automatise le traitement des écritures récurrentes, élevant le métier vers l’analyse des exceptions et le pilotage technologique.', automatedTasks: ['Rapprochement automatique de lignes de comptes', 'Saisie de formulaires standardisés'], emergingSkills: ['Pilotage de workflows automatisés', 'Supervision des API de paiement'], humanEdge: 'Résoudre les incidents complexes de blocages de virements et gérer les relations humaines d’équipe.' },
      saviezVous: { statut: 'en_transformation', fait: 'Chaque jour, des milliards d’euros transitent par les systèmes de compensation supervisés par le back-office.', pourquoi: 'Une erreur de cut-off de quelques minutes peut coûter des pénalités financières considérables.', a_retenir: 'La tour de contrôle invisible assurant la fluidité financière.' }
    },
    {
      id: 'gestionnaire-contrats-assurance',
      slug: 'gestionnaire-contrats-assurance',
      title: 'Gestionnaire de Contrats d’Assurance',
      aliases: ['Gestionnaire de Portefeuille Assurance', 'Gestionnaire Production Assurance', 'Technicien de Gestion Assurances'],
      icon: '📝',
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80',
      familyId: 'finance-fintech',
      familyName: 'Finance, Banque, Assurance & FinTech',
      domain: 'Opérations & Back-Office',
      domainId: 'operations-back-office',
      subdomain: 'Gestion administrative des contrats d’assurance',
      sourceLEtudiant: true,
      isEmerging: false,
      level: 'Bac +2 à Bac +3',
      salary: '🇫🇷 France : De 1 900 € à 2 200 € brut/mois débutant (L’Étudiant) jusqu’à 2 800 €+ avec expérience • 🇸🇳 Sénégal : 250 000 - 650 000 FCFA / mois',
      simpleDefinition: 'Gère la vie administrative des contrats d’assurance de leur souscription jusqu’à leur résiliation (avenants, attestations, cotisations).',
      shortDescription: 'Assure l’enregistrement, la mise à jour et le suivi administratif des polices d’assurance pour particuliers et professionnels.',
      longDescription: 'Dès qu’un contrat d’assurance est souscrit, le gestionnaire de contrats prend le relais : il édite les polices, intègre les avenants lors d’un déménagement ou d’un changement de véhicule, encaisse les cotisations, délivre les attestations officielles et gère les résiliations dans le respect des délais légaux.',
      mainObjective: 'Assurer la conformité administrative et la mise à jour continue des contrats tout au long de leur durée de vie.',
      companyRole: 'Garant de la sécurité juridique et contractuelle des polices émises par la compagnie.',
      workEnvironment: ['🏢 Centre de gestion administrative d’assurance ou cabinet de courtage', '💻 Outils de gestion de contrats et GED', '📞 Contact ponctuel avec les clients pour pièces manquantes'],
      missions: {
        main: ['Émettre les contrats définitifs et vérifier la complétude des pièces justificatives', 'Enregistrer les avenants et modifications de garanties demandées par les assurés', 'Suivre le prélèvement des cotisations et gérer les relances pour impayés', 'Éditer les cartes vertes, attestations de responsabilité civile et documents légaux'],
        secondary: ['Traiter les demandes de résiliation selon les lois en vigueur (Loi Hamon, etc.)', 'Alimenter les bases de données d’archivage numérique']
      },
      typicalDay: [
        { time: '08:45', title: 'Vérification des souscriptions de la veille', desc: 'Contrôle des pièces d’identité et permis de conduire déposés en ligne par les nouveaux assurés.' },
        { time: '10:30', title: 'Saisie d’avenants de contrats', desc: 'Modification de contrat auto pour intégrer un second conducteur novice.' },
        { time: '14:00', title: 'Traitement des rejets de prélèvements', desc: 'Envoi d’avis de relance amiable aux clients dont les cotisations ont été rejetées.' },
        { time: '16:15', title: 'Délivrance d’attestations d’assurance', desc: 'Édition en urgence d’une attestation d’assurance décennale pour un artisan répondant à un appel d’offres.' }
      ],
      skills: {
        technical: ['Techniques de rédaction et de gestion de polices d’assurance', 'Droit des contrats d’assurance', 'Procédures de résiliation et de suspension de garanties', 'Comptabilité des primes et encaissements'],
        human: ['Rigueur administrative et méthode', 'Sens de la précision documentaire', 'Aisance dans le traitement de flux réguliers'],
        tools: ['Progiciels de gestion d’assurance', 'Systèmes de GED (Gestion Électronique de Documents)']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac général ou technologique STMG', desc: 'Sens de la méthode.' },
          { step: 'Bac +2', title: 'BTS Assurance ou DUT Carrières Juridiques', desc: 'Diplôme de base parfaitement adapté au poste.' },
          { step: 'Bac +3', title: 'Licence Pro Assurance', desc: 'Évolution plus rapide vers des responsabilités d’encadrement.' }
        ],
        schools: [
          { name: 'IFPASS / ÉNASS / Universités', country: 'France', scope: 'France' },
          { name: 'Institut Supérieur d’Assurance Dakar', country: 'Sénégal', scope: 'Sénégal' }
        ],
        certifications: ['Certification Gestion Administrative Assurance']
      },
      career: {
        sectors: ['Compagnies d’assurances', 'Sociétés de courtage', 'Mutuelles'],
        employerTypes: ['Plateformes de gestion de contrats'],
        evolution: 'Gestionnaire Junior ➔ Gestionnaire Grands Comptes ➔ Superviseur d’Équipe Production ➔ Responsable des Opérations d’Assurance',
        pros: 'Poste stable avec horaires réguliers, nombreuses opportunités d’embauche sur tout le territoire.',
        cons: 'Tâches administratives régulières, nécessité de concentration soutenue pour éviter les erreurs de saisie.'
      },
      relatedJobSlugs: ['redacteur-assurances', 'responsable-back-office', 'agent-general-assurance'],
      connectedFamilies: ['droit-management'],
      resources: [{ type: 'article', title: 'Fiche métier Gestionnaire de contrats d’assurance', url: 'https://www.letudiant.fr/metiers/secteur/banque-assurance/gestionnaire-dassurances.html', source: 'L’Étudiant' }],
      sources: ['L’Étudiant', 'France Assureurs'],
      interests: ['donnees-chiffres', 'proteger-defendre'],
      aiImpact: { level: 'Élevé', summary: 'La souscription directe en ligne et la validation automatique des pièces d’identité réduisent les actes de saisie manuelle.', automatedTasks: ['Génération automatique d’attestations', 'Validation optique des permis de conduire'], emergingSkills: ['Gestion des contrats numériques dématérialisés'], humanEdge: 'Résoudre les situations d’assurés hors normes et régulariser les dossiers bloqués.' },
      saviezVous: { statut: 'en_transformation', fait: 'Plus de 80 % des attestations d’assurance sont désormais téléchargées en autonomie par les assurés depuis leur espace mobile.', pourquoi: 'Le gestionnaire de contrats consacre ainsi davantage de temps à la conformité des dossiers complexes et au recouvrement.', a_retenir: 'Un socle d’insertion professionnelle solide et accessible dans l’assurance.' }
    },

    // -----------------------------------------------------------------------
    // 9. FINANCE NUMÉRIQUE & FINTECH
    // -----------------------------------------------------------------------
    {
      id: 'analyste-data-science-finance',
      slug: 'analyste-data-science-finance',
      title: 'Analyste en Data Science Financière (FinTech)',
      aliases: ['Financial Data Scientist', 'Analyste Quantitatif IA', 'Data Analyst Finance & FinTech'],
      icon: '🚀',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
      familyId: 'finance-fintech',
      familyName: 'Finance, Banque, Assurance & FinTech',
      domain: 'Finance Numérique & FinTech',
      domainId: 'finance-numerique-fintech',
      subdomain: 'Finance & Data Science',
      sourceLEtudiant: true,
      isEmerging: true,
      level: 'Bac +5 (Master Data Science, IA ou Finance Quantitative)',
      salary: '🇫🇷 France : De 3 500 € à 7 000 €+ brut/mois (L’Étudiant — Métier émergent) • 🇸🇳 Sénégal : 900 000 - 2 500 000 FCFA / mois',
      simpleDefinition: 'Développe des algorithmes d’intelligence artificielle pour analyser les transactions, détecter les fraudes et prédire les tendances de marchés.',
      shortDescription: 'Exploite les données financières massives grâce au machine learning pour automatiser le scoring de crédit et la prise de décision.',
      longDescription: 'À la pointe de l’innovation FinTech et bancaire, l’analyste en data science financière conçoit des modèles prédictifs capables d’analyser des millions de transactions par minute. Qu’il s’agisse d’octroyer un micro-crédit instantané sur mobile money, de bloquer une tentative de fraude bancaire en direct ou d’optimiser un portefeuille d’actions, ses algorithmes transforment les données en décisions financières instantanées.',
      mainObjective: 'Créer des modèles d’apprentissage automatique fiables et sécurisés pour automatiser et optimiser les services financiers.',
      companyRole: 'Créateur de la valeur algorithmique et de l’intelligence prédictive dans la banque et la FinTech.',
      workEnvironment: ['🏢 FinTech en hyper-croissance, néobanque ou pôle data d’une grande banque', '💻 Environnements cloud et notebooks de data science', '👥 Travail agile avec les Product Managers et développeurs backend'],
      missions: {
        main: ['Construire des algorithmes de scoring de crédit alternatif basés sur le comportement mobile', 'Concevoir des modèles de détection de fraudes aux moyens de paiement par apprentissage supervisé', 'Analyser l’attrition client (churn) et modéliser la propension d’achat de produits financiers', 'Collaborer avec les équipes data engineering pour industrialiser les pipelines de modèles'],
        secondary: ['Veiller à l’explicabilité des modèles pour se conformer aux régulateurs bancaires', 'Participer aux hackathons et à la veille algorithmique internationale']
      },
      typicalDay: [
        { time: '09:15', title: 'Monitoring des modèles en production', desc: 'Vérification du taux de faux positifs du système de détection des fraudes à la carte bancaire.' },
        { time: '11:00', title: 'Feature Engineering sur des données de paiement', desc: 'Création de nouvelles variables comportementales sous Python pour affiner un modèle d’octroi de prêt instantané.' },
        { time: '14:30', title: 'Entraînement de modèles de Gradient Boosting', desc: 'Comparaison des performances entre XGBoost et LightGBM pour optimiser l’AUC.' },
        { time: '16:45', title: 'Restitution aux équipes risque et produit', desc: 'Démonstration de la fiabilité du nouveau modèle devant le comité de crédit.' }
      ],
      skills: {
        technical: ['Machine Learning & Deep Learning appliqués à la finance', 'Python scientifique (pandas, numpy, scikit-learn, TensorFlow/PyTorch)', 'Bases de données SQL et architectures Big Data (Snowflake, Spark)', 'Statistiques et modélisation financière'],
        human: ['Curiosité scientifique et esprit d’investigation', 'Rigueur d’analyse critique des biais de données', 'Capacité de vulgarisation auprès des banquiers traditionnels'],
        tools: ['Python / JupyterLab', 'SQL / PostgreSQL / BigQuery', 'Git & Docker', 'Plateformes MLOps (MLflow, AWS SageMaker)']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac S ou dominante Mathématiques / Numérique', desc: 'Bases solides en mathématiques.' },
          { step: 'Bac +3', title: 'Licence Mathématiques-Informatique ou Économie Quantitative', desc: 'Algèbre, probabilités et programmation.' },
          { step: 'Bac +5', title: 'Master Data Science, IA ou Diplôme d’Ingénieur + spécialisation finance', desc: 'Double compétence de haut niveau très recherchée.' }
        ],
        schools: [
          { name: 'Grandes Écoles d’Ingénieurs & Universités Data (Télécom, ENSAE, Dauphine)', country: 'France', scope: 'France' },
          { name: 'AIMS Sénégal (Master IA & Data)', country: 'Sénégal', scope: 'Afrique' },
          { name: 'ESP Dakar — Master Data Science', country: 'Sénégal', scope: 'Sénégal' }
        ],
        certifications: ['AWS Certified Machine Learning', 'Professional Data Scientist Certification']
      },
      career: {
        sectors: ['FinTech & Opérateurs de Mobile Money (Wave, Orange Money, Moov)', 'Néobanques & Banques en ligne', 'Banques traditionnelles & Sociétés de bourse'],
        employerTypes: ['Startups technologiques financières ou grandes institutions'],
        evolution: 'Financial Data Scientist ➔ Lead Data Scientist ➔ Head of AI / Chief Data Officer (CDO)',
        pros: 'Métier passionnant à la pointe de l’innovation, salaires très attractifs, impact direct sur l’inclusion financière.',
        cons: 'Pression de la précision des modèles, responsabilité éthique sur l’octroi ou le refus de crédit aux usagers.'
      },
      relatedJobSlugs: ['actuaire-big-data', 'expert-cybersecurite-financiere', 'trader-operateur-marche'],
      connectedFamilies: ['numerique-ia', 'data-decision'],
      resources: [{ type: 'article', title: 'L’analyste en Data Science financière selon L’Étudiant', url: 'https://www.letudiant.fr/metiers/secteur/banque-assurance.html', source: 'L’Étudiant' }],
      sources: ['L’Étudiant', 'FinTech Mag', 'BCEAO — Comité FinTech & Innovation'],
      interests: ['donnees-chiffres', 'technologie-code', 'resoudre-problemes'],
      aiImpact: { level: 'Expert', summary: 'L’analyste conçoit directement les moteurs d’IA prédictifs qui personnalisent les services financiers de demain.', automatedTasks: ['Prétraitement automatique des données'], emergingSkills: ['Modèles d’IA générative pour le conseil financier automatisé', 'IA explicable (XAI)'], humanEdge: 'La décision éthique sur l’usage des données privées des citoyens.' },
      saviezVous: { statut: 'en_emergence', fait: 'En Afrique de l’Ouest, les modèles de data science permettent d’accorder des micro-crédits à des millions de personnes sans compte bancaire classique.', pourquoi: 'Les algorithmes évaluent la fiabilité à partir des flux de recharge mobile et de factures payées.', a_retenir: 'Un accélérateur majeur d’inclusion financière sur tout le continent.' }
    },
    {
      id: 'expert-cybersecurite-financiere',
      slug: 'expert-cybersecurite-financiere',
      title: 'Expert en Cybersécurité Financière',
      aliases: ['Security Officer FinTech', 'Ingénieur Cybersécurité Bancaire', 'Analyste SOC Finance'],
      icon: '🔐',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80',
      familyId: 'finance-fintech',
      familyName: 'Finance, Banque, Assurance & FinTech',
      domain: 'Finance Numérique & FinTech',
      domainId: 'finance-numerique-fintech',
      subdomain: 'Cybersécurité financière',
      sourceLEtudiant: true,
      isEmerging: true,
      level: 'Bac +5 (Master Cybersécurité / Diplôme d’Ingénieur)',
      salary: '🇫🇷 France : De 3 800 € à 7 500 €+ brut/mois (L’Étudiant — Métier émergent) • 🇸🇳 Sénégal : 900 000 - 2 500 000 FCFA / mois',
      simpleDefinition: 'Protège les coffres-forts numériques des banques, applications de mobile money et bourses contre les attaques pirates et le vol de données.',
      shortDescription: 'Sécurise les infrastructures et applications financières critiques contre les intrusions, les ransomwares et les fraudes massives.',
      longDescription: 'Les institutions financières étant les cibles privilégiées des cybercriminels internationaux, l’expert en cybersécurité financière conçoit des boucliers inviolables pour protéger les fonds et les données bancaires des clients. Il audite le code des applications mobiles de paiement, teste la résistance des serveurs bancaires (tests d’intrusion), surveille les flux suspects et riposte instantanément en cas d’attaque.',
      mainObjective: 'Garantir l’intégrité, la confidentialité et la disponibilité continue des systèmes financiers et des transactions.',
      companyRole: 'Gardien incontournable de la sécurité des actifs financiers numériques et de la confiance des clients.',
      workEnvironment: ['🏢 Centre opérationnel de sécurité (SOC) bancaire', '💻 Outils de surveillance réseau, sondes SIEM et bacs à sable', '⚡ Astreintes de gestion d’incidents de sécurité critiques'],
      missions: {
        main: ['Auditer la sécurité des plateformes de paiement et applications bancaires (pentest applicatif)', 'Surveiller en temps réel les flux réseau interbancaires pour détecter les intrusions pirates', 'Sécuriser les passerelles d’API Open Banking et les protocoles de chiffrement', 'Réagir immédiatement en cas de cyberattaque pour isoler les systèmes compromis'],
        secondary: ['Assurer la conformité aux normes internationales de sécurité bancaire (PCI-DSS, ISO 27001)', 'Former les salariés de la banque contre les attaques de phishing']
      },
      typicalDay: [
        { time: '08:30', title: 'Revue des alertes de sécurité de la nuit', desc: 'Analyse des tentatives de connexions frauduleuses sur l’API mobile de la banque.' },
        { time: '10:30', title: 'Test d’intrusion sur une nouvelle fonctionnalité de virement', desc: 'Recherche de failles d’injection SQL ou de contournement d’authentification à deux facteurs.' },
        { time: '14:00', title: 'Simulation d’attaque ransomware', desc: 'Exercice de crise cyber pour vérifier la rapidité de restauration des sauvegardes bancaires.' },
        { time: '16:30', title: 'Audit de conformité PCI-DSS', desc: 'Contrôle du chiffrement des numéros de cartes bancaires stockés dans les bases de données.' }
      ],
      skills: {
        technical: ['Sécurité des systèmes de paiement & normes PCI-DSS', 'Cryptographie appliquée et protocoles SSL/TLS', 'Sécurité réseau (firewalls, WAF, segmentation)', 'Analyse de vulnérabilités et tests d’intrusion (Burp Suite, Metasploit)', 'Sécurité du Cloud bancaire (AWS, Azure)'],
        human: ['Calme et réactivité en situation de crise', 'Rigueur méthodologique absolue', 'Sens élevé du devoir et intégrité'],
        tools: ['SIEM (Splunk, Elastic, Sentinel)', 'Burp Suite Pro', 'Wireshark', 'Outils d’analyse de code statique (SonarQube)']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac général à dominante scientifique ou informatique', desc: 'Passion pour les systèmes et les réseaux.' },
          { step: 'Bac +3', title: 'Licence Informatique ou Réseaux & Télécoms', desc: 'Architecture des systèmes d’exploitation et protocoles web.' },
          { step: 'Bac +5', title: 'Master Cybersécurité ou Diplôme d’Ingénieur Sécurité des SI', desc: 'Cursus d’excellence en sécurité défensive et offensive.' }
        ],
        schools: [
          { name: 'Écoles d’Ingénieurs spécialisées Cyber (EPITA, Télécom)', country: 'France', scope: 'France' },
          { name: 'ESP Dakar — Département Génie Informatique / Cyber', country: 'Sénégal', scope: 'Sénégal' }
        ],
        certifications: ['CISSP (Certified Information Systems Security Professional)', 'CEH (Certified Ethical Hacker)', 'CISA']
      },
      career: {
        sectors: ['Banques, FinTech, opérateurs de télécommunications, autorités de régulation financière'],
        employerTypes: ['Institutions financières ou cabinets de conseil cyber'],
        evolution: 'Analyste Cyber ➔ Expert Sécurité Bancaire ➔ Responsable de la Sécurité des Systèmes d’Information (RSSI / CISO)',
        pros: 'Métier d’une utilité vitale, pénurie mondiale de profils qualifiés garantissant un plein-emploi et d’excellents salaires.',
        cons: 'Pression constante (les attaquants ne dorment jamais), astreintes possibles en cas de crise.'
      },
      relatedJobSlugs: ['analyste-cybersecurite', 'responsable-conformite-compliance', 'architecte-cloud-assurance'],
      connectedFamilies: ['cybersecurite-reseaux', 'numerique-ia'],
      resources: [{ type: 'article', title: 'L’expert en cybersécurité financière selon L’Étudiant', url: 'https://www.letudiant.fr/metiers/secteur/banque-assurance.html', source: 'L’Étudiant' }],
      sources: ['L’Étudiant', 'ANSSI', 'CIRT Sénégal'],
      interests: ['technologie-code', 'proteger-defendre', 'resoudre-problemes'],
      aiImpact: { level: 'Élevé', summary: 'L’IA assiste la détection des cyberattaques en temps réel en identifiant les anomalies de trafic invisible à l’œil humain.', automatedTasks: ['Blocage automatique d’adresses IP malveillantes', 'Analyse automatisée de malwares'], emergingSkills: ['Défense contre les attaques assistées par l’IA générative (deepfakes vocaux)'], humanEdge: 'L’investigation judiciaire et la décision d’interrompre un service bancaire pour endiguer une attaque.' },
      saviezVous: { statut: 'en_emergence', fait: 'Le secteur financier subit environ 300 fois plus de cyberattaques que toute autre industrie dans le monde.', pourquoi: 'Les cybercriminels ciblent directement l’argent liquide et les données de cartes bancaires pour des rançons immédiates.', a_retenir: 'Un profil protecteur incontournable cité parmi les métiers phares par L’Étudiant.' }
    },
    {
      id: 'specialiste-cryptomonnaies',
      slug: 'specialiste-cryptomonnaies',
      title: 'Spécialiste des Cryptomonnaies & Actifs Numériques',
      aliases: ['Crypto Analyst', 'Blockchain Financial Specialist', 'Analyste Actifs Numériques / Web3'],
      icon: '🪙',
      image: 'https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?w=800&auto=format&fit=crop&q=80',
      familyId: 'finance-fintech',
      familyName: 'Finance, Banque, Assurance & FinTech',
      domain: 'Finance Numérique & FinTech',
      domainId: 'finance-numerique-fintech',
      subdomain: 'Blockchain, Crypto-actifs & Smart Contracts',
      sourceLEtudiant: true,
      isEmerging: true,
      level: 'Bac +5 (Master Finance & Blockchain / Écoles de Commerce ou d’Ingénieurs)',
      salary: '🇫🇷 France : De 3 500 € à 7 000 €+ brut/mois (L’Étudiant — Métier émergent) • 🇸🇳 Sénégal : 750 000 - 2 200 000 FCFA / mois',
      simpleDefinition: 'Analyse les marchés des cryptomonnaies, conçoit des stratégies d’investissement sur la blockchain et évalue la conformité des protocoles Web3.',
      shortDescription: 'Expert des monnaies numériques et de la finance décentralisée (DeFi), il guide les investisseurs et entreprises dans l’écosystème crypto.',
      longDescription: 'À la croisée de la finance de marché, des mathématiques et de la technologie blockchain, le spécialiste des cryptomonnaies étudie les cours des actifs numériques (Bitcoin, Ethereum, stablecoins). Il analyse les données directement enregistrées sur la blockchain (On-Chain Analysis), évalue la robustesse des protocoles de finance décentralisée et conseille les institutions sur l’intégration légale de ces nouveaux actifs dans leur trésorerie.',
      mainObjective: 'Comprendre et maîtriser les opportunités et risques des actifs numériques pour structurer des investissements conformes et rentables.',
      companyRole: 'Éclaireur technologique guidant la diversification financière vers les monnaies et protocoles décentralisés.',
      workEnvironment: ['🏢 FinTech Web3, fonds d’investissement crypto ou département digital de grande banque', '💻 Analyse On-Chain sur explorateurs de blocs et terminaux crypto', '🌍 Écosystème international connecté 24h/24'],
      missions: {
        main: ['Analyser les flux On-Chain des blockchains publiques pour détecter les tendances d’achat institutionnel', 'Concevoir des stratégies de couverture et d’arbitrage sur les plateformes de trading crypto', 'Évaluer les risques de liquidité et de sécurité des protocoles de finance décentralisée (DeFi)', 'Assurer la conformité réglementaire (statut PSAN en France, réglementation MiCA en Europe, directives régionales)'],
        secondary: ['Rédiger des notes d’analyse pédagogiques sur les nouveaux projets de tokens', 'Former les équipes de gestion de patrimoine aux risques des actifs numériques']
      },
      typicalDay: [
        { time: '08:45', title: 'Consultation des cours et métriques On-Chain', desc: 'Analyse des mouvements des portefeuilles majeurs (Whales) sur Ethereum et Bitcoin.' },
        { time: '10:30', title: 'Audit d’un protocole de stablecoin', desc: 'Vérification de la réalité des réserves en dollars garantissant la parité d’une monnaie numérique.' },
        { time: '14:00', title: 'Revue juridique et réglementaire MiCA', desc: 'Vérification des obligations de déclaration fiscale et de traçabilité des transactions.' },
        { time: '16:30', title: 'Présentation client institutionnel', desc: 'Conseil sur l’allocation prudente d’une fraction de trésorerie en actifs numériques sécurisés.' }
      ],
      skills: {
        technical: ['Fonctionnement approfondi des blockchains publiques (Proof of Work, Proof of Stake)', 'Analyse On-Chain et traçabilité des portefeuilles (Chainalysis, Arkham)', 'Mécanismes de la finance décentralisée (DeFi, AMM, staking)', 'Réglementation des crypto-actifs (MiCA, PSAN, lutte anti-blanchiment)'],
        human: ['Esprit critique face à l’engouement spéculatif', 'Rigueur méthodologique et sang-froid', 'Curiosité technologique permanente'],
        tools: ['Dune Analytics', 'Glassnode', 'Chainalysis', 'Python pour l’analyse de données de blocs']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac général ou économique', desc: 'Intérêt marqué pour la technologie et la finance.' },
          { step: 'Bac +3', title: 'Licence Économie, Finance ou Informatique', desc: 'Bases en théorie monétaire et programmation.' },
          { step: 'Bac +5', title: 'Master Finance & Technologie, Master Blockchain ou École de Commerce / Ingénieur', desc: 'Formation spécialisée en actifs numériques.' }
        ],
        schools: [
          { name: 'Écoles pionnières Web3 & Universités Finance (Dauphine, HEC)', country: 'France', scope: 'France' },
          { name: 'Institut Africain de Technologie & Pôles FinTech Dakar', country: 'Sénégal', scope: 'Afrique' }
        ],
        certifications: ['Certification Chainalysis Certified Reactor (CCR)', 'Certification Blockchain Financial Analyst']
      },
      career: {
        sectors: ['Fonds d’investissement crypto (Crypto Venture Capital)', 'Plateformes d’échange agréées (Exchanges)', 'Départements digitaux de banques d’affaires', 'Cabinets d’audit et de conseil'],
        employerTypes: ['Acteurs de l’écosystème financier numérique'],
        evolution: 'Analyste Crypto ➔ Responsable des Investissements Numériques ➔ Fondateur de projet FinTech Web3',
        pros: 'Secteur jeune et passionnant en construction, très fortes rémunérations pour les experts crédibles.',
        cons: 'Volatilité extrême des marchés, évolution réglementaire rapide exigeant une adaptation permanente.'
      },
      relatedJobSlugs: ['ingenieur-smart-contracts', 'analyste-data-science-finance', 'trader-operateur-marche'],
      connectedFamilies: ['numerique-ia', 'data-decision'],
      resources: [{ type: 'article', title: 'Le spécialiste des cryptomonnaies selon L’Étudiant', url: 'https://www.letudiant.fr/metiers/secteur/banque-assurance.html', source: 'L’Étudiant' }],
      sources: ['L’Étudiant', 'Autorité des Marchés Financiers (AMF)', 'European Securities and Markets Authority (ESMA)'],
      interests: ['technologie-code', 'donnees-chiffres'],
      aiImpact: { level: 'Élevé', summary: 'L’IA analyse les carnets d’ordres et les réseaux sociaux pour détecter les manipulations de cours et les signaux faibles de liquidité.', automatedTasks: ['Surveillance en direct des transactions suspectes', 'Analyse du sentiment de marché'], emergingSkills: ['Agents IA autonomes sur la blockchain (AI-agents DeFi)'], humanEdge: 'Le discernement éthique et la détection des arnaques et faiblesses fondamentales de projets.' },
      saviezVous: { statut: 'en_emergence', fait: 'Mentionné par L’Étudiant parmi les spécialisations émergentes les plus emblématiques de la mutation du secteur.', pourquoi: 'Les grandes banques centrales développent désormais leurs propres Monnaies Numériques de Banque Centrale (MNBC).', a_retenir: 'Un domaine à forte valeur ajoutée pour les profils rigoureux et visionnaires.' }
    },
    {
      id: 'architecte-cloud-assurance',
      slug: 'architecte-cloud-assurance',
      title: 'Architecte de Solutions Cloud pour l’Assurance (InsurTech)',
      aliases: ['InsurTech Cloud Architect', 'Architecte Systèmes d’Information Assurance', 'Cloud Solution Architect Insurance'],
      icon: '☁️',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
      familyId: 'finance-fintech',
      familyName: 'Finance, Banque, Assurance & FinTech',
      domain: 'Finance Numérique & FinTech',
      domainId: 'finance-numerique-fintech',
      subdomain: 'Cloud bancaire & API Open Banking',
      sourceLEtudiant: true,
      isEmerging: true,
      level: 'Bac +5 (Diplôme d’Ingénieur / Master Cloud & Systèmes Distribués)',
      salary: '🇫🇷 France : De 4 000 € à 8 000 €+ brut/mois (L’Étudiant — Métier émergent) • 🇸🇳 Sénégal : 1 000 000 - 2 800 000 FCFA / mois',
      simpleDefinition: 'Conçoit les infrastructures informatiques en ligne (Cloud) permettant aux compagnies d’assurance de traiter des millions de devis et sinistres en temps réel sans jamais tomber en panne.',
      shortDescription: 'Modernise les systèmes d’information de l’assurance en concevant des architectures Cloud hautement sécurisées, résilientes et conformes.',
      longDescription: 'Face à la digitalisation massive de la souscription et de la gestion des sinistres, l’architecte Cloud conçoit l’infrastructure invisible sur laquelle reposent les applications d’assurance. Il orchestre la migration des vieux serveurs vers le Cloud (AWS, Azure, Google Cloud), conçoit des API permettant d’intégrer l’assurance sur des sites tiers (assurance embarquée e-commerce) et garantit la conformité stricte avec les lois de protection des données de santé et bancaires.',
      mainObjective: 'Bâtir une infrastructure informatique Cloud ultra-scalable, sécurisée et interopérable pour les acteurs de l’assurance.',
      companyRole: 'Architecte technique en chef permettant la transformation numérique et la rapidité des services d’assurance.',
      workEnvironment: ['🏢 Direction technologique de compagnie d’assurance ou startup InsurTech', '💻 Conception d’architectures distribuées et schémas d’infrastructure', '👥 Coordination entre les équipes de développement, de sécurité et les régulateurs'],
      missions: {
        main: ['Concevoir l’architecture Cloud native pour les plateformes de souscription et de tarification en ligne', 'Assurer la haute disponibilité (99,99%) et la reprise d’activité après sinistre informatique (Disaster Recovery)', 'Garantir le respect strict des réglementations sur l’hébergement des données sensibles et bancaires', 'Développer des API sécurisées d’assurance embarquée pour les partenaires distributeurs'],
        secondary: ['Optimiser les coûts de consommation d’infrastructure Cloud (FinOps)', 'Former les équipes de développement aux bonnes pratiques Cloud et DevOps']
      },
      typicalDay: [
        { time: '09:00', title: 'Revue de la résilience d’infrastructure', desc: 'Vérification du comportement des serveurs Cloud lors d’un pic de 100 000 connexions simultanées après une tempête.' },
        { time: '11:00', title: 'Conception d’architecture d’API Open Insurance', desc: 'Dessin des flux d’échanges de données sécurisés entre la compagnie et une application de mobilité.' },
        { time: '14:30', title: 'Comité de sécurité avec le RSSI', desc: 'Validation des clés de chiffrement des données de santé stockées dans le Cloud souverain.' },
        { time: '16:45', title: 'Revue FinOps d’optimisation des coûts', desc: 'Ajustement des instances de calcul pour réduire de 15 % la facture d’hébergement mensuelle.' }
      ],
      skills: {
        technical: ['Fournisseurs Cloud majeurs (AWS, Microsoft Azure, GCP)', 'Architectures microservices, conteneurs et orchestration (Kubernetes, Docker)', 'Sécurité Cloud et conformité des données réglementées (HDS, RGPD, DORA)', 'Méthodologies DevOps et Infrastructure as Code (Terraform, Ansible)'],
        human: ['Vision globale d’ingénierie systémique', 'Pédagogie pour expliquer des choix techniques aux dirigeants non-techniques', 'Sens de l’anticipation des pannes'],
        tools: ['Terraform', 'Kubernetes', 'AWS / Azure Architecture Center', 'Outils de monitoring (Datadog, Grafana)']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac général ou dominante Sciences & Informatique', desc: 'Forte curiosité pour les réseaux et l’informatique.' },
          { step: 'Bac +3', title: 'Licence Informatique ou Diplôme Universitaire Réseaux', desc: 'Fondations en protocoles, systèmes et bases de données.' },
          { step: 'Bac +5', title: 'Diplôme d’Ingénieur Informatique ou Master Systèmes Distribués & Cloud', desc: 'Diplôme de référence pour accéder au statut d’architecte.' }
        ],
        schools: [
          { name: 'Grandes Écoles d’Ingénieurs (Télécom Paris, CentraleSupélec, INSA)', country: 'France', scope: 'France' },
          { name: 'École Supérieure Polytechnique (ESP) de Dakar', country: 'Sénégal', scope: 'Sénégal' }
        ],
        certifications: ['AWS Certified Solutions Architect — Professional', 'Microsoft Certified: Azure Solutions Architect Expert']
      },
      career: {
        sectors: ['Grandes compagnies d’assurance', 'Startups et licornes InsurTech', 'Cabinets de conseil en transformation technologique'],
        employerTypes: ['Directions des systèmes d’information de l’assurance'],
        evolution: 'Ingénieur Cloud ➔ Architecte Cloud ➔ Directeur Technique (CTO) ➔ Directeur des Systèmes d’Information (DSI)',
        pros: 'Métier d’ingénierie à très forte valeur ajoutée, rémunérations parmi les plus élevées du marché de la tech, rôle central de bâtisseur.',
        cons: 'Forte responsabilité en cas d’interruption de service des serveurs, complexité des contraintes réglementaires bancaires.'
      },
      relatedJobSlugs: ['expert-cybersecurite-financiere', 'actuaire-big-data', 'ingenieur-smart-contracts'],
      connectedFamilies: ['numerique-ia', 'cybersecurite-reseaux'],
      resources: [{ type: 'article', title: 'L’architecte de solutions Cloud pour l’assurance selon L’Étudiant', url: 'https://www.letudiant.fr/metiers/secteur/banque-assurance.html', source: 'L’Étudiant' }],
      sources: ['L’Étudiant', 'France Assureurs', 'Réglementation DORA'],
      interests: ['technologie-code', 'resoudre-problemes'],
      aiImpact: { level: 'Élevé', summary: 'L’IA optimise en direct l’allocation des serveurs Cloud (AIOps) et détecte les goulots d’étranglement de charge avant la panne.', automatedTasks: ['Scalabilité automatique des serveurs', 'Détection prédictive des surcharges mémoire'], emergingSkills: ['Architecture Cloud pour l’inférence de modèles LLM en assurance'], humanEdge: 'L’arbitrage architectural entre coût, rapidité et souveraineté juridique des données.' },
      saviezVous: { statut: 'en_emergence', fait: 'Cité explicitement par L’Étudiant parmi les nouvelles spécialisations apparues avec la digitalisation de l’assurance.', pourquoi: 'Les compagnies historiques ne peuvent plus rivaliser avec les néo-assurances sans rénover complètement leurs serveurs vers le Cloud.', a_retenir: 'Un profil d’ingénieur d’élite très disputé par les recruteurs du secteur.' }
    },
    {
      id: 'ingenieur-smart-contracts',
      slug: 'ingenieur-smart-contracts',
      title: 'Ingénieur en Développement de Smart Contracts',
      aliases: ['Smart Contract Developer', 'Ingénieur Blockchain DeFi', 'Solidity Developer'],
      icon: '📜',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=80',
      familyId: 'finance-fintech',
      familyName: 'Finance, Banque, Assurance & FinTech',
      domain: 'Finance Numérique & FinTech',
      domainId: 'finance-numerique-fintech',
      subdomain: 'Blockchain, Crypto-actifs & Smart Contracts',
      sourceLEtudiant: true,
      isEmerging: true,
      level: 'Bac +5 (Diplôme d’Ingénieur / Master Génie Logiciel & Blockchain)',
      salary: '🇫🇷 France : De 3 800 € à 8 000 €+ brut/mois (L’Étudiant — Métier émergent) • 🇸🇳 Sénégal : 900 000 - 2 600 000 FCFA / mois',
      simpleDefinition: 'Programme des contrats informatiques autonomes qui s’exécutent automatiquement sur la blockchain sans intermédiaire quand les conditions sont remplies (ex : indemnisation automatique de vol retardé).',
      shortDescription: 'Développeur spécialisé dans le code infalsifiable de la blockchain, il automatise les transactions et les indemnisations sans intervention humaine.',
      longDescription: 'À la pointe du génie logiciel financier, l’ingénieur en smart contracts écrit du code qui manipule directement des actifs financiers sur la blockchain. Dans l’assurance paramétrique par exemple, son contrat verse automatiquement une indemnité dès que les satellites enregistrent un retard d’avion de 3 heures ou une sécheresse mesurée par capteurs, sans que l’assuré n’ait besoin d’envoyer de formulaire.',
      mainObjective: 'Programmer des contrats financiers décentralisés infalsifiables, audités et inviolables sur les réseaux blockchain.',
      companyRole: 'Artisan du code d’automatisation radicale des engagements financiers et assurantiels.',
      workEnvironment: ['🏢 FinTech Web3, lab blockchain de banque ou travail remote international', '💻 Éditeurs de code (VS Code, Foundry, Hardhat)', '🧪 Sessions d’audits de sécurité de code impitoyables'],
      missions: {
        main: ['Développer des contrats intelligents en Solidity, Rust ou Vyper', 'Auditer la sécurité du code pour éliminer toute faille de réentrance ou de débordement', 'Connecter les smart contracts au monde réel via des oracles de données décentralisés (Chainlink)', 'Concevoir des protocoles de finance décentralisée (prêts automatisés, pools de liquidité)'],
        secondary: ['Optimiser la consommation de frais d’exécution réseau (Gas optimization)', 'Rédiger la documentation technique et les tests unitaires exhaustifs']
      },
      typicalDay: [
        { time: '09:00', title: 'Revue de code et tests de sécurité', desc: 'Analyse critique du code d’un smart contract d’assurance récolte pour vérifier l’absence de failles.' },
        { time: '11:00', title: 'Développement d’une logique d’oracle', desc: 'Connexion d’un flux de données météo décentralisé pour déclencher l’indemnisation automatique des agriculteurs.' },
        { time: '14:30', title: 'Optimisation de la consommation de Gas', desc: 'Réécriture d’une boucle algorithmique pour réduire de 30 % les frais de transaction des utilisateurs.' },
        { time: '16:45', title: 'Déploiement sur réseau de test (Testnet)', desc: 'Exécution d’une suite de 200 tests d’attaque simulée avant la mise en ligne finale.' }
      ],
      skills: {
        technical: ['Langages de smart contracts (Solidity, Rust, Vyper)', 'Sécurité du code blockchain et prévention des attaques de réentrance', 'Intégration d’oracles décentralisés (Chainlink)', 'Frameworks de développement (Foundry, Hardhat)', 'Cryptographie et architecture Ethereum / EVM'],
        human: ['Rigueur chirurgicale (une fois déployé sur la blockchain, un contrat ne peut plus être modifié facilement)', 'Esprit d’analyse mathématique', 'Autonomie et curiosité technologique'],
        tools: ['Foundry / Hardhat', 'Slither (analyseur de vulnérabilités)', 'Ethers.js / Web3.js', 'GitHub']
      },
      studies: {
        pathway: [
          { step: 'Baccalauréat', title: 'Bac général ou dominante Mathématiques / Informatique', desc: 'Goût prononcé pour l’algorithmique.' },
          { step: 'Bac +3', title: 'Licence Informatique ou École de Code', desc: 'Bases solides en structures de données et programmation.' },
          { step: 'Bac +5', title: 'Diplôme d’Ingénieur Logiciel ou Master Informatique & Systèmes Décentralisés', desc: 'Spécialisation dans les architectures blockchain.' }
        ],
        schools: [
          { name: 'Écoles d’Ingénieurs (Télécom, EPITA, 42 Network)', country: 'France', scope: 'France' },
          { name: 'ESP Dakar / Écoles du numérique d’Afrique de l’Ouest', country: 'Sénégal', scope: 'Afrique' }
        ],
        certifications: ['Certified Blockchain Developer', 'Smart Contract Auditor Certification']
      },
      career: {
        sectors: ['Startups Web3 & Protocoles DeFi', 'Compagnies d’assurance pionnières en assurance paramétrique', 'Banques d’investissement et cabinets d’audit blockchain'],
        employerTypes: ['Entreprises technologiques et projets internationaux'],
        evolution: 'Smart Contract Developer ➔ Lead Blockchain Engineer ➔ Auditeur de Sécurité Blockchain ➔ Fondateur de Protocole Web3',
        pros: 'Opportunités de travail remote mondial avec rémunérations internationales très élevées, travail à la frontière de l’innovation.',
        cons: 'Risque de failles de sécurité catastrophiques en cas de bug de code (fonds irrémédiablement perdus), pression extrême avant déploiement.'
      },
      relatedJobSlugs: ['specialiste-cryptomonnaies', 'expert-cybersecurite-financiere', 'dev-fullstack'],
      connectedFamilies: ['numerique-ia'],
      resources: [{ type: 'article', title: 'L’ingénieur en développement de Smart Contract selon L’Étudiant', url: 'https://www.letudiant.fr/metiers/secteur/banque-assurance.html', source: 'L’Étudiant' }],
      sources: ['L’Étudiant', 'Ethereum Foundation', 'OpenZeppelin'],
      interests: ['technologie-code', 'resoudre-problemes'],
      aiImpact: { level: 'Élevé', summary: 'L’IA assiste la génération de tests unitaires et la détection des failles logiques dans les contrats avant leur déploiement irréversible.', automatedTasks: ['Génération de squelettes de tests', 'Audit syntaxique de sécurité'], emergingSkills: ['Développement de contrats intelligents autonomes orchestrés par des agents IA'], humanEdge: 'L’architecture de confiance et la validation formelle des règles de gouvernance financière.' },
      saviezVous: { statut: 'en_emergence', fait: 'Cité explicitement par L’Étudiant parmi les métiers pionniers émergeants du secteur banque-assurance.', pourquoi: 'Les smart contracts permettent l’assurance paramétrique instantanée : aucun dossier à remplir, indemnisation immédiate dès que l’événement objectif survient.', a_retenir: 'Un profil de développeur d’élite très recherché sur la scène internationale.' }
    }
  ];

  // =========================================================================
  // 2.b NORMALISATION MULTI-TERRITORIALE DES SALAIRES
  // =========================================================================
  FINANCE_JOBS.forEach(job => {
    if (!job.salaryRanges && job.salary) {
      const parts = job.salary.split('•');
      const frPart = parts.find(p => p.includes('France') || p.includes('🇫🇷')) || '';
      const snPart = parts.find(p => p.includes('Sénégal') || p.includes('🇸🇳')) || '';

      const frRange = frPart.replace(/🇫🇷\s*France\s*:\s*/i, '').trim();
      const snRange = snPart.replace(/🇸🇳\s*Sénégal\s*:\s*/i, '').trim();

      job.salaryRanges = {
        france: {
          raw: frRange,
          range: frRange,
          source: 'L’Étudiant / APEC'
        },
        senegal: {
          raw: snRange,
          range: snRange,
          source: 'Marché bancaire UEMOA / Dakar'
        }
      };
    }
  });

  // =========================================================================
  // 3. EXPORT DU MODULE ORIENTATION FINANCE DATA
  // =========================================================================
  const OrientationFinanceData = {
    DOMAINS: FINANCE_DOMAINS,
    JOBS: FINANCE_JOBS,
    getDomains: function () {
      return FINANCE_DOMAINS;
    },
    getJobs: function () {
      return FINANCE_JOBS;
    },
    getJobBySlug: function (slug) {
      if (!slug) return null;
      return FINANCE_JOBS.find(j => j.slug === slug || j.id === slug) || null;
    }
  };

  if (typeof window !== 'undefined') {
    window.OrientationFinanceData = OrientationFinanceData;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = OrientationFinanceData;
  }

  if (typeof console !== 'undefined' && console.log) {
    console.log('✅ OrientationFinanceData : 27 fiches détaillées de la Finance, Banque & Assurance initialisées sur 10 domaines d\'excellence.');
  }
})();

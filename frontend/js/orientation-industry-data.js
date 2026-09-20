/**
 * 🏭 MODULE OFFICIEL DES MÉTIERS DE L'INDUSTRIE, TECHNOLOGIES & INGÉNIERIE
 * Le Monde du Travail - Cartographie d'Excellence Métiers
 * 
 * Sources de référence :
 * - L'Étudiant : Métiers du secteur Industrie et Technologies (https://www.letudiant.fr/metiers/secteur/industrie.html)
 * - Onisep : Référentiel des métiers du domaine mécanique (99 métiers)
 * 
 * Double contexte géographique :
 * - France (€ brut/an, BTS, BUT, Grandes Écoles d'ingénieurs)
 * - Sénégal & Afrique de l'Ouest (FCFA net/mois, ESP Dakar, EPT Thiès, ISEP, Dakar Marine, SOCOCIM)
 * 
 * 30 Domaines structurés • 36 Fiches métiers haute fidélité (6 onglets conformes)
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        var exp = factory();
        module.exports = exp;
        if (typeof global !== 'undefined') {
            global.OrientationIndustryData = exp;
        }
    } else {
        root.OrientationIndustryData = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    'use strict';

    var DOMAINS = [
  {
    "id": "conception-ingenierie-indus",
    "name": "Conception & Ingénierie",
    "icon": "📐",
    "order": 1,
    "chainStage": "Conception & Modélisation",
    "description": "Imaginer, modéliser en 3D et concevoir les pièces, mécanismes et machines spéciales de l'industrie de demain.",
    "subdomains": [
      "Modélisation CAO 3D",
      "Design produit",
      "Ingénierie mécanique",
      "Calcul de structures"
    ]
  },
  {
    "id": "mecanique-industrielle",
    "name": "Mécanique, Usinage & Outillage",
    "icon": "⚙️",
    "order": 2,
    "chainStage": "Fabrication mécanique",
    "description": "Façonner et sculpter le métal au micron près par tournage, fraisage CN, découpe, pliage et soudage de précision.",
    "subdomains": [
      "Usinage à commande numérique",
      "Ajustage & Montage",
      "Outillage de précision & Moules",
      "Chaudronnerie & Soudure"
    ]
  },
  {
    "id": "genie-industriel-orga",
    "name": "Génie Industriel & Organisation",
    "icon": "🏗️",
    "order": 3,
    "chainStage": "Industrialisation & Méthodes",
    "description": "Optimiser les procédés de fabrication, définir les gammes d'atelier et chasser les gaspillages selon le Lean Manufacturing.",
    "subdomains": [
      "Méthodes & Industrialisation",
      "Lean Manufacturing",
      "Ergonomie des postes",
      "Chrono-analyse & Temps standards"
    ]
  },
  {
    "id": "production-fabrication-indus",
    "name": "Production & Fabrication en Série",
    "icon": "🏭",
    "order": 4,
    "chainStage": "Production",
    "description": "Piloter les lignes de production, animer les équipes d'ateliers et transformer les matières premières en produits finis.",
    "subdomains": [
      "Conduite de ligne",
      "Pilotage d'atelier",
      "Management de production",
      "Performance industrielle (TRS)"
    ]
  },
  {
    "id": "automatisation-robotique-indus",
    "name": "Automatisation, Robotique & Cobotique",
    "icon": "🤖",
    "order": 5,
    "chainStage": "Automatisation",
    "description": "Programmer les automates industriels et intégrer des robots et cobots collaboratifs pour rendre les usines agiles et sûres.",
    "subdomains": [
      "Automates programmables (API)",
      "Robotique industrielle",
      "Cobotique collaborative",
      "Supervision SCADA"
    ]
  },
  {
    "id": "maintenance-industrielle",
    "name": "Maintenance Industrielle Multi-technique",
    "icon": "🔧",
    "order": 6,
    "chainStage": "Maintenance & Fiabilisation",
    "description": "Diagnostiquer, dépanner, entretenir et fiabiliser les équipements de production pour éliminer les arrêts de ligne.",
    "subdomains": [
      "Maintenance préventive",
      "Dépannage d'urgence",
      "Maintenance prédictive",
      "GMAO & Fiabilité"
    ]
  },
  {
    "id": "electrotechnique-electronique-indus",
    "name": "Électrotechnique & Électronique Industrielle",
    "icon": "⚡",
    "order": 7,
    "chainStage": "Puissance & Contrôle",
    "description": "Alimenter les machines en puissance électrique et concevoir les cartes électroniques et capteurs de commande.",
    "subdomains": [
      "Distribution électrique d'usine",
      "Variateurs de vitesse",
      "Cartes électroniques",
      "Systèmes embarqués"
    ]
  },
  {
    "id": "chimie-procedes-industriels",
    "name": "Chimie Industrielle & Génie des Procédés",
    "icon": "🧪",
    "order": 8,
    "chainStage": "Transformation chimique",
    "description": "Transformer la matière à l'échelle industrielle : réactions chimiques, distillation, séparation, raffinage et formulation.",
    "subdomains": [
      "Génie chimique",
      "Chimie fine",
      "Raffinage & Pétrochimie",
      "Formulation industrielle"
    ]
  },
  {
    "id": "materiaux-metallurgie-indus",
    "name": "Matériaux, Métallurgie & Traitements",
    "icon": "🧱",
    "order": 9,
    "chainStage": "Matières premières",
    "description": "Élaborer, traiter thermiquement et caractériser les aciers, alliages légers, polymères et composites de pointe.",
    "subdomains": [
      "Sidérurgie & Fonderie",
      "Traitements thermiques & de surface",
      "Composites haute performance",
      "Polymères"
    ]
  },
  {
    "id": "aeronautique-spatial-indus",
    "name": "Aéronautique & Spatial",
    "icon": "🛩️",
    "order": 10,
    "chainStage": "Aéronautique & Espace",
    "description": "Construire, équiper et certifier les aéronefs civils, satellites, lanceurs spatiaux et systèmes de défense.",
    "subdomains": [
      "Aérostructures",
      "Turboréacteurs & Propulsion",
      "Avionique de bord",
      "Maintenance MRO Part-145"
    ]
  },
  {
    "id": "automobile-mobilite-indus",
    "name": "Automobile & Mobilité Électrique",
    "icon": "🚗",
    "order": 11,
    "chainStage": "Mobilité",
    "description": "Concevoir et fabriquer les véhicules thermiques, hybrides, électriques et leurs composants critiques (batteries, moteurs).",
    "subdomains": [
      "Véhicules électriques & Batteries",
      "Emboutissage & Carrosserie",
      "Chaîne de traction",
      "Sécurité passive (Crash)"
    ]
  },
  {
    "id": "naval-maritime-industriel",
    "name": "Construction Navale & Maritime Industriel",
    "icon": "🚢",
    "order": 12,
    "chainStage": "Naval",
    "description": "Bâtir, caréner et moderniser les navires de commerce, bâtiments militaires, bateaux de pêche et structures offshore.",
    "subdomains": [
      "Architecture navale",
      "Chaudronnerie navale & Coque",
      "Propulsion marine",
      "Réparation en cale sèche"
    ]
  },
  {
    "id": "textile-habillement-industriel",
    "name": "Textile & Matériaux Souples Industriels",
    "icon": "🧵",
    "order": 13,
    "chainStage": "Textile technique",
    "description": "Tisser, ennoblir et façonner les textiles techniques, géotextiles, vêtements professionnels et matériaux souples composites.",
    "subdomains": [
      "Textiles techniques",
      "Filature & Tissage industriel",
      "Ennoblissement & Teinture",
      "Confection automatisée"
    ]
  },
  {
    "id": "pharma-biotech-industrielle",
    "name": "Pharmaceutique & Biotechnologies Industrielles",
    "icon": "💊",
    "order": 14,
    "chainStage": "Santé & Pharmacie",
    "description": "Formuler, conditionner sous atmosphère stérile et produire en série les médicaments, vaccins et dispositifs médicaux.",
    "subdomains": [
      "Salles blanches & Stérilité",
      "Bonnes Pratiques de Fabrication (BPF)",
      "Bioréacteurs",
      "Conditionnement pharmaceutique"
    ]
  },
  {
    "id": "agro-industrie-transformation",
    "name": "Agro-Industrie & Lignes Agroalimentaires",
    "icon": "🍎",
    "order": 15,
    "chainStage": "Agroalimentaire",
    "description": "Transformer à grande échelle les produits agricoles et halieutiques : meunerie, conserveries, boissons, biscuiteries.",
    "subdomains": [
      "Procédés agroalimentaires",
      "Normes HACCP & Hygiène",
      "Embouteillage à grande vitesse",
      "Lignes de surgélation"
    ]
  },
  {
    "id": "nucleaire-industriel",
    "name": "Industrie Nucléaire & Sûreté",
    "icon": "⚛️",
    "order": 16,
    "chainStage": "Nucléaire & Énergie",
    "description": "Fabriquer et maintenir les réacteurs, cuves sous haute pression et circuits primaires sous les exigences de sûreté les plus strictes.",
    "subdomains": [
      "Sûreté nucléaire",
      "Fabrication de composants primaires",
      "Radioprotection",
      "Démantèlement industriel"
    ]
  },
  {
    "id": "energie-industrielle-procedes",
    "name": "Énergie Industrielle & Utilités",
    "icon": "⚡",
    "order": 17,
    "chainStage": "Utilités industrielles",
    "description": "Produire et distribuer les énergies indispensables à l'usine : vapeur, air comprimé, eau glacée, électricité et chaleur fatale.",
    "subdomains": [
      "Chaufferies industrielles & Vapeur",
      "Air comprimé & Réseaux fluides",
      "Efficacité énergétique (ISO 50001)",
      "Cogénération"
    ]
  },
  {
    "id": "rd-recherche-industrielle",
    "name": "Recherche & Développement Industrielle",
    "icon": "🔬",
    "order": 18,
    "chainStage": "R&D & Innovation",
    "description": "Explorer les ruptures technologiques, lever les verrous scientifiques, créer des preuves de concept et breveter les innovations.",
    "subdomains": [
      "Recherche appliquée",
      "Brevets & Propriété industrielle",
      "Prototypes de rupture",
      "Partenariats scientifiques"
    ]
  },
  {
    "id": "essais-experimentation-indus",
    "name": "Essais, Bancs de Test & Expérimentation",
    "icon": "🧪",
    "order": 19,
    "chainStage": "Essais & Validation",
    "description": "Mettre les prototypes à l'épreuve des pires conditions (vibrations, chocs thermiques, fatigue) pour valider leur endurance.",
    "subdomains": [
      "Bancs d'essais instrumentés",
      "Essais climatiques & vibratoires",
      "Mesures physiques & Capteurs",
      "Corrélation essais-calcul"
    ]
  },
  {
    "id": "qse-securite-environnement-indus",
    "name": "Qualité, Sécurité & Environnement (QSE)",
    "icon": "✅",
    "order": 20,
    "chainStage": "QSE & Sécurité",
    "description": "Garantir le zéro accident, protéger la santé des salariés, certifier l'usine (ISO 9001/14001/45001) et maîtriser les rejets.",
    "subdomains": [
      "Sécurité au travail & DUERP",
      "Systèmes de management intégré",
      "Gestion des rejets & Déchets",
      "Culture de prévention"
    ]
  },
  {
    "id": "controle-inspection-metrologie",
    "name": "Contrôle, Inspection & Contrôle Non Destructif",
    "icon": "📏",
    "order": 21,
    "chainStage": "Contrôle & Métrologie",
    "description": "Mesurer les pièces au micron sur MMT et radiographier les métaux pour déceler les défauts internes sans détruire la pièce.",
    "subdomains": [
      "Contrôle Non Destructif (CND)",
      "Métrologie tridimensionnelle (MMT)",
      "Inspection réglementaire",
      "Gestion du parc d'étalons"
    ]
  },
  {
    "id": "logistique-supply-chain-indus",
    "name": "Logistique Industrielle & Supply Chain",
    "icon": "📦",
    "order": 22,
    "chainStage": "Supply Chain & Flux",
    "description": "Organiser la circulation fluide des matières premières, composants et produits finis, en juste-à-temps et sans rupture.",
    "subdomains": [
      "Gestion des approvisionnements",
      "Gestion des stocks (WMS)",
      "Alimentation des lignes (Kanban)",
      "Expéditions internationales"
    ]
  },
  {
    "id": "planification-ordonnancement-indus",
    "name": "Planification & Ordonnancement",
    "icon": "🗓️",
    "order": 23,
    "chainStage": "Planification",
    "description": "Planifier chaque seconde des machines de l'usine pour satisfaire les commandes clients dans les délais promis au coût optimal.",
    "subdomains": [
      "Plan Directeur de Production (PDP)",
      "Ordonnancement à capacité finie",
      "Équilibrage charge/capacité",
      "Suivi du taux de service"
    ]
  },
  {
    "id": "achats-industriels",
    "name": "Achats Industriels & Sourcing",
    "icon": "🛒",
    "order": 24,
    "chainStage": "Achats & Sourcing",
    "description": "Sélectionner et négocier auprès des fournisseurs mondiaux les matières premières, composants critiques et équipements d'usine.",
    "subdomains": [
      "Sourcing international",
      "Négociation de contrats industriels",
      "Gestion des risques fournisseurs",
      "Achats durables & RSE"
    ]
  },
  {
    "id": "commerce-technico-commercial-indus",
    "name": "Commerce & Ingénierie Commerciale B2B",
    "icon": "💼",
    "order": 25,
    "chainStage": "Vente & Affaires",
    "description": "Vendre des solutions industrielles complexes chiffrées en millions d'euros en conjuguant expertise technique et stratégie d'affaires.",
    "subdomains": [
      "Vente de biens d'équipement",
      "Chiffrage d'affaires complexes",
      "Avant-vente technique",
      "Gestion de grands comptes industriels"
    ]
  },
  {
    "id": "eco-conception-industrie-durable",
    "name": "Éco-Conception & Industrie Durable",
    "icon": "🌱",
    "order": 26,
    "chainStage": "Décarbonation & Recyclage",
    "description": "Réduire l'empreinte carbone dès la planche à dessin : analyse du cycle de vie (ACV), réparabilité, allègement et recyclabilité.",
    "subdomains": [
      "Analyse du Cycle de Vie (ACV)",
      "Économie circulaire industrielle",
      "Matériaux recyclés & Biosourcés",
      "Décarbonation des usines"
    ]
  },
  {
    "id": "industrie-4-0-usines-intelligentes",
    "name": "Industrie 4.0 & Usines Intelligentes",
    "icon": "🧠",
    "order": 27,
    "chainStage": "Transformation 4.0",
    "description": "Connecter les machines par l'IoT industriel (IIoT), collecter les données d'atelier et piloter les usines par les données en temps réel.",
    "subdomains": [
      "IoT industriel (IIoT)",
      "Systèmes d'exécution (MES)",
      "Cybersécurité industrielle (OT)",
      "Cloud manufacturier"
    ]
  },
  {
    "id": "jumeau-numerique-simulation-indus",
    "name": "Jumeau Numérique & Simulation",
    "icon": "🥽",
    "order": 28,
    "chainStage": "Jumeau Numérique",
    "description": "Créer la réplique virtuelle interactive de l'usine pour tester virtuellement les automatismes et anticiper les pannes.",
    "subdomains": [
      "Virtual Commissioning",
      "Réalité virtuelle & Augmentée",
      "Simulation de flux d'usine",
      "Jumeaux numériques prédictifs"
    ]
  },
  {
    "id": "fabrication-additive-impression3d",
    "name": "Fabrication Additive & Impression 3D",
    "icon": "🖨️",
    "order": 29,
    "chainStage": "Impression 3D",
    "description": "Fabriquer des pièces métalliques ou polymères couche par couche par fusion laser pour alléger et créer des formes inédites.",
    "subdomains": [
      "Impression 3D métal (SLM / DMLS)",
      "Design for Additive Manufacturing (DfAM)",
      "Optimisation topologique",
      "Polymères industriels (SLS)"
    ]
  },
  {
    "id": "management-industriel-direction",
    "name": "Management Industriel & Direction de Site",
    "icon": "🏢",
    "order": 30,
    "chainStage": "Direction & Gouvernance",
    "description": "Diriger l'ensemble des femmes, hommes, budgets et machines d'un site industriel avec une vision stratégique et humaine.",
    "subdomains": [
      "Direction d'usine (P&L)",
      "Gouvernance industrielle",
      "Dialogue social & CSE",
      "Investissements stratégiques (CAPEX)"
    ]
  }
];

    var JOBS = [
  {
    "id": "dessinateur-industriel",
    "slug": "dessinateur-industriel",
    "title": "Dessinateur Industriel / Projeteur CAO",
    "aliases": [
      "Dessinateur-projeteur en mécanique",
      "Concepteur CAO 3D",
      "Technicien de bureau d'études"
    ],
    "icon": "📐",
    "familyId": "industrie-mecanique",
    "domain": "Conception & Ingénierie",
    "domainId": "conception-ingenierie-indus",
    "subdomain": "Dessin industriel & Modélisation CAO",
    "shortDescription": "Conçoit et modélise en 2D et 3D les plans techniques de pièces, d'équipements et d'ensembles mécaniques destinés à la production industrielle.",
    "longDescription": "Le dessinateur industriel traduit les cahiers des charges et les études de faisabilité des ingénieurs en plans de fabrication précis au millimètre près. À l'aide de logiciels de conception assistée par ordinateur (CAO), il dimensionne les pièces, applique les tolérances géométriques, définit les matériaux et prépare la nomenclature indispensable aux usineurs et monteurs.",
    "missions": [
      "Modéliser des pièces et sous-ensembles mécaniques en 3D volumique et surfacique sous SolidWorks, CATIA ou Inventor",
      "Établir les plans d'ensemble, de sous-ensemble et de détail avec cotation fonctionnelle et tolérances ISO",
      "Vérifier la faisabilité technique, les interférences cinématiques et la fabricabilité avec les équipes méthodes",
      "Rédiger la nomenclature industrielle exhaustive (références matières, visserie, composants standards)",
      "Mettre à jour les dossiers de plans techniques suite aux retours d'ateliers et aux modifications clients"
    ],
    "workEnvironment": [
      "Bureau d'études intégré",
      "Société d'ingénierie mécanique",
      "Usine de fabrication mécanique",
      "Écrans multiples et stations de travail CAO"
    ],
    "typicalDay": [
      {
        "time": "08:30",
        "desc": "Point d'avancement avec l'ingénieur projet et revue des modifications demandées par l'atelier"
      },
      {
        "time": "10:00",
        "desc": "Conception 3D d'un carter réducteur sous CATIA et vérification des tolérances d'ajustement"
      },
      {
        "time": "12:30",
        "desc": "Déjeuner d'équipe technique"
      },
      {
        "time": "14:00",
        "desc": "Simulation d'assemblage cinématique pour détecter d'éventuelles collisions d'arbres en rotation"
      },
      {
        "time": "16:30",
        "desc": "Génération de la mise en plan 2D pour l'atelier d'usinage et archivage dans le PDM/PLM"
      }
    ],
    "companyRole": "Pivot technique entre le concept théorique de l'ingénieur R&D et la matérialisation physique en atelier d'usinage.",
    "skills": {
      "technical": [
        "Maîtrise experte des logiciels de CAO mécanique (SolidWorks, CATIA, PTC Creo, Autodesk Inventor)",
        "Cotation fonctionnelle, tolérancement géométrique (GPS ISO) et états de surface",
        "Connaissance approfondie des matériaux industriels (aciers, aluminiums, polymères, composites)",
        "Maîtrise des procédés d'usinage, de fonderie, de tôlerie et d'assemblage"
      ],
      "human": [
        "Rigueur et précision absolue",
        "Vision spatiale tridimensionnelle aiguisée",
        "Écoute et collaboration inter-métiers",
        "Patience et méticulosité"
      ],
      "tools": [
        "CATIA V5/3DEXPERIENCE",
        "SolidWorks",
        "Autodesk Inventor",
        "PTC Creo",
        "Systèmes PDM/PLM (Windchill, Enovia)"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "Bac Pro / Bac STI2D",
          "title": "Bac STI2D ITEC ou Bac Pro Étude et Définition de Produits Industriels",
          "desc": "Bases du dessin technique et des sciences de l'ingénieur."
        },
        {
          "step": "Bac +2 (BTS / BUT)",
          "title": "BTS Conception de Produits Industriels (CPI) ou BUT Génie Mécanique et Productique (GMP)",
          "desc": "Maîtrise de la chaîne numérique de conception, dimensionnement et résistance des matériaux."
        }
      ],
      "schools": [
        {
          "name": "Lycées techniques & IUT de France (BTS CPI, BUT GMP) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "École Supérieure Polytechnique de Dakar (ESP - Département Génie Mécanique) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Supérieur d'Enseignement Professionnel (ISEP de Diamniadio) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "Certifications officielles Dassault Systèmes (CSWA, CSWP SolidWorks)",
        "Certifications Autodesk Certified Professional"
      ],
      "france": [
        "Lycées techniques & IUT de France (BTS CPI, BUT GMP) — France"
      ],
      "senegal": [
        "École Supérieure Polytechnique de Dakar (ESP - Département Génie Mécanique) — Sénégal",
        "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal",
        "Institut Supérieur d'Enseignement Professionnel (ISEP de Diamniadio) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Automobile & Mobilité",
        "Aéronautique & Spatial",
        "Machines-outils & Équipements",
        "Agro-industrie & Chaudronnerie"
      ],
      "employerTypes": [
        "Bureaux d'études indépendants",
        "Constructeurs industriels",
        "PME de mécanique de précision",
        "Grandes entreprises industrielles"
      ],
      "evolution": [
        "Dessinateur-projeteur senior",
        "Responsable de bureau d'études",
        "Ingénieur d'études par VAE ou formation continue"
      ],
      "pros": [
        "Métier créatif et technique au cœur du produit",
        "Forte demande sur le marché de l'emploi",
        "Possibilité de travailler dans tous les secteurs industriels"
      ],
      "cons": [
        "Travail prolongé sur écran",
        "Pressions sur les délais de livraison des plans de fabrication"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Télécharger un logiciel de CAO gratuit (ex: FreeCAD ou Onshape) et modéliser un assemblage mécanique complet en 3 pièces avec mise en plan cotée.",
      "steps": [
        "Apprendre les règles de la cotation normalisée ISO et les projections orthogonales",
        "Modéliser une pièce simple sous logiciel CAO paramétrique",
        "Réaliser un assemblage avec contraintes mécaniques (coaxiales, coïncidentes)"
      ],
      "freeResources": [
        "FreeCAD Open Source",
        "Onshape Education",
        "Chaînes YouTube d'ingénierie mécanique et de CAO"
      ]
    },
    "aiImpact": {
      "summary": "L'IA générative et le generative design automatisent la création d'ébauches et l'optimisation topologique, recentrant le dessinateur sur l'arbitrage fonctionnel et la conformité normative.",
      "positiveImpacts": [
        "Génération automatique de variantes légères optimisées",
        "Automatisation de la cotation répétitive sur les mises en plan"
      ],
      "risksAndChallenges": [
        "Nécessité de contrôler rigoureusement les tolérances générées par l'IA",
        "Risque d'oubli des contraintes réelles d'atelier"
      ],
      "recommendedSkills": [
        "Maîtrise du design génératif",
        "Intégration des contraintes de fabrication additive dans la CAO"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, la modernisation industrielle (Plateforme Industrielle Internationale de Diamniadio, zones franches de Sandiara, usines de transformation agroalimentaire) crée une forte demande de projeteurs CAO capables d'adapter des machines importées aux besoins locaux.",
      "westAfricaOpportunities": "Besoin massif de dessinateurs industriels pour la maintenance d'usines minières, de cimenteries et de lignes agro-industrielles dans toute la CEDEAO.",
      "localChampions": [
        "Plateforme Industrielle de Diamniadio (PDI)",
        "SOCOCIM Industries",
        "SENAC SA",
        "Chantier Naval de Dakar (Dakar Marine)"
      ]
    },
    "salary": "🇫🇷 France : 24 000 - 42 000 € brut/an • 🇸🇳 Sénégal : 250 000 - 750 000 FCFA net/mois",
    "connectedFamilies": [
      "numerique-ia",
      "btp-architecture"
    ],
    "relatedJobs": [
      "designer-industriel",
      "ingenieur-mecanique",
      "technicien-d-etudes-industriel"
    ],
    "sources": [
      {
        "organization": "L'Étudiant",
        "title": "Fiche métier : Dessinateur industriel",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie/dessinateur-industriel.html",
        "type": "metier"
      },
      {
        "organization": "Onisep",
        "title": "Dessinateur / Dessinatrice en construction mécanique",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/dessinateur-dessinatrice-en-construction-mecanique",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Près de 95% des objets manufacturés modernes ont d'abord existé sous la forme d'un modèle mathématique 3D conçu par un dessinateur industriel.",
      "pourquoi": "La maquette numérique permet d'éliminer les erreurs d'assemblage avant même de couler le premier gramme de métal.",
      "a_retenir": "Un bon plan d'atelier fait gagner des centaines d'heures d'usinage et des milliers d'euros."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant & grilles UIMM métallurgie",
        "range": "24 000 - 42 000 € brut/an",
        "junior": "24 000 € brut/an",
        "senior": "42 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets constatés en bureau d'études et usines à Dakar/Thiès",
        "range": "250 000 - 750 000 FCFA net/mois",
        "junior": "250 000 FCFA net/mois",
        "senior": "750 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Conçoit et modélise en 2D et 3D les plans techniques de pièces, d'équipements et d'ensembles mécaniques destinés à la production industrielle.",
    "level": "Bac +2 à Bac +3 (BTS / BUT / Licence pro)"
  },
  {
    "id": "designer-industriel",
    "slug": "designer-industriel",
    "title": "Designer Industriel / Concepteur Produit",
    "aliases": [
      "Designer produit",
      "Concepteur de produits industriels",
      "Industrial Designer"
    ],
    "icon": "🎨",
    "familyId": "industrie-mecanique",
    "domain": "Conception & Ingénierie",
    "domainId": "conception-ingenierie-indus",
    "subdomain": "Design produit & Ergonomie",
    "shortDescription": "Allie esthétique, ergonomie, faisabilité technique et éco-conception pour créer des objets industriels attractifs, fonctionnels et fabriquables en série.",
    "longDescription": "Le designer industriel imagine la forme, l'usage, la texture et l'expérience utilisateur de produits grand public ou d'équipements professionnels (véhicules, appareils électroménagers, outils, mobilier industriel). Il travaille en synergie étroite avec les ingénieurs d'études et le marketing pour concilier désirabilité esthétique, coûts de fabrication et durabilité environnementale.",
    "missions": [
      "Concevoir des concepts produits innovants par le croquis, le rendu 3D et le prototypage rapide",
      "Étudier l'ergonomie, les usages réels des utilisateurs et l'accessibilité",
      "Sélectionner les matériaux durables, les textures de surface et les finitions industrielles",
      "Collaborer avec les ingénieurs mécaniques pour intégrer les contraintes de moulage et d'assemblage",
      "Présenter les concepts aux comités de direction et affiner le design selon les retours d'usage"
    ],
    "workEnvironment": [
      "Agences de design industriel",
      "Studios de design intégrés aux grands groupes",
      "Ateliers de prototypage 3D"
    ],
    "typicalDay": [
      {
        "time": "09:00",
        "desc": "Veille tendances matériaux et analyse des retours de tests utilisateurs sur un prototype"
      },
      {
        "time": "10:30",
        "desc": "Session d'esquisses créatives sur tablette graphique pour un nouvel équipement nomade"
      },
      {
        "time": "12:30",
        "desc": "Déjeuner de travail avec le chef de produit marketing"
      },
      {
        "time": "14:00",
        "desc": "Modélisation surfacique avancée sous Rhino/Alias et rendu photoréaliste sous KeyShot"
      },
      {
        "time": "16:30",
        "desc": "Vérification en atelier du prototype imprimé en 3D avec les ingénieurs mécaniques"
      }
    ],
    "companyRole": "Donneur de sens et d'identité au produit, garant de l'équilibre entre désirabilité client et faisabilité industrielle.",
    "skills": {
      "technical": [
        "Modélisation 3D surfacique (Rhino 3D, Alias, SolidWorks)",
        "Rendu photoréaliste (KeyShot, Blender)",
        "Ergonomie et design thinking",
        "Éco-conception et cycle de vie des produits"
      ],
      "human": [
        "Créativité foisonnante et sensibilité esthétique",
        "Empathie utilisateur",
        "Capacité à défendre une vision devant des ingénieurs",
        "Curiosité technique"
      ],
      "tools": [
        "Rhinoceros 3D",
        "Autodesk Alias",
        "KeyShot",
        "Suite Adobe Creative (Photoshop, Illustrator)",
        "Imprimantes 3D SLA/FDM"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "Bac +3",
          "title": "DN MADE mention Objet ou Bachelor en Design Industriel",
          "desc": "Fondamentaux de la démarche de design, maquettage et culture visuelle."
        },
        {
          "step": "Bac +5 (Master / Diplôme d'École)",
          "title": "Diplôme d'École Supérieure de Design (ENSCI-Les Ateliers, Strate, ENSAD, Rubika)",
          "desc": "Gestion de projets complexes, prospective industrielle et partenariats industriels."
        }
      ],
      "schools": [
        {
          "name": "ENSCI - Les Ateliers (Paris) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "Strate École de Design (Sèvres) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "École Supérieure d'Art et de Design de Dakar (ESAD) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Amadou Mahtar Mbow (UAM Diamniadio - Pôle Ingénierie & Design) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "Affiliation Alliance France Design (AFD)",
        "Certifications logiciels CAO design"
      ],
      "france": [
        "ENSCI - Les Ateliers (Paris) — France",
        "Strate École de Design (Sèvres) — France"
      ],
      "senegal": [
        "École Supérieure d'Art et de Design de Dakar (ESAD) — Sénégal",
        "Université Amadou Mahtar Mbow (UAM Diamniadio - Pôle Ingénierie & Design) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Automobile & Transport",
        "Électroménager & High-Tech",
        "Matériel médical",
        "Mobilier & Équipements de travail"
      ],
      "employerTypes": [
        "Agences de design globales",
        "Constructeurs automobiles",
        "Grandes entreprises manufacturières",
        "Studio indépendant"
      ],
      "evolution": [
        "Lead Designer",
        "Directeur du Design / Chief Design Officer",
        "Consultant en innovation produit"
      ],
      "pros": [
        "Impact visuel direct et concret de ses créations sur le quotidien",
        "Métier carrefour entre art et technologie",
        "Forte valorisation de l'originalité"
      ],
      "cons": [
        "Compromis parfois frustrants avec les contraintes financières et techniques de production"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Choisir un objet quotidien défectueux ou peu ergonomique (ex: bouteille réutilisable) et concevoir un nouveau concept complet (croquis, modèle 3D et rendu).",
      "steps": [
        "Observer et photographier 5 irritants d'usage sur l'objet actuel",
        "Dessiner 10 esquisses d'idées de formes et de préhension",
        "Modéliser la solution retenue sous Rhino ou Fusion 360 et rendre une vue réaliste"
      ],
      "freeResources": [
        "Core77 (Design Magazine)",
        "Behance Industrial Design",
        "Tutoriels Blender Product Design"
      ]
    },
    "aiImpact": {
      "summary": "L'IA générative d'images (Midjourney, Stable Diffusion) accélère la phase d'idéation visuelle mais requiert une expertise accrue pour traduire ces images en surfaces fabricables en usine.",
      "positiveImpacts": [
        "Génération instantanée de moodboards et de déclinaisons de style",
        "Accélération du prototypage d'idées auprès des clients"
      ],
      "risksAndChallenges": [
        "Illusion de faisabilité : l'image générée ne tient pas compte des contre-dépouilles de moulage"
      ],
      "recommendedSkills": [
        "Maîtrise des prompts de concept design",
        "Expertise approfondie en géométrie industrielle de fabrication"
      ]
    },
    "africaContext": {
      "senegalInsight": "Le design industriel au Sénégal connaît un essor remarquable grâce à la valorisation des matières locales (bois de rônier, typha, cuir, métaux de récupération) et à l'aménagement des nouveaux espaces urbains de Diamniadio.",
      "westAfricaOpportunities": "Création d'équipements agricoles adaptés aux petits exploitants, de mobilier scolaire durable et de solutions d'emballages bio-sourcés.",
      "localChampions": [
        "FabLab Defko Ak Nièp (Dakar)",
        "Ateliers du Sahel",
        "Kër Thiossane (Pôle d'innovation citoyenne)"
      ]
    },
    "salary": "🇫🇷 France : 28 000 - 52 000 € brut/an • 🇸🇳 Sénégal : 300 000 - 900 000 FCFA net/mois",
    "connectedFamilies": [
      "numerique-ia",
      "arts-culture-patrimoine"
    ],
    "relatedJobs": [
      "dessinateur-industriel",
      "ingenieur-mecanique",
      "ingenieur-eco-conception-industrielle"
    ],
    "sources": [
      {
        "organization": "L'Étudiant",
        "title": "Fiche métier : Designer industriel",
        "url": "https://www.letudiant.fr/metiers/secteur/creation/designer-industriel.html",
        "type": "metier"
      },
      {
        "organization": "Onisep",
        "title": "Designer / Designeuse produit",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/designer-designeuse-produit",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Selon une étude du Design Council, chaque euro investi dans le design industriel génère en moyenne 4 euros de chiffre d'affaires supplémentaire pour l'entreprise manufacturière.",
      "pourquoi": "Un produit bien pensé réduit les coûts d'assemblage tout en se vendant plus cher grâce à une ergonomie supérieure.",
      "a_retenir": "Le design industriel n'est pas de la décoration : c'est l'intelligence de l'usage rendue visible."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant & baromètres de design",
        "range": "28 000 - 52 000 € brut/an",
        "junior": "28 000 € brut/an",
        "senior": "52 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets constatés en agence et pôle R&D à Dakar",
        "range": "300 000 - 900 000 FCFA net/mois",
        "junior": "300 000 FCFA net/mois",
        "senior": "900 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Allie esthétique, ergonomie, faisabilité technique et éco-conception pour créer des objets industriels attractifs, fonctionnels et fabriquables en série.",
    "level": "CAP / Bac Pro à Bac +2"
  },
  {
    "id": "ingenieur-mecanique",
    "slug": "ingenieur-mecanique",
    "title": "Ingénieur Mécanique / Conception de Machines",
    "aliases": [
      "Ingénieur en mécanique industrielle",
      "Ingénieur conception mécanique",
      "Mechanical Engineer"
    ],
    "icon": "⚙️",
    "familyId": "industrie-mecanique",
    "domain": "Conception & Ingénierie",
    "domainId": "conception-ingenierie-indus",
    "subdomain": "Ingénierie mécanique & Machines spéciales",
    "shortDescription": "Supervise la conception architecturale, le dimensionnement cinématique et la mise au point de machines, d'outils et de systèmes mécaniques complexes.",
    "longDescription": "L'ingénieur mécanique est le maître d'œuvre de la machine. Il dimensionne les mécanismes, calcule les efforts, sélectionne les motorisations, optimise la résistance des structures et veille au respect des normes de sécurité et de productivité. Il pilote les projets du cahier des charges initial jusqu'aux essais en plateforme industrielle.",
    "missions": [
      "Élaborer l'architecture globale de systèmes mécaniques et de machines spéciales",
      "Dimensionner les composants critiques (arbres, engrenages, roulements, vérins, moteurs)",
      "Valider la résistance mécanique et la tenue en fatigue sous sollicitations cycliques",
      "Superviser les équipes de dessinateurs-projeteurs et de techniciens de bureau d'études",
      "Piloter les essais de mise en service sur prototype et corriger les dysfonctionnements mécaniques"
    ],
    "workEnvironment": [
      "Bureaux d'études techniques",
      "Constructeurs de machines d'emballage, de robotique ou d'usinage",
      "Ateliers d'essais prototypes"
    ],
    "typicalDay": [
      {
        "time": "08:30",
        "desc": "Analyse des résultats d'essais vibratoires sur un banc d'endurance de pompe hydraulique"
      },
      {
        "time": "10:00",
        "desc": "Calcul de pré-dimensionnement d'un réducteur épicycloïdal sous logiciel analytique"
      },
      {
        "time": "12:30",
        "desc": "Déjeuner avec les chefs de projets de l'usine"
      },
      {
        "time": "14:00",
        "desc": "Revue de conception CAO avec le projeteur et le responsable méthodes de production"
      },
      {
        "time": "16:30",
        "desc": "Rendez-vous fournisseur pour qualifier des réducteurs de vitesse de haute précision"
      }
    ],
    "companyRole": "Garant de la viabilité fonctionnelle, de la sécurité et de la robustesse opérationnelle des produits mécaniques.",
    "skills": {
      "technical": [
        "Mécanique générale, cinématique et dynamique des solides",
        "Résistance des matériaux (RDM) et mécanique de la rupture",
        "Transmission de puissance et composants mécaniques standards",
        "Mécanique des fluides et thermodynamique industrielle"
      ],
      "human": [
        "Esprit d'analyse méthodique",
        "Leadership de projets techniques",
        "Pragmatisme de terrain",
        "Capacité à arbitrer entre performance et coût"
      ],
      "tools": [
        "CATIA / SolidWorks",
        "ANSYS Mechanical",
        "KissSoft (Calcul d'engrenages)",
        "MATLAB / Simulink",
        "Normes Eurocodes / ISO"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "Bac +2 / CPGE",
          "title": "Classes Préparatoires aux Grandes Écoles (PTSI/PT, PSI) ou BUT GMP",
          "desc": "Bases scientifiques solides en mathématiques, physique et sciences industrielles."
        },
        {
          "step": "Bac +5 (Diplôme d'Ingénieur)",
          "title": "Diplôme d'Ingénieur en Génie Mécanique (Arts et Métiers, INSA, UTC, Polytech, ENSTA)",
          "desc": "Expertise approfondie en conception avancée, calculs de structures et industrialisation."
        }
      ],
      "schools": [
        {
          "name": "Arts et Métiers ENSAM (Paris, Lille, Metz, Aix, etc.) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "INSA Lyon / Toulouse (Départements Génie Mécanique) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "École Supérieure Polytechnique de Dakar (ESP - UCAD) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Polytechnique de Thiès (EPT - Département Électromécanique) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "Titre d'Ingénieur diplômé CTI (France)",
        "Diplôme d'Ingénieur accrédité CAMES (Sénégal)"
      ],
      "france": [
        "Arts et Métiers ENSAM (Paris, Lille, Metz, Aix, etc.) — France",
        "INSA Lyon / Toulouse (Départements Génie Mécanique) — France"
      ],
      "senegal": [
        "École Supérieure Polytechnique de Dakar (ESP - UCAD) — Sénégal",
        "École Polytechnique de Thiès (EPT - Département Électromécanique) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Aéronautique",
        "Automobile",
        "Ferroviaire",
        "Énergie & Nucléaire",
        "Biomédical & Robotique chirurgicale"
      ],
      "employerTypes": [
        "Constructeurs aéronautiques et automobiles",
        "Équipementiers industriels",
        "Sociétés de conseil en technologies (Alten, Capgemini)",
        "PME innovantes"
      ],
      "evolution": [
        "Chef de projet mécanique",
        "Directeur technique (CTO)",
        "Ingénieur en chef de programme industriel"
      ],
      "pros": [
        "Métier pilier de l'industrie mondiale",
        "Très forte polyvalence technologique",
        "Rémunération attractive et évolutions internationales"
      ],
      "cons": [
        "Lourde responsabilité sur la sécurité des équipements",
        "Cycles de projets longs pouvant générer des tensions"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Démonter un mécanisme mécanique usagé (ex: perceuse ou dérailleur), modéliser chaque pièce et calculer l'effort nécessaire à son fonctionnement.",
      "steps": [
        "Réaliser un schéma cinématique normalisé du mécanisme avec liaisons mécaniques",
        "Isoler un solide et appliquer le principe fondamental de la statique (PFS)",
        "Choisir un matériau dans une base de données de matériaux pour résister à la contrainte"
      ],
      "freeResources": [
        "Techniques de l'Ingénieur (articles de référence)",
        "Coursera Mechanical Engineering Basics",
        "SimScale (plateforme de simulation cloud gratuite)"
      ]
    },
    "aiImpact": {
      "summary": "L'IA assiste puissamment l'ingénieur mécanique dans le dimensionnement accéléré, l'optimisation multi-objectifs et le dépouillement massif de données d'essais.",
      "positiveImpacts": [
        "Exploration automatique de milliers de configurations géométriques optimales",
        "Réduction drastique des temps de calcul par métamodèles de deep learning"
      ],
      "risksAndChallenges": [
        "Nécessité absolue d'une validation physique par les lois de la physique pour éviter les défaillances catastrophiques"
      ],
      "recommendedSkills": [
        "Couplage IA physique (Physics-Informed Neural Networks)",
        "Gestion des jumeaux numériques mécaniques"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, l'ingénieur mécanique joue un rôle capital dans la mécanisation agricole dans la vallée du fleuve, la maintenance lourde des cimenteries et l'exploitation des nouvelles plateformes gazières GTA et pétrolières Sangomar.",
      "westAfricaOpportunities": "Forte recherche de profils en ingénierie de réhabilitation d'équipements lourds miniers en Guinée, au Mali et au Sénégal.",
      "localChampions": [
        "Industries Chimiques du Sénégal (ICS)",
        "Dangote Cement Sénégal",
        "Sococim Industries",
        "Compagnie Sucrière Sénégalaise (CSS)"
      ]
    },
    "salary": "🇫🇷 France : 38 000 - 70 000 € brut/an • 🇸🇳 Sénégal : 600 000 - 2 200 000 FCFA net/mois",
    "connectedFamilies": [
      "energie-renouvelable",
      "mines-geosciences",
      "btp-architecture"
    ],
    "relatedJobs": [
      "ingenieur-calcul",
      "dessinateur-industriel",
      "ingenieur-de-production"
    ],
    "sources": [
      {
        "organization": "L'Étudiant",
        "title": "Fiche métier : Ingénieur mécanique",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie/ingenieur-mecanique.html",
        "type": "metier"
      },
      {
        "organization": "Onisep",
        "title": "Ingénieur / Ingénieure en mécanique",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/ingenieur-ingenieure-en-mecanique",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Un moteur d'avion moderne comme le CFM LEAP intègre des aubes de turbine en composites tissés 3D résistant à des forces centrifuges équivalentes au poids de deux bus londoniens par aube.",
      "pourquoi": "Seule une ingénierie mécanique de pointe permet d'allier légèreté extrême et résistance à des températures dépassant le point de fusion des métaux conventionnels.",
      "a_retenir": "L'ingénieur mécanique repousse continuellement les limites physiques de la matière."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant & Syntec Ingénierie",
        "range": "38 000 - 70 000 € brut/an",
        "junior": "38 000 € brut/an",
        "senior": "70 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets dans les grands groupes industriels et projets offshore",
        "range": "600 000 - 2 200 000 FCFA net/mois",
        "junior": "600 000 FCFA net/mois",
        "senior": "2 200 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Supervise la conception architecturale, le dimensionnement cinématique et la mise au point de machines, d'outils et de systèmes mécaniques complexes.",
    "level": "Bac +5 (Diplôme d'Ingénieur / Master)"
  },
  {
    "id": "ingenieur-calcul",
    "slug": "ingenieur-calcul",
    "title": "Ingénieur Calcul & Simulation Numérique",
    "aliases": [
      "Ingénieur calcul de structures",
      "Ingénieur simulation éléments finis",
      "FEA / FEM Engineer"
    ],
    "icon": "💻",
    "familyId": "industrie-mecanique",
    "domain": "Conception & Ingénierie",
    "domainId": "conception-ingenierie-indus",
    "subdomain": "Calcul de structures & Simulation numérique",
    "shortDescription": "Simule numériquement le comportement physique (contraintes mécaniques, thermique, fatigue, crash) des structures et composants industriels.",
    "longDescription": "L'ingénieur calcul teste virtuellement la résistance des pièces avant leur fabrication réelle. En découpant le modèle 3D en millions de petits éléments (maillage pour la méthode des éléments finis - FEM), il calcule les contraintes, les déformations, les résonances vibratoires et les risques de rupture pour optimiser la masse et garantir la sécurité.",
    "missions": [
      "Nettoyer la géométrie CAO et générer des maillages éléments finis 1D, 2D et 3D de haute qualité",
      "Définir les conditions aux limites, les chargements thermomécaniques et les lois de comportement des matériaux",
      "Lancer et post-traiter les simulations statiques, dynamiques non-linéaires et de fatigue",
      "Analyser les concentrations de contraintes (critères de Von Mises, Tresca) et identifier les zones critiques",
      "Proposer des modifications d'épaisseurs, de congés de raccordement ou de nervures pour alléger et renforcer la structure"
    ],
    "workEnvironment": [
      "Bureaux d'études de calcul",
      "Centres de R&D des grands constructeurs",
      "Clusters de calcul intensif (HPC)"
    ],
    "typicalDay": [
      {
        "time": "08:30",
        "desc": "Vérification des simulations non-linéaires de crash lancées la veille sur le cluster de calcul"
      },
      {
        "time": "10:00",
        "desc": "Post-traitement des cartes de contraintes et tracé des courbes déformation-temps"
      },
      {
        "time": "12:30",
        "desc": "Déjeuner avec les ingénieurs d'essais physiques"
      },
      {
        "time": "14:00",
        "desc": "Réunion de corrélation calcul-essais pour ajuster le modèle numérique aux mesures réelles de jauges de contrainte"
      },
      {
        "time": "16:30",
        "desc": "Rédaction de la note de calcul officielle de certification réglementaire"
      }
    ],
    "companyRole": "Expert scientifique qui valide la tenue sécuritaire et la conformité normative des structures sans avoir à détruire des prototypes physiques coûteux.",
    "skills": {
      "technical": [
        "Méthode des éléments finis (FEM / FEA)",
        "Mécanique des milieux continus et dynamique des structures",
        "Comportement non-linéaire des matériaux (plasticité, fluage, rupture)",
        "Maîtrise des codes de calcul industriels"
      ],
      "human": [
        "Rigueur mathématique extrême",
        "Sens physique aigu pour juger de la cohérence d'un résultat numérique",
        "Esprit critique face aux logiciels",
        "Pédagogie pour expliquer des phénomènes complexes"
      ],
      "tools": [
        "ANSYS Mechanical",
        "Abaqus",
        "Altair OptiStruct / HyperMesh",
        "NASTRAN / PATRAN",
        "Python / MATLAB (scripts de post-traitement)"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "Bac +3",
          "title": "Licence Mécanique / Mathématiques Appliquées ou BUT GMP",
          "desc": "Socle en mécanique analytique, algèbre linéaire et analyse numérique."
        },
        {
          "step": "Bac +5 (Master / Diplôme d'Ingénieur)",
          "title": "Diplôme d'Ingénieur ou Master Calcul de Structures / Simulation Numérique",
          "desc": "Spécialisation poussée en méthodes numériques, biomécanique, aéroélasticité et fatigue des matériaux."
        }
      ],
      "schools": [
        {
          "name": "École CentraleSupélec / École des Ponts ParisTech — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "Institut Supérieur de l'Aéronautique et de l'Espace (ISAE-Supaero) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "École Supérieure Polytechnique de Dakar (ESP - UCAD) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Amadou Mahtar Mbow (UAM - Pôle Sciences & Technologies) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "Certifications NAFEMS (organisme international indépendant de référence en simulation)"
      ],
      "france": [
        "École CentraleSupélec / École des Ponts ParisTech — France",
        "Institut Supérieur de l'Aéronautique et de l'Espace (ISAE-Supaero) — France"
      ],
      "senegal": [
        "École Supérieure Polytechnique de Dakar (ESP - UCAD) — Sénégal",
        "Université Amadou Mahtar Mbow (UAM - Pôle Sciences & Technologies) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Aéronautique & Spatial",
        "Automobile (Sécurité passive, crash)",
        "Énergie nucléaire & thermique",
        "BTP & Offshore"
      ],
      "employerTypes": [
        "Sociétés de R&D",
        "Constructeurs de transport",
        "Bureaux d'études spécialisés en simulation (Altran, Segula, Capgemini)",
        "Instituts de recherche"
      ],
      "evolution": [
        "Expert calcul senior",
        "Responsable du pôle simulation numérique",
        "Directeur technique scientifique"
      ],
      "pros": [
        "Métier intellectuellement très stimulant",
        "Indispensable pour l'allègement et la décarbonation",
        "Compétences très recherchées à l'international"
      ],
      "cons": [
        "Nécessite une concentration prolongée sur des modèles mathématiques complexes"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser une simulation statique simple de flexion d'une poutre sous charge sous FreeCAD FEM ou SimScale et comparer les résultats avec les formules théoriques de RDM.",
      "steps": [
        "Calculer à la main la flèche maximale d'une poutre encastrée",
        "Créer la géométrie et mailler en éléments tétraédriques sous logiciel gratuit",
        "Lancer le solveur et comparer l'écart relatif (doit être < 5%)"
      ],
      "freeResources": [
        "NAFEMS Resource Center",
        "SimScale Tutorials",
        "OpenFOAM & Code_Aster (EDF) Open Source"
      ]
    },
    "aiImpact": {
      "summary": "L'IA transforme le calcul de structures via les solveurs neuronaux (Physics-Informed Neural Networks - PINNs) capables de prédire un champ de contraintes en quelques millisecondes au lieu de plusieurs heures.",
      "positiveImpacts": [
        "Simulation en temps réel pour l'optimisation géométrique instantanée",
        "Détection prédictive d'instabilités de calcul"
      ],
      "risksAndChallenges": [
        "Risque d'effet 'boîte noire' où l'ingénieur ne maîtrise pas les hypothèses sous-jacentes du réseau de neurones"
      ],
      "recommendedSkills": [
        "Programmation Python pour le Machine Learning scientifique",
        "Vérification et validation formelle de modèles IA"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, l'ingénierie de calcul est essentielle pour le dimensionnement des ouvrages côtiers face à l'érosion marine, la stabilité des plateformes pétro-gazières offshore et la résistance au vent des pylônes haute tension.",
      "westAfricaOpportunities": "Croissance des bureaux d'études de calcul de structures à Dakar pour des projets d'infrastructures énergétiques et industrielles sous-régionales.",
      "localChampions": [
        "Petrosen Exploration & Production",
        "Senelec (Direction de l'Ingénierie)",
        "Dakar Marine"
      ]
    },
    "salary": "🇫🇷 France : 39 000 - 72 000 € brut/an • 🇸🇳 Sénégal : 650 000 - 2 400 000 FCFA net/mois",
    "connectedFamilies": [
      "numerique-ia",
      "mines-geosciences",
      "energie-renouvelable"
    ],
    "relatedJobs": [
      "ingenieur-mecanique",
      "aerodynamicien",
      "dessinateur-industriel"
    ],
    "sources": [
      {
        "organization": "L'Étudiant",
        "title": "Fiche métier : Ingénieur calcul",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie/ingenieur-calcul.html",
        "type": "metier"
      },
      {
        "organization": "Onisep",
        "title": "Ingénieur / Ingénieure calcul",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/ingenieur-ingenieure-calcul",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Avant l'avènement du calcul par éléments finis, l'industrie automobile devait détruire en moyenne 100 prototypes réels pour homologuer un véhicule au crash test. Aujourd'hui, moins de 10 prototypes suffisent.",
      "pourquoi": "La précision des modèles de calcul permet de prédire les déformations de la tôle à la milliseconde près avec une fidélité supérieure à 98%.",
      "a_retenir": "L'ingénieur calcul protège des vies humaines en crash-testant virtuellement les structures."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant & grilles d'ingénierie",
        "range": "39 000 - 72 000 € brut/an",
        "junior": "39 000 € brut/an",
        "senior": "72 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets constatés en ingénierie spécialisée et projets offshore",
        "range": "650 000 - 2 400 000 FCFA net/mois",
        "junior": "650 000 FCFA net/mois",
        "senior": "2 400 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Simule numériquement le comportement physique (contraintes mécaniques, thermique, fatigue, crash) des structures et composants industriels.",
    "level": "Bac +5 (Diplôme d'Ingénieur / Master)"
  },
  {
    "id": "technicien-d-etudes-industriel",
    "slug": "technicien-d-etudes-industriel",
    "title": "Technicien d'Études Industrielles",
    "aliases": [
      "Technicien de bureau d'études",
      "Technicien R&D mécanique",
      "Assistant ingénieur études"
    ],
    "icon": "📐",
    "familyId": "industrie-mecanique",
    "domain": "Conception & Ingénierie",
    "domainId": "conception-ingenierie-indus",
    "subdomain": "Études de faisabilité & Essais préliminaires",
    "shortDescription": "Participe à la conception détaillée de nouveaux équipements, réalise les calculs préalables et valide les prototypes aux côtés des ingénieurs.",
    "longDescription": "Le technicien d'études industrielles travaille au sein des bureaux d'études et de recherche & développement. Bras droit de l'ingénieur de conception, il étudie la faisabilité des pièces mécaniques, consulte les catalogues fournisseurs, réalise les maquettes 3D intermédiaires et organise les premiers tests d'assemblage en atelier pour lever les aléas techniques.",
    "missions": [
      "Concevoir les schémas de principe et les études préliminaires de sous-ensembles industriels",
      "Réaliser des calculs mécaniques simples (poutres, couples de serrage, choix de roulements)",
      "Sélectionner les composants du commerce (actionneurs, pneumatique, capteurs) et contacter les fournisseurs",
      "Participer au montage des prototypes en atelier d'essais et consigner les anomalies constatées",
      "Adapter les plans de fabrication en fonction des retours d'industrialisation"
    ],
    "workEnvironment": [
      "Bureaux d'études de PME et ETI",
      "Laboratoires d'essais de prototypage",
      "Allers-retours réguliers avec l'atelier de fabrication"
    ],
    "typicalDay": [
      {
        "time": "08:30",
        "desc": "Vérification des courriels et validation des fiches techniques d'actionneurs pneumatiques reçues d'un fournisseur"
      },
      {
        "time": "10:00",
        "desc": "Modélisation de l'intégration d'un vérin dans le bâti d'une machine d'emballage sous SolidWorks"
      },
      {
        "time": "12:30",
        "desc": "Déjeuner avec les techniciens d'usinage"
      },
      {
        "time": "14:00",
        "desc": "Descente en atelier pour assister au premier assemblage du prototype et noter les points de frottement"
      },
      {
        "time": "16:30",
        "desc": "Mise à jour du dossier technique de fabrication dans la base PDM"
      }
    ],
    "companyRole": "Relais opérationnel indispensable qui assure la transition fluide entre les idées d'ingénierie et la réalité concrète de l'atelier.",
    "skills": {
      "technical": [
        "CAO 3D et dessin technique industriel",
        "Connaissance des composants électropneumatiques et mécaniques standards",
        "Calculs élémentaires de RDM et dimensionnement",
        "Lecture de plans et métrologie de base"
      ],
      "human": [
        "Pragmatisme et esprit pratique",
        "Sens aigu du contact humain avec les ouvriers d'atelier",
        "Rigueur d'exécution",
        "Réactivité face aux problèmes techniques"
      ],
      "tools": [
        "SolidWorks",
        "Autodesk Inventor",
        "Catalogues industriels (TraceParts, Festo, SKF)",
        "Instruments de mesure d'atelier (pied à coulisse, comparateur)"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "Bac STI2D / Bac Pro",
          "title": "Bac STI2D ou Bac Pro Modélisation et Usinage",
          "desc": "Bases de l'ingénierie et des procédés d'usinage."
        },
        {
          "step": "Bac +2 (BTS / BUT)",
          "title": "BTS Conception de Produits Industriels (CPI) ou BUT Génie Mécanique",
          "desc": "Pratique professionnelle intensive de la CAO et de la conception industrielle."
        }
      ],
      "schools": [
        {
          "name": "Lycées polyvalents techniques de France (BTS CPI) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "École Supérieure Polytechnique de Dakar (ESP) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Lycée Technique Maurice Delafosse (Dakar) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "ISEP de Thiès / Diamniadio — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "Certifications CAO d'éditeurs (CSWA)",
        "Certificats de Qualification Paritaire de la Métallurgie (CQPM)"
      ],
      "france": [
        "Lycées polyvalents techniques de France (BTS CPI) — France"
      ],
      "senegal": [
        "École Supérieure Polytechnique de Dakar (ESP) — Sénégal",
        "Lycée Technique Maurice Delafosse (Dakar) — Sénégal",
        "ISEP de Thiès / Diamniadio — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Machines spéciales",
        "Agroalimentaire",
        "Automobile",
        "Biens d'équipement industriels"
      ],
      "employerTypes": [
        "PME de mécanique industrielle",
        "Bureaux d'études",
        "Grandes entreprises manufacturières"
      ],
      "evolution": [
        "Dessinateur-projeteur principal",
        "Chargé d'affaires industrielles",
        "Ingénieur d'études par promotion interne"
      ],
      "pros": [
        "Métier équilibré entre bureau et atelier",
        "Grande variété des pièces étudiées",
        "Excellente insertion professionnelle"
      ],
      "cons": [
        "Gestion de modifications fréquentes de plans selon les contraintes de coût"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Relever les cotes d'un mécanisme réel au pied à coulisse et réaliser son dossier de fabrication complet (modèle 3D + plans de détail + nomenclature).",
      "steps": [
        "Mesurer rigoureusement chaque cote fonctionnelle",
        "Modéliser sous CAO avec l'arbre de création logique",
        "Établir la liste des composants standards à acheter dans le commerce"
      ],
      "freeResources": [
        "TraceParts (bibliothèque de composants CAO gratuits)",
        "GrabCAD Community"
      ]
    },
    "aiImpact": {
      "summary": "L'IA assiste la recherche de composants équivalents et la vérification automatique des interférences de plans.",
      "positiveImpacts": [
        "Sourcing instantané de pièces standards chez les fabricants",
        "Génération automatique de nomenclatures"
      ],
      "risksAndChallenges": [
        "Obligation de vérifier physiquement les dimensions des pièces fournies"
      ],
      "recommendedSkills": [
        "Gestion des bases de données de composants industriels assistées par IA"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, les techniciens d'études sont très recherchés pour moderniser les lignes de production locales (minoteries, savonneries, usines de transformation d'arachide et de mangue).",
      "westAfricaOpportunities": "Forte demande dans les PME sous-traitantes des chantiers pétroliers et miniers en Afrique de l'Ouest.",
      "localChampions": [
        "Grands Moulins de Dakar (GMD)",
        "Patisen",
        "SENAC SA"
      ]
    },
    "salary": "🇫🇷 France : 24 000 - 40 000 € brut/an • 🇸🇳 Sénégal : 250 000 - 700 000 FCFA net/mois",
    "connectedFamilies": [
      "btp-architecture",
      "numerique-ia"
    ],
    "relatedJobs": [
      "dessinateur-industriel",
      "ingenieur-mecanique",
      "ingenieur-methodes-industriel"
    ],
    "sources": [
      {
        "organization": "L'Étudiant",
        "title": "Fiche métier : Technicien d'études",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie/technicien-d-etudes.html",
        "type": "metier"
      },
      {
        "organization": "Onisep",
        "title": "Technicien / Technicienne de bureau d'études en mécanique",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/technicien-technicienne-de-bureau-d-etudes-en-mecanique",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Dans l'industrie mécanique, un technicien d'études passe en moyenne 35% de son temps à interagir directement avec l'atelier pour résoudre des défis concrets de fabrication.",
      "pourquoi": "Un plan parfait sur ordinateur peut être impossible à usiner si l'on ne tient pas compte du passage de l'outil ou de la clé de serrage.",
      "a_retenir": "Le technicien d'études garantit que ce qui est dessiné peut réellement être fabriqué."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant",
        "range": "24 000 - 40 000 € brut/an",
        "junior": "24 000 € brut/an",
        "senior": "40 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets dans les entreprises de transformation industrielle",
        "range": "250 000 - 700 000 FCFA net/mois",
        "junior": "250 000 FCFA net/mois",
        "senior": "700 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Participe à la conception détaillée de nouveaux équipements, réalise les calculs préalables et valide les prototypes aux côtés des ingénieurs.",
    "level": "Bac +2 à Bac +3 (BTS / BUT / Licence pro)"
  },
  {
    "id": "ingenieur-methodes-industriel",
    "slug": "ingenieur-methodes-industriel",
    "title": "Ingénieur Méthodes & Industrialisation",
    "aliases": [
      "Ingénieur industrialisation",
      "Ingénieur process et méthodes",
      "Manufacturing Engineer"
    ],
    "icon": "🏗️",
    "familyId": "industrie-mecanique",
    "domain": "Génie Industriel & Organisation",
    "domainId": "genie-industriel-orga",
    "subdomain": "Méthodes, Process & Industrialisation",
    "shortDescription": "Conçoit et optimise les procédés de fabrication, l'outillage et l'organisation des postes pour fabriquer les produits au meilleur coût et en toute sécurité.",
    "longDescription": "L'ingénieur méthodes est l'architecte du processus de fabrication. Dès la phase de conception, il détermine 'comment' fabriquer le produit : choix des machines (fraisage, injection, emboutissage, soudage robotisé), conception des outillages spécifiques, définition des gammes opératoires, équilibrage des lignes et ergonomie des postes selon les principes du Lean Manufacturing.",
    "missions": [
      "Rédiger les gammes de fabrication, les modes opératoires et les fiches d'instructions au poste",
      "Concevoir et faire fabriquer les outillages de positionnement, de contrôle et de montage",
      "Définir le temps standard alloué pour chaque opération industrielle (chronométrage MTM, chrono-analyse)",
      "Mettre en œuvre les démarches d'amélioration continue (Kaizen, 5S, SMED, Kanban, Poka-Yoke)",
      "Chiffrer les investissements machines (CAPEX) et calculer le retour sur investissement (ROI)"
    ],
    "workEnvironment": [
      "Ateliers de fabrication de série",
      "Lignes d'assemblage automatisées",
      "Bureaux méthodes au plus près de la production"
    ],
    "typicalDay": [
      {
        "time": "08:30",
        "desc": "Tournée d'atelier quotidienne ('Gemba Walk') avec les chefs d'équipe pour observer les goulets d'étranglement"
      },
      {
        "time": "10:00",
        "desc": "Chantier SMED sur une presse d'emboutissage pour réduire le temps de changement d'outil de 45 à 15 minutes"
      },
      {
        "time": "12:30",
        "desc": "Déjeuner avec les responsables qualité et maintenance"
      },
      {
        "time": "14:00",
        "desc": "Simulation de flux de production sous logiciel de simulation pour équilibrer une nouvelle ligne d'assemblage"
      },
      {
        "time": "16:30",
        "desc": "Validation des outillages de contrôle reçus avec l'opérateur référent"
      }
    ],
    "companyRole": "Garant de l'efficience productive, du respect des coûts de revient et de la sécurité ergonomique des opérateurs.",
    "skills": {
      "technical": [
        "Génie des procédés industriels (usinage, découpe, soudage, emboutissage, injection)",
        "Méthodes d'amélioration continue (Lean Manufacturing, Six Sigma)",
        "Conception d'outillages industriels",
        "Gestion des flux et équilibrage de postes"
      ],
      "human": [
        "Excellente écoute et respect des opérateurs de terrain",
        "Capacité à convaincre et à conduire le changement",
        "Sens de l'observation et rigueur méthodologique",
        "Orientation résultats et rentabilité"
      ],
      "tools": [
        "ERP / GPAO (SAP, Microsoft Dynamics)",
        "Logiciels de simulation de flux (FlexSim, Witness)",
        "SolidWorks (conception d'outillages)",
        "Outils Lean (VSM, SMED, 5S)"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "Bac +2 / BUT",
          "title": "BUT Génie Industriel et Maintenance (GIM) ou Génie Mécanique et Productique (GMP)",
          "desc": "Compréhension pratique des ateliers et des procédés d'usinage et de fabrication."
        },
        {
          "step": "Bac +5 (Diplôme d'Ingénieur)",
          "title": "Diplôme d'Ingénieur en Génie Industriel / Génie Mécanique (Arts et Métiers, INSA, UTBM, ENI)",
          "desc": "Maîtrise complète de la supply chain, du management de la performance et de l'industrialisation."
        }
      ],
      "schools": [
        {
          "name": "Arts et Métiers ENSAM — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "INSA Lyon / Strasbourg (Génie Industriel) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "École Supérieure Polytechnique de Dakar (ESP - UCAD) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Polytechnique de Thiès (EPT) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "Certifications Green Belt / Black Belt Lean Six Sigma",
        "Certifications PMI / IPMA en gestion de projet"
      ],
      "france": [
        "Arts et Métiers ENSAM — France",
        "INSA Lyon / Strasbourg (Génie Industriel) — France"
      ],
      "senegal": [
        "École Supérieure Polytechnique de Dakar (ESP - UCAD) — Sénégal",
        "École Polytechnique de Thiès (EPT) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Automobile & Équipementiers",
        "Aéronautique",
        "Agro-industrie",
        "Pharmacie & Dispositifs médicaux",
        "Métallurgie"
      ],
      "employerTypes": [
        "Usines de fabrication de série",
        "Grandes entreprises industrielles internationales",
        "Sous-traitants de premier rang"
      ],
      "evolution": [
        "Responsable du service méthodes",
        "Responsable de production",
        "Directeur d'usine / Directeur des opérations"
      ],
      "pros": [
        "Métier d'action concret avec une influence directe sur la performance",
        "Forte demande dans tous les bassins industriels",
        "Excellente passerelle vers la direction d'usine"
      ],
      "cons": [
        "Gestion des résistances humaines au changement dans les ateliers"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Cartographier le flux d'un processus artisanal ou quotidien (ex: préparation de repas ou emballage de colis) et identifier les 7 gaspillages du Lean (Muda) pour l'optimiser.",
      "steps": [
        "Mesurer les temps de cycle et les temps d'attente",
        "Dessiner une Value Stream Map (VSM) du processus",
        "Proposer 3 améliorations Poka-Yoke (détrompeurs) pour éliminer les erreurs"
      ],
      "freeResources": [
        "Lean Enterprise Institute (LEI)",
        "Cours OpenClassrooms sur le Lean Manufacturing",
        "Vidéos de Kaizen d'ateliers Toyota"
      ]
    },
    "aiImpact": {
      "summary": "L'IA industrielle permet d'optimiser l'équilibrage des lignes en temps réel et de détecter automatiquement les micro-arrêts par vision par ordinateur.",
      "positiveImpacts": [
        "Génération assistée de gammes de fabrication optimisées",
        "Analyse automatisée des postures ergonomiques par caméra IA"
      ],
      "risksAndChallenges": [
        "Nécessité de préserver le dialogue direct avec les opérateurs sans imposer des cadences robotisées"
      ],
      "recommendedSkills": [
        "Intégration de l'IoT industriel (IIoT)",
        "Analyse de données de production sur tableau de bord Power BI"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, l'ingénieur méthodes est le moteur de la modernisation des usines agroalimentaires (biscuiteries, laiteries, conserveries de poisson) et des cimenteries pour rivaliser avec les produits importés en réduisant les rebuts de 30 à 50%.",
      "westAfricaOpportunities": "Rôle central dans l'aménagement des nouvelles usines de la zone économique spéciale (ZES) de Diass et de la zone industrielle de Sandiara.",
      "localChampions": [
        "Compagnie Sucrière Sénégalaise (CSS)",
        "SOCOCIM",
        "Kirène (Groupe SIAGRO)",
        "SENICO"
      ]
    },
    "salary": "🇫🇷 France : 37 000 - 68 000 € brut/an • 🇸🇳 Sénégal : 550 000 - 2 000 000 FCFA net/mois",
    "connectedFamilies": [
      "droit-management",
      "numerique-ia"
    ],
    "relatedJobs": [
      "technicien-methodes-industriel",
      "ingenieur-de-production",
      "ingenieur-qualite-industriel"
    ],
    "sources": [
      {
        "organization": "L'Étudiant",
        "title": "Fiche métier : Ingénieur méthodes",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie/ingenieur-e-methodes.html",
        "type": "metier"
      },
      {
        "organization": "Onisep",
        "title": "Ingénieur / Ingénieure méthodes",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/ingenieur-ingenieure-methodes",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "La méthode SMED développée par Shigeo Shingo chez Toyota a permis de faire passer le temps de changement d'outils sur des presses de carrosserie de 4 heures à moins de 3 minutes.",
      "pourquoi": "En distinguant les opérations internes (machine à l'arrêt) des opérations externes (préparées à l'avance), la flexibilité de l'usine est décuplée.",
      "a_retenir": "L'ingénieur méthodes ne travaille pas plus dur : il travaille plus intelligemment."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant & grilles UIMM métallurgie",
        "range": "37 000 - 68 000 € brut/an",
        "junior": "37 000 € brut/an",
        "senior": "68 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets dans les grandes unités industrielles au Sénégal",
        "range": "550 000 - 2 000 000 FCFA net/mois",
        "junior": "550 000 FCFA net/mois",
        "senior": "2 000 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Conçoit et optimise les procédés de fabrication, l'outillage et l'organisation des postes pour fabriquer les produits au meilleur coût et en toute sécurité.",
    "level": "Bac +5 (Diplôme d'Ingénieur / Master)"
  },
  {
    "id": "technicien-methodes-industriel",
    "slug": "technicien-methodes-industriel",
    "title": "Technicien Méthodes d'Atelier",
    "aliases": [
      "Agent des méthodes",
      "Technicien industrialisation d'atelier",
      "Préparateur de fabrication"
    ],
    "icon": "📋",
    "familyId": "industrie-mecanique",
    "domain": "Génie Industriel & Organisation",
    "domainId": "genie-industriel-orga",
    "subdomain": "Gammes d'usinage & Préparation d'atelier",
    "shortDescription": "Rédige les fiches techniques d'instructions, choisit les outils de coupe et prépare les gammes d'usinage et d'assemblage en atelier.",
    "longDescription": "Le technicien méthodes est l'interlocuteur privilégié des opérateurs en atelier. Il décompose le travail en phases successives, choisit les vitesses de coupe, les avances et les paramètres machines, conçoit les gabarits de perçage ou de serrage et s'assure que chaque opérateur dispose du bon outil et de la bonne pièce au bon moment.",
    "missions": [
      "Établir les gammes d'usinage ou d'assemblage détaillées avec chronométrage opérationnel",
      "Choisir les plaquettes, forets, fraises et outils de coupe adaptés aux matériaux usinés",
      "Participer à la conception et à la mise au point des montages d'usinage et gabarits de soudage",
      "Former les opérateurs aux nouveaux modes opératoires et veiller à l'ergonomie des postes",
      "Analyser les défauts et non-conformités récurrentes d'atelier pour corriger les gammes"
    ],
    "workEnvironment": [
      "Ateliers d'usinage, de chaudronnerie et de montage",
      "Bureau méthodes adjacent aux lignes de production"
    ],
    "typicalDay": [
      {
        "time": "08:00",
        "desc": "Point de démarrage d'équipe à l'atelier d'usinage CN"
      },
      {
        "time": "09:30",
        "desc": "Ajustement des paramètres de coupe d'une fraiseuse suite à une usure prématurée d'outil sur de l'acier inox"
      },
      {
        "time": "12:30",
        "desc": "Déjeuner avec les chefs d'îlots de production"
      },
      {
        "time": "14:00",
        "desc": "Rédaction d'une fiche d'instruction visuelle avec photos pour un nouveau poste de montage"
      },
      {
        "time": "16:30",
        "desc": "Essai d'un nouveau gabarit de positionnement avec un soudeur"
      }
    ],
    "companyRole": "Facilitateur technique direct de l'opérateur de production, garantissant l'application pratique des standards de productivité.",
    "skills": {
      "technical": [
        "Connaissance approfondie de l'usinage (tournage, fraisage) et de la mécanique générale",
        "Paramètres de coupe et choix des outillages (carbure, céramique, diamant)",
        "Lecture experte de plans techniques et cotation ISO",
        "Chronométrage et équilibrage de postes"
      ],
      "human": [
        "Très bon relationnel avec les équipes de production",
        "Sens pratique et logique de terrain",
        "Pédagogie et écoute",
        "Réactivité face aux blocages techniques"
      ],
      "tools": [
        "Catalogues d'outils (Sandvik, Seco, Walter)",
        "Logiciels de FAO / CFAO de base",
        "ERP de gestion d'atelier",
        "Chronomètre et outils de mesure"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "Bac Pro",
          "title": "Bac Pro Technicien d'Usinage ou Métiers de l'Électricité",
          "desc": "Bases solides d'atelier et de manipulation des machines."
        },
        {
          "step": "Bac +2 (BTS)",
          "title": "BTS Conception des Processus de Réalisation de Produits (CPRP) ou BTS Mécanique",
          "desc": "Spécialisation avancée en élaboration de processus d'usinage et d'assemblage."
        }
      ],
      "schools": [
        {
          "name": "Lycées professionnels et CFA industriels de France (BTS CPRP) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "Lycée Technique Maurice Delafosse (Dakar) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Centre d'Entrepreneuriat et de Développement Technique (CEDT Le G15) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "CQPM Technicien en industrialisation et méthodes"
      ],
      "france": [
        "Lycées professionnels et CFA industriels de France (BTS CPRP) — France"
      ],
      "senegal": [
        "Lycée Technique Maurice Delafosse (Dakar) — Sénégal",
        "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal",
        "Centre d'Entrepreneuriat et de Développement Technique (CEDT Le G15) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Usinage de précision",
        "Chaudronnerie & Tuyauterie",
        "Automobile",
        "Aéronautique"
      ],
      "employerTypes": [
        "PME de mécanique industrielle",
        "Sous-traitants aéronautiques",
        "Usines d'équipements ferroviaires et navals"
      ],
      "evolution": [
        "Responsable méthodes d'atelier",
        "Responsable d'atelier d'usinage",
        "Ingénieur méthodes par VAE"
      ],
      "pros": [
        "Métier très valorisant au contact direct de la matière et des hommes",
        "Précieux dans l'atelier pour débloquer les problèmes",
        "Forte employabilité"
      ],
      "cons": [
        "Environnement bruyant d'atelier et urgence permanente en cas d'arrêt machine"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Prendre une pièce mécanique usinée et rédiger sa gamme de fabrication pas à pas (ordre des opérations, faces de référence, outils et vitesses).",
      "steps": [
        "Identifier la pièce brute de départ et la forme finie",
        "Déterminer l'ordre des opérations pour ne pas déformer la pièce",
        "Calculer les vitesses de rotation et les avances pour chaque outil"
      ],
      "freeResources": [
        "Guides du technicien en productique (Éditions Hachette)",
        "Sandvik Coromant E-Learning"
      ]
    },
    "aiImpact": {
      "summary": "L'IA aide à recommander automatiquement les meilleures vitesses de coupe et trajectoires d'outils à partir des bases de données d'usinage mondiales.",
      "positiveImpacts": [
        "Calcul automatisé des conditions de coupe optimales pour minimiser l'usure de l'outil",
        "Génération rapide de fiches d'instructions bilingues"
      ],
      "risksAndChallenges": [
        "Nécessité de valider les conditions réelles de vibration et de rigidité de la machine en atelier"
      ],
      "recommendedSkills": [
        "Utilisation d'assistants numériques de sélection d'outillage"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, les techniciens méthodes formés au CFPT Sénégal-Japon ou au Lycée Delafosse sont des piliers très courtisés par les ateliers de chaudronnerie lourde, de construction navale et d'entretien minier.",
      "westAfricaOpportunities": "Forte demande d'encadrement technique d'atelier dans les zones industrielles de Dakar, Abidjan et San Pedro.",
      "localChampions": [
        "Dakar Marine",
        "SOCOCIM",
        "Chantiers Navals du Sénégal"
      ]
    },
    "salary": "🇫🇷 France : 24 000 - 42 000 € brut/an • 🇸🇳 Sénégal : 280 000 - 800 000 FCFA net/mois",
    "connectedFamilies": [
      "btp-architecture"
    ],
    "relatedJobs": [
      "ingenieur-methodes-industriel",
      "tourneur-fraiseur-cn",
      "ajusteur-monteur-industriel"
    ],
    "sources": [
      {
        "organization": "L'Étudiant",
        "title": "Fiche métier : Technicien méthodes",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie/ingenieur-e-methodes.html",
        "type": "metier"
      },
      {
        "organization": "Onisep",
        "title": "Technicien / Technicienne méthodes",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/technicien-technicienne-methodes",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Un mauvais choix de vitesse de coupe ou de plaquette d'usinage peut multiplier par dix l'usure de l'outil ou briser une pièce en titane à 5 000 euros en quelques secondes.",
      "pourquoi": "Le technicien méthodes maîtrise les lois de la thermodynamique de coupe pour maximiser la durée de vie de l'outil et l'état de surface de la pièce.",
      "a_retenir": "Le technicien méthodes transforme les contraintes physiques du métal en cadence d'atelier."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant",
        "range": "24 000 - 42 000 € brut/an",
        "junior": "24 000 € brut/an",
        "senior": "42 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets dans les ateliers spécialisés et industries extractives",
        "range": "280 000 - 800 000 FCFA net/mois",
        "junior": "280 000 FCFA net/mois",
        "senior": "800 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Rédige les fiches techniques d'instructions, choisit les outils de coupe et prépare les gammes d'usinage et d'assemblage en atelier.",
    "level": "Bac +2 à Bac +3 (BTS / BUT / Licence pro)"
  },
  {
    "id": "ingenieur-de-production",
    "slug": "ingenieur-de-production",
    "title": "Ingénieur de Production Industrielle",
    "aliases": [
      "Responsable de fabrication",
      "Ingénieur d'atelier de production",
      "Production Manager"
    ],
    "icon": "🏭",
    "familyId": "industrie-mecanique",
    "domain": "Production & Fabrication",
    "domainId": "production-fabrication-indus",
    "subdomain": "Pilotage de la production & Performance d'atelier",
    "shortDescription": "Pilote la fabrication en série des produits dans l'usine, encadre les équipes d'opérateurs et garantit les cadences, la sécurité et la qualité.",
    "longDescription": "L'ingénieur de production est le chef d'orchestre opérationnel de l'usine. Responsable d'une ou plusieurs lignes de fabrication, il veille au respect des plannings de livraison, résout immédiatement les aléas techniques (pannes, ruptures d'approvisionnement), anime les équipes de chefs d'équipes et d'opérateurs, et conduit les chantiers de performance industrielle (TRS, taux de rebut, productivité).",
    "missions": [
      "Organiser et planifier la production quotidienne selon le carnet de commandes",
      "Encadrer, animer et développer les compétences des équipes d'opérateurs et chefs d'équipe (jusqu'à 100 personnes)",
      "Suivre et améliorer les indicateurs clés de performance : Taux de Rendement Synthétique (TRS), productivité, taux de rebut",
      "Garantir l'application stricte des règles d'hygiène, sécurité et conditions de travail (HSE)",
      "Coordonner les interventions d'urgence avec les services maintenance, méthodes et qualité"
    ],
    "workEnvironment": [
      "Ateliers industriels en continu (3x8, 2x8)",
      "Usines de grande série hautement automatisées",
      "Présence constante sur le terrain"
    ],
    "typicalDay": [
      {
        "time": "07:30",
        "desc": "Point de relève avec l'équipe de nuit et analyse des chiffres de production et des éventuels arrêts"
      },
      {
        "time": "08:30",
        "desc": "Animation du rituel d'animation à intervalle court (AIC / Top 15) devant le tableau de bord de ligne"
      },
      {
        "time": "11:00",
        "desc": "Analyse d'un problème de non-conformité de cadence avec l'ingénieur méthodes et le responsable qualité"
      },
      {
        "time": "13:00",
        "desc": "Déjeuner au restaurant d'entreprise avec les chefs d'ateliers"
      },
      {
        "time": "14:30",
        "desc": "Audit de sécurité sur le port des EPI et analyse ergonomique d'un poste de chargement"
      },
      {
        "time": "16:30",
        "desc": "Validation du plan de production du lendemain avec le service ordonnancement"
      }
    ],
    "companyRole": "Pilote en chef de la transformation physique des matières premières en produits finis commercialisables, garant des volumes et des délais.",
    "skills": {
      "technical": [
        "Gestion et pilotage de production industrielle (TRS, OEE, SMED, Kanban)",
        "Connaissance des technologies de fabrication et d'automatisation",
        "Management de la sécurité industrielle et ergonomie",
        "Maîtrise des systèmes de supervision MES et ERP"
      ],
      "human": [
        "Leadership naturel et capacité à fédérer des équipes d'horizons variés",
        "Sang-froid et réactivité face aux crises de production",
        "Sens de l'écoute et exemplarité",
        "Culture du résultat et de la performance"
      ],
      "tools": [
        "Systèmes MES (Manufacturing Execution System)",
        "ERP (SAP PP, Oracle)",
        "Tableaux de bord de suivi TRS",
        "Outils de résolution de problèmes (8D, 5 Pourquoi, Ishikawa)"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "Bac +2 / BUT",
          "title": "BUT Génie Industriel et Maintenance (GIM) ou Génie Mécanique",
          "desc": "Bases de gestion de parc et de productique."
        },
        {
          "step": "Bac +5 (Diplôme d'Ingénieur)",
          "title": "Diplôme d'Ingénieur Généraliste ou Génie Industriel (Arts et Métiers, INSA, Mines, Centrale, ICAM)",
          "desc": "Management d'équipes, pilotage financier d'atelier et systèmes industriels."
        }
      ],
      "schools": [
        {
          "name": "Arts et Métiers ENSAM — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "ICAM (Institut Catholique d'Arts et Métiers) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "École Supérieure Polytechnique de Dakar (ESP - UCAD) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Polytechnique de Thiès (EPT) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "Certifications Lean Management / Six Sigma",
        "Habilitations sécurité industrielle"
      ],
      "france": [
        "Arts et Métiers ENSAM — France",
        "ICAM (Institut Catholique d'Arts et Métiers) — France"
      ],
      "senegal": [
        "École Supérieure Polytechnique de Dakar (ESP - UCAD) — Sénégal",
        "École Polytechnique de Thiès (EPT) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Agroalimentaire",
        "Automobile",
        "Pharmaceutique",
        "Métallurgie",
        "Chimie & Plasturgie"
      ],
      "employerTypes": [
        "Usines de production de moyenne et grande taille",
        "Multinationales manufacturières",
        "ETI industrielles"
      ],
      "evolution": [
        "Responsable de département de production",
        "Directeur de production",
        "Directeur d'usine / Directeur de site"
      ],
      "pros": [
        "Poste d'action au cœur du réacteur économique de l'entreprise",
        "Richesse des relations humaines quotidiennes",
        "Tremplin idéal vers la direction générale d'usine"
      ],
      "cons": [
        "Pression constante des cadences et des livraisons",
        "Rythme de travail exigeant (astreintes, travail posté)"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Simuler l'ordonnancement et le calcul du TRS d'une mini-ligne de 3 postes de travail avec 5 pannes aléatoires sous tableur Excel.",
      "steps": [
        "Définir le taux de disponibilité, le taux de performance et le taux de qualité",
        "Calculer le produit des 3 ratios pour obtenir le TRS",
        "Mettre en place un plan d'action pour remonter le TRS de 65% à 85%"
      ],
      "freeResources": [
        "Guide pratique du TRS (AFNOR)",
        "Coursera Manufacturing Operations Management"
      ]
    },
    "aiImpact": {
      "summary": "L'IA transforme le pilotage de production grâce à l'ordonnancement dynamique prédictif et à l'optimisation énergétique en temps réel des machines.",
      "positiveImpacts": [
        "Réduction des arrêts grâce à la détection précoce d'anomalies de ligne",
        "Aide à la décision pour réaffecter instantanément les opérateurs en cas de panne"
      ],
      "risksAndChallenges": [
        "Ne pas perdre le contact physique et la compréhension humaine du travail en atelier"
      ],
      "recommendedSkills": [
        "Pilotage d'usines connectées via plateformes MES intelligentes"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, les ingénieurs de production sont les moteurs de la souveraineté alimentaire et industrielle locale (raffineries d'huile, biscuiteries de Thiès, cimenteries de Bargny, usines pharmaceutiques Medis/Institut Pasteur).",
      "westAfricaOpportunities": "Postes clés très rémunérateurs dans l'agro-industrie ivoirienne, ghanéenne et sénégalaise.",
      "localChampions": [
        "Compagnie Sucrière Sénégalaise (CSS)",
        "Patisen",
        "Grands Moulins de Dakar",
        "SOCOCIM Industries"
      ]
    },
    "salary": "🇫🇷 France : 38 000 - 72 000 € brut/an • 🇸🇳 Sénégal : 600 000 - 2 300 000 FCFA net/mois",
    "connectedFamilies": [
      "droit-management",
      "agriculture-elevage-peche"
    ],
    "relatedJobs": [
      "ingenieur-methodes-industriel",
      "conducteur-ligne-production",
      "directeur-site-industriel"
    ],
    "sources": [
      {
        "organization": "L'Étudiant",
        "title": "Fiche métier : Ingénieur de production",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie/ingenieur-de-production.html",
        "type": "metier"
      },
      {
        "organization": "Onisep",
        "title": "Ingénieur / Ingénieure de production",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/ingenieur-ingenieure-de-production",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Un point de TRS (Taux de Rendement Synthétique) gagné sur une ligne d'embouteillage ou de conditionnement à grande vitesse peut représenter plus de 500 000 euros de gain annuel pour une usine.",
      "pourquoi": "Le TRS mesure l'efficacité réelle : temps utile par rapport au temps théorique. Les micro-arrêts de quelques secondes sont les plus coûteux.",
      "a_retenir": "L'ingénieur de production chasse chaque seconde gaspillée pour maximiser la création de valeur."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant & baromètres industriels",
        "range": "38 000 - 72 000 € brut/an",
        "junior": "38 000 € brut/an",
        "senior": "72 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets dans les usines de transformation à Dakar/Sandiara",
        "range": "600 000 - 2 300 000 FCFA net/mois",
        "junior": "600 000 FCFA net/mois",
        "senior": "2 300 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Pilote la fabrication en série des produits dans l'usine, encadre les équipes d'opérateurs et garantit les cadences, la sécurité et la qualité.",
    "level": "Bac +5 (Diplôme d'Ingénieur / Master)"
  },
  {
    "id": "conducteur-ligne-production",
    "slug": "conducteur-ligne-production",
    "title": "Conducteur de Ligne de Production",
    "aliases": [
      "Pilote de ligne de fabrication",
      "Opérateur-régleur de ligne",
      "Line Operator"
    ],
    "icon": "🎛️",
    "familyId": "industrie-mecanique",
    "domain": "Production & Fabrication",
    "domainId": "production-fabrication-indus",
    "subdomain": "Conduite de ligne & Pilotage de fabrication",
    "shortDescription": "Pilote un ensemble de machines automatisées sur une ligne de fabrication, effectue les réglages et veille à l'approvisionnement continu.",
    "longDescription": "Le conducteur de ligne de production gère le fonctionnement d'un ensemble de machines enchaînées (remplisseuses, emballeuses, robots de palettisation, presses). Depuis son pupitre tactile et sur la ligne, il règle les paramètres de vitesse, contrôle la conformité des produits, approvisionne les consommables et intervient immédiatement en cas de bourrage ou de panne de premier niveau.",
    "missions": [
      "Mettre en route la ligne, charger les recettes de production sur les pupitres tactiles et régler les guides",
      "Contrôler la qualité des produits en cours de fabrication (poids, étanchéité, dimensions, étiquetage)",
      "Alimenter la ligne en matières premières et consommables (bobines de film, cartons, bouchons, étiquettes)",
      "Détecter les dérives, identifier l'origine des blocages et réaliser les dépannages de premier niveau",
      "Nettoyer et désinfecter les machines lors des changements de série et renseigner les fiches de suivi de production"
    ],
    "workEnvironment": [
      "Usines de grande série (agroalimentaire, cosmétique, pharmacie, plasturgie)",
      "Travail en équipes postées (2x8, 3x8, week-end)",
      "Port obligatoire d'équipements de protection (charlotte, gants, chaussures de sécurité)"
    ],
    "typicalDay": [
      {
        "time": "05:45",
        "desc": "Passage de consignes avec le conducteur de l'équipe de nuit et vérification de la propreté de la ligne"
      },
      {
        "time": "06:15",
        "desc": "Changement de format pour passer au conditionnement de flacons de 500 ml : réglage des étoiles de transfert et des têtes de vissage"
      },
      {
        "time": "09:00",
        "desc": "Contrôle qualité sur échantillon de 20 produits et saisie des poids sur la tablette de ligne"
      },
      {
        "time": "11:30",
        "desc": "Résolution d'un bourrage de cartons sur l'encaisseuse automatique"
      },
      {
        "time": "13:45",
        "desc": "Nettoyage du poste et transmission des consignes à l'équipe d'après-midi"
      }
    ],
    "companyRole": "Opérateur central au pied des machines, assurant la régularité du flux physique et le respect direct de la qualité produit.",
    "skills": {
      "technical": [
        "Réglages mécaniques et pneumatiques de base",
        "Pilotage d'interfaces homme-machine (IHM) industrielles",
        "Application stricte des règles d'hygiène et de sécurité (HACCP, BPF)",
        "Maintenance de niveau 1 (nettoyage, graissage, débourrage)"
      ],
      "human": [
        "Vigilance permanente et réactivité",
        "Habileté manuelle et précision de réglage",
        "Esprit d'équipe et communication claire",
        "Rigueur d'enregistrement des données"
      ],
      "tools": [
        "Écrans IHM tactiles",
        "Outillage manuel d'atelier (clés, tournevis)",
        "Appareils de contrôle qualité (balances de précision, débitmètres, pieds à coulisse)"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "CAP / Bac Pro",
          "title": "Bac Pro Pilote de Ligne de Production (PLP) ou Bio-Industries de Transformation",
          "desc": "Apprentissage complet de la conduite d'installations automatisées et de la maintenance de 1er niveau."
        },
        {
          "step": "Bac +2 (BTS)",
          "title": "BTS Pilotage de Procédés ou BTS Maintenance des Systèmes",
          "desc": "Pour évoluer rapidement vers des postes de chef d'équipe de ligne."
        }
      ],
      "schools": [
        {
          "name": "Lycées professionnels industriels de France (Bac Pro PLP) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "ISEP de Diamniadio (Filière Agro-Industrie) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "CQP Conducteur de ligne",
        "Certificat d'Aptitude à la Conduite En Sécurité (CACES Chariots de manutention)"
      ],
      "france": [
        "Lycées professionnels industriels de France (Bac Pro PLP) — France"
      ],
      "senegal": [
        "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal",
        "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal",
        "ISEP de Diamniadio (Filière Agro-Industrie) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Agroalimentaire",
        "Pharmaceutique",
        "Cosmétique",
        "Plasturgie",
        "Automobile"
      ],
      "employerTypes": [
        "Grandes usines de conditionnement",
        "PME agroalimentaires",
        "Coopératives industrielles"
      ],
      "evolution": [
        "Chef d'équipe de production",
        "Animateur de ligne",
        "Technicien de maintenance industrielle par formation continue"
      ],
      "pros": [
        "Métier dynamique sans monotonie",
        "Forte demande sur tout le territoire",
        "Nombreuses opportunités d'heures majorées en travail posté"
      ],
      "cons": [
        "Horaires décalés (postes de nuit, matin ou week-end)",
        "Bruit et station debout prolongée"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Visiter une usine locale lors des journées portes ouvertes industrielles ou regarder des vidéos de 'Processus de fabrication' (How It's Made) et schématiser les 5 étapes d'une ligne d'embouteillage.",
      "steps": [
        "Identifier les étapes : soufflage, remplissage, bouchage, étiquetage, encaissage",
        "Comprendre le rôle des capteurs optiques et inductifs entre chaque machine",
        "Découvrir la réglementation d'hygiène alimentaire HACCP"
      ],
      "freeResources": [
        "Vidéos documentaires industrielles How It's Made",
        "Fiches de l'Association Nationale des Industries Alimentaires (ANIA)"
      ]
    },
    "aiImpact": {
      "summary": "L'automatisation et les caméras de vision IA prennent en charge les contrôles visuels répétitifs, permettant au conducteur de se concentrer sur l'anticipation des pannes et l'optimisation des réglages.",
      "positiveImpacts": [
        "Détection automatique des défauts d'étiquetage ou de niveau de remplissage",
        "Alertes prédictives sur mobile avant rupture d'approvisionnement"
      ],
      "risksAndChallenges": [
        "Nécessité de comprendre les alertes numériques générées par les algorithmes"
      ],
      "recommendedSkills": [
        "Utilisation de tablettes numériques d'atelier et terminaux connectés"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, le conducteur de ligne est le cœur battant des unités de conditionnement d'eau minérale (Kirène, Casamançais), des biscuiteries et des usines de transformation de poisson à Dakar et Saint-Louis.",
      "westAfricaOpportunities": "Emplois très nombreux dans toutes les capitales d'Afrique de l'Ouest avec le développement des biens de grande consommation locaux.",
      "localChampions": [
        "SIAGRO (Kirène)",
        "Compagnie Sucrière Sénégalaise",
        "Patisen",
        "SOBOA (Boissons gazeuses et bières)"
      ]
    },
    "salary": "🇫🇷 France : 22 000 - 35 000 € brut/an • 🇸🇳 Sénégal : 180 000 - 500 000 FCFA net/mois",
    "connectedFamilies": [
      "agriculture-elevage-peche"
    ],
    "relatedJobs": [
      "conducteur-production-automatisee",
      "ingenieur-de-production",
      "technicien-maintenance-industrielle"
    ],
    "sources": [
      {
        "organization": "L'Étudiant",
        "title": "Fiche métier : Conducteur de ligne de production",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie/conducteur-de-ligne-de-production.html",
        "type": "metier"
      },
      {
        "organization": "Onisep",
        "title": "Conducteur / Conductrice de ligne de production",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/conducteur-conductrice-de-ligne-de-production",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Une ligne moderne de conditionnement de boissons peut embouteiller, étiqueter et palettiser jusqu'à 60 000 bouteilles par heure sous la surveillance attentive d'un seul conducteur de ligne.",
      "pourquoi": "L'extrême automatisation de la chaîne exige un pilote capable de réagir en quelques secondes pour éviter un arrêt d'alimentation.",
      "a_retenir": "Le conducteur de ligne est le garant du débit continu de l'industrie moderne."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant & primes de poste",
        "range": "22 000 - 35 000 € brut/an",
        "junior": "22 000 € brut/an",
        "senior": "35 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets constatés en usines agroalimentaires et industrielles",
        "range": "180 000 - 500 000 FCFA net/mois",
        "junior": "180 000 FCFA net/mois",
        "senior": "500 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Pilote un ensemble de machines automatisées sur une ligne de fabrication, effectue les réglages et veille à l'approvisionnement continu.",
    "level": "CAP / Bac Pro à Bac +2"
  },
  {
    "id": "conducteur-production-automatisee",
    "slug": "conducteur-production-automatisee",
    "title": "Conducteur de Ligne Automatisée",
    "aliases": [
      "Pilote d'installation automatisée",
      "Opérateur d'îlot robotisé",
      "Automated Line Pilot"
    ],
    "icon": "🤖",
    "familyId": "industrie-mecanique",
    "domain": "Production & Fabrication",
    "domainId": "production-fabrication-indus",
    "subdomain": "Îlots robotisés & Automatismes de production",
    "shortDescription": "Supervise des systèmes automatisés complexes et des cellules robotisées de fabrication, diagnostique les pannes de logique et optimise le flux.",
    "longDescription": "Le conducteur de ligne automatisée opère sur des installations industrielles de haute technologie intégrant des automates programmables industriels (API), des robots polyarticulés et des convoyeurs intelligents. Il surveille les synoptiques de contrôle, réarme les cellules robotisées après arrêt d'urgence, adapte les programmes de fabrication et assure la maintenance préventive de premier plan.",
    "missions": [
      "Piloter des installations industrielles robotisées via des pupitres de commande SCADA",
      "Superviser les trajectoires des bras manipulateurs et des robots de soudure ou de palettisation",
      "Diagnostiquer les pannes électropneumatiques et les défauts de capteurs à l'aide des schémas d'automatisme",
      "Réaliser les réglages fins de vitesse, de pression et de positionnement des vérins et pinces",
      "Collaborer avec les techniciens d'automatisme pour optimiser les temps de cycle des robots"
    ],
    "workEnvironment": [
      "Usines de haute technologie (automobile, électronique, aéronautique)",
      "Ateliers robotisés sous atmosphère contrôlée"
    ],
    "typicalDay": [
      {
        "time": "08:00",
        "desc": "Mise sous tension des robots de la cellule de soudage et étalonnage des origines de repères"
      },
      {
        "time": "09:30",
        "desc": "Dépannage d'un capteur inductif encrassé bloquant le convoyeur à bande"
      },
      {
        "time": "12:30",
        "desc": "Déjeuner d'équipe"
      },
      {
        "time": "14:00",
        "desc": "Test de trajectoire manuelle au boîtier d'apprentissage (Teach Pendant) pour éviter une collision de préhenseur"
      },
      {
        "time": "16:30",
        "desc": "Enregistrement des cycles réalisés sur le logiciel de GMAO"
      }
    ],
    "companyRole": "Pilote expert des technologies avancées de l'atelier, garant de la synergie parfaite entre automates, robots et produit.",
    "skills": {
      "technical": [
        "Bases de programmation des automates (Siemens TIA Portal, Schneider SoMachine)",
        "Manipulation et sécurité des robots industriels (FANUC, KUKA, ABB)",
        "Électropneumatique industrielle et schémas électriques",
        "Diagnostic méthodique de pannes d'automatismes"
      ],
      "human": [
        "Calme et sang-froid face aux alertes d'automatismes",
        "Raisonnement logique et déductif",
        "Respect scrupuleux des consignes de sécurité robotique",
        "Goût pour les technologies avancées"
      ],
      "tools": [
        "Pupitres d'apprentissage robotique (Teach Pendant)",
        "Automates Siemens S7-1200/1500",
        "Multimètre et manomètre de pression",
        "Schémas électriques et pneumatiques"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "Bac Pro",
          "title": "Bac Pro Métiers de l'Électricité et de ses Environnements Connectés (MELEC) ou PLP",
          "desc": "Câblage, sécurité électrique et automatisme."
        },
        {
          "step": "Bac +2 (BTS)",
          "title": "BTS Conception et Réalisation de Systèmes Automatiques (CRSA) ou BTS Électrotechnique",
          "desc": "Conduite avancée, programmation et mise en service de lignes automatisées."
        }
      ],
      "schools": [
        {
          "name": "Lycées techniques préparant au BTS CRSA — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Polytechnique de Dakar (ESP) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "ISEP de Diamniadio — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "Habilitation électrique B1V / BR",
        "Certification sécurité robotique (norme ISO 10218)"
      ],
      "france": [
        "Lycées techniques préparant au BTS CRSA — France"
      ],
      "senegal": [
        "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal",
        "École Supérieure Polytechnique de Dakar (ESP) — Sénégal",
        "ISEP de Diamniadio — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Automobile & Véhicules électriques",
        "Aéronautique",
        "Agroalimentaire automatisé",
        "Électronique & Énergie"
      ],
      "employerTypes": [
        "Usines 4.0 ultra-automatisées",
        "Constructeurs automobiles",
        "Groupes de biens de consommation"
      ],
      "evolution": [
        "Technicien en automatisme",
        "Roboticien de maintenance",
        "Chef d'équipe d'îlots robotisés"
      ],
      "pros": [
        "Travail au cœur de la robotique et de l'Industrie 4.0",
        "Moins de manutention lourde que sur une ligne manuelle",
        "Très forte valorisation des compétences techniques"
      ],
      "cons": [
        "Complexité des diagnostics lors d'arrêts imprévus"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Programmer un petit automate virtuel ou une carte programmable (Arduino/ESP32) pour commander un cycle de convoyeur avec capteur et arrêt automatique.",
      "steps": [
        "Établir le grafcet du fonctionnement séquentiel",
        "Traduire le grafcet en langage ladder ou logique",
        "Simuler les entrées/sorties et tester les modes marche/arrêt"
      ],
      "freeResources": [
        "Siemens Industry Online Support (tutoriels TIA Portal)",
        "Logiciels libres de simulation Grafcet/Ladder"
      ]
    },
    "aiImpact": {
      "summary": "L'intégration de la maintenance prédictive par IA permet d'alerter le conducteur avant même qu'un axe de robot ou une électrovanne ne tombe en panne.",
      "positiveImpacts": [
        "Supervision visuelle en 3D de l'état de chaque composant de la ligne",
        "Assistance au diagnostic guidé par IA sur tablette d'atelier"
      ],
      "risksAndChallenges": [
        "Dépendance aux modèles d'IA : l'opérateur doit conserver la capacité d'intervenir manuellement en mode dégradé"
      ],
      "recommendedSkills": [
        "Compréhension des alertes de maintenance prédictive par vibration et température"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, avec l'installation de lignes modernes d'ensachage de ciment à grande cadence et de chaînes automatisées de mise en boîte de thon, les compétences en conduite automatisée sont parmi les plus recherchées du secteur manufacturier.",
      "westAfricaOpportunities": "Opportunités dans toutes les usines agro-industrielles et cimentières modernes de la sous-région ouest-africaine.",
      "localChampions": [
        "Dangote Cement Sénégal",
        "Ciments du Sahel",
        "SOCOCIM",
        "Scasa (Société de Conserverie Africaine)"
      ]
    },
    "salary": "🇫🇷 France : 24 000 - 38 000 € brut/an • 🇸🇳 Sénégal : 220 000 - 650 000 FCFA net/mois",
    "connectedFamilies": [
      "numerique-ia",
      "energie-renouvelable"
    ],
    "relatedJobs": [
      "conducteur-ligne-production",
      "automaticien-industriel",
      "roboticien-industriel"
    ],
    "sources": [
      {
        "organization": "L'Étudiant",
        "title": "Fiche métier : Conducteur de production automatisée",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie/conducteur-ou-conductrice-production-automatisee.html",
        "type": "metier"
      },
      {
        "organization": "Onisep",
        "title": "Pilote d'installation automatisée",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/pilote-d-installation-automatisee",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Dans une usine 4.0, un conducteur de ligne automatisée peut superviser à lui seul jusqu'à 8 robots industriels synchronisés effectuant 120 opérations à la minute sans interruption.",
      "pourquoi": "L'opérateur humain devient le superviseur intelligent des machines, intervenant pour arbitrer, régler et optimiser plutôt que pour exécuter des tâches répétitives.",
      "a_retenir": "La ligne automatisée décuple la force de l'opérateur grâce à la robotique."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant",
        "range": "24 000 - 38 000 € brut/an",
        "junior": "24 000 € brut/an",
        "senior": "38 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets constatés en usines automatisées à Dakar/Thiès",
        "range": "220 000 - 650 000 FCFA net/mois",
        "junior": "220 000 FCFA net/mois",
        "senior": "650 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Supervise des systèmes automatisés complexes et des cellules robotisées de fabrication, diagnostique les pannes de logique et optimise le flux.",
    "level": "CAP / Bac Pro à Bac +2"
  },
  {
    "id": "roboticien-industriel",
    "slug": "roboticien-industriel",
    "title": "Roboticien / Ingénieur en Robotique Industrielle",
    "aliases": [
      "Ingénieur roboticien",
      "Concepteur de cellules robotisées",
      "Robotics Engineer"
    ],
    "icon": "🤖",
    "familyId": "industrie-mecanique",
    "domain": "Automatisation & Robotique",
    "domainId": "automatisation-robotique-indus",
    "subdomain": "Robotique industrielle & Bras polyarticulés",
    "shortDescription": "Conçoit, programme, intègre et optimise les robots industriels et les cellules de manipulation automatique dans les usines de production.",
    "longDescription": "Le roboticien donne vie aux robots industriels. Qu'il s'agisse de robots 6 axes pour le soudage de carrosseries, de robots Delta ultra-rapides pour l'emballage ou de cobots collaboratifs, il modélise la cellule, programme les trajectoires millimétrées, intègre les systèmes de vision par caméra, configure les barrières immatérielles de sécurité et optimise les temps de cycle pour atteindre une cadence maximale.",
    "missions": [
      "Concevoir l'implantation 3D de la cellule robotisée et modéliser l'accessibilité des préhenseurs",
      "Programmer les trajectoires des robots dans les langages constructeurs (KAREL/TP pour FANUC, KRL pour KUKA, RAPID pour ABB)",
      "Intégrer les systèmes de vision industrielle pour guider les robots sur pièces en mouvement",
      "Sécuriser la cellule conformément aux directives machines et aux normes de sécurité robotique (ISO 10218, ISO/TS 15066)",
      "Mettre en service les cellules chez les clients industriels et former les opérateurs d'atelier"
    ],
    "workEnvironment": [
      "Intégrateurs de robotique industrielle",
      "Centres d'ingénierie automobile et aéronautique",
      "Déplacements fréquents sur sites industriels clients"
    ],
    "typicalDay": [
      {
        "time": "08:30",
        "desc": "Simulation hors-ligne d'une cellule de palettisation robotisée sous logiciel RoboDK"
      },
      {
        "time": "10:30",
        "desc": "Programmation des trajectoires fines de soudure à l'arc sur un robot FANUC en atelier d'intégration"
      },
      {
        "time": "12:30",
        "desc": "Déjeuner avec les automaticiens et ingénieurs vision"
      },
      {
        "time": "14:00",
        "desc": "Test de reconnaissance de forme et d'orientation de pièces par caméra 3D connectée au robot"
      },
      {
        "time": "16:30",
        "desc": "Audit de sécurité des barrières immatérielles et des scanners laser de zone"
      }
    ],
    "companyRole": "Créateur d'automatisation intelligente, rendant les usines plus compétitives, plus rapides et supprimant la pénibilité pour les humains.",
    "skills": {
      "technical": [
        "Programmation robotique multimarques (KUKA, FANUC, ABB, Stäubli, Yaskawa)",
        "Simulation robotique hors-ligne (Process Simulate, Delmia, RoboDK)",
        "Vision industrielle et traitement d'image appliqué au guidage robot",
        "Sécurité des machines et des cellules robotisées"
      ],
      "human": [
        "Esprit d'innovation et passion pour la mécatronique",
        "Patience et persévérance lors des phases de mise au point",
        "Rigueur absolue sur la sécurité des personnes",
        "Sens aigu du travail collaboratif"
      ],
      "tools": [
        "RoboDK",
        "KUKA KRC / WorkVisual",
        "FANUC ROBOGUIDE",
        "ABB RobotStudio",
        "Systèmes de vision Cognex / Keyence"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "Bac +2 / BUT",
          "title": "BUT Génie Électrique et Informatique Industrielle (GEII) ou BUT GMP",
          "desc": "Électronique, automatique et mécanique fondamentale."
        },
        {
          "step": "Bac +5 (Master / Diplôme d'Ingénieur)",
          "title": "Diplôme d'Ingénieur en Robotique, Mécatronique ou Automatique (Polytech, ENSTA, INSA, ENSMM)",
          "desc": "Cinématique inverse, vision robotique, commande avancée et intelligence artificielle embarquée."
        }
      ],
      "schools": [
        {
          "name": "Polytech Montpellier / Sorbonne (Département Robotique) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "Supmicrotech ENSMM (Besançon) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "École Supérieure Polytechnique de Dakar (ESP - Département Génie Électrique) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Polytechnique de Thiès (EPT) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "Certifications officielles constructeurs (FANUC Certified Robot Programmer, ABB Certified System Engineer)"
      ],
      "france": [
        "Polytech Montpellier / Sorbonne (Département Robotique) — France",
        "Supmicrotech ENSMM (Besançon) — France"
      ],
      "senegal": [
        "École Supérieure Polytechnique de Dakar (ESP - Département Génie Électrique) — Sénégal",
        "École Polytechnique de Thiès (EPT) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Automobile & Batteries",
        "Aéronautique",
        "Agroalimentaire & Logistique",
        "Industrie pharmaceutique",
        "Métallurgie"
      ],
      "employerTypes": [
        "Sociétés intégrateurs de robotique",
        "Grands constructeurs industriels",
        "Fabricants de robots",
        "Bureaux d'ingénierie"
      ],
      "evolution": [
        "Chef de projet robotique",
        "Responsable du pôle automatisation et robotique",
        "Directeur technique mécatronique"
      ],
      "pros": [
        "Métier à la pointe de l'innovation technologique",
        "Forte employabilité internationale et salaires attractifs",
        "Satisfaction de voir des machines complexes bouger avec fluidité"
      ],
      "cons": [
        "Déplacements réguliers pour les installations sur sites industriels"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Télécharger la version d'essai de RoboDK et simuler un bras robotisé 6 axes effectuant une tâche de 'Pick and Place' de cubes avec calcul de trajectoire sans collision.",
      "steps": [
        "Importer un modèle CAO de robot et un outil préhenseur",
        "Définir les cibles cartésiennes et les approches",
        "Générer le programme robot et vérifier la cinématique sans singularité"
      ],
      "freeResources": [
        "Documentation RoboDK & Tutoriels YouTube",
        "ROS (Robot Operating System) Open Source Tutorials",
        "Chaîne YouTube Robotique Industrielle"
      ]
    },
    "aiImpact": {
      "summary": "L'IA transforme la robotique par l'apprentissage par renforcement et la vision générative, permettant aux robots de saisir des objets inconnus et désordonnés sans programmation préalable de trajectoire.",
      "positiveImpacts": [
        "Capacité de 'Bin Picking' (dévracage) de pièces mélangées avec succès supérieur à 99%",
        "Adaptation automatique de trajectoire face à un obstacle imprévu"
      ],
      "risksAndChallenges": [
        "Temps de calcul et robustesse des modèles de vision en conditions de luminosité variables"
      ],
      "recommendedSkills": [
        "Interfaçage ROS 2 et modèles de vision par ordinateur (YOLO, OpenCV)"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, la robotique industrielle émerge rapidement dans la palettisation automatisée des cimenteries et des meuneries, ainsi que dans les nouvelles lignes de tri et d'emballage agricole à Saint-Louis et dans les Niayes.",
      "westAfricaOpportunities": "Demande croissante d'ingénieurs d'intégration pour adapter les solutions robotiques importées aux cadences locales.",
      "localChampions": [
        "Senegal Robotic Center (Dakar)",
        "ESP Robotique Club",
        "SOCOCIM",
        "Grands Moulins de Dakar"
      ]
    },
    "salary": "🇫🇷 France : 38 000 - 72 000 € brut/an • 🇸🇳 Sénégal : 600 000 - 2 200 000 FCFA net/mois",
    "connectedFamilies": [
      "numerique-ia",
      "energie-renouvelable"
    ],
    "relatedJobs": [
      "automaticien-industriel",
      "ingenieur-cobotique",
      "conducteur-production-automatisee"
    ],
    "sources": [
      {
        "organization": "L'Étudiant",
        "title": "Fiche métier : Roboticien",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie/roboticien.html",
        "type": "metier"
      },
      {
        "organization": "Onisep",
        "title": "Roboticien / Roboticienne",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/roboticien-roboticienne",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Selon la Fédération Internationale de la Robotique (IFR), la densité mondiale de robots a dépassé 150 robots pour 10 000 employés dans l'industrie manufacturière, avec des pointes à plus de 1 000 en Corée du Sud et en Allemagne.",
      "pourquoi": "Les robots réalisent les tâches insalubres, lourdes ou toxiques (peinture solvantée, soudage sous gaz protecteur) tout en augmentant la cadence de production.",
      "a_retenir": "Le roboticien ne remplace pas l'homme : il le libère des tâches physiques les plus usantes."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant & baromètres mécatronique",
        "range": "38 000 - 72 000 € brut/an",
        "junior": "38 000 € brut/an",
        "senior": "72 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets dans les intégrateurs et grandes usines automatisées",
        "range": "600 000 - 2 200 000 FCFA net/mois",
        "junior": "600 000 FCFA net/mois",
        "senior": "2 200 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Conçoit, programme, intègre et optimise les robots industriels et les cellules de manipulation automatique dans les usines de production.",
    "level": "Bac +5 (Diplôme d'Ingénieur / Master)"
  },
  {
    "id": "automaticien-industriel",
    "slug": "automaticien-industriel",
    "title": "Automaticien / Ingénieur en Automatismes",
    "aliases": [
      "Automaticien industriel",
      "Ingénieur automaticien",
      "Automation Engineer"
    ],
    "icon": "⚡",
    "familyId": "industrie-mecanique",
    "domain": "Automatisation & Robotique",
    "domainId": "automatisation-robotique-indus",
    "subdomain": "Automates programmables (API) & Systèmes SCADA",
    "shortDescription": "Programme la logique de commande des automates industriels, conçoit les interfaces de supervision et met en réseau les équipements d'usine.",
    "longDescription": "L'automaticien est le cerveau du système de production. Il conçoit l'architecture d'automatismes des machines et des usines entières. En programmant les automates programmables industriels (API / PLC) selon la norme IEC 61131-3 (Ladder, Grafcet, Texte Structuré), il synchronise les capteurs, les moteurs, les vannes et les vérins. Il conçoit également les écrans de supervision (SCADA) permettant aux opérateurs de piloter l'usine.",
    "missions": [
      "Concevoir l'architecture d'automatisme et les réseaux de communication industriels (Profinet, Ethernet/IP, Modbus TCP)",
      "Développer les programmes d'automates programmables industriels (API) sous Siemens TIA Portal, Schneider ou Rockwell",
      "Créer les écrans tactiles IHM et les systèmes de supervision globale d'usine (SCADA WinCC, Wonderware)",
      "Réaliser les tests de mise en service sur plateforme d'essais et le débuggage en conditions réelles d'atelier",
      "Assurer la mise en conformité des sécurités machines (coupures d'urgence, arrêts de sécurité programmés)"
    ],
    "workEnvironment": [
      "Bureaux d'études d'automatisme",
      "Usines de production de tous secteurs",
      "Déplacements sur sites industriels pour les mises en service"
    ],
    "typicalDay": [
      {
        "time": "08:30",
        "desc": "Connexion en ligne avec un automate Siemens S7-1500 pour analyser un défaut de synchronisation de convoyeurs"
      },
      {
        "time": "10:00",
        "desc": "Développement d'un bloc fonctionnel en Texte Structuré (SCL) pour réguler le débit d'une cuve de mélange"
      },
      {
        "time": "12:30",
        "desc": "Déjeuner avec les électrotechniciens de l'équipe"
      },
      {
        "time": "14:00",
        "desc": "Conception d'écrans graphiques de supervision IHM sous WinCC avec affichage des courbes de température en temps réel"
      },
      {
        "time": "16:30",
        "desc": "Test de communication réseau entre l'automate maître et des variateurs de fréquence via Profinet"
      }
    ],
    "companyRole": "Maître de la logique séquentielle de l'usine, transformant les signaux physiques des capteurs en actions mécaniques parfaitement coordonnées.",
    "skills": {
      "technical": [
        "Programmation d'automates industriels selon la norme IEC 61131-3 (Ladder, FBD, SFC, ST/SCL)",
        "Supervision industrielle et SCADA (WinCC, InTouch, Ignition)",
        "Bus de terrain et réseaux industriels (Profinet, Profibus, EtherCAT, OPC-UA)",
        "Électrotechnique, instrumentation et variateurs de vitesse"
      ],
      "human": [
        "Logique rigoureuse et esprit de méthode",
        "Capacité à diagnostiquer rapidement des pannes complexes",
        "Calme et sang-froid en phase de démarrage d'usine",
        "Autonomie et adaptabilité"
      ],
      "tools": [
        "Siemens TIA Portal (Step 7 / WinCC)",
        "Schneider EcoStruxure Machine Expert",
        "Rockwell Studio 5000",
        "Logiciels SCADA (Ignition, PCVue)",
        "Multimètres et analyseurs de réseau bus"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "Bac +2 (BTS / BUT)",
          "title": "BTS CRSA (Conception et Réalisation de Systèmes Automatiques) ou BUT GEII",
          "desc": "Fondements de l'automatique, de l'électrotechnique et des automates programmables."
        },
        {
          "step": "Bac +5 (Diplôme d'Ingénieur)",
          "title": "Diplôme d'Ingénieur en Automatique, Informatique Industrielle ou Génie Électrique",
          "desc": "Réseaux industriels complexes, cybersécurité des systèmes de contrôle (OT) et automatisation 4.0."
        }
      ],
      "schools": [
        {
          "name": "INSA Strasbourg / Lyon (Génie Électrique & Automatique) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "ENSEEIHT Toulouse (Automatique & Systèmes) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "École Supérieure Polytechnique de Dakar (ESP - Département Génie Électrique) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "Certifications Siemens Certified Automation Engineer",
        "Certifications Schneider Electric Automation Expert"
      ],
      "france": [
        "INSA Strasbourg / Lyon (Génie Électrique & Automatique) — France",
        "ENSEEIHT Toulouse (Automatique & Systèmes) — France"
      ],
      "senegal": [
        "École Supérieure Polytechnique de Dakar (ESP - Département Génie Électrique) — Sénégal",
        "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Chimie & Pharmacie",
        "Agroalimentaire",
        "Énergie & Traitement des eaux",
        "Automobile",
        "Métallurgie"
      ],
      "employerTypes": [
        "Sociétés d'ingénierie et d'intégration d'automatismes",
        "Grands groupes manufacturiers",
        "Exploitants d'infrastructures d'eau et d'énergie"
      ],
      "evolution": [
        "Chef de projet automatismes",
        "Architecte de systèmes de contrôle-commande d'usine",
        "Responsable technique électricité et automatismes"
      ],
      "pros": [
        "Métier omniprésent dans toutes les industries modernes",
        "Plein emploi garanti et forte rémunération",
        "Polyvalence unique entre logiciel et matériel"
      ],
      "cons": [
        "Périodes de mise en service parfois intenses avec horaires extensifs sur site"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Télécharger un simulateur d'automates gratuit (ex: OpenPLC ou simulateur Siemens) et concevoir le programme complet d'un carrefour à feux tricolores avec détection de véhicules.",
      "steps": [
        "Écrire le grafcet avec les étapes, transitions et temporisations",
        "Coder le programme en langage Ladder ou SFC",
        "Simuler le fonctionnement et vérifier les conditions de sécurité"
      ],
      "freeResources": [
        "OpenPLC Project (logiciel open source IEC 61131-3)",
        "Tutoriels Schneider et Siemens sur YouTube",
        "AutomationDirect Learning Center"
      ]
    },
    "aiImpact": {
      "summary": "L'IA générative commence à assister les automaticiens dans la génération automatique de blocs de code en Texte Structuré (ST) et la documentation des programmes.",
      "positiveImpacts": [
        "Génération de squelettes de programmes automates à partir de spécifications textuelles",
        "Détection automatique de bugs de logique dans les programmes"
      ],
      "risksAndChallenges": [
        "Nécessité de relire et tester rigoureusement chaque ligne pour éviter les accidents matériels en atelier"
      ],
      "recommendedSkills": [
        "Passerelles entre protocoles industriels et IA (OPC-UA, MQTT, Node-RED)"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, l'automaticien est indispensable pour piloter les stations de pompage et de traitement d'eau potable (usine de Keur Momar Sarr 3 - KMS3), les centrales électriques de la Senelec et les processus continus des cimenteries.",
      "westAfricaOpportunities": "Très forte demande dans toute l'Afrique de l'Ouest pour la maintenance et la modernisation des automates industriels.",
      "localChampions": [
        "Senelec (Société Nationale d'Électricité)",
        "SEN'EAU",
        "Dangote Cement",
        "SOCOCIM Industries"
      ]
    },
    "salary": "🇫🇷 France : 36 000 - 68 000 € brut/an • 🇸🇳 Sénégal : 550 000 - 2 100 000 FCFA net/mois",
    "connectedFamilies": [
      "energie-renouvelable",
      "numerique-ia"
    ],
    "relatedJobs": [
      "roboticien-industriel",
      "conducteur-production-automatisee",
      "electromecanicien"
    ],
    "sources": [
      {
        "organization": "L'Étudiant",
        "title": "Fiche métier : Automaticien",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie/automaticien.html",
        "type": "metier"
      },
      {
        "organization": "Onisep",
        "title": "Automaticien / Automaticienne",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/automaticien-automaticienne",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Dans une usine de traitement d'eau ou une centrale électrique, un système d'automatisme traite plus de 10 000 signaux de capteurs et d'actionneurs chaque quart de seconde sans faillir.",
      "pourquoi": "Les automates industriels (API) sont conçus pour fonctionner 24h/24 pendant 20 ans dans des environnements poussiéreux et soumis à d'intenses parasites électromagnétiques.",
      "a_retenir": "L'automaticien assure la fiabilité sans faille des fonctions critiques de l'industrie."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant & grilles d'ingénierie",
        "range": "36 000 - 68 000 € brut/an",
        "junior": "36 000 € brut/an",
        "senior": "68 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets dans les grands groupes industriels et stations de traitement",
        "range": "550 000 - 2 100 000 FCFA net/mois",
        "junior": "550 000 FCFA net/mois",
        "senior": "2 100 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Programme la logique de commande des automates industriels, conçoit les interfaces de supervision et met en réseau les équipements d'usine.",
    "level": "Bac +5 (Diplôme d'Ingénieur / Master)"
  },
  {
    "id": "ingenieur-cobotique",
    "slug": "ingenieur-cobotique",
    "title": "Ingénieur en Cobotique & Robotique Collaborative",
    "aliases": [
      "Ingénieur cobotique",
      "Spécialiste de la collaboration homme-robot",
      "Cobotics Engineer"
    ],
    "icon": "🤝",
    "familyId": "industrie-mecanique",
    "domain": "Automatisation & Robotique",
    "domainId": "automatisation-robotique-indus",
    "subdomain": "Cobotique & Interaction homme-machine sûre",
    "shortDescription": "Conçoit et déploie des robots collaboratifs (cobots) qui travaillent au contact direct des opérateurs humains sans barrière de sécurité physique.",
    "longDescription": "L'ingénieur en cobotique incarne la nouvelle frontière de l'Industrie 4.0. Contrairement aux robots traditionnels enfermés dans des cages métalliques, les cobots partagent l'espace de travail des ouvriers pour les assister dans le port de charges, le vissage de précision ou le collage. L'ingénieur cobotique programme les trajectoires par apprentissage gestuel et garantit que les forces d'impact ne présentent aucun danger pour l'humain.",
    "missions": [
      "Concevoir et implanter des postes de travail collaboratifs homme-robot (sans barrières matérielles)",
      "Programmer et régler des cobots multiaxes légers (Universal Robots, Doosan, KUKA LBR iiwa, Fanuc CRX)",
      "Réaliser l'analyse des risques de collision selon la norme internationale ISO/TS 15066",
      "Concevoir des préhenseurs à retour d'effort et des effecteurs amortis et sécurisés",
      "Accompagner les opérateurs d'atelier dans l'adoption du robot pour réduire les troubles musculosquelettiques (TMS)"
    ],
    "workEnvironment": [
      "Lignes d'assemblage flexibles",
      "Ateliers d'usinage et de contrôle qualité",
      "Bureaux d'études en ergonomie et mécatronique"
    ],
    "typicalDay": [
      {
        "time": "08:30",
        "desc": "Mesure des forces d'impact d'un cobot lors d'un test de contact sur mannequin selon la norme ISO/TS 15066"
      },
      {
        "time": "10:30",
        "desc": "Programmation par guidage manuel direct (lead-through) d'une tâche de vissage de carter moteur"
      },
      {
        "time": "12:30",
        "desc": "Déjeuner avec les médecins du travail et les ergonomes"
      },
      {
        "time": "14:00",
        "desc": "Atelier participatif avec un opérateur de montage pour adapter la trajectoire du cobot à son confort gestuel"
      },
      {
        "time": "16:30",
        "desc": "Optimisation des temps de cycle tout en maintenant la vitesse sécuritaire réglementaire"
      }
    ],
    "companyRole": "Architecte de la collaboration bienveillante entre l'homme et la machine, conjuguant flexibilité humaine et puissance robotique.",
    "skills": {
      "technical": [
        "Programmation de cobots (Polyscope Universal Robots, Doosan Dart-Studio)",
        "Norme de sécurité de la robotique collaborative (ISO/TS 15066)",
        "Capteurs d'efforts, peau tactile et technologies de détection de présence",
        "Ergonomie industrielle et biomécanique du travail"
      ],
      "human": [
        "Empathie et grande écoute des opérateurs d'atelier",
        "Sens aigu de la sécurité humaine",
        "Pédagogie et sens de la formation",
        "Esprit novateur"
      ],
      "tools": [
        "Cobots Universal Robots (UR3e, UR5e, UR10e)",
        "Dynamomètres de collision (GTE / Pilz PRMS)",
        "Logiciels de simulation ergonomique",
        "Capteurs de couple multiaxes"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "Bac +2 / BUT",
          "title": "BUT GEII ou BUT Génie Mécanique et Productique",
          "desc": "Bases d'électrotechnique, d'automatique et de mécanique."
        },
        {
          "step": "Bac +5 (Master / Diplôme d'Ingénieur)",
          "title": "Diplôme d'Ingénieur en Robotique, Mécatronique ou Génie Industriel",
          "desc": "Spécialisation en interaction physique homme-robot, sécurité industrielle et intelligence collaborative."
        }
      ],
      "schools": [
        {
          "name": "École Centrale de Nantes / CentraleSupélec — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "Polytech Sorbonne / Université de Lorraine — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "École Supérieure Polytechnique de Dakar (ESP - UCAD) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Supérieur d'Enseignement Professionnel (ISEP Diamniadio) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "Certifications officielles Universal Robots Core & Advanced Certified",
        "Formations certifiantes Pilz en sécurité des machines"
      ],
      "france": [
        "École Centrale de Nantes / CentraleSupélec — France",
        "Polytech Sorbonne / Université de Lorraine — France"
      ],
      "senegal": [
        "École Supérieure Polytechnique de Dakar (ESP - UCAD) — Sénégal",
        "Institut Supérieur d'Enseignement Professionnel (ISEP Diamniadio) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Automobile & Équipementiers",
        "Pharmacie & Cosmétique",
        "Horlogerie & Électronique de précision",
        "Agroalimentaire"
      ],
      "employerTypes": [
        "Intégrateurs de robotique collaborative",
        "Constructeurs de cobots",
        "Industries manufacturières innovantes"
      ],
      "evolution": [
        "Responsable du pôle robotique & cobotique",
        "Directeur de l'innovation industrielle 4.0",
        "Consultant expert en ergonomie et automatisation"
      ],
      "pros": [
        "Domaine technologique en explosion mondiale (+30% de croissance annuelle)",
        "Rôle très positif : élimination des douleurs physiques des ouvriers",
        "Technologie accessible et rapide à déployer"
      ],
      "cons": [
        "Contraintes normatives très strictes sur les vitesses et puissances maximales"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Utiliser le simulateur en ligne gratuit d'Universal Robots (URSim) pour programmer une application de dépose de colle sur pièce complexe.",
      "steps": [
        "Lancer le simulateur sous machine virtuelle",
        "Programmer les points de passage avec la fonction 'MoveL' et 'Wait'",
        "Simuler la détection d'un obstacle et le passage en vitesse réduite"
      ],
      "freeResources": [
        "Universal Robots Academy (cours en ligne gratuits certifiants)",
        "Guide INRS sur la sécurité des robots collaboratifs"
      ]
    },
    "aiImpact": {
      "summary": "L'IA dote les cobots de vision sémantique et de prédiction d'intention humaine, leur permettant d'anticiper le geste de l'opérateur pour lui tendre l'outil adéquat.",
      "positiveImpacts": [
        "Interactions gestuelles intuitives sans écran ni boîtier",
        "Adaptation fluide de la trajectoire du bras en temps réel"
      ],
      "risksAndChallenges": [
        "Garantir la fiabilité absolue des modèles face aux mouvements brusques"
      ],
      "recommendedSkills": [
        "Vision par ordinateur appliquée et reconnaissance de squelette humain"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, la cobotique offre une alternative abordable et peu encombrante aux PME pour assister le conditionnement de produits alimentaires sans nécessiter de refaire l'architecture des bâtiments d'usine existants.",
      "westAfricaOpportunities": "Déploiement prometteur dans les laboratoires pharmaceutiques et les coopératives d'emballage de fruits d'exportation.",
      "localChampions": [
        "Medis Sénégal",
        "Dakar Tech Valley",
        "Ateliers d'ingénierie de Sandiara"
      ]
    },
    "salary": "🇫🇷 France : 39 000 - 74 000 € brut/an • 🇸🇳 Sénégal : 650 000 - 2 200 000 FCFA net/mois",
    "connectedFamilies": [
      "numerique-ia",
      "sante-biomedical"
    ],
    "relatedJobs": [
      "roboticien-industriel",
      "automaticien-industriel",
      "ingenieur-methodes-industriel"
    ],
    "sources": [
      {
        "organization": "L'Étudiant",
        "title": "Fiche métier : Ingénieur en cobotique",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie/ingenieur-e-en-cobotique.html",
        "type": "metier"
      },
      {
        "organization": "Onisep",
        "title": "Filière Robotique & Cobotique",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/roboticien-roboticienne",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Le terme 'cobot' est un mot-valise inventé en 1996 par les professeurs Edward Colgate et Michael Peshkin de la Northwestern University pour désigner un robot qui collabore avec un opérateur sans risque de blessure.",
      "pourquoi": "Équipé de capteurs de force dans chaque articulation, un cobot s'arrête instantanément dès qu'il touche un être humain avec une force minime.",
      "a_retenir": "Le cobot n'a pas vocation à remplacer le travailleur, mais à lui offrir un troisième bras infatigable."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant & Observatoire de la métallurgie",
        "range": "39 000 - 74 000 € brut/an",
        "junior": "39 000 € brut/an",
        "senior": "74 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets dans les intégrateurs technologiques et projets industriels",
        "range": "650 000 - 2 200 000 FCFA net/mois",
        "junior": "650 000 FCFA net/mois",
        "senior": "2 200 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Conçoit et déploie des robots collaboratifs (cobots) qui travaillent au contact direct des opérateurs humains sans barrière de sécurité physique.",
    "level": "Bac +5 (Diplôme d'Ingénieur / Master)"
  },
  {
    "id": "mecanicien-outilleur",
    "slug": "mecanicien-outilleur",
    "title": "Mécanicien Outilleur / Mouliste de Précision",
    "aliases": [
      "Outilleur",
      "Mouliste",
      "Technicien outillage",
      "Toolmaker"
    ],
    "icon": "🔧",
    "familyId": "industrie-mecanique",
    "domain": "Mécanique & Usinage",
    "domainId": "mecanique-industrielle",
    "subdomain": "Outillage de précision & Moules d'injection",
    "shortDescription": "Fabrique, ajuste, met au point et entretient les moules d'injection plastique, les matrices d'emboutissage et les outils de découpe de haute précision.",
    "longDescription": "Véritable orfèvre de la métallurgie, le mécanicien outilleur réalise les outillages industriels sans lesquels aucune fabrication en série ne serait possible (moules de bouteilles, matrices de capots de voiture, outils de découpe de canettes). Il usine les aciers spéciaux trempés au micron près, procède à l'ajustage manuel, au polissage miroir et aux essais sur presses.",
    "missions": [
      "Usiner les empreintes de moules et de matrices sur fraiseuses CN, tours et machines d'électroérosion (EDM)",
      "Ajuster manuellement les blocs et tiroirs de moules au bleu de Prusse et à la pierre d'abrasion",
      "Réaliser le polissage optique miroir des surfaces d'empreintes pour garantir un démoulage parfait",
      "Assembler les circuits de refroidissement, les éjecteurs et les éléments de guidage de l'outillage",
      "Tester l'outillage sur presse d'essai, mesurer les premières pièces et corriger les défauts d'aspect ou de cotes"
    ],
    "workEnvironment": [
      "Ateliers d'outillage de précision et de mécanique générale",
      "Environnement climatisé pour stabiliser la dilatation thermique des métaux"
    ],
    "typicalDay": [
      {
        "time": "08:00",
        "desc": "Lecture des plans d'un moule d'injection plastique de boîtier électronique automobile"
      },
      {
        "time": "09:30",
        "desc": "Réglage d'une machine d'électroérosion par enfonçage avec électrode en cuivre pour graver des nervures profondes"
      },
      {
        "time": "12:30",
        "desc": "Déjeuner à l'atelier d'outillage"
      },
      {
        "time": "14:00",
        "desc": "Ajustage méticuleux des plans de joint d'un moule pour éliminer toute bavure de matière"
      },
      {
        "time": "16:30",
        "desc": "Polissage manuel de finition d'une empreinte avec pâte diamantée"
      }
    ],
    "companyRole": "Artisan de précision indispensable, sans lequel l'industrie plastique, métallurgique et automobile ne pourrait mouler ni emboutir aucune pièce.",
    "skills": {
      "technical": [
        "Usinage de très haute précision (tolérances au micron)",
        "Électroérosion par fil et par enfonçage (EDM)",
        "Ajustage manuel, grattage et polissage miroir",
        "Lecture de plans complexes de moules à tiroirs et circuits thermiques"
      ],
      "human": [
        "Patience infinie et minutie d'artisan d'art",
        "Sensibilité tactile et dextérité manuelle exceptionnelle",
        "Capacité de concentration prolongée",
        "Fierté du travail bien fait"
      ],
      "tools": [
        "Machines d'électroérosion (AgieCharmilles)",
        "Tours et fraiseuses de précision",
        "Pâte diamantée et meules de polissage",
        "Micromètres d'extérieur et comparateurs au micron"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "CAP / Bac Pro",
          "title": "Bac Pro Technicien Outilleur ou Technicien d'Usinage",
          "desc": "Bases de l'usinage conventionnel et des machines-outils."
        },
        {
          "step": "Bac +2 (BTS)",
          "title": "BTS Conception des Processus de Réalisation de Produits (CPRP) option Mouliste",
          "desc": "Conception et fabrication avancée d'outillages complexes de plasturgie et d'emboutissage."
        }
      ],
      "schools": [
        {
          "name": "Lycées professionnels de la plasturgie et de la mécanique de précision — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Lycée Technique Maurice Delafosse (Dakar) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "CEDT Le G15 (Dakar) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "CQPM Outilleur mouliste",
        "Certifications d'usinage de précision CN"
      ],
      "france": [
        "Lycées professionnels de la plasturgie et de la mécanique de précision — France"
      ],
      "senegal": [
        "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal",
        "Lycée Technique Maurice Delafosse (Dakar) — Sénégal",
        "CEDT Le G15 (Dakar) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Plasturgie & Injection",
        "Automobile & Carrosserie",
        "Emballage métallique",
        "Aéronautique",
        "Connectique & Horlogerie"
      ],
      "employerTypes": [
        "Ateliers de fabrication de moules et d'outillages",
        "Grandes entreprises de plasturgie",
        "Équipementiers automobiles"
      ],
      "evolution": [
        "Chef d'atelier outillage",
        "Concepteur d'outillages en bureau d'études",
        "Expert technique en mise au point moules"
      ],
      "pros": [
        "Savoir-faire rare et très recherché sur le marché international",
        "Véritable statut d'expert respecté dans l'usine",
        "Forte satisfaction esthétique et technique"
      ],
      "cons": [
        "Rareté des postes dans certaines régions, concentration dans les bassins de plasturgie"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Ajuster manuellement deux cales d'acier à la lime et à la pierre d'abrasion pour obtenir un plan de contact étanche à la lumière sans jeu décelable.",
      "steps": [
        "Vérifier la planéité au marbre de contrôle avec du bleu de Prusse",
        "Gratter les points de contact hauts avec un grattoir triangulaire",
        "Mesurer au micromètre pour vérifier la cote au centième de millimètre"
      ],
      "freeResources": [
        "Vidéos de fabrication de moules d'injection plastique",
        "Manuel de l'outilleur (Éditions Dunod)"
      ]
    },
    "aiImpact": {
      "summary": "L'IA optimise les trajectoires d'usinage à grande vitesse (UGV) et le refroidissement conformé (conformal cooling) par fabrication additive, mais l'ajustage final reste 100% humain.",
      "positiveImpacts": [
        "Calcul automatisé des canaux de refroidissement optimaux dans les moules 3D",
        "Anticipation des déformations de retrait plastique"
      ],
      "risksAndChallenges": [
        "La machine ne peut remplacer le toucher et le regard de l'outilleur sur l'état de surface"
      ],
      "recommendedSkills": [
        "Maîtrise des outillages hybrides fabriqués par impression 3D métal"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, la demande de mécaniciens outilleurs est cruciale pour réparer et entretenir les moules de bouteilles et de bidons des usines d'eau minérale et d'huile, ainsi que pour les matrices d'emboutissage d'ustensiles métalliques.",
      "westAfricaOpportunities": "Secteur en plein essor avec la croissance des emballages plastiques recyclables en Afrique de l'Ouest.",
      "localChampions": [
        "SIMPA (Société Industrielle Moderne des Plastiques Africains)",
        "SENBUS Industries",
        "Plastique Sénégal"
      ]
    },
    "salary": "🇫🇷 France : 24 000 - 45 000 € brut/an • 🇸🇳 Sénégal : 250 000 - 800 000 FCFA net/mois",
    "connectedFamilies": [
      "arts-culture-patrimoine"
    ],
    "relatedJobs": [
      "tourneur-fraiseur-cn",
      "ajusteur-monteur-industriel",
      "ingenieur-mecanique"
    ],
    "sources": [
      {
        "organization": "L'Étudiant",
        "title": "Fiche métier : Outilleur",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie/outilleur.html",
        "type": "metier"
      },
      {
        "organization": "Onisep",
        "title": "Mécanicien / Mécanicienne outilleur",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/mecanicien-mecanicienne-outilleur-outilleuse",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Un moule d'injection plastique automobile pour un tableau de bord peut peser jusqu'à 30 tonnes d'acier spécial et coûter plus de 500 000 euros.",
      "pourquoi": "Il doit résister à des pressions de plusieurs centaines de bars et fonctionner à des cadences de plusieurs millions de cycles sans perdre un seul micron de précision.",
      "a_retenir": "L'outilleur façonne le cœur métallique qui donne naissance à tous les objets de série."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant & Onisep",
        "range": "24 000 - 45 000 € brut/an",
        "junior": "24 000 € brut/an",
        "senior": "45 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets constatés en ateliers de plasturgie et mécanique de précision",
        "range": "250 000 - 800 000 FCFA net/mois",
        "junior": "250 000 FCFA net/mois",
        "senior": "800 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Fabrique, ajuste, met au point et entretient les moules d'injection plastique, les matrices d'emboutissage et les outils de découpe de haute précision.",
    "level": "CAP / Bac Pro à Bac +2"
  },
  {
    "id": "ajusteur-monteur-industriel",
    "slug": "ajusteur-monteur-industriel",
    "title": "Ajusteur-Monteur Mécanique",
    "aliases": [
      "Monteur mécanique",
      "Mécanicien d'ajustage et d'assemblage",
      "Fitter-Assembler"
    ],
    "icon": "🔩",
    "familyId": "industrie-mecanique",
    "domain": "Mécanique & Usinage",
    "domainId": "mecanique-industrielle",
    "subdomain": "Assemblage mécanique & Mise au point d'ensembles",
    "shortDescription": "Assemble, ajuste, cale et met au point les pièces mécaniques élémentaires pour constituer des sous-ensembles et machines complètes fonctionnelles.",
    "longDescription": "L'ajusteur-monteur est le constructeur final de la mécanique. À partir des plans d'ensemble, il assemble les roulements, engrenages, vérins et transmissions. Lorsque les pièces usinées présentent de légers écarts, il les lime, les taraude ou les alèse pour assurer un glissement ou un emboîtement parfait sans point dur. Il contrôle le jeu fonctionnel et s'assure du parfait mouvement cinématique.",
    "missions": [
      "Lire et interpréter les plans d'ensemble mécaniques avec chaînes de cotes et nomenclatures",
      "Ajuster et retoucher les pièces métalliques à la main ou sur machines d'atelier (perçage, alésage, ébavurage)",
      "Monter et assembler les roulements à billes, joints, bagues, arbres et éléments de transmission",
      "Contrôler les jeux de fonctionnement, les faux-ronds et les alignements au comparateur à cadran",
      "Tester le fonctionnement à vide et en charge des mécanismes et valider les couples de serrage"
    ],
    "workEnvironment": [
      "Ateliers de montage de machines spéciales",
      "Lignes d'assemblage aéronautiques, ferroviaires et navales",
      "Environnement d'atelier mécanique propre"
    ],
    "typicalDay": [
      {
        "time": "08:00",
        "desc": "Lecture de la gamme de montage d'un train d'engrenages pour un réducteur de turbine"
      },
      {
        "time": "09:30",
        "desc": "Montage des roulements à la presse hydraulique et vérification du jeu axial au comparateur"
      },
      {
        "time": "12:30",
        "desc": "Déjeuner avec l'équipe de mécanique"
      },
      {
        "time": "14:00",
        "desc": "Calage des jeux d'engrenage au moyen de cales pelables de précision"
      },
      {
        "time": "16:30",
        "desc": "Serrage au couple contrôlé à la clé dynamométrique et freinage des vis au fil à freiner"
      }
    ],
    "companyRole": "Maillon d'assemblage final, transformant un tas de pièces métalliques isolées en une machine vivante et performante.",
    "skills": {
      "technical": [
        "Montage d'éléments mécaniques de haute précision",
        "Utilisation des outils de mesure d'atelier (comparateur, jauge de profondeur)",
        "Techniques d'assemblage thermique (frette à chaud, azote liquide)",
        "Lecture de plans d'ensemble complexes"
      ],
      "human": [
        "Dextérité manuelle remarquable",
        "Rigueur et respect scrupuleux des couples de serrage",
        "Patience et sens du détail",
        "Esprit d'équipe"
      ],
      "tools": [
        "Clés dynamométriques étalonnées",
        "Presses hydrauliques d'assemblage",
        "Comparateurs à cadran au centième",
        "Appareils de chauffe par induction de roulements"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "CAP / Bac Pro",
          "title": "CAP ou Bac Pro Technicien d'Usinage / Aéronautique option Structure",
          "desc": "Bases de l'ajustage manuel, de la métrologie et de l'assemblage."
        },
        {
          "step": "Bac +2 (BTS)",
          "title": "BTS Conception et Réalisation en Chaudronnerie ou CPRP",
          "desc": "Perfectionnement pour accéder à des postes de monteur d'ensembles complexes."
        }
      ],
      "schools": [
        {
          "name": "Lycées professionnels de l'aéronautique et de la mécanique — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Lycée Technique Maurice Delafosse (Dakar) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "CEDT Le G15 (Dakar) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "CQPM Ajusteur-monteur de systèmes mécaniques"
      ],
      "france": [
        "Lycées professionnels de l'aéronautique et de la mécanique — France"
      ],
      "senegal": [
        "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal",
        "Lycée Technique Maurice Delafosse (Dakar) — Sénégal",
        "CEDT Le G15 (Dakar) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Aéronautique (moteurs, trains d'atterrissage)",
        "Ferroviaire (bogies, moteurs de traction)",
        "Machines spéciales",
        "Armement & Défense"
      ],
      "employerTypes": [
        "Constructeurs aéronautiques (Airbus, Safran)",
        "Constructeurs ferroviaires (Alstom)",
        "PME de mécanique générale"
      ],
      "evolution": [
        "Chef d'équipe de montage",
        "Technicien d'essais mécaniques",
        "Responsable d'atelier de montage"
      ],
      "pros": [
        "Métier très gratifiant au cœur de réalisations techniques prestigieuses",
        "Postes très recherchés dans l'aéronautique et le ferroviaire",
        "Excellente ambiance d'atelier"
      ],
      "cons": [
        "Port de charges et postures parfois contraignantes lors du montage de grosses machines"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Assembler et régler un petit mécanisme à engrenages (ex: boîte de vitesses de modélisme ou micromécanique), mesurer le jeu d'entre-dents et éliminer les points durs.",
      "steps": [
        "Vérifier le libre pivotement de chaque arbre",
        "Mesurer le jeu fonctionnel à la jauge d'épaisseur",
        "Appliquer le frein filet adéquat sur la visserie"
      ],
      "freeResources": [
        "Vidéos de formation à l'ajustage mécanique",
        "Guides d'assemblage SKF pour roulements"
      ]
    },
    "aiImpact": {
      "summary": "L'IA et la réalité augmentée guident l'ajusteur-monteur en projetant directement les étapes de montage et les couples de serrage sur des lunettes connectées.",
      "positiveImpacts": [
        "Zéro oubli d'opération grâce au guidage pas-à-pas",
        "Enregistrement automatique des couples de serrage pour la traçabilité"
      ],
      "risksAndChallenges": [
        "La dextérité humaine et le ressenti tactile du serrage restent indispensables"
      ],
      "recommendedSkills": [
        "Utilisation d'outils de vissage connectés et de fiches de montage numériques"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, les ajusteurs-monteurs sont essentiels pour le montage et la maintenance des trains du TER de Dakar, des rames ferroviaires des ICS et des moteurs marins au Chantier Naval de Dakar.",
      "westAfricaOpportunities": "Forte demande dans la révision lourde des engins de travaux publics et des turbines hydroélectriques en Afrique de l'Ouest.",
      "localChampions": [
        "Dakar Marine",
        "SETER (TER de Dakar)",
        "Senter (Chemins de fer du Sénégal)",
        "SOCOCIM"
      ]
    },
    "salary": "🇫🇷 France : 23 000 - 38 000 € brut/an • 🇸🇳 Sénégal : 220 000 - 700 000 FCFA net/mois",
    "connectedFamilies": [
      "aeronautique-spatial",
      "transports-logistique"
    ],
    "relatedJobs": [
      "mecanicien-outilleur",
      "tourneur-fraiseur-cn",
      "electromecanicien"
    ],
    "sources": [
      {
        "organization": "Onisep",
        "title": "Ajusteur-monteur / Ajusteuse-monteuse",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/ajusteur-monteur-ajusteuse-monteuse",
        "type": "metier"
      },
      {
        "organization": "L'Étudiant",
        "title": "Métiers de l'industrie : Ajusteur-monteur",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie.html",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Dans l'assemblage d'un réacteur d'avion, certaines pièces sont assemblées avec un jeu inférieur à 5 microns grâce au calage manuel de l'ajusteur-monteur.",
      "pourquoi": "À 10 000 mètres d'altitude, une dilatation thermique non anticipée ou un serrage imprécis pourrait bloquer le moteur.",
      "a_retenir": "L'ajusteur-monteur met son sens du toucher au service de la sécurité de vol."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : Onisep & L'Étudiant",
        "range": "23 000 - 38 000 € brut/an",
        "junior": "23 000 € brut/an",
        "senior": "38 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets dans les ateliers ferroviaires, navals et miniers",
        "range": "220 000 - 700 000 FCFA net/mois",
        "junior": "220 000 FCFA net/mois",
        "senior": "700 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Assemble, ajuste, cale et met au point les pièces mécaniques élémentaires pour constituer des sous-ensembles et machines complètes fonctionnelles.",
    "level": "CAP / Bac Pro à Bac +2"
  },
  {
    "id": "tourneur-fraiseur-cn",
    "slug": "tourneur-fraiseur-cn",
    "title": "Tourneur-Fraiseur / Opérateur d'Usinage CN",
    "aliases": [
      "Opérateur sur machines-outils à commande numérique",
      "Usiner CN",
      "Machinist CNC"
    ],
    "icon": "⚙️",
    "familyId": "industrie-mecanique",
    "domain": "Mécanique & Usinage",
    "domainId": "mecanique-industrielle",
    "subdomain": "Usinage à commande numérique & FAO",
    "shortDescription": "Programme, règle et conduit des machines-outils à commande numérique (tours, centres d'usinage 5 axes) pour sculpter des pièces dans la masse de métal.",
    "longDescription": "Le tourneur-fraiseur CN enlève de la matière pour donner naissance à des pièces mécaniques de haute précision. À partir du programme informatique, il choisit les outils de coupe, monte les mors de serrage, jauge les outils au millième de millimètre, lance l'usinage à grande vitesse et contrôle scrupuleusement les cotes avec des instruments de métrologie.",
    "missions": [
      "Préparer et régler les centres d'usinage 3, 4 ou 5 axes et les tours à commande numérique",
      "Charger le programme CN (codes ISO, Heidenhain, Fanuc, Siemens Sinumerik) et vérifier les trajectoires à vide",
      "Monter et jauger les outils coupants (fraises, forets, plaquettes carbure) au banc de préréglage",
      "Brider les pièces brutes (blocs d'acier, d'aluminium, d'inconel, de titane) en garantissant l'isostatisme",
      "Contrôler la première pièce usinée sur machine tridimensionnelle (MMT) et corriger les jauges d'usure"
    ],
    "workEnvironment": [
      "Ateliers d'usinage de mécanique de précision",
      "Centres d'usinage modernes fermés et insonorisés",
      "Huile de coupe et copeaux métalliques"
    ],
    "typicalDay": [
      {
        "time": "08:00",
        "desc": "Prise de poste et vérification des niveaux de fluide d'arrosage et des bacs à copeaux"
      },
      {
        "time": "09:00",
        "desc": "Montage d'une série de 10 plaquettes carbure sur une tête de fraisage UGV"
      },
      {
        "time": "12:30",
        "desc": "Déjeuner avec les techniciens d'usinage"
      },
      {
        "time": "14:00",
        "desc": "Usinage d'un carter en alliage d'aluminium aéronautique sur centre 5 axes"
      },
      {
        "time": "16:00",
        "desc": "Contrôle des tolérances géométriques de concentricité au comparateur micrométrique"
      }
    ],
    "companyRole": "Artisan de la coupe du métal, transformant un bloc de métal brut en une pièce fonctionnelle d'une précision chirurgicale.",
    "skills": {
      "technical": [
        "Programmation et conduite de machines CN (codes G, Heidenhain, Mazatrol, Fanuc)",
        "Connaissance fine des vitesses de coupe et de l'avance selon les matériaux",
        "Métrologie d'atelier et contrôle tridimensionnel",
        "Maintenance préventive des machines-outils (lubrification, géométrie)"
      ],
      "human": [
        "Précision extrême et concentration soutenue",
        "Sens de l'écoute du bruit de coupe du métal",
        "Rigueur et respect des tolérances",
        "Autonomie sur machine"
      ],
      "tools": [
        "Centres d'usinage 5 axes (DMG Mori, Mazak, Haas)",
        "Bancs de préréglage d'outils (Zoller)",
        "Machines à mesurer tridimensionnelles (MMT)",
        "Instruments de métrologie (palpeurs, micromètres)"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "CAP / Bac Pro",
          "title": "Bac Pro Technicien d'Usinage (TU) ou Modélisation et Usinage",
          "desc": "Apprentissage intensif des machines conventionnelles et CN."
        },
        {
          "step": "Bac +2 (BTS)",
          "title": "BTS Conception des Processus de Réalisation de Produits (CPRP)",
          "desc": "Programmation FAO avancée 5 axes et optimisation de production."
        }
      ],
      "schools": [
        {
          "name": "Lycées professionnels industriels préparant au Bac Pro TU / BTS CPRP — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Lycée Technique Maurice Delafosse (Dakar) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "CEDT Le G15 (Dakar) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "CQPM Opérateur-régleur sur machines-outils à commande numérique"
      ],
      "france": [
        "Lycées professionnels industriels préparant au Bac Pro TU / BTS CPRP — France"
      ],
      "senegal": [
        "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal",
        "Lycée Technique Maurice Delafosse (Dakar) — Sénégal",
        "CEDT Le G15 (Dakar) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Aéronautique & Spatial",
        "Automobile & Compétition",
        "Médical (implants, prothèses)",
        "Armement & Défense",
        "Énergie"
      ],
      "employerTypes": [
        "PME de mécanique de précision",
        "Sous-traitants aéronautiques de rang 1",
        "Grands ateliers de maintenance industrielle"
      ],
      "evolution": [
        "Programmeur régleur CN",
        "Programmeur FAO en bureau des méthodes",
        "Chef d'atelier d'usinage"
      ],
      "pros": [
        "Métier moderne sur des machines high-tech à plusieurs centaines de milliers d'euros",
        "Forte pénurie de compétences garantissant de très belles opportunités",
        "Fierté de sortir une pièce parfaite du métal"
      ],
      "cons": [
        "Environnement d'atelier avec présence d'huiles de coupe, port permanent des EPI"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Utiliser un simulateur de tournage/fraisage CN gratuit (ex: CNC Simulator Pro ou Fusion 360 Manufacture) pour programmer et simuler l'usinage d'un arbre étagé en code G.",
      "steps": [
        "Écrire les blocs G00, G01, G02/G03 pour définir le profil",
        "Simuler l'enlèvement de matière pour éviter les collisions",
        "Vérifier les cotes obtenues sur le simulateur"
      ],
      "freeResources": [
        "Titans of CNC Academy (cours en ligne gratuits de renommée mondiale)",
        "Documentation Sandvik Coromant sur l'usinage"
      ]
    },
    "aiImpact": {
      "summary": "L'IA surveille l'effort de coupe et les micro-vibrations de la broche en temps réel pour adapter automatiquement l'avance et prévenir la casse d'outil avant qu'elle ne survienne.",
      "positiveImpacts": [
        "Optimisation dynamique des trajectoires d'ébauche",
        "Détection prédictive de l'usure de l'arête tranchante"
      ],
      "risksAndChallenges": [
        "L'usinage de matériaux exotiques (titane, inconel) exige toujours le ressenti acoustique et l'expérience du professionnel"
      ],
      "recommendedSkills": [
        "Interprétation des données de télémétrie de broche d'usinage connectée"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, les tourneurs-fraiseurs formés au CFPT Sénégal-Japon ou à Delafosse sont extrêmement recherchés pour l'usinage sur mesure de pièces de rechange de dragues marines, de concasseurs miniers et de pompes industrielles.",
      "westAfricaOpportunities": "Pénurie sévère d'opérateurs qualifiés sur machines CN dans toute l'Afrique de l'Ouest, assurant une valorisation salariale immédiate.",
      "localChampions": [
        "Chantier Naval de Dakar (Dakar Marine)",
        "SOCOCIM",
        "Ateliers Mécaniques du Sahel",
        "SENBUS Industries"
      ]
    },
    "salary": "🇫🇷 France : 24 000 - 42 000 € brut/an • 🇸🇳 Sénégal : 260 000 - 850 000 FCFA net/mois",
    "connectedFamilies": [
      "aeronautique-spatial",
      "transports-logistique"
    ],
    "relatedJobs": [
      "mecanicien-outilleur",
      "ajusteur-monteur-industriel",
      "technicien-methodes-industriel"
    ],
    "sources": [
      {
        "organization": "Onisep",
        "title": "Tourneur-fraiseur / Tourneuse-fraiseuse",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/tourneur-fraiseur-tourneuse-fraiseuse",
        "type": "metier"
      },
      {
        "organization": "L'Étudiant",
        "title": "Les métiers de l'industrie : Tourneur-fraiseur",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie.html",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Les broches de fraisage à grande vitesse (UGV) modernes tournent jusqu'à 40 000 tours par minute, projetant des copeaux métalliques à plus de 200 km/h dans l'enceinte fermée de la machine.",
      "pourquoi": "À cette vitesse de coupe phénoménale, la chaleur s'évacue directement dans le copeau sans chauffer la pièce, garantissant une précision micrométrique.",
      "a_retenir": "Le tourneur-fraiseur CN dompte la physique des métaux à des vitesses vertigineuses."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : Onisep & L'Étudiant",
        "range": "24 000 - 42 000 € brut/an",
        "junior": "24 000 € brut/an",
        "senior": "42 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets dans les ateliers de précision et maintenance navale à Dakar",
        "range": "260 000 - 850 000 FCFA net/mois",
        "junior": "260 000 FCFA net/mois",
        "senior": "850 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Programme, règle et conduit des machines-outils à commande numérique (tours, centres d'usinage 5 axes) pour sculpter des pièces dans la masse de métal.",
    "level": "CAP / Bac Pro à Bac +2"
  },
  {
    "id": "chaudronnier-industriel",
    "slug": "chaudronnier-industriel",
    "title": "Chaudronnier Industriel / Tôlier Formeur",
    "aliases": [
      "Chaudronnier",
      "Chaudronnier-tôlier",
      "Boilermaker / Sheet Metal Worker"
    ],
    "icon": "🔥",
    "familyId": "industrie-mecanique",
    "domain": "Mécanique & Usinage",
    "domainId": "mecanique-industrielle",
    "subdomain": "Chaudronnerie, Tôlerie & Tuyauterie industrielle",
    "shortDescription": "Découpe, trace, plie, roule et assemble les tôles et profilés métalliques pour fabriquer des cuves, des réservoirs, des coques de navires et des tuyauteries.",
    "longDescription": "Le chaudronnier façonne le métal en feuille. À partir de plaques d'acier, d'inox ou d'aluminium planes de quelques millimètres à plusieurs centimètres d'épaisseur, il développe les formes géométriques dans l'espace, découpe (laser, plasma), roule au laminoir pour créer des cylindres ou des cônes, plie sur presse plieuse et assemble les sous-ensembles chaudronnés pour les industries pétrolières, chimiques, alimentaires ou navales.",
    "missions": [
      "Lire les plans de chaudronnerie et tracer les développés géométriques des pièces sur tôle",
      "Découper les tôles par cisaillage, oxycoupage, découpe plasma ou laser CN",
      "Mettre en forme les éléments métalliques par roulage, cintrage, pliage et emboutissage",
      "Pré-assembler et pointer les éléments par soudage de pointage en contrôlant l'équerrage",
      "Vérifier la conformité dimensionnelle et géométrique de l'ouvrage fini avant le soudage final"
    ],
    "workEnvironment": [
      "Ateliers de chaudronnerie industrielle",
      "Chantiers navals et plateformes pétrolières",
      "Travail du métal lourd avec ponts roulants"
    ],
    "typicalDay": [
      {
        "time": "07:30",
        "desc": "Briefing sécurité et lecture des plans de fabrication d'une cuve de stockage sous pression"
      },
      {
        "time": "08:30",
        "desc": "Traçage et découpe plasma d'une virole métallique de 2 mètres de diamètre"
      },
      {
        "time": "12:00",
        "desc": "Déjeuner d'équipe"
      },
      {
        "time": "13:30",
        "desc": "Roulage de la tôle de 15 mm d'épaisseur sur une rouleuse à 3 rouleaux croisés"
      },
      {
        "time": "16:00",
        "desc": "Pointage de la virole avec le fond bombé et contrôle de circularité au gabarit"
      }
    ],
    "companyRole": "Bâtisseur des structures métalliques creuses et des appareils sous pression indispensables au transport et au stockage des fluides industriels.",
    "skills": {
      "technical": [
        "Traçage géométrique des développés de formes (cônes, cylindres, trémies)",
        "Formage des métaux (pliage CN, roulage, emboutissage)",
        "Découpe thermique et mécanique des tôles fortes",
        "Bases de soudage TIG / MIG-MAG pour le pointage"
      ],
      "human": [
        "Vision tridimensionnelle exceptionnelle pour imaginer un volume à partir d'une tôle plate",
        "Habileté manuelle et robustesse physique",
        "Rigueur et respect des tolérances géométriques",
        "Sens aigu de la sécurité lors des manutentions lourdes"
      ],
      "tools": [
        "Presses plieuses CN",
        "Rouleuses de tôles",
        "Machines de découpe plasma / laser",
        "Ponts roulants et palans de manutention"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "CAP / Bac Pro",
          "title": "Bac Pro Technicien en Chaudronnerie Industrielle (TCI)",
          "desc": "Apprentissage du traçage, du formage et des assemblages mécano-soudés."
        },
        {
          "step": "Bac +2 (BTS)",
          "title": "BTS Conception et Réalisation en Chaudronnerie Industrielle (CRCI)",
          "desc": "Calculs des appareils à pression (CODAP), devis et gestion de projets chaudronnés."
        }
      ],
      "schools": [
        {
          "name": "Lycées professionnels de chaudronnerie et métallurgie — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Lycée Technique Maurice Delafosse (Dakar) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "CEDT Le G15 (Dakar) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "CQPM Chaudronnier d'atelier",
        "Habilitation pontier élingueur"
      ],
      "france": [
        "Lycées professionnels de chaudronnerie et métallurgie — France"
      ],
      "senegal": [
        "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal",
        "Lycée Technique Maurice Delafosse (Dakar) — Sénégal",
        "CEDT Le G15 (Dakar) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Construction navale",
        "Pétrole & Gaz (cuves, tuyauteries offshore)",
        "Nucléaire & Énergie",
        "Agroalimentaire (cuves inox vinicoles/laitières)",
        "Aéronautique"
      ],
      "employerTypes": [
        "Chantiers navals",
        "PME de chaudronnerie et tuyauterie",
        "Groupes de chaudronnerie nucléaire et pétrochimique"
      ],
      "evolution": [
        "Chef d'atelier chaudronnerie",
        "Traceur de bureau d'études chaudronnées",
        "Contrôleur d'appareils sous pression"
      ],
      "pros": [
        "Métier ancestral hautement modernisé par le laser et le numérique",
        "Forte demande sur les grands chantiers industriels mondiaux",
        "Fierté d'ériger des ouvrages monumentaux"
      ],
      "cons": [
        "Bruit d'atelier, manutention de tôles lourdes nécessitant un respect absolu de la sécurité"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Tracer sur un carton le développé d'un cône tronqué ou d'une trémie de raccordement carré-rond, le découper et vérifier que la forme 3D obtenue correspond au plan.",
      "steps": [
        "Utiliser la méthode des génératrices pour projeter le cône",
        "Calculer les rayons de courbure du développé",
        "Plier et scotcher pour admirer la forme spatiale"
      ],
      "freeResources": [
        "Livres de traçage de chaudronnerie (Éditions Dunod)",
        "Tutoriels de chaudronnerie YouTube"
      ]
    },
    "aiImpact": {
      "summary": "Les logiciels d'imbrication (nesting) assistés par IA optimisent le placement des pièces sur les tôles pour réduire les chutes de métal à moins de 3%.",
      "positiveImpacts": [
        "Génération instantanée des développés 3D à partir de la CAO",
        "Programmation automatique des séquences de pliage pour éviter les collisions sur presse"
      ],
      "risksAndChallenges": [
        "La maîtrise physique du retour élastique de la tôle après pliage reste une expertise humaine irremplaçable"
      ],
      "recommendedSkills": [
        "Maîtrise des logiciels de dépliage et de FAO tôlerie (Alma, Radan, Lantek)"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, la chaudronnerie lourde est un métier d'excellence stratégique : fabrication des barges fluviales, maintenance des silos de ciment, des cuves de raffinage de la SAR et des installations navales de Dakar Marine.",
      "westAfricaOpportunities": "Forte recherche de chaudronniers qualifiés sur les chantiers miniers en Guinée et au Mali et pétroliers offshore au Sénégal.",
      "localChampions": [
        "Dakar Marine",
        "Société Africaine de Raffinage (SAR)",
        "SOCOCIM",
        "Ateliers Métalliques de Mbao"
      ]
    },
    "salary": "🇫🇷 France : 24 000 - 44 000 € brut/an • 🇸🇳 Sénégal : 260 000 - 850 000 FCFA net/mois",
    "connectedFamilies": [
      "naval-maritime",
      "energie-renouvelable",
      "btp-architecture"
    ],
    "relatedJobs": [
      "soudeur-industriel",
      "ajusteur-monteur-industriel",
      "tourneur-fraiseur-cn"
    ],
    "sources": [
      {
        "organization": "L'Étudiant",
        "title": "Fiche métier : Chaudronnier",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie.html",
        "type": "metier"
      },
      {
        "organization": "Onisep",
        "title": "Chaudronnier / Chaudronnière",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/chaudronnier-chaudronniere",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Un chaudronnier trace et assemble des réservoirs cryogéniques de fusée capables de contenir de l'hydrogène liquide à -253°C sous des pressions considérables sans la moindre fuite atomique.",
      "pourquoi": "La précision du traçage et de l'assemblage des tôles conditionne la survie des structures lors du décollage dans l'espace.",
      "a_retenir": "Le chaudronnier transforme des plaques planes en forteresses d'acier étanches."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant & Onisep",
        "range": "24 000 - 44 000 € brut/an",
        "junior": "24 000 € brut/an",
        "senior": "44 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets dans les chantiers navals et chaudronneries industrielles à Dakar",
        "range": "260 000 - 850 000 FCFA net/mois",
        "junior": "260 000 FCFA net/mois",
        "senior": "850 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Découpe, trace, plie, roule et assemble les tôles et profilés métalliques pour fabriquer des cuves, des réservoirs, des coques de navires et des tuyauteries.",
    "level": "CAP / Bac Pro à Bac +2"
  },
  {
    "id": "soudeur-industriel",
    "slug": "soudeur-industriel",
    "title": "Soudeur Industriel Qualifié / Tuyauteur",
    "aliases": [
      "Soudeur haute pression",
      "Soudeur TIG / MIG-MAG",
      "Industrial Welder"
    ],
    "icon": "⚡",
    "familyId": "industrie-mecanique",
    "domain": "Mécanique & Usinage",
    "domainId": "mecanique-industrielle",
    "subdomain": "Soudage industriel & Procédés d'assemblage thermique",
    "shortDescription": "Fusionne les métaux de manière indissociable selon des procédés de haute technicité (TIG, MIG-MAG, arc électrode) pour garantir des liaisons étanches et ultra-résistantes.",
    "longDescription": "Le soudeur industriel est l'artisan de la fusion métallique. Sur des tuyauteries sous haute pression, des réacteurs nucléaires, des coques de navires ou des pipelines sous-marins, il assemble les métaux selon des descriptifs de mode opératoire de soudage (DMOS) ultra-stricts. Ses cordons de soudure doivent passer avec succès des examens radiographiques et par ultrasons sans la moindre bulle, fissure ou inclusion.",
    "missions": [
      "Préparer les joints de soudure (chanfreinage, décapage, nettoyage) selon les spécifications techniques",
      "Régler les paramètres de soudage (intensité, tension, débit de gaz de protection argon/hélium, vitesse)",
      "Réaliser des cordons de soudure de haute qualité selon les procédés TIG (141), MIG-MAG (131/135) ou Électrode enrobée (111)",
      "Souder dans toutes les positions spatiales (à plat, en corniche, en montant, au plafond, en tuyauterie fixe)",
      "Contrôler visuellement l'aspect du cordon et préparer la pièce pour les contrôles non destructifs (ressuage, radio)"
    ],
    "workEnvironment": [
      "Chantiers navals, raffineries, centrales nucléaires, usines métallurgiques",
      "Milieux confinés, en hauteur ou en conditions climatiques rigoureuses",
      "Port d'une cagoule optoélectronique et de gants cuir protecteurs"
    ],
    "typicalDay": [
      {
        "time": "08:00",
        "desc": "Lecture du DMOS (procédé de soudage) et vérification du certificat matière des tubes en acier inoxydable"
      },
      {
        "time": "09:00",
        "desc": "Préchauffage de la zone à souder et inertage intérieur du tube avec de l'argon pour éviter l'oxydation (rochage)"
      },
      {
        "time": "12:00",
        "desc": "Déjeuner de chantier"
      },
      {
        "time": "13:30",
        "desc": "Soudage de la passe de pénétration en TIG à l'envers sur tuyauterie haute pression"
      },
      {
        "time": "16:00",
        "desc": "Passe de remplissage et finition, meulage léger et nettoyage du cordon"
      }
    ],
    "companyRole": "Garant ultime de la solidité et de l'étanchéité des assemblages métalliques soumis aux contraintes de pression et de température les plus sévères.",
    "skills": {
      "technical": [
        "Maîtrise experte des procédés de soudage TIG, MIG-MAG, Arc submergé",
        "Métallurgie du soudage (dilution, zone affectée thermiquement ZAT, préchauffage)",
        "Lecture de plans de tuyauterie isométrique et symboles de soudure",
        "Application stricte des DMOS et des normes de qualification (ISO 9606-1, ASME IX)"
      ],
      "human": [
        "Stabilité de la main et coordination œil-main exceptionnelle",
        "Patience et concentration ininterrompue",
        "Rigueur sans compromis sur la qualité",
        "Endurance physique et résistance à la chaleur"
      ],
      "tools": [
        "Postes à souder onduleurs TIG / MIG-MAG pulsés",
        "Torches de soudage refroidies à l'eau",
        "Cagoules à cristaux liquides ventilées",
        "Meuleuses et outillage de préparation de chanfrein"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "CAP / Bac Pro",
          "title": "Bac Pro Technicien en Chaudronnerie Industrielle ou CAP Réalisations Industrielles",
          "desc": "Apprentissage des bases du soudage multi-procédés et de la sécurité thermique."
        },
        {
          "step": "Mention Complémentaire / Titre Professionnel",
          "title": "Mention Complémentaire Soudage ou Titre Professionnel Soudeur TIG / Tuyauterie",
          "desc": "Passage des qualifications de soudeur officielles obligatoires (licences de soudure)."
        }
      ],
      "schools": [
        {
          "name": "Institut de Soudure (France - Centres de formation spécialisés) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "Lycées professionnels industriels et CFA métallurgie — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Lycée Technique Maurice Delafosse (Dakar) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "Qualifications de Soudeur (QS) selon ISO 9606-1 ou ASME Section IX (renouvelables tous les 2 ans)"
      ],
      "france": [
        "Institut de Soudure (France - Centres de formation spécialisés) — France",
        "Lycées professionnels industriels et CFA métallurgie — France"
      ],
      "senegal": [
        "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal",
        "Lycée Technique Maurice Delafosse (Dakar) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Pétrole, Gaz & Offshore",
        "Nucléaire & Centrales thermiques",
        "Construction navale",
        "Chaudronnerie & Tuyauterie industrielle",
        "Aéronautique"
      ],
      "employerTypes": [
        "Entreprises de tuyauterie industrielle",
        "Grands groupes d'énergie (EDF, Technip, Saipem)",
        "Chantiers navals et sous-traitants pétroliers"
      ],
      "evolution": [
        "Soudeur d'élite qualifié nucléaire / offshore",
        "Contrôleur en soudage (IWT / IWS)",
        "Coordinateur en soudage / Inspecteur en soudage"
      ],
      "pros": [
        "Métier en très forte pénurie internationale avec des rémunérations très élevées pour les profils qualifiés",
        "Possibilité de travailler dans le monde entier (offshore, chantiers internationaux)",
        "Reconnaissance directe de l'excellence du geste"
      ],
      "cons": [
        "Exposition aux fumées de soudage (nécessitant une ventilation efficace), positions de travail parfois inconfortables"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un cordon d'assemblage en angle sur deux tôles d'acier doux et effectuer un test d'écrasement à la presse pour vérifier que la soudure ne casse pas.",
      "steps": [
        "Nettoyer et chanfreiner les bords",
        "Régler l'intensité adéquate (environ 40A par millimètre d'épaisseur)",
        "Maintenir un angle de torche constant de 70° et une vitesse régulière"
      ],
      "freeResources": [
        "Vidéos pédagogiques de l'Institut de Soudure",
        "Fiches pratiques de sécurité de l'INRS sur le soudage"
      ]
    },
    "aiImpact": {
      "summary": "Le soudage robotisé et le soudage laser assisté par caméra IA prennent en charge les soudures répétitives de grande série, mais les soudures complexes sur site et les tuyauteries d'accès difficile restent l'apanage des soudeurs humains hautement qualifiés.",
      "positiveImpacts": [
        "Suivi de joint laser en temps réel sur les robots de soudage",
        "Inspection radiographique automatisée par deep learning"
      ],
      "risksAndChallenges": [
        "Nécessité de former les soudeurs à la supervision et à la programmation de robots de soudage"
      ],
      "recommendedSkills": [
        "Conduite de robots de soudage orbital et automates de soudage"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, avec l'exploitation des gisements de gaz de Grand Tortue Ahmeyim (GTA) et de pétrole de Sangomar, les soudeurs qualifiés certifiés ASME / ISO 9606 sont les profils techniques les plus recherchés et les mieux rémunérés du pays.",
      "westAfricaOpportunities": "Chantiers majeurs de pipelines, d'usines de liquéfaction de gaz et de maintenance navale dans toute la sous-région.",
      "localChampions": [
        "Dakar Marine",
        "Petrosen",
        "Eiffage Sénégal (projets maritimes)",
        "SAR (Société Africaine de Raffinage)"
      ]
    },
    "salary": "🇫🇷 France : 25 000 - 50 000 € brut/an • 🇸🇳 Sénégal : 300 000 - 1 400 000 FCFA net/mois",
    "connectedFamilies": [
      "naval-maritime",
      "energie-renouvelable",
      "mines-geosciences"
    ],
    "relatedJobs": [
      "chaudronnier-industriel",
      "ajusteur-monteur-industriel",
      "technicien-controle-cnd"
    ],
    "sources": [
      {
        "organization": "Onisep",
        "title": "Soudeur / Soudeuse",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/soudeur-soudeuse",
        "type": "metier"
      },
      {
        "organization": "L'Étudiant",
        "title": "Les métiers de l'industrie : Soudeur",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie.html",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Sur un pipeline sous-marin ou une tuyauterie de centrale nucléaire, 100% des soudures sont radiographiées aux rayons X ou testées aux ultrasons : le moindre défaut d'un demi-millimètre entraîne le meulage et la réfection complète de la soudure.",
      "pourquoi": "À 200 bars de pression, une minuscule micro-fissure invisible à l'œil nu provoquerait une rupture explosive catastrophique.",
      "a_retenir": "Le soudeur qualifié détient entre ses mains la sécurité absolue des installations industrielles."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant & Onisep (jusqu'à 70k€ pour soudeurs nucléaires/offshore)",
        "range": "25 000 - 50 000 € brut/an",
        "junior": "25 000 € brut/an",
        "senior": "50 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets constatés pour soudeurs certifiés sur projets pétro-gaziers et navals",
        "range": "300 000 - 1 400 000 FCFA net/mois",
        "junior": "300 000 FCFA net/mois",
        "senior": "1 400 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Fusionne les métaux de manière indissociable selon des procédés de haute technicité (TIG, MIG-MAG, arc électrode) pour garantir des liaisons étanches et ultra-résistantes.",
    "level": "CAP / Bac Pro à Bac +2"
  },
  {
    "id": "electromecanicien",
    "slug": "electromecanicien",
    "title": "Électromécanicien de Maintenance",
    "aliases": [
      "Technicien électromécanicien",
      "Mécanicien-électricien industriel",
      "Electromechanical Technician"
    ],
    "icon": "⚡",
    "familyId": "industrie-mecanique",
    "domain": "Maintenance Industrielle",
    "domainId": "maintenance-industrielle",
    "subdomain": "Maintenance électromécanique & Dépannage multi-technique",
    "shortDescription": "Diagnostique et répare les défaillances combinant mécanique, électricité, pneumatique et hydraulique sur les parcs machines industriels.",
    "longDescription": "L'électromécanicien est le dépanneur universel de l'usine. Véritable couteau suisse technique, il intervient dès qu'une machine s'arrête. Il ouvre les armoires électriques, mesure les tensions, remplace les moteurs grillés, change les roulements usés, répare les fuites d'huile sous pression sur les vérins hydrauliques et recâble les capteurs pour relancer la production sans délai.",
    "missions": [
      "Localiser l'origine d'une panne complexe en combinant diagnostic électrique, mécanique et pneumatique",
      "Remplacer ou réparer les moteurs électriques, réducteurs, pompes hydrauliques et électrovannes",
      "Raccorder et paramétrer les variateurs de vitesse et les capteurs industriels (cellules optiques, fins de course)",
      "Réaliser la maintenance préventive planifiée (graissage, contrôle des charbons, vérification des isolements)",
      "Renseigner les comptes-rendus d'intervention détaillés dans le logiciel de GMAO (Gestion de Maintenance Assistée par Ordinateur)"
    ],
    "workEnvironment": [
      "Ateliers de fabrication de tous secteurs",
      "Usines en fonctionnement continu avec travail posté ou astreintes",
      "Atelier de maintenance équipé de tours, perceuses et bancs de test"
    ],
    "typicalDay": [
      {
        "time": "07:45",
        "desc": "Prise de consignes de l'équipe précédente et consultation des alertes sur le terminal GMAO"
      },
      {
        "time": "08:30",
        "desc": "Intervention d'urgence sur un pont roulant bloqué : remplacement d'un contacteur de puissance défaillant"
      },
      {
        "time": "11:30",
        "desc": "Révision périodique d'un groupe hydraulique : vidange d'huile, changement des filtres et mesure de pression"
      },
      {
        "time": "13:00",
        "desc": "Déjeuner avec les techniciens de maintenance"
      },
      {
        "time": "14:30",
        "desc": "Alignement laser d'un moteur électrique et de sa pompe centrifuge pour éliminer les vibrations"
      },
      {
        "time": "16:30",
        "desc": "Saisie des pièces de rechange consommées pour réapprovisionnement du magasin"
      }
    ],
    "companyRole": "Garant de la disponibilité opérationnelle immédiate des machines, évitant les arrêts de production très coûteux.",
    "skills": {
      "technical": [
        "Électrotechnique et habilitations électriques industrielles (B2V, BR, BC)",
        "Mécanique d'entretien, guidages et transmissions (courroies, chaînes, pignons)",
        "Hydraulique industrielle et circuits pneumatiques",
        "Lecture rapide de schémas électriques multifilaires et hydrauliques"
      ],
      "human": [
        "Sang-froid et esprit d'investigation méthodique",
        "Polyvalence et débrouillardise technique",
        "Réactivité et disponibilité",
        "Sens aigu des règles de consignation et de sécurité"
      ],
      "tools": [
        "Multimètre, pince ampèremétrique et mégohmmètre",
        "Mallette d'outillage électromécanique isolé 1000V",
        "Centrale d'alignement laser de poulies et d'arbres",
        "Logiciel GMAO (Carl Source, Coswin, SAP PM)"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "Bac Pro",
          "title": "Bac Pro Maintenance des Systèmes de Production Connectés (MSPC) ou MELEC",
          "desc": "Apprentissage complet du câblage, du dépannage mécanique et de la sécurité électrique."
        },
        {
          "step": "Bac +2 (BTS)",
          "title": "BTS Maintenance des Systèmes (MS) option Systèmes de Production ou BTS Électrotechnique",
          "desc": "Expertise en diagnostic d'installations automatisées et amélioration de fiabilité."
        }
      ],
      "schools": [
        {
          "name": "Lycées professionnels industriels et CFA de France (BTS MS) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Lycée Technique Maurice Delafosse (Dakar) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Supérieur d'Enseignement Professionnel (ISEP Diamniadio / Thiès) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "Habilitations électriques obligatoires (BR, B2V, BC)",
        "Certificats CACES nacelle / chariot élévateur"
      ],
      "france": [
        "Lycées professionnels industriels et CFA de France (BTS MS) — France"
      ],
      "senegal": [
        "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal",
        "Lycée Technique Maurice Delafosse (Dakar) — Sénégal",
        "Institut Supérieur d'Enseignement Professionnel (ISEP Diamniadio / Thiès) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Agroalimentaire",
        "Automobile",
        "Cimenteries & Mines",
        "Pharmacie",
        "Transports & Aéroports"
      ],
      "employerTypes": [
        "Entreprises industrielles manufacturières",
        "Sociétés de prestations de maintenance multi-techniques (Spie, Dalkia)",
        "Exploitants d'infrastructures de transport"
      ],
      "evolution": [
        "Chef d'équipe de maintenance",
        "Technicien méthodes de maintenance",
        "Responsable de maintenance industrielle"
      ],
      "pros": [
        "Métier très dynamique et varié : aucune journée ne se ressemble",
        "Plein emploi garanti partout dans le monde",
        "Forte reconnaissance de la part des équipes d'atelier"
      ],
      "cons": [
        "Astreintes de nuit et de week-end possibles",
        "Interventions en situation d'urgence sous la pression de la reprise de production"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Démonter, nettoyer, remplacer les roulements et tester électriquement l'isolement d'un moteur asynchrone triphasé d'atelier.",
      "steps": [
        "Consigner électriquement le moteur et vérifier l'absence de tension (VAT)",
        "Démonter les flasques à l'extracteur et remplacer les roulements",
        "Mesurer la résistance des enroulements au multimètre et l'isolement à 500V"
      ],
      "freeResources": [
        "Guide de maintenance industrielle Schneider Electric",
        "Tutoriels électromécanique et schémas industriels"
      ]
    },
    "aiImpact": {
      "summary": "L'IA assiste l'électromécanicien par le diagnostic guidé sur tablette et l'analyse prédictive des signatures de courant moteur pour détecter les défauts avant la panne.",
      "positiveImpacts": [
        "Localisation instantanée du composant défaillant sur schéma interactif",
        "Accès en temps réel à l'historique de toutes les pannes similaires de l'usine"
      ],
      "risksAndChallenges": [
        "La manipulation physique des outils et le remplacement des pièces lourdes demeurent 100% humains"
      ],
      "recommendedSkills": [
        "Utilisation de caméras acoustiques et de tablettes de diagnostic connectées"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, l'électromécanicien est la cheville ouvrière des usines de la presqu'île de Dakar et des régions (cimenteries de Thiès, usines d'engrais des ICS, moulins de Dakar, brasseries de la SOBOA), où la robustesse de la maintenance garantit la rentabilité des installations.",
      "westAfricaOpportunities": "Pénurie critique d'électromécaniciens qualifiés dans le secteur minier (or au Sénégal Oriental, bauxite en Guinée).",
      "localChampions": [
        "Industries Chimiques du Sénégal (ICS)",
        "SOCOCIM Industries",
        "Senelec",
        "Dakar Marine"
      ]
    },
    "salary": "🇫🇷 France : 24 000 - 42 000 € brut/an • 🇸🇳 Sénégal : 250 000 - 850 000 FCFA net/mois",
    "connectedFamilies": [
      "energie-renouvelable",
      "mines-geosciences"
    ],
    "relatedJobs": [
      "technicien-maintenance-industrielle",
      "automaticien-industriel",
      "technicien-electronicien-industriel"
    ],
    "sources": [
      {
        "organization": "L'Étudiant",
        "title": "Fiche métier : Électromécanicien",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie/electromecanicien.html",
        "type": "metier"
      },
      {
        "organization": "Onisep",
        "title": "Électromécanicien / Électromécanicienne",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/electromecanicien-electromecanicienne",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Dans l'industrie lourde (chimie, ciment, raffinage), une heure d'arrêt imprévu d'une ligne peut coûter entre 20 000 et 100 000 euros. La rapidité d'intervention de l'électromécanicien évite des pertes colossales.",
      "pourquoi": "En maîtrisant à la fois le courant électrique qui alimente et la mécanique qui tourne, il intervient sans attendre d'autres spécialistes.",
      "a_retenir": "L'électromécanicien est le médecin urgentiste du parc machine industriel."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant & primes d'astreintes",
        "range": "24 000 - 42 000 € brut/an",
        "junior": "24 000 € brut/an",
        "senior": "42 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets constatés dans les cimenteries, mines et grandes usines",
        "range": "250 000 - 850 000 FCFA net/mois",
        "junior": "250 000 FCFA net/mois",
        "senior": "850 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Diagnostique et répare les défaillances combinant mécanique, électricité, pneumatique et hydraulique sur les parcs machines industriels.",
    "level": "CAP / Bac Pro à Bac +2"
  },
  {
    "id": "technicien-maintenance-industrielle",
    "slug": "technicien-maintenance-industrielle",
    "title": "Technicien de Maintenance Industrielle",
    "aliases": [
      "Technicien de maintenance polyvalent",
      "Agent de maintenance industrielle",
      "Industrial Maintenance Technician"
    ],
    "icon": "🔧",
    "familyId": "industrie-mecanique",
    "domain": "Maintenance Industrielle",
    "domainId": "maintenance-industrielle",
    "subdomain": "Maintenance préventive, corrective & prédictive",
    "shortDescription": "Entretient, dépanne, surveille et modernise les équipements industriels pour garantir leur fonctionnement optimal et prévenir les pannes.",
    "longDescription": "Le technicien de maintenance industrielle veille à la santé globale de l'outil de production. Il ne se contente pas de réparer les pannes urgentes : il met en place des plans de maintenance préventive rigoureux, analyse les données vibratoires et thermographiques pour prédire les défaillances, et propose des améliorations techniques pour fiabiliser les machines et prolonger leur durée de vie.",
    "missions": [
      "Assurer la maintenance préventive systématique et conditionnelle de l'ensemble du parc machines",
      "Intervenir en urgence lors des pannes pour remettre la ligne en service dans les meilleurs délais",
      "Analyser les causes racines des pannes récurrentes au moyen de méthodes structurées (Ishikawa, 5 Pourquoi)",
      "Participer à l'installation, au raccordement et à la mise en service de nouveaux équipements industriels",
      "Gérer le stock de pièces détachées stratégiques et commander les composants d'usure courante"
    ],
    "workEnvironment": [
      "Usines de fabrication, ateliers de conditionnement, entrepôts logistiques automatisés",
      "Port permanent des équipements de protection individuelle (chaussures de sécurité, lunettes, casque anti-bruit)"
    ],
    "typicalDay": [
      {
        "time": "08:00",
        "desc": "Tournée d'inspection préventive : contrôle des températures de paliers à la caméra thermique"
      },
      {
        "time": "09:30",
        "desc": "Remplacement préventif des courroies crantées et des filtres à air sur une ligne de conditionnement"
      },
      {
        "time": "12:30",
        "desc": "Déjeuner avec les équipes d'atelier"
      },
      {
        "time": "14:00",
        "desc": "Dépannage d'urgence d'une encartonneuse automatique (remplacement d'un vérin pneumatique)"
      },
      {
        "time": "16:30",
        "desc": "Mise à jour des fiches d'historique de vie des machines sur le logiciel de GMAO"
      }
    ],
    "companyRole": "Pilier de la fiabilité opérationnelle, garantissant que l'outil de travail des ouvriers reste sûr, précis et performant.",
    "skills": {
      "technical": [
        "Diagnostic méthodique de défaillances multi-techniques",
        "Mécanique générale, pneumatique, hydraulique et électricité industrielle",
        "Analyse vibratoire et thermographie infrarouge de base",
        "Maîtrise des logiciels de GMAO"
      ],
      "human": [
        "Rigueur et méthode d'analyse",
        "Sens aigu du service et de l'entraide d'équipe",
        "Autonomie et esprit d'initiative",
        "Prise en compte permanente de la sécurité des personnes"
      ],
      "tools": [
        "Caméra thermique infrarouge (Fluke)",
        "Collecteur de données vibratoires",
        "Outillage à main d'atelier de maintenance",
        "Logiciel de GMAO (SAP PM, Maximo, Infor)"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "Bac Pro",
          "title": "Bac Pro Maintenance des Systèmes de Production Connectés (MSPC)",
          "desc": "Bases pratiques de l'entretien et du dépannage industriel."
        },
        {
          "step": "Bac +2 (BTS / BUT)",
          "title": "BTS Maintenance des Systèmes (MS) ou BUT Génie Industriel et Maintenance (GIM)",
          "desc": "Stratégie de maintenance, fiabilisation et gestion des coûts de maintenance."
        }
      ],
      "schools": [
        {
          "name": "Lycées polyvalents et IUT préparant au BTS MS / BUT GIM — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Lycée Technique Maurice Delafosse (Dakar) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "ISEP de Thiès / Diamniadio — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "Certifications AFNOR en maintenance prédictive",
        "Habilitations électriques industrielles (B2V, BR, BC)"
      ],
      "france": [
        "Lycées polyvalents et IUT préparant au BTS MS / BUT GIM — France"
      ],
      "senegal": [
        "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal",
        "Lycée Technique Maurice Delafosse (Dakar) — Sénégal",
        "ISEP de Thiès / Diamniadio — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Tous secteurs industriels (Agroalimentaire, Automobile, Métallurgie, Chimie, Pharmacie, Énergie)",
        "Logistique & E-commerce (entrepôts automatisés)"
      ],
      "employerTypes": [
        "Usines de production de toutes tailles",
        "Sociétés de maintenance industrielle externalisée",
        "Grands centres de distribution logistique"
      ],
      "evolution": [
        "Technicien méthodes de maintenance",
        "Responsable d'équipe de maintenance",
        "Responsable de maintenance de site"
      ],
      "pros": [
        "Métier indispensable dans 100% des entreprises industrielles",
        "Emploi garanti tout au long de la carrière",
        "Grande diversité des interventions"
      ],
      "cons": [
        "Interventions possibles dans le bruit, la chaleur ou des espaces exigus"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Établir le plan de maintenance préventive d'un équipement mécanique réel (ex: tondeuse, compresseur d'air) avec périodicité, points de contrôle et pièces à remplacer.",
      "steps": [
        "Lister les organes d'usure (filtres, huile, courroies, bougies)",
        "Déterminer les fréquences recommandées par le constructeur",
        "Créer une fiche de suivi d'entretien périodique"
      ],
      "freeResources": [
        "Guide pratique de la maintenance industrielle (Dunod)",
        "Fiches de l'Association Française des Ingénieurs et Responsables de Maintenance (AFIM)"
      ]
    },
    "aiImpact": {
      "summary": "L'IA transforme la maintenance préventive en maintenance prédictive (PdM) grâce à l'analyse en continu des capteurs IoT mesurant les vibrations et le frottement des roulements.",
      "positiveImpacts": [
        "Arrêt de la machine programmé avant la casse catastrophique",
        "Réduction des stocks de pièces détachées grâce au réapprovisionnement juste-à-temps"
      ],
      "risksAndChallenges": [
        "Nécessité de savoir interpréter les algorithmes prédictifs pour éviter les faux positifs"
      ],
      "recommendedSkills": [
        "Compréhension des capteurs IoT industriels et des plateformes de maintenance prédictive"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, la maintenance industrielle est le premier gisement d'emplois techniques qualifiés, indispensable à la survie des équipements importés soumis à la chaleur, à la poussière sahélienne et à la corrosion marine sur la côte.",
      "westAfricaOpportunities": "Forte demande dans les usines d'égrenage de coton, les centrales solaires et thermiques, et les installations minières de toute la sous-région.",
      "localChampions": [
        "Compagnie Sucrière Sénégalaise (Richard-Toll)",
        "SOCOCIM",
        "Grands Moulins de Dakar",
        "Kirène"
      ]
    },
    "salary": "🇫🇷 France : 25 000 - 43 000 € brut/an • 🇸🇳 Sénégal : 260 000 - 850 000 FCFA net/mois",
    "connectedFamilies": [
      "energie-renouvelable",
      "transports-logistique"
    ],
    "relatedJobs": [
      "electromecanicien",
      "automaticien-industriel",
      "directeur-site-industriel"
    ],
    "sources": [
      {
        "organization": "L'Étudiant",
        "title": "Fiche métier : Technicien de maintenance",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie/technicien-en-maintenance.html",
        "type": "metier"
      },
      {
        "organization": "Onisep",
        "title": "Technicien / Technicienne de maintenance industrielle",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/technicien-technicienne-de-maintenance-industrielle",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Dans l'industrie moderne, la maintenance ne représente pas un coût mais une source de profit : chaque euro intelligemment investi dans la maintenance préventive fait économiser 4 euros de réparations d'urgence et de pertes d'exploitation.",
      "pourquoi": "Un roulement à 50 euros changé à temps évite la destruction d'un arbre moteur à 15 000 euros et trois jours d'arrêt de production.",
      "a_retenir": "Le technicien de maintenance préserve le capital productif de l'entreprise."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant & Onisep",
        "range": "25 000 - 43 000 € brut/an",
        "junior": "25 000 € brut/an",
        "senior": "43 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets constatés en usines manufacturières et mines à Dakar/régions",
        "range": "260 000 - 850 000 FCFA net/mois",
        "junior": "260 000 FCFA net/mois",
        "senior": "850 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Entretient, dépanne, surveille et modernise les équipements industriels pour garantir leur fonctionnement optimal et prévenir les pannes.",
    "level": "Bac +2 à Bac +3 (BTS / BUT / Licence pro)"
  },
  {
    "id": "technicien-electronicien-industriel",
    "slug": "technicien-electronicien-industriel",
    "title": "Technicien Électronicien / Systèmes Embarqués",
    "aliases": [
      "Électronicien industriel",
      "Technicien de tests électroniques",
      "Electronics Technician"
    ],
    "icon": "⚡",
    "familyId": "industrie-mecanique",
    "domain": "Électrotechnique & Électronique",
    "domainId": "electrotechnique-electronique-indus",
    "subdomain": "Électronique industrielle & Cartes de commande",
    "shortDescription": "Conçoit, assemble, teste, diagnostique et dépanne les cartes électroniques, capteurs et systèmes embarqués pilotant les machines industrielles.",
    "longDescription": "Le technicien électronicien intervient sur les circuits imprimés et les composants qui commandent les équipements industriels. À l'aide d'oscilloscopes, de fers à souder de précision et de bancs de test automatisés, il traque les composants CMS grillés (microcontrôleurs, diodes, condensateurs), reprogramme les mémoires flash et fiabilise les cartes de puissance des variateurs et alimentations à découpage.",
    "missions": [
      "Lire les schémas électroniques de cartes de commande, d'alimentation et de traitement du signal",
      "Diagnostiquer les pannes au composant sur banc de test à l'oscilloscope et au multimètre de précision",
      "Dessouder et ressouder les composants montés en surface (CMS) à l'air chaud et au microscope optique",
      "Flasher et tester les firmwares de microcontrôleurs embarqués (ARM, PIC, STM32)",
      "Vérifier la compatibilité électromagnétique (CEM) et le blindage des cartes face aux parasites d'atelier"
    ],
    "workEnvironment": [
      "Laboratoires d'électronique industrielle",
      "Salles blanches et ateliers de réparation protégés contre les décharges électrostatiques (ESD)",
      "Bancs d'essais électroniques"
    ],
    "typicalDay": [
      {
        "time": "08:30",
        "desc": "Prise en charge d'une carte de variateur de vitesse tombée en panne sur une extrudeuse plastique"
      },
      {
        "time": "09:30",
        "desc": "Mesure des signaux PWM à l'oscilloscope numérique pour vérifier le pilotage des transistors IGBT"
      },
      {
        "time": "12:30",
        "desc": "Déjeuner avec les techniciens d'automatisme"
      },
      {
        "time": "14:00",
        "desc": "Remplacement sous binoculaire d'un circuit intégré CMS défaillant avec station à air chaud"
      },
      {
        "time": "16:30",
        "desc": "Test en charge sur banc d'essai et validation du bon fonctionnement avant réinstallation"
      }
    ],
    "companyRole": "Chirurgien des circuits électroniques de l'usine, sauvant des cartes industrielles coûteuses souvent introuvables sur le marché.",
    "skills": {
      "technical": [
        "Électronique analogique, numérique et de puissance",
        "Mesure et diagnostic de signaux haute fréquence à l'oscilloscope",
        "Brasage et débrasage manuel de composants CMS de haute précision",
        "Conformité et protection contre les décharges électrostatiques (ESD)"
      ],
      "human": [
        "Minutie chirurgicale et patience extrême",
        "Esprit d'analyse logique et de déduction",
        "Capacité à lire des datasheets techniques en anglais",
        "Rigueur de manipulation des composants fragiles"
      ],
      "tools": [
        "Oscilloscope numérique 4 voies (Tektronix / Keysight)",
        "Station de soudage et dessoudage à air chaud régulée",
        "Microscope binoculaire de précision",
        "Générateur de fonctions et alimentations de laboratoire"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "Bac Pro",
          "title": "Bac Pro Systèmes Numériques (SN) option Réseaux et Équipements Électroniques",
          "desc": "Bases de l'électronique et de l'informatique appliquée."
        },
        {
          "step": "Bac +2 (BTS / BUT)",
          "title": "BTS Systèmes Numériques option Électronique et Communications ou BUT GEII",
          "desc": "Conception de cartes, programmation microcontrôleur et électronique de puissance."
        }
      ],
      "schools": [
        {
          "name": "Lycées polyvalents préparant au BTS SN / IUT de France — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Polytechnique de Dakar (ESP) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "CEDT Le G15 (Dakar) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "Certifications internationales IPC (IPC-A-610 pour l'acceptabilité des assemblages électroniques)"
      ],
      "france": [
        "Lycées polyvalents préparant au BTS SN / IUT de France — France"
      ],
      "senegal": [
        "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal",
        "École Supérieure Polytechnique de Dakar (ESP) — Sénégal",
        "CEDT Le G15 (Dakar) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Aéronautique & Défense (avionique)",
        "Automobile & Véhicules électriques",
        "Électronique médicale",
        "Télécoms & IoT industriel",
        "Ferroviaire"
      ],
      "employerTypes": [
        "Entreprises de fabrication électronique (EMS)",
        "Laboratoires de maintenance électronique spécialisée",
        "Grands constructeurs de matériel industriel"
      ],
      "evolution": [
        "Spécialiste CEM et certification",
        "Projeteur en CAO électronique (routage de circuits imprimés Altium)",
        "Responsable de laboratoire électronique"
      ],
      "pros": [
        "Métier passionnant pour les amateurs de technologie et de micro-composants",
        "Excellente insertion professionnelle dans l'aéronautique et le ferroviaire",
        "Environnement de travail propre et tempéré"
      ],
      "cons": [
        "Travail prolongé sous microscope pouvant fatiguer la vue"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Concevoir le schéma et router un petit circuit imprimé sous KiCad (ex: variateur de vitesse pour moteur continu), le faire fabriquer et souder les composants CMS.",
      "steps": [
        "Dessiner le schéma logique avec les symboles des composants",
        "Placer les composants et tracer les pistes de cuivre sous KiCad",
        "Souder les composants à la pâte à braser et vérifier les continuités"
      ],
      "freeResources": [
        "KiCad EDA Open Source",
        "Chaînes YouTube d'électronique (EEVblog, Jipihorn)",
        "Datasheets de composants Texas Instruments / STMicroelectronics"
      ]
    },
    "aiImpact": {
      "summary": "L'IA accélère le routage automatique des pistes de circuits imprimés multicouches et l'inspection optique automatisée (AOI) pour détecter les micro-fissures de soudure.",
      "positiveImpacts": [
        "Routage assisté par IA respectant automatiquement les contraintes thermiques",
        "Diagnostic d'anomalies de signal à l'oscilloscope assisté par IA"
      ],
      "risksAndChallenges": [
        "La dextérité de soudure manuelle sur composants ultra-miniatures reste une compétence d'expert"
      ],
      "recommendedSkills": [
        "Programmation de microcontrôleurs embarqués avec frameworks IA (TinyML)"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, la maintenance de cartes électroniques industrielles est une activité vitale et extrêmement rentable, évitant aux usines dakaroises de coûteuses importations de pièces détachées avec plusieurs semaines d'immobilisation douanière.",
      "westAfricaOpportunities": "Développement des laboratoires de rétro-ingénierie et de réparation de cartes de régulation pour les parcs solaires et les télécoms.",
      "localChampions": [
        "Sonatel (Orange Sénégal)",
        "Senelec",
        "CFPT Sénégal-Japon",
        "Ateliers d'électronique industrielle de Sandiara"
      ]
    },
    "salary": "🇫🇷 France : 24 000 - 42 000 € brut/an • 🇸🇳 Sénégal : 250 000 - 850 000 FCFA net/mois",
    "connectedFamilies": [
      "numerique-ia",
      "energie-renouvelable"
    ],
    "relatedJobs": [
      "electromecanicien",
      "automaticien-industriel",
      "roboticien-industriel"
    ],
    "sources": [
      {
        "organization": "L'Étudiant",
        "title": "Fiche métier : Technicien électronicien",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie/electronicien.html",
        "type": "metier"
      },
      {
        "organization": "Onisep",
        "title": "Électronicien / Électronicienne",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/electronicien-electronicienne",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Un composant électronique moderne monté en surface (CMS boîtier 0201) mesure à peine 0,6 millimètre de long sur 0,3 millimètre de large, soit la taille d'un grain de sel.",
      "pourquoi": "Seuls des techniciens électroniciens entraînés, travaillant sous binoculaire avec des fers microscopiques, sont capables de souder ou remplacer ces puces manuellement.",
      "a_retenir": "L'électronicien manipule l'infiniment petit pour faire fonctionner les géants de l'industrie."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant & Onisep",
        "range": "24 000 - 42 000 € brut/an",
        "junior": "24 000 € brut/an",
        "senior": "42 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets dans les laboratoires de télécoms et maintenance électronique",
        "range": "250 000 - 850 000 FCFA net/mois",
        "junior": "250 000 FCFA net/mois",
        "senior": "850 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Conçoit, assemble, teste, diagnostique et dépanne les cartes électroniques, capteurs et systèmes embarqués pilotant les machines industrielles.",
    "level": "Bac +2 à Bac +3 (BTS / BUT / Licence pro)"
  },
  {
    "id": "technicien-controle-cnd",
    "slug": "technicien-controle-cnd",
    "title": "Technicien en Contrôle Non Destructif (CND)",
    "aliases": [
      "Contrôleur CND",
      "Technicien END (Essais Non Destructifs)",
      "NDT Inspector"
    ],
    "icon": "🔬",
    "familyId": "industrie-mecanique",
    "domain": "Contrôle, Inspection & Métrologie",
    "domainId": "controle-inspection-metrologie",
    "subdomain": "Contrôle non destructif (Radiographie, Ultrasons, Ressuage)",
    "shortDescription": "Examine la santé interne des pièces métalliques, tuyauteries et soudures sans les altérer, grâce à la radiographie, aux ultrasons, au ressuage et à la magnétoscopie.",
    "longDescription": "Le technicien en contrôle non destructif (CND / END) est le radiologue des matériaux industriels. Sur un réacteur nucléaire, une aile d'avion, une coque de navire ou un pipeline de gaz, il recherche les micro-fissures internes invisibles qui pourraient provoquer une catastrophe. Grâce aux rayons X, aux ondes ultrasonores ou à des liquides fluorescents, il garantit la sécurité absolue des structures avant leur mise en service.",
    "missions": [
      "Choisir et mettre en œuvre la méthode de contrôle CND appropriée (Ultrasons UT, Radiographie RT, Ressuage PT, Magnétoscopie MT, Courants de Foucault ET)",
      "Étalonner les appareils de mesure sur des cales étalons de référence certifiées",
      "Scanner les cordons de soudure et les pièces forgées ou moulées pour cartographier les défauts internes",
      "Interpréter les échos ultrasonores ou les clichés radiographiques pour classifier les anomalies (fissures, porosités, inclusions)",
      "Rédiger le rapport officiel de conformité selon les normes internationales (ISO 9712, ASME, RCC-M)"
    ],
    "workEnvironment": [
      "Centrales nucléaires, raffineries, chantiers navals, ateliers aéronautiques",
      "Laboratoires d'inspection technique",
      "Travail parfois en hauteur sur échafaudages ou cordes"
    ],
    "typicalDay": [
      {
        "time": "08:30",
        "desc": "Étalonnage de l'appareil à ultrasons multi-éléments (Phased Array) sur bloc de référence en acier"
      },
      {
        "time": "10:00",
        "desc": "Contrôle par ultrasons d'une série de 15 soudures bout à bout sur une tuyauterie de vapeur surchauffée"
      },
      {
        "time": "12:30",
        "desc": "Déjeuner de chantier avec les coordinateurs soudage"
      },
      {
        "time": "13:30",
        "desc": "Contrôle par ressuage fluorescent sous lumière noire (UV) d'un carter d'hélice de navire"
      },
      {
        "time": "16:30",
        "desc": "Rédaction du procès-verbal de conformité CND et notification des deux zones nécessitant un meulage-reprise"
      }
    ],
    "companyRole": "Sentinelle de la sécurité industrielle, autorisant ou refusant la mise en service d'équipements vitaux selon des critères normatifs stricts.",
    "skills": {
      "technical": [
        "Maîtrise d'au moins 2 méthodes CND certifiées COFREND (Ultrasons, Radiographie, Ressuage, Magnétoscopie)",
        "Physique des ondes, radioprotection et métallurgie des défauts",
        "Lecture experte de clichés radiographiques industriels et A-scan/B-scan ultrasonores",
        "Normes et critères d'acceptabilité (ISO 5817, ISO 11666)"
      ],
      "human": [
        "Intégrité professionnelle et rigueur morale absolue (ne jamais céder aux pressions de délais)",
        "Sens de l'observation aigu et minutie",
        "Sens des responsabilités et respect des consignes de sécurité",
        "Aisance rédactionnelle pour les rapports formels"
      ],
      "tools": [
        "Appareils de contrôle par ultrasons multi-éléments (Olympus Omniscan)",
        "Générateurs de rayons X et sources gammagraphiques",
        "Lampes à ultraviolets (lumière de Wood) et pénétrants fluorescents",
        "Bancs de magnétoscopie"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "Bac +2 (BTS / BUT)",
          "title": "BTS Contrôle Industriel et Régulation Automatique (CIRA), BTS Métallurgie ou BUT Mesures Physiques",
          "desc": "Fondements de physique, optique, matériaux et métrologie."
        },
        {
          "step": "Certification professionnelle COFREND",
          "title": "Certifications COFREND Niveau 1, Niveau 2 (selon ISO 9712)",
          "desc": "Passage obligatoire des examens de certification reconnus internationalement par méthode."
        }
      ],
      "schools": [
        {
          "name": "Institut de Soudure (Centres de formation CND de France) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "IUT Mesures Physiques de France (Grenoble, Orsay, Le Mans) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "École Supérieure Polytechnique de Dakar (ESP) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Supérieur d'Enseignement Professionnel (ISEP Diamniadio) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "Certifications COFREND / ASNT Niveau 2 dans plusieurs méthodes (UT, RT, PT, MT)",
        "Certificat CAMARI (aptitude à la manipulation des appareils de radiologie industrielle)"
      ],
      "france": [
        "Institut de Soudure (Centres de formation CND de France) — France",
        "IUT Mesures Physiques de France (Grenoble, Orsay, Le Mans) — France"
      ],
      "senegal": [
        "École Supérieure Polytechnique de Dakar (ESP) — Sénégal",
        "Institut Supérieur d'Enseignement Professionnel (ISEP Diamniadio) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Nucléaire (EDF, Framatome, Orano)",
        "Pétrole, Gaz & Pétrochimie (TotalEnergies, Technip)",
        "Aéronautique & Spatial (Safran, Airbus)",
        "Construction navale & BTP métallique"
      ],
      "employerTypes": [
        "Organismes de contrôle et d'inspection tierce partie (Bureau Veritas, Apave, Dekra, SGS)",
        "Services contrôle qualité de grands industriels",
        "Laboratoires d'essais"
      ],
      "evolution": [
        "Inspecteur CND Niveau 3 COFREND (expertise et validation des procédures)",
        "Responsable du laboratoire de contrôle qualité",
        "Auditeur international en intégrité mécanique"
      ],
      "pros": [
        "Métier à très haute responsabilité et fierté technique",
        "Rémunérations très attractives avec primes de certifications",
        "Mobilité internationale fréquente"
      ],
      "cons": [
        "Déplacements réguliers sur sites industriels, contraintes de radioprotection lors des tirs radio de nuit"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser un test de ressuage simple à la bombe sur une soudure d'atelier pour révéler des micro-porosités débouchantes invisibles à l'œil nu.",
      "steps": [
        "Nettoyer et dégraisser parfaitement la surface",
        "Appliquer le pénétrant rouge et laisser agir 15 minutes",
        "Essuyer délicatement et pulvériser le révélateur blanc : la fissure apparaît en rouge vif"
      ],
      "freeResources": [
        "Guide pratique du ressuage et de la magnétoscopie (Institut de Soudure)",
        "Vidéos de la COFREND sur les métiers du CND"
      ]
    },
    "aiImpact": {
      "summary": "L'IA assiste puissamment l'analyse d'images radiographiques et ultrasonores (Phased Array) en surlignant automatiquement les zones suspectes pour aider l'inspecteur.",
      "positiveImpacts": [
        "Détection automatique des défauts de soudure par réseaux de neurones convolutionnels",
        "Reconstruction tomographique 3D ultra-rapide des défauts internes"
      ],
      "risksAndChallenges": [
        "L'inspecteur certifié Niveau 2/3 reste juridiquement le seul responsable de la signature du rapport"
      ],
      "recommendedSkills": [
        "Interprétation assistée par IA sur logiciels de contrôle tomographique"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, les techniciens CND certifiés sont le sésame obligatoire pour certifier les plateformes de gaz de GTA, les tuyauteries de la SAR, les citernes d'hydrocarbures de Bargny et les coques des navires entrant au port de Dakar.",
      "westAfricaOpportunities": "Recherche intense d'inspecteurs CND certifiés ISO 9712 dans tout le golfe de Guinée et l'espace UEMOA.",
      "localChampions": [
        "Bureau Veritas Sénégal",
        "SGS Sénégal",
        "Dakar Marine",
        "Petrosen"
      ]
    },
    "salary": "🇫🇷 France : 27 000 - 55 000 € brut/an • 🇸🇳 Sénégal : 350 000 - 1 500 000 FCFA net/mois",
    "connectedFamilies": [
      "energie-renouvelable",
      "mines-geosciences",
      "naval-maritime"
    ],
    "relatedJobs": [
      "soudeur-industriel",
      "technicien-inspection-conformite",
      "ingenieur-qualite-industriel"
    ],
    "sources": [
      {
        "organization": "L'Étudiant",
        "title": "Fiche métier : Technicien contrôle non destructif",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie/technicien-ou-technicienne-controle-non-destructif.html",
        "type": "metier"
      },
      {
        "organization": "Onisep",
        "title": "Technicien / Technicienne en contrôle non destructif",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/technicien-technicienne-en-controle-non-destructif",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Un technicien CND utilisant la technique du ressuage est capable de déceler une fissure débouchante d'un dixième de micron d'ouverture, soit 1 000 fois plus fine qu'un cheveu humain.",
      "pourquoi": "Grâce aux forces de capillarité et aux pigments fluorescents excités par des rayons ultraviolets, le défaut invisible devient éclatant sous lumière noire.",
      "a_retenir": "Le technicien CND voit ce qui est caché pour protéger des milliers de vies."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant & baromètres COFREND (primes substantielles pour Niveaux 2)",
        "range": "27 000 - 55 000 € brut/an",
        "junior": "27 000 € brut/an",
        "senior": "55 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets constatés pour inspecteurs certifiés sur projets pétro-gaziers",
        "range": "350 000 - 1 500 000 FCFA net/mois",
        "junior": "350 000 FCFA net/mois",
        "senior": "1 500 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Examine la santé interne des pièces métalliques, tuyauteries et soudures sans les altérer, grâce à la radiographie, aux ultrasons, au ressuage et à la magnétoscopie.",
    "level": "Bac +2 à Bac +3 (BTS / BUT / Licence pro)"
  },
  {
    "id": "technicien-inspection-conformite",
    "slug": "technicien-inspection-conformite",
    "title": "Technicien Inspection & Conformité Industrielle",
    "aliases": [
      "Inspecteur de conformité industrielle",
      "Technicien d'inspection réglementaire",
      "Compliance Inspector"
    ],
    "icon": "📏",
    "familyId": "industrie-mecanique",
    "domain": "Contrôle, Inspection & Métrologie",
    "domainId": "controle-inspection-metrologie",
    "subdomain": "Inspection réglementaire & Métrologie légale",
    "shortDescription": "Inspecte les installations, équipements sous pression et machines industrielles pour vérifier leur conformité aux réglementations et normes de sécurité.",
    "longDescription": "Le technicien d'inspection et de conformité veille au respect strict des normes de sécurité, environnementales et techniques imposées par la législation. Qu'il travaille pour un organisme de contrôle agréé ou au sein d'une usine, il ausculte les chaudières, compresseurs, appareils de levage, installations électriques et dispositifs d'arrêt d'urgence pour prévenir les accidents du travail et les sinistres industriels.",
    "missions": [
      "Réaliser les vérifications réglementaires périodiques d'appareils de levage, d'équipements sous pression et d'installations électriques",
      "Examiner les dossiers techniques de conformité machine (marquage CE, notices d'instructions, schémas de sécurité)",
      "Tester physiquement le déclenchement des soupapes de sûreté, arrêts d'urgence et capteurs de sécurité",
      "Rédiger les rapports d'inspection officiels en consignant avec précision les réserves et non-conformités constatées",
      "Conseiller les exploitants d'usines sur les actions correctives obligatoires pour obtenir la levée des réserves"
    ],
    "workEnvironment": [
      "Déplacements permanents sur tous types de sites industriels",
      "Usines chimiques, chantiers BTP, entrepôts logistiques, chaufferies",
      "Travail en autonomie avec tablette de saisie d'inspection"
    ],
    "typicalDay": [
      {
        "time": "08:30",
        "desc": "Arrivée sur le site d'une usine agroalimentaire pour l'inspection annuelle de 3 chaudières à vapeur"
      },
      {
        "time": "09:30",
        "desc": "Vérification visuelle interne de la cuve sous pression et tarage des soupapes de sécurité"
      },
      {
        "time": "12:00",
        "desc": "Déjeuner de travail avec le responsable maintenance du site"
      },
      {
        "time": "13:30",
        "desc": "Contrôle réglementaire des ponts roulants de l'atelier d'embouteillage et épreuve de charge"
      },
      {
        "time": "16:00",
        "desc": "Débriefing de fin de visite avec la direction d'usine et transmission du rapport provisoire"
      }
    ],
    "companyRole": "Tiers de confiance indépendant garantissant que les équipements industriels ne présentent aucun danger pour les salariés et l'environnement.",
    "skills": {
      "technical": [
        "Réglementation des équipements sous pression (ESP) et des appareils de levage",
        "Normes de sécurité des machines (Directive Machines 2006/42/CE, NF C 15-100)",
        "Électrotechnique, hydraulique et mécanique générale",
        "Méthodologie d'audit et d'inspection technique"
      ],
      "human": [
        "Intégrité morale et impartialité totale",
        "Pédagogie et diplomatie pour faire accepter les mises en conformité",
        "Rigueur d'observation et esprit critique",
        "Sens du relationnel client"
      ],
      "tools": [
        "Tablette d'inspection avec logiciel réglementaire dédié",
        "Manomètres étalonnés et bancs de tarage de soupapes",
        "Télémètres laser et sonomètres",
        "Contrôleurs d'installations électriques multifonctions"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "Bac +2 (BTS / BUT)",
          "title": "BTS Maintenance des Systèmes, BTS Électrotechnique ou BUT Mesures Physiques",
          "desc": "Socle technique pluridisciplinaire en électromécanique et instrumentation."
        },
        {
          "step": "Formation & Habilitations d'Organisme",
          "title": "Parcours d'habilitation interne d'inspecteur en organisme agréé (Apave, Bureau Veritas, Dekra)",
          "desc": "Formation intensive au droit réglementaire de la sécurité et compagnonnage sur le terrain."
        }
      ],
      "schools": [
        {
          "name": "IUT et Lycées techniques de France (BTS MS / Électrotechnique) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "Centres de formation Apave / Bureau Veritas / Dekra — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "École Supérieure Polytechnique de Dakar (ESP) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Supérieur d'Enseignement Professionnel (ISEP Diamniadio) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "Agréments ministériels d'inspecteur en appareils à pression et levage",
        "Habilitations électriques inspecteur"
      ],
      "france": [
        "IUT et Lycées techniques de France (BTS MS / Électrotechnique) — France",
        "Centres de formation Apave / Bureau Veritas / Dekra — France"
      ],
      "senegal": [
        "École Supérieure Polytechnique de Dakar (ESP) — Sénégal",
        "Institut Supérieur d'Enseignement Professionnel (ISEP Diamniadio) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Organismes de contrôle et d'inspection (TIC : Testing, Inspection, Certification)",
        "Tous secteurs industriels",
        "Collectivités et établissements recevant du public (ERP)"
      ],
      "employerTypes": [
        "Bureaux d'inspection agréés (Bureau Veritas, Apave, Socotec, Dekra)",
        "Directions sécurité de grands groupes industriels"
      ],
      "evolution": [
        "Inspecteur référent technique régional",
        "Responsable d'agence d'inspection",
        "Auditeur de certification ISO 9001 / ISO 45001"
      ],
      "pros": [
        "Autonomie quotidienne complète dans la gestion de ses tournées",
        "Grande variété des sites industriels visités chaque semaine",
        "Métier valorisant qui protège directement les travailleurs"
      ],
      "cons": [
        "Nombreux kilomètres sur la route chaque jour, rigueur administrative stricte"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser l'audit de conformité de sécurité simplifié d'un petit équipement d'atelier (ex: perceuse à colonne) par rapport à la Directive Machines.",
      "steps": [
        "Vérifier la présence d'un bouton d'arrêt d'urgence coupant l'alimentation",
        "Contrôler la protection mobile interverrouillée sur le mandrin",
        "Rédiger la fiche de constat avec préconisations de mise aux normes"
      ],
      "freeResources": [
        "Guide de prévention de l'INRS sur la sécurité des machines",
        "Directive Européenne Machines 2006/42/CE commentée"
      ]
    },
    "aiImpact": {
      "summary": "L'IA assiste l'inspecteur via la reconnaissance d'images sur tablette pour vérifier instantanément la présence des pictogrammes et la validité des plaques constructeurs.",
      "positiveImpacts": [
        "Génération automatique des rapports de visite avec renvoi direct aux articles du code du travail",
        "Suivi prédictif des échéances de requalification des équipements"
      ],
      "risksAndChallenges": [
        "La responsabilité juridique de la signature et de la validation reste 100% humaine"
      ],
      "recommendedSkills": [
        "Maîtrise des applications d'inspection digitale sur le terrain"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, la Direction de la Protection Civile et les bureaux d'inspection technique agréés jouent un rôle capital dans le contrôle des dépôts pétroliers de Mbao, des réservoirs d'ammoniac des ICS et des grues portuaires du Port Autonome de Dakar.",
      "westAfricaOpportunities": "Forte demande d'inspecteurs de conformité dans l'ensemble de l'espace UEMOA pour sécuriser les nouvelles installations industrielles.",
      "localChampions": [
        "Bureau Veritas Sénégal",
        "Apave Sahel",
        "SGS Sénégal",
        "Socotec Sénégal"
      ]
    },
    "salary": "🇫🇷 France : 26 000 - 46 000 € brut/an • 🇸🇳 Sénégal : 300 000 - 1 100 000 FCFA net/mois",
    "connectedFamilies": [
      "droit-management",
      "btp-architecture"
    ],
    "relatedJobs": [
      "technicien-controle-cnd",
      "responsable-qse-industriel",
      "ingenieur-qualite-industriel"
    ],
    "sources": [
      {
        "organization": "L'Étudiant",
        "title": "Fiche métier : Technicien inspection conformité",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie/technicien-ne-inspection-conformite.html",
        "type": "metier"
      },
      {
        "organization": "Onisep",
        "title": "Technicien / Technicienne de contrôle et d'inspection",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/technicien-technicienne-de-controle-industriel",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "En Europe et en Afrique, chaque ascenseur, chaque chaudière industrielle et chaque pont roulant doit légalement faire l'objet d'une visite d'inspection de conformité au moins une fois par an par un organisme agréé indépendant.",
      "pourquoi": "Ce cadre réglementaire strict a permis de diviser par plus de 15 le nombre d'accidents industriels majeurs au cours des cinquante dernières années.",
      "a_retenir": "L'inspecteur de conformité est le gardien de la légalité et de la sécurité dans l'usine."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant & grilles des bureaux de contrôle (véhicule de fonction inclus)",
        "range": "26 000 - 46 000 € brut/an",
        "junior": "26 000 € brut/an",
        "senior": "46 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets dans les filiales des bureaux de contrôle internationaux à Dakar",
        "range": "300 000 - 1 100 000 FCFA net/mois",
        "junior": "300 000 FCFA net/mois",
        "senior": "1 100 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Inspecte les installations, équipements sous pression et machines industrielles pour vérifier leur conformité aux réglementations et normes de sécurité.",
    "level": "Bac +2 à Bac +3 (BTS / BUT / Licence pro)"
  },
  {
    "id": "responsable-qse-industriel",
    "slug": "responsable-qse-industriel",
    "title": "Responsable QSE (Qualité, Sécurité, Environnement)",
    "aliases": [
      "Responsable QHSE",
      "Ingénieur HSE",
      "QSE Manager"
    ],
    "icon": "✅",
    "familyId": "industrie-mecanique",
    "domain": "Qualité, Sécurité & Environnement",
    "domainId": "qse-securite-environnement-indus",
    "subdomain": "Management intégré QSE & Prévention des risques",
    "shortDescription": "Pilote la politique globale de qualité des produits, de sécurité et santé des salariés, et de conformité environnementale de l'usine.",
    "longDescription": "Le responsable QSE est le garant éthique et managérial de l'usine. À la croisée des exigences clients et des réglementations environnementales, il déploie les systèmes de management intégrés (ISO 9001, ISO 14001, ISO 45001). Il analyse les accidents du travail, chasse les situations dangereuses, anime les causeries sécurité avec les ouvriers et veille au traitement rigoureux des déchets et des rejets industriels.",
    "missions": [
      "Concevoir, animer et faire certifier le système de management intégré QSE (ISO 9001, 14001, 45001)",
      "Élaborer le Document Unique d'Évaluation des Risques Professionnels (DUERP) et piloter le plan de prévention",
      "Mener les enquêtes d'accidents du travail au moyen de la méthode de l'arbre des causes",
      "Superviser les rejets industriels (eaux usées, cheminées, poussières) et la gestion des déchets dangereux",
      "Animer des sessions de sensibilisation à la sécurité pour les opérateurs et accueillir les entreprises extérieures"
    ],
    "workEnvironment": [
      "Sites industriels de toutes tailles",
      "Alternance permanente entre réunions de direction et tournées de terrain en atelier",
      "Relations étroites avec l'inspection du travail et la médecine du travail"
    ],
    "typicalDay": [
      {
        "time": "08:30",
        "desc": "Tournée sécurité en atelier ('Safety Walk') pour observer les postes de travail et le port des EPI"
      },
      {
        "time": "10:00",
        "desc": "Animation d'une réunion de résolution de problème suite à un presqu'accident sur un chariot élévateur"
      },
      {
        "time": "12:30",
        "desc": "Déjeuner avec le directeur d'usine et le responsable des ressources humaines"
      },
      {
        "time": "14:00",
        "desc": "Audit interne de conformité environnementale ISO 14001 sur la rétention des cuves de produits chimiques"
      },
      {
        "time": "16:30",
        "desc": "Mise à jour des indicateurs de fréquence et de gravité des accidents sur le tableau de bord QSE"
      }
    ],
    "companyRole": "Protecteur des hommes et de la planète dans l'industrie, garantissant l'acceptabilité sociale et la pérennité légale de l'usine.",
    "skills": {
      "technical": [
        "Normes internationales de management (ISO 9001, ISO 14001, ISO 45001, ISO 50001)",
        "Droit du travail, droit de l'environnement et réglementation des sites classés (ICPE)",
        "Méthodes d'analyse des risques (arbre des causes, AMDEC, HAZOP)",
        "Techniques d'audit qualité et sécurité"
      ],
      "human": [
        "Pédagogie et capacité à faire évoluer les comportements sans être autoritaire",
        "Écoute active et empathie vis-à-vis des opérateurs de terrain",
        "Fermeté absolue sur les règles vitales de sécurité",
        "Aisance en communication orale et écrite"
      ],
      "tools": [
        "Logiciels QSE intégrés (QHSE Alert, Cority, Enablon)",
        "Arbre des causes et méthode Ishikawa",
        "Appareils de mesure d'ambiance (sonomètre, luxmètre, dosimètre)"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "Bac +3",
          "title": "Licence Professionnelle Métiers de la Qualité, de la Sécurité et de l'Environnement",
          "desc": "Réglementation QSE, ergonomie et animation de terrain."
        },
        {
          "step": "Bac +5 (Master / Diplôme d'Ingénieur)",
          "title": "Master QSE / Risques Industriels ou Diplôme d'Ingénieur spécialité Prévention des Risques",
          "desc": "Management stratégique des crises, responsabilité sociétale (RSE) et direction QSE."
        }
      ],
      "schools": [
        {
          "name": "Université de Technologie de Troyes (UTT - Mastère Sécurité & Risques) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "INSA Rouen / Polytech Grenoble (Filières Prévention des Risques) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "Institut des Sciences de l'Environnement (ISE - UCAD Dakar) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Supérieure Polytechnique de Dakar (ESP - Master QHSE) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "Certifications officielles Auditeur Lead IRCA (ISO 9001 / 14001 / 45001)"
      ],
      "france": [
        "Université de Technologie de Troyes (UTT - Mastère Sécurité & Risques) — France",
        "INSA Rouen / Polytech Grenoble (Filières Prévention des Risques) — France"
      ],
      "senegal": [
        "Institut des Sciences de l'Environnement (ISE - UCAD Dakar) — Sénégal",
        "École Supérieure Polytechnique de Dakar (ESP - Master QHSE) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Chimie & Pétrochimie (usines SEVESO)",
        "Agroalimentaire & Pharmacie",
        "BTP & Travaux Publics",
        "Automobile & Aéronautique",
        "Métallurgie"
      ],
      "employerTypes": [
        "Grandes entreprises industrielles",
        "PME et ETI manufacturières",
        "Cabinets d'audit et de conseil en développement durable"
      ],
      "evolution": [
        "Directeur QSE de groupe",
        "Directeur RSE (Responsabilité Sociétale des Entreprises)",
        "Directeur des opérations industrielles"
      ],
      "pros": [
        "Métier à forte dimension humaine qui sauve concrètement des vies",
        "Rôle transverse en lien direct avec la direction générale",
        "Forte employabilité liée aux impératifs climatiques et ESG"
      ],
      "cons": [
        "Gestion parfois complexe des tensions entre exigences de cadence de production et sécurité"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Analyser un poste de travail manuel et rédiger son évaluation des risques en identifiant 5 dangers potentiels et en proposant des mesures de prévention hiérarchisées.",
      "steps": [
        "Distinguer le danger (la source) du risque (le contact avec l'humain)",
        "Évaluer la gravité et la fréquence d'exposition",
        "Appliquer les 9 principes généraux de prévention de l'INRS"
      ],
      "freeResources": [
        "Publications et brochures gratuites de l'INRS",
        "Plateforme ISO.org (découverte des normes 9001/14001/45001)"
      ]
    },
    "aiImpact": {
      "summary": "L'IA analyse les flux vidéo des caméras d'atelier pour détecter automatiquement les zones d'encombrement des issues de secours ou le non-port du casque en temps réel.",
      "positiveImpacts": [
        "Cartographie dynamique en temps réel des zones à risque dans l'usine",
        "Génération assistée de formulaires de causeries sécurité thématiques"
      ],
      "risksAndChallenges": [
        "Veiller au strict respect de la vie privée des travailleurs face à la surveillance par caméra"
      ],
      "recommendedSkills": [
        "Gouvernance des données éthiques et conformité RGPD en milieu industriel"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, le responsable QSE est indispensable pour gérer les études d'impact environnemental des grands projets industriels (cimenteries de Pout et Bargny, dépôts miniers de phosphate de Taïba, terminaux pétro-gaziers du port de Dakar).",
      "westAfricaOpportunities": "Recrutements massifs de cadres QSE bilingues (français/anglais) pour les multinationales de l'énergie et des mines en Afrique de l'Ouest.",
      "localChampions": [
        "Industries Chimiques du Sénégal (ICS)",
        "SOCOCIM",
        "TotalEnergies Sénégal",
        "Compagnie Sucrière Sénégalaise"
      ]
    },
    "salary": "🇫🇷 France : 35 000 - 68 000 € brut/an • 🇸🇳 Sénégal : 550 000 - 2 100 000 FCFA net/mois",
    "connectedFamilies": [
      "environnement-developpement-durable",
      "sante-biomedical",
      "droit-management"
    ],
    "relatedJobs": [
      "ingenieur-qualite-industriel",
      "technicien-inspection-conformite",
      "directeur-site-industriel"
    ],
    "sources": [
      {
        "organization": "L'Étudiant",
        "title": "Fiche métier : Responsable QSE",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie/responsable-qualite-1.html",
        "type": "metier"
      },
      {
        "organization": "Onisep",
        "title": "Responsable QSE (qualité, sécurité, environnement)",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/responsable-qse-qualite-securite-environnement",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "D'après la célèbre pyramide de Bird, pour 1 accident mortel en milieu industriel, on dénombre statistiquement 10 accidents graves, 30 accidents légers, et plus de 600 situations dangereuses ou presqu'accidents précurseurs.",
      "pourquoi": "En signalant et traitant chaque presqu'accident du quotidien, le responsable QSE désamorce la chaîne causale avant que l'accident grave ne se produise.",
      "a_retenir": "Le responsable QSE fait de la sécurité une culture partagée par tous."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant",
        "range": "35 000 - 68 000 € brut/an",
        "junior": "35 000 € brut/an",
        "senior": "68 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets constatés pour responsables QHSE dans les industries lourdes",
        "range": "550 000 - 2 100 000 FCFA net/mois",
        "junior": "550 000 FCFA net/mois",
        "senior": "2 100 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Pilote la politique globale de qualité des produits, de sécurité et santé des salariés, et de conformité environnementale de l'usine.",
    "level": "Bac +5 (Diplôme d'Ingénieur / Master)"
  },
  {
    "id": "ingenieur-qualite-industriel",
    "slug": "ingenieur-qualite-industriel",
    "title": "Ingénieur Qualité Industrielle",
    "aliases": [
      "Ingénieur assurance qualité",
      "Quality Engineer",
      "Responsable qualité produit"
    ],
    "icon": "🎯",
    "familyId": "industrie-mecanique",
    "domain": "Qualité, Sécurité & Environnement",
    "domainId": "qse-securite-environnement-indus",
    "subdomain": "Assurance qualité & Maîtrise statistique des procédés (MSP)",
    "shortDescription": "Met en place les méthodes de contrôle, résout les problèmes de non-conformité et garantit que chaque produit fabriqué respecte les exigences du client.",
    "longDescription": "L'ingénieur qualité est le représentant du client au cœur de l'usine. Dès la phase de développement jusqu'à la livraison finale, il définit les plans de contrôle, qualifie les fournisseurs de composants, utilise la maîtrise statistique des procédés (MSP/SPC) pour éradiquer les dérives, et pilote les cellules de crise qualité en cas de réclamation client avec des outils structurés de résolution de problèmes.",
    "missions": [
      "Élaborer les plans de surveillance qualité et définir les points de contrôle sur la ligne de fabrication",
      "Déployer les outils de la qualité industrielle (AMDEC Produit/Process, 8D, Ishikawa, 5P, QRQC)",
      "Analyser les données statistiques de production (capabilités machines Cp/Cpk, cartes de contrôle Shewhart)",
      "Auditer et qualifier les sous-traitants et fournisseurs de matières premières",
      "Piloter le traitement des réclamations clients et mettre en place des actions correctives irréversibles"
    ],
    "workEnvironment": [
      "Usines de grande série (automobile, aéronautique, électronique, dispositifs médicaux)",
      "Laboratoires de métrologie et de contrôle qualité",
      "Poste d'interface entre production, R&D et clients"
    ],
    "typicalDay": [
      {
        "time": "08:30",
        "desc": "Animation du rituel QRQC (Quick Response Quality Control) d'atelier suite à un défaut de dimension détecté la veille"
      },
      {
        "time": "10:00",
        "desc": "Analyse de capabilité sur une série d'alésages usinés pour vérifier que le Cpk reste supérieur à 1,67"
      },
      {
        "time": "12:30",
        "desc": "Déjeuner avec les ingénieurs méthodes"
      },
      {
        "time": "14:00",
        "desc": "Audit fournisseur chez un fondeur sous-traitant pour valider ses outillages de contrôle"
      },
      {
        "time": "16:30",
        "desc": "Rédaction d'un rapport 8D destiné à un grand constructeur automobile suite à une non-conformité mineure"
      }
    ],
    "companyRole": "Garant de l'excellence irréprochable des produits, protégeant la marque contre les défauts et les rappels de série coûteux.",
    "skills": {
      "technical": [
        "Maîtrise statistique des procédés (SPC / MSP, capabilités Cp, Cpk)",
        "Méthodes de résolution de problèmes structurées (8D, Ishikawa, 5 Pourquoi, AMDEC)",
        "Normes qualité sectorielles (IATF 16949 pour l'automobile, EN 9100 pour l'aéronautique, ISO 13485 médical)",
        "Métrologie tridimensionnelle et analyse des causes racines"
      ],
      "human": [
        "Rigueur et honnêteté intellectuelle sans faille",
        "Forte capacité d'argumentation étayée par des données chiffrées",
        "Diplomatie dans la gestion des réclamations clients",
        "Esprit de synthèse et leadership transversal"
      ],
      "tools": [
        "Logiciels statistiques (Minitab, JMP)",
        "Logiciels de gestion de la qualité (QMS)",
        "Systèmes de métrologie dimensionnelle"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "Bac +2 / BUT",
          "title": "BUT Mesures Physiques ou BUT Génie Industriel et Maintenance",
          "desc": "Métrologie fondamentale, physique des mesures et bases industrielles."
        },
        {
          "step": "Bac +5 (Diplôme d'Ingénieur)",
          "title": "Diplôme d'Ingénieur en Génie Industriel, Mécanique ou Management de la Qualité",
          "desc": "Maîtrise des systèmes qualité sectoriels, Six Sigma et audits internationaux."
        }
      ],
      "schools": [
        {
          "name": "INSA Lyon / UTC Compiègne — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "Arts et Métiers ENSAM — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "École Supérieure Polytechnique de Dakar (ESP - UCAD) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Polytechnique de Thiès (EPT) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "Certifications Black Belt Lean Six Sigma",
        "Certifications Auditeur IATF 16949 / EN 9100"
      ],
      "france": [
        "INSA Lyon / UTC Compiègne — France",
        "Arts et Métiers ENSAM — France"
      ],
      "senegal": [
        "École Supérieure Polytechnique de Dakar (ESP - UCAD) — Sénégal",
        "École Polytechnique de Thiès (EPT) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Automobile & Véhicules électriques",
        "Aéronautique & Défense",
        "Dispositifs médicaux & Pharmacie",
        "Électronique grand public",
        "Agroalimentaire de pointe"
      ],
      "employerTypes": [
        "Équipementiers automobiles de rang 1",
        "Grands constructeurs industriels",
        "Entreprises technologiques certifiées"
      ],
      "evolution": [
        "Responsable qualité usine",
        "Directeur qualité groupe / VP Quality",
        "Directeur d'usine"
      ],
      "pros": [
        "Position stratégique reconnue par la direction générale",
        "Compétences universellement transférables d'une industrie à une autre",
        "Rôle stimulant fondé sur la preuve scientifique et statistique"
      ],
      "cons": [
        "Gestion de situations de crise délicates lors de blocages de livraison"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Appliquer la méthode des 5 Pourquoi et le diagramme d'Ishikawa sur un problème concret du quotidien (ex: pourquoi le train a eu 20 minutes de retard) pour identifier la cause racine.",
      "steps": [
        "Catégoriser les causes selon les 5M (Matière, Matériel, Méthode, Main d'œuvre, Milieu)",
        "Remonter la chaîne des causes par 5 questions successives",
        "Définir l'action corrective qui empêchera définitivement la récidive"
      ],
      "freeResources": [
        "American Society for Quality (ASQ Learning Resources)",
        "Tutoriels Minitab de maîtrise statistique des procédés"
      ]
    },
    "aiImpact": {
      "summary": "L'IA transforme l'assurance qualité via l'analyse prédictive de dérive : les algorithmes détectent un décalage de quelques fractions de micron avant même que la pièce ne sorte des tolérances.",
      "positiveImpacts": [
        "Zéro défaut grâce au contrôle optique IA automatisé à 100% sur les lignes",
        "Génération automatique d'ébauches de rapports 8D"
      ],
      "risksAndChallenges": [
        "La validation humaine de la cause racine reste indispensable pour éviter des actions correctives inefficaces"
      ],
      "recommendedSkills": [
        "Data analytics industriel et apprentissage automatique appliqué à la qualité"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, l'ingénieur qualité est indispensable pour l'obtention des labels d'exportation vers l'Europe et les États-Unis (AGOA) des produits agro-industriels (haricots verts, mangues, conserves de thon) et des ciments sénégalais.",
      "westAfricaOpportunities": "Forte demande dans l'industrie pharmaceutique et les entreprises certifiées ISO de la zone UEMOA.",
      "localChampions": [
        "Patisen",
        "SENICO",
        "Grands Moulins de Dakar",
        "SOCOCIM"
      ]
    },
    "salary": "🇫🇷 France : 38 000 - 70 000 € brut/an • 🇸🇳 Sénégal : 600 000 - 2 100 000 FCFA net/mois",
    "connectedFamilies": [
      "droit-management",
      "sante-biomedical"
    ],
    "relatedJobs": [
      "responsable-qse-industriel",
      "ingenieur-methodes-industriel",
      "technicien-inspection-conformite"
    ],
    "sources": [
      {
        "organization": "L'Étudiant",
        "title": "Fiche métier : Ingénieur qualité",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie/ingenieur-qualite.html",
        "type": "metier"
      },
      {
        "organization": "Onisep",
        "title": "Ingénieur / Ingénieure qualité",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/ingenieur-ingenieure-qualite",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "La méthodologie Six Sigma vise un niveau de qualité de 3,4 défauts par million d'opportunités, soit une fiabilité de 99,99966%.",
      "pourquoi": "Dans l'aéronautique ou la fabrication d'implants médicaux, une fiabilité de 99% signifierait des dizaines de défaillances dramatiques par jour.",
      "a_retenir": "L'ingénieur qualité vise la quasi-perfection pour protéger l'utilisateur."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant & baromètres qualité",
        "range": "38 000 - 70 000 € brut/an",
        "junior": "38 000 € brut/an",
        "senior": "70 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets constatés dans les entreprises certifiées à Dakar",
        "range": "600 000 - 2 100 000 FCFA net/mois",
        "junior": "600 000 FCFA net/mois",
        "senior": "2 100 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Met en place les méthodes de contrôle, résout les problèmes de non-conformité et garantit que chaque produit fabriqué respecte les exigences du client.",
    "level": "Bac +5 (Diplôme d'Ingénieur / Master)"
  },
  {
    "id": "aerodynamicien",
    "slug": "aerodynamicien",
    "title": "Aérodynamicien / Ingénieur Aérodynamique",
    "aliases": [
      "Ingénieur en mécanique des fluides",
      "Ingénieur CFD (Computational Fluid Dynamics)",
      "Aerodynamicist"
    ],
    "icon": "🛩️",
    "familyId": "industrie-mecanique",
    "domain": "Aéronautique & Spatial",
    "domainId": "aeronautique-spatial-indus",
    "subdomain": "Mécanique des fluides, Aérodynamique & Soufflerie",
    "shortDescription": "Optimise l'écoulement de l'air autour des aéronefs, fusées, trains à grande vitesse et voitures pour réduire la traînée et maximiser la portance.",
    "longDescription": "L'aérodynamicien sculpte les flux invisibles de l'air. Par des calculs mathématiques intensifs de dynamique des fluides numérique (CFD) et des essais en soufflerie avec fumée et capteurs de pression, il façonne le profil des ailes d'avions, l'ogive des lanceurs spatiaux, les ailerons de Formule 1 ou le carénage des éoliennes pour minimiser la résistance de l'air, économiser du carburant et garantir la stabilité de vol.",
    "missions": [
      "Modéliser et simuler les écoulements compressibles et incompressibles par CFD (équations de Navier-Stokes)",
      "Concevoir et tester des maquettes instrumentées dans des souffleries aérodynamiques subsoniques et supersoniques",
      "Optimiser la finesse aérodynamique (rapport portance/traînée) des voilures et fuselages",
      "Analyser l'aéroacoustique pour réduire le bruit de frottement dans l'air et le souffle des réacteurs",
      "Collaborer avec les équipes structures pour valider le comportement aéroélastique (flutter)"
    ],
    "workEnvironment": [
      "Centres d'ingénierie aéronautique et spatiale",
      "Écuries de sport automobile (F1, endurance)",
      "Grands laboratoires de soufflerie (ONERA)"
    ],
    "typicalDay": [
      {
        "time": "08:30",
        "desc": "Analyse des simulations CFD d'un nouveau profil d'aile tournées toute la nuit sur le supercalculateur"
      },
      {
        "time": "10:30",
        "desc": "Dépouillement des cartes de pression et des vortex générés en bout d'aile (winglets)"
      },
      {
        "time": "12:30",
        "desc": "Déjeuner avec les ingénieurs propulsion"
      },
      {
        "time": "14:00",
        "desc": "Séance d'essais en soufflerie : visualisation de l'écoulement par filets de fumée laser (PIV)"
      },
      {
        "time": "16:30",
        "desc": "Recommandation de modifications géométriques du carénage moteur pour réduire la traînée de 2%"
      }
    ],
    "companyRole": "Maître de la pénétration dans l'air, garant des performances de vitesse, de consommation énergétique et de stabilité des véhicules.",
    "skills": {
      "technical": [
        "Mécanique des fluides approfondie, turbulence et couches limites",
        "Simulation numérique CFD (Ansys Fluent, Star-CCM+, OpenFOAM)",
        "Techniques de mesure en soufflerie (PIV, balances aérodynamiques, capteurs de pression)",
        "Aéroélasticité et thermodynamique des gaz"
      ],
      "human": [
        "Sens physique exceptionnel des phénomènes invisibles",
        "Rigueur scientifique et mathématique",
        "Capacité à collaborer avec des équipes pluridisciplinaires",
        "Passion pour la vitesse et l'aviation"
      ],
      "tools": [
        "ANSYS Fluent",
        "Siemens Simcenter STAR-CCM+",
        "OpenFOAM",
        "Supercalculateurs HPC",
        "Systèmes de mesure laser PIV (Particle Image Velocimetry)"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "Bac +2 / CPGE",
          "title": "Classes Préparatoires aux Grandes Écoles (MPSI, PCSI, PSI)",
          "desc": "Fondements mathématiques d'analyse vectorielle et physique des ondes."
        },
        {
          "step": "Bac +5 (Diplôme d'Ingénieur)",
          "title": "Diplôme d'Ingénieur Aéronautique ou Mécanique des Fluides (ISAE-Supaero, ENAC, Centrale, Arts et Métiers)",
          "desc": "Spécialisation poussée en mécanique des fluides, turbulence et simulation numérique CFD."
        }
      ],
      "schools": [
        {
          "name": "ISAE-Supaero (Toulouse) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "Institut de Mécanique des Fluides de Toulouse (IMFT) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "École Supérieure Polytechnique de Dakar (ESP - Département Génie Mécanique) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Amadou Mahtar Mbow (UAM Diamniadio) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "Doctorat en mécanique des fluides (Ph.D.) valorisé en R&D avancée"
      ],
      "france": [
        "ISAE-Supaero (Toulouse) — France",
        "Institut de Mécanique des Fluides de Toulouse (IMFT) — France"
      ],
      "senegal": [
        "École Supérieure Polytechnique de Dakar (ESP - Département Génie Mécanique) — Sénégal",
        "Université Amadou Mahtar Mbow (UAM Diamniadio) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Aéronautique civile et militaire",
        "Spatial (lanceurs, capsules de rentrée atmosphérique)",
        "Automobile & Sport automobile (F1)",
        "Énergie éolienne (aérodynamique des pales)"
      ],
      "employerTypes": [
        "Constructeurs aéronautiques (Airbus, Dassault)",
        "Équipementiers spatiaux (ArianeGroup)",
        "Laboratoires de recherche (ONERA, CNRS)",
        "Écuries automobiles de course"
      ],
      "evolution": [
        "Expert aérodynamicien en chef",
        "Responsable du bureau d'études aérodynamique",
        "Directeur de programme avionique ou spatial"
      ],
      "pros": [
        "Métier d'élite prestigieux au sommet de la technologie mondiale",
        "Influence directe sur la décarbonation de l'aviation",
        "Accès à des installations de test uniques (grandes souffleries)"
      ],
      "cons": [
        "Temps de calcul longs et modèles de turbulence mathématiquement complexes"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Utiliser OpenFOAM ou SimScale pour modéliser l'écoulement de l'air autour d'un profil d'aile NACA 0012 sous différents angles d'attaque et tracer la polaire de l'aile.",
      "steps": [
        "Générer la géométrie d'un profil NACA 2D",
        "Définir le maillage avec raffinement de couche limite",
        "Lancer le calcul CFD et identifier l'angle de décrochage"
      ],
      "freeResources": [
        "Airfoil Tools (base de données de profils aérodynamiques)",
        "Tutoriels OpenFOAM débutant",
        "NASA Glenn Research Center Educational Aerodynamics"
      ]
    },
    "aiImpact": {
      "summary": "L'IA révolutionne la CFD en prédisant les champs de vitesse et de pression 1 000 fois plus vite que les solveurs traditionnels via des modèles neuronaux formés sur des banques d'essais.",
      "positiveImpacts": [
        "Optimisation aérodynamique continue en temps réel durant la conception",
        "Découverte de formes bio-inspirées ultra-efficientes impossibles à imaginer manuellement"
      ],
      "risksAndChallenges": [
        "Nécessité de valider les solutions en soufflerie pour certifier les régimes transsoniques"
      ],
      "recommendedSkills": [
        "Couplage IA et CFD (Deep Learning appliqué à la mécanique des fluides)"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, les compétences en aérodynamique et mécanique des fluides s'appliquent directement à l'optimisation des parcs éoliens de Taïba N'Diaye (orientation et profilage des pales) et à l'aménagement aéroportuaire de l'AIBD.",
      "westAfricaOpportunities": "Études d'aérodynamique urbaine et de ventilation naturelle passive des nouveaux bâtiments bioclimatiques en Afrique de l'Ouest.",
      "localChampions": [
        "Parc Éolien de Taïba N'Diaye (PETN)",
        "Aéroport International Blaise Diagne (AIBD)",
        "Air Sénégal (Ingénierie de flotte)"
      ]
    },
    "salary": "🇫🇷 France : 40 000 - 80 000 € brut/an • 🇸🇳 Sénégal : 700 000 - 2 500 000 FCFA net/mois",
    "connectedFamilies": [
      "aeronautique-spatial",
      "energie-renouvelable"
    ],
    "relatedJobs": [
      "ingenieur-calcul",
      "ingenieur-mecanique",
      "architecte-naval"
    ],
    "sources": [
      {
        "organization": "Onisep",
        "title": "Aérodynamicien / Aérodynamicienne",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/aerodynamicien-aerodynamicienne",
        "type": "metier"
      },
      {
        "organization": "L'Étudiant",
        "title": "Fiche secteur : Ingénierie aéronautique",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie.html",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Sur un avion de ligne moderne, chaque réduction de 1% de la traînée aérodynamique permet d'économiser plus de 100 000 litres de carburant par avion et par an.",
      "pourquoi": "L'air oppose une résistance gigantesque à 900 km/h : de minuscules ailettes d'extrémité (winglets) réduisent les tourbillons marginaux et génèrent des économies colossales.",
      "a_retenir": "L'aérodynamicien dompte le vent pour faire voler des géants de 500 tonnes."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : Onisep & L'Étudiant (très valorisé en Formule 1 et spatial)",
        "range": "40 000 - 80 000 € brut/an",
        "junior": "40 000 € brut/an",
        "senior": "80 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets dans les projets énergétiques d'envergure et bureaux d'ingénierie",
        "range": "700 000 - 2 500 000 FCFA net/mois",
        "junior": "700 000 FCFA net/mois",
        "senior": "2 500 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Optimise l'écoulement de l'air autour des aéronefs, fusées, trains à grande vitesse et voitures pour réduire la traînée et maximiser la portance.",
    "level": "Bac +5 (Diplôme d'Ingénieur / Master)"
  },
  {
    "id": "architecte-naval",
    "slug": "architecte-naval",
    "title": "Architecte Naval / Ingénieur de Construction Navale",
    "aliases": [
      "Ingénieur naval",
      "Concepteur de navires",
      "Naval Architect"
    ],
    "icon": "🚢",
    "familyId": "industrie-mecanique",
    "domain": "Naval & Maritime Industriel",
    "domainId": "naval-maritime-industriel",
    "subdomain": "Hydrodynamique, Architecture de carène & Structures navales",
    "shortDescription": "Conçoit l'architecture globale des navires, calcule la stabilité et l'hydrodynamique de la carène, et supervise la construction maritime.",
    "longDescription": "L'architecte naval est le bâtisseur des mers. Des porte-conteneurs géants aux navires de pêche hauturière, en passant par les bateaux militaires, voiliers de course et plateformes pétrolières offshore, il conçoit la forme de la coque (carène), calcule la flottabilité, la stabilité par mer démontée, intègre la propulsion, les emménagements et veille au respect des règlements stricts de sécurité maritime internationale.",
    "missions": [
      "Dessiner les formes de carène et modéliser la géométrie 3D de la coque sous logiciels hydrodynamiques",
      "Calculer les courbes de stabilité statique et dynamique, le centre de gravité et le franc-bord réglementaire",
      "Dimensionner la structure en acier, aluminium ou composites pour résister aux efforts de houle (pilonnement, tangage)",
      "Sélectionner et intégrer les systèmes de propulsion (moteurs diesels marins, hélices, voiles rigides, piles à combustible)",
      "Superviser les essais en bassin des carènes et participer aux essais en mer avant livraison du navire"
    ],
    "workEnvironment": [
      "Bureaux d'architecture navale",
      "Chantiers de construction navale (Dakar Marine, Chantiers de l'Atlantique, Naval Group)",
      "Essais en mer et en bassins hydrodynamiques"
    ],
    "typicalDay": [
      {
        "time": "08:30",
        "desc": "Analyse des simulations hydrodynamiques de traînée de coque à 18 nœuds pour un chalutier océanique"
      },
      {
        "time": "10:30",
        "desc": "Calcul réglementaire de stabilité après avarie (envahissement d'un compartiment étanche) sous logiciel Maxsurf"
      },
      {
        "time": "12:30",
        "desc": "Déjeuner de travail avec les ingénieurs d'armement naval"
      },
      {
        "time": "14:00",
        "desc": "Visite sur la cale sèche du chantier pour contrôler la pose des tôles de bordé et des varangues"
      },
      {
        "time": "16:30",
        "desc": "Validation des plans d'emménagement de passerelle avec le représentant de la société de classification (Bureau Veritas)"
      }
    ],
    "companyRole": "Créateur et maître d'œuvre du navire, garant de sa navigabilité, de sa sécurité en mer et de sa rentabilité opérationnelle.",
    "skills": {
      "technical": [
        "Hydrodynamique navale, théorie du navire et tenue à la mer (seakeeping)",
        "Calcul de structures navales (efforts de vague, flexion de poutre-navire)",
        "Règlements des sociétés de classification (Bureau Veritas, DNV, Lloyd's Register) et OMI (SOLAS)",
        "Logiciels spécialisés de CAO et d'hydrodynamique navale"
      ],
      "human": [
        "Passion viscérale pour le monde maritime",
        "Sens des responsabilités humaines immenses face aux périls de la mer",
        "Capacité à concilier des contraintes techniques contradictoires (poids, vitesse, habitabilité)",
        "Leadership de grands projets pluridisciplinaires"
      ],
      "tools": [
        "Maxsurf",
        "Paramarine",
        "Rhino 3D (modélisation de carène)",
        "ANSYS AQWA (hydrodynamique)",
        "Règlements SOLAS / MARPOL"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "Bac +2 / CPGE",
          "title": "Classes Préparatoires aux Grandes Écoles (Scientifiques)",
          "desc": "Bases solides en mathématiques, physique et mécanique rationnelle."
        },
        {
          "step": "Bac +5 (Diplôme d'Ingénieur)",
          "title": "Diplôme d'Ingénieur en Architecture Navale / Génie Maritime (ENSTA Bretagne, Centrale Marseille, École Navale)",
          "desc": "Formation de référence internationale en architecture navale et hydrodynamique."
        }
      ],
      "schools": [
        {
          "name": "ENSTA Bretagne (Brest - Formation d'élite en architecture navale) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "Centrale Méditerranée (Marseille) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "École Supérieure Polytechnique de Dakar (ESP - Département Génie Mécanique) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "Titre d'Architecte naval certifié",
        "Habilitation d'expert maritime assermenté"
      ],
      "france": [
        "ENSTA Bretagne (Brest - Formation d'élite en architecture navale) — France",
        "Centrale Méditerranée (Marseille) — France"
      ],
      "senegal": [
        "École Supérieure Polytechnique de Dakar (ESP - Département Génie Mécanique) — Sénégal",
        "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Construction navale commerciale & militaire",
        "Offshore & Énergies marines renouvelables (éolien flottant)",
        "Plaisance & Yachting de luxe",
        "Course au large (voiliers de compétition)"
      ],
      "employerTypes": [
        "Chantiers navals (Chantiers de l'Atlantique, Naval Group, Piriou)",
        "Bureaux d'études d'architecture navale",
        "Sociétés de classification maritimes (Bureau Veritas)"
      ],
      "evolution": [
        "Directeur de bureau d'études navales",
        "Directeur de chantier naval",
        "Armateur ou expert maritime international"
      ],
      "pros": [
        "Métier d'exception alliant prestige technique et passion de la mer",
        "Satisfaction monumentale de voir un navire conçu flotter et prendre le large",
        "Forte demande pour la décarbonation maritime (propulsion vélique)"
      ],
      "cons": [
        "Lourde responsabilité sur la vie des marins et passagers"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Modéliser une carène de bateau sous logiciel de modélisation surfacique (ex: Rhino ou Free!Ship) et calculer son déplacement et son volume immergé.",
      "steps": [
        "Tracer le plan de formes (couples, lignes d'eau, sections)",
        "Calculer les hydrostatiques à différentes lignes de flottaison",
        "Vérifier la position du centre de carène par rapport au centre de gravité"
      ],
      "freeResources": [
        "Free!Ship Plus (logiciel open source d'architecture navale)",
        "Principles of Naval Architecture (ouvrages SNAME)"
      ]
    },
    "aiImpact": {
      "summary": "L'IA permet d'optimiser automatiquement les formes de carène pour réduire la consommation de carburant de 5 à 10% en simulant des milliers d'états de mer aléatoires.",
      "positiveImpacts": [
        "Optimisation de la forme du bulbe d'étrave par algorithmes génétiques",
        "Routage météo prédictif pour navires à propulsion hybride éolienne"
      ],
      "risksAndChallenges": [
        "La conformité aux critères stricts de stabilité après avarie de l'OMI reste une exigence humaine incontournable"
      ],
      "recommendedSkills": [
        "Conception navale assistée par algorithmes bio-inspirés"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, l'architecture navale est un secteur historique et stratégique grâce au Chantier Naval de Dakar (Dakar Marine), l'une des plus grandes infrastructures navales d'Afrique de l'Ouest (forme de radoub de 235m, dock flottant), capable d'accueillir des cargos et bateaux de pêche hauturière.",
      "westAfricaOpportunities": "Besoin massif de concepteurs pour moderniser les pirogues artisanales en embarcations en fibre de verre plus sûres et insubmersibles.",
      "localChampions": [
        "Chantier Naval de Dakar (Dakar Marine)",
        "Port Autonome de Dakar (PAD)",
        "Ateliers Navals du Sénégal"
      ]
    },
    "salary": "🇫🇷 France : 39 000 - 78 000 € brut/an • 🇸🇳 Sénégal : 700 000 - 2 600 000 FCFA net/mois",
    "connectedFamilies": [
      "naval-maritime",
      "transports-logistique",
      "energie-renouvelable"
    ],
    "relatedJobs": [
      "ingenieur-mecanique",
      "aerodynamicien",
      "chaudronnier-industriel"
    ],
    "sources": [
      {
        "organization": "Onisep",
        "title": "Architecte naval / Navale",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/architecte-naval-navale",
        "type": "metier"
      },
      {
        "organization": "L'Étudiant",
        "title": "Fiche secteur : Métiers de la mer et du naval",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie.html",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Plus de 90% du commerce mondial de marchandises voyage par voie maritime sur environ 55 000 navires de commerce conçus par des architectes navals.",
      "pourquoi": "Le transport maritime est le mode de transport le plus économe en énergie par tonne-kilomètre transportée.",
      "a_retenir": "L'architecte naval conçoit les artères flottantes de l'économie mondiale."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : Onisep & baromètres de l'industrie navale",
        "range": "39 000 - 78 000 € brut/an",
        "junior": "39 000 € brut/an",
        "senior": "78 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets dans la construction navale et projets pétroliers offshore à Dakar",
        "range": "700 000 - 2 600 000 FCFA net/mois",
        "junior": "700 000 FCFA net/mois",
        "senior": "2 600 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Conçoit l'architecture globale des navires, calcule la stabilité et l'hydrodynamique de la carène, et supervise la construction maritime.",
    "level": "Bac +5 (Diplôme d'Ingénieur / Master)"
  },
  {
    "id": "mecanicien-maintenance-aeronautique",
    "slug": "mecanicien-maintenance-aeronautique",
    "title": "Mécanicien de Maintenance Aéronautique",
    "aliases": [
      "Mécanicien avion",
      "Technicien de maintenance aéronefs",
      "Aircraft Maintenance Engineer (Part-66)"
    ],
    "icon": "✈️",
    "familyId": "industrie-mecanique",
    "domain": "Aéronautique & Spatial",
    "domainId": "aeronautique-spatial-indus",
    "subdomain": "Maintenance aéronautique (MRO) & Moteurs d'avion",
    "shortDescription": "Inspecte, révise, répare et certifie en toute sécurité les systèmes mécaniques, réacteurs et trains d'atterrissage des avions et hélicoptères.",
    "longDescription": "Le mécanicien de maintenance aéronautique détient la vie de centaines de passagers au bout de ses outils. En piste lors des escales ('line maintenance') ou en grand hangar de révision ('base maintenance'), il inspecte les aubes de réacteurs à l'endoscope, remplace les freins en carbone, vérifie les commandes de vol hydrauliques et délivre l'Approbation pour Remise en Service (APRS) sous licence officielle EASA Part-66.",
    "missions": [
      "Effectuer les visites pré-vol, journalières et périodiques d'avions de ligne ou militaires (visites A, C et D)",
      "Inspecter l'état des réacteurs à l'endoscope vidéo (boroscope) pour détecter d'éventuels impacts d'oiseaux",
      "Remplacer et tester les ensembles mécaniques lourds (moteurs, trains d'atterrissage, volets, pompes hydrauliques)",
      "Appliquer scrupuleusement la documentation constructeur officielle (Aircraft Maintenance Manual - AMM)",
      "Délivrer l'Approbation pour Remise en Service (APRS) engageant sa responsabilité pénale et professionnelle"
    ],
    "workEnvironment": [
      "Hangars de maintenance aéronautique (MRO)",
      "Pistes d'aéroports par tous les temps",
      "Travail posté en continu (jour/nuit) pour maintenir les avions en vol"
    ],
    "typicalDay": [
      {
        "time": "06:00",
        "desc": "Prise de quart au hangar et vérification des rapports du carnet de bord (Aircraft Technical Log) des avions arrivés la nuit"
      },
      {
        "time": "07:30",
        "desc": "Inspection endoscopique de la turbine haute pression d'un moteur CFM56 sous AMM"
      },
      {
        "time": "11:00",
        "desc": "Remplacement d'un bloc de frein en carbone sur le train d'atterrissage principal"
      },
      {
        "time": "13:00",
        "desc": "Déjeuner avec les techniciens avionique"
      },
      {
        "time": "14:30",
        "desc": "Test de pressurisation du circuit hydraulique à 3 000 PSI et vérification de l'absence de fuite"
      },
      {
        "time": "17:30",
        "desc": "Signature de l'APRS dans le système informatique de maintenance de la compagnie"
      }
    ],
    "companyRole": "Garant ultime de la navigabilité des avions, autorisant formellement le décollage des aéronefs après vérification complète.",
    "skills": {
      "technical": [
        "Mécanique des turboréacteurs, turbopropulseurs et structures aéronefs",
        "Circuits hydrauliques haute pression (Skydrol) et pneumatiques de bord",
        "Réglementation aéronautique internationale (EASA Part-145, Part-66)",
        "Anglais technique aéronautique indispensable (toute la doc est en anglais)"
      ],
      "human": [
        "Rigueur absolue et zéro tolérance pour l'approximation",
        "Résistance au stress des délais de départ en piste",
        "Sens aigu de la responsabilité éthique",
        "Rigueur d'enregistrement des pièces et outils (zéro outil oublié à bord)"
      ],
      "tools": [
        "Boroscope / Vidéo-endoscope industriel",
        "Valises d'outillage aéronautique avec inventaire électronique (boîtes à outils contrôlées FOD)",
        "Bancs hydrauliques mobiles de pressurisation",
        "Clés dynamométriques d'aviation certifiées"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "Bac Pro",
          "title": "Bac Pro Aéronautique option Systèmes ou Moteurs",
          "desc": "Apprentissage des règles d'atelier et de la mécanique aéronautique."
        },
        {
          "step": "Bac +2 / Licence Part-66",
          "title": "BTS Aéronautique ou Mention Complémentaire Aéronautique / Licence EASA Part-66 Catégorie B1",
          "desc": "Obtention de la licence aéronautique officielle obligatoire pour délivrer l'APRS."
        }
      ],
      "schools": [
        {
          "name": "Lycées professionnels et centres de formation aéronautique agréés EASA Part-147 — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "École des Métiers de l'Aéronautique (EMA / Air France Industries) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "École de l'Air et de l'Aéronautique de Thiès (EAA) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain des Métiers de l'Aérien (IAMA) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "Licence de Mécanicien de Maintenance d'Aéronefs EASA Part-66 B1.1 (avions à turbines)",
        "Habilitations de sécurité aéroportuaire (badge rouge)"
      ],
      "france": [
        "Lycées professionnels et centres de formation aéronautique agréés EASA Part-147 — France",
        "École des Métiers de l'Aéronautique (EMA / Air France Industries) — France"
      ],
      "senegal": [
        "École de l'Air et de l'Aéronautique de Thiès (EAA) — Sénégal",
        "Institut Africain des Métiers de l'Aérien (IAMA) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Compagnies aériennes régulières et cargo",
        "Ateliers de révision aéronautique MRO",
        "Aviation d'affaires et de tourisme",
        "Aviation militaire et défense"
      ],
      "employerTypes": [
        "Compagnies aériennes (Air France, Air Sénégal, Emirates)",
        "Géants du MRO (Air France Industries KLM E&M, Sabena Aerospace)",
        "Constructeurs (Airbus, Safran)"
      ],
      "evolution": [
        "Chef d'équipe de maintenance en piste",
        "Contrôleur de navigabilité bureau technique (CAMO)",
        "Responsable qualité d'atelier Part-145"
      ],
      "pros": [
        "Métier prestigieux et passionnant au contact direct des avions de ligne",
        "Forte demande mondiale dans l'aviation civile",
        "Rémunération très valorisée avec la licence B1"
      ],
      "cons": [
        "Travail en extérieur par tous les temps et travail posté de nuit"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Démonter et remonter un petit moteur thermique de modélisme, régler le jeu des soupapes et consigner chaque étape sur un carnet de maintenance fictif.",
      "steps": [
        "Nettoyer méthodiquement chaque pièce et la repérer",
        "Utiliser le manuel technique officiel pour respecter les couples de serrage",
        "Appliquer les règles FOD (Foreign Object Debris) : compter ses outils avant et après"
      ],
      "freeResources": [
        "FAA Aviation Maintenance Technician Handbook (téléchargeable gratuitement)",
        "Réglementations EASA Part-66 en ligne"
      ]
    },
    "aiImpact": {
      "summary": "L'IA analyse les données télémétriques transmises en vol par les réacteurs (ACARS) pour alerter le mécanicien au sol sur la pièce exacte à remplacer avant même que l'avion n'atterrisse.",
      "positiveImpacts": [
        "Préparation des pièces détachées et outillages avant l'arrivée au parking",
        "Détection automatique des micro-fissures d'aubes par traitement d'images d'endoscopie"
      ],
      "risksAndChallenges": [
        "La signature de l'APRS et la vérification visuelle restent sous la responsabilité juridique de l'humain"
      ],
      "recommendedSkills": [
        "Utilisation de logiciels de maintenance prédictive aéronautique (Airbus Skywise)"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, le hub aéroportuaire de l'AIBD (Diass) développe un centre de maintenance aéronautique régional de premier plan pour soutenir la flotte d'Air Sénégal et les avions en transit dans toute l'Afrique de l'Ouest.",
      "westAfricaOpportunities": "Besoin massif de mécaniciens avion licenciés Part-66 / ANACIM pour accompagner la croissance du trafic aérien africain.",
      "localChampions": [
        "Air Sénégal",
        "Aéroport International Blaise Diagne (AIBD)",
        "2AS (Senegal Airport Services)",
        "Armée de l'Air Sénégalaise"
      ]
    },
    "salary": "🇫🇷 France : 26 000 - 54 000 € brut/an • 🇸🇳 Sénégal : 350 000 - 1 500 000 FCFA net/mois",
    "connectedFamilies": [
      "aeronautique-spatial",
      "transports-logistique"
    ],
    "relatedJobs": [
      "aerodynamicien",
      "electromecanicien",
      "technicien-maintenance-industrielle"
    ],
    "sources": [
      {
        "organization": "Onisep",
        "title": "Mécanicien / Mécanicienne d'entretien avion",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/mecanicien-mecanicienne-d-entretien-avion",
        "type": "metier"
      },
      {
        "organization": "L'Étudiant",
        "title": "Les métiers de l'aéronautique : Mécanicien avion",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie.html",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Dans l'aviation civile, chaque outil utilisé par un mécanicien est gravé au laser avec son matricule et rangé dans des mousses bicolores sur mesure : si un seul tournevis manque à l'appel lors de l'inventaire final, l'avion n'a pas le droit de décoller.",
      "pourquoi": "Un outil oublié dans un carter de réacteur pourrait détruire le moteur en vol par aspiration (phénomène de FOD - Foreign Object Damage).",
      "a_retenir": "La rigueur absolue du mécanicien aéronautique est la clé du mode de transport le plus sûr au monde."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : Onisep & baromètres aéronautiques (jusqu'à 65k€ avec licence B1 complète)",
        "range": "26 000 - 54 000 € brut/an",
        "junior": "26 000 € brut/an",
        "senior": "54 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets constatés pour mécaniciens avion certifiés à Dakar-AIBD",
        "range": "350 000 - 1 500 000 FCFA net/mois",
        "junior": "350 000 FCFA net/mois",
        "senior": "1 500 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Inspecte, révise, répare et certifie en toute sécurité les systèmes mécaniques, réacteurs et trains d'atterrissage des avions et hélicoptères.",
    "level": "CAP / Bac Pro à Bac +2"
  },
  {
    "id": "acheteur-industriel",
    "slug": "acheteur-industriel",
    "title": "Acheteur Industriel / Négociateur Achats",
    "aliases": [
      "Acheteur technique",
      "Responsable des achats industriels",
      "Industrial Buyer"
    ],
    "icon": "🛒",
    "familyId": "industrie-mecanique",
    "domain": "Achats Industriels",
    "domainId": "achats-industriels",
    "subdomain": "Sourcing équipements, Matières premières & Négociation fournisseurs",
    "shortDescription": "Sélectionne les fournisseurs de matières premières, composants et machines, négocie les contrats au meilleur coût et sécurise les approvisionnements.",
    "longDescription": "L'acheteur industriel est le stratège des dépenses de l'entreprise. En lien étroit avec le bureau d'études et la production, il source les fournisseurs capables de livrer des aciers, composants électroniques, outillages ou prestations de maintenance respectant scrupuleusement le cahier des charges technique. Il négocie les prix, les délais et les conditions de paiement à l'échelle mondiale pour optimiser les marges.",
    "missions": [
      "Prospecter et évaluer les fournisseurs industriels mondiaux (sourcing local et international)",
      "Rédiger les appels d'offres techniques en collaboration avec les ingénieurs d'études",
      "Négocier fermement les tarifs, les volumes, les délais de livraison et les garanties de pénalités de retard",
      "Contractualiser les accords-cadres et veiller au respect des clauses juridiques et de confidentialité",
      "Évaluer régulièrement la performance des fournisseurs (taux de service OTD, taux de non-conformité PPM)"
    ],
    "workEnvironment": [
      "Sièges sociaux et usines industrielles",
      "Déplacements fréquents en audit chez les fournisseurs en France et à l'étranger",
      "Environnement de bureau avec usage intensif de logiciels ERP"
    ],
    "typicalDay": [
      {
        "time": "08:30",
        "desc": "Revue des cours mondiaux des matières premières (acier, cuivre, aluminium, pétrole)"
      },
      {
        "time": "10:00",
        "desc": "Négociation en visioconférence d'un contrat de fourniture de roulements pour l'année à venir"
      },
      {
        "time": "12:30",
        "desc": "Déjeuner de travail avec le directeur financier de l'usine"
      },
      {
        "time": "14:00",
        "desc": "Analyse comparative de 4 réponses à appel d'offres pour l'achat d'un nouveau centre d'usinage 5 axes"
      },
      {
        "time": "16:30",
        "desc": "Validation des commandes dans l'ERP SAP et suivi des livraisons critiques avec la logistique"
      }
    ],
    "companyRole": "Gestionnaire des coûts extérieurs, contribuant directement à la rentabilité et à la résilience de la chaîne d'approvisionnement.",
    "skills": {
      "technical": [
        "Techniques de négociation commerciale avancée et gestion des conflits",
        "Compréhension fine des procédés industriels et lecture de plans techniques",
        "Droit des contrats commerciaux internationaux (Incoterms, devises, litiges)",
        "Maîtrise des ERP achats (SAP MM, Oracle Ariba)"
      ],
      "human": [
        "Force de persuasion et charisme relationnel",
        "Sens aigu de la diplomatie et du compromis gagnant-gagnant",
        "Esprit analytique et rigueur financière",
        "Résistance au stress des pénuries de matières premières"
      ],
      "tools": [
        "SAP MM / S/4HANA",
        "Plateformes e-procurement",
        "Bases de données de cours des matières premières (LME)",
        "Tableaux de bord d'analyse des dépenses (Spend Analysis)"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "Bac +3",
          "title": "Licence Professionnelle Achats Industriels ou BUT Gestion des Entreprises",
          "desc": "Fondements du commerce international, de la gestion et de la logistique."
        },
        {
          "step": "Bac +5 (Master / Diplôme d'École)",
          "title": "Master Spécialisé Achats Internationaux (DESMA, MAI) ou Diplôme d'Ingénieur complété par un diplôme d'école de commerce",
          "desc": "Double compétence technique et commerciale très prisée des grands groupes."
        }
      ],
      "schools": [
        {
          "name": "IAE Grenoble (DESMA - Management des Achats) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "KEDGE Business School (Master MAI) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "École Supérieure Polytechnique de Dakar (ESP - Département Gestion) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "BEM Management School Dakar — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "Certifications professionnelles CIPS (Chartered Institute of Procurement & Supply)"
      ],
      "france": [
        "IAE Grenoble (DESMA - Management des Achats) — France",
        "KEDGE Business School (Master MAI) — France"
      ],
      "senegal": [
        "École Supérieure Polytechnique de Dakar (ESP - Département Gestion) — Sénégal",
        "BEM Management School Dakar — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Automobile & Transport",
        "Aéronautique",
        "Grande industrie manufacturière",
        "Chimie & Énergie",
        "Agroalimentaire"
      ],
      "employerTypes": [
        "Grandes entreprises industrielles multinationales",
        "ETI et PME manufacturières",
        "Centrales d'achats industrielles"
      ],
      "evolution": [
        "Responsable achats d'une division",
        "Directeur des achats industriels (CPO)",
        "Directeur de la supply chain"
      ],
      "pros": [
        "Poste stratégique au carrefour de la technique, du droit et de la finance",
        "Rémunération très attractive avec parts variables sur objectifs",
        "Dimension internationale avec voyages réguliers"
      ],
      "cons": [
        "Pression constante sur les objectifs de réduction des coûts (savings)"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Réaliser le tableau comparatif multicritères (matrice de décision pondérée) de 3 devis fournisseurs pour un projet industriel fictif.",
      "steps": [
        "Définir les critères : prix, délai, qualité, solidité financière, démarche RSE",
        "Attribuer des coefficients de pondération",
        "Argumenter le choix final devant un jury"
      ],
      "freeResources": [
        "CIPS Knowledge Portal",
        "Revue Décision Achats",
        "Tutoriels Incoterms 2020"
      ]
    },
    "aiImpact": {
      "summary": "L'IA assiste les acheteurs par la veille prédictive sur la santé financière des fournisseurs et la détection d'opportunités de renégociation de prix sur les catalogues.",
      "positiveImpacts": [
        "Automatisation de l'analyse comparative des devis complexes",
        "Alertes précoces sur les risques de faillite d'un sous-traitant"
      ],
      "risksAndChallenges": [
        "La relation de confiance interpersonnelle et la négociation en face-à-face restent purement humaines"
      ],
      "recommendedSkills": [
        "Gestion des plateformes d'achats autonomes et sourcing assisté par IA"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, l'acheteur industriel joue un rôle clé dans la politique de 'Contenu Local' (Local Content) rendue obligatoire dans le secteur pétro-gazier, en formant et sélectionnant des sous-traitants sénégalais compétitifs face aux géants internationaux.",
      "westAfricaOpportunities": "Postes de direction des achats très recherchés dans les groupes cimentiers, miniers et de BTP dans toute la sous-région.",
      "localChampions": [
        "Petrosen (Comité National de Suivi du Contenu Local)",
        "SOCOCIM",
        "Compagnie Sucrière Sénégalaise",
        "Dangote Cement"
      ]
    },
    "salary": "🇫🇷 France : 36 000 - 70 000 € brut/an • 🇸🇳 Sénégal : 550 000 - 2 100 000 FCFA net/mois",
    "connectedFamilies": [
      "banque-finance-assurances",
      "droit-management"
    ],
    "relatedJobs": [
      "logisticien-industriel",
      "responsable-ordonnancement-indus",
      "ingenieur-commercial-industriel"
    ],
    "sources": [
      {
        "organization": "L'Étudiant",
        "title": "Fiche métier : Acheteur industriel",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie/acheteur-industriel-1.html",
        "type": "metier"
      },
      {
        "organization": "Onisep",
        "title": "Acheteur / Acheteuse industriel",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/acheteur-acheteuse",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Dans une entreprise industrielle classique, les achats de biens et services représentent entre 50% et 70% du chiffre d'affaires total de l'entreprise.",
      "pourquoi": "Chaque pourcentage économisé sur les achats va directement grossir le résultat net sans avoir besoin de fabriquer un produit supplémentaire.",
      "a_retenir": "L'acheteur industriel est le premier créateur de marge de l'usine."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant",
        "range": "36 000 - 70 000 € brut/an",
        "junior": "36 000 € brut/an",
        "senior": "70 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets constatés pour acheteurs industriels à Dakar",
        "range": "550 000 - 2 100 000 FCFA net/mois",
        "junior": "550 000 FCFA net/mois",
        "senior": "2 100 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Sélectionne les fournisseurs de matières premières, composants et machines, négocie les contrats au meilleur coût et sécurise les approvisionnements.",
    "level": "CAP / Bac Pro à Bac +2"
  },
  {
    "id": "logisticien-industriel",
    "slug": "logisticien-industriel",
    "title": "Logisticien Industriel / Gestionnaire de Flux",
    "aliases": [
      "Responsable logistique d'usine",
      "Supply Chain Coordinator",
      "Industrial Logistician"
    ],
    "icon": "📦",
    "familyId": "industrie-mecanique",
    "domain": "Logistique Industrielle & Supply Chain",
    "domainId": "logistique-supply-chain-indus",
    "subdomain": "Gestion des stocks, Flux physiques & Approvisionnements",
    "shortDescription": "Organise et synchronise la circulation des matières premières, composants et produits finis pour alimenter les lignes de production sans rupture.",
    "longDescription": "Le logisticien industriel est le maître des flux physiques et informatiques de l'usine. En amont, il coordonne la réception et le stockage des composants ; au cœur de l'atelier, il approvisionne les postes de travail en 'juste-à-temps' par trains de kitting ou chariots autonomes (AGV) ; en aval, il gère l'emballage, le stockage des produits finis et leur expédition chez les clients dans le monde entier.",
    "missions": [
      "Coordonner les réceptions de matières et composants et superviser le déchargement et le contrôle",
      "Optimiser la gestion des stocks de sécurité pour éviter à la fois les ruptures et le sur-stockage coûteux",
      "Organiser l'approvisionnement des lignes de fabrication en flux tendu (Kanban, milk-run)",
      "Superviser les équipes de caristes, magasiniers et préparateurs de commandes",
      "Planifier les expéditions de produits finis avec les transporteurs routiers, maritimes et aériens"
    ],
    "workEnvironment": [
      "Entrepôts industriels et plateformes logistiques d'usine",
      "Quais de chargement et ateliers de fabrication",
      "Bureaux logistiques équipés de WMS et ERP"
    ],
    "typicalDay": [
      {
        "time": "08:00",
        "desc": "Point matinal sur les arrivages de camions et vérification des matières premières bloquées en douane"
      },
      {
        "time": "09:30",
        "desc": "Tournée dans le magasin automatique pour vérifier le réapprovisionnement des bacs Kanban des lignes d'assemblage"
      },
      {
        "time": "12:30",
        "desc": "Déjeuner avec les chefs d'équipe logistique"
      },
      {
        "time": "14:00",
        "desc": "Négociation avec un transporteur express pour acheminer d'urgence un moteur de rechange"
      },
      {
        "time": "16:30",
        "desc": "Analyse de la rotation des stocks sous SAP et proposition de déstockage de pièces obsolètes"
      }
    ],
    "companyRole": "Garant du sang qui irrigue l'usine : sans matières premières acheminées à temps, aucune machine ne peut produire.",
    "skills": {
      "technical": [
        "Gestion des stocks et méthodes de réapprovisionnement (MRP2, Kanban, FIFO)",
        "Maîtrise des logiciels de gestion d'entrepôt (WMS) et ERP (SAP WM/MM)",
        "Réglementation du transport national et international (douanes, matières dangereuses ADR)",
        "Organisation des flux physiques d'atelier et implantation d'entrepôts"
      ],
      "human": [
        "Excellente résistance au stress et réactivité face aux imprévus",
        "Sens de l'organisation et anticipation permanente",
        "Qualités managériales pour encadrer les équipes de magasiniers",
        "Capacité à négocier avec les transporteurs"
      ],
      "tools": [
        "ERP (SAP, Oracle)",
        "Logiciels WMS (Warehouse Management System)",
        "Lecteurs de codes-barres / terminaux RFID",
        "Chariots autoguidés (AGV / AMR)"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "Bac +2 (BTS / BUT)",
          "title": "BTS Gestion des Transports et Logistique Associée (GTLA) ou BUT Management de la Logistique et des Transports (MLT)",
          "desc": "Techniques d'exploitation des transports, gestion d'entrepôt et douanes."
        },
        {
          "step": "Bac +5 (Master / Diplôme d'École)",
          "title": "Master en Management de la Supply Chain ou Diplôme d'École de Commerce/Ingénieur",
          "desc": "Stratégie globale de chaîne logistique, optimisation des réseaux et logistique verte."
        }
      ],
      "schools": [
        {
          "name": "IUT et Universités préparant au BUT MLT / Masters Supply Chain — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "Institut Supérieur de Transport et Logistique (Groupe Promotrans / AFT-IFTIM) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "École Supérieure Polytechnique de Dakar (ESP - Département Gestion) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Africain de Management (IAM Dakar) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "Certifications APICS (CPIM - Certified in Production and Inventory Management)"
      ],
      "france": [
        "IUT et Universités préparant au BUT MLT / Masters Supply Chain — France",
        "Institut Supérieur de Transport et Logistique (Groupe Promotrans / AFT-IFTIM) — France"
      ],
      "senegal": [
        "École Supérieure Polytechnique de Dakar (ESP - Département Gestion) — Sénégal",
        "Institut Africain de Management (IAM Dakar) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Tous secteurs industriels",
        "Agroalimentaire & Distribution",
        "Automobile & Aéronautique",
        "Commerce en ligne & Logistique contractuelle"
      ],
      "employerTypes": [
        "Usines de production",
        "Prestataires logistiques internationaux (DHL, Bolloré Logistics, Geodis)",
        "Grandes plateformes de distribution"
      ],
      "evolution": [
        "Responsable supply chain de site",
        "Directeur de plateforme logistique",
        "Directeur supply chain groupe"
      ],
      "pros": [
        "Métier d'action très concret et au cœur du commerce mondial",
        "Forte employabilité sur tout le territoire national et international",
        "Opportunités d'encadrement dès le début de carrière"
      ],
      "cons": [
        "Dépendance aux aléas extérieurs (grèves de transporteurs, intempéries, retards maritimes)"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Organiser l'inventaire et le réapprovisionnement d'un petit stock (ex: outillage d'atelier ou consommables de bureau) avec calcul du point de commande et stock de sécurité sous Excel.",
      "steps": [
        "Classer les articles selon la méthode ABC (Loi de Pareto)",
        "Calculer la formule de Wilson pour déterminer la quantité économique de commande",
        "Mettre en place un système visuel d'alerte de réapprovisionnement"
      ],
      "freeResources": [
        "Guide de gestion de stock de l'AFNOR",
        "Tutoriels supply chain de l'Association Française pour la Logistique (ASLOG)"
      ]
    },
    "aiImpact": {
      "summary": "L'IA révolutionne la logistique industrielle par la prévision de la demande par machine learning et le pilotage de flottes de robots mobiles autonomes (AMR) dans les usines.",
      "positiveImpacts": [
        "Traçabilité en temps réel par balises IoT et RFID",
        "Optimisation dynamique des tournées de livraison et des chargements de camions"
      ],
      "risksAndChallenges": [
        "Nécessité de gérer la transition vers des entrepôts automatisés tout en accompagnant les équipes"
      ],
      "recommendedSkills": [
        "Pilotage de systèmes logistiques automatisés et analyse de flux par IA"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, le logisticien industriel est au cœur du hub logistique de Diamniadio et du Port Autonome de Dakar, assurant le dédouanement et l'acheminement des marchandises vers le Mali et l'hinterland ouest-africain.",
      "westAfricaOpportunities": "Développement massif des corridors logistiques Dakar-Bamako et Abidjan-Ouagadougou.",
      "localChampions": [
        "Bolloré Transport & Logistics Sénégal (AGL)",
        "Port Autonome de Dakar",
        "DP World Dakar",
        "Grands Moulins de Dakar"
      ]
    },
    "salary": "🇫🇷 France : 27 000 - 55 000 € brut/an • 🇸🇳 Sénégal : 350 000 - 1 500 000 FCFA net/mois",
    "connectedFamilies": [
      "transports-logistique",
      "commerce-vente"
    ],
    "relatedJobs": [
      "acheteur-industriel",
      "responsable-ordonnancement-indus",
      "conducteur-ligne-production"
    ],
    "sources": [
      {
        "organization": "L'Étudiant",
        "title": "Fiche métier : Logisticien",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie/logisticien.html",
        "type": "metier"
      },
      {
        "organization": "Onisep",
        "title": "Logisticien / Logisticienne",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/logisticien-logisticienne",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Dans l'industrie automobile moderne, les pièces arrivent sur la ligne de montage seulement 2 heures avant d'être vissées sur la voiture (principe du Juste-à-Temps).",
      "pourquoi": "Stocker des carrosseries ou des moteurs immobiliserait des millions d'euros et des kilomètres carrés d'entrepôts inutiles.",
      "a_retenir": "Le logisticien fait circuler la matière avec une précision d'horloger suisse."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant & Onisep",
        "range": "27 000 - 55 000 € brut/an",
        "junior": "27 000 € brut/an",
        "senior": "55 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets constatés dans la logistique industrielle et portuaire à Dakar",
        "range": "350 000 - 1 500 000 FCFA net/mois",
        "junior": "350 000 FCFA net/mois",
        "senior": "1 500 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Organise et synchronise la circulation des matières premières, composants et produits finis pour alimenter les lignes de production sans rupture.",
    "level": "CAP / Bac Pro à Bac +2"
  },
  {
    "id": "responsable-ordonnancement-indus",
    "slug": "responsable-ordonnancement-indus",
    "title": "Responsable Ordonnancement & Planification",
    "aliases": [
      "Ordonnanceur industriel",
      "Planificateur de production",
      "Master Scheduler"
    ],
    "icon": "🗓️",
    "familyId": "industrie-mecanique",
    "domain": "Planification & Ordonnancement",
    "domainId": "planification-ordonnancement-indus",
    "subdomain": "Planning de production, Charges / Capacités & PIC / PDP",
    "shortDescription": "Élabore les plannings de production des ateliers, équilibre les charges et les capacités des machines et garantit les dates de livraison promises aux clients.",
    "longDescription": "Le responsable d'ordonnancement est le régulateur temporel de l'usine. Situé à la croisée des commandes commerciales et des capacités réelles de l'outil de production, il traduit les commandes clients en ordres de fabrication (OF). Il jongle avec les temps de changement d'outils, les disponibilités de matières premières et les contraintes de maintenance pour planifier chaque heure de chaque machine avec une efficience maximale.",
    "missions": [
      "Élaborer le Plan Industriel et Commercial (PIC) et le Plan Directeur de Production (PDP)",
      "Calculer les charges de travail et les capacités machines pour identifier les goulets d'étranglement",
      "Lancer et ordonnancer les ordres de fabrication (OF) au jour le jour pour les chefs d'atelier",
      "Réajuster immédiatement le planning en cas d'aléa (panne machine, retard de matière, commande urgente)",
      "Mesurer et analyser le taux de respect du planning de production et le taux de service client (OTIF)"
    ],
    "workEnvironment": [
      "Bureaux d'ordonnancement intégrés à l'usine",
      "Travail sur double ou triple écran avec progiciels ERP et GPAO",
      "Échanges continus avec la production et le service commercial"
    ],
    "typicalDay": [
      {
        "time": "08:15",
        "desc": "Revue des fabrications de la veille et point sur l'avancement des ordres de fabrication prioritaires"
      },
      {
        "time": "09:30",
        "desc": "Réajustement du planning d'une ligne d'extrusion suite à l'arrêt imprévu d'un centre d'usinage"
      },
      {
        "time": "12:30",
        "desc": "Déjeuner avec les ingénieurs de production"
      },
      {
        "time": "14:00",
        "desc": "Réunion hebdomadaire de planification avec les commerciaux pour valider les délais de nouvelles commandes"
      },
      {
        "time": "16:30",
        "desc": "Calcul du plan de charge à 4 semaines sur l'ERP et lancement des approvisionnements de matières"
      }
    ],
    "companyRole": "Maître du temps industriel, garantissant que chaque commande client sort de l'usine à la date promise au meilleur coût de fonctionnement.",
    "skills": {
      "technical": [
        "Méthodes de planification industrielle (PIC, PDP, CBN / MRP, ordonnancement à capacité finie)",
        "Maîtrise approfondie des modules de production des ERP (SAP PP, Microsoft Dynamics NAV/BC)",
        "Connaissance pratique des cadences et contraintes techniques des ateliers",
        "Maîtrise experte d'Excel avancé et des outils de modélisation de plannings"
      ],
      "human": [
        "Calme olympien et résistance aux pressions commerciales et d'atelier",
        "Esprit mathématique, logique et sens des priorités",
        "Aisance relationnelle pour arbitrer entre des services aux intérêts divergents",
        "Rigueur et minutie d'organisation"
      ],
      "tools": [
        "ERP (SAP PP, Infor M3)",
        "Logiciels d'ordonnancement à capacité finie (Preactor / Opcenter APS, Ortems)",
        "Tableaux de bord Excel / Power BI"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "Bac +2 / BUT",
          "title": "BUT Gestion Logistique et Transport ou BUT Qualité, Logistique Industrielle et Organisation (QLIO)",
          "desc": "Bases de gestion de production, ordonnancement et GPAO."
        },
        {
          "step": "Bac +5 (Master / Diplôme d'Ingénieur)",
          "title": "Master Génie Industriel / Gestion de Production ou Diplôme d'Ingénieur",
          "desc": "Optimisation des flux, recherche opérationnelle et planification avancée (Supply Chain Management)."
        }
      ],
      "schools": [
        {
          "name": "IUT et Universités préparant au BUT QLIO / Masters Génie Industriel — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "INSA Lyon / Strasbourg (Génie Industriel) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "École Supérieure Polytechnique de Dakar (ESP - Département Gestion) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Polytechnique de Thiès (EPT) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "Certifications internationales APICS (CPIM - Certified in Production and Inventory Management)"
      ],
      "france": [
        "IUT et Universités préparant au BUT QLIO / Masters Génie Industriel — France",
        "INSA Lyon / Strasbourg (Génie Industriel) — France"
      ],
      "senegal": [
        "École Supérieure Polytechnique de Dakar (ESP - Département Gestion) — Sénégal",
        "École Polytechnique de Thiès (EPT) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Tous secteurs industriels manufacturiers (Automobile, Aéronautique, Métallurgie, Chimie, Agroalimentaire)"
      ],
      "employerTypes": [
        "Usines de production de moyenne et grande série",
        "PME industrielles",
        "Grands groupes manufacturiers"
      ],
      "evolution": [
        "Responsable planification et ordonnancement d'usine",
        "Responsable supply chain de site",
        "Directeur des opérations de production"
      ],
      "pros": [
        "Rôle pivot au cœur de la stratégie industrielle de l'entreprise",
        "Forte demande sur le marché de l'emploi",
        "Poste très intellectuel et stimulant combinant chiffres et relations humaines"
      ],
      "cons": [
        "Pression constante des commerciaux voulant livrer leurs clients en priorité"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Construire sous tableur Excel un diagramme de Gantt dynamique et une matrice d'équilibrage de charge pour 5 machines et 10 commandes avec dates de livraison imposées.",
      "steps": [
        "Déterminer les durées opératoires et les temps de préparation (setup)",
        "Calculer les dates de début au plus tôt et au plus tard",
        "Lisser la charge pour éliminer les surcharges supérieures à 100% de la capacité"
      ],
      "freeResources": [
        "Association Française de Gestion Industrielle (FGI)",
        "Tutoriels APICS Supply Chain Planning"
      ]
    },
    "aiImpact": {
      "summary": "L'IA permet l'ordonnancement en temps réel sous contraintes multiples par algorithmes génétiques et recherche opérationnelle accélérée.",
      "positiveImpacts": [
        "Recalcul instantané d'un planning optimal de 500 machines en quelques secondes après une panne",
        "Prévision des risques de retard par apprentissage sur l'historique des temps réels de fabrication"
      ],
      "risksAndChallenges": [
        "La validation finale et l'arbitrage humain des priorités clients restent indispensables"
      ],
      "recommendedSkills": [
        "Utilisation d'outils APS (Advanced Planning & Scheduling) assistés par algorithmes d'optimisation"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, l'ordonnanceur industriel est la clé de voûte des usines de transformation agro-industrielle (huileries, biscuiteries, laiteries) où il faut synchroniser les récoltes saisonnières d'arachide ou de mangue avec les cadences d'usine.",
      "westAfricaOpportunities": "Postes clés dans les grandes filiales industrielles de toute l'Afrique de l'Ouest.",
      "localChampions": [
        "Patisen",
        "Compagnie Sucrière Sénégalaise",
        "SENICO",
        "Grands Moulins de Dakar"
      ]
    },
    "salary": "🇫🇷 France : 28 000 - 52 000 € brut/an • 🇸🇳 Sénégal : 350 000 - 1 300 000 FCFA net/mois",
    "connectedFamilies": [
      "transports-logistique",
      "droit-management"
    ],
    "relatedJobs": [
      "ingenieur-de-production",
      "logisticien-industriel",
      "acheteur-industriel"
    ],
    "sources": [
      {
        "organization": "L'Étudiant",
        "title": "Fiche métier : Responsable d'ordonnancement",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie/responsable-d-ordonnancement.html",
        "type": "metier"
      },
      {
        "organization": "Onisep",
        "title": "Technicien / Technicienne en ordonnancement",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/technicien-technicienne-en-ordonnancement",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Dans une usine de pièces mécaniques complexes, ordonnancer 20 machines réalisant 100 opérations différentes génère un nombre de combinaisons mathématiques possibles supérieur au nombre d'atomes dans l'univers connu.",
      "pourquoi": "Le responsable d'ordonnancement utilise la recherche opérationnelle pour trouver la solution optimale parmi ces milliards d'agencements possibles.",
      "a_retenir": "L'ordonnanceur transforme le chaos des commandes en symphonie de production."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant & baromètres de gestion industrielle",
        "range": "28 000 - 52 000 € brut/an",
        "junior": "28 000 € brut/an",
        "senior": "52 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets dans les usines de production à Dakar/Sandiara",
        "range": "350 000 - 1 300 000 FCFA net/mois",
        "junior": "350 000 FCFA net/mois",
        "senior": "1 300 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Élabore les plannings de production des ateliers, équilibre les charges et les capacités des machines et garantit les dates de livraison promises aux clients.",
    "level": "Bac +5 (Diplôme d'Ingénieur / Master)"
  },
  {
    "id": "ingenieur-commercial-industriel",
    "slug": "ingenieur-commercial-industriel",
    "title": "Ingénieur Commercial / Ingénieur d'Affaires Industrielles",
    "aliases": [
      "Ingénieur technico-commercial",
      "Ingénieur commercial B2B",
      "Sales Engineer"
    ],
    "icon": "💼",
    "familyId": "industrie-mecanique",
    "domain": "Commerce & Ingénierie Commerciale",
    "domainId": "commerce-technico-commercial-indus",
    "subdomain": "Vente de solutions industrielles complexes & B2B",
    "shortDescription": "Conseille et vend des solutions techniques complexes, machines spéciales et équipements industriels de haute technologie aux entreprises.",
    "longDescription": "L'ingénieur commercial industriel possède une double casquette rare et précieuse : il parle le langage technique des ingénieurs d'études et le langage financier des directeurs d'usine. Il analyse les besoins de production des clients, élabore des propositions techniques et financières sur mesure chiffrées en millions d'euros, négocie les contrats de vente et accompagne le client jusqu'à la mise en service.",
    "missions": [
      "Prospecter de nouveaux clients industriels et développer le portefeuille d'affaires",
      "Analyser les cahiers des charges techniques clients et réaliser les études de faisabilité avant-vente",
      "Coordonner le chiffrage technique et financier des solutions avec les bureaux d'études et les méthodes",
      "Présenter et soutenir l'offre technique et commerciale devant les comités de direction clients",
      "Négocier les conditions contractuelles, les jalons de paiement et superviser le déroulement du projet"
    ],
    "workEnvironment": [
      "Bureaux d'ingénierie et constructeurs de biens d'équipement",
      "Déplacements fréquents chez les clients industriels en France et à l'international",
      "Événements et salons professionnels spécialisés (Global Industrie, Hannover Messe)"
    ],
    "typicalDay": [
      {
        "time": "08:30",
        "desc": "Préparation de la soutenance commerciale d'une ligne d'assemblage robotisée de 2,5 millions d'euros"
      },
      {
        "time": "10:30",
        "desc": "Réunion technique avec le bureau d'études pour valider le coût des outillages sur mesure"
      },
      {
        "time": "12:30",
        "desc": "Déjeuner d'affaires avec le directeur d'usine d'un client grand compte"
      },
      {
        "time": "14:30",
        "desc": "Visite d'atelier client pour relever sur place les contraintes d'encombrement au sol d'une future machine"
      },
      {
        "time": "17:00",
        "desc": "Mise à jour du CRM (Salesforce) et calcul des prévisions de chiffre d'affaires trimestriel"
      }
    ],
    "companyRole": "Apporteur d'affaires stratégique de l'entreprise industrielle, transformant l'expertise technique interne en contrats rentables.",
    "skills": {
      "technical": [
        "Connaissance approfondie des technologies industrielles (mécanique, automatisme, robotique, électricité)",
        "Chiffrage de projets industriels complexes et calcul de ROI pour le client",
        "Techniques de vente consultative B2B et négociation de grands comptes",
        "Droit des contrats de vente d'équipements industriels"
      ],
      "human": [
        "Excellente écoute et capacité de persuasion naturelle",
        "Aisance relationnelle à tous les niveaux hiérarchiques",
        "Persévérance sur des cycles de vente longs (6 à 18 mois)",
        "Dynamisme, autonomie et enthousiasme"
      ],
      "tools": [
        "CRM (Salesforce, HubSpot)",
        "Logiciels de devis et configurateurs de produits industriels (CPQ)",
        "Outils de présentation commerciale percutante"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "Bac +2 / BUT",
          "title": "BUT Génie Mécanique ou BUT GEII ou BTS CRSA",
          "desc": "Socle technique obligatoire pour comprendre les machines."
        },
        {
          "step": "Bac +5 (Master / Diplôme d'École)",
          "title": "Diplôme d'Ingénieur complété par un Master en Commerce B2B ou Master Ingénierie d'Affaires",
          "desc": "Double compétence ingénieur-commerciale très recherchée sur le marché."
        }
      ],
      "schools": [
        {
          "name": "Arts et Métiers ENSAM / INSA — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "ESTA Belfort (École supérieure des technologies et des affaires) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "École Supérieure Polytechnique de Dakar (ESP - UCAD) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "BEM Management School Dakar — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "Certifications professionnelles en négociation grands comptes (Miller Heiman, SPIN Selling)"
      ],
      "france": [
        "Arts et Métiers ENSAM / INSA — France",
        "ESTA Belfort (École supérieure des technologies et des affaires) — France"
      ],
      "senegal": [
        "École Supérieure Polytechnique de Dakar (ESP - UCAD) — Sénégal",
        "BEM Management School Dakar — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Machines spéciales & Robotique",
        "Énergie & Électrotechnique (Schneider, Siemens)",
        "Aéronautique & Défense",
        "Logiciels industriels (CAO, ERP, MES)",
        "Chimie & Procédés"
      ],
      "employerTypes": [
        "Constructeurs d'équipements industriels",
        "Éditeurs de logiciels industriels",
        "Entreprises d'ingénierie et de conseil en technologies"
      ],
      "evolution": [
        "Responsable des ventes régionales",
        "Directeur commercial industriel",
        "Directeur général de filiale"
      ],
      "pros": [
        "Rémunération parmi les plus élevées de l'industrie (salaire fixe + commissions déplafonnées)",
        "Grande liberté d'action et autonomie",
        "Métier passionnant alliant technique de pointe et relations humaines"
      ],
      "cons": [
        "Pression permanente sur les objectifs de chiffre d'affaires, déplacements fréquents"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Construire un pitch commercial de 5 minutes et un argumentaire de vente chiffré pour convaincre un directeur d'usine d'acheter un robot collaboratif réduisant les TMS.",
      "steps": [
        "Structurer l'argumentaire selon la méthode CAP (Caractéristiques, Avantages, Preuves)",
        "Calculer le temps de retour sur investissement (ROI en mois)",
        "Anticiper 3 objections majeures du client et préparer les réponses"
      ],
      "freeResources": [
        "Livres de référence SPIN Selling (Neil Rackham)",
        "Revue Action Commerciale"
      ]
    },
    "aiImpact": {
      "summary": "L'IA assiste l'ingénieur commercial par la génération automatique de propositions techniques personnalisées et l'analyse prédictive des intentions d'achat des industriels.",
      "positiveImpacts": [
        "Chiffrage ultra-rapide d'équipements complexes par configurateur intelligent",
        "Détection automatique d'appels d'offres publics et privés pertinents"
      ],
      "risksAndChallenges": [
        "La signature de contrats à plusieurs millions d'euros repose à 100% sur la confiance humaine"
      ],
      "recommendedSkills": [
        "Utilisation d'outils de prospection intelligente et de vente augmentée"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, les ingénieurs commerciaux industriels sont très recherchés par les concessionnaires de machines agricoles, de groupes électrogènes (Caterpillar/Tractafric, SDMO) et d'équipements de traitement d'eau pour remporter les appels d'offres étatiques et privés.",
      "westAfricaOpportunities": "Rémunérations très attractives dans toute l'Afrique de l'Ouest pour les profils bilingues capables de vendre des solutions industrielles aux grands chantiers miniers et pétroliers.",
      "localChampions": [
        "Tractafric Equipment Sénégal",
        "Manutention Africaine (JA Delmas)",
        "Sop Senegalaise d'Outils et de Pieces",
        "BIA Sénégal"
      ]
    },
    "salary": "🇫🇷 France : 40 000 - 90 000 € brut/an • 🇸🇳 Sénégal : 650 000 - 2 800 000 FCFA net/mois",
    "connectedFamilies": [
      "commerce-vente",
      "droit-management"
    ],
    "relatedJobs": [
      "acheteur-industriel",
      "ingenieur-mecanique",
      "directeur-site-industriel"
    ],
    "sources": [
      {
        "organization": "L'Étudiant",
        "title": "Fiche métier : Ingénieur commercial",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie/ingenieur-e-commercial-e.html",
        "type": "metier"
      },
      {
        "organization": "Onisep",
        "title": "Ingénieur / Ingénieure technico-commercial",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/ingenieur-ingenieure-technico-commercial-technico-commerciale",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Dans la vente d'équipements industriels complexes, un seul contrat négocié par un ingénieur d'affaires peut dépasser les 10 millions d'euros et mobiliser l'usine pendant plus de 18 mois de travail.",
      "pourquoi": "Le client n'achète pas un simple produit sur étagère : il achète une solution sur mesure dont dépend la survie de sa propre production.",
      "a_retenir": "L'ingénieur commercial industriel est le moteur qui alimente le carnet de commandes de l'usine."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant (fixe + variable pouvant dépasser 100k€ pour experts)",
        "range": "40 000 - 90 000 € brut/an",
        "junior": "40 000 € brut/an",
        "senior": "90 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets constatés (fixe + commissions) dans la vente d'équipements industriels lourds",
        "range": "650 000 - 2 800 000 FCFA net/mois",
        "junior": "650 000 FCFA net/mois",
        "senior": "2 800 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Conseille et vend des solutions techniques complexes, machines spéciales et équipements industriels de haute technologie aux entreprises.",
    "level": "Bac +5 (Diplôme d'Ingénieur / Master)"
  },
  {
    "id": "ingenieur-rd-industriel",
    "slug": "ingenieur-rd-industriel",
    "title": "Ingénieur R&D / Recherche & Développement Industrielle",
    "aliases": [
      "Ingénieur recherche et développement",
      "Ingénieur innovation industrielle",
      "R&D Engineer"
    ],
    "icon": "🔬",
    "familyId": "industrie-mecanique",
    "domain": "Recherche & Développement",
    "domainId": "rd-recherche-industrielle",
    "subdomain": "Innovation technologique, Nouveaux matériaux & Ruptures",
    "shortDescription": "Invente et met au point les technologies, matériaux et produits industriels de demain pour anticiper les besoins du marché et déposer des brevets.",
    "longDescription": "L'ingénieur R&D explore le futur de l'industrie. Au sein des laboratoires d'entreprises et centres de recherche appliquée, il imagine les ruptures technologiques : nouveaux alliages métalliques plus légers, batteries de nouvelle génération, moteurs électriques sans terres rares, polymères recyclables à l'infini. Il conçoit des preuves de concept, teste des prototypes de rupture et protège les innovations par le dépôt de brevets industriels.",
    "missions": [
      "Conduire des recherches appliquées pour lever des verrous scientifiques et technologiques",
      "Concevoir et tester des démonstrateurs et prototypes de rupture en laboratoire",
      "Réaliser une veille technologique et scientifique mondiale permanente (brevets, publications scientifiques)",
      "Déposer et défendre des brevets d'invention en collaboration avec les juristes en propriété industrielle",
      "Piloter des projets de recherche collaboratifs avec des universités et centres de recherche publics (CNRS, CEA)"
    ],
    "workEnvironment": [
      "Centres de recherche et développement (R&D)",
      "Laboratoires d'essais technologiques avancés",
      "Environnement stimulant dédié à la créativité et à l'innovation"
    ],
    "typicalDay": [
      {
        "time": "08:30",
        "desc": "Veille scientifique sur les dernières publications de la base brevets de l'INPI et de l'EPO"
      },
      {
        "time": "10:00",
        "desc": "Expérimentation en laboratoire sur le vieillissement thermique accéléré d'un nouveau composite biosourcé"
      },
      {
        "time": "12:30",
        "desc": "Déjeuner d'échanges avec des chercheurs universitaires invités"
      },
      {
        "time": "14:00",
        "desc": "Analyse au microscope électronique à balayage (MEB) des micro-structures de fracture après essai de traction"
      },
      {
        "time": "16:30",
        "desc": "Rédaction d'une demande de brevet international avec le cabinet de conseil en propriété intellectuelle"
      }
    ],
    "companyRole": "Pionnier scientifique assurant l'avance technologique et la compétitivité future de l'entreprise sur les 10 prochaines années.",
    "skills": {
      "technical": [
        "Démarche scientifique expérimentale rigoureuse et protocole d'essais",
        "Science des matériaux avancée (métallurgie, nanomatériaux, polymères, composites)",
        "Propriété intellectuelle et rédaction de brevets industriels",
        "Modélisation numérique et traitement statistique de données expérimentales"
      ],
      "human": [
        "Créativité intellectuelle et curiosité sans limites",
        "Patience et persévérance face aux échecs expérimentaux",
        "Rigueur méthodologique et esprit critique",
        "Capacité à transformer un concept théorique en produit industriel"
      ],
      "tools": [
        "Instruments de caractérisation des matériaux (MEB, diffraction X, spectromètre)",
        "Bancs d'essais mécaniques et thermiques",
        "Logiciels de gestion de brevets (Orbit, Espacenet)",
        "Logiciels de modélisation scientifique (MATLAB, Python)"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "Bac +5 (Diplôme d'Ingénieur / Master Recherche)",
          "title": "Diplôme d'Ingénieur de Grande École ou Master Sciences de l'Ingénieur / Matériaux",
          "desc": "Fondements scientifiques solides en physique, chimie et mécanique."
        },
        {
          "step": "Bac +8 (Doctorat / Ph.D.)",
          "title": "Doctorat en Sciences de l'Ingénieur (souvent en thèse CIFRE en entreprise)",
          "desc": "Spécialisation d'excellence dans un domaine de recherche appliquée de pointe."
        }
      ],
      "schools": [
        {
          "name": "École Polytechnique (Institut Polytechnique de Paris) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "ESPCI Paris / Chimie ParisTech / Arts et Métiers — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "École Supérieure Polytechnique de Dakar (ESP - UCAD) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Amadou Mahtar Mbow (UAM Diamniadio) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "Thèse de Doctorat en Sciences industrielles",
        "Certifications en Propriété Intellectuelle (CEIPI)"
      ],
      "france": [
        "École Polytechnique (Institut Polytechnique de Paris) — France",
        "ESPCI Paris / Chimie ParisTech / Arts et Métiers — France"
      ],
      "senegal": [
        "École Supérieure Polytechnique de Dakar (ESP - UCAD) — Sénégal",
        "Université Amadou Mahtar Mbow (UAM Diamniadio) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Aéronautique & Spatial",
        "Automobile (Véhicules autonomes, hydrogène)",
        "Électronique & Semi-conducteurs",
        "Chimie & Matériaux innovants",
        "Énergie & Nucléaire"
      ],
      "employerTypes": [
        "Grands centres de R&D d'entreprises mondiales",
        "Instituts de recherche technologique (IRT, CEA, CNRS)",
        "Start-ups technologiques de rupture (DeepTech)"
      ],
      "evolution": [
        "Chef de projet R&D",
        "Directeur de la recherche et de l'innovation / CTO",
        "Expert scientifique émérite de groupe industriel"
      ],
      "pros": [
        "Liberté de recherche et d'exploration scientifique",
        "Fierté d'inventer des technologies qui marqueront l'histoire",
        "Reconnaissance par les brevets et les publications"
      ],
      "cons": [
        "Cycles de recherche longs pouvant aboutir à des impasses technologiques"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Explorer la base de brevets gratuite Espacenet de l'Office Européen des Brevets pour analyser la dernière innovation brevetée par un grand groupe industriel dans le domaine des batteries.",
      "steps": [
        "Rechercher un brevet par mot-clé technologique",
        "Lire le texte des 'revendications' (claims) définissant la nouveauté",
        "Identifier le problème technique que le brevet résout"
      ],
      "freeResources": [
        "Espacenet (Office Européen des Brevets)",
        "Google Patents",
        "Coursera Introduction to Patent Law"
      ]
    },
    "aiImpact": {
      "summary": "L'IA générative scientifique accélère la découverte de nouveaux matériaux (matériaux découverts par IA) et la formulation de molécules en quelques jours au lieu de plusieurs décennies.",
      "positiveImpacts": [
        "Exploration prédictive de millions d'alliages métalliques stables",
        "Synthèse automatique de milliers d'articles scientifiques par des agents d'IA"
      ],
      "risksAndChallenges": [
        "La synthèse en laboratoire et la validation expérimentale physique restent indispensables"
      ],
      "recommendedSkills": [
        "Utilisation de modèles d'IA pour la découverte de matériaux (Material Informatics)"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, la R&D industrielle prend de l'ampleur autour du Pôle Urbain de Diamniadio et des laboratoires de l'ESP/UAM, notamment pour la valorisation des biomasses locales (typha, coques d'arachide en biocarburants) et des matériaux de construction géopolymères durables.",
      "westAfricaOpportunities": "Recherche appliquée dynamique dans les technologies solaires tropicalisées et l'agro-transformation locale.",
      "localChampions": [
        "Centre National de Recherches Agronomiques (ISRA)",
        "Cités des Savoirs de Diamniadio",
        "Laboratoires R&D des ICS",
        "Institut Pasteur de Dakar"
      ]
    },
    "salary": "🇫🇷 France : 40 000 - 78 000 € brut/an • 🇸🇳 Sénégal : 650 000 - 2 400 000 FCFA net/mois",
    "connectedFamilies": [
      "sciences-biotech",
      "numerique-ia",
      "environnement-developpement-durable"
    ],
    "relatedJobs": [
      "ingenieur-calcul",
      "ingenieur-mecanique",
      "ingenieur-fabrication-additive"
    ],
    "sources": [
      {
        "organization": "L'Étudiant",
        "title": "Fiche métier : Ingénieur R&D",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie/ingenieur-de-recherche-developpement-2.html",
        "type": "metier"
      },
      {
        "organization": "Onisep",
        "title": "Ingénieur / Ingénieure recherche et développement",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/ingenieur-ingenieure-recherche-et-developpement-en-industrie",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "En 2023, plus de 3,5 millions de demandes de brevets ont été déposées dans le monde par les ingénieurs R&D, l'Asie et l'Europe représentant la majorité des innovations industrielles.",
      "pourquoi": "Un seul brevet de rupture bien protégé peut assurer le monopole et la rentabilité d'une entreprise industrielle pendant 20 ans.",
      "a_retenir": "L'ingénieur R&D transforme les découvertes de la science en richesse industrielle."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant & baromètres R&D (Crédit Impôt Recherche)",
        "range": "40 000 - 78 000 € brut/an",
        "junior": "40 000 € brut/an",
        "senior": "78 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets dans les centres de recherche appliquée et grands projets industriels",
        "range": "650 000 - 2 400 000 FCFA net/mois",
        "junior": "650 000 FCFA net/mois",
        "senior": "2 400 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Invente et met au point les technologies, matériaux et produits industriels de demain pour anticiper les besoins du marché et déposer des brevets.",
    "level": "Bac +5 (Diplôme d'Ingénieur / Master)"
  },
  {
    "id": "technicien-jumeau-numerique",
    "slug": "technicien-jumeau-numerique",
    "title": "Technicien Jumeau Numérique / Virtual Commissioning",
    "aliases": [
      "Technicien digital twin",
      "Spécialiste simulation usine 4.0",
      "Virtual Commissioning Technician"
    ],
    "icon": "🥽",
    "familyId": "industrie-mecanique",
    "domain": "Jumeau Numérique & Simulation",
    "domainId": "jumeau-numerique-simulation-indus",
    "subdomain": "Jumeau numérique, Virtual commissioning & Modélisation 3D temps réel",
    "shortDescription": "Crée la réplique virtuelle interactive en 3D d'une machine ou d'une usine entière pour tester les programmes d'automatisme et anticiper les pannes.",
    "longDescription": "Le technicien jumeau numérique est un acteur central de l'Industrie 4.0. Il connecte la maquette CAO 3D d'une ligne de fabrication au programme réel de l'automate industriel (virtual commissioning). Il peut ainsi tester virtuellement tout le fonctionnement de l'usine avant même qu'elle ne soit construite, corriger les bugs sans risque de casse mécanique et surveiller en temps réel la santé de l'usine réelle grâce aux flux de données IoT.",
    "missions": [
      "Construire le modèle numérique 3D cinématique et dynamique des machines sous logiciels de jumeau numérique",
      "Connecter le modèle virtuel aux automates réels ou émulés via des protocoles industriels (OPC-UA, SIMIT)",
      "Valider virtuellement les trajectoires des robots et les cycles de fabrication avant la construction physique",
      "Former les opérateurs d'atelier en réalité virtuelle ou augmentée sur la réplique numérique exacte de l'usine",
      "Alimenter le jumeau numérique avec les données réelles des capteurs d'usine pour la maintenance prédictive"
    ],
    "workEnvironment": [
      "Bureaux d'ingénierie 4.0",
      "Salles immersives de réalité virtuelle",
      "Ateliers d'intégration de systèmes industriels"
    ],
    "typicalDay": [
      {
        "time": "08:30",
        "desc": "Importation d'une géométrie CAO d'îlot robotisé dans le logiciel de jumeau numérique Siemens Tecnomatix"
      },
      {
        "time": "10:30",
        "desc": "Liaison des variables d'entrées/sorties du modèle 3D avec l'automate Siemens virtuel sous SIMIT"
      },
      {
        "time": "12:30",
        "desc": "Déjeuner avec les automaticiens et développeurs IoT"
      },
      {
        "time": "14:00",
        "desc": "Simulation d'un cycle complet d'emballage en temps réel et détection d'une collision virtuelle de pince"
      },
      {
        "time": "16:30",
        "desc": "Session de formation d'un futur conducteur de ligne équipé d'un casque de réalité virtuelle"
      }
    ],
    "companyRole": "Pionnier de la simulation intégrale, éliminant les aléas de mise en service sur site et divisant par deux le temps de démarrage des usines.",
    "skills": {
      "technical": [
        "Logiciels de jumeau numérique (Siemens Tecnomatix Process Simulate, Dassault 3DEXPERIENCE, SIMIT)",
        "Mise en service virtuelle (Hardware-in-the-Loop - HiL et Software-in-the-Loop - SiL)",
        "Communication industrielle temps réel (OPC-UA, MQTT, PROFINET)",
        "Bases d'automatisme et de robotique industrielle"
      ],
      "human": [
        "Goût prononcé pour les technologies immersives et les jeux de simulation",
        "Rigueur de modélisation mathématique et physique",
        "Esprit novateur et curiosité technologique",
        "Pédagogie pour accompagner les équipes de terrain"
      ],
      "tools": [
        "Siemens Tecnomatix / SIMIT",
        "Dassault DELMIA",
        "Unity Industry / Unreal Engine pour l'industrie",
        "Casques de réalité virtuelle (Meta Quest Pro, HTC Vive Focus)"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "Bac +2 (BTS / BUT)",
          "title": "BTS Conception et Réalisation de Systèmes Automatiques (CRSA) ou BUT GEII",
          "desc": "Bases de l'automatisme, de l'électricité et de la CAO industrielle."
        },
        {
          "step": "Bac +3 / Licence Professionnelle",
          "title": "Licence Professionnelle Métiers de l'Industrie 4.0 / Jumeau Numérique ou BUT GMP parcours simulation",
          "desc": "Spécialisation avancée en modélisation virtuelle, simulation de flux et réalité augmentée."
        }
      ],
      "schools": [
        {
          "name": "IUT et Universités proposant des licences Industrie 4.0 — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "Campus des Métiers et des Qualifications Industrie du Futur — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "École Supérieure Polytechnique de Dakar (ESP) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Institut Supérieur d'Enseignement Professionnel (ISEP Diamniadio) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "Certifications Siemens Digital Enterprise / Tecnomatix Associate"
      ],
      "france": [
        "IUT et Universités proposant des licences Industrie 4.0 — France",
        "Campus des Métiers et des Qualifications Industrie du Futur — France"
      ],
      "senegal": [
        "École Supérieure Polytechnique de Dakar (ESP) — Sénégal",
        "Institut Supérieur d'Enseignement Professionnel (ISEP Diamniadio) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Automobile & Gigafactories de batteries",
        "Aéronautique & Spatial",
        "Agroalimentaire automatisé",
        "Logistique & Entrepôts connectés"
      ],
      "employerTypes": [
        "Intégrateurs de systèmes automatisés",
        "Grands constructeurs industriels",
        "Sociétés de conseil en transformation digitale (Capgemini, Alten)"
      ],
      "evolution": [
        "Ingénieur jumeau numérique et simulation",
        "Chef de projet Industrie 4.0",
        "Architecte d'usines intelligentes (Smart Factory Lead)"
      ],
      "pros": [
        "Métier d'avenir ultra-moderne au carrefour du jeu vidéo, de l'IA et de l'usine",
        "Forte rareté des profils garantissant une très forte attractivité",
        "Travail dans un univers virtuel captivant"
      ],
      "cons": [
        "Technologies en évolution permanente nécessitant une auto-formation continue"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Créer sous Unity ou Blender une simulation physique d'un petit bras robotisé saisissant une pièce sur un tapis roulant déclenché par un capteur virtuel.",
      "steps": [
        "Importer les modèles 3D avec leurs centres de masse",
        "Ajouter les composants de physique (Rigidbodies, colliders)",
        "Scripter le comportement séquentiel en C# ou Python"
      ],
      "freeResources": [
        "Unity Learn Industry Tutorials",
        "Documentation Siemens SIMIT en ligne",
        "Chaînes YouTube sur le Virtual Commissioning"
      ]
    },
    "aiImpact": {
      "summary": "L'IA transforme le jumeau numérique en jumeau cognitif capable de simuler des scénarios d'optimisation prédictive en autonomie complète.",
      "positiveImpacts": [
        "Prédiction des goulots d'étranglement avant qu'ils ne se produisent dans l'usine réelle",
        "Apprentissage des trajectoires robots par renforcement virtuel avant déploiement physique"
      ],
      "risksAndChallenges": [
        "Nécessité de maintenir le jumeau numérique synchronisé avec les modifications physiques d'atelier"
      ],
      "recommendedSkills": [
        "Intégration d'algorithmes de Machine Learning dans les moteurs de simulation 3D"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, la modélisation par jumeau numérique commence à être utilisée pour concevoir les futures unités industrielles de la zone franche de Diamniadio et pour simuler le trafic et la maintenance des rames du TER de Dakar.",
      "westAfricaOpportunities": "Émergence de bureaux de conseil en ingénierie 4.0 à Dakar et Abidjan pour concevoir des usines neuves sans risque d'erreur d'investissement.",
      "localChampions": [
        "SETER (TER de Dakar)",
        "Senelec (Projet de réseau intelligent Smart Grid)",
        "Dakar Tech Hub"
      ]
    },
    "salary": "🇫🇷 France : 28 000 - 50 000 € brut/an • 🇸🇳 Sénégal : 350 000 - 1 300 000 FCFA net/mois",
    "connectedFamilies": [
      "numerique-ia",
      "aeronautique-spatial"
    ],
    "relatedJobs": [
      "roboticien-industriel",
      "automaticien-industriel",
      "dessinateur-industriel"
    ],
    "sources": [
      {
        "organization": "L'Étudiant",
        "title": "Fiche métier : Technicien jumeau numérique",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie/technicien-ou-technicienne-jumeau-numerique.html",
        "type": "metier"
      },
      {
        "organization": "Onisep",
        "title": "Métiers de l'Industrie 4.0 : La simulation numérique",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/technicien-technicienne-de-bureau-d-etudes-en-mecanique",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Grâce à la mise en service virtuelle par jumeau numérique, le temps passé par les ingénieurs sur le chantier réel pour démarrer une nouvelle ligne d'usine est réduit de 75%.",
      "pourquoi": "Tous les bugs informatiques et les collisions d'axes de robots ont été détectés et corrigés dans l'ordinateur des mois avant la pose de la première brique de l'usine.",
      "a_retenir": "Le jumeau numérique permet de tester l'impossible sans jamais rien casser."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant",
        "range": "28 000 - 50 000 € brut/an",
        "junior": "28 000 € brut/an",
        "senior": "50 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets dans les intégrateurs technologiques et projets de simulation",
        "range": "350 000 - 1 300 000 FCFA net/mois",
        "junior": "350 000 FCFA net/mois",
        "senior": "1 300 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Crée la réplique virtuelle interactive en 3D d'une machine ou d'une usine entière pour tester les programmes d'automatisme et anticiper les pannes.",
    "level": "Bac +2 à Bac +3 (BTS / BUT / Licence pro)"
  },
  {
    "id": "ingenieur-fabrication-additive",
    "slug": "ingenieur-fabrication-additive",
    "title": "Ingénieur en Fabrication Additive / Impression 3D Métal",
    "aliases": [
      "Ingénieur impression 3D industrielle",
      "Concepteur fabrication additive",
      "Additive Manufacturing Engineer"
    ],
    "icon": "🖨️",
    "familyId": "industrie-mecanique",
    "domain": "Fabrication Additive",
    "domainId": "fabrication-additive-impression3d",
    "subdomain": "Impression 3D métal, Fusion laser sur lit de poudre (SLM) & DfAM",
    "shortDescription": "Conçoit et fabrique des pièces métalliques ou polymères ultra-légères et complexes par empilement de couches de poudre fusionnées au laser.",
    "longDescription": "L'ingénieur en fabrication additive révolutionne la manière de fabriquer les objets. Au lieu de tailler dans un bloc de métal (usinage soustractif), il dépose la matière couche par couche (addition de poudre métallique ou polymère fusionnée par faisceau laser ou faisceau d'électrons). Grâce au Design for Additive Manufacturing (DfAM) et à l'optimisation topologique, il crée des pièces aux formes organiques impossibles à usiner, allégeant les avions et les fusées de dizaines de kilogrammes.",
    "missions": [
      "Concevoir des pièces optimisées selon les règles du DfAM (Design for Additive Manufacturing)",
      "Réaliser l'optimisation topologique pour éliminer la matière inutile tout en conservant la résistance mécanique",
      "Programmer et paramétrer les machines d'impression 3D métal (SLM / DMLS, EBM, WAAM) ou polymères (SLS)",
      "Définir les supports de fabrication et les stratégies de balayage laser pour limiter les déformations thermiques",
      "Piloter les traitements thermiques post-impression (détensionnement, compression isostatique à chaud HIP) et l'usinage de finition"
    ],
    "workEnvironment": [
      "Centres d'ingénierie aéronautique et spatiale",
      "Ateliers d'impression 3D industrielle sous atmosphère contrôlée (argon)",
      "Laboratoires de métallurgie des poudres"
    ],
    "typicalDay": [
      {
        "time": "08:30",
        "desc": "Ouverture d'une machine SLM après 24 heures de fabrication laser pour dépoudrer une série d'injecteurs de fusée"
      },
      {
        "time": "10:30",
        "desc": "Session d'optimisation topologique sous Altair Inspire pour alléger un bras de suspension en titane de 45%"
      },
      {
        "time": "12:30",
        "desc": "Déjeuner avec les métallurgistes et ingénieurs calcul"
      },
      {
        "time": "14:00",
        "desc": "Contrôle tomographique aux rayons X d'une pièce imprimée pour vérifier l'absence de porosités internes"
      },
      {
        "time": "16:30",
        "desc": "Lancement d'une nouvelle production de pièces en superalliage Inconel 718 pour turbine à gaz"
      }
    ],
    "companyRole": "Rénovateur des procédés manufacturiers, brisant les limites de la géométrie traditionnelle pour créer les pièces les plus légères et performantes de l'industrie.",
    "skills": {
      "technical": [
        "Conception orientée fabrication additive (DfAM) et optimisation topologique",
        "Métallurgie des poudres et procédés laser (SLM, DMLS, SLS, WAAM)",
        "Gestion des contraintes thermiques résiduelles et des supports de fabrication",
        "Contrôle non destructif tomographique et post-traitement d'usinage"
      ],
      "human": [
        "Créativité géométrique hors des schémas conventionnels",
        "Rigueur expérimentale et scientifique",
        "Curiosité pour les nouveaux matériaux",
        "Capacité à convaincre les concepteurs traditionnels"
      ],
      "tools": [
        "Altair Inspire / OptiStruct",
        "Materialise Magics",
        "EOS Print / SLM Solutions",
        "Siemens NX Additive Manufacturing",
        "Imprimantes 3D métal professionnelles (EOS, SLM Solutions, Trumpf)"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "Bac +2 / BUT",
          "title": "BUT Génie Mécanique et Productique ou BUT Science et Génie des Matériaux",
          "desc": "Bases de résistance des matériaux, métallurgie et CAO."
        },
        {
          "step": "Bac +5 (Diplôme d'Ingénieur / Master)",
          "title": "Diplôme d'Ingénieur en Matériaux, Mécanique ou Génie Industriel avec spécialisation Fabrication Additive",
          "desc": "Conception avancée DfAM, physique des lasers et caractérisation métallurgique des poudres."
        }
      ],
      "schools": [
        {
          "name": "Arts et Métiers ENSAM (Chaire Fabrication Additive) — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "École des Mines de Paris / Mines Saint-Étienne — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "École Supérieure Polytechnique de Dakar (ESP) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "Université Amadou Mahtar Mbow (UAM Diamniadio) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "Certifications éditeurs de logiciels DfAM (Materialise Magics Certified Professional)"
      ],
      "france": [
        "Arts et Métiers ENSAM (Chaire Fabrication Additive) — France",
        "École des Mines de Paris / Mines Saint-Étienne — France"
      ],
      "senegal": [
        "École Supérieure Polytechnique de Dakar (ESP) — Sénégal",
        "Université Amadou Mahtar Mbow (UAM Diamniadio) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Aéronautique & Spatial (pièces de moteurs, satellites)",
        "Médical (implants orthopédiques et dentaires sur mesure)",
        "Sport automobile & F1",
        "Défense & Énergie",
        "Outillage industriel"
      ],
      "employerTypes": [
        "Constructeurs aérospatiaux (ArianeGroup, Safran, Airbus)",
        "Fabricants d'implants médicaux",
        "Centres de sous-traitance en fabrication additive"
      ],
      "evolution": [
        "Responsable du pôle fabrication additive",
        "Directeur technique matériaux et procédés avancés",
        "Consultant expert international en DfAM"
      ],
      "pros": [
        "Métier à la frontière absolue de la science-fiction industrielle",
        "Liberté de création de formes géométriques organiques fascinantes",
        "Très forte demande dans les secteurs de pointe"
      ],
      "cons": [
        "Coût encore élevé des poudres métalliques et des machines de fusion laser"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Utiliser un logiciel de conception intégrant le design génératif (ex: Fusion 360) pour générer une pièce optimisée topologiquement et la faire imprimer en 3D plastique ou résine.",
      "steps": [
        "Définir les zones à conserver (points de fixation, passage d'arbres)",
        "Appliquer les efforts et les conditions limites",
        "Lancer le calcul d'optimisation topologique et observer la forme biomimétique générée"
      ],
      "freeResources": [
        "Tutoriels Autodesk Generative Design",
        "Plateforme 3D Hubs Additive Manufacturing Guide",
        "Vidéos de l'Institut Carnot M.I.C.H.E.L.A.N.G.E."
      ]
    },
    "aiImpact": {
      "summary": "L'IA pilote le generative design et ajuste la puissance du laser milliseconde par milliseconde grâce à des caméras thermiques embarquées analysant le bain de fusion (melt pool monitoring).",
      "positiveImpacts": [
        "Zéro porosité grâce à la correction en temps réel du laser",
        "Conception automatique de structures lattices ultra-légères inspirées de la structure des os humains"
      ],
      "risksAndChallenges": [
        "La maîtrise métallurgique de la solidification rapide sous laser reste un défi physique complexe"
      ],
      "recommendedSkills": [
        "Conception d'architectures lattices et maîtrise du monitoring thermique par IA"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, la fabrication additive est un outil extraordinaire pour fabriquer sur place des pièces de rechange introuvables ou obsolètes pour les hôpitaux, les usines agroalimentaires et le matériel agricole, évitant des mois d'attente d'importation.",
      "westAfricaOpportunities": "Création de plateformes d'impression 3D métallique à Dakar et Abidjan pour la maintenance industrielle rapide.",
      "localChampions": [
        "FabLab Defko Ak Nièp (Dakar)",
        "ESP FabLab",
        "ISEP Diamniadio",
        "Plateforme d'Innovation de Diamniadio"
      ]
    },
    "salary": "🇫🇷 France : 39 000 - 75 000 € brut/an • 🇸🇳 Sénégal : 650 000 - 2 300 000 FCFA net/mois",
    "connectedFamilies": [
      "aeronautique-spatial",
      "sante-biomedical",
      "numerique-ia"
    ],
    "relatedJobs": [
      "ingenieur-calcul",
      "ingenieur-mecanique",
      "dessinateur-industriel"
    ],
    "sources": [
      {
        "organization": "L'Étudiant",
        "title": "Fiche métier : Ingénieur en fabrication additive",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie/ingenieur-e-en-fabrication-additive.html",
        "type": "metier"
      },
      {
        "organization": "Onisep",
        "title": "Ingénieur / Ingénieure procédés et matériaux",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/ingenieur-ingenieure-materiaux",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Le moteur de fusée Rutherford de Rocket Lab est le premier moteur spatial au monde dont toutes les pièces primaires (chambre de combustion, injecteurs, pompes) sont entièrement imprimées en 3D en 24 heures.",
      "pourquoi": "La fabrication additive permet d'intégrer des canaux de refroidissement hélicoïdaux directement à l'intérieur des parois de la chambre de combustion, ce qui est strictement impossible par usinage conventionnel.",
      "a_retenir": "L'ingénieur en fabrication additive façonne l'industrie du futur couche par couche."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant & baromètres de la métallurgie",
        "range": "39 000 - 75 000 € brut/an",
        "junior": "39 000 € brut/an",
        "senior": "75 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets dans les centres de prototypage rapide et bureaux d'ingénierie de pointe",
        "range": "650 000 - 2 300 000 FCFA net/mois",
        "junior": "650 000 FCFA net/mois",
        "senior": "2 300 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Conçoit et fabrique des pièces métalliques ou polymères ultra-légères et complexes par empilement de couches de poudre fusionnées au laser.",
    "level": "Bac +5 (Diplôme d'Ingénieur / Master)"
  },
  {
    "id": "directeur-site-industriel",
    "slug": "directeur-site-industriel",
    "title": "Directeur d'Usine / Responsable de Site Industriel",
    "aliases": [
      "Directeur de site industriel",
      "Directeur d'établissement industriel",
      "Plant Manager"
    ],
    "icon": "🏢",
    "familyId": "industrie-mecanique",
    "domain": "Management Industriel & Direction",
    "domainId": "management-industriel-direction",
    "subdomain": "Direction d'usine, Pilotage stratégique & Dialogue social",
    "shortDescription": "Dirige l'ensemble des activités opérationnelles, humaines, financières et de sécurité d'un site industriel pour atteindre les objectifs stratégiques.",
    "longDescription": "Le directeur d'usine est le capitaine du navire industriel. Véritable chef d'entreprise au sein de son site, il supervise tous les départements : production, maintenance, méthodes, qualité, logistique, sécurité et ressources humaines. Il gère le compte de résultat (P&L) du site, arbitre les investissements machines (CAPEX), veille au dialogue social avec les représentants du personnel et garantit la conformité environnementale et la sécurité de tous les salariés.",
    "missions": [
      "Définir et piloter la stratégie industrielle, les budgets d'exploitation et les investissements du site",
      "Garantir la sécurité absolue des personnes et le respect scrupuleux des normes environnementales (zéro accident)",
      "Superviser les performances de production, de qualité et de respect des délais de livraison clients",
      "Conduire le dialogue social avec les partenaires syndicaux et animer le Comité Social et Économique (CSE)",
      "Incarner la vision de l'entreprise auprès des autorités locales, de l'inspection du travail et des clients stratégiques"
    ],
    "workEnvironment": [
      "Usines de production de 50 à plus de 1 000 salariés",
      "Partage du temps entre les comités de direction et le terrain en atelier",
      "Lourde responsabilité juridique, financière et humaine"
    ],
    "typicalDay": [
      {
        "time": "08:00",
        "desc": "Tournée terrain quotidienne ('Gemba Walk') dans les ateliers pour échanger directement avec les opérateurs et chefs d'équipe"
      },
      {
        "time": "09:30",
        "desc": "Comité de direction de site : analyse du tableau de bord mensuel (TRS, rebuts, coûts de non-qualité, budget)"
      },
      {
        "time": "12:30",
        "desc": "Déjeuner de travail avec le directeur des ressources humaines pour préparer les négociations annuelles obligatoires (NAO)"
      },
      {
        "time": "14:00",
        "desc": "Validation d'un dossier d'investissement CAPEX de 4 millions d'euros pour moderniser une ligne de conditionnement"
      },
      {
        "time": "16:30",
        "desc": "Réception d'un grand client international pour l'audit annuel de renouvellement de contrat"
      }
    ],
    "companyRole": "Leader visionnaire et opérationnel, incarnant l'autorité et la responsabilité globale de l'outil industriel.",
    "skills": {
      "technical": [
        "Gestion d'un compte d'exploitation industriel (P&L, EBITDA, coûts de revient complets)",
        "Maîtrise approfondie des processus de production et du Lean Management",
        "Droit du travail, sécurité industrielle et droit de l'environnement (ICPE)",
        "Management stratégique de projets d'investissements industriels lourds"
      ],
      "human": [
        "Leadership affirmé, courage managérial et capacité à inspirer confiance",
        "Sens aigu du dialogue social, écoute et diplomatie",
        "Sang-froid dans la gestion des crises industrielles majeures",
        "Vision stratégique et sens du résultat"
      ],
      "tools": [
        "Tableaux de bord financiers et de gestion d'usine",
        "Systèmes ERP d'entreprise (SAP, Oracle)",
        "Méthodes de gouvernance industrielle et de management visuel"
      ]
    },
    "studies": {
      "pathway": [
        {
          "step": "Bac +5 (Diplôme d'Ingénieur Généraliste)",
          "title": "Diplôme d'Ingénieur de Grande École (Arts et Métiers, Mines, Centrale, Polytech, INSA)",
          "desc": "Excellente culture technologique globale et scientifique."
        },
        {
          "step": "Expérience professionnelle (10 à 15 ans)",
          "title": "Parcours évolutif complet (Ingénieur Méthodes ➔ Responsable Production ➔ Directeur de Site)",
          "desc": "Éventuel complément par un Executive MBA en management général d'entreprise."
        }
      ],
      "schools": [
        {
          "name": "Arts et Métiers ENSAM — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "École des Mines de Paris / CentraleSupélec — France",
          "country": "France",
          "scope": "France"
        },
        {
          "name": "École Supérieure Polytechnique de Dakar (ESP - UCAD) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        },
        {
          "name": "École Polytechnique de Thiès (EPT) — Sénégal",
          "country": "Sénégal",
          "scope": "Sénégal"
        }
      ],
      "certifications": [
        "Executive MBA d'école de commerce de premier plan",
        "Certifications de gouvernance d'entreprise"
      ],
      "france": [
        "Arts et Métiers ENSAM — France",
        "École des Mines de Paris / CentraleSupélec — France"
      ],
      "senegal": [
        "École Supérieure Polytechnique de Dakar (ESP - UCAD) — Sénégal",
        "École Polytechnique de Thiès (EPT) — Sénégal"
      ]
    },
    "career": {
      "sectors": [
        "Tous secteurs industriels manufacturiers (Automobile, Aéronautique, Métallurgie, Chimie, Agroalimentaire, Pharmacie)"
      ],
      "employerTypes": [
        "Usines de production de groupes industriels",
        "ETI et PME industrielles indépendantes"
      ],
      "evolution": [
        "Directeur des opérations de division (multi-sites)",
        "Directeur industriel de groupe (COO - Chief Operating Officer)",
        "Président du directoire / Directeur Général (CEO)"
      ],
      "pros": [
        "Sommet de la carrière industrielle de terrain",
        "Impact direct et visible sur la vie de centaines de personnes et sur l'économie d'une région",
        "Rémunération de très haut niveau avec participation aux résultats"
      ],
      "cons": [
        "Pression psychologique et charge de travail considérables, engagement total 24h/24"
      ]
    },
    "gettingStarted": {
      "beginnerProject": "Analyser le rapport financier annuel d'un grand groupe industriel coté (ex: Michelin ou Renault) et identifier comment la performance opérationnelle de ses usines influence ses bénéfices nets.",
      "steps": [
        "Rechercher le chiffre d'affaires et la marge opérationnelle industrielle",
        "Identifier les priorités stratégiques : décarbonation, digitalisation, réduction des coûts",
        "Comprendre le rôle du directeur d'usine pour décliner cette stratégie au quotidien"
      ],
      "freeResources": [
        "Revue L'Usine Nouvelle",
        "Harvard Business Review Operations Management Articles"
      ]
    },
    "aiImpact": {
      "summary": "L'IA fournit au directeur d'usine une tour de contrôle prédictive ('Digital Control Tower') centralisant les alertes de production, de qualité et d'énergie pour décider en temps réel.",
      "positiveImpacts": [
        "Visibilité complète et instantanée sur tous les flux de l'usine",
        "Simulations d'impact financier avant de valider un arbitrage de production"
      ],
      "risksAndChallenges": [
        "Le leadership humain, l'écoute des salariés et la négociation syndicale ne seront jamais automatisables"
      ],
      "recommendedSkills": [
        "Pilotage de la transformation digitale et culture du management 4.0"
      ]
    },
    "africaContext": {
      "senegalInsight": "Au Sénégal, les directeurs d'usine sont des figures économiques de premier plan, pilotant les piliers de l'économie nationale (cimenteries de Rufisque/Bargny, usines agroalimentaires de la banlieue dakaroise, raffinerie de la SAR, usines sucrières de Richard-Toll).",
      "westAfricaOpportunities": "Rôle moteur dans l'industrialisation durable et la création d'emplois qualifiés pour la jeunesse en Afrique de l'Ouest.",
      "localChampions": [
        "SOCOCIM Industries",
        "Compagnie Sucrière Sénégalaise (CSS)",
        "Patisen",
        "Société Africaine de Raffinage (SAR)"
      ]
    },
    "salary": "🇫🇷 France : 65 000 - 150 000 € brut/an • 🇸🇳 Sénégal : 1 500 000 - 6 000 000 FCFA net/mois",
    "connectedFamilies": [
      "droit-management",
      "banque-finance-assurances"
    ],
    "relatedJobs": [
      "ingenieur-de-production",
      "responsable-qse-industriel",
      "ingenieur-commercial-industriel"
    ],
    "sources": [
      {
        "organization": "L'Étudiant",
        "title": "Fiche métier : Directeur de site / Responsable de site",
        "url": "https://www.letudiant.fr/metiers/secteur/industrie/directeur-dagence-responsable-de-site.html",
        "type": "metier"
      },
      {
        "organization": "Onisep",
        "title": "Directeur / Directrice d'usine",
        "url": "https://www.onisep.fr/ressources/univers-metier/metiers/directeur-directrice-d-usine",
        "type": "metier"
      }
    ],
    "sourceLetudiant": true,
    "sourceOnisep": true,
    "saviezVous": {
      "statut": "chiffre_cle",
      "fait": "Une grande usine moderne de 1 000 salariés génère indirectement entre 3 000 et 4 000 emplois induits dans son bassin de vie local (fournisseurs, transporteurs, commerces, écoles).",
      "pourquoi": "L'industrie est le secteur qui présente le coefficient multiplicateur d'emplois le plus élevé de toute l'économie.",
      "a_retenir": "Le directeur d'usine ne dirige pas seulement un site : il fait vivre tout un territoire."
    },
    "salaryRanges": {
      "france": {
        "source": "Source : L'Étudiant & cabinets de recrutement de cadres dirigeants (fixe + bonus annuel substantiel)",
        "range": "65 000 - 150 000 € brut/an",
        "junior": "65 000 € brut/an",
        "senior": "150 000 € brut/an"
      },
      "senegal": {
        "source": "Salaires nets constatés pour directeurs de sites industriels majeurs au Sénégal",
        "range": "1 500 000 - 6 000 000 FCFA net/mois",
        "junior": "1 500 000 FCFA net/mois",
        "senior": "6 000 000 FCFA net/mois"
      }
    },
    "simpleDefinition": "Dirige l'ensemble des activités opérationnelles, humaines, financières et de sécurité d'un site industriel pour atteindre les objectifs stratégiques.",
    "level": "Bac +5 (Diplôme d'Ingénieur / Master)"
  }
];

    return {
        DOMAINS: DOMAINS,
        JOBS: JOBS,
        getDomains: function () {
            return DOMAINS.slice();
        },

        getJobs: function () {
            return JOBS.slice();
        },

        getJobById: function (id) {
            if (!id) return null;
            var cleanId = String(id).toLowerCase().trim();
            for (var i = 0; i < JOBS.length; i++) {
                if (JOBS[i].id.toLowerCase() === cleanId || JOBS[i].slug.toLowerCase() === cleanId) {
                    return JOBS[i];
                }
                if (JOBS[i].aliases && Array.isArray(JOBS[i].aliases)) {
                    for (var a = 0; a < JOBS[i].aliases.length; a++) {
                        if (JOBS[i].aliases[a].toLowerCase() === cleanId) {
                            return JOBS[i];
                        }
                    }
                }
            }
            return null;
        },

        getJobsByDomain: function (domainId) {
            if (!domainId) return [];
            var cleanDomain = String(domainId).toLowerCase().trim();
            return JOBS.filter(function (job) {
                return job.domainId && job.domainId.toLowerCase() === cleanDomain;
            });
        },

        getStats: function () {
            return {
                domainsCount: DOMAINS.length,
                jobsCount: JOBS.length,
                familyId: 'industrie-mecanique',
                familyName: 'Industrie, Technologies & Ingénierie',
                sources: ["L'Étudiant", "Onisep"]
            };
        }
    };
}));

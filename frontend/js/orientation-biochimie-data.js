/**
 * MODULE OFFICIEL BIOLOGIE & CHIMIE
 * Base de données exhaustive : 15 Domaines • 24 Fiches Métiers Haute Profondeur (Référentiel Officiel CIDJ)
 * Double ancrage France (€) / Sénégal (FCFA)
 * Sources Principales : CIDJ Biologie-Chimie, France Chimie, Instituts de Recherche, Police Scientifique
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.OrientationBioChimieData = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    'use strict';

    const DOMAINS = [
    {
        "id": "biologie-sciences-vivant",
        "name": "Biologie Fondamentale & Sciences du Vivant",
        "icon": "🧬",
        "order": 1,
        "chainStage": "Observation & Analyse du Vivant",
        "description": "Explorer les mécanismes fondamentaux des cellules, des tissus et des organismes vivants pour la recherche, la santé et l'industrie.",
        "subdomains": [
            "Biologie cellulaire",
            "Biochimie des protéines",
            "Génétique",
            "Analyses biologiques"
        ]
    },
    {
        "id": "microbiologie",
        "name": "Microbiologie, Virologie & Bactériologie",
        "icon": "🔬",
        "order": 2,
        "chainStage": "Culture & Identification des Micro-organismes",
        "description": "Étudier les bactéries, virus, levures et champignons microscopiques pour le diagnostic, l'agroalimentaire, la pharmacie et l'environnement.",
        "subdomains": [
            "Bactériologie",
            "Virologie",
            "Mycologie & Levures",
            "Contrôle microbiologique de stérilité"
        ]
    },
    {
        "id": "chimie-synthese",
        "name": "Chimie Fondamentale, Synthèse & Analyse",
        "icon": "🧪",
        "order": 3,
        "chainStage": "Réaction Moléculaire & Caractérisation",
        "description": "Synthétiser de nouvelles molécules, purifier les composés et analyser la matière par chromatographie, spectroscopie et titrages.",
        "subdomains": [
            "Chimie organique",
            "Chimie analytique (HPLC/CPG)",
            "Spectroscopie (RMN, IR)",
            "Contrôle qualité physico-chimique"
        ]
    },
    {
        "id": "formulation",
        "name": "Formulation Chimique, Émulsions & Matériaux",
        "icon": "🧴",
        "order": 4,
        "chainStage": "Mélange & Optimisation des Formules",
        "description": "Associer principes actifs, solvants, tensioactifs et polymères pour créer peintures, crèmes, cosmétiques, adhésifs et détergents stables.",
        "subdomains": [
            "Formulation cosmétique",
            "Peintures, encres & vernis",
            "Formulation galénique",
            "Tensioactifs & Émulsions"
        ]
    },
    {
        "id": "galenique-bioproduction",
        "name": "Galénique, Bioproduction & Procédés Pharmaceutiques",
        "icon": "💊",
        "order": 5,
        "chainStage": "Mise en Forme & Culture en Bioréacteur",
        "description": "Fabriquer des biomédicaments, vaccins et formes pharmaceutiques (comprimés, gélules, injectables) en respectant les BPF.",
        "subdomains": [
            "Bioréacteurs & Fermentation",
            "Formes sèches (comprimés, gélules)",
            "Purification par chromatographie industrielle",
            "Bonnes Pratiques de Fabrication (BPF)"
        ]
    },
    {
        "id": "biotechnologies",
        "name": "Biotechnologies & Génie Génétique",
        "icon": "🧬",
        "order": 6,
        "chainStage": "Ingénierie Cellulaire & Bioprocédés",
        "description": "Utiliser le potentiel d'organismes vivants ou d'enzymes pour produire des thérapies innovantes, des biocarburants et des bio-matériaux.",
        "subdomains": [
            "ADN recombinant & CRISPR",
            "Cultures cellulaires animales et végétales",
            "Génie enzymatique",
            "Biotechnologies blanches et rouges"
        ]
    },
    {
        "id": "bio-informatique",
        "name": "Bio-informatique & Données du Vivant",
        "icon": "💻",
        "order": 7,
        "chainStage": "Algorithmique Génomique & Modélisation 3D",
        "description": "Développer des algorithmes pour décoder les mégadonnées de séquençage d'ADN (NGS), modéliser les protéines et guider la découverte de médicaments.",
        "subdomains": [
            "Génomique & Transcriptomique NGS",
            "Modélisation moléculaire 3D (Docking)",
            "Pipelines Python / R / Bioconductor",
            "Bases de données biologiques (NCBI, UniProt)"
        ]
    },
    {
        "id": "botanique-biologie-vegetale",
        "name": "Biologie Végétale & Botanique",
        "icon": "🌿",
        "order": 8,
        "chainStage": "Flore, Herbiers & Taxonomie",
        "description": "Inventorier, identifier, classer et protéger les espèces végétales et valoriser les principes actifs naturels des plantes médicinales.",
        "subdomains": [
            "Taxonomie & Systématique végétale",
            "Phytosociologie & Inventaires floristiques",
            "Herbiers & Conservation des graines",
            "Physiologie végétale"
        ]
    },
    {
        "id": "laboratoires-analyses",
        "name": "Laboratoires, Analyses & Essais Scientifiques",
        "icon": "🧫",
        "order": 9,
        "chainStage": "Instrumentation, Préparation & Métrologie",
        "description": "Assurer la préparation des milieux, l'hébergement des modèles expérimentaux, l'étalonnage des appareils et l'exécution rigoureuse des protocoles.",
        "subdomains": [
            "Analyses physico-chimiques",
            "Animalerie de recherche",
            "Préparation technique & Verrerie",
            "Métrologie des instruments"
        ]
    },
    {
        "id": "cosmetique-parfumerie-aromes",
        "name": "Parfumerie, Cosmétique & Aromatologie",
        "icon": "🌸",
        "order": 10,
        "chainStage": "Création Olfactive & Sensorielle",
        "description": "Composer des fragrances d'exception et concevoir des arômes alimentaires en associant chimie fine, molécules de synthèse et extraits naturels.",
        "subdomains": [
            "Création de parfums (Le Nez)",
            "Arômes alimentaires sucrés/salés",
            "Évaluation sensorielle",
            "Extraction des huiles essentielles"
        ]
    },
    {
        "id": "chimie-industrie",
        "name": "Chimie Industrielle, Teintures & Matériaux",
        "icon": "🧵",
        "order": 11,
        "chainStage": "Colorimétrie & Procédés Industriels",
        "description": "Formuler les pigments, teintures et colorants pour le textile, les polymères, l'automobile et contrôler la couleur par spectrophotométrie.",
        "subdomains": [
            "Colorimétrie textile",
            "Spectrophotométrie",
            "Chimie des polymères et plasturgie",
            "Procédés de teinture et d'ennoblissement"
        ]
    },
    {
        "id": "environnement-qualite-air-depollution",
        "name": "Environnement, Qualité de l'Air & Dépollution NRBC",
        "icon": "🌍",
        "order": 12,
        "chainStage": "Surveillance Écologique & Neutralisation",
        "description": "Mesurer les polluants atmosphériques, traquer les particules fines et décontaminer les environnements face aux risques NRBC.",
        "subdomains": [
            "Surveillance de la qualité de l'air",
            "Dépollution NRBC",
            "Analyse des gaz et COV",
            "Traitement des effluents industriels"
        ]
    },
    {
        "id": "recherche-rd-produit",
        "name": "Recherche, R&D & Développement Produit",
        "icon": "🧑🔬",
        "order": 13,
        "chainStage": "Innovation Scientifique & Prototypage",
        "description": "Concevoir les produits de rupture de demain, tester leur efficacité et piloter le transfert de l'échelle paillasse vers l'usine.",
        "subdomains": [
            "R&D industrielle",
            "Design d'expérience et tests d'usage",
            "Veille technologique et brevets",
            "Scale-up pilote"
        ]
    },
    {
        "id": "police-scientifique",
        "name": "Police Technique & Scientifique (Criminalistique)",
        "icon": "👮",
        "order": 14,
        "chainStage": "Recherche d'Indices & Preuve Biologique/Chimique",
        "description": "Rechercher, prélever et analyser les empreintes génétiques (ADN), les stupéfiants, explosifs et résidus de tir pour éclairer la justice.",
        "subdomains": [
            "Biologie médico-légale (ADN)",
            "Chimie des stupéfiants et toxicologie",
            "Balistique et résidus de tir",
            "Traces papillaires et constatations"
        ]
    },
    {
        "id": "sciences-thanatologiques",
        "name": "Sciences Thanatologiques & Soins Funéraires",
        "icon": "⚰️",
        "order": 15,
        "chainStage": "Biologie Thanatologique & Conservation",
        "description": "Prodiguer les soins de thanatopraxie, de conservation aseptique et de restauration pour préserver la dignité des défunts et rassurer les familles.",
        "subdomains": [
            "Thanatopraxie & Injection artérielle",
            "Soins de présentation et cosmétique funéraire",
            "Hygiène biologique funéraire",
            "Restauration tégumentaire"
        ]
    }
];

    const PEDAGOGICAL_PATHWAYS = [
    {
        "id": "de-la-molecule-au-produit-fini",
        "title": "De la molécule au produit fini : l'odyssée de la formulation et bioproduction",
        "icon": "🧪",
        "description": "Le cycle complet de création, synthèse, contrôle et mise en forme de la matière pour la pharmacie, cosmétique et matériaux.",
        "steps": [
            {
                "order": 1,
                "name": "Recherche Fondamentale",
                "icon": "🧬",
                "desc": "Identification de cibles biologiques ou molécules actives"
            },
            {
                "order": 2,
                "name": "Synthèse Chimique",
                "icon": "🔬",
                "desc": "Réaction moléculaire en laboratoire et optimisation du rendement"
            },
            {
                "order": 3,
                "name": "Bioproduction",
                "icon": "🧫",
                "desc": "Culture de cellules productrices en bioréacteur industriel"
            },
            {
                "order": 4,
                "name": "Formulation & Galénique",
                "icon": "🧴",
                "desc": "Association d'excipients, émulsions, fabrication de comprimés ou parfums"
            },
            {
                "order": 5,
                "name": "Contrôle Qualité",
                "icon": "📊",
                "desc": "Analyses HPLC, CPG, microbiologie et tests de stabilité"
            },
            {
                "order": 6,
                "name": "Libération du Lot",
                "icon": "📦",
                "desc": "Certificat de conformité, Bonnes Pratiques de Fabrication et expédition"
            }
        ]
    },
    {
        "id": "de-la-trace-a-la-preuve-forensique",
        "title": "De la trace à la preuve judiciaire : la démarche scientifique de la PTS",
        "icon": "🔎",
        "description": "Comment la biologie et la chimie éclairent la justice pénale selon le principe de Locard.",
        "steps": [
            {
                "order": 1,
                "name": "Préservation de la Scène",
                "icon": "🚧",
                "desc": "Gel des lieux et tenue stérile pour éviter toute contamination"
            },
            {
                "order": 2,
                "name": "Révélation des Traces",
                "icon": "🔦",
                "desc": "Poudres magnétiques, fumigation cyanoacrylate et lumière UV"
            },
            {
                "order": 3,
                "name": "Prélèvement d'Indices",
                "icon": "🧪",
                "desc": "Conditionnement sous scellés étanches de l'ADN, sang ou résidus"
            },
            {
                "order": 4,
                "name": "Analyses en Laboratoire",
                "icon": "💻",
                "desc": "Typage génétique PCR, spectrométrie de masse et balistique"
            },
            {
                "order": 5,
                "name": "Rapprochement Fichiers",
                "icon": "🗄️",
                "desc": "Concordance dans le FNAEG (génétique) et FAED (empreintes)"
            },
            {
                "order": 6,
                "name": "Rapport Judiciaire",
                "icon": "⚖️",
                "desc": "Rédaction du rapport d'expertise criminalistique pour la Cour d'assises"
            }
        ]
    }
];

    const JOBS = [
    {
        "id": "agent-sterilisation",
        "slug": "agent-sterilisation",
        "title": "Agent / Agente de Stérilisation",
        "aliases": [
            "Opérateur de stérilisation",
            "Agent de stérilisation hospitalière",
            "Technicien de stérilisation industrielle"
        ],
        "icon": "🧼",
        "familyId": "biologie-chimie",
        "connectedFamilies": [
            "biologie-chimie",
            "sante-soins-paramedical",
            "industrie-mecanique"
        ],
        "domain": "Biologie Fondamentale & Sciences du Vivant",
        "domainId": "biologie-sciences-vivant",
        "subdomain": "Contrôle microbiologique de stérilité",
        "shortDescription": "Garant absolu de l'asepsie des dispositifs médicaux, il réceptionne, nettoie, désinfecte, conditionne et stérilise les instruments chirurgicaux en autoclave.",
        "longDescription": "Selon la fiche officielle du CIDJ, l'agent de stérilisation joue un rôle crucial dans la prévention des infections nosocomiales en milieu hospitalier ou industriel. Respectant le principe strict de la 'marche en avant' (du sale vers le propre sans retour en arrière), il décontamine les instruments souillés sortant des blocs opératoires, contrôle leur propreté au microscope, les reconstitue en boîtes opératoires, les conditionne sous sachet scellé et pilote les autoclaves de stérilisation à vapeur d'eau sous pression tout en assurant une traçabilité informatique sans faille.",
        "simpleDefinition": "Professionnel qui lave, désinfecte et stérilise les instruments chirurgicaux dans de grands autoclaves pour qu'ils soient exempts de tout microbe.",
        "level": "CAP / Bac Pro (CAP APH / Bac Pro HPS - Hygiène, Propreté, Stérilisation)",
        "missions": [
            "Réceptionner les boîtes d'instruments chirurgicaux usagés en provenance des blocs et services de soins",
            "Procéder au pré-désinfection, au nettoyage ultrasonique et au lavage en laveur-désinfecteur thermique",
            "Vérifier le bon fonctionnement mécanique des pinces et ciseaux sous loupe éclairante",
            "Conditionner les instruments en paniers stériles scellés avec témoins chimiques de stérilisation",
            "Charger les autoclaves, programmer les cycles de stérilisation vapeur à 134°C et archiver les diagrammes de traçabilité"
        ],
        "workEnvironment": "Services de stérilisation centrale hospitaliers (milieu clos à atmosphère contrôlée), industrie pharmaceutique et fabricants de dispositifs médicaux.",
        "typicalDay": [
            {
                "time": "06:30",
                "activity": "Prise de poste en zone de lavage (zone sale) : tri des instruments souillés du bloc d'urgences de nuit"
            },
            {
                "time": "08:30",
                "activity": "Chargement des laveurs-désinfecteurs thermiques et validation des cycles de décontamination"
            },
            {
                "time": "10:30",
                "activity": "Passage en zone de conditionnement (zone propre) : recomposition minutieuse d'une boîte de neurochirurgie"
            },
            {
                "time": "13:00",
                "activity": "Enfournement des paniers dans l'autoclave grande capacité et vérification des tests de pénétration de vapeur (Bowie-Dick)"
            },
            {
                "time": "14:30",
                "activity": "Déchargement en zone stérile, contrôle des scellages et distribution des boîtes stériles vers les blocs"
            }
        ],
        "skills": {
            "technical": [
                "Principe de la 'marche en avant' et règles d'hygiène hospitalière",
                "Connaissance exhaustive des instruments chirurgicaux de toutes spécialités",
                "Conduite et paramétrage des autoclaves de stérilisation à vapeur d'eau et basse température",
                "Contrôles physico-chimiques et microbiologiques de la stérilité (indicateurs biologiques)",
                "Gestion de la traçabilité informatique par code-barres"
            ],
            "human": [
                "Rigueur absolue et respect scrupuleux des protocoles opératoires",
                "Sens aigu de la responsabilité (la moindre faute met en jeu la vie du patient)",
                "Capacité de concentration et minutie d'assemblage",
                "Bonne endurance physique en station debout"
            ],
            "tools": [
                "Autoclaves hospitaliers classe B et basse température (plasma de peroxyde d'hydrogène)",
                "Laveurs-désinfecteurs thermo-désinfectants",
                "Soudeuses thermiques de gaines de stérilisation",
                "Scanners de code-barres et logiciel de traçabilité de stérilisation"
            ],
            "soft": [
                "Rigueur absolue et respect scrupuleux des protocoles opératoires",
                "Sens aigu de la responsabilité (la moindre faute met en jeu la vie du patient)",
                "Capacité de concentration et minutie d'assemblage",
                "Bonne endurance physique en station debout"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Diplôme initial",
                    "title": "Bac Pro HPS (Hygiène, Propreté, Stérilisation) ou Bac Pro ASSP",
                    "desc": "Formation aux règles d'asepsie, microbiologie et chimie des détergents."
                },
                {
                    "step": "Formation spécialisée",
                    "title": "Titre professionnel d'Agent de Stérilisation en Milieu Hospitalier",
                    "desc": "Modules certifiants en conduite d'autoclaves et pharmacovigilance des dispositifs médicaux."
                }
            ],
            "schools": [
                {
                    "name": "Lycées professionnels préparant au Bac Pro HPS en France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centres de formation hospitalière et ENDSS — Dakar",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Bac Pro Hygiène, Propreté, Stérilisation",
                "CQP Agent de Stérilisation",
                "Habilitation à la conduite d'autoclaves sous pression"
            ]
        },
        "career": {
            "sectors": [
                "Santé hospitalière",
                "Industrie pharmaceutique et biomédicale",
                "Cabinets de chirurgie ambulatoire"
            ],
            "employerTypes": [
                "Centres hospitaliers publics et privés",
                "Sous-traitants de stérilisation industrielle",
                "Laboratoires de recherche"
            ],
            "evolution": "Agent de stérilisation ➔ Chef d'équipe de stérilisation ➔ Responsable technique d'unité de stérilisation centrale ➔ Cadre médico-technique",
            "pros": "Rôle indispensable à la sécurité du patient sans contact direct avec la souffrance ou le sang des malades, travail méthodique et structuré.",
            "cons": "Travail en atmosphère chaude et humide autour des autoclaves, port obligatoire d'EPI complets (charlotte, masque, gants épais), horaires postés."
        },
        "salary": "🇫🇷 France : 1 600 - 2 200 € net/mois selon ancienneté (CIDJ) • 🇸🇳 Sénégal : 110 000 - 260 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Dans un autoclave médical, les instruments sont soumis à une vapeur d'eau saturée sous pression à 134°C pendant au moins 18 minutes. Cette température détruit même les prions (responsables de la maladie de Creutzfeldt-Jakob), qui résistent à l'ébullition classique !",
            "pourquoi": "La pression élève la température d'ébullition et dénature irréversiblement les protéines des agents pathogènes les plus résistants."
        },
        "sources": [
            {
                "organization": "CIDJ",
                "title": "Fiche métier : Agent de stérilisation",
                "url": "https://www.cidj.com/s-orienter/metiers/agent-agente-de-sterilisation",
                "type": "metier"
            },
            {
                "organization": "Société Française des Sciences de la Stérilisation (SF2S)",
                "title": "Bonnes Pratiques de Pharmacie Hospitalière - Ligne Directrice Stérilisation",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "soigner-aider",
            "experiences-laboratoire",
            "construire-fabriquer"
        ],
        "relatedJobSlugs": [
            "infirmier-bloc-operatoire",
            "technicien-laboratoire",
            "employe-technique-laboratoire"
        ],
        "summary": "Garant absolu de l'asepsie des dispositifs médicaux, il réceptionne, nettoie, désinfecte, conditionne et stérilise les instruments chirurgicaux en autoclave.",
        "description": "Selon la fiche officielle du CIDJ, l'agent de stérilisation joue un rôle crucial dans la prévention des infections nosocomiales en milieu hospitalier ou industriel. Respectant le principe strict de la 'marche en avant' (du sale vers le propre sans retour en arrière), il décontamine les instruments souillés sortant des blocs opératoires, contrôle leur propreté au microscope, les reconstitue en boîtes opératoires, les conditionne sous sachet scellé et pilote les autoclaves de stérilisation à vapeur d'eau sous pression tout en assurant une traçabilité informatique sans faille.",
        "studyLevel": "CAP / Bac Pro (CAP APH / Bac Pro HPS - Hygiène, Propreté, Stérilisation)",
        "daily": {
            "morning": "Prise de poste en zone de lavage (zone sale) : tri des instruments souillés du bloc d'urgences de nuit • Chargement des laveurs-désinfecteurs thermiques et validation des cycles de décontamination • Passage en zone de conditionnement (zone propre) : recomposition minutieuse d'une boîte de neurochirurgie",
            "afternoon": "Enfournement des paniers dans l'autoclave grande capacité et vérification des tests de pénétration de vapeur (Bowie-Dick) • Déchargement en zone stérile, contrôle des scellages et distribution des boîtes stériles vers les blocs",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/agent-agente-de-sterilisation"
    },
    {
        "id": "agent-depolluant-nrbc",
        "slug": "agent-depolluant-nrbc",
        "title": "Agent / Agente de Traitement Dépolluant NRBC",
        "aliases": [
            "Opérateur décontamination NRBC",
            "Technicien dépollution chimique et biologique",
            "Spécialiste décontamination radiologique et biologique"
        ],
        "icon": "☣️",
        "familyId": "biologie-chimie",
        "connectedFamilies": [
            "biologie-chimie",
            "environnement-climat",
            "industrie-mecanique"
        ],
        "domain": "Environnement, Qualité de l'Air & Dépollution NRBC",
        "domainId": "environnement-qualite-air-depollution",
        "subdomain": "Dépollution NRBC",
        "shortDescription": "Spécialiste des risques extrêmes, il intervient pour neutraliser, confiner et éliminer les pollutions Nucléaires, Radiologiques, Biologiques et Chimiques accidentelles ou criminelles.",
        "longDescription": "Selon le référentiel CIDJ, l'agent de traitement dépolluant NRBC intervient en combinaison étanche pressurisée pour assainir des sites contaminés par des agents toxiques de guerre, des fuites chimiques industrielles, des retombées radiologiques ou des germes biologiques pathogènes. Il procède à la détection par spectrométrie, déploie des douches de décontamination, pulvérise des agents neutralisants chimiques et conditionne les déchets toxiques en fûts sécurisés étanches.",
        "simpleDefinition": "Professionnel en combinaison étanche de protection qui nettoie et détruit les poisons chimiques, les bactéries dangereuses et les déchets toxiques après un accident.",
        "level": "Bac à Bac +2 (Bac Pro chimie / BTS Métiers des services à l'environnement ou formation militaire/sécurité civile)",
        "missions": [
            "Enfiler et vérifier l'étanchéité absolue de l'équipement de protection individuelle (scaphandre étanche, appareil respiratoire isolant)",
            "Détecter et quantifier la toxicité à l'aide d'appareils de mesure portables (détecteurs de gaz toxiques, radiamètres, bandelettes de détection chimique)",
            "Établir les périmètres de sécurité (zone d'exclusion, zone contrôlée, sas de décontamination)",
            "Appliquer des solutions décontaminantes chimiques (oxydants, chlore, poudres adsorbantes) sur les matériels et sols",
            "Collecter, conditionner et étiqueter les boues et résidus toxiques dans des conteneurs agréés pour élimination sécurisée"
        ],
        "workEnvironment": "Sites industriels chimiques et pétrochimiques, centrales nucléaires, régiments spécialisés de l'armée (2e Régiment de Dragons), unités de sécurité civile.",
        "typicalDay": [
            {
                "time": "08:00",
                "activity": "Contrôle d'étanchéité des masques panoramiques et calibrage des balises de détection de gaz toxiques"
            },
            {
                "time": "09:30",
                "activity": "Exercice de déploiement d'une chaîne de décontamination de véhicules contaminés par un organophosphoré"
            },
            {
                "time": "11:30",
                "activity": "Intervention d'urgence sur une cuve industrielle fissurée d'acide fluorhydrique : épandage de neutralisant alcalin"
            },
            {
                "time": "14:00",
                "activity": "Déshabillage minutieux en sas de décontamination selon la procédure 'déshabillage propre'"
            },
            {
                "time": "16:00",
                "activity": "Prélèvements de contrôle et analyse spectrométrique résiduelle des eaux de ruissellement"
            }
        ],
        "skills": {
            "technical": [
                "Chimie des agents toxiques (vésicants, neurotoxiques, corrosifs) et réactions de neutralisation",
                "Microbiologie des agents biologiques de classe 3 et 4 et désinfectants sporicides",
                "Utilisation des appareils respiratoires isolants (ARI) en circuit ouvert et fermé",
                "Normes de transport et de conditionnement des matières dangereuses (ADR)",
                "Topographie, balisage et procédures d'urgence de sécurité civile"
            ],
            "human": [
                "Sang-froid exemplaire et résistance totale à la claustrophobie en scaphandre",
                "Excellente condition physique pour supporter l'effort en combinaison étanche thermo-isolante",
                "Discipline rigoureuse et respect strict des consignes du chef d'intervention",
                "Esprit de corps et solidarité d'équipe vitale en zone contaminée"
            ],
            "tools": [
                "Scaphandre de protection chimique étanche type 1a",
                "Appareil Respiratoire Isolant (ARI) à air comprimé",
                "Spectromètre de mobilité ionique (IMS) et radiamètre",
                "Canons à mousse de décontamination et douches de neutralisation mobiles"
            ],
            "soft": [
                "Sang-froid exemplaire et résistance totale à la claustrophobie en scaphandre",
                "Excellente condition physique pour supporter l'effort en combinaison étanche thermo-isolante",
                "Discipline rigoureuse et respect strict des consignes du chef d'intervention",
                "Esprit de corps et solidarité d'équipe vitale en zone contaminée"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Bac Pro Procédés de la chimie ou Bac Pro Métiers de la Sécurité",
                    "desc": "Sensibilisation aux risques chimiques et sécurité."
                },
                {
                    "step": "Formation spécialisée",
                    "title": "Certificat de spécialisation NRBC (Armée, Sécurité Civile ou entreprises dépollution)",
                    "desc": "Stages intensifs de simulation en ambiance toxique réelle ou simulée."
                }
            ],
            "schools": [
                {
                    "name": "Centre National civil et militaire de formation NRBC (Bourges)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centres de formation des sapeurs-pompiers et de la brigade nationale des sapeurs-pompiers (BNSP) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certificat de spécialiste NRBC",
                "Habilitation risque chimique niveau 2 (RC2)",
                "CQP Dépollution des sites contaminés"
            ]
        },
        "career": {
            "sectors": [
                "Sécurité civile et défense",
                "Dépollution industrielle de sites",
                "Industrie chimique et nucléaire"
            ],
            "employerTypes": [
                "Groupes de dépollution et gestion des déchets dangereux (Séché, Veolia, Suez)",
                "Ministère des Armées et de l'Intérieur",
                "Grands sites SEVESO seuil haut"
            ],
            "evolution": "Agent dépolluant ➔ Chef d'équipe d'intervention NRBC ➔ Responsable HSE de site à haut risque ➔ Expert consultant en gestion de crise toxique",
            "pros": "Métier d'action noble et protecteur de l'environnement, haute technicité, sentiment d'utilité publique face aux catastrophes.",
            "cons": "Pénibilité thermique intense sous scaphandre (température interne dépassant 40°C), port de charges lourdes, astreintes d'intervention d'urgence."
        },
        "salary": "🇫🇷 France : 1 800 - 2 800 € net/mois selon primes de risque et astreintes (CIDJ) • 🇸🇳 Sénégal : 150 000 - 400 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Une intervention en scaphandre étanche NRBC ne peut généralement pas excéder 30 à 45 minutes d'affilée en raison de la déshydratation rapide de l'opérateur (qui peut perdre jusqu'à 1,5 litre de sueur par heure) et de la réserve d'air limitée de la bouteille !",
            "pourquoi": "L'étanchéité totale empêche toute évacuation de la chaleur corporelle vers l'extérieur."
        },
        "sources": [
            {
                "organization": "CIDJ",
                "title": "Fiche métier : Agent de traitement dépolluant NRBC",
                "url": "https://www.cidj.com/s-orienter/metiers/agent-agente-de-traitement-depolluant-nrbc",
                "type": "metier"
            },
            {
                "organization": "Ministère des Armées",
                "title": "La défense NRBC : doctrine et métiers",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "proteger-defendre",
            "nature-environnement",
            "experiences-laboratoire"
        ],
        "relatedJobSlugs": [
            "technicien-qualite-air",
            "technicien-chimiste",
            "ingenieur-recherche-produit"
        ],
        "summary": "Spécialiste des risques extrêmes, il intervient pour neutraliser, confiner et éliminer les pollutions Nucléaires, Radiologiques, Biologiques et Chimiques accidentelles ou criminelles.",
        "description": "Selon le référentiel CIDJ, l'agent de traitement dépolluant NRBC intervient en combinaison étanche pressurisée pour assainir des sites contaminés par des agents toxiques de guerre, des fuites chimiques industrielles, des retombées radiologiques ou des germes biologiques pathogènes. Il procède à la détection par spectrométrie, déploie des douches de décontamination, pulvérise des agents neutralisants chimiques et conditionne les déchets toxiques en fûts sécurisés étanches.",
        "studyLevel": "Bac à Bac +2 (Bac Pro chimie / BTS Métiers des services à l'environnement ou formation militaire/sécurité civile)",
        "daily": {
            "morning": "Contrôle d'étanchéité des masques panoramiques et calibrage des balises de détection de gaz toxiques • Exercice de déploiement d'une chaîne de décontamination de véhicules contaminés par un organophosphoré • Intervention d'urgence sur une cuve industrielle fissurée d'acide fluorhydrique : épandage de neutralisant alcalin",
            "afternoon": "Déshabillage minutieux en sas de décontamination selon la procédure 'déshabillage propre' • Prélèvements de contrôle et analyse spectrométrique résiduelle des eaux de ruissellement",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/agent-agente-de-traitement-depolluant-nrbc"
    },
    {
        "id": "animalier-laboratoire",
        "slug": "animalier-laboratoire",
        "title": "Animalier / Animalière de Laboratoire",
        "aliases": [
            "Technicien d'animalerie scientifique",
            "Soigneur animalier de recherche",
            "Agent d'élevage d'animaux de laboratoire"
        ],
        "icon": "🐭",
        "familyId": "biologie-chimie",
        "connectedFamilies": [
            "biologie-chimie",
            "elevage-veterinaire",
            "sante-soins-paramedical"
        ],
        "domain": "Laboratoires, Analyses & Essais Scientifiques",
        "domainId": "laboratoires-analyses",
        "subdomain": "Animalerie de recherche",
        "shortDescription": "Garant du bien-être animal et de l'éthique de la recherche biomédicale, il veille sur l'hébergement, la nourriture, la santé et l'enrichissement des animaux d'expérimentation.",
        "longDescription": "Selon les données vérifiées du CIDJ, l'animalier de laboratoire héberge et prend soin des modèles animaux indispensables à la recherche biomédicale (rongeurs, lapins, poissons-zèbres, primates). Travaillant en zone stérile ou dépressurisée, il applique strictement la règle éthique des '3R' (Remplacer, Réduire, Raffiner). Il surveille les signes de douleur ou d'inconfort, prépare les rations alimentaires spécifiques, assiste les chercheurs lors des pesées et prélèvements et entretient l'hygiène rigoureuse des cages et portoirs ventilés.",
        "simpleDefinition": "Professionnel qui nourrit, soigne et surveille le bien-être des animaux utilisés par les scientifiques dans les laboratoires de recherche médicale.",
        "level": "CAP à Bac Pro (Bac Pro Conduite et gestion de l'entreprise du secteur canin et félin ou Titre d'Animalier de laboratoire)",
        "missions": [
            "Assurer l'alimentation, l'abreuvement et le renouvellement régulier des litières stériles des animaux",
            "Observer quotidiennement le comportement animal et déceler le moindre signe de stress, douleur ou pathologie",
            "Fournir des enrichissements de milieu de vie (tunnels, abris, matériaux de nidification) pour le bien-être animal",
            "Veiller au maintien des paramètres climatiques des animaleries (température, humidité, cycles lumière/obscurité)",
            "Aider les vétérinaires et chercheurs lors des manipulations douces, contentions et administrations protocolisées"
        ],
        "workEnvironment": "Animaleries de recherche universitaires (Inserm, CNRS), industrie pharmaceutique, instituts de biotechnologies (Institut Pasteur), écoles vétérinaires.",
        "typicalDay": [
            {
                "time": "07:30",
                "activity": "Douche d'entrée en animalerie stérile et habillage en combinaison protectrice avec masque et surbottes"
            },
            {
                "time": "08:15",
                "activity": "Inspection visuelle systématique des cages sur portoirs ventilés et point d'eau automatique"
            },
            {
                "time": "10:00",
                "activity": "Nettoyage et autoclavage des cages, changement des litières dépoussiérées sous hotte de change"
            },
            {
                "time": "13:30",
                "activity": "Assistance à une équipe de chercheurs en oncologie pour la pesée précise d'une cohorte de souris"
            },
            {
                "time": "15:30",
                "activity": "Tenue du registre légal d'entrée/sortie des animaux et mise à jour des fiches de suivi éthique"
            }
        ],
        "skills": {
            "technical": [
                "Réglementation européenne et nationale sur la protection des animaux utilisés à des fins scientifiques (Décret 2013-118)",
                "Zootechnie des rongeurs et animaux de laboratoire (nutrition, reproduction, génétique)",
                "Normes de biosécurité en animalerie de confinement (A1, A2, A3)",
                "Techniques de manipulation douce (low-stress handling) et contention bienveillante",
                "Conduite de tunnels de lavage et autoclaves d'animalerie"
            ],
            "human": [
                "Amour et profond respect pour les animaux",
                "Sens aigu de l'observation pour repérer une modification de posture ou de poil",
                "Rigueur et sens de la propreté méticuleuse",
                "Stabilité émotionnelle face aux protocoles expérimentaux"
            ],
            "tools": [
                "Portoirs ventilés pour cages individuelles étanches (IVC)",
                "Hottes de change à flux laminaire pour animalerie",
                "Tunnels de lavage de cages automatisés",
                "Dispositifs d'enrichissement environnemental homologués"
            ],
            "soft": [
                "Amour et profond respect pour les animaux",
                "Sens aigu de l'observation pour repérer une modification de posture ou de poil",
                "Rigueur et sens de la propreté méticuleuse",
                "Stabilité émotionnelle face aux protocoles expérimentaux"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Diplôme initial",
                    "title": "Bac Pro agricole ou Bac Pro CGEA / Bac STL",
                    "desc": "Bases de biologie animale et d'élevage."
                },
                {
                    "step": "Certification obligatoire",
                    "title": "Formation réglementaire à l'expérimentation animale Niveau Technicien / Concepteur (ex-Niveau II)",
                    "desc": "Formation légale obligatoire en éthique et bientraitance animale."
                }
            ],
            "schools": [
                {
                    "name": "Lycées agricoles et universités dispensant le diplôme d'animalier de laboratoire en France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut Pasteur de Dakar / EISMV (École Inter-États des Sciences et Médecine Vétérinaires) — Dakar",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certificat de qualification d'Animalier de Laboratoire",
                "Agrément légal d'expérimentation animale de Niveau Applicateur"
            ]
        },
        "career": {
            "sectors": [
                "Recherche médicale et biomédicale",
                "Industrie pharmaceutique",
                "Recherche agronomique"
            ],
            "employerTypes": [
                "Instituts de recherche publique (CNRS, Inserm, INRAE)",
                "Laboratoires pharmaceutiques (Sanofi, Servier)",
                "Facultés de médecine et universités"
            ],
            "evolution": "Animalier de laboratoire ➔ Technicien supérieur d'animalerie ➔ Responsable d'animalerie scientifique ➔ Membre de comité d'éthique animale",
            "pros": "Rôle éthique primordial de bienveillance au cœur de la découverte de nouveaux traitements contre les maladies graves, contact quotidien avec les animaux.",
            "cons": "Contraintes d'hygiène lourdes (douches obligatoires, masque constant), travail les week-ends par roulement pour nourrir les animaux."
        },
        "salary": "🇫🇷 France : 1 650 - 2 300 € net/mois selon statut (CIDJ) • 🇸🇳 Sénégal : 120 000 - 300 000 FCFA net/mois",
        "saviezVous": {
            "fait": "La règle éthique internationale des '3R' guide chaque jour l'animalier de laboratoire : Remplacer l'animal dès qu'une alternative in vitro ou par ordinateur existe, Réduire au minimum strict le nombre d'animaux utilisés, et Raffiner les méthodes pour éliminer toute souffrance inutile.",
            "pourquoi": "Un animal détendu, bien nourri et sans stress produit des données scientifiques incomparablement plus fiables qu'un animal angoissé."
        },
        "sources": [
            {
                "organization": "CIDJ",
                "title": "Fiche métier : Animalier de laboratoire",
                "url": "https://www.cidj.com/s-orienter/metiers/animalier-animaliere-de-laboratoire",
                "type": "metier"
            },
            {
                "organization": "Société Française des Sciences et Techniques de l'Animal de Laboratoire (SFTAL)",
                "title": "Rôle et compétences de l'animalier de recherche",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "nature-environnement",
            "experiences-laboratoire",
            "soigner-aider"
        ],
        "relatedJobSlugs": [
            "technicien-biologiste",
            "microbiologiste",
            "employe-technique-laboratoire"
        ],
        "summary": "Garant du bien-être animal et de l'éthique de la recherche biomédicale, il veille sur l'hébergement, la nourriture, la santé et l'enrichissement des animaux d'expérimentation.",
        "description": "Selon les données vérifiées du CIDJ, l'animalier de laboratoire héberge et prend soin des modèles animaux indispensables à la recherche biomédicale (rongeurs, lapins, poissons-zèbres, primates). Travaillant en zone stérile ou dépressurisée, il applique strictement la règle éthique des '3R' (Remplacer, Réduire, Raffiner). Il surveille les signes de douleur ou d'inconfort, prépare les rations alimentaires spécifiques, assiste les chercheurs lors des pesées et prélèvements et entretient l'hygiène rigoureuse des cages et portoirs ventilés.",
        "studyLevel": "CAP à Bac Pro (Bac Pro Conduite et gestion de l'entreprise du secteur canin et félin ou Titre d'Animalier de laboratoire)",
        "daily": {
            "morning": "Douche d'entrée en animalerie stérile et habillage en combinaison protectrice avec masque et surbottes • Inspection visuelle systématique des cages sur portoirs ventilés et point d'eau automatique • Nettoyage et autoclavage des cages, changement des litières dépoussiérées sous hotte de change",
            "afternoon": "Assistance à une équipe de chercheurs en oncologie pour la pesée précise d'une cohorte de souris • Tenue du registre légal d'entrée/sortie des animaux et mise à jour des fiches de suivi éthique",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/animalier-animaliere-de-laboratoire"
    },
    {
        "id": "aromaticien",
        "slug": "aromaticien",
        "title": "Aromaticien / Aromaticienne",
        "aliases": [
            "Créateur d'arômes alimentaires",
            "Flavorist",
            "Ingénieur aromaticien"
        ],
        "icon": "🍓",
        "familyId": "biologie-chimie",
        "connectedFamilies": [
            "biologie-chimie",
            "agriculture-agritech",
            "industrie-mecanique"
        ],
        "domain": "Parfumerie, Cosmétique & Aromatologie",
        "domainId": "cosmetique-parfumerie-aromes",
        "subdomain": "Arômes alimentaires sucrés/salés",
        "shortDescription": "Chimiste et artiste du goût, l'aromaticien conçoit les arômes naturels ou synthétiques qui parfument yaourts, boissons, biscuits, plats préparés et dentifrices.",
        "longDescription": "Selon le CIDJ, l'aromaticien marie la rigueur de la chimie organique et l'acuité sensorielle de ses papilles. Travaillant en laboratoire pour des maisons de composition (Givaudan, Firmenich, Mane) ou des géants de l'agroalimentaire, il reconstitue l'arôme authentique d'une fraise des bois mûre ou invente de nouvelles saveurs salées pour des snacks. Il sélectionne les molécules aromatisantes, formule le concentré, teste sa résistance à la cuisson industrielle et s'assure de sa stricte conformité aux réglementations alimentaires.",
        "simpleDefinition": "Chimiste créateur de saveurs qui invente et fabrique les arômes de vanille, fraise, barbecue ou menthe que l'on retrouve dans nos aliments.",
        "level": "Bac +3 à Bac +5 (Licence pro ou Master ISIPCA / Ingénieur Agroalimentaire)",
        "missions": [
            "Analyser la composition moléculaire de saveurs naturelles par chromatographie en phase gazeuse couplée à la spectrométrie de masse (CPG-SM)",
            "Sélectionner les matières premières aromatiques (extraits naturels, huiles essentielles, molécules de synthèse)",
            "Formuler à la goutte près des compositions aromatiques originales répondant au cahier des charges client",
            "Incorporer l'arôme dans la matrice alimentaire finale (lait, biscuit, soda) et tester la stabilité thermique à la cuisson",
            "Mener des panels d'évaluation sensorielle et ajuster la persistance en bouche et le profil gustatif"
        ],
        "workEnvironment": "Laboratoires de création aromatique, départements R&D des groupes agroalimentaires et fabricants d'arômes (région de Grasse, Paris, multinationales).",
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Séance matinale d'olfaction et dégustation à l'aveugle à jeun (moment où le palais est le plus frais)"
            },
            {
                "time": "10:00",
                "activity": "Formulation paillasse : micro-dosages de vanilline, butyrate d'éthyle et lactones pour un arôme de pêche blanche"
            },
            {
                "time": "11:45",
                "activity": "Application de la formule dans un yaourt nature témoin et passage en chambre de vieillissement"
            },
            {
                "time": "14:30",
                "activity": "Analyse CPG-Olfactométrie d'un extrait de café torréfié pour identifier la molécule clé manquante"
            },
            {
                "time": "16:30",
                "activity": "Vérification de la conformité de la formule à la réglementation européenne sur les arômes naturels"
            }
        ],
        "skills": {
            "technical": [
                "Chimie organique des substances aromatisantes et biochimie gustative",
                "Chromatographie en phase gazeuse couplée à l'olfactométrie (CPG-O)",
                "Formulation liquide, poudre et encapsulée",
                "Législation européenne et internationale des arômes alimentaires (EFSA, FDA)",
                "Interactions physico-chimiques entre l'arôme et la matrice alimentaire (matières grasses, sucres)"
            ],
            "human": [
                "Mémoire olfactive et gustative exceptionnelle (capacité à mémoriser des milliers de molécules)",
                "Sensibilité sensorielle et créativité associative",
                "Précision méticuleuse au milligramme près",
                "Capacité à traduire les souhaits marketing en assemblages chimiques concrets"
            ],
            "tools": [
                "Chromatographe CPG-SM avec port d'olfactométrie 'sniffer'",
                "Balanse d'analyse de précision à 4 décimales",
                "Robots de pipetage et formulateurs automatiques",
                "Cabines normalisées d'analyse sensorielle"
            ],
            "soft": [
                "Mémoire olfactive et gustative exceptionnelle (capacité à mémoriser des milliers de molécules)",
                "Sensibilité sensorielle et créativité associative",
                "Précision méticuleuse au milligramme près",
                "Capacité à traduire les souhaits marketing en assemblages chimiques concrets"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Bac +2 / +3",
                    "title": "Licence Chimie ou BUT Génie Biologique / Chimie",
                    "desc": "Solides bases en chimie organique et analyse chimique."
                },
                {
                    "step": "Formation spécialisée de référence (Bac +5)",
                    "title": "Master ISIPCA (Institut Supérieur International du Parfum, de la Cosmétique et de l'Aromatique Alimentaire)",
                    "desc": "Master en formulation et création aromatique en partenariat avec l'Université de Versailles (UVSQ)."
                }
            ],
            "schools": [
                {
                    "name": "ISIPCA — Versailles (La référence mondiale des métiers du parfum et des arômes)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "AgroParisTech / Polytech Montpellier — Spécialité Formulation et Arômes",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Facultés des Sciences et ESP — UCAD Dakar (Chimie appliquée et agroalimentaire)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Master Formulation et Évaluation Sensorielle ISIPCA",
                "Diplôme d'Ingénieur en Agroalimentaire et Chimie"
            ]
        },
        "career": {
            "sectors": [
                "Industrie des arômes et parfums",
                "Industrie agroalimentaire",
                "Industrie pharmaceutique (masquage de goût)"
            ],
            "employerTypes": [
                "Maisons de composition internationales (Givaudan, dsm-firmenich, IFF, Symrise, Mane)",
                "Industriels de l'agroalimentaire (Nestlé, Danone)",
                "Laboratoires de compléments alimentaires"
            ],
            "evolution": "Aromaticien junior ➔ Aromaticien senior créateur ➔ Directeur de laboratoire de création ➔ Flavorist mondial expert",
            "pros": "Métier rare et prestigieux très recherché, mariage enthousiasmant entre art gustatif et haute chimie, rémunérations attractives.",
            "cons": "Hygiène de vie stricte requise pour préserver le palais (éviter tabac, épices brûlantes avant dégustations), forte concurrence à l'entrée."
        },
        "salary": "🇫🇷 France : 2 400 - 5 500 € net/mois selon réputation et expérience (CIDJ) • 🇸🇳 Sénégal : 250 000 - 900 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Ce que nous appelons couramment le 'goût' d'un aliment provient à 80% de notre odorat par rétro-olfaction (les molécules remontent de l'arrière de la gorge vers le nez quand on mâche) et seulement à 20% des papilles de notre langue !",
            "pourquoi": "La langue ne perçoit que 5 saveurs de base (sucré, salé, acide, amer, umami), tandis que l'odorat peut distinguer plus de 10 000 nuances aromatiques différentes."
        },
        "sources": [
            {
                "organization": "CIDJ",
                "title": "Fiche métier : Aromaticien",
                "url": "https://www.cidj.com/s-orienter/metiers/aromaticien-aromaticienne",
                "type": "metier"
            },
            {
                "organization": "Syndicat National des Ingrédients Aromatiques Alimentaires (SNIAA)",
                "title": "Le métier d'aromaticien",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "creer-produits-chimie",
            "experiences-laboratoire",
            "creer-designer"
        ],
        "relatedJobSlugs": [
            "parfumeur",
            "ingenieur-formulation",
            "technicien-chimiste"
        ],
        "summary": "Chimiste et artiste du goût, l'aromaticien conçoit les arômes naturels ou synthétiques qui parfument yaourts, boissons, biscuits, plats préparés et dentifrices.",
        "description": "Selon le CIDJ, l'aromaticien marie la rigueur de la chimie organique et l'acuité sensorielle de ses papilles. Travaillant en laboratoire pour des maisons de composition (Givaudan, Firmenich, Mane) ou des géants de l'agroalimentaire, il reconstitue l'arôme authentique d'une fraise des bois mûre ou invente de nouvelles saveurs salées pour des snacks. Il sélectionne les molécules aromatisantes, formule le concentré, teste sa résistance à la cuisson industrielle et s'assure de sa stricte conformité aux réglementations alimentaires.",
        "studyLevel": "Bac +3 à Bac +5 (Licence pro ou Master ISIPCA / Ingénieur Agroalimentaire)",
        "daily": {
            "morning": "Séance matinale d'olfaction et dégustation à l'aveugle à jeun (moment où le palais est le plus frais) • Formulation paillasse : micro-dosages de vanilline, butyrate d'éthyle et lactones pour un arôme de pêche blanche • Application de la formule dans un yaourt nature témoin et passage en chambre de vieillissement",
            "afternoon": "Analyse CPG-Olfactométrie d'un extrait de café torréfié pour identifier la molécule clé manquante • Vérification de la conformité de la formule à la réglementation européenne sur les arômes naturels",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/aromaticien-aromaticienne"
    },
    {
        "id": "bio-informaticien",
        "slug": "bio-informaticien",
        "title": "Bio-informaticien / Bio-informaticienne",
        "aliases": [
            "Bioinformatician",
            "Biologiste computationnel",
            "Data Scientist en génomique"
        ],
        "icon": "🧬",
        "familyId": "biologie-chimie",
        "connectedFamilies": [
            "biologie-chimie",
            "numerique-ia",
            "data-decision",
            "sante-soins-paramedical"
        ],
        "domain": "Bio-informatique & Données du Vivant",
        "domainId": "bio-informatique",
        "subdomain": "Génomique & Transcriptomique NGS",
        "shortDescription": "À la croisée de la biologie moléculaire, des algorithmes et du Big Data, il conçoit des programmes pour décrypter le génome, modéliser les protéines et accélérer la découverte de thérapies.",
        "longDescription": "Le CIDJ classe explicitement le bio-informaticien dans trois domaines majeurs : Biologie-Chimie, Informatique-Web-Réseaux et Sciences Physiques-Maths-Data. C'est l'archétype du métier transversal d'avenir. Face aux millions de paires de bases générées par les séquenceurs d'ADN à haut débit (NGS), le bio-informaticien écrit des pipelines en Python et R, applique l'intelligence artificielle pour prédire le repliement 3D des protéines, identifie des mutations cancéreuses rares et simule des interactions médicamenteuses.",
        "simpleDefinition": "Scientifique double-compétent qui utilise l'informatique, les lignes de code et l'IA pour analyser l'ADN et comprendre les secrets des cellules vivantes.",
        "level": "Bac +5 à Bac +8 (Master Bio-informatique / Diplôme d'Ingénieur / Doctorat)",
        "missions": [
            "Concevoir et déployer des pipelines d'analyse automatisée de données de séquençage génomique (NGS, RNA-seq, métagénomique)",
            "Développer des algorithmes statistiques et d'apprentissage automatique (Machine Learning) pour la prédiction de structures protéiques",
            "Interroger et croiser les grandes bases de données biologiques mondiales (NCBI, Ensembl, PDB, UniProt)",
            "Simuler in silico le docking moléculaire pour tester virtuellement l'affinité de molécules médicamenteuses candidates",
            "Collaborer étroitement avec les biologistes de paillasse pour interpréter les résultats statistiques des expériences"
        ],
        "workEnvironment": "Instituts de recherche génomique (Institut Curie, Institut Pasteur, Genoscope), laboratoires pharmaceutiques, start-ups de biotechnologies, clusters de calcul intensif.",
        "typicalDay": [
            {
                "time": "09:00",
                "activity": "Lancement d'un pipeline d'alignement de génomes de patients atteints de maladies rares sur serveur de calcul (SLURM)"
            },
            {
                "time": "11:00",
                "activity": "Développement d'un script Python sous Jupyter Notebook pour filtrer les variants génétiques significatifs"
            },
            {
                "time": "14:00",
                "activity": "Modélisation 3D du repliement d'une protéine cible à l'aide d'outils d'IA (AlphaFold)"
            },
            {
                "time": "16:00",
                "activity": "Réunion de travail pluridisciplinaire avec des médecins oncologues et des généticiens sur une cible tumorale"
            },
            {
                "time": "17:30",
                "activity": "Publication du code source documenté sur GitHub et mise à jour de la documentation d'équipe"
            }
        ],
        "skills": {
            "technical": [
                "Programmation scientifique (Python, R, Bash, C++)",
                "Outils et formats de génomique computationnelle (SAMtools, BEDtools, GATK, FASTQ/BAM/VCF)",
                "Statistiques inférentielles, biostatistiques et Machine Learning appliqué au vivant",
                "Environnement Linux haute performance (HPC) et gestionnaires de calcul (Slurm, Nextflow)",
                "Bases de données relationnelles et non relationnelles (SQL, NoSQL)"
            ],
            "human": [
                "Capacité de dialogue et de traduction entre la culture informatique et la biologie",
                "Rigueur logique et passion pour la résolution de casse-têtes de données",
                "Autonomie de recherche et veille scientifique permanente",
                "Pédagogie pour présenter des résultats statistiques complexes à des non-informaticiens"
            ],
            "tools": [
                "Serveurs de calcul haute performance (HPC Linux)",
                "Outils d'IA génomique (AlphaFold, ESMFold)",
                "Environnements Nextflow, Snakemake et conteneurs Docker/Singularity",
                "PyMOL et VMD pour la visualisation moléculaire 3D"
            ],
            "soft": [
                "Capacité de dialogue et de traduction entre la culture informatique et la biologie",
                "Rigueur logique et passion pour la résolution de casse-têtes de données",
                "Autonomie de recherche et veille scientifique permanente",
                "Pédagogie pour présenter des résultats statistiques complexes à des non-informaticiens"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Bac général à dominante scientifique (Maths, SVT, NSI ou Physique)",
                    "desc": "Double goût pour les sciences naturelles et l'informatique."
                },
                {
                    "step": "Licence (Bac +3)",
                    "title": "Licence Sciences de la Vie parcours Bio-informatique ou Licence Informatique",
                    "desc": "Double compétence biologie moléculaire et algorithmique."
                },
                {
                    "step": "Master / École d'Ingénieur (Bac +5)",
                    "title": "Master Bio-informatique ou Diplôme d'Ingénieur (INSA, Polytech)",
                    "desc": "Spécialisation en génomique computationnelle, bio-statistiques et IA."
                },
                {
                    "step": "Doctorat éventuel (Bac +8)",
                    "title": "Doctorat (PhD) en Bio-informatique / Biologie Computationnelle",
                    "desc": "Très valorisé dans les centres de recherche de pointe."
                }
            ],
            "schools": [
                {
                    "name": "Universités françaises dispensant le Master Bio-informatique (Paris Cité, Sorbonne, Lyon, Montpellier, Rennes)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "FST & ESP — UCAD Dakar (Masters en Biologie Moléculaire et Informatique / Plateforme Génomique IPD)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Master Sciences, Technologies, Santé mention Bio-informatique",
                "Diplôme d'Ingénieur en Bio-informatique"
            ]
        },
        "career": {
            "sectors": [
                "Recherche génomique et biomédicale",
                "Industrie pharmaceutique et biotechnologique",
                "Agro-génomique et semences"
            ],
            "employerTypes": [
                "Instituts de recherche d'excellence (Institut Pasteur, Inserm, Inria)",
                "Biotechs de thérapie génique",
                "Sociétés d'analyse génomique clinique"
            ],
            "evolution": "Bio-informaticien d'études ➔ Chef de projet bio-informatique ➔ Responsable de plateforme de modélisation et data science ➔ Directeur R&D computationnelle",
            "pros": "Métier à la frontière des deux plus grandes révolutions de notre époque (l'IA et la génétique), employabilité mondiale exceptionnelle, télétravail fréquent.",
            "cons": "Évolution ultra-rapide des outils imposant un auto-apprentissage permanent, frustration possible face au bruit des données biologiques expérimentales."
        },
        "salary": "🇫🇷 France : 2 500 - 5 000 € net/mois selon diplôme et secteur (CIDJ) • 🇸🇳 Sénégal : 350 000 - 1 200 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Le premier séquençage complet d'un génome humain (Projet Génome Humain) a duré 13 ans et coûté près de 3 milliards de dollars entre 1990 et 2003. Aujourd'hui, grâce aux algorithmes des bio-informaticiens et aux séquenceurs modernes, un génome complet est décrypté en quelques heures pour moins de 300 dollars !",
            "pourquoi": "L'accélération de la vitesse de calcul informatique a progressé encore plus vite que la loi de Moore dans le domaine du vivant."
        },
        "sources": [
            {
                "organization": "CIDJ",
                "title": "Fiche métier : Bio-informaticien",
                "url": "https://www.cidj.com/s-orienter/metiers/bio-informaticien-bio-informaticienne",
                "type": "metier"
            },
            {
                "organization": "Société Française de Bio-Informatique (SFBI)",
                "title": "Les métiers de la bio-informatique",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "bio-informatique-data",
            "technologie-code",
            "resoudre-problemes",
            "experiences-laboratoire"
        ],
        "relatedJobSlugs": [
            "data-scientist",
            "ingenieur-biotechnologie",
            "microbiologiste"
        ],
        "summary": "À la croisée de la biologie moléculaire, des algorithmes et du Big Data, il conçoit des programmes pour décrypter le génome, modéliser les protéines et accélérer la découverte de thérapies.",
        "description": "Le CIDJ classe explicitement le bio-informaticien dans trois domaines majeurs : Biologie-Chimie, Informatique-Web-Réseaux et Sciences Physiques-Maths-Data. C'est l'archétype du métier transversal d'avenir. Face aux millions de paires de bases générées par les séquenceurs d'ADN à haut débit (NGS), le bio-informaticien écrit des pipelines en Python et R, applique l'intelligence artificielle pour prédire le repliement 3D des protéines, identifie des mutations cancéreuses rares et simule des interactions médicamenteuses.",
        "studyLevel": "Bac +5 à Bac +8 (Master Bio-informatique / Diplôme d'Ingénieur / Doctorat)",
        "daily": {
            "morning": "Lancement d'un pipeline d'alignement de génomes de patients atteints de maladies rares sur serveur de calcul (SLURM) • Développement d'un script Python sous Jupyter Notebook pour filtrer les variants génétiques significatifs",
            "afternoon": "Modélisation 3D du repliement d'une protéine cible à l'aide d'outils d'IA (AlphaFold) • Réunion de travail pluridisciplinaire avec des médecins oncologues et des généticiens sur une cible tumorale • Publication du code source documenté sur GitHub et mise à jour de la documentation d'équipe",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/bio-informaticien-bio-informaticienne"
    },
    {
        "id": "botaniste",
        "slug": "botaniste",
        "title": "Botaniste / Spécialiste de la Flore & des Écosystèmes Végétaux",
        "aliases": [
            "Phytosociologue",
            "Biologiste végétal",
            "Chercheur en botanique"
        ],
        "icon": "🌿",
        "familyId": "biologie-chimie",
        "connectedFamilies": [
            "biologie-chimie",
            "agriculture-agritech",
            "environnement-climat"
        ],
        "domain": "Biologie Végétale & Botanique",
        "domainId": "botanique-biologie-vegetale",
        "subdomain": "Taxonomie & Systématique végétale",
        "shortDescription": "Scientifique explorateur des plantes, il étudie la physiologie végétale, identifie et classe les espèces de flore, préserve la biodiversité et découvre de nouvelles molécules végétales.",
        "longDescription": "Le CIDJ documente le métier de botaniste comme un savant équilibre entre expéditions de terrain et analyses de laboratoire. Équipé d'une loupe botanique, d'un sécateur et d'un carnet, le botaniste recense la flore sauvage, cartographie les habitats végétaux protégés, conserve les herbiers et étudie les propriétés médicinales ou agronomiques des plantes. Face au changement climatique et à la disparition rapide d'espèces végétales, son expertise est indispensable aux parcs nationaux, aux semenciers et à la recherche pharmaceutique.",
        "simpleDefinition": "Scientifique spécialiste des plantes qui explore la nature pour trouver, nommer et protéger les fleurs, arbres et herbes sauvages.",
        "level": "Bac +5 à Bac +8 (Master Biodiversité Végétale / Doctorat en Biologie Végétale)",
        "missions": [
            "Mener des inventaires floristiques sur le terrain et déterminer les taxons végétaux avec des clés d'identification",
            "Échantillonner des spécimens de plantes rares et constituer des planches d'herbiers scientifiques de référence",
            "Étudier l'adaptation physiologique des végétaux aux stress climatiques (sécheresse, salinité des sols)",
            "Découvrir et isoler des molécules d'intérêt pharmacologique ou cosmétique au sein des plantes médicinales",
            "Rédiger des plans de gestion et de préservation pour les réserves naturelles et conservatoires botaniques"
        ],
        "workEnvironment": "Missions de terrain (forêts, savanes, mangroves, massifs montagneux), herbiers nationaux, muséums d'histoire naturelle, jardins botaniques, laboratoires de pharmacognosie.",
        "typicalDay": [
            {
                "time": "08:00",
                "activity": "Départ en prospection de terrain dans une zone humide protégée pour inventorier les espèces d'orchidées sauvages"
            },
            {
                "time": "11:30",
                "activity": "Relevé phytosociologique : identification des strates végétales et estimation du recouvrement au mètre carré"
            },
            {
                "time": "14:00",
                "activity": "Prélèvement délicat d'échantillons foliaires et mise sous presse dans le séchoir d'herbier"
            },
            {
                "time": "16:00",
                "activity": "Au laboratoire : observation des étamines et grains de pollen sous loupe binoculaire pour confirmer une sous-espèce"
            },
            {
                "time": "17:30",
                "activity": "Saisie des données géoréférencées dans la base de données nationale de la flore (eFlore / Tela Botanica)"
            }
        ],
        "skills": {
            "technical": [
                "Taxonomie végétale, systématique phylogénétique et nomenclature botanique internationale",
                "Utilisation experte des flores analytiques et clés dichotomiques",
                "Techniques de conservation en herbier et banques de graines (cryoconservation)",
                "Cartographie des habitats naturels par SIG et géolocalisation GPS",
                "Physiologie végétale et phytochimie (extraction d'alcaloïdes, flavonoïdes)"
            ],
            "human": [
                "Capacité d'observation visuelle très aiguë et sens du détail morphologique",
                "Patience infinie et goût prononcé pour le travail solitaire en pleine nature",
                "Excellente endurance physique sur des terrains escarpés ou isolés",
                "Sensibilité écologique et rigueur scientifique de classification"
            ],
            "tools": [
                "Loupe de botaniste x10 / x20 et loupe binoculaire de paillasse",
                "Presse d'herbier traditionnelle et papier buvard sans acide",
                "GPS de randonnée et carnet de terrain imperméable",
                "Clés de détermination de la flore (Flore de Bonnier, Flores régionales)"
            ],
            "soft": [
                "Capacité d'observation visuelle très aiguë et sens du détail morphologique",
                "Patience infinie et goût prononcé pour le travail solitaire en pleine nature",
                "Excellente endurance physique sur des terrains escarpés ou isolés",
                "Sensibilité écologique et rigueur scientifique de classification"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Bac scientifique général ou agricole",
                    "desc": "Passion pour les sciences naturelles et la nature."
                },
                {
                    "step": "Licence (Bac +3)",
                    "title": "Licence Sciences de la Vie mention Biologie des Organismes et Écologie",
                    "desc": "Bases solides de biologie cellulaire, génétique et botanique."
                },
                {
                    "step": "Master (Bac +5)",
                    "title": "Master Biologie Végétale, Biodiversité ou Gestion de la Biodiversité",
                    "desc": "Spécialisation de haut niveau en taxonomie et écologie végétale."
                },
                {
                    "step": "Doctorat (Bac +8)",
                    "title": "Doctorat en Botanique / Phytoécologie",
                    "desc": "Recherche fondamentale et valorisation de la flore."
                }
            ],
            "schools": [
                {
                    "name": "Muséum National d'Histoire Naturelle (MNHN) — Paris",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Universités de Montpellier, Strasbourg et Grenoble (Pôles d'excellence en biologie végétale)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut des Sciences de l'Environnement (ISE) / Faculté des Sciences (UCAD) — Dakar",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Master en Sciences Végétales",
                "Doctorat en Botanique / Biologie Végétale"
            ]
        },
        "career": {
            "sectors": [
                "Protection de la nature et environnement",
                "Recherche fondamentale et muséologie",
                "Industrie pharmaceutique et cosmétique"
            ],
            "employerTypes": [
                "Conservatoires Botaniques Nationaux (CBN)",
                "Muséums et parcs nationaux",
                "Bureaux d'études écologiques",
                "Laboratoires cosmétiques (phyto-cosmétique)"
            ],
            "evolution": "Botaniste chargé d'études ➔ Responsable scientifique de conservatoire botanique ➔ Conservateur d'herbier ➔ Enseignant-chercheur universitaire",
            "pros": "Vivre au plus près des merveilles de la biodiversité végétale, travail en extérieur stimulant, contribution vitale à la sauvegarde des espèces menacées.",
            "cons": "Postes de titulaires académiques rares et sélectifs, conditions météo rudes lors des longues campagnes de terrain."
        },
        "salary": "🇫🇷 France : 2 000 - 3 800 € net/mois selon statut (CIDJ) • 🇸🇳 Sénégal : 200 000 - 700 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Plus de 50% de l'ensemble des médicaments modernes prescrits en pharmacie (de l'aspirine issue du saule à la morphine issue du pavot ou aux anticancéreux issus de l'if) ont été découverts grâce aux travaux méticuleux des botanistes étudiant les plantes !",
            "pourquoi": "Le règne végétal a développé au cours de 400 millions d'années d'évolution un arsenal de défense chimique d'une complexité moléculaire inégalée."
        },
        "sources": [
            {
                "organization": "CIDJ",
                "title": "Fiche métier : Botaniste",
                "url": "https://www.cidj.com/s-orienter/metiers/botaniste",
                "type": "metier"
            },
            {
                "organization": "Tela Botanica — Réseau des botanistes francophones",
                "title": "La botanique aujourd'hui",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "nature-plantes-botanique",
            "nature-environnement",
            "experiences-laboratoire"
        ],
        "relatedJobSlugs": [
            "microbiologiste",
            "ingenieur-agronome",
            "technicien-biologiste"
        ],
        "summary": "Scientifique explorateur des plantes, il étudie la physiologie végétale, identifie et classe les espèces de flore, préserve la biodiversité et découvre de nouvelles molécules végétales.",
        "description": "Le CIDJ documente le métier de botaniste comme un savant équilibre entre expéditions de terrain et analyses de laboratoire. Équipé d'une loupe botanique, d'un sécateur et d'un carnet, le botaniste recense la flore sauvage, cartographie les habitats végétaux protégés, conserve les herbiers et étudie les propriétés médicinales ou agronomiques des plantes. Face au changement climatique et à la disparition rapide d'espèces végétales, son expertise est indispensable aux parcs nationaux, aux semenciers et à la recherche pharmaceutique.",
        "studyLevel": "Bac +5 à Bac +8 (Master Biodiversité Végétale / Doctorat en Biologie Végétale)",
        "daily": {
            "morning": "Départ en prospection de terrain dans une zone humide protégée pour inventorier les espèces d'orchidées sauvages • Relevé phytosociologique : identification des strates végétales et estimation du recouvrement au mètre carré",
            "afternoon": "Prélèvement délicat d'échantillons foliaires et mise sous presse dans le séchoir d'herbier • Au laboratoire : observation des étamines et grains de pollen sous loupe binoculaire pour confirmer une sous-espèce • Saisie des données géoréférencées dans la base de données nationale de la flore (eFlore / Tela Botanica)",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/botaniste"
    },
    {
        "id": "coloriste-textile",
        "slug": "coloriste-textile",
        "title": "Coloriste Textile",
        "aliases": [
            "Technicien coloriste",
            "Ingénieur colorimétrie textile",
            "Teinturier industriel"
        ],
        "icon": "🧵",
        "familyId": "biologie-chimie",
        "connectedFamilies": [
            "biologie-chimie",
            "industrie-mecanique",
            "culture-medias"
        ],
        "domain": "Chimie Industrielle, Teintures & Matériaux",
        "domainId": "chimie-industrie",
        "subdomain": "Colorimétrie textile",
        "shortDescription": "Alchimiste des teintes et de la matière, il formule les colorants et teintures chimiques pour reproduire à l'identique la nuance exacte d'un tissu imaginée par les stylistes.",
        "longDescription": "Le CIDJ documente le métier de coloriste textile comme une spécialité technique de pointe rattachée à la chimie et aux matériaux industriels. Travaillant pour l'industrie de l'habillement, de la haute couture, de l'ameublement ou de l'automobile, le coloriste reçoit un échantillon ou une référence Pantone du styliste. En laboratoire de teinturerie, il dose les pigments, colorants acides ou réactifs, teste la réaction chimique sur les fibres (coton, soie, polyester), mesure les écarts de couleur sous spectrophotomètre et valide la tenue au lavage, au frottement et aux rayons UV.",
        "simpleDefinition": "Chimiste spécialiste de la couleur qui crée la formule exacte pour teindre les vêtements et les tissus dans la teinte précise demandée par la mode.",
        "level": "Bac +2 à Bac +5 (BTS Métiers de la chimie / Ingénieur Textile & Chimie)",
        "missions": [
            "Analyser l'échantillon de couleur fourni par le styliste et identifier la famille de colorants adaptée à la fibre textile",
            "Formuler le mélange chimique de teinturerie (colorants primaires, fixateurs, agents mouillants) au gramme près",
            "Réaliser des essais de teinture en laboratoire sur des éprouvettes de tissu",
            "Mesurer avec exactitude le spectre lumineux de la couleur sous spectrophotomètre (espace colorimétrique L*a*b*)",
            "Transposer la recette de teinture du laboratoire vers les cuves industrielles géantes de production (scale-up)"
        ],
        "workEnvironment": "Laboratoires de recherche et de teinturerie des usines textiles, ateliers d'ennoblissement, industrie de l'habillement et équipementiers automobiles.",
        "typicalDay": [
            {
                "time": "08:00",
                "activity": "Étalonnage quotidien du spectrophotomètre de colorimétrie à l'aide des étalons noir et blanc"
            },
            {
                "time": "09:00",
                "activity": "Formulation d'un bain de teinture pour obtenir un 'vert sauge' sur du sergé de coton bio"
            },
            {
                "time": "11:00",
                "activity": "Sortie des éprouvettes teintes de l'appareil de laboratoire et séchage thermorégulé"
            },
            {
                "time": "13:30",
                "activity": "Mesure spectrophotométrique : calcul du Delta E (écart de couleur) par rapport au standard client"
            },
            {
                "time": "15:30",
                "activity": "Tests de solidité : passage des échantillons au xénotest pour vérifier la résistance au soleil sans décoloration"
            }
        ],
        "skills": {
            "technical": [
                "Chimie tinctoriale et affinité des colorants avec les fibres naturelles et synthétiques",
                "Colorimétrie scientifique (espace CIE L*a*b*, calculs des tolérances Delta E)",
                "Spectrophotométrie de réflexion et logiciel de contre-typage automatique",
                "Procédés d'ennoblissement textile (foulardage, teinture en pièce, apprêts)",
                "Normes écologiques et éco-toxicologiques (Oeko-Tex, REACH)"
            ],
            "human": [
                "Acuité visuelle colorée exceptionnelle (test de Farnsworth parfait, zéro daltonisme)",
                "Rigueur de chimiste et précision dans les pesées",
                "Sensibilité artistique aux matières et à la lumière",
                "Réactivité face aux exigences de cadence de la mode"
            ],
            "tools": [
                "Spectrophotomètre de paillasse à sphère d'intégration",
                "Appareil de teinture de laboratoire multi-postes (Mathis)",
                "Cabine de lumière normalisée (D65, tungstène, TL84) pour détecter le métamérisme",
                "Logiciel de contre-typage de couleur par ordinateur (Datacolor, X-Rite)"
            ],
            "soft": [
                "Acuité visuelle colorée exceptionnelle (test de Farnsworth parfait, zéro daltonisme)",
                "Rigueur de chimiste et précision dans les pesées",
                "Sensibilité artistique aux matières et à la lumière",
                "Réactivité face aux exigences de cadence de la mode"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Bac STL Chimie ou Bac général scientifique",
                    "desc": "Goût pour la chimie pratique et les couleurs."
                },
                {
                    "step": "Diplôme Bac +2 à +3",
                    "title": "BTS Métiers de la chimie ou BTS Innovation textile",
                    "desc": "Formation technique aux procédés chimiques et textiles."
                },
                {
                    "step": "Diplôme d'Ingénieur (Bac +5)",
                    "title": "Diplôme d'Ingénieur Textile et Chimie (ITECH Lyon, ENSAIT)",
                    "desc": "Haute qualification en formulation chimique et management industriel."
                }
            ],
            "schools": [
                {
                    "name": "ITECH Lyon (Institut Textile et Chimique de Lyon — La référence mondiale des coloristes)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "ENSAIT — Roubaix (École Nationale Supérieure des Arts et Industries Textiles)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Lycées techniques et centres de formation textile et teinturerie — Dakar / Thiès",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "BTS Innovation Textile option Traitements",
                "Diplôme d'Ingénieur ITECH Chimie et Matériaux"
            ]
        },
        "career": {
            "sectors": [
                "Industrie textile et habillement",
                "Haute couture et luxe",
                "Plasturgie, cosmétique et peintures"
            ],
            "employerTypes": [
                "Usines de teinture et ennoblissement textile",
                "Grandes maisons de mode et de sport (LVMH, Kering, Decathlon)",
                "Fabricants de colorants chimiques"
            ],
            "evolution": "Coloriste de laboratoire ➔ Responsable de laboratoire colorimétrique ➔ Directeur d'atelier de teinturerie ➔ Directeur technique d'usine textile",
            "pros": "Métier visuel fascinant à l'intersection de la mode et de la chimie, voir ses créations colorées défiler ou portées par des millions de personnes.",
            "cons": "Manipulations de poudres tinctoriales tachantes, exposition aux odeurs de bains de teinture nécessitant des hottes aspirantes."
        },
        "salary": "🇫🇷 France : 1 900 - 3 200 € net/mois selon qualification (CIDJ) • 🇸🇳 Sénégal : 160 000 - 480 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Deux tissus peuvent paraître exactement de la même couleur sous la lumière du jour, mais devenir totalement dissemblables sous la lumière artificielle d'un magasin ! Ce piège optique bien connu des coloristes s'appelle le 'métamérisme'.",
            "pourquoi": "Si les mélanges de pigments chimiques sont différents, les spectres de réflexion ne réagissent pas de la même façon selon la température de couleur de l'éclairage."
        },
        "sources": [
            {
                "organization": "CIDJ",
                "title": "Fiche métier : Coloriste textile",
                "url": "https://www.cidj.com/s-orienter/metiers/coloriste-textile",
                "type": "metier"
            },
            {
                "organization": "Union des Industries Textiles (UIT)",
                "title": "Les métiers de la couleur et de la finition textile",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "creer-produits-chimie",
            "creer-designer",
            "experiences-laboratoire"
        ],
        "relatedJobSlugs": [
            "technicien-chimiste",
            "ingenieur-formulation",
            "parfumeur"
        ],
        "summary": "Alchimiste des teintes et de la matière, il formule les colorants et teintures chimiques pour reproduire à l'identique la nuance exacte d'un tissu imaginée par les stylistes.",
        "description": "Le CIDJ documente le métier de coloriste textile comme une spécialité technique de pointe rattachée à la chimie et aux matériaux industriels. Travaillant pour l'industrie de l'habillement, de la haute couture, de l'ameublement ou de l'automobile, le coloriste reçoit un échantillon ou une référence Pantone du styliste. En laboratoire de teinturerie, il dose les pigments, colorants acides ou réactifs, teste la réaction chimique sur les fibres (coton, soie, polyester), mesure les écarts de couleur sous spectrophotomètre et valide la tenue au lavage, au frottement et aux rayons UV.",
        "studyLevel": "Bac +2 à Bac +5 (BTS Métiers de la chimie / Ingénieur Textile & Chimie)",
        "daily": {
            "morning": "Étalonnage quotidien du spectrophotomètre de colorimétrie à l'aide des étalons noir et blanc • Formulation d'un bain de teinture pour obtenir un 'vert sauge' sur du sergé de coton bio • Sortie des éprouvettes teintes de l'appareil de laboratoire et séchage thermorégulé",
            "afternoon": "Mesure spectrophotométrique : calcul du Delta E (écart de couleur) par rapport au standard client • Tests de solidité : passage des échantillons au xénotest pour vérifier la résistance au soleil sans décoloration",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/coloriste-textile"
    },
    {
        "id": "employe-technique-laboratoire",
        "slug": "employe-technique-laboratoire",
        "title": "Employé / Employée Technique de Laboratoire",
        "aliases": [
            "Aide de laboratoire",
            "Agent technique de laboratoire",
            "Préparateur technique d'analyses"
        ],
        "icon": "🧪",
        "familyId": "biologie-chimie",
        "connectedFamilies": [
            "biologie-chimie",
            "sante-soins-paramedical"
        ],
        "domain": "Laboratoires, Analyses & Essais Scientifiques",
        "domainId": "laboratoires-analyses",
        "subdomain": "Préparation technique & Verrerie",
        "shortDescription": "Assistant logistique et technique indispensable des chercheurs et techniciens, il nettoie la verrerie de haute précision, prépare les réactifs simples et gère les consommables.",
        "longDescription": "Le CIDJ distingue formellement l'employé technique de laboratoire du technicien d'analyses. L'employé technique assure la préparation matérielle sans laquelle aucune manipulation scientifique ne peut débuter. Il lave et stérilise la verrerie jaugée au laveur spécialisé sans laisser la moindre trace de calcaire ou de produit, prépare les milieux de culture gélosés standards, approvisionne les postes de travail en pipettes et consommables, gère les stocks de produits chimiques de base et veille au tri des déchets chimiques et biologiques.",
        "simpleDefinition": "Professionnel qui prépare la verrerie ultra-propre, range les produits et fabrique les mélanges de base dont les chimistes ont besoin pour travailler.",
        "level": "CAP / BEP à Bac (CAP Agent de laboratoire / Bac STL)",
        "missions": [
            "Assurer le lavage manuel et automatisé de la verrerie scientifique avec détergents enzymatiques et eau déminéralisée",
            "Stériliser la verrerie et les milieux de culture à l'autoclave et au four Poupinel",
            "Préparer les solutions chimiques de base, les gels et les milieux de culture bactériologiques simples",
            "Réceptionner, étiqueter et ranger les livraisons de réactifs chimiques et consommables plastiques",
            "Conditionner les déchets de laboratoire (verre souillé, solvants usagés, déchets DASRI) selon les protocoles de sécurité"
        ],
        "workEnvironment": "Laboratoires de recherche universitaires, lycées et collèges (personnels techniques d'éducation), laboratoires d'analyses industrielles et médicales.",
        "typicalDay": [
            {
                "time": "08:00",
                "activity": "Déchargement des laveurs de verrerie et rangement méticuleux des fioles et béchers séchés dans les placards fermés"
            },
            {
                "time": "09:30",
                "activity": "Pesée de poudre nutritive de gélose et préparation de 5 litres de milieu de culture stérile pour l'équipe de microbiologie"
            },
            {
                "time": "11:30",
                "activity": "Coulage des boîtes de Pétri stériles sous flux laminaire et mise au frais"
            },
            {
                "time": "14:00",
                "activity": "Réception d'une palette de réactifs de chimie : vérification des fiches de données de sécurité (FDS) et stockage dans les armoires ventilées"
            },
            {
                "time": "16:00",
                "activity": "Collecte des bidons de solvants halogénés usagés et évacuation vers le local sécurisé des déchets chimiques"
            }
        ],
        "skills": {
            "technical": [
                "Techniques de nettoyage et décontamination chimique de la verrerie jaugée",
                "Utilisation des balances de précision, pH-mètres et autoclaves de paillasse",
                "Symboles de danger chimique (pictogrammes CLP) et règles de stockage des incompatibles",
                "Règles d'hygiène et sécurité au laboratoire (manipulation d'acides et bases)",
                "Gestion des stocks et traçabilité des lots de consommables"
            ],
            "human": [
                "Rigueur, méthode et soin méticuleux dans le geste",
                "Sens du service et de l'entraide en équipe scientifique",
                "Respect intransigeant des consignes de sécurité",
                "Bonne organisation pour ne jamais se laisser déborder par la verrerie sale"
            ],
            "tools": [
                "Laveur-désinfecteur de verrerie de laboratoire (Miele Professional)",
                "Autoclave vertical de laboratoire",
                "Distillateur / Osmoseur d'eau ultra-pure",
                "Armoires de sécurité ventilées pour produits inflammables et corrosifs"
            ],
            "soft": [
                "Rigueur, méthode et soin méticuleux dans le geste",
                "Sens du service et de l'entraide en équipe scientifique",
                "Respect intransigeant des consignes de sécurité",
                "Bonne organisation pour ne jamais se laisser déborder par la verrerie sale"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Diplôme d'accès",
                    "title": "CAP Agent technique de laboratoire ou Bac STL / Bac Pro PCEPC",
                    "desc": "Apprentissage des bases pratiques de laboratoire."
                },
                {
                    "step": "Concours de la fonction publique (optionnel)",
                    "title": "Concours d'Adjoint Technique de Recherche et de Formation (ATRF)",
                    "desc": "Pour exercer dans les universités, lycées et organismes publics (CNRS, Inserm)."
                }
            ],
            "schools": [
                {
                    "name": "Lycées préparant au Bac STL et CAP techniques en France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centres de formation professionnelle technique et facultés des sciences — Dakar",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "CAP Agent de Laboratoire",
                "Habilitation sécurité chimique",
                "Attestation de formation aux déchets dangereux"
            ]
        },
        "career": {
            "sectors": [
                "Enseignement secondaire et supérieur",
                "Recherche académique",
                "Industrie chimique et agroalimentaire"
            ],
            "employerTypes": [
                "Éducation Nationale (collèges, lycées)",
                "Organismes publics de recherche (CNRS, universités)",
                "Laboratoires de contrôle qualité industriels"
            ],
            "evolution": "Employé technique de laboratoire ➔ Technicien de laboratoire (par concours interne ou VAE) ➔ Responsable logistique de laboratoire",
            "pros": "Métier calme et très structuré, intégration dans un milieu scientifique stimulant, horaires fixes réguliers sans gardes.",
            "cons": "Tâches répétitives de nettoyage, port de gants et lunettes obligatoire, manutention de bacs de verrerie lourds."
        },
        "salary": "🇫🇷 France : 1 550 - 2 000 € net/mois selon échelon (CIDJ) • 🇸🇳 Sénégal : 100 000 - 240 000 FCFA net/mois",
        "saviezVous": {
            "fait": "En chimie de haute précision (spectrométrie de masse), une simple trace microscopique de détergent oubliée sur une éprouvette en verre peut fausser complètement une expérience coûtant plusieurs dizaines de milliers d'euros !",
            "pourquoi": "L'employé technique rince systématiquement la verrerie à l'eau déminéralisée puis osmosée de grade milli-Q pour garantir une pureté totale."
        },
        "sources": [
            {
                "organization": "CIDJ",
                "title": "Fiche métier : Employé technique de laboratoire",
                "url": "https://www.cidj.com/s-orienter/metiers/employe-employee-technique-de-laboratoire",
                "type": "metier"
            },
            {
                "organization": "Ministère de l'Éducation Nationale et de la Recherche",
                "title": "Corps des adjoints techniques de recherche et de formation (ATRF)",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "experiences-laboratoire",
            "soigner-aider",
            "construire-fabriquer"
        ],
        "relatedJobSlugs": [
            "technicien-laboratoire",
            "agent-sterilisation",
            "technicien-chimiste"
        ],
        "summary": "Assistant logistique et technique indispensable des chercheurs et techniciens, il nettoie la verrerie de haute précision, prépare les réactifs simples et gère les consommables.",
        "description": "Le CIDJ distingue formellement l'employé technique de laboratoire du technicien d'analyses. L'employé technique assure la préparation matérielle sans laquelle aucune manipulation scientifique ne peut débuter. Il lave et stérilise la verrerie jaugée au laveur spécialisé sans laisser la moindre trace de calcaire ou de produit, prépare les milieux de culture gélosés standards, approvisionne les postes de travail en pipettes et consommables, gère les stocks de produits chimiques de base et veille au tri des déchets chimiques et biologiques.",
        "studyLevel": "CAP / BEP à Bac (CAP Agent de laboratoire / Bac STL)",
        "daily": {
            "morning": "Déchargement des laveurs de verrerie et rangement méticuleux des fioles et béchers séchés dans les placards fermés • Pesée de poudre nutritive de gélose et préparation de 5 litres de milieu de culture stérile pour l'équipe de microbiologie • Coulage des boîtes de Pétri stériles sous flux laminaire et mise au frais",
            "afternoon": "Réception d'une palette de réactifs de chimie : vérification des fiches de données de sécurité (FDS) et stockage dans les armoires ventilées • Collecte des bidons de solvants halogénés usagés et évacuation vers le local sécurisé des déchets chimiques",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/employe-employee-technique-de-laboratoire"
    },
    {
        "id": "ingenieur-biotechnologie",
        "slug": "ingenieur-biotechnologie",
        "title": "Ingénieur / Ingénieure en Biotechnologie",
        "aliases": [
            "Biotechnologiste",
            "Ingénieur bioprocédés",
            "Bio-ingénieur de recherche"
        ],
        "icon": "🧬",
        "familyId": "biologie-chimie",
        "connectedFamilies": [
            "biologie-chimie",
            "sante-soins-paramedical",
            "agriculture-agritech",
            "industrie-mecanique"
        ],
        "domain": "Biotechnologies & Génie Génétique",
        "domainId": "biotechnologies",
        "subdomain": "Biotechnologies blanches et rouges",
        "shortDescription": "Ingénieur du vivant, il utilise des cellules, des bactéries ou des enzymes génétiquement programmées pour fabriquer des vaccins, des biomédicaments, des bioplastiques et des biocarburants.",
        "longDescription": "D'après la fiche officielle du CIDJ, l'ingénieur en biotechnologie applique les découvertes de la biologie moléculaire à l'échelle industrielle. Qu'il travaille dans les biotechnologies rouges (santé : anticorps monoclonaux, thérapies géniques), blanches (industrie : enzymes de lessives, biocarburants) ou vertes (agriculture : plantes résistantes à la sécheresse), il modifie le génome de micro-organismes, optimise la fermentation en bioréacteurs géants, purifie les molécules d'intérêt et supervise la transition de la paillasse vers la production industrielle.",
        "simpleDefinition": "Ingénieur qui programme des micro-organismes vivants (bactéries, levures) comme de minuscules usines pour fabriquer des médicaments innovants et des produits écologiques.",
        "level": "Bac +5 à Bac +8 (Diplôme d'Ingénieur en Biotechnologie / Master / Doctorat)",
        "missions": [
            "Concevoir des vecteurs génétiques et introduire des gènes d'intérêt dans des cellules hôtes (bactéries, levures, cellules CHO)",
            "Développer et optimiser les protocoles de culture cellulaire en fermenteurs et bioréacteurs (paramètres de pH, oxygène dissous, nutriments)",
            "Mettre au point les techniques de purification des protéines recombinantes (chromatographie d'affinité, filtration tangentielle)",
            "Valider la conformité des bioproduits aux normes pharmacopées et réglementaires strictes",
            "Piloter des projets d'innovation et déposer des brevets de propriété intellectuelle"
        ],
        "workEnvironment": "Laboratoires de R&D des multinationales biopharmaceutiques (Sanofi, Roche), start-ups de biotechnologie, usines de bioproduction, instituts de recherche.",
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Vérification des courbes de croissance cellulaire de la nuit sur les bioréacteurs connectés"
            },
            {
                "time": "10:00",
                "activity": "Extraction et dosage d'un anticorps monoclonal thérapeutique exprimé par des cellules de mammifères"
            },
            {
                "time": "12:00",
                "activity": "Purification sur colonne chromatographique FPLC et analyse par électrophorèse SDS-PAGE"
            },
            {
                "time": "14:30",
                "activity": "Réunion de transfert technologique avec les ingénieurs de l'usine de bioproduction pour augmenter le volume à 2 000 litres"
            },
            {
                "time": "16:45",
                "activity": "Rédaction du rapport de brevet décrivant une nouvelle méthode de fermentation enzymatique continue"
            }
        ],
        "skills": {
            "technical": [
                "Génie génétique, biologie moléculaire avancée et technologie de l'ADN recombinant",
                "Conduite et régulation des bioréacteurs (amont / upstream processing)",
                "Techniques de purification et séparation des biomolécules (aval / downstream processing)",
                "Réglementation pharmaceutique et Bonnes Pratiques de Fabrication (BPF / cGMP)",
                "Analyses biophysiques des protéines (spectrométrie de masse, diffusion de lumière DLS)"
            ],
            "human": [
                "Esprit d'innovation et créativité scientifique",
                "Rigueur méthodologique et exigence de traçabilité expérimentale",
                "Aptitude au management d'équipe pluridisciplinaire (techniciens, biologistes)",
                "Anglais scientifique courant obligatoire pour la littérature et les brevets"
            ],
            "tools": [
                "Bioréacteurs automatisés de paillasse et pilotes industriels",
                "Systèmes de chromatographie de purification FPLC (AKTA)",
                "Spectrophotomètres UV-visible et lecteurs de microplaques",
                "Logiciels de modélisation de bioprocédés et statistiques expérimentales"
            ],
            "soft": [
                "Esprit d'innovation et créativité scientifique",
                "Rigueur méthodologique et exigence de traçabilité expérimentale",
                "Aptitude au management d'équipe pluridisciplinaire (techniciens, biologistes)",
                "Anglais scientifique courant obligatoire pour la littérature et les brevets"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Baccalauréat général scientifique",
                    "desc": "Excellentes notes en biologie, chimie et mathématiques."
                },
                {
                    "step": "Classes préparatoires / Licence (Bac +2 à +3)",
                    "title": "Prépa BCPST ou Licence Biologie/Biochimie",
                    "desc": "Concours d'entrée en école d'ingénieurs."
                },
                {
                    "step": "École d'Ingénieurs (Bac +5)",
                    "title": "Diplôme d'Ingénieur en Biotechnologie / Génie Biologique",
                    "desc": "Formation de 3 ans avec stages industriels majeurs en biopharma."
                }
            ],
            "schools": [
                {
                    "name": "ESBS — Strasbourg (École Supérieure de Biotechnologie de Strasbourg)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "INSA Toulouse (Génie Biologique) / UTC Compiègne",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "ESP Dakar / Université Amadou Mahtar Mbow (UAM) — Diamniadio (Génie des Procédés et Biopharmacie)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Titre d'Ingénieur Diplômé certifié par la CTI (Commission des Titres d'Ingénieur)",
                "Master Sciences du Vivant et Biotechnologies"
            ]
        },
        "career": {
            "sectors": [
                "Industrie biopharmaceutique",
                "Agro-biotechnologies",
                "Chimie verte et environnement"
            ],
            "employerTypes": [
                "Laboratoires pharmaceutiques mondiaux",
                "Start-ups innovantes (Biotechs)",
                "Instituts de bioproduction (Institut Pasteur de Dakar - projet MADIBA)"
            ],
            "evolution": "Ingénieur R&D bioprocédés ➔ Chef de projet biotechnologies ➔ Responsable de production de vaccins/anticorps ➔ Directeur scientifique (CSO)",
            "pros": "Être au cœur des thérapies les plus révolutionnaires du siècle (vaccins ARN, immunothérapie du cancer), industrie en expansion fulgurante attirant des milliards d'investissements.",
            "cons": "Délais très longs de mise sur le marché d'un médicament (10 ans en moyenne), pression des rendements de culture biologique imprévisibles."
        },
        "salary": "🇫🇷 France : 2 800 - 5 500 € net/mois selon secteur et expérience (CIDJ) • 🇸🇳 Sénégal : 450 000 - 1 600 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Le vaccin contre le Covid-19 à ARN messager ou les nouveaux traitements révolutionnaires par anticorps monoclonaux contre les cancers ne sont pas fabriqués par de la chimie classique en éprouvette, mais produits par des cellules vivantes cultivées en bioréacteurs par des ingénieurs en biotechnologie !",
            "pourquoi": "Ces molécules géantes sont si complexes qu'aucune synthèse chimique artificielle n'est capable de les assembler à l'identique."
        },
        "sources": [
            {
                "organization": "CIDJ",
                "title": "Fiche métier : Ingénieur en biotechnologie",
                "url": "https://www.cidj.com/s-orienter/metiers/ingenieur-ingenieure-en-biotechnologie",
                "type": "metier"
            },
            {
                "organization": "France Biotech",
                "title": "Panorama des métiers des biotechnologies",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "experiences-laboratoire",
            "creer-produits-chimie",
            "soigner-aider",
            "technologie-code"
        ],
        "relatedJobSlugs": [
            "technicien-bioproduction",
            "bio-informaticien",
            "microbiologiste",
            "ingenieur-recherche-produit"
        ],
        "summary": "Ingénieur du vivant, il utilise des cellules, des bactéries ou des enzymes génétiquement programmées pour fabriquer des vaccins, des biomédicaments, des bioplastiques et des biocarburants.",
        "description": "D'après la fiche officielle du CIDJ, l'ingénieur en biotechnologie applique les découvertes de la biologie moléculaire à l'échelle industrielle. Qu'il travaille dans les biotechnologies rouges (santé : anticorps monoclonaux, thérapies géniques), blanches (industrie : enzymes de lessives, biocarburants) ou vertes (agriculture : plantes résistantes à la sécheresse), il modifie le génome de micro-organismes, optimise la fermentation en bioréacteurs géants, purifie les molécules d'intérêt et supervise la transition de la paillasse vers la production industrielle.",
        "studyLevel": "Bac +5 à Bac +8 (Diplôme d'Ingénieur en Biotechnologie / Master / Doctorat)",
        "daily": {
            "morning": "Vérification des courbes de croissance cellulaire de la nuit sur les bioréacteurs connectés • Extraction et dosage d'un anticorps monoclonal thérapeutique exprimé par des cellules de mammifères • Purification sur colonne chromatographique FPLC et analyse par électrophorèse SDS-PAGE",
            "afternoon": "Réunion de transfert technologique avec les ingénieurs de l'usine de bioproduction pour augmenter le volume à 2 000 litres • Rédaction du rapport de brevet décrivant une nouvelle méthode de fermentation enzymatique continue",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/ingenieur-ingenieure-en-biotechnologie"
    },
    {
        "id": "ingenieur-police-scientifique",
        "slug": "ingenieur-police-scientifique",
        "title": "Ingénieur / Ingénieure de la Police Technique et Scientifique",
        "aliases": [
            "Ingénieur PTS",
            "Expert criminalistique en chef",
            "Directeur de laboratoire de police scientifique"
        ],
        "icon": "👮",
        "familyId": "biologie-chimie",
        "connectedFamilies": [
            "biologie-chimie",
            "droit-management",
            "industrie-mecanique"
        ],
        "domain": "Police Technique & Scientifique (Criminalistique)",
        "domainId": "police-scientifique",
        "subdomain": "Biologie médico-légale (ADN)",
        "shortDescription": "Haut fonctionnaire scientifique, il dirige les expertises judiciaires complexes au laboratoire de criminalistique (ADN, toxicologie, balistique, stupéfiants) pour confondre les criminels.",
        "longDescription": "Le CIDJ référence les métiers de la police technique et scientifique au carrefour de Biologie-Chimie et de la Sécurité publique. L'ingénieur de police technique et scientifique (catégorie A) est un spécialiste de haut niveau scientifique (spécialités biologie moléculaire, chimie analytique, toxicologie, physique, balistique). Responsable de section en laboratoire de police scientifique ou à l'IRCGN, il valide les profils génétiques ADN, identifie les poisons et explosifs, rédige les rapports d'expertise judiciaire destinés aux juges d'instruction et témoigne aux assises pour expliquer scientifiquement les preuves matérielles.",
        "simpleDefinition": "Scientifique de haut niveau de la police qui dirige les analyses des traces de sang, d'ADN, de poisons et d'explosifs pour résoudre les crimes.",
        "level": "Bac +5 (Diplôme d'Ingénieur ou Master Scientifique + Concours du Ministère de l'Intérieur)",
        "missions": [
            "Concevoir et valider les protocoles d'analyses criminalistiques de pointe conformément aux normes d'accréditation ISO 17025",
            "Diriger la section d'expertise biologique (profils ADN, sang, sperme) ou chimique (stupéfiants, incendies, résidus de tir)",
            "Interpréter les résultats d'analyses et procéder aux comparaisons avec le Fichier National Automatisé des Empreintes Génétiques (FNAEG)",
            "Rédiger des rapports d'expertise médico-légale opposables devant la justice",
            "Témoigner en tant qu'expert judiciaire assermenté devant la Cour d'Assises et les tribunaux"
        ],
        "workEnvironment": "Laboratoires de police scientifique (SNPS en France, laboratoires de criminalistique de Dakar), Institut de Recherche Criminelle de la Gendarmerie Nationale (IRCGN).",
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Réception sous scellés judiciaires des prélèvements d'un dossier de meurtre non élucidé"
            },
            {
                "time": "09:30",
                "activity": "Supervision des analyses de profil génétique par séquençage capillaire menées par les techniciens"
            },
            {
                "time": "11:45",
                "activity": "Analyse d'un spectre de masse révélant la présence d'une nouvelle drogue de synthèse de synthèse dans un échantillon toxicologique"
            },
            {
                "time": "14:30",
                "activity": "Rédaction méticuleuse d'un rapport d'expertise technique pour le juge d'instruction"
            },
            {
                "time": "16:30",
                "activity": "Point téléphonique avec les enquêteurs de la brigade criminelle sur la compatibilité d'une trace ADN"
            }
        ],
        "skills": {
            "technical": [
                "Génétique médico-légale (STR, ADN mitochondrial, profilage génétique)",
                "Chimie analytique criminalistique (chromatographie gazeuse couplée spectrométrie de masse GC-MS)",
                "Droit pénal, procédure pénale et règles de conservation de la preuve matérielle (scellés)",
                "Norme qualité ISO 17025 des laboratoires d'essais médico-légaux",
                "Statistiques bayésiennes appliquées à l'évaluation des indices scientifiques"
            ],
            "human": [
                "Intégrité morale absolue, neutralité et sens de la justice",
                "Rigueur scientifique sans concession (le doute profite toujours à la défense)",
                "Clarté d'expression orale et écrite pour expliquer la science aux magistrats",
                "Résistance psychologique face à des affaires criminelles sordides"
            ],
            "tools": [
                "Analyseurs génétiques de séquençage d'ADN par électrophorèse capillaire (Applied Biosystems)",
                "Spectromètre de masse haute résolution GC-MS / LC-MS-MS",
                "Microscope électronique à balayage (MEB) pour résidus de tir",
                "Logiciels de comparaison génétique et bases FNAEG"
            ],
            "soft": [
                "Intégrité morale absolue, neutralité et sens de la justice",
                "Rigueur scientifique sans concession (le doute profite toujours à la défense)",
                "Clarté d'expression orale et écrite pour expliquer la science aux magistrats",
                "Résistance psychologique face à des affaires criminelles sordides"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Bac scientifique général",
                    "desc": "Bases d'excellence en biologie et chimie."
                },
                {
                    "step": "Diplôme universitaire (Bac +5)",
                    "title": "Master Biologie Moléculaire, Master Chimie Analytique ou Diplôme d'Ingénieur",
                    "desc": "Formation scientifique de très haut niveau."
                },
                {
                    "step": "Concours de la Police Nationale",
                    "title": "Concours d'Ingénieur de la Police Technique et Scientifique (Catégorie A)",
                    "desc": "Concours très sélectif organisé par le Ministère de l'Intérieur avec épreuves écrites et orales dans la spécialité choisie."
                }
            ],
            "schools": [
                {
                    "name": "Service National de Police Scientifique (SNPS) / Universités partenaires — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Nationale de Police et de Formation Permanente — Dakar (Sénégal) / Laboratoire de Police Scientifique",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Ingénieur de Police Technique et Scientifique assermenté",
                "Agrément d'Expert près la Cour d'Appel"
            ]
        },
        "career": {
            "sectors": [
                "Police Nationale et Gendarmerie",
                "Justice et tribunaux",
                "Instituts de criminalistique"
            ],
            "employerTypes": [
                "Ministère de l'Intérieur (Direction Générale de la Police Nationale)",
                "Ministère des Armées (Gendarmerie Nationale)",
                "Organisations internationales de police (Interpol)"
            ],
            "evolution": "Ingénieur de PTS ➔ Ingénieur principal de PTS ➔ Chef de division / Chef de laboratoire de police scientifique ➔ Directeur de laboratoire",
            "pros": "Mettre la science au service de la vérité et de la justice, élucider des crimes réputés insolubles, environnement scientifique ultra-pointu.",
            "cons": "Nombre de postes très limité par an au concours, confrontation quotidienne à la noirceur humaine et aux scènes de violence."
        },
        "salary": "🇫🇷 France : 2 500 - 4 800 € net/mois selon grade et primes de police (CIDJ) • 🇸🇳 Sénégal : 350 000 - 950 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Une trace d'ADN contenant seulement quelques cellules (ADN de contact laissé par un doigt sur une poignée de porte) suffit aujourd'hui à un ingénieur de police scientifique pour établir un profil génétique complet grâce à la technologie PCR qui amplifie des millions de fois le moindre brin d'ADN !",
            "pourquoi": "La criminalistique moderne repose sur la sensibilité prodigieuse des techniques biochimiques d'amplification enzymatique."
        },
        "sources": [
            {
                "organization": "CIDJ",
                "title": "Fiche métier : Ingénieur de la police technique et scientifique",
                "url": "https://www.cidj.com/s-orienter/metiers/ingenieur-ingenieure-de-la-police-technique-et-scientifique",
                "type": "metier"
            },
            {
                "organization": "Police Nationale — Ministère de l'Intérieur",
                "title": "Ingénieur de la police technique et scientifique",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "police-scientifique-enquete",
            "experiences-laboratoire",
            "proteger-defendre"
        ],
        "relatedJobSlugs": [
            "technicien-police-scientifique",
            "technicien-principal-police-scientifique",
            "microbiologiste",
            "technicien-chimiste"
        ],
        "summary": "Haut fonctionnaire scientifique, il dirige les expertises judiciaires complexes au laboratoire de criminalistique (ADN, toxicologie, balistique, stupéfiants) pour confondre les criminels.",
        "description": "Le CIDJ référence les métiers de la police technique et scientifique au carrefour de Biologie-Chimie et de la Sécurité publique. L'ingénieur de police technique et scientifique (catégorie A) est un spécialiste de haut niveau scientifique (spécialités biologie moléculaire, chimie analytique, toxicologie, physique, balistique). Responsable de section en laboratoire de police scientifique ou à l'IRCGN, il valide les profils génétiques ADN, identifie les poisons et explosifs, rédige les rapports d'expertise judiciaire destinés aux juges d'instruction et témoigne aux assises pour expliquer scientifiquement les preuves matérielles.",
        "studyLevel": "Bac +5 (Diplôme d'Ingénieur ou Master Scientifique + Concours du Ministère de l'Intérieur)",
        "daily": {
            "morning": "Réception sous scellés judiciaires des prélèvements d'un dossier de meurtre non élucidé • Supervision des analyses de profil génétique par séquençage capillaire menées par les techniciens • Analyse d'un spectre de masse révélant la présence d'une nouvelle drogue de synthèse de synthèse dans un échantillon toxicologique",
            "afternoon": "Rédaction méticuleuse d'un rapport d'expertise technique pour le juge d'instruction • Point téléphonique avec les enquêteurs de la brigade criminelle sur la compatibilité d'une trace ADN",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/ingenieur-ingenieure-de-la-police-technique-et-scientifique"
    },
    {
        "id": "ingenieur-recherche-produit",
        "slug": "ingenieur-recherche-produit",
        "title": "Ingénieur / Ingénieure de Recherche Produit",
        "aliases": [
            "Ingénieur R&D produit",
            "Chef de projet R&D nouveau produit",
            "Ingénieur innovation et développement"
        ],
        "icon": "🔬",
        "familyId": "biologie-chimie",
        "connectedFamilies": [
            "biologie-chimie",
            "industrie-mecanique",
            "agriculture-agritech",
            "sante-soins-paramedical",
            "environnement-climat"
        ],
        "domain": "Recherche, R&D & Développement Produit",
        "domainId": "recherche-rd-produit",
        "subdomain": "R&D industrielle",
        "shortDescription": "Ingénieur transversal de l'innovation, il explore les propriétés chimiques, biologiques et physiques des matières pour inventer les produits de consommation de demain.",
        "longDescription": "Le CIDJ met en exergue l'extrême transversalité du métier d'ingénieur de recherche produit, associé à une multitude de secteurs vitaux : agriculture, agroalimentaire, biologie-chimie, industrie, énergie, environnement et santé. En laboratoire de R&D, il transforme une idée ou un besoin consommateur en un produit tangible performant : nouvel aliment santé, cosmétique éco-conçu, biomatériau composite biodégradable ou dispositif médical. Il conçoit les expériences, teste la résistance et l'efficacité des formules, pilote les études d'industrialisation et veille au respect des normes sanitaires mondiales.",
        "simpleDefinition": "Chercheur inventeur dans l'industrie qui crée de nouveaux produits (nourriture, crèmes, plastiques écologiques) en combinant sciences et expériences.",
        "level": "Bac +5 à Bac +8 (Diplôme d'Ingénieur chimiste/biologiste / Master R&D / Doctorat)",
        "missions": [
            "Conduire des recherches appliquées pour concevoir de nouvelles formules de produits chimiques, biologiques ou alimentaires",
            "Mener des expérimentations de criblage, caractériser la matière et tester l'efficacité fonctionnelle des prototypes",
            "Optimiser les coûts de revient et substituer les matières premières polluantes par des alternatives biosourcées",
            "Superviser les tests de stabilité, de vieillissement accéléré et de tolérance toxicologique",
            "Coordonner le scale-up avec les équipes de production industrielle et de propriété industrielle (brevets)"
        ],
        "workEnvironment": "Centres mondiaux de R&D des grands groupes industriels (L'Oréal, Danone, Michelin, Sanofi, Solvay), centres techniques et PME innovantes.",
        "typicalDay": [
            {
                "time": "08:45",
                "activity": "Revue des résultats d'analyses rhéologiques et de stabilité thermique sur 3 nouveaux prototypes de formulation"
            },
            {
                "time": "10:30",
                "activity": "Séance de brainstorming avec le service marketing sur le cahier des charges d'un emballage 100% compostable"
            },
            {
                "time": "12:00",
                "activity": "Déjeuner d'échanges avec des chercheurs universitaires partenaires d'un projet d'éco-conception"
            },
            {
                "time": "14:00",
                "activity": "Supervision sur ligne pilote de fabrication du premier lot test de 50 kg du nouveau produit"
            },
            {
                "time": "16:30",
                "activity": "Analyse de la liberté d'exploitation avec le conseil en brevets de l'entreprise"
            }
        ],
        "skills": {
            "technical": [
                "Physico-chimie de la matière condensée, biochimie et caractérisation des matériaux",
                "Méthodologie des plans d'expériences (DoE) et statistiques industrielles",
                "Formulation, rhéologie et dynamique des fluides complexes",
                "Éco-conception, Analyse de Cycle de Vie (ACV) et réglementation environnementale",
                "Management de projet R&D en mode agile et propriété intellectuelle (brevets)"
            ],
            "human": [
                "Créativité foisonnante et capacité à penser 'out of the box'",
                "Pragmatisme industriel pour concilier rêve scientifique et faisabilité en usine",
                "Sens aigu de la communication collaborative inter-métiers (marketing, usine, achats)",
                "Persévérance face aux échecs expérimentaux inhérents à toute découverte"
            ],
            "tools": [
                "Rhéomètre rotatif et analyseur de texture (Texture Analyzer)",
                "Microscopes optiques et électroniques de surface",
                "Logiciels de plans d'expériences (Design-Expert, MODDE)",
                "Lignes pilotes de production industrielle miniature"
            ],
            "soft": [
                "Créativité foisonnante et capacité à penser 'out of the box'",
                "Pragmatisme industriel pour concilier rêve scientifique et faisabilité en usine",
                "Sens aigu de la communication collaborative inter-métiers (marketing, usine, achats)",
                "Persévérance face aux échecs expérimentaux inhérents à toute découverte"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Baccalauréat scientifique général",
                    "desc": "Excellentes notes en physique, chimie et biologie."
                },
                {
                    "step": "Cycle préparatoire / Licence (Bac +2 à +3)",
                    "title": "Classes prépas scientifiques (PC, BCPST) ou Licence Chimie/Biologie",
                    "desc": "Bases scientifiques fondamentales."
                },
                {
                    "step": "École d'Ingénieurs (Bac +5)",
                    "title": "Diplôme d'Ingénieur en Chimie, Matériaux ou Agroalimentaire",
                    "desc": "Formation de pointe en R&D produit (ESPCI, Chimie Paris, AgroParisTech)."
                },
                {
                    "step": "Doctorat (Bac +8, optionnel)",
                    "title": "Doctorat (Thèse CIFRE en entreprise)",
                    "desc": "Excellente voie pour devenir expert scientifique mondial."
                }
            ],
            "schools": [
                {
                    "name": "Grandes écoles de chimie de la Fédération Gay-Lussac (Chimie ParisTech, ESPCI, ENSC Lille, Montpellier)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "AgroParisTech / ENSAIA (Pôles d'excellence en R&D produit agroalimentaire)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP) — UCAD Dakar (Département Génie Chimique et Alimentaire)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Titre d'Ingénieur certifié CTI",
                "Certification Green Belt / Black Belt Lean R&D"
            ]
        },
        "career": {
            "sectors": [
                "Cosmétique et beauté",
                "Agroalimentaire et nutrition",
                "Chimie des matériaux et santé"
            ],
            "employerTypes": [
                "Multinationales de grande consommation (Procter & Gamble, Unilever, Nestlé)",
                "Groupes chimiques et pharmaceutiques",
                "Start-ups de CleanTech"
            ],
            "evolution": "Ingénieur R&D produit ➔ Chef de projet R&D senior ➔ Responsable de laboratoire d'innovation ➔ Directeur R&D Monde",
            "pros": "Créer de ses mains des objets ou aliments qui feront le quotidien de millions de personnes, grande transversalité sectorielle, métier très valorisé.",
            "cons": "Pression des délais de mise sur le marché face à la concurrence internationale, contraintes de rentabilité économique."
        },
        "salary": "🇫🇷 France : 2 900 - 5 800 € net/mois selon secteur et taille du groupe (CIDJ) • 🇸🇳 Sénégal : 400 000 - 1 500 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Pour concevoir une nouvelle crème hydratante ou un nouveau yaourt aux fruits, un ingénieur de recherche produit teste en moyenne plus de 150 formulations chimiques différentes en laboratoire avant de trouver celle qui possède la texture parfaite, la durée de vie idéale et l'efficacité prouvée !",
            "pourquoi": "Chaque ingrédient modifie l'équilibre microscopique de l'émulsion entre l'eau et l'huile."
        },
        "sources": [
            {
                "organization": "CIDJ",
                "title": "Fiche métier : Ingénieur de recherche produit",
                "url": "https://www.cidj.com/s-orienter/metiers/ingenieur-ingenieure-de-recherche-produit",
                "type": "metier"
            },
            {
                "organization": "Association Nationale des Industries Alimentaires (ANIA) / France Chimie",
                "title": "L'innovation et les métiers de la R&D",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "creer-produits-chimie",
            "experiences-laboratoire",
            "creer-designer",
            "resoudre-problemes"
        ],
        "relatedJobSlugs": [
            "ingenieur-formulation",
            "technicien-chimiste",
            "aromaticien",
            "ingenieur-biotechnologie"
        ],
        "summary": "Ingénieur transversal de l'innovation, il explore les propriétés chimiques, biologiques et physiques des matières pour inventer les produits de consommation de demain.",
        "description": "Le CIDJ met en exergue l'extrême transversalité du métier d'ingénieur de recherche produit, associé à une multitude de secteurs vitaux : agriculture, agroalimentaire, biologie-chimie, industrie, énergie, environnement et santé. En laboratoire de R&D, il transforme une idée ou un besoin consommateur en un produit tangible performant : nouvel aliment santé, cosmétique éco-conçu, biomatériau composite biodégradable ou dispositif médical. Il conçoit les expériences, teste la résistance et l'efficacité des formules, pilote les études d'industrialisation et veille au respect des normes sanitaires mondiales.",
        "studyLevel": "Bac +5 à Bac +8 (Diplôme d'Ingénieur chimiste/biologiste / Master R&D / Doctorat)",
        "daily": {
            "morning": "Revue des résultats d'analyses rhéologiques et de stabilité thermique sur 3 nouveaux prototypes de formulation • Séance de brainstorming avec le service marketing sur le cahier des charges d'un emballage 100% compostable • Déjeuner d'échanges avec des chercheurs universitaires partenaires d'un projet d'éco-conception",
            "afternoon": "Supervision sur ligne pilote de fabrication du premier lot test de 50 kg du nouveau produit • Analyse de la liberté d'exploitation avec le conseil en brevets de l'entreprise",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/ingenieur-ingenieure-de-recherche-produit"
    },
    {
        "id": "ingenieur-formulation",
        "slug": "ingenieur-formulation",
        "title": "Ingénieur / Ingénieure Formulation",
        "aliases": [
            "Formulateur chimiste",
            "Ingénieur chimiste formulateur",
            "Chef de projet formulation"
        ],
        "icon": "🧴",
        "familyId": "biologie-chimie",
        "connectedFamilies": [
            "biologie-chimie",
            "industrie-mecanique",
            "sante-soins-paramedical"
        ],
        "domain": "Formulation Chimique, Émulsions & Matériaux",
        "domainId": "formulation",
        "subdomain": "Tensioactifs & Émulsions",
        "shortDescription": "Maître de l'assemblage moléculaire, il associe principes actifs, liants, émulsifiants et solvants pour fabriquer peintures, crèmes de beauté, colles, phytosanitaires et médicaments.",
        "longDescription": "Le CIDJ documente l'ingénieur formulation comme le grand spécialiste de la chimie des mélanges stables. Il ne crée pas nécessairement de nouvelles molécules pures, mais sait marier des matières premières insolubles entre elles (comme l'eau et l'huile) à l'aide de tensioactifs et de polymères. Qu'il travaille pour la cosmétique de luxe (fond de teint ne tachant pas), le bâtiment (peintures thermorégulantes sans odeur), la pharmacie (gels à libération prolongée) ou l'automobile (adhésifs structuraux), il garantit que le produit reste homogène pendant des années sans déphaser.",
        "simpleDefinition": "Chimiste expert des recettes de pointe qui mélange des ingrédients liquides et poudres pour fabriquer des crèmes, des peintures et des gels parfaits.",
        "level": "Bac +5 à Bac +8 (Diplôme d'Ingénieur Chimiste / Master Formulation)",
        "missions": [
            "Concevoir et développer de nouvelles formules chimiques homogènes et pérennes (émulsions, gels, mousses, poudres)",
            "Sélectionner les tensioactifs, polymères, charges et conservateurs compatibles avec le cahier des charges",
            "Mesurer les propriétés rhéologiques (viscosité, étalement, texture) et la stabilité sous conditions extrêmes de température",
            "Remplacer les solvants pétrosourcés et composés organiques volatils (COV) par des alternatives bio-sourcées écologiques",
            "Superviser le passage industriel de la formule du bécher de 500 mL vers la cuve de 10 tonnes"
        ],
        "workEnvironment": "Laboratoires de formulation cosmétique, peintures et adhésifs, pharmaceutique, agrochimie, détergence.",
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Contrôle visuel et centrifugation des éprouvettes sorties de l'étuve de vieillissement à 45°C : aucun déphasage"
            },
            {
                "time": "09:30",
                "activity": "Mise au point d'une crème solaire minérale invisible : pesée précise des filtres UV en dioxyde de titane et des émulsifiants"
            },
            {
                "time": "11:30",
                "activity": "Mesure au rhéomètre rotatif de la courbe de viscosité pour vérifier la facilité d'étalement sur la peau"
            },
            {
                "time": "14:30",
                "activity": "Essai de substitution d'un solvant fossile par un dérivé biosourcé issu de la betterave sur une peinture murale"
            },
            {
                "time": "16:45",
                "activity": "Rédaction de la fiche technique de formulation et du protocole de fabrication pour l'usine"
            }
        ],
        "skills": {
            "technical": [
                "Physico-chimie des colloïdes, des émulsions et des suspensions",
                "Rhéologie appliquée (fluides newtoniens et non-newtoniens, seuil d'écoulement)",
                "Chimie des polymères, tensioactifs et interactions interfaciales",
                "Techniques de caractérisation physico-chimique (granulométrie laser, potentiel zêta, tensiométrie)",
                "Normes réglementaires sectorielles (REACH, cosmétique ISO 22716, BPF pharmaceutiques)"
            ],
            "human": [
                "Patience, méthode et rigueur de manipulation scientifique",
                "Créativité sensorielle pour imaginer des textures agréables et inédites",
                "Capacité à résoudre des énigmes chimiques de déstabilisation",
                "Esprit de synthèse pour dialoguer avec la production et le marketing"
            ],
            "tools": [
                "Turbine homogénéisatrice à fort cisaillement (Silverson, Ultra-Turrax)",
                "Rhéomètre rotatif et viscosimètre cône-plan",
                "Granulomètre laser pour mesure de taille des gouttelettes microscopiques",
                "Tensiomètre de goutte et étuves de stabilité thermo-régulées"
            ],
            "soft": [
                "Patience, méthode et rigueur de manipulation scientifique",
                "Créativité sensorielle pour imaginer des textures agréables et inédites",
                "Capacité à résoudre des énigmes chimiques de déstabilisation",
                "Esprit de synthèse pour dialoguer avec la production et le marketing"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Baccalauréat général scientifique",
                    "desc": "Points forts en chimie et physique."
                },
                {
                    "step": "Cycle préparatoire / Licence (Bac +2 à +3)",
                    "title": "Classes prépas ou Licence de Chimie",
                    "desc": "Thermodynamique, chimie organique et atomistique."
                },
                {
                    "step": "École d'Ingénieurs / Master (Bac +5)",
                    "title": "Diplôme d'Ingénieur Chimiste spécialité Formulation (ITECH, CPE Lyon, ENSIC)",
                    "desc": "Formation de référence internationale en science de la formulation."
                }
            ],
            "schools": [
                {
                    "name": "ITECH Lyon — École d'Ingénieurs en formulation (chimie des peintures, cosmétiques, adhésifs)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "CPE Lyon / Chimie ParisTech / Université de Montpellier (Master Formulation)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "ESP — UCAD Dakar (Département Génie Chimique et Biologie Appliquée)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Diplôme d'Ingénieur Chimiste certifié CTI",
                "Master en Formulation et Physico-Chimie des Colloïdes"
            ]
        },
        "career": {
            "sectors": [
                "Cosmétique et parfumerie",
                "Peintures, encres et vernis",
                "Pharmacie galénique",
                "Détergence et agrochimie"
            ],
            "employerTypes": [
                "Grands noms de la cosmétique (L'Oréal, Chanel, Clarins)",
                "Fabricants de peintures et matériaux (Saint-Gobain, Arkema)",
                "Laboratoires pharmaceutiques mondiaux"
            ],
            "evolution": "Ingénieur formulateur ➔ Responsable d'équipe formulation ➔ Directeur de laboratoire R&D ➔ Directeur technique d'entité",
            "pros": "Métier fascinant où la science devient palpable et texturée, forte demande de l'industrie, opportunités exceptionnelles dans le luxe et la cosmétique.",
            "cons": "Échecs fréquents de stabilité à surmonter avec patience (les émulsions sont des systèmes vivants et capricieux), pression sur les délais."
        },
        "salary": "🇫🇷 France : 2 800 - 5 200 € net/mois selon industrie et réputation (CIDJ) • 🇸🇳 Sénégal : 350 000 - 1 300 000 FCFA net/mois",
        "saviezVous": {
            "fait": "L'eau et l'huile sont chimiquement incapables de se mélanger naturellement. Pour fabriquer une crème cosmétique ou une mayonnaise, l'ingénieur formulateur utilise des molécules 'bilingues' appelées tensioactifs, dont une extrémité aime l'eau (hydrophile) et l'autre aime l'huile (lipophile), emprisonnant ainsi des milliards de micro-gouttelettes !",
            "pourquoi": "Ces tensioactifs réduisent la tension interfaciale et empêchent les gouttelettes d'huile de se rassembler pour former une flaque en surface."
        },
        "sources": [
            {
                "organization": "CIDJ",
                "title": "Fiche métier : Ingénieur formulation",
                "url": "https://www.cidj.com/s-orienter/metiers/ingenieur-ingenieure-formulation",
                "type": "metier"
            },
            {
                "organization": "France Chimie",
                "title": "Les métiers de la formulation chimique",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "creer-produits-chimie",
            "experiences-laboratoire",
            "creer-designer"
        ],
        "relatedJobSlugs": [
            "ingenieur-recherche-produit",
            "technicien-chimiste",
            "aromaticien",
            "coloriste-textile"
        ],
        "summary": "Maître de l'assemblage moléculaire, il associe principes actifs, liants, émulsifiants et solvants pour fabriquer peintures, crèmes de beauté, colles, phytosanitaires et médicaments.",
        "description": "Le CIDJ documente l'ingénieur formulation comme le grand spécialiste de la chimie des mélanges stables. Il ne crée pas nécessairement de nouvelles molécules pures, mais sait marier des matières premières insolubles entre elles (comme l'eau et l'huile) à l'aide de tensioactifs et de polymères. Qu'il travaille pour la cosmétique de luxe (fond de teint ne tachant pas), le bâtiment (peintures thermorégulantes sans odeur), la pharmacie (gels à libération prolongée) ou l'automobile (adhésifs structuraux), il garantit que le produit reste homogène pendant des années sans déphaser.",
        "studyLevel": "Bac +5 à Bac +8 (Diplôme d'Ingénieur Chimiste / Master Formulation)",
        "daily": {
            "morning": "Contrôle visuel et centrifugation des éprouvettes sorties de l'étuve de vieillissement à 45°C : aucun déphasage • Mise au point d'une crème solaire minérale invisible : pesée précise des filtres UV en dioxyde de titane et des émulsifiants • Mesure au rhéomètre rotatif de la courbe de viscosité pour vérifier la facilité d'étalement sur la peau",
            "afternoon": "Essai de substitution d'un solvant fossile par un dérivé biosourcé issu de la betterave sur une peinture murale • Rédaction de la fiche technique de formulation et du protocole de fabrication pour l'usine",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/ingenieur-ingenieure-formulation"
    },
    {
        "id": "microbiologiste",
        "slug": "microbiologiste",
        "familyId": "biologie-chimie",
        "domainId": "microbiologie",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "agriculture-agroalimentaire",
            "environnement-nature"
        ],
        "title": "Microbiologiste",
        "genderAlternative": "Microbiologiste",
        "summary": "Spécialiste de l'infiniment petit, il étudie et cultive bactéries, virus, champignons et levures pour lutter contre les pathogènes, développer des vaccins ou fermenter des aliments.",
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/microbiologiste",
        "description": "Le microbiologiste explore la diversité des micro-organismes, leurs génomes et leurs métabolismes. Dans la santé, il traque les résistances aux antibiotiques et isole des souches pour fabriquer des antiviraux ou des vaccins. Dans l'agroalimentaire, il sélectionne des ferments lactiques ou s'assure de l'absence totale de Listeria et Salmonella. Dans l'environnement, il pilote la biodégradation microbienne de déchets organiques et de plastiques.",
        "studyLevel": "Bac +5 / Bac +8 (Master, Diplôme d'Ingénieur, Doctorat PhD)",
        "duration": "5 à 8 ans après le bac",
        "status": "Chercheur, ingénieur R&D, enseignant-chercheur ou responsable de laboratoire privé",
        "daily": {
            "morning": "Vérification des incubateurs et boîtes de Petri ensemencées la veille, comptage des colonies bactériennes, séquençage génomique d'une souche suspecte.",
            "afternoon": "Essais de sensibilité aux antibiotiques (antibiogrammes) ou cinétique enzymatique de fermentation, rédaction d'un article de recherche ou rapport d'homologation.",
            "challenges": "Maîtriser les protocoles de confinement (P2/P3/P4), prévenir toute contamination croisée d'échantillons et interpréter des volumes massifs de données génétiques microbiennes."
        },
        "skills": {
            "technical": [
                "Bactériologie, virologie et mycologie fondamentale et appliquée",
                "Isolement, ensemencement en milieu sélectif et identification par spectrométrie MALDI-TOF",
                "Biologie moléculaire (PCR temps réel, séquençage NGS Illumina / Nanopore)",
                "Normes de biosécurité et confinement en laboratoire L2/L3"
            ],
            "soft": [
                "Rigueur scientifique sans concession et respect absolu de l'asepsie",
                "Esprit d'analyse et curiosité d'investigation biologique",
                "Patience face aux temps d'incubation incompressibles",
                "Capacité de communication pluridisciplinaire (médecins, pharmaciens, industriels)"
            ],
            "tools": [
                "Microscopes à fluorescence, à contraste de phase et électroniques (MEB/MET)",
                "Spectromètre de masse MALDI-TOF Biotyper",
                "Thermocycleur PCR et séquenceur d'ADN à haut débit",
                "Incubateurs sous atmosphère contrôlée (CO2, anaérobie)"
            ],
            "human": [
                "Rigueur scientifique sans concession et respect absolu de l'asepsie",
                "Esprit d'analyse et curiosité d'investigation biologique",
                "Patience face aux temps d'incubation incompressibles",
                "Capacité de communication pluridisciplinaire (médecins, pharmaciens, industriels)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Baccalauréat général scientifique",
                    "desc": "Spécialités SVT et Physique-Chimie recommandées."
                },
                {
                    "step": "Licence / CPGE (Bac +3)",
                    "title": "Licence Sciences de la Vie / Biologie Cellulaire et Physiologie",
                    "desc": "Bases en biochimie, génétique et microbiologie générale."
                },
                {
                    "step": "Master / Ingénieur (Bac +5)",
                    "title": "Master Microbiologie Fondamentale & Appliquée ou Diplôme d'Ingénieur en Biotechnologies (AgroParisTech, ESBS)",
                    "desc": "Microbiologie moléculaire, virologie, métabolisme bactérien et bio-informatique microbienne."
                },
                {
                    "step": "Doctorat (Bac +8, optionnel mais recommandé)",
                    "title": "Doctorat PhD en Microbiologie / Virologie",
                    "desc": "Indispensable pour diriger une équipe de recherche à l'INSERM, CNRS, Institut Pasteur ou en R&D pharmaceutique."
                }
            ],
            "schools": [
                {
                    "name": "Institut Pasteur (Enseignements universitaires de microbiologie et virologie)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Paris-Saclay / Université Claude Bernard Lyon 1 (Masters Microbiologie)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut Pasteur de Dakar / UCAD (Faculté des Sciences & CRCF)",
                    "country": "Sénégal",
                    "scope": "Sénégal / International"
                }
            ],
            "certifications": [
                "Doctorat d'Université en Sciences de la Vie",
                "Habilitation de manipulation en laboratoire de confinement P3"
            ]
        },
        "career": {
            "sectors": [
                "Industrie pharmaceutique et vaccins",
                "Instituts de recherche biomédicale",
                "Industrie agroalimentaire et fermentaire",
                "Environnement et dépollution"
            ],
            "employerTypes": [
                "Instituts de recherche (Pasteur, CNRS, INRAE, Inserm)",
                "Big Pharma et biotechs (Sanofi, bioMérieux, Valneva)",
                "Multinationales alimentaires (Danone, Lesaffre, Nestlé)"
            ],
            "evolution": "Microbiologiste chercheur ➔ Chef de projet R&D ➔ Directeur d'unité de recherche ➔ Directeur scientifique de biotechnologie",
            "pros": "Place centrale dans la lutte contre les pandémies et les superbactéries antibiorésistantes, impact mondial direct sur la santé publique.",
            "cons": "Parcours académique long (Bac +8 pour les postes de direction de recherche), manipulation d'agents biologiques potentiellement pathogènes exigeant une concentration extrême."
        },
        "salary": "🇫🇷 France : 2 500 - 4 800 € net/mois selon statut public/privé et expérience (CIDJ) • 🇸🇳 Sénégal : 350 000 - 1 400 000 FCFA net/mois (Institut Pasteur, UCAD, labos privés)",
        "saviezVous": {
            "fait": "Le corps d'un adulte moyen abrite environ 38 000 milliards de bactéries (notre microbiote), soit autant voire plus que ses propres cellules humaines ! Sans ces bactéries intestinales, nous serions incapables de digérer certains nutriments ou de développer un système immunitaire robuste.",
            "pourquoi": "Ces micro-organismes vivent en symbiose mutualiste avec nous depuis des millions d'années d'évolution partagée."
        },
        "sources": [
            {
                "organization": "CIDJ",
                "title": "Fiche métier : Microbiologiste",
                "url": "https://www.cidj.com/s-orienter/metiers/microbiologiste",
                "type": "metier"
            },
            {
                "organization": "Société Française de Microbiologie (SFM)",
                "title": "Carrières et métiers de la microbiologie",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "observer-microscope",
            "experiences-laboratoire",
            "comprendre-corps-humain",
            "soigner-aider"
        ],
        "relatedJobSlugs": [
            "technicien-microbiologie",
            "ingenieur-biotechnologie",
            "biologiste-medical",
            "technicien-analyses-biomedicales"
        ],
        "shortDescription": "Spécialiste de l'infiniment petit, il étudie et cultive bactéries, virus, champignons et levures pour lutter contre les pathogènes, développer des vaccins ou fermenter des aliments.",
        "longDescription": "Le microbiologiste explore la diversité des micro-organismes, leurs génomes et leurs métabolismes. Dans la santé, il traque les résistances aux antibiotiques et isole des souches pour fabriquer des antiviraux ou des vaccins. Dans l'agroalimentaire, il sélectionne des ferments lactiques ou s'assure de l'absence totale de Listeria et Salmonella. Dans l'environnement, il pilote la biodégradation microbienne de déchets organiques et de plastiques.",
        "level": "Bac +5 / Bac +8 (Master, Diplôme d'Ingénieur, Doctorat PhD)",
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Vérification des incubateurs et boîtes de Petri ensemencées la veille, comptage des colonies bactériennes, séquençage génomique d'une souche suspecte."
            },
            {
                "time": "14:00",
                "activity": "Essais de sensibilité aux antibiotiques (antibiogrammes) ou cinétique enzymatique de fermentation, rédaction d'un article de recherche ou rapport d'homologation."
            },
            {
                "time": "18:00",
                "activity": "Transmission et fin de poste. Défi clé : Maîtriser les protocoles de confinement (P2/P3/P4), prévenir toute contamination croisée d'échantillons et interpréter des volumes massifs de données génétiques microbiennes."
            }
        ]
    },
    {
        "id": "parfumeur",
        "slug": "parfumeur",
        "familyId": "biologie-chimie",
        "domainId": "cosmetique-parfumerie-aromes",
        "connectedFamilies": [
            "industrie-technologies",
            "mode-design-beaute",
            "commerce-marketing"
        ],
        "title": "Parfumeur (Nez)",
        "genderAlternative": "Parfumeuse (Nez)",
        "summary": "Artiste et chimiste de l'odorat doté d'une mémoire de plusieurs milliers de senteurs, il compose les fragrances de la haute parfumerie, de la cosmétique et des produits du quotidien.",
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/parfumeur-parfumeuse",
        "description": "Le parfumeur, couramment appelé 'Nez', associe matières premières naturelles (huiles essentielles florales, résines, épices) et molécules de synthèse issues de la chimie organique pour créer des compositions olfactives uniques. Il conçoit des parfums de prestige, mais aussi les signatures olfactives des gels douche, lessives, bougies et cosmétiques. Il travaille sur brief créatif en respectant scrupuleusement les contraintes de coût et les normes toxicologiques internationales (IFRA).",
        "studyLevel": "Bac +3 à Bac +5 (Écoles de parfumerie spécialisées ou Master Chimie / Cosmétique)",
        "duration": "3 à 5 ans d'études + de nombreuses années d'apprentissage olfactif",
        "status": "Salarié de maison de composition de parfums, formulateur indépendant ou parfumeur maison de luxe",
        "daily": {
            "morning": "Séance d'évaluation olfactive matinale (l'odorat est le plus frais au réveil) : sentir à l'aveugle sur des touches à parfum les accords maturés la veille et noter l'évolution des notes de tête, de cœur et de fond.",
            "afternoon": "Ajustement des dosages de la formule au milligramme près, choix de nouvelles molécules de synthèse, rencontre avec l'équipe marketing pour débriefing d'un projet client.",
            "challenges": "Mémoriser plus de 3 000 molécules et essences naturelles, faire preuve d'une hygiène de vie préservant l'odorat (pas de tabac, pas d'épices fortes avant une session) et renouveler sans cesse la créativité."
        },
        "skills": {
            "technical": [
                "Pyramide olfactive (notes de tête, de cœur, de fond) et volatilité des composés organiques",
                "Chimie des terpènes, esters, aldéhydes et muscs synthétiques",
                "Connaissance approfondie de la réglementation internationale IFRA et de la cosmétovigilance",
                "Extraction et analyse physico-chimique des matières premières naturelles"
            ],
            "soft": [
                "Mémoire olfactive exceptionnelle et sensibilité artistique",
                "Patience, humilité et résilience face aux multiples reformulations imposées par les marques",
                "Curiosité culturelle et capacité à traduire des émotions ou des images en senteurs",
                "Capacité d'écoute des tendances du marché mondial"
            ],
            "tools": [
                "Orgue à parfums (meuble circulaire regroupant les flacons de concentrés)",
                "Mouillettes / Touches à parfum (bandelettes de papier buvard neutre)",
                "Chromatographie en phase gazeuse couplée à la spectrométrie de masse (CPG-SM)",
                "Logiciel de formulation olfactive et de calcul de conformité IFRA"
            ],
            "human": [
                "Mémoire olfactive exceptionnelle et sensibilité artistique",
                "Patience, humilité et résilience face aux multiples reformulations imposées par les marques",
                "Curiosité culturelle et capacité à traduire des émotions ou des images en senteurs",
                "Capacité d'écoute des tendances du marché mondial"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Baccalauréat général scientifique",
                    "desc": "Chimie et biologie fortement valorisées."
                },
                {
                    "step": "Licence de Chimie (Bac +3)",
                    "title": "Licence de Chimie ou Biochimie",
                    "desc": "Acquérir les bases indispensables de la chimie organique et de la structure moléculaire."
                },
                {
                    "step": "École Spécialisée / Master (Bac +5)",
                    "title": "ISIPCA (Versailles), École Supérieure du Parfum (ESP Paris/Grasse) ou Master ICAP Montpellier",
                    "desc": "Formation d'excellence reconnue mondialement formant les Nez de l'industrie du luxe."
                }
            ],
            "schools": [
                {
                    "name": "ISIPCA — Institut Supérieur International du Parfum, de la Cosmétique et de l'Aromatique (Versailles)",
                    "country": "France",
                    "scope": "International"
                },
                {
                    "name": "École Supérieure du Parfum (Paris & Grasse)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Grasse Institute of Perfumery (GIP, Grasse)",
                    "country": "France",
                    "scope": "International"
                },
                {
                    "name": "ESP Dakar / UCAD (Chimie des substances naturelles et huiles essentielles ouest-africaines)",
                    "country": "Sénégal",
                    "scope": "Afrique de l'Ouest"
                }
            ],
            "certifications": [
                "Diplôme de Parfumeur-Créateur certifié RNCP Niveau 7 (ISIPCA/ESP)"
            ]
        },
        "career": {
            "sectors": [
                "Haute parfumerie et cosmétique de luxe",
                "Grandes maisons de composition aromatique",
                "Arômes et détergence industrielle",
                "Cosmétiques bio et aromathérapie"
            ],
            "employerTypes": [
                "Géants mondiaux de la composition (Givaudan, Firmenich-dsm, IFF, Symrise, Mane)",
                "Grandes maisons de couture et de joaillerie (Chanel, Dior, Hermès, Guerlain)",
                "Marques de cosmétiques de niche"
            ],
            "evolution": "Évaluateur olfactif ➔ Parfumeur junior ➔ Parfumeur senior ➔ Parfumeur maison (titre rarissime et prestigieux)",
            "pros": "Métier de passion fusionnant art pur et chimie fine, reconnaissance internationale, salaire très attractif pour les profils confirmés.",
            "cons": "Nombre de postes très limité (moins d'un millier de Nez en activité dans le monde), compétition féroce à l'entrée des grandes maisons de composition."
        },
        "salary": "🇫🇷 France : 2 400 - 3 500 € net/mois en début de carrière, jusqu'à 8 000 - 15 000+ € net/mois pour un Nez reconnu (CIDJ) • 🇸🇳 Sénégal : 350 000 - 1 500 000 FCFA net/mois (secteur cosmétique, savonnerie et valorisation des essences locales)",
        "saviezVous": {
            "fait": "La ville de Grasse, dans le sud de la France, est reconnue comme la capitale mondiale du parfum depuis le XVIIe siècle. Ses savoir-faire liés au parfum (culture des plantes à parfum, connaissance des matières premières et art de composer) sont inscrits au Patrimoine Culturel Immatériel de l'Humanité par l'UNESCO !",
            "pourquoi": "Le microclimat exceptionnel de Grasse permettait de cultiver la rose de mai (Rosa centifolia), le jasmin et la tubéreuse avec une délicatesse aromatique inégalable."
        },
        "sources": [
            {
                "organization": "CIDJ",
                "title": "Fiche métier : Parfumeur / Parfumeuse",
                "url": "https://www.cidj.com/s-orienter/metiers/parfumeur-parfumeuse",
                "type": "metier"
            },
            {
                "organization": "ISIPCA",
                "title": "Filière Métiers de la Parfumerie et de la Création Olfactive",
                "type": "ecole"
            }
        ],
        "interests": [
            "creer-produits-chimie",
            "creer-designer",
            "experiences-laboratoire"
        ],
        "relatedJobSlugs": [
            "aromaticien",
            "ingenieur-formulation",
            "coloriste-textile",
            "technicien-chimiste"
        ],
        "shortDescription": "Artiste et chimiste de l'odorat doté d'une mémoire de plusieurs milliers de senteurs, il compose les fragrances de la haute parfumerie, de la cosmétique et des produits du quotidien.",
        "longDescription": "Le parfumeur, couramment appelé 'Nez', associe matières premières naturelles (huiles essentielles florales, résines, épices) et molécules de synthèse issues de la chimie organique pour créer des compositions olfactives uniques. Il conçoit des parfums de prestige, mais aussi les signatures olfactives des gels douche, lessives, bougies et cosmétiques. Il travaille sur brief créatif en respectant scrupuleusement les contraintes de coût et les normes toxicologiques internationales (IFRA).",
        "level": "Bac +3 à Bac +5 (Écoles de parfumerie spécialisées ou Master Chimie / Cosmétique)",
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Séance d'évaluation olfactive matinale (l'odorat est le plus frais au réveil) : sentir à l'aveugle sur des touches à parfum les accords maturés la veille et noter l'évolution des notes de tête, de cœur et de fond."
            },
            {
                "time": "14:00",
                "activity": "Ajustement des dosages de la formule au milligramme près, choix de nouvelles molécules de synthèse, rencontre avec l'équipe marketing pour débriefing d'un projet client."
            },
            {
                "time": "18:00",
                "activity": "Transmission et fin de poste. Défi clé : Mémoriser plus de 3 000 molécules et essences naturelles, faire preuve d'une hygiène de vie préservant l'odorat (pas de tabac, pas d'épices fortes avant une session) et renouveler sans cesse la créativité."
            }
        ]
    },
    {
        "id": "technicien-biologiste",
        "slug": "technicien-biologiste",
        "familyId": "biologie-chimie",
        "domainId": "biologie-sciences-vivant",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "agriculture-agroalimentaire",
            "environnement-nature"
        ],
        "title": "Technicien biologiste",
        "genderAlternative": "Technicienne biologiste",
        "summary": "Bras droit de l'ingénieur et du chercheur, il prépare les réactifs, réalise les expériences de biologie cellulaire et moléculaire et consigne avec précision les résultats d'essais.",
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-biologiste",
        "description": "Le technicien biologiste exécute des protocoles expérimentaux sophistiqués en laboratoire de recherche ou dans l'industrie (biotech, santé, agroalimentaire, cosmétique). Il réalise des cultures de cellules vivantes, extrait de l'ADN/ARN, pratique des électrophorèses, dose des protéines et assure la maintenance de premier niveau des automates d'analyse. Il vérifie la validité des témoins et saisit les données dans le système d'information de gestion du laboratoire (LIMS).",
        "studyLevel": "Bac +2 / Bac +3 (BTS, BUT, Licence Professionnelle)",
        "duration": "2 à 3 ans après le bac",
        "status": "Salarié du secteur privé (biotechs, labos pharma) ou technicien de la fonction publique (CNRS, INRAE, Universités)",
        "daily": {
            "morning": "Préparation des milieux de culture cellulaire sous hotte à flux laminaire, repiquage de lignées cellulaires et vérification de leur viabilité au microscope.",
            "afternoon": "Extraction d'ARN, amplification génique par PCR et révélation sur gel d'agarose, nettoyage du poste et saisie des résultats d'essais dans le LIMS.",
            "challenges": "Assurer une répétabilité parfaite des manips (deux réplicats doivent être identiques), prévenir les contaminations fongiques ou bactériennes des lignées de cellules."
        },
        "skills": {
            "technical": [
                "Techniques de culture cellulaire et tissulaire en milieu stérile",
                "Biologie moléculaire (extraction d'acides nucléiques, PCR, électrophorèse)",
                "Dosages biochimiques (ELISA, spectrophotométrie UV-Visible)",
                "Normes BPL (Bonnes Pratiques de Laboratoire) et traçabilité métrologique"
            ],
            "soft": [
                "Minutie chirurgicale et habileté manuelle",
                "Sens aigu de l'observation et détection rapide des anomalies d'échantillons",
                "Rigueur documentaire et méthode de travail méthodique",
                "Sens du travail en équipe de recherche"
            ],
            "tools": [
                "Poste de sécurité microbiologique (PSM hotte flux laminaire)",
                "Micropipettes automatiques de précision monocanal et multicanaux",
                "Centrifugeuses réfrigérées à haute vitesse",
                "Lecteur de microplaques pour tests immuno-enzymatiques ELISA"
            ],
            "human": [
                "Minutie chirurgicale et habileté manuelle",
                "Sens aigu de l'observation et détection rapide des anomalies d'échantillons",
                "Rigueur documentaire et méthode de travail méthodique",
                "Sens du travail en équipe de recherche"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Baccalauréat général ou STL (Sciences et Technologies de Laboratoire)",
                    "desc": "Option Biotechnologies ou SVT."
                },
                {
                    "step": "BTS / BUT (Bac +2 à +3)",
                    "title": "BTS Biotechnologies ou BUT Génie Biologique parcours Biologie Médicale et Biotechnologie",
                    "desc": "Formation professionnalisante intensive combinant cours théoriques et dizaines d'heures de TP par semaine."
                },
                {
                    "step": "Licence Professionnelle (Bac +3)",
                    "title": "Licence Pro Bio-expérimentation industrielle ou Génomique",
                    "desc": "Spécialisation avancée très appréciée des laboratoires de R&D."
                }
            ],
            "schools": [
                {
                    "name": "Lycées préparant au BTS Biotechnologies et IUT de France (BUT Génie Biologique)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "ESTBA (École Supérieure des Techniques de Biologie Appliquée, Paris)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "ESP — UCAD Dakar (Département Génie Biologique Appliqué)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Centre de Formation Professionnelle Horticole de Cambérène (biotechnologies végétales)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "BTS Biotechnologies / Bioanalyses et contrôles",
                "BUT Génie Biologique"
            ]
        },
        "career": {
            "sectors": [
                "Startups biotechnologiques et pharma",
                "Recherche biomédicale publique et universitaire",
                "Agrochimie et semences végétales",
                "Cosmétologie et dermopharmacie"
            ],
            "employerTypes": [
                "Laboratoires pharmaceutiques (Sanofi, Servier)",
                "Organismes publics de recherche (INSERM, CNRS, Cirad)",
                "Plateformes technologiques universitaires"
            ],
            "evolution": "Technicien biologiste ➔ Technicien supérieur expert ➔ Assistant ingénieur ➔ Ingénieur biologiste (via VAE ou promotion interne)",
            "pros": "Métier concret au contact direct de la science vivante, manipulation de technologies de pointe, recrutement dynamique dans les biotechs.",
            "cons": "Tâches parfois répétitives lors de campagnes de criblage à haut débit, nécessité d'une attention constante sans baisse de vigilance."
        },
        "salary": "🇫🇷 France : 1 800 - 2 500 € net/mois selon ancienneté et convention collective (CIDJ) • 🇸🇳 Sénégal : 180 000 - 550 000 FCFA net/mois (labos universitaires, recherche, industries agroalimentaires)",
        "saviezVous": {
            "fait": "La technique de la PCR (réaction en chaîne par polymérase), devenue incontournable dans tous les laboratoires du monde, utilise une enzyme découverte dans une bactérie vivant dans les sources chaudes à plus de 70°C du parc de Yellowstone (Thermus aquaticus) !",
            "pourquoi": "Cette enzyme (la Taq polymérase) résiste aux températures extrêmes nécessaires pour séparer les deux brins d'ADN lors de chaque cycle d'amplification."
        },
        "sources": [
            {
                "organization": "CIDJ",
                "title": "Fiche métier : Technicien biologiste",
                "url": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-biologiste",
                "type": "metier"
            },
            {
                "organization": "Onisep",
                "title": "Fiche métier : Technicien / Technicienne biologiste",
                "type": "orientation"
            }
        ],
        "interests": [
            "observer-microscope",
            "experiences-laboratoire",
            "comprendre-corps-humain"
        ],
        "relatedJobSlugs": [
            "microbiologiste",
            "technicien-analyses-biomedicales",
            "ingenieur-biotechnologie",
            "animalier-laboratoire"
        ],
        "shortDescription": "Bras droit de l'ingénieur et du chercheur, il prépare les réactifs, réalise les expériences de biologie cellulaire et moléculaire et consigne avec précision les résultats d'essais.",
        "longDescription": "Le technicien biologiste exécute des protocoles expérimentaux sophistiqués en laboratoire de recherche ou dans l'industrie (biotech, santé, agroalimentaire, cosmétique). Il réalise des cultures de cellules vivantes, extrait de l'ADN/ARN, pratique des électrophorèses, dose des protéines et assure la maintenance de premier niveau des automates d'analyse. Il vérifie la validité des témoins et saisit les données dans le système d'information de gestion du laboratoire (LIMS).",
        "level": "Bac +2 / Bac +3 (BTS, BUT, Licence Professionnelle)",
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Préparation des milieux de culture cellulaire sous hotte à flux laminaire, repiquage de lignées cellulaires et vérification de leur viabilité au microscope."
            },
            {
                "time": "14:00",
                "activity": "Extraction d'ARN, amplification génique par PCR et révélation sur gel d'agarose, nettoyage du poste et saisie des résultats d'essais dans le LIMS."
            },
            {
                "time": "18:00",
                "activity": "Transmission et fin de poste. Défi clé : Assurer une répétabilité parfaite des manips (deux réplicats doivent être identiques), prévenir les contaminations fongiques ou bactériennes des lignées de cellules."
            }
        ]
    },
    {
        "id": "technicien-chimiste",
        "slug": "technicien-chimiste",
        "familyId": "biologie-chimie",
        "domainId": "chimie-synthese",
        "connectedFamilies": [
            "industrie-technologies",
            "energie-mines",
            "environnement-nature"
        ],
        "title": "Technicien chimiste",
        "genderAlternative": "Technicienne chimiste",
        "summary": "Maillon essentiel de la chimie analytique et de synthèse, il réalise les synthèses moléculaires, dose les principes actifs et garantit la conformité des produits finis.",
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-chimiste",
        "description": "Le technicien chimiste intervient soit en recherche-développement (synthèse de nouvelles molécules, extraction de principes actifs), soit en contrôle qualité (analyse de pureté des matières premières et des lots de fabrication). Il met en œuvre des protocoles d'analyse physico-chimique poussés : titrages potentiométriques, chromatographies liquides (HPLC) ou gazeuses (CPG), spectrométries infrarouge et UV. Il interprète les spectres obtenus et valide la libération des lots.",
        "studyLevel": "Bac +2 / Bac +3 (BTS Chimie, BUT Chimie, Licence Pro)",
        "duration": "2 à 3 ans après le bac",
        "status": "Salarié du secteur industriel (chimie fine, pétrochimie, cosmétique, pharmacie, plasturgie)",
        "daily": {
            "morning": "Étalonnage quotidien des balances de précision, pH-mètres et chromatographes, préparation des phases mobiles et étalons analytiques.",
            "afternoon": "Injection des séries d'échantillons en HPLC/CPG, traitement informatique des pics chromatographiques, calcul des concentrations et validation des certificats d'analyse.",
            "challenges": "Respecter scrupuleusement les consignes de sécurité chimique (fiches FDS, port des EPI adaptés, manipulation sous hotte aspirante) et éliminer les solvants selon les filières écologiques."
        },
        "skills": {
            "technical": [
                "Techniques de séparation analytique (HPLC, CPG, électrophorèse capillaire)",
                "Spectroscopies d'identification moléculaire (UV-Visible, Infrarouge FT-IR, RMN)",
                "Montages de synthèse organique (reflux, distillation sous vide, extraction liquide-liquide)",
                "Calculs de stœchiométrie, rendements et incertitudes de mesure"
            ],
            "soft": [
                "Rigueur et précision mathématique dans la pesée et la dilution",
                "Sens aigu de la sécurité face aux produits toxiques, inflammables ou corrosifs",
                "Méthode et propreté exemplaire de la verrerie et de la paillasse",
                "Autonomie dans la résolution d'anomalies analytiques (dérive de ligne de base, contamination de colonne)"
            ],
            "tools": [
                "Chromatographe en phase liquide haute performance (HPLC / UPLC)",
                "Chromatographe en phase gazeuse (CPG-FID / CPG-SM)",
                "Spectrophotomètre Infrarouge à transformée de Fourier (FT-IR)",
                "Bain thermostaté, évaporateur rotatif (Rotavapor) et hotte ventilée à flux d'air guidé"
            ],
            "human": [
                "Rigueur et précision mathématique dans la pesée et la dilution",
                "Sens aigu de la sécurité face aux produits toxiques, inflammables ou corrosifs",
                "Méthode et propreté exemplaire de la verrerie et de la paillasse",
                "Autonomie dans la résolution d'anomalies analytiques (dérive de ligne de base, contamination de colonne)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Baccalauréat général (spécialité Physique-Chimie) ou STL (Sciences et Technologies de Laboratoire)",
                    "desc": "Option SPCL (Sciences Physiques et Chimiques en Laboratoire)."
                },
                {
                    "step": "BTS / BUT (Bac +2 à +3)",
                    "title": "BTS Métiers de la Chimie ou BUT Chimie parcours Analyse, Contrôle Qualité et Environnement / Synthèse",
                    "desc": "Formation de référence dispensant un socle technique complet et pratique."
                },
                {
                    "step": "Licence Professionnelle (Bac +3)",
                    "title": "Licence Pro Chimie Analytique ou Contrôle Physico-Chimique",
                    "desc": "Compétences renforcées en instrumentation de pointe et validation de méthodes analytiques (norme ISO 17025)."
                }
            ],
            "schools": [
                {
                    "name": "Lycées préparant au BTS Métiers de la Chimie et IUT de France (BUT Chimie)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "ENCPB — Lycée Pierre-Gilles de Gennes (Paris)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "ESP — UCAD Dakar (Département Génie Chimique & Chimie Appliquée)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Institut Supérieur d'Enseignement Professionnel (ISEP) de Thiès / Diamniadio",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "BTS Métiers de la Chimie",
                "BUT Chimie certifié CTI / Université"
            ]
        },
        "career": {
            "sectors": [
                "Chimie de spécialité et polymères",
                "Pharmacie et santé",
                "Cosmétique et parfumerie",
                "Pétrochimie, engrais et cimenterie"
            ],
            "employerTypes": [
                "Industries chimiques (Arkema, BASF, Solvay)",
                "Laboratoires pharmaceutiques (Sanofi, Ipsen)",
                "Entreprises d'analyse et certification (SGS, Eurofins, Bureau Veritas)"
            ],
            "evolution": "Technicien chimiste ➔ Technicien analyste référent ➔ Spécialiste méthode / validation ➔ Responsable de laboratoire de contrôle qualité",
            "pros": "Forte demande sur le marché de l'emploi industriel, compétences très polyvalentes transférables d'une industrie à une autre.",
            "cons": "Manipulation de réactifs chimiques dangereux nécessitant une concentration continue et le port prolongé d'équipements de protection (gants, lunettes, masque)."
        },
        "salary": "🇫🇷 France : 1 800 - 2 600 € net/mois selon l'industrie et le travail en équipe postée (CIDJ) • 🇸🇳 Sénégal : 180 000 - 600 000 FCFA net/mois (industries chimiques sénégalaises : ICS, SAR, cimenteries, labos pharma)",
        "saviezVous": {
            "fait": "L'aspirine (acide acétylsalicylique), l'un des médicaments les plus consommés au monde, est le résultat d'une réaction chimique très simple de synthèse : l'acétylation de l'acide salicylique (extrait à l'origine de l'écorce de saule) par l'anhydride acétique. Cette réaction est apprise dès la première année d'études de technicien chimiste !",
            "pourquoi": "L'ajout du groupement acétyle rend la molécule beaucoup moins agressive pour la muqueuse de l'estomac que l'acide salicylique pur."
        },
        "sources": [
            {
                "organization": "CIDJ",
                "title": "Fiche métier : Technicien chimiste",
                "url": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-chimiste",
                "type": "metier"
            },
            {
                "organization": "France Chimie",
                "title": "Métiers de la chimie : Technicien de laboratoire d'analyse",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "experiences-laboratoire",
            "creer-produits-chimie",
            "fabriquer-construire"
        ],
        "relatedJobSlugs": [
            "technicien-laboratoire",
            "ingenieur-formulation",
            "employe-technique-laboratoire",
            "aromaticien"
        ],
        "shortDescription": "Maillon essentiel de la chimie analytique et de synthèse, il réalise les synthèses moléculaires, dose les principes actifs et garantit la conformité des produits finis.",
        "longDescription": "Le technicien chimiste intervient soit en recherche-développement (synthèse de nouvelles molécules, extraction de principes actifs), soit en contrôle qualité (analyse de pureté des matières premières et des lots de fabrication). Il met en œuvre des protocoles d'analyse physico-chimique poussés : titrages potentiométriques, chromatographies liquides (HPLC) ou gazeuses (CPG), spectrométries infrarouge et UV. Il interprète les spectres obtenus et valide la libération des lots.",
        "level": "Bac +2 / Bac +3 (BTS Chimie, BUT Chimie, Licence Pro)",
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Étalonnage quotidien des balances de précision, pH-mètres et chromatographes, préparation des phases mobiles et étalons analytiques."
            },
            {
                "time": "14:00",
                "activity": "Injection des séries d'échantillons en HPLC/CPG, traitement informatique des pics chromatographiques, calcul des concentrations et validation des certificats d'analyse."
            },
            {
                "time": "18:00",
                "activity": "Transmission et fin de poste. Défi clé : Respecter scrupuleusement les consignes de sécurité chimique (fiches FDS, port des EPI adaptés, manipulation sous hotte aspirante) et éliminer les solvants selon les filières écologiques."
            }
        ]
    },
    {
        "id": "technicien-bioproduction",
        "slug": "technicien-bioproduction",
        "familyId": "biologie-chimie",
        "domainId": "galenique-bioproduction",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "industrie-technologies"
        ],
        "title": "Technicien en bioproduction",
        "genderAlternative": "Technicienne en bioproduction",
        "summary": "Spécialiste de la fabrication industrielle de biomédicaments, il pilote des bioréacteurs où des cellules vivantes génétiquement modifiées produisent des anticorps monoclonaux et des vaccins.",
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-en-bioproduction",
        "description": "Le technicien en bioproduction intervient au cœur des usines de biomédicaments. Il pilote la phase 'Upstream' (culture et multiplication des cellules en bioréacteurs dans des conditions de température, pH et oxygénation ultra-strictes) ou la phase 'Downstream' (récolte, purification et filtration des protéines thérapeutiques par chromatographie industrielle). Il travaille en salle blanche (classe B/C/D) sous atmosphère contrôlée en suivant scrupuleusement les Bonnes Pratiques de Fabrication (BPF).",
        "studyLevel": "Bac +2 / Bac +3 (BTS, BUT, Licence Professionnelle en Bioproduction)",
        "duration": "2 à 3 ans après le bac",
        "status": "Salarié de l'industrie pharmaceutique ou des sous-traitants CDMO (Contract Development and Manufacturing)",
        "daily": {
            "morning": "Habillage complet stérile pour accès en salle blanche (combinaison intégrale, masque, surbottes), vérification des paramètres de fermentation d'un bioréacteur de 2 000 litres.",
            "afternoon": "Supervision de la phase de clarification et chromatographie d'affinité, prélèvements pour contrôle de stérilité et saisie du dossier de lot électronique.",
            "challenges": "Maintenir une asepsie absolue : la moindre spore bactérienne dans un bioréacteur industriel peut détruire une cuve de plusieurs millions d'euros de biomédicament."
        },
        "skills": {
            "technical": [
                "Culture cellulaire à grande échelle et génie fermentaire (Upstream Processing)",
                "Purification et filtration tangentielle de protéines thérapeutiques (Downstream Processing)",
                "Réglementation pharmaceutique et Bonnes Pratiques de Fabrication (BPF / GMP)",
                "Protocoles de nettoyage et stérilisation en place (NEP / SEP)"
            ],
            "soft": [
                "Discipline rigoureuse et respect sans faille des procédures opératoires standard (SOP)",
                "Grande réactivité en cas d'alerte sur un paramètre biologique critique",
                "Sens aigu du détail et rigueur documentaire (traçabilité de lot)",
                "Aisance dans le travail en environnement stérile confiné"
            ],
            "tools": [
                "Bioréacteurs industriels à usage unique ou cuves inox automatisées",
                "Systèmes de chromatographie préparative automatisée (ÄKTA process)",
                "Sonde en ligne de mesure de pH, oxygène dissous et biomasse par impédancemétrie",
                "Système de supervision SCADA et dossiers de lots électroniques (EBR)"
            ],
            "human": [
                "Discipline rigoureuse et respect sans faille des procédures opératoires standard (SOP)",
                "Grande réactivité en cas d'alerte sur un paramètre biologique critique",
                "Sens aigu du détail et rigueur documentaire (traçabilité de lot)",
                "Aisance dans le travail en environnement stérile confiné"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Baccalauréat général ou STL / STI2D",
                    "desc": "Spécialités scientifiques et technologiques."
                },
                {
                    "step": "BTS / BUT (Bac +2 à +3)",
                    "title": "BTS Biotechnologies ou BUT Génie Biologique ou BUT Génie Chimique - Génie des Procédés",
                    "desc": "Apprentissage des biotechnologies et du génie industriel des bioréacteurs."
                },
                {
                    "step": "Licence Professionnelle / Titre Pro (Bac +3)",
                    "title": "Licence Pro Bioprocédés et Bioproduction ou Titre Technicien en Bioproduction Pharmaceutique (IMT)",
                    "desc": "Formation de pointe en immersion sur plateformes pédagogiques reproduisant des usines pharmaceutiques."
                }
            ],
            "schools": [
                {
                    "name": "Groupe IMT (Tours, Évry, Lyon) — Institut de formation industrielle de référence en bioproduction",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "ESTBB — Université Catholique de Lyon (filière Bioproduction)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut Pasteur de Dakar — Unité de production vaccinale MADIBA (Dakar)",
                    "country": "Sénégal",
                    "scope": "Afrique de l'Ouest / Pôle d'excellence continental"
                }
            ],
            "certifications": [
                "Certification BPF / GMP Niveau Opérateur et Technicien",
                "Habilitation travail en Zone d'Atmosphère Contrôlée (ZAC)"
            ]
        },
        "career": {
            "sectors": [
                "Biotechnologies de la santé",
                "Production de vaccins et d'anticorps",
                "Thérapies géniques et cellulaires",
                "CDMO pharmaceutiques"
            ],
            "employerTypes": [
                "Usines de bioproduction (Sanofi Bioproductions, Novartis)",
                "Sous-traitants mondiaux (Lonza, Boehringer Ingelheim, Delpharm)",
                "Instituts de production vaccinale (Institut Pasteur de Dakar - Projet MADIBA)"
            ],
            "evolution": "Technicien de bioproduction ➔ Chef d'équipe bioproduction ➔ Spécialiste transposition industrielle (Scale-up) ➔ Responsable de production de zone stérile",
            "pros": "Métier d'avenir absolu avec la souveraineté sanitaire et l'essor des biomédicaments, salaires attractifs, primes de travail en salle blanche et horaires décalés.",
            "cons": "Horaires postés fréquents (2x8 ou 3x8 pour surveiller les bioréacteurs en continu), contrainte physique de l'habillage stérile prolongé."
        },
        "salary": "🇫🇷 France : 2 000 - 3 000 € net/mois + primes de travail posté (CIDJ) • 🇸🇳 Sénégal : 250 000 - 850 000 FCFA net/mois (pôle vaccinal MADIBA de l'Institut Pasteur de Dakar, industrie pharma locale)",
        "saviezVous": {
            "fait": "Plus de 60 % des nouveaux médicaments autorisés aujourd'hui dans le monde ne sont plus issus de la chimie classique, mais sont des 'biomédicaments' produits par des organismes vivants (cellules de mammifères, levures) formés dans des bioréacteurs par des techniciens en bioproduction !",
            "pourquoi": "Ces molécules (comme les anticorps monoclonaux) sont trop complexes et volumineuses pour être synthétisées par réaction chimique dans un ballon."
        },
        "sources": [
            {
                "organization": "CIDJ",
                "title": "Fiche métier : Technicien en bioproduction",
                "url": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-en-bioproduction",
                "type": "metier"
            },
            {
                "organization": "Leem",
                "title": "Les entreprises du médicament : Technicien de bioproduction",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "experiences-laboratoire",
            "fabriquer-construire",
            "soigner-aider"
        ],
        "relatedJobSlugs": [
            "ingenieur-biotechnologie",
            "technicien-galeniste",
            "technicien-biologiste",
            "microbiologiste"
        ],
        "shortDescription": "Spécialiste de la fabrication industrielle de biomédicaments, il pilote des bioréacteurs où des cellules vivantes génétiquement modifiées produisent des anticorps monoclonaux et des vaccins.",
        "longDescription": "Le technicien en bioproduction intervient au cœur des usines de biomédicaments. Il pilote la phase 'Upstream' (culture et multiplication des cellules en bioréacteurs dans des conditions de température, pH et oxygénation ultra-strictes) ou la phase 'Downstream' (récolte, purification et filtration des protéines thérapeutiques par chromatographie industrielle). Il travaille en salle blanche (classe B/C/D) sous atmosphère contrôlée en suivant scrupuleusement les Bonnes Pratiques de Fabrication (BPF).",
        "level": "Bac +2 / Bac +3 (BTS, BUT, Licence Professionnelle en Bioproduction)",
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Habillage complet stérile pour accès en salle blanche (combinaison intégrale, masque, surbottes), vérification des paramètres de fermentation d'un bioréacteur de 2 000 litres."
            },
            {
                "time": "14:00",
                "activity": "Supervision de la phase de clarification et chromatographie d'affinité, prélèvements pour contrôle de stérilité et saisie du dossier de lot électronique."
            },
            {
                "time": "18:00",
                "activity": "Transmission et fin de poste. Défi clé : Maintenir une asepsie absolue : la moindre spore bactérienne dans un bioréacteur industriel peut détruire une cuve de plusieurs millions d'euros de biomédicament."
            }
        ]
    },
    {
        "id": "technicien-police-scientifique",
        "slug": "technicien-police-scientifique",
        "familyId": "biologie-chimie",
        "domainId": "police-scientifique",
        "connectedFamilies": [
            "securite-defense",
            "droit-justice"
        ],
        "title": "Technicien de police technique et scientifique (PTS)",
        "genderAlternative": "Technicienne de police technique et scientifique (PTS)",
        "summary": "Spécialiste forensique sur le terrain ou en laboratoire, il recherche, prélève et analyse les indices matériels (traces papillaires, ADN, résidus de tir) pour éclairer la justice.",
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-de-police-technique-et-scientifique",
        "description": "Le technicien de police technique et scientifique (catégorie B de la Police Nationale ou corps équivalent de la Gendarmerie) intervient soit en Service Local de Police Technique (SLPT / commissariat) pour geler et exploiter les scènes d'infraction courantes (cambriolages, dégradations, vols avec violence), soit dans un laboratoire de police scientifique (SNPS) où il réalise des analyses spécialisées en biologie, physico-chimie, balistique ou toxicologie selon sa filière.",
        "studyLevel": "Bac +2 / Bac +3 (Concours sélectif niveau BTS, DUT/BUT ou Licence)",
        "duration": "2 à 3 ans après le bac + formation en école de police après concours",
        "status": "Fonctionnaire d'État (Ministère de l'Intérieur, Police Nationale ou Gendarmerie Nationale)",
        "daily": {
            "morning": "Prise de service, vérification du matériel de constatation (mallette de relevé d'empreintes, éclairages ultraviolet, écouvillons stériles), intervention sur une scène d'effraction.",
            "afternoon": "Révélation des traces digitales au cyanoacrylate ou poudres magnétiques, conditionnement sous scellés des prélèvements biologiques et saisie dans le FNAEG / FAED.",
            "challenges": "Préserver l'intégrité absolue des scènes de crime, éviter tout risque de contamination par son propre ADN et garder son sang-froid face à des scènes dramatiques."
        },
        "skills": {
            "technical": [
                "Techniques de révélation de traces papillaires (poudres, fumigation cyanoacrylate, ninhydrine)",
                "Prélèvements biologiques pour typage génétique ADN et conservation sous scellés judiciaires",
                "Photographie technique judiciaire et relevé métrique de scène d'infraction",
                "Bases de procédure pénale appliquée à la criminalistique (Code de Procédure Pénale)"
            ],
            "soft": [
                "Rigueur méthodologique absolue et sens aigu de l'observation méticuleuse",
                "Stabilité émotionnelle et force psychologique face à la violence et la détresse",
                "Discrétion professionnelle totale et respect du secret de l'instruction",
                "Disponibilité opérationnelle (astreintes de nuit et week-ends)"
            ],
            "tools": [
                "Mallette de prélèvement forensique et poudres révélatrices (dactyloscopie)",
                "Sources de lumière médico-légales (Crimescope, Polilight)",
                "Appareil photo reflex professionnel avec objectifs macro et flashs déportés",
                "Fichiers d'identification judiciaire (FAED pour empreintes, FNAEG pour profils génétiques)"
            ],
            "human": [
                "Rigueur méthodologique absolue et sens aigu de l'observation méticuleuse",
                "Stabilité émotionnelle et force psychologique face à la violence et la détresse",
                "Discrétion professionnelle totale et respect du secret de l'instruction",
                "Disponibilité opérationnelle (astreintes de nuit et week-ends)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Baccalauréat général ou STL / ST2S",
                    "desc": "Base scientifique solide."
                },
                {
                    "step": "Diplôme d'accès (Bac +2 à +3)",
                    "title": "BTS / BUT Chimie, Biologie, Mesures Physiques ou Licence Scientifique",
                    "desc": "Niveau requis pour candidater au concours officiel de technicien de PTS."
                },
                {
                    "step": "Concours & École (Post-sélection)",
                    "title": "Concours de Technicien de PTS (Ministère de l'Intérieur) + Formation initiale à l'École Nationale de Police",
                    "desc": "Formation pratique rémunérée alternant cours juridiques, criminalistique de terrain et stages."
                }
            ],
            "schools": [
                {
                    "name": "Direction Centrale du Recrutement et de la Formation de la Police Nationale (DCRFPN, France)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut de Recherche Criminelle de la Gendarmerie Nationale (IRCGN, Pontoise)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Nationale de Police de Dakar / Division de la Police Technique et Scientifique (DPTS, Sénégal)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Concours de Technicien de Police Technique et Scientifique (Catégorie B)"
            ]
        },
        "career": {
            "sectors": [
                "Police Nationale et Ministère de l'Intérieur",
                "Gendarmerie Nationale",
                "Justice et administration pénale",
                "Sécurité intérieure et défense"
            ],
            "employerTypes": [
                "Commissariats et Services Locaux de Police Technique (SLPT)",
                "Laboratoires de police scientifique (Service National de Police Scientifique - SNPS)",
                "Division de la Police Technique et Scientifique du Sénégal (DPTS)"
            ],
            "evolution": "Technicien de PTS ➔ Technicien principal de PTS ➔ Ingénieur de PTS (par concours interne) ➔ Chef de groupe SLPT",
            "pros": "Métier passionnant au cœur des enquêtes judiciaires, utilité civique directe pour rendre justice aux victimes, diversité des situations.",
            "cons": "Astreintes fréquentes de nuit et de week-end, confrontation à des scènes de mort violente ou d'infractions graves, concours très sélectif."
        },
        "salary": "🇫🇷 France : 1 900 - 2 800 € net/mois selon grade et primes de sujétion (CIDJ) • 🇸🇳 Sénégal : 180 000 - 480 000 FCFA net/mois (statut fonctionnaire police / gendarmerie nationale)",
        "saviezVous": {
            "fait": "Le premier laboratoire de police scientifique au monde a été créé en 1910 à Lyon par le médecin et juriste français Edmond Locard. Il est l'auteur du célèbre 'Principe d'échange de Locard' : 'Tout contact laisse une trace' !",
            "pourquoi": "Un criminel emporte toujours sans le savoir des fragments de la scène où il se trouvait (poussière, fibres) et y dépose des fragments de sa propre présence (poils, salive, empreintes)."
        },
        "sources": [
            {
                "organization": "CIDJ",
                "title": "Fiche métier : Technicien de police technique et scientifique",
                "url": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-de-police-technique-et-scientifique",
                "type": "metier"
            },
            {
                "organization": "Ministère de l'Intérieur",
                "title": "Devenir technicien de police technique et scientifique",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "police-scientifique-enquete",
            "experiences-laboratoire",
            "observer-microscope"
        ],
        "relatedJobSlugs": [
            "technicien-principal-police-scientifique",
            "ingenieur-police-scientifique",
            "technicien-chimiste",
            "technicien-biologiste"
        ],
        "shortDescription": "Spécialiste forensique sur le terrain ou en laboratoire, il recherche, prélève et analyse les indices matériels (traces papillaires, ADN, résidus de tir) pour éclairer la justice.",
        "longDescription": "Le technicien de police technique et scientifique (catégorie B de la Police Nationale ou corps équivalent de la Gendarmerie) intervient soit en Service Local de Police Technique (SLPT / commissariat) pour geler et exploiter les scènes d'infraction courantes (cambriolages, dégradations, vols avec violence), soit dans un laboratoire de police scientifique (SNPS) où il réalise des analyses spécialisées en biologie, physico-chimie, balistique ou toxicologie selon sa filière.",
        "level": "Bac +2 / Bac +3 (Concours sélectif niveau BTS, DUT/BUT ou Licence)",
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Prise de service, vérification du matériel de constatation (mallette de relevé d'empreintes, éclairages ultraviolet, écouvillons stériles), intervention sur une scène d'effraction."
            },
            {
                "time": "14:00",
                "activity": "Révélation des traces digitales au cyanoacrylate ou poudres magnétiques, conditionnement sous scellés des prélèvements biologiques et saisie dans le FNAEG / FAED."
            },
            {
                "time": "18:00",
                "activity": "Transmission et fin de poste. Défi clé : Préserver l'intégrité absolue des scènes de crime, éviter tout risque de contamination par son propre ADN et garder son sang-froid face à des scènes dramatiques."
            }
        ]
    },
    {
        "id": "technicien-qualite-air",
        "slug": "technicien-qualite-air",
        "familyId": "biologie-chimie",
        "domainId": "environnement-qualite-air-depollution",
        "connectedFamilies": [
            "environnement-nature",
            "industrie-technologies",
            "sante-soins-paramedical"
        ],
        "title": "Technicien de la qualité de l'air",
        "genderAlternative": "Technicienne de la qualité de l'air",
        "summary": "Sentinelle de l'atmosphère, il installe, calibre et entretient les capteurs analysant les gaz polluants et particules fines dans l'air urbain, industriel et intérieur.",
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-de-la-qualite-de-l-air",
        "description": "Le technicien de la qualité de l'air effectue des campagnes de mesure des polluants atmosphériques (dioxyde d'azote, ozone, dioxyde de soufre, composés organiques volatils COV, particules fines PM2.5 et PM10). Il assure la maintenance préventive et curative des stations fixes et mobiles d'analyse de l'air, vérifie la fiabilité des données transmises par télémétrie et réalise des diagnostics de la qualité de l'air intérieur dans les écoles, hôpitaux ou bureaux.",
        "studyLevel": "Bac +2 / Bac +3 (BTS, BUT Mesures Physiques, Licence Pro)",
        "duration": "2 à 3 ans après le bac",
        "status": "Salarié d'associations agréées de surveillance de la qualité de l'air (AASQA), bureaux d'études ou régulateurs",
        "daily": {
            "morning": "Tournée terrain sur les stations de mesure urbaines : changement des filtres à particules, test d'étanchéité des circuits gazeux et injection de gaz étalons.",
            "afternoon": "Vérification des courbes de pollution sur le serveur central, détection des anomalies de capteurs, rédaction d'un rapport de diagnostic d'air intérieur pour une collectivité.",
            "challenges": "Intervenir par tous les temps sur des toits ou le long des axes routiers pour réparer un analyseur en panne et garantir la continuité des alertes canicule / pic de pollution."
        },
        "skills": {
            "technical": [
                "Physico-chimie de l'atmosphère et cinétique des gaz polluants",
                "Fonctionnement des analyseurs automatiques (chimiluminescence, absorption UV, fluorescence)",
                "Métrologie des particules fines (microbalance à élément oscillant TEOM, optique laser)",
                "Normes environnementales de surveillance de l'air (normes européennes et recommandations OMS)"
            ],
            "soft": [
                "Polyvalence technique (chimie, électronique, mécanique et informatique)",
                "Autonomie et débrouillardise lors des interventions sur le terrain",
                "Sensibilité écologique et rigueur dans l'interprétation des données de santé publique",
                "Aisance dans la rédaction de comptes-rendus techniques"
            ],
            "tools": [
                "Analyseurs de gaz en continu (NOx, O3, SO2, CO) par photométrie UV et chimiluminescence",
                "Capteurs optiques et compteurs optiques de particules (OPC pour PM10 et PM2.5)",
                "Bouteilles de gaz étalons certifiés et diluteurs de gaz de haute précision",
                "Pompes de prélèvement d'air à débit régulé et canisters pour analyse COV"
            ],
            "human": [
                "Polyvalence technique (chimie, électronique, mécanique et informatique)",
                "Autonomie et débrouillardise lors des interventions sur le terrain",
                "Sensibilité écologique et rigueur dans l'interprétation des données de santé publique",
                "Aisance dans la rédaction de comptes-rendus techniques"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Baccalauréat général ou STI2D / STL",
                    "desc": "Sciences physiques, chimie ou technologies environnementales."
                },
                {
                    "step": "BTS / BUT (Bac +2 à +3)",
                    "title": "BUT Mesures Physiques ou BTS Métiers des Services à l'Environnement ou BUT Métiers de la Transition et de l'Efficacité Énergétiques",
                    "desc": "Acquérir les compétences en instrumentation, capteurs et chimie de l'environnement."
                },
                {
                    "step": "Licence Professionnelle (Bac +3)",
                    "title": "Licence Pro Métrologie de l'Environnement ou Qualité de l'Air et Traitement des Émissions",
                    "desc": "Spécialisation pointue très recherchée par les réseaux de surveillance."
                }
            ],
            "schools": [
                {
                    "name": "IUT de France préparant au BUT Mesures Physiques (Orsay, Grenoble, Lille, etc.)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Réseau des AASQA (Airparif, Atmo, etc. — formations et apprentissages)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "ESP — UCAD Dakar (Département Génie Chimique / Hygiène et Environnement)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Centre de Gestion de la Qualité de l'Air (CGQA, Dakar)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Habilitation travail en hauteur (accès toitures)",
                "Habilitation électrique BR/B2V"
            ]
        },
        "career": {
            "sectors": [
                "Surveillance environnementale et climat",
                "Bureaux d'études en ingénierie environnementale",
                "Industries émettrices (énergie, ciment, incinérateurs)",
                "Santé publique et collectivités"
            ],
            "employerTypes": [
                "Réseau ATMO France / Airparif (Associations de surveillance agréées)",
                "Bureaux d'ingénierie (Apave, Bureau Veritas, Dekra)",
                "Centre de Gestion de la Qualité de l'Air de Dakar (CGQA) / Direction de l'Environnement"
            ],
            "evolution": "Technicien qualité de l'air ➔ Technicien métrologue référent ➔ Chargé d'études environnementales ➔ Responsable d'exploitation de réseau de mesure",
            "pros": "Métier à forte valeur environnementale et sociétale, équilibre parfait entre interventions terrain et traitement de données informatisées.",
            "cons": "Déplacements fréquents, interventions parfois en hauteur ou dans des zones polluées nécessitant des protections respiratoires."
        },
        "salary": "🇫🇷 France : 1 850 - 2 600 € net/mois (CIDJ) • 🇸🇳 Sénégal : 170 000 - 500 000 FCFA net/mois (CGQA, bureaux d'études, ministères et mines)",
        "saviezVous": {
            "fait": "À Dakar, la pollution de l'air est amplifiée plusieurs fois par an par les vents d'harmattan qui transportent d'immenses panaches de poussières désertiques venues du Sahara, créant des dépassements massifs des seuils de particules fines PM10 mesurés par le CGQA !",
            "pourquoi": "Ces particules minérales microscopiques pénètrent profondément dans les voies respiratoires et nécessitent des alertes publiques régulières pour les personnes vulnérables."
        },
        "sources": [
            {
                "organization": "CIDJ",
                "title": "Fiche métier : Technicien de la qualité de l'air",
                "url": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-de-la-qualite-de-l-air",
                "type": "metier"
            },
            {
                "organization": "Atmo France",
                "title": "Les métiers des associations de surveillance de la qualité de l'air",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "proteger-planete",
            "experiences-laboratoire",
            "fabriquer-construire"
        ],
        "relatedJobSlugs": [
            "agent-depolluant-nrbc",
            "technicien-chimiste",
            "ingenieur-recherche-produit",
            "technicien-laboratoire"
        ],
        "shortDescription": "Sentinelle de l'atmosphère, il installe, calibre et entretient les capteurs analysant les gaz polluants et particules fines dans l'air urbain, industriel et intérieur.",
        "longDescription": "Le technicien de la qualité de l'air effectue des campagnes de mesure des polluants atmosphériques (dioxyde d'azote, ozone, dioxyde de soufre, composés organiques volatils COV, particules fines PM2.5 et PM10). Il assure la maintenance préventive et curative des stations fixes et mobiles d'analyse de l'air, vérifie la fiabilité des données transmises par télémétrie et réalise des diagnostics de la qualité de l'air intérieur dans les écoles, hôpitaux ou bureaux.",
        "level": "Bac +2 / Bac +3 (BTS, BUT Mesures Physiques, Licence Pro)",
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Tournée terrain sur les stations de mesure urbaines : changement des filtres à particules, test d'étanchéité des circuits gazeux et injection de gaz étalons."
            },
            {
                "time": "14:00",
                "activity": "Vérification des courbes de pollution sur le serveur central, détection des anomalies de capteurs, rédaction d'un rapport de diagnostic d'air intérieur pour une collectivité."
            },
            {
                "time": "18:00",
                "activity": "Transmission et fin de poste. Défi clé : Intervenir par tous les temps sur des toits ou le long des axes routiers pour réparer un analyseur en panne et garantir la continuité des alertes canicule / pic de pollution."
            }
        ]
    },
    {
        "id": "technicien-microbiologie",
        "slug": "technicien-microbiologie",
        "familyId": "biologie-chimie",
        "domainId": "microbiologie",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "agriculture-agroalimentaire"
        ],
        "title": "Technicien en microbiologie",
        "genderAlternative": "Technicienne en microbiologie",
        "summary": "Expert du contrôle de stérilité et de l'analyse microbienne, il traque les bactéries indésirables dans les produits alimentaires, pharmaceutiques et cosmétiques avant leur commercialisation.",
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-en-microbiologie",
        "description": "Le technicien en microbiologie effectue des analyses quotidiennes sur des échantillons de matières premières, d'eaux et de produits finis. Il prépare les gélose et milieux sélectifs, ensemence les boîtes de Petri, met à incuber à température contrôlée et procède au dénombrement des colonies (germes totaux, coliformes, staphylocoques, salmonelles). En cas de non-conformité, il déclenche les protocoles d'alerte et isole la souche pour identification biochimique ou sérologique.",
        "studyLevel": "Bac +2 / Bac +3 (BTS, BUT Génie Biologique, Licence Professionnelle)",
        "duration": "2 à 3 ans après le bac",
        "status": "Salarié du secteur privé (laboratoires de contrôle, agroalimentaire, cosmétique, pharma)",
        "daily": {
            "morning": "Lecture et dénombrement des boîtes de Petri incubées à 37°C ou 30°C, coloration de Gram et observation au microscope pour orienter le typage d'un germe.",
            "afternoon": "Ensemencement d'une nouvelle série d'échantillons sous poste de sécurité microbiologique, stérilisation des déchets à l'autoclave et validation des résultats dans le LIMS.",
            "challenges": "Ne jamais commettre de contamination accidentelle qui fausserait les résultats et bloquerait à tort une chaîne de production alimentaire ou médicamenteuse."
        },
        "skills": {
            "technical": [
                "Techniques d'ensemencement stérile (étalement, ensemencement en masse, filtration sur membrane)",
                "Colorations microbiologiques (Gram, Ziehl-Neelsen) et microscopie optique",
                "Tests biochimiques d'identification (galeries d'identification API, catalase, oxydase)",
                "Normes AFNOR / ISO de contrôle microbiologique (ISO 4833, ISO 6579)"
            ],
            "soft": [
                "Rigueur absolue dans le respect des gestes barrières et d'asepsie",
                "Sens aigu de la précision et de l'honnêteté scientifique dans la lecture des résultats",
                "Capacité de travail cadencé tout en maintenant une vigilance maximale",
                "Esprit d'équipe et communication claire des non-conformités"
            ],
            "tools": [
                "Poste de Sécurité Microbiologique (PSM de type II)",
                "Compteur automatique de colonies à caméra haute résolution",
                "Galeries d'identification biochimique miniaturisées (galeries API bioMérieux)",
                "Autoclave de stérilisation et étuves de culture à thermostat de précision"
            ],
            "human": [
                "Rigueur absolue dans le respect des gestes barrières et d'asepsie",
                "Sens aigu de la précision et de l'honnêteté scientifique dans la lecture des résultats",
                "Capacité de travail cadencé tout en maintenant une vigilance maximale",
                "Esprit d'équipe et communication claire des non-conformités"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Baccalauréat général ou STL (Biotechnologies) ou ST2S",
                    "desc": "Intérêt marqué pour les sciences de la vie et le laboratoire."
                },
                {
                    "step": "BTS / BUT (Bac +2 à +3)",
                    "title": "BTS Bioanalyses et Contrôles ou BUT Génie Biologique parcours Biologie Médicale et Biotechnologie / Sciences de l'Aliment",
                    "desc": "Formation pratique complète combinant microbiologie, biochimie et hygiène industrielle."
                },
                {
                    "step": "Licence Professionnelle (Bac +3)",
                    "title": "Licence Pro Microbiologie Industrielle et Sécurité Sanitaire",
                    "desc": "Approfondissement en validation de méthodes rapides et gestion du risque microbiologique."
                }
            ],
            "schools": [
                {
                    "name": "Lycées préparant au BTS Bioanalyses et contrôles et IUT (Génie Biologique)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "ENIL / ENILV (Écoles Nationales d'Industrie Laitière — spécialité microbiologie alimentaire)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "ESP — UCAD Dakar (Département Génie Chimique & Biologie Appliquée)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Institut de Technologie Alimentaire (ITA, Dakar)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "BTS Bioanalyses et contrôles",
                "Habilitation manipulation d'agents biologiques classe 2"
            ]
        },
        "career": {
            "sectors": [
                "Industrie agroalimentaire et boissons",
                "Pharmacie et cosmétique",
                "Laboratoires d'analyses vétérinaires et d'hygiène",
                "Gestion de l'eau et assainissement"
            ],
            "employerTypes": [
                "Groupes agroalimentaires (Lactalis, Danone, Sodebo)",
                "Laboratoires de contrôle accrédités (Eurofins, Silliker-Mérieux NutriSciences)",
                "Industries de transformation alimentaire sénégalaises (Vitalait, Kirène, CSS, labos ITA)"
            ],
            "evolution": "Technicien microbiologiste ➔ Animateur qualité laboratoire ➔ Responsable du laboratoire microbiologique ➔ Responsable hygiène et sécurité sanitaire (HACCP)",
            "pros": "Métier indispensable à la sécurité alimentaire et sanitaire de tous, débouchés très stables et nombreux dans tous les bassins d'emploi.",
            "cons": "Gestes répétitifs d'ensemencement, odeurs parfois désagréables de certains milieux ou souches en culture, astreintes possibles le week-end pour relever les boîtes à terme."
        },
        "salary": "🇫🇷 France : 1 800 - 2 500 € net/mois (CIDJ) • 🇸🇳 Sénégal : 170 000 - 520 000 FCFA net/mois (ITA, usines agroalimentaires, abattoirs, labos d'hygiène)",
        "saviezVous": {
            "fait": "Toutes les boîtes de Petri d'un laboratoire de microbiologie sont incubées 'tête en bas' (le couvercle vers le bas) ! Cette astuce très simple évite que la condensation formée sur le couvercle ne retombe en gouttes sur la gélose et ne noie les colonies bactériennes, ce qui rendrait le comptage impossible.",
            "pourquoi": "La vapeur d'eau générée par le milieu chaud s'évapore et se condense sur le couvercle situé en bas, préservant la surface nette du milieu gélosé."
        },
        "sources": [
            {
                "organization": "CIDJ",
                "title": "Fiche métier : Technicien en microbiologie",
                "url": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-en-microbiologie",
                "type": "metier"
            },
            {
                "organization": "Onisep",
                "title": "Fiche métier : Technicien en bioanalyses et contrôles",
                "type": "orientation"
            }
        ],
        "interests": [
            "observer-microscope",
            "experiences-laboratoire",
            "soigner-aider"
        ],
        "relatedJobSlugs": [
            "microbiologiste",
            "technicien-biologiste",
            "technicien-analyses-biomedicales",
            "agent-sterilisation"
        ],
        "shortDescription": "Expert du contrôle de stérilité et de l'analyse microbienne, il traque les bactéries indésirables dans les produits alimentaires, pharmaceutiques et cosmétiques avant leur commercialisation.",
        "longDescription": "Le technicien en microbiologie effectue des analyses quotidiennes sur des échantillons de matières premières, d'eaux et de produits finis. Il prépare les gélose et milieux sélectifs, ensemence les boîtes de Petri, met à incuber à température contrôlée et procède au dénombrement des colonies (germes totaux, coliformes, staphylocoques, salmonelles). En cas de non-conformité, il déclenche les protocoles d'alerte et isole la souche pour identification biochimique ou sérologique.",
        "level": "Bac +2 / Bac +3 (BTS, BUT Génie Biologique, Licence Professionnelle)",
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Lecture et dénombrement des boîtes de Petri incubées à 37°C ou 30°C, coloration de Gram et observation au microscope pour orienter le typage d'un germe."
            },
            {
                "time": "14:00",
                "activity": "Ensemencement d'une nouvelle série d'échantillons sous poste de sécurité microbiologique, stérilisation des déchets à l'autoclave et validation des résultats dans le LIMS."
            },
            {
                "time": "18:00",
                "activity": "Transmission et fin de poste. Défi clé : Ne jamais commettre de contamination accidentelle qui fausserait les résultats et bloquerait à tort une chaîne de production alimentaire ou médicamenteuse."
            }
        ]
    },
    {
        "id": "technicien-galeniste",
        "slug": "technicien-galeniste",
        "familyId": "biologie-chimie",
        "domainId": "galenique-bioproduction",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "industrie-technologies"
        ],
        "title": "Technicien galéniste",
        "genderAlternative": "Technicienne galéniste",
        "summary": "Artisan scientifique de la forme des médicaments, il met au point et optimise la texture, la dissolution et la conservation des comprimés, sirops, crèmes et gélules.",
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-galeniste",
        "description": "La pharmacie galénique est la science qui transforme une molécule active pure en un médicament pratique, absorbable et stable pour le patient. Le technicien galéniste réalise en laboratoire de formulation des essais de compression, de pelliculage, de granulation humide ou sèche, et d'encapsulation. Il évalue la vitesse de dissolution du comprimé dans l'estomac simulé, sa dureté mécanique et sa stabilité dans le temps face à l'humidité et la chaleur.",
        "studyLevel": "Bac +2 / Bac +3 (BTS, BUT Génie Chimique ou Biologique, Titre Professionnel IMT)",
        "duration": "2 à 3 ans après le bac",
        "status": "Salarié de l'industrie pharmaceutique, dermocosmétique ou vétérinaire",
        "daily": {
            "morning": "Mélange des poudres (principe actif et excipients : liants, désintégrants, lubrifiants), passage sur machine à comprimer rotative de laboratoire.",
            "afternoon": "Contrôle physique des comprimés obtenus (test de friabilité, duromètre pour tester la dureté, test de désagrégation en milieu acide), saisie du compte-rendu de formulation.",
            "challenges": "Trouver le compromis galénique parfait : un comprimé doit être suffisamment dur pour ne pas s'effriter dans son emballage, mais se désagréger en moins de 15 minutes dans l'estomac."
        },
        "skills": {
            "technical": [
                "Science des excipients pharmaceutiques (lactose, cellulose microcristalline, stéarate de magnésium)",
                "Procédés de fabrication des formes sèches (mélange, granulation, compression, enrobage)",
                "Procédés de fabrication des formes liquides et pâteuses (suspensions, émulsions, gels)",
                "Tests physico-chimiques de libération des principes actifs (dissolutest, friabilimètre)"
            ],
            "soft": [
                "Sens de l'expérimentation minutieuse et observation attentive de la matière",
                "Rigueur dans le suivi des protocoles de pharmacopée (Pharmacopée Européenne / US)",
                "Patience pour ajuster des dizaines de variations de formules",
                "Esprit d'analyse et force de proposition technique"
            ],
            "tools": [
                "Presse à comprimer instrumentée de laboratoire",
                "Appareil d'essai de dissolution in vitro (Dissolutest 6 à 8 bols)",
                "Granulateur à lit fluidisé et turbine de pelliculage",
                "Duromètre pour comprimés et testeur de friabilité"
            ],
            "human": [
                "Sens de l'expérimentation minutieuse et observation attentive de la matière",
                "Rigueur dans le suivi des protocoles de pharmacopée (Pharmacopée Européenne / US)",
                "Patience pour ajuster des dizaines de variations de formules",
                "Esprit d'analyse et force de proposition technique"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Baccalauréat général ou STL / STI2D",
                    "desc": "Bases en chimie et physique appliquées."
                },
                {
                    "step": "BTS / BUT (Bac +2 à +3)",
                    "title": "BTS Métiers de la Chimie ou BUT Génie Biologique ou BUT Génie Chimique - Génie des Procédés",
                    "desc": "Formation solide en formulation et génie des procédés pharmaceutiques."
                },
                {
                    "step": "Titre Pro / Licence Pro (Bac +3)",
                    "title": "Titre Pro Technicien en Développement Galénique (Groupe IMT) ou Licence Pro Formulation Pharmaceutique",
                    "desc": "Spécialisation professionnelle intensive au plus près des besoins des laboratoires."
                }
            ],
            "schools": [
                {
                    "name": "Groupe IMT (Tours, Lyon, Évry) — Spécialiste européen de la formation galénique industrielle",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université de Strasbourg / Faculté de Pharmacie (Licence Pro Galénique)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Faculté de Médecine, de Pharmacie et d'Odonto-Stomatologie (FMPOS) — UCAD Dakar",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification Technicien Galéniste (IMT / Leem)",
                "Bonnes Pratiques de Laboratoire (BPL)"
            ]
        },
        "career": {
            "sectors": [
                "Industrie pharmaceutique humaine et vétérinaire",
                "Cosméceutique et dermocosmétique",
                "Compléments alimentaires et nutraceutique",
                "Centres de recherche sous contrat (CRO)"
            ],
            "employerTypes": [
                "Laboratoires pharmaceutiques (Sanofi, Pierre Fabre, Boiron)",
                "Fabricants de génériques (Mylan/Viatris, Teva)",
                "Industrie pharmaceutique régionale ouest-africaine (Medis Sénégal, Valdafrique)"
            ],
            "evolution": "Technicien galéniste ➔ Galéniste formulateur senior ➔ Responsable de transposition industrielle (Scale-up) ➔ Chef de projet formulation R&D",
            "pros": "Métier très créatif où la chimie se concrétise sous forme de médicaments palpables qui sauvent des vies, forte valeur ajoutée industrielle.",
            "cons": "Multiplication d'essais parfois fastidieux avant de parvenir à une formule stable dans le temps, travail en atmosphère parfois poussiéreuse sous masque."
        },
        "salary": "🇫🇷 France : 1 900 - 2 700 € net/mois selon profil et entreprise (CIDJ) • 🇸🇳 Sénégal : 200 000 - 650 000 FCFA net/mois (industries pharmaceutiques locales : Medis, Valdafrique, laboratoires)",
        "saviezVous": {
            "fait": "Le nom 'galénique' vient de Claude Galien, célèbre médecin grec de l'Antiquité (IIe siècle après J.-C.), médecin des gladiateurs et de l'empereur Marc Aurèle. Il fut le premier à codifier la préparation des remèdes en combinant les plantes et minéraux selon des formules précises !",
            "pourquoi": "Ses traités ont posé les fondations de la pharmacie moderne pendant plus d'un millénaire."
        },
        "sources": [
            {
                "organization": "CIDJ",
                "title": "Fiche métier : Technicien galéniste",
                "url": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-galeniste",
                "type": "metier"
            },
            {
                "organization": "Leem",
                "title": "Fiche métier : Technicien galéniste R&D",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "creer-produits-chimie",
            "experiences-laboratoire",
            "soigner-aider"
        ],
        "relatedJobSlugs": [
            "technicien-bioproduction",
            "ingenieur-formulation",
            "preparateur-pharmacie",
            "pharmacien-officine"
        ],
        "shortDescription": "Artisan scientifique de la forme des médicaments, il met au point et optimise la texture, la dissolution et la conservation des comprimés, sirops, crèmes et gélules.",
        "longDescription": "La pharmacie galénique est la science qui transforme une molécule active pure en un médicament pratique, absorbable et stable pour le patient. Le technicien galéniste réalise en laboratoire de formulation des essais de compression, de pelliculage, de granulation humide ou sèche, et d'encapsulation. Il évalue la vitesse de dissolution du comprimé dans l'estomac simulé, sa dureté mécanique et sa stabilité dans le temps face à l'humidité et la chaleur.",
        "level": "Bac +2 / Bac +3 (BTS, BUT Génie Chimique ou Biologique, Titre Professionnel IMT)",
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Mélange des poudres (principe actif et excipients : liants, désintégrants, lubrifiants), passage sur machine à comprimer rotative de laboratoire."
            },
            {
                "time": "14:00",
                "activity": "Contrôle physique des comprimés obtenus (test de friabilité, duromètre pour tester la dureté, test de désagrégation en milieu acide), saisie du compte-rendu de formulation."
            },
            {
                "time": "18:00",
                "activity": "Transmission et fin de poste. Défi clé : Trouver le compromis galénique parfait : un comprimé doit être suffisamment dur pour ne pas s'effriter dans son emballage, mais se désagréger en moins de 15 minutes dans l'estomac."
            }
        ]
    },
    {
        "id": "technicien-principal-police-scientifique",
        "slug": "technicien-principal-police-scientifique",
        "familyId": "biologie-chimie",
        "domainId": "police-scientifique",
        "connectedFamilies": [
            "securite-defense",
            "droit-justice"
        ],
        "title": "Technicien principal de police technique et scientifique",
        "genderAlternative": "Technicienne principale de police technique et scientifique",
        "summary": "Cadre technique intermédiaire de la criminalistique, il encadre les techniciens sur le terrain, traite les scènes de crime complexes et conduit des expertises de laboratoire poussées.",
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/technicien-principal-technicienne-principale-de-police-technique-et-scientifique",
        "description": "Le technicien principal de police technique et scientifique (catégorie B+, niveau supérieur) assume des responsabilités managériales et d'expertise criminalistique de haut vol. En service de terrain (SLPT, SLPJ ou brigade départementale), il dirige la gestion des scènes d'infractions graves (homicides, attentats, catastrophes de masse). En laboratoire (SNPS), il coordonne les sections d'analyse (biologie, traces papillaires, toxicologie, balistique), valide les rapports d'expertise destinés aux magistrats et présente ses conclusions lors des procès d'assises.",
        "studyLevel": "Bac +3 / Bac +5 (Concours externe niveau Licence scientifique ou Master)",
        "duration": "3 à 5 ans d'études + formation à l'école de police après réussite du concours",
        "status": "Fonctionnaire d'État (Ministère de l'Intérieur, encadrement criminalistique)",
        "daily": {
            "morning": "Coordination des équipes d'intervention sur les scènes d'infraction, point d'avancement des scellés prioritaires avec le commissaire de police ou le juge d'instruction.",
            "afternoon": "Supervision technique des protocoles complexes (révélation au Bluestar/Luminol pour le sang effacé, typage de mélanges d'ADN complexes), relecture critique et signature des rapports d'expertise judiciaire.",
            "challenges": "Gérer la pression judiciaire et temporelle des gardes à vue (délais légaux très serrés pour obtenir un profil ADN ou une concordance d'empreinte digitale décisive)."
        },
        "skills": {
            "technical": [
                "Criminalistique avancée et morphoanalyse des traces de sang (BPA - Bloodstain Pattern Analysis)",
                "Expertise dactylo-lophoscopique et comparaison de traces papillaires dégradées",
                "Gestion technique globale et chaîne de traçabilité des scènes d'homicide",
                "Droit pénal spécial, procédure pénale et rédaction d'expertises opposables en justice"
            ],
            "soft": [
                "Leadership d'équipe et calme olympien sous tension extrême",
                "Esprit d'analyse critique aiguisé pour repérer les incohérences d'une scène maquillée",
                "Aisance oratoire face aux magistrats et jurés de cour d'assises",
                "Résilience morale exemplaire face aux drames humains"
            ],
            "tools": [
                "Scanner laser 3D (Faro, Leica) pour modélisation spatiale de scènes de crime",
                "Réactifs chimioluminescents de détection des traces de sang invisibles (Bluestar Forensic)",
                "Station de comparaison macroscopique et dactyloscopique numérique",
                "Terminaux sécurisés d'accès aux bases nationales judiciaires (FAED, FNAEG)"
            ],
            "human": [
                "Leadership d'équipe et calme olympien sous tension extrême",
                "Esprit d'analyse critique aiguisé pour repérer les incohérences d'une scène maquillée",
                "Aisance oratoire face aux magistrats et jurés de cour d'assises",
                "Résilience morale exemplaire face aux drames humains"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Baccalauréat général scientifique",
                    "desc": "Solide socle scientifique."
                },
                {
                    "step": "Licence / BUT (Bac +3)",
                    "title": "Licence en Chimie, Biologie, Biochimie ou BUT Mesures Physiques",
                    "desc": "Diplôme universitaire requis pour le concours de technicien principal."
                },
                {
                    "step": "Master (Bac +5, recommandé)",
                    "title": "Master Sciences Forensiques (Lausanne, CY Cergy Paris Université) ou Master Chimie/Biologie",
                    "desc": "Atout majeur pour dominer les épreuves scientifiques très sélectives du concours."
                },
                {
                    "step": "Concours & Nomination",
                    "title": "Concours de Technicien Principal de PTS (Ministère de l'Intérieur) + Stage probatoire",
                    "desc": "Formation criminalistique de commandement technique."
                }
            ],
            "schools": [
                {
                    "name": "École Nationale Supérieure de la Police (ENSP, Saint-Cyr-au-Mont-d'Or / Cannes-Écluse)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "CY Cergy Paris Université (Master Sciences Forensiques)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École de Police de Dakar / Division de la Police Technique et Scientifique (DPTS, Sénégal)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Concours de Technicien Principal de Police Technique et Scientifique",
                "Certification en morphoanalyse des traces de sang (CSM)"
            ]
        },
        "career": {
            "sectors": [
                "Police Nationale et Ministère de l'Intérieur",
                "Police Judiciaire et tribunaux judiciaires",
                "Sécurité publique et antiterrorisme",
                "Enseignement criminalistique"
            ],
            "employerTypes": [
                "Services Régionaux de Police Judiciaire (DTPJ / SRPJ)",
                "Service National de Police Scientifique (SNPS : Lyon, Paris, Marseille, Lille, Toulouse)",
                "Division de la Police Technique et Scientifique (DPTS Sénégal)"
            ],
            "evolution": "Technicien principal de PTS ➔ Ingénieur de PTS (par concours interne) ➔ Chef de division / Directeur de laboratoire de police scientifique",
            "pros": "Niveau de responsabilité opérationnelle passionnant, contribution directe à la résolution des énigmes judiciaires majeures.",
            "cons": "Charge mentale élevée liée aux dossiers criminels les plus lourds, sollicitations d'urgence à toute heure du jour et de la nuit."
        },
        "salary": "🇫🇷 France : 2 200 - 3 400 € net/mois primes de police incluses (CIDJ) • 🇸🇳 Sénégal : 250 000 - 650 000 FCFA net/mois (cadre policier criminalistique, DPTS, Gendarmerie)",
        "saviezVous": {
            "fait": "La morphoanalyse des traces de sang (BPA) permet, uniquement à partir de la forme, de l'angle et de la répartition des gouttes de sang sur un mur ou un sol, de reconstituer la position de la victime, la force de l'impact, le type d'arme utilisé et même les mouvements de l'agresseur dans la pièce !",
            "pourquoi": "Les lois de la dynamique des fluides et de la trigonométrie s'appliquent rigoureusement aux projections sanguines propulsées dans l'air."
        },
        "sources": [
            {
                "organization": "CIDJ",
                "title": "Fiche métier : Technicien principal de police technique et scientifique",
                "url": "https://www.cidj.com/s-orienter/metiers/technicien-principal-technicienne-principale-de-police-technique-et-scientifique",
                "type": "metier"
            },
            {
                "organization": "Police Nationale",
                "title": "Concours de technicien principal de PTS",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "police-scientifique-enquete",
            "experiences-laboratoire",
            "observer-microscope"
        ],
        "relatedJobSlugs": [
            "technicien-police-scientifique",
            "ingenieur-police-scientifique",
            "technicien-chimiste",
            "microbiologiste"
        ],
        "shortDescription": "Cadre technique intermédiaire de la criminalistique, il encadre les techniciens sur le terrain, traite les scènes de crime complexes et conduit des expertises de laboratoire poussées.",
        "longDescription": "Le technicien principal de police technique et scientifique (catégorie B+, niveau supérieur) assume des responsabilités managériales et d'expertise criminalistique de haut vol. En service de terrain (SLPT, SLPJ ou brigade départementale), il dirige la gestion des scènes d'infractions graves (homicides, attentats, catastrophes de masse). En laboratoire (SNPS), il coordonne les sections d'analyse (biologie, traces papillaires, toxicologie, balistique), valide les rapports d'expertise destinés aux magistrats et présente ses conclusions lors des procès d'assises.",
        "level": "Bac +3 / Bac +5 (Concours externe niveau Licence scientifique ou Master)",
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Coordination des équipes d'intervention sur les scènes d'infraction, point d'avancement des scellés prioritaires avec le commissaire de police ou le juge d'instruction."
            },
            {
                "time": "14:00",
                "activity": "Supervision technique des protocoles complexes (révélation au Bluestar/Luminol pour le sang effacé, typage de mélanges d'ADN complexes), relecture critique et signature des rapports d'expertise judiciaire."
            },
            {
                "time": "18:00",
                "activity": "Transmission et fin de poste. Défi clé : Gérer la pression judiciaire et temporelle des gardes à vue (délais légaux très serrés pour obtenir un profil ADN ou une concordance d'empreinte digitale décisive)."
            }
        ]
    },
    {
        "id": "technicien-laboratoire",
        "slug": "technicien-laboratoire",
        "familyId": "biologie-chimie",
        "domainId": "laboratoires-analyses",
        "connectedFamilies": [
            "industrie-technologies",
            "agriculture-agroalimentaire",
            "sante-soins-paramedical"
        ],
        "title": "Technicien de laboratoire",
        "genderAlternative": "Technicienne de laboratoire",
        "summary": "Polytechnicien de l'analyse instrumentale, il réalise des batteries de tests physiques, chimiques et biologiques pour contrôler la conformité de tous types de produits manufacturés.",
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-de-laboratoire",
        "description": "Le technicien de laboratoire est le profil polyvalent par excellence de l'analyse expérimentale. Présent dans tous les secteurs industriels (peintures, plastiques, eaux, métallurgie, emballages, cosmétiques), il teste la résistance, la composition et la pureté des matériaux et formulations. Il monte les bancs d'essai, programme les appareils de mesure, saisit les données et rédige les bulletins d'analyse certifiés indispensables à l'exportation et à la vente des produits.",
        "studyLevel": "Bac +2 / Bac +3 (BTS, BUT Mesures Physiques / Chimie / Génie Biologique)",
        "duration": "2 à 3 ans après le bac",
        "status": "Salarié de l'industrie, d'un centre technique professionnel ou d'un laboratoire prestataire d'analyses",
        "daily": {
            "morning": "Réception et enregistrement des échantillons avec code-barres dans le LIMS, préparation des éprouvettes et solutions d'essai selon les normes d'homologation.",
            "afternoon": "Lancement des séries de tests (traction mécanique, viscosité, teneur en eau par titrage Karl Fischer), calcul statistique des écarts-types et signalement des valeurs hors spécifications.",
            "challenges": "Maintenir une cadence d'analyse élevée sans dégrader la minutie des mesures et respecter les normes qualité ISO 9001 et ISO 17025."
        },
        "skills": {
            "technical": [
                "Techniques générales d'analyse physico-chimique (titrimétrie, pH-métrie, conductimétrie, viscosité)",
                "Métrologie des instruments de mesure et calcul d'incertitudes expérimentales",
                "Utilisation de logiciels LIMS (Laboratory Information Management System)",
                "Normes qualité de laboratoire (ISO 17025, BPL) et gestion des fiches d'anomalies"
            ],
            "soft": [
                "Polyvalence et capacité d'adaptation à différents types de matériaux et produits",
                "Sens aigu de la précision et rigueur mathématique",
                "Sens pratique et habileté manuelle pour les montages expérimentaux",
                "Esprit d'équipe et clarté dans la communication des résultats aux équipes de production"
            ],
            "tools": [
                "Titreur automatique Karl Fischer pour dosage d'eau résiduelle",
                "Viscosimètre rotatif et rhéomètre de laboratoire",
                "Balances d'analyse au dixième de milligramme avec étalonnage certifié",
                "Logiciel de gestion de laboratoire LIMS et progiciels de métrologie"
            ],
            "human": [
                "Polyvalence et capacité d'adaptation à différents types de matériaux et produits",
                "Sens aigu de la précision et rigueur mathématique",
                "Sens pratique et habileté manuelle pour les montages expérimentaux",
                "Esprit d'équipe et clarté dans la communication des résultats aux équipes de production"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Baccalauréat général ou STL / STI2D",
                    "desc": "Filière scientifique ou technologique de laboratoire."
                },
                {
                    "step": "BTS / BUT (Bac +2 à +3)",
                    "title": "BTS Métiers de la Chimie ou BUT Mesures Physiques ou BTS Bioanalyses et Contrôles",
                    "desc": "Diplôme d'État formant aux méthodes d'essais et d'analyses de laboratoire."
                },
                {
                    "step": "Licence Professionnelle (Bac +3, optionnel)",
                    "title": "Licence Pro Métrologie, Qualité et Essais Industriels",
                    "desc": "Spécialisation en accréditation d'essais et instrumentation industrielle avancée."
                }
            ],
            "schools": [
                {
                    "name": "Lycées préparant aux BTS de laboratoire et IUT de France (BUT Mesures Physiques / Chimie)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "CFA de l'industrie et centres techniques professionnels",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "ESP — UCAD Dakar (Départements Génie Chimique & Mesures Physiques)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "ISEP de Thiès (Analyses physico-chimiques et maintenance des équipements de labo)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "BTS de laboratoire / BUT Mesures Physiques",
                "Formation auditeur interne ISO 17025"
            ]
        },
        "career": {
            "sectors": [
                "Industries manufacturières tous secteurs",
                "Entreprises d'inspection et de certification",
                "Centres techniques industriels (CTI)",
                "Services d'analyse de l'eau et assainissement"
            ],
            "employerTypes": [
                "Groupes d'audit et d'inspection (Bureau Veritas, SGS, Eurofins, Dekra)",
                "PME et multinationales de l'industrie (plasturgie, métallurgie, détergence)",
                "Laboratoires de contrôle qualité des travaux publics et des matériaux (CEREEQ Sénégal)"
            ],
            "evolution": "Technicien de laboratoire ➔ Responsable métrologie du laboratoire ➔ Responsable contrôle qualité ➔ Directeur de laboratoire d'essais",
            "pros": "Très grande polyvalence ouvrant des portes dans des dizaines d'industries différentes, forte employabilité sur tout le territoire.",
            "cons": "Répétitivité possible sur les lignes d'analyses de routine à grande échelle, cadence de rendu des résultats parfois serrée."
        },
        "salary": "🇫🇷 France : 1 800 - 2 500 € net/mois selon secteur d'activité (CIDJ) • 🇸🇳 Sénégal : 160 000 - 500 000 FCFA net/mois (CEREEQ, usines de transformation, laboratoires d'analyses)",
        "saviezVous": {
            "fait": "Le titrage Karl Fischer, inventé en 1935 par le chimiste allemand éponyme, est tellement sensible qu'il permet de détecter la présence d'eau dans une huile de moteur ou un plastique avec une précision descendant jusqu'à une seule partie par million (1 ppm = 0,0001 %) !",
            "pourquoi": "Cette précision extrême est vitale : une infime trace d'eau dans un transformateur haute tension ou un liquide de frein peut provoquer un court-circuit ou une défaillance catastrophique."
        },
        "sources": [
            {
                "organization": "CIDJ",
                "title": "Fiche métier : Technicien de laboratoire",
                "url": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-de-laboratoire",
                "type": "metier"
            },
            {
                "organization": "Onisep",
                "title": "Fiche métier : Technicien de laboratoire de contrôle",
                "type": "orientation"
            }
        ],
        "interests": [
            "experiences-laboratoire",
            "fabriquer-construire",
            "creer-produits-chimie"
        ],
        "relatedJobSlugs": [
            "employe-technique-laboratoire",
            "technicien-chimiste",
            "technicien-biologiste",
            "ingenieur-recherche-produit"
        ],
        "shortDescription": "Polytechnicien de l'analyse instrumentale, il réalise des batteries de tests physiques, chimiques et biologiques pour contrôler la conformité de tous types de produits manufacturés.",
        "longDescription": "Le technicien de laboratoire est le profil polyvalent par excellence de l'analyse expérimentale. Présent dans tous les secteurs industriels (peintures, plastiques, eaux, métallurgie, emballages, cosmétiques), il teste la résistance, la composition et la pureté des matériaux et formulations. Il monte les bancs d'essai, programme les appareils de mesure, saisit les données et rédige les bulletins d'analyse certifiés indispensables à l'exportation et à la vente des produits.",
        "level": "Bac +2 / Bac +3 (BTS, BUT Mesures Physiques / Chimie / Génie Biologique)",
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Réception et enregistrement des échantillons avec code-barres dans le LIMS, préparation des éprouvettes et solutions d'essai selon les normes d'homologation."
            },
            {
                "time": "14:00",
                "activity": "Lancement des séries de tests (traction mécanique, viscosité, teneur en eau par titrage Karl Fischer), calcul statistique des écarts-types et signalement des valeurs hors spécifications."
            },
            {
                "time": "18:00",
                "activity": "Transmission et fin de poste. Défi clé : Maintenir une cadence d'analyse élevée sans dégrader la minutie des mesures et respecter les normes qualité ISO 9001 et ISO 17025."
            }
        ]
    },
    {
        "id": "thanatopracteur",
        "slug": "thanatopracteur",
        "familyId": "biologie-chimie",
        "domainId": "sciences-thanatologiques",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "services-proximite"
        ],
        "title": "Thanatopracteur",
        "genderAlternative": "Thanatopractrice",
        "summary": "Praticien des soins de conservation post-mortem, il allie chimie biologique, anatomie et art de la restauration pour préserver les défunts et apporter du réconfort aux familles en deuil.",
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/thanatopracteur-thanatopractrice",
        "description": "Le thanatopracteur prodigue des soins de conservation et d'embellissement sur les corps des personnes décédées. Par une technique d'injection vasculaire d'une solution chimique antiseptique et conservatrice (formaldéhyde et conservateurs biochimiques) et par aspiration des cavités, il stoppe temporairement la décomposition naturelle du corps. Il pratique ensuite la toilette funéraire, l'habillage, la coiffure et le maquillage (dermatologie restauratrice) pour restituer au défunt un visage paisible et digne lors de la présentation aux proches.",
        "studyLevel": "Diplôme National de Thanatopracteur (Bac +2, Ministère de la Santé)",
        "duration": "2 ans (formation théorique universitaire + stage pratique sous tutorat + épreuve pratique nationale)",
        "status": "Salarié d'une entreprise de pompes funèbres, régie municipale ou thanatopracteur libéral indépendant",
        "daily": {
            "morning": "Réception des autorisations de soins signées par la mairie et la famille, préparation de la salle de thanatopraxie en chambre funéraire ou mortuaire d'hôpital.",
            "afternoon": "Réalisation du soin de conservation vasculaire (abord carotidien ou fémoral), modelage des traits du visage, coiffure, habillage et maquillage adapté à la carnation du défunt.",
            "challenges": "Travailler dans la sérénité et le respect absolu de la dignité humaine face à la mort, et maîtriser strictement les règles de biosécurité face aux agents pathogènes potentiels."
        },
        "skills": {
            "technical": [
                "Anatomie humaine descriptive et angiologie (système artériel et veineux)",
                "Chimie des fluides de conservation (formol, glycérine, colorants vasculaires)",
                "Microbiologie post-mortem, toxicologie et prévention des risques infectieux",
                "Techniques de restauration faciale (reconstitution de tissus, cosmétologie funéraire)"
            ],
            "soft": [
                "Équilibre psychologique solide et grand respect éthique envers les défunts",
                "Discrétion, compassion et sens du devoir envers les familles endeuillées",
                "Minutie, dextérité manuelle et sens esthétique pour la présentation",
                "Autonomie complète dans l'organisation de ses déplacements et interventions"
            ],
            "tools": [
                "Appareil d'injection de fluides sous pression régulée (thanatographe)",
                "Canules artérielles, trocarts d'aspiration cavitaire et bistouris de précision",
                "Mallette de maquillage dermique spécifique pour carnation post-mortem",
                "Équipements de Protection Individuelle intégrale (masque respiratoire, blouse étanche, visière)"
            ],
            "human": [
                "Équilibre psychologique solide et grand respect éthique envers les défunts",
                "Discrétion, compassion et sens du devoir envers les familles endeuillées",
                "Minutie, dextérité manuelle et sens esthétique pour la présentation",
                "Autonomie complète dans l'organisation de ses déplacements et interventions"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Baccalauréat général ou ST2S / STL / Professionnel",
                    "desc": "Aucune filière de bac spécifique obligatoire, profil scientifique ou médico-social apprécié."
                },
                {
                    "step": "Formation théorique universitaire",
                    "title": "Formation théorique préparatoire au Diplôme National (Université Lyon 1 ou Université d'Angers)",
                    "desc": "Enseignement théorique officiel en médecine légale, anatomie, chimie biologique, réglementation funéraire et éthique."
                },
                {
                    "step": "Stage pratique & Concours National",
                    "title": "Diplôme National de Thanatopracteur (Ministère de la Santé)",
                    "desc": "Réussite aux épreuves théoriques nationales, réalisation de 100 soins pratiques sous tutorat et examen pratique terminal devant le jury d'État."
                }
            ],
            "schools": [
                {
                    "name": "Université Claude Bernard Lyon 1 (Faculté de Médecine / Institut de Thanatopraxie)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université d'Angers (UFR Santé — Formation théorique de thanatopraxie)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Écoles privées agréées par le Comité National d'Évaluation Funéraire (AFIF, IFFPF)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Services mortuaires hospitaliers universitaires de Dakar (Hôpital Aristide Le Dantec, Hôpital Fann — morgues et conservation)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Diplôme National de Thanatopracteur délivré par le Ministère de la Santé (France)"
            ]
        },
        "career": {
            "sectors": [
                "Services funéraires et pompes funèbres",
                "Chambres mortuaires hospitalières et instituts médico-légaux",
                "Thanatopraxie libérale itinérante"
            ],
            "employerTypes": [
                "Entreprises de pompes funèbres (OGF, Roc-Eclerc, indépendants)",
                "Cabinets de thanatopraxie indépendants prestataires de services",
                "Services funéraires municipaux"
            ],
            "evolution": "Thanatopracteur salarié ➔ Thanatopracteur libéral indépendant ➔ Maître de stage / Formateur en thanatopraxie ➔ Directeur d'agence funéraire",
            "pros": "Métier d'une profonde utilité humaine facilitant le travail de deuil des proches, liberté d'organisation appréciable pour les indépendants, recrutement stable.",
            "cons": "Confrontation permanente avec la mort, les corps altérés et la tristesse des proches, odeurs, exposition aux produits chimiques nécessitant des précautions strictes."
        },
        "salary": "🇫🇷 France : 2 000 - 3 500 € net/mois en tant que salarié, jusqu'à 4 000 - 5 500 € net/mois pour un praticien libéral à forte activité (CIDJ) • 🇸🇳 Sénégal : 200 000 - 600 000 FCFA net/mois (services mortuaires hospitaliers et entreprises de rapatriement funéraire)",
        "saviezVous": {
            "fait": "Les techniques modernes de thanatopraxie ont connu leur essor décisif lors de la Guerre de Sécession américaine (1861-1865). Le Dr Thomas Holmes a embaumé sur les champs de bataille plus de 4 000 soldats nordistes pour permettre le rapatriement en train de leurs dépouilles vers leurs familles à des milliers de kilomètres !",
            "pourquoi": "Avant cela, la décomposition rendait impossible tout long transport ferroviaire en plein été."
        },
        "sources": [
            {
                "organization": "CIDJ",
                "title": "Fiche métier : Thanatopracteur / Thanatopractrice",
                "url": "https://www.cidj.com/s-orienter/metiers/thanatopracteur-thanatopractrice",
                "type": "metier"
            },
            {
                "organization": "Ministère de la Santé",
                "title": "Conditions d'exercice et diplôme national de thanatopracteur",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "creer-produits-chimie",
            "soigner-aider",
            "comprendre-corps-humain"
        ],
        "relatedJobSlugs": [
            "agent-sterilisation",
            "technicien-chimiste",
            "biologiste-medical",
            "secretaire-medical"
        ],
        "shortDescription": "Praticien des soins de conservation post-mortem, il allie chimie biologique, anatomie et art de la restauration pour préserver les défunts et apporter du réconfort aux familles en deuil.",
        "longDescription": "Le thanatopracteur prodigue des soins de conservation et d'embellissement sur les corps des personnes décédées. Par une technique d'injection vasculaire d'une solution chimique antiseptique et conservatrice (formaldéhyde et conservateurs biochimiques) et par aspiration des cavités, il stoppe temporairement la décomposition naturelle du corps. Il pratique ensuite la toilette funéraire, l'habillage, la coiffure et le maquillage (dermatologie restauratrice) pour restituer au défunt un visage paisible et digne lors de la présentation aux proches.",
        "level": "Diplôme National de Thanatopracteur (Bac +2, Ministère de la Santé)",
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Réception des autorisations de soins signées par la mairie et la famille, préparation de la salle de thanatopraxie en chambre funéraire ou mortuaire d'hôpital."
            },
            {
                "time": "14:00",
                "activity": "Réalisation du soin de conservation vasculaire (abord carotidien ou fémoral), modelage des traits du visage, coiffure, habillage et maquillage adapté à la carnation du défunt."
            },
            {
                "time": "18:00",
                "activity": "Transmission et fin de poste. Défi clé : Travailler dans la sérénité et le respect absolu de la dignité humaine face à la mort, et maîtriser strictement les règles de biosécurité face aux agents pathogènes potentiels."
            }
        ]
    }
];

    return {
        DOMAINS: DOMAINS,
        PEDAGOGICAL_PATHWAYS: PEDAGOGICAL_PATHWAYS,
        JOBS: JOBS,
        getDomains: function() {
            return DOMAINS;
        },
        getDomainById: function(id) {
            return DOMAINS.find(function(d) { return d.id === id; });
        },
        getJobs: function() {
            return JOBS;
        },
        getJobById: function(id) {
            return JOBS.find(function(j) { return j.id === id; });
        },
        getJobBySlug: function(slug) {
            return JOBS.find(function(j) { return j.slug === slug || j.id === slug; });
        },
        getJobsByDomain: function(domainId) {
            return JOBS.filter(function(j) { return j.domainId === domainId; });
        },
        getPathways: function() {
            return PEDAGOGICAL_PATHWAYS;
        }
    };
}));

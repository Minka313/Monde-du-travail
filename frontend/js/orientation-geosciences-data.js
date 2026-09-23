/**
 * MODULE OFFICIEL DES GÉOSCIENCES, SCIENCES DE LA TERRE & RESSOURCES NATURELLES
 * Base de données exhaustive : 17 Domaines • 22 Fiches Métiers Haute Profondeur
 * Double ancrage France (€) / Sénégal (FCFA)
 * Source Principale : Université de Poitiers - Faculté SFA - Département Géosciences
 * https://sfa.univ-poitiers.fr/geosciences/debouches-professionnels/
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.OrientationGeosciencesData = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    'use strict';

    const DOMAINS = [
    {
        "id": "geologie-fondamentale-appliquee",
        "name": "Géologie",
        "icon": "🪨",
        "order": 1,
        "chainStage": "Observation & Levés Géologiques",
        "description": "Étudier la composition, la structure et l'histoire des couches rocheuses de la Terre, sur le terrain au marteau et au laboratoire.",
        "subdomains": [
            "Cartographie géologique",
            "Géologie structurale & Tectonique",
            "Pétrographie & Sédimentologie",
            "Géoarchéologie"
        ]
    },
    {
        "id": "hydrogeologie-ressources-eau",
        "name": "Hydrogéologie & ressources en eau",
        "icon": "💧",
        "order": 2,
        "chainStage": "Prospection & Gestion Aquifère",
        "description": "Rechercher, évaluer, capter et protéger les réserves d'eau souterraine vitales pour la consommation humaine et l'irrigation.",
        "subdomains": [
            "Prospection d'aquifères",
            "Forages & Essais de pompage",
            "Périmètres de protection de captages",
            "Hydrodynamique souterraine"
        ]
    },
    {
        "id": "sciences-sol-pedologie",
        "name": "Sciences du sol & pédologie",
        "icon": "🌱",
        "order": 3,
        "chainStage": "Analyse de la Pellicule Vivante",
        "description": "Examiner la structure physique, la fertilité chimique et l'activité biologique des sols pour l'agriculture durable et la lutte anti-érosion.",
        "subdomains": [
            "Fosses pédologiques & Horizons",
            "Agronomie & Fertilité des terres",
            "Conservation des sols & Lutte anti-érosion",
            "Cartographie pédologique"
        ]
    },
    {
        "id": "paleontologie-archives-vivant",
        "name": "Paléontologie",
        "icon": "🦴",
        "order": 4,
        "chainStage": "Archives Fossiles & Évolution",
        "description": "Découvrir et analyser les archives fossiles du vivant pour retracer l'évolution des espèces, les grandes crises d'extinction et les paléoenvironnements.",
        "subdomains": [
            "Fouilles fossilifères",
            "Anatomie comparée & Phylogénie",
            "Micro-tomographie 3D à rayons X",
            "Biostratigraphie"
        ]
    },
    {
        "id": "geophysique-sous-sol",
        "name": "Géophysique",
        "icon": "🌋",
        "order": 5,
        "chainStage": "Imagerie Non Destructive",
        "description": "Ausculter les entrailles de la Terre sans forer par la propagation d'ondes sismiques, de champs magnétiques, électriques et gravitationnels.",
        "subdomains": [
            "Sismique réfraction & réflexion",
            "Tomographie électrique (ERT)",
            "Gravimétrie & Magnétométrie",
            "Radar géologique (GPR)"
        ]
    },
    {
        "id": "geomatique-cartographie-teledetection",
        "name": "Géomatique, cartographie & télédétection",
        "icon": "🗺️",
        "order": 6,
        "chainStage": "Données Spatiales & Satellites",
        "description": "Combiner imageries satellites multispectrales, relevés LiDAR par drone et SIG pour modéliser en 3D les reliefs et suivre la dynamique planétaire.",
        "subdomains": [
            "SIG (QGIS, ArcGIS)",
            "Télédétection satellitaire Sentinel",
            "LiDAR & Modèles numériques de terrain",
            "Webmapping"
        ]
    },
    {
        "id": "geologie-miniere-ressources",
        "name": "Géologie minière & ressources minérales",
        "icon": "⛏️",
        "order": 7,
        "chainStage": "Exploration & Estimation Minérale",
        "description": "Prospecter, forer, modéliser en 3D et quantifier les gisements de métaux et minéraux stratégiques indispensables à l'industrie et à la transition.",
        "subdomains": [
            "Prospection & Échantillonnage",
            "Carottage & Core Logging",
            "Modélisation 3D de gisement",
            "Calcul de réserves (Code JORC)"
        ]
    },
    {
        "id": "mineralogie-cristallographie",
        "name": "Minéralogie",
        "icon": "💎",
        "order": 8,
        "chainStage": "Cristallochimie & Diffraction RX",
        "description": "Décrypter l'arrangement atomique régulier des cristaux et leur chimie pour guider l'exploration, l'industrie et la recherche fondamentale.",
        "subdomains": [
            "Diffraction des rayons X (DRX)",
            "Spectroscopie Raman & Infrarouge",
            "Microsonde électronique",
            "Cristallographie géométrique"
        ]
    },
    {
        "id": "geomateriaux-materiaux-innovants",
        "name": "Géomatériaux & matériaux",
        "icon": "🧱",
        "order": 9,
        "chainStage": "Transformation & Valorisation Minérale",
        "description": "Concevoir et fabriquer des matériaux éco-responsables à partir de substances minérales : ciments bas carbone, céramiques avancées, argiles épuratrices.",
        "subdomains": [
            "Minéraux industriels (argiles, zéolithes)",
            "Liants hydrauliques & Ciments bas carbone",
            "Céramiques techniques & Réfractaires",
            "Écomatériaux de construction"
        ]
    },
    {
        "id": "geotechnique-ouvrages",
        "name": "Géotechnique",
        "icon": "🏗️",
        "order": 10,
        "chainStage": "Mécanique des Sols & Fondations",
        "description": "Mesurer la portance des terrains pour dimensionner des fondations sûres, stabiliser les talus et sécuriser les ponts, tunnels et barrages.",
        "subdomains": [
            "Sondages & Essais pressiométriques",
            "Mécanique des sols & Essais triaxiaux",
            "Dimensionnement des fondations & pieux",
            "Stabilité des pentes & soutènements"
        ]
    },
    {
        "id": "geosciences-marines-littorales",
        "name": "Géosciences marines",
        "icon": "🌊",
        "order": 11,
        "chainStage": "Exploration Océanique & Dynamique Côtière",
        "description": "Explorer les reliefs sous-marins profonds et comprendre le transport des sables littoraux pour préserver les plages et aménager les ports.",
        "subdomains": [
            "Bathymétrie multifaisceaux",
            "Carottage sous-marin",
            "Sédimentologie côtière & Houle",
            "Risques côtiers & Érosion"
        ]
    },
    {
        "id": "environnement-sites-pollues",
        "name": "Environnement & géosciences",
        "icon": "🌍",
        "order": 12,
        "chainStage": "Dépollution & Remédiation des Sols",
        "description": "Diagnostiquer les contaminations industrielles dans les sols et les nappes phréatiques, évaluer les risques sanitaires et piloter la dépollution.",
        "subdomains": [
            "Diagnostics de friches industrielles",
            "Prélèvements d'eau, sol et gaz du sol",
            "Évaluation des risques sanitaires (EQRS)",
            "Procédés de remédiation in situ"
        ]
    },
    {
        "id": "risques-naturels-georisques",
        "name": "Risques naturels",
        "icon": "⚠️",
        "order": 13,
        "chainStage": "Surveillance Sismique & Aléas Terrestres",
        "description": "Surveiller les tremblements de terre, les glissements de terrain et les chutes de blocs pour délimiter les zones à risque et protéger les vies humaines.",
        "subdomains": [
            "Sismologie & Aléa sismique",
            "Trajectographie de chutes de blocs",
            "Plans de Prévention des Risques (PPRN)",
            "Systèmes d'alerte précoce"
        ]
    },
    {
        "id": "ressources-energetiques-sous-sol",
        "name": "Ressources énergétiques du sous-sol",
        "icon": "♨️",
        "order": 14,
        "chainStage": "Chaleur de la Terre & Transition Propre",
        "description": "Capter la chaleur naturelle de la Terre pour alimenter les réseaux de chauffage urbain décarbonés ou générer de l'électricité renouvelable en continu.",
        "subdomains": [
            "Géothermie sur nappe & sondes",
            "Géothermie profonde haute température",
            "Modélisation thermodynamique de réservoir",
            "Doublets géothermiques de forages"
        ]
    },
    {
        "id": "recherche-scientifique-terre",
        "name": "Recherche scientifique",
        "icon": "🔬",
        "order": 15,
        "chainStage": "Recherche Fondamentale & Grands Instruments",
        "description": "Concevoir des protocoles d'avant-garde et utiliser les grands instruments (synchrotron, spectrométrie) pour percer les mystères de notre planète.",
        "subdomains": [
            "Géodynamique globale & Manteau",
            "Géochimie isotopique & Datations",
            "Paléoclimats & Cycles biogéochimiques",
            "Plateformes analytiques de pointe"
        ]
    },
    {
        "id": "enseignement-mediation-terre",
        "name": "Enseignement & médiation scientifique",
        "icon": "🎓",
        "order": 16,
        "chainStage": "Transmission des Savoirs & Vulgarisation",
        "description": "Former les futurs géologues en université et sur le terrain, ou vulgariser les secrets de la Terre dans les médias et musées pour éclairer les citoyens.",
        "subdomains": [
            "Enseignement universitaire & Écoles de terrain",
            "Direction de thèses de doctorat",
            "Journalisme scientifique",
            "Médiation en géoparcs & musées"
        ]
    },
    {
        "id": "analyse-laboratoire-instrumentation",
        "name": "Analyse, laboratoire & instrumentation",
        "icon": "🧪",
        "order": 17,
        "chainStage": "Préparation d'Échantillons & Métrologie",
        "description": "Préparer les lames minces micrométriques de roches, réaliser les essais physico-chimiques normalisés et entretenir les instruments de laboratoire.",
        "subdomains": [
            "Confection de lames minces (30 µm)",
            "Essais géotechniques normalisés (NF P)",
            "Granulométrie & Calcimétrie",
            "Maintenance d'instruments de coupe & polissage"
        ]
    }
];

    const PEDAGOGICAL_PATHWAYS = [
    {
        "id": "du-terrain-au-laboratoire",
        "title": "Du terrain au laboratoire",
        "icon": "🏞️",
        "description": "Comment une observation d'affleurement se transforme en modèle géologique 3D et diagnostic d'ingénierie.",
        "steps": [
            {
                "order": 1,
                "name": "Terrain",
                "icon": "🏞️",
                "desc": "Repérage des affleurements, massifs rocheux et paysages"
            },
            {
                "order": 2,
                "name": "Observation",
                "icon": "📷",
                "desc": "Examen visuel, texture, stratification et pendage des failles"
            },
            {
                "order": 3,
                "name": "Cartographie",
                "icon": "🗺️",
                "desc": "Levés de terrain, pointage GPS et dessin des contours géologiques"
            },
            {
                "order": 4,
                "name": "Échantillonnage",
                "icon": "🧪",
                "desc": "Prélèvement d'échantillons de roche et carottes de forage"
            },
            {
                "order": 5,
                "name": "Analyse",
                "icon": "🔬",
                "desc": "Lames minces sous microscope polarisant, MEB et diffraction RX"
            },
            {
                "order": 6,
                "name": "Modélisation",
                "icon": "💻",
                "desc": "Interpolation 3D géostatistique des couches et réservoirs"
            },
            {
                "order": 7,
                "name": "Interprétation",
                "icon": "📊",
                "desc": "Compréhension de l'histoire géodynamique et des contraintes"
            },
            {
                "order": 8,
                "name": "Diagnostic",
                "icon": "📋",
                "desc": "Rapport d'expertise pour les aménagements et forages"
            },
            {
                "order": 9,
                "name": "Projet",
                "icon": "🏗️",
                "desc": "Décision d'aménagement, d'exploitation ou de sécurisation"
            }
        ]
    },
    {
        "id": "de-l-eau-a-l-utilisateur",
        "title": "De l'eau souterraine à l'utilisateur",
        "icon": "💧",
        "description": "Le cycle complet de gestion durable de l'or bleu sous nos pieds.",
        "steps": [
            {
                "order": 1,
                "name": "Eau",
                "icon": "🌧️",
                "desc": "Précipitations atmosphériques et fonte nivale"
            },
            {
                "order": 2,
                "name": "Infiltration",
                "icon": "🌍",
                "desc": "Traversée de la zone non saturée et filtration naturelle par le sol"
            },
            {
                "order": 3,
                "name": "Nappe",
                "icon": "💧",
                "desc": "Stockage dans les pores ou fissures des formations aquifères"
            },
            {
                "order": 4,
                "name": "Prospection",
                "icon": "🔎",
                "desc": "Détection géophysique et géologique des zones aquifères productives"
            },
            {
                "order": 5,
                "name": "Évaluation",
                "icon": "📊",
                "desc": "Forages de reconnaissance et essais de pompage par paliers"
            },
            {
                "order": 6,
                "name": "Analyse",
                "icon": "🧪",
                "desc": "Contrôle de la potabilité, minéralisation et recherche de polluants"
            },
            {
                "order": 7,
                "name": "Protection",
                "icon": "⚠️",
                "desc": "Mise en place des périmètres de protection immédiats et rapprochés"
            },
            {
                "order": 8,
                "name": "Exploitation",
                "icon": "🚰",
                "desc": "Pompage régulé respectant le renouvellement de la ressource"
            },
            {
                "order": 9,
                "name": "Utilisation",
                "icon": "👥",
                "desc": "Distribution d'eau saine aux villes, cultures et industries"
            }
        ]
    },
    {
        "id": "de-la-roche-a-la-ressource",
        "title": "De la roche à la ressource minérale",
        "icon": "⛏️",
        "description": "La chaîne méthodologique complète de l'exploration minérale responsable.",
        "steps": [
            {
                "order": 1,
                "name": "Sous-sol",
                "icon": "🪨",
                "desc": "Formations géologiques profondes et contextes tectoniques"
            },
            {
                "order": 2,
                "name": "Prospection",
                "icon": "🔎",
                "desc": "Télédétection satellitaire, géochimie de sol et géophysique"
            },
            {
                "order": 3,
                "name": "Cartographie",
                "icon": "🗺️",
                "desc": "Identification précise des zones d'anomalies minérales"
            },
            {
                "order": 4,
                "name": "Exploration",
                "icon": "⛏️",
                "desc": "Campagnes de forages carottés profonds et diagraphies"
            },
            {
                "order": 5,
                "name": "Analyse",
                "icon": "🧪",
                "desc": "Dosages géochimiques en laboratoire certifié (teneurs utiles)"
            },
            {
                "order": 6,
                "name": "Estimation",
                "icon": "📊",
                "desc": "Calcul géostatistique des réserves selon les normes (JORC, NI 43-101)"
            },
            {
                "order": 7,
                "name": "Exploitation",
                "icon": "🏭",
                "desc": "Extraction minière ou de carrière planifiée et sécurisée"
            },
            {
                "order": 8,
                "name": "Transformation",
                "icon": "🧱",
                "desc": "Procédés métallurgiques, broyage fin et formulation de matériaux"
            },
            {
                "order": 9,
                "name": "Valorisation",
                "icon": "♻️",
                "desc": "Utilisation dans les technologies vertes et recyclage des sous-produits"
            }
        ]
    },
    {
        "id": "du-fossile-a-l-histoire-de-la-vie",
        "title": "Du fossile à l'histoire de la vie",
        "icon": "🦴",
        "description": "Comment un fragment fossile enfoui éclaire l'arbre de l'évolution planétaire.",
        "steps": [
            {
                "order": 1,
                "name": "Terrain",
                "icon": "🪨",
                "desc": "Reconnaissance des niveaux sédimentaires fossilifères"
            },
            {
                "order": 2,
                "name": "Recherche",
                "icon": "🔎",
                "desc": "Fouilles délicates au pinceau, repérage et plâtrage in situ"
            },
            {
                "order": 3,
                "name": "Échantillon",
                "icon": "🦴",
                "desc": "Prélèvement protégé et transport sécurisé au laboratoire"
            },
            {
                "order": 4,
                "name": "Préparation",
                "icon": "🧪",
                "desc": "Dégagement minutieux de la gangue sous binoculaire"
            },
            {
                "order": 5,
                "name": "Analyse",
                "icon": "🔬",
                "desc": "Micro-tomographie 3D à rayons X et morphométrie géométrique"
            },
            {
                "order": 6,
                "name": "Comparaison",
                "icon": "📚",
                "desc": "Anatomie comparée avec les collections paléontologiques mondiales"
            },
            {
                "order": 7,
                "name": "Évolution",
                "icon": "🧬",
                "desc": "Positionnement phylogénétique dans l'arbre du vivant"
            },
            {
                "order": 8,
                "name": "Paléoenvironnement",
                "icon": "🌍",
                "desc": "Reconstitution du climat, du biotope et des écosystèmes anciens"
            }
        ]
    }
];

    const JOBS = [
    {
        "id": "geologue",
        "slug": "geologue",
        "title": "Géologue / Docteur de la Planète",
        "aliases": [
            "Géoscientifique",
            "Géologue de terrain",
            "Ingénieur géologue",
            "Earth Scientist"
        ],
        "icon": "🪨",
        "familyId": "sciences-terre-geosciences",
        "domain": "Géologie",
        "domainId": "geologie-fondamentale-appliquee",
        "subdomain": "Cartographie & Levés Géologiques",
        "shortDescription": "Véritable docteur de la Terre, le géologue étudie notre planète en surface et en profondeur pour comprendre son histoire, localiser ses ressources vitales et sécuriser les aménagements.",
        "longDescription": "Des entrailles de la Terre au laboratoire d'analyse de pointe, le géologue ausculte les structures rocheuses, délivre des diagnostics géodynamiques et prévient les risques terrestres. Sur le terrain, muni de son marteau de géologue, de sa boussole à clinomètre et de son carnet d'affleurement, il observe les formations sédimentaires, magmatiques et métamorphiques, mesure le pendage des failles et cartographie les strates. En laboratoire, il étudie les lames minces sous microscope polarisant, scrute la chimie minérale à la microsonde et au MEB, et recourt à la modélisation 3D et aux images satellitaires pour reconstituer l'architecture profonde des massifs rocheux.",
        "simpleDefinition": "Scientifique de terrain et de laboratoire qui étudie la composition, la structure et l'histoire de la Terre pour trouver des ressources (eau, minerais, énergie) et guider les constructions humaines.",
        "level": "Bac +5 (Master STPE / Diplôme d'Ingénieur Géologue)",
        "missions": [
            "Mener des campagnes de terrain approfondies : repérage d'affleurements, relevés stratigraphiques et tectoniques, échantillonnage de roches",
            "Établir des cartes géologiques détaillées et des coupes structurales prévisionnelles au 1/50 000 et 1/25 000",
            "Analyser au laboratoire la minéralogie et la texture des roches (lames minces, microscopie optique polarisante, MEB, diffraction des rayons X - DRX)",
            "Exploiter les outils informatiques de pointe : géostatistiques, SIG (QGIS, ArcGIS), télédétection satellitaire multispectrale et modélisation 3D de sous-sol (Move, Leapfrog)",
            "Délivrer des diagnostics géologiques d'aide à la décision pour les projets d'infrastructures (tunnels, barrages, ponts, autoroutes) et d'aménagement du territoire",
            "Participer à l'identification et à l'évaluation des ressources exploitables (zones aquifères, gisements minéraux, chaleur géothermique)"
        ],
        "workEnvironment": "Activité équilibrée entre campagnes de terrain en extérieur (montagnes, falaises, carrières, chantiers d'aménagement, forages) par tous les temps, et travail en laboratoire d'analyse physique/chimique et bureau d'études informatique.",
        "typicalDay": [
            {
                "time": "07h30",
                "activity": "Briefing sécurité et préparation de la sortie de terrain : carnet, GPS différentiel, boussole, marteau, loupe x10 et trousse de prélèvement"
            },
            {
                "time": "09h00",
                "activity": "Parcours d'affleurements rocheux, relevé des pendages des failles, identification des faciès sédimentaires et repérage GPS des contacts géologiques"
            },
            {
                "time": "12h30",
                "activity": "Déjeuner de terrain sur le massif et pointage des stations de mesure sur la carte d'affleurement"
            },
            {
                "time": "14h00",
                "activity": "Campagne d'échantillonnage de carottes de roche sur un chantier de forage de reconnaissance"
            },
            {
                "time": "16h30",
                "activity": "Retour au laboratoire : sciage des échantillons, préparation des lames minces et observation au microscope polarisant"
            },
            {
                "time": "18h00",
                "activity": "Numérisation des données dans le SIG et interpolation des failles sur le modèle 3D du sous-sol"
            }
        ],
        "companyRole": "Pillier technique transversal, le géologue éclaire les ingénieurs civils, les bureaux d'études environnementaux et les décideurs publics sur les caractéristiques réelles du sous-sol.",
        "skills": {
            "technical": [
                "Pétrographie, minéralogie et sédimentologie de terrain",
                "Tectonique des plaques et géologie structurale (analyse des failles, plis et schistosités)",
                "Interprétation de données géophysiques et de carottages",
                "Cartographie géologique et géoréférencement SIG",
                "Télédétection par imagerie satellite et modèles numériques de terrain (MNT)",
                "Microscopie optique et électronique (MEB, microsonde)"
            ],
            "human": [
                "Rigueur d'observation scientifique et esprit de déduction",
                "Excellente endurance physique et goût prononcé pour le plein air",
                "Capacité de synthèse tridimensionnelle dans l'espace et le temps",
                "Clarté rédactionnelle pour rédiger des avis d'experts exploitables",
                "Sens du travail en équipe pluridisciplinaire"
            ],
            "tools": [
                "Marteau Estwing",
                "Boussole clinomètre Freiberger / Brunton",
                "Microscope polarisant Leica",
                "QGIS / ArcGIS Pro",
                "Leapfrog Geo",
                "Surfer",
                "GPS différentiel Trimble"
            ]
        },
        "geosciencesPedagogy": "Parcours clé « Du terrain au laboratoire » : 🏞️ Terrain & affleurements ➔ 📷 Observation macroscopique ➔ 🗺️ Levés cartographiques ➔ 🧪 Échantillonnage de carottes ➔ 🔬 Analyse microscopique & MEB ➔ 💻 Modélisation 3D structurale ➔ 📋 Diagnostic & rapport géotechnique",
        "studies": {
            "pathway": [
                {
                    "level": "Bac +3",
                    "degree": "Licence Sciences de la Terre (ST) ou CMI Géosciences Appliquées (ex: Université de Poitiers, UFR SFA)"
                },
                {
                    "level": "Bac +5",
                    "degree": "Master Sciences de la Terre et des Planètes, Environnement (STPE) ou Diplôme d'Ingénieur (ENSG Nancy, UniLaSalle, Polytech Sorbonne)"
                },
                {
                    "level": "Bac +8",
                    "degree": "Doctorat en Géosciences (recherche académique, BRGM, IFPEN, CNRS)"
                }
            ],
            "schools": [
                {
                    "name": "Université de Poitiers - Département Géosciences (UFR SFA, Licence ST, Master STPE, CMI)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Nationale Supérieure de Géologie (ENSG Nancy - Université de Lorraine)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut des Sciences de la Terre (IST - Université Cheikh Anta Diop de Dakar UCAD)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Département de Géologie - Faculté des Sciences et Techniques (FST - UCAD)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Agrément d'expert géologue",
                "Habilitation sécurité chantiers et forages",
                "Certification SIG professionnelle"
            ]
        },
        "career": {
            "sectors": [
                "Bureaux d'études géotechniques et environnementaux",
                "Services géologiques nationaux (BRGM, DMG)",
                "Compagnies énergétiques et minières",
                "Collectivités territoriales et aménagement",
                "Recherche et enseignement supérieur"
            ],
            "companies": [
                "BRGM",
                "Antea Group",
                "Fugro",
                "Golder Associates / WSP",
                "Direction des Mines et de la Géologie du Sénégal",
                "Eiffage Génie Civil",
                "Suez Environnement"
            ],
            "evolution": [
                "Chef de projet en ingénierie géologique",
                "Directeur d'études géotechniques",
                "Expert international en aléas sismiques et mouvements de terrain",
                "Directeur d'exploration régionale"
            ],
            "pros": [
                "Métier passion alliant aventures de terrain et rigueur scientifique de pointe",
                "Impact direct sur la sécurité des populations et la gestion des ressources",
                "Forte employabilité internationale"
            ],
            "cons": [
                "Campagnes de terrain exigeantes physiquement et parfois par météo rude",
                "Déplacements fréquents loin du domicile",
                "Responsabilité juridique et sécuritaire importante sur les avis de stabilité"
            ]
        },
        "gettingStarted": "Effectuer des stages de terrain dès la licence (écoles de terrain en géologie structurale), maîtriser QGIS et apprendre à croiser les observations macroscopiques avec la chimie minérale.",
        "aiImpact": {
            "level": "Modéré / Transformation positive",
            "opportunities": [
                "Traitement automatisé d'imageries satellites et LiDAR par vision par ordinateur",
                "Modélisation géologique 3D assistée par apprentissage profond",
                "Classification automatisée des faciès minéraux"
            ],
            "challenges": [
                "Nécessité de maîtriser les algorithmes géostatistiques et le traitement des nuages de points 3D"
            ],
            "humanEdge": "L'œil du géologue sur la paroi rocheuse, son interprétation du contexte tectonique et sa capacité à reconstituer mentalement 500 millions d'années d'histoire géologique restent hors de portée d'un algorithme."
        },
        "africaContext": {
            "title": "Le Géologue au Sénégal et en Afrique de l'Ouest",
            "description": "En Afrique de l'Ouest, le géologue joue un rôle stratégique dans la cartographie des formations du socle birimien (Kédougou, Mali, Guinée), la gestion des grands bassins sédimentaires sénégalo-mauritaniens et la sécurisation des infrastructures majeures (Port de Ndayane, autoroutes, barrages de l'OMVS).",
            "keyInstitutions": [
                "Institut des Sciences de la Terre (IST - UCAD Dakar)",
                "Direction des Mines et de la Géologie (DMG - Ministère des Mines et de la Géologie)",
                "PETROSEN (Société des Pétroles du Sénégal)",
                "Laboratoires de l'IFAN Cheikh Anta Diop"
            ],
            "projects": [
                "Cartographie géologique et géophysique détaillée du Sénégal oriental",
                "Prospection des gisements de phosphates, zircon (GCO Diogo) et or",
                "Études structurales préalables aux grands aménagements côtiers et hydrauliques"
            ],
            "opportunities": "Très forte demande de diplômés de l'IST pour les projets d'aménagement minier, les bureaux d'études géotechniques de Dakar et l'exploration hydrogéologique."
        },
        "salary": "🇫🇷 France : 30 000 - 60 000 € brut/an • 🇸🇳 Sénégal : 400 000 - 1 800 000 FCFA net/mois",
        "connectedFamilies": [
            "environnement-climat",
            "energie-renouvelable",
            "btp-architecture",
            "industrie-mecanique"
        ],
        "relatedJobs": [
            "hydrogeologue",
            "pedologue",
            "geologue-minier",
            "geotechnicien",
            "geophysicien"
        ],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Fiche Métier Géologue - Département Géosciences",
                "url": "https://sfa.univ-poitiers.fr/geosciences/debouches-professionnels/geologue/",
                "type": "metier"
            },
            {
                "organization": "BRGM",
                "title": "Métiers des sciences de la Terre et de l'environnement",
                "url": "https://www.brgm.fr",
                "type": "secteur"
            }
        ],
        "sourcePoitiers": true,
        "sourceBRGM": true,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Près de 80% des ressources utilisées au quotidien par l'humanité (eau potable, métaux, matériaux de construction, énergie) proviennent directement de prospections géologiques.",
            "pourquoi": "Le sol et le sous-sol renferment la mémoire de la planète et les matières premières indispensables à toute civilisation moderne.",
            "a_retenir": "Le géologue ne fait pas que contempler des roches anciennes : il est au cœur des défis de la transition écologique et de l'approvisionnement durable."
        },
        "salaryDetail": {
            "france": {
                "entry": 30000,
                "mid": 42000,
                "expert": 60000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : Grilles BRGM, APEC & Université de Poitiers"
            },
            "senegal": {
                "entry": 400000,
                "mid": 850000,
                "expert": 1800000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés en bureau d'études géologiques et compagnies minières à Dakar et Thiès"
            }
        },
        "geosciencesPedagogyDetail": {
            "pathway": "Du terrain au laboratoire",
            "steps": [
                "🏞️ Terrain & affleurements",
                "📷 Observation macroscopique",
                "🗺️ Levés cartographiques",
                "🧪 Échantillonnage de carottes",
                "🔬 Analyse microscopique & MEB",
                "💻 Modélisation 3D structurale",
                "📋 Diagnostic & rapport géotechnique"
            ]
        }
    },
    {
        "id": "hydrogeologue",
        "slug": "hydrogeologue",
        "title": "Hydrogéologue / Spécialiste des Eaux Souterraines",
        "aliases": [
            "Ingénieur hydrogéologue",
            "Gestionnaire des ressources en eau",
            "Hydrologue du sous-sol",
            "Water Resources Geologist"
        ],
        "icon": "💧",
        "familyId": "sciences-terre-geosciences",
        "domain": "Hydrogéologie & ressources en eau",
        "domainId": "hydrogeologie-ressources-eau",
        "subdomain": "Prospection Aquifère & Gestion des Nappes",
        "shortDescription": "Spécialiste de 'l'or bleu' souterrain, l'hydrogéologue recherche les nappes phréatiques et aquifères profonds, évalue leurs réserves, prévient les pollutions et sécurise l'eau potable.",
        "longDescription": "L'eau souterraine est la ressource la plus vitale et la plus vulnérable de notre planète. Véritable prospecteur et protecteur de l'or bleu, l'hydrogéologue recherche les zones aquifères riches en eau douce, quantifie les volumes exploitables par des essais de pompage et dresse les schémas d'exploitation rationnelle. Sur le terrain, il supervise les forages d'eau, observe la nature perméable des strates rocheuses et installe des piézomètres pour suivre les nappes. En laboratoire et en bureau d'études, il analyse les caractéristiques physico-chimiques des eaux, calcule les vitesses d'écoulement souterrain, modélise la vulnérabilité aux pollutions agricoles ou industrielles et délimite les périmètres de protection des captages.",
        "simpleDefinition": "Expert des eaux souterraines qui cherche les nappes d'eau sous la terre, contrôle leur pureté, calcule les quantités disponibles et empêche leur assèchement ou leur pollution.",
        "level": "Bac +5 (Master STPE Hydrogéologie / Ingénieur Polytech Eau)",
        "missions": [
            "Prospecter et identifier les couches géologiques aquifères (sables, calcaires fracturés, grès) propices à l'alimentation en eau",
            "Concevoir, dimensionner et superviser les chantiers de forages hydrauliques et de puits de captage",
            "Réaliser des essais de pompage par paliers pour calculer la transmissivité, le coefficient d'emmagasinement et le débit critique de la nappe",
            "Contrôler la qualité physico-chimique et bactériologique de l'eau (pH, nitrates, métaux lourds, salinité) en laboratoire",
            "Établir les périmètres de protection immédiate, rapprochée et éloignée autour des captages d'eau potable",
            "Modéliser numériquement les écoulements souterrains et le transport des polluants (logiciels Modflow, Feflow)",
            "Élaborer des plans de décontamination des nappes phréatiques polluées et participer aux SAGE (Schémas d'Aménagement et de Gestion des Eaux)"
        ],
        "workEnvironment": "Partage entre missions de terrain pour le suivi des forages, les jaugeages de sources et le relevé de piézomètres, et travail sur ordinateur en bureau d'études pour la modélisation hydrodynamique.",
        "typicalDay": [
            {
                "time": "08h00",
                "activity": "Départ sur un chantier de forage d'eau potable pour vérifier la coupe lithologique des déblais forés"
            },
            {
                "time": "09h30",
                "activity": "Suivi de la descente des tubes crépinés dans la formation aquifère et mise en place du massif de gravier filtrant"
            },
            {
                "time": "11h30",
                "activity": "Lancement d'un essai de pompage longue durée (72h) : relevé précis du rabattement de la nappe au sondeur piézométrique"
            },
            {
                "time": "14h00",
                "activity": "Prélèvement d'échantillons d'eau sous atmosphère contrôlée pour analyse isotopique et chimique"
            },
            {
                "time": "16h00",
                "activity": "Retour au bureau : saisie des courbes de descente et de remontée pour calculer la transmissivité de l'aquifère"
            },
            {
                "time": "17h30",
                "activity": "Mise à jour du modèle hydrodynamique Modflow pour simuler l'impact du pompage sur les puits voisins"
            }
        ],
        "companyRole": "Garant de la sécurité sanitaire et hydrique des territoires, l'hydrogéologue fournit les avis contraignants pour les permis de forer et les autorisations de captage.",
        "skills": {
            "technical": [
                "Hydrodynamique des milieux poreux et fissurés (Loi de Darcy, équations de Theis)",
                "Techniques de forage, tubage, cimentation et développement de forages",
                "Interprétation des essais de pompage et piézométrie",
                "Chimie des eaux souterraines et hydrochimie isotopique",
                "Modélisation numérique des écoulements souterrains (Modflow, Feflow)",
                "Réglementation des captages et de la police de l'eau"
            ],
            "human": [
                "Rigueur méthodologique et probité scientifique",
                "Sens aigu des responsabilités environnementales et de santé publique",
                "Capacité de négociation avec les agriculteurs, industriels et élus locaux",
                "Pédagogie pour expliquer la fragilité des nappes invisibles"
            ],
            "tools": [
                "Sonde piézométrique lumineuse",
                "Multiparamètre physico-chimique (pH, CE, T°)",
                "Modflow / Visual MODFLOW",
                "QGIS",
                "R / Python pour séries temporelles"
            ]
        },
        "geosciencesPedagogy": "Parcours clé « De l'eau souterraine à l'utilisateur » : 🌧️ Précipitations & recharge ➔ 🌍 Infiltration à travers le sol ➔ 💧 Stockage dans l'aquifère ➔ 🔎 Prospection hydrogéophysique ➔ 📊 Forage d'essai & pompage ➔ 🧪 Analyses physico-chimiques ➔ ⚠️ Périmètres de protection ➔ 🚰 Distribution d'eau potable",
        "studies": {
            "pathway": [
                {
                    "level": "Bac +3",
                    "degree": "Licence Sciences de la Terre ou Licence Pro Usage et Qualité des Eaux (UQ-Eaux, Université de Poitiers)"
                },
                {
                    "level": "Bac +5",
                    "degree": "Master STPE Parcours Hydrogéologie et Transferts (Université de Poitiers) ou Master Eau & Environnement"
                },
                {
                    "level": "Bac +5",
                    "degree": "Diplôme d'Ingénieur en Eau et Environnement (Polytech Montpellier / Grenoble, ENGEES Strasbourg, IST Dakar)"
                }
            ],
            "schools": [
                {
                    "name": "Université de Poitiers - Master Hydrogéologie et Transferts / Licence Pro UQ-Eaux (UFR SFA)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "ENGEES Strasbourg (École Nationale du Génie de l'Eau et de l'Environnement)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut des Sciences de la Terre (IST - UCAD Dakar - Option Hydrogéologie)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "École Polytechnique de Thiès (EPT - Département Génie Civil & Hydraulique)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Agrément d'hydrogéologue agréé en matière d'hygiène publique",
                "Habilitation Forage & Risque Chimique"
            ]
        },
        "career": {
            "sectors": [
                "Bureaux d'études spécialisés en environnement et eau",
                "Compagnies de distribution d'eau potable (Veolia, Saur, SEN'EAU)",
                "Collectivités locales et agences de l'eau",
                "Organismes de recherche (BRGM, IRD)",
                "Agro-industrie et géothermie"
            ],
            "companies": [
                "BRGM",
                "Antea Group",
                "Veolia Eau",
                "Suez",
                "SEN'EAU (Sénégal)",
                "OFOR (Office des Forages Ruraux)",
                "DGPRE Sénégal"
            ],
            "evolution": [
                "Responsable de pôle hydrogéologie",
                "Directeur de régie des eaux",
                "Expert judiciaire en pollutions de nappes",
                "Consultant international pour l'ONU-Eau"
            ],
            "pros": [
                "Métier à forte utilité sociale et vitale (accès à l'eau potable)",
                "Diversité terrain/modélisation mathématique",
                "Demande croissante face au changement climatique et aux sécheresses"
            ],
            "cons": [
                "Contraintes climatiques extrêmes sur le terrain (chaleur, accès difficile)",
                "Gestion des crises de pollution d'eau sous forte pression publique",
                "Responsabilité sanitaire directe"
            ]
        },
        "gettingStarted": "Privilégier un cursus combinant solide formation en géologie fondamentale et spécialisation en hydraulique souterraine et hydrochimie (ex: Master Hydrogéologie de Poitiers).",
        "aiImpact": {
            "level": "Élevé / Automatisation prédictive",
            "opportunities": [
                "Prédiction des niveaux de nappes par réseaux de neurones récurrents (LSTM)",
                "Détection précoce des anomalies de débit et d'intrusion saline par capteurs IoT",
                "Optimisation automatique des régimes de pompage"
            ],
            "challenges": [
                "Nécessité de calibrer les modèles IA avec des données réelles de terrain précises"
            ],
            "humanEdge": "La décision d'autoriser ou restreindre un captage et la compréhension des discontinuités géologiques locales non mesurées demeurent la prérogative humaine."
        },
        "africaContext": {
            "title": "L'Hydrogéologue au Sénégal : Enjeu Vital du Sahel",
            "description": "Au Sénégal et dans le Sahel, les eaux souterraines constituent plus de 85% de l'alimentation en eau potable et irriguée. L'hydrogéologue y étudie les grandes nappes stratégiques : nappe du Maestrichtien (qui alimente Touba et le bassin arachidier), nappes des sables quaternaires de Thiaroye et nappe du Paléocène de Sébikotane.",
            "keyInstitutions": [
                "DGPRE (Direction de la Gestion et de la Planification des Ressources en Eau)",
                "OFOR (Office des Forages Ruraux)",
                "Institut des Sciences de la Terre (IST - UCAD)",
                "IRD Dakar (Institut de Recherche pour le Développement)"
            ],
            "projects": [
                "Gestion durable de la nappe profonde du Maestrichtien",
                "Lutte contre la salinisation des terres et des nappes dans les estuaires du Sine-Saloum et de Casamance",
                "Programme national de forages pastoraux et agricoles du PUDC"
            ],
            "opportunities": "Postes réguliers dans les ONG de développement, les bureaux d'études en hydraulique villageoise et à l'OFOR."
        },
        "salary": "🇫🇷 France : 24 000 - 50 000 € brut/an • 🇸🇳 Sénégal : 350 000 - 1 700 000 FCFA net/mois",
        "connectedFamilies": [
            "environnement-climat",
            "agriculture-agritech",
            "energie-renouvelable",
            "btp-architecture"
        ],
        "relatedJobs": [
            "geologue",
            "pedologue",
            "ingenieur-geotechnique",
            "expert-sites-sols-pollues",
            "ingenieur-geothermie"
        ],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Fiche Métier Hydrogéologue - Département Géosciences",
                "url": "https://sfa.univ-poitiers.fr/geosciences/debouches-professionnels/hydrogeologue/",
                "type": "metier"
            },
            {
                "organization": "Université de Poitiers",
                "title": "Master STPE Parcours Hydrogéologie et Transferts",
                "url": "https://sfa.univ-poitiers.fr/geosciences/formations/master-stpe-parcours-hydrogeologie-et-transferts/",
                "type": "formation"
            }
        ],
        "sourcePoitiers": true,
        "sourceBRGM": true,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Plus de 98% de l'eau douce liquide sur Terre est contenue sous nos pieds, dans les nappes souterraines.",
            "pourquoi": "Contrairement aux rivières et lacs visibles qui s'évaporent rapidement, les aquifères souterrains agissent comme d'immenses réservoirs naturels régulés sur des siècles.",
            "a_retenir": "L'hydrogéologue gère un patrimoine invisible dont dépend la survie des villes, des cultures et des écosystèmes."
        },
        "salaryDetail": {
            "france": {
                "entry": 24000,
                "mid": 36000,
                "expert": 50000,
                "currency": "EUR",
                "period": "an",
                "note": "Rémunération de 1 700 à 3 500 € brut/mois (Source : Université de Poitiers Géosciences)"
            },
            "senegal": {
                "entry": 350000,
                "mid": 750000,
                "expert": 1700000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés en bureau d'hydraulique et projets OFOR à Dakar et en régions"
            }
        },
        "geosciencesPedagogyDetail": {
            "pathway": "De l'eau souterraine à l'utilisateur",
            "steps": [
                "🌧️ Précipitations & recharge",
                "🌍 Infiltration à travers le sol",
                "💧 Stockage dans l'aquifère",
                "🔎 Prospection hydrogéophysique",
                "📊 Forage d'essai & pompage",
                "🧪 Analyses physico-chimiques",
                "⚠️ Périmètres de protection",
                "🚰 Distribution d'eau potable"
            ]
        }
    },
    {
        "id": "pedologue",
        "slug": "pedologue",
        "title": "Pédologue / Spécialiste des Sols",
        "aliases": [
            "Scientifique du sol",
            "Agronome pédologue",
            "Expert pédologique",
            "Soil Scientist"
        ],
        "icon": "🌱",
        "familyId": "sciences-terre-geosciences",
        "domain": "Sciences du sol & pédologie",
        "domainId": "sciences-sol-pedologie",
        "subdomain": "Étude des Horizons & Fertilité des Terres",
        "shortDescription": "Spécialiste de la fine pellicule vivante sous nos pieds, le pédologue analyse la structure, la chimie et l'activité biologique des sols pour guider l'agriculture, prévenir l'érosion et assainir l'environnement.",
        "longDescription": "Le sol n'est pas de la terre inerte : c'est un milieu vivant, complexe et fragile, à l'interface vitale entre l'atmosphère, la roche mère, l'eau et le vivant. Le pédologue est le scientifique de ce patrimoine non renouvelable à l'échelle d'une vie humaine. Sur le terrain, il creuse des fosses pédologiques, sonde à la tarière et décrit la succession des horizons (couleur, texture, structure, humidité, enracinement et activité des vers de terre). Au laboratoire, il dose le pH, la matière organique, la capacité d'échange cationique et recherche les contaminants (pesticides, métaux lourds). Ses diagnostics sont déterminants pour conseiller les agriculteurs, sécuriser les chantiers d'aménagement contre les crues et optimiser le traitement des déchets.",
        "simpleDefinition": "Scientifique qui analyse la terre agricole et naturelle pour savoir si le sol est fertile, vivant, pollué ou menacé par l'érosion, et qui aide à le cultiver durablement.",
        "level": "Bac +5 (Master Sciences du Sol / Ingénieur Agronome)",
        "missions": [
            "Réaliser des carottages à la tarière et ouvrir des fosses pédologiques pour décrire les profils de sol",
            "Caractériser les propriétés physiques du sol : texture (argiles, limons, sables), structure, porosité et perméabilité à l'eau",
            "Analyser en laboratoire les propriétés chimiques et biologiques : pH, taux d'humus, azote, phosphore, métaux lourds et microfaune",
            "Dresser des cartes pédologiques précises et intégrer les types de sols dans les bases de données géographiques (SIG)",
            "Conseiller les exploitants agricoles sur les rotations culturales, les amendements, l'irrigation et la conservation des sols",
            "Évaluer l'impact des crues, l'aptitude des sols à l'épuration naturelle des effluents et les risques de battance ou d'érosion",
            "Fournir des avis réglementaires pour les plans d'urbanisme (PLU) afin de préserver les meilleures terres agricoles"
        ],
        "workEnvironment": "Travail de terrain en milieu agricole, forestier ou périurbain (creusement de profils, prélèvements à la tarière sous toute météo), complété par des analyses en laboratoire d'agronomie et du travail cartographique SIG.",
        "typicalDay": [
            {
                "time": "08h00",
                "activity": "Arrivée sur une exploitation agricole pour une campagne de diagnostic agro-pédologique parcellaire"
            },
            {
                "time": "09h00",
                "activity": "Ouverture d'une fosse pédologique à la mini-pelle (profondeur 1,80 m) et nettoyage de la paroi d'observation"
            },
            {
                "time": "10h30",
                "activity": "Description minutieuse des horizons : mesure de l'épaisseur de la terre végétale, test à l'acide pour le calcaire, charte de couleurs Munsell"
            },
            {
                "time": "12h30",
                "activity": "Prélèvement d'échantillons de sol par horizon dans des sachets étiquetés pour analyses de laboratoire"
            },
            {
                "time": "14h30",
                "activity": "Série de 15 sondages rapides à la tarière manuelle pour vérifier l'extension spatiale du type de sol identifié"
            },
            {
                "time": "16h30",
                "activity": "Retour au laboratoire : séchage, tamisage à 2 mm et préparation des réactifs pour dosage du pH et du carbone organique"
            },
            {
                "time": "18h00",
                "activity": "Élaboration de la carte des unités pédologiques sur logiciel SIG pour le rapport d'expertise agronomique"
            }
        ],
        "companyRole": "Pont indispensable entre la géologie et l'agronomie, le pédologue permet d'adapter les pratiques culturales et les aménagements aux réalités physiques et biologiques du sol.",
        "skills": {
            "technical": [
                "Morphologie et classification pédologique (Référentiel Pédologique Français, WRB)",
                "Chimie des colloïdes du sol et biochimie de la matière organique",
                "Physique des transferts d'eau et de nutriments dans la zone non saturée",
                "Analyses agronomiques (CEC, saturation en bases, granulométrie par sédimentométrie)",
                "Cartographie numérique des sols et géostatistiques appliquées",
                "Diagnostic des pollutions diffuses et industrielles"
            ],
            "human": [
                "Sens aigu de l'observation tactile et visuelle sur le terrain",
                "Goût pour le travail manuel et extérieur",
                "Sens du dialogue avec les agriculteurs et aménageurs",
                "Capacité de synthèse interdisciplinaire (physique, chimie, biologie)"
            ],
            "tools": [
                "Tarière pédologique Edelman",
                "Couteau de pédologue",
                "Charte des couleurs Munsell",
                "Pénétromètre / Infiltromètre",
                "pH-mètre de terrain",
                "QGIS"
            ]
        },
        "geosciencesPedagogy": "Parcours clé « De la roche au sol fertile » : 🪨 Altération de la roche mère ➔ 🍂 Apport de matière organique ➔ 🐛 Humification & brassage biologique ➔ 🔎 Fosse pédologique & horizons ➔ 🧪 Analyses physico-chimiques ➔ 🌾 Cartographie agronomique ➔ 🌱 Pratiques culturales durables",
        "studies": {
            "pathway": [
                {
                    "level": "Bac +3",
                    "degree": "Licence Sciences de la Terre / Sciences de la Vie ou Licence Pro Agronomie"
                },
                {
                    "level": "Bac +5",
                    "degree": "Master Sciences du Sol, Gestion de l'Environnement (STPE Université de Poitiers, AgroParisTech, ENSAT)"
                },
                {
                    "level": "Bac +5",
                    "degree": "Diplôme d'Ingénieur Agronome (Institut Agro, AgroParisTech, ENSA Thiès)"
                }
            ],
            "schools": [
                {
                    "name": "Université de Poitiers - Faculté des Sciences Fondamentales et Appliquées (Licence ST, Master STPE)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut Agro (Montpellier / Rennes - Pédologie appliquée)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Nationale Supérieure d'Agriculture (ENSA de Thiès - Université Iba Der Thiam)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Institut des Sciences de l'Environnement (ISE - UCAD Dakar)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification Pédologue agréé AFES (Association Française pour l'Étude du Sol)",
                "Certification Qualité Sols"
            ]
        },
        "career": {
            "sectors": [
                "Chambres d'agriculture et instituts techniques (Arvalis, Terres Inovia)",
                "Bureaux d'études en environnement et aménagement rural",
                "Recherche agronomique (INRAE, IRD, ISRA)",
                "Collectivités territoriales et parcs naturels",
                "Coopératives agricoles et viticoles"
            ],
            "companies": [
                "INRAE",
                "Bureaux d'études agro-environnementaux",
                "ISRA (Institut Sénégalais de Recherches Agricoles)",
                "Sociétés sucrières et agro-industrielles"
            ],
            "evolution": [
                "Chef de projet agro-pédologie",
                "Directeur d'agence d'ingénierie environnementale",
                "Chercheur en biogéochimie des sols",
                "Expert foncier et agricole"
            ],
            "pros": [
                "Métier au cœur des enjeux d'alimentation mondiale et de neutralité carbone",
                "Contact direct avec la terre et les acteurs ruraux",
                "Expertise rare très recherchée"
            ],
            "cons": [
                "Pénibilité physique du creusement et des forages à la tarière par tous temps",
                "Activité parfois saisonnière liée au calendrier agricole",
                "Complexité des sols très hétérogènes"
            ]
        },
        "gettingStarted": "S'investir dans l'Association Française pour l'Étude du Sol (AFES), participer à des concours de jugement de sols et maîtriser les logiciels de cartographie SIG.",
        "aiImpact": {
            "level": "Modéré / Aide à la cartographie",
            "opportunities": [
                "Digital Soil Mapping (cartographie prédictive des sols par machine learning)",
                "Télédétection hyperspectrale par drone pour mesurer le carbone du sol"
            ],
            "challenges": [
                "Nécessité de nombreuses fosses réelles pour étalonner les modèles IA"
            ],
            "humanEdge": "La description tactile d'un profil de sol et l'évaluation de sa structure vivante exigent l'expérience sensorielle directe de l'expert."
        },
        "africaContext": {
            "title": "Le Pédologue au Sénégal : Rempart contre la Dégradation des Terres",
            "description": "Au Sénégal, le pédologue est en première ligne face aux défis de salinisation des terres du bassin du Saloum, d'acidification des sols de Casamance et de désertification dans le Ferlo. Il travaille avec l'ISRA, l'ENSA de Thiès et l'ANCAR pour restaurer la fertilité des sols du bassin arachidier et sécuriser la Grande Muraille Verte.",
            "keyInstitutions": [
                "ISRA (Institut Sénégalais de Recherches Agricoles - Laboratoire des Sols de Bel-Air)",
                "ENSA de Thiès (École Nationale Supérieure d'Agriculture)",
                "CSE (Centre de Suivi Écologique de Dakar)",
                "Agence Sénégalaise de la Reforestation et de la Grande Muraille Verte"
            ],
            "projects": [
                "Projets de récupération des terres salées (tannes) du Sine-Saloum",
                "Cartographie des sols fertiles de la Vallée du fleuve Sénégal (SAED)",
                "Suivi des stocks de carbone et lutte contre l'érosion éolienne"
            ],
            "opportunities": "Recrutements dans les projets de développement agricole, les agences d'aménagement de vallées et les ONG environnementales."
        },
        "salary": "🇫🇷 France : 26 000 - 52 000 € brut/an • 🇸🇳 Sénégal : 300 000 - 1 400 000 FCFA net/mois",
        "connectedFamilies": [
            "agriculture-agritech",
            "environnement-climat",
            "foret-bois",
            "amenagement-territoire"
        ],
        "relatedJobs": [
            "geologue",
            "hydrogeologue",
            "expert-sites-sols-pollues",
            "agronome",
            "geomaticien-cartographe-geologue"
        ],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Fiche Métier Pédologue - Département Géosciences",
                "url": "https://sfa.univ-poitiers.fr/geosciences/debouches-professionnels/pedologue/",
                "type": "metier"
            },
            {
                "organization": "Association Française pour l'Étude du Sol (AFES)",
                "title": "Les métiers de la science du sol",
                "url": "https://www.afes.fr",
                "type": "secteur"
            }
        ],
        "sourcePoitiers": true,
        "sourceBRGM": true,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Il faut entre 100 et 1 000 ans à la nature pour former seulement 1 centimètre de sol arable.",
            "pourquoi": "Le sol résulte de la très lente désagrégation de la roche mère sous l'action du climat et des micro-organismes vivants.",
            "a_retenir": "Un sol détruit par l'érosion ou la pollution est perdu pour des générations. Le pédologue est le garant de cette ressource irremplaçable."
        },
        "salaryDetail": {
            "france": {
                "entry": 26000,
                "mid": 38000,
                "expert": 52000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : Chambres d'agriculture, INRAE & Université de Poitiers"
            },
            "senegal": {
                "entry": 300000,
                "mid": 650000,
                "expert": 1400000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés en agronomie et projets de développement rural à Thiès et Dakar"
            }
        },
        "geosciencesPedagogyDetail": {
            "pathway": "De la roche au sol fertile",
            "steps": [
                "🪨 Altération de la roche mère",
                "🍂 Apport de matière organique",
                "🐛 Humification & brassage biologique",
                "🔎 Fosse pédologique & horizons",
                "🧪 Analyses physico-chimiques",
                "🌾 Cartographie agronomique",
                "🌱 Pratiques culturales durables"
            ]
        }
    },
    {
        "id": "geologue-minier",
        "slug": "geologue-minier",
        "title": "Géologue Minier / Explorateur des Ressources Minérales",
        "aliases": [
            "Ingénieur géologue minier",
            "Géologue d'exploration minière",
            "Mining Geologist",
            "Resource Geologist"
        ],
        "icon": "⛏️",
        "familyId": "sciences-terre-geosciences",
        "domain": "Géologie minière & ressources minérales",
        "domainId": "geologie-miniere-ressources",
        "subdomain": "Prospection & Évaluation des Gisements",
        "shortDescription": "Explorateur des profondeurs, le géologue minier identifie, modélise et quantifie les gisements de matières premières indispensables à l'industrie et à la transition énergétique (or, cuivre, lithium, fer, phosphates).",
        "longDescription": "Nos sociétés contemporaines ont un besoin croissant de matières premières d'origine minérale pour fabriquer technologies numériques, batteries, véhicules électriques et infrastructures. Géologue minier, vous auscultez les sous-sols pour détecter et valoriser ces trésors cachés. Votre mission suit une méthodologie rigoureuse : 1. Documentation préalable sur les contextes géologiques, réglementaires et fiscaux ; 2. Prospection sur photos aériennes, satellites et reconnaissance terrain ; 3. Identification des anomalies et échantillonnage géochimique ; 4. Campagne de forages carottés pour intercepter le minerai ; 5. Estimation géostatistique des réserves et modélisation 3D du gisement ; 6. Suivi géologique de l'exploitation et contrôle des teneurs en fosse ou sous terre.",
        "simpleDefinition": "Professionnel qui recherche dans le sous-sol les gisements de métaux et minéraux précieux (cuivre, or, lithium, fer), calcule leur rentabilité et guide leur extraction dans le respect des normes.",
        "level": "Bac +5 (Ingénieur Géologue / Master Géologie Minière)",
        "missions": [
            "Rassembler et analyser la documentation géologique, historique et réglementaire préalable à toute campagne",
            "Conduire des campagnes de prospection marteau en main, sur affleurements et tranchées de reconnaissance",
            "Diriger les campagnes de sondages carottés (Core Logging, carottothèque, orientation des carottes)",
            "Échantillonner le minerai, envoyer au laboratoire d'analyses géochimiques et interpréter les teneurs utiles",
            "Construire le modèle géologique 3D du gisement (logiciels Datamine, Micromine, Leapfrog Geo)",
            "Calculer les réserves minérales selon les normes internationales certifiées (JORC, NI 43-101)",
            "Collaborer étroitement avec les ingénieurs d'extraction, métallurgistes et équipes HSE pour minimiser l'empreinte environnementale"
        ],
        "workEnvironment": "Alternance entre missions d'exploration en zones reculées (brousse, désert, forêt, haute montagne) sous tente ou base-vie minière, et travail en bureau d'études informatique pour le traitement géostatistique.",
        "typicalDay": [
            {
                "time": "06h30",
                "activity": "Départ de la base-vie vers les plateformes de forage carotté sur le permis minier"
            },
            {
                "time": "08h00",
                "activity": "Contrôle des carottiers avec l'équipe de foreurs : mesure des taux de récupération et positionnement des caisses à carottes"
            },
            {
                "time": "10h30",
                "activity": "Séance de diagraphie (Core Logging) à la carottothèque : description lithologique, altérations hydrothermales et minéralisation"
            },
            {
                "time": "13h00",
                "activity": "Déjeuner à la cantine de la mine et échange avec l'ingénieur de planification sur les teneurs du jour"
            },
            {
                "time": "14h30",
                "activity": "Sciage des carottes de minerai en deux moitiés : une moitié archivée, une moitié envoyée pour analyse en laboratoire"
            },
            {
                "time": "16h30",
                "activity": "Saisie des logs dans la base de données minière et vérification des contrôles qualité (QA/QC)"
            },
            {
                "time": "18h30",
                "activity": "Actualisation du modèle d'enveloppe minéralisée sur logiciel 3D pour orienter le forage du lendemain"
            }
        ],
        "companyRole": "Premier maillon de la chaîne industrielle extractive, il engage la viabilité économique de projets de plusieurs centaines de millions d'euros par ses estimations de teneurs.",
        "skills": {
            "technical": [
                "Gîtologie, métallogénie et processus hydrothermaux",
                "Techniques de diagraphie de carottes (Core Logging) et géochimie minière",
                "Géostatistiques linéaires et non linéaires (krigeage, variogrammes)",
                "Modélisation géologique 3D de gisements (Micromine, Leapfrog, Surpac, Datamine)",
                "Normes internationales de déclaration de réserves (Code JORC, norme NI 43-101)",
                "Gestion environnementale des stériles miniers et résidus"
            ],
            "human": [
                "Grand sens de l'adaptation et résistance physique en conditions isolées",
                "Rigueur absolue dans l'échantillonnage et la traçabilité des données",
                "Leadership pour diriger des équipes de techniciens et de foreurs",
                "Sensibilité aux impacts sociaux et communautaires (RSE)"
            ],
            "tools": [
                "Spectromètre portable XRF (pXRF)",
                "Marteau de géologue",
                "Loupe x20",
                "Logiciels Micromine / Leapfrog / Datamine",
                "Compteur Geiger / Scintillomètre"
            ]
        },
        "geosciencesPedagogy": "Parcours clé « De la roche à la ressource minérale » : 🪨 Étude géotectonique ➔ 🔎 Télédétection & géochimie de sol ➔ 🗺️ Identification d'anomalies ➔ ⛏️ Forages carottés profonds ➔ 🧪 Analyses de laboratoire (teneurs) ➔ 📊 Modélisation géostatistique 3D ➔ 🏭 Planification minière responsable",
        "studies": {
            "pathway": [
                {
                    "level": "Bac +3",
                    "degree": "Licence Sciences de la Terre (Université de Poitiers) ou BTS Géologie appliquée"
                },
                {
                    "level": "Bac +5",
                    "degree": "Diplôme d'Ingénieur Géologue Minier (ENSG Nancy, UniLaSalle, IST UCAD Dakar)"
                },
                {
                    "level": "Bac +5",
                    "degree": "Master STPE Géosciences Appliquées ou Parcours Métaux Critiques"
                }
            ],
            "schools": [
                {
                    "name": "Université de Poitiers - Faculté des Sciences (Licence ST, Master STPE, CMI Géosciences)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Nationale Supérieure de Géologie (ENSG Nancy)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut des Sciences de la Terre (IST - UCAD Dakar - Département Mines & Géologie)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "École Polytechnique de Thiès (EPT - Département Mines)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Qualification de 'Personne Compétente' (Competent Person JORC / Qualified Person QP)",
                "Certificat d'Exploration Minière"
            ]
        },
        "career": {
            "sectors": [
                "Compagnies minières internationales (or, fer, lithium, phosphates, cuivre)",
                "Cabinets d'audit et de conseil minier",
                "Carrières de granulats et cimenteries",
                "Services géologiques d'État"
            ],
            "companies": [
                "BRGM",
                "Eramet",
                "Anglo American",
                "Rio Tinto",
                "Endeavour Mining (Sénégal)",
                "Sabodala Gold Operations",
                "Grande Côte Operations (GCO)",
                "ICS Mboro"
            ],
            "evolution": [
                "Chef de projet exploration",
                "Surintendant géologie de mine",
                "Directeur des ressources minérales",
                "Consultant international certifié QP"
            ],
            "pros": [
                "Aventure professionnelle internationale et travail au cœur de la géologie vivante",
                "Rémunérations très attractives avec primes d'expatriation",
                "Rôle central dans l'approvisionnement des métaux critiques de la transition"
            ],
            "cons": [
                "Éloignement familial prolongé (cycles fly-in fly-out 4 semaines / 2 semaines)",
                "Conditions de vie parfois rudes en camps isolés",
                "Sensibilité forte aux fluctuations des cours mondiaux des métaux"
            ]
        },
        "gettingStarted": "Effectuer des stages de terrain en carottothèque minière et maîtriser impérativement l'anglais technique et un logiciel de modélisation 3D (Leapfrog ou Micromine).",
        "aiImpact": {
            "level": "Élevé / Révolution de la prospection",
            "opportunities": [
                "Ciblage d'anomalies minérales par analyse conjointe d'imagerie hyperspectrale et géophysique via deep learning",
                "Reconnaissance automatisée des textures de carottes de forage par ordinateur",
                "Optimisation géostatistique prédictive"
            ],
            "challenges": [
                "Besoin de géologues formés aux data sciences et au traitement des grands volumes de données de sondages"
            ],
            "humanEdge": "La vérification sur le terrain et la compréhension des contrôles structuraux majeurs restent l'apanage exclusif du géologue de mine."
        },
        "africaContext": {
            "title": "Le Géologue Minier au Sénégal : Moteur Économique Majeur",
            "description": "Le Sénégal est une grande nation minière d'Afrique de l'Ouest : or de Sabodala et Mako (Kédougou), zircon et ilménite de Diogo (Grande Côte Operations - GCO), phosphates de Taïba et Matam, et calcaire cimentier (SOCOCIM, Dangote, Ciments du Sahel). Les diplômés de l'IST de Dakar y sont reconnus comme une élite de terrain.",
            "keyInstitutions": [
                "Direction des Mines et de la Géologie (DMG)",
                "Institut des Sciences de la Terre (IST - UCAD)",
                "Chambre des Mines du Sénégal",
                "Compagnies opératrices : Sabodala Gold, GCO, ICS, Petowal Mining"
            ],
            "projects": [
                "Exploration des corridors aurifères birimiens du Sénégal oriental",
                "Développement des gisements de fer de la Falémé",
                "Valorisation des terres rares et minéraux lourds des cordons dunaires"
            ],
            "opportunities": "Salaires très élevés pour les ingénieurs diplômés capables de superviser des forages et de modéliser les blocs de minerai."
        },
        "salary": "🇫🇷 France : 34 000 - 75 000 € brut/an • 🇸🇳 Sénégal : 600 000 - 2 800 000 FCFA net/mois",
        "connectedFamilies": [
            "industrie-mecanique",
            "energie-renouvelable",
            "environnement-climat",
            "commerce-marketing"
        ],
        "relatedJobs": [
            "geologue",
            "mineralogiste",
            "ingenieur-materiaux-geosciences",
            "geophysicien",
            "ingenieur-geotechnique"
        ],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Fiche Métier Géologue minier - Département Géosciences",
                "url": "https://sfa.univ-poitiers.fr/geosciences/debouches-professionnels/geologue-minier/",
                "type": "metier"
            },
            {
                "organization": "Ministère des Mines et de la Géologie du Sénégal",
                "title": "Cadre de l'exploration minière et données du secteur",
                "url": "https://minesgeologie.gouv.sn",
                "type": "institutionnel"
            }
        ],
        "sourcePoitiers": true,
        "sourceBRGM": true,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Une seule batterie de voiture électrique nécessite en moyenne 10 kg de lithium, 35 kg de nickel, 20 kg de manganèse et 14 kg de cobalt.",
            "pourquoi": "Ces métaux ne se trouvent que dans des contextes géologiques très particuliers issus de millions d'années d'enrichissement hydrothermal et magmatique.",
            "a_retenir": "Sans géologue minier pour localiser ces gisements, la transition énergétique mondiale vers le zéro carbone serait techniquement impossible."
        },
        "salaryDetail": {
            "france": {
                "entry": 34000,
                "mid": 50000,
                "expert": 75000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : APEC, compagnies minières & grilles internationales"
            },
            "senegal": {
                "entry": 600000,
                "mid": 1200000,
                "expert": 2800000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés sur les sites miniers de Kédougou, Thiès et Dakar (avec primes de camp)"
            }
        },
        "geosciencesPedagogyDetail": {
            "pathway": "De la roche à la ressource minérale",
            "steps": [
                "🪨 Étude géotectonique",
                "🔎 Télédétection & géochimie de sol",
                "🗺️ Identification d'anomalies",
                "⛏️ Forages carottés profonds",
                "🧪 Analyses de laboratoire (teneurs)",
                "📊 Modélisation géostatistique 3D",
                "🏭 Planification minière responsable"
            ]
        }
    },
    {
        "id": "ingenieur-materiaux-geosciences",
        "slug": "ingenieur-materiaux-geosciences",
        "title": "Ingénieur en Géomatériaux & Minéraux Industriels",
        "aliases": [
            "Ingénieur matériaux minéraux",
            "Spécialiste géomatériaux",
            "Ingénieur R&D minéraux",
            "Materials and Minerals Engineer"
        ],
        "icon": "🧱",
        "familyId": "sciences-terre-geosciences",
        "domain": "Géomatériaux & matériaux",
        "domainId": "geomateriaux-materiaux-innovants",
        "subdomain": "Valorisation Minérale & Nouveaux Matériaux",
        "shortDescription": "Depuis l'élaboration et la conception jusqu'à l'application industrielle, il conçoit et optimise des matériaux à base minérale : argiles de pointe, céramiques, ciments bas carbone et nanomatériaux.",
        "longDescription": "De l'âge de pierre à l'ère des nanomatériaux, les substances minérales sont au cœur de toutes les révolutions technologiques. Spécialiste de la transformation et de la valorisation de la matière minérale, l'ingénieur en géomatériaux intervient sur toute la chaîne, depuis l'extraction des matières premières géologiques jusqu'à la formulation de produits finis performants. Il conçoit des céramiques haute température, des liants hydrauliques décarbonés, des argiles fonctionnalisées pour filtrer les pollutions et des écomatériaux de construction. Au laboratoire, il étudie la microstructure, mesure la résistance mécanique et thermique, et utilise la modélisation pour simuler les comportements lors de l'utilisation industrielle.",
        "simpleDefinition": "Ingénieur qui transforme les roches, sables et argiles en matériaux modernes et écologiques pour la construction, l'industrie, l'aéronautique et la dépollution.",
        "level": "Bac +5 (Master STPE Matériaux-Minéraux / Diplôme d'Ingénieur Céramique)",
        "missions": [
            "Caractériser les propriétés physico-chimiques des minéraux industriels (argiles, zéolithes, silice, carbonates, feldspaths)",
            "Développer de nouveaux géomatériaux bas carbone (géopolymères, ciments à faible empreinte, briques de terre stabilisée)",
            "Optimiser les procédés d'élaboration thermique et mécanique (broyage fin, frittage, atomisation, extrusion)",
            "Formuler des minéraux actifs pour des applications environnementales (adsorbants pour la dépollution de sols et d'eaux)",
            "Mener des essais de résistance mécanique, de durabilité aux agressions chimiques et de tenue aux chocs thermiques",
            "Valoriser les résidus et stériles de carrières ou de mines dans une logique d'économie circulaire et de recyclage",
            "Assurer l'interface technique entre les fournisseurs de matières premières minérales et les industries utilisatrices"
        ],
        "workEnvironment": "Travail en laboratoire de caractérisation des matériaux (fours haute température, presses, diffractomètres, rhéomètres) et bureau d'études, avec des visites régulières sur sites d'usines céramiques, cimenteries et carrières.",
        "typicalDay": [
            {
                "time": "08h30",
                "activity": "Revue des résultats d'essais mécaniques sur une nouvelle formulation de béton intégrant des sous-produits d'argiles calcinées"
            },
            {
                "time": "10h00",
                "activity": "Caractérisation au laboratoire : mesure de surface spécifique (BET) et analyse par diffraction des rayons X (DRX) sur des poudres minérales"
            },
            {
                "time": "12h00",
                "activity": "Déjeuner de travail avec le chef de produit sur le cahier des charges d'un carreau céramique anti-salissure"
            },
            {
                "time": "14h00",
                "activity": "Pilotage d'un essai de frittage en four industriel à 1 200 °C et suivi des retraits dimensionnels"
            },
            {
                "time": "16h00",
                "activity": "Analyse au microscope électronique à balayage (MEB) de l'interface entre agrégats et matrice liante"
            },
            {
                "time": "17h30",
                "activity": "Rédaction du rapport de synthèse pour le dépôt d'un brevet sur un écomatériau isolant biosourcé"
            }
        ],
        "companyRole": "Innovateur technologique, il crée les matériaux de demain alliant haute performance mécanique et réduction drastique de l'impact carbone.",
        "skills": {
            "technical": [
                "Cristallochimie et minéralogie des argiles et silicates",
                "Techniques d'analyse des poudres (DRX, fluorescence X, BET, granulométrie laser)",
                "Procédés céramiques et liants hydrauliques (ciments, chaux, plâtres)",
                "Microscopie électronique et microanalyse élémentaire (MEB-EDX)",
                "Rhéologie des suspensions et comportement mécanique des solides",
                "Éco-conception et analyse de cycle de vie (ACV) des matériaux"
            ],
            "human": [
                "Curiosité scientifique et esprit d'innovation appliquée",
                "Rigueur expérimentale et méthodologie de laboratoire",
                "Aptitude au travail collaboratif avec les équipes de production",
                "Sensibilisation aiguë à l'impact environnemental des procédés"
            ],
            "tools": [
                "Diffractomètre Rayons X (DRX)",
                "Microscope électronique (MEB-EDX)",
                "Analyseur de surface BET",
                "Fours haute température Nabertherm",
                "Presses de compression",
                "AutoCAD / SolidWorks"
            ]
        },
        "geosciencesPedagogy": "Parcours clé « De la roche au matériau innovant » : 🪨 Extraction minérale sélective ➔ 🧪 Broyage & caractérisation DRX ➔ ⚗️ Formulation physico-chimique ➔ 🔥 Frittage & mise en forme ➔ 🔬 Contrôle microscopique MEB ➔ 🧱 Essais de résistance mécanique ➔ 🏗️ Application industrielle durable",
        "studies": {
            "pathway": [
                {
                    "level": "Bac +3",
                    "degree": "Licence Sciences de la Terre ou Licence Physique-Chimie (Université de Poitiers)"
                },
                {
                    "level": "Bac +5",
                    "degree": "Master EUR STPE Parcours Matériaux-Minéraux (Université de Poitiers - EUR INTREE)"
                },
                {
                    "level": "Bac +5",
                    "degree": "Diplôme d'Ingénieur en Céramique ou Matériaux (ENSCI Limoges, Polytech, Mines Nancy)"
                }
            ],
            "schools": [
                {
                    "name": "Université de Poitiers - Master EUR Matériaux-Minéraux / EUR INTREE (UFR SFA)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "ENSCI Limoges - École Nationale Supérieure de Céramique Industrielle",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Supérieure Polytechnique de Dakar (ESP - Département Génie Mécanique & Matériaux)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Institut des Sciences de la Terre (IST - UCAD)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification Contrôle Qualité Matériaux",
                "Habilitation Rayons X (radioprotection)"
            ]
        },
        "career": {
            "sectors": [
                "Industrie des matériaux de construction (cimenteries, briques, tuiles)",
                "Céramique technique et réfractaires",
                "Industrie verrière et packaging minéral",
                "Centres de R&D et laboratoires d'expertise",
                "Métallurgie et valorisation des sous-produits"
            ],
            "companies": [
                "Saint-Gobain",
                "LafargeHolcim",
                "Imerys",
                "SOCOCIM Industries (Sénégal)",
                "Dangote Cement",
                "Ciments du Sahel",
                "Vicat"
            ],
            "evolution": [
                "Responsable R&D matériaux",
                "Directeur technique de site cimentier",
                "Chef de département qualité et formulations",
                "Expert consultant international"
            ],
            "pros": [
                "Secteur en pleine réinvention grâce aux exigences de décarbonation",
                "Grandes passerelles vers la recherche de pointe",
                "Diversité des applications industrielles"
            ],
            "cons": [
                "Contraintes d'ambiance d'usine (poussière, bruit) lors des essais industriels",
                "Cycles d'homologation longs pour les nouveaux matériaux de construction",
                "Exigence d'extrême précision sur les formulations"
            ]
        },
        "gettingStarted": "Choisir le cursus Master Matériaux-Minéraux de l'Université de Poitiers (École Universitaire de Recherche INTREE) pour bénéficier de stages intensifs en laboratoire et de partenariats industriels.",
        "aiImpact": {
            "level": "Élevé / Matériaux par design prédictif",
            "opportunities": [
                "Criblage à haut débit de compositions cristallines par intelligence artificielle (Materials Informatics)",
                "Simulation atomistique assistée par réseaux de neurones pour prédire les propriétés de frittage",
                "Optimisation des recettes de mélanges minéraux"
            ],
            "challenges": [
                "Nécessité de valider expérimentalement chaque prédiction par des essais physiques réels"
            ],
            "humanEdge": "La compréhension intime des interactions de surface et la créativité dans la valorisation de résidus locaux restent une expertise humaine irremplaçable."
        },
        "africaContext": {
            "title": "L'Ingénieur Matériaux au Sénégal : L'Essor des Matériaux Locaux et du Ciment",
            "description": "Le Sénégal possède un puissant tissu de production cimentière (SOCOCIM à Rufisque, Dangote à Pout, Ciments du Sahel à Kirène) ainsi qu'un immense potentiel de matériaux locaux (argiles de Sébikotane, basaltes de Diack, terres stabilisées). L'ingénieur géomatériaux y conçoit des matériaux résistants au climat sahélien à faible impact carbone.",
            "keyInstitutions": [
                "SOCOCIM Industries (Groupe Vicat)",
                "Dangote Cement Sénégal",
                "Laboratoire du Bâtiment et des Travaux Publics (LBTP Dakar)",
                "ESP Dakar (Département Génie Civil & Matériaux)"
            ],
            "projects": [
                "Développement de ciments bas carbone incorporant des pouzzolanes et argiles locales",
                "Formulation d'enduits et briques de terre comprimée (BTC) pour l'isolation thermique",
                "Valorisation des stériles des carrières de Thiès"
            ],
            "opportunities": "Recrutement recherché dans les laboratoires de contrôle qualité des cimenteries, carrières de granulats et unités de préfabrication."
        },
        "salary": "🇫🇷 France : 32 000 - 65 000 € brut/an • 🇸🇳 Sénégal : 450 000 - 1 900 000 FCFA net/mois",
        "connectedFamilies": [
            "industrie-mecanique",
            "btp-architecture",
            "environnement-climat",
            "energie-renouvelable"
        ],
        "relatedJobs": [
            "geologue",
            "mineralogiste",
            "geologue-minier",
            "ingenieur-geotechnique",
            "expert-sites-sols-pollues"
        ],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Fiche Métier Ingénieur matériaux - Département Géosciences",
                "url": "https://sfa.univ-poitiers.fr/geosciences/debouches-professionnels/ingenieur-materiaux/",
                "type": "metier"
            },
            {
                "organization": "Université de Poitiers",
                "title": "Master EUR : parcours Matériaux-Minéraux (EUR INTREE)",
                "url": "https://sfa.univ-poitiers.fr/geosciences/formations/master-eur-parcours-materiaux-mineraux/",
                "type": "formation"
            }
        ],
        "sourcePoitiers": true,
        "sourceBRGM": true,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "La production de ciment traditionnel représente environ 7% des émissions mondiales de CO2.",
            "pourquoi": "La décarbonation du calcaire à plus de 1 450 °C libère d'importantes quantités de gaz à effet de serre.",
            "a_retenir": "Les ingénieurs en géomatériaux sont les pionniers qui conçoivent les nouveaux liants écologiques (argiles activées, géopolymères) qui transformeront l'architecture de demain."
        },
        "salaryDetail": {
            "france": {
                "entry": 32000,
                "mid": 45000,
                "expert": 65000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : Université de Poitiers Géosciences & APEC Ingénieurs"
            },
            "senegal": {
                "entry": 450000,
                "mid": 900000,
                "expert": 1900000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés en cimenteries et laboratoires de matériaux à Dakar et Thiès"
            }
        },
        "geosciencesPedagogyDetail": {
            "pathway": "De la roche au matériau innovant",
            "steps": [
                "🪨 Extraction minérale sélective",
                "🧪 Broyage & caractérisation DRX",
                "⚗️ Formulation physico-chimique",
                "🔥 Frittage & mise en forme",
                "🔬 Contrôle microscopique MEB",
                "🧱 Essais de résistance mécanique",
                "🏗️ Application industrielle durable"
            ]
        }
    },
    {
        "id": "mineralogiste",
        "slug": "mineralogiste",
        "title": "Minéralogiste / Cristallographe des Sciences de la Terre",
        "aliases": [
            "Cristallographe géologue",
            "Spécialiste minéralogie",
            "Chercheur en minéralogie",
            "Mineralogist"
        ],
        "icon": "💎",
        "familyId": "sciences-terre-geosciences",
        "domain": "Minéralogie",
        "domainId": "mineralogie-cristallographie",
        "subdomain": "Identification Minérale & Cristallographie",
        "shortDescription": "Spécialiste de l'infiniment petit au cœur des roches, le minéralogiste identifie la structure cristalline, la composition chimique et l'origine des minéraux pour la recherche, les mines et les matériaux.",
        "longDescription": "Le minéralogiste étudie les espèces minérales qui constituent les roches de notre planète, des météorites et d'autres corps célestes. En décryptant l'arrangement atomique régulier des cristaux et leurs conditions thermodynamiques de formation (pression, température), il est capable de reconstituer l'histoire thermique d'un massif montagneux, de guider la prospection de gisements stratégiques (terres rares, gemmes, minerais métalliques) ou de développer des cristaux synthétiques pour l'optique et l'électronique. Utilisant des instruments de pointe (diffractomètres RX, microscopes électroniques, spectroscopie Raman), il travaille à l'intersection de la géologie, de la physique des solides et de la chimie inorganique.",
        "simpleDefinition": "Scientifique expert des cristaux et minéraux qui étudie leur structure atomique, leur beauté et leurs propriétés utiles pour l'industrie, les technologies et la géologie.",
        "level": "Bac +5 à Bac +8 (Master STPE Matériaux-Minéraux / Doctorat)",
        "missions": [
            "Identifier avec certitude les espèces minérales d'un échantillon de roche par diffraction des rayons X (DRX) et spectroscopie Raman",
            "Déterminer la structure cristallographique tridimensionnelle et la maille élémentaire des cristaux",
            "Analyser la composition chimique ponctuelle et les zonations minérales à la microsonde électronique",
            "Reconstituer les conditions de genèse des roches (thermobarométrie) à partir des équilibres minéraux",
            "Étudier les propriétés physiques des minéraux : piézoélectricité, biréfringence optique, dureté et clivages",
            "Caractériser les minéraux d'intérêt économique : minerais critiques, pierres précieuses, argiles industrielles",
            "Expertiser des minéraux anciens ou précieux pour les musées, les douanes ou les collections patrimoniales"
        ],
        "workEnvironment": "Activité principalement en laboratoire de haute technologie doté d'équipements analytiques lourds (salles d'instruments RX, MEB, microsondes), avec de ponctuelles missions de terrain sur sites miniers ou affleurements remarquables.",
        "typicalDay": [
            {
                "time": "08h30",
                "activity": "Dépouillement des diffractogrammes de rayons X obtenus au cours de la nuit sur des échantillons d'argiles"
            },
            {
                "time": "10h00",
                "activity": "Identification des phases cristallines secondaires à l'aide de la base de données internationale ICDD"
            },
            {
                "time": "11h30",
                "activity": "Session de spectroscopie Raman pour différencier deux polymorphes de carbonate de calcium (calcite et aragonite)"
            },
            {
                "time": "14h00",
                "activity": "Préparation de lames polies et métallisation au carbone pour passage à la microsonde électronique"
            },
            {
                "time": "15h30",
                "activity": "Acquisition de profils d'éléments traces à la microsonde pour étudier la zonation chimique d'un grenat métamorphique"
            },
            {
                "time": "17h30",
                "activity": "Rédaction d'une note d'expertise pour une compagnie minière sur la nature exacte d'un minéral porteur de lithium"
            }
        ],
        "companyRole": "Analyste scientifique de référence, il fournit l'identification définitive et incontestable des espèces minérales indispensable aux géologues et industriels.",
        "skills": {
            "technical": [
                "Cristallographie géométrique et structurale (groupes d'espace, réseaux de Bravais)",
                "Diffraction des rayons X sur poudres et monocristaux",
                "Spectroscopies vibrationnelles (Infrarouge FTIR, micro-Raman)",
                "Microsonde électronique (WDS) et MEB avec spectrométrie EDS",
                "Optique cristalline et microscopie polarisante en lumière transmise et réfléchie",
                "Thermodynamique des équilibres de phases solides"
            ],
            "human": [
                "Patience extrême et minutie dans la manipulation de microminéraux",
                "Rigueur mathématique et capacités de raisonnement géométrique dans l'espace",
                "Curiosité scientifique et passion pour la beauté du monde cristallin"
            ],
            "tools": [
                "Diffractomètre DRX Bruker / Malvern Panalytical",
                "Spectromètre Raman Horiba",
                "Microsonde électronique Cameca",
                "Base de données minéralogique ICDD / Mindat"
            ]
        },
        "geosciencesPedagogy": "Parcours clé « Du cristal brut à la structure atomique » : 💎 Échantillon de cristal brut ➔ 🔬 Observation sous loupe binoculaire ➔ 🧪 Réduction en poudre micronisée ➔ ⚡ Diffraction des rayons X (DRX) ➔ 📊 Analyse du profil de diffraction ➔ ⚛️ Reconstitution de la maille atomique ➔ 📋 Identification et fiche minéralogique",
        "studies": {
            "pathway": [
                {
                    "level": "Bac +3",
                    "degree": "Licence Sciences de la Terre ou Physique-Chimie"
                },
                {
                    "level": "Bac +5",
                    "degree": "Master STPE Parcours Matériaux-Minéraux (Université de Poitiers) ou Master Minéralogie"
                },
                {
                    "level": "Bac +8",
                    "degree": "Doctorat en Minéralogie / Cristallographie / Sciences des Matériaux"
                }
            ],
            "schools": [
                {
                    "name": "Université de Poitiers - Master Matériaux-Minéraux (UFR SFA / EUR INTREE)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Sorbonne Université / Muséum National d'Histoire Naturelle (MNHN Paris)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut des Sciences de la Terre (IST - UCAD Dakar)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Département de Physique / FST (UCAD Dakar)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Habilitation Risque Radiologique (rayons X)",
                "Membre de la Société Française de Minéralogie et de Cristallographie (SFMC)"
            ]
        },
        "career": {
            "sectors": [
                "Centres de recherche fondamentale et appliquée (CNRS, BRGM, IRD)",
                "Industrie minière et métallurgique",
                "Industrie des verres, céramiques et semi-conducteurs",
                "Musées d'histoire naturelle et conservation",
                "Laboratoires d'expertise gemmologique"
            ],
            "companies": [
                "BRGM",
                "MNHN Paris",
                "Compagnies minières internationales",
                "Imerys",
                "Laboratoires de gemmologie"
            ],
            "evolution": [
                "Responsable de plateforme analytique",
                "Chercheur / Directeur de recherche",
                "Expert en cristallographie appliquée",
                "Conservateur de collections minéralogiques"
            ],
            "pros": [
                "Discipline intellectuellement fascinante mêlant géologie et physique fondamentale",
                "Utilisation d'équipements scientifiques parmi les plus avancés au monde",
                "Reconnaissance internationale"
            ],
            "cons": [
                "Marché de l'emploi très sélectif nécessitant un haut niveau académique (Bac +5 / +8)",
                "Temps important passé devant des écrans d'analyse et de traitement de données",
                "Peu d'ouvertures en postes généralistes"
            ]
        },
        "gettingStarted": "Effectuer des stages dans les plateformes de caractérisation des universités (comme celle du Département Géosciences de Poitiers) et maîtriser la résolution de structures cristallines.",
        "aiImpact": {
            "level": "Élevé / Reconnaissance spectrale automatique",
            "opportunities": [
                "Identification automatisée des mélanges minéraux complexes par apprentissage profond sur spectres DRX et Raman",
                "Génération de nouveaux cristaux aux propriétés sur-mesure par IA générative"
            ],
            "challenges": [
                "Nécessité de disposer de bases de données spectrales rigoureusement validées"
            ],
            "humanEdge": "L'analyse des défauts cristallins complexes, des macles et la compréhension de l'histoire géologique du cristal échappent aux simples algorithmes."
        },
        "africaContext": {
            "title": "Le Minéralogiste en Afrique de l'Ouest : Pierres Précieuses et Minerais Stratégiques",
            "description": "L'Afrique de l'Ouest est riche en occurrences minéralogiques exceptionnelles : or natif et sulfures de Kédougou, zircon et rutile des sables côtiers, tourmalines et gemmes de Guinée et du Mali. Le minéralogiste y est essentiel pour certifier l'origine des minéraux et optimiser les procédés d'extraction métallurgique.",
            "keyInstitutions": [
                "Institut des Sciences de la Terre (IST - UCAD Dakar)",
                "Laboratoire de Minéralogie et Cristallographie de l'IFAN Ch. Anta Diop",
                "Direction des Mines et de la Géologie (DMG)",
                "Société d'Exploitation des Mines du Sénégal"
            ],
            "projects": [
                "Caractérisation minéralogique des sables titanifères de Diogo",
                "Étude des paragenèses aurifères birimiennes pour améliorer le rendement de cyanuration",
                "Valorisation des gemmes et roches ornementales de l'Afrique de l'Ouest"
            ],
            "opportunities": "Postes de cadre au sein des laboratoires d'analyse minière (SGS, Bureau Veritas) et des institutions de recherche régionales."
        },
        "salary": "🇫🇷 France : 30 000 - 62 000 € brut/an • 🇸🇳 Sénégal : 400 000 - 1 600 000 FCFA net/mois",
        "connectedFamilies": [
            "industrie-mecanique",
            "sciences-biotech",
            "education-formation",
            "culture-medias"
        ],
        "relatedJobs": [
            "geologue",
            "geologue-minier",
            "ingenieur-materiaux-geosciences",
            "chercheur-geosciences",
            "geoarcheologue"
        ],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Master EUR STPE Parcours Matériaux-Minéraux - Débouché Minéralogiste",
                "url": "https://sfa.univ-poitiers.fr/geosciences/formations/master-eur-parcours-materiaux-mineraux/",
                "type": "formation"
            },
            {
                "organization": "Société Française de Minéralogie et de Cristallographie (SFMC)",
                "title": "Champs d'action de la minéralogie moderne",
                "url": "https://sfmc-fr.org",
                "type": "secteur"
            }
        ],
        "sourcePoitiers": true,
        "sourceBRGM": true,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Plus de 5 900 espèces minérales sont officiellement reconnues par l'Association Internationale de Minéralogie (IMA), et une centaine de nouvelles sont découvertes chaque année.",
            "pourquoi": "Chaque minéral est défini par sa composition chimique unique et son agencement atomique cristallin particulier.",
            "a_retenir": "La minéralogie est à la racine de la matière solide : sans elle, aucune compréhension des roches, ni fabrication de puces électroniques ne serait possible."
        },
        "salaryDetail": {
            "france": {
                "entry": 30000,
                "mid": 44000,
                "expert": 62000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : CNRS, universités et industrie de pointe"
            },
            "senegal": {
                "entry": 400000,
                "mid": 800000,
                "expert": 1600000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés en laboratoire de recherche et d'expertise minière à Dakar"
            }
        },
        "geosciencesPedagogyDetail": {
            "pathway": "Du cristal brut à la structure atomique",
            "steps": [
                "💎 Échantillon de cristal brut",
                "🔬 Observation sous loupe binoculaire",
                "🧪 Réduction en poudre micronisée",
                "⚡ Diffraction des rayons X (DRX)",
                "📊 Analyse du profil de diffraction",
                "⚛️ Reconstitution de la maille atomique",
                "📋 Identification et fiche minéralogique"
            ]
        }
    },
    {
        "id": "ingenieur-geotechnique",
        "slug": "ingenieur-geotechnique",
        "title": "Ingénieur Géotechnique / Géotechnicien",
        "aliases": [
            "Ingénieur géotechnicien",
            "Ingénieur sol et fondations",
            "Spécialiste de mécanique des sols",
            "Geotechnical Engineer"
        ],
        "icon": "🏗️",
        "familyId": "sciences-terre-geosciences",
        "domain": "Géotechnique",
        "domainId": "geotechnique-ouvrages",
        "subdomain": "Mécanique des Sols & Fondations",
        "shortDescription": "À la jonction de la géologie et du génie civil, il ausculte les sols pour concevoir des fondations solides, stabiliser les talus et sécuriser les ouvrages d'art (ponts, barrages, gratte-ciel, tunnels).",
        "longDescription": "Avant de poser la moindre pierre d'un gratte-ciel, de creuser un tunnel ou d'édifier un barrage, une question cruciale s'impose : le terrain tiendra-t-il la charge ? L'ingénieur géotechnique apporte cette réponse décisive. Formé aux géosciences et à la mécanique des sols et des roches, il pilote les campagnes de sondages carottés, d'essais pressiométriques et pénétrométriques. Au laboratoire, il mesure la cohésion, l'angle de frottement et la compressibilité des terres à l'oedomètre et à l'appareil triaxial. Il dimensionne ensuite les fondations superficielles ou profondes (pieux), calcule la stabilité des pentes face aux glissements et préconise les techniques de renforcement des sols.",
        "simpleDefinition": "Ingénieur expert du sol qui vérifie la solidité des terrains avant la construction d'immeubles, de ponts, de routes ou de tunnels pour éviter tout affaissement ou effondrement.",
        "level": "Bac +5 (Master Géotechnique / Diplôme d'Ingénieur Génie Civil - Géotechnique)",
        "missions": [
            "Concevoir et superviser les campagnes d'investigations géotechniques in situ (sondages carottés, essais pressiométriques Ménard, CPTU)",
            "Piloter les essais de mécanique des sols et des roches en laboratoire (oedomètre, boîte de Casagrande, essai triaxial)",
            "Modéliser le comportement mécanique et les déformations des massifs rocheux et sols meubles sous charge",
            "Dimensionner les fondations superficielles (semelles, radiers) et fondations profondes (pieux, micropieux, parois moulées)",
            "Calculer la stabilité des talus, remblais et soutènements face aux risques de glissements de terrain et séismes",
            "Rédiger les missions géotechniques normalisées NF P 94-500 (G1 à G5) encadrant la responsabilité des chantiers",
            "Assurer le suivi géotechnique pendant les travaux : auscultation des tassements, vibrométrie et contrôles d'ancrages"
        ],
        "workEnvironment": "Présence active sur les chantiers de construction, plateformes d'essais géotechniques et engins de sondage, associée à un important travail de calcul et de modélisation numérique en bureau d'études.",
        "typicalDay": [
            {
                "time": "08h00",
                "activity": "Visite d'un chantier d'ouvrage d'art : contrôle du forage de pieux forés de 25 m de profondeur"
            },
            {
                "time": "10h00",
                "activity": "Vérification des essais pressiométriques in situ : lecture de la pression limite et du module d'élasticité Ménard"
            },
            {
                "time": "12h30",
                "activity": "Déjeuner de chantier avec le conducteur de travaux et l'ingénieur structure"
            },
            {
                "time": "14h00",
                "activity": "Passage au laboratoire de mécanique des sols : validation des courbes de consolidation oedométrique sur des argiles"
            },
            {
                "time": "15h30",
                "activity": "Modélisation par éléments finis sur logiciel Plaxis 2D pour vérifier la stabilité d'une paroi clouée"
            },
            {
                "time": "17h30",
                "activity": "Rédaction du rapport de mission géotechnique G2 PRO préconisant le type de fondation de la future tour"
            }
        ],
        "companyRole": "Garant absolu de la sécurité structurelle, il engage sa signature professionnelle sur la stabilité pérenne des constructions.",
        "skills": {
            "technical": [
                "Mécanique des sols et des roches (critères de rupture de Mohr-Coulomb, Hoek-Brown)",
                "Normes géotechniques françaises et européennes (Eurocode 7, norme NF P 94-500)",
                "Essais in situ (pressiomètre, pénétromètre statique et dynamique, scissomètre)",
                "Essais en laboratoire (essais triaxiaux, oedomètre, cisaillement direct)",
                "Modélisation numérique par éléments finis (Plaxis, GeoStudio, Talren, Foxta)",
                "Pathologie des fondations et techniques d'amélioration des sols (colonnes ballastées, jet grouting)"
            ],
            "human": [
                "Sens aigu des responsabilités et de la gestion des risques majeurs",
                "Rigueur mathématique et capacités de calcul analytique",
                "Aisance relationnelle pour échanger sur le terrain avec les ouvriers et en réunion avec les architectes",
                "Réactivité face aux imprévus de chantier géologique"
            ],
            "tools": [
                "Pressiomètre Ménard",
                "Pénétromètre CPT",
                "Logiciels Plaxis 2D/3D",
                "Talren",
                "Foxta",
                "GeoStudio",
                "K-Réa"
            ]
        },
        "geosciencesPedagogy": "Parcours clé « De l'auscultation du terrain à la fondation » : 🗺️ Reconnaissance géologique initiale ➔ 🚜 Sondages & essais in situ (pressiomètre) ➔ 🧪 Essais en laboratoire (oedomètre, triaxial) ➔ 💻 Modélisation géotechnique numérique ➔ 📐 Dimensionnement des pieux & fondations ➔ 🏗️ Suivi de terrassement & validation G2",
        "studies": {
            "pathway": [
                {
                    "level": "Bac +3",
                    "degree": "Licence Sciences de la Terre ou BUT Génie Civil"
                },
                {
                    "level": "Bac +5",
                    "degree": "Master STPE Géosciences Appliquées (Université de Poitiers) ou Master Mécanique des Sols"
                },
                {
                    "level": "Bac +5",
                    "degree": "Diplôme d'Ingénieur Géotechnique (ENSG Nancy, Polytech, INSA, ESTP, EPT Thiès)"
                }
            ],
            "schools": [
                {
                    "name": "Université de Poitiers - Master STPE (Débouché Ingénieur Géotechnique cité par l'UFR SFA)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "ENSG Nancy - École Nationale Supérieure de Géologie",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Polytechnique de Thiès (EPT - Département Génie Civil & Géotechnique)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Institut des Sciences de la Terre (IST - UCAD Dakar)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Agrément d'ingénieur géotechnicien certifié",
                "Attestation de compétences Eurocode 7"
            ]
        },
        "career": {
            "sectors": [
                "Bureaux d'études géotechniques spécialisés",
                "Entreprises générales de travaux publics et fondations spéciales",
                "Bureaux de contrôle technique de la construction",
                "Sociétés d'ingénierie d'infrastructures et transports",
                "Gestionnaires d'infrastructures autoroutières et ferroviaires"
            ],
            "companies": [
                "Fugro",
                "Ginger CEBTP",
                "Antea Group",
                "Soletanche Bachy",
                "Menard",
                "Eiffage Génie Civil",
                "SNCF Réseau",
                "LBTP (Sénégal)"
            ],
            "evolution": [
                "Chef de groupe géotechnique",
                "Directeur d'agence géotechnique",
                "Expert national auprès des tribunaux et assurances",
                "Directeur de l'ingénierie de grands projets"
            ],
            "pros": [
                "Métier très demandé avec quasi plein-emploi des jeunes diplômés",
                "Impact très concret sur les paysages urbains et les grands ouvrages",
                "Parfait équilibre entre calculs théoriques et réalités de terrain"
            ],
            "cons": [
                "Lourde responsabilité juridique et décennale en cas de fissures ou tassements différentiels",
                "Gestion des aléas de sol sous forte pression de calendrier de chantier",
                "Environnement de chantier parfois salissant et exposé aux intempéries"
            ]
        },
        "gettingStarted": "Effectuer des stages dans des bureaux d'études de mécanique des sols (Ginger CEBTP, Fugro) et maîtriser les logiciels de calcul de stabilité de pentes et de soutènements.",
        "aiImpact": {
            "level": "Modéré / Optimisation des modèles de sols",
            "opportunities": [
                "Interpolation probabiliste 3D des couches de sol à partir de données éparses de sondages",
                "Prédiction des risques d'instabilité de talus par réseaux de neurones en temps réel",
                "Automatisation de la lecture des logs pénétrométriques"
            ],
            "challenges": [
                "L'hétérogénéité naturelle du sol impose toujours un regard critique d'expert"
            ],
            "humanEdge": "La responsabilité légale de valider une fondation et de signer une mission G2 ne peut pas être déléguée à une machine."
        },
        "africaContext": {
            "title": "L'Ingénieur Géotechnique au Sénégal : Bâtir sur des Sols Complexes",
            "description": "À Dakar et dans les grandes agglomérations sénégalaises, l'explosion immobilière et les grands chantiers d'infrastructures (TER de Dakar, BRT, Pont de Foundiougne, Port multifonction de Ndayane) requièrent une expertise géotechnique pointue face aux sols compressibles, aux sables littoraux liquéfiables et aux argiles gonflantes de la presqu'île.",
            "keyInstitutions": [
                "Laboratoire du Bâtiment et des Travaux Publics (LBTP Dakar)",
                "École Polytechnique de Thiès (EPT)",
                "AGEROUTE (Agence des Travaux et de Gestion des Routes)",
                "Institut des Sciences de la Terre (IST - UCAD)"
            ],
            "projects": [
                "Fondations spéciales et soutènements du Port en eaux profondes de Ndayane",
                "Études de sol des tronçons autoroutiers Mbour-Fatick-Kaolack",
                "Sécurisation des falaises de la Corniche ouest de Dakar contre les éboulements"
            ],
            "opportunities": "Très forte attractivité sur le marché de l'emploi dakarois, avec des salaires élevés pour les ingénieurs diplômés de l'EPT et de l'IST."
        },
        "salary": "🇫🇷 France : 33 000 - 70 000 € brut/an • 🇸🇳 Sénégal : 500 000 - 2 200 000 FCFA net/mois",
        "connectedFamilies": [
            "btp-architecture",
            "industrie-mecanique",
            "environnement-climat",
            "transport-logistique"
        ],
        "relatedJobs": [
            "geologue",
            "hydrogeologue",
            "pedologue",
            "ingenieur-materiaux-geosciences",
            "ingenieur-risques-naturels"
        ],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Master STPE Géosciences - Débouché Ingénieur Géotechnique",
                "url": "https://sfa.univ-poitiers.fr/geosciences/formations/master-eur-parcours-materiaux-mineraux/",
                "type": "formation"
            },
            {
                "organization": "Union Syndicale Géotechnique (USG)",
                "title": "Le rôle et les missions de l'ingénieur géotechnicien",
                "url": "https://www.usg.asso.fr",
                "type": "secteur"
            }
        ],
        "sourcePoitiers": true,
        "sourceBRGM": true,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "La tour de Pise penche depuis plus de 800 ans uniquement à cause d'une couche d'argile molle et compressible non détectée lors de ses fondations au XIIe siècle.",
            "pourquoi": "Le sol sous la tour présentait une résistance inégale qui a provoqué un tassement différentiel sous le poids colossal de l'édifice.",
            "a_retenir": "C'est précisément pour éviter de tels désordres que l'ingénieur géotechnique calcule la portance exacte du sous-sol avant toute construction."
        },
        "salaryDetail": {
            "france": {
                "entry": 33000,
                "mid": 48000,
                "expert": 70000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : Syntec Ingénierie, APEC & Université de Poitiers"
            },
            "senegal": {
                "entry": 500000,
                "mid": 1000000,
                "expert": 2200000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés en bureau d'études géotechniques et grands chantiers BTP à Dakar"
            }
        },
        "geosciencesPedagogyDetail": {
            "pathway": "De l'auscultation du terrain à la fondation",
            "steps": [
                "🗺️ Reconnaissance géologique initiale",
                "🚜 Sondages & essais in situ (pressiomètre)",
                "🧪 Essais en laboratoire (oedomètre, triaxial)",
                "💻 Modélisation géotechnique numérique",
                "📐 Dimensionnement des pieux & fondations",
                "🏗️ Suivi de terrassement & validation G2"
            ]
        }
    },
    {
        "id": "geophysicien",
        "slug": "geophysicien",
        "title": "Géophysicien / Ingénieur en Imagerie du Sous-Sol",
        "aliases": [
            "Ingénieur géophysicien",
            "Spécialiste de géophysique appliquée",
            "Ausculteur du sous-sol",
            "Geophysicist"
        ],
        "icon": "🌋",
        "familyId": "sciences-terre-geosciences",
        "domain": "Géophysique",
        "domainId": "geophysique-sous-sol",
        "subdomain": "Méthodes Sismiques, Gravimétriques & Électriques",
        "shortDescription": "Véritable radiologue de la Terre, le géophysicien ausculte les entrailles du sol sans forer grâce aux ondes acoustiques, champs magnétiques, électriques et gravitationnels pour cartographier les profondeurs.",
        "longDescription": "Comment voir à travers des kilomètres de roche sans creuser ? Le géophysicien est le spécialiste de cette imagerie non invasive de la Terre. S'appuyant sur les lois de la physique et les mathématiques appliquées, il utilise la propagation des ondes sismiques, les variations du champ gravitationnel (gravimétrie), du magnétisme terrestre et de la résistivité électrique pour dresser une radiographie précise du sous-sol. Ses compétences s'étendent de la détection de cavités souterraines et nappes aquifères à faible profondeur jusqu'à la modélisation des réservoirs pétroliers et géothermiques profonds et l'auscultation des chambres magmatiques sous les volcans.",
        "simpleDefinition": "Scientifique qui utilise des ondes, des aimants et des courants électriques pour faire une 'radiographie' du sous-sol et découvrir ce qui s'y cache sans avoir besoin de creuser.",
        "level": "Bac +5 (Master Géophysique / Diplôme d'Ingénieur Géophysicien)",
        "missions": [
            "Concevoir et planifier des campagnes d'acquisition géophysique terrestre, aéroportée ou marine",
            "Déployer et régler des capteurs ultrasensibles : géophones, sismographes, gravimètres, magnétomètres, électrodes",
            "Mettre en œuvre des méthodes sismiques réfraction et réflexion (vibroseis, explosifs, marteau de battage)",
            "Réaliser des tomographies de résistivité électrique (ERT) pour détecter nappes d'eau et cavités karstiques",
            "Traiter et filtrer les signaux géophysiques bruts (débruitage, inversion, migration sismique)",
            "Intégrer les données sismiques et gravimétriques dans des modèles géologiques 3D cohérents",
            "Intervenir sur des projets de génie civil, d'archéologie, d'hydrogéologie et d'exploration d'énergies décarbonées"
        ],
        "workEnvironment": "Déplacements fréquents sur le terrain pour la pose de lignes de capteurs et l'acquisition des mesures (milieux variés : désert, forêt, mer, chantiers urbains), suivis d'un travail intensif de traitement numérique des signaux sur stations de calcul.",
        "typicalDay": [
            {
                "time": "07h30",
                "activity": "Déploiement d'une ligne sismique de 48 géophones le long d'un tracé d'infrastructure ferroviaire"
            },
            {
                "time": "09h00",
                "activity": "Calibrage du sismographe de terrain et vérification des impédances de chaque capteur"
            },
            {
                "time": "10h30",
                "activity": "Campagne de tirs sismiques au marteau automatique et enregistrement des temps de parcours d'ondes P et S"
            },
            {
                "time": "13h00",
                "activity": "Déjeuner de terrain et vérification de la qualité des signaux bruts enregistrés"
            },
            {
                "time": "14h30",
                "activity": "Profil électrique de contrôle : mesure de résistivité multi-électrodes pour vérifier la présence d'une poche d'eau"
            },
            {
                "time": "16h30",
                "activity": "Retour au laboratoire : lancement de l'algorithme d'inversion tomographique sur station de travail"
            },
            {
                "time": "18h00",
                "activity": "Génération de la coupe géophysique 2D mettant en évidence le toit du substratum rocheux et les failles"
            }
        ],
        "companyRole": "Expert en auscultation non destructive, il réduit drastiquement les coûts et risques des forages en indiquant avec précision les cibles sous la surface.",
        "skills": {
            "technical": [
                "Traitement du signal numérique (transformée de Fourier, ondelettes, filtrage, déconvolution)",
                "Sismique réflexion et réfraction (ondes de volume P/S, ondes de surface MASW)",
                "Méthodes potentielles : gravimétrie et magnétométrie",
                "Méthodes électriques et électromagnétiques (ERT, radar géologique GPR, TDEM)",
                "Inversion géophysique et modélisation directe",
                "Programmation scientifique (Python, MATLAB, Fortran)"
            ],
            "human": [
                "Excellente rigueur physico-mathématique et esprit d'analyse",
                "Sens de l'organisation logistique lors des campagnes de mesure",
                "Goût pour la technologie d'instrumentation de pointe",
                "Patience pour débruiter et interpréter des signaux complexes"
            ],
            "tools": [
                "Sismographe Geometrics",
                "Gravimètre Scintrex CG-5",
                "Radar géologique GPR GSSI",
                "Résistivimètre Syscal Pro",
                "Logiciels SeisImager / Res2DInv / Petrel"
            ]
        },
        "geosciencesPedagogy": "Parcours clé « De l'onde physique à la coupe de sous-sol » : 📡 Émission d'onde ou courant ➔ ⚡ Propagation à travers les strates ➔ 🎧 Enregistrement par géophones ➔ 💻 Traitement du signal & filtrage ➔ 🔄 Inversion mathématique ➔ 📊 Tomographie 2D/3D ➔ 🪨 Interprétation géologique finale",
        "studies": {
            "pathway": [
                {
                    "level": "Bac +3",
                    "degree": "Licence Physique ou Licence Sciences de la Terre (Université de Poitiers)"
                },
                {
                    "level": "Bac +5",
                    "degree": "Master Géophysique / Master STPE (Université de Poitiers, IPGP Paris, Strasbourg)"
                },
                {
                    "level": "Bac +5",
                    "degree": "Diplôme d'Ingénieur Géophysicien (EOST Strasbourg, ENSG Nancy)"
                },
                {
                    "level": "Bac +8",
                    "degree": "Doctorat en Géophysique interne ou appliquée"
                }
            ],
            "schools": [
                {
                    "name": "Université de Poitiers - Faculté des Sciences (Licence ST, Master STPE)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École et Observatoire des Sciences de la Terre (EOST - Université de Strasbourg)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut de Physique du Globe de Paris (IPGP)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut des Sciences de la Terre (IST - UCAD Dakar - Géophysique)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification en auscultation non destructive",
                "Habilitation sécurité sismique"
            ]
        },
        "career": {
            "sectors": [
                "Bureaux d'études géotechniques et géophysiques",
                "Compagnies d'énergies (géothermie, éolien offshore, hydrocarbures)",
                "Services géologiques nationaux (BRGM)",
                "Compagnies minières",
                "Instituts de recherche et observatoires volcanologiques"
            ],
            "companies": [
                "CGG",
                "Fugro",
                "BRGM",
                "TotalEnergies",
                "SLB (Schlumberger)",
                "PETROSEN (Sénégal)"
            ],
            "evolution": [
                "Chef de mission géophysique",
                "Superviseur de traitement sismique",
                "Directeur technique imagerie du sous-sol",
                "Chercheur en géophysique globale"
            ],
            "pros": [
                "Métier à la pointe de la haute technologie scientifique",
                "Capacité à percer les mystères profonds de la Terre sans forer",
                "Opportunités de carrière internationales prestigieuses"
            ],
            "cons": [
                "Complexité mathématique et physique exigeante",
                "Déplacements fréquents sur le terrain pour les acquisitions",
                "Interprétation parfois ambigüe nécessitant des calages de forages"
            ]
        },
        "gettingStarted": "Cultiver une double compétence en physique du signal et en géologie structurale, et maîtriser le langage Python pour le traitement des données géophysiques.",
        "aiImpact": {
            "level": "Très élevé / Révolution de l'inversion",
            "opportunities": [
                "Picking automatique des arrivées d'ondes sismiques par deep learning",
                "Inversion de forme d'onde complète (FWI) accélérée par GPU",
                "Détection automatique de failles et d'horizons dans les cubes sismiques 3D"
            ],
            "challenges": [
                "Nécessité de comprendre la physique sous-jacente pour ne pas interpréter des artefacts de calcul"
            ],
            "humanEdge": "La confrontation du modèle géophysique avec la cohérence géologique et tectonique régionale requiert l'expertise du géoscientifique."
        },
        "africaContext": {
            "title": "Le Géophysicien au Sénégal : Exploration Côtière et Sous-Sol",
            "description": "Au Sénégal, la géophysique est stratégique pour l'exploration pétrolière et gazière offshore (champs de Sangomar et Grand Tortue Ahmeyim - GTA), la recherche d'eau dans les aquifères profonds et la cartographie géotechnique des grands projets côtiers. PETROSEN et les bureaux d'études de Dakar emploient des géophysiciens hautement qualifiés.",
            "keyInstitutions": [
                "PETROSEN (Société Nationale des Pétroles du Sénégal)",
                "Institut des Sciences de la Terre (IST - UCAD)",
                "Direction des Mines et de la Géologie (DMG)",
                "DGPRE (Direction des Ressources en Eau)"
            ],
            "projects": [
                "Traitement des campagnes sismiques 3D offshore dans le bassin sénégalo-mauritanien",
                "Prospection géophysique électrique pour l'implantation de forages d'eau ruraux",
                "Campagnes gravimétriques régionales pour la délimitation du socle minier"
            ],
            "opportunities": "Opportunités de carrières de haut niveau dans les consortiums énergétiques, les cabinets de conseil et les centres de recherche de Dakar."
        },
        "salary": "🇫🇷 France : 34 000 - 75 000 € brut/an • 🇸🇳 Sénégal : 550 000 - 2 400 000 FCFA net/mois",
        "connectedFamilies": [
            "energie-renouvelable",
            "industrie-mecanique",
            "data-decision",
            "environnement-climat"
        ],
        "relatedJobs": [
            "geologue",
            "sismologue",
            "hydrogeologue",
            "geologue-minier",
            "ingenieur-geotechnique"
        ],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Fiche Géologue (mention géophysique, ondes et champs magnétiques)",
                "url": "https://sfa.univ-poitiers.fr/geosciences/debouches-professionnels/geologue/",
                "type": "metier"
            },
            {
                "organization": "EOST Strasbourg",
                "title": "Les métiers de la géophysique appliquée",
                "url": "https://eost.unistra.fr",
                "type": "secteur"
            }
        ],
        "sourcePoitiers": true,
        "sourceBRGM": true,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "C'est grâce aux géophysiciens et à l'étude de la réfraction des ondes sismiques que l'on a découvert en 1936 que le centre de la Terre possède un noyau interne solide (la graine) de fer et de nickel.",
            "pourquoi": "Inge Lehmann a démontré que certaines ondes P rebondissaient sur une discontinuité solide à 5 150 km de profondeur.",
            "a_retenir": "Le géophysicien est capable d'explorer des profondeurs planétaires où aucun être humain ni aucune sonde matérielle ne pourra jamais pénétrer."
        },
        "salaryDetail": {
            "france": {
                "entry": 34000,
                "mid": 50000,
                "expert": 75000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : APEC Géosciences & compagnies d'ingénierie"
            },
            "senegal": {
                "entry": 550000,
                "mid": 1100000,
                "expert": 2400000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés dans l'exploration pétro-gazière et géophysique à Dakar"
            }
        },
        "geosciencesPedagogyDetail": {
            "pathway": "De l'onde physique à la coupe de sous-sol",
            "steps": [
                "📡 Émission d'onde ou courant",
                "⚡ Propagation à travers les strates",
                "🎧 Enregistrement par géophones",
                "💻 Traitement du signal & filtrage",
                "🔄 Inversion mathématique",
                "📊 Tomographie 2D/3D",
                "🪨 Interprétation géologique finale"
            ]
        }
    },
    {
        "id": "sismologue",
        "slug": "sismologue",
        "title": "Sismologue / Spécialiste des Séismes & Risques Tectoniques",
        "aliases": [
            "Chercheur en sismologie",
            "Ingénieur sismologue",
            "Expert en aléas sismiques",
            "Seismologist"
        ],
        "icon": "📈",
        "familyId": "sciences-terre-geosciences",
        "domain": "Risques naturels",
        "domainId": "risques-naturels-georisques",
        "subdomain": "Surveillance Sismique & Aléas Tectoniques",
        "shortDescription": "Sentinelle de l'activité tectonique de la Terre, le sismologue surveille les failles actives, analyse la propagation des tremblements de terre et modélise les aléas sismiques pour protéger les populations et les infrastructures.",
        "longDescription": "Lorsque les failles tectoniques accumulent des contraintes colossales, la Terre tremble. Le sismologue est le scientifique qui ausculte ces mouvements brusques de la lithosphère. À l'aide de réseaux de stations sismologiques télémétrées, il détecte les signaux d'ondes en temps réel, localise instantanément l'épicentre et la profondeur du foyer sismique, et calcule la magnitude de l'événement. Au-delà de l'alerte immédiate (et de l'alerte aux tsunamis), son travail fondamental consiste à cartographier les zones de failles actives, à évaluer l'aléa sismique régional pour le code de construction parasismique (Eurocode 8) et à modéliser la dynamique des plaques.",
        "simpleDefinition": "Scientifique qui surveille et étudie les tremblements de terre grâce à des sismographes, évalue les risques pour les villes et aide à construire des bâtiments capables de résister aux secousses.",
        "level": "Bac +5 à Bac +8 (Master Géophysique-Sismologie / Doctorat)",
        "missions": [
            "Surveiller en temps réel les réseaux sismologiques nationaux et internationaux (stations large-bande)",
            "Localiser les épicentres, profondeurs focales et mécanismes au foyer (failles normales, inverses, décrochantes)",
            "Calculer la magnitude des séismes (magnitude de moment Mw) et diffuser les bulletins d'alerte aux autorités de protection civile",
            "Étudier la propagation des ondes sismiques (ondes P, S, Rayleigh, Love) et les effets de site géologiques (amplification par sols mous)",
            "Élaborer les cartes de zonage d'aléa sismique servant de base aux réglementations de construction parasismique",
            "Concevoir et maintenir les réseaux de sismographes et accéléromètres de terrain",
            "Mener des recherches fondamentales sur la physique de la rupture sismique et la prévision statistique des répliques"
        ],
        "workEnvironment": "Travail en observatoire sismologique ou centre d'alerte opérationnel 24h/24, laboratoires de recherche universitaire, avec des missions de terrain pour installer des stations de surveillance sur des volcans ou failles actives.",
        "typicalDay": [
            {
                "time": "08h30",
                "activity": "Vérification de l'état du réseau de surveillance télémétrique et analyse des événements microsismiques de la nuit"
            },
            {
                "time": "09h30",
                "activity": "Déclenchement d'une alerte automatique suite à un séisme de magnitude 4,2 : pointage manuel précis des temps d'arrivée des ondes"
            },
            {
                "time": "10h15",
                "activity": "Affinement de la localisation de l'hypocentre et détermination du mécanisme au foyer par inversion des formes d'ondes"
            },
            {
                "time": "11h30",
                "activity": "Transmission du rapport officiel de situation au centre opérationnel de gestion des crises (COGC)"
            },
            {
                "time": "14h00",
                "activity": "Séance de recherche : modélisation numérique de la réponse sismique d'un bassin sédimentaire face à une onde de cisaillement"
            },
            {
                "time": "16h30",
                "activity": "Préparation du matériel pour une mission d'installation de 5 nouveaux accéléromètres sur une faille active"
            },
            {
                "time": "18h00",
                "activity": "Rédaction d'un article scientifique sur les contraintes tectoniques régionales"
            }
        ],
        "companyRole": "Sentinelle scientifique indispensable, le sismologue alerte les pouvoirs publics et fixe les normes qui évitent l'effondrement des bâtiments lors des séismes.",
        "skills": {
            "technical": [
                "Physique des ondes et élasticité des milieux solides",
                "Instrumentation sismologique (capteurs large-bande, accéléromètres, numériseurs 24 bits)",
                "Inversion du tenseur des moments sismiques et localisation hypocentrale",
                "Modélisation de l'aléa sismique probabiliste et déterministe (PSHA/DSHA)",
                "Normes de construction parasismique (Eurocode 8)",
                "Programmation et traitement de séries temporelles (Python ObsPy, SAC, GMT)"
            ],
            "human": [
                "Sang-froid et rigueur extrême en situation d'alerte et de crise",
                "Précision d'analyse mathématique et de traitement du signal",
                "Pédagogie pour rassurer et informer les médias et le grand public",
                "Sens du service public et de la protection des vies humaines"
            ],
            "tools": [
                "Python (librairie ObsPy)",
                "SeisComP (logiciel d'acquisition temps réel)",
                "Stations sismologiques Güralp / Nanometrics",
                "GMT (Generic Mapping Tools)",
                "SAC (Seismic Analysis Code)"
            ]
        },
        "geosciencesPedagogy": "Parcours clé « De la rupture de faille à l'alerte » : ⚡ Rupture mécanique de faille ➔ 〰️ Propagation des ondes P et S ➔ 📡 Détection par sismographes ➔ ⏱️ Pointage des temps d'arrivée ➔ 📍 Calcul de l'épicentre et magnitude ➔ ⚠️ Diffusion de l'alerte publique ➔ 🏛️ Application des normes parasismiques",
        "studies": {
            "pathway": [
                {
                    "level": "Bac +3",
                    "degree": "Licence Sciences de la Terre ou Physique (Université de Poitiers)"
                },
                {
                    "level": "Bac +5",
                    "degree": "Master Sciences de la Terre / Géophysique / Sismologie (IPGP, EOST Strasbourg)"
                },
                {
                    "level": "Bac +8",
                    "degree": "Doctorat en Sismologie / Physique de la Terre"
                }
            ],
            "schools": [
                {
                    "name": "Université de Poitiers - Département Géosciences (Licence ST, Master STPE)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "EOST Strasbourg - Réseau National de Surveillance Sismique (Renass)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut de Physique du Globe de Paris (IPGP - Observatoires Volcanologiques et Sismologiques)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut des Sciences de la Terre (IST - UCAD Dakar)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification d'analyste sismologique",
                "Habilitation d'expert parasismique"
            ]
        },
        "career": {
            "sectors": [
                "Observatoires sismologiques et volcanologiques nationaux",
                "Organismes de recherche scientifique (CNRS, BRGM, CEA/DASE)",
                "Bureaux d'études en ingénierie parasismique et sûreté nucléaire",
                "Organisations internationales de surveillance (OTICE / CTBTO)",
                "Compagnies d'assurance et réassurance des catastrophes naturelles"
            ],
            "companies": [
                "CEA / DASE (Département Analyse Surveillance Environnement)",
                "BRGM",
                "IRSN (Institut de Radioprotection et de Sûreté Nucléaire)",
                "Swiss Re / Munich Re",
                "Observatoires sismologiques d'Afrique et d'Europe"
            ],
            "evolution": [
                "Responsable de réseau sismologique",
                "Chef de département surveillance des aléas",
                "Directeur de recherche en sismologie",
                "Conseiller expert auprès de l'ONU / UNESCO"
            ],
            "pros": [
                "Métier à très forte utilité pour la sécurité publique et la sauvegarde des vies",
                "Implication dans des réseaux de recherche internationaux interconnectés",
                "Richesse des défis scientifiques"
            ],
            "cons": [
                "Astreintes opérationnelles de nuit et de week-end pour la gestion d'alertes",
                "Stress important lors des crises sismiques majeures",
                "Nombre de postes académiques annuels restreint"
            ]
        },
        "gettingStarted": "Maîtriser impérativement la bibliothèque Python ObsPy pour le traitement de traces sismiques réelles et réaliser des stages dans un observatoire sismologique.",
        "aiImpact": {
            "level": "Très élevé / Détection en temps réel",
            "opportunities": [
                "Détection et classification instantanée des microséismes par réseaux convolutionnels",
                "Amélioration des systèmes d'alerte précoce (Earthquake Early Warning) gagnant de précieuses secondes avant les secousses destructrices"
            ],
            "challenges": [
                "Éviter les faux positifs lors d'événements inhabituels"
            ],
            "humanEdge": "La confirmation des magnitudes et la coordination avec les cellules de crise gouvernementales reposent sur le jugement de l'expert sismologue."
        },
        "africaContext": {
            "title": "La Surveillance Sismique en Afrique : Du Rift Est-Africain aux Séismes Intraplaques",
            "description": "Si l'Afrique de l'Ouest est globalement une zone intraplaque d'aléa modéré, des séismes significatifs peuvent s'y produire (séisme de Koumbia en Guinée, magnitude 6,2 en 1983). Les sismologues africains surveillent l'activité des grandes fractures continentales et collaborent à l'échelle du continent, notamment sur le rift est-africain et la surveillance des barrages hydroélectriques.",
            "keyInstitutions": [
                "Institut des Sciences de la Terre (IST - UCAD Dakar)",
                "Centre de Recherches Géologiques et Minières",
                "Départements de Physique et Géologie de l'UCAD",
                "Réseau Sismologique Ouest-Africain"
            ],
            "projects": [
                "Surveillance de la sismicité induite autour des grands barrages (Manantali, Diama)",
                "Auscultation microsismique des exploitations minières souterraines",
                "Sensibilisation aux normes de construction résistantes aux vibrations"
            ],
            "opportunities": "Postes de recherche académique, expertise auprès des grands projets de barrages et gestion des réseaux sismographiques régionaux."
        },
        "salary": "🇫🇷 France : 32 000 - 68 000 € brut/an • 🇸🇳 Sénégal : 400 000 - 1 800 000 FCFA net/mois",
        "connectedFamilies": [
            "environnement-climat",
            "btp-architecture",
            "data-decision",
            "sciences-biotech"
        ],
        "relatedJobs": [
            "geophysicien",
            "geologue",
            "ingenieur-risques-naturels",
            "ingenieur-geotechnique",
            "chercheur-geosciences"
        ],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Fiche Géologue (étude de la propagation des ondes et prévention des séismes)",
                "url": "https://sfa.univ-poitiers.fr/geosciences/debouches-professionnels/geologue/",
                "type": "metier"
            },
            {
                "organization": "Réseau National de Surveillance Sismique (BCSF-Rénass)",
                "title": "Surveillance et recherche sur les séismes en France",
                "url": "https://renass.unistra.fr",
                "type": "secteur"
            }
        ],
        "sourcePoitiers": true,
        "sourceBRGM": true,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Chaque année, plus de 500 000 tremblements de terre se produisent sur Terre, dont environ 100 000 sont ressentis par les humains et une centaine causent des dégâts.",
            "pourquoi": "La lithosphère est découpée en une quinzaine de plaques tectoniques majeures qui se déplacent continuellement à une vitesse de 1 à 10 cm par an.",
            "a_retenir": "Le sismologue écoute le pouls mécanique de notre planète pour concevoir des habitats capables de protéger les vies humaines."
        },
        "salaryDetail": {
            "france": {
                "entry": 32000,
                "mid": 46000,
                "expert": 68000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : Grilles CNRS, CEA, universités & bureaux d'études parasismiques"
            },
            "senegal": {
                "entry": 400000,
                "mid": 850000,
                "expert": 1800000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés en institut de recherche et expertise de grands ouvrages à Dakar"
            }
        },
        "geosciencesPedagogyDetail": {
            "pathway": "De la rupture de faille à l'alerte",
            "steps": [
                "⚡ Rupture mécanique de faille",
                "〰️ Propagation des ondes P et S",
                "📡 Détection par sismographes",
                "⏱️ Pointage des temps d'arrivée",
                "📍 Calcul de l'épicentre et magnitude",
                "⚠️ Diffusion de l'alerte publique",
                "🏛️ Application des normes parasismiques"
            ]
        }
    },
    {
        "id": "geomaticien-cartographe-geologue",
        "slug": "geomaticien-cartographe-geologue",
        "title": "Géomaticien / Cartographe Géologue & Télédétection",
        "aliases": [
            "Analyste SIG géosciences",
            "Cartographe géologue",
            "Spécialiste télédétection satellitaire",
            "Geospatial Analyst - Geosciences"
        ],
        "icon": "🗺️",
        "familyId": "sciences-terre-geosciences",
        "domain": "Géomatique, cartographie & télédétection",
        "domainId": "geomatique-cartographie-teledetection",
        "subdomain": "Systèmes d'Information Géographique & Satellite",
        "shortDescription": "Spécialiste de la donnée spatiale de la Terre, il combine images satellites, LiDAR, modèles numériques de terrain et SIG pour cartographier les ressources, suivre l'érosion et modéliser les territoires.",
        "longDescription": "L'outil informatique et les données spatiales ont révolutionné les géosciences. Le géomaticien spécialisé en géosciences est le cartographe de l'ère spatiale. À partir d'images satellites multispectrales (Sentinel, Landsat), de relevés LiDAR par drone et de cartes géologiques anciennes, il structure des bases de données géographiques massives, extrait des signatures d'altérations minérales et modélise en 3D la topographie et le sous-sol. Il conçoit des cartes thématiques indispensables à la recherche d'eau, au suivi de l'érosion côtière, à la planification minière et à la prévention des catastrophes naturelles.",
        "simpleDefinition": "Expert des cartes numériques et des images satellites qui combine données spatiales et géologie pour créer des cartes intelligentes aidant à explorer et protéger les territoires.",
        "level": "Bac +3 à Bac +5 (Licence Pro SIG / Master Géomatique - Géosciences)",
        "missions": [
            "Acquérir, corriger et traiter les images satellitaires multispectrales, radar (InSAR) et thermiques",
            "Piloter des missions de cartographie par drone et traiter les nuages de points LiDAR pour générer des MNT (Modèles Numériques de Terrain) haute résolution",
            "Créer et administrer des Systèmes d'Information Géographique (SIG) appliqués aux ressources naturelles et aux risques",
            "Croiser les données géologiques, pédologiques, hydrographiques et d'aménagements par analyse spatiale multicritère",
            "Automatiser les flux de traitement de données géographiques à l'aide de scripts Python et de requêtes SQL spatiales (PostGIS)",
            "Produire des cartes géologiques, hydrogéologiques et de vulnérabilité conformes aux normes de diffusion cartographique",
            "Mettre en place des plateformes webmapping pour partager les données avec les décideurs et le grand public"
        ],
        "workEnvironment": "Travail en bureau d'études ou laboratoire d'analyse spatiale devant des stations de calcul graphique dotées de plusieurs écrans haute résolution, avec des sorties ponctuelles pour le calage au sol de données GPS différentiel.",
        "typicalDay": [
            {
                "time": "08h30",
                "activity": "Téléchargement et prétraitement radiométrique de scènes satellites Sentinel-2 pour suivre l'évolution d'un trait de côte"
            },
            {
                "time": "10h00",
                "activity": "Calcul d'indices spectraux (NDVI, NDWI, indices minéralogiques d'altération ferrique et argileuse)"
            },
            {
                "time": "11h30",
                "activity": "Intégration des données de forages récents dans la base de données PostgreSQL/PostGIS"
            },
            {
                "time": "13h30",
                "activity": "Déjeuner avec les ingénieurs géologues pour affiner les critères d'une analyse spatiale de susceptibilité aux glissements"
            },
            {
                "time": "14h30",
                "activity": "Traitement d'un vol de drone : calcul du nuage de points et génération de l'orthophotoplan au centimètre près"
            },
            {
                "time": "16h30",
                "activity": "Développement d'un script Python (GeoPandas) pour automatiser l'export des cartes thématiques au format vectoriel"
            },
            {
                "time": "18h00",
                "activity": "Mise à jour du portail web SIG interactif pour la consultation des données par les agents de terrain"
            }
        ],
        "companyRole": "Architecte de la donnée spatiale, il transforme des millions de pixels satellites et de mesures de terrain en cartes d'aide à la décision claires et interactives.",
        "skills": {
            "technical": [
                "Logiciels SIG avancés (QGIS, ArcGIS Pro, FME)",
                "Télédétection optique, radar et LiDAR (logiciels ENVI, SNAP, Google Earth Engine)",
                "Bases de données spatiales (PostgreSQL / PostGIS)",
                "Programmation géospatiale (Python : GDAL, GeoPandas, Rasterio)",
                "Cartographie thématique, sémiologie graphique et géodésie (projections, datums)",
                "Webmapping (Leaflet, Mapbox, Geoserver)"
            ],
            "human": [
                "Grande rigueur logique et sens de l'organisation des données",
                "Sens esthétique et respect rigoureux de la sémiologie graphique",
                "Capacité à comprendre les besoins métiers des géologues, forestiers et urbanistes",
                "Autonomie et veille continue sur les technologies spatiales"
            ],
            "tools": [
                "QGIS",
                "ArcGIS Pro",
                "Google Earth Engine",
                "PostgreSQL / PostGIS",
                "Python (GeoPandas, GDAL)",
                "SNAP (ESA)",
                "FME"
            ]
        },
        "geosciencesPedagogy": "Parcours clé « Du pixel satellite à la carte d'aide à la décision » : 🛰️ Acquisition satellitaire / LiDAR ➔ 💻 Correction géométrique & radiométrique ➔ 🗺️ Intégration dans le SIG PostGIS ➔ 🔍 Analyse spatiale & indices géologiques ➔ 📊 Croisement multicritère des données ➔ 🎨 Mise en page sémiologique ➔ 🌐 Diffusion webmapping interactive",
        "studies": {
            "pathway": [
                {
                    "level": "Bac +3",
                    "degree": "Licence Sciences de la Terre ou Licence Pro SIG (ex: Cartographie et Géomatique)"
                },
                {
                    "level": "Bac +5",
                    "degree": "Master Géomatique / Télédétection / Master STPE (Université de Poitiers, ENSG Géomatique, Université de Rennes)"
                },
                {
                    "level": "Bac +5",
                    "degree": "Diplôme d'Ingénieur Géomètre-Topographe ou Géomaticien (ESGT, ENSG)"
                }
            ],
            "schools": [
                {
                    "name": "Université de Poitiers - Faculté des Sciences (Licence ST, Master STPE, outils de télédétection)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "ENSG Géomatique (École Nationale des Sciences Géographiques - Marne-la-Vallée)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centre de Suivi Écologique de Dakar (CSE - Pôle d'excellence en géomatique)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Institut des Sciences de la Terre (IST - UCAD Dakar)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification professionnelle QGIS / Esri",
                "Pilote de drone civil professionnel (DGAC / ANACIM)"
            ]
        },
        "career": {
            "sectors": [
                "Bureaux d'études en environnement, urbanisme et géologie",
                "Instituts géographiques et géologiques nationaux (IGN, BRGM)",
                "Compagnies d'exploration minière et d'énergies",
                "Collectivités territoriales et agences d'urbanisme",
                "Grandes ONG internationales et agences de l'ONU"
            ],
            "companies": [
                "BRGM",
                "IGN",
                "Antea Group",
                "Centre de Suivi Écologique (Sénégal)",
                "SUEZ",
                "Compagnies minières internationales"
            ],
            "evolution": [
                "Chef de projet géomatique",
                "Directeur de pôle SIG et données spatiales",
                "Architecte de données territoriales",
                "Consultant international en observation de la Terre"
            ],
            "pros": [
                "Compétences ultra-recherchées dans tous les secteurs de l'économie",
                "Évolution rapide des technologies (satellites, IA, drones)",
                "Travail valorisant produisant des visualisations concrètes"
            ],
            "cons": [
                "Travail prolongé sur écran",
                "Exigence d'une veille technologique permanente",
                "Gestion fréquente de données volumineuses et complexes à nettoyer"
            ]
        },
        "gettingStarted": "Maîtriser QGIS, se former à Python appliqué à la géomatique et explorer les catalogues de données gratuites Sentinel de l'Agence Spatiale Européenne (Copernicus).",
        "aiImpact": {
            "level": "Très élevé / Automatisation de l'analyse d'images",
            "opportunities": [
                "Segmentation automatique de l'occupation du sol et des fractures géologiques par réseaux de neurones",
                "Détection automatique de changements environnementaux en temps réel sur flux satellites",
                "Génération de jumeaux numériques de territoires"
            ],
            "challenges": [
                "Nécessité de maîtriser le traitement des flux massifs de données (Big Data Spatial)"
            ],
            "humanEdge": "La conception du modèle d'analyse spatiale et l'interprétation critique de la cohérence géographique demeurent humaines."
        },
        "africaContext": {
            "title": "Le Géomaticien au Sénégal : Le CSE, Pôle d'Excellence d'Afrique de l'Ouest",
            "description": "Le Sénégal abrite le Centre de Suivi Écologique (CSE) de Dakar, référence internationale en télédétection et SIG pour l'Afrique de l'Ouest. Les géomaticiens y surveillent la dynamique des côtes (érosion de Saint-Louis et Rufisque), le couvert végétal pastoral, les feux de brousse et la cartographie des parcelles agricoles.",
            "keyInstitutions": [
                "Centre de Suivi Écologique (CSE - Dakar)",
                "Agence Nationale de l'Aménagement du Territoire (ANAT)",
                "Direction des Travaux Géographiques et Cartographiques (DTGC)",
                "Institut des Sciences de la Terre (IST - UCAD)"
            ],
            "projects": [
                "Suivi satellitaire de l'érosion côtière sur le littoral sénégalais",
                "Plateforme de suivi des feux de brousse et des parcours pastoraux du Ferlo",
                "Base de données géospatiale du cadastre minier et foncier national"
            ],
            "opportunities": "Très forte demande dans les agences d'État, les projets financés par la Banque Mondiale et les bureaux d'études de Dakar."
        },
        "salary": "🇫🇷 France : 28 000 - 54 000 € brut/an • 🇸🇳 Sénégal : 350 000 - 1 500 000 FCFA net/mois",
        "connectedFamilies": [
            "numerique-ia",
            "data-decision",
            "environnement-climat",
            "agriculture-agritech"
        ],
        "relatedJobs": [
            "geologue",
            "pedologue",
            "hydrogeologue",
            "geographe-cartographe",
            "ingenieur-risques-naturels"
        ],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Fiche Géologue (mention modélisation 3D, télédétection satellitaire et géostatistiques)",
                "url": "https://sfa.univ-poitiers.fr/geosciences/debouches-professionnels/geologue/",
                "type": "metier"
            },
            {
                "organization": "Association Française pour l'Information Géographique (AFIGÉO)",
                "title": "Référentiel des compétences et métiers de la géomatique",
                "url": "https://www.afigeo.asso.fr",
                "type": "secteur"
            }
        ],
        "sourcePoitiers": true,
        "sourceBRGM": true,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "La constellation de satellites Sentinel-2 de l'Union Européenne survole l'intégralité des terres émergées de la planète tous les 5 jours avec une résolution de 10 mètres par pixel, en accès 100% libre et gratuit.",
            "pourquoi": "Le programme Copernicus vise à doter le monde d'une capacité d'observation continue pour suivre le climat, les forêts, les eaux et les catastrophes naturelles.",
            "a_retenir": "Le géomaticien en géosciences est l'interprète qui transforme ce flux colossal de données spatiales en décisions territoriales vitales."
        },
        "salaryDetail": {
            "france": {
                "entry": 28000,
                "mid": 38000,
                "expert": 54000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : APEC & observatoire des métiers de la géomatique"
            },
            "senegal": {
                "entry": 350000,
                "mid": 700000,
                "expert": 1500000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés en bureau d'études SIG et agences publiques à Dakar"
            }
        },
        "geosciencesPedagogyDetail": {
            "pathway": "Du pixel satellite à la carte d'aide à la décision",
            "steps": [
                "🛰️ Acquisition satellitaire / LiDAR",
                "💻 Correction géométrique & radiométrique",
                "🗺️ Intégration dans le SIG PostGIS",
                "🔍 Analyse spatiale & indices géologiques",
                "📊 Croisement multicritère des données",
                "🎨 Mise en page sémiologique",
                "🌐 Diffusion webmapping interactive"
            ]
        }
    },
    {
        "id": "expert-sites-sols-pollues",
        "slug": "expert-sites-sols-pollues",
        "title": "Expert en Sites & Sols Pollués / Remédiation Environnementale",
        "aliases": [
            "Ingénieur sites et sols pollués",
            "Consultant dépollution des sols",
            "Spécialiste en remédiation environnementale",
            "Contaminated Land Specialist"
        ],
        "icon": "🧪",
        "familyId": "sciences-terre-geosciences",
        "domain": "Environnement & géosciences",
        "domainId": "environnement-sites-pollues",
        "subdomain": "Dépollution & Remédiation des Terrains",
        "shortDescription": "Spécialiste de la santé environnementale des terres, il identifie les contaminations chimiques et industrielles dans les sols et les nappes, évalue les risques sanitaires et pilote les chantiers de dépollution.",
        "longDescription": "Friches industrielles, anciennes usines à gaz, stations-service abandonnées ou décharges chimiques : les activités humaines du passé ont laissé de nombreuses traces polluantes dans le sous-sol. L'expert en sites et sols pollués est le médecin rééducateur de ces terrains dégradés. Alliant connaissances pointues en géologie, hydrogéologie et chimie de l'environnement, il réalise des diagnostics approfondis (forages environnementaux, prélèvements d'eau, de sol et de gaz du sol), modélise les panaches de dispersion des polluants (hydrocarbures, solvants chlorés, métaux lourds) et calcule les risques pour la santé humaine. Il conçoit ensuite le plan de dépollution adapté (bioremédiation, désorption thermique, venting, lavage de sol) pour rendre les terrains à nouveau habitables ou constructibles.",
        "simpleDefinition": "Ingénieur qui nettoie et répare les terrains pollués par d'anciennes usines ou produits chimiques, pour éliminer les poisons et rendre la terre saine pour de nouvelles constructions.",
        "level": "Bac +5 (Master STPE Matériaux-Minéraux / Ingénieur Environnement)",
        "missions": [
            "Conduire des études historiques, documentaires et vulnérabilités de sites industriels (diagnostic initial)",
            "Définir et superviser le plan d'échantillonnage des sols, des eaux souterraines et des gaz du sol (air du sol)",
            "Interpréter les résultats d'analyses chimiques de laboratoire et cartographier les panaches de contamination",
            "Réaliser l'Évaluation Quantitative des Risques Sanitaires (EQRS) pour les futurs usagers du site",
            "Concevoir le plan de gestion environnemental et choisir les techniques de remédiation adaptées in situ ou ex situ",
            "Superviser les chantiers de dépollution : excavation des terres polluées, pompage-traitement de nappe (Pump & Treat), bioventing",
            "Établir les attestations de conformité (attestation ATTES) garantissant la prise en compte de la pollution dans les projets de construction"
        ],
        "workEnvironment": "Alternance entre visites de terrain sur friches industrielles, chantiers de forages environnementaux avec équipement de protection individuelle (EPI, masque à gaz si solvants), et travail au bureau d'études pour la modélisation des risques sanitaires.",
        "typicalDay": [
            {
                "time": "08h30",
                "activity": "Arrivée sur une ancienne friche de raffinerie pour superviser une campagne de forages de prélèvement de carottes de sol"
            },
            {
                "time": "09h30",
                "activity": "Mesure des composés organiques volatils (COV) au détecteur PID (photo-ionisation) sur les carottes fraîches"
            },
            {
                "time": "11h30",
                "activity": "Prélèvement d'échantillons de gaz du sol sous dalle avec pose de canules d'échantillonnage étanches"
            },
            {
                "time": "13h00",
                "activity": "Déjeuner de travail et pointage des échantillons expédiés sous glacière au laboratoire certifié"
            },
            {
                "time": "14h30",
                "activity": "Au bureau : modélisation de la migration d'un panache de trichloroéthylène dans la nappe phréatique sous-jacente"
            },
            {
                "time": "16h30",
                "activity": "Calcul des doses d'exposition par inhalation pour les futurs occupants des logements prévus sur le site"
            },
            {
                "time": "18h00",
                "activity": "Validation des préconisations du plan de dépollution : traitement par oxydation chimique in situ (ISCO)"
            }
        ],
        "companyRole": "Tiers expert de confiance, il engage sa responsabilité technique et environnementale pour certifier que les terrains requalifiés sont sans danger pour la santé des enfants et des familles.",
        "skills": {
            "technical": [
                "Mécanisme de transfert des polluants dans le sol, l'eau et l'air (adsorption, biodégradation, volatilisation)",
                "Chimie des contaminants : HAP, PCB, BTEX, métaux lourds (plomb, cadmium, arsenic), solvants chlorés, PFAS",
                "Normes françaises et européennes de gestion des sites et sols pollués (méthodologie nationale SSP)",
                "Techniques de remédiation : bioremédiation, venting, stripping, oxydation chimique, barrières perméables réactives",
                "Évaluation Quantitative des Risques Sanitaires (logiciels d'exposition RISC, RBCA)",
                "Réglementation des ICPE (Installations Classées pour la Protection de l'Environnement)"
            ],
            "human": [
                "Rigueur scientifique et probité déontologique exemplaire",
                "Aisance rédactionnelle pour produire des rapports d'experts juridiquement solides",
                "Sensibilité aiguë à la santé publique et à la protection des écosystèmes",
                "Aptitude à communiquer sereinement dans des contextes de contentieux environnemental"
            ],
            "tools": [
                "Détecteur PID (photo-ionisation)",
                "Sondes de prélèvement d'eau et d'air du sol",
                "Modèles de transfert RISC / RBCA",
                "QGIS",
                "Pompes péristaltiques de micropurge"
            ]
        },
        "geosciencesPedagogy": "Parcours clé « De la friche polluée au terrain assaini » : 🏭 Étude historique de la friche ➔ 🧪 Sondages & prélèvements de sol et gaz ➔ 🔬 Analyses chimiques certifiées ➔ 📊 Modélisation du panache & risques ➔ 🛠️ Sélection du procédé de dépollution ➔ 🌿 Traitement in situ & suivi de nappe ➔ 🏡 Requalification pour la ville durable",
        "studies": {
            "pathway": [
                {
                    "level": "Bac +3",
                    "degree": "Licence Sciences de la Terre ou Chimie de l'Environnement"
                },
                {
                    "level": "Bac +5",
                    "degree": "Master EUR STPE Parcours Matériaux-Minéraux (Université de Poitiers - débouché remédiation des sols)"
                },
                {
                    "level": "Bac +5",
                    "degree": "Master Génie de l'Environnement / Diplôme d'Ingénieur Géologue-Environnement (UniLaSalle, ENSG Nancy, INSA)"
                }
            ],
            "schools": [
                {
                    "name": "Université de Poitiers - Master EUR Matériaux-Minéraux (Débouché remédiation des sites et sols pollués cité par l'UFR SFA)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "UniLaSalle Beauvais (Filière Géologie & Environnement)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut des Sciences de l'Environnement (ISE - UCAD Dakar)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Institut des Sciences de la Terre (IST - UCAD Dakar)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification LNE Sites et Sols Pollués (norme NF X 31-620 domaines A, B, C)",
                "Habilitation risque chimique niveau 2"
            ]
        },
        "career": {
            "sectors": [
                "Bureaux d'études spécialisés en sites et sols pollués",
                "Entreprises de dépollution et de travaux environnementaux",
                "Grands groupes industriels (chimie, pétrole, sidérurgie, transports)",
                "Agences publiques environnementales (ADEME, BRGM)",
                "Aménageurs urbains et établissements publics fonciers"
            ],
            "companies": [
                "Antea Group",
                "WSP",
                "Golder",
                "Suez Déchets / Sites & Sols",
                "Veolia Séché Environnement",
                "BRGM",
                "ADEME"
            ],
            "evolution": [
                "Chef de projet senior sites pollués",
                "Directeur d'agence ingénierie environnementale",
                "Auditeur environnemental de fusions-acquisitions",
                "Expert agréé auprès du Ministère de l'Écologie"
            ],
            "pros": [
                "Métier à très forte utilité pour la reconquête de la biodiversité et de la ville durable",
                "Secteur en expansion continue porté par le recyclage des friches (loi ZAN)",
                "Diversité technique mêlant chimie, géologie et santé publique"
            ],
            "cons": [
                "Intervention sur des sites potentiellement dangereux nécessitant le port d'EPI stricts",
                "Pression des promoteurs immobiliers pour réduire les coûts et délais de dépollution",
                "Responsabilité pénale et environnementale élevée"
            ]
        },
        "gettingStarted": "Effectuer des stages dans des bureaux d'études certifiés LNE (norme NF X 31-620) et maîtriser l'évaluation des risques sanitaires et la dynamique des polluants dans les sols.",
        "aiImpact": {
            "level": "Modéré / Optimisation de l'échantillonnage",
            "opportunities": [
                "Optimisation géostatistique des maillages de prélèvements pour réduire les coûts",
                "Modélisation 3D dynamique de l'atténuation naturelle des solvants par intelligence artificielle",
                "Prédiction des transferts de polluants vers les nappes"
            ],
            "challenges": [
                "L'hétérogénéité des remblais anthropiques et des pollutions exige toujours des sondages réels"
            ],
            "humanEdge": "La responsabilité légale de délivrer une attestation garantissant l'absence de risque sanitaire pour des logements est strictement humaine."
        },
        "africaContext": {
            "title": "L'Expert Sites & Sols Pollués au Sénégal : Dépollution Urbaine et Industrielle",
            "description": "À Dakar et dans les pôles industriels du Sénégal (Mbao, zone franche de Rufisque, décharge de Mbeubeuss, sites miniers de Taïba et Kédougou), la gestion des sols pollués est devenue une priorité nationale. L'expert intervient pour diagnostiquer les rejets d'hydrocarbures, les résidus de métaux lourds et sécuriser les programmes de reconversion urbaine.",
            "keyInstitutions": [
                "Direction de l'Environnement et des Établissements Classés (DEEC)",
                "Institut des Sciences de l'Environnement (ISE - UCAD Dakar)",
                "Centre Antipoison du Sénégal",
                "PROMOGED (Projet de Modernisation de la Gestion des Déchets)"
            ],
            "projects": [
                "Réhabilitation environnementale et fermeture progressive de la décharge de Mbeubeuss",
                "Dépollution des sols de la baie de Hann et des zones portuaires de Dakar",
                "Plans de gestion environnementale et réhabilitation des sites miniers post-exploitation"
            ],
            "opportunities": "Postes de consultants auprès des agences étatiques, des bailleurs de fonds internationaux (Banque Mondiale, AFD) et des industries chimiques."
        },
        "salary": "🇫🇷 France : 30 000 - 62 000 € brut/an • 🇸🇳 Sénégal : 450 000 - 1 800 000 FCFA net/mois",
        "connectedFamilies": [
            "environnement-climat",
            "agriculture-agritech",
            "sante-biomedical",
            "btp-architecture"
        ],
        "relatedJobs": [
            "pedologue",
            "hydrogeologue",
            "geologue",
            "ingenieur-materiaux-geosciences",
            "chercheur-geosciences"
        ],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Master EUR STPE Parcours Matériaux-Minéraux - Débouché Sites et Sols Pollués",
                "url": "https://sfa.univ-poitiers.fr/geosciences/formations/master-eur-parcours-materiaux-mineraux/",
                "type": "formation"
            },
            {
                "organization": "Ministère de la Transition Écologique",
                "title": "Méthodologie nationale de gestion des sites et sols pollués",
                "url": "https://www.ecologie.gouv.fr/politiques-publiques/sites-sols-pollues",
                "type": "reglementation"
            }
        ],
        "sourcePoitiers": true,
        "sourceBRGM": true,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En France, la base de données BASOL recense plus de 7 000 sites pollués nécessitant une action des pouvoirs publics, et des dizaines de milliers de friches industrielles sont à requalifier.",
            "pourquoi": "Deux siècles d'industrialisation lourde (métallurgie, carbochimie, pétrochimie) ont disséminé des résidus tenaces dans les sols.",
            "a_retenir": "L'expert en sites pollués est l'artisan qui permet de reconstruire la ville sur la ville sans artificialiser de nouvelles terres agricoles sauvages."
        },
        "salaryDetail": {
            "france": {
                "entry": 30000,
                "mid": 44000,
                "expert": 62000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : Syntec Ingénierie, APEC & Université de Poitiers"
            },
            "senegal": {
                "entry": 450000,
                "mid": 900000,
                "expert": 1800000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés en bureau d'études environnementales et projets DEEC à Dakar"
            }
        },
        "geosciencesPedagogyDetail": {
            "pathway": "De la friche polluée au terrain assaini",
            "steps": [
                "🏭 Étude historique de la friche",
                "🧪 Sondages & prélèvements de sol et gaz",
                "🔬 Analyses chimiques certifiées",
                "📊 Modélisation du panache & risques",
                "🛠️ Sélection du procédé de dépollution",
                "🌿 Traitement in situ & suivi de nappe",
                "🏡 Requalification pour la ville durable"
            ]
        }
    },
    {
        "id": "chercheur-geosciences",
        "slug": "chercheur-geosciences",
        "title": "Chercheur en Sciences de la Terre & Géosciences",
        "aliases": [
            "Chercheur géologue",
            "Chargé de recherche en géosciences",
            "Scientifique de la Terre",
            "Geoscientist Researcher"
        ],
        "icon": "🔬",
        "familyId": "sciences-terre-geosciences",
        "domain": "Recherche scientifique",
        "domainId": "recherche-scientifique-terre",
        "subdomain": "Recherche Fondamentale & Grands Instruments",
        "shortDescription": "Spécialiste de pointe, il fait progresser la connaissance des grands cycles terrestres, du climat passé, de la tectonique et des ressources critiques au sein des grands organismes de recherche mondiaux.",
        "longDescription": "Véritable explorateur de l'inconnu, le chercheur en sciences de la Terre conçoit des protocoles expérimentaux, pilote des campagnes de forage ou d'échantillonnage aux quatre coins du globe (fonds océaniques, calottes glaciaires, massifs volcaniques) et utilise les instruments scientifiques les plus sophistiqués (synchrotrons, spectromètres de masse, supercalculateurs). Qu'il étudie la géodynamique profonde du manteau, les paléoclimats enregistrés dans les sédiments, le cycle du carbone ou les processus d'enrichissement des métaux rares, il publie ses découvertes dans des revues internationales de premier plan (Nature Geoscience, Earth and Planetary Science Letters) et valorise ses travaux auprès de l'industrie et des institutions.",
        "simpleDefinition": "Scientifique de haut niveau qui imagine des expériences et explore le monde pour découvrir de nouvelles lois sur le fonctionnement de la Terre, les climats anciens et les ressources de demain.",
        "level": "Bac +8 (Doctorat en Géosciences / Thèse d'Université)",
        "missions": [
            "Concevoir et piloter des programmes de recherche scientifique fondamentale ou appliquée en sciences de la Terre",
            "Organiser des campagnes d'acquisition de données et d'échantillonnage sur le terrain (missions océanographiques, forages profonds)",
            "Mener des analyses isotopiques et géochimiques poussées sur grands instruments (spectrométrie de masse, microsondes, synchrotrons)",
            "Développer des modèles numériques prédictifs simulant la convection mantellique, le climat terrestre ou les transferts réactifs",
            "Rédiger et publier des articles scientifiques évalués par les pairs dans des revues internationales à fort facteur d'impact",
            "Présenter les découvertes lors de congrès internationaux (EGU, AGU, Réunion des Sciences de la Terre - RST)",
            "Monter des dossiers de financement compétitifs auprès d'agences nationales et internationales (ANR, ERC, programmes européens)"
        ],
        "workEnvironment": "Laboratoires de recherche académique (CNRS, universités, BRGM) équipés de salles blanches et d'instruments analytiques lourds, missions de terrain internationales et participation régulière à des conférences scientifiques mondiales.",
        "typicalDay": [
            {
                "time": "08h30",
                "activity": "Revue des alertes bibliographiques sur les dernières parutions internationales en géodynamique chimique"
            },
            {
                "time": "09h30",
                "activity": "Séance d'analyse sur spectromètre de masse à source plasma (ICP-MS haute résolution) sur des zircons anciens"
            },
            {
                "time": "12h00",
                "activity": "Déjeuner et séminaire d'équipe avec un chercheur invité d'une université étrangère"
            },
            {
                "time": "14h00",
                "activity": "Traitement numérique et modélisation géochimique sous Python pour tester une hypothèse de recyclage mantellique"
            },
            {
                "time": "16h00",
                "activity": "Rédaction de la section méthodologique d'un article scientifique soumis à la revue Earth and Planetary Science Letters"
            },
            {
                "time": "17h30",
                "activity": "Point d'avancement avec un doctorant sur le dépouillement de ses résultats de diffraction des rayons X"
            }
        ],
        "companyRole": "Moteur de l'innovation et du savoir de l'humanité, il éclaire les grands défis sociétaux (ressources critiques, réchauffement climatique, géorisques).",
        "skills": {
            "technical": [
                "Méthodologie de la recherche scientifique et démarche hypothético-déductive",
                "Géochimie isotopique (isotopes stables et radiogéniques : C, O, Sr, Nd, Pb)",
                "Pétrologie expérimentale haute pression / haute température (cellule à enclumes de diamant, presse piston-cylindre)",
                "Modélisation physique et géodynamique numérique (Fortran, Python, C++)",
                "Rédaction scientifique experte en anglais académique",
                "Gestion de projet de recherche et pilotage de consortiums internationaux"
            ],
            "human": [
                "Passion insatiable pour la découverte et curiosité intellectuelle",
                "Rigueur, intégrité scientifique et probité méthodologique absolue",
                "Persévérance face aux échecs expérimentaux et aux hypothèses réfutées",
                "Excellente aisance de communication à l'international"
            ],
            "tools": [
                "Spectromètre de masse ICP-MS / TIMS",
                "Ligne de préparation en salle blanche ISO 6",
                "Python / R / Julia",
                "Cluster de calcul haute performance (HPC)",
                "LaTeX",
                "Logiciels géochimiques PhreeqC / Geochemist's Workbench"
            ]
        },
        "geosciencesPedagogy": "Parcours clé « De la question scientifique à la découverte » : ❓ Formulation de l'hypothèse de recherche ➔ 🚢 Campagne d'échantillonnage de terrain ➔ 🔬 Analyses sur grands instruments (synchrotron) ➔ 💻 Simulation numérique sur supercalculateur ➔ 📊 Interprétation des données géochimiques ➔ 📝 Rédaction de l'article à comité de lecture ➔ 🌍 Publication internationale & diffusion",
        "studies": {
            "pathway": [
                {
                    "level": "Bac +3",
                    "degree": "Licence Sciences de la Terre ou Physique (Université de Poitiers)"
                },
                {
                    "level": "Bac +5",
                    "degree": "Master STPE Recherche ou Diplôme d'Ingénieur Géologue (ENSG Nancy, ENS Paris)"
                },
                {
                    "level": "Bac +8",
                    "degree": "Doctorat en Géosciences (thèse de doctorat de 3 ans avec publications)"
                },
                {
                    "level": "Post-doc",
                    "degree": "1 à 3 contrats post-doctoraux en France ou à l'international avant recrutement sur concours"
                }
            ],
            "schools": [
                {
                    "name": "Université de Poitiers - Faculté des Sciences Fondamentales et Appliquées (Département Géosciences / UMR IC2MP)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "CNRS - Institut National des Sciences de l'Univers (INSU)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Normale Supérieure (ENS Paris / Lyon)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Cheikh Anta Diop de Dakar (UCAD - École Doctorale Sciences de la Vie, de la Santé et de l'Environnement)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Doctorat d'État / PhD en Géosciences",
                "Habilitation à Diriger des Recherches (HDR pour accès au rang de Directeur de recherche)"
            ]
        },
        "career": {
            "sectors": [
                "Organismes publics de recherche (CNRS, BRGM, IRD, IFREMER, INRAE)",
                "Laboratoires des universités et grandes écoles",
                "Centres de R&D des grands groupes énergétiques et miniers",
                "Instituts géologiques internationaux (USGS, BGS)"
            ],
            "companies": [
                "CNRS",
                "BRGM",
                "IFREMER",
                "IRD",
                "TotalEnergies R&D",
                "Eramet Ideas",
                "IFPEN"
            ],
            "evolution": [
                "Chargé de recherche (CRCN)",
                "Directeur de recherche (DR2 / DR1)",
                "Directeur de laboratoire / Unité Mixte de Recherche (UMR)",
                "Conseiller scientifique d'organisations internationales"
            ],
            "pros": [
                "Liberté académique de recherche sur des sujets passionnants",
                "Voyages et collaborations internationales régulières",
                "Satisfaction intellectuelle d'ajouter une pierre au savoir universel"
            ],
            "cons": [
                "Concours de recrutement extrêmement sélectifs (très peu de postes chaque année au CNRS)",
                "Période de précarité post-doctorale de plusieurs années",
                "Pression forte sur les publications (Publish or Perish) et recherche de financements"
            ]
        },
        "gettingStarted": "Publier des articles dès le doctorat, effectuer un post-doctorat dans une université étrangère prestigieuse et tisser des collaborations avec des équipes de pointe.",
        "aiImpact": {
            "level": "Très élevé / Accélération de la découverte",
            "opportunities": [
                "Criblage massif d'hypothèses par exploration de bases de données bibliographiques et minéralogiques mondiales",
                "Emulateurs de modèles géodynamiques par deep learning divisant par 1 000 les temps de calcul",
                "Détection automatique de signatures géochimiques subtiles"
            ],
            "challenges": [
                "Nécessité de comprendre la causalité physique et ne pas se fier à de simples corrélations statistiques"
            ],
            "humanEdge": "L'intuition scientifique créative, la conception d'expériences novatrices et le sens critique restent le monopole du chercheur humain."
        },
        "africaContext": {
            "title": "Le Chercheur en Géosciences en Afrique : Comprendre le Berceau Géologique Mondial",
            "description": "L'Afrique est un terrain d'étude géologique exceptionnel (cratons archéens, formations birimiennes de plus de 2 milliards d'années, rift est-africain, grands bassins sédimentaires). Les chercheurs de l'UCAD, de l'IFAN et de l'IRD y mènent des travaux de premier plan sur les paléoclimats sahéliens et la genèse des gisements de minerais critiques.",
            "keyInstitutions": [
                "Faculté des Sciences et Techniques (FST - UCAD Dakar)",
                "Laboratoire de Géologie de l'IFAN Cheikh Anta Diop",
                "Institut des Sciences de la Terre (IST - UCAD)",
                "Représentation de l'IRD au Sénégal (Campus de Hann)"
            ],
            "projects": [
                "Reconstitution des variations climatiques de l'Holocène dans la zone sahélienne",
                "Étude métallogénique de la ceinture de roches vertes de Mako (Sénégal oriental)",
                "Dynamique de recharge des grands aquifères fossiles du bassin sédimentaire sénégalais"
            ],
            "opportunities": "Postes académiques au Sénégal (CAMES), bourses internationales de recherche (AUF, Union Européenne) et collaborations avec les universités du Nord."
        },
        "salary": "🇫🇷 France : 31 000 - 68 000 € brut/an • 🇸🇳 Sénégal : 500 000 - 2 000 000 FCFA net/mois",
        "connectedFamilies": [
            "sciences-biotech",
            "education-formation",
            "environnement-climat",
            "data-decision"
        ],
        "relatedJobs": [
            "enseignant-chercheur-geosciences",
            "geologue",
            "mineralogiste",
            "paleontologue",
            "ingenieur-recherche-geosciences"
        ],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Fiche Métier Chercheur - Département Géosciences",
                "url": "https://sfa.univ-poitiers.fr/geosciences/debouches-professionnels/chercheur/",
                "type": "metier"
            },
            {
                "organization": "CNRS",
                "title": "Les métiers de la recherche en sciences de la Terre (INSU)",
                "url": "https://www.insu.cnrs.fr",
                "type": "institutionnel"
            }
        ],
        "sourcePoitiers": true,
        "sourceBRGM": true,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "C'est en forant les sédiments marins et les glaces de l'Antarctique que les chercheurs en géosciences ont pu prouver de manière irréfutable que le climat de la Terre est rythmé par les variations cycliques de son orbite (cycles de Milankovitch).",
            "pourquoi": "Les bulles d'air emprisonnées dans la glace et les coquilles fossiles de foraminifères constituent des thermomètres naturels préservés sur 800 000 ans.",
            "a_retenir": "Comprendre le passé profond de la Terre est l'unique clé scientifique pour prédire son futur climatique."
        },
        "salaryDetail": {
            "france": {
                "entry": 31000,
                "mid": 46000,
                "expert": 68000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : Grilles indiciaires CNRS / BRGM & Université de Poitiers"
            },
            "senegal": {
                "entry": 500000,
                "mid": 950000,
                "expert": 2000000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés pour les chercheurs d'universités et instituts de recherche à Dakar"
            }
        },
        "geosciencesPedagogyDetail": {
            "pathway": "De la question scientifique à la découverte",
            "steps": [
                "❓ Formulation de l'hypothèse de recherche",
                "🚢 Campagne d'échantillonnage de terrain",
                "🔬 Analyses sur grands instruments (synchrotron)",
                "💻 Simulation numérique sur supercalculateur",
                "📊 Interprétation des données géochimiques",
                "📝 Rédaction de l'article à comité de lecture",
                "🌍 Publication internationale & diffusion"
            ]
        }
    },
    {
        "id": "enseignant-chercheur-geosciences",
        "slug": "enseignant-chercheur-geosciences",
        "title": "Enseignant-Chercheur en Géosciences / Maître de Conférences",
        "aliases": [
            "Maître de conférences en géosciences",
            "Professeur des universités en sciences de la Terre",
            "Universitaire géologue",
            "Associate Professor - Earth Sciences"
        ],
        "icon": "🎓",
        "familyId": "sciences-terre-geosciences",
        "domain": "Enseignement & médiation scientifique",
        "domainId": "enseignement-mediation-terre",
        "subdomain": "Pédagogie Universitaire & Recherche Académique",
        "shortDescription": "Porteur d'une double vocation indissociable, il transmet le savoir scientifique aux étudiants en amphithéâtre et sur le terrain tout en pilotant des recherches de pointe au laboratoire.",
        "longDescription": "Vous avez acquis un haut niveau scientifique dans les sciences de la Terre : vous mettez vos compétences en pratique dans deux directions complémentaires et inséparables. D'une part, la transmission pédagogique : donner des cours magistraux, diriger des travaux dirigés et des travaux pratiques en salle et animer des écoles de terrain indispensables pour apprendre aux étudiants à lire un paysage rocheux. D'autre part, la recherche fondamentale ou appliquée : diriger des projets scientifiques, encadrer des doctorants, rédiger des publications dans des revues internationales et participer aux responsabilités collectives de l'université.",
        "simpleDefinition": "Professeur d'université qui partage son temps entre donner des cours et encadrer des stages de terrain pour les étudiants, et mener ses propres recherches au laboratoire.",
        "level": "Bac +8 (Doctorat en Géosciences + Qualification CNU)",
        "missions": [
            "Concevoir et dispenser des enseignements en sciences de la Terre de la Licence au Master et Doctorat (cours, TD, TP)",
            "Organiser et encadrer les stages d'écoles de terrain géologiques (levés d'affleurements, géométrie des structures)",
            "Conduire des activités de recherche au sein d'une unité mixte (laboratoire CNRS / Université)",
            "Encadrer des mémoires de master, des thèses de doctorat et des stages professionnels",
            "Publier régulièrement les résultats scientifiques dans des revues internationales avec comité de lecture",
            "Participer à la gestion administrative de l'université : jurys d'examens, comités de sélection, direction de départements",
            "Vulgariser les géosciences auprès de la société civile (Fête de la Science, conférences grand public)"
        ],
        "workEnvironment": "Amphithéâtres et salles de travaux pratiques de l'université, bureau de laboratoire de recherche, et plusieurs semaines par an passées en extérieur pour encadrer des étudiants en camp géologique de terrain.",
        "typicalDay": [
            {
                "time": "08h00",
                "activity": "Cours magistral de 2h en amphithéâtre devant les étudiants de Licence 3 sur la sédimentologie de faciès"
            },
            {
                "time": "10h15",
                "activity": "Séance de travaux pratiques au microscope polarisant : observation de lames minces de calcaires à nummulites"
            },
            {
                "time": "12h30",
                "activity": "Déjeuner avec les collègues du département pour finaliser le calendrier des écoles de terrain de printemps"
            },
            {
                "time": "14h00",
                "activity": "Travaux de recherche : supervision d'une séance d'analyse géochimique avec une doctorante"
            },
            {
                "time": "16h00",
                "activity": "Réunion du comité pédagogique sur l'accréditation de la nouvelle maquette de Master STPE"
            },
            {
                "time": "17h30",
                "activity": "Relecture et corrections d'un manuscrit scientifique co-écrit pour soumission à un journal international"
            }
        ],
        "companyRole": "Formateur des futurs ingénieurs et chercheurs du pays, il assure le rayonnement académique de l'université et l'avancement des connaissances.",
        "skills": {
            "technical": [
                "Maîtrise approfondie d'un champ d'expertise en géosciences (stratigraphie, tectonique, hydrogéologie, minéralogie)",
                "Pédagogie universitaire et conception de maquettes de formation adaptées aux besoins du marché du travail",
                "Encadrement scientifique de chercheurs juniors et méthodologie de thèse",
                "Direction de projets de recherche et montage de partenariats industriels",
                "Animation et encadrement sécurisé de groupes d'étudiants en terrain accidenté",
                "Publication scientifique de rang A en langue anglaise"
            ],
            "human": [
                "Passion pour l'enseignement et bienveillance envers les étudiants",
                "Sens aigu de l'écoute, de l'accompagnement et de la transmission",
                "Rigueur déontologique et probité dans l'évaluation des étudiants",
                "Esprit d'équipe pour le fonctionnement collectif des départements d'enseignement"
            ],
            "tools": [
                "Microscopes optiques de travaux pratiques Leica",
                "Plateformes pédagogiques (Moodle)",
                "Outils SIG et cartographie",
                "Logiciels de présentation et vidéoprojection",
                "Matériel pédagogique de terrain (cartes, boussoles)"
            ]
        },
        "geosciencesPedagogy": "Parcours clé « De l'amphithéâtre au camp de terrain » : 📚 Enseignement théorique en amphi ➔ 🔬 Travaux pratiques au microscope ➔ 🏞️ Encadrement d'écoles de terrain ➔ 🧪 Projets de laboratoire tuteurés ➔ 📝 Direction de thèses de doctorat ➔ 🌍 Publications scientifiques de pointe",
        "studies": {
            "pathway": [
                {
                    "level": "Bac +3",
                    "degree": "Licence Sciences de la Terre (Université de Poitiers)"
                },
                {
                    "level": "Bac +5",
                    "degree": "Master STPE Recherche ou Diplôme d'Ingénieur Géologue"
                },
                {
                    "level": "Bac +8",
                    "degree": "Doctorat en Géosciences (Thèse soutenue publiquement)"
                },
                {
                    "level": "Post-Doctorat",
                    "degree": "Expérience post-doctorale puis Qualification par le Conseil National des Universités (CNU section 35 ou 36)"
                },
                {
                    "level": "Recrutement",
                    "degree": "Concours national de recrutement de Maître de Conférences (MCF)"
                }
            ],
            "schools": [
                {
                    "name": "Université de Poitiers - Faculté des Sciences (UFR SFA - Département Géosciences)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Conseil National des Universités (CNU - Sections 35 et 36)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Faculté des Sciences et Techniques (FST - UCAD Dakar / CAMES)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Institut des Sciences de la Terre (IST - UCAD)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Qualification CNU (sections 35 : Structure et évolution de la Terre / 36 : Terre solide)",
                "Habilitation à Diriger des Recherches (HDR)"
            ]
        },
        "career": {
            "sectors": [
                "Universités françaises et internationales",
                "Grandes écoles d'ingénieurs (ENS, Mines, Polytech)",
                "Instituts de formation professionnelle supérieure",
                "Organismes mixtes d'enseignement et de recherche"
            ],
            "companies": [
                "Université de Poitiers",
                "Sorbonne Université",
                "Université Cheikh Anta Diop de Dakar (UCAD)",
                "UniLaSalle",
                "Université de Lorraine"
            ],
            "evolution": [
                "Maître de Conférences classe normale",
                "Maître de Conférences hors classe",
                "Professeur des Universités (après HDR et concours)",
                "Directeur de composante / Doyen de Faculté"
            ],
            "pros": [
                "Richesse humaine incomparable du contact quotidien avec la jeunesse étudiante",
                "Grande autonomie d'organisation du travail entre enseignement et recherche",
                "Statut de fonctionnaire d'État assurant la stabilité"
            ],
            "cons": [
                "Concours de recrutement très sélectif (nombre limité de postes ouverts par an)",
                "Pression administrative croissante dans la gestion universitaire",
                "Nécessité de concilier des exigences temporelles contradictoires (cours vs labo)"
            ]
        },
        "gettingStarted": "Effectuer des vacations d'enseignement (monitorat / ATER) pendant et après sa thèse pour constituer un dossier pédagogique solide indispensable devant les comités de sélection.",
        "aiImpact": {
            "level": "Modéré / Renouvellement pédagogique",
            "opportunities": [
                "Création de jumeaux numériques d'affleurements géologiques pour préparer les écoles de terrain en réalité virtuelle",
                "Personnalisation des exercices de travaux dirigés par IA tuteur"
            ],
            "challenges": [
                "Adapter l'évaluation des étudiants face aux outils génératifs d'écriture"
            ],
            "humanEdge": "L'apprentissage de la lecture des roches sur le terrain, sous la pluie ou le soleil, avec un marteau à la main, restera toujours une expérience humaine transmise de maître à élève."
        },
        "africaContext": {
            "title": "L'Enseignant-Chercheur au Sénégal : Former les Bâtisseurs de l'Afrique",
            "description": "À l'Université Cheikh Anta Diop (UCAD), à l'UGB de Saint-Louis et à l'Université du Sine Saloum El-Hâdj Ibrahima NIASS (USSEIN), les enseignants-chercheurs en géosciences sont les formateurs incontournables des cadres miniers, hydrogéologues et géotechniciens qui construisent le Sénégal émergent. Ils sont évalués selon les standards rigoureux du CAMES.",
            "keyInstitutions": [
                "Faculté des Sciences et Techniques (FST - UCAD)",
                "Institut des Sciences de la Terre (IST - UCAD)",
                "Conseil Africain et Malgache pour l'Enseignement Supérieur (CAMES)",
                "UGB Saint-Louis (Département des Sciences Appliquées)"
            ],
            "projects": [
                "Modernisation des programmes universitaires en géosciences appliquées aux mines et au pétrole",
                "Organisation des écoles de terrain annuelles dans le Sénégal oriental et la presqu'île du Cap-Vert",
                "Formation doctorale régionale accueillant des étudiants de toute l'Afrique de l'Ouest"
            ],
            "opportunities": "Recrutement de maîtres-assistants selon les grilles de la fonction publique universitaire et du CAMES."
        },
        "salary": "🇫🇷 France : 32 000 - 65 000 € brut/an • 🇸🇳 Sénégal : 550 000 - 2 100 000 FCFA net/mois",
        "connectedFamilies": [
            "education-formation",
            "sciences-biotech",
            "environnement-climat",
            "culture-medias"
        ],
        "relatedJobs": [
            "chercheur-geosciences",
            "geologue",
            "hydrogeologue",
            "paleontologue",
            "journaliste-scientifique-terre"
        ],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Fiche Métier Enseignant-Chercheur - Département Géosciences",
                "url": "https://sfa.univ-poitiers.fr/geosciences/debouches-professionnels/enseignant-chercheur/",
                "type": "metier"
            },
            {
                "organization": "Ministère de l'Enseignement Supérieur et de la Recherche",
                "title": "Carrières de l'enseignement supérieur et statuts MCF / PR",
                "url": "https://www.enseignementsup-recherche.gouv.fr",
                "type": "institutionnel"
            }
        ],
        "sourcePoitiers": true,
        "sourceBRGM": true,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Un enseignant-chercheur en géosciences consacre en moyenne 192 heures de cours par an devant les étudiants et au moins autant d'heures sur le terrain, en plus de ses activités de recherche et d'encadrement doctoral.",
            "pourquoi": "Le statut universitaire français et international repose sur le principe fondamental du lien indissoluble entre recherche vivante et enseignement.",
            "a_retenir": "Les enseignants-chercheurs forment les générations de géologues qui relèveront les défis de l'eau, du climat et des ressources minérales de demain."
        },
        "salaryDetail": {
            "france": {
                "entry": 32000,
                "mid": 45000,
                "expert": 65000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : Grilles indiciaires Maître de conférences / Professeur des universités"
            },
            "senegal": {
                "entry": 550000,
                "mid": 1050000,
                "expert": 2100000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés selon les échelons CAMES (Maître-Assistant à Professeur Titulaire) à l'UCAD"
            }
        },
        "geosciencesPedagogyDetail": {
            "pathway": "De l'amphithéâtre au camp de terrain",
            "steps": [
                "📚 Enseignement théorique en amphi",
                "🔬 Travaux pratiques au microscope",
                "🏞️ Encadrement d'écoles de terrain",
                "🧪 Projets de laboratoire tuteurés",
                "📝 Direction de thèses de doctorat",
                "🌍 Publications scientifiques de pointe"
            ]
        }
    },
    {
        "id": "ingenieur-recherche-geosciences",
        "slug": "ingenieur-recherche-geosciences",
        "title": "Ingénieur de Recherche en Géosciences",
        "aliases": [
            "Ingénieur de recherche CNRS/Université",
            "Expert plateformes analytiques géosciences",
            "Research Engineer - Earth Sciences"
        ],
        "icon": "🔬",
        "familyId": "sciences-terre-geosciences",
        "domain": "Recherche scientifique",
        "domainId": "recherche-scientifique-terre",
        "subdomain": "Plateformes Analytiques & Grands Instruments",
        "shortDescription": "Pilote des équipements de pointe dans les laboratoires de géosciences, il développe des protocoles analytiques inédits, gère les plateformes de microscopie et spectroscopie et soutient les programmes scientifiques.",
        "longDescription": "Dans les laboratoires de recherche en sciences de la Terre, les instruments de mesure atteignent une sophistication extrême (salles blanches, spectromètres de masse haute résolution, microsondes électroniques, micro-tomographes 3D). L'ingénieur de recherche (IR) est le garant de cette excellence instrumentale. Possédant une expertise scientifique de niveau doctorat ou ingénieur, il développe de nouvelles méthodologies analytiques, adapte les machines aux besoins spécifiques des projets, forme les chercheurs et doctorants et conduit ses propres expérimentations pour repousser les limites de la précision géochimique et minéralogique.",
        "simpleDefinition": "Ingénieur de très haut niveau qui pilote les machines scientifiques les plus complexes d'un laboratoire de géologie et invente de nouvelles méthodes pour analyser les roches.",
        "level": "Bac +5 à Bac +8 (Doctorat / Diplôme d'Ingénieur)",
        "missions": [
            "Piloter et maintenir au plus haut niveau de performance les plateformes analytiques lourdes du laboratoire",
            "Développer et valider de nouvelles méthodes d'analyse géochimique, isotopique ou d'imagerie cristalline",
            "Conseiller et former les chercheurs, enseignants et doctorants sur les protocoles d'échantillonnage et de mesure",
            "Assurer la traçabilité métrologique, le contrôle qualité et la justesse des données analytiques produites",
            "Rédiger les cahiers des charges pour l'acquisition de nouveaux équipements scientifiques de pointe",
            "Participer à la rédaction d'articles scientifiques en valorisant les développements instrumentaux innovants"
        ],
        "workEnvironment": "Laboratoires universitaires et centres de recherche d'État (CNRS, BRGM, IFREMER), au sein de plateformes d'analyse sous atmosphère contrôlée et salles blanches.",
        "typicalDay": [
            {
                "time": "08h30",
                "activity": "Calibrage du spectromètre de masse et injection de solutions étalons internationales pour contrôler la dérive analytique"
            },
            {
                "time": "10h30",
                "activity": "Séance de formation d'un nouveau doctorant à la préparation d'échantillons en salle blanche ultra-propre"
            },
            {
                "time": "12h30",
                "activity": "Déjeuner de travail avec le comité de pilotage de la plateforme analytique"
            },
            {
                "time": "14h00",
                "activity": "Développement d'un nouveau protocole de séparation chromatographique pour doser les terres rares à l'état d'ultra-traces"
            },
            {
                "time": "16h00",
                "activity": "Diagnostic et résolution d'un problème de vide sur la colonne d'un microscope électronique"
            },
            {
                "time": "17h30",
                "activity": "Rédaction d'une demande de subvention d'équipement auprès de la région pour l'achat d'un nouveau laser d'ablation"
            }
        ],
        "companyRole": "Bras armé technologique de la recherche, il permet aux scientifiques de faire des découvertes qui seraient impossibles sans ses instruments.",
        "skills": {
            "technical": [
                "Spectrométrie de masse (ICP-MS, TIMS) et couplage avec ablation laser",
                "Microscopie électronique analytique (MEB, MET, microsonde WDS)",
                "Diffraction des rayons X (DRX) et spectroscopies optiques",
                "Métrologie, étalonnage et maîtrise des incertitudes de mesure",
                "Chimie en salle blanche et manipulation d'acides ultra-purs (HF, HNO3)",
                "Maintenance technique de systèmes sous ultra-vide et électronique de précision"
            ],
            "human": [
                "Excellente rigueur méthodologique et minutie expérimentale",
                "Sens du service et goût prononcé pour la transmission technique",
                "Capacité de diagnostic rapide en cas de panne instrumentale",
                "Esprit d'innovation technologique"
            ],
            "tools": [
                "ICP-MS haute résolution",
                "Système d'ablation laser 193 nm",
                "MEB-EDX",
                "Diffractomètre RX",
                "Systèmes de purification d'eau Milli-Q",
                "Logiciels de pilotage d'instruments"
            ]
        },
        "geosciencesPedagogy": "Parcours clé « De l'échantillon brut à la mesure ultra-précise » : 🪨 Échantillon géologique rare ➔ 🧹 Préparation en salle blanche ➔ 🧪 Dissolution sous acides ultra-purs ➔ ⚡ Ionisation dans le plasma à 8 000 °C ➔ 🎯 Séparation de masse magnétique ➔ 📊 Calcul des ratios isotopiques ➔ 📜 Certification des données certifiées",
        "studies": {
            "pathway": [
                {
                    "level": "Bac +5",
                    "degree": "Diplôme d'Ingénieur chimiste/physicien ou Master STPE Recherche"
                },
                {
                    "level": "Bac +8",
                    "degree": "Doctorat en Géosciences, Géochimie ou Chimie Analytique"
                },
                {
                    "level": "Recrutement",
                    "degree": "Concours externe de la fonction publique (CNRS / Université, corps des Ingénieurs de Recherche - IR)"
                }
            ],
            "schools": [
                {
                    "name": "Université de Poitiers - Faculté des Sciences (Département Géosciences / UFR SFA)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "CNRS - Direction des Ressources Humaines (Concours BAP B - Sciences du Vivant, de la Terre et de l'Environnement)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut des Sciences de la Terre (IST - UCAD Dakar)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Habilitation risque chimique niveau 2",
                "Habilitation sécurité laser et radioprotection"
            ]
        },
        "career": {
            "sectors": [
                "Organismes publics de recherche (CNRS, BRGM, CEA, IRD)",
                "Universités et grands instituts de géosciences",
                "Laboratoires d'analyses géochimiques commerciales (SGS, ALS Geochemistry)"
            ],
            "companies": [
                "CNRS",
                "BRGM",
                "Université de Poitiers",
                "ALS Geochemistry",
                "IFREMER"
            ],
            "evolution": [
                "Ingénieur de recherche 2e classe puis 1re classe",
                "Ingénieur de recherche hors classe",
                "Responsable d'une plateforme instrumentale mutualisée",
                "Directeur technique de laboratoire"
            ],
            "pros": [
                "Manipulation quotidienne d'instruments scientifiques uniques et fascinants",
                "Sécurité de l'emploi (fonction publique de recherche)",
                "Contribution majeure à des publications internationales sans la pression d'enseignement"
            ],
            "cons": [
                "Concours de recrutement sélectif",
                "Responsabilité lourde sur la maintenance de matériels à plusieurs millions d'euros",
                "Budget parfois contraint pour le renouvellement des pièces d'usure"
            ]
        },
        "gettingStarted": "Effectuer des stages longs dans des plateformes d'analyse instrumentale (comme celle de l'IC2MP à Poitiers) et développer des compétences en maintenance et automatisation analytique.",
        "aiImpact": {
            "level": "Élevé / Automatisation des séries d'analyses",
            "opportunities": [
                "Diagnostic prédictif des pannes d'instruments par IA",
                "Correction automatique des dérives de sensibilité en cours de passe",
                "Dépouillement automatisé des spectres d'ablation laser"
            ],
            "challenges": [
                "Garantir la fiabilité absolue des calibrages métrologiques"
            ],
            "humanEdge": "La résolution des pannes physiques complexes et le développement de nouveaux protocoles chimiques restent l'œuvre de l'ingénieur."
        },
        "africaContext": {
            "title": "L'Ingénieur de Recherche au Sénégal : Les Plateformes d'Analyse Régionales",
            "description": "À Dakar, l'UCAD, l'IFAN et le Centre de Suivi Écologique s'équipent progressivement de laboratoires modernes pour analyser sur place les carottes minières, les sols et les eaux sans dépendre systématiquement d'envois coûteux à l'étranger. L'ingénieur de recherche y est une ressource rare et indispensable.",
            "keyInstitutions": [
                "Institut des Sciences de la Terre (IST - UCAD)",
                "Laboratoires de l'IFAN Cheikh Anta Diop",
                "Centre de Suivi Écologique (CSE Dakar)",
                "Laboratoire National des Mines (Ministère des Mines)"
            ],
            "projects": [
                "Renforcement des capacités analytiques locales pour l'or et les métaux critiques",
                "Contrôle qualité des eaux potables et surveillance des nappes profondes",
                "Analyses granulométriques et sédimentologiques pour les projets portuaires"
            ],
            "opportunities": "Postes de cadres techniques dans les laboratoires de recherche publics et les succursales de multinationales d'audit analytique (SGS, Bureau Veritas)."
        },
        "salary": "🇫🇷 France : 30 000 - 58 000 € brut/an • 🇸🇳 Sénégal : 450 000 - 1 700 000 FCFA net/mois",
        "connectedFamilies": [
            "sciences-biotech",
            "industrie-mecanique",
            "data-decision",
            "education-formation"
        ],
        "relatedJobs": [
            "chercheur-geosciences",
            "ingenieur-etudes-geosciences",
            "technicien-laboratoire-geosciences",
            "mineralogiste",
            "geologue"
        ],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Master EUR STPE Matériaux-Minéraux - Débouché Ingénieur de recherche",
                "url": "https://sfa.univ-poitiers.fr/geosciences/formations/master-eur-parcours-materiaux-mineraux/",
                "type": "formation"
            },
            {
                "organization": "CNRS",
                "title": "Corps des Ingénieurs de Recherche (BAP B)",
                "url": "https://carrieres.cnrs.fr",
                "type": "institutionnel"
            }
        ],
        "sourcePoitiers": true,
        "sourceBRGM": true,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Un spectromètre de masse à haute résolution est capable de détecter la présence d'un seul atome d'un métal rare dissous au milieu d'un milliard de molécules d'eau.",
            "pourquoi": "L'ionisation par torche à plasma d'argon à plus de 8 000 °C casse les molécules pour ne compter individuellement que les ions d'intérêt.",
            "a_retenir": "L'ingénieur de recherche est le chef d'orchestre de ces instruments d'ultra-précision sans lesquels la géochimie moderne serait aveugle."
        },
        "salaryDetail": {
            "france": {
                "entry": 30000,
                "mid": 42000,
                "expert": 58000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : Grilles indiciaires Ingénieur de Recherche (IR) - Fonction publique de recherche"
            },
            "senegal": {
                "entry": 450000,
                "mid": 850000,
                "expert": 1700000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés pour les ingénieurs de plateformes d'analyses à Dakar"
            }
        },
        "geosciencesPedagogyDetail": {
            "pathway": "De l'échantillon brut à la mesure ultra-précise",
            "steps": [
                "🪨 Échantillon géologique rare",
                "🧹 Préparation en salle blanche",
                "🧪 Dissolution sous acides ultra-purs",
                "⚡ Ionisation dans le plasma à 8 000 °C",
                "🎯 Séparation de masse magnétique",
                "📊 Calcul des ratios isotopiques",
                "📜 Certification des données certifiées"
            ]
        }
    },
    {
        "id": "ingenieur-etudes-geosciences",
        "slug": "ingenieur-etudes-geosciences",
        "title": "Ingénieur d'Études en Sciences de la Terre",
        "aliases": [
            "Ingénieur d'études géologue",
            "Ingénieur d'études environnementales",
            "Chargé d'études géosciences",
            "Study Engineer - Earth Sciences"
        ],
        "icon": "📋",
        "familyId": "sciences-terre-geosciences",
        "domain": "Recherche scientifique",
        "domainId": "recherche-scientifique-terre",
        "subdomain": "Appui Technique & Gestion de Données Géologiques",
        "shortDescription": "Pivot technique opérationnel, il applique les méthodes scientifiques établies, gère les bases de données géologiques, coordonne les expérimentations et rédige les rapports techniques de projets.",
        "longDescription": "Dans les laboratoires de recherche et les bureaux d'études spécialisés, l'ingénieur d'études (IE) fait le lien entre la conception théorique des chercheurs et la mise en œuvre pratique. Il assure la conduite autonome des séries d'analyses, le traitement statistique et spatial des données de terrain, la gestion des collections géologiques et la rédaction des dossiers techniques. Il maîtrise l'ensemble de la chaîne méthodologique, depuis le prélèvement d'échantillons jusqu'à la mise en forme finale des résultats.",
        "simpleDefinition": "Ingénieur qui réalise les études techniques détaillées, organise les expériences scientifiques et analyse les mesures géologiques pour répondre aux questions des chercheurs et clients.",
        "level": "Bac +5 (Master STPE / Diplôme d'Ingénieur)",
        "missions": [
            "Mettre en œuvre les protocoles de caractérisation physique et chimique des roches et sédiments",
            "Organiser la collecte, le stockage et la traçabilité des échantillons géologiques (carottothèques, lithothèques)",
            "Effectuer les traitements statistiques et cartographiques des campagnes de mesures",
            "Participer à la rédaction des rapports d'études techniques, dossiers d'impact et notices explicatives",
            "Assurer la maintenance de premier niveau des instruments de laboratoire courants",
            "Coordonner l'activité des techniciens et stagiaires au sein de l'équipe de projet"
        ],
        "workEnvironment": "Laboratoires de géosciences, bureaux d'études et services techniques publics, avec un équilibre entre paillasse de laboratoire et poste informatique d'analyse de données.",
        "typicalDay": [
            {
                "time": "08h30",
                "activity": "Vérification des réactifs et lancement d'une série de tamisages granulométriques au vibreur mécanique"
            },
            {
                "time": "10h00",
                "activity": "Saisie des poids de fractions granulométriques dans un tableur et calcul des diamètres caractéristiques (d10, d50, d60)"
            },
            {
                "time": "11h30",
                "activity": "Séance de microscopie optique pour décrire la morphoscopie des grains de quartz (émoussés-luisants, ronds-mats)"
            },
            {
                "time": "13h30",
                "activity": "Déjeuner avec l'équipe de techniciens de laboratoire"
            },
            {
                "time": "14h30",
                "activity": "Structuration des résultats dans la base de données SIG du projet pour les géologues de terrain"
            },
            {
                "time": "16h30",
                "activity": "Rédaction de la section 'Résultats analytiques' du rapport d'étude hydrogéologique"
            },
            {
                "time": "17h45",
                "activity": "Archivage et étiquetage minutieux des flacons d'échantillons en salle de stockage"
            }
        ],
        "companyRole": "Cadre technique rigoureux, il garantit la fiabilité opérationnelle et la livraison dans les délais des études géologiques.",
        "skills": {
            "technical": [
                "Protocoles d'analyses sédimentologiques et pétrographiques standardisés",
                "Traitement de données statistiques sous R ou Python",
                "Cartographie thématique sous SIG (QGIS)",
                "Gestion de bases de données relationnelles géologiques",
                "Rédaction technique et respect des normes qualité (ISO 9001, ISO 17025)",
                "Connaissance des réglementations environnementales et minières"
            ],
            "human": [
                "Rigueur, méthode et sens prononcé de l'organisation",
                "Aptitude au travail d'équipe et esprit collaboratif",
                "Clarté d'expression écrite et esprit de synthèse",
                "Polyvalence technique face à la diversité des échantillons"
            ],
            "tools": [
                "Tamis de laboratoire et vibreur",
                "QGIS",
                "R / Excel avancé",
                "Microscope binoculaire",
                "Logiciels de gestion de laboratoire LIMS"
            ]
        },
        "geosciencesPedagogy": "Parcours clé « De la commande d'étude au rapport technique » : 📋 Réception de la commande d'étude ➔ 📦 Enregistrement au LIMS & traçabilité ➔ 🧪 Exécution des séries de mesures ➔ 📊 Contrôle qualité & dépouillement ➔ 🗺️ Cartographie & mise en forme ➔ 📝 Rédaction du rapport technique",
        "studies": {
            "pathway": [
                {
                    "level": "Bac +3",
                    "degree": "Licence Sciences de la Terre ou Licence Pro Géosciences"
                },
                {
                    "level": "Bac +5",
                    "degree": "Master Sciences de la Terre (STPE Université de Poitiers) ou Diplôme d'Ingénieur"
                },
                {
                    "level": "Recrutement",
                    "degree": "Concours de la fonction publique (corps des Ingénieurs d'Études - IE) ou recrutement direct en bureau d'études"
                }
            ],
            "schools": [
                {
                    "name": "Université de Poitiers - Faculté des Sciences (Département Géosciences / UFR SFA)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université de Bordeaux / Université de Bretagne Occidentale (Géosciences)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut des Sciences de la Terre (IST - UCAD Dakar)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification Qualité Laboratoire ISO 17025",
                "Habilitation Sauveteur Secouriste du Travail"
            ]
        },
        "career": {
            "sectors": [
                "Universités et instituts de recherche (CNRS, BRGM, INRAE)",
                "Bureaux d'études privés en géologie, eau et environnement",
                "Collectivités territoriales (services eau et assainissement)",
                "Industrie extractive et cimenteries"
            ],
            "companies": [
                "BRGM",
                "Antea Group",
                "Université de Poitiers",
                "Ginger CEBTP",
                "Bureaux d'ingénierie régionaux"
            ],
            "evolution": [
                "Ingénieur d'études principal",
                "Responsable de pôle d'études techniques",
                "Ingénieur de recherche (par concours interne)",
                "Chef de projet environnemental"
            ],
            "pros": [
                "Équilibre entre rigueur scientifique et pragmatisme opérationnel",
                "Diversité des sujets d'études abordés",
                "Stabilité professionnelle et reconnaissance technique"
            ],
            "cons": [
                "Travail répétitif lors des grandes campagnes d'analyses systématiques",
                "Évolution vers les plus hautes responsabilités académiques limitée sans doctorat",
                "Pression des délais de rendu des rapports"
            ]
        },
        "gettingStarted": "Soigner la rigueur de ses rapports de stage de master et maîtriser parfaitement les logiciels de traitement de données (R, QGIS) et la gestion de carottothèque.",
        "aiImpact": {
            "level": "Modéré / Gain de productivité rédactionnelle",
            "opportunities": [
                "Automatisation de la génération de graphiques et de synthèses statistiques",
                "Aide à la mise en forme de rapports techniques volumineux",
                "Contrôle automatique de cohérence des données LIMS"
            ],
            "challenges": [
                "Savoir vérifier la véracité des synthèses produites automatiquement"
            ],
            "humanEdge": "La validation de la pertinence des résultats au regard du contexte géologique de terrain reste la responsabilité de l'ingénieur."
        },
        "africaContext": {
            "title": "L'Ingénieur d'Études au Sénégal : Cheville Ouvrière des Projets Territoriaux",
            "description": "Au Sénégal, l'ingénieur d'études géologiques est la cheville ouvrière des cabinets d'ingénierie dakaroise et des ministères sectoriels. Il dépouille les données des forages d'eau, prépare les dossiers de demande de permis miniers et assure le suivi documentaire des projets d'infrastructure.",
            "keyInstitutions": [
                "Institut des Sciences de la Terre (IST - UCAD)",
                "Direction des Mines et de la Géologie (DMG)",
                "DGPRE (Direction des Ressources en Eau)",
                "Bureaux d'ingénierie conseil de Dakar"
            ],
            "projects": [
                "Études de faisabilité technique pour les forages agricoles du bassin arachidier",
                "Tenue du registre national des données géologiques et des concessions minières",
                "Dossiers techniques d'aménagement portuaire et d'assainissement urbain"
            ],
            "opportunities": "Très bonne insertion dans les bureaux d'études privés, les agences de coopération et les agences nationales d'exécution."
        },
        "salary": "🇫🇷 France : 26 000 - 48 000 € brut/an • 🇸🇳 Sénégal : 350 000 - 1 400 000 FCFA net/mois",
        "connectedFamilies": [
            "sciences-biotech",
            "environnement-climat",
            "data-decision",
            "btp-architecture"
        ],
        "relatedJobs": [
            "ingenieur-recherche-geosciences",
            "geologue",
            "technicien-laboratoire-geosciences",
            "hydrogeologue",
            "geomaticien-cartographe-geologue"
        ],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Master EUR STPE Matériaux-Minéraux - Débouché Ingénieur d'études",
                "url": "https://sfa.univ-poitiers.fr/geosciences/formations/master-eur-parcours-materiaux-mineraux/",
                "type": "formation"
            },
            {
                "organization": "Ministère de l'Enseignement Supérieur",
                "title": "Corps des Ingénieurs d'Études (BAP B)",
                "url": "https://www.enseignementsup-recherche.gouv.fr",
                "type": "institutionnel"
            }
        ],
        "sourcePoitiers": true,
        "sourceBRGM": true,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Dans un grand projet d'infrastructure, le coût des études géotechniques et géologiques préalables représente moins de 1% du budget total, mais prévient plus de 80% des surcoûts et contentieux potentiels.",
            "pourquoi": "Découvrir une poche d'argile molle ou une cavité karstique pendant les travaux coûte 50 fois plus cher que de la détecter à l'avance.",
            "a_retenir": "L'ingénieur d'études apporte la rigueur technique qui sécurise les investissements colossaux des sociétés modernes."
        },
        "salaryDetail": {
            "france": {
                "entry": 26000,
                "mid": 36000,
                "expert": 48000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : Grilles indiciaires Ingénieur d'Études (IE) & Syntec Ingénierie"
            },
            "senegal": {
                "entry": 350000,
                "mid": 700000,
                "expert": 1400000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés en bureau d'études et agences publiques à Dakar"
            }
        },
        "geosciencesPedagogyDetail": {
            "pathway": "De la commande d'étude au rapport technique",
            "steps": [
                "📋 Réception de la commande d'étude",
                "📦 Enregistrement au LIMS & traçabilité",
                "🧪 Exécution des séries de mesures",
                "📊 Contrôle qualité & dépouillement",
                "🗺️ Cartographie & mise en forme",
                "📝 Rédaction du rapport technique"
            ]
        }
    },
    {
        "id": "geoarcheologue",
        "slug": "geoarcheologue",
        "title": "Géoarchéologue / Reconstitueur des Paysages Anciens",
        "aliases": [
            "Archéologue sédimentologue",
            "Géologue du quaternaire",
            "Paléoenvironnementaliste",
            "Geoarchaeologist"
        ],
        "icon": "🏺",
        "familyId": "sciences-terre-geosciences",
        "domain": "Géologie",
        "domainId": "geologie-fondamentale-appliquee",
        "subdomain": "Géoarchéologie & Quaternaire",
        "shortDescription": "Au confluent de la géologie et de l'archéologie, il étudie les sédiments, les alluvions et les sols des sites antiques pour comprendre comment vivaient nos ancêtres et comment le paysage a évolué.",
        "longDescription": "Les sociétés humaines du passé ont toujours dépendu étroitement de leur environnement géologique : cours d'eau, plaines fertiles, grottes karstiques et carrières de pierre. Le géoarchéologue est le spécialiste qui fait parler les couches de terre et de sédiments sur les chantiers de fouilles. Par l'analyse de la stratigraphie, de la micromorphologie des sols (lames minces de sédiments observées au microscope), de la dynamique des fleuves et de l'érosion, il reconstitue les paléoenvironnements, date les crues dévastatrices du passé, distingue les dépôts naturels des accumulations humaines (foyers, déchets, sols d'habitat) et explique comment les changements climatiques anciens ont influencé les civilisations.",
        "simpleDefinition": "Scientifique qui applique les méthodes de la géologie aux fouilles archéologiques pour comprendre le paysage dans lequel vivaient les hommes préhistoriques et antiques.",
        "level": "Bac +5 à Bac +8 (Master Géoarchéologie / Doctorat)",
        "missions": [
            "Intervenir sur les chantiers d'archéologie préventive et programmée pour décrire les coupes stratigraphiques",
            "Prélever des blocs de sédiments non perturbés et fabriquer des lames minces pour analyse micromorphologique",
            "Analyser la granulométrie, la matière organique et la susceptibilité magnétique des couches archéologiques",
            "Reconstituer la dynamique fluviale, lacustre ou côtière contemporaine de l'occupation humaine (paléogéographie)",
            "Identifier l'origine géographique et géologique des matériaux utilisés par les anciens (pierres de taille, céramiques, silex)",
            "Collaborer avec les archéologues, palynologues et datateurs (carbone 14, OSL) pour bâtir la chronologie du site",
            "Publier les résultats dans les rapports officiels d'opération archéologique et les revues scientifiques spécialisées"
        ],
        "workEnvironment": "Chantiers de fouilles archéologiques en extérieur (souvent préalables aux grands chantiers BTP), tranchées de diagnostic parfois boueuses, et laboratoire de micromorphologie et sédimentologie.",
        "typicalDay": [
            {
                "time": "08h30",
                "activity": "Arrivée sur un chantier de fouille préventive INRAP dans une plaine alluviale avant la construction d'une rocade"
            },
            {
                "time": "09h30",
                "activity": "Nettoyage de la coupe stratigraphique d'une tranchée de 3 m de haut à la truelle et au couteau"
            },
            {
                "time": "11h00",
                "activity": "Description des unités sédimentaires : repérage d'un niveau d'inondation antique scellant un sol d'habitat gallo-romain"
            },
            {
                "time": "13h00",
                "activity": "Déjeuner avec l'équipe d'archéologues et débat sur la datation d'une céramique trouvée dans le limon"
            },
            {
                "time": "14h30",
                "activity": "Plâtrage et prélèvement d'un bloc de sédiment orienté (boîte Kubiëna) pour analyse micromorphologique"
            },
            {
                "time": "16h30",
                "activity": "Retour au laboratoire : imprégnation à la résine sous vide d'un bloc prélevé la semaine précédente"
            },
            {
                "time": "18h00",
                "activity": "Observation au microscope polarisant d'une lame mince montrant des micro-cendres et des traces de piétinement de bétail"
            }
        ],
        "companyRole": "Décodeur des paysages disparus, il apporte la caution sédimentologique et temporelle qui valide l'interprétation des archéologues.",
        "skills": {
            "technical": [
                "Sédimentologie continentale (dynamique fluviatile, colluviale, éolienne, lacustre)",
                "Micromorphologie des sols et sédiments archéologiques",
                "Géomorphologie du Quaternaire et géologie de surface",
                "Méthodes de datation physique (radiocarbone 14C, luminescence stimulée optiquement OSL, paléomagnétisme)",
                "Pétroarchéologie (provenance des roches taillées et matériaux de construction)",
                "Cartographie géomorphologique et SIG appliqué à l'archéologie"
            ],
            "human": [
                "Sens aigu de l'observation fine des nuances de terre et de sédiments",
                "Passion pour l'histoire humaine et l'évolution des paysages naturels",
                "Excellente capacité de travail en équipe pluridisciplinaire",
                "Patience et méticulosité sur le terrain de fouilles"
            ],
            "tools": [
                "Truelle archéologique WHS",
                "Boîtes de prélèvement Kubiëna",
                "Microscope polarisant Leica",
                "Boussole de géologue",
                "QGIS",
                "Colorimètre Munsell"
            ]
        },
        "geosciencesPedagogy": "Parcours clé « De la strate sédimentaire à l'histoire humaine » : ⛏️ Tranchée de fouille archéologique ➔ 📷 Relevé de la coupe stratigraphique ➔ 📦 Prélèvement de bloc sous résine ➔ 🔬 Micromorphologie au microscope ➔ ⚛️ Datation isotopique (14C / OSL) ➔ 🗺️ Reconstitution du paléopaysage ➔ 📖 Récit de l'occupation humaine antique",
        "studies": {
            "pathway": [
                {
                    "level": "Bac +3",
                    "degree": "Licence Sciences de la Terre ou Licence Histoire / Archéologie (avec options géosciences)"
                },
                {
                    "level": "Bac +5",
                    "degree": "Master STPE Géosciences (Université de Poitiers - débouché Géoarchéologue) ou Master Archéométrie"
                },
                {
                    "level": "Bac +8",
                    "degree": "Doctorat en Géoarchéologie / Géomorphologie du Quaternaire"
                }
            ],
            "schools": [
                {
                    "name": "Université de Poitiers - Master STPE (Débouché Géoarchéologue cité par l'UFR SFA)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut National de Recherches Archéologiques Préventives (INRAP)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Panthéon-Sorbonne / Paris 1 (Archéométrie et Géoarchéologie)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut Fondamental d'Afrique Noire (IFAN Cheikh Anta Diop - Laboratoire d'Archéologie)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Agrément d'archéologue préventif d'État",
                "Habilitation sécurité chantiers BTP"
            ]
        },
        "career": {
            "sectors": [
                "Archéologie préventive (INRAP, collectivités territoriales, sociétés privées agréées)",
                "Organismes de recherche (CNRS, MNHN, universités)",
                "Musées d'histoire et de patrimoine",
                "Bureaux d'études d'impact paysager et patrimonial"
            ],
            "companies": [
                "INRAP",
                "CNRS",
                "Évéha",
                "Archeodunum",
                "Musées nationaux",
                "IFAN Dakar"
            ],
            "evolution": [
                "Responsable de secteur géoarchéologie",
                "Directeur d'opération archéologique",
                "Chercheur titulaire au CNRS",
                "Conservateur du patrimoine géologique et archéologique"
            ],
            "pros": [
                "Mariage unique entre la fascination historique et la rigueur des sciences de la Terre",
                "Travail d'enquête policière grandeur nature sur le passé de notre espèce",
                "Reconnaissance d'une expertise rare"
            ],
            "cons": [
                "Intervention d'urgence sur chantiers BTP avec contraintes de délais très strictes",
                "Conditions climatiques rudes en hiver ou forte chaleur dans les tranchées",
                "Financements de recherche parfois compétitifs"
            ]
        },
        "gettingStarted": "Effectuer des stages de fouilles archéologiques programmées dès la licence tout en validant des modules solides de sédimentologie et de pétrographie.",
        "aiImpact": {
            "level": "Modéré / Aide à l'imagerie",
            "opportunities": [
                "Reconnaissance automatique de micro-inclusions sédimentaires par vision par ordinateur",
                "Modélisation 3D photogrammétrique des coupes stratigraphiques complexes",
                "Cartographie prédictive des sites sous alluvions"
            ],
            "challenges": [
                "L'extrême complexité des mélanges sédimentaires naturels et humains"
            ],
            "humanEdge": "La lecture fine du geste de l'artisan antique dans la poussière d'un sol reste un dialogue intime entre humains que l'IA ne peut comprendre."
        },
        "africaContext": {
            "title": "Le Géoarchéologue au Sénégal : Berceau des Civilisations Sahéliennes",
            "description": "Au Sénégal et dans la vallée du fleuve Sénégal, le géoarchéologue explore les amas coquilliers du delta du Saloum (classés UNESCO), les mégalithes de Sénégambie, les sites paléolithiques de la Falémé et les anciens métallurgies du fer. Les équipes de l'IFAN Cheikh Anta Diop y mènent des recherches pionnières mondialement saluées.",
            "keyInstitutions": [
                "Laboratoire d'Archéologie de l'IFAN Cheikh Anta Diop (UCAD Dakar)",
                "Direction du Patrimoine Culturel du Sénégal",
                "Institut des Sciences de la Terre (IST - UCAD)",
                "Université Gaston Berger de Saint-Louis (UGB)"
            ],
            "projects": [
                "Recherches géoarchéologiques le long de la vallée de la Falémé (Paléolithique et Néolithique)",
                "Étude de la formation des buttes et amas coquilliers de Joal-Fadiouth et du Saloum",
                "Paléoenvironnements holocènes et peuplements anciens de la Vallée du Sénégal"
            ],
            "opportunities": "Postes de chercheurs, enseignants et experts auprès de l'UNESCO et des projets de mise en valeur du patrimoine national."
        },
        "salary": "🇫🇷 France : 26 000 - 50 000 € brut/an • 🇸🇳 Sénégal : 350 000 - 1 500 000 FCFA net/mois",
        "connectedFamilies": [
            "lettres-langues-sciences-humaines",
            "culture-medias",
            "environnement-climat",
            "sciences-biotech"
        ],
        "relatedJobs": [
            "geologue",
            "paleontologue",
            "pedologue",
            "historien",
            "chercheur-geosciences"
        ],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Master EUR STPE Matériaux-Minéraux - Débouché Géoarchéologue",
                "url": "https://sfa.univ-poitiers.fr/geosciences/formations/master-eur-parcours-materiaux-mineraux/",
                "type": "formation"
            },
            {
                "organization": "INRAP",
                "title": "La géoarchéologie en archéologie préventive",
                "url": "https://www.inrap.fr",
                "type": "secteur"
            }
        ],
        "sourcePoitiers": true,
        "sourceBRGM": true,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En analysant les couches d'alluvions du Nil, les géoarchéologues ont démontré que plusieurs chutes d'empires pharaoniques coïncidaient précisément avec de méga-sécheresses ayant tari les crues fertilisantes du fleuve.",
            "pourquoi": "La baisse des sédiments fertiles provoquait famines et effondrement du pouvoir central.",
            "a_retenir": "La géoarchéologie nous rappelle que la destinée des civilisations est indissociable de la santé des écosystèmes terrestres qui les nourrissent."
        },
        "salaryDetail": {
            "france": {
                "entry": 26000,
                "mid": 36000,
                "expert": 50000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : Grilles INRAP, CNRS & Université de Poitiers"
            },
            "senegal": {
                "entry": 350000,
                "mid": 750000,
                "expert": 1500000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés pour les chercheurs d'instituts et projets de patrimoine à Dakar"
            }
        },
        "geosciencesPedagogyDetail": {
            "pathway": "De la strate sédimentaire à l'histoire humaine",
            "steps": [
                "⛏️ Tranchée de fouille archéologique",
                "📷 Relevé de la coupe stratigraphique",
                "📦 Prélèvement de bloc sous résine",
                "🔬 Micromorphologie au microscope",
                "⚛️ Datation isotopique (14C / OSL)",
                "🗺️ Reconstitution du paléopaysage",
                "📖 Récit de l'occupation humaine antique"
            ]
        }
    },
    {
        "id": "journaliste-scientifique-terre",
        "slug": "journaliste-scientifique-terre",
        "title": "Journaliste & Médiateur Scientifique en Géosciences",
        "aliases": [
            "Journaliste sciences de la Terre",
            "Médiateur en sciences géologiques",
            "Rédacteur scientifique géosciences",
            "Science Journalist - Earth Sciences"
        ],
        "icon": "📰",
        "familyId": "sciences-terre-geosciences",
        "domain": "Enseignement & médiation scientifique",
        "domainId": "enseignement-mediation-terre",
        "subdomain": "Médiation Scientifique & Vulgarisation",
        "shortDescription": "Passeur de savoirs entre les laboratoires et le grand public, il traduit les découvertes sur les séismes, le climat, les fossiles et les ressources minérales en récits passionnants et accessibles.",
        "longDescription": "Comment expliquer la dérive des continents, le fonctionnement d'un volcan, l'origine de l'eau souterraine ou l'importance des métaux rares sans perdre son auditoire dans un jargon technique hermétique ? Le journaliste scientifique spécialisé en géosciences relève ce défi quotidien. Possédant une solide culture universitaire en sciences de la Terre et d'excellentes qualités journalistiques, il enquête auprès des chercheurs, décrypte les publications académiques, vérifie les sources et conçoit des articles, reportages vidéo, podcasts et expositions de vulgarisation. Il éclaire les débats sociétaux majeurs : transition énergétique, stockage des déchets, réchauffement climatique et prévention des catastrophes.",
        "simpleDefinition": "Journaliste passionné par la Terre qui explique simplement au grand public à la télévision, à la radio, dans des magazines ou sur internet les secrets des roches, volcans et séismes.",
        "level": "Bac +5 (Master Géosciences + École de Journalisme / Médiation Scientifique)",
        "missions": [
            "Assurer une veille scientifique permanente sur les découvertes majeures en sciences de la Terre et de l'Univers",
            "Interviewer des chercheurs, géologues de terrain et experts institutionnels (BRGM, CNRS, universités)",
            "Rédiger des articles de vulgarisation scientifique pour la presse écrite, le web et les magazines spécialisés",
            "Concevoir des contenus multimédias pédagogiques : infographies animées, reportages vidéo, podcasts audio",
            "Concevoir des parcours muséographiques et des ateliers d'animation scientifique pour les musées et géoparcs",
            "Décrypter l'actualité chaude lors des crises géologiques (séismes majeurs, éruptions volcaniques, tsunamis)",
            "Lutter contre les infox et théories complotistes relatives au climat et aux catastrophes naturelles"
        ],
        "workEnvironment": "Rédactions de médias généralistes ou scientifiques, agences de presse, musées d'histoire naturelle, géoparcs UNESCO, avec des déplacements sur le terrain pour couvrir des événements géologiques remarquables.",
        "typicalDay": [
            {
                "time": "08h30",
                "activity": "Veille sur les flux RSS de Nature Geoscience, Science et les alertes sismiques de l'USGS"
            },
            {
                "time": "09h30",
                "activity": "Conférence de rédaction : proposition d'un sujet sur la découverte d'un nouveau gisement de lithium et ses enjeux géopolitiques"
            },
            {
                "time": "11h00",
                "activity": "Interview téléphonique d'un enseignant-chercheur de l'Université de Poitiers expert en minéraux industriels"
            },
            {
                "time": "13h00",
                "activity": "Déjeuner de travail avec le rédacteur en chef d'un magazine de vulgarisation"
            },
            {
                "time": "14h30",
                "activity": "Rédaction d'un article de fond de 6 000 signes avec encadrés pédagogiques et lexique"
            },
            {
                "time": "16h30",
                "activity": "Collaboration avec le graphiste pour concevoir une coupe géologique explicative en 3D"
            },
            {
                "time": "18h00",
                "activity": "Enregistrement d'une chronique audio de 3 minutes pour le podcast scientifique hebdomadaire"
            }
        ],
        "companyRole": "Pont démocratique indispensable, il donne aux citoyens les clés de compréhension scientifique pour juger des grands choix technologiques et écologiques.",
        "skills": {
            "technical": [
                "Culture générale approfondie en géosciences (géodynamique, climat, ressources, paléontologie)",
                "Techniques d'écriture journalistique (angle, titraille, attaque, chute, relances)",
                "Méthodologie de vérification des faits scientifiques (fact-checking) et lecture critique de publications",
                "Production multimédia : prise de son, montage vidéo, écriture de scripts pour podcast et YouTube",
                "Vulgarisation scientifique et muséographie pour tous les publics (scolaires, grand public)",
                "Droit de la presse et déontologie journalistique"
            ],
            "human": [
                "Curiosité insatiable et enthousiasme communicatif pour la science",
                "Sens aigu de la pédagogie et simplicité d'expression sans dénaturer la rigueur",
                "Rapidité de compréhension de concepts physico-chimiques ardus",
                "Aisance relationnelle et empathie pour interviewer les scientifiques"
            ],
            "tools": [
                "Enregistreur audio numérique Zoom",
                "Logiciels de montage (Adobe Premiere, Audition, DaVinci)",
                "WordPress / CMS web",
                "Canva / Adobe InDesign pour infographies",
                "Bases de données documentaires (ScienceDirect, PubMed)"
            ]
        },
        "geosciencesPedagogy": "Parcours clé « De la publication complexe au récit grand public » : 📄 Détection d'une publication scientifique ➔ 📞 Interview du chercheur & décryptage ➔ 🎯 Choix de l'angle journalistique ➔ ✍️ Rédaction claire & analogies imagées ➔ 🎨 Infographie explicative simplifiée ➔ 📢 Diffusion presse, podcast ou vidéo ➔ 💡 Éveil de la curiosité citoyenne",
        "studies": {
            "pathway": [
                {
                    "level": "Bac +3",
                    "degree": "Licence Sciences de la Terre (Université de Poitiers)"
                },
                {
                    "level": "Bac +5",
                    "degree": "Master EUR STPE Matériaux-Minéraux (Université de Poitiers - débouché Journaliste scientifique)"
                },
                {
                    "level": "Bac +5",
                    "degree": "Master Journalisme Scientifique (École Supérieure de Journalisme de Lille - ESJ, Paris Cité, CESTI Dakar)"
                }
            ],
            "schools": [
                {
                    "name": "Université de Poitiers - Master EUR STPE (Débouché Journaliste scientifique cité par l'UFR SFA)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Supérieure de Journalisme de Lille (ESJ Lille - Filière Journalisme scientifique)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centre d'Études des Sciences et Techniques de l'Information (CESTI - UCAD Dakar)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Université Paris Cité (Master Journalisme et Communication Scientifique)",
                    "country": "France",
                    "scope": "France"
                }
            ],
            "certifications": [
                "Carte d'identité des journalistes professionnels (carte de presse CCIJP)",
                "Membre de l'Association des Journalistes Scientifiques de la Presse d'Information (AJSPI)"
            ]
        },
        "career": {
            "sectors": [
                "Presse magazine scientifique (Science & Vie, Pour la Science, Sciences et Avenir)",
                "Chaînes de télévision et radios publiques (France Télévisions, Radio France, Arte, RTS)",
                "Plateformes de vulgarisation numérique et chaînes YouTube/Twitch scientifiques",
                "Centres de culture scientifique, musées et parcs naturels (Universcience, Géoparcs UNESCO)",
                "Services communication d'organismes de recherche (CNRS, BRGM)"
            ],
            "companies": [
                "Pour la Science",
                "Sciences et Avenir",
                "BRGM Communication",
                "Radio Télévision Sénégalaise (RTS)",
                "Universcience / Palais de la Découverte"
            ],
            "evolution": [
                "Chef de rubrique sciences de la Terre",
                "Rédacteur en chef adjoint de magazine scientifique",
                "Producteur d'émissions documentaires",
                "Directeur de communication d'institut de recherche"
            ],
            "pros": [
                "Métier passion permettant d'apprendre tous les jours des choses nouvelles",
                "Contact privilégié avec les plus grands esprits scientifiques mondiaux",
                "Impact sociétal direct en luttant contre l'obscurantisme"
            ],
            "cons": [
                "Précarité fréquente des pigistes en début de carrière dans les médias",
                "Rythme de publication parfois stressant lié à l'actualité",
                "Nécessité de défendre la place des sciences dans des médias souvent focalisés sur le buzz"
            ]
        },
        "gettingStarted": "Créer un blog ou une chaîne vidéo de vulgarisation géologique pendant ses études universitaires pour démontrer sa capacité à expliquer clairement des sujets complexes.",
        "aiImpact": {
            "level": "Élevé / Automatisation des résumés",
            "opportunities": [
                "Transcription instantanée des interviews scientifiques par IA",
                "Assistance à la génération de métaphores pédagogiques et d'illustrations didactiques",
                "Veille bibliographique automatisée"
            ],
            "challenges": [
                "L'IA hallucine facilement sur des concepts géologiques pointus : vigilance absolue requise"
            ],
            "humanEdge": "La chaleur du récit, le sens de l'émerveillement et la garantie déontologique de la vérification humaine restent indispensables."
        },
        "africaContext": {
            "title": "Le Journaliste Scientifique au Sénégal : Expliquer le Climat et les Ressources",
            "description": "Au Sénégal, la vulgarisation des sciences de la Terre est essentielle pour informer les populations rurales et urbaines sur le recul du littoral (Saint-Louis, Bargny), les prévisions pluviométriques et les enjeux économiques colossaux des nouveaux gisements de pétrole et de gaz de Sangomar et GTA. Le CESTI de Dakar forme des journalistes d'excellence dans ce domaine.",
            "keyInstitutions": [
                "CESTI (Centre d'Études des Sciences et Techniques de l'Information - UCAD Dakar)",
                "Association des Journalistes Scientifiques du Sénégal",
                "Radio Télévision Sénégalaise (RTS)",
                "Centre de Suivi Écologique (CSE Dakar)"
            ],
            "projects": [
                "Programmes radio en langues nationales (wolof, sérère, pulaar) sur les risques côtiers",
                "Couverture médiatique citoyenne des revenus de l'Initiative pour la Transparence des Industries Extractives (ITIE)",
                "Sensibilisation scolaire à la préservation des sols et des eaux souterraines"
            ],
            "opportunities": "Postes de journalistes spécialisés, chargés de communication institutionnelle et consultants pour des ONG internationales."
        },
        "salary": "🇫🇷 France : 24 000 - 50 000 € brut/an • 🇸🇳 Sénégal : 300 000 - 1 300 000 FCFA net/mois",
        "connectedFamilies": [
            "culture-medias",
            "lettres-langues-sciences-humaines",
            "education-formation",
            "environnement-climat"
        ],
        "relatedJobs": [
            "enseignant-chercheur-geosciences",
            "chercheur-geosciences",
            "geologue",
            "paleontologue",
            "journaliste"
        ],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Master EUR STPE Matériaux-Minéraux - Débouché Journaliste scientifique",
                "url": "https://sfa.univ-poitiers.fr/geosciences/formations/master-eur-parcours-materiaux-mineraux/",
                "type": "formation"
            },
            {
                "organization": "AJSPI",
                "title": "Association des Journalistes Scientifiques de la Presse d'Information",
                "url": "https://www.ajspi.com",
                "type": "association"
            }
        ],
        "sourcePoitiers": true,
        "sourceBRGM": true,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Plus de 65% des citoyens déclarent s'intéresser aux découvertes sur l'histoire de la Terre et les fossiles, mais seuls 15% comprennent la notion géologique de 'million d'années'.",
            "pourquoi": "L'échelle du temps profond de la Terre (4,5 milliards d'années) est si gigantesque qu'elle dépasse naturellement l'entendement de la vie quotidienne humaine.",
            "a_retenir": "Le rôle du médiateur scientifique est de créer des passerelles poétiques et rigoureuses pour réconcilier l'esprit humain avec la mémoire colossale de la Terre."
        },
        "salaryDetail": {
            "france": {
                "entry": 24000,
                "mid": 35000,
                "expert": 50000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : Barèmes convention collective des journalistes & Université de Poitiers"
            },
            "senegal": {
                "entry": 300000,
                "mid": 600000,
                "expert": 1300000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés en rédaction de médias et agences de presse à Dakar"
            }
        },
        "geosciencesPedagogyDetail": {
            "pathway": "De la publication complexe au récit grand public",
            "steps": [
                "📄 Détection d'une publication scientifique",
                "📞 Interview du chercheur & décryptage",
                "🎯 Choix de l'angle journalistique",
                "✍️ Rédaction claire & analogies imagées",
                "🎨 Infographie explicative simplifiée",
                "📢 Diffusion presse, podcast ou vidéo",
                "💡 Éveil de la curiosité citoyenne"
            ]
        }
    },
    {
        "id": "geologue-marin",
        "slug": "geologue-marin",
        "title": "Géologue Marin / Sédimentologue Côtier & Océanique",
        "aliases": [
            "Océanographe géologue",
            "Sédimentologue marin",
            "Marine Geologist",
            "Coastal Geoscientist"
        ],
        "icon": "🌊",
        "familyId": "sciences-terre-geosciences",
        "domain": "Géosciences marines",
        "domainId": "geosciences-marines-littorales",
        "subdomain": "Océanographie Géologique & Dynamique Côtière",
        "shortDescription": "Explorateur des abysses et sentinelle des littoraux, il étudie les fonds marins, la dérive des sables côtiers, les canyons sous-marins et les dépôts de sédiments pour aménager les ports et suivre l'érosion marine.",
        "longDescription": "Plus de 70% de la surface terrestre est recouverte par les océans, et leurs fonds demeurent moins bien cartographiés que la surface de la Lune. Le géologue marin explore ce monde immergé fascinant. À bord de navires océanographiques équipés de sondeurs multifaisceaux, de carottiers géants et de robots sous-marins (ROV), il cartographie la bathymétrie, ausculte les dorsales océaniques et prélève des carottes de sédiments marins qui enregistrent des millions d'années d'histoire climatique. Sur le littoral, il étudie la dynamique sédimentaire des plages et des estuaires, modélise le transport des sables par la houle et préconise les solutions douces pour lutter contre le recul du trait de côte et sécuriser les parcs éoliens offshore.",
        "simpleDefinition": "Scientifique qui explore le sol sous la mer et les plages pour comprendre les mouvements des sables, cartographier les fonds marins et lutter contre l'érosion côtière.",
        "level": "Bac +5 (Master Sciences Marines / Diplôme d'Ingénieur)",
        "missions": [
            "Embarquer sur des navires océanographiques pour diriger des campagnes de carottage marin et de bathymétrie multifaisceaux",
            "Cartographier la morphologie des fonds marins (dorsales, fosses, canyons sous-marins, plateaux continentaux)",
            "Analyser au laboratoire les sédiments marins (granulométrie, minéralogie, micropaléontologie, géochimie organique)",
            "Modéliser le transport sédimentaire littoral, la dérive littorale et l'érosion des plages sous l'action des vagues et des marées",
            "Réaliser les études géotechniques et géologiques marines préalables à l'installation d'éoliennes en mer, câbles sous-marins et ports",
            "Évaluer les risques géologiques marins : glissements de terrain sous-marins générateurs de tsunamis, failles actives sous-marines",
            "Conseiller les collectivités littorales pour la gestion durable du trait de côte et la réhabilitation des lagunes"
        ],
        "workEnvironment": "Alternance entre campagnes en mer à bord de navires océanographiques ou vedettes hydrographiques (plusieurs semaines en mer), missions de mesures sur les plages et travail de laboratoire/modélisation sur ordinateur.",
        "typicalDay": [
            {
                "time": "07h00",
                "activity": "À bord du navire océanographique : briefing de quart avec l'équipage sur la station de carottage de la matinée"
            },
            {
                "time": "08h30",
                "activity": "Descente du carottier gravité par 1 500 m de fond et suivi au sondeur acoustique de la pénétration"
            },
            {
                "time": "10h30",
                "activity": "Remontée sur le pont d'une carotte de 9 mètres de boues pélagiques et sédiments turbiditiques"
            },
            {
                "time": "12h00",
                "activity": "Déjeuner au carré des officiers du navire"
            },
            {
                "time": "13h30",
                "activity": "Ouverture de la carotte en deux demi-sections au laboratoire du bord : photographie haute définition et description visuelle"
            },
            {
                "time": "15h30",
                "activity": "Mesure continue de la susceptibilité magnétique et de la densité sur le banc de mesure multi-capteurs (MSCL)"
            },
            {
                "time": "18h00",
                "activity": "Traitement bathymétrique des données du sondeur multifaisceaux pour révéler un canyon sous-marin inconnu"
            }
        ],
        "companyRole": "Expert du milieu marin profond et côtier, il permet d'aménager durablement les façades maritimes et d'explorer les ressources sous-marines.",
        "skills": {
            "technical": [
                "Sédimentologie marine et dynamique côtière (houles, courants de marée, transport éolien)",
                "Acoustique sous-marine et bathymétrie multifaisceaux",
                "Techniques de carottage en mer (carottier Kullenberg, carottier boîte)",
                "Interprétation sismique marine très haute résolution (THR)",
                "Modélisation hydro-sédimentaire numérique (Telemac, Delft3D, Mike21)",
                "Micropaléontologie marine (foraminifères, diatomées) pour la biostratigraphie"
            ],
            "human": [
                "Excellente résistance au mal de mer et aptitude à la vie communautaire confinée à bord",
                "Sens aigu de la sécurité maritime",
                "Capacité d'analyse spatiale tridimensionnelle des reliefs immergés",
                "Esprit d'aventure et passion pour l'océan"
            ],
            "tools": [
                "Sondeur multifaisceaux Kongsberg",
                "Banc de carottage MSCL Geotek",
                "Logiciels Caris HIPS&SIPS / QPS Qimera",
                "Telemac-Mascaret",
                "QGIS"
            ]
        },
        "geosciencesPedagogy": "Parcours clé « Des vagues côtières aux abysses marins » : 🚢 Mission en mer & sonar multifaisceaux ➔ 🌊 Descente du carottier à sédiments ➔ 📦 Récupération de la carotte sur le pont ➔ 🔬 Analyse des grains & foraminifères ➔ 💻 Modélisation de la houle & sables ➔ 🏖️ Stratégie de protection du littoral",
        "studies": {
            "pathway": [
                {
                    "level": "Bac +3",
                    "degree": "Licence Sciences de la Terre ou Sciences de la Mer"
                },
                {
                    "level": "Bac +5",
                    "degree": "Master Sciences de la Mer / Géosciences Marines (IUEM Brest, Sorbonne Université, Poitiers)"
                },
                {
                    "level": "Bac +5",
                    "degree": "Diplôme d'Ingénieur Hydrographe-Océanographe (ENSTA Bretagne)"
                },
                {
                    "level": "Bac +8",
                    "degree": "Doctorat en Océanographie Géologique"
                }
            ],
            "schools": [
                {
                    "name": "Institut Universitaire Européen de la Mer (IUEM - Université de Bretagne Occidentale)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université de Poitiers - Département Géosciences (Licence ST, Master STPE)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "ENSTA Bretagne (Filière Hydrographie et Océanographie)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut Universitaire de Pêche et d'Aquaculture (IUPA / UCAD Dakar)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification Hydrographe Catégorie A (FIG/OHI/ACI)",
                "Brevet de sécurité maritime de base (STCW)"
            ]
        },
        "career": {
            "sectors": [
                "Instituts océanographiques de recherche (IFREMER, CNRS, IRD)",
                "Services hydrographiques de la Marine (SHOM)",
                "Compagnies d'énergies marines renouvelables (éolien en mer)",
                "Bureaux d'études littoraux et maritimes",
                "Grands ports maritimes et dragage"
            ],
            "companies": [
                "IFREMER",
                "SHOM",
                "Fugro Marine",
                "Jan De Nul",
                "Deme",
                "Antea Group Littoral",
                "Port Autonome de Dakar"
            ],
            "evolution": [
                "Chef de mission océanographique",
                "Directeur de pôle ingénierie côtière",
                "Chercheur en géosciences marines",
                "Expert consultant maritime international"
            ],
            "pros": [
                "Aventure extraordinaire des campagnes océanographiques en haute mer",
                "Rôle direct dans la protection des côtes face à la montée des océans",
                "Forte demande sur l'éolien offshore"
            ],
            "cons": [
                "Éloignement familial pendant les campagnes océanographiques (jusqu'à 1 ou 2 mois en mer)",
                "Conditions météorologiques parfois très difficiles au large",
                "Horaires décalés selon les quarts de navigation"
            ]
        },
        "gettingStarted": "Effectuer des stages embarqués dès le master, valider ses certificats de sécurité maritime (STCW) et maîtriser les logiciels de bathymétrie et de modélisation côtière.",
        "aiImpact": {
            "level": "Élevé / Nettoyage bathymétrique automatique",
            "opportunities": [
                "Filtrage automatique des bruits sur nuages de points bathymétriques par machine learning",
                "Reconnaissance automatisée des habitats benthiques par imagerie sous-marine par IA",
                "Prédiction de la submersion marine par modèles couplés"
            ],
            "challenges": [
                "L'accès aux données de mer profonde reste coûteux et complexe"
            ],
            "humanEdge": "La décision tactique lors d'un carottage marin face à une météo changeante exige l'expérience de marin et de géologue du chef de mission."
        },
        "africaContext": {
            "title": "Le Géologue Marin au Sénégal : Face à l'Avancée de l'Océan Atlantique",
            "description": "Le littoral sénégalais (plus de 700 km de côtes) est confronté à une érosion spectaculaire : recul de plusieurs mètres par an à Saint-Louis (brèche de la Langue de Barbarie), à Rufisque et sur la Petite Côte (Saly). Le géologue marin y conçoit les solutions de protection côtière et étudie les plateformes pour l'expansion du Port de Dakar et le futur port de Ndayane.",
            "keyInstitutions": [
                "Centre de Suivi Écologique (CSE Dakar)",
                "Institut Universitaire de Pêche et d'Aquaculture (IUPA - UCAD)",
                "Port Autonome de Dakar (PAD)",
                "Projet WACA (West Africa Coastal Areas Management Program - Banque Mondiale)"
            ],
            "projects": [
                "Aménagement et protection d'urgence de la brèche de Saint-Louis",
                "Études bathymétriques et sédimentaires du Port en eaux profondes de Ndayane",
                "Suivi du recul des plages touristiques de Saly Portudal et rechargement en sable"
            ],
            "opportunities": "Postes de consultants pour les grands programmes de résilience côtière ouest-africaine (WACA) et les autorités portuaires."
        },
        "salary": "🇫🇷 France : 32 000 - 72 000 € brut/an • 🇸🇳 Sénégal : 500 000 - 2 200 000 FCFA net/mois",
        "connectedFamilies": [
            "peche-maritime",
            "environnement-climat",
            "energie-renouvelable",
            "btp-architecture"
        ],
        "relatedJobs": [
            "geologue",
            "geophysicien",
            "geomaticien-cartographe-geologue",
            "ingenieur-risques-naturels",
            "chercheur-geosciences"
        ],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Département Géosciences (formations en sédimentologie et paléoenvironnements)",
                "url": "https://sfa.univ-poitiers.fr/geosciences/",
                "type": "formation"
            },
            {
                "organization": "IFREMER",
                "title": "Métiers des géosciences marines et de l'océanographie",
                "url": "https://www.ifremer.fr",
                "type": "secteur"
            }
        ],
        "sourcePoitiers": true,
        "sourceBRGM": true,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Le plus long relief de la Terre n'est pas l'Himalaya ou les Andes, mais la dorsale médio-océanique sous-marine qui serpente sur plus de 65 000 kilomètres au fond des océans.",
            "pourquoi": "C'est au niveau de ces dorsales sous-marines que le magma monte des entrailles du manteau pour créer en permanence la croûte océanique.",
            "a_retenir": "Le géologue marin explore la véritable usine de fabrication de la surface de notre planète."
        },
        "salaryDetail": {
            "france": {
                "entry": 32000,
                "mid": 48000,
                "expert": 72000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : IFREMER, SHOM & compagnies offshore (avec primes d'embarquement)"
            },
            "senegal": {
                "entry": 500000,
                "mid": 1000000,
                "expert": 2200000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés pour les experts maritimes et portuaires à Dakar"
            }
        },
        "geosciencesPedagogyDetail": {
            "pathway": "Des vagues côtières aux abysses marins",
            "steps": [
                "🚢 Mission en mer & sonar multifaisceaux",
                "🌊 Descente du carottier à sédiments",
                "📦 Récupération de la carotte sur le pont",
                "🔬 Analyse des grains & foraminifères",
                "💻 Modélisation de la houle & sables",
                "🏖️ Stratégie de protection du littoral"
            ]
        }
    },
    {
        "id": "ingenieur-risques-naturels",
        "slug": "ingenieur-risques-naturels",
        "title": "Ingénieur en Risques Naturels & Géorisques",
        "aliases": [
            "Ingénieur aléas géologiques",
            "Spécialiste géorisques",
            "Chargé de prévention des risques naturels",
            "Natural Hazards Engineer"
        ],
        "icon": "⚠️",
        "familyId": "sciences-terre-geosciences",
        "domain": "Risques naturels",
        "domainId": "risques-naturels-georisques",
        "subdomain": "Prévention des Inondations & Mouvements de Terrain",
        "shortDescription": "Expert de la protection des populations et des biens, il cartographie et modélise les aléas de terrain (glissements, chutes de blocs, inondations, cavités) et conçoit les ouvrages de parade.",
        "longDescription": "Face au dérèglement climatique et à l'urbanisation croissante, les aléas naturels constituent une menace majeure. L'ingénieur en risques naturels et géorisques analyse les phénomènes destructeurs : glissements de terrain, coulées de boue, chutes de blocs rocheux, effondrements de cavités souterraines (fontis), crues torrentielles et submersions. Il étudie l'aléa (probabilité et intensité physique du phénomène géologique) et la vulnérabilité des habitations et infrastructures. Il rédige les Plans de Prévention des Risques Naturels (PPRN), conçoit les ouvrages de protection (grillages pare-blocs, merlons, digues, drains de stabilisation) et conseille les maires et préfectures lors des alertes météo extrêmes.",
        "simpleDefinition": "Ingénieur qui étudie les dangers naturels (éboulements, inondations, glissements de terrain) pour cartographier les zones interdites de construction et protéger les habitants.",
        "level": "Bac +5 (Master Risques et Environnement / Diplôme d'Ingénieur)",
        "missions": [
            "Évaluer sur le terrain les indices d'instabilité : fissures de traction, bombements, suintements d'eau sur versants",
            "Modéliser la trajectoire et l'énergie des chutes de blocs rocheux (logiciels de trajectographie 2D/3D)",
            "Calculer les facteurs de sécurité des versants instables face aux précipitations intenses",
            "Élaborer les cartes réglementaires des Plans de Prévention des Risques Naturels (PPRN / PPRi)",
            "Dimensionner les ouvrages de parade : filets pare-blocs haute énergie, ancrages, barrières de soutènement, digues",
            "Mettre en place des systèmes de surveillance et d'alerte en temps réel (inclinomètres, extensomètres, caméras)",
            "Former les élus et équipes de sécurité civile à la gestion de crise lors de crues ou de mouvements de masse"
        ],
        "workEnvironment": "Déplacements fréquents en montagne, falaises côtières, vallées inondables et zones escarpées, complétés par du travail de modélisation numérique sur SIG en bureau d'études.",
        "typicalDay": [
            {
                "time": "08h00",
                "activity": "Départ en urgence pour expertiser un éboulement rocheux ayant coupé une route départementale en vallée"
            },
            {
                "time": "09h30",
                "activity": "Ascension de la falaise avec équipement de sécurité : identification de la niche d'arrachement et des blocs résiduels instables"
            },
            {
                "time": "12h00",
                "activity": "Point de situation avec les services de la préfecture et avis sur l'autorisation ou non de réouverture de la voie"
            },
            {
                "time": "14h00",
                "activity": "Simulation numérique de trajectographie rocheuse pour dimensionner un écran pare-blocs de 2 000 kJ"
            },
            {
                "time": "16h00",
                "activity": "Lecture des capteurs extensométriques télémétrés installés sur un glissement de terrain actif"
            },
            {
                "time": "17h30",
                "activity": "Finalisation du zonage réglementaire de la commune dans le cadre de la révision du PPRN"
            }
        ],
        "companyRole": "Garde du corps des territoires, il arbitre entre le besoin de construire et le devoir absolu de préserver la vie des populations face aux fureurs de la nature.",
        "skills": {
            "technical": [
                "Mécanique des roches et stabilité des versants rocheux et meubles",
                "Hydrologie de surface et modélisation hydraulique des crues",
                "Réglementation des risques majeurs et méthodologie des PPRN",
                "Trajectographie de blocs et dimensionnement des protections passives",
                "Instrumentation et télésurveillance géotechnique (inclinomètres, piézomètres, radar)",
                "Cartographie SIG des aléas et analyse multicritère de vulnérabilité"
            ],
            "human": [
                "Sens du devoir et calme olympien en situation d'urgence et de crise",
                "Fermeté déontologique face aux pressions politiques ou immobilières",
                "Pédagogie pour expliquer la notion d'aléa et de risque aux populations",
                "Endurance physique en terrain escarpé"
            ],
            "tools": [
                "Logiciels de trajectographie (Rockfall, Trajecto)",
                "Logiciels de stabilité (Talren, Slide)",
                "QGIS",
                "Drones pour inspection de falaises inaccessibles",
                "Extensomètres et inclinomètres"
            ]
        },
        "geosciencesPedagogy": "Parcours clé « De l'aléa géologique à la protection humaine » : 🌧️ Pluies torrentielles & instabilité ➔ 🔎 Inspection d'affleurements fissurés ➔ 📐 Calcul de la trajectoire des blocs ➔ ⚠️ Zonage du Plan de Prévention (PPRN) ➔ 🛡️ Pose de grillages & digues pare-blocs ➔ 📡 Surveillance par capteurs connectés ➔ 🏡 Sérénité des habitants protégés",
        "studies": {
            "pathway": [
                {
                    "level": "Bac +3",
                    "degree": "Licence Sciences de la Terre ou Géographie physique"
                },
                {
                    "level": "Bac +5",
                    "degree": "Master Gestion des Risques Naturels / STPE (Université de Poitiers, Grenoble, Nice)"
                },
                {
                    "level": "Bac +5",
                    "degree": "Diplôme d'Ingénieur Géologue / Génie Civil (Polytech Grenoble, ENSG Nancy, ENTPE)"
                }
            ],
            "schools": [
                {
                    "name": "Université de Poitiers - Faculté des Sciences (Licence ST, Master STPE)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Polytech Grenoble (Filière Géotechnique et Risques Naturels)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Nationale des Travaux Publics de l'État (ENTPE Lyon)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut des Sciences de la Terre (IST - UCAD Dakar)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification d'expert en risques naturels",
                "Habilitation travaux sur cordes / accès difficile (CQP cordiste)"
            ]
        },
        "career": {
            "sectors": [
                "Bureaux d'études spécialisés en géorisques et stabilité de pentes",
                "Services de l'État (DDTM, DREAL, Cerema, BRGM)",
                "Collectivités territoriales (départements, régions, intercommunalités)",
                "Compagnies d'assurance et de réassurance",
                "Gestionnaires d'infrastructures routières et ferrées"
            ],
            "companies": [
                "BRGM",
                "Cerema",
                "Antea Group",
                "Géolithe",
                "SNCF Réseau",
                "Compagnies d'assurance"
            ],
            "evolution": [
                "Chef de projet risques majeurs",
                "Directeur de département environnement et aléas",
                "Expert judiciaire en catastrophes naturelles",
                "Directeur de la protection civile"
            ],
            "pros": [
                "Métier palpitant et à haute utilité publique pour sauver des vies",
                "Diversité d'intervention sur des phénomènes naturels spectaculaires",
                "Rôle d'arbitre respecté des politiques d'aménagement"
            ],
            "cons": [
                "Astreintes d'urgence lors des tempêtes et fortes pluies",
                "Pression forte lors des décisions de fermeture d'axes de communication",
                "Lourde responsabilité en cas de survenue d'un sinistre"
            ]
        },
        "gettingStarted": "Effectuer des stages de terrain en bureau d'études géotechniques spécialisé en risques rocheux (Géolithe, Cerema) et maîtriser la réglementation des PPRN.",
        "aiImpact": {
            "level": "Élevé / Modélisation prédictive des crises",
            "opportunities": [
                "Prédiction des glissements de terrain par fusion de données pluviométriques et satellites InSAR par apprentissage profond",
                "Détection automatique de blocs rocheux instables sur nuages de points 3D de falaises",
                "Systèmes d'alerte automatisés instantanés"
            ],
            "challenges": [
                "Éviter l'excès de faux positifs qui désensibiliserait la population aux alertes"
            ],
            "humanEdge": "La décision humaine de faire évacuer un village ou de bloquer une voie ferrée reste guidée par l'éthique et la conscience de l'ingénieur."
        },
        "africaContext": {
            "title": "L'Ingénieur Risques Naturels au Sénégal : Inondations et Érosion Côtière",
            "description": "Au Sénégal, les inondations urbaines récurrentes pendant l'hivernage (Dakar banlieue, Touba, Kaolack) et l'effondrement des falaises de la Corniche ouest dakaroise représentent des géorisques majeurs. L'ingénieur en risques naturels intervient pour concevoir les bassins de rétention, les digues et les plans de contingence.",
            "keyInstitutions": [
                "Direction de la Prévention et de la Gestion des Inondations (DPGI)",
                "Agence Nationale de l'Aménagement du Territoire (ANAT)",
                "Centre de Suivi Écologique (CSE Dakar)",
                "Institut des Sciences de la Terre (IST - UCAD)"
            ],
            "projects": [
                "Programme de Gestion des Eaux Pluviales et d'adaptation au changement climatique (PROGEP)",
                "Stabilisation des falaises rocheuses des Mamelles et de la Corniche de Dakar",
                "Plans de prévention des inondations dans les grandes agglomérations sénégalaises"
            ],
            "opportunities": "Postes de consultants pour les agences d'État, les mairies des grandes villes et les bailleurs internationaux de résilience urbaine."
        },
        "salary": "🇫🇷 France : 31 000 - 62 000 € brut/an • 🇸🇳 Sénégal : 450 000 - 1 900 000 FCFA net/mois",
        "connectedFamilies": [
            "environnement-climat",
            "btp-architecture",
            "data-decision",
            "droit-management"
        ],
        "relatedJobs": [
            "geologue",
            "sismologue",
            "geophysicien",
            "ingenieur-geotechnique",
            "hydrogeologue"
        ],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Fiche Géologue (mention prévention des risques naturels, séismes, glissements de terrain)",
                "url": "https://sfa.univ-poitiers.fr/geosciences/debouches-professionnels/geologue/",
                "type": "metier"
            },
            {
                "organization": "Ministère de la Transition Écologique",
                "title": "Politique nationale de prévention des risques naturels majeurs",
                "url": "https://www.georisques.gouv.fr",
                "type": "portail"
            }
        ],
        "sourcePoitiers": true,
        "sourceBRGM": true,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En France, plus d'une commune sur deux est concernée par au moins un Plan de Prévention des Risques Naturels (PPRN), principalement les inondations et les mouvements de terrain.",
            "pourquoi": "L'implantation historique des villes au bord de l'eau et au pied des reliefs les expose mécaniquement aux caprices du sous-sol et du climat.",
            "a_retenir": "L'ingénieur en risques naturels est l'expert qui transforme la fatalité des catastrophes en science de la résilience et de la prévention."
        },
        "salaryDetail": {
            "france": {
                "entry": 31000,
                "mid": 44000,
                "expert": 62000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : Cerema, APEC & bureaux d'études spécialisés"
            },
            "senegal": {
                "entry": 450000,
                "mid": 900000,
                "expert": 1900000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés en gestion des inondations et bureau d'études à Dakar"
            }
        },
        "geosciencesPedagogyDetail": {
            "pathway": "De l'aléa géologique à la protection humaine",
            "steps": [
                "🌧️ Pluies torrentielles & instabilité",
                "🔎 Inspection d'affleurements fissurés",
                "📐 Calcul de la trajectoire des blocs",
                "⚠️ Zonage du Plan de Prévention (PPRN)",
                "🛡️ Pose de grillages & digues pare-blocs",
                "📡 Surveillance par capteurs connectés",
                "🏡 Sérénité des habitants protégés"
            ]
        }
    },
    {
        "id": "ingenieur-geothermie",
        "slug": "ingenieur-geothermie",
        "title": "Ingénieur en Géothermie & Énergies du Sous-Sol",
        "aliases": [
            "Ingénieur géothermique",
            "Spécialiste de l'énergie de la Terre",
            "Géologue réservoir géothermique",
            "Geothermal Energy Engineer"
        ],
        "icon": "♨️",
        "familyId": "sciences-terre-geosciences",
        "domain": "Ressources énergétiques du sous-sol",
        "domainId": "ressources-energetiques-sous-sol",
        "subdomain": "Géothermie Basse & Haute Énergie",
        "shortDescription": "Pionnier de la transition énergétique décarbonée, il capte la chaleur naturelle emmagasinée dans le sous-sol pour chauffer des villes entières ou produire de l'électricité propre 24h/24.",
        "longDescription": "Sous nos pieds se trouve une source d'énergie inépuisable, continue et totalement décarbonée : la chaleur interne de la Terre. L'ingénieur en géothermie conçoit et supervise les projets qui captent cette énergie. Dans la géothermie de surface (sur sondes ou sur nappe peu profonde), il chauffe et rafraîchit des écoquartiers, immeubles et hôpitaux. Dans la géothermie profonde (aquifères du Dogger à 2 000 m ou géothermie haute température en zones volcaniques), il fore des doublets géothermiques pour alimenter des réseaux de chaleur urbains ou entraîner des turbines électriques. Il modélise les transferts thermiques, surveille la minéralisation corrosive des fluides et garantit la réinjection intégrale de l'eau dans son réservoir pour une durabilité absolue.",
        "simpleDefinition": "Ingénieur de la transition écologique qui va chercher la chaleur gratuite et inépuisable de la Terre pour chauffer des maisons ou fabriquer de l'électricité propre sans polluer.",
        "level": "Bac +5 (Master Hydrogéologie-Géothermie / Ingénieur Géologue)",
        "missions": [
            "Évaluer le potentiel thermique et la faisabilité géologique de projets géothermiques de surface ou profonds",
            "Concevoir l'architecture des forages (doublets géothermiques de production et réinjection)",
            "Réaliser des essais de réponse thermique (TRT) sur sondes pour dimensionner les champs de géothermie",
            "Modéliser le comportement thermodynamique et hydrodynamique du réservoir (logiciels FEFLOW, TOUGH2)",
            "Gérer la chimie des fluides géothermaux : prévention de l'entartrage, de la corrosion et traitement des gaz dissous",
            "Superviser les travaux de forage profond et l'installation des échangeurs thermiques",
            "Suivre la pérennité thermique de la nappe pour éviter tout refroidissement prématuré du réservoir sur 30 à 50 ans"
        ],
        "workEnvironment": "Partage équilibré entre réunions de projet et modélisation thermique au bureau d'études, et supervision sur les chantiers de forages profonds et centrales géothermiques urbaines.",
        "typicalDay": [
            {
                "time": "08h30",
                "activity": "Analyse des données de débit et de température du doublet géothermique alimentant un réseau de chaleur de 15 000 logements"
            },
            {
                "time": "10h00",
                "activity": "Modélisation thermique sur logiciel FEFLOW pour vérifier que la bulle froide réinjectée n'atteindra pas le puits de production avant 40 ans"
            },
            {
                "time": "12h00",
                "activity": "Déjeuner de travail avec les élus locaux d'une métropole souhaitant décarboner son réseau de chauffage urbain"
            },
            {
                "time": "14h00",
                "activity": "Visite d'un chantier de forage géothermique profond : inspection des tubes en acier anticorrosion au fond de la cave de forage"
            },
            {
                "time": "16h00",
                "activity": "Dépouillement d'un essai de réponse thermique (TRT) réalisé sur une sonde géothermique verticale d'un futur lycée"
            },
            {
                "time": "17h30",
                "activity": "Rédaction du dossier de demande d'autorisation minière auprès de la DREAL pour un nouveau forage"
            }
        ],
        "companyRole": "Acteur stratégique de la souveraineté énergétique, il substitue la chaleur locale et propre de la Terre aux énergies fossiles importées.",
        "skills": {
            "technical": [
                "Thermodynamique des transferts de chaleur (conduction, convection, rayonnement)",
                "Hydrogéologie profonde et dynamique des réservoirs géothermaux",
                "Techniques de forage profond dévié et architecture de puits",
                "Chimie des saumures chaudes et phénomènes de corrosion/tartre",
                "Modélisation numérique thermo-hydraulique (FEFLOW, TOUGH2, MODFLOW)",
                "Réglementation du Code minier appliqué à la géothermie"
            ],
            "human": [
                "Sens de la vision à long terme et rigueur de dimensionnement",
                "Goût pour les défis de la transition écologique et des énergies propres",
                "Capacité de communication avec les collectivités et le grand public",
                "Esprit de synthèse entre géologie et génie thermique"
            ],
            "tools": [
                "Logiciel thermo-hydraulique FEFLOW",
                "TOUGH2 / OpenGeoSys",
                "Appareil d'essai TRT (Thermal Response Test)",
                "QGIS",
                "AutoCAD"
            ]
        },
        "geosciencesPedagogy": "Parcours clé « De la chaleur de la roche aux radiateurs de la ville » : ♨️ Gradient thermique naturel de la Terre ➔ 🔎 Prospection de l'aquifère profond chaud ➔ 🚜 Forage du doublet géothermique ➔ 🌡️ Pompage de l'eau à 75 °C ➔ 🏢 Échangeur thermique & réseau urbain ➔ 💧 Réinjection intégrale de l'eau refroidie ➔ 🌿 Chaleur 100% propre et renouvelable",
        "studies": {
            "pathway": [
                {
                    "level": "Bac +3",
                    "degree": "Licence Sciences de la Terre ou Génie Thermique"
                },
                {
                    "level": "Bac +5",
                    "degree": "Master STPE Parcours Hydrogéologie et Transferts (Université de Poitiers - mention géothermie)"
                },
                {
                    "level": "Bac +5",
                    "degree": "Diplôme d'Ingénieur Géologue ou Énergétique (ENSG Nancy, Polytech, Mines)"
                }
            ],
            "schools": [
                {
                    "name": "Université de Poitiers - Master STPE (Département Géosciences - mention géothermie)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Nationale Supérieure de Géologie (ENSG Nancy)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut des Sciences de la Terre (IST - UCAD Dakar)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Polytech Paris-Saclay / Sorbonne Université",
                    "country": "France",
                    "scope": "France"
                }
            ],
            "certifications": [
                "Agrément d'expert géothermie de minime importance (RGE Géothermie)",
                "Certification en sécurité des forages profonds"
            ]
        },
        "career": {
            "sectors": [
                "Opérateurs de réseaux de chaleur urbains (Engie Solutions, Dalkia, Idex)",
                "Bureaux d'études spécialisés en géothermie et environnement",
                "Compagnies d'énergies renouvelables et de forage",
                "Services géologiques nationaux (BRGM)",
                "Collectivités métropolitaines"
            ],
            "companies": [
                "BRGM",
                "Engie Solutions",
                "Dalkia (Groupe EDF)",
                "Antea Group",
                "CFG Services (filiale BRGM)",
                "Idex"
            ],
            "evolution": [
                "Chef de projet géothermie profonde",
                "Directeur de pôle énergies renouvelables",
                "Directeur d'exploitation de centrales géothermiques",
                "Expert consultant international auprès de l'IEA Geothermal"
            ],
            "pros": [
                "Secteur en plein boom soutenu massivement par le plan national géothermie",
                "Contribution concrète et mesurable à la décarbonation des villes",
                "Compétences rares et très recherchées sur le marché de l'emploi"
            ],
            "cons": [
                "Coûts d'investissement initiaux élevés des forages profonds nécessitant de convaincre les financeurs",
                "Risques d'aléa géologique sur les débits lors des forages",
                "Réglementation minière stricte et encadrée"
            ]
        },
        "gettingStarted": "Choisir une formation combinant hydrogéologie et génie thermique (Master Hydrogéologie de Poitiers) et réaliser des stages chez des opérateurs de réseaux de chaleur urbains.",
        "aiImpact": {
            "level": "Élevé / Pilotage intelligent des centrales",
            "opportunities": [
                "Optimisation en temps réel des débits de pompage selon les prévisions météo et les tarifs d'électricité par IA",
                "Détection précoce du colmatage des puits par analyse de données de capteurs en continu",
                "Modélisation accélérée des réservoirs fracturés"
            ],
            "challenges": [
                "Intégrer les incertitudes géologiques dans les modèles prédictifs"
            ],
            "humanEdge": "La responsabilité de valider l'implantation d'un doublet géothermique en milieu urbain dense reste une décision humaine d'ingénierie."
        },
        "africaContext": {
            "title": "La Géothermie en Afrique : Du Rift Est-Africain aux Projets Ouest-Africains",
            "description": "L'Afrique de l'Est (Kenya, Éthiopie) est l'un des leaders mondiaux de la géothermie électrique de haute température grâce au grand rift volcanique. En Afrique de l'Ouest et au Sénégal, l'ingénieur géothermal explore le potentiel de la géothermie basse température des nappes profondes pour la climatisation décarbonée des bâtiments tertiaires et le séchage agroalimentaire.",
            "keyInstitutions": [
                "Institut des Sciences de la Terre (IST - UCAD Dakar)",
                "Centre d'Excellence Géothermique d'Afrique (ARGeo - UNEP)",
                "Ministère du Pétrole et des Énergies du Sénégal",
                "École Polytechnique de Thiès (EPT)"
            ],
            "projects": [
                "Études de faisabilité de thermo-climatisation géothermique sur la nappe du Continental Terminal",
                "Partenariats régionaux pour la formation d'ingénieurs sur les champs géothermiques de l'est africain",
                "Valorisation de la chaleur des eaux de forages profonds pour le maraîchage"
            ],
            "opportunities": "Opportunités dans les projets de transition énergétique des pays émergents et les cabinets d'ingénierie verte de la sous-région."
        },
        "salary": "🇫🇷 France : 33 000 - 70 000 € brut/an • 🇸🇳 Sénégal : 450 000 - 2 000 000 FCFA net/mois",
        "connectedFamilies": [
            "energie-renouvelable",
            "environnement-climat",
            "industrie-mecanique",
            "btp-architecture"
        ],
        "relatedJobs": [
            "hydrogeologue",
            "geologue",
            "geophysicien",
            "ingenieur-geotechnique",
            "chercheur-geosciences"
        ],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Fiche Métier Hydrogéologue (mention géothermie et détection des nappes)",
                "url": "https://sfa.univ-poitiers.fr/geosciences/debouches-professionnels/hydrogeologue/",
                "type": "metier"
            },
            {
                "organization": "Association Française des Professionnels de la Géothermie (AFPG)",
                "title": "Filière géothermie et métiers de la transition thermique",
                "url": "https://www.afpg.asso.fr",
                "type": "secteur"
            }
        ],
        "sourcePoitiers": true,
        "sourceBRGM": true,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En région parisienne, plus de 250 000 logements sont chauffés en continu grâce à l'eau chaude à 75 °C pompée à 1 800 mètres de profondeur dans la nappe du Dogger, sans émettre un seul gramme de CO2.",
            "pourquoi": "Cette nappe géologique s'est réchauffée naturellement au contact des profondeurs terrestres depuis plus de 150 millions d'années.",
            "a_retenir": "La géothermie est la seule énergie renouvelable disponible 24 heures sur 24, été comme hiver, insensible aux caprices du vent ou du soleil."
        },
        "salaryDetail": {
            "france": {
                "entry": 33000,
                "mid": 48000,
                "expert": 70000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : Plan national géothermie, APEC & exploitants de réseaux de chaleur"
            },
            "senegal": {
                "entry": 450000,
                "mid": 950000,
                "expert": 2000000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés en bureau d'ingénierie énergétique et projets durables à Dakar"
            }
        },
        "geosciencesPedagogyDetail": {
            "pathway": "De la chaleur de la roche aux radiateurs de la ville",
            "steps": [
                "♨️ Gradient thermique naturel de la Terre",
                "🔎 Prospection de l'aquifère profond chaud",
                "🚜 Forage du doublet géothermique",
                "🌡️ Pompage de l'eau à 75 °C",
                "🏢 Échangeur thermique & réseau urbain",
                "💧 Réinjection intégrale de l'eau refroidie",
                "🌿 Chaleur 100% propre et renouvelable"
            ]
        }
    },
    {
        "id": "technicien-laboratoire-geosciences",
        "slug": "technicien-laboratoire-geosciences",
        "title": "Technicien de Laboratoire & d'Instrumentation Géologique",
        "aliases": [
            "Technicien géologue de laboratoire",
            "Préparateur en lames minces",
            "Opérateur d'essais géotechniques",
            "Geosciences Laboratory Technician"
        ],
        "icon": "🧪",
        "familyId": "sciences-terre-geosciences",
        "domain": "Analyse, laboratoire & instrumentation",
        "domainId": "analyse-laboratoire-instrumentation",
        "subdomain": "Préparation d'Échantillons & Essais Physico-Chimiques",
        "shortDescription": "Maillon indispensable de la recherche et de l'industrie minérale, il prépare les échantillons de roche (sciage, polissage, lames minces), conduit les essais normalisés et entretient le parc d'instruments.",
        "longDescription": "Avant qu'un géologue ou un chercheur ne puisse observer une roche au microscope ou déterminer sa composition à la microsonde, un travail artisanal et scientifique d'une précision millimétrique est indispensable. Le technicien de laboratoire en géosciences est le maître de cette préparation. Spécialiste du façonnage des matériaux géologiques, il scie les carottes de roche, les enrobe dans des résines sous vide et les polit pour obtenir des lames minces de 30 micromètres d'épaisseur parfaitement transparentes. Il conduit également les essais physiques standardisés (granulométrie, limites d'Atterberg, calcimétrie, perméabilité) et veille au bon fonctionnement quotidien des équipements d'analyse.",
        "simpleDefinition": "Technicien méticuleux qui découpe, polit et prépare les cailloux et carottes de roche pour qu'ils soient si fins et transparents qu'on puisse les examiner au microscope.",
        "level": "Bac +2 à Bac +3 (BTS Géologie Appliquée / BUT Chimie ou Génie Civil)",
        "missions": [
            "Préparer des lames minces de roches et de sols d'une épaisseur standard de 30 micromètres (sciage, collage, rodage, polissage)",
            "Fabriquer des sections polies pour l'examen des minerais opaques au microscope en lumière réfléchie",
            "Réaliser les analyses granulométriques par tamisage mécanique et sédimentométrie",
            "Exécuter les essais géotechniques d'identification des sols (teneur en eau, limites d'Atterberg, valeur au bleu de méthylène)",
            "Assurer la maintenance de premier niveau des scies diamantées, polisseuses et balances de précision",
            "Tenir le registre de traçabilité des échantillons et gérer les stocks de résines, abrasifs et consommables de laboratoire",
            "Appliquer rigoureusement les règles d'hygiène, sécurité et gestion des déchets chimiques du laboratoire"
        ],
        "workEnvironment": "Laboratoires de géologie universitaire, centres techniques de matériaux et bureaux d'études de mécanique des sols (ateliers de sciage de roches, salles d'essais physiques, hottes chimiques).",
        "typicalDay": [
            {
                "time": "08h00",
                "activity": "Découpe de 10 carottes de granite à la scie diamantée sous arrosage d'eau"
            },
            {
                "time": "09h30",
                "activity": "Collage des talons de roche sur lames de verre à la résine époxy sous presse chauffante"
            },
            {
                "time": "11h00",
                "activity": "Rodage micrométrique des lames sur plateau rotatif avec carbure de silicium pour atteindre 30 µm d'épaisseur"
            },
            {
                "time": "12h30",
                "activity": "Déjeuner avec l'équipe technique du laboratoire"
            },
            {
                "time": "13h30",
                "activity": "Contrôle de l'épaisseur de la lame mince sous microscope polarisant en observant la teinte de biréfringence du quartz (gris de 1er ordre)"
            },
            {
                "time": "15h00",
                "activity": "Lancement d'un essai de calcimétrie Bernard pour mesurer le pourcentage de carbonate de calcium d'un sédiment"
            },
            {
                "time": "16h30",
                "activity": "Nettoyage des équipements, neutralisation des boues de sciage et rangement des lames étiquetées"
            },
            {
                "time": "17h15",
                "activity": "Mise à jour du fichier de suivi des commandes d'analyses pour les chercheurs"
            }
        ],
        "companyRole": "Socle de la qualité des données scientifiques, sans son savoir-faire manuel et méticuleux, aucune analyse microscopique n'est possible.",
        "skills": {
            "technical": [
                "Techniques de confection de lames minces pétrographiques et de sections polies",
                "Utilisation de machines de découpe et de polissage de haute précision (scies diamantées, polisseuses automatiques)",
                "Normes d'essais normalisés sur sols et granulats (normes NF P 94-xxx)",
                "Optique polarisante de contrôle (échelle de teintes de Newton)",
                "Gestion des produits chimiques (résines, solvants, acides) et sécurité en laboratoire",
                "Gestion rigoureuse des stocks et étiquetage d'échantillons géologiques"
            ],
            "human": [
                "Dextérité manuelle exceptionnelle et patience d'orfèvre",
                "Sens aigu du détail et exigence d'une finition parfaite",
                "Sens pratique et esprit d'organisation dans un atelier",
                "Respect strict des consignes de sécurité (port d'EPI, lunettes, gants)"
            ],
            "tools": [
                "Scie diamantée Buehler / Struers",
                "Polisseuse automatique",
                "Microscope polarisant de contrôle",
                "Calcimètre de Bernard",
                "Tamis normalisés AFNOR",
                "Étuve de séchage"
            ]
        },
        "geosciencesPedagogy": "Parcours clé « De la carotte de roche à la lame mince de 30 µm » : 🪨 Bloc rocheux brut ➔ 🪚 Sciage de précision au disque diamant ➔ 🧴 Imprégnation sous vide à la résine ➔ 🔬 Collage sur lame de verre ➔ ⚙️ Rodage jusqu'à 30 micromètres ➔ ✨ Polissage au diamant 1 µm ➔ 🔍 Prêt pour l'observation au microscope",
        "studies": {
            "pathway": [
                {
                    "level": "Bac",
                    "degree": "Bac STL (Sciences et Technologies de Laboratoire) ou Bac Général"
                },
                {
                    "level": "Bac +2",
                    "degree": "BTS Géologie Appliquée (ex: Lycée Loritz Nancy) ou BTS Métiers de la Chimie"
                },
                {
                    "level": "Bac +3",
                    "degree": "BUT Génie Biologique / Génie Civil / Chimie ou Licence Pro Métiers de l'Instrumentation"
                }
            ],
            "schools": [
                {
                    "name": "Université de Poitiers - Faculté des Sciences (UFR SFA - Département Géosciences)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Lycée Henri Loritz (Nancy - BTS Géologie Appliquée)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut Supérieur d'Enseignement Professionnel (ISEP de Diamniadio - Filières Mines & Travaux)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Lycée Technique Industriel Maurice Delafosse (Dakar)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certificat de préparateur en microscopie pétrographique",
                "Habilitation Sauveteur Secouriste du Travail (SST)"
            ]
        },
        "career": {
            "sectors": [
                "Laboratoires de recherche géologique (CNRS, universités, BRGM)",
                "Bureaux d'études géotechniques et de contrôle des sols",
                "Compagnies minières et cimenteries",
                "Laboratoires d'essais des matériaux pour le BTP",
                "Muséums d'histoire naturelle"
            ],
            "companies": [
                "BRGM",
                "Ginger CEBTP",
                "Fugro",
                "Université de Poitiers",
                "SOCOCIM Industries (Sénégal)",
                "SGS Minéraux"
            ],
            "evolution": [
                "Technicien supérieur principal",
                "Responsable d'atelier de préparation d'échantillons",
                "Assistant ingénieur de laboratoire",
                "Gestionnaire de parc instrumental"
            ],
            "pros": [
                "Métier concret alliant dextérité manuelle et fierté d'un résultat artisanal parfait",
                "Rôle indispensable très apprécié des géologues et chercheurs",
                "Cadre de travail stable en laboratoire"
            ],
            "cons": [
                "Travail salissant (poussières de roche, eau de sciage) nécessitant le port continu d'EPI",
                "Tâches répétitives lors des campagnes de préparation de masse",
                "Risques liés aux outils coupants et produits chimiques nécessitant une vigilance permanente"
            ]
        },
        "gettingStarted": "Effectuer des stages d'atelier dans un laboratoire de pétrographie ou de géotechnique et développer une rigueur minutieuse dans la manipulation d'échantillons fragiles.",
        "aiImpact": {
            "level": "Faible / Savoir-faire manuel irremplaçable",
            "opportunities": [
                "Automatisation du suivi des échantillons par puces RFID et code-barres LIMS",
                "Pilotage numérique automatisé de certaines étapes de rodage"
            ],
            "challenges": [
                "L'hétérogénéité naturelle des roches impose une adaptation constante de la pression manuelle"
            ],
            "humanEdge": "Le doigté pour amener une roche friable à exactement 30 micromètres sans l'arracher reste un tour de main artisanal que les robots ne maîtrisent pas."
        },
        "africaContext": {
            "title": "Le Technicien de Laboratoire Géologique au Sénégal : Aux Côtés des Mines et Cimenteries",
            "description": "Au Sénégal, les techniciens de laboratoire géologique sont au cœur de l'industrie extractive : contrôle des carottes de minerai d'or à Sabodala, contrôle de qualité du calcaire et du ciment à la SOCOCIM et aux Ciments du Sahel, et essais géotechniques au LBTP de Dakar. L'ISEP de Diamniadio et le Lycée Delafosse forment des techniciens très prisés.",
            "keyInstitutions": [
                "Laboratoire du Bâtiment et des Travaux Publics (LBTP Dakar)",
                "Laboratoires de l'Institut des Sciences de la Terre (IST - UCAD)",
                "ISEP de Diamniadio (Institut Supérieur d'Enseignement Professionnel)",
                "Laboratoires d'analyse minière SGS / Bureau Veritas (Kédougou)"
            ],
            "projects": [
                "Préparation des échantillons d'exploration aurifère pour le contrôle QA/QC",
                "Essais géotechniques d'identification des sols pour les infrastructures routières",
                "Analyses granulométriques pour les sables de fonderie et de béton"
            ],
            "opportunities": "Emplois stables et immédiats pour les titulaires de BTS ou diplômes ISEP dans les laboratoires miniers et de travaux publics."
        },
        "salary": "🇫🇷 France : 22 000 - 38 000 € brut/an • 🇸🇳 Sénégal : 250 000 - 850 000 FCFA net/mois",
        "connectedFamilies": [
            "industrie-mecanique",
            "btp-architecture",
            "sciences-biotech",
            "education-formation"
        ],
        "relatedJobs": [
            "geologue",
            "ingenieur-etudes-geosciences",
            "mineralogiste",
            "ingenieur-materiaux-geosciences",
            "ingenieur-recherche-geosciences"
        ],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Cadre de laboratoire et instrumentation - Département Géosciences",
                "url": "https://sfa.univ-poitiers.fr/geosciences/formations/master-eur-parcours-materiaux-mineraux/",
                "type": "formation"
            },
            {
                "organization": "CNRS",
                "title": "Métiers de techniciens en sciences chimiques et géologiques",
                "url": "https://carrieres.cnrs.fr",
                "type": "institutionnel"
            }
        ],
        "sourcePoitiers": true,
        "sourceBRGM": true,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "L'épaisseur standard d'une lame mince géologique est universellement fixée à exactement 30 micromètres (0,03 mm), soit environ la moitié de l'épaisseur d'un cheveu humain.",
            "pourquoi": "À cette épaisseur exacte, le minéral de référence (le quartz) présente une teinte de biréfringence caractéristique (gris clair du premier ordre) qui permet d'identifier à coup sûr tous les autres minéraux voisins.",
            "a_retenir": "Le technicien préparateur est l'artisan invisible sans qui les géologues ne verraient rien à travers les roches."
        },
        "salaryDetail": {
            "france": {
                "entry": 22000,
                "mid": 28000,
                "expert": 38000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : Grilles de la fonction publique (corps des Techniciens de recherche) et conventions BTP"
            },
            "senegal": {
                "entry": 250000,
                "mid": 450000,
                "expert": 850000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés pour les techniciens de laboratoire minier et BTP à Dakar et Thiès"
            }
        },
        "geosciencesPedagogyDetail": {
            "pathway": "De la carotte de roche à la lame mince de 30 µm",
            "steps": [
                "🪨 Bloc rocheux brut",
                "🪚 Sciage de précision au disque diamant",
                "🧴 Imprégnation sous vide à la résine",
                "🔬 Collage sur lame de verre",
                "⚙️ Rodage jusqu'à 30 micromètres",
                "✨ Polissage au diamant 1 µm",
                "🔍 Prêt pour l'observation au microscope"
            ]
        }
    },
    {
        "id": "paleontologue",
        "slug": "paleontologue",
        "title": "Paléontologue / Détective des Archives Fossiles du Vivant",
        "aliases": [
            "Chercheur en paléontologie",
            "Paléobiologiste",
            "Paléoclimatologue",
            "Paleontologist"
        ],
        "icon": "🦴",
        "familyId": "sciences-terre-geosciences",
        "domain": "Paléontologie",
        "domainId": "paleontologie-archives-vivant",
        "subdomain": "Fouilles, Évolution & Paléoenvironnements",
        "shortDescription": "Véritable détective du passé géologique, il extrait et étudie les archives fossiles pour comprendre l'origine et l'évolution des espèces, les grandes extinctions et les climats anciens.",
        "longDescription": "La paléontologie est l'étude des archives fossiles du vivant. Les paléontologues ont pour but de comprendre les êtres vivants du passé lointain ainsi que leur mode de vie. Cette discipline se situe à l'intersection de la géologie (étude des roches sédimentaires, milieux de dépôt, corrélations stratigraphiques) et de la biologie (anatomie comparée, évolution, écosystèmes disparus). Bien qu'associée aux fouilles spectaculaires sur le terrain, elle est en réalité essentiellement pratiquée en laboratoire : dégagement minutieux des fossiles de leur gangue rocheuse, observation au microscope et tomographie 3D à rayons X, datation biostratigraphique et reconstitution des paléoenvironnements.",
        "simpleDefinition": "Scientifique qui fouille la terre pour trouver des fossiles (dinosaures, coquillages anciens, plantes), étudie comment les animaux ont évolué et reconstitue les climats du passé.",
        "level": "Bac +8 (Doctorat en Paléontologie / Paléobiologie)",
        "missions": [
            "Organiser et diriger des campagnes de fouilles de terrain sur des gisements fossilifères remarquables",
            "Repérer précisément la position stratigraphique et les coordonnées spatiales de chaque vestige découvert",
            "Dégager et consolider minutieusement les fossiles de leur gangue rocheuse au laboratoire (percuteurs pneumatiques, résines)",
            "Étudier l'anatomie comparée, la morphologie et les relations de parenté évolutive (phylogénie, cladistique)",
            "Utiliser l'imagerie 3D de pointe : micro-tomographie à rayons X (micro-CT scan) pour observer les structures internes sans casser le fossile",
            "Dater les couches géologiques par biostratigraphie (fossiles stratigraphiques guides : ammonites, foraminifères, conodontes)",
            "Reconstituer les écosystèmes et paléoclimats anciens pour comprendre la réaction de la vie face aux crises biologiques majeures"
        ],
        "workEnvironment": "Campagnes de fouilles en plein air sous toutes les latitudes (déserts, falaises, carrières, grottes), complétées par un long travail en laboratoire de paléontologie, musées d'histoire naturelle et centres d'imagerie 3D.",
        "typicalDay": [
            {
                "time": "08h30",
                "activity": "Début de la journée de fouille sur un gisement sédimentaire du Mésozoïque : repérage au pinceau et burin fin"
            },
            {
                "time": "10h30",
                "activity": "Mise au jour d'une vertèbre fossilisée : consolidation in situ avec de la résine acrylique avant plâtrage"
            },
            {
                "time": "13h00",
                "activity": "Déjeuner sur le chantier de fouille et pointage GPS des découvertes sur le relevé stratigraphique"
            },
            {
                "time": "14h30",
                "activity": "Au laboratoire : traitement d'un scan tomographique 3D d'une boîte crânienne fossile sur station de calcul"
            },
            {
                "time": "16h30",
                "activity": "Reconstitution virtuelle des cavités endocrâniennes et de l'oreille interne pour déduire le comportement auditif"
            },
            {
                "time": "18h00",
                "activity": "Rédaction d'une description anatomique pour un article destiné à une revue internationale de paléontologie"
            }
        ],
        "companyRole": "Gardien de la mémoire biologique planétaire, il éclaire les mécanismes de l'évolution et les leçons du passé face à la crise actuelle de la biodiversité.",
        "skills": {
            "technical": [
                "Anatomie comparée des vertébrés et invertébrés",
                "Biostratigraphie, biochronologie et corrélations géologiques",
                "Taphonomie (processus de fossilisation, altération, transport des restes)",
                "Tomographie à rayons X (micro-CT) et modélisation morphologique 3D",
                "Systématique phylogénétique et analyses cladistiques",
                "Paléoécologie et géochimie isotopique appliquée aux dents et coquilles fossiles"
            ],
            "human": [
                "Patience infinie et extrême minutie manuelle",
                "Curiosité passionnée pour l'histoire du vivant et l'évolution",
                "Sens aigu de l'observation des détails anatomiques",
                "Aisance à vulgariser pour partager la magie des fossiles avec le public"
            ],
            "tools": [
                "Micro-percuteur pneumatique",
                "Micro-CT scan à rayons X",
                "Logiciels de reconstruction 3D (Avizo, 3D Slicer)",
                "Microscope polarisant",
                "Loupe binoculaire",
                "Résines de consolidation (Paraloïd B72)"
            ]
        },
        "geosciencesPedagogy": "Parcours clé « Du fossile enfoui à l'histoire de la vie » : ⛏️ Campagne de fouille sur le terrain ➔ 📦 Dégagement minutieux de la gangue ➔ 🔬 Micro-tomographie 3D à rayons X ➔ 🦴 Anatomie comparée & phylogénie ➔ ⚛️ Datation biostratigraphique précise ➔ 🌍 Reconstitution du paléoenvironnement ➔ 🏛️ Exposition au musée & transmission",
        "studies": {
            "pathway": [
                {
                    "level": "Bac +3",
                    "degree": "Licence Sciences de la Terre ou Licence Sciences de la Vie (Université de Poitiers)"
                },
                {
                    "level": "Bac +5",
                    "degree": "Master BEE Parcours Paléontologie (Université de Poitiers) ou Master Paléontologie & Évolution (MNHN Paris, Lyon)"
                },
                {
                    "level": "Bac +8",
                    "degree": "Doctorat en Paléontologie / Paléobiologie"
                }
            ],
            "schools": [
                {
                    "name": "Université de Poitiers - Master BEE Parcours Paléontologie / UMR PALEVOPRIM (Laboratoire de renommée mondiale)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Muséum National d'Histoire Naturelle (MNHN Paris)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Claude Bernard Lyon 1 (Paléontologie et Paléoenvironnements)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut Fondamental d'Afrique Noire (IFAN Cheikh Anta Diop - Laboratoire de Paléontologie)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Doctorat d'Université (PhD)",
                "Habilitation à Diriger des Recherches (HDR)"
            ]
        },
        "career": {
            "sectors": [
                "Musées d'histoire naturelle et collections patrimoniales",
                "Universités et grands instituts de recherche (CNRS, MNHN)",
                "Industrie pétrolière et minière (biostratigraphie des forages)",
                "Médiation scientifique et parcs à thèmes géologiques"
            ],
            "companies": [
                "Université de Poitiers (Laboratoire PALEVOPRIM)",
                "CNRS",
                "MNHN Paris",
                "Compagnies pétrolières (consultance biostratigraphique)",
                "Musées régionaux"
            ],
            "evolution": [
                "Maître de conférences / Chercheur",
                "Conservateur de collections paléontologiques",
                "Professeur des universités / Directeur de recherche",
                "Directeur de musée d'histoire naturelle"
            ],
            "pros": [
                "Métier de pure passion réalisant les rêves d'enfance d'exploration",
                "Découvertes spectaculaires ayant un écho médiatique mondial",
                "Compréhension profonde des origines de la biodiversité"
            ],
            "cons": [
                "Nombre de postes très restreint nécessitant une persévérance académique totale",
                "Longues années de précarité post-doctorale",
                "Prélèvement et préparation de fossiles parfois très fastidieux"
            ]
        },
        "gettingStarted": "Choisir le Master Paléontologie de l'Université de Poitiers (associé au laboratoire de renommée mondiale PALEVOPRIM) et participer activement à des chantiers de fouilles estivales dès la licence.",
        "aiImpact": {
            "level": "Élevé / Révolution de la segmentation 3D",
            "opportunities": [
                "Segmentation automatique des os et dents fossilisés dans les volumes de scans tomographiques",
                "Reconnaissance automatisée de microfossiles par réseaux convolutionnels",
                "Modélisation biomécanique prédictive des mouvements d'animaux disparus"
            ],
            "challenges": [
                "Nécessité de vérifier manuellement chaque frontière anatomique"
            ],
            "humanEdge": "L'interprétation paléoécologique et l'œil d'expert pour déceler un fragment d'hominidé fossile au sol restent irremplaçables."
        },
        "africaContext": {
            "title": "La Paléontologie en Afrique : Berceau de l'Humanité et des Vertébrés",
            "description": "L'Afrique est le berceau de l'humanité (Toumaï découvert au Tchad par la mission franco-tchadienne menée avec l'Université de Poitiers, Lucy en Éthiopie) et abrite des gisements de vertébrés fossiles uniques au Sénégal (bassin de Matam, dépôts éocènes de Taïba). Le laboratoire PALEVOPRIM de l'Université de Poitiers et l'IFAN à Dakar entretiennent des liens historiques majeurs.",
            "keyInstitutions": [
                "Laboratoire de Paléontologie de l'IFAN Cheikh Anta Diop (UCAD)",
                "PALEVOPRIM (Université de Poitiers / CNRS - Berceau de l'étude des hominidés anciens)",
                "Centre National de Recherche pour le Développement (CNRD Tchad)",
                "Musée Théodore Monod d'Art Africain / IFAN Dakar"
            ],
            "projects": [
                "Étude des faunes fossiles marines et terrestres du Paléogène sénégalais",
                "Recherches sur les hominoïdes anciens et les paléoenvironnements africains",
                "Conservation et numérisation 3D des collections de fossiles ouest-africains"
            ],
            "opportunities": "Missions de recherche internationales de très haut niveau et collaborations universitaires d'élite."
        },
        "salary": "🇫🇷 France : 30 000 - 65 000 € brut/an • 🇸🇳 Sénégal : 450 000 - 1 800 000 FCFA net/mois",
        "connectedFamilies": [
            "lettres-langues-sciences-humaines",
            "sciences-biotech",
            "education-formation",
            "culture-medias"
        ],
        "relatedJobs": [
            "geologue",
            "geoarcheologue",
            "chercheur-geosciences",
            "mineralogiste",
            "pedologue"
        ],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Fiche Métier Paléontologue - Département Géosciences",
                "url": "https://sfa.univ-poitiers.fr/geosciences/debouches-professionnels/paleontologue/",
                "type": "metier"
            },
            {
                "organization": "Université de Poitiers",
                "title": "Master BEE Parcours Paléontologie & Laboratoire PALEVOPRIM",
                "url": "https://sfa.univ-poitiers.fr/geosciences/formations/master-bee-parcours-paleontologie/",
                "type": "formation"
            }
        ],
        "sourcePoitiers": true,
        "sourceBRGM": true,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "C'est une équipe de recherche issue de l'Université de Poitiers (menée par le Pr Michel Brunet) qui a découvert en 2001 au Tchad le fossile de 'Toumaï' (Sahelanthropus tchadensis), vieux de 7 millions d'années, considéré comme le plus ancien représentant connu de l'humanité.",
            "pourquoi": "L'Université de Poitiers abrite avec le laboratoire PALEVOPRIM l'un des centres mondiaux les plus prestigieux pour l'étude des primates et des hominidés anciens.",
            "a_retenir": "Les géosciences et la paléontologie de Poitiers sont directement inscrites dans l'Histoire universelle de la découverte de nos origines."
        },
        "salaryDetail": {
            "france": {
                "entry": 30000,
                "mid": 44000,
                "expert": 65000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : Grilles CNRS, Muséum d'Histoire Naturelle & Université de Poitiers"
            },
            "senegal": {
                "entry": 450000,
                "mid": 900000,
                "expert": 1800000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés pour les chercheurs universitaires et conservateurs à Dakar"
            }
        },
        "geosciencesPedagogyDetail": {
            "pathway": "Du fossile enfoui à l'histoire de la vie",
            "steps": [
                "⛏️ Campagne de fouille sur le terrain",
                "📦 Dégagement minutieux de la gangue",
                "🔬 Micro-tomographie 3D à rayons X",
                "🦴 Anatomie comparée & phylogénie",
                "⚛️ Datation biostratigraphique précise",
                "🌍 Reconstitution du paléoenvironnement",
                "🏛️ Exposition au musée & transmission"
            ]
        }
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

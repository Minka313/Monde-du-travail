/**
 * CATALOGUE OFFICIEL DES MÉTIERS DE L'ÉNERGIE, ÉLECTRICITÉ & TRANSITION ÉNERGÉTIQUE
 * Le Monde du Travail — 14 Domaines d'Excellence & Référentiel Pédagogique
 * Source documentaire principale : Référentiel officiel Energierecrute (portail emploi/formation énergie)
 * Total métiers documentés : 26 fiches détaillées haute profondeur
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. LES 14 DOMAINES DE L'ÉNERGIE, ÉLECTRICITÉ & TRANSITION ÉNERGÉTIQUE
  // =========================================================================
  const ENERGY_DOMAINS = [
    {
        "id": "recherche-ingenierie-etudes",
        "name": "Recherche, Développement & Ingénierie de Projet",
        "icon": "🔬",
        "description": "R&D sur les technologies de rupture, modélisation thermodynamique, conception de systèmes et études de faisabilité énergétique.",
        "subdomains": [
            "R&D énergétique",
            "Études thermiques du bâtiment",
            "Génie climatique CVC",
            "Études énergétiques industrielles",
            "Affaires & Ingénierie énergétique"
        ]
    },
    {
        "id": "energie-solaire-pv-thermique",
        "name": "Énergie Solaire Photovoltaïque & Thermique",
        "icon": "☀️",
        "description": "Centrales solaires au sol, toitures photovoltaïques, autoconsommation, ombrières, solaire flottant et production d'eau chaude solaire thermique.",
        "subdomains": [
            "Chefferie de projet photovoltaïque",
            "Installation & Raccordement solaire",
            "Exploitation & Maintenance de centrales PV",
            "Solaire thermique & Chauffe-eau solaires",
            "Systèmes solaires autonomes & Pompage solaire"
        ]
    },
    {
        "id": "energie-eolienne-onshore-offshore",
        "name": "Énergie Éolienne Onshore & Offshore",
        "icon": "💨",
        "description": "Développement de parcs éoliens terrestres et maritimes (posés et flottants), études de vent, travaux de raccordement et maintenance de turbines en hauteur.",
        "subdomains": [
            "Développement éolien terrestre",
            "Éolien offshore posé & flottant",
            "Maintenance de turbines éoliennes",
            "Inspection en hauteur & Pales",
            "Génie électrique éolien"
        ]
    },
    {
        "id": "hydroelectricite-hydraulique",
        "name": "Hydroélectricité & Aménagements Hydrauliques",
        "icon": "💧",
        "description": "Grands barrages de retenue, centrales au fil de l'eau, Stations de Transfert d'Énergie par Pompage (STEP) et pico/micro-turbines hydrauliques.",
        "subdomains": [
            "Ingénierie de barrages & Génie civil hydraulique",
            "Exploitation de centrales hydroélectriques",
            "Micro & Petite hydraulique rurale",
            "Maintenance des turbines hydrauliques (Pelton, Francis, Kaplan)",
            "Gestion des réservoirs & Sécurité des digues"
        ]
    },
    {
        "id": "geothermie-chaleur-terre",
        "name": "Géothermie & Énergie de la Terre",
        "icon": "🌋",
        "description": "Chaleur de la terre pour le chauffage urbain (basse enthalpie) et production d'électricité par vapeur souterraine (haute enthalpie) ou sondes géothermiques.",
        "subdomains": [
            "Géothermie haute température & Électricité",
            "Géothermie très basse énergie & Pompes à chaleur géothermiques",
            "Forage géothermique profond",
            "Réseaux de chaleur géothermiques urbains",
            "Hydrogéologie thermique"
        ]
    },
    {
        "id": "biomasse-biogaz-dechets",
        "name": "Biomasse, Biogaz & Valorisation Énergétique",
        "icon": "🌿",
        "description": "Transformation des matières organiques en énergie : méthanisation agricole et industrielle, biogaz, biométhane carburant et chaufferies bois-énergie.",
        "subdomains": [
            "Méthanisation agricole & Déchets organiques",
            "Biométhane épuré & Injection réseau",
            "Biomasse solide & Chaufferies bois",
            "Cogénération biomasse agro-industrielle",
            "Valorisation énergétique des déchets (CSR / UIOM)"
        ]
    },
    {
        "id": "reseaux-transport-distribution",
        "name": "Réseaux Électriques, Transport & Distribution",
        "icon": "⚡",
        "description": "Lignes très haute tension aériennes et souterraines, postes de transformation, dispatching temps réel et réseaux électriques intelligents (Smart Grids).",
        "subdomains": [
            "Construction & Travaux de réseaux HT/BT",
            "Conduite, Télégestion & Dispatching de réseaux",
            "Smart grids & Réseaux communicants",
            "Maintenance de lignes & Postes sources",
            "Interconnexions régionales & Électrification rurale"
        ]
    },
    {
        "id": "energie-nucleaire-surete",
        "name": "Énergie Nucléaire & Sûreté",
        "icon": "⚛️",
        "description": "Conduite des réacteurs nucléaires décarbonés, maintenance mécanique et chaudronnerie en zone contrôlée, sûreté, radioprotection et gestion des arrêts de tranche.",
        "subdomains": [
            "Conduite de réacteur & Exploitation de tranche",
            "Maintenance mécanique, chaudronnerie & robinetterie nucléaire",
            "Contrôle radiologique & Sécurité nucléaire",
            "Ingénierie de sûreté & Facteurs humains",
            "Démantèlement & Gestion des combustibles"
        ]
    },
    {
        "id": "genie-climatique-cvc",
        "name": "Génie Climatique, Froid & Systèmes CVC",
        "icon": "❄️",
        "description": "Chauffage, Ventilation, Climatisation (CVC), réfrigération industrielle et commerciale, fluides frigorigènes écologiques et pompes à chaleur réversibles.",
        "subdomains": [
            "Froid commercial/industriel & CVC tertiaire",
            "Climatisation de précision (data centers, blocs opératoires)",
            "Pompes à chaleur & Éco-conception thermique",
            "Maintenance multitechnique génie climatique",
            "Fluides naturels & Transition F-Gas"
        ]
    },
    {
        "id": "maitrise-energie-audit-meer",
        "name": "Maîtrise de l'Énergie, Audit & Performance MEER",
        "icon": "📊",
        "description": "Efficacité énergétique industrielle et tertiaire, management de l'énergie ISO 50001, audit réglementaire, valorisation CEE et récupération de chaleur fatale.",
        "subdomains": [
            "Audit énergétique & Décarbonation industrielle",
            "Management de l'énergie ISO 50001",
            "Certificats d'Économies d'Énergie (CEE)",
            "Sous-comptage & IoT énergétique",
            "Décret tertiaire & Sobriété immobilière"
        ]
    },
    {
        "id": "marches-trading-economie-energie",
        "name": "Marchés, Trading & Économie de l'Énergie",
        "icon": "📈",
        "description": "Négociation de gros de l'électricité et du gaz sur bourses spot/terme, contrats d'achat d'énergie à long terme (PPA), quotas de carbone et analyse prédictive des cours.",
        "subdomains": [
            "Trading d'électricité & Gaz / Marchés de capacité",
            "Marchés Day-Ahead & Intraday",
            "Contrats PPA (Power Purchase Agreements)",
            "Garanties d'Origine & Quotas carbone",
            "Modélisation quantitative des prix"
        ]
    },
    {
        "id": "commerce-solutions-energetiques",
        "name": "Commerce, Vente & Solutions Énergétiques B2B",
        "icon": "🤝",
        "description": "Vente de contrats de performance énergétique garantie (CPE), d'installations solaires photovoltaïques en tiers-investissement et de services d'utilités aux entreprises.",
        "subdomains": [
            "Contrats de performance énergétique (CPE) & Équipements CVC/Solaire",
            "Vente consultative de solutions photovoltaïques B2B",
            "Services d'efficacité énergétique aux collectivités",
            "Distribution de matériel électrique et EnR",
            "Montage de financements énergétiques verts"
        ]
    },
    {
        "id": "hse-securite-risques-energie",
        "name": "Hygiène, Sécurité, Environnement & Risques Énergétiques",
        "icon": "🦺",
        "description": "Gestion des risques industriels majeurs, habilitations électriques, zonage atmosphères explosives (ATEX), travaux en hauteur et conformité environnementale ICPE.",
        "subdomains": [
            "Prévention des risques électriques, chimiques & industriels",
            "Sécurité sur chantiers éoliens & solaires",
            "Réglementation ATEX & Risques atmosphériques",
            "Systèmes de management intégré ISO 14001 / ISO 45001",
            "Plans d'intervention d'urgence & Protection des sites critiques"
        ]
    },
    {
        "id": "exploration-ressources-sous-sol",
        "name": "Exploration & Ressources Géologiques du Sous-Sol",
        "icon": "🌍",
        "description": "Géosciences appliquées : exploration d'aquifères profonds pour géothermie, stockage souterrain de CO2 et d'hydrogène, et prospection de nouvelles ressources propres.",
        "subdomains": [
            "Modélisation géologique & Caractérisation de réservoirs",
            "Géophysique appliquée & Imagerie sismique",
            "Stockage géologique de gaz (CO2, H2)",
            "Prospection d'hydrogène naturel blanc",
            "Mécanique des roches & Risques de sismicité induite"
        ]
    }
];

  // =========================================================================
  // 2. LES 26 FICHES MÉTIERS DÉTAILLÉES (HAUTE PROFONDEUR)
  // =========================================================================
  const ENERGY_JOBS = [
    {
        "id": "ingenieur-rd-energie",
        "slug": "ingenieur-rd-energie",
        "title": "Ingénieur R&D en Technologies Énergétiques",
        "aliases": [
            "Chercheur en génie énergétique",
            "Ingénieur innovation bas-carbone",
            "Ingénieur modélisation thermodynamique"
        ],
        "icon": "🔬",
        "image": "https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Recherche, Développement & Ingénierie de Projet",
        "domainId": "recherche-ingenierie-etudes",
        "subdomain": "R&D énergétique",
        "energyTechnology": [
            "Stockage d'énergie",
            "Hydrogène",
            "Conversion thermodynamique",
            "Batteries"
        ],
        "energySector": "Recherche & Industrie Énergétique",
        "sourceEnergierecrute": true,
        "isEmerging": true,
        "level": "Bac +5 (Ingénieur ou Master) à Bac +8 (Doctorat en Énergétique)",
        "salary": "🇫🇷 France : 3 200 - 5 400 € net/mois (~45 000 - 78 000 € brut/an, Source : Energierecrute / APEC) • 🇸🇳 Sénégal : 600 000 - 2 000 000 FCFA / mois (Centres de recherche, CEA, startups cleantech)",
        "simpleDefinition": "L'ingénieur R&D en énergie conçoit, modélise et teste les technologies de demain : nouveaux systèmes de stockage par batterie, vecteurs hydrogène vert, matériaux photovoltaïques à haut rendement et procédés de captage de chaleur fatale.",
        "shortDescription": "Profil scientifique de pointe répertorié par Energierecrute, ce chercheur conçoit les briques technologiques qui accélèrent la transition vers un mix 100% décarboné.",
        "longDescription": "Comme documenté dans les classifications R&D d'Energierecrute, l'ingénieur de recherche et développement en énergie imagine et valide les solutions de rupture énergétique. Travaillant à l'interface entre la physique des matériaux, la thermodynamique, la chimie des batteries et la mécanique des fluides, il modélise numériquement les cycles thermiques, réalise des prototypes à l'échelle laboratoire et supervise les bancs d'essais pilotes. Il collabore étroitement avec les universités, dépose des brevets industriels et analyse la faisabilité technico-économique des technologies propres avant leur passage à l'échelle industrielle.",
        "mainObjective": "Développer et breveter des technologies énergétiques innovantes à haut rendement pour maximiser la production décarbonée et réduire l'empreinte environnementale.",
        "companyRole": "Pionnier scientifique et moteur de l'innovation technologique de l'entreprise.",
        "workEnvironment": [
            "🔬 Laboratoires de recherche industrielle et centres de R&D privés (EDF R&D, CEA, TotalEnergies OneTech)",
            "💻 Stations de calcul intensif et logiciels de simulation multi-physique",
            "🛠️ Halls d'essais pilotes pour le test de prototypes et de bancs de puissance"
        ],
        "missions": [
            "Concevoir des modèles mathématiques et numériques simulant les transferts thermiques et électrochimiques",
            "Piloter des campagnes d'essais expérimentaux sur bancs de test en laboratoire et analyser les séries de données",
            "Développer de nouveaux procédés de stockage d'électricité (batteries solides, hydrogène, volants d'inertie)",
            "Rédiger des demandes de brevets de propriété industrielle et des publications scientifiques internationales",
            "Assurer une veille technologique mondiale continue sur les ruptures scientifiques du secteur de l'énergie"
        ],
        "typicalDay": [
            {
                "time": "08:45",
                "title": "Revue des simulations nocturnes",
                "desc": "Analyse des calculs de dynamique des fluides (CFD) sur l'échangeur thermique d'une turbine haute température."
            },
            {
                "time": "11:00",
                "title": "Banc d'essai en laboratoire",
                "desc": "Supervision des mesures d'impédance électrochimique sur un nouveau prototype de cellule de batterie lithium-fer-phosphate."
            },
            {
                "time": "14:30",
                "title": "Point d'étape consortium de recherche",
                "desc": "Visioconférence avec un laboratoire universitaire partenaire sur l'électrolyse de l'eau à haute température."
            },
            {
                "time": "16:45",
                "title": "Rédaction d'une note de brevet",
                "desc": "Formalisation des revendications techniques sur un nouvel algorithme de gestion thermique de pack batterie."
            }
        ],
        "skills": {
            "technical": [
                "Thermodynamique avancée, mécanique des fluides et transferts thermiques",
                "Modélisation numérique multi-physique (ANSYS Fluent, COMSOL Multiphysics, MATLAB/Simulink)",
                "Électrochimie, technologies des accumulateurs et systèmes hydrogène",
                "Méthodologie expérimentale, métrologie et instrumentation de précision"
            ],
            "human": [
                "Curiosité intellectuelle insatiable et capacité d'innovation conceptuelle",
                "Rigueur scientifique absolue et esprit d'analyse critique",
                "Sens du travail en équipe pluridisciplinaire (chimistes, thermiciens, data scientists)",
                "Aisance rédactionnelle pour les dossiers de brevets et de subventions publiques"
            ],
            "tools": [
                "COMSOL Multiphysics, ANSYS Fluent",
                "MATLAB / Simulink, Python scientifique (NumPy, SciPy)",
                "Bancs d'essais instrumentés (thermocouples, débitmètres massiques, spectromètres)",
                "Outils de CAO 3D (SolidWorks, CATIA)"
            ],
            "analytical": [
                "Optimisation thermodynamique des cycles de Carnot et rendements exergétiques",
                "Analyse technico-économique du coût nivelé de l'énergie (LCOE) des technologies émergentes"
            ]
        },
        "specializations": [
            "R&D stockage électrochimique et batteries de nouvelle génération",
            "Technologies de l'hydrogène vert et piles à combustible",
            "Récupération de chaleur fatale et échangeurs thermodynamiques innovants"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Diplôme d'ingénieur (Bac +5)",
                    "title": "Diplôme d'Ingénieur en Génie Énergétique ou Électromécanique",
                    "desc": "Formation d'excellence en thermodynamique, mécanique des fluides et sciences des matériaux."
                },
                {
                    "step": "Master Recherche",
                    "title": "Master Recherche Énergétique & Procédés Décarbonés",
                    "desc": "Spécialisation dans les méthodes de modélisation avancée et de recherche en laboratoire."
                },
                {
                    "step": "Doctorat (Bac +8)",
                    "title": "Doctorat (PhD) en Sciences pour l'Ingénieur / Énergétique",
                    "desc": "Thèse CIFRE en partenariat avec un groupe énergétique, tremplin direct pour les postes de chercheur senior."
                }
            ],
            "schools": [
                {
                    "name": "Grenoble INP — Ense3 (Énergie, Eau, Environnement) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "CentraleSupélec / Mines Paris-PSL — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) / Génie Électromécanique — Sénégal",
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
                "Certification en Modélisation Numérique Avancée",
                "Agrément de sécurité laboratoire haute tension / haute pression"
            ],
            "schoolSubjects": [
                "Thermodynamique",
                "Mécanique des fluides",
                "Électrochimie",
                "Mathématiques appliquées"
            ]
        },
        "career": {
            "sectors": [
                "Grands groupes énergétiques mondiaux (EDF, ENGIE, TotalEnergies, Schneider Electric)",
                "Organismes publics de recherche (CEA, CNRS, IFP Énergies Nouvelles)",
                "Startups industrielles de la deeptech et constructeurs de batteries"
            ],
            "employerTypes": [
                "Centres de recherche appliquée",
                "Grands énergéticiens",
                "Startups industrielles innovantes"
            ],
            "evolution": "Ingénieur R&D junior ➔ Chef de projet innovation ➔ Responsable de pôle R&D ➔ Directeur scientifique groupe",
            "pros": "Stimulation intellectuelle permanente, contribution directe aux technologies du futur décarboné, environnement scientifique international.",
            "cons": "Cycles de recherche longs avant commercialisation, incertitude sur l'aboutissement de certains projets d'essais."
        },
        "gettingStarted": {
            "beginnerProject": "Créer un script Python simple modélisant le rendement théorique d'un panneau solaire selon la température ambiante.",
            "intermediateProject": "Simuler sous OpenModelica le comportement thermodynamique d'une pompe à chaleur avec différents fluides frigorigènes.",
            "advancedProject": "Rédiger un dossier de synthèse de 5 pages sur les technologies d'électrolyse PEM vs Alcaline pour la production d'hydrogène vert.",
            "portfolioIdeas": [
                "Code de modélisation thermique open source sur GitHub",
                "Rapport d'analyse comparative de systèmes de stockage d'énergie"
            ]
        },
        "aiImpact": {
            "level": "Révolutionnaire",
            "summary": "L'IA générative et l'apprentissage automatique accélèrent la découverte de nouveaux matériaux semi-conducteurs et optimisent instantanément les topologies d'échangeurs thermiques.",
            "automatedTasks": [
                "Dépouillement automatisé des gigaoctets de données de bancs d'essais",
                "Screening moléculaire par IA pour de nouvelles chimies de batteries"
            ],
            "emergingSkills": [
                "Utilisation de modèles d'IA prédictive pour la modélisation multi-échelle des matériaux"
            ],
            "humanEdge": "L'intuition scientifique des ruptures physiques, l'esprit critique devant les résultats expérimentaux inattendus et la vision stratégique d'application industrielle."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, des laboratoires comme le Centre d'Études et de Recherches sur les Énergies Renouvelables (CERER) de l'UCAD et l'ESP Dakar développent des projets R&D pour concevoir des panneaux photovoltaïques résistants aux poussières sahariennes et adapter les batteries de stockage aux températures extrêmes (> 45°C).",
            "localSectors": [
                "CERER (Université Cheikh Anta Diop de Dakar)",
                "Laboratoires de recherche de l'ESP et de l'UGB Saint-Louis",
                "Projets d'hydrogène vert de la zone industrielle de Kayar"
            ],
            "remoteWork": "Hybride (présence requise pour manipulations sur bancs d'essais / télétravail pour modélisation et rédaction).",
            "entrepreneurship": "Création d'un laboratoire privé de métrologie et d'optimisation des performances des équipements solaires pour l'Afrique de l'Ouest."
        },
        "relatedJobSlugs": [
            "chef-projet-energie-solaire-photovoltaique",
            "ingenieur-smart-grids-reseaux-intelligents",
            "energy-manager-auditeur-energetique",
            "charge-affaires-energetique-cvc"
        ],
        "connectedFamilies": [
            "sciences-biotech",
            "industrie-mecanique",
            "numerique-ia"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Métiers de l'énergie et R&D — Energierecrute",
                "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php",
                "source": "Energierecrute"
            },
            {
                "type": "portail",
                "title": "CEA Liten — Laboratoire d'innovation pour les énergies nouvelles",
                "url": "https://www.liten.cea.fr/",
                "source": "CEA"
            }
        ],
        "sources": [
            "Energierecrute",
            "CEA",
            "ADEME"
        ],
        "interests": [
            "explorer-decouvrir",
            "nature-environnement",
            "donnees-chiffres"
        ],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Les ingénieurs R&D en énergie testent désormais des cellules photovoltaïques à base de pérovskites capables de dépasser 33% de rendement de conversion, pulvérisant la limite historique du silicium classique.",
            "pourquoi": "Chaque pourcentage de rendement supplémentaire permet de produire des térawattheures d'électricité propre supplémentaires sans occuper un mètre carré de terrain en plus.",
            "a_retenir": "L'inventeur des technologies de rupture qui décarbonent la planète."
        }
    },
    {
        "id": "technicien-etudes-thermiques-batiment",
        "slug": "technicien-etudes-thermiques-batiment",
        "title": "Technicien en Études Thermiques du Bâtiment & Climatisation",
        "aliases": [
            "Technicienne bureau d'études thermiques",
            "Dessinateur projeteur CVC",
            "Chargé d'études thermiques RT/RE2020"
        ],
        "icon": "📐",
        "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Recherche, Développement & Ingénierie de Projet",
        "domainId": "recherche-ingenierie-etudes",
        "subdomain": "Bureaux d'études thermiques",
        "energyTechnology": [
            "Thermique du bâtiment",
            "Pompes à chaleur",
            "Ventilation double flux",
            "RE2020"
        ],
        "energySector": "Ingénierie & Bâtiment",
        "sourceEnergierecrute": true,
        "isEmerging": false,
        "level": "BTS FED (Fluides Énergies Domotique) ou Licence Pro MEER (Maîtrise de l'Énergie et Énergies Renouvelables)",
        "salary": "🇫🇷 France : 2 000 - 3 200 € net/mois (~28 000 - 45 000 € brut/an, Source : Energierecrute / Bâtiment) • 🇸🇳 Sénégal : 300 000 - 1 000 000 FCFA / mois (Bureaux d'études BTP et fluides à Dakar)",
        "simpleDefinition": "Le technicien en études thermiques calcule les déperditions de chaleur et les apports solaires d'un bâtiment, dimensionne les installations de chauffage, de climatisation et de ventilation, et s'assure de la conformité aux normes environnementales.",
        "shortDescription": "Métier clé issu des formations référencées par Energierecrute (notamment la Licence MEER), cet expert optimise l'enveloppe thermique et les équipements des bâtiments.",
        "longDescription": "Conformément aux débouchés professionnels documentés par Energierecrute pour les cursus en efficacité énergétique (Licence Pro MEER et BTS FED), le technicien en études thermiques intervient dès la conception architecturale des ouvrages (immeubles de bureaux, hôpitaux, logements collectifs). Il modélise les bâtiments en 3D (BIM), effectue des calculs réglementaires de consommation d'énergie primaire (RE2020), dimensionne les réseaux de tuyauteries et gaines aérauliques, et préconise l'installation de pompes à chaleur, de chaudières biomasse ou de panneaux solaires thermiques.",
        "mainObjective": "Dimensionner avec exactitude les installations thermiques et aérauliques d'un édifice pour concilier confort thermique des occupants et sobriété énergétique maximale.",
        "companyRole": "Garant du dimensionnement technique et de la conformité réglementaire énergétique des bâtiments.",
        "workEnvironment": [
            "🏢 Bureaux d'études techniques fluides et ingénieries du bâtiment",
            "💻 Travail continu sur logiciels de simulation thermique dynamique (STD) et CAO/BIM",
            "🏗️ Visites ponctuelles sur chantiers pour contrôler l'implantation des réseaux de fluides"
        ],
        "missions": [
            "Modéliser l'enveloppe des bâtiments et saisir les caractéristiques thermiques des isolants et vitrages",
            "Calculer les déperditions d'énergie en hiver et les charges frigorifiques en été selon les logiciels certifiés",
            "Dimensionner les équipements thermiques (puissance des PAC, débits d'air des CTA, radiateurs, ventilo-convecteurs)",
            "Dessiner les schémas de principe hydrauliques et les plans de réseaux aérauliques sous AutoCAD/Revit",
            "Rédiger les notices thermiques et les dossiers de consultation des entreprises (CCTP fluides)"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Calculs réglementaires RE2020",
                "desc": "Saisie des parois d'un projet d'écoquartier de 40 logements sous logiciel de calcul certifié (Pleiades/Perrenoud)."
            },
            {
                "time": "11:00",
                "title": "Dimensionnement de centrale de traitement d'air",
                "desc": "Calcul des débits hygiéniques et sélection d'un récupérateur de chaleur à roue rotative d'un rendement de 82%."
            },
            {
                "time": "14:30",
                "title": "Tracé de réseaux sous Revit BIM",
                "desc": "Intégration en maquette numérique 3D des réseaux de gaines de ventilation pour éviter les clashs avec la structure béton."
            },
            {
                "time": "16:45",
                "title": "Réunion de coordination avec l'architecte",
                "desc": "Proposition d'intégration de brise-soleil orientables pour réduire de 4 kW les besoins de climatisation en toiture."
            }
        ],
        "skills": {
            "technical": [
                "Thermique du bâtiment, thermodynamique et mécanique des fluides appliquées",
                "Réglementations thermiques et environnementales (RE2020, Label Effinergie, HQE)",
                "Dessin technique assisté par ordinateur (AutoCAD, Revit MEP) et maquette numérique BIM",
                "Logiciels spécialisés de calcul thermique (Pleiades, ClimaWin, Perrenoud, DesignBuilder)"
            ],
            "human": [
                "Grande rigueur de calcul et minutie dans la saisie des métrés",
                "Capacité à dialoguer avec les architectes et corps d'état du gros œuvre",
                "Sens aigu de l'organisation pour respecter les plannings d'appels d'offres",
                "Force de proposition pour promouvoir les énergies renouvelables"
            ],
            "tools": [
                "Revit MEP, AutoCAD",
                "Pleiades + Comfie, Perrenoud, ClimaWin",
                "Diagrammes de l'air humide (Carrier / Mollier)",
                "Catalogues constructeurs de pompes à chaleur et centrales d'air"
            ],
            "analytical": [
                "Simulation thermique dynamique (STD) pour anticiper le confort d'été sans sur-climatisation",
                "Comparatif en coût global actualisé entre solutions géothermiques et chaudières gaz"
            ]
        },
        "specializations": [
            "Simulation Thermique Dynamique (STD) et confort d'été passif",
            "Modélisation BIM fluides (Revit MEP) sur grands projets tertiaires",
            "Bâtiments passifs (Passivhaus) et énergie positive (BEPOS)"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Diplôme clé Bac +2",
                    "title": "BTS Fluides Énergies Domotique (FED) — Option Génie Climatique",
                    "desc": "Formation de référence pour maîtriser les calculs thermiques et le dessin de plans fluides."
                },
                {
                    "step": "Spécialisation Bac +3",
                    "title": "Licence Professionnelle MEER (Maîtrise de l'Énergie et Énergies Renouvelables)",
                    "desc": "Cursus valorisé par Energierecrute associant études thermiques, solaire et audits énergétiques."
                },
                {
                    "step": "Alternance",
                    "title": "Cursus en contrat d'apprentissage en bureau d'études",
                    "desc": "Immersion professionnelle accélérant l'insertion directe."
                }
            ],
            "schools": [
                {
                    "name": "Lycées techniques préparant au BTS FED — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "IUT et universités proposant la Licence Pro MEER — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) / Génie Civil & Énergétique — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Dakar",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification OPQIBI Études thermiques",
                "Attestation de compétence logiciel BIM Revit MEP"
            ],
            "schoolSubjects": [
                "Physique thermique",
                "Aéraulique & hydraulique",
                "CAO/DAO",
                "Réglementation du bâtiment"
            ]
        },
        "career": {
            "sectors": [
                "Bureaux d'études thermiques et d'ingénierie du bâtiment",
                "Entreprises générales de génie climatique (Spie, Dalkia, Bouygues Energies & Services, Equans)",
                "Cabinets d'architecture et bureaux de contrôle technique (Apave, Bureau Veritas)"
            ],
            "employerTypes": [
                "Bureaux d'études fluides",
                "Installateurs CVC",
                "Maîtres d'ouvrage immobiliers"
            ],
            "evolution": "Technicien d'études junior ➔ Chargé d'études thermiques senior ➔ Responsable bureau d'études fluides ➔ Ingénieur thermicien",
            "pros": "Métier en tension extrême avec offres d'emploi abondantes, impact direct sur les factures d'énergie et le climat, travail moderne sur maquettes 3D.",
            "cons": "Pression sur les délais de rendu des permis de construire et dossiers d'appels d'offres."
        },
        "gettingStarted": {
            "beginnerProject": "Calculer la résistance thermique (R) d'un mur composé de parpaings, laine de verre de 14 cm et plaque de plâtre.",
            "intermediateProject": "Dessiner le réseau aéraulique d'une salle de classe sur un plan d'architecte en dimensionnant les sections de gaines.",
            "advancedProject": "Réaliser le bilan thermique complet d'une maison individuelle sous logiciel thermique gratuit avec dimensionnement d'une pompe à chaleur air-eau.",
            "portfolioIdeas": [
                "Plan de réseaux CVC sous Revit ou AutoCAD",
                "Note de calcul thermique réglementaire annotée"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA générative connectée au BIM génère automatiquement des réseaux de tuyauteries sans collisions et calcule instantanément des milliers de variantes d'isolation thermique.",
            "automatedTasks": [
                "Routage automatique des gaines et tuyauteries dans les maquettes 3D",
                "Extraction automatique des métrés et des quantités de matériaux"
            ],
            "emergingSkills": [
                "Supervision des outils d'optimisation générative de tracés de réseaux"
            ],
            "humanEdge": "Le dialogue de concertation avec l'architecte pour trouver le bon compromis entre esthétique des façades et efficacité énergétique passive."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la climatisation représente plus de 55% de la facture d'électricité des bâtiments tertiaires de Dakar et Diamniadio. Les techniciens en études thermiques conçoivent des façades ventilées, des brise-soleil adaptés à la latitude et des systèmes de climatisation solaire pour réduire les pointes de consommation sur le réseau.",
            "localSectors": [
                "Bureaux d'études d'ingénierie et fluides de Dakar",
                "Promoteurs immobiliers du pôle urbain de Diamniadio",
                "Entreprises de climatisation et d'équipements frigorifiques"
            ],
            "remoteWork": "Hybride (très compatible avec le télétravail pour toute la partie modélisation CAO et calculs).",
            "entrepreneurship": "Création d'un bureau d'études indépendant d'assistance à maîtrise d'ouvrage pour la construction de bâtiments bioclimatiques en Afrique subsaharienne."
        },
        "relatedJobSlugs": [
            "charge-affaires-energetique-cvc",
            "energy-manager-auditeur-energetique",
            "technicien-genie-climatique-frigoriste",
            "technicien-etudes-energetiques-industrielles"
        ],
        "connectedFamilies": [
            "btp-architecture",
            "environnement-climat",
            "industrie-mecanique"
        ],
        "resources": [
            {
                "type": "formation",
                "title": "Licence Pro MEER (Maîtrise de l'Énergie) — Fiche Energierecrute",
                "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php?page=5",
                "source": "Energierecrute"
            },
            {
                "type": "guide",
                "title": "Guide de la RE2020 — Ministère de la Transition Écologique",
                "url": "https://www.ecologie.gouv.fr/reglementation-environnementale-re2020",
                "source": "Ministère Transition Écologique"
            }
        ],
        "sources": [
            "Energierecrute",
            "AICVF (Association des Ingénieurs en Climatique)",
            "ADEME"
        ],
        "interests": [
            "construire-fabriquer",
            "donnees-chiffres",
            "nature-environnement"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon les données de recrutement d'Energierecrute, plus de 70% des diplômés en études thermiques et fluides reçoivent une proposition d'embauche en CDI avant même la fin de leur cursus de formation.",
            "pourquoi": "L'entrée en vigueur de normes environnementales toujours plus strictes oblige les constructeurs à justifier de calculs thermiques ultra-précis pour chaque permis de construire.",
            "a_retenir": "L'artisan de la fraîcheur et de la chaleur sobre dans nos bâtiments."
        }
    },
    {
        "id": "technicien-etudes-energetiques-industrielles",
        "slug": "technicien-etudes-energetiques-industrielles",
        "title": "Technicien en Études Énergétiques Industrielles",
        "aliases": [
            "Technicienne efficacité énergétique industrie",
            "Chargé d'études utilités industrielles",
            "Auditeur technique vapeur et air comprimé"
        ],
        "icon": "🏭",
        "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Recherche, Développement & Ingénierie de Projet",
        "domainId": "recherche-ingenierie-etudes",
        "subdomain": "Études énergétiques industrielles",
        "energyTechnology": [
            "Vapeur industrielle",
            "Air comprimé",
            "Récupération de chaleur fatale",
            "Cogénération"
        ],
        "energySector": "Industrie & Énergie",
        "sourceEnergierecrute": true,
        "isEmerging": false,
        "level": "BTS Électrotechnique / CVC ou Licence Pro MEER (Maîtrise de l'Énergie Industrielle)",
        "salary": "🇫🇷 France : 2 200 - 3 500 € net/mois (~32 000 - 50 000 € brut/an, Source : Energierecrute / Industrie) • 🇸🇳 Sénégal : 350 000 - 1 200 000 FCFA / mois (Usines agroalimentaires, cimenteries, mines)",
        "simpleDefinition": "Le technicien en études énergétiques industrielles analyse les consommations des usines (chaudières à vapeur, réseaux d'air comprimé, moteurs, fours), identifie les gaspillages et conçoit des solutions d'optimisation et de récupération de chaleur.",
        "shortDescription": "Issu des qualifications professionnelles citées par Energierecrute, cet expert traque les pertes d'énergie au cœur des processus de fabrication industrielle.",
        "longDescription": "Spécifié parmi les débouchés d'Energierecrute pour les cursus énergétiques avancés, le technicien en études énergétiques industrielles opère dans les usines chimiques, papetières, sidérurgiques ou agroalimentaires. Il installe des capteurs de mesure sur les utilités industrielles (vapeur, eau surchauffée, froid de process, air comprimé), dresse le bilan énergétique des lignes de production et dimensionne des systèmes de récupération d'énergie thermique (économiseurs sur fumées, échangeurs de chaleur, groupes frigorifiques à haute efficacité).",
        "mainObjective": "Chiffrer et déployer des plans d'économies d'énergie sur les utilités industrielles pour alléger les coûts d'exploitation et réduire les émissions de carbone.",
        "companyRole": "Chasseur de gaspillages énergétiques et concepteur de solutions d'efficacité dans les usines.",
        "workEnvironment": [
            "🏭 Sites industriels de production (chaufferies vapeur, compresseurs, ateliers de fabrication)",
            "🏢 Sociétés de services énergétiques (ESCO) et bureaux d'ingénierie industrielle",
            "💻 Bureau pour le traitement des données de télérelève et calculs de rentabilité"
        ],
        "missions": [
            "Réaliser des campagnes de mesure sur site (débits de vapeur, fuites d'air comprimé, puissance électrique appelée)",
            "Établir les bilans massiques et thermiques détaillés des utilités de l'usine",
            "Dimensionner des systèmes de récupération de chaleur fatale (échangeurs sur fumées de fours, pompes à chaleur industrielles)",
            "Calculer les gains financiers et le temps de retour sur investissement (TRI) des solutions préconisées",
            "Suivre la mise en service des nouveaux équipements et valider les économies d'énergie réelles selon le protocole IPMVP"
        ],
        "typicalDay": [
            {
                "time": "08:15",
                "title": "Campagne de détection de fuites d'air comprimé",
                "desc": "Parcours d'un atelier d'embouteillage avec un détecteur à ultrasons pour repérer et chiffrer 12 fuites d'air comprimé."
            },
            {
                "time": "10:45",
                "title": "Pose d'enregistreurs de puissance électrique",
                "desc": "Installation de pinces ampèremétriques communicantes sur le tableau électrique général des broyeurs."
            },
            {
                "time": "14:00",
                "title": "Modélisation sous tableur du gisement de chaleur",
                "desc": "Calcul de la quantité de mégawattheures valorisables sur les condensats de vapeur d'une blanchisserie industrielle."
            },
            {
                "time": "16:30",
                "title": "Restitution au directeur d'usine",
                "desc": "Présentation d'un projet de récupération de chaleur affichant un temps de retour sur investissement inférieur à 2 ans."
            }
        ],
        "skills": {
            "technical": [
                "Utilités industrielles (générateurs de vapeur, compresseurs d'air, groupes froids, moteurs IE3/IE4)",
                "Thermodynamique industrielle et bilans de matière et d'énergie",
                "Métrologie industrielle (débitmètres à ultrasons, caméras thermiques infrarouges, wattmètres)",
                "Protocole international de mesure et vérification de la performance énergétique (IPMVP)"
            ],
            "human": [
                "Rigueur méthodique et curiosité d'investigation sur le terrain industriel",
                "Sens aigu de la sécurité face aux risques vapeur, haute pression et électricité",
                "Pédagogie pour convaincre les chefs d'ateliers de modifier leurs réglages",
                "Pragmatisme économique orienté rentabilité et gain rapide"
            ],
            "tools": [
                "Caméras thermiques infrarouges (FLIR), détecteurs ultrasoniques de fuites",
                "Enregistreurs de puissance électrique triphasée (Chauvin Arnoux)",
                "Débitmètres à ultrasons non intrusifs pour conduites",
                "Tableurs de simulation énergétique industrielle et diagrammes de Sankey"
            ],
            "analytical": [
                "Construction de diagrammes de flux d'énergie de Sankey pour visualiser les pertes",
                "Calcul de rentabilité avec prise en compte des Certificats d'Économies d'Énergie (CEE)"
            ]
        },
        "specializations": [
            "Optimisation des réseaux de vapeur et purgeurs industriels",
            "Efficacité énergétique des systèmes de production d'air comprimé",
            "Récupération de chaleur fatale industrielle haute température"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Bac +2",
                    "title": "BTS Contrôle Industriel et Régulation Automatique (CIRA) ou Électrotechnique",
                    "desc": "Bases solides en mesures physiques, régulation industrielle et électromécanique."
                },
                {
                    "step": "Bac +3 spécialisé",
                    "title": "Licence Professionnelle MEER — Parcours Énergie dans l'Industrie",
                    "desc": "Cursus valorisé par Energierecrute pour maîtriser l'audit et l'optimisation des utilités."
                },
                {
                    "step": "Évolution continue",
                    "title": "Certification CMVP (Certified Measurement & Verification Professional)",
                    "desc": "Reconnaissance internationale pour la mesure des économies d'énergie."
                }
            ],
            "schools": [
                {
                    "name": "IUT et universités partenaires de la formation MEER — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Lycées industriels préparant aux BTS de l'énergie — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut de Technologie Alimentaire (ITA) / Département Énergie — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification CMVP (Mesure et vérification de la performance)",
                "Habilitation électrique B2V / Risque vapeur"
            ],
            "schoolSubjects": [
                "Thermodynamique industrielle",
                "Métrologie",
                "Régulation",
                "Électrotechnique"
            ]
        },
        "career": {
            "sectors": [
                "Sociétés de services énergétiques (Dalkia, ENGIE Solutions, Veolia, Idex)",
                "Bureaux d'études spécialisés en décarbonation industrielle",
                "Grands sites industriels consommateurs d'énergie (chimie, agroalimentaire, métallurgie)"
            ],
            "employerTypes": [
                "Sociétés de services d'efficacité énergétique",
                "Bureaux d'études industriels",
                "Usines de production"
            ],
            "evolution": "Technicien d'études ➔ Ingénieur efficacité énergétique industrielle ➔ Responsable utilités de site ➔ Directeur énergie d'un groupe industriel",
            "pros": "Métier très concret sur le terrain des usines, gisement immense d'économies d'énergie à exploiter, forte valeur ajoutée écologique et financière.",
            "cons": "Environnements industriels bruyants et parfois chauds, déplacements fréquents sur sites de production."
        },
        "gettingStarted": {
            "beginnerProject": "Relever la plaque signalétique d'un moteur électrique et calculer son coût annuel de fonctionnement à plein régime.",
            "intermediateProject": "Dresser le schéma fonctionnel d'une chaufferie vapeur industrielle en identifiant les points de récupération de condensats.",
            "advancedProject": "Dimensionner un échangeur tubulaire pour récupérer la chaleur des eaux de lavage à 70°C d'une conserverie agroalimentaire.",
            "portfolioIdeas": [
                "Rapport d'audit d'utilités industrielles anonymisé",
                "Diagramme de Sankey des flux énergétiques d'une usine"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA analyse les flux de capteurs IoT industriels en temps réel pour ajuster dynamiquement la pression des compresseurs et détecter les dérives de chaudières.",
            "automatedTasks": [
                "Détection prédictive de l'encrassement des échangeurs thermiques",
                "Ajustement automatique des courbes de chauffe en fonction de la production"
            ],
            "emergingSkills": [
                "Paramétrage de jumeaux numériques énergétiques d'usines"
            ],
            "humanEdge": "L'investigation physique dans les recoins des ateliers pour déceler les anomalies mécaniques qu'aucun capteur n'a enregistrées."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les grandes unités agro-industrielles (Compagnie Sucrière Sénégalaise à Richard-Toll, Sonacos, Grands Moulins de Dakar) et les cimenteries (Sococim, Dangote) mobilisent des techniciens en études énergétiques pour valoriser la bagasse de canne à sucre en chaudière et réduire leur lourde facture d'électricité sur le réseau.",
            "localSectors": [
                "Compagnie Sucrière Sénégalaise (CSS à Richard-Toll)",
                "Cimenteries industrielles (Sococim, Dangote, Ciments du Sahel)",
                "Industries meunières et huileries du bassin arachidier"
            ],
            "remoteWork": "Faible (présence sur les installations industrielles pour mesures et audits).",
            "entrepreneurship": "Création d'une société de services énergétiques (ESCO) proposant des audits de performance des moteurs et de l'air comprimé aux PME sénégalaises."
        },
        "relatedJobSlugs": [
            "technicien-etudes-thermiques-batiment",
            "energy-manager-auditeur-energetique",
            "charge-affaires-energetique-cvc",
            "responsable-hse-sites-energetiques"
        ],
        "connectedFamilies": [
            "industrie-mecanique",
            "gestion-finance",
            "environnement-climat"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Filière efficacité énergétique industrielle — Energierecrute",
                "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php",
                "source": "Energierecrute"
            },
            {
                "type": "guide",
                "title": "Programme PRO-SMEn & CEE industrie — ATEE",
                "url": "https://atee.fr/",
                "source": "ATEE"
            }
        ],
        "sources": [
            "Energierecrute",
            "ATEE",
            "ADEME Industrie"
        ],
        "interests": [
            "construire-fabriquer",
            "donnees-chiffres",
            "nature-environnement"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Dans une usine classique, l'air comprimé est l'énergie la plus chère : seulement 10% de l'électricité consommée par le compresseur est transformée en énergie utile, le reste étant dissipé en chaleur.",
            "pourquoi": "Un technicien qui traque les fuites et récupère la chaleur du compresseur génère des dizaines de milliers d'euros d'économies immédiates pour l'entreprise.",
            "a_retenir": "L'optimisateur de performance qui transforme les pertes d'usine en rentabilité industrielle."
        }
    },
    {
        "id": "charge-affaires-energetique-cvc",
        "slug": "charge-affaires-energetique-cvc",
        "title": "Chargé / Chargée d'Affaires en Énergétique & Génie Climatique",
        "aliases": [
            "Responsable d'affaires CVC",
            "Chef de projets installations énergétiques",
            "Ingénieur d'affaires génie climatique"
        ],
        "icon": "💼",
        "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Recherche, Développement & Ingénierie de Projet",
        "domainId": "recherche-ingenierie-etudes",
        "subdomain": "Conception d'installations",
        "energyTechnology": [
            "Génie climatique",
            "Chauffage urbain",
            "Climatisation",
            "Réseaux de chaleur"
        ],
        "energySector": "Ingénierie & Travaux Énergétiques",
        "sourceEnergierecrute": true,
        "isEmerging": false,
        "level": "Licence Pro MEER, BTS FED ou Ingénieur en Génie Énergétique",
        "salary": "🇫🇷 France : 2 800 - 4 600 € net/mois + primes sur résultat (~38 000 - 65 000 € brut/an, Source : Energierecrute / APEC) • 🇸🇳 Sénégal : 450 000 - 1 500 000 FCFA / mois (Entreprises d'installation et de maintenance CVC)",
        "simpleDefinition": "Le chargé d'affaires en énergétique pilote de A à Z des projets d'installations de chauffage, climatisation, ventilation ou réseaux de chaleur : il répond aux appels d'offres, négocie les contrats, supervise les études et coordonne les chantiers jusqu'à la mise en service.",
        "shortDescription": "Débouché d'excellence mis en avant par Energierecrute pour les diplômés de Licence Pro MEER, ce chef d'orchestre conjugue négociation commerciale, rigueur technique et gestion de chantiers.",
        "longDescription": "Comme documenté par Energierecrute dans les filières de la maîtrise de l'énergie, le chargé d'affaires en génie climatique est le garant de la rentabilité technique et financière des chantiers énergétiques. Interlocuteur unique du client (collectivités, promoteurs, industriels), il chiffre les devis, consulte les fournisseurs de pompes à chaleur ou chaudières industrielles, coordonne le bureau d'études, manage les équipes d'installateurs et veille au respect des délais, des marges budgétaires et de la sécurité des intervenants.",
        "mainObjective": "Développer le portefeuille d'affaires de l'entreprise et assurer la livraison clé en main d'installations énergétiques performantes dans le respect des coûts et de la sécurité.",
        "companyRole": "Pilote commercial, technique et financier des grands chantiers énergétiques.",
        "workEnvironment": [
            "🏢 Sièges et agences régionales des grands installateurs énergétiques (Dalkia, Spie, Equans, Eiffage Énergie)",
            "🏗️ Chantiers de construction tertiaires, industriels ou hospitaliers",
            "🚗 Déplacements fréquents pour rendez-vous clients, réunions de chantier et négociations"
        ],
        "missions": [
            "Prospecter de nouveaux clients et répondre aux appels d'offres publics et privés de génie climatique",
            "Réaliser le chiffrage financier détaillé des projets (fournitures d'équipements, sous-traitance, main d'œuvre)",
            "Superviser les plans et notes de calcul établis par le bureau d'études techniques",
            "Négocier les contrats d'achats de matériel auprès des constructeurs (Daikin, Carrier, Atlantic, Viessmann)",
            "Coordonner les conducteurs de travaux et chefs de chantiers jusqu'à la réception sans réserves"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Point matinal sur chantier hospitalier",
                "desc": "Visite d'avancement de la pose de deux groupes frigorifiques à eau glacée de 500 kW avec le chef de chantier."
            },
            {
                "time": "10:30",
                "title": "Soutenance d'offre commerciale",
                "desc": "Présentation orale de la proposition technique de rénovation d'un réseau de chaleur devant la commission d'appel d'offres d'une mairie."
            },
            {
                "time": "14:00",
                "title": "Revue financière de gestion d'affaires",
                "desc": "Analyse sous ERP des marges à terminaison et validation des situations de travaux du mois."
            },
            {
                "time": "16:30",
                "title": "Négociation avec un équipementier",
                "desc": "Discussion tarifaire sur un lot de 80 ventilo-convecteurs pour équiper un campus de bureaux."
            }
        ],
        "skills": {
            "technical": [
                "Techniques du génie climatique (hydraulique, aéraulique, régulation GTB/GTC, électricité)",
                "Chiffrage de projets, élaboration de devis et décomposition des prix",
                "Gestion financière d'affaires (compte d'exploitation, facturation, trésorerie de chantier)",
                "Droit des marchés de travaux (CCAG travaux, contrats privés, garanties décennales)"
            ],
            "human": [
                "Aisance relationnelle et leadership pour fédérer des équipes de chantier",
                "Négociation commerciale et force de persuasion devant les clients",
                "Résistance au stress et réactivité face aux imprévus de chantier",
                "Organisation méthodique et vision globale des plannings"
            ],
            "tools": [
                "Logiciels de chiffrage et devis BTP (Optima, Quick Devis)",
                "ERP de gestion d'affaires (SAP, Sage, EBP Bâtiment)",
                "Outils de planification de projet (MS Project, Primavera)",
                "Visionneuses de plans et maquettes BIM (Navisworks, BIMx)"
            ],
            "analytical": [
                "Analyse des risques contractuels et financiers d'une réponse à appel d'offres",
                "Optimisation du planning de phasage des travaux pour réduire les coûts d'intérim"
            ]
        },
        "specializations": [
            "Affaires CVC en milieu hospitalier et salles blanches",
            "Réseaux de chaleur et de froid urbains (chaufferies biomasse/géothermie)",
            "Rénovation énergétique globale de parcs tertiaires en contrat CPE"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Diplôme clé Bac +2",
                    "title": "BTS Fluides Énergies Domotique (FED) ou BTS Électrotechnique",
                    "desc": "Compétence technique socle indispensable pour évaluer la faisabilité d'un chantier."
                },
                {
                    "step": "Licence Pro d'excellence",
                    "title": "Licence Pro MEER — Parcours Chargé d'Affaires en Énergétique",
                    "desc": "Formation mise en valeur par Energierecrute pour acquérir la double casquette technique et commerciale."
                },
                {
                    "step": "Bac +5 / Ingénieur",
                    "title": "Diplôme d'Ingénieur Énergétique ou Master Management de Projet Énergie",
                    "desc": "Accès direct à la gestion de grands comptes et de projets de plusieurs dizaines de millions d'euros."
                }
            ],
            "schools": [
                {
                    "name": "IUT et universités proposant la Licence Pro MEER — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Grandes écoles d'ingénieurs (INSA, Polytech, ESTP) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Polytechnique de Thiès (EPT) / Génie Électromécanique — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Institut Supérieur de Management (ISM Dakar) / Gestion de Projets — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification en Management de Projet (PMP ou CAPM)",
                "Habilitation sécurité chantier (SPS niveau 3)"
            ],
            "schoolSubjects": [
                "Génie climatique",
                "Gestion financière",
                "Négociation commerciale",
                "Droit des marchés"
            ]
        },
        "career": {
            "sectors": [
                "Entreprises majeures du génie climatique et de l'énergie (Equans, Dalkia, Spie, Idex)",
                "Installateurs régionaux indépendants en CVC et plomberie industrielle",
                "Bureaux d'études contractants généraux"
            ],
            "employerTypes": [
                "Entreprises de génie climatique",
                "Majors du BTP énergie",
                "Opérateurs de réseaux de chaleur"
            ],
            "evolution": "Chargé d'affaires junior ➔ Chargé d'affaires confirmé ➔ Responsable de centre de profit CVC ➔ Directeur d'agence régionale",
            "pros": "Métier polyvalent où l'on ne s'ennuie jamais, autonomie complète sur ses affaires, rémunération stimulante avec intéressement sur les marges.",
            "cons": "Forte pression sur les résultats financiers, responsabilité directe sur les retards ou pénalités de chantier."
        },
        "gettingStarted": {
            "beginnerProject": "Établir un devis chiffré simple pour le remplacement d'une chaudière par une pompe à chaleur dans un commerce de 200 m².",
            "intermediateProject": "Construire un planning de Gantt sous MS Project pour un chantier de climatisation de 4 mois avec 5 corps d'état.",
            "advancedProject": "Rédiger un mémoire technique complet de réponse à appel d'offres incluant phasage, variantes environnementales et fiches matériel.",
            "portfolioIdeas": [
                "Exemple de mémoire technique d'appel d'offres CVC",
                "Compte d'exploitation prévisionnel d'un chantier énergétique"
            ]
        },
        "aiImpact": {
            "level": "Modéré à Élevé",
            "summary": "L'IA automatise l'extraction des bordereaux de prix des cahiers des charges et optimise la prévision des marges en analysant l'historique de centaines de chantiers.",
            "automatedTasks": [
                "Lecture automatique des pièces d'appels d'offres et repérage des exigences techniques",
                "Pré-remplissage des devis à partir des bases de prix constructeurs"
            ],
            "emergingSkills": [
                "Utilisation d'outils de chiffrage assistés par intelligence artificielle"
            ],
            "humanEdge": "La confiance forgée avec les clients maîtres d'ouvrage et l'art de négocier fermement avec des sous-traitants sur un chantier complexe."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le boom immobilier de Dakar et du pôle urbain de Diamniadio génère une demande massive en chargés d'affaires pour climatiser et équiper les tours ministérielles, hôtels de luxe, hôpitaux et centres de données (Data Centers) avec des systèmes à haute efficacité énergétique.",
            "localSectors": [
                "Grands groupes d'installation et de maintenance CVC à Dakar",
                "Entreprises de climatisation et froid industriel des Niayes",
                "Projets d'infrastructures de l'Apix et de l'État sénégalais"
            ],
            "remoteWork": "Faible (présence sur le terrain et en rendez-vous clients indispensable).",
            "entrepreneurship": "Création d'une entreprise d'installation et de maintenance en génie climatique spécialisée dans les systèmes de rafraîchissement éco-responsables pour les entreprises d'Afrique de l'Ouest."
        },
        "relatedJobSlugs": [
            "technicien-etudes-thermiques-batiment",
            "technicien-genie-climatique-frigoriste",
            "energy-manager-auditeur-energetique",
            "technico-commercial-solutions-energetiques"
        ],
        "connectedFamilies": [
            "commerce-marketing",
            "gestion-finance",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Chargé d'affaires en génie climatique — Energierecrute",
                "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php",
                "source": "Energierecrute"
            },
            {
                "type": "formation",
                "title": "Licence Pro MEER — Débouchés chargés d'affaires",
                "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php?page=5",
                "source": "Energierecrute"
            }
        ],
        "sources": [
            "Energierecrute",
            "FFB (Fédération Française du Bâtiment)",
            "AICVF"
        ],
        "interests": [
            "negocier-convaincre",
            "construire-fabriquer",
            "gerer-organiser"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon les bilans d'insertion professionnelle d'Energierecrute, le métier de chargé d'affaires CVC offre l'une des progressions de rémunération les plus rapides du secteur technique, les primes pouvant représenter 20% à 40% du salaire de base.",
            "pourquoi": "Dans un secteur où les commandes se chiffrent en millions d'euros, un professionnel capable de remporter des marchés tout en garantissant une marge saine est le profil le plus précieux d'une entreprise.",
            "a_retenir": "Le stratège qui gère l'alliance de la technique, du commerce et du terrain."
        }
    },
    {
        "id": "chef-projet-energie-solaire-photovoltaique",
        "slug": "chef-projet-energie-solaire-photovoltaique",
        "title": "Chef de Projet Énergie Solaire Photovoltaïque",
        "aliases": [
            "Chef de projet EnR solaire",
            "Ingénieur d'études photovoltaïques",
            "Développeur de projets solaires"
        ],
        "icon": "☀️",
        "image": "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Énergie Solaire Photovoltaïque & Thermique",
        "domainId": "energie-solaire-pv-thermique",
        "subdomain": "Solaire photovoltaïque",
        "energyTechnology": [
            "Solaire photovoltaïque",
            "Onduleurs",
            "PVSyst",
            "Raccordement réseau"
        ],
        "energySector": "Énergies Renouvelables",
        "sourceEnergierecrute": true,
        "isEmerging": false,
        "level": "Bac +5 (Ingénieur en Énergies Renouvelables ou Master Génie Électrique)",
        "salary": "🇫🇷 France : 2 900 - 4 800 € net/mois (~40 000 - 68 000 € brut/an, Source : Energierecrute / APEC) • 🇸🇳 Sénégal : 500 000 - 1 800 000 FCFA / mois (Producteurs IPP solaires, centrales de Bokhol, Malicounda)",
        "simpleDefinition": "Le chef de projet solaire photovoltaïque pilote le développement de parcs solaires au sol, d'ombrières de parking ou de toitures industrielles, de la recherche de foncier et des études d'impact jusqu'au raccordement au réseau électrique et à la mise en service.",
        "shortDescription": "Fiche de référence du portail Energierecrute, ce chef d'orchestre des énergies propres concrétise la construction de parcs solaires produisant des mégawatts d'électricité verte.",
        "longDescription": "Inscrit au cœur des métiers des énergies renouvelables sur Energierecrute, le chef de projet solaire photovoltaïque coordonne toutes les étapes d'un investissement de production d'électricité solaire. Il sécurise le foncier avec les propriétaires terriens et collectivités, pilote les études de gisement solaire (logiciel PVSyst), dépose les permis de construire et dossiers environnementaux, négocie la convention de raccordement avec le gestionnaire de réseau (Enedis/RTE en France, Senelec au Sénégal) et sélectionne les constructeurs EPC (Engineering, Procurement, Construction).",
        "mainObjective": "Développer et mener à bien la mise en service de centrales photovoltaïques rentables et respectueuses des écosystèmes locaux.",
        "companyRole": "Pilote stratégique et technique du déploiement des infrastructures solaires.",
        "workEnvironment": [
            "🏢 Développeurs et producteurs indépendants d'électricité renouvelable (Neoen, Voltalia, TotalEnergies Renouvelables, Engie Green)",
            "☀️ Visites de terrain régulières sur les parcelles agricoles ou friches industrielles destinées aux parcs solaires",
            "🏛️ Réunions avec élus locaux, services de l'État et gestionnaires de réseau électrique"
        ],
        "missions": [
            "Identifier et sécuriser les terrains propices (friches, toitures industrielles, délaissés routiers) par baux emphytéotiques",
            "Dimensionner la centrale solaire et modéliser la production électrique annuelle sous PVSyst",
            "Piloter les études d'impact environnemental (faune, flore, biodiversité) et les concertations publiques",
            "Obtenir les autorisations administratives (permis de construire, autorisation d'exploiter)",
            "Négocier les conditions de raccordement électrique et préparer la participation aux appels d'offres de rachat d'électricité"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Simulation de productible sous PVSyst",
                "desc": "Calcul des pertes par ombrage et par effet thermique sur une future centrale de 25 MWc en toitures logistiques."
            },
            {
                "time": "11:00",
                "title": "Réunion de concertation locale",
                "desc": "Présentation des mesures paysagères et agricoles d'un projet agrivoltaïque devant le conseil municipal d'une commune rurale."
            },
            {
                "time": "14:30",
                "title": "Échange technique avec le gestionnaire de réseau",
                "desc": "Validation de la proposition technique et financière (PTF) de raccordement au poste source haute tension."
            },
            {
                "time": "16:45",
                "title": "Revue du modèle financier",
                "desc": "Mise à jour du TRI projet avec l'équipe de financement de projet bancaire suite aux nouveaux cours des modules photovoltaïques."
            }
        ],
        "skills": {
            "technical": [
                "Technologie photovoltaïque (modules monocristallins, trackers mono-axes, onduleurs centraux et de chaîne)",
                "Simulation de productible solaire (PVSyst, SolarGIS, HelioScope)",
                "Réglementation de l'urbanisme et autorisations environnementales",
                "Génie électrique haute tension et processus de raccordement au réseau"
            ],
            "human": [
                "Excellentes qualités relationnelles et diplomatie dans la concertation territoriale",
                "Leadership et capacité à animer des équipes d'experts multidisciplinaires",
                "Ténacité et persévérance face à des processus de développement de 2 à 4 ans",
                "Aisance dans la négociation contractuelle et foncière"
            ],
            "tools": [
                "PVSyst, AutoCAD Electrical, QGIS",
                "SolarGIS, Meteonorm",
                "Outils de gestion de projet (Trello, MS Project)",
                "Modèles financiers sous tableur (DCF, TRI, LCOE)"
            ],
            "analytical": [
                "Optimisation du ratio de performance (PR - Performance Ratio) d'une installation solaire",
                "Arbitrage technico-économique entre trackers mobiles et structures fixes orientées sud"
            ]
        },
        "specializations": [
            "Parcs solaires au sol de grande puissance (> 30 MWc)",
            "Projets agrivoltaïques associant élevage ovin ou grandes cultures",
            "Grandes toitures photovoltaïques industrielles et ombrières de parking"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Formation ingénieur",
                    "title": "Diplôme d'Ingénieur en Énergies Renouvelables ou Génie Électrique",
                    "desc": "Compétence technique globale en production d'électricité, électronique de puissance et réseaux."
                },
                {
                    "step": "Master Universitaire",
                    "title": "Master Énergies Renouvelables & Management de Projets",
                    "desc": "Formation aux dimensions réglementaires, juridiques et économiques des filières solaires."
                },
                {
                    "step": "Cursus MEER",
                    "title": "Licence Pro MEER complétée par un Master Énergie",
                    "desc": "Parcours pragmatique très recherché par les développeurs solaires régionaux."
                }
            ],
            "schools": [
                {
                    "name": "Polytech Nantes / Grenoble INP — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "INSA Strasbourg / Lyon — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) / Master Énergies Renouvelables — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "UFR Sciences et Technologies / Université Iba Der Thiam de Thiès — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification PVSyst Avancé",
                "Habilitation électrique H0/B0 pour chantiers"
            ],
            "schoolSubjects": [
                "Physique des semi-conducteurs",
                "Génie électrique",
                "Droit de l'énergie",
                "Gestion de projet"
            ]
        },
        "career": {
            "sectors": [
                "Producteurs indépendants d'énergie (IPP) solaires (TotalEnergies Renouvelables, Neoen, Voltalia, Boralex)",
                "Bureaux d'études spécialisés en énergies renouvelables",
                "Coopératives citoyennes d'énergie et foncières solaires"
            ],
            "employerTypes": [
                "Développeurs solaires internationaux",
                "Producteurs indépendants d'énergie",
                "Constructeurs EPC solaires"
            ],
            "evolution": "Chef de projet junior ➔ Chef de projet senior ➔ Responsable développement régional ➔ Directeur du pôle solaire",
            "pros": "Métier porteur de sens au cœur de la décarbonation, variété passionnante des missions (terrain, technique, juridique, finance), dynamisme économique mondial.",
            "cons": "Délais administratifs parfois très longs (2 à 5 ans pour voir naître un parc), opposition locale possible sur certains territoires."
        },
        "gettingStarted": {
            "beginnerProject": "Télécharger la version d'essai de PVSyst et simuler la production d'un champ de 20 panneaux solaires dans sa région.",
            "intermediateProject": "Cartographier sous Google Earth et QGIS une friche industrielle et délimiter les zones d'implantation de tables solaires en évitant les masques d'ombre.",
            "advancedProject": "Monter un dossier fictif complet de demande de permis de construire pour une ombrière solaire de 500 places de parking avec bilan carbone prévisionnel.",
            "portfolioIdeas": [
                "Rapport de simulation de productible PVSyst annoté",
                "Note d'opportunité foncière et de raccordement pour un projet solaire"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA analyse les photographies aériennes satellites pour repérer instantanément les toitures exploitables et optimise le positionnement 3D des rangées de panneaux pour éliminer les ombrages portés.",
            "automatedTasks": [
                "Détection automatisée du potentiel solaire des toitures par vision par ordinateur",
                "Optimisation de l'implantation des modules sous contrainte de topographie"
            ],
            "emergingSkills": [
                "Pilotage d'algorithmes d'orientation intelligente des trackers solaires face aux nuages"
            ],
            "humanEdge": "La négociation humaine et la capacité à convaincre des agriculteurs et des maires de s'engager dans un projet solaire sur plusieurs décennies."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la stratégie 'mix énergétique' a fait émerger des parcs solaires de référence en Afrique de l'Ouest : Bokhol (20 MW), Malicounda (22 MW), Méouane (30 MW) et Kahone (35 MW). Les chefs de projets solaires sénégalais coordonnent également des mini-réseaux hybrides pour électrifier les villages isolés de Casamance et de la vallée du fleuve.",
            "localSectors": [
                "Senelec (Société Nationale d'Électricité du Sénégal)",
                "Agence Sénégalaise d'Électrification Rurale (ASER)",
                "Développeurs solaires privés opérant en Afrique de l'Ouest"
            ],
            "remoteWork": "Hybride (déplacements fréquents sur les sites des parcs / travail de bureau et visioconférences).",
            "entrepreneurship": "Création d'une entreprise de développement et d'installation de centrales solaires pour l'autoconsommation des industries et hôtels du littoral sénégalais."
        },
        "relatedJobSlugs": [
            "installateur-mainteneur-photovoltaique",
            "chef-projet-eolien-onshore-offshore",
            "ingenieur-smart-grids-reseaux-intelligents",
            "energy-manager-auditeur-energetique"
        ],
        "connectedFamilies": [
            "environnement-climat",
            "direction-strategie",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Chef de projet solaire — Energierecrute",
                "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php",
                "source": "Energierecrute"
            },
            {
                "type": "filiere",
                "title": "Enerplan — Syndicat des professionnels de l'énergie solaire",
                "url": "https://www.enerplan.asso.fr/",
                "source": "Enerplan"
            }
        ],
        "sources": [
            "Energierecrute",
            "Enerplan",
            "SER (Syndicat des Énergies Renouvelables)"
        ],
        "interests": [
            "nature-environnement",
            "construire-fabriquer",
            "negocier-convaincre"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon les prévisions de l'Agence Internationale de l'Énergie (AIE), l'énergie solaire photovoltaïque est devenue la source d'électricité la moins chère de l'histoire de l'humanité dans la majorité des pays ensoleillés du monde.",
            "pourquoi": "La baisse de plus de 90% du coût des panneaux en dix ans a fait du solaire le moteur incontournable de la transition énergétique mondiale.",
            "a_retenir": "Le bâtisseur des grandes centrales qui transforment la lumière du soleil en électricité pour tous."
        }
    },
    {
        "id": "installateur-mainteneur-photovoltaique",
        "slug": "installateur-mainteneur-photovoltaique",
        "title": "Installateur-Mainteneur de Systèmes Solaires Photovoltaïques",
        "aliases": [
            "Électricien photovoltaïque",
            "Monteur de panneaux solaires",
            "Technicien de pose et mise en service solaire"
        ],
        "icon": "🔧",
        "image": "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Énergie Solaire Photovoltaïque & Thermique",
        "domainId": "energie-solaire-pv-thermique",
        "subdomain": "Installation photovoltaïque",
        "energyTechnology": [
            "Solaire photovoltaïque",
            "Câblage courant continu",
            "Onduleurs",
            "Sécurité toiture"
        ],
        "energySector": "Installation & Maintenance",
        "sourceEnergierecrute": true,
        "isEmerging": false,
        "level": "CAP / Bac Pro Électrotechnique ou Titre Professionnel Installateur Photovoltaïque",
        "salary": "🇫🇷 France : 1 900 - 2 900 € net/mois (~26 000 - 40 000 € brut/an, Source : Energierecrute / BTP) • 🇸🇳 Sénégal : 200 000 - 750 000 FCFA / mois (Entreprises d'électrification solaire, installateurs indépendants)",
        "simpleDefinition": "L'installateur-mainteneur solaire fixe les panneaux photovoltaïques sur les toitures ou au sol, réalise le câblage électrique en courant continu et alternatif, raccorde les onduleurs et les batteries, et assure la maintenance préventive et corrective des générateurs.",
        "shortDescription": "Fiche de terrain essentielle répertoriée par Energierecrute, ce technicien allie savoir-faire d'électricien qualifié et travail en hauteur pour monter les centrales solaires.",
        "longDescription": "Comme décrit dans les métiers d'installation et de maintenance sur Energierecrute, l'installateur photovoltaïque est le professionnel manuel et technique qui concrétise les projets solaires. Il assure la pose des rails de fixation et des panneaux solaires sur les toitures résidentielles, les hangars agricoles ou les parcs au sol. Il réalise le raccordement électrique des chaînes de modules (strings), installe les coffrets de protection DC/AC (parafoudres, disjoncteurs), configure les onduleurs connectés et diagnostique les pannes de production à l'aide de caméras thermiques.",
        "mainObjective": "Poser, raccorder et entretenir en toute sécurité des installations solaires photovoltaïques étanches, conformes aux normes électriques et produisant à leur plein potentiel.",
        "companyRole": "Opérateur clé de la réalisation physique et de la fiabilité des installations solaires.",
        "workEnvironment": [
            "☀️ Travail en plein air sur toitures de maisons, hangars agricoles ou chantiers de parcs au sol",
            "🪜 Utilisation quotidienne d'équipements de travail en hauteur (harnais, échafaudages, nacelles)",
            "⚡ Manipulation de circuits sous tension continue (DC) jusqu'à 1 500 Volts"
        ],
        "missions": [
            "Mettre en place les systèmes de sécurité collectifs et individuels de travail en hauteur sur toiture",
            "Poser les structures de fixation, rails en aluminium et crochets d'étanchéité sous les tuiles ou bacs acier",
            "Fixer et connecter en série les modules photovoltaïques en respectant les polarités électriques",
            "Tirer les câbles solaires résistants aux UV, poser les onduleurs et raccorder les coffrets de protection",
            "Réaliser la mise en service, vérifier la tension à vide (Voc), le courant de court-circuit (Isc) et la mise à la terre"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Sécurisation du chantier en toiture",
                "desc": "Installation des lignes de vie temporaires, des filets antichute et vérification des harnais de sécurité."
            },
            {
                "time": "09:30",
                "title": "Pose des rails et des modules solaires",
                "desc": "Fixation au couple de serrage réglementaire de 32 panneaux solaires de 425 Wc sur un toit de hangar."
            },
            {
                "time": "13:30",
                "title": "Câblage électrique et raccordement de l'onduleur",
                "desc": "Sertissage des connecteurs MC4, raccordement du coffret DC avec parafoudre et liaison à l'onduleur de chaîne."
            },
            {
                "time": "16:00",
                "title": "Mesures de conformité et mise en service",
                "desc": "Contrôle d'isolement diélectrique, mesure de la résistance de terre (< 30 Ohms) et appairage de l'onduleur au réseau Wi-Fi client."
            }
        ],
        "skills": {
            "technical": [
                "Électrotechnique appliquée au courant continu (DC) haute tension et alternatif (AC)",
                "Techniques de couverture, de charpente et d'étanchéité des toitures (tuiles, ardoises, bac acier)",
                "Normes électriques spécifiques au photovoltaïque (UTE C 15-712-1, NF C 15-100)",
                "Diagnostic de dépannage électrique et thermographie infrarouge de détection de points chauds (hot spots)"
            ],
            "human": [
                "Absence totale de vertige et excellente condition physique pour le port de charges",
                "Sens aigu et intransigeant des règles de sécurité (risque de chute et risque électrique)",
                "Soigneux dans les gestes d'étanchéité pour éviter toute fuite d'eau chez le client",
                "Bon contact humain pour expliquer le fonctionnement de l'installation aux usagers"
            ],
            "tools": [
                "Pinces à sertir spécifiques pour connecteurs solaires MC4",
                "Appareils de mesure multifonctions solaires (contrôleurs de continuité, mégohmmètres)",
                "Caméras thermiques de détection d'anomalies sur cellules solaires",
                "Visseuses à choc, cliquets dynamométriques, harnais et longes de sécurité"
            ],
            "analytical": [
                "Identification des causes de sous-performance d'un string (ombrage, diode by-pass défectueuse)",
                "Vérification de la compatibilité tension/courant entre les panneaux et les plages MPPT de l'onduleur"
            ]
        },
        "specializations": [
            "Pose et intégration en toiture résidentielle et tertiaire",
            "Maintenance et dépannage haute tension sur grandes centrales au sol",
            "Installations solaires autonomes avec parcs de batteries et groupes hybrides"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Diplôme socle",
                    "title": "CAP Électricien ou Bac Pro MELEC (Métiers de l'Électricité)",
                    "desc": "Apprentissage des bases fondamentales du câblage électrique et de la sécurité."
                },
                {
                    "step": "Mention Complémentaire",
                    "title": "Mention Complémentaire Énergies Renouvelables (MC EnR)",
                    "desc": "Spécialisation d'un an axée sur la pose de générateurs solaires et pompes à chaleur."
                },
                {
                    "step": "Qualification Professionnelle",
                    "title": "Formation QualiPV (Élec et Bâtiment)",
                    "desc": "Habilitation reconnue pour obtenir le label RGE (Reconnu Garant de l'Environnement)."
                }
            ],
            "schools": [
                {
                    "name": "Lycées professionnels et CFA du bâtiment — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centres de formation continue agréés Qualit'EnR — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Dakar",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Centres de Formation Professionnelle (CFP) régionaux de Thiès et Kaolack — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Qualifications QualiPV Élec & QualiPV Bâtiment",
                "Habilitation électrique BR Photovoltaïque / BP",
                "Certificat CACES nacelle et travail en hauteur"
            ],
            "schoolSubjects": [
                "Électrotechnique",
                "Technologie du bâtiment",
                "Sécurité au travail",
                "Dessin de schémas"
            ]
        },
        "career": {
            "sectors": [
                "Entreprises spécialisées dans la pose d'énergies renouvelables",
                "PME d'électricité générale et de couverture-zinguerie",
                "Entreprises de maintenance et de gestion d'actifs solaires (O&M)"
            ],
            "employerTypes": [
                "Artisans et installateurs solaires",
                "Groupes de services énergétiques",
                "Sociétés d'exploitation de parcs solaires"
            ],
            "evolution": "Installateur débutant ➔ Chef d'équipe pose photovoltaïque ➔ Conducteur de travaux solaire ➔ Créateur de sa propre entreprise d'installation",
            "pros": "Métier manuel passionnant au grand air, fierté de voir une installation produire de l'énergie propre, forte demande de recrutement sur tout le territoire.",
            "cons": "Conditions météorologiques parfois rigoureuses (chaleur en été, froid en hiver), pénibilité physique du travail en toiture."
        },
        "gettingStarted": {
            "beginnerProject": "Monter un petit kit solaire autonome de 50 W avec batterie 12V pour alimenter une lampe LED et charger un téléphone.",
            "intermediateProject": "S'entraîner à dénuder un câble solaire de 6 mm² et sertir des connecteurs étanches MC4 mâle et femelle avec l'outil adapté.",
            "advancedProject": "Réaliser le schéma unifilaire complet d'une installation solaire de 3 kWc avec coffret DC, parafoudre, onduleur et raccordement au tableau principal.",
            "portfolioIdeas": [
                "Photos documentées d'une pose de panneaux dans les règles de l'art",
                "Schéma unifilaire conforme à la norme UTE C 15-712"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des drones équipés de caméras thermiques et guidés par IA survolent les grandes toitures pour repérer en quelques minutes les modules solaires en panne et générer la feuille de route du mainteneur.",
            "automatedTasks": [
                "Inspection thermique automatisée par drone sur les grands parcs solaires",
                "Diagnostic automatique des codes d'erreurs d'onduleurs via applications mobiles"
            ],
            "emergingSkills": [
                "Utilisation d'applications de diagnostic connecté et guidage par lunettes connectées"
            ],
            "humanEdge": "Le geste technique manuel d'étanchéité de toiture, le sang-froid en hauteur et l'habileté de câblage dans des combles étroits."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, des milliers de kits solaires et de pompes solaires agricoles sont installés chaque mois dans les zones rurales des régions de Kaolack, Tambacounda et Saint-Louis. Les techniciens installateurs et mainteneurs solaires y sont indispensables pour garantir l'accès à l'eau potable des forages et alimenter les dispensaires.",
            "localSectors": [
                "Entreprises sénégalaises d'énergie solaire (Nadji.Bi, Solene, Bonergie)",
                "Programmes d'électrification rurale de l'ASER",
                "Agro-pasteurs équipant leurs forages de pompage solaire"
            ],
            "remoteWork": "Strictement impossible (métier 100% physique sur chantiers et toitures).",
            "entrepreneurship": "Création d'une entreprise locale de pose et de maintenance de pompes solaires pour les maraîchers des Niayes et du bassin arachidier."
        },
        "relatedJobSlugs": [
            "chef-projet-energie-solaire-photovoltaique",
            "technicien-solaire-thermique",
            "monteur-technicien-reseaux-electriques",
            "technicien-maintenance-eolienne"
        ],
        "connectedFamilies": [
            "btp-architecture",
            "industrie-mecanique",
            "artisanat-metiers-dart"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Installateur solaire — Portail Energierecrute",
                "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php",
                "source": "Energierecrute"
            },
            {
                "type": "label",
                "title": "Qualit'EnR — Les qualifications des énergies renouvelables",
                "url": "https://www.qualit-enr.org/",
                "source": "Qualit'EnR"
            }
        ],
        "sources": [
            "Energierecrute",
            "Qualit'EnR",
            "FFB"
        ],
        "interests": [
            "construire-fabriquer",
            "nature-environnement"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Un panneau solaire moderne produit en moyenne 25 à 30 fois plus d'électricité propre au cours de ses 30 années de durée de vie que l'énergie nécessaire pour le fabriquer et le recycler.",
            "pourquoi": "L'amortissement énergétique d'un capteur solaire est atteint en moins d'un an et demi sous le soleil européen, et en moins de 9 mois sous l'ensoleillement tropical d'Afrique de l'Ouest.",
            "a_retenir": "Le technicien du réel qui capte la puissance du ciel pour électrifier nos vies."
        }
    },
    {
        "id": "technicien-solaire-thermique",
        "slug": "technicien-solaire-thermique",
        "title": "Technicien en Solaire Thermique & Chauffe-Eau Solaire",
        "aliases": [
            "Installateur de chauffe-eau solaire",
            "Plombier chauffagiste solaire",
            "Technicien capteurs thermiques"
        ],
        "icon": "🌡️",
        "image": "https://images.unsplash.com/photo-1542332213-31f87348057f?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Énergie Solaire Photovoltaïque & Thermique",
        "domainId": "energie-solaire-pv-thermique",
        "subdomain": "Solaire thermique",
        "energyTechnology": [
            "Capteurs solaires thermiques",
            "Fluide caloporteur",
            "Ballon d'eau chaude solaire",
            "Plomberie"
        ],
        "energySector": "Thermique & Plomberie",
        "sourceEnergierecrute": true,
        "isEmerging": false,
        "level": "CAP / Bac Pro Installateur Thermique ou Titre Pro Plombier Chauffagiste Solaire",
        "salary": "🇫🇷 France : 1 950 - 3 000 € net/mois (~27 000 - 42 000 € brut/an, Source : Energierecrute / Plomberie) • 🇸🇳 Sénégal : 220 000 - 800 000 FCFA / mois (Entreprises d'équipements thermiques et sanitaires)",
        "simpleDefinition": "Le technicien en solaire thermique installe et entretient des capteurs solaires vitrés ou sous vide qui absorbent le rayonnement du soleil pour chauffer un fluide caloporteur et produire de l'eau chaude sanitaire ou du chauffage pour les maisons, hôtels et hôpitaux.",
        "shortDescription": "Fiche de spécialité répertoriée par Energierecrute (filière EnR thermique), cet artisan des fluides convertit la chaleur directe du soleil pour décarboner la production d'eau chaude.",
        "longDescription": "Différencié du photovoltaïque qui produit de l'électricité, le technicien en solaire thermique documenté par Energierecrute est un spécialiste de la plomberie et des échanges thermiques. Il pose les capteurs plans ou tubes sous vide en toiture, pose les tuyauteries en cuivre calorifugées transportant le fluide caloporteur (mélange d'eau et de glycol antigel), raccorde le ballon solaire échangeur et programme la régulation électronique différentielle qui enclenche le circulateur lorsque le panneau est plus chaud que le ballon.",
        "mainObjective": "Capter un maximum de calories solaires pour couvrir 60% à 80% des besoins d'eau chaude sanitaire sans consommer d'électricité ni de gaz de réseau.",
        "companyRole": "Installateur expert de la chaleur renouvelable et des systèmes hydrauliques solaires.",
        "workEnvironment": [
            "☀️ Toitures et terrasses pour la pose des capteurs vitrés",
            "🏠 Chaufferies, sous-sols et locaux techniques pour l'installation des ballons de stockage et circulateurs",
            "🔧 Intervention dans l'habitat individuel, l'hôtellerie, les campings et les cliniques"
        ],
        "missions": [
            "Calculer l'inclinaison et l'orientation optimale des capteurs thermiques (idéalement 45° plein Sud)",
            "Installer les capteurs solaires en toiture en garantissant une étanchéité absolue de la couverture",
            "Poser les conduites en cuivre brasé et l'isolation thermique haute température contre les déperditions",
            "Remplir et purger le circuit primaire sous pression avec le fluide caloporteur antigel (propylène glycol)",
            "Programmer la régulation différentielle solaire et régler les sécurités de surchauffe (vase d'expansion solaire)"
        ],
        "typicalDay": [
            {
                "time": "08:15",
                "title": "Pose des capteurs en toiture",
                "desc": "Fixation de deux panneaux solaires thermiques de 2,5 m² chacun sur le toit d'une maison individuelle."
            },
            {
                "time": "10:45",
                "title": "Brasure des tuyauteries en chaufferie",
                "desc": "Brasure forte à l'argent des tubes cuivre reliant les capteurs au serpentin inférieur du ballon solaire de 300 L."
            },
            {
                "time": "14:00",
                "title": "Remplissage et épreuve de pression",
                "desc": "Injection à la pompe manuelle du fluide caloporteur sous 3 bars et vérification de l'absence de fuite au manomètre."
            },
            {
                "time": "16:15",
                "title": "Mise en service de la régulation",
                "desc": "Paramétrage de la sonde de température panneau (PT1000) et vérification du déclenchement du circulateur dès que delta T > 6°C."
            }
        ],
        "skills": {
            "technical": [
                "Plomberie, brasure forte au cuivre et raccordements hydrauliques étanches",
                "Thermodynamique des fluides caloporteurs, vases d'expansion et mitigeurs thermostatiques",
                "Couverture de toiture et règles d'intégration étanche des panneaux",
                "Régulation électronique différentielle et gestion des risques de surchauffe estivale (stagnation)"
            ],
            "human": [
                "Rigueur manuelle et minutie dans les soudures pour éviter toute fuite de fluide",
                "Agilité physique et respect strict des règles de sécurité en toiture",
                "Pédagogie pour expliquer à l'usager la gestion d'un chauffe-eau solaire en été",
                "Sens du diagnostic méthodique lors des pannes de circulation"
            ],
            "tools": [
                "Chalumeau oxy-acétylénique ou poste de brasure cuivre",
                "Station de remplissage et de purge solaire avec pompe manuelle",
                "Réfractomètre pour mesurer le dosage et le point de gel du fluide caloporteur",
                "Manomètres de pression et thermomètres de contact"
            ],
            "analytical": [
                "Évaluation du volume de stockage nécessaire (environ 50 L d'eau par mètre carré de capteur)",
                "Diagnostic de dégradation du fluide caloporteur par mesure de pH et réfractométrie"
            ]
        },
        "specializations": [
            "Chauffe-eau solaires individuels (CESI)",
            "Systèmes Solaires Combinés (SSC) eau chaude + chauffage au sol",
            "Grandes installations solaires thermiques collectives pour hôpitaux et hôtels"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Diplôme de base",
                    "title": "CAP Monteur en Installations Thermiques ou Plombier",
                    "desc": "Bases de la plomberie, du cintrage de tubes et de la brasure cuivre."
                },
                {
                    "step": "Bac Pro spécialisé",
                    "title": "Bac Pro Métiers du Froid et des Énergies Renouvelables (MFER)",
                    "desc": "Perfectionnement en hydraulique thermique et circuits solaires."
                },
                {
                    "step": "Qualification Professionnelle",
                    "title": "Formation QualiSol (Chauffe-eau & Combi)",
                    "desc": "Reconnaissance RGE indispensable pour faire bénéficier les clients d'aides financières."
                }
            ],
            "schools": [
                {
                    "name": "Lycées professionnels du bâtiment et CFA de plomberie — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centres de formation Qualit'EnR agréés QualiSol — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Dakar",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification QualiSol CESI / QualiSol Combi",
                "Habilitation manipulation des fluides sous pression"
            ],
            "schoolSubjects": [
                "Hydraulique",
                "Thermodynamique",
                "Plomberie",
                "Sécurité travail en hauteur"
            ]
        },
        "career": {
            "sectors": [
                "Entreprises artisanales de plomberie-chauffage et énergies renouvelables",
                "Sociétés d'entretien et de maintenance thermique",
                "Bureaux d'études spécialisés dans le solaire collectif"
            ],
            "employerTypes": [
                "Installateurs chauffagistes",
                "PME de génie climatique",
                "Exploitants de réseaux de chaleur"
            ],
            "evolution": "Technicien poseur ➔ Chauffagiste solaire confirmé ➔ Chef d'équipe énergies renouvelables ➔ Artisan chef d'entreprise",
            "pros": "Très haute satisfaction client (énergie gratuite du soleil pour l'eau chaude), métier alliant plomberie noble et technologie verte, excellent taux d'emploi.",
            "cons": "Interventions en toiture par fortes chaleurs, manipulation délicate de fluides sous pression lors des purges."
        },
        "gettingStarted": {
            "beginnerProject": "Observer le fonctionnement d'un chauffe-eau solaire en mesurant la température de l'eau en haut et en bas du ballon à midi.",
            "intermediateProject": "Réaliser une brasure forte propre entre deux tubes de cuivre de 18 mm et tester son étanchéité sous pression d'eau.",
            "advancedProject": "Calculer le dimensionnement des capteurs et du ballon solaire pour un hôtel de 20 chambres consommant 1 000 litres d'eau chaude à 60°C par jour.",
            "portfolioIdeas": [
                "Schéma de principe hydraulique d'un CESI",
                "Compte-rendu de maintenance annuelle avec contrôle du glycol au réfractomètre"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des régulateurs solaires connectés intègrent des prévisions météo par IA pour anticiper les journées ensoleillées et bloquer automatiquement l'appoint électrique.",
            "automatedTasks": [
                "Optimisation prédictive de l'enclenchement de l'appoint électrique selon la météo du lendemain",
                "Alerte automatique en cas de baisse anormale de pression du fluide"
            ],
            "emergingSkills": [
                "Paramétrage de passerelles domotiques intelligentes connectées aux ballons solaires"
            ],
            "humanEdge": "La dextérité manuelle pour réaliser des soudures étanches pendant 30 ans et le respect des règles de l'art du bâtiment."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal et dans la zone sahélienne, le chauffe-eau solaire thermique est d'une rentabilité éclatante avec plus de 300 jours d'ensoleillement par an. Les hôtels de la Petite Côte (Saly, Somone), les résidences de Dakar et les hôpitaux régionaux en équipent leurs toits pour supprimer leur plus gros poste de consommation électrique.",
            "localSectors": [
                "Entreprises d'installations solaires thermiques de Dakar et Thiès",
                "Secteur hôtelier et touristique de la Petite Côte et de Saint-Louis",
                "Cliniques et maternités rurales"
            ],
            "remoteWork": "Strictement impossible (installation physique sur toiture et raccordement plomberie).",
            "entrepreneurship": "Création d'un atelier local d'assemblage et d'installation de chauffe-eau solaires thermosiphons à bas coût pour les ménages urbains et ruraux."
        },
        "relatedJobSlugs": [
            "installateur-mainteneur-photovoltaique",
            "technicien-genie-climatique-frigoriste",
            "technicien-etudes-thermiques-batiment",
            "charge-affaires-energetique-cvc"
        ],
        "connectedFamilies": [
            "btp-architecture",
            "artisanat-metiers-dart",
            "environnement-climat"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Métier Technicien solaire thermique — Energierecrute",
                "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php",
                "source": "Energierecrute"
            },
            {
                "type": "portail",
                "title": "Solaire thermique collectif — SOCOL",
                "url": "https://www.solaire-collectif.fr/",
                "source": "SOCOL / ADEME"
            }
        ],
        "sources": [
            "Energierecrute",
            "SOCOL",
            "Qualit'EnR QualiSol"
        ],
        "interests": [
            "construire-fabriquer",
            "nature-environnement"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Un chauffe-eau solaire thermique possède un rendement énergétique impressionnant de 70% à 80% de conversion des rayons du soleil en chaleur utile, soit près de quatre fois plus que le photovoltaïque.",
            "pourquoi": "Le capteur thermique piège directement la chaleur infrarouge par effet de serre sous son vitrage sélectif, sans avoir besoin de convertir la lumière en électrons.",
            "a_retenir": "Le maître de la chaleur solaire qui chauffe l'eau des foyers avec la pure énergie du ciel."
        }
    },
    {
        "id": "chef-projet-eolien-onshore-offshore",
        "slug": "chef-projet-eolien-onshore-offshore",
        "title": "Chef de Projet Éolien (Onshore & Offshore)",
        "aliases": [
            "Développeur de parcs éoliens",
            "Ingénieur chef de projet éolien en mer",
            "Responsable de programmes éoliens"
        ],
        "icon": "🌬️",
        "image": "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Énergie Éolienne Onshore & Offshore",
        "domainId": "energie-eolienne-onshore-offshore",
        "subdomain": "Éolien",
        "energyTechnology": [
            "Éoliennes terrestres",
            "Éolien posé & flottant en mer",
            "Gisement anémométrique",
            "Réseaux haute tension"
        ],
        "energySector": "Énergies Renouvelables",
        "sourceEnergierecrute": true,
        "isEmerging": false,
        "level": "Bac +5 (Ingénieur en Génie Énergétique, Électrique ou Maritime / Master EnR)",
        "salary": "🇫🇷 France : 3 000 - 5 200 € net/mois (~42 000 - 75 000 € brut/an, Source : Energierecrute / APEC) • 🇸🇳 Sénégal : 600 000 - 2 000 000 FCFA / mois (Grands parcs éoliens, Taïba N'Diaye)",
        "simpleDefinition": "Le chef de projet éolien pilote le développement de parcs éoliens terrestres ou maritimes (offshore), depuis l'analyse des vents et la concertation citoyenne jusqu'à la construction et au raccordement électrique des turbines géantes.",
        "shortDescription": "Fiche majeure du catalogue Energierecrute, ce stratège de grande envergure mène des projets d'infrastructures éoliennes mobilisant des dizaines de millions d'euros d'investissements.",
        "longDescription": "Répertorié parmi les fonctions phares des énergies renouvelables sur Energierecrute, le chef de projet éolien gère un projet industriel sur un cycle de 4 à 8 ans. Il sélectionne les zones ventées par analyse anémométrique (mâts de mesure, lidar), engage les études acoustiques, d'avifaune (oiseaux, chauves-souris) et paysagères, mène les enquêtes publiques, négocie les contrats de rachat d'électricité et coordonne les chantiers de génie civil (fondations géantes en béton ou fondations marines posées/flottantes) et de levage des éoliennes.",
        "mainObjective": "Développer et mener à l'exploitation des parcs éoliens performants, financièrement solides et pleinement acceptés par les territoires d'accueil.",
        "companyRole": "Leader d'affaires et chef d'orchestre des projets éoliens d'envergure nationale et internationale.",
        "workEnvironment": [
            "🏢 Entreprises de développement et d'exploitation de parcs éoliens (ENGIE, EDF Renouvelables, TotalEnergies, Iberdrola, RWE)",
            "🌬️ Déplacements fréquents sur les sites de parcs terrestres et zones portuaires maritimes",
            "🏛️ Réunions publiques avec maires, agriculteurs, pêcheurs (offshore) et préfets"
        ],
        "missions": [
            "Coordonner l'implantation de mâts de mesure de vent (LIDAR) et interpréter les données d'anémométrie sur plusieurs saisons",
            "Superviser les études d'impact environnemental (chiroptères, oiseaux migrateurs, faune marine)",
            "Piloter la concertation territoriale avec les élus locaux, riverains et comités des pêches pour l'offshore",
            "Déposer et défendre le dossier de demande d'autorisation environnementale unique en préfecture",
            "Négocier avec le gestionnaire de réseau (RTE/Senelec) le raccordement en poste source et préparer les appels d'offres"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Analyse de données anémométriques LIDAR",
                "desc": "Calcul de la vitesse moyenne du vent à 140 m de hauteur et simulation de la courbe de puissance sous WAsP."
            },
            {
                "time": "11:00",
                "title": "Réunion publique d'information citoyenne",
                "desc": "Présentation des photomontages paysagers et des retombées fiscales d'un projet de 6 éoliennes devant les habitants."
            },
            {
                "time": "14:30",
                "title": "Point technique génie civil des fondations",
                "desc": "Vérification des études géotechniques de sol pour le coulage de 600 m³ de béton armé par socle d'éolienne."
            },
            {
                "time": "16:45",
                "title": "Comité d'investissement projet",
                "desc": "Présentation du plan de financement et du taux de rentabilité interne (TRI) devant le comité de direction."
            }
        ],
        "skills": {
            "technical": [
                "Aérodynamique éolienne, mécanique des fluides et anémométrie (WAsP, WindPro)",
                "Génie électrique haute tension (HTA/HTB) et transformateurs de parc",
                "Droit de l'environnement, ICPE éolienne et procédures d'autorisation unique",
                "Gestion de projets complexes multi-acteurs et financements de projets bancaires"
            ],
            "human": [
                "Diplomatie exceptionnelle, écoute active et courage dans la concertation publique",
                "Ténacité face aux recours contentieux et aux temps longs de développement",
                "Leadership rassembleur pour piloter experts géologues, acousticiens et juristes",
                "Sens aigu de la pédagogie technique pour déconstruire les fausses croyances"
            ],
            "tools": [
                "WindPro, WAsP, Openwind",
                "QGIS, ArcGIS pour la cartographie des contraintes territoriales",
                "LIDAR anémométriques, stations météo de mesure",
                "Logiciels de modélisation 3D acoustique et paysagère"
            ],
            "analytical": [
                "Calcul de l'effet de sillage (wake effect) entre éoliennes pour minimiser les pertes de vent",
                "Optimisation du rapport investissement CAPEX / production OPEX"
            ]
        },
        "specializations": [
            "Développement de parcs éoliens terrestres (Onshore)",
            "Éolien en mer posé (fondations jackets / monopieux)",
            "Éolien en mer flottant de nouvelle génération (grandes profondeurs)"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Diplôme d'ingénieur",
                    "title": "Diplôme d'Ingénieur Énergies Renouvelables, Mécanique ou Maritime",
                    "desc": "Formation de référence pour maîtriser les aspects mécaniques, aérodynamiques et électriques des éoliennes."
                },
                {
                    "step": "Master Spécialisé",
                    "title": "Master Énergies Renouvelables Marines ou Droit de l'Énergie",
                    "desc": "Perfectionnement en environnement maritime et concertation publique."
                },
                {
                    "step": "Double compétence",
                    "title": "Cursus combinant technique de l'énergie et gestion de projet",
                    "desc": "Profil idéal pour évoluer rapidement vers la direction de projets internationaux."
                }
            ],
            "schools": [
                {
                    "name": "Centrale Nantes / École Navale (filières éolien offshore) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "INSA Rouen / Polytech Nantes — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) — Sénégal",
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
                "Certification WindPro / WAsP",
                "Habilitation sécurité maritime BST (GWO - Global Wind Organisation)"
            ],
            "schoolSubjects": [
                "Aérodynamique",
                "Mécanique des structures",
                "Droit de l'environnement",
                "Électrotechnique"
            ]
        },
        "career": {
            "sectors": [
                "Développeurs et producteurs indépendants d'électricité éolienne (Iberdrola, EDF Renouvelables, Neoen)",
                "Constructeurs de turbines éoliennes (Vestas, Siemens Gamesa, Nordex, GE Vernova)",
                "Bureaux d'études d'impact environnemental et d'ingénierie marine"
            ],
            "employerTypes": [
                "Producteurs d'électricité verte",
                "Grands énergéticiens",
                "Cabinets de conseil éolien"
            ],
            "evolution": "Chef de projet junior ➔ Chef de projet confirmé ➔ Responsable pôle éolien régional ➔ Directeur du développement éolien national/offshore",
            "pros": "Projets monumentaux emblématiques de la transition énergétique, adrénaline des grands chantiers industriels, très fortes perspectives de carrière mondiales.",
            "cons": "Délais de développement longs (jusqu'à 7 ans pour un parc terrestre, 10 ans pour l'offshore), exposition médiatique et contestations locales."
        },
        "gettingStarted": {
            "beginnerProject": "Consulter l'Atlas Global du Vent (Global Wind Atlas) pour observer les zones côtières et terrestres les plus venteuses de son pays.",
            "intermediateProject": "Modéliser sous tableur l'énergie produite par une éolienne de 3 MW en fonction d'une distribution de vent de Weibull.",
            "advancedProject": "Rédiger une note de cadrage environnemental identifiant les couloirs de migration des oiseaux et les contraintes radar militaires pour l'implantation d'un parc de 5 éoliennes.",
            "portfolioIdeas": [
                "Analyse de productible éolien sous WindPro ou tableur",
                "Dossier de concertation territoriale simulé pour un projet éolien"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA pilote des caméras intelligentes montées sur les mâts pour détecter l'approche de grands oiseaux et ralentir automatiquement les pales pour éviter les collisions.",
            "automatedTasks": [
                "Détection vidéo en temps réel de rapaces par IA et arrêt préventif des pales",
                "Simulation automatique de centaines d'agencements de mâts pour minimiser l'effet de sillage"
            ],
            "emergingSkills": [
                "Paramétrage de systèmes anticollision faune pilotés par vision artificielle"
            ],
            "humanEdge": "La capacité d'écoute sincère, de respect des riverains et de négociation politique lors des réunions publiques houleuses."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le parc éolien de Taïba N'Diaye (158,7 MW) est le plus grand parc éolien en exploitation d'Afrique de l'Ouest avec ses 46 turbines géantes fournissant plus de 15% de l'électricité du pays. Les chefs de projets y gèrent la cohabitation avec les vergers d'arbres fruitiers (manguiers) et les compensations agricoles.",
            "localSectors": [
                "Parc éolien de Taïba N'Diaye (PETN / Lekela Power)",
                "Senelec (Société Nationale d'Électricité)",
                "Bureaux d'études d'impact environnemental sénégalais"
            ],
            "remoteWork": "Hybride (visites de terrain / travail de bureau et relations institutionnelles).",
            "entrepreneurship": "Création d'un cabinet de conseil en suivi environnemental et sociétal pour les grands parcs éoliens et solaires en Afrique subsaharienne."
        },
        "relatedJobSlugs": [
            "technicien-maintenance-eolienne",
            "chef-projet-energie-solaire-photovoltaique",
            "ingenieur-smart-grids-reseaux-intelligents",
            "responsable-hse-sites-energetiques"
        ],
        "connectedFamilies": [
            "environnement-climat",
            "direction-strategie",
            "industrie-mecanique"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Chef de projet éolien — Energierecrute",
                "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php",
                "source": "Energierecrute"
            },
            {
                "type": "organisation",
                "title": "France Renouvelables (ex-FEE)",
                "url": "https://france-renouvelables.fr/",
                "source": "France Renouvelables"
            }
        ],
        "sources": [
            "Energierecrute",
            "France Renouvelables",
            "Global Wind Energy Council (GWEC)"
        ],
        "interests": [
            "nature-environnement",
            "construire-fabriquer",
            "negocier-convaincre"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Une éolienne moderne en mer (offshore) peut mesurer plus de 260 mètres de hauteur totale avec des pales de 107 mètres de long balayant une surface équivalente à six terrains de football d'un seul tour.",
            "pourquoi": "Un seul tour de pale de ces géantes des mers produit suffisamment d'électricité pour alimenter un foyer moyen pendant deux journées complètes.",
            "a_retenir": "Le bâtisseur des cathédrales du vent qui fait tourner la force de l'air en électricité pour des millions d'habitants."
        }
    },
    {
        "id": "technicien-maintenance-eolienne",
        "slug": "technicien-maintenance-eolienne",
        "title": "Technicien de Maintenance Éolienne (Onshore & Offshore)",
        "aliases": [
            "Technicienne éolien",
            "Électromécanicien éolien en mer",
            "Grimpeur technicien éolien"
        ],
        "icon": "⚙️",
        "image": "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Énergie Éolienne Onshore & Offshore",
        "domainId": "energie-eolienne-onshore-offshore",
        "subdomain": "Maintenance de turbines éoliennes",
        "energyTechnology": [
            "Turbines éoliennes",
            "Multiplicateurs de vitesse",
            "Génératrices synchrones",
            "Hydraulique de pas"
        ],
        "energySector": "Maintenance & Électromécanique",
        "sourceEnergierecrute": true,
        "isEmerging": false,
        "level": "Bac Pro Électrotechnique, BTS Maintenance des Systèmes (Option Éolien) ou Titre BZE",
        "salary": "🇫🇷 France : 2 200 - 3 600 € net/mois + primes de grand déplacement (~30 000 - 52 000 € brut/an, Source : Energierecrute / Éolien) • 🇸🇳 Sénégal : 350 000 - 1 200 000 FCFA / mois (Parcs éoliens industriels de Taïba N'Diaye)",
        "simpleDefinition": "Le technicien de maintenance éolienne escalade les mâts pour inspecter, entretenir et dépanner la mécanique, l'hydraulique et l'électronique de puissance situées dans la nacelle à plus de 100 mètres de hauteur, sur terre comme en mer.",
        "shortDescription": "Métier spectaculaire et très recherché documenté par les formations d'Energierecrute (maintenance éolienne et offshore), il assure la disponibilité opérationnelle des turbines par tous les temps.",
        "longDescription": "Mis en avant dans les offres et cursus de maintenance spécialisée sur Energierecrute, ce technicien hors pair intervient au sommet des éoliennes. En binôme permanent et équipé d'équipements de sécurité certifiés GWO (Global Wind Organisation), il réalise l'entretien préventif des engrenages du multiplicateur, vidange les huiles, contrôle le serrage des pales au couple, dépanne les systèmes hydrauliques d'orientation (pitch) et répare les convertisseurs électroniques de fréquence. En offshore, il embarque sur des navires spécialisés (CTV) et intervient en haute mer.",
        "mainObjective": "Maximiser le taux de disponibilité technique des éoliennes et réduire à zéro les temps d'arrêt non planifiés dans le respect absolu de la sécurité en hauteur.",
        "companyRole": "Opérateur de pointe assurant la santé mécanique et électrique des parcs éoliens.",
        "workEnvironment": [
            "🌬️ Nacelles étroites d'éoliennes situées entre 80 et 150 mètres au-dessus du sol ou des flots",
            "🚢 Navires de transfert d'équipage (CTV) et plateformes marines pour l'éolien offshore",
            "🛠️ Déplacements en équipe de deux techniciens minimum (règle de sécurité impérative)"
        ],
        "missions": [
            "Monter dans les mâts à l'aide d'échelles équipées d'antichutes ou d'élévateurs de service de nacelle",
            "Réaliser les contrôles d'alignement laser de la génératrice et du multiplicateur de vitesse",
            "Effectuer les vidanges d'huile haute température, le graissage des roulements et le remplacement des filtres",
            "Diagnostiquer les pannes électriques (automates programmables, capteurs anémométriques, convertisseurs)",
            "Inspecter l'état structurel des pales en composite de fibre de verre (fissures, impacts de foudre)"
        ],
        "typicalDay": [
            {
                "time": "07:30",
                "title": "Briefing sécurité et météo à la base de maintenance",
                "desc": "Vérification des prévisions de vent (vitesse < 12 m/s autorisée pour monter) et contrôle des harnais et longes de sécurité."
            },
            {
                "time": "08:45",
                "title": "Ascension de la tour de 120 mètres",
                "desc": "Montée par ascenseur de mât puis échelle de secours jusqu'à la nacelle avec l'outillage et les pièces de rechange."
            },
            {
                "time": "11:00",
                "title": "Dépannage du système hydraulique de pitch",
                "desc": "Remplacement d'une électrovanne fuyante sur le vérin de calage de la pale numéro 2 et purge du circuit sous 180 bars."
            },
            {
                "time": "14:30",
                "title": "Test de redémarrage et remise en production",
                "desc": "Lancement du cycle automatique de synchronisation avec le réseau électrique et surveillance des vibrations."
            },
            {
                "time": "16:45",
                "title": "Rédaction du compte-rendu sous GMAO",
                "desc": "Saisie des pièces changées et clôture du bon d'intervention sur la tablette de maintenance connectée."
            }
        ],
        "skills": {
            "technical": [
                "Électromécanique, mécanique lourde d'engrenages et alignement laser d'arbres tournants",
                "Hydraulique industrielle haute pression (vérins de pas de pale, freins aérodynamiques)",
                "Électronique de puissance et automates programmables industriels (PLC)",
                "Normes et gestes de sécurité de travail en hauteur et secours en espace confiné (standard GWO)"
            ],
            "human": [
                "Excellente condition physique, endurance et absence absolue de vertige",
                "Esprit d'équipe indéfectible et communication constante avec son binôme",
                "Sang-froid et rigueur totale face aux procédures de sécurité et d'urgence",
                "Capacité d'adaptation face aux conditions météorologiques changeantes"
            ],
            "tools": [
                "Clés dynamométriques et visseuses hydrauliques à fort couple (serrage de boulons M36 à plus de 1 500 Nm)",
                "Appareils d'alignement laser d'arbres et collecteurs de vibrations",
                "Multimètres, caméras d'inspection endoscopique pour boîtes de vitesses",
                "Harnais de sécurité intégrale, antichutes à rappel automatique et descendeurs de secours"
            ],
            "analytical": [
                "Analyse des spectres vibratoires pour détecter l'ébréchure d'une dent d'engrenage avant la casse",
                "Interprétation des codes d'erreurs du système SCADA de télégestion de l'éolienne"
            ]
        },
        "specializations": [
            "Maintenance électromécanique de turbines éoliennes terrestres",
            "Maintenance éolienne en mer (Offshore) avec hélitreuillage et transfert maritime",
            "Réparation et inspection cordiste de pales composites en hauteur"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Diplôme socle Bac +2",
                    "title": "BTS Maintenance des Systèmes (Option Éolien) ou BTS Électrotechnique",
                    "desc": "Formation technique de référence en mécanique, électricité et automatisme."
                },
                {
                    "step": "Qualification Professionnelle",
                    "title": "Titre Professionnel de Technicien de Maintenance Éolienne (BZE / Greta)",
                    "desc": "Formation reconnue par Energierecrute axée sur l'immersion pratique en nacelle."
                },
                {
                    "step": "Certification Internationale",
                    "title": "Certification GWO (Global Wind Organisation) — Modules obligatoires",
                    "desc": "Travail en hauteur, premiers secours, manipulation manuelle, incendie et survie en mer (Sea Survival)."
                }
            ],
            "schools": [
                {
                    "name": "Lycées et centres préparant à la formation BZE / GWO — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Lycée technique de Fécamp / Cherbourg (filières éolien en mer) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Dakar",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certificat GWO BST (Basic Safety Training)",
                "Habilitations électriques B2V / H2V / BR Éolien",
                "Certificat d'Aptitude Médicale au travail en hauteur et en mer"
            ],
            "schoolSubjects": [
                "Électromécanique",
                "Hydraulique",
                "Sécurité travail en hauteur",
                "Automatisme"
            ]
        },
        "career": {
            "sectors": [
                "Constructeurs mondiaux d'éoliennes (Vestas, Siemens Gamesa, Nordex, GE Vernova)",
                "Sociétés de maintenance multi-marques spécialisées (Deutsche Windtechnik, FairWind, Enertrag)",
                "Exploitants de parcs de production d'énergie renouvelable"
            ],
            "employerTypes": [
                "Constructeurs d'éoliennes",
                "Prestataires de maintenance O&M",
                "Grands énergéticiens"
            ],
            "evolution": "Technicien de maintenance junior ➔ Technicien senior / Team Leader ➔ Superviseur technique de parc éolien ➔ Responsable régional de maintenance",
            "pros": "Métier d'aventure et de grand air, camaraderie soudée entre techniciens, vues spectaculaires depuis les nacelles, rémunérations valorisées avec primes.",
            "cons": "Déplacements permanents (itinérance régionale ou nationale), contraintes physiques de l'ascension quotidienne, travail en milieu marin éprouvant."
        },
        "gettingStarted": {
            "beginnerProject": "S'entraîner à la lecture d'un schéma hydraulique industriel de vérin à double effet avec clapet anti-retour.",
            "intermediateProject": "Réaliser le contrôle d'isolement d'un moteur triphasé et mesurer la résistance de ses bobinages au multimètre.",
            "advancedProject": "Simuler une procédure d'évacuation d'urgence d'une nacelle d'éolienne avec utilisation d'un descendeur à vitesse constante.",
            "portfolioIdeas": [
                "Compte-rendu d'intervention de maintenance préventive",
                "Attestation de formation aux premiers secours et travail en hauteur"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "La maintenance prédictive par IA analyse en continu les vibrations et la température des roulements pour alerter le technicien des semaines avant qu'une défaillance mécanique ne survienne.",
            "automatedTasks": [
                "Analyse prédictive des capteurs d'huile et de température par réseaux de neurones",
                "Génération automatique des listes de pièces détachées à emporter en nacelle"
            ],
            "emergingSkills": [
                "Utilisation de jumeaux numériques d'éoliennes pour préparer les interventions à distance"
            ],
            "humanEdge": "La dextérité physique pour monter à 120 m, manœuvrer des pièces lourdes dans un espace confiné et porter secours à son collègue en cas d'accident."
        },
        "africaContext": {
            "senegalInsight": "Sur le parc éolien de Taïba N'Diaye au Sénégal, des équipes de techniciens sénégalais formés aux standards internationaux GWO assurent la maintenance quotidienne des 46 éoliennes Vestas de 3,45 MW, garantissant une disponibilité supérieure à 97% malgré les vents de poussière sahéliens (Harmattan).",
            "localSectors": [
                "Parc éolien de Taïba N'Diaye (PETN)",
                "Sous-traitants techniques de Senelec",
                "Centres de maintenance électromécanique industrielle de Thiès"
            ],
            "remoteWork": "Strictement impossible (100% terrain sur le parc éolien et dans les nacelles).",
            "entrepreneurship": "Création d'une PME spécialisée dans le nettoyage des pales et la maintenance électromécanique des équipements éoliens et solaires en Afrique de l'Ouest."
        },
        "relatedJobSlugs": [
            "chef-projet-eolien-onshore-offshore",
            "installateur-mainteneur-photovoltaique",
            "monteur-technicien-reseaux-electriques",
            "technicien-maintenance-nucleaire"
        ],
        "connectedFamilies": [
            "industrie-mecanique",
            "securite-defense",
            "environnement-climat"
        ],
        "resources": [
            {
                "type": "formation",
                "title": "Formation maintenance éolienne offshore — Energierecrute",
                "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php?page=5",
                "source": "Energierecrute"
            },
            {
                "type": "standard",
                "title": "Global Wind Organisation (GWO) — Standards de sécurité",
                "url": "https://www.globalwindsafety.org/",
                "source": "GWO"
            }
        ],
        "sources": [
            "Energierecrute",
            "GWO",
            "France Renouvelables"
        ],
        "interests": [
            "construire-fabriquer",
            "nature-environnement"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Pour accéder à la nacelle d'une éolienne moderne, un technicien gravit l'équivalent d'un immeuble de 40 étages, parfois à la force des bras et des jambes lorsque l'ascenseur de mât est en révision.",
            "pourquoi": "Ce métier exige une forme physique d'athlète et une rigueur totale, chaque montée étant précédée d'un contrôle scrupuleux de tous les points d'ancrage.",
            "a_retenir": "L'alpiniste de la transition énergétique qui maintient les géantes du vent en action."
        }
    },
    {
        "id": "ingenieur-hydroelectricite-barrages",
        "slug": "ingenieur-hydroelectricite-barrages",
        "title": "Ingénieur en Hydroélectricité & Ouvrages Hydrauliques",
        "aliases": [
            "Ingénieur hydroélectricien",
            "Ingénieur barrages et usines hydroélectriques",
            "Chef de projet aménagements hydrauliques"
        ],
        "icon": "💧",
        "image": "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Hydroélectricité & Aménagements Hydrauliques",
        "domainId": "hydroelectricite-hydraulique",
        "subdomain": "Hydroélectricité",
        "energyTechnology": [
            "Turbines Pelton/Francis/Kaplan",
            "Barrages réservoirs",
            "Conduites forcées",
            "STEP (Pompage-turbinage)"
        ],
        "energySector": "Hydroélectricité & Génie Civil",
        "sourceEnergierecrute": true,
        "isEmerging": false,
        "level": "Bac +5 (Ingénieur en Mécanique des Fluides, Hydraulique ou Génie Civil)",
        "salary": "🇫🇷 France : 3 000 - 5 200 € net/mois (~42 000 - 75 000 € brut/an, Source : Energierecrute / APEC) • 🇸🇳 Sénégal : 600 000 - 2 200 000 FCFA / mois (OMVS, barrages de Manantali, Félou, Gouina)",
        "simpleDefinition": "L'ingénieur hydroélectricien conçoit, modernise et supervise l'exploitation des barrages, usines hydroélectriques et stations de pompage-turbinage (STEP) qui transforment la force de l'eau en électricité pilotable et stockable.",
        "shortDescription": "Métier historique et stratégique de l'énergie répertorié par Energierecrute, ce spécialiste de la houille blanche gère la première source d'électricité renouvelable pilotable au monde.",
        "longDescription": "Comme documenté dans les fiches et classifications de production électrique sur Energierecrute, l'ingénieur hydroélectricien intervient à la croisée de l'hydraulique, de la mécanique lourde, du génie civil et de l'électrotechnique. Il dimensionne les turbines (Pelton pour hautes chutes, Francis pour moyennes chutes, Kaplan pour basses chutes), supervise la sécurité et l'auscultation des barrages, optimise le turbinage en fonction des débits des fleuves et déploie des stations de pompage-turbinage (STEP), véritables batteries d'eau indispensables pour équilibrer les réseaux électriques.",
        "mainObjective": "Valoriser au maximum le potentiel énergétique des cours d'eau tout en assurant la sûreté des barrages et la continuité écologique des rivières.",
        "companyRole": "Concepteur et garant de la sécurité et de la puissance des aménagements hydroélectriques.",
        "workEnvironment": [
            "💧 Usines hydroélectriques souterraines et centrales au fil de l'eau",
            "🏔️ Barrages d'altitude, retenues d'eau et vallées fluviales",
            "🏢 Sièges des grands exploitants hydroélectriques (EDF Hydro, CNR, SHEM, OMVS)"
        ],
        "missions": [
            "Dimensionner les composants hydrauliques des usines (conduites forcées, cheminées d'équilibre, répartiteurs)",
            "Sélectionner et modéliser les profils de turbines hydrauliques (Pelton, Francis, Kaplan) pour maximiser le rendement",
            "Ausculter les barrages (pendules de déplacement, piézomètres, déformations) pour garantir leur sûreté absolue",
            "Piloter des projets de réhabilitation de groupes de production hydroélectrique centenaires",
            "Concevoir des dispositifs de franchissement piscicole (passes à poissons, dévalaison) pour préserver la faune aquatique"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Auscultation géotechnique du barrage",
                "desc": "Contrôle des relevés de fuites et des mouvements millimétriques de la voûte en béton d'un barrage-voûte de 80 m."
            },
            {
                "time": "11:00",
                "title": "Modélisation de coup de bélier",
                "desc": "Calcul sous logiciel hydraulique des surpressions lors de la fermeture d'urgence des vannes d'une conduite forcée."
            },
            {
                "time": "14:30",
                "title": "Inspection de la roue de turbine Francis",
                "desc": "Examen visuel et contrôle non destructif par ressuage des aubes de la turbine pour déceler d'éventuelles traces de cavitation."
            },
            {
                "time": "16:45",
                "title": "Réunion sur le débit réservé avec l'Agence de l'Eau",
                "desc": "Ajustement du débit d'eau minimal restitué au cours d'eau pour concilier production d'énergie et vie biologique de la rivière."
            }
        ],
        "skills": {
            "technical": [
                "Mécanique des fluides incompressibles et hydraulique en charge et à surface libre",
                "Turbomachines hydrauliques (conception de roues Pelton, Francis, Kaplan, alternateurs)",
                "Génie civil et géotechnique des grands barrages (béton, enrochements, fondations)",
                "Réglementation de la sécurité des ouvrages hydrauliques et plans particuliers d'intervention (PPI)"
            ],
            "human": [
                "Sens aigu des responsabilités face à la sûreté publique des ouvrages hydrauliques",
                "Rigueur d'analyse physique et vision pluridisciplinaire (eau, mécanique, électricité)",
                "Aptitude au dialogue avec les parties prenantes de l'eau (pêcheurs, agriculteurs, parcs naturels)",
                "Capacité de coordination sur des chantiers d'envergure en milieu escarpé"
            ],
            "tools": [
                "Logiciels de modélisation hydraulique (ANSYS CFX, SIMSEN, Telemac)",
                "Appareils d'auscultation de barrages (inclinomètres, extensomètres, piézomètres)",
                "Outils de CAO 3D et SIG",
                "Systèmes de supervision et téléconduite SCADA de centrales"
            ],
            "analytical": [
                "Optimisation du turbinage par rapport aux cours horaires de l'électricité sur le marché spot",
                "Modélisation des phénomènes d'ondes de submersion en cas de crue millénale"
            ]
        },
        "specializations": [
            "Grandes usines et barrages de haute chute",
            "Stations de Transfert d'Énergie par Pompage (STEP - stockage de masse)",
            "Génie civil, diagnostic et réhabilitation des ouvrages hydrauliques anciens"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Diplôme d'ingénieur",
                    "title": "Diplôme d'Ingénieur en Hydraulique, Mécanique des Fluides ou Génie Civil",
                    "desc": "Formation de référence dispensée par les grandes écoles d'hydraulique."
                },
                {
                    "step": "Master Spécialisé",
                    "title": "Master Ouvrages d'Art et Barrages ou Énergie Hydroélectrique",
                    "desc": "Approfondissement en dynamique des structures et mécanique des roches."
                },
                {
                    "step": "Formation continue",
                    "title": "Agrément d'expert en sûreté des ouvrages hydrauliques",
                    "desc": "Habilitation d'État pour signer les rapports de visite technique approfondie (VTA)."
                }
            ],
            "schools": [
                {
                    "name": "Grenoble INP — Ense3 (leader historique de l'hydroélectricité) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "ENSEEIHT Toulouse / École des Ponts ParisTech — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Polytechnique de Thiès (EPT) / Génie Civil & Hydraulique — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) / Hydraulique — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "2iE (Institut International d'Ingénierie de l'Eau et de l'Environnement) — Burkina Faso",
                    "country": "Burkina Faso",
                    "scope": "Afrique"
                }
            ],
            "certifications": [
                "Agrément Expert Barrages délivré par le Ministère",
                "Habilitation H0/B0 et sécurité travaux hydrauliques"
            ],
            "schoolSubjects": [
                "Hydraulique générale",
                "Mécanique des fluides",
                "Génie civil",
                "Électrotechnique"
            ]
        },
        "career": {
            "sectors": [
                "Exploitants historiques d'hydroélectricité (EDF Hydro, Compagnie Nationale du Rhône CNR, SHEM)",
                "Sociétés de développement des bassins fluviaux (OMVS, OMVG en Afrique de l'Ouest)",
                "Bureaux d'ingénierie et de conseil international (Tractebel, Artelia, Egis)"
            ],
            "employerTypes": [
                "Producteurs hydroélectriques",
                "Organisations régionales de bassins fluviaux",
                "Bureaux d'études internationaux"
            ],
            "evolution": "Ingénieur d'études junior ➔ Chef de projet aménagements hydrauliques ➔ Responsable d'exploitation de groupement d'usines ➔ Directeur de pôle hydraulique",
            "pros": "Ouvrages majeurs construits pour durer plus d'un siècle, métier combinant nature majestueuse et haute technicité, rôle clé dans la stabilité du réseau électrique.",
            "cons": "Astreintes d'exploitation lors des périodes de crues, chantiers souvent isolés dans des vallées encaissées."
        },
        "gettingStarted": {
            "beginnerProject": "Calculer la puissance théorique (P = rho * g * Q * H) d'une chute d'eau de 50 mètres avec un débit de 2 m³/s.",
            "intermediateProject": "Dresser un tableau comparatif des plages d'utilisation des turbines Pelton, Francis et Kaplan selon la hauteur de chute et le débit.",
            "advancedProject": "Concevoir le prédimensionnement d'une conduite forcée en acier pour une usine hydroélectrique de 10 MW en minimisant les pertes de charge.",
            "portfolioIdeas": [
                "Note de calcul de puissance et choix de turbine",
                "Étude d'auscultation simplifiée d'un barrage en remblai"
            ]
        },
        "aiImpact": {
            "level": "Modéré à Élevé",
            "summary": "L'IA analyse les prévisions météorologiques satellitaires et la fonte des neiges pour anticiper les apports d'eau dans les réservoirs et maximiser le stockage d'électricité.",
            "automatedTasks": [
                "Prévision hydrologique des débits de fleuves par réseaux de neurones",
                "Traitement automatisé des données des capteurs d'auscultation de barrage"
            ],
            "emergingSkills": [
                "Utilisation de modèles d'IA hydro-météorologiques pour le pilotage de réservoirs"
            ],
            "humanEdge": "La responsabilité ultime de déclenchement des évacuateurs de crues lors des tempêtes pour protéger les vies humaines en aval."
        },
        "africaContext": {
            "senegalInsight": "Pour le Sénégal, l'hydroélectricité du fleuve Sénégal gérée par l'OMVS (Organisation pour la Mise en Valeur du fleuve Sénégal) est un pilier de souveraineté énergétique à travers les barrages de Manantali (200 MW), Félou (60 MW) et Gouina (140 MW), qui injectent une électricité propre et bon marché sur le réseau interconnecté de Senelec.",
            "localSectors": [
                "OMVS (Organisation pour la Mise en Valeur du fleuve Sénégal)",
                "Senelec (Direction de la Production Hydraulique)",
                "OMVG (Organisation pour la Mise en Valeur du fleuve Gambie - barrage de Sambangalou)"
            ],
            "remoteWork": "Faible (présence indispensable sur les ouvrages hydrauliques et usines de production).",
            "entrepreneurship": "Création d'un cabinet d'ingénierie conseil en diagnostic environnemental et sédimentaire des retenues de barrages en Afrique de l'Ouest."
        },
        "relatedJobSlugs": [
            "technicien-exploitation-micro-hydraulique",
            "ingenieur-smart-grids-reseaux-intelligents",
            "technicien-exploitation-supervision-reseaux",
            "chef-projet-eolien-onshore-offshore"
        ],
        "connectedFamilies": [
            "environnement-climat",
            "btp-architecture",
            "industrie-mecanique"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Métiers de l'hydroélectricité — Portail Energierecrute",
                "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php",
                "source": "Energierecrute"
            },
            {
                "type": "institution",
                "title": "Comité Français des Barrages et Réservoirs (CFBR)",
                "url": "https://www.barrages-cfbr.eu/",
                "source": "CFBR"
            }
        ],
        "sources": [
            "Energierecrute",
            "CFBR",
            "OMVS",
            "EDF Hydro"
        ],
        "interests": [
            "nature-environnement",
            "construire-fabriquer",
            "donnees-chiffres"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Les Stations de Transfert d'Énergie par Pompage (STEP) représentent à elles seules plus de 90% de la capacité mondiale de stockage d'électricité de tout le réseau électrique de la planète.",
            "pourquoi": "Quand l'électricité est abondante et peu chère, l'eau est pompée vers le bassin supérieur ; quand la demande explose, l'eau est turbinée en quelques minutes pour sauver le réseau du black-out.",
            "a_retenir": "Le maître de l'eau et des turbines qui sécurise l'énergie décarbonée à grande échelle."
        }
    },
    {
        "id": "technicien-exploitation-micro-hydraulique",
        "slug": "technicien-exploitation-micro-hydraulique",
        "title": "Technicien d'Exploitation & Maintenance en Micro-Hydraulique",
        "aliases": [
            "Technicienne petite centrale hydroélectrique",
            "Meunier électromécanicien moderne",
            "Exploitant de centrale au fil de l'eau"
        ],
        "icon": "🌊",
        "image": "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Hydroélectricité & Aménagements Hydrauliques",
        "domainId": "hydroelectricite-hydraulique",
        "subdomain": "Micro-hydraulique",
        "energyTechnology": [
            "Micro-turbines hydrauliques",
            "Dégrilleurs automatiques",
            "Génératrices asynchrones",
            "Passes à poissons"
        ],
        "energySector": "Hydroélectricité de Proximité",
        "sourceEnergierecrute": true,
        "isEmerging": false,
        "level": "Bac Pro Électromécanique, BTS Maintenance des Systèmes ou BTS Électrotechnique",
        "salary": "🇫🇷 France : 2 000 - 3 100 € net/mois (~28 000 - 44 000 € brut/an, Source : Energierecrute / Petite Hydro) • 🇸🇳 Sénégal : 250 000 - 900 000 FCFA / mois (Micro-centrales régionales, cours d'eau pérennes)",
        "simpleDefinition": "Le technicien en micro-hydraulique assure le bon fonctionnement quotidien de petites centrales électriques (puissance inférieure à 10 MW) implantées sur des rivières ou des canaux : il nettoie les grilles, entretient les turbines et répare les génératrices et armoires d'automatisme.",
        "shortDescription": "Spécialité expressément citée par les formations référencées par Energierecrute (EnR micro-hydraulique), ce professionnel polyvalent produit de l'électricité verte au cœur des cours d'eau de proximité.",
        "longDescription": "Différencié des méga-barrages, le métier en micro-hydraulique documenté par Energierecrute concerne les centrales au fil de l'eau, les anciens moulins réhabilités et les conduites d'eau potable turbinées. Le technicien surveille le débit de la rivière, entretient les dégrilleurs automatiques pour évacuer feuilles et branchages, graisse les paliers des turbines (vis d'Archimède, turbines Banki-Michell, micro-Kaplan), contrôle les armoires d'injection électrique sur le réseau basse et moyenne tension, et veille au strict maintien du débit réservé pour la survie des poissons.",
        "mainObjective": "Maintenir en rotation continue les micro-turbines hydrauliques pour produire une électricité décentralisée et régulière au fil de l'eau.",
        "companyRole": "Praticien de proximité garant de la production continue des petites centrales hydroélectriques.",
        "workEnvironment": [
            "🌊 Bords de rivières, canaux d'amenée d'anciens moulins et gorges de moyenne montagne",
            "⚙️ Petites usines hydroélectriques automatisées et salles de machines au ras de l'eau",
            "🌧️ Interventions extérieures en toutes saisons et parfois par temps de crue"
        ],
        "missions": [
            "Inspecter quotidiennement les prises d'eau et s'assurer du bon dégrillage automatique des débris flottants",
            "Assurer la maintenance mécanique des turbines hydrauliques (vis d'Archimède, micro-turbines Francis/Kaplan)",
            "Entretenir les génératrices électriques, les courroies de transmission et les paliers lubrifiés",
            "Contrôler les automates de régulation asservis au niveau d'eau amont et aux compteurs de débits réservés",
            "Entretenir et nettoyer les passes à poissons et dispositifs de dévalaison pour préserver la biodiversité aquatique"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Tournée de contrôle de la prise d'eau",
                "desc": "Évacuation des branches accumulées au dégrilleur et vérification du débit minimal restitué à la rivière."
            },
            {
                "time": "10:00",
                "title": "Graissage et contrôle des températures de paliers",
                "desc": "Prise de température au thermomètre infrarouge sur le palier avant de la turbine Banki de 250 kW."
            },
            {
                "time": "13:30",
                "title": "Dépannage d'un capteur de niveau ultrasonique",
                "desc": "Remplacement du capteur piézoélectrique de niveau amont et recalibrage de la boucle de régulation 4-20 mA."
            },
            {
                "time": "16:00",
                "title": "Relevé des compteurs d'injection réseau",
                "desc": "Contrôle de la production électrique quotidienne injectée sur le réseau Enedis/local et télétransmission des données."
            }
        ],
        "skills": {
            "technical": [
                "Mécanique générale, lignage d'arbres, roulements et réducteurs",
                "Électrotechnique moyenne et basse tension, armoires de relayage et automates programmables",
                "Hydraulique fluviale de surface libre et mécanique des vannes de décharge",
                "Réglementation environnementale des cours d'eau (loi sur l'eau, débit réservé, continuité écologique)"
            ],
            "human": [
                "Grande autonomie et sens de la débrouillardise sur des sites isolés",
                "Amour authentique de la nature et respect méticuleux des écosystèmes fluviaux",
                "Prudence rigoureuse lors du travail à proximité de l'eau en crue (risque de noyade)",
                "Polyvalence manuelle entre électricité, mécanique et maçonnerie de berge"
            ],
            "tools": [
                "Clés mécaniques, extracteurs de roulements, palans de levage",
                "Détecteurs de niveau d'eau ultrasoniques et capteurs de pression piézométriques",
                "Multimètres, contrôleurs d'isolement et pinces ampèremétriques",
                "Bottes de sécurité cuissardes, gilets de sauvetage automatiques et lignes de vie de berge"
            ],
            "analytical": [
                "Ajustement de la vitesse de rotation de la turbine pour maximiser le rendement lors des périodes de basses eaux",
                "Analyse des courbes de corrélation pluie-débit pour anticiper les crues"
            ]
        },
        "specializations": [
            "Réhabilitation de moulins historiques en micro-centrales hydroélectriques",
            "Turbinage sur réseaux d'eau potable et d'eaux usées",
            "Automatisation et télégestion de micro-centrales isolées"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Formation de base",
                    "title": "Bac Pro MELEC ou BTS Électrotechnique / Maintenance",
                    "desc": "Compétences clés en maintenance mécanique et circuits électriques industriels."
                },
                {
                    "step": "Spécialisation EnR",
                    "title": "Licence Pro MEER — Spécialité Énergies Renouvelables Hydrauliques",
                    "desc": "Formation citée par Energierecrute couvrant la petite hydraulique et la production décentralisée."
                },
                {
                    "step": "Formation terrain",
                    "title": "Certificat de spécialisation Petite Hydroélectricité (France Hydro Électricité)",
                    "desc": "Perfectionnement aux technologies spécifiques de la petite hydro."
                }
            ],
            "schools": [
                {
                    "name": "IUT et universités partenaires de la filière MEER — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Lycées professionnels de montagne et des vallées fluviales — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Dakar",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification Sauvetage aquatique et travail près de l'eau",
                "Habilitation électrique BR / BC"
            ],
            "schoolSubjects": [
                "Électromécanique",
                "Hydraulique",
                "Automatisme",
                "Droit de l'eau"
            ]
        },
        "career": {
            "sectors": [
                "Producteurs indépendants de petite hydroélectricité (PME familiales, meuniers)",
                "Filiales régionales des énergéticiens (Dalkia, EDF Petite Hydro, Boralex)",
                "Collectivités gestionnaires de canaux d'irrigation et régies municipales d'eau"
            ],
            "employerTypes": [
                "Producteurs indépendants de petite hydro",
                "Régies municipales d'électricité",
                "Sociétés d'ingénierie et d'exploitation hydroélectrique"
            ],
            "evolution": "Technicien de centrale ➔ Responsable d'exploitation de plusieurs centrales de vallée ➔ Chef de projet réhabilitation petite hydro",
            "pros": "Grande autonomie quotidienne en pleine nature, métier concret redonnant vie au patrimoine des rivières, production d'énergie continue 24h/24.",
            "cons": "Interventions d'urgence en cas d'engorgement lors de crues torrentielles, travail parfois isolé en fond de vallée."
        },
        "gettingStarted": {
            "beginnerProject": "Visiter un ancien moulin à eau ou une micro-centrale et identifier le cheminement de l'eau (prise d'eau, canal, turbine, restitution).",
            "intermediateProject": "Calculer l'énergie annuelle produite par une micro-turbine de 100 kW tournant 6 000 heures par an et estimer son chiffre d'affaires à 10 centimes le kWh.",
            "advancedProject": "Dessiner le schéma de principe électrique d'une génératrice asynchrone raccordée au réseau avec condensateurs de compensation de puissance réactive.",
            "portfolioIdeas": [
                "Schéma fonctionnel d'une micro-centrale au fil de l'eau",
                "Rapport d'audit de continuité écologique d'un seuil en rivière"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des caméras IA surveillent les grilles de prise d'eau pour déclencher le dégrilleur uniquement en cas d'amas de feuilles, économisant l'énergie d'auxiliaires.",
            "automatedTasks": [
                "Détection automatique d'embâcles et de branchages par vision artificielle",
                "Optimisation automatisée de l'ouverture des directrices de turbine selon le niveau d'eau"
            ],
            "emergingSkills": [
                "Téléconduite de micro-centrales via applications mobiles sécurisées"
            ],
            "humanEdge": "Le savoir-faire pratique pour décoincer un tronc d'arbre dans une vanne et l'oreille attentive au bruit d'un roulement qui commence à fatiguer."
        },
        "africaContext": {
            "senegalInsight": "En Afrique de l'Ouest et dans les zones frontalières du sud du Sénégal (régions de Kédougou et Casamance), des cours d'eau pérennes et des cascades offrent des opportunités remarquables de micro-centrales hydroélectriques pour alimenter des villages ruraux et des centres de santé isolés sans dépendre du fioul importé.",
            "localSectors": [
                "Projets d'électrification rurale décentralisée de l'ASER",
                "Coopératives villageoises de la région de Kédougou",
                "Centres écologiques et touristiques de Casamance"
            ],
            "remoteWork": "Strictement impossible (présence physique quotidienne le long des cours d'eau).",
            "entrepreneurship": "Création d'une entreprise d'installation et de maintenance de micro-turbines pico-hydro (1 kW à 50 kW) pour les communautés rurales riveraines des fleuves."
        },
        "relatedJobSlugs": [
            "ingenieur-hydroelectricite-barrages",
            "monteur-technicien-reseaux-electriques",
            "installateur-mainteneur-photovoltaique",
            "technicien-filiere-biomasse-bois-energie"
        ],
        "connectedFamilies": [
            "environnement-climat",
            "industrie-mecanique",
            "artisanat-metiers-dart"
        ],
        "resources": [
            {
                "type": "formation",
                "title": "Micro-hydraulique dans la formation MEER — Energierecrute",
                "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php?page=5",
                "source": "Energierecrute"
            },
            {
                "type": "syndicat",
                "title": "France Hydro Électricité — Syndicat de la petite hydroélectricité",
                "url": "https://www.france-hydro-electricite.fr/",
                "source": "France Hydro Électricité"
            }
        ],
        "sources": [
            "Energierecrute",
            "France Hydro Électricité",
            "Fédération des Moulins de France"
        ],
        "interests": [
            "nature-environnement",
            "construire-fabriquer"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "En France, plus de 2 500 petites centrales hydroélectriques de moins de 10 MW produisent l'équivalent de la consommation électrique de plusieurs millions d'habitants, fonctionnant souvent sans interruption depuis plus de cinquante ans.",
            "pourquoi": "L'hydroélectricité au fil de l'eau produit de façon continue et prévisible, comblant les creux des autres énergies renouvelables météo-dépendantes.",
            "a_retenir": "L'héritier moderne des meuniers qui transforme le murmure des rivières en lumière pour les villages."
        }
    },
    {
        "id": "ingenieur-geothermie-energetique",
        "slug": "ingenieur-geothermie-energetique",
        "title": "Ingénieur en Géothermie (Haute & Basse Énergie)",
        "aliases": [
            "Ingénieure géothermicienne",
            "Ingénieur réservoir géothermique",
            "Chef de projet géothermie profonde"
        ],
        "icon": "🌋",
        "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Géothermie & Énergie de la Terre",
        "domainId": "geothermie-chaleur-terre",
        "subdomain": "Géothermie",
        "energyTechnology": [
            "Géothermie profonde",
            "Doublet géothermique",
            "Pompes à chaleur géothermiques",
            "Échangeurs de sous-sol"
        ],
        "energySector": "Géosciences & Énergie",
        "sourceEnergierecrute": true,
        "isEmerging": true,
        "level": "Bac +5 (Ingénieur en Géosciences, Géologie ou Génie Énergétique)",
        "salary": "🇫🇷 France : 3 100 - 5 200 € net/mois (~44 000 - 74 000 € brut/an, Source : Energierecrute / APEC) • 🇸🇳 Sénégal : 600 000 - 2 000 000 FCFA / mois (Bureaux d'études hydrogéologiques, potentiel de la vallée du Rift)",
        "simpleDefinition": "L'ingénieur en géothermie capte la chaleur naturelle stockée sous la surface de la Terre en forant des puits profonds pour alimenter des réseaux de chauffage urbain (basse énergie) ou produire de l'électricité via des turbines à vapeur (haute énergie).",
        "shortDescription": "Fiche de pointe documentée par Energierecrute (filières EnR et exploration souterraine), ce géoscientifique exploite l'énergie inépuisable et continue qui dort sous nos pieds.",
        "longDescription": "Intégré dans les compétences renouvelables et d'exploration d'Energierecrute, l'ingénieur géothermicien associe géologie des sous-sols et génie thermique. En géothermie de surface, il dimensionne les sondes géothermiques verticales couplées à des pompes à chaleur pour les éco-quartiers. En géothermie profonde (Dogger, roches fracturées), il supervise le forage de doublets géothermiques (un puits producteur extrayant l'eau chaude à 70-80°C et un puits injecteur réintroduisant l'eau refroidie dans la nappe pour préserver la ressource).",
        "mainObjective": "Localiser et exploiter de manière pérenne et sécurisée les réservoirs thermiques souterrains pour fournir une chaleur décarbonée et continue 24h/24.",
        "companyRole": "Expert scientifique et pilote des projets d'extraction de la chaleur terrestre.",
        "workEnvironment": [
            "🏢 Entreprises de services énergétiques et exploitants de réseaux de chaleur (ENGIE Solutions, Dalkia, Coriance)",
            "🛢️ Plateformes de forages géothermiques profonds (jusqu'à 2 000 à 4 000 m sous terre)",
            "🔬 Laboratoires de géosciences et organismes d'études géologiques (BRGM)"
        ],
        "missions": [
            "Caractériser les aquifères profonds et estimer leur température, perméabilité et débit potentiel",
            "Dimensionner les doublets géothermiques (puits de production et puits de réinjection) pour éviter le refroidissement prématuré",
            "Superviser les opérations de forage incliné et veiller à l'étanchéité des tubages vis-à-vis des nappes d'eau potable",
            "Dimensionner les échangeurs thermiques en surface en matériaux résistants à la corrosion saline des eaux géothermales",
            "Gérer les risques sismiques induits et assurer la surveillance hydrogéologique en continu"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Analyse des diagraphies de forage",
                "desc": "Interprétation des enregistrements de porosité et de température sur un puits foré à 1 850 mètres de profondeur."
            },
            {
                "time": "11:00",
                "title": "Réunion sur plateforme de forage",
                "desc": "Point d'étape avec le chef de chantier de forage sur la trajectoire déviée du puits pour atteindre la zone de faille ciblée."
            },
            {
                "time": "14:30",
                "title": "Dimensionnement de l'échangeur thermique en titane",
                "desc": "Calcul de la surface d'échange nécessaire pour transférer 12 MW thermiques au réseau de chaleur d'une ville sans mélanger les fluides."
            },
            {
                "time": "16:45",
                "title": "Surveillance du réseau de sismographes",
                "desc": "Contrôle des capteurs microsismiques lors des essais d'injection pour vérifier l'absence d'activité anormale."
            }
        ],
        "skills": {
            "technical": [
                "Hydrogéologie profonde, thermodynamique des réservoirs et géologie structurale",
                "Techniques de forage pétrolier et géothermique (boues de forage, tubages, cimentations)",
                "Chimie des eaux thermales, corrosion et phénomènes de précipitation minérale (scaling)",
                "Thermodynamique des échangeurs de chaleur et réseaux de distribution urbains"
            ],
            "human": [
                "Rigueur scientifique d'investigation et humilité face aux incertitudes géologiques",
                "Capacité à prendre des décisions techniques lourdes lors des imprévus de forage",
                "Sens du dialogue avec les riverains et les services de l'État (DREAL, DRIEE)",
                "Esprit d'équipe avec les équipes de foreurs et les ingénieurs thermiciens"
            ],
            "tools": [
                "Logiciels de modélisation de réservoirs souterrains (TOUGH2, FEFLOW, Petrel)",
                "Outils de simulation de réseaux de chaleur (Termis)",
                "Diagraphies géophysiques et capteurs de fond de puits haute température",
                "Systèmes d'Information Géographique (SIG géologique ArcGIS/QGIS)"
            ],
            "analytical": [
                "Modélisation de la durée de vie thermique du doublet (anticipation du percement thermique sur 30 ans)",
                "Évaluation de l'impact environnemental et garantie du risque géologique de forage"
            ]
        },
        "specializations": [
            "Géothermie profonde pour réseaux de chaleur urbains (Basse et Moyenne énergie)",
            "Géothermie haute énergie et centrales électriques à cycle binaire (ORC)",
            "Géothermie de surface sur sondes et thermo-pieux pour bâtiments tertiaires"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Diplôme d'ingénieur",
                    "title": "Diplôme d'Ingénieur en Géosciences, Géologie ou Génie Énergétique",
                    "desc": "Formation d'excellence en géologie de subsurface, géophysique et thermodynamique."
                },
                {
                    "step": "Master Spécialisé",
                    "title": "Master Géothermie & Réservoirs Énergétiques",
                    "desc": "Spécialisation pointue associant forage profond, chimie des fluides et réseaux thermiques."
                },
                {
                    "step": "Reconnaissance professionnelle",
                    "title": "Formation d'expert sous-sol et géothermie agréé ADEME / BRGM",
                    "desc": "Habilitation reconnue pour les audits géologiques de grands projets."
                }
            ],
            "schools": [
                {
                    "name": "École Nationale Supérieure de Géologie (ENSG Nancy) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "IFP School (Énergie et Géosciences) / UniLaSalle — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut des Sciences de la Terre (IST / UCAD Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "École Polytechnique de Thiès (EPT) / Génie Civil et Géotechnique — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification en Modélisation de Réservoirs Géothermiques",
                "Habilitation sécurité forage et risques H2S"
            ],
            "schoolSubjects": [
                "Hydrogéologie",
                "Thermodynamique",
                "Géophysique",
                "Techniques de forage"
            ]
        },
        "career": {
            "sectors": [
                "Opérateurs de réseaux de chaleur et énergéticiens (Dalkia, ENGIE Solutions, Coriance, Idex)",
                "Organismes publics et instituts de géosciences (BRGM en France)",
                "Compagnies d'ingénierie et de forage géothermique spécialisées"
            ],
            "employerTypes": [
                "Énergéticiens de réseaux de chaleur",
                "Bureaux d'études de géosciences",
                "Sociétés de forage profond"
            ],
            "evolution": "Ingénieur géothermie junior ➔ Chef de projet géothermie ➔ Directeur des opérations sous-sol ➔ Directeur technique réseau de chaleur et géothermie",
            "pros": "Énergie renouvelable de base continue (insensible à la météo, au vent et à la nuit), technologie en pleine expansion soutenue par les plans nationaux, rémunérations attractives.",
            "cons": "Coûts initiaux de forage très élevés (plusieurs millions d'euros par puits), aléa géologique inhérent au sous-sol."
        },
        "gettingStarted": {
            "beginnerProject": "Consulter la plateforme Géothermies du BRGM pour visualiser la carte des températures du sous-sol français à 1 500 m de profondeur.",
            "intermediateProject": "Calculer la puissance thermique extraite par un puits fournissant 250 m³/h d'eau à 75°C réinjectée à 40°C.",
            "advancedProject": "Modéliser l'écartement optimal entre puits producteur et puits injecteur pour éviter le refroidissement du réservoir pendant 30 ans.",
            "portfolioIdeas": [
                "Étude de faisabilité géologique d'un doublet géothermique",
                "Carte d'évaluation du potentiel géothermique d'un territoire"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA analyse les données sismiques et de forage pour cartographier en 3D les failles fracturées où circule l'eau chaude, réduisant drastiquement le risque de forage stérile.",
            "automatedTasks": [
                "Interprétation automatique des profils sismiques 3D de sous-sol",
                "Surveillance en temps réel des micro-séismes induits par apprentissage automatique"
            ],
            "emergingSkills": [
                "Utilisation de modèles d'apprentissage profond pour la prédiction de la perméabilité des réservoirs"
            ],
            "humanEdge": "La compréhension géologique globale de l'histoire sédimentaire d'un bassin et le sang-froid pour gérer des incidents de forage à 2 000 m sous terre."
        },
        "africaContext": {
            "senegalInsight": "En Afrique de l'Est (Kenya, Éthiopie), la vallée du Grand Rift possède un potentiel géothermique colossal qui produit plus de 45% de l'électricité du Kenya (centrales d'Olkaria). Au Sénégal, les ingénieurs en géosciences étudient les nappes profondes du bassin sédimentaire sénégalo-mauritanien pour évaluer les ressources thermiques exploitables pour l'agro-industrie et le dessalement d'eau.",
            "localSectors": [
                "Institut des Sciences de la Terre (IST) de Dakar",
                "Direction des Mines et de la Géologie du Sénégal",
                "Projets régionaux de géothermie en Afrique subsaharienne (Kenya Olkaria, Éthiopie)"
            ],
            "remoteWork": "Hybride (travail de modélisation en bureau / présence requise pendant les phases de forage).",
            "entrepreneurship": "Création d'un cabinet de conseil en géothermie de surface et hydrogéologie pour équiper les nouveaux ensembles immobiliers de Dakar en climatisation géothermique basse température."
        },
        "relatedJobSlugs": [
            "ingenieur-geologue-exploration-energetique",
            "charge-affaires-energetique-cvc",
            "technicien-etudes-thermiques-batiment",
            "energy-manager-auditeur-energetique"
        ],
        "connectedFamilies": [
            "mines-geosciences",
            "environnement-climat",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Filière Géothermie — Energierecrute",
                "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php",
                "source": "Energierecrute"
            },
            {
                "type": "portail",
                "title": "Portail Géothermies — BRGM / ADEME",
                "url": "https://www.geothermies.fr/",
                "source": "BRGM"
            }
        ],
        "sources": [
            "Energierecrute",
            "BRGM",
            "AFPG (Association Française des Professionnels de la Géothermie)"
        ],
        "interests": [
            "explorer-decouvrir",
            "nature-environnement",
            "donnees-chiffres"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "En Île-de-France, le réservoir géothermique du Dogger situé entre 1 500 et 2 000 mètres sous terre chauffe déjà plus de 300 000 logements grâce à des eaux naturellement à 70°C emprisonnées depuis plus de 150 millions d'années.",
            "pourquoi": "Cette énergie ne dépend ni du vent, ni du soleil, ni des cours du gaz : elle fournit une chaleur propre et stable quelles que soient les crises géopolitiques.",
            "a_retenir": "L'explorateur des profondeurs qui puise la chaleur millénaire de la Terre pour chauffer nos villes."
        }
    },
    {
        "id": "responsable-unite-biogaz-methanisation",
        "slug": "responsable-unite-biogaz-methanisation",
        "title": "Responsable d'Unité de Méthanisation & Biogaz",
        "aliases": [
            "Chef de site méthanisation",
            "Exploitant d'unité de biométhane",
            "Responsable d'usine de biogaz"
        ],
        "icon": "♻️",
        "image": "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Biomasse, Biogaz & Valorisation Énergétique",
        "domainId": "biomasse-biogaz-dechets",
        "subdomain": "Biogaz & méthanisation",
        "energyTechnology": [
            "Digesteurs anaérobies",
            "Biométhane",
            "Épuration membranaire",
            "Injection réseau de gaz"
        ],
        "energySector": "Biogaz & Économie Circulaire",
        "sourceEnergierecrute": true,
        "isEmerging": true,
        "level": "BTS Métiers de l'eau / Génie biologique, Licence Pro MEER ou Ingénieur Agronome / Énergie",
        "salary": "🇫🇷 France : 2 400 - 4 200 € net/mois (~34 000 - 60 000 € brut/an, Source : Energierecrute / Biogaz) • 🇸🇳 Sénégal : 350 000 - 1 400 000 FCFA / mois (Unités agro-industrielles de biogaz, stations d'épuration)",
        "simpleDefinition": "Le responsable d'unité de méthanisation supervise la digestion biologique des effluents agricoles et déchets organiques dans des cuves étanches pour produire du biogaz, qu'il purifie en biométhane injecté dans le réseau gazier ou valorise en électricité et chaleur par cogénération.",
        "shortDescription": "Fiche de pointe mise en avant par Energierecrute (filière biogaz et valorisation organique), ce pilote de bioréacteurs transforme les déchets de la ferme et de l'industrie en gaz vert renouvelable.",
        "longDescription": "Intégré dans les compétences EnR et de transition environnementale d'Energierecrute, le responsable d'unité de méthanisation est le chef d'orchestre d'une mini-raffinerie biologique. Il gère l'approvisionnement régulier en matières organiques (fumiers, lisiers, résidus de cultures, déchets agroalimentaires), pilote l'équilibre biochimique délicat des cuves de digestion (température à 38°C, pH, teneur en acides gras volatils), surveille l'unité d'épuration membranaire qui sépare le CO2 du méthane pur (CH4) et organise l'épandage agronomique du digestat, un engrais naturel d'exception.",
        "mainObjective": "Assurer la production continue et sécurisée de biométhane de haute pureté tout en maintenant l'équilibre biologique des digesteurs et la conformité environnementale ICPE.",
        "companyRole": "Pilote opérationnel et garant de la rentabilité biologique, technique et sécuritaire de l'unité de méthanisation.",
        "workEnvironment": [
            "🚜 Sites de méthanisation agricole ou territoriale (cuves digesteurs, trémies d'incorporation, lagunes)",
            "🏢 Local technique d'automatisme et conteneur d'épuration membranaire du biogaz",
            "🔬 Petit laboratoire sur site pour l'analyse chimique quotidienne des substrats et du digestat"
        ],
        "missions": [
            "Planifier l'approvisionnement et la recette d'incorporation des matières organiques dans les digesteurs",
            "Contrôler quotidiennement les paramètres biologiques (pH, ratio FOS/TAC, température, teneur en méthane)",
            "Superviser les équipements industriels (agitateurs de cuve, pompes d'alimentation, épurateurs de gaz)",
            "Assurer la sécurité du site vis-à-vis des risques de gaz toxiques (H2S) et d'explosion (zonage ATEX)",
            "Organiser la logistique et le plan d'épandage du digestat fertilisant chez les agriculteurs partenaires"
        ],
        "typicalDay": [
            {
                "time": "07:45",
                "title": "Tournée visuelle et sécurité du site",
                "desc": "Contrôle des pressions sous les dômes de stockage de gaz et vérification de l'absence de fuites sur la torchère."
            },
            {
                "time": "09:00",
                "title": "Analyses biologiques en laboratoire",
                "desc": "Titrage du ratio FOS/TAC au pH-mètre pour vérifier l'absence d'acidose dans le digesteur principal."
            },
            {
                "time": "11:30",
                "title": "Réception des sous-produits agroalimentaires",
                "desc": "Contrôle visuel et pesée sur pont-bascule d'un camion de pulpes de betteraves avant injection dans la trémie."
            },
            {
                "time": "14:30",
                "title": "Supervision de la station d'injection de gaz",
                "desc": "Contrôle de la qualité du biométhane (taux de CH4 > 97%, H2S < 5 ppm) avec le technicien de GRDF."
            },
            {
                "time": "16:45",
                "title": "Maintenance préventive d'un agitateur",
                "desc": "Coordination du remplacement de garniture mécanique sur l'agitateur à pales de la cuve de post-digestion."
            }
        ],
        "skills": {
            "technical": [
                "Biotechnologie de la digestion anaérobie et biochimie des micro-organismes méthanogènes",
                "Génie des procédés gazeux (désulfuration, séchage, épuration membranaire ou PSA)",
                "Électromécanique, pompes dilacératrices, agitateurs submersibles et tuyauteries inox",
                "Réglementation des installations classées ICPE et normes de sécurité atmosphères explosives (ATEX)"
            ],
            "human": [
                "Grande vigilance et sang-froid face aux risques d'atmosphères explosives (CH4) et toxiques (H2S)",
                "Polyvalence et capacité à passer d'une analyse biochimique à une réparation mécanique de pompe",
                "Sens du contact avec le monde paysan et les riverains pour une intégration sereine",
                "Autonomie et réactivité en cas d'astreinte technique de nuit ou de week-end"
            ],
            "tools": [
                "Analyseurs de biogaz portables et fixes (mesure en continu de CH4, CO2, O2, H2S)",
                "Automates de supervision industrielle (Schneider, Siemens) avec télégestion sur smartphone",
                "Détecteurs multigaz personnels (protection H2S / CH4)",
                "Équipements de laboratoire (titrateur FOS/TAC, centrifugeuse, pH-mètre étalonné)"
            ],
            "analytical": [
                "Calcul du pouvoir méthanogène (BMP) des différents types de déchets pour optimiser la ration",
                "Bilan économique des recettes d'injection de biométhane et des coûts d'approvisionnement"
            ]
        },
        "specializations": [
            "Unités de méthanisation agricole territoriale en injection directe de biométhane",
            "Cogénération biogaz électricité-chaleur pour industries agroalimentaires",
            "Traitement et méthanisation des boues de stations d'épuration urbaines"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Diplôme Bac +2",
                    "title": "BTS Métiers de l'Eau, BTS Génie Biologique ou BTS Agricole",
                    "desc": "Bases solides en biochimie, hydraulique et mécanique générale."
                },
                {
                    "step": "Licence Pro spécialisée",
                    "title": "Licence Pro MEER / Parcours Biométhane et Valorisation des Déchets",
                    "desc": "Formation citée par Energierecrute pour maîtriser la gestion complète d'une unité de biogaz."
                },
                {
                    "step": "Ingénieur",
                    "title": "Diplôme d'Ingénieur Agronome ou Ingénieur Génie des Procédés / Énergie",
                    "desc": "Accès aux fonctions de responsable d'un parc de plusieurs unités de biométhane régionales."
                }
            ],
            "schools": [
                {
                    "name": "IUT et lycées agricoles proposant des filières méthanisation — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut Agro / UniLaSalle — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut de Technologie Alimentaire (ITA) / Département Biogaz — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) / Génie Chimique — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Habilitation Risque Chimique et Atmosphères Explosives (ATEX niveau 2)",
                "Certification Responsable d'Exploitation Méthanisation"
            ],
            "schoolSubjects": [
                "Microbiologie",
                "Génie des procédés",
                "Chimie organique",
                "Sécurité industrielle"
            ]
        },
        "career": {
            "sectors": [
                "Exploitations agricoles et sociétés de méthanisation territoriale",
                "Grands énergéticiens et opérateurs de gaz vert (ENGIE Bio-CH4, TotalEnergies Biogaz, Dalkia)",
                "Sociétés de traitement des déchets et de l'eau (Veolia, Saur, Suez)"
            ],
            "employerTypes": [
                "Sociétés d'exploitation de méthanisation",
                "Coopératives agricoles",
                "Opérateurs de réseaux de gaz"
            ],
            "evolution": "Opérateur de méthanisation ➔ Responsable de site biogaz ➔ Responsable d'un cluster d'unités de biométhane ➔ Directeur pôle gaz renouvelables",
            "pros": "Métier à impact écologique concret (économie circulaire parfaite), autonomie complète sur le site, secteur en pleine explosion porté par la souveraineté gazière.",
            "cons": "Astreintes techniques de surveillance (alertes SMS 24h/24), odeurs inhérentes à certains intrants organiques lors du déchargement."
        },
        "gettingStarted": {
            "beginnerProject": "Construire un micro-digesteur expérimental de 5 litres dans une bonbonne d'eau avec ballon de baudruche pour observer la production de gaz.",
            "intermediateProject": "Calculer le volume de biométhane produit par an par un troupeau de 100 vaches laitières produisant chacune 20 tonnes de lisier par an.",
            "advancedProject": "Élaborer une ration d'intrants équilibrée pour un digesteur de 2 000 m³ en combinant ensilage de seigle, fumier bovin et marc de pomme.",
            "portfolioIdeas": [
                "Plan de sécurité ATEX d'une unité de biogaz",
                "Bilan matière et énergétique d'une unité de méthanisation en injection"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "Des algorithmes de machine learning analysent la composition spectrale des déchets entrants pour ajuster minute par minute la ration optimale afin de prévenir tout emballement biologique.",
            "automatedTasks": [
                "Ajustement prédictif des temps d'agitation et de chauffage des cuves",
                "Diagnostic précoce de dérive biologique par analyse des micro-variations de gaz"
            ],
            "emergingSkills": [
                "Utilisation de jumeaux numériques de bioréacteurs anaérobies"
            ],
            "humanEdge": "Le flair du praticien pour juger de la consistance d'un lisier à l'œil et au nez, et les réflexes de sécurité lors d'une intervention sur une conduite de gaz."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le Programme National de Biogaz Domestique (PNB-SN) et les abattoirs de Dakar développent des biodigesteurs pour valoriser les bouses de vaches et déchets d'abattoir en biogaz de cuisson pour les ménages et en biofertilisant pour enrichir les sols maraîchers épuisés sans engrais chimiques importés.",
            "localSectors": [
                "Programme National de Biogaz du Sénégal (PNB)",
                "Grandes fermes agro-pastorales de la zone des Niayes",
                "Abattoirs industriels de Dakar (SOGAS)"
            ],
            "remoteWork": "Strictement impossible (présence physique quotidienne impérative sur les installations).",
            "entrepreneurship": "Création d'une entreprise de conception et d'exploitation d'unités de biogaz semi-industrielles pour les fermes avicoles et laitières sénégalaises."
        },
        "relatedJobSlugs": [
            "technicien-filiere-biomasse-bois-energie",
            "energy-manager-auditeur-energetique",
            "responsable-hse-sites-energetiques",
            "chef-projet-energie-solaire-photovoltaique"
        ],
        "connectedFamilies": [
            "agriculture-agritech",
            "environnement-climat",
            "chimie-biologie"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Filière Biogaz & Méthanisation — Energierecrute",
                "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php",
                "source": "Energierecrute"
            },
            {
                "type": "association",
                "title": "Club Biogaz ATEE",
                "url": "https://biogaz.atee.fr/",
                "source": "ATEE"
            }
        ],
        "sources": [
            "Energierecrute",
            "ATEE Club Biogaz",
            "GRDF",
            "ADEME"
        ],
        "interests": [
            "nature-environnement",
            "construire-fabriquer",
            "donnees-chiffres"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "En se décomposant à l'air libre, le fumier et les lisiers émettent spontanément du méthane, un gaz à effet de serre 28 fois plus réchauffant que le CO2. En les méthanisant en cuve étanche, l'unité de biogaz capte ce méthane pour en faire de l'énergie et évite son rejet direct dans l'atmosphère.",
            "pourquoi": "La méthanisation est l'une des rares énergies au bilan carbone doublement vertueux : elle produit du gaz vert tout en évitant des émissions agricoles diffuses.",
            "a_retenir": "L'alchimiste de l'économie circulaire qui métamorphose les déchets en gaz vert d'avenir."
        }
    },
    {
        "id": "technicien-filiere-biomasse-bois-energie",
        "slug": "technicien-filiere-biomasse-bois-energie",
        "title": "Technicien en Biomasse & Chaufferies Bois-Énergie",
        "aliases": [
            "Technicien chaufferies industrielles biomasse",
            "Conducteur de chaufferie bois",
            "Exploitant réseau de chaleur biomasse"
        ],
        "icon": "🪵",
        "image": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Biomasse, Biogaz & Valorisation Énergétique",
        "domainId": "biomasse-biogaz-dechets",
        "subdomain": "Biomasse solide & Chaufferies bois",
        "energyTechnology": [
            "Chaudières industrielles biomasse",
            "Granulés & Plaquettes forestières",
            "Réseaux de chaleur urbains"
        ],
        "energySector": "Chaleur Renouvelable & Sylviculture Énergétique",
        "sourceEnergierecrute": true,
        "isEmerging": false,
        "level": "Bac Pro à Bac +2 (BTS FED option C - Génie thermique, BTS MEER)",
        "salary": "🇫🇷 France : 2 000 - 3 100 € net/mois (~28 000 - 44 000 € brut/an, Source : Energierecrute) • 🇸🇳 Sénégal : 280 000 - 750 000 FCFA / mois (Agro-industries huilières, canne à sucre, chaufferies)",
        "simpleDefinition": "Le technicien biomasse pilote l'alimentation, la combustion et la maintenance de grandes installations de chauffage collectif et industriel fonctionnant aux granulés, plaquettes forestières et résidus agricoles.",
        "shortDescription": "Spécialiste de la chaleur renouvelable répertorié par Energierecrute, il assure l'approvisionnement, le réglage de combustion et la maintenance de chaufferies bois et de réseaux de chaleur urbains.",
        "longDescription": "Comme décrit dans les référentiels de formations et d'offres d'Energierecrute (notamment les cursus BTS FED et MEER), le technicien en biomasse et chaufferies bois-énergie supervise le fonctionnement complet d'installations thermiques alimentées par du combustible végétal (plaquettes forestières, broyats, sciures, granulés ou bagasse agro-industrielle). Il contrôle la qualité hygrométrique du combustible à la livraison, calibre les vis sans fin et convoyeurs d'alimentation, surveille les paramètres de combustion (taux d'oxygène, températures de foyer) et gère le traitement des fumées (dépoussiéreurs, filtres à manches, électrofiltres) ainsi que l'évacuation des cendres pour respecter les seuils stricts d'émissions atmosphériques.",
        "mainObjective": "Garantir une production continue et décarbonée de vapeur et d'eau chaude tout en optimisant le rendement thermique et en respectant les normes de rejets atmosphériques.",
        "companyRole": "Garant opérationnel de la production thermique et de la pérennité des équipements de combustion biomasse.",
        "workEnvironment": [
            "🏭 Chaufferies collectives urbaines et centrales de cogénération biomasse",
            "🚜 Silos de stockage de combustible bois et plateformes d'approvisionnement forestier",
            "🎛️ Salles de commande automatisées et locaux techniques de distribution de chaleur"
        ],
        "missions": [
            "Superviser les réceptions de combustible bois (mesure d'humidité, granulométrie, pesage) et la gestion des stocks en silo",
            "Conduire les chaudières biomasse automatiques et ajuster les ratios air/combustible pour optimiser le rendement",
            "Effectuer la maintenance préventive et curative des convoyeurs, vis sans fin, grilles de combustion et décendrages",
            "Contrôler le système d'épuration des fumées (électrofiltres, filtres multicyclones) et mesurer les émissions de poussières",
            "Gérer les approvisionnements de secours et basculer sur les générateurs d'appoint lors des pointes de froid"
        ],
        "typicalDay": [
            {
                "time": "07:30",
                "title": "Tournée d'inspection des foyers",
                "desc": "Contrôle visuel de la flamme de la chaudière bois de 10 MW, vérification de l'épaisseur du lit de combustion et relevé des pressions différentielles."
            },
            {
                "time": "10:00",
                "title": "Réception d'un camion de plaquettes forestières",
                "desc": "Prélèvement d'échantillons et passage à l'humidimètre pour valider le taux d'humidité contractuel (<35%) avant dépotage."
            },
            {
                "time": "13:30",
                "title": "Maintenance curative",
                "desc": "Remplacement d'un roulement à billes grippé sur la vis d'extraction de cendres sous le filtre multicyclone."
            },
            {
                "time": "16:00",
                "title": "Analyse de la télésurveillance",
                "desc": "Examen des températures de départ et de retour du réseau de chaleur urbain pour caler la loi d'eau du lendemain."
            }
        ],
        "skills": {
            "technical": [
                "Combustion thermique des solides, cinétique de flamme et lois d'eau",
                "Mécanique industrielle (convoyeurs à bande, vis d'Archimède, trémies vibrantes)",
                "Dépoussiérage industriel et filtration des fumées (normes MCPD)",
                "Automates programmables industriels (Schneider, Siemens) et supervision SCADA"
            ],
            "human": [
                "Polyvalence technique (mécanique, électrotechnique, thermique)",
                "Réactivité face aux alertes de bourrage ou de surchauffe",
                "Sens aigu des règles de sécurité (poussières, atmosphères ATEX, risques d'incendie)"
            ],
            "tools": [
                "Humidimètres de précision pour biomasse",
                "Analyseurs de gaz de combustion portables (Testo, Ecom)",
                "Logiciels de supervision de réseaux de chaleur (Schneider Wonderware, WinCC)",
                "Appareils d'alignement laser pour pompes et motoréducteurs"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Bac Pro (Bac)",
                    "title": "Bac Pro MELEC ou Métiers du Froid et des Énergies",
                    "desc": "Acquisition des bases en électricité industrielle, tuyauterie et automatismes."
                },
                {
                    "step": "BTS (Bac +2)",
                    "title": "BTS Fluides Énergies Domotique (BTS FED option C) ou BTS MEER",
                    "desc": "Formation de référence pour la conduite des chaufferies et la thermique industrielle."
                },
                {
                    "step": "Licence Pro (Bac +3)",
                    "title": "Licence Pro Métiers de l'Énergétique et de l'Environnement",
                    "desc": "Perfectionnement en gestion des réseaux de chaleur urbains et optimisation environnementale."
                }
            ],
            "schools": [
                {
                    "name": "Lycées Techniques préparant le BTS FED et BTS MEER — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "IUT Génie Thermique et Énergie (GTE) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) / Génie Énergétique — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Habilitation électrique BR/BC",
                "Certificat de conduite de générateurs de vapeur",
                "Formation risque poussières ATEX"
            ],
            "schoolSubjects": [
                "Thermodynamique",
                "Mécanique industrielle",
                "Automatisme",
                "Physico-chimie de la combustion"
            ]
        },
        "career": {
            "sectors": [
                "Exploitants de réseaux de chaleur urbains (Dalkia, ENGIE Solutions, Idex, Coriance)",
                "Agro-industries papetières, sucrières et huilières",
                "Collectivités territoriales et régies d'énergie"
            ],
            "employerTypes": [
                "Entreprises de services énergétiques",
                "Groupes agro-industriels",
                "Syndicats mixtes d'énergie"
            ],
            "evolution": "Technicien de maintenance ➔ Conducteur principal de chaufferie ➔ Chef d'exploitation réseau de chaleur ➔ Responsable d'agence thermique",
            "pros": "Métier concret au grand air et en salle des machines, filière en pleine expansion subventionnée par les fonds climat.",
            "cons": "Environnement poussiéreux, travail en astreinte hivernale le week-end."
        },
        "gettingStarted": {
            "beginnerProject": "Visiter une chaufferie bois de quartier et relever les étapes de filtration des fumées.",
            "intermediateProject": "Calculer la masse de bois nécessaire pour remplacer 10 000 litres de fioul de chauffage.",
            "advancedProject": "Modéliser le bilan carbone complet de l'approvisionnement en plaquettes forestières dans un rayon de 50 km.",
            "portfolioIdeas": [
                "Rapport d'audit de décendrage d'une chaudière biomasse",
                "Schéma de principe d'un réseau de chaleur avec sous-stations"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des algorithmes prédictifs croisent la météo à J+1 avec l'inertie des bâtiments pour doser l'injection de combustible en continu.",
            "automatedTasks": [
                "Ajustement automatisé des lois d'eau",
                "Détection automatique de baisse anormale de tirage"
            ],
            "emergingSkills": [
                "Utilisation de jumeaux numériques de réseaux de distribution de chaleur"
            ],
            "humanEdge": "La dextérité manuelle pour réparer les vis d'alimentation et le jugement humain sur la qualité du bois reçu."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la valorisation de la biomasse est vitale pour l'agro-industrie : la Compagnie Sucrière Sénégalaise (CSS) à Richard-Toll valorise la bagasse de canne à sucre pour alimenter sa centrale de cogénération, tandis que les coques d'arachide alimentent les chaudières des huileries de la Sonacos.",
            "localSectors": [
                "Compagnie Sucrière Sénégalaise (CSS Richard-Toll)",
                "Huileries Sonacos (Kaolack, Diourbel)",
                "Projets de valorisation des résidus de typha sur le fleuve Sénégal"
            ],
            "remoteWork": "Non compatible (présence quotidienne obligatoire sur le site thermique).",
            "entrepreneurship": "Création d'une entreprise de granulation de biomasse locale (typha, balles de riz) pour alimenter des chaudières écologiques."
        },
        "relatedJobSlugs": [
            "responsable-unite-biogaz-methanisation",
            "technicien-etudes-energetiques-industrielles",
            "energy-manager-auditeur-energetique"
        ],
        "connectedFamilies": [
            "agriculture-agritech",
            "industrie-mecanique"
        ],
        "resources": [
            {
                "type": "guide",
                "title": "Filière biomasse et bois-énergie — Energierecrute",
                "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php",
                "source": "Energierecrute"
            },
            {
                "type": "organisme",
                "title": "Comité Interprofessionnel du Bois Énergie (CIBE)",
                "url": "https://cibe.fr/",
                "source": "CIBE"
            }
        ],
        "sources": [
            "Energierecrute",
            "ADEME",
            "CIBE"
        ],
        "interests": [
            "construire-fabriquer",
            "nature-environnement",
            "technique-outils"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Le bois-énergie représente à lui seul plus de 35% de l'ensemble de la production d'énergie renouvelable en France, surpassant très largement l'éolien et le solaire dans le mix de chaleur.",
            "pourquoi": "C'est une énergie de base stockable qui ne dépend ni de la présence de vent ni de l'ensoleillement pour chauffer les foyers.",
            "a_retenir": "L'énergie renouvelable la plus utilisée en France pour le chauffage collectif et industriel."
        }
    },
    {
        "id": "monteur-technicien-reseaux-electriques",
        "slug": "monteur-technicien-reseaux-electriques",
        "title": "Monteur-Technicien de Réseaux Électriques Aériens & Souterrains",
        "aliases": [
            "Monteur de lignes haute tension",
            "Lignard Enedis/RTE",
            "Électricien réseaux de distribution"
        ],
        "icon": "🗼",
        "image": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Réseaux Électriques, Transport & Distribution",
        "domainId": "reseaux-transport-distribution",
        "subdomain": "Construction & Travaux de réseaux HT/BT",
        "energyTechnology": [
            "Lignes aériennes HTA/HTB",
            "Câbles souterrains haute tension",
            "Postes de transformation HTA/BT"
        ],
        "energySector": "Infrastructure de Transport & Distribution Électrique",
        "sourceEnergierecrute": true,
        "isEmerging": false,
        "level": "CAP / Bac Pro (MELEC) à Bac +2 (BTS Électrotechnique)",
        "salary": "🇫🇷 France : 1 900 - 3 200 € net/mois (~27 000 - 45 000 € brut/an + primes, Source : Energierecrute) • 🇸🇳 Sénégal : 250 000 - 800 000 FCFA / mois (Senelec, entreprises de transport de lignes HT)",
        "simpleDefinition": "Le monteur de réseaux électriques construit, entretient et modernise les lignes aériennes, les câbles souterrains et les postes de transformation qui acheminent l'électricité des centrales jusqu'aux usagers.",
        "shortDescription": "Métier de terrain essentiel répertorié par Energierecrute, le technicien de réseaux bâtit l'épine dorsale électrique indispensable au raccordement des énergies renouvelables et des bornes de recharge.",
        "longDescription": "Comme mis en lumière par Energierecrute dans ses rubriques dédiées aux réseaux électriques (Enedis, RTE, Bouygues Energies & Services, SPIE, Eiffage Énergie Systèmes), le monteur-technicien de réseaux intervient sur les lignes aériennes à haute tension (HTA, HTB) et sur les canalisations souterraines en milieu urbain ou rural. Il lève des pylônes, déroule et tend des câbles conducteurs de forte section, réalise des boîtes de jonction complexes et raccorde les postes de transformation moyenne/basse tension. Travaillant en hauteur ou en tranchée et souvent sous astreinte météo (dépannage après tempête), il applique des procédures de consignation électrique d'une rigueur absolue.",
        "mainObjective": "Assurer la continuité, la sécurité et l'extension du transit d'énergie électrique sur l'ensemble du territoire national.",
        "companyRole": "Artisan de terrain garantissant la solidité et la fiabilité physique du réseau de transport et de distribution.",
        "workEnvironment": [
            "🌲 Chantiers extérieurs en pleine nature (pylônes, grandes portées de franchissement)",
            "🏙️ Voies publiques urbaines pour la pose et le raccordement de câbles souterrains",
            "⚡ Postes sources et sous-stations électriques haute tension"
        ],
        "missions": [
            "Monter, assembler et hisser les supports de lignes aériennes (pylônes métalliques, poteaux béton ou bois)",
            "Tirer, dérouler, régler la tension mécanique et ancrer les faisceaux de câbles conducteurs et de câbles de garde",
            "Effectuer la pose et le raccordement d'accessoires sur câbles souterrains (extrémités, boîtes de jonction thermo-rétractables)",
            "Implanter et équiper les postes de transformation HTA/BT (cellules disjoncteurs, transformateurs, tableaux BT)",
            "Intervenir d'urgence en astreinte pour localiser les pannes de câble et rétablir le courant après des intempéries"
        ],
        "typicalDay": [
            {
                "time": "07:00",
                "title": "Brefing sécurité et vérification du matériel",
                "desc": "Briefing sécurité chantier avec le chef d'équipe, contrôle des harnais anti-chute, perches d'électrocution et vérificateurs d'absence de tension (VAT)."
            },
            {
                "time": "08:30",
                "title": "Opération de consignation",
                "desc": "Réception de l'attestation de consignation délivrée par le chargé d'exploitation de réseau et pose des mises à la terre et en court-circuit (MALT/CC)."
            },
            {
                "time": "11:00",
                "title": "Travail en hauteur sur pylône",
                "desc": "Ascension d'un pylône de 35 mètres pour le remplacement d'une chaîne d'isolateurs en verre détériorée par un coup de foudre."
            },
            {
                "time": "14:30",
                "title": "Jonction de câble souterrain",
                "desc": "Réalisation d'une boîte de jonction triphasée 20 000 volts en fouille avec kit de résine et manchons à serrage mécanique."
            },
            {
                "time": "16:30",
                "title": "Déconsignation et mise sous tension",
                "desc": "Retrait des protections de chantier, compte-rendu d'achèvement et participation aux essais de refermeture du disjoncteur."
            }
        ],
        "skills": {
            "technical": [
                "Électrotechnique des réseaux moyenne et haute tension (HTA / HTB / BT)",
                "Techniques de levage, d'élingage et de travail en hauteur (CQP Monteur de réseaux)",
                "Confection de jonctions et terminaisons de câbles synthétiques HT",
                "Habilitations électriques strictes (H1V, H2V, B1V, B2V, HC, TST)"
            ],
            "human": [
                "Excellente condition physique, agilité et absence totale de vertige",
                "Rigueur procédurale sans faille pour la sécurité vitale des équipes",
                "Esprit d'équipe et solidarité face aux aléas climatiques"
            ],
            "tools": [
                "Treuils de tirage cabestans et freins hydrauliques pour déroulage de lignes",
                "Vérificateurs d'absence de tension (VAT) et perches télescopiques isolantes",
                "Outillages de sertissage électrohydrauliques pour manchons de puissance",
                "Détecteurs de défauts de câbles souterrains et caméras acoustiques"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "CAP / Bac Pro (Bac)",
                    "title": "Bac Pro MELEC (Métiers de l'Électricité)",
                    "desc": "Bases pratiques en raccordements électriques et schémas industriels."
                },
                {
                    "step": "Mention Complémentaire (Bac +1)",
                    "title": "MC Technicien en Réseaux Électriques",
                    "desc": "Année de spécialisation intensive en alternance très recherchée par Enedis et RTE."
                },
                {
                    "step": "BTS (Bac +2)",
                    "title": "BTS Électrotechnique",
                    "desc": "Accès rapide aux fonctions de chef d'équipe, conducteur de travaux ou chargé de consignation."
                }
            ],
            "schools": [
                {
                    "name": "Campus de formation Enedis et RTE — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "CFA de l'Énergie et des Travaux Publics — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centre de Perfectionnement Professionnel de la Senelec (CFPP Rufisque) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "CQP Monteur de Réseaux Électriques",
                "CACES nacelle PEMP 1B/3B",
                "Habilitations travaux sous tension (TST)"
            ],
            "schoolSubjects": [
                "Électrotechnique",
                "Mécanique des structures",
                "Sécurité électrique",
                "Topographie de ligne"
            ]
        },
        "career": {
            "sectors": [
                "Gestionnaires de réseaux de transport et distribution (RTE, Enedis)",
                "Entreprises du BTP électrique (SPIE, Bouygues Energies & Services, Eiffage, Omexom)",
                "Compagnies électriques nationales (Senelec, CIE, CEET)"
            ],
            "employerTypes": [
                "Opérateurs de réseaux électriques",
                "Entreprises générales d'installations haute tension"
            ],
            "evolution": "Monteur débutant ➔ Chef d'équipe lignes HT ➔ Conducteur de travaux réseaux ➔ Chargé d'affaires distribution",
            "pros": "Fraternité d'équipe exemplaire, sentiment d'utilité publique majeur lors des dépannages post-tempête, rémunération attractive avec primes.",
            "cons": "Exposition aux intempéries (froid, pluie, chaleur), travail physique exigeant en hauteur."
        },
        "gettingStarted": {
            "beginnerProject": "Observer le trajet des câbles entre un transformateur de quartier et les habitations.",
            "intermediateProject": "Réaliser une maquette de boîte de jonction électrique basse tension avec serre-fils.",
            "advancedProject": "Calculer la flèche mécanique d'un câble conducteur suspendu entre deux poteaux distants de 60 mètres.",
            "portfolioIdeas": [
                "Photos de réalisations de coffrets de raccordement",
                "Rapport de stage de tirage de câble sous gaine"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des drones dotés de caméras thermiques et d'IA survolent les lignes électriques pour repérer les anomalies avant l'envoi d'un monteur.",
            "automatedTasks": [
                "Détection automatique de végétation menaçant une ligne",
                "Cartographie LiDAR des corridors de lignes"
            ],
            "emergingSkills": [
                "Pilotage de drones d'inspection et interprétation des relevés infrarouges"
            ],
            "humanEdge": "La force, l'agilité et le savoir-faire physique irremplaçable pour monter sur un pylône et sertir un câble sous tension."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les monteurs de lignes sont les artisans du programme gouvernemental d'accès universel à l'électricité (PUDC, ISER), construisant des lignes HTA à travers le Sine Saloum, la Casamance et le Fouta, et connectant les villages aux postes sources de la Senelec.",
            "localSectors": [
                "Senelec (Société d'Électricité du Sénégal)",
                "Entreprises partenaires de réseaux (Eiffage Sénégal, SPIE Ouest Afrique)",
                "Agence Sénégalaise d'Électrification Rurale (ASER)"
            ],
            "remoteWork": "Non compatible (100% sur chantiers et en extérieur).",
            "entrepreneurship": "Création d'une entreprise de pose de réseaux et de raccordements basse tension pour les concessions d'électrification rurale."
        },
        "relatedJobSlugs": [
            "technicien-exploitation-supervision-reseaux",
            "ingenieur-smart-grids-reseaux-intelligents",
            "installateur-mainteneur-photovoltaique"
        ],
        "connectedFamilies": [
            "btp-architecture",
            "industrie-mecanique"
        ],
        "resources": [
            {
                "type": "guide",
                "title": "Métiers des réseaux électriques — Energierecrute",
                "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php",
                "source": "Energierecrute"
            },
            {
                "type": "portail",
                "title": "Travailler chez RTE — Réseau de Transport d'Électricité",
                "url": "https://www.rte-france.com/carrieres",
                "source": "RTE"
            }
        ],
        "sources": [
            "Energierecrute",
            "Enedis",
            "RTE",
            "Senelec"
        ],
        "interests": [
            "construire-fabriquer",
            "technique-outils",
            "sport-plein-air"
        ],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Pour raccorder les futurs parcs éoliens maritimes et les centrales solaires, l'Europe et l'Afrique doivent construire ou renouveler plus de 10 millions de kilomètres de lignes électriques d'ici 2040.",
            "pourquoi": "Sans lignes électriques neuves et robustes, l'électricité verte produite par le soleil et le vent ne peut pas parvenir jusqu'aux villes.",
            "a_retenir": "Le bâtisseur de l'autoroute invisible de l'électricité."
        }
    },
    {
        "id": "technicien-exploitation-supervision-reseaux",
        "slug": "technicien-exploitation-supervision-reseaux",
        "title": "Technicien d'Exploitation & Conduite de Réseaux Électriques / Dispatching",
        "aliases": [
            "Opérateur de dispatching électrique",
            "Technicien de conduite réseau HTA/BT",
            "Superviseur téléconduite Enedis/RTE"
        ],
        "icon": "🖥️",
        "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Réseaux Électriques, Transport & Distribution",
        "domainId": "reseaux-transport-distribution",
        "subdomain": "Conduite, Télégestion & Dispatching de réseaux",
        "energyTechnology": [
            "Systèmes SCADA réseaux",
            "Télécommande d'interrupteurs aériens (IAT)",
            "Gestion de la fréquence 50 Hz"
        ],
        "energySector": "Pilotage & Stabilité du Système Électrique",
        "sourceEnergierecrute": true,
        "isEmerging": false,
        "level": "Bac +2 (BTS Électrotechnique, BUT GEII) à Bac +3 (Licence Pro Réseaux)",
        "salary": "🇫🇷 France : 2 400 - 3 800 € net/mois (~34 000 - 55 000 € brut/an avec primes de 3x8, Source : Energierecrute) • 🇸🇳 Sénégal : 400 000 - 1 100 000 FCFA / mois (Centre national de conduite Senelec Dispatching Hann)",
        "simpleDefinition": "Le technicien de conduite supervise en temps réel le flux d'électricité sur les réseaux, équilibre la charge, commande à distance les disjoncteurs et coordonne les interventions de rétablissement en cas d'avarie.",
        "shortDescription": "Véritable contrôleur aérien de l'électricité issu des cursus identifiés par Energierecrute, il veille 24h/24 et 7j/7 sur la stabilité de la tension, de la fréquence et l'absence de coupure.",
        "longDescription": "Comme explicité dans les offres de téléconduite d'Energierecrute chez les gestionnaires de réseaux de transport et de distribution (RTE, Enedis, régies locales d'électricité), le technicien d'exploitation pilote à distance les commutations sur le réseau électrique depuis un centre de conduite ultra-sécurisé (dispatching). Devant un mur d'écrans affichant en temps réel la topologie du réseau, les transits de mégawatts et l'état des organes de coupure, il équilibre la balance offre/demande, adapte les schémas d'acheminement lors des pointes de consommation, délivre les autorisations de manœuvre aux équipes de terrain et reconfigure instantanément le réseau en boucle pour réalimenter les abonnés en cas de déclenchement d'un transformateur.",
        "mainObjective": "Maintenir en permanence l'équilibre physique du réseau électrique, prévenir les blackouts et réalimenter les clients dans les plus brefs délais lors des incidents.",
        "companyRole": "Cerveau opérationnel assurant le bon fonctionnement temps réel du système électrique.",
        "workEnvironment": [
            "🖥️ Salles de contrôle de dispatching hautement sécurisées (murs d'écrans synoptiques, accès biométrique)",
            "🕒 Travail en horaires décalés et brigades tournantes en 3x8 (continuité de service 365j/an)",
            "📞 Liaisons radio et téléphoniques directes avec les chefs de quart de centrales et les équipes mobiles"
        ],
        "missions": [
            "Surveiller en temps réel les flux d'énergie, les tensions de jeu de barres et les charges des lignes électriques",
            "Télécommander les disjoncteurs et interrupteurs télécommandés pour modifier la topologie du réseau",
            "Établir les régimes d'exploitation et délivrer les autorisations de manœuvre et de mise sous tension aux chargés d'essais",
            "Analyser les défauts électriques (courts-circuits phase-terre, surcharges) et isoler rapidement la section défaillante",
            "Coordonner la réinjection des parcs éoliens et solaires pour éviter la congestion locale des lignes"
        ],
        "typicalDay": [
            {
                "time": "05:45",
                "title": "Prise de quart au dispatching",
                "desc": "Passation de consignes avec l'équipe de nuit : inventaire des chantiers en cours, prévisions météo de vent/ensoleillement et état des réserves de puissance."
            },
            {
                "time": "07:30",
                "title": "Gestion de la pointe de consommation matinale",
                "desc": "Surveillance de la montée en charge du réseau, ajustement des plots de régleurs en charge des transformateurs pour stabiliser la tension."
            },
            {
                "time": "10:15",
                "title": "Gestion d'un incident de câble 20 kV",
                "desc": "Déclenchement d'une protection de départ HTA : télécommande de réenclencheurs, localisation du tronçon défectueux et réalimentation de 4 200 clients par le réseau de secours en moins de 3 minutes."
            },
            {
                "time": "13:00",
                "title": "Programmation des retraits de ligne",
                "desc": "Validation des schémas d'alimentation alternatifs pour permettre la maintenance programmée d'un jeu de barres d'un poste source l'après-midi."
            }
        ],
        "skills": {
            "technical": [
                "Électrotechnique de puissance et dynamique des réseaux maillés",
                "Plans de protection électrique (relais différentiels, protection de distance, homopolaire)",
                "Systèmes de téléconduite SCADA / EMS (Energy Management System)",
                "Procédures d'urgence de reconstitution du réseau (blackout, renvoi de tension)"
            ],
            "human": [
                "Sang-froid exemplaire et capacité à gérer un stress aigu sous pression",
                "Prise de décision rapide et méthodique en situation dégradée",
                "Communication radio/téléphonique ultra-précise et sans ambiguïté"
            ],
            "tools": [
                "Logiciels SCADA / DMS (Distribution Management System)",
                "Outils de simulation de réseau en temps réel (PSS/E, Eurostag)",
                "Systèmes d'enregistrement chronologique des événements (SOE)",
                "Consoles de communication sécurisées d'exploitation"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "BTS / BUT (Bac +2/+3)",
                    "title": "BTS Électrotechnique ou BUT GEII",
                    "desc": "Maîtrise des régimes de neutre, calculs de court-circuit et automatismes de coupure."
                },
                {
                    "step": "Licence Pro (Bac +3)",
                    "title": "Licence Pro Systèmes Électriques Intelligents et Réseaux",
                    "desc": "Formation avancée sur les protocoles de téléconduite et les réseaux communicants."
                },
                {
                    "step": "Habilitation d'opérateur",
                    "title": "Formation simulateur interne (RTE / Enedis / Senelec)",
                    "desc": "Cursus immersif sur simulateur pleine échelle pour apprendre à gérer les pannes en direct."
                }
            ],
            "schools": [
                {
                    "name": "Campus de formation Enedis et RTE — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "IUT Génie Électrique et Informatique Industrielle (GEII) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) / Génie Électrique — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Centre de Perfectionnement Professionnel Senelec (CFPP Rufisque) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Habilitation d'opérateur de conduite réseau",
                "Certification téléconduite SCADA",
                "Brevet de sécurité des installations critiques"
            ],
            "schoolSubjects": [
                "Électrotechnique de réseau",
                "Télécommunications industrielles",
                "Protections électriques",
                "Analyse de défauts"
            ]
        },
        "career": {
            "sectors": [
                "Centres nationaux et régionaux de conduite électrique (RTE, Enedis)",
                "Compagnies d'électricité nationales africaines (Senelec, CIE, Sonabel)",
                "Exploitants ferroviaires (SNCF Réseau - alimentation caténaire)"
            ],
            "employerTypes": [
                "Gestionnaires de réseau de transport (GRT)",
                "Gestionnaires de réseau de distribution (GRD)"
            ],
            "evolution": "Opérateur de conduite adjoint ➔ Opérateur de quart titulaire ➔ Chef de quart dispatching ➔ Ingénieur d'études dynamiques de réseau",
            "pros": "Poste passionnant au cœur de la décision nationale, travail sur des écrans high-tech, majorations de salaire en horaires postés 3x8.",
            "cons": "Horaires décalés (nuits, week-ends, jours fériés), responsabilité colossale sur la coupure de villes entières."
        },
        "gettingStarted": {
            "beginnerProject": "Comprendre la différence entre transport (400 kV) et distribution (20 kV / 230 V).",
            "intermediateProject": "Simuler un réseau en anneau simple sous un logiciel pédagogique et tester une manœuvre de réenclenchement.",
            "advancedProject": "Analyser le scénario de la grande panne européenne de 2006 causée par la coupure d'une ligne sur le fleuve Ems.",
            "portfolioIdeas": [
                "Schéma unifilaire annoté d'un poste source",
                "Fiche de procédure de réalimentation prioritaire d'un hôpital"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA analyse les flux en temps réel et suggère au technicien les 3 meilleures commutations pour éviter une surcharge de câble.",
            "automatedTasks": [
                "Détection précoce d'oscillations anormales de fréquence",
                "Prévision de charge par quartier à 15 minutes"
            ],
            "emergingSkills": [
                "Supervision assistée par copilote IA d'exploitation de réseau"
            ],
            "humanEdge": "La responsabilité légale et le sang-froid d'autoriser la mise sous tension d'un secteur où interviennent des équipes humaines."
        },
        "africaContext": {
            "senegalInsight": "Le Dispatching National de la Senelec à Hann (Dakar) est le centre névralgique de l'électricité sénégalaise : les opérateurs y arbitrent quotidiennement l'injection des centrales solaires (Bokhol, Malicounda, Kahone), du parc éolien de Taïba N'Diaye et des imports hydroélectriques du barrage de Manantali (OMVS).",
            "localSectors": [
                "Senelec Dispatching National de Hann (Dakar)",
                "OMVS (Organisation pour la Mise en Valeur du fleuve Sénégal - Manantali, Félou)",
                "WAPP (West African Power Pool - Système d'Échanges d'Énergie Électrique Ouest-Africain)"
            ],
            "remoteWork": "Non compatible (salle de commandement sécurisée avec accès restreint).",
            "entrepreneurship": "Conseil en architecture de télégestion et intégration de centrales renouvelables sur les réseaux interconnectés."
        },
        "relatedJobSlugs": [
            "ingenieur-smart-grids-reseaux-intelligents",
            "monteur-technicien-reseaux-electriques",
            "trader-energie-analyste-marches"
        ],
        "connectedFamilies": [
            "numerique-ia",
            "cybersecurite-reseaux"
        ],
        "resources": [
            {
                "type": "guide",
                "title": "Conduite et exploitation des réseaux — Energierecrute",
                "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php",
                "source": "Energierecrute"
            },
            {
                "type": "portail",
                "title": "Enedis — Nos métiers de la conduite réseau",
                "url": "https://www.enedis.fr/recrutement",
                "source": "Enedis"
            }
        ],
        "sources": [
            "Energierecrute",
            "RTE",
            "Enedis",
            "Senelec"
        ],
        "interests": [
            "donnees-chiffres",
            "technique-outils",
            "securite-defense"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En cas d'incident sur un câble moyenne tension en ville, les automates de téléconduite et les opérateurs parviennent aujourd'hui à réalimenter 80% des foyers coupés en moins de 3 minutes chrono.",
            "pourquoi": "Grâce aux boucles de secours et aux interrupteurs télécommandés par réseau cellulaire sécurisé.",
            "a_retenir": "Le pilote invisible qui garde les lumières allumées pour des millions de citoyens."
        }
    },
    {
        "id": "ingenieur-smart-grids-reseaux-intelligents",
        "slug": "ingenieur-smart-grids-reseaux-intelligents",
        "title": "Ingénieur Smart Grids & Systèmes Électriques Communicants",
        "aliases": [
            "Architecte réseaux intelligents",
            "Ingénieur flexibilité électrique & micro-réseaux",
            "Ingénieur IoT énergie & comptage intelligent"
        ],
        "icon": "🧠",
        "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Réseaux Électriques, Transport & Distribution",
        "domainId": "reseaux-transport-distribution",
        "subdomain": "Smart grids & Réseaux communicants",
        "energyTechnology": [
            "Comptage communicant (Linky)",
            "Microgrids & Îlotage",
            "Véhicule-réseau (V2G - Vehicle-to-Grid)"
        ],
        "energySector": "Digitalisation & Flexibilité Énergétique",
        "sourceEnergierecrute": true,
        "isEmerging": true,
        "level": "Bac +5 (Diplôme d'Ingénieur ou Master spécialisé Smart Grids)",
        "salary": "🇫🇷 France : 3 100 - 5 200 € net/mois (~44 000 - 75 000 € brut/an, Source : Energierecrute / APEC) • 🇸🇳 Sénégal : 600 000 - 1 800 000 FCFA / mois (Startups d'électrification rurale Pay-As-You-Go, Senelec, bureaux d'ingénierie)",
        "simpleDefinition": "L'ingénieur smart grids croise génie électrique, télécoms et intelligence logicielle pour transformer les réseaux classiques en réseaux intelligents capables d'intégrer massivement renouvelables, stockage et bornes de recharge.",
        "shortDescription": "Profil hybride d'élite très prisé sur Energierecrute, il conçoit les architectures numériques permettant l'autoconsommation collective, les micro-réseaux et la recharge intelligente des véhicules.",
        "longDescription": "Selon les analyses de marché et offres d'emploi d'Energierecrute, l'avènement de millions de panneaux photovoltaïques décentralisés et de parcs éoliens a rendu obsolète la gestion unidirectionnelle de l'électricité. L'ingénieur smart grids conçoit les systèmes de télécommunication, capteurs IoT, protocoles de communication (CEI 61850) et algorithmes prédictifs qui rendent le réseau bidirectionnel et réactif. Il pilote des projets de microgrids autonomes avec stockage batterie, teste les solutions de Vehicle-to-Grid (la batterie de voiture électrique devenant réserve d'appoint pour la maison ou le quartier) et déploie les mécanismes d'effacement de consommation lors des pics nationaux.",
        "mainObjective": "Rendre le réseau électrique adaptatif, flexible et digitalisé pour intégrer 100% d'énergies renouvelables intermittentes sans risque d'effondrement.",
        "companyRole": "Architecte de la transition digitale et de la flexibilité des réseaux énergétiques.",
        "workEnvironment": [
            "💻 Bureaux d'études d'ingénierie et sièges de gestionnaires de réseaux",
            "🔬 Bancs de tests 'Hardware-in-the-Loop' (HIL) pour simuler des micro-réseaux sous contrainte",
            "🏙️ Démonstrateurs urbains de quartiers à énergie positive et micro-grids industriels"
        ],
        "missions": [
            "Modéliser l'injection des énergies renouvelables et évaluer les impacts sur la stabilité locale de la tension",
            "Définir l'architecture télécoms et de cybersécurité des sous-stations électriques numériques (norme IEC 61850)",
            "Développer des algorithmes d'Energy Management System (EMS) pour piloter l'arbitrage stockage / consommation / vente",
            "Concevoir des solutions de recharge intelligente (Smart Charging) et de réinjection réseau (V2G)",
            "Superviser l'intégration des flux de données massives issues des compteurs communicants (Linky, Woyofal intelligent)"
        ],
        "typicalDay": [
            {
                "time": "09:00",
                "title": "Modélisation sous simulateur dynamique",
                "desc": "Test d'un algorithme de régulation de tension sur un microgrid insulaire combinant 2 MW solaire, 1 MW éolien et 3 MWh de batteries."
            },
            {
                "time": "11:15",
                "title": "Réunion cybersécurité des automates",
                "desc": "Validation des protocoles de chiffrement TLS sur les concentrateurs de données communicants d'un poste de transformation."
            },
            {
                "time": "14:30",
                "title": "Atelier Vehicle-to-Grid avec constructeur automobile",
                "desc": "Définition des messages ISO 15118 pour synchroniser la décharge partielle des batteries automobiles lors des pics de 19h."
            },
            {
                "time": "17:00",
                "title": "Dépouillement des données de flexibilité",
                "desc": "Analyse du comportement d'un parc tertiaire ayant effacé 500 kW de climatisation suite à un signal tarifaire de pointe."
            }
        ],
        "skills": {
            "technical": [
                "Génie électrique, électronique de puissance et convertisseurs bidirectionnels",
                "Protocoles de télécommunication industrielle (IEC 61850, Modbus TCP, MQTT, OCPP)",
                "Data science appliquée à l'énergie, Python, optimisation mathématique sous contraintes",
                "Cybersécurité des systèmes industriels et des infrastructures critiques"
            ],
            "human": [
                "Vision systémique et capacité à dialoguer avec électriciens, informaticiens et économistes",
                "Appétence pour l'innovation technologique et l'expérimentation agile",
                "Sens aigu des enjeux environnementaux et de sobriété"
            ],
            "tools": [
                "Simulateurs de réseaux : Matlab/Simulink, OPAL-RT, Typhoon HIL, PowerFactory DIgSILENT",
                "Outils de dimensionnement de micro-réseaux : HOMER Pro, DER-CAM",
                "Plateformes cloud IoT énergie (AWS IoT Core, Azure IoT)",
                "Analyseurs de protocoles réseaux (Wireshark avec décodeurs IEC 61850)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Classes Préparatoires / Licence (Bac +2/+3)",
                    "title": "CPGE Math-Physique ou Licence Génie Électrique",
                    "desc": "Bases fondamentales en mathématiques, physique appliquée et électromagnétisme."
                },
                {
                    "step": "Diplôme d'Ingénieur (Bac +5)",
                    "title": "Ingénieur en Génie Électrique / Smart Grids",
                    "desc": "Spécialisation en réseaux électriques intelligents, télécommunications et électronique de puissance."
                },
                {
                    "step": "Mastère Spécialisé (Bac +6)",
                    "title": "Mastère Spécialisé Énergies Renouvelables et Systèmes Communicants",
                    "desc": "Perfectionnement en cybersécurité industrielle et régulation des marchés d'électricité."
                }
            ],
            "schools": [
                {
                    "name": "Grenoble INP — Ense3 (Énergie, Eau, Environnement) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "CentraleSupélec / INSA Lyon / ESIGELEC — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) / Génie Électrique — Sénégal",
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
                "Certification IEC 61850 Substation Automation",
                "Certification Cybersécurité Industrielle ISA/IEC 62443",
                "Certification HOMER Pro Microgrid Designer"
            ],
            "schoolSubjects": [
                "Électronique de puissance",
                "Protocoles IoT",
                "Automatique linéaire",
                "Data Science & Python"
            ]
        },
        "career": {
            "sectors": [
                "Gestionnaires de réseaux (RTE, Enedis)",
                "Constructeurs d'équipements électriques (Schneider Electric, Siemens, ABB)",
                "Opérateurs de mobilité électrique et de bornes de recharge",
                "Startups de micro-réseaux décentralisés"
            ],
            "employerTypes": [
                "Grands équipementiers industriels",
                "Bureaux d'études d'ingénierie avancée",
                "Opérateurs télécoms et énergie"
            ],
            "evolution": "Ingénieur études smart grids ➔ Chef de projet micro-réseaux ➔ Architecte systèmes électriques communicants ➔ Directeur des technologies (CTO)",
            "pros": "Métier à la pointe absolue de la technologie, forte composante logicielle et écologique, profil très courtisé avec hauts salaires.",
            "cons": "Complexité technique élevée (croisement de 3 métiers différents), normes internationales en perpétuelle mutation."
        },
        "gettingStarted": {
            "beginnerProject": "Télécharger HOMER Pro (version d'essai) et modéliser un village alimenté par du solaire et des batteries.",
            "intermediateProject": "Programmer sous Python un script d'optimisation de recharge d'une voiture électrique aux heures creuses.",
            "advancedProject": "Configurer une trame de communication Modbus TCP pour commander la charge d'un onduleur virtuel.",
            "portfolioIdeas": [
                "Dépôt GitHub d'un algorithme de pilotage de batterie",
                "Étude d'impact de l'intégration de 10 000 véhicules électriques sur un quartier"
            ]
        },
        "aiImpact": {
            "level": "Révolutionnaire",
            "summary": "L'apprentissage par renforcement (Reinforcement Learning) permet aux smart grids de s'auto-équilibrer à la milliseconde face aux variations du soleil et du vent.",
            "automatedTasks": [
                "Optimisation prédictive de la charge/décharge des batteries",
                "Détection automatique de cyberattaques sur les flux Linky"
            ],
            "emergingSkills": [
                "Conception d'algorithmes d'IA embarquée dans les onduleurs connectés"
            ],
            "humanEdge": "L'arbitrage géopolitique et sociétal sur l'accès aux données de consommation énergétique et la protection de la vie privée."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal et au Sahel, les microgrids intelligents sont la clé du développement rural : des villages entiers fonctionnent en autonomie totale grâce à des mini-centrales solaires hybrides équipées de compteurs communicants prépayés (Woyofal intelligent) et de stockage batterie intelligent.",
            "localSectors": [
                "Startups d'électrification rurale (Oolu Solar, Baobab+, Bonergie)",
                "Senelec (programme de modernisation des réseaux)",
                "Projets d'îlotage solaire de l'Agence Sénégalaise d'Électrification Rurale (ASER)"
            ],
            "remoteWork": "Très favorable (modélisation logicielle, télégestion et data science en télétravail fréquent).",
            "entrepreneurship": "Création d'une plateforme de supervision IoT et de gestion de microgrids pour les communautés rurales et îles de la Casamance."
        },
        "relatedJobSlugs": [
            "technicien-exploitation-supervision-reseaux",
            "chef-projet-energie-solaire-photovoltaique",
            "energy-manager-auditeur-energetique"
        ],
        "connectedFamilies": [
            "numerique-ia",
            "cybersecurite-reseaux"
        ],
        "resources": [
            {
                "type": "guide",
                "title": "Smart Grids et réseaux communicants — Energierecrute",
                "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php",
                "source": "Energierecrute"
            },
            {
                "type": "portail",
                "title": "Association Think Smartgrids France",
                "url": "https://www.thinksmartgrids.fr/",
                "source": "Think Smartgrids"
            }
        ],
        "sources": [
            "Energierecrute",
            "Think Smartgrids",
            "RTE",
            "Enedis"
        ],
        "interests": [
            "donnees-chiffres",
            "explorer-decouvrir",
            "technique-outils"
        ],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Le concept de Vehicle-to-Grid (V2G) transforme la voiture électrique en réservoir d'énergie pour la maison : branchée le soir, elle peut restituer son électricité pendant le pic national de 19h puis se recharger la nuit au tarif le plus bas.",
            "pourquoi": "Cela permet de stabiliser le réseau sans avoir à construire de nouvelles centrales d'appoint au gaz.",
            "a_retenir": "L'architecte qui fusionne le numérique et les électrons pour créer le réseau du futur."
        }
    },
    {
        "id": "ingenieur-exploitation-nucleaire",
        "slug": "ingenieur-exploitation-nucleaire",
        "title": "Ingénieur d'Exploitation en Centrale Nucléaire / REP & EPR",
        "aliases": [
            "Ingénieur de quart nucléaire",
            "Ingénieur conduite réacteur",
            "Adjoint au chef d'exploitation nucléaire"
        ],
        "icon": "⚛️",
        "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Énergie Nucléaire & Sûreté",
        "domainId": "energie-nucleaire-surete",
        "subdomain": "Conduite de réacteur & Exploitation de tranche",
        "energyTechnology": [
            "Réacteurs à Eau Pressurisée (REP 900, 1300, N4)",
            "EPR / SMR (Petits réacteurs modulaires)",
            "Circuit primaire & secondaire"
        ],
        "energySector": "Production Électrique Nucléaire Décarbonée",
        "sourceEnergierecrute": true,
        "isEmerging": false,
        "level": "Bac +5 (Diplôme d'Ingénieur nucléaire ou Master Génie Atomique)",
        "salary": "🇫🇷 France : 3 500 - 5 800 € net/mois (~48 000 - 85 000 € brut/an avec primes de quart, Source : Energierecrute / EDF) • 🇸🇳 Sénégal : N/A (Filière en cours d'évaluation institutionnelle / Partenariats recherche AIEA)",
        "simpleDefinition": "L'ingénieur d'exploitation en centrale nucléaire supervise le fonctionnement opérationnel d'une tranche nucléaire, contrôle les réactions en chaîne de fission, gère la puissance thermique et garantit le respect absolu des règles de sûreté.",
        "shortDescription": "Fonction clé répertoriée par Energierecrute pour EDF et Framatome, ce cadre technique pilote les réacteurs nucléaires produisant la part majoritaire de l'électricité décarbonée française.",
        "longDescription": "Comme en témoignent les offres massives de recrutement et les fiches formations d'Energierecrute dans la filière nucléaire française (EDF, Framatome, CEA, Orano), l'ingénieur d'exploitation (souvent en brigade de quart en salle de commande) est responsable de la conduite temps réel du réacteur et des circuits thermodynamiques (primaire, secondaire et tertiaire). Il supervise les manœuvres de variation de puissance (suivi de charge), pilote les opérations d'arrêt de tranche pour renouvellement du combustible, applique rigoureusement les Règles Générales d'Exploitation (RGE) et gère toute situation transitoire en collaboration avec l'Autorité de Sûreté Nucléaire (ASN).",
        "mainObjective": "Produire de l'électricité en continu en garantissant la disponibilité de la tranche dans le respect intransigeant des critères de sûreté nucléaire.",
        "companyRole": "Garant technique et opérationnel de la sûreté et du pilotage de la tranche nucléaire en salle de commande.",
        "workEnvironment": [
            "⚛️ Salles de commande de réacteurs nucléaires ultra-protégées (accès sous habilitation confidentiel défense)",
            "🏢 Bâtiments réacteur et salles des machines (turbo-alternateurs de 900 à 1650 MW)",
            "🕒 Travail en horaires postés par roulement (3x8 ou 5x8) et simulateurs pleine échelle réguliers"
        ],
        "missions": [
            "Superviser les opérateurs de conduite et piloter la neutronique du cœur ainsi que le refroidissement du circuit primaire",
            "Assurer le respect strict des Spécifications Techniques d'Exploitation et des consignes incidentelles/accidentelles",
            "Coordonner les essais périodiques réglementaires sur les systèmes de sauvegarde (diesels de secours, injection de sécurité)",
            "Piloter les manœuvres de montée et baisse de charge en coordination avec le dispatching national de RTE",
            "Participer à la préparation et au suivi des arrêts de tranche pour rechargement de combustible et visite décennale"
        ],
        "typicalDay": [
            {
                "time": "06:15",
                "title": "Relève de quart en salle de commande",
                "desc": "Lecture du journal d'exploitation, revue de l'état des barres de contrôle, de la concentration en bore et des bilans d'activité radiologique."
            },
            {
                "time": "08:30",
                "title": "Supervision d'un essai périodique",
                "desc": "Contrôle du bon démarrage automatique d'une pompe du circuit d'injection de sécurité haute pression."
            },
            {
                "time": "11:00",
                "title": "Coordination avec la maintenance",
                "desc": "Délivrance des autorisations de travaux et validation de l'alignement des vannes d'isolement sur le circuit d'eau alimentaire."
            },
            {
                "time": "14:00",
                "title": "Session simulateur ou entraînement",
                "desc": "Mise en situation sur le simulateur réplique exacte de la tranche pour s'entraîner à la gestion d'une brèche du circuit secondaire."
            }
        ],
        "skills": {
            "technical": [
                "Physique des réacteurs, neutronique et cinétique du cœur nucléaire",
                "Thermodynamique industrielle, thermo-hydraulique diphasique et mécanique des fluides",
                "Réglementation de sûreté nucléaire (RGE, arrêt automatique réacteur, confinement)",
                "Radioprotection, zonage radiologique et barrières de confinement"
            ],
            "human": [
                "Culture de sûreté et rigueur intellectuelle absolue (zéro tolérance à l'approximation)",
                "Capacité de remise en question et pratique systématique du doute méthodique",
                "Communication sereine et leadership exemplaire sous situation de stress opérationnel"
            ],
            "tools": [
                "Simulateurs de conduite nucléaire pleine échelle (réplique exacte de salle de commande)",
                "Systèmes d'aide à la conduite informatisée (SACI) et instrumentation neutronique ex-cœur",
                "Logiciels de calcul neutronique de cœur (APOLLO, CRONOS)",
                "Outils de gestion d'arrêt de tranche et de consignation"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Diplôme d'Ingénieur (Bac +5)",
                    "title": "Ingénieur généraliste ou génie énergétique / nucléaire",
                    "desc": "Formation d'élite en physique quantique, thermodynamique et sciences de l'ingénieur."
                },
                {
                    "step": "Génie Atomique (Bac +6)",
                    "title": "Diplôme d'Ingénieur en Génie Atomique (INSTN)",
                    "desc": "La formation de référence mondiale en physique des réacteurs et sûreté nucléaire."
                },
                {
                    "step": "Parcours d'habilitation EDF",
                    "title": "Formation conduite sur simulateur (18 à 24 mois)",
                    "desc": "Entraînement intensif avant validation par la commission d'habilitation à la conduite autonome."
                }
            ],
            "schools": [
                {
                    "name": "INSTN (Institut National des Sciences et Techniques Nucléaires) — CEA Saclay / Cadarache — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Grenoble INP — Phelma / Mines Paris-PSL / CentraleSupélec — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Cheikh Anta Diop (UCAD Dakar) / Institut de Technologie Nucléaire Appliquée (ITNA) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Habilitation Sûreté Nucléaire de tranche",
                "Certificat de conduite de réacteur REP / EPR",
                "Habilitation de Confidentiel Défense"
            ],
            "schoolSubjects": [
                "Physique nucléaire",
                "Neutronique",
                "Thermo-hydraulique",
                "Métallurgie sous irradiation"
            ]
        },
        "career": {
            "sectors": [
                "Exploitants de centrales nucléaires (EDF)",
                "Constructeurs de réacteurs (Framatome, CEA, TechnicAtome)",
                "Autorités de sûreté et instituts d'expertise (ASN, IRSN)"
            ],
            "employerTypes": [
                "Grands électriciens nucléaires",
                "Instituts de recherche atomique",
                "Organismes d'audit de sûreté"
            ],
            "evolution": "Ingénieur d'exploitation junior ➔ Ingénieur de quart titulaire ➔ Chef d'exploitation de site ➔ Directeur de centrale nucléaire",
            "pros": "Exigence intellectuelle inégalée, prestige technique, contribution majeure à la décarbonation du mix électrique mondial.",
            "cons": "Horaires postés en 3x8, contraintes de sécurité et d'habilitation très strictes, déplacements en formation fréquents."
        },
        "gettingStarted": {
            "beginnerProject": "Comprendre le rôle des trois circuits d'eau étanches d'un Réacteur à Eau Pressurisée (REP).",
            "intermediateProject": "Calculer la masse de combustible d'uranium nécessaire pour produire 1 000 mégawatts pendant un an.",
            "advancedProject": "Rédiger une fiche de synthèse sur le principe des trois barrières de confinement (gaine, circuit primaire, enceinte).",
            "portfolioIdeas": [
                "Schéma fonctionnel animé d'une tranche REP 1300",
                "Synthèse des systèmes de sauvegarde d'un EPR"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "En raison des exigences draconiennes de sûreté, l'IA est utilisée pour la maintenance prédictive des pompes et l'analyse de signaux acoustiques, mais la décision humaine reste souveraine en conduite.",
            "automatedTasks": [
                "Surveillance des vibrations des turbo-alternateurs",
                "Reconnaissance d'images pour le contrôle des soudures"
            ],
            "emergingSkills": [
                "Utilisation de jumeaux numériques thermo-hydrauliques pour le recalage de modèles"
            ],
            "humanEdge": "La culture de sûreté, le respect de la règle et la primauté absolue de l'esprit critique humain sur tout automatisme."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'Institut de Technologie Nucléaire Appliquée (ITNA) de l'UCAD forme des spécialistes aux applications pacifiques (médecine nucléaire, radiothérapie, sélection variétale agricole) et coopère avec l'AIEA pour évaluer le potentiel des Petits Réacteurs Modulaires (SMR) pour le dessalement d'eau de mer et l'électricité propre en Afrique.",
            "localSectors": [
                "Institut de Technologie Nucléaire Appliquée (ITNA - UCAD Dakar)",
                "Autorité Sénégalaise de Radioprotection et de Sûreté Nucléaire (ARSN)",
                "Centres hospitaliers de médecine nucléaire (Hôpital Dalal Jamm)"
            ],
            "remoteWork": "Non compatible (conduite exclusive sur site en salle de commande).",
            "entrepreneurship": "Cabinet d'expertise en ingénierie de sûreté et radioprotection pour les industries sous rayonnements."
        },
        "relatedJobSlugs": [
            "technicien-radioprotection-surete-nucleaire",
            "technicien-maintenance-nucleaire",
            "ingenieur-rd-energie"
        ],
        "connectedFamilies": [
            "sciences-biotech",
            "industrie-mecanique"
        ],
        "resources": [
            {
                "type": "guide",
                "title": "Métiers du nucléaire et carrières — Energierecrute",
                "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php",
                "source": "Energierecrute"
            },
            {
                "type": "portail",
                "title": "SFEN — Société Française d'Énergie Nucléaire",
                "url": "https://www.sfen.org/",
                "source": "SFEN"
            }
        ],
        "sources": [
            "Energierecrute",
            "EDF",
            "CEA",
            "SFEN"
        ],
        "interests": [
            "donnees-chiffres",
            "explorer-decouvrir",
            "securite-defense"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En produisant plus de 65% de l'électricité française sans émettre un seul gramme direct de CO2, le parc nucléaire évite chaque année le rejet de plus de 30 millions de tonnes de gaz à effet de serre dans l'atmosphère.",
            "pourquoi": "L'énergie provient de la fission de l'atome d'uranium et non de la combustion d'hydrocarbures.",
            "a_retenir": "Le pilote de la plus grande source d'électricité bas-carbone d'Europe."
        }
    },
    {
        "id": "technicien-maintenance-nucleaire",
        "slug": "technicien-maintenance-nucleaire",
        "title": "Technicien de Maintenance en Milieu Nucléaire & Robinetterie",
        "aliases": [
            "Mécanicien robinetier nucléaire",
            "Technicien d'arrêt de tranche nucléaire",
            "Électromécanicien en zone contrôlée"
        ],
        "icon": "🔧",
        "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Énergie Nucléaire & Sûreté",
        "domainId": "energie-nucleaire-surete",
        "subdomain": "Maintenance mécanique, chaudronnerie & robinetterie nucléaire",
        "energyTechnology": [
            "Robinetterie industrielle nucléaire (clapets, soupapes)",
            "Générateurs de vapeur & Pompes primaires",
            "Contrôles Non Destructifs (CND)"
        ],
        "energySector": "Maintenance & Pérennité du Parc Nucléaire",
        "sourceEnergierecrute": true,
        "isEmerging": false,
        "level": "Bac Pro (MSP / Chaudronnerie) à Bac +2 (BTS Maintenance, BTS Génie Civil / Nucléaire)",
        "salary": "🇫🇷 France : 2 200 - 3 600 € net/mois (~32 000 - 52 000 € brut/an avec primes, Source : Energierecrute) • 🇸🇳 Sénégal : N/A (Compétences équivalentes hautement recherchées en offshore pétrogazier et mines)",
        "simpleDefinition": "Le technicien de maintenance nucléaire révise, répare et requalifie les composants mécaniques vitaux des centrales (vannes, pompes, turbines, robinets haute pression) dans le respect strict des normes de sûreté et de radioprotection.",
        "shortDescription": "Profil manuel hautement qualifié documenté par Energierecrute, ce spécialiste intervient lors des arrêts de réacteurs pour garantir l'étanchéité et la fiabilité de milliers d'organes mécaniques.",
        "longDescription": "Comme décrit dans les nombreuses offres de prestataires spécialisés d'Energierecrute (Endel Engie, Clemessy, Framatome, Onet Technologies, Orano), le technicien de robinetterie et de maintenance nucléaire opère sur des organes mécaniques critiques soumis à des pressions colossales (155 bars) et des températures élevées (300°C). Vêtu d'équipements de protection spécifiques (combinaisons vinyle, masques ventilés), il démonte, nettoie, rectifie les portées d'étanchéité, remplace les garnitures mécaniques et remonte des vannes de sécurité avec serrage au couple contrôlé. Chaque geste technique est tracé dans des dossiers de réalisation de travaux (DRT) minutieusement contrôlés.",
        "mainObjective": "Assurer l'intégrité mécanique et l'étanchéité absolue de l'ensemble des circuits de fluide de la centrale nucléaire.",
        "companyRole": "Expert de l'étanchéité et de la fiabilité des composants mécaniques sous contraintes extrêmes.",
        "workEnvironment": [
            "☢️ Zone contrôlée des centrales nucléaires (bâtiment réacteur, bâtiment combustible)",
            "🛠️ Ateliers chauds de maintenance et bancs d'épreuve hydrostatiques",
            "🧳 Déplacements fréquents sur les différents sites nucléaires selon le calendrier des arrêts de tranche"
        ],
        "missions": [
            "Préparer les chantiers en zone en intégrant la radioprotection et les autorisations de travail spécifiques",
            "Démonter, expertiser et réviser la robinetterie industrielle (soupapes de sûreté, vannes motorisées, clapets)",
            "Usiner, roder et rectifier les portées d'étanchéité métalliques au micromètre près",
            "Effectuer les essais d'étanchéité et les épreuves de pression hydrostatiques réglementaires",
            "Renseigner avec une rigueur absolue le dossier de suivi de maintenance (DRT) et le rapport de fin d'intervention"
        ],
        "typicalDay": [
            {
                "time": "07:00",
                "title": "Passage en vestiaire chaud",
                "desc": "Habillage complet en tenue de zone (sous-vêtements coton, combinaison étanche, dosimètres opérationnels passifs et électroniques)."
            },
            {
                "time": "08:15",
                "title": "Ouverture d'une soupape de sûreté",
                "desc": "Dévissage contrôlé à la clé dynamométrique, contrôle visuel des portées et pose de capuchons de protection anti-corps étrangers (FME)."
            },
            {
                "time": "11:30",
                "title": "Rodage en atelier de chantier",
                "desc": "Opération de rodage d'un clapet avec pâte abrasive fine pour éliminer un défaut de planéité microscopique détecté au marbre."
            },
            {
                "time": "14:45",
                "title": "Contrôle non destructif",
                "desc": "Participation au contrôle par ressuage et ultrasons sur la soudure d'un piquage de tuyauterie pour vérifier l'absence de fissure."
            },
            {
                "time": "16:15",
                "title": "Sortie de zone et dosimétrie",
                "desc": "Passage aux portiques de détection de contamination radiologique C1/C2 et enregistrement des doses reçues dans le logiciel SISERI."
            }
        ],
        "skills": {
            "technical": [
                "Mécanique de précision, métrologie et tolérancement géométrique",
                "Robinetterie industrielle (vannes à opercule, soupapes à ressort, actionneurs pneumatiques)",
                "Contrôles Non Destructifs (CND niveau 1/2 : ressuage, magnétoscopie)",
                "Habilitations nucléaires obligatoires (SCN1/SCN2, CSQ, RP1/RP2)"
            ],
            "human": [
                "Rigueur manuelle extrême et sens du détail chirurgical",
                "Discipline collective et respect scrupuleux des consignes de propreté (démarche FME - exclusion des corps étrangers)",
                "Endurance et sang-froid en milieu confiné sous tenue ventilée"
            ],
            "tools": [
                "Rodeuses mécaniques portatives et marbres de contrôle",
                "Clés dynamométriques et clés à choc hydrauliques asservies au couple",
                "Bancs d'essais d'étanchéité sous pression d'azote ou d'hélium",
                "Dosimètres électroniques individuels à lecture directe"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Bac Pro (Bac)",
                    "title": "Bac Pro MSPC (Maintenance) ou Technicien en Chaudronnerie Industrielle",
                    "desc": "Apprentissage de la mécanique d'ajustage, de l'usinage et des techniques de soudage."
                },
                {
                    "step": "Certifications Nucléaires",
                    "title": "Certifications SCN, CSQ et RP (CEFRI)",
                    "desc": "Stages réglementaires obligatoires pour pouvoir franchir les portes de la zone contrôlée."
                },
                {
                    "step": "BTS (Bac +2)",
                    "title": "BTS Maintenance des Systèmes ou BTS Environnement Nucléaire",
                    "desc": "Montée en compétences vers la chefferie d'équipe et la préparation de dossiers techniques."
                }
            ],
            "schools": [
                {
                    "name": "Lycées professionnels labellisés filière nucléaire — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centres de formation CEFRI et organismes agréés — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal",
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
                "Habilitation SCN (Savoir Commun du Nucléaire)",
                "Habilitation RP (Radioprotection)",
                "Contrôle Non Destructif COFREND niveau 1/2"
            ],
            "schoolSubjects": [
                "Mécanique des fluides",
                "Résistance des matériaux",
                "Métrologie dimensionnelle",
                "Soudure et chaudronnerie"
            ]
        },
        "career": {
            "sectors": [
                "Entreprises de maintenance nucléaire spécialisées (Endel, Clemessy, Framatome, Onet)",
                "Grands exploitants (EDF, Orano, CEA)",
                "Industrie de haute technicité (pétrochimie, offshore, naval)"
            ],
            "employerTypes": [
                "Prestataires de services en arrêt de tranche",
                "Grands constructeurs de turbines et vannes"
            ],
            "evolution": "Robinetier junior ➔ Robinetier spécialiste haute pression ➔ Chef d'équipe arrêt de tranche ➔ Chargé d'affaires maintenance nucléaire",
            "pros": "Haut niveau de technicité et reconnaissance professionnelle, primes substantielles lors des arrêts de tranche.",
            "cons": "Déplacements géographiques très fréquents d'une centrale à l'autre, travail sous tenue ventilée étanche."
        },
        "gettingStarted": {
            "beginnerProject": "Démonter et remonter un robinet vanne à opercule pour comprendre l'étanchéité métal sur métal.",
            "intermediateProject": "Réaliser une opération de rodage manuel d'un siège de soupape avec de la pâte abrasive.",
            "advancedProject": "Rédiger un Dossier de Réalisation de Travaux (DRT) respectant la traçabilité complète des couples de serrage.",
            "portfolioIdeas": [
                "Photos de portées d'étanchéité rectifiées au micromètre",
                "Attestation de stage en atelier d'usinage"
            ]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "L'expertise tactile, la sensibilité manuelle du rodage et le serrage au couple sous contrainte d'espace restent le domaine exclusif du geste humain.",
            "automatedTasks": [
                "Inspection vidéo robotisée des tuyauteries inaccessibles",
                "Traçabilité numérique sur tablette des pièces changées"
            ],
            "emergingSkills": [
                "Utilisation de lunettes connectées pour assistance technique d'experts distants"
            ],
            "humanEdge": "La précision du geste millimétrique dans un environnement étroit où aucun robot ne peut s'insérer."
        },
        "africaContext": {
            "senegalInsight": "Les compétences d'ajustage mécanique de précision, de robinetterie haute pression et de contrôles non destructifs sont exactement celles requises pour la maintenance des unités flottantes de production pétrolière et gazière offshore (FPSO Léopold Sédar Senghor sur le champ Sangomar).",
            "localSectors": [
                "Unités de maintenance industrielle navale (Dakarnave)",
                "Industrie pétrogazière offshore (FPSO Sangomar, GTA)",
                "Industries chimiques et cimenteries (ICS, Sococim)"
            ],
            "remoteWork": "Non compatible (travail physique direct sur tuyauteries et machines).",
            "entrepreneurship": "Création d'un atelier spécialisé dans l'épreuve hydrostatique et la réfection de soupapes de sûreté pour les industries lourdes."
        },
        "relatedJobSlugs": [
            "technicien-radioprotection-surete-nucleaire",
            "ingenieur-exploitation-nucleaire",
            "technicien-maintenance-eolienne"
        ],
        "connectedFamilies": [
            "industrie-mecanique",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "guide",
                "title": "Maintenance industrielle nucléaire — Energierecrute",
                "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php",
                "source": "Energierecrute"
            },
            {
                "type": "portail",
                "title": "Pôle de compétitivité Nucléaire Nuclear Valley",
                "url": "https://www.nuclearvalley.com/",
                "source": "Nuclear Valley"
            }
        ],
        "sources": [
            "Energierecrute",
            "EDF",
            "Framatome",
            "Endel"
        ],
        "interests": [
            "construire-fabriquer",
            "technique-outils"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Dans un circuit primaire de centrale nucléaire, les vannes supportent une pression de plus de 155 bars (l'équivalent de 150 fois la pression atmosphérique) et de l'eau chauffée à plus de 300°C sans la moindre goutte de fuite.",
            "pourquoi": "Grâce à des portées métalliques rodées avec une précision chirurgicale inférieure au millième de millimètre.",
            "a_retenir": "L'artisan de la très haute précision qui garantit l'étanchéité des réacteurs."
        }
    },
    {
        "id": "technicien-radioprotection-surete-nucleaire",
        "slug": "technicien-radioprotection-surete-nucleaire",
        "title": "Technicien en Radioprotection & Sûreté Nucléaire",
        "aliases": [
            "Agent de radioprotection",
            "Technicien mesures nucléaires & environnement",
            "Conseiller en radioprotection (CRP)"
        ],
        "icon": "🛡️",
        "image": "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Énergie Nucléaire & Sûreté",
        "domainId": "energie-nucleaire-surete",
        "subdomain": "Contrôle radiologique & Sécurité nucléaire",
        "energyTechnology": [
            "Détection des rayonnements ionisants (Alpha, Bêta, Gamma, Neutrons)",
            "Spectrométrie gamma & Dosimétrie",
            "Zonage radiologique réglementaire"
        ],
        "energySector": "Protection Sanitaire & Environnement Nucléaire",
        "sourceEnergierecrute": true,
        "isEmerging": false,
        "level": "Bac +2 (BTS Contrôle des Rayonnements Ionisants - CRIAPR) à Bac +3",
        "salary": "🇫🇷 France : 2 300 - 3 700 € net/mois (~33 000 - 53 000 € brut/an avec primes de zone, Source : Energierecrute) • 🇸🇳 Sénégal : 350 000 - 900 000 FCFA / mois (Centres hospitaliers, ARSN, laboratoires de contrôle)",
        "simpleDefinition": "Le technicien en radioprotection mesure et surveille les niveaux de rayonnements ionisants sur les installations, veille à la protection des intervenants et de l'environnement, et fait respecter la réglementation de sûreté.",
        "shortDescription": "Garant de la santé des travailleurs et de l'environnement répertorié par Energierecrute, ce spécialiste mesure la radioactivité et applique le principe de précaution ALARA sur les sites énergétiques et médicaux.",
        "longDescription": "Comme mis en avant dans les fiches de formations spécialisées d'Energierecrute (notamment le BTS CRIAPR et les filières de l'INSTN), le technicien en radioprotection est l'expert sentinelle des rayonnements ionisants. Il délimite le zonage radiologique des chantiers (zone verte, jaune, orange, rouge), réalise des cartographies radiologiques précises des débits de dose, calcule les prévisions dosimétriques selon le principe ALARA (As Low As Reasonably Achievable), surveille la contamination surfacique et atmosphérique, et intervient immédiatement en cas d'alarme pour évacuer et confiner une zone suspecte.",
        "mainObjective": "Prévenir tout risque d'irradiation ou de contamination pour le personnel intervenant et garantir l'absence de dispersion de radioactivité dans l'environnement.",
        "companyRole": "Gendarme sanitaire et protecteur radiologique des intervenants et de l'environnement du site.",
        "workEnvironment": [
            "☢️ Installations nucléaires de base (CNPE EDF, usines Orano, centres de recherche CEA)",
            "🔬 Laboratoires de métrologie de la radioactivité et de spectrométrie",
            "🏥 Services hospitaliers de médecine nucléaire et centres de radiothérapie"
        ],
        "missions": [
            "Réaliser les mesures de débits d'équivalents de dose ambiants et les contrôles de contamination de surface",
            "Définir les conditions de travail en zone contrôlée et les équipements de protection individuelle requis (combinaisons étanches, masques filtrants)",
            "Gérer la dosimétrie opérationnelle du personnel et analyser les historiques d'exposition individuelle",
            "Contrôler les rejets d'effluents gazeux et liquides de la centrale par prélèvements et analyses de spectrométrie",
            "Sensibiliser les intervenants à la culture de radioprotection et auditer la conformité des chantiers"
        ],
        "typicalDay": [
            {
                "time": "07:30",
                "title": "Étalonnage des radiamètres",
                "desc": "Vérification du zéro et contrôle de source sur la flotte de radiamètres, contaminamètres et balises de surveillance atmosphérique."
            },
            {
                "time": "09:00",
                "title": "Cartographie radiologique d'un local",
                "desc": "Mesure des débits de dose gamma et neutrons dans le local échangeur avant l'entrée de l'équipe de maintenance mécanique."
            },
            {
                "time": "11:45",
                "title": "Optimisation ALARA d'une intervention",
                "desc": "Calcul prévisionnel de dose avec le chef d'équipe pour positionner des écrans de plomb mobiles et réduire l'exposition des soudeurs de 40%."
            },
            {
                "time": "14:30",
                "title": "Contrôle des filtres atmosphériques",
                "desc": "Remplacement des filtres aérosols des balises de cheminée et passage au passeur d'échantillons basse activité pour spectrométrie gamma."
            },
            {
                "time": "16:30",
                "title": "Revue des doses individuelles",
                "desc": "Vérification sur le logiciel de radioprotection que personne n'a dépassé son quota dosimétrique de la journée."
            }
        ],
        "skills": {
            "technical": [
                "Physique des rayonnements et interactions rayonnement-matière",
                "Métrologie nucléaire (radiamétrie gamma, neutrons, contamination alpha/bêta, spectrométrie)",
                "Réglementation de la radioprotection (Code du travail, principe ALARA, limites annuelles de dose)",
                "Gestion des situations d'urgence radiologique et plans de protection d'urgence (PPU)"
            ],
            "human": [
                "Pédagogie et capacité à faire respecter des règles de sécurité strictes avec fermeté",
                "Sens aigu de l'observation et vigilance permanente",
                "Calme et autorité naturelle lors de la gestion d'un incident de contamination"
            ],
            "tools": [
                "Radiamètres portables (gamme gamma et équivalents de dose)",
                "Contaminamètres surfaciques alpha/bêta et frottis de contrôle",
                "Balises de surveillance d'ambiance et moniteurs d'aérosols radioactifs",
                "Logiciels de gestion dosimétrique (SISERI, Dosinet)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Bac Scientifique / STI2D",
                    "title": "Bac Général (Spécialités scientifiques) ou STI2D",
                    "desc": "Acquisition des bases solides en physique des ondes, chimie et calculs."
                },
                {
                    "step": "BTS (Bac +2)",
                    "title": "BTS Contrôle des Rayonnements Ionisants (CRIAPR)",
                    "desc": "Diplôme d'État de référence pour devenir technicien en radioprotection qualifié."
                },
                {
                    "step": "Licence Pro (Bac +3)",
                    "title": "Licence Pro Métiers de la Radioprotection et Sécurité Nucléaire",
                    "desc": "Accès au titre de Conseiller en Radioprotection (CRP) habilité par l'ASN."
                }
            ],
            "schools": [
                {
                    "name": "Lycées préparant le BTS CRIAPR (Marseille, Cherbourg, Lyon) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "INSTN — Institut National des Sciences et Techniques Nucléaires — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Cheikh Anta Diop (UCAD Dakar) / Faculté des Sciences — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Autorité Sénégalaise de Radioprotection et de Sûreté Nucléaire (ARSN) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certificat de Conseiller en Radioprotection (CRP)",
                "Habilitation PCR (Personne Compétente en Radioprotection)",
                "Agrément ASN pour les contrôles externes"
            ],
            "schoolSubjects": [
                "Physique nucléaire",
                "Métrologie des rayonnements",
                "Biologie cellulaire et effets des radiations",
                "Droit nucléaire"
            ]
        },
        "career": {
            "sectors": [
                "Centres nucléaires de production d'électricité (EDF)",
                "Industries du cycle du combustible (Orano, Framatome)",
                "Établissements de santé (hôpitaux, centres de lutte contre le cancer)",
                "Laboratoires de recherche (CEA, CNRS, IRSN)"
            ],
            "employerTypes": [
                "Énergéticiens nucléaires",
                "Centres hospitaliers universitaires",
                "Organismes d'audit et de contrôle"
            ],
            "evolution": "Technicien radioprotection junior ➔ Conseiller en Radioprotection d'établissement ➔ Chef de section radioprotection environnement ➔ Inspecteur de la sûreté nucléaire",
            "pros": "Rôle sanitaire et protecteur primordial, variété des milieux (centrales électriques, hôpitaux, industrie), forte employabilité.",
            "cons": "Rigueur procédurale sans concession, port de protections intégrales lors des contrôles en zone active."
        },
        "gettingStarted": {
            "beginnerProject": "Rechercher l'origine des rayonnements ionisants naturels qui nous entourent (radon, rayons cosmiques, bananes).",
            "intermediateProject": "Calculer la dose reçue lors d'un vol transatlantique Paris-Dakar en millisieverts et la comparer à une radio dentaire.",
            "advancedProject": "Établir une fiche de calcul d'épaisseur d'un écran de plomb pour diviser par 10 un débit de dose gamma de césium-137.",
            "portfolioIdeas": [
                "Protocole de frottis de détection de contamination surfacique",
                "Exposé pédagogique sur le principe ALARA"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des robots quadrupèdes autonomes cartographient les zones radioactives les plus chaudes avant l'entrée des techniciens.",
            "automatedTasks": [
                "Télé-relevé continu des balises d'ambiance",
                "Croisement automatique des historiques de doses des intervenants"
            ],
            "emergingSkills": [
                "Supervision de flottes de drones et robots de mesure radiologique"
            ],
            "humanEdge": "La décision éthique de validation d'un chantier et la communication rassurante auprès des travailleurs."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'Autorité Sénégalaise de Radioprotection et de Sûreté Nucléaire (ARSN) est chargée de surveiller toutes les sources radioactives : appareils de radiothérapie contre le cancer dans les hôpitaux de Dakar, gammagraphie industrielle pour contrôler la qualité des soudures sur les gazoducs offshore, et mesures de radioactivité naturelle dans les mines de zircon et de phosphate.",
            "localSectors": [
                "Autorité Sénégalaise de Radioprotection et de Sûreté Nucléaire (ARSN)",
                "Hôpitaux équipés de scanners et radiothérapie (Dakar, Touba)",
                "Entreprises d'inspection industrielle des pipelines pétroliers"
            ],
            "remoteWork": "Hybride possible pour l'analyse des bilans dosimétriques et rapports d'audits.",
            "entrepreneurship": "Création d'un bureau de contrôle et de formation en radioprotection pour le personnel médical et industriel de l'Afrique de l'Ouest."
        },
        "relatedJobSlugs": [
            "responsable-hse-sites-energetiques",
            "ingenieur-exploitation-nucleaire",
            "technicien-maintenance-nucleaire"
        ],
        "connectedFamilies": [
            "sante-biomedical",
            "sciences-biotech"
        ],
        "resources": [
            {
                "type": "guide",
                "title": "Filière radioprotection — Energierecrute",
                "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php",
                "source": "Energierecrute"
            },
            {
                "type": "portail",
                "title": "IRSN — Institut de Radioprotection et de Sûreté Nucléaire",
                "url": "https://www.irsn.fr/",
                "source": "IRSN"
            }
        ],
        "sources": [
            "Energierecrute",
            "IRSN",
            "ASN",
            "ARSN Sénégal"
        ],
        "interests": [
            "securite-defense",
            "nature-environnement",
            "donnees-chiffres"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Nous sommes tous exposés quotidiennement à environ 2,5 à 3 millisieverts par an de radioactivité naturelle (due aux roches granitiques terrestres, à l'air que nous respirons et à notre propre corps).",
            "pourquoi": "Le corps humain contient naturellement du potassium 40 radioactif et émet lui-même plusieurs milliers de désintégrations par seconde !",
            "a_retenir": "L'ange gardien qui protège les hommes et la nature contre les risques invisibles."
        }
    },
    {
        "id": "technicien-genie-climatique-frigoriste",
        "slug": "technicien-genie-climatique-frigoriste",
        "title": "Technicien Frigoriste & Maintenance Génie Climatique CVC",
        "aliases": [
            "Technicien CVC",
            "Frigoriste industriel",
            "Technicien de maintenance pompes à chaleur et froid commercial"
        ],
        "icon": "❄️",
        "image": "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Génie Climatique, Froid & Systèmes CVC",
        "domainId": "genie-climatique-cvc",
        "subdomain": "Froid commercial/industriel & CVC tertiaire",
        "energyTechnology": [
            "Groupes froids industriels",
            "Pompes à Chaleur (PAC) réversibles",
            "Fluides frigorigènes écologiques (CO2 transcritique, propane R290, ammoniac)"
        ],
        "energySector": "Efficacité Énergétique du Bâtiment & Chaîne du Froid",
        "sourceEnergierecrute": true,
        "isEmerging": false,
        "level": "Bac Pro (TFCA) à Bac +2 (BTS FED option B - Génie frigorifique)",
        "salary": "🇫🇷 France : 2 200 - 3 500 € net/mois (~32 000 - 50 000 € brut/an avec véhicule, Source : Energierecrute) • 🇸🇳 Sénégal : 250 000 - 800 000 FCFA / mois (Maintenance supermarchés, hôtels, entrepôts frigorifiques du Port de Dakar)",
        "simpleDefinition": "Le technicien frigoriste et CVC installe, dépanne et optimise les systèmes de climatisation, de réfrigération industrielle et de pompes à chaleur garantissant le confort thermique et la chaîne du froid.",
        "shortDescription": "Métier sous très forte tension de recrutement sur Energierecrute, ce spécialiste assure le fonctionnement des systèmes thermodynamiques frigorifiques et le respect strict des réglementations sur les gaz à effet de serre.",
        "longDescription": "Comme en témoignent les très nombreuses offres publiées sur Energierecrute par les géants des services énergétiques et du froid (Carrier, Daikin, Dalkia, Engie Solutions, Clauger, Johnson Controls), le technicien frigoriste maîtrise le cycle thermodynamique de compression de vapeur. Il installe et règle des centrales de froid négatif pour l'agroalimentaire, des rooftops pour centres commerciaux, des groupes d'eau glacée pour hôpitaux ou des data centers. Titulaire de l'attestation d'aptitude aux fluides frigorigènes, il traque la moindre micro-fuite, récupère les gaz fluorés en circuit fermé et opère la transition vers les fluides naturels (CO2, ammoniac, hydrocarbures R290) à faible impact d'effet de serre.",
        "mainObjective": "Maintenir la performance thermodynamique et la continuité de fonctionnement des installations frigorifiques et climatiques sans émission de gaz à effet de serre.",
        "companyRole": "Garant du confort climatique, de la préservation de la chaîne alimentaire et de l'efficacité énergétique frigorifique.",
        "workEnvironment": [
            "🏬 Grandes surfaces commerciales, entrepôts logistiques frigorifiques et industries agroalimentaires",
            "🏥 Bâtiments tertiaires, cliniques, data centers et tours de bureaux",
            "🚐 Itinérance quotidienne en véhicule d'intervention outillé et astreintes froid 24h/24"
        ],
        "missions": [
            "Poser, raccorder et braser sous flux d'azote les circuits frigorifiques en cuivre de fortes épaisseurs",
            "Mettre en service les installations frigorifiques (tirage au vide, charge en fluide frigorigène, réglage des détendeurs)",
            "Diagnostiquer les dysfonctionnements thermodynamiques (manque de charge, incondensables, clapets de compresseur cassés)",
            "Réaliser la maintenance préventive (contrôle d'étanchéité périodique F-Gas, nettoyage des condenseurs, analyse d'huile)",
            "Régler les régulateurs électroniques et optimiser les températures d'évaporation pour réduire la facture électrique"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Diagnostic d'une alarme température haute",
                "desc": "Intervention d'urgence sur la chambre froide négative d'une plateforme logistique : détection d'un détendeur électronique bloqué fermé et remplacement de la tête motrice."
            },
            {
                "time": "10:45",
                "title": "Contrôle réglementaire F-Gas",
                "desc": "Recherche de fuite au détecteur électronique d'halogènes sur une centrale froid au R134a d'un hôpital et signature du registre CERFA dématérialisé."
            },
            {
                "time": "13:30",
                "title": "Mise en service d'une pompe à chaleur",
                "desc": "Tirage au vide poussé sous 200 microns sur une PAC tertiaire réversible de 80 kW, charge en gaz R32 et mesure des surchauffes et sous-refroidissements."
            },
            {
                "time": "16:00",
                "title": "Optimisation des paramètres de nuit",
                "desc": "Programmation de la régulation de pression de condensation flottante pour abaisser la consommation électrique nocturne du groupe d'eau glacée."
            }
        ],
        "skills": {
            "technical": [
                "Thermodynamique appliquée au froid (diagramme enthalpique de Mollier, surchauffe, sous-refroidissement)",
                "Brasage fort sous atmosphère neutre (azote) et tuyauterie cuivre frigorifique",
                "Électrotechnique et schémas électriques de puissance et régulation CVC",
                "Attestation d'aptitude à la manipulation des fluides frigorigènes (Catégorie 1 obligatoire)"
            ],
            "human": [
                "Sens aigu du diagnostic logique et esprit de déduction rapide",
                "Autonomie complète sur la route et gestion rigoureuse de son stock de pièces",
                "Orientation client et diplomatie lors des situations de panne bloquante"
            ],
            "tools": [
                "Manomètres électroniques numériques (manifolds connectés Bluetooth)",
                "Pompes à tirage au vide double étage et vacuomètres électroniques",
                "Détecteurs de fuites électroniques ultrasensibles et lampes UV",
                "Stations de récupération et bouteilles de transfert de fluide frigorigène"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "CAP / Bac Pro (Bac)",
                    "title": "Bac Pro Technicien du Froid et Conditionnement d'Air (TFCA)",
                    "desc": "Acquisition des gestes de brasage, de pose de tuyauterie et d'électricité de base."
                },
                {
                    "step": "Attestation d'Aptitude Fluides",
                    "title": "Attestation Catégorie 1 (Manipulation des fluides)",
                    "desc": "Habilitation légale indispensable pour manipuler les gaz frigorigènes en circuit fermé."
                },
                {
                    "step": "BTS (Bac +2)",
                    "title": "BTS Fluides Énergies Domotique (BTS FED option B - Génie frigorifique)",
                    "desc": "Maîtrise du dimensionnement des centrales de froid industriel et de la régulation électronique."
                }
            ],
            "schools": [
                {
                    "name": "Lycées professionnels préparant le Bac Pro TFCA et BTS FED — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut Français du Froid Industriel (IFFI - CNAM) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) / Génie Frigorifique — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Attestation d'Aptitude Fluides Frigorigènes Catégorie 1",
                "Habilitation électrique BR/B2V",
                "CACES nacelle PEMP"
            ],
            "schoolSubjects": [
                "Thermodynamique frigorifique",
                "Électrotechnique CVC",
                "Mécanique des compresseurs",
                "Régulation numérique"
            ]
        },
        "career": {
            "sectors": [
                "Entreprises de maintenance multitechnique (Dalkia, ENGIE Solutions, SPIE, Eiffage)",
                "Constructeurs et installateurs frigorifiques (Carrier, Daikin, Johnson Controls, Clauger)",
                "Agroalimentaire, grande distribution et chaîne logistique du froid"
            ],
            "employerTypes": [
                "Installateurs frigorifiques indépendants",
                "Grands groupes d'efficacité énergétique",
                "Plateformes logistiques alimentaires"
            ],
            "evolution": "Technicien frigoriste itinérant ➔ Frigoriste référent technique ➔ Chef d'équipe génie climatique ➔ Chargé d'affaires froid industriel ➔ Chef d'entreprise",
            "pros": "Plein emploi garanti (pénurie majeure de profils), autonomie avec véhicule de service, forte dimension technique de déduction logique.",
            "cons": "Astreintes week-end et nuit pour préserver la nourriture dans les chambres froides, manipulations de pièces lourdes."
        },
        "gettingStarted": {
            "beginnerProject": "Observer le cycle frigorifique d'un réfrigérateur domestique (compresseur, condenseur, détente, évaporateur).",
            "intermediateProject": "Tracer un cycle frigorifique classique sur un diagramme de Mollier (pression-enthalpie).",
            "advancedProject": "Calculer le coefficient d'efficacité frigorifique (COP froid) d'un groupe d'eau glacée de 50 kW.",
            "portfolioIdeas": [
                "Photos de brasages cuivre sous azote réussis",
                "Rapport de mise en service d'une pompe à chaleur réversible"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des algorithmes de maintenance prédictive détectent les micro-fuites de gaz et les encrassements d'échangeurs avant toute interruption de froid.",
            "automatedTasks": [
                "Détection précoce de dérive de surchauffe",
                "Télé-réglage automatique des consignes de nuit"
            ],
            "emergingSkills": [
                "Utilisation de manifolds numériques connectés au cloud pour auto-diagnostic"
            ],
            "humanEdge": "La dextérité manuelle du brasage de tuyauteries et le flair du technicien pour repérer une vibration suspecte."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le technicien frigoriste est au cœur de l'économie nationale : il préserve les milliers de tonnes de poisson frais débarquées au Port de Dakar, à Mbour et à Saint-Louis, climatise les data centers et banques de la capitale, et garantit la conservation des vaccins et médicaments dans les centres de santé de l'intérieur du pays sous plus de 40°C.",
            "localSectors": [
                "Entrepôts frigorifiques du Port Autonome de Dakar (PAD)",
                "Industries de transformation halieutique (conserveries, mareyeurs)",
                "Grandes surfaces, hôtellerie et tertiaire (Dakar, Saly)"
            ],
            "remoteWork": "Non compatible (interventions physiques indispensables sur site et en ateliers).",
            "entrepreneurship": "Création d'une société d'installation de chambres froides solaires pour les coopératives maraîchères des Niayes."
        },
        "relatedJobSlugs": [
            "technicien-etudes-thermiques-batiment",
            "charge-affaires-energetique-cvc",
            "energy-manager-auditeur-energetique"
        ],
        "connectedFamilies": [
            "btp-architecture",
            "industrie-mecanique"
        ],
        "resources": [
            {
                "type": "guide",
                "title": "Métiers du froid et de la climatisation — Energierecrute",
                "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php",
                "source": "Energierecrute"
            },
            {
                "type": "portail",
                "title": "Snefcca — Syndicat national des entreprises du froid",
                "url": "https://www.snefcca.com/",
                "source": "Snefcca"
            }
        ],
        "sources": [
            "Energierecrute",
            "Snefcca",
            "IFFI",
            "ESP Dakar"
        ],
        "interests": [
            "technique-outils",
            "construire-fabriquer"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Un technicien frigoriste ne 'fabrique pas du froid' : il extrait la chaleur présente dans un local fermé et l'évacue vers l'extérieur grâce aux changements d'état d'un fluide thermodynamique.",
            "pourquoi": "Le froid n'est physiquement rien d'autre que l'absence de chaleur.",
            "a_retenir": "Le spécialiste indispensable qui protège notre alimentation et notre confort thermique."
        }
    },
    {
        "id": "energy-manager-auditeur-energetique",
        "slug": "energy-manager-auditeur-energetique",
        "title": "Energy Manager & Auditeur Énergétique / ISO 50001 / MEER",
        "aliases": [
            "Responsable performance énergétique",
            "Auditeur énergétique certifié",
            "Consultant efficacité énergétique industrielle"
        ],
        "icon": "📊",
        "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Maîtrise de l'Énergie, Audit & Performance MEER",
        "domainId": "maitrise-energie-audit-meer",
        "subdomain": "Audit énergétique & Décarbonation industrielle",
        "energyTechnology": [
            "Norme de management de l'énergie ISO 50001",
            "Plans de comptage & Indicateurs de Performance Énergétique (IPÉ)",
            "Récupération de chaleur fatale industrielle"
        ],
        "energySector": "Sobriété, Efficacité & Stratégie Bas-Carbone",
        "sourceEnergierecrute": true,
        "isEmerging": true,
        "level": "Bac +3 (Licence Pro MEER) à Bac +5 (Ingénieur en Énergétique / Master Management de l'Énergie)",
        "salary": "🇫🇷 France : 2 900 - 4 800 € net/mois (~40 000 - 70 000 € brut/an, Source : Energierecrute / APEC) • 🇸🇳 Sénégal : 500 000 - 1 600 000 FCFA / mois (Industries cimentières, brasseries, grands hôtels, programmes ASER/ANER)",
        "simpleDefinition": "L'Energy Manager analyse les consommations énergétiques d'entreprises ou de collectivités, traque les gaspillages, met en place la norme ISO 50001 et conçoit des plans d'investissement pour réduire durablement la facture et l'empreinte carbone.",
        "shortDescription": "Pilier de la transition énergétique valorisé par Energierecrute, ce cadre technico-économique transforme la sobriété et l'efficacité énergétique en leviers majeurs de rentabilité financière.",
        "longDescription": "Comme décrit au sein des cursus spécialisés en Maîtrise de l'Énergie et Énergies Renouvelables (MEER) documentés sur Energierecrute, l'Energy Manager (gestionnaire de l'énergie) est le chef d'orchestre de la décarbonation des usines et des parcs immobiliers tertiaires. Il cartographie les usages énergétiques significatifs (fours, compresseurs d'air, groupes froids, éclairage), installe des capteurs connectés pour suivre les consommations en temps réel et calcule des Indicateurs de Performance Énergétique (IPÉ). Il bâtit des plans d'actions pluriannuels chiffrés, mobilise les mécanismes de financement (Certificats d'Économies d'Énergie - CEE en France, fonds climat internationaux en Afrique) et fédère les salariés autour des éco-gestes.",
        "mainObjective": "Réduire de 15% à 40% la consommation globale d'énergie primaire d'un site industriel ou tertiaire tout en augmentant sa compétitivité.",
        "companyRole": "Pilote stratégique de la décarbonation, de la conformité réglementaire (Décret Tertiaire) et des économies financières d'énergie.",
        "workEnvironment": [
            "🏭 Sites industriels consommateurs intensifs d'énergie (agroalimentaire, chimie, métallurgie, cimenteries)",
            "🏢 Sièges de grandes entreprises tertiaires ou cabinets de conseil en transition écologique",
            "💻 Analyse poussée de données énergétiques et tableaux de bord de supervision"
        ],
        "missions": [
            "Réaliser des audits énergétiques instrumentés conformément aux normes réglementaires (NF EN 16247)",
            "Déployer et pérenniser le Système de Management de l'Énergie selon la norme internationale ISO 50001",
            "Mettre en place un plan de sous-comptage énergétique communicant et définir des indicateurs de performance (IPÉ)",
            "Identifier et chiffrer les gisements d'économies d'énergie (récupération de chaleur fatale, variateurs de vitesse, isolation)",
            "Monter les dossiers de subventions et valoriser les Certificats d'Économies d'Énergie (CEE)"
        ],
        "typicalDay": [
            {
                "time": "08:45",
                "title": "Analyse du tableau de bord énergétique",
                "desc": "Examen des dérives nocturnes de consommation : détection d'une fuite d'air comprimé persistante sur la ligne d'embouteillage grâce à la télé-relève."
            },
            {
                "time": "10:30",
                "title": "Visite technique de chaufferie industrielle",
                "desc": "Mesure des températures de fumées de la chaudière vapeur et calcul du gain financier potentiel de l'installation d'un économiseur-condenseur."
            },
            {
                "time": "14:00",
                "title": "Comité de pilotage ISO 50001",
                "desc": "Présentation à la direction générale des résultats du premier semestre : -12% d'électricité consommée par tonne produite."
            },
            {
                "time": "16:30",
                "title": "Montage d'un dossier de financement CEE",
                "desc": "Finalisation de la demande de subvention pour la mise en place d'une isolation thermique de vannes (matelas isolants) sur le réseau de vapeur."
            }
        ],
        "skills": {
            "technical": [
                "Thermodynamique industrielle et utilités d'usine (vapeur, air comprimé, froid, électricité)",
                "Normes d'audit et de management de l'énergie (ISO 50001, NF EN 16247, Décret Tertiaire)",
                "Instrumentation et métrologie énergétique (pinces ampèremétriques, caméras thermiques, débitmètres)",
                "Analyse financière de projets (calcul de ROI, VAN, TRI, valorisation des CEE)"
            ],
            "human": [
                "Capacité de conviction et pédagogie auprès des opérateurs comme des directions générales",
                "Rigueur analytique et esprit de synthèse pour exploiter de grands volumes de données",
                "Culture de l'amélioration continue et du changement durable des comportements"
            ],
            "tools": [
                "Logiciels d'Energy Management System (Metron, Qualisteo, Dapesco, Energis)",
                "Caméras thermiques infrarouges de diagnostic (FLIR, Fluke)",
                "Enregistreurs de puissance électrique et wattmètres communicants",
                "Détecteurs de fuites d'air comprimé par ultrasons"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "BTS / BUT (Bac +2/+3)",
                    "title": "BTS MEER (Maîtrise de l'Énergie) ou BUT MT2E",
                    "desc": "Bases solides en métrologie thermique, bilans énergétiques et énergies renouvelables."
                },
                {
                    "step": "Licence Pro (Bac +3)",
                    "title": "Licence Pro Gestionnaire des Énergies et Éco-Efficacité",
                    "desc": "Formation ciblée sur l'audit énergétique NF EN 16247 et le management ISO 50001."
                },
                {
                    "step": "Master / Diplôme d'Ingénieur (Bac +5)",
                    "title": "Ingénieur en Efficacité Énergétique ou Master Management de l'Énergie",
                    "desc": "Accès aux postes d'Energy Manager groupe et de consultant senior en décarbonation."
                }
            ],
            "schools": [
                {
                    "name": "IUT et Universités proposant la filière MEER et MT2E — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Écoles d'ingénieurs (Polytech, INSA, EPF, Mines de Nantes) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) / Licence Pro MEER — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Université Gaston Berger de Saint-Louis (UGB) / Master Énergies — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certified Energy Manager (CEM) - Association of Energy Engineers",
                "Auditeur Énergétique Certifié OPQIBI 1905",
                "Auditeur Interne ISO 50001"
            ],
            "schoolSubjects": [
                "Thermodynamique des procédés",
                "Comptabilité carbone",
                "Métrologie énergétique",
                "Financement de projet"
            ]
        },
        "career": {
            "sectors": [
                "Industries manufacturières lourdes (sidérurgie, cimenteries, chimie, agroalimentaire)",
                "Cabinets de conseil en transition énergétique et bureaux d'études",
                "Grandes foncières immobilières et bailleurs sociaux",
                "Collectivités territoriales"
            ],
            "employerTypes": [
                "Sociétés de conseil en ingénierie énergétique",
                "Grands groupes industriels internationaux",
                "Services techniques de métropoles"
            ],
            "evolution": "Auditeur énergétique junior ➔ Energy Manager de site industriel ➔ Directeur de la performance énergétique groupe ➔ Directeur RSE & Décarbonation",
            "pros": "Impact direct et immédiatement mesurable sur la réduction du CO2, double casquette technique et financière stimulante, très forte demande.",
            "cons": "Résistance au changement possible dans les ateliers, pression sur la rentabilité financière des investissements."
        },
        "gettingStarted": {
            "beginnerProject": "Relever les consommations électriques de son foyer sur 6 mois et identifier les 3 postes les plus gourmands.",
            "intermediateProject": "Réaliser le bilan thermique simplifié d'un bureau avec une caméra thermique infrarouge.",
            "advancedProject": "Calculer le temps de retour sur investissement d'un variateur de vitesse sur un moteur de pompe de 45 kW.",
            "portfolioIdeas": [
                "Rapport d'audit énergétique blanc conforme NF EN 16247",
                "Tableau de bord Excel d'Indicateurs de Performance Énergétique (IPÉ)"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA analyse en temps réel les données de centaines de capteurs pour modéliser la ligne de base énergétique et signaler instantanément toute anomalie.",
            "automatedTasks": [
                "Calcul automatisé de la ligne de base énergétique (Baseline)",
                "Détection des dérives de consommation hors heures de production"
            ],
            "emergingSkills": [
                "Utilisation de plateformes cloud d'Energy Analytics pilotées par IA"
            ],
            "humanEdge": "La capacité à mobiliser les équipes de terrain, changer les habitudes de travail et négocier les budgets avec la direction."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'Agence pour l'Économie et la Maîtrise de l'Énergie (AEME) impulse des audits énergétiques obligatoires pour les gros consommateurs industriels (cimenteries Sococim et Dangote, ICS) et le secteur tertiaire (hôtels, banques) afin d'alléger la facture électrique nationale et préserver le réseau Senelec.",
            "localSectors": [
                "AEME (Agence pour l'Économie et la Maîtrise de l'Énergie du Sénégal)",
                "Cimenteries industrielles (Sococim Rufisque, Dangote Pout)",
                "Industries Chimiques du Sénégal (ICS Darou Khoudoss)"
            ],
            "remoteWork": "Très favorable (visites sur sites pour mesures puis analyse de données et rédaction en télétravail).",
            "entrepreneurship": "Création d'un cabinet d'audit énergétique et de conseil en efficacité énergétique industrielle pour la sous-région UEMOA."
        },
        "relatedJobSlugs": [
            "technicien-etudes-energetiques-industrielles",
            "technico-commercial-solutions-energetiques",
            "chef-projet-energie-solaire-photovoltaique"
        ],
        "connectedFamilies": [
            "finance-fintech",
            "droit-management"
        ],
        "resources": [
            {
                "type": "guide",
                "title": "Formation MEER et métiers de l'efficacité énergétique — Energierecrute",
                "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php",
                "source": "Energierecrute"
            },
            {
                "type": "portail",
                "title": "AEE — Association of Energy Engineers",
                "url": "https://www.aeecenter.org/",
                "source": "AEE"
            }
        ],
        "sources": [
            "Energierecrute",
            "ADEME",
            "AEME Sénégal",
            "AEE"
        ],
        "interests": [
            "donnees-chiffres",
            "nature-environnement",
            "droit-politique"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Dans une usine classique, jusqu'à 30% de l'électricité consommée par les compresseurs d'air comprimé est gaspillée dans des micro-fuites invisibles et inaudibles sur les canalisations.",
            "pourquoi": "Un simple audit par caméra acoustique ultra-sons permet d'économiser des dizaines de milliers d'euros dès la première semaine de réparation.",
            "a_retenir": "Le détective de l'énergie qui traque les kilowattheures gaspillés."
        }
    },
    {
        "id": "trader-energie-analyste-marches",
        "slug": "trader-energie-analyste-marches",
        "title": "Trader en Énergie & Analyste des Marchés de Gros / Epex Spot / EEX",
        "aliases": [
            "Opérateur de marché électricité et gaz",
            "Analyste quantitatif énergie",
            "Portfolio manager énergie renouvelable"
        ],
        "icon": "📈",
        "image": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Marchés, Trading & Économie de l'Énergie",
        "domainId": "marches-trading-economie-energie",
        "subdomain": "Trading d'électricité & Gaz / Marchés de capacité",
        "energyTechnology": [
            "Bourses de l'électricité (EPEX SPOT, EEX)",
            "Contrats PPA (Power Purchase Agreements)",
            "Certificats de garanties d'origine et quotas carbone ETS"
        ],
        "energySector": "Finance de l'Énergie & Négociation de Gros",
        "sourceEnergierecrute": true,
        "isEmerging": false,
        "level": "Bac +5 (Master Finance / Économie de l'énergie, Grande École d'Ingénieurs ou de Commerce)",
        "salary": "🇫🇷 France : 4 000 - 8 000 € net/mois (~55 000 - 120 000 € brut/an hors bonus, Source : Energierecrute / APEC) • 🇸🇳 Sénégal : N/A (Marché régional WAPP / EEEOA à Cotonou : 800 000 - 2 500 000 FCFA)",
        "simpleDefinition": "Le trader en énergie achète et vend de l'électricité, du gaz et des quotas carbone sur les bourses de gros pour optimiser le portefeuille de production de son entreprise, couvrir les risques de volatilité des prix et valoriser la production renouvelable.",
        "shortDescription": "Profil hautement stratégique à la croisée de la physique et de la finance valorisé par Energierecrute, ce spécialiste négocie des mégawattheures en temps réel sur les marchés européens et mondiaux.",
        "longDescription": "Comme l'illustrent les offres d'opérateurs énergétiques et de traders spécialisés publiées sur Energierecrute (EDF Trading, TotalEnergies Gas & Power, Engie Global Energy Management, Axpo, Statkraft), le trader en énergie opère sur les marchés spot (Day-Ahead, Intraday) et à terme (Futures). Il arbitre en continu entre le coût marginal de démarrage d'une centrale, les prévisions météorologiques de vent et de soleil, le niveau de remplissage des barrages hydroélectriques et le prix des matières premières (gaz, charbon, quotas de CO2). Il négocie également des contrats de gré à gré à long terme (PPA) pour sécuriser le financement de nouveaux parcs photovoltaïques sans subventions d'État.",
        "mainObjective": "Maximiser les marges financières de valorisation de l'énergie produite tout en sécurisant l'approvisionnement des clients contre les flambées de cours.",
        "companyRole": "Générateur de marge financière et gestionnaire des risques de marché de l'énergéticien.",
        "workEnvironment": [
            "🏢 Salles de marché (trading floors) ultra-connectées des grands producteurs et fournisseurs d'énergie",
            "💻 Terminaux boursiers multi-écrans avec flux de cotations en temps réel (Bloomberg, Reuters Eikon)",
            "🌐 Interaction permanente avec les bourses européennes (EPEX SPOT, EEX, ICE)"
        ],
        "missions": [
            "Acheter et vendre de l'électricité et du gaz sur les marchés Day-Ahead et Intraday pour équilibrer le périmètre responsable d'équilibre",
            "Modéliser et anticiper les prix de l'électricité à partir des prévisions météorologiques (vent, ensoleillement, températures)",
            "Structurer et négocier des contrats de vente d'électricité renouvelable à long terme (Corporate PPA) avec de grands clients industriels",
            "Couvrir les risques de volatilité tarifaire et gérer le portefeuille d'actifs de production (dispatch économique)",
            "Négocier les quotas d'émissions de CO2 (système communautaire d'échange de quotas d'émission - EU ETS) et les Garanties d'Origine"
        ],
        "typicalDay": [
            {
                "time": "07:15",
                "title": "Revue météo et analyse de marché",
                "desc": "Examen des prévisions de vent pour l'Allemagne et la France : coup de vent attendu à 14h faisant chuter le cours spot de l'électricité."
            },
            {
                "time": "09:30",
                "title": "Enchère journalière Day-Ahead",
                "desc": "Passage des ordres d'achat et de vente d'électricité pour chaque heure du lendemain sur la plateforme d'enchères EPEX SPOT."
            },
            {
                "time": "12:30",
                "title": "Trading Intraday en continu",
                "desc": "Ajustement en temps réel des positions suite à l'arrêt imprévu d'une tranche thermique : rachat de 100 MW sur le marché infrajournalier pour éviter les pénalités de déséquilibre."
            },
            {
                "time": "15:30",
                "title": "Structuration d'un PPA solaire",
                "desc": "Simulation financière de la valorisation sur 15 ans d'une future ferme solaire de 50 MWc avec intégration d'une clause de plancher de prix."
            }
        ],
        "skills": {
            "technical": [
                "Fonctionnement des bourses de l'électricité et du gaz (EPEX SPOT, EEX, ICE, mécanisme de capacité)",
                "Mathématiques financières appliquées, calcul stochastique et valorisation d'options",
                "Programmation en Python pour le trading algorithmique et l'analyse quantitative (Pandas, Numpy, SQL)",
                "Compréhension approfondie du système électrique européen et du comportement des fondamentaux (météo, centrales, interconnexions)"
            ],
            "human": [
                "Résistance exceptionnelle au stress et rapidité de décision sous contrainte de temps",
                "Esprit de compétition et forte appétence pour les chiffres et les dynamiques de marché",
                "Discipline stricte dans l'application des limites de risque financier (Value at Risk - VaR)"
            ],
            "tools": [
                "Terminaux financiers professionnels (Bloomberg Terminal, Refinitiv Eikon)",
                "Plateformes d'exécution boursière d'énergie (Trayport, EPEX Trading System)",
                "Modèles quantitatifs de prévision de prix sous Python et R",
                "Logiciels d'Energy Trading and Risk Management (ETRM - Allegro, Openlink Endur)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Classes Préparatoires / Licence (Bac +3)",
                    "title": "CPGE Mathématiques / Économie ou Licence d'Économétrie",
                    "desc": "Acquisition d'une solide rigueur quantitative en modélisation mathématique et statistiques."
                },
                {
                    "step": "Master / Diplôme de Grande École (Bac +5)",
                    "title": "Grande École d'Ingénieurs, Grande École de Commerce ou Master Finance / Énergie",
                    "desc": "Spécialisation en marchés financiers de l'énergie, calcul stochastique et régulation européenne."
                },
                {
                    "step": "Certification de Marché",
                    "title": "Agrément d'opérateur de marché boursier (EPEX SPOT / EEX Trader Exam)",
                    "desc": "Examen officiel requis pour obtenir le droit de passer des ordres directs sur les bourses de l'électricité."
                }
            ],
            "schools": [
                {
                    "name": "Grandes Écoles d'Ingénieurs (Polytechnique, Mines Paris, CentraleSupélec, Ponts) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Grandes Écoles de Commerce (HEC Paris, ESSEC, ESCP) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Paris Dauphine / Toulouse School of Economics (TSE) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) / EPT Thiès — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Trader Examination EPEX SPOT / EEX",
                "Certification CFA (Chartered Financial Analyst)",
                "Certification ETRM Risk Management"
            ],
            "schoolSubjects": [
                "Microéconomie de l'énergie",
                "Calcul stochastique",
                "Séries temporelles & Python",
                "Droit des marchés financiers"
            ]
        },
        "career": {
            "sectors": [
                "Pôles trading des énergéticiens mondiaux (TotalEnergies, ENGIE, EDF Trading, Statkraft)",
                "Boutiques indépendantes de trading de matières premières (Vitol, Trafigura, Gunvor)",
                "Banques d'investissement et fonds spéculatifs énergie"
            ],
            "employerTypes": [
                "Salles de marché d'énergéticiens",
                "Négociants internationaux en matières premières",
                "Bourses de l'énergie"
            ],
            "evolution": "Analyste quantitatif junior ➔ Trader Day-Ahead ➔ Senior Trader Cross-Commodity ➔ Head of Energy Trading ➔ Directeur des risques de marché",
            "pros": "Rémunération très élevée avec bonus sur performance, adrénaline intellectuelle du direct, dimension internationale.",
            "cons": "Niveau de stress intense, horaires matinaux stricts calés sur les enchères boursières, impact financier immédiat de toute erreur."
        },
        "gettingStarted": {
            "beginnerProject": "Suivre l'évolution quotidienne du prix spot de l'électricité en France sur le site public d'EPEX SPOT.",
            "intermediateProject": "Corréler sous Excel ou Python les variations de température hivernales avec les cours de l'électricité.",
            "advancedProject": "Construire un modèle de valorisation d'un contrat PPA solaire sur 10 ans avec actualisation des flux.",
            "portfolioIdeas": [
                "Script Python d'analyse de données de marché EPEX SPOT",
                "Note de conjoncture sur les quotas d'émissions de CO2"
            ]
        },
        "aiImpact": {
            "level": "Révolutionnaire",
            "summary": "Le trading algorithmique (algo-trading) et l'IA exécutent des milliers d'ordres par seconde sur les marchés infrajournaliers dès qu'une prévision météo évolue.",
            "automatedTasks": [
                "Passage d'ordres automatisé à haute fréquence",
                "Extraction automatique de nouvelles géopolitiques impactant le gaz"
            ],
            "emergingSkills": [
                "Programmation de bots de trading énergie sous Python et C++"
            ],
            "humanEdge": "La gestion psychologique du risque extrême, la vision macroéconomique et la négociation humaine des grands contrats bilatéraux."
        },
        "africaContext": {
            "senegalInsight": "En Afrique de l'Ouest, le Système d'Échanges d'Énergie Électrique Ouest-Africain (WAPP/EEEOA) développe un marché régional de gros de l'électricité basé à Cotonou, permettant au Sénégal, à la Côte d'Ivoire et au Ghana de négocier et commercer leurs excédents énergétiques à travers des interconnexions haute tension.",
            "localSectors": [
                "WAPP (Système d'Échanges d'Énergie Électrique Ouest-Africain)",
                "Senelec (Direction des Grands Projets et Achats d'Énergie)",
                "Bureaux de négoce pétrogazier de Dakar"
            ],
            "remoteWork": "Hybride possible (terminaux de marché accessibles en environnement sécurisé).",
            "entrepreneurship": "Création d'un cabinet de courtage en contrats d'achat d'électricité verte (PPA) pour les miniers et industriels africains."
        },
        "relatedJobSlugs": [
            "energy-manager-auditeur-energetique",
            "technicien-exploitation-supervision-reseaux",
            "technico-commercial-solutions-energetiques"
        ],
        "connectedFamilies": [
            "finance-fintech",
            "droit-management"
        ],
        "resources": [
            {
                "type": "guide",
                "title": "Trading d'énergie et finance des marchés — Energierecrute",
                "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php",
                "source": "Energierecrute"
            },
            {
                "type": "portail",
                "title": "EPEX SPOT — Bourse européenne de l'électricité",
                "url": "https://www.epexspot.com/",
                "source": "EPEX SPOT"
            }
        ],
        "sources": [
            "Energierecrute",
            "EPEX SPOT",
            "EEX",
            "WAPP"
        ],
        "interests": [
            "donnees-chiffres",
            "finance-fintech"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Sur les bourses de l'électricité, les prix peuvent parfois devenir négatifs : lors d'un week-end de grand vent et de plein soleil en Allemagne où les usines sont fermées, les producteurs paient littéralement les consommateurs pour qu'ils absorbent les mégawattheures excédentaires !",
            "pourquoi": "Parce qu'arrêter puis redémarrer une centrale thermique coûterait encore plus cher que de payer pour évacuer l'électricité pendant quelques heures.",
            "a_retenir": "Le financier de l'énergie qui valorise chaque électron décarboné au meilleur cours boursier."
        }
    },
    {
        "id": "technico-commercial-solutions-energetiques",
        "slug": "technico-commercial-solutions-energetiques",
        "title": "Technico-Commercial en Solutions Énergétiques & CPE",
        "aliases": [
            "Ingénieur commercial transition énergétique",
            "Responsable développement solutions bas-carbone",
            "Chargé d'affaires contrats de performance énergétique"
        ],
        "icon": "🤝",
        "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Commerce, Vente & Solutions Énergétiques B2B",
        "domainId": "commerce-solutions-energetiques",
        "subdomain": "Contrats de performance énergétique (CPE) & Équipements CVC/Solaire",
        "energyTechnology": [
            "Contrats de Performance Énergétique (CPE)",
            "Autoconsommation solaire B2B en tiers-financement",
            "Solutions de décarbonation globale du bâtiment"
        ],
        "energySector": "Vente de Solutions Énergétiques Complexes B2B",
        "sourceEnergierecrute": true,
        "isEmerging": false,
        "level": "Bac +2 (BTS CCST) à Bac +5 (Ingénieur d'affaires)",
        "salary": "🇫🇷 France : 2 800 - 4 800 € net/mois (~38 000 - 70 000 € brut/an + variable non plafonné, Source : Energierecrute) • 🇸🇳 Sénégal : 450 000 - 1 500 000 FCFA / mois (Fournisseurs d'équipements solaires industriels, climatisation B2B)",
        "simpleDefinition": "Le technico-commercial en solutions énergétiques prospecte, conçoit et vend des offres techniques d'économies d'énergie (ombrières photovoltaïques, modernisation CVC, contrats de performance énergétique garantie) à des entreprises et collectivités.",
        "shortDescription": "Profil pivot du développement commercial présent en masse sur Energierecrute, il combine expertise thermique/électrique et force de persuasion pour faire signer des projets éco-responsables à fort retour sur investissement.",
        "longDescription": "Comme mis en avant dans les catégories 'Commercial / Vente' d'Energierecrute chez les installateurs et groupes de services (Dalkia, Spie, Engie, Schneider Electric, TotalEnergies, fabricants de pompes à chaleur et de panneaux solaires), le technico-commercial B2B ne vend pas un simple produit mais une solution globale de performance. Il audite les installations de ses clients industriels, tertiaires ou collectivités, conçoit avec le bureau d'études une offre clé en main intégrant travaux, maintenance et garantie d'économies d'énergie (CPE), monte le plan de financement (avec subventions CEE et tiers-financement) et négocie le contrat jusqu'au closing commercial.",
        "mainObjective": "Développer le chiffre d'affaires et la part de marché de son entreprise en proposant des offres d'efficacité énergétique rentables pour le client et à fort impact carbone.",
        "companyRole": "Moteur du développement commercial et ambassadeur des offres de transition énergétique de l'entreprise.",
        "workEnvironment": [
            "🏢 Entreprises clientes (usines, sièges sociaux, hôpitaux, centres commerciaux)",
            "🚗 Déplacements réguliers sur son secteur géographique avec véhicule de fonction",
            "💻 Élaboration d'offres financières et techniques complexes au bureau ou en télétravail"
        ],
        "missions": [
            "Prospecter de nouveaux comptes clients B2B (directeurs techniques, directeurs d'usines, élus locaux)",
            "Visiter les sites clients pour identifier les gisements d'économies d'énergie et qualifier les besoins",
            "Élaborer des propositions commerciales et financières complexes (CPE, tiers-investissement photovoltaïque, CEE)",
            "Soutenir et défendre l'offre technique en soutenance devant les comités de direction des clients",
            "Assurer le suivi de la satisfaction client et fidéliser son portefeuille par des avenants de services"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Prospection et ciblage de comptes industriels",
                "desc": "Qualification téléphonique de directeurs d'usines agroalimentaires pour leur proposer une offre de récupération de chaleur fatale financée par CEE."
            },
            {
                "time": "10:30",
                "title": "Visite technique chez un client",
                "desc": "Relevé des caractéristiques de toiture d'un entrepôt logistique de 15 000 m² pour dimensionner un projet de centrale solaire en autoconsommation."
            },
            {
                "time": "14:30",
                "title": "Montage de l'offre avec le bureau d'études",
                "desc": "Calcul du temps de retour sur investissement (TRI de 4,2 ans) et intégration de la garantie de performance énergétique."
            },
            {
                "time": "16:45",
                "title": "Soutenance commerciale",
                "desc": "Présentation en visioconférence devant le comité de direction d'un groupe hôtelier pour le remplacement de leurs groupes froids par des pompes à chaleur thermodynamiques."
            }
        ],
        "skills": {
            "technical": [
                "Technologies de l'énergie (CVC, photovoltaïque, éclairage LED, régulation GTB)",
                "Montage financier et contractuel des Contrats de Performance Énergétique (CPE)",
                "Mécanismes de subventions et aides d'État (CEE, MaPrimeRénov' Sérénité, fonds chaleur ADEME)",
                "Techniques de vente consultative complexe B2B et négociation grand compte"
            ],
            "human": [
                "Aisance relationnelle, sens de l'écoute active et force de persuasion",
                "Ténacité, persévérance et sens du résultat commercial",
                "Capacité à vulgariser des concepts techniques pointus pour des décideurs non-techniciens"
            ],
            "tools": [
                "Logiciels de gestion de la relation client CRM (Salesforce, HubSpot)",
                "Outils de simulation technico-économique de rentabilité énergétique",
                "Simulateurs de gisements et de calcul de Certificats d'Économies d'Énergie",
                "Outils de présentation commerciale percutants"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "BTS (Bac +2)",
                    "title": "BTS CCST (Conseil et Commercialisation de Solutions Techniques)",
                    "desc": "Double formation technique et commerciale pour négocier des équipements industriels."
                },
                {
                    "step": "Licence Pro (Bac +3)",
                    "title": "Licence Pro Commercialisation des Équipements de l'Énergie",
                    "desc": "Spécialisation dans les montages de vente B2B photovoltaïques et génie climatique."
                },
                {
                    "step": "Master / Ingénieur d'Affaires (Bac +5)",
                    "title": "Master Ingénierie d'Affaires ou Double diplôme Ingénieur-Manager",
                    "desc": "Accès aux postes de Key Account Manager et grands contrats de décarbonation industrielle."
                }
            ],
            "schools": [
                {
                    "name": "Lycées et CFA préparant le BTS CCST et BTS FED — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Écoles d'ingénieurs d'affaires (ESTA Belfort, Hybria Lyon, Kedge) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) / Gestion & Commerce — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "BEM Dakar (Bordeaux Management School) / IAM Dakar — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification Négociation Commerciale Complexe B2B",
                "Habilitation Certificats d'Économies d'Énergie (CEE)",
                "Certification Vente de CPE Ademe"
            ],
            "schoolSubjects": [
                "Techniques de vente B2B",
                "Génie énergétique de base",
                "Analyse financière de rentabilité",
                "Droit des contrats commerciaux"
            ]
        },
        "career": {
            "sectors": [
                "Distributeurs de matériel électrique et EnR (Rexel, Sonepar, CEDEO)",
                "Installateurs et intégrateurs photovoltaïques et CVC",
                "Sociétés de services énergétiques (Dalkia, ENGIE, SPIE, TotalEnergies Solutions)",
                "Fabricants d'équipements de chauffage et climatisation"
            ],
            "employerTypes": [
                "Installateurs régionaux",
                "Négociants grossistes en matériel technique",
                "Grands énergéticiens"
            ],
            "evolution": "Technico-commercial junior ➔ Responsable de secteur commercial ➔ Key Account Manager (Grands Comptes) ➔ Directeur commercial régional ➔ Directeur du développement",
            "pros": "Rémunération très stimulante avec primes variables, autonomie d'organisation, fierté de signer des contrats qui réduisent le carbone.",
            "cons": "Pression sur les objectifs de vente trimestriels, déplacements routiers fréquents."
        },
        "gettingStarted": {
            "beginnerProject": "Comparer les fiches techniques de 3 pompes à chaleur pour en extraire les arguments commerciaux clés.",
            "intermediateProject": "Construire un argumentaire de vente pour convaincre un chef d'entreprise d'installer des panneaux solaires sur son toit.",
            "advancedProject": "Rédiger une offre commerciale complète de Contrat de Performance Énergétique (CPE) avec garantie de résultat chiffrée.",
            "portfolioIdeas": [
                "Proposition commerciale fictive de centrale solaire en autoconsommation",
                "Simulation financière de temps de retour sur investissement (TRI)"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'IA générative rédige les premières ébauches de propositions techniques et qualifie automatiquement les prospects ayant le plus fort potentiel d'économies d'énergie.",
            "automatedTasks": [
                "Scoring prédictif des entreprises consommatrices",
                "Génération automatique des récapitulatifs de devis"
            ],
            "emergingSkills": [
                "Utilisation d'assistants CRM pilotés par IA pour la relance commerciale ciblée"
            ],
            "humanEdge": "La confiance interpersonnelle, l'empathie et la force de conviction en face à face qui emportent la décision du client."
        },
        "africaContext": {
            "senegalInsight": "À Dakar et dans les pôles économiques du Sénégal, les technico-commerciaux en solutions énergétiques sont très recherchés pour vendre des installations solaires en toiture et des climatisations éco-efficaces aux banques, hôtels de la Petite Côte, centres d'appels et usines, afin de sécuriser leur approvisionnement face aux hausses de tarifs de l'électricité.",
            "localSectors": [
                "Fournisseurs de kits solaires et de batteries (Ténergie, Nadji Bi, Solektra)",
                "Distributeurs de climatisation et génie frigorifique (CFAO Sénégal, Matforce)",
                "Bureaux de conseil en financement vert"
            ],
            "remoteWork": "Hybride (visites clients sur le terrain et télétravail pour le CRM et les offres).",
            "entrepreneurship": "Création d'une agence de courtage en équipements d'énergie renouvelable et de solutions de tiers-financement solaire pour les PME."
        },
        "relatedJobSlugs": [
            "energy-manager-auditeur-energetique",
            "chef-projet-energie-solaire-photovoltaique",
            "charge-affaires-energetique-cvc"
        ],
        "connectedFamilies": [
            "commerce-marketing",
            "droit-management"
        ],
        "resources": [
            {
                "type": "guide",
                "title": "Vente et commerce des solutions énergétiques — Energierecrute",
                "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php",
                "source": "Energierecrute"
            },
            {
                "type": "portail",
                "title": "ADEME — Contrats de Performance Énergétique",
                "url": "https://www.ademe.fr/",
                "source": "ADEME"
            }
        ],
        "sources": [
            "Energierecrute",
            "ADEME",
            "FEDENE"
        ],
        "interests": [
            "commerce-marketing",
            "contact-humain",
            "technique-outils"
        ],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Dans un Contrat de Performance Énergétique (CPE), le vendeur s'engage contractuellement sur un pourcentage d'économies garanti : si l'usine n'atteint pas l'économie promise, l'entreprise prestataire paie elle-même la différence de facture au client !",
            "pourquoi": "Cet engagement juridique audacieux lève tous les doutes des directeurs financiers et déclenche les investissements.",
            "a_retenir": "Le négociateur qui rend la transition écologique immédiatement rentable pour les entreprises."
        }
    },
    {
        "id": "responsable-hse-sites-energetiques",
        "slug": "responsable-hse-sites-energetiques",
        "title": "Responsable HSE & Sécurité Industrielle sur Sites Énergétiques",
        "aliases": [
            "Ingénieur Hygiène Sécurité Environnement énergie",
            "Responsable prévention des risques industriels",
            "Coordonnateur SPS énergie"
        ],
        "icon": "🦺",
        "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Hygiène, Sécurité, Environnement & Risques Énergétiques",
        "domainId": "hse-securite-risques-energie",
        "subdomain": "Prévention des risques électriques, chimiques & industriels",
        "energyTechnology": [
            "Consignation électrique (NF C 18-510)",
            "Réglementation ATEX (Atmosphères Explosives)",
            "Systèmes de management intégré ISO 14001 / ISO 45001"
        ],
        "energySector": "Prévention des Risques & Conformité Environnementale",
        "sourceEnergierecrute": true,
        "isEmerging": false,
        "level": "Bac +3 (Licence Pro HSE) à Bac +5 (Master HSE ou Diplôme d'Ingénieur Sécurité Industrielle)",
        "salary": "🇫🇷 France : 2 800 - 4 600 € net/mois (~38 000 - 68 000 € brut/an, Source : Energierecrute / APEC) • 🇸🇳 Sénégal : 450 000 - 1 400 000 FCFA / mois (Plateformes pétrogazières, centrales Senelec, mines)",
        "simpleDefinition": "Le responsable HSE sur sites énergétiques identifie, évalue et prévient l'ensemble des risques d'accidents (électrocution, incendie, explosion ATEX, chutes de hauteur) et les impacts écologiques sur les parcs et centrales de production.",
        "shortDescription": "Sentinelle indispensable de la vie humaine et de l'environnement documentée sur Energierecrute, ce spécialiste impose une culture sécurité exemplaire sur les chantiers et sites d'exploitation énergétique.",
        "longDescription": "Comme rappelé dans la section 'QHSE / Sécurité' d'Energierecrute, le secteur de l'énergie concentre des risques industriels majeurs : hautes tensions mortelles, travail à 120 mètres de hauteur sur les éoliennes, fluides sous haute pression, gaz inflammables (méthanisation, hydrogène) et matières radioactives. Le responsable Hygiène, Sécurité et Environnement (HSE) définit et fait appliquer les politiques de sécurité (ISO 45001) et environnementales (ISO 14001). Il audite les chantiers, anime les causeries sécurité matinales, analyse les causes racines du moindre quasi-accident, organise les exercices d'évacuation d'urgence et s'assure de la conformité réglementaire absolue des installations.",
        "mainObjective": "Viser le 'zéro accident' mortel ou avec arrêt et garantir l'absence totale de pollution industrielle sur les sols, l'eau et l'air.",
        "companyRole": "Garant légal, éthique et opérationnel de la santé des travailleurs et de l'intégrité de l'environnement.",
        "workEnvironment": [
            "⚡ Centrales de production électrique (nucléaires, thermiques, hydrauliques, parcs éoliens)",
            "🦺 Visites et audits fréquents de chantiers de construction et d'intervention haute tension",
            "🏢 Bureau de coordination avec les instances représentatives (CSSCT) et l'inspection du travail"
        ],
        "missions": [
            "Élaborer et actualiser le Document Unique d'Évaluation des Risques Professionnels (DUERP)",
            "Définir les plans de prévention et délivrer les permis de travail spécifiques (permis feu, permis de pénétrer en espace confiné)",
            "Animer les accueils sécurité des nouveaux arrivants et des sous-traitants et piloter les quarts d'heure sécurité",
            "Mener des enquêtes méthodologiques après tout incident ou presqu'accident (méthode de l'arbre des causes)",
            "Superviser la gestion des déchets dangereux (huiles de transformateurs aux PCB, solvants, batteries en fin de vie)"
        ],
        "typicalDay": [
            {
                "time": "07:30",
                "title": "Accueil sécurité des sous-traitants",
                "desc": "Contrôle des habilitations électriques, du port des EPI et briefing sur les risques spécifiques du poste haute tension avant démarrage du chantier."
            },
            {
                "time": "09:30",
                "title": "Visite de sécurité sur le parc éolien",
                "desc": "Audit inopiné sur une éolienne en maintenance : vérification de l'ancrage des lignes de vie, du kit de descente d'urgence et de l'absence de fuite d'huile dans la nacelle."
            },
            {
                "time": "13:30",
                "title": "Analyse d'un quasi-incident",
                "desc": "Animation d'une réunion avec l'équipe de méthanisation suite à un déclenchement inattendu d'un détecteur de gaz H2S sans conséquence corporelle."
            },
            {
                "time": "16:00",
                "title": "Mise à jour du plan d'urgence incendie",
                "desc": "Coordination avec les sapeurs-pompiers locaux pour planifier un exercice conjoint d'extinction d'un transformateur à huile."
            }
        ],
        "skills": {
            "technical": [
                "Réglementation de la sécurité au travail et Code de l'environnement (ICPE)",
                "Risques électriques (norme NF C 18-510, consignation électrique)",
                "Réglementation des atmosphères explosives (Directives ATEX 1999/92/CE et 2014/34/UE)",
                "Normes internationales de management ISO 45001 (santé/sécurité) et ISO 14001 (environnement)"
            ],
            "human": [
                "Autorité naturelle et intransigeance bienveillante sur le respect des règles de sécurité",
                "Sens aigu de la pédagogie et capacité à faire adhérer sans braquer",
                "Sang-froid et méthode d'organisation lors des situations d'urgence"
            ],
            "tools": [
                "Détecteurs multigaz portables (O2, CO, H2S, LIE pour gaz explosifs)",
                "Sonomètres et dosimètres de bruit pour analyse des ambiances sonores",
                "Logiciels de gestion QHSE et de suivi des plans d'actions (Enablon, Cority, Tenor)",
                "Méthodes d'analyse de risques (AMDEC, HAZOP, Arbre des causes)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "BUT / Licence Pro (Bac +3)",
                    "title": "BUT Hygiène Sécurité Environnement (HSE)",
                    "desc": "Formation complète sur les risques professionnels, l'ergonomie et le droit environnemental."
                },
                {
                    "step": "Master / Ingénieur HSE (Bac +5)",
                    "title": "Master Gestion des Risques Industriels ou Ingénieur Sécurité",
                    "desc": "Spécialisation dans les sites Seveso, la modélisation d'explosions et le management QHSE."
                },
                {
                    "step": "Certifications Internationales",
                    "title": "Certifications NEBOSH IGC et Auditeur Lead ISO 45001",
                    "desc": "Les standards mondiaux indispensables pour exercer sur les grands chantiers internationaux."
                }
            ],
            "schools": [
                {
                    "name": "IUT préparant le BUT HSE (Bordeaux, Lorient, Saint-Denis) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Écoles d'ingénieurs en sécurité industrielle (INSA, CESI, Polytech Grenoble) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) / Licence Pro QSE — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "BEM Dakar / Institut Africain de Management (IAM Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "NEBOSH International General Certificate (IGC)",
                "Auditeur Certifié ISO 45001 / ISO 14001",
                "Habilitation Sauveteur Secouriste du Travail (SST)"
            ],
            "schoolSubjects": [
                "Droit du travail & HSE",
                "Toxicologie industrielle",
                "Électricité et ATEX",
                "Management des situations d'urgence"
            ]
        },
        "career": {
            "sectors": [
                "Producteurs et exploitants d'énergie (EDF, ENGIE, TotalEnergies, Senelec)",
                "Chantiers de construction de parcs éoliens et solaires",
                "Infrastructures pétrogazières et chimiques",
                "Bureaux de contrôle et d'audit (Bureau Veritas, Dekra, Apave)"
            ],
            "employerTypes": [
                "Énergéticiens majeurs",
                "Grands constructeurs industriels",
                "Organismes d'inspection technique"
            ],
            "evolution": "Animateur HSE de chantier ➔ Responsable HSE de site de production ➔ Responsable QHSE régional ➔ Directeur Sécurité & Environnement groupe",
            "pros": "Métier qui sauve littéralement des vies, autorité d'arrêt de travail reconnue, mission éthique protectrice de premier plan.",
            "cons": "Devoir gérer des conflits lorsque la sécurité ralentit la production, charge mentale élevée en cas d'accident."
        },
        "gettingStarted": {
            "beginnerProject": "Observer les pictogrammes de sécurité et les extincteurs dans son établissement de formation.",
            "intermediateProject": "Rédiger une analyse de risques d'un travail en hauteur sur toiture avec harnais et ligne de vie.",
            "advancedProject": "Construire un arbre des causes complet pour un accident fictif de contact avec une ligne électrique.",
            "portfolioIdeas": [
                "Exemple de quart d'heure sécurité interactif",
                "Grille d'audit terrain de conformité des EPI"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "La vision par ordinateur analyse en continu les flux de caméras pour repérer le non-port du casque ou l'intrusion d'une personne dans une zone électrique dangereuse.",
            "automatedTasks": [
                "Détection automatique de franchissement de périmètre de sécurité",
                "Analyse prédictive des déclarations de presqu'accidents"
            ],
            "emergingSkills": [
                "Supervision des systèmes de Computer Vision dédiés à la sécurité chantier"
            ],
            "humanEdge": "La pédagogie humaine, la bienveillance et l'écoute nécessaires pour convaincre un ouvrier de ne pas contourner une règle de sécurité."
        },
        "africaContext": {
            "senegalInsight": "Avec l'essor des grands projets énergétiques au Sénégal (centrales solaires de Bokhol et Malicounda, parc éolien de Taïba N'Diaye, centrales thermiques, plateforme pétrolière Sangomar et gazière GTA), la demande d'ingénieurs et de coordinateurs HSE certifiés NEBOSH est explosive pour garantir des standards de sécurité de niveau international.",
            "localSectors": [
                "Grands chantiers énergétiques (Eiffage Énergie, SPIE Sénégal)",
                "Senelec (Direction Prévention et Sécurité)",
                "Pétrosen et consortiums pétrogaziers offshore (Sangomar, GTA)"
            ],
            "remoteWork": "Hybride (présence sur le terrain pour les audits et télétravail pour les procédures et déclarations).",
            "entrepreneurship": "Création d'un cabinet de conseil en formation sécurité industrielle et délivrance de formations certifiantes (NEBOSH, IOSH) pour l'Afrique de l'Ouest."
        },
        "relatedJobSlugs": [
            "responsable-unite-biogaz-methanisation",
            "technicien-maintenance-eolienne",
            "technicien-radioprotection-surete-nucleaire"
        ],
        "connectedFamilies": [
            "droit-management",
            "industrie-mecanique"
        ],
        "resources": [
            {
                "type": "guide",
                "title": "Métiers QHSE et sécurité dans l'énergie — Energierecrute",
                "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php",
                "source": "Energierecrute"
            },
            {
                "type": "portail",
                "title": "INRS — Institut National de Recherche et de Sécurité",
                "url": "https://www.inrs.fr/",
                "source": "INRS"
            }
        ],
        "sources": [
            "Energierecrute",
            "INRS",
            "NEBOSH",
            "Senelec"
        ],
        "interests": [
            "securite-defense",
            "contact-humain",
            "nature-environnement"
        ],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Sur un site de production énergétique, la règle d'or universelle 'Stop Work Authority' autorise et oblige n'importe quel salarié, qu'il soit stagiaire ou sous-traitant, à interrompre immédiatement un travail s'il estime qu'une vie humaine est en danger.",
            "pourquoi": "Parce qu'aucune cadence de production ne vaut la vie d'un être humain.",
            "a_retenir": "La sentinelle du site qui veille à ce que chacun rentre chez soi en bonne santé chaque soir."
        }
    },
    {
        "id": "ingenieur-geologue-exploration-energetique",
        "slug": "ingenieur-geologue-exploration-energetique",
        "title": "Ingénieur Géologue d'Exploration & Ressources Énergétiques",
        "aliases": [
            "Géologue de réservoir géothermie et sous-sol",
            "Géophysicien d'exploration",
            "Ingénieur modélisation géologique du sous-sol"
        ],
        "icon": "🌍",
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Exploration & Ressources Géologiques du Sous-Sol",
        "domainId": "exploration-ressources-sous-sol",
        "subdomain": "Modélisation géologique & Caractérisation de réservoirs",
        "energyTechnology": [
            "Sismique réflexion 2D/3D",
            "Modélisation de réservoirs profonds",
            "Stockage géologique de CO2 (CCUS) & Hydrogène naturel"
        ],
        "energySector": "Caractérisation du Sous-Sol & Nouvelles Ressources",
        "sourceEnergierecrute": true,
        "isEmerging": false,
        "level": "Bac +5 (Diplôme d'Ingénieur géologue / géophysicien ou Master Géosciences)",
        "salary": "🇫🇷 France : 3 300 - 5 600 € net/mois (~46 000 - 80 000 € brut/an, Source : Energierecrute / APEC) • 🇸🇳 Sénégal : 700 000 - 2 200 000 FCFA / mois (Compagnies d'exploration, Petrosen, mines, géothermie)",
        "simpleDefinition": "L'ingénieur géologue d'exploration cartographie et sonde les couches géologiques profondes pour localiser les gisements de géothermie haute énergie, les aquifères thermiques, les cavités de stockage d'énergie et les ressources du sous-sol.",
        "shortDescription": "Spécialiste des profondeurs terrestres répertorié par Energierecrute, ce scientifique applique les géosciences de pointe pour trouver de la chaleur souterraine, stocker du CO2 ou déceler des réserves d'hydrogène naturel blanc.",
        "longDescription": "Comme l'illustrent les filières universitaires et d'écoles d'ingénieurs partenaires d'Energierecrute (École Nationale Supérieure de Géologie de Nancy - ENSG, IFP School, UniLaSalle, BRGM), le géologue d'exploration a vu son métier profondément renouvelé par la transition écologique. S'appuyant sur l'imagerie sismique par ondes, les diagraphies de forage et l'analyse pétrophysique d'échantillons de roches (carottes), il modélise en 3D les réservoirs du sous-sol. Ses compétences historiques sont aujourd'hui au cœur des projets de géothermie profonde pour chauffer des métropoles entières, du captage et stockage géologique de CO2 (CCUS) pour décarboner l'industrie lourde, et de l'exploration de l'hydrogène naturel natif piégé dans les roches anciennes.",
        "mainObjective": "Caractériser avec une précision mathématique la structure du sous-sol pour exploiter de manière durable la chaleur géothermique et sécuriser le stockage souterrain d'énergie.",
        "companyRole": "Explorateur scientifique et garant de la compréhension géologique des réservoirs profonds.",
        "workEnvironment": [
            "💻 Stations graphiques haute performance pour l'interprétation sismique et la modélisation 3D",
            "🔬 Laboratoires d'analyse pétrographique, de porosité et de perméabilité des roches",
            "🥾 Missions de terrain sur appareils de forage et campagnes d'acquisition géophysique"
        ],
        "missions": [
            "Traiter et interpréter les données géophysiques sismiques 2D et 3D pour cartographier les failles et réservoirs",
            "Analyser les carottes de forage et les diagraphies de puits (porosité, perméabilité, teneur en minéraux)",
            "Construire des modèles géologiques statiques et dynamiques 3D sous simulateurs spécialisés",
            "Évaluer les risques géologiques (risques sismiques induits lors des forages profonds, étanchéité de la couverture)",
            "Collaborer avec les ingénieurs de forage pour définir la trajectoire optimale des puits de production et de réinjection"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Interprétation de profils sismiques",
                "desc": "Repérage des horizons géologiques et pointage d'une faille majeure pouvant alimenter un aquifère géothermique à 2 400 mètres de profondeur."
            },
            {
                "time": "11:00",
                "title": "Examen de carottes de forage",
                "desc": "Observation sous loupe binoculaire et microscope électronique de lames minces de grès pour évaluer la perméabilité à l'eau chaude."
            },
            {
                "time": "14:15",
                "title": "Mise à jour du modèle géologique 3D",
                "desc": "Intégration des nouvelles données de pression et de température issues d'un forage pilote dans le logiciel de simulation de réservoir."
            },
            {
                "time": "16:45",
                "title": "Note d'aléa de sismicité induite",
                "desc": "Rédaction d'une note technique sur les pressions de fracturation hydraulique à ne pas dépasser pour garantir l'absence de microséisme en surface."
            }
        ],
        "skills": {
            "technical": [
                "Géologie structurale, sédimentologie, stratigraphie séquentielle et pétrophysique",
                "Géophysique d'imagerie (sismique réflexion, gravimétrie, magnétométrie, diagraphies)",
                "Modélisation géologique 3D et simulation thermodynamique d'écoulements souterrains",
                "Mécanique des roches et gestion des risques de sismicité induite"
            ],
            "human": [
                "Capacité de visualisation spatiale 3D et raisonnement probabiliste sous forte incertitude",
                "Rigueur scientifique et curiosité face aux phénomènes naturels terrestres",
                "Esprit de synthèse pour croiser données de surface, forages et mesures physiques"
            ],
            "tools": [
                "Logiciels d'interprétation sismique et de modélisation de réservoirs (Petrel, Kingdom, Petromod)",
                "Simulateurs d'écoulement thermique et hydrogéologique (TOUGH2, Eclipse, FEFLOW)",
                "Systèmes d'Information Géographique (QGIS, ArcGIS)",
                "Microscopes pétrographiques polarisants et diffractomètres à rayons X"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence en Géosciences / CPGE (Bac +3)",
                    "title": "Licence Sciences de la Terre ou CPGE BCPST",
                    "desc": "Bases solides en géologie de terrain, cartographie, minéralogie et physique du globe."
                },
                {
                    "step": "Diplôme d'Ingénieur Géologue (Bac +5)",
                    "title": "Ingénieur Géologue (ENSG, UniLaSalle) ou Master Géosciences",
                    "desc": "Spécialisation en géophysique de réservoir, pétrophysique et modélisation 3D du sous-sol."
                },
                {
                    "step": "Spécialisation Énergie (Bac +6)",
                    "title": "Diplôme de l'IFP School (Génie des Réservoirs et Géosciences)",
                    "desc": "L'excellence internationale pour l'ingénierie des réservoirs géothermiques et du stockage de carbone."
                }
            ],
            "schools": [
                {
                    "name": "École Nationale Supérieure de Géologie (ENSG Nancy) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "UniLaSalle (Beauvais) / IFP School (Rueil-Malmaison) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut des Sciences de la Terre (IST - UCAD Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Institut National du Pétrole et du Gaz (INPG Dakar) / EPT Thiès — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification Petrel Reservoir Modeling",
                "Certification Interprétation Sismique Avancée",
                "Habilitation sécurité forage Wellsite"
            ],
            "schoolSubjects": [
                "Pétrophysique",
                "Sismique réflexion",
                "Hydrodynamique souterraine",
                "Géochimie isotopique"
            ]
        },
        "career": {
            "sectors": [
                "Opérateurs de géothermie profonde et de réseaux de chaleur",
                "Compagnies d'exploration et de stockage souterrain (Storengy, TotalEnergies, Petrosen)",
                "Instituts géologiques nationaux (BRGM, USGS)",
                "Bureaux d'études en géotechnique et géophysique"
            ],
            "employerTypes": [
                "Énergéticiens géothermiques",
                "Instituts géologiques de recherche",
                "Sociétés d'ingénierie du sous-sol"
            ],
            "evolution": "Géologue de puits junior ➔ Géologue de réservoir ➔ Chef de projet exploration sous-sol ➔ Directeur des géosciences",
            "pros": "Fascinante exploration des entrailles de la Terre, voyages et missions de terrain, contribution clé à la géothermie propre.",
            "cons": "Déplacements fréquents sur les appareils de forage, part d'incertitude inhérente aux profondeurs terrestres."
        },
        "gettingStarted": {
            "beginnerProject": "Observer une carte géologique de sa région sur l'application InfoTerre du BRGM.",
            "intermediateProject": "Interpréter une ligne sismique 2D simple pour repérer un anticlinal et une faille normale.",
            "advancedProject": "Calculer le volume de chaleur stocké dans un aquifère géothermique de 10 km² d'une épaisseur de 50 m à 75°C.",
            "portfolioIdeas": [
                "Modèle structural 3D réalisé sous logiciel libre",
                "Rapport de géologie de terrain avec analyse de carotte"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "Le deep learning accélère le pointage des horizons sismiques et la détection automatique des réseaux de failles dans les cubes 3D.",
            "automatedTasks": [
                "Pointage automatique des réflecteurs sismiques",
                "Génération stochastique de modèles de porosité par IA"
            ],
            "emergingSkills": [
                "Utilisation de modèles de Machine Learning pour la prédiction de perméabilité de réservoir"
            ],
            "humanEdge": "La compréhension de l'histoire géologique sur des millions d'années et l'intégration des réalités tectoniques régionales."
        },
        "africaContext": {
            "senegalInsight": "Le Sénégal forme d'excellents géologues à l'Institut des Sciences de la Terre (IST de Dakar) et à l'INPG, dont l'expertise a été essentielle pour la découverte et la cartographie des gisements sous-marins de Sangomar et Grand Tortue Ahmeyim, et qui s'oriente désormais également vers le potentiel d'hydrogène naturel découvert dans le bassin sédimentaire ouest-africain (notamment au Mali voisin à Bourakébougou).",
            "localSectors": [
                "Institut des Sciences de la Terre (IST - UCAD Dakar)",
                "Petrosen (Société des Pétroles du Sénégal)",
                "Institut National du Pétrole et du Gaz (INPG)",
                "Projets d'exploration d'hydrogène naturel dans le bassin sénégalo-mauritanien"
            ],
            "remoteWork": "Hybride (travail sur stations graphiques et missions de terrain ponctuelles).",
            "entrepreneurship": "Création d'un cabinet de conseil en géosciences et hydrogéologie thermique pour la sous-région."
        },
        "relatedJobSlugs": [
            "ingenieur-geothermie-energetique",
            "ingenieur-rd-energie",
            "responsable-hse-sites-energetiques"
        ],
        "connectedFamilies": [
            "mines-geosciences",
            "sciences-biotech"
        ],
        "resources": [
            {
                "type": "guide",
                "title": "Géosciences et exploration énergétique — Energierecrute",
                "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php",
                "source": "Energierecrute"
            },
            {
                "type": "portail",
                "title": "BRGM — Service géologique national",
                "url": "https://www.brgm.fr/",
                "source": "BRGM"
            }
        ],
        "sources": [
            "Energierecrute",
            "BRGM",
            "ENSG",
            "IST Dakar"
        ],
        "interests": [
            "nature-environnement",
            "explorer-decouvrir",
            "donnees-chiffres"
        ],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "La toute première exploitation commerciale au monde d'hydrogène naturel 'blanc' (pur à 98% jaillissant directement des entrailles terrestres) a été découverte par des géologues au village de Bourakébougou au Mali !",
            "pourquoi": "Cet hydrogène se régénère en continu dans le sous-sol par réaction entre l'eau et les roches riches en fer, sans nécessiter la moindre énergie pour être fabriqué.",
            "a_retenir": "L'explorateur scientifique qui révèle les richesses thermiques et énergétiques cachées sous nos pieds."
        }
    }
];

  // =========================================================================
  // 3. EXPORT DU MODULE ORIENTATION ENERGY DATA
  // =========================================================================
  const OrientationEnergyData = {
    DOMAINS: ENERGY_DOMAINS,
    JOBS: ENERGY_JOBS,
    getDomains: function () {
      return ENERGY_DOMAINS;
    },
    getJobs: function () {
      return ENERGY_JOBS;
    },
    getJobBySlug: function (slug) {
      if (!slug) return null;
      return ENERGY_JOBS.find(j => j.slug === slug || j.id === slug) || null;
    }
  };

  if (typeof window !== 'undefined') {
    window.OrientationEnergyData = OrientationEnergyData;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = OrientationEnergyData;
  }

  if (typeof console !== 'undefined' && console.log) {
    console.log('⚡ OrientationEnergyData : 26 fiches détaillées de l\'Énergie, Électricité & Transition Énergétique initialisées sur 14 domaines.');
  }
})();

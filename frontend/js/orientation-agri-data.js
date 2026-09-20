/**
 * CATALOGUE DES MÉTIERS DE L'AGRICULTURE, ÉLEVAGE, AGROALIMENTAIRE & RESSOURCES MARINES ENRICHI
 * Le Monde du Travail — 11 Domaines d'Excellence & Référentiel Pédagogique
 * Sources documentaires principales :
 * - ÉvoluPêches (Comité sectoriel de main-d'œuvre de la pêche maritime du Québec)
 * - Onisep (Agronomie, Halieutique, Forêt, Agroalimentaire)
 * - Studyrama (Agriculture, Élevage, Viticulture, Machinisme)
 * Contextualisation Afrique de l'Ouest : ISRA, ENSA Thiès, ENFM Dakar, CRODT, IUPA, ANA
 * Total métiers documentés : 45 fiches détaillées haute profondeur
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. LES 11 DOMAINES DE L'AGRICULTURE, ÉLEVAGE, AGROALIMENTAIRE & RESSOURCES MARINES
  // =========================================================================
  const AGRI_DOMAINS = [
    {
        "id": "agronomie-sciences-agricoles",
        "name": "Agronomie & Sciences Agricoles",
        "icon": "🧪",
        "description": "Recherche agronomique, amélioration génétique variétale, expérimentation végétale, fertilité des sols et protection intégrée des cultures.",
        "subdomains": [
            "Agronomie générale",
            "Génétique & semences",
            "Expérimentation végétale",
            "Protection des cultures",
            "Biométrie & agrosciences"
        ]
    },
    {
        "id": "production-vegetale",
        "name": "Production Végétale, Cultures Spécialisées & Horticulture",
        "icon": "🌾",
        "description": "Grandes cultures céréalières, maraîchage biologique et conventionnel, horticulture ornementale, pépinières et viticulture-œnologie.",
        "subdomains": [
            "Grandes cultures & céréales",
            "Maraîchage & cultures légumières",
            "Horticulture ornementale & florale",
            "Pépinières fruitières & ornementales",
            "Viticulture & œnologie",
            "Arboriculture"
        ]
    },
    {
        "id": "elevage-productions-animales",
        "name": "Élevage, Santé & Productions Animales",
        "icon": "🐄",
        "description": "Élevage bovin, ovin, caprin et porcin, aviculture moderne, conseil zootechnique, nutrition et reproduction animale.",
        "subdomains": [
            "Élevage bovin, ovin & caprin",
            "Aviculture & petits élevages",
            "Conseil zootechnique & nutrition",
            "Santé animale & reproduction"
        ]
    },
    {
        "id": "agroecologie-ressources-sols",
        "name": "Agroécologie, Ressources, Sols & Climat",
        "icon": "🌱",
        "description": "Agriculture régénérative, conservation des sols, agroforesterie, hydraulique agricole, gestion raisonnée de l'eau et méthanisation.",
        "subdomains": [
            "Agriculture régénérative & sols vivants",
            "Agroforesterie",
            "Hydraulique agricole & gestion de l'eau",
            "Économie circulaire & biogaz",
            "Transition carbone agricole"
        ]
    },
    {
        "id": "agroequipement-machinisme",
        "name": "Agroéquipement, Machinisme & Robotique Agricole",
        "icon": "🚜",
        "description": "Tracteurs et moissonneuses connectés, maintenance d'engins agricoles, conseil technico-commercial, robotique autonome et R&D machinisme.",
        "subdomains": [
            "Conduite d'engins & traction",
            "Maintenance & SAV agroéquipement",
            "Commerce & conseil agroéquipement",
            "R&D & conception agroéquipement",
            "Robotique agricole & automatismes"
        ]
    },
    {
        "id": "peche-aquaculture",
        "name": "Pêche, Aquaculture & Ressources Marines",
        "icon": "🌊",
        "description": "Pêche commerciale et hauturière, mariculture côtière, conchyliculture, valorisation et transformation industrielle des captures marines, contrôle de la qualité halieutique et gestion durable des écosystèmes océaniques.",
        "subdomains": [
            "Pêche & capture",
            "Aquaculture & mariculture",
            "Transformation des produits marins",
            "Maintenance & équipements marins",
            "Qualité & sécurité des produits aquatiques",
            "Gestion des ressources marines",
            "Biologie marine",
            "Navigation & opérations maritimes",
            "Logistique & commercialisation",
            "Technologies marines & numériques"
        ]
    },
    {
        "id": "foret-espaces-naturels",
        "name": "Forêt, Sylviculture, Paysage & Espaces Naturels",
        "icon": "🌲",
        "description": "Gestion durable des massifs forestiers, filière bois, aménagement paysager des villes et jardins, élagage et soins aux arbres.",
        "subdomains": [
            "Gestion forestière & sylviculture",
            "Exploitation & travaux forestiers",
            "Aménagement paysager & espaces verts",
            "Soins aux arbres & élagage"
        ]
    },
    {
        "id": "agroalimentaire-transformation-qualite",
        "name": "Agroalimentaire, Transformation & Qualité Sanitaire",
        "icon": "🍲",
        "description": "Transformation industrielle des récoltes, R&D et formulation alimentaire, qualité sanitaire (HACCP, IFS), fermentation et emballages durables.",
        "subdomains": [
            "Production & conditionnement industriel",
            "R&D & procédés agroalimentaires",
            "Qualité, hygiène & sécurité sanitaire",
            "Fermentation & boissons"
        ]
    },
    {
        "id": "economie-gestion-conseil-rural",
        "name": "Économie, Gestion, Droit & Conseil Rural",
        "icon": "📊",
        "description": "Pilotage économique des exploitations, comptabilité agricole, financement bancaire du monde rural, assurances récolte et droit foncier rural.",
        "subdomains": [
            "Gestion financière & conseil stratégique",
            "Financement bancaire & assurances agricoles",
            "Droit rural & foncier",
            "Négoce & commerce agricole"
        ]
    },
    {
        "id": "agritech-agriculture-numerique",
        "name": "AgriTech, Numérique & Agriculture de Précision",
        "icon": "🛰️",
        "description": "Objets connectés (IoT), stations météo intelligentes, télédétection par drone multispectral, Big Data agronomique et intelligence artificielle.",
        "subdomains": [
            "IoT, capteurs & fermes connectées",
            "Drones, imagerie & télédétection",
            "Big Data & IA agronomique",
            "Plateformes logicielles & traçabilité"
        ]
    },
    {
        "id": "entrepreneuriat-developpement-rural",
        "name": "Entrepreneuriat, Installation & Développement Rural",
        "icon": "🏛️",
        "description": "Création et reprise de fermes (DJA), direction d'entreprises agricoles et coopératives, circuits courts et dynamisation économique des terroirs.",
        "subdomains": [
            "Entrepreneuriat & gestion d'exploitation",
            "Management coopératif & développement territorial",
            "Installation des jeunes agriculteurs",
            "Circuits courts & agritourisme"
        ]
    }
];

  // =========================================================================
  // 2. LES 45 FICHES MÉTIERS DÉTAILLÉES HAUTE PROFONDEUR
  // =========================================================================
  const AGRI_JOBS = [
    {
        "id": "ingenieur-agronome",
        "slug": "ingenieur-agronome",
        "title": "Ingénieur Agronome / Chercheur en Agronomie",
        "aliases": [
            "Agronome",
            "Ingénieure agronome",
            "Chercheur en sciences agronomiques"
        ],
        "icon": "🧪",
        "image": "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Agronomie & Sciences Agricoles",
        "domainId": "agronomie-sciences-agricoles",
        "subdomain": "Agronomie générale",
        "sourceOnisep": true,
        "sourceStudyrama": true,
        "isEmerging": false,
        "level": "Bac +5 (Diplôme d'Ingénieur Agronome ou Master Agrosciences)",
        "salary": "🇫🇷 France : 2 800 - 3 300 € brut/mois débutant (~33 600 - 39 600 €/an, Source : Onisep) • 🇸🇳 Sénégal : 450 000 - 1 500 000 FCFA / mois (Source : Agro-industries & Recherche)",
        "simpleDefinition": "L'ingénieur agronome étudie les interactions entre le sol, les plantes, les animaux et le climat pour concevoir des systèmes de culture plus productifs, sains et respectueux des ressources naturelles.",
        "shortDescription": "Pilier scientifique de l'agriculture moderne, il conçoit des méthodes culturales durables, sélectionne des variétés résistantes au climat et conseille agriculteurs et industriels.",
        "longDescription": "Scientifique de haut vol et praticien de terrain, l'ingénieur agronome mobilise la biologie végétale et animale, la chimie, la pédologie, l'économie et l'informatique. Selon l'Onisep, il intervient sur la sélection et l'adaptation des plantes, des animaux ou des agroéquipements. Face aux aléas climatiques, il développe des semences économes en eau, élabore des plans de fertilisation raisonnée et pilote des projets agro-industriels majeurs.",
        "mainObjective": "Augmenter durablement les rendements agricoles tout en préservant la fertilité des sols, l'eau et la biodiversité.",
        "companyRole": "Garant de l'innovation technique, de la viabilité économique des exploitations et de la transition écologique des filières.",
        "workEnvironment": [
            "🌾 Répartition terrain agricole et laboratoire d'analyse",
            "🏢 Organismes de recherche (INRAE, Cirad, IRD, ISRA), chambres d'agriculture, coopératives et multinationales",
            "✈️ Forte mobilité sur le terrain et à l'international"
        ],
        "missions": [
            "Diagnostiquer les sols, les climats locaux et les contraintes hydriques pour adapter les itinéraires culturaux",
            "Sélectionner des variétés végétales et des races animales performantes et résilientes face à la sécheresse",
            "Élaborer des protocoles de protection intégrée des cultures réduisant les intrants chimiques",
            "Accompagner les coopératives et exploitants dans l'adoption des technologies de pointe (irrigation intelligente, capteurs)",
            "Coordonner des projets de recherche agronomique et évaluer les retours sur investissement"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Diagnostic parcellaire de terrain",
                "desc": "Observation directe des plants, prélèvement d'échantillons de sol et relevé des sondes d'humidité."
            },
            {
                "time": "10:30",
                "title": "Analyse au laboratoire d'agrosciences",
                "desc": "Interprétation des teneurs en minéraux et contrôle microscopique de la santé végétale."
            },
            {
                "time": "14:00",
                "title": "Comité de pilotage avec les producteurs",
                "desc": "Présentation des résultats d'essais variétaux et recommandation des dates optimales de semis."
            },
            {
                "time": "16:30",
                "title": "Synthèse scientifique et veille agronomique",
                "desc": "Rédaction du protocole d'expérimentation en collaboration avec des centres de recherche (Cirad, ISRA)."
            }
        ],
        "skills": {
            "technical": [
                "Pédologie & biologie des sols vivants",
                "Phytotechnie & physiologie végétale",
                "Génétique & amélioration variétale",
                "Hydraulique agricole & bilans hydriques",
                "Protection intégrée & lutte biologique",
                "Biométrie appliquée"
            ],
            "human": [
                "Sens aigu du contact avec les agriculteurs",
                "Capacité d'analyse et de synthèse",
                "Pédagogie & transmission des savoirs",
                "Aptitude à la négociation",
                "Mobilité internationale"
            ],
            "tools": [
                "Systèmes d'Information Géographique (QGIS)",
                "Modélisation de culture (CropSyst)",
                "Sondes capacitives et stations météo connectées",
                "Drones de télédétection",
                "Logiciels statistiques (R, Python)"
            ],
            "analytical": [
                "Analyses physico-chimiques de sol",
                "Analyses du cycle de vie (ACV)",
                "Calcul de marge brute agricole"
            ]
        },
        "specializations": [
            "Agronomie tropicale & sahélienne",
            "Amélioration des semences",
            "Agroécologie",
            "Gestion durable de l'eau",
            "Machinisme agricole"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Bac scientifique ou technique agricole",
                    "desc": "Bases solides en biologie, physique-chimie et mathématiques."
                },
                {
                    "step": "Bac +2",
                    "title": "Prépa BCPST ou BTS Agricole",
                    "desc": "Sciences du vivant et immersion dans les filières agricoles."
                },
                {
                    "step": "Bac +5",
                    "title": "Diplôme d'Ingénieur Agronome ou Master Agrosciences",
                    "desc": "Spécialisation avancée en agronomie, protection des cultures ou agroécologie."
                }
            ],
            "schools": [
                {
                    "name": "Institut Agro (Montpellier / Rennes / Dijon) — France",
                    "country": "France",
                    "scope": "International"
                },
                {
                    "name": "AgroParisTech — France",
                    "country": "France",
                    "scope": "International"
                },
                {
                    "name": "ENSA Thiès (École Nationale Supérieure d'Agriculture) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "UFR Sciences Agronomiques — Université Gaston Berger (UGB Saint-Louis)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certiphyto Conseil Stratégique",
                "Habilitation Télépilote de Drones Agricoles"
            ],
            "schoolSubjects": [
                "Biologie & Écologie",
                "Chimie",
                "Mathématiques",
                "Géographie & Climatologie"
            ]
        },
        "career": {
            "sectors": [
                "Recherche publique (INRAE, Cirad, IRD, ISRA)",
                "Industrie agroalimentaire (25% des débouchés Onisep)",
                "Conseil agronomique & Bureaux d'études (30%)",
                "Grandes exploitations & Coopératives"
            ],
            "employerTypes": [
                "Instituts de recherche",
                "Industries agroalimentaires",
                "Chambres d'agriculture",
                "ONG de développement rural (FAO)"
            ],
            "evolution": "Ingénieur d'études ➔ Chef de projet agronomique ➔ Directeur R&D / Directeur d'exploitation ➔ Consultant international FAO",
            "pros": "Rôle vital pour la souveraineté alimentaire, métier passionnant à la croisée de la science et du terrain, débouchés internationaux.",
            "cons": "Forte disponibilité lors des semis et récoltes, déplacements fréquents en zones rurales isolées."
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser un diagnostic de fertilité et de texture de sol sur une parcelle maraîchère.",
            "intermediateProject": "Tester un essai comparatif d'irrigation goutte-à-goutte avec paillage organique sur des cultures de maïs.",
            "advancedProject": "Modéliser sur QGIS les zones de stress hydrique d'une parcelle à partir d'indices NDVI.",
            "portfolioIdeas": [
                "Rapport d'audit de sol et plan de fertilisation",
                "Protocole d'essai variétal résistant à la sécheresse"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA analyse les données de capteurs IoT et d'imagerie drone pour détecter les maladies foliaires et anticiper les besoins en eau avec une précision centimétrique.",
            "automatedTasks": [
                "Comptage automatisé des plants par vision par ordinateur",
                "Détection des carences minérales sur imagerie multispectrale"
            ],
            "emergingSkills": [
                "Paramétrage d'outils d'aide à la décision par IA",
                "Interprétation agronomique des cartes de rendement"
            ],
            "humanEdge": "La sensibilité du sol vivant, le lien humain avec les producteurs et l'évaluation du risque climatique restent irremplaçables."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'agronome est au cœur des plans d'autosuffisance en riz (Vallée du Fleuve), en oignon/pomme de terre (Niayes) et en céréales sèches (Bassin arachidier).",
            "localSectors": [
                "Agro-industrie de la Vallée du Fleuve",
                "Zone des Niayes",
                "Centres ISRA & AfricaRice",
                "Sociétés de développement (SAED, SODAGRI)"
            ],
            "remoteWork": "Missions d'expertise en bureau d'études international combinées à des audits de terrain.",
            "entrepreneurship": "Création de fermes modernes intégrées, production de semences certifiées et conseil agronomique privé."
        },
        "relatedJobSlugs": [
            "conseiller-agro-developpement",
            "ingenieur-experimentation-vegetale",
            "ingenieur-agroecologie",
            "ingenieur-irrigation-eau"
        ],
        "connectedFamilies": [
            "sciences-biotech",
            "environnement-climat",
            "numerique-ia",
            "industrie-mecanique"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Onisep Agronome",
                "url": "https://www.onisep.fr/ressources/univers-metier/metiers/agronome",
                "source": "Onisep"
            }
        ],
        "sources": [
            "Onisep",
            "Studyrama",
            "ENSA Thiès",
            "ISRA"
        ],
        "interests": [
            "nature-environnement",
            "resoudre-problemes",
            "explorer-decouvrir",
            "technologie-code"
        ],
        "saviezVous": {
            "statut": "metier_stable",
            "fait": "Selon l'Onisep, la carrière d'agronome est de plus en plus internationale et requiert la maîtrise d'au moins deux langues étrangères.",
            "pourquoi": "25% des agronomes exercent dans l'agroalimentaire et 30% dans la recherche et le conseil international pour sécuriser les chaînes alimentaires.",
            "a_retenir": "Un profil d'élite scientifique indispensable face au changement climatique et courtisé par les PME comme par les groupes mondiaux."
        },
        "salaryRanges": {
            "france": {
                "raw": "2 800 - 3 300 € brut/mois débutant (~33 600 - 39 600 €/an, Source : Onisep)",
                "range": "2 800 - 3 300 € brut/mois débutant (~33 600 - 39 600 €/an, Source : Onisep)",
                "source": "Onisep / Studyrama"
            },
            "senegal": {
                "raw": "450 000 - 1 500 000 FCFA / mois (Source : Agro-industries & Recherche)",
                "range": "450 000 - 1 500 000 FCFA / mois (Source : Agro-industries & Recherche)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "conseiller-agro-developpement",
        "slug": "conseiller-agro-developpement",
        "title": "Conseiller en Agro-développement International",
        "aliases": [
            "Expert en développement rural",
            "Chargé de mission agronomique internationale",
            "Coopérant agricole"
        ],
        "icon": "🌍",
        "image": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Agronomie & Sciences Agricoles",
        "domainId": "agronomie-sciences-agricoles",
        "subdomain": "Agro-développement international",
        "sourceOnisep": true,
        "sourceStudyrama": true,
        "isEmerging": false,
        "level": "Bac +5 (Ingénieur en Agro-développement ou Master Coopération Agricole)",
        "salary": "🇫🇷 France : 32 000 - 48 000 € brut/an (Source : Studyrama / APEC) • 🇸🇳 Sénégal : 600 000 - 1 800 000 FCFA / mois (Source : ONG & Bailleurs internationaux)",
        "simpleDefinition": "Le conseiller en agro-développement international conçoit, finance et met en œuvre des programmes agricoles pour renforcer la résilience des communautés rurales et la sécurité alimentaire dans les pays en développement.",
        "shortDescription": "Spécialiste des projets ruraux internationaux, il accompagne les coopératives et petits producteurs du Sud dans l'amélioration de leurs filières et de leurs revenus.",
        "longDescription": "Expert cité par Studyrama au confluent de l'agronomie, de l'économie rurale et de la sociologie, il intervient auprès des ONG, agences de développement (AFD, USAID, GIZ) et ministères. Il structure les filières locales (cacao, anacarde, céréales, maraîchage), facilite l'accès au microcrédit et forme les groupements paysans à des méthodes agroécologiques adaptées à leur écosystème.",
        "mainObjective": "Améliorer les conditions de vie des producteurs ruraux par des projets agricoles durables et autonomes.",
        "companyRole": "Pont stratégique entre les bailleurs de fonds internationaux et les réalités du terrain paysan.",
        "workEnvironment": [
            "🌍 Missions de terrain fréquentes en Afrique subsaharienne, Asie ou Amérique latine",
            "🏢 Sièges d'ONG internationales, agences multilatérales (FAO, FIDA) et ministères",
            "🤝 Réunions participatives sous l'arbre à palabres avec les communautés villageoises"
        ],
        "missions": [
            "Concevoir des programmes de renforcement des capacités agricoles et de sécurité alimentaire",
            "Diagnostiquer le fonctionnement technico-économique des exploitations paysannes familiales",
            "Structurer les filières de commercialisation équitable et d'accès aux marchés urbains",
            "Évaluer l'impact social, économique et environnemental des projets financés par les bailleurs",
            "Transférer des innovations agronomiques frugales et faciles à adopter localement"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Atelier participatif avec un groupement de productrices",
                "desc": "Co-conception d'un calendrier de maraîchage pour sécuriser l'approvisionnement en eau."
            },
            {
                "time": "11:30",
                "title": "Visite technique des banques céréalières",
                "desc": "Contrôle des conditions de stockage du mil et des mécanismes de prix de réserve villageois."
            },
            {
                "time": "14:30",
                "title": "Réunion de coordination avec les bailleurs",
                "desc": "Restitution des indicateurs de suivi des rendements auprès de l'Agence Française de Développement (AFD)."
            },
            {
                "time": "17:00",
                "title": "Rédaction du rapport d'évaluation d'étape",
                "desc": "Mise à jour de la matrice du cadre logique du projet et validation des décaissements."
            }
        ],
        "skills": {
            "technical": [
                "Ingénierie de projets de développement rural",
                "Agronomie tropicale & systèmes agraires",
                "Économie des filières agricoles du Sud",
                "Gestion de cycle de projet (GCP)",
                "Suivi-évaluation axé sur les résultats"
            ],
            "human": [
                "Empathie culturelle & respect des savoirs locaux",
                "Capacité d'écoute et de facilitation",
                "Résilience et adaptabilité sur le terrain",
                "Maîtrise d'au moins deux langues (anglais/français/langues locales)"
            ],
            "tools": [
                "Outils de cadre logique et budget bailleurs",
                "KoboToolbox & tablettes de collecte mobile",
                "QGIS pour la cartographie des parcelles",
                "Suites de gestion de projet (MS Project)"
            ],
            "analytical": [
                "Analyse de chaîne de valeur",
                "Étude de vulnérabilité climatique",
                "Calcul de revenu paysan net"
            ]
        },
        "specializations": [
            "Sécurité alimentaire & Nutrition",
            "Agroécologie paysanne",
            "Microfinance rurale & Épargne villageoise",
            "Gestion des conflits fonciers"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Bac général ou sciences économiques",
                    "desc": "Intérêt marqué pour la géographie, l'écologie et l'économie du développement."
                },
                {
                    "step": "Bac +3",
                    "title": "Licence en Sciences de la Terre, Agronomie ou Développement",
                    "desc": "Compréhension des enjeux géopolitiques et agronomiques mondiaux."
                },
                {
                    "step": "Bac +5",
                    "title": "Master Agro-développement International ou Diplôme Ingénieur ISTOM",
                    "desc": "Formation spécifique aux projets agricoles dans les pays du Sud."
                }
            ],
            "schools": [
                {
                    "name": "ISTOM — École Supérieure d'Agro-développement International (France)",
                    "country": "France",
                    "scope": "International"
                },
                {
                    "name": "Institut Agro Montpellier (Département Sud / IRC)",
                    "country": "France",
                    "scope": "International"
                },
                {
                    "name": "UFR Sciences Agronomiques — UGB Saint-Louis (Sénégal)",
                    "country": "Sénégal",
                    "scope": "Afrique"
                }
            ],
            "certifications": [
                "Certification PMD Pro (Gestion de projets de développement)",
                "Certification Suivi-Évaluation des Projets Ruraux"
            ],
            "schoolSubjects": [
                "Géographie",
                "Biologie",
                "Sciences économiques",
                "Langues vivantes"
            ]
        },
        "career": {
            "sectors": [
                "ONG humanitaires et de développement (Oxfam, Action Contre la Faim, Agronomes et Vétérinaires Sans Frontières)",
                "Agences bilatérales et multilatérales (AFD, Enabel, GIZ, FAO)",
                "Bureaux d'études spécialisés"
            ],
            "employerTypes": [
                "ONG internationales",
                "Organisations onusiennes",
                "Institutions de microfinance rurale"
            ],
            "evolution": "Chargé de projet junior ➔ Coordonnateur de programme pays ➔ Directeur pays d'ONG ➔ Expert senior auprès d'institutions internationales",
            "pros": "Impact humain et social immédiat, immersion culturelle extraordinaire, sentiment d'utilité collective profond.",
            "cons": "Conditions de vie parfois rustiques en brousse, éloignement familial, contrats par projet."
        },
        "gettingStarted": {
            "beginnerProject": "Participer à une mission de solidarité internationale ou d'appui à une coopérative agricole étudiante.",
            "intermediateProject": "Réaliser une enquête de terrain sur les pertes post-récolte auprès de petits producteurs de légumes.",
            "advancedProject": "Rédiger une note conceptuelle de projet de micro-irrigation solaire conforme aux standards des bailleurs de fonds.",
            "portfolioIdeas": [
                "Cadre logique d'un projet d'autonomisation des femmes rurales",
                "Étude de filière anacarde ou sésame"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'IA facilite la collecte de données sur smartphone en zone blanche et traduit instantanément les alertes météo et phytosanitaires en dialectes locaux.",
            "automatedTasks": [
                "Nettoyage automatisé des données d'enquêtes agricoles",
                "Analyse par satellite de la sécheresse régionale"
            ],
            "emergingSkills": [
                "Utilisation d'applications IA vocales pour paysans non alphabétisés",
                "Supervision des systèmes d'alerte précoce"
            ],
            "humanEdge": "La médiation sociale, le respect des coutumes villageoises et l'écoute des aînés ne seront jamais automatisés."
        },
        "africaContext": {
            "senegalInsight": "Dakar est le hub régional des grandes agences de coopération et des ONG opérant dans tout le Sahel (Sénégal, Mali, Niger, Burkina, Tchad).",
            "localSectors": [
                "Programmes de la Grande Muraille Verte",
                "Agences onusiennes à Diamniadio",
                "Projets résilience sécheresse du CILSS"
            ],
            "remoteWork": "Alternance fréquente entre rédaction de propositions de projets en télétravail et tournées de terrain.",
            "entrepreneurship": "Création d'entreprises sociales d'agrobusiness équitable et de cabinets d'ingénierie rurale indépendants."
        },
        "relatedJobSlugs": [
            "ingenieur-agronome",
            "ingenieur-agroecologie",
            "chef-exploitation-agricole",
            "responsable-cooperative-agricole"
        ],
        "connectedFamilies": [
            "droit-management",
            "environnement-climat",
            "sciences-biotech"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Conseiller en agro-développement Studyrama",
                "url": "https://www.studyrama.com/formations/fiches-metiers/agriculture/conseiller-en-agro-developpement-international-10068",
                "source": "Studyrama"
            }
        ],
        "sources": [
            "Studyrama",
            "Onisep",
            "FAO",
            "AFD",
            "ISTOM"
        ],
        "interests": [
            "nature-environnement",
            "negocier-convaincre",
            "explorer-decouvrir"
        ],
        "saviezVous": {
            "statut": "metier_stable",
            "fait": "Ce métier cité par Studyrama est l'un des plus tournés vers le Sud : il combine agronomie de terrain et négociation avec les grands bailleurs mondiaux.",
            "pourquoi": "L'adaptation au dérèglement climatique dans les zones arides exige des experts capables d'adapter des innovations agronomiques aux réalités communautaires locales.",
            "a_retenir": "Une profession à forte vocation humaine, idéale pour les jeunes diplômés désireux d'agir pour la justice climatique et l'autonomie paysanne."
        },
        "salaryRanges": {
            "france": {
                "raw": "32 000 - 48 000 € brut/an (Source : Studyrama / APEC)",
                "range": "32 000 - 48 000 € brut/an (Source : Studyrama / APEC)",
                "source": "Onisep / Studyrama"
            },
            "senegal": {
                "raw": "600 000 - 1 800 000 FCFA / mois (Source : ONG & Bailleurs internationaux)",
                "range": "600 000 - 1 800 000 FCFA / mois (Source : ONG & Bailleurs internationaux)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "ingenieur-experimentation-vegetale",
        "slug": "ingenieur-experimentation-vegetale",
        "title": "Ingénieur en Expérimentation et Production Végétales",
        "aliases": [
            "Ingénieur agronome d'essais",
            "Responsable de station d'expérimentation",
            "Chargé d'essais variétaux"
        ],
        "icon": "🔬",
        "image": "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Agronomie & Sciences Agricoles",
        "domainId": "agronomie-sciences-agricoles",
        "subdomain": "Expérimentation végétale en station",
        "sourceOnisep": true,
        "sourceStudyrama": false,
        "isEmerging": false,
        "level": "Bac +5 (Ingénieur Agronome ou Master Biologie Végétale)",
        "salary": "🇫🇷 France : 30 000 - 45 000 € brut/an (Source : Onisep / APEC) • 🇸🇳 Sénégal : 400 000 - 1 200 000 FCFA / mois (Source : Centres d'essais semenciers)",
        "simpleDefinition": "L'ingénieur en expérimentation végétale teste en conditions réelles et contrôlées de nouvelles variétés de plantes, semences et fertilisants pour valider leur efficacité et leur résistance avant mise sur le marché.",
        "shortDescription": "Associé explicitement à l'agronome par l'Onisep, il conçoit et supervise les protocoles d'essais en microparcelles pour homologuer les innovations végétales.",
        "longDescription": "Véritable passerelle entre la recherche fondamentale et la diffusion aux agriculteurs, l'ingénieur en expérimentation végétale exerce en station d'essais ou chez les semenciers. Selon l'Onisep, il teste rigoureusement les nouvelles variétés (résistance aux bioagresseurs, comportement face au stress hydrique, précocité, rendement) en respectant les Bonnes Pratiques d'Expérimentation (BPE).",
        "mainObjective": "Valider scientifiquement la supériorité agronomique et environnementale des nouvelles variétés de plantes.",
        "companyRole": "Garant de la rigueur méthodologique et de la conformité réglementaire préalable à l'inscription des variétés au catalogue officiel.",
        "workEnvironment": [
            "🌱 Stations d'essais expérimentales et serres de haute technologie",
            "🏢 Semenciers privés, instituts techniques (Arvalis, Terres Inovia) et recherche publique (ISRA)",
            "💻 Outils statistiques d'analyse biométrique"
        ],
        "missions": [
            "Concevoir les plans d'essais agronomiques (blocs de Fisher randomisés, microparcelles)",
            "Superviser les semis expérimentaux, les traitements et les récoltes sur les plateformes d'essais",
            "Mesurer les paramètres physiologiques (hauteur, biomasse, surface foliaire, indice de floraison)",
            "Traiter statistiquement les données d'essais pour prouver la significativité des écarts de rendement",
            "Rédiger les dossiers techniques d'homologation et présenter les résultats aux sélectionneurs"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Notation phénotypique sur les microparcelles",
                "desc": "Évaluation du degré de résistance d'une série de variétés de maïs face à la rouille foliaire."
            },
            {
                "time": "10:30",
                "title": "Calibrage du semoir d'expérimentation",
                "desc": "Réglage de la densité précise de semis au grain près avec le technicien d'essais."
            },
            {
                "time": "14:00",
                "title": "Analyse de variance (ANOVA) sous R",
                "desc": "Vérification statistique des effets traitements contre témoins non traités."
            },
            {
                "time": "16:30",
                "title": "Point d'avancement avec les sélectionneurs",
                "desc": "Présentation des lignées végétales candidates à l'inscription au catalogue officiel."
            }
        ],
        "skills": {
            "technical": [
                "Biométrie & expérimentation agronomique (BPE)",
                "Génétique végétale & sélection variétale",
                "Pathologie végétale & entomologie",
                "Protocoles d'essais agronomiques officiels",
                "Statistiques inférentielles"
            ],
            "human": [
                "Rigueur scientifique et probité intellectuelle",
                "Sens méticuleux de l'observation",
                "Patience et respect des cycles naturels",
                "Esprit d'équipe avec le personnel de terrain"
            ],
            "tools": [
                "Logiciels statistiques (R, SAS, StatBox)",
                "Capteurs de phénotypage au champ",
                "Micro-moissonneuses et semoirs de précision",
                "Tablettes de saisie numérique d'essais"
            ],
            "analytical": [
                "Analyses de variance et de régression",
                "Calcul des seuils d'efficacité phytosanitaire"
            ]
        },
        "specializations": [
            "Expérimentation grandes cultures",
            "Sélection maraîchère & arboricole",
            "Homologation biocontrôle",
            "Phénotypage haut débit"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Bac scientifique général",
                    "desc": "Bases solides en mathématiques et biologie végétale."
                },
                {
                    "step": "Bac +3",
                    "title": "Licence Pro Métiers de l'Expérimentation Végétale",
                    "desc": "Techniques de notation et de conduite des essais au champ."
                },
                {
                    "step": "Bac +5",
                    "title": "Diplôme d'Ingénieur Agronome spécialité Production Végétale",
                    "desc": "Conception de protocoles d'innovation variétale et d'homologation."
                }
            ],
            "schools": [
                {
                    "name": "Institut Agro (France)",
                    "country": "France",
                    "scope": "International"
                },
                {
                    "name": "UniLaSalle — France",
                    "country": "France",
                    "scope": "International"
                },
                {
                    "name": "ENSA Thiès — Département Productions Végétales (Sénégal)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Agrément Bonnes Pratiques d'Expérimentation (BPE)",
                "Certiphyto Expérimentateur"
            ],
            "schoolSubjects": [
                "Biologie végétale",
                "Statistiques",
                "Chimie",
                "Informatique"
            ]
        },
        "career": {
            "sectors": [
                "Entreprises semencières (Limagrain, Syngenta, KWS)",
                "Instituts techniques agricoles",
                "Centres de recherche agronomique publics (INRAE, ISRA)",
                "Sociétés de prestations d'essais"
            ],
            "employerTypes": [
                "Semenciers multinationaux",
                "Instituts de recherche appliquée",
                "Pépiniéristes et créateurs variétaux"
            ],
            "evolution": "Ingénieur d'essais ➔ Responsable de station expérimentale ➔ Chef de projet sélection végétale ➔ Directeur de la R&D agronomique",
            "pros": "Travail stimulant mêlant grand air et science pointue, impact direct sur les variétés cultivées dans le monde.",
            "cons": "Pics d'activité intenses au printemps et lors des moissons, rigueur documentaire stricte."
        },
        "gettingStarted": {
            "beginnerProject": "Mettre en place un micro-essai comparatif de germination de 3 variétés de haricot avec répétitions aléatoires.",
            "intermediateProject": "Réaliser une grille de notation phénotypique sur un verger pour comparer la résistance à un champignon.",
            "advancedProject": "Analyser un jeu de données d'essais réels sur R pour déterminer la significativité statistique d'un fertilisant organique.",
            "portfolioIdeas": [
                "Protocole d'essai variétal BPE complet",
                "Rapport d'analyse biométrique d'un essai de sorgho"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "Le phénotypage haut débit par imagerie IA et drones permet d'analyser en 5 minutes 1 000 microparcelles là où un technicien mettait 3 jours.",
            "automatedTasks": [
                "Comptage des épis et mesure de la hauteur de végétation par LiDAR",
                "Détection précoce des symptômes foliaires par vision assistée"
            ],
            "emergingSkills": [
                "Pilotage de plateformes de phénotypage numérique",
                "Nettoyage de jeux de données agronomiques massifs"
            ],
            "humanEdge": "La décision finale d'éliminer ou de retenir une variété prometteuse requiert l'œil agronomique et l'expertise du vivant."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'ISRA (Institut Sénégalais de Recherches Agricoles) dispose de stations d'essais phares à Bambey, Saint-Louis et Nioro du Rip pour tester les variétés de riz, mil et arachide adaptées au climat sahélien.",
            "localSectors": [
                "Station ISRA de Bambey",
                "Station rizicole de Ndiaye (Saint-Louis)",
                "Compagnies semencières locales"
            ],
            "remoteWork": "Analyse biométrique et rédaction de rapports réalisables à distance entre les phases de terrain.",
            "entrepreneurship": "Création de laboratoires de contrôle de semences et d'entreprises de multiplication variétale certifiée."
        },
        "relatedJobSlugs": [
            "ingenieur-agronome",
            "technicien-experimentation-vegetale",
            "cerealier",
            "pepinieriste"
        ],
        "connectedFamilies": [
            "sciences-biotech",
            "environnement-climat"
        ],
        "resources": [
            {
                "type": "article",
                "title": "L'expérimentation végétale selon l'Onisep",
                "url": "https://www.onisep.fr/ressources/univers-metier/metiers/agronome",
                "source": "Onisep"
            }
        ],
        "sources": [
            "Onisep",
            "INRAE",
            "ISRA",
            "UPOV"
        ],
        "interests": [
            "sciences-biotech",
            "nature-environnement",
            "resoudre-problemes"
        ],
        "saviezVous": {
            "statut": "metier_stable",
            "fait": "Cité par l'Onisep parmi les premiers métiers associés à l'agronome, il teste jusqu'à 500 lignées végétales différentes pour n'en retenir qu'une seule.",
            "pourquoi": "Il faut en moyenne 8 à 10 ans d'expérimentations rigoureuses pour inscrire une nouvelle variété au catalogue officiel des semences.",
            "a_retenir": "Un maillon incontournable qui garantit aux agriculteurs des semences certifiées saines, productives et adaptées aux sécheresses."
        },
        "salaryRanges": {
            "france": {
                "raw": "30 000 - 45 000 € brut/an (Source : Onisep / APEC)",
                "range": "30 000 - 45 000 € brut/an (Source : Onisep / APEC)",
                "source": "Onisep / Studyrama"
            },
            "senegal": {
                "raw": "400 000 - 1 200 000 FCFA / mois (Source : Centres d'essais semenciers)",
                "range": "400 000 - 1 200 000 FCFA / mois (Source : Centres d'essais semenciers)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "technicien-experimentation-vegetale",
        "slug": "technicien-experimentation-vegetale",
        "title": "Technicien en Expérimentation et Production Végétales",
        "aliases": [
            "Technicien d'essais agronomiques",
            "Aide-expérimentateur",
            "Technicien de recherche agronomique"
        ],
        "icon": "🌱",
        "image": "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Agronomie & Sciences Agricoles",
        "domainId": "agronomie-sciences-agricoles",
        "subdomain": "Expérimentation végétale en station",
        "sourceOnisep": true,
        "sourceStudyrama": false,
        "isEmerging": false,
        "level": "Bac +2 à Bac +3 (BTS Agricole Agronomie ou Licence Pro)",
        "salary": "🇫🇷 France : 22 000 - 30 000 € brut/an (Source : Onisep / Salaires BTP-Agro) • 🇸🇳 Sénégal : 250 000 - 600 000 FCFA / mois (Source : Stations de recherche)",
        "simpleDefinition": "Le technicien en expérimentation végétale installe physiquement les microparcelles de test, surveille au quotidien la croissance des plantes, applique les traitements et relève avec précision les données biométriques.",
        "shortDescription": "Bras droit opérationnel de l'ingénieur agronome, il met en place les essais variétaux sur le terrain, effectue les pesées et consigne les observations botaniques.",
        "longDescription": "Métier de terrain documenté par l'Onisep en liaison directe avec l'agronome, le technicien en expérimentation végétale assure le suivi minutieux des essais en champ ou sous serre. Il conduit le matériel agricole spécialisé de petite dimension, réalise les notations foliaires, récolte les micro-lots et prépare les échantillons destinés aux laboratoires de génétique ou d'analyses chimiques.",
        "mainObjective": "Assurer la précision et la traçabilité irréprochable de chaque microparcelle expérimentale.",
        "companyRole": "Cheville ouvrière de la station d'essais, garant de la qualité des données brutes collectées.",
        "workEnvironment": [
            "🌾 Plein air au cœur des microparcelles d'essais",
            "🚜 Conduite de micro-tracteurs et matériel d'expérimentation",
            "🔬 Laboratoire de pesée, de tri de grains et de séchage"
        ],
        "missions": [
            "Piqueter et délimiter les microparcelles d'essais selon le plan défini par l'ingénieur",
            "Semer les échantillons avec des semoirs de précision expérimentaux",
            "Surveiller l'émergence des adventices, des maladies cryptogamiques et des insectes ravageurs",
            "Appliquer les produits testés selon des doses micrométriques strictes",
            "Récolter, peser, mesurer le taux d'humidité des grains et étiqueter les échantillons"
        ],
        "typicalDay": [
            {
                "time": "07:30",
                "title": "Tournée matinale de notation",
                "desc": "Comptage du nombre de pieds levés sur une série de 60 microparcelles d'orge et de blé."
            },
            {
                "time": "10:00",
                "title": "Application d'un biostimulant expérimental",
                "desc": "Pulvérisation dosée au millilitre près avec un pulvérisateur à dos à pression constante."
            },
            {
                "time": "13:30",
                "title": "Prélèvement d'échantillons foliaires",
                "desc": "Collecte de feuilles et mise sous sachet hermétique codé par code-barres pour analyse ADN."
            },
            {
                "time": "16:00",
                "title": "Saisie des données sur logiciel d'essais",
                "desc": "Enregistrement des observations du jour et contrôle de cohérence des mesures."
            }
        ],
        "skills": {
            "technical": [
                "Conduite d'essais agronomiques au champ",
                "Reconnaissance botanique & maladies des plantes",
                "Réglage de matériel agricole expérimental",
                "Règles d'hygiène et de sécurité phytosanitaire",
                "Échantillonnage statistique"
            ],
            "human": [
                "Minutie et rigueur d'exécution sans faille",
                "Sens prononcé de l'observation de la nature",
                "Endurance physique pour le travail au grand air",
                "Esprit d'équipe"
            ],
            "tools": [
                "Semoirs de microparcelles (Wintersteiger, Haldrup)",
                "Humidimètres et balances de précision",
                "Tablettes de saisie numérique durcies",
                "Pulvérisateurs d'essais calibrés"
            ],
            "analytical": [
                "Calcul de doses et concentrations",
                "Contrôle de conformité par rapport au protocole"
            ]
        },
        "specializations": [
            "Expérimentation semences céréalières",
            "Maraîchage & horticulture d'essais",
            "Traitements de semences",
            "Expérimentation sous serres climatisées"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Bac Pro Conduite et Gestion de l'Entreprise Agricole (CGEA) ou Bac STAV",
                    "desc": "Sens pratique et bases en agronomie."
                },
                {
                    "step": "Bac +2",
                    "title": "BTS Agricole Agronomie : Productions Végétales (APV)",
                    "desc": "Diplôme clé d'accès au métier de technicien d'expérimentation."
                },
                {
                    "step": "Bac +3",
                    "title": "Licence Professionnelle Métiers de l'Expérimentation Végétale",
                    "desc": "Perfectionnement en réglementation BPE et outils connectés."
                }
            ],
            "schools": [
                {
                    "name": "Lycées Agricoles et CFA (France)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "CNFTE Thiès (Centre National de Formation des Techniciens d'Agriculture) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Institut Supérieur de Formation Agricole et Rurale (ISFAR Bambey) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certiphyto Applicateur Opérateur",
                "CACES Engins Agricoles"
            ],
            "schoolSubjects": [
                "Biologie végétale",
                "Agronomie pratique",
                "Mathématiques appliquées"
            ]
        },
        "career": {
            "sectors": [
                "Semenciers privés",
                "Instituts techniques agricoles",
                "Centres de recherche agronomique publics",
                "Coopératives agricoles"
            ],
            "employerTypes": [
                "Stations de recherche agronomique",
                "Firmes semencières",
                "Laboratoires d'essais privés"
            ],
            "evolution": "Technicien d'essais junior ➔ Technicien coordinateur d'essais ➔ Responsable d'équipe technique ➔ Assistant ingénieur de station",
            "pros": "Contact quotidien avec le végétal, travail concret au grand air, participation active à l'innovation agricole.",
            "cons": "Travail physique soumis aux intempéries (chaleur, pluie), concentration exigeante pour éviter toute inversion d'échantillons."
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser un herbier documentant 20 adventices courantes et leurs stades de développement.",
            "intermediateProject": "Participer à une campagne de notation dans une exploitation ou une pépinière locale.",
            "advancedProject": "Créer un protocole de suivi de levée sur 4 microparcelles avec calcul du pourcentage de germination.",
            "portfolioIdeas": [
                "Journal de bord de suivi d'une culture d'essais",
                "Grille de notation phénotypique personnalisée"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Les applications mobiles d'IA aident à l'identification instantanée des ravageurs au champ par simple photographie de la feuille.",
            "automatedTasks": [
                "Reconnaissance photographique des maladies végétales",
                "Dictée vocale automatisée des notations de terrain"
            ],
            "emergingSkills": [
                "Utilisation de capteurs de diagnostic portables",
                "Vérification des annotations automatiques par drone"
            ],
            "humanEdge": "La dextérité manuelle pour les pollinisations croisées et le soin minutieux apporté à chaque plant restent purement humains."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les techniciens formés à l'ISFAR de Bambey ou au CNFTE sont très recherchés par l'ISRA et les agro-industries de la vallée du fleuve pour conduire les essais de nouvelles variétés résilientes.",
            "localSectors": [
                "Stations ISRA de Saint-Louis, Bambey et Nioro",
                "Sociétés semencières agréées",
                "Grands périmètres hydro-agricoles"
            ],
            "remoteWork": "Métier de présence physique sur le terrain des cultures.",
            "entrepreneurship": "Création de pépinières spécialisées dans la production de plants greffés sains pour les maraîchers."
        },
        "relatedJobSlugs": [
            "ingenieur-experimentation-vegetale",
            "ingenieur-agronome",
            "maraicher",
            "cerealier"
        ],
        "connectedFamilies": [
            "sciences-biotech",
            "environnement-climat"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Onisep : Technicien en expérimentation végétale",
                "url": "https://www.onisep.fr/ressources/univers-metier/metiers/agronome",
                "source": "Onisep"
            }
        ],
        "sources": [
            "Onisep",
            "ISRA",
            "ISFAR Bambey"
        ],
        "interests": [
            "nature-environnement",
            "resoudre-problemes"
        ],
        "saviezVous": {
            "statut": "metier_stable",
            "fait": "Le technicien en expérimentation manipule des semoirs capables de semer une graine tous les 10 centimètres avec une précision millimétrique.",
            "pourquoi": "Dans un essai comparatif, la moindre erreur de semis ou de pesée peut fausser des années de travail des chercheurs en génétique végétale.",
            "a_retenir": "Un métier de terrain passionnant, alliant rigueur scientifique et amour de la terre, accessible dès un BTS agricole."
        },
        "salaryRanges": {
            "france": {
                "raw": "22 000 - 30 000 € brut/an (Source : Onisep / Salaires BTP-Agro)",
                "range": "22 000 - 30 000 € brut/an (Source : Onisep / Salaires BTP-Agro)",
                "source": "Onisep / Studyrama"
            },
            "senegal": {
                "raw": "250 000 - 600 000 FCFA / mois (Source : Stations de recherche)",
                "range": "250 000 - 600 000 FCFA / mois (Source : Stations de recherche)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "cerealier",
        "slug": "cerealier",
        "title": "Céréalier / Producteur de Grandes Cultures",
        "aliases": [
            "Agriculteur céréalier",
            "Producteur de grains",
            "Exploitant en grandes cultures"
        ],
        "icon": "🌾",
        "image": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Végétale & Cultures",
        "domainId": "production-vegetale",
        "subdomain": "Grandes cultures & Céréales",
        "sourceOnisep": false,
        "sourceStudyrama": true,
        "isEmerging": false,
        "level": "Bac Pro à Bac +2 / +3 (BTS Agricole ou Licence Pro Agronomie)",
        "salary": "🇫🇷 France : 20 000 - 45 000 € net/an (variable selon récoltes et cours des marchés, Source : Studyrama / Chambres d'Agriculture) • 🇸🇳 Sénégal : 300 000 - 1 500 000 FCFA / mois (selon taille de l'exploitation céréalière)",
        "simpleDefinition": "Le céréalier cultive des céréales (blé, maïs, orge, riz, mil, sorgho) et des oléoprotéagineux sur de vastes surfaces, en gérant le travail du sol, les semis, la protection des cultures et la moisson mécanisée.",
        "shortDescription": "Métier phare répertorié par Studyrama, il nourrit les populations en produisant les grains de base de l'alimentation humaine et animale grâce à des agroéquipements de haute technologie.",
        "longDescription": "Gestionnaire d'exploitation hautement qualifié, le céréalier maîtrise les cycles agronomiques et la météo. Il pilote des engins équipés de guidage GPS par satellite, ajuste les apports d'engrais selon des cartes de rendement, stocke sa récolte en silos ventilés et commercialise ses céréales en fonction des fluctuations des cours des matières premières agricoles.",
        "mainObjective": "Produire en grande quantité des céréales saines et de qualité boulangère ou fourragère tout en préservant le potentiel agronomique des parcelles.",
        "companyRole": "Pilier central de l'approvisionnement en matières premières pour les minoteries, boulangeries et fabricants d'aliments pour bétail.",
        "workEnvironment": [
            "🌾 Grands espaces ouverts, plaines céréalières et vallées alluviales",
            "🚜 Cabines de tracteurs et moissonneuses-batteuses climatisées et connectées",
            "🏢 Silos de stockage et bureau de gestion technico-économique"
        ],
        "missions": [
            "Préparer les sols par des techniques de labour ou de semis direct sous couvert végétal",
            "Semer les variétés céréalières adaptées aux caractéristiques climatiques et pédologiques",
            "Surveiller le tallage, la montaison et la maturation des grains face aux maladies et insectes",
            "Conduire les chantiers de moisson et optimiser le débit de récolte avant les intempéries",
            "Gérer la conservation des grains (ventilation, maîtrise de l'humidité) et négocier la vente"
        ],
        "typicalDay": [
            {
                "time": "06:30",
                "title": "Tour de plaine et vérification météo",
                "desc": "Contrôle visuel du taux d'humidité des grains de blé ou de maïs pour décider du lancement de la moisson."
            },
            {
                "time": "09:00",
                "title": "Préparation et graissage de la moissonneuse",
                "desc": "Nettoyage des grilles, contrôle de la barre de coupe et calibrage des capteurs de perte de grains."
            },
            {
                "time": "13:00",
                "title": "Chantier de récolte continue",
                "desc": "Moisson au guidage RTK centimétrique avec vidange en marche dans les remorques céréalières."
            },
            {
                "time": "18:30",
                "title": "Contrôle de réception au silo",
                "desc": "Mesure du poids spécifique et de la teneur en eau des bennes livrées au centre de stockage."
            }
        ],
        "skills": {
            "technical": [
                "Itinéraires techniques des céréales & oléoprotéagineux",
                "Conduite et réglage de machines agricoles de pointe",
                "Mécanique agricole de base & maintenance hydraulique",
                "Gestion du stockage et conservation des grains",
                "Commercialisation & marchés à terme agricoles"
            ],
            "human": [
                "Autonomie et grande capacité de travail",
                "Réactivité face aux fenêtres météo étroites",
                "Gestion du stress face aux aléas climatiques",
                "Vision entrepreneuriale et rigueur financière"
            ],
            "tools": [
                "Tracteurs et moissonneuses avec console ISOBUS",
                "Systèmes de guidage GPS par satellite (RTK)",
                "Logiciels de gestion parcellaire (MesParcelles)",
                "Humidimètres portables et densimètres"
            ],
            "analytical": [
                "Calcul de marge nette à l'hectare",
                "Analyse des bilans azotés",
                "Optimisation des coûts de carburant"
            ]
        },
        "specializations": [
            "Grandes cultures biologiques",
            "Semis direct sous couvert (Agriculture de Conservation des Sols)",
            "Riziculture irriguée",
            "Production de semences de céréales certifiées"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Bac Pro Conduite et Gestion de l'Entreprise Agricole (CGEA)",
                    "desc": "Formation pratique à la gestion d'une exploitation agricole."
                },
                {
                    "step": "Bac +2",
                    "title": "BTS Agricole Analyse, Conduite et Stratégie de l'Entreprise agricole (ACSE)",
                    "desc": "Diplôme de référence pour s'installer ou gérer une ferme céréalière."
                },
                {
                    "step": "Bac +3",
                    "title": "Licence Pro Productions Végétales ou Agriculture de Précision",
                    "desc": "Maîtrise des technologies numériques et de l'agronomie durable."
                }
            ],
            "schools": [
                {
                    "name": "Lycées Agricoles d'enseignement général et technologique (France)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut Supérieur de Formation Agricole et Rurale (ISFAR Bambey) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Centres de formation agricole de la Vallée du Fleuve Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Capacité Professionnelle Agricole (CPA / diplôme requis pour aides à l'installation)",
                "Certiphyto Décideur en Entreprise Soumise à Agrément"
            ],
            "schoolSubjects": [
                "Agronomie",
                "Biologie",
                "Mécanique",
                "Gestion d'entreprise"
            ]
        },
        "career": {
            "sectors": [
                "Exploitations céréalières privées",
                "Coopératives céréalières et de collecte",
                "Entreprises de Travaux Agricoles (ETA)",
                "Sociétés de négoce de grains"
            ],
            "employerTypes": [
                "Entreprises agricoles familiales ou sociétaires (EARL, GAEC)",
                "Agro-industries céréalières"
            ],
            "evolution": "Salarié céréalier ➔ Chef de culture grandes cultures ➔ Chef d'exploitation céréalière installé ➔ Administrateur de coopérative céréalière",
            "pros": "Liberté et indépendance au quotidien, utilisation d'équipements technologiques ultra-modernes, fierté de nourrir la société.",
            "cons": "Revenu dépendant des cours mondiaux et de la météo, investissements initiaux en matériel très lourds."
        },
        "gettingStarted": {
            "beginnerProject": "Participer à une saison de moisson en tant qu'aide-chauffeur dans une exploitation agricole.",
            "intermediateProject": "Calculer l'assolement triennal optimal d'une parcelle céréalière en intégrant une légumineuse.",
            "advancedProject": "Établir le plan d'amortissement et de rentabilité d'un semoir de précision sur 5 ans.",
            "portfolioIdeas": [
                "Plan de fumure et calendrier prévisionnel des travaux céréaliers",
                "Étude comparative blé conventionnel vs blé biologique"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "Les moissonneuses modernes sont dotées de capteurs optiques analysant en continu la qualité du grain et de systèmes de conduite autonome par vision assistée.",
            "automatedTasks": [
                "Modulation automatique des doses d'engrais en fonction des cartes satellites",
                "Direction automatique des engins par guidage GPS/IA"
            ],
            "emergingSkills": [
                "Supervision des chantiers de récolte connectés",
                "Trading de grains via plateformes numériques"
            ],
            "humanEdge": "La décision du moment exact de moissonner et la sensibilité au grain ne remplacent pas l'expérience du céréalier."
        },
        "africaContext": {
            "senegalInsight": "Dans la vallée du fleuve Sénégal (Podor, Dagana, Matam), les producteurs de riz irrigué et de maïs exploitent des casiers de grande envergure avec la SAED, tandis que le bassin arachidier produit le mil et le sorgho vivriers.",
            "localSectors": [
                "Périmètres irrigués de la SAED (Dagana, Richard-Toll)",
                "Bassin arachidier et céréalier (Kaolack, Fatick)",
                "Agro-industries céréalières de Saint-Louis"
            ],
            "remoteWork": "Métier de gestion directe au champ et en hangar.",
            "entrepreneurship": "Création d'entreprises de battage et mécanisation agricole itinérante au service des petits producteurs."
        },
        "relatedJobSlugs": [
            "chef-exploitation-agricole",
            "technico-commercial-agroequipement",
            "ingenieur-agronome",
            "maraicher"
        ],
        "connectedFamilies": [
            "commerce-marketing",
            "industrie-mecanique",
            "numerique-ia"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Métier Céréalier Studyrama",
                "url": "https://www.studyrama.com/formations/fiches-metiers/agriculture/cerealier-91752",
                "source": "Studyrama"
            }
        ],
        "sources": [
            "Studyrama",
            "Chambres d'Agriculture",
            "Passion Céréales",
            "SAED Sénégal"
        ],
        "interests": [
            "nature-environnement",
            "construire-fabriquer",
            "donnees-chiffres"
        ],
        "saviezVous": {
            "statut": "metier_stable",
            "fait": "Selon Studyrama, les céréaliers utilisent aujourd'hui des moissonneuses-batteuses connectées valant plus de 400 000 euros, guidées par satellite au centimètre près.",
            "pourquoi": "L'agriculture de précision permet d'ajuster les intrants mètre carré par mètre carré, réduisant les coûts et protégeant l'environnement.",
            "a_retenir": "Un métier qui a radicalement changé d'image : le céréalier moderne est un chef d'entreprise technologique et un gestionnaire de premier plan."
        },
        "salaryRanges": {
            "france": {
                "raw": "20 000 - 45 000 € net/an (variable selon récoltes et cours des marchés, Source : Studyrama / Chambres d'Agriculture)",
                "range": "20 000 - 45 000 € net/an (variable selon récoltes et cours des marchés, Source : Studyrama / Chambres d'Agriculture)",
                "source": "APECITA / Marché agro-maritime"
            },
            "senegal": {
                "raw": "300 000 - 1 500 000 FCFA / mois (selon taille de l'exploitation céréalière)",
                "range": "300 000 - 1 500 000 FCFA / mois (selon taille de l'exploitation céréalière)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "maraicher",
        "slug": "maraicher",
        "title": "Maraîcher / Producteur Légumier",
        "aliases": [
            "Maraîchère",
            "Producteur de légumes",
            "Horticulteur vivrier",
            "Maraîcher bio"
        ],
        "icon": "🥕",
        "image": "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Végétale & Cultures",
        "domainId": "production-vegetale",
        "subdomain": "Cultures maraîchères & Primeurs",
        "sourceOnisep": false,
        "sourceStudyrama": true,
        "isEmerging": false,
        "level": "CAP / Bac Pro Agricole à Bac +2 (BTS Métiers du Végétal)",
        "salary": "🇫🇷 France : 1 800 - 3 200 € net/mois selon mode de commercialisation (Source : Studyrama / Fiches Légumes) • 🇸🇳 Sénégal : 250 000 - 1 000 000 FCFA / mois (Source : Pôle maraîcher des Niayes)",
        "simpleDefinition": "Le maraîcher cultive une grande variété de légumes, herbes aromatiques et petits fruits en plein champ ou sous serre, en assurant la gestion des semis, de l'irrigation, de la récolte manuelle et de la vente fraîche.",
        "shortDescription": "Fiche documentée par Studyrama, il assure l'alimentation quotidienne des villes en produits frais, locaux et de saison grâce à un savoir-faire horticole minutieux.",
        "longDescription": "Professionnel de la terre aux gestes précis, le maraîcher planifie la rotation rapide des cultures sur l'année pour garantir des récoltes continues (tomates, carottes, oignons, salades, aubergines, choux). Qu'il pratique le maraîchage biologique diversifié sur petite surface ou la production sous serres bioclimatiques équipées de goutte-à-goutte, il valorise ses récoltes en circuits courts ou auprès des grossistes.",
        "mainObjective": "Fournir des légumes frais, savoureux et sains tout en optimisant la fertilité du sol sur des surfaces intensives.",
        "companyRole": "Nourricier de proximité des bassins de vie urbains et acteur clé de l'alimentation saine.",
        "workEnvironment": [
            "🌱 Serres maraîchères, tunnels et parcelles de plein champ",
            "💧 Travail quotidien avec les systèmes d'arrosage et d'irrigation",
            "🛒 Marchés locaux, points de vente à la ferme et coopératives"
        ],
        "missions": [
            "Préparer les planches de culture, épandre le compost organique et poser le paillage",
            "Réaliser les semis en mottes, le repiquage et le tuteurage des plants délicats",
            "Régler l'irrigation au goutte-à-goutte en fonction des besoins hydriques de chaque légume",
            "Pratiquer le désherbage thermique ou mécanique et le lâcher d'auxiliaires contre les pucerons",
            "Récolter à maturité optimale, laver, calibrer, conditionner et vendre les légumes"
        ],
        "typicalDay": [
            {
                "time": "06:00",
                "title": "Récolte matinale des légumes frais",
                "desc": "Cueillette à la fraîcheur des salades, tomates et concombres pour préserver leur croquant."
            },
            {
                "time": "09:30",
                "title": "Lavage, tri et mise en cagettes",
                "desc": "Nettoyage soigné des racines (carottes, navets) et pesée des paniers de commande."
            },
            {
                "time": "14:00",
                "title": "Entretien des serres et repiquage",
                "desc": "Repiquage de jeunes plants de poivrons et taille des gourmands de tomates sous serre."
            },
            {
                "time": "17:00",
                "title": "Vente directe à la ferme et livraisons",
                "desc": "Accueil des clients au magasin de producteurs et chargement des livraisons de restaurants."
            }
        ],
        "skills": {
            "technical": [
                "Agronomie maraîchère & cycles biologiques des légumes",
                "Gestion de l'irrigation fertilisante (fertirrigation)",
                "Techniques de protection biologique intégrée (PBI)",
                "Gestion de serres et tunnels maraîchers",
                "Réglementation de l'agriculture biologique"
            ],
            "human": [
                "Goût pour le travail soigné et rigueur gestuelle",
                "Endurance physique et résistance aux postures penchées",
                "Sens du contact direct avec la clientèle",
                "Organisation et sens de l'anticipation"
            ],
            "tools": [
                "Micro-tracteurs maraîchers et motoculteurs",
                "Semoirs de précision manuels (semoir Jang)",
                "Systèmes d'irrigation goutte-à-goutte",
                "Filets anti-insectes et toiles de paillage biodégradables"
            ],
            "analytical": [
                "Planification du calendrier de rotation des cultures",
                "Calcul des marges par planche maraîchère"
            ]
        },
        "specializations": [
            "Maraîchage biologique diversifié sur petite surface (microferme)",
            "Maraîchage de plein champ mécanisé",
            "Cultures sous serres chauffées / hydroponie",
            "Production de semences paysannes légumières"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "CAP / Bac Pro",
                    "title": "CAP Agricole Métiers de l'Agriculture ou Bac Pro Conduite de Productions Horticoles",
                    "desc": "Apprentissage pratique du travail du sol et des soins aux cultures."
                },
                {
                    "step": "Bac +2",
                    "title": "BTS Agricole Métiers du Végétal : Alimentation, Ornement et Environnement (MVAOE)",
                    "desc": "Compétences techniques renforcées et gestion de production maraîchère."
                },
                {
                    "step": "Bac +3",
                    "title": "Licence Pro Gestion des Systèmes Maraîchers Durables",
                    "desc": "Maîtrise de l'agroécologie légumière et du management de ferme."
                }
            ],
            "schools": [
                {
                    "name": "Lycées horticoles et maraîchers (France)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centre de Formation Professionnelle Horticole (CFPH de Cambérène) — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Centres de formation des Niayes (Kayar, Notto, Mboro) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certificat de Spécialisation (CS) Maraîchage Biologique",
                "Certiphyto"
            ],
            "schoolSubjects": [
                "Agronomie",
                "Botanique",
                "Technologie maraîchère",
                "Gestion commerciale"
            ]
        },
        "career": {
            "sectors": [
                "Exploitations maraîchères indépendantes",
                "Coopératives de maraîchers",
                "Jardins d'insertion sociale et fermes urbaines",
                "Groupements de producteurs bio"
            ],
            "employerTypes": [
                "Fermes maraîchères familiales",
                "Grandes entreprises légumières",
                "Structures de distribution en circuits courts"
            ],
            "evolution": "Ouvrier maraîcher ➔ Chef d'équipe maraîchère ➔ Responsable de cultures sous serres ➔ Installation comme chef d'exploitation maraîchère",
            "pros": "Satisfaction concrète de récolter chaque jour de magnifiques produits, contact direct et chaleureux avec les consommateurs, investissement de départ modéré.",
            "cons": "Travail physique exigeant, horaires matinaux, grande dépendance aux coups de chaleur et aux gelées."
        },
        "gettingStarted": {
            "beginnerProject": "Cultiver 5 variétés de légumes feuilles et racines dans un potager expérimental en mesurant les rendements.",
            "intermediateProject": "Mettre en place un système d'irrigation goutte-à-goutte gravitaire automatisé par programmateur à pile.",
            "advancedProject": "Élaborer le calendrier annuel prévisionnel de production de 30 légumes pour approvisionner 50 paniers hebdomadaires.",
            "portfolioIdeas": [
                "Plan de rotation sur 4 ans d'une parcelle légumière",
                "Fiche technique de rentabilité d'une serre de tomates cerises"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'automatisation progresse dans les serres connectées grâce à des robots désherbeurs légers et à des régulateurs climatiques intelligents.",
            "automatedTasks": [
                "Régulation automatisée de l'aération et de l'ombrage des serres",
                "Désherbage mécanique autonome de précision"
            ],
            "emergingSkills": [
                "Pilotage de stations fertirrigation connectées",
                "Gestion de l'e-commerce fermier et des commandes en ligne"
            ],
            "humanEdge": "Le savoir-faire de récolte des légumes fragiles à parfaite maturité sans les abîmer demeure un geste humain irremplaçable."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la bande côtière des Niayes (de Dakar à Saint-Louis en passant par Mboro et Notto) concentre plus de 80% de la production maraîchère nationale (chou, oignon, pomme de terre, carotte, piment, mangue).",
            "localSectors": [
                "Pôle des Niayes (Mboro, Notto Gouye Diama, Kayar)",
                "Ceinture verte de Dakar (Pikine, Cambérène)",
                "Périmètres maraîchers du lac de Guiers"
            ],
            "remoteWork": "Métier exclusivement d'action physique sur le terrain des parcelles.",
            "entrepreneurship": "Création de fermes maraîchères en bio-intensif, fourniture de légumes bio aux supermarchés et restaurants de Dakar."
        },
        "relatedJobSlugs": [
            "horticulteur",
            "cerealier",
            "pepinieriste",
            "chef-exploitation-agricole"
        ],
        "connectedFamilies": [
            "commerce-marketing",
            "environnement-climat",
            "sante-biomedical"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Maraîcher Studyrama",
                "url": "https://www.studyrama.com/formations/fiches-metiers/agriculture/maraicher-91749",
                "source": "Studyrama"
            }
        ],
        "sources": [
            "Studyrama",
            "CFPH Cambérène",
            "FNSEA",
            "Chambres d'Agriculture"
        ],
        "interests": [
            "nature-environnement",
            "construire-fabriquer"
        ],
        "saviezVous": {
            "statut": "metier_stable",
            "fait": "Selon Studyrama, l'engouement croissant pour les circuits courts et le 'manger local' crée une forte demande pour les maraîchers diversifiés.",
            "pourquoi": "Les consommateurs recherchent la fraîcheur, la traçabilité et le goût que la grande importation ne peut égaler.",
            "a_retenir": "Un métier nourricier par excellence qui permet de créer rapidement son activité sur de petites surfaces grâce à une forte valeur ajoutée à l'hectare."
        },
        "salaryRanges": {
            "france": {
                "raw": "1 800 - 3 200 € net/mois selon mode de commercialisation (Source : Studyrama / Fiches Légumes)",
                "range": "1 800 - 3 200 € net/mois selon mode de commercialisation (Source : Studyrama / Fiches Légumes)",
                "source": "APECITA / Marché agro-maritime"
            },
            "senegal": {
                "raw": "250 000 - 1 000 000 FCFA / mois (Source : Pôle maraîcher des Niayes)",
                "range": "250 000 - 1 000 000 FCFA / mois (Source : Pôle maraîcher des Niayes)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "horticulteur",
        "slug": "horticulteur",
        "title": "Horticulteur / Technicien Horticole",
        "aliases": [
            "Technicienne horticole",
            "Horticultrice",
            "Producteur de plantes ornementales"
        ],
        "icon": "🌸",
        "image": "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Végétale, Cultures Spécialisées & Horticulture",
        "domainId": "production-vegetale",
        "subdomain": "Horticulture ornementale & florale",
        "sourceOnisep": true,
        "sourceStudyrama": true,
        "isEmerging": false,
        "level": "CAP / Bac Pro Agricole à Bac +2 (BTS Métiers du Végétal)",
        "salary": "🇫🇷 France : 1 800 - 2 500 € brut/mois débutant (~21 600 - 30 000 €/an, Source : Onisep / Studyrama) • 🇸🇳 Sénégal : 200 000 - 750 000 FCFA / mois (Source : Entreprises horticoles & paysagères)",
        "simpleDefinition": "L'horticulteur cultive des fleurs, des plantes ornementales, des arbustes ou des plantes en pot en serres ou en pépinières pour embellir jardins, terrasses et espaces urbains.",
        "shortDescription": "Fiche documentée par Onisep et Studyrama, ce spécialiste du règne végétal maîtrise la reproduction, le bouturage, l'arrosage et la fertilisation des végétaux d'ornement.",
        "longDescription": "Véritable artisan du vivant, l'horticulteur sélectionne les variétés, gère la germination, le rempotage, la taille et le traitement préventif contre les ravageurs. Il travaille souvent dans des serres modernes où température, hygrométrie et éclairage sont régulés par ordinateur. Il conseille également les jardineries, paysagistes et municipalités dans le choix des essences les plus adaptées.",
        "mainObjective": "Produire des végétaux ornementaux vigoureux et florifères répondant aux attentes paysagères et esthétiques.",
        "companyRole": "Garant de la qualité visuelle, sanitaire et de la diversité botanique des végétaux commercialisés.",
        "workEnvironment": [
            "🌺 Serres horticoles tempérées et pépinières extérieures",
            "💧 Manipulation quotidienne d'outils d'arrosage, rempoteuses et sécateurs",
            "🏪 Relations régulières avec paysagistes, fleuristes et particuliers"
        ],
        "missions": [
            "Assurer la multiplication des végétaux par semis, bouturage, marcottage ou greffage",
            "Contrôler le climat des serres (ventilation, brumisation, ombrage, température)",
            "Gérer la fertilisation par irrigation goutte-à-goutte et le rempotage mécanisé",
            "Mettre en œuvre la protection biologique intégrée (lâchers d'insectes utiles contre les acariens)",
            "Conditionner les plantes pour l'expédition vers les jardineries et marchés aux fleurs"
        ],
        "typicalDay": [
            {
                "time": "07:30",
                "title": "Tournée sanitaire des serres",
                "desc": "Vérification de l'état hydrique des godets et détection visuelle précoce des maladies fongiques."
            },
            {
                "time": "09:30",
                "title": "Chantier de bouturage et rempotage",
                "desc": "Prélèvement de boutures de géraniums et pilotage de la rempoteuse automatisée."
            },
            {
                "time": "14:00",
                "title": "Réglage de la brumisation et fertilisation",
                "desc": "Ajustement du programmateur de fertirrigation selon l'ensoleillement de l'après-midi."
            },
            {
                "time": "16:30",
                "title": "Préparation des commandes clients",
                "desc": "Étiquetage variétal, mise sur chariots danois et contrôle qualité avant expédition."
            }
        ],
        "skills": {
            "technical": [
                "Botanique appliquée & physiologie végétale",
                "Techniques de multiplication végétative (greffe, bouture)",
                "Conduite des serres bioclimatiques",
                "Protection biologique intégrée (PBI)",
                "Gestion des substrats de culture"
            ],
            "human": [
                "Rigueur et délicatesse du geste",
                "Sens de l'esthétique et des couleurs",
                "Patience face aux rythmes naturels des plantes",
                "Bonne résistance physique"
            ],
            "tools": [
                "Rempoteuses automatiques",
                "Programmateurs de fertirrigation",
                "Chariots horticoles de manutention",
                "Sécateurs et cisailles de précision"
            ],
            "analytical": [
                "Calcul des besoins en engrais solubles",
                "Planification des dates de floraison pour les fêtes (Noël, Fête des Mères)"
            ]
        },
        "specializations": [
            "Horticulture florale (plantes fleuries)",
            "Pépinière ornementale (arbres et arbustes)",
            "Cactus et plantes succulentes",
            "Production de plantes aromatiques en pot"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "CAP / Bac Pro",
                    "title": "CAP Agricole Métiers de l'Agriculture ou Bac Pro Productions Horticoles",
                    "desc": "Maîtrise pratique de la multiplication et de la conduite des cultures en serre."
                },
                {
                    "step": "Bac +2",
                    "title": "BTS Agricole Métiers du Végétal (MVAOE)",
                    "desc": "Gestion technique et économique d'une exploitation horticole."
                },
                {
                    "step": "Bac +3",
                    "title": "Licence Pro Gestion de la Santé des Plantes ou Management des Entreprises Horticoles",
                    "desc": "Expertise en biosécurité végétale et encadrement d'équipes."
                }
            ],
            "schools": [
                {
                    "name": "Lycées d'enseignement général et technologique agricole (LEGTA) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centre de Formation Professionnelle Horticole (CFPH Cambérène) — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "École d'Horticulture de Saint-Louis — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certiphyto Décideur / Opérateur",
                "CS Conduite d'un élevage ou de cultures en serres"
            ],
            "schoolSubjects": [
                "Botanique",
                "Agronomie",
                "Biologie végétale",
                "Gestion d'entreprise"
            ]
        },
        "career": {
            "sectors": [
                "Entreprises horticoles privées",
                "Jardineries et grossistes en végétaux",
                "Services espaces verts des grandes métropoles",
                "Jardins botaniques nationaux"
            ],
            "employerTypes": [
                "Producteurs horticoles",
                "Pépinières paysagères",
                "Collectivités territoriales"
            ],
            "evolution": "Ouvrier horticole ➔ Chef de serre ➔ Responsable de production horticole ➔ Directeur d'exploitation ou gérant de jardinerie",
            "pros": "Cadre de travail agréable et verdoyant, plaisir de voir s'épanouir les végétaux, débouchés constants.",
            "cons": "Chaleur et humidité sous serre en été, manipulation répétitive de charges, pics d'activité saisonniers intenses."
        },
        "gettingStarted": {
            "beginnerProject": "Réussir le bouturage et le sevrage de 20 variétés de plantes d'intérieur ornementales.",
            "intermediateProject": "Concevoir un plan d'arrosage automatique basse pression pour une serre de 50 m².",
            "advancedProject": "Élaborer un programme annuel de floraison échelonnée pour fournir les décorations florales d'une collectivité.",
            "portfolioIdeas": [
                "Herbier photographique d'essences ornementales",
                "Fiche de conduite climatique d'une serre de bégonias"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des caméras multispectrales montées sur rails détectent automatiquement les carences minérales et les attaques de ravageurs avant l'œil humain.",
            "automatedTasks": [
                "Surveillance continue de la croissance par imagerie numérique",
                "Dosage automatique des nutriments par injection assistée"
            ],
            "emergingSkills": [
                "Supervision des logiciels de serre autonome",
                "Sélection de variétés résistantes au stress thermique"
            ],
            "humanEdge": "L'œil esthétique et la sensibilité tactile pour juger de la vigueur d'une plante restent irremplaçables."
        },
        "africaContext": {
            "senegalInsight": "Le secteur horticole sénégalais est en plein boom, porté par la demande en aménagement paysager des nouvelles cités (Diamniadio, Saly, Almadies) et l'exportation de fleurs coupées et de plantes vertes.",
            "localSectors": [
                "Ceinture horticole des Niayes",
                "Pépinières de la zone périurbaine de Dakar et Thiès",
                "Fermes horticoles de la Petite Côte"
            ],
            "remoteWork": "Travail en direct sur les pépinières et dans les serres.",
            "entrepreneurship": "Création d'une pépinière de plantes ornementales adaptées au climat sahélien (bougainvilliers, palmiers, flamboyants) avec service de location pour entreprises."
        },
        "relatedJobSlugs": [
            "pepinieriste",
            "maraicher",
            "jardinier-paysagiste",
            "ingenieur-agronome"
        ],
        "connectedFamilies": [
            "environnement-climat",
            "artisanat-metiers-art",
            "commerce-marketing"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Métier Horticulteur Onisep",
                "url": "https://www.onisep.fr",
                "source": "Onisep"
            }
        ],
        "sources": [
            "Onisep",
            "Studyrama",
            "CFPH Cambérène"
        ],
        "interests": [
            "nature-environnement",
            "construire-fabriquer"
        ],
        "saviezVous": {
            "statut": "metier_stable",
            "fait": "Selon l'Onisep et Studyrama, l'horticulture moderne s'oriente massivement vers la protection biologique intégrée, remplaçant les pesticides par des insectes prédateurs naturels.",
            "pourquoi": "Cette transition écologique répond à la demande des citoyens et aux normes environnementales tout en préservant la santé des cultivateurs.",
            "a_retenir": "Un métier combinant amour des plantes, rigueur scientifique et sens commercial dans un secteur en constante évolution verte."
        },
        "salaryRanges": {
            "france": {
                "raw": "1 800 - 2 500 € brut/mois débutant (~21 600 - 30 000 €/an, Source : Onisep / Studyrama)",
                "range": "1 800 - 2 500 € brut/mois débutant (~21 600 - 30 000 €/an, Source : Onisep / Studyrama)",
                "source": "Onisep / Studyrama"
            },
            "senegal": {
                "raw": "200 000 - 750 000 FCFA / mois (Source : Entreprises horticoles & paysagères)",
                "range": "200 000 - 750 000 FCFA / mois (Source : Entreprises horticoles & paysagères)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "pepinieriste",
        "slug": "pepinieriste",
        "title": "Pépiniériste / Producteur d'Arbres et Arbustes",
        "aliases": [
            "Pépiniériste forestier",
            "Productrice en pépinière",
            "Multiplicateur de végétaux ligneux"
        ],
        "icon": "🌲",
        "image": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Végétale, Cultures Spécialisées & Horticulture",
        "domainId": "production-vegetale",
        "subdomain": "Pépinières fruitières & ornementales",
        "sourceOnisep": true,
        "sourceStudyrama": true,
        "isEmerging": false,
        "level": "CAP / Bac Pro Agricole à Bac +2 (BTS Productions Végétales)",
        "salary": "🇫🇷 France : 1 800 - 2 600 € brut/mois débutant (~21 600 - 31 200 €/an, Source : Studyrama) • 🇸🇳 Sénégal : 220 000 - 800 000 FCFA / mois (Source : Pépinières d'arbres fruitiers & reboisement)",
        "simpleDefinition": "Le pépiniériste élève des jeunes arbres, arbustes, fruitiers et plants forestiers pendant plusieurs années, de la germination ou greffe jusqu'à leur vente pour les parcs, vergers et forêts.",
        "shortDescription": "Fiche documentée par Onisep et Studyrama, il forme la charpente de nos futurs vergers et forêts en façonnant patiemment le tronc et les racines des jeunes arbres.",
        "longDescription": "Contrairement à l'horticulteur qui travaille sur des cycles courts (fleurs en mois), le pépiniériste cultive sur le long terme : un jeune arbre fruitier ou forestier demande 2 à 5 ans de soins minutieux (greffage en écusson, cernage des racines, tuteurage, taille de formation en gobelet ou palmette). Il joue un rôle crucial dans le reboisement, la constitution de vergers résilients et la renaturation des villes.",
        "mainObjective": "Produire des jeunes arbres sains, vigoureux, fidèles à leur variété et parfaitement enracinés pour garantir leur reprise en pleine terre.",
        "companyRole": "Premier maillon de la filière arboricole, forestière et du paysage urbain.",
        "workEnvironment": [
            "🌳 Parcelles de plein champ étendues et conteneurs d'élevage en extérieur",
            "🚜 Matériel de levage et arracheuses de mottes",
            "🧤 Travail par tous les temps au rythme des saisons"
        ],
        "missions": [
            "Sélectionner des porte-greffes vigoureux et prélever des greffons sains",
            "Exécuter avec précision les opérations de greffage (fente, écussonnage, couronne)",
            "Conduire la taille de formation des branches pour créer la silhouette désirée (tiges, fuseaux)",
            "Pratiquer le cernage racinaire pour favoriser un chevelu racinaire dense facilitant la reprise",
            "Arracher, mettre en jauge, conditionner en racines nues ou en motte grillagée pour les chantiers"
        ],
        "typicalDay": [
            {
                "time": "07:30",
                "title": "Atelier matinal de greffage",
                "desc": "Greffage au couteau à greffer sur porte-greffes de pommiers ou manguiers avec ligature étanche."
            },
            {
                "time": "10:30",
                "title": "Taille de formation des jeunes tiges",
                "desc": "Suppression des gourmands et tuteurage sur bambou pour garantir des fûts bien droits."
            },
            {
                "time": "14:00",
                "title": "Arrachage mécanisé et mise en motte",
                "desc": "Pilotage de la bêcheuse mécanique pour extraire les motteuses sans abîmer les racines."
            },
            {
                "time": "16:30",
                "title": "Conseil aux pépiniéristes revendeurs",
                "desc": "Accueil d'arboriculteurs pour choisir les variétés fruitières les plus adaptées à leur terroir."
            }
        ],
        "skills": {
            "technical": [
                "Techniques de greffage expertes",
                "Morphologie et architecture des arbres ligneux",
                "Connaissance des porte-greffes et compatibilités",
                "Techniques d'arrachage et d'empotage",
                "Pathologie végétale des essences ligneuses"
            ],
            "human": [
                "Patience et vision à long terme",
                "Dextérité manuelle remarquable (greffage)",
                "Résistance physique au travail en plein air",
                "Sens de l'organisation des stocks vivants"
            ],
            "tools": [
                "Couteaux à greffer (greffoirs)",
                "Ligatures et mastics à cicatriser",
                "Arracheuses de mottes et mini-pelles",
                "Tuteurs et attaches biodégradables"
            ],
            "analytical": [
                "Gestion des temps d'élevage sur 3 à 7 ans",
                "Calcul des taux de réussite au greffage"
            ]
        },
        "specializations": [
            "Pépinière fruitière (vergers)",
            "Pépinière forestière (reboisement)",
            "Pépinière ornementale de gros sujets (arbres de ville)",
            "Pépinière de porte-greffes viticoles"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "CAP / Bac Pro",
                    "title": "Bac Pro Conduite de Productions Horticoles (option Pépinière)",
                    "desc": "Apprentissage des bases du greffage et de l'élevage des jeunes plants."
                },
                {
                    "step": "Bac +2",
                    "title": "BTS Agricole Métiers du Végétal (MVAOE) ou Productions Végétales",
                    "desc": "Conduite technique de chantiers et gestion technico-commerciale."
                },
                {
                    "step": "Bac +3",
                    "title": "Licence Pro Gestion des Arbres en Milieu Urbain ou Arboriculture",
                    "desc": "Spécialisation dans les essences adaptées au changement climatique."
                }
            ],
            "schools": [
                {
                    "name": "Lycées professionnels agricoles spécialisés arboriculture (France)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "CFPH de Cambérène — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Institut Supérieur de Formation Agricole et Rurale (ISFAR Bambey) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certiphyto",
                "Caces mini-pelles et engins de manutention"
            ],
            "schoolSubjects": [
                "Dendrologie",
                "Physiologie végétale",
                "Machinisme",
                "Agronomie"
            ]
        },
        "career": {
            "sectors": [
                "Pépinières fruitières et forestières privées",
                "Offices nationaux des forêts",
                "Entreprises du paysage et de renaturation",
                "Centres de recherche agronomique"
            ],
            "employerTypes": [
                "Pépinières de production",
                "Collectivités et parcs nationaux",
                "Coopératives arboricoles"
            ],
            "evolution": "Greffeur ouvrier ➔ Chef de culture pépinière ➔ Responsable d'exploitation pépinière ➔ Pépiniériste exploitant indépendant",
            "pros": "Création d'arbres qui traverseront les décennies, travail noble de revégétalisation de la planète, forte demande liée au reboisement.",
            "cons": "Cycle de retour sur investissement long (plusieurs années), travail physique par temps froid et humide en hiver, aléas climatiques (gel tardif)."
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser avec succès 50 greffes en fente d'arbres fruitiers et observer leur cicatrisation.",
            "intermediateProject": "Mettre en place un banc d'élevage de porte-greffes avec irrigation raisonnée par micro-aspersion.",
            "advancedProject": "Calculer le plan de production sur 5 ans d'une pépinière forestière de 50 000 plants destinés au reboisement sahélien.",
            "portfolioIdeas": [
                "Journal photographique de greffage",
                "Schéma comparatif d'enracinement selon les techniques de cernage"
            ]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "Si la traçabilité RFID des arbres s'impose, le geste de greffage et l'évaluation de la charpente de l'arbre restent manuels.",
            "automatedTasks": [
                "Puces RFID d'inventaire parcellaire",
                "Guidage GPS des arracheuses de mottes"
            ],
            "emergingSkills": [
                "Sélection d'arbres tolérants aux sécheresses sévères",
                "Gestion informatisée des stocks pluriannuels"
            ],
            "humanEdge": "La précision millimétrique de la greffe et la vision dans l'espace de la future couronne d'un arbre échappent aux robots."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les pépiniéristes fruitiers (manguiers greffés Kent/Keitt, agrumes, anacardiers, papayers, baobabs) et forestiers (acacias pour la Grande Muraille Verte) jouent un rôle vital pour la sécurité alimentaire et la lutte contre la désertification.",
            "localSectors": [
                "Pépinières fruitières des Niayes et de Casamance",
                "Chantiers de la Grande Muraille Verte (Ferlo)",
                "Pépinières urbaines le long des axes routiers de Dakar et Thiès"
            ],
            "remoteWork": "100% sur le terrain.",
            "entrepreneurship": "Création d'une pépinière spécialisée en semences et jeunes plants de fruitiers améliorés à forte rentabilité (anacarde, mangue, corossol)."
        },
        "relatedJobSlugs": [
            "horticulteur",
            "ingenieur-forestier",
            "jardinier-paysagiste",
            "elagueur-grimpeur"
        ],
        "connectedFamilies": [
            "environnement-climat",
            "artisanat-metiers-art",
            "industrie-ingenierie"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Métier Pépiniériste Studyrama",
                "url": "https://www.studyrama.com/formations/fiches-metiers/agriculture/pepinieriste-91753",
                "source": "Studyrama"
            }
        ],
        "sources": [
            "Studyrama",
            "Onisep",
            "FNPHP"
        ],
        "interests": [
            "nature-environnement",
            "construire-fabriquer"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon Studyrama, les maîtres-greffeurs et chefs de culture pépinière sont activement recherchés pour renouveler les vergers et approvisionner les plans massifs de reboisement mondial.",
            "pourquoi": "La précision du geste de greffe s'apprend sur le terrain et peu de jeunes maîtrisent aujourd'hui cette expertise séculaire.",
            "a_retenir": "Un métier d'artisanat végétal hautement valorisant pour qui souhaite planter les arbres qui façonneront les paysages de demain."
        },
        "salaryRanges": {
            "france": {
                "raw": "1 800 - 2 600 € brut/mois débutant (~21 600 - 31 200 €/an, Source : Studyrama)",
                "range": "1 800 - 2 600 € brut/mois débutant (~21 600 - 31 200 €/an, Source : Studyrama)",
                "source": "Onisep / Studyrama"
            },
            "senegal": {
                "raw": "220 000 - 800 000 FCFA / mois (Source : Pépinières d'arbres fruitiers & reboisement)",
                "range": "220 000 - 800 000 FCFA / mois (Source : Pépinières d'arbres fruitiers & reboisement)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "oenologue",
        "slug": "oenologue",
        "title": "Œnologue / Expert en Vinification et Élevage",
        "aliases": [
            "Œnologue conseil",
            "Maître de vinification",
            "Expert œnologique"
        ],
        "icon": "🍇",
        "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Végétale, Cultures Spécialisées & Horticulture",
        "domainId": "production-vegetale",
        "subdomain": "Viticulture & œnologie",
        "sourceOnisep": true,
        "sourceStudyrama": true,
        "isEmerging": false,
        "level": "Bac +5 (Diplôme National d'Œnologue - DNO)",
        "salary": "🇫🇷 France : 2 500 - 3 500 € brut/mois débutant (~30 000 - 42 000 €/an, Source : Onisep / Studyrama) • 🇸🇳 International / Afrique : Expertises vinicoles (Afrique du Sud, Maroc) ou boissons fermentées locales (350 000 - 1 200 000 FCFA / mois)",
        "simpleDefinition": "L'œnologue est le spécialiste scientifique et technique du vin. Il supervise la vinification, de la vendange à la mise en bouteille, garantissant la qualité gustative et sanitaire des cuvées.",
        "shortDescription": "Fiche documentée par Onisep et Studyrama, titulaire du DNO (Bac +5), il allie biochimie de pointe, maîtrise sensorielle et conseil auprès des vignerons.",
        "longDescription": "L'œnologue ne se contente pas de déguster : c'est un expert des fermentations alcoolique et malolactique, de la microbiologie des levures et de la chimie des arômes. Selon l'Onisep, il conseille le viticulteur sur le choix du cépage, la date optimale des vendanges, la macération, l'assemblage et le vieillissement en fûts de chêne. Il peut exercer en domaine viticole, en laboratoire d'analyses œnologiques ou comme consultant indépendant.",
        "mainObjective": "Révéler le potentiel qualitatif du raisin et créer des vins équilibrés, stables et conformes à l'identité de leur terroir.",
        "companyRole": "Pilier qualitatif et garant de la signature sensorielle et de la conformité analytique des vins.",
        "workEnvironment": [
            "🍷 Chais de vinification et cuveries",
            "🔬 Laboratoires d'analyses physico-chimiques et microbiologiques",
            "🌾 Visites de vignes et comités de dégustation internationaux"
        ],
        "missions": [
            "Analyser la maturité des baies (sucres, acidité, polyphénols) pour fixer le ban des vendanges",
            "Superviser les opérations de pressurage, macération, sulfitage raisonné et levurage",
            "Suivre quotidiennement les cinétiques fermentaires par analyses de densité et température",
            "Diriger les séances d'assemblage des différents cépages et cuves pour créer les cuvées finales",
            "Gérer la filtration, la stabilisation tartrique et la mise en bouteille stérile"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Tournée des cuves en fermentation",
                "desc": "Prélèvement d'échantillons, contrôle des températures et dégustation des moûts en cours de travail."
            },
            {
                "time": "10:30",
                "title": "Analyses chromatographiques au laboratoire",
                "desc": "Dosage du SO2 libre, de l'acidité volatile et contrôle de l'absence de brettanomyces."
            },
            {
                "time": "14:30",
                "title": "Séance d'assemblage avec le propriétaire",
                "desc": "Essais comparatifs de pourcentages Cabernet/Merlot pour définir le grand vin du millésime."
            },
            {
                "time": "17:00",
                "title": "Conseil technique et préparation des certifications",
                "desc": "Validation des fiches d'embouteillage et conformité avec les cahiers des charges AOP/AOC."
            }
        ],
        "skills": {
            "technical": [
                "Biochimie et microbiologie œnologique",
                "Chimie analytique appliquée aux vins",
                "Maîtrise de la dégustation organoleptique critique",
                "Conduite des équipements de cave (pressoirs, filtres tangentiels)",
                "Réglementation vitivinicole européenne et internationale"
            ],
            "human": [
                "Précision sensorielle et mémoire olfactive",
                "Pédagogie et diplomatie avec les vignerons",
                "Rigueur d'analyse scientifique",
                "Résistance au stress en période de vendanges"
            ],
            "tools": [
                "Spectrophotomètres infrarouges (FOSS Winescan)",
                "Réfractomètres et densimètres numériques",
                "Microscopes pour comptage levurien",
                "Fûts de chêne et cuves thermorégulées"
            ],
            "analytical": [
                "Interprétation des profils chromatographiques",
                "Diagnostic des défauts du vin (réduction, oxydation)"
            ]
        },
        "specializations": [
            "Œnologie conseil indépendante",
            "Direction technique de grand cru classé",
            "Laboratoire d'analyses et de certification œnologique",
            "Boissons fermentées innovantes et spiritueux"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Bac +3",
                    "title": "Licence Sciences de la Vigne, Chimie ou Biologie",
                    "desc": "Bases solides en biochimie, chimie organique et physiologie végétale."
                },
                {
                    "step": "Bac +5",
                    "title": "Diplôme National d'Œnologue (DNO)",
                    "desc": "Titre protégé délivré par seulement 6 universités et écoles agronomiques habilitées en France."
                }
            ],
            "schools": [
                {
                    "name": "Institut des Sciences de la Vigne et du Vin (ISVV) — Université de Bordeaux (France)",
                    "country": "France",
                    "scope": "International"
                },
                {
                    "name": "Institut Agro Montpellier — DNO (France)",
                    "country": "France",
                    "scope": "International"
                },
                {
                    "name": "Université de Bourgogne (Dijon) / Université de Reims — DNO",
                    "country": "France",
                    "scope": "France"
                }
            ],
            "certifications": [
                "Diplôme National d'Œnologue (titre réglementé)",
                "WSET Level 3 / 4 Award in Wines"
            ],
            "schoolSubjects": [
                "Microbiologie",
                "Chimie du vin",
                "Viticulture",
                "Dégustation sensorielle"
            ]
        },
        "career": {
            "sectors": [
                "Domaines et châteaux viticoles",
                "Caves coopératives",
                "Laboratoires d'analyses œnologiques privés",
                "Négociants en vins et spiritueux"
            ],
            "employerTypes": [
                "Exploitations viticoles",
                "Bureaux d'études œnologiques",
                "Groupes de vins et spiritueux internationaux"
            ],
            "evolution": "Œnologue junior en laboratoire ➔ Œnologue conseil ➔ Maître de chai ➔ Directeur technique d'un domaine ou gérant de laboratoire",
            "pros": "Métier de prestige alliant haute science et plaisir épicurien, reconnaissance internationale des compétences françaises, voyages réguliers dans les vignobles du monde.",
            "cons": "Intensité extrême pendant les semaines de vendanges (7j/7, journées de 14h), responsabilité lourde sur des volumes valant des millions d'euros."
        },
        "gettingStarted": {
            "beginnerProject": "S'entraîner à la reconnaissance olfactive à l'aide d'un coffret 'Le Nez du Vin' (54 arômes).",
            "intermediateProject": "Participer à une saison complète de vendanges et vinification comme aide de cave dans un domaine.",
            "advancedProject": "Réaliser une micro-vinification expérimentale de 50 litres en suivant l'évolution analytique quotidienne.",
            "portfolioIdeas": [
                "Compte-rendu d'analyse critique d'un assemblage",
                "Mémoire de fin d'études DNO sur l'impact du réchauffement climatique sur les acidités"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'intelligence artificielle optimise les cinétiques de fermentation et prédit les profils aromatiques, mais la décision finale d'assemblage reste humaine.",
            "automatedTasks": [
                "Surveillance continue des courbes de densité/température par capteurs IoT",
                "Prédiction des risques d'arrêts de fermentation"
            ],
            "emergingSkills": [
                "Adaptation des pratiques œnologiques aux vendanges caniculaires (gestion de l'alcool élevé)",
                "Maîtrise des techniques de désalcoolisation partielle"
            ],
            "humanEdge": "La sensibilité hédonique et l'émotion de dégustation d'un grand vin demeurent l'apanage exclusif de l'humain."
        },
        "africaContext": {
            "senegalInsight": "Si le Sénégal ne possède pas de vignobles traditionnels, les compétences en biochimie des fermentations s'appliquent à l'agro-industrie des jus fermentés, du vinaigre de mangue, de la bière locale et de la valorisation des fruits tropicaux.",
            "localSectors": [
                "Unités de transformation de fruits et boissons fermentées (Dakar, Thiès)",
                "Hôtellerie de luxe et sommellerie (Dakar, Almadies, Saly)",
                "Importation et conservation des grands vins"
            ],
            "remoteWork": "Travail en laboratoire et chai.",
            "entrepreneurship": "Création d'une gamme de boissons artisanales fermentées haut de gamme valorisant le bissap, le pain de singe (baobab) ou la mangue."
        },
        "relatedJobSlugs": [
            "maitre-de-chai",
            "ingenieur-agroalimentaire",
            "responsable-qualite-haccp-agri",
            "ingenieur-agronome"
        ],
        "connectedFamilies": [
            "hotellerie-tourisme-restauration",
            "chimie-biologie",
            "commerce-marketing"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Œnologue Onisep",
                "url": "https://www.onisep.fr/ressources/univers-metier/metiers/oenologue",
                "source": "Onisep"
            }
        ],
        "sources": [
            "Onisep",
            "Studyrama",
            "Union des Œnologues de France (UOEF)"
        ],
        "interests": [
            "nature-environnement",
            "resoudre-problemes"
        ],
        "saviezVous": {
            "statut": "metier_stable",
            "fait": "Selon l'Onisep, le titre d'œnologue est strictement protégé par la loi du 19 mars 1955 : nul ne peut se dire œnologue sans détenir le Diplôme National d'Œnologue (Bac +5).",
            "pourquoi": "Cette protection garantit la sécurité alimentaire, la traçabilité sanitaire et le rayonnement international du patrimoine viticole.",
            "a_retenir": "Un scientifique indispensable qui façonne le vin avec rigueur biochimique et sensibilité gustative."
        },
        "salaryRanges": {
            "france": {
                "raw": "2 500 - 3 500 € brut/mois débutant (~30 000 - 42 000 €/an, Source : Onisep / Studyrama)",
                "range": "2 500 - 3 500 € brut/mois débutant (~30 000 - 42 000 €/an, Source : Onisep / Studyrama)",
                "source": "Onisep / Studyrama"
            },
            "senegal": {
                "raw": "Expertises vinicoles (Afrique du Sud, Maroc) ou boissons fermentées locales (350 000 - 1 200 000 FCFA / mois)",
                "range": "Expertises vinicoles (Afrique du Sud, Maroc) ou boissons fermentées locales (350 000 - 1 200 000 FCFA / mois)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "responsable-elevage",
        "slug": "responsable-elevage",
        "title": "Responsable d'Élevage / Chef d'Élevage",
        "aliases": [
            "Chef d'exploitation d'élevage",
            "Gestionnaire de troupeau",
            "Éleveur professionnel"
        ],
        "icon": "🐄",
        "image": "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Élevage, Santé & Productions Animales",
        "domainId": "elevage-productions-animales",
        "subdomain": "Élevage bovin, ovin & caprin",
        "sourceOnisep": true,
        "sourceStudyrama": true,
        "isEmerging": false,
        "level": "Bac Pro Agricole (CGEA) à Bac +2 (BTS Productions Animales)",
        "salary": "🇫🇷 France : 2 000 - 3 200 € net/mois selon taille du troupeau (Source : Studyrama / Fiches Élevage) • 🇸🇳 Sénégal : 300 000 - 1 200 000 FCFA / mois (Source : Fermes laitières & embouche bovine)",
        "simpleDefinition": "Le responsable d'élevage supervise la conduite globale d'un troupeau (bovins, ovins, porcins ou caprins) : alimentation rationnée, reproduction, traite, confort des bêtes et suivi sanitaire rigoureux.",
        "shortDescription": "Fiche documentée par Onisep et Studyrama, il garantit la bonne santé des animaux, la qualité du lait ou de la viande et la viabilité économique de l'atelier d'élevage.",
        "longDescription": "Homme ou femme de bêtes, le responsable d'élevage maîtrise la zootechnie moderne. Il calcule les rations alimentaires équilibrées (fourrages, concentrés, minéraux), planifie les périodes de reproduction et d'insémination artificielle, assiste les mises bas et veille au bien-être animal (ventilation des stabulations, litières propres, accès aux pâtures). Dans les élevages laitiers, il pilote les salles de traite automatisées ou les robots de traite connectés.",
        "mainObjective": "Assurer des performances de production élevées (lait ou viande) dans le respect strict du bien-être animal et des normes sanitaires.",
        "companyRole": "Gestionnaire technique, garant de la bientraitance animale et de la rentabilité de l'exploitation d'élevage.",
        "workEnvironment": [
            "🐮 Étables, stabulations libres, salles de traite et prairies de pâturage",
            "🚜 Engins de distribution d'aliments (mélangeuses, désileuses)",
            "📞 Collaboration étroite avec le vétérinaire rural et le contrôleur laitier"
        ],
        "missions": [
            "Concevoir et distribuer les rations alimentaires adaptées aux stades physiologiques des animaux",
            "Assurer la surveillance sanitaire quotidienne (détection des mammites, boiteries, fièvre)",
            "Superviser ou réaliser la traite bi-quotidienne et garantir l'hygiène irréprochable du lait",
            "Planifier le calendrier de reproduction, détecter les chaleurs et suivre les gestations",
            "Tenir le registre d'élevage et assurer la traçabilité réglementaire de chaque animal"
        ],
        "typicalDay": [
            {
                "time": "05:30",
                "title": "Première traite et soins matinaux",
                "desc": "Démarrage de la salle de traite, contrôle de la qualité du lait et nettoyage des faisceaux trayeurs."
            },
            {
                "time": "08:30",
                "title": "Alimentation et paillage de la stabulation",
                "desc": "Distribution de la ration mélangée avec le tracteur désileur et réfection des litières de paille."
            },
            {
                "time": "14:00",
                "title": "Visite sanitaire et insémination",
                "desc": "Accueil du vétérinaire pour le suivi d'échographies de gestation et insémination d'une génisse en chaleur."
            },
            {
                "time": "17:30",
                "title": "Seconde traite et bilan du robot",
                "desc": "Seconde traite de la journée, analyse des alertes du logiciel de détection de rumination."
            }
        ],
        "skills": {
            "technical": [
                "Zootechnie générale et nutrition animale",
                "Pathologie vétérinaire de base et détection des symptômes",
                "Conduite de la reproduction et des vêlages",
                "Maîtrise des technologies de traite (robots, salles rotatives)",
                "Gestion des pâturages et de l'herbe"
            ],
            "human": [
                "Observation fine et empathie avec les bêtes",
                "Disponibilité et endurance face à des astreintes régulières",
                "Réactivité en situation d'urgence sanitaire",
                "Capacités de gestion d'équipe ouvrière"
            ],
            "tools": [
                "Robots et salles de traite",
                "Logiciels de gestion de troupeau (Isagri, HerdBook)",
                "Colliers et podomètres connectés (monitoring rumination)",
                "Tracteurs avec pailleuses et mélangeuses"
            ],
            "analytical": [
                "Analyse des coûts de revient au litre de lait ou kilo de carcasse",
                "Calcul des taux protéiques et butyriques du lait"
            ]
        },
        "specializations": [
            "Élevage bovin laitier haute performance",
            "Élevage bovin allaitant (viande charolaise, limousine, zébu)",
            "Élevage caprin avec transformation fromagère fermière",
            "Élevage ovin pastoral"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Bac Pro",
                    "title": "Bac Pro Conduite et Gestion de l'Entreprise Agricole (CGEA - Élevage)",
                    "desc": "Bases pratiques de la manipulation animale et des engins agricoles."
                },
                {
                    "step": "Bac +2",
                    "title": "BTS Agricole Productions Animales (PA)",
                    "desc": "Approfondissement en génétique, rationnement et pilotage d'entreprise d'élevage."
                },
                {
                    "step": "Bac +3",
                    "title": "Licence Pro Conseil en Élevage ou Management des Entreprises d'Élevage",
                    "desc": "Expertise en transition agroécologique de l'élevage."
                }
            ],
            "schools": [
                {
                    "name": "Lycées agricoles spécialisés élevage (Bretagne, Normandie, Massif Central) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut Supérieur de Formation Agricole et Rurale (ISFAR Bambey) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "École Inter-États des Sciences et Médecine Vétérinaires (EISMV Dakar)",
                    "country": "Sénégal",
                    "scope": "International"
                }
            ],
            "certifications": [
                "Certificat de Capacité d'Inséminateur",
                "Attestation Bien-Être Animal en élevage"
            ],
            "schoolSubjects": [
                "Zootechnie",
                "Biologie animale",
                "Alimentation animale",
                "Agronomie fourragère"
            ]
        },
        "career": {
            "sectors": [
                "Exploitations d'élevage individuelles ou sociétaires (GAEC)",
                "Fermes pilotes et stations d'expérimentation",
                "Grands élevages industriels et fermes laitières",
                "Coopératives d'élevage"
            ],
            "employerTypes": [
                "Groupements agricoles",
                "Agro-industries laitières privées",
                "Organismes de sélection de races"
            ],
            "evolution": "Vacher / Ouvrier d'élevage ➔ Chef d'élevage ➔ Associé en GAEC ➔ Exploitant agricole propriétaire de son troupeau",
            "pros": "Contact passionné avec les animaux, vie au grand air, fierté de produire du lait et de la viande de qualité.",
            "cons": "Astreintes 365 jours par an (les animaux doivent manger et être traits chaque jour), congés difficiles à planifier sans service de remplacement."
        },
        "gettingStarted": {
            "beginnerProject": "Passer une semaine en immersion dans une ferme laitière pour pratiquer la traite et la détection des chaleurs.",
            "intermediateProject": "Calculer une ration hivernale équilibrée pour 50 vaches laitières avec foin, ensilage et correcteur azoté.",
            "advancedProject": "Établir le plan d'accouplement génétique d'un troupeau pour améliorer les taux de matière grasse et la santé de la mamelle.",
            "portfolioIdeas": [
                "Fiche de suivi sanitaire de troupeau",
                "Bilan comparatif de production lait/fourrage"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'élevage de précision déploie des colliers connectés analysant la rumination, des caméras d'analyse morphologique et des robots d'alimentation automatiques.",
            "automatedTasks": [
                "Détection automatique des chaleurs et des débuts de vêlage par capteurs",
                "Traite robotisée autonome 24h/24"
            ],
            "emergingSkills": [
                "Analyse des données biométriques animales en continu",
                "Maintenance de premier niveau des automates d'élevage"
            ],
            "humanEdge": "Le regard attentif de l'éleveur qui repère un animal triste ou isolé au fond du champ ne sera jamais remplacé par un capteur."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le pastoralisme et l'élevage intensif (bovins Gobra, métis laitiers Guzerat/Montbéliarde, moutons Ladoum) représentent 30% du PIB agricole. La modernisation des fermes laitières autour de Dahra et Richard-Toll est une priorité d'autosuffisance.",
            "localSectors": [
                "Bassin laitier sylvopastoral du Ferlo (Dahra, Linguère)",
                "Fermes périurbaines laitières de Dakar/Thiès",
                "Élevages d'embouche bovine et ovine (fêtes de Tabaski)"
            ],
            "remoteWork": "Totalement exclu, présence physique impérative.",
            "entrepreneurship": "Création d'une mini-ferme laitière moderne avec stabulation ventilée, production de fourrage irrigué (panicum, luzerne) et vente de lait pasteurisé."
        },
        "relatedJobSlugs": [
            "technicien-conseil-elevage",
            "aviculteur",
            "ingenieur-agronome",
            "chef-exploitation-agricole"
        ],
        "connectedFamilies": [
            "sante-biomedical",
            "environnement-climat",
            "commerce-marketing"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Responsable d'Élevage Studyrama",
                "url": "https://www.studyrama.com/formations/fiches-metiers/agriculture/responsable-d-elevage-91754",
                "source": "Studyrama"
            }
        ],
        "sources": [
            "Studyrama",
            "Onisep",
            "Institut de l'Élevage (Idele)"
        ],
        "interests": [
            "nature-environnement",
            "construire-fabriquer"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon l'Onisep et Studyrama, plus de la moitié des chefs d'élevage français partiront à la retraite dans les dix ans, créant des milliers d'opportunités de reprise d'exploitations rentables et modernes.",
            "pourquoi": "L'élevage s'est considérablement mécanisé et robotisé, réduisant la pénibilité physique tout en exigeant des compétences pointues de gestionnaire.",
            "a_retenir": "Un métier d'engagement et de haute technicité, au cœur de la souveraineté alimentaire des territoires."
        },
        "salaryRanges": {
            "france": {
                "raw": "2 000 - 3 200 € net/mois selon taille du troupeau (Source : Studyrama / Fiches Élevage)",
                "range": "2 000 - 3 200 € net/mois selon taille du troupeau (Source : Studyrama / Fiches Élevage)",
                "source": "Onisep / Studyrama"
            },
            "senegal": {
                "raw": "300 000 - 1 200 000 FCFA / mois (Source : Fermes laitières & embouche bovine)",
                "range": "300 000 - 1 200 000 FCFA / mois (Source : Fermes laitières & embouche bovine)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "technicien-conseil-elevage",
        "slug": "technicien-conseil-elevage",
        "title": "Technicien Conseil en Élevage / Contrôleur Laitier",
        "aliases": [
            "Conseiller d'élevage",
            "Technicienne zootechnique",
            "Conseiller en nutrition animale"
        ],
        "icon": "📋",
        "image": "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Élevage, Santé & Productions Animales",
        "domainId": "elevage-productions-animales",
        "subdomain": "Conseil zootechnique & nutrition",
        "sourceOnisep": true,
        "sourceStudyrama": true,
        "isEmerging": false,
        "level": "Bac +2 (BTS Productions Animales) à Bac +3 (Licence Pro Élevage)",
        "salary": "🇫🇷 France : 2 000 - 2 800 € brut/mois débutant (~24 000 - 33 600 €/an, Source : Onisep / Studyrama) • 🇸🇳 Sénégal : 250 000 - 850 000 FCFA / mois (Source : Coopératives laitières, projets d'appui à l'élevage)",
        "simpleDefinition": "Le technicien conseil en élevage visite régulièrement les exploitations pour analyser les performances des troupeaux, optimiser l'alimentation, la santé et la rentabilité financière des éleveurs.",
        "shortDescription": "Fiche documentée par Onisep et Studyrama, ce conseiller itinérant est le partenaire de confiance des éleveurs pour améliorer le rendement et le bien-être de leur cheptel.",
        "longDescription": "Véritable consultant de terrain employé par une chambre d'agriculture, une coopérative ou un organisme de contrôle de performances, il mesure la production laitière, analyse la composition du lait (taux cellulaire, gras, protéines), ajuste les plans d'alimentation et propose des choix génétiques pour améliorer la descendance. Il aide également les exploitants à adapter leurs bâtiments d'élevage face aux canicules.",
        "mainObjective": "Aider les éleveurs à accroître leur rentabilité économique tout en améliorant la santé du troupeau et la qualité des produits.",
        "companyRole": "Expert externe, catalyseur de progrès technique et d'innovation dans les élevages.",
        "workEnvironment": [
            "🚗 Déplacements quotidiens de ferme en ferme",
            "🐮 Stabulations et quais de traite",
            "💻 Bureau pour le traitement des données zootechniques"
        ],
        "missions": [
            "Réaliser les contrôles de performance (pesée de lait, prélèvement d'échantillons analytiques)",
            "Diagnostiquer les dysfonctionnements zootechniques (acidose ruminale, problèmes d'aplombs)",
            "Calculer des plans de rationnement sur mesure selon les stocks fourragers disponibles",
            "Conseiller sur les accouplements génétiques pour corriger les défauts morphologiques",
            "Animer des groupes de progrès entre éleveurs sur des thématiques d'actualité (pâturage tournant dynamique)"
        ],
        "typicalDay": [
            {
                "time": "06:00",
                "title": "Contrôle laitier matinal en ferme",
                "desc": "Pesée du lait de chaque vache lors de la traite et prélèvement d'échantillons en flacons numérotés."
            },
            {
                "time": "09:30",
                "title": "Bilan de la ration avec l'exploitant",
                "desc": "Vérification de la qualité de l'ensilage d'herbe et recalibrage de l'apport en tourteau de soja."
            },
            {
                "time": "14:00",
                "title": "Visite conseil bien-être animal dans un autre élevage",
                "desc": "Mesure des flux d'air dans le bâtiment d'élevage et conseil pour l'installation de brasseurs d'air."
            },
            {
                "time": "16:30",
                "title": "Saisie informatique et restitution des résultats",
                "desc": "Envoi des alertes cellules somatiques au laboratoire et rédaction de la note de synthèse."
            }
        ],
        "skills": {
            "technical": [
                "Zootechnie approfondie (nutrition, génétique, reproduction)",
                "Techniques d'audit de bâtiment d'élevage",
                "Analyse des bilans fourragers",
                "Interprétation des résultats de contrôle de performance",
                "Réglementation sur le bien-être animal"
            ],
            "human": [
                "Écoute active et pédagogie",
                "Sens du relationnel et diplomatie avec les agriculteurs",
                "Capacité à convaincre sans imposer",
                "Autonomie et rigueur d'organisation"
            ],
            "tools": [
                "Logiciels de rationnement (Inration)",
                "Appareils de mesure de ventilation (fumigènes, anémomètres)",
                "Tablettes de saisie connectées de contrôle laitier",
                "Bâtons de lecture de puces RFID animales"
            ],
            "analytical": [
                "Calcul de la marge sur coût alimentaire (MCA)",
                "Courbes de lactation et détection des anomalies de production"
            ]
        },
        "specializations": [
            "Conseil en nutrition bovine laitière",
            "Conseil génétique et insémination",
            "Audit bâtiment et ambiance d'élevage",
            "Transition vers le pâturage tournant agroécologique"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Bac +2",
                    "title": "BTS Agricole Productions Animales (PA)",
                    "desc": "Formation de référence pour la zootechnie et l'agronomie fourragère."
                },
                {
                    "step": "Bac +3",
                    "title": "Licence Pro Métiers du Conseil en Élevage ou Santé Animale",
                    "desc": "Perfectionnement aux techniques d'audit d'exploitation et d'animation de groupe."
                }
            ],
            "schools": [
                {
                    "name": "Lycées agricoles dispensant le BTS PA — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut Supérieur de Formation Agricole et Rurale (ISFAR Bambey) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "École Nationale des Cadres Ruraux (ENCR Bambey) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Agrément Contrôle de Performances Laitières",
                "Certificat d'Aptitude aux Fonctions d'Inséminateur (CAFI)"
            ],
            "schoolSubjects": [
                "Zootechnie",
                "Nutrition animale",
                "Communication",
                "Informatique de gestion"
            ]
        },
        "career": {
            "sectors": [
                "Organismes de conseil en élevage (ex-Contrôle Laitier)",
                "Chambres d'agriculture",
                "Coopératives d'insémination et de sélection génétique",
                "Fabricants d'aliments du bétail"
            ],
            "employerTypes": [
                "Entreprises de conseil en élevage",
                "Coopératives agricoles",
                "Firmes d'agrofourniture animale"
            ],
            "evolution": "Technicien de contrôle ➔ Conseiller spécialisé en élevage ➔ Responsable d'équipe technique territoriale ➔ Directeur de pôle d'appui zootechnique",
            "pros": "Grande autonomie dans l'organisation de ses tournées, relations humaines riches et durables avec les agriculteurs, variété des situations d'élevage rencontrées.",
            "cons": "Horaires très matinaux pour assister aux traites dès l'aube, nombreux kilomètres en voiture chaque jour, devoir parfois annoncer des bilans économiques délicats."
        },
        "gettingStarted": {
            "beginnerProject": "Accompagner un technicien de contrôle laitier sur une tournée de 3 jours pour comprendre le recueil des données.",
            "intermediateProject": "Réaliser le diagnostic d'ambiance thermique d'une étable de 60 vaches avec relevés de températures et humidité.",
            "advancedProject": "Concevoir un outil de simulation de l'impact financier d'une baisse des mammites sur le revenu annuel d'un élevage.",
            "portfolioIdeas": [
                "Exemple de rapport d'audit nutritionnel d'un troupeau",
                "Guide pratique de réglage des ventilateurs d'étable"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'IA centralise les données des colliers connectés et des robots pour générer des alertes de troupeau prédictives que le technicien interprète avec l'éleveur.",
            "automatedTasks": [
                "Agrégation automatique des données de pesée et de composition du lait",
                "Détection prédictive des risques d'acidose"
            ],
            "emergingSkills": [
                "Conseil en intégration des outils numériques en élevage",
                "Diagnostic des émissions de méthane entérique"
            ],
            "humanEdge": "La confiance humaine et l'accompagnement psychologique de l'éleveur dans les choix stratégiques d'avenir."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les techniciens d'élevage sont indispensables pour accompagner l'insémination artificielle des vaches locales avec de la semence Montbéliarde ou Guzerat, augmentant la production de 2 litres à plus de 15 litres par jour.",
            "localSectors": [
                "Projets nationaux de développement de la filière laitière (PRAPS, PADAER)",
                "Centres de collecte de lait (Richard-Toll, Kolda, Dahra)",
                "Coopératives d'éleveurs pasteurs"
            ],
            "remoteWork": "Métier exclusivement itinérant sur le terrain.",
            "entrepreneurship": "Création d'un cabinet de conseil privé pour les fermes d'embouche bovine et laitière périurbaines de Dakar et Thiès."
        },
        "relatedJobSlugs": [
            "responsable-elevage",
            "aviculteur",
            "ingenieur-agronome",
            "conseiller-gestion-agricole"
        ],
        "connectedFamilies": [
            "sante-biomedical",
            "conseil-audit",
            "environnement-climat"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Technicien de Conseil en Élevage Onisep",
                "url": "https://www.onisep.fr",
                "source": "Onisep"
            }
        ],
        "sources": [
            "Onisep",
            "Studyrama",
            "France Conseil Élevage"
        ],
        "interests": [
            "nature-environnement",
            "resoudre-problemes"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon Onisep et Studyrama, les conseillers d'élevage bénéficient d'une quasi-garantie d'embauche dès la sortie du BTS Productions Animales.",
            "pourquoi": "Le secteur fait face à une vague massive de départs en retraite alors que les élevages exigent une expertise zootechnique toujours plus pointue.",
            "a_retenir": "Un métier parfait pour ceux qui aiment les animaux et souhaitent conseiller sans porter la contrainte quotidienne d'une exploitation."
        },
        "salaryRanges": {
            "france": {
                "raw": "2 000 - 2 800 € brut/mois débutant (~24 000 - 33 600 €/an, Source : Onisep / Studyrama)",
                "range": "2 000 - 2 800 € brut/mois débutant (~24 000 - 33 600 €/an, Source : Onisep / Studyrama)",
                "source": "Onisep / Studyrama"
            },
            "senegal": {
                "raw": "250 000 - 850 000 FCFA / mois (Source : Coopératives laitières, projets d'appui à l'élevage)",
                "range": "250 000 - 850 000 FCFA / mois (Source : Coopératives laitières, projets d'appui à l'élevage)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "aviculteur",
        "slug": "aviculteur",
        "title": "Aviculteur / Responsable d'Élevage Avicole",
        "aliases": [
            "Éleveur de volailles",
            "Chef de couvoir",
            "Gestionnaire d'atelier avicole"
        ],
        "icon": "🐔",
        "image": "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Élevage, Santé & Productions Animales",
        "domainId": "elevage-productions-animales",
        "subdomain": "Aviculture & petits élevages",
        "sourceOnisep": false,
        "sourceStudyrama": true,
        "isEmerging": false,
        "level": "CAP / Bac Pro Agricole à Bac +2 (BTS Productions Animales)",
        "salary": "🇫🇷 France : 1 900 - 3 000 € net/mois selon taille des bâtiments (Source : Studyrama / Fiches Élevage) • 🇸🇳 Sénégal : 250 000 - 1 100 000 FCFA / mois (Source : Aviculture industrielle des Niayes & Thiès)",
        "simpleDefinition": "L'aviculteur élève des volailles (poulets de chair, poules pondeuses, dindes, canards ou pintades) en veillant scrupuleusement à l'hygiène, à la ventilation, à l'alimentation et à la biosécurité des bâtiments.",
        "shortDescription": "Fiche documentée par Studyrama, ce professionnel gère des élevages de volailles de haute technicité répondant à la demande massive en œufs et viande blanche.",
        "longDescription": "L'aviculture moderne est une filière hautement technique et rigoureuse. Qu'il conduise un élevage fermier de plein air sous label ou un bâtiment avicole automatisé de plusieurs milliers de sujets, l'aviculteur surveille en continu la température, l'humidité et la qualité de l'air (ventilation dynamique). Il applique des règles drastiques de biosécurité (sas sanitaire, désinfection) pour prémunir le cheptel contre les virus comme l'influenza aviaire.",
        "mainObjective": "Assurer une croissance homogène et saine des volailles ou une ponte régulière dans des conditions sanitaires et de bien-être optimales.",
        "companyRole": "Responsable de la sécurité sanitaire et de la rentabilité des ateliers de production d'œufs et de viande de volaille.",
        "workEnvironment": [
            "🐥 Bâtiments avicoles régulés ou parcours herbagers extérieurs",
            "🚪 Sas sanitaires stricts avec changement obligatoire de tenue",
            "🚚 Plateformes de conditionnement d'œufs et abattoirs agréés"
        ],
        "missions": [
            "Préparer et désinfecter les bâtiments avant l'arrivée des poussins d'un jour (vide sanitaire)",
            "Programmer et surveiller les automates de climatisation, d'éclairage et d'abreuvement",
            "Suivre les courbes de consommation d'aliments et de gain de poids quotidien",
            "Mettre en œuvre les protocoles de vaccination stricts (nébulisation, eau de boisson)",
            "Trier, calibrer et expédier les œufs de consommation ou organiser le départ des volailles"
        ],
        "typicalDay": [
            {
                "time": "06:30",
                "title": "Passage au sas sanitaire et tournée des poussinières",
                "desc": "Douche sanitaire, enfilage de la tenue stérile et inspection visuelle des poussins sous les radiants."
            },
            {
                "time": "09:00",
                "title": "Relevé des compteurs et pesée d'échantillons",
                "desc": "Contrôle des compteurs d'eau et pesée d'un lot témoin de 100 poulets pour vérifier la courbe de croissance."
            },
            {
                "time": "14:00",
                "title": "Maintenance des lignes d'alimentation",
                "desc": "Vérification des vis sans fin et débouchage des pipettes d'abreuvement automatique."
            },
            {
                "time": "17:00",
                "title": "Clôture de la journée et réglage du cycle lumineux",
                "desc": "Ajustement de la minuterie d'extinction progressive des lumières et test des alarmes de coupure électrique."
            }
        ],
        "skills": {
            "technical": [
                "Zootechnie aviaire & physiologie de la volaille",
                "Règles strictes de biosécurité avicole",
                "Conduite des automates de ventilation (ventilation dynamique tunnel)",
                "Programmes vaccinaux et prophylaxie",
                "Gestion des déjections (fientes séchées valorisables)"
            ],
            "human": [
                "Vigilance constante et sens du détail",
                "Rigueur absolue dans le respect des règles d'hygiène",
                "Réactivité immédiate en cas de panne technique",
                "Sens de la gestion d'entreprise"
            ],
            "tools": [
                "Automates de gestion de climat (Tuffigo Rapidex)",
                "Pèse-volailles automatiques suspendus",
                "Nébulisateurs vaccinaux",
                "Pipettes d'abreuvement et chaînes de distribution d'aliments"
            ],
            "analytical": [
                "Calcul de l'indice de consommation (IC)",
                "Taux de ponte journalier et taux de mortalité"
            ]
        },
        "specializations": [
            "Élevage de poules pondeuses d'œufs de consommation (bio, plein air)",
            "Élevage de poulets de chair (standard ou label)",
            "Production de canards gras / palmipèdes",
            "Multiplication et accouvage (gestion de poussins d'un jour)"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "CAP / Bac Pro",
                    "title": "Bac Pro Conduite et Gestion de l'Entreprise Agricole (CGEA)",
                    "desc": "Formation pratique aux bases de l'élevage et de la biosécurité."
                },
                {
                    "step": "Bac +2",
                    "title": "BTS Agricole Productions Animales (option Aviculture)",
                    "desc": "Maîtrise technique poussée des ambiances avicoles et de la rentabilité d'atelier."
                }
            ],
            "schools": [
                {
                    "name": "Lycées agricoles avec ateliers avicoles (Bretagne, Pays de la Loire, Sud-Ouest) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centre d'Aviculture de Mbao (CNA Mbao) — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "ISFAR Bambey — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certificat de formation à la biosécurité en élevage avicole (obligatoire)",
                "Attestation CPA (Certificat Professionnel Avicole)"
            ],
            "schoolSubjects": [
                "Aviculture",
                "Hygiène et biosécurité",
                "Électricité et automatisme",
                "Comptabilité"
            ]
        },
        "career": {
            "sectors": [
                "Entreprises avicoles indépendantes",
                "Groupements de producteurs de volailles",
                "Couvoirs industriels",
                "Filières intégrées d'agroalimentaire avicole"
            ],
            "employerTypes": [
                "Éleveurs indépendants sous contrat",
                "Sociétés avicoles intégrées",
                "Coopératives de l'Ouest de la France ou d'Afrique de l'Ouest"
            ],
            "evolution": "Technicien de bâtiment avicole ➔ Chef d'atelier avicole ➔ Responsable de couvoir ➔ Installation comme chef d'exploitation avicole",
            "pros": "Cycles d'élevage courts (6 à 12 semaines pour le poulet) permettant une réactivité économique rapide, filière très structurée.",
            "cons": "Risque épidémique d'influenza aviaire stressant, astreinte technique 24h/24 en cas de coupure de ventilation, atmosphère poussiéreuse."
        },
        "gettingStarted": {
            "beginnerProject": "Gérer un petit poulailler familial de 20 poules pondeuses avec suivi des dépenses d'aliments et ventes d'œufs.",
            "intermediateProject": "Mettre en place un protocole complet de nettoyage-désinfection d'un bâtiment avicole après dépeuplement.",
            "advancedProject": "Calculer l'indice de consommation et la rentabilité prévisionnelle d'un lot de 10 000 poulets de chair.",
            "portfolioIdeas": [
                "Plan de biosécurité conforme à la réglementation",
                "Graphique de suivi de courbe de ponte sur 12 mois"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des microphones intelligents analysent les vocalises des poussins pour détecter la détresse thermique ou respiratoire avant l'œil humain.",
            "automatedTasks": [
                "Ajustement continu de la ventilation par algorithme météo",
                "Pesée en continu par caméras 3D"
            ],
            "emergingSkills": [
                "Surveillance des alertes acoustiques aviaires",
                "Optimisation énergétique des bâtiments solaires"
            ],
            "humanEdge": "La sensibilité humaine pour calmer les animaux et vérifier leur vivacité lors des tournées nocturnes."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'aviculture est le secteur agro-industriel le plus dynamique, porté par la protection douanière des cuisses de poulet importées. Le pôle avicole des Niayes (Sindia, Thiès, Pout, Notto) emploie des dizaines de milliers de jeunes.",
            "localSectors": [
                "Grandes fermes avicoles de Thiès, Pout et Sindia (Sedima, NMA Sanders, Badiene)",
                "Réseaux de distribution d'œufs de Dakar",
                "Élevages fermiers de pintades et poulets du pays"
            ],
            "remoteWork": "Totalement sur place dans les fermes.",
            "entrepreneurship": "Création d'une ferme de poulets fermiers élevés aux graines locales ou d'une unité de production d'œufs frais pour le marché dakarois."
        },
        "relatedJobSlugs": [
            "responsable-elevage",
            "technicien-conseil-elevage",
            "ingenieur-agroalimentaire",
            "chef-exploitation-agricole"
        ],
        "connectedFamilies": [
            "commerce-marketing",
            "sante-biomedical",
            "industrie-ingenierie"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Métier Éleveur de Volailles Studyrama",
                "url": "https://www.studyrama.com/formations/fiches-metiers/agriculture/aviculteur-91755",
                "source": "Studyrama"
            }
        ],
        "sources": [
            "Studyrama",
            "ITAVI (Institut Technique de l'Aviculture)",
            "CNA Mbao"
        ],
        "interests": [
            "nature-environnement",
            "construire-fabriquer"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon Studyrama, la viande de volaille est devenue la viande la plus consommée en France et dans le monde en raison de son prix accessible et de sa faible empreinte carbone.",
            "pourquoi": "Le poulet présente le meilleur indice de transformation d'aliments végétaux en protéines animales de tout l'élevage terrestre.",
            "a_retenir": "Un secteur clé de la sécurité alimentaire, alliant rapidité de rotation et technicité poussée des équipements."
        },
        "salaryRanges": {
            "france": {
                "raw": "1 900 - 3 000 € net/mois selon taille des bâtiments (Source : Studyrama / Fiches Élevage)",
                "range": "1 900 - 3 000 € net/mois selon taille des bâtiments (Source : Studyrama / Fiches Élevage)",
                "source": "APECITA / Marché agro-maritime"
            },
            "senegal": {
                "raw": "250 000 - 1 100 000 FCFA / mois (Source : Aviculture industrielle des Niayes & Thiès)",
                "range": "250 000 - 1 100 000 FCFA / mois (Source : Aviculture industrielle des Niayes & Thiès)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "ingenieur-agroecologie",
        "slug": "ingenieur-agroecologie",
        "title": "Ingénieur en Agroécologie / Transition Écologique Agricole",
        "aliases": [
            "Agroécologue",
            "Ingénieur en agriculture régénératrice",
            "Consultant transition carbone agricole"
        ],
        "icon": "🌱",
        "image": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Agroécologie, Ressources, Sols & Climat",
        "domainId": "agroecologie-ressources-sols",
        "subdomain": "Agriculture régénérative & sols vivants",
        "sourceOnisep": true,
        "sourceStudyrama": false,
        "isEmerging": true,
        "level": "Bac +5 (Diplôme d'Ingénieur Agronome ou Master Agroécologie)",
        "salary": "🇫🇷 France : 2 900 - 3 600 € brut/mois débutant (~35 000 - 43 200 €/an, Source : APEC / Onisep) • 🇸🇳 Sénégal : 500 000 - 1 600 000 FCFA / mois (Source : ONG internationales, FAO, Cirad)",
        "simpleDefinition": "L'ingénieur en agroécologie conçoit des systèmes agricoles qui s'inspirent des écosystèmes naturels : couverture permanente des sols, haies champêtres, biodiversité fonctionnelle et réduction drastique des produits chimiques.",
        "shortDescription": "Fiche documentée par Onisep, ce scientifique de pointe réconcilie productivité économique des fermes et régénération de la biodiversité et du stockage de carbone.",
        "longDescription": "Face au dérèglement climatique et à l'érosion des sols fertiles, l'ingénieur en agroécologie déploie les principes de l'agriculture régénératrice et de l'agroforesterie. Il développe les couverts végétaux multi-espèces pour nourrir la vie microbienne des sols, favorise les auxiliaires naturels contre les ravageurs et conçoit des plans de séquestration de carbone rémunérés par des crédits carbone agricoles. Il accompagne les territoires et filières dans leur transition.",
        "mainObjective": "Régénérer la santé des sols et la biodiversité tout en maintenant des récoltes viables et résilientes face aux sécheresses.",
        "companyRole": "Architecte de la transition environnementale et garant de la résilience climatique des filières agricoles.",
        "workEnvironment": [
            "🌾 Diagnostic de terrain (fosses pédologiques, comptage de vers de terre)",
            "🏢 Bureaux d'études, coopératives engagées, chambres d'agriculture et ONG",
            "🔬 Travail avec les chercheurs en écologie fonctionnelle"
        ],
        "missions": [
            "Concevoir des assolements agroécologiques intégrant légumineuses et couverts d'interculture",
            "Mesurer les indicateurs biologiques des sols (biomasse microbienne, mycorhizes, taux de matière organique)",
            "Planifier l'implantation de haies brise-vent et de systèmes agroforestiers intra-parcellaires",
            "Monter des dossiers de crédits carbone certifiés (Label Bas-Carbone) pour rémunérer les agriculteurs",
            "Animer des formations et ateliers d'échange de pratiques entre agriculteurs innovants"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Diagnostic d'un sol vivant en parcelle",
                "desc": "Creusement d'une fosse pédologique pour observer l'enracinement et test de la bêche pour mesurer la structure grumeleuse."
            },
            {
                "time": "11:00",
                "title": "Comptage des auxiliaires de culture",
                "desc": "Relevé des pièges à carabes et nichoirs à chauves-souris installés pour la régulation des ravageurs."
            },
            {
                "time": "14:00",
                "title": "Modélisation de stockage de carbone",
                "desc": "Calcul sur logiciel du bilan carbone d'une ferme de 150 hectares passée en semis direct sous couvert."
            },
            {
                "time": "16:30",
                "title": "Restitution aux exploitants du groupement",
                "desc": "Présentation des résultats économiques comparés entre conventionnel et agroécologie."
            }
        ],
        "skills": {
            "technical": [
                "Écologie des sols vivants & microbiologie du sol",
                "Principes de l'agriculture de conservation des sols (ACS)",
                "Agroforesterie et gestion de l'arbre champêtre",
                "Méthodologie des bilans carbone et ACV agricole",
                "Réglementation environnementale (PAC, directives nitrates)"
            ],
            "human": [
                "Force de conviction et enthousiasme",
                "Grande écoute des contraintes des agriculteurs",
                "Pédagogie scientifique adaptée au terrain",
                "Vision systémique des écosystèmes"
            ],
            "tools": [
                "Outils de modélisation carbone (Cool Farm Tool, CAP'2ER)",
                "Tarières et pénétromètres de sol",
                "QGIS pour la cartographie des continuités écologiques",
                "Applications de sciences participatives"
            ],
            "analytical": [
                "Calcul du retour sur investissement d'un couvert végétal",
                "Analyse de cycles biogéochimiques (azote, carbone)"
            ]
        },
        "specializations": [
            "Semis direct sous couvert végétal (ACS)",
            "Agroforesterie tempérée et tropicale",
            "Certification et labellisation Bas-Carbone",
            "Gestion de l'eau et lutte contre l'érosion"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Bac +2",
                    "title": "Prépa BCPST ou BTS Agricole Agronomie Productions Végétales",
                    "desc": "Excellentes bases scientifiques du vivant."
                },
                {
                    "step": "Bac +5",
                    "title": "Diplôme d'Ingénieur Agronome spécialité Agroécologie ou Master Écologie Appliquée",
                    "desc": "Formation de référence aux interactions entre biologie, écologie et économie agricole."
                }
            ],
            "schools": [
                {
                    "name": "Institut Agro (Montpellier / Rennes) — France",
                    "country": "France",
                    "scope": "International"
                },
                {
                    "name": "UniLaSalle (Beauvais / Rouen) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "ENSA Thiès (École Nationale Supérieure d'Agriculture) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Conseil Stratégique Phytosanitaire (CSP)",
                "Auditeur Label Bas-Carbone"
            ],
            "schoolSubjects": [
                "Écologie fonctionnelle",
                "Pédologie",
                "Biologie végétale",
                "Économie de l'environnement"
            ]
        },
        "career": {
            "sectors": [
                "Bureaux d'études en environnement et transition agroécologique",
                "Chambres d'agriculture et instituts techniques (Arvalis, Terres Inovia)",
                "Grandes coopératives agricoles créant des filières durables",
                "ONG de développement durable et agences onusiennes (FAO, PNUD)"
            ],
            "employerTypes": [
                "Groupements d'agriculteurs (GIEE)",
                "Instituts de recherche appliquée",
                "Multinationales agroalimentaires en transition"
            ],
            "evolution": "Chargé de mission agroécologie ➔ Ingénieur conseil senior ➔ Directeur de pôle R&D durabilité ➔ Expert international auprès d'institutions mondiales",
            "pros": "Impact direct et visible sur la sauvegarde de la planète, métier passionnant à la frontière de la science et du bon sens paysan, forte dynamique d'embauche.",
            "cons": "Nécessité de dépasser les résistances au changement de certains acteurs traditionnels, délais longs pour constater la régénération biologique des sols."
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser un test de la bêche et un test de la cuvette pour évaluer la stabilité structurale d'un sol agricole.",
            "intermediateProject": "Concevoir un mélange de 6 espèces de couverts végétaux complémentaires (féverole, phacélie, radis chinois, moutarde, vesce, avoine).",
            "advancedProject": "Élaborer le dossier complet de certification Label Bas-Carbone d'une exploitation de polyculture-élevage.",
            "portfolioIdeas": [
                "Diagnostic agroécologique complet d'une ferme",
                "Cartographie d'un réseau de haies bocagères avec QGIS"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'imagerie satellite combinée à l'IA quantifie désormais le carbone séquestré dans les sols à l'échelle de la parcelle sans carottage manuel exhaustif.",
            "automatedTasks": [
                "Estimation de la biomasse des couverts végétaux par satellite Sentinel",
                "Modélisation prédictive des risques d'érosion"
            ],
            "emergingSkills": [
                "Supervision des algorithmes de mesure MRV (Monitoring, Reporting, Verification) du carbone",
                "Cartographie haute résolution des micro-habitats"
            ],
            "humanEdge": "La négociation humaine et la relation de confiance pour convaincre un agriculteur de transformer ses méthodes de culture."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal et dans le Sahel, l'agroécologie est la clé de voûte contre l'avancée du désert : régénération naturelle assistée (RNA de Faidherbia albida), zaï, demi-lunes et diguettes anti-érosives sauvent des milliers d'hectares.",
            "localSectors": [
                "Projets agroécologiques du Bassin arachidier et du Ferlo",
                "ONG internationales (Enda Pronat, Agrisud, Cirad)",
                "Initiative de la Grande Muraille Verte"
            ],
            "remoteWork": "Possibilité d'analyse SIG à distance, combinée avec des missions de terrain régulières.",
            "entrepreneurship": "Création d'un cabinet de conseil en crédits carbone et régénération des terres dégradées en Afrique de l'Ouest."
        },
        "relatedJobSlugs": [
            "ingenieur-agronome",
            "ingenieur-irrigation-hydraulique",
            "charge-valorisation-dechets-agricoles",
            "chef-exploitation-agricole"
        ],
        "connectedFamilies": [
            "environnement-climat",
            "recherche-sciences",
            "conseil-audit"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Agroécologue Onisep",
                "url": "https://www.onisep.fr",
                "source": "Onisep"
            }
        ],
        "sources": [
            "Onisep",
            "INRAE",
            "Cirad",
            "Association Française d'Agroforesterie"
        ],
        "interests": [
            "nature-environnement",
            "resoudre-problemes"
        ],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Selon l'Onisep et l'INRAE, un sol agricole sain et riche en vers de terre peut infiltrer jusqu'à 100 mm de pluie à l'heure, évitant ruissellements dévastateurs et inondations.",
            "pourquoi": "Les galeries de vers de terre créent un réseau naturel de drainage et d'aération qui retient l'eau pour les périodes estivales de sécheresse.",
            "a_retenir": "Le métier phare du XXIe siècle pour faire de l'agriculture la solution au changement climatique plutôt qu'un problème."
        },
        "salaryRanges": {
            "france": {
                "raw": "2 900 - 3 600 € brut/mois débutant (~35 000 - 43 200 €/an, Source : APEC / Onisep)",
                "range": "2 900 - 3 600 € brut/mois débutant (~35 000 - 43 200 €/an, Source : APEC / Onisep)",
                "source": "Onisep / Studyrama"
            },
            "senegal": {
                "raw": "500 000 - 1 600 000 FCFA / mois (Source : ONG internationales, FAO, Cirad)",
                "range": "500 000 - 1 600 000 FCFA / mois (Source : ONG internationales, FAO, Cirad)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "ingenieur-irrigation-hydraulique",
        "slug": "ingenieur-irrigation-hydraulique",
        "title": "Ingénieur en Irrigation & Hydraulique Agricole",
        "aliases": [
            "Hydraulicien agricole",
            "Expert en gestion de l'eau agricole",
            "Ingénieur hydro-agricole"
        ],
        "icon": "💧",
        "image": "https://images.unsplash.com/photo-1515150117381-c4ab6699e374?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Agroécologie, Ressources, Sols & Climat",
        "domainId": "agroecologie-ressources-sols",
        "subdomain": "Hydraulique agricole & gestion de l'eau",
        "sourceOnisep": true,
        "sourceStudyrama": false,
        "isEmerging": true,
        "level": "Bac +5 (Diplôme d'Ingénieur Agronome / Hydraulique ou Master Eau)",
        "salary": "🇫🇷 France : 3 000 - 3 800 € brut/mois débutant (~36 000 - 45 600 €/an, Source : Onisep / APEC) • 🇸🇳 Sénégal : 550 000 - 1 700 000 FCFA / mois (Source : SAED, OMVS, grands périmètres irrigués)",
        "simpleDefinition": "L'ingénieur en irrigation conçoit, dimensionne et pilote les réseaux d'eau agricoles (canaux, forages, stations de pompage solaires, goutte-à-goutte) pour apporter la juste dose d'eau à la plante sans gaspiller la ressource.",
        "shortDescription": "Fiche documentée par Onisep, ce spécialiste indispensable optimise chaque goutte d'eau grâce aux technologies d'irrigation de précision et aux retenues collinaires.",
        "longDescription": "Avec des étés de plus en plus arides, la gestion de l'eau devient l'enjeu numéro un de la survie agricole. L'ingénieur hydraulicien agricole calcule les bilans hydriques des cultures en fonction de l'évapotranspiration (ETP). Il conçoit des réseaux sous pression, sélectionne des systèmes de micro-irrigation goutte-à-goutte enterrée, dimensionne des stations de pompage à énergie solaire et modélise les réserves de substitution pour préserver les nappes phréatiques.",
        "mainObjective": "Garantir la sécurité hydrique des productions agricoles tout en réduisant drastiquement les prélèvements d'eau douce.",
        "companyRole": "Maître d'œuvre des aménagements hydro-agricoles et stratège de l'efficience hydrique.",
        "workEnvironment": [
            "🏞️ Périmètres irrigués, barrages, canaux et forages profonds",
            "🏢 Sociétés d'aménagement rural, bureaux d'ingénierie hydraulique et ministères",
            "💻 Conception assistée par ordinateur (CAO) et modélisation des écoulements"
        ],
        "missions": [
            "Calculer les besoins en eau des cultures selon le sol, le climat et les stades végétatifs",
            "Dimensionner les réseaux de canalisations, vannes régulatrices et stations de pompage",
            "Concevoir des installations de goutte-à-goutte de précision pilotées par sondes capacitives",
            "Mener les études d'impact environnemental et hydrogéologique des forages et retenues collinaires",
            "Superviser les chantiers de construction d'infrastructures hydro-agricoles"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Inspection d'une station de pompage connectée",
                "desc": "Vérification de la pression des filtres à sable et contrôle du variateur de vitesse de la pompe immergée."
            },
            {
                "time": "10:30",
                "title": "Calcul de débit et dimensionnement sur logiciel",
                "desc": "Simulation des pertes de charge sur un réseau de 80 hectares irrigué en goutte-à-goutte sous pression."
            },
            {
                "time": "14:00",
                "title": "Réunion avec l'association des usagers de l'eau (AUE)",
                "desc": "Présentation du calendrier de tours d'eau et des quotas d'arrosage pour la saison sèche."
            },
            {
                "time": "16:30",
                "title": "Analyse des données des sondes tensiométriques",
                "desc": "Vérification des courbes d'humidité du sol pour déclencher ou différer l'arrosage nocturne."
            }
        ],
        "skills": {
            "technical": [
                "Hydraulique en charge et à surface libre",
                "Pédologie appliquée et rétention d'eau par les sols",
                "Dimensionnement des réseaux d'irrigation et fertirrigation",
                "Hydrogéologie et gestion intégrée des bassins versants (GIRE)",
                "Électromécanique des pompes et énergie solaire photovoltaïque"
            ],
            "human": [
                "Rigueur mathématique et sens pratique de chantier",
                "Capacité de négociation et médiation des conflits d'usage de l'eau",
                "Vision territoriale à long terme",
                "Mobilité internationale"
            ],
            "tools": [
                "Logiciels hydrauliques (EPANET, WaterCAD)",
                "Systèmes d'Information Géographique (QGIS)",
                "Sondes tensiométriques et capacitives connectées",
                "Stations météo et calcul automatique d'ETP"
            ],
            "analytical": [
                "Calcul des bilans hydriques journaliers",
                "Optimisation technico-économique de l'euro par mètre cube économisé"
            ]
        },
        "specializations": [
            "Micro-irrigation et fertirrigation de haute précision",
            "Aménagement des grands périmètres irrigués fluviaux",
            "Pompage solaire agricole et hydraulique pastorale",
            "Réutilisation des eaux usées traitées (REUT) en agriculture"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Bac +2",
                    "title": "Prépa BCPST, Math Sup ou BTS Gestion et Maîtrise de l'Eau (GEMEAU)",
                    "desc": "Bases solides en mathématiques, physique des fluides et génie civil."
                },
                {
                    "step": "Bac +5",
                    "title": "Diplôme d'Ingénieur Hydraulique ou Agronome spécialisé en Gestion de l'Eau",
                    "desc": "Diplôme d'ingénieur d'État (ENSEEIHT, ENGEES, Institut Agro, 2iE)."
                }
            ],
            "schools": [
                {
                    "name": "ENGEES (École Nationale du Génie de l'Eau et de l'Environnement de Strasbourg) — France",
                    "country": "France",
                    "scope": "International"
                },
                {
                    "name": "Institut International d'Ingénierie de l'Eau et de l'Environnement (2iE Ouagadougou)",
                    "country": "Burkina Faso",
                    "scope": "International"
                },
                {
                    "name": "ENSA Thiès / École Polytechnique de Thiès (EPT) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Habilitation électrique et sécurité des chantiers hydrauliques",
                "Certification irrigation certifiée (Irrigation Association)"
            ],
            "schoolSubjects": [
                "Mécanique des fluides",
                "Hydrologie",
                "Agronomie",
                "Génie civil"
            ]
        },
        "career": {
            "sectors": [
                "Sociétés d'aménagement régional et agences de l'eau",
                "Grands constructeurs et installateurs de matériel d'irrigation (Netafim, Rivulis)",
                "Bureaux d'études en ingénierie hydraulique",
                "Organisations régionales de bassins (OMVS, OMVA)"
            ],
            "employerTypes": [
                "Agences publiques d'État",
                "Entreprises multinationales d'irrigation",
                "Bureaux d'ingénieurs-conseils"
            ],
            "evolution": "Ingénieur d'études hydrauliques ➔ Chef de projet aménagements hydro-agricoles ➔ Directeur d'agence régionale de l'eau ➔ Expert consultant international",
            "pros": "Métier éminemment stratégique pour la survie des populations, haute compétence technique très recherchée mondialement, chantiers d'envergure passionnants.",
            "cons": "Responsabilité lourde en période de pénurie d'eau, pression des usagers en conflit, travail fréquent dans des conditions de chaleur intense sur le terrain."
        },
        "gettingStarted": {
            "beginnerProject": "Installer un kit de goutte-à-goutte alimenté par gravité avec réservoir surélevé dans un jardin expérimental.",
            "intermediateProject": "Modéliser un réseau d'irrigation sous pression de 20 bornes sur le logiciel open-source EPANET.",
            "advancedProject": "Dimensionner un système de pompage solaire au fil du soleil capable de débiter 100 m³/jour pour une parcelle rizicole de 10 ha.",
            "portfolioIdeas": [
                "Plan de réseau sous QGIS avec courbes de niveau",
                "Note de calcul de pertes de charge et choix d'une motopompe solaire"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA pilote l'irrigation autonome en croisant les prévisions météo radar, l'évapotranspiration mesurée par satellite et les sondes au sol pour n'injecter que l'eau strictement nécessaire.",
            "automatedTasks": [
                "Ouverture et fermeture automatisée des électrovannes selon le stress hydrique",
                "Détection instantanée des fuites et baisses anormales de pression"
            ],
            "emergingSkills": [
                "Programmation d'algorithmes d'irrigation prédictive",
                "Intégration de l'énergie solaire et des batteries intelligentes"
            ],
            "humanEdge": "La concertation politique et sociale entre usagers pour partager équitablement un volume d'eau limité."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la maîtrise de l'eau le long de la vallée du fleuve Sénégal (SAED), du bassin de l'Anambé (SODAGRI) et dans la zone des Niayes est le premier moteur de l'autosuffisance en riz et légumes. Les projets de pompage solaire s'y multiplient à grande échelle.",
            "localSectors": [
                "Vallée du fleuve Sénégal (Saint-Louis, Dagana, Podor, Matam)",
                "Bassin de l'Anambé (Kolda)",
                "Périmètres irrigués du lac de Guiers"
            ],
            "remoteWork": "Conception technique possible à distance, mais suivi de chantier physique indispensable.",
            "entrepreneurship": "Création d'une entreprise d'installation et de maintenance de systèmes de pompage solaire et de goutte-à-goutte clés en main pour les producteurs ouest-africains."
        },
        "relatedJobSlugs": [
            "ingenieur-agronome",
            "ingenieur-agroecologie",
            "ingenieur-agritech",
            "chef-exploitation-agricole"
        ],
        "connectedFamilies": [
            "environnement-climat",
            "industrie-ingenierie",
            "energie-geosciences"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Ingénieur Hydraulique Onisep",
                "url": "https://www.onisep.fr",
                "source": "Onisep"
            }
        ],
        "sources": [
            "Onisep",
            "SAED",
            "ENGEES",
            "2iE"
        ],
        "interests": [
            "nature-environnement",
            "resoudre-problemes"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon les rapports de la FAO et de l'Onisep, l'agriculture consomme 70% des prélèvements mondiaux d'eau douce : le passage au goutte-à-goutte de précision permet d'économiser 30 à 50% d'eau tout en augmentant les récoltes.",
            "pourquoi": "L'eau est délivrée directement aux racines au millilitre près, éliminant totalement l'évaporation dans l'air des vieux arroseurs canons.",
            "a_retenir": "Un profil d'ingénieur indispensable partout sur le globe pour relever le défi du siècle : produire plus avec moins d'eau."
        },
        "salaryRanges": {
            "france": {
                "raw": "3 000 - 3 800 € brut/mois débutant (~36 000 - 45 600 €/an, Source : Onisep / APEC)",
                "range": "3 000 - 3 800 € brut/mois débutant (~36 000 - 45 600 €/an, Source : Onisep / APEC)",
                "source": "Onisep / Studyrama"
            },
            "senegal": {
                "raw": "550 000 - 1 700 000 FCFA / mois (Source : SAED, OMVS, grands périmètres irrigués)",
                "range": "550 000 - 1 700 000 FCFA / mois (Source : SAED, OMVS, grands périmètres irrigués)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "charge-valorisation-dechets-agricoles",
        "slug": "charge-valorisation-dechets-agricoles",
        "title": "Chargé de Valorisation des Déchets Agricoles / Biométhanisation",
        "aliases": [
            "Responsable d'unité de méthanisation",
            "Ingénieur biogaz agricole",
            "Chef de projet économie circulaire agricole"
        ],
        "icon": "♻️",
        "image": "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Agroécologie, Ressources, Sols & Climat",
        "domainId": "agroecologie-ressources-sols",
        "subdomain": "Économie circulaire & biogaz",
        "sourceOnisep": true,
        "sourceStudyrama": false,
        "isEmerging": true,
        "level": "Bac +3 (Licence Pro Énergies Renouvelables) à Bac +5 (Ingénieur Énergie / Agronomie)",
        "salary": "🇫🇷 France : 2 600 - 3 400 € brut/mois débutant (~31 200 - 40 800 €/an, Source : Onisep / Fiches Déchets) • 🇸🇳 Sénégal : 350 000 - 1 100 000 FCFA / mois (Source : Projets biogaz domestique et agro-industries)",
        "simpleDefinition": "Le chargé de valorisation des déchets agricoles transforme les effluents d'élevage (lisiers, fumiers) et résidus de récolte en énergie renouvelable (biogaz, électricité) et en engrais naturel organique (digestat) grâce à la méthanisation.",
        "shortDescription": "Fiche documentée par Onisep dans son univers métiers de l'environnement, ce pionnier de l'économie circulaire métamorphose les sous-produits agricoles en gaz vert et fertilisant.",
        "longDescription": "Acteur central de l'indépendance énergétique rurale, il pilote des unités de méthanisation agricole ou des plateformes de compostage industriel. Selon l'Onisep, il organise la collecte des matières organiques fermentescibles, surveille l'équilibre biologique des bactéries anaérobies dans le digesteur et gère l'injection du biométhane épuré dans le réseau gazier ou la cogénération d'électricité. Il valorise le digestat résiduel pour remplacer les engrais chimiques sur les champs.",
        "mainObjective": "Boucler la boucle de la matière en valorisant 100% des sous-produits agricoles sous forme d'énergie propre et de fertilisants naturels.",
        "companyRole": "Pilote de la transition énergétique des territoires ruraux et manager d'installations de biogaz.",
        "workEnvironment": [
            "⚙️ Unités de méthanisation agricole avec digesteurs et torchères",
            "🚛 Plateformes de stockage d'ensilage et fosses à lisier",
            "💻 Salle de contrôle automatisée et tournées chez les agriculteurs partenaires"
        ],
        "missions": [
            "Élaborer la 'recette' d'approvisionnement du digesteur (mélange optimal lisier, paille, résidus agroalimentaires)",
            "Surveiller les paramètres physico-chimiques (température, pH, teneur en acides gras volatils, taux de méthane)",
            "Gérer la maintenance des équipements électromécaniques (pompes d'incorporation, agitateurs, cogénérateurs)",
            "Planifier l'épandage agronomique raisonné du digestat liquide et solide chez les agriculteurs apporteurs",
            "Veiller au respect des normes de sécurité environnementale (ICPE, étanchéité gaz, prévention des odeurs)"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Tournée de sécurité de l'unité de biogaz",
                "desc": "Relevé des détecteurs de gaz H2S et CH4, contrôle des pressions de digesteur et niveau d'huile du moteur."
            },
            {
                "time": "10:00",
                "title": "Analyse de la biologie du digesteur",
                "desc": "Prélèvement d'échantillon, test du ratio FOS/TAC pour vérifier l'absence d'acidification de la flore bactérienne."
            },
            {
                "time": "14:00",
                "title": "Réception des matières organiques",
                "desc": "Pesée et dépotage d'un camion de pulpes de betteraves ou marcs de fruits d'une usine voisine."
            },
            {
                "time": "16:30",
                "title": "Coordination du plan d'épandage du digestat",
                "desc": "Planification avec les chauffeurs de tonnes à lisier équipées de pendillards pour éviter la volatilisation d'ammoniac."
            }
        ],
        "skills": {
            "technical": [
                "Process de digestion anaérobie et microbiologie du biogaz",
                "Électromécanique, tuyauterie industrielle et pompage",
                "Agronomie de la fertilisation et valeur fertilisante du digestat",
                "Réglementation des installations classées (ICPE)",
                "Gestion des risques industriels et sécurité gaz (ATEX)"
            ],
            "human": [
                "Vigilance et sang-froid face aux risques gaz",
                "Sens des relations publiques avec les riverains et élus",
                "Polyvalence technique terrain/bureau",
                "Capacité à gérer des imprévus techniques"
            ],
            "tools": [
                "Analyseurs de gaz portatifs et fixes (CH4, O2, H2S, CO2)",
                "Supervision SCADA sur automate industriel",
                "Logiciels de traçabilité des intrants et plans d'épandage",
                "Broyoirs et trémies d'incorporation de solides"
            ],
            "analytical": [
                "Calcul du potentiel méthanogène (BMP) des substrats",
                "Bilan financier de vente de biométhane et rentabilité des investissements"
            ]
        },
        "specializations": [
            "Méthanisation à la ferme (agriculteur propriétaire)",
            "Unités de méthanisation territoriales collectives",
            "Compostage industriel de déchets verts",
            "Production de biométhane carburant (BioGNV)"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Bac +2",
                    "title": "BTS Métiers des Services à l'Environnement ou BTS Électrotechnique / GEMEAU",
                    "desc": "Compétences de base en maintenance et procédés industriels."
                },
                {
                    "step": "Bac +3",
                    "title": "Licence Pro Gestion des Déchets ou Énergies Renouvelables / Biogaz",
                    "desc": "Formation spécialisée à la conduite d'installations de méthanisation."
                },
                {
                    "step": "Bac +5",
                    "title": "Diplôme d'Ingénieur Agronome, Énergie ou Environnement",
                    "desc": "Direction de projets d'envergure et ingénierie de méthanisation."
                }
            ],
            "schools": [
                {
                    "name": "UniLaSalle / AgroParisTech — Spécialité Bioénergies (France)",
                    "country": "France",
                    "scope": "International"
                },
                {
                    "name": "IUT et Universités proposant la Licence Pro Biogaz (Rennes, Limoges, Pau) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centre d'Études et de Recherches sur les Énergies Renouvelables (CERER Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Formation habilitation ATEX (Atmosphères Explosives)",
                "Certificat d'Exploitant de Méthanisation Agricole"
            ],
            "schoolSubjects": [
                "Biologie",
                "Chimie",
                "Thermodynamique",
                "Agronomie"
            ]
        },
        "career": {
            "sectors": [
                "Entreprises agricoles collectives exploitant un méthaniseur",
                "Grands énergéticiens (Engie, TotalEnergies Biogaz)",
                "Bureaux d'études spécialisés en méthanisation",
                "Coopératives de gestion des déchets organiques"
            ],
            "employerTypes": [
                "Sociétés par actions simplifiées (SAS) d'agriculteurs méthaniseurs",
                "Exploitants d'énergies renouvelables",
                "Collectivités gestionnaires de déchets"
            ],
            "evolution": "Technicien de maintenance méthanisation ➔ Responsable d'exploitation d'unité de biogaz ➔ Chef de projet développement de parcs biogaz ➔ Directeur de filière biométhane régionale",
            "pros": "Métier porteur de sens au cœur de la décarbonation, forte progression du secteur des gaz verts, double ancrage agricole et industriel stimulant.",
            "cons": "Astreintes techniques en cas d'alerte gaz de nuit, odeurs inhérentes à la manipulation des effluents, acceptabilité sociale parfois difficile à gérer avec le voisinage."
        },
        "gettingStarted": {
            "beginnerProject": "Construire un micro-digesteur de démonstration dans un bidon de 20 litres pour allumer un brûleur de camping.",
            "intermediateProject": "Calculer le potentiel de production de biogaz d'un troupeau de 100 vaches laitières à partir des tables BMP de l'Ademe.",
            "advancedProject": "Rédiger le dossier de demande d'enregistrement ICPE d'une unité de biométhane agricole avec plan d'épandage du digestat.",
            "portfolioIdeas": [
                "Schéma de process P&ID d'une unité de biogaz",
                "Bilan agronomique comparatif lisier brut vs digestat méthanisé"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des jumeaux numériques couplés à l'IA prédisent la production de gaz à 48 heures en anticipant les fluctuations de température et d'intrants.",
            "automatedTasks": [
                "Ajustement automatique des temps de brassage des cuves",
                "Optimisation de l'injection biométhane selon les cours de marché de l'énergie"
            ],
            "emergingSkills": [
                "Supervision des bioréacteurs par intelligence prédictive",
                "Captage et valorisation du bio-CO2 pour les serres"
            ],
            "humanEdge": "La négociation locale et l'approvisionnement pérenne en matières organiques auprès des agriculteurs voisins."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le Programme National de Biogaz Domestique (PNB-SN) a installé des milliers de biodigesteurs familiaux dans les zones d'élevage (Ferlo, Thiès, Kaolack), fournissant gaz de cuisson propre sans déboisement et compost fertilisant précieux.",
            "localSectors": [
                "Programme National de Biogaz (PNB Sénégal)",
                "Agro-industries sucrières et arachidières (CSS Richard-Toll valorisant la bagasse)",
                "Fermes avicoles valorisant les fientes en biogaz"
            ],
            "remoteWork": "Gestion technique sur site obligatoire.",
            "entrepreneurship": "Création d'une entreprise d'installation et de maintenance de biodigesteurs préfabriqués en polyéthylène pour les fermes d'élevage du Sénégal."
        },
        "relatedJobSlugs": [
            "ingenieur-agroecologie",
            "responsable-elevage",
            "ingenieur-agronome",
            "chef-exploitation-agricole"
        ],
        "connectedFamilies": [
            "environnement-climat",
            "energie-geosciences",
            "industrie-ingenierie"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Métier Valorisation des Déchets Onisep",
                "url": "https://www.onisep.fr/ressources/univers-metier/metiers/responsable-de-la-collecte-des-dechets-menagers",
                "source": "Onisep"
            }
        ],
        "sources": [
            "Onisep",
            "ADEME",
            "AAMF (Association des Agriculteurs Méthaniseurs de France)"
        ],
        "interests": [
            "nature-environnement",
            "construire-fabriquer"
        ],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Selon l'Ademe et l'Onisep, la méthanisation permet de diviser par deux les achats d'engrais chimiques de synthèse d'une ferme tout en produisant une énergie 100% renouvelable et locale.",
            "pourquoi": "L'azote organique contenu dans les lisiers ressort du digesteur sous une forme ammoniacale directement assimilable par les plantes, sans dégrader l'humus.",
            "a_retenir": "Le métier emblématique de l'économie circulaire où le déchet d'hier devient le carburant et l'engrais de demain."
        },
        "salaryRanges": {
            "france": {
                "raw": "2 600 - 3 400 € brut/mois débutant (~31 200 - 40 800 €/an, Source : Onisep / Fiches Déchets)",
                "range": "2 600 - 3 400 € brut/mois débutant (~31 200 - 40 800 €/an, Source : Onisep / Fiches Déchets)",
                "source": "Onisep / Studyrama"
            },
            "senegal": {
                "raw": "350 000 - 1 100 000 FCFA / mois (Source : Projets biogaz domestique et agro-industries)",
                "range": "350 000 - 1 100 000 FCFA / mois (Source : Projets biogaz domestique et agro-industries)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "technico-commercial-agroequipement",
        "slug": "technico-commercial-agroequipement",
        "title": "Technico-Commercial en Agroéquipement / Vendeur Machines Agricoles",
        "aliases": [
            "Conseiller commercial en machinisme agricole",
            "Commercial tracteurs et matériels",
            "Chargé d'affaires agroéquipement"
        ],
        "icon": "🚜",
        "image": "https://images.unsplash.com/photo-1595838796799-a1b7bc8a7c29?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Agroéquipement, Machinisme & Robotique Agricole",
        "domainId": "agroequipement-machinisme",
        "subdomain": "Commerce & conseil agroéquipement",
        "sourceOnisep": false,
        "sourceStudyrama": true,
        "isEmerging": false,
        "level": "Bac +2 (BTS Agroéquipement / BTS NDRC) à Bac +3 (Licence Pro Commerce Agricole)",
        "salary": "🇫🇷 France : 2 200 - 3 500 € brut/mois fixe + commissions élevées (35 000 - 55 000 €/an package, Source : Studyrama / APECITA) • 🇸🇳 Sénégal : 350 000 - 1 200 000 FCFA / mois + intéressement (Source : Concessionnaires matériels de Dakar)",
        "simpleDefinition": "Le technico-commercial en agroéquipement conseille et vend des matériels agricoles de haute technicité (tracteurs guidés GPS, moissonneuses-batteuses, semoirs de précision, robots de désherbage) aux agriculteurs et coopératives.",
        "shortDescription": "Fiche documentée par Studyrama, ce professionnel allie passion du machinisme moderne, sens du contact paysan et compétences financières aiguisées.",
        "longDescription": "Vendre un tracteur moderne de 250 chevaux ou une moissonneuse-batteuse connectée représente un investissement de 150 000 à plus de 500 000 euros pour un exploitant. Le technico-commercial analyse l'assolement, la topographie et la rentabilité de la ferme pour préconiser les équipements les plus rentables. Il réalise des démonstrations dynamiques au champ, négocie la reprise des anciens matériels d'occasion et monte les plans de financement ou de leasing.",
        "mainObjective": "Équiper les exploitations agricoles avec des matériels fiables et innovants garantissant productivité et retour sur investissement rapide.",
        "companyRole": "Moteur du chiffre d'affaires des concessions et partenaire stratégique du renouvellement du parc matériel des exploitants.",
        "workEnvironment": [
            "🌾 Démonstrations et essais en direct au champ",
            "🏢 Concessions de machinisme agricole et ateliers de service après-vente",
            "🚗 Déplacements quotidiens dans les fermes de son secteur géographique"
        ],
        "missions": [
            "Prospecter les exploitants agricoles, entrepreneurs de travaux agricoles (ETA) et CUMA de son secteur",
            "Analyser les besoins techniques en puissance, débit de chantier et compatibilité d'attelage",
            "Organiser des journées de démonstration au champ pour faire tester les nouvelles machines",
            "Chiffrer les devis, évaluer la valeur de reprise du matériel usagé et proposer des solutions de crédit-bail",
            "Assurer la mise en route du matériel livré et former l'agriculteur à la console GPS et à l'ordinateur de bord"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Point commercial en concession",
                "desc": "Revue des livraisons de tracteurs neuves avec l'atelier et vérification des dossiers de financement bancaire."
            },
            {
                "time": "10:00",
                "title": "Démonstration au champ d'un semoir monograine",
                "desc": "Mise en route chez un céréalier avec réglage de la profondeur et du jalonnage par coupure de rangs GPS."
            },
            {
                "time": "14:30",
                "title": "Négociation de reprise chez un éleveur",
                "desc": "Expertise d'un tracteur d'occasion de 8 ans : état des pneumatiques, heures moteur et chiffrage de l'offre."
            },
            {
                "time": "17:00",
                "title": "Suivi des devis et prise de commandes",
                "desc": "Finalisation d'un contrat de vente d'une mélangeuse distributrice pour un groupement d'éleveurs."
            }
        ],
        "skills": {
            "technical": [
                "Connaissance pointue du machinisme agricole (moteur, hydraulique, transmissions à variation continue)",
                "Technologies embarquées (ISOBUS, autoguidage GPS RTK, télémétrie)",
                "Calcul de rentabilité et coût de revient machine à l'heure/hectare",
                "Réglementation du transport routier agricole",
                "Techniques de négociation B2B"
            ],
            "human": [
                "Aisance relationnelle et parler franc apprécié des agriculteurs",
                "Sens de l'écoute et crédibilité technique sans faille",
                "Dynamisme commercial et ténacité",
                "Sens de l'organisation autonome"
            ],
            "tools": [
                "Tracteurs et outils de démonstration toutes marques (John Deere, Claas, New Holland, Fendt)",
                "Consoles de guidage tactile GPS",
                "CRM de gestion de portefeuille clients",
                "Logiciels constructeurs de configuration de machines"
            ],
            "analytical": [
                "Calcul de retour sur investissement (ROI) machine",
                "Cotation argus des matériels agricoles d'occasion"
            ]
        },
        "specializations": [
            "Traction et matériels de récolte lourds",
            "Outils de travail du sol et semis de précision",
            "Robotique agricole et désherbage autonome",
            "Matériels spécialisés viticoles ou arboricoles"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Bac Pro",
                    "title": "Bac Pro Maintenance des Matériels ou CGEA",
                    "desc": "Apprentissage des bases techniques des engins ou de la conduite d'exploitation."
                },
                {
                    "step": "Bac +2",
                    "title": "BTS Agroéquipement ou BTS Négociation et Digitalisation de la Relation Client (NDRC)",
                    "desc": "Double compétence indispensable mécanique et commerce."
                },
                {
                    "step": "Bac +3",
                    "title": "Licence Pro Commercialisation des Agroéquipements",
                    "desc": "Formation reine pour intégrer directement les grands constructeurs et réseaux de concessionnaires."
                }
            ],
            "schools": [
                {
                    "name": "Lycées agricoles dispensant le BTS Agroéquipement — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "IUT et Écoles spécialisées en commerce agricole (Angers, Beauvais) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centres de formation professionnelle en machinisme agricole (Sénégal)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Permis B indispensable, Permis Poids Lourd (C) apprécié",
                "Certifications de formation constructeurs (ex: Université John Deere)"
            ],
            "schoolSubjects": [
                "Agroéquipement",
                "Commerce et négociation",
                "Agronomie",
                "Comptabilité de gestion"
            ]
        },
        "career": {
            "sectors": [
                "Concessions de machinisme agricole régionales",
                "Filiales de distribution de grands constructeurs mondiaux",
                "Sociétés d'importation d'engins agricoles",
                "Groupements d'achats agricoles et CUMA"
            ],
            "employerTypes": [
                "Réseaux de concessionnaires privés",
                "Constructeurs de matériel agricole",
                "Entreprises de négoce d'occasion"
            ],
            "evolution": "Vendeur itinérant junior ➔ Technico-commercial senior matériels de pointe ➔ Chef des ventes concession ➔ Directeur de concession agroéquipement",
            "pros": "Rémunération très attractive liée aux commissions sur des ventes de matériels coûteux, travail avec les dernières innovations technologiques (robots, GPS), véhicule de fonction.",
            "cons": "Forte pression sur les objectifs de vente annuels, disponibilité demandée en période de récolte, concurrence commerciale rude entre concessions."
        },
        "gettingStarted": {
            "beginnerProject": "Visiter le salon SIMA ou Innov-Agri pour comparer les solutions de guidage GPS de trois grandes marques.",
            "intermediateProject": "Calculer l'écart de rentabilité entre l'achat individuel d'une moissonneuse et son utilisation partagée en CUMA.",
            "advancedProject": "Construire un argumentaire de vente comparatif pour convaincre un exploitant de passer au semis direct avec un semoir pneumatique sous pression.",
            "portfolioIdeas": [
                "Dossier technique de présentation d'un tracteur forte puissance",
                "Simulation financière de crédit-bail avec valeur résiduelle"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'IA aide à configurer les machines sur mesure et valorise les données télématiques de diagnostic à distance comme argument de vente central.",
            "automatedTasks": [
                "Chiffrage automatique des options de personnalisation machine",
                "Alertes prédictives de renouvellement de matériel basées sur les heures moteur"
            ],
            "emergingSkills": [
                "Démonstration d'outils pilotés par intelligence artificielle (caméras de pulvérisation ciblée)",
                "Conseil sur les aides à la décarbonation du parc"
            ],
            "humanEdge": "La poignée de main, la confiance personnelle et le partage d'un café dans la cour de ferme pour conclure une transaction majeure."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la mécanisation agricole est une priorité nationale pour substituer la traction animale par des motoculteurs et tracteurs adaptés (bassin arachidier, vallée du fleuve). Les concessionnaires dakarois (Sismar, Tracto-Sénégal, CFAO) recrutent activement des profils technico-commerciaux.",
            "localSectors": [
                "Concessionnaires de matériels agricoles de Dakar et Thiès",
                "Pôles rizicoles mécanisés de Saint-Louis et Richard-Toll",
                "Programmes d'équipement de l'État (bailleurs de fonds, DER)"
            ],
            "remoteWork": "Métier de présence commerciale physique.",
            "entrepreneurship": "Création d'une entreprise de location-vente de petits matériels agricoles motorisés adaptés aux petits producteurs familiaux."
        },
        "relatedJobSlugs": [
            "technicien-maintenance-agroequipement",
            "ingenieur-machinisme-agricole",
            "chef-exploitation-agricole",
            "conseiller-gestion-agricole"
        ],
        "connectedFamilies": [
            "commerce-marketing",
            "industrie-ingenierie",
            "gestion-finance"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Technico-Commercial Agroéquipement Studyrama",
                "url": "https://www.studyrama.com/formations/fiches-metiers/agriculture/technico-commercial-en-agroequipement-91756",
                "source": "Studyrama"
            }
        ],
        "sources": [
            "Studyrama",
            "SEDIMA (Syndicat des Entreprises de Service et Distribution du Machinisme Agricole)",
            "APECITA"
        ],
        "interests": [
            "negocier-convaincre",
            "construire-fabriquer"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon Studyrama et le SEDIMA, le secteur de l'agroéquipement offre un taux d'insertion professionnelle de près de 100% avec des pénuries récurrentes de commerciaux techniques formés.",
            "pourquoi": "Le secteur souffre d'un déficit de notoriété chez les jeunes urbains alors qu'il manipule des technologies plus avancées que le secteur automobile grand public.",
            "a_retenir": "Un métier où l'expertise mécanique rencontre l'excellence commerciale avec des rémunérations parmi les plus motivantes du monde agricole."
        },
        "salaryRanges": {
            "france": {
                "raw": "2 200 - 3 500 € brut/mois fixe + commissions élevées (35 000 - 55 000 €/an package, Source : Studyrama / APECITA)",
                "range": "2 200 - 3 500 € brut/mois fixe + commissions élevées (35 000 - 55 000 €/an package, Source : Studyrama / APECITA)",
                "source": "APECITA / Marché agro-maritime"
            },
            "senegal": {
                "raw": "350 000 - 1 200 000 FCFA / mois + intéressement (Source : Concessionnaires matériels de Dakar)",
                "range": "350 000 - 1 200 000 FCFA / mois + intéressement (Source : Concessionnaires matériels de Dakar)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "technicien-maintenance-agroequipement",
        "slug": "technicien-maintenance-agroequipement",
        "title": "Technicien de Maintenance en Agroéquipement / Mécanicien Agricole",
        "aliases": [
            "Mécanicien agricole",
            "Technicienne d'atelier agroéquipement",
            "Dépanneur d'engins agricoles"
        ],
        "icon": "🔧",
        "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Agroéquipement, Machinisme & Robotique Agricole",
        "domainId": "agroequipement-machinisme",
        "subdomain": "Maintenance & SAV agroéquipement",
        "sourceOnisep": true,
        "sourceStudyrama": true,
        "isEmerging": false,
        "level": "CAP / Bac Pro Maintenance des Matériels (option Agricole) à Bac +2 (BTS Agroéquipement)",
        "salary": "🇫🇷 France : 1 900 - 2 800 € brut/mois débutant (~22 800 - 33 600 €/an + primes de dépannage récolte, Source : Onisep / Studyrama) • 🇸🇳 Sénégal : 220 000 - 850 000 FCFA / mois (Source : Ateliers mécaniques, SAED, concessions)",
        "simpleDefinition": "Le technicien de maintenance en agroéquipement entretient, diagnostique et répare les tracteurs, moissonneuses-batteuses et machines agricoles complexes, en atelier ou en urgence directement au milieu du champ.",
        "shortDescription": "Fiche documentée par Onisep et Studyrama, c'est l'urgentiste des champs sans qui aucune récolte ne pourrait aboutir en période de moisson.",
        "longDescription": "Bien loin du mécanicien traditionnel d'autrefois, ce technicien de pointe intervient sur des engins ultra-sophistiqués combinant moteurs thermiques puissants, circuits hydrauliques haute pression (300 bars), bus de communication électronique (CAN-bus), télémétrie et systèmes de dépollution avancés. À l'aide de sa valise informatique de diagnostic, il identifie la cause d'une panne, démonte et répare les organes défaillants pour remettre la machine en route dans les plus brefs délais.",
        "mainObjective": "Maintenir en état opérationnel permanent le parc de machines agricoles et intervenir ultra-rapidement en cas de panne critique au champ.",
        "companyRole": "Pilier de la satisfaction client en concession et garant de la continuité des chantiers agricoles.",
        "workEnvironment": [
            "🏬 Ateliers de concession équipés de ponts élévateurs lourds",
            "🚐 Fourgon d'intervention tout-terrain pour dépannages directs au champ",
            "🌾 Interventions d'urgence de jour comme de nuit en pleine saison de moisson"
        ],
        "missions": [
            "Effectuer les révisions périodiques préventives (vidanges, filtres, graissage, étanchéité)",
            "Brancher la valise de diagnostic électronique constructeur pour relever les codes défauts",
            "Dépanner les circuits hydrauliques (distributeurs, pompes à cylindrée variable, vérins)",
            "Réparer ou reconditionner les transmissions complexes (boîtes de vitesses semi-powershift ou à variation continue)",
            "Installer et paramétrer les consoles GPS d'autoguidage et capteurs connectés"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Diagnostic en atelier d'un tracteur récent",
                "desc": "Branchement de la valise informatique pour analyser une perte de puissance moteur liée à un capteur de rampe commune."
            },
            {
                "time": "10:30",
                "title": "Remplacement d'un bloc hydraulique",
                "desc": "Démontage soigné d'un distributeur électrohydraulique fuyant et purge sous pression du circuit."
            },
            {
                "time": "14:00",
                "title": "Appel d'urgence au champ : batteuse à l'arrêt",
                "desc": "Départ immédiat en fourgon atelier pour réparer une courroie principale de batteur cassée en pleine moisson."
            },
            {
                "time": "17:00",
                "title": "Rapport d'intervention et commande de pièces",
                "desc": "Saisie informatique du compte-rendu de dépannage et commande des pièces d'origine auprès du constructeur."
            }
        ],
        "skills": {
            "technical": [
                "Électronique embarquée et diagnostic par bus CAN",
                "Hydraulique proportionnelle haute pression",
                "Mécanique diesel lourde et technologies antipollution (AdBlue, FAP)",
                "Climatisation des cabines d'engins",
                "Soudure à l'arc et au semi-automatique"
            ],
            "human": [
                "Capacité de diagnostic logique et méthodique",
                "Calme et résistance au stress face à un exploitant angoissé",
                "Autonomie sur les dépannages isolés au champ",
                "Bonne condition physique"
            ],
            "tools": [
                "Valises de diagnostic électronique multimarques et constructeurs",
                "Manomètres hydrauliques haute pression",
                "Clés dynamométriques et outillage lourd",
                "Fourgons ateliers mobiles entièrement équipés"
            ],
            "analytical": [
                "Lecture experte de schémas électriques et hydrauliques industriels",
                "Analyse d'échantillons d'huile moteur et hydraulique usagée"
            ]
        },
        "specializations": [
            "Dépannage machines de récolte lourdes (batteuses, ensileuses)",
            "Électronique embarquée et systèmes d'autoguidage GPS",
            "Hydraulique agricole avancée",
            "Maintenance des robots agricoles autonomes"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "CAP / Bac Pro",
                    "title": "Bac Pro Maintenance des Matériels (option Agricole)",
                    "desc": "Formation pratique par excellence, souvent en apprentissage en concession."
                },
                {
                    "step": "Bac +2",
                    "title": "BTS Maintenance des Matériels de Construction et de Manutention ou BTS Agroéquipement",
                    "desc": "Expertise approfondie en mécatronique et gestion d'atelier."
                }
            ],
            "schools": [
                {
                    "name": "Lycées professionnels agricoles et CFA spécialisés maintenance agricole — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centre de Formation Professionnelle Horticole et Mécanique (CFPH) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Centres d'initiation et de perfectionnement en machinisme agricole (Sénégal)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Attestation d'aptitude à la manipulation des fluides frigorigènes (clim)",
                "CACES cariste et engins agricoles"
            ],
            "schoolSubjects": [
                "Mécanique",
                "Hydraulique",
                "Électricité et électronique",
                "Technologie des agroéquipements"
            ]
        },
        "career": {
            "sectors": [
                "Concessions de machinisme agricole de marque",
                "Entreprises de Travaux Agricoles (ETA) propriétaires de flottes",
                "Grandes exploitations agricoles céréalières",
                "Constructeurs de matériels agricoles"
            ],
            "employerTypes": [
                "Concessions privées",
                "Ateliers d'artisans ruraux indépendants",
                "Coopératives d'utilisation de matériel agricole (CUMA)"
            ],
            "evolution": "Mécanicien d'atelier junior ➔ Technicien dépanneur itinérant ➔ Chef d'atelier concession ➔ Formateur technique constructeur ou inspecteur SAV",
            "pros": "Métier passionnant pour les mordus de mécanique et technologie, embauche immédiate garantie partout en France et à l'étranger, valorisation de la débrouillardise.",
            "cons": "Périodes d'astreintes très lourdes en été (moissons) week-ends compris, salissures d'huile et travail en conditions météo difficiles au champ."
        },
        "gettingStarted": {
            "beginnerProject": "Effectuer la vidange complète et le changement de tous les filtres d'un tracteur agricole en suivant la revue technique.",
            "intermediateProject": "Rechercher une panne sur un circuit électrique d'éclairage et d'électrovannes à l'aide d'un multimètre et d'un schéma.",
            "advancedProject": "Réaliser le calage d'une pompe à injection électronique et le reconditionnement d'un distributeur hydraulique.",
            "portfolioIdeas": [
                "Rapport de diagnostic d'une panne de bus CAN résolue",
                "Schéma hydraulique annoté avec relevés de pression réels"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "La télématique connectée transmet en direct les anomalies de la machine à l'atelier avant même que le chauffeur ne s'en aperçoive, permettant la maintenance prédictive.",
            "automatedTasks": [
                "Remontée automatique des codes défauts via carte SIM 4G/5G intégrée au tracteur",
                "Commandes de pièces de rechange préconisées par algorithme"
            ],
            "emergingSkills": [
                "Télé-diagnostic à distance avec lunettes de réalité augmentée",
                "Maintenance des capteurs LiDAR et caméras des robots de binage"
            ],
            "humanEdge": "Le savoir-faire manuel pour débloquer un roulement grippé ou ressouder une flèche d'attelage rompue sur une piste boueuse."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la panne de motopompes d'irrigation ou de tracteurs lors des périodes critiques de semis ou de récolte du riz dans la vallée du fleuve entraîne des pertes considérables. Les mécaniciens agricoles qualifiés y sont disputés à prix d'or.",
            "localSectors": [
                "Vallée du fleuve Sénégal (ateliers de Saint-Louis, Ross Béthio, Podor)",
                "Bassin arachidier et unités de motoculture",
                "Ateliers centraux des concessions de Dakar et Thiès"
            ],
            "remoteWork": "100% sur le terrain et en atelier.",
            "entrepreneurship": "Création d'un atelier mobile de dépannage mécanique et hydraulique pour les périmètres rizicoles irrigués du nord du Sénégal."
        },
        "relatedJobSlugs": [
            "technico-commercial-agroequipement",
            "ingenieur-machinisme-agricole",
            "cerealier",
            "chef-exploitation-agricole"
        ],
        "connectedFamilies": [
            "industrie-ingenierie",
            "transport-logistique",
            "artisanat-metiers-art"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Métier Mécanicien Agricole Onisep",
                "url": "https://www.onisep.fr/ressources/univers-metier/metiers/mecanicien-mecanicienne-en-materiel-agricole",
                "source": "Onisep"
            }
        ],
        "sources": [
            "Onisep",
            "Studyrama",
            "SEDIMA"
        ],
        "interests": [
            "construire-fabriquer",
            "resoudre-problemes"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon l'Onisep et le SEDIMA, il manque en permanence plus de 1 500 mécaniciens en agroéquipement chaque année en France, faisant de ce métier l'un des plus recherchés du pays.",
            "pourquoi": "La sophistication extrême des tracteurs modernes demande des compétences mixtes en informatique, hydraulique et mécanique que peu de jeunes acquièrent.",
            "a_retenir": "Un passeport pour l'emploi garanti avec un métier d'action, de réflexion et d'utilité immédiate pour nourrir la planète."
        },
        "salaryRanges": {
            "france": {
                "raw": "1 900 - 2 800 € brut/mois débutant (~22 800 - 33 600 €/an + primes de dépannage récolte, Source : Onisep / Studyrama)",
                "range": "1 900 - 2 800 € brut/mois débutant (~22 800 - 33 600 €/an + primes de dépannage récolte, Source : Onisep / Studyrama)",
                "source": "Onisep / Studyrama"
            },
            "senegal": {
                "raw": "220 000 - 850 000 FCFA / mois (Source : Ateliers mécaniques, SAED, concessions)",
                "range": "220 000 - 850 000 FCFA / mois (Source : Ateliers mécaniques, SAED, concessions)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "ingenieur-machinisme-agricole",
        "slug": "ingenieur-machinisme-agricole",
        "title": "Ingénieur en Machinisme Agricole & Robotique / R&D Agroéquipement",
        "aliases": [
            "Ingénieur R&D agroéquipement",
            "Concepteur de machines agricoles",
            "Ingénieur mécatronique agricole"
        ],
        "icon": "🤖",
        "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Agroéquipement, Machinisme & Robotique Agricole",
        "domainId": "agroequipement-machinisme",
        "subdomain": "R&D & conception agroéquipement",
        "sourceOnisep": true,
        "sourceStudyrama": false,
        "isEmerging": true,
        "level": "Bac +5 (Diplôme d'Ingénieur Mécatronique, Mécanique ou Agronome)",
        "salary": "🇫🇷 France : 3 100 - 4 000 € brut/mois débutant (~37 200 - 48 000 €/an, Source : Onisep / APEC) • 🇸🇳 International / Afrique : 600 000 - 1 800 000 FCFA / mois (Source : Industrie mécanique, centres de recherche)",
        "simpleDefinition": "L'ingénieur en machinisme agricole conçoit, teste et optimise les machines agricoles de demain : robots de désherbage autonomes, semoirs ultra-précis, tracteurs à hydrogène ou électriques et systèmes de pulvérisation ciblée par IA.",
        "shortDescription": "Fiche documentée par Onisep, ce concepteur de pointe révolutionne le travail de la terre en alliant résistance des matériaux, électronique embarquée et transition écologique.",
        "longDescription": "À la croisée de la mécanique lourde, de l'agronomie et de la robotique autonome, cet ingénieur travaille dans les bureaux d'études des constructeurs mondiaux d'engins agricoles. Selon l'Onisep, il conçoit des prototypes sur logiciels de CAO 3D, simule la résistance des châssis aux contraintes des champs et intègre des capteurs de vision artificielle pour permettre aux robots de biner entre les rangs au millimètre près sans abîmer les cultures.",
        "mainObjective": "Concevoir des agroéquipements innovants, moins consommateurs d'énergie, préservant les sols du compactage et automatisant les tâches pénibles.",
        "companyRole": "Pilote de l'innovation produit et de la transformation technologique des constructeurs d'agroéquipements.",
        "workEnvironment": [
            "💻 Bureaux d'études R&D et stations de CAO 3D",
            "🛠️ Ateliers de prototypage et bancs d'essais d'endurance",
            "🌾 Pistes d'essais privées et parcelles d'expérimentation en conditions réelles"
        ],
        "missions": [
            "Concevoir l'architecture mécanique et mécatronique de nouveaux engins sur logiciels CAO 3D (SolidWorks, Catia)",
            "Dimensionner les structures acier, circuits hydrauliques et transmissions pour résister à 10 000 heures de travail intense",
            "Développer les algorithmes de guidage autonome par caméras et capteurs de vision industrielle",
            "Mener des campagnes d'essais au champ pour mesurer le débit de chantier, la consommation et l'usure",
            "Homologuer les machines selon les normes de sécurité européennes et environnementales strictes"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Simulation mécanique par éléments finis",
                "desc": "Calcul des contraintes de torsion sur le châssis d'un déchaumeur de 12 mètres repliable."
            },
            {
                "time": "11:00",
                "title": "Revue de projet avec l'équipe robotique",
                "desc": "Validation du choix des capteurs LiDAR et caméras infrarouges pour un robot enjambeur de vigne autonome."
            },
            {
                "time": "14:00",
                "title": "Essais sur piste d'un prototype de pulvérisateur",
                "desc": "Test de la coupure buse à buse par caméra IA détectant des adventices à 25 km/h."
            },
            {
                "time": "16:30",
                "title": "Analyse télémétrique des données d'essais",
                "desc": "Dépouillement des enregistrements de vibrations et pressions hydrauliques collectées durant les essais."
            }
        ],
        "skills": {
            "technical": [
                "Conception Mécanique Assistée par Ordinateur (CAO 3D, FEA)",
                "Mécatronique & asservissement électrohydraulique",
                "Vision par ordinateur & robotique mobile",
                "Interaction sol-pneu et cinématique des matériels agricoles",
                "Normes d'homologation des engins agricoles (directive machines)"
            ],
            "human": [
                "Créativité et esprit d'innovation de rupture",
                "Sens aigu du travail d'équipe pluridisciplinaire",
                "Pragmatisme et respect des contraintes de terrain agricole",
                "Rigueur de méthode scientifique"
            ],
            "tools": [
                "Logiciels CAO (SolidWorks, PTC Creo, Catia)",
                "Logiciels de simulation éléments finis (Ansys)",
                "Environnements de robotique (ROS, Python, C++)",
                "Bancs d'essais dynamométriques et capteurs de déformation"
            ],
            "analytical": [
                "Calculs de fatigue des métaux sous sollicitations cycliques",
                "Optimisation du rapport poids/puissance pour éviter le compactage des sols"
            ]
        },
        "specializations": [
            "Robotique autonome agricole de plein champ",
            "Systèmes de pulvérisation ultra-localisée par vision IA",
            "Électrification et motorisations alternatives (hydrogène, biométhane)",
            "Technologies de récolte délicate des fruits et légumes"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Bac +2",
                    "title": "Prépa Scientifique (MP, PSI, PT) ou BUT Génie Mécanique et Productique (GMP)",
                    "desc": "Bases solides en mathématiques, mécanique et résistance des matériaux."
                },
                {
                    "step": "Bac +5",
                    "title": "Diplôme d'Ingénieur Mécanique, Mécatronique ou Agroéquipement",
                    "desc": "Grandes écoles d'ingénieurs généralistes ou spécialisées en agroéquipement."
                }
            ],
            "schools": [
                {
                    "name": "UniLaSalle Beauvais (Filière Agroéquipements & Nouvelles Technologies) — France",
                    "country": "France",
                    "scope": "International"
                },
                {
                    "name": "Arts et Métiers (ENSAM) / INSA — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Polytechnique de Thiès (EPT) / ENSA Thiès — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification Conception SolidWorks (CSWA/CSWP)",
                "Habilitation sécurité robotique mobile"
            ],
            "schoolSubjects": [
                "Mécanique des solides",
                "Résistance des matériaux",
                "Automatique",
                "Agronomie"
            ]
        },
        "career": {
            "sectors": [
                "Constructeurs d'agroéquipements mondiaux (Kuhn, Claas, John Deere, CNH Industrial)",
                "Startups de robotique agricole (Naïo Technologies, Agreenculture)",
                "Instituts de recherche appliquée (INRAE, Arvalis)",
                "Bureaux d'ingénierie et équipementiers de premier rang"
            ],
            "employerTypes": [
                "Grands groupes industriels de machinisme",
                "Startups AgriTech hardware",
                "Centres de recherche technologique"
            ],
            "evolution": "Ingénieur études R&D ➔ Chef de projet prototype ➔ Responsable bureau d'études ➔ Directeur R&D constructeur",
            "pros": "Création d'objets concrets spectaculaires, projets au cœur de la transition écologique (moins de phytos grâce aux robots), dimension internationale.",
            "cons": "Cycles de développement longs (3 à 5 ans avant la commercialisation d'une machine), contraintes budgétaires industrielles strictes."
        },
        "gettingStarted": {
            "beginnerProject": "Modéliser un mécanisme de relevage 3 points standardisé sur un logiciel de CAO 3D libre (FreeCAD).",
            "intermediateProject": "Programmer un petit robot sur châssis Arduino capable de suivre une ligne représentant un rang de culture avec des capteurs infrarouges.",
            "advancedProject": "Concevoir et simuler sous Ansys le châssis d'une rampe de pulvérisation en aluminium pour minimiser le fouettement à haute vitesse.",
            "portfolioIdeas": [
                "Dossier complet de modélisation CAO 3D d'un outil agricole",
                "Algorithme de détection de mauvaises herbes par vision sous Python"
            ]
        },
        "aiImpact": {
            "level": "Révolutionnaire",
            "summary": "L'IA intégrée aux caméras embarquées permet désormais d'identifier chaque adventice au millimètre près en temps réel et de déclencher une micro-gouttelette de produit ou un coup de laser.",
            "automatedTasks": [
                "Génération de modèles CAO par IA générative industrielle",
                "Pilotage autonome complet des trajectoires en bout de champ"
            ],
            "emergingSkills": [
                "Entraînement de modèles de vision par ordinateur sur des banques d'images de plantes",
                "Sécurité des systèmes robotiques autonomes en environnement ouvert"
            ],
            "humanEdge": "L'ingéniosité d'architecture pour concilier robustesse à la boue, simplicité d'usage et coût de fabrication abordable."
        },
        "africaContext": {
            "senegalInsight": "En Afrique, les machines occidentales lourdes et coûteuses sont souvent inadaptées aux petites parcelles et sols sahéliens. Les ingénieurs concepteurs de machinisme adapté (semoirs légers, batteuses de mil et fonio locales, motopompes solaires) comme à la SISMAR à Pout sont les bâtisseurs de la souveraineté alimentaire.",
            "localSectors": [
                "Société Industrielle Sahélienne de Mécaniques, de Matériels Agricoles et de Représentations (SISMAR)",
                "Centres de recherche (ISRA, Cirad)",
                "Startups locales de mécanisation solaire"
            ],
            "remoteWork": "Conception CAO télétravaillable, essais physiques sur site.",
            "entrepreneurship": "Création d'une entreprise concevant des machines légères de récolte et de décorticage du fonio ou de l'arachide adaptées aux femmes rurales."
        },
        "relatedJobSlugs": [
            "technico-commercial-agroequipement",
            "technicien-maintenance-agroequipement",
            "ingenieur-agritech",
            "ingenieur-agronome"
        ],
        "connectedFamilies": [
            "industrie-ingenierie",
            "technologies-donnees",
            "recherche-sciences"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Ingénieur Machinisme Onisep",
                "url": "https://www.onisep.fr/ressources/univers-metier/metiers/ingenieur-agronome",
                "source": "Onisep"
            }
        ],
        "sources": [
            "Onisep",
            "AXEMA (Union des Industriels de l'Agroéquipement)",
            "UniLaSalle"
        ],
        "interests": [
            "construire-fabriquer",
            "technologie-code"
        ],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Selon Onisep et l'INRAE, les nouveaux pulvérisateurs intelligents à caméras IA développés par ces ingénieurs permettent de réduire jusqu'à 80% l'utilisation de désherbants chimiques.",
            "pourquoi": "La machine ne pulvérise plus l'ensemble du champ à l'aveugle mais cible uniquement les feuilles de la mauvaise herbe identifiée en une fraction de seconde.",
            "a_retenir": "Un profil d'ingénieur star qui invente les outils d'une agriculture zéro chimie et hautement productive."
        },
        "salaryRanges": {
            "france": {
                "raw": "3 100 - 4 000 € brut/mois débutant (~37 200 - 48 000 €/an, Source : Onisep / APEC)",
                "range": "3 100 - 4 000 € brut/mois débutant (~37 200 - 48 000 €/an, Source : Onisep / APEC)",
                "source": "Onisep / Studyrama"
            },
            "senegal": {
                "raw": "600 000 - 1 800 000 FCFA / mois (Source : Industrie mécanique, centres de recherche)",
                "range": "600 000 - 1 800 000 FCFA / mois (Source : Industrie mécanique, centres de recherche)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "aquaculteur",
        "slug": "aquaculteur",
        "title": "Aquaculteur / Pisciculteur / Ostréiculteur",
        "aliases": [
            "Pisciculteur",
            "Ostréiculteur",
            "Éleveur de poissons",
            "Aquacultrice"
        ],
        "icon": "🐟",
        "image": "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Pêche, Aquaculture & Ressources Marines",
        "domainId": "peche-aquaculture",
        "subdomain": "Aquaculture & mariculture",
        "sourceOnisep": true,
        "sourceStudyrama": true,
        "isEmerging": false,
        "level": "CAP / Bac Pro Aquaculture à Bac +2 (BTSA Aquaculture)",
        "salary": "🇫🇷 France : 1 800 - 2 800 € net/mois (Source : Studyrama / Onisep) • 🇸🇳 Sénégal : 250 000 - 900 000 FCFA / mois (Source : Fermes piscicoles, ANA)",
        "simpleDefinition": "L'aquaculteur élève des organismes aquatiques (truites, bars, daurades, tilapias, huîtres, moules ou crevettes) en eau douce ou en mer, de la reproduction jusqu'à la récolte marchande.",
        "shortDescription": "Fiche documentée par Onisep et Studyrama, il assure la production durable de protéines aquatiques face à l'épuisement des stocks de poissons sauvages.",
        "longDescription": "L'aquaculteur conduit l'élevage dans des bassins en terre, des raceways bétonnés, des cages flottantes en mer ou des parcs à huîtres découvrants. Selon Studyrama, il maîtrise l'écloserie, le sevrage des alevins, le nourrissage dosé selon la température de l'eau, la surveillance des paramètres physico-chimiques (oxygène dissous, pH, ammonium) et le tri calibré des poissons ou coquillages pour le marché.",
        "mainObjective": "Produire des poissons ou coquillages sains et savoureux tout en préservant la qualité de l'écosystème aquatique.",
        "companyRole": "Responsable zootechnique et garant du bien-être et de la sécurité sanitaire des élevages aquatiques.",
        "workEnvironment": [
            "🌊 Bassins extérieurs, étangs, cages en mer ou estran maritime à marée basse",
            "🚤 Bateaux ostréicoles et barques de nourrissage",
            "🥾 Bottes, cuissardes et travail physique au contact permanent de l'eau"
        ],
        "missions": [
            "Surveiller en continu la qualité de l'eau (taux d'oxygène dissous, température, salinité, nitrites)",
            "Gérer la distribution raisonnée des aliments pour poissons sans polluer le fond des bassins",
            "Assurer la reproduction artificielle en écloserie et le suivi des larves et alevins",
            "Effectuer les tris périodiques par classe de taille pour éviter le cannibalisme",
            "Récolter, abattre, éviscérer et conditionner sous glace les poissons pour la vente"
        ],
        "typicalDay": [
            {
                "time": "06:30",
                "title": "Mesure matinale de l'oxygène dissous",
                "desc": "Contrôle à l'oxymètre de tous les bassins à l'aube, moment où l'oxygène est au plus bas."
            },
            {
                "time": "08:30",
                "title": "Tournée de nourrissage et observation du comportement",
                "desc": "Distribution de granulés et vérification de la voracité des poissons pour ajuster la ration."
            },
            {
                "time": "14:00",
                "title": "Chantier de calibrage mécanique",
                "desc": "Passage d'un lot de bars dans la trieuse à rouleaux pour séparer 3 calibres marchands."
            },
            {
                "time": "17:00",
                "title": "Entretien des grilles et aérateurs",
                "desc": "Nettoyage des grilles de filtration et test des aérateurs à pales de secours."
            }
        ],
        "skills": {
            "technical": [
                "Biologie et physiologie des espèces aquatiques",
                "Chimie de l'eau et dynamique des bassins aquacoles",
                "Conduite des équipements (oxymètres, trieuses, aérateurs)",
                "Biosécurité et prévention des pathologies aquatiques",
                "Normes d'hygiène alimentaire des produits de la mer"
            ],
            "human": [
                "Observation minutieuse et patience",
                "Grande endurance physique et résistance au froid/humidité",
                "Réactivité immédiate face à une baisse d'oxygène",
                "Sens de l'organisation"
            ],
            "tools": [
                "Oxymètres et sondes multiparamètres",
                "Distributeurs automatiques de nourriture solaires",
                "Aérateurs de surface à pales",
                "Bateaux barges ostréicoles et chaluts de pêche"
            ],
            "analytical": [
                "Calcul du taux de conversion alimentaire (FCR)",
                "Densité de charge par mètre cube d'eau"
            ]
        },
        "specializations": [
            "Pisciculture continentale d'eau douce (truites, esturgeons)",
            "Pisciculture marine en cages (bar, daurade, saumon)",
            "Conchyliculture (huîtres, moules)",
            "Pisciculture tropicale (tilapia, poisson-chat africain Clarias)"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "CAP / Bac Pro",
                    "title": "Bac Pro Productions Aquacoles",
                    "desc": "Formation pratique par alternance en ferme aquacole ou parc conchylicole."
                },
                {
                    "step": "Bac +2",
                    "title": "BTSA Aquaculture",
                    "desc": "Diplôme de référence pour devenir chef d'exploitation aquacole ou responsable d'écloserie."
                },
                {
                    "step": "Bac +3",
                    "title": "Licence Pro Aquaculture Durable ou Gestion des Écosystèmes Aquatiques",
                    "desc": "Approfondissement en biosécurité et systèmes à recirculation (RAS)."
                }
            ],
            "schools": [
                {
                    "name": "Lycées maritimes et aquacoles (Guérande, La Rochelle, Sète) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut Universitaire de Pêche et d'Aquaculture (IUPA Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Centre d'Initiation Horticole et Aquacole (Sénégal)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Permis bateau côtier / fluvial",
                "Certificat d'Aptitude à la Conduite des Engins Maritimes"
            ],
            "schoolSubjects": [
                "Biologie marine",
                "Chimie de l'eau",
                "Pathologie aquatique",
                "Gestion d'entreprise"
            ]
        },
        "career": {
            "sectors": [
                "Fermes piscicoles d'eau douce ou de mer",
                "Parcs ostréicoles et mytilicoles",
                "Écloseries et nurseries marines industrielles",
                "Centres de recherche océanographique (Ifremer, CRODT)"
            ],
            "employerTypes": [
                "Entreprises aquacoles privées",
                "Groupements de conchyliculteurs",
                "Coopératives de pêcheurs"
            ],
            "evolution": "Ouvrier aquacole ➔ Chef d'atelier écloserie ou grossissement ➔ Responsable d'exploitation aquacole ➔ Propriétaire d'une ferme aquacole",
            "pros": "Travail en communion avec le milieu marin ou aquatique, secteur indispensable pour nourrir le monde sans vider les océans.",
            "cons": "Travail physique exigeant soumis aux intempéries marines, risques sanitaires brutaux (marées rouges, épizooties)."
        },
        "gettingStarted": {
            "beginnerProject": "Monter un petit système aquaponique associant 5 tilapias et un bac de basilic en circuit fermé.",
            "intermediateProject": "Mesurer et cartographier les variations journalières d'oxygène dissous et de température dans un étang de pêche.",
            "advancedProject": "Dimensionner une écloserie de tilapias capable de produire 50 000 alevins par mois avec système de filtration biologique.",
            "portfolioIdeas": [
                "Protocole de suivi physico-chimique d'un bassin",
                "Plan d'une installation aquacole en circuit fermé (RAS)"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des caméras sous-marines équipées de réseaux neuronaux évaluent la taille des poissons et arrêtent automatiquement l'alimentation dès que la satiété est atteinte.",
            "automatedTasks": [
                "Surveillance continue des paramètres physico-chimiques par bouées IoT",
                "Calcul automatique de la biomasse sous l'eau"
            ],
            "emergingSkills": [
                "Supervision des systèmes d'aquaculture en circuit recirculé (RAS) haute technologie",
                "Gestion des flux de données hydrobiologiques"
            ],
            "humanEdge": "Le savoir-faire de manipulation délicate des alevins et géniteurs lors de la ponte artificielle."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la rareté du poisson sauvage en mer pousse l'Agence Nationale de l'Aquaculture (ANA) à développer massivement l'élevage de tilapia et de clarias le long du fleuve Sénégal, à Richard-Toll et dans le delta du Saloum.",
            "localSectors": [
                "Fermes piscicoles de la vallée du fleuve Sénégal (Podor, Dagana, Matam)",
                "Pôles ostréicoles du Sine Saloum (Delta du Saloum, Fatick)",
                "Agro-pisciculture périurbaine de Dakar"
            ],
            "remoteWork": "Totalement sur place auprès des bassins.",
            "entrepreneurship": "Création d'une ferme piscicole intensive de tilapia en bassins hors-sol avec alimentation solaire des pompes."
        },
        "relatedJobSlugs": [
            "halieute",
            "responsable-elevage",
            "ingenieur-agroalimentaire",
            "chef-exploitation-agricole"
        ],
        "connectedFamilies": [
            "environnement-climat",
            "industrie-ingenierie",
            "commerce-marketing"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Pisciculteur Onisep",
                "url": "https://www.onisep.fr",
                "source": "Onisep"
            }
        ],
        "sources": [
            "Onisep",
            "Studyrama",
            "CIPA (Comité Interprofessionnel des Produits de l'Aquaculture)",
            "ANA Sénégal"
        ],
        "interests": [
            "nature-environnement",
            "construire-fabriquer"
        ],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Selon l'Onisep et la FAO, plus d'un poisson sur deux consommé dans le monde provient désormais de l'aquaculture et non de la pêche de capture.",
            "pourquoi": "La stabilisation des captures sauvages face à une population mondiale croissante fait de l'aquaculture l'activité de production animale à la croissance la plus rapide.",
            "a_retenir": "Un métier d'avenir absolu pour préserver la biodiversité des mers tout en assurant l'apport en protéines saines des populations."
        },
        "salaryRanges": {
            "france": {
                "raw": "1 800 - 2 800 € net/mois (Source : Studyrama / Onisep)",
                "range": "1 800 - 2 800 € net/mois (Source : Studyrama / Onisep)",
                "source": "Onisep / Studyrama"
            },
            "senegal": {
                "raw": "250 000 - 900 000 FCFA / mois (Source : Fermes piscicoles, ANA)",
                "range": "250 000 - 900 000 FCFA / mois (Source : Fermes piscicoles, ANA)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "halieute",
        "slug": "halieute",
        "title": "Ingénieur Halieute / Chercheur en Sciences Halieutiques",
        "aliases": [
            "Halieute",
            "Biologiste des pêches",
            "Expert en gestion des ressources marines",
            "Scientifique des pêches"
        ],
        "icon": "🐬",
        "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Pêche, Aquaculture & Ressources Marines",
        "domainId": "peche-aquaculture",
        "subdomain": "Gestion des ressources marines",
        "sourceOnisep": true,
        "sourceStudyrama": false,
        "isEmerging": false,
        "level": "Bac +5 (Diplôme d'Ingénieur Agronome spécialité Halieutique ou Master Océanologie)",
        "salary": "🇫🇷 France : 2 800 - 3 500 € brut/mois débutant (~33 600 - 42 000 €/an, Source : Onisep / Ifremer) • 🇸🇳 Sénégal : 450 000 - 1 500 000 FCFA / mois (Source : CRODT, Ministères des Pêches, ONG marines)",
        "simpleDefinition": "L'ingénieur halieute évalue l'état des stocks de poissons, étudie la dynamique des populations marines et définit les quotas de pêche durables pour éviter la surpêche.",
        "shortDescription": "Fiche documentée par Onisep dans ses filières d'excellence agronomiques marines, ce scientifique modélise l'équilibre fragile entre activité humaine et survie des océans.",
        "longDescription": "L'halieutique est la science de l'exploitation des ressources vivantes aquatiques. Selon l'Onisep, l'halieute embarque sur des navires de recherche scientifique ou recueille des données auprès des criées portuaires (taille des prises, âge des poissons par lecture des otolithes, maturité sexuelle). À l'aide de modèles mathématiques et statistiques, il calcule le Rendement Maximal Durable (RMD) et éclaire les gouvernements pour fixer les périodes de repos biologique et les quotas de pêche.",
        "mainObjective": "Préserver la durabilité des ressources marines et la viabilité économique des communautés de pêcheurs.",
        "companyRole": "Garant scientifique de la gestion responsable des pêches maritimes et fluviales.",
        "workEnvironment": [
            "🔬 Laboratoires d'océanographie et de recherche marine (Ifremer, IRD, CRODT)",
            "🚢 Campagnes de chalutage scientifique en haute mer",
            "⚓ Criées portuaires et quais de débarquement artisanaux"
        ],
        "missions": [
            "Conduire des campagnes d'évaluation acoustique et d'échantillonnage biologique en mer",
            "Déterminer l'âge des poissons par otolithométrie et analyser les régimes alimentaires marins",
            "Développer des modèles mathématiques de dynamique des populations de poissons (Virtual Population Analysis)",
            "Évaluer les impacts des engins de pêche (sélectivité des maillages de filets) pour réduire les captures accidentelles",
            "Rédiger des avis scientifiques pour les comités régionaux des pêches et les conventions internationales"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Échantillonnage en criée à l'arrivée des bateaux",
                "desc": "Mesure biométrique de 200 merlus et prélèvement d'otolithes pour estimer la pyramide des âges."
            },
            {
                "time": "11:00",
                "title": "Lecture microscopique au laboratoire",
                "desc": "Comptage des anneaux de croissance sur coupes minces d'otolithes au microscope à contraste de phase."
            },
            {
                "time": "14:00",
                "title": "Modélisation statistique sous R",
                "desc": "Ajustement du modèle de dynamique de population pour simuler l'impact d'une hausse de 10% de l'effort de pêche."
            },
            {
                "time": "16:30",
                "title": "Conférence avec les représentants des pêcheurs",
                "desc": "Présentation pédagogique de l'état de la ressource et débat sur les dates de fermeture saisonnière."
            }
        ],
        "skills": {
            "technical": [
                "Biologie marine et dynamique des populations exploitées",
                "Otolithométrie et biométrie halieutique",
                "Modélisation mathématique et biostatistique sous R ou Python",
                "Technologie des engins de pêche et acoustique sous-marine",
                "Politique Commune de la Pêche (PCP) et droit de la mer"
            ],
            "human": [
                "Pédagogie et diplomatie face aux tensions socio-économiques",
                "Rigueur d'analyse scientifique sans complaisance",
                "Résistance au mal de mer lors des campagnes hauturières",
                "Aptitude au dialogue interdisciplinaire"
            ],
            "tools": [
                "Microscopes et loupes binoculaires de laboratoire",
                "Sondeurs acoustiques de détection de bancs de poissons",
                "Packages R dédiés aux pêches (FLR, stockassessment)",
                "Bases de données océanographiques internationales"
            ],
            "analytical": [
                "Estimation du Rendement Maximal Durable (RMD/MSY)",
                "Analyse multivariée des écosystèmes marins"
            ]
        },
        "specializations": [
            "Évaluation des stocks pélagiques (sardines, thons)",
            "Gestion des pêcheries démersales et benthiques (soles, langoustines)",
            "Éco-conception d'engins de pêche sélectifs",
            "Gouvernance des pêches artisanales tropicales"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Bac +2",
                    "title": "Prépa BCPST ou Licence Sciences de la Vie et de la Terre",
                    "desc": "Bases en biologie, mathématiques appliquées et écologie."
                },
                {
                    "step": "Bac +5",
                    "title": "Diplôme d'Ingénieur Agronome spécialité Halieutique ou Master Sciences Halieutiques",
                    "desc": "Seule grande filière spécialisée en France à l'Institut Agro Rennes-Angers."
                }
            ],
            "schools": [
                {
                    "name": "Institut Agro Rennes-Angers (Département Halieutique) — France",
                    "country": "France",
                    "scope": "International"
                },
                {
                    "name": "Institut Universitaire de Pêche et d'Aquaculture (IUPA Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Centre de Recherches Océanographiques de Dakar-Thiaroye (CRODT/ISRA) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certificat de sécurité maritime (formation à la survie en mer)",
                "Plongeur scientifique CNRS / Ifremer"
            ],
            "schoolSubjects": [
                "Écologie marine",
                "Biostatistiques",
                "Dynamique des populations",
                "Économie des pêches"
            ]
        },
        "career": {
            "sectors": [
                "Instituts publics de recherche marine (Ifremer, IRD, CRODT)",
                "Comités nationaux et régionaux des pêches maritimes",
                "Organisations régionales de gestion de la pêche (CIEM/ICES, ICCAT)",
                "Bureaux d'études maritimes et ONG de conservation (WWF)"
            ],
            "employerTypes": [
                "Instituts de recherche d'État",
                "Organisations intergouvernementales",
                "Fédérations de professionnels de la pêche"
            ],
            "evolution": "Chargé d'études halieutiques ➔ Chercheur en modélisation marine ➔ Responsable d'unité d'évaluation des stocks ➔ Conseiller scientifique auprès des ministères ou de la Commission européenne",
            "pros": "Métier à haute utilité publique pour sauver la biodiversité marine, campagnes océanographiques stimulantes, réseau international d'experts soudé.",
            "cons": "Position délicate d'arbitre entre impératifs écologiques stricts et survie économique immédiate des pêcheurs, éloignement familial en mer."
        },
        "gettingStarted": {
            "beginnerProject": "Analyser les rapports publics du CIEM sur l'état du stock de bar en Manche pour comprendre la notion de quota.",
            "intermediateProject": "Écrire un script R pour estimer les paramètres de l'équation de croissance de von Bertalanffy sur un jeu de données de tailles.",
            "advancedProject": "Modéliser l'impact d'un changement de maillage de filet de chalut sur la sélectivité des juvéniles d'une espèce cible.",
            "portfolioIdeas": [
                "Analyse statistique de données de criée",
                "Note de synthèse sur la gestion durable du thon rouge"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "Des algorithmes de vision par ordinateur identifient et mesurent automatiquement les poissons défilant sur les tapis de tri des navires ou les images de caméras sous-marines.",
            "automatedTasks": [
                "Reconnaissance d'espèces et comptage par vidéo automatisée",
                "Traitement volumique des échosondeurs acoustiques"
            ],
            "emergingSkills": [
                "Machine learning appliqué à l'océanographie satellitaire",
                "Intégration du changement climatique dans les modèles de dérive larvaire"
            ],
            "humanEdge": "La négociation diplomatique internationale et la pédagogie bienveillante avec les marins-pêcheurs."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la pêche artisanale (pirogues) emploie plus de 600 000 personnes et fournit le fameux Ceebu Jën national. Face à la raréfaction des sardinelles (yaboy) et aux accords avec les chalutiers étrangers, les chercheurs du CRODT et de l'IUPA sont au cœur des débats cruciaux de souveraineté nationale.",
            "localSectors": [
                "Centre de Recherches Océanographiques de Dakar-Thiaroye (CRODT/ISRA)",
                "Grands ports de pêche artisanale (Kayar, Joal-Fadiouth, Saint-Louis, Soumbédioune)",
                "Direction des Pêches Maritimes (DPM)"
            ],
            "remoteWork": "Analyses statistiques possibles en télétravail partiel, missions de terrain indispensables.",
            "entrepreneurship": "Création d'une agence indépendante de certification et d'audit de durabilité des pêcheries ouest-africaines."
        },
        "relatedJobSlugs": [
            "aquaculteur",
            "ingenieur-agronome",
            "ingenieur-agroecologie",
            "responsable-qualite-haccp-agri"
        ],
        "connectedFamilies": [
            "environnement-climat",
            "recherche-sciences",
            "droit-justice"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Métier Halieute Onisep",
                "url": "https://www.onisep.fr/ressources/univers-metier/metiers/ingenieur-agronome",
                "source": "Onisep"
            }
        ],
        "sources": [
            "Onisep",
            "Ifremer",
            "Institut Agro Rennes",
            "CRODT"
        ],
        "interests": [
            "nature-environnement",
            "resoudre-problemes"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon l'Onisep et l'Institut Agro, les ingénieurs halieutes sont très rares sur le marché mondial (moins de 40 diplômés par an en France) pour une demande scientifique immense.",
            "pourquoi": "Peu de filières dispensent cette triple compétence pointue combinant biologie des poissons, statistiques avancées et droit maritime international.",
            "a_retenir": "Une profession rare et prestigieuse qui veille sur la santé des océans et la subsistance de millions de familles de pêcheurs."
        },
        "salaryRanges": {
            "france": {
                "raw": "2 800 - 3 500 € brut/mois débutant (~33 600 - 42 000 €/an, Source : Onisep / Ifremer)",
                "range": "2 800 - 3 500 € brut/mois débutant (~33 600 - 42 000 €/an, Source : Onisep / Ifremer)",
                "source": "Onisep / Studyrama"
            },
            "senegal": {
                "raw": "450 000 - 1 500 000 FCFA / mois (Source : CRODT, Ministères des Pêches, ONG marines)",
                "range": "450 000 - 1 500 000 FCFA / mois (Source : CRODT, Ministères des Pêches, ONG marines)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "ingenieur-forestier",
        "slug": "ingenieur-forestier",
        "title": "Ingénieur Forestier / Gestionnaire d'Écosystèmes Forestiers",
        "aliases": [
            "Cadre technique forestier",
            "Expert forestier",
            "Ingénieure des forêts"
        ],
        "icon": "🌲",
        "image": "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Forêt, Sylviculture, Paysage & Espaces Naturels",
        "domainId": "foret-espaces-naturels",
        "subdomain": "Gestion forestière & sylviculture",
        "sourceOnisep": true,
        "sourceStudyrama": true,
        "isEmerging": false,
        "level": "Bac +5 (Diplôme d'Ingénieur Forestier - AgroParisTech / ESB ou Master Forêt)",
        "salary": "🇫🇷 France : 2 800 - 3 500 € brut/mois débutant (~33 600 - 42 000 €/an, Source : Onisep / ONF) • 🇸🇳 Sénégal : 450 000 - 1 500 000 FCFA / mois (Source : Eaux et Forêts, Projets Grande Muraille Verte)",
        "simpleDefinition": "L'ingénieur forestier planifie et supervise la gestion durable des massifs forestiers : régénération des arbres, martelage, récolte raisonnée du bois, préservation de la biodiversité et adaptation au réchauffement climatique.",
        "shortDescription": "Fiche documentée par Onisep et Studyrama, ce grand gestionnaire du temps long pilote les forêts publiques ou privées sur des cycles de 50 à 100 ans.",
        "longDescription": "Véritable stratège des massifs boisés, l'ingénieur forestier concilie trois fonctions majeures : économique (fourniture de bois d'œuvre pour la construction et l'énergie), écologique (sanctuaire de biodiversité, captage de carbone et protection des sols contre l'érosion) et sociale (accueil du public et prévention des feux). Selon l'Onisep, il réalise des inventaires dendrométriques par télédétection satellite et LiDAR, programme les coupes d'éclaircie et introduit de nouvelles essences adaptées aux sécheresses.",
        "mainObjective": "Assurer la pérennité et la santé des forêts tout en valorisant durablement la ressource en bois.",
        "companyRole": "Garant de l'aménagement durable des massifs et de la résilience climatique du patrimoine forestier.",
        "workEnvironment": [
            "🌲 Massifs forestiers étendus et pistes forestières",
            "🏢 Office National des Forêts (ONF), coopératives forestières et cabinets d'experts",
            "💻 Systèmes d'Information Géographique (SIG) et données LiDAR"
        ],
        "missions": [
            "Élaborer les documents de gestion durable (Plans Simples de Gestion, Aménagements forestiers)",
            "Programmer les travaux de régénération naturelle, de plantation et de dégagement des jeunes semis",
            "Organiser les ventes de bois sur pied ou bord de route auprès des scieries et exploitants",
            "Concevoir les plans de défense des forêts contre les incendies (DFCI) et de gestion cynégétique (gibier)",
            "Diagnostiquer le dépérissement des peuplements sous l'effet du stress hydrique et des scolytes"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Tournée de martelage en forêt",
                "desc": "Marquage au marteau forestier des chênes arrivés à maturité et des arbres d'avenir à conserver."
            },
            {
                "time": "11:00",
                "title": "Contrôle d'un chantier d'abattage mécanisé",
                "desc": "Vérification du respect des sols et du zonage écologique par l'abatteuse-ébrancheuse."
            },
            {
                "time": "14:00",
                "title": "Cartographie SIG des peuplements dépérissants",
                "desc": "Analyse d'images satellites infrarouges pour cartographier les attaques de ravageurs sur épicéas."
            },
            {
                "time": "16:30",
                "title": "Réunion avec les élus locaux et associations",
                "desc": "Présentation du plan de reboisement diversifié avec des essences résistantes au climat futur."
            }
        ],
        "skills": {
            "technical": [
                "Dendrométrie et inventaire forestier",
                "Sylviculture comparée des feuillus et résineux",
                "Pédologie forestière et écologie des stations",
                "Économie de la filière bois et estimation de valeur",
                "Cartographie SIG avancée et exploitation de données LiDAR"
            ],
            "human": [
                "Vision prospective à long terme (échelles séculaires)",
                "Pédagogie et fermeté dans l'arbitrage des usages",
                "Grande autonomie et sens du terrain",
                "Aisance de négociation commerciale"
            ],
            "tools": [
                "Compas forestiers et dendromètres optiques (Vertex)",
                "Systèmes SIG (QGIS / ArcGIS)",
                "Données de télédétection satellitaire et drones",
                "Marteau forestier traditionnel et bombes de traçage"
            ],
            "analytical": [
                "Calcul de la possibilité annuelle de coupe (volume durable prélevable)",
                "Évaluation de la séquestration de carbone par hectare de forêt"
            ]
        },
        "specializations": [
            "Gestion de forêts publiques domaniales et communales (ONF)",
            "Expertise forestière privée et transactions de domaines",
            "Défense des forêts contre les incendies (DFCI)",
            "Forêt tropicale humide et agroforesterie"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Bac +2",
                    "title": "Prépa BCPST ou BTSA Gestion Forestière",
                    "desc": "Excellentes bases biologiques et immersion en milieu forestier."
                },
                {
                    "step": "Bac +5",
                    "title": "Diplôme d'Ingénieur Forestier (AgroParisTech Nancy - ex-ENGREF) ou École Supérieure du Bois (ESB)",
                    "desc": "La référence nationale et internationale en gestion forestière."
                }
            ],
            "schools": [
                {
                    "name": "AgroParisTech - Campus de Nancy (ex-ENGREF) — France",
                    "country": "France",
                    "scope": "International"
                },
                {
                    "name": "École Supérieure du Bois (ESB Nantes) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "ENSA Thiès / Direction des Eaux, Forêts et Chasses — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Agrément d'Expert Forestier (CNIEFEB)",
                "Brevet de spécialiste SIG forestier"
            ],
            "schoolSubjects": [
                "Dendrologie",
                "Sylviculture",
                "Écologie végétale",
                "Économie forestière"
            ]
        },
        "career": {
            "sectors": [
                "Office National des Forêts (ONF)",
                "Coopératives forestières et gestionnaires privés",
                "Cabinets d'experts forestiers indépendants",
                "Centres Nationaux de la Propriété Forestière (CNPF)"
            ],
            "employerTypes": [
                "Établissements publics gestionnaires",
                "Coopératives de propriétaires sylvicoles",
                "Grandes compagnies forestières internationales"
            ],
            "evolution": "Responsable de triage forestier ➔ Responsable d'unité territoriale forestière ➔ Directeur d'agence régionale ONF ou associé en cabinet d'expertise",
            "pros": "Cadre de travail grandiose en pleine nature, métier noble dédié à la transmission aux générations futures, rôle central dans le stockage de carbone.",
            "cons": "Constat douloureux des dépérissements liés aux sécheresses brutales, conflits fréquents d'usage entre promeneurs, chasseurs et exploitants."
        },
        "gettingStarted": {
            "beginnerProject": "Reconnaître et inventorier les 15 essences d'arbres principales d'un massif forestier proche de chez soi.",
            "intermediateProject": "Mesurer la hauteur et le diamètre à 1,30 m de 50 arbres pour estimer le cubage sur pied à l'aide d'un tarif de cubage.",
            "advancedProject": "Rédiger un plan de gestion sur 20 ans pour une parcelle boisée de 30 hectares intégrant le renouvellement par îlots d'avenir.",
            "portfolioIdeas": [
                "Carte SIG de typologie des stations forestières",
                "Dossier d'expertise financière et sylvicole d'un massif"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "Le traitement par intelligence artificielle des scans LiDAR aéroportés permet d'inventorier chaque arbre individuel (hauteur, volume de houppier, santé) sur des milliers d'hectares en quelques secondes.",
            "automatedTasks": [
                "Segmentation et comptage automatisé des cimes d'arbres par LiDAR",
                "Détection précoce des foyers d'incendie par réseaux de caméras thermiques"
            ],
            "emergingSkills": [
                "Analyse de données géospatiales 3D",
                "Modélisation des trajectoires bioclimatiques des essences"
            ],
            "humanEdge": "Le coup d'œil du forestier sur l'écorce et les bourgeons pour juger de la vigueur future d'un arbre d'élite."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la gestion forestière (Direction des Eaux et Forêts) est au cœur de la lutte contre la désertification et de la préservation des forêts classées de Casamance, du Niokolo Koba et du projet titanesque de la Grande Muraille Verte.",
            "localSectors": [
                "Direction Générale des Eaux, Forêts et Chasses du Sénégal",
                "Agence Sénégalaise de la Reforestation et de la Grande Muraille Verte (ASERGMV)",
                "Parcs nationaux et réserves de biosphère"
            ],
            "remoteWork": "Études cartographiques possibles à distance, présence sur le terrain incontournable.",
            "entrepreneurship": "Création d'une entreprise de reboisement écologique et de valorisation des produits forestiers non ligneux (gomme arabique, karité, baobab)."
        },
        "relatedJobSlugs": [
            "technicien-forestier",
            "pepinieriste",
            "ingenieur-agroecologie",
            "jardinier-paysagiste"
        ],
        "connectedFamilies": [
            "environnement-climat",
            "recherche-sciences",
            "industrie-ingenierie"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Métier Ingénieur Forestier Onisep",
                "url": "https://www.onisep.fr/ressources/univers-metier/metiers/ingenieur-forestier-ingenieure-forestiere",
                "source": "Onisep"
            }
        ],
        "sources": [
            "Onisep",
            "Studyrama",
            "ONF",
            "AgroParisTech"
        ],
        "interests": [
            "nature-environnement",
            "explorer-decouvrir"
        ],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Selon l'Onisep et l'ONF, les forêts françaises absorbent à elles seules environ 15% des émissions annuelles de gaz à effet de serre du pays grâce à la photosynthèse.",
            "pourquoi": "Le bois récolté et utilisé dans la charpente ou le meuble piège ce carbone pendant des siècles, tandis que les jeunes arbres replantés continuent de capter du CO2.",
            "a_retenir": "Un bâtisseur d'écosystèmes dont chaque geste d'aujourd'hui façonnera le paysage et le climat dans un siècle."
        },
        "salaryRanges": {
            "france": {
                "raw": "2 800 - 3 500 € brut/mois débutant (~33 600 - 42 000 €/an, Source : Onisep / ONF)",
                "range": "2 800 - 3 500 € brut/mois débutant (~33 600 - 42 000 €/an, Source : Onisep / ONF)",
                "source": "Onisep / Studyrama"
            },
            "senegal": {
                "raw": "450 000 - 1 500 000 FCFA / mois (Source : Eaux et Forêts, Projets Grande Muraille Verte)",
                "range": "450 000 - 1 500 000 FCFA / mois (Source : Eaux et Forêts, Projets Grande Muraille Verte)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "technicien-forestier",
        "slug": "technicien-forestier",
        "title": "Technicien Forestier / Garde Forestier",
        "aliases": [
            "Technicienne forestière",
            "Garde forestier",
            "Agent technique de l'ONF"
        ],
        "icon": "🥾",
        "image": "https://images.unsplash.com/photo-1511497584788-87676104235f?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Forêt, Sylviculture, Paysage & Espaces Naturels",
        "domainId": "foret-espaces-naturels",
        "subdomain": "Gestion forestière & sylviculture",
        "sourceOnisep": true,
        "sourceStudyrama": true,
        "isEmerging": false,
        "level": "Bac Pro Forêt à Bac +2 (BTSA Gestion Forestière)",
        "salary": "🇫🇷 France : 1 800 - 2 500 € brut/mois débutant (~21 600 - 30 000 €/an, Source : Onisep / Studyrama) • 🇸🇳 Sénégal : 220 000 - 750 000 FCFA / mois (Source : Service des Eaux et Forêts)",
        "simpleDefinition": "Le technicien forestier applique sur le terrain les plans de gestion des forêts : il marque les arbres à couper (martelage), surveille les chantiers d'exploitation, prévient les infractions et entretient les chemins et sentiers.",
        "shortDescription": "Fiche documentée par Onisep et Studyrama, c'est l'homme de terrain par excellence, protecteur quotidien du patrimoine boisé et premier observateur de la faune et de la flore.",
        "longDescription": "Sous la responsabilité de l'ingénieur forestier, le technicien passe la majeure partie de son temps au cœur des bois. Il réalise le piquetage des parcelles, surveille la santé des arbres, encadre les bûcherons et débardeurs, veille à la propreté des cours d'eau et sensibilise promeneurs et chasseurs au respect des règles environnementales.",
        "mainObjective": "Assurer la surveillance quotidienne, la bonne exécution des travaux sylvicoles et la protection physique du massif forestier.",
        "companyRole": "Opérationnel de terrain garant de la police de l'environnement et de la sécurité des espaces boisés.",
        "workEnvironment": [
            "🌲 Vie en plein air par tous les temps dans les massifs forestiers",
            "🚙 Véhicule tout-terrain (4x4) équipé de matériel de mesure et secours",
            "🤝 Contacts réguliers avec usagers de la forêt, scieurs et chasseurs"
        ],
        "missions": [
            "Participer au martelage des coupes de bois et mesurer les billes abattues au bord de route",
            "Superviser les chantiers de débroussaillement, de plantation et de pose de protections contre le gibier",
            "Surveiller les départs de feux de forêt en période estivale et guider les secours",
            "Constater et verbaliser les infractions environnementales (dépôts sauvages, circulation illégale de quads)",
            "Sensibiliser le public scolaire et les promeneurs à la fragilité de la biodiversité forestière"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Cubage des grumes bord de route",
                "desc": "Mesure au compas et mètre ruban de 80 troncs d'arbres prêts à être enlevés par les grumiers."
            },
            {
                "time": "10:30",
                "title": "Contrôle d'un chantier de reboisement",
                "desc": "Vérification de la qualité de mise en terre de 2 000 jeunes plants de cèdres de l'Atlas."
            },
            {
                "time": "14:00",
                "title": "Tournée de surveillance et police de la nature",
                "desc": "Contrôle des accès coupe-feu et verbalisation d'un véhicule stationné sur une zone protégée."
            },
            {
                "time": "16:30",
                "title": "Rapport d'activité sur tablette de terrain",
                "desc": "Saisie des données de cubage et transmission au gestionnaire forestier."
            }
        ],
        "skills": {
            "technical": [
                "Reconnaissance des essences forestières et stations",
                "Techniques de cubage des bois sur pied et abattus",
                "Utilisation du compas, relascope et GPS de randonnée",
                "Réglementation forestière et police de l'environnement",
                "Sécurité des chantiers d'abattage et premiers secours"
            ],
            "human": [
                "Excellente condition physique et goût de la solitude en nature",
                "Sens de l'autorité et diplomatie",
                "Sens aigu de l'orientation en milieu isolé",
                "Polyvalence et débrouillardise pratique"
            ],
            "tools": [
                "Compas forestier et ruban forestier à rembobinage automatique",
                "Marteau forestier numéroté d'État",
                "Tablette durcie étanche avec SIG embarqué",
                "Matériel de premiers secours et tronçonneuse de dégagement"
            ],
            "analytical": [
                "Calcul rapide de volumes de bois (formule d'Huber)",
                "Relevé des taux de reprise des plantations"
            ]
        },
        "specializations": [
            "Agent patrimonial ONF (forêts publiques)",
            "Technicien en coopérative forestière privée",
            "Technicien cynégétique et faune sauvage",
            "Garde gestionnaire d'espaces naturels et réserves"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Bac Pro",
                    "title": "Bac Pro Forêt",
                    "desc": "Bases pratiques de bûcheronnage et de sylviculture."
                },
                {
                    "step": "Bac +2",
                    "title": "BTSA Gestion Forestière",
                    "desc": "Diplôme indispensable pour accéder aux postes de technicien à l'ONF ou en coopérative."
                }
            ],
            "schools": [
                {
                    "name": "Lycées agricoles et forestiers (Meymac, Crogny, Bazas, Javols) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centre National de Formation des Techniciens des Eaux et Forêts (CNFTEF Djibélor) — Ziguinchor, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Assermentation police de la chasse et de l'environnement",
                "Permis B et permis remorque (BE)"
            ],
            "schoolSubjects": [
                "Sylviculture",
                "Dendrologie",
                "Droit forestier",
                "Topographie"
            ]
        },
        "career": {
            "sectors": [
                "Office National des Forêts (ONF)",
                "Coopératives et groupements forestiers privés",
                "Parcs naturels régionaux et réserves naturelles",
                "Entreprises d'exploitation forestière"
            ],
            "employerTypes": [
                "Établissements publics",
                "Organismes sylvicoles privés",
                "Collectivités territoriales"
            ],
            "evolution": "Technicien de terrain ➔ Chef d'équipe forestière ➔ Responsable d'unité de gestion ➔ Ingénieur forestier par promotion interne",
            "pros": "Vie quotidienne au cœur des plus beaux paysages forestiers, grande liberté d'action sur le terrain, utilité écologique directe.",
            "cons": "Travail solitaire par pluie, neige ou canicule, face-à-face parfois tendus lors du contrôle d'infractions."
        },
        "gettingStarted": {
            "beginnerProject": "Effectuer une course d'orientation en forêt en se repérant exclusivement à la carte IGN et à la boussole.",
            "intermediateProject": "Cuber 20 grumes de bois abattues et calculer leur volume net en mètres cubes.",
            "advancedProject": "Réaliser le diagnostic de reprise d'une plantation de jeunes chênes avec comptage des plants morts et identification des causes.",
            "portfolioIdeas": [
                "Fiche de cubage terrain normée",
                "Plan d'entretien d'une piste DFCI"
            ]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "Si les tablettes GPS et les alertes satellites facilitent le guidage, l'intervention physique de terrain pour mesurer et surveiller reste irremplaçable.",
            "automatedTasks": [
                "Guidage GPS haute précision sur les parcelles",
                "Remontée d'alertes dépérissement par smartphone"
            ],
            "emergingSkills": [
                "Utilisation de mini-drones légers pour la surveillance locale de cimes",
                "Saisie nomade sur SIG tactile"
            ],
            "humanEdge": "La présence physique dissuasive et le regard aiguisé au ras du sol pour déceler une trace de gibier ou un départ d'incendie."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les techniciens et sous-officiers des Eaux et Forêts formés à Djibélor (Casamance) sont paramilitaires et luttent en première ligne contre la coupe clandestine de bois de vène précieux et les feux de brousse ravageurs.",
            "localSectors": [
                "Postes de contrôle forestier de Casamance et Tambacounda",
                "Zones de pare-feux du Ferlo",
                "Parcs du Niokolo Koba et delta du Saloum"
            ],
            "remoteWork": "Totalement exclu, présence sur le terrain 100%.",
            "entrepreneurship": "Création d'une entreprise privée de débroussaillement et de pose de pare-feux pour sécuriser les vergers et domaines privés."
        },
        "relatedJobSlugs": [
            "ingenieur-forestier",
            "elagueur-grimpeur",
            "pepinieriste",
            "jardinier-paysagiste"
        ],
        "connectedFamilies": [
            "environnement-climat",
            "securite-defense",
            "tourisme-loisirs"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Métier Technicien Forestier Studyrama",
                "url": "https://www.studyrama.com/formations/fiches-metiers/agriculture/technicien-forestier-91757",
                "source": "Studyrama"
            }
        ],
        "sources": [
            "Studyrama",
            "Onisep",
            "ONF"
        ],
        "interests": [
            "nature-environnement",
            "explorer-decouvrir"
        ],
        "saviezVous": {
            "statut": "metier_stable",
            "fait": "Selon Studyrama, le métier de technicien forestier est un des rares métiers où l'on travaille presque à 90% du temps en extérieur au contact direct des éléments naturels.",
            "pourquoi": "La forêt est un milieu vivant complexe qu'aucune caméra ou capteur à distance ne peut comprendre aussi finement que le pas d'un garde forestier.",
            "a_retenir": "La vigie indispensable de nos massifs pour protéger les poumons verts de notre terre."
        },
        "salaryRanges": {
            "france": {
                "raw": "1 800 - 2 500 € brut/mois débutant (~21 600 - 30 000 €/an, Source : Onisep / Studyrama)",
                "range": "1 800 - 2 500 € brut/mois débutant (~21 600 - 30 000 €/an, Source : Onisep / Studyrama)",
                "source": "Onisep / Studyrama"
            },
            "senegal": {
                "raw": "220 000 - 750 000 FCFA / mois (Source : Service des Eaux et Forêts)",
                "range": "220 000 - 750 000 FCFA / mois (Source : Service des Eaux et Forêts)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "jardinier-paysagiste",
        "slug": "jardinier-paysagiste",
        "title": "Jardinier-Paysagiste / Ouvrier du Paysage",
        "aliases": [
            "Paysagiste",
            "Ouvrier paysagiste",
            "Aménageur d'espaces verts",
            "Jardinière-paysagiste"
        ],
        "icon": "🏡",
        "image": "https://images.unsplash.com/photo-1558904541-efa8c4a08931?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Forêt, Sylviculture, Paysage & Espaces Naturels",
        "domainId": "foret-espaces-naturels",
        "subdomain": "Aménagement paysager & espaces verts",
        "sourceOnisep": true,
        "sourceStudyrama": true,
        "isEmerging": false,
        "level": "CAP Agricole Jardinier Paysagiste à Bac +2 (BTSA Aménagements Paysagers)",
        "salary": "🇫🇷 France : 1 800 - 2 600 € brut/mois débutant (~21 600 - 31 200 €/an, Source : Onisep / Studyrama) • 🇸🇳 Sénégal : 180 000 - 700 000 FCFA / mois (Source : Entreprises d'espaces verts, résidences)",
        "simpleDefinition": "Le jardinier-paysagiste crée, aménage et entretient les jardins privés, parcs publics, terrasses végétalisées et terrains de sport : plantations, engazonnement, maçonnerie paysagère et taille soignée.",
        "shortDescription": "Fiche documentée par Onisep et Studyrama, ce sculpteur de la nature embellit notre cadre de vie urbain et rural en associant végétal minéral et eau.",
        "longDescription": "Véritable artisan du cadre de vie, le jardinier-paysagiste prépare les sols, pose les gazons en rouleau, plante arbres, massifs arbustifs et fleurs vivaces. En création, il manie la mini-pelle, pose des dallages, des clôtures et installe des réseaux d'arrosage automatique goutte-à-goutte. En entretien, il tond, taille les haies selon les formes souhaitées et prend soin de la santé des végétaux sans produits chimiques.",
        "mainObjective": "Sublimer les espaces verts et créer des îlots de fraîcheur harmonieux et durables pour le bien-être des usagers.",
        "companyRole": "Artisan de la beauté végétale et du confort bioclimatique dans les villes et jardins privés.",
        "workEnvironment": [
            "🌳 Parcs urbains, jardins de particuliers, résidences et toitures végétalisées",
            "🚜 Mini-pelles, motoculteurs, tondeuses autoportées et taille-haies",
            "🌦️ Travail en extérieur par tous les temps au contact direct de la terre"
        ],
        "missions": [
            "Préparer les terrains (terrassement léger, nivellement, apport d'amendements organiques)",
            "Réaliser des plantations d'arbres, arbustes et vivaces en respectant les distances réglementaires",
            "Construire des murets en pierre sèche, poser des bordures, dalles de terrasse et allées en graviers",
            "Installer et programmer des systèmes d'arrosage automatique enterré et de goutte-à-goutte",
            "Assurer l'entretien saisonnier (taille raisonnée des arbustes, tonte mulching, désherbage alternatif)"
        ],
        "typicalDay": [
            {
                "time": "07:30",
                "title": "Chargement du fourgon à l'atelier",
                "desc": "Chargement des végétaux reçus de la pépinière, des rouleaux de gazon et de l'outillage à batterie."
            },
            {
                "time": "08:30",
                "title": "Chantier de plantation chez un client",
                "desc": "Fouilles de fosses de plantation avec la mini-pelle, pose de tuteurs et paillage en copeaux de bois."
            },
            {
                "time": "13:30",
                "title": "Pose de bordures et réseau d'arrosage",
                "desc": "Tranchée légère pour tuyaux polyéthylène et raccordement des tuyères escamotables."
            },
            {
                "time": "16:30",
                "title": "Nettoyage impeccable du chantier",
                "desc": "Soufflage des allées, évacuation des déchets verts vers la plateforme de compostage."
            }
        ],
        "skills": {
            "technical": [
                "Connaissance des végétaux d'ornement et de leurs exigences de sol",
                "Techniques de taille raisonnée et d'élagage doux",
                "Petite maçonnerie paysagère (murets, pavés, dallages)",
                "Installation de réseaux hydrauliques d'arrosage automatique",
                "Conduite d'engins de chantier légers (mini-pelle, chargeur)"
            ],
            "human": [
                "Sens artistique et goût de l'harmonie des volumes et couleurs",
                "Endurance physique et dextérité manuelle",
                "Sens du service et contact agréable avec les clients",
                "Esprit d'équipe sur chantier"
            ],
            "tools": [
                "Mini-pelles et compacteurs à plaque vibrante",
                "Taille-haies et tronçonneuses d'élagage légères à batterie",
                "Tondeuses autoportées et débroussailleuses thermiques",
                "Outils à main traditionnels (bêches, râteaux, cisailles)"
            ],
            "analytical": [
                "Calcul des cubages de terre et graviers",
                "Lecture de plans paysagers à l'échelle"
            ]
        },
        "specializations": [
            "Création paysagère et maçonnerie de jardin",
            "Entretien d'espaces verts haut de gamme",
            "Végétalisation de toitures et murs végétaux",
            "Intendance de terrains de sport et golfs"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "CAP / Bac Pro",
                    "title": "CAP Agricole Jardinier Paysagiste ou Bac Pro Aménagements Paysagers",
                    "desc": "Apprentissage des bases du métier, souvent en alternance en entreprise."
                },
                {
                    "step": "Bac +2",
                    "title": "BTSA Aménagements Paysagers",
                    "desc": "Formation de référence pour encadrer des équipes de chantier ou créer son entreprise."
                },
                {
                    "step": "Bac +3",
                    "title": "Licence Pro Gestion des Espaces Végétaux Urbains",
                    "desc": "Spécialisation dans la transition écologique et la renaturation des métropoles."
                }
            ],
            "schools": [
                {
                    "name": "Lycées horticoles et CFA du paysage (Angers, Versailles, Tecomah) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centre de Formation Professionnelle Horticole (CFPH Cambérène) — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "CACES engins de chantier catégorie A (mini-pelle)",
                "Certiphyto Opérateur"
            ],
            "schoolSubjects": [
                "Reconnaissance des végétaux",
                "Maçonnerie paysagère",
                "Topographie",
                "Agronomie"
            ]
        },
        "career": {
            "sectors": [
                "Entreprises privées du paysage (membres de l'UNEP)",
                "Services espaces verts des mairies et collectivités",
                "Sociétés de gestion de terrains de sport et golfs",
                "Hôtels et complexes touristiques"
            ],
            "employerTypes": [
                "PME paysagistes",
                "Grandes entreprises nationales du paysage",
                "Services techniques municipaux"
            ],
            "evolution": "Ouvrier paysagiste ➔ Chef d'équipe paysagiste ➔ Conducteur de travaux paysagers ➔ Créateur de son entreprise du paysage",
            "pros": "Plaisir immédiat de transformer un terrain vague en magnifique jardin verdoyant, travail en plein air, forte demande de recrutement constante.",
            "cons": "Pénibilité physique (port de sacs de terreau, dalles lourdes), travail sous la pluie ou forte chaleur, amplitudes horaires saisonnières au printemps."
        },
        "gettingStarted": {
            "beginnerProject": "Créer un massif de plantes vivaces résistantes au soleil en respectant les étagements de hauteur (tapissantes, moyennes, hautes).",
            "intermediateProject": "Poser 50 mètres carrés de gazon en rouleau avec préparation soignée du lit de semence et premier arrosage copieux.",
            "advancedProject": "Concevoir et réaliser un plan d'arrosage automatique complet pour un jardin de 300 m² avec calcul de débit et pression.",
            "portfolioIdeas": [
                "Photos avant/après de chantiers de jardins métamorphosés",
                "Plan d'aménagement côté avec palette végétale"
            ]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "Si les robots-tondeuses autonomes tondent les grandes pelouses, l'agencement esthétique d'un jardin et la plantation restent l'art de la main humaine.",
            "automatedTasks": [
                "Tonte autonome par robots guidés par satellite GPS RTK",
                "Modélisation 3D de jardins par logiciels assistés"
            ],
            "emergingSkills": [
                "Conception de jardins xérophiles économes en eau",
                "Installation de systèmes d'arrosage connectés aux prévisions météo"
            ],
            "humanEdge": "La sensibilité artistique pour marier les feuillages et la dextérité manuelle pour épouser les formes du terrain."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la création paysagère est en forte expansion dans les villas des Almadies, les stations balnéaires de Saly Portudal et les nouveaux quartiers de Diamniadio où la demande en jardins tropicaux luxuriants (bougainvilliers, palmiers, gazon américain) est forte.",
            "localSectors": [
                "Entreprises d'espaces verts de Dakar et de la Petite Côte",
                "Hôtels et resorts balnéaires de Saly et Cap Skirring",
                "Pépinières paysagères le long de la VDN"
            ],
            "remoteWork": "100% sur les chantiers.",
            "entrepreneurship": "Création d'une entreprise d'aménagement et entretien d'espaces verts éco-conçus avec arrosage solaire et plantes locales résistantes à la sécheresse."
        },
        "relatedJobSlugs": [
            "pepinieriste",
            "horticulteur",
            "elagueur-grimpeur",
            "ingenieur-forestier"
        ],
        "connectedFamilies": [
            "artisanat-metiers-art",
            "environnement-climat",
            "architecture-urbanisme"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Métier Jardinier Paysagiste Onisep",
                "url": "https://www.onisep.fr/ressources/univers-metier/metiers/jardinier-jardiniere-paysagiste",
                "source": "Onisep"
            }
        ],
        "sources": [
            "Onisep",
            "Studyrama",
            "UNEP (Union Nationale des Entreprises du Paysage)"
        ],
        "interests": [
            "construire-fabriquer",
            "nature-environnement"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon l'Union Nationale des Entreprises du Paysage (UNEP) et l'Onisep, le secteur du paysage crée chaque année des milliers d'emplois nets non délocalisables en France.",
            "pourquoi": "L'engouement des citoyens pour la nature en ville et la renaturation des centres urbains face aux canicules stimule une demande sans précédent.",
            "a_retenir": "Un métier concret et gratifiant qui transforme chaque jour nos lieux de vie en havres de fraîcheur et de sérénité."
        },
        "salaryRanges": {
            "france": {
                "raw": "1 800 - 2 600 € brut/mois débutant (~21 600 - 31 200 €/an, Source : Onisep / Studyrama)",
                "range": "1 800 - 2 600 € brut/mois débutant (~21 600 - 31 200 €/an, Source : Onisep / Studyrama)",
                "source": "Onisep / Studyrama"
            },
            "senegal": {
                "raw": "180 000 - 700 000 FCFA / mois (Source : Entreprises d'espaces verts, résidences)",
                "range": "180 000 - 700 000 FCFA / mois (Source : Entreprises d'espaces verts, résidences)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "elagueur-grimpeur",
        "slug": "elagueur-grimpeur",
        "title": "Élagueur-Grimpeur / Arboriste-Grimpeur",
        "aliases": [
            "Arboriste grimpeur",
            "Élagueuse",
            "Bûcheron d'arbres remarquables",
            "Grimpeur élagueur"
        ],
        "icon": "🧗",
        "image": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Forêt, Sylviculture, Paysage & Espaces Naturels",
        "domainId": "foret-espaces-naturels",
        "subdomain": "Soins aux arbres & élagage",
        "sourceOnisep": false,
        "sourceStudyrama": true,
        "isEmerging": false,
        "level": "Certificat de Spécialisation (CS Arboriste-Grimpeur) accessible après CAP/Bac Pro",
        "salary": "🇫🇷 France : 2 000 - 3 200 € net/mois selon technicité et risques pris (Source : Studyrama / Fiches Élagage) • 🇸🇳 Sénégal : 250 000 - 950 000 FCFA / mois (Source : Entreprises d'espaces verts, Senelec)",
        "simpleDefinition": "L'élagueur-grimpeur grimpe à la cime des grands arbres pour couper les branches mortes ou dangereuses, soigner les blessures du bois ou démonter méthodiquement un arbre menaçant les habitations.",
        "shortDescription": "Fiche documentée par Studyrama, cet acrobate de la canopée allie agilité physique exceptionnelle, sang-froid et connaissance intime de la physiologie des arbres.",
        "longDescription": "Loin du simple bûcheronnage au sol, l'arboriste-grimpeur évolue dans les houppiers à 15, 20 ou 30 mètres de hauteur à l'aide de cordes de rappel, harnais et griffes. Il pratique la 'taille douce' en respectant l'architecture naturelle de l'arbre et les angles d'insertion des branches pour favoriser une cicatrisation saine. Lorsque l'arbre doit être abattu dans un espace clos (proximité de toitures ou lignes électriques), il procède au démontage avec rétention par cordages pour descendre les troncs en douceur.",
        "mainObjective": "Maintenir les arbres en bonne santé et sécuriser les personnes et biens tout en respectant l'intégrité biologique du végétal.",
        "companyRole": "Spécialiste de haute voltige garant de la sécurité aérienne et de la pérennité des arbres d'alignement et de parc.",
        "workEnvironment": [
            "🌳 Cimes des grands arbres en hauteur par tous les temps (sauf grand vent)",
            "🦺 Équipements de Protection Individuelle (EPI) complets anti-chute et anti-coupure",
            "🚜 Broyeurs de branches et nacelles télescopiques en soutien au sol"
        ],
        "missions": [
            "Inspecter l'état mécanique et sanitaire de l'arbre avant de grimper (détection de champignons lignivores)",
            "Installer la corde d'accès dans la fourche maîtresse à l'aide d'un sac de lancer",
            "Évoluer dans la couronne de l'arbre avec longes armées et harnais de maintien",
            "Exécuter des coupes précises au ras du collet de branche à l'aide d'une tronçonneuse d'élagage légère",
            "Mettre en place des systèmes de haubanage dynamique pour sécuriser une charpentière fendue sans la couper"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Briefing sécurité et inspection au pied de l'arbre",
                "desc": "Sondage de l'écorce au maillet pour repérer un pourrissement interne et tir au sac pour installer la corde de rappel."
            },
            {
                "time": "09:00",
                "title": "Ascension et taille sanitaire d'un grand platane",
                "desc": "Montée en technique SRT et suppression des branches sèches menaçant une rue passante."
            },
            {
                "time": "14:00",
                "title": "Démontage délicat d'un pin en milieu contraint",
                "desc": "Coupe en tronçons billot par billot avec rétention sur cabestan pour ne pas toucher la véranda située sous l'arbre."
            },
            {
                "time": "16:30",
                "title": "Broyage des rémanents et affûtage",
                "desc": "Passage des branches dans le broyeur de branches et affûtage des chaînes de tronçonneuse."
            }
        ],
        "skills": {
            "technical": [
                "Physiologie arboricole et principes de cicatrisation (mécanisme CODIT)",
                "Techniques d'accès sur corde (SRT/DDRT) et nœuds autobloquants",
                "Techniques de rétention lourde de branches au cabestan",
                "Maniement des tronçonneuses d'élagage en suspension",
                "Diagnostic de dangerosité d'un arbre (méthode VTA)"
            ],
            "human": [
                "Sang-froid absolu et maîtrise du vertige",
                "Forme physique et souplesse comparables à un athlète d'escalade",
                "Vigilance sans faille pour la sécurité de l'homme de pied",
                "Esprit de solidarité en binôme"
            ],
            "tools": [
                "Cordes d'élagage homologuées et harnais cuissard complet",
                "Tronçonneuses d'élagage 1 main légères et scies japonaises",
                "Griffes de démontage pour abattage sans avenir",
                "Broyeurs de végétaux lourds montés sur remorque"
            ],
            "analytical": [
                "Estimation du poids des billes avant coupe",
                "Calcul des forces de choc sur le point d'ancrage en cas de chute"
            ]
        },
        "specializations": [
            "Taille architecturée et raisonnée des arbres d'ornement",
            "Démontage complexe d'arbres dangereux par rétention",
            "Haubanage dynamique de branches maîtresses",
            "Diagnostic phytosanitaire d'arbres remarquables"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "CAP / Bac Pro",
                    "title": "Bac Pro Aménagements Paysagers ou Forêt",
                    "desc": "Apprentissage des bases du travail du végétal et de la tronçonneuse."
                },
                {
                    "step": "Certificat Spécialisé",
                    "title": "Certificat de Spécialisation (CS) Arboriste-Grimpeur",
                    "desc": "Formation obligatoire d'un an pour apprendre la grimpe, la sécurité et la physiologie de l'arbre."
                }
            ],
            "schools": [
                {
                    "name": "Centres de formation spécialisés en élagage (Saint-Germain-en-Laye, Châteaudun, Romanèche) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Écoles professionnelles d'arboriculture et espaces verts (Sénégal)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "CS Arboriste-Grimpeur (diplôme d'État)",
                "Certificat SST (Sauveteur Secouriste du Travail option Grimpeur)"
            ],
            "schoolSubjects": [
                "Biologie de l'arbre",
                "Techniques de grimpe",
                "Mécanique des tronçonneuses",
                "Sécurité du travail en hauteur"
            ]
        },
        "career": {
            "sectors": [
                "Entreprises spécialisées d'élagage et soins aux arbres",
                "Grandes entreprises du paysage",
                "Services espaces verts des métropoles",
                "Compagnies d'infrastructures électriques et ferroviaires (SNCF, Enedis, Senelec)"
            ],
            "employerTypes": [
                "PME artisanales d'élagage",
                "Entreprises de travaux publics d'élagage linéaire",
                "Collectivités locales"
            ],
            "evolution": "Homme de pied (assistant au sol) ➔ Élagueur-grimpeur autonome ➔ Chef d'équipe d'élagage ➔ Diagnosticien arboricole / Créateur d'entreprise spécialisée",
            "pros": "Sensations fortes exaltantes au sommet des arbres, communion unique avec les géants végétaux, excellente rémunération pour les professionnels habiles.",
            "cons": "Métier à haut risque physique où la moindre faute d'inattention peut être fatale, usure corporelle prématurée nécessitant une reconversion vers 40-45 ans."
        },
        "gettingStarted": {
            "beginnerProject": "S'entraîner aux nœuds essentiels d'élagage (nœud de chaise, prusik, cabestan, demi-cabestan) à la maison.",
            "intermediateProject": "Participer comme homme de pied à un chantier d'élagage pour apprendre à guider les cordes de rétention.",
            "advancedProject": "Réaliser l'évaluation sanitaire complète d'un vieux chêne en identifiant les cavités, fissures et champignons lignivores.",
            "portfolioIdeas": [
                "Dossier photographique de taille douce respectueuse",
                "Fiche de sécurité de chantier d'abattage par rétention"
            ]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "Aucun robot ne peut se balancer sur une branche à 25 mètres du sol pour exécuter une coupe chirurgicale : le geste reste purement humain.",
            "automatedTasks": [
                "Diagnostic acoustique par tomographe à ultrasons",
                "Repérage des arbres dangereux le long des voies ferrées par drone"
            ],
            "emergingSkills": [
                "Échographie interne du tronc pour déceler les cavités invisibles",
                "Utilisation de tronçonneuses d'élagage à batterie haute puissance"
            ],
            "humanEdge": "L'agilité physique, le courage et le ressenti immédiat de l'équilibre au milieu des branches agitées par le vent."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'élagage des grands arbres urbains (fromagers, manguiers géants, eucalyptus, rôniers) est vital avant la saison des pluies (hivernage) pour éviter que les tornades de vent ne fassent chuter des branches sur les toitures ou les câbles électriques de la Senelec.",
            "localSectors": [
                "Services techniques des villes de Dakar, Rufisque et Saint-Louis",
                "Sous-traitants de débroussaillage et élagage de la Senelec",
                "Entretien de domaines privés et résidences diplomatiques"
            ],
            "remoteWork": "Totalement exclu, 100% dans la canopée.",
            "entrepreneurship": "Création d'une entreprise d'élagage professionnel sécurisé avec matériel normé européen pour moderniser le secteur encore informel en Afrique de l'Ouest."
        },
        "relatedJobSlugs": [
            "jardinier-paysagiste",
            "technicien-forestier",
            "ingenieur-forestier",
            "pepinieriste"
        ],
        "connectedFamilies": [
            "artisanat-metiers-art",
            "securite-defense",
            "environnement-climat"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Métier Élagueur Studyrama",
                "url": "https://www.studyrama.com/formations/fiches-metiers/agriculture/elagueur-91758",
                "source": "Studyrama"
            }
        ],
        "sources": [
            "Studyrama",
            "Société Française d'Arboriculture (SFA)"
        ],
        "interests": [
            "construire-fabriquer",
            "nature-environnement"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon Studyrama et la SFA, les entreprises d'élagage manquent cruellement de grimpeurs certifiés CS Arboriste-Grimpeur et proposent des embauches immédiates à des salaires très attractifs.",
            "pourquoi": "L'exigence physique et la dangerosité du métier imposent une formation d'élite que peu de candidats ont le courage de suivre.",
            "a_retenir": "Un métier d'adrénaline et de passion pour amoureux de nature intrépides qui veulent vivre au plus près de la cime des arbres."
        },
        "salaryRanges": {
            "france": {
                "raw": "2 000 - 3 200 € net/mois selon technicité et risques pris (Source : Studyrama / Fiches Élagage)",
                "range": "2 000 - 3 200 € net/mois selon technicité et risques pris (Source : Studyrama / Fiches Élagage)",
                "source": "APECITA / Marché agro-maritime"
            },
            "senegal": {
                "raw": "250 000 - 950 000 FCFA / mois (Source : Entreprises d'espaces verts, Senelec)",
                "range": "250 000 - 950 000 FCFA / mois (Source : Entreprises d'espaces verts, Senelec)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "ingenieur-agroalimentaire",
        "slug": "ingenieur-agroalimentaire",
        "title": "Ingénieur Agroalimentaire / R&D Alimentaire",
        "aliases": [
            "Ingénieur de production agroalimentaire",
            "Ingénieur R&D food",
            "Responsable process agroalimentaire"
        ],
        "icon": "🍲",
        "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Agroalimentaire, Transformation & Qualité Sanitaire",
        "domainId": "agroalimentaire-transformation-qualite",
        "subdomain": "R&D & procédés agroalimentaires",
        "sourceOnisep": true,
        "sourceStudyrama": true,
        "isEmerging": false,
        "level": "Bac +5 (Diplôme d'Ingénieur en Agroalimentaire ou Master Génie des Procédés Alimentaires)",
        "salary": "🇫🇷 France : 2 900 - 3 600 € brut/mois débutant (~34 800 - 43 200 €/an, Source : Onisep / APEC) • 🇸🇳 Sénégal : 500 000 - 1 600 000 FCFA / mois (Source : Agro-industries de Dakar, Thiès, Saint-Louis)",
        "simpleDefinition": "L'ingénieur agroalimentaire conçoit de nouveaux produits alimentaires (recettes, textures, conservation saine) et optimise les lignes industrielles qui transforment les matières premières agricoles en aliments prêts à consommer.",
        "shortDescription": "Fiche documentée par Onisep et Studyrama, ce chef d'orchestre de nos assiettes réconcilie plaisir gustatif, nutrition saine, sécurité bactériologique et rentabilité industrielle.",
        "longDescription": "L'industrie agroalimentaire est le premier secteur industriel en nombre d'emplois en France. L'ingénieur agroalimentaire peut exercer en R&D (formuler un yaourt végétal innovant, réduire le sucre et le sel sans altérer le goût), en production (piloter une unité de pasteurisation ou de mise en boîte automatisée) ou en qualité. Il maîtrise la biochimie des aliments, le génie des procédés thermiques (stérilisation, atomisation, surgélation) et les exigences strictes d'hygiène.",
        "mainObjective": "Transformer des matières premières agricoles en aliments sains, savoureux, stables dans le temps et accessibles au plus grand nombre.",
        "companyRole": "Pilote de l'innovation produit et garant de la performance industrielle des usines alimentaires.",
        "workEnvironment": [
            "🏭 Lignes de production automatisées en environnement stérile (blouses, charlottes)",
            "🔬 Laboratoires R&D et cuisines expérimentales de formulation",
            "📊 Bureaux d'études pour l'analyse des coûts de revient et bilans matière"
        ],
        "missions": [
            "Concevoir de nouvelles recettes alimentaires en optimisant profils nutritionnels et coûts",
            "Dimensionner et paramétrer les équipements industriels de cuisson, mélange, pasteurisation et conditionnement",
            "Mener des tests de vieillissement pour déterminer la Date Limite de Consommation (DLC)",
            "Organiser des panels d'évaluation sensorielle pour tester l'appétence des produits auprès des consommateurs",
            "Superviser les équipes de conducteurs de ligne et veiller au respect des cadences de production"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Point quotidien sur les lignes de fabrication",
                "desc": "Revue des rendements matière de la nuit et analyse d'un écart de viscosité sur la ligne de sauces."
            },
            {
                "time": "10:30",
                "title": "Atelier de formulation en laboratoire R&D",
                "desc": "Essais d'incorporation de farine de légumineuses locales pour enrichir en protéines une nouvelle gamme de biscuits."
            },
            {
                "time": "14:00",
                "title": "Séance d'analyse sensorielle à l'aveugle",
                "desc": "Animation d'un panel de 12 dégustateurs pour évaluer le croquant et la sucrosité de 4 prototypes."
            },
            {
                "time": "16:30",
                "title": "Optimisation des temps de nettoyage en place (NEP)",
                "desc": "Ajustement du protocole de désinfection automatisée pour réduire la consommation d'eau de l'usine."
            }
        ],
        "skills": {
            "technical": [
                "Biochimie alimentaire et microbiologie industrielle",
                "Génie des procédés alimentaires (transferts thermiques, séparation membranaire)",
                "Formulation et additifs alimentaires naturels",
                "Réglementation européenne de sécurité alimentaire et étiquetage INCO",
                "Lean manufacturing appliqué à l'agroalimentaire"
            ],
            "human": [
                "Créativité culinaire doublée d'une rigueur scientifique sans faille",
                "Sens du leadership et management d'équipes d'opérateurs",
                "Capacité à résoudre rapidement des crises de production",
                "Excellente communication transversale"
            ],
            "tools": [
                "Bioréacteurs et autoclaves pilotes de laboratoire",
                "Texturemètres et viscosimètres de précision",
                "Logiciels de formulation alimentaire (GeniFood)",
                "Supervision industrielle SCADA d'usine agroalimentaire"
            ],
            "analytical": [
                "Calcul des bilans matière et rendements de transformation",
                "Analyses statistiques de cinétiques bactériennes"
            ]
        },
        "specializations": [
            "Recherche & Développement (R&D) et innovation produits",
            "Direction d'usine et gestion de production industrielle",
            "Génie des emballages durables et éco-conception",
            "Ingénierie des boissons et liquides alimentaires"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Bac +2",
                    "title": "Prépa BCPST ou BTS Bioqualité / BUT Génie Biologique",
                    "desc": "Sciences fondamentales de la vie et biochimie."
                },
                {
                    "step": "Bac +5",
                    "title": "Diplôme d'Ingénieur en Agroalimentaire",
                    "desc": "Grandes écoles d'ingénieurs spécialisées (AgroParisTech, Oniris Nantes, Agrosup Dijon, ENSAIA)."
                }
            ],
            "schools": [
                {
                    "name": "Oniris Nantes (École Nationale Vétérinaire, Agroalimentaire et de l'Alimentation) — France",
                    "country": "France",
                    "scope": "International"
                },
                {
                    "name": "AgroParisTech / L'Institut Agro Dijon — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar - Département Génie Chimique et Biologie Appliquée) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification Black Belt Lean Six Sigma en agroalimentaire",
                "Auditeur FSSC 22000"
            ],
            "schoolSubjects": [
                "Microbiologie",
                "Chimie des aliments",
                "Génie des procédés",
                "Management de production"
            ]
        },
        "career": {
            "sectors": [
                "Grandes multinationales de l'alimentation (Danone, Nestlé, Bonduelle)",
                "Coopératives agroalimentaires (Sodiaal, Agrial, Terrena)",
                "PME innovantes et startups de la FoodTech",
                "Instituts techniques agroalimentaires (ACTIA, CTCPA)"
            ],
            "employerTypes": [
                "Industries agroalimentaires privées",
                "Groupes coopératifs de transformation",
                "Bureaux d'études de formulation"
            ],
            "evolution": "Ingénieur R&D junior ➔ Chef de projet innovation ➔ Responsable de production d'usine ➔ Directeur d'usine agroalimentaire",
            "pros": "Secteur solide et non délocalisable car manger est un besoin vital, produits finis concrets visibles en rayons de supermarché, carrières internationales riches.",
            "cons": "Contraintes d'hygiène strictes et audits fréquents, pression sur les coûts de revient dans la grande distribution, travail parfois en environnement réfrigéré."
        },
        "gettingStarted": {
            "beginnerProject": "Relever les étiquettes de 10 produits ultra-transformés et identifier les substituts naturels pour éliminer les émulsifiants de synthèse.",
            "intermediateProject": "Mettre au point une recette maison de pâte à tartiner sans huile de palme et mesurer sa stabilité à la séparation d'huile sur 30 jours.",
            "advancedProject": "Calculer le barème de stérilisation (valeur stérilisatrice F0) nécessaire pour détruire les spores de Clostridium botulinum dans une conserve de légumes.",
            "portfolioIdeas": [
                "Dossier de conception d'un nouvel aliment complet",
                "Schéma de process industriel d'une laiterie automatisée"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA générative prédit les combinaisons moléculaires d'ingrédients pour reproduire des arômes naturels et optimise la maintenance prédictive des lignes de mise en bouteille.",
            "automatedTasks": [
                "Optimisation des plannings de production selon les prévisions de vente",
                "Inspection par caméras IA de la conformité visuelle des packagings"
            ],
            "emergingSkills": [
                "Formulation assistée par intelligence artificielle",
                "Développement d'aliments à base de protéines alternatives (algues, insectes, précision fermentaire)"
            ],
            "humanEdge": "La créativité du chef cuisinier et le jugement émotionnel du plaisir en bouche."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la transformation locale des fruits et céréales (mangues séchées, jus de bissap et bouye, couscous de mil précuit thiakry, concentré de tomate de la vallée) est le levier numéro un de création d'emplois industriels, soutenu par l'Institut de Technologie Alimentaire (ITA).",
            "localSectors": [
                "Institut de Technologie Alimentaire (ITA Dakar)",
                "Pôle agroalimentaire de Dakar et Rufisque (Patisen, Grands Moulins de Dakar, Kirène)",
                "Unités de transformation de fruits de Casamance et Thiès"
            ],
            "remoteWork": "Possibilité partielle pour la R&D théorique, présence d'usine indispensable en production.",
            "entrepreneurship": "Création d'une marque agro-industrielle commercialisant des farines infantiles enrichies à base de produits locaux sénégalais."
        },
        "relatedJobSlugs": [
            "responsable-qualite-haccp-agri",
            "conducteur-ligne-agroalimentaire",
            "ingenieur-agronome",
            "oenologue"
        ],
        "connectedFamilies": [
            "industrie-ingenierie",
            "sante-biomedical",
            "chimie-biologie"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Ingénieur Agroalimentaire Onisep",
                "url": "https://www.onisep.fr/ressources/univers-metier/metiers/ingenieur-ingenieure-en-agroalimentaire",
                "source": "Onisep"
            }
        ],
        "sources": [
            "Onisep",
            "Studyrama",
            "ANIA (Association Nationale des Industries Alimentaires)",
            "ITA Dakar"
        ],
        "interests": [
            "resoudre-problemes",
            "construire-fabriquer"
        ],
        "saviezVous": {
            "statut": "metier_stable",
            "fait": "Selon l'Onisep et l'ANIA, l'agroalimentaire est le premier employeur industriel de France avec plus de 450 000 salariés et 17 000 entreprises réparties dans tous les territoires.",
            "pourquoi": "L'industrie agroalimentaire transforme 70% de la production agricole nationale, servant de pont indispensable entre le champ du paysan et la table du citoyen.",
            "a_retenir": "Un profil d'ingénieur indispensable et résilient qui invente les aliments savoureux et sains de demain."
        },
        "salaryRanges": {
            "france": {
                "raw": "2 900 - 3 600 € brut/mois débutant (~34 800 - 43 200 €/an, Source : Onisep / APEC)",
                "range": "2 900 - 3 600 € brut/mois débutant (~34 800 - 43 200 €/an, Source : Onisep / APEC)",
                "source": "Onisep / Studyrama"
            },
            "senegal": {
                "raw": "500 000 - 1 600 000 FCFA / mois (Source : Agro-industries de Dakar, Thiès, Saint-Louis)",
                "range": "500 000 - 1 600 000 FCFA / mois (Source : Agro-industries de Dakar, Thiès, Saint-Louis)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "responsable-qualite-haccp-agri",
        "slug": "responsable-qualite-haccp-agri",
        "title": "Responsable Qualité & Sécurité Alimentaire (HACCP) / Auditeur QHSE",
        "aliases": [
            "Responsable QHSE agroalimentaire",
            "Auditeur qualité agroalimentaire",
            "Chef de service contrôle qualité"
        ],
        "icon": "🛡️",
        "image": "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Agroalimentaire, Transformation & Qualité Sanitaire",
        "domainId": "agroalimentaire-transformation-qualite",
        "subdomain": "Qualité, hygiène & sécurité sanitaire",
        "sourceOnisep": true,
        "sourceStudyrama": true,
        "isEmerging": false,
        "level": "Bac +3 (Licence Pro Qualité) à Bac +5 (Master / Ingénieur Qualité Agroalimentaire)",
        "salary": "🇫🇷 France : 2 600 - 3 400 € brut/mois débutant (~31 200 - 40 800 €/an, Source : Onisep / Studyrama) • 🇸🇳 Sénégal : 350 000 - 1 200 000 FCFA / mois (Source : Industries agroalimentaires, laboratoires d'analyses)",
        "simpleDefinition": "Le responsable qualité veille à ce que chaque aliment produit en usine ou en coopérative soit rigoureusement conforme aux normes d'hygiène, sans aucun risque de contamination bactériologique ou chimique pour le consommateur.",
        "shortDescription": "Fiche documentée par Onisep et Studyrama, ce bouclier sanitaire pilote la méthode HACCP, traque les bactéries indésirables et décroche les certifications internationales (IFS, BRC, ISO 22000).",
        "longDescription": "Dans une usine agroalimentaire, la moindre contamination par une salmonelle ou une listeria peut coûter la vie à un client et ruiner l'entreprise. Le responsable qualité déploie le Plan de Maîtrise Sanitaire (PMS). Il identifie les Points Critiques pour leur Maîtrise (CCP), organise les prélèvements d'échantillons sur ligne, gère la traçabilité intégrale du lot agricole jusqu'au supermarché et forme le personnel au port irréprochable des tenues et au lavage des mains.",
        "mainObjective": "Garantir le risque zéro en matière de sécurité sanitaire des aliments et maintenir la certification qualité de l'entreprise.",
        "companyRole": "Garant légal de la salubrité publique, auditeur interne intransigeant et protecteur de la marque.",
        "workEnvironment": [
            "🔬 Laboratoire de contrôle microbiologique et physico-chimique de l'usine",
            "🏭 Inspection quotidienne des ateliers de production et zones de stockage",
            "📋 Audits officiels des services vétérinaires d'État (DDPP) et distributeurs"
        ],
        "missions": [
            "Actualiser l'analyse des dangers et la gestion des CCP selon les principes HACCP",
            "Mettre en place et superviser le plan de contrôle microbiologique (recherche de listeria, salmonelles, coliformes)",
            "Gérer les alertes qualité, bloquer les lots non conformes et piloter les procédures de retrait-rappel",
            "Préparer et réussir les audits de certification internationale (IFS Food, BRC, ISO 22000, FSSC)",
            "Auditer les fournisseurs agricoles sur le respect des cahiers des charges (résidus de pesticides, absence de corps étrangers)"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Tournée d'hygiène pré-opérationnelle en usine",
                "desc": "Contrôle à l'écouvillon de la propreté bactériologique des tapis de convoyage avant le démarrage des machines."
            },
            {
                "time": "10:00",
                "title": "Lecture des boîtes de Pétri au laboratoire",
                "desc": "Comptage des colonies bactériennes sur les échantillons de produits finis du lot de la veille."
            },
            {
                "time": "14:00",
                "title": "Exercice inopiné de traçabilité montante et descendante",
                "desc": "Chronos en main : retrouver l'origine de tous les ingrédients d'un paquet de gâteaux en moins de deux heures."
            },
            {
                "time": "16:30",
                "title": "Formation hygiène des nouveaux opérateurs de production",
                "desc": "Sensibilisation aux gestes de prévention des contaminations croisées et nettoyage des mains."
            }
        ],
        "skills": {
            "technical": [
                "Méthodologie HACCP approfondie (Codex Alimentarius)",
                "Microbiologie alimentaire et parasitologie",
                "Référentiels qualité de la grande distribution (IFS Food v8, BRCGS, ISO 22000)",
                "Réglementation 'Paquet Hygiène' européenne",
                "Techniques d'audit qualité interne et externe"
            ],
            "human": [
                "Rigueur absolue et intransigeance bienveillante",
                "Pédagogie et sens de la persuasion avec les équipes de production",
                "Résistance à la pression lors d'un audit de certification",
                "Sens de l'analyse méthodique"
            ],
            "tools": [
                "Écouvillons de prélèvement de surface et luminomètres ATP",
                "Boîtes de Pétri et étuves bactériologiques",
                "Logiciels de traçabilité et gestion de documents qualité (GED)",
                "Sondes de température thermocouple étalonnées"
            ],
            "analytical": [
                "Analyses de causes racines (méthodes 5 Pourquoi, diagramme d'Ishikawa)",
                "Interprétation des cartes de contrôle statistiques SPC"
            ]
        },
        "specializations": [
            "Audits de certification internationale (IFS, BRC)",
            "Sécurité microbiologique en filière produits carnés ou laitiers",
            "Gestion des allergènes et certifications spécifiques (Bio, Halal, Kasher)",
            "Affaires réglementaires et étiquetage nutritionnel"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Bac +2",
                    "title": "BTS Bioqualité ou BUT Génie Biologique option Qualité",
                    "desc": "Bases en microbiologie pratique et contrôle qualité."
                },
                {
                    "step": "Bac +3",
                    "title": "Licence Pro Sécurité des Aliments et Assurance Qualité",
                    "desc": "Maîtrise opérationnelle des audits HACCP en usine."
                },
                {
                    "step": "Bac +5",
                    "title": "Master Qualité et Sécurité Sanitaire des Aliments ou Ingénieur Agronome/Agroalimentaire",
                    "desc": "Direction de services qualité et gestion des crises sanitaires."
                }
            ],
            "schools": [
                {
                    "name": "Universités proposant les Masters QHSE Agroalimentaire (Bordeaux, Montpellier, Lille) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut Agro / Oniris — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut de Technologie Alimentaire (ITA Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certificat d'Auditeur Interne IFS Food / ISO 22000",
                "Formation certifiée HACCP niveau expert"
            ],
            "schoolSubjects": [
                "Microbiologie",
                "Droit agroalimentaire",
                "Statistiques",
                "Management de la qualité"
            ]
        },
        "career": {
            "sectors": [
                "Industries de transformation de viandes, lait, fruits et légumes",
                "Grandes coopératives agricoles et abattoirs",
                "Organismes d'audit et de certification (Bureau Veritas, SGS)",
                "Laboratoires privés d'analyses agroalimentaires (Eurofins)"
            ],
            "employerTypes": [
                "Usines agroalimentaires",
                "Sociétés d'audit international",
                "Centrales d'achat de la grande distribution"
            ],
            "evolution": "Technicien contrôle qualité ➔ Responsable qualité usine ➔ Directeur qualité groupe multi-sites ➔ Auditeur tierce partie pour un organisme certificateur",
            "pros": "Poste à très haute responsabilité morale protégeant la vie des citoyens, compétences universelles applicables dans toute usine du monde, forte écoute de la direction.",
            "cons": "Responsabilité stressante lors d'un litige sanitaire, nécessité fréquente de s'opposer à la production pour bloquer un lot non conforme."
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser l'arbre de décision HACCP pour déterminer les CCP d'une recette simple de mayonnaise maison.",
            "intermediateProject": "Rédiger une fiche de procédure complète de gestion des corps étrangers métalliques pour une ligne d'emballage.",
            "advancedProject": "Construire le plan de maîtrise sanitaire complet d'un atelier artisanal de transformation de fruits en confitures.",
            "portfolioIdeas": [
                "Tableau d'analyse des dangers HACCP",
                "Rapport d'audit à blanc selon le référentiel IFS Food"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'IA surveille en temps réel les dérives de température des chambres froides et accélère la détection d'ADN bactérien sur séquenceurs portatifs.",
            "automatedTasks": [
                "Archivage et vérification automatique des relevés de température IoT",
                "Traduction instantanée des rapports d'audits internationaux"
            ],
            "emergingSkills": [
                "Gestion de la traçabilité par technologie Blockchain alimentaire",
                "Analyse prédictive des risques d'altération microbienne"
            ],
            "humanEdge": "Le discernement éthique et le courage d'ordonner le blocage d'une production valant des dizaines de milliers d'euros en cas de doute sanitaire."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la conformité aux normes internationales de qualité (HACCP, Codex Alimentarius) est la condition sine qua non pour que les entreprises locales puissent exporter mangues fraîches, haricots verts ou poisson vers l'Europe.",
            "localSectors": [
                "Association Sénégalaise de Normalisation (ASN)",
                "Entreprises d'exportation de produits horticoles des Niayes",
                "Industries de la pêche et usines de conditionnement de thon de Dakar"
            ],
            "remoteWork": "Gestion documentaire possible en télétravail partiel, présence terrain obligatoire pour les contrôles.",
            "entrepreneurship": "Création d'un cabinet de conseil et formation HACCP accompagnant les PME et coopératives agricoles féminines à l'obtention des normes d'exportation."
        },
        "relatedJobSlugs": [
            "ingenieur-agroalimentaire",
            "conducteur-ligne-agroalimentaire",
            "halieute",
            "conseiller-gestion-agricole"
        ],
        "connectedFamilies": [
            "sante-biomedical",
            "conseil-audit",
            "droit-justice"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Responsable Qualité Onisep",
                "url": "https://www.onisep.fr/ressources/univers-metier/metiers/responsable-qualite-en-agroalimentaire",
                "source": "Onisep"
            }
        ],
        "sources": [
            "Onisep",
            "Studyrama",
            "DGAL (Direction Générale de l'Alimentation)",
            "ASN"
        ],
        "interests": [
            "resoudre-problemes",
            "nature-environnement"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon l'Onisep, la méthode HACCP a été inventée dans les années 1960 par la NASA et l'armée américaine pour garantir la sécurité absolue de la nourriture des astronautes dans l'espace.",
            "pourquoi": "Dans l'espace, une simple intoxication alimentaire pouvait condamner toute une mission Apollo : cette méthode infaillible est aujourd'hui la règle obligatoire pour toute usine agroalimentaire mondiale.",
            "a_retenir": "Le garant inflexible de la pureté de ce que nous mangeons chaque jour."
        },
        "salaryRanges": {
            "france": {
                "raw": "2 600 - 3 400 € brut/mois débutant (~31 200 - 40 800 €/an, Source : Onisep / Studyrama)",
                "range": "2 600 - 3 400 € brut/mois débutant (~31 200 - 40 800 €/an, Source : Onisep / Studyrama)",
                "source": "Onisep / Studyrama"
            },
            "senegal": {
                "raw": "350 000 - 1 200 000 FCFA / mois (Source : Industries agroalimentaires, laboratoires d'analyses)",
                "range": "350 000 - 1 200 000 FCFA / mois (Source : Industries agroalimentaires, laboratoires d'analyses)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "conducteur-ligne-agroalimentaire",
        "slug": "conducteur-ligne-agroalimentaire",
        "title": "Conducteur de Ligne en Agroalimentaire / Pilote d'Installation",
        "aliases": [
            "Conductrice de ligne de fabrication",
            "Pilote de ligne automatisée",
            "Opérateur de conditionnement agroalimentaire"
        ],
        "icon": "🏭",
        "image": "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Agroalimentaire, Transformation & Qualité Sanitaire",
        "domainId": "agroalimentaire-transformation-qualite",
        "subdomain": "Production & conditionnement industriel",
        "sourceOnisep": true,
        "sourceStudyrama": true,
        "isEmerging": false,
        "level": "CAP / Bac Pro Pilote de Ligne de Production ou CQP Agroalimentaire",
        "salary": "🇫🇷 France : 1 800 - 2 400 € brut/mois + primes de panier/équipes postées (~21 600 - 28 800 €/an, Source : Onisep / Studyrama) • 🇸🇳 Sénégal : 180 000 - 600 000 FCFA / mois (Source : Usines agro-industrielles)",
        "simpleDefinition": "Le conducteur de ligne pilote un ensemble de machines automatisées qui transforment, cuisent ou emballent des produits alimentaires, en veillant aux cadences, aux réglages et à l'hygiène stricte.",
        "shortDescription": "Fiche documentée par Onisep et Studyrama, c'est le cœur battant des usines alimentaires qui assure que des milliers de yaourts, conserves ou paquets de céréales sortent parfaitement emballés chaque heure.",
        "longDescription": "À la tête d'une ligne de fabrication ou de conditionnement automatisée de plusieurs dizaines de mètres de long, le conducteur de ligne alimente les machines en matières premières et emballages, règle les paramètres de vitesse et de température sur écran tactile, surveille le débit et intervient immédiatement en cas de bourrage. Il contrôle régulièrement la conformité du poids, de l'étiquetage et de la soudure étanche des sachets.",
        "mainObjective": "Produire en continu des aliments de qualité irréprochable en respectant les cadences prévues et les règles strictes d'hygiène.",
        "companyRole": "Pilier opérationnel de l'usine, garant de la régularité et de la cadence de sortie des produits finis.",
        "workEnvironment": [
            "🏭 Ateliers industriels modernes et climatisés",
            "🥼 Tenue stérile obligatoire (charlotte, masque, blouse blanche, chaussures de sécurité)",
            "⏰ Travail en équipes postées (2x8 ou 3x8 : matin, après-midi ou nuit)"
        ],
        "missions": [
            "Effectuer les réglages et changements de formats sur les machines (ensacheuses, étiqueteuses, fardeleuses)",
            "Approvisionner la ligne en matières consommables (films plastiques, barquettes, bouchons)",
            "Surveiller les paramètres de fonctionnement sur le pupitre de commande et ajuster les vitesses",
            "Réaliser les contrôles qualité en cours de production (étanchéité sous cloche à vide, détecteur de métaux)",
            "Effectuer la maintenance de premier niveau (remplacement de ventouses, débourrage, graissage)"
        ],
        "typicalDay": [
            {
                "time": "05:00",
                "title": "Passation de consigne avec l'équipe de nuit",
                "desc": "Revue des cadences atteintes et des arrêts de ligne survenus pendant la nuit."
            },
            {
                "time": "06:00",
                "title": "Démarrage de la ligne après nettoyage",
                "desc": "Montée en température des mâchoires de scellage et test de passage des témoins ferreux dans le détecteur de métaux."
            },
            {
                "time": "09:30",
                "title": "Changement de format de barquettes",
                "desc": "Changement des guides et réglage de la peseuse associative pour passer de barquettes de 250 g à 500 g."
            },
            {
                "time": "12:30",
                "title": "Fin de poste et enregistrement informatique",
                "desc": "Saisie des volumes produits et des rebuts sur le logiciel MES avant l'arrivée de l'équipe d'après-midi."
            }
        ],
        "skills": {
            "technical": [
                "Conduite de lignes industrielles automatisées",
                "Mécanique et pneumatique de premier niveau",
                "Bonnes Pratiques d'Hygiène (BPH) agroalimentaires",
                "Contrôles qualité normés (détection métaux, étanchéité)",
                "Utilisation des interfaces homme-machine (écrans tactiles industriels)"
            ],
            "human": [
                "Réactivité et sang-froid en cas d'incident machine",
                "Vigilance continue et sens du détail",
                "Goût pour le travail en équipe",
                "Régularité et endurance au rythme des cadences"
            ],
            "tools": [
                "Peseuses associatives et ensacheuses verticales",
                "Encartonneuses et robots palettiseurs",
                "Bacs de contrôle d'étanchéité sous vide",
                "Outillage manuel de maintenance d'atelier"
            ],
            "analytical": [
                "Calcul du Taux de Rendement Synthétique (TRS)",
                "Analyse des causes des micro-arrêts de ligne"
            ]
        },
        "specializations": [
            "Lignes de fabrication et transformation (cuisson, extrusion)",
            "Lignes de conditionnement et emballage haute cadence",
            "Lignes de mise en bouteille et embouteillage liquide",
            "Lignes de surgélation et produits ultra-frais"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "CAP / CQP",
                    "title": "CAP Conducteur d'Installations de Production ou CQP Conducteur de Ligne Agroalimentaire",
                    "desc": "Formation rapide axée sur la pratique en atelier."
                },
                {
                    "step": "Bac Pro",
                    "title": "Bac Pro Pilote de Ligne de Production (PLP) ou BIT (Bio-Industries de Transformation)",
                    "desc": "Diplôme idéal pour une embauche rapide et une progression de carrière."
                },
                {
                    "step": "Bac +2",
                    "title": "BTS Pilotage de Procédés",
                    "desc": "Pour évoluer rapidement vers des postes de chef d'équipe."
                }
            ],
            "schools": [
                {
                    "name": "Lycées professionnels industriels et CFA de l'agroalimentaire (IFRIA) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centres de formation professionnelle industrielle (Sénégal)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "CACES cariste catégorie 1A et 3 (manutention palettes)",
                "Habilitation électrique non électricien (B0/H0)"
            ],
            "schoolSubjects": [
                "Technologie des automatismes",
                "Hygiène agroalimentaire",
                "Maintenance industrielle",
                "Qualité"
            ]
        },
        "career": {
            "sectors": [
                "Laiteries et fromageries industrielles",
                "Biscuiteries, chocolateries et confiseries",
                "Conserveries et plats cuisinés",
                "Grandes brasseries et embouteilleurs d'eaux et sodas"
            ],
            "employerTypes": [
                "Usines agroalimentaires de toutes tailles",
                "Coopératives de transformation",
                "Grands groupes internationaux"
            ],
            "evolution": "Opérateur de ligne ➔ Conducteur de ligne confirmé ➔ Chef d'équipe de production ➔ Adjoint au responsable de fabrication",
            "pros": "Embauche garantie partout en France et à l'international, environnement de travail moderne et hautement automatisé, primes d'équipe substantielles.",
            "cons": "Horaires décalés (travail en 3x8 ou week-end), bruit de fond des machines nécessitant le port de bouchons d'oreilles, gestes répétitifs."
        },
        "gettingStarted": {
            "beginnerProject": "Effectuer une visite virtuelle d'une ligne d'embouteillage moderne pour comprendre le fonctionnement d'une soutireuse et d'une étiqueteuse.",
            "intermediateProject": "Apprendre à identifier les 6 grandes causes de pertes de rendement selon la méthode TPM (Total Productive Maintenance).",
            "advancedProject": "Réaliser un changement de format complet sur une machine d'emballage en appliquant les principes de la méthode SMED pour diviser le temps par deux.",
            "portfolioIdeas": [
                "Schéma synoptique d'une ligne de conditionnement",
                "Fiche de relevé TRS commentée"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des robots de vision automatisés éjectent d'eux-mêmes les emballages défectueux, laissant au conducteur le rôle de supervision stratégique.",
            "automatedTasks": [
                "Palettisation robotisée entièrement autonome",
                "Contrôle automatique du poids par bascule dynamique intégrée"
            ],
            "emergingSkills": [
                "Supervision de cobots (robots collaboratifs)",
                "Utilisation d'interfaces tactiles d'usine 4.0"
            ],
            "humanEdge": "La rapidité de réaction pour débloquer un sachet coincé et la finesse de réglage mécanique qu'aucun algorithme ne remplace."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'ouverture de nouvelles usines modernes de transformation de farine, bouillon, lait et jus (zone industrielle de Diamniadio et Sandiara) génère une forte demande d'opérateurs et conducteurs de lignes formés aux standards internationaux.",
            "localSectors": [
                "Parc industriel de Diamniadio et Sandiara",
                "Grandes usines alimentaires de Dakar (Patisen, NMA, Kirène)",
                "Unités de transformation de la Compagnie Sucrière Sénégalaise (CSS Richard-Toll)"
            ],
            "remoteWork": "100% sur le site de production.",
            "entrepreneurship": "Création d'une micro-unité semi-automatisée de mise en bouteille de jus locaux pasteurisés."
        },
        "relatedJobSlugs": [
            "ingenieur-agroalimentaire",
            "responsable-qualite-haccp-agri",
            "technicien-maintenance-agroequipement",
            "maitre-de-chai"
        ],
        "connectedFamilies": [
            "industrie-ingenierie",
            "transport-logistique",
            "artisanat-metiers-art"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Métier Conducteur de Ligne Onisep",
                "url": "https://www.onisep.fr/ressources/univers-metier/metiers/conducteur-conductrice-de-ligne-de-production-agroalimentaire",
                "source": "Onisep"
            }
        ],
        "sources": [
            "Onisep",
            "Studyrama",
            "IFRIA"
        ],
        "interests": [
            "construire-fabriquer",
            "resoudre-problemes"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon l'Onisep et l'IFRIA, le poste de conducteur de ligne est le métier le plus recherché de toute l'industrie agroalimentaire avec des dizaines de milliers de postes à pourvoir chaque année.",
            "pourquoi": "L'automatisation croissante des usines a transformé ce métier autrefois pénible en un poste technique valorisant de pilotage d'écrans et de robots.",
            "a_retenir": "Une porte d'entrée royale dans l'industrie pour ceux qui aiment la technologie concrète et le travail d'équipe bien orchestré."
        },
        "salaryRanges": {
            "france": {
                "raw": "1 800 - 2 400 € brut/mois + primes de panier/équipes postées (~21 600 - 28 800 €/an, Source : Onisep / Studyrama)",
                "range": "1 800 - 2 400 € brut/mois + primes de panier/équipes postées (~21 600 - 28 800 €/an, Source : Onisep / Studyrama)",
                "source": "Onisep / Studyrama"
            },
            "senegal": {
                "raw": "180 000 - 600 000 FCFA / mois (Source : Usines agro-industrielles)",
                "range": "180 000 - 600 000 FCFA / mois (Source : Usines agro-industrielles)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "conseiller-gestion-agricole",
        "slug": "conseiller-gestion-agricole",
        "title": "Conseiller d'Entreprise Agricole / Conseiller en Gestion Rurale",
        "aliases": [
            "Conseiller de gestion agricole",
            "Comptable conseil en agriculture",
            "Consultant d'exploitation agricole"
        ],
        "icon": "📊",
        "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Économie, Gestion, Droit & Conseil Rural",
        "domainId": "economie-gestion-conseil-rural",
        "subdomain": "Gestion financière & conseil stratégique",
        "sourceOnisep": false,
        "sourceStudyrama": true,
        "isEmerging": false,
        "level": "Bac +3 (Licence Pro Gestion Agricole) à Bac +5 (Ingénieur Agro / Master Finance Agricole)",
        "salary": "🇫🇷 France : 2 400 - 3 400 € brut/mois débutant (~28 800 - 40 800 €/an, Source : Studyrama / CerFrance) • 🇸🇳 Sénégal : 350 000 - 1 200 000 FCFA / mois (Source : Cabinets de conseil, BNDE, projets agricoles)",
        "simpleDefinition": "Le conseiller de gestion agricole analyse les comptes des agriculteurs, établit leurs bilans prévisionnels et les conseille pour réussir leurs investissements, optimiser leur fiscalité et sécuriser la transmission de leur ferme.",
        "shortDescription": "Fiche documentée par Studyrama, ce copilote économique de l'exploitant agricole traduit les chiffres comptables en décisions stratégiques de terrain.",
        "longDescription": "Une exploitation agricole moderne est une PME de plusieurs centaines de milliers d'euros de chiffre d'affaires, soumise aux fluctuations brutales des cours mondiaux des céréales ou du lait. Travaillant souvent au sein d'un centre de gestion agréé (comme CerFrance), le conseiller calcule les coûts de revient à l'hectare ou au litre, monte les dossiers de subventions européennes (PAC) et guide le paysan lors d'investissements majeurs (achat d'un robot de traite ou agrandissement foncier).",
        "mainObjective": "Assurer la rentabilité économique pérenne et la sécurité financière des exploitations agricoles.",
        "companyRole": "Conseiller de confiance, copilote financier et stratège d'entreprise de l'agriculteur.",
        "workEnvironment": [
            "🚗 Visites régulières dans les exploitations agricoles (autour de la table de cuisine)",
            "🏢 Agences de centres de gestion (CerFrance) et chambres d'agriculture",
            "💻 Tableurs financiers et logiciels d'analyse de marges agricoles"
        ],
        "missions": [
            "Établir le bilan annuel et analyser les marges brutes de chaque atelier de production de la ferme",
            "Élaborer des plans de développement économique prévisionnels pour l'installation de jeunes agriculteurs (DJA)",
            "Chiffrer la rentabilité et le plan de financement lors de l'achat de terres ou de nouveaux matériels",
            "Conseiller sur l'optimisation fiscale et sociale (statuts GAEC, EARL, SCEA, régime du réel agricole)",
            "Accompagner les fermes en difficulté financière par des plans de restructuration de dettes"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Analyse de bilan en agence",
                "desc": "Étude comparative du coût alimentaire et de la marge brute d'un éleveur laitier par rapport à la moyenne régionale."
            },
            {
                "time": "10:30",
                "title": "Rendez-vous conseil dans une ferme céréalière",
                "desc": "Présentation des résultats annuels à l'exploitant et simulation de l'impact de la hausse du prix des engrais."
            },
            {
                "time": "14:00",
                "title": "Montage d'un dossier d'installation JA",
                "desc": "Rédaction du Plan d'Entreprise (PE) sur 5 ans pour un jeune maraîcher bio sollicitant la dotation jeune agriculteur."
            },
            {
                "time": "16:30",
                "title": "Animation d'un groupe d'échange entre agriculteurs",
                "desc": "Animation d'un atelier sur les stratégies de commercialisation des céréales et l'utilisation des marchés à terme."
            }
        ],
        "skills": {
            "technical": [
                "Comptabilité et fiscalité agricole spécifique",
                "Analyse financière et calcul de marges brutes et nettes",
                "Mécanismes des aides publiques et de la PAC",
                "Droit des structures agricoles (EARL, GAEC, GFA)",
                "Agronomie et zootechnie de base pour comprendre le métier du client"
            ],
            "human": [
                "Grande écoute, empathie et respect du monde paysan",
                "Pédagogie pour expliquer des notions financières complexes avec simplicité",
                "Rigueur d'analyse chiffrée",
                "Sens de la confidentialité absolue"
            ],
            "tools": [
                "Logiciels comptables agricoles spécialisés (Isagri, CerFrance)",
                "Simulateurs fiscaux et d'emprunts bancaires",
                "Outils de modélisation de trésorerie prévisionnelle",
                "Tableurs financiers avancés"
            ],
            "analytical": [
                "Calcul du Prix de Revient Économique (PRE)",
                "Capacité d'autofinancement (CAF) et taux d'endettement"
            ]
        },
        "specializations": [
            "Conseil à l'installation des jeunes agriculteurs (DJA)",
            "Stratégie de diversification (vente directe, agritourisme, méthanisation)",
            "Transmission d'exploitation et départ en retraite",
            "Accompagnement des exploitations en redressement"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Bac +2",
                    "title": "BTSA Analyse, Conduite et Stratégie de l'Entreprise Agricole (ACSE)",
                    "desc": "Formation de référence combinant agronomie et gestion économique."
                },
                {
                    "step": "Bac +3",
                    "title": "Licence Pro Gestion des Entreprises Agricoles ou Conseil Agricole",
                    "desc": "Perfectionnement en fiscalité et conseil stratégique."
                },
                {
                    "step": "Bac +5",
                    "title": "Diplôme d'Ingénieur Agronome spécialité Économie Rurale ou Master Gestion",
                    "desc": "Accès direct aux postes de consultants seniors et directeurs d'agence."
                }
            ],
            "schools": [
                {
                    "name": "Lycées agricoles dispensant le BTS ACSE — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut Agro / UniLaSalle — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut Supérieur de Formation Agricole et Rurale (ISFAR Bambey) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Habilitation de conseil en gestion de patrimoine rural",
                "Agrément de conseiller DJA"
            ],
            "schoolSubjects": [
                "Économie rurale",
                "Comptabilité de gestion",
                "Fiscalité",
                "Agronomie générale"
            ]
        },
        "career": {
            "sectors": [
                "Centres d'économie et de gestion agricole (CerFrance, Cogedis)",
                "Chambres d'agriculture départementales et régionales",
                "Banques spécialisées agricoles (Crédit Agricole, Banque Populaire)",
                "Cabinets d'expertise comptable privés"
            ],
            "employerTypes": [
                "Réseaux mutualistes de conseil comptable",
                "Organismes consulaires",
                "Institutions bancaires et de crédit"
            ],
            "evolution": "Conseiller d'entreprise junior ➔ Conseiller d'entreprise senior spécialisé ➔ Responsable d'agence territoriale ➔ Directeur de pôle conseil économique",
            "pros": "Relations humaines très fortes et reconnaissantes avec les agriculteurs, grande variété des dossiers analysés, stabilité et sécurité de l'emploi.",
            "cons": "Pics de travail très intenses au printemps pendant la période fiscale de clôture des bilans, confrontation à des situations de détresse financière chez certains exploitants."
        },
        "gettingStarted": {
            "beginnerProject": "Analyser le compte de résultat d'une exploitation agricole pédagogique et calculer sa marge brute globale.",
            "intermediateProject": "Simuler l'impact d'une baisse de 15% du cours du blé sur la trésorerie prévisionnelle d'une exploitation céréalière de 120 ha.",
            "advancedProject": "Rédiger le plan d'entreprise complet d'une installation en maraîchage biologique diversifié sur 3 hectares avec vente directe.",
            "portfolioIdeas": [
                "Dossier prévisionnel de financement d'un hangar solaire",
                "Étude comparative fiscale EARL vs GAEC"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'IA automatise la saisie comptable des factures et rapprochements bancaires, permettant au conseiller de se consacrer à 100% à l'accompagnement humain et à la stratégie.",
            "automatedTasks": [
                "Lecture automatique des factures et écritures comptables par OCR",
                "Génération automatique des déclarations TVA agricoles"
            ],
            "emergingSkills": [
                "Conseil en diversification vers les revenus carbone et agrivoltaïsme",
                "Interprétation de tableaux de bord financiers prédictifs"
            ],
            "humanEdge": "La relation de confiance intime et le tact pour aborder les sujets familiaux délicats lors de la transmission d'une ferme."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la bancarisation et la professionnalisation financière des exploitations familiales sont cruciales pour accéder aux crédits de la Banque Nationale pour le Développement Économique (BNDE) et du Crédit Agricole du Sénégal (LBA).",
            "localSectors": [
                "La Banque Agricole (LBA ex-CNCAS)",
                "Centres de Gestion Économique Rurale (CGER) de la vallée et des Niayes",
                "Projets d'appui aux exploitations familiales (PADAER, PAFA)"
            ],
            "remoteWork": "Analyses financières en télétravail possibles, rendez-vous paysans indispensables.",
            "entrepreneurship": "Création d'un cabinet privé de conseil en gestion et montage de plans d'affaires bancables pour les jeunes agri-preneurs sénégalais."
        },
        "relatedJobSlugs": [
            "charge-affaires-agricoles",
            "juriste-agricole",
            "chef-exploitation-agricole",
            "directeur-cooperative-agricole"
        ],
        "connectedFamilies": [
            "gestion-finance",
            "conseil-audit",
            "droit-justice"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Conseiller Agricole Studyrama",
                "url": "https://www.studyrama.com/formations/fiches-metiers/agriculture/conseiller-agricole-91759",
                "source": "Studyrama"
            }
        ],
        "sources": [
            "Studyrama",
            "CerFrance",
            "Chambres d'Agriculture"
        ],
        "interests": [
            "resoudre-problemes",
            "negocier-convaincre"
        ],
        "saviezVous": {
            "statut": "metier_stable",
            "fait": "Selon Studyrama et CerFrance, le réseau de conseil CerFrance emploie plus de 13 000 collaborateurs en France et conseille plus de 320 000 chefs d'entreprises, principalement agricoles.",
            "pourquoi": "L'agriculture est l'un des secteurs économiques les plus complexes fiscalement et réglementairement, rendant l'assistance d'un conseiller indispensable.",
            "a_retenir": "Le conseiller de l'ombre sans qui beaucoup de fermes ne pourraient survivre aux tempêtes économiques."
        },
        "salaryRanges": {
            "france": {
                "raw": "2 400 - 3 400 € brut/mois débutant (~28 800 - 40 800 €/an, Source : Studyrama / CerFrance)",
                "range": "2 400 - 3 400 € brut/mois débutant (~28 800 - 40 800 €/an, Source : Studyrama / CerFrance)",
                "source": "APECITA / Marché agro-maritime"
            },
            "senegal": {
                "raw": "350 000 - 1 200 000 FCFA / mois (Source : Cabinets de conseil, BNDE, projets agricoles)",
                "range": "350 000 - 1 200 000 FCFA / mois (Source : Cabinets de conseil, BNDE, projets agricoles)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "charge-affaires-agricoles",
        "slug": "charge-affaires-agricoles",
        "title": "Chargé d'Affaires Agricoles / Banquier Conseil du Monde Rural",
        "aliases": [
            "Conseiller bancaire agricole",
            "Chargé de clientèle agricole",
            "Analyste crédit agricole"
        ],
        "icon": "💼",
        "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Économie, Gestion, Droit & Conseil Rural",
        "domainId": "economie-gestion-conseil-rural",
        "subdomain": "Financement bancaire & assurances agricoles",
        "sourceOnisep": false,
        "sourceStudyrama": true,
        "isEmerging": false,
        "level": "Bac +3 (Licence Pro Banque Agricole) à Bac +5 (Master Finance / Ingénieur Agro)",
        "salary": "🇫🇷 France : 2 500 - 3 500 € brut/mois débutant + primes (~32 000 - 45 000 €/an package, Source : Studyrama / Fiches Banque) • 🇸🇳 Sénégal : 400 000 - 1 400 000 FCFA / mois (Source : Banques agricoles, LBA, BNDE)",
        "simpleDefinition": "Le chargé d'affaires agricoles gère et développe le portefeuille de clients agriculteurs d'une banque : il analyse leurs demandes d'emprunts, finance leurs investissements et protège leurs fermes contre les aléas climatiques.",
        "shortDescription": "Fiche documentée par Studyrama, ce banquier de terrain passe une grande partie de son temps bottes aux pieds pour évaluer la solidité des projets qu'il finance.",
        "longDescription": "Financer une moissonneuse à 400 000 €, un bâtiment photovoltaïque ou l'installation d'un jeune agriculteur ne ressemble en rien à un prêt immobilier classique. Le chargé d'affaires agricoles visite les parcelles et les étables, évalue l'expérience de l'exploitant, étudie les bilans comptables et monte les dossiers de prêt moyen/long terme. Il propose également des assurances récolte contre la grêle et la sécheresse ainsi que des solutions de placement pour sécuriser la trésorerie.",
        "mainObjective": "Financer le développement des exploitations agricoles en maîtrisant le risque de crédit pour l'institution bancaire.",
        "companyRole": "Moteur commercial de la banque sur le marché des professionnels de l'agriculture et partenaire financier des exploitants.",
        "workEnvironment": [
            "🏢 Agence bancaire pour l'analyse financière et le montage des dossiers",
            "🌾 Visites régulières dans les fermes du portefeuille",
            "🤝 Réunions fréquentes avec les experts-comptables et notaires ruraux"
        ],
        "missions": [
            "Instruire les demandes de prêts à moyen et long terme (matériels, foncier, bâtiments, cheptel)",
            "Analyser la capacité de remboursement et la rentabilité prévisionnelle des exploitations",
            "Présenter et défendre les dossiers de crédit devant le comité des engagements de la banque",
            "Commercialiser les assurances multi-périls climatiques des récoltes et la prévoyance de l'exploitant",
            "Accompagner les agriculteurs dans la gestion des tensions de trésorerie saisonnières (crédits de campagne)"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Revue des flux de trésorerie et autorisations de découvert",
                "desc": "Vérification des comptes clients et validation d'une avance sur trésorerie avant encaissement des aides PAC."
            },
            {
                "time": "10:30",
                "title": "Visite d'exploitation pour projet d'agrandissement",
                "desc": "Rendez-vous dans une ferme pour visiter 40 hectares de terres agricoles convoitées et évaluer le prix au m²."
            },
            {
                "time": "14:30",
                "title": "Défense d'un dossier de prêt en comité de crédit",
                "desc": "Argumentation technique et financière pour l'octroi d'un financement de 350 000 € pour une stabulation moderne."
            },
            {
                "time": "16:30",
                "title": "Souscription d'une assurance récolte",
                "desc": "Signature d'un contrat d'assurance climatique indicielle avec un céréalier pour couvrir sa récolte de blé."
            }
        ],
        "skills": {
            "technical": [
                "Analyse financière approfondie des bilans agricoles",
                "Techniques d'octroi de crédit professionnel et gestion des garanties (hypothèques, nantissements)",
                "Réglementation des aides à l'installation (prêts bonifiés)",
                "Produits d'assurance climatique agricole",
                "Bonne connaissance des cycles agricoles"
            ],
            "human": [
                "Aisance relationnelle et parler franc apprécié des agriculteurs",
                "Sens de la négociation commerciale",
                "Capacité à dire non avec pédagogie lorsque le risque est excessif",
                "Sens de l'écoute et discrétion"
            ],
            "tools": [
                "Logiciels bancaires d'analyse du risque de contrepartie",
                "Outils de simulation de prêts et tableaux d'amortissement",
                "CRM bancaire de suivi de portefeuille",
                "Bases de données de cotation d'entreprises"
            ],
            "analytical": [
                "Analyse de la capacité d'autofinancement (CAF)",
                "Calcul du ratio dette nette sur excédent brut d'exploitation (EBE)"
            ]
        },
        "specializations": [
            "Financement de grands projets agro-industriels et méthanisation",
            "Accompagnement de l'installation des jeunes agriculteurs",
            "Financement de coopératives et négoces agricoles",
            "Assurances gestion des risques climatiques et sanitaires"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Bac +2",
                    "title": "BTSA ACSE ou BTS Banque",
                    "desc": "Double socle apprécié combinant monde agricole et bases bancaires."
                },
                {
                    "step": "Bac +3",
                    "title": "Licence Pro Métiers de la Banque (Parcours Marché Agricole)",
                    "desc": "Formation de prédilection des banques mutualistes pour recruter leurs chargés d'affaires."
                },
                {
                    "step": "Bac +5",
                    "title": "Master Banque / Finance ou Diplôme d'Ingénieur Agronome",
                    "desc": "Évolution rapide vers les grands comptes agro-industriels et la direction d'agences."
                }
            ],
            "schools": [
                {
                    "name": "Écoles supérieures de commerce et universités dispensant les Masters Banque — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut Agro / UniLaSalle — Filières Finance & Gestion",
                    "country": "France",
                    "scope": "International"
                },
                {
                    "name": "Centres de formation de la profession bancaire (CFPB Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification AMF (Autorité des Marchés Financiers)",
                "Habilitation IOBSP (Intermédiaire en Opérations de Banque)"
            ],
            "schoolSubjects": [
                "Finance d'entreprise",
                "Économie agricole",
                "Droit bancaire",
                "Négociation commerciale"
            ]
        },
        "career": {
            "sectors": [
                "Banques de référence du monde agricole (Crédit Agricole, Banque Populaire, Crédit Mutuel)",
                "Banques de développement agricole internationales (BAD, BOAD)",
                "Compagnies d'assurance spécialisées agricoles (Groupama, Pacifica)",
                "Sociétés de crédit-bail et leasing de matériel"
            ],
            "employerTypes": [
                "Groupes bancaires mutualistes",
                "Établissements financiers spécialisés",
                "Compagnies d'assurance"
            ],
            "evolution": "Chargé de clientèle agricole junior ➔ Chargé d'affaires agricoles senior ➔ Directeur d'agence bancaire en milieu rural ➔ Directeur du marché des professionnels et de l'agriculture",
            "pros": "Métier alliant finance de haut niveau et authenticité du contact paysan, rémunération attractive avec primes, voiture de fonction, impact direct sur l'économie locale.",
            "cons": "Pression sur les objectifs commerciaux bancaires, devoir refuser des financements à des agriculteurs passionnés dont le dossier est trop fragile."
        },
        "gettingStarted": {
            "beginnerProject": "Comparer les offres de prêts à l'installation des jeunes agriculteurs proposées par deux grandes banques françaises.",
            "intermediateProject": "Monter un dossier de simulation de prêt de 150 000 € sur 7 ans pour l'achat d'un tracteur neuf avec calcul du taux d'endettement.",
            "advancedProject": "Réaliser l'analyse financière complète d'un bilan d'exploitation et rédiger la note de synthèse pour le comité des risques bancaires.",
            "portfolioIdeas": [
                "Grille d'évaluation du risque de crédit agricole",
                "Argumentaire de vente d'une assurance multi-risques climatique"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des algorithmes de scoring prédisent le risque de défaut de paiement en intégrant les rendements satellites des parcelles et la volatilité des cours.",
            "automatedTasks": [
                "Pré-analyse automatique des bilans comptables importés",
                "Édition automatisée des contrats de prêt et garanties"
            ],
            "emergingSkills": [
                "Financement des projets agrivoltaïques et de décarbonation",
                "Maîtrise des financements participatifs (crowdfunding agricole)"
            ],
            "humanEdge": "La confiance humaine et l'évaluation du courage de l'exploitant face aux crises, qu'aucun algorithme ne peut mesurer."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'accès au crédit des producteurs est le verrou historique du développement. La Banque Agricole (LBA) et les institutions de microfinance (Crédit Mutuel du Sénégal, PAMECAS) renforcent leurs équipes de conseillers agricoles pour financer la campagne agricole.",
            "localSectors": [
                "La Banque Agricole (LBA)",
                "Banque Nationale pour le Développement Économique (BNDE)",
                "Réseaux de microfinance rurale (CMS, PAMECAS, ACEP)"
            ],
            "remoteWork": "Possibilité partielle d'analyse à distance, tournées de terrain indispensables.",
            "entrepreneurship": "Création d'une plateforme de courtage et de financement participatif agricole connectant la diaspora sénégalaise aux fermes locales rentables."
        },
        "relatedJobSlugs": [
            "conseiller-gestion-agricole",
            "juriste-agricole",
            "chef-exploitation-agricole",
            "technico-commercial-agroequipement"
        ],
        "connectedFamilies": [
            "gestion-finance",
            "conseil-audit",
            "droit-justice"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Conseiller Banque Agricole Studyrama",
                "url": "https://www.studyrama.com/formations/fiches-metiers/banque-assurance",
                "source": "Studyrama"
            }
        ],
        "sources": [
            "Studyrama",
            "Crédit Agricole",
            "APECITA"
        ],
        "interests": [
            "negocier-convaincre",
            "resoudre-problemes"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon Studyrama et la Fédération Bancaire Française, le Crédit Agricole est né en 1885 sous forme de caisses locales mutualistes créées par des paysans pour s'entraider face à la frilosité des banques traditionnelles.",
            "pourquoi": "Ce modèle mutualiste original fait que la majorité des administrateurs des banques régionales sont encore aujourd'hui des agriculteurs élus par leurs pairs.",
            "a_retenir": "Un métier où l'on fait fructifier l'argent au service direct de la terre et de ceux qui la cultivent."
        },
        "salaryRanges": {
            "france": {
                "raw": "2 500 - 3 500 € brut/mois débutant + primes (~32 000 - 45 000 €/an package, Source : Studyrama / Fiches Banque)",
                "range": "2 500 - 3 500 € brut/mois débutant + primes (~32 000 - 45 000 €/an package, Source : Studyrama / Fiches Banque)",
                "source": "APECITA / Marché agro-maritime"
            },
            "senegal": {
                "raw": "400 000 - 1 400 000 FCFA / mois (Source : Banques agricoles, LBA, BNDE)",
                "range": "400 000 - 1 400 000 FCFA / mois (Source : Banques agricoles, LBA, BNDE)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "juriste-agricole",
        "slug": "juriste-agricole",
        "title": "Juriste en Droit Rural & Foncier Agricole / Expert Foncier",
        "aliases": [
            "Juriste droit rural",
            "Expert foncier agricole",
            "Conseiller juridique agricole"
        ],
        "icon": "⚖️",
        "image": "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Économie, Gestion, Droit & Conseil Rural",
        "domainId": "economie-gestion-conseil-rural",
        "subdomain": "Droit rural & foncier",
        "sourceOnisep": false,
        "sourceStudyrama": true,
        "isEmerging": false,
        "level": "Bac +5 (Master en Droit Rural ou Diplôme d'Ingénieur Agronome spécialité Droit)",
        "salary": "🇫🇷 France : 2 700 - 3 600 € brut/mois débutant (~32 400 - 43 200 €/an, Source : Studyrama / Safer / FNSEA) • 🇸🇳 Sénégal : 450 000 - 1 500 000 FCFA / mois (Source : Cabinets notariaux ruraux, Safer, ministères)",
        "simpleDefinition": "Le juriste en droit rural conseille les agriculteurs, syndicats et propriétaires fonciers sur les baux ruraux, le statut du fermage, la création de sociétés agricoles (GAEC, SCEA) et le règlement des successions familiales.",
        "shortDescription": "Fiche documentée par Studyrama, ce spécialiste du droit de la terre sécurise l'accès aux parcelles, évite les litiges fonciers et protège le statut des exploitants.",
        "longDescription": "Le droit rural est une discipline juridique très singulière, fortement protectrice du fermier exploitant grâce au statut du fermage. Le juriste en droit rural exerce au sein des SAFER (Sociétés d'Aménagement Foncier et d'Établissement Rural), des chambres d'agriculture, des cabinets d'avocats ou d'études notariales. Il rédige des baux à ferme, gère le droit de préemption sur les terres, règle les conflits de mitoyenneté ou de servitudes d'écoulement des eaux et pilote les transmissions familiales complexes.",
        "mainObjective": "Sécuriser juridiquement l'accès au foncier et la structure sociétaire des exploitations agricoles.",
        "companyRole": "Garant de la conformité juridique et médiateur des conflits fonciers et sociétaires ruraux.",
        "workEnvironment": [
            "🏢 Bureaux des SAFER, chambres d'agriculture ou études de notaires de province",
            "🏛️ Tribunaux paritaires des baux ruraux pour l'assistance aux contentieux",
            "🌾 Déplacements réguliers pour visiter les parcelles et rencontrer les parties"
        ],
        "missions": [
            "Rédiger et négocier des baux ruraux (baux à ferme à long terme, baux environnementaux, commodats)",
            "Instruire les dossiers de droit de préemption des SAFER pour réguler le prix des terres agricoles",
            "Structurer la forme juridique des exploitations (transformation en GAEC, cession de parts d'EARL)",
            "Accompagner la transmission d'exploitation pour minimiser les conflits successoraux entre héritiers",
            "Défendre les intérêts des exploitants devant le Tribunal Paritaire des Baux Ruraux (TPBR)"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Veille juridique et étude d'un arrêté préfectoral",
                "desc": "Vérification du barème préfectoral des valeurs locatives des terres pour fixer le fermage légal."
            },
            {
                "time": "10:30",
                "title": "Rédaction des statuts d'un nouveau GAEC familial",
                "desc": "Rédaction des clauses d'apport de matériel et de répartition des bénéfices entre un père et sa fille qui s'installe."
            },
            {
                "time": "14:00",
                "title": "Médiation foncière entre propriétaire et fermier",
                "desc": "Rencontre pour négocier à l'amiable la résiliation anticipée d'un bail rural avec indemnité d'éviction."
            },
            {
                "time": "16:30",
                "title": "Instruction d'un dossier de rétrocession SAFER",
                "desc": "Analyse juridique des candidatures d'agriculteurs pour l'attribution prioritaire d'un corps de ferme de 25 ha."
            }
        ],
        "skills": {
            "technical": [
                "Droit rural approfondi et statut du fermage (Code rural)",
                "Droit des sociétés agricoles (GAEC, EARL, SCEA, GFA)",
                "Réglementation du contrôle des structures et des autorisations d'exploiter",
                "Fiscalité des plus-values agricoles et droits de succession",
                "Droit de l'urbanisme rural et de l'environnement"
            ],
            "human": [
                "Excellente écoute et talents de médiateur dans les conflits familiaux",
                "Rigueur d'analyse juridique et précision rédactionnelle",
                "Pédagogie pour expliquer des notions de droit absconses",
                "Sens de l'équité territoriale"
            ],
            "tools": [
                "Bases de données juridiques (Dalloz, LexisNexis)",
                "Cadastre numérique et données parcellaires SAFER (VigieFoncier)",
                "Logiciels de rédaction d'actes juridiques",
                "Outils de calcul de fermage indicé"
            ],
            "analytical": [
                "Estimation d'indemnité d'éviction de bail rural",
                "Analyse de la validité d'une décision de préemption"
            ]
        },
        "specializations": [
            "Contentieux du statut du fermage (Tribunal paritaire)",
            "Aménagement foncier et régulation des prix par les SAFER",
            "Transmission de patrimoine et démembrement de propriété",
            "Droit de l'environnement agricole (dérogations haies, espèces protégées)"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Bac +3",
                    "title": "Licence en Droit Privé",
                    "desc": "Solides bases en droit civil des contrats, biens et obligations."
                },
                {
                    "step": "Bac +5",
                    "title": "Master 2 Droit Rural / Droit Agroalimentaire",
                    "desc": "Formation de référence dispensée par quelques universités spécialisées (Poitiers, Dijon, Rennes, Paris 1)."
                }
            ],
            "schools": [
                {
                    "name": "Université de Poitiers (Institut de Droit Rural - Master référence) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université de Bourgogne (Dijon) / Université de Rennes — Master Droit Rural",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Cheikh Anta Diop (UCAD Dakar - Faculté des Sciences Juridiques) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certificat d'Aptitude à la Profession d'Avocat (CAPA) pour l'exercice en barreau",
                "Agrément d'Expert Foncier (CNEFAF)"
            ],
            "schoolSubjects": [
                "Droit rural",
                "Droit des contrats",
                "Droit des sociétés",
                "Fiscalité agricole"
            ]
        },
        "career": {
            "sectors": [
                "SAFER régionales (Sociétés d'Aménagement Foncier)",
                "Chambres d'agriculture et syndicats agricoles (FNSEA, Jeunes Agriculteurs)",
                "Cabinets d'avocats spécialisés en droit rural",
                "Offices notariaux en zone rurale"
            ],
            "employerTypes": [
                "Organismes de régulation foncière",
                "Cabinets libéraux d'avocats et notaires",
                "Centres de gestion et d'expertise foncière"
            ],
            "evolution": "Juriste junior en chambre d'agriculture ➔ Responsable juridique SAFER ➔ Avocat associé en droit rural ou Expert Foncier et Agricole indépendant",
            "pros": "Niche juridique prestigieuse et très recherchée car peu enseignée en faculté, rôle de pacificateur dans des querelles de terres ancestrales, sécurité de l'emploi.",
            "cons": "Charge émotionnelle forte lors de déchirements familiaux lors des successions de fermes, lenteur des procédures judiciaires contentieuses."
        },
        "gettingStarted": {
            "beginnerProject": "Lire et résumer les grands principes du statut du fermage dans le Code rural (durée minimale de 9 ans, droit au renouvellement).",
            "intermediateProject": "Rédiger un bail à ferme type pour une parcelle de 15 hectares en intégrant des clauses agroécologiques d'entretien des haies.",
            "advancedProject": "Analyser un cas pratique de succession agricole avec soulte et calculer la valeur d'indemnisation d'un héritier exploitant (salaire différé).",
            "portfolioIdeas": [
                "Modèle de bail rural environnemental commenté",
                "Consultation juridique sur un refus d'autorisation d'exploiter"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'IA générative juridique pré-rédige les clauses contractuelles types et accélère la recherche de jurisprudence des cours d'appel rurales.",
            "automatedTasks": [
                "Recherche automatisée de précédents judiciaires de baux ruraux",
                "Génération de premières trames de statuts de sociétés agricoles"
            ],
            "emergingSkills": [
                "Droit des crédits carbone et des baux agrivoltaïques",
                "Régulation juridique de la propriété des données agricoles numériques"
            ],
            "humanEdge": "La psychologie humaine pour dénouer les rancœurs intrafamiliales lors du partage de la terre ancestrale."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la question du foncier agricole (Loi sur le Domaine National de 1964, délibérations des conseils municipaux, titrage foncier) est ultra-sensible. Les juristes en droit foncier rural sont indispensables pour sécuriser les investissements et éviter les spoliations de terres communautaires.",
            "localSectors": [
                "Direction Générale des Impôts et Domaines (DGID)",
                "Commission Nationale de Réforme Foncière (CNRF)",
                "Bureaux d'études juridiques et cabinets notariaux"
            ],
            "remoteWork": "Rédaction d'actes possible en télétravail partiel, concertations locales sur place.",
            "entrepreneurship": "Création d'un cabinet de sécurisation juridique foncière pour accompagner les investisseurs de la diaspora voulant acquérir des terres sans risques au Sénégal."
        },
        "relatedJobSlugs": [
            "conseiller-gestion-agricole",
            "charge-affaires-agricoles",
            "chef-exploitation-agricole",
            "ingenieur-agronome"
        ],
        "connectedFamilies": [
            "droit-justice",
            "gestion-finance",
            "conseil-audit"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Juriste Droit Rural Studyrama",
                "url": "https://www.studyrama.com/formations/fiches-metiers/droit-justice",
                "source": "Studyrama"
            }
        ],
        "sources": [
            "Studyrama",
            "Association Française de Droit Rural (AFDR)",
            "Fédération des Safer"
        ],
        "interests": [
            "resoudre-problemes",
            "negocier-convaincre"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon Studyrama et l'Association Française de Droit Rural, les juristes spécialisés en droit rural sont extrêmement disputés par les notaires, banques et Safer car seules deux universités françaises forment de vrais spécialistes.",
            "pourquoi": "La majorité des juristes s'orientent vers le droit des affaires d'entreprise générale, laissant le droit de la terre et du vivant sous-peuplé de talents.",
            "a_retenir": "Un profil juridique d'élite qui marie rigueur des textes et passion viscérale pour la terre nourricière."
        },
        "salaryRanges": {
            "france": {
                "raw": "2 700 - 3 600 € brut/mois débutant (~32 400 - 43 200 €/an, Source : Studyrama / Safer / FNSEA)",
                "range": "2 700 - 3 600 € brut/mois débutant (~32 400 - 43 200 €/an, Source : Studyrama / Safer / FNSEA)",
                "source": "APECITA / Marché agro-maritime"
            },
            "senegal": {
                "raw": "450 000 - 1 500 000 FCFA / mois (Source : Cabinets notariaux ruraux, Safer, ministères)",
                "range": "450 000 - 1 500 000 FCFA / mois (Source : Cabinets notariaux ruraux, Safer, ministères)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "ingenieur-agritech",
        "slug": "ingenieur-agritech",
        "title": "Ingénieur AgriTech & Systèmes Connectés / Smart Farming",
        "aliases": [
            "Ingénieur en agriculture connectée",
            "Chef de projet smart farming",
            "Ingénieur IoT agricole"
        ],
        "icon": "🛰️",
        "image": "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "AgriTech, Numérique & Agriculture de Précision",
        "domainId": "agritech-agriculture-numerique",
        "subdomain": "IoT, capteurs & fermes connectées",
        "sourceOnisep": true,
        "sourceStudyrama": false,
        "isEmerging": true,
        "level": "Bac +5 (Diplôme d'Ingénieur Agronome spécialité Numérique ou Ingénieur IoT)",
        "salary": "🇫🇷 France : 3 200 - 4 200 € brut/mois débutant (~38 400 - 50 400 €/an, Source : Onisep / APEC) • 🇸🇳 Sénégal / Afrique : 600 000 - 1 800 000 FCFA / mois (Source : Startups AgriTech, hubs d'innovation)",
        "simpleDefinition": "L'ingénieur AgriTech déploie les technologies numériques au service de l'agriculture : capteurs de sol connectés (IoT), stations météo intelligentes, colliers pour bétail et plateformes d'aide à la décision.",
        "shortDescription": "Fiche documentée par Onisep dans ses métiers d'avenir, ce bâtisseur du Smart Farming connecte le champ et l'étable au cloud pour guider chaque décision de l'agriculteur en temps réel.",
        "longDescription": "L'agriculture vit une révolution numérique sans précédent. L'ingénieur AgriTech conçoit des architectures logicielles et matérielles robustes capables de fonctionner en milieu rural isolé (réseaux LoRaWAN, capteurs étanches basse consommation). Selon l'Onisep, il intègre les flux de données provenant de sondes capacitives, de stations météo locales et d'équipements agricoles (ISOBUS) pour envoyer des recommandations automatiques sur le smartphone du producteur (alerte gel, déclenchement d'arrosage, risque de mildiou).",
        "mainObjective": "Aider l'agriculteur à prendre des décisions ultralocalisées grâce à la donnée temps réel pour réduire les intrants et économiser l'eau.",
        "companyRole": "Innovateur technologique reliant le monde du logiciel et des objets connectés aux réalités agronomiques de terrain.",
        "workEnvironment": [
            "💻 Startups AgriTech, éditeurs de logiciels agricoles et bureaux R&D",
            "🌾 Essais d'installation de capteurs en plein champ et dans les élevages",
            "☁️ Environnements cloud et plateformes IoT"
        ],
        "missions": [
            "Concevoir et déployer des réseaux de capteurs connectés basse consommation (LoRaWAN, Sigfox, NB-IoT)",
            "Développer des algorithmes d'Outils d'Aide à la Décision (OAD) basés sur des règles agronomiques",
            "Assurer l'interopérabilité des données entre tracteurs, capteurs et logiciels de gestion de ferme",
            "Mener des tests de robustesse des matériels électroniques face à la poussière, l'eau et les vibrations",
            "Former les conseillers agricoles et exploitants à l'utilisation des dashboards de pilotage"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Supervision de la flotte de capteurs connectés",
                "desc": "Vérification des niveaux de batterie et du taux de paquets reçus sur le réseau LoRa de 300 sondes de sol."
            },
            {
                "time": "10:30",
                "title": "Développement d'une API d'interconnexion",
                "desc": "Codage en Python d'une passerelle sécurisée pour importer les cartes de rendement de moissonneuses vers l'application mobile."
            },
            {
                "time": "14:00",
                "title": "Installation de terrain chez un viticulteur",
                "desc": "Pose de capteurs foliaires de micro-climat dans les rangs de vigne pour détecter le risque d'oïdium."
            },
            {
                "time": "16:30",
                "title": "Webinaire avec les utilisateurs agriculteurs",
                "desc": "Présentation des nouvelles fonctionnalités de prévision de gel de printemps sur le tableau de bord."
            }
        ],
        "skills": {
            "technical": [
                "Architectures IoT & protocoles basse consommation (LoRaWAN, BLE, NB-IoT)",
                "Développement logiciel (Python, JavaScript, API REST)",
                "Agronomie fondamentale et modélisation épidémiologique des cultures",
                "Normes d'interopérabilité agricole (ISOBUS ISO 11783, agdatahub)",
                "Électronique embarquée et microcontrôleurs (ESP32, STM32)"
            ],
            "human": [
                "Curiosité technologique et passion du vivant",
                "Capacité à vulgariser la tech auprès de publics non spécialistes",
                "Esprit agile et réactivité de startup",
                "Pragmatisme face aux contraintes du terrain"
            ],
            "tools": [
                "Plateformes IoT (ThingsBoard, AWS IoT Core)",
                "Passerelles LoRaWAN industrielles extérieures",
                "Sondes capacitives de sol et stations météo connectées",
                "Environnements de développement (VS Code, GitHub, Docker)"
            ],
            "analytical": [
                "Traitement des séries temporelles de données agrométéorologiques",
                "Calcul d'autonomie énergétique sur panneau solaire et batterie"
            ]
        },
        "specializations": [
            "IoT et capteurs connectés de sol et météo",
            "Colliers et capteurs biométriques pour l'élevage connecté",
            "Plateformes logicielles OAD (Outils d'Aide à la Décision)",
            "Serres bioclimatiques intelligentes et hydroponie connectée"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Bac +2",
                    "title": "Prépa Scientifique ou BUT Informatique / Réseaux et Télécoms",
                    "desc": "Excellente maîtrise du code, des réseaux et de l'électronique."
                },
                {
                    "step": "Bac +5",
                    "title": "Diplôme d'Ingénieur Agronome spécialité Numérique / AgriTech ou Ingénieur Télécoms/IoT",
                    "desc": "Double compétence très prisée alliant science agronomique et informatique de pointe."
                }
            ],
            "schools": [
                {
                    "name": "Institut Agro Montpellier (Chaire Agriculture Numérique) — France",
                    "country": "France",
                    "scope": "International"
                },
                {
                    "name": "UniLaSalle / AgroParisTech — Spécialités Numérique Agricole",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) / ENSA Thiès — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification AWS IoT ou Azure IoT Developer",
                "Certification réseau LoRa Alliance"
            ],
            "schoolSubjects": [
                "Internet des Objets (IoT)",
                "Agronomie",
                "Programmation informatique",
                "Bases de données"
            ]
        },
        "career": {
            "sectors": [
                "Startups AgriTech et pépinières d'innovation",
                "Grands constructeurs de machinisme et équipementiers",
                "Grandes coopératives agricoles créant des filiales digitales",
                "Instituts techniques agricoles (Arvalis, ACTA)"
            ],
            "employerTypes": [
                "Éditeurs de logiciels agricoles (SaaS)",
                "Constructeurs de matériel connecté",
                "Startups du Smart Farming"
            ],
            "evolution": "Ingénieur IoT junior ➔ Lead Developer AgriTech ➔ Directeur Technique (CTO) de startup ➔ Directeur de la transformation numérique d'un groupe agricole",
            "pros": "Poste au cœur de l'innovation mondiale la plus excitante, atmosphère dynamique de la tech, utilité écologique immédiate (économie d'eau et de produits).",
            "cons": "Contraintes de connectivité en 'zones blanches' rurales isolées, nécessité de convaincre des exploitants parfois réticents à multiplier les abonnements digitaux."
        },
        "gettingStarted": {
            "beginnerProject": "Connecter une sonde d'humidité de sol à une carte ESP32 pour envoyer une notification smartphone lorsque la terre est sèche.",
            "intermediateProject": "Déployer une station météo miniature connectée au réseau LoRaWAN gratuit The Things Network (TTN).",
            "advancedProject": "Créer une application web complète affichant sur carte dynamique les données d'humidité de 10 parcelles avec alerte d'irrigation par SMS.",
            "portfolioIdeas": [
                "Dépôt GitHub d'une passerelle de données capteur-cloud",
                "Documentation technique d'un réseau LoRaWAN agricole"
            ]
        },
        "aiImpact": {
            "level": "Révolutionnaire",
            "summary": "L'IA transforme les téraoctets de données brutes des capteurs en recommandations ultra-personnalisées générées en langage naturel pour l'agriculteur.",
            "automatedTasks": [
                "Détection automatique des pannes ou dérives d'étalonnage des capteurs",
                "Agrégation et nettoyage en temps réel des flux de données hétérogènes"
            ],
            "emergingSkills": [
                "Edge AI (modèles d'IA exécutés directement sur le microcontrôleur au champ sans connexion 4G)",
                "Jumeaux numériques d'exploitations agricoles"
            ],
            "humanEdge": "La compréhension du métier d'agriculteur pour concevoir des applications simples, robustes et utilisables avec des doigts terreux au soleil."
        },
        "africaContext": {
            "senegalInsight": "En Afrique, l'AgriTech saute l'étape des ordinateurs pour passer directement au mobile : capteurs d'irrigation solaire par USSD/SMS, stations météo locales et micro-assurance paramétrique sur smartphone (ex: startups Tolbi, Jokalante).",
            "localSectors": [
                "Hubs technologiques de Dakar (Dakar American University of Science and Technology, Sonatel Innovation)",
                "Startups AgriTech ouest-africaines (Tolbi, Aywajieune)",
                "Projets d'agriculture intelligente de l'ENSA Thiès"
            ],
            "remoteWork": "Développement logiciel en télétravail total possible, déploiements terrain sur site.",
            "entrepreneurship": "Création d'une startup fournissant des kits d'irrigation intelligente solaire pilotables par WhatsApp pour les maraîchers africains."
        },
        "relatedJobSlugs": [
            "telepilote-drone-agricole",
            "data-analyste-agricole",
            "ingenieur-machinisme-agricole",
            "ingenieur-irrigation-hydraulique"
        ],
        "connectedFamilies": [
            "technologies-donnees",
            "industrie-ingenierie",
            "environnement-climat"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Métier Ingénieur AgriTech Onisep",
                "url": "https://www.onisep.fr/ressources/univers-metier/metiers/ingenieur-agronome",
                "source": "Onisep"
            }
        ],
        "sources": [
            "Onisep",
            "La Ferme Digitale",
            "Chaire Agriculture Numérique (Institut Agro)",
            "Tolbi"
        ],
        "interests": [
            "technologie-code",
            "resoudre-problemes"
        ],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Selon La Ferme Digitale et l'Onisep, la France compte plus de 150 startups AgriTech et le secteur a levé plus de 500 millions d'euros pour accélérer la digitalisation des fermes.",
            "pourquoi": "L'agriculture de précision permet d'épandre l'engrais au kilo près et l'eau au litre près, faisant rimer économies d'argent et protection de l'environnement.",
            "a_retenir": "Le profil hybride idéal pour ceux qui aiment à la fois le code informatique et les grands espaces de la nature."
        },
        "salaryRanges": {
            "france": {
                "raw": "3 200 - 4 200 € brut/mois débutant (~38 400 - 50 400 €/an, Source : Onisep / APEC)",
                "range": "3 200 - 4 200 € brut/mois débutant (~38 400 - 50 400 €/an, Source : Onisep / APEC)",
                "source": "Onisep / Studyrama"
            },
            "senegal": {
                "raw": "🇸🇳 Sénégal / Afrique : 600 000 - 1 800 000 FCFA / mois (Source : Startups AgriTech, hubs d'innovation)",
                "range": "🇸🇳 Sénégal / Afrique : 600 000 - 1 800 000 FCFA / mois (Source : Startups AgriTech, hubs d'innovation)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "telepilote-drone-agricole",
        "slug": "telepilote-drone-agricole",
        "title": "Télépilote de Drone Agricole / Opérateur Télédétection",
        "aliases": [
            "Pilote de drone en agriculture",
            "Expert drone agricole",
            "Opérateur imagerie aérienne agricole"
        ],
        "icon": "🛸",
        "image": "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "AgriTech, Numérique & Agriculture de Précision",
        "domainId": "agritech-agriculture-numerique",
        "subdomain": "Drones, imagerie & télédétection",
        "sourceOnisep": false,
        "sourceStudyrama": true,
        "isEmerging": true,
        "level": "Brevet de Télépilote Professionnel (DGAC) + formation spécialisée télédétection agricole",
        "salary": "🇫🇷 France : 2 000 - 3 200 € net/mois en entreprise ou facturation journalière 600 - 1 200 €/jour en indépendant (Source : Studyrama / Fiches Drones) • 🇸🇳 Sénégal : 300 000 - 1 100 000 FCFA / mois (Source : Prestataires de services par drone)",
        "simpleDefinition": "Le télépilote de drone agricole survole les cultures avec des drones équipés de caméras multispectrales pour cartographier les besoins en azote, détecter les maladies, compter les pieds et parfois pulvériser avec ultra-précision.",
        "shortDescription": "Fiche documentée par Studyrama, cet aviateur des champs offre à l'agriculteur une vision aérienne centimétrique pour cibler ses interventions au mètre carré près.",
        "longDescription": "Le drone a remplacé les survols coûteux en avion ou les images satellites trop espacées. Le télépilote prépare ses plans de vol automatiques, pilote le drone au-dessus de centaines d'hectares en toute sécurité, puis traite les clichés par photogrammétrie. Grâce aux capteurs proches infrarouges mesurant l'indice NDVI de vigueur végétale, il génère des cartes de modulation d'azote que le tracteur injectera directement dans son épandeur pour ne nourrir que les zones qui en ont besoin.",
        "mainObjective": "Fournir des cartes agronomiques haute résolution pour optimiser les rendements et diviser l'usage des engrais et produits phytosanitaires.",
        "companyRole": "Prestataire de services technologiques de pointe et éclaireur aérien des agronomes.",
        "workEnvironment": [
            "🌾 En plein champ sur les chemins de parcelles avec sa station de pilotage",
            "💻 Bureau pour le traitement photogrammétrique des images par ordinateur",
            "🚗 Déplacements constants au gré des fenêtres météo sans vent"
        ],
        "missions": [
            "Préparer les missions de vol et déposer les déclarations de vol auprès de l'aviation civile (DGAC)",
            "Déployer et piloter sur le terrain des drones quadrirotors ou des ailes volantes longue portée",
            "Capturer des images avec caméras multispectrales (vert, rouge, red-edge, proche infrarouge) et thermiques",
            "Traiter les données par photogrammétrie pour créer des orthomosaïques géoréférencées",
            "Traduire les cartes NDVI en cartes de préconisation de fertilisation compatibles avec les consoles GPS des tracteurs"
        ],
        "typicalDay": [
            {
                "time": "07:00",
                "title": "Vol matinal avant la montée du vent",
                "desc": "Décollage d'une aile volante pour survoler 150 hectares de blé en 45 minutes avec caméra multispectrale."
            },
            {
                "time": "09:30",
                "title": "Mission de lâcher de trichogrammes",
                "desc": "Survol d'un champ de maïs avec un drone disperseur de capsules de micro-guêpes pour lutter bio contre la pyrale."
            },
            {
                "time": "14:00",
                "title": "Traitement des images sur station graphique",
                "desc": "Assemblage photogrammétrique sous Pix4D et calcul des indices de biomasse végétale NDVI."
            },
            {
                "time": "16:30",
                "title": "Export des fichiers de modulation",
                "desc": "Génération du fichier de modulation d'engrais en format shapefile et envoi sur la clé USB du tracteur du client."
            }
        ],
        "skills": {
            "technical": [
                "Réglementation aérienne et pilotage professionnel de drone (scénarios S1, S2, S3 / catégories européennes)",
                "Photogrammétrie et assemblage d'images aériennes",
                "Télédétection et calcul des indices de végétation (NDVI, NDRE)",
                "Systèmes d'Information Géographique (QGIS) et formats de guidage agricole (Shape, ISO-XML)",
                "Maintenance et calibrage des capteurs multispectraux"
            ],
            "human": [
                "Rigueur absolue dans le respect des règles de sécurité aérienne",
                "Sens de l'observation et réactivité face aux imprévus météo",
                "Pédagogie commerciale pour valoriser les cartes produites",
                "Autonomie sur le terrain"
            ],
            "tools": [
                "Drones professionnels (DJI Phantom 4 Multispectral, Mavic 3 Enterprise, WingtraOne)",
                "Caméras multispectrales (MicaSense RedEdge)",
                "Logiciels de photogrammétrie (Pix4Dfields, Agisoft Metashape)",
                "Stations GNSS RTK centimétriques au sol"
            ],
            "analytical": [
                "Calibrage radiométrique par cible d'étalonnage au sol",
                "Algorithmes de comptage automatique de plants par vision"
            ]
        },
        "specializations": [
            "Cartographie de la fertilisation azotée (grandes cultures)",
            "Comptage des manquants et vigueur en viticulture et vergers",
            "Lâchers de biocontrôle par drone (trichogrammes contre la pyrale)",
            "Thermographie aérienne pour la détection de fuites d'irrigation"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Bac scientifique, technique ou professionnel agricole",
                    "desc": "Bases générales nécessaires pour comprendre les contraintes techniques."
                },
                {
                    "step": "Brevet d'État",
                    "title": "Brevet Théorique de Télépilote de Drone (DGAC)",
                    "desc": "Examen obligatoire pour tout vol professionnel d'aéronef télépiloté."
                },
                {
                    "step": "Formation spécialisée",
                    "title": "Formation Télédétection et Imagerie Agricole par Drone",
                    "desc": "Formation pratique d'un à plusieurs mois en centre agréé (Pix4D, centres spécialisés)."
                }
            ],
            "schools": [
                {
                    "name": "Centres de formation de télépilotes professionnels agréés DGAC — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut Agro / UniLaSalle — Modules Drone et Numérique",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centre de formation aux métiers du drone civil (Dakar, Sénégal)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certificat d'Aptitude Théorique de Télépilote (CATT - DGAC)",
                "Attestation de Formation Pratique au Pilotage"
            ],
            "schoolSubjects": [
                "Aéronautique",
                "Météorologie",
                "Cartographie SIG",
                "Agronomie"
            ]
        },
        "career": {
            "sectors": [
                "Entreprises de services par drones spécialisées en agriculture",
                "Grandes coopératives agricoles disposant d'un pôle drone interne",
                "Instituts techniques et organismes de recherche (INRAE, Arvalis)",
                "Entreprises d'expertise d'assurance agricole après orage ou grêle"
            ],
            "employerTypes": [
                "Sociétés de prestations de services par drone",
                "Coopératives agricoles",
                "Statut d'auto-entrepreneur ou dirigeant de TPE"
            ],
            "evolution": "Pilote opérateur de terrain ➔ Expert en analyse de données de télédétection ➔ Responsable pôle imagerie coopérative ➔ Dirigeant d'entreprise de services aériens",
            "pros": "Métier à haute technologie très ludique, travail au grand air, impact écologique direct (suppression des engrais superflus).",
            "cons": "Forte dépendance à la météo (impossible de voler sous la pluie ou par grand vent), saisonnalité des vols concentrés sur le printemps."
        },
        "gettingStarted": {
            "beginnerProject": "Obtenir son certificat théorique de télépilote de drone de loisir sur le site officiel de la DGAC (AlphaTango).",
            "intermediateProject": "Réaliser une orthomosaïque de 2 hectares avec un petit drone grand public et le logiciel libre OpenDroneMap.",
            "advancedProject": "Survoler une parcelle en multispectral, calibrer les données sur réflectance et générer une carte de modulation d'azote sous QGIS.",
            "portfolioIdeas": [
                "Orthomosaïque haute résolution annotée",
                "Carte comparatrice NDVI vs carte d'application réelle d'engrais"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "Des réseaux de neurones convolutionnels détectent et comptent automatiquement les mauvaises herbes, fleurs ou pieds manquants sur des images de 10 000 pixels de large.",
            "automatedTasks": [
                "Planification automatique des trajectoires d'évitement d'obstacles",
                "Détection automatique des foyers de maladies par deep learning"
            ],
            "emergingSkills": [
                "Pilotage d'essaims de drones autonomes",
                "Pulvérisation ultralocalisée par drone gros porteur"
            ],
            "humanEdge": "Le pilotage d'urgence en cas de coup de vent soudain et l'analyse agronomique critique des résultats avec le paysan."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les drones révolutionnent la gestion des grands périmètres irrigués de la vallée du fleuve et les vergers de manguiers : comptage des arbres, détection du stress hydrique et pulvérisation ciblée contre les chenilles légionnaires sans exposer les ouvriers aux produits.",
            "localSectors": [
                "Projets d'agriculture de précision de la vallée du fleuve Sénégal (Saint-Louis, Dagana)",
                "Grandes fermes exportatrices de fruits et légumes (Kirène, Grands Domaines du Sénégal)",
                "Startups de cartographie par drone à Dakar"
            ],
            "remoteWork": "Vols obligatoirement sur place, traitement des cartes faisable à distance.",
            "entrepreneurship": "Création d'une agence de services de cartographie et pulvérisation de précision par drone pour les producteurs fruitiers et rizicoles ouest-africains."
        },
        "relatedJobSlugs": [
            "data-analyste-agricole",
            "ingenieur-agritech",
            "ingenieur-experimentation-vegetale",
            "cerealier"
        ],
        "connectedFamilies": [
            "audiovisuel-cinema",
            "technologies-donnees",
            "securite-defense"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Télépilote de Drone Studyrama",
                "url": "https://www.studyrama.com/formations/fiches-metiers/transport-logistique/telepilote-de-drone-107765",
                "source": "Studyrama"
            }
        ],
        "sources": [
            "Studyrama",
            "DGAC",
            "Fédération Professionnelle du Drone Civil (FPDC)"
        ],
        "interests": [
            "technologie-code",
            "explorer-decouvrir"
        ],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Selon Studyrama et les instituts agricoles, un seul survol de drone permet de moduler la dose d'azote sur un champ de blé, économisant en moyenne 20 à 30 kg d'engrais par hectare tout en augmentant la qualité de la récolte.",
            "pourquoi": "L'œil humain ne voit que le vert des feuilles, alors que la caméra multispectrale du drone 'voit' le rayonnement infrarouge qui révèle l'activité exacte de photosynthèse de chaque plante.",
            "a_retenir": "Le mariage parfait entre la passion du vol et la précision scientifique au service d'une agriculture zéro gaspillage."
        },
        "salaryRanges": {
            "france": {
                "raw": "2 000 - 3 200 € net/mois en entreprise ou facturation journalière 600 - 1 200 €/jour en indépendant (Source : Studyrama / Fiches Drones)",
                "range": "2 000 - 3 200 € net/mois en entreprise ou facturation journalière 600 - 1 200 €/jour en indépendant (Source : Studyrama / Fiches Drones)",
                "source": "APECITA / Marché agro-maritime"
            },
            "senegal": {
                "raw": "300 000 - 1 100 000 FCFA / mois (Source : Prestataires de services par drone)",
                "range": "300 000 - 1 100 000 FCFA / mois (Source : Prestataires de services par drone)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "data-analyste-agricole",
        "slug": "data-analyste-agricole",
        "title": "Data Analyste Agricole / Spécialiste IA & Données Agronomiques",
        "aliases": [
            "Agri data scientist",
            "Analyste de données agronomiques",
            "Consultant big data agricole"
        ],
        "icon": "📈",
        "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "AgriTech, Numérique & Agriculture de Précision",
        "domainId": "agritech-agriculture-numerique",
        "subdomain": "Big Data & IA agronomique",
        "sourceOnisep": true,
        "sourceStudyrama": false,
        "isEmerging": true,
        "level": "Bac +5 (Master Data Science ou Diplôme d'Ingénieur Agronome spécialisé Bio-informatique/Data)",
        "salary": "🇫🇷 France : 3 200 - 4 300 € brut/mois débutant (~38 400 - 51 600 €/an, Source : Onisep / APEC) • 🇸🇳 International / Afrique : 700 000 - 2 000 000 FCFA / mois (Source : Organismes de recherche, banques de données agricoles)",
        "simpleDefinition": "Le data analyste agricole collecte, nettoie et croise d'immenses masses de données (images satellites, capteurs de sol, données météo historiques, rendements de moissonneuses) pour créer des modèles d'intelligence artificielle prédisant récoltes, maladies et cours du marché.",
        "shortDescription": "Fiche documentée par Onisep, cet explorateur de la donnée agricole transforme les téraoctets des champs connectés en insights agronomiques stratégiques.",
        "longDescription": "Avec les tracteurs guidés par satellite, les sondes IoT et les constellations de satellites d'observation terrestre (Copernicus Sentinel), l'agriculture est devenue un secteur de pointe du Big Data. Le data analyste agricole écrit des algorithmes sous Python et R pour nettoyer ces données bruitées par la météo et construire des modèles de prédiction du rendement du blé trois mois avant la moisson, ou pour anticiper les attaques de criquets ou de rouille brune.",
        "mainObjective": "Transformer les données massives de l'agriculture en prédictions fiables pour sécuriser la production alimentaire et anticiper les crises climatiques.",
        "companyRole": "Cerveau analytique créateur des algorithmes d'intelligence agronomique prédictive.",
        "workEnvironment": [
            "💻 Bureaux modernes de startups, coopératives ou centres de recherche",
            "🏠 Télétravail fréquent sur serveurs distants et GPU cloud",
            "🌾 Échanges réguliers avec les ingénieurs agronomes de terrain pour calibrer les modèles"
        ],
        "missions": [
            "Collecter et harmoniser des jeux de données agronomiques hétérogènes (sols, météo, satellites, moissonneuses)",
            "Concevoir et entraîner des modèles de machine learning et deep learning prédictifs",
            "Évaluer la précision des prévisions de rendement en les comparant aux pesées réelles de récolte",
            "Créer des dashboards interactifs et des visualisations cartographiques claires pour les conseillers",
            "Veiller à la protection et à la souveraineté des données privées des agriculteurs (RGPD, charte Data-Agri)"
        ],
        "typicalDay": [
            {
                "time": "09:00",
                "title": "Pipeline de traitement des données satellites Sentinel-2",
                "desc": "Automatisation du téléchargement des bandes spectrales et suppression des pixels couverts par des nuages."
            },
            {
                "time": "11:00",
                "title": "Entraînement d'un modèle de prédiction de rendement sous Python",
                "desc": "Ajustement des hyperparamètres d'un algorithme XGBoost croisant 10 ans de météo et de dates de semis."
            },
            {
                "time": "14:30",
                "title": "Réunion avec les généticiens semenciers",
                "desc": "Présentation des corrélations découvertes entre résistance génétique à la sécheresse et profils thermiques foliaires."
            },
            {
                "time": "16:30",
                "title": "Déploiement du modèle sur l'API de production",
                "desc": "Conteneurisation Docker du script prédictif pour alimenter l'application mobile des agriculteurs."
            }
        ],
        "skills": {
            "technical": [
                "Programmation scientifique en Python (Pandas, Scikit-learn, PyTorch) et R",
                "Traitement de données spatiales et télédétection (Rasterio, GeoPandas, Google Earth Engine)",
                "Architectures Big Data et bases de données spatiales (PostGIS, SQL, Cloud AWS/GCP)",
                "Mathématiques, biostatistiques et machine learning",
                "Compréhension fine des cycles physiologiques des cultures"
            ],
            "human": [
                "Rigueur méthodologique et esprit critique face aux biais statistiques",
                "Capacité à collaborer avec des agronomes purs sans jargon geek",
                "Créativité pour trouver des angles d'analyse inédits",
                "Autonomie et curiosité intellectuelle permanente"
            ],
            "tools": [
                "Jupyter Notebooks et environnements cloud GPU",
                "Google Earth Engine et plateformes Copernicus",
                "Bases de données SQL et GeoPandas",
                "Outils de dataviz (Power BI, Streamlit, Tableau)"
            ],
            "analytical": [
                "Validation croisée de modèles prédictifs spatio-temporels",
                "Détection des anomalies de données capteurs au champ"
            ]
        },
        "specializations": [
            "Prédiction des rendements et modélisation de récolte",
            "Vision par ordinateur pour le phénotypage haut débit des plantes",
            "Analyse de données génomiques végétales et animales",
            "Modélisation des risques climatiques pour les assurances agricoles"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Bac +2",
                    "title": "Prépa Scientifique ou Licence Mathématiques / Informatique",
                    "desc": "Bases solides en mathématiques, algèbre linéaire et programmation."
                },
                {
                    "step": "Bac +5",
                    "title": "Master Data Science / IA ou Diplôme d'Ingénieur Agronome spécialité Bio-informatique/Data",
                    "desc": "La double culture agronomie + data science est la plus recherchée sur le marché."
                }
            ],
            "schools": [
                {
                    "name": "Institut Agro / AgroParisTech (Filières Data Science pour le Vivant) — France",
                    "country": "France",
                    "scope": "International"
                },
                {
                    "name": "Universités d'Orsay, Sorbonne, Lyon — Masters Data Science",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar - Chaire IA) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certifications Cloud Data Engineer (Google Cloud / AWS)",
                "Certification Data-Agri (éthique des données agricoles)"
            ],
            "schoolSubjects": [
                "Statistiques avancées",
                "Machine Learning",
                "Télédétection",
                "Agronomie générale"
            ]
        },
        "career": {
            "sectors": [
                "Grandes entreprises semencières mondiales (Vilmorin, Corteva, Syngenta)",
                "Instituts de recherche publique (INRAE, Cirad, ISRA)",
                "Startups AgriTech et plateformes de données agricoles",
                "Compagnies d'assurance et réassurance agricole mondiales"
            ],
            "employerTypes": [
                "Multinationales de l'agro-fourniture",
                "Centres de recherche agronomique",
                "Cabinets de conseil en modélisation climatique"
            ],
            "evolution": "Data Analyste junior ➔ Data Scientist agricole senior ➔ Lead Data Architecte du vivant ➔ Chief Data Officer (CDO) de groupe agroalimentaire",
            "pros": "Salaires parmi les plus élevés du secteur agricole, forte possibilité de télétravail international, travail sur des défis mondiaux majeurs (sécurité alimentaire sous réchauffement climatique).",
            "cons": "Données agricoles réelles souvent très bruitées par les aléas climatiques rendant l'apprentissage des modèles complexe, travail assis devant écran prolongé."
        },
        "gettingStarted": {
            "beginnerProject": "Télécharger un jeu de données public de rendements de blé sur Kaggle et analyser les corrélations avec la pluviométrie.",
            "intermediateProject": "Écrire un script sous Google Earth Engine pour extraire et tracer l'évolution du NDVI d'une parcelle sur 5 ans à partir de Sentinel-2.",
            "advancedProject": "Entraîner un modèle de deep learning sous PyTorch capable de reconnaître 10 maladies foliaires de la tomate à partir d'un jeu de photos de feuilles.",
            "portfolioIdeas": [
                "Dashboard interactif Streamlit d'analyse de rendements",
                "Notebook documenté d'extraction de séries temporelles satellites"
            ]
        },
        "aiImpact": {
            "level": "Révolutionnaire",
            "summary": "Ce professionnel est le créateur direct des solutions d'IA agricole qui révolutionneront le secteur dans les vingt prochaines années.",
            "automatedTasks": [
                "Nettoyage automatique des valeurs aberrantes de capteurs",
                "Pipeline automatique de segmentation d'images satellites"
            ],
            "emergingSkills": [
                "Entraînement de Foundation Models dédiés aux biosciences végétales",
                "IA explicable pour prouver aux agriculteurs le bien-fondé d'une préconisation"
            ],
            "humanEdge": "La confrontation des corrélations statistiques trouvées par l'algorithme aux lois réelles et immuables de la biologie végétale."
        },
        "africaContext": {
            "senegalInsight": "En Afrique de l'Ouest, les data analystes agricoles exploitent les satellites pour créer des alertes précoces contre les sécheresses sahéliennes et les invasions de criquets pèlerins, sauvant des millions de personnes de la famine (projets Cirad, CILSS, FAO).",
            "localSectors": [
                "Centre Régional AGRHYMET (CILSS Niamey / Dakar)",
                "Centre de Suivi Écologique (CSE Dakar)",
                "Centres de recherche agronomique (ISRA, Cirad)"
            ],
            "remoteWork": "Télétravail total parfaitement possible avec connexion Internet haut débit.",
            "entrepreneurship": "Création d'une plateforme d'intelligence de marché prédisant les cours hebdomadaires des légumes à Dakar pour éviter les pertes post-récolte."
        },
        "relatedJobSlugs": [
            "ingenieur-agritech",
            "telepilote-drone-agricole",
            "ingenieur-experimentation-vegetale",
            "ingenieur-agronome"
        ],
        "connectedFamilies": [
            "technologies-donnees",
            "recherche-sciences",
            "environnement-climat"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Data Analyste Onisep",
                "url": "https://www.onisep.fr/ressources/univers-metier/metiers/data-analyst",
                "source": "Onisep"
            }
        ],
        "sources": [
            "Onisep",
            "INRAE",
            "AgDataHub",
            "La Ferme Digitale"
        ],
        "interests": [
            "technologie-code",
            "resoudre-problemes"
        ],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Selon l'Onisep et l'INRAE, la constellation européenne de satellites Sentinel photographie gratuitement chaque parcelle agricole de France et de la planète tous les 5 jours avec une résolution de 10 mètres.",
            "pourquoi": "Cette mine d'or colossale de données ouvertes permet aux data analystes agricoles de suivre la santé végétale de continents entiers en direct depuis leur bureau.",
            "a_retenir": "Le profil le plus moderne et convoité de l'agriculture du futur, où les algorithmes sauvent les récoltes."
        },
        "salaryRanges": {
            "france": {
                "raw": "3 200 - 4 300 € brut/mois débutant (~38 400 - 51 600 €/an, Source : Onisep / APEC)",
                "range": "3 200 - 4 300 € brut/mois débutant (~38 400 - 51 600 €/an, Source : Onisep / APEC)",
                "source": "Onisep / Studyrama"
            },
            "senegal": {
                "raw": "700 000 - 2 000 000 FCFA / mois (Source : Organismes de recherche, banques de données agricoles)",
                "range": "700 000 - 2 000 000 FCFA / mois (Source : Organismes de recherche, banques de données agricoles)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "chef-exploitation-agricole",
        "slug": "chef-exploitation-agricole",
        "title": "Chef d'Exploitation Agricole / Entrepreneur Agricole",
        "aliases": [
            "Agriculteur exploitant",
            "Cheffe d'exploitation",
            "Agri-entrepreneur",
            "Fermier chef d'entreprise"
        ],
        "icon": "🚜",
        "image": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Entrepreneuriat, Installation & Développement Rural",
        "domainId": "entrepreneuriat-developpement-rural",
        "subdomain": "Entrepreneuriat & gestion d'exploitation",
        "sourceOnisep": true,
        "sourceStudyrama": true,
        "isEmerging": false,
        "level": "Bac Pro CGEA ou BTSA ACSE (Diplôme conférant la Capacité Professionnelle Agricole)",
        "salary": "🇫🇷 France : Rémunération variable selon taille et filière : 1 800 - 5 000 €+ net/mois + constitution d'un patrimoine foncier et matériel (Source : Onisep / Chambres d'Agriculture) • 🇸🇳 Sénégal : 300 000 - 2 500 000 FCFA / mois selon récoltes",
        "simpleDefinition": "Le chef d'exploitation agricole est le dirigeant d'une entreprise agricole : il prend toutes les décisions stratégiques, gère les investissements, cultive la terre ou élève les animaux et vend sa production.",
        "shortDescription": "Fiche documentée par Onisep et Studyrama, c'est le chef d'orchestre polyvalent du monde rural qui allie savoir-faire agronomique ancestral, pilotage financier de pointe et amour de la liberté d'entreprendre.",
        "longDescription": "Être agriculteur aujourd'hui, c'est diriger une véritable entreprise. Le chef d'exploitation décide de l'assolement de ses terres, choisit ses variétés et ses bêtes, pilote des machines de haute technologie valant des centaines de milliers d'euros, négocie les contrats de vente avec les coopératives ou développe la vente directe en circuit court. Il doit être à la fois agronome, mécanicien, gestionnaire, juriste, commerçant et stratège face aux caprices du climat.",
        "mainObjective": "Faire prospérer son exploitation agricole de manière autonome et durable en assurant un revenu décent et la transmission de son patrimoine.",
        "companyRole": "Propriétaire ou gérant d'entreprise, employeur de main-d'œuvre et décisionnaire ultime.",
        "workEnvironment": [
            "🌾 Terres de cultures, prairies, bâtiments d'élevage et cours de ferme",
            "🚜 Cabine climatisée de tracteurs connectés et ateliers de réparation",
            "💻 Bureau pour le pilotage comptable, les déclarations PAC et les ventes"
        ],
        "missions": [
            "Définir la stratégie pluriannuelle de l'exploitation (choix des cultures, transition bio, énergies renouvelables)",
            "Conduire personnellement ou superviser l'ensemble des travaux des champs et des soins aux troupeaux",
            "Gérer la trésorerie, négocier les emprunts bancaires et piloter la rentabilité de chaque atelier",
            "Acheter les intrants au meilleur coût (semences, carburant, amendements) et commercialiser les récoltes",
            "Recruter, former et encadrer les ouvriers agricoles et saisonniers en garantissant leur sécurité"
        ],
        "typicalDay": [
            {
                "time": "06:00",
                "title": "Tournée matinale de la ferme",
                "desc": "Vérification des abreuvoirs, observation météo et lancement des chantiers de la journée avec l'équipe."
            },
            {
                "time": "08:30",
                "title": "Travaux de plein champ ou d'atelier",
                "desc": "Conduite du tracteur pour le semis de printemps ou la récolte des foins selon la saison."
            },
            {
                "time": "14:00",
                "title": "Gestion d'entreprise et achats",
                "desc": "Négociation avec le commercial de la coopérative pour l'achat groupé d'engrais organique et vente d'un lot de blé."
            },
            {
                "time": "18:00",
                "title": "Clôture de la journée et comptabilité",
                "desc": "Enregistrement des interventions de la journée dans le cahier d'épandage réglementaire sur logiciel."
            }
        ],
        "skills": {
            "technical": [
                "Polyvalence technique totale (agronomie, élevage, machinisme, hydraulique)",
                "Gestion comptable, fiscale et financière d'entreprise",
                "Stratégie de commercialisation (coopératives, négoce, circuits courts)",
                "Connaissance exhaustive de la réglementation environnementale et de la PAC",
                "Management et leadership d'équipes rurales"
            ],
            "human": [
                "Passion chevillée au corps et goût de l'indépendance",
                "Résilience mentale face aux aléas climatiques et de marché",
                "Sens aigu des responsabilités patrimoniales",
                "Polyvalence et capacité de décision rapide"
            ],
            "tools": [
                "Flotte complète d'agroéquipements modernes",
                "Logiciels de gestion parcellaire et comptable (Isagri, Smag Farmer)",
                "Consoles de guidage GPS RTK",
                "Smartphones pour le pilotage à distance des installations"
            ],
            "analytical": [
                "Calcul de la marge nette par hectare et de l'EBE",
                "Optimisation du calendrier des travaux selon la météo"
            ]
        },
        "specializations": [
            "Grandes cultures céréalières et oléagineuses",
            "Élevage laitier ou allaitant haute performance",
            "Maraîchage et arboriculture en circuits courts / vente directe",
            "Polyculture-élevage diversifiée avec agritourisme ou méthanisation"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Bac Pro / Bac",
                    "title": "Bac Pro CGEA (Conduite et Gestion de l'Entreprise Agricole)",
                    "desc": "Diplôme minimum requis pour obtenir la Capacité Professionnelle Agricole (CPA)."
                },
                {
                    "step": "Bac +2",
                    "title": "BTSA ACSE (Analyse, Conduite et Stratégie de l'Entreprise Agricole)",
                    "desc": "Diplôme recommandé pour acquérir les réflexes de vrai chef d'entreprise moderne."
                },
                {
                    "step": "Bac +5",
                    "title": "Diplôme d'Ingénieur Agronome",
                    "desc": "De plus en plus d'ingénieurs choisissent aujourd'hui de s'installer à la terre comme exploitants."
                }
            ],
            "schools": [
                {
                    "name": "Lycées agricoles de France dispensant le Bac Pro CGEA et BTS ACSE",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Écoles d'Ingénieurs Agronomes (UniLaSalle, Institut Agro, AgroParisTech)",
                    "country": "France",
                    "scope": "International"
                },
                {
                    "name": "Centre d'Initiation Horticole / ISFAR Bambey — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Capacité Professionnelle Agricole (CPA indispensable pour la Dotation Jeune Agriculteur)",
                "Certiphyto Décideur en Exploitation Agricole"
            ],
            "schoolSubjects": [
                "Agronomie",
                "Gestion d'entreprise",
                "Zootechnie",
                "Machinisme agricole"
            ]
        },
        "career": {
            "sectors": [
                "Exploitations individuelles ou sociétaires (GAEC, EARL, SCEA)",
                "Fermes collectives et tiers-lieux agricoles nourriciers",
                "Grandes entreprises agricoles familiales de plusieurs générations",
                "Fermes urbaines innovantes et microfermes bio-intensives"
            ],
            "employerTypes": [
                "Statut d'exploitant agricole indépendant (chef d'entreprise)",
                "Gérant de société civile d'exploitation agricole"
            ],
            "evolution": "Jeune agriculteur installé ➔ Exploitant confirmé ➔ Responsable d'organismes agricoles (président de CUMA, administrateur de coopérative, élu chambre d'agriculture)",
            "pros": "Liberté absolue d'être son propre patron, fierté immense de nourrir ses concitoyens et de façonner la terre, vie saine en pleine nature, transmission d'un patrimoine à ses enfants.",
            "cons": "Lourdeur des investissements initiaux (centaines de milliers d'euros d'emprunts), absence de congés faciles en élevage, aléas climatiques (sécheresse, grêle) pouvant anéantir un an de travail."
        },
        "gettingStarted": {
            "beginnerProject": "Effectuer des stages de plusieurs mois dans trois exploitations différentes (grandes cultures, élevage, maraîchage) pour tester ses affinités.",
            "intermediateProject": "Suivre le Plan de Professionnalisation Personnalisé (PPP) auprès de la Chambre d'Agriculture de son département.",
            "advancedProject": "Rédiger le Plan d'Entreprise (PE) complet sur 5 ans pour solliciter la Dotation Jeune Agriculteur (DJA).",
            "portfolioIdeas": [
                "Étude de marché d'un projet d'installation",
                "Bilan financier prévisionnel d'une reprise de ferme"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA devient le bras droit stratégique du chef d'exploitation, lui recommandant chaque matin les parcelles à récolter ou à traiter en priorité.",
            "automatedTasks": [
                "Saisie automatique du registre parcellaire par géolocalisation du tracteur",
                "Comparaison automatisée des offres de rachat de céréales"
            ],
            "emergingSkills": [
                "Pilotage de robots désherbeurs autonomes",
                "Gestion de la transition énergétique de la ferme (panneaux solaires, biogaz)"
            ],
            "humanEdge": "L'intuition paysanne, le courage face aux tempêtes et l'amour viscéral de sa terre que nulle machine ne connaîtra jamais."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'entrepreneuriat agricole moderne attire une nouvelle génération de cadres et diplômés urbains qui investissent dans des fermes intégrées modernes (mangues, maraîchage goutte-à-goutte, aviculture, moutons Ladoum) pour créer de la richesse locale.",
            "localSectors": [
                "Pôles d'agro-business des Niayes et de la Petite Côte",
                "Grandes fermes de la vallée du fleuve Sénégal (Podor, Saint-Louis)",
                "Agri-entrepreneuriat des jeunes appuyé par la DER (Délégation à l'Entrepreneuriat Rapide)"
            ],
            "remoteWork": "Gestion stratégique hybride possible, présence physique indispensable aux moments clés.",
            "entrepreneurship": "Création d'une ferme agroécologique intégrée combinant maraîchage goutte-à-goutte, arboriculture fruitière et petit élevage avicole rentable."
        },
        "relatedJobSlugs": [
            "directeur-cooperative-agricole",
            "conseiller-gestion-agricole",
            "cerealier",
            "maraicher"
        ],
        "connectedFamilies": [
            "gestion-finance",
            "commerce-marketing",
            "environnement-climat"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Agriculteur / Agricultrice Onisep",
                "url": "https://www.onisep.fr/ressources/univers-metier/metiers/agriculteur-agricultrice",
                "source": "Onisep"
            }
        ],
        "sources": [
            "Onisep",
            "Studyrama",
            "Chambres d'Agriculture",
            "Jeunes Agriculteurs"
        ],
        "interests": [
            "nature-environnement",
            "construire-fabriquer"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon l'Onisep et le Ministère de l'Agriculture, près de 200 000 exploitants agricoles français partiront à la retraite d'ici 2030, représentant un défi immense de renouvellement des générations.",
            "pourquoi": "L'accès à la terre et le coût élevé des reprises nécessitent l'installation de nouveaux profils souvent non issus du milieu agricole (NIMA), porteurs de projets innovants.",
            "a_retenir": "Le plus ancien et le plus noble des métiers de l'humanité, aujourd'hui métamorphosé en une aventure entrepreneuriale de haute technologie."
        },
        "salaryRanges": {
            "france": {
                "raw": "Rémunération variable selon taille et filière : 1 800 - 5 000 €+ net/mois + constitution d'un patrimoine foncier et matériel (Source : Onisep / Chambres d'Agriculture)",
                "range": "Rémunération variable selon taille et filière : 1 800 - 5 000 €+ net/mois + constitution d'un patrimoine foncier et matériel (Source : Onisep / Chambres d'Agriculture)",
                "source": "Onisep / Studyrama"
            },
            "senegal": {
                "raw": "300 000 - 2 500 000 FCFA / mois selon récoltes",
                "range": "300 000 - 2 500 000 FCFA / mois selon récoltes",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "directeur-cooperative-agricole",
        "slug": "directeur-cooperative-agricole",
        "title": "Directeur de Coopérative Agricole / Manager Agro-Territorial",
        "aliases": [
            "Directeur de coopérative",
            "Directrice d'organisme stockeur",
            "Manager de filière coopérative"
        ],
        "icon": "🏛️",
        "image": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Entrepreneuriat, Installation & Développement Rural",
        "domainId": "entrepreneuriat-developpement-rural",
        "subdomain": "Management coopératif & développement territorial",
        "sourceOnisep": false,
        "sourceStudyrama": true,
        "isEmerging": false,
        "level": "Bac +5 (Diplôme d'Ingénieur Agronome ou Master Management des Entreprises)",
        "salary": "🇫🇷 France : 3 800 - 5 500 €+ brut/mois selon taille de la coopérative (~45 000 - 75 000 €/an, Source : Studyrama / La Coopération Agricole) • 🇸🇳 Sénégal : 600 000 - 2 200 000 FCFA / mois (Source : Grandes unions de coopératives)",
        "simpleDefinition": "Le directeur de coopérative agricole pilote une entreprise collective appartenant aux agriculteurs adhérents : il gère la collecte des grains ou du lait, la transformation industrielle, la vente aux grands marchés et l'approvisionnement en semences.",
        "shortDescription": "Fiche documentée par Studyrama, ce grand capitaine d'industrie rurale allie vision managériale d'envergure et valeurs démocratiques du modèle coopératif ('un homme, une voix').",
        "longDescription": "Les coopératives agricoles françaises (comme InVivo, Agrial, Sodiaal, Axéréal) pèsent des milliards d'euros de chiffre d'affaires et 3 marques alimentaires sur 4 en supermarché. Le directeur de coopérative rend compte à un conseil d'administration composé exclusivement d'agriculteurs élus. Il manage des centaines de salariés (silos, usines, agronomes de terrain), négocie les contrats de vente avec la grande distribution internationale et investit dans les infrastructures territoriales pour redistribuer un maximum de valeur ajoutée à ses adhérents paysans.",
        "mainObjective": "Développer la performance économique et industrielle de la coopérative pour valoriser au prix le plus juste la production des agriculteurs membres.",
        "companyRole": "Directeur général exécutif, stratège d'entreprise et garant des valeurs coopératives de solidarité territoriale.",
        "workEnvironment": [
            "🏢 Siège de la coopérative et comités de direction",
            "🏭 Silos portuaires, usines de transformation et plateformes logistiques",
            "🌾 Assemblées générales d'agriculteurs et réunions de terrain régionales"
        ],
        "missions": [
            "Mettre en œuvre la stratégie validée par le Conseil d'Administration d'agriculteurs",
            "Superviser les opérations de collecte, stockage des grains, logistique ferroviaire/portuaire et transformation",
            "Négocier les contrats de vente de gros volumes avec les meuniers, industriels et marchés internationaux",
            "Gérer les finances, les investissements d'infrastructures lourdes et la redistribution des ristournes aux adhérents",
            "Impulser la transition agroécologique et bas-carbone sur l'ensemble du bassin de production de la coopérative"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Comité de direction hebdomadaire",
                "desc": "Revue des flux de collecte de grains des silos et bilan des cours de marché de l'Euronext."
            },
            {
                "time": "11:00",
                "title": "Rendez-vous avec le Président de la coopérative",
                "desc": "Point stratégique avec l'agriculteur président sur le projet d'investissement dans un séchoir à maïs biomasse."
            },
            {
                "time": "14:30",
                "title": "Négociation commerciale avec un grand industriel",
                "desc": "Finalisation d'un contrat pluriannuel de fourniture de blé meunier tracé sous charte durable."
            },
            {
                "time": "17:30",
                "title": "Section cantonale avec les adhérents agriculteurs",
                "desc": "Présentation des comptes de l'exercice et débat ouvert avec 80 agriculteurs coopérateurs."
            }
        ],
        "skills": {
            "technical": [
                "Gouvernance coopérative et statut spécifique des sociétés coopératives agricoles (SCA)",
                "Management stratégique et financier d'entreprise multi-sites",
                "Trading de matières premières agricoles et marchés à terme (Matif, Euronext)",
                "Logistique lourde (silos, fret ferroviaire et maritime)",
                "Filières agro-industrielles et négociations de la grande distribution"
            ],
            "human": [
                "Leadership démocratique et sens aigu de la diplomatie",
                "Facilité d'écoute et respect profond des agriculteurs",
                "Charisme en prise de parole publique devant des centaines de personnes",
                "Vision stratégique et résistance au stress"
            ],
            "tools": [
                "Systèmes ERP intégrés de coopérative (SAP, Agro-ERP)",
                "Terminaux de cours de matières premières (Bloomberg, Euronext)",
                "Logiciels de traçabilité de collecte et logistique",
                "Tableaux de bord financiers et de gestion prévisionnelle"
            ],
            "analytical": [
                "Analyse des comptes consolidés de groupe coopératif",
                "Calcul de péréquation et prix de base payé au producteur"
            ]
        },
        "specializations": [
            "Grandes coopératives céréalières et oléoprotéagineuses (métiers du grain)",
            "Coopératives laitières et transformation fromagère",
            "Coopératives vinicoles (caves coopératives)",
            "Coopératives d'approvisionnement et services (CUMA)"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Bac +2",
                    "title": "Prépa BCPST ou Prépa Économique et Commerciale (HEC)",
                    "desc": "Bases scientifiques et économiques d'excellence."
                },
                {
                    "step": "Bac +5",
                    "title": "Diplôme d'Ingénieur Agronome ou Master Grande École de Commerce (ESSEC, ESCP, HEC)",
                    "desc": "Diplômes de prédilection pour accéder à la direction de grands groupes coopératifs."
                }
            ],
            "schools": [
                {
                    "name": "Grandes écoles d'agronomie (AgroParisTech, Institut Agro, UniLaSalle) — France",
                    "country": "France",
                    "scope": "International"
                },
                {
                    "name": "Grandes écoles de management (HEC, ESSEC, EM Lyon) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centre Supérieur de Formation Professionnelle de Dakar — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Formation des dirigeants coopératifs (La Coopération Agricole)",
                "Certification gouvernance d'entreprise"
            ],
            "schoolSubjects": [
                "Management d'entreprise",
                "Économie agricole",
                "Gouvernance",
                "Finance d'entreprise"
            ]
        },
        "career": {
            "sectors": [
                "Grandes coopératives agricoles régionales et nationales",
                "Unions de coopératives et groupes agroalimentaires coopératifs",
                "Fédérations régionales et nationales de la coopération agricole",
                "Organismes professionnels agricoles consulaires"
            ],
            "employerTypes": [
                "Sociétés coopératives agricoles (SCA)",
                "Groupes coopératifs agroalimentaires",
                "Organismes professionnels agricoles"
            ],
            "evolution": "Responsable de pôle filière en coopérative ➔ Directeur d'exploitation d'une branche ➔ Directeur Général Adjoint ➔ Directeur Général de coopérative agricole",
            "pros": "Poste de haute envergure à fort impact économique régional, modèle d'entreprise non délocalisable par nature, rémunération de haut niveau, fierté de servir la cause paysanne.",
            "cons": "Équilibre politique complexe entre exigences de rentabilité économique pure et attentes de rémunération immédiate des agriculteurs adhérents, charge de travail intense."
        },
        "gettingStarted": {
            "beginnerProject": "Étudier les statuts d'une cave coopérative ou d'une coopérative céréalière locale pour comprendre le principe 'une personne, une voix'.",
            "intermediateProject": "Analyser le rapport annuel d'un grand groupe coopératif français (Agrial, Axéréal ou Sodiaal) et identifier la répartition de la valeur.",
            "advancedProject": "Simuler une négociation commerciale de vente de 10 000 tonnes de blé meunier sur les marchés à terme Euronext avec couverture contre les risques de baisse.",
            "portfolioIdeas": [
                "Analyse financière comparée entreprise privée vs coopérative agricole",
                "Projet stratégique de décarbonation des silos d'une coopérative"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'IA optimise les plans logistiques de collecte des camions et silos lors du pic des moissons pour désengorger les routes et réduire les coûts de carburant.",
            "automatedTasks": [
                "Optimisation sous contraintes des tournées de ramassage du lait",
                "Prévision algorithmique des volumes de récolte entrants aux silos"
            ],
            "emergingSkills": [
                "Pilotage de la traçabilité ESG de la coopérative",
                "Gestion de la transition énergétique des adhérents (achats groupés photovoltaïques)"
            ],
            "humanEdge": "La légitimité politique et la capacité à rassembler des centaines d'agriculteurs aux intérêts divergents autour d'un grand projet commun."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les coopératives et unions de producteurs (filière arachidière avec la SONACOS, riziers du delta avec l'UNIS, producteurs d'oignon des Niayes) sont les seules structures capables de peser face aux importateurs et de sécuriser les prix d'achat aux petits paysans.",
            "localSectors": [
                "Unions régionales de coopératives de la vallée du fleuve et du bassin arachidier",
                "Société Nationale de Commercialisation des Oléagineux du Sénégal (SONACOS)",
                "Fédération Nationale des Producteurs Maraîchers"
            ],
            "remoteWork": "Poste de direction générale avec présence physique indispensable.",
            "entrepreneurship": "Création d'une coopérative nouvelle génération fédérant les jeunes agri-preneurs pour massifier les achats d'intrants et commercialiser directement en supermarché à Dakar."
        },
        "relatedJobSlugs": [
            "chef-exploitation-agricole",
            "conseiller-gestion-agricole",
            "charge-affaires-agricoles",
            "ingenieur-agroalimentaire"
        ],
        "connectedFamilies": [
            "gestion-finance",
            "direction-strategie",
            "commerce-marketing"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Directeur de Coopérative Studyrama",
                "url": "https://www.studyrama.com/formations/fiches-metiers/agriculture",
                "source": "Studyrama"
            }
        ],
        "sources": [
            "Studyrama",
            "La Coopération Agricole",
            "APECITA"
        ],
        "interests": [
            "negocier-convaincre",
            "resoudre-problemes"
        ],
        "saviezVous": {
            "statut": "metier_stable",
            "fait": "Selon La Coopération Agricole et Studyrama, 3 marques alimentaires sur 4 achetées par les Français en grande surface appartiennent en réalité à des coopératives d'agriculteurs (Yoplait, Candia, D'aucy, Paysan Breton, etc.).",
            "pourquoi": "Contrairement aux entreprises privées classiques, une coopérative agricole ne peut être délocalisée ni rachetée par un fonds spéculatif étranger : ses propriétaires sont les paysans ancrés sur leur terre.",
            "a_retenir": "Le poste de direction suprême du monde agricole, alliant puissance économique moderne et solidarité paysanne originelle."
        },
        "salaryRanges": {
            "france": {
                "raw": "3 800 - 5 500 €+ brut/mois selon taille de la coopérative (~45 000 - 75 000 €/an, Source : Studyrama / La Coopération Agricole)",
                "range": "3 800 - 5 500 €+ brut/mois selon taille de la coopérative (~45 000 - 75 000 €/an, Source : Studyrama / La Coopération Agricole)",
                "source": "APECITA / Marché agro-maritime"
            },
            "senegal": {
                "raw": "600 000 - 2 200 000 FCFA / mois (Source : Grandes unions de coopératives)",
                "range": "600 000 - 2 200 000 FCFA / mois (Source : Grandes unions de coopératives)",
                "source": "Filières agricoles & agro-industries (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "capitaine-proprietaire",
        "slug": "capitaine-proprietaire",
        "title": "Capitaine-Propriétaire de Bateau de Pêche / Patron de Pêche",
        "aliases": [
            "Capitaine de pêche",
            "Pêcheur patron",
            "Armateur artisan",
            "Capitaine de navire de pêche"
        ],
        "icon": "⚓",
        "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Pêche, Aquaculture & Ressources Marines",
        "domainId": "peche-aquaculture",
        "subdomain": "Pêche & capture",
        "sourceEvoluPeches": true,
        "cnpCode": "8261 et 8262",
        "isEmerging": false,
        "level": "Diplôme d'études professionnelles (DEP Pêche) ou Brevet de Capitaine de pêche",
        "salary": "🇨🇦 Québec : 50 000 - 130 000 $ CAD/an selon volume et valeur des captures de la saison (Source : ÉvoluPêches / Pêches maritimes) • 🇸🇳 Sénégal : 450 000 - 1 800 000 FCFA / mois (Capitaine de pêche côtière / hauturière - ENFM Dakar)",
        "simpleDefinition": "Le capitaine-propriétaire dirige le bateau de pêche et son équipage en mer : il pilote le navire, planifie les campagnes au large, localise les bancs de poissons et gère son entreprise comme un chef d'entreprise indépendant.",
        "shortDescription": "Fiche documentée par ÉvoluPêches, ce chef de bord allie navigation maritime experte, sens tactique de la capture et responsabilités de gestion entrepreneuriale.",
        "longDescription": "Agissant en tant que capitaine ou propriétaire d'un bateau de pêche, ce marin d'expérience assure le bon fonctionnement de son navire et des équipements de capture (chaluts, casiers, filets maillants, lignes). Comme le documente ÉvoluPêches, il assume avec polyvalence l'ensemble des tâches, de la préparation du bateau et des apparaux jusqu'à l'entreposage frigorifique des prises, le respect des quotas de capture et la gestion humaine de son équipage. La source précise également qu'une personne peut être capitaine sans être propriétaire.",
        "mainObjective": "Assurer la sécurité de l'équipage en mer et maximiser la rentabilité des campagnes de pêche dans le respect des quotas et des règles de conservation de la ressource.",
        "companyRole": "Dirigeant d'entreprise maritime, maître à bord après Dieu et garant de la sécurité nautique.",
        "characteristics": [
            "Goût de l'aventure",
            "Bonne condition physique et pied marin",
            "Travail manuel",
            "Esprit d'équipe",
            "Intérêt pour les équipements hydrauliques et les instruments de navigation et de communication radio"
        ],
        "regions": [
            "Côte-Nord",
            "Bas-Saint-Laurent",
            "Gaspésie",
            "Îles-de-la-Madeleine"
        ],
        "sourceContext": "Québec / Canada (ÉvoluPêches)",
        "workEnvironment": [
            "🌊 Passerelle de commandement et pont de pêche d'un navire en mer",
            "📻 Instruments électroniques de radionavigation (GPS, sondeurs bathymétriques, radars, VHF)",
            "⚓ Ports de pêche, criées et quais de débarquement pour la commercialisation"
        ],
        "missions": [
            "Piloter le bateau de pêche et naviguer en toute sécurité selon la météo et les marées",
            "Planifier et effectuer les voyages de pêche en ciblant les zones autorisées et poissonneuses",
            "Préparer et entretenir le bateau, les moteurs et les engins de pêche (casiers, filets, treuils)",
            "Superviser les manœuvres de capture, de tri, de manipulation et d'entreposage soigné des prises sous glace",
            "Gérer l'entreprise (comptabilité, vente des captures, carburant) et manager l'équipage avec leadership"
        ],
        "typicalDay": [
            {
                "time": "04:00",
                "title": "Appareillage et consultation météo marine",
                "desc": "Contrôle des bulletins de vent et de houle, vérification des niveaux d'huile et démarrage des moteurs du navire."
            },
            {
                "time": "07:30",
                "title": "Mise à l'eau des engins et détection sonar",
                "desc": "Repérage des bancs de poissons au sondeur couleur et largage coordonné des casiers à homard ou du chalut."
            },
            {
                "time": "13:00",
                "title": "Virage des engins et tri sur le pont",
                "desc": "Remontée des filets au treuil hydraulique, tri des prises par taille et mise en cale réfrigérée immédiate."
            },
            {
                "time": "18:30",
                "title": "Retour à quai et débarquement commercial",
                "desc": "Accostage au port, pesée officielle des débarquements avec les acheteurs et remplissage du journal de bord."
            }
        ],
        "skills": {
            "technical": [
                "Navigation maritime hauturière et côtière (cartes marines, règles de barre)",
                "Maniement des instruments de radionavigation (radar, sondeur multifaisceaux, AIS, VHF SMDSM)",
                "Hydraulique navale et mécanique des treuils de pêche",
                "Réglementation des pêches maritimes, quotas et gestion des permis",
                "Gestion d'entreprise, comptabilité et commercialisation des produits de la mer"
            ],
            "human": [
                "Sang-froid exceptionnel et prise de décision rapide en situation de mer hostile",
                "Leadership naturel et capacité à motiver et souder un équipage confiné",
                "Pied marin et endurance physique face aux nuits courtes et au froid",
                "Sens aigu des responsabilités humaines"
            ],
            "tools": [
                "Radars marins et sondeurs acoustiques de pêche (Furuno, Simrad)",
                "Treuils, enrouleurs et apparaux hydrauliques de pont",
                "Systèmes de communication radio VHF et balises de détresse Cospas-Sarsat",
                "Logiciels de navigation électronique (MaxSea / TimeZero)"
            ],
            "analytical": [
                "Analyse des données océanographiques (température de l'eau, courants, thermocline)",
                "Calcul de rentabilité au mille nautique parcouru et ratio carburant/prises"
            ]
        },
        "specializations": [
            "Pêche aux crustacés (homard, crabe des neiges, crevettes)",
            "Pêche aux poissons de fond (flétan, morue)",
            "Pêche pélagique côtière",
            "Armement artisanal multi-espèces"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Diplôme professionnel",
                    "title": "Diplôme d'études professionnelles (DEP) en pêche professionnelle",
                    "desc": "Formation québécoise de référence dispensée à l'ÉPAQ ou au CSS des Îles."
                },
                {
                    "step": "Certifications maritimes",
                    "title": "Brevets de capacité de capitaine de pêche (Transports Canada / Affaires Maritimes)",
                    "desc": "Validation des heures de mer et examens de sécurité en mer (FUM / STCW)."
                },
                {
                    "step": "Perfectionnement",
                    "title": "Formation continue en gestion d'entreprise de pêche",
                    "desc": "Maîtrise des aspects financiers, fiscaux et du transfert de permis."
                }
            ],
            "schools": [
                {
                    "name": "École des pêches et de l’aquaculture du Québec (ÉPAQ) — Grande-Rivière, Québec",
                    "country": "Canada",
                    "scope": "International"
                },
                {
                    "name": "Centre de formation professionnelle des Îles (CSS des Îles) — Québec",
                    "country": "Canada",
                    "scope": "Canada"
                },
                {
                    "name": "École Nationale de Formation Maritime (ENFM Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Lycées professionnels maritimes (Boulogne, Saint-Malo, Le Guilvinec) — France",
                    "country": "France",
                    "scope": "France"
                }
            ],
            "certifications": [
                "Certificat de Capitaine de pêche (classe 4 / 3)",
                "Certificat restreint d'opérateur radio maritime (CRO)",
                "Formation aux fonctions d'urgence en mer (FUM)"
            ],
            "schoolSubjects": [
                "Navigation maritime",
                "Météorologie",
                "Sécurité en mer",
                "Gestion d'entreprise"
            ]
        },
        "career": {
            "sectors": [
                "Flottes de pêche commerciale artisanale et semi-hauturière",
                "Armements maritimes coopératifs ou privés",
                "Expéditions de pêche scientifique et d'observation"
            ],
            "employerTypes": [
                "Travailleur autonome / Propriétaire de son navire",
                "Armateurs de bateaux de pêche"
            ],
            "evolution": "Aide-pêcheur ➔ Matelot qualifié ➔ Capitaine salarié ➔ Capitaine-propriétaire de son propre bateau ➔ Armateur de plusieurs navires",
            "pros": "Liberté incomparable de naviguer en mer ouverte, contact puissant avec la nature sauvage, rémunérations très substantielles lors des belles campagnes de capture.",
            "cons": "Métier à haut risque face aux tempêtes et avaries, éloignement familial, investissements en capital considérables (achat du navire et des permis de pêche)."
        },
        "gettingStarted": {
            "beginnerProject": "Embarquer comme observateur ou aide-pêcheur sur une sortie de marée côtière pour vérifier sa résistance au mal de mer et son endurance.",
            "intermediateProject": "Obtenir son certificat de secourisme en mer et s'entraîner à la lecture d'une carte marine et au tracé de route avec dérive.",
            "advancedProject": "Monter le plan d'affaires prévisionnel complet d'acquisition d'un bateau de pêche d'occasion avec estimation des quotas et amortissement des apparaux.",
            "portfolioIdeas": [
                "Journal de bord de navigation annoté",
                "Plan d'entretien annuel préventif d'un navire de pêche"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'IA améliore la prévision météo ultra-locale et cartographie les bancs de poissons par analyse thermique satellitaire, mais le sens marin et le pilotage dans la tempête restent 100% humains.",
            "automatedTasks": [
                "Calcul automatique des routes optimales d'évitement des tempêtes",
                "Enregistrement automatique des captures sur journal de pêche électronique"
            ],
            "emergingSkills": [
                "Utilisation de sonars 3D temps réel à balayage multifaisceaux",
                "Optimisation de la vitesse moteur pour réduire l'empreinte carbone"
            ],
            "humanEdge": "Le coup d'œil légendaire du capitaine pour sentir la houle, interpréter le vol des oiseaux marins et diriger des hommes face au danger."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le capitaine de pêche artisanale (chef de pirogue moderne motorisée ou de chalutier sénégalais) est une figure centrale de communautés côtières comme Kayar, Saint-Louis, Guet Ndar ou Joal. L'ENFM de Dakar forme les capitaines hauturiers qui commandent les navires battant pavillon sénégalais.",
            "localSectors": [
                "Grands ports de pêche artisanale et industrielle (Port Autonome de Dakar, Joal, Kayar, Ziguinchor)",
                "Armements thoniers et sardiniers nationaux",
                "Coopératives de pêcheurs artisans (GIE maritimes)"
            ],
            "remoteWork": "Totalement exclu, présence physique impérative à la barre.",
            "entrepreneurship": "Acquisition d'une embarcation de pêche moderne équipée de GPS et caissons isothermes pour ravitailler les mareyeurs de Dakar en poisson noble frais."
        },
        "relatedJobSlugs": [
            "aide-pecheur",
            "mecanicien-marin",
            "gestionnaire-ressources-maritimes",
            "halieute"
        ],
        "connectedFamilies": [
            "transport-logistique",
            "direction-strategie",
            "gestion-finance",
            "environnement-climat"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Capitaine-propriétaire ÉvoluPêches",
                "url": "https://evolupeches.org/metiers/capitaine-proprietaire/",
                "source": "ÉvoluPêches"
            }
        ],
        "sources": [
            "ÉvoluPêches",
            "Transports Canada",
            "ÉPAQ",
            "ENFM Dakar"
        ],
        "interests": [
            "nature-environnement",
            "explorer-decouvrir",
            "negocier-convaincre"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon ÉvoluPêches, le renouvellement de la relève des capitaines-propriétaires est l'un des défis majeurs des régions maritimes en raison de la valeur marchande très élevée des permis de pêche commerciale et du vieillissement démographique des patrons pêcheurs.",
            "pourquoi": "L'accès à la propriété d'un bateau et de ses permis nécessite des dispositifs de financement et de mentorat structurés pour soutenir les jeunes capitaines.",
            "a_retenir": "Un métier mythique alliant passion farouche de l'océan et rigueur d'un vrai chef d'entreprise maritime."
        },
        "salaryRanges": {
            "quebec": {
                "raw": "50 000 - 130 000 $ CAD/an selon volume et valeur des captures de la saison (Source : ÉvoluPêches / Pêches maritimes)",
                "range": "50 000 - 130 000 $ CAD/an selon volume et valeur des captures de la saison (Source : ÉvoluPêches / Pêches maritimes)",
                "source": "ÉvoluPêches"
            },
            "senegal": {
                "raw": "450 000 - 1 800 000 FCFA / mois (Capitaine de pêche côtière / hauturière - ENFM Dakar)",
                "range": "450 000 - 1 800 000 FCFA / mois (Capitaine de pêche côtière / hauturière - ENFM Dakar)",
                "source": "Filières maritimes & halieutiques (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "aide-pecheur",
        "slug": "aide-pecheur",
        "title": "Aide-Pêcheur / Aide-Pêcheuse (Matelot de Pont)",
        "aliases": [
            "Aide-pêcheuse",
            "Matelot de pêche",
            "Pêcheur d'équipage",
            "Matelot de pont de pêche"
        ],
        "icon": "🐟",
        "image": "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Pêche, Aquaculture & Ressources Marines",
        "domainId": "peche-aquaculture",
        "subdomain": "Pêche & capture",
        "sourceEvoluPeches": true,
        "cnpCode": "8441",
        "isEmerging": false,
        "level": "DEP en pêche professionnelle ou Formation en entreprise (apprentissage)",
        "salary": "🇨🇦 Québec : 35 000 - 80 000 $ CAD/an (part à la pêche / saisonnier, Source : ÉvoluPêches) • 🇸🇳 Sénégal : 200 000 - 700 000 FCFA / mois (selon part de capture et marée)",
        "simpleDefinition": "L'aide-pêcheur seconde le capitaine en mer : il prépare et entretient les filets et casiers, participe aux manœuvres de capture sur le pont, trie, manipule et entrepose le poisson frais dans la cale glacée.",
        "shortDescription": "Fiche documentée par ÉvoluPêches, ce travailleur d'élite du pont de pêche assure le travail physique et technique indispensable au bon déroulement de chaque marée.",
        "longDescription": "L'aide-pêcheur aide principalement le capitaine-propriétaire en participant aux activités de préparation et d'entretien du bateau de pêche commerciale et de ses engins. Également, comme le souligne ÉvoluPêches, il prend part aux activités de capture, de démêlage, de calibrage et d'entreposage des prises en vue d'obtenir une qualité hors pair pour l'industrie de la transformation des produits marins.",
        "mainObjective": "Assurer avec efficacité, rapidité et sécurité le maniement des engins de pêche et la préservation de la fraîcheur irréprochable des prises.",
        "companyRole": "Matelot opérationnel de pont, maillon d'exécution indispensable à la réussite de chaque sortie en mer.",
        "characteristics": [
            "Goût de l'aventure",
            "Bonne condition physique et pied marin",
            "Intérêt pour la mer et le travail extérieur",
            "Efficacité"
        ],
        "regions": [
            "Côte-Nord",
            "Bas-Saint-Laurent",
            "Gaspésie",
            "Îles-de-la-Madeleine"
        ],
        "sourceContext": "Québec / Canada (ÉvoluPêches)",
        "workEnvironment": [
            "🌊 Pont extérieur ouvert du bateau de pêche par tous les temps",
            "🧤 Ciré marin, bottes de sécurité antidérapantes et gants de protection thermique",
            "🧊 Cale à poissons réfrigérée et ateliers de ramendage de filets sur le quai"
        ],
        "missions": [
            "Participer aux activités de préparation, de nettoyage et d'entretien du bateau et des apparaux",
            "Entretenir, réparer et ramender les engins de pêche (casiers, palangres, filets)",
            "Participer aux activités de capture en mer (largage, virage, halage des engins)",
            "Manipuler, étêter, éviscérer et laver délicatement les espèces capturées",
            "Entreposer les prises sous glace en cale en respectant les normes d'hygiène et de qualité"
        ],
        "typicalDay": [
            {
                "time": "04:30",
                "title": "Préparation du pont et des appâts",
                "desc": "Embarquement de la glace en paillettes, découpe des appâts (boette) et vérification des amarres."
            },
            {
                "time": "08:00",
                "title": "Manoeuvre des engins de capture",
                "desc": "Réception des casiers remontés par le treuil, extraction rapide et sécurisée des crabes ou homards."
            },
            {
                "time": "12:30",
                "title": "Tri, calibrage et conditionnement en cale",
                "desc": "Mesure des carapaces à la jauge, rejet à l'eau des femelles grainées et mise en bacs d'eau de mer réfrigérée."
            },
            {
                "time": "17:00",
                "title": "Lavage au jet d'eau de mer et ramendage",
                "desc": "Nettoyage soigné du pont au jet haute pression et réparation des mailles déchirées avant la marée suivante."
            }
        ],
        "skills": {
            "technical": [
                "Techniques de ramendage et réparation des filets et câbles",
                "Maniement sécuritaire des apparaux de levage et treuils de pont",
                "Techniques d'éviscération, filetage sommaire et glaçage du poisson",
                "Protocoles d'hygiène et de conservation des produits marins frais",
                "Manœuvres d'amarrage et nœuds marins indispensables"
            ],
            "human": [
                "Pied marin absolu et endurance remarquable face à la fatigue physique",
                "Esprit d'équipe solidaire et respect des consignes de sécurité",
                "Rapidité d'exécution manuelle et souci de la qualité des produits",
                "Sens de l'entraide en milieu confiné"
            ],
            "tools": [
                "Aiguilles à ramender et couteaux marins d'étêtage",
                "Jauges de calibrage des crustacés",
                "Laveurs de pont et pompes de cale",
                "Gilets de sauvetage autogonflants de travail en mer"
            ],
            "analytical": [
                "Évaluation visuelle rapide de la fraîcheur et des calibres",
                "Comptage des prises par trait de chalut"
            ]
        },
        "specializations": [
            "Matelot casayeur (homard, crabe)",
            "Matelot chalutier",
            "Matelot palangrier",
            "Matelot sur senneur"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Diplôme professionnel",
                    "title": "Diplôme d'études professionnelles (DEP) en pêche professionnelle",
                    "desc": "Formation québécoise à l'ÉPAQ ou au CSS des Îles."
                },
                {
                    "step": "Formation en entreprise",
                    "title": "Formation en entreprise / Apprentissage au poste",
                    "desc": "Transmission directe des savoir-faire marins par le patron pêcheur sur le pont."
                },
                {
                    "step": "Certifications de sécurité",
                    "title": "Certificat de sécurité de base en mer (STCW / FUM)",
                    "desc": "Formations obligatoires aux exercices de survie et lutte incendie."
                }
            ],
            "schools": [
                {
                    "name": "École des pêches et de l’aquaculture du Québec (ÉPAQ) — Québec",
                    "country": "Canada",
                    "scope": "International"
                },
                {
                    "name": "Centre de formation professionnelle des Îles — Québec",
                    "country": "Canada",
                    "scope": "Canada"
                },
                {
                    "name": "École Nationale de Formation Maritime (ENFM Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certificat de fonctions d'urgence en mer (FUM A1/A2)",
                "Certificat médical d'aptitude à la navigation"
            ],
            "schoolSubjects": [
                "Techniques de pêche",
                "Sécurité maritime",
                "Hygiène alimentaire",
                "Secourisme"
            ]
        },
        "career": {
            "sectors": [
                "Pêche commerciale côtière et hauturière",
                "Armements maritimes artisanaux",
                "Bateaux de récolte maricole"
            ],
            "employerTypes": [
                "Patrons-pêcheurs indépendants",
                "Petites entreprises familiales de pêche"
            ],
            "evolution": "Aide-pêcheur débutant ➔ Matelot de pont confirmé ➔ Maître d'équipage (Bosco) ➔ Capitaine de pêche (avec formation complémentaire et brevets)",
            "pros": "Accès direct au métier sans longues études préalables, vie intense et authentique au grand large, esprit d'équipage très fort, rémunération attractive les bonnes saisons.",
            "cons": "Pénibilité physique soutenue, travail dans l'humidité, le froid et le roulis de mer, saisonnalité marquée de l'emploi."
        },
        "gettingStarted": {
            "beginnerProject": "S'entraîner à exécuter rapidement 10 nœuds marins essentiels (nœud de chaise, nœud d'écoute, nœud de cabestan).",
            "intermediateProject": "Apprendre le ramendage manuel d'un filet de pêche déchiré à l'aide d'une aiguille et de fil nylon.",
            "advancedProject": "Valider son brevet de secourisme d'urgence en mer et suivre une campagne complète de pêche côtière.",
            "portfolioIdeas": [
                "Attestation de navigation en mer",
                "Démonstration vidéo de maîtrise des manœuvres de pont"
            ]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "Le travail physique sur le pont d'un bateau remuant sous la houle exige une agilité motrice et une adaptation humaine qu'aucun robot ne peut fournir.",
            "automatedTasks": [
                "Enregistrement automatique des positions de captures par géolocalisation"
            ],
            "emergingSkills": [
                "Utilisation d'équipements de pont à commande électrique sécurisée"
            ],
            "humanEdge": "La dextérité manuelle pour démêler un filet en pleine mer et le courage physique face aux embruns."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les aides-pêcheurs et matelots constituent le gros des équipages des 20 000 pirogues artisanales et chalutiers côtiers. Ce sont eux qui assurent le débarquement quotidien des sardinelles, thiofs et poulpes qui nourrissent le pays.",
            "localSectors": [
                "Plages de débarquement artisanal de Dakar (Yoff, Soumbédioune, Ngor)",
                "Grands quais de pêche de Joal-Fadiouth et Kayar",
                "Chalutiers industriels du Port de Dakar"
            ],
            "remoteWork": "100% sur le pont en mer.",
            "entrepreneurship": "Épargne progressive pour acquérir un moteur hors-bord et son propre filet de pêche."
        },
        "relatedJobSlugs": [
            "capitaine-proprietaire",
            "mecanicien-marin",
            "ouvrier-maricole",
            "prepose-transformation-produits-marins"
        ],
        "connectedFamilies": [
            "transport-logistique",
            "environnement-climat",
            "commerce-marketing"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Aide-pêcheur ÉvoluPêches",
                "url": "https://evolupeches.org/metiers/aide-pecheur-aide-pecheuse/",
                "source": "ÉvoluPêches"
            }
        ],
        "sources": [
            "ÉvoluPêches",
            "ÉPAQ",
            "ENFM Dakar"
        ],
        "interests": [
            "nature-environnement",
            "construire-fabriquer",
            "explorer-decouvrir"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon ÉvoluPêches, la demande d'aides-pêcheurs formés et fiables est très forte au Québec lors de l'ouverture de la saison du crabe des neiges et du homard, les équipages recherchant des marins endurants et dévoués.",
            "pourquoi": "La brièveté des saisons de pêche impose d'être à 100% opérationnel dès le premier jour de marée pour rentabiliser l'année.",
            "a_retenir": "La porte d'entrée incontournable dans le monde fascinant des gens de mer."
        },
        "salaryRanges": {
            "quebec": {
                "raw": "35 000 - 80 000 $ CAD/an (part à la pêche / saisonnier, Source : ÉvoluPêches)",
                "range": "35 000 - 80 000 $ CAD/an (part à la pêche / saisonnier, Source : ÉvoluPêches)",
                "source": "ÉvoluPêches"
            },
            "senegal": {
                "raw": "200 000 - 700 000 FCFA / mois (selon part de capture et marée)",
                "range": "200 000 - 700 000 FCFA / mois (selon part de capture et marée)",
                "source": "Filières maritimes & halieutiques (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "mecanicien-marin",
        "slug": "mecanicien-marin",
        "title": "Mécanicien Marin / Électromécanicien Naval",
        "aliases": [
            "Mécanicienne marine",
            "Mécanicien naval",
            "Chef mécanicien de navire de pêche",
            "Technicien de maintenance navale"
        ],
        "icon": "🔧",
        "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Pêche, Aquaculture & Ressources Marines",
        "domainId": "peche-aquaculture",
        "subdomain": "Maintenance & équipements marins",
        "sourceEvoluPeches": true,
        "cnpCode": "74201",
        "isEmerging": false,
        "level": "DEP en mécanique marine (ÉPAQ) ou BTS Mécatronique navale",
        "salary": "🇨🇦 Québec : 45 000 - 90 000 $ CAD/an (Source : ÉvoluPêches / Secteur maritime) • 🇸🇳 Sénégal : 350 000 - 1 200 000 FCFA / mois (Chantiers navals de Dakar / Flotte de pêche)",
        "simpleDefinition": "Le mécanicien marin entretient, diagnostique et répare les moteurs diesel, les circuits électriques, les systèmes hydrauliques de levage et les installations frigorifiques des bateaux de pêche et navires maritimes.",
        "shortDescription": "Fiche documentée par ÉvoluPêches, ce technicien clé garantit la propulsion du navire et la sécurité énergétique en mer où l'assistance extérieure est impossible.",
        "longDescription": "En pleine mer, une panne de moteur ou de générateur électrique peut mettre en péril la vie de l'équipage. Le mécanicien marin intervient dans la salle des machines exiguë et chaude. Selon ÉvoluPêches, il entretient et répare les moteurs diesel, les systèmes électriques, hydrauliques et de réfrigération/climatisation, effectue des tâches de soudure et dessine des plans et des croquis pour adapter les équipements de pêche.",
        "mainObjective": "Garantir la fiabilité absolue de la propulsion navale, des groupes électrogènes et des apparaux hydrauliques de pêche.",
        "companyRole": "Responsable technique de la salle des machines et garant de la sécurité mécanique du bord.",
        "characteristics": [
            "Curiosité",
            "Aptitudes manuelles",
            "Habiletés en mathématiques",
            "Patience",
            "Rigueur et minutie",
            "Débrouillardise"
        ],
        "regions": [
            "Partout au Québec, avec forte proportion en régions maritimes (Côte-Nord, Gaspésie, Îles-de-la-Madeleine, Bas-Saint-Laurent)"
        ],
        "sourceContext": "Québec / Canada (ÉvoluPêches)",
        "workEnvironment": [
            "⚙️ Salle des machines fermée d'un bateau de pêche avec bruit et chaleur",
            "⚓ Chantiers navals de carénage et cales sèches lors des arrêts techniques",
            "🌊 Interventions d'urgence en mer au milieu de la houle"
        ],
        "missions": [
            "Entretenir et réviser les moteurs diesel marins de propulsion et groupes auxiliaires",
            "Diagnostiquer et dépanner les circuits hydrauliques sous haute pression des treuils et enrouleurs",
            "Entretenir et réparer les génératrices et tableaux électriques du bord",
            "Assurer la maintenance des compresseurs frigorifiques de maintien de la cale à glace",
            "Exécuter des travaux d'ajustage, de tuyauterie marine et de soudure à l'arc ou TIG"
        ],
        "typicalDay": [
            {
                "time": "07:30",
                "title": "Ronde matinale de la salle des machines",
                "desc": "Contrôle des pressions d'huile, températures d'échappement et niveaux des réservoirs de carburant."
            },
            {
                "time": "10:00",
                "title": "Maintenance préventive d'une pompe à eau de mer",
                "desc": "Remplacement de la turbine caoutchouc (impulseur) du circuit de refroidissement moteur."
            },
            {
                "time": "14:00",
                "title": "Réparation d'un flexible hydraulique de treuil",
                "desc": "Remplacement d'un flexible fuyant et purge du distributeur hydraulique sous pression."
            },
            {
                "time": "16:30",
                "title": "Relevé des heures moteur et carnet d'entretien",
                "desc": "Enregistrement des maintenances et commandes de filtres et pièces de rechange auprès des fournisseurs."
            }
        ],
        "skills": {
            "technical": [
                "Mécanique diesel marine lourde (moteurs Caterpillar, Cummins, Volvo Penta)",
                "Hydraulique navale proportionnelle haute pression",
                "Électricité marine (tableaux 24V continu et 380V triphasé marin)",
                "Thermodynamique et froid embarqué (groupes frigorifiques marins)",
                "Soudure industrielle et tuyauterie cuivre/inox résistant à la corrosion saline"
            ],
            "human": [
                "Débrouillardise et calme olympien en cas d'avarie en mer",
                "Rigueur et minutie dans les serrages et calages de précision",
                "Patience face aux pannes électroniques intermittentes",
                "Aptitude physique à travailler dans des espaces confinés"
            ],
            "tools": [
                "Outillage complet de mécanique navale et clés dynamométriques",
                "Appareils de mesure d'isolement électrique (mégohmmètres) et multimètres",
                "Postes à souder portatifs et meuleuses d'ajustage",
                "Manomètres hydrauliques et détecteurs de fuites de fluides frigorigènes"
            ],
            "analytical": [
                "Diagnostic de vibrations anormales et analyse spectrale d'huile de moteur",
                "Lecture experte de schémas de tuyauterie navale et câblage électrique"
            ]
        },
        "specializations": [
            "Moteurs marins haute puissance",
            "Hydraulique navale de pont",
            "Froid industriel embarqué",
            "Électromécanique des bateaux de pêche"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Diplôme d'études professionnelles",
                    "title": "DEP en mécanique marine",
                    "desc": "Formation québécoise de référence dispensée à l'ÉPAQ (Grande-Rivière)."
                },
                {
                    "step": "Brevet de mécanicien",
                    "title": "Brevet d'officier mécanicien de pêche (classe 4 / 3)",
                    "desc": "Examen de Transports Canada validant les compétences de chef de quart machine."
                },
                {
                    "step": "Formation continue",
                    "title": "Formations d'usine constructeurs (Caterpillar, Scania)",
                    "desc": "Mise à niveau sur les moteurs marins électroniques récents."
                }
            ],
            "schools": [
                {
                    "name": "École des pêches et de l’aquaculture du Québec (ÉPAQ) — Québec",
                    "country": "Canada",
                    "scope": "International"
                },
                {
                    "name": "École Nationale de Formation Maritime (ENFM Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Lycées maritimes dispensant le Bac Pro EMM (Électromécanicien Marine) — France",
                    "country": "France",
                    "scope": "France"
                }
            ],
            "certifications": [
                "Brevet de mécanicien de marine (Transports Canada / Affaires Maritimes)",
                "Attestation manipulation des fluides frigorigènes"
            ],
            "schoolSubjects": [
                "Mécanique diesel",
                "Électricité",
                "Hydraulique",
                "Dessin technique"
            ]
        },
        "career": {
            "sectors": [
                "Bateaux de pêche semi-industriels et hauturiers",
                "Chantiers navals de réparation et d'entretien maritime",
                "Ateliers de motorisation marine côtière",
                "Remorqueurs portuaires et navires de service"
            ],
            "employerTypes": [
                "Armateurs de pêche",
                "Chantiers navals privés",
                "Sociétés d'entretien mécanique portuaire"
            ],
            "evolution": "Mécanicien naval junior ➔ Chef mécanicien de navire de pêche ➔ Chef d'atelier en chantier naval ➔ Expert technique d'assurance maritime",
            "pros": "Métier hautement valorisé et respecté par l'équipage, salaire très avantageux lié à la technicité rare, sécurité de l'emploi garantie.",
            "cons": "Espace de travail bruyant, exigü et chaud, interventions d'urgence parfois stressantes en pleine tempête."
        },
        "gettingStarted": {
            "beginnerProject": "Démonter, nettoyer et remplacer les joints d'un carburateur ou d'une pompe à injection diesel d'atelier.",
            "intermediateProject": "Câbler un tableau électrique 24V marin étanche avec disjoncteurs, relais et voyants de contrôle.",
            "advancedProject": "Réaliser le calage complet de la distribution d'un moteur diesel marin 6 cylindres en suivant la fiche constructeur.",
            "portfolioIdeas": [
                "Schéma hydraulique annoté d'un treuil de pêche",
                "Rapport d'analyse d'avarie moteur résolue"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "La télémétrie envoie les paramètres moteur par satellite aux centres de diagnostic à terre, mais le serrage mécanique et la réparation en mer restent purement manuels.",
            "automatedTasks": [
                "Surveillance continue des alertes de surchauffe et pression par capteurs connectés"
            ],
            "emergingSkills": [
                "Diagnostic des moteurs marins à injection électronique Common Rail",
                "Maintenance des systèmes de propulsion hybride ou électrique"
            ],
            "humanEdge": "L'oreille avertie du mécanicien qui décèle un cliquetis anormal de bielle et le doigté pour ressouder une pièce cassée en mer."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la maintenance navale concentrée au Port Autonome de Dakar (Dakar-Marine, chantiers navals privés) et le long des quais de pêche est vitale pour éviter l'immobilisation coûteuse des bateaux. L'ENFM de Dakar forme les motoristes et officiers mécaniciens sénégalais.",
            "localSectors": [
                "Chantiers navals de Dakar (Dakarnave)",
                "Ateliers de mécanique marine de Saint-Louis et Joal",
                "Flotte industrielle thonière et chalutière"
            ],
            "remoteWork": "Exclu, présence machine indispensable.",
            "entrepreneurship": "Création d'un atelier mobile de maintenance mécanique diesel et hydraulique navale pour les quais de pêche côtiers."
        },
        "relatedJobSlugs": [
            "capitaine-proprietaire",
            "technicien-maintenance-agroequipement",
            "technicien-maintenance-industrielle-maritime",
            "aide-pecheur"
        ],
        "connectedFamilies": [
            "industrie-ingenierie",
            "transport-logistique",
            "artisanat-metiers-art"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Mécanicien marin ÉvoluPêches",
                "url": "https://evolupeches.org/metiers/mecanicien-marin-mecanicienne-marine/",
                "source": "ÉvoluPêches"
            }
        ],
        "sources": [
            "ÉvoluPêches",
            "Transports Canada",
            "ÉPAQ",
            "Dakarnave"
        ],
        "interests": [
            "construire-fabriquer",
            "resoudre-problemes"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon ÉvoluPêches, les mécaniciens marins figurent parmi les spécialistes les plus difficiles à recruter pour les armements, conduisant à des offres d'emploi permanentes et des salaires de haut niveau.",
            "pourquoi": "La triple maîtrise du diesel lourd, de l'hydraulique haute pression et de l'électricité marine dans un contexte de mer est une denrée rare et précieuse.",
            "a_retenir": "Le gardien de la puissance et de la survie de tout navire au large."
        },
        "salaryRanges": {
            "quebec": {
                "raw": "45 000 - 90 000 $ CAD/an (Source : ÉvoluPêches / Secteur maritime)",
                "range": "45 000 - 90 000 $ CAD/an (Source : ÉvoluPêches / Secteur maritime)",
                "source": "ÉvoluPêches"
            },
            "senegal": {
                "raw": "350 000 - 1 200 000 FCFA / mois (Chantiers navals de Dakar / Flotte de pêche)",
                "range": "350 000 - 1 200 000 FCFA / mois (Chantiers navals de Dakar / Flotte de pêche)",
                "source": "Filières maritimes & halieutiques (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "mariculteur",
        "slug": "mariculteur",
        "title": "Mariculteur / Maricultrice (Propriétaire-Exploitant en Aquaculture Marine)",
        "aliases": [
            "Maricultrice",
            "Éleveur de mollusques marins",
            "Conchyliculteur marin",
            "Producteur maricole"
        ],
        "icon": "🦪",
        "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Pêche, Aquaculture & Ressources Marines",
        "domainId": "peche-aquaculture",
        "subdomain": "Aquaculture & mariculture",
        "sourceEvoluPeches": true,
        "cnpCode": "0823",
        "isEmerging": false,
        "level": "DEC en aquaculture ou AEC en élevage des mollusques en suspension (ÉPAQ)",
        "salary": "🇨🇦 Québec : 45 000 - 95 000 $ CAD/an selon volume récolté et cours des mollusques (Source : ÉvoluPêches) • 🇸🇳 Sénégal : 350 000 - 1 200 000 FCFA / mois (Fermes d'huîtres du Saloum et Casamance / ANA)",
        "simpleDefinition": "Le mariculteur élève des organismes marins en eau salée (huîtres, moules, pétoncles, oursins et algues) : il gère ses parcs maricoles, pilote sa barge en mer, supervise la croissance et commercialise sa production.",
        "shortDescription": "Fiche documentée par ÉvoluPêches, ce propriétaire-exploitant novateur conjugue savoir-faire d'élevage en mer et compétences de gestionnaire d'entreprise.",
        "longDescription": "La mariculture est l'élevage de mollusques en eau salée (ex: huîtres, moules, pétoncles) et la culture d'algues. Selon ÉvoluPêches, le mariculteur est un propriétaire-exploitant qui dirige et gère sa propre entreprise avec un effectif de deux ou trois personnes. Il possède les connaissances et le savoir-faire utiles pour mener à bien les activités de production, manœuvrer un bateau, s'assurer d'avoir le matériel adéquat et garantir la santé et la sécurité de l'équipage.",
        "mainObjective": "Produire des mollusques marins et algues d'excellence gastronomique et sanitaire tout en préservant l'écosystème côtier.",
        "companyRole": "Propriétaire-exploitant maricole, formateur de son personnel et stratège de son entreprise.",
        "characteristics": [
            "Débrouillardise et polyvalence",
            "Intérêt pour la mer et le travail extérieur",
            "Rigueur",
            "Efficacité",
            "Bonne condition physique",
            "Pensée analytique et méthodique"
        ],
        "regions": [
            "Côte-Nord",
            "Bas-Saint-Laurent",
            "Gaspésie",
            "Îles-de-la-Madeleine"
        ],
        "sourceContext": "Québec / Canada (ÉvoluPêches)",
        "workEnvironment": [
            "🌊 Parcs maricoles en mer côtière abritée (baies, lagunes, filières en suspension)",
            "🚤 Barge ostréicole ou mytilicole équipée de grues de levage",
            "🏢 Station terrestre de calibrage, purification et expédition des coquillages"
        ],
        "missions": [
            "Gérer l'entreprise, les finances, la conformité réglementaire et le personnel (2 à 3 personnes)",
            "Donner les orientations stratégiques pour le développement et la rentabilité de l'entreprise",
            "Planifier, organiser et superviser la mise en œuvre de chaque cycle de production des mollusques",
            "Contribuer sur le terrain à l'exécution des tâches d'élevage (pose de filières, détroquage, calibrage)",
            "S'assurer du bon état et de l'entretien permanent du matériel nautique et d'élevage"
        ],
        "typicalDay": [
            {
                "time": "06:30",
                "title": "Appareillage de la barge maricole",
                "desc": "Contrôle de la météo côtière, embarquement de l'équipage et navigation vers les lignes de filières en mer."
            },
            {
                "time": "08:30",
                "title": "Levée des filières de moules ou lanternes de pétoncles",
                "desc": "Utilisation de la grue hydraulique pour hisser les cordes d'élevage et contrôler la croissance et l'absence de prédateurs (étoiles de mer)."
            },
            {
                "time": "13:00",
                "title": "Opérations de calibrage et dédoublonnage",
                "desc": "Passage des coquillages dans la calibreuse de bord et réensemencement des petits sujets dans de nouveaux pochons."
            },
            {
                "time": "17:00",
                "title": "Gestion commerciale et traçabilité",
                "desc": "Enregistrement des lots pour le laboratoire sanitaire et planification des livraisons vers les poissonniers et restaurateurs."
            }
        ],
        "skills": {
            "technical": [
                "Biologie marine des bivalves (cycle de reproduction, alimentation par filtration)",
                "Techniques d'élevage en suspension (filières sub-flottantes, lanternes, tables)",
                "Conduite et manœuvre de barges maricoles et engins de levage hydrauliques",
                "Normes strictes de salubrité conchylicole et suivi des toxines marines (phytoplancton toxique)",
                "Gestion d'entreprise et commercialisation des produits frais de la mer"
            ],
            "human": [
                "Polyvalence et capacité à alterner travail physique en mer et gestion sur ordinateur",
                "Patience face aux cycles naturels de croissance lente des coquillages (1 à 3 ans)",
                "Sens aigu de la pédagogie pour former et encadrer ses ouvriers maricoles",
                "Rigueur et sens de la sécurité en mer"
            ],
            "tools": [
                "Barges ostréicoles à fond plat et grues hydrauliques de levage",
                "Filières, bouées sub-flottantes et lanternes japonaises d'élevage",
                "Calibreuses rotatives et laveurs de coquillages",
                "Oxymètres et sondes de température et salinité de l'eau"
            ],
            "analytical": [
                "Suivi des courbes de croissance de la biomasse sous l'eau",
                "Calcul du prix de revient par douzaine ou kilogramme de coquillages récolté"
            ]
        },
        "specializations": [
            "Mytiliculture en suspension (moules bleues)",
            "Ostréiculture de pleine mer (huîtres)",
            "Élevage de pétoncles géants",
            "Algoculture marine (laminaires, wakamé, dulse)"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Diplôme collégial",
                    "title": "Diplôme d'études collégiales (DEC) en aquaculture",
                    "desc": "Formation québécoise complète dispensée à l'ÉPAQ (Grande-Rivière)."
                },
                {
                    "step": "Attestation collégiale",
                    "title": "Attestation d'études collégiales (AEC) en élevage des mollusques en suspension",
                    "desc": "Formation spécifique axée sur la mariculture marine."
                },
                {
                    "step": "Installation",
                    "title": "Obtention de baux maricoles et conformité environnementale",
                    "desc": "Démarches auprès des ministères de l'Agriculture et des Pêches."
                }
            ],
            "schools": [
                {
                    "name": "École des pêches et de l’aquaculture du Québec (ÉPAQ) — Québec",
                    "country": "Canada",
                    "scope": "International"
                },
                {
                    "name": "Lycée de la Mer et du Littoral (Bourcefranc-le-Chapus) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut Universitaire de Pêche et d'Aquaculture (IUPA Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Permis de conducteur de petits bâtiments commerciaux (Transports Canada)",
                "Certificat d'attestation de salubrité conchylicole"
            ],
            "schoolSubjects": [
                "Biologie marine",
                "Aquaculture",
                "Navigation",
                "Comptabilité de gestion"
            ]
        },
        "career": {
            "sectors": [
                "Entreprises maricoles privées en eau salée",
                "Groupements de producteurs de mollusques",
                "Fermes aquacoles de diversification marine"
            ],
            "employerTypes": [
                "Propriétaire de son exploitation maricole",
                "Coopératives de mariculteurs"
            ],
            "evolution": "Ouvrier maricole ➔ Chef de parc aquacole ➔ Mariculteur propriétaire-exploitant ➔ Dirigeant d'une grande entreprise conchylicole",
            "pros": "Activité pionnière et écologique qui ne nécessite aucun apport d'aliments artificiels (les coquillages se nourrissent du plancton naturel), cadre de travail grandiose en baie marine, valorisation forte des produits.",
            "cons": "Sensibilité aux fermetures sanitaires temporaires (efflorescences d'algues toxiques), travail physique l'hiver lors de la prise des glaces, lourdeur des investissements maritimes."
        },
        "gettingStarted": {
            "beginnerProject": "Visiter une ferme d'élevage de moules en baie pour observer la structure des filières immergées sous bouées.",
            "intermediateProject": "Mesurer et consigner pendant un mois la salinité et la température de l'eau d'un site côtier propice à l'ostréiculture.",
            "advancedProject": "Rédiger le plan prévisionnel de production d'un parc de 50 filières mytilicoles avec calendrier d'ensemencement et de récolte.",
            "portfolioIdeas": [
                "Schéma côté d'une filière maricole en suspension",
                "Dossier d'analyse de rentabilité d'une concession maricole"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des bouées connectées équipées de spectromètres surveillent en direct la concentration de phytoplancton pour anticiper les marées rouges et optimiser les dates de récolte.",
            "automatedTasks": [
                "Relevé automatique des données physico-chimiques marines par bouées IoT"
            ],
            "emergingSkills": [
                "Surveillance des concessions maricoles par drones aériens et sous-marins légers"
            ],
            "humanEdge": "Le savoir-faire pour juger de la chair pleine d'un mollusque et la manœuvre précise de la barge lors des coups de vent en baie."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'ostréiculture est une tradition ancestrale portée par les femmes du delta du Sine Saloum et de Casamance. L'Agence Nationale de l'Aquaculture (ANA) modernise la filière en introduisant des guirlandes et tables ostréicoles modernes qui évitent la destruction des racines de palétuviers dans la mangrove.",
            "localSectors": [
                "Delta du Sine Saloum (Fatick, Toubacouta, Joal)",
                "Mangroves de Casamance (Ziguinchor, Oussouye)",
                "Agence Nationale de l'Aquaculture (ANA)"
            ],
            "remoteWork": "100% sur l'eau et dans les parcs.",
            "entrepreneurship": "Création d'une ferme maricole moderne d'huîtres de palétuvier avec centre de purification aux normes d'exportation vers Dakar."
        },
        "relatedJobSlugs": [
            "ouvrier-maricole",
            "aquaculteur",
            "biologiste-marin",
            "controleur-qualite-produits-aquatiques"
        ],
        "connectedFamilies": [
            "environnement-climat",
            "commerce-marketing",
            "recherche-sciences"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Mariculteur ÉvoluPêches",
                "url": "https://evolupeches.org/metiers/mariculteur-maricultrice/",
                "source": "ÉvoluPêches"
            }
        ],
        "sources": [
            "ÉvoluPêches",
            "ÉPAQ",
            "ANA Sénégal"
        ],
        "interests": [
            "nature-environnement",
            "construire-fabriquer",
            "negocier-convaincre"
        ],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Selon ÉvoluPêches, la mariculture est considérée comme l'une des productions animales les plus écologiques de la planète car les mollusques et les algues ne consomment aucun aliment artificiel et filtrent naturellement l'eau de mer.",
            "pourquoi": "Une seule huître adulte peut filtrer jusqu'à 200 litres d'eau par jour, améliorant la clarté et la qualité de l'écosystème côtier où elle est élevée.",
            "a_retenir": "Un métier d'avenir absolu alliant esprit d'entreprise et régénération de la biodiversité marine."
        },
        "salaryRanges": {
            "quebec": {
                "raw": "45 000 - 95 000 $ CAD/an selon volume récolté et cours des mollusques (Source : ÉvoluPêches)",
                "range": "45 000 - 95 000 $ CAD/an selon volume récolté et cours des mollusques (Source : ÉvoluPêches)",
                "source": "ÉvoluPêches"
            },
            "senegal": {
                "raw": "350 000 - 1 200 000 FCFA / mois (Fermes d'huîtres du Saloum et Casamance / ANA)",
                "range": "350 000 - 1 200 000 FCFA / mois (Fermes d'huîtres du Saloum et Casamance / ANA)",
                "source": "Filières maritimes & halieutiques (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "ouvrier-maricole",
        "slug": "ouvrier-maricole",
        "title": "Ouvrier Maricole / Ouvrière Maricole (Agent Aquacole Marin)",
        "aliases": [
            "Ouvrière maricole",
            "Agent de parc maricole",
            "Aide-mariculteur",
            "Ouvrier ostréicole"
        ],
        "icon": "🐚",
        "image": "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Pêche, Aquaculture & Ressources Marines",
        "domainId": "peche-aquaculture",
        "subdomain": "Aquaculture & mariculture",
        "sourceEvoluPeches": true,
        "cnpCode": "8613",
        "isEmerging": false,
        "level": "Formation en entreprise (Compagnonnage) accessible sans diplôme préalable",
        "salary": "🇨🇦 Québec : 32 000 - 55 000 $ CAD/an (Source : ÉvoluPêches / Secteur maricole) • 🇸🇳 Sénégal : 180 000 - 500 000 FCFA / mois (Fermes aquacoles et conchylicoles)",
        "simpleDefinition": "L'ouvrier maricole participe aux travaux quotidiens de l'élevage des mollusques en mer : il fabrique et entretient les cordes et lanternes, travaille sur la barge en mer, manipule et trie les espèces dans le respect de la qualité.",
        "shortDescription": "Fiche documentée par ÉvoluPêches, cet artisan de terrain prend soin des coquillages tout au long de leur croissance en milieu marin.",
        "longDescription": "L'ouvrier maricole met en œuvre les bonnes techniques de travail dans l'élevage d'espèces marines et respecte les règles d'hygiène et de salubrité pour assurer la qualité du produit. Comme le précise ÉvoluPêches, il doit porter une attention particulière à l'exécution des activités visant la manipulation et l'entreposage des espèces afin de ne pas altérer leur fraîcheur et leur chair délicate.",
        "mainObjective": "Réaliser avec rigueur les gestes techniques d'élevage, d'entretien des équipements et de manipulation soignée des mollusques en mer.",
        "companyRole": "Opérateur d'élevage marin, garant de la bientraitance des espèces vivantes et de la qualité finale.",
        "characteristics": [
            "Souci du travail bien fait",
            "Bonne condition physique",
            "Autonomie",
            "Habileté manuelle",
            "Esprit d'équipe"
        ],
        "regions": [
            "Côte-Nord",
            "Bas-Saint-Laurent",
            "Gaspésie",
            "Îles-de-la-Madeleine"
        ],
        "sourceContext": "Québec / Canada (ÉvoluPêches)",
        "workEnvironment": [
            "🌊 Travail régulier sur une barge en mer par temps frais et humide",
            "🧤 Cirés marins, gants de travail étanches et bottes antidérapantes",
            "🏢 Hangars côtiers de calibrage, nettoyage et mise en filets des coquillages"
        ],
        "missions": [
            "Exécuter les activités quotidiennes liées à l'élevage des mollusques (ensemencement, détroquage)",
            "Fabriquer, installer, nettoyer et entretenir le matériel d'élevage (cordes, lanternes, poches)",
            "Travailler en mer sur la barge pour la levée et la remise à l'eau des structures d'élevage",
            "Manipuler, calibrer et entreposer soigneusement les mollusques sans casser les coquilles",
            "Appliquer rigoureusement les protocoles d'hygiène, de salubrité et de sécurité maritime"
        ],
        "typicalDay": [
            {
                "time": "07:00",
                "title": "Préparation des cordes d'élevage au hangar",
                "desc": "Boudinage des jeunes naissains de moules sur les cordages d'ensemencement avec filets biodégradables."
            },
            {
                "time": "09:00",
                "title": "Chantier en mer sur les filières",
                "desc": "Embarquement sur la barge, accrochage des nouvelles cordes sur la ligne principale en suspension sous l'eau."
            },
            {
                "time": "13:30",
                "title": "Nettoyage mécanique des lanternes de pétoncles",
                "desc": "Passage au nettoyeur rotatif pour éliminer les salissures biologiques (algues et balanes) qui étouffent les mollusques."
            },
            {
                "time": "16:00",
                "title": "Tri et ensachage pour l'expédition",
                "desc": "Mise en sacs de 15 kg des moules prêtes pour la vente et stockage en chambre froide ventilée."
            }
        ],
        "skills": {
            "technical": [
                "Techniques d'assemblage et de matelotage des cordes de mariculture",
                "Gestes de manipulation douce des coquillages fragiles",
                "Conduite et entretien des laveurs et calibreuses de coquillages",
                "Règles d'hygiène et de sécurité sanitaire conchylicole",
                "Sécurité des travaux sur barge maritime"
            ],
            "human": [
                "Souci constant du travail bien fait et méticulosité",
                "Bonne condition physique et résistance au travail dans l'eau salée",
                "Autonomie dans l'exécution des tâches confiées",
                "Esprit d'équipe et bonne communication à bord"
            ],
            "tools": [
                "Poches ostréicoles, lanternes japonaises et collecteurs de naissain",
                "Laveurs haute pression d'eau de mer et brosses rotatives",
                "Couteaux à détroquer et agrafeuses conchylicoles pneumatiques",
                "Bacs de manipulation ajourés et chariots de transport"
            ],
            "analytical": [
                "Contrôle visuel de l'état sanitaire et de la fermeture étanche des coquilles",
                "Pesée d'échantillons pour le suivi de la croissance"
            ]
        },
        "specializations": [
            "Ouvrier mytilicole (moules)",
            "Ouvrier ostréicole (huîtres)",
            "Ouvrier en écloserie maricole",
            "Ouvrier d'algoculture"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Formation en entreprise",
                    "title": "Formation en entreprise / Compagnonnage au poste",
                    "desc": "Mode d'apprentissage principal documenté par ÉvoluPêches."
                },
                {
                    "step": "Diplôme professionnel",
                    "title": "Attestation d'études ou DEP professionnel",
                    "desc": "Possibilité d'accès aux formations modulaires de l'ÉPAQ pour progresser."
                }
            ],
            "schools": [
                {
                    "name": "École des pêches et de l’aquaculture du Québec (ÉPAQ) — Québec",
                    "country": "Canada",
                    "scope": "International"
                },
                {
                    "name": "Lycées maritimes et conchylicoles (France)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centres de formation aquacole de l'ANA — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Formation de sécurité pour passagers de bâtiments de travail",
                "Certificat d'opérateur conchylicole"
            ],
            "schoolSubjects": [
                "Biologie pratique",
                "Travaux maritimes",
                "Hygiène conchylicole"
            ]
        },
        "career": {
            "sectors": [
                "Fermes maricoles privées en eau de mer",
                "Coopératives de conchyliculteurs",
                "Centres de purification et d'expédition de coquillages"
            ],
            "employerTypes": [
                "Mariculteurs exploitants indépendants",
                "PME aquacoles côtières"
            ],
            "evolution": "Ouvrier maricole débutant ➔ Ouvrier maricole qualifié ➔ Chef d'équipe de parc maricole ➔ Mariculteur propriétaire-exploitant",
            "pros": "Travail sain au contact direct de la mer, satisfaction de voir grandir des millions d'organismes vivants, perspectives d'évolution vers la gestion de son propre parc.",
            "cons": "Travail physique avec charges régulières (sacs de coquillages), humidité constante et fraîcheur marine."
        },
        "gettingStarted": {
            "beginnerProject": "Effectuer une saison de récolte conchylicole comme saisonnier pour apprendre les gestes de calibrage.",
            "intermediateProject": "Apprendre à monter une lanterne d'élevage en suspension avec disques en filet tendu.",
            "advancedProject": "Maîtriser les protocoles de vérification de survie des naissains après une période de grand froid.",
            "portfolioIdeas": [
                "Attestation de stage en ferme maricole",
                "Journal des opérations d'élevage réalisées"
            ]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "La manipulation délicate des coquilles vivantes et la pose manuelle des naissains ne sont pas automatisables par des machines rigides.",
            "automatedTasks": [
                "Calibrage automatique par trieuses mécaniques"
            ],
            "emergingSkills": [
                "Utilisation de balances connectées pour la traçabilité des lots"
            ],
            "humanEdge": "La délicatesse de la main pour manipuler un jeune pétoncle sans briser le bord fragile de sa coquille."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les ouvrières et collectrices maricoles du delta du Saloum (Fatick, Foundiougne, Dionewar) développent des techniques modernes d'engraissement d'huîtres sur guirlandes suspendues, générant des revenus autonomes majeurs pour les femmes rurales.",
            "localSectors": [
                "Delta du Saloum (GIE de femmes transformatrices d'huîtres)",
                "Casamance (estuaire du fleuve Casamance)",
                "Fermes pilotes de l'Agence Nationale de l'Aquaculture (ANA)"
            ],
            "remoteWork": "100% sur le terrain.",
            "entrepreneurship": "Création d'un atelier d'engraissement et de conditionnement d'huîtres fraîches locales pour les hôtels de Dakar et Saly."
        },
        "relatedJobSlugs": [
            "mariculteur",
            "aquaculteur",
            "aide-pecheur",
            "prepose-transformation-produits-marins"
        ],
        "connectedFamilies": [
            "environnement-climat",
            "artisanat-metiers-art",
            "commerce-marketing"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Ouvrier maricole ÉvoluPêches",
                "url": "https://evolupeches.org/metiers/ouvrier-ouvriere-maricole/",
                "source": "ÉvoluPêches"
            }
        ],
        "sources": [
            "ÉvoluPêches",
            "ÉPAQ",
            "ANA Sénégal"
        ],
        "interests": [
            "nature-environnement",
            "construire-fabriquer"
        ],
        "saviezVous": {
            "statut": "metier_stable",
            "fait": "Selon ÉvoluPêches, l'ouvrier maricole qui démontre de la rigueur et apprend les techniques complètes de production peut évoluer directement vers le rôle de mariculteur exploitant en reprenant ou créant des concessions en mer.",
            "pourquoi": "La mariculture récompense l'expérience pratique acquise au contact direct des cycles du milieu marin.",
            "a_retenir": "Un travailleur de la mer discret mais indispensable à l'essor de l'aquaculture durable."
        },
        "salaryRanges": {
            "quebec": {
                "raw": "32 000 - 55 000 $ CAD/an (Source : ÉvoluPêches / Secteur maricole)",
                "range": "32 000 - 55 000 $ CAD/an (Source : ÉvoluPêches / Secteur maricole)",
                "source": "ÉvoluPêches"
            },
            "senegal": {
                "raw": "180 000 - 500 000 FCFA / mois (Fermes aquacoles et conchylicoles)",
                "range": "180 000 - 500 000 FCFA / mois (Fermes aquacoles et conchylicoles)",
                "source": "Filières maritimes & halieutiques (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "prepose-transformation-produits-marins",
        "slug": "prepose-transformation-produits-marins",
        "title": "Préposé / Préposée à la Transformation des Produits Marins",
        "aliases": [
            "Ouvrier de transformation des produits marins",
            "Fileteur de poisson",
            "Opérateur en usine de produits aquatiques",
            "Préposée à la transformation"
        ],
        "icon": "🏭",
        "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Pêche, Aquaculture & Ressources Marines",
        "domainId": "peche-aquaculture",
        "subdomain": "Transformation des produits marins",
        "sourceEvoluPeches": true,
        "cnpCode": "9618 ou 9463",
        "isEmerging": false,
        "level": "AEP en opération d’équipements de transformation alimentaire, PAMT ou Formation en entreprise",
        "salary": "🇨🇦 Québec : 32 000 - 52 000 $ CAD/an (Source : ÉvoluPêches / Usines de transformation) • 🇸🇳 Sénégal : 180 000 - 550 000 FCFA / mois (Usines de conserve de thon et mareyage de Dakar)",
        "simpleDefinition": "Le préposé à la transformation prépare les poissons, crustacés et mollusques en usine : filetage, cuisson des crabes ou crevettes, fumaison, congélation rapide et emballage étanche selon des normes sanitaires strictes.",
        "shortDescription": "Fiche documentée par ÉvoluPêches, cet opérateur indispensable transforme les captures brutes en produits savoureux, calibrés et prêts à cuisiner pour les marchés mondiaux.",
        "longDescription": "Le préposé à la transformation effectue principalement les tâches liées à la préparation, à la cuisson, à la fumaison, à la congélation et à l'emballage des produits marins en vue d'obtenir des produits de qualité et respectant les normes établies. Selon ÉvoluPêches, il apprête avec dextérité le poisson (écaillage, étêtage, levage des filets, désarêtage), les crustacés (cuisson au bain, décorticage de crabe ou crevette) et les mollusques, sous la supervision des contremaîtres d'usine.",
        "mainObjective": "Transformer avec hygiène, précision et rapidité la matière première marine fraîche en filets, portions ou conserves de haute qualité marchande.",
        "companyRole": "Opérateur de transformation au cœur de la chaîne de valeur agroalimentaire marine.",
        "characteristics": [
            "Travail manuel",
            "Bonne condition physique",
            "Esprit d'équipe"
        ],
        "regions": [
            "Partout au Québec, avec forte proportion en régions maritimes (Côte-Nord, Gaspésie, Îles-de-la-Madeleine, Bas-Saint-Laurent)"
        ],
        "sourceContext": "Québec / Canada (ÉvoluPêches)",
        "skillsRecognition": {
            "available": true,
            "description": "Dispositif officiel de reconnaissance des compétences de la main-d'œuvre (RAC) d'ÉvoluPêches pour le métier de préposé à la transformation, accessible avec 3 000 heures d'expérience professionnelle dans le métier pour obtenir le certificat de qualification.",
            "source": "ÉvoluPêches"
        },
        "workEnvironment": [
            "🏭 Ateliers réfrigérés d'usines de transformation de produits de la mer (température contrôlée 8-12°C)",
            "🥼 Tenue sanitaire stérile intégrale (bottes blanches, tablier imperméable, charlotte, gants en cotte de mailles)",
            "❄️ Lignes de congélation rapide à l'azote, tunnels de fumaison et autoclaves de cuisson"
        ],
        "missions": [
            "Apprêter les poissons (étêtage, éviscération, levage de filets, dépeçage, désarêtage)",
            "Cuire, refroidir et décortiquer les crustacés (homards, crabes des neiges, crevettes nordiques)",
            "Assurer les opérations de fumaison traditionnelle ou industrielle des poissons (saumon, flétan, hareng)",
            "Conduire les machines de congélation cryogénique ou sous plaques et de mise sous vide",
            "Peser, calibrer, étiqueter et emballer les produits finis selon les cahiers des charges clients"
        ],
        "typicalDay": [
            {
                "time": "06:00",
                "title": "Passage au sas sanitaire et prise de poste",
                "desc": "Désinfection des bottes, lavage des mains stérile et affûtage au fusil des couteaux de filetage."
            },
            {
                "time": "07:30",
                "title": "Ligne de filetage de poisson frais",
                "desc": "Levage de filets de sébaste ou de morue avec geste précis pour maximiser le rendement matière sans arêtes."
            },
            {
                "time": "11:30",
                "title": "Surveillance de la cuisson des crabes",
                "desc": "Contrôle des températures à cœur dans les cuiseurs automatisés et trempage en saumure glacée."
            },
            {
                "time": "14:30",
                "title": "Conditionnement et operculage sous vide",
                "desc": "Vérification du scellage des barquettes, passage au détecteur de métaux et mise en cartons d'expédition."
            }
        ],
        "skills": {
            "technical": [
                "Techniques manuelles expertes de filetage et découpe de poissons",
                "Paramètres de cuisson et de saumurage des crustacés",
                "Maîtrise des procédés de surgélation rapide (IQF) et de fumoir",
                "Normes d'hygiène HACCP en milieu aquatique",
                "Conduite des équipements de thermoformage et d'operculage sous vide"
            ],
            "human": [
                "Dextérité manuelle et rapidité gestuelle soutenue",
                "Endurance physique en environnement froid et humide",
                "Esprit d'équipe pour maintenir le rythme de la chaîne",
                "Rigueur absolue dans le respect des règles sanitaires"
            ],
            "tools": [
                "Couteaux de filetage professionnels flexibles et fusils d'affûtage",
                "Gants de protection en cotte de mailles en acier inoxydable",
                "Trieuses pondérales automatiques et peseuses associatives",
                "Tunnels de surgélation à spirale et operculeuses sous vide"
            ],
            "analytical": [
                "Calcul du ratio de rendement matière (poids de filet / poids brut)",
                "Contrôle visuel de l'absence totale de parasites (anisakis) sous table de mirage lumineuse"
            ]
        },
        "specializations": [
            "Fileteur spécialisé poisson noble",
            "Opérateur de cuisson et décorticage de crustacés",
            "Saurisseur / Maître de fumaison marine",
            "Conducteur d'équipements de conditionnement sous vide"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Attestation d'études professionnelles",
                    "title": "Attestation d’études professionnelles (AEP) en opération d’équipements de transformation alimentaire",
                    "desc": "Formation québécoise qualifiante dispensée en centre de formation professionnelle."
                },
                {
                    "step": "Compagnonnage certifié",
                    "title": "Programme d’apprentissage en milieu de travail (PAMT)",
                    "desc": "Apprentissage en usine avec un tuteur compagnon menant à un certificat de qualification professionnelle."
                },
                {
                    "step": "Reconnaissance de l'expérience",
                    "title": "Reconnaissance des compétences de la main-d’œuvre (RAC)",
                    "desc": "Dispositif d'ÉvoluPêches validant officiellement les compétences après 3 000 heures de pratique."
                }
            ],
            "schools": [
                {
                    "name": "Centres de formation professionnelle du Québec (Inforoute FPT) — Québec",
                    "country": "Canada",
                    "scope": "International"
                },
                {
                    "name": "Institut de Technologie Alimentaire du Québec (ITAQ) — Québec",
                    "country": "Canada",
                    "scope": "Canada"
                },
                {
                    "name": "Institut de Technologie Alimentaire (ITA Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certificat de qualification professionnelle PAMT (Emploi-Québec)",
                "Certificat d'hygiène et salubrité alimentaires (MAPAQ)"
            ],
            "schoolSubjects": [
                "Technologie alimentaire",
                "Hygiène HACCP",
                "Découpe industrielle",
                "Sécurité au travail"
            ]
        },
        "career": {
            "sectors": [
                "Usines de transformation de poissons et fruits de mer",
                "Conserveries de thon et sardineries",
                "Entreprises de saurisserie et fumoirs artisanaux",
                "Ateliers de mareyage des ports de pêche"
            ],
            "employerTypes": [
                "Industries de transformation aquatique",
                "Grandes coopératives de pêcheurs",
                "Grossistes maritimes"
            ],
            "evolution": "Préposé à la transformation ➔ Préposé qualifié / Fileteur d'élite ➔ Superviseur d'équipe de ligne ➔ Contremaître d'usine ➔ Contrôleur de la qualité en usine",
            "pros": "Débouchés massifs en usine côtière, reconnaissance formelle des compétences sans prérequis scolaire lourd, évolution hiérarchique rapide pour les profils assidus.",
            "cons": "Travail en atmosphère réfrigérée, gestes répétitifs exigeant une bonne ergonomie posturale, odeur caractéristique inhérente aux produits de la mer."
        },
        "gettingStarted": {
            "beginnerProject": "S'entraîner à lever parfaitement les filets d'un poisson rond et d'un poisson plat sans laisser de chair sur l'arête centrale.",
            "intermediateProject": "Mettre en pratique un protocole complet de désinfection d'un plan de découpe en respectant les étapes BPH (Bonnes Pratiques d'Hygiène).",
            "advancedProject": "Réaliser une séance de fumaison à froid d'un filet de saumon avec maîtrise des dosages de sel, sucre et temps de séchage.",
            "portfolioIdeas": [
                "Photos de découpe de filets réguliers et nets",
                "Attestation de participation à une formation hygiène alimentaire"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des robots équipés de jets d'eau sous très haute pression découpent certaines espèces, mais la délicatesse d'éviscération des crabes ou des poissons nobles reste l'apanage des mains expertes.",
            "automatedTasks": [
                "Tri automatique des crevettes par caméras haute cadence",
                "Pesée et operculage automatisés"
            ],
            "emergingSkills": [
                "Pilotage de trancheurs automatiques à guidage laser"
            ],
            "humanEdge": "La sensibilité tactile pour déceler une arête restante et retirer la chair fragile du homard sans l'écraser."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les usines de transformation de poisson de Dakar (conserves de thon SCASA, usines de conditionnement de poulpe et crevettes de la zone portuaire) et les sites traditionnels de fumage et séchage de Guet Ndar et Joal emploient des milliers de femmes et d'ouvriers.",
            "localSectors": [
                "Zone industrielle du Port Autonome de Dakar (conserves et surgélation)",
                "Centres de mareyage de Joal-Fadiouth et Mbour",
                "GIE de femmes transformatrices de poisson (kethiakh, tambadiang)"
            ],
            "remoteWork": "100% sur le site de transformation.",
            "entrepreneurship": "Création d'une micro-unité semi-industrielle de fumage hygiénique de poisson noble sous emballage sous vide pour les grandes surfaces de Dakar."
        },
        "relatedJobSlugs": [
            "controleur-qualite-produits-aquatiques",
            "technicien-maintenance-industrielle-maritime",
            "conducteur-ligne-agroalimentaire",
            "ouvrier-maricole"
        ],
        "connectedFamilies": [
            "industrie-ingenierie",
            "commerce-marketing",
            "sante-biomedical"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Préposé à la transformation ÉvoluPêches",
                "url": "https://evolupeches.org/metiers/prepose-preposee-a-la-transformation-des-produits-marins/",
                "source": "ÉvoluPêches"
            }
        ],
        "sources": [
            "ÉvoluPêches",
            "ITAQ",
            "PAMT Québec",
            "ITA Dakar"
        ],
        "interests": [
            "construire-fabriquer",
            "nature-environnement"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon ÉvoluPêches, les usines maritimes québécoises recrutent massivement des préposés à la transformation et ont mis en place un dispositif PAMT avec prime de qualification pour pallier la pénurie de main-d'œuvre côtière.",
            "pourquoi": "La saison de pointe (printemps-été) demande de traiter des tonnes de homards et crabes en un temps record pour garantir leur extrême fraîcheur sur les tables du monde entier.",
            "a_retenir": "Un métier moteur de l'économie littorale, offrant une trajectoire documentée vers les postes de chef d'équipe et contrôle qualité."
        },
        "salaryRanges": {
            "quebec": {
                "raw": "32 000 - 52 000 $ CAD/an (Source : ÉvoluPêches / Usines de transformation)",
                "range": "32 000 - 52 000 $ CAD/an (Source : ÉvoluPêches / Usines de transformation)",
                "source": "ÉvoluPêches"
            },
            "senegal": {
                "raw": "180 000 - 550 000 FCFA / mois (Usines de conserve de thon et mareyage de Dakar)",
                "range": "180 000 - 550 000 FCFA / mois (Usines de conserve de thon et mareyage de Dakar)",
                "source": "Filières maritimes & halieutiques (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "controleur-qualite-produits-aquatiques",
        "slug": "controleur-qualite-produits-aquatiques",
        "title": "Contrôleur de la Qualité en Usine de Produits Aquatiques / Auditeur HACCP Marin",
        "aliases": [
            "Contrôleuse de la qualité",
            "Technicienne en contrôle qualité des produits marins",
            "Responsable qualité usine marée",
            "Inspecteur qualité poissons et fruits de mer"
        ],
        "icon": "🧪",
        "image": "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Pêche, Aquaculture & Ressources Marines",
        "domainId": "peche-aquaculture",
        "subdomain": "Qualité & sécurité des produits aquatiques",
        "sourceEvoluPeches": true,
        "cnpCode": "2222 ou 22111",
        "isEmerging": false,
        "level": "DEC en transformation aquatique, AEC en contrôle qualité (ÉPAQ) ou BAC en sciences des aliments",
        "salary": "🇨🇦 Québec : 42 000 - 78 000 $ CAD/an (Source : ÉvoluPêches / Agroalimentaire marin) • 🇸🇳 Sénégal : 350 000 - 1 100 000 FCFA / mois (Laboratoires d'inspection sanitaire, ASN, usines exportatrices)",
        "simpleDefinition": "Le contrôleur qualité en usine aquatique inspecte les poissons et fruits de mer, prélève des échantillons microbiologiques, vérifie les températures et veille au respect strict des normes sanitaires (HACCP) et des exigences d'exportation.",
        "shortDescription": "Fiche documentée par ÉvoluPêches, ce garant de la salubrité veille à ce qu'aucun produit marin impropre ou contaminé ne quitte l'usine pour la consommation humaine.",
        "longDescription": "Les produits de la mer sont hautement périssables et sensibles aux dégradations bactériennes et aux toxines. Selon ÉvoluPêches, le contrôleur conçoit, prépare et voit à la mise en œuvre efficace des procédures de travail, inspecte les lieux de production et échantillonne la matière première lors des différentes étapes de transformation. Il analyse la fraîcheur organoleptique, teste l'eau des bassins et valide la conformité des étiquetages nutritionnels et de traçabilité.",
        "mainObjective": "Garantir la sécurité sanitaire irréprochable des aliments marins, la traçabilité des lots et la conformité aux normes internationales d'exportation.",
        "companyRole": "Bouclier sanitaire de l'usine et garant officiel de la conformité réglementaire.",
        "characteristics": [
            "Minutie",
            "Intérêt pour les nouvelles technologies",
            "Capacité d'application des règles",
            "Détection des problèmes",
            "Méthode"
        ],
        "regions": [
            "Partout au Québec, mais forte proportion des emplois en régions maritimes (Côte-Nord, Gaspésie, Îles-de-la-Madeleine, Bas-Saint-Laurent)"
        ],
        "sourceContext": "Québec / Canada (ÉvoluPêches)",
        "workEnvironment": [
            "🔬 Laboratoire d'analyses microbiologiques et physico-chimiques attenant à l'usine",
            "🏭 Ateliers de transformation pour l'inspection des chaînes de production",
            "📋 Rencontres régulières avec les inspecteurs gouvernementaux de salubrité (ACIA / MAPAQ)"
        ],
        "missions": [
            "Concevoir, préparer et auditer l'application des procédures écrites du plan HACCP",
            "Inspecter les installations de production, la propreté des lignes et l'hygiène du personnel",
            "Échantillonner la matière première à réception et aux étapes clés de cuisson et congélation",
            "Effectuer les analyses d'altération (azote basique volatil total ABVT, pH, présence de parasites)",
            "Gérer les non-conformités, bloquer les lots suspects et superviser les audits clients internationaux"
        ],
        "typicalDay": [
            {
                "time": "06:30",
                "title": "Inspection sanitaire avant démarrage",
                "desc": "Contrôle à l'écouvillon de surface des tapis convoyeurs et validation de l'autorisation de démarrage de la ligne."
            },
            {
                "time": "09:00",
                "title": "Contrôle de réception des prises de pêche",
                "desc": "Mesure de la température au cœur des poissons à bord des camions isothermes et test organoleptique (yeux, ouïes, fermeté)."
            },
            {
                "time": "13:30",
                "title": "Analyses microbiologiques au laboratoire",
                "desc": "Ensemencement sur boîtes de Pétri pour recherche de coliformes, salmonelles et listeria dans les produits finis."
            },
            {
                "time": "16:00",
                "title": "Vérification des certificats d'exportation",
                "desc": "Validation des dossiers de traçabilité et délivrance des bons de libération des palettes pour les marchés américain et européen."
            }
        ],
        "skills": {
            "technical": [
                "Normes internationales de sécurité sanitaire des produits aquatiques (HACCP, Codex Alimentarius, BRC/IFS)",
                "Microbiologie alimentaire spécifique aux produits marins (Listeria monocytogenes, Vibrio, histamine)",
                "Techniques d'évaluation sensorielle de fraîcheur (grille Torry / Quality Index Method QIM)",
                "Chimie analytique des produits de la mer (dosage de l'histamine, des sulfites et métaux lourds)",
                "Réglementation sur l'étiquetage des allergènes et la traçabilité des espèces marines"
            ],
            "human": [
                "Rigueur absolue et intransigeance face aux écarts sanitaires",
                "Grand sens de l'observation et détection rapide des anomalies",
                "Pédagogie pour expliquer les règles aux ouvriers sans complaisance",
                "Aptitude à résister à la pression commerciale en cas de blocage de lot"
            ],
            "tools": [
                "Luminomètres ATP pour contrôles d'hygiène de surface instantanés",
                "Thermomètres à sonde piquée étalonnés et enregistreurs de température",
                "Réfractomètres, pH-mètres et kits de dosage rapide de l'histamine",
                "Logiciels de gestion documentaire qualité et traçabilité de lots"
            ],
            "analytical": [
                "Interprétation des courbes de cinétique bactérienne",
                "Analyse des causes racines lors d'une dérive de température de cuisson"
            ]
        },
        "specializations": [
            "Qualité des conserves de poisson (stérilisation)",
            "Qualité des produits crus et surgelés exportés",
            "Contrôle des toxines marines conchylicoles",
            "Auditeur de certifications durables (MSC, ASC)"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Diplôme collégial",
                    "title": "Diplôme d’études collégiales (DEC) en transformation des produits aquatiques",
                    "desc": "Formation de référence dispensée à l'ÉPAQ."
                },
                {
                    "step": "Attestation collégiale",
                    "title": "Attestation d’études collégiales (AEC) en contrôle de la qualité des produits aquatiques",
                    "desc": "Formation ciblée sur le laboratoire et le contrôle en usine."
                },
                {
                    "step": "Diplôme universitaire",
                    "title": "Baccalauréat en sciences et technologie des aliments (BAC)",
                    "desc": "Formation supérieure à l'Université Laval ou McGill University."
                },
                {
                    "step": "Apprentissage PAMT",
                    "title": "Programme d’apprentissage en milieu de travail (PAMT)",
                    "desc": "Perfectionnement professionnel documenté par ÉvoluPêches."
                }
            ],
            "schools": [
                {
                    "name": "École des pêches et de l’aquaculture du Québec (ÉPAQ) — Québec",
                    "country": "Canada",
                    "scope": "International"
                },
                {
                    "name": "Institut de Technologie Agroalimentaire du Québec (ITAQ La Pocatière) — Québec",
                    "country": "Canada",
                    "scope": "Canada"
                },
                {
                    "name": "Université Laval (Faculté des sciences de l'agriculture et de l'alimentation) — Québec",
                    "country": "Canada",
                    "scope": "Canada"
                },
                {
                    "name": "Institut de Technologie Alimentaire (ITA Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certificat de responsable HACCP certifié",
                "Auditeur interne ISO 22000 / FSSC 22000"
            ],
            "schoolSubjects": [
                "Microbiologie",
                "Chimie alimentaire",
                "Droit alimentaire",
                "Méthode HACCP"
            ]
        },
        "career": {
            "sectors": [
                "Grandes usines de transformation de produits marins",
                "Conserveries et ateliers de saurisserie",
                "Laboratoires d'analyses agroalimentaires privés (SGS, Bureau Veritas)",
                "Agences gouvernementales d'inspection des aliments (ACIA, MAPAQ, DGAL)"
            ],
            "employerTypes": [
                "Industries de transformation",
                "Organismes d'audit et de certification",
                "Services vétérinaires d'État"
            ],
            "evolution": "Technicien de laboratoire qualité ➔ Contrôleur qualité usine ➔ Directeur de la qualité ➔ Directeur de production d'usine",
            "pros": "Poste éminemment stratégique garantissant la réputation de l'entreprise, forte reconnaissance technique, passerelle directe vers la direction d'usine.",
            "cons": "Responsabilité lourde en cas de litige sanitaire, nécessité fréquente de stopper une ligne en cas de non-conformité, horaires matinaux."
        },
        "gettingStarted": {
            "beginnerProject": "Évaluer la fraîcheur de 5 poissons entiers sur un étal de poissonnier en appliquant la grille officielle QIM (Quality Index Method).",
            "intermediateProject": "Rédiger le tableau d'analyse des dangers biologiques, chimiques et physiques pour une ligne de cuisson de crevettes.",
            "advancedProject": "Réaliser un audit à blanc complet d'un atelier de découpe de poisson selon le référentiel de salubrité de l'Agence d'inspection des aliments.",
            "portfolioIdeas": [
                "Plan de maîtrise sanitaire HACCP marin complet",
                "Rapport d'audit qualité illustré avec actions correctives"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des caméras multispectrales et des nez électroniques automatisent la détection de l'oxydation des graisses et des arêtes cachées, facilitant le travail de surveillance de l'auditeur.",
            "automatedTasks": [
                "Enregistrement sans fil continu des températures des chambres froides",
                "Détection automatique des défauts de scellage d'emballages par vision"
            ],
            "emergingSkills": [
                "Analyse rapide de l'ADN d'espèces marines par PCR portative contre la fraude d'étiquetage",
                "Traçabilité sur technologie blockchain alimentaire"
            ],
            "humanEdge": "L'intégrité morale pour refuser le départ d'un conteneur douteux et le dialogue constructif avec le chef de production."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la conformité aux normes sanitaires européennes est indispensable pour exporter poissons nobles, crevettes et poulpes vers le marché international. La Direction des Pêches Maritimes (DPM) et les laboratoires agréés de Dakar emploient des contrôleurs qualité stricts.",
            "localSectors": [
                "Industries exportatrices de produits halieutiques de Dakar et Thiès",
                "Laboratoire national d'analyse des produits de la pêche (DPM Dakar)",
                "Association Sénégalaise de Normalisation (ASN)"
            ],
            "remoteWork": "Rapports d'audit faisables en télétravail partiel, inspections sur place requises.",
            "entrepreneurship": "Création d'un cabinet d'assistance technique et d'audit HACCP pour les PME de pêche artisanale souhaitant exporter vers l'Europe."
        },
        "relatedJobSlugs": [
            "responsable-qualite-haccp-agri",
            "prepose-transformation-produits-marins",
            "biologiste-marin",
            "ingenieur-agroalimentaire"
        ],
        "connectedFamilies": [
            "sante-biomedical",
            "conseil-audit",
            "droit-justice"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Contrôleur de la qualité ÉvoluPêches",
                "url": "https://evolupeches.org/metiers/controleur-controleuse-de-la-qualite-en-usine-de-transformation-de-produits-aquatiques/",
                "source": "ÉvoluPêches"
            }
        ],
        "sources": [
            "ÉvoluPêches",
            "ÉPAQ",
            "Université Laval",
            "DPM Sénégal"
        ],
        "interests": [
            "resoudre-problemes",
            "nature-environnement"
        ],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Selon ÉvoluPêches, les perspectives d'avancement du contrôleur de la qualité mènent directement aux fonctions prestigieuses de Directeur de la qualité et Directeur de production.",
            "pourquoi": "La maîtrise intime des procédés industriels et des règles de sécurité sanitaire fait de ces professionnels les meilleurs candidats pour diriger l'ensemble d'une usine alimentaire.",
            "a_retenir": "Le garant inflexible de la fraîcheur et de la confiance des consommateurs dans les délices de l'océan."
        },
        "salaryRanges": {
            "quebec": {
                "raw": "42 000 - 78 000 $ CAD/an (Source : ÉvoluPêches / Agroalimentaire marin)",
                "range": "42 000 - 78 000 $ CAD/an (Source : ÉvoluPêches / Agroalimentaire marin)",
                "source": "ÉvoluPêches"
            },
            "senegal": {
                "raw": "350 000 - 1 100 000 FCFA / mois (Laboratoires d'inspection sanitaire, ASN, usines exportatrices)",
                "range": "350 000 - 1 100 000 FCFA / mois (Laboratoires d'inspection sanitaire, ASN, usines exportatrices)",
                "source": "Filières maritimes & halieutiques (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "technicien-maintenance-industrielle-maritime",
        "slug": "technicien-maintenance-industrielle-maritime",
        "title": "Technicien en Maintenance Industrielle (Usines Maritimes & Agroalimentaires)",
        "aliases": [
            "Technicienne en maintenance industrielle",
            "Électromécanicien d'usine de produits marins",
            "Technicien de maintenance agro-maritime",
            "Mécanicien d'usine de pêche"
        ],
        "icon": "⚙️",
        "image": "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Pêche, Aquaculture & Ressources Marines",
        "domainId": "peche-aquaculture",
        "subdomain": "Maintenance & équipements marins",
        "sourceEvoluPeches": true,
        "cnpCode": "2243 ou 7311",
        "isEmerging": false,
        "level": "Diplôme d’études collégiales (DEC) en maintenance industrielle ou BTS Maintenance des systèmes",
        "salary": "🇨🇦 Québec : 45 000 - 85 000 $ CAD/an (Source : ÉvoluPêches / Industrie manufacturière) • 🇸🇳 Sénégal : 300 000 - 1 000 000 FCFA / mois (Usines agro-maritimes de Dakar)",
        "simpleDefinition": "Le technicien en maintenance industrielle assure le fonctionnement sans faille des machines de l'usine aquatique : convoyeurs étanches, découpeuses, cuiseurs, tunnels de congélation et systèmes pneumatiques.",
        "shortDescription": "Fiche documentée par ÉvoluPêches, cet expert polyvalent évite les arrêts de ligne coûteux lors des pics de débarquement où des tonnes de poisson doivent être traitées d'urgence.",
        "longDescription": "Le technicien s'occupe de l'entretien préventif et régulier du matériel utilisé dans la production. Selon ÉvoluPêches, il joue ainsi un rôle non négligeable dans le bon fonctionnement des équipements de la chaîne de production. Dans certaines usines de transformation de produits marins, il s'occupe aussi de l'entretien des bâtiments et du matériel roulant (chariots élévateurs, chargeurs). Il diagnostique les pannes mécaniques, hydrauliques, pneumatiques et électriques, fabrique et remplace des pièces et optimise les systèmes.",
        "mainObjective": "Maintenir un taux de disponibilité maximal des lignes de production automatisées en milieu humide et corrosif.",
        "companyRole": "Pilote de la continuité industrielle et garant de la sécurité technique des installations.",
        "characteristics": [
            "Esprit d'équipe",
            "Polyvalence",
            "Intérêt pour la résolution de problème",
            "Autonomie",
            "Esprit d'analyse",
            "Rigueur et minutie"
        ],
        "regions": [
            "Partout au Québec"
        ],
        "sourceContext": "Québec / Canada (ÉvoluPêches)",
        "workEnvironment": [
            "🏭 Ateliers de production d'usine marine au contact de convoyeurs et machines de découpe",
            "🛠️ Atelier de maintenance mécanique avec tours, fraiseuses et postes de soudure",
            "❄️ Salles des compresseurs frigorifiques industriels à ammoniac ou fréon"
        ],
        "missions": [
            "Entretenir les machines de production (fileteuses automatiques, écailleuses, cuiseurs à vapeur)",
            "Diagnostiquer rapidement les pannes d'ordre mécanique, hydraulique, pneumatique et électrique",
            "Usiner, fabriquer et remplacer les pièces d'usure en acier inoxydable alimentaire",
            "Concevoir, modifier et optimiser des équipements pour améliorer les cadences et la sécurité",
            "Élaborer, implanter et gérer les programmes de maintenance préventive informatisée (GMAO)"
        ],
        "typicalDay": [
            {
                "time": "06:00",
                "title": "Tournée préventive avant l'arrivée des équipes",
                "desc": "Vérification des graissages des roulements inoxydables étanches et contrôle des tensions de courroies des fileteuses."
            },
            {
                "time": "09:30",
                "title": "Dépannage d'urgence sur convoyeur de crabe",
                "desc": "Remplacement express d'un moteur électrique grillé pour éviter l'arrêt de la ligne de cuisson."
            },
            {
                "time": "13:30",
                "title": "Usinage d'un axe en atelier",
                "desc": "Tournage d'un nouvel axe en inox 316L pour réparer une pompe de saumure corrodée par l'eau de mer."
            },
            {
                "time": "16:00",
                "title": "Mise à jour du logiciel de GMAO",
                "desc": "Clôture des bons de travail, commande de roulements et programmation des révisions du week-end."
            }
        ],
        "skills": {
            "technical": [
                "Mécanique industrielle et transmission de puissance en milieu humide",
                "Électrotechnique, variateurs de vitesse et automates programmables industriels (PLC)",
                "Pneumatique industrielle et vérins inoxydables",
                "Usinage conventionnel (tour, fraiseuse) et soudure TIG inox alimentaire",
                "Gestion de Maintenance Assistée par Ordinateur (GMAO)"
            ],
            "human": [
                "Sens aigu de la logique et méthode rigoureuse de diagnostic",
                "Polyvalence et capacité à passer de la mécanique à l'électricité",
                "Résistance au stress face aux impératifs horaires de production",
                "Autonomie et esprit d'initiative"
            ],
            "tools": [
                "Appareils de diagnostic de vibration et caméras thermiques d'armoires électriques",
                "Postes de soudure TIG gaz inerte et outillage d'atelier inox",
                "Multimètres, pinces ampèremétriques et consoles de programmation d'automates",
                "Logiciels de GMAO et schémas industriels de tuyauterie et instrumentation (P&ID)"
            ],
            "analytical": [
                "Analyse des temps moyens de bon fonctionnement (MTBF) et temps moyen de réparation (MTTR)",
                "Optimisation des consommations d'air comprimé et d'eau de nettoyage"
            ]
        },
        "specializations": [
            "Automatisme et robotique industrielle marine",
            "Maintenance frigorifique industrielle lourde",
            "Chaudronnerie et soudure inox alimentaire",
            "Direction d'équipe de maintenance"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Diplôme collégial",
                    "title": "Diplôme d’études collégiales (DEC) en maintenance industrielle",
                    "desc": "Formation québécoise de référence dispensée aux Cégeps de Gaspé, Sept-Îles, Rimouski."
                },
                {
                    "step": "Formation professionnelle",
                    "title": "DEP en électromécanique de systèmes automatisés",
                    "desc": "Alternative axée sur la pratique d'atelier."
                },
                {
                    "step": "Formation continue",
                    "title": "Habilitations industrielles en réfrigération et électricité haute puissance",
                    "desc": "Perfectionnement au fil de la carrière."
                }
            ],
            "schools": [
                {
                    "name": "Cégep de la Gaspésie et des Îles (campus de Gaspé) — Québec",
                    "country": "Canada",
                    "scope": "International"
                },
                {
                    "name": "Cégep de Sept-Îles / Cégep de Rimouski — Québec",
                    "country": "Canada",
                    "scope": "Canada"
                },
                {
                    "name": "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certificat de mécanicien industriel certifié (Sceau rouge / Interprovincial)",
                "Licence d'électricien d'entretien industriel"
            ],
            "schoolSubjects": [
                "Électromécanique",
                "Pneumatique",
                "Hydraulique",
                "Automatisme"
            ]
        },
        "career": {
            "sectors": [
                "Usines de transformation de produits marins et poissonneries industrielles",
                "Industries agroalimentaires générales",
                "Grandes conserveries",
                "Chantiers de construction d'équipements agroalimentaires"
            ],
            "employerTypes": [
                "Groupes industriels agroalimentaires",
                "PME de transformation des pêches"
            ],
            "evolution": "Technicien de maintenance junior ➔ Électromécanicien senior de quart ➔ Superviseur de maintenance ➔ Directeur de maintenance d'usine",
            "pros": "Métier intellectuellement captivant où chaque panne est une énigme concrète à résoudre, très forte demande sur le marché de l'emploi, rôle indispensable.",
            "cons": "Astreintes et interventions d'urgence lors des pannes critiques, travail dans le bruit et les environnements froids ou humides de l'usine."
        },
        "gettingStarted": {
            "beginnerProject": "Câbler un petit circuit de démarrage d'un moteur électrique triphasé avec disjoncteur magnétothermique et bouton d'arrêt d'urgence.",
            "intermediateProject": "Diagnostiquer et remplacer un joint torique défaillant sur un distributeur pneumatique 5/2 de chaîne de tri.",
            "advancedProject": "Programmer un cycle automatique de convoyage avec cellule photoélectrique et vérin d'éjection sur un automate Siemens ou Schneider.",
            "portfolioIdeas": [
                "Schéma de câblage d'une armoire de commande",
                "Procédure écrite de maintenance préventive d'un tunnel de congélation"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des capteurs IoT de vibrations fixés sur les moteurs alertent par algorithme d'un échauffement anormal de roulement des jours avant qu'il ne casse.",
            "automatedTasks": [
                "Déclenchement automatique des ordres de travail prédictifs par IA industrielle"
            ],
            "emergingSkills": [
                "Programmation et maintenance de cobots de palettisation",
                "Intégration de capteurs connectés LoRaWAN dans les ateliers"
            ],
            "humanEdge": "La dextérité manuelle pour aligner des poulies au laser et le diagnostic intuitif basé sur le bruit d'un mécanisme en marche."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les techniciens en maintenance industrielle formés au CFPT Sénégal-Japon ou à l'ESP de Dakar sont activement chassés par les grandes usines de transformation du poisson (Amerger, Africamer, Ikagel) pour maintenir les lignes de congélation fonctionnelles.",
            "localSectors": [
                "Zone industrielle du Port Autonome de Dakar",
                "Entrepôts frigorifiques de stockage maritime",
                "Usines de conserves et farine de poisson"
            ],
            "remoteWork": "Exclu, présence en usine requise.",
            "entrepreneurship": "Création d'une entreprise de sous-traitance de maintenance électromécanique et dépannage d'urgence pour les usines de marée."
        },
        "relatedJobSlugs": [
            "mecanicien-marin",
            "conducteur-ligne-agroalimentaire",
            "technicien-maintenance-agroequipement",
            "prepose-transformation-produits-marins"
        ],
        "connectedFamilies": [
            "industrie-ingenierie",
            "transport-logistique",
            "technologies-donnees"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Technicien en maintenance industrielle ÉvoluPêches",
                "url": "https://evolupeches.org/metiers/technicien-technicienne-en-maintenance-industrielle/",
                "source": "ÉvoluPêches"
            }
        ],
        "sources": [
            "ÉvoluPêches",
            "Cégep de Gaspé",
            "Inforoute FPT",
            "CFPT Sénégal-Japon"
        ],
        "interests": [
            "construire-fabriquer",
            "resoudre-problemes"
        ],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon ÉvoluPêches, les perspectives d'avancement mènent rapidement au poste hautement stratégique de Directeur de maintenance de l'usine, avec des responsabilités sur l'ensemble des bâtiments et investissements techniques.",
            "pourquoi": "L'automatisation et la numérisation des usines rendent l'expertise du technicien de maintenance plus indispensable que jamais.",
            "a_retenir": "Le mécanicien de précision qui fait tourner le moteur économique des usines côtières."
        },
        "salaryRanges": {
            "quebec": {
                "raw": "45 000 - 85 000 $ CAD/an (Source : ÉvoluPêches / Industrie manufacturière)",
                "range": "45 000 - 85 000 $ CAD/an (Source : ÉvoluPêches / Industrie manufacturière)",
                "source": "ÉvoluPêches"
            },
            "senegal": {
                "raw": "300 000 - 1 000 000 FCFA / mois (Usines agro-maritimes de Dakar)",
                "range": "300 000 - 1 000 000 FCFA / mois (Usines agro-maritimes de Dakar)",
                "source": "Filières maritimes & halieutiques (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "gestionnaire-ressources-maritimes",
        "slug": "gestionnaire-ressources-maritimes",
        "title": "Gestionnaire des Ressources Maritimes / Chargé d'Aménagement Côtier",
        "aliases": [
            "Gestionnaire de la ressource halieutique",
            "Administrateur des pêches",
            "Conseiller en gestion maritime",
            "Chargé de politique des pêches"
        ],
        "icon": "🌍",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Pêche, Aquaculture & Ressources Marines",
        "domainId": "peche-aquaculture",
        "subdomain": "Gestion des ressources marines",
        "sourceEvoluPeches": true,
        "cnpCode": "0811",
        "isEmerging": false,
        "level": "Maîtrise en gestion des ressources maritimes (UQAR) ou Master Droit/Économie maritime",
        "salary": "🇨🇦 Québec : 55 000 - 105 000 $ CAD/an (Source : ÉvoluPêches / Ministères et organisations maritimes) • 🇸🇳 Sénégal : 450 000 - 1 600 000 FCFA / mois (Ministère des Pêches, Aires Marines Protégées, Projets Banque Mondiale)",
        "simpleDefinition": "Le gestionnaire des ressources maritimes élabore les plans de pêche, fixe les conditions d'attribution des permis de capture, concilie les pêcheurs et les scientifiques, et veille à l'équilibre entre rentabilité économique et préservation des océans.",
        "shortDescription": "Fiche documentée par ÉvoluPêches, ce stratège territorial concilie la pérennité écologique des espèces marines et la prospérité économique des communautés côtières.",
        "longDescription": "L'exploitation des richesses de la mer exige une régulation stricte pour éviter l'épuisement des stocks. Selon ÉvoluPêches, le gestionnaire des ressources maritimes élabore des plans de pêche durables, émet les conditions d'obtention et de transfert des permis, formule des recommandations stratégiques aux autorités, interagit étroitement avec les pêcheurs et leurs organisations représentatives et récolte les données statistiques d'effort de pêche.",
        "mainObjective": "Assurer une gouvernance équilibrée, concertée et pérenne de l'accès aux ressources marines et côtières.",
        "companyRole": "Médiateur stratégique, régulateur des filières de pêche et garant du développement territorial maritime durable.",
        "characteristics": [
            "Esprit d'équipe",
            "Bonne capacité d'analyse, de synthèse et de communication",
            "Jugement",
            "Résolution de situations complexes"
        ],
        "regions": [
            "Capitale-Nationale (Québec) et régions maritimes (Côte-Nord, Bas-Saint-Laurent, Gaspésie, Îles-de-la-Madeleine)"
        ],
        "sourceContext": "Québec / Canada (ÉvoluPêches)",
        "workEnvironment": [
            "🏢 Ministères et organismes publics de gestion de la pêche (Pêches et Océans Canada, DPM)",
            "⚓ Ports et associations de pêcheurs pour les comités de concertation et négociations",
            "📊 Bureaux d'analyse de données statistiques et de cartographie maritime (SIG)"
        ],
        "missions": [
            "Élaborer et mettre à jour les plans de gestion intégrée de la pêche par espèce et par zone",
            "Définir et émettre les conditions réglementaires des permis de pêche commerciale",
            "Formuler des recommandations d'ajustement des Totaux Admissibles de Captures (TAC)",
            "Animer les tables de concertation et dialoguer en continu avec les associations de pêcheurs",
            "Récolter, traiter et analyser les données statistiques de débarquement et de surveillance côtière"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Analyse des statistiques de captures hebdomadaires",
                "desc": "Évaluation du rythme de consommation du quota de crabe des neiges sur la zone maritime côtière."
            },
            {
                "time": "10:30",
                "title": "Comité de concertation avec les associations de pêcheurs",
                "desc": "Présentation des données scientifiques et négociation des dates d'ouverture de la saison du homard."
            },
            {
                "time": "14:00",
                "title": "Rédaction des conditions de permis ministériels",
                "desc": "Intégration de nouvelles clauses de maillage sélectif et de protection des mammifères marins (baleines franches)."
            },
            {
                "time": "16:30",
                "title": "Coordination avec les biologistes marins",
                "desc": "Point de synthèse sur les campagnes scientifiques d'évaluation de la biomasse de crevettes nordiques."
            }
        ],
        "skills": {
            "technical": [
                "Gestion intégrée des zones côtières (GIZC) et droit maritime des pêches",
                "Économie des pêches et analyse des filières de capture et commercialisation",
                "Compréhension des indicateurs de dynamique des populations halieutiques (biomasse, RMD)",
                "Techniques de médiation et négociation de politiques publiques complexes",
                "Statistiques appliquées et Systèmes d'Information Géographique maritimes (QGIS)"
            ],
            "human": [
                "Diplomatie, tact et grand sens de l'écoute des réalités vécues par les pêcheurs",
                "Capacité d'arbitrage impartial et fermeté dans l'application des règles",
                "Clarté d'expression orale et écrite devant des publics variés",
                "Vision systémique à long terme"
            ],
            "tools": [
                "Systèmes d'Information Géographique maritimes (QGIS / ArcGIS Marine)",
                "Bases de données ministérielles de permis et quotas de pêche",
                "Outils d'analyse statistique et de modélisation bioéconomique",
                "Plateformes collaboratives de concertation publique"
            ],
            "analytical": [
                "Modélisation de l'impact socio-économique d'une variation de quota de capture",
                "Analyse critique des séries historiques de prises par unité d'effort (PUE)"
            ]
        },
        "specializations": [
            "Gestion des pêches commerciales côtières",
            "Gestion des Aires Marines Protégées (AMP)",
            "Politiques de conciliation entre pêche et parcs éoliens marins",
            "Administration des permis et transfert intergénérationnel"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Diplôme universitaire de 1er cycle",
                    "title": "Baccalauréat en biologie marine, sciences politiques, droit ou géographie",
                    "desc": "Premier cycle universitaire polyvalent dans le domaine du vivant ou des sciences sociales."
                },
                {
                    "step": "Diplôme universitaire de 2e cycle",
                    "title": "Maîtrise en gestion des ressources maritimes",
                    "desc": "Programme d'excellence documenté par ÉvoluPêches, dispensé à l'UQAR."
                },
                {
                    "step": "Doctorat ou spécialisation",
                    "title": "Doctorat en gestion des ressources maritimes",
                    "desc": "Pour les fonctions de recherche en politiques publiques marines."
                }
            ],
            "schools": [
                {
                    "name": "Université du Québec à Rimouski (UQAR) — Québec",
                    "country": "Canada",
                    "scope": "International"
                },
                {
                    "name": "Institut Universitaire Européen de la Mer (IUEM Brest) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut Universitaire de Pêche et d'Aquaculture (IUPA Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification en gestion de projet public",
                "Attestation en médiation environnementale"
            ],
            "schoolSubjects": [
                "Droit maritime",
                "Économie des ressources",
                "Biologie marine",
                "Gestion publique"
            ]
        },
        "career": {
            "sectors": [
                "Ministères des Pêches et de l'Environnement (gouvernements provincial et fédéral)",
                "Organisations régionales de gestion de la pêche",
                "Associations et comités de pêcheurs professionnels",
                "Organismes de gestion d'aires marines protégées et parcs marins"
            ],
            "employerTypes": [
                "Fonction publique d'État",
                "Organisations de producteurs maritimes",
                "Organisations non gouvernementales de conservation"
            ],
            "evolution": "Analyste des pêches junior ➔ Gestionnaire des ressources maritimes ➔ Directeur régional des pêches ➔ Coordonnateur national des politiques maritimes",
            "pros": "Impact direct et déterminant sur la survie de la biodiversité marine et des économies côtières, position centrale au carrefour de la science, de la politique et de la mer.",
            "cons": "Position délicate d'arbitrage souvent prise entre deux feux (revendications économiques immédiates des pêcheurs et exigences strictes des biologistes), complexité des dossiers."
        },
        "gettingStarted": {
            "beginnerProject": "Lire et analyser un plan officiel de gestion intégrée des pêches publié par Pêches et Océans Canada ou le Ministère sénégalais des Pêches.",
            "intermediateProject": "Cartographier sous QGIS les zones de frayères d'une espèce et croiser avec les zones d'activités des navires de capture.",
            "advancedProject": "Rédiger une note de recommandation de politique publique pour concilier la protection des mammifères marins et le maintien de la pêche aux casiers.",
            "portfolioIdeas": [
                "Synthèse d'un plan de gestion durable d'une pêcherie",
                "Étude socio-économique d'un port de pêche face à la baisse d'un quota"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'IA croise en temps réel les positions satellites AIS des navires et les zones interdites pour générer des alertes de respect des fermetures saisonnières.",
            "automatedTasks": [
                "Détection automatique d'anomalies de trajectoire de pêche par algorithme satellite",
                "Consolidation automatisée des données de débarquement déclarées"
            ],
            "emergingSkills": [
                "Utilisation de jumeaux numériques d'écosystèmes côtiers pour tester des scénarios de quotas"
            ],
            "humanEdge": "L'écoute humaine, la négociation diplomatique et la construction de la confiance avec les pêcheurs sur le quai."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la gestion des pêches (Direction des Pêches Maritimes - DPM, Conseil National Consultatif des Pêches Maritimes) est un enjeu de souveraineté nationale aigu. Les gestionnaires maritimes sénégalais négocient les accords de pêche internationaux et pilotent les Aires Marines Protégées communautaires (AMP de Joal, Cayar, Bamboung).",
            "localSectors": [
                "Direction des Pêches Maritimes (DPM)",
                "Direction des Aires Marines Protégées Communautaires (DAMPC)",
                "Conseils Locaux de Pêche Artisanale (CLPA)"
            ],
            "remoteWork": "Télétravail partiel possible pour la rédaction de plans, tournées côtières indispensables.",
            "entrepreneurship": "Création d'un cabinet indépendant d'audit et de conseil en gestion de pêcheries durables et certification écolabel pour l'Afrique de l'Ouest."
        },
        "relatedJobSlugs": [
            "biologiste-marin",
            "halieute",
            "capitaine-proprietaire",
            "juriste-agricole"
        ],
        "connectedFamilies": [
            "droit-justice",
            "environnement-climat",
            "gestion-finance",
            "recherche-sciences"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Gestionnaire des ressources maritimes ÉvoluPêches",
                "url": "https://evolupeches.org/metiers/gestionnaire-des-ressources-maritimes/",
                "source": "ÉvoluPêches"
            }
        ],
        "sources": [
            "ÉvoluPêches",
            "UQAR",
            "Pêches et Océans Canada",
            "DPM Sénégal"
        ],
        "interests": [
            "nature-environnement",
            "resoudre-problemes",
            "negocier-convaincre"
        ],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Selon ÉvoluPêches, l'Université du Québec à Rimouski (UQAR) est mondialement renommée pour sa Maîtrise en gestion des ressources maritimes, attirant des étudiants de tous les continents pour apprendre à gouverner la mer durablement.",
            "pourquoi": "Face aux crises climatiques et à la surexploitation des mers, les pays ont besoin de cadres capables d'unir sciences naturelles, droit et économie dans une même vision stratégique.",
            "a_retenir": "L'architecte de la paix et de la pérennité entre l'homme et l'océan."
        },
        "salaryRanges": {
            "quebec": {
                "raw": "55 000 - 105 000 $ CAD/an (Source : ÉvoluPêches / Ministères et organisations maritimes)",
                "range": "55 000 - 105 000 $ CAD/an (Source : ÉvoluPêches / Ministères et organisations maritimes)",
                "source": "ÉvoluPêches"
            },
            "senegal": {
                "raw": "450 000 - 1 600 000 FCFA / mois (Ministère des Pêches, Aires Marines Protégées, Projets Banque Mondiale)",
                "range": "450 000 - 1 600 000 FCFA / mois (Ministère des Pêches, Aires Marines Protégées, Projets Banque Mondiale)",
                "source": "Filières maritimes & halieutiques (Sénégal / UEMOA)"
            }
        }
    },
    {
        "id": "biologiste-marin",
        "slug": "biologiste-marin",
        "title": "Biologiste des Milieux Marins & Aquatiques / Écologiste Marin",
        "aliases": [
            "Biologiste marin",
            "Biologiste des pêches",
            "Scientifique des écosystèmes marins",
            "Océanographe biologiste"
        ],
        "icon": "🧬",
        "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Pêche, Aquaculture & Ressources Marines",
        "domainId": "peche-aquaculture",
        "subdomain": "Biologie marine",
        "sourceEvoluPeches": true,
        "cnpCode": "2121",
        "isEmerging": false,
        "level": "Baccalauréat en biologie - sciences marines (UQAR) à Master / Doctorat en océanographie biologique",
        "salary": "🇨🇦 Québec : 50 000 - 95 000 $ CAD/an (Source : ÉvoluPêches / Centres de recherche marine) • 🇸🇳 Sénégal : 450 000 - 1 500 000 FCFA / mois (CRODT/ISRA, Universités, IRD)",
        "simpleDefinition": "Le biologiste marin étudie la vie dans les océans et les estuaires : il observe la faune et la flore marines, mène des missions scientifiques en mer et en laboratoire, analyse la santé des écosystèmes et étudie l'impact du réchauffement de l'eau.",
        "shortDescription": "Fiche documentée par ÉvoluPêches, ce scientifique passionné perce les mystères des organismes marins pour éclairer la préservation de la biodiversité et la gestion durable des pêches.",
        "longDescription": "Le biologiste des milieux marins est un scientifique transversal intervenant à la frontière des sciences fondamentales, de l'écologie et des ressources aquatiques exploitées. Selon ÉvoluPêches, il planifie et exécute des études rigoureuses sur le milieu marin, réalise des recherches, essais et expériences, se déplace sur le terrain ou travaille en laboratoire, interprète des jeux complexes de données biologiques et rédige des rapports scientifiques. La source mentionne comme perspectives d'avancement l'accès aux fonctions de Gestionnaire des ressources maritimes.",
        "mainObjective": "Comprendre le fonctionnement des écosystèmes marins et fournir des bases scientifiques solides pour la conservation de la biodiversité et l'exploitation raisonnée.",
        "companyRole": "Expert scientifique, découvreur du vivant et conseiller éclairé des décideurs maritimes.",
        "characteristics": [
            "Curiosité",
            "Sens de l'observation",
            "Intérêt pour les sciences et les organismes vivants",
            "Esprit d'équipe",
            "Bonne capacité de concentration et de synthèse",
            "Autonomie"
        ],
        "regions": [
            "Partout au Québec et stations de biologie marine côtières"
        ],
        "sourceContext": "Québec / Canada (ÉvoluPêches)",
        "workEnvironment": [
            "🔬 Laboratoires de recherche océanographique équipés d'aquariums et microscopes",
            "🚢 Navires océanographiques hauturiers lors de campagnes d'échantillonnage en mer",
            "🌊 Estran côtier, récifs, mangroves et fonds marins pour les observations directes"
        ],
        "missions": [
            "Planifier et exécuter des études écologiques de terrain sur les populations animales et végétales marines",
            "Mener des campagnes d'échantillonnage de plancton, poissons, invertébrés et algues en mer",
            "Réaliser des analyses microscopiques, biochimiques et génétiques (ADN environnemental) en laboratoire",
            "Modéliser l'impact du réchauffement des eaux et de l'acidification des océans sur les espèces cibles",
            "Rédiger des articles et rapports scientifiques et vulgariser les conclusions auprès des gestionnaires et du public"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Échantillonnage en mer côtière",
                "desc": "Prélèvement d'échantillons d'eau avec bouteilles Niskin et traits de filet à plancton Bongo."
            },
            {
                "time": "11:00",
                "title": "Dissection et biométrie au laboratoire",
                "desc": "Pesée des gonades, examen de l'état d'engraissement et analyse stomacale d'un lot de poissons prélevés."
            },
            {
                "time": "14:30",
                "title": "Traitement statistique sous R",
                "desc": "Calcul de la richesse spécifique et indices de diversité de Shannon sur des communautés benthiques sous-marines."
            },
            {
                "time": "17:00",
                "title": "Rédaction d'une publication scientifique",
                "desc": "Rédaction du chapitre méthodologique d'un article sur la migration des espèces causée par la perte du couvert de glace."
            }
        ],
        "skills": {
            "technical": [
                "Biologie marine, ichtyologie et écologie des invertébrés aquatiques",
                "Techniques d'échantillonnage océanographique en mer et plongée scientifique",
                "Génétique des populations marines et analyse de l'ADN environnemental (eDNA)",
                "Biostatistiques appliquées sous R ou Python et traitement de séries temporelles",
                "Connaissance des protocoles de protection des espèces marines vulnérables"
            ],
            "human": [
                "Insatiable curiosité intellectuelle et passion pour le monde vivant",
                "Sens de l'observation minutieux et rigueur de méthode scientifique",
                "Bonne capacité de concentration et de synthèse rédactionnelle",
                "Aptitude au travail d'équipe pluridisciplinaire en mer confinée"
            ],
            "tools": [
                "Filets à plancton, bennes d'échantillonnage benthique et chaluts scientifiques",
                "Microscopes à fluorescence et loupes binoculaires de laboratoire",
                "Sondes multiparamètres CTD (Conductivité, Température, Profondeur)",
                "Logiciels d'analyse statistique et de modélisation écologique (RStudio, Primer-e)"
            ],
            "analytical": [
                "Analyse multivariée de communautés écologiques",
                "Calcul de l'indice de condition corporelle des espèces commerciales"
            ]
        },
        "specializations": [
            "Ichtyologie (biologie des poissons marins)",
            "Biologie des invertébrés et benthos (crustacés, mollusques)",
            "Écologie du plancton et réseaux trophiques",
            "Conservation des mammifères marins"
        ],
        "studies": {
            "pathway": [
                {
                    "step": "Diplôme universitaire de 1er cycle",
                    "title": "Baccalauréat (BAC) en biologie – sciences marines",
                    "desc": "Programme québécois de référence documenté par ÉvoluPêches à l'UQAR."
                },
                {
                    "step": "2e cycle universitaire",
                    "title": "Maîtrise en océanographie biologique",
                    "desc": "Spécialisation poussée en recherche marine fondamentale ou appliquée."
                },
                {
                    "step": "Doctorat (PhD)",
                    "title": "Doctorat en sciences de la mer",
                    "desc": "Pour devenir chercheur principal ou professeur d'université."
                }
            ],
            "schools": [
                {
                    "name": "Université du Québec à Rimouski (UQAR / Institut des sciences de la mer de Rimouski ISMER) — Québec",
                    "country": "Canada",
                    "scope": "International"
                },
                {
                    "name": "Institut Universitaire Européen de la Mer (Brest) / Sorbonne Université — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut Universitaire de Pêche et d'Aquaculture (IUPA / UCAD Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certificat de plongeur scientifique (CAUS / CNRS)",
                "Attestation de sécurité pour recherche en mer"
            ],
            "schoolSubjects": [
                "Biologie animale",
                "Écologie marine",
                "Océanographie",
                "Biostatistiques"
            ]
        },
        "career": {
            "sectors": [
                "Instituts publics de recherche marine (ISMER, Ifremer, CRODT, IRD)",
                "Ministères de l'Environnement et des Pêches",
                "Bureaux d'études en environnement littoral et études d'impact",
                "Aquariums publics, musées maritimes et parcs marins"
            ],
            "employerTypes": [
                "Centres de recherche scientifique",
                "Bureaux de consultants en environnement",
                "Organisations internationales de conservation (UICN, WWF)"
            ],
            "evolution": "Biologiste marin de terrain ➔ Chargé de recherche océanographique ➔ Chef de laboratoire scientifique ➔ Gestionnaire des ressources maritimes",
            "pros": "Métier de vocation passionnant au plus près de la vie sauvage océanique, participation à des expéditions maritimes inoubliables, sentiment de contribuer à la sauvegarde des océans.",
            "cons": "Nombre de postes permanents limité imposant une sélection universitaire élevée, campagnes de mer exigeantes avec éloignement, délais longs de publication scientifique."
        },
        "gettingStarted": {
            "beginnerProject": "Reconnaître et photographier les invertébrés marins vivant dans les mares résiduelles de l'estran à marée basse.",
            "intermediateProject": "Participer à un programme de sciences participatives marines (recensement des laisses de mer ou ponte des raies).",
            "advancedProject": "Analyser un jeu de données libre d'abondance d'espèces pélagiques sous R pour identifier les corrélations avec la température de surface de l'eau.",
            "portfolioIdeas": [
                "Rapport d'échantillonnage biologique côtier",
                "Herbier d'algues marines identifiées avec clés de détermination"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA analyse des millions d'heures d'enregistrements audio sous-marins (acoustique passive) pour tracer les baleines et identifie les espèces sur les photos sous-marines automatiquement.",
            "automatedTasks": [
                "Comptage et reconnaissance taxonomique du plancton par imagerie automatisée (FlowCam)",
                "Cartographie automatique des herbiers marins par satellite"
            ],
            "emergingSkills": [
                "Bio-informatique marine appliquée au métagénomique environnemental",
                "Entraînement de modèles de détection acoustique de la faune marine"
            ],
            "humanEdge": "La formulation d'hypothèses scientifiques novatrices et l'émerveillement intellectuel devant la beauté de la vie sous-marine."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les biologistes marins du CRODT (Centre de Recherches Océanographiques de Dakar-Thiaroye) et de l'IUPA surveillent l'impact du réchauffement des eaux sur la reproduction des sardinelles et étudient les mangroves de Casamance comme nurserie vitale pour les poissons côtiers.",
            "localSectors": [
                "Centre de Recherches Océanographiques de Dakar-Thiaroye (CRODT/ISRA)",
                "Institut de Recherche pour le Développement (IRD Dakar)",
                "Institut Universitaire de Pêche et d'Aquaculture (IUPA)"
            ],
            "remoteWork": "Analyses de données et rédaction d'articles possibles en télétravail partiel, travaux en mer et en labo réguliers.",
            "entrepreneurship": "Création d'un bureau d'études d'impact environnemental sous-marin pour les projets d'infrastructures portuaires et énergétiques offshore."
        },
        "relatedJobSlugs": [
            "gestionnaire-ressources-maritimes",
            "halieute",
            "aquaculteur",
            "ingenieur-agroecologie"
        ],
        "connectedFamilies": [
            "recherche-sciences",
            "environnement-climat",
            "agriculture-agritech",
            "sante-biomedical"
        ],
        "resources": [
            {
                "type": "article",
                "title": "Fiche Biologiste ÉvoluPêches",
                "url": "https://evolupeches.org/metiers/biologiste/",
                "source": "ÉvoluPêches"
            }
        ],
        "sources": [
            "ÉvoluPêches",
            "UQAR / ISMER",
            "CRODT Dakar"
        ],
        "interests": [
            "explorer-decouvrir",
            "nature-environnement",
            "resoudre-problemes"
        ],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Selon ÉvoluPêches et l'UQAR, le métier de biologiste marin ouvre de nombreuses passerelles vers la direction d'équipes et la gestion publique des ressources maritimes.",
            "pourquoi": "La compréhension scientifique rigoureuse des équilibres biologiques marins est la meilleure compétence pour prendre des décisions politiques éclairées sur l'avenir des océans.",
            "a_retenir": "Le scientifique explorateur qui déchiffre les secrets des profondeurs pour sauver notre planète bleue."
        },
        "salaryRanges": {
            "quebec": {
                "raw": "50 000 - 95 000 $ CAD/an (Source : ÉvoluPêches / Centres de recherche marine)",
                "range": "50 000 - 95 000 $ CAD/an (Source : ÉvoluPêches / Centres de recherche marine)",
                "source": "ÉvoluPêches"
            },
            "senegal": {
                "raw": "450 000 - 1 500 000 FCFA / mois (CRODT/ISRA, Universités, IRD)",
                "range": "450 000 - 1 500 000 FCFA / mois (CRODT/ISRA, Universités, IRD)",
                "source": "Filières maritimes & halieutiques (Sénégal / UEMOA)"
            }
        }
    }
];

  // =========================================================================
  // 3. EXPORT DU MODULE ORIENTATION AGRI DATA
  // =========================================================================
  const OrientationAgriData = {
    DOMAINS: AGRI_DOMAINS,
    JOBS: AGRI_JOBS,
    getDomains: function () {
      return AGRI_DOMAINS;
    },
    getJobs: function () {
      return AGRI_JOBS;
    },
    getJobBySlug: function (slug) {
      if (!slug) return null;
      return AGRI_JOBS.find(j => j.slug === slug || j.id === slug) || null;
    }
  };

  if (typeof window !== 'undefined') {
    window.OrientationAgriData = OrientationAgriData;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = OrientationAgriData;
  }

  if (typeof console !== 'undefined' && console.log) {
    console.log('✅ OrientationAgriData : ' + AGRI_JOBS.length + ' fiches détaillées Agriculture, Élevage, Agroalimentaire & Pêche maritime initialisées sur ' + AGRI_DOMAINS.length + ' domaines d\'excellence.');
  }
})();

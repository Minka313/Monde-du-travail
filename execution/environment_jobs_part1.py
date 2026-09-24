# -*- coding: utf-8 -*-
"""
BASE DE DONNÉES COMPLÈTE :
🌱 ENVIRONNEMENT, ÉCOLOGIE & DÉVELOPPEMENT DURABLE
Source Principale : Onisep (04/11/2025)
https://www.onisep.fr/metier/decouvrir-le-monde-professionnel/environnement-developpement-durable/les-metiers-et-l-emploi-dans-l-environnement-et-le-developpement-durable
Formations Onisep :
https://www.onisep.fr/metier/decouvrir-le-monde-professionnel/environnement-developpement-durable/les-formations-pour-exercer-dans-l-environnement-et-le-developpement-durable
"""

DOMAINS = [
    {
        "id": "eau-hydraulique",
        "name": "Eau & Hydraulique",
        "icon": "💧",
        "order": 1,
        "chainStage": "Préservation, Traitement & Distribution de la Ressource en Eau",
        "description": "Préserver la ressource vitale en eau, concevoir et exploiter les réseaux de distribution d'eau potable, traiter les eaux usées et modéliser les dynamiques hydrauliques.",
        "subdomains": [
            "Distribution d'eau potable",
            "Traitement des eaux usées & Assainissement",
            "Modélisation hydraulique & Réseaux",
            "Qualité hydrobiologique des eaux continentales"
        ]
    },
    {
        "id": "dechets-tri-recyclage",
        "name": "Déchets, Tri & Recyclage",
        "icon": "♻️",
        "order": 2,
        "chainStage": "Économie Circulaire, Tri & Valorisation des Matières",
        "description": "Gérer la collecte sélective, optimiser le tri mécanique et optique, exploiter les centres de valorisation matière/énergie et développer les filières de réemploi et recycleries.",
        "subdomains": [
            "Collecte sélective & Nettoiement urbain",
            "Tri mécanisé, optique & Massification",
            "Valorisation matière, organique & énergétique",
            "Réemploi, Économie circulaire & Recycleries",
            "Prévention & Réduction des déchets"
        ]
    },
    {
        "id": "biodiversite-ecosystemes",
        "name": "Biodiversité & Écosystèmes",
        "icon": "🌱",
        "order": 3,
        "chainStage": "Protection, Diagnostic Écologique & Conservation des Espèces",
        "description": "Étudier les écosystèmes terrestres et aquatiques, conduire les inventaires naturalistes de terrain, évaluer les impacts environnementaux et restaurer les continuités écologiques.",
        "subdomains": [
            "Écologie scientifique & Biocontrôle",
            "Inventaires naturalistes (faune, flore, habitats)",
            "Trames vertes et bleues & Continuités écologiques",
            "Études d'impact environnemental & Mesures ERC"
        ]
    },
    {
        "id": "foret-espaces-naturels",
        "name": "Forêt & Espaces naturels",
        "icon": "🌳",
        "order": 4,
        "chainStage": "Surveillance, Gestion Conservatoire & Médiation Nature",
        "description": "Veiller sur les parcs nationaux et réserves naturelles, assurer la police de l'environnement, sensibiliser le public aux richesses naturelles et valoriser durablement le patrimoine forestier.",
        "subdomains": [
            "Surveillance & Police de l'environnement en espaces protégés",
            "Animation nature & Éducation à l'environnement",
            "Gestion conservatoire des habitats naturels",
            "Sylviculture durable & Écosystèmes forestiers"
        ]
    },
    {
        "id": "conseil-developpement-durable",
        "name": "Conseil, Stratégie & Droit de l'Environnement",
        "icon": "🌍",
        "order": 5,
        "chainStage": "Gouvernance RSE, Transition Écologique & Sécurisation Juridique",
        "description": "Accompagner les entreprises et collectivités dans leur décarbonation, piloter les démarches RSE territoriales et sécuriser la conformité réglementaire au regard du droit de l'environnement.",
        "subdomains": [
            "Stratégie RSE & Décarbonation des organisations",
            "Conduite de projets territoriaux durables (PCAET)",
            "Droit de l'environnement, Réglementation ICPE & Contentieux vert",
            "Conseil en éco-transition & Audits environnementaux"
        ]
    },
    {
        "id": "climat-meteorologie",
        "name": "Climat & Météorologie",
        "icon": "🌦️",
        "order": 6,
        "chainStage": "Surveillance Atmosphérique, Prévisions & Modélisation Climatique",
        "description": "Observer en continu l'atmosphère et les océans, modéliser les prévisions météorologiques, analyser les dérèglements climatiques et anticiper les aléas météo extrêmes.",
        "subdomains": [
            "Observation atmosphérique & Instrumentation météo",
            "Prévisions numériques du temps & Alertes météo",
            "Modélisation climatique & Scénarios d'évolution du GIEC",
            "Météorologie appliquée à l'aviation, l'agriculture et l'énergie"
        ]
    }
]

ENVIRONMENT_PATHWAYS = [
    {
        "id": "voie-professionnelle-proprete-dechets",
        "name": "Filière Voie Professionnelle : Propreté, Collecte & Tri",
        "duration": "CAP (2 ans) à Bac Professionnel (3 ans)",
        "icon": "🧹",
        "description": "Formation pratique d'accès rapide aux métiers de terrain de la propreté urbaine et du tri des déchets : CAP Valorisation des matières et propreté des espaces urbains, Bac Pro Maintenance environnementale et propreté des espaces urbains.",
        "steps": [
            "Accès après la classe de 3e en lycée professionnel ou CFA",
            "Apprentissage des techniques de nettoiement motorisé, de collecte sélective et de tri des matières recyclables",
            "Habilitations de sécurité, gestes et postures, maniement des compacteurs et bennes à ordures",
            "Insertion directe en collectivités locales ou grands groupes de services environnementaux"
        ]
    },
    {
        "id": "voie-technicien-eau-energie-nature",
        "name": "Filière Technicien Supérieur : BTS / BTSA Métiers de l'Eau & Nature",
        "duration": "Bac +2 (BTS / BTSA)",
        "icon": "🚰",
        "description": "Le pivot technique opérationnel de l'environnement : BTS Métiers de l'eau, BTSA GEMEAU (Gestion et Maîtrise de l'Eau), BTSA GPN (Gestion et Protection de la Nature), BTS Maintenance des systèmes option systèmes éoliens.",
        "steps": [
            "Bac général à dominante scientifique, Bac STI2D ou Bac Pro GPN/Forêt",
            "Deux années de formation technique intensive avec stages d'exploitation en usine ou en réserve naturelle",
            "Maîtrise des analyses physico-chimiques, des automates de traitement de l'eau ou des inventaires de biodiversité",
            "Emploi direct de technicien d'exploitation ou poursuite d'études en Licence Professionnelle"
        ]
    },
    {
        "id": "voie-technologique-but-hse-chimie",
        "name": "Filière Technologique Universitaire : BUT HSE & Chimie Environnement",
        "duration": "Bac +3 (Bachelor Universitaire de Technologie)",
        "icon": "🧪",
        "description": "Cursus universitaire professionnalisant en 3 ans : BUT Hygiène, Sécurité, Environnement (HSE) parcours science du danger et management des risques, BUT Chimie parcours analyse, contrôle-qualité, environnement.",
        "steps": [
            "Recrutement sélectif après le baccalauréat via Parcoursup",
            "3 ans en IUT alliant cours magistraux, travaux pratiques de métrologie et projets tutorés de terrain",
            "Compétences de pointe en prévention des pollutions, gestion des ICPE et évaluation des risques chimiques/industriels",
            "Postes d'encadrant technique intermédiaire ou poursuite vers un diplôme d'ingénieur"
        ]
    },
    {
        "id": "voie-ingenieur-master-environnement",
        "name": "Filière Cadre & Expert : Master Universitaire & Diplôme d'Ingénieur",
        "duration": "Bac +5 (Master / Ingénieur)",
        "icon": "🎓",
        "description": "Formation de haut niveau scientifique, technique et juridique : Écoles d'ingénieurs spécialisées (ENGEES, AgroParisTech, Polytech, INSA), Masters universitaires Sciences de l'eau, Droit de l'environnement, Biodiversité ou RSE.",
        "steps": [
            "Classes préparatoires scientifiques (BCPST, MP, PC) ou Licence scientifique (Biologie, Chimie, Sciences de la Terre, Droit)",
            "Trois années en école d'ingénieurs ou deux années de Master universitaire avec spécialisation pointue",
            "Conception d'ouvrages hydrauliques majeurs, pilotage de bilans carbone territoriaux, contentieux environnemental",
            "Recrutement en bureaux d'études d'ingénierie, ministères, grands groupes de l'eau/déchets ou institutions internationales"
        ]
    },
    {
        "id": "voie-doctorat-recherche-climat",
        "name": "Filière Recherche Scientifique : Doctorat en Sciences Environnementales",
        "duration": "Bac +8 (Doctorat)",
        "icon": "🔬",
        "description": "Filière d'excellence pour la modélisation climatique, l'hydrobiologie fondamentale et la conservation des écosystèmes complexes au sein des centres de recherche (CNRS, INRAE, Météo-France, IRD).",
        "steps": [
            "Master recherche à forte composante scientifique et modélisation",
            "Trois ans de travaux de recherche doctorale en laboratoire sous contrat doctoral",
            "Publications scientifiques internationales et participation aux modélisations des rapports climatiques",
            "Postes de chercheur, enseignant-chercheur ou expert scientifique auprès des agences nationales et internationales"
        ]
    }
]

JOBS = [
    # -------------------------------------------------------------------------
    # DOMAINE 1 : EAU & HYDRAULIQUE (eau-hydraulique)
    # -------------------------------------------------------------------------
    {
        "id": "hydraulicien",
        "slug": "hydraulicien",
        "title": "Hydraulicien / Hydraulicienne",
        "aliases": [
            "Ingénieur hydraulicien",
            "Hydrotechnicien",
            "Spécialiste de la dynamique des fluides",
            "Modélisateur hydraulique",
            "Ingénieur en ouvrages hydrauliques",
            "Ingénieur réseaux d'eau"
        ],
        "icon": "🌊",
        "image": "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=800&auto=format&fit=crop&q=80",
        "familyId": "environnement-developpement-durable",
        "familyName": "Environnement, Écologie & Développement durable",
        "connectedFamilies": [
            "environnement-developpement-durable",
            "sciences-terre-geosciences",
            "agriculture-agritech",
            "energie-renouvelable"
        ],
        "domain": "Eau & Hydraulique",
        "domainId": "eau-hydraulique",
        "subdomain": "Modélisation hydraulique des réseaux & Ouvrages d'art",
        "sectors": [
            "Distribution d'eau & Assainissement urbain",
            "Bureaux d'études en ingénierie de l'eau",
            "Collectivités territoriales & Agences de l'eau",
            "Aménagements fluviaux, barrages & protection contre les crues"
        ],
        "onisepUrl": "https://www.onisep.fr/ressources/univers-metier/metiers/hydraulicien-hydraulicienne",
        "onisepSource": True,
        "isEmerging": False,
        "level": "Bac +5 (Diplôme d'ingénieur spécialisé en génie de l'eau / Master Sciences de l'eau)",
        "salary": "🇫🇷 France : 2 400 € à 3 200 € brut/mois en début de carrière (~32 000 à 42 000 € brut/an), jusqu'à 5 500 € brut/mois pour un cadre confirmé (Source : Onisep / APEC) • 🇸🇳 Sénégal : 450 000 à 1 200 000 FCFA net/mois (SONES, DGPRE, OMVS, grands chantiers hydroagricoles)",
        "salaryDetails": {
            "france": {
                "starter": "2 500 € brut/mois",
                "experienced": "3 800 € brut/mois",
                "senior": "5 500 € brut/mois",
                "source": "Onisep / APEC Ingénierie Eau & Environnement"
            },
            "senegal": {
                "starter": "450 000 FCFA net/mois",
                "experienced": "800 000 FCFA net/mois",
                "senior": "1 200 000 FCFA net/mois",
                "source": "SONES / DGPRE / Grilles Bureaux d'Études BTP-Hydraulique Sénégal"
            }
        },
        "targetAudience": "Réseaux publics d'eau potable, stations de pompage, fleuves, bassins versants et réseaux d'irrigation",
        "workEnvironment": "Bureau d'études (modélisation numérique et calculs 3D) et déplacements sur chantiers, stations de pompage et berges",
        "summary": "Expert scientifique et technique de la mécanique des fluides, l'hydraulicien calcule, modélise et dimensionne les réseaux d'eau potable, les canaux d'évacuation des eaux pluviales, les digues fluviales et les stations d'épuration pour sécuriser l'approvisionnement et prévenir les inondations.",
        "missions": [
            "Modéliser par simulation numérique les écoulements d'eau sous pression ou à surface libre dans les canalisations et cours d'eau.",
            "Dimensionner les réseaux de distribution d'eau potable et les collecteurs d'eaux pluviales pour éviter les ruptures et inondations.",
            "Concevoir les ouvrages de régulation hydraulique : réservoirs, bassins de rétention, stations de relevage, digues et vannes.",
            "Réaliser les diagnostics d'étanchéité, mesurer les pressions et préconiser les plans de réhabilitation des réseaux vétustes."
        ],
        "activities": [
            "Paramétrage de logiciels de simulation hydraulique (SWMM, InfoWorks ICM, Epanet, Mike Urban).",
            "Campagnes de mesures de débit, de vitesse d'écoulement et de pression manométrique sur le terrain.",
            "Rédaction des cahiers des charges techniques (CCTP) pour les travaux de pose de canalisations.",
            "Concertation technique avec les élus, maîtres d'ouvrage et techniciens d'exploitation de stations."
        ],
        "specialties": [
            "Hydraulique urbaine (eau potable et assainissement)",
            "Hydraulique fluviale et gestion des inondations",
            "Hydraulique agricole et grands périmètres irrigués",
            "Hydroélectricité et barrages de retenue"
        ],
        "skills": {
            "hard": [
                "Mécanique des fluides et thermodynamique hydraulique",
                "Logiciels de modélisation hydraulique (Epanet, SWMM, Mike)",
                "Systèmes d'Information Géographique (SIG - QGIS/ArcGIS appliqués aux réseaux)",
                "Réglementation de l'eau et normes sanitaires de potabilité"
            ],
            "soft": [
                "Rigueur mathématique et capacités d'abstraction",
                "Sens de l'anticipation et gestion des aléas d'inondation",
                "Excellente communication orale pour vulgariser les contraintes techniques",
                "Esprit d'équipe avec les bureaux d'études et acteurs publics"
            ],
            "technical": [
                "Mécanique des fluides et thermodynamique hydraulique",
                "Logiciels de modélisation hydraulique (Epanet, SWMM, Mike)",
                "Systèmes d'Information Géographique (SIG - QGIS/ArcGIS appliqués aux réseaux)",
                "Réglementation de l'eau et normes sanitaires de potabilité"
            ],
            "human": [
                "Rigueur mathématique et capacités d'abstraction",
                "Sens de l'anticipation et gestion des aléas d'inondation",
                "Excellente communication orale pour vulgariser les contraintes techniques",
                "Esprit d'équipe avec les bureaux d'études et acteurs publics"
            ]
        },
        "qualities": [
            "Rigueur analytique",
            "Sens de l'observation terrain",
            "Esprit de synthèse",
            "Pragmatisme technique",
            "Conscience environnementale"
        ],
        "studies": [
            "🇫🇷 France : Bac +5. Diplôme d'ingénieur spécialisé en hydraulique ou génie de l'eau (ENGEES Strasbourg, Polytech Montpellier/Nice, INSA, Grenoble INP Ense3) ou Master Universitaire Sciences de l'Eau.",
            "🇸🇳 Sénégal : Bac +5. Diplôme d'ingénieur de conception en Génie Civil/Hydraulique (ESP Dakar, École Polytechnique de Thiès, UGB Saint-Louis, Institut 2iE)."
        ],
        "evolution": [
            "Chef de projet ingénierie hydraulique",
            "Directeur d'agence d'ingénierie de l'eau",
            "Directeur des services de l'eau et de l'assainissement en collectivité",
            "Expert judiciaire en sinistres inondations et ruptures de réseaux",
            "Consultant international auprès d'organismes de bassins hydrographiques (OMVS, OMVG)"
        ],
        "dailySchedule": [
            {"time": "08:30", "activity": "Vérification des résultats de la simulation nocturne de propagation d'onde de crue sur le logiciel hydraulique."},
            {"time": "10:00", "activity": "Déplacement sur le chantier de renouvellement de la conduite maîtresse d'eau potable pour valider les pressions d'épreuve."},
            {"time": "12:30", "activity": "Déjeuner de travail avec le directeur technique d'une régie publique d'assainissement."},
            {"time": "14:00", "activity": "Dimensionnement du diamètre optimal d'un bassin de rétention d'eaux pluviales d'une zone périurbaine."},
            {"time": "16:00", "activity": "Réunion de coordination SIG pour intégrer les données de télégestion des vannes connectées."},
            {"time": "17:30", "activity": "Finalisation de la note technique d'impact environnemental transmise à la préfecture et archivage des calculs."}
        ],
        "daily": {
            "morning": "Vérification des résultats de la simulation numérique de réseau sous pression, analyse des pertes de charge et contrôle sur site d'une station de pompage.",
            "afternoon": "Dimensionnement d'un collecteur d'eaux pluviales sur logiciel SIG, réunion technique avec les maîtres d'œuvre et rédaction des avis réglementaires.",
            "challenges": "Concilier la sécurisation des débits de pointe avec la réduction des consommations énergétiques de pompage."
        },
        "quiz": [
            {
                "question": "Quel est le rôle principal d'un ingénieur hydraulicien ?",
                "options": [
                    "Réparer les robinets dans les logements individuels",
                    "Modéliser et dimensionner les réseaux de distribution d'eau potable et de protection contre les crues",
                    "Vendre des bouteilles d'eau minérale",
                    "Analyser la composition chimique de l'air"
                ],
                "answer": 1,
                "explanation": "L'hydraulicien est le spécialiste de la dynamique des fluides qui conçoit et modélise les infrastructures de transport et de régulation de l'eau."
            },
            {
                "question": "Quelle grande école française publique est historiquement dédiée à l'ingénierie de l'eau et de l'environnement ?",
                "options": [
                    "L'ENGEES (Strasbourg)",
                    "L'école du Louvre",
                    "L'école nationale vétérinaire",
                    "HEC Paris"
                ],
                "answer": 0,
                "explanation": "L'ENGEES (École Nationale du Génie de l'Eau et de l'Environnement de Strasbourg) forme les cadres ingénieurs experts de l'eau."
            }
        ],
        "saviezVous": {
            "fait": "En France, les réseaux de canalisations d'eau potable s'étendent sur plus de 900 000 kilomètres, soit plus de deux fois la distance entre la Terre et la Lune !",
            "chiffre": "Le rendement moyen des réseaux d'eau potable en France est d'environ 80%, ce qui mobilise des milliers d'hydrauliciens pour traquer les fuites invisibles."
        },
        "sources": [
            {
                "name": "Onisep - Fiche Métier Hydraulicien / Hydraulicienne",
                "url": "https://www.onisep.fr/ressources/univers-metier/metiers/hydraulicien-hydraulicienne",
                "date": "04/11/2025",
                "type": "Source officielle française"
            }
        ]
    },
    {
        "id": "technicien-exploitation-eau",
        "slug": "technicien-exploitation-eau",
        "title": "Technicien / Technicienne d'Exploitation de l'Eau",
        "aliases": [
            "Technicien de station d'épuration",
            "Technicien usine d'eau potable",
            "Technicien assainissement",
            "Agent d'exploitation eau potable",
            "Technicien réseaux d'eau",
            "Conducteur d'usine de traitement des eaux"
        ],
        "icon": "🚰",
        "image": "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&auto=format&fit=crop&q=80",
        "familyId": "environnement-developpement-durable",
        "familyName": "Environnement, Écologie & Développement durable",
        "connectedFamilies": [
            "environnement-developpement-durable",
            "industrie-mecanique",
            "biologie-chimie"
        ],
        "domain": "Eau & Hydraulique",
        "domainId": "eau-hydraulique",
        "subdomain": "Distribution d'eau potable & Traitement des eaux usées",
        "sectors": [
            "Entreprises de distribution d'eau potable (Veolia, Saur, Suez)",
            "Stations d'épuration (STEP) municipales et intercommunales",
            "Régies publiques de l'eau et de l'assainissement",
            "Industries agroalimentaires et chimiques (traitement des effluents industriels)"
        ],
        "onisepUrl": "https://www.onisep.fr/metier/decouvrir-le-monde-professionnel/environnement-developpement-durable/les-metiers-et-l-emploi-dans-l-environnement-et-le-developpement-durable",
        "onisepSource": True,
        "isEmerging": False,
        "level": "Bac +2 (BTS Métiers de l'eau / BTSA GEMEAU)",
        "salary": "🇫🇷 France : 1 800 € à 2 300 € brut/mois débutant (~24 000 à 30 000 € brut/an), jusqu'à 3 200 € brut/mois avec astreintes et expérience (Source : Onisep / Convention collective de l'Eau) • 🇸🇳 Sénégal : 250 000 à 600 000 FCFA net/mois (Sén'Eau, ONAS, SOGIP, usines de dessalement)",
        "salaryDetails": {
            "france": {
                "starter": "1 900 € brut/mois",
                "experienced": "2 500 € brut/mois",
                "senior": "3 200 € brut/mois",
                "source": "Onisep / Convention collective des entreprises des services d'eau et d'assainissement"
            },
            "senegal": {
                "starter": "250 000 FCFA net/mois",
                "experienced": "420 000 FCFA net/mois",
                "senior": "600 000 FCFA net/mois",
                "source": "Grilles Sén'Eau / Office National de l'Assainissement du Sénégal (ONAS)"
            }
        },
        "targetAudience": "Stations de potabilisation, stations d'épuration, châteaux d'eau, stations de chloration et compteurs de secteur",
        "workEnvironment": "Stations de traitement de l'eau, laboratoires d'analyses d'usine, locaux techniques et interventions extérieures sur réseau",
        "summary": "Garanti au quotidien de la salubrité de l'eau que nous buvons, le technicien d'exploitation surveille les étapes de clarification, filtration, chloration et décantation dans les usines d'eau potable et stations d'épuration, tout en intervenant sur les automates et pompes en cas d'alerte.",
        "missions": [
            "Surveiller en temps réel le fonctionnement des filtres, décanteurs, déshydrateurs de boues et réactifs chimiques de l'usine.",
            "Prélever des échantillons d'eau aux différentes étapes du processus et réaliser les analyses physico-chimiques (pH, chlore, turbidité).",
            "Entretenir et réparer les équipements électromécaniques (pompes doseuses, agitateurs, vannes automatisées, débitmètres).",
            "Assurer les astreintes 24h/24 pour intervenir immédiatement en cas d'incident bactériologique, de fuite majeure ou de panne de surpression."
        ],
        "activities": [
            "Contrôle quotidien des paramètres de supervision sur écran SCADA/automate.",
            "Ajustement des dosages de réactifs (coagulants, polymères, dioxyde de chlore, charbon actif).",
            "Nettoyage et étalonnage des sondes de mesure de turbidité et de pH.",
            "Tenue du cahier sanitaire d'exploitation réglementaire exigé par les Agences Régionales de Santé (ARS)."
        ],
        "specialties": [
            "Production et potabilisation d'eau potable",
            "Épuration et assainissement des eaux usées urbaines",
            "Traitement des effluents industriels pollués",
            "Recherche de fuites et télérelève de compteurs connectés"
        ],
        "skills": {
            "hard": [
                "Techniques de potabilisation et procédés biologiques d'épuration",
                "Chimie de l'eau et microbiologie sanitaire de base",
                "Maintenance électromécanique de premier niveau sur pompes et moteurs",
                "Supervision industrielle et télégestion de réseaux d'eau (SCADA)"
            ],
            "soft": [
                "Sens aigu des responsabilités sanitaires",
                "Réactivité et sang-froid en situation d'urgence ou d'alerte pollution",
                "Autonomie lors des interventions d'astreinte nocturnes",
                "Rigueur méthodologique dans le renseignement des registres sanitaires"
            ],
            "technical": [
                "Techniques de potabilisation et procédés biologiques d'épuration",
                "Chimie de l'eau et microbiologie sanitaire de base",
                "Maintenance électromécanique de premier niveau sur pompes et moteurs",
                "Supervision industrielle et télégestion de réseaux d'eau (SCADA)"
            ],
            "human": [
                "Sens aigu des responsabilités sanitaires",
                "Réactivité et sang-froid en situation d'urgence ou d'alerte pollution",
                "Autonomie lors des interventions d'astreinte nocturnes",
                "Rigueur méthodologique dans le renseignement des registres sanitaires"
            ]
        },
        "qualities": [
            "Vigilance constante",
            "Rigueur sanitaire",
            "Habileté technique",
            "Sens de l'analyse immédiate",
            "Disponibilité (astreintes)"
        ],
        "studies": [
            "🇫🇷 France : Bac +2. BTS Métiers de l'eau (ou BTSA Gestion et Maîtrise de l'Eau - GEMEAU), BTS Métiers des services à l'environnement, ou BUT Chimie option environnement.",
            "🇸🇳 Sénégal : Bac +2 à Bac +3. BTS Génie Chimique / Biologie Appliquée, Licence Pro Eau et Assainissement (ESP Dakar / Université Iba Der Thiam de Thiès)."
        ],
        "evolution": [
            "Chef de station d'épuration / Responsable d'usine d'eau potable",
            "Responsable de secteur réseaux et assainissement",
            "Coordinateur d'astreintes et de gestion de crise de l'eau",
            "Technicien expert en régulation et automatismes de télégestion",
            "Formateur technique en métiers de l'assainissement"
        ],
        "dailySchedule": [
            {"time": "07:30", "activity": "Prise de poste en station : analyse des alarmes de nuit et des courbes de consommation sur le système de supervision."},
            {"time": "08:45", "activity": "Tournée physique d'inspection des bassins d'aération, contrôle visuel des mousses et décanteurs."},
            {"time": "10:30", "activity": "Prélèvement d'échantillons en sortie de filtres à sable et mesure au spectrophotomètre de laboratoire."},
            {"time": "12:00", "activity": "Pause repas au réfectoire de la station."},
            {"time": "13:30", "activity": "Opération de maintenance préventive : remplacement des clapets d'une pompe doseuse de chlorure ferrique."},
            {"time": "15:30", "activity": "Réception de la livraison de réactifs et contrôle des fiches de données de sécurité (FDS)."},
            {"time": "17:00", "activity": "Passation des consignes d'astreinte à l'équipe de permanence et clôture du registre de sécurité."}
        ],
        "daily": {
            "morning": "Inspection générale de la station d'eau, contrôle de la turbidité, analyses chimiques en laboratoire et réglage des débits de traitement.",
            "afternoon": "Maintenance mécanique sur les groupes motopompes, réception des produits de traitement et mise à jour du journal réglementaire.",
            "challenges": "Maintenir une eau conforme aux normes sanitaires les plus strictes 24h/24 quelles que soient les pollutions amont."
        },
        "quiz": [
            {
                "question": "Quel diplôme de référence à Bac+2 prépare directement au métier de technicien d'exploitation de l'eau en France ?",
                "options": [
                    "Le BTS Métiers de l'eau",
                    "Le BTS Notariat",
                    "Le BTS Commerce international",
                    "Le diplôme d'État d'infirmier"
                ],
                "answer": 0,
                "explanation": "Le BTS Métiers de l'eau forme des techniciens spécialisés dans le captage, le traitement, la distribution et l'assainissement des eaux."
            },
            {
                "question": "Que mesure principalement le paramètre de turbidité de l'eau ?",
                "options": [
                    "La teneur en sel marin",
                    "La transparence ou le caractère trouble de l'eau dû à la présence de matières en suspension",
                    "La température exacte de l'eau",
                    "La vitesse du vent au-dessus du bassin"
                ],
                "answer": 1,
                "explanation": "La turbidité mesure la clarté de l'eau et permet de vérifier l'efficacité de la filtration contre les particules en suspension."
            }
        ],
        "saviezVous": {
            "fait": "L'eau du robinet est le produit alimentaire le plus surveillé en France : plus de 60 paramètres bactériologiques et physico-chimiques sont contrôlés en permanence !",
            "chiffre": "Une station d'épuration moderne produit de l'énergie : les boues fermentées génèrent du biométhane réinjecté directement dans le réseau de gaz de ville."
        },
        "sources": [
            {
                "name": "Onisep - Les métiers et l'emploi dans l'environnement et le développement durable",
                "url": "https://www.onisep.fr/metier/decouvrir-le-monde-professionnel/environnement-developpement-durable/les-metiers-et-l-emploi-dans-l-environnement-et-le-developpement-durable",
                "date": "04/11/2025",
                "type": "Source officielle française"
            }
        ]
    },
    {
        "id": "hydrobiologiste",
        "slug": "hydrobiologiste",
        "title": "Hydrobiologiste",
        "aliases": [
            "Biologiste des cours d'eau",
            "Écologue aquatique",
            "Spécialiste de la faune aquatique",
            "Analyste hydrobiologique",
            "Biologiste des milieux d'eau douce",
            "Expert en bio-indicateurs aquatiques"
        ],
        "icon": "🐟",
        "image": "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=800&auto=format&fit=crop&q=80",
        "familyId": "environnement-developpement-durable",
        "familyName": "Environnement, Écologie & Développement durable",
        "connectedFamilies": [
            "environnement-developpement-durable",
            "biologie-chimie",
            "sciences-terre-geosciences"
        ],
        "domain": "Eau & Hydraulique",
        "domainId": "eau-hydraulique",
        "subdomain": "Qualité hydrobiologique des eaux continentales",
        "sectors": [
            "Agences de l'eau et établissements publics de bassins fluviaux",
            "Bureaux d'études spécialisés en écologie et environnement",
            "Organismes de recherche (INRAE, CNRS, Office Français de la Biodiversité)",
            "Fédérations départementales de pêche et de protection du milieu aquatique"
        ],
        "onisepUrl": "https://www.onisep.fr/ressources/univers-metier/metiers/hydrobiologiste",
        "onisepSource": True,
        "isEmerging": False,
        "level": "Bac +5 (Master en hydrobiologie, écologie aquatique ou diplôme d'ingénieur agronome/halieute)",
        "salary": "🇫🇷 France : 2 200 € à 2 800 € brut/mois débutant (~30 000 à 38 000 € brut/an), jusqu'à 4 200 € brut/mois avec ancienneté en bureau d'études ou recherche (Source : Onisep / Observatoire de la Biodiversité) • 🇸🇳 Sénégal : 350 000 à 850 000 FCFA net/mois (Ministère de l'Environnement, Direction des Parcs Nationaux, instituts océanographiques et d'eau douce)",
        "salaryDetails": {
            "france": {
                "starter": "2 300 € brut/mois",
                "experienced": "3 200 € brut/mois",
                "senior": "4 200 € brut/mois",
                "source": "Onisep / Observatoire National des Métiers de la Biodiversité"
            },
            "senegal": {
                "starter": "350 000 FCFA net/mois",
                "experienced": "550 000 FCFA net/mois",
                "senior": "850 000 FCFA net/mois",
                "source": "Grilles Recherche / Direction des Eaux et Forêts Sénégal"
            }
        },
        "targetAudience": "Rivières, lacs, étangs, marais, estuaires, faune piscicole, macro-invertébrés benthiques et diatomées",
        "workEnvironment": "Terrain (bottes, cuissardes, bateaux légers sur rivières et étangs) et laboratoire d'analyse biologique (microscopes et loupes binoculaires)",
        "summary": "Médecin des rivières et des plans d'eau douce, l'hydrobiologiste ausculte la santé biologique des milieux aquatiques en étudiant les invertébrés, les algues et les poissons qui constituent de précieux thermomètres vivants de la pollution.",
        "missions": [
            "Échantillonner sur le terrain la flore et la faune des cours d'eau (pêche électrique scientifique, dragage de benthos).",
            "Identifier et dénombrer en laboratoire au microscope les macro-invertébrés, diatomées et phytoplanctons.",
            "Calculer les indices hydrobiologiques normalisés (IBGN, IBD, IPR) pour noter l'état écologique des masses d'eau.",
            "Formuler des recommandations d'aménagement écologique pour restaurer la biodiversité des berges et le lit des rivières."
        ],
        "activities": [
            "Campagnes de prélèvement d'invertébrés au filet Surber en rivière en période d'étiage.",
            "Tri minutieux des larves d'insectes (éphémères, plécoptères, trichoptères) sous loupe binoculaire.",
            "Rédaction de rapports d'état écologique pour l'application de la Directive Cadre sur l'Eau (DCE).",
            "Évaluation de l'impact des rejets industriels ou de stations d'épuration sur les populations aquatiques."
        ],
        "specialties": [
            "Diatomologie et algologie d'eau douce",
            "Invertébrés benthiques et bio-indication (IBGN)",
            "Écologie piscicole et dynamique des populations de poissons",
            "Écotoxicologie des sédiments et micropolluants aquatiques"
        ],
        "skills": {
            "hard": [
                "Taxonomie poussée de la faune aquatique et de la flore microscopique (diatomées)",
                "Protocoles d'échantillonnage normalisés de la Directive Cadre Européenne sur l'Eau (DCE)",
                "Statistiques appliquées à l'écologie et modélisation des populations aquatiques",
                "Utilisation des clés de détermination dichotomiques et microscopie optique avancée"
            ],
            "soft": [
                "Excellente endurance physique en milieu aquatique et par tout temps",
                "Minutie et patience infinie lors du tri des micro-organismes au laboratoire",
                "Sens aigu de l'observation scientifique et curiosité naturaliste",
                "Capacité de vulgarisation pour conseiller les aménageurs et pêcheurs"
            ],
            "technical": [
                "Taxonomie poussée de la faune aquatique et de la flore microscopique (diatomées)",
                "Protocoles d'échantillonnage normalisés de la Directive Cadre Européenne sur l'Eau (DCE)",
                "Statistiques appliquées à l'écologie et modélisation des populations aquatiques",
                "Utilisation des clés de détermination dichotomiques et microscopie optique avancée"
            ],
            "human": [
                "Excellente endurance physique en milieu aquatique et par tout temps",
                "Minutie et patience infinie lors du tri des micro-organismes au laboratoire",
                "Sens aigu de l'observation scientifique et curiosité naturaliste",
                "Capacité de vulgarisation pour conseiller les aménageurs et pêcheurs"
            ]
        },
        "qualities": [
            "Patience et minutie",
            "Goût prononcé pour le terrain aquatique",
            "Rigueur taxonomique",
            "Esprit scientifique",
            "Polyvalence laboratoire/nature"
        ],
        "studies": [
            "🇫🇷 France : Bac +5. Master en biologie des hydrosystèmes, écologie continentale, biodiversité aquatique (Universités Lyon 1, Pau, Montpellier, Lorraine) ou diplôme d'ingénieur agronome/halieutique.",
            "🇸🇳 Sénégal : Bac +5. Master en Biologie Animale / Hydrobiologie et Gestion des Écosystèmes Aquatiques (Faculté des Sciences et Techniques UCAD Dakar / IUPA)."
        ],
        "evolution": [
            "Chef de projet écologie aquatique en bureau d'études",
            "Chargé de mission Directive Cadre sur l'Eau en Agence de l'eau",
            "Responsable de laboratoire de bio-surveillance",
            "Chercheur / Enseignant-chercheur en hydrobiologie (après Doctorat Bac+8)",
            "Expert international auprès de conventions mondiales sur les zones humides (Ramsar)"
        ],
        "dailySchedule": [
            {"time": "08:00", "activity": "Départ en camionnette équipée vers le point d'échantillonnage en bord de rivière avec waders et filets."},
            {"time": "09:30", "activity": "Prélèvement d'invertébrés benthiques au filet Surber selon le protocole DCE et relevé de la température de l'eau."},
            {"time": "12:00", "activity": "Pique-nique au bord de l'eau et conditionnement soigné des flacons d'échantillons avec éthanol."},
            {"time": "14:00", "activity": "Retour au laboratoire : observation sous loupe binoculaire des larves de plécoptères et éphémères."},
            {"time": "16:00", "activity": "Calcul informatique de l'indice biotique global (IBGN) et comparaison avec les relevés des 5 dernières années."},
            {"time": "17:30", "activity": "Rédaction du compte-rendu pour le compte de l'Agence de l'eau et nettoyage du matériel de prospection."}
        ],
        "daily": {
            "morning": "Prospection sur le cours d'eau en cuissardes, relevés de vitesse de courant, prélèvements d'invertébrés et d'algues microscopiques.",
            "afternoon": "Tri d'échantillons au laboratoire, détermination des espèces sous loupe binoculaire et calcul des indices de qualité d'eau.",
            "challenges": "Distinguer les variations saisonnières naturelles d'une véritable dégradation due à une pollution humaine."
        },
        "quiz": [
            {
                "question": "Quels organismes vivants sont couramment utilisés comme bio-indicateurs de la santé d'une rivière ?",
                "options": [
                    "Les macro-invertébrés benthiques (larves d'insectes, mollusques, crustacés)",
                    "Les oiseaux migrateurs uniquement",
                    "Les cailloux et sables du lit",
                    "Les bateaux de plaisance"
                ],
                "answer": 0,
                "explanation": "Les macro-invertébrés vivant au fond des cours d'eau sont très sensibles à l'oxygène et aux polluants, ce qui en fait d'excellents témoins écologiques."
            },
            {
                "question": "Où l'hydrobiologiste exerce-t-il la majorité de ses missions ?",
                "options": [
                    "Uniquement dans un bureau fermé",
                    "En partage équilibré entre le terrain (rivières, lacs) et le laboratoire d'analyse microscopique",
                    "Dans un atelier automobile",
                    "Sur les marchés alimentaires"
                ],
                "answer": 1,
                "explanation": "Le métier combine sorties de terrain aquatiques et analyse minutieuse en laboratoire de microscopie."
            }
        ],
        "saviezVous": {
            "fait": "La présence de larves de perles (plécoptères) dans une rivière indique immédiatement une eau d'une pureté exceptionnelle et très riche en oxygène dissous.",
            "chiffre": "Plus de 2 500 espèces de diatomées (algues microscopiques à squelette de silice) sont répertoriées en France pour noter l'état trophique des eaux."
        },
        "sources": [
            {
                "name": "Onisep - Fiche Métier Hydrobiologiste",
                "url": "https://www.onisep.fr/ressources/univers-metier/metiers/hydrobiologiste",
                "date": "04/11/2025",
                "type": "Source officielle française"
            }
        ]
    }
]

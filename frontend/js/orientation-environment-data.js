/**
 * MODULE OFFICIEL ENVIRONNEMENT, ÉCOLOGIE & DÉVELOPPEMENT DURABLE
 * Base de données exhaustive : 6 Domaines d'Excellence • 18 Fiches Métiers Haute Profondeur
 * Double ancrage France (€) / Sénégal (FCFA)
 * Source Principale de référence : Onisep (04/11/2025)
 * https://www.onisep.fr/metier/decouvrir-le-monde-professionnel/environnement-developpement-durable/les-metiers-et-l-emploi-dans-l-environnement-et-le-developpement-durable
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.OrientationEnvironmentData = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    'use strict';

    const DOMAINS = [
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
];

    const ENVIRONMENT_PATHWAYS = [
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
];

    const JOBS = [
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
        "onisepSource": true,
        "isEmerging": false,
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
            {
                "time": "08:30",
                "activity": "Vérification des résultats de la simulation nocturne de propagation d'onde de crue sur le logiciel hydraulique."
            },
            {
                "time": "10:00",
                "activity": "Déplacement sur le chantier de renouvellement de la conduite maîtresse d'eau potable pour valider les pressions d'épreuve."
            },
            {
                "time": "12:30",
                "activity": "Déjeuner de travail avec le directeur technique d'une régie publique d'assainissement."
            },
            {
                "time": "14:00",
                "activity": "Dimensionnement du diamètre optimal d'un bassin de rétention d'eaux pluviales d'une zone périurbaine."
            },
            {
                "time": "16:00",
                "activity": "Réunion de coordination SIG pour intégrer les données de télégestion des vannes connectées."
            },
            {
                "time": "17:30",
                "activity": "Finalisation de la note technique d'impact environnemental transmise à la préfecture et archivage des calculs."
            }
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
        ],
        "shortDescription": "Expert scientifique et technique de la mécanique des fluides, l'hydraulicien calcule, modélise et dimensionne les réseaux d'eau potable, les canaux d'évacuation des eaux pluviales, les digues fluviales et les stations d'épuration pour sécuriser l'approvisionnement et prévenir les inondations.",
        "longDescription": "Expert scientifique et technique de la mécanique des fluides, l'hydraulicien calcule, modélise et dimensionne les réseaux d'eau potable, les canaux d'évacuation des eaux pluviales, les digues fluviales et les stations d'épuration pour sécuriser l'approvisionnement et prévenir les inondations. Modéliser par simulation numérique les écoulements d'eau sous pression ou à surface libre dans les canalisations et cours d'eau. Dimensionner les réseaux de distribution d'eau potable et les collecteurs d'eaux pluviales pour éviter les ruptures et inondations. Concevoir les ouvrages de régulation hydraulique : réservoirs, bassins de rétention, stations de relevage, digues et vannes. Réaliser les diagnostics d'étanchéité, mesurer les pressions et préconiser les plans de réhabilitation des réseaux vétustes.",
        "description": "Expert scientifique et technique de la mécanique des fluides, l'hydraulicien calcule, modélise et dimensionne les réseaux d'eau potable, les canaux d'évacuation des eaux pluviales, les digues fluviales et les stations d'épuration pour sécuriser l'approvisionnement et prévenir les inondations. Modéliser par simulation numérique les écoulements d'eau sous pression ou à surface libre dans les canalisations et cours d'eau. Dimensionner les réseaux de distribution d'eau potable et les collecteurs d'eaux pluviales pour éviter les ruptures et inondations. Concevoir les ouvrages de régulation hydraulique : réservoirs, bassins de rétention, stations de relevage, digues et vannes. Réaliser les diagnostics d'étanchéité, mesurer les pressions et préconiser les plans de réhabilitation des réseaux vétustes.",
        "studyLevel": "Bac +5 (Diplôme d'ingénieur spécialisé en génie de l'eau / Master Sciences de l'eau)",
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
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Vérification des résultats de la simulation nocturne de propagation d'onde de crue sur le logiciel hydraulique."
            },
            {
                "time": "10:00",
                "activity": "Déplacement sur le chantier de renouvellement de la conduite maîtresse d'eau potable pour valider les pressions d'épreuve."
            },
            {
                "time": "12:30",
                "activity": "Déjeuner de travail avec le directeur technique d'une régie publique d'assainissement."
            },
            {
                "time": "14:00",
                "activity": "Dimensionnement du diamètre optimal d'un bassin de rétention d'eaux pluviales d'une zone périurbaine."
            },
            {
                "time": "16:00",
                "activity": "Réunion de coordination SIG pour intégrer les données de télégestion des vannes connectées."
            },
            {
                "time": "17:30",
                "activity": "Finalisation de la note technique d'impact environnemental transmise à la préfecture et archivage des calculs."
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
        "onisepSource": true,
        "isEmerging": false,
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
            {
                "time": "07:30",
                "activity": "Prise de poste en station : analyse des alarmes de nuit et des courbes de consommation sur le système de supervision."
            },
            {
                "time": "08:45",
                "activity": "Tournée physique d'inspection des bassins d'aération, contrôle visuel des mousses et décanteurs."
            },
            {
                "time": "10:30",
                "activity": "Prélèvement d'échantillons en sortie de filtres à sable et mesure au spectrophotomètre de laboratoire."
            },
            {
                "time": "12:00",
                "activity": "Pause repas au réfectoire de la station."
            },
            {
                "time": "13:30",
                "activity": "Opération de maintenance préventive : remplacement des clapets d'une pompe doseuse de chlorure ferrique."
            },
            {
                "time": "15:30",
                "activity": "Réception de la livraison de réactifs et contrôle des fiches de données de sécurité (FDS)."
            },
            {
                "time": "17:00",
                "activity": "Passation des consignes d'astreinte à l'équipe de permanence et clôture du registre de sécurité."
            }
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
        ],
        "shortDescription": "Garanti au quotidien de la salubrité de l'eau que nous buvons, le technicien d'exploitation surveille les étapes de clarification, filtration, chloration et décantation dans les usines d'eau potable et stations d'épuration, tout en intervenant sur les automates et pompes en cas d'alerte.",
        "longDescription": "Garanti au quotidien de la salubrité de l'eau que nous buvons, le technicien d'exploitation surveille les étapes de clarification, filtration, chloration et décantation dans les usines d'eau potable et stations d'épuration, tout en intervenant sur les automates et pompes en cas d'alerte. Surveiller en temps réel le fonctionnement des filtres, décanteurs, déshydrateurs de boues et réactifs chimiques de l'usine. Prélever des échantillons d'eau aux différentes étapes du processus et réaliser les analyses physico-chimiques (pH, chlore, turbidité). Entretenir et réparer les équipements électromécaniques (pompes doseuses, agitateurs, vannes automatisées, débitmètres). Assurer les astreintes 24h/24 pour intervenir immédiatement en cas d'incident bactériologique, de fuite majeure ou de panne de surpression.",
        "description": "Garanti au quotidien de la salubrité de l'eau que nous buvons, le technicien d'exploitation surveille les étapes de clarification, filtration, chloration et décantation dans les usines d'eau potable et stations d'épuration, tout en intervenant sur les automates et pompes en cas d'alerte. Surveiller en temps réel le fonctionnement des filtres, décanteurs, déshydrateurs de boues et réactifs chimiques de l'usine. Prélever des échantillons d'eau aux différentes étapes du processus et réaliser les analyses physico-chimiques (pH, chlore, turbidité). Entretenir et réparer les équipements électromécaniques (pompes doseuses, agitateurs, vannes automatisées, débitmètres). Assurer les astreintes 24h/24 pour intervenir immédiatement en cas d'incident bactériologique, de fuite majeure ou de panne de surpression.",
        "studyLevel": "Bac +2 (BTS Métiers de l'eau / BTSA GEMEAU)",
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
        "typicalDay": [
            {
                "time": "07:30",
                "activity": "Prise de poste en station : analyse des alarmes de nuit et des courbes de consommation sur le système de supervision."
            },
            {
                "time": "08:45",
                "activity": "Tournée physique d'inspection des bassins d'aération, contrôle visuel des mousses et décanteurs."
            },
            {
                "time": "10:30",
                "activity": "Prélèvement d'échantillons en sortie de filtres à sable et mesure au spectrophotomètre de laboratoire."
            },
            {
                "time": "12:00",
                "activity": "Pause repas au réfectoire de la station."
            },
            {
                "time": "13:30",
                "activity": "Opération de maintenance préventive : remplacement des clapets d'une pompe doseuse de chlorure ferrique."
            },
            {
                "time": "15:30",
                "activity": "Réception de la livraison de réactifs et contrôle des fiches de données de sécurité (FDS)."
            },
            {
                "time": "17:00",
                "activity": "Passation des consignes d'astreinte à l'équipe de permanence et clôture du registre de sécurité."
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
        "onisepSource": true,
        "isEmerging": false,
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
            {
                "time": "08:00",
                "activity": "Départ en camionnette équipée vers le point d'échantillonnage en bord de rivière avec waders et filets."
            },
            {
                "time": "09:30",
                "activity": "Prélèvement d'invertébrés benthiques au filet Surber selon le protocole DCE et relevé de la température de l'eau."
            },
            {
                "time": "12:00",
                "activity": "Pique-nique au bord de l'eau et conditionnement soigné des flacons d'échantillons avec éthanol."
            },
            {
                "time": "14:00",
                "activity": "Retour au laboratoire : observation sous loupe binoculaire des larves de plécoptères et éphémères."
            },
            {
                "time": "16:00",
                "activity": "Calcul informatique de l'indice biotique global (IBGN) et comparaison avec les relevés des 5 dernières années."
            },
            {
                "time": "17:30",
                "activity": "Rédaction du compte-rendu pour le compte de l'Agence de l'eau et nettoyage du matériel de prospection."
            }
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
        ],
        "shortDescription": "Médecin des rivières et des plans d'eau douce, l'hydrobiologiste ausculte la santé biologique des milieux aquatiques en étudiant les invertébrés, les algues et les poissons qui constituent de précieux thermomètres vivants de la pollution.",
        "longDescription": "Médecin des rivières et des plans d'eau douce, l'hydrobiologiste ausculte la santé biologique des milieux aquatiques en étudiant les invertébrés, les algues et les poissons qui constituent de précieux thermomètres vivants de la pollution. Échantillonner sur le terrain la flore et la faune des cours d'eau (pêche électrique scientifique, dragage de benthos). Identifier et dénombrer en laboratoire au microscope les macro-invertébrés, diatomées et phytoplanctons. Calculer les indices hydrobiologiques normalisés (IBGN, IBD, IPR) pour noter l'état écologique des masses d'eau. Formuler des recommandations d'aménagement écologique pour restaurer la biodiversité des berges et le lit des rivières.",
        "description": "Médecin des rivières et des plans d'eau douce, l'hydrobiologiste ausculte la santé biologique des milieux aquatiques en étudiant les invertébrés, les algues et les poissons qui constituent de précieux thermomètres vivants de la pollution. Échantillonner sur le terrain la flore et la faune des cours d'eau (pêche électrique scientifique, dragage de benthos). Identifier et dénombrer en laboratoire au microscope les macro-invertébrés, diatomées et phytoplanctons. Calculer les indices hydrobiologiques normalisés (IBGN, IBD, IPR) pour noter l'état écologique des masses d'eau. Formuler des recommandations d'aménagement écologique pour restaurer la biodiversité des berges et le lit des rivières.",
        "studyLevel": "Bac +5 (Master en hydrobiologie, écologie aquatique ou diplôme d'ingénieur agronome/halieute)",
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
        "typicalDay": [
            {
                "time": "08:00",
                "activity": "Départ en camionnette équipée vers le point d'échantillonnage en bord de rivière avec waders et filets."
            },
            {
                "time": "09:30",
                "activity": "Prélèvement d'invertébrés benthiques au filet Surber selon le protocole DCE et relevé de la température de l'eau."
            },
            {
                "time": "12:00",
                "activity": "Pique-nique au bord de l'eau et conditionnement soigné des flacons d'échantillons avec éthanol."
            },
            {
                "time": "14:00",
                "activity": "Retour au laboratoire : observation sous loupe binoculaire des larves de plécoptères et éphémères."
            },
            {
                "time": "16:00",
                "activity": "Calcul informatique de l'indice biotique global (IBGN) et comparaison avec les relevés des 5 dernières années."
            },
            {
                "time": "17:30",
                "activity": "Rédaction du compte-rendu pour le compte de l'Agence de l'eau et nettoyage du matériel de prospection."
            }
        ]
    },
    {
        "id": "agent-proprete-urbaine",
        "slug": "agent-proprete-urbaine",
        "title": "Agent / Agente de Propreté Urbaine",
        "aliases": [
            "Agent de nettoiement urbain",
            "Éboueur",
            "Ripeur",
            "Agent salubrité publique",
            "Balayeur de voirie",
            "Conducteur d'engin de propreté urbaine"
        ],
        "icon": "🧹",
        "image": "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=800&auto=format&fit=crop&q=80",
        "familyId": "environnement-developpement-durable",
        "familyName": "Environnement, Écologie & Développement durable",
        "connectedFamilies": [
            "environnement-developpement-durable",
            "btp-construction"
        ],
        "domain": "Déchets, Tri & Recyclage",
        "domainId": "dechets-tri-recyclage",
        "subdomain": "Collecte sélective & Nettoiement urbain",
        "sectors": [
            "Services techniques municipaux et métropoles",
            "Grands groupes de propreté et services environnementaux (Veolia, Suez, Derichebourg)",
            "Entreprises de collecte et traitement des déchets ménagers",
            "Régies publiques de propreté et salubrité"
        ],
        "onisepUrl": "https://www.onisep.fr/ressources/univers-metier/metiers/agent-agente-de-proprete-urbaine",
        "onisepSource": true,
        "isEmerging": false,
        "level": "Sans diplôme à CAP (CAP Valorisation des matières et propreté des espaces urbains / Bac Pro Propreté)",
        "salary": "🇫🇷 France : SMIC à 1 950 € brut/mois débutant (~21 000 à 25 000 € brut/an) hors primes de pénibilité, d'horaires décalés et de dimanche (Source : Onisep / Convention collective de la Propreté) • 🇸🇳 Sénégal : 120 000 à 250 000 FCFA net/mois (SONAGED, régies municipales de salubrité urbaine)",
        "salaryDetails": {
            "france": {
                "starter": "1 820 € brut/mois (SMIC + primes)",
                "experienced": "2 100 € brut/mois",
                "senior": "2 400 € brut/mois",
                "source": "Onisep / Convention collective nationale des activités du déchet"
            },
            "senegal": {
                "starter": "120 000 FCFA net/mois",
                "experienced": "170 000 FCFA net/mois",
                "senior": "250 000 FCFA net/mois",
                "source": "Grilles Société Nationale de Gestion Intégrée des Déchets (SONAGED)"
            }
        },
        "targetAudience": "Espace public, voirie, marchés, caniveaux, conteneurs d'apport volontaire et bacs roulants d'ordures ménagères",
        "workEnvironment": "Extérieur permanent (rues, trottoirs, quais de transfert), travail souvent très tôt le matin ou la nuit, manutention de charges",
        "summary": "Acteur essentiel du cadre de vie et de la santé publique, l'agent de propreté urbaine nettoie et entretient les rues, trottoirs, places de marché et espaces publics, tout en assurant la collecte des bacs roulants à l'arrière de la benne à ordures.",
        "missions": [
            "Balayer, laver, désinfecter et désencombrer les voies publiques, trottoirs, passages piétons et squares.",
            "Collecter les déchets ménagers et le tri sélectif en suivant la tournée du camion benne (ripeur).",
            "Conduire des engins mécanisés de nettoiement urbain (balayeuses de voirie, laveuses haute pression, aspirateurs de feuilles).",
            "Vider et entretenir les corbeilles de rue, nettoyer les points d'apport volontaire et signaler les dépôts sauvages."
        ],
        "activities": [
            "Parcours de la tournée de collecte matinale et accrochage sécurisé des bacs roulants au lève-conteneur.",
            "Nettoyage haute pression des abords des marchés municipaux après fermeture.",
            "Dégagement des feuilles mortes en automne et salage préventif des trottoirs en période hivernale.",
            "Entretien quotidien et désinfection du matériel et des engins motorisés au dépôt."
        ],
        "specialties": [
            "Ripeur / Éboueur de collecte des déchets",
            "Conducteur de balayeuse ou laveuse de voirie",
            "Agent de nettoiement manuel et mobilier urbain",
            "Équipier d'intervention rapide anti-tags et dépôts sauvages"
        ],
        "skills": {
            "hard": [
                "Techniques de nettoiement de voirie et utilisation du matériel haute pression",
                "Règles strictes de sécurité routière et port des Équipements de Protection Individuelle (EPI)",
                "Maniement des lève-conteneurs et compacteurs de bennes à ordures",
                "Permis B obligatoire, Permis C (Poids Lourd) très apprécié"
            ],
            "soft": [
                "Excellente condition physique et résistance aux intempéries (froid, pluie, chaleur)",
                "Ponctualité rigoureuse indispensable (démarrages de tournée à 05h00)",
                "Esprit d'équipe et solidarité de binôme lors des tournées de benne",
                "Sens du service public et courtoisie envers les usagers de l'espace public"
            ],
            "technical": [
                "Techniques de nettoiement de voirie et utilisation du matériel haute pression",
                "Règles strictes de sécurité routière et port des Équipements de Protection Individuelle (EPI)",
                "Maniement des lève-conteneurs et compacteurs de bennes à ordures",
                "Permis B obligatoire, Permis C (Poids Lourd) très apprécié"
            ],
            "human": [
                "Excellente condition physique et résistance aux intempéries (froid, pluie, chaleur)",
                "Ponctualité rigoureuse indispensable (démarrages de tournée à 05h00)",
                "Esprit d'équipe et solidarité de binôme lors des tournées de benne",
                "Sens du service public et courtoisie envers les usagers de l'espace public"
            ]
        },
        "qualities": [
            "Endurance physique",
            "Sens de la sécurité",
            "Régularité et ponctualité",
            "Esprit de service public",
            "Esprit d'équipe"
        ],
        "studies": [
            "🇫🇷 France : Accessible sans diplôme. Formations recommandées pour évoluer : CAP Valorisation des matières et propreté des espaces urbains, CAP Propreté de l'environnement urbain, Bac Pro Maintenance environnementale et propreté des espaces urbains.",
            "🇸🇳 Sénégal : Recrutement direct avec formation technique aux gestes de sécurité, permis C recommandé, formations d'insertion de la SONAGED (Société Nationale de Gestion Intégrée des Déchets)."
        ],
        "evolution": [
            "Chauffeur de benne à ordures ménagères (après obtention du permis C et FIMO)",
            "Chef d'équipe de collecte ou de nettoiement",
            "Contrôleur de propreté et médiateur cadre de vie",
            "Agent d'accueil et gardien de déchèterie",
            "Responsable adjoint de secteur de collecte"
        ],
        "dailySchedule": [
            {
                "time": "05:00",
                "activity": "Arrivée au centre technique municipal, contrôle des EPI haute visibilité et prise de consignes du chef d'équipe."
            },
            {
                "time": "05:30",
                "activity": "Départ de la tournée de collecte en binôme avec le chauffeur de la benne à ordures dans le centre-ville."
            },
            {
                "time": "08:30",
                "activity": "Pause réglementaire et rotation des bacs collectés au quai de déchargement du centre de transfert."
            },
            {
                "time": "09:30",
                "activity": "Reprise de la seconde boucle de collecte des bacs jaunes réservés au tri sélectif."
            },
            {
                "time": "11:30",
                "activity": "Vidage complet de la benne, lavage haute pression du camion et désinfection des équipements."
            },
            {
                "time": "12:30",
                "activity": "Débriefing de fin de tournée, signalement des conteneurs cassés et fin de service."
            }
        ],
        "daily": {
            "morning": "Démarrage matinal de la tournée de benne, levage sécurisé des bacs, nettoyage manuel des dépôts aux pieds d'immeubles et déchargement.",
            "afternoon": "Nettoiement mécanisé de places publiques, désinfection de la benne au dépôt et préparation du matériel pour le lendemain.",
            "challenges": "Maintenir un rythme soutenu en bordure de circulation routière tout en respectant scrupuleusement la sécurité."
        },
        "quiz": [
            {
                "question": "Quel CAP prépare spécifiquement aux métiers de la propreté de la ville et du tri en France ?",
                "options": [
                    "Le CAP Valorisation des matières et propreté des espaces urbains",
                    "Le CAP Pâtisserie",
                    "Le CAP Coiffure",
                    "Le CAP Horlogerie"
                ],
                "answer": 0,
                "explanation": "Le CAP Valorisation des matières et propreté des espaces urbains forme aux techniques de nettoiement et de tri."
            },
            {
                "question": "À quels moments de la journée les agents de propreté urbaine interviennent-ils principalement ?",
                "options": [
                    "Uniquement en plein après-midi",
                    "Très tôt le matin (dès 05h00) ou la nuit pour ne pas bloquer la circulation urbaine",
                    "Uniquement le week-end",
                    "Pendant les vacances scolaires seulement"
                ],
                "answer": 1,
                "explanation": "Pour des raisons de fluidité du trafic et d'hygiène, la collecte et le nettoiement débutent majoritairement à l'aube."
            }
        ],
        "saviezVous": {
            "fait": "Un ripeur manipule en moyenne plus de 5 tonnes de bacs et de déchets ménagers au cours d'une seule tournée matinale !",
            "chiffre": "En France, chaque habitant produit environ 590 kg de déchets ménagers et assimilés par an, pris en charge par les agents de collecte."
        },
        "sources": [
            {
                "name": "Onisep - Fiche Métier Agent / Agente de propreté urbaine",
                "url": "https://www.onisep.fr/ressources/univers-metier/metiers/agent-agente-de-proprete-urbaine",
                "date": "04/11/2025",
                "type": "Source officielle française"
            }
        ],
        "shortDescription": "Acteur essentiel du cadre de vie et de la santé publique, l'agent de propreté urbaine nettoie et entretient les rues, trottoirs, places de marché et espaces publics, tout en assurant la collecte des bacs roulants à l'arrière de la benne à ordures.",
        "longDescription": "Acteur essentiel du cadre de vie et de la santé publique, l'agent de propreté urbaine nettoie et entretient les rues, trottoirs, places de marché et espaces publics, tout en assurant la collecte des bacs roulants à l'arrière de la benne à ordures. Balayer, laver, désinfecter et désencombrer les voies publiques, trottoirs, passages piétons et squares. Collecter les déchets ménagers et le tri sélectif en suivant la tournée du camion benne (ripeur). Conduire des engins mécanisés de nettoiement urbain (balayeuses de voirie, laveuses haute pression, aspirateurs de feuilles). Vider et entretenir les corbeilles de rue, nettoyer les points d'apport volontaire et signaler les dépôts sauvages.",
        "description": "Acteur essentiel du cadre de vie et de la santé publique, l'agent de propreté urbaine nettoie et entretient les rues, trottoirs, places de marché et espaces publics, tout en assurant la collecte des bacs roulants à l'arrière de la benne à ordures. Balayer, laver, désinfecter et désencombrer les voies publiques, trottoirs, passages piétons et squares. Collecter les déchets ménagers et le tri sélectif en suivant la tournée du camion benne (ripeur). Conduire des engins mécanisés de nettoiement urbain (balayeuses de voirie, laveuses haute pression, aspirateurs de feuilles). Vider et entretenir les corbeilles de rue, nettoyer les points d'apport volontaire et signaler les dépôts sauvages.",
        "studyLevel": "Sans diplôme à CAP (CAP Valorisation des matières et propreté des espaces urbains / Bac Pro Propreté)",
        "hard": [
            "Techniques de nettoiement de voirie et utilisation du matériel haute pression",
            "Règles strictes de sécurité routière et port des Équipements de Protection Individuelle (EPI)",
            "Maniement des lève-conteneurs et compacteurs de bennes à ordures",
            "Permis B obligatoire, Permis C (Poids Lourd) très apprécié"
        ],
        "soft": [
            "Excellente condition physique et résistance aux intempéries (froid, pluie, chaleur)",
            "Ponctualité rigoureuse indispensable (démarrages de tournée à 05h00)",
            "Esprit d'équipe et solidarité de binôme lors des tournées de benne",
            "Sens du service public et courtoisie envers les usagers de l'espace public"
        ],
        "typicalDay": [
            {
                "time": "05:00",
                "activity": "Arrivée au centre technique municipal, contrôle des EPI haute visibilité et prise de consignes du chef d'équipe."
            },
            {
                "time": "05:30",
                "activity": "Départ de la tournée de collecte en binôme avec le chauffeur de la benne à ordures dans le centre-ville."
            },
            {
                "time": "08:30",
                "activity": "Pause réglementaire et rotation des bacs collectés au quai de déchargement du centre de transfert."
            },
            {
                "time": "09:30",
                "activity": "Reprise de la seconde boucle de collecte des bacs jaunes réservés au tri sélectif."
            },
            {
                "time": "11:30",
                "activity": "Vidage complet de la benne, lavage haute pression du camion et désinfection des équipements."
            },
            {
                "time": "12:30",
                "activity": "Débriefing de fin de tournée, signalement des conteneurs cassés et fin de service."
            }
        ]
    },
    {
        "id": "ambassadeur-tri",
        "slug": "ambassadeur-tri",
        "title": "Ambassadeur / Ambassadrice de Tri",
        "aliases": [
            "Guide du tri",
            "Agent de sensibilisation aux déchets",
            "Médiateur propreté",
            "Conseiller de tri sélectif",
            "Chargé de prévention et de tri des déchets",
            "Éco-médiateur déchets"
        ],
        "icon": "♻️",
        "image": "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&auto=format&fit=crop&q=80",
        "familyId": "environnement-developpement-durable",
        "familyName": "Environnement, Écologie & Développement durable",
        "connectedFamilies": [
            "environnement-developpement-durable",
            "education-formation",
            "lettres-langues-sciences-humaines"
        ],
        "domain": "Déchets, Tri & Recyclage",
        "domainId": "dechets-tri-recyclage",
        "subdomain": "Sensibilisation des usagers & Prévention des déchets",
        "sectors": [
            "Collectivités territoriales (mairies, métropoles, communautés de communes)",
            "Syndicats intercommunaux de traitement des ordures ménagères (SITOM)",
            "Éco-organismes de filières de recyclage (Citeo, Ecosystem, Refashion)",
            "Associations d'éducation à l'environnement et de lutte contre le gaspillage"
        ],
        "onisepUrl": "https://www.onisep.fr/metier/decouvrir-le-monde-professionnel/environnement-developpement-durable/les-metiers-et-l-emploi-dans-l-environnement-et-le-developpement-durable",
        "onisepSource": true,
        "isEmerging": false,
        "level": "Bac à Bac +2 (BTSA GPN / BTS Métiers des services à l'environnement)",
        "salary": "🇫🇷 France : 1 800 € à 2 200 € brut/mois débutant (~22 000 à 27 000 € brut/an), jusqu'à 2 700 € brut/mois avec ancienneté en collectivité (Source : Onisep / Grilles Fonction Publique Territoriale) • 🇸🇳 Sénégal : 140 000 à 300 000 FCFA net/mois (SONAGED, programmes de salubrité et éducation citoyenne)",
        "salaryDetails": {
            "france": {
                "starter": "1 850 € brut/mois",
                "experienced": "2 200 € brut/mois",
                "senior": "2 700 € brut/mois",
                "source": "Onisep / Grilles d'Adjoint Technique / Animateur FPT"
            },
            "senegal": {
                "starter": "140 000 FCFA net/mois",
                "experienced": "210 000 FCFA net/mois",
                "senior": "300 000 FCFA net/mois",
                "source": "SONAGED / Projets Éco-citoyens et Salubrité Urbaine"
            }
        },
        "targetAudience": "Habitants, écoliers, collégiens, gardiens d'immeubles, commerçants et comités de quartier",
        "workEnvironment": "Terrain (porte-à-porte dans les quartiers, stands sur marchés, halls d'immeubles, écoles) et bureau (supports de communication)",
        "summary": "Pédagogue de l'économie circulaire, l'ambassadeur de tri va à la rencontre des citoyens, des écoliers et des commerçants pour expliquer les consignes de tri, corriger les erreurs de poubelle et promouvoir les gestes de réduction des déchets à la source.",
        "missions": [
            "Informer et sensibiliser les usagers aux règles du tri sélectif (emballages, verre, biodéchets, encombrants).",
            "Mener des opérations de porte-à-porte et de distribution de bio-seaux et composteurs collectifs.",
            "Contrôler la qualité du tri dans les bacs de collecte et apposer des messages pédagogiques en cas d'erreurs de tri.",
            "Animer des ateliers ludiques dans les écoles primaires et stands interactifs lors d'événements publics."
        ],
        "activities": [
            "Visites d'immeubles résidentiels pour vérifier l'état des locaux poubelles et échanger avec les gardiens.",
            "Animation d'un atelier 'zéro déchet' et fabrication de produits ménagers écologiques avec des riverains.",
            "Analyse des taux de refus de tri dans les bennes de collecte sélective pour cibler les quartiers prioritaires.",
            "Conception de dépliants explicatifs en concertation avec les services de communication de la collectivité."
        ],
        "specialties": [
            "Compostage partagé et valorisation des biodéchets",
            "Sensibilisation en milieu scolaire et périscolaire",
            "Accompagnement du tri dans l'habitat collectif vertical",
            "Médiation en quartiers prioritaires et multiculturels"
        ],
        "skills": {
            "hard": [
                "Consignes nationales et locales du tri et filières de recyclage des matériaux",
                "Techniques de compostage individuel et collectif",
                "Animation de groupe et techniques de médiation citoyenne",
                "Outils de reporting et saisie de données d'enquêtes terrain"
            ],
            "soft": [
                "Excellente aisance relationnelle et sens de l'écoute sans jugement",
                "Pédagogie, patience et capacité d'adaptation à tous les publics",
                "Dynamisme, enthousiasme et force de conviction écologique",
                "Diplomatie face aux usagers mécontents des taxes ou des collectes"
            ],
            "technical": [
                "Consignes nationales et locales du tri et filières de recyclage des matériaux",
                "Techniques de compostage individuel et collectif",
                "Animation de groupe et techniques de médiation citoyenne",
                "Outils de reporting et saisie de données d'enquêtes terrain"
            ],
            "human": [
                "Excellente aisance relationnelle et sens de l'écoute sans jugement",
                "Pédagogie, patience et capacité d'adaptation à tous les publics",
                "Dynamisme, enthousiasme et force de conviction écologique",
                "Diplomatie face aux usagers mécontents des taxes ou des collectes"
            ]
        },
        "qualities": [
            "Sens du contact humain",
            "Pédagogie active",
            "Patience et diplomatie",
            "Dynamisme de terrain",
            "Conviction écologique"
        ],
        "studies": [
            "🇫🇷 France : Bac à Bac +2. Bac Pro Gestion des pollutions / Bac Pro GPN, BTSA Gestion et protection de la nature (GPN), BTS Métiers des services à l'environnement, ou Titre professionnel de Médiateur social accès aux droits et services.",
            "🇸🇳 Sénégal : Bac à Bac +2. Cursus en animation sociale, communication pour le développement, médiation communautaire ou hygiène et environnement."
        ],
        "evolution": [
            "Coordinateur des ambassadeurs de tri",
            "Chargé de mission prévention et réduction des déchets en collectivité",
            "Responsable du service animation environnementale",
            "Conseiller en gestion des déchets en entreprise",
            "Chargé de communication environnementale"
        ],
        "dailySchedule": [
            {
                "time": "08:30",
                "activity": "Réunion matinale avec l'équipe pour définir le plan de prospection du quartier d'immeubles ciblé."
            },
            {
                "time": "09:30",
                "activity": "Visite des locaux poubelles avec le gardien de résidence pour vérifier le tri des bacs jaunes et bio-déchets."
            },
            {
                "time": "11:00",
                "activity": "Porte-à-porte pédagogique auprès des résidents pour remettre le guide du tri et répondre à leurs doutes."
            },
            {
                "time": "12:30",
                "activity": "Déjeuner d'équipe et partage des retours d'expérience du matin."
            },
            {
                "time": "14:00",
                "activity": "Intervention dans une école primaire : jeu interactif sur le cycle de vie d'une bouteille plastique recyclée."
            },
            {
                "time": "16:00",
                "activity": "Tenue d'un stand de distribution de composteurs individuels devant le centre commercial."
            },
            {
                "time": "17:30",
                "activity": "Saisie des statistiques de contacts et des besoins de nouveaux bacs sur la tablette professionnelle."
            }
        ],
        "daily": {
            "morning": "Diagnostic des bacs de collecte sélective, dialogue en porte-à-porte avec les riverains et distribution d'équipements de tri.",
            "afternoon": "Animation d'ateliers pédagogiques en milieu scolaire, tenue de stands d'information et encodage des données terrain.",
            "challenges": "Faire évoluer durablement les habitudes quotidiennes des citoyens sans adopter une posture moralisatrice."
        },
        "quiz": [
            {
                "question": "Quel est l'objectif premier d'un ambassadeur de tri ?",
                "options": [
                    "Sanctionner immédiatement les citoyens par des amendes",
                    "Expliquer les consignes de tri et sensibiliser à la réduction des déchets",
                    "Réparer les camions de collecte",
                    "Surveiller les caméras de sécurité de la ville"
                ],
                "answer": 1,
                "explanation": "L'ambassadeur de tri privilégie toujours la pédagogie, l'écoute et l'explication des bons gestes de recyclage."
            },
            {
                "question": "Quel déchet fait l'objet d'une obligation de tri à la source pour tous les ménages depuis janvier 2024 en France ?",
                "options": [
                    "Les biodéchets (déchets alimentaires et restes de repas)",
                    "Les cartouches d'encre",
                    "Les vieux pneus uniquement",
                    "Les meubles en chêne"
                ],
                "answer": 0,
                "explanation": "Le tri à la source des biodéchets (compostage ou collecte dédiée) est obligatoire pour valoriser la matière organique."
            }
        ],
        "saviezVous": {
            "fait": "Le tri d'une seule tonne d'emballages en plastique permet d'économiser l'équivalent de la consommation en pétrole d'une voiture sur plus de 15 000 kilomètres !",
            "chiffre": "Le taux de refus de tri dans les centres de recyclage peut chuter de 25% à moins de 8% après le passage régulier d'ambassadeurs de tri."
        },
        "sources": [
            {
                "name": "Onisep - Les métiers et l'emploi dans l'environnement et le développement durable",
                "url": "https://www.onisep.fr/metier/decouvrir-le-monde-professionnel/environnement-developpement-durable/les-metiers-et-l-emploi-dans-l-environnement-et-le-developpement-durable",
                "date": "04/11/2025",
                "type": "Source officielle française"
            }
        ],
        "shortDescription": "Pédagogue de l'économie circulaire, l'ambassadeur de tri va à la rencontre des citoyens, des écoliers et des commerçants pour expliquer les consignes de tri, corriger les erreurs de poubelle et promouvoir les gestes de réduction des déchets à la source.",
        "longDescription": "Pédagogue de l'économie circulaire, l'ambassadeur de tri va à la rencontre des citoyens, des écoliers et des commerçants pour expliquer les consignes de tri, corriger les erreurs de poubelle et promouvoir les gestes de réduction des déchets à la source. Informer et sensibiliser les usagers aux règles du tri sélectif (emballages, verre, biodéchets, encombrants). Mener des opérations de porte-à-porte et de distribution de bio-seaux et composteurs collectifs. Contrôler la qualité du tri dans les bacs de collecte et apposer des messages pédagogiques en cas d'erreurs de tri. Animer des ateliers ludiques dans les écoles primaires et stands interactifs lors d'événements publics.",
        "description": "Pédagogue de l'économie circulaire, l'ambassadeur de tri va à la rencontre des citoyens, des écoliers et des commerçants pour expliquer les consignes de tri, corriger les erreurs de poubelle et promouvoir les gestes de réduction des déchets à la source. Informer et sensibiliser les usagers aux règles du tri sélectif (emballages, verre, biodéchets, encombrants). Mener des opérations de porte-à-porte et de distribution de bio-seaux et composteurs collectifs. Contrôler la qualité du tri dans les bacs de collecte et apposer des messages pédagogiques en cas d'erreurs de tri. Animer des ateliers ludiques dans les écoles primaires et stands interactifs lors d'événements publics.",
        "studyLevel": "Bac à Bac +2 (BTSA GPN / BTS Métiers des services à l'environnement)",
        "hard": [
            "Consignes nationales et locales du tri et filières de recyclage des matériaux",
            "Techniques de compostage individuel et collectif",
            "Animation de groupe et techniques de médiation citoyenne",
            "Outils de reporting et saisie de données d'enquêtes terrain"
        ],
        "soft": [
            "Excellente aisance relationnelle et sens de l'écoute sans jugement",
            "Pédagogie, patience et capacité d'adaptation à tous les publics",
            "Dynamisme, enthousiasme et force de conviction écologique",
            "Diplomatie face aux usagers mécontents des taxes ou des collectes"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Réunion matinale avec l'équipe pour définir le plan de prospection du quartier d'immeubles ciblé."
            },
            {
                "time": "09:30",
                "activity": "Visite des locaux poubelles avec le gardien de résidence pour vérifier le tri des bacs jaunes et bio-déchets."
            },
            {
                "time": "11:00",
                "activity": "Porte-à-porte pédagogique auprès des résidents pour remettre le guide du tri et répondre à leurs doutes."
            },
            {
                "time": "12:30",
                "activity": "Déjeuner d'équipe et partage des retours d'expérience du matin."
            },
            {
                "time": "14:00",
                "activity": "Intervention dans une école primaire : jeu interactif sur le cycle de vie d'une bouteille plastique recyclée."
            },
            {
                "time": "16:00",
                "activity": "Tenue d'un stand de distribution de composteurs individuels devant le centre commercial."
            },
            {
                "time": "17:30",
                "activity": "Saisie des statistiques de contacts et des besoins de nouveaux bacs sur la tablette professionnelle."
            }
        ]
    },
    {
        "id": "operateur-collecte-tri",
        "slug": "operateur-collecte-tri",
        "title": "Opérateur / Opératrice de Collecte ou de Tri",
        "aliases": [
            "Agent de tri des déchets",
            "Opérateur de centre de tri",
            "Trieur valoriste",
            "Opérateur sur chaîne de tri",
            "Agent de tri mécanisé",
            "Conducteur d'engins de centre de tri"
        ],
        "icon": "📦",
        "image": "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=800&auto=format&fit=crop&q=80",
        "familyId": "environnement-developpement-durable",
        "familyName": "Environnement, Écologie & Développement durable",
        "connectedFamilies": [
            "environnement-developpement-durable",
            "industrie-mecanique"
        ],
        "domain": "Déchets, Tri & Recyclage",
        "domainId": "dechets-tri-recyclage",
        "subdomain": "Tri mécanisé, optique & Massification",
        "sectors": [
            "Centres de tri de déchets ménagers et industriels",
            "Usines de recyclage des matières premières secondaires (plastiques, papiers, métaux)",
            "Plates-formes de massification et de déconditionnement",
            "Entreprises d'insertion par l'activité économique (IAE) dédiées au recyclage"
        ],
        "onisepUrl": "https://www.onisep.fr/metier/decouvrir-le-monde-professionnel/environnement-developpement-durable/les-metiers-et-l-emploi-dans-l-environnement-et-le-developpement-durable",
        "onisepSource": true,
        "isEmerging": false,
        "level": "Sans diplôme à CAP (CAP Valorisation des matières et propreté / Titre pro Agent de valorisation)",
        "salary": "🇫🇷 France : SMIC à 1 900 € brut/mois débutant (~21 000 à 24 500 € brut/an) hors primes d'équipe et cadence (Source : Onisep / Convention collective des activités du déchet) • 🇸🇳 Sénégal : 130 000 à 250 000 FCFA net/mois (Centres de tri et de valorisation, unités de récupération de plastique)",
        "salaryDetails": {
            "france": {
                "starter": "1 800 € brut/mois",
                "experienced": "2 050 € brut/mois",
                "senior": "2 300 € brut/mois",
                "source": "Onisep / Convention collective des activités du déchet"
            },
            "senegal": {
                "starter": "130 000 FCFA net/mois",
                "experienced": "180 000 FCFA net/mois",
                "senior": "250 000 FCFA net/mois",
                "source": "SONAGED / Filières de valorisation des plastiques et métaux"
            }
        },
        "targetAudience": "Tapis roulants de convoyage, cabines de tri climatisées, trieurs optiques, trommels et presses à balles",
        "workEnvironment": "Centre de tri industriel, cabine de tri ventilée au-dessus des convoyeurs à bande, travail posté (en 2x8 ou 3x8), port d'EPI spécifiques",
        "summary": "Maillon clé du recyclage industriel, l'opérateur de tri sépare et contrôle les différents flux de matières recyclables (cartons, bouteilles plastiques transparentes, canettes métalliques) qui défilent sur les tapis roulants pour garantir des balles de matières pures destinées aux usines de réincorporation.",
        "missions": [
            "Trier à la main ou superviser le tri automatisé des flux d'emballages défilant sur les bandes transporteuses.",
            "Isoler et écarter les objets dangereux, indésirables ou non recyclables (refus de tri) qui risquent d'endommager les machines.",
            "Alimenter et surveiller les presses à balles qui compactent les matières homogènes triées.",
            "Contrôler la qualité des balles compactées avant expédition vers les papeteries, aciéries et régénérateurs de plastique."
        ],
        "activities": [
            "Saisie rapide des corps creux et plats selon la consigne de tri de la cabine.",
            "Surveillance du bon fonctionnement du crible rotatif (trommel) et des séparateurs magnétiques (overband).",
            "Évacuation des bourrages légers sur les trémies dans le respect des consignes d'arrêt d'urgence.",
            "Nettoyage et dépoussiérage de fin de poste de la cabine et de la zone de compactage."
        ],
        "specialties": [
            "Trieur sur cabine de contrôle optique",
            "Conducteur de presse à balles et compacteurs",
            "Cariste approvisionneur de centre de tri (CACES)",
            "Opérateur de tri des Déchets d'Équipements Électriques et Électroniques (DEEE)"
        ],
        "skills": {
            "hard": [
                "Reconnaissance visuelle et tactile instantanée des différentes résines plastiques (PET, PEHD, PP)",
                "Respect rigoureux des procédures de sécurité industrielle et d'arrêt d'urgence",
                "Conduite de presses à balles industrielles et transpalettes électriques",
                "Notions de maintenance préventive de premier niveau sur bandes transporteuses"
            ],
            "soft": [
                "Excellente rapidité gestuelle et réflexes affûtés",
                "Capacité de concentration visuelle soutenue malgré la monotonie du défilement",
                "Résistance à la fatigue posturale (station debout en cabine)",
                "Esprit de discipline et de rigueur collective en environnement bruyant"
            ],
            "technical": [
                "Reconnaissance visuelle et tactile instantanée des différentes résines plastiques (PET, PEHD, PP)",
                "Respect rigoureux des procédures de sécurité industrielle et d'arrêt d'urgence",
                "Conduite de presses à balles industrielles et transpalettes électriques",
                "Notions de maintenance préventive de premier niveau sur bandes transporteuses"
            ],
            "human": [
                "Excellente rapidité gestuelle et réflexes affûtés",
                "Capacité de concentration visuelle soutenue malgré la monotonie du défilement",
                "Résistance à la fatigue posturale (station debout en cabine)",
                "Esprit de discipline et de rigueur collective en environnement bruyant"
            ]
        },
        "qualities": [
            "Vitesse d'exécution et dextérité",
            "Capacité d'attention soutenue",
            "Vigilance sécurité",
            "Endurance physique",
            "Esprit d'équipe"
        ],
        "studies": [
            "🇫🇷 France : Accessible sans diplôme initial. Formations d'appui : CAP Valorisation des matières et propreté des espaces urbains, Titre professionnel d'Agent de valorisation des déchets, CACES chariots élévateurs (R489).",
            "🇸🇳 Sénégal : Recrutement direct avec formation interne sur la reconnaissance des matières valorisables (plastiques, métaux ferreux/non ferreux, cartons)."
        ],
        "evolution": [
            "Chef d'équipe de cabine de tri",
            "Conducteur d'engins lourds de déchèterie / centre de tri (pelle, chargeuse)",
            "Technicien de maintenance électromécanique de centre de tri",
            "Contrôleur qualité des matières recyclables",
            "Responsable d'exploitation adjoint de centre de tri"
        ],
        "dailySchedule": [
            {
                "time": "06:00",
                "activity": "Prise de poste en équipe du matin (poste 1), équipement complet (gants anti-coupure, casque antibruit, masque anti-poussière)."
            },
            {
                "time": "06:15",
                "activity": "Mise en route de la ligne de tri, vérification de la ventilation de la cabine et défilement des flux de plastiques."
            },
            {
                "time": "08:15",
                "activity": "Rotation de poste pour reposer la vision et la posture corporelle, passage au contrôle des refus de tri."
            },
            {
                "time": "09:45",
                "activity": "Pause réglementaire au réfectoire du centre de tri."
            },
            {
                "time": "10:15",
                "activity": "Contrôle du liage automatique de la presse à balles de cartons et vérification de la densité du compactage."
            },
            {
                "time": "12:30",
                "activity": "Nettoyage soigné du poste de travail et évacuation des poussières au balai d'aspiration."
            },
            {
                "time": "13:30",
                "activity": "Passation des consignes à l'équipe du poste d'après-midi (poste 2) et sortie de vestiaire."
            }
        ],
        "daily": {
            "morning": "Tri gestuel rapide des matières sur tapis roulant, séparation des résines recyclables et évacuation des éléments non conformes.",
            "afternoon": "Conditionnement des flux triés en balles compactées, contrôle de propreté des lots et nettoyage technique des installations.",
            "challenges": "Soutenir une cadence élevée tout en maintenant une pureté supérieure à 95% dans les matières sélectionnées."
        },
        "quiz": [
            {
                "question": "Quel risque physique majeur les gants de l'opérateur de tri doivent-ils impérativement prévenir ?",
                "options": [
                    "Le froid sibérien uniquement",
                    "Les coupures et piqûres par bris de verre, métaux tranchants ou aiguilles égarées",
                    "Les brûlures par gel",
                    "Les éclaboussures d'encre"
                ],
                "answer": 1,
                "explanation": "Les gants professionnels normés anti-coupure et anti-perforation protègent des objets tranchants mêlés aux emballages."
            },
            {
                "question": "Sous quelle forme les matières recyclées triées (cartons, plastiques) sont-elles compactées pour le transport ?",
                "options": [
                    "En balles cubiques denses compressées pesant plusieurs centaines de kilos",
                    "En petits sachets individuels",
                    "En poudre fine",
                    "En tonneaux de bois"
                ],
                "answer": 0,
                "explanation": "Les presses industrielles compactent les emballages en balles denses faciles à empiler et à transporter par camion vers les usines de recyclage."
            }
        ],
        "saviezVous": {
            "fait": "Les centres de tri modernes utilisent des trieurs optiques à infrarouge capables de reconnaître la signature moléculaire d'une bouteille en quelques millièmes de seconde !",
            "chiffre": "Le tri et le recyclage des canettes en aluminium consomment 95% d'énergie en moins que la fabrication d'aluminium neuf à partir de bauxite."
        },
        "sources": [
            {
                "name": "Onisep - Les métiers et l'emploi dans l'environnement et le développement durable",
                "url": "https://www.onisep.fr/metier/decouvrir-le-monde-professionnel/environnement-developpement-durable/les-metiers-et-l-emploi-dans-l-environnement-et-le-developpement-durable",
                "date": "04/11/2025",
                "type": "Source officielle française"
            }
        ],
        "shortDescription": "Maillon clé du recyclage industriel, l'opérateur de tri sépare et contrôle les différents flux de matières recyclables (cartons, bouteilles plastiques transparentes, canettes métalliques) qui défilent sur les tapis roulants pour garantir des balles de matières pures destinées aux usines de réincorporation.",
        "longDescription": "Maillon clé du recyclage industriel, l'opérateur de tri sépare et contrôle les différents flux de matières recyclables (cartons, bouteilles plastiques transparentes, canettes métalliques) qui défilent sur les tapis roulants pour garantir des balles de matières pures destinées aux usines de réincorporation. Trier à la main ou superviser le tri automatisé des flux d'emballages défilant sur les bandes transporteuses. Isoler et écarter les objets dangereux, indésirables ou non recyclables (refus de tri) qui risquent d'endommager les machines. Alimenter et surveiller les presses à balles qui compactent les matières homogènes triées. Contrôler la qualité des balles compactées avant expédition vers les papeteries, aciéries et régénérateurs de plastique.",
        "description": "Maillon clé du recyclage industriel, l'opérateur de tri sépare et contrôle les différents flux de matières recyclables (cartons, bouteilles plastiques transparentes, canettes métalliques) qui défilent sur les tapis roulants pour garantir des balles de matières pures destinées aux usines de réincorporation. Trier à la main ou superviser le tri automatisé des flux d'emballages défilant sur les bandes transporteuses. Isoler et écarter les objets dangereux, indésirables ou non recyclables (refus de tri) qui risquent d'endommager les machines. Alimenter et surveiller les presses à balles qui compactent les matières homogènes triées. Contrôler la qualité des balles compactées avant expédition vers les papeteries, aciéries et régénérateurs de plastique.",
        "studyLevel": "Sans diplôme à CAP (CAP Valorisation des matières et propreté / Titre pro Agent de valorisation)",
        "hard": [
            "Reconnaissance visuelle et tactile instantanée des différentes résines plastiques (PET, PEHD, PP)",
            "Respect rigoureux des procédures de sécurité industrielle et d'arrêt d'urgence",
            "Conduite de presses à balles industrielles et transpalettes électriques",
            "Notions de maintenance préventive de premier niveau sur bandes transporteuses"
        ],
        "soft": [
            "Excellente rapidité gestuelle et réflexes affûtés",
            "Capacité de concentration visuelle soutenue malgré la monotonie du défilement",
            "Résistance à la fatigue posturale (station debout en cabine)",
            "Esprit de discipline et de rigueur collective en environnement bruyant"
        ],
        "typicalDay": [
            {
                "time": "06:00",
                "activity": "Prise de poste en équipe du matin (poste 1), équipement complet (gants anti-coupure, casque antibruit, masque anti-poussière)."
            },
            {
                "time": "06:15",
                "activity": "Mise en route de la ligne de tri, vérification de la ventilation de la cabine et défilement des flux de plastiques."
            },
            {
                "time": "08:15",
                "activity": "Rotation de poste pour reposer la vision et la posture corporelle, passage au contrôle des refus de tri."
            },
            {
                "time": "09:45",
                "activity": "Pause réglementaire au réfectoire du centre de tri."
            },
            {
                "time": "10:15",
                "activity": "Contrôle du liage automatique de la presse à balles de cartons et vérification de la densité du compactage."
            },
            {
                "time": "12:30",
                "activity": "Nettoyage soigné du poste de travail et évacuation des poussières au balai d'aspiration."
            },
            {
                "time": "13:30",
                "activity": "Passation des consignes à l'équipe du poste d'après-midi (poste 2) et sortie de vestiaire."
            }
        ]
    },
    {
        "id": "responsable-collecte-dechets",
        "slug": "responsable-collecte-dechets",
        "title": "Responsable de la Collecte des Déchets Ménagers",
        "aliases": [
            "Chef de secteur collecte",
            "Responsable d'exploitation déchets",
            "Coordinateur collecte des ordures ménagères",
            "Responsable service propreté et collecte",
            "Manager d'exploitation déchets ménagers"
        ],
        "icon": "🚛",
        "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
        "familyId": "environnement-developpement-durable",
        "familyName": "Environnement, Écologie & Développement durable",
        "connectedFamilies": [
            "environnement-developpement-durable",
            "transport-logistique"
        ],
        "domain": "Déchets, Tri & Recyclage",
        "domainId": "dechets-tri-recyclage",
        "subdomain": "Logistique des tournées & Gestion de flotte de collecte",
        "sectors": [
            "Sociétés de collecte privées délégataires (Suez, Veolia, Sepur, Nicollin)",
            "Communautés de communes et métropoles en régie directe",
            "Syndicats mixtes de collecte et traitement des déchets (SMITOM)",
            "Agences nationales de gestion des déchets"
        ],
        "onisepUrl": "https://www.onisep.fr/ressources/univers-metier/metiers/responsable-de-la-collecte-des-dechets-menagers",
        "onisepSource": true,
        "isEmerging": false,
        "level": "Bac +2 à Bac +5 (BTS Métiers des services à l'environnement / BUT HSE / Master Gestion des déchets)",
        "salary": "🇫🇷 France : 2 200 € à 2 800 € brut/mois débutant (~30 000 à 38 000 € brut/an), 3 500 € à 4 800 € brut/mois pour un responsable de secteur confirmé (Source : Onisep / APEC) • 🇸🇳 Sénégal : 350 000 à 800 000 FCFA net/mois (SONAGED, coordinations régionales de collecte des déchets)",
        "salaryDetails": {
            "france": {
                "starter": "2 300 € brut/mois",
                "experienced": "3 400 € brut/mois",
                "senior": "4 800 € brut/mois",
                "source": "Onisep / APEC Métiers de l'Environnement et de la Logistique"
            },
            "senegal": {
                "starter": "350 000 FCFA net/mois",
                "experienced": "550 000 FCFA net/mois",
                "senior": "800 000 FCFA net/mois",
                "source": "SONAGED / Grilles Cadres d'Exploitation Environnementale Sénégal"
            }
        },
        "targetAudience": "Flottes de camions bennes à ordures ménagères (BOM), équipes de ripeurs et chauffeurs, dépôts techniques et quais de transfert",
        "workEnvironment": "Bureau d'exploitation logistique (logiciels de géolocalisation et tournées) et visites régulières sur le terrain (dépôt, départs de bennes, points noirs)",
        "summary": "Chef d'orchestre de la propreté d'un territoire, le responsable de la collecte organise et optimise les tournées quotidiennes des camions bennes, manage les équipes de chauffeurs et ripeurs, veille à la sécurité au travail et garantit la continuité de service pour des centaines de milliers d'habitants.",
        "missions": [
            "Planifier et optimiser les circuits de collecte des ordures ménagères, du tri sélectif et des encombrants.",
            "Manager au quotidien les chauffeurs de bennes, ripeurs et agents d'entretien (plannings, sécurité, remplacements).",
            "Superviser l'entretien, le contrôle technique réglementaire et la conformité de la flotte de camions bennes.",
            "Traiter les réclamations des usagers et des élus et résoudre les incidents d'exploitation (pannes, blocages de circulation, intempéries)."
        ],
        "activities": [
            "Ajustement en temps réel des plannings de tournées en cas d'absence de personnel ou de panne mécanique.",
            "Analyse des données télématiques des camions (consommation de carburant, temps d'arrêt, tonnage collecté).",
            "Animation des réunions de sécurité ('quarts d'heure sécurité') axées sur les gestes et postures et les angles morts.",
            "Élaboration des réponses aux appels d'offres des marchés publics de collecte pour les collectivités."
        ],
        "specialties": [
            "Collecte sélective en zone urbaine dense",
            "Collecte en milieu rural dispersé et points d'apport volontaire",
            "Gestion des déchets industriels banals (DIB) d'entreprises",
            "Logistique de décarbonation des flottes (bennes électriques et GNV)"
        ],
        "skills": {
            "hard": [
                "Gestion d'exploitation logistique et optimisation d'itinéraires de collecte",
                "Réglementation du transport routier de marchandises et temps de repos des chauffeurs",
                "Règles d'hygiène et de sécurité au travail (Recommandation CNAM R437)",
                "Logiciels de gestion de tournées et SIG appliqués à la collecte (RouteOp, Praxedo)"
            ],
            "soft": [
                "Leadership managérial et aisance dans les relations sociales de terrain",
                "Réactivité et excellente gestion du stress face aux imprévus d'exploitation",
                "Sens aigu du service client et diplomatie auprès des élus locaux",
                "Rigueur d'organisation et respect scrupuleux des budgets d'exploitation"
            ],
            "technical": [
                "Gestion d'exploitation logistique et optimisation d'itinéraires de collecte",
                "Réglementation du transport routier de marchandises et temps de repos des chauffeurs",
                "Règles d'hygiène et de sécurité au travail (Recommandation CNAM R437)",
                "Logiciels de gestion de tournées et SIG appliqués à la collecte (RouteOp, Praxedo)"
            ],
            "human": [
                "Leadership managérial et aisance dans les relations sociales de terrain",
                "Réactivité et excellente gestion du stress face aux imprévus d'exploitation",
                "Sens aigu du service client et diplomatie auprès des élus locaux",
                "Rigueur d'organisation et respect scrupuleux des budgets d'exploitation"
            ]
        },
        "qualities": [
            "Leadership affirmé",
            "Sens de l'organisation logistique",
            "Sang-froid face aux urgences",
            "Esprit d'écoute sociale",
            "Exigence de sécurité"
        ],
        "studies": [
            "🇫🇷 France : Bac +2 à Bac +5. BTS Métiers des services à l'environnement, BUT Hygiène, Sécurité, Environnement (HSE), Licence Pro Gestion des déchets, ou Master/Ingénieur Logistique & Management environnemental.",
            "🇸🇳 Sénégal : Bac +3 à Bac +5. Licence / Master en Gestion urbaine, Logistique et Transports, Génie Sanitaire (ESEA, ESP Dakar, universités publiques)."
        ],
        "evolution": [
            "Directeur d'exploitation d'une agence de collecte régionale",
            "Directeur des services Déchets et Propreté en métropole",
            "Responsable des méthodes et de l'optimisation des tournées nationales",
            "Consultant en ingénierie de collecte et valorisation des déchets",
            "Directeur d'un pôle multi-activités (collecte + centre de tri + valorisation)"
        ],
        "dailySchedule": [
            {
                "time": "05:15",
                "activity": "Présence au dépôt pour le départ des premières bennes, affectation des chauffeurs remplaçants sur les tournées prioritaires."
            },
            {
                "time": "07:30",
                "activity": "Débriefing avec le chef d'atelier sur les réparations mécaniques des trois bennes en révision."
            },
            {
                "time": "09:00",
                "activity": "Analyse sur logiciel de géolocalisation des données de vidage des conteneurs connectés de la veille."
            },
            {
                "time": "11:00",
                "activity": "Visite de terrain avec l'adjoint au maire chargé de la propreté pour étudier la réorganisation d'un quartier commerçant."
            },
            {
                "time": "13:00",
                "activity": "Déjeuner de travail avec les chefs d'équipe de l'après-midi."
            },
            {
                "time": "14:30",
                "activity": "Animation d'un quart d'heure sécurité sur la prévention des chutes de marchepied et les règles de marche arrière."
            },
            {
                "time": "16:30",
                "activity": "Validation des plannings d'équipes du lendemain et réponse aux demandes d'usagers sur la plateforme métropolitaine."
            }
        ],
        "daily": {
            "morning": "Supervision des départs des camions bennes à l'aube, réorganisation immédiate des circuits en cas d'aléas et gestion d'équipe.",
            "afternoon": "Optimisation des tournées sur ordinateur, réunions sécurité avec les ripeurs et inspection des points sensibles de collecte.",
            "challenges": "Assurer un taux de collecte de 100% chaque jour tout en réduisant l'empreinte carbone kilométrique des bennes."
        },
        "quiz": [
            {
                "question": "Quel est l'un des enjeux majeurs actuels dans l'optimisation des tournées de bennes à ordures ?",
                "options": [
                    "Supprimer totalement les camions pour porter les bacs à dos d'homme",
                    "Optimiser les itinéraires par capteurs connectés et passer à des motorisations décarbonées (électrique/biogaz)",
                    "Ne collecter qu'une seule fois par an",
                    "Remplacer les poubelles par des fosses individuelles"
                ],
                "answer": 1,
                "explanation": "L'usage de capteurs de remplissage et de bennes au bioGNV permet de réduire les trajets inutiles et la pollution de l'air."
            },
            {
                "question": "Quelle compétence managériale est cruciale pour le responsable de collecte ?",
                "options": [
                    "L'animation des consignes de sécurité pour éviter les accidents de circulation et de manutention",
                    "La fabrication de verre soufflé",
                    "L'expertise en droit maritime international",
                    "Le dessin de plans d'avions"
                ],
                "answer": 0,
                "explanation": "La collecte des déchets est un métier physiquement exposé où la prévention des accidents du travail est une priorité absolue."
            }
        ],
        "saviezVous": {
            "fait": "Les bennes modernes à ordures roulant au biogaz utilisent souvent le biométhane produit par la méthanisation des boues d'épuration ou des déchets alimentaires de la même ville : c'est un cercle vertueux parfait !",
            "chiffre": "Une benne à ordures ménagères freine et repart en moyenne plus de 1 000 fois au cours d'une seule tournée de collecte en zone urbaine."
        },
        "sources": [
            {
                "name": "Onisep - Fiche Métier Responsable de la collecte des déchets ménagers",
                "url": "https://www.onisep.fr/ressources/univers-metier/metiers/responsable-de-la-collecte-des-dechets-menagers",
                "date": "04/11/2025",
                "type": "Source officielle française"
            }
        ],
        "shortDescription": "Chef d'orchestre de la propreté d'un territoire, le responsable de la collecte organise et optimise les tournées quotidiennes des camions bennes, manage les équipes de chauffeurs et ripeurs, veille à la sécurité au travail et garantit la continuité de service pour des centaines de milliers d'habitants.",
        "longDescription": "Chef d'orchestre de la propreté d'un territoire, le responsable de la collecte organise et optimise les tournées quotidiennes des camions bennes, manage les équipes de chauffeurs et ripeurs, veille à la sécurité au travail et garantit la continuité de service pour des centaines de milliers d'habitants. Planifier et optimiser les circuits de collecte des ordures ménagères, du tri sélectif et des encombrants. Manager au quotidien les chauffeurs de bennes, ripeurs et agents d'entretien (plannings, sécurité, remplacements). Superviser l'entretien, le contrôle technique réglementaire et la conformité de la flotte de camions bennes. Traiter les réclamations des usagers et des élus et résoudre les incidents d'exploitation (pannes, blocages de circulation, intempéries).",
        "description": "Chef d'orchestre de la propreté d'un territoire, le responsable de la collecte organise et optimise les tournées quotidiennes des camions bennes, manage les équipes de chauffeurs et ripeurs, veille à la sécurité au travail et garantit la continuité de service pour des centaines de milliers d'habitants. Planifier et optimiser les circuits de collecte des ordures ménagères, du tri sélectif et des encombrants. Manager au quotidien les chauffeurs de bennes, ripeurs et agents d'entretien (plannings, sécurité, remplacements). Superviser l'entretien, le contrôle technique réglementaire et la conformité de la flotte de camions bennes. Traiter les réclamations des usagers et des élus et résoudre les incidents d'exploitation (pannes, blocages de circulation, intempéries).",
        "studyLevel": "Bac +2 à Bac +5 (BTS Métiers des services à l'environnement / BUT HSE / Master Gestion des déchets)",
        "hard": [
            "Gestion d'exploitation logistique et optimisation d'itinéraires de collecte",
            "Réglementation du transport routier de marchandises et temps de repos des chauffeurs",
            "Règles d'hygiène et de sécurité au travail (Recommandation CNAM R437)",
            "Logiciels de gestion de tournées et SIG appliqués à la collecte (RouteOp, Praxedo)"
        ],
        "soft": [
            "Leadership managérial et aisance dans les relations sociales de terrain",
            "Réactivité et excellente gestion du stress face aux imprévus d'exploitation",
            "Sens aigu du service client et diplomatie auprès des élus locaux",
            "Rigueur d'organisation et respect scrupuleux des budgets d'exploitation"
        ],
        "typicalDay": [
            {
                "time": "05:15",
                "activity": "Présence au dépôt pour le départ des premières bennes, affectation des chauffeurs remplaçants sur les tournées prioritaires."
            },
            {
                "time": "07:30",
                "activity": "Débriefing avec le chef d'atelier sur les réparations mécaniques des trois bennes en révision."
            },
            {
                "time": "09:00",
                "activity": "Analyse sur logiciel de géolocalisation des données de vidage des conteneurs connectés de la veille."
            },
            {
                "time": "11:00",
                "activity": "Visite de terrain avec l'adjoint au maire chargé de la propreté pour étudier la réorganisation d'un quartier commerçant."
            },
            {
                "time": "13:00",
                "activity": "Déjeuner de travail avec les chefs d'équipe de l'après-midi."
            },
            {
                "time": "14:30",
                "activity": "Animation d'un quart d'heure sécurité sur la prévention des chutes de marchepied et les règles de marche arrière."
            },
            {
                "time": "16:30",
                "activity": "Validation des plannings d'équipes du lendemain et réponse aux demandes d'usagers sur la plateforme métropolitaine."
            }
        ]
    },
    {
        "id": "responsable-unite-traitement-dechets",
        "slug": "responsable-unite-traitement-dechets",
        "title": "Responsable d'Unité de Traitement des Déchets",
        "aliases": [
            "Directeur d'unité de valorisation énergétique (UVE)",
            "Chef d'usine d'incinération",
            "Responsable d'installation de stockage de déchets non dangereux (ISDND)",
            "Responsable d'usine de méthanisation",
            "Directeur de site de traitement des déchets"
        ],
        "icon": "🏭",
        "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&auto=format&fit=crop&q=80",
        "familyId": "environnement-developpement-durable",
        "familyName": "Environnement, Écologie & Développement durable",
        "connectedFamilies": [
            "environnement-developpement-durable",
            "industrie-mecanique",
            "energie-renouvelable"
        ],
        "domain": "Déchets, Tri & Recyclage",
        "domainId": "dechets-tri-recyclage",
        "subdomain": "Valorisation matière, organique & énergétique",
        "sectors": [
            "Unités de valorisation énergétique (UVE / incinérateurs urbains)",
            "Installations de stockage de déchets non dangereux (ISDND)",
            "Usines de méthanisation industrielle et compostage de grande capacité",
            "Centres de traitement des déchets dangereux et spéciaux"
        ],
        "onisepUrl": "https://www.onisep.fr/metier/decouvrir-le-monde-professionnel/environnement-developpement-durable/les-metiers-et-l-emploi-dans-l-environnement-et-le-developpement-durable",
        "onisepSource": true,
        "isEmerging": false,
        "level": "Bac +5 (Diplôme d'ingénieur en procédés / thermique / environnement ou Master Sciences industrielles)",
        "salary": "🇫🇷 France : 3 000 € à 3 800 € brut/mois débutant (~40 000 à 50 000 € brut/an), 4 500 € à 6 500 € brut/mois pour un directeur de site industriel (Source : Onisep / APEC) • 🇸🇳 Sénégal : 600 000 à 1 500 000 FCFA net/mois (Centres de valorisation, unités de biogaz et gestion industrielle des déchets)",
        "salaryDetails": {
            "france": {
                "starter": "3 200 € brut/mois",
                "experienced": "4 500 € brut/mois",
                "senior": "6 500 € brut/mois",
                "source": "Onisep / APEC Ingénierie des Procédés et de l'Énergie"
            },
            "senegal": {
                "starter": "600 000 FCFA net/mois",
                "experienced": "950 000 FCFA net/mois",
                "senior": "1 500 000 FCFA net/mois",
                "source": "Secteur Industriel / Grands Projets d'Énergie et de Déchets Sénégal"
            }
        },
        "targetAudience": "Fours d'incinération à 1 000°C, turbines de production d'électricité, chaudières de réseau de chaleur urbain, digesteurs de biogaz et filtres de traitement des fumées",
        "workEnvironment": "Site industriel classé ICPE (Installations Classées pour la Protection de l'Environnement), salle de contrôle automatisée, zones techniques thermiques",
        "summary": "Pilote d'usines industrielles complexes, le responsable d'unité de traitement transforme les déchets non recyclables en électricité, en chauffage urbain ou en biogaz grâce à des procédés thermiques ou biologiques de pointe, tout en garantissant des rejets atmosphériques scrupuleusement dépollués.",
        "missions": [
            "Superviser le fonctionnement continu (24h/24, 7j/7) des fours d'incinération, turbines à vapeur ou digesteurs de méthanisation.",
            "Garantir le respect absolu des normes environnementales de rejets dans l'air (dioxines, métaux lourds, poussières) et dans l'eau.",
            "Optimiser la production et la vente d'énergie récupérée (vapeur injectée dans le réseau de chaleur urbain, mégawatts électriques vendus au réseau).",
            "Manager les équipes de quart (conducteurs de ligne, mécaniciens, électriciens) et piloter les arrêts techniques annuels de maintenance."
        ],
        "activities": [
            "Contrôle continu des mesures en sortie de cheminée sur les analyseurs de gaz en temps réel.",
            "Négociation des plannings de livraison avec les transporteurs de déchets ménagers et industriels.",
            "Pilotage des arrêts de maintenance préventive programmée pour le rechargement réfractaire des fours.",
            "Présentation des bilans d'exploitation lors des réunions publiques avec la commission locale d'information et de surveillance (CLIS)."
        ],
        "specialties": [
            "Incinération et valorisation énergétique (UVE)",
            "Méthanisation industrielle et injection de biométhane",
            "Stockage étanche et valorisation du biogaz de décharge (ISDND)",
            "Traitement thermique et physico-chimique des déchets industriels dangereux"
        ],
        "skills": {
            "hard": [
                "Génie des procédés thermiques, thermodynamique et combustion industrielle",
                "Chimie du traitement des fumées et épuration des gaz acides",
                "Réglementation sévère des Installations Classées pour la Protection de l'Environnement (ICPE)",
                "Gestion budgétaire industrielle, maintenance d'usines lourdes et management de la sécurité"
            ],
            "soft": [
                "Autorité naturelle et leadership pour diriger des équipes industrielles postées",
                "Rigueur absolue face aux risques d'explosion, d'incendie et de pollution atmosphérique",
                "Aisance relationnelle pour dialoguer avec les inspecteurs de la DREAL et les associations citoyennes",
                "Capacité d'analyse stratégique et de prise de décision rapide en situation de crise"
            ],
            "technical": [
                "Génie des procédés thermiques, thermodynamique et combustion industrielle",
                "Chimie du traitement des fumées et épuration des gaz acides",
                "Réglementation sévère des Installations Classées pour la Protection de l'Environnement (ICPE)",
                "Gestion budgétaire industrielle, maintenance d'usines lourdes et management de la sécurité"
            ],
            "human": [
                "Autorité naturelle et leadership pour diriger des équipes industrielles postées",
                "Rigueur absolue face aux risques d'explosion, d'incendie et de pollution atmosphérique",
                "Aisance relationnelle pour dialoguer avec les inspecteurs de la DREAL et les associations citoyennes",
                "Capacité d'analyse stratégique et de prise de décision rapide en situation de crise"
            ]
        },
        "qualities": [
            "Rigueur industrielle absolue",
            "Leadership managérial",
            "Sens de la sécurité et des normes",
            "Capacité d'arbitrage financier et technique",
            "Sens de la communication publique"
        ],
        "studies": [
            "🇫🇷 France : Bac +5. Diplôme d'ingénieur (Génie chimique, Génie des procédés, Énergétique, Écoles des Mines, INSA, Polytech) ou Master universitaire spécialisé en génie de l'environnement et thermique.",
            "🇸🇳 Sénégal : Bac +5. Diplôme d'ingénieur en Génie Électromécanique, Génie Chimique ou Énergie (ESP Dakar, École Polytechnique de Thiès, 2iE)."
        ],
        "evolution": [
            "Directeur régional des unités de valorisation industrielle",
            "Directeur technique national d'un groupe de gestion des déchets",
            "Expert international en conception de nouvelles usines de valorisation",
            "Inspecteur des installations classées pour l'environnement (fonction publique d'État)",
            "Directeur général de filiale de services énergétiques et environnementaux"
        ],
        "dailySchedule": [
            {
                "time": "08:00",
                "activity": "Point d'exploitation matinal avec les chefs de quart : analyse de la combustion nocturne et de la production électrique."
            },
            {
                "time": "09:30",
                "activity": "Inspection visuelle de la fosse de déchargement des déchets et contrôle du fonctionnement du grappin automatisé."
            },
            {
                "time": "11:00",
                "activity": "Vérification des registres de rejets gazeux et étalonnage des analyseurs de dioxyde de soufre et d'oxydes d'azote."
            },
            {
                "time": "12:30",
                "activity": "Déjeuner avec les ingénieurs de maintenance mécanique."
            },
            {
                "time": "14:00",
                "activity": "Réunion de cadrage du grand arrêt technique annuel prévu pour l'inspection de la turbine à vapeur."
            },
            {
                "time": "16:00",
                "activity": "Audit sécurité sur site avec l'animateur HSE : contrôle des permis de feu et des consignations électriques."
            },
            {
                "time": "18:00",
                "activity": "Validation des bilans de tonnes incinérées et des mégawattheures livrés au réseau de chauffage urbain."
            }
        ],
        "daily": {
            "morning": "Analyse des paramètres de combustion et de puissance électrique produite, visite de sécurité de l'usine et coordination d'équipes.",
            "afternoon": "Supervision de la maintenance préventive, contrôle des rejets environnementaux et relations avec les autorités administratives.",
            "challenges": "Maximiser la production d'énergie propre à partir des ordures tout en maintenant les émissions très en-deçà des seuils européens."
        },
        "quiz": [
            {
                "question": "En quoi les usines d'incinération modernes (UVE) sont-elles utiles pour la ville ?",
                "options": [
                    "Elles brûlent les ordures à l'air libre sans filtrer les fumées",
                    "Elles récupèrent la chaleur de combustion pour chauffer des milliers de logements et produire de l'électricité",
                    "Elles ne servent qu'à stocker de l'eau",
                    "Elles fabriquent des emballages neufs en carton"
                ],
                "answer": 1,
                "explanation": "Les UVE récupèrent l'énergie thermique des déchets ménagers résiduels pour alimenter les réseaux de chaleur urbains et le réseau électrique."
            },
            {
                "question": "Quel statut réglementaire français régit les usines de traitement des déchets en raison de leurs enjeux environnementaux ?",
                "options": [
                    "Le statut ICPE (Installation Classée pour la Protection de l'Environnement)",
                    "Le statut d'auberge de jeunesse",
                    "Le statut de zone franche agricole",
                    "Le statut de monument historique uniquement"
                ],
                "answer": 0,
                "explanation": "Les usines de traitement sont des ICPE soumises à autorisation préfectorale stricte et à des contrôles réguliers de l'État."
            }
        ],
        "saviezVous": {
            "fait": "À Paris, l'énergie issue de l'incinération des déchets ménagers fournit près de la moitié du chauffage de tous les hôpitaux de la capitale et du musée du Louvre !",
            "chiffre": "Le traitement des fumées dans une unité moderne représente souvent plus de la moitié de l'investissement total de construction de l'usine."
        },
        "sources": [
            {
                "name": "Onisep - Les métiers et l'emploi dans l'environnement et le développement durable",
                "url": "https://www.onisep.fr/metier/decouvrir-le-monde-professionnel/environnement-developpement-durable/les-metiers-et-l-emploi-dans-l-environnement-et-le-developpement-durable",
                "date": "04/11/2025",
                "type": "Source officielle française"
            }
        ],
        "shortDescription": "Pilote d'usines industrielles complexes, le responsable d'unité de traitement transforme les déchets non recyclables en électricité, en chauffage urbain ou en biogaz grâce à des procédés thermiques ou biologiques de pointe, tout en garantissant des rejets atmosphériques scrupuleusement dépollués.",
        "longDescription": "Pilote d'usines industrielles complexes, le responsable d'unité de traitement transforme les déchets non recyclables en électricité, en chauffage urbain ou en biogaz grâce à des procédés thermiques ou biologiques de pointe, tout en garantissant des rejets atmosphériques scrupuleusement dépollués. Superviser le fonctionnement continu (24h/24, 7j/7) des fours d'incinération, turbines à vapeur ou digesteurs de méthanisation. Garantir le respect absolu des normes environnementales de rejets dans l'air (dioxines, métaux lourds, poussières) et dans l'eau. Optimiser la production et la vente d'énergie récupérée (vapeur injectée dans le réseau de chaleur urbain, mégawatts électriques vendus au réseau). Manager les équipes de quart (conducteurs de ligne, mécaniciens, électriciens) et piloter les arrêts techniques annuels de maintenance.",
        "description": "Pilote d'usines industrielles complexes, le responsable d'unité de traitement transforme les déchets non recyclables en électricité, en chauffage urbain ou en biogaz grâce à des procédés thermiques ou biologiques de pointe, tout en garantissant des rejets atmosphériques scrupuleusement dépollués. Superviser le fonctionnement continu (24h/24, 7j/7) des fours d'incinération, turbines à vapeur ou digesteurs de méthanisation. Garantir le respect absolu des normes environnementales de rejets dans l'air (dioxines, métaux lourds, poussières) et dans l'eau. Optimiser la production et la vente d'énergie récupérée (vapeur injectée dans le réseau de chaleur urbain, mégawatts électriques vendus au réseau). Manager les équipes de quart (conducteurs de ligne, mécaniciens, électriciens) et piloter les arrêts techniques annuels de maintenance.",
        "studyLevel": "Bac +5 (Diplôme d'ingénieur en procédés / thermique / environnement ou Master Sciences industrielles)",
        "hard": [
            "Génie des procédés thermiques, thermodynamique et combustion industrielle",
            "Chimie du traitement des fumées et épuration des gaz acides",
            "Réglementation sévère des Installations Classées pour la Protection de l'Environnement (ICPE)",
            "Gestion budgétaire industrielle, maintenance d'usines lourdes et management de la sécurité"
        ],
        "soft": [
            "Autorité naturelle et leadership pour diriger des équipes industrielles postées",
            "Rigueur absolue face aux risques d'explosion, d'incendie et de pollution atmosphérique",
            "Aisance relationnelle pour dialoguer avec les inspecteurs de la DREAL et les associations citoyennes",
            "Capacité d'analyse stratégique et de prise de décision rapide en situation de crise"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "activity": "Point d'exploitation matinal avec les chefs de quart : analyse de la combustion nocturne et de la production électrique."
            },
            {
                "time": "09:30",
                "activity": "Inspection visuelle de la fosse de déchargement des déchets et contrôle du fonctionnement du grappin automatisé."
            },
            {
                "time": "11:00",
                "activity": "Vérification des registres de rejets gazeux et étalonnage des analyseurs de dioxyde de soufre et d'oxydes d'azote."
            },
            {
                "time": "12:30",
                "activity": "Déjeuner avec les ingénieurs de maintenance mécanique."
            },
            {
                "time": "14:00",
                "activity": "Réunion de cadrage du grand arrêt technique annuel prévu pour l'inspection de la turbine à vapeur."
            },
            {
                "time": "16:00",
                "activity": "Audit sécurité sur site avec l'animateur HSE : contrôle des permis de feu et des consignations électriques."
            },
            {
                "time": "18:00",
                "activity": "Validation des bilans de tonnes incinérées et des mégawattheures livrés au réseau de chauffage urbain."
            }
        ]
    },
    {
        "id": "responsable-recyclerie",
        "slug": "responsable-recyclerie",
        "title": "Responsable de Recyclerie / Ressourcerie",
        "aliases": [
            "Directeur de ressourcerie",
            "Coordinateur de tiers-lieu circulaire",
            "Responsable d'atelier réemploi",
            "Directeur de recyclerie associative",
            "Responsable valoriste du réemploi"
        ],
        "icon": "🔄",
        "image": "https://images.unsplash.com/photo-1528323273322-d81458248d40?w=800&auto=format&fit=crop&q=80",
        "familyId": "environnement-developpement-durable",
        "familyName": "Environnement, Écologie & Développement durable",
        "connectedFamilies": [
            "environnement-developpement-durable",
            "droit-management",
            "artisanat-metiers-art"
        ],
        "domain": "Déchets, Tri & Recyclage",
        "domainId": "dechets-tri-recyclage",
        "subdomain": "Réemploi, Économie circulaire & Recycleries",
        "sectors": [
            "Réseau national des ressourceries et recycleries (Économie Sociale et Solidaire - ESS)",
            "Structures d'insertion par l'activité économique (SIAE)",
            "Collectivités territoriales développant des pôles d'économie circulaire",
            "Entreprises pionnières du réemploi solidaire et de la seconde main"
        ],
        "onisepUrl": "https://www.onisep.fr/metier/decouvrir-le-monde-professionnel/environnement-developpement-durable/les-metiers-et-l-emploi-dans-l-environnement-et-le-developpement-durable",
        "onisepSource": true,
        "isEmerging": true,
        "level": "Bac +2 à Bac +5 (Management ESS / Développement local / Gestion de projet durable)",
        "salary": "🇫🇷 France : 2 000 € à 2 600 € brut/mois débutant (~26 000 à 34 000 € brut/an), jusqu'à 3 600 € brut/mois pour une grande structure multi-sites (Source : Onisep / Réseau des Ressourceries) • 🇸🇳 Sénégal : 250 000 à 600 000 FCFA net/mois (Entreprises sociales, tiers-lieux d'économie circulaire et ateliers de transformation locale)",
        "salaryDetails": {
            "france": {
                "starter": "2 100 € brut/mois",
                "experienced": "2 700 € brut/mois",
                "senior": "3 600 € brut/mois",
                "source": "Onisep / Convention collective de l'Animation et de l'ESS"
            },
            "senegal": {
                "starter": "250 000 FCFA net/mois",
                "experienced": "400 000 FCFA net/mois",
                "senior": "600 000 FCFA net/mois",
                "source": "Économie Sociale et Solidaire / Incubateurs Circulaires Sénégal"
            }
        },
        "targetAudience": "Objets usagés réutilisables (mobilier, électroménager, textiles, vélos, vaisselle), usagers donateurs, acheteurs solidaires et salariés en insertion",
        "workEnvironment": "Atelier de réparation/upcycling, magasin solidaire de vente au public, quai d'apport volontaire et bureau de gestion de projet",
        "summary": "Pionnier du réemploi et de la consommation sobre, le responsable de recyclerie gère un lieu vivant où les objets destinés à la poubelle sont collectés, nettoyés, réparés ou relookés par des équipes souvent en insertion, avant d'être revendus à prix modiques pour prolonger leur durée de vie.",
        "missions": [
            "Organiser les 4 fonctions fondamentales de la ressourcerie : collecte, valorisation/réparation, vente solidaire et sensibilisation.",
            "Manager les équipes salariées, bénévoles et personnes en parcours d'insertion socioprofessionnelle.",
            "Gérer l'équilibre économique de la structure (ventes en boutique, subventions publiques, prestations aux collectivités).",
            "Nouer des partenariats avec les déchèteries publiques pour détourner les objets réemployables des bennes d'enfouissement."
        ],
        "activities": [
            "Accueil des donateurs au quai d'apport et pesée méthodique des gisements d'objets récupérés.",
            "Coordination des ateliers de réparation (menuiserie, petit électroménager, vélos, customisation textile).",
            "Agencement commercial de la boutique solidaire et fixation de prix justes et accessibles à tous.",
            "Animation d'ateliers de sensibilisation au réemploi (Repair Café) à destination des habitants du quartier."
        ],
        "specialties": [
            "Direction de ressourcerie généraliste",
            "Recyclerie spécialisée (matériaux de construction du BTP, textile, vélos)",
            "Insertion socioprofessionnelle et encadrement technique",
            "Animation de tiers-lieux d'économie circulaire et Repair Cafés"
        ],
        "skills": {
            "hard": [
                "Gestion d'entreprise de l'Économie Sociale et Solidaire (ESS) et comptabilité associative",
                "Réglementation du réemploi, sécurité des appareils électriques d'occasion et traçabilité",
                "Techniques de base de remise en état d'objets (bricolage, électroménager, menuiserie)",
                "Montage de dossiers de subventions européennes, régionales et d'éco-organismes"
            ],
            "soft": [
                "Forte fibre sociale, écoute et bienveillance envers les publics en insertion",
                "Polyvalence opérationnelle et capacité à passer de la gestion budgétaire à l'atelier",
                "Créativité et dynamisme pour valoriser les objets et réinventer les usages",
                "Aisance dans la négociation avec les élus, entreprises mécènes et partenaires"
            ],
            "technical": [
                "Gestion d'entreprise de l'Économie Sociale et Solidaire (ESS) et comptabilité associative",
                "Réglementation du réemploi, sécurité des appareils électriques d'occasion et traçabilité",
                "Techniques de base de remise en état d'objets (bricolage, électroménager, menuiserie)",
                "Montage de dossiers de subventions européennes, régionales et d'éco-organismes"
            ],
            "human": [
                "Forte fibre sociale, écoute et bienveillance envers les publics en insertion",
                "Polyvalence opérationnelle et capacité à passer de la gestion budgétaire à l'atelier",
                "Créativité et dynamisme pour valoriser les objets et réinventer les usages",
                "Aisance dans la négociation avec les élus, entreprises mécènes et partenaires"
            ]
        },
        "qualities": [
            "Polyvalence managériale",
            "Sensibilité humaine et sociale",
            "Esprit d'entreprise solidaire",
            "Sens de la créativité et du réemploi",
            "Aptitude à fédérer une communauté"
        ],
        "studies": [
            "🇫🇷 France : Bac +2 à Bac +5. BTS Gestion de la PME, Licence Pro Métiers de l'économie sociale et solidaire, Master Management de l'ESS, Master Développement durable ou Titre professionnel d'Entrepreneur de l'économie circulaire.",
            "🇸🇳 Sénégal : Bac +3 à Bac +5. Licence / Master en Entrepreneuriat social, Gestion de projets de développement local, Économie circulaire (BEM Dakar, ISM, universités)."
        ],
        "evolution": [
            "Directeur d'un réseau territorial de ressourceries",
            "Chargé de mission Économie Circulaire en collectivité territoriale",
            "Consultant en stratégie zéro déchet et réemploi",
            "Responsable des partenariats réemploi au sein d'un grand éco-organisme",
            "Créateur d'une entreprise innovante de surcyclage (upcycling)"
        ],
        "dailySchedule": [
            {
                "time": "08:30",
                "activity": "Accueil de l'équipe au dépôt : point café matinal avec les salariés en contrat d'insertion."
            },
            {
                "time": "09:00",
                "activity": "Contrôle des tonnages collectés la veille lors du passage de la camionnette en déchèterie partenaire."
            },
            {
                "time": "10:30",
                "activity": "Tournée des ateliers : validation de la remise en état d'un lot de fauteuils vintage et tests électriques d'aspirateurs."
            },
            {
                "time": "12:30",
                "activity": "Déjeuner partagé avec l'équipe et les bénévoles de l'association."
            },
            {
                "time": "14:00",
                "activity": "Ouverture de la boutique solidaire au public et supervision de l'encaissement et du réassort des rayons."
            },
            {
                "time": "16:00",
                "activity": "Rendez-vous avec le directeur environnement de la métropole pour renouveler la convention d'occupation du local."
            },
            {
                "time": "18:30",
                "activity": "Clôture de la caisse, bilan des ventes de la journée et préparation de l'atelier Repair Café du samedi."
            }
        ],
        "daily": {
            "morning": "Réception des dons d'objets, pesée des gisements détournés de l'enfouissement, encadrement des ateliers de réparation.",
            "afternoon": "Supervision de la boutique solidaire, gestion financière, relations institutionnelles avec les partenaires et ateliers citoyens.",
            "challenges": "Trouver le juste équilibre entre viabilité économique de la boutique et finalité d'insertion sociale et d'écologie solidaire."
        },
        "quiz": [
            {
                "question": "Quelles sont les 4 fonctions indissociables d'une ressourcerie agréée ?",
                "options": [
                    "Collecter, valoriser/réparer, revendre à prix solidaire et sensibiliser le public",
                    "Brûler, enfouir, exporter et facturer",
                    "Acheter du neuf, déballer, emballer et jeter",
                    "Démolir, broyer, couler du béton et louer"
                ],
                "answer": 0,
                "explanation": "La charte des ressourceries repose sur 4 piliers : collecte, valorisation, redistribution solidaire et sensibilisation citoyenne."
            },
            {
                "question": "Quel est le bénéfice environnemental immédiat de l'achat d'un objet en recyclerie ?",
                "options": [
                    "Il évite l'extraction de matières premières vierges et prolonge la vie d'un objet qui aurait fini en décharge",
                    "Il permet de consommer plus de carburant",
                    "Il oblige à fabriquer du plastique",
                    "Aucun bénéfice mesurable"
                ],
                "answer": 0,
                "explanation": "Chaque objet réemployé évite la production d'un objet neuf équivalent et l'émission de CO2 associée."
            }
        ],
        "saviezVous": {
            "fait": "En France, les ressourceries et recycleries détournent chaque année plus de 250 000 tonnes d'objets de la poubelle pour leur offrir une seconde vie !",
            "chiffre": "Le secteur du réemploi et des recycleries génère en moyenne 5 à 10 fois plus d'emplois locaux non délocalisables que l'incinération ou l'enfouissement."
        },
        "sources": [
            {
                "name": "Onisep - Les métiers et l'emploi dans l'environnement et le développement durable",
                "url": "https://www.onisep.fr/metier/decouvrir-le-monde-professionnel/environnement-developpement-durable/les-metiers-et-l-emploi-dans-l-environnement-et-le-developpement-durable",
                "date": "04/11/2025",
                "type": "Source officielle française"
            }
        ],
        "shortDescription": "Pionnier du réemploi et de la consommation sobre, le responsable de recyclerie gère un lieu vivant où les objets destinés à la poubelle sont collectés, nettoyés, réparés ou relookés par des équipes souvent en insertion, avant d'être revendus à prix modiques pour prolonger leur durée de vie.",
        "longDescription": "Pionnier du réemploi et de la consommation sobre, le responsable de recyclerie gère un lieu vivant où les objets destinés à la poubelle sont collectés, nettoyés, réparés ou relookés par des équipes souvent en insertion, avant d'être revendus à prix modiques pour prolonger leur durée de vie. Organiser les 4 fonctions fondamentales de la ressourcerie : collecte, valorisation/réparation, vente solidaire et sensibilisation. Manager les équipes salariées, bénévoles et personnes en parcours d'insertion socioprofessionnelle. Gérer l'équilibre économique de la structure (ventes en boutique, subventions publiques, prestations aux collectivités). Nouer des partenariats avec les déchèteries publiques pour détourner les objets réemployables des bennes d'enfouissement.",
        "description": "Pionnier du réemploi et de la consommation sobre, le responsable de recyclerie gère un lieu vivant où les objets destinés à la poubelle sont collectés, nettoyés, réparés ou relookés par des équipes souvent en insertion, avant d'être revendus à prix modiques pour prolonger leur durée de vie. Organiser les 4 fonctions fondamentales de la ressourcerie : collecte, valorisation/réparation, vente solidaire et sensibilisation. Manager les équipes salariées, bénévoles et personnes en parcours d'insertion socioprofessionnelle. Gérer l'équilibre économique de la structure (ventes en boutique, subventions publiques, prestations aux collectivités). Nouer des partenariats avec les déchèteries publiques pour détourner les objets réemployables des bennes d'enfouissement.",
        "studyLevel": "Bac +2 à Bac +5 (Management ESS / Développement local / Gestion de projet durable)",
        "hard": [
            "Gestion d'entreprise de l'Économie Sociale et Solidaire (ESS) et comptabilité associative",
            "Réglementation du réemploi, sécurité des appareils électriques d'occasion et traçabilité",
            "Techniques de base de remise en état d'objets (bricolage, électroménager, menuiserie)",
            "Montage de dossiers de subventions européennes, régionales et d'éco-organismes"
        ],
        "soft": [
            "Forte fibre sociale, écoute et bienveillance envers les publics en insertion",
            "Polyvalence opérationnelle et capacité à passer de la gestion budgétaire à l'atelier",
            "Créativité et dynamisme pour valoriser les objets et réinventer les usages",
            "Aisance dans la négociation avec les élus, entreprises mécènes et partenaires"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Accueil de l'équipe au dépôt : point café matinal avec les salariés en contrat d'insertion."
            },
            {
                "time": "09:00",
                "activity": "Contrôle des tonnages collectés la veille lors du passage de la camionnette en déchèterie partenaire."
            },
            {
                "time": "10:30",
                "activity": "Tournée des ateliers : validation de la remise en état d'un lot de fauteuils vintage et tests électriques d'aspirateurs."
            },
            {
                "time": "12:30",
                "activity": "Déjeuner partagé avec l'équipe et les bénévoles de l'association."
            },
            {
                "time": "14:00",
                "activity": "Ouverture de la boutique solidaire au public et supervision de l'encaissement et du réassort des rayons."
            },
            {
                "time": "16:00",
                "activity": "Rendez-vous avec le directeur environnement de la métropole pour renouveler la convention d'occupation du local."
            },
            {
                "time": "18:30",
                "activity": "Clôture de la caisse, bilan des ventes de la journée et préparation de l'atelier Repair Café du samedi."
            }
        ]
    },
    {
        "id": "conseiller-gestion-dechets",
        "slug": "conseiller-gestion-dechets",
        "title": "Conseiller / Conseillère en Gestion des Déchets",
        "aliases": [
            "Consultant déchets",
            "Auditeur réduction des déchets",
            "Chargé de mission zéro déchet",
            "Conseiller prévention déchets",
            "Consultant économie circulaire et matières",
            "Expert en tri et valorisation industrielle"
        ],
        "icon": "📋",
        "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
        "familyId": "environnement-developpement-durable",
        "familyName": "Environnement, Écologie & Développement durable",
        "connectedFamilies": [
            "environnement-developpement-durable",
            "droit-management"
        ],
        "domain": "Déchets, Tri & Recyclage",
        "domainId": "dechets-tri-recyclage",
        "subdomain": "Prévention & Réduction des déchets",
        "sectors": [
            "Cabinets d'audit et de conseil en stratégie environnementale",
            "Chambres de Commerce et d'Industrie (CCI) et Chambres de Métiers (CMA)",
            "Grandes entreprises industrielles, agroalimentaires et plateformes logistiques",
            "Établissements de santé (hôpitaux et gestion des déchets de soins DASRI)"
        ],
        "onisepUrl": "https://www.onisep.fr/metier/decouvrir-le-monde-professionnel/environnement-developpement-durable/les-metiers-et-l-emploi-dans-l-environnement-et-le-developpement-durable",
        "onisepSource": true,
        "isEmerging": false,
        "level": "Bac +3 à Bac +5 (Licence Pro Gestion des déchets / Master Management de l'Environnement)",
        "salary": "🇫🇷 France : 2 200 € à 2 900 € brut/mois débutant (~30 000 à 38 000 € brut/an), 3 600 € à 4 800 € brut/mois pour un consultant confirmé en cabinet (Source : Onisep / APEC) • 🇸🇳 Sénégal : 350 000 à 800 000 FCFA net/mois (Bureaux d'études, industries minières et agroalimentaires, appui aux PME)",
        "salaryDetails": {
            "france": {
                "starter": "2 350 € brut/mois",
                "experienced": "3 500 € brut/mois",
                "senior": "4 800 € brut/mois",
                "source": "Onisep / APEC Métiers du Conseil et de l'Environnement"
            },
            "senegal": {
                "starter": "350 000 FCFA net/mois",
                "experienced": "550 000 FCFA net/mois",
                "senior": "800 000 FCFA net/mois",
                "source": "Bureaux d'études en Éco-conseil / Secteur Privé Sénégal"
            }
        },
        "targetAudience": "Entreprises de tous secteurs, chantiers du BTP, hôpitaux, restaurants d'entreprise et plateformes logistiques",
        "workEnvironment": "Bureaux de conseil (analyse de données et rédaction d'audits) et déplacements sur sites industriels et entrepôts",
        "summary": "Expert en sobriété matérielle, le conseiller en gestion des déchets audite les entreprises pour identifier leurs gaspillages, cartographier leurs flux de matières, concevoir des plans de réduction à la source et mettre en place des filières de valorisation rentables et conformes à la loi.",
        "missions": [
            "Réaliser des audits complets des flux de déchets générés par une entreprise ou une collectivité.",
            "Identifier les gisements d'économies financières grâce à la réduction des emballages et au réemploi de palettes et chutes de production.",
            "Veiller à la conformité réglementaire stricte (tri 7 flux, bordereaux de suivi des déchets dangereux Trackdéchets).",
            "Négocier et optimiser les contrats avec les prestataires de collecte, de rachat de matières et de traitement."
        ],
        "activities": [
            "Visite des chaînes de fabrication pour peser et caractériser les rebus et chutes de production.",
            "Calcul de la taxe générale sur les activités polluantes (TGAP) et des gains financiers potentiels du recyclage.",
            "Formation des chefs d'atelier et des salariés aux nouveaux protocoles de tri sélectif interne.",
            "Mise en place de filières de valorisation en boucle fermée (symbiose industrielle entre entreprises voisines)."
        ],
        "specialties": [
            "Gestion des déchets de chantiers du BTP (Diagnostic PEMD)",
            "Déchets industriels dangereux (DID) et traçabilité chimique",
            "Économie circulaire et réincorporation de matières recyclées",
            "Lutte contre le gaspillage alimentaire en restauration collective"
        ],
        "skills": {
            "hard": [
                "Méthodes d'audit et de caractérisation des déchets (norme MODECOM)",
                "Réglementation française et européenne des déchets (Loi AGEC, responsabilité élargie des producteurs)",
                "Outils numériques de traçabilité des déchets (Trackdéchets, registres dématérialisés)",
                "Calcul de rentabilité technico-économique des filières de valorisation matière"
            ],
            "soft": [
                "Capacité de persuasion et sens de la pédagogie auprès des dirigeants d'entreprises",
                "Rigueur d'analyse méthodologique et esprit de synthèse chiffré",
                "Sens de l'innovation pour trouver des débouchés créatifs aux matières délaissées",
                "Aisance dans l'animation de sessions de formation des salariés d'usine"
            ],
            "technical": [
                "Méthodes d'audit et de caractérisation des déchets (norme MODECOM)",
                "Réglementation française et européenne des déchets (Loi AGEC, responsabilité élargie des producteurs)",
                "Outils numériques de traçabilité des déchets (Trackdéchets, registres dématérialisés)",
                "Calcul de rentabilité technico-économique des filières de valorisation matière"
            ],
            "human": [
                "Capacité de persuasion et sens de la pédagogie auprès des dirigeants d'entreprises",
                "Rigueur d'analyse méthodologique et esprit de synthèse chiffré",
                "Sens de l'innovation pour trouver des débouchés créatifs aux matières délaissées",
                "Aisance dans l'animation de sessions de formation des salariés d'usine"
            ]
        },
        "qualities": [
            "Esprit d'analyse et de diagnostic",
            "Aptitude à convaincre",
            "Pragmatisme économique",
            "Rigueur réglementaire",
            "Créativité dans l'écologie industrielle"
        ],
        "studies": [
            "🇫🇷 France : Bac +3 à Bac +5. BUT Hygiène, Sécurité, Environnement (HSE), Licence Pro Métiers de la gestion des déchets, Master Management environnemental et développement durable, ou Diplôme d'ingénieur en écologie industrielle.",
            "🇸🇳 Sénégal : Bac +3 à Bac +5. Licence / Master en Sciences de l'Environnement, Gestion des déchets et hygiène publique (Institut des Sciences de l'Environnement - ISE UCAD, ESP Dakar)."
        ],
        "evolution": [
            "Directeur de département Environnement & Déchets en cabinet de conseil",
            "Responsable RSE et Économie Circulaire au sein d'un grand groupe industriel",
            "Expert auprès d'organismes de normalisation et d'agences d'État (ADEME)",
            "Chef d'entreprise de courtage et négoce en matières premières secondaires",
            "Auditeur international pour des programmes de décarbonation industrielle"
        ],
        "dailySchedule": [
            {
                "time": "08:45",
                "activity": "Arrivée sur le site d'une usine agroalimentaire cliente pour lancer un diagnostic de réduction des emballages."
            },
            {
                "time": "09:30",
                "activity": "Visite des lignes de conditionnement et pesée des chutes de cartons et films plastiques étirables."
            },
            {
                "time": "11:30",
                "activity": "Entretien avec le responsable des achats pour étudier le passage à des cagettes lavables réutilisables."
            },
            {
                "time": "13:00",
                "activity": "Déjeuner de travail avec le directeur de l'usine."
            },
            {
                "time": "14:30",
                "activity": "Vérification des bordereaux Trackdéchets pour les huiles usagées et solvants de nettoyage."
            },
            {
                "time": "16:00",
                "activity": "Calcul du retour sur investissement de l'acquisition d'un compacteur à carton pour réduire le nombre d'enlèvements."
            },
            {
                "time": "17:30",
                "activity": "Restitution intermédiaire des pistes d'économies devant le comité de direction de l'usine."
            }
        ],
        "daily": {
            "morning": "Audit sur site industriel, observation des postes de travail, caractérisation des chutes de matière et contrôle réglementaire.",
            "afternoon": "Modélisation chiffrée des gains financiers du recyclage, rédaction des rapports d'audit et recommandations stratégiques.",
            "challenges": "Démontrer aux entreprises que la réduction des déchets génère des économies financières substantielles et immédiates."
        },
        "quiz": [
            {
                "question": "En France, quelle loi majeure a renforcé l'obligation pour les entreprises de trier leurs déchets et de lutter contre le gaspillage ?",
                "options": [
                    "La loi AGEC (Anti-Gaspillage pour une Économie Circulaire)",
                    "La loi sur le droit d'auteur",
                    "Le code de la route",
                    "Le traité de l'Atlantique Nord"
                ],
                "answer": 0,
                "explanation": "La loi AGEC adoptée en 2020 accélère la fin des emballages plastiques à usage unique et impose le tri 7 flux aux professionnels."
            },
            {
                "question": "Comment le conseiller en déchets aide-t-il concrètement une entreprise ?",
                "options": [
                    "En payant lui-même les factures",
                    "En auditant les flux de déchets pour réduire le gaspillage, sécuriser la conformité et diminuer la facture de traitement",
                    "En augmentant la production d'ordures",
                    "En installant des logiciels de jeux vidéo"
                ],
                "answer": 1,
                "explanation": "Le conseiller transforme la contrainte des déchets en opportunité d'économies et de transition écologique pérenne."
            }
        ],
        "saviezVous": {
            "fait": "Le meilleur déchet est celui que l'on ne produit pas : le conseiller en gestion des déchets applique en priorité le principe de prévention avant même le recyclage !",
            "chiffre": "Pour une entreprise tertiaire moyenne, la mise en place d'un tri efficace et d'une dématérialisation réduit le volume de déchets de plus de 40% en un an."
        },
        "sources": [
            {
                "name": "Onisep - Les métiers et l'emploi dans l'environnement et le développement durable",
                "url": "https://www.onisep.fr/metier/decouvrir-le-monde-professionnel/environnement-developpement-durable/les-metiers-et-l-emploi-dans-l-environnement-et-le-developpement-durable",
                "date": "04/11/2025",
                "type": "Source officielle française"
            }
        ],
        "shortDescription": "Expert en sobriété matérielle, le conseiller en gestion des déchets audite les entreprises pour identifier leurs gaspillages, cartographier leurs flux de matières, concevoir des plans de réduction à la source et mettre en place des filières de valorisation rentables et conformes à la loi.",
        "longDescription": "Expert en sobriété matérielle, le conseiller en gestion des déchets audite les entreprises pour identifier leurs gaspillages, cartographier leurs flux de matières, concevoir des plans de réduction à la source et mettre en place des filières de valorisation rentables et conformes à la loi. Réaliser des audits complets des flux de déchets générés par une entreprise ou une collectivité. Identifier les gisements d'économies financières grâce à la réduction des emballages et au réemploi de palettes et chutes de production. Veiller à la conformité réglementaire stricte (tri 7 flux, bordereaux de suivi des déchets dangereux Trackdéchets). Négocier et optimiser les contrats avec les prestataires de collecte, de rachat de matières et de traitement.",
        "description": "Expert en sobriété matérielle, le conseiller en gestion des déchets audite les entreprises pour identifier leurs gaspillages, cartographier leurs flux de matières, concevoir des plans de réduction à la source et mettre en place des filières de valorisation rentables et conformes à la loi. Réaliser des audits complets des flux de déchets générés par une entreprise ou une collectivité. Identifier les gisements d'économies financières grâce à la réduction des emballages et au réemploi de palettes et chutes de production. Veiller à la conformité réglementaire stricte (tri 7 flux, bordereaux de suivi des déchets dangereux Trackdéchets). Négocier et optimiser les contrats avec les prestataires de collecte, de rachat de matières et de traitement.",
        "studyLevel": "Bac +3 à Bac +5 (Licence Pro Gestion des déchets / Master Management de l'Environnement)",
        "hard": [
            "Méthodes d'audit et de caractérisation des déchets (norme MODECOM)",
            "Réglementation française et européenne des déchets (Loi AGEC, responsabilité élargie des producteurs)",
            "Outils numériques de traçabilité des déchets (Trackdéchets, registres dématérialisés)",
            "Calcul de rentabilité technico-économique des filières de valorisation matière"
        ],
        "soft": [
            "Capacité de persuasion et sens de la pédagogie auprès des dirigeants d'entreprises",
            "Rigueur d'analyse méthodologique et esprit de synthèse chiffré",
            "Sens de l'innovation pour trouver des débouchés créatifs aux matières délaissées",
            "Aisance dans l'animation de sessions de formation des salariés d'usine"
        ],
        "typicalDay": [
            {
                "time": "08:45",
                "activity": "Arrivée sur le site d'une usine agroalimentaire cliente pour lancer un diagnostic de réduction des emballages."
            },
            {
                "time": "09:30",
                "activity": "Visite des lignes de conditionnement et pesée des chutes de cartons et films plastiques étirables."
            },
            {
                "time": "11:30",
                "activity": "Entretien avec le responsable des achats pour étudier le passage à des cagettes lavables réutilisables."
            },
            {
                "time": "13:00",
                "activity": "Déjeuner de travail avec le directeur de l'usine."
            },
            {
                "time": "14:30",
                "activity": "Vérification des bordereaux Trackdéchets pour les huiles usagées et solvants de nettoyage."
            },
            {
                "time": "16:00",
                "activity": "Calcul du retour sur investissement de l'acquisition d'un compacteur à carton pour réduire le nombre d'enlèvements."
            },
            {
                "time": "17:30",
                "activity": "Restitution intermédiaire des pistes d'économies devant le comité de direction de l'usine."
            }
        ]
    },
    {
        "id": "biologiste-environnement",
        "slug": "biologiste-environnement",
        "title": "Biologiste en Environnement",
        "aliases": [
            "Écologue scientifique",
            "Chercheur en biologie environnementale",
            "Écotoxicologue",
            "Biologiste des populations et écosystèmes",
            "Spécialiste de la conservation de la biodiversité"
        ],
        "icon": "🔬",
        "image": "https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=800&auto=format&fit=crop&q=80",
        "familyId": "environnement-developpement-durable",
        "familyName": "Environnement, Écologie & Développement durable",
        "connectedFamilies": [
            "environnement-developpement-durable",
            "biologie-chimie"
        ],
        "domain": "Biodiversité & Écosystèmes",
        "domainId": "biodiversite-ecosystemes",
        "subdomain": "Écologie scientifique & Biocontrôle",
        "sectors": [
            "Instituts publics de recherche (CNRS, INRAE, IRD, Muséum National d'Histoire Naturelle)",
            "Agences d'État de protection de la nature (Office Français de la Biodiversité)",
            "Grands cabinets d'expertise écologique et d'études d'impact",
            "Conservatoires d'espaces naturels et parcs nationaux"
        ],
        "onisepUrl": "https://www.onisep.fr/ressources/univers-metier/metiers/biologiste-en-environnement",
        "onisepSource": true,
        "isEmerging": false,
        "level": "Bac +5 à Bac +8 (Master Biologie des populations / Diplôme d'ingénieur agronome / Doctorat)",
        "salary": "🇫🇷 France : 2 300 € à 3 000 € brut/mois débutant (~30 000 à 40 000 € brut/an), jusqu'à 4 800 € brut/mois pour un chercheur titulaire ou expert confirmé (Source : Onisep / Grilles Recherche Publique) • 🇸🇳 Sénégal : 400 000 à 1 100 000 FCFA net/mois (Institut Sénégalais de Recherches Agricoles - ISRA, universités UCAD/UASZ, parcs nationaux)",
        "salaryDetails": {
            "france": {
                "starter": "2 400 € brut/mois",
                "experienced": "3 400 € brut/mois",
                "senior": "4 800 € brut/mois",
                "source": "Onisep / Grilles CNRS / INRAE / Bureaux d'études écologiques"
            },
            "senegal": {
                "starter": "400 000 FCFA net/mois",
                "experienced": "650 000 FCFA net/mois",
                "senior": "1 100 000 FCFA net/mois",
                "source": "Grilles Enseignement Supérieur et Recherche / ISRA Sénégal"
            }
        },
        "targetAudience": "Écosystèmes vivants, dynamique des populations animales et végétales, relations trophiques et impacts des pollutions chimiques",
        "workEnvironment": "Terrain (missions d'observation et de capture scientifique en milieux naturels variés) et laboratoire de recherche (analyses génétiques, modèles informatiques)",
        "summary": "Scientifique au chevet du vivant, le biologiste en environnement étudie les interactions entre les organismes vivants et leur habitat naturel, analyse la réponse des écosystèmes aux pollutions et aux changements climatiques, et met au point des solutions de restauration biologique pour sauver les espèces menacées.",
        "missions": [
            "Conduire des recherches fondamentales et appliquées sur la dynamique de reproduction et de dispersion des espèces.",
            "Mesurer la toxicité des polluants chimiques (pesticides, métaux lourds, microplastiques) sur la faune et la flore (écotoxicologie).",
            "Élaborer des modèles prédictifs d'évolution de la biodiversité face au réchauffement climatique.",
            "Conseiller les décideurs publics et aménageurs sur les plans de sauvegarde d'espèces protégées et d'habitats prioritaires."
        ],
        "activities": [
            "Campagnes de terrain pour le baguage, le marquage ou le prélèvement d'échantillons biologiques (tissus, fèces, pollens).",
            "Analyses ADN environnemental (ADNe) en laboratoire pour détecter la présence discrète d'espèces rares.",
            "Traitement statistique des données écologiques sur logiciels spécialisés (R, biostatistiques).",
            "Rédaction d'articles scientifiques dans des revues internationales à comité de lecture."
        ],
        "specialties": [
            "Écotoxicologie et biomarqueurs de pollution",
            "Génétique de la conservation et ADN environnemental",
            "Écologie fonctionnelle et services écosystémiques",
            "Biologie de la restauration écologique des zones dégradées"
        ],
        "skills": {
            "hard": [
                "Biologie moléculaire, génétique des populations et écologie évolutive",
                "Méthodes d'échantillonnage écologique et analyse d'ADN environnemental (ADNe)",
                "Statistiques inférentielles et modélisation écologique sous R ou Python",
                "Réglementation internationale et nationale sur la protection des espèces menacées"
            ],
            "soft": [
                "Rigueur scientifique absolue et honnêteté intellectuelle",
                "Patience et persévérance lors des observations longues sur le terrain",
                "Excellente aisance rédactionnelle scientifique en français et en anglais",
                "Capacité à collaborer au sein d'équipes de recherche internationales"
            ],
            "technical": [
                "Biologie moléculaire, génétique des populations et écologie évolutive",
                "Méthodes d'échantillonnage écologique et analyse d'ADN environnemental (ADNe)",
                "Statistiques inférentielles et modélisation écologique sous R ou Python",
                "Réglementation internationale et nationale sur la protection des espèces menacées"
            ],
            "human": [
                "Rigueur scientifique absolue et honnêteté intellectuelle",
                "Patience et persévérance lors des observations longues sur le terrain",
                "Excellente aisance rédactionnelle scientifique en français et en anglais",
                "Capacité à collaborer au sein d'équipes de recherche internationales"
            ]
        },
        "qualities": [
            "Rigueur de la démarche scientifique",
            "Passion pour le vivant",
            "Patience d'observation",
            "Esprit critique",
            "Polyvalence terrain / labo"
        ],
        "studies": [
            "🇫🇷 France : Bac +5 à Bac +8. Master Biologie, Écologie et Évolution (BEE), Diplôme d'ingénieur agronome (AgroParisTech, Montpellier SupAgro, ENSAIA) complété le plus souvent par un Doctorat en sciences biologiques (Bac +8) pour les postes de chercheur.",
            "🇸🇳 Sénégal : Bac +5 à Bac +8. Master de recherche en Biologie Végétale / Animale, Doctorat en Sciences Biologiques (Faculté des Sciences et Techniques - UCAD Dakar, Université Gaston Berger de Saint-Louis)."
        ],
        "evolution": [
            "Directeur de laboratoire de recherche en écologie",
            "Conseiller scientifique auprès d'instances internationales (IPBES, UICN, ONU Environnement)",
            "Directeur de programme de conservation en grande ONG (WWF, LPO, Fondation pour la Nature)",
            "Professeur des Universités en biologie environnementale",
            "Directeur scientifique d'un conservatoire d'espaces naturels"
        ],
        "dailySchedule": [
            {
                "time": "08:30",
                "activity": "Départ pour le suivi de terrain : vérification des pièges photographiques et capture d'insectes bio-indicateurs en forêt."
            },
            {
                "time": "11:30",
                "activity": "Relevé des coordonnées GPS des micro-habitats et conditionnement des échantillons foliaires sous azote liquide."
            },
            {
                "time": "13:00",
                "activity": "Retour au laboratoire et déjeuner d'équipe avec les chercheurs doctorants."
            },
            {
                "time": "14:15",
                "activity": "Extraction d'ADN environnemental à partir de prélèvements d'eau pour vérifier la recolonisation d'un amphibien rare."
            },
            {
                "time": "16:00",
                "activity": "Analyse sous R des courbes de survie de la population étudiée face aux épisodes de canicule estivale."
            },
            {
                "time": "17:30",
                "activity": "Rédaction d'un paragraphe pour une publication scientifique internationale soumise à 'Ecology Letters'."
            }
        ],
        "daily": {
            "morning": "Campagnes d'échantillonnage en milieu naturel, mesures biométriques sur les espèces et relevés micro-climatiques.",
            "afternoon": "Analyses génétiques au laboratoire, traitement statistique des données et modélisation de la résilience des habitats.",
            "challenges": "Comprendre des mécanismes biologiques complexes influencés simultanément par le climat et les activités humaines."
        },
        "quiz": [
            {
                "question": "Qu'est-ce que l'ADN environnemental (ADNe) utilisé par les biologistes en environnement ?",
                "options": [
                    "Une méthode permettant d'identifier les espèces présentes dans un milieu simplement en filtrant l'eau ou la terre où elles ont laissé des traces cellulaires",
                    "Un produit chimique pour peindre les arbres",
                    "Une variété de blé génétiquement modifié",
                    "Un médicament contre le rhume"
                ],
                "answer": 0,
                "explanation": "L'ADNe permet de détecter des espèces rares ou furtives sans avoir besoin de les capturer ou de les voir."
            },
            {
                "question": "Quel niveau d'études est généralement requis pour diriger des programmes de recherche scientifique en biologie environnementale ?",
                "options": [
                    "Un Doctorat (Bac +8)",
                    "Un BEP en 2 ans",
                    "Le Brevet des collèges",
                    "Le permis bateau uniquement"
                ],
                "answer": 0,
                "explanation": "Les postes de chercheur titulaire au CNRS ou à l'INRAE exigent la soutenance d'une thèse de doctorat (Bac+8)."
            }
        ],
        "saviezVous": {
            "fait": "Les biologistes estiment que plus de 80% des espèces vivantes sur Terre (principalement des insectes, champignons et micro-organismes) restent encore à découvrir et à décrire scientifiquement !",
            "chiffre": "La France abrite une biodiversité exceptionnelle grâce à ses territoires d'outre-mer, qui concentrent à eux seuls plus de 80% de la biodiversité nationale."
        },
        "sources": [
            {
                "name": "Onisep - Fiche Métier Biologiste en environnement",
                "url": "https://www.onisep.fr/ressources/univers-metier/metiers/biologiste-en-environnement",
                "date": "04/11/2025",
                "type": "Source officielle française"
            }
        ],
        "shortDescription": "Scientifique au chevet du vivant, le biologiste en environnement étudie les interactions entre les organismes vivants et leur habitat naturel, analyse la réponse des écosystèmes aux pollutions et aux changements climatiques, et met au point des solutions de restauration biologique pour sauver les espèces menacées.",
        "longDescription": "Scientifique au chevet du vivant, le biologiste en environnement étudie les interactions entre les organismes vivants et leur habitat naturel, analyse la réponse des écosystèmes aux pollutions et aux changements climatiques, et met au point des solutions de restauration biologique pour sauver les espèces menacées. Conduire des recherches fondamentales et appliquées sur la dynamique de reproduction et de dispersion des espèces. Mesurer la toxicité des polluants chimiques (pesticides, métaux lourds, microplastiques) sur la faune et la flore (écotoxicologie). Élaborer des modèles prédictifs d'évolution de la biodiversité face au réchauffement climatique. Conseiller les décideurs publics et aménageurs sur les plans de sauvegarde d'espèces protégées et d'habitats prioritaires.",
        "description": "Scientifique au chevet du vivant, le biologiste en environnement étudie les interactions entre les organismes vivants et leur habitat naturel, analyse la réponse des écosystèmes aux pollutions et aux changements climatiques, et met au point des solutions de restauration biologique pour sauver les espèces menacées. Conduire des recherches fondamentales et appliquées sur la dynamique de reproduction et de dispersion des espèces. Mesurer la toxicité des polluants chimiques (pesticides, métaux lourds, microplastiques) sur la faune et la flore (écotoxicologie). Élaborer des modèles prédictifs d'évolution de la biodiversité face au réchauffement climatique. Conseiller les décideurs publics et aménageurs sur les plans de sauvegarde d'espèces protégées et d'habitats prioritaires.",
        "studyLevel": "Bac +5 à Bac +8 (Master Biologie des populations / Diplôme d'ingénieur agronome / Doctorat)",
        "hard": [
            "Biologie moléculaire, génétique des populations et écologie évolutive",
            "Méthodes d'échantillonnage écologique et analyse d'ADN environnemental (ADNe)",
            "Statistiques inférentielles et modélisation écologique sous R ou Python",
            "Réglementation internationale et nationale sur la protection des espèces menacées"
        ],
        "soft": [
            "Rigueur scientifique absolue et honnêteté intellectuelle",
            "Patience et persévérance lors des observations longues sur le terrain",
            "Excellente aisance rédactionnelle scientifique en français et en anglais",
            "Capacité à collaborer au sein d'équipes de recherche internationales"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Départ pour le suivi de terrain : vérification des pièges photographiques et capture d'insectes bio-indicateurs en forêt."
            },
            {
                "time": "11:30",
                "activity": "Relevé des coordonnées GPS des micro-habitats et conditionnement des échantillons foliaires sous azote liquide."
            },
            {
                "time": "13:00",
                "activity": "Retour au laboratoire et déjeuner d'équipe avec les chercheurs doctorants."
            },
            {
                "time": "14:15",
                "activity": "Extraction d'ADN environnemental à partir de prélèvements d'eau pour vérifier la recolonisation d'un amphibien rare."
            },
            {
                "time": "16:00",
                "activity": "Analyse sous R des courbes de survie de la population étudiée face aux épisodes de canicule estivale."
            },
            {
                "time": "17:30",
                "activity": "Rédaction d'un paragraphe pour une publication scientifique internationale soumise à 'Ecology Letters'."
            }
        ]
    },
    {
        "id": "charge-etudes-biodiversite",
        "slug": "charge-etudes-biodiversite",
        "title": "Chargé / Chargée d'Études en Biodiversité",
        "aliases": [
            "Chargé d'études naturalistes",
            "Écologue d'études",
            "Expert faune-flore",
            "Consultant biodiversité",
            "Chargé d'études environnement et milieux naturels",
            "Naturaliste expert"
        ],
        "icon": "🌿",
        "image": "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80",
        "familyId": "environnement-developpement-durable",
        "familyName": "Environnement, Écologie & Développement durable",
        "connectedFamilies": [
            "environnement-developpement-durable",
            "biologie-chimie",
            "sciences-terre-geosciences"
        ],
        "domain": "Biodiversité & Écosystèmes",
        "domainId": "biodiversite-ecosystemes",
        "subdomain": "Inventaires naturalistes (faune, flore, habitats)",
        "sectors": [
            "Bureaux d'études en ingénierie de l'environnement (Biotope, Ecosphere, Dervenn)",
            "Grands groupes d'infrastructures et d'énergie (SNCF, RTE, EDF, parcs éoliens)",
            "Directions Régionales de l'Environnement (DREAL) et Parcs Naturels Régionaux",
            "Associations de protection de la nature (LPO, Conservatoires Botaniques Nationaux)"
        ],
        "onisepUrl": "https://www.onisep.fr/ressources/univers-metier/metiers/charge-chargee-d-etudes-naturalistes",
        "onisepSource": true,
        "isEmerging": false,
        "level": "Bac +5 (Master Écologie / Gestion de la biodiversité / Diplôme d'ingénieur agronome)",
        "salary": "🇫🇷 France : 2 200 € à 2 800 € brut/mois débutant (~30 000 à 38 000 € brut/an), 3 400 € à 4 500 € brut/mois pour un chargé d'études confirmé (Source : Onisep / Convention SYNTEC) • 🇸🇳 Sénégal : 350 000 à 850 000 FCFA net/mois (Bureaux d'études d'impact environnemental, Direction des Parcs Nationaux, projets d'aménagements)",
        "salaryDetails": {
            "france": {
                "starter": "2 300 € brut/mois",
                "experienced": "3 300 € brut/mois",
                "senior": "4 500 € brut/mois",
                "source": "Onisep / Grilles SYNTEC Ingénierie & Conseil Écologique"
            },
            "senegal": {
                "starter": "350 000 FCFA net/mois",
                "experienced": "550 000 FCFA net/mois",
                "senior": "850 000 FCFA net/mois",
                "source": "Direction de l'Environnement et des Établissements Classés (DEEC) / Bureaux d'études"
            }
        },
        "targetAudience": "Projets d'aménagements (routes, lignes ferroviaires, centrales solaires, éoliennes, zones industrielles), trames vertes et espèces protégées",
        "workEnvironment": "Terrain intensif au rythme des saisons (inventaires à l'aube ou crépusculaires) et bureau d'études (cartographie SIG et rédaction d'études d'impact)",
        "summary": "Expert de terrain irremplaçable, le chargé d'études en biodiversité inventorie avec précision la faune (oiseaux, chauves-souris, batraciens, insectes) et la flore avant tout projet de construction, évalue les impacts du chantier et impose des mesures concrètes : Éviter, Réduire, Compenser (doctrine ERC).",
        "missions": [
            "Réaliser sur le terrain les inventaires 4 saisons de la faune, de la flore et des habitats naturels.",
            "Rédiger le volet 'Milieu naturel et biodiversité' des études d'impact environnemental réglementaires.",
            "Concevoir les mesures de la séquence 'Éviter - Réduire - Compenser' (ex : création de passages à faune, décalage des travaux hors nidification).",
            "Assurer le suivi écologique des chantiers et veiller au respect des arrêtés préfectoraux de dérogation 'espèces protégées'."
        ],
        "activities": [
            "Écoutes nocturnes de chauves-souris au détecteur d'ultrasons (chiroptérologie) sur le site d'un futur parc éolien.",
            "Relevés phytosociologiques de la flore et délimitation cartographique des zones humides sur QGIS.",
            "Points d'écoute ornithologiques au lever du soleil au printemps pour dénombrer les oiseaux nicheurs.",
            "Animation de réunions de concertation avec les porteurs de projet et les services instructeurs de l'État (DREAL)."
        ],
        "specialties": [
            "Chiroptérologie (étude des chauves-souris)",
            "Ornithologie (expertise des oiseaux nicheurs et migrateurs)",
            "Botanique et phytosociologie des zones humides",
            "Entomologie (insectes protégés : coléoptères, odonates, lépidoptères)"
        ],
        "skills": {
            "hard": [
                "Identification naturaliste pointue à vue, au chant ou aux ultrasons",
                "Réglementation de l'évaluation environnementale et code de l'environnement (procédure ERC)",
                "Cartographie sous Système d'Information Géographique (SIG - QGIS) appliquée aux habitats Corine Biotope/EUNIS",
                "Protocoles scientifiques standardisés d'inventaire (stéréo-écoutes, transects, quadrats)"
            ],
            "soft": [
                "Endurance et autonomie sur le terrain par toutes conditions météo",
                "Aisance rédactionnelle et rigueur méthodologique dans l'argumentation juridique",
                "Capacité de négociation avec les ingénieurs de travaux et maîtres d'ouvrage",
                "Objectivité et éthique naturaliste sans concession"
            ],
            "technical": [
                "Identification naturaliste pointue à vue, au chant ou aux ultrasons",
                "Réglementation de l'évaluation environnementale et code de l'environnement (procédure ERC)",
                "Cartographie sous Système d'Information Géographique (SIG - QGIS) appliquée aux habitats Corine Biotope/EUNIS",
                "Protocoles scientifiques standardisés d'inventaire (stéréo-écoutes, transects, quadrats)"
            ],
            "human": [
                "Endurance et autonomie sur le terrain par toutes conditions météo",
                "Aisance rédactionnelle et rigueur méthodologique dans l'argumentation juridique",
                "Capacité de négociation avec les ingénieurs de travaux et maîtres d'ouvrage",
                "Objectivité et éthique naturaliste sans concession"
            ]
        },
        "qualities": [
            "Excellente acuité visuelle et auditive",
            "Rigueur scientifique",
            "Passion naturaliste éprouvée",
            "Sens de la négociation",
            "Bonne condition physique"
        ],
        "studies": [
            "🇫🇷 France : Bac +5. Master en écologie, gestion de la biodiversité, ingénierie écologique (Universités Paris-Saclay, Montpellier, Rennes 1, Grenoble) ou Diplôme d'ingénieur agronome spécialisé en environnement.",
            "🇸🇳 Sénégal : Bac +5. Master en Écologie et Gestion des Écosystèmes (Institut des Sciences de l'Environnement - ISE UCAD, Université Assane Seck de Ziguinchor)."
        ],
        "evolution": [
            "Chef de projet écologie & aménagement",
            "Directeur d'agence d'études écologiques",
            "Directeur de la biodiversité au sein d'un grand groupe d'infrastructures",
            "Expert environnemental auprès des tribunaux administratifs",
            "Conservateur de réserve naturelle nationale"
        ],
        "dailySchedule": [
            {
                "time": "05:15",
                "activity": "Départ à l'aube pour la station d'inventaire ornithologique : écoute et identification des chants d'oiseaux nicheurs."
            },
            {
                "time": "08:30",
                "activity": "Relevé des espèces floristiques protégées sur la zone humide bordant le tracé du projet de déviation routière."
            },
            {
                "time": "11:30",
                "activity": "Relève des données ultrasonores des détecteurs passifs de chiroptères installés sur des mâts de mesure."
            },
            {
                "time": "13:00",
                "activity": "Déjeuner et retour au bureau d'études."
            },
            {
                "time": "14:30",
                "activity": "Analyse spectrale des enregistrements de chauves-souris sur logiciel Batsound pour distinguer la noctule commune de la pipistrelle."
            },
            {
                "time": "16:30",
                "activity": "Numérisation des polygones d'habitats d'intérêt communautaire sur le logiciel QGIS."
            },
            {
                "time": "18:00",
                "activity": "Rédaction des préconisations de calendrier de chantier pour éviter les perturbations pendant la saison de reproduction."
            }
        ],
        "daily": {
            "morning": "Prospection naturaliste de terrain dès l'aube, inventaires faune/flore et géolocalisation des espèces protégées.",
            "afternoon": "Traitement cartographique SIG, analyse des ultrasons de chauves-souris et rédaction d'études d'impact environnemental.",
            "challenges": "Concilier les impératifs calendaires des chantiers avec le respect scrupuleux des cycles biologiques naturels des espèces."
        },
        "quiz": [
            {
                "question": "Que signifie la règle 'ERC' appliquée obligatoirement par les chargés d'études en biodiversité ?",
                "options": [
                    "Éviter, Réduire, Compenser les atteintes à la biodiversité",
                    "Encaisser, Remplacer, Couper",
                    "Évacuer, Recycler, Construire",
                    "Électricité, Réseau, Chauffage"
                ],
                "answer": 0,
                "explanation": "La séquence ERC impose en priorité d'éviter les impacts négatifs, puis de les réduire, et en dernier recours d'apporter des compensations écologiques équivalentes."
            },
            {
                "question": "Quel outil informatique est indispensable au chargé d'études biodiversité pour cartographier les espèces ?",
                "options": [
                    "Un logiciel de Système d'Information Géographique (SIG comme QGIS)",
                    "Un logiciel de montage vidéo",
                    "Un tableur de comptabilité uniquement",
                    "Un jeu vidéo de simulation"
                ],
                "answer": 0,
                "explanation": "Le SIG permet de superposer avec exactitude les cartes du projet et les zones de présence des espèces végétales et animales protégées."
            }
        ],
        "saviezVous": {
            "fait": "Un chargé d'études ornithologue expérimenté peut identifier plus de 150 espèces d'oiseaux différentes uniquement grâce à leurs cris et chants, sans même les apercevoir !",
            "chiffre": "En France métropolitaine, près de 18% des espèces animales et végétales sont actuellement menacées de disparition selon la Liste rouge de l'UICN."
        },
        "sources": [
            {
                "name": "Onisep - Fiche Métier Chargé / Chargée d'études naturalistes",
                "url": "https://www.onisep.fr/ressources/univers-metier/metiers/charge-chargee-d-etudes-naturalistes",
                "date": "04/11/2025",
                "type": "Source officielle française"
            }
        ],
        "shortDescription": "Expert de terrain irremplaçable, le chargé d'études en biodiversité inventorie avec précision la faune (oiseaux, chauves-souris, batraciens, insectes) et la flore avant tout projet de construction, évalue les impacts du chantier et impose des mesures concrètes : Éviter, Réduire, Compenser (doctrine ERC).",
        "longDescription": "Expert de terrain irremplaçable, le chargé d'études en biodiversité inventorie avec précision la faune (oiseaux, chauves-souris, batraciens, insectes) et la flore avant tout projet de construction, évalue les impacts du chantier et impose des mesures concrètes : Éviter, Réduire, Compenser (doctrine ERC). Réaliser sur le terrain les inventaires 4 saisons de la faune, de la flore et des habitats naturels. Rédiger le volet 'Milieu naturel et biodiversité' des études d'impact environnemental réglementaires. Concevoir les mesures de la séquence 'Éviter - Réduire - Compenser' (ex : création de passages à faune, décalage des travaux hors nidification). Assurer le suivi écologique des chantiers et veiller au respect des arrêtés préfectoraux de dérogation 'espèces protégées'.",
        "description": "Expert de terrain irremplaçable, le chargé d'études en biodiversité inventorie avec précision la faune (oiseaux, chauves-souris, batraciens, insectes) et la flore avant tout projet de construction, évalue les impacts du chantier et impose des mesures concrètes : Éviter, Réduire, Compenser (doctrine ERC). Réaliser sur le terrain les inventaires 4 saisons de la faune, de la flore et des habitats naturels. Rédiger le volet 'Milieu naturel et biodiversité' des études d'impact environnemental réglementaires. Concevoir les mesures de la séquence 'Éviter - Réduire - Compenser' (ex : création de passages à faune, décalage des travaux hors nidification). Assurer le suivi écologique des chantiers et veiller au respect des arrêtés préfectoraux de dérogation 'espèces protégées'.",
        "studyLevel": "Bac +5 (Master Écologie / Gestion de la biodiversité / Diplôme d'ingénieur agronome)",
        "hard": [
            "Identification naturaliste pointue à vue, au chant ou aux ultrasons",
            "Réglementation de l'évaluation environnementale et code de l'environnement (procédure ERC)",
            "Cartographie sous Système d'Information Géographique (SIG - QGIS) appliquée aux habitats Corine Biotope/EUNIS",
            "Protocoles scientifiques standardisés d'inventaire (stéréo-écoutes, transects, quadrats)"
        ],
        "soft": [
            "Endurance et autonomie sur le terrain par toutes conditions météo",
            "Aisance rédactionnelle et rigueur méthodologique dans l'argumentation juridique",
            "Capacité de négociation avec les ingénieurs de travaux et maîtres d'ouvrage",
            "Objectivité et éthique naturaliste sans concession"
        ],
        "typicalDay": [
            {
                "time": "05:15",
                "activity": "Départ à l'aube pour la station d'inventaire ornithologique : écoute et identification des chants d'oiseaux nicheurs."
            },
            {
                "time": "08:30",
                "activity": "Relevé des espèces floristiques protégées sur la zone humide bordant le tracé du projet de déviation routière."
            },
            {
                "time": "11:30",
                "activity": "Relève des données ultrasonores des détecteurs passifs de chiroptères installés sur des mâts de mesure."
            },
            {
                "time": "13:00",
                "activity": "Déjeuner et retour au bureau d'études."
            },
            {
                "time": "14:30",
                "activity": "Analyse spectrale des enregistrements de chauves-souris sur logiciel Batsound pour distinguer la noctule commune de la pipistrelle."
            },
            {
                "time": "16:30",
                "activity": "Numérisation des polygones d'habitats d'intérêt communautaire sur le logiciel QGIS."
            },
            {
                "time": "18:00",
                "activity": "Rédaction des préconisations de calendrier de chantier pour éviter les perturbations pendant la saison de reproduction."
            }
        ]
    },
    {
        "id": "animateur-nature",
        "slug": "animateur-nature",
        "title": "Animateur / Animatrice Nature",
        "aliases": [
            "Éducateur à l'environnement",
            "Guide nature",
            "Animateur environnement et patrimoine",
            "Médiateur nature",
            "Guide naturaliste",
            "Éco-interprète"
        ],
        "icon": "🎒",
        "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&auto=format&fit=crop&q=80",
        "familyId": "environnement-developpement-durable",
        "familyName": "Environnement, Écologie & Développement durable",
        "connectedFamilies": [
            "environnement-developpement-durable",
            "education-formation",
            "sport-animation"
        ],
        "domain": "Forêt & Espaces naturels",
        "domainId": "foret-espaces-naturels",
        "subdomain": "Animation nature & Éducation à l'environnement",
        "sectors": [
            "Parcs Naturels Régionaux et Parcs Nationaux",
            "Associations d'éducation à l'environnement et de protection de la nature (CPIE, LPO)",
            "Centres de loisirs, classes vertes et fermes pédagogiques",
            "Collectivités territoriales et structures d'écotourisme"
        ],
        "onisepUrl": "https://www.onisep.fr/ressources/univers-metier/metiers/animateur-nature-animatrice-nature",
        "onisepSource": true,
        "isEmerging": false,
        "level": "Bac à Bac +2 (BTSA GPN / BPJEPS Éducation à l'Environnement vers un Développement Durable)",
        "salary": "🇫🇷 France : SMIC à 2 100 € brut/mois débutant (~21 500 à 26 000 € brut/an), jusqu'à 2 800 € brut/mois pour un coordinateur pédagogique confirmé (Source : Onisep / Convention collective de l'Animation) • 🇸🇳 Sénégal : 150 000 à 350 000 FCFA net/mois (Parcs nationaux, réserves communautaires, réceptifs écotouristiques)",
        "salaryDetails": {
            "france": {
                "starter": "1 820 € brut/mois",
                "experienced": "2 200 € brut/mois",
                "senior": "2 800 € brut/mois",
                "source": "Onisep / Convention collective nationale de l'animation (ÉCLAT)"
            },
            "senegal": {
                "starter": "150 000 FCFA net/mois",
                "experienced": "240 000 FCFA net/mois",
                "senior": "350 000 FCFA net/mois",
                "source": "Direction des Parcs Nationaux / Syndicat du Tourisme et de l'Hôtellerie Sénégal"
            }
        },
        "targetAudience": "Groupes scolaires, familles, touristes, randonneurs, centres de vacances et grand public",
        "workEnvironment": "Plein air (forêts, sentiers côtiers, marais, rivières, alpages) et ateliers pédagogiques (maisons de la nature, musées)",
        "summary": "Passeur d'émerveillement et de conscience citoyenne, l'animateur nature guide le public au cœur des forêts, des zones humides et des parcs protégés pour faire découvrir la beauté de la biodiversité, expliquer le rôle des écosystèmes et transmettre les comportements protecteurs de l'environnement.",
        "missions": [
            "Concevoir et animer des sorties immersives de découverte de la faune, de la flore et des paysages naturels.",
            "Développer des jeux de piste pédagogiques, ateliers de traces d'animaux et expériences sensorielles pour les enfants.",
            "Créer des sentiers d'interprétation balisés, des livrets pédagogiques et des panneaux de découverte en réserve naturelle.",
            "Sensibiliser le grand public aux gestes responsables : respect du silence, non-cueillette, prévention des incendies et gestion des déchets."
        ],
        "activities": [
            "Guidage d'une classe de collège en forêt sur les traces des mammifères sauvages et la reconnaissance des arbres.",
            "Animation d'un atelier 'petites bêtes de la mare' avec épuisettes et boîtes loupes.",
            "Organisation d'une sortie crépusculaire à l'écoute du brame du cerf ou des rapaces nocturnes.",
            "Entretien et renouvellement des malles pédagogiques et jumelles d'observation."
        ],
        "specialties": [
            "Animation en milieu forestier et dendrologie",
            "Éducation à l'environnement marin et zones humides",
            "Écotourisme et interprétation du patrimoine naturel montagnard",
            "Ateliers de sciences participatives pour le grand public"
        ],
        "skills": {
            "hard": [
                "Connaissances naturalistes généralistes de terrain (botanique, zoologie, géologie, écologie)",
                "Pédagogie active de projet et techniques d'animation de groupes tous âges",
                "Règles strictes de sécurité lors des sorties en milieu naturel et brevet de secourisme (PSC1)",
                "Conception d'outils didactiques et muséographie de découverte"
            ],
            "soft": [
                "Enthousiasme communicatif et passion sincère pour la nature",
                "Excellente aisance relationnelle, captation de l'attention et sens du récit (storytelling)",
                "Patience, bienveillance et écoute avec les enfants et publics scolaires",
                "Adaptabilité météo et inventivité face aux imprévus de la nature"
            ],
            "technical": [
                "Connaissances naturalistes généralistes de terrain (botanique, zoologie, géologie, écologie)",
                "Pédagogie active de projet et techniques d'animation de groupes tous âges",
                "Règles strictes de sécurité lors des sorties en milieu naturel et brevet de secourisme (PSC1)",
                "Conception d'outils didactiques et muséographie de découverte"
            ],
            "human": [
                "Enthousiasme communicatif et passion sincère pour la nature",
                "Excellente aisance relationnelle, captation de l'attention et sens du récit (storytelling)",
                "Patience, bienveillance et écoute avec les enfants et publics scolaires",
                "Adaptabilité météo et inventivité face aux imprévus de la nature"
            ]
        },
        "qualities": [
            "Enthousiasme et dynamisme",
            "Pédagogie bienveillante",
            "Curiosité naturaliste",
            "Sens de la sécurité",
            "Créativité dans les activités"
        ],
        "studies": [
            "🇫🇷 France : Bac à Bac +2. BTSA Gestion et protection de la nature (GPN - option animation nature), BPJEPS spécialité Éducation à l'Environnement vers un Développement Durable (EEDD), Licence Pro Médiation scientifique et environnement.",
            "🇸🇳 Sénégal : Bac à Bac +2. Formation de Guide écotouristique, Diplôme en animation communautaire et développement durable, stages au sein des réserves de biosphère."
        ],
        "evolution": [
            "Responsable du pôle éducation à l'environnement d'un Parc Naturel Régional",
            "Directeur d'une Maison de la Nature ou d'un CPIE",
            "Chargé de communication et d'écotourisme territorial",
            "Créateur d'une agence de randonnées nature et d'expéditions pédagogiques",
            "Formateur d'animateurs nature et d'enseignants"
        ],
        "dailySchedule": [
            {
                "time": "08:30",
                "activity": "Vérification de la météo, préparation des loupes, boîtes d'échantillonnage et trousse de secours."
            },
            {
                "time": "09:30",
                "activity": "Accueil d'une classe de CM1 au départ du sentier forestier, rappel chaleureux des consignes de sécurité et d'écoute."
            },
            {
                "time": "10:00",
                "activity": "Atelier sensoriel le long du sentier : observation des écorces à l'aveugle et recherche d'empreintes d'animaux."
            },
            {
                "time": "12:15",
                "activity": "Pique-nique zéro déchet partagé avec les élèves et les enseignants sous les chênes centenaires."
            },
            {
                "time": "13:30",
                "activity": "Pêche aux invertébrés dans la mare pédagogique et observation au microscope de terrain."
            },
            {
                "time": "15:30",
                "activity": "Bilan de la journée, remise du diplôme du 'Petit Gardien de la Forêt' et départ du car scolaire."
            },
            {
                "time": "16:30",
                "activity": "Nettoyage du matériel d'animation, rangement et préparation des fiches d'activités du lendemain."
            }
        ],
        "daily": {
            "morning": "Préparation du matériel pédagogique, accueil des groupes scolaires ou touristes et guidage sur sentier nature.",
            "afternoon": "Ateliers sensoriels et pratiques en forêt, échanges pédagogiques avec les enfants et conception de nouveaux ateliers.",
            "challenges": "Savoir captiver l'attention de jeunes urbains parfois peu habitués à marcher en pleine nature."
        },
        "quiz": [
            {
                "question": "Quel est le diplôme agricole phare de niveau Bac+2 pour devenir animateur nature en France ?",
                "options": [
                    "Le BTSA Gestion et Protection de la Nature (GPN)",
                    "Le CAP Boucherie",
                    "Le BTS Commerce de gros",
                    "Le baccalauréat littéraire seul"
                ],
                "answer": 0,
                "explanation": "Le BTSA GPN est la formation de référence qui allie solides connaissances scientifiques des espèces et techniques d'animation sur le terrain."
            },
            {
                "question": "Quelle démarche pédagogique l'animateur nature privilégie-t-il avec les enfants ?",
                "options": [
                    "Le cours magistral en salle fermée pendant 8 heures",
                    "La pédagogie active, sensorielle et ludique en immersion dans le milieu naturel",
                    "L'apprentissage par cœur de textes de lois",
                    "L'interdiction de toucher la terre ou les feuilles"
                ],
                "answer": 1,
                "explanation": "C'est en touchant, sentant, écoutant et observant directement la nature que les jeunes apprenants s'y attachent et la respectent."
            }
        ],
        "saviezVous": {
            "fait": "Les ateliers d'écoute nocturne en forêt permettent d'entendre la chouette hulotte jusqu'à plus de 2 kilomètres de distance par temps calme !",
            "chiffre": "Le réseau des Parcs Naturels Régionaux de France accueille chaque année plus de 800 000 élèves dans le cadre d'animations nature scolaires."
        },
        "sources": [
            {
                "name": "Onisep - Fiche Métier Animateur / Animatrice nature",
                "url": "https://www.onisep.fr/ressources/univers-metier/metiers/animateur-nature-animatrice-nature",
                "date": "04/11/2025",
                "type": "Source officielle française"
            }
        ],
        "shortDescription": "Passeur d'émerveillement et de conscience citoyenne, l'animateur nature guide le public au cœur des forêts, des zones humides et des parcs protégés pour faire découvrir la beauté de la biodiversité, expliquer le rôle des écosystèmes et transmettre les comportements protecteurs de l'environnement.",
        "longDescription": "Passeur d'émerveillement et de conscience citoyenne, l'animateur nature guide le public au cœur des forêts, des zones humides et des parcs protégés pour faire découvrir la beauté de la biodiversité, expliquer le rôle des écosystèmes et transmettre les comportements protecteurs de l'environnement. Concevoir et animer des sorties immersives de découverte de la faune, de la flore et des paysages naturels. Développer des jeux de piste pédagogiques, ateliers de traces d'animaux et expériences sensorielles pour les enfants. Créer des sentiers d'interprétation balisés, des livrets pédagogiques et des panneaux de découverte en réserve naturelle. Sensibiliser le grand public aux gestes responsables : respect du silence, non-cueillette, prévention des incendies et gestion des déchets.",
        "description": "Passeur d'émerveillement et de conscience citoyenne, l'animateur nature guide le public au cœur des forêts, des zones humides et des parcs protégés pour faire découvrir la beauté de la biodiversité, expliquer le rôle des écosystèmes et transmettre les comportements protecteurs de l'environnement. Concevoir et animer des sorties immersives de découverte de la faune, de la flore et des paysages naturels. Développer des jeux de piste pédagogiques, ateliers de traces d'animaux et expériences sensorielles pour les enfants. Créer des sentiers d'interprétation balisés, des livrets pédagogiques et des panneaux de découverte en réserve naturelle. Sensibiliser le grand public aux gestes responsables : respect du silence, non-cueillette, prévention des incendies et gestion des déchets.",
        "studyLevel": "Bac à Bac +2 (BTSA GPN / BPJEPS Éducation à l'Environnement vers un Développement Durable)",
        "hard": [
            "Connaissances naturalistes généralistes de terrain (botanique, zoologie, géologie, écologie)",
            "Pédagogie active de projet et techniques d'animation de groupes tous âges",
            "Règles strictes de sécurité lors des sorties en milieu naturel et brevet de secourisme (PSC1)",
            "Conception d'outils didactiques et muséographie de découverte"
        ],
        "soft": [
            "Enthousiasme communicatif et passion sincère pour la nature",
            "Excellente aisance relationnelle, captation de l'attention et sens du récit (storytelling)",
            "Patience, bienveillance et écoute avec les enfants et publics scolaires",
            "Adaptabilité météo et inventivité face aux imprévus de la nature"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Vérification de la météo, préparation des loupes, boîtes d'échantillonnage et trousse de secours."
            },
            {
                "time": "09:30",
                "activity": "Accueil d'une classe de CM1 au départ du sentier forestier, rappel chaleureux des consignes de sécurité et d'écoute."
            },
            {
                "time": "10:00",
                "activity": "Atelier sensoriel le long du sentier : observation des écorces à l'aveugle et recherche d'empreintes d'animaux."
            },
            {
                "time": "12:15",
                "activity": "Pique-nique zéro déchet partagé avec les élèves et les enseignants sous les chênes centenaires."
            },
            {
                "time": "13:30",
                "activity": "Pêche aux invertébrés dans la mare pédagogique et observation au microscope de terrain."
            },
            {
                "time": "15:30",
                "activity": "Bilan de la journée, remise du diplôme du 'Petit Gardien de la Forêt' et départ du car scolaire."
            },
            {
                "time": "16:30",
                "activity": "Nettoyage du matériel d'animation, rangement et préparation des fiches d'activités du lendemain."
            }
        ]
    },
    {
        "id": "garde-moniteur-espaces-naturels",
        "slug": "garde-moniteur-espaces-naturels",
        "title": "Garde-Moniteur / Garde-Monitrice d'Espaces Naturels",
        "aliases": [
            "Garde de parc national",
            "Agent de réserve naturelle",
            "Garde du littoral",
            "Garde d'espace protégé",
            "Agent de police de l'environnement",
            "Garde assermenté de l'environnement"
        ],
        "icon": "🏕️",
        "image": "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80",
        "familyId": "environnement-developpement-durable",
        "familyName": "Environnement, Écologie & Développement durable",
        "connectedFamilies": [
            "environnement-developpement-durable",
            "securite-defense",
            "sciences-terre-geosciences"
        ],
        "domain": "Forêt & Espaces naturels",
        "domainId": "foret-espaces-naturels",
        "subdomain": "Surveillance & Police de l'environnement en espaces protégés",
        "sectors": [
            "Parcs Nationaux de France (Vanoise, Écrins, Mercantour, Cévennes, Calanques...)",
            "Réserves Naturelles Nationales et Régionales (RNF)",
            "Conservatoire du Littoral et conseils départementaux (Espaces Naturels Sensibles - ENS)",
            "Office Français de la Biodiversité (OFB - inspecteurs de l'environnement)"
        ],
        "onisepUrl": "https://www.onisep.fr/metier/decouvrir-le-monde-professionnel/environnement-developpement-durable/les-metiers-et-l-emploi-dans-l-environnement-et-le-developpement-durable",
        "onisepSource": true,
        "isEmerging": false,
        "level": "Bac Pro à Bac +2 (Bac Pro GPN / BTSA GPN + Concours de la fonction publique d'État)",
        "salary": "🇫🇷 France : 1 850 € à 2 400 € brut/mois débutant (~23 000 à 30 000 € brut/an) hors primes de montagne, sujétions et indemnités d'assermentation (Source : Onisep / Grilles Ministère de la Transition Écologique) • 🇸🇳 Sénégal : 180 000 à 420 000 FCFA net/mois (Direction des Parcs Nationaux - DPN, corps des agents techniques et gardes)",
        "salaryDetails": {
            "france": {
                "starter": "1 900 € brut/mois",
                "experienced": "2 500 € brut/mois",
                "senior": "3 200 € brut/mois",
                "source": "Onisep / Grilles fonction publique d'État - Technicien de l'environnement"
            },
            "senegal": {
                "starter": "180 000 FCFA net/mois",
                "experienced": "280 000 FCFA net/mois",
                "senior": "420 000 FCFA net/mois",
                "source": "Grilles Fonction Publique Sénégalaise / Ministère de l'Environnement (DPN)"
            }
        },
        "targetAudience": "Espaces naturels classés, parcs nationaux, réserves naturelles, faune sauvage montagnarde/littorale, randonneurs et usagers",
        "workEnvironment": "Terrain permanent par tout temps (haute montagne, sentiers escarpés, zones humides isolées, refuges d'altitude), patrouilles pédestres ou à ski",
        "summary": "Sentinelle assermentée des sanctuaires de nature, le garde-moniteur surveille les parcs nationaux et réserves protégées, fait respecter la réglementation environnementale, suit l'évolution des espèces animales et végétales par des comptages scientifiques et accueille les randonneurs en montagne.",
        "missions": [
            "Surveiller le territoire du parc naturel et constater les infractions à la réglementation (braconnage, camping sauvage, feux, chiens non tenus).",
            "Mener des suivis scientifiques protocolés de la faune sauvage (comptages de bouquetins, chamois, gypaètes, loups, tortues).",
            "Entretenir les sentiers balisés, les passerelles de montagne, les refuges et les panneaux de signalisation patrimoniale.",
            "Informer et sensibiliser les randonneurs sur les règles de quiétude et les risques naturels de haute montagne."
        ],
        "activities": [
            "Patrouille pédestre d'une journée en haute altitude avec longue-vue et carnet de terrain.",
            "Relevé GPS et cartographie des nids de rapaces protégés pour définir des zones temporaires de tranquillité.",
            "Contrôle assermenté et verbalisation des infractions graves au code de l'environnement.",
            "Accueil et animation de points d'information mobiles auprès des touristes au col ou au refuge."
        ],
        "specialties": [
            "Surveillance en haute montagne et milieu alpin",
            "Garde du littoral côtier et des îles protégées",
            "Suivi télémétrique des grands prédateurs (loup, lynx, ours)",
            "Secours en montagne et sécurité des usagers en milieu hostile"
        ],
        "skills": {
            "hard": [
                "Excellente maîtrise des techniques d'alpinisme, de ski de randonnée et d'orientation par tous temps",
                "Droit de l'environnement, compétences d'agent assermenté et procédures de police judiciaire",
                "Protocoles scientifiques de suivi faunistique et floristique du Muséum National",
                "Utilisation experte des jumelles, longues-vues et GPS de haute précision"
            ],
            "soft": [
                "Endurance physique hors du commun et autonomie en milieu isolé",
                "Pédagogie et fermeté pour faire respecter la loi sans agressivité",
                "Sens aigu de l'observation et patience face à la faune sauvage",
                "Esprit d'équipe et solidarité de cordée avec ses collègues"
            ],
            "technical": [
                "Excellente maîtrise des techniques d'alpinisme, de ski de randonnée et d'orientation par tous temps",
                "Droit de l'environnement, compétences d'agent assermenté et procédures de police judiciaire",
                "Protocoles scientifiques de suivi faunistique et floristique du Muséum National",
                "Utilisation experte des jumelles, longues-vues et GPS de haute précision"
            ],
            "human": [
                "Endurance physique hors du commun et autonomie en milieu isolé",
                "Pédagogie et fermeté pour faire respecter la loi sans agressivité",
                "Sens aigu de l'observation et patience face à la faune sauvage",
                "Esprit d'équipe et solidarité de cordée avec ses collègues"
            ]
        },
        "qualities": [
            "Endurance physique remarquable",
            "Sens du devoir et autorité calme",
            "Sens de l'observation aiguisé",
            "Autonomie en montagne",
            "Dévouement à la protection de la nature"
        ],
        "studies": [
            "🇫🇷 France : Bac Pro à Bac +2 (Bac Pro Gestion et protection de la nature, BTSA GPN) + Concours officiel de Technicien de l'Environnement (catégorie B de la fonction publique d'État - Ministère de la Transition Écologique).",
            "🇸🇳 Sénégal : Recrutement sur concours de la Direction des Parcs Nationaux (corps des agents techniques des Eaux et Forêts et Chasses / Parcs Nationaux, Centre Forestier de Recyclage de Thiès)."
        ],
        "evolution": [
            "Chef de secteur d'un parc national",
            "Responsable du service scientifique ou de surveillance du parc",
            "Inspecteur de l'environnement au sein de l'Office Français de la Biodiversité (OFB)",
            "Directeur adjoint d'un parc naturel national ou régional",
            "Expert auprès d'aires marines protégées internationales"
        ],
        "dailySchedule": [
            {
                "time": "06:30",
                "activity": "Départ du poste de garde : équipement du sac à dos (jumelles, longue-vue, carnet d'assermentation, radio VHF)."
            },
            {
                "time": "08:00",
                "activity": "Ascension pédestre vers le cirque glaciaire à 2 400 m d'altitude pour le comptage printanier des bouquetins."
            },
            {
                "time": "10:30",
                "activity": "Poste d'affût : observation à la longue-vue, dénombrement des hardes et repérage des cabris de l'année."
            },
            {
                "time": "12:30",
                "activity": "Pique-nique sommaire au refuge et échange radio avec le chef de secteur sur les observations."
            },
            {
                "time": "14:00",
                "activity": "Patrouille le long du sentier de randonnée : rappel à l'ordre courtois de randonneurs marchant hors sentier avec un chien."
            },
            {
                "time": "16:00",
                "activity": "Vérification de l'état d'un panneau de délimitation de la zone cœur du parc national endommagé par un névé."
            },
            {
                "time": "18:00",
                "activity": "Retour au village, encodage des données d'observation faune dans la base de données scientifique du parc."
            }
        ],
        "daily": {
            "morning": "Randonnée d'approche en zone cœur protégée, relevés d'indices de présence de la faune sauvage et comptages scientifiques.",
            "afternoon": "Patrouille de surveillance réglementaire, accueil des randonneurs et transmission des fiches d'observation.",
            "challenges": "Faire respecter les sanctuaires de silence et de quiétude indispensables à la survie des grands animaux sauvages."
        },
        "quiz": [
            {
                "question": "Quel statut juridique particulier confère au garde-moniteur le pouvoir de verbaliser les infractions dans un parc ?",
                "options": [
                    "Il est agent assermenté et commissionné au titre de la police de l'environnement",
                    "Il est juge au tribunal",
                    "Il est simple bénévole",
                    "Il est chef d'entreprise privée"
                ],
                "answer": 0,
                "explanation": "Le garde-moniteur prête serment devant le tribunal pour constater légalement les atteintes au code de l'environnement."
            },
            {
                "question": "Quelle mission scientifique occupe une part majeure du quotidien du garde-moniteur ?",
                "options": [
                    "Le suivi protocolé des populations animales et végétales (comptages, baguages, relevés GPS)",
                    "La vente de forfaits de ski",
                    "La construction d'immeubles de bureaux",
                    "L'entretien des pistes d'atterrissage d'aéroports"
                ],
                "answer": 0,
                "explanation": "Les gardes sont les yeux et les oreilles des scientifiques sur le terrain pour mesurer la vitalité des populations animales protégées."
            }
        ],
        "saviezVous": {
            "fait": "Dans le cœur des parcs nationaux français, même le survol en drone ou en hélicoptère à basse altitude est strictement interdit pour ne pas effrayer les rapaces et bouquetins !",
            "chiffre": "Les parcs nationaux français protègent à eux seuls des milliers de kilomètres carrés de nature préservée, gérés au quotidien par environ 300 gardes-moniteurs."
        },
        "sources": [
            {
                "name": "Onisep - Les métiers et l'emploi dans l'environnement et le développement durable",
                "url": "https://www.onisep.fr/metier/decouvrir-le-monde-professionnel/environnement-developpement-durable/les-metiers-et-l-emploi-dans-l-environnement-et-le-developpement-durable",
                "date": "04/11/2025",
                "type": "Source officielle française"
            }
        ],
        "shortDescription": "Sentinelle assermentée des sanctuaires de nature, le garde-moniteur surveille les parcs nationaux et réserves protégées, fait respecter la réglementation environnementale, suit l'évolution des espèces animales et végétales par des comptages scientifiques et accueille les randonneurs en montagne.",
        "longDescription": "Sentinelle assermentée des sanctuaires de nature, le garde-moniteur surveille les parcs nationaux et réserves protégées, fait respecter la réglementation environnementale, suit l'évolution des espèces animales et végétales par des comptages scientifiques et accueille les randonneurs en montagne. Surveiller le territoire du parc naturel et constater les infractions à la réglementation (braconnage, camping sauvage, feux, chiens non tenus). Mener des suivis scientifiques protocolés de la faune sauvage (comptages de bouquetins, chamois, gypaètes, loups, tortues). Entretenir les sentiers balisés, les passerelles de montagne, les refuges et les panneaux de signalisation patrimoniale. Informer et sensibiliser les randonneurs sur les règles de quiétude et les risques naturels de haute montagne.",
        "description": "Sentinelle assermentée des sanctuaires de nature, le garde-moniteur surveille les parcs nationaux et réserves protégées, fait respecter la réglementation environnementale, suit l'évolution des espèces animales et végétales par des comptages scientifiques et accueille les randonneurs en montagne. Surveiller le territoire du parc naturel et constater les infractions à la réglementation (braconnage, camping sauvage, feux, chiens non tenus). Mener des suivis scientifiques protocolés de la faune sauvage (comptages de bouquetins, chamois, gypaètes, loups, tortues). Entretenir les sentiers balisés, les passerelles de montagne, les refuges et les panneaux de signalisation patrimoniale. Informer et sensibiliser les randonneurs sur les règles de quiétude et les risques naturels de haute montagne.",
        "studyLevel": "Bac Pro à Bac +2 (Bac Pro GPN / BTSA GPN + Concours de la fonction publique d'État)",
        "hard": [
            "Excellente maîtrise des techniques d'alpinisme, de ski de randonnée et d'orientation par tous temps",
            "Droit de l'environnement, compétences d'agent assermenté et procédures de police judiciaire",
            "Protocoles scientifiques de suivi faunistique et floristique du Muséum National",
            "Utilisation experte des jumelles, longues-vues et GPS de haute précision"
        ],
        "soft": [
            "Endurance physique hors du commun et autonomie en milieu isolé",
            "Pédagogie et fermeté pour faire respecter la loi sans agressivité",
            "Sens aigu de l'observation et patience face à la faune sauvage",
            "Esprit d'équipe et solidarité de cordée avec ses collègues"
        ],
        "typicalDay": [
            {
                "time": "06:30",
                "activity": "Départ du poste de garde : équipement du sac à dos (jumelles, longue-vue, carnet d'assermentation, radio VHF)."
            },
            {
                "time": "08:00",
                "activity": "Ascension pédestre vers le cirque glaciaire à 2 400 m d'altitude pour le comptage printanier des bouquetins."
            },
            {
                "time": "10:30",
                "activity": "Poste d'affût : observation à la longue-vue, dénombrement des hardes et repérage des cabris de l'année."
            },
            {
                "time": "12:30",
                "activity": "Pique-nique sommaire au refuge et échange radio avec le chef de secteur sur les observations."
            },
            {
                "time": "14:00",
                "activity": "Patrouille le long du sentier de randonnée : rappel à l'ordre courtois de randonneurs marchant hors sentier avec un chien."
            },
            {
                "time": "16:00",
                "activity": "Vérification de l'état d'un panneau de délimitation de la zone cœur du parc national endommagé par un névé."
            },
            {
                "time": "18:00",
                "activity": "Retour au village, encodage des données d'observation faune dans la base de données scientifique du parc."
            }
        ]
    },
    {
        "id": "conseiller-environnement",
        "slug": "conseiller-environnement",
        "title": "Conseiller / Conseillère en Environnement",
        "aliases": [
            "Éco-conseiller",
            "Consultant en transition écologique",
            "Conseiller développement durable",
            "Chargé de mission environnement",
            "Consultant écologie et territoires",
            "Conseiller transition bas-carbone"
        ],
        "icon": "🌍",
        "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80",
        "familyId": "environnement-developpement-durable",
        "familyName": "Environnement, Écologie & Développement durable",
        "connectedFamilies": [
            "environnement-developpement-durable",
            "droit-management"
        ],
        "domain": "Conseil, Stratégie & Droit de l'Environnement",
        "domainId": "conseil-developpement-durable",
        "subdomain": "Conseil en éco-transition & Audits environnementaux",
        "sectors": [
            "Cabinets d'audit et de conseil en stratégie environnementale",
            "Chambres consulaires (CCI, Chambres d'Agriculture, Chambres de Métiers)",
            "Collectivités territoriales (agences locales de l'énergie et du climat)",
            "Organisations non gouvernementales et fédérations professionnelles"
        ],
        "onisepUrl": "https://www.onisep.fr/ressources/univers-metier/metiers/conseiller-conseillere-en-environnement",
        "onisepSource": true,
        "isEmerging": false,
        "level": "Bac +5 (Master en sciences de l'environnement / Diplôme d'ingénieur / Titre d'Éco-conseiller)",
        "salary": "🇫🇷 France : 2 400 € à 3 100 € brut/mois débutant (~32 000 à 40 000 € brut/an), jusqu'à 5 200 € brut/mois pour un consultant senior en cabinet réputé (Source : Onisep / APEC) • 🇸🇳 Sénégal : 400 000 à 950 000 FCFA net/mois (Bureaux d'études, programmes de résilience climatique, agences de coopération)",
        "salaryDetails": {
            "france": {
                "starter": "2 500 € brut/mois",
                "experienced": "3 600 € brut/mois",
                "senior": "5 200 € brut/mois",
                "source": "Onisep / APEC Conseil en Stratégie Environnementale"
            },
            "senegal": {
                "starter": "400 000 FCFA net/mois",
                "experienced": "650 000 FCFA net/mois",
                "senior": "950 000 FCFA net/mois",
                "source": "Bureaux d'études RSE / Projets Climat BAD-PNUD Sénégal"
            }
        },
        "targetAudience": "Dirigeants de PME/ETI, directeurs de développement durable, maires et directeurs généraux des services municipaux",
        "workEnvironment": "Bureaux de conseil (conception de stratégies, réunions clients) et déplacements chez les clients ou collectivités clientes",
        "summary": "Guide stratégique des organisations vers la soutenabilité, le conseiller en environnement aide les entreprises et les collectivités à identifier leurs impacts négatifs, à décarboner leurs activités, à respecter les lois écologiques et à inventer de nouveaux modèles sobres et respectueux de la planète.",
        "missions": [
            "Réaliser des diagnostics environnementaux globaux (empreinte carbone, consommations d'eau, déchets, biodiversité).",
            "Proposer des plans d'actions concrets d'éco-transition adaptés à la réalité budgétaire de l'organisation.",
            "Accompagner les entreprises dans l'obtention de certifications environnementales (ISO 14001, EMAS, Label Lucie).",
            "Former les collaborateurs et sensibiliser les équipes dirigeantes aux enjeux des limites planétaires."
        ],
        "activities": [
            "Animation d'un atelier 'Fresque du Climat' auprès du comité de direction d'une entreprise industrielle.",
            "Calcul de l'empreinte carbone scopes 1, 2 et 3 selon la méthodologie Bilan Carbone® de l'ADEME.",
            "Rédaction d'un plan communal de sobriété hydrique pour faire face aux sécheresses estivales.",
            "Veille juridique et prospective sur les directives européennes (CSRD, devoir de vigilance)."
        ],
        "specialties": [
            "Comptabilité carbone et plans de décarbonation",
            "Éco-conception de produits et Analyse du Cycle de Vie (ACV)",
            "Accompagnement des démarches RSE certifiées (ISO 14001, B-Corp)",
            "Accompagnement des Plans Climat-Air-Énergie Territoriaux (PCAET)"
        ],
        "skills": {
            "hard": [
                "Méthodologie officielle du Bilan Carbone® (ADEME / Association Bilan Carbone)",
                "Normes internationales de management environnemental (ISO 14001, ISO 14040 ACV)",
                "Réglementation environnementale européenne et nationale (CSRD, Décret Tertiaire)",
                "Outils de reporting extra-financier et indicateurs de durabilité mesurables"
            ],
            "soft": [
                "Excellente capacité de conviction et force d'argumentation bienveillante",
                "Aisance oratoire face à des comités de direction ou des assemblées d'élus",
                "Vision systémique et compréhension des enjeux économiques et financiers",
                "Pédagogie et esprit d'innovation pour imaginer des solutions sur mesure"
            ],
            "technical": [
                "Méthodologie officielle du Bilan Carbone® (ADEME / Association Bilan Carbone)",
                "Normes internationales de management environnemental (ISO 14001, ISO 14040 ACV)",
                "Réglementation environnementale européenne et nationale (CSRD, Décret Tertiaire)",
                "Outils de reporting extra-financier et indicateurs de durabilité mesurables"
            ],
            "human": [
                "Excellente capacité de conviction et force d'argumentation bienveillante",
                "Aisance oratoire face à des comités de direction ou des assemblées d'élus",
                "Vision systémique et compréhension des enjeux économiques et financiers",
                "Pédagogie et esprit d'innovation pour imaginer des solutions sur mesure"
            ]
        },
        "qualities": [
            "Force de conviction",
            "Esprit de synthèse",
            "Aisance relationnelle de haut niveau",
            "Pragmatisme économique",
            "Vision prospective"
        ],
        "studies": [
            "🇫🇷 France : Bac +5. Master en sciences de l'environnement, Master Management du développement durable (Universités, Écoles de commerce), Diplôme d'ingénieur en écologie industrielle, ou Titre certifié d'Éco-conseiller (Institut ECO-Conseil de Strasbourg).",
            "🇸🇳 Sénégal : Bac +5. Master en Sciences de l'Environnement (Institut des Sciences de l'Environnement - ISE / UCAD Dakar), Master en Management Environnemental et RSE (BEM Management School, ISM)."
        ],
        "evolution": [
            "Directeur associé en cabinet de conseil en développement durable",
            "Directeur RSE et Transition Écologique au sein d'une grande entreprise",
            "Directeur de la transition écologique en métropole ou région",
            "Fondateur d'un cabinet d'éco-conseil indépendant",
            "Expert auprès de la Banque Mondiale ou d'agences onusiennes pour le climat"
        ],
        "dailySchedule": [
            {
                "time": "09:00",
                "activity": "Présentation des résultats du Bilan Carbone devant le directoire d'une entreprise de transport de marchandises."
            },
            {
                "time": "11:00",
                "activity": "Atelier de co-construction des actions de réduction d'émissions avec le directeur logistique et le directeur des achats."
            },
            {
                "time": "13:00",
                "activity": "Déjeuner avec un élu municipal pour échanger sur la mise en place d'une zone à faibles émissions (ZFE)."
            },
            {
                "time": "14:30",
                "activity": "Modélisation des gains carbone associés au passage d'une flotte de véhicules au biogaz et à l'électricité."
            },
            {
                "time": "16:30",
                "activity": "Veille réglementaire sur les nouveaux critères de la directive européenne de durabilité CSRD."
            },
            {
                "time": "18:00",
                "activity": "Finalisation du rapport d'audit ISO 14001 et envoi des livrables de restitution au client."
            }
        ],
        "daily": {
            "morning": "Restitution stratégique de bilans carbone auprès des décideurs d'entreprises, animation d'ateliers d'intelligence collective.",
            "afternoon": "Modélisation de scénarios de décarbonation, calculs d'émissions évitées et accompagnement à la certification environnementale.",
            "challenges": "Faire de la transition écologique un véritable levier de création de valeur et non une simple contrainte administrative."
        },
        "quiz": [
            {
                "question": "Quel institut historique français forme spécifiquement au titre professionnel d'Éco-conseiller ?",
                "options": [
                    "L'Institut ECO-Conseil (à Strasbourg)",
                    "L'Académie des Beaux-Arts",
                    "L'Institut de cuisine moléculaire",
                    "L'école nationale de la magistrature"
                ],
                "answer": 0,
                "explanation": "L'Institut ECO-Conseil de Strasbourg forme depuis plus de 30 ans des spécialistes de la transition écologique."
            },
            {
                "question": "Quels sont les 'Scopes 1, 2 et 3' dans un Bilan Carbone professionnel ?",
                "options": [
                    "Les différentes catégories d'émissions de gaz à effet de serre directes et indirectes générées par une organisation",
                    "Des modèles d'écrans d'ordinateurs",
                    "Des types de jumelles pour regarder les étoiles",
                    "Des diplômes de natation"
                ],
                "answer": 0,
                "explanation": "Le Scope 1 couvre les émissions directes de l'entreprise, le Scope 2 l'énergie achetée, et le Scope 3 toute la chaîne de valeur amont et aval."
            }
        ],
        "saviezVous": {
            "fait": "Plus de 80% de l'empreinte carbone de la plupart des entreprises de services ou de distribution se situe dans le Scope 3 (achats de biens, déplacements des clients et fin de vie des produits) !",
            "chiffre": "Le marché du conseil en durabilité et en reporting extra-financier enregistre une croissance annuelle supérieure à 20% en Europe."
        },
        "sources": [
            {
                "name": "Onisep - Fiche Métier Conseiller / Conseillère en environnement",
                "url": "https://www.onisep.fr/ressources/univers-metier/metiers/conseiller-conseillere-en-environnement",
                "date": "04/11/2025",
                "type": "Source officielle française"
            }
        ],
        "shortDescription": "Guide stratégique des organisations vers la soutenabilité, le conseiller en environnement aide les entreprises et les collectivités à identifier leurs impacts négatifs, à décarboner leurs activités, à respecter les lois écologiques et à inventer de nouveaux modèles sobres et respectueux de la planète.",
        "longDescription": "Guide stratégique des organisations vers la soutenabilité, le conseiller en environnement aide les entreprises et les collectivités à identifier leurs impacts négatifs, à décarboner leurs activités, à respecter les lois écologiques et à inventer de nouveaux modèles sobres et respectueux de la planète. Réaliser des diagnostics environnementaux globaux (empreinte carbone, consommations d'eau, déchets, biodiversité). Proposer des plans d'actions concrets d'éco-transition adaptés à la réalité budgétaire de l'organisation. Accompagner les entreprises dans l'obtention de certifications environnementales (ISO 14001, EMAS, Label Lucie). Former les collaborateurs et sensibiliser les équipes dirigeantes aux enjeux des limites planétaires.",
        "description": "Guide stratégique des organisations vers la soutenabilité, le conseiller en environnement aide les entreprises et les collectivités à identifier leurs impacts négatifs, à décarboner leurs activités, à respecter les lois écologiques et à inventer de nouveaux modèles sobres et respectueux de la planète. Réaliser des diagnostics environnementaux globaux (empreinte carbone, consommations d'eau, déchets, biodiversité). Proposer des plans d'actions concrets d'éco-transition adaptés à la réalité budgétaire de l'organisation. Accompagner les entreprises dans l'obtention de certifications environnementales (ISO 14001, EMAS, Label Lucie). Former les collaborateurs et sensibiliser les équipes dirigeantes aux enjeux des limites planétaires.",
        "studyLevel": "Bac +5 (Master en sciences de l'environnement / Diplôme d'ingénieur / Titre d'Éco-conseiller)",
        "hard": [
            "Méthodologie officielle du Bilan Carbone® (ADEME / Association Bilan Carbone)",
            "Normes internationales de management environnemental (ISO 14001, ISO 14040 ACV)",
            "Réglementation environnementale européenne et nationale (CSRD, Décret Tertiaire)",
            "Outils de reporting extra-financier et indicateurs de durabilité mesurables"
        ],
        "soft": [
            "Excellente capacité de conviction et force d'argumentation bienveillante",
            "Aisance oratoire face à des comités de direction ou des assemblées d'élus",
            "Vision systémique et compréhension des enjeux économiques et financiers",
            "Pédagogie et esprit d'innovation pour imaginer des solutions sur mesure"
        ],
        "typicalDay": [
            {
                "time": "09:00",
                "activity": "Présentation des résultats du Bilan Carbone devant le directoire d'une entreprise de transport de marchandises."
            },
            {
                "time": "11:00",
                "activity": "Atelier de co-construction des actions de réduction d'émissions avec le directeur logistique et le directeur des achats."
            },
            {
                "time": "13:00",
                "activity": "Déjeuner avec un élu municipal pour échanger sur la mise en place d'une zone à faibles émissions (ZFE)."
            },
            {
                "time": "14:30",
                "activity": "Modélisation des gains carbone associés au passage d'une flotte de véhicules au biogaz et à l'électricité."
            },
            {
                "time": "16:30",
                "activity": "Veille réglementaire sur les nouveaux critères de la directive européenne de durabilité CSRD."
            },
            {
                "time": "18:00",
                "activity": "Finalisation du rapport d'audit ISO 14001 et envoi des livrables de restitution au client."
            }
        ]
    },
    {
        "id": "chef-projet-developpement-durable",
        "slug": "chef-projet-developpement-durable",
        "title": "Chef / Cheffe de Projet Développement Durable",
        "aliases": [
            "Responsable RSE",
            "Chef de projet transition écologique",
            "Manager développement durable",
            "Responsable climat et durabilité",
            "Chef de projet biodiversité et territoire",
            "Chargé de mission Agenda 2030"
        ],
        "icon": "🎯",
        "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
        "familyId": "environnement-developpement-durable",
        "familyName": "Environnement, Écologie & Développement durable",
        "connectedFamilies": [
            "environnement-developpement-durable",
            "droit-management",
            "finance-fintech"
        ],
        "domain": "Conseil, Stratégie & Droit de l'Environnement",
        "domainId": "conseil-developpement-durable",
        "subdomain": "Stratégie RSE & Décarbonation des organisations",
        "sectors": [
            "Grandes entreprises et multinationales de tous secteurs (banques, énergie, télécoms, retail)",
            "Métropoles, conseils départementaux et régionaux",
            "Établissements publics et agences de développement territorial",
            "Organisations non gouvernementales et fondations internationales"
        ],
        "onisepUrl": "https://www.onisep.fr/ressources/univers-metier/metiers/chef-cheffe-de-projet-biodiversite",
        "onisepSource": true,
        "isEmerging": false,
        "level": "Bac +5 (Master RSE / Développement durable / École de commerce / Diplôme d'ingénieur)",
        "salary": "🇫🇷 France : 2 800 € à 3 600 € brut/mois débutant (~36 000 à 48 000 € brut/an), 4 500 € à 6 500 € brut/mois pour un responsable RSE confirmé en entreprise cotée (Source : Onisep / APEC) • 🇸🇳 Sénégal : 500 000 à 1 400 000 FCFA net/mois (Multinationales, banques, grands programmes miniers et d'infrastructures, agences publiques)",
        "salaryDetails": {
            "france": {
                "starter": "3 000 € brut/mois",
                "experienced": "4 500 € brut/mois",
                "senior": "6 500 € brut/mois",
                "source": "Onisep / APEC Métiers de la RSE et de la Stratégie d'Entreprise"
            },
            "senegal": {
                "starter": "500 000 FCFA net/mois",
                "experienced": "850 000 FCFA net/mois",
                "senior": "1 400 000 FCFA net/mois",
                "source": "Secteur Bancaire / Grandes Entreprises Télécoms et Énergie Sénégal"
            }
        },
        "targetAudience": "Ensemble des directions de l'entreprise (achats, RH, production, communication, finance) et parties prenantes externes",
        "workEnvironment": "Sièges sociaux d'entreprises, hôtels de région ou métropoles, réunions transversales fréquentes et déplacements sur sites",
        "summary": "Pilote transversal du changement durable, le chef de projet développement durable conçoit et coordonne la politique RSE (Responsabilité Sociétale des Entreprises) : il mobilise l'ensemble des départements pour réduire les pollutions, garantir l'éthique de la chaîne d'approvisionnement et publier des bilans de durabilité transparents.",
        "missions": [
            "Élaborer la feuille de route de durabilité de l'organisation en alignement avec les accords climatiques et les Objectifs de Développement Durable (ODD).",
            "Coordonner des projets transversaux concrets : achats responsables, économies d'énergie, mobilité douce des salariés, recyclage interne.",
            "Piloter la collecte des données extra-financières (critères ESG : Environnement, Social, Gouvernance) et rédiger la déclaration de performance extra-financière.",
            "Mobiliser et fédérer l'ensemble des salariés grâce à des défis écologiques, des conférences internes et un réseau d'éco-délégués."
        ],
        "activities": [
            "Animation du comité de pilotage RSE réunissant les directeurs généraux et chefs de départements.",
            "Audit des critères environnementaux imposés aux sous-traitants et fournisseurs dans le cadre du devoir de vigilance.",
            "Conception d'un plan de mobilité employeur favorisant le covoiturage et l'usage du vélo pour les trajets domicile-travail.",
            "Dialogue régulier avec les agences de notation extra-financière, investisseurs éthiques et associations riveraines."
        ],
        "specialties": [
            "Reporting extra-financier et conformité CSRD européenne",
            "Achats responsables et décarbonation de la chaîne logistique",
            "RSE en secteur financier et investissement socialement responsable (ISR)",
            "Démarches territoriales de transition écologique (PCAET / Territoire Engagé Transition Écologique)"
        ],
        "skills": {
            "hard": [
                "Normes internationales de durabilité (GRI, CSRD, taxonomie verte européenne, ISO 26000)",
                "Gestion de projet complexe en mode transversal sans lien hiérarchique direct",
                "Maîtrise des critères ESG (Environnement, Social, Gouvernance) et audit extra-financier",
                "Communication institutionnelle de crise et prévention du greenwashing"
            ],
            "soft": [
                "Leadership rassembleur et force d'entraînement communicative",
                "Diplomatie, tact et sens du compromis face aux résistances internes au changement",
                "Vision stratégique globale alliant contraintes financières et urgence écologique",
                "Excellente aisance dans la prise de parole en public et l'animation de plénières"
            ],
            "technical": [
                "Normes internationales de durabilité (GRI, CSRD, taxonomie verte européenne, ISO 26000)",
                "Gestion de projet complexe en mode transversal sans lien hiérarchique direct",
                "Maîtrise des critères ESG (Environnement, Social, Gouvernance) et audit extra-financier",
                "Communication institutionnelle de crise et prévention du greenwashing"
            ],
            "human": [
                "Leadership rassembleur et force d'entraînement communicative",
                "Diplomatie, tact et sens du compromis face aux résistances internes au changement",
                "Vision stratégique globale alliant contraintes financières et urgence écologique",
                "Excellente aisance dans la prise de parole en public et l'animation de plénières"
            ]
        },
        "qualities": [
            "Leadership transversal",
            "Sens politique et diplomatique",
            "Rigueur de reporting chiffré",
            "Capacité d'entraînement collectif",
            "Vision stratégique durable"
        ],
        "studies": [
            "🇫🇷 France : Bac +5. Master en Management de la RSE et du Développement Durable (Universités Paris-Dauphine, Lyon 3, Bordeaux), diplôme de Grande École de Commerce (HEC, ESSEC, ESCP avec spécialisation Impact), ou École d'Ingénieurs complétée par un cursus en management.",
            "🇸🇳 Sénégal : Bac +5. Master en Responsabilité Sociétale et Développement Durable, Master en Management de Projets (BEM Dakar, ISM, CESAG, UCAD)."
        ],
        "evolution": [
            "Directeur du Développement Durable et de la RSE (membre du comité exécutif)",
            "Directeur de la stratégie d'impact et de l'engagement sociétal",
            "Directeur de fonds d'investissement à impact (Impact Investing)",
            "Consultant senior / Partner en cabinet d'audit stratégique",
            "Directeur général d'une entreprise à mission"
        ],
        "dailySchedule": [
            {
                "time": "09:00",
                "activity": "Comité de direction : arbitrage budgétaire sur le remplacement de la flotte thermique par des utilitaires électriques."
            },
            {
                "time": "10:30",
                "activity": "Coordination avec le département Achats pour intégrer un critère d'éco-conception obligatoire dans les futurs appels d'offres."
            },
            {
                "time": "12:30",
                "activity": "Déjeuner de travail avec le directeur de la communication pour vérifier la sincérité des messages environnementaux."
            },
            {
                "time": "14:00",
                "activity": "Revue des indicateurs de la directive CSRD : consolidation des données de consommation d'eau de toutes les usines du groupe."
            },
            {
                "time": "16:00",
                "activity": "Animation de la communauté interne des 50 éco-délégués volontaires répartis sur tous les sites régionaux."
            },
            {
                "time": "17:30",
                "activity": "Préparation de la soutenance du rapport de durabilité devant le comité d'audit du Conseil d'Administration."
            }
        ],
        "daily": {
            "morning": "Comités stratégiques avec la direction générale, validation des investissements verts et arbitrages budgétaires RSE.",
            "afternoon": "Consolidation des données extra-financières, dialogue avec les fournisseurs et animation des réseaux internes d'éco-ambassadeurs.",
            "challenges": "Transformer la RSE en un véritable cœur de modèle économique plutôt qu'un simple exercice d'affichage réglementaire."
        },
        "quiz": [
            {
                "question": "Que désignent les critères 'ESG' au cœur du travail du chef de projet développement durable ?",
                "options": [
                    "Environnement, Social et Gouvernance",
                    "Électricité, Solaire et Gaz",
                    "Entreprise, Salaire et Gratification",
                    "Europe, Suisse et Grèce"
                ],
                "answer": 0,
                "explanation": "Les critères ESG permettent d'évaluer la responsabilité d'une entreprise au-delà de sa seule rentabilité financière."
            },
            {
                "question": "Quelle directive européenne entrée en vigueur en 2024 révolutionne le reporting de durabilité des entreprises ?",
                "options": [
                    "La directive CSRD (Corporate Sustainability Reporting Directive)",
                    "Le règlement sur les visas de tourisme",
                    "La directive sur le roaming téléphonique",
                    "Le code pénal maritime"
                ],
                "answer": 0,
                "explanation": "La CSRD impose à des dizaines de milliers d'entreprises européennes de publier des données auditées sur leur impact climatique et social."
            }
        ],
        "saviezVous": {
            "fait": "En France, la loi PACTE de 2019 permet aux entreprises d'inscrire une 'raison d'être' dans leurs statuts et de devenir des 'Sociétés à mission' vérifiées par un organisme tiers indépendant !",
            "chiffre": "Plus de 85% des jeunes diplômés des grandes écoles déclarent aujourd'hui intégrer les engagements RSE de l'employeur comme critère prioritaire de choix de leur premier emploi."
        },
        "sources": [
            {
                "name": "Onisep - Fiche Métier Chef / Cheffe de projet biodiversité",
                "url": "https://www.onisep.fr/ressources/univers-metier/metiers/chef-cheffe-de-projet-biodiversite",
                "date": "04/11/2025",
                "type": "Source officielle française"
            }
        ],
        "shortDescription": "Pilote transversal du changement durable, le chef de projet développement durable conçoit et coordonne la politique RSE (Responsabilité Sociétale des Entreprises) : il mobilise l'ensemble des départements pour réduire les pollutions, garantir l'éthique de la chaîne d'approvisionnement et publier des bilans de durabilité transparents.",
        "longDescription": "Pilote transversal du changement durable, le chef de projet développement durable conçoit et coordonne la politique RSE (Responsabilité Sociétale des Entreprises) : il mobilise l'ensemble des départements pour réduire les pollutions, garantir l'éthique de la chaîne d'approvisionnement et publier des bilans de durabilité transparents. Élaborer la feuille de route de durabilité de l'organisation en alignement avec les accords climatiques et les Objectifs de Développement Durable (ODD). Coordonner des projets transversaux concrets : achats responsables, économies d'énergie, mobilité douce des salariés, recyclage interne. Piloter la collecte des données extra-financières (critères ESG : Environnement, Social, Gouvernance) et rédiger la déclaration de performance extra-financière. Mobiliser et fédérer l'ensemble des salariés grâce à des défis écologiques, des conférences internes et un réseau d'éco-délégués.",
        "description": "Pilote transversal du changement durable, le chef de projet développement durable conçoit et coordonne la politique RSE (Responsabilité Sociétale des Entreprises) : il mobilise l'ensemble des départements pour réduire les pollutions, garantir l'éthique de la chaîne d'approvisionnement et publier des bilans de durabilité transparents. Élaborer la feuille de route de durabilité de l'organisation en alignement avec les accords climatiques et les Objectifs de Développement Durable (ODD). Coordonner des projets transversaux concrets : achats responsables, économies d'énergie, mobilité douce des salariés, recyclage interne. Piloter la collecte des données extra-financières (critères ESG : Environnement, Social, Gouvernance) et rédiger la déclaration de performance extra-financière. Mobiliser et fédérer l'ensemble des salariés grâce à des défis écologiques, des conférences internes et un réseau d'éco-délégués.",
        "studyLevel": "Bac +5 (Master RSE / Développement durable / École de commerce / Diplôme d'ingénieur)",
        "hard": [
            "Normes internationales de durabilité (GRI, CSRD, taxonomie verte européenne, ISO 26000)",
            "Gestion de projet complexe en mode transversal sans lien hiérarchique direct",
            "Maîtrise des critères ESG (Environnement, Social, Gouvernance) et audit extra-financier",
            "Communication institutionnelle de crise et prévention du greenwashing"
        ],
        "soft": [
            "Leadership rassembleur et force d'entraînement communicative",
            "Diplomatie, tact et sens du compromis face aux résistances internes au changement",
            "Vision stratégique globale alliant contraintes financières et urgence écologique",
            "Excellente aisance dans la prise de parole en public et l'animation de plénières"
        ],
        "typicalDay": [
            {
                "time": "09:00",
                "activity": "Comité de direction : arbitrage budgétaire sur le remplacement de la flotte thermique par des utilitaires électriques."
            },
            {
                "time": "10:30",
                "activity": "Coordination avec le département Achats pour intégrer un critère d'éco-conception obligatoire dans les futurs appels d'offres."
            },
            {
                "time": "12:30",
                "activity": "Déjeuner de travail avec le directeur de la communication pour vérifier la sincérité des messages environnementaux."
            },
            {
                "time": "14:00",
                "activity": "Revue des indicateurs de la directive CSRD : consolidation des données de consommation d'eau de toutes les usines du groupe."
            },
            {
                "time": "16:00",
                "activity": "Animation de la communauté interne des 50 éco-délégués volontaires répartis sur tous les sites régionaux."
            },
            {
                "time": "17:30",
                "activity": "Préparation de la soutenance du rapport de durabilité devant le comité d'audit du Conseil d'Administration."
            }
        ]
    },
    {
        "id": "juriste-droit-environnement",
        "slug": "juriste-droit-environnement",
        "title": "Juriste en Droit de l'Environnement",
        "aliases": [
            "Juriste environnementaliste",
            "Avocat spécialisé en droit de l'environnement",
            "Juriste transition écologique",
            "Consultant réglementaire ICPE",
            "Juriste droit de l'urbanisme et de l'énergie",
            "Conseiller juridique vert"
        ],
        "icon": "⚖️",
        "image": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&auto=format&fit=crop&q=80",
        "familyId": "environnement-developpement-durable",
        "familyName": "Environnement, Écologie & Développement durable",
        "connectedFamilies": [
            "environnement-developpement-durable",
            "droit-management"
        ],
        "domain": "Conseil, Stratégie & Droit de l'Environnement",
        "domainId": "conseil-developpement-durable",
        "subdomain": "Droit de l'environnement, Réglementation ICPE & Contentieux vert",
        "sectors": [
            "Cabinets d'avocats spécialisés en droit public des affaires et environnement",
            "Directions juridiques de grands groupes industriels, énergétiques et du BTP",
            "Ministère de la Transition Écologique, DREAL et préfectures",
            "Grandes associations de protection de l'environnement (FNE, Greenpeace, WWF)"
        ],
        "onisepUrl": "https://www.onisep.fr/ressources/univers-metier/metiers/juriste-droit-de-l-environnement",
        "onisepSource": true,
        "isEmerging": false,
        "level": "Bac +5 (Master 2 Droit de l'Environnement / Droit Public / Certificat d'Aptitude à la Profession d'Avocat - CAPA)",
        "salary": "🇫🇷 France : 2 600 € à 3 500 € brut/mois débutant (~34 000 à 45 000 € brut/an), 4 500 € à 7 000 € brut/mois pour un juriste senior ou avocat associé (Source : Onisep / Village de la Justice) • 🇸🇳 Sénégal : 450 000 à 1 200 000 FCFA net/mois (Grands cabinets d'affaires, secteur minier et pétrolier, ministères)",
        "salaryDetails": {
            "france": {
                "starter": "2 800 € brut/mois",
                "experienced": "4 200 € brut/mois",
                "senior": "7 000 € brut/mois",
                "source": "Onisep / Baromètre des Juristes d'Entreprise & Cabinets d'Avocats"
            },
            "senegal": {
                "starter": "450 000 FCFA net/mois",
                "experienced": "750 000 FCFA net/mois",
                "senior": "1 200 000 FCFA net/mois",
                "source": "Cabinets d'Avocats d'Affaires / Secteur Énergie et Mines Sénégal"
            }
        },
        "targetAudience": "Dossiers d'autorisation environnementale, installations classées (ICPE), litiges de pollution, recours devant les tribunaux administratifs et conformité réglementaire",
        "workEnvironment": "Bureau en cabinet d'avocats ou direction juridique d'entreprise, tribunaux administratifs et cours d'appel",
        "summary": "Bouclier juridique des projets de transition et sentinelle du respect des lois écologiques, le juriste en droit de l'environnement sécurise les autorisations des parcs renouvelables et usines, traite les dossiers de friches polluées et défend les organisations lors de contentieux environnementaux.",
        "missions": [
            "Sécuriser la conformité juridique des dossiers d'autorisation environnementale unique (projets éoliens, usines, carrières).",
            "Assurer une veille permanente sur l'évolution foisonnante des lois écologiques françaises et des directives européennes.",
            "Défendre l'organisation devant les juridictions administratives ou pénales lors de recours intentés par des riverains ou associations.",
            "Rédiger et négocier des clauses environnementales robustes dans les contrats industriels, les baux et les acquisitions d'actifs fonciers."
        ],
        "activities": [
            "Analyse des risques de contentieux sur le permis de construire et l'autorisation d'exploiter d'un parc éolien.",
            "Rédaction de mémoires en défense devant le tribunal administratif en réponse à un recours d'association écologiste.",
            "Audit juridique de passif environnemental (sites et sols pollués) lors du rachat d'une usine chimique.",
            "Animation de formations réglementaires à destination des directeurs d'usines sur la responsabilité pénale environnementale."
        ],
        "specialties": [
            "Droit des Installations Classées pour la Protection de l'Environnement (ICPE)",
            "Droit des énergies renouvelables et raccordement au réseau",
            "Contentieux climatique et responsabilité civile/pénale environnementale",
            "Droit de l'eau, du littoral et protection des espèces menacées"
        ],
        "skills": {
            "hard": [
                "Maîtrise approfondie du Code de l'environnement et du Code de l'urbanisme",
                "Procédures contentieuses devant les tribunaux administratifs et le Conseil d'État",
                "Technique de rédaction d'actes juridiques, de conclusions et de clauses de garantie de passif environnemental",
                "Connaissance des normes techniques de pollution (air, eau, bruit, odeurs, sols)"
            ],
            "soft": [
                "Rigueur juridique chirurgicale et précision du vocabulaire",
                "Excellente éloquence et force de persuasion à l'écrit comme à l'oral",
                "Sens de l'anticipation des risques légaux et vision stratégique",
                "Pugnacité et maîtrise du stress lors des audiences contentieuses"
            ],
            "technical": [
                "Maîtrise approfondie du Code de l'environnement et du Code de l'urbanisme",
                "Procédures contentieuses devant les tribunaux administratifs et le Conseil d'État",
                "Technique de rédaction d'actes juridiques, de conclusions et de clauses de garantie de passif environnemental",
                "Connaissance des normes techniques de pollution (air, eau, bruit, odeurs, sols)"
            ],
            "human": [
                "Rigueur juridique chirurgicale et précision du vocabulaire",
                "Excellente éloquence et force de persuasion à l'écrit comme à l'oral",
                "Sens de l'anticipation des risques légaux et vision stratégique",
                "Pugnacité et maîtrise du stress lors des audiences contentieuses"
            ]
        },
        "qualities": [
            "Rigueur intellectuelle absolue",
            "Esprit d'analyse et de synthèse",
            "Aisance oratoire et plaidoirie",
            "Sens de la négociation",
            "Pugnacité procédurale"
        ],
        "studies": [
            "🇫🇷 France : Bac +5. Master 2 spécialisé en Droit de l'Environnement, Droit Public des Affaires ou Droit de l'Énergie (Universités Paris 1 Panthéon-Sorbonne, Strasbourg, Aix-Marseille, Nantes). Pour exercer comme avocat : réussite à l'examen d'entrée au CRFPA et obtention du CAPA (Bac +6).",
            "🇸🇳 Sénégal : Bac +5. Master 2 en Droit de l'Environnement et de la Santé, Droit des Affaires (Faculté des Sciences Juridiques et Politiques - FSJP UCAD Dakar, Université Gaston Berger de Saint-Louis)."
        ],
        "evolution": [
            "Avocat associé au sein d'un grand cabinet international en droit public/environnement",
            "Directeur juridique Groupe chargé des affaires réglementaires et environnementales",
            "Magistrat au sein de l'ordre administratif (tribunal administratif, cour administrative d'appel)",
            "Haut fonctionnaire au Ministère de la Transition Écologique",
            "Conseiller juridique auprès d'organisations internationales de conservation"
        ],
        "dailySchedule": [
            {
                "time": "08:45",
                "activity": "Lecture de la jurisprudence environnementale du Conseil d'État rendue la veille et des nouvelles circulaires ministérielles."
            },
            {
                "time": "09:30",
                "activity": "Analyse juridique d'un rapport d'expertise géotechnique pour contester un arrêté préfectoral de mise en demeure sur une friche industrielle."
            },
            {
                "time": "11:30",
                "activity": "Conférence téléphonique avec le chef de projet éolien pour sécuriser la rédaction de l'étude d'impact sur l'avifaune."
            },
            {
                "time": "13:00",
                "activity": "Déjeuner avec un confrère avocat spécialisé en droit de l'énergie."
            },
            {
                "time": "14:30",
                "activity": "Plaidoirie devant le Tribunal Administratif dans le cadre d'un recours contre un permis d'aménager une station d'épuration."
            },
            {
                "time": "16:45",
                "activity": "Rédaction d'une clause de garantie de dépollution des sols dans un contrat de vente de terrain d'ancienne usine textile."
            },
            {
                "time": "18:30",
                "activity": "Relecture finale des conclusions juridiques déposées au greffe et classement des pièces probantes."
            }
        ],
        "daily": {
            "morning": "Analyse des textes de lois environnementales, sécurisation des dossiers d'autorisation administrative et veille juridique.",
            "afternoon": "Plaidoiries en justice administrative, rédaction de mémoires en défense et rédaction de clauses contractuelles complexes.",
            "challenges": "Sécuriser des investissements industriels majeurs face à une réglementation environnementale de plus en plus dense et protectrice."
        },
        "quiz": [
            {
                "question": "Devant quel ordre de juridiction la majorité des litiges liés aux autorisations environnementales sont-ils plaidés en France ?",
                "options": [
                    "L'ordre administratif (Tribunaux administratifs et Conseil d'État)",
                    "Le tribunal de commerce uniquement",
                    "Le conseil des prud'hommes",
                    "La cour d'assises"
                ],
                "answer": 0,
                "explanation": "Les décisions environnementales (arrêtés préfectoraux, autorisations d'exploiter, dérogations) relèvent de la compétence des juridictions administratives."
            },
            {
                "question": "Qu'est-ce qu'une ICPE dans le vocabulaire quotidien d'un juriste environnementaliste ?",
                "options": [
                    "Une Installation Classée pour la Protection de l'Environnement (usine, élevage ou déchèterie soumise à règles strictes)",
                    "Un institut de comptabilité publique",
                    "Un indice du prix de l'électricité",
                    "Une nouvelle marque de voiture propre"
                ],
                "answer": 0,
                "explanation": "Le régime des ICPE encadre les activités industrielles et agricoles susceptibles de générer des nuisances ou pollutions."
            }
        ],
        "saviezVous": {
            "fait": "En 2021, dans la célèbre 'Affaire du Siècle', la justice administrative a condamné l'État français pour préjudice écologique causé par le non-respect de ses engagements de réduction des gaz à effet de serre !",
            "chiffre": "Le Code de l'environnement français compte aujourd'hui plus de 1 200 articles législatifs et 2 000 articles réglementaires en constante évolution."
        },
        "sources": [
            {
                "name": "Onisep - Fiche Métier Juriste en droit de l'environnement",
                "url": "https://www.onisep.fr/ressources/univers-metier/metiers/juriste-droit-de-l-environnement",
                "date": "04/11/2025",
                "type": "Source officielle française"
            }
        ],
        "shortDescription": "Bouclier juridique des projets de transition et sentinelle du respect des lois écologiques, le juriste en droit de l'environnement sécurise les autorisations des parcs renouvelables et usines, traite les dossiers de friches polluées et défend les organisations lors de contentieux environnementaux.",
        "longDescription": "Bouclier juridique des projets de transition et sentinelle du respect des lois écologiques, le juriste en droit de l'environnement sécurise les autorisations des parcs renouvelables et usines, traite les dossiers de friches polluées et défend les organisations lors de contentieux environnementaux. Sécuriser la conformité juridique des dossiers d'autorisation environnementale unique (projets éoliens, usines, carrières). Assurer une veille permanente sur l'évolution foisonnante des lois écologiques françaises et des directives européennes. Défendre l'organisation devant les juridictions administratives ou pénales lors de recours intentés par des riverains ou associations. Rédiger et négocier des clauses environnementales robustes dans les contrats industriels, les baux et les acquisitions d'actifs fonciers.",
        "description": "Bouclier juridique des projets de transition et sentinelle du respect des lois écologiques, le juriste en droit de l'environnement sécurise les autorisations des parcs renouvelables et usines, traite les dossiers de friches polluées et défend les organisations lors de contentieux environnementaux. Sécuriser la conformité juridique des dossiers d'autorisation environnementale unique (projets éoliens, usines, carrières). Assurer une veille permanente sur l'évolution foisonnante des lois écologiques françaises et des directives européennes. Défendre l'organisation devant les juridictions administratives ou pénales lors de recours intentés par des riverains ou associations. Rédiger et négocier des clauses environnementales robustes dans les contrats industriels, les baux et les acquisitions d'actifs fonciers.",
        "studyLevel": "Bac +5 (Master 2 Droit de l'Environnement / Droit Public / Certificat d'Aptitude à la Profession d'Avocat - CAPA)",
        "hard": [
            "Maîtrise approfondie du Code de l'environnement et du Code de l'urbanisme",
            "Procédures contentieuses devant les tribunaux administratifs et le Conseil d'État",
            "Technique de rédaction d'actes juridiques, de conclusions et de clauses de garantie de passif environnemental",
            "Connaissance des normes techniques de pollution (air, eau, bruit, odeurs, sols)"
        ],
        "soft": [
            "Rigueur juridique chirurgicale et précision du vocabulaire",
            "Excellente éloquence et force de persuasion à l'écrit comme à l'oral",
            "Sens de l'anticipation des risques légaux et vision stratégique",
            "Pugnacité et maîtrise du stress lors des audiences contentieuses"
        ],
        "typicalDay": [
            {
                "time": "08:45",
                "activity": "Lecture de la jurisprudence environnementale du Conseil d'État rendue la veille et des nouvelles circulaires ministérielles."
            },
            {
                "time": "09:30",
                "activity": "Analyse juridique d'un rapport d'expertise géotechnique pour contester un arrêté préfectoral de mise en demeure sur une friche industrielle."
            },
            {
                "time": "11:30",
                "activity": "Conférence téléphonique avec le chef de projet éolien pour sécuriser la rédaction de l'étude d'impact sur l'avifaune."
            },
            {
                "time": "13:00",
                "activity": "Déjeuner avec un confrère avocat spécialisé en droit de l'énergie."
            },
            {
                "time": "14:30",
                "activity": "Plaidoirie devant le Tribunal Administratif dans le cadre d'un recours contre un permis d'aménager une station d'épuration."
            },
            {
                "time": "16:45",
                "activity": "Rédaction d'une clause de garantie de dépollution des sols dans un contrat de vente de terrain d'ancienne usine textile."
            },
            {
                "time": "18:30",
                "activity": "Relecture finale des conclusions juridiques déposées au greffe et classement des pièces probantes."
            }
        ]
    },
    {
        "id": "meteorologiste",
        "slug": "meteorologiste",
        "title": "Météorologiste",
        "aliases": [
            "Prévisionniste météo",
            "Ingénieur météorologue",
            "Technicien météorologiste",
            "Climatologue analyste",
            "Météorologue d'exploitation",
            "Ingénieur prévisionniste atmosphérique"
        ],
        "icon": "🌦️",
        "image": "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800&auto=format&fit=crop&q=80",
        "familyId": "environnement-developpement-durable",
        "familyName": "Environnement, Écologie & Développement durable",
        "connectedFamilies": [
            "environnement-developpement-durable",
            "sciences-terre-geosciences",
            "numerique-ia"
        ],
        "domain": "Climat & Météorologie",
        "domainId": "climat-meteorologie",
        "subdomain": "Observation atmosphérique, Prévisions numériques & Analyse du dérèglement climatique",
        "sectors": [
            "Services météorologiques nationaux (Météo-France, ANACIM, ASECNA)",
            "Aviation civile, aéroports et compagnies aériennes",
            "Armées (navigation maritime et aérienne militaire)",
            "Secteurs météo-sensibles : énergéticiens éoliens/solaires, gestionnaires de réseaux électriques, agriculture"
        ],
        "onisepUrl": "https://www.onisep.fr/ressources/univers-metier/metiers/meteorologiste",
        "onisepSource": true,
        "isEmerging": false,
        "level": "Bac +2 (Technicien de la météorologie) à Bac +5 (Ingénieur de l'École Nationale de la Météorologie)",
        "salary": "🇫🇷 France : 2 000 € à 2 400 € brut/mois débutant comme technicien, 2 800 € à 4 500 € brut/mois pour un ingénieur prévisionniste de Météo-France (Source : Onisep / Grilles Fonction Publique d'État) • 🇸🇳 Sénégal : 300 000 à 900 000 FCFA net/mois (Agence Nationale de l'Aviation Civile et de la Météorologie - ANACIM, ASECNA)",
        "salaryDetails": {
            "france": {
                "starter": "2 100 € brut/mois (technicien) / 2 900 € brut/mois (ingénieur)",
                "experienced": "3 600 € brut/mois",
                "senior": "4 800 € brut/mois",
                "source": "Onisep / Grilles des corps techniques et d'ingénieurs de Météo-France"
            },
            "senegal": {
                "starter": "300 000 FCFA net/mois",
                "experienced": "550 000 FCFA net/mois",
                "senior": "900 000 FCFA net/mois",
                "source": "Grilles ANACIM / ASECNA / Ministère des Transports Aériens Sénégal"
            }
        },
        "targetAudience": "Atmosphère terrestre, données satellitaires géostationnaires, radars Doppler de précipitations, ballons-sondes et modèles numériques de prévision (AROME, ARPEGE)",
        "workEnvironment": "Centre de prévision météo 24h/24 (écrans multiples, cartes synoptiques, radars en temps réel), stations d'observation aéroportuaires et laboratoires de recherche climatique",
        "summary": "Observateur et devin scientifique du ciel, le météorologiste analyse en continu les masses d'air, les images satellites et les modèles numériques pour prévoir le temps, alerter les populations en cas de tempête, canicule ou inondation, et éclairer les décideurs sur l'évolution globale du climat.",
        "missions": [
            "Surveiller en temps réel l'état de l'atmosphère grâce au réseau de stations au sol, radars de pluie, ballons-sondes et satellites.",
            "Analyser les simulations des supercalculateurs et élaborer les bulletins d'expertise météo pour le public et les professionnels.",
            "Déclencher les cartes de vigilance météo (vert, jaune, orange, rouge) lors de phénomènes extrêmes (orages violents, cyclones, canicules).",
            "Fournir une assistance météorologique sur mesure à la navigation aérienne, maritime, aux agriculteurs et aux producteurs d'énergie renouvelable."
        ],
        "activities": [
            "Interprétation des champs de pression, de vent et d'humidité sur les modèles numériques ARPEGE et AROME.",
            "Lancement et suivi des données de télémesure d'un ballon-sonde montant jusqu'à 30 kilomètres d'altitude.",
            "Rédaction des messages d'avertissement TAF/METAR indispensables aux pilotes de ligne avant chaque décollage.",
            "Modélisation de scénarios climatiques régionaux pour évaluer l'impact des sécheresses sur les réserves d'eau douce."
        ],
        "specialties": [
            "Prévisionniste aéronautique et aéroportuaire",
            "Expert en vigilance et météorologie des phénomènes extrêmes",
            "Climatologue et analyse des séries temporelles climatiques",
            "Météorologie marine et routière"
        ],
        "skills": {
            "hard": [
                "Physique de l'atmosphère, mécanique des fluides thermodynamique et chimie de l'air",
                "Analyse des images satellites (Météosat) et signaux radar de précipitations Doppler",
                "Modélisation numérique du climat, supercalculateurs et programmation scientifique (Python, Fortran)",
                "Normes et codes de l'Organisation Météorologique Mondiale (OMM)"
            ],
            "soft": [
                "Capacité de concentration et réactivité absolue en situation de crise météo",
                "Rigueur d'analyse scientifique et esprit critique face aux sorties brutes des modèles",
                "Aisance dans la communication pour transmettre des consignes de sécurité claires aux médias",
                "Résistance au travail posté (nuits, week-ends et jours fériés en 3x8)"
            ],
            "technical": [
                "Physique de l'atmosphère, mécanique des fluides thermodynamique et chimie de l'air",
                "Analyse des images satellites (Météosat) et signaux radar de précipitations Doppler",
                "Modélisation numérique du climat, supercalculateurs et programmation scientifique (Python, Fortran)",
                "Normes et codes de l'Organisation Météorologique Mondiale (OMM)"
            ],
            "human": [
                "Capacité de concentration et réactivité absolue en situation de crise météo",
                "Rigueur d'analyse scientifique et esprit critique face aux sorties brutes des modèles",
                "Aisance dans la communication pour transmettre des consignes de sécurité claires aux médias",
                "Résistance au travail posté (nuits, week-ends et jours fériés en 3x8)"
            ]
        },
        "qualities": [
            "Rigueur scientifique",
            "Sang-froid en situation d'alerte",
            "Esprit de synthèse rapide",
            "Sens de la communication publique",
            "Passion pour les phénomènes atmosphériques"
        ],
        "studies": [
            "🇫🇷 France : Bac +2 ou Bac +5. La voie royale est l'École Nationale de la Météorologie (ENM à Toulouse) : concours de Technicien supérieur de la météorologie (TSM, Bac +2) ou concours d'Ingénieur des ponts, des eaux et des forêts / Ingénieur des études et de l'exploitation de l'aviation civile (IEEAC / ENM, Bac +5). Masters universitaires en sciences de l'océan, de l'atmosphère et du climat.",
            "🇸🇳 Sénégal : Bac +2 à Bac +5. École Africaine de la Météorologie et de l'Aviation Civile (EAMAC à Niamey - formation commune des États membres de l'ASECNA), Master Climatologie et Télédétection à l'UCAD Dakar."
        ],
        "evolution": [
            "Chef prévisionniste de salle d'opérations nationales",
            "Responsable de centre météorologique régional ou d'aéroport international",
            "Chercheur en modélisation climatique au Centre National de Recherches Météorologiques (CNRM)",
            "Expert international auprès de l'Organisation Météorologique Mondiale (OMM)",
            "Directeur d'exploitation chez un énergéticien ou routeur météo de courses nautiques"
        ],
        "dailySchedule": [
            {
                "time": "06:00",
                "activity": "Prise de quart au centre national de prévision : analyse des écarts entre les prévisions de la nuit et les observations radar."
            },
            {
                "time": "07:30",
                "activity": "Briefing de prévision avec l'équipe : confrontation des sorties du modèle européen CEP et du modèle français AROME."
            },
            {
                "time": "09:00",
                "activity": "Déclinaison de la carte de vigilance météorologique nationale : passage en vigilance orange orages pour 5 départements."
            },
            {
                "time": "11:00",
                "activity": "Conférence téléphonique avec le Centre Opérationnel de Gestion Interministérielle des Crises (COGIC - Sécurité Civile)."
            },
            {
                "time": "13:00",
                "activity": "Déjeuner au centre technique."
            },
            {
                "time": "14:15",
                "activity": "Élaboration des bulletins spécifiques pour les gestionnaires d'aéroports et les réseaux de transport d'électricité."
            },
            {
                "time": "16:00",
                "activity": "Passation détaillée du relais de vigilance à l'équipe de quart de l'après-midi."
            }
        ],
        "daily": {
            "morning": "Analyse des cartes de pression et des flux satellites, confrontation des modèles mathématiques et diffusion de la carte de vigilance.",
            "afternoon": "Assistance aux gestionnaires de crise et aux aéroports, suivi en direct de l'évolution des cellules orageuses au radar.",
            "challenges": "Prédire avec précision la localisation et l'intensité d'un phénomène violent plusieurs heures à l'avance pour sauver des vies."
        },
        "quiz": [
            {
                "question": "Quelle grande école publique située à Toulouse forme historiquement les météorologistes français ?",
                "options": [
                    "L'École Nationale de la Météorologie (ENM)",
                    "L'École Nationale de la Magistrature",
                    "L'Institut National du Patrimoine",
                    "L'École Navale uniquement"
                ],
                "answer": 0,
                "explanation": "L'ENM est l'école d'application de Météo-France qui forme techniciens et ingénieurs météo."
            },
            {
                "question": "Quel instrument de mesure atmosphérique emporté par un ballon gonflé à l'hélium monte jusqu'à la stratosphère ?",
                "options": [
                    "Une radiosonde (ballon-sonde)",
                    "Une girouette de jardin",
                    "Un pluviomètre manuel",
                    "Un thermomètre de bain"
                ],
                "answer": 0,
                "explanation": "Le ballon-sonde s'élève jusqu'à 30 000 mètres d'altitude pour mesurer en continu la pression, la température, l'humidité et le vent."
            }
        ],
        "saviezVous": {
            "fait": "Les prévisions météo à 3 jours d'aujourd'hui sont aussi fiables que l'étaient les prévisions à 1 jour il y a seulement vingt ans, grâce aux supercalculateurs de Météo-France capables de millions de milliards de calculs par seconde !",
            "chiffre": "Le réseau radar de Météo-France scrute l'atmosphère toutes les 5 minutes sur l'ensemble de l'Hexagone pour détecter la formation des orages et des chutes de grêle."
        },
        "sources": [
            {
                "name": "Onisep - Fiche Métier Météorologiste",
                "url": "https://www.onisep.fr/ressources/univers-metier/metiers/meteorologiste",
                "date": "04/11/2025",
                "type": "Source officielle française"
            }
        ],
        "shortDescription": "Observateur et devin scientifique du ciel, le météorologiste analyse en continu les masses d'air, les images satellites et les modèles numériques pour prévoir le temps, alerter les populations en cas de tempête, canicule ou inondation, et éclairer les décideurs sur l'évolution globale du climat.",
        "longDescription": "Observateur et devin scientifique du ciel, le météorologiste analyse en continu les masses d'air, les images satellites et les modèles numériques pour prévoir le temps, alerter les populations en cas de tempête, canicule ou inondation, et éclairer les décideurs sur l'évolution globale du climat. Surveiller en temps réel l'état de l'atmosphère grâce au réseau de stations au sol, radars de pluie, ballons-sondes et satellites. Analyser les simulations des supercalculateurs et élaborer les bulletins d'expertise météo pour le public et les professionnels. Déclencher les cartes de vigilance météo (vert, jaune, orange, rouge) lors de phénomènes extrêmes (orages violents, cyclones, canicules). Fournir une assistance météorologique sur mesure à la navigation aérienne, maritime, aux agriculteurs et aux producteurs d'énergie renouvelable.",
        "description": "Observateur et devin scientifique du ciel, le météorologiste analyse en continu les masses d'air, les images satellites et les modèles numériques pour prévoir le temps, alerter les populations en cas de tempête, canicule ou inondation, et éclairer les décideurs sur l'évolution globale du climat. Surveiller en temps réel l'état de l'atmosphère grâce au réseau de stations au sol, radars de pluie, ballons-sondes et satellites. Analyser les simulations des supercalculateurs et élaborer les bulletins d'expertise météo pour le public et les professionnels. Déclencher les cartes de vigilance météo (vert, jaune, orange, rouge) lors de phénomènes extrêmes (orages violents, cyclones, canicules). Fournir une assistance météorologique sur mesure à la navigation aérienne, maritime, aux agriculteurs et aux producteurs d'énergie renouvelable.",
        "studyLevel": "Bac +2 (Technicien de la météorologie) à Bac +5 (Ingénieur de l'École Nationale de la Météorologie)",
        "hard": [
            "Physique de l'atmosphère, mécanique des fluides thermodynamique et chimie de l'air",
            "Analyse des images satellites (Météosat) et signaux radar de précipitations Doppler",
            "Modélisation numérique du climat, supercalculateurs et programmation scientifique (Python, Fortran)",
            "Normes et codes de l'Organisation Météorologique Mondiale (OMM)"
        ],
        "soft": [
            "Capacité de concentration et réactivité absolue en situation de crise météo",
            "Rigueur d'analyse scientifique et esprit critique face aux sorties brutes des modèles",
            "Aisance dans la communication pour transmettre des consignes de sécurité claires aux médias",
            "Résistance au travail posté (nuits, week-ends et jours fériés en 3x8)"
        ],
        "typicalDay": [
            {
                "time": "06:00",
                "activity": "Prise de quart au centre national de prévision : analyse des écarts entre les prévisions de la nuit et les observations radar."
            },
            {
                "time": "07:30",
                "activity": "Briefing de prévision avec l'équipe : confrontation des sorties du modèle européen CEP et du modèle français AROME."
            },
            {
                "time": "09:00",
                "activity": "Déclinaison de la carte de vigilance météorologique nationale : passage en vigilance orange orages pour 5 départements."
            },
            {
                "time": "11:00",
                "activity": "Conférence téléphonique avec le Centre Opérationnel de Gestion Interministérielle des Crises (COGIC - Sécurité Civile)."
            },
            {
                "time": "13:00",
                "activity": "Déjeuner au centre technique."
            },
            {
                "time": "14:15",
                "activity": "Élaboration des bulletins spécifiques pour les gestionnaires d'aéroports et les réseaux de transport d'électricité."
            },
            {
                "time": "16:00",
                "activity": "Passation détaillée du relais de vigilance à l'équipe de quart de l'après-midi."
            }
        ]
    }
];

    return {
        DOMAINS: DOMAINS,
        ENVIRONMENT_PATHWAYS: ENVIRONMENT_PATHWAYS,
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
            return ENVIRONMENT_PATHWAYS;
        },
        getEnvironmentPathways: function() {
            return ENVIRONMENT_PATHWAYS;
        }
    };
}));

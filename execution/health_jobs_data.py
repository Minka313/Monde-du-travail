# -*- coding: utf-8 -*-
"""
BASE DE DONNÉES DU SECTEUR SANTÉ, SOINS & PARAMÉDICAL
11 Domaines d'Excellence • 30 Fiches Métiers Haute Profondeur
Double Ancrage Géographique : France (€) / Sénégal & Afrique de l'Ouest (FCFA)
Sources Principales : Studyrama Santé, Ministère de la Santé, Ordre des Médecins, Ordre des Pharmaciens
"""

HEALTH_DOMAINS = [
    {
        "id": "medecine",
        "name": "Médecine & Chirurgie",
        "icon": "🩺",
        "order": 1,
        "chainStage": "Diagnostic & Traitement Médical",
        "description": "Examiner, diagnostiquer, soigner les pathologies et réaliser des actes médicaux et chirurgicaux pour préserver et rétablir la santé.",
        "subdomains": ["Médecine générale", "Chirurgie & Bloc", "Médecine d'urgence", "Spécialités médicales"]
    },
    {
        "id": "soins-infirmiers",
        "name": "Soins Infirmiers & Pratiques Avancées",
        "icon": "👩⚕️",
        "order": 2,
        "chainStage": "Soins & Accompagnement Clinique",
        "description": "Dispenser les soins prescrits, surveiller l'état clinique des patients, coordonner les parcours de soins et assurer la prévention.",
        "subdomains": ["Soins généraux", "Anesthésie-réanimation (IADE)", "Bloc opératoire (IBODE)", "Pratique avancée (IPA)"]
    },
    {
        "id": "sante-dentaire",
        "name": "Santé Dentaire & Odontologie",
        "icon": "🦷",
        "order": 3,
        "chainStage": "Soins Bucco-Dentaires & Prothèses",
        "description": "Prévenir, diagnostiquer et traiter les anomalies et maladies de la bouche, des dents, des gencives et des maxillaires.",
        "subdomains": ["Chirurgie dentaire", "Assistance dentaire", "Prothèse dentaire & CFAO", "Orthodontie"]
    },
    {
        "id": "femme-enfant",
        "name": "Santé de la Femme & de l'Enfant",
        "icon": "👶",
        "order": 4,
        "chainStage": "Maternité & Pédiatrie",
        "description": "Accompagner la grossesse, l'accouchement, la santé gynécologique et prodiguer des soins spécialisés aux nouveau-nés et enfants.",
        "subdomains": ["Maïeutique & Maternité", "Pédiatrie & Néonatologie", "Petite enfance", "Gynécologie"]
    },
    {
        "id": "sante-mentale",
        "name": "Santé Mentale & Psychiatrie",
        "icon": "🧠",
        "order": 5,
        "chainStage": "Psychiatrie & Soins Relationnels",
        "description": "Diagnostiquer et soigner les troubles psychiques et psychiatriques, avec thérapies médicamenteuses et accompagnement relationnel.",
        "subdomains": ["Psychiatrie clinique", "Soins infirmiers psychiatriques", "Pédopsychiatrie", "Réhabilitation psychosociale"]
    },
    {
        "id": "reeducation-readaptation",
        "name": "Rééducation, Réadaptation & Autonomie",
        "icon": "🦴",
        "order": 6,
        "chainStage": "Restauration Fonctionnelle & Ergonomie",
        "description": "Rétablir les capacités motrices, sensorielles, posturales et de communication pour restaurer l'autonomie du patient.",
        "subdomains": ["Kinésithérapie", "Ergothérapie", "Orthophonie", "Psychomotricité", "Pédicurie-Podologie", "Orthoptie"]
    },
    {
        "id": "urgences-secours",
        "name": "Urgences, Secours Médical & Régulation",
        "icon": "🚑",
        "order": 7,
        "chainStage": "Intervention Préhospitalière & Triage",
        "description": "Prendre en charge les urgences vitales, réguler les appels d'aide médicale urgente et transporter les patients sécurisés.",
        "subdomains": ["Régulation médicale (SAMU)", "Ambulance & Transport sanitaire", "SMUR & Déchocage", "Secours d'urgence"]
    },
    {
        "id": "laboratoires-medicaux",
        "name": "Biologie Médicale & Diagnostics de Laboratoire",
        "icon": "🔬",
        "order": 8,
        "chainStage": "Analyses In Vitro & Diagnostic",
        "description": "Réaliser et interpréter les examens de biologie médicale (hématologie, biochimie, sérologie) guidant les décisions cliniques.",
        "subdomains": ["Biochimie clinique", "Hématologie & Hémostase", "Microbiologie médicale", "Immunologie & Sérologie"]
    },
    {
        "id": "pharmacie",
        "name": "Pharmacie Clinique, Officine & Distribution",
        "icon": "💊",
        "order": 9,
        "chainStage": "Médicaments & Dispositifs Thérapeutiques",
        "description": "Délivrer les médicaments, analyser les ordonnances, garantir la sécurité thérapeutique et assurer la pharmacovigilance.",
        "subdomains": ["Pharmacie d'officine", "Pharmacie à usage intérieur (PUI)", "Préparation magistrale", "Conseil thérapeutique"]
    },
    {
        "id": "management-administration-sante",
        "name": "Direction, Encadrement & Administration de Santé",
        "icon": "🏥",
        "order": 10,
        "chainStage": "Gouvernance & Gestion Hospitalière",
        "description": "Diriger les structures hospitalières, manager les équipes soignantes et orchestrer la logistique et l'administration des soins.",
        "subdomains": ["Direction d'établissement", "Coordination des soins (Cadres)", "Secrétariat & Dossier patient", "Gestion hospitalière"]
    },
    {
        "id": "technologies-biomedicales",
        "name": "Dispositifs Médicaux & Ingénierie Biomédicale",
        "icon": "⚙️",
        "order": 11,
        "chainStage": "Maintenance & Équipements de Haute Précision",
        "description": "Maintenir, calibrer et déployer les technologies d'imagerie, respirateurs, moniteurs et blocs opératoires connectés.",
        "subdomains": ["Imagerie médicale", "Bloc opératoire & Réanimation", "GMAO hospitalière", "Dispositifs médicaux"]
    }
]

HEALTH_JOBS = [
    # 1. MÉDECIN GÉNÉRALISTE
    {
        "id": "medecin-generaliste",
        "slug": "medecin-generaliste",
        "title": "Médecin Généraliste",
        "aliases": ["Médecin de famille", "Omnipraticien", "Praticien de premier recours"],
        "icon": "🩺",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": ["sante-soins-paramedical", "biologie-chimie"],
        "domain": "Médecine & Chirurgie",
        "domainId": "medecine",
        "subdomain": "Médecine générale",
        "shortDescription": "Pilier central du système de santé, le médecin généraliste diagnostique, traite et coordonne les soins de santé globale pour tous les âges de la vie.",
        "longDescription": "Interlocuteur privilégié des patients, le médecin généraliste assure une prise en charge globale : prévention, dépistage, traitement des affections aiguës et chroniques (diabète, hypertension). Il prescrit les examens complémentaires et oriente vers les confrères spécialistes lorsque la situation l'exige. En cabinet libéral, maison de santé ou centre hospitalier, il incarne la continuité des soins et l'écoute humaine indispensable au rétablissement.",
        "simpleDefinition": "Docteur en médecine qui reçoit les patients pour tout problème de santé, pose un diagnostic, prescrit les médicaments et coordonne les soins.",
        "level": "Bac +9 (Doctorat d'État en Médecine)",
        "missions": [
            "Recevoir les patients en consultation clinique, écouter leurs symptômes et pratiquer un examen physique complet",
            "Poser un diagnostic médical et prescrire le traitement adapté (ordonnances, examens biologiques, radiographies)",
            "Assurer le suivi régulier des patients atteints de maladies chroniques et coordonner leur parcours avec les spécialistes",
            "Mener des actions de prévention, de dépistage précoce et de vaccination pour toute la famille",
            "Participer à la permanence des soins (gardes médicales, urgences de premier recours)"
        ],
        "workEnvironment": "Cabinet libéral individuel ou de groupe, maison de santé pluriprofessionnelle (MSP), dispensaire, centre de santé communal ou service des urgences hospitalières.",
        "typicalDay": [
            {"time": "08:30", "activity": "Début des consultations sur rendez-vous au cabinet : auscultations, bilans de santé, renouvellements"},
            {"time": "11:30", "activity": "Consultation d'urgence pour un enfant fébrile : diagnostic d'otite et prescription d'antibiothérapie adaptée"},
            {"time": "13:30", "activity": "Visites à domicile pour des patients âgés ou à mobilité réduite"},
            {"time": "15:30", "activity": "Reprise des consultations et téléconsultations de suivi pour des bilans biologiques"},
            {"time": "19:00", "activity": "Analyse des résultats de laboratoire reçus, courriers aux confrères et tenue des dossiers médicaux"}
        ],
        "skills": {
            "technical": [
                "Diagnostic sémiologique et examen clinique méthodique",
                "Pharmacologie clinique et interactions médicamenteuses",
                "Gestes d'urgence et réanimation cardio-pulmonaire",
                "Interprétation d'électrocardiogrammes (ECG) et bilans biologiques",
                "Gestion du dossier médical informatisé et télé-expertise"
            ],
            "human": [
                "Écoute empathique et sens aigu de la relation humaine",
                "Résistance au stress et réactivité face à l'imprévu",
                "Pédagogie pour expliquer les pathologies et traitements",
                "Respect strict du secret médical et éthique déontologique"
            ],
            "tools": [
                "Stéthoscope de précision (Littmann)",
                "Tensiomètre et otoscope",
                "Électrocardiographe portable",
                "Logiciel de dossier médical partagé (DMP)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Bac général à spécialités scientifiques (SVT, Physique-Chimie, Maths) ou Bac S", "desc": "Excellentes bases scientifiques et méthode de travail rigoureuse."},
                {"step": "Premier cycle (Bac +1 à +3)", "title": "PASS / L.AS (France) ou Première Année Commune de Médecine (Sénégal)", "desc": "Sélection exigeante, anatomie, physiologie, biochimie, sémiologie."},
                {"step": "Deuxième cycle (Bac +4 à +6)", "title": "Externat en médecine", "desc": "Stages hospitaliers quotidiens et apprentissage des pathologies cliniques."},
                {"step": "Troisième cycle (Bac +7 à +9)", "title": "Internat de médecine générale & Thèse d'exercice", "desc": "Pratique en autonomie supervisée en cabinet et hôpital, soutenance de thèse de Docteur en Médecine."}
            ],
            "schools": [
                {"name": "Faculté de Médecine, de Pharmacie et d'Odonto-Stomatologie (FMPOS) — UCAD Dakar", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "UFR des Sciences de la Santé — Université Gaston Berger (UGB) Saint-Louis", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "UFR de Santé — Université Iba Der Thiam de Thiès", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Facultés de Médecine des universités françaises (Sorbonne, Paris Cité, Bordeaux, Lyon)", "country": "France", "scope": "France"}
            ],
            "certifications": ["Diplôme d'État de Docteur en Médecine", "Inscription obligatoire au Tableau de l'Ordre des Médecins"]
        },
        "career": {
            "sectors": ["Santé publique", "Médecine libérale", "Établissements hospitaliers", "Centres de santé"],
            "employerTypes": ["Pratique libérale (cabinet privé)", "Hôpitaux publics (CHU, CHR)", "Centres de santé municipaux", "Organisations humanitaires (MSF, Croix-Rouge)"],
            "evolution": "Médecin généraliste installé ➔ Maître de stage universitaire ➔ Médecin coordinateur d'Ehpad/clinique ➔ Directeur de centre de santé",
            "pros": "Utilité sociale absolue, lien de confiance profond avec les patients, indépendance professionnelle en libéral, plein emploi garanti.",
            "cons": "Charge de travail hebdomadaire très lourde (50 à 60h), astreintes de nuit et gardes de week-end, responsabilité juridique et morale constante."
        },
        "salary": "🇫🇷 France : 4 500 - 8 500 € net/mois en libéral (environ 3 500 - 6 000 € à l'hôpital) • 🇸🇳 Sénégal : 400 000 - 1 500 000 FCFA net/mois dans le public (jusqu'à 2 500 000 FCFA en clinique privée)",
        "saviezVous": {
            "fait": "Selon les données de l'Ordre des Médecins, un médecin généraliste traite en moyenne entre 85% et 90% des motifs de consultation sans nécessiter d'orientation vers un deuxième avis spécialisé.",
            "pourquoi": "Sa formation pluridisciplinaire poussée lui confère une vision d'ensemble de l'organisme humain et des interactions biopsychosociales."
        },
        "sources": [
            {"organization": "Studyrama", "title": "Fiche métier : Médecin généraliste", "url": "https://www.studyrama.com/formations/fiches-metiers/sante/medecin-generaliste", "type": "metier"},
            {"organization": "Conseil National de l'Ordre des Médecins", "title": "Démographie médicale et exercice de la médecine générale", "type": "institutionnel"}
        ],
        "interests": ["soigner-aider", "comprendre-corps-humain", "resoudre-problemes"],
        "relatedJobSlugs": ["medecin-urgentiste", "chirurgien", "infirmier-diplome-etat", "pediatre"]
    },

    # 2. MÉDECIN SPÉCIALISTE / CHIRURGIEN
    {
        "id": "chirurgien",
        "slug": "chirurgien",
        "title": "Chirurgien / Médecin Spécialiste en Chirurgie",
        "aliases": ["Chirurgien viscéral", "Chirurgien orthopédiste", "Chirurgien traumatologue"],
        "icon": "👨⚕️",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": ["sante-soins-paramedical", "biologie-chimie"],
        "domain": "Médecine & Chirurgie",
        "domainId": "medecine",
        "subdomain": "Chirurgie & Bloc",
        "shortDescription": "Expert des interventions opératoires, le chirurgien répare traumatismes, retire tumeurs et rétablit les fonctions vitales au bloc opératoire.",
        "longDescription": "Le chirurgien opère le corps humain avec une rigueur millimétrique. Qu'il pratique la chirurgie orthopédique, viscérale, cardiaque ou réparatrice, il pose l'indication opératoire en amont, conduit l'acte au bloc avec l'équipe pluridisciplinaire (anesthésistes, IBODE) et assure le suivi post-opératoire jusqu'à la cicatrisation complète.",
        "simpleDefinition": "Médecin hautement qualifié qui opère les patients au bloc opératoire pour soigner blessures, maladies ou malformations.",
        "level": "Bac +11 à Bac +12 (DES de Chirurgie)",
        "missions": [
            "Examiner les patients lors de consultations pré-opératoires et poser l'indication chirurgicale",
            "Planifier l'acte avec l'équipe anesthésique et vérifier les imageries (IRM, scanners 3D)",
            "Réaliser l'intervention chirurgicale au bloc opératoire dans le respect absolu de l'asepsie",
            "Gérer les complications per-opératoires imprévues avec sang-froid",
            "Superviser les soins de réanimation post-opératoire et le suivi de cicatrisation"
        ],
        "workEnvironment": "Bloc opératoire stérile en milieu hospitalier public (CHU) ou clinique chirurgicale privée, unité de soins continus.",
        "typicalDay": [
            {"time": "07:30", "activity": "Visite des opérés de la veille en service de chirurgie et validation des sorties"},
            {"time": "08:30", "activity": "Lavage chirurgical des mains et première intervention : résection d'une hernie discale sous microscope"},
            {"time": "12:00", "activity": "Seconde intervention programmée : ostéosynthèse complexe de fracture ouverte"},
            {"time": "15:00", "activity": "Consultations externes pré et post-opératoires, explication des bénéfices/risques aux patients"},
            {"time": "18:00", "activity": "Garde aux urgences chirurgicales pour admission d'un traumatisé de la route"}
        ],
        "skills": {
            "technical": [
                "Techniques de dissection, hémostase et sutures microchirurgicales",
                "Chirurgie mini-invasive, coelioscopie et chirurgie assistée par robot",
                "Anatomie chirurgicale descriptive et topographique parfaite",
                "Gestion du risque infectieux et de l'hémodynamique per-opératoire",
                "Prise de décision rapide en situation critique d'hémorragie"
            ],
            "human": [
                "Dextérité manuelle et coordination visuo-motrice exceptionnelle",
                "Endurance physique et concentration soutenue sur des interventions de plusieurs heures",
                "Sens aigu du leadership bienveillant en équipe de bloc",
                "Capacité à annoncer des diagnostics graves avec empathie"
            ],
            "tools": [
                "Bistouri électrique et instruments de microchirurgie",
                "Optiques de coelioscopie et colonnes vidéo HD",
                "Console robotisée de chirurgie (Da Vinci)",
                "Amplificateur de brillance radiologique au bloc"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Bac scientifique S1, S2 ou bac général scientifique", "desc": "Mention requise, profil d'excellence académique."},
                {"step": "Cycle médical (Bac +1 à +6)", "title": "Études médicales complètes et externat", "desc": "Concours de l'Internat / EDN en fin de 6ème année."},
                {"step": "Internat chirurgical (Bac +7 à +12)", "title": "Diplôme d'Études Spécialisées (DES) en Chirurgie", "desc": "5 à 6 ans d'internat chirurgical exclusif et compagnonnage au bloc."}
            ],
            "schools": [
                {"name": "FMPOS — UCAD Dakar (Département de Chirurgie Générale et Spécialités)", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "UFR Santé — UGB Saint-Louis", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Facultés de médecine et CHU de France (Paris, Lyon, Marseille, Toulouse)", "country": "France", "scope": "France"}
            ],
            "certifications": ["DES de Chirurgie", "Thèse de Docteur en Médecine", "Ordre des Médecins"]
        },
        "career": {
            "sectors": ["Chirurgie hospitalière", "Cliniques privées", "Enseignement et recherche médicale"],
            "employerTypes": ["CHU / Hôpitaux militaires", "Cliniques mutualistes ou privées", "ONG de chirurgie d'urgence (Chirurgiens du Monde)"],
            "evolution": "Chirurgien praticien hospitalier ➔ Chef de clinique ➔ Chef de service chirurgical ➔ Professeur des Universités (PUPH)",
            "pros": "Prestige professionnel élevé, pouvoir de guérison immédiat et spectaculaire, technologie de pointe au bloc.",
            "cons": "Énorme charge mentale, risque médicolégal omniprésent, gardes éprouvantes et postures debout prolongées."
        },
        "salary": "🇫🇷 France : 5 500 - 14 000 € net/mois selon statut et secteur • 🇸🇳 Sénégal : 600 000 - 2 500 000 FCFA net/mois (secteur public à privé)",
        "saviezVous": {
            "fait": "Les chirurgiens modernes s'entraînent désormais sur des simulateurs de réalité virtuelle haptiques reproduisant exactement la résistance des tissus humains.",
            "pourquoi": "Cela permet de répéter des opérations rares avant d'intervenir pour la première fois sur un être humain."
        },
        "sources": [
            {"organization": "Studyrama", "title": "Fiche métier : Chirurgien", "url": "https://www.studyrama.com/formations/fiches-metiers/sante/chirurgien", "type": "metier"},
            {"organization": "Académie Nationale de Chirurgie", "title": "La formation chirurgicale en France", "type": "institutionnel"}
        ],
        "interests": ["soigner-aider", "comprendre-corps-humain", "construire-fabriquer"],
        "relatedJobSlugs": ["medecin-generaliste", "medecin-urgentiste", "infirmier-bloc-operatoire", "chirurgien-dentiste"]
    },

    # 3. MÉDECIN URGENTISTE
    {
        "id": "medecin-urgentiste",
        "slug": "medecin-urgentiste",
        "title": "Médecin Urgentiste",
        "aliases": ["Praticien hospitalier urgentiste", "Médecin SMUR", "Urgentiste SAMU"],
        "icon": "🚑",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": ["sante-soins-paramedical", "biologie-chimie"],
        "domain": "Urgences, Secours Médical & Régulation",
        "domainId": "urgences-secours",
        "subdomain": "SMUR & Déchocage",
        "shortDescription": "En première ligne des urgences vitales et des catastrophes, l'urgentiste stabilise les détresses aiguës en service hospitalier et en intervention mobile SMUR.",
        "longDescription": "L'urgentiste est le médecin de la première heure. Au service d'accueil des urgences (SAU), en salle d'accueil des urgences vitales (déchocage) ou à bord de l'ambulance de réanimation du SMUR, il évalue en quelques secondes la gravité d'un état critique (infarctus, polytraumatisme, AVC, détresse respiratoire) et initie les gestes de survie.",
        "simpleDefinition": "Médecin spécialisé dans les soins d'extrême urgence et la réanimation immédiate des patients en danger de mort.",
        "level": "Bac +10 (DES de Médecine d'Urgence)",
        "missions": [
            "Trier et prendre en charge sans délai les patients présentant une détresse vitale",
            "Pratiquer les gestes de réanimation avancée : intubation endotrachéale, défibrillation, pose de voies veineuses centrales",
            "Intervenir hors de l'hôpital avec l'équipe mobile du SMUR (accidents de la voie publique, domiciles)",
            "Prescrire les bilans biologiques et radiologiques d'urgence pour orienter vers le bloc ou les soins intensifs",
            "Coordonner la régulation médicale des appels d'urgence au centre 15 / SAMU"
        ],
        "workEnvironment": "Services d'urgences hospitaliers (SAU), véhicules d'intervention SMUR et hélicoptères sanitaires, centre de régulation SAMU.",
        "typicalDay": [
            {"time": "08:00", "activity": "Transmission médicale entre l'équipe de nuit et l'équipe de jour au déchocage"},
            {"time": "09:30", "activity": "Prise en charge d'un arrêt cardiorespiratoire : réanimation, massage, administration d'adrénaline"},
            {"time": "11:45", "activity": "Départ en intervention SMUR pour un choc anaphylactique grave sur voie publique"},
            {"time": "14:30", "activity": "Examen de patients au box des urgences (douleurs thoraciques, fractures, coliques néphrétiques)"},
            {"time": "18:00", "activity": "Point d'admission avec la réanimation et les services de cardiologie interventionnelle"}
        ],
        "skills": {
            "technical": [
                "Techniques de réanimation cardio-pulmonaire avancée (ACLS)",
                "Gestion des voies aériennes difficiles et ventilation mécanique",
                "Échographie clinique ciblée d'urgence (échographie FAST)",
                "Traitement de la douleur aiguë et sédation procédurale",
                "Protocoles de régulation et plans de secours d'urgence (Plan Blanc)"
            ],
            "human": [
                "Calme olympien et lucidité maximale sous stress intense",
                "Prise de décision rapide sans hésitation",
                "Capacité à diriger une équipe de réanimation dans l'urgence",
                "Empathie immédiate pour rassurer les proches angoissés"
            ],
            "tools": [
                "Défibrillateur multiparamétrique de transport",
                "Échographe portable de poche (Point-of-Care Ultrasound)",
                "Respirateur de transport et matériel d'intubation vidéo",
                "Dispositifs d'immobilisation de traumatologie"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Baccalauréat scientifique S", "desc": "Bases solides en physiologie et biochimie."},
                {"step": "Cycles 1 et 2 (Bac +1 à +6)", "title": "Études médicales complètes", "desc": "Stages aux urgences, réanimation et cardiologie."},
                {"step": "Troisième cycle (Bac +7 à +10)", "title": "DES de Médecine d'Urgence", "desc": "4 ans d'internat en SMUR, urgences adultes, pédiatriques et réanimation."}
            ],
            "schools": [
                {"name": "FMPOS UCAD Dakar (Spécialisation Médecine d'Urgence / SAMU National du Sénégal)", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Facultés de médecine et CHU français (Paris, Lille, Nancy, Lyon)", "country": "France", "scope": "France"}
            ],
            "certifications": ["DES de Médecine d'Urgence", "Attestation de Formation aux Gestes et Soins d'Urgence (AFGSU)", "Ordre des Médecins"]
        },
        "career": {
            "sectors": ["Médecine d'urgence hospitalière", "SAMU / SMUR", "Médecine humanitaire et rapatriement sanitaire"],
            "employerTypes": ["Hôpitaux publics (CHU, CHR)", "Sociétés d'assistance et rapatriement international (Europ Assistance, SOS Médecins)", "Armée et sécurité civile"],
            "evolution": "Praticien hospitalier urgentiste ➔ Responsable d'unité SMUR ➔ Chef du pôle urgences-réanimation ➔ Directeur de SAMU",
            "pros": "Adrénaline, sauvetages directs de vies humaines au quotidien, grande solidarité d'équipe, diversité totale des cas cliniques.",
            "cons": "Rythme de travail en gardes de 12h ou 24h, impact lourd sur le sommeil et la vie personnelle, confrontation fréquente à la mort."
        },
        "salary": "🇫🇷 France : 4 000 - 8 000 € net/mois selon ancienneté et gardes • 🇸🇳 Sénégal : 450 000 - 1 600 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Le concept de SAMU (Service d'Aide Médicale Urgente) et de SMUR projetant le médecin et l'hôpital directement sur la voie publique est une innovation médicale francophone créée à Toulouse par le Pr Louis Lareng.",
            "pourquoi": "Avant cela, les ambulances se contentaient de transporter les blessés le plus vite possible sans soins médicaux pendant le trajet."
        },
        "sources": [
            {"organization": "Studyrama", "title": "Fiche métier : Médecin urgentiste", "url": "https://www.studyrama.com/formations/fiches-metiers/sante/medecin-urgentiste", "type": "metier"},
            {"organization": "Société Française de Médecine d'Urgence (SFMU)", "title": "Référentiel métier d'urgentiste", "type": "institutionnel"}
        ],
        "interests": ["urgences-secours", "soigner-aider", "comprendre-corps-humain"],
        "relatedJobSlugs": ["ambulancier", "assistant-regulation-medicale", "medecin-generaliste", "infirmier-anesthesiste"]
    },

    # 4. INFIRMIER DIPLÔMÉ D'ÉTAT (IDE)
    {
        "id": "infirmier-diplome-etat",
        "slug": "infirmier-diplome-etat",
        "title": "Infirmier / Infirmière Diplômé(e) d'État (IDE)",
        "aliases": ["Infirmier hospitalier", "Infirmier clinicien", "Infirmière en soins généraux"],
        "icon": "💉",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": ["sante-soins-paramedical", "biologie-chimie"],
        "domain": "Soins Infirmiers & Pratiques Avancées",
        "domainId": "soins-infirmiers",
        "subdomain": "Soins généraux",
        "shortDescription": "Cœur battant des établissements de soins, l'infirmier dispense les traitements, surveille l'état de santé des patients et assure leur accompagnement quotidien.",
        "longDescription": "L'infirmier diplômé d'État (IDE) assure le lien constant entre le médecin et le patient. Sur prescription médicale ou dans le cadre de son rôle propre d'autonomie, il pose des perfusions, administre les médicaments, surveille les constantes vitales (tension, pouls, saturation), réalise des pansements complexes et écoute les angoisses des personnes soignées.",
        "simpleDefinition": "Professionnel de santé qui prodigue des soins médicaux, surveille l'état des malades et veille à leur bien-être au quotidien.",
        "level": "Bac +3 (Diplôme d'État d'Infirmier - Grade Licence)",
        "missions": [
            "Évaluer l'état de santé du patient et concevoir le plan de soins infirmiers personnalisé",
            "Administrer les thérapeutiques prescrites (injections, perfusions, chimiothérapies, médicaments)",
            "Pratiquer les soins techniques (pansements complexes, sondages, prises de sang, prélèvements)",
            "Surveiller l'évolution des paramètres vitaux et alerter le médecin en cas d'aggravation",
            "Écouter, rassurer et éduquer le patient et ses proches à la gestion de la maladie"
        ],
        "workEnvironment": "Services hospitaliers (médecine, chirurgie, réanimation, gériatrie), cliniques privées, EHPAD, centres de soins et exercice libéral.",
        "typicalDay": [
            {"time": "06:45", "activity": "Relève et transmissions orales avec l'équipe soignante de nuit"},
            {"time": "07:30", "activity": "Tournée des constantes vitales, administration des traitements matinaux et bilans sanguins"},
            {"time": "10:00", "activity": "Réfection de pansements chirurgicaux stériles et pose de perfusions"},
            {"time": "12:00", "activity": "Visite médicale conjointe avec les médecins du service et ajustement des prescriptions"},
            {"time": "14:00", "activity": "Transmission des dossiers informatisés à l'équipe d'après-midi"}
        ],
        "skills": {
            "technical": [
                "Techniques de soins infirmiers et administration sécurisée des médicaments",
                "Surveillance clinique armée (scopes, oxymètres, pompes à perfusion)",
                "Normes d'hygiène hospitalière, asepsie et prévention des infections nosocomiales",
                "Évaluation et prise en charge de la douleur",
                "Transmissions ciblées et tenue du dossier de soins informatisé"
            ],
            "human": [
                "Empathie, douceur et grande capacité d'écoute",
                "Résistance physique et psychologique face à la souffrance",
                "Rigueur absolue dans le calcul de doses médicamenteuses",
                "Esprit d'équipe avec les aides-soignants et médecins"
            ],
            "tools": [
                "Pousse-seringues électriques et pompes volumétriques",
                "Matériel de ponction veineuse et cathéters",
                "Moniteurs multiparamétriques de surveillance",
                "Logiciel de soins infirmiers et traçabilité"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Baccalauréat toutes séries (sciences recommandées)", "desc": "Sélection sur dossier Parcoursup (France) ou concours d'entrée IFSI/ENDSS (Sénégal)."},
                {"step": "Formation en Institut (Bac +3)", "title": "Institut de Formation en Soins Infirmiers (IFSI) / Licence Sciences Infirmières", "desc": "3 années alternant cours théoriques (anatomie, pharmacologie, éthique) et 60 semaines de stages cliniques."}
            ],
            "schools": [
                {"name": "École Nationale de Développement Sanitaire et Social (ENDSS) — Dakar", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Institut de Formation en Sciences Infirmières et Obstétricales (IFSIO) — UCAD", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Instituts de Formation en Soins Infirmiers (IFSI) hospitaliers et universitaires", "country": "France", "scope": "France"}
            ],
            "certifications": ["Diplôme d'État d'Infirmier (DEI)", "Enregistrement auprès de l'Ordre National des Infirmiers"]
        },
        "career": {
            "sectors": ["Hôpital public", "Cliniques privées", "Secteur libéral", "Santé scolaire et au travail"],
            "employerTypes": ["CHU / Centres hospitaliers généraux", "EHPAD et résidences médicalisées", "Cabinets infirmiers libéraux", "Entreprises et ONG"],
            "evolution": "Infirmier en soins généraux ➔ Spécialisation (IADE, IBODE, Puériculteur) ➔ Infirmier en Pratique Avancée (IPA) ➔ Cadre de santé",
            "pros": "Relation d'aide incomparable, diversité extrême des services possibles, employabilité garantie à 100%, passerelles d'évolution.",
            "cons": "Horaires décalés (3x8, travail de nuit, week-ends et jours fériés), pénibilité physique (manutention de patients), charge émotionnelle."
        },
        "salary": "🇫🇷 France : 2 000 - 3 400 € net/mois selon ancienneté et secteur • 🇸🇳 Sénégal : 180 000 - 550 000 FCFA net/mois (public à privé)",
        "saviezVous": {
            "fait": "Les infirmiers constituent la profession de santé la plus nombreuse au monde, représentant plus de la moitié de l'ensemble du personnel de santé mondial selon l'OMS.",
            "pourquoi": "Ils sont présents 24h/24 au chevet du patient, là où les autres soignants n'interviennent que ponctuellement."
        },
        "sources": [
            {"organization": "Studyrama", "title": "Fiche métier : Infirmier", "url": "https://www.studyrama.com/formations/fiches-metiers/sante/infirmier", "type": "metier"},
            {"organization": "Ordre National des Infirmiers", "title": "Le référentiel de compétences de l'infirmier", "type": "institutionnel"}
        ],
        "interests": ["soigner-aider", "comprendre-corps-humain"],
        "relatedJobSlugs": ["infirmier-anesthesiste", "infirmier-bloc-operatoire", "infirmier-pratique-avancee", "cadre-sante"]
    },

    # 5. INFIRMIER ANESTHÉSISTE (IADE)
    {
        "id": "infirmier-anesthesiste",
        "slug": "infirmier-anesthesiste",
        "title": "Infirmier Anesthésiste Diplômé d'État (IADE)",
        "aliases": ["IADE", "Infirmier spécialiste d'anesthésie", "Anesthesia Nurse"],
        "icon": "💤",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": ["sante-soins-paramedical", "biologie-chimie"],
        "domain": "Soins Infirmiers & Pratiques Avancées",
        "domainId": "soins-infirmiers",
        "subdomain": "Anesthésie-réanimation (IADE)",
        "shortDescription": "Spécialiste de la narcose et du réveil, l'IADE endort, surveille les constantes vitales au bloc et gère la réanimation per-opératoire aux côtés du médecin anesthésiste.",
        "longDescription": "L'infirmier anesthésiste est un soignant de haute précision. En collaboration étroite avec le médecin anesthésiste-réanimateur (MAR), il prépare les drogues anesthésiques, induit la narcose, intube le patient, maintient la stabilité respiratoire et hémodynamique tout au long de l'opération et assure la prise en charge post-interventionnelle en salle de réveil.",
        "simpleDefinition": "Infirmier spécialisé au bloc opératoire qui gère l'anesthésie du patient, son sommeil et sa surveillance vitale pendant l'opération.",
        "level": "Bac +5 (Diplôme d'État d'Infirmier Anesthésiste - Grade Master)",
        "missions": [
            "Préparer la salle d'intervention, calibrer le respirateur d'anesthésie et doser les hypnotiques, curares et opioïdes",
            "Accueillir le patient au bloc opératoire et le rassurer avant l'induction anesthésique",
            "Réaliser l'intubation trachéale et la pose de voies veineuses périphériques ou artérielles",
            "Surveiller en temps réel la profondeur de l'anesthésie, la tension, le rythme cardiaque et la ventilation",
            "Assurer la prise en charge de la douleur aiguë et la surveillance en Salle de Surveillance Post-Interventionnelle (SSPI)"
        ],
        "workEnvironment": "Blocs opératoires multidisciplinaires, salles de surveillance post-interventionnelle (SSPI), équipes mobiles de SMUR et services d'urgences.",
        "typicalDay": [
            {"time": "07:15", "activity": "Vérification de sécurité obligatoire (check-list anesthésie) du respirateur et des plateaux de drogues"},
            {"time": "08:00", "activity": "Accueil du premier patient, pose du monitorage, induction anesthésique et intubation réussie"},
            {"time": "10:30", "activity": "Surveillance vigilante des constantes pendant l'acte de chirurgie viscérale"},
            {"time": "12:00", "activity": "Extubation sécurisée du patient en fin d'intervention et transfert surveillé en salle de réveil"},
            {"time": "14:00", "activity": "Prise en charge d'une urgence obstétricale (césarienne) sous rachianesthésie"}
        ],
        "skills": {
            "technical": [
                "Pharmacologie poussée des agents anesthésiques et réanimateurs",
                "Maîtrise experte de la gestion des voies aériennes et intubation difficile",
                "Gestion des monitorages hémodynamiques invasifs et gaz du sang",
                "Protocoles d'analgésie post-opératoire et prise en charge des chocs",
                "Utilisation des respirateurs d'anesthésie de dernière génération"
            ],
            "human": [
                "Vigilance ininterrompue et anticipation des moindres déviations physiologiques",
                "Capacité à apaiser immédiatement l'anxiété du patient avant d'être endormi",
                "Sang-froid absolu lors d'une désaturation ou d'une chute tensionnelle brutale",
                "Communication en boucle fermée au sein de l'équipe de bloc"
            ],
            "tools": [
                "Respirateur d'anesthésie (Draeger / GE Healthcare)",
                "Moniteur BIS (indice bispectral pour la profondeur de narcose)",
                "Vidéo-laryngoscope et fibroscopes d'intubation",
                "Pousse-seringues de target-controlled infusion (AIVOC)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Diplôme d'IDE (Bac +3)", "title": "Obtention du Diplôme d'État d'Infirmier", "desc": "Formation initiale en soins généraux."},
                {"step": "Expérience préalable (2 ans)", "title": "Pratique clinique en soins généraux", "desc": "Exigence de 2 années d'exercice hospitalier minimum."},
                {"step": "Concours et École IADE (Bac +5)", "title": "Formation de spécialité de 24 mois en école IADE", "desc": "Validation du Diplôme d'État d'IADE conférant le grade de Master universitaire."}
            ],
            "schools": [
                {"name": "Centre de Formation des IADE — CHU de Fann / Faculté de Médecine Dakar", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Écoles d'IADE adossées aux CHU français (Paris, Bordeaux, Lille, Marseille)", "country": "France", "scope": "France"}
            ],
            "certifications": ["Diplôme d'État d'Infirmier Anesthésiste (Grade Master)", "AFGSU spécialisée"]
        },
        "career": {
            "sectors": ["Chirurgie hospitalière", "Réanimation", "SMUR et médecine de catastrophe"],
            "employerTypes": ["Hôpitaux publics (CHU, CHR)", "Cliniques chirurgicales privées", "Centres de lutte contre le cancer", "Services de santé des armées"],
            "evolution": "IADE clinicien de bloc ➔ IADE référent douleur / bloc ➔ Cadre de santé IADE ➔ Directeur d'école d'anesthésie",
            "pros": "Niveau d'expertise technique et d'autonomie très valorisé, reconnaissance au bloc, rémunération supérieure aux infirmiers généraux.",
            "cons": "Responsabilité vitale directe, stress aigu lors des urgences per-opératoires, gardes d'anesthésie."
        },
        "salary": "🇫🇷 France : 2 800 - 4 600 € net/mois • 🇸🇳 Sénégal : 350 000 - 900 000 FCFA net/mois",
        "saviezVous": {
            "fait": "L'IADE est le seul professionnel paramédical habilité en France à pratiquer des actes d'anesthésie générale et locorégionale sous la responsabilité d'un médecin.",
            "pourquoi": "Ses 2 années supplémentaires de formation théorique et pratique intensive lui confèrent une maîtrise des mécanismes de défaillance respiratoire et cardiaque."
        },
        "sources": [
            {"organization": "Studyrama", "title": "Fiche métier : Infirmier anesthésiste", "url": "https://www.studyrama.com/formations/fiches-metiers/sante/infirmier-anesthesiste", "type": "metier"},
            {"organization": "Syndicat National des Infirmiers Anesthésistes (SNIA)", "title": "Statut et exercice de l'IADE", "type": "institutionnel"}
        ],
        "interests": ["soigner-aider", "comprendre-corps-humain", "resoudre-problemes"],
        "relatedJobSlugs": ["infirmier-diplome-etat", "infirmier-bloc-operatoire", "medecin-urgentiste", "chirurgien"]
    },

    # 6. INFIRMIER DE BLOC OPÉRATOIRE (IBODE)
    {
        "id": "infirmier-bloc-operatoire",
        "slug": "infirmier-bloc-operatoire",
        "title": "Infirmier de Bloc Opératoire Diplômé d'État (IBODE)",
        "aliases": ["IBODE", "Instrumentiste de bloc", "Infirmier circulant"],
        "icon": "🏥",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": ["sante-soins-paramedical", "biologie-chimie"],
        "domain": "Soins Infirmiers & Pratiques Avancées",
        "domainId": "soins-infirmiers",
        "subdomain": "Bloc opératoire (IBODE)",
        "shortDescription": "Garant absolu de l'asepsie et du bon déroulement technique de la chirurgie, l'IBODE prépare les instruments, assiste le chirurgien et veille à la sécurité du patient.",
        "longDescription": "L'IBODE maîtrise l'environnement ultra-technologique du bloc opératoire. En tant qu'instrumentiste, circulant ou aide opératoire, il anticipe chaque geste du chirurgien, lui passe avec exactitude les pinces, ciseaux et écarteurs, contrôle le compte des compresses et instruments avant fermeture pour éviter tout oubli corporel et garantit l'asepsie environnementale.",
        "simpleDefinition": "Infirmier spécialisé qui prépare les instruments chirurgicaux et assiste directement le chirurgien pendant l'opération.",
        "level": "Bac +5 (Diplôme d'État d'Infirmier de Bloc Opératoire - Grade Master)",
        "missions": [
            "Organiser la salle d'opération et vérifier le fonctionnement des dispositifs médicaux implantables et moteurs",
            "Assurer l'habillage stérile de l'équipe et préparer les tables d'instruments en fonction du temps opératoire",
            "Anticiper et tendre les instruments au chirurgien dans le bon ordre pendant l'intervention",
            "Effectuer le comptage rigoureux et contradictoire des compresses, aiguilles et instruments avant fermeture",
            "Gérer la traçabilité des pièces opératoires destinées aux analyses anatomopathologiques"
        ],
        "workEnvironment": "Bloc opératoire stérile en milieu hospitalier ou clinique, service de stérilisation centrale.",
        "typicalDay": [
            {"time": "07:30", "activity": "Vérification des boîtes d'instruments stériles pour le programme de chirurgie orthopédique de la matinée"},
            {"time": "08:15", "activity": "Lavage chirurgical des mains, habillage en casaque stérile et installation de la table d'instrumentation"},
            {"time": "09:00", "activity": "Assistance active au chirurgien lors de la pose d'une prothèse totale de hanche"},
            {"time": "11:30", "activity": "Comptage final des textiles, pansement stérile et transfert du patient vers la salle de réveil"},
            {"time": "14:00", "activity": "Intervention de coelioscopie digestive et gestion de la colonne vidéo"}
        ],
        "skills": {
            "technical": [
                "Connaissance exhaustive de l'instrumentation chirurgicale de pointe",
                "Règles strictes d'asepsie, de stérilisation et de circulation au bloc",
                "Gestes d'aide opératoire (hémostase, aspiration, écartement des tissus)",
                "Normes de traçabilité des implants et greffons",
                "Techniques de comptage de sécurité per-opératoire"
            ],
            "human": [
                "Anticipation réflexe des besoins du chirurgien sans qu'il ait à parler",
                "Concentration extrême et endurance physique en position debout",
                "Capacité à réagir instantanément face à un saignement inattendu",
                "Rigueur intraitable sur les protocoles d'hygiène"
            ],
            "tools": [
                "Boîtes d'instruments chirurgicaux spécialisés",
                "Bistouri électrique et aspirateurs chirurgicaux",
                "Systèmes d'imagerie per-opératoire et scialytiques",
                "Logiciel de traçabilité des dispositifs médicaux au bloc"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Diplôme d'IDE (Bac +3)", "title": "Diplôme d'État d'Infirmier", "desc": "Formation initiale socle."},
                {"step": "Pratique professionnelle", "title": "Exercice infirmier", "desc": "Expérience préalable en milieu de soins."},
                {"step": "École d'IBODE (Bac +5)", "title": "Formation de spécialité IBODE de 18 à 24 mois", "desc": "Stages intensifs dans toutes les spécialités chirurgicales et grade Master."}
            ],
            "schools": [
                {"name": "ENDSS / Département de Spécialités Paramédicales — Dakar", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Écoles d'IBODE agréées en France (CHU de Paris, Lyon, Lille, Marseille)", "country": "France", "scope": "France"}
            ],
            "certifications": ["Diplôme d'État d'IBODE (Grade Master)", "Ordre des Infirmiers"]
        },
        "career": {
            "sectors": ["Bloc opératoire hospitalier", "Cliniques chirurgicales", "Stérilisation centrale"],
            "employerTypes": ["Établissements de santé publics et privés", "Centres hospitaliers spécialisés"],
            "evolution": "IBODE instrumentiste ➔ IBODE aide opératoire exclusif ➔ Cadre de santé de bloc opératoire ➔ Coordinateur général des blocs",
            "pros": "Rôle central au bloc, travail en équipe soudée, environnement technologique de pointe, valorisation statutaire Master.",
            "cons": "Position debout immobile prolongée pouvant causer des troubles musculosquelettiques, port du masque et des gants toute la journée."
        },
        "salary": "🇫🇷 France : 2 400 - 3 900 € net/mois • 🇸🇳 Sénégal : 300 000 - 750 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Le comptage des compresses et des instruments est une procédure de sécurité légale si critique qu'aucune incision ne peut être refermée sans l'autorisation expresse de l'IBODE attestant que le compte est exact.",
            "pourquoi": "Cette règle protège le patient contre le risque rarissime mais dramatique d'oubli de corps étranger."
        },
        "sources": [
            {"organization": "Studyrama", "title": "Fiche métier : Infirmier de bloc opératoire", "url": "https://www.studyrama.com/formations/fiches-metiers/sante/infirmier-de-bloc-operatoire-ibode", "type": "metier"},
            {"organization": "Association des Enseignants et Cadres des Écoles d'IBODE (AEEIBO)", "title": "Référentiel de formation IBODE", "type": "institutionnel"}
        ],
        "interests": ["soigner-aider", "construire-fabriquer", "comprendre-corps-humain"],
        "relatedJobSlugs": ["infirmier-diplome-etat", "infirmier-anesthesiste", "chirurgien", "agent-sterilisation"]
    },

    # 7. INFIRMIER EN PRATIQUE AVANCÉE (IPA)
    {
        "id": "infirmier-pratique-avancee",
        "slug": "infirmier-pratique-avancee",
        "title": "Infirmier en Pratique Avancée (IPA)",
        "aliases": ["IPA", "Infirmier praticien", "Advanced Practice Nurse"],
        "icon": "📋",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": ["sante-soins-paramedical", "biologie-chimie"],
        "domain": "Soins Infirmiers & Pratiques Avancées",
        "domainId": "soins-infirmiers",
        "subdomain": "Pratique avancée (IPA)",
        "shortDescription": "Métier d'avenir à la frontière entre soins infirmiers et médecine, l'IPA réalise des consultations de suivi, prescrit des examens et ajuste les traitements de pathologies ciblées.",
        "longDescription": "L'Infirmier en Pratique Avancée (IPA) représente une révolution dans l'organisation des soins. Titulaire d'un diplôme d'État de niveau Bac +5 (Master), il prend en charge des patients confiés par les médecins, notamment dans le suivi des maladies chroniques stabilisées, l'oncologie, la néphrologie, la psychiatrie ou la santé communautaire. Il prescrit des examens de biologie médicale, renouvelle et adapte les traitements médicamenteux.",
        "simpleDefinition": "Infirmier expert de niveau Master qui assure des consultations médicales avancées et ajuste les traitements sous la responsabilité d'un médecin.",
        "level": "Bac +5 (Diplôme d'État d'Infirmier en Pratique Avancée - Grade Master)",
        "missions": [
            "Conduire des consultations d'évaluation clinique approfondie auprès de patients atteints de maladies chroniques",
            "Prescrire des examens complémentaires de biologie médicale et d'imagerie",
            "Renouveler et adapter les posologies des thérapeutiques médicamenteuses ciblées",
            "Mener des actions d'éducation thérapeutique du patient (ETP) et de prévention",
            "Coordonner les parcours de soins complexes entre la ville et l'hôpital"
        ],
        "workEnvironment": "Maisons de santé pluriprofessionnelles (MSP), centres hospitaliers (services d'oncologie, néphrologie, cardiologie), cabinets médicaux libéraux.",
        "typicalDay": [
            {"time": "08:30", "activity": "Consultation de suivi d'un patient diabétique et insuffisant cardiaque : examen clinique et adaptation de posologie"},
            {"time": "10:30", "activity": "Prescription d'un bilan rénal complet et d'une échographie de contrôle pour un patient hypertendu"},
            {"time": "13:30", "activity": "Atelier collectif d'éducation thérapeutique pour des patients sous anticoagulants"},
            {"time": "15:30", "activity": "Réunion de concertation pluriprofessionnelle avec les médecins généralistes du cabinet"},
            {"time": "17:30", "activity": "Synthèse des dossiers et télé-expertise avec le cardiologue référent"}
        ],
        "skills": {
            "technical": [
                "Examen clinique complet et sémiologie médicale avancée",
                "Prescription réglementée d'examens biologiques et de médicaments",
                "Éducation thérapeutique du patient et entretien motivationnel",
                "Gestion des parcours de soins complexes en équipe pluriprofessionnelle",
                "Analyse critique d'articles scientifiques et pratique fondée sur les preuves (EBP)"
            ],
            "human": [
                "Autonomie décisionnelle et rigueur d'analyse clinique",
                "Pédagogie bienveillante pour responsabiliser le patient",
                "Capacité de collaboration partenariale d'égal à égal avec les médecins",
                "Sens aigu des limites de ses compétences pour référer en temps voulu"
            ],
            "tools": [
                "Logiciel de dossier médical partagé et d'aide à la prescription",
                "Matériel de consultation clinique (stéthoscope, tensiomètre, saturomètre)",
                "Outils validés d'évaluation de la qualité de vie et de la douleur"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Diplôme d'IDE (Bac +3)", "title": "Diplôme d'État d'Infirmier", "desc": "Formation de base."},
                {"step": "Exercice professionnel (3 ans)", "title": "3 années de pratique comme infirmier en soins généraux", "desc": "Condition d'admission indispensable."},
                {"step": "Master IPA (Bac +5)", "title": "Diplôme d'État d'IPA (Universités de Médecine)", "desc": "2 années de Master universitaire avec spécialisation (pathologies chroniques, oncologie, psychiatrie, néphrologie, urgences)."}
            ],
            "schools": [
                {"name": "UFR de Santé et Facultés de Médecine de France (Sorbonne, Paris Cité, Marseille, Bordeaux)", "country": "France", "scope": "France"},
                {"name": "Programmes de Master en Pratiques Avancées Infirmières en Afrique de l'Ouest (UCAD / IPD)", "country": "Sénégal / Afrique", "scope": "Afrique"}
            ],
            "certifications": ["Diplôme d'État d'Infirmier en Pratique Avancée (Grade Master)", "Ordre National des Infirmiers"]
        },
        "career": {
            "sectors": ["Médecine de ville", "Soins de premiers recours", "Cancérologie et néphrologie hospitalière"],
            "employerTypes": ["Maisons de santé et centres de santé", "Établissements publics de santé", "Exercice libéral conventionné"],
            "evolution": "IPA clinicien ➔ IPA coordonnateur de réseau de soins ➔ Enseignant-chercheur en sciences infirmières (Doctorat) ➔ Consultant en santé publique",
            "pros": "Grande autonomie clinique, consultations de 30 à 45 minutes permettant un accompagnement humain approfondi, métier pionnier très demandé pour lutter contre les déserts médicaux.",
            "cons": "Métier récent nécessitant parfois de faire reconnaître son périmètre d'action auprès de certains médecins ou patients habitués au modèle traditionnel."
        },
        "salary": "🇫🇷 France : 2 500 - 4 200 € net/mois selon statut • 🇸🇳 Sénégal : 350 000 - 850 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Le modèle de l'IPA s'inspire directement des 'Nurse Practitioners' anglo-saxons qui ont prouvé depuis plus de 40 ans qu'un suivi paramédical avancé diminue considérablement les réhospitalisations des malades chroniques.",
            "pourquoi": "Grâce à une écoute prolongée et un suivi régulier, les alertes précoces sont détectées avant la crise aiguë."
        },
        "sources": [
            {"organization": "Studyrama", "title": "Fiche métier : Infirmier en pratique avancée", "url": "https://www.studyrama.com/formations/fiches-metiers/sante/infirmier-en-pratique-avancee", "type": "metier"},
            {"organization": "Ministère de la Santé", "title": "La pratique avancée infirmière : cadre et compétences", "type": "institutionnel"}
        ],
        "interests": ["soigner-aider", "comprendre-corps-humain", "resoudre-problemes"],
        "relatedJobSlugs": ["infirmier-diplome-etat", "medecin-generaliste", "cadre-sante", "puériculteur"]
    },

    # 8. CHIRURGIEN-DENTISTE
    {
        "id": "chirurgien-dentiste",
        "slug": "chirurgien-dentiste",
        "title": "Chirurgien-Dentiste / Docteur en Chirurgie Dentaire",
        "aliases": ["Dentiste", "Odontologiste", "Praticien de l'art dentaire"],
        "icon": "🦷",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": ["sante-soins-paramedical", "biologie-chimie"],
        "domain": "Santé Dentaire & Odontologie",
        "domainId": "sante-dentaire",
        "subdomain": "Chirurgie dentaire",
        "shortDescription": "Spécialiste de la santé bucco-dentaire, le chirurgien-dentiste soigne les caries, réalise détartrages et extractions, pose des couronnes et restaure le sourire.",
        "longDescription": "Le chirurgien-dentiste traite les dents, les gencives et les mâchoires. Il soulage la douleur aiguë de la rage de dent, traite les canaux infectés (endodontie), pose des implants en titane, réalise des greffes gingivales et prévient les affections parodontales. Il allie connaissances médicales pointues, précision mécanique manuelle et sens esthétique du sourire.",
        "simpleDefinition": "Médecin spécialiste de la bouche qui soigne les dents cariées, extrait les dents malades et remplace les dents manquantes.",
        "level": "Bac +6 à Bac +9 (Diplôme d'État de Docteur en Chirurgie Dentaire)",
        "missions": [
            "Diagnostiquer les affections bucco-dentaires à l'aide d'examens cliniques et de radiographies panoramiques 3D",
            "Soigner les caries et dévitaliser les dents atteintes en obturant les canaux radiculaires",
            "Poser des prothèses fixes ou amovibles (couronnes, inlays, bridges, prothèses complètes)",
            "Pratiquer des interventions chirurgicales : extractions complexes de dents de sagesse, pose d'implants",
            "Conseiller les patients sur l'hygiène bucco-dentaire et prescrire les antibiotiques et antalgiques adaptés"
        ],
        "workEnvironment": "Cabinet dentaire libéral individuel ou de groupe, centres de santé mutualistes, services d'odontologie hospitaliers.",
        "typicalDay": [
            {"time": "08:30", "activity": "Accueil d'une urgence matinale : pulpite aiguë douloureuse et dévitalisation d'urgence"},
            {"time": "10:00", "activity": "Séance de pose d'un implant dentaire sous anesthésie locale et contrôle radiologique immédiat"},
            {"time": "11:30", "activity": "Prise d'empreinte optique 3D intra-orale pour la fabrication d'une couronne céramique"},
            {"time": "14:30", "activity": "Détartrages ultrasoniques, bilans parodontaux et soins conservateurs chez des adolescents"},
            {"time": "17:00", "activity": "Scellement définitif d'un bridge et vérification millimétrique de l'occlusion"}
        ],
        "skills": {
            "technical": [
                "Techniques de soins conservateurs (composites, inlays/onlays) et endodontie",
                "Chirurgie buccale et implantologie ostéo-intégrée",
                "Radiologie dentaire numérique (panoramique, Cone Beam CT 3D)",
                "Prothèse dentaire conjointe et adjointe",
                "Anesthésie locale et locorégionale de la sphère faciale"
            ],
            "human": [
                "Habileté gestuelle millimétrique et minutie extrême",
                "Capacité à apaiser la phobie du dentiste et instaurer la détente",
                "Sens esthétique affiné de l'harmonie du visage et du sourire",
                "Rigueur déontologique et écoute patient"
            ],
            "tools": [
                "Fauteuil dentaire avec turbine, contre-angle et micro-moteur",
                "Caméra d'empreinte optique intra-orale 3D",
                "Scanner Cone Beam 3D et radio numérique",
                "Laser dentaire et localisateur d'apex pour canaux"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Baccalauréat scientifique S", "desc": "Excellentes notes requises."},
                {"step": "Premier cycle (Bac +1 à +3)", "title": "PASS / L.AS (France) ou Année commune FMPOS (Sénégal)", "desc": "Accès très sélectif aux études d'odontologie."},
                {"step": "Deuxième & Troisième cycle (Bac +4 à +6)", "title": "Études odontologiques et internat qualifiant éventuel", "desc": "Stages cliniques quotidiens sur fauteuil, soutenance de thèse d'exercice de Docteur en Chirurgie Dentaire."}
            ],
            "schools": [
                {"name": "FMPOS — UCAD Dakar (Département d'Odontologie)", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "UFR d'Odontologie des universités françaises (Montpellier, Paris, Bordeaux, Strasbourg)", "country": "France", "scope": "France"}
            ],
            "certifications": ["Diplôme d'État de Docteur en Chirurgie Dentaire", "Inscription obligatoire à l'Ordre National des Chirurgiens-Dentistes"]
        },
        "career": {
            "sectors": ["Dentisterie libérale", "Santé hospitalière", "Enseignement universitaire"],
            "employerTypes": ["Cabinets dentaires privés", "Centres mutualistes", "Services d'odontologie des CHU"],
            "evolution": "Chirurgien-dentiste collaborateur ➔ Titulaire de son propre cabinet ➔ Spécialisation en orthodontie ou chirurgie orale ➔ Enseignant universitaire",
            "pros": "Indépendance professionnelle complète, profession très rémunératrice, impact direct sur le soulagement de la douleur et l'estime de soi des patients.",
            "cons": "Coût d'installation très élevé pour équiper un cabinet (fauteuil, radios, stérilisation), posture penchée fatigante pour le dos et les cervicales."
        },
        "salary": "🇫🇷 France : 4 500 - 11 000 € net/mois en libéral • 🇸🇳 Sénégal : 450 000 - 2 500 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Grâce aux caméras intra-orales 3D et aux usineuses CFAO (Conception et Fabrication Assistées par Ordinateur), un dentiste moderne peut concevoir et poser une couronne en céramique personnalisée en une seule séance d'une heure !",
            "pourquoi": "L'empreinte physique pâteuse traditionnelle est remplacée par un fichier numérique envoyé directement à la micro-fraiseuse."
        },
        "sources": [
            {"organization": "Studyrama", "title": "Fiche métier : Chirurgien-dentiste", "url": "https://www.studyrama.com/formations/fiches-metiers/sante/chirurgien-dentiste", "type": "metier"},
            {"organization": "Conseil National de l'Ordre des Chirurgiens-Dentistes", "title": "L'exercice de l'art dentaire", "type": "institutionnel"}
        ],
        "interests": ["soigner-aider", "construire-fabriquer", "comprendre-corps-humain"],
        "relatedJobSlugs": ["prothesiste-dentaire", "assistant-dentaire", "chirurgien", "medecin-generaliste"]
    },

    # 9. ASSISTANT DENTAIRE
    {
        "id": "assistant-dentaire",
        "slug": "assistant-dentaire",
        "title": "Assistant / Assistante Dentaire",
        "aliases": ["Aide-dentiste", "Secrétaire dentaire", "Assistant médico-technique dentaire"],
        "icon": "🦷",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": ["sante-soins-paramedical", "biologie-chimie"],
        "domain": "Santé Dentaire & Odontologie",
        "domainId": "sante-dentaire",
        "subdomain": "Assistance dentaire",
        "shortDescription": "Bras droit indispensable du chirurgien-dentiste, l'assistant dentaire gère la stérilisation, assiste au fauteuil à 4 mains et prend en charge l'accueil des patients.",
        "longDescription": "L'assistant dentaire qualifié assure la triple fonction médico-technique, logistique et relationnelle du cabinet dentaire. Il prépare le plateau d'instruments pour chaque soin, assiste le praticien en aspirant la salive et en tendant les instruments, désinfecte scrupuleusement la salle après chaque patient, stérilise le matériel en autoclave et gère les rendez-vous et stocks de consommables.",
        "simpleDefinition": "Professionnel qui seconde le dentiste en lui tendant les instruments au fauteuil et en assurant la stérilisation parfaite du matériel.",
        "level": "Bac à Bac +1 (Titre d'Assistant Dentaire qualifié)",
        "missions": [
            "Accueillir les patients, constituer les dossiers informatisés et les installer confortablement au fauteuil",
            "Assister le chirurgien-dentiste au fauteuil (technique du travail à quatre mains : aspiration chirurgicale, passage d'instruments)",
            "Préparer les ciments, résines et matériaux d'empreinte",
            "Nettoyer, thermo-désinfecter, ensacher et stériliser les instruments à l'autoclave avec traçabilité",
            "Gérer les stocks de matériel dentaire et coordonner les envois avec le prothésiste dentaire"
        ],
        "workEnvironment": "Cabinets dentaires libéraux, centres de santé dentaire mutualistes, services hospitaliers d'odontologie.",
        "typicalDay": [
            {"time": "08:00", "activity": "Ouverture du cabinet, mise en route des compresseurs, vérification de l'eau distillée et des autoclaves"},
            {"time": "08:30", "activity": "Accueil du premier patient, installation du bavoir protecteur et préparation du plateau de soins"},
            {"time": "09:30", "activity": "Assistance au fauteuil pendant une pose d'implant : aspiration chirurgicale et éclairage du champ"},
            {"time": "12:00", "activity": "Cycle de stérilisation des turbines et instruments et vérification des tests de vapeur"},
            {"time": "14:30", "activity": "Accueil téléphonique des urgences et commande de fournitures (gants, composites)"}
        ],
        "skills": {
            "technical": [
                "Protocoles stricts de décontamination, désinfection et stérilisation (autoclave classe B)",
                "Assistance opératoire 'à quatre mains'",
                "Connaissance des instruments dentaires et des matériaux d'obturation",
                "Gestion du dossier patient informatisé et de la télétransmission",
                "Règles de radioprotection au cabinet"
            ],
            "human": [
                "Capacité d'accueil chaleureuse pour détendre les patients anxieux",
                "Sens aigu de l'anticipation et synchronisation avec le praticien",
                "Discrétion professionnelle absolue et respect du secret médical",
                "Excellente organisation et rigueur d'hygiène"
            ],
            "tools": [
                "Autoclave à vapeur d'eau avec imprimante de traçabilité",
                "Thermo-désinfecteur et bacs à ultrasons",
                "Aspirateurs chirurgicaux haute vélocité",
                "Logiciel de gestion de cabinet dentaire (Julie, Visiodent, etc.)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Niveau requis", "title": "Baccalauréat ou niveau équivalent", "desc": "Bonne expression et sens du contact."},
                {"step": "Formation en alternance (18 mois)", "title": "Titre certifié d'Assistant Dentaire (CNQAOS)", "desc": "Contrat de professionnalisation en alternance : 1 jour en cours théoriques, 4 jours en cabinet dentaire."}
            ],
            "schools": [
                {"name": "Centres de formation CNQAOS / AFPPCD en France", "country": "France", "scope": "France"},
                {"name": "Écoles de formation aux métiers de santé et cabinets partenaires — Dakar", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Titre d'Assistant Dentaire qualifié (reconnu par la Convention Collective Nationale des Cabinets Dentaires)"]
        },
        "career": {
            "sectors": ["Odontologie privée", "Centres mutualistes", "Cabinets d'orthodontie exclusive"],
            "employerTypes": ["Chirurgiens-dentistes libéraux", "Centres de santé", "Polycliniques dentaires"],
            "evolution": "Assistant dentaire ➔ Assistant dentaire d'implantologie ou d'orthodontie ➔ Assistant responsable de cabinet dentaire (management) ➔ Formateur",
            "pros": "Métier très dynamique sans routine, ambiance de cabinet souvent soudée, horaires de jour réguliers sans gardes de nuit.",
            "cons": "Exposition continue aux bruits de turbines et aux projections biologiques nécessitant un port rigoureux d'EPI."
        },
        "salary": "🇫🇷 France : 1 650 - 2 400 € net/mois • 🇸🇳 Sénégal : 120 000 - 300 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Un travail à quatre mains efficace entre le dentiste et son assistant réduit la durée d'une intervention chirurgicale de 30% tout en diminuant la fatigue du patient.",
            "pourquoi": "Le dentiste n'a jamais à quitter des yeux le champ opératoire buccal pour chercher un instrument."
        },
        "sources": [
            {"organization": "Studyrama", "title": "Fiche métier : Assistant dentaire", "url": "https://www.studyrama.com/formations/fiches-metiers/sante/assistant-dentaire", "type": "metier"},
            {"organization": "Commission Nationale Paritaire de l'Emploi et de la Formation Professionnelle (CPNE-FP) Dentaire", "title": "Référentiel de formation assistant dentaire", "type": "institutionnel"}
        ],
        "interests": ["soigner-aider", "construire-fabriquer"],
        "relatedJobSlugs": ["chirurgien-dentiste", "prothesiste-dentaire", "secretaire-medical", "infirmier-diplome-etat"]
    },

    # 10. PROTHÉSISTE DENTAIRE
    {
        "id": "prothesiste-dentaire",
        "slug": "prothesiste-dentaire",
        "title": "Prothésiste Dentaire / Spécialiste CFAO Dentaire",
        "aliases": ["Technicien de laboratoire dentaire", "Céramiste dentaire", "Modeleur dentaire"],
        "icon": "🦷",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": ["sante-soins-paramedical", "biologie-chimie", "industrie-mecanique"],
        "domain": "Santé Dentaire & Odontologie",
        "domainId": "sante-dentaire",
        "subdomain": "Prothèse dentaire & CFAO",
        "shortDescription": "Artisan et technicien de haute précision, le prothésiste conçoit et fabrique des dents artificielles, couronnes céramiques, bridges et appareils sur mesure.",
        "longDescription": "Le prothésiste dentaire travaille dans son propre laboratoire en étroite collaboration avec les dentistes. À partir des empreintes réelles ou numériques 3D envoyées par le cabinet, il sculpte, fraise, cuit la céramique et polit des dispositifs médicaux sur mesure : couronnes céramo-métalliques, facettes ultra-fines, implants et appareils amovibles. Le métier a été profondément révolutionné par la CFAO (conception et fabrication assistées par ordinateur) et l'impression 3D métallique et résine.",
        "simpleDefinition": "Technicien qui fabrique en laboratoire les fausses dents, couronnes et appareils dentaires commandés par les dentistes.",
        "level": "Bac Pro à Bac +3 (BTS Prothésiste Dentaire / Licence pro)",
        "missions": [
            "Réceptionner les empreintes dentaires (plâtre ou fichiers numériques 3D) et analyser les prescriptions du dentiste",
            "Modéliser sur logiciel de CAO les couronnes, armatures de bridges et gouttières occlusales",
            "Usiner les prothèses par commande numérique (fraiseuses 5 axes) ou par impression 3D résine et métal",
            "Monter et cuire la céramique dentaire couche par couche pour reproduire fidèlement la translucidité naturelle de l'émail",
            "Contrôler l'adaptation mécanique et la conformité aux normes médicales européennes"
        ],
        "workEnvironment": "Laboratoire de prothèse dentaire indépendant, laboratoire intégré en clinique ou en centre de fabrication industrielle CFAO.",
        "typicalDay": [
            {"time": "08:00", "activity": "Téléchargement des fichiers STL d'empreintes numériques reçus des cabinets partenaires"},
            {"time": "09:00", "activity": "Modélisation 3D d'un bridge de 3 éléments sous logiciel de CAO dentaire (Exocad)"},
            {"time": "11:00", "activity": "Lancement de l'usinage d'un bloc de zircone multicouche sur fraiseuse numérique"},
            {"time": "14:00", "activity": "Travail minutieux au pinceau : stratification céramique d'une incisive centrale pour imiter la teinte naturelle"},
            {"time": "16:30", "activity": "Cuisson au four à céramique sous vide et glaçage final avant emballage stérile"}
        ],
        "skills": {
            "technical": [
                "Maîtrise des logiciels de CAO dentaire (Exocad, 3Shape Dental Designer)",
                "Morphologie dentaire et règles d'occlusion biomécanique",
                "Stratification céramique, maquillage et cuisson sous vide",
                "Connaissance des matériaux biomédicaux (zircone, titane, chrome-cobalt, résines)",
                "Pilotage de fraiseuses d'usinage et d'imprimantes 3D"
            ],
            "human": [
                "Sens artistique et œil aiguisé pour les nuances de teintes et la translucidité",
                "Patience infinie et minutie d'orfèvre dans le geste manuel",
                "Rigueur dimensionnelle au micron près",
                "Capacité d'écoute et de dialogue technique avec les chirurgiens-dentistes"
            ],
            "tools": [
                "Four à céramique programmable sous vide",
                "Micro-moteur de laboratoire et fraises diamantées",
                "Logiciel CAO Exocad ou 3Shape",
                "Fraiseuse d'usinage dentaire 5 axes et imprimante 3D résine"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat (Bac Pro)", "title": "Bac Pro Prothèse Dentaire (3 ans)", "desc": "Bases pratiques de sculpture en cire, métallurgie et plâtre."},
                {"step": "Formation supérieure (Bac +2 à +3)", "title": "BTS Prothésiste Dentaire / Licence professionnelle CFAO Dentaire", "desc": "Perfectionnement en céramique esthétique, implantologie et CFAO numérique."}
            ],
            "schools": [
                {"name": "Centres de formation et lycées techniques de prothèse dentaire en France (Paris, Marseille, Lyon)", "country": "France", "scope": "France"},
                {"name": "Instituts de formation professionnelle dentaire — Dakar (Sénégal)", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["BTS Prothésiste Dentaire", "Titre de Brevet de Maîtrise (BM) Prothésiste Dentaire"]
        },
        "career": {
            "sectors": ["Artisanat médical", "Laboratoires CFAO dentaire", "Industrie biomédicale dentaire"],
            "employerTypes": ["Laboratoires de prothèse artisanaux", "Grands centres d'usinage industriels", "Cliniques dentaires privées"],
            "evolution": "Prothésiste dentaire technicien ➔ Céramiste expert ➔ Chef de laboratoire ➔ Propriétaire-dirigeant de son propre laboratoire",
            "pros": "Mariage parfait entre artisanat d'art et technologies 3D de pointe, possibilité de créer son entreprise, aucun contact direct contraignant avec la douleur des patients.",
            "cons": "Délais de livraison serrés imposés par les plannings opératoires des dentistes, sédentarité au poste de travail."
        },
        "salary": "🇫🇷 France : 1 900 - 3 800 € net/mois (supérieur pour un chef de laboratoire installé) • 🇸🇳 Sénégal : 180 000 - 600 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Aucune dent humaine n'a une couleur uniforme : elle est plus saturée à la racine, plus lumineuse au milieu et translucide au bord libre. Le prothésiste doit superposer jusqu'à 8 couches de poudres céramiques différentes pour reproduire cette illusion naturelle parfaite !",
            "pourquoi": "L'émail et la dentine ont des indices de réfraction lumineuse complexes qui défient la simple coloration monochrome."
        },
        "sources": [
            {"organization": "Studyrama", "title": "Fiche métier : Prothésiste dentaire", "url": "https://www.studyrama.com/formations/fiches-metiers/sante/prothesiste-dentaire", "type": "metier"},
            {"organization": "Union Nationale des Patronats de Prothèse Dentaire (UNPPD)", "title": "Le métier de prothésiste dentaire et la transition numérique", "type": "institutionnel"}
        ],
        "interests": ["construire-fabriquer", "creer-designer", "soigner-aider"],
        "relatedJobSlugs": ["chirurgien-dentiste", "assistant-dentaire", "technicien-laboratoire"]
    }
]

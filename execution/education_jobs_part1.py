"""
DONNÉES OFFICIELLES ENSEIGNEMENT, ÉDUCATION & FORMATION (PARTIE 1)
Domaines d'Excellence & Fiches Métiers 1 à 10
Source Principale : Studyrama (https://www.studyrama.com/formations/fiches-metiers/enseignement)
Double contextualisation : France (€) / Sénégal (FCFA)
"""

DOMAINS = [
    {
        "id": "enseignement-primaire",
        "name": "Enseignement Primaire & Petite Enfance",
        "icon": "🏫",
        "order": 1,
        "chainStage": "Apprentissages Fondamentaux & Éveil",
        "description": "Accompagner les enfants de 2 à 11 ans dans l'acquisition du langage, de la lecture, de l'écriture, du calcul et de la socialisation citoyenne.",
        "subdomains": [
            "École maternelle & Petite enfance",
            "École élémentaire (CP au CM2)",
            "Adaptation scolaire & RASED",
            "Direction d'école primaire"
        ]
    },
    {
        "id": "enseignement-secondaire",
        "name": "Enseignement Secondaire (Général, Technologique & Professionnel)",
        "icon": "📚",
        "order": 2,
        "chainStage": "Approfondissement Disciplinaire & Orientation",
        "description": "Enseigner des disciplines spécialisées au collège et au lycée, préparer aux brevets, baccalauréats et certifications professionnelles.",
        "subdomains": [
            "Collège & Socle commun",
            "Lycée général & Spécialités",
            "Lycée technologique",
            "Lycée professionnel & Enseignement technique",
            "Éducation physique et sportive (EPS)",
            "Éducation artistique & musicale"
        ]
    },
    {
        "id": "enseignement-superieur-recherche",
        "name": "Enseignement Supérieur, Recherche & Milieu Universitaire",
        "icon": "🎓",
        "order": 3,
        "chainStage": "Formation Académique Supérieure & Recherche Fondamentale",
        "description": "Transmettre les savoirs experts à l'université et dans les grandes écoles, tout en menant des activités de recherche et de publication scientifique.",
        "subdomains": [
            "Université & Enseignement magistral / TD",
            "Grandes écoles & Écoles d'ingénieurs / management",
            "Recherche universitaire & Laboratoires",
            "Doctorat & Post-doctorat"
        ]
    },
    {
        "id": "formation-professionnelle",
        "name": "Formation Professionnelle Continue & Éducation des Adultes",
        "icon": "🧑‍🏫",
        "order": 4,
        "chainStage": "Montée en Compétences & Reconversion",
        "description": "Former les salariés, demandeurs d'emploi et professionnels en reconversion, concevoir des modules sur mesure pour le monde économique.",
        "subdomains": [
            "Formation continue pour adultes",
            "Formation technique en entreprise",
            "Apprentissage & CFA",
            "Ingénierie de certification professionnelle"
        ]
    },
    {
        "id": "pedagogie-ingenierie-edtech",
        "name": "Pédagogie, Ingénierie Pédagogique & Technologies Éducatives (EdTech)",
        "icon": "🧠",
        "order": 5,
        "chainStage": "Conception Didactique & Innovation Numérique",
        "description": "Structurer les parcours d'apprentissage, créer des contenus multimédias, animer les plateformes de formation en ligne et dynamiser les communautés apprenantes.",
        "subdomains": [
            "Ingénierie pédagogique multimodale",
            "Digital Learning & Plateformes LMS",
            "Animation de communautés d'apprenants",
            "Responsabilité pédagogique de programmes"
        ]
    },
    {
        "id": "orientation-vie-scolaire-inclusion",
        "name": "Orientation, Vie Scolaire & Inclusion Éducative",
        "icon": "🧭",
        "order": 6,
        "chainStage": "Accompagnement de l'Élève & Cadre de Vie",
        "description": "Veiller au climat scolaire, accompagner le bien-être des élèves, favoriser l'inclusion des élèves à besoins spécifiques et guider l'orientation.",
        "subdomains": [
            "Vie scolaire & Climat éducatif (CPE, AED)",
            "Inclusion scolaire des élèves en situation de handicap (AESH)",
            "Psychologie de l'Éducation Nationale (PsyEN)",
            "Conseil en orientation scolaire et professionnelle"
        ]
    },
    {
        "id": "direction-administration-inspection",
        "name": "Direction, Encadrement, Administration & Inspection Scolaire",
        "icon": "🏢",
        "order": 7,
        "chainStage": "Gouvernance, Pilotage Institutionnel & Évaluation",
        "description": "Piloter les établissements scolaires et universitaires, animer les équipes pédagogiques, gérer les budgets et contrôler la qualité des enseignements.",
        "subdomains": [
            "Direction d'école & Chefferie d'établissement (Principal, Proviseur)",
            "Inspection académique (IEN, IA-IPR)",
            "Admissions & Recrutement d'étudiants",
            "Administration et gestion scolaire"
        ]
    },
    {
        "id": "sante-social-scolaire",
        "name": "Santé, Prévention & Bien-Être en Milieu Éducatif",
        "icon": "🩺",
        "order": 8,
        "chainStage": "Soins, Prévention Sanitaire & Protection de l'Enfance",
        "description": "Assurer le suivi médical et infirmier des élèves, promouvoir l'éducation à la santé, la prévention des conduites à risque et la protection de l'enfance.",
        "subdomains": [
            "Soins infirmiers scolaires & Urgences",
            "Bilans de santé scolaires & Dépistages",
            "Prévention & Éducation à la santé",
            "Protection de l'enfance & Signalements"
        ]
    }
]

PEDAGOGICAL_PATHWAYS = [
    {
        "id": "voie-concours-enseignants-education-nationale",
        "name": "Voie Concours Enseignement Public (France & Sénégal)",
        "duration": "Bac +5 (Master MEEF ou Master disciplinaire)",
        "icon": "🏛️",
        "description": "Parcours classique d'accès au statut d'enseignant titulaire : Licence (Bac+3), Master MEEF (Métiers de l'Enseignement, de l'Éducation et de la Formation) ou équivalent FASTEF à Dakar, réussite aux concours d'État (CRPE, CAPES, CAPET, CAPLP, CAPEPS, Agrégation) puis année de stage rémunérée avant titularisation.",
        "steps": [
            "Licence disciplinaire (Maths, Lettres, Histoire, SVT, Anglais...) ou Licence Sciences de l'Éducation (3 ans)",
            "Master MEEF 1ère et 2ème année préparant aux épreuves écrites et orales du concours (2 ans)",
            "Réussite au concours de recrutement de la Fonction Publique d'État",
            "Année de stage avec prise en charge de classe et titularisation comme fonctionnaire d'État"
        ]
    },
    {
        "id": "voie-universitaire-doctorat-recherche",
        "name": "Voie Universitaire & Recherche Académique",
        "duration": "Bac +8 (Doctorat) à Bac +10 (HDR)",
        "icon": "🔬",
        "description": "Filière d'excellence pour l'enseignement supérieur : Licence, Master de Recherche, Thèse de Doctorat avec monitorat ou contrat doctoral ATER, qualification CNU (Conseil National des Universités) et recrutement comme Maître de conférences ou Professeur des Universités.",
        "steps": [
            "Licence et Master 2 à finalité recherche dans la discipline choisie (5 ans)",
            "Thèse de doctorat avec travaux de recherche et charges d'enseignement ATER (3 à 4 ans)",
            "Soutenance de thèse, obtention du titre de Docteur et qualification aux fonctions d'enseignant-chercheur",
            "Recrutement par concours sur profil au sein d'une université ou d'une grande école"
        ]
    },
    {
        "id": "voie-formation-professionnelle-adultes",
        "name": "Voie Formation Professionnelle & Métiers de l'EdTech",
        "duration": "Bac +2 à Bac +5 (Titres professionnels & Masters spécialisés)",
        "icon": "💼",
        "description": "Accès direct au secteur de la formation continue et des technologies de l'éducation : Titre professionnel de Formateur Professionnel d'Adultes (FPA, Bac+2/+3), Masters en Ingénierie Pédagogique Multimodale et Digital Learning.",
        "steps": [
            "Expérience professionnelle métier de 3 à 5 ans dans un secteur d'activité",
            "Formation certifiante au Titre Professionnel FPA (Formateur Professionnel d'Adultes) ou Master EdTech",
            "Conception de déroulés pédagogiques, maîtrise des plateformes LMS et animation de groupes d'adultes",
            "Intervention en organismes de formation, CFA, cabinets de conseil ou directions RH en entreprise"
        ]
    }
]

JOBS_PART1 = [
    # 1. Professeur des écoles
    {
        "id": "professeur-des-ecoles",
        "slug": "professeur-des-ecoles",
        "title": "Professeur des Écoles",
        "aliases": [
            "Professeur des ecoles",
            "Professeur des écoles",
            "Enseignant du premier degré",
            "Instituteur / Institutrice",
            "Maître / Maîtresse d'école",
            "Professeur des écoles stagiaire / titulaire"
        ],
        "icon": "👨‍🏫",
        "image": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "lettres-langues-sciences-humaines",
            "sante-soins-paramedical"
        ],
        "domain": "Enseignement Primaire & Petite Enfance",
        "domainId": "enseignement-primaire",
        "subdomain": "École maternelle & École élémentaire (CP au CM2)",
        "sectors": [
            "Éducation Nationale (Premier degré public & privé sous contrat)",
            "Établissements scolaires français à l'étranger (AEFE)",
            "Écoles bilingues et internationales"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/enseignement/professeur-des-ecoles-690",
        "studyramaSource": True,
        "isEmerging": False,
        "level": "Bac +5 (Master MEEF Premier degré + Concours CRPE en France / FASTEF au Sénégal)",
        "salary": "🇫🇷 France : 1 400 € net/mois en stage, 1 800 € à 2 100 € net/mois en début de carrière, jusqu'à 3 200 € net/mois en fin de carrière (Source : Studyrama / Grilles Éducation Nationale) • 🇸🇳 Sénégal : 180 000 à 380 000 FCFA net/mois selon l'échelon et indemnités (Corps des Instituteurs / Fonction Publique)",
        "salaryDetails": {
            "france": {
                "starter": "1 800 € net/mois (1 400 € en 1ère année stage)",
                "experienced": "2 400 € net/mois",
                "senior": "3 200 € net/mois",
                "source": "Studyrama / Ministère de l'Éducation Nationale (France)"
            },
            "senegal": {
                "starter": "180 000 FCFA net/mois",
                "experienced": "270 000 FCFA net/mois",
                "senior": "380 000 FCFA net/mois",
                "source": "Grille de la Fonction Publique Sénégalaise / Ministère de l'Éducation Nationale du Sénégal"
            }
        },
        "targetAudience": "Enfants de 2 à 11 ans (de la toute petite section de maternelle au CM2)",
        "workEnvironment": "Écoles maternelles et élémentaires, classes uniques en milieu rural, groupes scolaires urbains",
        "summary": "Polyvalent par excellence, le professeur des écoles accompagne les enfants de 2 à 11 ans dans leurs premiers apprentissages fondamentaux : lire, écrire, compter, s'exprimer, vivre ensemble et découvrir le monde avec curiosité et méthode.",
        "missions": [
            "Enseigner l'ensemble des matières fondamentales : français, mathématiques, histoire-géographie, sciences et technologie, éducation civique, arts plastiques, musique et EPS.",
            "Concevoir des progressions pédagogiques adaptées au rythme et au niveau de développement de chaque élève.",
            "Repérer précocement les difficultés d'apprentissage, les troubles dys ou les situations de handicap et mettre en œuvre la différenciation pédagogique.",
            "Assurer la relation éducative avec les parents et collaborer avec les équipes du RASED, psychologues scolaires et ATSEM."
        ],
        "activities": [
            "Préparation minutieuse des séances de classe, fiches d'exercices et matériel didactique.",
            "Animation quotidienne des séquences pédagogiques, alternant temps collectifs, travail en ateliers et exercices individuels.",
            "Évaluation formative et sommative des acquisitions des élèves et renseignement du livret scolaire.",
            "Surveillance des récréations, participation aux conseils de maîtres, conseils d'école et réunions de suivi de scolarisation (ESS)."
        ],
        "specialties": [
            "Polyvalence premier degré",
            "Maternelle & Petite enfance",
            "Enseignement spécialisé (ASH / RASED / ULIS)",
            "Écoles bilingues & Langues régionales"
        ],
        "skills": {
            "hard": [
                "Didactique des fondamentaux (lecture, écriture, numération)",
                "Programmes officiels du premier degré (cycles 1, 2 et 3)",
                "Différenciation pédagogique & adaptation aux troubles d'apprentissage",
                "Maîtrise des outils numériques éducatifs pour l'école primaire"
            ],
            "soft": [
                "Patience infinie et écoute bienveillante",
                "Capacité d'adaptation et réactivité face aux imprévus",
                "Autorité naturelle et gestion calme du groupe classe",
                "Excellente communication avec les enfants et leurs familles"
            ],
            "pedagogie": [
                "Construire des séquences didactiques structurées",
                "Expliquer simplement des concepts abstraits",
                "Adapter son rythme au profil de chaque enfant"
            ],
            "communication": [
                "S'exprimer avec clarté et bienveillance",
                "Conduire des entretiens constructifs avec les parents",
                "Collaborer étroitement avec les collègues et partenaires médico-sociaux"
            ],
            "organisation": [
                "Planifier rigoureusement l'emploi du temps de la semaine et de l'année",
                "Gérer le matériel pédagogique et l'agencement de la classe",
                "Tenir à jour le registre d'appel et le livret de compétences"
            ],
            "numerique": [
                "Utiliser le tableau blanc interactif (TBI/VPI)",
                "Exploiter les logiciels éducatifs et applications de lecture",
                "Renseigner les plateformes numériques de suivi scolaire"
            ]
        },
        "qualities": [
            "Patience et empathie",
            "Créativité pédagogique",
            "Sens aigu de l'écoute",
            "Rigueur et organisation",
            "Énergie et dynamisme"
        ],
        "studies": [
            "🇫🇷 France : Bac +5. Licence (générale ou Sciences de l'Éducation) + Master MEEF 1er degré + Réussite au Concours de Recrutement de Professeurs des Écoles (CRPE).",
            "🇸🇳 Sénégal : Bac +2 à Bac +5. Baccalauréat puis entrée sur concours dans un Centre Régional de Formation des Personnels de l'Éducation (CRFPE) pour l'obtention du CEAP puis du CAP, ou Licence + Master à la FASTEF (Faculté des Sciences et Technologies de l'Éducation et de la Formation - UCAD)."
        ],
        "evolution": [
            "Directeur / Directrice d'école primaire",
            "Maître formateur (CAFIPEMF) accueillant et formant les enseignants stagiaires",
            "Conseiller pédagogique de circonscription (CPC)",
            "Enseignant spécialisé en RASED, ULIS école ou IME",
            "Inspecteur de l'Éducation Nationale (IEN)"
        ],
        "dailySchedule": [
            {"time": "08:00", "activity": "Arrivée à l'école, agencement de la classe, préparation des ateliers autonomes et impression des supports."},
            {"time": "08:30", "activity": "Accueil bienveillant des élèves, rituels du matin, date et consignes de la journée."},
            {"time": "09:00", "activity": "Séquence d'apprentissage fondamental en français (lecture phonologique et étude de texte guidée)."},
            {"time": "10:15", "activity": "Récréation surveillée et échange rapide entre collègues sur la vie de l'école."},
            {"time": "10:35", "activity": "Séquence de mathématiques : manipulation d'objets, résolution de problèmes en petits groupes."},
            {"time": "12:00", "activity": "Pause méridienne, repas, préparation des ateliers d'arts plastiques et correction de cahiers."},
            {"time": "13:45", "activity": "Retour au calme, quart d'heure de lecture partagée et séance de découverte du monde (sciences du vivant)."},
            {"time": "15:00", "activity": "Séance d'EPS dans la cour ou au gymnase : motricité et jeux collectifs coopératifs."},
            {"time": "16:30", "activity": "Sortie des classes, transmission aux parents et animation d'une réunion de suivi pour un élève à besoins éducatifs particuliers."},
            {"time": "17:30", "activity": "Corrections approfondies, mise à jour du cahier journal du lendemain et fin de journée."}
        ],
        "quiz": [
            {
                "question": "Quel concours officiel permet de devenir professeur des écoles titulaire en France ?",
                "options": [
                    "Le CAPES",
                    "Le CRPE (Concours de Recrutement de Professeurs des Écoles)",
                    "L'Agrégation",
                    "Le concours de l'ENA"
                ],
                "answer": 1,
                "explanation": "Le CRPE est le concours spécifique de recrutement des enseignants du premier degré en France (maternelle et élémentaire)."
            },
            {
                "question": "Quelle tranche d'âge d'élèves est confiée au professeur des écoles ?",
                "options": [
                    "De 2 à 11 ans",
                    "De 11 à 15 ans",
                    "De 15 à 18 ans",
                    "Les adultes uniquement"
                ],
                "answer": 0,
                "explanation": "Le professeur des écoles enseigne aux enfants de la toute petite section de maternelle jusqu'au CM2 (2 à 11 ans)."
            }
        ]
    },

    # 2. Professeur de collège et lycée
    {
        "id": "professeur-college-lycee",
        "slug": "professeur-college-lycee",
        "title": "Professeur de Collège et Lycée (Général & Technologique)",
        "aliases": [
            "Enseignant du second degré",
            "Professeur certifié (CAPES)",
            "Professeur agrégé",
            "Enseignant de discipline secondaire",
            "Professeur de maths",
            "Professeur de mathématiques",
            "Enseignant de mathématiques",
            "Enseigner les maths"
        ],
        "icon": "📚",
        "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "lettres-langues-sciences-humaines",
            "biologie-chimie",
            "sciences-terre-geosciences",
            "numerique-ia"
        ],
        "domain": "Enseignement Secondaire (Général, Technologique & Professionnel)",
        "domainId": "enseignement-secondaire",
        "subdomain": "Collège & Lycée général et technologique",
        "sectors": [
            "Éducation Nationale (Second degré public et privé sous contrat)",
            "Lycées français de l'étranger (AEFE)",
            "Instituts privés et cours préparatoires"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/enseignement/professeur-de-college-et-lycee-691",
        "studyramaSource": True,
        "isEmerging": False,
        "level": "Bac +5 (Master MEEF Second degré / Master disciplinaire + Concours CAPES ou Agrégation)",
        "salary": "🇫🇷 France : 1 400 € net/mois en stage, 1 900 € à 2 300 € net/mois certifié débutant (jusqu'à 3 600 € net en fin de carrière) ; 2 400 € à 4 500 € pour un agrégé (Source : Studyrama / Grilles Éducation Nationale) • 🇸🇳 Sénégal : 230 000 à 490 000 FCFA net/mois (Corps des PCEM et PEM - Professeurs d'Enseignement Moyen et Secondaire)",
        "salaryDetails": {
            "france": {
                "starter": "1 900 € net/mois (Certifié) / 2 400 € (Agrégé)",
                "experienced": "2 700 € net/mois",
                "senior": "3 600 € net/mois (4 500 € Agrégé hors classe)",
                "source": "Studyrama / Ministère de l'Éducation Nationale (France)"
            },
            "senegal": {
                "starter": "230 000 FCFA net/mois (PCEM)",
                "experienced": "340 000 FCFA net/mois (PEM)",
                "senior": "490 000 FCFA net/mois (PES principal)",
                "source": "Grille de la Fonction Publique Sénégalaise / Ministère de l'Éducation Nationale du Sénégal"
            }
        },
        "targetAudience": "Adolescents et jeunes adultes de 11 à 18 ans (de la classe de 6ème aux classes préparatoires / BTS)",
        "workEnvironment": "Collèges publics ou privés, lycées d'enseignement général et technologique, cités scolaires",
        "summary": "Expert de sa matière d'enseignement, le professeur de collège et lycée transmet des savoirs approfondis aux adolescents, développe leur esprit critique et les prépare aux examens du Brevet et du Baccalauréat.",
        "missions": [
            "Transmettre les savoirs, méthodes de travail et compétences du programme officiel dans sa discipline d'expertise.",
            "Concevoir des cours magistraux, travaux dirigés, activités pratiques et projets interdisciplinaires.",
            "Évaluer régulièrement les progrès des élèves par des devoirs sur table, contrôles continus et épreuves orales.",
            "Exercer la mission de professeur principal : coordonner l'équipe pédagogique et accompagner les élèves dans leur projet d'orientation."
        ],
        "activities": [
            "Élaboration des cours, fiches de synthèse, exercices d'application et grilles d'évaluation critères.",
            "Enseignement en classe entière et en demi-groupes (travaux pratiques de sciences, langues vivantes).",
            "Correction rigoureuse et annotée des devoirs et copies d'examens blancs.",
            "Participation aux conseils de classe trimestriels, réunions parents-professeurs et conseils pédagogiques."
        ],
        "specialties": [
            "Mathématiques",
            "Physique-Chimie",
            "Sciences de la Vie et de la Terre (SVT)",
            "Lettres Modernes / Lettres Classiques",
            "Histoire-Géographie & Géopolitique",
            "Philosophie",
            "Langues vivantes (Anglais, Espagnol, Allemand, Arabe)",
            "Sciences Économiques et Sociales (SES)",
            "Numérique et Sciences Informatiques (NSI)",
            "Sciences Industrielles de l'Ingénieur (SII)"
        ],
        "skills": {
            "hard": [
                "Maîtrise académique de haut niveau dans la discipline enseignée",
                "Didactique disciplinaire et pédagogie différenciée pour adolescents",
                "Exigences et barèmes des épreuves du Brevet et du Baccalauréat",
                "Utilisation des environnements numériques de travail (ENT, Pronote)"
            ],
            "soft": [
                "Aisance oratoire et passion communicative pour sa matière",
                "Sens de l'autorité juste et gestion des dynamiques adolescentes",
                "Écoute, empathie et encouragement de l'effort individuel",
                "Capacité de travail en équipe interdisciplinaire"
            ],
            "pedagogie": [
                "Rendre attrayante et accessible une matière complexe",
                "Varier les supports : textes, schémas, vidéos, expériences",
                "Donner du sens aux apprentissages par des applications concrètes"
            ],
            "communication": [
                "Capter et maintenir l'attention d'une classe de 30 à 35 élèves",
                "Restituer clairement les bilans d'orientation aux familles",
                "Réguler les conflits et tensions éventuelles avec tact"
            ],
            "organisation": [
                "Planifier le bouclage du programme dans le respect du calendrier scolaire",
                "Gérer les plannings de devoirs et respecter les délais de correction",
                "Tenir scrupuleusement à jour le cahier de textes numérique"
            ],
            "numerique": [
                "Maîtriser les logiciels disciplinaires (GeoGebra, éditeurs Python, simulateurs)",
                "Administrer les espaces de cours sur les plateformes ENT",
                "Animer des séances en salle informatique ou avec tablettes numériques"
            ]
        },
        "qualities": [
            "Rigueur intellectuelle",
            "Charisme et dynamisme pédagogique",
            "Patience et équité",
            "Capacité d'écoute",
            "Passion pour sa discipline"
        ],
        "studies": [
            "🇫🇷 France : Bac +5. Licence disciplinaire (3 ans) + Master MEEF 2nd degré ou Master recherche (2 ans) + Réussite au CAPES (certifié) ou au concours de l'Agrégation.",
            "🇸🇳 Sénégal : Bac +3 à Bac +5. Licence ou Master disciplinaire (UCAD, UGB, etc.) + Concours d'entrée et formation à la FASTEF (Faculté des Sciences et Technologies de l'Éducation et de la Formation - Dakar) pour l'obtention du CAEM (Collèges) ou du CAES (Lycées)."
        ],
        "evolution": [
            "Professeur agrégé (par concours interne)",
            "Enseignant en classe préparatoire aux grandes écoles (CPGE) ou en section de technicien supérieur (STS/BTS)",
            "Formateur académique d'enseignants stagiaires",
            "Personnel de direction : Principal de collège ou Proviseur de lycée (sur concours)",
            "Inspecteur d'académie - Inspecteur pédagogique régional (IA-IPR)"
        ],
        "dailySchedule": [
            {"time": "07:45", "activity": "Arrivée en salle des professeurs, consultation des messages de la direction et préparation des polycopiés."},
            {"time": "08:15", "activity": "Cours de Mathématiques avec une classe de 3ème : résolution de théorèmes et travail sur logiciel dynamique."},
            {"time": "10:10", "activity": "Permanence pédagogique : accueil individualisé de deux élèves en difficulté méthodologique."},
            {"time": "10:30", "activity": "Cours magistral et analyse de documents en classe de 1ère générale."},
            {"time": "12:15", "activity": "Déjeuner au réfectoire et réunion rapide de concertation disciplinaire entre enseignants de sciences."},
            {"time": "13:30", "activity": "Séance de travaux pratiques en demi-groupe au laboratoire de physique-chimie."},
            {"time": "15:30", "activity": "Heure de vie de classe (mission de professeur principal) dédiée aux vœux d'orientation et à la préparation de Parcoursup."},
            {"time": "17:00", "activity": "Conseil de classe trimestriel avec les délégués élèves et les représentants de parents d'élèves."},
            {"time": "18:45", "activity": "Retour au domicile, préparation des interrogations écrites du lendemain et fin de journée."}
        ],
        "quiz": [
            {
                "question": "Quel concours d'État permet d'obtenir le statut de professeur certifié du second degré en France ?",
                "options": [
                    "Le CRPE",
                    "Le CAPES (Certificat d'Aptitude au Professorat de l'Enseignement du Second Degré)",
                    "L'internat en médecine",
                    "Le barreau"
                ],
                "answer": 1,
                "explanation": "Le CAPES est le concours officiel qui confère le titre de professeur certifié pour enseigner en collège et lycée."
            },
            {
                "question": "Un professeur certifié enseigne-t-il l'ensemble des matières ou une discipline spécialisée ?",
                "options": [
                    "Toutes les matières comme à l'école primaire",
                    "Une discipline spécialisée (ou un bloc disciplinaire précis comme Histoire-Géo ou Physique-Chimie)",
                    "Uniquement le sport",
                    "Uniquement les matières artistiques"
                ],
                "answer": 1,
                "explanation": "Au collège et au lycée, les enseignants sont recrutés par discipline d'expertise (Maths, Français, Anglais, Histoire, etc.)."
            }
        ]
    },

    # 3. Professeur de lycée professionnel (PLP)
    {
        "id": "professeur-lycee-professionnel-plp",
        "slug": "professeur-lycee-professionnel-plp",
        "title": "Professeur de Lycée Professionnel (PLP)",
        "aliases": [
            "Enseignant en lycée pro",
            "Professeur d'enseignement professionnel et technique",
            "Formateur CAP / Bac Pro",
            "PLP certifié"
        ],
        "icon": "⚙️",
        "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "industrie-mecanique",
            "btp-architecture",
            "energie-renouvelable",
            "droit-management"
        ],
        "domain": "Enseignement Secondaire (Général, Technologique & Professionnel)",
        "domainId": "enseignement-secondaire",
        "subdomain": "Lycée professionnel & Enseignement technique",
        "sectors": [
            "Lycées professionnels de l'Éducation Nationale",
            "Centres de Formation d'Apprentis (CFA)",
            "Établissements régionaux d'enseignement adapté (EREA)"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/enseignement",
        "studyramaSource": True,
        "isEmerging": False,
        "level": "Bac +3 à Bac +5 (Master MEEF ou expérience professionnelle reconnue + Concours CAPLP)",
        "salary": "🇫🇷 France : 1 900 € à 3 500 € net/mois selon l'échelon et primes d'atelier (Grille PLP de l'Éducation Nationale) • 🇸🇳 Sénégal : 220 000 à 460 000 FCFA net/mois (Corps des professeurs d'enseignement technique et professionnel)",
        "salaryDetails": {
            "france": {
                "starter": "1 900 € net/mois",
                "experienced": "2 600 € net/mois",
                "senior": "3 500 € net/mois",
                "source": "Studyrama / Ministère de l'Éducation Nationale (France)"
            },
            "senegal": {
                "starter": "220 000 FCFA net/mois",
                "experienced": "320 000 FCFA net/mois",
                "senior": "460 000 FCFA net/mois",
                "source": "Ministère de la Formation Professionnelle, de l'Apprentissage et de l'Artisanat du Sénégal"
            }
        },
        "targetAudience": "Élèves de 14 à 20 ans préparant un CAP, un Baccalauréat Professionnel ou un brevet des métiers d'art",
        "workEnvironment": "Ateliers techniques de lycées professionnels, salles de cours, plateaux techniques industriels ou tertiaires",
        "summary": "Acteur clé de l'insertion professionnelle des jeunes, le professeur de lycée professionnel enseigne les gestes métiers, la technologie appliquée ou les matières générales bivalentes (ex: Lettres-Histoire, Maths-Sciences) en lien étroit avec les réalités de l'entreprise.",
        "missions": [
            "Enseigner les savoir-faire techniques, règles de l'art, normes de sécurité et gestes professionnels en atelier.",
            "Dispenser les cours théoriques technologiques ou généraux appliqués aux filières professionnelles.",
            "Accompagner les élèves dans la recherche de stages et effectuer les visites de suivi en entreprise (PFMP).",
            "Développer l'autonomie, la fierté du métier et la confiance en soi des élèves souvent en quête de repères."
        ],
        "activities": [
            "Animation de séances pratiques sur machines-outils, chantiers pédagogiques ou simulateurs informatisés.",
            "Supervision stricte du port des équipements de protection individuelle (EPI) et de la sécurité en atelier.",
            "Visites d'entreprises pour évaluer les compétences professionnelles acquises lors des périodes de stage.",
            "Préparation et organisation des épreuves d'évaluation en cours de formation (CCF) pour le CAP et le Bac Pro."
        ],
        "specialties": [
            "Génie mécanique & Usinage",
            "Électrotechnique & Énergie",
            "Bâtiment & Gros œuvre / Finitions",
            "Maintenance des véhicules",
            "Métiers de la relation client & Commerce",
            "Gestion-Administration",
            "Hôtellerie-Restauration",
            "Bivalence générale : Lettres-Histoire ou Maths-Sciences"
        ],
        "skills": {
            "hard": [
                "Expertise pratique et technique éprouvée dans le métier enseigné",
                "Connaissance approfondie des normes de sécurité et de santé au travail",
                "Pédagogie de projet et évaluation par compétences (référentiels RNCP)",
                "Modalités du contrôle en cours de formation (CCF)"
            ],
            "soft": [
                "Bienveillance et capacité à redonner le goût des études",
                "Fermeté rassurante sur les questions de sécurité",
                "Sens pratique et esprit concret",
                "Excellente écoute et relationnel de proximité"
            ],
            "pedagogie": [
                "Décomposer un geste technique complexe en étapes assimilables",
                "Articuler théorie technologique et mise en situation réelle",
                "Faire de l'erreur une étape constructive d'apprentissage"
            ],
            "communication": [
                "Dialoguer efficacement avec les maîtres de stage et tuteurs d'entreprise",
                "Rassurer les familles sur les débouchés professionnels",
                "Favoriser l'esprit d'équipe et la solidarité d'atelier"
            ],
            "organisation": [
                "Gérer l'approvisionnement en matières premières et outillage d'atelier",
                "Planifier les calendriers de stages et de visites de suivi",
                "Assurer la maintenance de premier niveau des équipements pédagogiques"
            ],
            "numerique": [
                "Utiliser les logiciels de CAO/DAO (SolidWorks, AutoCAD) et progiciels de gestion",
                "Exploiter les tableaux de bord numériques de suivi des compétences",
                "Piloter les machines à commande numérique (CNC) pédagogiques"
            ]
        },
        "qualities": [
            "Pragmatisme et habileté manuelle",
            "Pédagogie de l'encouragement",
            "Rigueur sécuritaire absolue",
            "Sens de l'écoute",
            "Disponibilité"
        ],
        "studies": [
            "🇫🇷 France : Bac +3 à Bac +5 ou Bac + expérience professionnelle de plusieurs années en entreprise (selon les sections professionnelles) + Réussite au Concours CAPLP (Certificat d'Aptitude au Professorat de Lycée Professionnel).",
            "🇸🇳 Sénégal : Bac + Licence professionnelle ou Brevet de Technicien Supérieur (BTS) + formation à l'ENSET (École Normale Supérieure d'Enseignement Technique et Professionnel - Dakar) pour l'obtention du CAPET/CAPLP."
        ],
        "evolution": [
            "Directeur Délégué aux Formations Professionnelles et Technologiques (DDFPT, ex-chef de travaux)",
            "Personnel de direction de lycée professionnel (sur concours)",
            "Inspecteur de l'Éducation Nationale de l'enseignement technique (IEN-ET)"
        ],
        "dailySchedule": [
            {"time": "08:00", "activity": "Ouverture de l'atelier technique, vérification des organes de sécurité des machines et mise à disposition des matériaux."},
            {"time": "08:30", "activity": "Briefing de sécurité et revue des objectifs professionnels de la journée avec la classe de 1ère Bac Pro."},
            {"time": "09:00", "activity": "Encadrement individuel des élèves sur le plateau technique : réglage de postes et contrôle dimensionnel."},
            {"time": "12:00", "activity": "Rangement collectif rigoureux de l'atelier et déjeuner partagé avec l'équipe technique."},
            {"time": "13:30", "activity": "Déplacement en entreprise pour la visite de suivi de stage d'un élève de Terminale CAP."},
            {"time": "15:00", "activity": "Entretien tripartite avec le tuteur d'entreprise et l'élève, évaluation de la grille de compétences."},
            {"time": "16:30", "activity": "Retour au lycée, mise à jour des dossiers CCF et préparation du cours de technologie appliquée du lendemain."}
        ],
        "quiz": [
            {
                "question": "Quel concours permet de devenir enseignant en lycée professionnel en France ?",
                "options": [
                    "Le CAPLP (Certificat d'Aptitude au Professorat de Lycée Professionnel)",
                    "Le CRPE",
                    "Le concours de greffier",
                    "Le concours de commissaire"
                ],
                "answer": 0,
                "explanation": "Le CAPLP est le concours national de recrutement des professeurs de lycée professionnel en France."
            }
        ]
    },

    # 4. Professeur d'EPS
    {
        "id": "professeur-eps",
        "slug": "professeur-eps",
        "title": "Professeur d'Éducation Physique et Sportive (EPS)",
        "aliases": [
            "Enseignant d'EPS",
            "Professeur de sport scolaire",
            "Professeur certifié d'EPS (CAPEPS)",
            "Animateur d'association sportive (UNSS)"
        ],
        "icon": "🏃",
        "image": "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "sante-soins-paramedical"
        ],
        "domain": "Enseignement Secondaire (Général, Technologique & Professionnel)",
        "domainId": "enseignement-secondaire",
        "subdomain": "Éducation physique et sportive (EPS)",
        "sectors": [
            "Éducation Nationale (Collèges, Lycées généraux, techniques et pro)",
            "Associations sportives scolaires (UNSS, UGSEL)",
            "Fédérations sportives universitaires"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sport/professeur-d-eps-1344",
        "studyramaSource": True,
        "isEmerging": False,
        "level": "Bac +5 (Master MEEF EPS + Concours CAPEPS ou Agrégation d'EPS)",
        "salary": "🇫🇷 France : 1 900 € à 3 600 € net/mois pour un certifié CAPEPS (jusqu'à 4 500 € pour un agrégé) (Source : Studyrama / Grilles Éducation Nationale) • 🇸🇳 Sénégal : 220 000 à 460 000 FCFA net/mois (Corps des professeurs d'EPS - Ministère des Sports / Éducation Nationale)",
        "salaryDetails": {
            "france": {
                "starter": "1 900 € net/mois",
                "experienced": "2 700 € net/mois",
                "senior": "3 600 € net/mois (4 500 € Agrégé)",
                "source": "Studyrama / Ministère de l'Éducation Nationale (France)"
            },
            "senegal": {
                "starter": "220 000 FCFA net/mois",
                "experienced": "320 000 FCFA net/mois",
                "senior": "460 000 FCFA net/mois",
                "source": "Ministère des Sports / Ministère de l'Éducation Nationale du Sénégal (CNEPS Thiès / INSEPS Dakar)"
            }
        },
        "targetAudience": "Élèves de 11 à 18 ans au collège et au lycée, étudiants du supérieur",
        "workEnvironment": "Gymnases, stades d'athlétisme, piscines municipales, murs d'escalade, espaces extérieurs",
        "summary": "Le professeur d'EPS transmet le goût de l'effort physique, la culture sportive et les valeurs citoyennes (fair-play, respect des règles, solidarité). Il veille à l'épanouissement corporel et à la santé de chaque élève, quel que soit son niveau sportif initial.",
        "missions": [
            "Enseigner une grande diversité d'activités physiques, sportives et artistiques (APSA) : athlétisme, natation, sports collectifs, gymnastique, course d'orientation.",
            "Développer les capacités motrices, l'esprit d'équipe, le respect de l'adversaire et l'hygiène de vie des élèves.",
            "Adapter les exercices aux élèves inaptes partiels ou en situation de handicap pour garantir l'inclusion sportive.",
            "Animer l'Association Sportive (AS) du collège ou du lycée le mercredi après-midi dans le cadre de l'UNSS."
        ],
        "activities": [
            "Organisation des séances pratiques d'échauffement, d'ateliers techniques et de situations de match.",
            "Contrôle strict et permanent de la sécurité du matériel (tapis, agrès, cordes) et respect des consignes de sécurité.",
            "Évaluation continue des performances motrices et des rôles sociaux (arbitre, juge, chronométreur).",
            "Encadrement des compétitions scolaires inter-établissements le mercredi après-midi."
        ],
        "specialties": [
            "Sports collectifs (Handball, Basketball, Football, Volleyball)",
            "Sports de pleine nature & Course d'orientation",
            "Activités aquatiques & Natation",
            "Gymnastique & Arts du cirque",
            "Danse & Expression corporelle",
            "Athlétisme & Demi-fond"
        ],
        "skills": {
            "hard": [
                "Polyvalence technique dans l'ensemble des disciplines sportives inscrites aux programmes",
                "Physiologie de l'effort, biomécanique et règles de premiers secours (PSC1)",
                "Didactique de l'EPS et barèmes officiels d'évaluation pour le Baccalauréat",
                "Réglementation et sécurité des installations sportives et nautiques"
            ],
            "soft": [
                "Énergie contagieuse et dynamisme moteur",
                "Pédagogie bienveillante envers les élèves complexés ou non sportifs",
                "Autorité naturelle et maîtrise d'un groupe en mouvement dans un grand espace",
                "Sens de la cohésion et exemplarité morale"
            ],
            "pedagogie": [
                "Valoriser les progrès individuels plutôt que la seule performance brute",
                "Faire acquérir des compétences d'auto-évaluation et de gestion de l'effort",
                "Attribuer des rôles valorisants à tous les élèves (arbitre, observateur, coach)"
            ],
            "communication": [
                "Donner des consignes claires, audibles et concises sur le terrain",
                "Sensibiliser aux bienfaits de l'activité physique contre la sédentarité",
                "Communiquer avec bienveillance sur les questions d'hygiène corporelle"
            ],
            "organisation": [
                "Organiser les déplacements sécurisés entre l'établissement et les installations sportives",
                "Gérer les plannings d'utilisation des gymnases et l'inventaire du matériel",
                "Planifier les déplacements et engagements de l'association sportive"
            ],
            "numerique": [
                "Utiliser des tablettes tactiles pour l'analyse vidéo des gestes sportifs en direct",
                "Exploiter les applications de chronométrage et de suivi de fréquence cardiaque",
                "Gérer les inscriptions et résultats sur les portails sportifs scolaires"
            ]
        },
        "qualities": [
            "Excellente condition physique",
            "Pédagogie inclusive et valorisante",
            "Sens aigu de la sécurité",
            "Esprit d'équipe et convivialité",
            "Enthousiasme"
        ],
        "studies": [
            "🇫🇷 France : Bac +5. Licence STAPS (Sciences et Techniques des Activités Physiques et Sportives) + Master MEEF EPS + Réussite au Concours du CAPEPS (Certificat d'Aptitude au Professorat d'Éducation Physique et Sportive).",
            "🇸🇳 Sénégal : Bac + Licence ou Master STAPS + Concours d'entrée et formation à l'INSEPS (Institut National Supérieur de l'Éducation Populaire et du Sport - UCAD Dakar) ou au CNEPS de Thiès."
        ],
        "evolution": [
            "Professeur agrégé d'EPS",
            "Coordinateur d'EPS et de district UNSS",
            "Conseiller pédagogique ou personnel de direction (sur concours)",
            "Inspecteur d'académie - Inspecteur pédagogique régional d'EPS (IA-IPR EPS)"
        ],
        "dailySchedule": [
            {"time": "08:00", "activity": "Arrivée au gymnase, installation des filets de volleyball et vérification du matériel."},
            {"time": "08:15", "activity": "Séance avec une classe de 4ème : apprentissage des phases d'attaque et d'arbitrage en volleyball."},
            {"time": "10:15", "activity": "Transition vers la piste d'athlétisme pour une séance de relais-vitesse avec une classe de 1ère."},
            {"time": "12:15", "activity": "Déjeuner rapide et préparation des fiches d'évaluation pour la séance de natation."},
            {"time": "13:30", "activity": "Encadrement du groupe au bassin nautique : sauvetage et perfectionnement de la brasse coulée."},
            {"time": "15:45", "activity": "Rangement du matériel aquatique et retour à l'établissement."},
            {"time": "16:30", "activity": "Entraînement de l'équipe de basketball de l'Association Sportive (AS) pour le championnat UNSS."}
        ],
        "quiz": [
            {
                "question": "Quel est le concours spécifique requis pour être professeur d'EPS titulaire en France ?",
                "options": [
                    "Le CAPES de Mathématiques",
                    "Le CAPEPS (Certificat d'Aptitude au Professorat d'Éducation Physique et Sportive)",
                    "Le CRPE",
                    "Le BPJEPS"
                ],
                "answer": 1,
                "explanation": "Le CAPEPS est le concours national dédié au recrutement des professeurs d'EPS dans l'enseignement public."
            }
        ]
    },

    # 5. Professeur d'arts plastiques
    {
        "id": "professeur-arts-plastiques",
        "slug": "professeur-arts-plastiques",
        "title": "Professeur d'Arts Plastiques",
        "aliases": [
            "Enseignant d'arts plastiques",
            "Professeur certifié d'arts plastiques (CAPES)",
            "Professeur d'éducation artistique"
        ],
        "icon": "🎨",
        "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "lettres-langues-sciences-humaines"
        ],
        "domain": "Enseignement Secondaire (Général, Technologique & Professionnel)",
        "domainId": "enseignement-secondaire",
        "subdomain": "Éducation artistique & musicale",
        "sectors": [
            "Éducation Nationale (Collèges, Lycées généraux et technologiques)",
            "Écoles d'art et conservatoires municipaux",
            "Ateliers d'expression plastique"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/enseignement/professeur-d-arts-plastiques-6317",
        "studyramaSource": True,
        "isEmerging": False,
        "level": "Bac +5 (Licence Arts Plastiques + Master MEEF + Concours CAPES Arts Plastiques ou Agrégation)",
        "salary": "🇫🇷 France : 1 900 € à 3 600 € net/mois pour un certifié (jusqu'à 4 500 € pour un agrégé) (Source : Studyrama / Grilles Éducation Nationale) • 🇸🇳 Sénégal : 220 000 à 450 000 FCFA net/mois (Corps des professeurs d'éducation artistique)",
        "salaryDetails": {
            "france": {
                "starter": "1 900 € net/mois",
                "experienced": "2 650 € net/mois",
                "senior": "3 600 € net/mois",
                "source": "Studyrama / Ministère de l'Éducation Nationale (France)"
            },
            "senegal": {
                "starter": "220 000 FCFA net/mois",
                "experienced": "315 000 FCFA net/mois",
                "senior": "450 000 FCFA net/mois",
                "source": "Ministère de la Culture / Ministère de l'Éducation Nationale du Sénégal (ENA - École Nationale des Arts Dakar)"
            }
        },
        "targetAudience": "Collégiens et lycéens de 11 à 18 ans, élèves des spécialités artistiques",
        "workEnvironment": "Salles spécialisées d'arts plastiques au collège et au lycée, ateliers d'expérimentation, musées",
        "summary": "Le professeur d'arts plastiques éveille la créativité, la sensibilité esthétique et l'esprit critique des élèves en associant la pratique créative (dessin, peinture, volume, numérique) à l'histoire des arts et à l'analyse d'œuvres.",
        "missions": [
            "Concevoir des situations d'apprentissage invitant les élèves à créer, expérimenter des médiums et résoudre un problème plastique.",
            "Enseigner l'histoire des arts, les mouvements artistiques majeurs et les langages visuels contemporains.",
            "Guider les élèves dans l'analyse critique de leurs propres productions et de celles de grands maîtres.",
            "Organiser des projets culturels, expositions des travaux d'élèves et visites dans les musées et galeries d'art."
        ],
        "activities": [
            "Préparation et approvisionnement des matériaux d'atelier (argile, peinture, supports, encres, outils numériques).",
            "Animation des cours en atelier, guidage technique et questionnement bienveillant pendant la création.",
            "Mise en espace et accrochage des réalisations d'élèves dans les couloirs et le hall de l'établissement.",
            "Conduite de projets interdisciplinaires associant arts, histoire, lettres et technologies numériques."
        ],
        "specialties": [
            "Dessin, Peinture & Techniques mixtes",
            "Sculpture, Volume & Modelage",
            "Photographie & Création numérique",
            "Histoire des arts & Muséologie",
            "Design graphique & Bande dessinée"
        ],
        "skills": {
            "hard": [
                "Culture artistique et muséale encyclopédique",
                "Maîtrise technique d'un large éventail de médiums plastiques traditionnels et contemporains",
                "Didactique de la pratique artistique et questionnement de projet",
                "Connaissance des consignes de sécurité liées aux produits et matériels d'atelier"
            ],
            "soft": [
                "Curiosité insatiable et sensibilité esthétique",
                "Bienveillance et capacité à désinhiber les élèves face à la création",
                "Ouverture d'esprit et respect de l'originalité de chaque élève",
                "Sens du partage et enthousiasme"
            ],
            "pedagogie": [
                "Poser des consignes ouvertes stimulant l'imagination personnelle",
                "Conduire des verbalisations collectives constructives sur les œuvres d'élèves",
                "Valoriser la singularité de la démarche plutôt que le seul résultat esthétique"
            ],
            "communication": [
                "Sensibiliser les élèves aux codes et messages visuels de la société moderne",
                "Présenter les expositions scolaires aux familles et au public",
                "Tisser des partenariats avec les acteurs culturels locaux"
            ],
            "organisation": [
                "Gérer le budget d'achat de fournitures artistiques de l'établissement",
                "Maintenir l'ordre, la propreté et la conservation des travaux en salle spécialisée",
                "Coordonner la logistique des sorties scolaires aux musées"
            ],
            "numerique": [
                "Utiliser les logiciels de retouche photo et de création graphique (Photoshop, GIMP)",
                "Exploiter les tablettes graphiques et la vidéo d'animation (Stop-motion)",
                "Administrer une galerie virtuelle des travaux d'élèves sur le site du collège"
            ]
        },
        "qualities": [
            "Créativité féconde",
            "Écoute et bienveillance",
            "Culture esthétique riche",
            "Sens de l'innovation",
            "Patience"
        ],
        "studies": [
            "🇫🇷 France : Bac +5. Licence d'Arts Plastiques + Master MEEF 2nd degré Arts Plastiques + Réussite au CAPES ou à l'Agrégation d'Arts Plastiques.",
            "🇸🇳 Sénégal : Bac + Licence ou Master en Arts Plastiques (ENA - École Nationale des Arts de Dakar ou UCAD) + formation pédagogique à la FASTEF."
        ],
        "evolution": [
            "Professeur agrégé d'arts plastiques",
            "Enseignant en classe préparatoire artistique ou en école supérieure d'art (Beaux-Arts)",
            "Formateur académique ou conseiller en action culturelle auprès du Rectorat",
            "Inspecteur d'académie - Inspecteur pédagogique régional (IA-IPR Arts plastiques)"
        ],
        "dailySchedule": [
            {"time": "08:15", "activity": "Arrivée en salle d'arts, disposition des tables en îlots et préparation des pots de gouache et papiers grand format."},
            {"time": "08:30", "activity": "Cours avec une classe de 5ème : questionnement plastique sur le thème 'L'objet métamorphosé'."},
            {"time": "10:15", "activity": "Temps de verbalisation collective : les élèves exposent leurs réalisations et expliquent leurs choix."},
            {"time": "11:00", "activity": "Cours avec une classe de 3ème : création numérique et travail de cadrage photographique sur tablettes."},
            {"time": "12:30", "activity": "Déjeuner et réunion avec la documentaliste du CDI pour planifier l'exposition annuelle d'art du collège."},
            {"time": "14:00", "activity": "Atelier pratique de sculpture avec des élèves de l'option artistique du lycée."},
            {"time": "16:00", "activity": "Nettoyage des pinceaux, rangement des matériaux et saisie des évaluations sur le logiciel de notes."}
        ],
        "quiz": [
            {
                "question": "En arts plastiques au collège, l'évaluation porte-t-elle uniquement sur le 'don' pour le dessin ?",
                "options": [
                    "Oui, seuls les élèves doués ont de bonnes notes",
                    "Non, elle évalue la démarche de création, l'expérimentation, la prise de risque et la capacité à expliciter son travail",
                    "Non, elle évalue uniquement l'écriture",
                    "L'art plastique n'est jamais noté"
                ],
                "answer": 1,
                "explanation": "L'enseignement des arts plastiques évalue la démarche créative, le dialogue entre pratique et culture artistique, et non un prétendu don inné."
            }
        ]
    },

    # 6. Professeur de musique
    {
        "id": "professeur-musique",
        "slug": "professeur-musique",
        "title": "Professeur de Musique & Éducation Musicale",
        "aliases": [
            "Enseignant d'éducation musicale",
            "Professeur certifié de musique (CAPES)",
            "Chef de chœur scolaire",
            "Professeur de conservatoire"
        ],
        "icon": "🎵",
        "image": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "lettres-langues-sciences-humaines"
        ],
        "domain": "Enseignement Secondaire (Général, Technologique & Professionnel)",
        "domainId": "enseignement-secondaire",
        "subdomain": "Éducation artistique & musicale",
        "sectors": [
            "Éducation Nationale (Collèges, Lycées généraux et techniques)",
            "Conservatoires à rayonnement régional (CRR) et municipal (CRM)",
            "Chorales scolaires et académies musicales"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/musique/professeur-de-musique-1218",
        "studyramaSource": True,
        "isEmerging": False,
        "level": "Bac +5 (Licence Musicologie + Master MEEF Éducation Musicale + Concours CAPES Musique ou Agrégation)",
        "salary": "🇫🇷 France : 1 900 € à 3 600 € net/mois pour un certifié (jusqu'à 4 500 € pour un agrégé) (Source : Studyrama / Grilles Éducation Nationale) • 🇸🇳 Sénégal : 220 000 à 450 000 FCFA net/mois (Corps des professeurs d'éducation musicale)",
        "salaryDetails": {
            "france": {
                "starter": "1 900 € net/mois",
                "experienced": "2 650 € net/mois",
                "senior": "3 600 € net/mois",
                "source": "Studyrama / Ministère de l'Éducation Nationale (France)"
            },
            "senegal": {
                "starter": "220 000 FCFA net/mois",
                "experienced": "315 000 FCFA net/mois",
                "senior": "450 000 FCFA net/mois",
                "source": "Ministère de la Culture / Ministère de l'Éducation Nationale du Sénégal"
            }
        },
        "targetAudience": "Collégiens et lycéens de 11 à 18 ans, élèves chanteurs et choristes",
        "workEnvironment": "Salles spécialisées d'éducation musicale équipées de claviers et instruments, auditoriums, salles de concert",
        "summary": "Le professeur d'éducation musicale développe l'écoute critique, la voix chantée et la culture musicale des élèves. Par la pratique vocale collective en chorale et l'exploration des répertoires du monde entier, il rend la musique accessible à tous.",
        "missions": [
            "Former la voix des élèves à travers des exercices de respiration, de posture, d'articulation et de chant choral.",
            "Enseigner l'écoute analytique et reconnaître les timbres, structures, rythmes et styles musicaux de différentes époques et cultures.",
            "Initier aux pratiques instrumentales simples (percussions, claviers) et à la création sonore assistée par ordinateur (MAO).",
            "Diriger la chorale de l'établissement scolaire et organiser le concert de fin d'année."
        ],
        "activities": [
            "Animation de séances de chant polyphonique en classe entière et direction du chœur.",
            "Écoute comparée d'œuvres musicales au tableau interactif et prise de notes analytiques guidée.",
            "Répétitions hebdomadaires de la chorale sur la pause méridienne ou le soir.",
            "Organisation logistique des concerts, rencontres chorales académiques et partenariats avec les opéras et salles de concert."
        ],
        "specialties": [
            "Chant choral & Direction de chœur",
            "Musique assistée par ordinateur (MAO)",
            "Musicologie & Histoire de la musique",
            "Pratique instrumentale & Accompagnement piano/guitare",
            "Musiques traditionnelles & Musiques actuelles"
        ],
        "skills": {
            "hard": [
                "Maîtrise vocale confirmée et pratique fluide d'un instrument d'accompagnement (piano, guitare)",
                "Culture musicale universelle (musique classique, jazz, musiques du monde, musiques actuelles)",
                "Techniques de direction de chœur et de travail polyphonique à deux ou trois voix",
                "Logiciels de musique assistée par ordinateur (Cubase, GarageBand, Audacity)"
            ],
            "soft": [
                "Enthousiasme communicatif et énergie vocale",
                "Capacité à mettre en confiance les élèves timides face au chant",
                "Patience et rigueur dans l'écoute musicale",
                "Charisme et présence scénique"
            ],
            "pedagogie": [
                "Rendre l'apprentissage vocal ludique et décomplexé",
                "Développer l'oreille musicale par des jeux d'écoute interactifs",
                "Adapter les tonalités et tessitures à l'âge et à la mue de la voix des adolescents"
            ],
            "communication": [
                "Fédérer un groupe d'élèves autour d'un projet choral collectif",
                "Présenter avec clarté les œuvres et leur contexte historique",
                "Animer les représentations publiques devant les familles"
            ],
            "organisation": [
                "Entretenir et gérer le parc d'instruments de musique du collège",
                "Planifier les répétitions générales et balances sonores du spectacle annuel",
                "Organiser les sorties scolaires au concert ou à l'opéra"
            ],
            "numerique": [
                "Maîtriser les outils d'enregistrement et de mixage sonore",
                "Utiliser les claviers MIDI branchés sur ordinateurs en salle de classe",
                "Mettre à disposition des élèves des fichiers audio de travail pour répéter à la maison"
            ]
        },
        "qualities": [
            "Sensibilité artistique et musicale",
            "Dynamisme vocal et relationnel",
            "Patience et bienveillance",
            "Esprit de troupe",
            "Rigueur"
        ],
        "studies": [
            "🇫🇷 France : Bac +5. Licence de Musicologie + Master MEEF 2nd degré Éducation Musicale + Réussite au CAPES ou à l'Agrégation de Musique.",
            "🇸🇳 Sénégal : Bac + Licence ou Master en Musicologie ou formation au Conservatoire / ENA + formation pédagogique à la FASTEF."
        ],
        "evolution": [
            "Professeur agrégé de musique",
            "Coordinateur de projets artistiques et chorals au niveau académique",
            "Enseignant en classe à horaires aménagés musique (CHAM) ou en conservatoire",
            "Inspecteur d'académie - Inspecteur pédagogique régional (IA-IPR Éducation musicale)"
        ],
        "dailySchedule": [
            {"time": "08:15", "activity": "Arrivée en salle de musique, accordage de la guitare et mise sous tension du piano et de la sonorisation."},
            {"time": "08:30", "activity": "Échauffement vocal ludique et travail polyphonique sur un chant traditionnel avec une classe de 6ème."},
            {"time": "10:15", "activity": "Séance d'analyse auditive comparée (baroque vs jazz) avec une classe de 3ème."},
            {"time": "12:15", "activity": "Déjeuner rapide et préparation des partitions pour la chorale."},
            {"time": "13:00", "activity": "Répétition de la chorale du collège : travail à deux voix sur une chanson contemporaine en vue du spectacle de fin d'année."},
            {"time": "14:15", "activity": "Atelier de création sonore et MAO en demi-groupe sur tablettes tactiles."},
            {"time": "16:00", "activity": "Fin des cours, rangement des claviers et préparation des bandes-son de travail pour les élèves."}
        ],
        "quiz": [
            {
                "question": "Quelle activité collective phare le professeur de musique anime-t-il souvent au collège ?",
                "options": [
                    "Le club de bridge",
                    "La chorale du collège",
                    "Le tournoi d'échecs",
                    "La compétition d'athlétisme"
                ],
                "answer": 1,
                "explanation": "La chorale scolaire est un prolongement majeur de l'éducation musicale au collège, rassemblant les élèves pour des projets vocaux d'envergure."
            }
        ]
    },

    # 7. Enseignant-chercheur
    {
        "id": "enseignant-chercheur",
        "slug": "enseignant-chercheur",
        "title": "Enseignant-Chercheur (Maître de Conférences / Professeur des Universités)",
        "aliases": [
            "Maître de conférences (MCU)",
            "Professeur des universités (PU)",
            "Universitaire chercheur",
            "Directeur de thèse / chercheur académique"
        ],
        "icon": "🔬",
        "image": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "biologie-chimie",
            "sciences-terre-geosciences",
            "numerique-ia",
            "lettres-langues-sciences-humaines",
            "sante-soins-paramedical"
        ],
        "domain": "Enseignement Supérieur, Recherche & Milieu Universitaire",
        "domainId": "enseignement-superieur-recherche",
        "subdomain": "Université & Recherche universitaire",
        "sectors": [
            "Universités publiques et privées",
            "Grandes écoles d'ingénieurs et de management",
            "Organismes publics de recherche (CNRS, INSERM, INRIA, IRD au Sénégal)",
            "Laboratoires mixtes de recherche internationaux"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/enseignement/enseignant-chercheur",
        "studyramaSource": True,
        "isEmerging": False,
        "level": "Bac +8 (Doctorat) à Bac +10 (Habilitation à Diriger des Recherches - HDR)",
        "salary": "🇫🇷 France : 2 400 € à 4 200 € net/mois pour un Maître de conférences ; 3 200 € à 6 000 € net/mois pour un Professeur des universités (Source : Studyrama / Grilles Enseignement Supérieur) • 🇸🇳 Sénégal : 600 000 à 1 800 000 FCFA net/mois selon le grade (Maître-assistant, Maître de conférences, Professeur titulaire - UCAD, UGB)",
        "salaryDetails": {
            "france": {
                "starter": "2 400 € net/mois (Maître de conférences échelon 1)",
                "experienced": "3 500 € net/mois (Maître de conférences hors classe)",
                "senior": "4 800 € à 6 000 € net/mois (Professeur des universités classe exceptionnelle)",
                "source": "Studyrama / Ministère de l'Enseignement Supérieur et de la Recherche (France)"
            },
            "senegal": {
                "starter": "600 000 FCFA net/mois (Maître-assistant)",
                "experienced": "1 100 000 FCFA net/mois (Maître de conférences assimilé)",
                "senior": "1 800 000 FCFA net/mois (Professeur titulaire de chaire)",
                "source": "Grille de l'Enseignement Supérieur du Sénégal / UCAD / CAMES"
            }
        },
        "targetAudience": "Étudiants de Licence, Master, élèves-ingénieurs, doctorants et chercheurs internationaux",
        "workEnvironment": "Amphithéâtres universitaires, salles de travaux dirigés, laboratoires de recherche de pointe, colloques internationaux",
        "summary": "Doté d'une double casquette, l'enseignant-chercheur partage son temps entre la transmission des savoirs de pointe aux étudiants de l'université et la production de connaissances nouvelles au sein d'un laboratoire de recherche de niveau mondial.",
        "missions": [
            "Dispenser des cours magistraux (CM) et des travaux dirigés (TD) de haut niveau aux étudiants du supérieur (Licence, Master).",
            "Mener des projets de recherche originaux, expérimentaux ou théoriques, et publier les résultats dans des revues scientifiques internationales à comité de lecture.",
            "Encadrer des étudiants en Master et diriger des thèses de Doctorat.",
            "Participer à la vie universitaire, à la gouvernance des composantes (UFR, départements) et à la vulgarisation scientifique."
        ],
        "activities": [
            "Conception de cours actualisés intégrant les découvertes scientifiques les plus récentes.",
            "Conduite d'expériences en laboratoire ou dépouillement de corpus documentaires.",
            "Rédaction d'articles scientifiques en anglais et soumission aux comités éditoriaux.",
            "Intervention dans des congrès et colloques scientifiques en France et à l'international."
        ],
        "specialties": [
            "Sciences exactes (Mathématiques, Physique, Chimie, Informatique, IA)",
            "Sciences de la vie, de la Terre & Santé",
            "Sciences humaines et sociales (Histoire, Sociologie, Philosophie, Droit)",
            "Sciences économiques et gestion",
            "Sciences de l'ingénieur et technologies"
        ],
        "skills": {
            "hard": [
                "Expertise scientifique de niveau doctoral dans son domaine de recherche",
                "Méthodologie rigoureuse de la recherche scientifique et analyse de données complexes",
                "Anglais académique courant (oral et écrit pour les publications internationales)",
                "Didactique universitaire et pédagogie active pour grands auditoires"
            ],
            "soft": [
                "Curiosité intellectuelle insatiable et persévérance",
                "Aisance oratoire face à un amphithéâtre de plusieurs centaines d'étudiants",
                "Rigueur éthique et déontologique dans la conduite de la recherche",
                "Capacité à manager une équipe de jeunes chercheurs et doctorants"
            ],
            "pedagogie": [
                "Structurer une pensée complexe pour la rendre intelligible à des étudiants",
                "Transmettre la démarche critique et la méthode d'investigation scientifique",
                "Encadrer l'autonomie intellectuelle des étudiants avancés"
            ],
            "communication": [
                "Défendre avec brio ses hypothèses lors de conférences internationales",
                "Vulgariser la science auprès du grand public et des médias",
                "Collaborer avec des équipes de recherche pluridisciplinaires"
            ],
            "organisation": [
                "Gérer les financements de projets de recherche (bourses ANR, européennes, CAMES)",
                "Planifier les campagnes expérimentales et le calendrier des jurys de thèse",
                "Concilier rigoureusement les heures d'enseignement et le temps de recherche"
            ],
            "numerique": [
                "Maîtriser les logiciels de traitement de données (R, Python, MATLAB)",
                "Utiliser les plateformes de cours en ligne (Moodle) et les archives ouvertes (HAL, ArXiv)",
                "Exploiter les outils de travail collaboratif scientifique international"
            ]
        },
        "qualities": [
            "Rigueur scientifique absolue",
            "Passion pour la recherche",
            "Pédagogie et sens de la transmission",
            "Persévérance",
            "Excellente expression"
        ],
        "studies": [
            "🇫🇷 France : Bac +8 à Bac +10. Licence + Master de recherche + Doctorat (3 à 4 ans de thèse) + Qualification délivrée par le Conseil National des Universités (CNU) + Recrutement sur concours par les universités. Pour devenir Professeur des universités : obtention de l'HDR (Habilitation à Diriger des Recherches) ou concours d'agrégation du supérieur.",
            "🇸🇳 Sénégal : Bac +8. Licence + Master + Doctorat unique ou Doctorat d'État + Inscription sur les listes d'aptitude du CAMES (Conseil Africain et Malgache pour l'Enseignement Supérieur) pour les grades de Maître-Assistant, Maître de Conférences et Professeur Titulaire."
        ],
        "evolution": [
            "Professeur des universités de classe exceptionnelle",
            "Directeur d'un laboratoire de recherche ou d'une Unité Mixte de Recherche (UMR)",
            "Doyen d'UFR ou Président d'université",
            "Expert auprès d'instances nationales ou internationales (UNESCO, Union Européenne, OMS)"
        ],
        "dailySchedule": [
            {"time": "08:30", "activity": "Arrivée au laboratoire de recherche, analyse des données expérimentales de la veille avec deux doctorants."},
            {"time": "10:00", "activity": "Cours magistral d'amphithéâtre devant 200 étudiants de Licence 3 : théories avancées et études de cas récents."},
            {"time": "12:00", "activity": "Déjeuner de travail avec des collègues universitaires pour monter un dossier de candidature à un appel à projets ANR."},
            {"time": "13:30", "activity": "Séance de travaux dirigés en salle informatique avec un groupe de Master 2."},
            {"time": "15:30", "activity": "Travail individuel de recherche : rédaction d'un article en anglais pour une revue scientifique de rang A."},
            {"time": "17:30", "activity": "Participation à un jury de soutenance de mémoire de recherche d'un étudiant de Master."},
            {"time": "19:00", "activity": "Fin de journée universitaire."}
        ],
        "quiz": [
            {
                "question": "Quel diplôme universitaire est le prérequis indispensable pour devenir enseignant-chercheur ?",
                "options": [
                    "Le Baccalauréat",
                    "Le Doctorat (Bac +8)",
                    "Le BTS",
                    "Le brevet des collèges"
                ],
                "answer": 1,
                "explanation": "L'accès aux fonctions d'enseignant-chercheur exige l'obtention du Doctorat (Bac +8) sanctionnant plusieurs années de recherche originale."
            }
        ]
    },

    # 8. Conseiller principal d'éducation (CPE)
    {
        "id": "conseiller-principal-education",
        "slug": "conseiller-principal-education",
        "title": "Conseiller Principal d'Éducation (CPE)",
        "aliases": [
            "CPE",
            "Responsable de la vie scolaire",
            "Conseiller d'éducation",
            "Cadre éducatif en collège / lycée"
        ],
        "icon": "🧭",
        "image": "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "lettres-langues-sciences-humaines",
            "droit-management"
        ],
        "domain": "Orientation, Vie Scolaire & Inclusion Éducative",
        "domainId": "orientation-vie-scolaire-inclusion",
        "subdomain": "Vie scolaire & Climat éducatif",
        "sectors": [
            "Éducation Nationale (Collèges, Lycées généraux, technologiques et pro)",
            "Internats scolaires et d'excellence",
            "Établissements régionaux d'enseignement adapté"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/enseignement/conseiller-principal-d-education-101698",
        "studyramaSource": True,
        "isEmerging": False,
        "level": "Bac +5 (Master MEEF Métiers de la Vie Scolaire + Concours de CPE)",
        "salary": "🇫🇷 France : 1 900 € à 3 600 € net/mois selon l'échelon et indemnités (2 000 € net une fois titularisé) (Source : Studyrama / Grilles Éducation Nationale) • 🇸🇳 Sénégal : 230 000 à 480 000 FCFA net/mois (Corps des conseillers de vie scolaire / administration scolaire)",
        "salaryDetails": {
            "france": {
                "starter": "2 000 € net/mois (titularisé)",
                "experienced": "2 700 € net/mois",
                "senior": "3 600 € net/mois",
                "source": "Studyrama / Ministère de l'Éducation Nationale (France)"
            },
            "senegal": {
                "starter": "230 000 FCFA net/mois",
                "experienced": "330 000 FCFA net/mois",
                "senior": "480 000 FCFA net/mois",
                "source": "Ministère de l'Éducation Nationale du Sénégal"
            }
        },
        "targetAudience": "Élèves de 11 à 18 ans au collège et au lycée, familles et équipes éducatives",
        "workEnvironment": "Bureau de la vie scolaire, cours de récréation, internats scolaires, couloirs et salles d'étude",
        "summary": "Pilier du climat scolaire, le CPE assure le bon fonctionnement de la vie quotidienne au collège et au lycée. Il encadre l'équipe des surveillants (AED), veille à l'assiduité des élèves, régule les conflits et accompagne chaque jeune dans son épanouissement citoyen.",
        "missions": [
            "Veiller au respect du règlement intérieur, à la sécurité des élèves et au climat serein de l'établissement.",
            "Contrôler et suivre avec rigueur l'assiduité et la ponctualité des élèves, et lutter contre le décrochage scolaire.",
            "Manager et animer au quotidien l'équipe des assistants d'éducation (AED / surveillants).",
            "Mener des actions de prévention citoyenne (lutte contre le harcèlement, égalité filles-garçons, formation des délégués)."
        ],
        "activities": [
            "Traitement des absences, retards et échanges téléphoniques réguliers avec les familles.",
            "Entretiens éducatifs individuels avec les élèves en difficulté de comportement ou de motivation.",
            "Animation des réunions de service de la vie scolaire et planning de surveillance.",
            "Participation aux conseils de classe, cellules de veille éducative et commissions éducatives."
        ],
        "specialties": [
            "Climat scolaire & Médiation des conflits",
            "Lutte contre le harcèlement scolaire & cyberharcèlement",
            "Gestion des internats scolaires",
            "Formation des délégués élèves & Citoyenneté (CVC / CVL)",
            "Prévention du décrochage scolaire"
        ],
        "skills": {
            "hard": [
                "Connaissance approfondie du droit de l'éducation et de la réglementation scolaire",
                "Techniques d'entretien d'écoute, de médiation et de régulation des conflits",
                "Management d'équipe et organisation logistique de service",
                "Maîtrise des logiciels de vie scolaire (Pronote, La-Vie-Scolaire)"
            ],
            "soft": [
                "Grand sens de l'écoute, psychologie et empathie",
                "Autorité naturelle, fermeté bienveillante et équité",
                "Sang-froid et gestion remarquable du stress face aux urgences",
                "Discrétion professionnelle absolue et sens du devoir"
            ],
            "pedagogie": [
                "Accompagner l'adolescent dans la responsabilisation de ses actes",
                "Organiser des temps d'échange démocratiques pour les délégués de classe",
                "Valoriser les comportements solidaires et l'engagement associatif des jeunes"
            ],
            "communication": [
                "Désamorcer l'agressivité lors d'échanges tendus avec des parents ou élèves",
                "Assurer la liaison constante entre enseignants, direction et services sociaux",
                "Porter la parole de l'institution avec tact et pédagogie"
            ],
            "organisation": [
                "Élaborer les plannings de service des assistants d'éducation (surveillance, étude)",
                "Tracer méthodiquement les incidents et les mesures éducatives prises",
                "Organiser l'accueil des élèves lors des mouvements de début et fin de journée"
            ],
            "numerique": [
                "Gérer les modules de vie scolaire sur l'ENT pour la saisie des absences",
                "Exploiter les tableaux de bord statistiques d'absentéisme pour cibler les alertes",
                "Sensibiliser les élèves aux risques des réseaux sociaux et à l'identité numérique"
            ]
        },
        "qualities": [
            "Sens relationnel aigu",
            "Calme et diplomatie",
            "Rigueur et équité",
            "Esprit d'équipe",
            "Disponibilité"
        ],
        "studies": [
            "🇫🇷 France : Bac +5. Licence (Sciences de l'Éducation, Psychologie, Sociologie, Droit, Lettres...) + Master MEEF mention Encadrement Éducatif + Réussite au Concours de Recrutement de CPE.",
            "🇸🇳 Sénégal : Bac +3 à Bac +5. Licence ou Master + formation et concours à la FASTEF pour l'encadrement éducatif et la vie scolaire."
        ],
        "evolution": [
            "Personnel de direction : Principal-adjoint puis Proviseur d'établissement (sur concours)",
            "Inspecteur de l'Éducation Nationale (IEN)",
            "Formateur académique de CPE stagiaires"
        ],
        "dailySchedule": [
            {"time": "07:45", "activity": "Arrivée à la vie scolaire, point avec l'équipe des AED sur les surveillances de la journée et accueil des premiers élèves."},
            {"time": "08:15", "activity": "Traitement des absences du matin sur le logiciel et appel des familles des élèves non signalés."},
            {"time": "09:30", "activity": "Entretien individuel avec un élève de 4ème signalé pour un comportement conflictuel répété en classe."},
            {"time": "10:30", "activity": "Présence active dans la cour pendant la récréation, observation du climat et échange informel avec les élèves."},
            {"time": "11:15", "activity": "Réunion de la cellule de veille avec l'assistante sociale scolaire, l'infirmière et le PsyEN sur les situations préoccupantes."},
            {"time": "12:30", "activity": "Supervision du flux au réfectoire et de l'animation du foyer des élèves avec les surveillants."},
            {"time": "14:00", "activity": "Séance de formation des délégués de classe de 6ème à leur rôle au conseil de classe."},
            {"time": "15:30", "activity": "Entretien avec les parents d'un élève en situation de décrochage pour construire un contrat d'objectifs."},
            {"time": "17:15", "activity": "Débriefing de fin de journée avec les assistants d'éducation et point avec le Chef d'établissement."}
        ],
        "quiz": [
            {
                "question": "Quelle est l'une des responsabilités centrales du CPE dans un collège ou lycée ?",
                "options": [
                    "Faire passer les visites médicales",
                    "Animer et coordonner la vie scolaire, veiller à l'assiduité et manager l'équipe des surveillants (AED)",
                    "Réparer les ordinateurs de l'établissement",
                    "Gérer la comptabilité générale de l'école"
                ],
                "answer": 1,
                "explanation": "Le CPE est le responsable de l'organisation et de l'animation de la vie scolaire, garantissant le climat éducatif en collaboration avec l'équipe de direction."
            }
        ]
    },

    # 9. Assistant d'éducation (AED)
    {
        "id": "assistant-education",
        "slug": "assistant-education",
        "title": "Assistant d'Éducation (AED / Surveillant)",
        "aliases": [
            "Surveillant de collège / lycée",
            "Pion (terme usuel)",
            "AED vie scolaire",
            "Animateur d'internat"
        ],
        "icon": "🛡️",
        "image": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "lettres-langues-sciences-humaines"
        ],
        "domain": "Orientation, Vie Scolaire & Inclusion Éducative",
        "domainId": "orientation-vie-scolaire-inclusion",
        "subdomain": "Vie scolaire & Climat éducatif",
        "sectors": [
            "Éducation Nationale (Collèges, Lycées publics et privés)",
            "Internats scolaires"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/enseignement/assistant-d-education-101694",
        "studyramaSource": True,
        "isEmerging": False,
        "level": "Baccalauréat à Bac +3 (Contrat ouvert aux étudiants de l'enseignement supérieur)",
        "salary": "🇫🇷 France : Rémunéré au SMIC horaire ou mensuel (environ 1 400 € net/mois pour un temps plein de 35h, proratisé pour les temps partiels étudiants) (Source : Studyrama) • 🇸🇳 Sénégal : 110 000 à 180 000 FCFA net/mois (Surveillants généraux adjoints et agents de vie scolaire)",
        "salaryDetails": {
            "france": {
                "starter": "1 400 € net/mois (Temps plein SMIC)",
                "experienced": "1 450 € net/mois",
                "senior": "1 500 € net/mois",
                "source": "Studyrama / Ministère de l'Éducation Nationale (France)"
            },
            "senegal": {
                "starter": "110 000 FCFA net/mois",
                "experienced": "145 000 FCFA net/mois",
                "senior": "180 000 FCFA net/mois",
                "source": "Secteur éducatif sénégalais"
            }
        },
        "targetAudience": "Élèves de 11 à 18 ans au collège et au lycée",
        "workEnvironment": "Cour de récréation, couloirs, réfectoire, permanence d'étude, internat",
        "summary": "Au contact direct des élèves tout au long de la journée, l'assistant d'éducation encadre les temps hors classe : récréations, heures d'étude, demi-pension et nuits d'internat. Souvent étudiant, il combine autorité de proximité et écoute bienveillante.",
        "missions": [
            "Surveiller et sécuriser les déplacements des élèves dans l'enceinte de l'établissement (entrées, sorties, récréations).",
            "Encadrer les heures d'étude surveillée et apporter une aide aux devoirs aux collégiens et lycéens.",
            "Surveiller les dortoirs de l'internat la nuit et assurer le réveil des élèves.",
            "Participer au contrôle des absences et retards au bureau de la vie scolaire sous l'autorité du CPE."
        ],
        "activities": [
            "Accueil au portail et vérification des carnets de correspondance des élèves.",
            "Gestion du calme et du travail silencieux en salle de permanence.",
            "Surveillance du réfectoire pendant le service de restauration scolaire.",
            "Saisie informatique des billets de retard et transmission des justificatifs d'absence."
        ],
        "specialties": [
            "Surveillance d'externat & demi-pension",
            "Surveillance d'internat de nuit",
            "Aide aux devoirs & Tutorat scolaire (Devoirs Faits)",
            "Animation du foyer socio-éducatif"
        ],
        "skills": {
            "hard": [
                "Connaissance des règles de sécurité des établissements scolaires",
                "Maîtrise des logiciels de vie scolaire pour l'enregistrement des absences",
                "Notions pédagogiques pour l'aide aux devoirs au collège",
                "Gestes de premiers secours (PSC1)"
            ],
            "soft": [
                "Fermeté bienveillante et sens de la juste distance avec les élèves",
                "Patience, écoute et calme face aux provocations adolescentes",
                "Réactivité et vigilance constante",
                "Esprit d'équipe avec les autres assistants d'éducation et le CPE"
            ],
            "pedagogie": [
                "Créer une atmosphère propice à la concentration en salle d'étude",
                "Aider un élève à s'organiser dans son travail personnel",
                "Expliquer le bien-fondé d'une règle plutôt que de sanctionner arbitrairement"
            ],
            "communication": [
                "S'adresser aux adolescents avec respect tout en exigeant le respect des règles",
                "Rendre compte fidèlement des incidents au CPE",
                "Accueillir avec courtoisie les personnes extérieures à l'établissement"
            ],
            "organisation": [
                "Respecter scrupuleusement les horaires de prise de poste aux différents points de surveillance",
                "Classer avec rigueur les billets d'absence et les justificatifs médicaux",
                "Gérer les listes d'élèves autorisés à sortir selon leur régime de scolarité"
            ],
            "numerique": [
                "Utiliser les postes informatiques de la vie scolaire",
                "Saisir les incidents et notifications sur Pronote",
                "Pointer les présences des élèves en permanence sur tablette"
            ]
        },
        "qualities": [
            "Vigilance",
            "Sens de l'autorité",
            "Patience et sang-froid",
            "Dynamisme",
            "Ponctualité"
        ],
        "studies": [
            "🇫🇷 France : Baccalauréat minimum. Recrutement direct par les chefs d'établissement sous contrat de droit public (CDD de 1 an renouvelable jusqu'à 6 ans). Emploi idéal pour les étudiants préparant les concours de l'enseignement (CRPE, CAPES, CPE).",
            "🇸猊 Sénégal : Baccalauréat ou Licence. Recrutement contractuel dans les collèges et lycées."
        ],
        "evolution": [
            "Passage des concours d'État : CPE, Professeur des écoles (CRPE), Professeur de collège/lycée (CAPES)",
            "Métiers de l'animation socio-culturelle ou de l'éducateur spécialisé",
            "Concours administratifs de la fonction publique (adjoint administratif, secrétaire)"
        ],
        "dailySchedule": [
            {"time": "07:45", "activity": "Prise de service au portail de l'établissement : contrôle visuel des carnets et accueil des élèves."},
            {"time": "08:15", "activity": "Saisie informatique des absences du premier cours au bureau de la vie scolaire."},
            {"time": "09:00", "activity": "Surveillance d'une salle de permanence d'étude de 40 collégiens : maintien du silence et aide aux devoirs."},
            {"time": "10:15", "activity": "Surveillance de la récréation dans la cour : prévention des bousculades et régulation d'un différend."},
            {"time": "11:30", "activity": "Gestion des flux d'élèves à l'entrée du restaurant scolaire et surveillance du réfectoire."},
            {"time": "13:30", "activity": "Point de transmission avec le CPE sur les absences de la matinée et classement des justificatifs."},
            {"time": "14:00", "activity": "Animation d'un atelier 'Devoirs Faits' avec un petit groupe de quatre élèves de 6ème."},
            {"time": "16:30", "activity": "Surveillance de la sortie des cours au portail et fin de service."}
        ],
        "quiz": [
            {
                "question": "Quel est le niveau de diplôme minimal pour être recruté comme Assistant d'Éducation (AED) en France ?",
                "options": [
                    "Le Doctorat",
                    "Le Baccalauréat (ou équivalent)",
                    "Le diplôme d'ingénieur",
                    "Aucun diplôme"
                ],
                "answer": 1,
                "explanation": "Le Baccalauréat est le niveau minimum requis pour postuler comme assistant d'éducation, un contrat souvent occupé par des étudiants préparant les concours."
            }
        ]
    },

    # 10. Psychologue de l'Éducation Nationale / Psychologue scolaire (EDA)
    {
        "id": "psychologue-scolaire",
        "slug": "psychologue-scolaire",
        "title": "Psychologue de l'Éducation Nationale (PsyEN 1er degré - Éducation, Développement & Apprentissages)",
        "aliases": [
            "Psychologue scolaire",
            "PsyEN EDA",
            "Psychologue du premier degré",
            "Membre du RASED"
        ],
        "icon": "🧠",
        "image": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "lettres-langues-sciences-humaines",
            "sante-soins-paramedical"
        ],
        "domain": "Orientation, Vie Scolaire & Inclusion Éducative",
        "domainId": "orientation-vie-scolaire-inclusion",
        "subdomain": "Psychologie de l'Éducation Nationale (PsyEN)",
        "sectors": [
            "Écoles maternelles et élémentaires de l'Éducation Nationale",
            "Réseaux d'Aides Spécialisées aux Élèves en Difficulté (RASED)",
            "Centres Médico-Psycho-Pédagogiques (CMPP)"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/psychologie/psychologue-scolaire-1267",
        "studyramaSource": True,
        "isEmerging": False,
        "level": "Bac +5 (Master de Psychologie + Concours d'État de Psychologue de l'Éducation Nationale - PsyEN spécialité EDA)",
        "salary": "🇫🇷 France : 1 900 € à 3 600 € net/mois selon l'échelon et primes d'exercice (Source : Studyrama / Grilles Éducation Nationale) • 🇸🇳 Sénégal : 230 000 à 480 000 FCFA net/mois (Corps des psychologues scolaires et conseillers d'orientation)",
        "salaryDetails": {
            "france": {
                "starter": "1 900 € net/mois",
                "experienced": "2 700 € net/mois",
                "senior": "3 600 € net/mois",
                "source": "Studyrama / Ministère de l'Éducation Nationale (France)"
            },
            "senegal": {
                "starter": "230 000 FCFA net/mois",
                "experienced": "330 000 FCFA net/mois",
                "senior": "480 000 FCFA net/mois",
                "source": "Ministère de l'Éducation Nationale du Sénégal"
            }
        },
        "targetAudience": "Enfants de 2 à 11 ans scolarisés en maternelle et primaire, parents et enseignants",
        "workEnvironment": "Bureau RASED en école primaire, écoles maternelles et élémentaires d'une circonscription, réunions de synthèse",
        "summary": "Spécialiste du développement de l'enfant et des mécanismes cognitifs, le psychologue scolaire intervient au sein des écoles primaires pour prévenir les difficultés d'apprentissage, réaliser des bilans psychologiques et favoriser l'inclusion de tous les enfants.",
        "missions": [
            "Réaliser des bilans psychologiques et psychométriques (tests d'intelligence WISC, épreuves projectives) pour éclairer les difficultés d'un enfant.",
            "Apporter une écoute clinique et un soutien aux enfants traversant des épreuves émotionnelles, familiales ou comportementales.",
            "Conseiller les enseignants sur les aménagements pédagogiques à mettre en place pour les élèves à besoins particuliers.",
            "Participer aux équipes éducatives, aux synthèses RASED et aux réunions de suivi de scolarisation (ESS) pour les notifications MDPH."
        ],
        "activities": [
            "Passation de bilans psychologiques individuels en cabinet scolaire.",
            "Observations cliniques d'élèves en situation de classe ou de récréation.",
            "Entretiens approfondis avec les parents d'élèves pour restituer les bilans et orienter vers les structures adaptées.",
            "Collaboration étroite avec les médecins scolaires, orthophonistes et pédopsychiatres du secteur."
        ],
        "specialties": [
            "Psychologie du développement de l'enfant",
            "Évaluation des fonctions cognitives & Troubles dys",
            "Inclusion scolaire du handicap & Troubles du spectre de l'autisme (TSA)",
            "Soutien à la parentalité & Protection de l'enfance"
        ],
        "skills": {
            "hard": [
                "Titre officiel de Psychologue (loi de 1985) et maîtrise des tests standardisés (WISC-V, WPPSI-IV)",
                "Clinique de l'enfant, psychopathologie et psychologie cognitive des apprentissages",
                "Textes officiels régissant la scolarisation des élèves en situation de handicap (loi de 2005)",
                "Déontologie stricte et respect du secret professionnel partagé"
            ],
            "soft": [
                "Neutralité bienveillante, grande écoute et empathie sans jugement",
                "Capacité à mettre les jeunes enfants en confiance lors des passations de tests",
                "Tact et diplomatie pour aborder des sujets délicats avec les parents",
                "Aptitude à travailler en réseau pluridisciplinaire"
            ],
            "pedagogie": [
                "Traduire des scores psychométriques abstraits en pistes pédagogiques concrètes pour l'enseignant",
                "Aider l'enfant à comprendre ses propres points forts et leviers de progression",
                "Accompagner les équipes dans le décodage des manifestations d'angoisse scolaire"
            ],
            "communication": [
                "Rédiger des comptes-rendus psychologiques clairs et nuancés",
                "Restituer les bilans aux familles avec délicatesse et bienveillance",
                "Coordonner les démarches avec les services hospitaliers et médico-sociaux"
            ],
            "organisation": [
                "Planifier les bilans sur les différentes écoles de la circonscription",
                "Gérer les urgences tout en respectant les délais des dossiers MDPH",
                "Tenir à jour les dossiers psychologiques sous pli confidentiel sécurisé"
            ],
            "numerique": [
                "Utiliser les logiciels informatisés de dépouillement des tests psychométriques",
                "Sécuriser les transmissions de bilans numériques selon le RGPD de santé",
                "Consulter les dossiers scolaires numériques dans le respect de la confidentialité"
            ]
        },
        "qualities": [
            "Finesse d'analyse clinique",
            "Empathie et bienveillance",
            "Patience et douceur",
            "Neutralité déontologique",
            "Rigueur intellectuelle"
        ],
        "studies": [
            "🇫🇷 France : Bac +5. Licence de Psychologie + Master en Psychologie (du développement, de l'éducation ou clinique) permettant l'obtention du titre de psychologue + Réussite au Concours de Psychologue de l'Éducation Nationale (PsyEN spécialité éducation, développement et apprentissages).",
            "🇸🇳 Sénégal : Bac +5. Master en Psychologie (UCAD) + Concours et formation d'orientation et de psychologie scolaire."
        ],
        "evolution": [
            "Maître de stage pour les étudiants en psychologie",
            "Formateur académique",
            "Directeur de Centre d'Information et d'Orientation (DCIO)",
            "Inspecteur de l'Éducation Nationale chargé de l'information et de l'orientation (IEN-IO)"
        ],
        "dailySchedule": [
            {"time": "08:30", "activity": "Arrivée dans une école de la circonscription, échange préalable avec l'enseignant d'un élève de CE1 en grande difficulté d'apprentissage."},
            {"time": "09:00", "activity": "Passation de la première partie du test d'efficience intellectuelle (WISC-V) avec l'enfant dans le bureau RASED."},
            {"time": "10:30", "activity": "Observation attentive de l'élève en situation de récréation : interactions avec ses pairs et motricité."},
            {"time": "11:15", "activity": "Dépouillement des subtests du matin et cotation des épreuves de mémoire de travail et vitesse de traitement."},
            {"time": "12:15", "activity": "Déjeuner et réunion de synthèse RASED avec l'enseignant spécialisé et le maître formateur."},
            {"time": "14:00", "activity": "Entretien de restitution de bilan avec la mère d'un élève de Grande Section de maternelle et préconisation d'un bilan orthophonique."},
            {"time": "15:30", "activity": "Réunion d'équipe éducative pour examiner la mise en place d'un PAP (Plan d'Accompagnement Personnalisé)."},
            {"time": "17:00", "activity": "Rédaction du compte-rendu psychologique confidentiel et fin de journée."}
        ],
        "quiz": [
            {
                "question": "Le psychologue de l'Éducation Nationale EDA exerce principalement auprès de quel public ?",
                "options": [
                    "Les étudiants d'université",
                    "Les enfants scolarisés en école maternelle et élémentaire (premier degré)",
                    "Les demandeurs d'emploi adultes",
                    "Les dirigeants d'entreprise"
                ],
                "answer": 1,
                "explanation": "Le PsyEN spécialité EDA (éducation, développement et apprentissages) intervient spécifiquement dans les écoles maternelles et primaires au sein du RASED."
            }
        ]
    }
]

# execution/llsh_jobs_part2.py
# -*- coding: utf-8 -*-
"""
Module de données métiers — Partie 2 : Philosophie, Sociologie, Psychologie, Géographie, Sciences Po, Documentation, Culture, Enseignement, Recherche, Journalisme, Édition, Économie.
Grande Famille : 📚 LETTRES, LANGUES & SCIENCES HUMAINES
Référentiel principal : Imagine ton Futur (https://www.imaginetonfutur.com/les-metiers/domaine/lettres-langues-sciences-humaines.html)
"""

LLSH_JOBS_PART2 = [
    # -----------------------------------------------------------------------
    # 17. ENSEIGNANT-CHERCHEUR EN PHILOSOPHIE / CONSULTANT EN ÉTHIQUE
    # -----------------------------------------------------------------------
    {
        "id": "enseignant-chercheur-philosophie",
        "slug": "enseignant-chercheur-philosophie",
        "title": "Enseignant-Chercheur en Philosophie / Consultant en Éthique",
        "aliases": ["Professeur de philosophie", "Philosophe clinicien", "Consultant en éthique appliquée", "Éthicien"],
        "icon": "🧠",
        "image": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Philosophie & Éthique Appliquée",
        "domainId": "philosophie-ethique",
        "subdomain": "Philosophie, Éthique appliquée & Bioéthique",
        "sectors": ["Enseignement supérieur", "Comités d'éthique", "Santé & Hôpitaux", "Intelligence artificielle & Tech"],
        "sourceImagineTonFutur": True,
        "isEmerging": True,
        "level": "Bac +5 (Master Recherche Philosophie) à Bac +8 (Doctorat en Philosophie, Agrégation)",
        "salary": "🇫🇷 France : 2 400 - 4 800 € net/mois (Maître de conférences / Professeur d'université ou vacations d'expertise éthique) • 🇸🇳 Sénégal : 500 000 - 1 600 000 FCFA / mois (UCAD, comités nationaux de bioéthique)",
        "simpleDefinition": "Le philosophe / chercheur en philosophie interroge les concepts fondamentaux (vérité, justice, conscience, liberté, technique), analyse de manière critique les mutations du monde contemporain et conseille les institutions ou entreprises sur les choix éthiques cruciaux (bioéthique, gouvernance de l'IA, responsabilité écologique).",
        "shortDescription": "Analyste des fondements de la pensée humaine, il éclaire les dilemmes éthiques contemporains et forme les esprits à l'esprit critique.",
        "longDescription": "Loin de la simple spéculation théorique, le philosophe contemporain s'empare des plus grands défis de notre époque. À l'université, il transmet l'histoire de la pensée et publie des recherches fondamentales. En entreprise, en milieu hospitalier (comités de bioéthique) ou dans la tech (gouvernance des algorithmes et de l'IA), il intervient comme consultant pour poser les questions de fond : Qu'est-ce qu'une décision juste ? Quels sont les risques de la délégation aux machines ? Il apporte une méthode d'argumentation impitoyable et une capacité de clarification conceptuelle indispensable.",
        "mainObjective": "Développer une pensée critique rigoureuse, analyser les concepts universels et guider les prises de décision face aux dilemmes moraux et technologiques.",
        "companyRole": "Garant du discernement éthique, de la clarification des concepts et de la rigueur argumentative.",
        "workEnvironment": [
            "🏛️ Universités et grands établissements d'enseignement (cours magistraux, séminaires)",
            "🏥 Espaces éthiques hospitaliers et comités nationaux de bioéthique",
            "🏢 Entreprises de haute technologie (comités d'éthique de l'IA, RSE)"
        ],
        "missions": [
            "Concevoir et dispenser des cours de philosophie générale, éthique, logique et philosophie des sciences",
            "Mener des recherches fondamentales sur les textes philosophiques et publier des ouvrages de référence",
            "Auditer les dilemmes éthiques dans les hôpitaux (fin de vie, dons d'organes, essais thérapeutiques)",
            "Définir des cadres de gouvernance éthique pour le déploiement d'algorithmes d'IA (IA Act, explicabilité)",
            "Animer des débats publics et cafés philosophiques pour démocratiser l'esprit critique citoyen"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Préparation de cours magistral", "desc": "Élaboration d'un cours d'épistémologie sur la distinction entre corrélation statistique et causalité pour des étudiants de master."},
            {"time": "10:30", "title": "Séance d'enseignement universitaire", "desc": "Animation d'un cours de 2 heures sur la théorie de la justice de John Rawls avec 150 étudiants."},
            {"time": "14:00", "title": "Comité d'éthique de l'IA pour une fintech", "desc": "Analyse critique des risques de discrimination algorithmique dans un modèle d'octroi de crédits."},
            {"time": "16:30", "title": "Rédaction d'un essai philosophique", "desc": "Rédaction d'un chapitre sur les mutations de la subjectivité humaine à l'ère des agents conversationnels."}
        ],
        "skills": {
            "technical": [
                "Maîtrise exhaustive de l'histoire de la philosophie (antique, médiévale, moderne et contemporaine)",
                "Logique formelle, philosophie du langage et épistémologie des sciences",
                "Méthodologie de la dissertation philosophique et de l'explication critique de texte",
                "Cadres réglementaires de la bioéthique et des chartes d'éthique de l'intelligence artificielle"
            ],
            "human": [
                "Pensée critique radicale et capacité à déceler les postulats implicites",
                "Pédagogie remarquable pour rendre accessibles des concepts hautement abstraits",
                "Écoute attentive, tolérance au doute constructif et humilité intellectuelle"
            ],
            "tools": [
                "Plateformes académiques (Cairn.info, PhilPapers, JSTOR)",
                "Outils de cartographie conceptuelle et d'argumentation (Coggle, Kialo)",
                "Logiciels de gestion bibliographique (Zotero)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Licence (Bac +3)", "title": "Licence de Philosophie", "desc": "Fondements des grands courants philosophiques, logique formelle et histoire des idées."},
                {"step": "Master (Bac +5)", "title": "Master Recherche Philosophie ou Master Éthique appliquée / Bioéthique", "desc": "Mémoire de recherche approfondi sur un concept ou un auteur et séminaires thématiques."},
                {"step": "Doctorat & Concours (Bac +8)", "title": "Doctorat en Philosophie + Agrégation de Philosophie", "desc": "Agrégation pour l'enseignement en lycée/classes préparatoires, doctorat pour le statut d'enseignant-chercheur."}
            ],
            "schools": [
                {"name": "Université Paris 1 Panthéon-Sorbonne / Sorbonne Université — France", "country": "France", "scope": "France"},
                {"name": "École Normale Supérieure (ENS Rue d'Ulm) — Paris, France", "country": "France", "scope": "France"},
                {"name": "Université Cheikh Anta Diop (Département de Philosophie de la FLSH) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Agrégation de Philosophie", "Diplôme Universitaire (DU) d'Éthique biomédicale"]
        },
        "career": {
            "sectors": ["Enseignement secondaire et supérieur", "Comités d'éthique et de bioéthique", "Grandes entreprises technologiques (Ethical AI Officer)", "Médias & Édition d'essais"],
            "employerTypes": ["Ministère de l'Éducation Nationale / Universités", "Établissements de santé", "Cabinets de conseil en gouvernance éthique"],
            "evolution": ["Professeur des universités", "Chief Ethics Officer (Directeur de l'Éthique en entreprise tech)", "Membre du Comité Consultatif National d'Éthique (CCNE)"],
            "pros": ["Élévation intellectuelle continue et liberté de pensée absolue", "Demande croissante d'éthique face aux dérives technologiques"],
            "cons": ["Concours de l'agrégation particulièrement sélectif", "Débouchés académiques limités nécessitant de savoir diversifier ses applications"]
        },
        "gettingStarted": {
            "beginnerProject": "Rédiger un plaidoyer éthique contradictoire de 4 pages sur la question : 'Faut-il accorder des droits juridiques ou une personnalité morale aux systèmes d'IA ?'.",
            "steps": [
                "Lire 'L'Impératif de responsabilité' de Hans Jonas",
                "Participer à des débats philosophiques structurés sur la plateforme collaborative Kialo.com",
                "Consulter les avis publics du Comité Consultatif National d'Éthique (CCNE)"
            ],
            "freeResources": ["PhilPapers (Répertoire mondial de philosophie)", "CCNE-ethique.fr (Avis et publications bioéthiques)"]
        },
        "aiImpact": {
            "summary": "L'essor fulgurant des IA génératives place la philosophie au cœur des enjeux stratégiques mondiaux : définir ce qu'est la conscience, la responsabilité juridique et la dignité humaine face à la machine.",
            "positiveImpacts": ["Création de postes d'éthiciens de l'IA (AI Ethics Officer) dans les géants de la tech", "Valorisation renouvelée des humanités dans la conception logicielle"],
            "risksAndChallenges": ["Réduction de l'éthique à du 'ethics-washing' superficiel dans certaines firmes", "Nécessité pour les philosophes de comprendre la réalité technique des modèles"],
            "recommendedSkills": ["Compréhension des architectures de deep learning et des biais d'entraînement", "Maîtrise des textes réglementaires émergents (AI Act européen)"]
        },
        "africaContext": {
            "senegalInsight": "La tradition philosophique sénégalaise est d'une richesse universelle, illustrée par la pensée de Léopold Sédar Senghor (l'humanisme du donner et du recevoir), Cheikh Anta Diop, et le philosophe contemporain mondialement célébré Souleymane Bachir Diagne (professeur à Columbia University et normalien). Le département de philosophie de l'UCAD est un phare intellectuel panafricain.",
            "westAfricaOpportunities": "Éthique du développement, philosophie politique décoloniale, bioéthique adaptée aux systèmes de santé africains et pensée du métissage culturel.",
            "localChampions": ["Département de Philosophie de l'UCAD (Dakar)", "Conseil National de l'Éthique pour la Recherche en Santé (CNERS Sénégal)", "Chaire UNESCO de Bioéthique"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Secteur Éducation, formation & Sciences humaines", "url": "https://www.imaginetonfutur.com/les-metiers/domaine/education-formation-rh.html", "type": "metier"},
            {"organization": "Comité Consultatif National d'Éthique (CCNE)", "title": "L'expertise éthique et philosophique", "url": "https://www.ccne-ethique.fr", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Le philosophe sénégalais Souleymane Bachir Diagne, ancien élève de l'École Normale Supérieure et professeur à l'Université Columbia de New York, a reçu en 2020 le prestigieux Prix Frantz Fanon pour l'ensemble de son œuvre philosophique réconciliant humanisme universel et pensée africaine !",
            "pourquoi": "Son parcours démontre que les humanités formées à Dakar rayonnent au sommet de la pensée mondiale.",
            "a_retenir": "La philosophie n'est pas une matière scolaire : c'est l'art d'habiter le monde avec lucidité."
        }
    },

    # -----------------------------------------------------------------------
    # 18. SOCIOLOGUE
    # -----------------------------------------------------------------------
    {
        "id": "sociologue",
        "slug": "sociologue",
        "title": "Sociologue / Chargé d'Études Sociales",
        "aliases": ["Chercheur en sociologie", "Sociologue d'entreprise", "Chargé d'enquêtes sociologiques", "Analyste des comportements sociaux"],
        "icon": "👥",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Sociologie & Enquêtes Sociales",
        "domainId": "sociologie-etudes",
        "subdomain": "Études sociologiques, Enquêtes & Analyses de population",
        "sectors": ["Instituts de sondage & d'études", "Politiques publiques", "Ressources humaines", "Recherche & Universités"],
        "sourceImagineTonFutur": True,
        "isEmerging": False,
        "level": "Bac +5 (Master Sociologie d'enquête, Sociologie du travail) à Bac +8 (Doctorat)",
        "salary": "🇫🇷 France : 2 100 - 3 800 € net/mois (~32 000 - 52 000 € brut/an, Source : Imagine ton Futur) • 🇸🇳 Sénégal : 450 000 - 1 500 000 FCFA / mois (ONGs internationales, Ministères, ANSD)",
        "simpleDefinition": "Le sociologue étudie le fonctionnement de la société, les comportements des groupes humains, les interactions sociales et les grandes mutations contemporaines en concevant des enquêtes de terrain rigoureuses (questionnaires, entretiens, observations) appuyées sur des méthodes statistiques et qualitatives.",
        "shortDescription": "Observateur méthodique des dynamiques collectives répertorié par Imagine ton Futur, il décode les transformations sociales pour guider les décideurs.",
        "longDescription": "Comme décrit sur la fiche officielle d'Imagine ton Futur, le sociologue ne se contente pas d'avoir des opinions : il applique une méthode scientifique rigoureuse pour comprendre pourquoi les individus agissent comme ils le font dans un contexte donné. Qu'il analyse les nouvelles aspirations au travail, les inégalités scolaires, les fractures territoriales ou les habitudes de consommation, il croise le recueil statistique quantitatif (sondages, démographie) avec l'analyse qualitative de terrain (entretiens approfondis, immersion ethnographique) pour produire des diagnostics objectifs.",
        "mainObjective": "Produire une analyse empirique et théorique des faits sociaux afin d'éclairer l'élaboration des politiques publiques et les stratégies organisationnelles.",
        "companyRole": "Analyste des dynamiques collectives et conseiller stratégique sur l'acceptabilité sociale et les transformations sociétales.",
        "workEnvironment": [
            "📊 Instituts de sondages et d'études d'opinion (Ipsos, BVA, Ifop, ANSD)",
            "🏛️ Ministères, collectivités territoriales et agences d'urbanisme",
            "🔬 Laboratoires de recherche sociologique et universités"
        ],
        "missions": [
            "Concevoir des protocoles d'enquêtes sociologiques (échantillonnage représentatif, grilles d'entretien)",
            "Mener des entretiens semi-directifs auprès de populations cibles et observer les interactions in situ",
            "Traiter et modéliser des bases de données statistiques d'enquêtes (analyses multivariées, régressions)",
            "Rédiger des rapports d'études opérationnels formulant des préconisations pour les décideurs",
            "Restituer les conclusions lors de colloques scientifiques ou auprès des directions générales"
        ],
        "typicalDay": [
            {"time": "09:00", "title": "Entretien qualitatif de terrain", "desc": "Conduite d'un entretien de 1h30 avec un représentant associatif sur les difficultés d'accès aux services publics en zone rurale."},
            {"time": "11:30", "title": "Traitement statistique sous R / SPSS", "desc": "Analyse factorielle des correspondances sur un échantillon de 2 000 réponses à une enquête sur le télétravail."},
            {"time": "14:30", "title": "Analyse thématique de verbatim", "desc": "Codage des réponses ouvertes et identification des sentiments dominants à l'aide d'un logiciel d'analyse textuelle."},
            {"time": "16:30", "title": "Restitution client auprès d'un ministère", "desc": "Présentation des résultats clés de l'étude sur l'insertion professionnelle des jeunes diplômés."}
        ],
        "skills": {
            "technical": [
                "Méthodes d'enquêtes quantitatives (échantillonnage, redressement, statistiques inférentielles)",
                "Méthodes qualitatives avancées (entretiens compréhensifs, observation participante, analyse de contenu)",
                "Épistémologie sociologique (Bourdieu, Weber, Durkheim, Crozier, Latour)",
                "Logiciels de traitement de données quantitatives et qualitatives (R, Python, SPSS, NVivo, Sphinx)"
            ],
            "human": [
                "Neutralité axiologique et capacité à mettre à distance ses propres préjugés",
                "Sens aigu de l'écoute bienveillante et aisance relationnelle tous publics",
                "Capacité de synthèse remarquable pour transformer des données brutes en récits intelligibles"
            ],
            "tools": [
                "Logiciels de statistiques (RStudio, SPSS, Stata)",
                "Outils d'analyse qualitative textuelle (NVivo, MAXQDA, Iramuteq)",
                "Plateformes d'enquêtes en ligne (Qualtrics, LimeSurvey, Sphinx)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Licence (Bac +3)", "title": "Licence de Sociologie ou Licence Sciences Sociales", "desc": "Fondations des théories sociologiques, statistiques descriptives et première enquête de terrain encadrée."},
                {"step": "Master professionnel / recherche (Bac +5)", "title": "Master Sociologie appliquée aux études d'opinion ou Master Sociologie du travail", "desc": "Recommandé par Imagine ton Futur : formation pluridisciplinaire croisant sociologie, statistiques et démographie."},
                {"step": "Doctorat (Bac +8)", "title": "Doctorat en Sociologie", "desc": "Indispensable pour les postes de chargé de recherche au CNRS, à l'IRD ou enseignant-chercheur universitaire."}
            ],
            "schools": [
                {"name": "Sciences Po Paris (École de la Recherche - Master Sociologie) — France", "country": "France", "scope": "France"},
                {"name": "Université Paris Cité / Sorbonne (Faculté des Sciences Sociales) — France", "country": "France", "scope": "France"},
                {"name": "Université Cheikh Anta Diop (Département de Sociologie de la FLSH) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification d'analyste de données d'enquêtes (R / Python)", "Certificat d'évaluation des politiques publiques"]
        },
        "career": {
            "sectors": ["Instituts de sondages et études de marché", "Directions des Ressources Humaines (climat social, QVT)", "Collectivités et ministères des affaires sociales", "Organisations non gouvernementales (ONGs)"],
            "employerTypes": ["Cabinets d'études sociologiques", "Agences de développement territorial", "Grandes entreprises"],
            "evolution": ["Directeur d'études d'opinion", "Directeur de la RSE et de l'impact social", "Directeur de recherche universitaire", "Consultant expert en politiques publiques"],
            "pros": ["Compréhension profonde des ressorts invisibles de la société", "Diversité infinie des sujets d'études (travail, famille, écologie, numérique)"],
            "cons": ["Pression des délais de restitution en institut privé", "Complexité de la recherche de financements académiques"]
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser une micro-enquête sociologique sur les pratiques de mobilité des étudiants de son quartier avec un questionnaire administré à 30 personnes et une analyse statistique de base.",
            "steps": [
                "Rédiger un questionnaire de 15 questions fermées et ouvertes sans biais d'induction",
                "Traiter les résultats sous Excel ou Google Sheets avec tableaux croisés",
                "Lire 'Le Métier de sociologue' de Pierre Bourdieu, Jean-Claude Chamboredon et Jean-Claude Passeron"
            ],
            "freeResources": ["Insee.fr (Données démographiques et sociales françaises)", "ANSD.sn (Agence Nationale de la Statistique et de la Démographie du Sénégal)"]
        },
        "aiImpact": {
            "summary": "L'IA accélère l'analyse de millions de publications sur les réseaux sociaux et la transcription instantanée d'entretiens, mais le recul sociologique est plus que jamais vital pour déconstruire les biais algorithmiques.",
            "positiveImpacts": ["Transcription audio automatisée des entretiens de recherche", "Analyse sémantique de corpus qualitatifs massifs en quelques minutes"],
            "risksAndChallenges": ["Illusion que le Big Data remplace l'enquête qualitative sur le terrain", "Renforcement des stéréotypes sociaux dans les modèles d'IA non audités"],
            "recommendedSkills": ["Sociologie du numérique et des algorithmes", "Audit critique des bases d'entraînement d'IA et de leurs biais sociaux"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la sociologie est omniprésente dans les programmes de développement communautaire, les études sur la jeunesse, les migrations, la microfinance et la modernisation des confréries religieuses. Le département de sociologie de l'UCAD, fondé sous l'impulsion de pionniers comme Abdoulaye Bara Diop, forme des sociologues intervenant auprès des ministères et grandes agences de coopération (AFD, USAID, PNUD).",
            "westAfricaOpportunities": "Évaluation d'impact social de projets miniers et d'infrastructures, sociologie de la santé (lutte contre les épidémies) et sociologie rurale.",
            "localChampions": ["ANSD (Agence Nationale de la Statistique et de la Démographie)", "Département de Sociologie de l'UCAD", "Laboratoire d'Études et de Recherches sur les Dynamiques Sociales et le Développement Local (LASDEL)"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Fiche métier : Sociologue", "url": "https://www.imaginetonfutur.com/metier/sociologue.html", "type": "metier"},
            {"organization": "Association Française de Sociologie (AFS)", "title": "Les métiers de la sociologie", "url": "https://afs-socio.fr", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Selon Imagine ton Futur, les diplômés de sociologie qui s'orientent vers les instituts de sondage ou les entreprises bénéficient d'une forte insertion professionnelle grâce à leur double compétence rare : rigueur statistique et analyse humaine des comportements !",
            "pourquoi": "Dans un monde saturé de données brutes, savoir leur donner un sens humain et prédictif est une compétence hautement recherchée.",
            "a_retenir": "Le sociologue dévoile les mécanismes invisibles qui relient l'individu au destin collectif."
        }
    },

    # -----------------------------------------------------------------------
    # 19. ETHNOLOGUE / ANTHROPOLOGUE
    # -----------------------------------------------------------------------
    {
        "id": "ethnologue",
        "slug": "ethnologue",
        "title": "Ethnologue / Anthropologue",
        "aliases": ["Anthropologue social", "Chercheur en ethnologie", "Anthropologue culturel", "Conseiller en diversité culturelle"],
        "icon": "👥",
        "image": "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Sociologie & Enquêtes Sociales",
        "domainId": "sociologie-etudes",
        "subdomain": "Ethnologie, Anthropologie culturelle & Récits oraux",
        "sectors": ["Recherche & Universités", "Musées d'ethnographie", "ONGs internationales", "Conseil d'entreprise"],
        "sourceImagineTonFutur": True,
        "isEmerging": False,
        "level": "Bac +5 (Master Anthropologie) à Bac +8 (Doctorat en Ethnologie / Anthropologie sociale)",
        "salary": "🇫🇷 France : 2 100 - 3 900 € net/mois (CNRS, IRD, Muséum d'Histoire Naturelle, Musées, Source : Imagine ton Futur) • 🇸🇳 Sénégal : 450 000 - 1 500 000 FCFA / mois (IFAN, projets de développement)",
        "simpleDefinition": "L'ethnologue étudie les cultures, traditions, rites, structures de parenté et modes de vie des différents groupes humains, à travers une immersion prolongée sur le terrain, l'observation participante et le recueil des traditions orales.",
        "shortDescription": "Spécialiste des cultures humaines documenté par Imagine ton Futur, il vit en immersion pour comprendre les coutumes et représentations du monde de chaque peuple.",
        "longDescription": "Comme décrit sur Imagine ton Futur, l'ethnologue passe plusieurs mois ou années en immersion au sein d'une communauté (qu'il s'agisse d'un village traditionnel d'Afrique ou d'Amazonie, ou d'une tribu urbaine de traders dans une salle de marché financière). Il apprend la langue locale, partage le quotidien des habitants, écoute les mythes et observe les rituels pour comprendre de l'intérieur comment cette société fait sens de l'existence. Ses écrits permettent de préserver le patrimoine culturel immatériel mondial et d'éviter les malentendus interculturels dans les projets d'aide au développement ou les entreprises mondialisées.",
        "mainObjective": "Décrire et théoriser la diversité des cultures humaines grâce à l'enquête de terrain ethnographique par immersion participante.",
        "companyRole": "Médiateur des diversités culturelles et expert de l'impact humain des mutations contemporaines.",
        "workEnvironment": [
            "⛺ Missions d'immersion de terrain en zones rurales ou urbaines du monde",
            "🏛️ Musées d'ethnographie et d'arts premiers (Musée du Quai Branly, Musée Théodore Monod)",
            "🔬 Instituts de recherche sur le développement (IRD, CNRS, IFAN)"
        ],
        "missions": [
            "Conduire des séjours d'immersion ethnographique prolongés avec observation participante",
            "Enregistrer, traduire et analyser les traditions orales, récits de vie et mythes fondateurs",
            "Étudier les systèmes de parenté, les croyances religieuses et les rapports de pouvoir locaux",
            "Conseiller les agences de développement et les ONGs sur l'acceptabilité culturelle des projets de santé ou d'eau potable",
            "Constituer des collections d'objets usuels et rituels pour les musées de société"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Observation participante de terrain", "desc": "Accompagnement des pêcheurs traditionnels lors de la préparation des filets pour observer les rituels propitiatoires."},
            {"time": "11:00", "title": "Enregistrement d'un récit de vie", "desc": "Entretien enregistré avec une doyenne du village sur la transmission des savoirs médicinaux traditionnels par les plantes."},
            {"time": "15:00", "title": "Rédaction du journal de terrain", "desc": "Consignation minutieuse des observations de la journée, des expressions locales et des réflexions méthodologiques."},
            {"time": "18:00", "title": "Point d'échange avec l'équipe de développement local", "desc": "Conseil aux ingénieurs agronomes pour adapter l'implantation d'un puits solaire aux croyances sacrées du lieu."}
        ],
        "skills": {
            "technical": [
                "Méthodologie de l'observation participante et du journal de terrain",
                "Techniques de recueil et d'analyse des récits de vie et de la tradition orale",
                "Anthropologie de la parenté, de l'art, de la santé et du religieux",
                "Maîtrise de la langue vernaculaire de la communauté étudiée"
            ],
            "human": [
                "Capacité d'adaptation exceptionnelle à des conditions de vie rustiques",
                "Empathie profonde, respect inconditionnel de l'autre et absence de jugement ethnocentrique",
                "Patience infinie pour gagner la confiance des communautés"
            ],
            "tools": [
                "Enregistreurs audio professionnels haute définition (Zoom H5/H6)",
                "Caméras vidéo pour l'anthropologie visuelle",
                "Carnets de terrain reliés étanches et logiciels de transcription audio"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Licence (Bac +3)", "title": "Licence Sociologie / Anthropologie ou Licence d'Ethnologie", "desc": "Introduction aux grands courants anthropologiques (évolutionnisme, fonctionnalisme, structuralisme de Claude Lévi-Strauss)."},
                {"step": "Master de recherche (Bac +5)", "title": "Master Anthropologie sociale et culturelle", "desc": "Recommandé par Imagine ton Futur : double compétence forte (ethnologie + communication, développement ou santé) et premier terrain d'enquête de plusieurs mois."},
                {"step": "Doctorat (Bac +8)", "title": "Doctorat en Anthropologie / Ethnologie", "desc": "Longue mission de terrain (1 à 2 ans d'immersion) aboutissant à la rédaction de la thèse d'État."}
            ],
            "schools": [
                {"name": "École des Hautes Études en Sciences Sociales (EHESS - Laboratoire d'Anthropologie Sociale) — Paris, France", "country": "France", "scope": "France"},
                {"name": "Musée du Quai Branly - Jacques Chirac / Université Paris Nanterre — France", "country": "France", "scope": "France"},
                {"name": "IFAN Cheikh Anta Diop / Département de Sociologie de l'UCAD — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Habilitation de recherche de terrain de l'IRD", "Certificat d'anthropologie visuelle"]
        },
        "career": {
            "sectors": ["Recherche académique (IRD, CNRS, universités)", "Musées ethnographiques et de société", "Organisations humanitaires et de développement (Croix-Rouge, UNICEF, OMS)", "Corporate Anthropology (cabinets d'innovation)"],
            "employerTypes": ["Instituts de recherche pour le développement", "ONGs internationales", "Musées nationaux"],
            "evolution": ["Directeur de recherche à l'IRD ou au CNRS", "Conservateur de musée d'ethnographie", "Expert-conseil pour les agences des Nations Unies"],
            "pros": ["Expérience humaine unique de fraternité avec des cultures du bout du monde", "Contribution à la sauvegarde du patrimoine immatériel de l'humanité"],
            "cons": ["Isolement géographique lors des longues missions de terrain", "Nombre de postes académiques permanents restreint"]
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser une observation participante de 3 jours dans un lieu de sociabilité urbain (marché de quartier, club de sport) et rédiger un carnet ethnographique de 10 pages décrivant les rituels invisibles du lieu.",
            "steps": [
                "Lire 'Tristes Tropiques' de Claude Lévi-Strauss pour comprendre l'esprit du métier",
                "Consulter les revues ethnologiques de référence (L'Homme, Journal des Africanistes)",
                "Prendre en main un enregistreur audio pour s'entraîner aux entretiens ethnographiques"
            ],
            "freeResources": ["Gradhiva (Revue d'anthropologie et d'histoire des arts du Musée du Quai Branly)", "Cairn.info (Revue L'Homme)"]
        },
        "aiImpact": {
            "summary": "L'IA ne peut vivre une expérience vécue humaine ni partager un repas sous une tente pour nouer des liens de confiance, confirmant le caractère irremplaçable du chercheur de terrain.",
            "positiveImpacts": ["Traduction automatique de dialectes rares pour assister les premiers contacts", "Numérisation et transcription rapide d'enregistrements audio de récits oraux"],
            "risksAndChallenges": ["Réductionnisme algorithmique ignorant les subtilités du non-verbal et des non-dits", "Risque d'appropriation culturelle des données indigènes"],
            "recommendedSkills": ["Éthique de la collecte des données patrimoniales autochtones", "Compétences en anthropologie visuelle et cinéma documentaire"]
        },
        "africaContext": {
            "senegalInsight": "Le Sénégal est une terre fondatrice de l'ethnologie africaine. L'IFAN (fondé en 1936 par Théodore Monod et dirigé plus tard par Cheikh Anta Diop) a documenté les savoirs ancestraux des peuples d'Afrique de l'Ouest (Sérères, Diolas, Peuls, Mandingues). Les anthropologues contemporains étudient les hybridations culturelles, les confréries soufies et les mutations écologiques de la pêche artisanale.",
            "westAfricaOpportunities": "Préservation des savoirs médicinaux traditionnels, médiation culturelle lors de grands projets d'aménagement et lutte contre les épidémies (anthropologie de la santé).",
            "localChampions": ["Musée Théodore Monod d'Art Africain (IFAN - Dakar)", "Société des Africanistes", "Laboratoire d'Anthropologie Médicale de l'UCAD"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Fiche métier : Ethnologue", "url": "https://www.imaginetonfutur.com/metier/ethnologue.html", "type": "metier"},
            {"organization": "Musée du Quai Branly - Jacques Chirac", "title": "L'anthropologie et l'ethnologie aujourd'hui", "url": "https://www.quaibranly.fr", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Selon Imagine ton Futur, pour exercer comme ethnologue, une double compétence est particulièrement recommandée (ex: ethnologie et communication, ou ethnologie et santé publique) afin de travailler pour des ONGs et des organisations internationales !",
            "pourquoi": "Les agences internationales ont compris qu'aucun projet de santé ou d'agriculture ne réussit sans comprendre intimement les croyances et représentations culturelles des populations locales.",
            "a_retenir": "L'ethnologue regarde l'autre pour découvrir ce qui nous unit tous."
        }
    },

    # -----------------------------------------------------------------------
    # 20. PSYCHOLOGUE CLINICIEN
    # -----------------------------------------------------------------------
    {
        "id": "psychologue-clinicien",
        "slug": "psychologue-clinicien",
        "title": "Psychologue Clinicien",
        "aliases": ["Psychothérapeute diplômé", "Psychologue de la santé", "Clinicien en santé mentale", "Psychologue d'hôpital"],
        "icon": "🧠",
        "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Psychologie & Accompagnement",
        "domainId": "psychologie",
        "subdomain": "Psychologie clinique & Psychopathologie",
        "sectors": ["Santé & Hôpitaux", "Cabinet libéral", "Aide sociale & Protection de l'enfance", "Éducation"],
        "sourceImagineTonFutur": True,
        "isEmerging": False,
        "level": "Bac +5 obligatoire (Master Psychologie clinique et psychopathologie) — Titre protégé par la loi",
        "salary": "🇫🇷 France : 2 000 - 3 800 € net/mois (Hôpital public / Salarié) à 3 500 - 6 500 € en cabinet libéral établi (Source : Imagine ton Futur) • 🇸🇳 Sénégal : 450 000 - 1 600 000 FCFA / mois",
        "simpleDefinition": "Le psychologue clinicien écoute, évalue, diagnostique et traite la souffrance psychologique, les traumatismes, les angoisses et les troubles du comportement chez les enfants, adolescents ou adultes, à travers des thérapies par la parole et des bilans psychologiques.",
        "shortDescription": "Spécialiste de la vie psychique documenté par Imagine ton Futur, il accompagne les personnes en souffrance pour restaurer leur équilibre émotionnel.",
        "longDescription": "Comme souligné dans les ressources d'Imagine ton Futur sur les métiers de la psychologie, le psychologue n'est ni un psychiatre (qui est un médecin habilité à prescrire des médicaments), ni un simple coach. C'est un professionnel titulaire d'un titre protégé par la loi après un Master universitaire sélectif et des centaines d'heures de stage clinique. En milieu hospitalier, en CMP (Centre Médico-Psychologique) ou en cabinet libéral, il offre un cadre d'écoute sécurisant, conduit des entretiens thérapeutiques et utilise des tests projectifs ou neuropsychologiques pour aider chaque personne à surmonter ses épreuves.",
        "mainObjective": "Restaurer l'équilibre psychologique, apaiser la détresse émotionnelle et favoriser le développement personnel des patients.",
        "companyRole": "Praticien de la santé mentale et de l'écoute clinique personnalisée.",
        "workEnvironment": [
            "🛋️ Cabinets libéraux de consultation psychologique",
            "🏥 Établissements hospitaliers (services de psychiatrie, pédiatrie, oncologie, soins palliatifs)",
            "🏢 Centres Médico-Psychologiques (CMP) et maisons d'enfants à caractère social (MECS)"
        ],
        "missions": [
            "Réaliser des entretiens cliniques approfondis pour évaluer la demande et le fonctionnement psychique",
            "Conduire des thérapies individuelles, de couple ou familiales (thérapies analytiques, TCC, systémiques)",
            "Faire passer des bilans psychologiques et tests de personnalité / d'intelligence (WISC, WAIS, Rorschach)",
            "Accompagner les victimes de traumatismes psychologiques ou de violences",
            "Participer aux réunions de synthèse pluridisciplinaires avec les médecins psychiatres, infirmiers et travailleurs sociaux"
        ],
        "typicalDay": [
            {"time": "09:00", "title": "Consultation clinique en cabinet", "desc": "Séance thérapeutique de 45 minutes avec un adulte souffrant d'anxiété généralisée et de phobie sociale."},
            {"time": "11:00", "title": "Passation de bilan psychologique chez un enfant", "desc": "Administration d'un test d'efficience cognitive (WISC-V) et analyse des processus attentionnels."},
            {"time": "14:00", "title": "Consultation à l'hôpital en oncologie", "desc": "Soutien psychologique d'un patient en cours de protocole de chimiothérapie et échange avec l'équipe soignante."},
            {"time": "16:30", "title": "Séance de supervision professionnelle", "desc": "Échange confidentiel avec un psychologue superviseur pour analyser les phénomènes de transfert et contre-transfert."}
        ],
        "skills": {
            "technical": [
                "Psychopathologie de l'adulte, de l'adolescent et de l'enfant",
                "Maîtrise des courants thérapeutiques (psychanalytique, cognitivo-comportemental TCC, systémique)",
                "Méthodologie de passation et d'interprétation des tests psychométriques et projectifs",
                "Code de déontologie des psychologues et secret professionnel médical"
            ],
            "human": [
                "Écoute bienveillante inconditionnelle et empathie profonde",
                "Solidité émotionnelle personnelle et capacité à contenir la souffrance d'autrui",
                "Capacité d'analyse clinique fine et neutralité bienveillante"
            ],
            "tools": [
                "Échelles psychométriques standardisées (WISC-V, WAIS-IV, NEPSY-II)",
                "Tests projectifs de personnalité (Rorschach, TAT, Patte-Noire)",
                "Outils de médiation thérapeutique (jeux, dessins, contes métaphoriques pour enfants)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Licence (Bac +3)", "title": "Licence de Psychologie", "desc": "Enseignement des 4 piliers : psychologie clinique, cognitive, du développement et sociale."},
                {"step": "Master professionnel (Bac +5)", "title": "Master Psychologie Clinique, Psychopathologie et Psychologie de la santé", "desc": "Sélection drastique à l'entrée de Master, 500 heures minimum de stage clinique et mémoire de recherche. Donne droit au titre légal de Psychologue."}
            ],
            "schools": [
                {"name": "Université Paris Cité (Institut de Psychologie) — France", "country": "France", "scope": "France"},
                {"name": "Université Paris 8 Vincennes-Saint-Denis (UFR Psychologie) — France", "country": "France", "scope": "France"},
                {"name": "Université Cheikh Anta Diop (Département de Psychologie de la FLSH) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Numéro ADELI / RPPS (Enregistrement obligatoire auprès de l'Agence Régionale de Santé)", "Titre légal de Psychologue (Loi n°85-772)"]
        },
        "career": {
            "sectors": ["Santé publique et privée", "Pratique libérale", "Protection judiciaire de la jeunesse (PJJ)", "Milieu pénitentiaire"],
            "employerTypes": ["Hôpitaux et cliniques", "Cabinet libéral indépendant", "Associations médico-sociales"],
            "evolution": ["Psychologue clinicien expert près les tribunaux", "Directeur d'établissement médico-social", "Enseignant-chercheur en psychologie", "Psychanalyste certifié"],
            "pros": ["Sentiment d'utilité humaine profond et accompagnement de résiliences extraordinaires", "Liberté de pratique et organisation souple en cabinet libéral"],
            "cons": ["Charge émotionnelle lourde nécessitant une supervision continue", "Risque d'usure de compassion (burnout empathique) si l'on ne pose pas de limites nettes"]
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser une fiche de lecture comparative entre l'approche psychanalytique (Freud/Lacan) et l'approche cognitivo-comportementale (Beck/Ellis) face aux attaques de panique.",
            "steps": [
                "S'inscrire en Licence de Psychologie à l'université",
                "Lire le Code de déontologie des psychologues de France",
                "Faire du bénévolat d'écoute auprès de plateformes d'aide (SOS Amitié, Croix-Rouge Écoute)"
            ],
            "freeResources": ["Codededeontologiedespsychologues.fr", "Société Française de Psychologie (SFP)"]
        },
        "aiImpact": {
            "summary": "Des chatbots conversationnels prétendent offrir un soutien émotionnel, mais seul un psychologue humain peut ressentir la détresse réelle, percevoir les silences et tisser l'alliance thérapeutique qui guérit.",
            "positiveImpacts": ["Outils numériques d'auto-évaluation et journaux de bord d'humeur partagés", "Réalité virtuelle thérapeutique pour le traitement des phobies (exposition graduée)"],
            "risksAndChallenges": ["Conseils inadaptés voire dangereux générés par des chatbots non régulés", "Perte de contact humain direct chez les personnes isolées"],
            "recommendedSkills": ["Maîtrise de la téléconsultation psychologique sécurisée", "Intégration éthique d'outils numériques complémentaires aux séances en présentiel"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la santé mentale connaît une prise de conscience historique avec la valorisation de la psychologie clinique et de l'ethnopsychiatrie (illustrée par les travaux mondialement célèbres de l'École de Fann à Dakar, initiée par les Prs Collomb et Diop). Les psychologues sénégalais créent des passerelles uniques entre thérapies occidentales et traditions d'écoute communautaire (le 'Ndeup').",
            "westAfricaOpportunities": "Psychologie d'urgence lors de crises humanitaires, soutien psychologique des réfugiés et lutte contre la stigmatisation des maladies mentales.",
            "localChampions": ["Clinique Psychiatrique de Fann (CHNU de Fann - Dakar)", "Département de Psychologie de l'UCAD", "Association Sénégalaise des Psychologues"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Fiche métier : Psychologue", "url": "https://www.imaginetonfutur.com/metier/devenir-psychologue.html", "type": "metier"},
            {"organization": "Fédération Française des Psychologues et de Psychologie (FFPP)", "title": "Le titre et l'exercice de psychologue", "url": "https://psychologues-psychologie.net", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En France comme dans la plupart des pays francophones, le titre de psychologue est strictement protégé par la loi : nul ne peut se dire psychologue sans détenir une licence ET un master de psychologie comportant un stage validé de 500 heures sous peine de poursuites pénales pour usurpation de titre !",
            "pourquoi": "Cette protection légale garantit aux patients que leur santé mentale est confiée à un professionnel hautement qualifié soumis au secret professionnel.",
            "a_retenir": "Le psychologue clinicien est l'artisan de la parole qui libère et reconstruit."
        }
    },

    # -----------------------------------------------------------------------
    # 21. PSYCHOLOGUE DU TRAVAIL & DES ORGANISATIONS
    # -----------------------------------------------------------------------
    {
        "id": "psychologue-du-travail",
        "slug": "psychologue-du-travail",
        "title": "Psychologue du Travail & des Organisations",
        "aliases": ["Ergonome psychologue", "Consultant en Qualité de Vie au Travail (QVT)", "Psychologue d'entreprise", "Expert RPS (Risques Psycho-Sociaux)"],
        "icon": "🏢",
        "image": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Psychologie & Accompagnement",
        "domainId": "psychologie",
        "subdomain": "Psychologie du travail, Santé mentale & Ergonomie",
        "sectors": ["Grandes entreprises", "Services de santé au travail", "Cabinets de conseil RH", "Institutions publiques"],
        "sourceImagineTonFutur": True,
        "isEmerging": True,
        "level": "Bac +5 (Master Psychologie du travail et des organisations, Ergonomie)",
        "salary": "🇫🇷 France : 34 000 - 55 000 € brut/an (~2 300 - 3 800 € net/mois, forte demande en entreprise) • 🇸🇳 Sénégal : 500 000 - 1 700 000 FCFA / mois (Multinationales, banques, télécoms)",
        "simpleDefinition": "Le psychologue du travail étudie les relations entre l'humain et son environnement professionnel pour améliorer le bien-être des salariés, prévenir les risques psychosociaux (burnout, harcèlement, stress), concevoir des organisations de travail saines et accompagner le changement.",
        "shortDescription": "Spécialiste de la santé mentale en entreprise documenté par Imagine ton Futur, il prévient le surmenage et concilie bien-être et performance.",
        "longDescription": "Face à la digitalisation effrénée, au télétravail et aux restructurations permanentes, le psychologue du travail est un acteur pivot des organisations modernes. Il n'intervient pas pour psychanalyser les salariés, mais pour analyser scientifiquement l'activité réelle, l'ergonomie cognitive, la charge mentale et la dynamique des équipes. Il audite les Risques Psycho-Sociaux (RPS), forme les managers à la bienveillance, aménage les postes de travail et aide les entreprises à concilier santé mentale des équipes et efficacité économique.",
        "mainObjective": "Adapter le travail à l'humain afin de protéger la santé psychologique des collaborateurs et d'optimiser l'organisation collective.",
        "companyRole": "Expert en santé au travail, prévention des risques psychosociaux et accompagnement humain des transformations.",
        "workEnvironment": [
            "🏢 Sièges sociaux de grandes entreprises et multinationales",
            "🏥 Services de Prévention et de Santé au Travail (SPST)",
            "💼 Cabinets de conseil en management, ergonomie et ressources humaines"
        ],
        "missions": [
            "Conduire des audits de climat social et des diagnostics approfondis des Risques Psycho-Sociaux (RPS)",
            "Accompagner individuellement les salariés en situation de souffrance professionnelle (burnout, perte de sens)",
            "Animer des ateliers de prévention du stress, de communication non violente et de gestion des conflits",
            "Conseiller les directions des ressources humaines lors de fusions, déménagements ou réorganisations majeures",
            "Concevoir des fiches de postes ergonomiques et adapter les environnements de travail pour les personnes en situation de handicap"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Entretien individuel de soutien psychologique", "desc": "Entretien confidentiel avec un manager victime d'épuisement professionnel pour préparer son plan de reprise d'activité."},
            {"time": "10:30", "title": "Animation d'un groupe d'expression sur le télétravail", "desc": "Facilitation d'un atelier avec 12 collaborateurs pour identifier les bonnes pratiques d'équilibre vie pro / vie perso."},
            {"time": "14:00", "title": "Restitution d'audit RPS devant le CSE", "desc": "Présentation des indicateurs de charge mentale et préconisations d'amélioration devant la direction et les élus du personnel."},
            {"time": "16:30", "title": "Conception d'un module de formation managériale", "desc": "Élaboration d'un guide pratique 'Détecter les signes faibles de détresse psychologique dans son équipe'."}
        ],
        "skills": {
            "technical": [
                "Psychologie des organisations, dynamique de groupe et psychosociologie",
                "Méthodologie d'analyse de l'activité réelle de travail et ergonomie cognitive",
                "Réglementation sur la santé et sécurité au travail (Document Unique d'Évaluation des Risques - DUERP)",
                "Techniques de médiation et de résolution de conflits interpersonnels"
            ],
            "human": [
                "Neutralité absolue entre les intérêts de la direction et les attentes des salariés",
                "Grande écoute empathique et capacité à désamorcer des situations tendues",
                "Aisance oratoire face aux directions générales et aux partenaires sociaux"
            ],
            "tools": [
                "Questionnaires de mesure du stress et de l'épuisement (MBI de Maslach, Karasek, Siegrist)",
                "Outils de cartographie des processus de travail et grilles d'observation ergonomique",
                "Plateformes d'écoute psychologique et de baromètres d'engagement anonymes"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Licence (Bac +3)", "title": "Licence de Psychologie", "desc": "Bases de la psychologie sociale, cognitive et des méthodes quantitatives."},
                {"step": "Master professionnel (Bac +5)", "title": "Master Psychologie du Travail et des Organisations ou Master Ergonomie", "desc": "Stage professionnel obligatoire en entreprise de 500 heures et titre légal de psychologue."}
            ],
            "schools": [
                {"name": "CNAM (Conservatoire National des Arts et Métiers - Chaire de Psychologie du Travail) — Paris, France", "country": "France", "scope": "France"},
                {"name": "Université Paris Nanterre (Master Psychologie du Travail) — France", "country": "France", "scope": "France"},
                {"name": "BEM Dakar / ISM Dakar (Modules RH & Psychologie organisationnelle) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Titre légal de Psychologue (ADELI / RPPS)", "Certification IPRP (Intervenant en Prévention des Risques Professionnels)"]
        },
        "career": {
            "sectors": ["Grandes entreprises industrielles et de services", "Services de santé au travail interentreprises", "Cabinets de conseil RH et de recrutement", "Fonction publique hospitalière et territoriale"],
            "employerTypes": ["Directions RH de multinationales", "Cabinets de conseil spécialisés QVT", "Organismes d'audit"],
            "evolution": ["Directeur des Ressources Humaines (DRH)", "Responsable RSE et Santé globale", "Directeur de cabinet de conseil en management", "Consultant indépendant de haut niveau"],
            "pros": ["Rôle stratégique très valorisé par les entreprises modernes", "Excellente insertion professionnelle et rémunérations attractives"],
            "cons": ["Position parfois délicate entre les exigences de rentabilité de la direction et la détresse des salariés", "Résistance culturelle au changement dans certaines structures"]
        },
        "gettingStarted": {
            "beginnerProject": "Analyser l'ergonomie et la charge mentale d'un poste de travail administratif à partir d'une grille d'observation de 10 critères et proposer 3 améliorations concrètes.",
            "steps": [
                "Découvrir les grilles de diagnostic du stress au travail (modèle Karasek)",
                "Lire 'Le travail à cœur' d'Yves Clot, référence de la psychologie du travail contemporaine",
                "Assister aux webinaires de l'INRS (Institut National de Recherche et de Sécurité)"
            ],
            "freeResources": ["INRS.fr (Dossiers sur les risques psychosociaux)", "ANACT (Agence Nationale pour l'Amélioration des Conditions de Travail)"]
        },
        "aiImpact": {
            "summary": "L'automatisation et les outils d'IA transforment les métiers à un rythme effréné : le psychologue du travail est indispensable pour concevoir des transitions professionnelles qui respectent la dignité et le rythme d'adaptation des salariés.",
            "positiveImpacts": ["Baromètres de bien-être au travail analysés en temps réel par IA pour détecter les signaux d'alerte", "Élimination des tâches de saisie fastidieuses au profit de l'accompagnement humain"],
            "risksAndChallenges": ["Stress accru lié à la surveillance algorithmique et au travail sous contrôle d'IA", "Isolement accru des salariés en 100% télétravail"],
            "recommendedSkills": ["Ergonomie des interfaces homme-machine (IHM) augmentées par IA", "Accompagnement du changement face aux technologies d'automatisation"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la croissance rapide du secteur tertiaire (banques, télécoms comme Orange/Sonatel, centres d'appels BPO à Dakar) fait émerger une forte demande de psychologues du travail pour gérer le stress des téléconseillers, prévenir le turnover et adapter le management aux valeurs culturelles locales (solidarité communautaire, respect des aînés).",
            "westAfricaOpportunities": "Politiques de QVT dans les multinationales minières et pétrolières, audit de climat social et formation des cadres dirigeants africains.",
            "localChampions": ["Caisse de Sécurité Sociale du Sénégal (Direction de la Prévention)", "Sonatel / Orange Sénégal (Direction RH & QVT)", "Cabinet Afrique Compétences"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Secteur Éducation, formation, RH & Psychologie", "url": "https://www.imaginetonfutur.com/les-metiers/domaine/education-formation-rh.html", "type": "metier"},
            {"organization": "Institut National de Recherche et de Sécurité (INRS)", "title": "Les risques psychosociaux au travail", "url": "https://www.inrs.fr", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Selon les études de l'OMS et du BIT, chaque euro ou dollar investi par une entreprise dans la prévention de la santé mentale et l'ergonomie génère un retour sur investissement moyen de 4 euros en baisse de l'absentéisme et hausse de productivité !",
            "pourquoi": "Des salariés écoutés et travaillant dans un cadre ergonomique sain sont beaucoup plus innovants et fidèles à leur entreprise.",
            "a_retenir": "Le psychologue du travail prouve que l'humanisme est le meilleur allié de l'efficacité."
        }
    },

    # -----------------------------------------------------------------------
    # 22. CONSEILLER D'ORIENTATION PSYCHOLOGUE
    # -----------------------------------------------------------------------
    {
        "id": "conseiller-orientation-psychologue",
        "slug": "conseiller-orientation-psychologue",
        "title": "Conseiller d'Orientation Psychologue / Psychologue de l'Éducation Nationale",
        "aliases": ["Psychologue de l'Éducation Nationale (PsyEN)", "Conseiller d'orientation scolaire", "Coach d'orientation professionnelle", "Consultant en bilans de compétences"],
        "icon": "🧭",
        "image": "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Psychologie & Accompagnement",
        "domainId": "psychologie",
        "subdomain": "Orientation scolaire, Bilans & Psychologie du développement",
        "sectors": ["Éducation Nationale (Collèges, Lycées, CIO)", "Enseignement supérieur", "Cabinets privés d'orientation", "Centres de bilans"],
        "sourceImagineTonFutur": True,
        "isEmerging": False,
        "level": "Bac +5 (Master Psychologie) + Concours d'État de Psychologue de l'Éducation Nationale (PsyEN)",
        "salary": "🇫🇷 France : 1 900 - 3 400 € net/mois (Fonction publique d'État, Source : Imagine ton Futur) • 🇸🇳 Sénégal : 350 000 - 950 000 FCFA / mois (Ministère de l'Éducation, CAOSP)",
        "simpleDefinition": "Le conseiller d'orientation psychologue aide les élèves, étudiants et adultes à identifier leurs talents, leurs centres d'intérêt et leurs compétences afin d'élaborer un projet d'études et de carrière réaliste, motivant et épanouissant.",
        "shortDescription": "Guide des trajectoires d'avenir recensé par Imagine ton Futur, il éclaire les choix de filières et dénoue les blocages scolaires.",
        "longDescription": "Comme décrit sur la fiche officielle d'Imagine ton Futur, le conseiller d'orientation psychologue (aujourd'hui PsyEN) possède une double compétence essentielle : il connaît sur le bout des doigts le système éducatif, les filières de formation et l'évolution du marché du travail, tout en étant un psychologue diplômé capable d'écouter les angoisses d'un jeune, de déceler une phobie scolaire ou d'administrer des tests d'intérêts et de personnalité. Il intervient dans les collèges, lycées et Centres d'Information et d'Orientation (CIO) pour redonner confiance à ceux qui hésitent sur leur avenir.",
        "mainObjective": "Permettre à chaque individu de construire son identité professionnelle en alignant ses aspirations personnelles, ses aptitudes réelles et les réalités du monde du travail.",
        "companyRole": "Accompagnateur des transitions d'études et architecte du parcours d'orientation des jeunes.",
        "workEnvironment": [
            "🏫 Collèges et lycées (permanences hebdomadaires)",
            "🏢 Centres d'Information et d'Orientation (CIO)",
            "💼 Cabinets privés d'orientation scolaire et bilans de compétences pour adultes"
        ],
        "missions": [
            "Conduire des entretiens individuels d'orientation pour clarifier les projets et rassurer les élèves et familles",
            "Faire passer et interpréter des questionnaires d'intérêts professionnels et bilans psychologiques (IRMR, RIASEC)",
            "Animer des séances collectives en classe sur la découverte des grandes familles de métiers et Parcoursup",
            "Détecter et prendre en charge les élèves en situation de décrochage scolaire, mal-être ou phobie des apprentissages",
            "Conseiller les équipes pédagogiques et participer aux conseils de classe pour guider les choix de spécialités"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Entretien individuel au lycée", "desc": "Entretien de 45 minutes avec un élève de première indécis entre des études de médecine ou d'ingénierie."},
            {"time": "10:30", "title": "Animation d'un atelier en classe de terminale", "desc": "Présentation méthodologique de la formulation des vœux et lettres de motivation sur Parcoursup."},
            {"time": "14:00", "title": "Permanence au Centre d'Information et d'Orientation (CIO)", "desc": "Accueil sans rendez-vous d'un jeune déscolarisé et orientation vers une filière d'apprentissage adaptée."},
            {"time": "16:30", "title": "Réunion de l'équipe de suivi de scolarisation", "desc": "Coordination avec le médecin scolaire et l'assistante sociale pour un plan d'accompagnement personnalisé."}
        ],
        "skills": {
            "technical": [
                "Psychologie de l'adolescent, du développement et théories de l'orientation",
                "Connaissance exhaustive des diplômes, filières de formation et débouchés professionnels",
                "Méthodologie de passation et d'analyse des questionnaires d'intérêts (modèle RIASEC de Holland)",
                "Procédures d'affectation et plateformes d'accès à l'enseignement supérieur (Parcoursup)"
            ],
            "human": [
                "Écoute bienveillante dénuée de tout jugement et capacité à rassurer",
                "Patience, neutralité face aux désirs parfois contradictoires des parents et des enfants",
                "Esprit d'encouragement et capacité à faire émerger le potentiel caché"
            ],
            "tools": [
                "Questionnaires d'intérêts et d'orientation (IRMR3, Strong, Profil Pro)",
                "Bases de données documentaires de l'Onisep et référentiels métiers",
                "Plateformes d'affectation scolaire et universitaire"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Licence (Bac +3)", "title": "Licence de Psychologie", "desc": "Fondements de la psychologie clinique, différentielle et cognitive."},
                {"step": "Master (Bac +5)", "title": "Master Psychologie de l'Éducation et de la Formation", "desc": "Formation spécialisée en psychologie du développement et théories de l'orientation scolaire."},
                {"step": "Concours de recrutement (Bac +5)", "title": "Concours de Psychologue de l'Éducation Nationale (PsyEN spécialité EDO)", "desc": "Concours d'État sélectif suivi d'une année de stage rémunérée en CIO et établissements scolaires."}
            ],
            "schools": [
                {"name": "INETOP / CNAM (Institut National d'Étude du Travail et d'Orientation Professionnelle) — Paris, France", "country": "France", "scope": "France"},
                {"name": "Université de Rennes 2 / Université d'Aix-Marseille (Master PsyEN) — France", "country": "France", "scope": "France"},
                {"name": "FASTEF (Faculté des Sciences et Technologies de l'Éducation et de la Formation - UCAD) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat de Psychologue de l'Éducation Nationale (PsyEN)", "Certification Praticien RIASEC / MBTI"]
        },
        "career": {
            "sectors": ["Ministère de l'Éducation Nationale", "Services d'orientation universitaire (SCUIO)", "Cabinets privés d'orientation et de coaching", "Centres de reconversion pour adultes"],
            "employerTypes": ["Éducation Nationale (Collèges, Lycées, CIO)", "Universités", "Cabinets libéraux"],
            "evolution": ["Directeur de Centre d'Information et d'Orientation (DCIO)", "Inspecteur de l'Éducation Nationale (IEN-IO)", "Consultant senior en gestion des carrières et mobilité"],
            "pros": ["Rôle décisif pour débloquer l'avenir de jeunes en perte de repères", "Rythme de travail aligné sur le calendrier scolaire pour les fonctionnaires"],
            "cons": ["Nombre d'élèves très élevé par conseiller (parfois plus de 1 000 élèves par PsyEN)", "Lourdeur des procédures administratives d'affectation"]
        },
        "gettingStarted": {
            "beginnerProject": "Passer soi-même le test des 6 types de personnalité professionnelle de Holland (RIASEC) et analyser en 3 pages l'adéquation entre son profil et 5 fiches métiers cibles.",
            "steps": [
                "Découvrir la typologie RIASEC (Réaliste, Investigateur, Artistique, Social, Entreprenant, Conventionnel)",
                "Explorer la plateforme Le Monde du Travail et tester l'algorithme de la Boussole",
                "Interviewer un conseiller d'orientation en CIO pour comprendre son quotidien"
            ],
            "freeResources": ["Onisep.fr (Portail national d'information sur les métiers)", "Orientation.ch (Ressources d'orientation francophones)"]
        },
        "aiImpact": {
            "summary": "Des algorithmes de matching recommandent des listes de métiers à partir de questionnaires, mais seul le conseiller humain sait détecter les peurs cachées, les pressions familiales inconscientes et redonner foi en soi.",
            "positiveImpacts": ["Boussoles intelligentes et cartographies de métiers pour élargir les horizons des jeunes", "Automatisation de la recherche de critères de formation et de débouchés"],
            "risksAndChallenges": ["Enfermement des jeunes dans des profils stéréotypés par des algorithmes simplistes", "Risque de découragement face à des scores d'admission anxiogènes"],
            "recommendedSkills": ["Posture d'écoute clinique empathique augmentée par les données", "Capacité à accompagner le discernement critique face aux suggestions automatisées"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'orientation scolaire et professionnelle est pilotée par les Centres Académiques de l'Orientation Scolaire et Professionnelle (CAOSP) présents dans chaque région. Face à une population dont plus de 60% a moins de 25 ans, les conseillers d'orientation jouent un rôle de sécurité nationale en guidant la jeunesse vers les filières scientifiques, techniques et professionnelles porteuses (BTP, numérique, agroalimentaire) pour lutter contre le sous-emploi.",
            "westAfricaOpportunities": "Mise en place de cellules d'orientation dans les lycées techniques et universités régionales (UGB, USSEIN, UASZ).",
            "localChampions": ["CAOSP de Dakar et des régions du Sénégal", "FASTEF de l'Université Cheikh Anta Diop", "Direction de l'Enseignement Supérieur (DES)"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Fiche métier : Conseiller d'orientation psychologue", "url": "https://www.imaginetonfutur.com/metier/conseiller-dorientation-psychologue.html", "type": "metier"},
            {"organization": "Ministère de l'Éducation Nationale", "title": "Devenir Psychologue de l'Éducation nationale (PsyEN)", "url": "https://www.education.gouv.fr", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Selon Imagine ton Futur, le conseiller d'orientation psychologue est avant tout un psychologue diplômé d'État : son écoute permet de déceler si un problème d'orientation cache en réalité un problème familial, relationnel ou un manque d'estime de soi !",
            "pourquoi": "L'orientation n'est pas une simple formalité administrative : c'est un moment charnière de la construction de sa propre identité d'adulte.",
            "a_retenir": "Le conseiller d'orientation aide chacun à trouver sa boussole intérieure."
        }
    },

    # -----------------------------------------------------------------------
    # 23. GÉOGRAPHE-CARTOGRAPHE / ANALYSTE SIG
    # -----------------------------------------------------------------------
    {
        "id": "geographe-cartographe",
        "slug": "geographe-cartographe",
        "title": "Géographe-Cartographe / Analyste SIG",
        "aliases": ["Ingénieur géomaticien", "Analyste spatial", "Cartographe d'aménagement", "Géographe urbaniste"],
        "icon": "🌍",
        "image": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Géographie & Aménagement",
        "domainId": "geographie-amenagement",
        "subdomain": "Cartographie numérique, SIG & Analyse spatiale",
        "sectors": ["Aménagement du territoire", "Environnement & Climat", "Transports & Mobilité", "Défense & Géomatique"],
        "sourceImagineTonFutur": True,
        "isEmerging": True,
        "level": "Bac +3 (Licence Pro SIG) à Bac +5 (Master Géographie, Aménagement & Géomatique)",
        "salary": "🇫🇷 France : 2 200 - 3 900 € net/mois (~32 000 - 54 000 € brut/an, forte demande SIG) • 🇸🇳 Sénégal : 450 000 - 1 600 000 FCFA / mois (Projets cadastraux, aménagement, ONG)",
        "simpleDefinition": "Le géographe-cartographe collecte, modélise, croise et visualise les données spatiales et territoriales à l'aide de Systèmes d'Information Géographique (SIG) pour concevoir des cartes décisionnelles éclairant l'aménagement urbain, l'environnement et les transports.",
        "shortDescription": "Architecte des cartes et des données spatiales, il combine sciences humaines et technologies numériques pour penser les territoires.",
        "longDescription": "Loin de se limiter à dessiner les frontières, le géographe moderne est un ingénieur de l'espace. En associant une solide compréhension des dynamiques humaines et physiques (urbanisme, sociologie, climatologie) aux outils informatiques les plus puissants (SIG, imagerie satellite, drones, Big Data spatial), il modélise les risques d'inondation, planifie le tracé d'un futur tramway ou cartographie les déserts médicaux pour aider les élus et les entreprises à prendre les bonnes décisions d'implantation.",
        "mainObjective": "Transformer des données géographiques complexes en représentations cartographiques stratégiques et intelligibles pour la gestion du territoire.",
        "companyRole": "Expert en intelligence spatiale et pilotage cartographique des projets territoriaux.",
        "workEnvironment": [
            "🖥️ Stations graphiques de géomatique et double écran de modélisation SIG",
            "🏛️ Collectivités locales, agences d'urbanisme et ministères de l'Aménagement",
            "🛰️ Bureaux d'études en environnement, énergie et sociétés de transport"
        ],
        "missions": [
            "Intégrer et géoréférencer des flux de données massives (images satellites, OpenStreetMap, données démographiques)",
            "Concevoir des analyses spatiales multicritères sous SIG (zones d'influence, couloirs de biodiversité, accessibilité)",
            "Réaliser des cartes thématiques communicantes selon les règles de la sémiologie graphique (Jacques Bertin)",
            "Piloter des applications cartographiques web interactives (WebSIG) pour les citoyens ou les décideurs",
            "Effectuer des relevés de terrain par GPS différentiel ou drone pour mettre à jour les bases spatiales"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Modélisation des îlots de chaleur urbains", "desc": "Croisement sous QGIS des données thermographiques satellites avec la densité de végétation pour cartographier les zones prioritaires de végétalisation."},
            {"time": "11:00", "title": "Création d'une carte thématique pour le Plan Local d'Urbanisme", "desc": "Mise en page vectorielle sous Illustrator d'une carte de zonage réglementaire pour une métropole."},
            {"time": "14:00", "title": "Développement d'une couche WebSIG interactive", "desc": "Configuration d'un tableau de bord cartographique Mapbox / Leaflet pour suivre en direct le réseau de transports."},
            {"time": "16:30", "title": "Réunion avec les urbanistes et élus", "desc": "Présentation des résultats de l'étude d'accessibilité piétonne autour des futures gares ferroviaires."}
        ],
        "skills": {
            "technical": [
                "Maîtrise des Systèmes d'Information Géographique SIG (QGIS, ArcGIS Pro)",
                "Règles d'or de la sémiologie graphique et du design cartographique",
                "Traitement d'images de télédétection satellite (Sentinel, Landsat) et LiDAR",
                "Gestion de bases de données spatiales (PostGIS, SQL spatial) et langages de script (Python GeoPandas)"
            ],
            "human": [
                "Sens aigu de l'esthétique visuelle et précision géométrique",
                "Esprit de synthèse pour faire ressortir l'essentiel d'une masse de données complexes",
                "Curiosité pour les enjeux sociétaux, environnementaux et géopolitiques"
            ],
            "tools": [
                "Logiciels SIG de référence (QGIS, ArcGIS Pro)",
                "Bases de données relationnelles spatiales (PostgreSQL / PostGIS)",
                "Outils graphiques de mise en page cartographique (Adobe Illustrator + plug-in MAPublisher)",
                "Librairies de webmapping (Leaflet, Mapbox GL JS, OpenLayers)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Licence (Bac +3)", "title": "Licence de Géographie et Aménagement ou Licence Pro Géomatique", "desc": "Fondations en géographie physique et humaine, initiation aux SIG et à la cartographie statistique."},
                {"step": "Master professionnel (Bac +5)", "title": "Master Géomatique / SIG ou Master Aménagement du Territoire et Urbanisme", "desc": "Apprentissage approfondi de la modélisation spatiale, du codage Python spatial et gestion de projets territoriaux."}
            ],
            "schools": [
                {"name": "ENSG (École Nationale des Sciences Géographiques - IGN) — Champs-sur-Marne, France", "country": "France", "scope": "France"},
                {"name": "Université Panthéon-Sorbonne (Master Géoprisme / Géomatique) — France", "country": "France", "scope": "France"},
                {"name": "Université Cheikh Anta Diop (Département de Géographie de la FLSH / CSE) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification professionnelle Esri ArcGIS Desktop", "Brevet de télépilote professionnel de drone civil"]
        },
        "career": {
            "sectors": ["Collectivités territoriales (Régions, Métropoles, Mairies)", "Bureaux d'études en environnement & BTP", "Grandes entreprises de réseaux (Eau, Électricité, Télécoms)", "Organismes d'aide internationale"],
            "employerTypes": ["Agences d'urbanisme", "IGN (Institut national de l'information géographique et forestière)", "Sociétés de conseil en géomatique"],
            "evolution": ["Chef de projet SIG / Géomatique", "Directeur de l'aménagement du territoire", "Expert data territoriale & Smart City", "Consultant international en cartographie d'urgence"],
            "pros": ["Secteur en plein essor au carrefour de la technologie et de l'environnement", "Impact visuel immédiat et satisfaction de voir ses cartes guider les décisions"],
            "cons": ["Gestion de bases de données volumineuses parfois fastidieuse", "Nécessite une veille technologique constante sur les outils du webmapping"]
        },
        "gettingStarted": {
            "beginnerProject": "Télécharger le logiciel open-source gratuit QGIS et créer une carte des pistes cyclables ou des espaces verts de sa ville à partir des données ouvertes d'OpenStreetMap.",
            "steps": [
                "Suivre le tutoriel gratuit en ligne 'Débuter avec QGIS 3'",
                "Télécharger des données spatiales ouvertes sur data.gouv.fr ou OpenStreetMap",
                "Appliquer les règles de couleurs et contrastes de la sémiologie graphique pour finaliser sa carte"
            ],
            "freeResources": ["QGIS.org (Logiciel SIG libre et documentation complète)", "Data.gouv.fr (Données géographiques ouvertes)"]
        },
        "aiImpact": {
            "summary": "L'IA intégrée aux SIG automatise la détection des bâtiments, des parcelles agricoles et de la déforestation sur les images satellites en quelques secondes, propulsant le cartographe vers l'analyse stratégique prédictive.",
            "positiveImpacts": ["Cartographie instantanée des dégâts après une catastrophe naturelle par vision par ordinateur", "Prédiction des flux de circulation urbaine par modèles de machine learning"],
            "risksAndChallenges": ["Erreurs de détection automatique sur les zones ombragées ou nuageuses", "Perte de compréhension des réalités de terrain si l'on ne sort plus des écrans"],
            "recommendedSkills": ["Spatial Data Science (Python GeoPandas, Rasterio)", "Utilisation d'outils de Deep Learning appliqués à l'imagerie satellite (YOLO, Segment Anything)"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la géomatique est un secteur stratégique national incarné par le Centre de Suivi Écologique (CSE de Dakar), mondialement réputé pour sa surveillance spatiale des feux de brousse, de la désertification et des ressources pastorales. Les géographes sénégalais sont au cœur du Plan Sénégal Émergent pour le cadastre numérique et l'aménagement du pôle urbain de Diamniadio.",
            "westAfricaOpportunities": "Cartographie de la Grande Muraille Verte, prévention des inondations urbaines à Dakar et surveillance côtière contre l'érosion marine.",
            "localChampions": ["Centre de Suivi Écologique (CSE - Dakar)", "Agence Nationale de l'Aménagement du Territoire (ANAT)", "Département de Géographie de l'UCAD"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Secteur Urbanisme, aménagement & Sciences humaines", "url": "https://www.imaginetonfutur.com/les-metiers/domaine/urbanisme-btp-immobilier.html", "type": "metier"},
            {"organization": "IGN (Institut national de l'information géographique et forestière)", "title": "Les métiers de la géomatique et de la cartographie", "url": "https://www.ign.fr", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Plus de 80% des données produites aujourd'hui dans le monde (données de smartphones, transactions financières, livraisons, capteurs météo) comportent une dimension géographique !",
            "pourquoi": "Cette explosion du 'Big Data spatial' fait du géographe-cartographe l'un des spécialistes les plus convoités pour donner une intelligence visuelle aux territoires connectés.",
            "a_retenir": "Faire une carte, ce n'est pas copier la réalité : c'est la rendre intelligible pour guider l'action."
        }
    },

    # -----------------------------------------------------------------------
    # 24. POLITOLOGUE / ANALYSTE GÉOPOLITIQUE
    # -----------------------------------------------------------------------
    {
        "id": "politologue-geopolitique",
        "slug": "politologue-geopolitique",
        "title": "Politologue / Analyste Géopolitique",
        "aliases": ["Analyste des affaires publiques", "Chercheur en sciences politiques", "Consultant en risques pays", "Analyste des relations internationales"],
        "icon": "🏛️",
        "image": "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Sciences Politiques & Relations Internationales",
        "domainId": "sciences-politiques-ri",
        "subdomain": "Géopolitique, Affaires publiques & Analyse stratégique",
        "sectors": ["Affaires étrangères & Diplomatie", "Think tanks & Instituts d'analyse", "Grandes entreprises multinationales", "Médias d'information"],
        "sourceImagineTonFutur": True,
        "isEmerging": False,
        "level": "Bac +5 (Sciences Po / IEP, Master Relations Internationales ou Sciences Politiques) à Bac +8 (Doctorat)",
        "salary": "🇫🇷 France : 2 500 - 4 800 € net/mois (~38 000 - 65 000 € brut/an en think tank, ministère ou groupe privé) • 🇸🇳 Sénégal : 550 000 - 1 800 000 FCFA / mois",
        "simpleDefinition": "Le politologue / analyste géopolitique décrypte les équilibres de pouvoir, les élections, les conflits internationaux, les politiques publiques et les traités diplomatiques, fournissant des notes prospectives objectives pour éclairer les États et les entreprises.",
        "shortDescription": "Analyste des rapports de force mondiaux documenté par Imagine ton Futur, il décrypte les crises politiques et anticipe les ruptures géostratégiques.",
        "longDescription": "Loin de tout parti pris idéologique, le politologue aborde les phénomènes politiques avec la rigueur d'un chercheur et l'acuité d'un stratège. Comme relevé dans les formations répertoriées par Imagine ton Futur (Instituts d'Études Politiques - IEP), il maîtrise le droit constitutionnel, la sociologie électorale, l'économie politique et les relations internationales. Il intervient au sein des ministères de la Défense et des Affaires étrangères, des directions de la prospective de grands groupes industriels ou des médias pour analyser les risques géopolitiques (guerres, sanctions, transitions démocratiques) et proposer des scénarios d'anticipation fiables.",
        "mainObjective": "Produire une analyse rigoureuse, prospective et neutre des systèmes politiques nationaux et de la scène internationale pour guider les choix stratégiques.",
        "companyRole": "Conseiller en intelligence stratégique, affaires publiques et analyse des risques pays.",
        "workEnvironment": [
            "🏛️ Instituts d'Études Politiques (Sciences Po), universités et think tanks d'analyse stratégique (IRIS, IFRI, SIPRI)",
            "🌐 Ministères des Affaires Étrangères, ambassades et organisations régionales (Union Africaine, UE, ONU)",
            "🏢 Directions de la stratégie et des affaires publiques de grands groupes multinationaux"
        ],
        "missions": [
            "Rédiger des notes de synthèse stratégique et d'évaluation des 'risques pays' pour des investisseurs ou ministères",
            "Analyser les résultats électoraux, les sondages d'opinion et les dynamiques parlementaires",
            "Décrypter les traités internationaux, les accords de paix et les sanctions économiques",
            "Élaborer des scénarios prospectifs à moyen et long terme sur les tensions géopolitiques régionales",
            "Intervenir dans les médias et colloques pour vulgariser avec rigueur les enjeux géopolitiques contemporains"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Veille diplomatique et revue de presse internationale", "desc": "Dépouillement des câbles d'agences et déclarations officielles dans 3 langues sur une zone de crise."},
            {"time": "10:30", "title": "Rédaction d'une note de prospective géopolitique", "desc": "Analyse des conséquences d'un changement de régime électoral sur les approvisionnements énergétiques pour une multinationale."},
            {"time": "14:00", "title": "Table ronde dans un think tank", "desc": "Débat avec d'anciens diplomates et officiers supérieurs sur l'architecture de sécurité collective régionale."},
            {"time": "16:30", "title": "Enregistrement d'un décryptage géopolitique", "desc": "Intervention sur une chaîne d'information internationale pour expliquer les enjeux d'un sommet bilatéral."}
        ],
        "skills": {
            "technical": [
                "Théories des relations internationales (réalisme, libéralisme, constructivisme)",
                "Droit international public, géopolitique des ressources (énergie, eau, métaux rares)",
                "Sociologie politique, analyse des régimes politiques comparés et méthodologie de prospective",
                "Maîtrise bilingue ou trilingue impérative (anglais de négociation irréprochable)"
            ],
            "human": [
                "Objectivité et neutralité axiologique absolue (indépendance d'esprit vis-à-vis des partis)",
                "Esprit de synthèse rapide et capacités de rédaction percutantes",
                "Sens aigu de la diplomatie et hauteur de vue face aux emballements médiatiques"
            ],
            "tools": [
                "Bases de données géopolitiques et de conflits (Uppsala Conflict Data Program, ACLED)",
                "Outils de veille informationnelle stratégique (Feedly Pro, Factiva)",
                "Cartes géopolitiques et modélisations d'arbres de scénarios stratégiques"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Diplôme d'IEP / Licence (Bac +3)", "title": "Institut d'Études Politiques (Sciences Po) ou Licence Science Politique", "desc": "Pluridisciplinarité d'excellence : histoire contemporaine, droit public, économie et sociologie politique."},
                {"step": "Master professionnel (Bac +5)", "title": "Master Relations Internationales, Affaires Publiques ou Études de Sécurité", "desc": "Spécialisation géographique ou thématique poussée, stages diplomatiques et mémoire de prospective."},
                {"step": "Doctorat (Bac +8)", "title": "Doctorat en Sciences Politiques", "desc": "Voie de recherche approfondie pour intégrer les think tanks d'élite ou les postes d'enseignant-chercheur."}
            ],
            "schools": [
                {"name": "Sciences Po Paris (Institut d'Études Politiques) — France", "country": "France", "scope": "France"},
                {"name": "Institut de Relations Internationales et Stratégiques (IRIS Sup') — Paris, France", "country": "France", "scope": "France"},
                {"name": "Faculté des Sciences Juridiques et Politiques (FSJP - UCAD) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat d'analyse géopolitique de défense (IHEDN)", "Certificat d'analyste risques pays"]
        },
        "career": {
            "sectors": ["Ministères des Affaires Étrangères et de la Défense", "Think tanks mondiaux (IFRI, IRIS, Chatham House, Timbuktu Institute)", "Grandes banques et multinationales (Risk Management)", "Organisations internationales (ONU, UA, UE)"],
            "employerTypes": ["Agences d'État", "Instituts de prospective privée", "Médias d'analyse internationale"],
            "evolution": ["Directeur d'études d'un think tank", "Conseiller spécial auprès d'un cabinet ministériel ou présidentiel", "Directeur des affaires institutionnelles internationales", "Diplomate de carrière"],
            "pros": ["Intellectuellement passionnant, au cœur des grands basculements historiques du monde", "Reconnaissance d'autorité intellectuelle dans le débat public"],
            "cons": ["Pression intense lors des crises internationales imprévues", "Exigence d'une neutralité rigoureuse face aux polarisations sociétales"]
        },
        "gettingStarted": {
            "beginnerProject": "Rédiger une note de synthèse géopolitique de 3 pages analysant les enjeux de sécurité et d'accès aux ressources dans une région stratégique (ex: le golfe de Guinée ou la mer de Chine).",
            "steps": [
                "Lire chaque mois les revues de référence (Le Monde Diplomatique, Politique Étrangère, Foreign Affairs)",
                "Écouter les podcasts de prospective géopolitique (Le Collimateur, Géopolitique sur France Inter)",
                "S'entraîner à cartographier les alliances et rivalités entre les acteurs d'un conflit"
            ],
            "freeResources": ["IRIS-France.org (Analyses géopolitiques en libre accès)", "Cairn.info (Revue Politique Étrangère de l'IFRI)"]
        },
        "aiImpact": {
            "summary": "L'IA analyse d'immenses flux d'informations ouvertes (OSINT) et détecte des signaux faibles de déstabilisation, mais seul le politologue humain sait évaluer la psychologie des chefs d'État, les facteurs culturels et le poids de l'honneur dans les décisions de guerre ou de paix.",
            "positiveImpacts": ["Surveillance des signaux faibles de crise par traitement automatique du langage sur les réseaux", "Cartographie automatisée des flux de commerce d'armes et d'énergie"],
            "risksAndChallenges": ["Désinformation de masse et 'deepfakes' géopolitiques créés pour manipuler l'opinion", "Risque de sur-confiance dans des algorithmes aveugles à l'irrationalité humaine"],
            "recommendedSkills": ["Méthodes d'investigation en sources ouvertes (OSINT)", "Analyse critique de la propagande et des opérations de cyberguerre cognitive"]
        },
        "africaContext": {
            "senegalInsight": "Dakar est l'épicentre intellectuel de la géopolitique ouest-africaine. Elle accueille chaque année le Forum International de Dakar sur la Paix et la Sécurité en Afrique, réunissant chefs d'État, généraux et chercheurs. Des think tanks de renommée mondiale y sont basés (Timbuktu Institute, CODESRIA, Gorée Institute) pour analyser les transitions politiques sahéliennes et la sécurité maritime.",
            "westAfricaOpportunities": "Médiation de paix dans le Sahel, analyse de la gouvernance démocratique de la CEDEAO et prospective sur l'autonomie stratégique africaine.",
            "localChampions": ["Timbuktu Institute - African Center for Peace Studies (Dakar)", "CODESRIA (Conseil pour le Développement de la Recherche en Sciences Sociales en Afrique)", "FSJP de l'Université Cheikh Anta Diop"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Secteur Droit et sciences politiques", "url": "https://www.imaginetonfutur.com/les-metiers/domaine/droit-et-sciences-politiques.html", "type": "metier"},
            {"organization": "Association Française de Science Politique (AFSP)", "title": "Les métiers de la science politique", "url": "https://www.afsp.info", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Le Timbuktu Institute, basé à Dakar et dirigé par des politologues et universitaires de renommée internationale, est l'un des centres d'études géopolitiques les plus consultés au monde par l'ONU et l'Union Européenne pour prévenir l'extrémisme violent au Sahel !",
            "pourquoi": "Leur approche endogène privilégie la diplomatie culturelle et religieuse africaine plutôt que les seules réponses militaires.",
            "a_retenir": "Le politologue éclaire la marche du monde pour conjurer le fracas des armes."
        }
    },

    # -----------------------------------------------------------------------
    # 25. DOCUMENTALISTE
    # -----------------------------------------------------------------------
    {
        "id": "documentaliste",
        "slug": "documentaliste",
        "title": "Documentaliste / Chargé de Gestion de l'Information",
        "aliases": ["Professeur documentaliste", "Veilleur documentaire", "Gestionnaire de bases documentaires", "Documentaliste d'entreprise"],
        "icon": "📚",
        "image": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Documentation & Information",
        "domainId": "documentation-information",
        "subdomain": "Recherche documentaire, Gestion de l'information & Veille",
        "sectors": ["Entreprises & R&D", "Médias & Audiovisuel", "Éducation Nationale (Collèges/Lycées - CDI)", "Instituts de recherche"],
        "sourceImagineTonFutur": True,
        "isEmerging": False,
        "level": "Bac +3 (Licence Pro Métiers de l'Information) à Bac +5 (Master Information-Documentation, Concours CAPES Documentation)",
        "salary": "🇫🇷 France : 1 900 - 3 200 € net/mois (Entreprise ou Éducation Nationale, Source : Imagine ton Futur) • 🇸🇳 Sénégal : 350 000 - 1 100 000 FCFA / mois (Diplômés EBAD)",
        "simpleDefinition": "Le documentaliste recherche, sélectionne, valide, classe et diffuse l'information stratégique et scientifique au sein d'une organisation (entreprise, média, établissement scolaire) pour permettre aux utilisateurs de prendre les meilleures décisions.",
        "shortDescription": "Spécialiste de la recherche et de la sélection de l'information documenté par Imagine ton Futur, il transforme le flot de données en savoir utile.",
        "longDescription": "Comme décrit sur la fiche officielle d'Imagine ton Futur, dans un monde submergé par l'infobésité et les fausses nouvelles, le documentaliste est un expert indispensable de la sélection et de la validation des sources. Il maîtrise les opérateurs booléens de recherche avancée, interroge des bases de données spécialisées inaccessibles sur le web grand public, indexe les ressources selon des thésaurus rigoureux et diffuse des revues de presse ou dossiers documentaires sur mesure pour les ingénieurs, journalistes ou enseignants.",
        "mainObjective": "Fournir la bonne information, fiable et validée, à la bonne personne et au bon moment pour optimiser la prise de décision et l'apprentissage.",
        "companyRole": "Gestionnaire du capital informationnel et garant de la fiabilité des sources documentaires.",
        "workEnvironment": [
            "🏫 Centres de Documentation et d'Information (CDI) d'établissements scolaires",
            "📺 Chaînes de télévision et rédactions de presse (services de documentation visuelle)",
            "🏢 Sièges sociaux de grandes entreprises, laboratoires pharmaceutiques et cabinets d'avocats"
        ],
        "missions": [
            "Interroger des bases de données spécialisées et extraire l'information stratégique avec rapidité et exactitude",
            "Évaluer la fiabilité, l'autorité scientifique et la fraîcheur des sources trouvées",
            "Indexer et cataloguer les documents numériques et physiques selon des normes bibliothéconomiques (Unimarc, Dublin Core)",
            "Élaborer des revues de presse quotidiennes, synthèses documentaires et bulletins de veille ciblés",
            "Former les élèves ou collaborateurs à la méthodologie de recherche documentaire et à l'esprit critique face aux fake news"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Diffusion de la revue de presse thématique", "desc": "Sélection et synthèse des 10 articles majeurs de la presse mondiale sur les réglementations environnementales du secteur."},
            {"time": "10:30", "title": "Recherche documentaire approfondie pour la R&D", "desc": "Interrogation des bases de données de brevets et de littérature scientifique pour une équipe de chercheurs."},
            {"time": "14:00", "title": "Séance pédagogique en CDI avec une classe", "desc": "Atelier pratique avec des lycéens pour apprendre à débusquer les théories du complot et les images générées par IA."},
            {"time": "16:30", "title": "Indexation et alimentation de la GED", "desc": "Intégration et balisage de 40 nouveaux rapports techniques dans le logiciel de gestion électronique de documents."}
        ],
        "skills": {
            "technical": [
                "Techniques de recherche d'information avancée (langages d'interrogation, opérateurs logiques, web invisible)",
                "Indexation documentaire, langages documentaires et thésaurus (Rameau, Dewey)",
                "Normes de métadonnées documentaires (Dublin Core, ISO 2709)",
                "Droit de l'information (droit d'auteur, licences Creative Commons, droit de réutilisation des données)"
            ],
            "human": [
                "Curiosité insatiable pour tous les domaines de la connaissance",
                "Sens aigu du service utilisateur et grande réactivité",
                "Pédagogie et talent de vulgarisation pour transmettre les réflexes de vérification"
            ],
            "tools": [
                "Systèmes Intégrés de Gestion de Bibliothèques / Documentation (PMB, BCDI, Koha)",
                "Bases de données professionnelles (Factiva, LexisNexis, ScienceDirect, Cairn)",
                "Agrégateurs de flux RSS et outils de veille documentaire (Inoreader, Feedly, Netvibes)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Licence (Bac +3)", "title": "Licence Information-Communication option Documentation", "desc": "Bases de la recherche d'information, des langages documentaires et du droit de l'information."},
                {"step": "Master professionnel (Bac +5)", "title": "Master Métiers de l'Information et de la Documentation (ou CAPES Doc)", "desc": "Architecture de l'information, veille stratégique ou concours de Professeur Documentaliste (Capes)."}
            ],
            "schools": [
                {"name": "INTD / CNAM (Institut National des Techniques de la Documentation) — Paris, France", "country": "France", "scope": "France"},
                {"name": "Université Gustave Eiffel / Université Paul-Valéry Montpellier (Master Doc) — France", "country": "France", "scope": "France"},
                {"name": "EBAD (École de Bibliothécaires, Archivistes et Documentalistes - UCAD) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["CAPES de Professeur Documentaliste", "Certificat de Veilleur Stratégique de l'ADBS"]
        },
        "career": {
            "sectors": ["Éducation Nationale (Collèges, Lycées)", "Grands médias (INA, TF1, France Télévisions, Le Monde)", "Industrie pharmaceutique et chimique", "Cabinets de conseil et banques"],
            "employerTypes": ["Établissements scolaires", "Groupes de médias", "Centres de recherche"],
            "evolution": ["Responsable du centre de ressources documentaires", "Knowledge Manager d'entreprise", "Chef de projet en gouvernance de l'information numérique"],
            "pros": ["Métier au cœur de la connaissance et de la vérité factuelle", "Grande diversité des sujets traités au quotidien"],
            "cons": ["Travail sur écran prolongé", "Nécessité de défendre la valeur de l'information vérifiée face à l'illusion du 'tout gratuit sur Google'"]
        },
        "gettingStarted": {
            "beginnerProject": "Créer un dossier documentaire thématique de 5 pages sur les énergies renouvelables en sélectionnant 8 sources expertes validées avec bibliographie normalisée aux normes ISO 690.",
            "steps": [
                "Apprendre à utiliser les opérateurs booléens (AND, OR, NOT, guillemets) sur Google et les moteurs académiques",
                "Découvrir la plateforme documentaire ouverte Cairn.info",
                "Consulter le site de l'ADBS (Association des professionnels de l'information et de la documentation)"
            ],
            "freeResources": ["ADBS.fr (Association des professionnels de l'information)", "CLEMI (Centre pour l'éducation aux médias et à l'information)"]
        },
        "aiImpact": {
            "summary": "L'IA génère des synthèses de textes mais hallucine des sources inventées : le documentaliste est le vérificateur ultime de l'authenticité des références et de la solidité des preuves documentaires.",
            "positiveImpacts": ["Automatisation des résumés documentaires préliminaires", "Recherche sémantique vectorielle plus intuitive dans les bases documentaires internes"],
            "risksAndChallenges": ["Propagation de fausses citations créées par des modèles d'IA", "Illusion que l'IA sait tout sans avoir besoin de vérifier les sources primaires"],
            "recommendedSkills": ["Techniques de vérification des sources et fact-checking de contenus générés par IA", "Knowledge Management et structuration de bases de données pour systèmes RAG"]
        },
        "africaContext": {
            "senegalInsight": "L'EBAD de l'UCAD à Dakar forme depuis plus d'un demi-siècle les spécialistes de la documentation de toute l'Afrique de l'Ouest et Centrale. Les documentalistes y jouent un rôle moteur dans les centres de documentation des ministères, des ONG régionales et des universités pour organiser le libre accès aux thèses et à la recherche africaine.",
            "westAfricaOpportunities": "Documentation agricole pour les coopératives rurales, centres de ressources sur le changement climatique et numérisation des revues savantes africaines.",
            "localChampions": ["EBAD de l'Université Cheikh Anta Diop", "Centre National de Documentation Scientifique et Technique (CNDST - Sénégal)", "Bibliothèque Centrale de l'UCAD"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Fiche métier : Documentaliste", "url": "https://www.imaginetonfutur.com/metier/documentaliste.html", "type": "metier"},
            {"organization": "ADBS (Association des professionnels de l'information et de la documentation)", "title": "Le référentiel des métiers de l'information", "url": "https://www.adbs.fr", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Selon Imagine ton Futur, le documentaliste est le spécialiste absolu qui sait naviguer dans le 'web invisible' : cette immense partie d'internet (plus de 90% des bases de données mondiales) qui n'est pas indexée par les moteurs grand public comme Google !",
            "pourquoi": "Sans l'intervention du documentaliste, ces gisements de savoirs scientifiques et juridiques resteraient totalement inaccessibles aux chercheurs et dirigeants.",
            "a_retenir": "Le documentaliste éclaire le chemin de la vérité dans l'océan de l'information."
        }
    },

    # -----------------------------------------------------------------------
    # 26. BIBLIOTHÉCAIRE
    # -----------------------------------------------------------------------
    {
        "id": "bibliothecaire",
        "slug": "bibliothecaire",
        "title": "Bibliothécaire / Conservateur des Bibliothèques",
        "aliases": ["Bibliothécaire universitaire", "Médiathécaire", "Directeur de médiathèque", "Chargé de collections patrimoniales"],
        "icon": "📚",
        "image": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Documentation & Information",
        "domainId": "documentation-information",
        "subdomain": "Bibliothèques, Médiathèques & Collections publiques",
        "sectors": ["Lecture publique (Villes & Métropoles)", "Enseignement supérieur (BU)", "Bibliothèques nationales (BnF)", "Instituts culturels"],
        "sourceImagineTonFutur": True,
        "isEmerging": False,
        "level": "Bac +3 (Licence Pro Métiers du Livre) à Bac +5 (Master Métiers du Livre / Enssib)",
        "salary": "🇫🇷 France : 1 900 - 3 400 € net/mois (Cadre A de la fonction publique d'État ou territoriale, Source : Imagine ton Futur) • 🇸🇳 Sénégal : 350 000 - 1 200 000 FCFA / mois (Diplômés EBAD, universités)",
        "simpleDefinition": "Le bibliothécaire sélectionne, acquiert, catalogue, conserve et met à disposition du public des collections de livres, revues, documents numériques, musiques et films, tout en animant la vie culturelle et l'accès démocratique au savoir.",
        "shortDescription": "Passeur culturel et gestionnaire des savoirs répertorié par Imagine ton Futur, il transforme les bibliothèques en lieux vivants de rencontre et de découverte.",
        "longDescription": "Comme décrit dans les fiches officielles d'Imagine ton Futur, les bibliothèques modernes se sont métamorphosées en 'troisièmes lieux' conviviaux et connectés. Le bibliothécaire n'est plus seulement celui qui demande le silence entre les rayonnages : il est un médiateur culturel dynamique. Il choisit les nouveautés littéraires, conseille les lecteurs de tous âges, numérise des manuscrits précieux, organise des clubs de lecture, des projections de films et des ateliers d'initiation au numérique pour lutter contre la fracture digitale.",
        "mainObjective": "Garantir le libre accès de tous les citoyens à la culture, à l'information et à la formation tout au long de la vie.",
        "companyRole": "Médiateur culturel public et gestionnaire de collections documentaires physiques et dématérialisées.",
        "workEnvironment": [
            "🏛️ Médiathèques municipales, intercommunales et métropolitaines",
            "🎓 Bibliothèques Universitaires (BU) et grandes écoles",
            "📖 Bibliothèques nationales (Bibliothèque nationale de France - BnF, Bibliothèque Centrale de Dakar)"
        ],
        "missions": [
            "Constituer et enrichir les collections en achetant livres, romans, essais, revues et abonnements numériques",
            "Cataloguer et indexer les ouvrages selon les normes internationales (UNIMARC, RDA-FR)",
            "Accueillir, conseiller et orienter les usagers dans leurs lectures et recherches académiques",
            "Concevoir une programmation culturelle vivante (expositions, rencontres d'auteurs, ateliers numériques, heures du conte)",
            "Participer à la conservation préventive des fonds patrimoniaux rares et précieux"
        ],
        "typicalDay": [
            {"time": "09:00", "title": "Comité d'acquisitions de livres", "desc": "Sélection des 50 nouveaux titres de rentrée littéraire et d'essais sociologiques à commander pour les rayons."},
            {"time": "11:00", "title": "Catalogage et indexation sous SIGB", "desc": "Saisie des notices bibliographiques et attribution des cotes de rangement selon la classification décimale de Dewey."},
            {"time": "14:00", "title": "Ouverture des portes et accueil des lecteurs", "desc": "Conseil personnalisé à des étudiants pour la bibliographie de leur mémoire et à des familles pour des albums jeunesse."},
            {"time": "17:00", "title": "Animation du club de lecture mensuel", "desc": "Modération d'un échange passionné entre 15 usagers autour d'un roman africain contemporain primé."}
        ],
        "skills": {
            "technical": [
                "Bibliothéconomie et normes internationales de catalogage (UNIMARC, RDA, normes de l'IFLA)",
                "Classification décimale Dewey et langages d'indexation matière (Rameau)",
                "Politique documentaire (désherbage, plans de développement des collections)",
                "Médiation culturelle et gestion de projets d'animation publique"
            ],
            "human": [
                "Immense culture générale et amour contagieux de la lecture",
                "Sens du contact humain, écoute bienveillante et ouverture à tous les publics",
                "Pédagogie et esprit d'initiative pour imaginer de nouvelles animations"
            ],
            "tools": [
                "Systèmes Intégrés de Gestion de Bibliothèques SIGB (Koha, Nanook, Aloès, Decalog)",
                "Portails documentaires web pour les usagers (OPAC)",
                "Logiciels de gestion des prêts automatiques par puces RFID"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Licence (Bac +3)", "title": "Licence Lettres, Histoire ou Licence Pro Métiers du Livre", "desc": "Culture générale, histoire du livre et premiers stages en bibliothèque publique."},
                {"step": "Master professionnel (Bac +5)", "title": "Master Métiers du Livre et de l'Édition ou Diplôme de l'Enssib", "desc": "Conseillé par Imagine ton Futur : formation d'élite aux concours de la fonction publique d'État (bibliothécaire universitaire, conservateur) et territoriale."}
            ],
            "schools": [
                {"name": "Enssib (École Nationale Supérieure des Sciences de l'Information et des Bibliothèques) — Lyon, France", "country": "France", "scope": "France"},
                {"name": "Université Paris Nanterre (Pôle Métiers du Livre) — France", "country": "France", "scope": "France"},
                {"name": "EBAD (École de Bibliothécaires, Archivistes et Documentalistes - UCAD) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Concours de Bibliothécaire d'État ou Territorial", "Concours de Conservateur des Bibliothèques (Enssib)"]
        },
        "career": {
            "sectors": ["Lecture publique (Collectivités territoriales)", "Enseignement supérieur (Ministère de la Recherche)", "Bibliothèques nationales patrimoniales", "Instituts culturels à l'étranger"],
            "employerTypes": ["Villes et communautés de communes", "Universités publiques", "Ministère de la Culture"],
            "evolution": ["Directeur de médiathèque", "Conservateur en chef des bibliothèques", "Directeur de réseau de lecture publique métropolitain", "Inspecteur général des bibliothèques"],
            "pros": ["Cadre de travail magnifique entouré de livres et de savoirs", "Rôle social fort et gratuité de l'accès à la culture pour tous"],
            "cons": ["Travail régulier le samedi pour accueillir le public familial", "Concours de la fonction publique très disputés"]
        },
        "gettingStarted": {
            "beginnerProject": "Créer une bibliographie commentée de 10 romans incontournables de la littérature mondiale avec un cartel de recommandation pour chaque livre.",
            "steps": [
                "Visiter la médiathèque la plus proche et observer l'organisation des rayonnages par la classification Dewey",
                "Consulter le portail Enssib.fr pour découvrir les fiches pratiques de bibliothéconomie",
                "Faire du bénévolat dans une bibliothèque de quartier ou une boîte à livres citoyenne"
            ],
            "freeResources": ["Enssib.fr (Fiches pratiques et bibliothèque numérique de référence)", "BnF.fr (Catalogues et expositions virtuelles de la Bibliothèque nationale de France)"]
        },
        "aiImpact": {
            "summary": "L'IA personnalise les recommandations de lecture et transcrit les manuscrits anciens numérisés, renforçant le rôle irremplaçable du bibliothécaire comme tisseur de lien social et animateur de quartier.",
            "positiveImpacts": ["Systèmes de recommandation intelligents fondés sur les affinités littéraires des usagers", "Recherche vocale et accessibilité accrue pour les personnes malvoyantes"],
            "risksAndChallenges": ["Tentative de réduction des horaires d'ouverture avec des automates sans présence humaine", "Surconsommation d'écrans au détriment de la lecture profonde"],
            "recommendedSkills": ["Animation d'ateliers de sensibilisation citoyenne à l'IA", "Médiation numérique inclusive pour les personnes âgées et non connectées"]
        },
        "africaContext": {
            "senegalInsight": "Dakar abrite la Bibliothèque Centrale de l'UCAD (la plus grande bibliothèque universitaire d'Afrique de l'Ouest francophone avec plus de 500 000 ouvrages) ainsi que le réseau des bibliothèques de l'Institut Français. Les bibliothécaires sénégalais, tous formés à l'EBAD, jouent un rôle fondamental pour promouvoir la lecture dans les quartiers populaires et valoriser les littératures africaines.",
            "westAfricaOpportunities": "Réseau des Centres de Lecture et d'Animation Culturelle (CLAC) en milieu rural soutenu par l'OIF, bibliobus itinérants et numérisation des thèses africaines.",
            "localChampions": ["Bibliothèque Centrale de l'UCAD (Dakar)", "EBAD de l'Université Cheikh Anta Diop", "Réseau des CLAC du Sénégal (Direction du Livre)"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Fiche métier : Bibliothécaire", "url": "https://www.imaginetonfutur.com/metier/bibliothecaire.html", "type": "metier"},
            {"organization": "Enssib (École Nationale Supérieure des Sciences de l'Information et des Bibliothèques)", "title": "Les métiers en bibliothèque", "url": "https://www.enssib.fr", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Selon les sources d'Imagine ton Futur, les bibliothèques sont l'équipement culturel le plus fréquenté de France, avec plus de 16 000 bibliothèques et points d'accès accueillant chaque année des dizaines de millions de visites !",
            "pourquoi": "Elles sont le seul lieu public totalement gratuit où n'importe quel citoyen peut entrer, s'asseoir au chaud, lire, travailler, se connecter à internet et apprendre sans rien payer.",
            "a_retenir": "Le bibliothécaire maintient allumée la flamme du savoir pour chaque citoyen."
        }
    },

    # -----------------------------------------------------------------------
    # 27. MÉDIATEUR CULTUREL
    # -----------------------------------------------------------------------
    {
        "id": "mediateur-culturel",
        "slug": "mediateur-culturel",
        "title": "Médiateur Culturel",
        "aliases": ["Chargé des publics", "Médiateur de musée", "Guide-conférencier culturel", "Animateur du patrimoine"],
        "icon": "🎭",
        "image": "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Médiation Culturelle",
        "domainId": "culture-mediation",
        "subdomain": "Éducation artistique, Médiation des publics & Événements culturels",
        "sectors": ["Musées & Centres d'art", "Théâtres & Salles de spectacle", "Monuments historiques", "Festivals & Biennales"],
        "sourceImagineTonFutur": True,
        "isEmerging": False,
        "level": "Bac +3 (Licence Pro Médiation culturelle) à Bac +5 (Master Médiation culturelle et communication)",
        "salary": "🇫🇷 France : 1 800 - 2 800 € net/mois (Musées, collectivités territoriales, fondations) • 🇸🇳 Sénégal : 350 000 - 950 000 FCFA / mois (Biennale de Dakar, MCN, centres culturels)",
        "simpleDefinition": "Le médiateur culturel crée des ponts vivants entre les œuvres artistiques ou patrimoniales et tous les publics (scolaires, familles, personnes éloignées de la culture, personnes handicapées), en concevant des visites guidées passionnantes, des ateliers participatifs et des outils interactifs.",
        "shortDescription": "Tisseur de liens entre l'art et les citoyens, il rend la culture accessible, compréhensible et émouvante pour chacun.",
        "longDescription": "L'art et le patrimoine peuvent parfois intimider. C'est là qu'intervient le médiateur culturel. Doté d'une solide formation en histoire de l'art, lettres ou histoire, il vulgarise sans jamais simplifier à l'excès. Dans les musées, théâtres, châteaux ou festivals, il invente des visites contées pour les tout-petits, des parcours sensoriels pour les personnes aveugles, des escape games patrimoniaux pour les adolescents et des projets d'action culturelle en milieu carcéral ou hospitalier.",
        "mainObjective": "Faciliter l'appropriation sensible et intellectuelle de l'art et du patrimoine par tous les publics sans exception.",
        "companyRole": "Ambassadeur des publics et créateur d'expériences culturelles mémorables au sein des institutions artistiques.",
        "workEnvironment": [
            "🏛️ Musées, monuments nationaux et centres d'art contemporain",
            "🎭 Théâtres, opéras et salles de spectacles vivants",
            "🎒 Déplacements dans les écoles, hôpitaux et centres sociaux"
        ],
        "missions": [
            "Concevoir et animer des visites guidées interactives adaptées aux différents profils de visiteurs",
            "Créer des outils d'aide à la visite (livrets-jeux pour enfants, applications interactives, cartels explicatifs)",
            "Mettre en place des projets d'éducation artistique et culturelle (EAC) en partenariat avec les écoles",
            "Organiser des actions culturelles ciblées pour les publics du champ social et les personnes en situation de handicap",
            "Recueillir et analyser les retours des visiteurs pour améliorer continuellement l'accueil du musée"
        ],
        "typicalDay": [
            {"time": "09:30", "title": "Visite atelier avec une classe d'école primaire", "desc": "Parcours interactif dans les salles de peinture suivi d'un atelier pratique de création d'autoportraits."},
            {"time": "11:30", "title": "Conception d'un livret d'exposition pour ados", "desc": "Rédaction de textes décalés et conception de jeux d'énigmes pour accompagner la future biennale d'art contemporain."},
            {"time": "14:30", "title": "Visite guidée thématique pour adultes", "desc": "Animation d'une visite d'une heure sur le thème 'Femmes artistes et figures de pouvoir dans l'Antiquité'."},
            {"time": "16:30", "title": "Réunion avec un centre social de quartier", "desc": "Co-construction d'un projet de visite privilégiée pour des jeunes n'ayant jamais mis les pieds dans un musée."}
        ],
        "skills": {
            "technical": [
                "Histoire de l'art, histoire et connaissances approfondies du champ culturel",
                "Pédagogie active et méthodologie de la médiation des savoirs",
                "Réglementation de l'accessibilité culturelle et démarches de démocratisation",
                "Techniques de prise de parole en public et storytelling narratif"
            ],
            "human": [
                "Enthousiasme communicatif et charisme oral bienveillant",
                "Grande capacité d'écoute et adaptabilité immédiate à tous les publics",
                "Patience, créativité ludique et générosité de transmission"
            ],
            "tools": [
                "Mallettes pédagogiques et matériel d'ateliers créatifs",
                "Outils de publication assistée par ordinateur pour livrets (Canva, InDesign)",
                "Dispositifs numériques de visite (tablettes tactiles, casques de réalité virtuelle)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Licence (Bac +3)", "title": "Licence Histoire de l'art, Lettres ou Licence Pro Médiation culturelle", "desc": "Culture artistique solide et premiers stages d'animation de visites dans des musées ou châteaux."},
                {"step": "Master professionnel (Bac +5)", "title": "Master Médiation Culturelle, Ingénierie de Projets Culturels ou Muséologie", "desc": "Conception de politiques de publics, partenariats territoriaux et pilotage d'actions culturelles d'envergure."}
            ],
            "schools": [
                {"name": "Université Sorbonne Nouvelle (Master Médiation Culturelle) — Paris, France", "country": "France", "scope": "France"},
                {"name": "École du Louvre (Parcours Médiation et Publics) — Paris, France", "country": "France", "scope": "France"},
                {"name": "Institut Supérieur des Arts et des Métiers de la Culture (ISAC / UCAD) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Carte professionnelle de Guide-conférencier", "Brevet d'Aptitude aux Fonctions d'Animateur (BAFA)"]
        },
        "career": {
            "sectors": ["Musées et fondations d'art", "Théâtres nationaux et scènes conventionnées", "Monuments historiques et offices de tourisme", "Festivals internationaux"],
            "employerTypes": ["Établissements publics culturels", "Collectivités locales", "Compagnies artistiques"],
            "evolution": ["Responsable du service des publics", "Directeur de l'action culturelle d'une métropole", "Chargé de programmation culturelle", "Commissaire d'exposition grand public"],
            "pros": ["Métier joyeux, humain et riche de partages quotidiens", "Satisfaction d'allumer une étincelle de curiosité chez un enfant ou un néophyte"],
            "cons": ["Horaires décalés (week-ends, soirées de vernissages)", "Statuts contractuels parfois précaires au démarrage de carrière"]
        },
        "gettingStarted": {
            "beginnerProject": "Concevoir un parcours de visite commentée de 45 minutes pour faire découvrir 5 monuments ou œuvres de sa ville à un groupe d'amis.",
            "steps": [
                "Rechercher des anecdotes historiques vérifiées sur les 5 lieux choisis",
                "Construire un fil conducteur narratif engageant sans jargon technique",
                "Tester sa visite en direct et chronométrer son intervention en recueillant les impressions"
            ],
            "freeResources": ["Culture.gouv.fr (Ressources sur l'Éducation Artistique et Culturelle)", "Fondation Culture & Diversité"]
        },
        "aiImpact": {
            "summary": "Les audioguides par IA répondent aux questions factuelles, mais seul le médiateur humain sait adapter son regard, ressentir l'ennui ou l'émerveillement d'un groupe et créer une émotion collective partagée.",
            "positiveImpacts": ["Génération rapide de quiz interactifs et de scénarios de jeux de piste", "Traduction instantanée des livrets de visite dans toutes les langues"],
            "risksAndChallenges": ["Tentative de remplacement des guides humains par des casques audio automatisés", "Perte de la chaleur de l'échange humain"],
            "recommendedSkills": ["Conception d'expériences de visite hautement sensorielles et interactives", "Médiation inclusive pour les publics empêchés ou en situation de handicap"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la médiation culturelle est au cœur de la vitalité artistique dakaroise. Lors de la Biennale de Dakar (Dak'Art), les médiateurs culturels guident des milliers de scolaires dans les expositions internationales du Musée des Civilisations Noires ou de l'Ancien Palais de Justice. Ils perpétuent la tradition de l'oralité en la reliant à la création contemporaine la plus moderne.",
            "westAfricaOpportunities": "Médiation dans les nouveaux centres culturels régionaux, parcours de mémoire sur l'Île de Gorée et transmission des contes et traditions orales aux jeunes générations.",
            "localChampions": ["Biennale de Dakar (Service de médiation des publics)", "Musée des Civilisations Noires (MCN - Dakar)", "Centre Culturel Blaise Senghor"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Secteur Art, culture & Médiation", "url": "https://www.imaginetonfutur.com/les-metiers/domaine/art-culture-audiovisuel.html", "type": "metier"},
            {"organization": "Ministère de la Culture", "title": "Les métiers de la médiation culturelle", "url": "https://www.culture.gouv.fr", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Dans les musées modernes, plus de 50% des visiteurs déclarent qu'une visite guidée animée par un médiateur passionné a radicalement changé leur regard sur l'art et leur envie de revenir !",
            "pourquoi": "L'art ne s'impose pas : il s'apprivoise grâce aux histoires humaines que le médiateur sait raconter.",
            "a_retenir": "Le médiateur culturel est la clé bienveillante qui ouvre les portes de l'art à tous."
        }
    },

    # -----------------------------------------------------------------------
    # 28. PROFESSEUR D'UNIVERSITÉ EN SCIENCES HUMAINES
    # -----------------------------------------------------------------------
    {
        "id": "professeur-universite",
        "slug": "professeur-universite",
        "title": "Professeur d'Université en Sciences Humaines",
        "aliases": ["Enseignant-chercheur universitaire", "Professeur des universités (PU)", "Maître de conférences (MCU)", "Directeur de laboratoire de recherche"],
        "icon": "👨‍🏫",
        "image": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Enseignement & Pédagogie",
        "domainId": "enseignement-shs",
        "subdomain": "Enseignement supérieur universitaire & Direction de recherche",
        "sectors": ["Enseignement supérieur", "Recherche fondamentale", "Édition universitaire", "Conseil institutionnel"],
        "sourceImagineTonFutur": True,
        "isEmerging": False,
        "level": "Bac +8 (Doctorat) + Habilitation à Diriger des Recherches (HDR - Bac +10)",
        "salary": "🇫🇷 France : 3 000 - 5 500 € net/mois (Grille indiciaire des Professeurs des Universités, Source : Imagine ton Futur) • 🇸🇳 Sénégal : 900 000 - 2 500 000 FCFA / mois (Statut autonome de l'Enseignement Supérieur)",
        "simpleDefinition": "Le professeur d'université accomplit une double mission d'excellence : il transmet le savoir de haut niveau aux étudiants de la licence au doctorat (enseignement) et produit de nouvelles connaissances scientifiques en dirigeant des laboratoires et des thèses de recherche.",
        "shortDescription": "Sommet académique des humanités décrit par Imagine ton Futur, il forme les élites de demain et repousse les frontières du savoir humain.",
        "longDescription": "Comme recensé dans les fiches de référence d'Imagine ton Futur, le professeur d'université consacre la moitié de son temps à l'enseignement (cours magistraux en amphithéâtre, séminaires doctoraux) et l'autre moitié à la recherche scientifique de pointe. Titulaire d'une thèse de doctorat et d'une Habilitation à Diriger des Recherches (HDR), il publie des livres majeurs, dirige des équipes internationales de chercheurs, évalue les publications de ses pairs et représente son pays dans les plus grands congrès mondiaux.",
        "mainObjective": "Produire des connaissances originales de niveau mondial et former les futurs cadres, enseignants et chercheurs de la société.",
        "companyRole": "Pilote scientifique, autorité académique et formateur des talents de demain.",
        "workEnvironment": [
            "🏛️ Amphithéâtres et salles de séminaire des universités prestigieuses",
            "🔬 Laboratoires et centres de recherche mixtes (CNRS, IFAN, IRD)",
            "✈️ Déplacements internationaux réguliers pour colloques et jurys de thèses"
        ],
        "missions": [
            "Dispenser des cours magistraux fondés sur l'état de l'art de la recherche en lettres, langues ou sciences humaines",
            "Diriger des mémoires de master et encadrer des thèses de doctorat pendant 3 à 5 ans",
            "Publier des articles dans des revues internationales à comité de lecture et des ouvrages de synthèse",
            "Diriger des laboratoires de recherche, gérer des budgets scientifiques et répondre à des appels à projets (ANR, ERC)",
            "Participer à la gouvernance de l'université (conseils scientifiques, commissions de recrutement)"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Cours magistral en amphithéâtre", "desc": "Dispensation d'un cours de 2 heures d'histoire de la pensée politique devant 300 étudiants de licence."},
            {"time": "11:00", "title": "Point d'avancement de thèse de doctorat", "desc": "Séance de travail avec une doctorante sur la méthodologie d'analyse de son corpus d'archives sénégalaises."},
            {"time": "14:00", "title": "Réunion du conseil de laboratoire", "desc": "Arbitrage des financements pour la participation des jeunes chercheurs à un colloque international."},
            {"time": "16:30", "title": "Évaluation d'articles scientifiques (Peer Review)", "desc": "Lecture critique et rapport d'expertise pour une grande revue universitaire internationale."}
        ],
        "skills": {
            "technical": [
                "Érudition encyclopédique et méthodologie de recherche au plus haut niveau académique",
                "Pédagogie universitaire avancée pour captiver un auditoire exigeant",
                "Management d'équipes de recherche internationales et montage de projets scientifiques",
                "Maîtrise des langues académiques internationales (anglais scientifique courant)"
            ],
            "human": [
                "Passion inaltérable pour la transmission du savoir et l'élévation des esprits",
                "Rigueur éthique et intégrité intellectuelle sans compromis",
                "Capacité d'écoute, générosité mentorale et leadership inspirant"
            ],
            "tools": [
                "Plateformes académiques mondiales (HAL, Cairn, JSTOR, ResearchGate)",
                "Outils de gestion de laboratoire et de soumission de projets de recherche",
                "Plateformes d'enseignement numérique universitaire (Moodle)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Licence & Master (Bac +5)", "title": "Master Recherche en Lettres, Langues ou Sciences Humaines", "desc": "Mention Très Bien requise pour obtenir un contrat doctoral financé."},
                {"step": "Doctorat (Bac +8)", "title": "Doctorat / Thèse d'Université (3 à 4 ans)", "desc": "Rédaction et soutenance publique d'une thèse de 400 à 600 pages avec félicitations du jury."},
                {"step": "Maître de conférences puis HDR (Bac +10)", "title": "Habilitation à Diriger des Recherches (HDR) + Concours de Professeur", "desc": "Parcours d'excellence comme Maître de conférences pendant 5 à 10 ans, puis soutenance de l'HDR pour accéder au rang de Professeur."}
            ],
            "schools": [
                {"name": "École Normale Supérieure (ENS Ulm / Lyon) — France", "country": "France", "scope": "France"},
                {"name": "Sorbonne Université / Université Paris 1 Panthéon-Sorbonne — France", "country": "France", "scope": "France"},
                {"name": "Université Cheikh Anta Diop (Faculté des Lettres et Sciences Humaines - FLSH) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Habilitation à Diriger des Recherches (HDR)", "Qualification aux fonctions de Professeur par le CNU (Conseil National des Universités)"]
        },
        "career": {
            "sectors": ["Universités et grandes écoles nationales et internationales", "Instituts de recherche fondamentale (CNRS, IFAN)", "Conseil auprès des organisations internationales", "Édition savante"],
            "employerTypes": ["Ministère de l'Enseignement Supérieur", "Universités étrangères prestigieuses", "Grands instituts de recherche"],
            "evolution": ["Président d'université", "Doyen de faculté", "Membre de l'Institut de France (Académies)", "Professeur émérite"],
            "pros": ["Liberté académique totale garantie par la loi", "Prestige social et intellectuel suprême", "Richesse de guider des vocations de chercheurs"],
            "cons": ["Parcours d'études le plus long et sélectif du système éducatif", "Lourdeur croissante des tâches administratives universitaires"]
        },
        "gettingStarted": {
            "beginnerProject": "Rédiger un état de l'art bibliographique de 10 pages sur une controverse scientifique en sciences humaines en synthétisant 15 articles de revues à comité de lecture.",
            "steps": [
                "Assister à une soutenance publique de thèse de doctorat dans une université",
                "Visiter les portails de thèses ouvertes (theses.fr et portail HAL)",
                "Échanger avec un enseignant-chercheur lors des journées portes ouvertes universitaires"
            ],
            "freeResources": ["Theses.fr (Moteur des thèses de doctorat françaises)", "HAL.science (Archives ouvertes de la recherche scientifique)"]
        },
        "aiImpact": {
            "summary": "L'IA transforme l'enseignement universitaire en obligeant à repenser l'évaluation des étudiants : les examens se recentrent sur la soutenance orale, la dialectique en direct et l'analyse critique de données non traitables par des modèles.",
            "positiveImpacts": ["Assistance à la revue de littérature scientifique sur des milliers d'articles", "Création de supports de cours dynamiques et interactifs"],
            "risksAndChallenges": ["Fraude académique si les étudiants font rédiger leurs devoirs par des LLMs", "Nécessité de réinventer la pédagogie magistrale"],
            "recommendedSkills": ["Maîtrise des outils de détection de plagiat et de génération par IA", "Pédagogie inversée et évaluation par la soutenance orale contradictoire"]
        },
        "africaContext": {
            "senegalInsight": "L'UCAD à Dakar a été le berceau des plus grandes figures académiques africaines contemporaines (Pr Cheikh Anta Diop, Pr Assane Seck, Pr Souleymane Bachir Diagne). Les professeurs d'université y jouissent d'un respect immense dans la société et sont régulièrement sollicités comme ministres, diplomates ou médiateurs républicains.",
            "westAfricaOpportunities": "Développement des écoles doctorales panafricaines, publications scientifiques indexées au CAMES et coopération universitaire Sud-Sud.",
            "localChampions": ["Faculté des Lettres et Sciences Humaines (FLSH - UCAD)", "CAMES (Conseil Africain et Malgache pour l'Enseignement Supérieur)", "Université Gaston Berger de Saint-Louis"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Fiche métier : Professeur d'université", "url": "https://www.imaginetonfutur.com/metier/professeur-duniversite.html", "type": "metier"},
            {"organization": "Ministère de l'Enseignement Supérieur et de la Recherche", "title": "Les carrières d'enseignant-chercheur", "url": "https://www.enseignementsup-recherche.gouv.fr", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Selon Imagine ton Futur, le professeur d'université est le plus haut grade de l'enseignement en France : il forme les étudiants jusqu'au bac +8 et au-delà, et ses découvertes sont publiées dans le monde entier !",
            "pourquoi": "Ce statut garantit aux enseignants-chercheurs une indépendance intellectuelle constitutionnellement protégée pour chercher sans pression politique ou commerciale.",
            "a_retenir": "Le professeur d'université allume des phares de savoir qui guident des générations entières."
        }
    },

    # -----------------------------------------------------------------------
    # 29. CHERCHEUR EN SCIENCES HUMAINES ET SOCIALES
    # -----------------------------------------------------------------------
    {
        "id": "chercheur-shs",
        "slug": "chercheur-shs",
        "title": "Chercheur en Sciences Humaines et Sociales (SHS)",
        "aliases": ["Chargé de recherche CNRS", "Chercheur IRD", "Scientifique en humanités", "Post-doctorant en sciences humaines"],
        "icon": "🔬",
        "image": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Recherche Fondamentale & Appliquée",
        "domainId": "recherche-shs",
        "subdomain": "Recherche interdisciplinaire, Laboratoires & Publications savantes",
        "sectors": ["Instituts de recherche d'État (CNRS, IRD, INED)", "Fondations scientifiques", "Universités", "Organisations multilatérales"],
        "sourceImagineTonFutur": True,
        "isEmerging": False,
        "level": "Bac +8 (Doctorat / Ph.D. dans une discipline des sciences humaines)",
        "salary": "🇫🇷 France : 2 200 - 4 300 € net/mois (Chargé de recherche puis Directeur de recherche CNRS, Source : Imagine ton Futur) • 🇸🇳 Sénégal : 500 000 - 1 800 000 FCFA / mois (IFAN Ch. Anta Diop, IRD Dakar)",
        "simpleDefinition": "Le chercheur en sciences humaines et sociales se consacre à 100% à la production de connaissances scientifiques nouvelles sur les comportements, les sociétés, les langues, l'histoire et les cultures, en concevant des programmes d'investigation originaux, en analysant des corpus massifs et en publiant ses découvertes.",
        "shortDescription": "Scientifique de la condition humaine documenté par Imagine ton Futur, il mène des recherches fondamentales pour comprendre les transformations du monde.",
        "longDescription": "Comme décrit sur la fiche officielle d'Imagine ton Futur pour le métier de chercheur, ce professionnel dédie sa vie à l'investigation intellectuelle. Contrairement à l'enseignant-chercheur qui partage son temps avec les cours, le chercheur d'institut (comme au CNRS ou à l'IRD) se concentre principalement sur la conception et l'exécution de projets scientifiques : missions de terrain aux quatre coins du globe, exploitation d'archives inédites, expérimentations psychosociales en laboratoire et rédaction d'articles scientifiques soumis à l'évaluation impitoyable de ses pairs.",
        "mainObjective": "Produire des théories, des modèles et des données empiriques rigoureuses pour faire progresser la compréhension universelle de l'être humain et des sociétés.",
        "companyRole": "Pionnier de l'investigation scientifique fondamentale et garant de la rigueur méthodologique.",
        "workEnvironment": [
            "🔬 Laboratoires de recherche et Unités Mixtes de Recherche (UMR CNRS / Universités)",
            "📚 Bibliothèques de recherche d'élite et centres de documentation spécialisés",
            "🌍 Terrains d'enquête internationaux (fouilles, immersions, enquêtes sociales)"
        ],
        "missions": [
            "Élaborer des protocoles de recherche innovants et répondre aux appels à projets scientifiques internationaux",
            "Collecter et analyser des données empiriques de première main (archives, entretiens, fouilles, sondages)",
            "Rédiger des monographies de recherche et des articles dans des revues internationales de premier rang",
            "Organiser et animer des colloques, congrès et séminaires scientifiques interdisciplinaires",
            "Assurer la diffusion grand public des résultats scientifiques (vulgarisation, médias, débats citoyens)"
        ],
        "typicalDay": [
            {"time": "09:00", "title": "Analyse de données de recherche", "desc": "Exploitation d'un corpus de 200 entretiens d'enquête à l'aide d'un logiciel d'analyse sémantique."},
            {"time": "11:30", "title": "Réunion d'équipe d'un projet international", "desc": "Visioconférence avec des collègues sénégalais, français et canadiens pour coordonner un projet comparatif sur les migrations."},
            {"time": "14:30", "title": "Rédaction d'un article scientifique", "desc": "Finalisation de la discussion théorique d'un article destiné à une revue internationale à comité de lecture."},
            {"time": "17:00", "title": "Montage d'une candidature à un financement européen", "desc": "Chiffrage du budget et calendrier opérationnel pour un appel à projet de recherche du Conseil Européen de la Recherche (ERC)."}
        ],
        "skills": {
            "technical": [
                "Méthodologie de la recherche en sciences sociales au plus haut niveau de rigueur",
                "Maîtrise des normes académiques de publication et du processus d'évaluation par les pairs",
                "Compétences en humanités numériques (traitement de données, statistiques textuelles)",
                "Anglais scientifique irréprochable à l'écrit comme à l'oral"
            ],
            "human": [
                "Curiosité intellectuelle insatiable et persévérance à toute épreuve",
                "Rigueur méthodologique et honnêteté scientifique scrupuleuse",
                "Aptitude au travail collaboratif en équipes interdisciplinaires"
            ],
            "tools": [
                "Logiciels d'analyse qualitative et quantitative (R, Python, NVivo)",
                "Portails d'archives ouvertes et gestionnaires de références (Zotero, HAL, Zenodo)",
                "Plateformes d'appels à projets de recherche (ANR, Horizon Europe)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Master Recherche (Bac +5)", "title": "Master Recherche en Sciences Humaines et Sociales", "desc": "Obtention d'un mémoire de recherche avec mention d'excellence et obtention d'une bourse doctorale."},
                {"step": "Doctorat (Bac +8)", "title": "Doctorat en Sciences Humaines (Thèse de 3 à 4 ans)", "desc": "Soutenance d'une thèse de doctorat originale devant un jury international de pairs."},
                {"step": "Post-doctorat & Concours (Bac +9/10)", "title": "Post-doctorats internationaux + Concours de Chargé de Recherche (CRCN)", "desc": "Concours très sélectif du CNRS, de l'IRD ou de l'INED pour obtenir un poste de chercheur titulaire à vie."}
            ],
            "schools": [
                {"name": "CNRS (Centre National de la Recherche Scientifique) — France", "country": "France", "scope": "France"},
                {"name": "IRD (Institut de Recherche pour le Développement) — France / International", "country": "France", "scope": "International"},
                {"name": "IFAN Cheikh Anta Diop (Institut Fondamental d'Afrique Noire - UCAD) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Habilitation à Diriger des Recherches (HDR)", "Agrément de chercheur d'institut national"]
        },
        "career": {
            "sectors": ["Instituts publics de recherche (CNRS, IRD, INED, IFAN)", "Organisations internationales (UNESCO, OCDE, Banque Mondiale)", "Fondations privées de recherche", "Cabinets de prospective stratégique"],
            "employerTypes": ["Établissements Publics à caractère Scientifique et Technologique (EPST)", "Institutions multilatérales", "Think tanks d'excellence"],
            "evolution": ["Chargé de recherche de classe normale (CRCN)", "Directeur de recherche (DR)", "Directeur de laboratoire de recherche (UMR)", "Président d'organisme de recherche"],
            "pros": ["Liberté absolue d'explorer des questions passionnantes", "Participation directe à l'élargissement de la connaissance universelle de l'humanité"],
            "cons": ["Rareté des postes permanents ouverts aux concours chaque année", "Pression constante pour obtenir des financements de projets ('publish or perish')"]
        },
        "gettingStarted": {
            "beginnerProject": "Analyser un fait d'actualité contemporain sous le prisme d'un article scientifique de sciences sociales en rédigeant une fiche de lecture critique de 4 pages.",
            "steps": [
                "Créer un compte gratuit sur Google Scholar et configurer des alertes sur son sujet favori",
                "Consulter le portail OpenEdition.org qui regroupe des milliers de revues de sciences humaines en accès libre",
                "Lire 'La Méthode' d'Edgar Morin pour comprendre l'interdisciplinarité"
            ],
            "freeResources": ["OpenEdition.org (Portail de revues scientifiques en SHS)", "Google Scholar (Moteur de littérature académique mondiale)"]
        },
        "aiImpact": {
            "summary": "L'IA assiste la synthèse documentaire et le croisement de bases de données massives, mais la formulation d'hypothèses novatrices et la critique épistémologique restent le monopole absolu de l'esprit du chercheur.",
            "positiveImpacts": ["Exploration automatique de millions de citations pour détecter les lacunes dans la littérature scientifique", "Traduction multilingue instantanée des articles pour accroître la portée mondiale des découvertes"],
            "risksAndChallenges": ["Prolifération de faux articles scientifiques générés par IA soumis aux revues prédatrices", "Risque de perte de profondeur dans la lecture des grands textes canoniques"],
            "recommendedSkills": ["Maîtrise des protocoles de reproductibilité de la science ouverte (Open Science)", "Détection des données synthétiques et intégrité scientifique numérique"]
        },
        "africaContext": {
            "senegalInsight": "Dakar est historiquement la capitale ouest-africaine de la recherche en sciences humaines grâce à l'IFAN Cheikh Anta Diop, créé en 1936. Aujourd'hui, l'IFAN et le CODESRIA hébergent des dizaines de chercheurs renommés qui travaillent sur l'histoire, la linguistique africaine, la démographie, la sociologie urbaine et l'écologie sahélienne.",
            "westAfricaOpportunities": "Recherche sur les savoirs endogènes, études démographiques sur le dividende de la jeunesse et analyse des transitions écologiques et agraires.",
            "localChampions": ["IFAN Cheikh Anta Diop (Dakar)", "CODESRIA (Dakar)", "Représentation régionale de l'IRD au Sénégal"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Fiche métier : Chercheur", "url": "https://www.imaginetonfutur.com/metier/chercheur.html", "type": "metier"},
            {"organization": "CNRS (Centre National de la Recherche Scientifique)", "title": "Les métiers de la recherche scientifique", "url": "https://www.cnrs.fr", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Selon Imagine ton Futur, le chercheur fait progresser la science en ne tenant rien pour acquis : son moteur quotidien est le doute méthodique et l'expérimentation patiente !",
            "pourquoi": "Toutes les grandes avancées qui ont transformé nos sociétés (droits humains, compréhension des crises économiques, politiques de santé) sont nées de recherches patientes en sciences humaines.",
            "a_retenir": "Le chercheur en sciences humaines est l'éclaireur qui aide l'humanité à se comprendre elle-même."
        }
    },

    # -----------------------------------------------------------------------
    # 30. JOURNALISTE DE PRESSE ÉCRITE & WEB
    # -----------------------------------------------------------------------
    {
        "id": "journaliste",
        "slug": "journaliste",
        "title": "Journaliste de Presse Écrite & Web",
        "aliases": ["Reporter", "Journaliste d'investigation", "Rédacteur web d'actualité", "Correspondant de presse"],
        "icon": "📰",
        "image": "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Journalisme & Médias",
        "domainId": "journalisme-medias",
        "subdomain": "Presse écrite, Médias numériques & Investigation",
        "sectors": ["Presse nationale & régionale", "Médias d'information en ligne", "Agences de presse (AFP, Reuters)", "Magazines spécialisés"],
        "sourceImagineTonFutur": True,
        "isEmerging": False,
        "level": "Bac +3 à Bac +5 (Écoles de journalisme reconnues par la profession - CFJ, ESJ Lille, IPJ, CESTI)",
        "salary": "🇫🇷 France : 2 000 - 3 800 € net/mois (~30 000 - 52 000 € brut/an titulaire de la carte de presse, Source : Imagine ton Futur) • 🇸🇳 Sénégal : 350 000 - 1 200 000 FCFA / mois (Presse dakaroise, CESTI)",
        "simpleDefinition": "Le journaliste recherche, vérifie, recoupe, analyse et met en forme l'information d'actualité sous forme d'articles, d'enquêtes ou de reportages pour informer le public de manière rigoureuse, indépendante et honnête.",
        "shortDescription": "Témoin et décrypteur de l'actualité documenté par Imagine ton Futur, il enquête sur le terrain pour faire émerger la vérité des faits.",
        "longDescription": "Comme décrit sur la fiche officielle d'Imagine ton Futur, le journaliste est au cœur de la vie démocratique. Curieux de tout, il ne se contente jamais des communiqués officiels : il va sur le terrain, interroge des témoins, croise ses sources avec un esprit critique intransigeant et vérifie chaque chiffre avant de rédiger son papier. Dans un environnement numérique où les fake news circulent à la vitesse de l'éclair, sa déontologie (Charte de Munich) et sa rigueur d'enquêteur sont le rempart indispensable de la vérité publique.",
        "mainObjective": "Informer les citoyens de manière objective, vérifiée et équilibrée sur tous les aspects de la vie politique, économique, culturelle et sociale.",
        "companyRole": "Enquêteur de terrain et rédacteur garant de la véracité et de la clarté de l'information diffusée.",
        "workEnvironment": [
            "📰 Rédactions de journaux quotidiens et pure players en ligne",
            "🏃 Enquêtes de terrain permanentes (tribunaux, manifestations, sommets, zones de crise)",
            "📱 Stations de travail multimédias équipées pour la publication multi-supports en direct"
        ],
        "missions": [
            "Recueillir des informations exclusives auprès de réseaux de sources fiables et confidentielles",
            "Recouper systématiquement toute information auprès d'au moins deux sources indépendantes (règle déontologique)",
            "Rédiger des articles clairs, percutants et rythmés (titre, chapeau, intertitres, relances)",
            "Réaliser des reportages photo et vidéo mobiles sur le terrain (journalisme MoJo)",
            "Respecter scrupuleusement la déontologie journalistique et le droit de la presse (diffamation, respect de la vie privée)"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Conférence de rédaction matinale", "desc": "Proposition de sujets d'enquêtes au rédacteur en chef et répartition des angles de traitement de l'actualité du jour."},
            {"time": "10:30", "title": "Enquête de terrain & interviews", "desc": "Interviews contradictoires sur place auprès d'experts, d'élus et de riverains concernés par un projet urbain controversé."},
            {"time": "14:30", "title": "Fact-checking et vérification juridique", "desc": "Croisement des documents obtenus avec les bilans financiers officiels et consultation du service juridique."},
            {"time": "17:00", "title": "Bouclage et livraison de l'article", "desc": "Rédaction calibrée de 5 000 signes, choix des photos et transmission au secrétaire de rédaction avant l'heure limite de bouclage."}
        ],
        "skills": {
            "technical": [
                "Techniques d'écriture journalistique (pyramide inversée, accroche, chute, règle des 5W)",
                "Méthodologie d'investigation, d'interview contradictoire et de fact-checking",
                "Droit de la presse (Loi de 1881 sur la liberté de la presse, présomption d'innocence, diffamation)",
                "Outils de publication web (CMS WordPress, SEO d'actualité, réseaux sociaux d'information)"
            ],
            "human": [
                "Curiosité insatiable, pugnacité d'enquêteur et courage intellectuel",
                "Sensibilité humaine et capacité à mettre en confiance des interlocuteurs de tout milieu",
                "Résistance au stress du bouclage et rapidité d'exécution sous contrainte de temps"
            ],
            "tools": [
                "Logiciels de traitement éditorial et CMS (WordPress, Drupal, Adobe InCopy)",
                "Smartphones équipés pour le tournage et montage mobile (MoJo - LumaFusion, Filmic Pro)",
                "Outils de vérification d'images et de fact-checking (InVID, Google Reverse Image)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Licence (Bac +3)", "title": "Licence Lettres, Histoire, Sciences Politiques ou Droit", "desc": "Socle de culture générale, d'expression écrite irréprochable et compréhension du monde politique."},
                {"step": "École de journalisme reconnue (Bac +5)", "title": "Master d'école de journalisme (CFJ, ESJ Lille, IPJ, Sciences Po, CESTI)", "desc": "Conseillé par Imagine ton Futur : formation intensive aux techniques d'écriture, déontologie, radio, TV et web avec concours sélectif."}
            ],
            "schools": [
                {"name": "ESJ Lille (École Supérieure de Journalisme de Lille) — France", "country": "France", "scope": "France"},
                {"name": "CFJ Paris (Centre de Formation des Journalistes) — Paris, France", "country": "France", "scope": "France"},
                {"name": "CESTI (Centre d'Études des Sciences et Techniques de l'Information - UCAD) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Carte d'Identité des Journalistes Professionnels (Carte de Presse CCIJP)", "Carte de Presse Nationale du Sénégal (CAPS)"]
        },
        "career": {
            "sectors": ["Presse quotidienne nationale et régionale", "Pure players et médias d'investigation en ligne (Mediapart, Les Jours)", "Agences de presse mondiales (AFP, Reuters, AP)", "Magazines et revues d'analyse"],
            "employerTypes": ["Groupes de presse", "Médias indépendants", "Journaliste indépendant (Pigeur)"],
            "evolution": ["Grand reporter", "Chef de rubrique", "Rédacteur en chef adjoint", "Rédacteur en chef", "Directeur de la rédaction"],
            "pros": ["Métier d'aventure civique et de passion où aucun jour ne ressemble au précédent", "Possibilité d'avoir un impact direct sur la justice et la transparence démocratique"],
            "cons": ["Horaires imprévisibles et disponibilité constante selon l'actualité", "Précarité des piges lors des premières années d'exercice"]
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser une enquête journalistique locale de 800 mots sur un sujet de quartier méconnu, avec 3 interviews de terrain contradictoires et publication sur un blog étudiant.",
            "steps": [
                "Lire attentivement la Charte de Munich (Déclaration des devoirs et des droits des journalistes)",
                "S'entraîner à résumer une conférence de presse en 200 mots selon la règle des 5W (Who, What, Where, When, Why)",
                "Participer au journal étudiant ou à la radio associative de son université"
            ],
            "freeResources": ["SNJ.fr (Charte de Munich et déontologie journalistique)", "AFP.com (Dépêches de référence et fact-checking AFP Factuel)"]
        },
        "aiImpact": {
            "summary": "Des algorithmes rédigent des brèves boursières ou sportives à partir de chiffres bruts, mais l'investigation sur le terrain, la recherche de sources confidentielles et l'empathie du reportage humain sont totalement hors de portée de l'IA.",
            "positiveImpacts": ["Transcription instantanée des enregistrements d'interviews", "Analyse rapide de fuites de documents massives (Panama Papers) par recherche textuelle"],
            "risksAndChallenges": ["Banalisation de fermes à contenus IA produisant des articles clickbaits sans vérification", "Multiplication de 'deepfakes' audiovisuels nécessitant une vérification forensic permanente"],
            "recommendedSkills": ["Techniques avancées d'investigation en sources ouvertes (OSINT)", "Vérification forensic d'images et vidéos manipulées par IA"]
        },
        "africaContext": {
            "senegalInsight": "Le Sénégal jouit d'une tradition de presse libre et bouillonnante parmi les plus dynamiques d'Afrique. Le CESTI (Centre d'Études des Sciences et Techniques de l'Information de l'UCAD, fondé en 1965 avec l'UNESCO) est l'école de journalisme d'élite de toute l'Afrique de l'Ouest francophone, ayant formé les plus grands journalistes et directeurs de médias du continent.",
            "westAfricaOpportunities": "Journalisme d'investigation sur les ressources extractives, couverture des enjeux de gouvernance régionale et développement de médias d'information 100% mobiles.",
            "localChampions": ["CESTI de l'Université Cheikh Anta Diop", "Le Soleil (Quotidien national historique)", "Sud Quotidien & Groupe Sud Communication"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Fiche métier : Journaliste", "url": "https://www.imaginetonfutur.com/metier/journaliste.html", "type": "metier"},
            {"organization": "Syndicat National des Journalistes (SNJ)", "title": "Déontologie et statut du journaliste", "url": "https://www.snj.fr", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Selon Imagine ton Futur, pour obtenir la carte de presse professionnelle officielle (CCIJP), un journaliste doit tirer au moins 50% de ses revenus réguliers de son activité journalistique au sein d'une publication reconnue !",
            "pourquoi": "Cette carte protège le secret des sources, garantit le droit d'accès aux lieux officiels et protège l'indépendance de la profession contre les pressions extérieures.",
            "a_retenir": "Le journaliste cherche la vérité pour éclairer les citoyens libres."
        }
    },

    # -----------------------------------------------------------------------
    # 31. ÉDITEUR / RESPONSABLE ÉDITORIAL
    # -----------------------------------------------------------------------
    {
        "id": "editeur",
        "slug": "editeur",
        "title": "Éditeur / Responsable Éditorial",
        "aliases": ["Directeur de collection", "Directeur éditorial", "Éditeur littéraire", "Responsable de projet éditorial"],
        "icon": "✍️",
        "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Rédaction & Édition",
        "domainId": "redaction-edition",
        "subdomain": "Maison d'édition, Collections & Chaîne du livre",
        "sectors": ["Édition de livres", "Littérature & Essais", "Bande dessinée & Jeunesse", "Édition universitaire"],
        "sourceImagineTonFutur": True,
        "isEmerging": False,
        "level": "Bac +5 (Master Métiers du Livre et de l'Édition, Master Lettres / Sciences Humaines)",
        "salary": "🇫🇷 France : 2 200 - 4 500 € net/mois (~32 000 - 62 000 € brut/an selon la renommée de la maison, Source : Imagine ton Futur) • 🇸🇳 Sénégal : 450 000 - 1 500 000 FCFA / mois",
        "simpleDefinition": "L'éditeur découvre de nouveaux talents littéraires, sélectionne les manuscrits au sein du comité de lecture, accompagne l'auteur dans la réécriture de son texte, coordonne la fabrication matérielle du livre et orchestre sa mise en marché en librairie.",
        "shortDescription": "Chef d'orchestre de la chaîne du livre documenté par Imagine ton Futur, il transforme un manuscrit brut en un bel ouvrage qui rencontre son public.",
        "longDescription": "L'éditeur est à la fois un intellectuel exigeant et un chef de projet pragmatique. Comme documenté dans les formations littéraires d'Imagine ton Futur, il lit des centaines de manuscrits pour dénicher la perle rare qui portera la ligne éditoriale de sa maison. Une fois le contrat signé, il noue une relation de confiance intime avec l'auteur pour peaufiner chaque page du manuscrit. Il coordonne ensuite les correcteurs, les graphistes pour la couverture, l'imprimeur pour le choix du papier et l'équipe commerciale pour assurer une présence éclatante en vitrine des librairies.",
        "mainObjective": "Donner corps aux œuvres littéraires et intellectuelles en garantissant leur qualité d'écriture, leur beauté matérielle et leur viabilité économique.",
        "companyRole": "Découvreur de talents et gestionnaire stratégique d'une ligne ou d'une collection éditoriale.",
        "workEnvironment": [
            "📚 Maisons d'édition littéraires, illustrées ou universitaires",
            "🤝 Salons du livre, foires internationales (Francfort, Paris, Bruxelles, Dakar)",
            "☕ Rencontres régulières et intimes avec les auteurs, traducteurs et illustrateurs"
        ],
        "missions": [
            "Lire et évaluer les manuscrits reçus, animer les réunions du comité de lecture",
            "Négocier et rédiger les contrats d'édition et conventions de droits d'auteur",
            "Accompagner l'auteur dans le travail de réécriture, de rythme et de structure du texte",
            "Piloter le budget de fabrication du livre avec le maquettiste, l'iconographe et l'imprimeur",
            "Coordonner la stratégie de lancement avec l'équipe de promotion, les attachés de presse et les libraires"
        ],
        "typicalDay": [
            {"time": "09:00", "title": "Comité de lecture éditorial", "desc": "Débat avec la direction littéraire sur 3 manuscrits de romans reçus, décision de proposer un contrat pour l'un d'eux."},
            {"time": "11:00", "title": "Séance de travail en tête-à-tête avec un auteur", "desc": "Discussion approfondie sur la fin d'un roman et suggestion de resserrer l'intrigue du dernier chapitre."},
            {"time": "14:30", "title": "Validation du BAT (Bon à Tirer) de couverture", "desc": "Vérification des épreuves couleurs de la jaquette chez le fabricant avant lancement de l'impression de 10 000 exemplaires."},
            {"time": "17:00", "title": "Point presse avec l'attachée de presse", "desc": "Sélection des journalistes littéraires et influenceurs de lecture à qui adresser les épreuves non corrigées en avant-première."}
        ],
        "skills": {
            "technical": [
                "Excellence stylistique, littéraire et culture générale approfondie",
                "Droit de la propriété intellectuelle et contrats d'édition d'œuvres de l'esprit",
                "Maîtrise de la chaîne graphique et de fabrication du livre (papier, reliure, photogravure)",
                "Gestion financière d'un compte d'exploitation de livre (tirage, point mort, diffusion/distribution)"
            ],
            "human": [
                "Flavophilie (flair littéraire) et intuition pour déceler une voix d'auteur prometteuse",
                "Diplomatie, psychologie et tact pour faire accepter des réécritures sans blesser l'auteur",
                "Sens de l'organisation rigoureux et vision commerciale affûtée"
            ],
            "tools": [
                "Logiciels de PAO et suivi de fabrication (Adobe InDesign, Acrobat Pro)",
                "Outils de gestion de catalogue éditorial et de droits d'auteur",
                "Bases de données professionnelles des ventes de livres (GfK, Edistat, Dilicom)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Licence (Bac +3)", "title": "Licence de Lettres Modernes, Histoire ou Philosophie", "desc": "Solide culture littéraire, capacité de lecture critique rapide et maîtrise parfaite de la langue."},
                {"step": "Master professionnel (Bac +5)", "title": "Master Métiers du Livre et de l'Édition", "desc": "Formation de référence aux techniques éditoriales, droit de l'édition, marketing du livre et gestion de collection."}
            ],
            "schools": [
                {"name": "Université Sorbonne Paris Nord / Pôle Métiers du Livre de Villetaneuse — France", "country": "France", "scope": "France"},
                {"name": "Asfored (École de Management de l'Édition) — Paris, France", "country": "France", "scope": "France"},
                {"name": "EBAD / UFR Lettres et Sciences Humaines (UCAD) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat de Management de l'Édition (Asfored)", "Formation aux contrats de cession de droits internationaux"]
        },
        "career": {
            "sectors": ["Grandes maisons d'édition (Gallimard, Seuil, Albin Michel, Grasset)", "Maisons d'édition indépendantes", "Édition scolaire et universitaire", "Édition numérique et audio"],
            "employerTypes": ["Groupes éditoriaux (Hachette, Madrigall, Editis)", "Maisons d'édition à taille humaine", "Création de sa propre maison d'édition"],
            "evolution": ["Directeur de collection", "Directeur littéraire", "Directeur général de maison d'édition", "Agent littéraire"],
            "pros": ["Accompagner la naissance d'œuvres qui marqueront des générations", "Métier passionnant au croisement de la création intellectuelle et du commerce culturel"],
            "cons": ["Marché du livre concurrentiel avec un nombre d'exemplaires vendus parfois décevant", "Nécessité de gérer la déception des auteurs dont les manuscrits sont refusés"]
        },
        "gettingStarted": {
            "beginnerProject": "Rédiger une fiche de lecture éditoriale de 2 pages sur un roman récent avec argumentaire de vente, public cible, forces, faiblesses et préconisations de tirage.",
            "steps": [
                "Fréquenter assidûment les librairies indépendantes pour observer l'accueil des nouveautés",
                "Consulter les dossiers professionnels de Livres Hebdo (magazine de référence de l'édition)",
                "Postuler pour un stage de lecture de manuscrits dans une maison d'édition"
            ],
            "freeResources": ["LivresHebdo.fr (Actualité de l'édition française et mondiale)", "SNE.fr (Syndicat National de l'Édition)"]
        },
        "aiImpact": {
            "summary": "L'IA assiste la relecture de base et le calibrage des tirages par analyse prédictive des ventes, mais le flair éditorial, l'intuition artistique et la complicité humaine avec l'auteur restent l'apanage irremplaçable de l'éditeur.",
            "positiveImpacts": ["Génération automatisée de métadonnées pour le référencement des livres en ligne (ONIX)", "Détection des tendances de lecture émergentes sur les réseaux sociaux littéraires (BookTok)"],
            "risksAndChallenges": ["Inondation des comités de lecture par des milliers de manuscrits écrits par IA sans âme", "Nécessité de protéger les textes des auteurs contre l'entraînement sauvage des modèles sans droit"],
            "recommendedSkills": ["Connaissance des droits d'auteur face à l'IA générative", "Compétences en marketing digital littéraire et animation de communautés de lecteurs"]
        },
        "africaContext": {
            "senegalInsight": "Dakar est historiquement le phare de l'édition d'Afrique subsaharienne avec des maisons de légende comme Présence Africaine (fondée par Alioune Diop), les Nouvelles Éditions Africaines du Sénégal (NEAS) et aujourd'hui la maison indépendante d'excellence Jimsaan (fondée par Felwine Sarr et Boubacar Boris Diop). Les éditeurs sénégalais mènent un combat vital pour éditer en Afrique et faire rayonner les auteurs du continent à travers le monde.",
            "westAfricaOpportunities": "Édition d'ouvrages en langues nationales (Wolof, Pulaar), manuels scolaires régionaux et coéditions internationales panafricaines.",
            "localChampions": ["Éditions Jimsaan (Dakar)", "Les Nouvelles Éditions Africaines du Sénégal (NEAS)", "Éditions L'Harmattan Sénégal"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Secteur Information, communication & Métiers du Livre", "url": "https://www.imaginetonfutur.com/les-metiers/domaine/information-communication.html", "type": "metier"},
            {"organization": "Syndicat National de l'Édition (SNE)", "title": "Les métiers et formations de l'édition", "url": "https://www.sne.fr", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En 1947 à Dakar et Paris, l'intellectuel sénégalais Alioune Diop fondait 'Présence Africaine', la revue et maison d'édition historique qui allait publier les plus grands esprits de la négritude et du panafricanisme (Césaire, Senghor, Cheikh Anta Diop, Nelson Mandela) !",
            "pourquoi": "Cette initiative éditoriale a prouvé que l'édition est une arme d'émancipation intellectuelle et politique majeure.",
            "a_retenir": "L'éditeur offre des ailes de papier aux rêves des auteurs."
        }
    },

    # -----------------------------------------------------------------------
    # 32. ÉCONOMISTE D'ENTREPRISE (MÉTIER TRANSVERSAL CLÉ)
    # -----------------------------------------------------------------------
    {
        "id": "economiste-entreprise",
        "slug": "economiste-entreprise",
        "title": "Économiste d'Entreprise / Analyste Conjoncturel",
        "aliases": ["Économiste de marché", "Analyste d'études économiques", "Économiste d'affaires", "Chief Economist adjoint"],
        "icon": "💼",
        "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Études Économiques & Métiers Transversaux",
        "domainId": "economie-transversale",
        "subdomain": "Études de conjoncture, Stratégie dirigeant & Analyse de marché",
        "sectors": ["Grandes entreprises & Groupes industriels", "Banques & Institutions financières", "Administration publique & Ministères", "Cabinets de conseil en stratégie"],
        "sourceImagineTonFutur": True,
        "isEmerging": False,
        "level": "Bac +5 (Master Économie / Économétrie, Diplôme d'IEP / Sciences Po, ENSAE)",
        "salary": "🇫🇷 France : 2 900 € brut/mois débutant (~35 000 - 65 000 € brut/an selon expérience, Source officielle : Imagine ton Futur) • 🇸🇳 Sénégal : 600 000 - 2 200 000 FCFA / mois (BCEAO, banques, multinationales)",
        "simpleDefinition": "L'économiste d'entreprise réalise des études de conjoncture, analyse les tendances de marché, scrute la concurrence et les prix, puis conseille directement les dirigeants d'entreprise ou l'administration pour orienter leurs décisions stratégiques (politique tarifaire, implantations, investissements).",
        "shortDescription": "Conseiller économique des dirigeants documenté mot pour mot par Imagine ton Futur, il traduit les grands flux économiques mondiaux en décisions concrètes.",
        "longDescription": "Comme documenté mot pour mot dans la fiche officielle d'Imagine ton Futur pour le secteur Lettres, Langues & Sciences Humaines : 'L'économiste d'entreprise réalise des études qui vont servir aux dirigeants d'entreprise ou à l'administration. En collectant diverses informations dans les journaux, les revues, il va analyser la concurrence, observer la hausse ou la baisse des prix... Il pourra ensuite conseiller un chef d'entreprise sur les prix à pratiquer sur les produits, lui donner des conseils par rapport à un site d'implantation... Un économiste d'entreprise débutant gagne environ 2 900 euros brut par mois.'",
        "mainObjective": "Modéliser et interpréter les variables économiques pour éclairer la prise de décision stratégique des états-majors d'entreprises.",
        "companyRole": "Conseiller de confiance des directions générales pour l'anticipation macro et micro-économique.",
        "workEnvironment": [
            "🏢 Sièges sociaux de grands groupes industriels et commerciaux",
            "🏦 Salles de marchés, banques d'affaires et banques centrales",
            "🏛️ Ministères de l'Économie, du Commerce et agences de développement"
        ],
        "missions": [
            "Collecter, traiter et modéliser les indicateurs macroéconomiques (inflation, taux d'intérêt, cours des matières premières)",
            "Analyser la concurrence sectorielle et scruter les dynamiques de prix sur les marchés cibles",
            "Réaliser des études d'impact économique préalables aux décisions d'investissement ou d'implantation internationale",
            "Rédiger des notes de conjoncture régulières et des scénarios prédictifs destinés aux comités exécutifs",
            "Conseiller la direction sur les stratégies de tarification (pricing) et les risques de change"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Tour d'horizon de la conjoncture matinale", "desc": "Analyse des chiffres d'inflation et des décisions de politique monétaire de la banque centrale (BCE / BCEAO)."},
            {"time": "10:30", "title": "Modélisation économétrique de la demande", "desc": "Simulation sous R de l'élasticité-prix d'une nouvelle gamme de produits en fonction des hausses de coûts énergétiques."},
            {"time": "14:00", "title": "Étude d'implantation géographique", "desc": "Rédaction d'une note d'aide à la décision sur le choix d'un site logistique régional d'après les incitations fiscales et coûts de main-d'œuvre."},
            {"time": "16:30", "title": "Présentation stratégique au comité de direction", "desc": "Exposé de 30 minutes devant le PDG sur les prévisions de croissance sectorielle pour le prochain exercice budgétaire."}
        ],
        "skills": {
            "technical": [
                "Analyse micro et macroéconomique approfondie",
                "Économétrie, modélisation de séries temporelles et statistiques avancées",
                "Analyse de la concurrence et théories industrielles des prix (pricing strategy)",
                "Maîtrise des logiciels statistiques et de traitement de données (R, Python, Stata, EViews)"
            ],
            "human": [
                "Haute rigueur intellectuelle et esprit critique face aux données chiffrées",
                "Sens aigu des réalités du business et pragmatisme opérationnel",
                "Capacité à vulgariser des mécanismes économiques complexes auprès de dirigeants non-économistes"
            ],
            "tools": [
                "Logiciels d'économétrie et statistiques (R, Python Pandas, Stata)",
                "Bases de données économiques mondiales (Bloomberg, Refinitiv Eikon, Eurostat, FMI, Banque Mondiale)",
                "Outils de visualisation de données et présentations pour comités exécutifs (PowerBI, Tableau)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Licence (Bac +3)", "title": "Licence d'Économie-Gestion ou Licence Sciences Sociales parcours Économie", "desc": "Fondements de la microéconomie, macroéconomie, mathématiques et statistiques."},
                {"step": "Master professionnel (Bac +5)", "title": "Master Économie d'entreprise, Économétrie ou Diplôme d'IEP section économique", "desc": "Recommandé par Imagine ton Futur : formation bac+5 en économie avec bon niveau mathématique (IEP, écoles de commerce, ENSAE, Masters universitaires)."}
            ],
            "schools": [
                {"name": "ENSAE Paris (École Nationale de la Statistique et de l'Administration Économique) — France", "country": "France", "scope": "France"},
                {"name": "Sciences Po Paris (Master Economics and Public Policy) — France", "country": "France", "scope": "France"},
                {"name": "Faculté des Sciences Économiques et de Gestion (FASEG - UCAD) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat de modélisation financière et économétrique", "Certification CFA (Chartered Financial Analyst - niveau 1)"]
        },
        "career": {
            "sectors": ["Grandes entreprises industrielles et de distribution", "Banques de détail et d'investissement", "Organisations patronales et chambres de commerce", "Institutions de régulation économique"],
            "employerTypes": ["Directions de la stratégie de multinationales", "Bureaux d'études économiques", "Grandes institutions financières"],
            "evolution": ["Chef économiste (Chief Economist)", "Directeur de la stratégie d'entreprise", "Directeur du développement international", "Conseiller économique ministériel"],
            "pros": ["Poste d'influence stratégique directe auprès des plus hauts dirigeants", "Rémunération très attractive dès le début de carrière (2 900 € brut/mois)"],
            "cons": ["Pression sur la justesse des prévisions économiques en période d'incertitude", "Exigence d'une grande rigueur sur la manipulation de chiffres complexes"]
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser une note de conjoncture de 3 pages analysant l'impact de la variation des cours du baril de pétrole sur les coûts de production d'une entreprise industrielle.",
            "steps": [
                "Télécharger les données économiques ouvertes sur le site de la Banque Mondiale ou de l'INSEE",
                "Construire des graphiques d'évolution sous Excel et calculer des corrélations statistiques",
                "Lire chaque semaine les chroniques économiques des journaux de référence (Les Échos, Financial Times)"
            ],
            "freeResources": ["Banque-france.fr (Notes de conjoncture économique)", "Worldbank.org (Bases de données économiques ouvertes)"]
        },
        "aiImpact": {
            "summary": "L'IA excelle dans le traitement instantané de millions de signaux économiques et la détection d'anomalies de prix, permettant à l'économiste d'entreprise de se concentrer sur l'interprétation stratégique et le conseil aux dirigeants.",
            "positiveImpacts": ["Automatisation des collectes de données de prix concurrentiels sur le web (scraping légal)", "Modèles prédictifs d'élasticité de la demande alimentés par le machine learning"],
            "risksAndChallenges": ["Incapacité des modèles d'IA à anticiper les chocs géopolitiques imprévisibles ('cygnes noirs')", "Risque d'alignement moutonnier des prix si toutes les entreprises utilisent le même algorithme"],
            "recommendedSkills": ["Machine learning appliqué à l'économétrie (Causal AI)", "Maîtrise des tableaux de bord interactifs de prévision économique"]
        },
        "africaContext": {
            "senegalInsight": "À Dakar, siège de la Banque Centrale des États de l'Afrique de l'Ouest (BCEAO), les économistes d'entreprise sont au premier rang pour analyser les dynamiques de la zone Franc CFA, l'impact des découvertes pétrogazières (Sangomar, GTA) et l'intégration commerciale de la Zone de Libre-Échange Continentale Africaine (ZLECAF).",
            "westAfricaOpportunities": "Études de marché pour les investissements industriels en Afrique de l'Ouest, conseil en pricing agricole et analyses macroéconomiques régionales.",
            "localChampions": ["BCEAO (Siège central de Dakar)", "FASEG de l'Université Cheikh Anta Diop", "Direction de la Prévision et des Études Économiques (DPEE Sénégal)"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Fiche métier : Economiste d'entreprise", "url": "https://www.imaginetonfutur.com/metier/economiste-dentreprise.html", "type": "metier"},
            {"organization": "Association Française de Science Économique (AFSE)", "title": "Les métiers de l'économie", "url": "https://www.afse.fr", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Selon la fiche officielle d'Imagine ton Futur, l'économiste d'entreprise est classé dans le secteur Lettres, langues, sciences humaines car son analyse repose autant sur la compréhension qualitative des comportements humains et sociétaux que sur les équations mathématiques !",
            "pourquoi": "L'économie est avant tout une science sociale : sans compréhension de la psychologie des consommateurs et du climat social, les chiffres ne permettent pas d'anticiper le futur.",
            "a_retenir": "L'économiste d'entreprise traduit les soubresauts du monde en boussole pour les dirigeants."
        }
    }
]

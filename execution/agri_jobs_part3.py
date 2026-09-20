# execution/agri_jobs_part3.py
# Fiches Métiers Partie 3 :
# Domaine 6 : Aquaculteur, Halieute (2)
# Domaine 7 : Ingénieur forestier, Technicien forestier, Jardinier-paysagiste, Élagueur-grimpeur (4)
# Domaine 8 : Ingénieur agroalimentaire, Responsable qualité HACCP, Conducteur de ligne agroalimentaire (3)
# Domaine 9 : Conseiller de gestion agricole, Chargé d'affaires agricoles, Juriste en droit rural (3)
# Domaine 10 : Ingénieur AgriTech, Télépilote de drone agricole, Data analyste agricole (3)
# Domaine 11 : Chef d'exploitation agricole, Directeur de coopérative agricole (2)
# Total Partie 3 = 17 Métiers

JOBS_PART3 = [
    # -----------------------------------------------------------------------
    # 6. PÊCHE, AQUACULTURE & RESSOURCES HALIEUTIQUES
    # -----------------------------------------------------------------------
    {
        "id": "aquaculteur",
        "slug": "aquaculteur",
        "title": "Aquaculteur / Pisciculteur / Ostréiculteur",
        "aliases": ["Pisciculteur", "Ostréiculteur", "Éleveur de poissons", "Aquacultrice"],
        "icon": "🐟",
        "image": "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Pêche, Aquaculture & Ressources Halieutiques",
        "domainId": "peche-aquaculture",
        "subdomain": "Aquaculture continentale & marine",
        "sourceOnisep": True,
        "sourceStudyrama": True,
        "isEmerging": False,
        "level": "CAP / Bac Pro Aquaculture à Bac +2 (BTSA Aquaculture)",
        "salary": "🇫🇷 France : 1 800 - 2 800 € net/mois (Source : Studyrama / Onisep) • 🇸🇳 Sénégal : 250 000 - 900 000 FCFA / mois (Source : Fermes piscicoles, ANA)",
        "simpleDefinition": "L'aquaculteur élève des organismes aquatiques (truites, bars, daurades, tilapias, huîtres, moules ou crevettes) en eau douce ou en mer, de la reproduction jusqu'à la récolte marchande.",
        "shortDescription": "Fiche documentée par Onisep et Studyrama, il assure la production durable de protéines aquatiques face à l'épuisement des stocks de poissons sauvages.",
        "longDescription": "L'aquaculteur conduit l'élevage dans des bassins en terre, des raceways bétonnés, des cages flottantes en mer ou des parcs à huîtres découvrants. Selon Studyrama, il maîtrise l'écloserie, le sevrage des alevins, le nourrissage dosé selon la température de l'eau, la surveillance des paramètres physico-chimiques (oxygène dissous, pH, ammonium) et le tri calibré des poissons ou coquillages pour le marché.",
        "mainObjective": "Produire des poissons ou coquillages sains et savoureux tout en préservant la qualité de l'écosystème aquatique.",
        "companyRole": "Responsable zootechnique et garant du bien-être et de la sécurité sanitaire des élevages aquatiques.",
        "workEnvironment": ["🌊 Bassins extérieurs, étangs, cages en mer ou estran maritime à marée basse", "🚤 Bateaux ostréicoles et barques de nourrissage", "🥾 Bottes, cuissardes et travail physique au contact permanent de l'eau"],
        "missions": [
            "Surveiller en continu la qualité de l'eau (taux d'oxygène dissous, température, salinité, nitrites)",
            "Gérer la distribution raisonnée des aliments pour poissons sans polluer le fond des bassins",
            "Assurer la reproduction artificielle en écloserie et le suivi des larves et alevins",
            "Effectuer les tris périodiques par classe de taille pour éviter le cannibalisme",
            "Récolter, abattre, éviscérer et conditionner sous glace les poissons pour la vente"
        ],
        "typicalDay": [
            {"time": "06:30", "title": "Mesure matinale de l'oxygène dissous", "desc": "Contrôle à l'oxymètre de tous les bassins à l'aube, moment où l'oxygène est au plus bas."},
            {"time": "08:30", "title": "Tournée de nourrissage et observation du comportement", "desc": "Distribution de granulés et vérification de la voracité des poissons pour ajuster la ration."},
            {"time": "14:00", "title": "Chantier de calibrage mécanique", "desc": "Passage d'un lot de bars dans la trieuse à rouleaux pour séparer 3 calibres marchands."},
            {"time": "17:00", "title": "Entretien des grilles et aérateurs", "desc": "Nettoyage des grilles de filtration et test des aérateurs à pales de secours."}
        ],
        "skills": {
            "technical": ["Biologie et physiologie des espèces aquatiques", "Chimie de l'eau et dynamique des bassins aquacoles", "Conduite des équipements (oxymètres, trieuses, aérateurs)", "Biosécurité et prévention des pathologies aquatiques", "Normes d'hygiène alimentaire des produits de la mer"],
            "human": ["Observation minutieuse et patience", "Grande endurance physique et résistance au froid/humidité", "Réactivité immédiate face à une baisse d'oxygène", "Sens de l'organisation"],
            "tools": ["Oxymètres et sondes multiparamètres", "Distributeurs automatiques de nourriture solaires", "Aérateurs de surface à pales", "Bateaux barges ostréicoles et chaluts de pêche"],
            "analytical": ["Calcul du taux de conversion alimentaire (FCR)", "Densité de charge par mètre cube d'eau"]
        },
        "specializations": ["Pisciculture continentale d'eau douce (truites, esturgeons)", "Pisciculture marine en cages (bar, daurade, saumon)", "Conchyliculture (huîtres, moules)", "Pisciculture tropicale (tilapia, poisson-chat africain Clarias)"],
        "studies": {
            "pathway": [
                {"step": "CAP / Bac Pro", "title": "Bac Pro Productions Aquacoles", "desc": "Formation pratique par alternance en ferme aquacole ou parc conchylicole."},
                {"step": "Bac +2", "title": "BTSA Aquaculture", "desc": "Diplôme de référence pour devenir chef d'exploitation aquacole ou responsable d'écloserie."},
                {"step": "Bac +3", "title": "Licence Pro Aquaculture Durable ou Gestion des Écosystèmes Aquatiques", "desc": "Approfondissement en biosécurité et systèmes à recirculation (RAS)."}
            ],
            "schools": [
                {"name": "Lycées maritimes et aquacoles (Guérande, La Rochelle, Sète) — France", "country": "France", "scope": "France"},
                {"name": "Institut Universitaire de Pêche et d'Aquaculture (IUPA Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Centre d'Initiation Horticole et Aquacole (Sénégal)", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Permis bateau côtier / fluvial", "Certificat d'Aptitude à la Conduite des Engins Maritimes"],
            "schoolSubjects": ["Biologie marine", "Chimie de l'eau", "Pathologie aquatique", "Gestion d'entreprise"]
        },
        "career": {
            "sectors": ["Fermes piscicoles d'eau douce ou de mer", "Parcs ostréicoles et mytilicoles", "Écloseries et nurseries marines industrielles", "Centres de recherche océanographique (Ifremer, CRODT)"],
            "employerTypes": ["Entreprises aquacoles privées", "Groupements de conchyliculteurs", "Coopératives de pêcheurs"],
            "evolution": "Ouvrier aquacole ➔ Chef d'atelier écloserie ou grossissement ➔ Responsable d'exploitation aquacole ➔ Propriétaire d'une ferme aquacole",
            "pros": "Travail en communion avec le milieu marin ou aquatique, secteur indispensable pour nourrir le monde sans vider les océans.",
            "cons": "Travail physique exigeant soumis aux intempéries marines, risques sanitaires brutaux (marées rouges, épizooties).",
        },
        "gettingStarted": {
            "beginnerProject": "Monter un petit système aquaponique associant 5 tilapias et un bac de basilic en circuit fermé.",
            "intermediateProject": "Mesurer et cartographier les variations journalières d'oxygène dissous et de température dans un étang de pêche.",
            "advancedProject": "Dimensionner une écloserie de tilapias capable de produire 50 000 alevins par mois avec système de filtration biologique.",
            "portfolioIdeas": ["Protocole de suivi physico-chimique d'un bassin", "Plan d'une installation aquacole en circuit fermé (RAS)"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des caméras sous-marines équipées de réseaux neuronaux évaluent la taille des poissons et arrêtent automatiquement l'alimentation dès que la satiété est atteinte.",
            "automatedTasks": ["Surveillance continue des paramètres physico-chimiques par bouées IoT", "Calcul automatique de la biomasse sous l'eau"],
            "emergingSkills": ["Supervision des systèmes d'aquaculture en circuit recirculé (RAS) haute technologie", "Gestion des flux de données hydrobiologiques"],
            "humanEdge": "Le savoir-faire de manipulation délicate des alevins et géniteurs lors de la ponte artificielle."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la rareté du poisson sauvage en mer pousse l'Agence Nationale de l'Aquaculture (ANA) à développer massivement l'élevage de tilapia et de clarias le long du fleuve Sénégal, à Richard-Toll et dans le delta du Saloum.",
            "localSectors": ["Fermes piscicoles de la vallée du fleuve Sénégal (Podor, Dagana, Matam)", "Pôles ostréicoles du Sine Saloum (Delta du Saloum, Fatick)", "Agro-pisciculture périurbaine de Dakar"],
            "remoteWork": "Totalement sur place auprès des bassins.",
            "entrepreneurship": "Création d'une ferme piscicole intensive de tilapia en bassins hors-sol avec alimentation solaire des pompes."
        },
        "relatedJobSlugs": ["halieute", "responsable-elevage", "ingenieur-agroalimentaire", "chef-exploitation-agricole"],
        "connectedFamilies": ["environnement-climat", "industrie-ingenierie", "commerce-marketing"],
        "resources": [{"type": "article", "title": "Fiche Pisciculteur Onisep", "url": "https://www.onisep.fr", "source": "Onisep"}],
        "sources": ["Onisep", "Studyrama", "CIPA (Comité Interprofessionnel des Produits de l'Aquaculture)", "ANA Sénégal"],
        "interests": ["nature-environnement", "construire-fabriquer"],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Selon l'Onisep et la FAO, plus d'un poisson sur deux consommé dans le monde provient désormais de l'aquaculture et non de la pêche de capture.",
            "pourquoi": "La stabilisation des captures sauvages face à une population mondiale croissante fait de l'aquaculture l'activité de production animale à la croissance la plus rapide.",
            "a_retenir": "Un métier d'avenir absolu pour préserver la biodiversité des mers tout en assurant l'apport en protéines saines des populations."
        }
    },
    {
        "id": "halieute",
        "slug": "halieute",
        "title": "Ingénieur Halieute / Chercheur en Sciences Halieutiques",
        "aliases": ["Halieute", "Biologiste des pêches", "Expert en gestion des ressources marines", "Scientifique des pêches"],
        "icon": "🐬",
        "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Pêche, Aquaculture & Ressources Halieutiques",
        "domainId": "peche-aquaculture",
        "subdomain": "Gestion des stocks & biologie marine",
        "sourceOnisep": True,
        "sourceStudyrama": False,
        "isEmerging": False,
        "level": "Bac +5 (Diplôme d'Ingénieur Agronome spécialité Halieutique ou Master Océanologie)",
        "salary": "🇫🇷 France : 2 800 - 3 500 € brut/mois débutant (~33 600 - 42 000 €/an, Source : Onisep / Ifremer) • 🇸🇳 Sénégal : 450 000 - 1 500 000 FCFA / mois (Source : CRODT, Ministères des Pêches, ONG marines)",
        "simpleDefinition": "L'ingénieur halieute évalue l'état des stocks de poissons, étudie la dynamique des populations marines et définit les quotas de pêche durables pour éviter la surpêche.",
        "shortDescription": "Fiche documentée par Onisep dans ses filières d'excellence agronomiques marines, ce scientifique modélise l'équilibre fragile entre activité humaine et survie des océans.",
        "longDescription": "L'halieutique est la science de l'exploitation des ressources vivantes aquatiques. Selon l'Onisep, l'halieute embarque sur des navires de recherche scientifique ou recueille des données auprès des criées portuaires (taille des prises, âge des poissons par lecture des otolithes, maturité sexuelle). À l'aide de modèles mathématiques et statistiques, il calcule le Rendement Maximal Durable (RMD) et éclaire les gouvernements pour fixer les périodes de repos biologique et les quotas de pêche.",
        "mainObjective": "Préserver la durabilité des ressources marines et la viabilité économique des communautés de pêcheurs.",
        "companyRole": "Garant scientifique de la gestion responsable des pêches maritimes et fluviales.",
        "workEnvironment": ["🔬 Laboratoires d'océanographie et de recherche marine (Ifremer, IRD, CRODT)", "🚢 Campagnes de chalutage scientifique en haute mer", "⚓ Criées portuaires et quais de débarquement artisanaux"],
        "missions": [
            "Conduire des campagnes d'évaluation acoustique et d'échantillonnage biologique en mer",
            "Déterminer l'âge des poissons par otolithométrie et analyser les régimes alimentaires marins",
            "Développer des modèles mathématiques de dynamique des populations de poissons (Virtual Population Analysis)",
            "Évaluer les impacts des engins de pêche (sélectivité des maillages de filets) pour réduire les captures accidentelles",
            "Rédiger des avis scientifiques pour les comités régionaux des pêches et les conventions internationales"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Échantillonnage en criée à l'arrivée des bateaux", "desc": "Mesure biométrique de 200 merlus et prélèvement d'otolithes pour estimer la pyramide des âges."},
            {"time": "11:00", "title": "Lecture microscopique au laboratoire", "desc": "Comptage des anneaux de croissance sur coupes minces d'otolithes au microscope à contraste de phase."},
            {"time": "14:00", "title": "Modélisation statistique sous R", "desc": "Ajustement du modèle de dynamique de population pour simuler l'impact d'une hausse de 10% de l'effort de pêche."},
            {"time": "16:30", "title": "Conférence avec les représentants des pêcheurs", "desc": "Présentation pédagogique de l'état de la ressource et débat sur les dates de fermeture saisonnière."}
        ],
        "skills": {
            "technical": ["Biologie marine et dynamique des populations exploitées", "Otolithométrie et biométrie halieutique", "Modélisation mathématique et biostatistique sous R ou Python", "Technologie des engins de pêche et acoustique sous-marine", "Politique Commune de la Pêche (PCP) et droit de la mer"],
            "human": ["Pédagogie et diplomatie face aux tensions socio-économiques", "Rigueur d'analyse scientifique sans complaisance", "Résistance au mal de mer lors des campagnes hauturières", "Aptitude au dialogue interdisciplinaire"],
            "tools": ["Microscopes et loupes binoculaires de laboratoire", "Sondeurs acoustiques de détection de bancs de poissons", "Packages R dédiés aux pêches (FLR, stockassessment)", "Bases de données océanographiques internationales"],
            "analytical": ["Estimation du Rendement Maximal Durable (RMD/MSY)", "Analyse multivariée des écosystèmes marins"]
        },
        "specializations": ["Évaluation des stocks pélagiques (sardines, thons)", "Gestion des pêcheries démersales et benthiques (soles, langoustines)", "Éco-conception d'engins de pêche sélectifs", "Gouvernance des pêches artisanales tropicales"],
        "studies": {
            "pathway": [
                {"step": "Bac +2", "title": "Prépa BCPST ou Licence Sciences de la Vie et de la Terre", "desc": "Bases en biologie, mathématiques appliquées et écologie."},
                {"step": "Bac +5", "title": "Diplôme d'Ingénieur Agronome spécialité Halieutique ou Master Sciences Halieutiques", "desc": "Seule grande filière spécialisée en France à l'Institut Agro Rennes-Angers."}
            ],
            "schools": [
                {"name": "Institut Agro Rennes-Angers (Département Halieutique) — France", "country": "France", "scope": "International"},
                {"name": "Institut Universitaire de Pêche et d'Aquaculture (IUPA Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Centre de Recherches Océanographiques de Dakar-Thiaroye (CRODT/ISRA) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat de sécurité maritime (formation à la survie en mer)", "Plongeur scientifique CNRS / Ifremer"],
            "schoolSubjects": ["Écologie marine", "Biostatistiques", "Dynamique des populations", "Économie des pêches"]
        },
        "career": {
            "sectors": ["Instituts publics de recherche marine (Ifremer, IRD, CRODT)", "Comités nationaux et régionaux des pêches maritimes", "Organisations régionales de gestion de la pêche (CIEM/ICES, ICCAT)", "Bureaux d'études maritimes et ONG de conservation (WWF)"],
            "employerTypes": ["Instituts de recherche d'État", "Organisations intergouvernementales", "Fédérations de professionnels de la pêche"],
            "evolution": "Chargé d'études halieutiques ➔ Chercheur en modélisation marine ➔ Responsable d'unité d'évaluation des stocks ➔ Conseiller scientifique auprès des ministères ou de la Commission européenne",
            "pros": "Métier à haute utilité publique pour sauver la biodiversité marine, campagnes océanographiques stimulantes, réseau international d'experts soudé.",
            "cons": "Position délicate d'arbitre entre impératifs écologiques stricts et survie économique immédiate des pêcheurs, éloignement familial en mer."
        },
        "gettingStarted": {
            "beginnerProject": "Analyser les rapports publics du CIEM sur l'état du stock de bar en Manche pour comprendre la notion de quota.",
            "intermediateProject": "Écrire un script R pour estimer les paramètres de l'équation de croissance de von Bertalanffy sur un jeu de données de tailles.",
            "advancedProject": "Modéliser l'impact d'un changement de maillage de filet de chalut sur la sélectivité des juvéniles d'une espèce cible.",
            "portfolioIdeas": ["Analyse statistique de données de criée", "Note de synthèse sur la gestion durable du thon rouge"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "Des algorithmes de vision par ordinateur identifient et mesurent automatiquement les poissons défilant sur les tapis de tri des navires ou les images de caméras sous-marines.",
            "automatedTasks": ["Reconnaissance d'espèces et comptage par vidéo automatisée", "Traitement volumique des échosondeurs acoustiques"],
            "emergingSkills": ["Machine learning appliqué à l'océanographie satellitaire", "Intégration du changement climatique dans les modèles de dérive larvaire"],
            "humanEdge": "La négociation diplomatique internationale et la pédagogie bienveillante avec les marins-pêcheurs."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la pêche artisanale (pirogues) emploie plus de 600 000 personnes et fournit le fameux Ceebu Jën national. Face à la raréfaction des sardinelles (yaboy) et aux accords avec les chalutiers étrangers, les chercheurs du CRODT et de l'IUPA sont au cœur des débats cruciaux de souveraineté nationale.",
            "localSectors": ["Centre de Recherches Océanographiques de Dakar-Thiaroye (CRODT/ISRA)", "Grands ports de pêche artisanale (Kayar, Joal-Fadiouth, Saint-Louis, Soumbédioune)", "Direction des Pêches Maritimes (DPM)"],
            "remoteWork": "Analyses statistiques possibles en télétravail partiel, missions de terrain indispensables.",
            "entrepreneurship": "Création d'une agence indépendante de certification et d'audit de durabilité des pêcheries ouest-africaines."
        },
        "relatedJobSlugs": ["aquaculteur", "ingenieur-agronome", "ingenieur-agroecologie", "responsable-qualite-haccp-agri"],
        "connectedFamilies": ["environnement-climat", "recherche-sciences", "droit-justice"],
        "resources": [{"type": "article", "title": "Fiche Métier Halieute Onisep", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/ingenieur-agronome", "source": "Onisep"}],
        "sources": ["Onisep", "Ifremer", "Institut Agro Rennes", "CRODT"],
        "interests": ["nature-environnement", "resoudre-problemes"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon l'Onisep et l'Institut Agro, les ingénieurs halieutes sont très rares sur le marché mondial (moins de 40 diplômés par an en France) pour une demande scientifique immense.",
            "pourquoi": "Peu de filières dispensent cette triple compétence pointue combinant biologie des poissons, statistiques avancées et droit maritime international.",
            "a_retenir": "Une profession rare et prestigieuse qui veille sur la santé des océans et la subsistance de millions de familles de pêcheurs."
        }
    },

    # -----------------------------------------------------------------------
    # 7. FORÊT, SYLVICULTURE, PAYSAGE & ESPACES NATURELS
    # -----------------------------------------------------------------------
    {
        "id": "ingenieur-forestier",
        "slug": "ingenieur-forestier",
        "title": "Ingénieur Forestier / Gestionnaire d'Écosystèmes Forestiers",
        "aliases": ["Cadre technique forestier", "Expert forestier", "Ingénieure des forêts"],
        "icon": "🌲",
        "image": "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Forêt, Sylviculture, Paysage & Espaces Naturels",
        "domainId": "foret-espaces-naturels",
        "subdomain": "Gestion forestière & sylviculture",
        "sourceOnisep": True,
        "sourceStudyrama": True,
        "isEmerging": False,
        "level": "Bac +5 (Diplôme d'Ingénieur Forestier - AgroParisTech / ESB ou Master Forêt)",
        "salary": "🇫🇷 France : 2 800 - 3 500 € brut/mois débutant (~33 600 - 42 000 €/an, Source : Onisep / ONF) • 🇸🇳 Sénégal : 450 000 - 1 500 000 FCFA / mois (Source : Eaux et Forêts, Projets Grande Muraille Verte)",
        "simpleDefinition": "L'ingénieur forestier planifie et supervise la gestion durable des massifs forestiers : régénération des arbres, martelage, récolte raisonnée du bois, préservation de la biodiversité et adaptation au réchauffement climatique.",
        "shortDescription": "Fiche documentée par Onisep et Studyrama, ce grand gestionnaire du temps long pilote les forêts publiques ou privées sur des cycles de 50 à 100 ans.",
        "longDescription": "Véritable stratège des massifs boisés, l'ingénieur forestier concilie trois fonctions majeures : économique (fourniture de bois d'œuvre pour la construction et l'énergie), écologique (sanctuaire de biodiversité, captage de carbone et protection des sols contre l'érosion) et sociale (accueil du public et prévention des feux). Selon l'Onisep, il réalise des inventaires dendrométriques par télédétection satellite et LiDAR, programme les coupes d'éclaircie et introduit de nouvelles essences adaptées aux sécheresses.",
        "mainObjective": "Assurer la pérennité et la santé des forêts tout en valorisant durablement la ressource en bois.",
        "companyRole": "Garant de l'aménagement durable des massifs et de la résilience climatique du patrimoine forestier.",
        "workEnvironment": ["🌲 Massifs forestiers étendus et pistes forestières", "🏢 Office National des Forêts (ONF), coopératives forestières et cabinets d'experts", "💻 Systèmes d'Information Géographique (SIG) et données LiDAR"],
        "missions": [
            "Élaborer les documents de gestion durable (Plans Simples de Gestion, Aménagements forestiers)",
            "Programmer les travaux de régénération naturelle, de plantation et de dégagement des jeunes semis",
            "Organiser les ventes de bois sur pied ou bord de route auprès des scieries et exploitants",
            "Concevoir les plans de défense des forêts contre les incendies (DFCI) et de gestion cynégétique (gibier)",
            "Diagnostiquer le dépérissement des peuplements sous l'effet du stress hydrique et des scolytes"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Tournée de martelage en forêt", "desc": "Marquage au marteau forestier des chênes arrivés à maturité et des arbres d'avenir à conserver."},
            {"time": "11:00", "title": "Contrôle d'un chantier d'abattage mécanisé", "desc": "Vérification du respect des sols et du zonage écologique par l'abatteuse-ébrancheuse."},
            {"time": "14:00", "title": "Cartographie SIG des peuplements dépérissants", "desc": "Analyse d'images satellites infrarouges pour cartographier les attaques de ravageurs sur épicéas."},
            {"time": "16:30", "title": "Réunion avec les élus locaux et associations", "desc": "Présentation du plan de reboisement diversifié avec des essences résistantes au climat futur."}
        ],
        "skills": {
            "technical": ["Dendrométrie et inventaire forestier", "Sylviculture comparée des feuillus et résineux", "Pédologie forestière et écologie des stations", "Économie de la filière bois et estimation de valeur", "Cartographie SIG avancée et exploitation de données LiDAR"],
            "human": ["Vision prospective à long terme (échelles séculaires)", "Pédagogie et fermeté dans l'arbitrage des usages", "Grande autonomie et sens du terrain", "Aisance de négociation commerciale"],
            "tools": ["Compas forestiers et dendromètres optiques (Vertex)", "Systèmes SIG (QGIS / ArcGIS)", "Données de télédétection satellitaire et drones", "Marteau forestier traditionnel et bombes de traçage"],
            "analytical": ["Calcul de la possibilité annuelle de coupe (volume durable prélevable)", "Évaluation de la séquestration de carbone par hectare de forêt"]
        },
        "specializations": ["Gestion de forêts publiques domaniales et communales (ONF)", "Expertise forestière privée et transactions de domaines", "Défense des forêts contre les incendies (DFCI)", "Forêt tropicale humide et agroforesterie"],
        "studies": {
            "pathway": [
                {"step": "Bac +2", "title": "Prépa BCPST ou BTSA Gestion Forestière", "desc": "Excellentes bases biologiques et immersion en milieu forestier."},
                {"step": "Bac +5", "title": "Diplôme d'Ingénieur Forestier (AgroParisTech Nancy - ex-ENGREF) ou École Supérieure du Bois (ESB)", "desc": "La référence nationale et internationale en gestion forestière."}
            ],
            "schools": [
                {"name": "AgroParisTech - Campus de Nancy (ex-ENGREF) — France", "country": "France", "scope": "International"},
                {"name": "École Supérieure du Bois (ESB Nantes) — France", "country": "France", "scope": "France"},
                {"name": "ENSA Thiès / Direction des Eaux, Forêts et Chasses — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Agrément d'Expert Forestier (CNIEFEB)", "Brevet de spécialiste SIG forestier"],
            "schoolSubjects": ["Dendrologie", "Sylviculture", "Écologie végétale", "Économie forestière"]
        },
        "career": {
            "sectors": ["Office National des Forêts (ONF)", "Coopératives forestières et gestionnaires privés", "Cabinets d'experts forestiers indépendants", "Centres Nationaux de la Propriété Forestière (CNPF)"],
            "employerTypes": ["Établissements publics gestionnaires", "Coopératives de propriétaires sylvicoles", "Grandes compagnies forestières internationales"],
            "evolution": "Responsable de triage forestier ➔ Responsable d'unité territoriale forestière ➔ Directeur d'agence régionale ONF ou associé en cabinet d'expertise",
            "pros": "Cadre de travail grandiose en pleine nature, métier noble dédié à la transmission aux générations futures, rôle central dans le stockage de carbone.",
            "cons": "Constat douloureux des dépérissements liés aux sécheresses brutales, conflits fréquents d'usage entre promeneurs, chasseurs et exploitants."
        },
        "gettingStarted": {
            "beginnerProject": "Reconnaître et inventorier les 15 essences d'arbres principales d'un massif forestier proche de chez soi.",
            "intermediateProject": "Mesurer la hauteur et le diamètre à 1,30 m de 50 arbres pour estimer le cubage sur pied à l'aide d'un tarif de cubage.",
            "advancedProject": "Rédiger un plan de gestion sur 20 ans pour une parcelle boisée de 30 hectares intégrant le renouvellement par îlots d'avenir.",
            "portfolioIdeas": ["Carte SIG de typologie des stations forestières", "Dossier d'expertise financière et sylvicole d'un massif"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "Le traitement par intelligence artificielle des scans LiDAR aéroportés permet d'inventorier chaque arbre individuel (hauteur, volume de houppier, santé) sur des milliers d'hectares en quelques secondes.",
            "automatedTasks": ["Segmentation et comptage automatisé des cimes d'arbres par LiDAR", "Détection précoce des foyers d'incendie par réseaux de caméras thermiques"],
            "emergingSkills": ["Analyse de données géospatiales 3D", "Modélisation des trajectoires bioclimatiques des essences"],
            "humanEdge": "Le coup d'œil du forestier sur l'écorce et les bourgeons pour juger de la vigueur future d'un arbre d'élite."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la gestion forestière (Direction des Eaux et Forêts) est au cœur de la lutte contre la désertification et de la préservation des forêts classées de Casamance, du Niokolo Koba et du projet titanesque de la Grande Muraille Verte.",
            "localSectors": ["Direction Générale des Eaux, Forêts et Chasses du Sénégal", "Agence Sénégalaise de la Reforestation et de la Grande Muraille Verte (ASERGMV)", "Parcs nationaux et réserves de biosphère"],
            "remoteWork": "Études cartographiques possibles à distance, présence sur le terrain incontournable.",
            "entrepreneurship": "Création d'une entreprise de reboisement écologique et de valorisation des produits forestiers non ligneux (gomme arabique, karité, baobab)."
        },
        "relatedJobSlugs": ["technicien-forestier", "pepinieriste", "ingenieur-agroecologie", "jardinier-paysagiste"],
        "connectedFamilies": ["environnement-climat", "recherche-sciences", "industrie-ingenierie"],
        "resources": [{"type": "article", "title": "Fiche Métier Ingénieur Forestier Onisep", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/ingenieur-forestier-ingenieure-forestiere", "source": "Onisep"}],
        "sources": ["Onisep", "Studyrama", "ONF", "AgroParisTech"],
        "interests": ["nature-environnement", "explorer-decouvrir"],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Selon l'Onisep et l'ONF, les forêts françaises absorbent à elles seules environ 15% des émissions annuelles de gaz à effet de serre du pays grâce à la photosynthèse.",
            "pourquoi": "Le bois récolté et utilisé dans la charpente ou le meuble piège ce carbone pendant des siècles, tandis que les jeunes arbres replantés continuent de capter du CO2.",
            "a_retenir": "Un bâtisseur d'écosystèmes dont chaque geste d'aujourd'hui façonnera le paysage et le climat dans un siècle."
        }
    },
    {
        "id": "technicien-forestier",
        "slug": "technicien-forestier",
        "title": "Technicien Forestier / Garde Forestier",
        "aliases": ["Technicienne forestière", "Garde forestier", "Agent technique de l'ONF"],
        "icon": "🥾",
        "image": "https://images.unsplash.com/photo-1511497584788-87676104235f?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Forêt, Sylviculture, Paysage & Espaces Naturels",
        "domainId": "foret-espaces-naturels",
        "subdomain": "Gestion forestière & sylviculture",
        "sourceOnisep": True,
        "sourceStudyrama": True,
        "isEmerging": False,
        "level": "Bac Pro Forêt à Bac +2 (BTSA Gestion Forestière)",
        "salary": "🇫🇷 France : 1 800 - 2 500 € brut/mois débutant (~21 600 - 30 000 €/an, Source : Onisep / Studyrama) • 🇸🇳 Sénégal : 220 000 - 750 000 FCFA / mois (Source : Service des Eaux et Forêts)",
        "simpleDefinition": "Le technicien forestier applique sur le terrain les plans de gestion des forêts : il marque les arbres à couper (martelage), surveille les chantiers d'exploitation, prévient les infractions et entretient les chemins et sentiers.",
        "shortDescription": "Fiche documentée par Onisep et Studyrama, c'est l'homme de terrain par excellence, protecteur quotidien du patrimoine boisé et premier observateur de la faune et de la flore.",
        "longDescription": "Sous la responsabilité de l'ingénieur forestier, le technicien passe la majeure partie de son temps au cœur des bois. Il réalise le piquetage des parcelles, surveille la santé des arbres, encadre les bûcherons et débardeurs, veille à la propreté des cours d'eau et sensibilise promeneurs et chasseurs au respect des règles environnementales.",
        "mainObjective": "Assurer la surveillance quotidienne, la bonne exécution des travaux sylvicoles et la protection physique du massif forestier.",
        "companyRole": "Opérationnel de terrain garant de la police de l'environnement et de la sécurité des espaces boisés.",
        "workEnvironment": ["🌲 Vie en plein air par tous les temps dans les massifs forestiers", "🚙 Véhicule tout-terrain (4x4) équipé de matériel de mesure et secours", "🤝 Contacts réguliers avec usagers de la forêt, scieurs et chasseurs"],
        "missions": [
            "Participer au martelage des coupes de bois et mesurer les billes abattues au bord de route",
            "Superviser les chantiers de débroussaillement, de plantation et de pose de protections contre le gibier",
            "Surveiller les départs de feux de forêt en période estivale et guider les secours",
            "Constater et verbaliser les infractions environnementales (dépôts sauvages, circulation illégale de quads)",
            "Sensibiliser le public scolaire et les promeneurs à la fragilité de la biodiversité forestière"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Cubage des grumes bord de route", "desc": "Mesure au compas et mètre ruban de 80 troncs d'arbres prêts à être enlevés par les grumiers."},
            {"time": "10:30", "title": "Contrôle d'un chantier de reboisement", "desc": "Vérification de la qualité de mise en terre de 2 000 jeunes plants de cèdres de l'Atlas."},
            {"time": "14:00", "title": "Tournée de surveillance et police de la nature", "desc": "Contrôle des accès coupe-feu et verbalisation d'un véhicule stationné sur une zone protégée."},
            {"time": "16:30", "title": "Rapport d'activité sur tablette de terrain", "desc": "Saisie des données de cubage et transmission au gestionnaire forestier."}
        ],
        "skills": {
            "technical": ["Reconnaissance des essences forestières et stations", "Techniques de cubage des bois sur pied et abattus", "Utilisation du compas, relascope et GPS de randonnée", "Réglementation forestière et police de l'environnement", "Sécurité des chantiers d'abattage et premiers secours"],
            "human": ["Excellente condition physique et goût de la solitude en nature", "Sens de l'autorité et diplomatie", "Sens aigu de l'orientation en milieu isolé", "Polyvalence et débrouillardise pratique"],
            "tools": ["Compas forestier et ruban forestier à rembobinage automatique", "Marteau forestier numéroté d'État", "Tablette durcie étanche avec SIG embarqué", "Matériel de premiers secours et tronçonneuse de dégagement"],
            "analytical": ["Calcul rapide de volumes de bois (formule d'Huber)", "Relevé des taux de reprise des plantations"]
        },
        "specializations": ["Agent patrimonial ONF (forêts publiques)", "Technicien en coopérative forestière privée", "Technicien cynégétique et faune sauvage", "Garde gestionnaire d'espaces naturels et réserves"],
        "studies": {
            "pathway": [
                {"step": "Bac Pro", "title": "Bac Pro Forêt", "desc": "Bases pratiques de bûcheronnage et de sylviculture."},
                {"step": "Bac +2", "title": "BTSA Gestion Forestière", "desc": "Diplôme indispensable pour accéder aux postes de technicien à l'ONF ou en coopérative."}
            ],
            "schools": [
                {"name": "Lycées agricoles et forestiers (Meymac, Crogny, Bazas, Javols) — France", "country": "France", "scope": "France"},
                {"name": "Centre National de Formation des Techniciens des Eaux et Forêts (CNFTEF Djibélor) — Ziguinchor, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Assermentation police de la chasse et de l'environnement", "Permis B et permis remorque (BE)"],
            "schoolSubjects": ["Sylviculture", "Dendrologie", "Droit forestier", "Topographie"]
        },
        "career": {
            "sectors": ["Office National des Forêts (ONF)", "Coopératives et groupements forestiers privés", "Parcs naturels régionaux et réserves naturelles", "Entreprises d'exploitation forestière"],
            "employerTypes": ["Établissements publics", "Organismes sylvicoles privés", "Collectivités territoriales"],
            "evolution": "Technicien de terrain ➔ Chef d'équipe forestière ➔ Responsable d'unité de gestion ➔ Ingénieur forestier par promotion interne",
            "pros": "Vie quotidienne au cœur des plus beaux paysages forestiers, grande liberté d'action sur le terrain, utilité écologique directe.",
            "cons": "Travail solitaire par pluie, neige ou canicule, face-à-face parfois tendus lors du contrôle d'infractions."
        },
        "gettingStarted": {
            "beginnerProject": "Effectuer une course d'orientation en forêt en se repérant exclusivement à la carte IGN et à la boussole.",
            "intermediateProject": "Cuber 20 grumes de bois abattues et calculer leur volume net en mètres cubes.",
            "advancedProject": "Réaliser le diagnostic de reprise d'une plantation de jeunes chênes avec comptage des plants morts et identification des causes.",
            "portfolioIdeas": ["Fiche de cubage terrain normée", "Plan d'entretien d'une piste DFCI"]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "Si les tablettes GPS et les alertes satellites facilitent le guidage, l'intervention physique de terrain pour mesurer et surveiller reste irremplaçable.",
            "automatedTasks": ["Guidage GPS haute précision sur les parcelles", "Remontée d'alertes dépérissement par smartphone"],
            "emergingSkills": ["Utilisation de mini-drones légers pour la surveillance locale de cimes", "Saisie nomade sur SIG tactile"],
            "humanEdge": "La présence physique dissuasive et le regard aiguisé au ras du sol pour déceler une trace de gibier ou un départ d'incendie."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les techniciens et sous-officiers des Eaux et Forêts formés à Djibélor (Casamance) sont paramilitaires et luttent en première ligne contre la coupe clandestine de bois de vène précieux et les feux de brousse ravageurs.",
            "localSectors": ["Postes de contrôle forestier de Casamance et Tambacounda", "Zones de pare-feux du Ferlo", "Parcs du Niokolo Koba et delta du Saloum"],
            "remoteWork": "Totalement exclu, présence sur le terrain 100%.",
            "entrepreneurship": "Création d'une entreprise privée de débroussaillement et de pose de pare-feux pour sécuriser les vergers et domaines privés."
        },
        "relatedJobSlugs": ["ingenieur-forestier", "elagueur-grimpeur", "pepinieriste", "jardinier-paysagiste"],
        "connectedFamilies": ["environnement-climat", "securite-defense", "tourisme-loisirs"],
        "resources": [{"type": "article", "title": "Fiche Métier Technicien Forestier Studyrama", "url": "https://www.studyrama.com/formations/fiches-metiers/agriculture/technicien-forestier-91757", "source": "Studyrama"}],
        "sources": ["Studyrama", "Onisep", "ONF"],
        "interests": ["nature-environnement", "explorer-decouvrir"],
        "saviezVous": {
            "statut": "metier_stable",
            "fait": "Selon Studyrama, le métier de technicien forestier est un des rares métiers où l'on travaille presque à 90% du temps en extérieur au contact direct des éléments naturels.",
            "pourquoi": "La forêt est un milieu vivant complexe qu'aucune caméra ou capteur à distance ne peut comprendre aussi finement que le pas d'un garde forestier.",
            "a_retenir": "La vigie indispensable de nos massifs pour protéger les poumons verts de notre terre."
        }
    },
    {
        "id": "jardinier-paysagiste",
        "slug": "jardinier-paysagiste",
        "title": "Jardinier-Paysagiste / Ouvrier du Paysage",
        "aliases": ["Paysagiste", "Ouvrier paysagiste", "Aménageur d'espaces verts", "Jardinière-paysagiste"],
        "icon": "🏡",
        "image": "https://images.unsplash.com/photo-1558904541-efa8c4a08931?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Forêt, Sylviculture, Paysage & Espaces Naturels",
        "domainId": "foret-espaces-naturels",
        "subdomain": "Aménagement paysager & espaces verts",
        "sourceOnisep": True,
        "sourceStudyrama": True,
        "isEmerging": False,
        "level": "CAP Agricole Jardinier Paysagiste à Bac +2 (BTSA Aménagements Paysagers)",
        "salary": "🇫🇷 France : 1 800 - 2 600 € brut/mois débutant (~21 600 - 31 200 €/an, Source : Onisep / Studyrama) • 🇸🇳 Sénégal : 180 000 - 700 000 FCFA / mois (Source : Entreprises d'espaces verts, résidences)",
        "simpleDefinition": "Le jardinier-paysagiste crée, aménage et entretient les jardins privés, parcs publics, terrasses végétalisées et terrains de sport : plantations, engazonnement, maçonnerie paysagère et taille soignée.",
        "shortDescription": "Fiche documentée par Onisep et Studyrama, ce sculpteur de la nature embellit notre cadre de vie urbain et rural en associant végétal minéral et eau.",
        "longDescription": "Véritable artisan du cadre de vie, le jardinier-paysagiste prépare les sols, pose les gazons en rouleau, plante arbres, massifs arbustifs et fleurs vivaces. En création, il manie la mini-pelle, pose des dallages, des clôtures et installe des réseaux d'arrosage automatique goutte-à-goutte. En entretien, il tond, taille les haies selon les formes souhaitées et prend soin de la santé des végétaux sans produits chimiques.",
        "mainObjective": "Sublimer les espaces verts et créer des îlots de fraîcheur harmonieux et durables pour le bien-être des usagers.",
        "companyRole": "Artisan de la beauté végétale et du confort bioclimatique dans les villes et jardins privés.",
        "workEnvironment": ["🌳 Parcs urbains, jardins de particuliers, résidences et toitures végétalisées", "🚜 Mini-pelles, motoculteurs, tondeuses autoportées et taille-haies", "🌦️ Travail en extérieur par tous les temps au contact direct de la terre"],
        "missions": [
            "Préparer les terrains (terrassement léger, nivellement, apport d'amendements organiques)",
            "Réaliser des plantations d'arbres, arbustes et vivaces en respectant les distances réglementaires",
            "Construire des murets en pierre sèche, poser des bordures, dalles de terrasse et allées en graviers",
            "Installer et programmer des systèmes d'arrosage automatique enterré et de goutte-à-goutte",
            "Assurer l'entretien saisonnier (taille raisonnée des arbustes, tonte mulching, désherbage alternatif)"
        ],
        "typicalDay": [
            {"time": "07:30", "title": "Chargement du fourgon à l'atelier", "desc": "Chargement des végétaux reçus de la pépinière, des rouleaux de gazon et de l'outillage à batterie."},
            {"time": "08:30", "title": "Chantier de plantation chez un client", "desc": "Fouilles de fosses de plantation avec la mini-pelle, pose de tuteurs et paillage en copeaux de bois."},
            {"time": "13:30", "title": "Pose de bordures et réseau d'arrosage", "desc": "Tranchée légère pour tuyaux polyéthylène et raccordement des tuyères escamotables."},
            {"time": "16:30", "title": "Nettoyage impeccable du chantier", "desc": "Soufflage des allées, évacuation des déchets verts vers la plateforme de compostage."}
        ],
        "skills": {
            "technical": ["Connaissance des végétaux d'ornement et de leurs exigences de sol", "Techniques de taille raisonnée et d'élagage doux", "Petite maçonnerie paysagère (murets, pavés, dallages)", "Installation de réseaux hydrauliques d'arrosage automatique", "Conduite d'engins de chantier légers (mini-pelle, chargeur)"],
            "human": ["Sens artistique et goût de l'harmonie des volumes et couleurs", "Endurance physique et dextérité manuelle", "Sens du service et contact agréable avec les clients", "Esprit d'équipe sur chantier"],
            "tools": ["Mini-pelles et compacteurs à plaque vibrante", "Taille-haies et tronçonneuses d'élagage légères à batterie", "Tondeuses autoportées et débroussailleuses thermiques", "Outils à main traditionnels (bêches, râteaux, cisailles)"],
            "analytical": ["Calcul des cubages de terre et graviers", "Lecture de plans paysagers à l'échelle"]
        },
        "specializations": ["Création paysagère et maçonnerie de jardin", "Entretien d'espaces verts haut de gamme", "Végétalisation de toitures et murs végétaux", "Intendance de terrains de sport et golfs"],
        "studies": {
            "pathway": [
                {"step": "CAP / Bac Pro", "title": "CAP Agricole Jardinier Paysagiste ou Bac Pro Aménagements Paysagers", "desc": "Apprentissage des bases du métier, souvent en alternance en entreprise."},
                {"step": "Bac +2", "title": "BTSA Aménagements Paysagers", "desc": "Formation de référence pour encadrer des équipes de chantier ou créer son entreprise."},
                {"step": "Bac +3", "title": "Licence Pro Gestion des Espaces Végétaux Urbains", "desc": "Spécialisation dans la transition écologique et la renaturation des métropoles."}
            ],
            "schools": [
                {"name": "Lycées horticoles et CFA du paysage (Angers, Versailles, Tecomah) — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle Horticole (CFPH Cambérène) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["CACES engins de chantier catégorie A (mini-pelle)", "Certiphyto Opérateur"],
            "schoolSubjects": ["Reconnaissance des végétaux", "Maçonnerie paysagère", "Topographie", "Agronomie"]
        },
        "career": {
            "sectors": ["Entreprises privées du paysage (membres de l'UNEP)", "Services espaces verts des mairies et collectivités", "Sociétés de gestion de terrains de sport et golfs", "Hôtels et complexes touristiques"],
            "employerTypes": ["PME paysagistes", "Grandes entreprises nationales du paysage", "Services techniques municipaux"],
            "evolution": "Ouvrier paysagiste ➔ Chef d'équipe paysagiste ➔ Conducteur de travaux paysagers ➔ Créateur de son entreprise du paysage",
            "pros": "Plaisir immédiat de transformer un terrain vague en magnifique jardin verdoyant, travail en plein air, forte demande de recrutement constante.",
            "cons": "Pénibilité physique (port de sacs de terreau, dalles lourdes), travail sous la pluie ou forte chaleur, amplitudes horaires saisonnières au printemps."
        },
        "gettingStarted": {
            "beginnerProject": "Créer un massif de plantes vivaces résistantes au soleil en respectant les étagements de hauteur (tapissantes, moyennes, hautes).",
            "intermediateProject": "Poser 50 mètres carrés de gazon en rouleau avec préparation soignée du lit de semence et premier arrosage copieux.",
            "advancedProject": "Concevoir et réaliser un plan d'arrosage automatique complet pour un jardin de 300 m² avec calcul de débit et pression.",
            "portfolioIdeas": ["Photos avant/après de chantiers de jardins métamorphosés", "Plan d'aménagement côté avec palette végétale"]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "Si les robots-tondeuses autonomes tondent les grandes pelouses, l'agencement esthétique d'un jardin et la plantation restent l'art de la main humaine.",
            "automatedTasks": ["Tonte autonome par robots guidés par satellite GPS RTK", "Modélisation 3D de jardins par logiciels assistés"],
            "emergingSkills": ["Conception de jardins xérophiles économes en eau", "Installation de systèmes d'arrosage connectés aux prévisions météo"],
            "humanEdge": "La sensibilité artistique pour marier les feuillages et la dextérité manuelle pour épouser les formes du terrain."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la création paysagère est en forte expansion dans les villas des Almadies, les stations balnéaires de Saly Portudal et les nouveaux quartiers de Diamniadio où la demande en jardins tropicaux luxuriants (bougainvilliers, palmiers, gazon américain) est forte.",
            "localSectors": ["Entreprises d'espaces verts de Dakar et de la Petite Côte", "Hôtels et resorts balnéaires de Saly et Cap Skirring", "Pépinières paysagères le long de la VDN"],
            "remoteWork": "100% sur les chantiers.",
            "entrepreneurship": "Création d'une entreprise d'aménagement et entretien d'espaces verts éco-conçus avec arrosage solaire et plantes locales résistantes à la sécheresse."
        },
        "relatedJobSlugs": ["pepinieriste", "horticulteur", "elagueur-grimpeur", "ingenieur-forestier"],
        "connectedFamilies": ["artisanat-metiers-art", "environnement-climat", "architecture-urbanisme"],
        "resources": [{"type": "article", "title": "Fiche Métier Jardinier Paysagiste Onisep", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/jardinier-jardiniere-paysagiste", "source": "Onisep"}],
        "sources": ["Onisep", "Studyrama", "UNEP (Union Nationale des Entreprises du Paysage)"],
        "interests": ["construire-fabriquer", "nature-environnement"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon l'Union Nationale des Entreprises du Paysage (UNEP) et l'Onisep, le secteur du paysage crée chaque année des milliers d'emplois nets non délocalisables en France.",
            "pourquoi": "L'engouement des citoyens pour la nature en ville et la renaturation des centres urbains face aux canicules stimule une demande sans précédent.",
            "a_retenir": "Un métier concret et gratifiant qui transforme chaque jour nos lieux de vie en havres de fraîcheur et de sérénité."
        }
    },
    {
        "id": "elagueur-grimpeur",
        "slug": "elagueur-grimpeur",
        "title": "Élagueur-Grimpeur / Arboriste-Grimpeur",
        "aliases": ["Arboriste grimpeur", "Élagueuse", "Bûcheron d'arbres remarquables", "Grimpeur élagueur"],
        "icon": "🧗",
        "image": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Forêt, Sylviculture, Paysage & Espaces Naturels",
        "domainId": "foret-espaces-naturels",
        "subdomain": "Soins aux arbres & élagage",
        "sourceOnisep": False,
        "sourceStudyrama": True,
        "isEmerging": False,
        "level": "Certificat de Spécialisation (CS Arboriste-Grimpeur) accessible après CAP/Bac Pro",
        "salary": "🇫🇷 France : 2 000 - 3 200 € net/mois selon technicité et risques pris (Source : Studyrama / Fiches Élagage) • 🇸🇳 Sénégal : 250 000 - 950 000 FCFA / mois (Source : Entreprises d'espaces verts, Senelec)",
        "simpleDefinition": "L'élagueur-grimpeur grimpe à la cime des grands arbres pour couper les branches mortes ou dangereuses, soigner les blessures du bois ou démonter méthodiquement un arbre menaçant les habitations.",
        "shortDescription": "Fiche documentée par Studyrama, cet acrobate de la canopée allie agilité physique exceptionnelle, sang-froid et connaissance intime de la physiologie des arbres.",
        "longDescription": "Loin du simple bûcheronnage au sol, l'arboriste-grimpeur évolue dans les houppiers à 15, 20 ou 30 mètres de hauteur à l'aide de cordes de rappel, harnais et griffes. Il pratique la 'taille douce' en respectant l'architecture naturelle de l'arbre et les angles d'insertion des branches pour favoriser une cicatrisation saine. Lorsque l'arbre doit être abattu dans un espace clos (proximité de toitures ou lignes électriques), il procède au démontage avec rétention par cordages pour descendre les troncs en douceur.",
        "mainObjective": "Maintenir les arbres en bonne santé et sécuriser les personnes et biens tout en respectant l'intégrité biologique du végétal.",
        "companyRole": "Spécialiste de haute voltige garant de la sécurité aérienne et de la pérennité des arbres d'alignement et de parc.",
        "workEnvironment": ["🌳 Cimes des grands arbres en hauteur par tous les temps (sauf grand vent)", "🦺 Équipements de Protection Individuelle (EPI) complets anti-chute et anti-coupure", "🚜 Broyeurs de branches et nacelles télescopiques en soutien au sol"],
        "missions": [
            "Inspecter l'état mécanique et sanitaire de l'arbre avant de grimper (détection de champignons lignivores)",
            "Installer la corde d'accès dans la fourche maîtresse à l'aide d'un sac de lancer",
            "Évoluer dans la couronne de l'arbre avec longes armées et harnais de maintien",
            "Exécuter des coupes précises au ras du collet de branche à l'aide d'une tronçonneuse d'élagage légère",
            "Mettre en place des systèmes de haubanage dynamique pour sécuriser une charpentière fendue sans la couper"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Briefing sécurité et inspection au pied de l'arbre", "desc": "Sondage de l'écorce au maillet pour repérer un pourrissement interne et tir au sac pour installer la corde de rappel."},
            {"time": "09:00", "title": "Ascension et taille sanitaire d'un grand platane", "desc": "Montée en technique SRT et suppression des branches sèches menaçant une rue passante."},
            {"time": "14:00", "title": "Démontage délicat d'un pin en milieu contraint", "desc": "Coupe en tronçons billot par billot avec rétention sur cabestan pour ne pas toucher la véranda située sous l'arbre."},
            {"time": "16:30", "title": "Broyage des rémanents et affûtage", "desc": "Passage des branches dans le broyeur de branches et affûtage des chaînes de tronçonneuse."},
        ],
        "skills": {
            "technical": ["Physiologie arboricole et principes de cicatrisation (mécanisme CODIT)", "Techniques d'accès sur corde (SRT/DDRT) et nœuds autobloquants", "Techniques de rétention lourde de branches au cabestan", "Maniement des tronçonneuses d'élagage en suspension", "Diagnostic de dangerosité d'un arbre (méthode VTA)"],
            "human": ["Sang-froid absolu et maîtrise du vertige", "Forme physique et souplesse comparables à un athlète d'escalade", "Vigilance sans faille pour la sécurité de l'homme de pied", "Esprit de solidarité en binôme"],
            "tools": ["Cordes d'élagage homologuées et harnais cuissard complet", "Tronçonneuses d'élagage 1 main légères et scies japonaises", "Griffes de démontage pour abattage sans avenir", "Broyeurs de végétaux lourds montés sur remorque"],
            "analytical": ["Estimation du poids des billes avant coupe", "Calcul des forces de choc sur le point d'ancrage en cas de chute"]
        },
        "specializations": ["Taille architecturée et raisonnée des arbres d'ornement", "Démontage complexe d'arbres dangereux par rétention", "Haubanage dynamique de branches maîtresses", "Diagnostic phytosanitaire d'arbres remarquables"],
        "studies": {
            "pathway": [
                {"step": "CAP / Bac Pro", "title": "Bac Pro Aménagements Paysagers ou Forêt", "desc": "Apprentissage des bases du travail du végétal et de la tronçonneuse."},
                {"step": "Certificat Spécialisé", "title": "Certificat de Spécialisation (CS) Arboriste-Grimpeur", "desc": "Formation obligatoire d'un an pour apprendre la grimpe, la sécurité et la physiologie de l'arbre."}
            ],
            "schools": [
                {"name": "Centres de formation spécialisés en élagage (Saint-Germain-en-Laye, Châteaudun, Romanèche) — France", "country": "France", "scope": "France"},
                {"name": "Écoles professionnelles d'arboriculture et espaces verts (Sénégal)", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["CS Arboriste-Grimpeur (diplôme d'État)", "Certificat SST (Sauveteur Secouriste du Travail option Grimpeur)"],
            "schoolSubjects": ["Biologie de l'arbre", "Techniques de grimpe", "Mécanique des tronçonneuses", "Sécurité du travail en hauteur"]
        },
        "career": {
            "sectors": ["Entreprises spécialisées d'élagage et soins aux arbres", "Grandes entreprises du paysage", "Services espaces verts des métropoles", "Compagnies d'infrastructures électriques et ferroviaires (SNCF, Enedis, Senelec)"],
            "employerTypes": ["PME artisanales d'élagage", "Entreprises de travaux publics d'élagage linéaire", "Collectivités locales"],
            "evolution": "Homme de pied (assistant au sol) ➔ Élagueur-grimpeur autonome ➔ Chef d'équipe d'élagage ➔ Diagnosticien arboricole / Créateur d'entreprise spécialisée",
            "pros": "Sensations fortes exaltantes au sommet des arbres, communion unique avec les géants végétaux, excellente rémunération pour les professionnels habiles.",
            "cons": "Métier à haut risque physique où la moindre faute d'inattention peut être fatale, usure corporelle prématurée nécessitant une reconversion vers 40-45 ans."
        },
        "gettingStarted": {
            "beginnerProject": "S'entraîner aux nœuds essentiels d'élagage (nœud de chaise, prusik, cabestan, demi-cabestan) à la maison.",
            "intermediateProject": "Participer comme homme de pied à un chantier d'élagage pour apprendre à guider les cordes de rétention.",
            "advancedProject": "Réaliser l'évaluation sanitaire complète d'un vieux chêne en identifiant les cavités, fissures et champignons lignivores.",
            "portfolioIdeas": ["Dossier photographique de taille douce respectueuse", "Fiche de sécurité de chantier d'abattage par rétention"]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "Aucun robot ne peut se balancer sur une branche à 25 mètres du sol pour exécuter une coupe chirurgicale : le geste reste purement humain.",
            "automatedTasks": ["Diagnostic acoustique par tomographe à ultrasons", "Repérage des arbres dangereux le long des voies ferrées par drone"],
            "emergingSkills": ["Échographie interne du tronc pour déceler les cavités invisibles", "Utilisation de tronçonneuses d'élagage à batterie haute puissance"],
            "humanEdge": "L'agilité physique, le courage et le ressenti immédiat de l'équilibre au milieu des branches agitées par le vent."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'élagage des grands arbres urbains (fromagers, manguiers géants, eucalyptus, rôniers) est vital avant la saison des pluies (hivernage) pour éviter que les tornades de vent ne fassent chuter des branches sur les toitures ou les câbles électriques de la Senelec.",
            "localSectors": ["Services techniques des villes de Dakar, Rufisque et Saint-Louis", "Sous-traitants de débroussaillage et élagage de la Senelec", "Entretien de domaines privés et résidences diplomatiques"],
            "remoteWork": "Totalement exclu, 100% dans la canopée.",
            "entrepreneurship": "Création d'une entreprise d'élagage professionnel sécurisé avec matériel normé européen pour moderniser le secteur encore informel en Afrique de l'Ouest."
        },
        "relatedJobSlugs": ["jardinier-paysagiste", "technicien-forestier", "ingenieur-forestier", "pepinieriste"],
        "connectedFamilies": ["artisanat-metiers-art", "securite-defense", "environnement-climat"],
        "resources": [{"type": "article", "title": "Fiche Métier Élagueur Studyrama", "url": "https://www.studyrama.com/formations/fiches-metiers/agriculture/elagueur-91758", "source": "Studyrama"}],
        "sources": ["Studyrama", "Société Française d'Arboriculture (SFA)"],
        "interests": ["construire-fabriquer", "nature-environnement"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon Studyrama et la SFA, les entreprises d'élagage manquent cruellement de grimpeurs certifiés CS Arboriste-Grimpeur et proposent des embauches immédiates à des salaires très attractifs.",
            "pourquoi": "L'exigence physique et la dangerosité du métier imposent une formation d'élite que peu de candidats ont le courage de suivre.",
            "a_retenir": "Un métier d'adrénaline et de passion pour amoureux de nature intrépides qui veulent vivre au plus près de la cime des arbres."
        }
    },

    # -----------------------------------------------------------------------
    # 8. AGROALIMENTAIRE, TRANSFORMATION & QUALITÉ
    # -----------------------------------------------------------------------
    {
        "id": "ingenieur-agroalimentaire",
        "slug": "ingenieur-agroalimentaire",
        "title": "Ingénieur Agroalimentaire / R&D Alimentaire",
        "aliases": ["Ingénieur de production agroalimentaire", "Ingénieur R&D food", "Responsable process agroalimentaire"],
        "icon": "🍲",
        "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Agroalimentaire, Transformation & Qualité Sanitaire",
        "domainId": "agroalimentaire-transformation-qualite",
        "subdomain": "R&D & procédés agroalimentaires",
        "sourceOnisep": True,
        "sourceStudyrama": True,
        "isEmerging": False,
        "level": "Bac +5 (Diplôme d'Ingénieur en Agroalimentaire ou Master Génie des Procédés Alimentaires)",
        "salary": "🇫🇷 France : 2 900 - 3 600 € brut/mois débutant (~34 800 - 43 200 €/an, Source : Onisep / APEC) • 🇸🇳 Sénégal : 500 000 - 1 600 000 FCFA / mois (Source : Agro-industries de Dakar, Thiès, Saint-Louis)",
        "simpleDefinition": "L'ingénieur agroalimentaire conçoit de nouveaux produits alimentaires (recettes, textures, conservation saine) et optimise les lignes industrielles qui transforment les matières premières agricoles en aliments prêts à consommer.",
        "shortDescription": "Fiche documentée par Onisep et Studyrama, ce chef d'orchestre de nos assiettes réconcilie plaisir gustatif, nutrition saine, sécurité bactériologique et rentabilité industrielle.",
        "longDescription": "L'industrie agroalimentaire est le premier secteur industriel en nombre d'emplois en France. L'ingénieur agroalimentaire peut exercer en R&D (formuler un yaourt végétal innovant, réduire le sucre et le sel sans altérer le goût), en production (piloter une unité de pasteurisation ou de mise en boîte automatisée) ou en qualité. Il maîtrise la biochimie des aliments, le génie des procédés thermiques (stérilisation, atomisation, surgélation) et les exigences strictes d'hygiène.",
        "mainObjective": "Transformer des matières premières agricoles en aliments sains, savoureux, stables dans le temps et accessibles au plus grand nombre.",
        "companyRole": "Pilote de l'innovation produit et garant de la performance industrielle des usines alimentaires.",
        "workEnvironment": ["🏭 Lignes de production automatisées en environnement stérile (blouses, charlottes)", "🔬 Laboratoires R&D et cuisines expérimentales de formulation", "📊 Bureaux d'études pour l'analyse des coûts de revient et bilans matière"],
        "missions": [
            "Concevoir de nouvelles recettes alimentaires en optimisant profils nutritionnels et coûts",
            "Dimensionner et paramétrer les équipements industriels de cuisson, mélange, pasteurisation et conditionnement",
            "Mener des tests de vieillissement pour déterminer la Date Limite de Consommation (DLC)",
            "Organiser des panels d'évaluation sensorielle pour tester l'appétence des produits auprès des consommateurs",
            "Superviser les équipes de conducteurs de ligne et veiller au respect des cadences de production"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Point quotidien sur les lignes de fabrication", "desc": "Revue des rendements matière de la nuit et analyse d'un écart de viscosité sur la ligne de sauces."},
            {"time": "10:30", "title": "Atelier de formulation en laboratoire R&D", "desc": "Essais d'incorporation de farine de légumineuses locales pour enrichir en protéines une nouvelle gamme de biscuits."},
            {"time": "14:00", "title": "Séance d'analyse sensorielle à l'aveugle", "desc": "Animation d'un panel de 12 dégustateurs pour évaluer le croquant et la sucrosité de 4 prototypes."},
            {"time": "16:30", "title": "Optimisation des temps de nettoyage en place (NEP)", "desc": "Ajustement du protocole de désinfection automatisée pour réduire la consommation d'eau de l'usine."}
        ],
        "skills": {
            "technical": ["Biochimie alimentaire et microbiologie industrielle", "Génie des procédés alimentaires (transferts thermiques, séparation membranaire)", "Formulation et additifs alimentaires naturels", "Réglementation européenne de sécurité alimentaire et étiquetage INCO", "Lean manufacturing appliqué à l'agroalimentaire"],
            "human": ["Créativité culinaire doublée d'une rigueur scientifique sans faille", "Sens du leadership et management d'équipes d'opérateurs", "Capacité à résoudre rapidement des crises de production", "Excellente communication transversale"],
            "tools": ["Bioréacteurs et autoclaves pilotes de laboratoire", "Texturemètres et viscosimètres de précision", "Logiciels de formulation alimentaire (GeniFood)", "Supervision industrielle SCADA d'usine agroalimentaire"],
            "analytical": ["Calcul des bilans matière et rendements de transformation", "Analyses statistiques de cinétiques bactériennes"]
        },
        "specializations": ["Recherche & Développement (R&D) et innovation produits", "Direction d'usine et gestion de production industrielle", "Génie des emballages durables et éco-conception", "Ingénierie des boissons et liquides alimentaires"],
        "studies": {
            "pathway": [
                {"step": "Bac +2", "title": "Prépa BCPST ou BTS Bioqualité / BUT Génie Biologique", "desc": "Sciences fondamentales de la vie et biochimie."},
                {"step": "Bac +5", "title": "Diplôme d'Ingénieur en Agroalimentaire", "desc": "Grandes écoles d'ingénieurs spécialisées (AgroParisTech, Oniris Nantes, Agrosup Dijon, ENSAIA)."}
            ],
            "schools": [
                {"name": "Oniris Nantes (École Nationale Vétérinaire, Agroalimentaire et de l'Alimentation) — France", "country": "France", "scope": "International"},
                {"name": "AgroParisTech / L'Institut Agro Dijon — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique (ESP Dakar - Département Génie Chimique et Biologie Appliquée) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification Black Belt Lean Six Sigma en agroalimentaire", "Auditeur FSSC 22000"],
            "schoolSubjects": ["Microbiologie", "Chimie des aliments", "Génie des procédés", "Management de production"]
        },
        "career": {
            "sectors": ["Grandes multinationales de l'alimentation (Danone, Nestlé, Bonduelle)", "Coopératives agroalimentaires (Sodiaal, Agrial, Terrena)", "PME innovantes et startups de la FoodTech", "Instituts techniques agroalimentaires (ACTIA, CTCPA)"],
            "employerTypes": ["Industries agroalimentaires privées", "Groupes coopératifs de transformation", "Bureaux d'études de formulation"],
            "evolution": "Ingénieur R&D junior ➔ Chef de projet innovation ➔ Responsable de production d'usine ➔ Directeur d'usine agroalimentaire",
            "pros": "Secteur solide et non délocalisable car manger est un besoin vital, produits finis concrets visibles en rayons de supermarché, carrières internationales riches.",
            "cons": "Contraintes d'hygiène strictes et audits fréquents, pression sur les coûts de revient dans la grande distribution, travail parfois en environnement réfrigéré."
        },
        "gettingStarted": {
            "beginnerProject": "Relever les étiquettes de 10 produits ultra-transformés et identifier les substituts naturels pour éliminer les émulsifiants de synthèse.",
            "intermediateProject": "Mettre au point une recette maison de pâte à tartiner sans huile de palme et mesurer sa stabilité à la séparation d'huile sur 30 jours.",
            "advancedProject": "Calculer le barème de stérilisation (valeur stérilisatrice F0) nécessaire pour détruire les spores de Clostridium botulinum dans une conserve de légumes.",
            "portfolioIdeas": ["Dossier de conception d'un nouvel aliment complet", "Schéma de process industriel d'une laiterie automatisée"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA générative prédit les combinaisons moléculaires d'ingrédients pour reproduire des arômes naturels et optimise la maintenance prédictive des lignes de mise en bouteille.",
            "automatedTasks": ["Optimisation des plannings de production selon les prévisions de vente", "Inspection par caméras IA de la conformité visuelle des packagings"],
            "emergingSkills": ["Formulation assistée par intelligence artificielle", "Développement d'aliments à base de protéines alternatives (algues, insectes, précision fermentaire)"],
            "humanEdge": "La créativité du chef cuisinier et le jugement émotionnel du plaisir en bouche."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la transformation locale des fruits et céréales (mangues séchées, jus de bissap et bouye, couscous de mil précuit thiakry, concentré de tomate de la vallée) est le levier numéro un de création d'emplois industriels, soutenu par l'Institut de Technologie Alimentaire (ITA).",
            "localSectors": ["Institut de Technologie Alimentaire (ITA Dakar)", "Pôle agroalimentaire de Dakar et Rufisque (Patisen, Grands Moulins de Dakar, Kirène)", "Unités de transformation de fruits de Casamance et Thiès"],
            "remoteWork": "Possibilité partielle pour la R&D théorique, présence d'usine indispensable en production.",
            "entrepreneurship": "Création d'une marque agro-industrielle commercialisant des farines infantiles enrichies à base de produits locaux sénégalais."
        },
        "relatedJobSlugs": ["responsable-qualite-haccp-agri", "conducteur-ligne-agroalimentaire", "ingenieur-agronome", "oenologue"],
        "connectedFamilies": ["industrie-ingenierie", "sante-biomedical", "chimie-biologie"],
        "resources": [{"type": "article", "title": "Fiche Ingénieur Agroalimentaire Onisep", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/ingenieur-ingenieure-en-agroalimentaire", "source": "Onisep"}],
        "sources": ["Onisep", "Studyrama", "ANIA (Association Nationale des Industries Alimentaires)", "ITA Dakar"],
        "interests": ["resoudre-problemes", "construire-fabriquer"],
        "saviezVous": {
            "statut": "metier_stable",
            "fait": "Selon l'Onisep et l'ANIA, l'agroalimentaire est le premier employeur industriel de France avec plus de 450 000 salariés et 17 000 entreprises réparties dans tous les territoires.",
            "pourquoi": "L'industrie agroalimentaire transforme 70% de la production agricole nationale, servant de pont indispensable entre le champ du paysan et la table du citoyen.",
            "a_retenir": "Un profil d'ingénieur indispensable et résilient qui invente les aliments savoureux et sains de demain."
        }
    },
    {
        "id": "responsable-qualite-haccp-agri",
        "slug": "responsable-qualite-haccp-agri",
        "title": "Responsable Qualité & Sécurité Alimentaire (HACCP) / Auditeur QHSE",
        "aliases": ["Responsable QHSE agroalimentaire", "Auditeur qualité agroalimentaire", "Chef de service contrôle qualité"],
        "icon": "🛡️",
        "image": "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Agroalimentaire, Transformation & Qualité Sanitaire",
        "domainId": "agroalimentaire-transformation-qualite",
        "subdomain": "Qualité, hygiène & sécurité sanitaire",
        "sourceOnisep": True,
        "sourceStudyrama": True,
        "isEmerging": False,
        "level": "Bac +3 (Licence Pro Qualité) à Bac +5 (Master / Ingénieur Qualité Agroalimentaire)",
        "salary": "🇫🇷 France : 2 600 - 3 400 € brut/mois débutant (~31 200 - 40 800 €/an, Source : Onisep / Studyrama) • 🇸🇳 Sénégal : 350 000 - 1 200 000 FCFA / mois (Source : Industries agroalimentaires, laboratoires d'analyses)",
        "simpleDefinition": "Le responsable qualité veille à ce que chaque aliment produit en usine ou en coopérative soit rigoureusement conforme aux normes d'hygiène, sans aucun risque de contamination bactériologique ou chimique pour le consommateur.",
        "shortDescription": "Fiche documentée par Onisep et Studyrama, ce bouclier sanitaire pilote la méthode HACCP, traque les bactéries indésirables et décroche les certifications internationales (IFS, BRC, ISO 22000).",
        "longDescription": "Dans une usine agroalimentaire, la moindre contamination par une salmonelle ou une listeria peut coûter la vie à un client et ruiner l'entreprise. Le responsable qualité déploie le Plan de Maîtrise Sanitaire (PMS). Il identifie les Points Critiques pour leur Maîtrise (CCP), organise les prélèvements d'échantillons sur ligne, gère la traçabilité intégrale du lot agricole jusqu'au supermarché et forme le personnel au port irréprochable des tenues et au lavage des mains.",
        "mainObjective": "Garantir le risque zéro en matière de sécurité sanitaire des aliments et maintenir la certification qualité de l'entreprise.",
        "companyRole": "Garant légal de la salubrité publique, auditeur interne intransigeant et protecteur de la marque.",
        "workEnvironment": ["🔬 Laboratoire de contrôle microbiologique et physico-chimique de l'usine", "🏭 Inspection quotidienne des ateliers de production et zones de stockage", "📋 Audits officiels des services vétérinaires d'État (DDPP) et distributeurs"],
        "missions": [
            "Actualiser l'analyse des dangers et la gestion des CCP selon les principes HACCP",
            "Mettre en place et superviser le plan de contrôle microbiologique (recherche de listeria, salmonelles, coliformes)",
            "Gérer les alertes qualité, bloquer les lots non conformes et piloter les procédures de retrait-rappel",
            "Préparer et réussir les audits de certification internationale (IFS Food, BRC, ISO 22000, FSSC)",
            "Auditer les fournisseurs agricoles sur le respect des cahiers des charges (résidus de pesticides, absence de corps étrangers)"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Tournée d'hygiène pré-opérationnelle en usine", "desc": "Contrôle à l'écouvillon de la propreté bactériologique des tapis de convoyage avant le démarrage des machines."},
            {"time": "10:00", "title": "Lecture des boîtes de Pétri au laboratoire", "desc": "Comptage des colonies bactériennes sur les échantillons de produits finis du lot de la veille."},
            {"time": "14:00", "title": "Exercice inopiné de traçabilité montante et descendante", "desc": "Chronos en main : retrouver l'origine de tous les ingrédients d'un paquet de gâteaux en moins de deux heures."},
            {"time": "16:30", "title": "Formation hygiène des nouveaux opérateurs de production", "desc": "Sensibilisation aux gestes de prévention des contaminations croisées et nettoyage des mains."}
        ],
        "skills": {
            "technical": ["Méthodologie HACCP approfondie (Codex Alimentarius)", "Microbiologie alimentaire et parasitologie", "Référentiels qualité de la grande distribution (IFS Food v8, BRCGS, ISO 22000)", "Réglementation 'Paquet Hygiène' européenne", "Techniques d'audit qualité interne et externe"],
            "human": ["Rigueur absolue et intransigeance bienveillante", "Pédagogie et sens de la persuasion avec les équipes de production", "Résistance à la pression lors d'un audit de certification", "Sens de l'analyse méthodique"],
            "tools": ["Écouvillons de prélèvement de surface et luminomètres ATP", "Boîtes de Pétri et étuves bactériologiques", "Logiciels de traçabilité et gestion de documents qualité (GED)", "Sondes de température thermocouple étalonnées"],
            "analytical": ["Analyses de causes racines (méthodes 5 Pourquoi, diagramme d'Ishikawa)", "Interprétation des cartes de contrôle statistiques SPC"]
        },
        "specializations": ["Audits de certification internationale (IFS, BRC)", "Sécurité microbiologique en filière produits carnés ou laitiers", "Gestion des allergènes et certifications spécifiques (Bio, Halal, Kasher)", "Affaires réglementaires et étiquetage nutritionnel"],
        "studies": {
            "pathway": [
                {"step": "Bac +2", "title": "BTS Bioqualité ou BUT Génie Biologique option Qualité", "desc": "Bases en microbiologie pratique et contrôle qualité."},
                {"step": "Bac +3", "title": "Licence Pro Sécurité des Aliments et Assurance Qualité", "desc": "Maîtrise opérationnelle des audits HACCP en usine."},
                {"step": "Bac +5", "title": "Master Qualité et Sécurité Sanitaire des Aliments ou Ingénieur Agronome/Agroalimentaire", "desc": "Direction de services qualité et gestion des crises sanitaires."}
            ],
            "schools": [
                {"name": "Universités proposant les Masters QHSE Agroalimentaire (Bordeaux, Montpellier, Lille) — France", "country": "France", "scope": "France"},
                {"name": "Institut Agro / Oniris — France", "country": "France", "scope": "France"},
                {"name": "Institut de Technologie Alimentaire (ITA Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat d'Auditeur Interne IFS Food / ISO 22000", "Formation certifiée HACCP niveau expert"],
            "schoolSubjects": ["Microbiologie", "Droit agroalimentaire", "Statistiques", "Management de la qualité"]
        },
        "career": {
            "sectors": ["Industries de transformation de viandes, lait, fruits et légumes", "Grandes coopératives agricoles et abattoirs", "Organismes d'audit et de certification (Bureau Veritas, SGS)", "Laboratoires privés d'analyses agroalimentaires (Eurofins)"],
            "employerTypes": ["Usines agroalimentaires", "Sociétés d'audit international", "Centrales d'achat de la grande distribution"],
            "evolution": "Technicien contrôle qualité ➔ Responsable qualité usine ➔ Directeur qualité groupe multi-sites ➔ Auditeur tierce partie pour un organisme certificateur",
            "pros": "Poste à très haute responsabilité morale protégeant la vie des citoyens, compétences universelles applicables dans toute usine du monde, forte écoute de la direction.",
            "cons": "Responsabilité stressante lors d'un litige sanitaire, nécessité fréquente de s'opposer à la production pour bloquer un lot non conforme."
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser l'arbre de décision HACCP pour déterminer les CCP d'une recette simple de mayonnaise maison.",
            "intermediateProject": "Rédiger une fiche de procédure complète de gestion des corps étrangers métalliques pour une ligne d'emballage.",
            "advancedProject": "Construire le plan de maîtrise sanitaire complet d'un atelier artisanal de transformation de fruits en confitures.",
            "portfolioIdeas": ["Tableau d'analyse des dangers HACCP", "Rapport d'audit à blanc selon le référentiel IFS Food"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'IA surveille en temps réel les dérives de température des chambres froides et accélère la détection d'ADN bactérien sur séquenceurs portatifs.",
            "automatedTasks": ["Archivage et vérification automatique des relevés de température IoT", "Traduction instantanée des rapports d'audits internationaux"],
            "emergingSkills": ["Gestion de la traçabilité par technologie Blockchain alimentaire", "Analyse prédictive des risques d'altération microbienne"],
            "humanEdge": "Le discernement éthique et le courage d'ordonner le blocage d'une production valant des dizaines de milliers d'euros en cas de doute sanitaire."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la conformité aux normes internationales de qualité (HACCP, Codex Alimentarius) est la condition sine qua non pour que les entreprises locales puissent exporter mangues fraîches, haricots verts ou poisson vers l'Europe.",
            "localSectors": ["Association Sénégalaise de Normalisation (ASN)", "Entreprises d'exportation de produits horticoles des Niayes", "Industries de la pêche et usines de conditionnement de thon de Dakar"],
            "remoteWork": "Gestion documentaire possible en télétravail partiel, présence terrain obligatoire pour les contrôles.",
            "entrepreneurship": "Création d'un cabinet de conseil et formation HACCP accompagnant les PME et coopératives agricoles féminines à l'obtention des normes d'exportation."
        },
        "relatedJobSlugs": ["ingenieur-agroalimentaire", "conducteur-ligne-agroalimentaire", "halieute", "conseiller-gestion-agricole"],
        "connectedFamilies": ["sante-biomedical", "conseil-audit", "droit-justice"],
        "resources": [{"type": "article", "title": "Fiche Responsable Qualité Onisep", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/responsable-qualite-en-agroalimentaire", "source": "Onisep"}],
        "sources": ["Onisep", "Studyrama", "DGAL (Direction Générale de l'Alimentation)", "ASN"],
        "interests": ["resoudre-problemes", "nature-environnement"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon l'Onisep, la méthode HACCP a été inventée dans les années 1960 par la NASA et l'armée américaine pour garantir la sécurité absolue de la nourriture des astronautes dans l'espace.",
            "pourquoi": "Dans l'espace, une simple intoxication alimentaire pouvait condamner toute une mission Apollo : cette méthode infaillible est aujourd'hui la règle obligatoire pour toute usine agroalimentaire mondiale.",
            "a_retenir": "Le garant inflexible de la pureté de ce que nous mangeons chaque jour."
        }
    },
    {
        "id": "conducteur-ligne-agroalimentaire",
        "slug": "conducteur-ligne-agroalimentaire",
        "title": "Conducteur de Ligne en Agroalimentaire / Pilote d'Installation",
        "aliases": ["Conductrice de ligne de fabrication", "Pilote de ligne automatisée", "Opérateur de conditionnement agroalimentaire"],
        "icon": "🏭",
        "image": "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Agroalimentaire, Transformation & Qualité Sanitaire",
        "domainId": "agroalimentaire-transformation-qualite",
        "subdomain": "Production & conditionnement industriel",
        "sourceOnisep": True,
        "sourceStudyrama": True,
        "isEmerging": False,
        "level": "CAP / Bac Pro Pilote de Ligne de Production ou CQP Agroalimentaire",
        "salary": "🇫🇷 France : 1 800 - 2 400 € brut/mois + primes de panier/équipes postées (~21 600 - 28 800 €/an, Source : Onisep / Studyrama) • 🇸🇳 Sénégal : 180 000 - 600 000 FCFA / mois (Source : Usines agro-industrielles)",
        "simpleDefinition": "Le conducteur de ligne pilote un ensemble de machines automatisées qui transforment, cuisent ou emballent des produits alimentaires, en veillant aux cadences, aux réglages et à l'hygiène stricte.",
        "shortDescription": "Fiche documentée par Onisep et Studyrama, c'est le cœur battant des usines alimentaires qui assure que des milliers de yaourts, conserves ou paquets de céréales sortent parfaitement emballés chaque heure.",
        "longDescription": "À la tête d'une ligne de fabrication ou de conditionnement automatisée de plusieurs dizaines de mètres de long, le conducteur de ligne alimente les machines en matières premières et emballages, règle les paramètres de vitesse et de température sur écran tactile, surveille le débit et intervient immédiatement en cas de bourrage. Il contrôle régulièrement la conformité du poids, de l'étiquetage et de la soudure étanche des sachets.",
        "mainObjective": "Produire en continu des aliments de qualité irréprochable en respectant les cadences prévues et les règles strictes d'hygiène.",
        "companyRole": "Pilier opérationnel de l'usine, garant de la régularité et de la cadence de sortie des produits finis.",
        "workEnvironment": ["🏭 Ateliers industriels modernes et climatisés", "🥼 Tenue stérile obligatoire (charlotte, masque, blouse blanche, chaussures de sécurité)", "⏰ Travail en équipes postées (2x8 ou 3x8 : matin, après-midi ou nuit)"],
        "missions": [
            "Effectuer les réglages et changements de formats sur les machines (ensacheuses, étiqueteuses, fardeleuses)",
            "Approvisionner la ligne en matières consommables (films plastiques, barquettes, bouchons)",
            "Surveiller les paramètres de fonctionnement sur le pupitre de commande et ajuster les vitesses",
            "Réaliser les contrôles qualité en cours de production (étanchéité sous cloche à vide, détecteur de métaux)",
            "Effectuer la maintenance de premier niveau (remplacement de ventouses, débourrage, graissage)"
        ],
        "typicalDay": [
            {"time": "05:00", "title": "Passation de consigne avec l'équipe de nuit", "desc": "Revue des cadences atteintes et des arrêts de ligne survenus pendant la nuit."},
            {"time": "06:00", "title": "Démarrage de la ligne après nettoyage", "desc": "Montée en température des mâchoires de scellage et test de passage des témoins ferreux dans le détecteur de métaux."},
            {"time": "09:30", "title": "Changement de format de barquettes", "desc": "Changement des guides et réglage de la peseuse associative pour passer de barquettes de 250 g à 500 g."},
            {"time": "12:30", "title": "Fin de poste et enregistrement informatique", "desc": "Saisie des volumes produits et des rebuts sur le logiciel MES avant l'arrivée de l'équipe d'après-midi."}
        ],
        "skills": {
            "technical": ["Conduite de lignes industrielles automatisées", "Mécanique et pneumatique de premier niveau", "Bonnes Pratiques d'Hygiène (BPH) agroalimentaires", "Contrôles qualité normés (détection métaux, étanchéité)", "Utilisation des interfaces homme-machine (écrans tactiles industriels)"],
            "human": ["Réactivité et sang-froid en cas d'incident machine", "Vigilance continue et sens du détail", "Goût pour le travail en équipe", "Régularité et endurance au rythme des cadences"],
            "tools": ["Peseuses associatives et ensacheuses verticales", "Encartonneuses et robots palettiseurs", "Bacs de contrôle d'étanchéité sous vide", "Outillage manuel de maintenance d'atelier"],
            "analytical": ["Calcul du Taux de Rendement Synthétique (TRS)", "Analyse des causes des micro-arrêts de ligne"]
        },
        "specializations": ["Lignes de fabrication et transformation (cuisson, extrusion)", "Lignes de conditionnement et emballage haute cadence", "Lignes de mise en bouteille et embouteillage liquide", "Lignes de surgélation et produits ultra-frais"],
        "studies": {
            "pathway": [
                {"step": "CAP / CQP", "title": "CAP Conducteur d'Installations de Production ou CQP Conducteur de Ligne Agroalimentaire", "desc": "Formation rapide axée sur la pratique en atelier."},
                {"step": "Bac Pro", "title": "Bac Pro Pilote de Ligne de Production (PLP) ou BIT (Bio-Industries de Transformation)", "desc": "Diplôme idéal pour une embauche rapide et une progression de carrière."},
                {"step": "Bac +2", "title": "BTS Pilotage de Procédés", "desc": "Pour évoluer rapidement vers des postes de chef d'équipe."}
            ],
            "schools": [
                {"name": "Lycées professionnels industriels et CFA de l'agroalimentaire (IFRIA) — France", "country": "France", "scope": "France"},
                {"name": "Centres de formation professionnelle industrielle (Sénégal)", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["CACES cariste catégorie 1A et 3 (manutention palettes)", "Habilitation électrique non électricien (B0/H0)"],
            "schoolSubjects": ["Technologie des automatismes", "Hygiène agroalimentaire", "Maintenance industrielle", "Qualité"]
        },
        "career": {
            "sectors": ["Laiteries et fromageries industrielles", "Biscuiteries, chocolateries et confiseries", "Conserveries et plats cuisinés", "Grandes brasseries et embouteilleurs d'eaux et sodas"],
            "employerTypes": ["Usines agroalimentaires de toutes tailles", "Coopératives de transformation", "Grands groupes internationaux"],
            "evolution": "Opérateur de ligne ➔ Conducteur de ligne confirmé ➔ Chef d'équipe de production ➔ Adjoint au responsable de fabrication",
            "pros": "Embauche garantie partout en France et à l'international, environnement de travail moderne et hautement automatisé, primes d'équipe substantielles.",
            "cons": "Horaires décalés (travail en 3x8 ou week-end), bruit de fond des machines nécessitant le port de bouchons d'oreilles, gestes répétitifs."
        },
        "gettingStarted": {
            "beginnerProject": "Effectuer une visite virtuelle d'une ligne d'embouteillage moderne pour comprendre le fonctionnement d'une soutireuse et d'une étiqueteuse.",
            "intermediateProject": "Apprendre à identifier les 6 grandes causes de pertes de rendement selon la méthode TPM (Total Productive Maintenance).",
            "advancedProject": "Réaliser un changement de format complet sur une machine d'emballage en appliquant les principes de la méthode SMED pour diviser le temps par deux.",
            "portfolioIdeas": ["Schéma synoptique d'une ligne de conditionnement", "Fiche de relevé TRS commentée"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des robots de vision automatisés éjectent d'eux-mêmes les emballages défectueux, laissant au conducteur le rôle de supervision stratégique.",
            "automatedTasks": ["Palettisation robotisée entièrement autonome", "Contrôle automatique du poids par bascule dynamique intégrée"],
            "emergingSkills": ["Supervision de cobots (robots collaboratifs)", "Utilisation d'interfaces tactiles d'usine 4.0"],
            "humanEdge": "La rapidité de réaction pour débloquer un sachet coincé et la finesse de réglage mécanique qu'aucun algorithme ne remplace."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'ouverture de nouvelles usines modernes de transformation de farine, bouillon, lait et jus (zone industrielle de Diamniadio et Sandiara) génère une forte demande d'opérateurs et conducteurs de lignes formés aux standards internationaux.",
            "localSectors": ["Parc industriel de Diamniadio et Sandiara", "Grandes usines alimentaires de Dakar (Patisen, NMA, Kirène)", "Unités de transformation de la Compagnie Sucrière Sénégalaise (CSS Richard-Toll)"],
            "remoteWork": "100% sur le site de production.",
            "entrepreneurship": "Création d'une micro-unité semi-automatisée de mise en bouteille de jus locaux pasteurisés."
        },
        "relatedJobSlugs": ["ingenieur-agroalimentaire", "responsable-qualite-haccp-agri", "technicien-maintenance-agroequipement", "maitre-de-chai"],
        "connectedFamilies": ["industrie-ingenierie", "transport-logistique", "artisanat-metiers-art"],
        "resources": [{"type": "article", "title": "Fiche Métier Conducteur de Ligne Onisep", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/conducteur-conductrice-de-ligne-de-production-agroalimentaire", "source": "Onisep"}],
        "sources": ["Onisep", "Studyrama", "IFRIA"],
        "interests": ["construire-fabriquer", "resoudre-problemes"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon l'Onisep et l'IFRIA, le poste de conducteur de ligne est le métier le plus recherché de toute l'industrie agroalimentaire avec des dizaines de milliers de postes à pourvoir chaque année.",
            "pourquoi": "L'automatisation croissante des usines a transformé ce métier autrefois pénible en un poste technique valorisant de pilotage d'écrans et de robots.",
            "a_retenir": "Une porte d'entrée royale dans l'industrie pour ceux qui aiment la technologie concrète et le travail d'équipe bien orchestré."
        }
    },

    # -----------------------------------------------------------------------
    # 9. ÉCONOMIE, GESTION, DROIT & CONSEIL RURAL
    # -----------------------------------------------------------------------
    {
        "id": "conseiller-gestion-agricole",
        "slug": "conseiller-gestion-agricole",
        "title": "Conseiller d'Entreprise Agricole / Conseiller en Gestion Rurale",
        "aliases": ["Conseiller de gestion agricole", "Comptable conseil en agriculture", "Consultant d'exploitation agricole"],
        "icon": "📊",
        "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Économie, Gestion, Droit & Conseil Rural",
        "domainId": "economie-gestion-conseil-rural",
        "subdomain": "Gestion financière & conseil stratégique",
        "sourceOnisep": False,
        "sourceStudyrama": True,
        "isEmerging": False,
        "level": "Bac +3 (Licence Pro Gestion Agricole) à Bac +5 (Ingénieur Agro / Master Finance Agricole)",
        "salary": "🇫🇷 France : 2 400 - 3 400 € brut/mois débutant (~28 800 - 40 800 €/an, Source : Studyrama / CerFrance) • 🇸🇳 Sénégal : 350 000 - 1 200 000 FCFA / mois (Source : Cabinets de conseil, BNDE, projets agricoles)",
        "simpleDefinition": "Le conseiller de gestion agricole analyse les comptes des agriculteurs, établit leurs bilans prévisionnels et les conseille pour réussir leurs investissements, optimiser leur fiscalité et sécuriser la transmission de leur ferme.",
        "shortDescription": "Fiche documentée par Studyrama, ce copilote économique de l'exploitant agricole traduit les chiffres comptables en décisions stratégiques de terrain.",
        "longDescription": "Une exploitation agricole moderne est une PME de plusieurs centaines de milliers d'euros de chiffre d'affaires, soumise aux fluctuations brutales des cours mondiaux des céréales ou du lait. Travaillant souvent au sein d'un centre de gestion agréé (comme CerFrance), le conseiller calcule les coûts de revient à l'hectare ou au litre, monte les dossiers de subventions européennes (PAC) et guide le paysan lors d'investissements majeurs (achat d'un robot de traite ou agrandissement foncier).",
        "mainObjective": "Assurer la rentabilité économique pérenne et la sécurité financière des exploitations agricoles.",
        "companyRole": "Conseiller de confiance, copilote financier et stratège d'entreprise de l'agriculteur.",
        "workEnvironment": ["🚗 Visites régulières dans les exploitations agricoles (autour de la table de cuisine)", "🏢 Agences de centres de gestion (CerFrance) et chambres d'agriculture", "💻 Tableurs financiers et logiciels d'analyse de marges agricoles"],
        "missions": [
            "Établir le bilan annuel et analyser les marges brutes de chaque atelier de production de la ferme",
            "Élaborer des plans de développement économique prévisionnels pour l'installation de jeunes agriculteurs (DJA)",
            "Chiffrer la rentabilité et le plan de financement lors de l'achat de terres ou de nouveaux matériels",
            "Conseiller sur l'optimisation fiscale et sociale (statuts GAEC, EARL, SCEA, régime du réel agricole)",
            "Accompagner les fermes en difficulté financière par des plans de restructuration de dettes"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Analyse de bilan en agence", "desc": "Étude comparative du coût alimentaire et de la marge brute d'un éleveur laitier par rapport à la moyenne régionale."},
            {"time": "10:30", "title": "Rendez-vous conseil dans une ferme céréalière", "desc": "Présentation des résultats annuels à l'exploitant et simulation de l'impact de la hausse du prix des engrais."},
            {"time": "14:00", "title": "Montage d'un dossier d'installation JA", "desc": "Rédaction du Plan d'Entreprise (PE) sur 5 ans pour un jeune maraîcher bio sollicitant la dotation jeune agriculteur."},
            {"time": "16:30", "title": "Animation d'un groupe d'échange entre agriculteurs", "desc": "Animation d'un atelier sur les stratégies de commercialisation des céréales et l'utilisation des marchés à terme."}
        ],
        "skills": {
            "technical": ["Comptabilité et fiscalité agricole spécifique", "Analyse financière et calcul de marges brutes et nettes", "Mécanismes des aides publiques et de la PAC", "Droit des structures agricoles (EARL, GAEC, GFA)", "Agronomie et zootechnie de base pour comprendre le métier du client"],
            "human": ["Grande écoute, empathie et respect du monde paysan", "Pédagogie pour expliquer des notions financières complexes avec simplicité", "Rigueur d'analyse chiffrée", "Sens de la confidentialité absolue"],
            "tools": ["Logiciels comptables agricoles spécialisés (Isagri, CerFrance)", "Simulateurs fiscaux et d'emprunts bancaires", "Outils de modélisation de trésorerie prévisionnelle", "Tableurs financiers avancés"],
            "analytical": ["Calcul du Prix de Revient Économique (PRE)", "Capacité d'autofinancement (CAF) et taux d'endettement"]
        },
        "specializations": ["Conseil à l'installation des jeunes agriculteurs (DJA)", "Stratégie de diversification (vente directe, agritourisme, méthanisation)", "Transmission d'exploitation et départ en retraite", "Accompagnement des exploitations en redressement"],
        "studies": {
            "pathway": [
                {"step": "Bac +2", "title": "BTSA Analyse, Conduite et Stratégie de l'Entreprise Agricole (ACSE)", "desc": "Formation de référence combinant agronomie et gestion économique."},
                {"step": "Bac +3", "title": "Licence Pro Gestion des Entreprises Agricoles ou Conseil Agricole", "desc": "Perfectionnement en fiscalité et conseil stratégique."},
                {"step": "Bac +5", "title": "Diplôme d'Ingénieur Agronome spécialité Économie Rurale ou Master Gestion", "desc": "Accès direct aux postes de consultants seniors et directeurs d'agence."}
            ],
            "schools": [
                {"name": "Lycées agricoles dispensant le BTS ACSE — France", "country": "France", "scope": "France"},
                {"name": "Institut Agro / UniLaSalle — France", "country": "France", "scope": "France"},
                {"name": "Institut Supérieur de Formation Agricole et Rurale (ISFAR Bambey) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Habilitation de conseil en gestion de patrimoine rural", "Agrément de conseiller DJA"],
            "schoolSubjects": ["Économie rurale", "Comptabilité de gestion", "Fiscalité", "Agronomie générale"]
        },
        "career": {
            "sectors": ["Centres d'économie et de gestion agricole (CerFrance, Cogedis)", "Chambres d'agriculture départementales et régionales", "Banques spécialisées agricoles (Crédit Agricole, Banque Populaire)", "Cabinets d'expertise comptable privés"],
            "employerTypes": ["Réseaux mutualistes de conseil comptable", "Organismes consulaires", "Institutions bancaires et de crédit"],
            "evolution": "Conseiller d'entreprise junior ➔ Conseiller d'entreprise senior spécialisé ➔ Responsable d'agence territoriale ➔ Directeur de pôle conseil économique",
            "pros": "Relations humaines très fortes et reconnaissantes avec les agriculteurs, grande variété des dossiers analysés, stabilité et sécurité de l'emploi.",
            "cons": "Pics de travail très intenses au printemps pendant la période fiscale de clôture des bilans, confrontation à des situations de détresse financière chez certains exploitants."
        },
        "gettingStarted": {
            "beginnerProject": "Analyser le compte de résultat d'une exploitation agricole pédagogique et calculer sa marge brute globale.",
            "intermediateProject": "Simuler l'impact d'une baisse de 15% du cours du blé sur la trésorerie prévisionnelle d'une exploitation céréalière de 120 ha.",
            "advancedProject": "Rédiger le plan d'entreprise complet d'une installation en maraîchage biologique diversifié sur 3 hectares avec vente directe.",
            "portfolioIdeas": ["Dossier prévisionnel de financement d'un hangar solaire", "Étude comparative fiscale EARL vs GAEC"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'IA automatise la saisie comptable des factures et rapprochements bancaires, permettant au conseiller de se consacrer à 100% à l'accompagnement humain et à la stratégie.",
            "automatedTasks": ["Lecture automatique des factures et écritures comptables par OCR", "Génération automatique des déclarations TVA agricoles"],
            "emergingSkills": ["Conseil en diversification vers les revenus carbone et agrivoltaïsme", "Interprétation de tableaux de bord financiers prédictifs"],
            "humanEdge": "La relation de confiance intime et le tact pour aborder les sujets familiaux délicats lors de la transmission d'une ferme."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la bancarisation et la professionnalisation financière des exploitations familiales sont cruciales pour accéder aux crédits de la Banque Nationale pour le Développement Économique (BNDE) et du Crédit Agricole du Sénégal (LBA).",
            "localSectors": ["La Banque Agricole (LBA ex-CNCAS)", "Centres de Gestion Économique Rurale (CGER) de la vallée et des Niayes", "Projets d'appui aux exploitations familiales (PADAER, PAFA)"],
            "remoteWork": "Analyses financières en télétravail possibles, rendez-vous paysans indispensables.",
            "entrepreneurship": "Création d'un cabinet privé de conseil en gestion et montage de plans d'affaires bancables pour les jeunes agri-preneurs sénégalais."
        },
        "relatedJobSlugs": ["charge-affaires-agricoles", "juriste-agricole", "chef-exploitation-agricole", "directeur-cooperative-agricole"],
        "connectedFamilies": ["gestion-finance", "conseil-audit", "droit-justice"],
        "resources": [{"type": "article", "title": "Fiche Conseiller Agricole Studyrama", "url": "https://www.studyrama.com/formations/fiches-metiers/agriculture/conseiller-agricole-91759", "source": "Studyrama"}],
        "sources": ["Studyrama", "CerFrance", "Chambres d'Agriculture"],
        "interests": ["resoudre-problemes", "negocier-convaincre"],
        "saviezVous": {
            "statut": "metier_stable",
            "fait": "Selon Studyrama et CerFrance, le réseau de conseil CerFrance emploie plus de 13 000 collaborateurs en France et conseille plus de 320 000 chefs d'entreprises, principalement agricoles.",
            "pourquoi": "L'agriculture est l'un des secteurs économiques les plus complexes fiscalement et réglementairement, rendant l'assistance d'un conseiller indispensable.",
            "a_retenir": "Le conseiller de l'ombre sans qui beaucoup de fermes ne pourraient survivre aux tempêtes économiques."
        }
    },
    {
        "id": "charge-affaires-agricoles",
        "slug": "charge-affaires-agricoles",
        "title": "Chargé d'Affaires Agricoles / Banquier Conseil du Monde Rural",
        "aliases": ["Conseiller bancaire agricole", "Chargé de clientèle agricole", "Analyste crédit agricole"],
        "icon": "💼",
        "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Économie, Gestion, Droit & Conseil Rural",
        "domainId": "economie-gestion-conseil-rural",
        "subdomain": "Financement bancaire & assurances agricoles",
        "sourceOnisep": False,
        "sourceStudyrama": True,
        "isEmerging": False,
        "level": "Bac +3 (Licence Pro Banque Agricole) à Bac +5 (Master Finance / Ingénieur Agro)",
        "salary": "🇫🇷 France : 2 500 - 3 500 € brut/mois débutant + primes (~32 000 - 45 000 €/an package, Source : Studyrama / Fiches Banque) • 🇸🇳 Sénégal : 400 000 - 1 400 000 FCFA / mois (Source : Banques agricoles, LBA, BNDE)",
        "simpleDefinition": "Le chargé d'affaires agricoles gère et développe le portefeuille de clients agriculteurs d'une banque : il analyse leurs demandes d'emprunts, finance leurs investissements et protège leurs fermes contre les aléas climatiques.",
        "shortDescription": "Fiche documentée par Studyrama, ce banquier de terrain passe une grande partie de son temps bottes aux pieds pour évaluer la solidité des projets qu'il finance.",
        "longDescription": "Financer une moissonneuse à 400 000 €, un bâtiment photovoltaïque ou l'installation d'un jeune agriculteur ne ressemble en rien à un prêt immobilier classique. Le chargé d'affaires agricoles visite les parcelles et les étables, évalue l'expérience de l'exploitant, étudie les bilans comptables et monte les dossiers de prêt moyen/long terme. Il propose également des assurances récolte contre la grêle et la sécheresse ainsi que des solutions de placement pour sécuriser la trésorerie.",
        "mainObjective": "Financer le développement des exploitations agricoles en maîtrisant le risque de crédit pour l'institution bancaire.",
        "companyRole": "Moteur commercial de la banque sur le marché des professionnels de l'agriculture et partenaire financier des exploitants.",
        "workEnvironment": ["🏢 Agence bancaire pour l'analyse financière et le montage des dossiers", "🌾 Visites régulières dans les fermes du portefeuille", "🤝 Réunions fréquentes avec les experts-comptables et notaires ruraux"],
        "missions": [
            "Instruire les demandes de prêts à moyen et long terme (matériels, foncier, bâtiments, cheptel)",
            "Analyser la capacité de remboursement et la rentabilité prévisionnelle des exploitations",
            "Présenter et défendre les dossiers de crédit devant le comité des engagements de la banque",
            "Commercialiser les assurances multi-périls climatiques des récoltes et la prévoyance de l'exploitant",
            "Accompagner les agriculteurs dans la gestion des tensions de trésorerie saisonnières (crédits de campagne)"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Revue des flux de trésorerie et autorisations de découvert", "desc": "Vérification des comptes clients et validation d'une avance sur trésorerie avant encaissement des aides PAC."},
            {"time": "10:30", "title": "Visite d'exploitation pour projet d'agrandissement", "desc": "Rendez-vous dans une ferme pour visiter 40 hectares de terres agricoles convoitées et évaluer le prix au m²."},
            {"time": "14:30", "title": "Défense d'un dossier de prêt en comité de crédit", "desc": "Argumentation technique et financière pour l'octroi d'un financement de 350 000 € pour une stabulation moderne."},
            {"time": "16:30", "title": "Souscription d'une assurance récolte", "desc": "Signature d'un contrat d'assurance climatique indicielle avec un céréalier pour couvrir sa récolte de blé."}
        ],
        "skills": {
            "technical": ["Analyse financière approfondie des bilans agricoles", "Techniques d'octroi de crédit professionnel et gestion des garanties (hypothèques, nantissements)", "Réglementation des aides à l'installation (prêts bonifiés)", "Produits d'assurance climatique agricole", "Bonne connaissance des cycles agricoles"],
            "human": ["Aisance relationnelle et parler franc apprécié des agriculteurs", "Sens de la négociation commerciale", "Capacité à dire non avec pédagogie lorsque le risque est excessif", "Sens de l'écoute et discrétion"],
            "tools": ["Logiciels bancaires d'analyse du risque de contrepartie", "Outils de simulation de prêts et tableaux d'amortissement", "CRM bancaire de suivi de portefeuille", "Bases de données de cotation d'entreprises"],
            "analytical": ["Analyse de la capacité d'autofinancement (CAF)", "Calcul du ratio dette nette sur excédent brut d'exploitation (EBE)"]
        },
        "specializations": ["Financement de grands projets agro-industriels et méthanisation", "Accompagnement de l'installation des jeunes agriculteurs", "Financement de coopératives et négoces agricoles", "Assurances gestion des risques climatiques et sanitaires"],
        "studies": {
            "pathway": [
                {"step": "Bac +2", "title": "BTSA ACSE ou BTS Banque", "desc": "Double socle apprécié combinant monde agricole et bases bancaires."},
                {"step": "Bac +3", "title": "Licence Pro Métiers de la Banque (Parcours Marché Agricole)", "desc": "Formation de prédilection des banques mutualistes pour recruter leurs chargés d'affaires."},
                {"step": "Bac +5", "title": "Master Banque / Finance ou Diplôme d'Ingénieur Agronome", "desc": "Évolution rapide vers les grands comptes agro-industriels et la direction d'agences."}
            ],
            "schools": [
                {"name": "Écoles supérieures de commerce et universités dispensant les Masters Banque — France", "country": "France", "scope": "France"},
                {"name": "Institut Agro / UniLaSalle — Filières Finance & Gestion", "country": "France", "scope": "International"},
                {"name": "Centres de formation de la profession bancaire (CFPB Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification AMF (Autorité des Marchés Financiers)", "Habilitation IOBSP (Intermédiaire en Opérations de Banque)"],
            "schoolSubjects": ["Finance d'entreprise", "Économie agricole", "Droit bancaire", "Négociation commerciale"]
        },
        "career": {
            "sectors": ["Banques de référence du monde agricole (Crédit Agricole, Banque Populaire, Crédit Mutuel)", "Banques de développement agricole internationales (BAD, BOAD)", "Compagnies d'assurance spécialisées agricoles (Groupama, Pacifica)", "Sociétés de crédit-bail et leasing de matériel"],
            "employerTypes": ["Groupes bancaires mutualistes", "Établissements financiers spécialisés", "Compagnies d'assurance"],
            "evolution": "Chargé de clientèle agricole junior ➔ Chargé d'affaires agricoles senior ➔ Directeur d'agence bancaire en milieu rural ➔ Directeur du marché des professionnels et de l'agriculture",
            "pros": "Métier alliant finance de haut niveau et authenticité du contact paysan, rémunération attractive avec primes, voiture de fonction, impact direct sur l'économie locale.",
            "cons": "Pression sur les objectifs commerciaux bancaires, devoir refuser des financements à des agriculteurs passionnés dont le dossier est trop fragile."
        },
        "gettingStarted": {
            "beginnerProject": "Comparer les offres de prêts à l'installation des jeunes agriculteurs proposées par deux grandes banques françaises.",
            "intermediateProject": "Monter un dossier de simulation de prêt de 150 000 € sur 7 ans pour l'achat d'un tracteur neuf avec calcul du taux d'endettement.",
            "advancedProject": "Réaliser l'analyse financière complète d'un bilan d'exploitation et rédiger la note de synthèse pour le comité des risques bancaires.",
            "portfolioIdeas": ["Grille d'évaluation du risque de crédit agricole", "Argumentaire de vente d'une assurance multi-risques climatique"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des algorithmes de scoring prédisent le risque de défaut de paiement en intégrant les rendements satellites des parcelles et la volatilité des cours.",
            "automatedTasks": ["Pré-analyse automatique des bilans comptables importés", "Édition automatisée des contrats de prêt et garanties"],
            "emergingSkills": ["Financement des projets agrivoltaïques et de décarbonation", "Maîtrise des financements participatifs (crowdfunding agricole)"],
            "humanEdge": "La confiance humaine et l'évaluation du courage de l'exploitant face aux crises, qu'aucun algorithme ne peut mesurer."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'accès au crédit des producteurs est le verrou historique du développement. La Banque Agricole (LBA) et les institutions de microfinance (Crédit Mutuel du Sénégal, PAMECAS) renforcent leurs équipes de conseillers agricoles pour financer la campagne agricole.",
            "localSectors": ["La Banque Agricole (LBA)", "Banque Nationale pour le Développement Économique (BNDE)", "Réseaux de microfinance rurale (CMS, PAMECAS, ACEP)"],
            "remoteWork": "Possibilité partielle d'analyse à distance, tournées de terrain indispensables.",
            "entrepreneurship": "Création d'une plateforme de courtage et de financement participatif agricole connectant la diaspora sénégalaise aux fermes locales rentables."
        },
        "relatedJobSlugs": ["conseiller-gestion-agricole", "juriste-agricole", "chef-exploitation-agricole", "technico-commercial-agroequipement"],
        "connectedFamilies": ["gestion-finance", "conseil-audit", "droit-justice"],
        "resources": [{"type": "article", "title": "Fiche Conseiller Banque Agricole Studyrama", "url": "https://www.studyrama.com/formations/fiches-metiers/banque-assurance", "source": "Studyrama"}],
        "sources": ["Studyrama", "Crédit Agricole", "APECITA"],
        "interests": ["negocier-convaincre", "resoudre-problemes"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon Studyrama et la Fédération Bancaire Française, le Crédit Agricole est né en 1885 sous forme de caisses locales mutualistes créées par des paysans pour s'entraider face à la frilosité des banques traditionnelles.",
            "pourquoi": "Ce modèle mutualiste original fait que la majorité des administrateurs des banques régionales sont encore aujourd'hui des agriculteurs élus par leurs pairs.",
            "a_retenir": "Un métier où l'on fait fructifier l'argent au service direct de la terre et de ceux qui la cultivent."
        }
    },
    {
        "id": "juriste-agricole",
        "slug": "juriste-agricole",
        "title": "Juriste en Droit Rural & Foncier Agricole / Expert Foncier",
        "aliases": ["Juriste droit rural", "Expert foncier agricole", "Conseiller juridique agricole"],
        "icon": "⚖️",
        "image": "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Économie, Gestion, Droit & Conseil Rural",
        "domainId": "economie-gestion-conseil-rural",
        "subdomain": "Droit rural & foncier",
        "sourceOnisep": False,
        "sourceStudyrama": True,
        "isEmerging": False,
        "level": "Bac +5 (Master en Droit Rural ou Diplôme d'Ingénieur Agronome spécialité Droit)",
        "salary": "🇫🇷 France : 2 700 - 3 600 € brut/mois débutant (~32 400 - 43 200 €/an, Source : Studyrama / Safer / FNSEA) • 🇸🇳 Sénégal : 450 000 - 1 500 000 FCFA / mois (Source : Cabinets notariaux ruraux, Safer, ministères)",
        "simpleDefinition": "Le juriste en droit rural conseille les agriculteurs, syndicats et propriétaires fonciers sur les baux ruraux, le statut du fermage, la création de sociétés agricoles (GAEC, SCEA) et le règlement des successions familiales.",
        "shortDescription": "Fiche documentée par Studyrama, ce spécialiste du droit de la terre sécurise l'accès aux parcelles, évite les litiges fonciers et protège le statut des exploitants.",
        "longDescription": "Le droit rural est une discipline juridique très singulière, fortement protectrice du fermier exploitant grâce au statut du fermage. Le juriste en droit rural exerce au sein des SAFER (Sociétés d'Aménagement Foncier et d'Établissement Rural), des chambres d'agriculture, des cabinets d'avocats ou d'études notariales. Il rédige des baux à ferme, gère le droit de préemption sur les terres, règle les conflits de mitoyenneté ou de servitudes d'écoulement des eaux et pilote les transmissions familiales complexes.",
        "mainObjective": "Sécuriser juridiquement l'accès au foncier et la structure sociétaire des exploitations agricoles.",
        "companyRole": "Garant de la conformité juridique et médiateur des conflits fonciers et sociétaires ruraux.",
        "workEnvironment": ["🏢 Bureaux des SAFER, chambres d'agriculture ou études de notaires de province", "🏛️ Tribunaux paritaires des baux ruraux pour l'assistance aux contentieux", "🌾 Déplacements réguliers pour visiter les parcelles et rencontrer les parties"],
        "missions": [
            "Rédiger et négocier des baux ruraux (baux à ferme à long terme, baux environnementaux, commodats)",
            "Instruire les dossiers de droit de préemption des SAFER pour réguler le prix des terres agricoles",
            "Structurer la forme juridique des exploitations (transformation en GAEC, cession de parts d'EARL)",
            "Accompagner la transmission d'exploitation pour minimiser les conflits successoraux entre héritiers",
            "Défendre les intérêts des exploitants devant le Tribunal Paritaire des Baux Ruraux (TPBR)"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Veille juridique et étude d'un arrêté préfectoral", "desc": "Vérification du barème préfectoral des valeurs locatives des terres pour fixer le fermage légal."},
            {"time": "10:30", "title": "Rédaction des statuts d'un nouveau GAEC familial", "desc": "Rédaction des clauses d'apport de matériel et de répartition des bénéfices entre un père et sa fille qui s'installe."},
            {"time": "14:00", "title": "Médiation foncière entre propriétaire et fermier", "desc": "Rencontre pour négocier à l'amiable la résiliation anticipée d'un bail rural avec indemnité d'éviction."},
            {"time": "16:30", "title": "Instruction d'un dossier de rétrocession SAFER", "desc": "Analyse juridique des candidatures d'agriculteurs pour l'attribution prioritaire d'un corps de ferme de 25 ha."}
        ],
        "skills": {
            "technical": ["Droit rural approfondi et statut du fermage (Code rural)", "Droit des sociétés agricoles (GAEC, EARL, SCEA, GFA)", "Réglementation du contrôle des structures et des autorisations d'exploiter", "Fiscalité des plus-values agricoles et droits de succession", "Droit de l'urbanisme rural et de l'environnement"],
            "human": ["Excellente écoute et talents de médiateur dans les conflits familiaux", "Rigueur d'analyse juridique et précision rédactionnelle", "Pédagogie pour expliquer des notions de droit absconses", "Sens de l'équité territoriale"],
            "tools": ["Bases de données juridiques (Dalloz, LexisNexis)", "Cadastre numérique et données parcellaires SAFER (VigieFoncier)", "Logiciels de rédaction d'actes juridiques", "Outils de calcul de fermage indicé"],
            "analytical": ["Estimation d'indemnité d'éviction de bail rural", "Analyse de la validité d'une décision de préemption"]
        },
        "specializations": ["Contentieux du statut du fermage (Tribunal paritaire)", "Aménagement foncier et régulation des prix par les SAFER", "Transmission de patrimoine et démembrement de propriété", "Droit de l'environnement agricole (dérogations haies, espèces protégées)"],
        "studies": {
            "pathway": [
                {"step": "Bac +3", "title": "Licence en Droit Privé", "desc": "Solides bases en droit civil des contrats, biens et obligations."},
                {"step": "Bac +5", "title": "Master 2 Droit Rural / Droit Agroalimentaire", "desc": "Formation de référence dispensée par quelques universités spécialisées (Poitiers, Dijon, Rennes, Paris 1)."}
            ],
            "schools": [
                {"name": "Université de Poitiers (Institut de Droit Rural - Master référence) — France", "country": "France", "scope": "France"},
                {"name": "Université de Bourgogne (Dijon) / Université de Rennes — Master Droit Rural", "country": "France", "scope": "France"},
                {"name": "Université Cheikh Anta Diop (UCAD Dakar - Faculté des Sciences Juridiques) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat d'Aptitude à la Profession d'Avocat (CAPA) pour l'exercice en barreau", "Agrément d'Expert Foncier (CNEFAF)"],
            "schoolSubjects": ["Droit rural", "Droit des contrats", "Droit des sociétés", "Fiscalité agricole"]
        },
        "career": {
            "sectors": ["SAFER régionales (Sociétés d'Aménagement Foncier)", "Chambres d'agriculture et syndicats agricoles (FNSEA, Jeunes Agriculteurs)", "Cabinets d'avocats spécialisés en droit rural", "Offices notariaux en zone rurale"],
            "employerTypes": ["Organismes de régulation foncière", "Cabinets libéraux d'avocats et notaires", "Centres de gestion et d'expertise foncière"],
            "evolution": "Juriste junior en chambre d'agriculture ➔ Responsable juridique SAFER ➔ Avocat associé en droit rural ou Expert Foncier et Agricole indépendant",
            "pros": "Niche juridique prestigieuse et très recherchée car peu enseignée en faculté, rôle de pacificateur dans des querelles de terres ancestrales, sécurité de l'emploi.",
            "cons": "Charge émotionnelle forte lors de déchirements familiaux lors des successions de fermes, lenteur des procédures judiciaires contentieuses."
        },
        "gettingStarted": {
            "beginnerProject": "Lire et résumer les grands principes du statut du fermage dans le Code rural (durée minimale de 9 ans, droit au renouvellement).",
            "intermediateProject": "Rédiger un bail à ferme type pour une parcelle de 15 hectares en intégrant des clauses agroécologiques d'entretien des haies.",
            "advancedProject": "Analyser un cas pratique de succession agricole avec soulte et calculer la valeur d'indemnisation d'un héritier exploitant (salaire différé).",
            "portfolioIdeas": ["Modèle de bail rural environnemental commenté", "Consultation juridique sur un refus d'autorisation d'exploiter"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'IA générative juridique pré-rédige les clauses contractuelles types et accélère la recherche de jurisprudence des cours d'appel rurales.",
            "automatedTasks": ["Recherche automatisée de précédents judiciaires de baux ruraux", "Génération de premières trames de statuts de sociétés agricoles"],
            "emergingSkills": ["Droit des crédits carbone et des baux agrivoltaïques", "Régulation juridique de la propriété des données agricoles numériques"],
            "humanEdge": "La psychologie humaine pour dénouer les rancœurs intrafamiliales lors du partage de la terre ancestrale."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la question du foncier agricole (Loi sur le Domaine National de 1964, délibérations des conseils municipaux, titrage foncier) est ultra-sensible. Les juristes en droit foncier rural sont indispensables pour sécuriser les investissements et éviter les spoliations de terres communautaires.",
            "localSectors": ["Direction Générale des Impôts et Domaines (DGID)", "Commission Nationale de Réforme Foncière (CNRF)", "Bureaux d'études juridiques et cabinets notariaux"],
            "remoteWork": "Rédaction d'actes possible en télétravail partiel, concertations locales sur place.",
            "entrepreneurship": "Création d'un cabinet de sécurisation juridique foncière pour accompagner les investisseurs de la diaspora voulant acquérir des terres sans risques au Sénégal."
        },
        "relatedJobSlugs": ["conseiller-gestion-agricole", "charge-affaires-agricoles", "chef-exploitation-agricole", "ingenieur-agronome"],
        "connectedFamilies": ["droit-justice", "gestion-finance", "conseil-audit"],
        "resources": [{"type": "article", "title": "Fiche Juriste Droit Rural Studyrama", "url": "https://www.studyrama.com/formations/fiches-metiers/droit-justice", "source": "Studyrama"}],
        "sources": ["Studyrama", "Association Française de Droit Rural (AFDR)", "Fédération des Safer"],
        "interests": ["resoudre-problemes", "negocier-convaincre"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon Studyrama et l'Association Française de Droit Rural, les juristes spécialisés en droit rural sont extrêmement disputés par les notaires, banques et Safer car seules deux universités françaises forment de vrais spécialistes.",
            "pourquoi": "La majorité des juristes s'orientent vers le droit des affaires d'entreprise générale, laissant le droit de la terre et du vivant sous-peuplé de talents.",
            "a_retenir": "Un profil juridique d'élite qui marie rigueur des textes et passion viscérale pour la terre nourricière."
        }
    },

    # -----------------------------------------------------------------------
    # 10. AGRITECH, NUMÉRIQUE & AGRICULTURE DE PRÉCISION
    # -----------------------------------------------------------------------
    {
        "id": "ingenieur-agritech",
        "slug": "ingenieur-agritech",
        "title": "Ingénieur AgriTech & Systèmes Connectés / Smart Farming",
        "aliases": ["Ingénieur en agriculture connectée", "Chef de projet smart farming", "Ingénieur IoT agricole"],
        "icon": "🛰️",
        "image": "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "AgriTech, Numérique & Agriculture de Précision",
        "domainId": "agritech-agriculture-numerique",
        "subdomain": "IoT, capteurs & fermes connectées",
        "sourceOnisep": True,
        "sourceStudyrama": False,
        "isEmerging": True,
        "level": "Bac +5 (Diplôme d'Ingénieur Agronome spécialité Numérique ou Ingénieur IoT)",
        "salary": "🇫🇷 France : 3 200 - 4 200 € brut/mois débutant (~38 400 - 50 400 €/an, Source : Onisep / APEC) • 🇸🇳 Sénégal / Afrique : 600 000 - 1 800 000 FCFA / mois (Source : Startups AgriTech, hubs d'innovation)",
        "simpleDefinition": "L'ingénieur AgriTech déploie les technologies numériques au service de l'agriculture : capteurs de sol connectés (IoT), stations météo intelligentes, colliers pour bétail et plateformes d'aide à la décision.",
        "shortDescription": "Fiche documentée par Onisep dans ses métiers d'avenir, ce bâtisseur du Smart Farming connecte le champ et l'étable au cloud pour guider chaque décision de l'agriculteur en temps réel.",
        "longDescription": "L'agriculture vit une révolution numérique sans précédent. L'ingénieur AgriTech conçoit des architectures logicielles et matérielles robustes capables de fonctionner en milieu rural isolé (réseaux LoRaWAN, capteurs étanches basse consommation). Selon l'Onisep, il intègre les flux de données provenant de sondes capacitives, de stations météo locales et d'équipements agricoles (ISOBUS) pour envoyer des recommandations automatiques sur le smartphone du producteur (alerte gel, déclenchement d'arrosage, risque de mildiou).",
        "mainObjective": "Aider l'agriculteur à prendre des décisions ultralocalisées grâce à la donnée temps réel pour réduire les intrants et économiser l'eau.",
        "companyRole": "Innovateur technologique reliant le monde du logiciel et des objets connectés aux réalités agronomiques de terrain.",
        "workEnvironment": ["💻 Startups AgriTech, éditeurs de logiciels agricoles et bureaux R&D", "🌾 Essais d'installation de capteurs en plein champ et dans les élevages", "☁️ Environnements cloud et plateformes IoT"],
        "missions": [
            "Concevoir et déployer des réseaux de capteurs connectés basse consommation (LoRaWAN, Sigfox, NB-IoT)",
            "Développer des algorithmes d'Outils d'Aide à la Décision (OAD) basés sur des règles agronomiques",
            "Assurer l'interopérabilité des données entre tracteurs, capteurs et logiciels de gestion de ferme",
            "Mener des tests de robustesse des matériels électroniques face à la poussière, l'eau et les vibrations",
            "Former les conseillers agricoles et exploitants à l'utilisation des dashboards de pilotage"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Supervision de la flotte de capteurs connectés", "desc": "Vérification des niveaux de batterie et du taux de paquets reçus sur le réseau LoRa de 300 sondes de sol."},
            {"time": "10:30", "title": "Développement d'une API d'interconnexion", "desc": "Codage en Python d'une passerelle sécurisée pour importer les cartes de rendement de moissonneuses vers l'application mobile."},
            {"time": "14:00", "title": "Installation de terrain chez un viticulteur", "desc": "Pose de capteurs foliaires de micro-climat dans les rangs de vigne pour détecter le risque d'oïdium."},
            {"time": "16:30", "title": "Webinaire avec les utilisateurs agriculteurs", "desc": "Présentation des nouvelles fonctionnalités de prévision de gel de printemps sur le tableau de bord."}
        ],
        "skills": {
            "technical": ["Architectures IoT & protocoles basse consommation (LoRaWAN, BLE, NB-IoT)", "Développement logiciel (Python, JavaScript, API REST)", "Agronomie fondamentale et modélisation épidémiologique des cultures", "Normes d'interopérabilité agricole (ISOBUS ISO 11783, agdatahub)", "Électronique embarquée et microcontrôleurs (ESP32, STM32)"],
            "human": ["Curiosité technologique et passion du vivant", "Capacité à vulgariser la tech auprès de publics non spécialistes", "Esprit agile et réactivité de startup", "Pragmatisme face aux contraintes du terrain"],
            "tools": ["Plateformes IoT (ThingsBoard, AWS IoT Core)", "Passerelles LoRaWAN industrielles extérieures", "Sondes capacitives de sol et stations météo connectées", "Environnements de développement (VS Code, GitHub, Docker)"],
            "analytical": ["Traitement des séries temporelles de données agrométéorologiques", "Calcul d'autonomie énergétique sur panneau solaire et batterie"]
        },
        "specializations": ["IoT et capteurs connectés de sol et météo", "Colliers et capteurs biométriques pour l'élevage connecté", "Plateformes logicielles OAD (Outils d'Aide à la Décision)", "Serres bioclimatiques intelligentes et hydroponie connectée"],
        "studies": {
            "pathway": [
                {"step": "Bac +2", "title": "Prépa Scientifique ou BUT Informatique / Réseaux et Télécoms", "desc": "Excellente maîtrise du code, des réseaux et de l'électronique."},
                {"step": "Bac +5", "title": "Diplôme d'Ingénieur Agronome spécialité Numérique / AgriTech ou Ingénieur Télécoms/IoT", "desc": "Double compétence très prisée alliant science agronomique et informatique de pointe."}
            ],
            "schools": [
                {"name": "Institut Agro Montpellier (Chaire Agriculture Numérique) — France", "country": "France", "scope": "International"},
                {"name": "UniLaSalle / AgroParisTech — Spécialités Numérique Agricole", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) / ENSA Thiès — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification AWS IoT ou Azure IoT Developer", "Certification réseau LoRa Alliance"],
            "schoolSubjects": ["Internet des Objets (IoT)", "Agronomie", "Programmation informatique", "Bases de données"]
        },
        "career": {
            "sectors": ["Startups AgriTech et pépinières d'innovation", "Grands constructeurs de machinisme et équipementiers", "Grandes coopératives agricoles créant des filiales digitales", "Instituts techniques agricoles (Arvalis, ACTA)"],
            "employerTypes": ["Éditeurs de logiciels agricoles (SaaS)", "Constructeurs de matériel connecté", "Startups du Smart Farming"],
            "evolution": "Ingénieur IoT junior ➔ Lead Developer AgriTech ➔ Directeur Technique (CTO) de startup ➔ Directeur de la transformation numérique d'un groupe agricole",
            "pros": "Poste au cœur de l'innovation mondiale la plus excitante, atmosphère dynamique de la tech, utilité écologique immédiate (économie d'eau et de produits).",
            "cons": "Contraintes de connectivité en 'zones blanches' rurales isolées, nécessité de convaincre des exploitants parfois réticents à multiplier les abonnements digitaux."
        },
        "gettingStarted": {
            "beginnerProject": "Connecter une sonde d'humidité de sol à une carte ESP32 pour envoyer une notification smartphone lorsque la terre est sèche.",
            "intermediateProject": "Déployer une station météo miniature connectée au réseau LoRaWAN gratuit The Things Network (TTN).",
            "advancedProject": "Créer une application web complète affichant sur carte dynamique les données d'humidité de 10 parcelles avec alerte d'irrigation par SMS.",
            "portfolioIdeas": ["Dépôt GitHub d'une passerelle de données capteur-cloud", "Documentation technique d'un réseau LoRaWAN agricole"]
        },
        "aiImpact": {
            "level": "Révolutionnaire",
            "summary": "L'IA transforme les téraoctets de données brutes des capteurs en recommandations ultra-personnalisées générées en langage naturel pour l'agriculteur.",
            "automatedTasks": ["Détection automatique des pannes ou dérives d'étalonnage des capteurs", "Agrégation et nettoyage en temps réel des flux de données hétérogènes"],
            "emergingSkills": ["Edge AI (modèles d'IA exécutés directement sur le microcontrôleur au champ sans connexion 4G)", "Jumeaux numériques d'exploitations agricoles"],
            "humanEdge": "La compréhension du métier d'agriculteur pour concevoir des applications simples, robustes et utilisables avec des doigts terreux au soleil."
        },
        "africaContext": {
            "senegalInsight": "En Afrique, l'AgriTech saute l'étape des ordinateurs pour passer directement au mobile : capteurs d'irrigation solaire par USSD/SMS, stations météo locales et micro-assurance paramétrique sur smartphone (ex: startups Tolbi, Jokalante).",
            "localSectors": ["Hubs technologiques de Dakar (Dakar American University of Science and Technology, Sonatel Innovation)", "Startups AgriTech ouest-africaines (Tolbi, Aywajieune)", "Projets d'agriculture intelligente de l'ENSA Thiès"],
            "remoteWork": "Développement logiciel en télétravail total possible, déploiements terrain sur site.",
            "entrepreneurship": "Création d'une startup fournissant des kits d'irrigation intelligente solaire pilotables par WhatsApp pour les maraîchers africains."
        },
        "relatedJobSlugs": ["telepilote-drone-agricole", "data-analyste-agricole", "ingenieur-machinisme-agricole", "ingenieur-irrigation-hydraulique"],
        "connectedFamilies": ["technologies-donnees", "industrie-ingenierie", "environnement-climat"],
        "resources": [{"type": "article", "title": "Fiche Métier Ingénieur AgriTech Onisep", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/ingenieur-agronome", "source": "Onisep"}],
        "sources": ["Onisep", "La Ferme Digitale", "Chaire Agriculture Numérique (Institut Agro)", "Tolbi"],
        "interests": ["technologie-code", "resoudre-problemes"],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Selon La Ferme Digitale et l'Onisep, la France compte plus de 150 startups AgriTech et le secteur a levé plus de 500 millions d'euros pour accélérer la digitalisation des fermes.",
            "pourquoi": "L'agriculture de précision permet d'épandre l'engrais au kilo près et l'eau au litre près, faisant rimer économies d'argent et protection de l'environnement.",
            "a_retenir": "Le profil hybride idéal pour ceux qui aiment à la fois le code informatique et les grands espaces de la nature."
        }
    },
    {
        "id": "telepilote-drone-agricole",
        "slug": "telepilote-drone-agricole",
        "title": "Télépilote de Drone Agricole / Opérateur Télédétection",
        "aliases": ["Pilote de drone en agriculture", "Expert drone agricole", "Opérateur imagerie aérienne agricole"],
        "icon": "🛸",
        "image": "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "AgriTech, Numérique & Agriculture de Précision",
        "domainId": "agritech-agriculture-numerique",
        "subdomain": "Drones, imagerie & télédétection",
        "sourceOnisep": False,
        "sourceStudyrama": True,
        "isEmerging": True,
        "level": "Brevet de Télépilote Professionnel (DGAC) + formation spécialisée télédétection agricole",
        "salary": "🇫🇷 France : 2 000 - 3 200 € net/mois en entreprise ou facturation journalière 600 - 1 200 €/jour en indépendant (Source : Studyrama / Fiches Drones) • 🇸🇳 Sénégal : 300 000 - 1 100 000 FCFA / mois (Source : Prestataires de services par drone)",
        "simpleDefinition": "Le télépilote de drone agricole survole les cultures avec des drones équipés de caméras multispectrales pour cartographier les besoins en azote, détecter les maladies, compter les pieds et parfois pulvériser avec ultra-précision.",
        "shortDescription": "Fiche documentée par Studyrama, cet aviateur des champs offre à l'agriculteur une vision aérienne centimétrique pour cibler ses interventions au mètre carré près.",
        "longDescription": "Le drone a remplacé les survols coûteux en avion ou les images satellites trop espacées. Le télépilote prépare ses plans de vol automatiques, pilote le drone au-dessus de centaines d'hectares en toute sécurité, puis traite les clichés par photogrammétrie. Grâce aux capteurs proches infrarouges mesurant l'indice NDVI de vigueur végétale, il génère des cartes de modulation d'azote que le tracteur injectera directement dans son épandeur pour ne nourrir que les zones qui en ont besoin.",
        "mainObjective": "Fournir des cartes agronomiques haute résolution pour optimiser les rendements et diviser l'usage des engrais et produits phytosanitaires.",
        "companyRole": "Prestataire de services technologiques de pointe et éclaireur aérien des agronomes.",
        "workEnvironment": ["🌾 En plein champ sur les chemins de parcelles avec sa station de pilotage", "💻 Bureau pour le traitement photogrammétrique des images par ordinateur", "🚗 Déplacements constants au gré des fenêtres météo sans vent"],
        "missions": [
            "Préparer les missions de vol et déposer les déclarations de vol auprès de l'aviation civile (DGAC)",
            "Déployer et piloter sur le terrain des drones quadrirotors ou des ailes volantes longue portée",
            "Capturer des images avec caméras multispectrales (vert, rouge, red-edge, proche infrarouge) et thermiques",
            "Traiter les données par photogrammétrie pour créer des orthomosaïques géoréférencées",
            "Traduire les cartes NDVI en cartes de préconisation de fertilisation compatibles avec les consoles GPS des tracteurs"
        ],
        "typicalDay": [
            {"time": "07:00", "title": "Vol matinal avant la montée du vent", "desc": "Décollage d'une aile volante pour survoler 150 hectares de blé en 45 minutes avec caméra multispectrale."},
            {"time": "09:30", "title": "Mission de lâcher de trichogrammes", "desc": "Survol d'un champ de maïs avec un drone disperseur de capsules de micro-guêpes pour lutter bio contre la pyrale."},
            {"time": "14:00", "title": "Traitement des images sur station graphique", "desc": "Assemblage photogrammétrique sous Pix4D et calcul des indices de biomasse végétale NDVI."},
            {"time": "16:30", "title": "Export des fichiers de modulation", "desc": "Génération du fichier de modulation d'engrais en format shapefile et envoi sur la clé USB du tracteur du client."}
        ],
        "skills": {
            "technical": ["Réglementation aérienne et pilotage professionnel de drone (scénarios S1, S2, S3 / catégories européennes)", "Photogrammétrie et assemblage d'images aériennes", "Télédétection et calcul des indices de végétation (NDVI, NDRE)", "Systèmes d'Information Géographique (QGIS) et formats de guidage agricole (Shape, ISO-XML)", "Maintenance et calibrage des capteurs multispectraux"],
            "human": ["Rigueur absolue dans le respect des règles de sécurité aérienne", "Sens de l'observation et réactivité face aux imprévus météo", "Pédagogie commerciale pour valoriser les cartes produites", "Autonomie sur le terrain"],
            "tools": ["Drones professionnels (DJI Phantom 4 Multispectral, Mavic 3 Enterprise, WingtraOne)", "Caméras multispectrales (MicaSense RedEdge)", "Logiciels de photogrammétrie (Pix4Dfields, Agisoft Metashape)", "Stations GNSS RTK centimétriques au sol"],
            "analytical": ["Calibrage radiométrique par cible d'étalonnage au sol", "Algorithmes de comptage automatique de plants par vision"]
        },
        "specializations": ["Cartographie de la fertilisation azotée (grandes cultures)", "Comptage des manquants et vigueur en viticulture et vergers", "Lâchers de biocontrôle par drone (trichogrammes contre la pyrale)", "Thermographie aérienne pour la détection de fuites d'irrigation"],
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Bac scientifique, technique ou professionnel agricole", "desc": "Bases générales nécessaires pour comprendre les contraintes techniques."},
                {"step": "Brevet d'État", "title": "Brevet Théorique de Télépilote de Drone (DGAC)", "desc": "Examen obligatoire pour tout vol professionnel d'aéronef télépiloté."},
                {"step": "Formation spécialisée", "title": "Formation Télédétection et Imagerie Agricole par Drone", "desc": "Formation pratique d'un à plusieurs mois en centre agréé (Pix4D, centres spécialisés)."}
            ],
            "schools": [
                {"name": "Centres de formation de télépilotes professionnels agréés DGAC — France", "country": "France", "scope": "France"},
                {"name": "Institut Agro / UniLaSalle — Modules Drone et Numérique", "country": "France", "scope": "France"},
                {"name": "Centre de formation aux métiers du drone civil (Dakar, Sénégal)", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat d'Aptitude Théorique de Télépilote (CATT - DGAC)", "Attestation de Formation Pratique au Pilotage"],
            "schoolSubjects": ["Aéronautique", "Météorologie", "Cartographie SIG", "Agronomie"]
        },
        "career": {
            "sectors": ["Entreprises de services par drones spécialisées en agriculture", "Grandes coopératives agricoles disposant d'un pôle drone interne", "Instituts techniques et organismes de recherche (INRAE, Arvalis)", "Entreprises d'expertise d'assurance agricole après orage ou grêle"],
            "employerTypes": ["Sociétés de prestations de services par drone", "Coopératives agricoles", "Statut d'auto-entrepreneur ou dirigeant de TPE"],
            "evolution": "Pilote opérateur de terrain ➔ Expert en analyse de données de télédétection ➔ Responsable pôle imagerie coopérative ➔ Dirigeant d'entreprise de services aériens",
            "pros": "Métier à haute technologie très ludique, travail au grand air, impact écologique direct (suppression des engrais superflus).",
            "cons": "Forte dépendance à la météo (impossible de voler sous la pluie ou par grand vent), saisonnalité des vols concentrés sur le printemps."
        },
        "gettingStarted": {
            "beginnerProject": "Obtenir son certificat théorique de télépilote de drone de loisir sur le site officiel de la DGAC (AlphaTango).",
            "intermediateProject": "Réaliser une orthomosaïque de 2 hectares avec un petit drone grand public et le logiciel libre OpenDroneMap.",
            "advancedProject": "Survoler une parcelle en multispectral, calibrer les données sur réflectance et générer une carte de modulation d'azote sous QGIS.",
            "portfolioIdeas": ["Orthomosaïque haute résolution annotée", "Carte comparatrice NDVI vs carte d'application réelle d'engrais"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "Des réseaux de neurones convolutionnels détectent et comptent automatiquement les mauvaises herbes, fleurs ou pieds manquants sur des images de 10 000 pixels de large.",
            "automatedTasks": ["Planification automatique des trajectoires d'évitement d'obstacles", "Détection automatique des foyers de maladies par deep learning"],
            "emergingSkills": ["Pilotage d'essaims de drones autonomes", "Pulvérisation ultralocalisée par drone gros porteur"],
            "humanEdge": "Le pilotage d'urgence en cas de coup de vent soudain et l'analyse agronomique critique des résultats avec le paysan."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les drones révolutionnent la gestion des grands périmètres irrigués de la vallée du fleuve et les vergers de manguiers : comptage des arbres, détection du stress hydrique et pulvérisation ciblée contre les chenilles légionnaires sans exposer les ouvriers aux produits.",
            "localSectors": ["Projets d'agriculture de précision de la vallée du fleuve Sénégal (Saint-Louis, Dagana)", "Grandes fermes exportatrices de fruits et légumes (Kirène, Grands Domaines du Sénégal)", "Startups de cartographie par drone à Dakar"],
            "remoteWork": "Vols obligatoirement sur place, traitement des cartes faisable à distance.",
            "entrepreneurship": "Création d'une agence de services de cartographie et pulvérisation de précision par drone pour les producteurs fruitiers et rizicoles ouest-africains."
        },
        "relatedJobSlugs": ["data-analyste-agricole", "ingenieur-agritech", "ingenieur-experimentation-vegetale", "cerealier"],
        "connectedFamilies": ["audiovisuel-cinema", "technologies-donnees", "securite-defense"],
        "resources": [{"type": "article", "title": "Fiche Télépilote de Drone Studyrama", "url": "https://www.studyrama.com/formations/fiches-metiers/transport-logistique/telepilote-de-drone-107765", "source": "Studyrama"}],
        "sources": ["Studyrama", "DGAC", "Fédération Professionnelle du Drone Civil (FPDC)"],
        "interests": ["technologie-code", "explorer-decouvrir"],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Selon Studyrama et les instituts agricoles, un seul survol de drone permet de moduler la dose d'azote sur un champ de blé, économisant en moyenne 20 à 30 kg d'engrais par hectare tout en augmentant la qualité de la récolte.",
            "pourquoi": "L'œil humain ne voit que le vert des feuilles, alors que la caméra multispectrale du drone 'voit' le rayonnement infrarouge qui révèle l'activité exacte de photosynthèse de chaque plante.",
            "a_retenir": "Le mariage parfait entre la passion du vol et la précision scientifique au service d'une agriculture zéro gaspillage."
        }
    },
    {
        "id": "data-analyste-agricole",
        "slug": "data-analyste-agricole",
        "title": "Data Analyste Agricole / Spécialiste IA & Données Agronomiques",
        "aliases": ["Agri data scientist", "Analyste de données agronomiques", "Consultant big data agricole"],
        "icon": "📈",
        "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "AgriTech, Numérique & Agriculture de Précision",
        "domainId": "agritech-agriculture-numerique",
        "subdomain": "Big Data & IA agronomique",
        "sourceOnisep": True,
        "sourceStudyrama": False,
        "isEmerging": True,
        "level": "Bac +5 (Master Data Science ou Diplôme d'Ingénieur Agronome spécialisé Bio-informatique/Data)",
        "salary": "🇫🇷 France : 3 200 - 4 300 € brut/mois débutant (~38 400 - 51 600 €/an, Source : Onisep / APEC) • 🇸🇳 International / Afrique : 700 000 - 2 000 000 FCFA / mois (Source : Organismes de recherche, banques de données agricoles)",
        "simpleDefinition": "Le data analyste agricole collecte, nettoie et croise d'immenses masses de données (images satellites, capteurs de sol, données météo historiques, rendements de moissonneuses) pour créer des modèles d'intelligence artificielle prédisant récoltes, maladies et cours du marché.",
        "shortDescription": "Fiche documentée par Onisep, cet explorateur de la donnée agricole transforme les téraoctets des champs connectés en insights agronomiques stratégiques.",
        "longDescription": "Avec les tracteurs guidés par satellite, les sondes IoT et les constellations de satellites d'observation terrestre (Copernicus Sentinel), l'agriculture est devenue un secteur de pointe du Big Data. Le data analyste agricole écrit des algorithmes sous Python et R pour nettoyer ces données bruitées par la météo et construire des modèles de prédiction du rendement du blé trois mois avant la moisson, ou pour anticiper les attaques de criquets ou de rouille brune.",
        "mainObjective": "Transformer les données massives de l'agriculture en prédictions fiables pour sécuriser la production alimentaire et anticiper les crises climatiques.",
        "companyRole": "Cerveau analytique créateur des algorithmes d'intelligence agronomique prédictive.",
        "workEnvironment": ["💻 Bureaux modernes de startups, coopératives ou centres de recherche", "🏠 Télétravail fréquent sur serveurs distants et GPU cloud", "🌾 Échanges réguliers avec les ingénieurs agronomes de terrain pour calibrer les modèles"],
        "missions": [
            "Collecter et harmoniser des jeux de données agronomiques hétérogènes (sols, météo, satellites, moissonneuses)",
            "Concevoir et entraîner des modèles de machine learning et deep learning prédictifs",
            "Évaluer la précision des prévisions de rendement en les comparant aux pesées réelles de récolte",
            "Créer des dashboards interactifs et des visualisations cartographiques claires pour les conseillers",
            "Veiller à la protection et à la souveraineté des données privées des agriculteurs (RGPD, charte Data-Agri)"
        ],
        "typicalDay": [
            {"time": "09:00", "title": "Pipeline de traitement des données satellites Sentinel-2", "desc": "Automatisation du téléchargement des bandes spectrales et suppression des pixels couverts par des nuages."},
            {"time": "11:00", "title": "Entraînement d'un modèle de prédiction de rendement sous Python", "desc": "Ajustement des hyperparamètres d'un algorithme XGBoost croisant 10 ans de météo et de dates de semis."},
            {"time": "14:30", "title": "Réunion avec les généticiens semenciers", "desc": "Présentation des corrélations découvertes entre résistance génétique à la sécheresse et profils thermiques foliaires."},
            {"time": "16:30", "title": "Déploiement du modèle sur l'API de production", "desc": "Conteneurisation Docker du script prédictif pour alimenter l'application mobile des agriculteurs."}
        ],
        "skills": {
            "technical": ["Programmation scientifique en Python (Pandas, Scikit-learn, PyTorch) et R", "Traitement de données spatiales et télédétection (Rasterio, GeoPandas, Google Earth Engine)", "Architectures Big Data et bases de données spatiales (PostGIS, SQL, Cloud AWS/GCP)", "Mathématiques, biostatistiques et machine learning", "Compréhension fine des cycles physiologiques des cultures"],
            "human": ["Rigueur méthodologique et esprit critique face aux biais statistiques", "Capacité à collaborer avec des agronomes purs sans jargon geek", "Créativité pour trouver des angles d'analyse inédits", "Autonomie et curiosité intellectuelle permanente"],
            "tools": ["Jupyter Notebooks et environnements cloud GPU", "Google Earth Engine et plateformes Copernicus", "Bases de données SQL et GeoPandas", "Outils de dataviz (Power BI, Streamlit, Tableau)"],
            "analytical": ["Validation croisée de modèles prédictifs spatio-temporels", "Détection des anomalies de données capteurs au champ"]
        },
        "specializations": ["Prédiction des rendements et modélisation de récolte", "Vision par ordinateur pour le phénotypage haut débit des plantes", "Analyse de données génomiques végétales et animales", "Modélisation des risques climatiques pour les assurances agricoles"],
        "studies": {
            "pathway": [
                {"step": "Bac +2", "title": "Prépa Scientifique ou Licence Mathématiques / Informatique", "desc": "Bases solides en mathématiques, algèbre linéaire et programmation."},
                {"step": "Bac +5", "title": "Master Data Science / IA ou Diplôme d'Ingénieur Agronome spécialité Bio-informatique/Data", "desc": "La double culture agronomie + data science est la plus recherchée sur le marché."}
            ],
            "schools": [
                {"name": "Institut Agro / AgroParisTech (Filières Data Science pour le Vivant) — France", "country": "France", "scope": "International"},
                {"name": "Universités d'Orsay, Sorbonne, Lyon — Masters Data Science", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique (ESP Dakar - Chaire IA) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certifications Cloud Data Engineer (Google Cloud / AWS)", "Certification Data-Agri (éthique des données agricoles)"],
            "schoolSubjects": ["Statistiques avancées", "Machine Learning", "Télédétection", "Agronomie générale"]
        },
        "career": {
            "sectors": ["Grandes entreprises semencières mondiales (Vilmorin, Corteva, Syngenta)", "Instituts de recherche publique (INRAE, Cirad, ISRA)", "Startups AgriTech et plateformes de données agricoles", "Compagnies d'assurance et réassurance agricole mondiales"],
            "employerTypes": ["Multinationales de l'agro-fourniture", "Centres de recherche agronomique", "Cabinets de conseil en modélisation climatique"],
            "evolution": "Data Analyste junior ➔ Data Scientist agricole senior ➔ Lead Data Architecte du vivant ➔ Chief Data Officer (CDO) de groupe agroalimentaire",
            "pros": "Salaires parmi les plus élevés du secteur agricole, forte possibilité de télétravail international, travail sur des défis mondiaux majeurs (sécurité alimentaire sous réchauffement climatique).",
            "cons": "Données agricoles réelles souvent très bruitées par les aléas climatiques rendant l'apprentissage des modèles complexe, travail assis devant écran prolongé."
        },
        "gettingStarted": {
            "beginnerProject": "Télécharger un jeu de données public de rendements de blé sur Kaggle et analyser les corrélations avec la pluviométrie.",
            "intermediateProject": "Écrire un script sous Google Earth Engine pour extraire et tracer l'évolution du NDVI d'une parcelle sur 5 ans à partir de Sentinel-2.",
            "advancedProject": "Entraîner un modèle de deep learning sous PyTorch capable de reconnaître 10 maladies foliaires de la tomate à partir d'un jeu de photos de feuilles.",
            "portfolioIdeas": ["Dashboard interactif Streamlit d'analyse de rendements", "Notebook documenté d'extraction de séries temporelles satellites"]
        },
        "aiImpact": {
            "level": "Révolutionnaire",
            "summary": "Ce professionnel est le créateur direct des solutions d'IA agricole qui révolutionneront le secteur dans les vingt prochaines années.",
            "automatedTasks": ["Nettoyage automatique des valeurs aberrantes de capteurs", "Pipeline automatique de segmentation d'images satellites"],
            "emergingSkills": ["Entraînement de Foundation Models dédiés aux biosciences végétales", "IA explicable pour prouver aux agriculteurs le bien-fondé d'une préconisation"],
            "humanEdge": "La confrontation des corrélations statistiques trouvées par l'algorithme aux lois réelles et immuables de la biologie végétale."
        },
        "africaContext": {
            "senegalInsight": "En Afrique de l'Ouest, les data analystes agricoles exploitent les satellites pour créer des alertes précoces contre les sécheresses sahéliennes et les invasions de criquets pèlerins, sauvant des millions de personnes de la famine (projets Cirad, CILSS, FAO).",
            "localSectors": ["Centre Régional AGRHYMET (CILSS Niamey / Dakar)", "Centre de Suivi Écologique (CSE Dakar)", "Centres de recherche agronomique (ISRA, Cirad)"],
            "remoteWork": "Télétravail total parfaitement possible avec connexion Internet haut débit.",
            "entrepreneurship": "Création d'une plateforme d'intelligence de marché prédisant les cours hebdomadaires des légumes à Dakar pour éviter les pertes post-récolte."
        },
        "relatedJobSlugs": ["ingenieur-agritech", "telepilote-drone-agricole", "ingenieur-experimentation-vegetale", "ingenieur-agronome"],
        "connectedFamilies": ["technologies-donnees", "recherche-sciences", "environnement-climat"],
        "resources": [{"type": "article", "title": "Fiche Data Analyste Onisep", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/data-analyst", "source": "Onisep"}],
        "sources": ["Onisep", "INRAE", "AgDataHub", "La Ferme Digitale"],
        "interests": ["technologie-code", "resoudre-problemes"],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Selon l'Onisep et l'INRAE, la constellation européenne de satellites Sentinel photographie gratuitement chaque parcelle agricole de France et de la planète tous les 5 jours avec une résolution de 10 mètres.",
            "pourquoi": "Cette mine d'or colossale de données ouvertes permet aux data analystes agricoles de suivre la santé végétale de continents entiers en direct depuis leur bureau.",
            "a_retenir": "Le profil le plus moderne et convoité de l'agriculture du futur, où les algorithmes sauvent les récoltes."
        }
    },

    # -----------------------------------------------------------------------
    # 11. ENTREPRENEURIAT, INSTALLATION & DÉVELOPPEMENT RURAL
    # -----------------------------------------------------------------------
    {
        "id": "chef-exploitation-agricole",
        "slug": "chef-exploitation-agricole",
        "title": "Chef d'Exploitation Agricole / Entrepreneur Agricole",
        "aliases": ["Agriculteur exploitant", "Cheffe d'exploitation", "Agri-entrepreneur", "Fermier chef d'entreprise"],
        "icon": "🚜",
        "image": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Entrepreneuriat, Installation & Développement Rural",
        "domainId": "entrepreneuriat-developpement-rural",
        "subdomain": "Entrepreneuriat & gestion d'exploitation",
        "sourceOnisep": True,
        "sourceStudyrama": True,
        "isEmerging": False,
        "level": "Bac Pro CGEA ou BTSA ACSE (Diplôme conférant la Capacité Professionnelle Agricole)",
        "salary": "🇫🇷 France : Rémunération variable selon taille et filière : 1 800 - 5 000 €+ net/mois + constitution d'un patrimoine foncier et matériel (Source : Onisep / Chambres d'Agriculture) • 🇸🇳 Sénégal : 300 000 - 2 500 000 FCFA / mois selon récoltes",
        "simpleDefinition": "Le chef d'exploitation agricole est le dirigeant d'une entreprise agricole : il prend toutes les décisions stratégiques, gère les investissements, cultive la terre ou élève les animaux et vend sa production.",
        "shortDescription": "Fiche documentée par Onisep et Studyrama, c'est le chef d'orchestre polyvalent du monde rural qui allie savoir-faire agronomique ancestral, pilotage financier de pointe et amour de la liberté d'entreprendre.",
        "longDescription": "Être agriculteur aujourd'hui, c'est diriger une véritable entreprise. Le chef d'exploitation décide de l'assolement de ses terres, choisit ses variétés et ses bêtes, pilote des machines de haute technologie valant des centaines de milliers d'euros, négocie les contrats de vente avec les coopératives ou développe la vente directe en circuit court. Il doit être à la fois agronome, mécanicien, gestionnaire, juriste, commerçant et stratège face aux caprices du climat.",
        "mainObjective": "Faire prospérer son exploitation agricole de manière autonome et durable en assurant un revenu décent et la transmission de son patrimoine.",
        "companyRole": "Propriétaire ou gérant d'entreprise, employeur de main-d'œuvre et décisionnaire ultime.",
        "workEnvironment": ["🌾 Terres de cultures, prairies, bâtiments d'élevage et cours de ferme", "🚜 Cabine climatisée de tracteurs connectés et ateliers de réparation", "💻 Bureau pour le pilotage comptable, les déclarations PAC et les ventes"],
        "missions": [
            "Définir la stratégie pluriannuelle de l'exploitation (choix des cultures, transition bio, énergies renouvelables)",
            "Conduire personnellement ou superviser l'ensemble des travaux des champs et des soins aux troupeaux",
            "Gérer la trésorerie, négocier les emprunts bancaires et piloter la rentabilité de chaque atelier",
            "Acheter les intrants au meilleur coût (semences, carburant, amendements) et commercialiser les récoltes",
            "Recruter, former et encadrer les ouvriers agricoles et saisonniers en garantissant leur sécurité"
        ],
        "typicalDay": [
            {"time": "06:00", "title": "Tournée matinale de la ferme", "desc": "Vérification des abreuvoirs, observation météo et lancement des chantiers de la journée avec l'équipe."},
            {"time": "08:30", "title": "Travaux de plein champ ou d'atelier", "desc": "Conduite du tracteur pour le semis de printemps ou la récolte des foins selon la saison."},
            {"time": "14:00", "title": "Gestion d'entreprise et achats", "desc": "Négociation avec le commercial de la coopérative pour l'achat groupé d'engrais organique et vente d'un lot de blé."},
            {"time": "18:00", "title": "Clôture de la journée et comptabilité", "desc": "Enregistrement des interventions de la journée dans le cahier d'épandage réglementaire sur logiciel."}
        ],
        "skills": {
            "technical": ["Polyvalence technique totale (agronomie, élevage, machinisme, hydraulique)", "Gestion comptable, fiscale et financière d'entreprise", "Stratégie de commercialisation (coopératives, négoce, circuits courts)", "Connaissance exhaustive de la réglementation environnementale et de la PAC", "Management et leadership d'équipes rurales"],
            "human": ["Passion chevillée au corps et goût de l'indépendance", "Résilience mentale face aux aléas climatiques et de marché", "Sens aigu des responsabilités patrimoniales", "Polyvalence et capacité de décision rapide"],
            "tools": ["Flotte complète d'agroéquipements modernes", "Logiciels de gestion parcellaire et comptable (Isagri, Smag Farmer)", "Consoles de guidage GPS RTK", "Smartphones pour le pilotage à distance des installations"],
            "analytical": ["Calcul de la marge nette par hectare et de l'EBE", "Optimisation du calendrier des travaux selon la météo"]
        },
        "specializations": ["Grandes cultures céréalières et oléagineuses", "Élevage laitier ou allaitant haute performance", "Maraîchage et arboriculture en circuits courts / vente directe", "Polyculture-élevage diversifiée avec agritourisme ou méthanisation"],
        "studies": {
            "pathway": [
                {"step": "Bac Pro / Bac", "title": "Bac Pro CGEA (Conduite et Gestion de l'Entreprise Agricole)", "desc": "Diplôme minimum requis pour obtenir la Capacité Professionnelle Agricole (CPA)."},
                {"step": "Bac +2", "title": "BTSA ACSE (Analyse, Conduite et Stratégie de l'Entreprise Agricole)", "desc": "Diplôme recommandé pour acquérir les réflexes de vrai chef d'entreprise moderne."},
                {"step": "Bac +5", "title": "Diplôme d'Ingénieur Agronome", "desc": "De plus en plus d'ingénieurs choisissent aujourd'hui de s'installer à la terre comme exploitants."}
            ],
            "schools": [
                {"name": "Lycées agricoles de France dispensant le Bac Pro CGEA et BTS ACSE", "country": "France", "scope": "France"},
                {"name": "Écoles d'Ingénieurs Agronomes (UniLaSalle, Institut Agro, AgroParisTech)", "country": "France", "scope": "International"},
                {"name": "Centre d'Initiation Horticole / ISFAR Bambey — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Capacité Professionnelle Agricole (CPA indispensable pour la Dotation Jeune Agriculteur)", "Certiphyto Décideur en Exploitation Agricole"],
            "schoolSubjects": ["Agronomie", "Gestion d'entreprise", "Zootechnie", "Machinisme agricole"]
        },
        "career": {
            "sectors": ["Exploitations individuelles ou sociétaires (GAEC, EARL, SCEA)", "Fermes collectives et tiers-lieux agricoles nourriciers", "Grandes entreprises agricoles familiales de plusieurs générations", "Fermes urbaines innovantes et microfermes bio-intensives"],
            "employerTypes": ["Statut d'exploitant agricole indépendant (chef d'entreprise)", "Gérant de société civile d'exploitation agricole"],
            "evolution": "Jeune agriculteur installé ➔ Exploitant confirmé ➔ Responsable d'organismes agricoles (président de CUMA, administrateur de coopérative, élu chambre d'agriculture)",
            "pros": "Liberté absolue d'être son propre patron, fierté immense de nourrir ses concitoyens et de façonner la terre, vie saine en pleine nature, transmission d'un patrimoine à ses enfants.",
            "cons": "Lourdeur des investissements initiaux (centaines de milliers d'euros d'emprunts), absence de congés faciles en élevage, aléas climatiques (sécheresse, grêle) pouvant anéantir un an de travail."
        },
        "gettingStarted": {
            "beginnerProject": "Effectuer des stages de plusieurs mois dans trois exploitations différentes (grandes cultures, élevage, maraîchage) pour tester ses affinités.",
            "intermediateProject": "Suivre le Plan de Professionnalisation Personnalisé (PPP) auprès de la Chambre d'Agriculture de son département.",
            "advancedProject": "Rédiger le Plan d'Entreprise (PE) complet sur 5 ans pour solliciter la Dotation Jeune Agriculteur (DJA).",
            "portfolioIdeas": ["Étude de marché d'un projet d'installation", "Bilan financier prévisionnel d'une reprise de ferme"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA devient le bras droit stratégique du chef d'exploitation, lui recommandant chaque matin les parcelles à récolter ou à traiter en priorité.",
            "automatedTasks": ["Saisie automatique du registre parcellaire par géolocalisation du tracteur", "Comparaison automatisée des offres de rachat de céréales"],
            "emergingSkills": ["Pilotage de robots désherbeurs autonomes", "Gestion de la transition énergétique de la ferme (panneaux solaires, biogaz)"],
            "humanEdge": "L'intuition paysanne, le courage face aux tempêtes et l'amour viscéral de sa terre que nulle machine ne connaîtra jamais."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'entrepreneuriat agricole moderne attire une nouvelle génération de cadres et diplômés urbains qui investissent dans des fermes intégrées modernes (mangues, maraîchage goutte-à-goutte, aviculture, moutons Ladoum) pour créer de la richesse locale.",
            "localSectors": ["Pôles d'agro-business des Niayes et de la Petite Côte", "Grandes fermes de la vallée du fleuve Sénégal (Podor, Saint-Louis)", "Agri-entrepreneuriat des jeunes appuyé par la DER (Délégation à l'Entrepreneuriat Rapide)"],
            "remoteWork": "Gestion stratégique hybride possible, présence physique indispensable aux moments clés.",
            "entrepreneurship": "Création d'une ferme agroécologique intégrée combinant maraîchage goutte-à-goutte, arboriculture fruitière et petit élevage avicole rentable."
        },
        "relatedJobSlugs": ["directeur-cooperative-agricole", "conseiller-gestion-agricole", "cerealier", "maraicher"],
        "connectedFamilies": ["gestion-finance", "commerce-marketing", "environnement-climat"],
        "resources": [{"type": "article", "title": "Fiche Agriculteur / Agricultrice Onisep", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/agriculteur-agricultrice", "source": "Onisep"}],
        "sources": ["Onisep", "Studyrama", "Chambres d'Agriculture", "Jeunes Agriculteurs"],
        "interests": ["nature-environnement", "construire-fabriquer"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon l'Onisep et le Ministère de l'Agriculture, près de 200 000 exploitants agricoles français partiront à la retraite d'ici 2030, représentant un défi immense de renouvellement des générations.",
            "pourquoi": "L'accès à la terre et le coût élevé des reprises nécessitent l'installation de nouveaux profils souvent non issus du milieu agricole (NIMA), porteurs de projets innovants.",
            "a_retenir": "Le plus ancien et le plus noble des métiers de l'humanité, aujourd'hui métamorphosé en une aventure entrepreneuriale de haute technologie."
        }
    },
    {
        "id": "directeur-cooperative-agricole",
        "slug": "directeur-cooperative-agricole",
        "title": "Directeur de Coopérative Agricole / Manager Agro-Territorial",
        "aliases": ["Directeur de coopérative", "Directrice d'organisme stockeur", "Manager de filière coopérative"],
        "icon": "🏛️",
        "image": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Entrepreneuriat, Installation & Développement Rural",
        "domainId": "entrepreneuriat-developpement-rural",
        "subdomain": "Management coopératif & développement territorial",
        "sourceOnisep": False,
        "sourceStudyrama": True,
        "isEmerging": False,
        "level": "Bac +5 (Diplôme d'Ingénieur Agronome ou Master Management des Entreprises)",
        "salary": "🇫🇷 France : 3 800 - 5 500 €+ brut/mois selon taille de la coopérative (~45 000 - 75 000 €/an, Source : Studyrama / La Coopération Agricole) • 🇸🇳 Sénégal : 600 000 - 2 200 000 FCFA / mois (Source : Grandes unions de coopératives)",
        "simpleDefinition": "Le directeur de coopérative agricole pilote une entreprise collective appartenant aux agriculteurs adhérents : il gère la collecte des grains ou du lait, la transformation industrielle, la vente aux grands marchés et l'approvisionnement en semences.",
        "shortDescription": "Fiche documentée par Studyrama, ce grand capitaine d'industrie rurale allie vision managériale d'envergure et valeurs démocratiques du modèle coopératif ('un homme, une voix').",
        "longDescription": "Les coopératives agricoles françaises (comme InVivo, Agrial, Sodiaal, Axéréal) pèsent des milliards d'euros de chiffre d'affaires et 3 marques alimentaires sur 4 en supermarché. Le directeur de coopérative rend compte à un conseil d'administration composé exclusivement d'agriculteurs élus. Il manage des centaines de salariés (silos, usines, agronomes de terrain), négocie les contrats de vente avec la grande distribution internationale et investit dans les infrastructures territoriales pour redistribuer un maximum de valeur ajoutée à ses adhérents paysans.",
        "mainObjective": "Développer la performance économique et industrielle de la coopérative pour valoriser au prix le plus juste la production des agriculteurs membres.",
        "companyRole": "Directeur général exécutif, stratège d'entreprise et garant des valeurs coopératives de solidarité territoriale.",
        "workEnvironment": ["🏢 Siège de la coopérative et comités de direction", "🏭 Silos portuaires, usines de transformation et plateformes logistiques", "🌾 Assemblées générales d'agriculteurs et réunions de terrain régionales"],
        "missions": [
            "Mettre en œuvre la stratégie validée par le Conseil d'Administration d'agriculteurs",
            "Superviser les opérations de collecte, stockage des grains, logistique ferroviaire/portuaire et transformation",
            "Négocier les contrats de vente de gros volumes avec les meuniers, industriels et marchés internationaux",
            "Gérer les finances, les investissements d'infrastructures lourdes et la redistribution des ristournes aux adhérents",
            "Impulser la transition agroécologique et bas-carbone sur l'ensemble du bassin de production de la coopérative"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Comité de direction hebdomadaire", "desc": "Revue des flux de collecte de grains des silos et bilan des cours de marché de l'Euronext."},
            {"time": "11:00", "title": "Rendez-vous avec le Président de la coopérative", "desc": "Point stratégique avec l'agriculteur président sur le projet d'investissement dans un séchoir à maïs biomasse."},
            {"time": "14:30", "title": "Négociation commerciale avec un grand industriel", "desc": "Finalisation d'un contrat pluriannuel de fourniture de blé meunier tracé sous charte durable."},
            {"time": "17:30", "title": "Section cantonale avec les adhérents agriculteurs", "desc": "Présentation des comptes de l'exercice et débat ouvert avec 80 agriculteurs coopérateurs."}
        ],
        "skills": {
            "technical": ["Gouvernance coopérative et statut spécifique des sociétés coopératives agricoles (SCA)", "Management stratégique et financier d'entreprise multi-sites", "Trading de matières premières agricoles et marchés à terme (Matif, Euronext)", "Logistique lourde (silos, fret ferroviaire et maritime)", "Filières agro-industrielles et négociations de la grande distribution"],
            "human": ["Leadership démocratique et sens aigu de la diplomatie", "Facilité d'écoute et respect profond des agriculteurs", "Charisme en prise de parole publique devant des centaines de personnes", "Vision stratégique et résistance au stress"],
            "tools": ["Systèmes ERP intégrés de coopérative (SAP, Agro-ERP)", "Terminaux de cours de matières premières (Bloomberg, Euronext)", "Logiciels de traçabilité de collecte et logistique", "Tableaux de bord financiers et de gestion prévisionnelle"],
            "analytical": ["Analyse des comptes consolidés de groupe coopératif", "Calcul de péréquation et prix de base payé au producteur"]
        },
        "specializations": ["Grandes coopératives céréalières et oléoprotéagineuses (métiers du grain)", "Coopératives laitières et transformation fromagère", "Coopératives vinicoles (caves coopératives)", "Coopératives d'approvisionnement et services (CUMA)"],
        "studies": {
            "pathway": [
                {"step": "Bac +2", "title": "Prépa BCPST ou Prépa Économique et Commerciale (HEC)", "desc": "Bases scientifiques et économiques d'excellence."},
                {"step": "Bac +5", "title": "Diplôme d'Ingénieur Agronome ou Master Grande École de Commerce (ESSEC, ESCP, HEC)", "desc": "Diplômes de prédilection pour accéder à la direction de grands groupes coopératifs."}
            ],
            "schools": [
                {"name": "Grandes écoles d'agronomie (AgroParisTech, Institut Agro, UniLaSalle) — France", "country": "France", "scope": "International"},
                {"name": "Grandes écoles de management (HEC, ESSEC, EM Lyon) — France", "country": "France", "scope": "France"},
                {"name": "Centre Supérieur de Formation Professionnelle de Dakar — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Formation des dirigeants coopératifs (La Coopération Agricole)", "Certification gouvernance d'entreprise"],
            "schoolSubjects": ["Management d'entreprise", "Économie agricole", "Gouvernance", "Finance d'entreprise"]
        },
        "career": {
            "sectors": ["Grandes coopératives agricoles régionales et nationales", "Unions de coopératives et groupes agroalimentaires coopératifs", "Fédérations régionales et nationales de la coopération agricole", "Organismes professionnels agricoles consulaires"],
            "employerTypes": ["Sociétés coopératives agricoles (SCA)", "Groupes coopératifs agroalimentaires", "Organismes professionnels agricoles"],
            "evolution": "Responsable de pôle filière en coopérative ➔ Directeur d'exploitation d'une branche ➔ Directeur Général Adjoint ➔ Directeur Général de coopérative agricole",
            "pros": "Poste de haute envergure à fort impact économique régional, modèle d'entreprise non délocalisable par nature, rémunération de haut niveau, fierté de servir la cause paysanne.",
            "cons": "Équilibre politique complexe entre exigences de rentabilité économique pure et attentes de rémunération immédiate des agriculteurs adhérents, charge de travail intense."
        },
        "gettingStarted": {
            "beginnerProject": "Étudier les statuts d'une cave coopérative ou d'une coopérative céréalière locale pour comprendre le principe 'une personne, une voix'.",
            "intermediateProject": "Analyser le rapport annuel d'un grand groupe coopératif français (Agrial, Axéréal ou Sodiaal) et identifier la répartition de la valeur.",
            "advancedProject": "Simuler une négociation commerciale de vente de 10 000 tonnes de blé meunier sur les marchés à terme Euronext avec couverture contre les risques de baisse.",
            "portfolioIdeas": ["Analyse financière comparée entreprise privée vs coopérative agricole", "Projet stratégique de décarbonation des silos d'une coopérative"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'IA optimise les plans logistiques de collecte des camions et silos lors du pic des moissons pour désengorger les routes et réduire les coûts de carburant.",
            "automatedTasks": ["Optimisation sous contraintes des tournées de ramassage du lait", "Prévision algorithmique des volumes de récolte entrants aux silos"],
            "emergingSkills": ["Pilotage de la traçabilité ESG de la coopérative", "Gestion de la transition énergétique des adhérents (achats groupés photovoltaïques)"],
            "humanEdge": "La légitimité politique et la capacité à rassembler des centaines d'agriculteurs aux intérêts divergents autour d'un grand projet commun."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les coopératives et unions de producteurs (filière arachidière avec la SONACOS, riziers du delta avec l'UNIS, producteurs d'oignon des Niayes) sont les seules structures capables de peser face aux importateurs et de sécuriser les prix d'achat aux petits paysans.",
            "localSectors": ["Unions régionales de coopératives de la vallée du fleuve et du bassin arachidier", "Société Nationale de Commercialisation des Oléagineux du Sénégal (SONACOS)", "Fédération Nationale des Producteurs Maraîchers"],
            "remoteWork": "Poste de direction générale avec présence physique indispensable.",
            "entrepreneurship": "Création d'une coopérative nouvelle génération fédérant les jeunes agri-preneurs pour massifier les achats d'intrants et commercialiser directement en supermarché à Dakar."
        },
        "relatedJobSlugs": ["chef-exploitation-agricole", "conseiller-gestion-agricole", "charge-affaires-agricoles", "ingenieur-agroalimentaire"],
        "connectedFamilies": ["gestion-finance", "direction-strategie", "commerce-marketing"],
        "resources": [{"type": "article", "title": "Fiche Directeur de Coopérative Studyrama", "url": "https://www.studyrama.com/formations/fiches-metiers/agriculture", "source": "Studyrama"}],
        "sources": ["Studyrama", "La Coopération Agricole", "APECITA"],
        "interests": ["negocier-convaincre", "resoudre-problemes"],
        "saviezVous": {
            "statut": "metier_stable",
            "fait": "Selon La Coopération Agricole et Studyrama, 3 marques alimentaires sur 4 achetées par les Français en grande surface appartiennent en réalité à des coopératives d'agriculteurs (Yoplait, Candia, D'aucy, Paysan Breton, etc.).",
            "pourquoi": "Contrairement aux entreprises privées classiques, une coopérative agricole ne peut être délocalisée ni rachetée par un fonds spéculatif étranger : ses propriétaires sont les paysans ancrés sur leur terre.",
            "a_retenir": "Le poste de direction suprême du monde agricole, alliant puissance économique moderne et solidarité paysanne originelle."
        }
    }
]

print(f"✅ {len(JOBS_PART3)} métiers chargés dans agri_jobs_part3.py")

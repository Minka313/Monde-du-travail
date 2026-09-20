# execution/agri_jobs_part2.py
# Fiches Métiers Partie 2 :
# Domaine 2 suite : Horticulteur, Pépiniériste, Œnologue (3)
# Domaine 3 : Responsable d'élevage, Technicien conseil élevage, Éleveur avicole (3)
# Domaine 4 : Ingénieur agroécologie, Ingénieur irrigation, Chargé valorisation déchets (3)
# Domaine 5 : Technico-commercial agroéquipement, Technicien maintenance agroéquipement, Ingénieur machinisme (3)
# Total Partie 2 = 12 Métiers

JOBS_PART2 = [
    # -----------------------------------------------------------------------
    # 2. PRODUCTION VÉGÉTALE & HORTICULTURE (Suite)
    # -----------------------------------------------------------------------
    {
        "id": "horticulteur",
        "slug": "horticulteur",
        "title": "Horticulteur / Technicien Horticole",
        "aliases": ["Technicienne horticole", "Horticultrice", "Producteur de plantes ornementales"],
        "icon": "🌸",
        "image": "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Végétale, Cultures Spécialisées & Horticulture",
        "domainId": "production-vegetale",
        "subdomain": "Horticulture ornementale & florale",
        "sourceOnisep": True,
        "sourceStudyrama": True,
        "isEmerging": False,
        "level": "CAP / Bac Pro Agricole à Bac +2 (BTS Métiers du Végétal)",
        "salary": "🇫🇷 France : 1 800 - 2 500 € brut/mois débutant (~21 600 - 30 000 €/an, Source : Onisep / Studyrama) • 🇸🇳 Sénégal : 200 000 - 750 000 FCFA / mois (Source : Entreprises horticoles & paysagères)",
        "simpleDefinition": "L'horticulteur cultive des fleurs, des plantes ornementales, des arbustes ou des plantes en pot en serres ou en pépinières pour embellir jardins, terrasses et espaces urbains.",
        "shortDescription": "Fiche documentée par Onisep et Studyrama, ce spécialiste du règne végétal maîtrise la reproduction, le bouturage, l'arrosage et la fertilisation des végétaux d'ornement.",
        "longDescription": "Véritable artisan du vivant, l'horticulteur sélectionne les variétés, gère la germination, le rempotage, la taille et le traitement préventif contre les ravageurs. Il travaille souvent dans des serres modernes où température, hygrométrie et éclairage sont régulés par ordinateur. Il conseille également les jardineries, paysagistes et municipalités dans le choix des essences les plus adaptées.",
        "mainObjective": "Produire des végétaux ornementaux vigoureux et florifères répondant aux attentes paysagères et esthétiques.",
        "companyRole": "Garant de la qualité visuelle, sanitaire et de la diversité botanique des végétaux commercialisés.",
        "workEnvironment": ["🌺 Serres horticoles tempérées et pépinières extérieures", "💧 Manipulation quotidienne d'outils d'arrosage, rempoteuses et sécateurs", "🏪 Relations régulières avec paysagistes, fleuristes et particuliers"],
        "missions": [
            "Assurer la multiplication des végétaux par semis, bouturage, marcottage ou greffage",
            "Contrôler le climat des serres (ventilation, brumisation, ombrage, température)",
            "Gérer la fertilisation par irrigation goutte-à-goutte et le rempotage mécanisé",
            "Mettre en œuvre la protection biologique intégrée (lâchers d'insectes utiles contre les acariens)",
            "Conditionner les plantes pour l'expédition vers les jardineries et marchés aux fleurs"
        ],
        "typicalDay": [
            {"time": "07:30", "title": "Tournée sanitaire des serres", "desc": "Vérification de l'état hydrique des godets et détection visuelle précoce des maladies fongiques."},
            {"time": "09:30", "title": "Chantier de bouturage et rempotage", "desc": "Prélèvement de boutures de géraniums et pilotage de la rempoteuse automatisée."},
            {"time": "14:00", "title": "Réglage de la brumisation et fertilisation", "desc": "Ajustement du programmateur de fertirrigation selon l'ensoleillement de l'après-midi."},
            {"time": "16:30", "title": "Préparation des commandes clients", "desc": "Étiquetage variétal, mise sur chariots danois et contrôle qualité avant expédition."}
        ],
        "skills": {
            "technical": ["Botanique appliquée & physiologie végétale", "Techniques de multiplication végétative (greffe, bouture)", "Conduite des serres bioclimatiques", "Protection biologique intégrée (PBI)", "Gestion des substrats de culture"],
            "human": ["Rigueur et délicatesse du geste", "Sens de l'esthétique et des couleurs", "Patience face aux rythmes naturels des plantes", "Bonne résistance physique"],
            "tools": ["Rempoteuses automatiques", "Programmateurs de fertirrigation", "Chariots horticoles de manutention", "Sécateurs et cisailles de précision"],
            "analytical": ["Calcul des besoins en engrais solubles", "Planification des dates de floraison pour les fêtes (Noël, Fête des Mères)"]
        },
        "specializations": ["Horticulture florale (plantes fleuries)", "Pépinière ornementale (arbres et arbustes)", "Cactus et plantes succulentes", "Production de plantes aromatiques en pot"],
        "studies": {
            "pathway": [
                {"step": "CAP / Bac Pro", "title": "CAP Agricole Métiers de l'Agriculture ou Bac Pro Productions Horticoles", "desc": "Maîtrise pratique de la multiplication et de la conduite des cultures en serre."},
                {"step": "Bac +2", "title": "BTS Agricole Métiers du Végétal (MVAOE)", "desc": "Gestion technique et économique d'une exploitation horticole."},
                {"step": "Bac +3", "title": "Licence Pro Gestion de la Santé des Plantes ou Management des Entreprises Horticoles", "desc": "Expertise en biosécurité végétale et encadrement d'équipes."}
            ],
            "schools": [
                {"name": "Lycées d'enseignement général et technologique agricole (LEGTA) — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle Horticole (CFPH Cambérène) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École d'Horticulture de Saint-Louis — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certiphyto Décideur / Opérateur", "CS Conduite d'un élevage ou de cultures en serres"],
            "schoolSubjects": ["Botanique", "Agronomie", "Biologie végétale", "Gestion d'entreprise"]
        },
        "career": {
            "sectors": ["Entreprises horticoles privées", "Jardineries et grossistes en végétaux", "Services espaces verts des grandes métropoles", "Jardins botaniques nationaux"],
            "employerTypes": ["Producteurs horticoles", "Pépinières paysagères", "Collectivités territoriales"],
            "evolution": "Ouvrier horticole ➔ Chef de serre ➔ Responsable de production horticole ➔ Directeur d'exploitation ou gérant de jardinerie",
            "pros": "Cadre de travail agréable et verdoyant, plaisir de voir s'épanouir les végétaux, débouchés constants.",
            "cons": "Chaleur et humidité sous serre en été, manipulation répétitive de charges, pics d'activité saisonniers intenses."
        },
        "gettingStarted": {
            "beginnerProject": "Réussir le bouturage et le sevrage de 20 variétés de plantes d'intérieur ornementales.",
            "intermediateProject": "Concevoir un plan d'arrosage automatique basse pression pour une serre de 50 m².",
            "advancedProject": "Élaborer un programme annuel de floraison échelonnée pour fournir les décorations florales d'une collectivité.",
            "portfolioIdeas": ["Herbier photographique d'essences ornementales", "Fiche de conduite climatique d'une serre de bégonias"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des caméras multispectrales montées sur rails détectent automatiquement les carences minérales et les attaques de ravageurs avant l'œil humain.",
            "automatedTasks": ["Surveillance continue de la croissance par imagerie numérique", "Dosage automatique des nutriments par injection assistée"],
            "emergingSkills": ["Supervision des logiciels de serre autonome", "Sélection de variétés résistantes au stress thermique"],
            "humanEdge": "L'œil esthétique et la sensibilité tactile pour juger de la vigueur d'une plante restent irremplaçables."
        },
        "africaContext": {
            "senegalInsight": "Le secteur horticole sénégalais est en plein boom, porté par la demande en aménagement paysager des nouvelles cités (Diamniadio, Saly, Almadies) et l'exportation de fleurs coupées et de plantes vertes.",
            "localSectors": ["Ceinture horticole des Niayes", "Pépinières de la zone périurbaine de Dakar et Thiès", "Fermes horticoles de la Petite Côte"],
            "remoteWork": "Travail en direct sur les pépinières et dans les serres.",
            "entrepreneurship": "Création d'une pépinière de plantes ornementales adaptées au climat sahélien (bougainvilliers, palmiers, flamboyants) avec service de location pour entreprises."
        },
        "relatedJobSlugs": ["pepinieriste", "maraicher", "jardinier-paysagiste", "ingenieur-agronome"],
        "connectedFamilies": ["environnement-climat", "artisanat-metiers-art", "commerce-marketing"],
        "resources": [{"type": "article", "title": "Fiche Métier Horticulteur Onisep", "url": "https://www.onisep.fr", "source": "Onisep"}],
        "sources": ["Onisep", "Studyrama", "CFPH Cambérène"],
        "interests": ["nature-environnement", "construire-fabriquer"],
        "saviezVous": {
            "statut": "metier_stable",
            "fait": "Selon l'Onisep et Studyrama, l'horticulture moderne s'oriente massivement vers la protection biologique intégrée, remplaçant les pesticides par des insectes prédateurs naturels.",
            "pourquoi": "Cette transition écologique répond à la demande des citoyens et aux normes environnementales tout en préservant la santé des cultivateurs.",
            "a_retenir": "Un métier combinant amour des plantes, rigueur scientifique et sens commercial dans un secteur en constante évolution verte."
        }
    },
    {
        "id": "pepinieriste",
        "slug": "pepinieriste",
        "title": "Pépiniériste / Producteur d'Arbres et Arbustes",
        "aliases": ["Pépiniériste forestier", "Productrice en pépinière", "Multiplicateur de végétaux ligneux"],
        "icon": "🌲",
        "image": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Végétale, Cultures Spécialisées & Horticulture",
        "domainId": "production-vegetale",
        "subdomain": "Pépinières fruitières & ornementales",
        "sourceOnisep": True,
        "sourceStudyrama": True,
        "isEmerging": False,
        "level": "CAP / Bac Pro Agricole à Bac +2 (BTS Productions Végétales)",
        "salary": "🇫🇷 France : 1 800 - 2 600 € brut/mois débutant (~21 600 - 31 200 €/an, Source : Studyrama) • 🇸🇳 Sénégal : 220 000 - 800 000 FCFA / mois (Source : Pépinières d'arbres fruitiers & reboisement)",
        "simpleDefinition": "Le pépiniériste élève des jeunes arbres, arbustes, fruitiers et plants forestiers pendant plusieurs années, de la germination ou greffe jusqu'à leur vente pour les parcs, vergers et forêts.",
        "shortDescription": "Fiche documentée par Onisep et Studyrama, il forme la charpente de nos futurs vergers et forêts en façonnant patiemment le tronc et les racines des jeunes arbres.",
        "longDescription": "Contrairement à l'horticulteur qui travaille sur des cycles courts (fleurs en mois), le pépiniériste cultive sur le long terme : un jeune arbre fruitier ou forestier demande 2 à 5 ans de soins minutieux (greffage en écusson, cernage des racines, tuteurage, taille de formation en gobelet ou palmette). Il joue un rôle crucial dans le reboisement, la constitution de vergers résilients et la renaturation des villes.",
        "mainObjective": "Produire des jeunes arbres sains, vigoureux, fidèles à leur variété et parfaitement enracinés pour garantir leur reprise en pleine terre.",
        "companyRole": "Premier maillon de la filière arboricole, forestière et du paysage urbain.",
        "workEnvironment": ["🌳 Parcelles de plein champ étendues et conteneurs d'élevage en extérieur", "🚜 Matériel de levage et arracheuses de mottes", "🧤 Travail par tous les temps au rythme des saisons"],
        "missions": [
            "Sélectionner des porte-greffes vigoureux et prélever des greffons sains",
            "Exécuter avec précision les opérations de greffage (fente, écussonnage, couronne)",
            "Conduire la taille de formation des branches pour créer la silhouette désirée (tiges, fuseaux)",
            "Pratiquer le cernage racinaire pour favoriser un chevelu racinaire dense facilitant la reprise",
            "Arracher, mettre en jauge, conditionner en racines nues ou en motte grillagée pour les chantiers"
        ],
        "typicalDay": [
            {"time": "07:30", "title": "Atelier matinal de greffage", "desc": "Greffage au couteau à greffer sur porte-greffes de pommiers ou manguiers avec ligature étanche."},
            {"time": "10:30", "title": "Taille de formation des jeunes tiges", "desc": "Suppression des gourmands et tuteurage sur bambou pour garantir des fûts bien droits."},
            {"time": "14:00", "title": "Arrachage mécanisé et mise en motte", "desc": "Pilotage de la bêcheuse mécanique pour extraire les motteuses sans abîmer les racines."},
            {"time": "16:30", "title": "Conseil aux pépiniéristes revendeurs", "desc": "Accueil d'arboriculteurs pour choisir les variétés fruitières les plus adaptées à leur terroir."}
        ],
        "skills": {
            "technical": ["Techniques de greffage expertes", "Morphologie et architecture des arbres ligneux", "Connaissance des porte-greffes et compatibilités", "Techniques d'arrachage et d'empotage", "Pathologie végétale des essences ligneuses"],
            "human": ["Patience et vision à long terme", "Dextérité manuelle remarquable (greffage)", "Résistance physique au travail en plein air", "Sens de l'organisation des stocks vivants"],
            "tools": ["Couteaux à greffer (greffoirs)", "Ligatures et mastics à cicatriser", "Arracheuses de mottes et mini-pelles", "Tuteurs et attaches biodégradables"],
            "analytical": ["Gestion des temps d'élevage sur 3 à 7 ans", "Calcul des taux de réussite au greffage"]
        },
        "specializations": ["Pépinière fruitière (vergers)", "Pépinière forestière (reboisement)", "Pépinière ornementale de gros sujets (arbres de ville)", "Pépinière de porte-greffes viticoles"],
        "studies": {
            "pathway": [
                {"step": "CAP / Bac Pro", "title": "Bac Pro Conduite de Productions Horticoles (option Pépinière)", "desc": "Apprentissage des bases du greffage et de l'élevage des jeunes plants."},
                {"step": "Bac +2", "title": "BTS Agricole Métiers du Végétal (MVAOE) ou Productions Végétales", "desc": "Conduite technique de chantiers et gestion technico-commerciale."},
                {"step": "Bac +3", "title": "Licence Pro Gestion des Arbres en Milieu Urbain ou Arboriculture", "desc": "Spécialisation dans les essences adaptées au changement climatique."}
            ],
            "schools": [
                {"name": "Lycées professionnels agricoles spécialisés arboriculture (France)", "country": "France", "scope": "France"},
                {"name": "CFPH de Cambérène — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Institut Supérieur de Formation Agricole et Rurale (ISFAR Bambey) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certiphyto", "Caces mini-pelles et engins de manutention"],
            "schoolSubjects": ["Dendrologie", "Physiologie végétale", "Machinisme", "Agronomie"]
        },
        "career": {
            "sectors": ["Pépinières fruitières et forestières privées", "Offices nationaux des forêts", "Entreprises du paysage et de renaturation", "Centres de recherche agronomique"],
            "employerTypes": ["Pépinières de production", "Collectivités et parcs nationaux", "Coopératives arboricoles"],
            "evolution": "Greffeur ouvrier ➔ Chef de culture pépinière ➔ Responsable d'exploitation pépinière ➔ Pépiniériste exploitant indépendant",
            "pros": "Création d'arbres qui traverseront les décennies, travail noble de revégétalisation de la planète, forte demande liée au reboisement.",
            "cons": "Cycle de retour sur investissement long (plusieurs années), travail physique par temps froid et humide en hiver, aléas climatiques (gel tardif)."
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser avec succès 50 greffes en fente d'arbres fruitiers et observer leur cicatrisation.",
            "intermediateProject": "Mettre en place un banc d'élevage de porte-greffes avec irrigation raisonnée par micro-aspersion.",
            "advancedProject": "Calculer le plan de production sur 5 ans d'une pépinière forestière de 50 000 plants destinés au reboisement sahélien.",
            "portfolioIdeas": ["Journal photographique de greffage", "Schéma comparatif d'enracinement selon les techniques de cernage"]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "Si la traçabilité RFID des arbres s'impose, le geste de greffage et l'évaluation de la charpente de l'arbre restent manuels.",
            "automatedTasks": ["Puces RFID d'inventaire parcellaire", "Guidage GPS des arracheuses de mottes"],
            "emergingSkills": ["Sélection d'arbres tolérants aux sécheresses sévères", "Gestion informatisée des stocks pluriannuels"],
            "humanEdge": "La précision millimétrique de la greffe et la vision dans l'espace de la future couronne d'un arbre échappent aux robots."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les pépiniéristes fruitiers (manguiers greffés Kent/Keitt, agrumes, anacardiers, papayers, baobabs) et forestiers (acacias pour la Grande Muraille Verte) jouent un rôle vital pour la sécurité alimentaire et la lutte contre la désertification.",
            "localSectors": ["Pépinières fruitières des Niayes et de Casamance", "Chantiers de la Grande Muraille Verte (Ferlo)", "Pépinières urbaines le long des axes routiers de Dakar et Thiès"],
            "remoteWork": "100% sur le terrain.",
            "entrepreneurship": "Création d'une pépinière spécialisée en semences et jeunes plants de fruitiers améliorés à forte rentabilité (anacarde, mangue, corossol)."
        },
        "relatedJobSlugs": ["horticulteur", "ingenieur-forestier", "jardinier-paysagiste", "elagueur-grimpeur"],
        "connectedFamilies": ["environnement-climat", "artisanat-metiers-art", "industrie-ingenierie"],
        "resources": [{"type": "article", "title": "Fiche Métier Pépiniériste Studyrama", "url": "https://www.studyrama.com/formations/fiches-metiers/agriculture/pepinieriste-91753", "source": "Studyrama"}],
        "sources": ["Studyrama", "Onisep", "FNPHP"],
        "interests": ["nature-environnement", "construire-fabriquer"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon Studyrama, les maîtres-greffeurs et chefs de culture pépinière sont activement recherchés pour renouveler les vergers et approvisionner les plans massifs de reboisement mondial.",
            "pourquoi": "La précision du geste de greffe s'apprend sur le terrain et peu de jeunes maîtrisent aujourd'hui cette expertise séculaire.",
            "a_retenir": "Un métier d'artisanat végétal hautement valorisant pour qui souhaite planter les arbres qui façonneront les paysages de demain."
        }
    },
    {
        "id": "oenologue",
        "slug": "oenologue",
        "title": "Œnologue / Expert en Vinification et Élevage",
        "aliases": ["Œnologue conseil", "Maître de vinification", "Expert œnologique"],
        "icon": "🍇",
        "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Végétale, Cultures Spécialisées & Horticulture",
        "domainId": "production-vegetale",
        "subdomain": "Viticulture & œnologie",
        "sourceOnisep": True,
        "sourceStudyrama": True,
        "isEmerging": False,
        "level": "Bac +5 (Diplôme National d'Œnologue - DNO)",
        "salary": "🇫🇷 France : 2 500 - 3 500 € brut/mois débutant (~30 000 - 42 000 €/an, Source : Onisep / Studyrama) • 🇸🇳 International / Afrique : Expertises vinicoles (Afrique du Sud, Maroc) ou boissons fermentées locales (350 000 - 1 200 000 FCFA / mois)",
        "simpleDefinition": "L'œnologue est le spécialiste scientifique et technique du vin. Il supervise la vinification, de la vendange à la mise en bouteille, garantissant la qualité gustative et sanitaire des cuvées.",
        "shortDescription": "Fiche documentée par Onisep et Studyrama, titulaire du DNO (Bac +5), il allie biochimie de pointe, maîtrise sensorielle et conseil auprès des vignerons.",
        "longDescription": "L'œnologue ne se contente pas de déguster : c'est un expert des fermentations alcoolique et malolactique, de la microbiologie des levures et de la chimie des arômes. Selon l'Onisep, il conseille le viticulteur sur le choix du cépage, la date optimale des vendanges, la macération, l'assemblage et le vieillissement en fûts de chêne. Il peut exercer en domaine viticole, en laboratoire d'analyses œnologiques ou comme consultant indépendant.",
        "mainObjective": "Révéler le potentiel qualitatif du raisin et créer des vins équilibrés, stables et conformes à l'identité de leur terroir.",
        "companyRole": "Pilier qualitatif et garant de la signature sensorielle et de la conformité analytique des vins.",
        "workEnvironment": ["🍷 Chais de vinification et cuveries", "🔬 Laboratoires d'analyses physico-chimiques et microbiologiques", "🌾 Visites de vignes et comités de dégustation internationaux"],
        "missions": [
            "Analyser la maturité des baies (sucres, acidité, polyphénols) pour fixer le ban des vendanges",
            "Superviser les opérations de pressurage, macération, sulfitage raisonné et levurage",
            "Suivre quotidiennement les cinétiques fermentaires par analyses de densité et température",
            "Diriger les séances d'assemblage des différents cépages et cuves pour créer les cuvées finales",
            "Gérer la filtration, la stabilisation tartrique et la mise en bouteille stérile"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Tournée des cuves en fermentation", "desc": "Prélèvement d'échantillons, contrôle des températures et dégustation des moûts en cours de travail."},
            {"time": "10:30", "title": "Analyses chromatographiques au laboratoire", "desc": "Dosage du SO2 libre, de l'acidité volatile et contrôle de l'absence de brettanomyces."},
            {"time": "14:30", "title": "Séance d'assemblage avec le propriétaire", "desc": "Essais comparatifs de pourcentages Cabernet/Merlot pour définir le grand vin du millésime."},
            {"time": "17:00", "title": "Conseil technique et préparation des certifications", "desc": "Validation des fiches d'embouteillage et conformité avec les cahiers des charges AOP/AOC."}
        ],
        "skills": {
            "technical": ["Biochimie et microbiologie œnologique", "Chimie analytique appliquée aux vins", "Maîtrise de la dégustation organoleptique critique", "Conduite des équipements de cave (pressoirs, filtres tangentiels)", "Réglementation vitivinicole européenne et internationale"],
            "human": ["Précision sensorielle et mémoire olfactive", "Pédagogie et diplomatie avec les vignerons", "Rigueur d'analyse scientifique", "Résistance au stress en période de vendanges"],
            "tools": ["Spectrophotomètres infrarouges (FOSS Winescan)", "Réfractomètres et densimètres numériques", "Microscopes pour comptage levurien", "Fûts de chêne et cuves thermorégulées"],
            "analytical": ["Interprétation des profils chromatographiques", "Diagnostic des défauts du vin (réduction, oxydation)"]
        },
        "specializations": ["Œnologie conseil indépendante", "Direction technique de grand cru classé", "Laboratoire d'analyses et de certification œnologique", "Boissons fermentées innovantes et spiritueux"],
        "studies": {
            "pathway": [
                {"step": "Bac +3", "title": "Licence Sciences de la Vigne, Chimie ou Biologie", "desc": "Bases solides en biochimie, chimie organique et physiologie végétale."},
                {"step": "Bac +5", "title": "Diplôme National d'Œnologue (DNO)", "desc": "Titre protégé délivré par seulement 6 universités et écoles agronomiques habilitées en France."}
            ],
            "schools": [
                {"name": "Institut des Sciences de la Vigne et du Vin (ISVV) — Université de Bordeaux (France)", "country": "France", "scope": "International"},
                {"name": "Institut Agro Montpellier — DNO (France)", "country": "France", "scope": "International"},
                {"name": "Université de Bourgogne (Dijon) / Université de Reims — DNO", "country": "France", "scope": "France"}
            ],
            "certifications": ["Diplôme National d'Œnologue (titre réglementé)", "WSET Level 3 / 4 Award in Wines"],
            "schoolSubjects": ["Microbiologie", "Chimie du vin", "Viticulture", "Dégustation sensorielle"]
        },
        "career": {
            "sectors": ["Domaines et châteaux viticoles", "Caves coopératives", "Laboratoires d'analyses œnologiques privés", "Négociants en vins et spiritueux"],
            "employerTypes": ["Exploitations viticoles", "Bureaux d'études œnologiques", "Groupes de vins et spiritueux internationaux"],
            "evolution": "Œnologue junior en laboratoire ➔ Œnologue conseil ➔ Maître de chai ➔ Directeur technique d'un domaine ou gérant de laboratoire",
            "pros": "Métier de prestige alliant haute science et plaisir épicurien, reconnaissance internationale des compétences françaises, voyages réguliers dans les vignobles du monde.",
            "cons": "Intensité extrême pendant les semaines de vendanges (7j/7, journées de 14h), responsabilité lourde sur des volumes valant des millions d'euros."
        },
        "gettingStarted": {
            "beginnerProject": "S'entraîner à la reconnaissance olfactive à l'aide d'un coffret 'Le Nez du Vin' (54 arômes).",
            "intermediateProject": "Participer à une saison complète de vendanges et vinification comme aide de cave dans un domaine.",
            "advancedProject": "Réaliser une micro-vinification expérimentale de 50 litres en suivant l'évolution analytique quotidienne.",
            "portfolioIdeas": ["Compte-rendu d'analyse critique d'un assemblage", "Mémoire de fin d'études DNO sur l'impact du réchauffement climatique sur les acidités"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'intelligence artificielle optimise les cinétiques de fermentation et prédit les profils aromatiques, mais la décision finale d'assemblage reste humaine.",
            "automatedTasks": ["Surveillance continue des courbes de densité/température par capteurs IoT", "Prédiction des risques d'arrêts de fermentation"],
            "emergingSkills": ["Adaptation des pratiques œnologiques aux vendanges caniculaires (gestion de l'alcool élevé)", "Maîtrise des techniques de désalcoolisation partielle"],
            "humanEdge": "La sensibilité hédonique et l'émotion de dégustation d'un grand vin demeurent l'apanage exclusif de l'humain."
        },
        "africaContext": {
            "senegalInsight": "Si le Sénégal ne possède pas de vignobles traditionnels, les compétences en biochimie des fermentations s'appliquent à l'agro-industrie des jus fermentés, du vinaigre de mangue, de la bière locale et de la valorisation des fruits tropicaux.",
            "localSectors": ["Unités de transformation de fruits et boissons fermentées (Dakar, Thiès)", "Hôtellerie de luxe et sommellerie (Dakar, Almadies, Saly)", "Importation et conservation des grands vins"],
            "remoteWork": "Travail en laboratoire et chai.",
            "entrepreneurship": "Création d'une gamme de boissons artisanales fermentées haut de gamme valorisant le bissap, le pain de singe (baobab) ou la mangue."
        },
        "relatedJobSlugs": ["maitre-de-chai", "ingenieur-agroalimentaire", "responsable-qualite-haccp-agri", "ingenieur-agronome"],
        "connectedFamilies": ["hotellerie-tourisme-restauration", "chimie-biologie", "commerce-marketing"],
        "resources": [{"type": "article", "title": "Fiche Œnologue Onisep", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/oenologue", "source": "Onisep"}],
        "sources": ["Onisep", "Studyrama", "Union des Œnologues de France (UOEF)"],
        "interests": ["nature-environnement", "resoudre-problemes"],
        "saviezVous": {
            "statut": "metier_stable",
            "fait": "Selon l'Onisep, le titre d'œnologue est strictement protégé par la loi du 19 mars 1955 : nul ne peut se dire œnologue sans détenir le Diplôme National d'Œnologue (Bac +5).",
            "pourquoi": "Cette protection garantit la sécurité alimentaire, la traçabilité sanitaire et le rayonnement international du patrimoine viticole.",
            "a_retenir": "Un scientifique indispensable qui façonne le vin avec rigueur biochimique et sensibilité gustative."
        }
    },

    # -----------------------------------------------------------------------
    # 3. ÉLEVAGE, SANTÉ & PRODUCTIONS ANIMALES
    # -----------------------------------------------------------------------
    {
        "id": "responsable-elevage",
        "slug": "responsable-elevage",
        "title": "Responsable d'Élevage / Chef d'Élevage",
        "aliases": ["Chef d'exploitation d'élevage", "Gestionnaire de troupeau", "Éleveur professionnel"],
        "icon": "🐄",
        "image": "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Élevage, Santé & Productions Animales",
        "domainId": "elevage-productions-animales",
        "subdomain": "Élevage bovin, ovin & caprin",
        "sourceOnisep": True,
        "sourceStudyrama": True,
        "isEmerging": False,
        "level": "Bac Pro Agricole (CGEA) à Bac +2 (BTS Productions Animales)",
        "salary": "🇫🇷 France : 2 000 - 3 200 € net/mois selon taille du troupeau (Source : Studyrama / Fiches Élevage) • 🇸🇳 Sénégal : 300 000 - 1 200 000 FCFA / mois (Source : Fermes laitières & embouche bovine)",
        "simpleDefinition": "Le responsable d'élevage supervise la conduite globale d'un troupeau (bovins, ovins, porcins ou caprins) : alimentation rationnée, reproduction, traite, confort des bêtes et suivi sanitaire rigoureux.",
        "shortDescription": "Fiche documentée par Onisep et Studyrama, il garantit la bonne santé des animaux, la qualité du lait ou de la viande et la viabilité économique de l'atelier d'élevage.",
        "longDescription": "Homme ou femme de bêtes, le responsable d'élevage maîtrise la zootechnie moderne. Il calcule les rations alimentaires équilibrées (fourrages, concentrés, minéraux), planifie les périodes de reproduction et d'insémination artificielle, assiste les mises bas et veille au bien-être animal (ventilation des stabulations, litières propres, accès aux pâtures). Dans les élevages laitiers, il pilote les salles de traite automatisées ou les robots de traite connectés.",
        "mainObjective": "Assurer des performances de production élevées (lait ou viande) dans le respect strict du bien-être animal et des normes sanitaires.",
        "companyRole": "Gestionnaire technique, garant de la bientraitance animale et de la rentabilité de l'exploitation d'élevage.",
        "workEnvironment": ["🐮 Étables, stabulations libres, salles de traite et prairies de pâturage", "🚜 Engins de distribution d'aliments (mélangeuses, désileuses)", "📞 Collaboration étroite avec le vétérinaire rural et le contrôleur laitier"],
        "missions": [
            "Concevoir et distribuer les rations alimentaires adaptées aux stades physiologiques des animaux",
            "Assurer la surveillance sanitaire quotidienne (détection des mammites, boiteries, fièvre)",
            "Superviser ou réaliser la traite bi-quotidienne et garantir l'hygiène irréprochable du lait",
            "Planifier le calendrier de reproduction, détecter les chaleurs et suivre les gestations",
            "Tenir le registre d'élevage et assurer la traçabilité réglementaire de chaque animal"
        ],
        "typicalDay": [
            {"time": "05:30", "title": "Première traite et soins matinaux", "desc": "Démarrage de la salle de traite, contrôle de la qualité du lait et nettoyage des faisceaux trayeurs."},
            {"time": "08:30", "title": "Alimentation et paillage de la stabulation", "desc": "Distribution de la ration mélangée avec le tracteur désileur et réfection des litières de paille."},
            {"time": "14:00", "title": "Visite sanitaire et insémination", "desc": "Accueil du vétérinaire pour le suivi d'échographies de gestation et insémination d'une génisse en chaleur."},
            {"time": "17:30", "title": "Seconde traite et bilan du robot", "desc": "Seconde traite de la journée, analyse des alertes du logiciel de détection de rumination."}
        ],
        "skills": {
            "technical": ["Zootechnie générale et nutrition animale", "Pathologie vétérinaire de base et détection des symptômes", "Conduite de la reproduction et des vêlages", "Maîtrise des technologies de traite (robots, salles rotatives)", "Gestion des pâturages et de l'herbe"],
            "human": ["Observation fine et empathie avec les bêtes", "Disponibilité et endurance face à des astreintes régulières", "Réactivité en situation d'urgence sanitaire", "Capacités de gestion d'équipe ouvrière"],
            "tools": ["Robots et salles de traite", "Logiciels de gestion de troupeau (Isagri, HerdBook)", "Colliers et podomètres connectés (monitoring rumination)", "Tracteurs avec pailleuses et mélangeuses"],
            "analytical": ["Analyse des coûts de revient au litre de lait ou kilo de carcasse", "Calcul des taux protéiques et butyriques du lait"]
        },
        "specializations": ["Élevage bovin laitier haute performance", "Élevage bovin allaitant (viande charolaise, limousine, zébu)", "Élevage caprin avec transformation fromagère fermière", "Élevage ovin pastoral"],
        "studies": {
            "pathway": [
                {"step": "Bac Pro", "title": "Bac Pro Conduite et Gestion de l'Entreprise Agricole (CGEA - Élevage)", "desc": "Bases pratiques de la manipulation animale et des engins agricoles."},
                {"step": "Bac +2", "title": "BTS Agricole Productions Animales (PA)", "desc": "Approfondissement en génétique, rationnement et pilotage d'entreprise d'élevage."},
                {"step": "Bac +3", "title": "Licence Pro Conseil en Élevage ou Management des Entreprises d'Élevage", "desc": "Expertise en transition agroécologique de l'élevage."}
            ],
            "schools": [
                {"name": "Lycées agricoles spécialisés élevage (Bretagne, Normandie, Massif Central) — France", "country": "France", "scope": "France"},
                {"name": "Institut Supérieur de Formation Agricole et Rurale (ISFAR Bambey) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Inter-États des Sciences et Médecine Vétérinaires (EISMV Dakar)", "country": "Sénégal", "scope": "International"}
            ],
            "certifications": ["Certificat de Capacité d'Inséminateur", "Attestation Bien-Être Animal en élevage"],
            "schoolSubjects": ["Zootechnie", "Biologie animale", "Alimentation animale", "Agronomie fourragère"]
        },
        "career": {
            "sectors": ["Exploitations d'élevage individuelles ou sociétaires (GAEC)", "Fermes pilotes et stations d'expérimentation", "Grands élevages industriels et fermes laitières", "Coopératives d'élevage"],
            "employerTypes": ["Groupements agricoles", "Agro-industries laitières privées", "Organismes de sélection de races"],
            "evolution": "Vacher / Ouvrier d'élevage ➔ Chef d'élevage ➔ Associé en GAEC ➔ Exploitant agricole propriétaire de son troupeau",
            "pros": "Contact passionné avec les animaux, vie au grand air, fierté de produire du lait et de la viande de qualité.",
            "cons": "Astreintes 365 jours par an (les animaux doivent manger et être traits chaque jour), congés difficiles à planifier sans service de remplacement."
        },
        "gettingStarted": {
            "beginnerProject": "Passer une semaine en immersion dans une ferme laitière pour pratiquer la traite et la détection des chaleurs.",
            "intermediateProject": "Calculer une ration hivernale équilibrée pour 50 vaches laitières avec foin, ensilage et correcteur azoté.",
            "advancedProject": "Établir le plan d'accouplement génétique d'un troupeau pour améliorer les taux de matière grasse et la santé de la mamelle.",
            "portfolioIdeas": ["Fiche de suivi sanitaire de troupeau", "Bilan comparatif de production lait/fourrage"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'élevage de précision déploie des colliers connectés analysant la rumination, des caméras d'analyse morphologique et des robots d'alimentation automatiques.",
            "automatedTasks": ["Détection automatique des chaleurs et des débuts de vêlage par capteurs", "Traite robotisée autonome 24h/24"],
            "emergingSkills": ["Analyse des données biométriques animales en continu", "Maintenance de premier niveau des automates d'élevage"],
            "humanEdge": "Le regard attentif de l'éleveur qui repère un animal triste ou isolé au fond du champ ne sera jamais remplacé par un capteur."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le pastoralisme et l'élevage intensif (bovins Gobra, métis laitiers Guzerat/Montbéliarde, moutons Ladoum) représentent 30% du PIB agricole. La modernisation des fermes laitières autour de Dahra et Richard-Toll est une priorité d'autosuffisance.",
            "localSectors": ["Bassin laitier sylvopastoral du Ferlo (Dahra, Linguère)", "Fermes périurbaines laitières de Dakar/Thiès", "Élevages d'embouche bovine et ovine (fêtes de Tabaski)"],
            "remoteWork": "Totalement exclu, présence physique impérative.",
            "entrepreneurship": "Création d'une mini-ferme laitière moderne avec stabulation ventilée, production de fourrage irrigué (panicum, luzerne) et vente de lait pasteurisé."
        },
        "relatedJobSlugs": ["technicien-conseil-elevage", "aviculteur", "ingenieur-agronome", "chef-exploitation-agricole"],
        "connectedFamilies": ["sante-biomedical", "environnement-climat", "commerce-marketing"],
        "resources": [{"type": "article", "title": "Fiche Responsable d'Élevage Studyrama", "url": "https://www.studyrama.com/formations/fiches-metiers/agriculture/responsable-d-elevage-91754", "source": "Studyrama"}],
        "sources": ["Studyrama", "Onisep", "Institut de l'Élevage (Idele)"],
        "interests": ["nature-environnement", "construire-fabriquer"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon l'Onisep et Studyrama, plus de la moitié des chefs d'élevage français partiront à la retraite dans les dix ans, créant des milliers d'opportunités de reprise d'exploitations rentables et modernes.",
            "pourquoi": "L'élevage s'est considérablement mécanisé et robotisé, réduisant la pénibilité physique tout en exigeant des compétences pointues de gestionnaire.",
            "a_retenir": "Un métier d'engagement et de haute technicité, au cœur de la souveraineté alimentaire des territoires."
        }
    },
    {
        "id": "technicien-conseil-elevage",
        "slug": "technicien-conseil-elevage",
        "title": "Technicien Conseil en Élevage / Contrôleur Laitier",
        "aliases": ["Conseiller d'élevage", "Technicienne zootechnique", "Conseiller en nutrition animale"],
        "icon": "📋",
        "image": "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Élevage, Santé & Productions Animales",
        "domainId": "elevage-productions-animales",
        "subdomain": "Conseil zootechnique & nutrition",
        "sourceOnisep": True,
        "sourceStudyrama": True,
        "isEmerging": False,
        "level": "Bac +2 (BTS Productions Animales) à Bac +3 (Licence Pro Élevage)",
        "salary": "🇫🇷 France : 2 000 - 2 800 € brut/mois débutant (~24 000 - 33 600 €/an, Source : Onisep / Studyrama) • 🇸🇳 Sénégal : 250 000 - 850 000 FCFA / mois (Source : Coopératives laitières, projets d'appui à l'élevage)",
        "simpleDefinition": "Le technicien conseil en élevage visite régulièrement les exploitations pour analyser les performances des troupeaux, optimiser l'alimentation, la santé et la rentabilité financière des éleveurs.",
        "shortDescription": "Fiche documentée par Onisep et Studyrama, ce conseiller itinérant est le partenaire de confiance des éleveurs pour améliorer le rendement et le bien-être de leur cheptel.",
        "longDescription": "Véritable consultant de terrain employé par une chambre d'agriculture, une coopérative ou un organisme de contrôle de performances, il mesure la production laitière, analyse la composition du lait (taux cellulaire, gras, protéines), ajuste les plans d'alimentation et propose des choix génétiques pour améliorer la descendance. Il aide également les exploitants à adapter leurs bâtiments d'élevage face aux canicules.",
        "mainObjective": "Aider les éleveurs à accroître leur rentabilité économique tout en améliorant la santé du troupeau et la qualité des produits.",
        "companyRole": "Expert externe, catalyseur de progrès technique et d'innovation dans les élevages.",
        "workEnvironment": ["🚗 Déplacements quotidiens de ferme en ferme", "🐮 Stabulations et quais de traite", "💻 Bureau pour le traitement des données zootechniques"],
        "missions": [
            "Réaliser les contrôles de performance (pesée de lait, prélèvement d'échantillons analytiques)",
            "Diagnostiquer les dysfonctionnements zootechniques (acidose ruminale, problèmes d'aplombs)",
            "Calculer des plans de rationnement sur mesure selon les stocks fourragers disponibles",
            "Conseiller sur les accouplements génétiques pour corriger les défauts morphologiques",
            "Animer des groupes de progrès entre éleveurs sur des thématiques d'actualité (pâturage tournant dynamique)"
        ],
        "typicalDay": [
            {"time": "06:00", "title": "Contrôle laitier matinal en ferme", "desc": "Pesée du lait de chaque vache lors de la traite et prélèvement d'échantillons en flacons numérotés."},
            {"time": "09:30", "title": "Bilan de la ration avec l'exploitant", "desc": "Vérification de la qualité de l'ensilage d'herbe et recalibrage de l'apport en tourteau de soja."},
            {"time": "14:00", "title": "Visite conseil bien-être animal dans un autre élevage", "desc": "Mesure des flux d'air dans le bâtiment d'élevage et conseil pour l'installation de brasseurs d'air."},
            {"time": "16:30", "title": "Saisie informatique et restitution des résultats", "desc": "Envoi des alertes cellules somatiques au laboratoire et rédaction de la note de synthèse."}
        ],
        "skills": {
            "technical": ["Zootechnie approfondie (nutrition, génétique, reproduction)", "Techniques d'audit de bâtiment d'élevage", "Analyse des bilans fourragers", "Interprétation des résultats de contrôle de performance", "Réglementation sur le bien-être animal"],
            "human": ["Écoute active et pédagogie", "Sens du relationnel et diplomatie avec les agriculteurs", "Capacité à convaincre sans imposer", "Autonomie et rigueur d'organisation"],
            "tools": ["Logiciels de rationnement (Inration)", "Appareils de mesure de ventilation (fumigènes, anémomètres)", "Tablettes de saisie connectées de contrôle laitier", "Bâtons de lecture de puces RFID animales"],
            "analytical": ["Calcul de la marge sur coût alimentaire (MCA)", "Courbes de lactation et détection des anomalies de production"]
        },
        "specializations": ["Conseil en nutrition bovine laitière", "Conseil génétique et insémination", "Audit bâtiment et ambiance d'élevage", "Transition vers le pâturage tournant agroécologique"],
        "studies": {
            "pathway": [
                {"step": "Bac +2", "title": "BTS Agricole Productions Animales (PA)", "desc": "Formation de référence pour la zootechnie et l'agronomie fourragère."},
                {"step": "Bac +3", "title": "Licence Pro Métiers du Conseil en Élevage ou Santé Animale", "desc": "Perfectionnement aux techniques d'audit d'exploitation et d'animation de groupe."}
            ],
            "schools": [
                {"name": "Lycées agricoles dispensant le BTS PA — France", "country": "France", "scope": "France"},
                {"name": "Institut Supérieur de Formation Agricole et Rurale (ISFAR Bambey) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Nationale des Cadres Ruraux (ENCR Bambey) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Agrément Contrôle de Performances Laitières", "Certificat d'Aptitude aux Fonctions d'Inséminateur (CAFI)"],
            "schoolSubjects": ["Zootechnie", "Nutrition animale", "Communication", "Informatique de gestion"]
        },
        "career": {
            "sectors": ["Organismes de conseil en élevage (ex-Contrôle Laitier)", "Chambres d'agriculture", "Coopératives d'insémination et de sélection génétique", "Fabricants d'aliments du bétail"],
            "employerTypes": ["Entreprises de conseil en élevage", "Coopératives agricoles", "Firmes d'agrofourniture animale"],
            "evolution": "Technicien de contrôle ➔ Conseiller spécialisé en élevage ➔ Responsable d'équipe technique territoriale ➔ Directeur de pôle d'appui zootechnique",
            "pros": "Grande autonomie dans l'organisation de ses tournées, relations humaines riches et durables avec les agriculteurs, variété des situations d'élevage rencontrées.",
            "cons": "Horaires très matinaux pour assister aux traites dès l'aube, nombreux kilomètres en voiture chaque jour, devoir parfois annoncer des bilans économiques délicats."
        },
        "gettingStarted": {
            "beginnerProject": "Accompagner un technicien de contrôle laitier sur une tournée de 3 jours pour comprendre le recueil des données.",
            "intermediateProject": "Réaliser le diagnostic d'ambiance thermique d'une étable de 60 vaches avec relevés de températures et humidité.",
            "advancedProject": "Concevoir un outil de simulation de l'impact financier d'une baisse des mammites sur le revenu annuel d'un élevage.",
            "portfolioIdeas": ["Exemple de rapport d'audit nutritionnel d'un troupeau", "Guide pratique de réglage des ventilateurs d'étable"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'IA centralise les données des colliers connectés et des robots pour générer des alertes de troupeau prédictives que le technicien interprète avec l'éleveur.",
            "automatedTasks": ["Agrégation automatique des données de pesée et de composition du lait", "Détection prédictive des risques d'acidose"],
            "emergingSkills": ["Conseil en intégration des outils numériques en élevage", "Diagnostic des émissions de méthane entérique"],
            "humanEdge": "La confiance humaine et l'accompagnement psychologique de l'éleveur dans les choix stratégiques d'avenir."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les techniciens d'élevage sont indispensables pour accompagner l'insémination artificielle des vaches locales avec de la semence Montbéliarde ou Guzerat, augmentant la production de 2 litres à plus de 15 litres par jour.",
            "localSectors": ["Projets nationaux de développement de la filière laitière (PRAPS, PADAER)", "Centres de collecte de lait (Richard-Toll, Kolda, Dahra)", "Coopératives d'éleveurs pasteurs"],
            "remoteWork": "Métier exclusivement itinérant sur le terrain.",
            "entrepreneurship": "Création d'un cabinet de conseil privé pour les fermes d'embouche bovine et laitière périurbaines de Dakar et Thiès."
        },
        "relatedJobSlugs": ["responsable-elevage", "aviculteur", "ingenieur-agronome", "conseiller-gestion-agricole"],
        "connectedFamilies": ["sante-biomedical", "conseil-audit", "environnement-climat"],
        "resources": [{"type": "article", "title": "Fiche Technicien de Conseil en Élevage Onisep", "url": "https://www.onisep.fr", "source": "Onisep"}],
        "sources": ["Onisep", "Studyrama", "France Conseil Élevage"],
        "interests": ["nature-environnement", "resoudre-problemes"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon Onisep et Studyrama, les conseillers d'élevage bénéficient d'une quasi-garantie d'embauche dès la sortie du BTS Productions Animales.",
            "pourquoi": "Le secteur fait face à une vague massive de départs en retraite alors que les élevages exigent une expertise zootechnique toujours plus pointue.",
            "a_retenir": "Un métier parfait pour ceux qui aiment les animaux et souhaitent conseiller sans porter la contrainte quotidienne d'une exploitation."
        }
    },
    {
        "id": "aviculteur",
        "slug": "aviculteur",
        "title": "Aviculteur / Responsable d'Élevage Avicole",
        "aliases": ["Éleveur de volailles", "Chef de couvoir", "Gestionnaire d'atelier avicole"],
        "icon": "🐔",
        "image": "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Élevage, Santé & Productions Animales",
        "domainId": "elevage-productions-animales",
        "subdomain": "Aviculture & petits élevages",
        "sourceOnisep": False,
        "sourceStudyrama": True,
        "isEmerging": False,
        "level": "CAP / Bac Pro Agricole à Bac +2 (BTS Productions Animales)",
        "salary": "🇫🇷 France : 1 900 - 3 000 € net/mois selon taille des bâtiments (Source : Studyrama / Fiches Élevage) • 🇸🇳 Sénégal : 250 000 - 1 100 000 FCFA / mois (Source : Aviculture industrielle des Niayes & Thiès)",
        "simpleDefinition": "L'aviculteur élève des volailles (poulets de chair, poules pondeuses, dindes, canards ou pintades) en veillant scrupuleusement à l'hygiène, à la ventilation, à l'alimentation et à la biosécurité des bâtiments.",
        "shortDescription": "Fiche documentée par Studyrama, ce professionnel gère des élevages de volailles de haute technicité répondant à la demande massive en œufs et viande blanche.",
        "longDescription": "L'aviculture moderne est une filière hautement technique et rigoureuse. Qu'il conduise un élevage fermier de plein air sous label ou un bâtiment avicole automatisé de plusieurs milliers de sujets, l'aviculteur surveille en continu la température, l'humidité et la qualité de l'air (ventilation dynamique). Il applique des règles drastiques de biosécurité (sas sanitaire, désinfection) pour prémunir le cheptel contre les virus comme l'influenza aviaire.",
        "mainObjective": "Assurer une croissance homogène et saine des volailles ou une ponte régulière dans des conditions sanitaires et de bien-être optimales.",
        "companyRole": "Responsable de la sécurité sanitaire et de la rentabilité des ateliers de production d'œufs et de viande de volaille.",
        "workEnvironment": ["🐥 Bâtiments avicoles régulés ou parcours herbagers extérieurs", "🚪 Sas sanitaires stricts avec changement obligatoire de tenue", "🚚 Plateformes de conditionnement d'œufs et abattoirs agréés"],
        "missions": [
            "Préparer et désinfecter les bâtiments avant l'arrivée des poussins d'un jour (vide sanitaire)",
            "Programmer et surveiller les automates de climatisation, d'éclairage et d'abreuvement",
            "Suivre les courbes de consommation d'aliments et de gain de poids quotidien",
            "Mettre en œuvre les protocoles de vaccination stricts (nébulisation, eau de boisson)",
            "Trier, calibrer et expédier les œufs de consommation ou organiser le départ des volailles"
        ],
        "typicalDay": [
            {"time": "06:30", "title": "Passage au sas sanitaire et tournée des poussinières", "desc": "Douche sanitaire, enfilage de la tenue stérile et inspection visuelle des poussins sous les radiants."},
            {"time": "09:00", "title": "Relevé des compteurs et pesée d'échantillons", "desc": "Contrôle des compteurs d'eau et pesée d'un lot témoin de 100 poulets pour vérifier la courbe de croissance."},
            {"time": "14:00", "title": "Maintenance des lignes d'alimentation", "desc": "Vérification des vis sans fin et débouchage des pipettes d'abreuvement automatique."},
            {"time": "17:00", "title": "Clôture de la journée et réglage du cycle lumineux", "desc": "Ajustement de la minuterie d'extinction progressive des lumières et test des alarmes de coupure électrique."}
        ],
        "skills": {
            "technical": ["Zootechnie aviaire & physiologie de la volaille", "Règles strictes de biosécurité avicole", "Conduite des automates de ventilation (ventilation dynamique tunnel)", "Programmes vaccinaux et prophylaxie", "Gestion des déjections (fientes séchées valorisables)"],
            "human": ["Vigilance constante et sens du détail", "Rigueur absolue dans le respect des règles d'hygiène", "Réactivité immédiate en cas de panne technique", "Sens de la gestion d'entreprise"],
            "tools": ["Automates de gestion de climat (Tuffigo Rapidex)", "Pèse-volailles automatiques suspendus", "Nébulisateurs vaccinaux", "Pipettes d'abreuvement et chaînes de distribution d'aliments"],
            "analytical": ["Calcul de l'indice de consommation (IC)", "Taux de ponte journalier et taux de mortalité"]
        },
        "specializations": ["Élevage de poules pondeuses d'œufs de consommation (bio, plein air)", "Élevage de poulets de chair (standard ou label)", "Production de canards gras / palmipèdes", "Multiplication et accouvage (gestion de poussins d'un jour)"],
        "studies": {
            "pathway": [
                {"step": "CAP / Bac Pro", "title": "Bac Pro Conduite et Gestion de l'Entreprise Agricole (CGEA)", "desc": "Formation pratique aux bases de l'élevage et de la biosécurité."},
                {"step": "Bac +2", "title": "BTS Agricole Productions Animales (option Aviculture)", "desc": "Maîtrise technique poussée des ambiances avicoles et de la rentabilité d'atelier."}
            ],
            "schools": [
                {"name": "Lycées agricoles avec ateliers avicoles (Bretagne, Pays de la Loire, Sud-Ouest) — France", "country": "France", "scope": "France"},
                {"name": "Centre d'Aviculture de Mbao (CNA Mbao) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "ISFAR Bambey — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat de formation à la biosécurité en élevage avicole (obligatoire)", "Attestation CPA (Certificat Professionnel Avicole)"],
            "schoolSubjects": ["Aviculture", "Hygiène et biosécurité", "Électricité et automatisme", "Comptabilité"]
        },
        "career": {
            "sectors": ["Entreprises avicoles indépendantes", "Groupements de producteurs de volailles", "Couvoirs industriels", "Filières intégrées d'agroalimentaire avicole"],
            "employerTypes": ["Éleveurs indépendants sous contrat", "Sociétés avicoles intégrées", "Coopératives de l'Ouest de la France ou d'Afrique de l'Ouest"],
            "evolution": "Technicien de bâtiment avicole ➔ Chef d'atelier avicole ➔ Responsable de couvoir ➔ Installation comme chef d'exploitation avicole",
            "pros": "Cycles d'élevage courts (6 à 12 semaines pour le poulet) permettant une réactivité économique rapide, filière très structurée.",
            "cons": "Risque épidémique d'influenza aviaire stressant, astreinte technique 24h/24 en cas de coupure de ventilation, atmosphère poussiéreuse."
        },
        "gettingStarted": {
            "beginnerProject": "Gérer un petit poulailler familial de 20 poules pondeuses avec suivi des dépenses d'aliments et ventes d'œufs.",
            "intermediateProject": "Mettre en place un protocole complet de nettoyage-désinfection d'un bâtiment avicole après dépeuplement.",
            "advancedProject": "Calculer l'indice de consommation et la rentabilité prévisionnelle d'un lot de 10 000 poulets de chair.",
            "portfolioIdeas": ["Plan de biosécurité conforme à la réglementation", "Graphique de suivi de courbe de ponte sur 12 mois"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des microphones intelligents analysent les vocalises des poussins pour détecter la détresse thermique ou respiratoire avant l'œil humain.",
            "automatedTasks": ["Ajustement continu de la ventilation par algorithme météo", "Pesée en continu par caméras 3D"],
            "emergingSkills": ["Surveillance des alertes acoustiques aviaires", "Optimisation énergétique des bâtiments solaires"],
            "humanEdge": "La sensibilité humaine pour calmer les animaux et vérifier leur vivacité lors des tournées nocturnes."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'aviculture est le secteur agro-industriel le plus dynamique, porté par la protection douanière des cuisses de poulet importées. Le pôle avicole des Niayes (Sindia, Thiès, Pout, Notto) emploie des dizaines de milliers de jeunes.",
            "localSectors": ["Grandes fermes avicoles de Thiès, Pout et Sindia (Sedima, NMA Sanders, Badiene)", "Réseaux de distribution d'œufs de Dakar", "Élevages fermiers de pintades et poulets du pays"],
            "remoteWork": "Totalement sur place dans les fermes.",
            "entrepreneurship": "Création d'une ferme de poulets fermiers élevés aux graines locales ou d'une unité de production d'œufs frais pour le marché dakarois."
        },
        "relatedJobSlugs": ["responsable-elevage", "technicien-conseil-elevage", "ingenieur-agroalimentaire", "chef-exploitation-agricole"],
        "connectedFamilies": ["commerce-marketing", "sante-biomedical", "industrie-ingenierie"],
        "resources": [{"type": "article", "title": "Fiche Métier Éleveur de Volailles Studyrama", "url": "https://www.studyrama.com/formations/fiches-metiers/agriculture/aviculteur-91755", "source": "Studyrama"}],
        "sources": ["Studyrama", "ITAVI (Institut Technique de l'Aviculture)", "CNA Mbao"],
        "interests": ["nature-environnement", "construire-fabriquer"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon Studyrama, la viande de volaille est devenue la viande la plus consommée en France et dans le monde en raison de son prix accessible et de sa faible empreinte carbone.",
            "pourquoi": "Le poulet présente le meilleur indice de transformation d'aliments végétaux en protéines animales de tout l'élevage terrestre.",
            "a_retenir": "Un secteur clé de la sécurité alimentaire, alliant rapidité de rotation et technicité poussée des équipements."
        }
    },

    # -----------------------------------------------------------------------
    # 4. AGROÉCOLOGIE, RESSOURCES, SOLS & CLIMAT
    # -----------------------------------------------------------------------
    {
        "id": "ingenieur-agroecologie",
        "slug": "ingenieur-agroecologie",
        "title": "Ingénieur en Agroécologie / Transition Écologique Agricole",
        "aliases": ["Agroécologue", "Ingénieur en agriculture régénératrice", "Consultant transition carbone agricole"],
        "icon": "🌱",
        "image": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Agroécologie, Ressources, Sols & Climat",
        "domainId": "agroecologie-ressources-sols",
        "subdomain": "Agriculture régénérative & sols vivants",
        "sourceOnisep": True,
        "sourceStudyrama": False,
        "isEmerging": True,
        "level": "Bac +5 (Diplôme d'Ingénieur Agronome ou Master Agroécologie)",
        "salary": "🇫🇷 France : 2 900 - 3 600 € brut/mois débutant (~35 000 - 43 200 €/an, Source : APEC / Onisep) • 🇸🇳 Sénégal : 500 000 - 1 600 000 FCFA / mois (Source : ONG internationales, FAO, Cirad)",
        "simpleDefinition": "L'ingénieur en agroécologie conçoit des systèmes agricoles qui s'inspirent des écosystèmes naturels : couverture permanente des sols, haies champêtres, biodiversité fonctionnelle et réduction drastique des produits chimiques.",
        "shortDescription": "Fiche documentée par Onisep, ce scientifique de pointe réconcilie productivité économique des fermes et régénération de la biodiversité et du stockage de carbone.",
        "longDescription": "Face au dérèglement climatique et à l'érosion des sols fertiles, l'ingénieur en agroécologie déploie les principes de l'agriculture régénératrice et de l'agroforesterie. Il développe les couverts végétaux multi-espèces pour nourrir la vie microbienne des sols, favorise les auxiliaires naturels contre les ravageurs et conçoit des plans de séquestration de carbone rémunérés par des crédits carbone agricoles. Il accompagne les territoires et filières dans leur transition.",
        "mainObjective": "Régénérer la santé des sols et la biodiversité tout en maintenant des récoltes viables et résilientes face aux sécheresses.",
        "companyRole": "Architecte de la transition environnementale et garant de la résilience climatique des filières agricoles.",
        "workEnvironment": ["🌾 Diagnostic de terrain (fosses pédologiques, comptage de vers de terre)", "🏢 Bureaux d'études, coopératives engagées, chambres d'agriculture et ONG", "🔬 Travail avec les chercheurs en écologie fonctionnelle"],
        "missions": [
            "Concevoir des assolements agroécologiques intégrant légumineuses et couverts d'interculture",
            "Mesurer les indicateurs biologiques des sols (biomasse microbienne, mycorhizes, taux de matière organique)",
            "Planifier l'implantation de haies brise-vent et de systèmes agroforestiers intra-parcellaires",
            "Monter des dossiers de crédits carbone certifiés (Label Bas-Carbone) pour rémunérer les agriculteurs",
            "Animer des formations et ateliers d'échange de pratiques entre agriculteurs innovants"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Diagnostic d'un sol vivant en parcelle", "desc": "Creusement d'une fosse pédologique pour observer l'enracinement et test de la bêche pour mesurer la structure grumeleuse."},
            {"time": "11:00", "title": "Comptage des auxiliaires de culture", "desc": "Relevé des pièges à carabes et nichoirs à chauves-souris installés pour la régulation des ravageurs."},
            {"time": "14:00", "title": "Modélisation de stockage de carbone", "desc": "Calcul sur logiciel du bilan carbone d'une ferme de 150 hectares passée en semis direct sous couvert."},
            {"time": "16:30", "title": "Restitution aux exploitants du groupement", "desc": "Présentation des résultats économiques comparés entre conventionnel et agroécologie."}
        ],
        "skills": {
            "technical": ["Écologie des sols vivants & microbiologie du sol", "Principes de l'agriculture de conservation des sols (ACS)", "Agroforesterie et gestion de l'arbre champêtre", "Méthodologie des bilans carbone et ACV agricole", "Réglementation environnementale (PAC, directives nitrates)"],
            "human": ["Force de conviction et enthousiasme", "Grande écoute des contraintes des agriculteurs", "Pédagogie scientifique adaptée au terrain", "Vision systémique des écosystèmes"],
            "tools": ["Outils de modélisation carbone (Cool Farm Tool, CAP'2ER)", "Tarières et pénétromètres de sol", "QGIS pour la cartographie des continuités écologiques", "Applications de sciences participatives"],
            "analytical": ["Calcul du retour sur investissement d'un couvert végétal", "Analyse de cycles biogéochimiques (azote, carbone)"]
        },
        "specializations": ["Semis direct sous couvert végétal (ACS)", "Agroforesterie tempérée et tropicale", "Certification et labellisation Bas-Carbone", "Gestion de l'eau et lutte contre l'érosion"],
        "studies": {
            "pathway": [
                {"step": "Bac +2", "title": "Prépa BCPST ou BTS Agricole Agronomie Productions Végétales", "desc": "Excellentes bases scientifiques du vivant."},
                {"step": "Bac +5", "title": "Diplôme d'Ingénieur Agronome spécialité Agroécologie ou Master Écologie Appliquée", "desc": "Formation de référence aux interactions entre biologie, écologie et économie agricole."}
            ],
            "schools": [
                {"name": "Institut Agro (Montpellier / Rennes) — France", "country": "France", "scope": "International"},
                {"name": "UniLaSalle (Beauvais / Rouen) — France", "country": "France", "scope": "France"},
                {"name": "ENSA Thiès (École Nationale Supérieure d'Agriculture) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Conseil Stratégique Phytosanitaire (CSP)", "Auditeur Label Bas-Carbone"],
            "schoolSubjects": ["Écologie fonctionnelle", "Pédologie", "Biologie végétale", "Économie de l'environnement"]
        },
        "career": {
            "sectors": ["Bureaux d'études en environnement et transition agroécologique", "Chambres d'agriculture et instituts techniques (Arvalis, Terres Inovia)", "Grandes coopératives agricoles créant des filières durables", "ONG de développement durable et agences onusiennes (FAO, PNUD)"],
            "employerTypes": ["Groupements d'agriculteurs (GIEE)", "Instituts de recherche appliquée", "Multinationales agroalimentaires en transition"],
            "evolution": "Chargé de mission agroécologie ➔ Ingénieur conseil senior ➔ Directeur de pôle R&D durabilité ➔ Expert international auprès d'institutions mondiales",
            "pros": "Impact direct et visible sur la sauvegarde de la planète, métier passionnant à la frontière de la science et du bon sens paysan, forte dynamique d'embauche.",
            "cons": "Nécessité de dépasser les résistances au changement de certains acteurs traditionnels, délais longs pour constater la régénération biologique des sols."
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser un test de la bêche et un test de la cuvette pour évaluer la stabilité structurale d'un sol agricole.",
            "intermediateProject": "Concevoir un mélange de 6 espèces de couverts végétaux complémentaires (féverole, phacélie, radis chinois, moutarde, vesce, avoine).",
            "advancedProject": "Élaborer le dossier complet de certification Label Bas-Carbone d'une exploitation de polyculture-élevage.",
            "portfolioIdeas": ["Diagnostic agroécologique complet d'une ferme", "Cartographie d'un réseau de haies bocagères avec QGIS"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'imagerie satellite combinée à l'IA quantifie désormais le carbone séquestré dans les sols à l'échelle de la parcelle sans carottage manuel exhaustif.",
            "automatedTasks": ["Estimation de la biomasse des couverts végétaux par satellite Sentinel", "Modélisation prédictive des risques d'érosion"],
            "emergingSkills": ["Supervision des algorithmes de mesure MRV (Monitoring, Reporting, Verification) du carbone", "Cartographie haute résolution des micro-habitats"],
            "humanEdge": "La négociation humaine et la relation de confiance pour convaincre un agriculteur de transformer ses méthodes de culture."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal et dans le Sahel, l'agroécologie est la clé de voûte contre l'avancée du désert : régénération naturelle assistée (RNA de Faidherbia albida), zaï, demi-lunes et diguettes anti-érosives sauvent des milliers d'hectares.",
            "localSectors": ["Projets agroécologiques du Bassin arachidier et du Ferlo", "ONG internationales (Enda Pronat, Agrisud, Cirad)", "Initiative de la Grande Muraille Verte"],
            "remoteWork": "Possibilité d'analyse SIG à distance, combinée avec des missions de terrain régulières.",
            "entrepreneurship": "Création d'un cabinet de conseil en crédits carbone et régénération des terres dégradées en Afrique de l'Ouest."
        },
        "relatedJobSlugs": ["ingenieur-agronome", "ingenieur-irrigation-hydraulique", "charge-valorisation-dechets-agricoles", "chef-exploitation-agricole"],
        "connectedFamilies": ["environnement-climat", "recherche-sciences", "conseil-audit"],
        "resources": [{"type": "article", "title": "Fiche Agroécologue Onisep", "url": "https://www.onisep.fr", "source": "Onisep"}],
        "sources": ["Onisep", "INRAE", "Cirad", "Association Française d'Agroforesterie"],
        "interests": ["nature-environnement", "resoudre-problemes"],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Selon l'Onisep et l'INRAE, un sol agricole sain et riche en vers de terre peut infiltrer jusqu'à 100 mm de pluie à l'heure, évitant ruissellements dévastateurs et inondations.",
            "pourquoi": "Les galeries de vers de terre créent un réseau naturel de drainage et d'aération qui retient l'eau pour les périodes estivales de sécheresse.",
            "a_retenir": "Le métier phare du XXIe siècle pour faire de l'agriculture la solution au changement climatique plutôt qu'un problème."
        }
    },
    {
        "id": "ingenieur-irrigation-hydraulique",
        "slug": "ingenieur-irrigation-hydraulique",
        "title": "Ingénieur en Irrigation & Hydraulique Agricole",
        "aliases": ["Hydraulicien agricole", "Expert en gestion de l'eau agricole", "Ingénieur hydro-agricole"],
        "icon": "💧",
        "image": "https://images.unsplash.com/photo-1515150117381-c4ab6699e374?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Agroécologie, Ressources, Sols & Climat",
        "domainId": "agroecologie-ressources-sols",
        "subdomain": "Hydraulique agricole & gestion de l'eau",
        "sourceOnisep": True,
        "sourceStudyrama": False,
        "isEmerging": True,
        "level": "Bac +5 (Diplôme d'Ingénieur Agronome / Hydraulique ou Master Eau)",
        "salary": "🇫🇷 France : 3 000 - 3 800 € brut/mois débutant (~36 000 - 45 600 €/an, Source : Onisep / APEC) • 🇸🇳 Sénégal : 550 000 - 1 700 000 FCFA / mois (Source : SAED, OMVS, grands périmètres irrigués)",
        "simpleDefinition": "L'ingénieur en irrigation conçoit, dimensionne et pilote les réseaux d'eau agricoles (canaux, forages, stations de pompage solaires, goutte-à-goutte) pour apporter la juste dose d'eau à la plante sans gaspiller la ressource.",
        "shortDescription": "Fiche documentée par Onisep, ce spécialiste indispensable optimise chaque goutte d'eau grâce aux technologies d'irrigation de précision et aux retenues collinaires.",
        "longDescription": "Avec des étés de plus en plus arides, la gestion de l'eau devient l'enjeu numéro un de la survie agricole. L'ingénieur hydraulicien agricole calcule les bilans hydriques des cultures en fonction de l'évapotranspiration (ETP). Il conçoit des réseaux sous pression, sélectionne des systèmes de micro-irrigation goutte-à-goutte enterrée, dimensionne des stations de pompage à énergie solaire et modélise les réserves de substitution pour préserver les nappes phréatiques.",
        "mainObjective": "Garantir la sécurité hydrique des productions agricoles tout en réduisant drastiquement les prélèvements d'eau douce.",
        "companyRole": "Maître d'œuvre des aménagements hydro-agricoles et stratège de l'efficience hydrique.",
        "workEnvironment": ["🏞️ Périmètres irrigués, barrages, canaux et forages profonds", "🏢 Sociétés d'aménagement rural, bureaux d'ingénierie hydraulique et ministères", "💻 Conception assistée par ordinateur (CAO) et modélisation des écoulements"],
        "missions": [
            "Calculer les besoins en eau des cultures selon le sol, le climat et les stades végétatifs",
            "Dimensionner les réseaux de canalisations, vannes régulatrices et stations de pompage",
            "Concevoir des installations de goutte-à-goutte de précision pilotées par sondes capacitives",
            "Mener les études d'impact environnemental et hydrogéologique des forages et retenues collinaires",
            "Superviser les chantiers de construction d'infrastructures hydro-agricoles"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Inspection d'une station de pompage connectée", "desc": "Vérification de la pression des filtres à sable et contrôle du variateur de vitesse de la pompe immergée."},
            {"time": "10:30", "title": "Calcul de débit et dimensionnement sur logiciel", "desc": "Simulation des pertes de charge sur un réseau de 80 hectares irrigué en goutte-à-goutte sous pression."},
            {"time": "14:00", "title": "Réunion avec l'association des usagers de l'eau (AUE)", "desc": "Présentation du calendrier de tours d'eau et des quotas d'arrosage pour la saison sèche."},
            {"time": "16:30", "title": "Analyse des données des sondes tensiométriques", "desc": "Vérification des courbes d'humidité du sol pour déclencher ou différer l'arrosage nocturne."}
        ],
        "skills": {
            "technical": ["Hydraulique en charge et à surface libre", "Pédologie appliquée et rétention d'eau par les sols", "Dimensionnement des réseaux d'irrigation et fertirrigation", "Hydrogéologie et gestion intégrée des bassins versants (GIRE)", "Électromécanique des pompes et énergie solaire photovoltaïque"],
            "human": ["Rigueur mathématique et sens pratique de chantier", "Capacité de négociation et médiation des conflits d'usage de l'eau", "Vision territoriale à long terme", "Mobilité internationale"],
            "tools": ["Logiciels hydrauliques (EPANET, WaterCAD)", "Systèmes d'Information Géographique (QGIS)", "Sondes tensiométriques et capacitives connectées", "Stations météo et calcul automatique d'ETP"],
            "analytical": ["Calcul des bilans hydriques journaliers", "Optimisation technico-économique de l'euro par mètre cube économisé"]
        },
        "specializations": ["Micro-irrigation et fertirrigation de haute précision", "Aménagement des grands périmètres irrigués fluviaux", "Pompage solaire agricole et hydraulique pastorale", "Réutilisation des eaux usées traitées (REUT) en agriculture"],
        "studies": {
            "pathway": [
                {"step": "Bac +2", "title": "Prépa BCPST, Math Sup ou BTS Gestion et Maîtrise de l'Eau (GEMEAU)", "desc": "Bases solides en mathématiques, physique des fluides et génie civil."},
                {"step": "Bac +5", "title": "Diplôme d'Ingénieur Hydraulique ou Agronome spécialisé en Gestion de l'Eau", "desc": "Diplôme d'ingénieur d'État (ENSEEIHT, ENGEES, Institut Agro, 2iE)."}
            ],
            "schools": [
                {"name": "ENGEES (École Nationale du Génie de l'Eau et de l'Environnement de Strasbourg) — France", "country": "France", "scope": "International"},
                {"name": "Institut International d'Ingénierie de l'Eau et de l'Environnement (2iE Ouagadougou)", "country": "Burkina Faso", "scope": "International"},
                {"name": "ENSA Thiès / École Polytechnique de Thiès (EPT) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Habilitation électrique et sécurité des chantiers hydrauliques", "Certification irrigation certifiée (Irrigation Association)"],
            "schoolSubjects": ["Mécanique des fluides", "Hydrologie", "Agronomie", "Génie civil"]
        },
        "career": {
            "sectors": ["Sociétés d'aménagement régional et agences de l'eau", "Grands constructeurs et installateurs de matériel d'irrigation (Netafim, Rivulis)", "Bureaux d'études en ingénierie hydraulique", "Organisations régionales de bassins (OMVS, OMVA)"],
            "employerTypes": ["Agences publiques d'État", "Entreprises multinationales d'irrigation", "Bureaux d'ingénieurs-conseils"],
            "evolution": "Ingénieur d'études hydrauliques ➔ Chef de projet aménagements hydro-agricoles ➔ Directeur d'agence régionale de l'eau ➔ Expert consultant international",
            "pros": "Métier éminemment stratégique pour la survie des populations, haute compétence technique très recherchée mondialement, chantiers d'envergure passionnants.",
            "cons": "Responsabilité lourde en période de pénurie d'eau, pression des usagers en conflit, travail fréquent dans des conditions de chaleur intense sur le terrain."
        },
        "gettingStarted": {
            "beginnerProject": "Installer un kit de goutte-à-goutte alimenté par gravité avec réservoir surélevé dans un jardin expérimental.",
            "intermediateProject": "Modéliser un réseau d'irrigation sous pression de 20 bornes sur le logiciel open-source EPANET.",
            "advancedProject": "Dimensionner un système de pompage solaire au fil du soleil capable de débiter 100 m³/jour pour une parcelle rizicole de 10 ha.",
            "portfolioIdeas": ["Plan de réseau sous QGIS avec courbes de niveau", "Note de calcul de pertes de charge et choix d'une motopompe solaire"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA pilote l'irrigation autonome en croisant les prévisions météo radar, l'évapotranspiration mesurée par satellite et les sondes au sol pour n'injecter que l'eau strictement nécessaire.",
            "automatedTasks": ["Ouverture et fermeture automatisée des électrovannes selon le stress hydrique", "Détection instantanée des fuites et baisses anormales de pression"],
            "emergingSkills": ["Programmation d'algorithmes d'irrigation prédictive", "Intégration de l'énergie solaire et des batteries intelligentes"],
            "humanEdge": "La concertation politique et sociale entre usagers pour partager équitablement un volume d'eau limité."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la maîtrise de l'eau le long de la vallée du fleuve Sénégal (SAED), du bassin de l'Anambé (SODAGRI) et dans la zone des Niayes est le premier moteur de l'autosuffisance en riz et légumes. Les projets de pompage solaire s'y multiplient à grande échelle.",
            "localSectors": ["Vallée du fleuve Sénégal (Saint-Louis, Dagana, Podor, Matam)", "Bassin de l'Anambé (Kolda)", "Périmètres irrigués du lac de Guiers"],
            "remoteWork": "Conception technique possible à distance, mais suivi de chantier physique indispensable.",
            "entrepreneurship": "Création d'une entreprise d'installation et de maintenance de systèmes de pompage solaire et de goutte-à-goutte clés en main pour les producteurs ouest-africains."
        },
        "relatedJobSlugs": ["ingenieur-agronome", "ingenieur-agroecologie", "ingenieur-agritech", "chef-exploitation-agricole"],
        "connectedFamilies": ["environnement-climat", "industrie-ingenierie", "energie-geosciences"],
        "resources": [{"type": "article", "title": "Fiche Ingénieur Hydraulique Onisep", "url": "https://www.onisep.fr", "source": "Onisep"}],
        "sources": ["Onisep", "SAED", "ENGEES", "2iE"],
        "interests": ["nature-environnement", "resoudre-problemes"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon les rapports de la FAO et de l'Onisep, l'agriculture consomme 70% des prélèvements mondiaux d'eau douce : le passage au goutte-à-goutte de précision permet d'économiser 30 à 50% d'eau tout en augmentant les récoltes.",
            "pourquoi": "L'eau est délivrée directement aux racines au millilitre près, éliminant totalement l'évaporation dans l'air des vieux arroseurs canons.",
            "a_retenir": "Un profil d'ingénieur indispensable partout sur le globe pour relever le défi du siècle : produire plus avec moins d'eau."
        }
    },
    {
        "id": "charge-valorisation-dechets-agricoles",
        "slug": "charge-valorisation-dechets-agricoles",
        "title": "Chargé de Valorisation des Déchets Agricoles / Biométhanisation",
        "aliases": ["Responsable d'unité de méthanisation", "Ingénieur biogaz agricole", "Chef de projet économie circulaire agricole"],
        "icon": "♻️",
        "image": "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Agroécologie, Ressources, Sols & Climat",
        "domainId": "agroecologie-ressources-sols",
        "subdomain": "Économie circulaire & biogaz",
        "sourceOnisep": True,
        "sourceStudyrama": False,
        "isEmerging": True,
        "level": "Bac +3 (Licence Pro Énergies Renouvelables) à Bac +5 (Ingénieur Énergie / Agronomie)",
        "salary": "🇫🇷 France : 2 600 - 3 400 € brut/mois débutant (~31 200 - 40 800 €/an, Source : Onisep / Fiches Déchets) • 🇸🇳 Sénégal : 350 000 - 1 100 000 FCFA / mois (Source : Projets biogaz domestique et agro-industries)",
        "simpleDefinition": "Le chargé de valorisation des déchets agricoles transforme les effluents d'élevage (lisiers, fumiers) et résidus de récolte en énergie renouvelable (biogaz, électricité) et en engrais naturel organique (digestat) grâce à la méthanisation.",
        "shortDescription": "Fiche documentée par Onisep dans son univers métiers de l'environnement, ce pionnier de l'économie circulaire métamorphose les sous-produits agricoles en gaz vert et fertilisant.",
        "longDescription": "Acteur central de l'indépendance énergétique rurale, il pilote des unités de méthanisation agricole ou des plateformes de compostage industriel. Selon l'Onisep, il organise la collecte des matières organiques fermentescibles, surveille l'équilibre biologique des bactéries anaérobies dans le digesteur et gère l'injection du biométhane épuré dans le réseau gazier ou la cogénération d'électricité. Il valorise le digestat résiduel pour remplacer les engrais chimiques sur les champs.",
        "mainObjective": "Boucler la boucle de la matière en valorisant 100% des sous-produits agricoles sous forme d'énergie propre et de fertilisants naturels.",
        "companyRole": "Pilote de la transition énergétique des territoires ruraux et manager d'installations de biogaz.",
        "workEnvironment": ["⚙️ Unités de méthanisation agricole avec digesteurs et torchères", "🚛 Plateformes de stockage d'ensilage et fosses à lisier", "💻 Salle de contrôle automatisée et tournées chez les agriculteurs partenaires"],
        "missions": [
            "Élaborer la 'recette' d'approvisionnement du digesteur (mélange optimal lisier, paille, résidus agroalimentaires)",
            "Surveiller les paramètres physico-chimiques (température, pH, teneur en acides gras volatils, taux de méthane)",
            "Gérer la maintenance des équipements électromécaniques (pompes d'incorporation, agitateurs, cogénérateurs)",
            "Planifier l'épandage agronomique raisonné du digestat liquide et solide chez les agriculteurs apporteurs",
            "Veiller au respect des normes de sécurité environnementale (ICPE, étanchéité gaz, prévention des odeurs)"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Tournée de sécurité de l'unité de biogaz", "desc": "Relevé des détecteurs de gaz H2S et CH4, contrôle des pressions de digesteur et niveau d'huile du moteur."},
            {"time": "10:00", "title": "Analyse de la biologie du digesteur", "desc": "Prélèvement d'échantillon, test du ratio FOS/TAC pour vérifier l'absence d'acidification de la flore bactérienne."},
            {"time": "14:00", "title": "Réception des matières organiques", "desc": "Pesée et dépotage d'un camion de pulpes de betteraves ou marcs de fruits d'une usine voisine."},
            {"time": "16:30", "title": "Coordination du plan d'épandage du digestat", "desc": "Planification avec les chauffeurs de tonnes à lisier équipées de pendillards pour éviter la volatilisation d'ammoniac."}
        ],
        "skills": {
            "technical": ["Process de digestion anaérobie et microbiologie du biogaz", "Électromécanique, tuyauterie industrielle et pompage", "Agronomie de la fertilisation et valeur fertilisante du digestat", "Réglementation des installations classées (ICPE)", "Gestion des risques industriels et sécurité gaz (ATEX)"],
            "human": ["Vigilance et sang-froid face aux risques gaz", "Sens des relations publiques avec les riverains et élus", "Polyvalence technique terrain/bureau", "Capacité à gérer des imprévus techniques"],
            "tools": ["Analyseurs de gaz portatifs et fixes (CH4, O2, H2S, CO2)", "Supervision SCADA sur automate industriel", "Logiciels de traçabilité des intrants et plans d'épandage", "Broyoirs et trémies d'incorporation de solides"],
            "analytical": ["Calcul du potentiel méthanogène (BMP) des substrats", "Bilan financier de vente de biométhane et rentabilité des investissements"]
        },
        "specializations": ["Méthanisation à la ferme (agriculteur propriétaire)", "Unités de méthanisation territoriales collectives", "Compostage industriel de déchets verts", "Production de biométhane carburant (BioGNV)"],
        "studies": {
            "pathway": [
                {"step": "Bac +2", "title": "BTS Métiers des Services à l'Environnement ou BTS Électrotechnique / GEMEAU", "desc": "Compétences de base en maintenance et procédés industriels."},
                {"step": "Bac +3", "title": "Licence Pro Gestion des Déchets ou Énergies Renouvelables / Biogaz", "desc": "Formation spécialisée à la conduite d'installations de méthanisation."},
                {"step": "Bac +5", "title": "Diplôme d'Ingénieur Agronome, Énergie ou Environnement", "desc": "Direction de projets d'envergure et ingénierie de méthanisation."}
            ],
            "schools": [
                {"name": "UniLaSalle / AgroParisTech — Spécialité Bioénergies (France)", "country": "France", "scope": "International"},
                {"name": "IUT et Universités proposant la Licence Pro Biogaz (Rennes, Limoges, Pau) — France", "country": "France", "scope": "France"},
                {"name": "Centre d'Études et de Recherches sur les Énergies Renouvelables (CERER Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Formation habilitation ATEX (Atmosphères Explosives)", "Certificat d'Exploitant de Méthanisation Agricole"],
            "schoolSubjects": ["Biologie", "Chimie", "Thermodynamique", "Agronomie"]
        },
        "career": {
            "sectors": ["Entreprises agricoles collectives exploitant un méthaniseur", "Grands énergéticiens (Engie, TotalEnergies Biogaz)", "Bureaux d'études spécialisés en méthanisation", "Coopératives de gestion des déchets organiques"],
            "employerTypes": ["Sociétés par actions simplifiées (SAS) d'agriculteurs méthaniseurs", "Exploitants d'énergies renouvelables", "Collectivités gestionnaires de déchets"],
            "evolution": "Technicien de maintenance méthanisation ➔ Responsable d'exploitation d'unité de biogaz ➔ Chef de projet développement de parcs biogaz ➔ Directeur de filière biométhane régionale",
            "pros": "Métier porteur de sens au cœur de la décarbonation, forte progression du secteur des gaz verts, double ancrage agricole et industriel stimulant.",
            "cons": "Astreintes techniques en cas d'alerte gaz de nuit, odeurs inhérentes à la manipulation des effluents, acceptabilité sociale parfois difficile à gérer avec le voisinage."
        },
        "gettingStarted": {
            "beginnerProject": "Construire un micro-digesteur de démonstration dans un bidon de 20 litres pour allumer un brûleur de camping.",
            "intermediateProject": "Calculer le potentiel de production de biogaz d'un troupeau de 100 vaches laitières à partir des tables BMP de l'Ademe.",
            "advancedProject": "Rédiger le dossier de demande d'enregistrement ICPE d'une unité de biométhane agricole avec plan d'épandage du digestat.",
            "portfolioIdeas": ["Schéma de process P&ID d'une unité de biogaz", "Bilan agronomique comparatif lisier brut vs digestat méthanisé"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des jumeaux numériques couplés à l'IA prédisent la production de gaz à 48 heures en anticipant les fluctuations de température et d'intrants.",
            "automatedTasks": ["Ajustement automatique des temps de brassage des cuves", "Optimisation de l'injection biométhane selon les cours de marché de l'énergie"],
            "emergingSkills": ["Supervision des bioréacteurs par intelligence prédictive", "Captage et valorisation du bio-CO2 pour les serres"],
            "humanEdge": "La négociation locale et l'approvisionnement pérenne en matières organiques auprès des agriculteurs voisins."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le Programme National de Biogaz Domestique (PNB-SN) a installé des milliers de biodigesteurs familiaux dans les zones d'élevage (Ferlo, Thiès, Kaolack), fournissant gaz de cuisson propre sans déboisement et compost fertilisant précieux.",
            "localSectors": ["Programme National de Biogaz (PNB Sénégal)", "Agro-industries sucrières et arachidières (CSS Richard-Toll valorisant la bagasse)", "Fermes avicoles valorisant les fientes en biogaz"],
            "remoteWork": "Gestion technique sur site obligatoire.",
            "entrepreneurship": "Création d'une entreprise d'installation et de maintenance de biodigesteurs préfabriqués en polyéthylène pour les fermes d'élevage du Sénégal."
        },
        "relatedJobSlugs": ["ingenieur-agroecologie", "responsable-elevage", "ingenieur-agronome", "chef-exploitation-agricole"],
        "connectedFamilies": ["environnement-climat", "energie-geosciences", "industrie-ingenierie"],
        "resources": [{"type": "article", "title": "Fiche Métier Valorisation des Déchets Onisep", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/responsable-de-la-collecte-des-dechets-menagers", "source": "Onisep"}],
        "sources": ["Onisep", "ADEME", "AAMF (Association des Agriculteurs Méthaniseurs de France)"],
        "interests": ["nature-environnement", "construire-fabriquer"],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Selon l'Ademe et l'Onisep, la méthanisation permet de diviser par deux les achats d'engrais chimiques de synthèse d'une ferme tout en produisant une énergie 100% renouvelable et locale.",
            "pourquoi": "L'azote organique contenu dans les lisiers ressort du digesteur sous une forme ammoniacale directement assimilable par les plantes, sans dégrader l'humus.",
            "a_retenir": "Le métier emblématique de l'économie circulaire où le déchet d'hier devient le carburant et l'engrais de demain."
        }
    },

    # -----------------------------------------------------------------------
    # 5. AGROÉQUIPEMENT, MACHINISME & ROBOTIQUE AGRICOLE
    # -----------------------------------------------------------------------
    {
        "id": "technico-commercial-agroequipement",
        "slug": "technico-commercial-agroequipement",
        "title": "Technico-Commercial en Agroéquipement / Vendeur Machines Agricoles",
        "aliases": ["Conseiller commercial en machinisme agricole", "Commercial tracteurs et matériels", "Chargé d'affaires agroéquipement"],
        "icon": "🚜",
        "image": "https://images.unsplash.com/photo-1595838796799-a1b7bc8a7c29?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Agroéquipement, Machinisme & Robotique Agricole",
        "domainId": "agroequipement-machinisme",
        "subdomain": "Commerce & conseil agroéquipement",
        "sourceOnisep": False,
        "sourceStudyrama": True,
        "isEmerging": False,
        "level": "Bac +2 (BTS Agroéquipement / BTS NDRC) à Bac +3 (Licence Pro Commerce Agricole)",
        "salary": "🇫🇷 France : 2 200 - 3 500 € brut/mois fixe + commissions élevées (35 000 - 55 000 €/an package, Source : Studyrama / APECITA) • 🇸🇳 Sénégal : 350 000 - 1 200 000 FCFA / mois + intéressement (Source : Concessionnaires matériels de Dakar)",
        "simpleDefinition": "Le technico-commercial en agroéquipement conseille et vend des matériels agricoles de haute technicité (tracteurs guidés GPS, moissonneuses-batteuses, semoirs de précision, robots de désherbage) aux agriculteurs et coopératives.",
        "shortDescription": "Fiche documentée par Studyrama, ce professionnel allie passion du machinisme moderne, sens du contact paysan et compétences financières aiguisées.",
        "longDescription": "Vendre un tracteur moderne de 250 chevaux ou une moissonneuse-batteuse connectée représente un investissement de 150 000 à plus de 500 000 euros pour un exploitant. Le technico-commercial analyse l'assolement, la topographie et la rentabilité de la ferme pour préconiser les équipements les plus rentables. Il réalise des démonstrations dynamiques au champ, négocie la reprise des anciens matériels d'occasion et monte les plans de financement ou de leasing.",
        "mainObjective": "Équiper les exploitations agricoles avec des matériels fiables et innovants garantissant productivité et retour sur investissement rapide.",
        "companyRole": "Moteur du chiffre d'affaires des concessions et partenaire stratégique du renouvellement du parc matériel des exploitants.",
        "workEnvironment": ["🌾 Démonstrations et essais en direct au champ", "🏢 Concessions de machinisme agricole et ateliers de service après-vente", "🚗 Déplacements quotidiens dans les fermes de son secteur géographique"],
        "missions": [
            "Prospecter les exploitants agricoles, entrepreneurs de travaux agricoles (ETA) et CUMA de son secteur",
            "Analyser les besoins techniques en puissance, débit de chantier et compatibilité d'attelage",
            "Organiser des journées de démonstration au champ pour faire tester les nouvelles machines",
            "Chiffrer les devis, évaluer la valeur de reprise du matériel usagé et proposer des solutions de crédit-bail",
            "Assurer la mise en route du matériel livré et former l'agriculteur à la console GPS et à l'ordinateur de bord"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Point commercial en concession", "desc": "Revue des livraisons de tracteurs neuves avec l'atelier et vérification des dossiers de financement bancaire."},
            {"time": "10:00", "title": "Démonstration au champ d'un semoir monograine", "desc": "Mise en route chez un céréalier avec réglage de la profondeur et du jalonnage par coupure de rangs GPS."},
            {"time": "14:30", "title": "Négociation de reprise chez un éleveur", "desc": "Expertise d'un tracteur d'occasion de 8 ans : état des pneumatiques, heures moteur et chiffrage de l'offre."},
            {"time": "17:00", "title": "Suivi des devis et prise de commandes", "desc": "Finalisation d'un contrat de vente d'une mélangeuse distributrice pour un groupement d'éleveurs."}
        ],
        "skills": {
            "technical": ["Connaissance pointue du machinisme agricole (moteur, hydraulique, transmissions à variation continue)", "Technologies embarquées (ISOBUS, autoguidage GPS RTK, télémétrie)", "Calcul de rentabilité et coût de revient machine à l'heure/hectare", "Réglementation du transport routier agricole", "Techniques de négociation B2B"],
            "human": ["Aisance relationnelle et parler franc apprécié des agriculteurs", "Sens de l'écoute et crédibilité technique sans faille", "Dynamisme commercial et ténacité", "Sens de l'organisation autonome"],
            "tools": ["Tracteurs et outils de démonstration toutes marques (John Deere, Claas, New Holland, Fendt)", "Consoles de guidage tactile GPS", "CRM de gestion de portefeuille clients", "Logiciels constructeurs de configuration de machines"],
            "analytical": ["Calcul de retour sur investissement (ROI) machine", "Cotation argus des matériels agricoles d'occasion"]
        },
        "specializations": ["Traction et matériels de récolte lourds", "Outils de travail du sol et semis de précision", "Robotique agricole et désherbage autonome", "Matériels spécialisés viticoles ou arboricoles"],
        "studies": {
            "pathway": [
                {"step": "Bac Pro", "title": "Bac Pro Maintenance des Matériels ou CGEA", "desc": "Apprentissage des bases techniques des engins ou de la conduite d'exploitation."},
                {"step": "Bac +2", "title": "BTS Agroéquipement ou BTS Négociation et Digitalisation de la Relation Client (NDRC)", "desc": "Double compétence indispensable mécanique et commerce."},
                {"step": "Bac +3", "title": "Licence Pro Commercialisation des Agroéquipements", "desc": "Formation reine pour intégrer directement les grands constructeurs et réseaux de concessionnaires."}
            ],
            "schools": [
                {"name": "Lycées agricoles dispensant le BTS Agroéquipement — France", "country": "France", "scope": "France"},
                {"name": "IUT et Écoles spécialisées en commerce agricole (Angers, Beauvais) — France", "country": "France", "scope": "France"},
                {"name": "Centres de formation professionnelle en machinisme agricole (Sénégal)", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Permis B indispensable, Permis Poids Lourd (C) apprécié", "Certifications de formation constructeurs (ex: Université John Deere)"],
            "schoolSubjects": ["Agroéquipement", "Commerce et négociation", "Agronomie", "Comptabilité de gestion"]
        },
        "career": {
            "sectors": ["Concessions de machinisme agricole régionales", "Filiales de distribution de grands constructeurs mondiaux", "Sociétés d'importation d'engins agricoles", "Groupements d'achats agricoles et CUMA"],
            "employerTypes": ["Réseaux de concessionnaires privés", "Constructeurs de matériel agricole", "Entreprises de négoce d'occasion"],
            "evolution": "Vendeur itinérant junior ➔ Technico-commercial senior matériels de pointe ➔ Chef des ventes concession ➔ Directeur de concession agroéquipement",
            "pros": "Rémunération très attractive liée aux commissions sur des ventes de matériels coûteux, travail avec les dernières innovations technologiques (robots, GPS), véhicule de fonction.",
            "cons": "Forte pression sur les objectifs de vente annuels, disponibilité demandée en période de récolte, concurrence commerciale rude entre concessions."
        },
        "gettingStarted": {
            "beginnerProject": "Visiter le salon SIMA ou Innov-Agri pour comparer les solutions de guidage GPS de trois grandes marques.",
            "intermediateProject": "Calculer l'écart de rentabilité entre l'achat individuel d'une moissonneuse et son utilisation partagée en CUMA.",
            "advancedProject": "Construire un argumentaire de vente comparatif pour convaincre un exploitant de passer au semis direct avec un semoir pneumatique sous pression.",
            "portfolioIdeas": ["Dossier technique de présentation d'un tracteur forte puissance", "Simulation financière de crédit-bail avec valeur résiduelle"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'IA aide à configurer les machines sur mesure et valorise les données télématiques de diagnostic à distance comme argument de vente central.",
            "automatedTasks": ["Chiffrage automatique des options de personnalisation machine", "Alertes prédictives de renouvellement de matériel basées sur les heures moteur"],
            "emergingSkills": ["Démonstration d'outils pilotés par intelligence artificielle (caméras de pulvérisation ciblée)", "Conseil sur les aides à la décarbonation du parc"],
            "humanEdge": "La poignée de main, la confiance personnelle et le partage d'un café dans la cour de ferme pour conclure une transaction majeure."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la mécanisation agricole est une priorité nationale pour substituer la traction animale par des motoculteurs et tracteurs adaptés (bassin arachidier, vallée du fleuve). Les concessionnaires dakarois (Sismar, Tracto-Sénégal, CFAO) recrutent activement des profils technico-commerciaux.",
            "localSectors": ["Concessionnaires de matériels agricoles de Dakar et Thiès", "Pôles rizicoles mécanisés de Saint-Louis et Richard-Toll", "Programmes d'équipement de l'État (bailleurs de fonds, DER)"],
            "remoteWork": "Métier de présence commerciale physique.",
            "entrepreneurship": "Création d'une entreprise de location-vente de petits matériels agricoles motorisés adaptés aux petits producteurs familiaux."
        },
        "relatedJobSlugs": ["technicien-maintenance-agroequipement", "ingenieur-machinisme-agricole", "chef-exploitation-agricole", "conseiller-gestion-agricole"],
        "connectedFamilies": ["commerce-marketing", "industrie-ingenierie", "gestion-finance"],
        "resources": [{"type": "article", "title": "Fiche Technico-Commercial Agroéquipement Studyrama", "url": "https://www.studyrama.com/formations/fiches-metiers/agriculture/technico-commercial-en-agroequipement-91756", "source": "Studyrama"}],
        "sources": ["Studyrama", "SEDIMA (Syndicat des Entreprises de Service et Distribution du Machinisme Agricole)", "APECITA"],
        "interests": ["negocier-convaincre", "construire-fabriquer"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon Studyrama et le SEDIMA, le secteur de l'agroéquipement offre un taux d'insertion professionnelle de près de 100% avec des pénuries récurrentes de commerciaux techniques formés.",
            "pourquoi": "Le secteur souffre d'un déficit de notoriété chez les jeunes urbains alors qu'il manipule des technologies plus avancées que le secteur automobile grand public.",
            "a_retenir": "Un métier où l'expertise mécanique rencontre l'excellence commerciale avec des rémunérations parmi les plus motivantes du monde agricole."
        }
    },
    {
        "id": "technicien-maintenance-agroequipement",
        "slug": "technicien-maintenance-agroequipement",
        "title": "Technicien de Maintenance en Agroéquipement / Mécanicien Agricole",
        "aliases": ["Mécanicien agricole", "Technicienne d'atelier agroéquipement", "Dépanneur d'engins agricoles"],
        "icon": "🔧",
        "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Agroéquipement, Machinisme & Robotique Agricole",
        "domainId": "agroequipement-machinisme",
        "subdomain": "Maintenance & SAV agroéquipement",
        "sourceOnisep": True,
        "sourceStudyrama": True,
        "isEmerging": False,
        "level": "CAP / Bac Pro Maintenance des Matériels (option Agricole) à Bac +2 (BTS Agroéquipement)",
        "salary": "🇫🇷 France : 1 900 - 2 800 € brut/mois débutant (~22 800 - 33 600 €/an + primes de dépannage récolte, Source : Onisep / Studyrama) • 🇸🇳 Sénégal : 220 000 - 850 000 FCFA / mois (Source : Ateliers mécaniques, SAED, concessions)",
        "simpleDefinition": "Le technicien de maintenance en agroéquipement entretient, diagnostique et répare les tracteurs, moissonneuses-batteuses et machines agricoles complexes, en atelier ou en urgence directement au milieu du champ.",
        "shortDescription": "Fiche documentée par Onisep et Studyrama, c'est l'urgentiste des champs sans qui aucune récolte ne pourrait aboutir en période de moisson.",
        "longDescription": "Bien loin du mécanicien traditionnel d'autrefois, ce technicien de pointe intervient sur des engins ultra-sophistiqués combinant moteurs thermiques puissants, circuits hydrauliques haute pression (300 bars), bus de communication électronique (CAN-bus), télémétrie et systèmes de dépollution avancés. À l'aide de sa valise informatique de diagnostic, il identifie la cause d'une panne, démonte et répare les organes défaillants pour remettre la machine en route dans les plus brefs délais.",
        "mainObjective": "Maintenir en état opérationnel permanent le parc de machines agricoles et intervenir ultra-rapidement en cas de panne critique au champ.",
        "companyRole": "Pilier de la satisfaction client en concession et garant de la continuité des chantiers agricoles.",
        "workEnvironment": ["🏬 Ateliers de concession équipés de ponts élévateurs lourds", "🚐 Fourgon d'intervention tout-terrain pour dépannages directs au champ", "🌾 Interventions d'urgence de jour comme de nuit en pleine saison de moisson"],
        "missions": [
            "Effectuer les révisions périodiques préventives (vidanges, filtres, graissage, étanchéité)",
            "Brancher la valise de diagnostic électronique constructeur pour relever les codes défauts",
            "Dépanner les circuits hydrauliques (distributeurs, pompes à cylindrée variable, vérins)",
            "Réparer ou reconditionner les transmissions complexes (boîtes de vitesses semi-powershift ou à variation continue)",
            "Installer et paramétrer les consoles GPS d'autoguidage et capteurs connectés"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Diagnostic en atelier d'un tracteur récent", "desc": "Branchement de la valise informatique pour analyser une perte de puissance moteur liée à un capteur de rampe commune."},
            {"time": "10:30", "title": "Remplacement d'un bloc hydraulique", "desc": "Démontage soigné d'un distributeur électrohydraulique fuyant et purge sous pression du circuit."},
            {"time": "14:00", "title": "Appel d'urgence au champ : batteuse à l'arrêt", "desc": "Départ immédiat en fourgon atelier pour réparer une courroie principale de batteur cassée en pleine moisson."},
            {"time": "17:00", "title": "Rapport d'intervention et commande de pièces", "desc": "Saisie informatique du compte-rendu de dépannage et commande des pièces d'origine auprès du constructeur."}
        ],
        "skills": {
            "technical": ["Électronique embarquée et diagnostic par bus CAN", "Hydraulique proportionnelle haute pression", "Mécanique diesel lourde et technologies antipollution (AdBlue, FAP)", "Climatisation des cabines d'engins", "Soudure à l'arc et au semi-automatique"],
            "human": ["Capacité de diagnostic logique et méthodique", "Calme et résistance au stress face à un exploitant angoissé", "Autonomie sur les dépannages isolés au champ", "Bonne condition physique"],
            "tools": ["Valises de diagnostic électronique multimarques et constructeurs", "Manomètres hydrauliques haute pression", "Clés dynamométriques et outillage lourd", "Fourgons ateliers mobiles entièrement équipés"],
            "analytical": ["Lecture experte de schémas électriques et hydrauliques industriels", "Analyse d'échantillons d'huile moteur et hydraulique usagée"]
        },
        "specializations": ["Dépannage machines de récolte lourdes (batteuses, ensileuses)", "Électronique embarquée et systèmes d'autoguidage GPS", "Hydraulique agricole avancée", "Maintenance des robots agricoles autonomes"],
        "studies": {
            "pathway": [
                {"step": "CAP / Bac Pro", "title": "Bac Pro Maintenance des Matériels (option Agricole)", "desc": "Formation pratique par excellence, souvent en apprentissage en concession."},
                {"step": "Bac +2", "title": "BTS Maintenance des Matériels de Construction et de Manutention ou BTS Agroéquipement", "desc": "Expertise approfondie en mécatronique et gestion d'atelier."}
            ],
            "schools": [
                {"name": "Lycées professionnels agricoles et CFA spécialisés maintenance agricole — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle Horticole et Mécanique (CFPH) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Centres d'initiation et de perfectionnement en machinisme agricole (Sénégal)", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Attestation d'aptitude à la manipulation des fluides frigorigènes (clim)", "CACES cariste et engins agricoles"],
            "schoolSubjects": ["Mécanique", "Hydraulique", "Électricité et électronique", "Technologie des agroéquipements"]
        },
        "career": {
            "sectors": ["Concessions de machinisme agricole de marque", "Entreprises de Travaux Agricoles (ETA) propriétaires de flottes", "Grandes exploitations agricoles céréalières", "Constructeurs de matériels agricoles"],
            "employerTypes": ["Concessions privées", "Ateliers d'artisans ruraux indépendants", "Coopératives d'utilisation de matériel agricole (CUMA)"],
            "evolution": "Mécanicien d'atelier junior ➔ Technicien dépanneur itinérant ➔ Chef d'atelier concession ➔ Formateur technique constructeur ou inspecteur SAV",
            "pros": "Métier passionnant pour les mordus de mécanique et technologie, embauche immédiate garantie partout en France et à l'étranger, valorisation de la débrouillardise.",
            "cons": "Périodes d'astreintes très lourdes en été (moissons) week-ends compris, salissures d'huile et travail en conditions météo difficiles au champ."
        },
        "gettingStarted": {
            "beginnerProject": "Effectuer la vidange complète et le changement de tous les filtres d'un tracteur agricole en suivant la revue technique.",
            "intermediateProject": "Rechercher une panne sur un circuit électrique d'éclairage et d'électrovannes à l'aide d'un multimètre et d'un schéma.",
            "advancedProject": "Réaliser le calage d'une pompe à injection électronique et le reconditionnement d'un distributeur hydraulique.",
            "portfolioIdeas": ["Rapport de diagnostic d'une panne de bus CAN résolue", "Schéma hydraulique annoté avec relevés de pression réels"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "La télématique connectée transmet en direct les anomalies de la machine à l'atelier avant même que le chauffeur ne s'en aperçoive, permettant la maintenance prédictive.",
            "automatedTasks": ["Remontée automatique des codes défauts via carte SIM 4G/5G intégrée au tracteur", "Commandes de pièces de rechange préconisées par algorithme"],
            "emergingSkills": ["Télé-diagnostic à distance avec lunettes de réalité augmentée", "Maintenance des capteurs LiDAR et caméras des robots de binage"],
            "humanEdge": "Le savoir-faire manuel pour débloquer un roulement grippé ou ressouder une flèche d'attelage rompue sur une piste boueuse."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la panne de motopompes d'irrigation ou de tracteurs lors des périodes critiques de semis ou de récolte du riz dans la vallée du fleuve entraîne des pertes considérables. Les mécaniciens agricoles qualifiés y sont disputés à prix d'or.",
            "localSectors": ["Vallée du fleuve Sénégal (ateliers de Saint-Louis, Ross Béthio, Podor)", "Bassin arachidier et unités de motoculture", "Ateliers centraux des concessions de Dakar et Thiès"],
            "remoteWork": "100% sur le terrain et en atelier.",
            "entrepreneurship": "Création d'un atelier mobile de dépannage mécanique et hydraulique pour les périmètres rizicoles irrigués du nord du Sénégal."
        },
        "relatedJobSlugs": ["technico-commercial-agroequipement", "ingenieur-machinisme-agricole", "cerealier", "chef-exploitation-agricole"],
        "connectedFamilies": ["industrie-ingenierie", "transport-logistique", "artisanat-metiers-art"],
        "resources": [{"type": "article", "title": "Fiche Métier Mécanicien Agricole Onisep", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/mecanicien-mecanicienne-en-materiel-agricole", "source": "Onisep"}],
        "sources": ["Onisep", "Studyrama", "SEDIMA"],
        "interests": ["construire-fabriquer", "resoudre-problemes"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon l'Onisep et le SEDIMA, il manque en permanence plus de 1 500 mécaniciens en agroéquipement chaque année en France, faisant de ce métier l'un des plus recherchés du pays.",
            "pourquoi": "La sophistication extrême des tracteurs modernes demande des compétences mixtes en informatique, hydraulique et mécanique que peu de jeunes acquièrent.",
            "a_retenir": "Un passeport pour l'emploi garanti avec un métier d'action, de réflexion et d'utilité immédiate pour nourrir la planète."
        }
    },
    {
        "id": "ingenieur-machinisme-agricole",
        "slug": "ingenieur-machinisme-agricole",
        "title": "Ingénieur en Machinisme Agricole & Robotique / R&D Agroéquipement",
        "aliases": ["Ingénieur R&D agroéquipement", "Concepteur de machines agricoles", "Ingénieur mécatronique agricole"],
        "icon": "🤖",
        "image": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Agroéquipement, Machinisme & Robotique Agricole",
        "domainId": "agroequipement-machinisme",
        "subdomain": "R&D & conception agroéquipement",
        "sourceOnisep": True,
        "sourceStudyrama": False,
        "isEmerging": True,
        "level": "Bac +5 (Diplôme d'Ingénieur Mécatronique, Mécanique ou Agronome)",
        "salary": "🇫🇷 France : 3 100 - 4 000 € brut/mois débutant (~37 200 - 48 000 €/an, Source : Onisep / APEC) • 🇸🇳 International / Afrique : 600 000 - 1 800 000 FCFA / mois (Source : Industrie mécanique, centres de recherche)",
        "simpleDefinition": "L'ingénieur en machinisme agricole conçoit, teste et optimise les machines agricoles de demain : robots de désherbage autonomes, semoirs ultra-précis, tracteurs à hydrogène ou électriques et systèmes de pulvérisation ciblée par IA.",
        "shortDescription": "Fiche documentée par Onisep, ce concepteur de pointe révolutionne le travail de la terre en alliant résistance des matériaux, électronique embarquée et transition écologique.",
        "longDescription": "À la croisée de la mécanique lourde, de l'agronomie et de la robotique autonome, cet ingénieur travaille dans les bureaux d'études des constructeurs mondiaux d'engins agricoles. Selon l'Onisep, il conçoit des prototypes sur logiciels de CAO 3D, simule la résistance des châssis aux contraintes des champs et intègre des capteurs de vision artificielle pour permettre aux robots de biner entre les rangs au millimètre près sans abîmer les cultures.",
        "mainObjective": "Concevoir des agroéquipements innovants, moins consommateurs d'énergie, préservant les sols du compactage et automatisant les tâches pénibles.",
        "companyRole": "Pilote de l'innovation produit et de la transformation technologique des constructeurs d'agroéquipements.",
        "workEnvironment": ["💻 Bureaux d'études R&D et stations de CAO 3D", "🛠️ Ateliers de prototypage et bancs d'essais d'endurance", "🌾 Pistes d'essais privées et parcelles d'expérimentation en conditions réelles"],
        "missions": [
            "Concevoir l'architecture mécanique et mécatronique de nouveaux engins sur logiciels CAO 3D (SolidWorks, Catia)",
            "Dimensionner les structures acier, circuits hydrauliques et transmissions pour résister à 10 000 heures de travail intense",
            "Développer les algorithmes de guidage autonome par caméras et capteurs de vision industrielle",
            "Mener des campagnes d'essais au champ pour mesurer le débit de chantier, la consommation et l'usure",
            "Homologuer les machines selon les normes de sécurité européennes et environnementales strictes"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Simulation mécanique par éléments finis", "desc": "Calcul des contraintes de torsion sur le châssis d'un déchaumeur de 12 mètres repliable."},
            {"time": "11:00", "title": "Revue de projet avec l'équipe robotique", "desc": "Validation du choix des capteurs LiDAR et caméras infrarouges pour un robot enjambeur de vigne autonome."},
            {"time": "14:00", "title": "Essais sur piste d'un prototype de pulvérisateur", "desc": "Test de la coupure buse à buse par caméra IA détectant des adventices à 25 km/h."},
            {"time": "16:30", "title": "Analyse télémétrique des données d'essais", "desc": "Dépouillement des enregistrements de vibrations et pressions hydrauliques collectées durant les essais."}
        ],
        "skills": {
            "technical": ["Conception Mécanique Assistée par Ordinateur (CAO 3D, FEA)", "Mécatronique & asservissement électrohydraulique", "Vision par ordinateur & robotique mobile", "Interaction sol-pneu et cinématique des matériels agricoles", "Normes d'homologation des engins agricoles (directive machines)"],
            "human": ["Créativité et esprit d'innovation de rupture", "Sens aigu du travail d'équipe pluridisciplinaire", "Pragmatisme et respect des contraintes de terrain agricole", "Rigueur de méthode scientifique"],
            "tools": ["Logiciels CAO (SolidWorks, PTC Creo, Catia)", "Logiciels de simulation éléments finis (Ansys)", "Environnements de robotique (ROS, Python, C++)", "Bancs d'essais dynamométriques et capteurs de déformation"],
            "analytical": ["Calculs de fatigue des métaux sous sollicitations cycliques", "Optimisation du rapport poids/puissance pour éviter le compactage des sols"]
        },
        "specializations": ["Robotique autonome agricole de plein champ", "Systèmes de pulvérisation ultra-localisée par vision IA", "Électrification et motorisations alternatives (hydrogène, biométhane)", "Technologies de récolte délicate des fruits et légumes"],
        "studies": {
            "pathway": [
                {"step": "Bac +2", "title": "Prépa Scientifique (MP, PSI, PT) ou BUT Génie Mécanique et Productique (GMP)", "desc": "Bases solides en mathématiques, mécanique et résistance des matériaux."},
                {"step": "Bac +5", "title": "Diplôme d'Ingénieur Mécanique, Mécatronique ou Agroéquipement", "desc": "Grandes écoles d'ingénieurs généralistes ou spécialisées en agroéquipement."}
            ],
            "schools": [
                {"name": "UniLaSalle Beauvais (Filière Agroéquipements & Nouvelles Technologies) — France", "country": "France", "scope": "International"},
                {"name": "Arts et Métiers (ENSAM) / INSA — France", "country": "France", "scope": "France"},
                {"name": "École Polytechnique de Thiès (EPT) / ENSA Thiès — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification Conception SolidWorks (CSWA/CSWP)", "Habilitation sécurité robotique mobile"],
            "schoolSubjects": ["Mécanique des solides", "Résistance des matériaux", "Automatique", "Agronomie"]
        },
        "career": {
            "sectors": ["Constructeurs d'agroéquipements mondiaux (Kuhn, Claas, John Deere, CNH Industrial)", "Startups de robotique agricole (Naïo Technologies, Agreenculture)", "Instituts de recherche appliquée (INRAE, Arvalis)", "Bureaux d'ingénierie et équipementiers de premier rang"],
            "employerTypes": ["Grands groupes industriels de machinisme", "Startups AgriTech hardware", "Centres de recherche technologique"],
            "evolution": "Ingénieur études R&D ➔ Chef de projet prototype ➔ Responsable bureau d'études ➔ Directeur R&D constructeur",
            "pros": "Création d'objets concrets spectaculaires, projets au cœur de la transition écologique (moins de phytos grâce aux robots), dimension internationale.",
            "cons": "Cycles de développement longs (3 à 5 ans avant la commercialisation d'une machine), contraintes budgétaires industrielles strictes."
        },
        "gettingStarted": {
            "beginnerProject": "Modéliser un mécanisme de relevage 3 points standardisé sur un logiciel de CAO 3D libre (FreeCAD).",
            "intermediateProject": "Programmer un petit robot sur châssis Arduino capable de suivre une ligne représentant un rang de culture avec des capteurs infrarouges.",
            "advancedProject": "Concevoir et simuler sous Ansys le châssis d'une rampe de pulvérisation en aluminium pour minimiser le fouettement à haute vitesse.",
            "portfolioIdeas": ["Dossier complet de modélisation CAO 3D d'un outil agricole", "Algorithme de détection de mauvaises herbes par vision sous Python"]
        },
        "aiImpact": {
            "level": "Révolutionnaire",
            "summary": "L'IA intégrée aux caméras embarquées permet désormais d'identifier chaque adventice au millimètre près en temps réel et de déclencher une micro-gouttelette de produit ou un coup de laser.",
            "automatedTasks": ["Génération de modèles CAO par IA générative industrielle", "Pilotage autonome complet des trajectoires en bout de champ"],
            "emergingSkills": ["Entraînement de modèles de vision par ordinateur sur des banques d'images de plantes", "Sécurité des systèmes robotiques autonomes en environnement ouvert"],
            "humanEdge": "L'ingéniosité d'architecture pour concilier robustesse à la boue, simplicité d'usage et coût de fabrication abordable."
        },
        "africaContext": {
            "senegalInsight": "En Afrique, les machines occidentales lourdes et coûteuses sont souvent inadaptées aux petites parcelles et sols sahéliens. Les ingénieurs concepteurs de machinisme adapté (semoirs légers, batteuses de mil et fonio locales, motopompes solaires) comme à la SISMAR à Pout sont les bâtisseurs de la souveraineté alimentaire.",
            "localSectors": ["Société Industrielle Sahélienne de Mécaniques, de Matériels Agricoles et de Représentations (SISMAR)", "Centres de recherche (ISRA, Cirad)", "Startups locales de mécanisation solaire"],
            "remoteWork": "Conception CAO télétravaillable, essais physiques sur site.",
            "entrepreneurship": "Création d'une entreprise concevant des machines légères de récolte et de décorticage du fonio ou de l'arachide adaptées aux femmes rurales."
        },
        "relatedJobSlugs": ["technico-commercial-agroequipement", "technicien-maintenance-agroequipement", "ingenieur-agritech", "ingenieur-agronome"],
        "connectedFamilies": ["industrie-ingenierie", "technologies-donnees", "recherche-sciences"],
        "resources": [{"type": "article", "title": "Fiche Ingénieur Machinisme Onisep", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/ingenieur-agronome", "source": "Onisep"}],
        "sources": ["Onisep", "AXEMA (Union des Industriels de l'Agroéquipement)", "UniLaSalle"],
        "interests": ["construire-fabriquer", "technologie-code"],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Selon Onisep et l'INRAE, les nouveaux pulvérisateurs intelligents à caméras IA développés par ces ingénieurs permettent de réduire jusqu'à 80% l'utilisation de désherbants chimiques.",
            "pourquoi": "La machine ne pulvérise plus l'ensemble du champ à l'aveugle mais cible uniquement les feuilles de la mauvaise herbe identifiée en une fraction de seconde.",
            "a_retenir": "Un profil d'ingénieur star qui invente les outils d'une agriculture zéro chimie et hautement productive."
        }
    }
]

print(f"✅ {len(JOBS_PART2)} métiers chargés dans agri_jobs_part2.py")

# execution/agri_jobs_part1.py
# Fiches Métiers Partie 1 : Agronomie (4) + Production Végétale (5) + Élevage (2) = 11 Métiers

JOBS_PART1 = [
    # -----------------------------------------------------------------------
    # 1. AGRONOMIE & SCIENCES AGRICOLES
    # -----------------------------------------------------------------------
    {
        "id": "ingenieur-agronome",
        "slug": "ingenieur-agronome",
        "title": "Ingénieur Agronome / Chercheur en Agronomie",
        "aliases": ["Agronome", "Ingénieure agronome", "Chercheur en sciences agronomiques"],
        "icon": "🧪",
        "image": "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Agronomie & Sciences Agricoles",
        "domainId": "agronomie-sciences-agricoles",
        "subdomain": "Agronomie générale",
        "sourceOnisep": True,
        "sourceStudyrama": True,
        "isEmerging": False,
        "level": "Bac +5 (Diplôme d'Ingénieur Agronome ou Master Agrosciences)",
        "salary": "🇫🇷 France : 2 800 - 3 300 € brut/mois débutant (~33 600 - 39 600 €/an, Source : Onisep) • 🇸🇳 Sénégal : 450 000 - 1 500 000 FCFA / mois (Source : Agro-industries & Recherche)",
        "simpleDefinition": "L'ingénieur agronome étudie les interactions entre le sol, les plantes, les animaux et le climat pour concevoir des systèmes de culture plus productifs, sains et respectueux des ressources naturelles.",
        "shortDescription": "Pilier scientifique de l'agriculture moderne, il conçoit des méthodes culturales durables, sélectionne des variétés résistantes au climat et conseille agriculteurs et industriels.",
        "longDescription": "Scientifique de haut vol et praticien de terrain, l'ingénieur agronome mobilise la biologie végétale et animale, la chimie, la pédologie, l'économie et l'informatique. Selon l'Onisep, il intervient sur la sélection et l'adaptation des plantes, des animaux ou des agroéquipements. Face aux aléas climatiques, il développe des semences économes en eau, élabore des plans de fertilisation raisonnée et pilote des projets agro-industriels majeurs.",
        "mainObjective": "Augmenter durablement les rendements agricoles tout en préservant la fertilité des sols, l'eau et la biodiversité.",
        "companyRole": "Garant de l'innovation technique, de la viabilité économique des exploitations et de la transition écologique des filières.",
        "workEnvironment": ["🌾 Répartition terrain agricole et laboratoire d'analyse", "🏢 Organismes de recherche (INRAE, Cirad, IRD, ISRA), chambres d'agriculture, coopératives et multinationales", "✈️ Forte mobilité sur le terrain et à l'international"],
        "missions": [
            "Diagnostiquer les sols, les climats locaux et les contraintes hydriques pour adapter les itinéraires culturaux",
            "Sélectionner des variétés végétales et des races animales performantes et résilientes face à la sécheresse",
            "Élaborer des protocoles de protection intégrée des cultures réduisant les intrants chimiques",
            "Accompagner les coopératives et exploitants dans l'adoption des technologies de pointe (irrigation intelligente, capteurs)",
            "Coordonner des projets de recherche agronomique et évaluer les retours sur investissement"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Diagnostic parcellaire de terrain", "desc": "Observation directe des plants, prélèvement d'échantillons de sol et relevé des sondes d'humidité."},
            {"time": "10:30", "title": "Analyse au laboratoire d'agrosciences", "desc": "Interprétation des teneurs en minéraux et contrôle microscopique de la santé végétale."},
            {"time": "14:00", "title": "Comité de pilotage avec les producteurs", "desc": "Présentation des résultats d'essais variétaux et recommandation des dates optimales de semis."},
            {"time": "16:30", "title": "Synthèse scientifique et veille agronomique", "desc": "Rédaction du protocole d'expérimentation en collaboration avec des centres de recherche (Cirad, ISRA)."}
        ],
        "skills": {
            "technical": ["Pédologie & biologie des sols vivants", "Phytotechnie & physiologie végétale", "Génétique & amélioration variétale", "Hydraulique agricole & bilans hydriques", "Protection intégrée & lutte biologique", "Biométrie appliquée"],
            "human": ["Sens aigu du contact avec les agriculteurs", "Capacité d'analyse et de synthèse", "Pédagogie & transmission des savoirs", "Aptitude à la négociation", "Mobilité internationale"],
            "tools": ["Systèmes d'Information Géographique (QGIS)", "Modélisation de culture (CropSyst)", "Sondes capacitives et stations météo connectées", "Drones de télédétection", "Logiciels statistiques (R, Python)"],
            "analytical": ["Analyses physico-chimiques de sol", "Analyses du cycle de vie (ACV)", "Calcul de marge brute agricole"]
        },
        "specializations": ["Agronomie tropicale & sahélienne", "Amélioration des semences", "Agroécologie", "Gestion durable de l'eau", "Machinisme agricole"],
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Bac scientifique ou technique agricole", "desc": "Bases solides en biologie, physique-chimie et mathématiques."},
                {"step": "Bac +2", "title": "Prépa BCPST ou BTS Agricole", "desc": "Sciences du vivant et immersion dans les filières agricoles."},
                {"step": "Bac +5", "title": "Diplôme d'Ingénieur Agronome ou Master Agrosciences", "desc": "Spécialisation avancée en agronomie, protection des cultures ou agroécologie."}
            ],
            "schools": [
                {"name": "Institut Agro (Montpellier / Rennes / Dijon) — France", "country": "France", "scope": "International"},
                {"name": "AgroParisTech — France", "country": "France", "scope": "International"},
                {"name": "ENSA Thiès (École Nationale Supérieure d'Agriculture) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "UFR Sciences Agronomiques — Université Gaston Berger (UGB Saint-Louis)", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certiphyto Conseil Stratégique", "Habilitation Télépilote de Drones Agricoles"],
            "schoolSubjects": ["Biologie & Écologie", "Chimie", "Mathématiques", "Géographie & Climatologie"]
        },
        "career": {
            "sectors": ["Recherche publique (INRAE, Cirad, IRD, ISRA)", "Industrie agroalimentaire (25% des débouchés Onisep)", "Conseil agronomique & Bureaux d'études (30%)", "Grandes exploitations & Coopératives"],
            "employerTypes": ["Instituts de recherche", "Industries agroalimentaires", "Chambres d'agriculture", "ONG de développement rural (FAO)"],
            "evolution": "Ingénieur d'études ➔ Chef de projet agronomique ➔ Directeur R&D / Directeur d'exploitation ➔ Consultant international FAO",
            "pros": "Rôle vital pour la souveraineté alimentaire, métier passionnant à la croisée de la science et du terrain, débouchés internationaux.",
            "cons": "Forte disponibilité lors des semis et récoltes, déplacements fréquents en zones rurales isolées."
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser un diagnostic de fertilité et de texture de sol sur une parcelle maraîchère.",
            "intermediateProject": "Tester un essai comparatif d'irrigation goutte-à-goutte avec paillage organique sur des cultures de maïs.",
            "advancedProject": "Modéliser sur QGIS les zones de stress hydrique d'une parcelle à partir d'indices NDVI.",
            "portfolioIdeas": ["Rapport d'audit de sol et plan de fertilisation", "Protocole d'essai variétal résistant à la sécheresse"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA analyse les données de capteurs IoT et d'imagerie drone pour détecter les maladies foliaires et anticiper les besoins en eau avec une précision centimétrique.",
            "automatedTasks": ["Comptage automatisé des plants par vision par ordinateur", "Détection des carences minérales sur imagerie multispectrale"],
            "emergingSkills": ["Paramétrage d'outils d'aide à la décision par IA", "Interprétation agronomique des cartes de rendement"],
            "humanEdge": "La sensibilité du sol vivant, le lien humain avec les producteurs et l'évaluation du risque climatique restent irremplaçables."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'agronome est au cœur des plans d'autosuffisance en riz (Vallée du Fleuve), en oignon/pomme de terre (Niayes) et en céréales sèches (Bassin arachidier).",
            "localSectors": ["Agro-industrie de la Vallée du Fleuve", "Zone des Niayes", "Centres ISRA & AfricaRice", "Sociétés de développement (SAED, SODAGRI)"],
            "remoteWork": "Missions d'expertise en bureau d'études international combinées à des audits de terrain.",
            "entrepreneurship": "Création de fermes modernes intégrées, production de semences certifiées et conseil agronomique privé."
        },
        "relatedJobSlugs": ["conseiller-agro-developpement", "ingenieur-experimentation-vegetale", "ingenieur-agroecologie", "ingenieur-irrigation-eau"],
        "connectedFamilies": ["sciences-biotech", "environnement-climat", "numerique-ia", "industrie-mecanique"],
        "resources": [{"type": "article", "title": "Fiche Onisep Agronome", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/agronome", "source": "Onisep"}],
        "sources": ["Onisep", "Studyrama", "ENSA Thiès", "ISRA"],
        "interests": ["nature-environnement", "resoudre-problemes", "explorer-decouvrir", "technologie-code"],
        "saviezVous": {
            "statut": "metier_stable",
            "fait": "Selon l'Onisep, la carrière d'agronome est de plus en plus internationale et requiert la maîtrise d'au moins deux langues étrangères.",
            "pourquoi": "25% des agronomes exercent dans l'agroalimentaire et 30% dans la recherche et le conseil international pour sécuriser les chaînes alimentaires.",
            "a_retenir": "Un profil d'élite scientifique indispensable face au changement climatique et courtisé par les PME comme par les groupes mondiaux."
        }
    },
    {
        "id": "conseiller-agro-developpement",
        "slug": "conseiller-agro-developpement",
        "title": "Conseiller en Agro-développement International",
        "aliases": ["Expert en développement rural", "Chargé de mission agronomique internationale", "Coopérant agricole"],
        "icon": "🌍",
        "image": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Agronomie & Sciences Agricoles",
        "domainId": "agronomie-sciences-agricoles",
        "subdomain": "Agro-développement international",
        "sourceOnisep": True,
        "sourceStudyrama": True,
        "isEmerging": False,
        "level": "Bac +5 (Ingénieur en Agro-développement ou Master Coopération Agricole)",
        "salary": "🇫🇷 France : 32 000 - 48 000 € brut/an (Source : Studyrama / APEC) • 🇸🇳 Sénégal : 600 000 - 1 800 000 FCFA / mois (Source : ONG & Bailleurs internationaux)",
        "simpleDefinition": "Le conseiller en agro-développement international conçoit, finance et met en œuvre des programmes agricoles pour renforcer la résilience des communautés rurales et la sécurité alimentaire dans les pays en développement.",
        "shortDescription": "Spécialiste des projets ruraux internationaux, il accompagne les coopératives et petits producteurs du Sud dans l'amélioration de leurs filières et de leurs revenus.",
        "longDescription": "Expert cité par Studyrama au confluent de l'agronomie, de l'économie rurale et de la sociologie, il intervient auprès des ONG, agences de développement (AFD, USAID, GIZ) et ministères. Il structure les filières locales (cacao, anacarde, céréales, maraîchage), facilite l'accès au microcrédit et forme les groupements paysans à des méthodes agroécologiques adaptées à leur écosystème.",
        "mainObjective": "Améliorer les conditions de vie des producteurs ruraux par des projets agricoles durables et autonomes.",
        "companyRole": "Pont stratégique entre les bailleurs de fonds internationaux et les réalités du terrain paysan.",
        "workEnvironment": ["🌍 Missions de terrain fréquentes en Afrique subsaharienne, Asie ou Amérique latine", "🏢 Sièges d'ONG internationales, agences multilatérales (FAO, FIDA) et ministères", "🤝 Réunions participatives sous l'arbre à palabres avec les communautés villageoises"],
        "missions": [
            "Concevoir des programmes de renforcement des capacités agricoles et de sécurité alimentaire",
            "Diagnostiquer le fonctionnement technico-économique des exploitations paysannes familiales",
            "Structurer les filières de commercialisation équitable et d'accès aux marchés urbains",
            "Évaluer l'impact social, économique et environnemental des projets financés par les bailleurs",
            "Transférer des innovations agronomiques frugales et faciles à adopter localement"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Atelier participatif avec un groupement de productrices", "desc": "Co-conception d'un calendrier de maraîchage pour sécuriser l'approvisionnement en eau."},
            {"time": "11:30", "title": "Visite technique des banques céréalières", "desc": "Contrôle des conditions de stockage du mil et des mécanismes de prix de réserve villageois."},
            {"time": "14:30", "title": "Réunion de coordination avec les bailleurs", "desc": "Restitution des indicateurs de suivi des rendements auprès de l'Agence Française de Développement (AFD)."},
            {"time": "17:00", "title": "Rédaction du rapport d'évaluation d'étape", "desc": "Mise à jour de la matrice du cadre logique du projet et validation des décaissements."}
        ],
        "skills": {
            "technical": ["Ingénierie de projets de développement rural", "Agronomie tropicale & systèmes agraires", "Économie des filières agricoles du Sud", "Gestion de cycle de projet (GCP)", "Suivi-évaluation axé sur les résultats"],
            "human": ["Empathie culturelle & respect des savoirs locaux", "Capacité d'écoute et de facilitation", "Résilience et adaptabilité sur le terrain", "Maîtrise d'au moins deux langues (anglais/français/langues locales)"],
            "tools": ["Outils de cadre logique et budget bailleurs", "KoboToolbox & tablettes de collecte mobile", "QGIS pour la cartographie des parcelles", "Suites de gestion de projet (MS Project)"],
            "analytical": ["Analyse de chaîne de valeur", "Étude de vulnérabilité climatique", "Calcul de revenu paysan net"]
        },
        "specializations": ["Sécurité alimentaire & Nutrition", "Agroécologie paysanne", "Microfinance rurale & Épargne villageoise", "Gestion des conflits fonciers"],
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Bac général ou sciences économiques", "desc": "Intérêt marqué pour la géographie, l'écologie et l'économie du développement."},
                {"step": "Bac +3", "title": "Licence en Sciences de la Terre, Agronomie ou Développement", "desc": "Compréhension des enjeux géopolitiques et agronomiques mondiaux."},
                {"step": "Bac +5", "title": "Master Agro-développement International ou Diplôme Ingénieur ISTOM", "desc": "Formation spécifique aux projets agricoles dans les pays du Sud."}
            ],
            "schools": [
                {"name": "ISTOM — École Supérieure d'Agro-développement International (France)", "country": "France", "scope": "International"},
                {"name": "Institut Agro Montpellier (Département Sud / IRC)", "country": "France", "scope": "International"},
                {"name": "UFR Sciences Agronomiques — UGB Saint-Louis (Sénégal)", "country": "Sénégal", "scope": "Afrique"}
            ],
            "certifications": ["Certification PMD Pro (Gestion de projets de développement)", "Certification Suivi-Évaluation des Projets Ruraux"],
            "schoolSubjects": ["Géographie", "Biologie", "Sciences économiques", "Langues vivantes"]
        },
        "career": {
            "sectors": ["ONG humanitaires et de développement (Oxfam, Action Contre la Faim, Agronomes et Vétérinaires Sans Frontières)", "Agences bilatérales et multilatérales (AFD, Enabel, GIZ, FAO)", "Bureaux d'études spécialisés"],
            "employerTypes": ["ONG internationales", "Organisations onusiennes", "Institutions de microfinance rurale"],
            "evolution": "Chargé de projet junior ➔ Coordonnateur de programme pays ➔ Directeur pays d'ONG ➔ Expert senior auprès d'institutions internationales",
            "pros": "Impact humain et social immédiat, immersion culturelle extraordinaire, sentiment d'utilité collective profond.",
            "cons": "Conditions de vie parfois rustiques en brousse, éloignement familial, contrats par projet."
        },
        "gettingStarted": {
            "beginnerProject": "Participer à une mission de solidarité internationale ou d'appui à une coopérative agricole étudiante.",
            "intermediateProject": "Réaliser une enquête de terrain sur les pertes post-récolte auprès de petits producteurs de légumes.",
            "advancedProject": "Rédiger une note conceptuelle de projet de micro-irrigation solaire conforme aux standards des bailleurs de fonds.",
            "portfolioIdeas": ["Cadre logique d'un projet d'autonomisation des femmes rurales", "Étude de filière anacarde ou sésame"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'IA facilite la collecte de données sur smartphone en zone blanche et traduit instantanément les alertes météo et phytosanitaires en dialectes locaux.",
            "automatedTasks": ["Nettoyage automatisé des données d'enquêtes agricoles", "Analyse par satellite de la sécheresse régionale"],
            "emergingSkills": ["Utilisation d'applications IA vocales pour paysans non alphabétisés", "Supervision des systèmes d'alerte précoce"],
            "humanEdge": "La médiation sociale, le respect des coutumes villageoises et l'écoute des aînés ne seront jamais automatisés."
        },
        "africaContext": {
            "senegalInsight": "Dakar est le hub régional des grandes agences de coopération et des ONG opérant dans tout le Sahel (Sénégal, Mali, Niger, Burkina, Tchad).",
            "localSectors": ["Programmes de la Grande Muraille Verte", "Agences onusiennes à Diamniadio", "Projets résilience sécheresse du CILSS"],
            "remoteWork": "Alternance fréquente entre rédaction de propositions de projets en télétravail et tournées de terrain.",
            "entrepreneurship": "Création d'entreprises sociales d'agrobusiness équitable et de cabinets d'ingénierie rurale indépendants."
        },
        "relatedJobSlugs": ["ingenieur-agronome", "ingenieur-agroecologie", "chef-exploitation-agricole", "responsable-cooperative-agricole"],
        "connectedFamilies": ["droit-management", "environnement-climat", "sciences-biotech"],
        "resources": [{"type": "article", "title": "Fiche Conseiller en agro-développement Studyrama", "url": "https://www.studyrama.com/formations/fiches-metiers/agriculture/conseiller-en-agro-developpement-international-10068", "source": "Studyrama"}],
        "sources": ["Studyrama", "Onisep", "FAO", "AFD", "ISTOM"],
        "interests": ["nature-environnement", "negocier-convaincre", "explorer-decouvrir"],
        "saviezVous": {
            "statut": "metier_stable",
            "fait": "Ce métier cité par Studyrama est l'un des plus tournés vers le Sud : il combine agronomie de terrain et négociation avec les grands bailleurs mondiaux.",
            "pourquoi": "L'adaptation au dérèglement climatique dans les zones arides exige des experts capables d'adapter des innovations agronomiques aux réalités communautaires locales.",
            "a_retenir": "Une profession à forte vocation humaine, idéale pour les jeunes diplômés désireux d'agir pour la justice climatique et l'autonomie paysanne."
        }
    },
    {
        "id": "ingenieur-experimentation-vegetale",
        "slug": "ingenieur-experimentation-vegetale",
        "title": "Ingénieur en Expérimentation et Production Végétales",
        "aliases": ["Ingénieur agronome d'essais", "Responsable de station d'expérimentation", "Chargé d'essais variétaux"],
        "icon": "🔬",
        "image": "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Agronomie & Sciences Agricoles",
        "domainId": "agronomie-sciences-agricoles",
        "subdomain": "Expérimentation végétale en station",
        "sourceOnisep": True,
        "sourceStudyrama": False,
        "isEmerging": False,
        "level": "Bac +5 (Ingénieur Agronome ou Master Biologie Végétale)",
        "salary": "🇫🇷 France : 30 000 - 45 000 € brut/an (Source : Onisep / APEC) • 🇸🇳 Sénégal : 400 000 - 1 200 000 FCFA / mois (Source : Centres d'essais semenciers)",
        "simpleDefinition": "L'ingénieur en expérimentation végétale teste en conditions réelles et contrôlées de nouvelles variétés de plantes, semences et fertilisants pour valider leur efficacité et leur résistance avant mise sur le marché.",
        "shortDescription": "Associé explicitement à l'agronome par l'Onisep, il conçoit et supervise les protocoles d'essais en microparcelles pour homologuer les innovations végétales.",
        "longDescription": "Véritable passerelle entre la recherche fondamentale et la diffusion aux agriculteurs, l'ingénieur en expérimentation végétale exerce en station d'essais ou chez les semenciers. Selon l'Onisep, il teste rigoureusement les nouvelles variétés (résistance aux bioagresseurs, comportement face au stress hydrique, précocité, rendement) en respectant les Bonnes Pratiques d'Expérimentation (BPE).",
        "mainObjective": "Valider scientifiquement la supériorité agronomique et environnementale des nouvelles variétés de plantes.",
        "companyRole": "Garant de la rigueur méthodologique et de la conformité réglementaire préalable à l'inscription des variétés au catalogue officiel.",
        "workEnvironment": ["🌱 Stations d'essais expérimentales et serres de haute technologie", "🏢 Semenciers privés, instituts techniques (Arvalis, Terres Inovia) et recherche publique (ISRA)", "💻 Outils statistiques d'analyse biométrique"],
        "missions": [
            "Concevoir les plans d'essais agronomiques (blocs de Fisher randomisés, microparcelles)",
            "Superviser les semis expérimentaux, les traitements et les récoltes sur les plateformes d'essais",
            "Mesurer les paramètres physiologiques (hauteur, biomasse, surface foliaire, indice de floraison)",
            "Traiter statistiquement les données d'essais pour prouver la significativité des écarts de rendement",
            "Rédiger les dossiers techniques d'homologation et présenter les résultats aux sélectionneurs"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Notation phénotypique sur les microparcelles", "desc": "Évaluation du degré de résistance d'une série de variétés de maïs face à la rouille foliaire."},
            {"time": "10:30", "title": "Calibrage du semoir d'expérimentation", "desc": "Réglage de la densité précise de semis au grain près avec le technicien d'essais."},
            {"time": "14:00", "title": "Analyse de variance (ANOVA) sous R", "desc": "Vérification statistique des effets traitements contre témoins non traités."},
            {"time": "16:30", "title": "Point d'avancement avec les sélectionneurs", "desc": "Présentation des lignées végétales candidates à l'inscription au catalogue officiel."}
        ],
        "skills": {
            "technical": ["Biométrie & expérimentation agronomique (BPE)", "Génétique végétale & sélection variétale", "Pathologie végétale & entomologie", "Protocoles d'essais agronomiques officiels", "Statistiques inférentielles"],
            "human": ["Rigueur scientifique et probité intellectuelle", "Sens méticuleux de l'observation", "Patience et respect des cycles naturels", "Esprit d'équipe avec le personnel de terrain"],
            "tools": ["Logiciels statistiques (R, SAS, StatBox)", "Capteurs de phénotypage au champ", "Micro-moissonneuses et semoirs de précision", "Tablettes de saisie numérique d'essais"],
            "analytical": ["Analyses de variance et de régression", "Calcul des seuils d'efficacité phytosanitaire"]
        },
        "specializations": ["Expérimentation grandes cultures", "Sélection maraîchère & arboricole", "Homologation biocontrôle", "Phénotypage haut débit"],
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Bac scientifique général", "desc": "Bases solides en mathématiques et biologie végétale."},
                {"step": "Bac +3", "title": "Licence Pro Métiers de l'Expérimentation Végétale", "desc": "Techniques de notation et de conduite des essais au champ."},
                {"step": "Bac +5", "title": "Diplôme d'Ingénieur Agronome spécialité Production Végétale", "desc": "Conception de protocoles d'innovation variétale et d'homologation."}
            ],
            "schools": [
                {"name": "Institut Agro (France)", "country": "France", "scope": "International"},
                {"name": "UniLaSalle — France", "country": "France", "scope": "International"},
                {"name": "ENSA Thiès — Département Productions Végétales (Sénégal)", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Agrément Bonnes Pratiques d'Expérimentation (BPE)", "Certiphyto Expérimentateur"],
            "schoolSubjects": ["Biologie végétale", "Statistiques", "Chimie", "Informatique"]
        },
        "career": {
            "sectors": ["Entreprises semencières (Limagrain, Syngenta, KWS)", "Instituts techniques agricoles", "Centres de recherche agronomique publics (INRAE, ISRA)", "Sociétés de prestations d'essais"],
            "employerTypes": ["Semenciers multinationaux", "Instituts de recherche appliquée", "Pépiniéristes et créateurs variétaux"],
            "evolution": "Ingénieur d'essais ➔ Responsable de station expérimentale ➔ Chef de projet sélection végétale ➔ Directeur de la R&D agronomique",
            "pros": "Travail stimulant mêlant grand air et science pointue, impact direct sur les variétés cultivées dans le monde.",
            "cons": "Pics d'activité intenses au printemps et lors des moissons, rigueur documentaire stricte."
        },
        "gettingStarted": {
            "beginnerProject": "Mettre en place un micro-essai comparatif de germination de 3 variétés de haricot avec répétitions aléatoires.",
            "intermediateProject": "Réaliser une grille de notation phénotypique sur un verger pour comparer la résistance à un champignon.",
            "advancedProject": "Analyser un jeu de données d'essais réels sur R pour déterminer la significativité statistique d'un fertilisant organique.",
            "portfolioIdeas": ["Protocole d'essai variétal BPE complet", "Rapport d'analyse biométrique d'un essai de sorgho"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "Le phénotypage haut débit par imagerie IA et drones permet d'analyser en 5 minutes 1 000 microparcelles là où un technicien mettait 3 jours.",
            "automatedTasks": ["Comptage des épis et mesure de la hauteur de végétation par LiDAR", "Détection précoce des symptômes foliaires par vision assistée"],
            "emergingSkills": ["Pilotage de plateformes de phénotypage numérique", "Nettoyage de jeux de données agronomiques massifs"],
            "humanEdge": "La décision finale d'éliminer ou de retenir une variété prometteuse requiert l'œil agronomique et l'expertise du vivant."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'ISRA (Institut Sénégalais de Recherches Agricoles) dispose de stations d'essais phares à Bambey, Saint-Louis et Nioro du Rip pour tester les variétés de riz, mil et arachide adaptées au climat sahélien.",
            "localSectors": ["Station ISRA de Bambey", "Station rizicole de Ndiaye (Saint-Louis)", "Compagnies semencières locales"],
            "remoteWork": "Analyse biométrique et rédaction de rapports réalisables à distance entre les phases de terrain.",
            "entrepreneurship": "Création de laboratoires de contrôle de semences et d'entreprises de multiplication variétale certifiée."
        },
        "relatedJobSlugs": ["ingenieur-agronome", "technicien-experimentation-vegetale", "cerealier", "pepinieriste"],
        "connectedFamilies": ["sciences-biotech", "environnement-climat"],
        "resources": [{"type": "article", "title": "L'expérimentation végétale selon l'Onisep", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/agronome", "source": "Onisep"}],
        "sources": ["Onisep", "INRAE", "ISRA", "UPOV"],
        "interests": ["sciences-biotech", "nature-environnement", "resoudre-problemes"],
        "saviezVous": {
            "statut": "metier_stable",
            "fait": "Cité par l'Onisep parmi les premiers métiers associés à l'agronome, il teste jusqu'à 500 lignées végétales différentes pour n'en retenir qu'une seule.",
            "pourquoi": "Il faut en moyenne 8 à 10 ans d'expérimentations rigoureuses pour inscrire une nouvelle variété au catalogue officiel des semences.",
            "a_retenir": "Un maillon incontournable qui garantit aux agriculteurs des semences certifiées saines, productives et adaptées aux sécheresses."
        }
    },
    {
        "id": "technicien-experimentation-vegetale",
        "slug": "technicien-experimentation-vegetale",
        "title": "Technicien en Expérimentation et Production Végétales",
        "aliases": ["Technicien d'essais agronomiques", "Aide-expérimentateur", "Technicien de recherche agronomique"],
        "icon": "🌱",
        "image": "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Agronomie & Sciences Agricoles",
        "domainId": "agronomie-sciences-agricoles",
        "subdomain": "Expérimentation végétale en station",
        "sourceOnisep": True,
        "sourceStudyrama": False,
        "isEmerging": False,
        "level": "Bac +2 à Bac +3 (BTS Agricole Agronomie ou Licence Pro)",
        "salary": "🇫🇷 France : 22 000 - 30 000 € brut/an (Source : Onisep / Salaires BTP-Agro) • 🇸🇳 Sénégal : 250 000 - 600 000 FCFA / mois (Source : Stations de recherche)",
        "simpleDefinition": "Le technicien en expérimentation végétale installe physiquement les microparcelles de test, surveille au quotidien la croissance des plantes, applique les traitements et relève avec précision les données biométriques.",
        "shortDescription": "Bras droit opérationnel de l'ingénieur agronome, il met en place les essais variétaux sur le terrain, effectue les pesées et consigne les observations botaniques.",
        "longDescription": "Métier de terrain documenté par l'Onisep en liaison directe avec l'agronome, le technicien en expérimentation végétale assure le suivi minutieux des essais en champ ou sous serre. Il conduit le matériel agricole spécialisé de petite dimension, réalise les notations foliaires, récolte les micro-lots et prépare les échantillons destinés aux laboratoires de génétique ou d'analyses chimiques.",
        "mainObjective": "Assurer la précision et la traçabilité irréprochable de chaque microparcelle expérimentale.",
        "companyRole": "Cheville ouvrière de la station d'essais, garant de la qualité des données brutes collectées.",
        "workEnvironment": ["🌾 Plein air au cœur des microparcelles d'essais", "🚜 Conduite de micro-tracteurs et matériel d'expérimentation", "🔬 Laboratoire de pesée, de tri de grains et de séchage"],
        "missions": [
            "Piqueter et délimiter les microparcelles d'essais selon le plan défini par l'ingénieur",
            "Semer les échantillons avec des semoirs de précision expérimentaux",
            "Surveiller l'émergence des adventices, des maladies cryptogamiques et des insectes ravageurs",
            "Appliquer les produits testés selon des doses micrométriques strictes",
            "Récolter, peser, mesurer le taux d'humidité des grains et étiqueter les échantillons"
        ],
        "typicalDay": [
            {"time": "07:30", "title": "Tournée matinale de notation", "desc": "Comptage du nombre de pieds levés sur une série de 60 microparcelles d'orge et de blé."},
            {"time": "10:00", "title": "Application d'un biostimulant expérimental", "desc": "Pulvérisation dosée au millilitre près avec un pulvérisateur à dos à pression constante."},
            {"time": "13:30", "title": "Prélèvement d'échantillons foliaires", "desc": "Collecte de feuilles et mise sous sachet hermétique codé par code-barres pour analyse ADN."},
            {"time": "16:00", "title": "Saisie des données sur logiciel d'essais", "desc": "Enregistrement des observations du jour et contrôle de cohérence des mesures."}
        ],
        "skills": {
            "technical": ["Conduite d'essais agronomiques au champ", "Reconnaissance botanique & maladies des plantes", "Réglage de matériel agricole expérimental", "Règles d'hygiène et de sécurité phytosanitaire", "Échantillonnage statistique"],
            "human": ["Minutie et rigueur d'exécution sans faille", "Sens prononcé de l'observation de la nature", "Endurance physique pour le travail au grand air", "Esprit d'équipe"],
            "tools": ["Semoirs de microparcelles (Wintersteiger, Haldrup)", "Humidimètres et balances de précision", "Tablettes de saisie numérique durcies", "Pulvérisateurs d'essais calibrés"],
            "analytical": ["Calcul de doses et concentrations", "Contrôle de conformité par rapport au protocole"]
        },
        "specializations": ["Expérimentation semences céréalières", "Maraîchage & horticulture d'essais", "Traitements de semences", "Expérimentation sous serres climatisées"],
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Bac Pro Conduite et Gestion de l'Entreprise Agricole (CGEA) ou Bac STAV", "desc": "Sens pratique et bases en agronomie."},
                {"step": "Bac +2", "title": "BTS Agricole Agronomie : Productions Végétales (APV)", "desc": "Diplôme clé d'accès au métier de technicien d'expérimentation."},
                {"step": "Bac +3", "title": "Licence Professionnelle Métiers de l'Expérimentation Végétale", "desc": "Perfectionnement en réglementation BPE et outils connectés."}
            ],
            "schools": [
                {"name": "Lycées Agricoles et CFA (France)", "country": "France", "scope": "France"},
                {"name": "CNFTE Thiès (Centre National de Formation des Techniciens d'Agriculture) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Institut Supérieur de Formation Agricole et Rurale (ISFAR Bambey) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certiphyto Applicateur Opérateur", "CACES Engins Agricoles"],
            "schoolSubjects": ["Biologie végétale", "Agronomie pratique", "Mathématiques appliquées"]
        },
        "career": {
            "sectors": ["Semenciers privés", "Instituts techniques agricoles", "Centres de recherche agronomique publics", "Coopératives agricoles"],
            "employerTypes": ["Stations de recherche agronomique", "Firmes semencières", "Laboratoires d'essais privés"],
            "evolution": "Technicien d'essais junior ➔ Technicien coordinateur d'essais ➔ Responsable d'équipe technique ➔ Assistant ingénieur de station",
            "pros": "Contact quotidien avec le végétal, travail concret au grand air, participation active à l'innovation agricole.",
            "cons": "Travail physique soumis aux intempéries (chaleur, pluie), concentration exigeante pour éviter toute inversion d'échantillons."
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser un herbier documentant 20 adventices courantes et leurs stades de développement.",
            "intermediateProject": "Participer à une campagne de notation dans une exploitation ou une pépinière locale.",
            "advancedProject": "Créer un protocole de suivi de levée sur 4 microparcelles avec calcul du pourcentage de germination.",
            "portfolioIdeas": ["Journal de bord de suivi d'une culture d'essais", "Grille de notation phénotypique personnalisée"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Les applications mobiles d'IA aident à l'identification instantanée des ravageurs au champ par simple photographie de la feuille.",
            "automatedTasks": ["Reconnaissance photographique des maladies végétales", "Dictée vocale automatisée des notations de terrain"],
            "emergingSkills": ["Utilisation de capteurs de diagnostic portables", "Vérification des annotations automatiques par drone"],
            "humanEdge": "La dextérité manuelle pour les pollinisations croisées et le soin minutieux apporté à chaque plant restent purement humains."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les techniciens formés à l'ISFAR de Bambey ou au CNFTE sont très recherchés par l'ISRA et les agro-industries de la vallée du fleuve pour conduire les essais de nouvelles variétés résilientes.",
            "localSectors": ["Stations ISRA de Saint-Louis, Bambey et Nioro", "Sociétés semencières agréées", "Grands périmètres hydro-agricoles"],
            "remoteWork": "Métier de présence physique sur le terrain des cultures.",
            "entrepreneurship": "Création de pépinières spécialisées dans la production de plants greffés sains pour les maraîchers."
        },
        "relatedJobSlugs": ["ingenieur-experimentation-vegetale", "ingenieur-agronome", "maraicher", "cerealier"],
        "connectedFamilies": ["sciences-biotech", "environnement-climat"],
        "resources": [{"type": "article", "title": "Fiche Onisep : Technicien en expérimentation végétale", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/agronome", "source": "Onisep"}],
        "sources": ["Onisep", "ISRA", "ISFAR Bambey"],
        "interests": ["nature-environnement", "resoudre-problemes"],
        "saviezVous": {
            "statut": "metier_stable",
            "fait": "Le technicien en expérimentation manipule des semoirs capables de semer une graine tous les 10 centimètres avec une précision millimétrique.",
            "pourquoi": "Dans un essai comparatif, la moindre erreur de semis ou de pesée peut fausser des années de travail des chercheurs en génétique végétale.",
            "a_retenir": "Un métier de terrain passionnant, alliant rigueur scientifique et amour de la terre, accessible dès un BTS agricole."
        }
    },

    # -----------------------------------------------------------------------
    # 2. PRODUCTION VÉGÉTALE & CULTURES
    # -----------------------------------------------------------------------
    {
        "id": "cerealier",
        "slug": "cerealier",
        "title": "Céréalier / Producteur de Grandes Cultures",
        "aliases": ["Agriculteur céréalier", "Producteur de grains", "Exploitant en grandes cultures"],
        "icon": "🌾",
        "image": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Végétale & Cultures",
        "domainId": "production-vegetale",
        "subdomain": "Grandes cultures & Céréales",
        "sourceOnisep": False,
        "sourceStudyrama": True,
        "isEmerging": False,
        "level": "Bac Pro à Bac +2 / +3 (BTS Agricole ou Licence Pro Agronomie)",
        "salary": "🇫🇷 France : 20 000 - 45 000 € net/an (variable selon récoltes et cours des marchés, Source : Studyrama / Chambres d'Agriculture) • 🇸🇳 Sénégal : 300 000 - 1 500 000 FCFA / mois (selon taille de l'exploitation céréalière)",
        "simpleDefinition": "Le céréalier cultive des céréales (blé, maïs, orge, riz, mil, sorgho) et des oléoprotéagineux sur de vastes surfaces, en gérant le travail du sol, les semis, la protection des cultures et la moisson mécanisée.",
        "shortDescription": "Métier phare répertorié par Studyrama, il nourrit les populations en produisant les grains de base de l'alimentation humaine et animale grâce à des agroéquipements de haute technologie.",
        "longDescription": "Gestionnaire d'exploitation hautement qualifié, le céréalier maîtrise les cycles agronomiques et la météo. Il pilote des engins équipés de guidage GPS par satellite, ajuste les apports d'engrais selon des cartes de rendement, stocke sa récolte en silos ventilés et commercialise ses céréales en fonction des fluctuations des cours des matières premières agricoles.",
        "mainObjective": "Produire en grande quantité des céréales saines et de qualité boulangère ou fourragère tout en préservant le potentiel agronomique des parcelles.",
        "companyRole": "Pilier central de l'approvisionnement en matières premières pour les minoteries, boulangeries et fabricants d'aliments pour bétail.",
        "workEnvironment": ["🌾 Grands espaces ouverts, plaines céréalières et vallées alluviales", "🚜 Cabines de tracteurs et moissonneuses-batteuses climatisées et connectées", "🏢 Silos de stockage et bureau de gestion technico-économique"],
        "missions": [
            "Préparer les sols par des techniques de labour ou de semis direct sous couvert végétal",
            "Semer les variétés céréalières adaptées aux caractéristiques climatiques et pédologiques",
            "Surveiller le tallage, la montaison et la maturation des grains face aux maladies et insectes",
            "Conduire les chantiers de moisson et optimiser le débit de récolte avant les intempéries",
            "Gérer la conservation des grains (ventilation, maîtrise de l'humidité) et négocier la vente"
        ],
        "typicalDay": [
            {"time": "06:30", "title": "Tour de plaine et vérification météo", "desc": "Contrôle visuel du taux d'humidité des grains de blé ou de maïs pour décider du lancement de la moisson."},
            {"time": "09:00", "title": "Préparation et graissage de la moissonneuse", "desc": "Nettoyage des grilles, contrôle de la barre de coupe et calibrage des capteurs de perte de grains."},
            {"time": "13:00", "title": "Chantier de récolte continue", "desc": "Moisson au guidage RTK centimétrique avec vidange en marche dans les remorques céréalières."},
            {"time": "18:30", "title": "Contrôle de réception au silo", "desc": "Mesure du poids spécifique et de la teneur en eau des bennes livrées au centre de stockage."}
        ],
        "skills": {
            "technical": ["Itinéraires techniques des céréales & oléoprotéagineux", "Conduite et réglage de machines agricoles de pointe", "Mécanique agricole de base & maintenance hydraulique", "Gestion du stockage et conservation des grains", "Commercialisation & marchés à terme agricoles"],
            "human": ["Autonomie et grande capacité de travail", "Réactivité face aux fenêtres météo étroites", "Gestion du stress face aux aléas climatiques", "Vision entrepreneuriale et rigueur financière"],
            "tools": ["Tracteurs et moissonneuses avec console ISOBUS", "Systèmes de guidage GPS par satellite (RTK)", "Logiciels de gestion parcellaire (MesParcelles)", "Humidimètres portables et densimètres"],
            "analytical": ["Calcul de marge nette à l'hectare", "Analyse des bilans azotés", "Optimisation des coûts de carburant"]
        },
        "specializations": ["Grandes cultures biologiques", "Semis direct sous couvert (Agriculture de Conservation des Sols)", "Riziculture irriguée", "Production de semences de céréales certifiées"],
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Bac Pro Conduite et Gestion de l'Entreprise Agricole (CGEA)", "desc": "Formation pratique à la gestion d'une exploitation agricole."},
                {"step": "Bac +2", "title": "BTS Agricole Analyse, Conduite et Stratégie de l'Entreprise agricole (ACSE)", "desc": "Diplôme de référence pour s'installer ou gérer une ferme céréalière."},
                {"step": "Bac +3", "title": "Licence Pro Productions Végétales ou Agriculture de Précision", "desc": "Maîtrise des technologies numériques et de l'agronomie durable."}
            ],
            "schools": [
                {"name": "Lycées Agricoles d'enseignement général et technologique (France)", "country": "France", "scope": "France"},
                {"name": "Institut Supérieur de Formation Agricole et Rurale (ISFAR Bambey) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Centres de formation agricole de la Vallée du Fleuve Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Capacité Professionnelle Agricole (CPA / diplôme requis pour aides à l'installation)", "Certiphyto Décideur en Entreprise Soumise à Agrément"],
            "schoolSubjects": ["Agronomie", "Biologie", "Mécanique", "Gestion d'entreprise"]
        },
        "career": {
            "sectors": ["Exploitations céréalières privées", "Coopératives céréalières et de collecte", "Entreprises de Travaux Agricoles (ETA)", "Sociétés de négoce de grains"],
            "employerTypes": ["Entreprises agricoles familiales ou sociétaires (EARL, GAEC)", "Agro-industries céréalières"],
            "evolution": "Salarié céréalier ➔ Chef de culture grandes cultures ➔ Chef d'exploitation céréalière installé ➔ Administrateur de coopérative céréalière",
            "pros": "Liberté et indépendance au quotidien, utilisation d'équipements technologiques ultra-modernes, fierté de nourrir la société.",
            "cons": "Revenu dépendant des cours mondiaux et de la météo, investissements initiaux en matériel très lourds."
        },
        "gettingStarted": {
            "beginnerProject": "Participer à une saison de moisson en tant qu'aide-chauffeur dans une exploitation agricole.",
            "intermediateProject": "Calculer l'assolement triennal optimal d'une parcelle céréalière en intégrant une légumineuse.",
            "advancedProject": "Établir le plan d'amortissement et de rentabilité d'un semoir de précision sur 5 ans.",
            "portfolioIdeas": ["Plan de fumure et calendrier prévisionnel des travaux céréaliers", "Étude comparative blé conventionnel vs blé biologique"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "Les moissonneuses modernes sont dotées de capteurs optiques analysant en continu la qualité du grain et de systèmes de conduite autonome par vision assistée.",
            "automatedTasks": ["Modulation automatique des doses d'engrais en fonction des cartes satellites", "Direction automatique des engins par guidage GPS/IA"],
            "emergingSkills": ["Supervision des chantiers de récolte connectés", "Trading de grains via plateformes numériques"],
            "humanEdge": "La décision du moment exact de moissonner et la sensibilité au grain ne remplacent pas l'expérience du céréalier."
        },
        "africaContext": {
            "senegalInsight": "Dans la vallée du fleuve Sénégal (Podor, Dagana, Matam), les producteurs de riz irrigué et de maïs exploitent des casiers de grande envergure avec la SAED, tandis que le bassin arachidier produit le mil et le sorgho vivriers.",
            "localSectors": ["Périmètres irrigués de la SAED (Dagana, Richard-Toll)", "Bassin arachidier et céréalier (Kaolack, Fatick)", "Agro-industries céréalières de Saint-Louis"],
            "remoteWork": "Métier de gestion directe au champ et en hangar.",
            "entrepreneurship": "Création d'entreprises de battage et mécanisation agricole itinérante au service des petits producteurs."
        },
        "relatedJobSlugs": ["chef-exploitation-agricole", "technico-commercial-agroequipement", "ingenieur-agronome", "maraicher"],
        "connectedFamilies": ["commerce-marketing", "industrie-mecanique", "numerique-ia"],
        "resources": [{"type": "article", "title": "Fiche Métier Céréalier Studyrama", "url": "https://www.studyrama.com/formations/fiches-metiers/agriculture/cerealier-91752", "source": "Studyrama"}],
        "sources": ["Studyrama", "Chambres d'Agriculture", "Passion Céréales", "SAED Sénégal"],
        "interests": ["nature-environnement", "construire-fabriquer", "donnees-chiffres"],
        "saviezVous": {
            "statut": "metier_stable",
            "fait": "Selon Studyrama, les céréaliers utilisent aujourd'hui des moissonneuses-batteuses connectées valant plus de 400 000 euros, guidées par satellite au centimètre près.",
            "pourquoi": "L'agriculture de précision permet d'ajuster les intrants mètre carré par mètre carré, réduisant les coûts et protégeant l'environnement.",
            "a_retenir": "Un métier qui a radicalement changé d'image : le céréalier moderne est un chef d'entreprise technologique et un gestionnaire de premier plan."
        }
    },
    {
        "id": "maraicher",
        "slug": "maraicher",
        "title": "Maraîcher / Producteur Légumier",
        "aliases": ["Maraîchère", "Producteur de légumes", "Horticulteur vivrier", "Maraîcher bio"],
        "icon": "🥕",
        "image": "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Végétale & Cultures",
        "domainId": "production-vegetale",
        "subdomain": "Cultures maraîchères & Primeurs",
        "sourceOnisep": False,
        "sourceStudyrama": True,
        "isEmerging": False,
        "level": "CAP / Bac Pro Agricole à Bac +2 (BTS Métiers du Végétal)",
        "salary": "🇫🇷 France : 1 800 - 3 200 € net/mois selon mode de commercialisation (Source : Studyrama / Fiches Légumes) • 🇸🇳 Sénégal : 250 000 - 1 000 000 FCFA / mois (Source : Pôle maraîcher des Niayes)",
        "simpleDefinition": "Le maraîcher cultive une grande variété de légumes, herbes aromatiques et petits fruits en plein champ ou sous serre, en assurant la gestion des semis, de l'irrigation, de la récolte manuelle et de la vente fraîche.",
        "shortDescription": "Fiche documentée par Studyrama, il assure l'alimentation quotidienne des villes en produits frais, locaux et de saison grâce à un savoir-faire horticole minutieux.",
        "longDescription": "Professionnel de la terre aux gestes précis, le maraîcher planifie la rotation rapide des cultures sur l'année pour garantir des récoltes continues (tomates, carottes, oignons, salades, aubergines, choux). Qu'il pratique le maraîchage biologique diversifié sur petite surface ou la production sous serres bioclimatiques équipées de goutte-à-goutte, il valorise ses récoltes en circuits courts ou auprès des grossistes.",
        "mainObjective": "Fournir des légumes frais, savoureux et sains tout en optimisant la fertilité du sol sur des surfaces intensives.",
        "companyRole": "Nourricier de proximité des bassins de vie urbains et acteur clé de l'alimentation saine.",
        "workEnvironment": ["🌱 Serres maraîchères, tunnels et parcelles de plein champ", "💧 Travail quotidien avec les systèmes d'arrosage et d'irrigation", "🛒 Marchés locaux, points de vente à la ferme et coopératives"],
        "missions": [
            "Préparer les planches de culture, épandre le compost organique et poser le paillage",
            "Réaliser les semis en mottes, le repiquage et le tuteurage des plants délicats",
            "Régler l'irrigation au goutte-à-goutte en fonction des besoins hydriques de chaque légume",
            "Pratiquer le désherbage thermique ou mécanique et le lâcher d'auxiliaires contre les pucerons",
            "Récolter à maturité optimale, laver, calibrer, conditionner et vendre les légumes"
        ],
        "typicalDay": [
            {"time": "06:00", "title": "Récolte matinale des légumes frais", "desc": "Cueillette à la fraîcheur des salades, tomates et concombres pour préserver leur croquant."},
            {"time": "09:30", "title": "Lavage, tri et mise en cagettes", "desc": "Nettoyage soigné des racines (carottes, navets) et pesée des paniers de commande."},
            {"time": "14:00", "title": "Entretien des serres et repiquage", "desc": "Repiquage de jeunes plants de poivrons et taille des gourmands de tomates sous serre."},
            {"time": "17:00", "title": "Vente directe à la ferme et livraisons", "desc": "Accueil des clients au magasin de producteurs et chargement des livraisons de restaurants."}
        ],
        "skills": {
            "technical": ["Agronomie maraîchère & cycles biologiques des légumes", "Gestion de l'irrigation fertilisante (fertirrigation)", "Techniques de protection biologique intégrée (PBI)", "Gestion de serres et tunnels maraîchers", "Réglementation de l'agriculture biologique"],
            "human": ["Goût pour le travail soigné et rigueur gestuelle", "Endurance physique et résistance aux postures penchées", "Sens du contact direct avec la clientèle", "Organisation et sens de l'anticipation"],
            "tools": ["Micro-tracteurs maraîchers et motoculteurs", "Semoirs de précision manuels (semoir Jang)", "Systèmes d'irrigation goutte-à-goutte", "Filets anti-insectes et toiles de paillage biodégradables"],
            "analytical": ["Planification du calendrier de rotation des cultures", "Calcul des marges par planche maraîchère"]
        },
        "specializations": ["Maraîchage biologique diversifié sur petite surface (microferme)", "Maraîchage de plein champ mécanisé", "Cultures sous serres chauffées / hydroponie", "Production de semences paysannes légumières"],
        "studies": {
            "pathway": [
                {"step": "CAP / Bac Pro", "title": "CAP Agricole Métiers de l'Agriculture ou Bac Pro Conduite de Productions Horticoles", "desc": "Apprentissage pratique du travail du sol et des soins aux cultures."},
                {"step": "Bac +2", "title": "BTS Agricole Métiers du Végétal : Alimentation, Ornement et Environnement (MVAOE)", "desc": "Compétences techniques renforcées et gestion de production maraîchère."},
                {"step": "Bac +3", "title": "Licence Pro Gestion des Systèmes Maraîchers Durables", "desc": "Maîtrise de l'agroécologie légumière et du management de ferme."}
            ],
            "schools": [
                {"name": "Lycées horticoles et maraîchers (France)", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle Horticole (CFPH de Cambérène) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Centres de formation des Niayes (Kayar, Notto, Mboro) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat de Spécialisation (CS) Maraîchage Biologique", "Certiphyto"],
            "schoolSubjects": ["Agronomie", "Botanique", "Technologie maraîchère", "Gestion commerciale"]
        },
        "career": {
            "sectors": ["Exploitations maraîchères indépendantes", "Coopératives de maraîchers", "Jardins d'insertion sociale et fermes urbaines", "Groupements de producteurs bio"],
            "employerTypes": ["Fermes maraîchères familiales", "Grandes entreprises légumières", "Structures de distribution en circuits courts"],
            "evolution": "Ouvrier maraîcher ➔ Chef d'équipe maraîchère ➔ Responsable de cultures sous serres ➔ Installation comme chef d'exploitation maraîchère",
            "pros": "Satisfaction concrète de récolter chaque jour de magnifiques produits, contact direct et chaleureux avec les consommateurs, investissement de départ modéré.",
            "cons": "Travail physique exigeant, horaires matinaux, grande dépendance aux coups de chaleur et aux gelées."
        },
        "gettingStarted": {
            "beginnerProject": "Cultiver 5 variétés de légumes feuilles et racines dans un potager expérimental en mesurant les rendements.",
            "intermediateProject": "Mettre en place un système d'irrigation goutte-à-goutte gravitaire automatisé par programmateur à pile.",
            "advancedProject": "Élaborer le calendrier annuel prévisionnel de production de 30 légumes pour approvisionner 50 paniers hebdomadaires.",
            "portfolioIdeas": ["Plan de rotation sur 4 ans d'une parcelle légumière", "Fiche technique de rentabilité d'une serre de tomates cerises"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'automatisation progresse dans les serres connectées grâce à des robots désherbeurs légers et à des régulateurs climatiques intelligents.",
            "automatedTasks": ["Régulation automatisée de l'aération et de l'ombrage des serres", "Désherbage mécanique autonome de précision"],
            "emergingSkills": ["Pilotage de stations fertirrigation connectées", "Gestion de l'e-commerce fermier et des commandes en ligne"],
            "humanEdge": "Le savoir-faire de récolte des légumes fragiles à parfaite maturité sans les abîmer demeure un geste humain irremplaçable."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la bande côtière des Niayes (de Dakar à Saint-Louis en passant par Mboro et Notto) concentre plus de 80% de la production maraîchère nationale (chou, oignon, pomme de terre, carotte, piment, mangue).",
            "localSectors": ["Pôle des Niayes (Mboro, Notto Gouye Diama, Kayar)", "Ceinture verte de Dakar (Pikine, Cambérène)", "Périmètres maraîchers du lac de Guiers"],
            "remoteWork": "Métier exclusivement d'action physique sur le terrain des parcelles.",
            "entrepreneurship": "Création de fermes maraîchères en bio-intensif, fourniture de légumes bio aux supermarchés et restaurants de Dakar."
        },
        "relatedJobSlugs": ["horticulteur", "cerealier", "pepinieriste", "chef-exploitation-agricole"],
        "connectedFamilies": ["commerce-marketing", "environnement-climat", "sante-biomedical"],
        "resources": [{"type": "article", "title": "Fiche Maraîcher Studyrama", "url": "https://www.studyrama.com/formations/fiches-metiers/agriculture/maraicher-91749", "source": "Studyrama"}],
        "sources": ["Studyrama", "CFPH Cambérène", "FNSEA", "Chambres d'Agriculture"],
        "interests": ["nature-environnement", "construire-fabriquer"],
        "saviezVous": {
            "statut": "metier_stable",
            "fait": "Selon Studyrama, l'engouement croissant pour les circuits courts et le 'manger local' crée une forte demande pour les maraîchers diversifiés.",
            "pourquoi": "Les consommateurs recherchent la fraîcheur, la traçabilité et le goût que la grande importation ne peut égaler.",
            "a_retenir": "Un métier nourricier par excellence qui permet de créer rapidement son activité sur de petites surfaces grâce à une forte valeur ajoutée à l'hectare."
        }
    }
]

print(f"✅ {len(JOBS_PART1)} métiers chargés dans agri_jobs_part1.py")

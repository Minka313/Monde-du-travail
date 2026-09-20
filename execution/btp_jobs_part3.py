# execution/btp_jobs_part3.py
# Fiches Métiers Dérivées du Référentiel Officiel L'Étudiant (Secteur Bâtiment et Travaux Publics)
# Fiches Métiers 27 à 37 : Menuiserie, Pierre, Cordiste, Affaires BTP, Équipements (Électricité, Plomberie, Climatisation), BIM, Domotique, Éco-conception, Diagnostics

BTP_JOBS_PART3 = [
    # -----------------------------------------------------------------------
    # 27. MENUISIER DU BÂTIMENT & AGENCEUR
    # -----------------------------------------------------------------------
    {
        "id": "menuisier",
        "slug": "menuisier",
        "title": "Menuisier du Bâtiment & Agenceur",
        "aliases": ["Menuisier poseur bois/alu/PVC", "Menuisier d'agencement intérieur", "Artisan menuisier fabricant"],
        "icon": "🪚",
        "image": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Menuiserie & Métiers Spécialisés",
        "domainId": "menuiserie-agencement",
        "subdomain": "Menuiserie bois, Aluminium & PVC",
        "sectors": ["BTP", "Menuiserie", "Second Œuvre"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "CAP Menuisier installateur/fabricant à Bac Pro / BTS ERA",
        "salary": "🇫🇷 France : 1 900 - 3 100 € net/mois (~27 000 - 44 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 200 000 - 750 000 FCFA / mois (Menuiseries aluminium de vitrines, ébénisterie bois noble)",
        "simpleDefinition": "Le menuisier fabrique et installe les fermetures extérieures et aménagements intérieurs d'un bâtiment : fenêtres, portes d'entrée, volets, escaliers sur mesure, placards intégrés et parquets en bois, aluminium ou PVC.",
        "shortDescription": "Artisan noble et précis répertorié par L'Étudiant, il allie travail du bois traditionnel et technologies de pointe des profilés en aluminium et double vitrage.",
        "longDescription": "Comme décrit dans les fiches métiers de L'Étudiant, le menuisier moderne partage son temps entre la fabrication en atelier et la pose minutieuse sur le chantier. En atelier, il utilise des machines à bois traditionnelles et des centres d'usinage à commande numérique pour découper et profiler les pièces. Sur le chantier, il pose les fenêtres et portes avec une étanchéité à l'air parfaite (gage de la performance thermique du bâtiment), installe les cuisines aménagées, pose les parquets massifs et monte les escaliers.",
        "mainObjective": "Assurer la fermeture, l'isolation thermique et phonique et l'aménagement esthétique fonctionnel des espaces de vie.",
        "companyRole": "Garant de l'étanchéité des ouvertures et de la chaleur visuelle des aménagements intérieurs.",
        "workEnvironment": [
            "🪚 Ateliers d'ébénisterie et de menuiserie bois ou aluminium",
            "🏠 Chantiers de maisons individuelles, immeubles neufs ou rénovation",
            "🛠️ Pose sur site au contact direct des clients et architectes d'intérieur"
        ],
        "missions": [
            "Prendre les cotes précises au télémètre laser sur le chantier",
            "Fabriquer en atelier les portes, fenêtres, dressings, banques d'accueil et escaliers",
            "Poser les menuiseries extérieures (fenêtres à double ou triple vitrage, baies coulissantes)",
            "Garantir l'isolation thermique et l'étanchéité à l'air selon les normes RE2020",
            "Installer les parquets en bois massif, placards, portes intérieures et plinthes"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Prise de cotes en rénovation", "desc": "Relevé au millimètre près des feuillures de fenêtres anciennes d'un immeuble haussmannien."},
            {"time": "10:00", "title": "Usinage en atelier", "desc": "Découpe et profilage de montants de portes en chêne sur centre d'usinage numérique à 5 axes."},
            {"time": "13:30", "title": "Pose de baies vitrées aluminium", "desc": "Installation d'une grande baie coulissante à rupture de pont thermique avec joint compriband étanche à l'air."},
            {"time": "16:00", "title": "Ajustement d'un dressing sur mesure", "desc": "Pose des coulisses télescopiques et ajustement des portes de placard au rabot manuel pour un jeu de 2 mm parfait."}
        ],
        "skills": {
            "technical": [
                "Technologie du bois, essences locales et exotiques, profilés aluminium et PVC",
                "Maniement des machines-outils traditionnelles (toupie, dégauchisseuse, scie à format)",
                "Normes d'étanchéité à l'air (DTU 36.5 pour les menuiseries extérieures)",
                "Lecture de plans d'exécution et dessin technique d'ébénisterie"
            ],
            "human": [
                "Minutie, précision chirurgicale et sens du détail esthétique",
                "Sensibilité tactile et respect de la noblesse du bois naturel",
                "Autonomie, propreté et politesse lors des interventions en site habité"
            ],
            "tools": [
                "Rabots manuels, ciseaux à bois et scies à onglet radiales",
                "Centres d'usinage à bois à commande numérique (CNC)",
                "Visseuses professionnelles, défonceuses et lamelleuses",
                "Lasermètres et niveaux optiques de précision"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "CAP (2 ans)", "title": "CAP Menuisier Fabricant ou Installateur", "desc": "La voie d'apprentissage classique valorisée par L'Étudiant."},
                {"step": "Bac Pro (3 ans)", "title": "Bac Pro Technicien Menuisier Agenceur (TMA)", "desc": "Formation complète ouvrant sur la chefferie d'atelier et la pose d'agencements complexes."},
                {"step": "BTS (Bac +2)", "title": "BTS Étude et Réalisation d'Agencement (ERA)", "desc": "Diplôme supérieur pour concevoir des agencements de magasins et bureaux de luxe."}
            ],
            "schools": [
                {"name": "Compagnons du Devoir et du Tour de France (Menuiserie) — France", "country": "France", "scope": "France"},
                {"name": "Lycées professionnels du bois et de l'agencement — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["CQP Menuisier Agenceur", "Qualification Qualibat RGE Menuiseries extérieures", "Attestation sécurité machines à bois"],
            "schoolSubjects": ["Technologie du bois et des dérivés", "Dessin technique et DAO", "Procédés de fabrication et d'usinage", "Normes d'isolation thermique"]
        },
        "career": {
            "sectors": ["Entreprises artisanales de menuiserie bois, PVC et aluminium", "Fabricants et installateurs de vérandas et fermetures", "Sociétés d'agencement de boutiques de luxe et de stands", "Ateliers d'ébénisterie et de restauration de meubles anciens"],
            "employerTypes": ["Artisans menuisiers", "PME d'agencement commercial", "Entreprises de second œuvre"],
            "evolution": "Apprenti menuisier ➔ Menuisier qualifié d'atelier/pose ➔ Chef d'atelier menuiserie ➔ Conducteur de travaux agencement ➔ Artisan chef d'entreprise",
            "pros": "Odeur et noblesse du bois, créations sur mesure durables, forte valeur ajoutée reconnue par les clients.",
            "cons": "Poussières de sciure (nécessite aspiration et masques), port de vitrages lourds lors des poses de baies vitrées."
        },
        "gettingStarted": {
            "beginnerProject": "Fabriquer une petite boîte en bois avec assemblage d'angles à coupe d'onglet à 45 degrés.",
            "intermediateProject": "Réaliser une étagère murale sur mesure avec fixations invisibles et finition huilée au chiffon.",
            "advancedProject": "Concevoir et fabriquer un châssis de fenêtre en bois à double vitrage avec battée et joint d'étanchéité.",
            "portfolioIdeas": ["Photos de meubles ou placards sur mesure posés", "Plans d'agencement intérieur côtés sous logiciel de DAO"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des logiciels de conception d'agencement pilotés par IA génèrent automatiquement les programmes d'usinage pour les machines de découpe à partir des dimensions de la pièce.",
            "automatedTasks": ["Découpe automatique optimisée des panneaux de bois (nesting)", "Génération automatique des nomenclatures de quincaillerie"],
            "emergingSkills": ["Programmation et télémaintenance des centres d'usinage bois connectés"],
            "humanEdge": "La lecture du veinage du bois pour un assemblage harmonieux et la dextérité de l'ajustement au millimètre sur le chantier."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la menuiserie est divisée en deux filières très dynamiques : la menuiserie aluminium pour les façades vitrées et baies coulissantes modernes résistant à l'air marin salin, et la menuiserie bois noble traditionnelle (teck, vène, dimb, ébène) très prisée pour les portes sculptées et le mobilier de salon.",
            "localSectors": ["Ateliers de menuiserie aluminium de Dakar (AluSénégal, Eiffage Métal)", "Menuiseries ébénisteries artisanales de Grand Yoff et Soumbédioune", "Entreprises d'aménagement de bureaux"],
            "remoteWork": "Non compatible (atelier de fabrication et chantiers de pose).",
            "entrepreneurship": "Création d'un atelier moderne de menuiserie aluminium et façades vitrées pour les immeubles de Dakar."
        },
        "relatedJobSlugs": ["architecte-dinterieur", "charpentier", "plaquiste"],
        "connectedFamilies": ["artisanat-metiers-dart", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier Menuisier — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "Compagnons du Devoir — Métier de Menuisier", "url": "https://www.compagnons-du-devoir.com/", "source": "Compagnons"}
        ],
        "sources": ["L'Étudiant", "Compagnons du Devoir", "CAPEB"],
        "interests": ["artisanat-metiers-dart", "construire-fabriquer", "arts-design"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Dans une maison contemporaine, le remplacement de vieilles fenêtres par des menuiseries modernes à double vitrage isolant réduit instantanément la facture de chauffage ou de climatisation de 15 à 20% !",
            "pourquoi": "Grâce aux gaz isolants (argon) injectés entre les vitres et aux joints d'étanchéité à l'air posés par le menuisier.",
            "a_retenir": "L'artisan de la lumière et du confort thermique qui habille chaque ouverture."
        }
    },

    # -----------------------------------------------------------------------
    # 28. TAILLEUR DE PIERRE & RESTAURATEUR DU PATRIMOINE
    # -----------------------------------------------------------------------
    {
        "id": "tailleur-de-pierre",
        "slug": "tailleur-de-pierre",
        "title": "Tailleur de Pierre & Restaurateur du Patrimoine",
        "aliases": ["Compagnon tailleur de pierre", "Restaurateur de monuments historiques", "Sculpteur appareilleur de pierre"],
        "icon": "🪨",
        "image": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Menuiserie & Métiers Spécialisés",
        "domainId": "menuiserie-agencement",
        "subdomain": "Taille de pierre & Restauration patrimoniale",
        "sectors": ["BTP", "Patrimoine", "Artisanat d'Art"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "CAP Tailleur de pierre à Bac Pro / Brevet des Métiers d'Art (BMA)",
        "salary": "🇫🇷 France : 1 900 - 3 200 € net/mois (~27 000 - 46 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 200 000 - 700 000 FCFA / mois (Restauration du patrimoine historique de l'île de Gorée et de Saint-Louis)",
        "simpleDefinition": "Le tailleur de pierre façonne les blocs de pierre naturelle (calcaire, granit, grès, marbre) à l'aide de marteaux, ciseaux et disques pour tailler des voûtes, corniches, piliers, linteaux ou sculptures ornant les façades et restaurer les cathédrales et monuments historiques.",
        "shortDescription": "Métier millénaire et d'art répertorié par L'Étudiant, il perpétue des savoir-faire d'excellence indispensables à la conservation de notre histoire bâtie.",
        "longDescription": "Comme décrit dans la fiche métier de L'Étudiant, le tailleur de pierre exerce un métier à la croisée de l'art et de la technique du bâtiment. À partir d'épures géométriques précises (le stéréotomie), il débite les blocs bruts extraits de carrières, taille les moulures au ciseau et à la boucharde, et pose les pierres taillées au millimètre près avec des mortiers de chaux traditionnels. Sa contribution a été mise en lumière mondialement lors du chantier de reconstruction de Notre-Dame de Paris.",
        "mainObjective": "Transformer des blocs de roche brute en éléments architecturaux moulurés durables et restaurer les monuments historiques à l'identique.",
        "companyRole": "Artisan d'art garant de la transmission du geste patrimonial et de la noblesse minérale de la pierre.",
        "workEnvironment": [
            "🪨 Ateliers de taille de pierre et chantiers de restauration de monuments",
            "⛪ Cathédrales, châteaux, églises anciennes et immeubles haussmanniens en pierre de taille",
            "🌤️ Travail sur échafaudages monumentaux au contact direct de l'histoire"
        ],
        "missions": [
            "Tracer les gabarits en zinc ou carton d'après les relevés d'architecture (stéréotomie)",
            "Débiter les blocs de pierre de carrière à la scie à ruban diamantée",
            "Tailler les moulures, bossages, chanfreins et cintres au ciseau, à la gradine et au boucharde",
            "Déposer avec précaution les pierres malades ou dégradées par la pollution sur les monuments",
            "Poser les pierres neuves taillées au mortier de chaux aérienne et couler les coulis de fixation"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Tracé stéréotomique sur bloc", "desc": "Report au compas et à la fausse équerre du gabarit d'un voussoir d'arc gothique sur un bloc de calcaire dur."},
            {"time": "09:30", "title": "Taille de moulure au ciseau", "desc": "Ébauche à la massette et à la gradine puis finition au ciseau fin pour faire ressortir une gorge et un boudin."},
            {"time": "13:30", "title": "Levage de pierre sur échafaudage", "desc": "Montage au palan d'une pierre de corniche de 80 kg à 25 mètres de hauteur sur la façade d'un monument."},
            {"time": "15:30", "title": "Jointoiement à la chaux", "desc": "Pose de la pierre au bain de mortier de chaux naturelle et vérification de la planéité au cordeau."}
        ],
        "skills": {
            "technical": [
                "Stéréotomie (géométrie descriptive appliquée à la coupe des pierres)",
                "Géologie appliquée et connaissance des propriétés des roches sédimentaires et magmatiques",
                "Maniement de la massette, des ciseaux, gradines, gouges et chemins de fer",
                "Techniques de restauration patrimoniale et compatibilité des liants à la chaux"
            ],
            "human": [
                "Patience infinie, minutie et amour du travail artisanal parfait",
                "Sensibilité artistique et respect scrupuleux du patrimoine historique",
                "Excellente condition physique pour le port des outils lourds"
            ],
            "tools": [
                "Massettes en acier, ciseaux droits, gradines et bouchardes",
                "Chemins de fer pour le ragréage manuel de la pierre calcaire",
                "Scies à disque diamanté à eau et meuleuses d'angle",
                "Palans manuels de levage et cales en bois"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "CAP (2 ans)", "title": "CAP Tailleur de Pierre", "desc": "La formation pratique d'apprentissage citée par L'Étudiant pour acquérir les gestes fondamentaux."},
                {"step": "Bac Pro / BP (2 ans)", "title": "Bac Pro Métiers et Arts de la Pierre ou BP Tailleur de Pierre", "desc": "Perfectionnement sur le dessin stéréotomique complexe et la restauration d'édifices anciens."},
                {"step": "Brevet des Métiers d'Art (BMA)", "title": "BMA Arts de la Pierre", "desc": "Formation d'excellence artistique pour la sculpture d'ornements et le haut de gamme patrimonial."}
            ],
            "schools": [
                {"name": "Compagnons du Devoir et du Tour de France (Maison des Tailleurs de Pierre) — France", "country": "France", "scope": "France"},
                {"name": "Lycées des Métiers d'Art et du Patrimoine (Rodez, Saint-Lambert, Thônes) — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle aux Métiers du Patrimoine de Saint-Louis — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Ateliers de restauration patrimoniale de Gorée — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat de Maître Tailleur de Pierre", "Habilitation Travaux sur Monuments Historiques", "CACES échafaudage de pied R408"],
            "schoolSubjects": ["Stéréotomie et géométrie descriptive", "Histoire de l'architecture et des styles", "Technologie de la pierre et géologie", "Sculpture d'ornements"]
        },
        "career": {
            "sectors": ["Entreprises spécialisées dans la restauration des monuments historiques (qualifiées MH)", "PME de taille de pierre, marbrerie et cheminées anciennes", "Ateliers d'artisanat d'art et sculpteurs indépendants"],
            "employerTypes": ["Restaurateurs de monuments historiques", "Marbreries de décoration", "Entreprises de taille de pierre"],
            "evolution": "Apprenti tailleur ➔ Compagnon tailleur qualifié ➔ Appareilleur de chantier ➔ Chef d'atelier de taille ➔ Maître artisan tailleur de pierre",
            "pros": "Prestige culturel immense, travail sur des monuments centenaires uniques, transmission de savoir-faire millénaires inaltérables.",
            "cons": "Poussières de pierre de silice (nécessite masques FFP3 et arrosage), travail physique lourd."
        },
        "gettingStarted": {
            "beginnerProject": "Tailler un bloc de savon ou de craie pour comprendre comment dégager une moulure en relief.",
            "intermediateProject": "Dégauchir les 6 faces d'un pavé en pierre tendre au ciseau pour obtenir des angles droits parfaits.",
            "advancedProject": "Tracer et tailler une corniche à doucine avec retour d'angle à 45 degrés d'après gabarit.",
            "portfolioIdeas": ["Photos de pierres sculptées avec détails de finitions", "Carnet de relevés stéréotomiques de monuments anciens"]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "Des scanners 3D photographient les gargouilles et corniches abîmées pour modéliser la forme originelle, mais la taille de la pierre et la patine finale restent 100% manuelles.",
            "automatedTasks": ["Numérisation 3D sans contact des sculptures endommagées", "Prédébitage au robot de découpe 5 axes"],
            "emergingSkills": ["Utilisation de modèles 3D numériques pour guider les gabarits de taille"],
            "humanEdge": "La sensibilité du tailleur à la vibration de la roche sous la massette pour ne pas fendre le bloc."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la taille de pierre et la maçonnerie patrimoniale sont cruciales pour la sauvegarde des joyaux classés au patrimoine mondial de l'UNESCO : les bâtisses coloniales aux façades sculptées de l'île de Gorée et de la ville historique de Saint-Louis, menacées par l'air marin salé.",
            "localSectors": ["Projets de réhabilitation du patrimoine de Gorée et Saint-Louis (UNESCO / État du Sénégal)", "Carrières de basalte et de calcaire du Sénégal", "Ateliers d'artisanat d'art"],
            "remoteWork": "Non compatible (atelier de taille et chantiers sur échafaudage).",
            "entrepreneurship": "Création d'un atelier spécialisé dans la restauration des façades patrimoniales et la sculpture de pierre décorative au Sénégal."
        },
        "relatedJobSlugs": ["macon", "architecte", "menuisier"],
        "connectedFamilies": ["artisanat-metiers-dart", "culture-medias", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier Tailleur de pierre — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/tailleur-de-pierre-1.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "Compagnons du Devoir — Tailleur de pierre", "url": "https://www.compagnons-du-devoir.com/", "source": "Compagnons"}
        ],
        "sources": ["L'Étudiant", "Compagnons du Devoir", "Groupement des Monuments Historiques (GMH)"],
        "interests": ["artisanat-metiers-dart", "arts-design", "construire-fabriquer"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Pour restaurer la cathédrale Notre-Dame de Paris après l'incendie, il a fallu extraire plus de 1 000 mètres cubes de pierre calcaire lutétienne identique à celle utilisée par les bâtisseurs du Moyen Âge au XIIe siècle !",
            "pourquoi": "Seuls les tailleurs de pierre d'aujourd'hui maîtrisent encore exactement les mêmes gestes manuels que leurs ancêtres bâtisseurs.",
            "a_retenir": "Le sculpteur d'éternité qui répare les blessures du temps sur nos monuments."
        }
    },

    # -----------------------------------------------------------------------
    # 29. CORDISTE / TECHNICIEN DE TRAVAUX SUR CORDES
    # -----------------------------------------------------------------------
    {
        "id": "cordiste-btp",
        "slug": "cordiste-btp",
        "title": "Cordiste / Technicien de Travaux en Hauteur",
        "aliases": ["Alpiniste du bâtiment", "Technicien cordiste BTP", "Ouvrier sur cordes grande hauteur"],
        "icon": "🧗",
        "image": "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Menuiserie & Métiers Spécialisés",
        "domainId": "menuiserie-agencement",
        "subdomain": "Travaux acrobatiques & Grande hauteur",
        "sectors": ["BTP", "Travaux Spécialisés", "Hauteur"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "CQP Cordiste niveau 1/2 ou Titre Professionnel Cordiste",
        "salary": "🇫🇷 France : 2 200 - 3 800 € net/mois (~32 000 - 55 000 € brut/an avec primes de risque et de hauteur, Source : L'Étudiant) • 🇸🇳 Sénégal : 280 000 - 850 000 FCFA / mois (Maintenance de tours à Dakar, ponts suspendus, industrie offshore)",
        "simpleDefinition": "Le cordiste est l'alpiniste du BTP : suspendu dans le vide à deux cordes à plusieurs dizaines ou centaines de mètres de haut, il effectue des travaux d'entretien, de maçonnerie, de peinture, de vitrerie ou de confortement de falaises là où aucun échafaudage ni nacelle ne peut accéder.",
        "shortDescription": "Professionnel acrobatique d'élite cité par L'Étudiant, il associe la maîtrise des techniques de spéléologie et d'escalade aux compétences manuelles de la construction.",
        "longDescription": "Comme décrit dans la fiche métier de L'Étudiant, le cordiste est appelé lorsque l'accès à un ouvrage d'art, un viaduc, un clocher, une éolienne ou une tour de verre est impossible avec des moyens traditionnels. Muni d'un baudrier professionnel, d'une corde de travail et d'une corde de sécurité antichute indépendante, il s'amarre sur des points d'ancrage solides et se déplace dans les airs avec agilité. Une fois positionné, il peut tout faire : purger des façades de pierres instables, poser des filets pare-éboulements sur des falaises, peindre des structures métalliques ou nettoyer des verrières géantes.",
        "mainObjective": "Intervenir en sécurité absolue dans les zones d'accès difficile ou en hauteur pour réaliser des travaux techniques de maintenance ou de sécurisation.",
        "companyRole": "Intervenant d'élite pour les chantiers inaccessibles et les travaux vertigineux.",
        "workEnvironment": [
            "🧗 Suspendu dans le vide sur cordes le long de tours, viaducs, ponts haubanés ou barrages",
            "🏔️ Falaises rocheuses le long des routes de montagne ou falaises côtières",
            "🌤️ Travail en extérieur avec exposition permanente au vent et aux éléments"
        ],
        "missions": [
            "Installer les amarrages de sécurité conformes aux normes et vérifier la solidité des points d'ancrage",
            "Se déplacer sur cordes à l'aide de bloqueurs, descendeurs et longes de sécurité",
            "Réaliser des opérations de maçonnerie, ravalement, peinture ou soudure en suspension",
            "Purger les rochers instables et forer pour poser des grillages pare-blocs sur falaises",
            "Être capable d'effectuer en quelques secondes l'évacuation et le secours d'un équipier suspendu"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Reconnaissance et amarrage en toiture", "desc": "Installation des cordes semi-statiques sur les points d'ancrage certifiés de la toiture terrasse d'une tour de 70 mètres."},
            {"time": "09:30", "title": "Descente et purge de façade", "desc": "Descente en rappel contrôlé le long de la façade vitrée et remplacement de joints d'étanchéité silicones usés à 50 m du sol."},
            {"time": "13:30", "title": "Entraînement au secours sur corde", "desc": "Exercice hebdomadaire obligatoire de décrochage d'un collègue en situation fictive de malaise sur corde."},
            {"time": "15:30", "title": "Inspection visuelle au viaduc", "desc": "Relevé photographique des fissures sous le tablier d'un pont routier au-dessus d'un fleuve."}
        ],
        "skills": {
            "technical": [
                "Techniques de progression et de sauvetage sur cordes (noeuds, amarrages débrayables, mouflage)",
                "Polyvalence technique du BTP (maçonnerie, peinture, vitrerie, soudure, perçage)",
                "Réglementation stricte des équipements de protection individuelle contre les chutes (EPI catégorie 3)",
                "Gestion du vent et des facteurs de chute en milieu vertical"
            ],
            "human": [
                "Absence totale de vertige et sérénité absolue dans le vide",
                "Condition physique athlétique, souplesse et maîtrise de son corps",
                "Rigueur procédurale sans concession (la moindre négligence sur une corde peut être mortelle)"
            ],
            "tools": [
                "Harnais complets d'accès sur corde avec sellette de confort",
                "Cordes semi-statiques de type A et appareils antichutes mobiles (Petzl Asap)",
                "Descendeurs auto-freinants (Petzl I'D) et bloqueurs ventraux",
                "Sacs à outils imperdables avec longes de sécurité"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "CQP Cordiste Niveau 1", "title": "Certificat de Qualification Professionnelle Cordiste (CQP 1)", "desc": "La certification indispensable de référence reconnue par la profession pour exercer sur cordes."},
                {"step": "CQP Niveau 2 / IRATA", "title": "CQP Cordiste Niveau 2 ou IRATA Level 2/3 (International)", "desc": "Qualification supérieure permettant d'encadrer les chantiers et d'exercer partout dans le monde."},
                {"step": "Double Compétence Métier", "title": "CAP préalable en maçonnerie, peinture, soudure ou électricité", "desc": "Un bon cordiste est avant tout un bon ouvrier qui sait manier les cordes pour travailler."}
            ],
            "schools": [
                {"name": "Centres de formation aux travaux sur cordes (CREFUM, Criter, Altipur) — France", "country": "France", "scope": "France"},
                {"name": "Association DPMC (Développement et Promotion des Métiers sur Cordes) — France", "country": "France", "scope": "France"},
                {"name": "Centres de formation aux travaux en hauteur de Dakar — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Écoles de spéléologie et de secours en milieu périlleux — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["CQP Cordiste Niveau 1 & 2 (France)", "Certification internationale IRATA Level 1/2/3", "Attestation Sauveteur Secouriste du Travail spécifique cordiste"],
            "schoolSubjects": ["Techniques de progression verticale", "Résistance des matériaux textiles", "Techniques de sauvetage en hauteur", "Physiologie et syndrome du baudrier"]
        },
        "career": {
            "sectors": ["Entreprises spécialisées dans les travaux d'accès difficile", "Sociétés d'inspection et de maintenance industrielle (pétrochimie, nucléaire, éolien offshore)", "Entreprises de confortement de falaises et génie civil montagnard", "Événementiel et spectacle vivant (riggers)"],
            "employerTypes": ["Entreprises de travaux sur cordes", "Bureaux de contrôle d'ouvrages d'art", "Opérateurs éoliens"],
            "evolution": "Cordiste exécutant ➔ Cordiste confirmé de niveau 2 ➔ Chef d'équipe cordiste ➔ Superviseur de travaux d'accès difficile ➔ Formateur en travaux en hauteur",
            "pros": "Sensations fortes au grand air, vues exceptionnelles sur les villes et paysages, rémunération attractive avec primes de risque.",
            "cons": "Exigence physique permanente pour les bras et les épaules, inconfort possible de la suspension prolongée dans le baudrier."
        },
        "gettingStarted": {
            "beginnerProject": "Pratiquer l'escalade en salle ou en falaise pour tester son aisance avec la hauteur et le vide.",
            "intermediateProject": "Apprendre à réaliser les nœuds fondamentaux du cordiste : huit double, nœud de chaise, papillon alpin et cabestan.",
            "advancedProject": "Réaliser un sauvetage fictif sur simulateur en décrochant une charge suspendue à un amarrage.",
            "portfolioIdeas": ["Certificat de CQP Cordiste obtenu", "Attestation de stage sur un chantier d'accès difficile"]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "Des drones inspectent les façades avec des caméras, mais dès qu'il faut boucher une fissure, remplacer un carreau ou peindre une poutre à 100 m de haut, le geste de l'homme sur corde reste unique.",
            "automatedTasks": ["Inspection visuelle préalable par drone pour repérer les zones de travail", "Modélisation 3D des falaises par LiDAR avant purge"],
            "emergingSkills": ["Utilisation de treuils motorisés électriques légers pour remonter sur corde sans fatigue"],
            "humanEdge": "Le courage dans le vide, l'ingéniosité des nœuds et la dextérité manuelle en suspension."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les techniciens cordistes interviennent sur des ouvrages majeurs : l'entretien du Monument de la Renaissance Africaine (haut de 52 mètres), le lavage et le jointoiement des façades vitrées des tours du Plateau et de Diamniadio, et l'inspection des torchères des plateformes pétrolières et gazières offshore au large de Dakar.",
            "localSectors": ["Entreprises de travaux acrobatiques de Dakar", "Secteur pétrogazier offshore (FPSO Sangomar, GTA)", "Entretien des tours et hôtels de luxe"],
            "remoteWork": "Non compatible (100% suspendu sur les cordes).",
            "entrepreneurship": "Création d'une entreprise spécialisée dans les travaux sur cordes, le nettoyage de vitres en hauteur et la maintenance industrielle au Sénégal."
        },
        "relatedJobSlugs": ["technicien-maintenance-eolienne", "peintre-en-batiment", "couvreur"],
        "connectedFamilies": ["industrie-mecanique", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier Cordiste — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/cordiste.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "DPMC — Développement et Promotion des Métiers sur Cordes", "url": "https://www.metiersducordiste.fr/", "source": "DPMC"}
        ],
        "sources": ["L'Étudiant", "DPMC", "IRATA International"],
        "interests": ["sport-plein-air", "construire-fabriquer", "technique-outils"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Un cordiste ne travaille JAMAIS sur une seule corde : il utilise obligatoirement deux cordes indépendantes (une corde de travail et une corde de sécurité) ayant chacune une résistance à la rupture de plus de 2,5 tonnes !",
            "pourquoi": "Si la corde principale venait à être coupée par une arête coupante, l'antichute bloque instantanément le cordiste sur la seconde corde sans aucune chute.",
            "a_retenir": "L'alpiniste des villes qui défie le vide pour réparer l'inaccessible."
        }
    },

    # -----------------------------------------------------------------------
    # 30. CHARGÉ D'AFFAIRES DANS LE BTP
    # -----------------------------------------------------------------------
    {
        "id": "charge-affaires-btp",
        "slug": "charge-affaires-btp",
        "title": "Chargé d'Affaires dans le BTP",
        "aliases": ["Ingénieur d'affaires BTP", "Responsable d'affaires génie civil/bâtiment", "Commercial de projets BTP"],
        "icon": "💼",
        "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Construction Durable, Éco-Conception & Affaires",
        "domainId": "construction-durable-performance",
        "subdomain": "Développement commercial & Gestion de contrats",
        "sectors": ["BTP", "Commerce", "Gestion"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "Bac +3 (Licence Pro BTP) à Bac +5 (Ingénieur d'Affaires BTP ou Master Management)",
        "salary": "🇫🇷 France : 2 900 - 5 200 € net/mois (~40 000 - 75 000 € brut/an + variable non plafonné, Source : L'Étudiant) • 🇸🇳 Sénégal : 500 000 - 1 800 000 FCFA / mois (Entreprises de construction et équipementiers BTP)",
        "simpleDefinition": "Le chargé d'affaires dans le BTP prospecte de nouveaux clients, répond aux appels d'offres, négocie les contrats de travaux et pilote la rentabilité globale des opérations jusqu'à la livraison complète et le règlement des factures.",
        "shortDescription": "Profil hybride technico-commercial mis en valeur par L'Étudiant, il combine sens aigu de la négociation et expertise des chantiers pour développer le carnet de commandes.",
        "longDescription": "Comme explicité dans la fiche de L'Étudiant, le chargé d'affaires porte une double casquette : développeur commercial et gestionnaire de projets. Il identifie les futurs projets de construction publics ou privés, rencontre les décideurs (promoteurs, mairies, directeurs d'usines), élabore l'offre avec le bureau d'études, défend la marge de l'entreprise lors des négociations contractuelles, puis supervise le déroulement des travaux en lien avec les conducteurs de travaux pour assurer la satisfaction totale du client.",
        "mainObjective": "Développer le chiffre d'affaires et la rentabilité de l'entreprise en signant et pilotant des contrats de travaux pérennes.",
        "companyRole": "Moteur du carnet de commandes et garant de la relation client et de la marge financière.",
        "workEnvironment": [
            "🏢 Sièges d'entreprises de construction, bureaux régionaux ou cabinets d'ingénierie",
            "🤝 Salons professionnels, déjeuners d'affaires et soutenances devant des jurys",
            "🚗 Mobilité fréquente pour visiter les clients et inspecter les chantiers en cours"
        ],
        "missions": [
            "Détecter les opportunités d'affaires et prospecter les maîtres d'ouvrage publics et privés",
            "Piloter l'élaboration des offres techniques et financières avec les équipes d'études de prix",
            "Négocier les conditions contractuelles, les prix et les plannings avec les clients",
            "Superviser le bon déroulement technique et financier des chantiers remportés",
            "Fidéliser son portefeuille de clients et assurer le recouvrement des paiements"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Prospection et veille marchés", "desc": "Veille sur les avis de marchés publics régionaux pour repérer la construction d'un futur groupe scolaire de 8 millions d'euros."},
            {"time": "10:30", "title": "Soutenance commerciale", "desc": "Présentation orale de l'offre technique de l'entreprise devant le comité de sélection d'un promoteur immobilier privé."},
            {"time": "14:00", "title": "Point d'avancement sur chantier", "desc": "Visite d'un chantier en cours avec le client pour valider un avenant de travaux modificatifs acquéreurs (TMA)."},
            {"time": "16:30", "title": "Bilan de rentabilité d'affaires", "desc": "Examen de la marge brute dégagée sur les trois chantiers livrés le mois dernier avec le directeur d'agence."}
        ],
        "skills": {
            "technical": [
                "Technologies du bâtiment et des travaux publics (gros œuvre, second œuvre ou lots techniques)",
                "Droit des contrats de construction et gestion des risques d'impayés",
                "Techniques de vente consultative complexe B2B et négociation grand compte",
                "Gestion financière d'affaires et suivi des comptes de résultats de chantier"
            ],
            "human": [
                "Aisance relationnelle, charisme naturel et force de persuasion",
                "Sens de l'écoute active et capacité d'adaptation à des interlocuteurs variés",
                "Ténacité commerciale et goût du challenge des résultats"
            ],
            "tools": [
                "Logiciels CRM de gestion de la relation client (Salesforce, HubSpot)",
                "Progiciels de gestion intégrée BTP (Onaya, Sage BTP, EBP)",
                "Outils de présentation commerciale percutants",
                "Plateformes d'appels d'offres dématérialisées"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "BTS / BUT (Bac +2/+3)", "title": "BTS CCST (Conseil et Commercialisation de Solutions Techniques) ou BUT Génie Civil", "desc": "Bases solides en technique du bâtiment et négociation commerciale."},
                {"step": "Licence Pro (Bac +3)", "title": "Licence Pro Chargé d'Affaires BTP", "desc": "Formation de spécialisation en alternance très prisée par les PME du bâtiment."},
                {"step": "Master / Ingénieur d'Affaires (Bac +5)", "title": "Diplôme d'Ingénieur d'Affaires (ESTP, ESTA, Kedge, Écoles d'Ingénieurs)", "desc": "Formation d'excellence pour négocier des contrats de plusieurs dizaines de millions d'euros."}
            ],
            "schools": [
                {"name": "ESTP Paris (Mastère Spécialisé Ingénierie d'Affaires) — France", "country": "France", "scope": "France"},
                {"name": "ESTA Belfort (École Supérieure des Technologies et des Affaires) — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) / Gestion BTP — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "BEM Dakar (Bordeaux Management School) / IAM Dakar — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification Négociation Commerciale B2B Complexe", "Agrément Marchés Publics de Travaux", "Certification Management d'Affaires BTP"],
            "schoolSubjects": ["Droit des marchés et des contrats", "Techniques de négociation commerciale", "Gestion financière d'affaires", "Technologie du BTP"]
        },
        "career": {
            "sectors": ["Grandes entreprises générales de construction", "PME de second œuvre et d'installations techniques (CVC, électricité, façades)", "Négociants et distributeurs de matériaux du bâtiment (Point P, Saint-Gobain)", "Sociétés de location de matériel de chantier"],
            "employerTypes": ["Entreprises générales de BTP", "Installateurs de génie climatique et électrique", "Fabricants de composants de construction"],
            "evolution": "Chargé d'affaires junior ➔ Chargé d'affaires senior ➔ Responsable commercial régional ➔ Directeur d'agence BTP ➔ Directeur du développement",
            "pros": "Rémunération stimulante avec primes variables sur marge, autonomie d'action, réseau relationnel vaste et influent.",
            "cons": "Pression permanente sur les objectifs de vente trimestriels, devoir concilier les promesses faites au client avec les contraintes du chantier."
        },
        "gettingStarted": {
            "beginnerProject": "Analyser la plaquette commerciale d'une entreprise générale de BTP pour repérer ses arguments de vente clés.",
            "intermediateProject": "Construire un argumentaire de vente pour convaincre un promoteur de choisir une structure bois plutôt que béton.",
            "advancedProject": "Rédiger une offre commerciale complète avec calendrier d'acomptes financiers pour la construction d'un entrepôt de 2 000 m².",
            "portfolioIdeas": ["Proposition commerciale BTP argumentée", "Simulation de marge brute prévisionnelle sur une affaire"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'IA analyse les signaux faibles sur le web (dépôts de permis de construire, levées de fonds) pour alerter le chargé d'affaires sur les futurs projets avant la concurrence.",
            "automatedTasks": ["Veille automatique et qualification des appels d'offres", "Génération automatique des premières ébauches de mémoires techniques"],
            "emergingSkills": ["Utilisation d'assistants CRM pilotés par IA pour la relance personnalisée des décideurs"],
            "humanEdge": "La confiance humaine, la poignée de main et la relation interpersonnelle qui font signer un contrat de plusieurs millions d'euros."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal et dans la sous-région ouest-africaine, le chargé d'affaires BTP est le pivot de la négociation avec les ministères, les promoteurs privés et les investisseurs internationaux, devant faire preuve d'une grande finesse relationnelle et culturelle pour remporter les grands chantiers du Plan Sénégal Émergent.",
            "localSectors": ["Grands groupes de BTP (Eiffage Sénégal, CSE, Consortium d'Entreprises)", "Sociétés de promotion immobilière de Dakar", "Fournisseurs industriels de matériaux"],
            "remoteWork": "Hybride (déplacements fréquents chez les clients et télétravail pour le CRM et les devis).",
            "entrepreneurship": "Création d'une agence de courtage en travaux et de mise en relation entre investisseurs et entreprises générales de construction qualifiées."
        },
        "relatedJobSlugs": ["conducteur-de-travaux", "ingenieur-etudes-de-prix", "metreur-economiste-construction"],
        "connectedFamilies": ["commerce-marketing", "management-gestion", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier Chargé d'affaires dans le BTP — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/charge-d-affaires-dans-le-btp-2.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "EGF BTP — Entreprises Générales de France", "url": "https://www.egfbtp.com/", "source": "EGF BTP"}
        ],
        "sources": ["L'Étudiant", "EGF BTP", "FFB"],
        "interests": ["commerce-marketing", "coordonner-gerer", "contact-humain"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Un bon chargé d'affaires dans le BTP génère souvent entre 5 et 15 millions d'euros de chiffre d'affaires par an à lui tout seul pour son entreprise !",
            "pourquoi": "Grâce à son carnet d'adresses et à sa capacité à rassurer les clients sur la fiabilité technique de ses équipes.",
            "a_retenir": "L'ambassadeur commercial qui alimente le travail de centaines d'ouvriers sur le terrain."
        }
    },

    # -----------------------------------------------------------------------
    # 31. ÉLECTRICIEN DU BTP & INSTALLATEUR RÉSEAUX
    # -----------------------------------------------------------------------
    {
        "id": "electricien-du-btp",
        "slug": "electricien-du-btp",
        "title": "Électricien du BTP & Installateur Réseaux",
        "aliases": ["Électricien bâtiment", "Installateur électricien tertiaire et habitat", "Technicien en installations électriques"],
        "icon": "⚡",
        "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Équipements : Électricité, Plomberie & CVC",
        "domainId": "electricite-plomberie-cvc",
        "subdomain": "Électricité du bâtiment & Distribution",
        "sectors": ["BTP", "Énergie", "Second Œuvre"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "CAP Électricien à Bac Pro MELEC (Métiers de l'Électricité)",
        "salary": "🇫🇷 France : 1 900 - 3 100 € net/mois (~27 000 - 44 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 200 000 - 700 000 FCFA / mois (Installations tertiaires et résidentielles, raccordements)",
        "simpleDefinition": "L'électricien du BTP installe, câble et raccorde tous les réseaux électriques d'un bâtiment (éclairage, prises de courant, tableaux de disjoncteurs, sécurité incendie, bornes de recharge pour voitures) en garantissant une sécurité totale contre les risques d'incendie et d'électrocution.",
        "shortDescription": "Artisan de l'énergie et de la lumière cité par L'Étudiant, il apporte le courant dans chaque pièce selon des normes de sécurité draconiennes.",
        "longDescription": "Comme décrit dans la fiche métier de L'Étudiant, l'électricien intervient en deux phases : d'abord lors du gros œuvre pour encastrer les gaines et conduits dans les dalles et cloisons avant qu'elles ne soient fermées, puis lors du second œuvre pour tirer les fils conducteurs, équiper le tableau électrique principal de disjoncteurs différentiels, brancher les interrupteurs et poser les luminaires. Il vérifie la mise à la terre au mesureur de terre avant d'obtenir le certificat de conformité (Consuel) indispensable à l'ouverture du compteur électrique.",
        "mainObjective": "Distribuer l'électricité en toute sécurité dans l'ensemble du bâtiment en respectant scrupuleusement la norme de sécurité NF C 15-100.",
        "companyRole": "Garant de l'alimentation énergétique et de la sécurité électrique des personnes et des biens.",
        "workEnvironment": [
            "🏠 Logements individuels et collectifs en construction ou rénovation",
            "🏢 Bâtiments tertiaires (bureaux, hôpitaux, centres commerciaux, écoles)",
            "🪜 Travail en intérieur à genoux (prises) ou sur escabeau (plafonds et chemins de câbles)"
        ],
        "missions": [
            "Poser les chemins de câbles, saignées et gaines encastrées selon les plans d'implantation",
            "Tirer les câbles d'alimentation de puissance et les câbles de communication réseau (RJ45)",
            "Câbler et étiqueter le tableau électrique de distribution et les disjoncteurs divisionnaires",
            "Raccorder les appareillages (prises 16A/32A, interrupteurs, variateurs, éclairages LED, VMC)",
            "Mesurer la résistance de la prise de terre et vérifier le déclenchement des différentiels 30 mA"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Tirage de câbles sous gaine", "desc": "Passage des conducteurs phase, neutre et terre à l'aide d'une aiguille tire-fil dans les gaines ICTA d'un appartement."},
            {"time": "10:30", "title": "Câblage d'un tableau divisionnaire", "desc": "Raccordement peigné des disjoncteurs modulaires et équilibrage des charges sur les 3 phases d'un tableau tertiaire."},
            {"time": "13:30", "title": "Pose de cheminements de câbles", "desc": "Fixation de chemins de câbles métalliques perforés dans le faux-plafond d'un couloir de bureaux."},
            {"time": "15:30", "title": "Mesures de conformité Consuel", "desc": "Contrôle de la boucle de terre au telluromètre (obtention de 18 ohms, conforme au seuil de 100 ohms)."}
        ],
        "skills": {
            "technical": [
                "Norme électrique d'installation basse tension (NF C 15-100)",
                "Schémas électriques unifilaires et multifilaires et calcul de section de câbles",
                "Habilitations électriques obligatoires (B1V, B2V, BR, BC)",
                "Réseaux de communication et courants faibles (VDI - Voix Données Images)"
            ],
            "human": [
                "Rigueur absolue et respect strict des règles de sécurité vitale",
                "Méthode, soin dans le repérage et propreté du câblage",
                "Esprit d'analyse logique pour dépanner une panne de disjonction"
            ],
            "tools": [
                "Multimètres numériques, vérificateurs d'absence de tension (VAT) et pinces ampèremétriques",
                "Telluromètres et mesureurs d'isolement de terre (Megger)",
                "Pinces à dénuder automatiques et pinces à sertir les embouts de câblage",
                "Rainureuses à béton avec aspiration pour saignées murales"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "CAP (2 ans)", "title": "CAP Électricien", "desc": "Le parcours en alternance classique valorisé par L'Étudiant pour apprendre le câblage et la sécurité."},
                {"step": "Bac Pro (3 ans)", "title": "Bac Pro MELEC (Métiers de l'Électricité et de ses Environnements Connectés)", "desc": "Formation de référence incluant la domotique, les réseaux communicants et la gestion d'énergie."},
                {"step": "BTS (Bac +2)", "title": "BTS Électrotechnique ou BTS FED", "desc": "Accès aux fonctions de chef d'équipe électricité ou chargé d'affaires électricité tertiaire."}
            ],
            "schools": [
                {"name": "CFA du Bâtiment et lycées professionnels préparant le Bac Pro MELEC — France", "country": "France", "scope": "France"},
                {"name": "Centres de formation continue spécialisés en électricité tertiaire — France", "country": "France", "scope": "France"},
                {"name": "Centre de Perfectionnement Professionnel de la Senelec (CFPP Rufisque) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Habilitation électrique BR/B2V/BC", "Certification Qualification IRVE (Bornes de recharge de véhicules électriques)", "Attestation Qualifelec"],
            "schoolSubjects": ["Électrotechnique et lois d'Ohm/Joule", "Schémas électriques et normes", "Réseaux informatiques et courants faibles", "Sécurité électrique"]
        },
        "career": {
            "sectors": ["Entreprises artisanales d'électricité générale", "Grandes entreprises d'installations électriques (SPIE, Bouygues ES, Eiffage Énergie)", "Entreprises de maintenance multitechnique tertiaire et industrielle"],
            "employerTypes": ["Artisans électriciens", "PME d'électricité générale", "Entreprises générales de BTP"],
            "evolution": "Électricien débutant ➔ Électricien chef d'équipe ➔ Chef de chantier électricité ➔ Artisan chef d'entreprise d'électricité",
            "pros": "Plein emploi permanent (pénurie majeure de profils), diversité des chantiers (habitat, tertiaire, bornes IRVE), compétences techniques nobles.",
            "cons": "Travail régulier les bras en l'air lors de la pose de luminaires, vigilance permanente contre le risque d'électrocution."
        },
        "gettingStarted": {
            "beginnerProject": "Câbler un va-et-vient simple sur une maquette en bois avec deux interrupteurs et une ampoule.",
            "intermediateProject": "Brancher un disjoncteur différentiel 30 mA et deux disjoncteurs divisionnaires sur un tableau électrique d'essai.",
            "advancedProject": "Réaliser le schéma unifilaire complet d'un appartement T3 conforme à la norme NF C 15-100.",
            "portfolioIdeas": ["Photos d'un tableau électrique câblé au cordeau avec étiquetage parfait", "Attestation de réussite d'habilitation électrique"]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "Le tirage de fils dans les gaines sinueuses, le raccordement minutieux des disjoncteurs et le dépannage au multimètre restent l'apanage exclusif de la main humaine.",
            "automatedTasks": ["Calcul automatique des sections de câbles par logiciel de dimensionnement (Caneco BT)", "Vérification automatisée de l'équilibrage des phases"],
            "emergingSkills": ["Installation de bornes de recharge intelligentes et de gestionnaires d'énergie communicants"],
            "humanEdge": "La dextérité manuelle pour sertir des conducteurs dans des espaces exigus et le respect absolu de la vie humaine."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'électricien du bâtiment est au cœur de l'accès à la modernité : il équipe les nouvelles résidences, installe les compteurs prépayés Woyofal de la Senelec, sécurise les installations contre les courts-circuits fréquents et installe des inverseurs de sources automatiques pour les groupes électrogènes et onduleurs de secours.",
            "localSectors": ["Entreprises d'électricité de Dakar", "Partenaires installateurs de la Senelec", "Chantiers immobiliers et tertiaires"],
            "remoteWork": "Non compatible (100% sur le chantier d'installation).",
            "entrepreneurship": "Création d'une entreprise d'installations électriques résidentielles et d'onduleurs solaires de secours à Dakar."
        },
        "relatedJobSlugs": ["domoticien", "monteur-technicien-reseaux-electriques", "plombier-chauffagiste"],
        "connectedFamilies": ["energie-renouvelable", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier Électricien — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/electricien-du-btp.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "Qualifelec — Association professionnelle de qualification électrique", "url": "https://www.qualifelec.fr/", "source": "Qualifelec"}
        ],
        "sources": ["L'Étudiant", "Qualifelec", "FFB"],
        "interests": ["technique-outils", "construire-fabriquer", "sciences-recherche"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Le disjoncteur différentiel 30 milliampères, présent dans chaque maison, est capable de couper le courant en moins de 30 millisecondes dès qu'il détecte une fuite de courant de quelques gouttes d'électrons !",
            "pourquoi": "Cette rapidité foudroyante évite que le courant ne traverse le cœur humain, sauvant des milliers de vies chaque année.",
            "a_retenir": "L'artisan de la lumière qui apprivoise les électrons pour nous éclairer en sécurité."
        }
    },

    # -----------------------------------------------------------------------
    # 32. PLOMBIER-CHAUFFAGISTE
    # -----------------------------------------------------------------------
    {
        "id": "plombier-chauffagiste",
        "slug": "plombier-chauffagiste",
        "title": "Plombier-Chauffagiste & Installateur Sanitaire",
        "aliases": ["Installateur sanitaire et thermique", "Technicien chauffagiste", "Plombier dépanneur"],
        "icon": "🚰",
        "image": "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Équipements : Électricité, Plomberie & CVC",
        "domainId": "electricite-plomberie-cvc",
        "subdomain": "Plomberie sanitaire, Chauffage & Réseaux d'eau",
        "sectors": ["BTP", "Plomberie", "Génie Climatique"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "CAP Plombier / Installateur thermique à Bac Pro / BTS FED",
        "salary": "🇫🇷 France : 2 000 - 3 400 € net/mois (~28 000 - 48 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 180 000 - 650 000 FCFA / mois (Installations sanitaires d'immeubles, plomberie d'urgence)",
        "simpleDefinition": "Le plombier-chauffagiste achemine l'eau potable jusqu'aux robinets et évacue les eaux usées d'un bâtiment, installe les équipements sanitaires (douches, lavabos, WC) et pose les systèmes de chauffage (chaudières, radiateurs, planchers chauffants, pompes à chaleur).",
        "shortDescription": "Artisan de l'eau et de la chaleur cité par L'Étudiant, il maîtrise la tuyauterie sous pression et assure l'hygiène et le confort thermique quotidien.",
        "longDescription": "Comme décrit dans les fiches d'orientation de L'Étudiant, le plombier-chauffagiste est l'expert des fluides en circulation. Il façonne et raccorde les tuyauteries en cuivre par brasage fort, pose les canalisations multicouches ou PER sans soudure, et installe les tuyaux d'évacuation en PVC avec des pentes rigoureuses pour éviter les bouchons. En tant que chauffagiste, il raccorde les générateurs de chaleur (pompes à chaleur air/eau, chaudières gaz à condensation, chauffe-eaux thermodynamiques) et équilibre les circuits hydrauliques pour une température agréable dans chaque pièce.",
        "mainObjective": "Garantir la distribution saine de l'eau potable, l'évacuation sans fuite des eaux usées et la performance du chauffage en toute sécurité.",
        "companyRole": "Garant du confort sanitaire, de l'hygiène et de l'alimentation en eau et chaleur du bâtiment.",
        "workEnvironment": [
            "🏠 Salles de bains, cuisines, caves et combles d'immeubles ou de maisons",
            "🏢 Locaux techniques de chaufferies collectives et gaines techniques étroites",
            "🚐 Déplacements quotidiens avec véhicule utilitaire atelier pour dépannages et poses"
        ],
        "missions": [
            "Tracer les parcours de canalisations et encastrer les tuyaux dans les cloisons ou sols",
            "Couper, cintrer et braser les tuyaux en cuivre et sertir les raccords multicouches",
            "Poser les appareils sanitaires (baignoires, receveurs de douche, WC suspendus, vasques)",
            "Installer les systèmes de production d'eau chaude (chauffe-eau thermodynamique, solaire)",
            "Réaliser les épreuves de pression d'eau pour vérifier l'étanchéité absolue avant fermeture des cloisons"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Brasage d'une nourrice d'eau sanitaire", "desc": "Façonnage et soudure au chalumeau oxyacétylénique d'une clarinette de distribution en cuivre dans une gaine technique."},
            {"time": "10:30", "title": "Pose d'un plancher chauffant hydraulique", "desc": "Déroulage des tubes PER sur dalles d'isolant quadrillées et raccordement au collecteur régulé."},
            {"time": "13:30", "title": "Installation d'un WC suspendu", "desc": "Fixation du bâti-support métallique au sol et au mur et raccordement de la pipe d'évacuation de 100 mm."},
            {"time": "15:30", "title": "Mise en eau sous pression", "desc": "Mise sous pression d'épreuve à 6 bars avec pompe manuelle pour vérifier l'absence totale de micro-fuite."}
        ],
        "skills": {
            "technical": [
                "Hydraulique du bâtiment, débits d'eau, pertes de charge et équilibrage des réseaux",
                "Brasage fort du cuivre, soudure oxyacétylénique et techniques de sertissage mécanique",
                "Technologie des systèmes de chauffage (pompes à chaleur, chaudières, radiateurs)",
                "Normes sanitaires de potabilité de l'eau (DTU 60.1) et évacuation gravitaire"
            ],
            "human": [
                "Sens du diagnostic méthodique pour repérer rapidement l'origine d'une fuite",
                "Habileté manuelle et souplesse corporelle pour travailler dans des espaces restreints",
                "Sens du service client et disponibilité lors des urgences de dégâts des eaux"
            ],
            "tools": [
                "Chalumeaux oxyacétyléniques et postes de brasage portables",
                "Pinces à sertir électrohydrauliques pour raccords cuivre et multicouche",
                "Cintreuses arbalètes manuelles et coupe-tubes professionnels",
                "Pompes d'épreuve hydrostatiques et caméras d'inspection de canalisations"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "CAP (2 ans)", "title": "CAP Monteur en Installations Sanitaires ou Thermiques", "desc": "La formation en alternance de base recommandée par L'Étudiant pour apprendre la soudure et la plomberie."},
                {"step": "Bac Pro (3 ans)", "title": "Bac Pro Métiers du Froid et des Énergies Renouvelables (MFER)", "desc": "Formation moderne axée sur les pompes à chaleur et la transition énergétique."},
                {"step": "BP / BTS (Bac +2)", "title": "BP Monteur en Installations du Génie Climatique ou BTS FED", "desc": "Spécialisation de haut niveau pour concevoir et diriger des chantiers de plomberie tertiaire."}
            ],
            "schools": [
                {"name": "CFA du Bâtiment spécialisés en génie climatique et plomberie — France", "country": "France", "scope": "France"},
                {"name": "Compagnons du Devoir (filière plomberie) — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification Qualibat RGE Pompe à Chaleur / Chaudière biomasse", "Habilitation gaz (Professionnel du Gaz - PG)", "CQP Plombier Spécialiste"],
            "schoolSubjects": ["Hydraulique et thermodynamique appliquée", "Technologie des tuyauteries et raccords", "Lecture de plans de réseaux sanitaires", "Sécurité gaz et incendie"]
        },
        "career": {
            "sectors": ["Entreprises artisanales de plomberie et chauffage", "Sociétés de maintenance immobilière et dépannage d'urgence", "Grands groupes de génie climatique (Dalkia, ENGIE Solutions, Spie)", "Entreprises de construction de piscines et spas"],
            "employerTypes": ["Artisans plombiers", "PME de génie climatique", "Sociétés de dépannage 24/7"],
            "evolution": "Apprenti plombier ➔ Plombier qualifié ➔ Chef d'équipe sanitaire ➔ Technicien metteur au point chauffage ➔ Artisan chef d'entreprise",
            "pros": "Métier indispensable au quotidien avec zéro chômage, liberté totale d'exercice à son compte, forte reconnaissance des clients dépannés.",
            "cons": "Interventions parfois salissantes ou dans des espaces exigus (vides sanitaires), astreintes possibles le week-end."
        },
        "gettingStarted": {
            "beginnerProject": "Changer le joint torique d'un robinet qui goutte et comprendre le fonctionnement d'un siphon sous un évier.",
            "intermediateProject": "Réaliser une brasure capillaire parfaite sur tube cuivre de 14 mm avec fil d'étain/argent.",
            "advancedProject": "Assembler un réseau complet d'alimentation de douche en tube multicouche avec collecteur et nourrice.",
            "portfolioIdeas": ["Photos de réalisations d'installations sanitaires propres et soignées", "Schéma de principe d'un circuit de chauffage central"]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "Aucun robot ne peut se glisser sous un évier étroit pour réparer une fuite de joint ou braser un coude en cuivre au ras d'un mur.",
            "automatedTasks": ["Détecteurs connectés de fuites d'eau coupant automatiquement l'arrivée principale", "Thermostats intelligents pilotés par IA pour réguler le chauffage"],
            "emergingSkills": ["Installation et paramétrage de chauffe-eaux connectés et de pompes à chaleur intelligentes"],
            "humanEdge": "La dextérité manuelle pour braser dans un angle aveugle et le flair du dépanneur qui trouve l'origine d'une fuite cachée."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le plombier est un acteur essentiel de la vie des quartiers : il installe les surpresseurs et bâches à eau indispensables pour garantir une pression constante dans les étages malgré les coupures d'eau du réseau urbain de la Sen'Eau, et pose des chauffe-eaux solaires sur les toits de Dakar.",
            "localSectors": ["Entreprises de plomberie sanitaire de Dakar", "Partenaires de la Sen'Eau (Société d'Exploitation des Eaux du Sénégal)", "Chantiers d'immeubles et résidences"],
            "remoteWork": "Non compatible (100% sur place les mains sur les tuyaux).",
            "entrepreneurship": "Création d'une entreprise spécialisée dans l'installation de surpresseurs d'eau automatiques et de chauffe-eaux solaires pour les ménages sénégalais."
        },
        "relatedJobSlugs": ["technicien-climatisation", "technicien-solaire-thermique", "electricien-du-btp"],
        "connectedFamilies": ["artisanat-metiers-dart", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier Plombier — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "CAPEB — Métiers de la plomberie et du chauffage", "url": "https://www.capeb.fr/", "source": "CAPEB"}
        ],
        "sources": ["L'Étudiant", "CAPEB", "FFB"],
        "interests": ["technique-outils", "construire-fabriquer", "contact-humain"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Le mot 'plombier' vient du métal le plomb, utilisé depuis l'Empire romain pour fabriquer les canalisations des aqueducs et thermes antiques !",
            "pourquoi": "Aujourd'hui, le plomb a été totalement banni pour des raisons de santé au profit du cuivre, du multicouche et de l'inox alimentaire.",
            "a_retenir": "Le maître de l'eau qui apporte l'hygiène, la santé et la chaleur au cœur de nos maisons."
        }
    },

    # -----------------------------------------------------------------------
    # 33. TECHNICIEN EN CLIMATISATION & VENTILATION CVC
    # -----------------------------------------------------------------------
    {
        "id": "technicien-climatisation",
        "slug": "technicien-climatisation",
        "title": "Technicien en Climatisation & Ventilation CVC",
        "aliases": ["Technicien génie climatique CVC", "Installateur dépanneur en climatisation", "Technicien ventilation et traitement d'air"],
        "icon": "❄️",
        "image": "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Équipements : Électricité, Plomberie & CVC",
        "domainId": "electricite-plomberie-cvc",
        "subdomain": "Climatisation, Ventilation & Traitement d'air",
        "sectors": ["BTP", "Génie Climatique", "Climatisation"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "Bac Pro (TFCA / MFER) à Bac +2 (BTS Fluides Énergies Domotique - FED)",
        "salary": "🇫🇷 France : 2 200 - 3 500 € net/mois (~32 000 - 50 000 € brut/an avec véhicule, Source : L'Étudiant) • 🇸🇳 Sénégal : 250 000 - 800 000 FCFA / mois (Maintenance des climatiseurs de bureaux, banques, hôtels à Dakar)",
        "simpleDefinition": "Le technicien en climatisation et ventilation installe, règle et dépanne les climatiseurs, pompes à chaleur réversibles et centrales de traitement d'air (VMC) pour assurer une température agréable et un air sain et purifié dans les logements, bureaux, hôpitaux et commerces.",
        "shortDescription": "Spécialiste du confort thermique et de la qualité de l'air cité par L'Étudiant, il maîtrise la thermodynamique, les fluides frigorigènes et l'aéraulique.",
        "longDescription": "Comme décrit dans les métiers techniques du BTP de L'Étudiant, le technicien en climatisation est un profil sous très forte tension de recrutement. Il installe les unités intérieures (splits, cassettes de plafond) et extérieures, tire les liaisons frigorifiques en cuivre, effectue le tirage au vide et charge le gaz caloporteur. Il raccorde les réseaux de gaines de ventilation double flux avec récupération d'énergie et règle les thermostats électroniques pour garantir un renouvellement d'air constant sans déperdition énergétique.",
        "mainObjective": "Maintenir une température intérieure idéale été comme hiver et assurer un air purifié et renouvelé en optimisant la consommation électrique.",
        "companyRole": "Garant du confort thermique, de la santé respiratoire et de l'efficacité énergétique du bâtiment.",
        "workEnvironment": [
            "🏢 Immeubles de bureaux tertiaires, cliniques, data centers, hôtels et commerces",
            "🏠 Logements de particuliers équipés de pompes à chaleur réversibles",
            "🪜 Intervention sur les toits-terrasses pour les groupes extérieurs et locaux techniques de ventilation"
        ],
        "missions": [
            "Implanter et fixer les groupes frigorifiques extérieurs et les diffuseurs intérieurs (splits, ventilo-convecteurs)",
            "Façonner et braser les liaisons frigorifiques en cuivre sous azote pour éviter l'oxydation interne",
            "Réaliser le tirage au vide de l'installation et vérifier l'étanchéité absolue au détecteur électronique",
            "Monter et équilibrer les réseaux de gaines aérauliques de ventilation (VMC simple et double flux)",
            "Effectuer la maintenance préventive (nettoyage des filtres antibactériens, contrôle des pressions de gaz)"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Diagnostic d'une alarme climatisation", "desc": "Intervention d'urgence dans un data center : remplacement d'un ventilateur de condenseur en toiture pour éviter la surchauffe des serveurs."},
            {"time": "10:30", "title": "Mise en service d'un système multi-split", "desc": "Tirage au vide poussé sous 250 microns sur un système à 4 unités intérieures et vérification des pressions de fonctionnement au manifold numérique."},
            {"time": "14:00", "title": "Pose de gaines de ventilation double flux", "desc": "Raccordement de gaines aérauliques calorifugées sur la centrale de traitement d'air (CTA) d'une clinique."},
            {"time": "16:30", "title": "Mesure des débits d'air aux bouches", "desc": "Contrôle des volumes d'air neuf au cône anémomètre pour vérifier le renouvellement d'air hygiénique de 30 m³/h par occupant."}
        ],
        "skills": {
            "technical": [
                "Thermodynamique des cycles frigorifiques et fluides frigorigènes (R32, R410A, R290)",
                "Aéraulique, calcul des débits d'air, pertes de charge et équilibrage des gaines",
                "Brasage fort sous azote et tuyauterie cuivre frigorifique",
                "Attestation d'aptitude à la manipulation des fluides frigorigènes (Catégorie 1)"
            ],
            "human": [
                "Méthode logique de diagnostic de panne et esprit d'investigation",
                "Autonomie complète sur le terrain avec véhicule d'intervention",
                "Pédagogie pour expliquer le fonctionnement des télécommandes aux usagers"
            ],
            "tools": [
                "Manifolds électroniques connectés avec sondes de température Bluetooth",
                "Pompes à vide double étage et vacuomètres électroniques",
                "Détecteurs de fuites de gaz électroniques sensibles au gramme/an",
                "Anémomètres à fil chaud et cônes de mesure de débit d'air"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Bac Pro (3 ans)", "title": "Bac Pro Métiers du Froid et des Énergies Renouvelables (MFER)", "desc": "La formation de base mise en avant par L'Étudiant pour acquérir les compétences frigorifiques."},
                {"step": "Attestation Fluides", "title": "Attestation d'Aptitude Fluides Frigorigènes (Catégorie 1)", "desc": "L'habilitation légale obligatoire pour manipuler les gaz frigorigènes."},
                {"step": "BTS (Bac +2)", "title": "BTS Fluides Énergies Domotique (BTS FED option A - Génie climatique)", "desc": "Formation de référence pour concevoir des installations de climatisation tertiaires complexes."}
            ],
            "schools": [
                {"name": "Lycées préparant le Bac Pro MFER et BTS FED — France", "country": "France", "scope": "France"},
                {"name": "IFFI (Institut Français du Froid Industriel - CNAM) — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) / Génie Frigorifique et CVC — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Attestation d'Aptitude Fluides Frigorigènes Catégorie 1", "Habilitation électrique BR/B2V", "Certification Qualiclimat / Qualipac"],
            "schoolSubjects": ["Thermodynamique appliquée", "Aéraulique et ventilation", "Électrotechnique et régulation CVC", "Sécurité des gaz sous pression"]
        },
        "career": {
            "sectors": ["Entreprises d'installation et de maintenance en génie climatique (Dalkia, ENGIE Solutions, Spie)", "Installateurs spécialisés en climatisation et pompes à chaleur", "Services techniques d'établissements de santé et d'hôtellerie"],
            "employerTypes": ["Installateurs CVC", "PME de climatisation", "Groupes de services à l'énergie"],
            "evolution": "Technicien dépanneur itinérant ➔ Technicien metteur au point CVC ➔ Chef d'équipe génie climatique ➔ Chargé d'affaires climatisation",
            "pros": "Métier sous très forte demande mondiale portée par le réchauffement climatique, indépendance au volant de son véhicule atelier, haute technologie des équipements.",
            "cons": "Pics d'interventions intenses lors des premières vagues de canicule estivales, travail en toiture sous le soleil."
        },
        "gettingStarted": {
            "beginnerProject": "Nettoyer les filtres à poussière d'un climatiseur domestique et observer la différence de débit d'air.",
            "intermediateProject": "Tracer un cycle frigorifique basique de climatisation sur un diagramme enthalpique de Mollier.",
            "advancedProject": "Calculer le bilan thermique simplifié d'une pièce de 25 m² exposée au sud pour estimer la puissance frigorifique nécessaire (en Watts).",
            "portfolioIdeas": ["Fiche de mise en service d'un climatiseur réversible avec mesures de surchauffe", "Attestation de stage chez un installateur CVC"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des algorithmes prédictifs analysent en direct les pressions de gaz et la température extérieure pour anticiper les pannes avant l'arrêt de la climatisation.",
            "automatedTasks": ["Détection précoce automatique des micro-fuites de gaz", "Télé-réglage automatique des lois d'eau et de soufflage"],
            "emergingSkills": ["Utilisation d'outils de diagnostic de pannes assistés par intelligence artificielle"],
            "humanEdge": "La dextérité du brasage de cuivre en toiture et le diagnostic sensoriel face au bruit d'un compresseur."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal et dans toute l'Afrique de l'Ouest où les températures dépassent régulièrement 40°C, le technicien en climatisation est un professionnel providentiel : il maintient au frais les banques, les hôpitaux, les commerces et les ménages dakarois, et opère la conversion vers des climatiseurs Inverter à faible consommation électrique.",
            "localSectors": ["Entreprises de climatisation et froid de Dakar (CFAO Sénégal, Matforce, Clim Sénégal)", "Maintenance hôtelière et bancaire", "Boutiques et distributeurs d'appareils de climatisation"],
            "remoteWork": "Non compatible (100% sur le terrain pour les poses et dépannages).",
            "entrepreneurship": "Création d'une entreprise de maintenance préventive et d'installation de climatiseurs solaires photovoltaïques autonomes."
        },
        "relatedJobSlugs": ["technicien-genie-climatique-frigoriste", "plombier-chauffagiste", "electricien-du-btp"],
        "connectedFamilies": ["energie-renouvelable", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier Technicien en climatisation — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "Snefcca — Syndicat du froid et du conditionnement d'air", "url": "https://www.snefcca.com/", "source": "Snefcca"}
        ],
        "sources": ["L'Étudiant", "Snefcca", "IFFI"],
        "interests": ["technique-outils", "construire-fabriquer"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Les climatiseurs modernes réversibles (pompes à chaleur air/air) produisent jusqu'à 4 fois plus d'énergie thermique qu'ils ne consomment d'électricité !",
            "pourquoi": "Parce qu'ils ne fabriquent pas de chaleur ou de fraîcheur : ils transfèrent les calories gratuites présentes naturellement dans l'air extérieur grâce aux changements d'état du gaz.",
            "a_retenir": "L'artisan du souffle d'air pur et de la fraîcheur indispensable en ville."
        }
    },

    # -----------------------------------------------------------------------
    # 34. BIM MANAGER
    # -----------------------------------------------------------------------
    {
        "id": "bim-manager",
        "slug": "bim-manager",
        "title": "BIM Manager / Coordinateur de la Maquette Numérique",
        "aliases": ["Responsable maquette numérique BTP", "BIM Coordinator", "Chef de projet construction numérique"],
        "icon": "💻",
        "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "BIM & Bâtiment Intelligent",
        "domainId": "bim-construction-numerique",
        "subdomain": "Maquette numérique 3D, BIM & Données",
        "sectors": ["BTP", "Numérique", "Ingénierie"],
        "sourceEtudiant": True,
        "isEmerging": True,
        "level": "Bac +5 (Ingénieur BTP, Architecte ou Master spécialisé BIM)",
        "salary": "🇫🇷 France : 3 200 - 5 600 € net/mois (~45 000 - 82 000 € brut/an, Source : L'Étudiant / APEC) • 🇸🇳 Sénégal : 600 000 - 2 000 000 FCFA / mois (Grands projets d'infrastructures et tours de Diamniadio)",
        "simpleDefinition": "Le BIM Manager est le chef d'orchestre numérique de la construction : il crée et gère le jumeau numérique 3D du bâtiment (le modèle BIM) en y intégrant toutes les informations des architectes, des ingénieurs structures et des électriciens pour détecter et corriger les erreurs avant le début du chantier réel.",
        "shortDescription": "Métier émergent d'élite mis en valeur par L'Étudiant, il fusionne les technologies du numérique et de la 3D avec les sciences de la construction.",
        "longDescription": "Comme décrit dans la fiche des nouveaux métiers de L'Étudiant, le BIM Manager (Building Information Modeling) a révolutionné la façon de bâtir. Au lieu d'empiler des milliers de plans papier en 2D souvent contradictoires, il fédère tous les intervenants autour d'une maquette 3D unique, vivante et paramétrique. Chaque mur, tuyau, fenêtre ou disjoncteur y est modélisé avec ses caractéristiques physiques, thermiques, son coût et sa date de livraison. Grâce à des outils de détection de clashs, il résout les conflits spatiaux sur ordinateur, évitant des retards et des surcoûts colossaux sur le chantier réel.",
        "mainObjective": "Coordonner la maquette numérique unique du projet, éliminer les conflits géométriques et optimiser la collaboration numérique de tous les corps d'état.",
        "companyRole": "Pilote stratégique de la transformation digitale et de la collaboration 3D du projet de construction.",
        "workEnvironment": [
            "💻 Agences d'architecture prestigieuses, grands bureaux d'ingénierie ou sièges de majors du BTP",
            "🖥️ Stations graphiques haute performance multi-écrans avec logiciels BIM collaboratifs",
            "👥 Animation de réunions de coordination BIM avec l'ensemble des bureaux d'études"
        ],
        "missions": [
            "Rédiger la convention BIM du projet fixant les protocoles, formats d'échanges (IFC) et niveaux de détail (LOD)",
            "Compiler et fédérer les maquettes numériques des architectes, bureaux d'études structures et fluides",
            "Organiser les sessions de détection automatique de collisions (clash detection) sous Navisworks ou Solibri",
            "Animer les revues de projet numériques hebdomadaires et assigner les réserves aux modeleurs",
            "Garantir la conformité de la maquette numérique finale livrée pour l'exploitation et la maintenance du bâtiment (BIM GEM)"
        ],
        "typicalDay": [
            {"time": "09:00", "title": "Revue hebdomadaire de coordination BIM", "desc": "Animation en visioconférence de la réunion de synthèse 3D avec l'architecte, l'ingénieur structure et le projeteur CVC."},
            {"time": "11:15", "title": "Lancement d'une détection d'interférences", "desc": "Analyse sous Solibri de 42 collisions détectées entre les gaines de désenfumage et les poutres métalliques du 3e étage."},
            {"time": "14:30", "title": "Contrôle qualité des fichiers IFC", "desc": "Vérification du renseignement des métadonnées thermiques et acoustiques sur chaque famille de portes et fenêtres."},
            {"time": "16:45", "title": "Mise à jour de la plateforme cloud BIM", "desc": "Dépôt de la maquette fédérée consolidée sur l'environnement de données commun (CDE Autodesk Construction Cloud)."}
        ],
        "skills": {
            "technical": [
                "Technologies et protocoles BIM (norme internationale ISO 19650, formats openBIM IFC, BCF)",
                "Maîtrise des logiciels de modélisation et de coordination (Autodesk Revit, Navisworks, Solibri, ArchiCAD)",
                "Compréhension approfondie des interfaces entre structure, enveloppe et réseaux techniques",
                "Gestion des environnements de données communs cloud (Autodesk BIM 360, Trimble Connect)"
            ],
            "human": [
                "Excellente pédagogie et capacité à faire collaborer des équipes hétérogènes",
                "Rigueur d'organisation et sens de la standardisation des données",
                "Esprit de médiation diplomatique pour trancher les litiges techniques"
            ],
            "tools": [
                "Autodesk Revit / ArchiCAD / Tekla",
                "Navisworks Manage / Solibri Model Checker",
                "Plateformes cloud CDE (Autodesk Construction Cloud, Dalux)",
                "Outils de script paramétrique (Dynamo, Python pour Revit)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Diplôme Bac +5", "title": "Diplôme d'Ingénieur BTP ou Diplôme d'État d'Architecte", "desc": "Le socle technique indispensable pour comprendre la logique constructive réelle."},
                {"step": "Mastère Spécialisé BIM (Bac +6)", "title": "Mastère Spécialisé BIM : Modélisation et Gestion des Données (École des Ponts / ESTP)", "desc": "La formation d'excellence française de référence citée par L'Étudiant."},
                {"step": "Certifications de Référence", "title": "Certifications BuildingSMART International", "desc": "Reconnaissance internationale des compétences de gestion openBIM."}
            ],
            "schools": [
                {"name": "École des Ponts ParisTech / ESTP Paris (Mastère BIM) — France", "country": "France", "scope": "France"},
                {"name": "INSA Strasbourg / CESI École d'Ingénieurs — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) / Cursus BIM — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Polytechnique de Thiès (EPT) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification buildingSMART International Professional", "Autodesk Certified Professional Revit & Navisworks", "Certification RICS BIM Manager"],
            "schoolSubjects": ["Management de l'information BIM", "Interopérabilité IFC et openBIM", "Droit de la propriété intellectuelle des maquettes", "Scripting Dynamo et automatisation"]
        },
        "career": {
            "sectors": ["Grandes agences d'architecture internationales", "Sociétés d'ingénierie pluridisciplinaires (Egis, Setec, Systra, Artelia)", "Majors de la construction (Vinci, Bouygues, Eiffage)", "Sociétés de conseil en gestion de patrimoine immobilier tertiaire"],
            "employerTypes": ["Bureaux d'ingénierie globale", "Agences d'architectes de renom", "Directions techniques de constructeurs"],
            "evolution": "Modeleur BIM ➔ Coordinateur BIM ➔ BIM Manager ➔ Directeur du pôle digital et technologies (Chief Digital Officer) d'un groupe BTP",
            "pros": "Métier d'avenir ultra-prisé avec salaires très élevés, position de pivot technologique au cœur du projet, travail en 3D passionnant.",
            "cons": "Devoir convaincre certains intervenants traditionnels réticents au numérique, responsabilité lourde en cas de bug de coordination."
        },
        "gettingStarted": {
            "beginnerProject": "Télécharger un visualiseur IFC gratuit (BIMcollab Zoom) et naviguer dans la maquette 3D d'un projet public.",
            "intermediateProject": "Modéliser un bâtiment simple sous Revit et exporter le fichier au format neutre IFC en vérifiant que les données sont conservées.",
            "advancedProject": "Lancer une détection de clashs sous Navisworks entre une maquette structure et une maquette tuyauterie et éditer le rapport d'erreurs.",
            "portfolioIdeas": ["Convention BIM complète rédigée selon la norme ISO 19650", "Script Dynamo automatisant la numérotation des portes d'un étage"]
        },
        "aiImpact": {
            "level": "Révolutionnaire",
            "summary": "L'IA analyse instantanément la maquette BIM pour proposer la disposition la plus économe en câbles ou détecter d'elle-même les infractions aux normes de sécurité incendie.",
            "automatedTasks": ["Résolution automatique des clashs simples par déplacement de tuyaux", "Génération automatique du jumeau numérique à partir des nuages de points LiDAR"],
            "emergingSkills": ["Programmation de scripts d'intelligence artificielle appliqués aux maquettes IFC"],
            "humanEdge": "La négociation humaine entre corps d'état pour décider qui doit faire un compromis de tracé spatial."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'exigence du BIM est désormais inscrite dans les cahiers des charges des projets d'infrastructures d'envergure internationale (nouvelle ville de Diamniadio, extensions du port de Ndayane, gares du TER), créant une quête permanente de BIM Managers bilingues capables de piloter des maquettes complexes.",
            "localSectors": ["Grands projets publics de Diamniadio (DGPU)", "Bureaux d'ingénierie dakarois partenaires de groupes internationaux", "Agences d'architecture de prestige"],
            "remoteWork": "Très favorable (travail collaboratif sur plateformes cloud facilement réalisable à distance).",
            "entrepreneurship": "Création d'un cabinet de conseil en management BIM et d'assistance à maîtrise d'ouvrage numérique pour l'Afrique de l'Ouest."
        },
        "relatedJobSlugs": ["dessinateur-projeteur-en-batiment", "architecte", "ingenieur-genie-civil", "domoticien"],
        "connectedFamilies": ["numerique-ia", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier BIM Manager — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/bim-manager.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "buildingSMART France — Chapitre français de l'openBIM", "url": "https://www.buildingsmartfrance-mediaconstruct.fr/", "source": "buildingSMART"}
        ],
        "sources": ["L'Étudiant", "buildingSMART France", "École des Ponts"],
        "interests": ["donnees-chiffres", "technique-outils", "coordonner-gerer"],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Sur un chantier classique sans maquette numérique BIM, les erreurs de coordination non détectées génèrent en moyenne entre 5 et 10% de surcoûts imprévus lors des travaux !",
            "pourquoi": "Le BIM Manager élimine ces collisions virtuellement sur l'ordinateur des mois avant qu'une seule brique ne soit posée.",
            "a_retenir": "L'architecte de la maquette numérique qui bâtit d'abord dans le virtuel pour réussir dans le réel."
        }
    },

    # -----------------------------------------------------------------------
    # 35. DOMOTICIEN / TECHNICIEN SMART BUILDING
    # -----------------------------------------------------------------------
    {
        "id": "domoticien",
        "slug": "domoticien",
        "title": "Domoticien / Technicien en Bâtiment Intelligent",
        "aliases": ["Intégrateur domotique", "Technicien Smart Building & GTB", "Spécialiste de l'automatisation du bâtiment"],
        "icon": "🏠",
        "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "BIM & Bâtiment Intelligent",
        "domainId": "bim-construction-numerique",
        "subdomain": "Domotique, Gestion Technique (GTB) & Smart Building",
        "sectors": ["BTP", "Numérique", "Énergie"],
        "sourceEtudiant": True,
        "isEmerging": True,
        "level": "Bac +2 (BTS FED option C - Domotique et Bâtiments communicants) à Bac +3 (Licence Pro)",
        "salary": "🇫🇷 France : 2 200 - 3 800 € net/mois (~32 000 - 55 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 350 000 - 1 200 000 FCFA / mois (Villas connectées Almadies, immeubles intelligents Diamniadio)",
        "simpleDefinition": "Le domoticien programme et interconnecte tous les équipements électroniques d'un bâtiment (éclairage, volets roulants, chauffage, climatisation, caméras de sécurité, alarmes, serrures connectées) pour qu'ils fonctionnent de façon autonome, sécurisée et économe en énergie.",
        "shortDescription": "Magicien de la maison connectée cité parmi les métiers d'avenir par L'Étudiant, il fusionne électricité, informatique et automatismes pour créer des bâtiments intelligents.",
        "longDescription": "Comme mis en avant dans la sélection des métiers émergents de L'Étudiant, le domoticien ne pose pas seulement des fils : il paramètre l'intelligence du bâtiment. En résidentiel, il permet aux occupants de piloter toute leur maison d'un simple clic sur smartphone ou par commande vocale (scénarios 'départ', 'cinéma', 'nuit'). En tertiaire (Gestion Technique du Bâtiment - GTB), il déploie des capteurs de présence et de luminosité qui coupent automatiquement la climatisation et éteignent les lumières dans les bureaux vides, réduisant la facture énergétique de 20 à 30%.",
        "mainObjective": "Rendre les bâtiments communicants, confortables, sécurisés et sobres en énergie grâce à l'automatisation intelligente des équipements.",
        "companyRole": "Intégrateur des technologies connectées et garant de l'expérience utilisateur et de la performance énergétique automatisée.",
        "workEnvironment": [
            "🏠 Villas et appartements résidentiels haut de gamme connectés",
            "🏢 Immeubles tertiaires équipés de systèmes de Gestion Technique du Bâtiment (GTB/GTC)",
            "💻 Programmation sur ordinateur portable directement sur site ou à distance"
        ],
        "missions": [
            "Concevoir l'architecture domotique (choix des protocoles de communication : KNX, Zigbee, BACnet, Modbus)",
            "Câbler les bus de communication et raccorder les modules actionneurs et capteurs",
            "Programmer les scénarios d'usage personnalisés (gestion crépusculaire, délestage automatique d'énergie)",
            "Configurer les interfaces de pilotage sur tablettes murales, smartphones et assistants vocaux",
            "Assurer la cybersécurité des passerelles IoT connectées à Internet pour éviter tout piratage du bâtiment"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Programmation d'un serveur KNX", "desc": "Configuration sous le logiciel ETS des adresses de groupe pour piloter 40 circuits d'éclairage DALI à gradation automatique."},
            {"time": "11:00", "title": "Intégration d'un système de sécurité", "desc": "Interconnexion des caméras IP et des détecteurs d'intrusion avec le système d'ouverture des volets roulants en cas d'alerte."},
            {"time": "14:00", "title": "Essais de régulation thermique", "desc": "Test d'un scénario de fermeture automatique des brise-soleil orientables (BSO) dès que le capteur de façade dépasse 50 000 lux pour éviter la surchauffe."},
            {"time": "16:30", "title": "Formation du client particulier", "desc": "Démonstration personnalisée sur tablette tactile et paramétrage des accès familiaux sécurisés."}
        ],
        "skills": {
            "technical": [
                "Protocoles domotiques et immotiques standards (KNX mondial, Zigbee, Z-Wave, BACnet, DALI)",
                "Programmation sous logiciel ETS (Engineering Tool Software)",
                "Réseaux informatiques locaux (adressage IP, VLAN, routeurs, pare-feu, Wi-Fi 6)",
                "Électricité basse tension et régulation thermique multizone"
            ],
            "human": [
                "Écoute attentive pour comprendre le mode de vie réel des habitants",
                "Sens de la pédagogie pour rendre la technologie simple et intuitive à utiliser",
                "Curiosité technologique permanente face aux innovations de l'IoT"
            ],
            "tools": [
                "Logiciel de programmation ETS (standard KNX mondial)",
                "Contrôleurs et serveurs domotiques (Schneider, Legrand, Somfy, Crestron)",
                "Analyseurs de trames réseaux (Wireshark) et testeurs de câblage RJ45",
                "Multimètres électroniques et outillage d'électricien intégrateur"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Bac Pro (3 ans)", "title": "Bac Pro MELEC (option environnements connectés)", "desc": "Bases pratiques en électricité et raccordement de capteurs communicants."},
                {"step": "BTS (Bac +2)", "title": "BTS Fluides Énergies Domotique (BTS FED option C - Domotique et Bâtiments communicants)", "desc": "Le diplôme d'État de référence cité par L'Étudiant pour devenir intégrateur domoticien expert."},
                {"step": "Licence Pro (Bac +3)", "title": "Licence Pro Bâtiments Intelligents et Efficacité Énergétique", "desc": "Spécialisation dans les smart grids, la GTB tertiaire et la cybersécurité des bâtiments."}
            ],
            "schools": [
                {"name": "Lycées préparant le BTS FED option Domotique — France", "country": "France", "scope": "France"},
                {"name": "IUT et Universités proposant les Licences Pro Smart Building — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) / Télécoms et Réseaux — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification KNX Partner International", "Certification Intégrateur Smarthome certifié", "Certification Cybersécurité IoT Bâtiment"],
            "schoolSubjects": ["Protocoles de bus domotiques (KNX)", "Réseaux informatiques et IP", "Régulation thermique et gestion d'énergie", "Électrotechnique du bâtiment"]
        },
        "career": {
            "sectors": ["Entreprises spécialisées dans l'intégration domotique et audiovisuelle haut de gamme", "Grands groupes d'installations électriques et d'efficacité énergétique (Schneider, Spie, Legrand)", "Promoteurs immobiliers de résidences connectées", "Bureaux d'études en ingénierie Smart Building"],
            "employerTypes": ["Intégrateurs domotiques indépendants", "Entreprises d'électricité tertiaire", "Grands équipementiers du bâtiment"],
            "evolution": "Technicien domotique junior ➔ Intégrateur Smart Building confirmé ➔ Chef de projet GTB tertiaire ➔ Responsable pôle Bâtiment Intelligent",
            "pros": "Métier passionnant à la frontière de l'électronique et du confort, forte composante innovante, demande en plein essor portée par la sobriété énergétique.",
            "cons": "Évolution très rapide des technologies nécessitant une veille permanente, gestion des pannes logicielles parfois complexes à diagnostiquer."
        },
        "gettingStarted": {
            "beginnerProject": "Installer une ampoule connectée et une prise intelligente chez soi et créer un scénario d'allumage automatique au coucher du soleil.",
            "intermediateProject": "Configurer une box domotique open-source (Home Assistant) sur un mini-ordinateur Raspberry Pi avec capteurs de température Zigbee.",
            "advancedProject": "Télécharger la version de démonstration du logiciel ETS et programmer une installation virtuelle KNX de 3 pièces.",
            "portfolioIdeas": ["Dossier technique de programmation KNX d'une maison individuelle", "Interface graphique de pilotage d'appartement sur tablette"]
        },
        "aiImpact": {
            "level": "Révolutionnaire",
            "summary": "L'IA apprend les habitudes réelles de vie des résidents pour anticiper leurs besoins sans qu'ils aient besoin de toucher à un interrupteur, optimisant l'énergie à la minute près.",
            "automatedTasks": ["Apprentissage automatique des rythmes de vie des usagers", "Ajustement prédictif de la climatisation selon la météo du lendemain"],
            "emergingSkills": ["Intégration d'agents d'IA vocaux et de modèles de machine learning dans la gestion du bâtiment"],
            "humanEdge": "La protection de la vie privée des habitants et la conception d'interfaces simples que même un enfant ou une personne âgée peut utiliser."
        },
        "africaContext": {
            "senegalInsight": "À Dakar, la domotique connaît un succès fulgurant dans les nouvelles villas de grand standing des Almadies, de Fann Résidence et de Ngor, où les propriétaires recherchent la sécurité connectée (caméras intelligentes, alerte intrusion sur smartphone) et la gestion optimisée de la climatisation pour alléger les factures de la Senelec.",
            "localSectors": ["Entreprises d'intégration domotique de Dakar", "Promoteurs de résidences de standing", "Boutiques d'équipements connectés et de sécurité"],
            "remoteWork": "Hybride (programmation et supervision logicielle à distance / raccordements physiques sur le chantier).",
            "entrepreneurship": "Création d'une entreprise d'intégration domotique et d'efficacité énergétique automatisée pour les résidences et bureaux de Dakar."
        },
        "relatedJobSlugs": ["electricien-du-btp", "bim-manager", "technicien-climatisation"],
        "connectedFamilies": ["numerique-ia", "energie-renouvelable", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Les métiers émergents du BTP : Domoticien — L'Étudiant", "url": "https://www.letudiant.fr/futurs-metiers/secteur-batiment-et-travaux-publics.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "Fédération Française de Domotique (FFDomotique)", "url": "https://www.ffdomotique.org/", "source": "FFDomotique"}
        ],
        "sources": ["L'Étudiant", "FFDomotique", "KNX Association"],
        "interests": ["technique-outils", "donnees-chiffres", "construire-fabriquer"],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Un bâtiment tertiaire intelligent équipé d'une Gestion Technique du Bâtiment (GTB) bien programmée réduit sa consommation d'énergie de près de 30% sans aucune perte de confort pour les employés !",
            "pourquoi": "En éteignant automatiquement le chauffage, la climatisation et les lumières dès qu'une salle de réunion est inoccupée.",
            "a_retenir": "L'ingénieur du bâtiment vivant qui insuffle de l'intelligence dans chaque mur."
        }
    },

    # -----------------------------------------------------------------------
    # 36. INGÉNIEUR ÉCO-CONCEPTION & BÂTIMENT DURABLE
    # -----------------------------------------------------------------------
    {
        "id": "ingenieur-eco-conception-btp",
        "slug": "ingenieur-eco-conception-btp",
        "title": "Ingénieur Éco-Conception & Bâtiment Durable",
        "aliases": ["Ingénieur construction durable", "Consultant bâtiment bas-carbone", "Ingénieur analyse de cycle de vie BTP"],
        "icon": "🌱",
        "image": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Construction Durable, Éco-Conception & Affaires",
        "domainId": "construction-durable-performance",
        "subdomain": "Éco-conception, Bâtiment bas-carbone & ACV",
        "sectors": ["BTP", "Environnement", "Ingénierie"],
        "sourceEtudiant": True,
        "isEmerging": True,
        "level": "Bac +5 (Ingénieur BTP spécialité environnement ou Master Bâtiment Durable)",
        "salary": "🇫🇷 France : 3 000 - 5 200 € net/mois (~42 000 - 75 000 € brut/an, Source : L'Étudiant / APEC) • 🇸🇳 Sénégal : 550 000 - 1 800 000 FCFA / mois (Bureaux d'études environnement, éco-quartiers Diamniadio)",
        "simpleDefinition": "L'ingénieur éco-conception calcule et réduit l'impact écologique d'un bâtiment tout au long de sa vie (de l'extraction des matériaux jusqu'à sa démolition future) en privilégiant les matériaux biosourcés (bois, paille, chanvre, terre crue), le recyclage et la neutralité carbone.",
        "shortDescription": "Pionnier de la révolution écologique du BTP identifié comme métier émergent par L'Étudiant, il conçoit les édifices neutres en carbone de l'après-pétrole.",
        "longDescription": "Comme mis en avant dans le dossier des nouveaux métiers de L'Étudiant, l'ingénieur éco-conception est l'acteur clé de l'application des nouvelles réglementations environnementales (comme la RE2020 en France). Réalisant des Analyses de Cycle de Vie (ACV) approfondies, il quantifie le poids carbone de chaque matériau (ciment, isolants, vitrages), préconise le réemploi de matériaux issus de déconstructions et conçoit des architectures bioclimatiques favorisant la lumière et la ventilation naturelles. Il accompagne les projets pour l'obtention des labels écologiques internationaux les plus exigeants (HQE, BREEAM, LEED).",
        "mainObjective": "Minimiser l'empreinte carbone et environnementale globale des bâtiments neufs et rénovés sans compromettre leur durabilité ni leur confort.",
        "companyRole": "Pionnier stratégique de la décarbonation et garant de la conformité écologique et des labels environnementaux.",
        "workEnvironment": [
            "🌿 Bureaux d'études techniques en environnement et éco-conception",
            "🏛️ Collaboration étroite avec les agences d'architecture lors des concours de maîtrise d'œuvre",
            "🏗️ Visites de chantiers pour contrôler la traçabilité des matériaux écologiques et le tri des déchets"
        ],
        "missions": [
            "Réaliser l'Analyse de Cycle de Vie (ACV) dynamique du bâtiment selon la réglementation RE2020",
            "Préconiser des matériaux biosourcés, géosourcés (terre crue, pierre) ou issus du réemploi circulaire",
            "Concevoir des stratégies bioclimatiques passives (protection solaire d'été, inertie thermique)",
            "Monter et piloter les dossiers de certification environnementale (HQE Bâtiment Durable, BREEAM, LEED)",
            "Sensibiliser les équipes de maîtrise d'œuvre et les conducteurs de travaux aux éco-pratiques de chantier vert"
        ],
        "typicalDay": [
            {"time": "08:45", "title": "Calcul d'Analyse de Cycle de Vie (ACV)", "desc": "Modélisation sous le logiciel One Click LCA du bilan carbone d'un lycée de 6 000 m² : comparaison d'une ossature bois vs béton."},
            {"time": "11:00", "title": "Revue bioclimatique avec l'architecte", "desc": "Proposition de brise-soleil horizontaux en bois local et ventilation naturelle traversante pour éviter l'installation de climatiseurs énergivores."},
            {"time": "14:15", "title": "Visite d'une plateforme de réemploi", "desc": "Sélection d'un lot de 200 portes intérieures et de faux-planchers métalliques démontés sur un chantier de curage pour être réutilisés."},
            {"time": "16:30", "title": "Audit d'un chantier à faibles nuisances", "desc": "Contrôle du taux de valorisation des déchets de chantier (atteinte de 85% de recyclage des gravats) pour le label BREEAM."}
        ],
        "skills": {
            "technical": [
                "Méthodologie de l'Analyse de Cycle de Vie (ACV) et réglementation environnementale RE2020",
                "Connaissance approfondie des matériaux biosourcés (bois, ouate, chanvre, paille, terre crue)",
                "Référentiels de certification environnementale (HQE, BREEAM, LEED, BBCA bas-carbone)",
                "Thermique du bâtiment, ventilation naturelle et conception bioclimatique passive"
            ],
            "human": [
                "Forte conviction écologique et sens aigu de l'éthique environnementale",
                "Capacité de persuasion et diplomatie pour faire évoluer les pratiques traditionnelles",
                "Rigueur analytique dans le traitement de milliers de données de fiches FDES"
            ],
            "tools": [
                "Logiciels d'ACV bâtiment (One Click LCA, Pleiades ACV, Elodie)",
                "Bases de données environnementales de référence (base INIES)",
                "Simulateurs thermiques dynamiques (Pleiades, EnergyPlus)",
                "Plateformes de matériaux de réemploi (Cycle Up, Backacia)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Classes Préparatoires / BUT (Bac +3)", "title": "CPGE Scientifique ou BUT Génie Civil Construction Durable", "desc": "Bases solides en sciences de la matière et technologie du bâtiment."},
                {"step": "Diplôme d'Ingénieur (Bac +5)", "title": "Ingénieur BTP spécialisé Environnement / Éco-matériaux (INSA, Mines, ESTP)", "desc": "Formation de référence citée par L'Étudiant combinant génie civil et transition écologique."},
                {"step": "Master Spécialisé Bâtiment Durable (Bac +6)", "title": "Mastère Spécialisé Éco-conception et Management Environnemental", "desc": "Spécialisation de haut niveau pour piloter la stratégie carbone de grands groupes."}
            ],
            "schools": [
                {"name": "INSA Lyon / Mines Paris-PSL / Centrale Lyon — France", "country": "France", "scope": "France"},
                {"name": "Polytech Nantes (Génie Civil et Éco-matériaux) / ESTP Paris — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) / Environnement et BTP — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Polytechnique de Thiès (EPT) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Assesseur Certifié BREEAM / LEED AP", "Référent Reconnu HQE Bâtiment Durable", "Auditeur Carbone Certifié Bilan Carbone / BBCA"],
            "schoolSubjects": ["Analyse de cycle de vie (ACV)", "Écologie industrielle et économie circulaire", "Physique du bâtiment et thermique", "Éco-matériaux et chimie verte"]
        },
        "career": {
            "sectors": ["Bureaux d'études spécialisés en ingénierie environnementale du bâtiment", "Grandes agences d'architecture et de paysage", "Majors de la construction (pôles R&D et développement durable)", "Grandes foncières immobilières et promoteurs engagés"],
            "employerTypes": ["Cabinets d'ingénierie environnementale", "Grands constructeurs BTP", "Bureaux de conseil RSE"],
            "evolution": "Ingénieur éco-conception junior ➔ Chef de projet bâtiment durable ➔ Directeur du pôle environnement d'une société d'ingénierie ➔ Directeur RSE & Transition écologique d'un groupe",
            "pros": "Métier porteur de sens absolu, rôle pionnier dans la décarbonation du monde bâti, profil extrêmement recherché par le marché.",
            "cons": "Devoir parfois lutter contre la tentation du 'greenwashing', arbitrage délicat entre surcoûts des matériaux écologiques et budget du client."
        },
        "gettingStarted": {
            "beginnerProject": "Consulter la base publique INIES et comparer l'empreinte carbone d'un isolant en laine de verre vs laine de bois.",
            "intermediateProject": "Calculer l'énergie grise nécessaire pour fabriquer 1 tonne de ciment classique comparé à 1 tonne de brique de terre crue.",
            "advancedProject": "Réaliser l'Analyse de Cycle de Vie simplifiée d'une maison individuelle sous un logiciel libre d'ACV.",
            "portfolioIdeas": ["Bilan carbone complet d'un bâtiment tertiaire sous format RE2020", "Guide de réemploi de matériaux rédigé pour un chantier"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA analyse instantanément la maquette BIM pour proposer des matériaux alternatifs ayant la même résistance mais divisant l'empreinte carbone par deux.",
            "automatedTasks": ["Calcul instantané du score carbone à chaque modification de plan", "Identification automatique des matériaux disponibles sur les plateformes de réemploi"],
            "emergingSkills": ["Utilisation d'outils d'optimisation générative bas-carbone sous BIM"],
            "humanEdge": "La vision holistique du vivant, la créativité bioclimatique et la sensibilisation éthique des maîtres d'ouvrage."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'éco-conception est une opportunité historique : des pionniers de l'architecture durable redécouvrent les matériaux traditionnels locaux comme le typha (plante envahissante du fleuve Sénégal transformée en isolant thermique exceptionnel) et la brique de terre compressée (BTC) pour construire des maisons fraîches sans climatisation.",
            "localSectors": ["Projets d'éco-construction sahélienne (Programme Typha, Éléments Terre)", "Bureaux d'études d'impact environnemental de Dakar", "Éco-quartiers et cités universitaires écologiques"],
            "remoteWork": "Très favorable (calculs d'ACV et modélisations environnementales en télétravail).",
            "entrepreneurship": "Création d'une entreprise de production et commercialisation de matériaux de construction biosourcés locaux (isolants en typha, briques de terre compressée)."
        },
        "relatedJobSlugs": ["energy-manager-auditeur-energetique", "architecte", "technicien-etudes-thermiques-batiment"],
        "connectedFamilies": ["environnement-ecologie", "sciences-biotech", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Les métiers de l'éco-construction — L'Étudiant", "url": "https://www.letudiant.fr/futurs-metiers/secteur-batiment-et-travaux-publics.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "Alliance HQE — Bâtiment Durable", "url": "https://www.hqegbc.org/", "source": "Alliance HQE"}
        ],
        "sources": ["L'Étudiant", "ADEME", "Alliance HQE"],
        "interests": ["nature-environnement", "sciences-recherche", "concevoir-creer"],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Le secteur de la construction et des bâtiments représente à lui seul près de 40% des émissions mondiales de gaz à effet de serre et consomme plus de 50% des matières premières extraites sur Terre !",
            "pourquoi": "C'est pour cela que l'ingénieur éco-conception est l'un des métiers les plus cruciaux du XXIe siècle pour sauver le climat mondial.",
            "a_retenir": "L'ingénieur de l'après-pétrole qui réconcilie l'art de bâtir avec la planète."
        }
    },

    # -----------------------------------------------------------------------
    # 37. TECHNICIEN EN DIAGNOSTICS IMMOBILIERS
    # -----------------------------------------------------------------------
    {
        "id": "technicien-diagnostics-immobiliers",
        "slug": "technicien-diagnostics-immobiliers",
        "title": "Technicien en Diagnostics Immobiliers",
        "aliases": ["Diagnostiqueur immobilier certifié", "Auditeur technique immobilier", "Diagnostiqueur DPE et amiante"],
        "icon": "🧪",
        "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Construction Durable, Éco-Conception & Affaires",
        "domainId": "construction-durable-performance",
        "subdomain": "Inspection technique, DPE & Sécurité",
        "sectors": ["BTP", "Immobilier", "Contrôle"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "Bac +2 (BTS Bâtiment, Professions Immobilières) + Certifications d'État obligatoires",
        "salary": "🇫🇷 France : 2 200 - 3 800 € net/mois (~32 000 - 55 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 350 000 - 1 100 000 FCFA / mois (Cabinets d'expertise immobilière, contrôle technique de vétusté à Dakar)",
        "simpleDefinition": "Le diagnostiqueur immobilier est le médecin légiste du bâtiment : il inspecte un logement ou un immeuble de fond en comble avant sa vente ou sa location pour détecter l'amiante, le plomb, les termites, vérifier la conformité du gaz et de l'électricité et calculer sa note énergétique (le DPE).",
        "shortDescription": "Expert réglementaire et sanitaire répertorié par L'Étudiant, il protège la santé des occupants et informe en toute impartialité les acheteurs et locataires.",
        "longDescription": "Comme décrit dans la présentation des métiers de L'Étudiant, le technicien en diagnostics immobiliers intervient obligatoirement lors de toute transaction immobilière. Armé de son télémètre laser, de son détecteur de plomb à fluorescence X et de son logiciel réglementaire, il passe au crible chaque recoin du bien. Il calcule la surface Carrez exacte, évalue l'isolation pour attribuer la fameuse étiquette énergétique (de A à G du Diagnostic de Performance Énergétique - DPE), traque les matériaux amiantés et teste la sécurité du tableau électrique et des tuyaux de gaz pour remettre le Dossier de Diagnostic Technique (DDT).",
        "mainObjective": "Contrôler la sécurité sanitaire, la conformité réglementaire et la performance énergétique des bâtiments pour garantir la transparence des transactions.",
        "companyRole": "Expert indépendant et garant juridique de la sécurité et de la transparence de l'état du bâtiment.",
        "workEnvironment": [
            "🏠 Visites quotidiennes de maisons, appartements anciens et immeubles récents",
            "🏢 Locaux commerciaux, hangars industriels et copropriétés",
            "💻 Rédaction des rapports réglementaires et calculs DPE au bureau ou en télétravail"
        ],
        "missions": [
            "Réaliser le Diagnostic de Performance Énergétique (DPE) en calculant les déperditions thermiques",
            "Rechercher la présence d'amiante dans les calorifugeages, faux-plafonds et toitures en fibrociment",
            "Détecter les peintures anciennes au plomb dans les logements construits avant 1949 (CREP)",
            "Contrôler la sécurité des installations intérieures d'électricité et de gaz de plus de 15 ans",
            "Mesurer la superficie privative exacte de la loi Carrez pour les appartements en copropriété"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Diagnostic complet d'une maison ancienne", "desc": "Visite technique de 3 heures : métré laser des pièces, relevé de l'épaisseur d'isolant dans les combles et vérification du disjoncteur différentiel."},
            {"time": "11:45", "title": "Mesure du plomb au pistolet à rayons X", "desc": "Analyse à fluorescence X des peintures des boiseries pour détecter le plomb sans abîmer les murs."},
            {"time": "14:00", "title": "Saisie des données DPE", "desc": "Entrée des caractéristiques du vitrage, de la chaudière et de l'orientation dans le logiciel certifié par l'ADEME pour générer l'étiquette DPE (classe D)."},
            {"time": "16:30", "title": "Envoi du Dossier de Diagnostic Technique", "desc": "Signature électronique du rapport officiel de 40 pages et transmission immédiate au notaire et au propriétaire."}
        ],
        "skills": {
            "technical": [
                "Pathologies du bâtiment, matériaux anciens et isolation thermique",
                "Réglementation stricte des diagnostics obligatoires du Code de la construction",
                "Métrologie de précision (analyseur de plomb à rayons X, télémètre laser)",
                "Méthode de calcul 3CL du Diagnostic de Performance Énergétique (DPE)"
            ],
            "human": [
                "Impartialité et indépendance totale vis-à-vis des vendeurs et agences immobilières",
                "Rigueur d'observation et sens du détail pour ne rien laisser passer",
                "Pédagogie pour expliquer les résultats techniques sans affoler le client"
            ],
            "tools": [
                "Analyseurs de plomb à fluorescence X portables (fondés sur source scellée)",
                "Télémètres laser professionnels avec liaison Bluetooth",
                "Testeurs de prises électriques et contrôleurs de disjoncteurs",
                "Logiciels de diagnostics immobiliers certifiés ADEME (Liciel, Analysimmo)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +2 (BTS)", "title": "BTS Bâtiment, Professions Immobilières ou BUT Génie Civil", "desc": "Bases de la construction et du droit immobilier."},
                {"step": "Formation Diagnostiqueur (3 à 6 mois)", "title": "Formation certifiante aux 6 diagnostics réglementaires", "desc": "Apprentissage des protocoles stricts de mesure et de sécurité."},
                {"step": "Certifications de Compétences", "title": "Certifications individuelles avec mention délivrées par organisme accrédité COFRAC", "desc": "Examen théorique et pratique obligatoire renouvelé tous les 7 ans pour chaque domaine (DPE, Amiante, Plomb, etc.)."}
            ],
            "schools": [
                {"name": "Centres de formation spécialisés en diagnostics immobiliers (AFDI, ITGA, I.F.D.B) — France", "country": "France", "scope": "France"},
                {"name": "Lycées préparant les BTS BTP et immobilier — France", "country": "France", "scope": "France"},
                {"name": "Instituts de formation en expertise immobilière de Dakar — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certifications COFRAC (DPE mention, Amiante mention, Plomb, Gaz, Électricité, Termites)", "Attestation PCR (Personne Compétente en Radioprotection pour pistolet plomb)", "Habilitation électrique B0/H0"],
            "schoolSubjects": ["Réglementation du Code de la construction", "Thermique du bâtiment et DPE", "Pathologie des matériaux et amiante", "Sécurité des installations gaz et électricité"]
        },
        "career": {
            "sectors": ["Cabinets indépendants de diagnostics immobiliers", "Réseaux nationaux franchisés d'expertise immobilière (Diagamter, Exim, Agenda Diagnostics)", "Bureaux de contrôle technique et d'inspection (Bureau Veritas, Apave, Dekra)"],
            "employerTypes": ["Cabinets de diagnostics", "Réseaux de diagnostiqueurs", "Exercice libéral indépendant"],
            "evolution": "Diagnostiqueur salarié ➔ Diagnostiqueur expert avec mention tertiaire ➔ Responsable d'agence de diagnostics ➔ Créateur de son cabinet franchisé",
            "pros": "Métier très autonome avec voiture de tournée, équilibre entre visites sur le terrain et travail sur ordinateur, activité garantie par la loi à chaque vente.",
            "cons": "Évolution perpétuelle des textes de loi, responsabilité juridique importante en cas d'amiante non décelé."
        },
        "gettingStarted": {
            "beginnerProject": "Regarder attentivement l'étiquette DPE (de A à G) sur une annonce immobilière en vitrine d'agence et comprendre ce qu'elle signifie.",
            "intermediateProject": "Mesurer au télémètre laser la surface habitable d'une pièce en déduisant les placards et cloisons.",
            "advancedProject": "Identifier les 5 points de sécurité critiques d'un vieux tableau électrique résidentiel (différentiel, terre, calibres).",
            "portfolioIdeas": ["Rapport blanc d'inspection de logement réalisé sous logiciel d'essai", "Attestation de formation aux règles de sécurité électrique"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA analyse les photos de l'installation pour pré-remplir les formulaires de diagnostics et vérifier automatiquement la cohérence des relevés de surfaces.",
            "automatedTasks": ["Reconnaissance d'équipements sur photos pour auto-complétion du DPE", "Calcul automatique de la surface Carrez à partir d'un scan 3D de smartphone"],
            "emergingSkills": ["Utilisation d'applications de photogrammétrie sur smartphone pour numériser le bien en une seule visite"],
            "humanEdge": "La responsabilité pénale de la signature et le regard d'expert pour déceler une fissure structurelle suspecte."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'expertise technique des bâtiments prend une importance vitale avec la lutte contre la vétusté et les effondrements d'immeubles anciens à Dakar (Médina, Plateau) : les experts en diagnostic inspectent la corrosion des fers à béton par l'air salin et vérifient la solidité des structures avant réhabilitation.",
            "localSectors": ["Cabinets d'expertise immobilière et foncière de Dakar", "Ordre des Experts et Évaluateurs Immobiliers du Sénégal (ONEEAS)", "Bureaux de contrôle technique (Bureau Veritas Sénégal, Socotec)"],
            "remoteWork": "Hybride (visites sur le terrain le matin puis rédaction des rapports en télétravail l'après-midi).",
            "entrepreneurship": "Création d'un cabinet d'audit technique et de diagnostic de vétusté des immeubles résidentiels et commerciaux à Dakar."
        },
        "relatedJobSlugs": ["energy-manager-auditeur-energetique", "ingenieur-eco-conception-btp", "technicien-etudes-thermiques-batiment"],
        "connectedFamilies": ["immobilier-habitat", "droit-management", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier Diagnostiqueur immobilier — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "Fidi — Fédération Interprofessionnelle du Diagnostic Immobilier", "url": "https://www.fidi.fr/", "source": "FIDI"}
        ],
        "sources": ["L'Étudiant", "FIDI", "ADEME"],
        "interests": ["sciences-recherche", "donnees-chiffres", "technique-outils"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En France, depuis 2023, les logements classés 'G' (les fameuses passoires thermiques au DPE) sont progressivement interdits à la location pour forcer les propriétaires à réaliser des travaux d'isolation !",
            "pourquoi": "Cette mesure protège les locataires contre des factures d'énergie exorbitantes et accélère la rénovation écologique nationale.",
            "a_retenir": "Le contrôleur assermenté qui protège notre santé et ausculte les bâtiments."
        }
    }
]

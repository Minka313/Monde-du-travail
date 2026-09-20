# execution/btp_jobs_part2.py
# Fiches Métiers Dérivées du Référentiel Officiel L'Étudiant (Secteur Bâtiment et Travaux Publics)
# Fiches Métiers 14 à 26 : Travaux Publics, Engins, Gestion & Conduite de Chantier, Second Œuvre

BTP_JOBS_PART2 = [
    # -----------------------------------------------------------------------
    # 14. OUVRIER QUALIFIÉ DU GROS ŒUVRE
    # -----------------------------------------------------------------------
    {
        "id": "ouvrier-qualifie-btp",
        "slug": "ouvrier-qualifie-btp",
        "title": "Ouvrier Qualifié du Gros Œuvre BTP",
        "aliases": ["Ouvrier polyvalent du bâtiment", "Compagnon professionnel gros œuvre", "Aide-maçon qualifié"],
        "icon": "👷",
        "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Gros Œuvre, Maçonnerie & Béton",
        "domainId": "gros-oeuvre-maconnerie",
        "subdomain": "Polyvalence gros œuvre & Chantiers",
        "sectors": ["BTP", "Gros Œuvre", "Construction"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "CAP / Titre Professionnel à Bac Pro BTP",
        "salary": "🇫🇷 France : 1 800 - 2 600 € net/mois (~25 000 - 37 000 € brut/an + paniers, Source : L'Étudiant) • 🇸🇳 Sénégal : 150 000 - 450 000 FCFA / mois (Chantiers de construction du Sénégal)",
        "simpleDefinition": "L'ouvrier qualifié du gros œuvre exécute les travaux fondamentaux de construction : préparation des fondations, coulage des dalles de béton, pose d'éléments préfabriqués, manutention sécurisée et assistance technique aux maçons et coffreurs.",
        "shortDescription": "Bras droit indispensable des chantiers répertorié par L'Étudiant, il maîtrise les gestes techniques polyvalents nécessaires pour faire progresser les ouvrages jour après jour.",
        "longDescription": "Comme décrit dans les fiches d'orientation de L'Étudiant, l'ouvrier qualifié est au cœur de l'activité du chantier. Polyvalent et robuste, il sait implanter un ouvrage simple, poser des canalisations d'évacuation sous dallage, préparer les armatures métalliques, guider la pose des dalles alvéolées préfabriquées et reboucher les trémies. Sa parfaite connaissance des règles de sécurité et sa capacité à anticiper les besoins des compagnons en font un maillon clé de la productivité.",
        "mainObjective": "Réaliser avec rigueur les tâches d'exécution du gros œuvre et garantir le bon approvisionnement et la sécurité du front de travail.",
        "companyRole": "Exécutant polyvalent et moteur de la cadence d'avancement du gros œuvre.",
        "workEnvironment": [
            "🏗️ Chantiers extérieurs en construction neuve, réhabilitation ou génie civil",
            "🌤️ Travail en plein air par tous les temps, au sol ou sur dalles d'étages",
            "👥 Travail en équipe sous les ordres directs du chef d'équipe ou du contremaître"
        ],
        "missions": [
            "Préparer les zones de travail, installer les garde-corps de sécurité et sécuriser les trémies",
            "Couler et lisser les bétons de propreté, semelles de fondations et chapes de ravoirage",
            "Approvisionner les postes de travail en mortier, parpaings, armatures et banches",
            "Aider à la pose d'éléments préfabriqués (prédalles, poutres, escaliers préfabriqués)",
            "Nettoyer, entretenir et ranger le matériel de chantier et trier les déchets de démolition"
        ],
        "typicalDay": [
            {"time": "07:30", "title": "Préparation du matériel et sécurité", "desc": "Contrôle des filets anti-chutes sur les rives de plancher et vérification du niveau d'huile de la pilonneuse."},
            {"time": "09:30", "title": "Coulage d'une dalle de sous-sol", "desc": "Tirage du béton à la règle vibrante et talonnage des surfaces pour obtenir une dalle parfaitement lisse."},
            {"time": "13:30", "title": "Pose de canalisations sous dallage", "desc": "Emboîtement de tuyaux PVC d'évacuation avec respect rigoureux de la pente de 1% au niveau laser."},
            {"time": "16:00", "title": "Rangement et sécurisation du chantier", "desc": "Nettoyage de la bétonnière et fermeture des accès au chantier avant la tombée de la nuit."}
        ],
        "skills": {
            "technical": [
                "Techniques générales du bâtiment, fabrication et vibration des mortiers et bétons",
                "Utilisation de l'outillage électroportatif de chantier (marteau-piqueur, meuleuse, carotteuse)",
                "Lecture élémentaire de plans de repérage et prise de niveaux au laser",
                "Gestes et postures de manutention manuelle et consignes de sécurité strictes"
            ],
            "human": [
                "Ponctualité, assiduité et grand sens de l'entraide collective",
                "Excellente condition physique et résistance à l'effort extérieur",
                "Écoute attentive des consignes du chef d'équipe"
            ],
            "tools": [
                "Règles à niveau, taloches et platoirs flamands",
                "Marteaux piqueurs et brise-béton électropneumatiques",
                "Lasers de chantier rotatifs autonivelants",
                "Pilonneuses et plaques vibrantes pour remblais"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "CAP (2 ans)", "title": "CAP Maçon ou Constructeur en Béton Armé", "desc": "Formation de base pour acquérir les gestes techniques en alternance."},
                {"step": "Titre Professionnel (6 à 12 mois)", "title": "Titre Professionnel Ouvrier Polyvalent du Bâtiment (AFPA)", "desc": "Cursus modulaire certifiant très prisé pour les adultes et débutants motivés."},
                {"step": "Bac Pro (3 ans)", "title": "Bac Pro Technicien du Bâtiment", "desc": "Évolution rapide vers le statut de chef d'équipe de gros œuvre."}
            ],
            "schools": [
                {"name": "CFA du Bâtiment — France", "country": "France", "scope": "France"},
                {"name": "Centres AFPA BTP — France", "country": "France", "scope": "France"},
                {"name": "CFPT Sénégal-Japon (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Centre de Formation Professionnelle de Guédiawaye — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat de Sauveteur Secouriste du Travail (SST)", "CACES mini-pelle et engins de chantier R482 catégorie A", "Habilitation travail en hauteur"],
            "schoolSubjects": ["Sécurité et gestes professionnels", "Technologie du béton", "Dessin de bâtiment de base", "Mathématiques professionnelles"]
        },
        "career": {
            "sectors": ["Entreprises de maçonnerie et de gros œuvre", "Entreprises générales de BTP", "Artisans du bâtiment", "Sociétés de travaux de rénovation"],
            "employerTypes": ["Artisans du BTP", "PME de gros œuvre", "Grands groupes de construction"],
            "evolution": "Ouvrier d'exécution ➔ Ouvrier hautement qualifié (compagnon) ➔ Chef d'équipe gros œuvre ➔ Chef de chantier",
            "pros": "Accès facile sans long cursus initial, apprentissage permanent au contact de compagnons chevronnés, forte demande de recrutement.",
            "cons": "Travail physique exigeant, pénibilité liée aux intempéries."
        },
        "gettingStarted": {
            "beginnerProject": "Participer à la construction d'un muret de jardin ou au coulage d'une allée piétonne en béton.",
            "intermediateProject": "S'entraîner à poser des parpaings d'angle parfaitement verticaux au fil à plomb.",
            "advancedProject": "Réaliser un calage d'armatures pour semelle filante en respectant l'enrobage de 5 cm.",
            "portfolioIdeas": ["Photos de chantiers réalisés en tant qu'ouvrier qualifié", "Recommandation d'un artisan ou tuteur de stage"]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "L'effort physique, la réactivité sur le terrain et la polyvalence des interventions manuelles restent impossibles à robotiser sur les chantiers hétérogènes.",
            "automatedTasks": ["Approvisionnement automatisé par monte-charges intelligents", "Tri automatique de gravats sur les plateformes de recyclage"],
            "emergingSkills": ["Utilisation d'exosquelettes légers pour soulager les lombaires lors du levage de charges"],
            "humanEdge": "Le coup de main pratique, la solidarité humaine dans l'effort et l'endurance sur le chantier."
        },
        "africaContext": {
            "senegalInsight": "Sur tous les chantiers du Sénégal, les ouvriers qualifiés forment la base indispensable de la construction : ils manient le béton, fabriquent les blocs et montent les étages sous le soleil sahélien, avec une solidarité de groupe exemplaire.",
            "localSectors": ["Chantiers de construction d'habitat de Dakar et banlieue", "Entreprises de TP sénégalaises", "Travaux communaux d'assainissement"],
            "remoteWork": "Non compatible (100% physique sur place).",
            "entrepreneurship": "Création d'une équipe autonome de maçons et ouvriers qualifiés proposant des prestations de gros œuvre clé en main."
        },
        "relatedJobSlugs": ["macon", "coffreur-bancheur", "chef-de-chantier"],
        "connectedFamilies": ["artisanat-metiers-dart", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier Ouvrier qualifié — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/ouvrier-qualifie.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "FFB — Métiers du gros œuvre", "url": "https://www.ffbatiment.fr/", "source": "FFB"}
        ],
        "sources": ["L'Étudiant", "FFB", "CFPT Dakar"],
        "interests": ["construire-fabriquer", "sport-plein-air", "technique-outils"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Dans le BTP, plus d'un tiers des chefs d'entreprise et directeurs de travaux ont démarré leur carrière comme simples ouvriers qualifiés sur les chantiers.",
            "pourquoi": "C'est un des rares secteurs où l'ascenseur social fonctionne pleinement au mérite et à la compétence pratique démontrée sur le terrain.",
            "a_retenir": "Le bâtisseur de terrain sans lequel aucun projet ne sort de terre."
        }
    },

    # -----------------------------------------------------------------------
    # 15. CHARPENTIER BOIS & MÉTALLIQUE
    # -----------------------------------------------------------------------
    {
        "id": "charpentier",
        "slug": "charpentier",
        "title": "Charpentier Bois & Métallique",
        "aliases": ["Charpentier constructeur bois", "Monteur de charpente métallique", "Compagnon charpentier"],
        "icon": "🪵",
        "image": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Charpente, Couverture & Enveloppe",
        "domainId": "charpente-enveloppe-couverture",
        "subdomain": "Charpente bois, Métal & Ossature",
        "sectors": ["BTP", "Charpente", "Bois"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "CAP Charpentier bois ou métallique à Bac Pro / BTS SCBH",
        "salary": "🇫🇷 France : 2 000 - 3 200 € net/mois (~28 000 - 45 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 250 000 - 800 000 FCFA / mois (Hangars industriels métalliques, charpentes toitures de prestige)",
        "simpleDefinition": "Le charpentier conçoit, taille en atelier et assemble sur le toit la structure porteuse (en bois ou en acier) qui soutient la couverture d'une maison, d'un gymnase, d'une église ou d'un grand hangar industriel.",
        "shortDescription": "Artisan noble et géomètre de la structure documenté par L'Étudiant, il maîtrise l'art du trait, l'assemblage précis et le levage en hauteur.",
        "longDescription": "Comme décrit dans les fiches métiers de L'Étudiant, le charpentier combine deux univers : le travail minutieux de traçage et de taille en atelier, et le spectaculaire travail de levage et d'assemblage en hauteur sur le chantier. Qu'il travaille le bois massif, le lamellé-collé ou les profilés d'acier, il réalise des épures géométriques, découpe les tenons, mortaises ou platines d'assemblage, puis monte sur l'ossature pour boulonner et contreventer les fermes avec l'aide de la grue.",
        "mainObjective": "Tailler et lever une charpente robuste et pérenne capable de résister au vent et aux charges de toiture selon les règles de l'art.",
        "companyRole": "Créateur de l'ossature de toit et garant de la géométrie de la toiture du bâtiment.",
        "workEnvironment": [
            "🪵 Ateliers de taille de charpente et de préfabrication d'ossatures",
            "🌤️ Chantiers en hauteur sur les toits par tous les temps",
            "🦺 Travail sous harnais de sécurité avec grutier et équipes de charpentiers"
        ],
        "missions": [
            "Tracer les épures et plans de charpente selon les cotes d'architecte (l'art du trait)",
            "Découper, raboter et tailler les pièces de bois ou d'acier en atelier avec machines numériques",
            "Pré-assembler les fermes et éléments d'ossature au sol pour vérifier l'exactitude des emboîtements",
            "Hisser les éléments de charpente à la grue et les fixer solidement sur la maçonnerie porteuse",
            "Poser les pannes, chevrons et contreventements qui accueilleront les matériaux de couverture"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Taille d'arbalétriers en atelier", "desc": "Usinage numérique et finition manuelle au ciseau à bois des assemblages à mi-bois d'une ferme traditionnelle."},
            {"time": "10:30", "title": "Levage de fermes sur chantier", "desc": "Guidage à la grue d'une ferme en lamellé-collé de 18 mètres de portée et boulonnage sur les platines d'ancrage en béton."},
            {"time": "14:00", "title": "Pose des pannes et liernes", "desc": "Travail en hauteur sur nacelle pour fixer les pannes intermédiaires et régler l'alignement au cordeau."},
            {"time": "16:30", "title": "Contrôle d'aplomb", "desc": "Vérification au fil à plomb et niveau laser de la parfaite verticalité des fermes avant pose des contreventements définitifs."}
        ],
        "skills": {
            "technical": [
                "Art du trait de charpente et géométrie descriptive dans l'espace",
                "Résistance des matériaux bois et acier et règles de calcul des assemblages",
                "Maniement des machines d'atelier (scies à ruban, raboteuses, centres d'usinage à commande numérique)",
                "Techniques de levage, d'élingage et travail en hauteur sous harnais"
            ],
            "human": [
                "Absence totale de vertige, équilibre et agilité physique en hauteur",
                "Sens aigu de la précision millimétrique et respect de la matière bois/acier",
                "Confiance et solidarité absolue avec les compagnons de cordée"
            ],
            "tools": [
                "Ciseaux à bois, bisaiguës, herminettes et scies sabres",
                "Machines de taille numériques (Hundegger, SCM)",
                "Boulonneuses à choc, cloueurs pneumatiques et tire-forts",
                "Harnais de sécurité, lignes de vie et longes antichute"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "CAP (2 ans)", "title": "CAP Charpentier Bois ou Constructeur Métallique", "desc": "La formation pratique d'apprentissage de référence mise en avant par L'Étudiant."},
                {"step": "Bac Pro / BP (2 à 3 ans)", "title": "Bac Pro Technicien Constructeur Bois ou BP Charpentier", "desc": "Perfectionnement technique sur le calcul de charges et les charpentes complexes."},
                {"step": "BTS (Bac +2)", "title": "BTS Systèmes Constructifs Bois et Habitat (SCBH)", "desc": "Formation de haut niveau pour devenir chef d'atelier ou conducteur de travaux bois."}
            ],
            "schools": [
                {"name": "Compagnons du Devoir et du Tour de France — France", "country": "France", "scope": "France"},
                {"name": "Lycées professionnels du bois et CFA BTP — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["CQP Charpentier Haute Qualification", "CACES nacelle PEMP 1B/3B", "Attestation de montage d'échafaudages et harnais"],
            "schoolSubjects": ["Épure et géométrie dans l'espace", "Technologie du bois et des métaux", "Dessin assisté par ordinateur (Cadwork)", "Sécurité du travail en hauteur"]
        },
        "career": {
            "sectors": ["Entreprises de charpente traditionnelle et couverture", "Constructeurs de maisons à ossature bois (MOB)", "Entreprises de construction métallique et hangars industriels", "Restauration des monuments historiques"],
            "employerTypes": ["Artisans charpentiers", "Entreprises de charpente industrielle", "Grandes entreprises de BTP bois"],
            "evolution": "Apprenti charpentier ➔ Compagnon charpentier ➔ Chef d'équipe levage ➔ Chef d'atelier de taille ➔ Artisan chef d'entreprise",
            "pros": "Prestige ancestral du métier de compagnon, beauté du travail du bois noble, fierté de poser la couronne du bouquet de fin de charpente.",
            "cons": "Travail en hauteur exposé au vent, aux chaleurs et au froid, manipulation de poutres lourdes."
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser un assemblage à mi-bois parfait entre deux tasseaux avec scie égoïne et ciseau.",
            "intermediateProject": "Construire une maquette à l'échelle 1/10e d'une ferme de charpente traditionnelle avec poinçon et fiches.",
            "advancedProject": "Dessiner l'épure d'un raccord de comble avec noue et arêtier sous le logiciel Cadwork.",
            "portfolioIdeas": ["Maquette en bois d'une ferme traditionnelle", "Photos de chantier de levage d'une charpente complète"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'IA et les logiciels de CAO 3D optimisent les découpes de bois pour réduire les chutes à moins de 2%, mais l'assemblage et le levage sur le toit restent purement humains.",
            "automatedTasks": ["Génération automatique des fichiers de pilotage des machines de taille CNC", "Calcul automatique des efforts aux nœuds de charpente"],
            "emergingSkills": ["Pilotage des centres d'usinage à commande numérique pour ossatures bois"],
            "humanEdge": "L'art du geste d'ajustement en hauteur, la lecture du fil du bois et le courage physique sur le toit."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, si la charpente métallique domine dans les entrepôts portuaires et hangars industriels, la charpente bois de qualité connaît un fort essor dans l'éco-tourisme (lodges du Sine Saloum, toitures en chaume et rônier de Casamance, hôtels de Saly) pour son esthétique chaleureuse et sa fraîcheur thermique naturelle.",
            "localSectors": ["Ateliers de construction métallique de Dakar (SENAC, Eiffage Métal)", "Menuiseries et charpenteries artisanales", "Projets d'éco-lodges touristiques"],
            "remoteWork": "Non compatible (atelier de taille et chantiers physiques sur place).",
            "entrepreneurship": "Création d'une entreprise de construction de charpentes métalliques légères et toitures isolées pour hangars agricoles et industriels."
        },
        "relatedJobSlugs": ["couvreur", "menuisier", "ingenieur-structures", "macon"],
        "connectedFamilies": ["artisanat-metiers-dart", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier Charpentier — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "Compagnons du Devoir — Métier de Charpentier", "url": "https://www.compagnons-du-devoir.com/", "source": "Compagnons"}
        ],
        "sources": ["L'Étudiant", "Compagnons du Devoir", "CAPEB"],
        "interests": ["construire-fabriquer", "sport-plein-air", "technique-outils"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "La tradition millénaire des charpentiers veut que l'on fixe un arbre ou un bouquet de fleurs sur le sommet de la charpente une fois le dernier chevron posé (le 'bouquet du charpentier').",
            "pourquoi": "Ce rite célèbre l'arbre qui a donné son bois pour abriter les hommes et rend hommage au travail des compagnons.",
            "a_retenir": "L'artisan d'exception qui dresse l'ossature protectrice de chaque foyer."
        }
    },

    # -----------------------------------------------------------------------
    # 16. COUVREUR-ZINGUEUR
    # -----------------------------------------------------------------------
    {
        "id": "couvreur",
        "slug": "couvreur",
        "title": "Couvreur-Zingueur",
        "aliases": ["Couvreur toiturier", "Zingueur étancheur", "Compagnon couvreur ardoisier"],
        "icon": "🏠",
        "image": "https://images.unsplash.com/photo-1542332213-31f87348057f?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Charpente, Couverture & Enveloppe",
        "domainId": "charpente-enveloppe-couverture",
        "subdomain": "Couverture, Zinguerie & Étanchéité",
        "sectors": ["BTP", "Couverture", "Second Œuvre"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "CAP Couvreur à Bac Pro / BP Couvreur",
        "salary": "🇫🇷 France : 2 000 - 3 400 € net/mois (~28 000 - 48 000 € brut/an avec primes de panier et intempéries, Source : L'Étudiant) • 🇸🇳 Sénégal : 200 000 - 700 000 FCFA / mois (Poseurs de bacs acier, étanchéité de toitures terrasses)",
        "simpleDefinition": "Le couvreur pose les tuiles, ardoises, feuilles de zinc ou bacs acier sur le toit et façonne les gouttières et tuyaux d'évacuation d'eau de pluie pour garantir que l'édifice reste parfaitement étanche et sec sous les orages.",
        "shortDescription": "Spécialiste de la mise hors d'eau cité par L'Étudiant, il travaille en équilibre sur les toits avec une maîtrise parfaite des métaux et de l'étanchéité.",
        "longDescription": "Comme décrit dans la fiche métier de L'Étudiant, le couvreur intervient directement après le charpentier pour mettre le bâtiment 'hors d'eau'. Posant des lattis de bois, il dispose méticuleusement les éléments de couverture (ardoises naturelles clouées, tuiles en terre cuite emboîtées, zinc à tasseaux ou à joint debout). Expert en zinguerie, il plie, découpe et soude les éléments en zinc ou cuivre (gouttières, chêneaux, abergements de cheminées, lucarnes) pour garantir qu'aucune goutte de pluie ne puisse s'infiltrer.",
        "mainObjective": "Assurer l'étanchéité absolue à l'eau et à l'air de la toiture tout en soignant l'esthétique et l'isolation thermique du bâtiment.",
        "companyRole": "Garant de l'étanchéité et protecteur suprême de l'édifice contre les agressions climatiques.",
        "workEnvironment": [
            "🏠 Toits de maisons, d'immeubles, de clochers d'églises ou de hangars industriels",
            "🌤️ Travail en hauteur sur toitures pentues exposé au vent, au soleil et au froid",
            "🦺 Port obligatoire du harnais de sécurité, des chaussures antidérapantes et des lignes de vie"
        ],
        "missions": [
            "Poser les écrans de sous-toiture et les liteaux en respectant le pureau des tuiles ou ardoises",
            "Tailler et fixer les matériaux de couverture (tuiles mécaniques, ardoises taillées à l'enclume, zinc)",
            "Façonner, plier et braser les éléments de zinguerie d'évacuation d'eau pluviale",
            "Réaliser l'isolation thermique par l'extérieur de la toiture (technique du sarking)",
            "Diagnostiquer et réparer les fuites de toiture après des tempêtes ou chutes de grêle"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Sécurisation de la toiture", "desc": "Amarrage des longes aux points d'ancrage de la ligne de vie et vérification du monte-matériaux de tuiles."},
            {"time": "09:30", "title": "Façonnage d'un abergement de cheminée", "desc": "Traçage, pliage et soudure à l'étain d'une bavette de zinc sur mesure pour contourner un conduit de cheminée."},
            {"time": "13:30", "title": "Pose de rangées d'ardoises", "desc": "Clouage au marteau de couvreur d'ardoises naturelles d'Angers avec respect strict du recouvrement au pureau."},
            {"time": "16:00", "title": "Pose d'une gouttière demi-ronde", "desc": "Emboîtement des longueurs de gouttières zinc, fixation sur les crochets et soudure des fonds de gouttière."}
        ],
        "skills": {
            "technical": [
                "Techniques de pose de tous types de couvertures (tuiles, ardoises, zinc, cuivre, bac acier)",
                "Façonnage et soudure à l'étain du zinc et des métaux non ferreux",
                "Règles de ventilation sous toiture et de mise en œuvre des pare-vapeurs",
                "Règles strictes de sécurité du travail en hauteur sur toiture pentue"
            ],
            "human": [
                "Absence totale de vertige, sens de l'équilibre et pied sûr",
                "Résistance physique remarquable et endurance aux conditions climatiques",
                "Sens du détail pour un alignement esthétique parfait des rangs de tuiles"
            ],
            "tools": [
                "Marteaux de couvreur et enclumes d'ardoissier",
                "Fers à souder de couvreur au gaz propane",
                "Plieuses à zinc d'atelier et cisailles à tôle",
                "Monte-matériaux de toiture et harnais de sécurité"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "CAP (2 ans)", "title": "CAP Couvreur en apprentissage", "desc": "Le parcours de référence cité par L'Étudiant pour apprendre la taille d'ardoises et la zinguerie."},
                {"step": "Mention Complémentaire (1 an)", "title": "MC Zinguerie", "desc": "Année de spécialisation très recherchée axée sur le pliage et la soudure des métaux nobles de toiture."},
                {"step": "Brevet Professionnel (BP)", "title": "BP Couvreur", "desc": "Diplôme d'excellence permettant de diriger une équipe ou de s'installer à son compte."}
            ],
            "schools": [
                {"name": "CFA du Bâtiment spécialisés en couverture — France", "country": "France", "scope": "France"},
                {"name": "Compagnons du Devoir (Maison des Couvreurs) — France", "country": "France", "scope": "France"},
                {"name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Centres de formation aux métiers du bâtiment du Sénégal — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["CQP Couvreur-Zingueur", "Habilitation travail en hauteur et port du harnais", "Qualification Qualibat RGE Isolation toiture"],
            "schoolSubjects": ["Dessin de toiture et géométrie des versants", "Technologie des matériaux de couverture", "Brasure et soudure des métaux", "Sécurité antichute"]
        },
        "career": {
            "sectors": ["Entreprises artisanales de couverture et zinguerie", "PME de rénovation de toitures et de charpente", "Entreprises spécialisées dans la restauration du patrimoine ancien et monuments"],
            "employerTypes": ["Artisans couvreurs", "Entreprises d'étanchéité du bâtiment", "Sociétés de pose de panneaux solaires intégrés au bâti"],
            "evolution": "Apprenti couvreur ➔ Couvreur-zingueur qualifié ➔ Chef d'équipe toiture ➔ Artisan chef d'entreprise de couverture",
            "pros": "Plein emploi garanti (métier sous très forte tension), vue panoramique quotidienne sur les toits, haute technicité du travail du zinc.",
            "cons": "Exposition directe aux températures extrêmes (soleil brûlant l'été sur le zinc, gel l'hiver), travail physique sur les genoux."
        },
        "gettingStarted": {
            "beginnerProject": "Observer les toitures de sa ville et identifier les matériaux utilisés (ardoises, tuiles canal, zinc, bac acier).",
            "intermediateProject": "S'entraîner à souder deux morceaux de zinc à l'étain avec un fer chaud et de la pâte décapante.",
            "advancedProject": "Réaliser une maquette de toiture à deux pans avec pose de mini-tuiles à emboîtement régulières.",
            "portfolioIdeas": ["Photos d'abergements de cheminées soudés impeccablement", "Attestation de stage chez un artisan couvreur"]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "Des drones équipés de caméras thermiques inspectent les toitures pour détecter les fuites invisibles, mais la pose de chaque tuile et le façonnage du zinc restent 100% manuels.",
            "automatedTasks": ["Inspection photographique par drone des toitures dangereuses", "Calcul automatique des surfaces de versants par satellite"],
            "emergingSkills": ["Intégration de tuiles solaires photovoltaïques étanches lors de la rénovation de toiture"],
            "humanEdge": "La dextérité manuelle pour épouser les formes complexes du toit et la bravoure physique sur les pentes."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le métier se décline sous deux formes capitales : la pose experte de bacs acier nervurés et isolés sur les toits à deux pans pour résister aux violents coups de vent de l'hivernage, et l'étanchéité des toitures terrasses bétonnées (chapes bitumineuses, étanchéité liquide) pour empêcher les infiltrations lors de la saison des pluies.",
            "localSectors": ["Entreprises d'étanchéité et de couverture de Dakar", "Industries de profilage de tôles bac acier (Sénégal Tôles, Métal Afrique)", "Chantiers de réfection toitures"],
            "remoteWork": "Non compatible (travail physique direct sur le toit).",
            "entrepreneurship": "Création d'une entreprise spécialisée dans l'étanchéité garantie des toitures-terrasses et la pose de toitures métalliques isolées."
        },
        "relatedJobSlugs": ["charpentier", "installateur-mainteneur-photovoltaique", "macon"],
        "connectedFamilies": ["artisanat-metiers-dart", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier Couvreur — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/couvreur.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "FFB — Métiers de la couverture et du zinc", "url": "https://www.ffbatiment.fr/", "source": "FFB"}
        ],
        "sources": ["L'Étudiant", "FFB", "CAPEB"],
        "interests": ["sport-plein-air", "construire-fabriquer", "technique-outils"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Les toits de zinc gris de Paris, façonnés par des générations de couvreurs-zingueurs, couvrent plus de 70% des immeubles de la capitale et sont candidats au patrimoine mondial de l'UNESCO !",
            "pourquoi": "Le zinc est un matériau léger, malléable et d'une durabilité exceptionnelle qui dépasse souvent 100 ans sans rouiller.",
            "a_retenir": "L'artisan funambule qui protège le toit du monde."
        }
    },

    # -----------------------------------------------------------------------
    # 17. OUVRIER ROUTIER / CONSTRUCTEUR DE ROUTES
    # -----------------------------------------------------------------------
    {
        "id": "ouvrier-routier",
        "slug": "ouvrier-routier",
        "title": "Ouvrier Routier / Constructeur de Routes",
        "aliases": ["Constructeur de routes", "Ouvrier voiries et réseaux divers (VRD)", "Applicateur d'enrobés routiers"],
        "icon": "🛣️",
        "image": "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Travaux Publics & Infrastructures",
        "domainId": "travaux-publics-infrastructures",
        "subdomain": "Construction routière, Enrobés & Voiries",
        "sectors": ["BTP", "Travaux Publics", "Infrastructures"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "CAP Constructeur de routes à Bac Pro Travaux Publics",
        "salary": "🇫🇷 France : 1 850 - 2 800 € net/mois (~26 000 - 40 000 € brut/an + primes de grand déplacement, Source : L'Étudiant) • 🇸🇳 Sénégal : 180 000 - 550 000 FCFA / mois (Grands chantiers autoroutiers et voiries urbaines)",
        "simpleDefinition": "L'ouvrier routier construit et rénove les routes, autoroutes, pistes cyclables, ronds-points et trottoirs en décapant le sol, en posant les bordures et les canalisations, et en appliquant le bitume chaud à l'aide de finisseurs et de compacteurs.",
        "shortDescription": "Spécialiste des infrastructures mis en lumière par le témoignage de Cédric apprenti dans L'Étudiant, il relie les villes et les hommes en traçant des voies sécurisées.",
        "longDescription": "Comme décrit dans le reportage d'apprentissage de L'Étudiant, l'ouvrier routier travaille au sein d'une équipe soudée et mobile. Il prépare le fond de forme du sol en étalant les graves de calcaire, pose les bordures de trottoirs et les caniveaux d'évacuation d'eau pluviale, et participe à l'application spectaculaire des enrobés bitumineux chauds (160°C) déversés par le finisseur. Il manie la raclette à enrobé, la dame mécanique et guide les rouleaux compacteurs pour obtenir une chaussée parfaitement plane et silencieuse.",
        "mainObjective": "Bâtir et entretenir des chaussées durables, drainantes et sûres capables de supporter le trafic intense des véhicules lourds.",
        "companyRole": "Exécutant qualifié de l'infrastructure routière garantissant la qualité de roulement des voies.",
        "workEnvironment": [
            "🛣️ Chantiers extérieurs d'autoroutes, routes nationales, pistes cyclables et avenues urbaines",
            "🦺 Travail sous circulation routière avec signalisation temporaire stricte",
            "👥 Travail d'équipe solidaire et déplacements régionaux fréquents"
        ],
        "missions": [
            "Poser la signalisation temporaire de chantier et baliser les voies de déviation pour protéger les automobilistes",
            "Poser les bordures en béton, pavés de trottoir et regards d'assainissement avec prise de niveau",
            "Épandre et régler les couches de fondation en grave non traitée (GNT) à l'aide du laser",
            "Participer à l'application des enrobés chauds derrière le finisseur et réaliser les raccords manuels au râteau",
            "Compacter les surfaces à l'aide de plaques vibrantes ou de petits cylindres pour assurer la densité du bitume"
        ],
        "typicalDay": [
            {"time": "07:30", "title": "Balisage et consignes de sécurité", "desc": "Installation des cônes de signalisation et des panneaux de réduction de voie sur l'axe routier avant l'arrivée des engins."},
            {"time": "09:00", "title": "Pose de bordures de trottoir", "desc": "Coulage du lit de béton maigre au cordeau et alignement au maillet de 80 mètres linéaires de bordures T2."},
            {"time": "13:30", "title": "Arrivée des camions d'enrobé chaud", "desc": "Déversement de l'enrobé à 160°C dans la trémie du finisseur et réglage manuel des rives au râteau."},
            {"time": "16:00", "title": "Compactage et contrôle de planéité", "desc": "Vérification au piquet laser de la pente transversale de 2% pour assurer l'évacuation rapide des eaux de pluie."}
        ],
        "skills": {
            "technical": [
                "Techniques d'application des enrobés bitumineux à chaud et émulsions de bitume",
                "Pose de bordures, pavés, caniveaux et réseaux d'assainissement pluvial",
                "Maniement du niveau de chantier laser et lecture de profils en travers",
                "Réglementation stricte de signalisation temporaire sous circulation routière"
            ],
            "human": [
                "Vigilance permanente face au danger de la circulation des voitures",
                "Esprit d'équipe fraternel et endurance physique face à la chaleur du bitume",
                "Sens du travail bien fait pour la sécurité des millions d'usagers de la route"
            ],
            "tools": [
                "Râteaux à enrobé, raclettes thermiques et pilonneuses mécaniques",
                "Lasers de voirie et niveaux d'optique de chantier",
                "Scies à sol à disque diamant pour découpe d'enrobé existant",
                "Cylindres compacteurs guidés et plaques vibrantes"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "CAP (2 ans)", "title": "CAP Constructeur de Routes et Aménagements Urbains", "desc": "La formation d'apprentissage mise en valeur par le reportage de L'Étudiant."},
                {"step": "Bac Pro (3 ans)", "title": "Bac Pro Travaux Publics", "desc": "Formation complète menant aux fonctions de chef d'équipe de voirie."},
                {"step": "BP Travaux Publics", "title": "Brevet Professionnel VRD", "desc": "Perfectionnement technique en topographie de voirie et organisation de chantier."}
            ],
            "schools": [
                {"name": "CFA des Travaux Publics (Égletons, Paris, Lyon) — France", "country": "France", "scope": "France"},
                {"name": "Centres de formation de la Fédération Nationale des TP (FNTP) — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat AIPR Opérateur (Travaux à proximité des réseaux)", "CACES compacteur et mini-engins R482", "Habilitation Sauveteur Secouriste du Travail (SST)"],
            "schoolSubjects": ["Technologie des liants hydrocarbonés et granulats", "Topographie et nivellement", "Sécurité routière de chantier", "Lecture de plans de voirie"]
        },
        "career": {
            "sectors": ["Grandes entreprises de travaux routiers (Colas, Eurovia, Eiffage Route, NGE)", "PME régionales de travaux publics et voiries et réseaux divers (VRD)", "Services de voirie des métropoles et directions des routes"],
            "employerTypes": ["Entreprises de travaux routiers", "Filiales routières de majors du BTP", "Régies municipales de voirie"],
            "evolution": "Ouvrier routier débutant ➔ Applicateur régleur d'enrobés ➔ Chef d'équipe voirie ➔ Chef de chantier routier",
            "pros": "Sentiment fort d'utilité publique (relier les territoires), esprit d'équipe très soudé, rémunération intéressante avec primes de chantiers.",
            "cons": "Chaleur intense lors de l'application du bitume en été, bruit des engins, travail parfois de nuit pour ne pas bloquer le trafic."
        },
        "gettingStarted": {
            "beginnerProject": "Observer le passage d'un finisseur et d'un compacteur lors de la réfection de la route de son quartier.",
            "intermediateProject": "Poser trois bordures de jardin parfaitement alignées au niveau laser sur lit de mortier.",
            "advancedProject": "Calculer le tonnage d'enrobé à commander pour recouvrir 500 mètres de route sur 6 mètres de large avec une épaisseur de 6 cm.",
            "portfolioIdeas": ["Photos de réalisations de voiries et ronds-points", "Rapport de stage dans une entreprise de TP routiers"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des systèmes de guidage laser et GPS 3D asservissent automatiquement la hauteur de la table du finisseur au millimètre près pour une planéité parfaite.",
            "automatedTasks": ["Guidage automatique de l'épaisseur d'enrobé par satellite GNSS", "Cartographie thermique du refroidissement de l'enrobé par caméra infrarouge"],
            "emergingSkills": ["Utilisation de compacteurs connectés mesurant le taux de compactage en temps réel"],
            "humanEdge": "Le savoir-faire manuel pour réaliser les raccords au râteau autour des bouches d'égout et la vigilance face au trafic."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les ouvriers routiers sont les bâtisseurs de l'émergence économique : ils ont déroulé les centaines de kilomètres d'enrobés de l'autoroute de l'Avenir Dakar-Diamniadio-AIBD, de l'autoroute Ila Touba, du corridor Dakar-Bamako et des grands boulevards du BRT dakarois sous la supervision de l'AGEROUTE.",
            "localSectors": ["AGEROUTE (Agence des Travaux et de Gestion des Routes)", "Entreprises de TP routiers (Eiffage Sénégal, CSE, Sogea-Satom, Arezki)", "Projets de pistes rurales d'enclavement (PUDC)"],
            "remoteWork": "Non compatible (100% sur le bitume en extérieur).",
            "entrepreneurship": "Création d'une PME de voiries urbaines, pavage autobloquant et assainissement pour les communes sénégalaises."
        },
        "relatedJobSlugs": ["conducteur-engins-chantier", "chef-de-chantier", "ingenieur-dans-le-btp"],
        "connectedFamilies": ["industrie-mecanique", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Témoignage de Cédric, apprenti ouvrier routier — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/ouvrier-routier-le-temoignage-de-cedric-apprenti.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "Routes de France — Organisation professionnelle des travaux routiers", "url": "https://www.routesdefrance.com/", "source": "Routes de France"}
        ],
        "sources": ["L'Étudiant", "Routes de France", "FNTP"],
        "interests": ["sport-plein-air", "construire-fabriquer", "technique-outils"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "L'enrobé bitumineux est l'un des matériaux les plus recyclés au monde : en France et sur les grands chantiers modernes, jusqu'à 70% du vieux bitume raboté est réinjecté dans les centrales pour fabriquer la nouvelle route !",
            "pourquoi": "Cette boucle vertueuse économise des millions de tonnes de granulats de carrières et de bitume pétrolier.",
            "a_retenir": "Le bâtisseur de routes qui rapproche les hommes et ouvre les voies du futur."
        }
    },

    # -----------------------------------------------------------------------
    # 18. CONDUCTEUR D'ENGINS DE CHANTIER
    # -----------------------------------------------------------------------
    {
        "id": "conducteur-engins-chantier",
        "slug": "conducteur-engins-chantier",
        "title": "Conducteur d'Engins de Chantier",
        "aliases": ["Pilote d'engins TP", "Conducteur de pelle mécanique", "Terrassier mécanicien"],
        "icon": "🚜",
        "image": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Terrassement & Engins de Chantier",
        "domainId": "engins-terrassement-chantier",
        "subdomain": "Conduite d'engins, Terrassement & Pelles",
        "sectors": ["BTP", "Travaux Publics", "Engins"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "CAP Conducteur d'engins de TP à Bac Pro Travaux Publics",
        "salary": "🇫🇷 France : 2 000 - 3 200 € net/mois (~28 000 - 45 000 € brut/an avec primes d'heures, Source : L'Étudiant) • 🇸🇳 Sénégal : 250 000 - 850 000 FCFA / mois (Mines, grands terrassements autoroutiers, carrières)",
        "simpleDefinition": "Le conducteur d'engins pilote des machines géantes et surpuissantes (pelleteuses hydrauliques de 30 tonnes, bulldozers, tombereaux articulés, niveleuses) pour déblayer des milliers de tonnes de terre, creuser les tranchées et niveler le sol avec une précision chirurgicale.",
        "shortDescription": "Maître de la puissance mécanique cité par L'Étudiant, il manie des manettes électroniques depuis sa cabine climatisée pour déplacer des montagnes.",
        "longDescription": "Comme décrit dans la fiche métier de L'Étudiant, le conducteur d'engins est le roi du terrassement. Installé dans sa cabine panoramique haute technologie dotée de joysticks hydrauliques et d'écrans GPS 3D, il déblaie les collines, remblaie les vallées, creuse les fondations d'immeubles ou les tranchées de canalisations sans jamais accrocher les câbles souterrains. Responsable de son engin qui coûte souvent plusieurs centaines de milliers d'euros, il effectue l'entretien quotidien (graissage des axes, vérification des niveaux d'huile hydraulique et contrôle des chenilles).",
        "mainObjective": "Déplacer et niveler des volumes massifs de terre et de roches rapidement et avec une précision millimétrique en toute sécurité.",
        "companyRole": "Opérateur clé de la force mécanique et du terrassement initial du chantier.",
        "workEnvironment": [
            "🚜 Cabine climatisée et suspendue d'engins de travaux publics de grande taille",
            "🏞️ Chantiers de terrassement, carrières, mines et plateformes autoroutières",
            "🎧 Environnement bruyant et poussiéreux à l'extérieur mais isolé dans la cabine"
        ],
        "missions": [
            "Piloter des engins de terrassement diversifiés (pelles à chenilles, chargeuses, bouteurs, dumpers)",
            "Creuser les fouilles, tranchées et bassins de rétention en suivant les cotes des géomètres",
            "Niveler et régler les plates-formes de terrassement au laser ou par guidage GPS 3D",
            "Charger les camions bennes en optimisant la rotation sans perte de temps",
            "Assurer l'entretien préventif courant de la machine (graissage, filtres, tension des chenilles)"
        ],
        "typicalDay": [
            {"time": "07:30", "title": "Contrôle journalier de la pelle", "desc": "Tour de la pelleteuse de 25 tonnes, vérification du niveau d'huile hydraulique et graissage des axes de flèche et godet."},
            {"time": "08:15", "title": "Terrassement d'un sous-sol d'immeuble", "desc": "Extraction de 800 m³ de terre avec chargement continu de semi-remorques bennes en moins de 3 minutes par camion."},
            {"time": "13:30", "title": "Ouverture d'une tranchée étroite", "desc": "Changement de godet pour monter un godet de curage orientable et creusement d'une tranchée au ras d'un câble haute tension repéré au détecteur."},
            {"time": "16:00", "title": "Nivellement de finition au GPS", "desc": "Passage au bulldozer guidé par satellite 3D pour régler la plateforme d'un futur entrepôt avec une tolérance de +/- 1 cm."}
        ],
        "skills": {
            "technical": [
                "Pilotage expert des différents types d'engins de chantier (catégories CACES R482)",
                "Lecture de piquets topographiques et compréhension des pentes et talus",
                "Mécanique d'engins, hydraulique de puissance et maintenance de premier niveau",
                "Maîtrise des systèmes de guidage d'engins 3D par GPS et station totale (Trimble, Leica)"
            ],
            "human": [
                "Excellente coordination motrice œil-main et perception spatiale du gabarit",
                "Sens aigu des réflexes de sécurité et vigilance pour les ouvriers à pied autour",
                "Calme, patience et concentration soutenue pendant de longues heures"
            ],
            "tools": [
                "Pelles hydrauliques sur chenilles et sur pneus (Caterpillar, Komatsu, Liebherr)",
                "Bulldozers, chargeuses sur pneus et tombereaux articulés (dumpers)",
                "Systèmes de guidage d'engins 3D avec écrans tactiles de cabine",
                "Pompes à graisse haute pression et outillage mécanique"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "CAP (2 ans)", "title": "CAP Conducteur d'Engins : Travaux Publics et Carrières", "desc": "Formation de référence mise en avant par L'Étudiant avec entraînement intensif sur simulateur et engins réels."},
                {"step": "Bac Pro (3 ans)", "title": "Bac Pro Travaux Publics ou Maintenance des Matériels", "desc": "Double compétence en conduite d'engins et mécanique lourde."},
                {"step": "Certificats CACES R482", "title": "CACES R482 (Catégories B1, C1, D, E, F)", "desc": "Les permis indispensables renouvelés tous les 5 ans pour piloter légalement chaque catégorie d'engin."}
            ],
            "schools": [
                {"name": "CFA des Travaux Publics et lycées professionnels TP — France", "country": "France", "scope": "France"},
                {"name": "Centres de formation AFPA et EATP Égletons — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Centres de perfectionnement des travaux publics du Sénégal — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["CACES R482 Engins de chantier (Catégories B1 pelle, C1 chargeuse)", "Certification AIPR Opérateur", "Attestation éco-conduite d'engins TP"],
            "schoolSubjects": ["Technologie des engins et hydraulique", "Topographie et terrassement", "Règles de sécurité et circulation sur chantier", "Mécanique d'engins lourds"]
        },
        "career": {
            "sectors": ["Grandes entreprises de terrassement et travaux publics", "Exploitants de carrières de granulats et cimenteries", "Exploitations minières à ciel ouvert", "Entreprises de démolition et de dépollution"],
            "employerTypes": ["Terrassiers spécialisés", "Entreprises générales de BTP", "Groupes carriers et miniers"],
            "evolution": "Conducteur de tombereau débutant ➔ Conducteur de pelle qualifié ➔ Conducteur d'engins polyvalent confirmé ➔ Chef d'équipe terrassement",
            "pros": "Plaisir de manier des machines colossales avec des joysticks d'une grande douceur, forte autonomie en cabine, métier très valorisé et bien payé.",
            "cons": "Vibrations continues du siège, travail parfois monotone lors de longues phases de déblais, déplacements sur de grands chantiers éloignés."
        },
        "gettingStarted": {
            "beginnerProject": "Tester un simulateur de pelleteuse sur ordinateur ou jeu vidéo spécialisé pour comprendre le maniement inversé des deux joysticks.",
            "intermediateProject": "Observer le cycle de travail d'une pelleteuse chargeant un camion (temps de rotation, positionnement de la benne).",
            "advancedProject": "Calculer le foisonnement d'une terre argileuse compacte passant de l'état naturel à l'état déblayé dans la benne (+25%).",
            "portfolioIdeas": ["Certificat de formation sur simulateur d'engins", "Attestation CACES obtenue avec succès"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "Des engins semi-autonomes creusent déjà automatiquement selon le modèle 3D sans que le conducteur n'ait besoin de toucher aux manettes de profondeur.",
            "automatedTasks": ["Arrêt automatique du godet à la profondeur exacte demandée", "Détection automatique de piétons par caméras à intelligence artificielle"],
            "emergingSkills": ["Pilotage et supervision d'engins de terrassement téléopérés à distance"],
            "humanEdge": "La sensibilité au terrain (ressentir si le godet bute sur un rocher dur ou un tuyau plastique) et l'adaptabilité aux imprévus du sol."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les conducteurs d'engins de chantier sont très recherchés pour les chantiers d'envergure du Plan Sénégal Émergent : terrassement de la ville de Diamniadio, exploitation des mines de phosphate de Taïba, carrières de calcaire de Pout et de Rufisque, et dragage du port de Dakar.",
            "localSectors": ["Grands chantiers d'infrastructures (Eiffage, CSE, Sogea-Satom)", "Industries minières et carrières (Sococim, Dangote, GCO Grande Côte Operations)", "Dragage portuaire"],
            "remoteWork": "Non compatible (conduite physique de la machine sur le site).",
            "entrepreneurship": "Création d'une entreprise de location d'engins de terrassement avec chauffeur pour les chantiers de particuliers et de PME."
        },
        "relatedJobSlugs": ["grutier", "ouvrier-routier", "chef-de-chantier"],
        "connectedFamilies": ["industrie-mecanique", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier Conducteur d'engins — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/conducteur-d-engins-de-chantier.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "FNTP — Fédération Nationale des Travaux Publics", "url": "https://www.fntp.fr/", "source": "FNTP"}
        ],
        "sources": ["L'Étudiant", "FNTP", "Caterpillar University"],
        "interests": ["technique-outils", "sport-plein-air", "construire-fabriquer"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Les plus grandes pelleteuses de terrassement minier au monde pèsent près de 1 000 tonnes et leur godet peut soulever plus de 100 tonnes de roches en un seul coup !",
            "pourquoi": "Grâce à des circuits hydrauliques colossaux générant des pressions de plus de 350 bars.",
            "a_retenir": "Le pilote de titan qui sculpte la terre à coups de godet."
        }
    },

    # -----------------------------------------------------------------------
    # 19. GRUTIER
    # -----------------------------------------------------------------------
    {
        "id": "grutier",
        "slug": "grutier",
        "title": "Grutier à Tour & Grutier Mobile",
        "aliases": ["Pilote de grue à tour", "Opérateur de grue mobile télescopique", "Conducteur d'appareils de levage BTP"],
        "icon": "🏗️",
        "image": "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Terrassement & Engins de Chantier",
        "domainId": "engins-terrassement-chantier",
        "subdomain": "Grutage à tour, Grue mobile & Levage lourd",
        "sectors": ["BTP", "Levage", "Gros Œuvre"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "Titre Professionnel Grutier / CAP BTP + CACES R487",
        "salary": "🇫🇷 France : 2 200 - 3 600 € net/mois (~32 000 - 52 000 € brut/an avec primes de hauteur, Source : L'Étudiant) • 🇸🇳 Sénégal : 300 000 - 950 000 FCFA / mois (Grands chantiers de tours à Dakar, ponts et ports)",
        "simpleDefinition": "Le grutier pilote depuis sa cabine perchée à plusieurs dizaines de mètres de hauteur une grue à tour géante pour déplacer et déposer avec une précision millimétrique des charges de plusieurs tonnes (bennes de béton, banches métalliques, palettes de briques) sur le chantier.",
        "shortDescription": "Sentinelle du ciel et chef d'orchestre du levage mis en lumière par L'Étudiant, il domine le chantier et approvisionne l'ensemble des équipes au sol.",
        "longDescription": "Comme décrit dans la fiche métier de L'Étudiant, le grutier a une responsabilité colossale. Perché dans sa cabine vitrée à 40 ou 80 mètres d'altitude après avoir gravi l'échelle du mât, il a une vue imprenable sur tout le chantier. Maniant deux manettes ultrasensibles pour combiner rotation de la flèche, déplacement du chariot et descente du câble, il dépose des fardeaux immenses à quelques centimètres près des coffreurs, souvent en aveugle grâce aux indications précises transmises par radio par le chef de manœuvre au sol. Il surveille en continu la vitesse du vent à l'anémomètre et met sa grue en girouette dès que les rafales dépassent 72 km/h.",
        "mainObjective": "Assurer l'ensemble des opérations de levage et d'approvisionnement du chantier avec une précision chirurgicale et une sécurité absolue.",
        "companyRole": "Cœur névralgique de la logistique verticale et du rythme de production du chantier.",
        "workEnvironment": [
            "🏗️ Cabine de grue à tour panoramique isolée à haute altitude (30 à 80 m)",
            "🌤️ Vue imprenable sur la ville, exposé au vent et aux variations de température",
            "📻 Communication radio permanente avec les équipes au sol (élingueurs, chefs de chantier)"
        ],
        "missions": [
            "Effectuer les vérifications de sécurité quotidiennes (freins, câbles de levage, anémomètre, fin de course)",
            "Déplacer les charges lourdes (banches, bennes à béton, armatures, prédalles) à travers tout le chantier",
            "Coordonner les manœuvres en aveugle via le guidage radio de l'élingueur",
            "Surveiller les conditions météorologiques et interrompre immédiatement le levage en cas de vent fort",
            "Mettre la grue en girouette le soir pour qu'elle s'oriente librement dans le lit du vent sans basculer"
        ],
        "typicalDay": [
            {"time": "07:15", "title": "Ascension du mât et vérifications", "desc": "Montée des échelles avec harnais de sécurité jusqu'à la cabine à 45 mètres, mise en route des commandes et contrôle de l'anémomètre (vent à 18 km/h)."},
            {"time": "08:00", "title": "Rotation de banches de coffrage", "desc": "Déplacement d'un train de banches métalliques de 4 tonnes depuis la zone de stockage jusqu'au 3e étage en guidage radio."},
            {"time": "11:30", "title": "Coulage continu du béton", "desc": "Navette ininterrompue de la benne de 1 500 litres entre le camion malaxeur et les bancheurs au sommet du bâtiment."},
            {"time": "16:30", "title": "Mise en sécurité de la grue", "desc": "Remontée du crochet au plus haut, dégagement de la flèche et déblocage du frein de girouette pour la nuit."}
        ],
        "skills": {
            "technical": [
                "Pilotage précis des mouvements combinés (levage, orientation, chariotage)",
                "Courbes de charges de la grue (capacité de levage en fonction de la portée)",
                "Techniques d'élingage, centre de gravité des charges et résistance des câbles",
                "Réglementation stricte de sécurité de levage et normes anémométriques"
            ],
            "human": [
                "Calme olympien, sang-froid et résistance parfaite au vertige",
                "Sens aigu de la précision millimétrique et acuité visuelle excellente",
                "Capacité de concentration intense et prolongée en isolement dans la cabine"
            ],
            "tools": [
                "Grues à tour à montage par éléments (GME - Potain, Liebherr)",
                "Grues à montage rapide (GMR) télécommandées au sol",
                "Anémomètres de cabine et indicateurs de moment de charge",
                "Talkies-walkies professionnels avec canaux sécurisés"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Formation CACES R487", "title": "CACES R487 Grue à Tour (Catégories 1 et 3)", "desc": "Le certificat légal obligatoire attestant de la capacité à conduire les grues à cabine ou télécommandées."},
                {"step": "Titre Professionnel (6 mois)", "title": "Titre Professionnel Conducteur de Grue à Tour (AFPA)", "desc": "Formation complète très reconnue combinant théorie du levage, simulateurs et pratique réelle en hauteur."},
                {"step": "CAP / Bac Pro", "title": "CAP ou Bac Pro BTP avec mention levage", "desc": "Parcours complet ouvrant l'accès aux postes de grutier pour les majors du bâtiment."}
            ],
            "schools": [
                {"name": "Centres AFPA spécialisés en levage et grues à tour — France", "country": "France", "scope": "France"},
                {"name": "CFA du BTP et centres de formation agréés CACES — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Écoles de formation aux métiers portuaires et de levage de Dakar — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["CACES R487 Grue à Tour (conduite en cabine)", "Visite médicale renforcée d'aptitude au travail en hauteur", "Habilitation Sauveteur Secouriste du Travail"],
            "schoolSubjects": ["Mécanique de levage et treuils", "Physique des forces et équilibre", "Réglementation des appareils de levage", "Météorologie appliquée"]
        },
        "career": {
            "sectors": ["Grandes entreprises de construction et de gros œuvre", "Sociétés de location de matériel de levage avec opérateur", "Chantiers navals et manutention portuaire lourde"],
            "employerTypes": ["Entreprises générales de bâtiment", "Loueurs de grues professionnels", "Majors du BTP"],
            "evolution": "Grutier sur grue de moyenne hauteur ➔ Grutier grands chantiers de tours (80 m+) ➔ Chef de manœuvre levage ➔ Moniteur d'école de grue ➔ Chef de parc matériel",
            "pros": "Vue imprenable chaque jour, rôle de roi du chantier très respecté par toutes les équipes, rémunération très valorisée avec primes de hauteur.",
            "cons": "Isolement total dans la cabine pendant la journée, fatigue oculaire et nerveuse liée à la concentration permanente."
        },
        "gettingStarted": {
            "beginnerProject": "Observer les mouvements d'une grue de chantier en ville et analyser comment le grutier compense l'effet de balancier de la charge.",
            "intermediateProject": "Tester un simulateur de grue à tour pour comprendre l'inversion des commandes lors de la rotation.",
            "advancedProject": "Calculer la charge maximale admissible à 50 mètres de portée d'après la courbe de charge d'une grue Potain.",
            "portfolioIdeas": ["Certificat de formation CACES R487", "Rapport de stage d'élingueur sur chantier de gros œuvre"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des caméras gyrostabilisées sous le chariot et des systèmes anti-collision automatiques assistent le grutier pour empêcher que deux flèches de grues voisines ne se percutent.",
            "automatedTasks": ["Système anti-collision automatique entre grues proches", "Amortissement électronique automatique du balancement de la charge"],
            "emergingSkills": ["Utilisation de cabines de grue virtuelles téléopérées depuis le sol par caméras 4K"],
            "humanEdge": "La délicatesse du toucher des manettes pour poser une pièce de 5 tonnes au millimètre près sans à-coup."
        },
        "africaContext": {
            "senegalInsight": "À Dakar, la multiplication des tours de grand standing aux Almadies, au Plateau et à Diamniadio a fait exploser la présence des grues à tour dans le ciel de la capitale, créant une forte demande de grutiers d'élite capables d'opérer en sécurité face aux alizés maritimes vigoureux.",
            "localSectors": ["Grands chantiers de tours dakarois (Eiffage Sénégal, CSE, Batiplus)", "Port Autonome de Dakar (grues mobiles et portiques)", "Sociétés de location de grues"],
            "remoteWork": "Non compatible (présence physique obligatoire en cabine).",
            "entrepreneurship": "Création d'une société de services d'élingage professionnel et de mise à disposition de grutiers certifiés pour les chantiers."
        },
        "relatedJobSlugs": ["conducteur-engins-chantier", "coffreur-bancheur", "chef-de-chantier"],
        "connectedFamilies": ["industrie-mecanique", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier Grutier — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/grutier.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "CISMA — Syndicat des équipements pour la construction", "url": "https://www.cisma-france.com/", "source": "CISMA"}
        ],
        "sources": ["L'Étudiant", "CISMA", "Potain Manitowoc"],
        "interests": ["technique-outils", "sport-plein-air", "construire-fabriquer"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Pour éviter qu'une grue de 60 mètres ne bascule sous une tempête, son frein de rotation est totalement désactivé la nuit : la flèche tourne librement comme une girouette pour offrir le moins de prise possible au vent !",
            "pourquoi": "Si la grue était bloquée face au vent, la force exercée sur la flèche ferait plier le mât en acier.",
            "a_retenir": "L'aigle du chantier qui veille sur tous les ouvriers depuis les nuages."
        }
    },

    # -----------------------------------------------------------------------
    # 20. CONDUCTEUR DE TRAVAUX
    # -----------------------------------------------------------------------
    {
        "id": "conducteur-de-travaux",
        "slug": "conducteur-de-travaux",
        "title": "Conducteur de Travaux BTP",
        "aliases": ["Conductrice de travaux", "Responsable de travaux BTP", "Chargé de conduite d'opérations"],
        "icon": "👷",
        "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Gestion & Conduite de Chantier",
        "domainId": "conduite-gestion-chantier",
        "subdomain": "Conduite d'opérations & Coordination",
        "sectors": ["BTP", "Gestion de Chantier", "Management"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "Bac +2 (BTS Bâtiment, BTS TP) à Bac +5 (Ingénieur Travaux / ESTP)",
        "salary": "🇫🇷 France : 2 600 - 4 800 € net/mois (~36 000 - 70 000 € brut/an avec véhicule de fonction et primes, Source : L'Étudiant) • 🇸🇳 Sénégal : 500 000 - 1 800 000 FCFA / mois (Entreprises générales de BTP, chantiers immobiliers)",
        "simpleDefinition": "Le conducteur de travaux est le véritable patron opérationnel d'un ou plusieurs chantiers : il coordonne l'ensemble des moyens humains, techniques et financiers, gère les sous-traitants et veille au respect strict du planning, du budget et de la sécurité du premier jour à la livraison.",
        "shortDescription": "Pivot central de la construction détaillé par L'Étudiant, il assure le lien permanent entre la direction, le client, les architectes et les équipes de chantier.",
        "longDescription": "Comme décrit avec précision dans la fiche métier de L'Étudiant, le conducteur de travaux est le responsable direct de la bonne exécution des ouvrages. Dès la phase de préparation, il étudie le dossier technique, recrute les sous-traitants, négocie les achats de matériaux et établit le planning d'intervention. Durant les travaux, il manage les chefs de chantier, règle les litiges techniques, contrôle les dépenses financières chaque semaine et anime les réunions de chantier avec le maître d'ouvrage jusqu'à la levée de la dernière réserve lors de la réception.",
        "mainObjective": "Livrer l'ouvrage dans les délais impartis, au niveau de qualité contractuel et en dégageant la rentabilité financière prévue en toute sécurité.",
        "companyRole": "Patron opérationnel et financier du chantier, responsable de la réussite globale du projet.",
        "workEnvironment": [
            "🚗 Mobilité permanente entre plusieurs chantiers, bureaux de chantier et siège de l'entreprise",
            "🦺 Présence régulière sur le terrain pour contrôler la qualité d'exécution des travaux",
            "💼 Réunions hebdomadaires de coordination avec architectes, clients et bureaux de contrôle"
        ],
        "missions": [
            "Préparer le chantier (planning directeur, budget prévisionnel, démarches administratives et de voirie)",
            "Sélectionner, négocier et contractualiser les marchés avec les entreprises sous-traitantes",
            "Manager les chefs de chantier et veiller à l'application rigoureuse du plan de sécurité (PPSPS)",
            "Contrôler la conformité des travaux avec les plans d'architecte et les règles de l'art (DTU)",
            "Gérer la facturation mensuelle, suivre la rentabilité financière et organiser la réception de l'ouvrage"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Point avec le chef de chantier", "desc": "Visite du chantier d'une résidence de 60 logements : vérification du coulage de la dalle du 2e étage et validation du planning de pose des fenêtres."},
            {"time": "10:30", "title": "Réunion de chantier avec l'architecte", "desc": "Examen des détails de raccordement de la façade isolée et arbitrage technique sur le passage des gaines électriques."},
            {"time": "14:00", "title": "Gestion financière au bureau", "desc": "Validation des situations de travaux des sous-traitants électriciens et mise à jour du prévisionnel budgétaire à terminaison."},
            {"time": "16:30", "title": "Négociation avec un fournisseur de béton", "desc": "Négociation d'une remise tarifaire pour la commande de 1 200 m³ de béton bas-carbone sur le prochain chantier."}
        ],
        "skills": {
            "technical": [
                "Technologie générale du bâtiment et des travaux publics (gros œuvre et tous corps d'état)",
                "Gestion financière de chantier, analyse des coûts de revient et marges d'exploitation",
                "Droit de la construction, marchés de travaux et gestion des réclamations",
                "Planification de travaux (MS Project) et lecture critique de maquettes BIM"
            ],
            "human": [
                "Autorité naturelle, leadership et excellentes qualités relationnelles",
                "Sens aigu de l'organisation méthodique et gestion des priorités multiples",
                "Résistance au stress et grande capacité de négociation ferme et courtoise"
            ],
            "tools": [
                "Logiciels de planification de travaux (MS Project, Primavera)",
                "Applications mobiles de suivi de chantier et levée de réserves (Finalcad, PlanRadar)",
                "Logiciels de gestion financière BTP (Onaya, Sage BTP)",
                "Visionneuses de plans et de maquettes BIM (BIMx, Navisworks)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "BTS / BUT (Bac +2/+3)", "title": "BTS Bâtiment, BTS TP ou BUT Génie Civil Construction Durable", "desc": "La voie d'accès très appréciée mise en valeur par L'Étudiant, combinant technique et conduite d'équipes."},
                {"step": "Licence Pro (Bac +3)", "title": "Licence Pro Conduite de Travaux BTP", "desc": "Année de spécialisation en alternance très recherchée par les entreprises générales."},
                {"step": "Diplôme d'Ingénieur (Bac +5)", "title": "Ingénieur ESTP, INSA, Polytech ou Mines", "desc": "Accès direct aux responsabilités de conducteur de travaux principal sur grands projets."}
            ],
            "schools": [
                {"name": "ESTP Paris (École Spéciale des Travaux Publics) — France", "country": "France", "scope": "France"},
                {"name": "Lycées préparant le BTS Bâtiment et BUT Génie Civil — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) / Génie Civil — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Polytechnique de Thiès (EPT) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification en Conduite de Travaux BTP", "Habilitation AIPR Concepteur / Encadrant", "Attestation de Coordinateur Sécurité SPS"],
            "schoolSubjects": ["Organisation et gestion de chantier", "Droit de la construction", "Résistance des matériaux appliquée", "Comptabilité analytique de travaux"]
        },
        "career": {
            "sectors": ["Entreprises générales de bâtiment et de travaux publics", "PME régionales de construction tous corps d'état", "Promoteurs immobiliers et sociétés d'économie mixte"],
            "employerTypes": ["Majors du BTP (Vinci, Bouygues, Eiffage)", "Entreprises générales régionales", "Entreprises de second œuvre"],
            "evolution": "Conducteur de travaux junior ➔ Conducteur de travaux principal ➔ Directeur de travaux ➔ Directeur d'agence BTP",
            "pros": "Grande autonomie et responsabilités de chef d'orchestre, fierté concrète des réalisations livrées, véhicule de fonction et perspectives de carrière rapides.",
            "cons": "Journées denses et imprévus permanents sur les chantiers, pression sur les délais de livraison."
        },
        "gettingStarted": {
            "beginnerProject": "Suivre un projet de rénovation dans son entourage et noter toutes les étapes d'intervention des corps d'état.",
            "intermediateProject": "Établir un rétro-planning de chantier sous Excel pour la rénovation complète d'un appartement de 70 m².",
            "advancedProject": "Rédiger un plan particulier de sécurité et de protection de la santé (PPSPS) pour un chantier de terrassement.",
            "portfolioIdeas": ["Planning de travaux réel réalisé sous MS Project", "Rapport de suivi d'un chantier de bâtiment livré"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA analyse les photos de chantier prises sur smartphone pour mettre à jour automatiquement le pourcentage d'avancement des corps d'état et anticiper les retards.",
            "automatedTasks": ["Suivi automatique de l'avancement par vision par ordinateur", "Génération automatique des comptes-rendus de réunion de chantier"],
            "emergingSkills": ["Utilisation de plateformes collaboratives de chantier augmentées par IA"],
            "humanEdge": "La négociation humaine avec les sous-traitants, le management des équipes et la relation de confiance avec le client."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le conducteur de travaux est le garant de la tenue des délais sur des projets immobiliers et d'infrastructures majeurs (hôtels de la Petite Côte, tours de bureaux au Plateau, cités résidentielles de Diamniadio), manageant des équipes multiculturelles avec une autorité respectueuse.",
            "localSectors": ["Grands groupes de BTP (Eiffage Sénégal, CSE, Sogea-Satom, Consortium d'Entreprises)", "Promoteurs immobiliers privés sénégalais", "Sociétés d'ingénierie et de maîtrise d'œuvre"],
            "remoteWork": "Hybride limité (bureau de chantier indispensable pour être au contact physique des équipes).",
            "entrepreneurship": "Création d'une société de contractant général ou de maîtrise d'œuvre déléguée accompagnant les investisseurs de la diaspora."
        },
        "relatedJobSlugs": ["chef-de-chantier", "ingenieur-dans-le-btp", "maitre-doeuvre", "metreur-economiste-construction"],
        "connectedFamilies": ["management-gestion", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier Conducteur de travaux — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/conducteur-de-travaux.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "FFB — Fédération Française du Bâtiment", "url": "https://www.ffbatiment.fr/", "source": "FFB"}
        ],
        "sources": ["L'Étudiant", "FFB", "FNTP"],
        "interests": ["coordonner-gerer", "construire-fabriquer", "contact-humain"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Sur un grand chantier de bâtiment, un conducteur de travaux coordonne en moyenne entre 15 et 30 entreprises sous-traitantes différentes et jusqu'à 150 compagnons simultanément !",
            "pourquoi": "Du terrassier au peintre en passant par l'électricien et le vitrier, chaque corps de métier doit intervenir dans un ordre chronologique d'une précision d'horloger.",
            "a_retenir": "Le chef d'orchestre indispensable qui transforme les plans en réalité."
        }
    },

    # -----------------------------------------------------------------------
    # 21. CHEF DE CHANTIER
    # -----------------------------------------------------------------------
    {
        "id": "chef-de-chantier",
        "slug": "chef-de-chantier",
        "title": "Chef de Chantier BTP",
        "aliases": ["Cheffe de chantier", "Responsable d'équipe de chantier", "Superviseur de chantier gros œuvre"],
        "icon": "🦺",
        "image": "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Gestion & Conduite de Chantier",
        "domainId": "conduite-gestion-chantier",
        "subdomain": "Management terrain & Sécurité de chantier",
        "sectors": ["BTP", "Chantier", "Encadrement"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "Bac Pro Technicien du Bâtiment à Bac +2 (BTS Bâtiment / Travaux Publics)",
        "salary": "🇫🇷 France : 2 200 - 3 500 € net/mois (~30 000 - 50 000 € brut/an avec véhicule et primes, Source : L'Étudiant) • 🇸🇳 Sénégal : 350 000 - 1 100 000 FCFA / mois (Chantiers de construction industrielle et résidentielle)",
        "simpleDefinition": "Le chef de chantier est le patron direct du terrain : présent du matin au soir sur le chantier, il organise le travail quotidien des équipes, commande les matériaux, veille à la sécurité des ouvriers et contrôle la qualité d'exécution de chaque étape.",
        "shortDescription": "Homme de terrain incontournable décrit par L'Étudiant, il fait régner l'ordre, la cadence et la sécurité sur le chantier sous l'autorité du conducteur de travaux.",
        "longDescription": "Comme l'explique en détail la fiche métier de L'Étudiant, le chef de chantier est la cheville ouvrière du BTP. Bras droit du conducteur de travaux, il prépare l'installation du chantier, répartit les tâches entre les chefs d'équipe, contrôle les livraisons de béton et d'acier, et vérifie que chaque mur ou ouvrage est réalisé dans le respect des cotes du plan. Responsable légal de la sécurité au quotidien, il veille au port des équipements de protection et anime les briefings sécurité chaque matin.",
        "mainObjective": "Faire avancer les travaux chaque jour dans le respect scrupuleux des plans, des délais et des règles de sécurité des personnes.",
        "companyRole": "Leader permanent sur le terrain et garant direct de la qualité d'exécution des travaux.",
        "workEnvironment": [
            "🦺 Présence permanente en extérieur sur le chantier, bottes aux pieds et casque vissé sur la tête",
            "🏢 Bureau de chantier modulaire (base-vie) pour les points de pointage et réunions d'équipe",
            "👥 Contact humain permanent avec les ouvriers, les grutiers et les livreurs de matériaux"
        ],
        "missions": [
            "Organiser le travail quotidien des équipes d'ouvriers et des chefs d'équipe selon le planning",
            "Passer les commandes de matériaux (béton prêt à l'emploi, ferraillage, parpaings) pour éviter toute rupture",
            "Contrôler la qualité technique des ouvrages (aplomb, ferraillage, planéité, tolérances de coulage)",
            "Faire appliquer avec fermeté les consignes de sécurité (port du casque, protections antichute)",
            "Tenir le journal de chantier quotidien et consigner les intempéries, livraisons et effectifs présents"
        ],
        "typicalDay": [
            {"time": "07:00", "title": "Ouverture du chantier et accueil sécurité", "desc": "Accueil des équipes au réfectoire, rappel des consignes de sécurité pour le travail en hauteur et distribution des tâches du jour."},
            {"time": "08:30", "title": "Contrôle des réservations avant coulage", "desc": "Vérification au mètre ruban du bon positionnement des gaines de plomberie dans les banches avant l'arrivée du béton."},
            {"time": "11:30", "title": "Réception d'une livraison d'aciers", "desc": "Contrôle du bon de livraison et guidage du camion pour le déchargement à la grue dans la zone de stockage."},
            {"time": "15:30", "title": "Contrôle qualité et pointage", "desc": "Vérification de la planéité de la dalle coulée le matin et pointage des heures des équipes sur la tablette de chantier."}
        ],
        "skills": {
            "technical": [
                "Maîtrise complète des techniques d'exécution du gros œuvre et du second œuvre",
                "Lecture experte de tous les plans de coffrage, ferraillage et réseaux",
                "Réglementation de la sécurité sur les chantiers (PPSPS, travail en hauteur, élingage)",
                "Topographie de chantier de base (utilisation du niveau optique et laser rotatif)"
            ],
            "human": [
                "Autorité naturelle bienveillante et leadership de meneur d'hommes",
                "Sens aigu de l'anticipation pour ne jamais bloquer une équipe faute de matériel",
                "Sang-froid et capacité à résoudre les conflits sur le terrain avec justice"
            ],
            "tools": [
                "Niveaux de chantier lasers automatiques et mètres rubans de 50 m",
                "Tablettes tactiles de suivi de chantier (Finalcad, Alobees)",
                "Appareils de mesure d'affaissement du béton (cône d'Abrams)",
                "Équipements de protection individuelle complets (EPI)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Bac Pro (3 ans)", "title": "Bac Pro Technicien du Bâtiment : Organisation et Réalisation du Gros Œuvre", "desc": "La formation de base mise en avant par L'Étudiant avec alternance sur les chantiers."},
                {"step": "BTS (Bac +2)", "title": "BTS Bâtiment ou BTS Travaux Publics", "desc": "Le cursus d'excellence permettant d'accéder directement au poste de chef de chantier sans attendre."},
                {"step": "Promotion Interne", "title": "Évolution d'ouvrier qualifié à chef de chantier", "desc": "Parcours classique très fréquent dans le BTP valorisant l'expérience de terrain."}
            ],
            "schools": [
                {"name": "Lycées professionnels BTP préparant le Bac Pro et BTS — France", "country": "France", "scope": "France"},
                {"name": "CFA du Bâtiment et centres de perfectionnement des cadres de chantier — France", "country": "France", "scope": "France"},
                {"name": "CFPT Sénégal-Japon (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Habilitation AIPR Encadrant", "Certificat de Sauveteur Secouriste du Travail (SST)", "Attestation de formation au management de chantier BTP"],
            "schoolSubjects": ["Organisation des méthodes de chantier", "Lecture de plans de ferraillage", "Sécurité et hygiène du travail", "Topographie appliquée"]
        },
        "career": {
            "sectors": ["Entreprises générales de bâtiment et de génie civil", "PME régionales de maçonnerie et gros œuvre", "Entreprises de travaux publics et voirie"],
            "employerTypes": ["Entreprises de gros œuvre", "Majors du BTP", "Artisans en développement"],
            "evolution": "Chef d'équipe confirmé ➔ Chef de chantier junior ➔ Chef de chantier principal de grand projet ➔ Conducteur de travaux",
            "pros": "Poste clé très valorisé et respecté sur le chantier, travail concret en plein air sans routine, fortes primes de résultat.",
            "cons": "Présence requise très tôt le matin (dès 7h), fatigue physique des kilomètres parcourus à pied sur le chantier chaque jour."
        },
        "gettingStarted": {
            "beginnerProject": "S'entraîner à donner des consignes claires et précises lors d'une activité sportive ou associative.",
            "intermediateProject": "Apprendre à lire couramment un plan d'armatures de poutre en béton armé.",
            "advancedProject": "Établir le planning journalier d'une équipe de 6 coffreurs pour couler 4 poteaux dans la journée.",
            "portfolioIdeas": ["Journal de chantier modèle tenu pendant un stage", "Fiche de contrôle qualité de ferraillage validée"]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "L'œil du chef de chantier, son autorité sur les équipes et sa capacité à gérer les imprévus humains et matériels de la minute sont irremplaçables par aucune technologie.",
            "automatedTasks": ["Pointage automatique des heures par badgeuse mobile", "Commandes automatiques de réassort de petit matériel consommable"],
            "emergingSkills": ["Utilisation de tablettes connectées pour la consultation immédiate des plans mis à jour"],
            "humanEdge": "Le regard humain qui détecte en une seconde la fatigue d'un ouvrier ou un danger imminent."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le chef de chantier est la figure d'autorité respectée de tous les ouvriers : il gère le rythme des travaux sous la chaleur dakaroise, maintient la discipline et fait le pont entre les ingénieurs de conception et les compagnons locaux.",
            "localSectors": ["Grands chantiers d'infrastructures sénégalais (Eiffage, CSE, Consortium d'Entreprises)", "Chantiers immobiliers privés de Dakar et Saly", "Chantiers de rénovation urbaine"],
            "remoteWork": "Non compatible (100% sur le terrain du premier au dernier coup de truelle).",
            "entrepreneurship": "Création d'une entreprise de sous-traitance en encadrement et fourniture d'équipes de gros œuvre qualifiées."
        },
        "relatedJobSlugs": ["conducteur-de-travaux", "contremaitre-btp", "macon", "coffreur-bancheur"],
        "connectedFamilies": ["management-gestion", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier Chef de chantier — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/chef-de-chantier.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "FFB — Fédération Française du Bâtiment", "url": "https://www.ffbatiment.fr/", "source": "FFB"}
        ],
        "sources": ["L'Étudiant", "FFB", "FNTP"],
        "interests": ["coordonner-gerer", "construire-fabriquer", "sport-plein-air"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Un chef de chantier parcourt en moyenne entre 8 et 15 kilomètres à pied par jour sur son chantier, montant et descendant des dizaines d'étages à pied avant que les ascenseurs ne soient installés !",
            "pourquoi": "Pour contrôler de ses propres yeux chaque détail et s'assurer que la sécurité est respectée partout.",
            "a_retenir": "Le patron du terrain sans qui aucun ouvrier ne sait exactement quoi faire le matin."
        }
    },

    # -----------------------------------------------------------------------
    # 22. CONTREMAÎTRE DE CHANTIER
    # -----------------------------------------------------------------------
    {
        "id": "contremaitre-btp",
        "slug": "contremaitre-btp",
        "title": "Contremaître de Chantier BTP",
        "aliases": ["Maître ouvrier BTP", "Chef d'équipe principal", "Superviseur technique de chantier"],
        "icon": "👷",
        "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Gestion & Conduite de Chantier",
        "domainId": "conduite-gestion-chantier",
        "subdomain": "Supervision technique & Encadrement direct",
        "sectors": ["BTP", "Encadrement", "Chantier"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "Bac Pro BTP à Bac +2 (BTS Bâtiment ou Travaux Publics)",
        "salary": "🇫🇷 France : 2 100 - 3 200 € net/mois (~29 000 - 45 000 € brut/an avec primes, Source : L'Étudiant) • 🇸🇳 Sénégal : 300 000 - 900 000 FCFA / mois (Entreprises de BTP, chantiers d'infrastructures)",
        "simpleDefinition": "Le contremaître supervise directement un groupe de chefs d'équipe et d'ouvriers sur le chantier : expert des techniques constructives, il montre le geste juste, contrôle les finitions et veille à ce que les cadences et la sécurité soient respectées.",
        "shortDescription": "Professionnel chevronné cité par L'Étudiant, il assure la jonction directe entre la chefferie de chantier et les équipes opérationnelles au pied du mur.",
        "longDescription": "Comme décrit dans la liste des métiers BTP de L'Étudiant, le contremaître est un technicien d'expérience issu du terrain. Sous les ordres du chef de chantier, il a la responsabilité directe d'un atelier ou d'un secteur de travaux (par exemple le ferraillage, les voiles béton ou le terrassement). Il transmet les consignes techniques, résout les blocages pratiques d'exécution, forme les apprentis et veille à ce que le matériel soit parfaitement entretenu.",
        "mainObjective": "Coordonner les équipes d'exécution au plus près du travail pour garantir une qualité parfaite des réalisations dans les temps impartis.",
        "companyRole": "Relais technique de commandement direct entre le management de chantier et les compagnons.",
        "workEnvironment": [
            "🦺 Présence continue aux côtés des ouvriers sur le front de taille ou de construction",
            "🛠️ Maniement régulier des outils pour montrer l'exemple ou débloquer une difficulté",
            "👥 Rôle de meneur d'équipe et de formateur de jeunes compagnons"
        ],
        "missions": [
            "Répartir les postes de travail entre les compagnons selon leurs compétences respectives",
            "Expliquer les détails des plans d'exécution et guider les traçages au cordeau",
            "Contrôler la qualité des pièces assemblées ou coulées et faire corriger immédiatement les défauts",
            "Veiller au bon usage et à la longévité de l'outillage et des engins mis à disposition",
            "Rendre compte quotidiennement de l'avancement technique au chef de chantier"
        ],
        "typicalDay": [
            {"time": "07:30", "title": "Bilan technique du matin", "desc": "Point avec les chefs d'équipe sur les objectifs de métrés à atteindre avant midi."},
            {"time": "09:30", "title": "Assistance technique sur ferraillage", "desc": "Démonstration aux apprentis du calage correct d'un chapeau d'armature au niveau d'un appui de poutre."},
            {"time": "13:30", "title": "Contrôle de planéité d'un plancher", "desc": "Vérification au niveau optique de la cote altimétrique des coffrages de dalles."},
            {"time": "16:00", "title": "Bilan d'avancement avec le chef de chantier", "desc": "Confirmation de l'achèvement de la zone A et planification des besoins en béton pour le lendemain."}
        ],
        "skills": {
            "technical": [
                "Maîtrise exemplaire des tours de main et techniques du métier (gros œuvre ou VRD)",
                "Lecture rapide et sans erreur de tous les documents graphiques de chantier",
                "Gestion des cadences de production et optimisation des gestes d'équipe",
                "Réglementation de la sécurité opérationnelle et prévention des risques"
            ],
            "human": [
                "Autorité respectée fondée sur la compétence technique démontrée",
                "Sens de la pédagogie et transmission patiente du savoir-faire",
                "Esprit d'équité et capacité à motiver les troupes dans l'effort"
            ],
            "tools": [
                "Niveaux lasers et optiques de chantier",
                "Mètres rubans, cordeaux et outillage spécialisé de gros œuvre",
                "Tablettes ou carnets de pointage de chantier",
                "Équipements de protection individuelle complets"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Bac Pro (3 ans)", "title": "Bac Pro Technicien du Bâtiment ou Travaux Publics", "desc": "Formation de base solide aux techniques de construction et d'organisation."},
                {"step": "Expérience de terrain (3 à 5 ans)", "title": "Expérience confirmée comme chef d'équipe", "desc": "La légitimité du contremaître repose d'abord sur sa réputation d'excellent compagnon."},
                {"step": "BTS (Bac +2)", "title": "BTS Bâtiment ou BTS TP", "desc": "Accès plus rapide au statut de contremaître principal ou adjoint chef de chantier."}
            ],
            "schools": [
                {"name": "Lycées professionnels du BTP — France", "country": "France", "scope": "France"},
                {"name": "Centres de formation continue des Travaux Publics — France", "country": "France", "scope": "France"},
                {"name": "CFPT Sénégal-Japon (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat de Maître Compagnon BTP", "Habilitation AIPR Encadrant", "Brevet de Sauveteur Secouriste du Travail"],
            "schoolSubjects": ["Technologie constructive", "Management d'équipe de chantier", "Sécurité opérationnelle", "Lecture de plans"]
        },
        "career": {
            "sectors": ["Entreprises de bâtiment et de travaux publics", "Entreprises générales de gros œuvre", "Sociétés de terrassement et d'infrastructures"],
            "employerTypes": ["PME du BTP", "Grandes entreprises de construction", "Majors du BTP"],
            "evolution": "Chef d'équipe ➔ Contremaître de chantier ➔ Chef de chantier ➔ Conducteur de travaux",
            "pros": "Reconnaissance unanime de son savoir-faire par les ouvriers, autonomie d'organisation sur son secteur, rôle formateur gratifiant.",
            "cons": "Devoir concilier les exigences de rapidité du chef de chantier avec les difficultés réelles des ouvriers au sol."
        },
        "gettingStarted": {
            "beginnerProject": "Observer le rôle du contremaître sur un chantier : comment il guide un geste sans élever la voix.",
            "intermediateProject": "S'entraîner à expliquer à un débutant comment lire les cotations d'un plan de coffrage.",
            "advancedProject": "Organiser l'enchaînement des tâches d'une équipe de 4 maçons pour monter 50 mètres de mur en une journée.",
            "portfolioIdeas": ["Attestation de responsabilités de chef d'équipe", "Recommandation d'un chef de chantier pour passage contremaître"]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "Le geste technique parfait, l'évaluation visuelle de la qualité d'une soudure ou d'un coulage et le management direct restent 100% humains.",
            "automatedTasks": ["Pointage automatisé des heures par application mobile", "Notification automatique des alertes météo sur smartphone"],
            "emergingSkills": ["Utilisation d'outils numériques portables pour remonter les anomalies de chantier en temps réel"],
            "humanEdge": "La confiance des ouvriers envers celui qui sait faire le métier mieux que quiconque."
        },
        "africaContext": {
            "senegalInsight": "Sur les chantiers sénégalais, le contremaître est le pont culturel et technique indispensable entre la direction d'ingénierie et les équipes d'ouvriers locaux, parlant wolof et français pour transmettre les consignes avec clarté et bienveillance.",
            "localSectors": ["Grands chantiers de BTP (CSE, Eiffage Sénégal, Sogea-Satom)", "Chantiers de résidences et de bureaux", "Infrastructures régionales"],
            "remoteWork": "Non compatible (100% sur le chantier).",
            "entrepreneurship": "Création d'une entreprise générale de travaux de second œuvre ou de gros œuvre."
        },
        "relatedJobSlugs": ["chef-de-chantier", "conducteur-de-travaux", "macon"],
        "connectedFamilies": ["management-gestion", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier Contremaître — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/contremaitre.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "FNTP — Fédération Nationale des Travaux Publics", "url": "https://www.fntp.fr/", "source": "FNTP"}
        ],
        "sources": ["L'Étudiant", "FNTP", "FFB"],
        "interests": ["construire-fabriquer", "coordonner-gerer", "technique-outils"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Le terme 'contremaître' vient du compagnonnage médiéval où il désignait celui qui se tenait 'contre le maître' d'œuvre pour faire exécuter les plans avec une fidélité absolue.",
            "pourquoi": "Il reste aujourd'hui encore le garant direct du respect des règles de l'art au millimètre près.",
            "a_retenir": "L'artisan d'expérience qui montre la voie et guide les bâtisseurs."
        }
    },

    # -----------------------------------------------------------------------
    # 23. MAÎTRE D'ŒUVRE
    # -----------------------------------------------------------------------
    {
        "id": "maitre-doeuvre",
        "slug": "maitre-doeuvre",
        "title": "Maître d'Œuvre BTP (MOE)",
        "aliases": ["Chef de projet maîtrise d'œuvre", "Coordinateur technique MOE", "Ingénieur maître d'œuvre d'exécution"],
        "icon": "📋",
        "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Gestion & Conduite de Chantier",
        "domainId": "conduite-gestion-chantier",
        "subdomain": "Maîtrise d'œuvre & Coordination globale",
        "sectors": ["BTP", "Ingénierie", "Gestion de Projet"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "Bac +3 (Licence Pro MOE) à Bac +5 (Ingénieur BTP ou Architecte)",
        "salary": "🇫🇷 France : 2 800 - 5 200 € net/mois (~40 000 - 75 000 € brut/an ou honoraires libéraux, Source : L'Étudiant) • 🇸🇳 Sénégal : 550 000 - 1 900 000 FCFA / mois (Bureaux d'études MOE, cabinets d'architecture)",
        "simpleDefinition": "Le maître d'œuvre (MOE) est le professionnel ou le cabinet mandaté par le client (le maître d'ouvrage) pour concevoir le projet, choisir les entreprises de construction, coordonner les travaux et s'assurer que l'ouvrage est livré conformément aux plans, au budget et aux normes.",
        "shortDescription": "Représentant technique suprême du projet cité par L'Étudiant, il orchestre la conception et supervise l'exécution des travaux pour le compte du client.",
        "longDescription": "Comme expliqué dans la fiche métier de L'Étudiant, il ne faut pas confondre maître d'ouvrage (le client qui paie et commande l'ouvrage) et maître d'œuvre (le technicien qui le conçoit et en supervise la réalisation). Le maître d'œuvre peut être un architecte, un ingénieur ou un cabinet spécialisé. Il rédige le cahier des charges, anime les réunions de chantier hebdomadaires, arbitre les éventuels litiges entre corps d'état, vérifie les situations de paiement et prononce la réception des travaux.",
        "mainObjective": "Piloter la conception et la réalisation de l'ouvrage pour livrer un bâtiment parfait répondant scrupuleusement aux attentes du maître d'ouvrage.",
        "companyRole": "Représentant technique, garant de la qualité et coordinateur général de l'ensemble des acteurs du projet.",
        "workEnvironment": [
            "🏢 Cabinets de maîtrise d'œuvre indépendants, agences d'architecture ou bureaux d'études",
            "🦺 Réunions de chantier hebdomadaires sur site pour vérifier la conformité des travaux",
            "💼 Présentations formelles et arbitrages financiers avec les clients maîtres d'ouvrage"
        ],
        "missions": [
            "Concevoir le projet architectural et technique d'après les besoins exprimés par le client",
            "Rédiger les dossiers de consultation des entreprises (CCTP, CCAP) et analyser les offres reçues",
            "Diriger les réunions de chantier hebdomadaires et rédiger les comptes-rendus opposables",
            "Vérifier les factures des entreprises et certifier les demandes de paiement pour le client",
            "Assister le client lors des opérations préalables à la réception (OPR) et acter la livraison"
        ],
        "typicalDay": [
            {"time": "09:00", "title": "Direction de la réunion de chantier", "desc": "Tour complet du chantier avec les 12 chefs d'entreprises sous-traitantes et arbitrage d'un décalage de planning."},
            {"time": "11:30", "title": "Rédaction du compte-rendu de chantier", "desc": "Envoi du procès-verbal officiel listant les actions correctives à mener par le plaquiste et l'électricien sous 48h."},
            {"time": "14:30", "title": "Point financier avec le maître d'ouvrage", "desc": "Présentation au directeur d'hôpital de l'état d'avancement des dépenses et validation d'un avenant pour une amélioration technique."},
            {"time": "17:00", "title": "Visite préalable de réception", "desc": "Contrôle des finitions d'un plateau de bureaux et notation des éventuelles réserves sur tablette."}
        ],
        "skills": {
            "technical": [
                "Loi MOP (Maîtrise d'Ouvrage Publique) et réglementation des marchés privés de travaux",
                "Connaissances transversales complètes en structure, fluides, thermique et finitions",
                "Gestion contractuelle, analyse des avenants et vérification des décomptes généraux définitifs (DGD)",
                "Procédures d'Opérations Préalables à la Réception (OPR) et garanties légales (décennale, parfait achèvement)"
            ],
            "human": [
                "Autorité naturelle, impartialité et grand sens de l'équité",
                "Excellente diplomatie pour désamorcer les conflits entre entreprises sur chantier",
                "Rigueur juridique et sens de la responsabilité envers le client"
            ],
            "tools": [
                "Logiciels de gestion de comptes-rendus et de suivi de chantier (BatiScript, Archireport)",
                "Outils de planification OPC (MS Project)",
                "Visionneuses de maquettes BIM (BIM Vision, Navisworks)",
                "Appareils de mesure de conformité technique"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +3 (Licence Pro)", "title": "Licence Pro Métiers de la Maîtrise d'Œuvre et de la Coordination", "desc": "Formation ciblée sur le suivi juridique, technique et financier de chantier."},
                {"step": "Diplôme Bac +5", "title": "Diplôme d'Ingénieur en BTP (ESTP, INSA) ou Diplôme d'État d'Architecte", "desc": "La voie royale pour diriger des missions complètes de maîtrise d'œuvre d'envergure."},
                {"step": "Expérience professionnelle", "title": "Expérience préalable en conduite de travaux", "desc": "La connaissance intime de la vie de chantier est le meilleur atout d'un maître d'œuvre respecté."}
            ],
            "schools": [
                {"name": "ESTP Paris / ENSA (Écoles d'Architecture) — France", "country": "France", "scope": "France"},
                {"name": "IUT et Universités délivrant les Licences Pro BTP — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Collège Universitaire d'Architecture de Dakar (CUAD) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Assurance Décennale Maîtrise d'Œuvre", "Certification Professionnelle OPQIBI Maîtrise d'Œuvre", "Certification Coordinateur BIM MOE"],
            "schoolSubjects": ["Droit des marchés de construction", "Gestion contractuelle", "Technologie du bâtiment tous corps d'état", "Économie de projet"]
        },
        "career": {
            "sectors": ["Cabinets de maîtrise d'œuvre indépendants", "Agences d'architecture pluridisciplinaires", "Sociétés d'ingénierie conseil (Egis, Setec, Artelia)", "Services techniques des grandes institutions et collectivités"],
            "employerTypes": ["Cabinets de MOE", "Bureaux d'ingénierie", "Cabinets d'architectes"],
            "evolution": "Chargé d'opérations junior ➔ Maître d'œuvre chef de projet ➔ Directeur du pôle maîtrise d'œuvre ➔ Fondateur de son cabinet de MOE",
            "pros": "Position centrale de décision et d'arbitrage, vision globale de la conception à la livraison, indépendance d'action.",
            "cons": "Responsabilité civile et décennale engagée, gestion quotidienne des tensions et litiges entre artisans et clients."
        },
        "gettingStarted": {
            "beginnerProject": "Assister à une réunion de chantier avec un maître d'œuvre et observer comment il anime le tour de table.",
            "intermediateProject": "Rédiger un compte-rendu de chantier type avec tableau des réserves, entreprises responsables et dates limites.",
            "advancedProject": "Établir le procès-verbal d'Opérations Préalables à la Réception (OPR) d'un bâtiment fictif de 10 appartements.",
            "portfolioIdeas": ["Exemple de compte-rendu de chantier professionnel", "Dossier de consultation des entreprises (CCTP) rédigé"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'IA retranscrit automatiquement les enregistrements audio des réunions de chantier pour générer les comptes-rendus opposables en quelques secondes.",
            "automatedTasks": ["Retranscription vocale automatique des comptes-rendus de chantier", "Suivi automatique de la levée des réserves par photo sur smartphone"],
            "emergingSkills": ["Utilisation d'assistants IA juridiques pour l'analyse des réclamations contractuelles"],
            "humanEdge": "Le discernement technique impartial et l'autorité morale pour faire respecter la parole donnée."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la maîtrise d'œuvre indépendante est très recherchée par les investisseurs institutionnels et les Sénégalais de l'extérieur (diaspora) qui financent des immeubles à distance et ont besoin d'un professionnel intègre sur place pour vérifier que l'argent débloqué correspond exactement à des travaux réels et bien exécutés.",
            "localSectors": ["Cabinets de maîtrise d'œuvre de Dakar", "Sociétés d'Assistance à Maîtrise d'Ouvrage (AMO)", "Projets d'infrastructures publiques (AGEROUTE, APIX)"],
            "remoteWork": "Hybride (rédaction des marchés et comptes-rendus en télétravail / présence obligatoire sur le chantier pour les réunions).",
            "entrepreneurship": "Création d'un cabinet de maîtrise d'œuvre et de suivi de chantier pour sécuriser les investissements immobiliers de la diaspora."
        },
        "relatedJobSlugs": ["conducteur-de-travaux", "architecte", "ingenieur-genie-civil"],
        "connectedFamilies": ["management-gestion", "droit-management", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier Maître d'œuvre — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/maitre-doeuvre.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "Syntec Ingénierie — Fiches métiers", "url": "https://www.syntec-ingenierie.fr/", "source": "Syntec"}
        ],
        "sources": ["L'Étudiant", "Syntec Ingénierie", "CNOA"],
        "interests": ["coordonner-gerer", "droit-politique", "construire-fabriquer"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Le maître d'œuvre est le seul professionnel habilité à prononcer la 'réception de l'ouvrage' : cet acte juridique capital transfère la garde du bâtiment au client et déclenche la garantie décennale de 10 ans !",
            "pourquoi": "C'est la preuve officielle que le chantier est terminé et conforme aux règles de l'art.",
            "a_retenir": "L'œil de confiance du client qui veille sur chaque brique et chaque euro investi."
        }
    },

    # -----------------------------------------------------------------------
    # 24. PEINTRE EN BÂTIMENT
    # -----------------------------------------------------------------------
    {
        "id": "peintre-en-batiment",
        "slug": "peintre-en-batiment",
        "title": "Peintre en Bâtiment & Applicateur de Revêtements",
        "aliases": ["Peintre applicateur d'enduits", "Peintre décorateur", "Façadier peintre"],
        "icon": "🎨",
        "image": "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Second Œuvre, Finitions & Carrelage",
        "domainId": "second-oeuvre-finitions",
        "subdomain": "Peinture, Enduits & Ravalement",
        "sectors": ["BTP", "Second Œuvre", "Finition"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "CAP Peintre applicateur de revêtements à Bac Pro Aménagement-Finition",
        "salary": "🇫🇷 France : 1 800 - 2 800 € net/mois (~26 000 - 40 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 150 000 - 550 000 FCFA / mois (Peintres en bâtiment, façadiers décorateurs)",
        "simpleDefinition": "Le peintre en bâtiment apporte la touche finale visible d'un édifice : il prépare minutieusement les murs (rebouchage, ponçage, lissage), puis applique peintures, vernis, enduits décoratifs ou papiers peints pour protéger et embellir les intérieurs et façades.",
        "shortDescription": "Artisan de la couleur et de la lumière répertorié par L'Étudiant, il transforme des parois brutes en surfaces impeccables et chaleureuses.",
        "longDescription": "Comme décrit dans la fiche métier de L'Étudiant, le travail du peintre ne se résume pas à passer un rouleau : 80% de son temps est consacré à la préparation invisible du support. Sur le plâtre, le béton ou le bois, il lessive, rebouche les fissures à l'enduit, ponce avec une planéité parfaite, puis applique sous-couches et couches de finition (peintures mates, satinées, laquées ou peintures dépolluantes sans COV). En extérieur, il ravale les façades en appliquant des revêtements imperméables protégeant les murs contre la pluie et les UV.",
        "mainObjective": "Sublimer l'esthétique des pièces et protéger durablement les surfaces murales contre l'humidité, l'usure et les salissures.",
        "companyRole": "Artisan de la touche finale apportant la lumière, la couleur et le niveau d'excellence visible.",
        "workEnvironment": [
            "🏠 Intérieurs de logements neufs, bureaux, boutiques ou appartements habités",
            "🏢 Façades extérieures d'immeubles sur échafaudages ou nacelles",
            "🪜 Travail debout sur escabeaux, échafaudages roulants et planchers de travail"
        ],
        "missions": [
            "Protéger le mobilier, les sols et les plinthes à l'aide de bâches et rubans de masquage adhésifs",
            "Préparer les fonds : grattage, ponçage, rebouchage des trous et application d'enduit de lissage complet",
            "Appliquer les peintures au rouleau, à la brosse ou au pistolet sans trace (technique Airless)",
            "Poser les revêtements muraux collés (papiers peints, toiles de verre, tissus muraux)",
            "Réaliser des enduits décoratifs à la chaux, stucs vénitiens ou peintures à effets matières"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Protection et préparation de chantier", "desc": "Bâchage soigné d'un parquet massif et masquage des prises électriques dans un appartement à rénover."},
            {"time": "09:30", "title": "Enduisage et ratissage de murs", "desc": "Application à la lame à enduire d'une fine couche d'enduit de finition pour faire disparaître les bandes de plâtre."},
            {"time": "13:30", "title": "Ponçage mécanique aspirant", "desc": "Ponçage à la ponceuse girafe avec éclairage rasant pour traquer la moindre micro-aspérité sans poussière."},
            {"time": "15:30", "title": "Application de la couche de finition", "desc": "Passage au rouleau microfibres de la deuxième couche de peinture veloutée sans trace de reprise."}
        ],
        "skills": {
            "technical": [
                "Préparation rigoureuse des subjectiles (plâtre, béton, bois, métaux)",
                "Chimie des peintures (acryliques, alkydes, peintures biosourcées, résines époxy)",
                "Technique d'application au pistolet Airless haute pression et au rouleau",
                "Harmonie des couleurs, colorimétrie et éclairage des pièces"
            ],
            "human": [
                "Propreté exemplaire et soin méticuleux apporté aux finitions",
                "Sensibilité esthétique aux nuances de couleurs et à la lumière",
                "Discrétion et courtoisie lors des interventions chez des particuliers"
            ],
            "tools": [
                "Lames à enduire, couteaux de peintre et platoirs à lisser",
                "Ponceuses girafes télescopiques avec aspirateur industriel de classe M",
                "Stations de peinture Airless haute pression (Graco, Wagner)",
                "Pinceaux à rechampir, rouleaux microfibres et nuanciers de couleurs"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "CAP (2 ans)", "title": "CAP Peintre Applicateur de Revêtements", "desc": "Le diplôme d'apprentissage roi cité par L'Étudiant pour apprendre le métier en entreprise."},
                {"step": "Bac Pro (3 ans)", "title": "Bac Pro Aménagement et Finition du Bâtiment", "desc": "Formation complète incluant plâtrerie, sols et gestion d'équipe."},
                {"step": "BP Peintre Décorateur", "title": "Brevet Professionnel Peinture et Décors", "desc": "Spécialisation haut de gamme en décors peints, trompe-l'œil et patines anciennes."}
            ],
            "schools": [
                {"name": "CFA du Bâtiment et lycées professionnels — France", "country": "France", "scope": "France"},
                {"name": "Compagnons du Devoir (filière finition) — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["CQP Peintre Décorateur", "Certification Qualibat Peinture et Ravalement", "Attestation de montage d'échafaudages de pied"],
            "schoolSubjects": ["Technologie des enduits et peintures", "Colorimétrie et histoire des décors", "Dessin d'art et perspective", "Sécurité chimique et aération"]
        },
        "career": {
            "sectors": ["Entreprises artisanales de peinture et décoration", "PME de second œuvre et de rénovation intérieure", "Entreprises spécialisées en ravalement de façades et isolation extérieure (ITE)"],
            "employerTypes": ["Artisans peintres", "Entreprises de second œuvre", "Sociétés de rénovation immobilière"],
            "evolution": "Apprenti peintre ➔ Peintre qualifié ➔ Chef d'équipe finition ➔ Métreur-deviseur peinture ➔ Artisan peintre chef d'entreprise",
            "pros": "Satisfaction visuelle immédiate de voir une pièce transformée et lumineuse, métier valorisé au contact direct des clients particuliers, plein emploi.",
            "cons": "Travail régulier les bras levés pour les plafonds, postures penchées pour les plinthes."
        },
        "gettingStarted": {
            "beginnerProject": "Reboucher un trou de cheville dans un mur au plâtre et poncer jusqu'à ce qu'on ne sente plus rien au toucher.",
            "intermediateProject": "Peindre un pan de mur complet avec rechampis parfaits sans déborder sur les plinthes ni le plafond.",
            "advancedProject": "Réaliser un enduit à la chaux cirée (stuc vénitien) avec nuançage de teintes sur panneau de bois.",
            "portfolioIdeas": ["Photos avant/après de pièces rénovées et repeintes", "Nuancier d'échantillons d'enduits décoratifs réalisés"]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "Des applications sur smartphone permettent aux clients de visualiser la couleur des murs en réalité augmentée avant de peindre, mais l'application sans trace reste 100% manuelle.",
            "automatedTasks": ["Simulateurs de teintes en réalité augmentée", "Mélangeurs automatiques de peintures en magasin"],
            "emergingSkills": ["Utilisation de peintures écologiques dépolluantes assainissant l'air intérieur"],
            "humanEdge": "La sensibilité du toucher pour sentir si un mur est parfaitement lisse et le coup de pinceau pour rechampir net."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les peintres en bâtiment sont particulièrement sollicités avant les grandes fêtes familiales (Tabaski, Korité, Gamou) où les maisons sont traditionnellement repeintes à neuf, et maîtrisent des enduits décoratifs tyroliens et grattés très résistants au soleil et à la poussière côtière.",
            "localSectors": ["Entreprises de peinture et décoration de Dakar", "Boutiques et distributeurs de peinture (Seigneurie Sénégal, Sofap Plastène)", "Chantiers résidentiels"],
            "remoteWork": "Non compatible (100% sur place dans les pièces ou sur échafaudages).",
            "entrepreneurship": "Création d'une entreprise artisanale de peinture intérieure haut de gamme et ravalement de façades."
        },
        "relatedJobSlugs": ["plaquiste", "carreleur", "architecte-dinterieur"],
        "connectedFamilies": ["arts-design", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier Peintre en bâtiment — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/peintre-en-batiment.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "CAPEB — Métiers de la peinture et de la finition", "url": "https://www.capeb.fr/", "source": "CAPEB"}
        ],
        "sources": ["L'Étudiant", "CAPEB", "FFB"],
        "interests": ["arts-design", "construire-fabriquer", "technique-outils"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Un bon peintre passe en moyenne 80% de son temps de chantier à protéger, boucher, enduire et poncer le mur, et seulement 20% à passer la peinture elle-même !",
            "pourquoi": "Parce que la peinture ne masque jamais un défaut : au contraire, une peinture brillante ou satinée fait ressortir la moindre bosse !",
            "a_retenir": "L'artisan de la lumière qui donne son âme et sa couleur au bâtiment."
        }
    },

    # -----------------------------------------------------------------------
    # 25. PLAQUISTE-PLÂTRIER
    # -----------------------------------------------------------------------
    {
        "id": "plaquiste",
        "slug": "plaquiste",
        "title": "Plaquiste-Plâtrier",
        "aliases": ["Monteur de cloisons sèches", "Plâtrier plaquiste", "Poseur de plaques de plâtre et faux-plafonds"],
        "icon": "🧱",
        "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Second Œuvre, Finitions & Carrelage",
        "domainId": "second-oeuvre-finitions",
        "subdomain": "Plaques de plâtre, Cloisons & Faux-plafonds",
        "sectors": ["BTP", "Second Œuvre", "Aménagement"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "CAP Plâtrier-plaquiste à Bac Pro Aménagement et Finition",
        "salary": "🇫🇷 France : 1 900 - 3 000 € net/mois (~27 000 - 42 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 180 000 - 600 000 FCFA / mois (Entreprises de faux-plafonds décoratifs et cloisons à Dakar)",
        "simpleDefinition": "Le plaquiste monte l'ossature métallique et fixe les plaques de plâtre (Placo) pour créer les cloisons entre les pièces, isoler thermiquement et phoniquement les murs intérieurs et installer les faux-plafonds modernes.",
        "shortDescription": "Artisan indispensable de l'aménagement intérieur documenté par L'Étudiant, il façonne les volumes habitables et intègre l'isolation thermique et acoustique.",
        "longDescription": "Comme décrit dans la fiche descriptive de L'Étudiant, le plaquiste intervient dès que le bâtiment est hors d'eau et hors d'air. À partir des plans d'architecte, il trace les emplacements, fixe les rails métalliques au sol et au plafond, insère les panneaux d'isolant (laine de verre, ouate de cellulose), puis visse les plaques de plâtre (BA13). Il colle ensuite les bandes à joints au niveau des raccords et applique l'enduit pour que la surface soit parfaitement plane, prête à être peinte.",
        "mainObjective": "Créer les cloisons séparatives, doubler les murs extérieurs et poser les faux-plafonds avec une isolation phonique, thermique et coupe-feu exemplaire.",
        "companyRole": "Structurateur des volumes intérieurs et garant de la performance thermique et acoustique des cloisons.",
        "workEnvironment": [
            "🏠 Bâtiments neufs et chantiers de rénovation intérieure",
            "🏢 Plateaux de bureaux tertiaires, cliniques, commerces et logements",
            "🪜 Travail en intérieur à l'abri du vent, mais poussiéreux lors du ponçage des bandes"
        ],
        "missions": [
            "Implanter et tracer l'emplacement des cloisons au cordeau bleu et au laser",
            "Monter les ossatures métalliques légères (rails, montants, suspentes de plafond)",
            "Découper et poser les isolants thermiques et acoustiques dans l'épaisseur des cloisons",
            "Visser les plaques de plâtre (BA13 standard, hydrofuge, phonique ou coupe-feu)",
            "Coller les bandes à joints armées et appliquer l'enduit de finition en plusieurs passes lissées"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Traçage et fixation des rails", "desc": "Implantation au laser rotatif des cloisons distributives d'un appartement et vissage des rails au sol."},
            {"time": "10:00", "title": "Pose des montants et isolant phonique", "desc": "Insertion des montants métalliques tous les 60 cm et mise en place de la laine de roche acoustique entre les montants."},
            {"time": "13:30", "title": "Vissage des plaques au lève-plaque", "desc": "Montage des plaques de plâtre au plafond avec lève-plaque mécanique et vissage à la visseuse automatique à bande."},
            {"time": "15:30", "title": "Jointoiement des plaques", "desc": "Collage des bandes à joints papier microperforées avec la boîte à joint automatique et lissage soigné."}
        ],
        "skills": {
            "technical": [
                "Techniques de pose des cloisons sèches, doublages et plafonds suspendus",
                "Connaissance des différentes plaques spécialisées (Placoplâtre hydrofuge vert, phonique bleu, coupe-feu rose)",
                "Normes d'isolation thermique (RE2020), acoustique et résistance au feu",
                "Maîtrise du collage et lissage parfait des bandes à joints sans surépaisseur"
            ],
            "human": [
                "Rapidité d'exécution et sens du rendement tout en restant très soigneux",
                "Bonne force physique pour le port des plaques de plâtre de 30 kg",
                "Rigueur géométrique pour des angles droits et des aplombs impeccables"
            ],
            "tools": [
                "Visseuses spécifiques pour plaques de plâtre à butée de profondeur débrayable",
                "Lève-plaques télescopiques pour travail au plafond",
                "Lasers de traçage autonivelants 360 degrés",
                "Applicateurs automatiques de bandes à joints (Bazooka) et couteaux à enduire"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "CAP (2 ans)", "title": "CAP Métiers du Plâtre et de l'Isolation", "desc": "Le parcours en apprentissage privilégié cité par L'Étudiant pour apprendre la pose de cloisons sèches."},
                {"step": "Bac Pro (3 ans)", "title": "Bac Pro Aménagement et Finition du Bâtiment (AFB)", "desc": "Formation polyvalente combinant cloisons, faux-plafonds et finitions peintes."},
                {"step": "Brevet Professionnel (BP)", "title": "BP Plâtrerie-Plaques", "desc": "Perfectionnement technique sur les plafonds décoratifs acoustiques et formes cintrées."}
            ],
            "schools": [
                {"name": "CFA du Bâtiment spécialisés en second œuvre — France", "country": "France", "scope": "France"},
                {"name": "Centres de formation continue BTP — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification Poseur Agréé Placo / Knauf", "CQP Plaquiste haute performance acoustique", "Attestation de montage d'échafaudages roulants"],
            "schoolSubjects": ["Technologie des systèmes en plaques de plâtre", "Isolation thermique et acoustique", "Lecture de plans d'aménagement", "Sécurité de chantier"]
        },
        "career": {
            "sectors": ["Entreprises de plâtrerie et d'isolation", "Entreprises générales de second œuvre BTP", "Entreprises spécialisées dans les faux-plafonds tertiaires démontables"],
            "employerTypes": ["PME de second œuvre", "Artisans plaquistes", "Entreprises d'aménagement intérieur"],
            "evolution": "Plaquiste junior ➔ Plaquiste-jointeur hautement qualifié ➔ Chef d'équipe cloisons ➔ Artisan chef d'entreprise",
            "pros": "Métier sous très forte demande de recrutement, travail toujours à l'abri des intempéries, satisfaction de voir naître les pièces d'un logement.",
            "cons": "Manutention répétée de plaques lourdes, poussière de plâtre lors du ponçage des bandes."
        },
        "gettingStarted": {
            "beginnerProject": "Découper une plaque de plâtre au cutter en pliant le carton d'un coup sec net.",
            "intermediateProject": "Poser un montant métallique vertical et visser une plaque de plâtre sans percer le carton avec la tête de vis.",
            "advancedProject": "Réaliser le jointoiement parfait de deux plaques biseautées avec pose de bande et enduit sans bulle d'air.",
            "portfolioIdeas": ["Photos de cloisons montées avec faux-plafond décaissé rétro-éclairé", "Attestation de stage chez un plaquiste"]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "Même si des robots automatiques de pose de cloisons apparaissent dans certains chantiers expérimentaux japonais, l'agilité manuelle et l'adaptation aux gaines restent 100% manuelles.",
            "automatedTasks": ["Optimisation logicielle du calepinage des plaques pour minimiser les chutes", "Découpeuse numérique de plaques aux formes spéciales en usine"],
            "emergingSkills": ["Utilisation de lève-plaques électriques connectés et d'exosquelettes pour le travail au plafond"],
            "humanEdge": "La sensibilité du geste du jointeur pour appliquer la juste épaisseur d'enduit invisible à l'œil nu."
        },
        "africaContext": {
            "senegalInsight": "À Dakar et dans les grandes villes du Sénégal, le métier de plaquiste connaît une véritable explosion avec la mode des faux-plafonds décoratifs en plaques de plâtre intégrant des spots LED et des gorges lumineuses dans les salons des nouvelles résidences et villas.",
            "localSectors": ["Entreprises d'aménagement intérieur de Dakar", "Boutiques d'importation de plaques de plâtre et rails métalliques", "Chantiers de bureaux et de résidences"],
            "remoteWork": "Non compatible (100% sur le chantier d'aménagement).",
            "entrepreneurship": "Création d'une entreprise spécialisée dans la pose de faux-plafonds décoratifs design et d'isolation acoustique à Dakar."
        },
        "relatedJobSlugs": ["peintre-en-batiment", "menuisier", "electricien-du-btp"],
        "connectedFamilies": ["artisanat-metiers-dart", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier Plaquiste — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/plaquiste.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "Placo Saint-Gobain — Solutions constructives", "url": "https://www.placo.fr/", "source": "Placo"}
        ],
        "sources": ["L'Étudiant", "CAPEB", "Placo Saint-Gobain"],
        "interests": ["construire-fabriquer", "technique-outils"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Une cloison moderne composée de deux plaques de plâtre spéciales avec 5 cm de laine de verre au milieu isole mieux du bruit qu'un mur en béton plein de 15 cm d'épaisseur !",
            "pourquoi": "Grâce au principe acoustique 'masse-ressort-masse' où l'isolant dissipe l'énergie sonore par frottement.",
            "a_retenir": "L'architecte des cloisons qui transforme un grand hangar vide en appartements confortables."
        }
    },

    # -----------------------------------------------------------------------
    # 26. CARRELEUR-MOSAÏSTE
    # -----------------------------------------------------------------------
    {
        "id": "carreleur",
        "slug": "carreleur",
        "title": "Carreleur-Mosaïste",
        "aliases": ["Poseur de carrelage", "Carreleur chapiste", "Artisan mosaïste décorateur"],
        "icon": "🧱",
        "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Second Œuvre, Finitions & Carrelage",
        "domainId": "second-oeuvre-finitions",
        "subdomain": "Carrelage, Faïence & Mosaïque",
        "sectors": ["BTP", "Second Œuvre", "Finition"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "CAP Carreleur-mosaïste à Bac Pro Aménagement-Finition",
        "salary": "🇫🇷 France : 1 900 - 3 100 € net/mois (~27 000 - 44 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 200 000 - 750 000 FCFA / mois (Poseurs de carrelage grès cérame grands formats, mosaïque de piscines)",
        "simpleDefinition": "Le carreleur-mosaïste habille les sols et les murs intérieurs et extérieurs de carreaux de céramique, faïence, marbre, grès cérame ou mosaïque, en assurant une planéité parfaite, une étanchéité totale et une esthétique raffinée dans les salles de bains, cuisines, terrasses et piscines.",
        "shortDescription": "Artisan de la géométrie et du décor répertorié par L'Étudiant, il allie rigueur de pose au millimètre et sens du beau pour sublimer les sols et les murs d'eau.",
        "longDescription": "Comme décrit dans la fiche métier de L'Étudiant, le carreleur intervient après le maçon et le plombier. Il coule d'abord la chape de mortier pour égaliser le sol ou applique des nattes d'étanchéité liquide sous carrelage dans les douches à l'italienne. Il effectue le calepinage (dessin précis de l'implantation des carreaux pour éviter les découpes inesthétiques aux entrées). Il colle ensuite les carreaux (parfois géants de 120x120 cm) au mortier-colle avec des croisillons autonivelants, découpe les passages de tuyaux à la meuleuse diamantée et réalise des joints lisses et étanches.",
        "mainObjective": "Poser des revêtements de sol et muraux durables, imperméables, esthétiques et d'une planéité irréprochable.",
        "companyRole": "Créateur de la finition noble des pièces humides et des sols d'usure.",
        "workEnvironment": [
            "🏠 Salles de bains, cuisines de particuliers, pièces à vivre et terrasses extérieures",
            "🏊 Piscines, centres aquatiques, hôpitaux, cuisines industrielles et centres commerciaux",
            "🦺 Travail à genoux muni de genouillères professionnelles et gants étanches"
        ],
        "missions": [
            "Contrôler les supports (dalles béton, cloisons) et réaliser les chapes ou ragréages d'égalisation",
            "Appliquer les systèmes d'étanchéité sous carrelage (SPEC / SEL) dans les douches et pièces humides",
            "Établir le plan de calepinage pour harmoniser les découpes et aligner les joints",
            "Encoller les carreaux au peigne cranté et régler la planéité à l'aide de croisillons autonivelants",
            "Gâcher et appliquer le mortier à joint (ciment ou époxy) et nettoyer soigneusement la laitance"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Calepinage d'un salon", "desc": "Traçage au laser des axes de départ au centre de la pièce pour équilibrer les coupes en pourtour de plinthes."},
            {"time": "09:30", "title": "Encollage et pose de grands carreaux", "desc": "Double encollage au mortier-colle déformable C2S1 de carreaux en grès cérame de 90x90 cm et serrage des cales autonivelantes."},
            {"time": "14:00", "title": "Découpes complexes à la meuleuse", "desc": "Découpes circulaires à la carotteuse diamantée pour laisser passer les alimentations d'eau d'un mitigeur de douche."},
            {"time": "16:00", "title": "Jointoiement et nettoyage à l'éponge", "desc": "Application du joint hydrofuge et passage de l'éponge taloche pour éliminer le voile de ciment avant séchage."}
        ],
        "skills": {
            "technical": [
                "Techniques de calepinage géométrique et calcul des coupes de carrelage",
                "Chimie des mortiers-colles, ragréages fibrés et joints époxy anti-acides",
                "Maniement de la coupeuse manuelle (carrelette) et de la scie à eau sur table",
                "Normes d'étanchéité des douches à l'italienne et terrasses extérieures"
            ],
            "human": [
                "Sens aigu du détail géométrique et du fini esthétique impeccable",
                "Patience, minutie et grande concentration lors de la pose",
                "Bonne endurance physique pour le travail agenouillé"
            ],
            "tools": [
                "Coupeuses de carrelage manuelles (carrelettes de 120 cm Rubi, Sigma)",
                "Scies à carrelage électriques sur table refroidies à l'eau",
                "Croisillons de nivellement à vis ou à cales et ventouses de manutention",
                "Malaxeurs électriques de mortier-colle et taloches à joints"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "CAP (2 ans)", "title": "CAP Carreleur-Mosaïste", "desc": "La voie royale en apprentissage citée par L'Étudiant pour acquérir le coup de main et la précision de pose."},
                {"step": "Bac Pro (3 ans)", "title": "Bac Pro Aménagement et Finition du Bâtiment", "desc": "Formation élargie intégrant la gestion de chantier de second œuvre."},
                {"step": "Brevet Professionnel (BP)", "title": "BP Carreleur-Mosaïste", "desc": "Perfectionnement sur les mosaïques d'art, faïences anciennes et sols industriels lourds."}
            ],
            "schools": [
                {"name": "CFA du Bâtiment et lycées professionnels — France", "country": "France", "scope": "France"},
                {"name": "Compagnons du Devoir (filière carrelage) — France", "country": "France", "scope": "France"},
                {"name": "CFPT Sénégal-Japon (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["CQP Carreleur Grands Formats", "Certification Qualibat Carrelage et Revêtements", "Habilitation étanchéité SEL / SPEC"],
            "schoolSubjects": ["Géométrie et calepinage", "Technologie de la céramique et des colles", "Étanchéité et isolation phonique sous carrelage", "Sécurité et ergonomie"]
        },
        "career": {
            "sectors": ["Entreprises artisanales de carrelage et revêtements", "Entreprises générales de second œuvre", "Constructeurs de piscines et spas", "Entreprises spécialisées dans les sols industriels et agroalimentaires"],
            "employerTypes": ["Artisans carreleurs", "Entreprises de carrelage et sols", "Pisciniers"],
            "evolution": "Apprenti carreleur ➔ Carreleur qualifié ➔ Spécialiste grands formats et faïence de luxe ➔ Artisan chef d'entreprise",
            "pros": "Satisfaction artistique permanente de voir briller un sol parfaitement lisse, forte rentabilité pour les artisans qualifiés, liberté d'exercice.",
            "cons": "Position agenouillée usante pour les articulations, port de cartons de carreaux lourds."
        },
        "gettingStarted": {
            "beginnerProject": "S'entraîner à couper un carreau en deux à la carrelette manuelle en suivant un trait de crayon tracé à l'équerre.",
            "intermediateProject": "Poser un carré de 9 carreaux sur un panneau de bois avec mortier-colle et croisillons réguliers.",
            "advancedProject": "Réaliser le calepinage complet d'une salle de bain de 10 m² intégrant une douche à l'italienne sans aucune coupe inférieure à un demi-carreau.",
            "portfolioIdeas": ["Photos de réalisations de salles de bains carrelées", "Mosaïque décorative artistique réalisée à la pince"]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "Des logiciels d'aménagement 3D permettent de générer le calepinage idéal en évitant les petites coupes, mais le geste de pose et l'écrasement de la colle au peigne restent 100% manuels.",
            "automatedTasks": ["Calcul automatique des plans de calepinage sans chutes par logiciel 3D", "Découpeuse à jet d'eau haute pression pour motifs de mosaïques complexes"],
            "emergingSkills": ["Maniement des systèmes de ventouses à pompe pour manipuler les dalles géantes en grès de 160x320 cm"],
            "humanEdge": "La sensibilité tactile du doigt pour vérifier qu'il n'y a aucun décroché entre deux carreaux voisins."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le carrelage en grès cérame poli et brillant est le revêtement de sol roi de toutes les maisons et villas pour sa fraîcheur sous les pieds et sa facilité d'entretien face au sable, créant une demande continue pour des carreleurs réputés pour leur rectitude.",
            "localSectors": ["Magasins d'importation de carrelage de Dakar (Batimat, Comptoir Commercial, Batiplus)", "Entreprises de second œuvre sénégalaises", "Chantiers de résidences privées"],
            "remoteWork": "Non compatible (100% sur le sol du chantier).",
            "entrepreneurship": "Création d'une entreprise artisanale de pose de carrelage haute précision et de mosaïque de piscines à Saly ou Dakar."
        },
        "relatedJobSlugs": ["plaquiste", "peintre-en-batiment", "macon"],
        "connectedFamilies": ["artisanat-metiers-dart", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier Carreleur — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/carreleur.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "CAPEB — Métiers du carrelage", "url": "https://www.capeb.fr/", "source": "CAPEB"}
        ],
        "sources": ["L'Étudiant", "CAPEB", "Compagnons du Devoir"],
        "interests": ["artisanat-metiers-dart", "construire-fabriquer", "arts-design"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Les nouveaux carreaux de céramique pour les hôtels et villas de standing atteignent aujourd'hui des dimensions monumentales de 1,60 mètre de large sur 3,20 mètres de haut pour seulement 6 millimètres d'épaisseur !",
            "pourquoi": "Ces dalles géantes permettent d'habiller un mur de douche du sol au plafond sans le moindre joint, exigeant une virtuosité technique exceptionnelle de la part du carreleur.",
            "a_retenir": "L'artiste de la céramique qui habille nos sols pour des décennies."
        }
    }
]

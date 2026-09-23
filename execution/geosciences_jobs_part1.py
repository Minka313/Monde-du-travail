"""
Fiches métiers de la grande famille :
🌍 SCIENCES DE LA TERRE, GÉOSCIENCES & RESSOURCES NATURELLES (Partie 1 : 11 Métiers Centraux & Sous-Sol)

Source principale de référence :
Université de Poitiers - Faculté des Sciences Fondamentales et Appliquées (SFA) - Département Géosciences
https://sfa.univ-poitiers.fr/geosciences/debouches-professionnels/
"""

GEOSCIENCES_JOBS_PART1 = [
    {
        "id": "geologue",
        "slug": "geologue",
        "title": "Géologue / Docteur de la Planète",
        "aliases": ["Géoscientifique", "Géologue de terrain", "Ingénieur géologue", "Earth Scientist"],
        "icon": "🪨",
        "familyId": "sciences-terre-geosciences",
        "domain": "Géologie",
        "domainId": "geologie-fondamentale-appliquee",
        "subdomain": "Cartographie & Levés Géologiques",
        "shortDescription": "Véritable docteur de la Terre, le géologue étudie notre planète en surface et en profondeur pour comprendre son histoire, localiser ses ressources vitales et sécuriser les aménagements.",
        "longDescription": "Des entrailles de la Terre au laboratoire d'analyse de pointe, le géologue ausculte les structures rocheuses, délivre des diagnostics géodynamiques et prévient les risques terrestres. Sur le terrain, muni de son marteau de géologue, de sa boussole à clinomètre et de son carnet d'affleurement, il observe les formations sédimentaires, magmatiques et métamorphiques, mesure le pendage des failles et cartographie les strates. En laboratoire, il étudie les lames minces sous microscope polarisant, scrute la chimie minérale à la microsonde et au MEB, et recourt à la modélisation 3D et aux images satellitaires pour reconstituer l'architecture profonde des massifs rocheux.",
        "simpleDefinition": "Scientifique de terrain et de laboratoire qui étudie la composition, la structure et l'histoire de la Terre pour trouver des ressources (eau, minerais, énergie) et guider les constructions humaines.",
        "level": "Bac +5 (Master STPE / Diplôme d'Ingénieur Géologue)",
        "missions": [
            "Mener des campagnes de terrain approfondies : repérage d'affleurements, relevés stratigraphiques et tectoniques, échantillonnage de roches",
            "Établir des cartes géologiques détaillées et des coupes structurales prévisionnelles au 1/50 000 et 1/25 000",
            "Analyser au laboratoire la minéralogie et la texture des roches (lames minces, microscopie optique polarisante, MEB, diffraction des rayons X - DRX)",
            "Exploiter les outils informatiques de pointe : géostatistiques, SIG (QGIS, ArcGIS), télédétection satellitaire multispectrale et modélisation 3D de sous-sol (Move, Leapfrog)",
            "Délivrer des diagnostics géologiques d'aide à la décision pour les projets d'infrastructures (tunnels, barrages, ponts, autoroutes) et d'aménagement du territoire",
            "Participer à l'identification et à l'évaluation des ressources exploitables (zones aquifères, gisements minéraux, chaleur géothermique)"
        ],
        "workEnvironment": "Activité équilibrée entre campagnes de terrain en extérieur (montagnes, falaises, carrières, chantiers d'aménagement, forages) par tous les temps, et travail en laboratoire d'analyse physique/chimique et bureau d'études informatique.",
        "typicalDay": [
            { "time": "07h30", "activity": "Briefing sécurité et préparation de la sortie de terrain : carnet, GPS différentiel, boussole, marteau, loupe x10 et trousse de prélèvement" },
            { "time": "09h00", "activity": "Parcours d'affleurements rocheux, relevé des pendages des failles, identification des faciès sédimentaires et repérage GPS des contacts géologiques" },
            { "time": "12h30", "activity": "Déjeuner de terrain sur le massif et pointage des stations de mesure sur la carte d'affleurement" },
            { "time": "14h00", "activity": "Campagne d'échantillonnage de carottes de roche sur un chantier de forage de reconnaissance" },
            { "time": "16h30", "activity": "Retour au laboratoire : sciage des échantillons, préparation des lames minces et observation au microscope polarisant" },
            { "time": "18h00", "activity": "Numérisation des données dans le SIG et interpolation des failles sur le modèle 3D du sous-sol" }
        ],
        "companyRole": "Pillier technique transversal, le géologue éclaire les ingénieurs civils, les bureaux d'études environnementaux et les décideurs publics sur les caractéristiques réelles du sous-sol.",
        "skills": {
            "technical": [
                "Pétrographie, minéralogie et sédimentologie de terrain",
                "Tectonique des plaques et géologie structurale (analyse des failles, plis et schistosités)",
                "Interprétation de données géophysiques et de carottages",
                "Cartographie géologique et géoréférencement SIG",
                "Télédétection par imagerie satellite et modèles numériques de terrain (MNT)",
                "Microscopie optique et électronique (MEB, microsonde)"
            ],
            "human": [
                "Rigueur d'observation scientifique et esprit de déduction",
                "Excellente endurance physique et goût prononcé pour le plein air",
                "Capacité de synthèse tridimensionnelle dans l'espace et le temps",
                "Clarté rédactionnelle pour rédiger des avis d'experts exploitables",
                "Sens du travail en équipe pluridisciplinaire"
            ],
            "tools": ["Marteau Estwing", "Boussole clinomètre Freiberger / Brunton", "Microscope polarisant Leica", "QGIS / ArcGIS Pro", "Leapfrog Geo", "Surfer", "GPS différentiel Trimble"]
        },
        "geosciencesPedagogy": {
            "pathway": "Du terrain au laboratoire",
            "steps": ["🏞️ Terrain & affleurements", "📷 Observation macroscopique", "🗺️ Levés cartographiques", "🧪 Échantillonnage de carottes", "🔬 Analyse microscopique & MEB", "💻 Modélisation 3D structurale", "📋 Diagnostic & rapport géotechnique"]
        },
        "studies": {
            "pathway": [
                { "level": "Bac +3", "degree": "Licence Sciences de la Terre (ST) ou CMI Géosciences Appliquées (ex: Université de Poitiers, UFR SFA)" },
                { "level": "Bac +5", "degree": "Master Sciences de la Terre et des Planètes, Environnement (STPE) ou Diplôme d'Ingénieur (ENSG Nancy, UniLaSalle, Polytech Sorbonne)" },
                { "level": "Bac +8", "degree": "Doctorat en Géosciences (recherche académique, BRGM, IFPEN, CNRS)" }
            ],
            "schools": [
                { "name": "Université de Poitiers - Département Géosciences (UFR SFA, Licence ST, Master STPE, CMI)", "country": "France", "scope": "France" },
                { "name": "École Nationale Supérieure de Géologie (ENSG Nancy - Université de Lorraine)", "country": "France", "scope": "France" },
                { "name": "Institut des Sciences de la Terre (IST - Université Cheikh Anta Diop de Dakar UCAD)", "country": "Sénégal", "scope": "Sénégal" },
                { "name": "Département de Géologie - Faculté des Sciences et Techniques (FST - UCAD)", "country": "Sénégal", "scope": "Sénégal" }
            ],
            "certifications": ["Agrément d'expert géologue", "Habilitation sécurité chantiers et forages", "Certification SIG professionnelle"]
        },
        "career": {
            "sectors": ["Bureaux d'études géotechniques et environnementaux", "Services géologiques nationaux (BRGM, DMG)", "Compagnies énergétiques et minières", "Collectivités territoriales et aménagement", "Recherche et enseignement supérieur"],
            "companies": ["BRGM", "Antea Group", "Fugro", "Golder Associates / WSP", "Direction des Mines et de la Géologie du Sénégal", "Eiffage Génie Civil", "Suez Environnement"],
            "evolution": ["Chef de projet en ingénierie géologique", "Directeur d'études géotechniques", "Expert international en aléas sismiques et mouvements de terrain", "Directeur d'exploration régionale"],
            "pros": ["Métier passion alliant aventures de terrain et rigueur scientifique de pointe", "Impact direct sur la sécurité des populations et la gestion des ressources", "Forte employabilité internationale"],
            "cons": ["Campagnes de terrain exigeantes physiquement et parfois par météo rude", "Déplacements fréquents loin du domicile", "Responsabilité juridique et sécuritaire importante sur les avis de stabilité"]
        },
        "gettingStarted": "Effectuer des stages de terrain dès la licence (écoles de terrain en géologie structurale), maîtriser QGIS et apprendre à croiser les observations macroscopiques avec la chimie minérale.",
        "aiImpact": {
            "level": "Modéré / Transformation positive",
            "opportunities": ["Traitement automatisé d'imageries satellites et LiDAR par vision par ordinateur", "Modélisation géologique 3D assistée par apprentissage profond", "Classification automatisée des faciès minéraux"],
            "challenges": ["Nécessité de maîtriser les algorithmes géostatistiques et le traitement des nuages de points 3D"],
            "humanEdge": "L'œil du géologue sur la paroi rocheuse, son interprétation du contexte tectonique et sa capacité à reconstituer mentalement 500 millions d'années d'histoire géologique restent hors de portée d'un algorithme."
        },
        "africaContext": {
            "title": "Le Géologue au Sénégal et en Afrique de l'Ouest",
            "description": "En Afrique de l'Ouest, le géologue joue un rôle stratégique dans la cartographie des formations du socle birimien (Kédougou, Mali, Guinée), la gestion des grands bassins sédimentaires sénégalo-mauritaniens et la sécurisation des infrastructures majeures (Port de Ndayane, autoroutes, barrages de l'OMVS).",
            "keyInstitutions": [
                "Institut des Sciences de la Terre (IST - UCAD Dakar)",
                "Direction des Mines et de la Géologie (DMG - Ministère des Mines et de la Géologie)",
                "PETROSEN (Société des Pétroles du Sénégal)",
                "Laboratoires de l'IFAN Cheikh Anta Diop"
            ],
            "projects": [
                "Cartographie géologique et géophysique détaillée du Sénégal oriental",
                "Prospection des gisements de phosphates, zircon (GCO Diogo) et or",
                "Études structurales préalables aux grands aménagements côtiers et hydrauliques"
            ],
            "opportunities": "Très forte demande de diplômés de l'IST pour les projets d'aménagement minier, les bureaux d'études géotechniques de Dakar et l'exploration hydrogéologique."
        },
        "salary": {
            "france": {
                "entry": 30000,
                "mid": 42000,
                "expert": 60000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : Grilles BRGM, APEC & Université de Poitiers"
            },
            "senegal": {
                "entry": 400000,
                "mid": 850000,
                "expert": 1800000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés en bureau d'études géologiques et compagnies minières à Dakar et Thiès"
            }
        },
        "connectedFamilies": ["environnement-climat", "energie-renouvelable", "btp-architecture", "industrie-mecanique"],
        "relatedJobs": ["hydrogeologue", "pedologue", "geologue-minier", "geotechnicien", "geophysicien"],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Fiche Métier Géologue - Département Géosciences",
                "url": "https://sfa.univ-poitiers.fr/geosciences/debouches-professionnels/geologue/",
                "type": "metier"
            },
            {
                "organization": "BRGM",
                "title": "Métiers des sciences de la Terre et de l'environnement",
                "url": "https://www.brgm.fr",
                "type": "secteur"
            }
        ],
        "sourcePoitiers": True,
        "sourceBRGM": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Près de 80% des ressources utilisées au quotidien par l'humanité (eau potable, métaux, matériaux de construction, énergie) proviennent directement de prospections géologiques.",
            "pourquoi": "Le sol et le sous-sol renferment la mémoire de la planète et les matières premières indispensables à toute civilisation moderne.",
            "a_retenir": "Le géologue ne fait pas que contempler des roches anciennes : il est au cœur des défis de la transition écologique et de l'approvisionnement durable."
        }
    },
    {
        "id": "hydrogeologue",
        "slug": "hydrogeologue",
        "title": "Hydrogéologue / Spécialiste des Eaux Souterraines",
        "aliases": ["Ingénieur hydrogéologue", "Gestionnaire des ressources en eau", "Hydrologue du sous-sol", "Water Resources Geologist"],
        "icon": "💧",
        "familyId": "sciences-terre-geosciences",
        "domain": "Hydrogéologie & ressources en eau",
        "domainId": "hydrogeologie-ressources-eau",
        "subdomain": "Prospection Aquifère & Gestion des Nappes",
        "shortDescription": "Spécialiste de 'l'or bleu' souterrain, l'hydrogéologue recherche les nappes phréatiques et aquifères profonds, évalue leurs réserves, prévient les pollutions et sécurise l'eau potable.",
        "longDescription": "L'eau souterraine est la ressource la plus vitale et la plus vulnérable de notre planète. Véritable prospecteur et protecteur de l'or bleu, l'hydrogéologue recherche les zones aquifères riches en eau douce, quantifie les volumes exploitables par des essais de pompage et dresse les schémas d'exploitation rationnelle. Sur le terrain, il supervise les forages d'eau, observe la nature perméable des strates rocheuses et installe des piézomètres pour suivre les nappes. En laboratoire et en bureau d'études, il analyse les caractéristiques physico-chimiques des eaux, calcule les vitesses d'écoulement souterrain, modélise la vulnérabilité aux pollutions agricoles ou industrielles et délimite les périmètres de protection des captages.",
        "simpleDefinition": "Expert des eaux souterraines qui cherche les nappes d'eau sous la terre, contrôle leur pureté, calcule les quantités disponibles et empêche leur assèchement ou leur pollution.",
        "level": "Bac +5 (Master STPE Hydrogéologie / Ingénieur Polytech Eau)",
        "missions": [
            "Prospecter et identifier les couches géologiques aquifères (sables, calcaires fracturés, grès) propices à l'alimentation en eau",
            "Concevoir, dimensionner et superviser les chantiers de forages hydrauliques et de puits de captage",
            "Réaliser des essais de pompage par paliers pour calculer la transmissivité, le coefficient d'emmagasinement et le débit critique de la nappe",
            "Contrôler la qualité physico-chimique et bactériologique de l'eau (pH, nitrates, métaux lourds, salinité) en laboratoire",
            "Établir les périmètres de protection immédiate, rapprochée et éloignée autour des captages d'eau potable",
            "Modéliser numériquement les écoulements souterrains et le transport des polluants (logiciels Modflow, Feflow)",
            "Élaborer des plans de décontamination des nappes phréatiques polluées et participer aux SAGE (Schémas d'Aménagement et de Gestion des Eaux)"
        ],
        "workEnvironment": "Partage entre missions de terrain pour le suivi des forages, les jaugeages de sources et le relevé de piézomètres, et travail sur ordinateur en bureau d'études pour la modélisation hydrodynamique.",
        "typicalDay": [
            { "time": "08h00", "activity": "Départ sur un chantier de forage d'eau potable pour vérifier la coupe lithologique des déblais forés" },
            { "time": "09h30", "activity": "Suivi de la descente des tubes crépinés dans la formation aquifère et mise en place du massif de gravier filtrant" },
            { "time": "11h30", "activity": "Lancement d'un essai de pompage longue durée (72h) : relevé précis du rabattement de la nappe au sondeur piézométrique" },
            { "time": "14h00", "activity": "Prélèvement d'échantillons d'eau sous atmosphère contrôlée pour analyse isotopique et chimique" },
            { "time": "16h00", "activity": "Retour au bureau : saisie des courbes de descente et de remontée pour calculer la transmissivité de l'aquifère" },
            { "time": "17h30", "activity": "Mise à jour du modèle hydrodynamique Modflow pour simuler l'impact du pompage sur les puits voisins" }
        ],
        "companyRole": "Garant de la sécurité sanitaire et hydrique des territoires, l'hydrogéologue fournit les avis contraignants pour les permis de forer et les autorisations de captage.",
        "skills": {
            "technical": [
                "Hydrodynamique des milieux poreux et fissurés (Loi de Darcy, équations de Theis)",
                "Techniques de forage, tubage, cimentation et développement de forages",
                "Interprétation des essais de pompage et piézométrie",
                "Chimie des eaux souterraines et hydrochimie isotopique",
                "Modélisation numérique des écoulements souterrains (Modflow, Feflow)",
                "Réglementation des captages et de la police de l'eau"
            ],
            "human": [
                "Rigueur méthodologique et probité scientifique",
                "Sens aigu des responsabilités environnementales et de santé publique",
                "Capacité de négociation avec les agriculteurs, industriels et élus locaux",
                "Pédagogie pour expliquer la fragilité des nappes invisibles"
            ],
            "tools": ["Sonde piézométrique lumineuse", "Multiparamètre physico-chimique (pH, CE, T°)", "Modflow / Visual MODFLOW", "QGIS", "R / Python pour séries temporelles"]
        },
        "geosciencesPedagogy": {
            "pathway": "De l'eau souterraine à l'utilisateur",
            "steps": ["🌧️ Précipitations & recharge", "🌍 Infiltration à travers le sol", "💧 Stockage dans l'aquifère", "🔎 Prospection hydrogéophysique", "📊 Forage d'essai & pompage", "🧪 Analyses physico-chimiques", "⚠️ Périmètres de protection", "🚰 Distribution d'eau potable"]
        },
        "studies": {
            "pathway": [
                { "level": "Bac +3", "degree": "Licence Sciences de la Terre ou Licence Pro Usage et Qualité des Eaux (UQ-Eaux, Université de Poitiers)" },
                { "level": "Bac +5", "degree": "Master STPE Parcours Hydrogéologie et Transferts (Université de Poitiers) ou Master Eau & Environnement" },
                { "level": "Bac +5", "degree": "Diplôme d'Ingénieur en Eau et Environnement (Polytech Montpellier / Grenoble, ENGEES Strasbourg, IST Dakar)" }
            ],
            "schools": [
                { "name": "Université de Poitiers - Master Hydrogéologie et Transferts / Licence Pro UQ-Eaux (UFR SFA)", "country": "France", "scope": "France" },
                { "name": "ENGEES Strasbourg (École Nationale du Génie de l'Eau et de l'Environnement)", "country": "France", "scope": "France" },
                { "name": "Institut des Sciences de la Terre (IST - UCAD Dakar - Option Hydrogéologie)", "country": "Sénégal", "scope": "Sénégal" },
                { "name": "École Polytechnique de Thiès (EPT - Département Génie Civil & Hydraulique)", "country": "Sénégal", "scope": "Sénégal" }
            ],
            "certifications": ["Agrément d'hydrogéologue agréé en matière d'hygiène publique", "Habilitation Forage & Risque Chimique"]
        },
        "career": {
            "sectors": ["Bureaux d'études spécialisés en environnement et eau", "Compagnies de distribution d'eau potable (Veolia, Saur, SEN'EAU)", "Collectivités locales et agences de l'eau", "Organismes de recherche (BRGM, IRD)", "Agro-industrie et géothermie"],
            "companies": ["BRGM", "Antea Group", "Veolia Eau", "Suez", "SEN'EAU (Sénégal)", "OFOR (Office des Forages Ruraux)", "DGPRE Sénégal"],
            "evolution": ["Responsable de pôle hydrogéologie", "Directeur de régie des eaux", "Expert judiciaire en pollutions de nappes", "Consultant international pour l'ONU-Eau"],
            "pros": ["Métier à forte utilité sociale et vitale (accès à l'eau potable)", "Diversité terrain/modélisation mathématique", "Demande croissante face au changement climatique et aux sécheresses"],
            "cons": ["Contraintes climatiques extrêmes sur le terrain (chaleur, accès difficile)", "Gestion des crises de pollution d'eau sous forte pression publique", "Responsabilité sanitaire directe"]
        },
        "gettingStarted": "Privilégier un cursus combinant solide formation en géologie fondamentale et spécialisation en hydraulique souterraine et hydrochimie (ex: Master Hydrogéologie de Poitiers).",
        "aiImpact": {
            "level": "Élevé / Automatisation prédictive",
            "opportunities": ["Prédiction des niveaux de nappes par réseaux de neurones récurrents (LSTM)", "Détection précoce des anomalies de débit et d'intrusion saline par capteurs IoT", "Optimisation automatique des régimes de pompage"],
            "challenges": ["Nécessité de calibrer les modèles IA avec des données réelles de terrain précises"],
            "humanEdge": "La décision d'autoriser ou restreindre un captage et la compréhension des discontinuités géologiques locales non mesurées demeurent la prérogative humaine."
        },
        "africaContext": {
            "title": "L'Hydrogéologue au Sénégal : Enjeu Vital du Sahel",
            "description": "Au Sénégal et dans le Sahel, les eaux souterraines constituent plus de 85% de l'alimentation en eau potable et irriguée. L'hydrogéologue y étudie les grandes nappes stratégiques : nappe du Maestrichtien (qui alimente Touba et le bassin arachidier), nappes des sables quaternaires de Thiaroye et nappe du Paléocène de Sébikotane.",
            "keyInstitutions": [
                "DGPRE (Direction de la Gestion et de la Planification des Ressources en Eau)",
                "OFOR (Office des Forages Ruraux)",
                "Institut des Sciences de la Terre (IST - UCAD)",
                "IRD Dakar (Institut de Recherche pour le Développement)"
            ],
            "projects": [
                "Gestion durable de la nappe profonde du Maestrichtien",
                "Lutte contre la salinisation des terres et des nappes dans les estuaires du Sine-Saloum et de Casamance",
                "Programme national de forages pastoraux et agricoles du PUDC"
            ],
            "opportunities": "Postes réguliers dans les ONG de développement, les bureaux d'études en hydraulique villageoise et à l'OFOR."
        },
        "salary": {
            "france": {
                "entry": 24000,
                "mid": 36000,
                "expert": 50000,
                "currency": "EUR",
                "period": "an",
                "note": "Rémunération de 1 700 à 3 500 € brut/mois (Source : Université de Poitiers Géosciences)"
            },
            "senegal": {
                "entry": 350000,
                "mid": 750000,
                "expert": 1700000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés en bureau d'hydraulique et projets OFOR à Dakar et en régions"
            }
        },
        "connectedFamilies": ["environnement-climat", "agriculture-agritech", "energie-renouvelable", "btp-architecture"],
        "relatedJobs": ["geologue", "pedologue", "ingenieur-geotechnique", "expert-sites-sols-pollues", "ingenieur-geothermie"],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Fiche Métier Hydrogéologue - Département Géosciences",
                "url": "https://sfa.univ-poitiers.fr/geosciences/debouches-professionnels/hydrogeologue/",
                "type": "metier"
            },
            {
                "organization": "Université de Poitiers",
                "title": "Master STPE Parcours Hydrogéologie et Transferts",
                "url": "https://sfa.univ-poitiers.fr/geosciences/formations/master-stpe-parcours-hydrogeologie-et-transferts/",
                "type": "formation"
            }
        ],
        "sourcePoitiers": True,
        "sourceBRGM": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Plus de 98% de l'eau douce liquide sur Terre est contenue sous nos pieds, dans les nappes souterraines.",
            "pourquoi": "Contrairement aux rivières et lacs visibles qui s'évaporent rapidement, les aquifères souterrains agissent comme d'immenses réservoirs naturels régulés sur des siècles.",
            "a_retenir": "L'hydrogéologue gère un patrimoine invisible dont dépend la survie des villes, des cultures et des écosystèmes."
        }
    },
    {
        "id": "pedologue",
        "slug": "pedologue",
        "title": "Pédologue / Spécialiste des Sols",
        "aliases": ["Scientifique du sol", "Agronome pédologue", "Expert pédologique", "Soil Scientist"],
        "icon": "🌱",
        "familyId": "sciences-terre-geosciences",
        "domain": "Sciences du sol & pédologie",
        "domainId": "sciences-sol-pedologie",
        "subdomain": "Étude des Horizons & Fertilité des Terres",
        "shortDescription": "Spécialiste de la fine pellicule vivante sous nos pieds, le pédologue analyse la structure, la chimie et l'activité biologique des sols pour guider l'agriculture, prévenir l'érosion et assainir l'environnement.",
        "longDescription": "Le sol n'est pas de la terre inerte : c'est un milieu vivant, complexe et fragile, à l'interface vitale entre l'atmosphère, la roche mère, l'eau et le vivant. Le pédologue est le scientifique de ce patrimoine non renouvelable à l'échelle d'une vie humaine. Sur le terrain, il creuse des fosses pédologiques, sonde à la tarière et décrit la succession des horizons (couleur, texture, structure, humidité, enracinement et activité des vers de terre). Au laboratoire, il dose le pH, la matière organique, la capacité d'échange cationique et recherche les contaminants (pesticides, métaux lourds). Ses diagnostics sont déterminants pour conseiller les agriculteurs, sécuriser les chantiers d'aménagement contre les crues et optimiser le traitement des déchets.",
        "simpleDefinition": "Scientifique qui analyse la terre agricole et naturelle pour savoir si le sol est fertile, vivant, pollué ou menacé par l'érosion, et qui aide à le cultiver durablement.",
        "level": "Bac +5 (Master Sciences du Sol / Ingénieur Agronome)",
        "missions": [
            "Réaliser des carottages à la tarière et ouvrir des fosses pédologiques pour décrire les profils de sol",
            "Caractériser les propriétés physiques du sol : texture (argiles, limons, sables), structure, porosité et perméabilité à l'eau",
            "Analyser en laboratoire les propriétés chimiques et biologiques : pH, taux d'humus, azote, phosphore, métaux lourds et microfaune",
            "Dresser des cartes pédologiques précises et intégrer les types de sols dans les bases de données géographiques (SIG)",
            "Conseiller les exploitants agricoles sur les rotations culturales, les amendements, l'irrigation et la conservation des sols",
            "Évaluer l'impact des crues, l'aptitude des sols à l'épuration naturelle des effluents et les risques de battance ou d'érosion",
            "Fournir des avis réglementaires pour les plans d'urbanisme (PLU) afin de préserver les meilleures terres agricoles"
        ],
        "workEnvironment": "Travail de terrain en milieu agricole, forestier ou périurbain (creusement de profils, prélèvements à la tarière sous toute météo), complété par des analyses en laboratoire d'agronomie et du travail cartographique SIG.",
        "typicalDay": [
            { "time": "08h00", "activity": "Arrivée sur une exploitation agricole pour une campagne de diagnostic agro-pédologique parcellaire" },
            { "time": "09h00", "activity": "Ouverture d'une fosse pédologique à la mini-pelle (profondeur 1,80 m) et nettoyage de la paroi d'observation" },
            { "time": "10h30", "activity": "Description minutieuse des horizons : mesure de l'épaisseur de la terre végétale, test à l'acide pour le calcaire, charte de couleurs Munsell" },
            { "time": "12h30", "activity": "Prélèvement d'échantillons de sol par horizon dans des sachets étiquetés pour analyses de laboratoire" },
            { "time": "14h30", "activity": "Série de 15 sondages rapides à la tarière manuelle pour vérifier l'extension spatiale du type de sol identifié" },
            { "time": "16h30", "activity": "Retour au laboratoire : séchage, tamisage à 2 mm et préparation des réactifs pour dosage du pH et du carbone organique" },
            { "time": "18h00", "activity": "Élaboration de la carte des unités pédologiques sur logiciel SIG pour le rapport d'expertise agronomique" }
        ],
        "companyRole": "Pont indispensable entre la géologie et l'agronomie, le pédologue permet d'adapter les pratiques culturales et les aménagements aux réalités physiques et biologiques du sol.",
        "skills": {
            "technical": [
                "Morphologie et classification pédologique (Référentiel Pédologique Français, WRB)",
                "Chimie des colloïdes du sol et biochimie de la matière organique",
                "Physique des transferts d'eau et de nutriments dans la zone non saturée",
                "Analyses agronomiques (CEC, saturation en bases, granulométrie par sédimentométrie)",
                "Cartographie numérique des sols et géostatistiques appliquées",
                "Diagnostic des pollutions diffuses et industrielles"
            ],
            "human": [
                "Sens aigu de l'observation tactile et visuelle sur le terrain",
                "Goût pour le travail manuel et extérieur",
                "Sens du dialogue avec les agriculteurs et aménageurs",
                "Capacité de synthèse interdisciplinaire (physique, chimie, biologie)"
            ],
            "tools": ["Tarière pédologique Edelman", "Couteau de pédologue", "Charte des couleurs Munsell", "Pénétromètre / Infiltromètre", "pH-mètre de terrain", "QGIS"]
        },
        "geosciencesPedagogy": {
            "pathway": "De la roche au sol fertile",
            "steps": ["🪨 Altération de la roche mère", "🍂 Apport de matière organique", "🐛 Humification & brassage biologique", "🔎 Fosse pédologique & horizons", "🧪 Analyses physico-chimiques", "🌾 Cartographie agronomique", "🌱 Pratiques culturales durables"]
        },
        "studies": {
            "pathway": [
                { "level": "Bac +3", "degree": "Licence Sciences de la Terre / Sciences de la Vie ou Licence Pro Agronomie" },
                { "level": "Bac +5", "degree": "Master Sciences du Sol, Gestion de l'Environnement (STPE Université de Poitiers, AgroParisTech, ENSAT)" },
                { "level": "Bac +5", "degree": "Diplôme d'Ingénieur Agronome (Institut Agro, AgroParisTech, ENSA Thiès)" }
            ],
            "schools": [
                { "name": "Université de Poitiers - Faculté des Sciences Fondamentales et Appliquées (Licence ST, Master STPE)", "country": "France", "scope": "France" },
                { "name": "Institut Agro (Montpellier / Rennes - Pédologie appliquée)", "country": "France", "scope": "France" },
                { "name": "École Nationale Supérieure d'Agriculture (ENSA de Thiès - Université Iba Der Thiam)", "country": "Sénégal", "scope": "Sénégal" },
                { "name": "Institut des Sciences de l'Environnement (ISE - UCAD Dakar)", "country": "Sénégal", "scope": "Sénégal" }
            ],
            "certifications": ["Certification Pédologue agréé AFES (Association Française pour l'Étude du Sol)", "Certification Qualité Sols"]
        },
        "career": {
            "sectors": ["Chambres d'agriculture et instituts techniques (Arvalis, Terres Inovia)", "Bureaux d'études en environnement et aménagement rural", "Recherche agronomique (INRAE, IRD, ISRA)", "Collectivités territoriales et parcs naturels", "Coopératives agricoles et viticoles"],
            "companies": ["INRAE", "Bureaux d'études agro-environnementaux", "ISRA (Institut Sénégalais de Recherches Agricoles)", "Sociétés sucrières et agro-industrielles"],
            "evolution": ["Chef de projet agro-pédologie", "Directeur d'agence d'ingénierie environnementale", "Chercheur en biogéochimie des sols", "Expert foncier et agricole"],
            "pros": ["Métier au cœur des enjeux d'alimentation mondiale et de neutralité carbone", "Contact direct avec la terre et les acteurs ruraux", "Expertise rare très recherchée"],
            "cons": ["Pénibilité physique du creusement et des forages à la tarière par tous temps", "Activité parfois saisonnière liée au calendrier agricole", "Complexité des sols très hétérogènes"]
        },
        "gettingStarted": "S'investir dans l'Association Française pour l'Étude du Sol (AFES), participer à des concours de jugement de sols et maîtriser les logiciels de cartographie SIG.",
        "aiImpact": {
            "level": "Modéré / Aide à la cartographie",
            "opportunities": ["Digital Soil Mapping (cartographie prédictive des sols par machine learning)", "Télédétection hyperspectrale par drone pour mesurer le carbone du sol"],
            "challenges": ["Nécessité de nombreuses fosses réelles pour étalonner les modèles IA"],
            "humanEdge": "La description tactile d'un profil de sol et l'évaluation de sa structure vivante exigent l'expérience sensorielle directe de l'expert."
        },
        "africaContext": {
            "title": "Le Pédologue au Sénégal : Rempart contre la Dégradation des Terres",
            "description": "Au Sénégal, le pédologue est en première ligne face aux défis de salinisation des terres du bassin du Saloum, d'acidification des sols de Casamance et de désertification dans le Ferlo. Il travaille avec l'ISRA, l'ENSA de Thiès et l'ANCAR pour restaurer la fertilité des sols du bassin arachidier et sécuriser la Grande Muraille Verte.",
            "keyInstitutions": [
                "ISRA (Institut Sénégalais de Recherches Agricoles - Laboratoire des Sols de Bel-Air)",
                "ENSA de Thiès (École Nationale Supérieure d'Agriculture)",
                "CSE (Centre de Suivi Écologique de Dakar)",
                "Agence Sénégalaise de la Reforestation et de la Grande Muraille Verte"
            ],
            "projects": [
                "Projets de récupération des terres salées (tannes) du Sine-Saloum",
                "Cartographie des sols fertiles de la Vallée du fleuve Sénégal (SAED)",
                "Suivi des stocks de carbone et lutte contre l'érosion éolienne"
            ],
            "opportunities": "Recrutements dans les projets de développement agricole, les agences d'aménagement de vallées et les ONG environnementales."
        },
        "salary": {
            "france": {
                "entry": 26000,
                "mid": 38000,
                "expert": 52000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : Chambres d'agriculture, INRAE & Université de Poitiers"
            },
            "senegal": {
                "entry": 300000,
                "mid": 650000,
                "expert": 1400000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés en agronomie et projets de développement rural à Thiès et Dakar"
            }
        },
        "connectedFamilies": ["agriculture-agritech", "environnement-climat", "foret-bois", "amenagement-territoire"],
        "relatedJobs": ["geologue", "hydrogeologue", "expert-sites-sols-pollues", "agronome", "geomaticien-cartographe-geologue"],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Fiche Métier Pédologue - Département Géosciences",
                "url": "https://sfa.univ-poitiers.fr/geosciences/debouches-professionnels/pedologue/",
                "type": "metier"
            },
            {
                "organization": "Association Française pour l'Étude du Sol (AFES)",
                "title": "Les métiers de la science du sol",
                "url": "https://www.afes.fr",
                "type": "secteur"
            }
        ],
        "sourcePoitiers": True,
        "sourceBRGM": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Il faut entre 100 et 1 000 ans à la nature pour former seulement 1 centimètre de sol arable.",
            "pourquoi": "Le sol résulte de la très lente désagrégation de la roche mère sous l'action du climat et des micro-organismes vivants.",
            "a_retenir": "Un sol détruit par l'érosion ou la pollution est perdu pour des générations. Le pédologue est le garant de cette ressource irremplaçable."
        }
    },
    {
        "id": "geologue-minier",
        "slug": "geologue-minier",
        "title": "Géologue Minier / Explorateur des Ressources Minérales",
        "aliases": ["Ingénieur géologue minier", "Géologue d'exploration minière", "Mining Geologist", "Resource Geologist"],
        "icon": "⛏️",
        "familyId": "sciences-terre-geosciences",
        "domain": "Géologie minière & ressources minérales",
        "domainId": "geologie-miniere-ressources",
        "subdomain": "Prospection & Évaluation des Gisements",
        "shortDescription": "Explorateur des profondeurs, le géologue minier identifie, modélise et quantifie les gisements de matières premières indispensables à l'industrie et à la transition énergétique (or, cuivre, lithium, fer, phosphates).",
        "longDescription": "Nos sociétés contemporaines ont un besoin croissant de matières premières d'origine minérale pour fabriquer technologies numériques, batteries, véhicules électriques et infrastructures. Géologue minier, vous auscultez les sous-sols pour détecter et valoriser ces trésors cachés. Votre mission suit une méthodologie rigoureuse : 1. Documentation préalable sur les contextes géologiques, réglementaires et fiscaux ; 2. Prospection sur photos aériennes, satellites et reconnaissance terrain ; 3. Identification des anomalies et échantillonnage géochimique ; 4. Campagne de forages carottés pour intercepter le minerai ; 5. Estimation géostatistique des réserves et modélisation 3D du gisement ; 6. Suivi géologique de l'exploitation et contrôle des teneurs en fosse ou sous terre.",
        "simpleDefinition": "Professionnel qui recherche dans le sous-sol les gisements de métaux et minéraux précieux (cuivre, or, lithium, fer), calcule leur rentabilité et guide leur extraction dans le respect des normes.",
        "level": "Bac +5 (Ingénieur Géologue / Master Géologie Minière)",
        "missions": [
            "Rassembler et analyser la documentation géologique, historique et réglementaire préalable à toute campagne",
            "Conduire des campagnes de prospection marteau en main, sur affleurements et tranchées de reconnaissance",
            "Diriger les campagnes de sondages carottés (Core Logging, carottothèque, orientation des carottes)",
            "Échantillonner le minerai, envoyer au laboratoire d'analyses géochimiques et interpréter les teneurs utiles",
            "Construire le modèle géologique 3D du gisement (logiciels Datamine, Micromine, Leapfrog Geo)",
            "Calculer les réserves minérales selon les normes internationales certifiées (JORC, NI 43-101)",
            "Collaborer étroitement avec les ingénieurs d'extraction, métallurgistes et équipes HSE pour minimiser l'empreinte environnementale"
        ],
        "workEnvironment": "Alternance entre missions d'exploration en zones reculées (brousse, désert, forêt, haute montagne) sous tente ou base-vie minière, et travail en bureau d'études informatique pour le traitement géostatistique.",
        "typicalDay": [
            { "time": "06h30", "activity": "Départ de la base-vie vers les plateformes de forage carotté sur le permis minier" },
            { "time": "08h00", "activity": "Contrôle des carottiers avec l'équipe de foreurs : mesure des taux de récupération et positionnement des caisses à carottes" },
            { "time": "10h30", "activity": "Séance de diagraphie (Core Logging) à la carottothèque : description lithologique, altérations hydrothermales et minéralisation" },
            { "time": "13h00", "activity": "Déjeuner à la cantine de la mine et échange avec l'ingénieur de planification sur les teneurs du jour" },
            { "time": "14h30", "activity": "Sciage des carottes de minerai en deux moitiés : une moitié archivée, une moitié envoyée pour analyse en laboratoire" },
            { "time": "16h30", "activity": "Saisie des logs dans la base de données minière et vérification des contrôles qualité (QA/QC)" },
            { "time": "18h30", "activity": "Actualisation du modèle d'enveloppe minéralisée sur logiciel 3D pour orienter le forage du lendemain" }
        ],
        "companyRole": "Premier maillon de la chaîne industrielle extractive, il engage la viabilité économique de projets de plusieurs centaines de millions d'euros par ses estimations de teneurs.",
        "skills": {
            "technical": [
                "Gîtologie, métallogénie et processus hydrothermaux",
                "Techniques de diagraphie de carottes (Core Logging) et géochimie minière",
                "Géostatistiques linéaires et non linéaires (krigeage, variogrammes)",
                "Modélisation géologique 3D de gisements (Micromine, Leapfrog, Surpac, Datamine)",
                "Normes internationales de déclaration de réserves (Code JORC, norme NI 43-101)",
                "Gestion environnementale des stériles miniers et résidus"
            ],
            "human": [
                "Grand sens de l'adaptation et résistance physique en conditions isolées",
                "Rigueur absolue dans l'échantillonnage et la traçabilité des données",
                "Leadership pour diriger des équipes de techniciens et de foreurs",
                "Sensibilité aux impacts sociaux et communautaires (RSE)"
            ],
            "tools": ["Spectromètre portable XRF (pXRF)", "Marteau de géologue", "Loupe x20", "Logiciels Micromine / Leapfrog / Datamine", "Compteur Geiger / Scintillomètre"]
        },
        "geosciencesPedagogy": {
            "pathway": "De la roche à la ressource minérale",
            "steps": ["🪨 Étude géotectonique", "🔎 Télédétection & géochimie de sol", "🗺️ Identification d'anomalies", "⛏️ Forages carottés profonds", "🧪 Analyses de laboratoire (teneurs)", "📊 Modélisation géostatistique 3D", "🏭 Planification minière responsable"]
        },
        "studies": {
            "pathway": [
                { "level": "Bac +3", "degree": "Licence Sciences de la Terre (Université de Poitiers) ou BTS Géologie appliquée" },
                { "level": "Bac +5", "degree": "Diplôme d'Ingénieur Géologue Minier (ENSG Nancy, UniLaSalle, IST UCAD Dakar)" },
                { "level": "Bac +5", "degree": "Master STPE Géosciences Appliquées ou Parcours Métaux Critiques" }
            ],
            "schools": [
                { "name": "Université de Poitiers - Faculté des Sciences (Licence ST, Master STPE, CMI Géosciences)", "country": "France", "scope": "France" },
                { "name": "École Nationale Supérieure de Géologie (ENSG Nancy)", "country": "France", "scope": "France" },
                { "name": "Institut des Sciences de la Terre (IST - UCAD Dakar - Département Mines & Géologie)", "country": "Sénégal", "scope": "Sénégal" },
                { "name": "École Polytechnique de Thiès (EPT - Département Mines)", "country": "Sénégal", "scope": "Sénégal" }
            ],
            "certifications": ["Qualification de 'Personne Compétente' (Competent Person JORC / Qualified Person QP)", "Certificat d'Exploration Minière"]
        },
        "career": {
            "sectors": ["Compagnies minières internationales (or, fer, lithium, phosphates, cuivre)", "Cabinets d'audit et de conseil minier", "Carrières de granulats et cimenteries", "Services géologiques d'État"],
            "companies": ["BRGM", "Eramet", "Anglo American", "Rio Tinto", "Endeavour Mining (Sénégal)", "Sabodala Gold Operations", "Grande Côte Operations (GCO)", "ICS Mboro"],
            "evolution": ["Chef de projet exploration", "Surintendant géologie de mine", "Directeur des ressources minérales", "Consultant international certifié QP"],
            "pros": ["Aventure professionnelle internationale et travail au cœur de la géologie vivante", "Rémunérations très attractives avec primes d'expatriation", "Rôle central dans l'approvisionnement des métaux critiques de la transition"],
            "cons": ["Éloignement familial prolongé (cycles fly-in fly-out 4 semaines / 2 semaines)", "Conditions de vie parfois rudes en camps isolés", "Sensibilité forte aux fluctuations des cours mondiaux des métaux"]
        },
        "gettingStarted": "Effectuer des stages de terrain en carottothèque minière et maîtriser impérativement l'anglais technique et un logiciel de modélisation 3D (Leapfrog ou Micromine).",
        "aiImpact": {
            "level": "Élevé / Révolution de la prospection",
            "opportunities": ["Ciblage d'anomalies minérales par analyse conjointe d'imagerie hyperspectrale et géophysique via deep learning", "Reconnaissance automatisée des textures de carottes de forage par ordinateur", "Optimisation géostatistique prédictive"],
            "challenges": ["Besoin de géologues formés aux data sciences et au traitement des grands volumes de données de sondages"],
            "humanEdge": "La vérification sur le terrain et la compréhension des contrôles structuraux majeurs restent l'apanage exclusif du géologue de mine."
        },
        "africaContext": {
            "title": "Le Géologue Minier au Sénégal : Moteur Économique Majeur",
            "description": "Le Sénégal est une grande nation minière d'Afrique de l'Ouest : or de Sabodala et Mako (Kédougou), zircon et ilménite de Diogo (Grande Côte Operations - GCO), phosphates de Taïba et Matam, et calcaire cimentier (SOCOCIM, Dangote, Ciments du Sahel). Les diplômés de l'IST de Dakar y sont reconnus comme une élite de terrain.",
            "keyInstitutions": [
                "Direction des Mines et de la Géologie (DMG)",
                "Institut des Sciences de la Terre (IST - UCAD)",
                "Chambre des Mines du Sénégal",
                "Compagnies opératrices : Sabodala Gold, GCO, ICS, Petowal Mining"
            ],
            "projects": [
                "Exploration des corridors aurifères birimiens du Sénégal oriental",
                "Développement des gisements de fer de la Falémé",
                "Valorisation des terres rares et minéraux lourds des cordons dunaires"
            ],
            "opportunities": "Salaires très élevés pour les ingénieurs diplômés capables de superviser des forages et de modéliser les blocs de minerai."
        },
        "salary": {
            "france": {
                "entry": 34000,
                "mid": 50000,
                "expert": 75000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : APEC, compagnies minières & grilles internationales"
            },
            "senegal": {
                "entry": 600000,
                "mid": 1200000,
                "expert": 2800000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés sur les sites miniers de Kédougou, Thiès et Dakar (avec primes de camp)"
            }
        },
        "connectedFamilies": ["industrie-mecanique", "energie-renouvelable", "environnement-climat", "commerce-marketing"],
        "relatedJobs": ["geologue", "mineralogiste", "ingenieur-materiaux-geosciences", "geophysicien", "ingenieur-geotechnique"],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Fiche Métier Géologue minier - Département Géosciences",
                "url": "https://sfa.univ-poitiers.fr/geosciences/debouches-professionnels/geologue-minier/",
                "type": "metier"
            },
            {
                "organization": "Ministère des Mines et de la Géologie du Sénégal",
                "title": "Cadre de l'exploration minière et données du secteur",
                "url": "https://minesgeologie.gouv.sn",
                "type": "institutionnel"
            }
        ],
        "sourcePoitiers": True,
        "sourceBRGM": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Une seule batterie de voiture électrique nécessite en moyenne 10 kg de lithium, 35 kg de nickel, 20 kg de manganèse et 14 kg de cobalt.",
            "pourquoi": "Ces métaux ne se trouvent que dans des contextes géologiques très particuliers issus de millions d'années d'enrichissement hydrothermal et magmatique.",
            "a_retenir": "Sans géologue minier pour localiser ces gisements, la transition énergétique mondiale vers le zéro carbone serait techniquement impossible."
        }
    },
    {
        "id": "ingenieur-materiaux-geosciences",
        "slug": "ingenieur-materiaux-geosciences",
        "title": "Ingénieur en Géomatériaux & Minéraux Industriels",
        "aliases": ["Ingénieur matériaux minéraux", "Spécialiste géomatériaux", "Ingénieur R&D minéraux", "Materials and Minerals Engineer"],
        "icon": "🧱",
        "familyId": "sciences-terre-geosciences",
        "domain": "Géomatériaux & matériaux",
        "domainId": "geomateriaux-materiaux-innovants",
        "subdomain": "Valorisation Minérale & Nouveaux Matériaux",
        "shortDescription": "Depuis l'élaboration et la conception jusqu'à l'application industrielle, il conçoit et optimise des matériaux à base minérale : argiles de pointe, céramiques, ciments bas carbone et nanomatériaux.",
        "longDescription": "De l'âge de pierre à l'ère des nanomatériaux, les substances minérales sont au cœur de toutes les révolutions technologiques. Spécialiste de la transformation et de la valorisation de la matière minérale, l'ingénieur en géomatériaux intervient sur toute la chaîne, depuis l'extraction des matières premières géologiques jusqu'à la formulation de produits finis performants. Il conçoit des céramiques haute température, des liants hydrauliques décarbonés, des argiles fonctionnalisées pour filtrer les pollutions et des écomatériaux de construction. Au laboratoire, il étudie la microstructure, mesure la résistance mécanique et thermique, et utilise la modélisation pour simuler les comportements lors de l'utilisation industrielle.",
        "simpleDefinition": "Ingénieur qui transforme les roches, sables et argiles en matériaux modernes et écologiques pour la construction, l'industrie, l'aéronautique et la dépollution.",
        "level": "Bac +5 (Master STPE Matériaux-Minéraux / Diplôme d'Ingénieur Céramique)",
        "missions": [
            "Caractériser les propriétés physico-chimiques des minéraux industriels (argiles, zéolithes, silice, carbonates, feldspaths)",
            "Développer de nouveaux géomatériaux bas carbone (géopolymères, ciments à faible empreinte, briques de terre stabilisée)",
            "Optimiser les procédés d'élaboration thermique et mécanique (broyage fin, frittage, atomisation, extrusion)",
            "Formuler des minéraux actifs pour des applications environnementales (adsorbants pour la dépollution de sols et d'eaux)",
            "Mener des essais de résistance mécanique, de durabilité aux agressions chimiques et de tenue aux chocs thermiques",
            "Valoriser les résidus et stériles de carrières ou de mines dans une logique d'économie circulaire et de recyclage",
            "Assurer l'interface technique entre les fournisseurs de matières premières minérales et les industries utilisatrices"
        ],
        "workEnvironment": "Travail en laboratoire de caractérisation des matériaux (fours haute température, presses, diffractomètres, rhéomètres) et bureau d'études, avec des visites régulières sur sites d'usines céramiques, cimenteries et carrières.",
        "typicalDay": [
            { "time": "08h30", "activity": "Revue des résultats d'essais mécaniques sur une nouvelle formulation de béton intégrant des sous-produits d'argiles calcinées" },
            { "time": "10h00", "activity": "Caractérisation au laboratoire : mesure de surface spécifique (BET) et analyse par diffraction des rayons X (DRX) sur des poudres minérales" },
            { "time": "12h00", "activity": "Déjeuner de travail avec le chef de produit sur le cahier des charges d'un carreau céramique anti-salissure" },
            { "time": "14h00", "activity": "Pilotage d'un essai de frittage en four industriel à 1 200 °C et suivi des retraits dimensionnels" },
            { "time": "16h00", "activity": "Analyse au microscope électronique à balayage (MEB) de l'interface entre agrégats et matrice liante" },
            { "time": "17h30", "activity": "Rédaction du rapport de synthèse pour le dépôt d'un brevet sur un écomatériau isolant biosourcé" }
        ],
        "companyRole": "Innovateur technologique, il crée les matériaux de demain alliant haute performance mécanique et réduction drastique de l'impact carbone.",
        "skills": {
            "technical": [
                "Cristallochimie et minéralogie des argiles et silicates",
                "Techniques d'analyse des poudres (DRX, fluorescence X, BET, granulométrie laser)",
                "Procédés céramiques et liants hydrauliques (ciments, chaux, plâtres)",
                "Microscopie électronique et microanalyse élémentaire (MEB-EDX)",
                "Rhéologie des suspensions et comportement mécanique des solides",
                "Éco-conception et analyse de cycle de vie (ACV) des matériaux"
            ],
            "human": [
                "Curiosité scientifique et esprit d'innovation appliquée",
                "Rigueur expérimentale et méthodologie de laboratoire",
                "Aptitude au travail collaboratif avec les équipes de production",
                "Sensibilisation aiguë à l'impact environnemental des procédés"
            ],
            "tools": ["Diffractomètre Rayons X (DRX)", "Microscope électronique (MEB-EDX)", "Analyseur de surface BET", "Fours haute température Nabertherm", "Presses de compression", "AutoCAD / SolidWorks"]
        },
        "geosciencesPedagogy": {
            "pathway": "De la roche au matériau innovant",
            "steps": ["🪨 Extraction minérale sélective", "🧪 Broyage & caractérisation DRX", "⚗️ Formulation physico-chimique", "🔥 Frittage & mise en forme", "🔬 Contrôle microscopique MEB", "🧱 Essais de résistance mécanique", "🏗️ Application industrielle durable"]
        },
        "studies": {
            "pathway": [
                { "level": "Bac +3", "degree": "Licence Sciences de la Terre ou Licence Physique-Chimie (Université de Poitiers)" },
                { "level": "Bac +5", "degree": "Master EUR STPE Parcours Matériaux-Minéraux (Université de Poitiers - EUR INTREE)" },
                { "level": "Bac +5", "degree": "Diplôme d'Ingénieur en Céramique ou Matériaux (ENSCI Limoges, Polytech, Mines Nancy)" }
            ],
            "schools": [
                { "name": "Université de Poitiers - Master EUR Matériaux-Minéraux / EUR INTREE (UFR SFA)", "country": "France", "scope": "France" },
                { "name": "ENSCI Limoges - École Nationale Supérieure de Céramique Industrielle", "country": "France", "scope": "France" },
                { "name": "École Supérieure Polytechnique de Dakar (ESP - Département Génie Mécanique & Matériaux)", "country": "Sénégal", "scope": "Sénégal" },
                { "name": "Institut des Sciences de la Terre (IST - UCAD)", "country": "Sénégal", "scope": "Sénégal" }
            ],
            "certifications": ["Certification Contrôle Qualité Matériaux", "Habilitation Rayons X (radioprotection)"]
        },
        "career": {
            "sectors": ["Industrie des matériaux de construction (cimenteries, briques, tuiles)", "Céramique technique et réfractaires", "Industrie verrière et packaging minéral", "Centres de R&D et laboratoires d'expertise", "Métallurgie et valorisation des sous-produits"],
            "companies": ["Saint-Gobain", "LafargeHolcim", "Imerys", "SOCOCIM Industries (Sénégal)", "Dangote Cement", "Ciments du Sahel", "Vicat"],
            "evolution": ["Responsable R&D matériaux", "Directeur technique de site cimentier", "Chef de département qualité et formulations", "Expert consultant international"],
            "pros": ["Secteur en pleine réinvention grâce aux exigences de décarbonation", "Grandes passerelles vers la recherche de pointe", "Diversité des applications industrielles"],
            "cons": ["Contraintes d'ambiance d'usine (poussière, bruit) lors des essais industriels", "Cycles d'homologation longs pour les nouveaux matériaux de construction", "Exigence d'extrême précision sur les formulations"]
        },
        "gettingStarted": "Choisir le cursus Master Matériaux-Minéraux de l'Université de Poitiers (École Universitaire de Recherche INTREE) pour bénéficier de stages intensifs en laboratoire et de partenariats industriels.",
        "aiImpact": {
            "level": "Élevé / Matériaux par design prédictif",
            "opportunities": ["Criblage à haut débit de compositions cristallines par intelligence artificielle (Materials Informatics)", "Simulation atomistique assistée par réseaux de neurones pour prédire les propriétés de frittage", "Optimisation des recettes de mélanges minéraux"],
            "challenges": ["Nécessité de valider expérimentalement chaque prédiction par des essais physiques réels"],
            "humanEdge": "La compréhension intime des interactions de surface et la créativité dans la valorisation de résidus locaux restent une expertise humaine irremplaçable."
        },
        "africaContext": {
            "title": "L'Ingénieur Matériaux au Sénégal : L'Essor des Matériaux Locaux et du Ciment",
            "description": "Le Sénégal possède un puissant tissu de production cimentière (SOCOCIM à Rufisque, Dangote à Pout, Ciments du Sahel à Kirène) ainsi qu'un immense potentiel de matériaux locaux (argiles de Sébikotane, basaltes de Diack, terres stabilisées). L'ingénieur géomatériaux y conçoit des matériaux résistants au climat sahélien à faible impact carbone.",
            "keyInstitutions": [
                "SOCOCIM Industries (Groupe Vicat)",
                "Dangote Cement Sénégal",
                "Laboratoire du Bâtiment et des Travaux Publics (LBTP Dakar)",
                "ESP Dakar (Département Génie Civil & Matériaux)"
            ],
            "projects": [
                "Développement de ciments bas carbone incorporant des pouzzolanes et argiles locales",
                "Formulation d'enduits et briques de terre comprimée (BTC) pour l'isolation thermique",
                "Valorisation des stériles des carrières de Thiès"
            ],
            "opportunities": "Recrutement recherché dans les laboratoires de contrôle qualité des cimenteries, carrières de granulats et unités de préfabrication."
        },
        "salary": {
            "france": {
                "entry": 32000,
                "mid": 45000,
                "expert": 65000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : Université de Poitiers Géosciences & APEC Ingénieurs"
            },
            "senegal": {
                "entry": 450000,
                "mid": 900000,
                "expert": 1900000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés en cimenteries et laboratoires de matériaux à Dakar et Thiès"
            }
        },
        "connectedFamilies": ["industrie-mecanique", "btp-architecture", "environnement-climat", "energie-renouvelable"],
        "relatedJobs": ["geologue", "mineralogiste", "geologue-minier", "ingenieur-geotechnique", "expert-sites-sols-pollues"],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Fiche Métier Ingénieur matériaux - Département Géosciences",
                "url": "https://sfa.univ-poitiers.fr/geosciences/debouches-professionnels/ingenieur-materiaux/",
                "type": "metier"
            },
            {
                "organization": "Université de Poitiers",
                "title": "Master EUR : parcours Matériaux-Minéraux (EUR INTREE)",
                "url": "https://sfa.univ-poitiers.fr/geosciences/formations/master-eur-parcours-materiaux-mineraux/",
                "type": "formation"
            }
        ],
        "sourcePoitiers": True,
        "sourceBRGM": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "La production de ciment traditionnel représente environ 7% des émissions mondiales de CO2.",
            "pourquoi": "La décarbonation du calcaire à plus de 1 450 °C libère d'importantes quantités de gaz à effet de serre.",
            "a_retenir": "Les ingénieurs en géomatériaux sont les pionniers qui conçoivent les nouveaux liants écologiques (argiles activées, géopolymères) qui transformeront l'architecture de demain."
        }
    },
    {
        "id": "mineralogiste",
        "slug": "mineralogiste",
        "title": "Minéralogiste / Cristallographe des Sciences de la Terre",
        "aliases": ["Cristallographe géologue", "Spécialiste minéralogie", "Chercheur en minéralogie", "Mineralogist"],
        "icon": "💎",
        "familyId": "sciences-terre-geosciences",
        "domain": "Minéralogie",
        "domainId": "mineralogie-cristallographie",
        "subdomain": "Identification Minérale & Cristallographie",
        "shortDescription": "Spécialiste de l'infiniment petit au cœur des roches, le minéralogiste identifie la structure cristalline, la composition chimique et l'origine des minéraux pour la recherche, les mines et les matériaux.",
        "longDescription": "Le minéralogiste étudie les espèces minérales qui constituent les roches de notre planète, des météorites et d'autres corps célestes. En décryptant l'arrangement atomique régulier des cristaux et leurs conditions thermodynamiques de formation (pression, température), il est capable de reconstituer l'histoire thermique d'un massif montagneux, de guider la prospection de gisements stratégiques (terres rares, gemmes, minerais métalliques) ou de développer des cristaux synthétiques pour l'optique et l'électronique. Utilisant des instruments de pointe (diffractomètres RX, microscopes électroniques, spectroscopie Raman), il travaille à l'intersection de la géologie, de la physique des solides et de la chimie inorganique.",
        "simpleDefinition": "Scientifique expert des cristaux et minéraux qui étudie leur structure atomique, leur beauté et leurs propriétés utiles pour l'industrie, les technologies et la géologie.",
        "level": "Bac +5 à Bac +8 (Master STPE Matériaux-Minéraux / Doctorat)",
        "missions": [
            "Identifier avec certitude les espèces minérales d'un échantillon de roche par diffraction des rayons X (DRX) et spectroscopie Raman",
            "Déterminer la structure cristallographique tridimensionnelle et la maille élémentaire des cristaux",
            "Analyser la composition chimique ponctuelle et les zonations minérales à la microsonde électronique",
            "Reconstituer les conditions de genèse des roches (thermobarométrie) à partir des équilibres minéraux",
            "Étudier les propriétés physiques des minéraux : piézoélectricité, biréfringence optique, dureté et clivages",
            "Caractériser les minéraux d'intérêt économique : minerais critiques, pierres précieuses, argiles industrielles",
            "Expertiser des minéraux anciens ou précieux pour les musées, les douanes ou les collections patrimoniales"
        ],
        "workEnvironment": "Activité principalement en laboratoire de haute technologie doté d'équipements analytiques lourds (salles d'instruments RX, MEB, microsondes), avec de ponctuelles missions de terrain sur sites miniers ou affleurements remarquables.",
        "typicalDay": [
            { "time": "08h30", "activity": "Dépouillement des diffractogrammes de rayons X obtenus au cours de la nuit sur des échantillons d'argiles" },
            { "time": "10h00", "activity": "Identification des phases cristallines secondaires à l'aide de la base de données internationale ICDD" },
            { "time": "11h30", "activity": "Session de spectroscopie Raman pour différencier deux polymorphes de carbonate de calcium (calcite et aragonite)" },
            { "time": "14h00", "activity": "Préparation de lames polies et métallisation au carbone pour passage à la microsonde électronique" },
            { "time": "15h30", "activity": "Acquisition de profils d'éléments traces à la microsonde pour étudier la zonation chimique d'un grenat métamorphique" },
            { "time": "17h30", "activity": "Rédaction d'une note d'expertise pour une compagnie minière sur la nature exacte d'un minéral porteur de lithium" }
        ],
        "companyRole": "Analyste scientifique de référence, il fournit l'identification définitive et incontestable des espèces minérales indispensable aux géologues et industriels.",
        "skills": {
            "technical": [
                "Cristallographie géométrique et structurale (groupes d'espace, réseaux de Bravais)",
                "Diffraction des rayons X sur poudres et monocristaux",
                "Spectroscopies vibrationnelles (Infrarouge FTIR, micro-Raman)",
                "Microsonde électronique (WDS) et MEB avec spectrométrie EDS",
                "Optique cristalline et microscopie polarisante en lumière transmise et réfléchie",
                "Thermodynamique des équilibres de phases solides"
            ],
            "human": [
                "Patience extrême et minutie dans la manipulation de microminéraux",
                "Rigueur mathématique et capacités de raisonnement géométrique dans l'espace",
                "Curiosité scientifique et passion pour la beauté du monde cristallin"
            ],
            "tools": ["Diffractomètre DRX Bruker / Malvern Panalytical", "Spectromètre Raman Horiba", "Microsonde électronique Cameca", "Base de données minéralogique ICDD / Mindat"]
        },
        "geosciencesPedagogy": {
            "pathway": "Du cristal brut à la structure atomique",
            "steps": ["💎 Échantillon de cristal brut", "🔬 Observation sous loupe binoculaire", "🧪 Réduction en poudre micronisée", "⚡ Diffraction des rayons X (DRX)", "📊 Analyse du profil de diffraction", "⚛️ Reconstitution de la maille atomique", "📋 Identification et fiche minéralogique"]
        },
        "studies": {
            "pathway": [
                { "level": "Bac +3", "degree": "Licence Sciences de la Terre ou Physique-Chimie" },
                { "level": "Bac +5", "degree": "Master STPE Parcours Matériaux-Minéraux (Université de Poitiers) ou Master Minéralogie" },
                { "level": "Bac +8", "degree": "Doctorat en Minéralogie / Cristallographie / Sciences des Matériaux" }
            ],
            "schools": [
                { "name": "Université de Poitiers - Master Matériaux-Minéraux (UFR SFA / EUR INTREE)", "country": "France", "scope": "France" },
                { "name": "Sorbonne Université / Muséum National d'Histoire Naturelle (MNHN Paris)", "country": "France", "scope": "France" },
                { "name": "Institut des Sciences de la Terre (IST - UCAD Dakar)", "country": "Sénégal", "scope": "Sénégal" },
                { "name": "Département de Physique / FST (UCAD Dakar)", "country": "Sénégal", "scope": "Sénégal" }
            ],
            "certifications": ["Habilitation Risque Radiologique (rayons X)", "Membre de la Société Française de Minéralogie et de Cristallographie (SFMC)"]
        },
        "career": {
            "sectors": ["Centres de recherche fondamentale et appliquée (CNRS, BRGM, IRD)", "Industrie minière et métallurgique", "Industrie des verres, céramiques et semi-conducteurs", "Musées d'histoire naturelle et conservation", "Laboratoires d'expertise gemmologique"],
            "companies": ["BRGM", "MNHN Paris", "Compagnies minières internationales", "Imerys", "Laboratoires de gemmologie"],
            "evolution": ["Responsable de plateforme analytique", "Chercheur / Directeur de recherche", "Expert en cristallographie appliquée", "Conservateur de collections minéralogiques"],
            "pros": ["Discipline intellectuellement fascinante mêlant géologie et physique fondamentale", "Utilisation d'équipements scientifiques parmi les plus avancés au monde", "Reconnaissance internationale"],
            "cons": ["Marché de l'emploi très sélectif nécessitant un haut niveau académique (Bac +5 / +8)", "Temps important passé devant des écrans d'analyse et de traitement de données", "Peu d'ouvertures en postes généralistes"]
        },
        "gettingStarted": "Effectuer des stages dans les plateformes de caractérisation des universités (comme celle du Département Géosciences de Poitiers) et maîtriser la résolution de structures cristallines.",
        "aiImpact": {
            "level": "Élevé / Reconnaissance spectrale automatique",
            "opportunities": ["Identification automatisée des mélanges minéraux complexes par apprentissage profond sur spectres DRX et Raman", "Génération de nouveaux cristaux aux propriétés sur-mesure par IA générative"],
            "challenges": ["Nécessité de disposer de bases de données spectrales rigoureusement validées"],
            "humanEdge": "L'analyse des défauts cristallins complexes, des macles et la compréhension de l'histoire géologique du cristal échappent aux simples algorithmes."
        },
        "africaContext": {
            "title": "Le Minéralogiste en Afrique de l'Ouest : Pierres Précieuses et Minerais Stratégiques",
            "description": "L'Afrique de l'Ouest est riche en occurrences minéralogiques exceptionnelles : or natif et sulfures de Kédougou, zircon et rutile des sables côtiers, tourmalines et gemmes de Guinée et du Mali. Le minéralogiste y est essentiel pour certifier l'origine des minéraux et optimiser les procédés d'extraction métallurgique.",
            "keyInstitutions": [
                "Institut des Sciences de la Terre (IST - UCAD Dakar)",
                "Laboratoire de Minéralogie et Cristallographie de l'IFAN Ch. Anta Diop",
                "Direction des Mines et de la Géologie (DMG)",
                "Société d'Exploitation des Mines du Sénégal"
            ],
            "projects": [
                "Caractérisation minéralogique des sables titanifères de Diogo",
                "Étude des paragenèses aurifères birimiennes pour améliorer le rendement de cyanuration",
                "Valorisation des gemmes et roches ornementales de l'Afrique de l'Ouest"
            ],
            "opportunities": "Postes de cadre au sein des laboratoires d'analyse minière (SGS, Bureau Veritas) et des institutions de recherche régionales."
        },
        "salary": {
            "france": {
                "entry": 30000,
                "mid": 44000,
                "expert": 62000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : CNRS, universités et industrie de pointe"
            },
            "senegal": {
                "entry": 400000,
                "mid": 800000,
                "expert": 1600000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés en laboratoire de recherche et d'expertise minière à Dakar"
            }
        },
        "connectedFamilies": ["industrie-mecanique", "sciences-biotech", "education-formation", "culture-medias"],
        "relatedJobs": ["geologue", "geologue-minier", "ingenieur-materiaux-geosciences", "chercheur-geosciences", "geoarcheologue"],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Master EUR STPE Parcours Matériaux-Minéraux - Débouché Minéralogiste",
                "url": "https://sfa.univ-poitiers.fr/geosciences/formations/master-eur-parcours-materiaux-mineraux/",
                "type": "formation"
            },
            {
                "organization": "Société Française de Minéralogie et de Cristallographie (SFMC)",
                "title": "Champs d'action de la minéralogie moderne",
                "url": "https://sfmc-fr.org",
                "type": "secteur"
            }
        ],
        "sourcePoitiers": True,
        "sourceBRGM": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Plus de 5 900 espèces minérales sont officiellement reconnues par l'Association Internationale de Minéralogie (IMA), et une centaine de nouvelles sont découvertes chaque année.",
            "pourquoi": "Chaque minéral est défini par sa composition chimique unique et son agencement atomique cristallin particulier.",
            "a_retenir": "La minéralogie est à la racine de la matière solide : sans elle, aucune compréhension des roches, ni fabrication de puces électroniques ne serait possible."
        }
    },
    {
        "id": "ingenieur-geotechnique",
        "slug": "ingenieur-geotechnique",
        "title": "Ingénieur Géotechnique / Géotechnicien",
        "aliases": ["Ingénieur géotechnicien", "Ingénieur sol et fondations", "Spécialiste de mécanique des sols", "Geotechnical Engineer"],
        "icon": "🏗️",
        "familyId": "sciences-terre-geosciences",
        "domain": "Géotechnique",
        "domainId": "geotechnique-ouvrages",
        "subdomain": "Mécanique des Sols & Fondations",
        "shortDescription": "À la jonction de la géologie et du génie civil, il ausculte les sols pour concevoir des fondations solides, stabiliser les talus et sécuriser les ouvrages d'art (ponts, barrages, gratte-ciel, tunnels).",
        "longDescription": "Avant de poser la moindre pierre d'un gratte-ciel, de creuser un tunnel ou d'édifier un barrage, une question cruciale s'impose : le terrain tiendra-t-il la charge ? L'ingénieur géotechnique apporte cette réponse décisive. Formé aux géosciences et à la mécanique des sols et des roches, il pilote les campagnes de sondages carottés, d'essais pressiométriques et pénétrométriques. Au laboratoire, il mesure la cohésion, l'angle de frottement et la compressibilité des terres à l'oedomètre et à l'appareil triaxial. Il dimensionne ensuite les fondations superficielles ou profondes (pieux), calcule la stabilité des pentes face aux glissements et préconise les techniques de renforcement des sols.",
        "simpleDefinition": "Ingénieur expert du sol qui vérifie la solidité des terrains avant la construction d'immeubles, de ponts, de routes ou de tunnels pour éviter tout affaissement ou effondrement.",
        "level": "Bac +5 (Master Géotechnique / Diplôme d'Ingénieur Génie Civil - Géotechnique)",
        "missions": [
            "Concevoir et superviser les campagnes d'investigations géotechniques in situ (sondages carottés, essais pressiométriques Ménard, CPTU)",
            "Piloter les essais de mécanique des sols et des roches en laboratoire (oedomètre, boîte de Casagrande, essai triaxial)",
            "Modéliser le comportement mécanique et les déformations des massifs rocheux et sols meubles sous charge",
            "Dimensionner les fondations superficielles (semelles, radiers) et fondations profondes (pieux, micropieux, parois moulées)",
            "Calculer la stabilité des talus, remblais et soutènements face aux risques de glissements de terrain et séismes",
            "Rédiger les missions géotechniques normalisées NF P 94-500 (G1 à G5) encadrant la responsabilité des chantiers",
            "Assurer le suivi géotechnique pendant les travaux : auscultation des tassements, vibrométrie et contrôles d'ancrages"
        ],
        "workEnvironment": "Présence active sur les chantiers de construction, plateformes d'essais géotechniques et engins de sondage, associée à un important travail de calcul et de modélisation numérique en bureau d'études.",
        "typicalDay": [
            { "time": "08h00", "activity": "Visite d'un chantier d'ouvrage d'art : contrôle du forage de pieux forés de 25 m de profondeur" },
            { "time": "10h00", "activity": "Vérification des essais pressiométriques in situ : lecture de la pression limite et du module d'élasticité Ménard" },
            { "time": "12h30", "activity": "Déjeuner de chantier avec le conducteur de travaux et l'ingénieur structure" },
            { "time": "14h00", "activity": "Passage au laboratoire de mécanique des sols : validation des courbes de consolidation oedométrique sur des argiles" },
            { "time": "15h30", "activity": "Modélisation par éléments finis sur logiciel Plaxis 2D pour vérifier la stabilité d'une paroi clouée" },
            { "time": "17h30", "activity": "Rédaction du rapport de mission géotechnique G2 PRO préconisant le type de fondation de la future tour" }
        ],
        "companyRole": "Garant absolu de la sécurité structurelle, il engage sa signature professionnelle sur la stabilité pérenne des constructions.",
        "skills": {
            "technical": [
                "Mécanique des sols et des roches (critères de rupture de Mohr-Coulomb, Hoek-Brown)",
                "Normes géotechniques françaises et européennes (Eurocode 7, norme NF P 94-500)",
                "Essais in situ (pressiomètre, pénétromètre statique et dynamique, scissomètre)",
                "Essais en laboratoire (essais triaxiaux, oedomètre, cisaillement direct)",
                "Modélisation numérique par éléments finis (Plaxis, GeoStudio, Talren, Foxta)",
                "Pathologie des fondations et techniques d'amélioration des sols (colonnes ballastées, jet grouting)"
            ],
            "human": [
                "Sens aigu des responsabilités et de la gestion des risques majeurs",
                "Rigueur mathématique et capacités de calcul analytique",
                "Aisance relationnelle pour échanger sur le terrain avec les ouvriers et en réunion avec les architectes",
                "Réactivité face aux imprévus de chantier géologique"
            ],
            "tools": ["Pressiomètre Ménard", "Pénétromètre CPT", "Logiciels Plaxis 2D/3D", "Talren", "Foxta", "GeoStudio", "K-Réa"]
        },
        "geosciencesPedagogy": {
            "pathway": "De l'auscultation du terrain à la fondation",
            "steps": ["🗺️ Reconnaissance géologique initiale", "🚜 Sondages & essais in situ (pressiomètre)", "🧪 Essais en laboratoire (oedomètre, triaxial)", "💻 Modélisation géotechnique numérique", "📐 Dimensionnement des pieux & fondations", "🏗️ Suivi de terrassement & validation G2"]
        },
        "studies": {
            "pathway": [
                { "level": "Bac +3", "degree": "Licence Sciences de la Terre ou BUT Génie Civil" },
                { "level": "Bac +5", "degree": "Master STPE Géosciences Appliquées (Université de Poitiers) ou Master Mécanique des Sols" },
                { "level": "Bac +5", "degree": "Diplôme d'Ingénieur Géotechnique (ENSG Nancy, Polytech, INSA, ESTP, EPT Thiès)" }
            ],
            "schools": [
                { "name": "Université de Poitiers - Master STPE (Débouché Ingénieur Géotechnique cité par l'UFR SFA)", "country": "France", "scope": "France" },
                { "name": "ENSG Nancy - École Nationale Supérieure de Géologie", "country": "France", "scope": "France" },
                { "name": "École Polytechnique de Thiès (EPT - Département Génie Civil & Géotechnique)", "country": "Sénégal", "scope": "Sénégal" },
                { "name": "Institut des Sciences de la Terre (IST - UCAD Dakar)", "country": "Sénégal", "scope": "Sénégal" }
            ],
            "certifications": ["Agrément d'ingénieur géotechnicien certifié", "Attestation de compétences Eurocode 7"]
        },
        "career": {
            "sectors": ["Bureaux d'études géotechniques spécialisés", "Entreprises générales de travaux publics et fondations spéciales", "Bureaux de contrôle technique de la construction", "Sociétés d'ingénierie d'infrastructures et transports", "Gestionnaires d'infrastructures autoroutières et ferroviaires"],
            "companies": ["Fugro", "Ginger CEBTP", "Antea Group", "Soletanche Bachy", "Menard", "Eiffage Génie Civil", "SNCF Réseau", "LBTP (Sénégal)"],
            "evolution": ["Chef de groupe géotechnique", "Directeur d'agence géotechnique", "Expert national auprès des tribunaux et assurances", "Directeur de l'ingénierie de grands projets"],
            "pros": ["Métier très demandé avec quasi plein-emploi des jeunes diplômés", "Impact très concret sur les paysages urbains et les grands ouvrages", "Parfait équilibre entre calculs théoriques et réalités de terrain"],
            "cons": ["Lourde responsabilité juridique et décennale en cas de fissures ou tassements différentiels", "Gestion des aléas de sol sous forte pression de calendrier de chantier", "Environnement de chantier parfois salissant et exposé aux intempéries"]
        },
        "gettingStarted": "Effectuer des stages dans des bureaux d'études de mécanique des sols (Ginger CEBTP, Fugro) et maîtriser les logiciels de calcul de stabilité de pentes et de soutènements.",
        "aiImpact": {
            "level": "Modéré / Optimisation des modèles de sols",
            "opportunities": ["Interpolation probabiliste 3D des couches de sol à partir de données éparses de sondages", "Prédiction des risques d'instabilité de talus par réseaux de neurones en temps réel", "Automatisation de la lecture des logs pénétrométriques"],
            "challenges": ["L'hétérogénéité naturelle du sol impose toujours un regard critique d'expert"],
            "humanEdge": "La responsabilité légale de valider une fondation et de signer une mission G2 ne peut pas être déléguée à une machine."
        },
        "africaContext": {
            "title": "L'Ingénieur Géotechnique au Sénégal : Bâtir sur des Sols Complexes",
            "description": "À Dakar et dans les grandes agglomérations sénégalaises, l'explosion immobilière et les grands chantiers d'infrastructures (TER de Dakar, BRT, Pont de Foundiougne, Port multifonction de Ndayane) requièrent une expertise géotechnique pointue face aux sols compressibles, aux sables littoraux liquéfiables et aux argiles gonflantes de la presqu'île.",
            "keyInstitutions": [
                "Laboratoire du Bâtiment et des Travaux Publics (LBTP Dakar)",
                "École Polytechnique de Thiès (EPT)",
                "AGEROUTE (Agence des Travaux et de Gestion des Routes)",
                "Institut des Sciences de la Terre (IST - UCAD)"
            ],
            "projects": [
                "Fondations spéciales et soutènements du Port en eaux profondes de Ndayane",
                "Études de sol des tronçons autoroutiers Mbour-Fatick-Kaolack",
                "Sécurisation des falaises de la Corniche ouest de Dakar contre les éboulements"
            ],
            "opportunities": "Très forte attractivité sur le marché de l'emploi dakarois, avec des salaires élevés pour les ingénieurs diplômés de l'EPT et de l'IST."
        },
        "salary": {
            "france": {
                "entry": 33000,
                "mid": 48000,
                "expert": 70000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : Syntec Ingénierie, APEC & Université de Poitiers"
            },
            "senegal": {
                "entry": 500000,
                "mid": 1000000,
                "expert": 2200000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés en bureau d'études géotechniques et grands chantiers BTP à Dakar"
            }
        },
        "connectedFamilies": ["btp-architecture", "industrie-mecanique", "environnement-climat", "transport-logistique"],
        "relatedJobs": ["geologue", "hydrogeologue", "pedologue", "ingenieur-materiaux-geosciences", "ingenieur-risques-naturels"],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Master STPE Géosciences - Débouché Ingénieur Géotechnique",
                "url": "https://sfa.univ-poitiers.fr/geosciences/formations/master-eur-parcours-materiaux-mineraux/",
                "type": "formation"
            },
            {
                "organization": "Union Syndicale Géotechnique (USG)",
                "title": "Le rôle et les missions de l'ingénieur géotechnicien",
                "url": "https://www.usg.asso.fr",
                "type": "secteur"
            }
        ],
        "sourcePoitiers": True,
        "sourceBRGM": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "La tour de Pise penche depuis plus de 800 ans uniquement à cause d'une couche d'argile molle et compressible non détectée lors de ses fondations au XIIe siècle.",
            "pourquoi": "Le sol sous la tour présentait une résistance inégale qui a provoqué un tassement différentiel sous le poids colossal de l'édifice.",
            "a_retenir": "C'est précisément pour éviter de tels désordres que l'ingénieur géotechnique calcule la portance exacte du sous-sol avant toute construction."
        }
    },
    {
        "id": "geophysicien",
        "slug": "geophysicien",
        "title": "Géophysicien / Ingénieur en Imagerie du Sous-Sol",
        "aliases": ["Ingénieur géophysicien", "Spécialiste de géophysique appliquée", "Ausculteur du sous-sol", "Geophysicist"],
        "icon": "🌋",
        "familyId": "sciences-terre-geosciences",
        "domain": "Géophysique",
        "domainId": "geophysique-sous-sol",
        "subdomain": "Méthodes Sismiques, Gravimétriques & Électriques",
        "shortDescription": "Véritable radiologue de la Terre, le géophysicien ausculte les entrailles du sol sans forer grâce aux ondes acoustiques, champs magnétiques, électriques et gravitationnels pour cartographier les profondeurs.",
        "longDescription": "Comment voir à travers des kilomètres de roche sans creuser ? Le géophysicien est le spécialiste de cette imagerie non invasive de la Terre. S'appuyant sur les lois de la physique et les mathématiques appliquées, il utilise la propagation des ondes sismiques, les variations du champ gravitationnel (gravimétrie), du magnétisme terrestre et de la résistivité électrique pour dresser une radiographie précise du sous-sol. Ses compétences s'étendent de la détection de cavités souterraines et nappes aquifères à faible profondeur jusqu'à la modélisation des réservoirs pétroliers et géothermiques profonds et l'auscultation des chambres magmatiques sous les volcans.",
        "simpleDefinition": "Scientifique qui utilise des ondes, des aimants et des courants électriques pour faire une 'radiographie' du sous-sol et découvrir ce qui s'y cache sans avoir besoin de creuser.",
        "level": "Bac +5 (Master Géophysique / Diplôme d'Ingénieur Géophysicien)",
        "missions": [
            "Concevoir et planifier des campagnes d'acquisition géophysique terrestre, aéroportée ou marine",
            "Déployer et régler des capteurs ultrasensibles : géophones, sismographes, gravimètres, magnétomètres, électrodes",
            "Mettre en œuvre des méthodes sismiques réfraction et réflexion (vibroseis, explosifs, marteau de battage)",
            "Réaliser des tomographies de résistivité électrique (ERT) pour détecter nappes d'eau et cavités karstiques",
            "Traiter et filtrer les signaux géophysiques bruts (débruitage, inversion, migration sismique)",
            "Intégrer les données sismiques et gravimétriques dans des modèles géologiques 3D cohérents",
            "Intervenir sur des projets de génie civil, d'archéologie, d'hydrogéologie et d'exploration d'énergies décarbonées"
        ],
        "workEnvironment": "Déplacements fréquents sur le terrain pour la pose de lignes de capteurs et l'acquisition des mesures (milieux variés : désert, forêt, mer, chantiers urbains), suivis d'un travail intensif de traitement numérique des signaux sur stations de calcul.",
        "typicalDay": [
            { "time": "07h30", "activity": "Déploiement d'une ligne sismique de 48 géophones le long d'un tracé d'infrastructure ferroviaire" },
            { "time": "09h00", "activity": "Calibrage du sismographe de terrain et vérification des impédances de chaque capteur" },
            { "time": "10h30", "activity": "Campagne de tirs sismiques au marteau automatique et enregistrement des temps de parcours d'ondes P et S" },
            { "time": "13h00", "activity": "Déjeuner de terrain et vérification de la qualité des signaux bruts enregistrés" },
            { "time": "14h30", "activity": "Profil électrique de contrôle : mesure de résistivité multi-électrodes pour vérifier la présence d'une poche d'eau" },
            { "time": "16h30", "activity": "Retour au laboratoire : lancement de l'algorithme d'inversion tomographique sur station de travail" },
            { "time": "18h00", "activity": "Génération de la coupe géophysique 2D mettant en évidence le toit du substratum rocheux et les failles" }
        ],
        "companyRole": "Expert en auscultation non destructive, il réduit drastiquement les coûts et risques des forages en indiquant avec précision les cibles sous la surface.",
        "skills": {
            "technical": [
                "Traitement du signal numérique (transformée de Fourier, ondelettes, filtrage, déconvolution)",
                "Sismique réflexion et réfraction (ondes de volume P/S, ondes de surface MASW)",
                "Méthodes potentielles : gravimétrie et magnétométrie",
                "Méthodes électriques et électromagnétiques (ERT, radar géologique GPR, TDEM)",
                "Inversion géophysique et modélisation directe",
                "Programmation scientifique (Python, MATLAB, Fortran)"
            ],
            "human": [
                "Excellente rigueur physico-mathématique et esprit d'analyse",
                "Sens de l'organisation logistique lors des campagnes de mesure",
                "Goût pour la technologie d'instrumentation de pointe",
                "Patience pour débruiter et interpréter des signaux complexes"
            ],
            "tools": ["Sismographe Geometrics", "Gravimètre Scintrex CG-5", "Radar géologique GPR GSSI", "Résistivimètre Syscal Pro", "Logiciels SeisImager / Res2DInv / Petrel"]
        },
        "geosciencesPedagogy": {
            "pathway": "De l'onde physique à la coupe de sous-sol",
            "steps": ["📡 Émission d'onde ou courant", "⚡ Propagation à travers les strates", "🎧 Enregistrement par géophones", "💻 Traitement du signal & filtrage", "🔄 Inversion mathématique", "📊 Tomographie 2D/3D", "🪨 Interprétation géologique finale"]
        },
        "studies": {
            "pathway": [
                { "level": "Bac +3", "degree": "Licence Physique ou Licence Sciences de la Terre (Université de Poitiers)" },
                { "level": "Bac +5", "degree": "Master Géophysique / Master STPE (Université de Poitiers, IPGP Paris, Strasbourg)" },
                { "level": "Bac +5", "degree": "Diplôme d'Ingénieur Géophysicien (EOST Strasbourg, ENSG Nancy)" },
                { "level": "Bac +8", "degree": "Doctorat en Géophysique interne ou appliquée" }
            ],
            "schools": [
                { "name": "Université de Poitiers - Faculté des Sciences (Licence ST, Master STPE)", "country": "France", "scope": "France" },
                { "name": "École et Observatoire des Sciences de la Terre (EOST - Université de Strasbourg)", "country": "France", "scope": "France" },
                { "name": "Institut de Physique du Globe de Paris (IPGP)", "country": "France", "scope": "France" },
                { "name": "Institut des Sciences de la Terre (IST - UCAD Dakar - Géophysique)", "country": "Sénégal", "scope": "Sénégal" }
            ],
            "certifications": ["Certification en auscultation non destructive", "Habilitation sécurité sismique"]
        },
        "career": {
            "sectors": ["Bureaux d'études géotechniques et géophysiques", "Compagnies d'énergies (géothermie, éolien offshore, hydrocarbures)", "Services géologiques nationaux (BRGM)", "Compagnies minières", "Instituts de recherche et observatoires volcanologiques"],
            "companies": ["CGG", "Fugro", "BRGM", "TotalEnergies", "SLB (Schlumberger)", "PETROSEN (Sénégal)"],
            "evolution": ["Chef de mission géophysique", "Superviseur de traitement sismique", "Directeur technique imagerie du sous-sol", "Chercheur en géophysique globale"],
            "pros": ["Métier à la pointe de la haute technologie scientifique", "Capacité à percer les mystères profonds de la Terre sans forer", "Opportunités de carrière internationales prestigieuses"],
            "cons": ["Complexité mathématique et physique exigeante", "Déplacements fréquents sur le terrain pour les acquisitions", "Interprétation parfois ambigüe nécessitant des calages de forages"]
        },
        "gettingStarted": "Cultiver une double compétence en physique du signal et en géologie structurale, et maîtriser le langage Python pour le traitement des données géophysiques.",
        "aiImpact": {
            "level": "Très élevé / Révolution de l'inversion",
            "opportunities": ["Picking automatique des arrivées d'ondes sismiques par deep learning", "Inversion de forme d'onde complète (FWI) accélérée par GPU", "Détection automatique de failles et d'horizons dans les cubes sismiques 3D"],
            "challenges": ["Nécessité de comprendre la physique sous-jacente pour ne pas interpréter des artefacts de calcul"],
            "humanEdge": "La confrontation du modèle géophysique avec la cohérence géologique et tectonique régionale requiert l'expertise du géoscientifique."
        },
        "africaContext": {
            "title": "Le Géophysicien au Sénégal : Exploration Côtière et Sous-Sol",
            "description": "Au Sénégal, la géophysique est stratégique pour l'exploration pétrolière et gazière offshore (champs de Sangomar et Grand Tortue Ahmeyim - GTA), la recherche d'eau dans les aquifères profonds et la cartographie géotechnique des grands projets côtiers. PETROSEN et les bureaux d'études de Dakar emploient des géophysiciens hautement qualifiés.",
            "keyInstitutions": [
                "PETROSEN (Société Nationale des Pétroles du Sénégal)",
                "Institut des Sciences de la Terre (IST - UCAD)",
                "Direction des Mines et de la Géologie (DMG)",
                "DGPRE (Direction des Ressources en Eau)"
            ],
            "projects": [
                "Traitement des campagnes sismiques 3D offshore dans le bassin sénégalo-mauritanien",
                "Prospection géophysique électrique pour l'implantation de forages d'eau ruraux",
                "Campagnes gravimétriques régionales pour la délimitation du socle minier"
            ],
            "opportunities": "Opportunités de carrières de haut niveau dans les consortiums énergétiques, les cabinets de conseil et les centres de recherche de Dakar."
        },
        "salary": {
            "france": {
                "entry": 34000,
                "mid": 50000,
                "expert": 75000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : APEC Géosciences & compagnies d'ingénierie"
            },
            "senegal": {
                "entry": 550000,
                "mid": 1100000,
                "expert": 2400000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés dans l'exploration pétro-gazière et géophysique à Dakar"
            }
        },
        "connectedFamilies": ["energie-renouvelable", "industrie-mecanique", "data-decision", "environnement-climat"],
        "relatedJobs": ["geologue", "sismologue", "hydrogeologue", "geologue-minier", "ingenieur-geotechnique"],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Fiche Géologue (mention géophysique, ondes et champs magnétiques)",
                "url": "https://sfa.univ-poitiers.fr/geosciences/debouches-professionnels/geologue/",
                "type": "metier"
            },
            {
                "organization": "EOST Strasbourg",
                "title": "Les métiers de la géophysique appliquée",
                "url": "https://eost.unistra.fr",
                "type": "secteur"
            }
        ],
        "sourcePoitiers": True,
        "sourceBRGM": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "C'est grâce aux géophysiciens et à l'étude de la réfraction des ondes sismiques que l'on a découvert en 1936 que le centre de la Terre possède un noyau interne solide (la graine) de fer et de nickel.",
            "pourquoi": "Inge Lehmann a démontré que certaines ondes P rebondissaient sur une discontinuité solide à 5 150 km de profondeur.",
            "a_retenir": "Le géophysicien est capable d'explorer des profondeurs planétaires où aucun être humain ni aucune sonde matérielle ne pourra jamais pénétrer."
        }
    },
    {
        "id": "sismologue",
        "slug": "sismologue",
        "title": "Sismologue / Spécialiste des Séismes & Risques Tectoniques",
        "aliases": ["Chercheur en sismologie", "Ingénieur sismologue", "Expert en aléas sismiques", "Seismologist"],
        "icon": "📈",
        "familyId": "sciences-terre-geosciences",
        "domain": "Risques naturels",
        "domainId": "risques-naturels-georisques",
        "subdomain": "Surveillance Sismique & Aléas Tectoniques",
        "shortDescription": "Sentinelle de l'activité tectonique de la Terre, le sismologue surveille les failles actives, analyse la propagation des tremblements de terre et modélise les aléas sismiques pour protéger les populations et les infrastructures.",
        "longDescription": "Lorsque les failles tectoniques accumulent des contraintes colossales, la Terre tremble. Le sismologue est le scientifique qui ausculte ces mouvements brusques de la lithosphère. À l'aide de réseaux de stations sismologiques télémétrées, il détecte les signaux d'ondes en temps réel, localise instantanément l'épicentre et la profondeur du foyer sismique, et calcule la magnitude de l'événement. Au-delà de l'alerte immédiate (et de l'alerte aux tsunamis), son travail fondamental consiste à cartographier les zones de failles actives, à évaluer l'aléa sismique régional pour le code de construction parasismique (Eurocode 8) et à modéliser la dynamique des plaques.",
        "simpleDefinition": "Scientifique qui surveille et étudie les tremblements de terre grâce à des sismographes, évalue les risques pour les villes et aide à construire des bâtiments capables de résister aux secousses.",
        "level": "Bac +5 à Bac +8 (Master Géophysique-Sismologie / Doctorat)",
        "missions": [
            "Surveiller en temps réel les réseaux sismologiques nationaux et internationaux (stations large-bande)",
            "Localiser les épicentres, profondeurs focales et mécanismes au foyer (failles normales, inverses, décrochantes)",
            "Calculer la magnitude des séismes (magnitude de moment Mw) et diffuser les bulletins d'alerte aux autorités de protection civile",
            "Étudier la propagation des ondes sismiques (ondes P, S, Rayleigh, Love) et les effets de site géologiques (amplification par sols mous)",
            "Élaborer les cartes de zonage d'aléa sismique servant de base aux réglementations de construction parasismique",
            "Concevoir et maintenir les réseaux de sismographes et accéléromètres de terrain",
            "Mener des recherches fondamentales sur la physique de la rupture sismique et la prévision statistique des répliques"
        ],
        "workEnvironment": "Travail en observatoire sismologique ou centre d'alerte opérationnel 24h/24, laboratoires de recherche universitaire, avec des missions de terrain pour installer des stations de surveillance sur des volcans ou failles actives.",
        "typicalDay": [
            { "time": "08h30", "activity": "Vérification de l'état du réseau de surveillance télémétrique et analyse des événements microsismiques de la nuit" },
            { "time": "09h30", "activity": "Déclenchement d'une alerte automatique suite à un séisme de magnitude 4,2 : pointage manuel précis des temps d'arrivée des ondes" },
            { "time": "10h15", "activity": "Affinement de la localisation de l'hypocentre et détermination du mécanisme au foyer par inversion des formes d'ondes" },
            { "time": "11h30", "activity": "Transmission du rapport officiel de situation au centre opérationnel de gestion des crises (COGC)" },
            { "time": "14h00", "activity": "Séance de recherche : modélisation numérique de la réponse sismique d'un bassin sédimentaire face à une onde de cisaillement" },
            { "time": "16h30", "activity": "Préparation du matériel pour une mission d'installation de 5 nouveaux accéléromètres sur une faille active" },
            { "time": "18h00", "activity": "Rédaction d'un article scientifique sur les contraintes tectoniques régionales" }
        ],
        "companyRole": "Sentinelle scientifique indispensable, le sismologue alerte les pouvoirs publics et fixe les normes qui évitent l'effondrement des bâtiments lors des séismes.",
        "skills": {
            "technical": [
                "Physique des ondes et élasticité des milieux solides",
                "Instrumentation sismologique (capteurs large-bande, accéléromètres, numériseurs 24 bits)",
                "Inversion du tenseur des moments sismiques et localisation hypocentrale",
                "Modélisation de l'aléa sismique probabiliste et déterministe (PSHA/DSHA)",
                "Normes de construction parasismique (Eurocode 8)",
                "Programmation et traitement de séries temporelles (Python ObsPy, SAC, GMT)"
            ],
            "human": [
                "Sang-froid et rigueur extrême en situation d'alerte et de crise",
                "Précision d'analyse mathématique et de traitement du signal",
                "Pédagogie pour rassurer et informer les médias et le grand public",
                "Sens du service public et de la protection des vies humaines"
            ],
            "tools": ["Python (librairie ObsPy)", "SeisComP (logiciel d'acquisition temps réel)", "Stations sismologiques Güralp / Nanometrics", "GMT (Generic Mapping Tools)", "SAC (Seismic Analysis Code)"]
        },
        "geosciencesPedagogy": {
            "pathway": "De la rupture de faille à l'alerte",
            "steps": ["⚡ Rupture mécanique de faille", "〰️ Propagation des ondes P et S", "📡 Détection par sismographes", "⏱️ Pointage des temps d'arrivée", "📍 Calcul de l'épicentre et magnitude", "⚠️ Diffusion de l'alerte publique", "🏛️ Application des normes parasismiques"]
        },
        "studies": {
            "pathway": [
                { "level": "Bac +3", "degree": "Licence Sciences de la Terre ou Physique (Université de Poitiers)" },
                { "level": "Bac +5", "degree": "Master Sciences de la Terre / Géophysique / Sismologie (IPGP, EOST Strasbourg)" },
                { "level": "Bac +8", "degree": "Doctorat en Sismologie / Physique de la Terre" }
            ],
            "schools": [
                { "name": "Université de Poitiers - Département Géosciences (Licence ST, Master STPE)", "country": "France", "scope": "France" },
                { "name": "EOST Strasbourg - Réseau National de Surveillance Sismique (Renass)", "country": "France", "scope": "France" },
                { "name": "Institut de Physique du Globe de Paris (IPGP - Observatoires Volcanologiques et Sismologiques)", "country": "France", "scope": "France" },
                { "name": "Institut des Sciences de la Terre (IST - UCAD Dakar)", "country": "Sénégal", "scope": "Sénégal" }
            ],
            "certifications": ["Certification d'analyste sismologique", "Habilitation d'expert parasismique"]
        },
        "career": {
            "sectors": ["Observatoires sismologiques et volcanologiques nationaux", "Organismes de recherche scientifique (CNRS, BRGM, CEA/DASE)", "Bureaux d'études en ingénierie parasismique et sûreté nucléaire", "Organisations internationales de surveillance (OTICE / CTBTO)", "Compagnies d'assurance et réassurance des catastrophes naturelles"],
            "companies": ["CEA / DASE (Département Analyse Surveillance Environnement)", "BRGM", "IRSN (Institut de Radioprotection et de Sûreté Nucléaire)", "Swiss Re / Munich Re", "Observatoires sismologiques d'Afrique et d'Europe"],
            "evolution": ["Responsable de réseau sismologique", "Chef de département surveillance des aléas", "Directeur de recherche en sismologie", "Conseiller expert auprès de l'ONU / UNESCO"],
            "pros": ["Métier à très forte utilité pour la sécurité publique et la sauvegarde des vies", "Implication dans des réseaux de recherche internationaux interconnectés", "Richesse des défis scientifiques"],
            "cons": ["Astreintes opérationnelles de nuit et de week-end pour la gestion d'alertes", "Stress important lors des crises sismiques majeures", "Nombre de postes académiques annuels restreint"]
        },
        "gettingStarted": "Maîtriser impérativement la bibliothèque Python ObsPy pour le traitement de traces sismiques réelles et réaliser des stages dans un observatoire sismologique.",
        "aiImpact": {
            "level": "Très élevé / Détection en temps réel",
            "opportunities": ["Détection et classification instantanée des microséismes par réseaux convolutionnels", "Amélioration des systèmes d'alerte précoce (Earthquake Early Warning) gagnant de précieuses secondes avant les secousses destructrices"],
            "challenges": ["Éviter les faux positifs lors d'événements inhabituels"],
            "humanEdge": "La confirmation des magnitudes et la coordination avec les cellules de crise gouvernementales reposent sur le jugement de l'expert sismologue."
        },
        "africaContext": {
            "title": "La Surveillance Sismique en Afrique : Du Rift Est-Africain aux Séismes Intraplaques",
            "description": "Si l'Afrique de l'Ouest est globalement une zone intraplaque d'aléa modéré, des séismes significatifs peuvent s'y produire (séisme de Koumbia en Guinée, magnitude 6,2 en 1983). Les sismologues africains surveillent l'activité des grandes fractures continentales et collaborent à l'échelle du continent, notamment sur le rift est-africain et la surveillance des barrages hydroélectriques.",
            "keyInstitutions": [
                "Institut des Sciences de la Terre (IST - UCAD Dakar)",
                "Centre de Recherches Géologiques et Minières",
                "Départements de Physique et Géologie de l'UCAD",
                "Réseau Sismologique Ouest-Africain"
            ],
            "projects": [
                "Surveillance de la sismicité induite autour des grands barrages (Manantali, Diama)",
                "Auscultation microsismique des exploitations minières souterraines",
                "Sensibilisation aux normes de construction résistantes aux vibrations"
            ],
            "opportunities": "Postes de recherche académique, expertise auprès des grands projets de barrages et gestion des réseaux sismographiques régionaux."
        },
        "salary": {
            "france": {
                "entry": 32000,
                "mid": 46000,
                "expert": 68000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : Grilles CNRS, CEA, universités & bureaux d'études parasismiques"
            },
            "senegal": {
                "entry": 400000,
                "mid": 850000,
                "expert": 1800000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés en institut de recherche et expertise de grands ouvrages à Dakar"
            }
        },
        "connectedFamilies": ["environnement-climat", "btp-architecture", "data-decision", "sciences-biotech"],
        "relatedJobs": ["geophysicien", "geologue", "ingenieur-risques-naturels", "ingenieur-geotechnique", "chercheur-geosciences"],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Fiche Géologue (étude de la propagation des ondes et prévention des séismes)",
                "url": "https://sfa.univ-poitiers.fr/geosciences/debouches-professionnels/geologue/",
                "type": "metier"
            },
            {
                "organization": "Réseau National de Surveillance Sismique (BCSF-Rénass)",
                "title": "Surveillance et recherche sur les séismes en France",
                "url": "https://renass.unistra.fr",
                "type": "secteur"
            }
        ],
        "sourcePoitiers": True,
        "sourceBRGM": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Chaque année, plus de 500 000 tremblements de terre se produisent sur Terre, dont environ 100 000 sont ressentis par les humains et une centaine causent des dégâts.",
            "pourquoi": "La lithosphère est découpée en une quinzaine de plaques tectoniques majeures qui se déplacent continuellement à une vitesse de 1 à 10 cm par an.",
            "a_retenir": "Le sismologue écoute le pouls mécanique de notre planète pour concevoir des habitats capables de protéger les vies humaines."
        }
    },
    {
        "id": "geomaticien-cartographe-geologue",
        "slug": "geomaticien-cartographe-geologue",
        "title": "Géomaticien / Cartographe Géologue & Télédétection",
        "aliases": ["Analyste SIG géosciences", "Cartographe géologue", "Spécialiste télédétection satellitaire", "Geospatial Analyst - Geosciences"],
        "icon": "🗺️",
        "familyId": "sciences-terre-geosciences",
        "domain": "Géomatique, cartographie & télédétection",
        "domainId": "geomatique-cartographie-teledetection",
        "subdomain": "Systèmes d'Information Géographique & Satellite",
        "shortDescription": "Spécialiste de la donnée spatiale de la Terre, il combine images satellites, LiDAR, modèles numériques de terrain et SIG pour cartographier les ressources, suivre l'érosion et modéliser les territoires.",
        "longDescription": "L'outil informatique et les données spatiales ont révolutionné les géosciences. Le géomaticien spécialisé en géosciences est le cartographe de l'ère spatiale. À partir d'images satellites multispectrales (Sentinel, Landsat), de relevés LiDAR par drone et de cartes géologiques anciennes, il structure des bases de données géographiques massives, extrait des signatures d'altérations minérales et modélise en 3D la topographie et le sous-sol. Il conçoit des cartes thématiques indispensables à la recherche d'eau, au suivi de l'érosion côtière, à la planification minière et à la prévention des catastrophes naturelles.",
        "simpleDefinition": "Expert des cartes numériques et des images satellites qui combine données spatiales et géologie pour créer des cartes intelligentes aidant à explorer et protéger les territoires.",
        "level": "Bac +3 à Bac +5 (Licence Pro SIG / Master Géomatique - Géosciences)",
        "missions": [
            "Acquérir, corriger et traiter les images satellitaires multispectrales, radar (InSAR) et thermiques",
            "Piloter des missions de cartographie par drone et traiter les nuages de points LiDAR pour générer des MNT (Modèles Numériques de Terrain) haute résolution",
            "Créer et administrer des Systèmes d'Information Géographique (SIG) appliqués aux ressources naturelles et aux risques",
            "Croiser les données géologiques, pédologiques, hydrographiques et d'aménagements par analyse spatiale multicritère",
            "Automatiser les flux de traitement de données géographiques à l'aide de scripts Python et de requêtes SQL spatiales (PostGIS)",
            "Produire des cartes géologiques, hydrogéologiques et de vulnérabilité conformes aux normes de diffusion cartographique",
            "Mettre en place des plateformes webmapping pour partager les données avec les décideurs et le grand public"
        ],
        "workEnvironment": "Travail en bureau d'études ou laboratoire d'analyse spatiale devant des stations de calcul graphique dotées de plusieurs écrans haute résolution, avec des sorties ponctuelles pour le calage au sol de données GPS différentiel.",
        "typicalDay": [
            { "time": "08h30", "activity": "Téléchargement et prétraitement radiométrique de scènes satellites Sentinel-2 pour suivre l'évolution d'un trait de côte" },
            { "time": "10h00", "activity": "Calcul d'indices spectraux (NDVI, NDWI, indices minéralogiques d'altération ferrique et argileuse)" },
            { "time": "11h30", "activity": "Intégration des données de forages récents dans la base de données PostgreSQL/PostGIS" },
            { "time": "13h30", "activity": "Déjeuner avec les ingénieurs géologues pour affiner les critères d'une analyse spatiale de susceptibilité aux glissements" },
            { "time": "14h30", "activity": "Traitement d'un vol de drone : calcul du nuage de points et génération de l'orthophotoplan au centimètre près" },
            { "time": "16h30", "activity": "Développement d'un script Python (GeoPandas) pour automatiser l'export des cartes thématiques au format vectoriel" },
            { "time": "18h00", "activity": "Mise à jour du portail web SIG interactif pour la consultation des données par les agents de terrain" }
        ],
        "companyRole": "Architecte de la donnée spatiale, il transforme des millions de pixels satellites et de mesures de terrain en cartes d'aide à la décision claires et interactives.",
        "skills": {
            "technical": [
                "Logiciels SIG avancés (QGIS, ArcGIS Pro, FME)",
                "Télédétection optique, radar et LiDAR (logiciels ENVI, SNAP, Google Earth Engine)",
                "Bases de données spatiales (PostgreSQL / PostGIS)",
                "Programmation géospatiale (Python : GDAL, GeoPandas, Rasterio)",
                "Cartographie thématique, sémiologie graphique et géodésie (projections, datums)",
                "Webmapping (Leaflet, Mapbox, Geoserver)"
            ],
            "human": [
                "Grande rigueur logique et sens de l'organisation des données",
                "Sens esthétique et respect rigoureux de la sémiologie graphique",
                "Capacité à comprendre les besoins métiers des géologues, forestiers et urbanistes",
                "Autonomie et veille continue sur les technologies spatiales"
            ],
            "tools": ["QGIS", "ArcGIS Pro", "Google Earth Engine", "PostgreSQL / PostGIS", "Python (GeoPandas, GDAL)", "SNAP (ESA)", "FME"]
        },
        "geosciencesPedagogy": {
            "pathway": "Du pixel satellite à la carte d'aide à la décision",
            "steps": ["🛰️ Acquisition satellitaire / LiDAR", "💻 Correction géométrique & radiométrique", "🗺️ Intégration dans le SIG PostGIS", "🔍 Analyse spatiale & indices géologiques", "📊 Croisement multicritère des données", "🎨 Mise en page sémiologique", "🌐 Diffusion webmapping interactive"]
        },
        "studies": {
            "pathway": [
                { "level": "Bac +3", "degree": "Licence Sciences de la Terre ou Licence Pro SIG (ex: Cartographie et Géomatique)" },
                { "level": "Bac +5", "degree": "Master Géomatique / Télédétection / Master STPE (Université de Poitiers, ENSG Géomatique, Université de Rennes)" },
                { "level": "Bac +5", "degree": "Diplôme d'Ingénieur Géomètre-Topographe ou Géomaticien (ESGT, ENSG)" }
            ],
            "schools": [
                { "name": "Université de Poitiers - Faculté des Sciences (Licence ST, Master STPE, outils de télédétection)", "country": "France", "scope": "France" },
                { "name": "ENSG Géomatique (École Nationale des Sciences Géographiques - Marne-la-Vallée)", "country": "France", "scope": "France" },
                { "name": "Centre de Suivi Écologique de Dakar (CSE - Pôle d'excellence en géomatique)", "country": "Sénégal", "scope": "Sénégal" },
                { "name": "Institut des Sciences de la Terre (IST - UCAD Dakar)", "country": "Sénégal", "scope": "Sénégal" }
            ],
            "certifications": ["Certification professionnelle QGIS / Esri", "Pilote de drone civil professionnel (DGAC / ANACIM)"]
        },
        "career": {
            "sectors": ["Bureaux d'études en environnement, urbanisme et géologie", "Instituts géographiques et géologiques nationaux (IGN, BRGM)", "Compagnies d'exploration minière et d'énergies", "Collectivités territoriales et agences d'urbanisme", "Grandes ONG internationales et agences de l'ONU"],
            "companies": ["BRGM", "IGN", "Antea Group", "Centre de Suivi Écologique (Sénégal)", "SUEZ", "Compagnies minières internationales"],
            "evolution": ["Chef de projet géomatique", "Directeur de pôle SIG et données spatiales", "Architecte de données territoriales", "Consultant international en observation de la Terre"],
            "pros": ["Compétences ultra-recherchées dans tous les secteurs de l'économie", "Évolution rapide des technologies (satellites, IA, drones)", "Travail valorisant produisant des visualisations concrètes"],
            "cons": ["Travail prolongé sur écran", "Exigence d'une veille technologique permanente", "Gestion fréquente de données volumineuses et complexes à nettoyer"]
        },
        "gettingStarted": "Maîtriser QGIS, se former à Python appliqué à la géomatique et explorer les catalogues de données gratuites Sentinel de l'Agence Spatiale Européenne (Copernicus).",
        "aiImpact": {
            "level": "Très élevé / Automatisation de l'analyse d'images",
            "opportunities": ["Segmentation automatique de l'occupation du sol et des fractures géologiques par réseaux de neurones", "Détection automatique de changements environnementaux en temps réel sur flux satellites", "Génération de jumeaux numériques de territoires"],
            "challenges": ["Nécessité de maîtriser le traitement des flux massifs de données (Big Data Spatial)"],
            "humanEdge": "La conception du modèle d'analyse spatiale et l'interprétation critique de la cohérence géographique demeurent humaines."
        },
        "africaContext": {
            "title": "Le Géomaticien au Sénégal : Le CSE, Pôle d'Excellence d'Afrique de l'Ouest",
            "description": "Le Sénégal abrite le Centre de Suivi Écologique (CSE) de Dakar, référence internationale en télédétection et SIG pour l'Afrique de l'Ouest. Les géomaticiens y surveillent la dynamique des côtes (érosion de Saint-Louis et Rufisque), le couvert végétal pastoral, les feux de brousse et la cartographie des parcelles agricoles.",
            "keyInstitutions": [
                "Centre de Suivi Écologique (CSE - Dakar)",
                "Agence Nationale de l'Aménagement du Territoire (ANAT)",
                "Direction des Travaux Géographiques et Cartographiques (DTGC)",
                "Institut des Sciences de la Terre (IST - UCAD)"
            ],
            "projects": [
                "Suivi satellitaire de l'érosion côtière sur le littoral sénégalais",
                "Plateforme de suivi des feux de brousse et des parcours pastoraux du Ferlo",
                "Base de données géospatiale du cadastre minier et foncier national"
            ],
            "opportunities": "Très forte demande dans les agences d'État, les projets financés par la Banque Mondiale et les bureaux d'études de Dakar."
        },
        "salary": {
            "france": {
                "entry": 28000,
                "mid": 38000,
                "expert": 54000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : APEC & observatoire des métiers de la géomatique"
            },
            "senegal": {
                "entry": 350000,
                "mid": 700000,
                "expert": 1500000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés en bureau d'études SIG et agences publiques à Dakar"
            }
        },
        "connectedFamilies": ["numerique-ia", "data-decision", "environnement-climat", "agriculture-agritech"],
        "relatedJobs": ["geologue", "pedologue", "hydrogeologue", "geographe-cartographe", "ingenieur-risques-naturels"],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Fiche Géologue (mention modélisation 3D, télédétection satellitaire et géostatistiques)",
                "url": "https://sfa.univ-poitiers.fr/geosciences/debouches-professionnels/geologue/",
                "type": "metier"
            },
            {
                "organization": "Association Française pour l'Information Géographique (AFIGÉO)",
                "title": "Référentiel des compétences et métiers de la géomatique",
                "url": "https://www.afigeo.asso.fr",
                "type": "secteur"
            }
        ],
        "sourcePoitiers": True,
        "sourceBRGM": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "La constellation de satellites Sentinel-2 de l'Union Européenne survole l'intégralité des terres émergées de la planète tous les 5 jours avec une résolution de 10 mètres par pixel, en accès 100% libre et gratuit.",
            "pourquoi": "Le programme Copernicus vise à doter le monde d'une capacité d'observation continue pour suivre le climat, les forêts, les eaux et les catastrophes naturelles.",
            "a_retenir": "Le géomaticien en géosciences est l'interprète qui transforme ce flux colossal de données spatiales en décisions territoriales vitales."
        }
    },
    {
        "id": "expert-sites-sols-pollues",
        "slug": "expert-sites-sols-pollues",
        "title": "Expert en Sites & Sols Pollués / Remédiation Environnementale",
        "aliases": ["Ingénieur sites et sols pollués", "Consultant dépollution des sols", "Spécialiste en remédiation environnementale", "Contaminated Land Specialist"],
        "icon": "🧪",
        "familyId": "sciences-terre-geosciences",
        "domain": "Environnement & géosciences",
        "domainId": "environnement-sites-pollues",
        "subdomain": "Dépollution & Remédiation des Terrains",
        "shortDescription": "Spécialiste de la santé environnementale des terres, il identifie les contaminations chimiques et industrielles dans les sols et les nappes, évalue les risques sanitaires et pilote les chantiers de dépollution.",
        "longDescription": "Friches industrielles, anciennes usines à gaz, stations-service abandonnées ou décharges chimiques : les activités humaines du passé ont laissé de nombreuses traces polluantes dans le sous-sol. L'expert en sites et sols pollués est le médecin rééducateur de ces terrains dégradés. Alliant connaissances pointues en géologie, hydrogéologie et chimie de l'environnement, il réalise des diagnostics approfondis (forages environnementaux, prélèvements d'eau, de sol et de gaz du sol), modélise les panaches de dispersion des polluants (hydrocarbures, solvants chlorés, métaux lourds) et calcule les risques pour la santé humaine. Il conçoit ensuite le plan de dépollution adapté (bioremédiation, désorption thermique, venting, lavage de sol) pour rendre les terrains à nouveau habitables ou constructibles.",
        "simpleDefinition": "Ingénieur qui nettoie et répare les terrains pollués par d'anciennes usines ou produits chimiques, pour éliminer les poisons et rendre la terre saine pour de nouvelles constructions.",
        "level": "Bac +5 (Master STPE Matériaux-Minéraux / Ingénieur Environnement)",
        "missions": [
            "Conduire des études historiques, documentaires et vulnérabilités de sites industriels (diagnostic initial)",
            "Définir et superviser le plan d'échantillonnage des sols, des eaux souterraines et des gaz du sol (air du sol)",
            "Interpréter les résultats d'analyses chimiques de laboratoire et cartographier les panaches de contamination",
            "Réaliser l'Évaluation Quantitative des Risques Sanitaires (EQRS) pour les futurs usagers du site",
            "Concevoir le plan de gestion environnemental et choisir les techniques de remédiation adaptées in situ ou ex situ",
            "Superviser les chantiers de dépollution : excavation des terres polluées, pompage-traitement de nappe (Pump & Treat), bioventing",
            "Établir les attestations de conformité (attestation ATTES) garantissant la prise en compte de la pollution dans les projets de construction"
        ],
        "workEnvironment": "Alternance entre visites de terrain sur friches industrielles, chantiers de forages environnementaux avec équipement de protection individuelle (EPI, masque à gaz si solvants), et travail au bureau d'études pour la modélisation des risques sanitaires.",
        "typicalDay": [
            { "time": "08h30", "activity": "Arrivée sur une ancienne friche de raffinerie pour superviser une campagne de forages de prélèvement de carottes de sol" },
            { "time": "09h30", "activity": "Mesure des composés organiques volatils (COV) au détecteur PID (photo-ionisation) sur les carottes fraîches" },
            { "time": "11h30", "activity": "Prélèvement d'échantillons de gaz du sol sous dalle avec pose de canules d'échantillonnage étanches" },
            { "time": "13h00", "activity": "Déjeuner de travail et pointage des échantillons expédiés sous glacière au laboratoire certifié" },
            { "time": "14h30", "activity": "Au bureau : modélisation de la migration d'un panache de trichloroéthylène dans la nappe phréatique sous-jacente" },
            { "time": "16h30", "activity": "Calcul des doses d'exposition par inhalation pour les futurs occupants des logements prévus sur le site" },
            { "time": "18h00", "activity": "Validation des préconisations du plan de dépollution : traitement par oxydation chimique in situ (ISCO)" }
        ],
        "companyRole": "Tiers expert de confiance, il engage sa responsabilité technique et environnementale pour certifier que les terrains requalifiés sont sans danger pour la santé des enfants et des familles.",
        "skills": {
            "technical": [
                "Mécanisme de transfert des polluants dans le sol, l'eau et l'air (adsorption, biodégradation, volatilisation)",
                "Chimie des contaminants : HAP, PCB, BTEX, métaux lourds (plomb, cadmium, arsenic), solvants chlorés, PFAS",
                "Normes françaises et européennes de gestion des sites et sols pollués (méthodologie nationale SSP)",
                "Techniques de remédiation : bioremédiation, venting, stripping, oxydation chimique, barrières perméables réactives",
                "Évaluation Quantitative des Risques Sanitaires (logiciels d'exposition RISC, RBCA)",
                "Réglementation des ICPE (Installations Classées pour la Protection de l'Environnement)"
            ],
            "human": [
                "Rigueur scientifique et probité déontologique exemplaire",
                "Aisance rédactionnelle pour produire des rapports d'experts juridiquement solides",
                "Sensibilité aiguë à la santé publique et à la protection des écosystèmes",
                "Aptitude à communiquer sereinement dans des contextes de contentieux environnemental"
            ],
            "tools": ["Détecteur PID (photo-ionisation)", "Sondes de prélèvement d'eau et d'air du sol", "Modèles de transfert RISC / RBCA", "QGIS", "Pompes péristaltiques de micropurge"]
        },
        "geosciencesPedagogy": {
            "pathway": "De la friche polluée au terrain assaini",
            "steps": ["🏭 Étude historique de la friche", "🧪 Sondages & prélèvements de sol et gaz", "🔬 Analyses chimiques certifiées", "📊 Modélisation du panache & risques", "🛠️ Sélection du procédé de dépollution", "🌿 Traitement in situ & suivi de nappe", "🏡 Requalification pour la ville durable"]
        },
        "studies": {
            "pathway": [
                { "level": "Bac +3", "degree": "Licence Sciences de la Terre ou Chimie de l'Environnement" },
                { "level": "Bac +5", "degree": "Master EUR STPE Parcours Matériaux-Minéraux (Université de Poitiers - débouché remédiation des sols)" },
                { "level": "Bac +5", "degree": "Master Génie de l'Environnement / Diplôme d'Ingénieur Géologue-Environnement (UniLaSalle, ENSG Nancy, INSA)" }
            ],
            "schools": [
                { "name": "Université de Poitiers - Master EUR Matériaux-Minéraux (Débouché remédiation des sites et sols pollués cité par l'UFR SFA)", "country": "France", "scope": "France" },
                { "name": "UniLaSalle Beauvais (Filière Géologie & Environnement)", "country": "France", "scope": "France" },
                { "name": "Institut des Sciences de l'Environnement (ISE - UCAD Dakar)", "country": "Sénégal", "scope": "Sénégal" },
                { "name": "Institut des Sciences de la Terre (IST - UCAD Dakar)", "country": "Sénégal", "scope": "Sénégal" }
            ],
            "certifications": ["Certification LNE Sites et Sols Pollués (norme NF X 31-620 domaines A, B, C)", "Habilitation risque chimique niveau 2"]
        },
        "career": {
            "sectors": ["Bureaux d'études spécialisés en sites et sols pollués", "Entreprises de dépollution et de travaux environnementaux", "Grands groupes industriels (chimie, pétrole, sidérurgie, transports)", "Agences publiques environnementales (ADEME, BRGM)", "Aménageurs urbains et établissements publics fonciers"],
            "companies": ["Antea Group", "WSP", "Golder", "Suez Déchets / Sites & Sols", "Veolia Séché Environnement", "BRGM", "ADEME"],
            "evolution": ["Chef de projet senior sites pollués", "Directeur d'agence ingénierie environnementale", "Auditeur environnemental de fusions-acquisitions", "Expert agréé auprès du Ministère de l'Écologie"],
            "pros": ["Métier à très forte utilité pour la reconquête de la biodiversité et de la ville durable", "Secteur en expansion continue porté par le recyclage des friches (loi ZAN)", "Diversité technique mêlant chimie, géologie et santé publique"],
            "cons": ["Intervention sur des sites potentiellement dangereux nécessitant le port d'EPI stricts", "Pression des promoteurs immobiliers pour réduire les coûts et délais de dépollution", "Responsabilité pénale et environnementale élevée"]
        },
        "gettingStarted": "Effectuer des stages dans des bureaux d'études certifiés LNE (norme NF X 31-620) et maîtriser l'évaluation des risques sanitaires et la dynamique des polluants dans les sols.",
        "aiImpact": {
            "level": "Modéré / Optimisation de l'échantillonnage",
            "opportunities": ["Optimisation géostatistique des maillages de prélèvements pour réduire les coûts", "Modélisation 3D dynamique de l'atténuation naturelle des solvants par intelligence artificielle", "Prédiction des transferts de polluants vers les nappes"],
            "challenges": ["L'hétérogénéité des remblais anthropiques et des pollutions exige toujours des sondages réels"],
            "humanEdge": "La responsabilité légale de délivrer une attestation garantissant l'absence de risque sanitaire pour des logements est strictement humaine."
        },
        "africaContext": {
            "title": "L'Expert Sites & Sols Pollués au Sénégal : Dépollution Urbaine et Industrielle",
            "description": "À Dakar et dans les pôles industriels du Sénégal (Mbao, zone franche de Rufisque, décharge de Mbeubeuss, sites miniers de Taïba et Kédougou), la gestion des sols pollués est devenue une priorité nationale. L'expert intervient pour diagnostiquer les rejets d'hydrocarbures, les résidus de métaux lourds et sécuriser les programmes de reconversion urbaine.",
            "keyInstitutions": [
                "Direction de l'Environnement et des Établissements Classés (DEEC)",
                "Institut des Sciences de l'Environnement (ISE - UCAD Dakar)",
                "Centre Antipoison du Sénégal",
                "PROMOGED (Projet de Modernisation de la Gestion des Déchets)"
            ],
            "projects": [
                "Réhabilitation environnementale et fermeture progressive de la décharge de Mbeubeuss",
                "Dépollution des sols de la baie de Hann et des zones portuaires de Dakar",
                "Plans de gestion environnementale et réhabilitation des sites miniers post-exploitation"
            ],
            "opportunities": "Postes de consultants auprès des agences étatiques, des bailleurs de fonds internationaux (Banque Mondiale, AFD) et des industries chimiques."
        },
        "salary": {
            "france": {
                "entry": 30000,
                "mid": 44000,
                "expert": 62000,
                "currency": "EUR",
                "period": "an",
                "note": "Source : Syntec Ingénierie, APEC & Université de Poitiers"
            },
            "senegal": {
                "entry": 450000,
                "mid": 900000,
                "expert": 1800000,
                "currency": "FCFA",
                "period": "mois",
                "note": "Salaires nets constatés en bureau d'études environnementales et projets DEEC à Dakar"
            }
        },
        "connectedFamilies": ["environnement-climat", "agriculture-agritech", "sante-biomedical", "btp-architecture"],
        "relatedJobs": ["pedologue", "hydrogeologue", "geologue", "ingenieur-materiaux-geosciences", "chercheur-geosciences"],
        "sources": [
            {
                "organization": "Université de Poitiers",
                "title": "Master EUR STPE Parcours Matériaux-Minéraux - Débouché Sites et Sols Pollués",
                "url": "https://sfa.univ-poitiers.fr/geosciences/formations/master-eur-parcours-materiaux-mineraux/",
                "type": "formation"
            },
            {
                "organization": "Ministère de la Transition Écologique",
                "title": "Méthodologie nationale de gestion des sites et sols pollués",
                "url": "https://www.ecologie.gouv.fr/politiques-publiques/sites-sols-pollues",
                "type": "reglementation"
            }
        ],
        "sourcePoitiers": True,
        "sourceBRGM": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En France, la base de données BASOL recense plus de 7 000 sites pollués nécessitant une action des pouvoirs publics, et des dizaines de milliers de friches industrielles sont à requalifier.",
            "pourquoi": "Deux siècles d'industrialisation lourde (métallurgie, carbochimie, pétrochimie) ont disséminé des résidus tenaces dans les sols.",
            "a_retenir": "L'expert en sites pollués est l'artisan qui permet de reconstruire la ville sur la ville sans artificialiser de nouvelles terres agricoles sauvages."
        }
    }
]

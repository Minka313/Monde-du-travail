# -*- coding: utf-8 -*-
"""
BASE DE DONNÉES DU SECTEUR BIOLOGIE & CHIMIE — PARTIE 1
15 Domaines d'Excellence • Fiches Métiers 1 à 12 (Référentiel Officiel CIDJ Biologie-Chimie)
Double Ancrage Géographique : France (€) / Sénégal & Afrique de l'Ouest (FCFA)
Sources Principales : CIDJ, Onisep, France Chimie, Sociétés Savantes de Biologie et de Chimie
"""

BIOCHIMIE_DOMAINS = [
    {
        "id": "biologie-sciences-vivant",
        "name": "Biologie Fondamentale & Sciences du Vivant",
        "icon": "🧬",
        "order": 1,
        "chainStage": "Observation & Analyse du Vivant",
        "description": "Explorer les mécanismes fondamentaux des cellules, des tissus et des organismes vivants pour la recherche, la santé et l'industrie.",
        "subdomains": ["Biologie cellulaire", "Biochimie des protéines", "Génétique", "Analyses biologiques"]
    },
    {
        "id": "microbiologie",
        "name": "Microbiologie, Virologie & Bactériologie",
        "icon": "🔬",
        "order": 2,
        "chainStage": "Culture & Identification des Micro-organismes",
        "description": "Étudier les bactéries, virus, levures et champignons microscopiques pour le diagnostic, l'agroalimentaire, la pharmacie et l'environnement.",
        "subdomains": ["Bactériologie", "Virologie", "Mycologie & Levures", "Contrôle microbiologique de stérilité"]
    },
    {
        "id": "chimie-synthese",
        "name": "Chimie Fondamentale, Synthèse & Analyse",
        "icon": "🧪",
        "order": 3,
        "chainStage": "Réaction Moléculaire & Caractérisation",
        "description": "Synthétiser de nouvelles molécules, purifier les composés et analyser la matière par chromatographie, spectroscopie et titrages.",
        "subdomains": ["Chimie organique", "Chimie analytique (HPLC/CPG)", "Spectroscopie (RMN, IR)", "Contrôle qualité physico-chimique"]
    },
    {
        "id": "formulation",
        "name": "Formulation Chimique, Émulsions & Matériaux",
        "icon": "🧴",
        "order": 4,
        "chainStage": "Mélange & Optimisation des Formules",
        "description": "Associer principes actifs, solvants, tensioactifs et polymères pour créer peintures, crèmes, cosmétiques, adhésifs et détergents stables.",
        "subdomains": ["Formulation cosmétique", "Peintures, encres & vernis", "Formulation galénique", "Tensioactifs & Émulsions"]
    },
    {
        "id": "galenique-bioproduction",
        "name": "Galénique, Bioproduction & Procédés Pharmaceutiques",
        "icon": "💊",
        "order": 5,
        "chainStage": "Mise en Forme & Culture en Bioréacteur",
        "description": "Fabriquer des biomédicaments, vaccins et formes pharmaceutiques (comprimés, gélules, injectables) en respectant les BPF.",
        "subdomains": ["Bioréacteurs & Fermentation", "Formes sèches (comprimés, gélules)", "Purification par chromatographie industrielle", "Bonnes Pratiques de Fabrication (BPF)"]
    },
    {
        "id": "biotechnologies",
        "name": "Biotechnologies & Génie Génétique",
        "icon": "🧬",
        "order": 6,
        "chainStage": "Ingénierie Cellulaire & Bioprocédés",
        "description": "Utiliser le potentiel d'organismes vivants ou d'enzymes pour produire des thérapies innovantes, des biocarburants et des bio-matériaux.",
        "subdomains": ["ADN recombinant & CRISPR", "Cultures cellulaires animales et végétales", "Génie enzymatique", "Biotechnologies blanches et rouges"]
    },
    {
        "id": "bio-informatique",
        "name": "Bio-informatique & Données du Vivant",
        "icon": "💻",
        "order": 7,
        "chainStage": "Algorithmique Génomique & Modélisation 3D",
        "description": "Développer des algorithmes pour décoder les mégadonnées de séquençage d'ADN (NGS), modéliser les protéines et guider la découverte de médicaments.",
        "subdomains": ["Génomique & Transcriptomique NGS", "Modélisation moléculaire 3D (Docking)", "Pipelines Python / R / Bioconductor", "Bases de données biologiques (NCBI, UniProt)"]
    },
    {
        "id": "botanique-biologie-vegetale",
        "name": "Biologie Végétale & Botanique",
        "icon": "🌿",
        "order": 8,
        "chainStage": "Flore, Herbiers & Taxonomie",
        "description": "Inventorier, identifier, classer et protéger les espèces végétales et valoriser les principes actifs naturels des plantes médicinales.",
        "subdomains": ["Taxonomie & Systématique végétale", "Phytosociologie & Inventaires floristiques", "Herbiers & Conservation des graines", "Physiologie végétale"]
    },
    {
        "id": "laboratoires-analyses",
        "name": "Laboratoires, Analyses & Essais Scientifiques",
        "icon": "🧫",
        "order": 9,
        "chainStage": "Instrumentation, Préparation & Métrologie",
        "description": "Assurer la préparation des milieux, l'hébergement des modèles expérimentaux, l'étalonnage des appareils et l'exécution rigoureuse des protocoles.",
        "subdomains": ["Analyses physico-chimiques", "Animalerie de recherche", "Préparation technique & Verrerie", "Métrologie des instruments"]
    },
    {
        "id": "cosmetique-parfumerie-aromes",
        "name": "Parfumerie, Cosmétique & Aromatologie",
        "icon": "🌸",
        "order": 10,
        "chainStage": "Création Olfactive & Sensorielle",
        "description": "Composer des fragrances d'exception et concevoir des arômes alimentaires en associant chimie fine, molécules de synthèse et extraits naturels.",
        "subdomains": ["Création de parfums (Le Nez)", "Arômes alimentaires sucrés/salés", "Évaluation sensorielle", "Extraction des huiles essentielles"]
    },
    {
        "id": "chimie-industrie",
        "name": "Chimie Industrielle, Teintures & Matériaux",
        "icon": "🧵",
        "order": 11,
        "chainStage": "Colorimétrie & Procédés Industriels",
        "description": "Formuler les pigments, teintures et colorants pour le textile, les polymères, l'automobile et contrôler la couleur par spectrophotométrie.",
        "subdomains": ["Colorimétrie textile", "Spectrophotométrie", "Chimie des polymères et plasturgie", "Procédés de teinture et d'ennoblissement"]
    },
    {
        "id": "environnement-qualite-air-depollution",
        "name": "Environnement, Qualité de l'Air & Dépollution NRBC",
        "icon": "🌍",
        "order": 12,
        "chainStage": "Surveillance Écologique & Neutralisation",
        "description": "Mesurer les polluants atmosphériques, traquer les particules fines et décontaminer les environnements face aux risques NRBC.",
        "subdomains": ["Surveillance de la qualité de l'air", "Dépollution NRBC", "Analyse des gaz et COV", "Traitement des effluents industriels"]
    },
    {
        "id": "recherche-rd-produit",
        "name": "Recherche, R&D & Développement Produit",
        "icon": "🧑🔬",
        "order": 13,
        "chainStage": "Innovation Scientifique & Prototypage",
        "description": "Concevoir les produits de rupture de demain, tester leur efficacité et piloter le transfert de l'échelle paillasse vers l'usine.",
        "subdomains": ["R&D industrielle", "Design d'expérience et tests d'usage", "Veille technologique et brevets", "Scale-up pilote"]
    },
    {
        "id": "police-scientifique",
        "name": "Police Technique & Scientifique (Criminalistique)",
        "icon": "👮",
        "order": 14,
        "chainStage": "Recherche d'Indices & Preuve Biologique/Chimique",
        "description": "Rechercher, prélever et analyser les empreintes génétiques (ADN), les stupéfiants, explosifs et résidus de tir pour éclairer la justice.",
        "subdomains": ["Biologie médico-légale (ADN)", "Chimie des stupéfiants et toxicologie", "Balistique et résidus de tir", "Traces papillaires et constatations"]
    },
    {
        "id": "sciences-thanatologiques",
        "name": "Sciences Thanatologiques & Soins Funéraires",
        "icon": "⚰️",
        "order": 15,
        "chainStage": "Biologie Thanatologique & Conservation",
        "description": "Prodiguer les soins de thanatopraxie, de conservation aseptique et de restauration pour préserver la dignité des défunts et rassurer les familles.",
        "subdomains": ["Thanatopraxie & Injection artérielle", "Soins de présentation et cosmétique funéraire", "Hygiène biologique funéraire", "Restauration tégumentaire"]
    }
]

BIOCHIMIE_JOBS = [
    # 1. AGENT DE STÉRILISATION
    {
        "id": "agent-sterilisation",
        "slug": "agent-sterilisation",
        "title": "Agent / Agente de Stérilisation",
        "aliases": ["Opérateur de stérilisation", "Agent de stérilisation hospitalière", "Technicien de stérilisation industrielle"],
        "icon": "🧼",
        "familyId": "biologie-chimie",
        "connectedFamilies": ["biologie-chimie", "sante-soins-paramedical", "industrie-mecanique"],
        "domain": "Biologie Fondamentale & Sciences du Vivant",
        "domainId": "biologie-sciences-vivant",
        "subdomain": "Contrôle microbiologique de stérilité",
        "shortDescription": "Garant absolu de l'asepsie des dispositifs médicaux, il réceptionne, nettoie, désinfecte, conditionne et stérilise les instruments chirurgicaux en autoclave.",
        "longDescription": "Selon la fiche officielle du CIDJ, l'agent de stérilisation joue un rôle crucial dans la prévention des infections nosocomiales en milieu hospitalier ou industriel. Respectant le principe strict de la 'marche en avant' (du sale vers le propre sans retour en arrière), il décontamine les instruments souillés sortant des blocs opératoires, contrôle leur propreté au microscope, les reconstitue en boîtes opératoires, les conditionne sous sachet scellé et pilote les autoclaves de stérilisation à vapeur d'eau sous pression tout en assurant une traçabilité informatique sans faille.",
        "simpleDefinition": "Professionnel qui lave, désinfecte et stérilise les instruments chirurgicaux dans de grands autoclaves pour qu'ils soient exempts de tout microbe.",
        "level": "CAP / Bac Pro (CAP APH / Bac Pro HPS - Hygiène, Propreté, Stérilisation)",
        "missions": [
            "Réceptionner les boîtes d'instruments chirurgicaux usagés en provenance des blocs et services de soins",
            "Procéder au pré-désinfection, au nettoyage ultrasonique et au lavage en laveur-désinfecteur thermique",
            "Vérifier le bon fonctionnement mécanique des pinces et ciseaux sous loupe éclairante",
            "Conditionner les instruments en paniers stériles scellés avec témoins chimiques de stérilisation",
            "Charger les autoclaves, programmer les cycles de stérilisation vapeur à 134°C et archiver les diagrammes de traçabilité"
        ],
        "workEnvironment": "Services de stérilisation centrale hospitaliers (milieu clos à atmosphère contrôlée), industrie pharmaceutique et fabricants de dispositifs médicaux.",
        "typicalDay": [
            {"time": "06:30", "activity": "Prise de poste en zone de lavage (zone sale) : tri des instruments souillés du bloc d'urgences de nuit"},
            {"time": "08:30", "activity": "Chargement des laveurs-désinfecteurs thermiques et validation des cycles de décontamination"},
            {"time": "10:30", "activity": "Passage en zone de conditionnement (zone propre) : recomposition minutieuse d'une boîte de neurochirurgie"},
            {"time": "13:00", "activity": "Enfournement des paniers dans l'autoclave grande capacité et vérification des tests de pénétration de vapeur (Bowie-Dick)"},
            {"time": "14:30", "activity": "Déchargement en zone stérile, contrôle des scellages et distribution des boîtes stériles vers les blocs"}
        ],
        "skills": {
            "technical": [
                "Principe de la 'marche en avant' et règles d'hygiène hospitalière",
                "Connaissance exhaustive des instruments chirurgicaux de toutes spécialités",
                "Conduite et paramétrage des autoclaves de stérilisation à vapeur d'eau et basse température",
                "Contrôles physico-chimiques et microbiologiques de la stérilité (indicateurs biologiques)",
                "Gestion de la traçabilité informatique par code-barres"
            ],
            "human": [
                "Rigueur absolue et respect scrupuleux des protocoles opératoires",
                "Sens aigu de la responsabilité (la moindre faute met en jeu la vie du patient)",
                "Capacité de concentration et minutie d'assemblage",
                "Bonne endurance physique en station debout"
            ],
            "tools": [
                "Autoclaves hospitaliers classe B et basse température (plasma de peroxyde d'hydrogène)",
                "Laveurs-désinfecteurs thermo-désinfectants",
                "Soudeuses thermiques de gaines de stérilisation",
                "Scanners de code-barres et logiciel de traçabilité de stérilisation"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Diplôme initial", "title": "Bac Pro HPS (Hygiène, Propreté, Stérilisation) ou Bac Pro ASSP", "desc": "Formation aux règles d'asepsie, microbiologie et chimie des détergents."},
                {"step": "Formation spécialisée", "title": "Titre professionnel d'Agent de Stérilisation en Milieu Hospitalier", "desc": "Modules certifiants en conduite d'autoclaves et pharmacovigilance des dispositifs médicaux."}
            ],
            "schools": [
                {"name": "Lycées professionnels préparant au Bac Pro HPS en France", "country": "France", "scope": "France"},
                {"name": "Centres de formation hospitalière et ENDSS — Dakar", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Bac Pro Hygiène, Propreté, Stérilisation", "CQP Agent de Stérilisation", "Habilitation à la conduite d'autoclaves sous pression"]
        },
        "career": {
            "sectors": ["Santé hospitalière", "Industrie pharmaceutique et biomédicale", "Cabinets de chirurgie ambulatoire"],
            "employerTypes": ["Centres hospitaliers publics et privés", "Sous-traitants de stérilisation industrielle", "Laboratoires de recherche"],
            "evolution": "Agent de stérilisation ➔ Chef d'équipe de stérilisation ➔ Responsable technique d'unité de stérilisation centrale ➔ Cadre médico-technique",
            "pros": "Rôle indispensable à la sécurité du patient sans contact direct avec la souffrance ou le sang des malades, travail méthodique et structuré.",
            "cons": "Travail en atmosphère chaude et humide autour des autoclaves, port obligatoire d'EPI complets (charlotte, masque, gants épais), horaires postés."
        },
        "salary": "🇫🇷 France : 1 600 - 2 200 € net/mois selon ancienneté (CIDJ) • 🇸🇳 Sénégal : 110 000 - 260 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Dans un autoclave médical, les instruments sont soumis à une vapeur d'eau saturée sous pression à 134°C pendant au moins 18 minutes. Cette température détruit même les prions (responsables de la maladie de Creutzfeldt-Jakob), qui résistent à l'ébullition classique !",
            "pourquoi": "La pression élève la température d'ébullition et dénature irréversiblement les protéines des agents pathogènes les plus résistants."
        },
        "sources": [
            {"organization": "CIDJ", "title": "Fiche métier : Agent de stérilisation", "url": "https://www.cidj.com/s-orienter/metiers/agent-agente-de-sterilisation", "type": "metier"},
            {"organization": "Société Française des Sciences de la Stérilisation (SF2S)", "title": "Bonnes Pratiques de Pharmacie Hospitalière - Ligne Directrice Stérilisation", "type": "institutionnel"}
        ],
        "interests": ["soigner-aider", "experiences-laboratoire", "construire-fabriquer"],
        "relatedJobSlugs": ["infirmier-bloc-operatoire", "technicien-laboratoire", "employe-technique-laboratoire"]
    },

    # 2. AGENT DE TRAITEMENT DÉPOLLUANT NRBC
    {
        "id": "agent-depolluant-nrbc",
        "slug": "agent-depolluant-nrbc",
        "title": "Agent / Agente de Traitement Dépolluant NRBC",
        "aliases": ["Opérateur décontamination NRBC", "Technicien dépollution chimique et biologique", "Spécialiste décontamination radiologique et biologique"],
        "icon": "☣️",
        "familyId": "biologie-chimie",
        "connectedFamilies": ["biologie-chimie", "environnement-climat", "industrie-mecanique"],
        "domain": "Environnement, Qualité de l'Air & Dépollution NRBC",
        "domainId": "environnement-qualite-air-depollution",
        "subdomain": "Dépollution NRBC",
        "shortDescription": "Spécialiste des risques extrêmes, il intervient pour neutraliser, confiner et éliminer les pollutions Nucléaires, Radiologiques, Biologiques et Chimiques accidentelles ou criminelles.",
        "longDescription": "Selon le référentiel CIDJ, l'agent de traitement dépolluant NRBC intervient en combinaison étanche pressurisée pour assainir des sites contaminés par des agents toxiques de guerre, des fuites chimiques industrielles, des retombées radiologiques ou des germes biologiques pathogènes. Il procède à la détection par spectrométrie, déploie des douches de décontamination, pulvérise des agents neutralisants chimiques et conditionne les déchets toxiques en fûts sécurisés étanches.",
        "simpleDefinition": "Professionnel en combinaison étanche de protection qui nettoie et détruit les poisons chimiques, les bactéries dangereuses et les déchets toxiques après un accident.",
        "level": "Bac à Bac +2 (Bac Pro chimie / BTS Métiers des services à l'environnement ou formation militaire/sécurité civile)",
        "missions": [
            "Enfiler et vérifier l'étanchéité absolue de l'équipement de protection individuelle (scaphandre étanche, appareil respiratoire isolant)",
            "Détecter et quantifier la toxicité à l'aide d'appareils de mesure portables (détecteurs de gaz toxiques, radiamètres, bandelettes de détection chimique)",
            "Établir les périmètres de sécurité (zone d'exclusion, zone contrôlée, sas de décontamination)",
            "Appliquer des solutions décontaminantes chimiques (oxydants, chlore, poudres adsorbantes) sur les matériels et sols",
            "Collecter, conditionner et étiqueter les boues et résidus toxiques dans des conteneurs agréés pour élimination sécurisée"
        ],
        "workEnvironment": "Sites industriels chimiques et pétrochimiques, centrales nucléaires, régiments spécialisés de l'armée (2e Régiment de Dragons), unités de sécurité civile.",
        "typicalDay": [
            {"time": "08:00", "activity": "Contrôle d'étanchéité des masques panoramiques et calibrage des balises de détection de gaz toxiques"},
            {"time": "09:30", "activity": "Exercice de déploiement d'une chaîne de décontamination de véhicules contaminés par un organophosphoré"},
            {"time": "11:30", "activity": "Intervention d'urgence sur une cuve industrielle fissurée d'acide fluorhydrique : épandage de neutralisant alcalin"},
            {"time": "14:00", "activity": "Déshabillage minutieux en sas de décontamination selon la procédure 'déshabillage propre'"},
            {"time": "16:00", "activity": "Prélèvements de contrôle et analyse spectrométrique résiduelle des eaux de ruissellement"}
        ],
        "skills": {
            "technical": [
                "Chimie des agents toxiques (vésicants, neurotoxiques, corrosifs) et réactions de neutralisation",
                "Microbiologie des agents biologiques de classe 3 et 4 et désinfectants sporicides",
                "Utilisation des appareils respiratoires isolants (ARI) en circuit ouvert et fermé",
                "Normes de transport et de conditionnement des matières dangereuses (ADR)",
                "Topographie, balisage et procédures d'urgence de sécurité civile"
            ],
            "human": [
                "Sang-froid exemplaire et résistance totale à la claustrophobie en scaphandre",
                "Excellente condition physique pour supporter l'effort en combinaison étanche thermo-isolante",
                "Discipline rigoureuse et respect strict des consignes du chef d'intervention",
                "Esprit de corps et solidarité d'équipe vitale en zone contaminée"
            ],
            "tools": [
                "Scaphandre de protection chimique étanche type 1a",
                "Appareil Respiratoire Isolant (ARI) à air comprimé",
                "Spectromètre de mobilité ionique (IMS) et radiamètre",
                "Canons à mousse de décontamination et douches de neutralisation mobiles"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Bac Pro Procédés de la chimie ou Bac Pro Métiers de la Sécurité", "desc": "Sensibilisation aux risques chimiques et sécurité."},
                {"step": "Formation spécialisée", "title": "Certificat de spécialisation NRBC (Armée, Sécurité Civile ou entreprises dépollution)", "desc": "Stages intensifs de simulation en ambiance toxique réelle ou simulée."}
            ],
            "schools": [
                {"name": "Centre National civil et militaire de formation NRBC (Bourges)", "country": "France", "scope": "France"},
                {"name": "Centres de formation des sapeurs-pompiers et de la brigade nationale des sapeurs-pompiers (BNSP) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat de spécialiste NRBC", "Habilitation risque chimique niveau 2 (RC2)", "CQP Dépollution des sites contaminés"]
        },
        "career": {
            "sectors": ["Sécurité civile et défense", "Dépollution industrielle de sites", "Industrie chimique et nucléaire"],
            "employerTypes": ["Groupes de dépollution et gestion des déchets dangereux (Séché, Veolia, Suez)", "Ministère des Armées et de l'Intérieur", "Grands sites SEVESO seuil haut"],
            "evolution": "Agent dépolluant ➔ Chef d'équipe d'intervention NRBC ➔ Responsable HSE de site à haut risque ➔ Expert consultant en gestion de crise toxique",
            "pros": "Métier d'action noble et protecteur de l'environnement, haute technicité, sentiment d'utilité publique face aux catastrophes.",
            "cons": "Pénibilité thermique intense sous scaphandre (température interne dépassant 40°C), port de charges lourdes, astreintes d'intervention d'urgence."
        },
        "salary": "🇫🇷 France : 1 800 - 2 800 € net/mois selon primes de risque et astreintes (CIDJ) • 🇸🇳 Sénégal : 150 000 - 400 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Une intervention en scaphandre étanche NRBC ne peut généralement pas excéder 30 à 45 minutes d'affilée en raison de la déshydratation rapide de l'opérateur (qui peut perdre jusqu'à 1,5 litre de sueur par heure) et de la réserve d'air limitée de la bouteille !",
            "pourquoi": "L'étanchéité totale empêche toute évacuation de la chaleur corporelle vers l'extérieur."
        },
        "sources": [
            {"organization": "CIDJ", "title": "Fiche métier : Agent de traitement dépolluant NRBC", "url": "https://www.cidj.com/s-orienter/metiers/agent-agente-de-traitement-depolluant-nrbc", "type": "metier"},
            {"organization": "Ministère des Armées", "title": "La défense NRBC : doctrine et métiers", "type": "institutionnel"}
        ],
        "interests": ["proteger-defendre", "nature-environnement", "experiences-laboratoire"],
        "relatedJobSlugs": ["technicien-qualite-air", "technicien-chimiste", "ingenieur-recherche-produit"]
    },

    # 3. ANIMACIER DE LABORATOIRE
    {
        "id": "animalier-laboratoire",
        "slug": "animalier-laboratoire",
        "title": "Animalier / Animalière de Laboratoire",
        "aliases": ["Technicien d'animalerie scientifique", "Soigneur animalier de recherche", "Agent d'élevage d'animaux de laboratoire"],
        "icon": "🐭",
        "familyId": "biologie-chimie",
        "connectedFamilies": ["biologie-chimie", "elevage-veterinaire", "sante-soins-paramedical"],
        "domain": "Laboratoires, Analyses & Essais Scientifiques",
        "domainId": "laboratoires-analyses",
        "subdomain": "Animalerie de recherche",
        "shortDescription": "Garant du bien-être animal et de l'éthique de la recherche biomédicale, il veille sur l'hébergement, la nourriture, la santé et l'enrichissement des animaux d'expérimentation.",
        "longDescription": "Selon les données vérifiées du CIDJ, l'animalier de laboratoire héberge et prend soin des modèles animaux indispensables à la recherche biomédicale (rongeurs, lapins, poissons-zèbres, primates). Travaillant en zone stérile ou dépressurisée, il applique strictement la règle éthique des '3R' (Remplacer, Réduire, Raffiner). Il surveille les signes de douleur ou d'inconfort, prépare les rations alimentaires spécifiques, assiste les chercheurs lors des pesées et prélèvements et entretient l'hygiène rigoureuse des cages et portoirs ventilés.",
        "simpleDefinition": "Professionnel qui nourrit, soigne et surveille le bien-être des animaux utilisés par les scientifiques dans les laboratoires de recherche médicale.",
        "level": "CAP à Bac Pro (Bac Pro Conduite et gestion de l'entreprise du secteur canin et félin ou Titre d'Animalier de laboratoire)",
        "missions": [
            "Assurer l'alimentation, l'abreuvement et le renouvellement régulier des litières stériles des animaux",
            "Observer quotidiennement le comportement animal et déceler le moindre signe de stress, douleur ou pathologie",
            "Fournir des enrichissements de milieu de vie (tunnels, abris, matériaux de nidification) pour le bien-être animal",
            "Veiller au maintien des paramètres climatiques des animaleries (température, humidité, cycles lumière/obscurité)",
            "Aider les vétérinaires et chercheurs lors des manipulations douces, contentions et administrations protocolisées"
        ],
        "workEnvironment": "Animaleries de recherche universitaires (Inserm, CNRS), industrie pharmaceutique, instituts de biotechnologies (Institut Pasteur), écoles vétérinaires.",
        "typicalDay": [
            {"time": "07:30", "activity": "Douche d'entrée en animalerie stérile et habillage en combinaison protectrice avec masque et surbottes"},
            {"time": "08:15", "activity": "Inspection visuelle systématique des cages sur portoirs ventilés et point d'eau automatique"},
            {"time": "10:00", "activity": "Nettoyage et autoclavage des cages, changement des litières dépoussiérées sous hotte de change"},
            {"time": "13:30", "activity": "Assistance à une équipe de chercheurs en oncologie pour la pesée précise d'une cohorte de souris"},
            {"time": "15:30", "activity": "Tenue du registre légal d'entrée/sortie des animaux et mise à jour des fiches de suivi éthique"}
        ],
        "skills": {
            "technical": [
                "Réglementation européenne et nationale sur la protection des animaux utilisés à des fins scientifiques (Décret 2013-118)",
                "Zootechnie des rongeurs et animaux de laboratoire (nutrition, reproduction, génétique)",
                "Normes de biosécurité en animalerie de confinement (A1, A2, A3)",
                "Techniques de manipulation douce (low-stress handling) et contention bienveillante",
                "Conduite de tunnels de lavage et autoclaves d'animalerie"
            ],
            "human": [
                "Amour et profond respect pour les animaux",
                "Sens aigu de l'observation pour repérer une modification de posture ou de poil",
                "Rigueur et sens de la propreté méticuleuse",
                "Stabilité émotionnelle face aux protocoles expérimentaux"
            ],
            "tools": [
                "Portoirs ventilés pour cages individuelles étanches (IVC)",
                "Hottes de change à flux laminaire pour animalerie",
                "Tunnels de lavage de cages automatisés",
                "Dispositifs d'enrichissement environnemental homologués"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Diplôme initial", "title": "Bac Pro agricole ou Bac Pro CGEA / Bac STL", "desc": "Bases de biologie animale et d'élevage."},
                {"step": "Certification obligatoire", "title": "Formation réglementaire à l'expérimentation animale Niveau Technicien / Concepteur (ex-Niveau II)", "desc": "Formation légale obligatoire en éthique et bientraitance animale."}
            ],
            "schools": [
                {"name": "Lycées agricoles et universités dispensant le diplôme d'animalier de laboratoire en France", "country": "France", "scope": "France"},
                {"name": "Institut Pasteur de Dakar / EISMV (École Inter-États des Sciences et Médecine Vétérinaires) — Dakar", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat de qualification d'Animalier de Laboratoire", "Agrément légal d'expérimentation animale de Niveau Applicateur"]
        },
        "career": {
            "sectors": ["Recherche médicale et biomédicale", "Industrie pharmaceutique", "Recherche agronomique"],
            "employerTypes": ["Instituts de recherche publique (CNRS, Inserm, INRAE)", "Laboratoires pharmaceutiques (Sanofi, Servier)", "Facultés de médecine et universités"],
            "evolution": "Animalier de laboratoire ➔ Technicien supérieur d'animalerie ➔ Responsable d'animalerie scientifique ➔ Membre de comité d'éthique animale",
            "pros": "Rôle éthique primordial de bienveillance au cœur de la découverte de nouveaux traitements contre les maladies graves, contact quotidien avec les animaux.",
            "cons": "Contraintes d'hygiène lourdes (douches obligatoires, masque constant), travail les week-ends par roulement pour nourrir les animaux."
        },
        "salary": "🇫🇷 France : 1 650 - 2 300 € net/mois selon statut (CIDJ) • 🇸🇳 Sénégal : 120 000 - 300 000 FCFA net/mois",
        "saviezVous": {
            "fait": "La règle éthique internationale des '3R' guide chaque jour l'animalier de laboratoire : Remplacer l'animal dès qu'une alternative in vitro ou par ordinateur existe, Réduire au minimum strict le nombre d'animaux utilisés, et Raffiner les méthodes pour éliminer toute souffrance inutile.",
            "pourquoi": "Un animal détendu, bien nourri et sans stress produit des données scientifiques incomparablement plus fiables qu'un animal angoissé."
        },
        "sources": [
            {"organization": "CIDJ", "title": "Fiche métier : Animalier de laboratoire", "url": "https://www.cidj.com/s-orienter/metiers/animalier-animaliere-de-laboratoire", "type": "metier"},
            {"organization": "Société Française des Sciences et Techniques de l'Animal de Laboratoire (SFTAL)", "title": "Rôle et compétences de l'animalier de recherche", "type": "institutionnel"}
        ],
        "interests": ["nature-environnement", "experiences-laboratoire", "soigner-aider"],
        "relatedJobSlugs": ["technicien-biologiste", "microbiologiste", "employe-technique-laboratoire"]
    },

    # 4. AROMATICIEN / AROMATICIENNE
    {
        "id": "aromaticien",
        "slug": "aromaticien",
        "title": "Aromaticien / Aromaticienne",
        "aliases": ["Créateur d'arômes alimentaires", "Flavorist", "Ingénieur aromaticien"],
        "icon": "🍓",
        "familyId": "biologie-chimie",
        "connectedFamilies": ["biologie-chimie", "agriculture-agritech", "industrie-mecanique"],
        "domain": "Parfumerie, Cosmétique & Aromatologie",
        "domainId": "cosmetique-parfumerie-aromes",
        "subdomain": "Arômes alimentaires sucrés/salés",
        "shortDescription": "Chimiste et artiste du goût, l'aromaticien conçoit les arômes naturels ou synthétiques qui parfument yaourts, boissons, biscuits, plats préparés et dentifrices.",
        "longDescription": "Selon le CIDJ, l'aromaticien marie la rigueur de la chimie organique et l'acuité sensorielle de ses papilles. Travaillant en laboratoire pour des maisons de composition (Givaudan, Firmenich, Mane) ou des géants de l'agroalimentaire, il reconstitue l'arôme authentique d'une fraise des bois mûre ou invente de nouvelles saveurs salées pour des snacks. Il sélectionne les molécules aromatisantes, formule le concentré, teste sa résistance à la cuisson industrielle et s'assure de sa stricte conformité aux réglementations alimentaires.",
        "simpleDefinition": "Chimiste créateur de saveurs qui invente et fabrique les arômes de vanille, fraise, barbecue ou menthe que l'on retrouve dans nos aliments.",
        "level": "Bac +3 à Bac +5 (Licence pro ou Master ISIPCA / Ingénieur Agroalimentaire)",
        "missions": [
            "Analyser la composition moléculaire de saveurs naturelles par chromatographie en phase gazeuse couplée à la spectrométrie de masse (CPG-SM)",
            "Sélectionner les matières premières aromatiques (extraits naturels, huiles essentielles, molécules de synthèse)",
            "Formuler à la goutte près des compositions aromatiques originales répondant au cahier des charges client",
            "Incorporer l'arôme dans la matrice alimentaire finale (lait, biscuit, soda) et tester la stabilité thermique à la cuisson",
            "Mener des panels d'évaluation sensorielle et ajuster la persistance en bouche et le profil gustatif"
        ],
        "workEnvironment": "Laboratoires de création aromatique, départements R&D des groupes agroalimentaires et fabricants d'arômes (région de Grasse, Paris, multinationales).",
        "typicalDay": [
            {"time": "08:30", "activity": "Séance matinale d'olfaction et dégustation à l'aveugle à jeun (moment où le palais est le plus frais)"},
            {"time": "10:00", "activity": "Formulation paillasse : micro-dosages de vanilline, butyrate d'éthyle et lactones pour un arôme de pêche blanche"},
            {"time": "11:45", "activity": "Application de la formule dans un yaourt nature témoin et passage en chambre de vieillissement"},
            {"time": "14:30", "activity": "Analyse CPG-Olfactométrie d'un extrait de café torréfié pour identifier la molécule clé manquante"},
            {"time": "16:30", "activity": "Vérification de la conformité de la formule à la réglementation européenne sur les arômes naturels"}
        ],
        "skills": {
            "technical": [
                "Chimie organique des substances aromatisantes et biochimie gustative",
                "Chromatographie en phase gazeuse couplée à l'olfactométrie (CPG-O)",
                "Formulation liquide, poudre et encapsulée",
                "Législation européenne et internationale des arômes alimentaires (EFSA, FDA)",
                "Interactions physico-chimiques entre l'arôme et la matrice alimentaire (matières grasses, sucres)"
            ],
            "human": [
                "Mémoire olfactive et gustative exceptionnelle (capacité à mémoriser des milliers de molécules)",
                "Sensibilité sensorielle et créativité associative",
                "Précision méticuleuse au milligramme près",
                "Capacité à traduire les souhaits marketing en assemblages chimiques concrets"
            ],
            "tools": [
                "Chromatographe CPG-SM avec port d'olfactométrie 'sniffer'",
                "Balanse d'analyse de précision à 4 décimales",
                "Robots de pipetage et formulateurs automatiques",
                "Cabines normalisées d'analyse sensorielle"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +2 / +3", "title": "Licence Chimie ou BUT Génie Biologique / Chimie", "desc": "Solides bases en chimie organique et analyse chimique."},
                {"step": "Formation spécialisée de référence (Bac +5)", "title": "Master ISIPCA (Institut Supérieur International du Parfum, de la Cosmétique et de l'Aromatique Alimentaire)", "desc": "Master en formulation et création aromatique en partenariat avec l'Université de Versailles (UVSQ)."}
            ],
            "schools": [
                {"name": "ISIPCA — Versailles (La référence mondiale des métiers du parfum et des arômes)", "country": "France", "scope": "France"},
                {"name": "AgroParisTech / Polytech Montpellier — Spécialité Formulation et Arômes", "country": "France", "scope": "France"},
                {"name": "Facultés des Sciences et ESP — UCAD Dakar (Chimie appliquée et agroalimentaire)", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Master Formulation et Évaluation Sensorielle ISIPCA", "Diplôme d'Ingénieur en Agroalimentaire et Chimie"]
        },
        "career": {
            "sectors": ["Industrie des arômes et parfums", "Industrie agroalimentaire", "Industrie pharmaceutique (masquage de goût)"],
            "employerTypes": ["Maisons de composition internationales (Givaudan, dsm-firmenich, IFF, Symrise, Mane)", "Industriels de l'agroalimentaire (Nestlé, Danone)", "Laboratoires de compléments alimentaires"],
            "evolution": "Aromaticien junior ➔ Aromaticien senior créateur ➔ Directeur de laboratoire de création ➔ Flavorist mondial expert",
            "pros": "Métier rare et prestigieux très recherché, mariage enthousiasmant entre art gustatif et haute chimie, rémunérations attractives.",
            "cons": "Hygiène de vie stricte requise pour préserver le palais (éviter tabac, épices brûlantes avant dégustations), forte concurrence à l'entrée."
        },
        "salary": "🇫🇷 France : 2 400 - 5 500 € net/mois selon réputation et expérience (CIDJ) • 🇸🇳 Sénégal : 250 000 - 900 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Ce que nous appelons couramment le 'goût' d'un aliment provient à 80% de notre odorat par rétro-olfaction (les molécules remontent de l'arrière de la gorge vers le nez quand on mâche) et seulement à 20% des papilles de notre langue !",
            "pourquoi": "La langue ne perçoit que 5 saveurs de base (sucré, salé, acide, amer, umami), tandis que l'odorat peut distinguer plus de 10 000 nuances aromatiques différentes."
        },
        "sources": [
            {"organization": "CIDJ", "title": "Fiche métier : Aromaticien", "url": "https://www.cidj.com/s-orienter/metiers/aromaticien-aromaticienne", "type": "metier"},
            {"organization": "Syndicat National des Ingrédients Aromatiques Alimentaires (SNIAA)", "title": "Le métier d'aromaticien", "type": "institutionnel"}
        ],
        "interests": ["creer-produits-chimie", "experiences-laboratoire", "creer-designer"],
        "relatedJobSlugs": ["parfumeur", "ingenieur-formulation", "technicien-chimiste"]
    },

    # 5. BIO-INFORMATICIEN
    {
        "id": "bio-informaticien",
        "slug": "bio-informaticien",
        "title": "Bio-informaticien / Bio-informaticienne",
        "aliases": ["Bioinformatician", "Biologiste computationnel", "Data Scientist en génomique"],
        "icon": "🧬",
        "familyId": "biologie-chimie",
        "connectedFamilies": ["biologie-chimie", "numerique-ia", "data-decision", "sante-soins-paramedical"],
        "domain": "Bio-informatique & Données du Vivant",
        "domainId": "bio-informatique",
        "subdomain": "Génomique & Transcriptomique NGS",
        "shortDescription": "À la croisée de la biologie moléculaire, des algorithmes et du Big Data, il conçoit des programmes pour décrypter le génome, modéliser les protéines et accélérer la découverte de thérapies.",
        "longDescription": "Le CIDJ classe explicitement le bio-informaticien dans trois domaines majeurs : Biologie-Chimie, Informatique-Web-Réseaux et Sciences Physiques-Maths-Data. C'est l'archétype du métier transversal d'avenir. Face aux millions de paires de bases générées par les séquenceurs d'ADN à haut débit (NGS), le bio-informaticien écrit des pipelines en Python et R, applique l'intelligence artificielle pour prédire le repliement 3D des protéines, identifie des mutations cancéreuses rares et simule des interactions médicamenteuses.",
        "simpleDefinition": "Scientifique double-compétent qui utilise l'informatique, les lignes de code et l'IA pour analyser l'ADN et comprendre les secrets des cellules vivantes.",
        "level": "Bac +5 à Bac +8 (Master Bio-informatique / Diplôme d'Ingénieur / Doctorat)",
        "missions": [
            "Concevoir et déployer des pipelines d'analyse automatisée de données de séquençage génomique (NGS, RNA-seq, métagénomique)",
            "Développer des algorithmes statistiques et d'apprentissage automatique (Machine Learning) pour la prédiction de structures protéiques",
            "Interroger et croiser les grandes bases de données biologiques mondiales (NCBI, Ensembl, PDB, UniProt)",
            "Simuler in silico le docking moléculaire pour tester virtuellement l'affinité de molécules médicamenteuses candidates",
            "Collaborer étroitement avec les biologistes de paillasse pour interpréter les résultats statistiques des expériences"
        ],
        "workEnvironment": "Instituts de recherche génomique (Institut Curie, Institut Pasteur, Genoscope), laboratoires pharmaceutiques, start-ups de biotechnologies, clusters de calcul intensif.",
        "typicalDay": [
            {"time": "09:00", "activity": "Lancement d'un pipeline d'alignement de génomes de patients atteints de maladies rares sur serveur de calcul (SLURM)"},
            {"time": "11:00", "activity": "Développement d'un script Python sous Jupyter Notebook pour filtrer les variants génétiques significatifs"},
            {"time": "14:00", "activity": "Modélisation 3D du repliement d'une protéine cible à l'aide d'outils d'IA (AlphaFold)"},
            {"time": "16:00", "activity": "Réunion de travail pluridisciplinaire avec des médecins oncologues et des généticiens sur une cible tumorale"},
            {"time": "17:30", "activity": "Publication du code source documenté sur GitHub et mise à jour de la documentation d'équipe"}
        ],
        "skills": {
            "technical": [
                "Programmation scientifique (Python, R, Bash, C++)",
                "Outils et formats de génomique computationnelle (SAMtools, BEDtools, GATK, FASTQ/BAM/VCF)",
                "Statistiques inférentielles, biostatistiques et Machine Learning appliqué au vivant",
                "Environnement Linux haute performance (HPC) et gestionnaires de calcul (Slurm, Nextflow)",
                "Bases de données relationnelles et non relationnelles (SQL, NoSQL)"
            ],
            "human": [
                "Capacité de dialogue et de traduction entre la culture informatique et la biologie",
                "Rigueur logique et passion pour la résolution de casse-têtes de données",
                "Autonomie de recherche et veille scientifique permanente",
                "Pédagogie pour présenter des résultats statistiques complexes à des non-informaticiens"
            ],
            "tools": [
                "Serveurs de calcul haute performance (HPC Linux)",
                "Outils d'IA génomique (AlphaFold, ESMFold)",
                "Environnements Nextflow, Snakemake et conteneurs Docker/Singularity",
                "PyMOL et VMD pour la visualisation moléculaire 3D"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Bac général à dominante scientifique (Maths, SVT, NSI ou Physique)", "desc": "Double goût pour les sciences naturelles et l'informatique."},
                {"step": "Licence (Bac +3)", "title": "Licence Sciences de la Vie parcours Bio-informatique ou Licence Informatique", "desc": "Double compétence biologie moléculaire et algorithmique."},
                {"step": "Master / École d'Ingénieur (Bac +5)", "title": "Master Bio-informatique ou Diplôme d'Ingénieur (INSA, Polytech)", "desc": "Spécialisation en génomique computationnelle, bio-statistiques et IA."},
                {"step": "Doctorat éventuel (Bac +8)", "title": "Doctorat (PhD) en Bio-informatique / Biologie Computationnelle", "desc": "Très valorisé dans les centres de recherche de pointe."}
            ],
            "schools": [
                {"name": "Universités françaises dispensant le Master Bio-informatique (Paris Cité, Sorbonne, Lyon, Montpellier, Rennes)", "country": "France", "scope": "France"},
                {"name": "FST & ESP — UCAD Dakar (Masters en Biologie Moléculaire et Informatique / Plateforme Génomique IPD)", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Master Sciences, Technologies, Santé mention Bio-informatique", "Diplôme d'Ingénieur en Bio-informatique"]
        },
        "career": {
            "sectors": ["Recherche génomique et biomédicale", "Industrie pharmaceutique et biotechnologique", "Agro-génomique et semences"],
            "employerTypes": ["Instituts de recherche d'excellence (Institut Pasteur, Inserm, Inria)", "Biotechs de thérapie génique", "Sociétés d'analyse génomique clinique"],
            "evolution": "Bio-informaticien d'études ➔ Chef de projet bio-informatique ➔ Responsable de plateforme de modélisation et data science ➔ Directeur R&D computationnelle",
            "pros": "Métier à la frontière des deux plus grandes révolutions de notre époque (l'IA et la génétique), employabilité mondiale exceptionnelle, télétravail fréquent.",
            "cons": "Évolution ultra-rapide des outils imposant un auto-apprentissage permanent, frustration possible face au bruit des données biologiques expérimentales."
        },
        "salary": "🇫🇷 France : 2 500 - 5 000 € net/mois selon diplôme et secteur (CIDJ) • 🇸🇳 Sénégal : 350 000 - 1 200 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Le premier séquençage complet d'un génome humain (Projet Génome Humain) a duré 13 ans et coûté près de 3 milliards de dollars entre 1990 et 2003. Aujourd'hui, grâce aux algorithmes des bio-informaticiens et aux séquenceurs modernes, un génome complet est décrypté en quelques heures pour moins de 300 dollars !",
            "pourquoi": "L'accélération de la vitesse de calcul informatique a progressé encore plus vite que la loi de Moore dans le domaine du vivant."
        },
        "sources": [
            {"organization": "CIDJ", "title": "Fiche métier : Bio-informaticien", "url": "https://www.cidj.com/s-orienter/metiers/bio-informaticien-bio-informaticienne", "type": "metier"},
            {"organization": "Société Française de Bio-Informatique (SFBI)", "title": "Les métiers de la bio-informatique", "type": "institutionnel"}
        ],
        "interests": ["bio-informatique-data", "technologie-code", "resoudre-problemes", "experiences-laboratoire"],
        "relatedJobSlugs": ["data-scientist", "ingenieur-biotechnologie", "microbiologiste"]
    },

    # 6. BOTANISTE
    {
        "id": "botaniste",
        "slug": "botaniste",
        "title": "Botaniste / Spécialiste de la Flore & des Écosystèmes Végétaux",
        "aliases": ["Phytosociologue", "Biologiste végétal", "Chercheur en botanique"],
        "icon": "🌿",
        "familyId": "biologie-chimie",
        "connectedFamilies": ["biologie-chimie", "agriculture-agritech", "environnement-climat"],
        "domain": "Biologie Végétale & Botanique",
        "domainId": "botanique-biologie-vegetale",
        "subdomain": "Taxonomie & Systématique végétale",
        "shortDescription": "Scientifique explorateur des plantes, il étudie la physiologie végétale, identifie et classe les espèces de flore, préserve la biodiversité et découvre de nouvelles molécules végétales.",
        "longDescription": "Le CIDJ documente le métier de botaniste comme un savant équilibre entre expéditions de terrain et analyses de laboratoire. Équipé d'une loupe botanique, d'un sécateur et d'un carnet, le botaniste recense la flore sauvage, cartographie les habitats végétaux protégés, conserve les herbiers et étudie les propriétés médicinales ou agronomiques des plantes. Face au changement climatique et à la disparition rapide d'espèces végétales, son expertise est indispensable aux parcs nationaux, aux semenciers et à la recherche pharmaceutique.",
        "simpleDefinition": "Scientifique spécialiste des plantes qui explore la nature pour trouver, nommer et protéger les fleurs, arbres et herbes sauvages.",
        "level": "Bac +5 à Bac +8 (Master Biodiversité Végétale / Doctorat en Biologie Végétale)",
        "missions": [
            "Mener des inventaires floristiques sur le terrain et déterminer les taxons végétaux avec des clés d'identification",
            "Échantillonner des spécimens de plantes rares et constituer des planches d'herbiers scientifiques de référence",
            "Étudier l'adaptation physiologique des végétaux aux stress climatiques (sécheresse, salinité des sols)",
            "Découvrir et isoler des molécules d'intérêt pharmacologique ou cosmétique au sein des plantes médicinales",
            "Rédiger des plans de gestion et de préservation pour les réserves naturelles et conservatoires botaniques"
        ],
        "workEnvironment": "Missions de terrain (forêts, savanes, mangroves, massifs montagneux), herbiers nationaux, muséums d'histoire naturelle, jardins botaniques, laboratoires de pharmacognosie.",
        "typicalDay": [
            {"time": "08:00", "activity": "Départ en prospection de terrain dans une zone humide protégée pour inventorier les espèces d'orchidées sauvages"},
            {"time": "11:30", "activity": "Relevé phytosociologique : identification des strates végétales et estimation du recouvrement au mètre carré"},
            {"time": "14:00", "activity": "Prélèvement délicat d'échantillons foliaires et mise sous presse dans le séchoir d'herbier"},
            {"time": "16:00", "activity": "Au laboratoire : observation des étamines et grains de pollen sous loupe binoculaire pour confirmer une sous-espèce"},
            {"time": "17:30", "activity": "Saisie des données géoréférencées dans la base de données nationale de la flore (eFlore / Tela Botanica)"}
        ],
        "skills": {
            "technical": [
                "Taxonomie végétale, systématique phylogénétique et nomenclature botanique internationale",
                "Utilisation experte des flores analytiques et clés dichotomiques",
                "Techniques de conservation en herbier et banques de graines (cryoconservation)",
                "Cartographie des habitats naturels par SIG et géolocalisation GPS",
                "Physiologie végétale et phytochimie (extraction d'alcaloïdes, flavonoïdes)"
            ],
            "human": [
                "Capacité d'observation visuelle très aiguë et sens du détail morphologique",
                "Patience infinie et goût prononcé pour le travail solitaire en pleine nature",
                "Excellente endurance physique sur des terrains escarpés ou isolés",
                "Sensibilité écologique et rigueur scientifique de classification"
            ],
            "tools": [
                "Loupe de botaniste x10 / x20 et loupe binoculaire de paillasse",
                "Presse d'herbier traditionnelle et papier buvard sans acide",
                "GPS de randonnée et carnet de terrain imperméable",
                "Clés de détermination de la flore (Flore de Bonnier, Flores régionales)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Bac scientifique général ou agricole", "desc": "Passion pour les sciences naturelles et la nature."},
                {"step": "Licence (Bac +3)", "title": "Licence Sciences de la Vie mention Biologie des Organismes et Écologie", "desc": "Bases solides de biologie cellulaire, génétique et botanique."},
                {"step": "Master (Bac +5)", "title": "Master Biologie Végétale, Biodiversité ou Gestion de la Biodiversité", "desc": "Spécialisation de haut niveau en taxonomie et écologie végétale."},
                {"step": "Doctorat (Bac +8)", "title": "Doctorat en Botanique / Phytoécologie", "desc": "Recherche fondamentale et valorisation de la flore."}
            ],
            "schools": [
                {"name": "Muséum National d'Histoire Naturelle (MNHN) — Paris", "country": "France", "scope": "France"},
                {"name": "Universités de Montpellier, Strasbourg et Grenoble (Pôles d'excellence en biologie végétale)", "country": "France", "scope": "France"},
                {"name": "Institut des Sciences de l'Environnement (ISE) / Faculté des Sciences (UCAD) — Dakar", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Master en Sciences Végétales", "Doctorat en Botanique / Biologie Végétale"]
        },
        "career": {
            "sectors": ["Protection de la nature et environnement", "Recherche fondamentale et muséologie", "Industrie pharmaceutique et cosmétique"],
            "employerTypes": ["Conservatoires Botaniques Nationaux (CBN)", "Muséums et parcs nationaux", "Bureaux d'études écologiques", "Laboratoires cosmétiques (phyto-cosmétique)"],
            "evolution": "Botaniste chargé d'études ➔ Responsable scientifique de conservatoire botanique ➔ Conservateur d'herbier ➔ Enseignant-chercheur universitaire",
            "pros": "Vivre au plus près des merveilles de la biodiversité végétale, travail en extérieur stimulant, contribution vitale à la sauvegarde des espèces menacées.",
            "cons": "Postes de titulaires académiques rares et sélectifs, conditions météo rudes lors des longues campagnes de terrain."
        },
        "salary": "🇫🇷 France : 2 000 - 3 800 € net/mois selon statut (CIDJ) • 🇸🇳 Sénégal : 200 000 - 700 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Plus de 50% de l'ensemble des médicaments modernes prescrits en pharmacie (de l'aspirine issue du saule à la morphine issue du pavot ou aux anticancéreux issus de l'if) ont été découverts grâce aux travaux méticuleux des botanistes étudiant les plantes !",
            "pourquoi": "Le règne végétal a développé au cours de 400 millions d'années d'évolution un arsenal de défense chimique d'une complexité moléculaire inégalée."
        },
        "sources": [
            {"organization": "CIDJ", "title": "Fiche métier : Botaniste", "url": "https://www.cidj.com/s-orienter/metiers/botaniste", "type": "metier"},
            {"organization": "Tela Botanica — Réseau des botanistes francophones", "title": "La botanique aujourd'hui", "type": "institutionnel"}
        ],
        "interests": ["nature-plantes-botanique", "nature-environnement", "experiences-laboratoire"],
        "relatedJobSlugs": ["microbiologiste", "ingenieur-agronome", "technicien-biologiste"]
    },

    # 7. COLORISTE TEXTILE
    {
        "id": "coloriste-textile",
        "slug": "coloriste-textile",
        "title": "Coloriste Textile",
        "aliases": ["Technicien coloriste", "Ingénieur colorimétrie textile", "Teinturier industriel"],
        "icon": "🧵",
        "familyId": "biologie-chimie",
        "connectedFamilies": ["biologie-chimie", "industrie-mecanique", "culture-medias"],
        "domain": "Chimie Industrielle, Teintures & Matériaux",
        "domainId": "chimie-industrie",
        "subdomain": "Colorimétrie textile",
        "shortDescription": "Alchimiste des teintes et de la matière, il formule les colorants et teintures chimiques pour reproduire à l'identique la nuance exacte d'un tissu imaginée par les stylistes.",
        "longDescription": "Le CIDJ documente le métier de coloriste textile comme une spécialité technique de pointe rattachée à la chimie et aux matériaux industriels. Travaillant pour l'industrie de l'habillement, de la haute couture, de l'ameublement ou de l'automobile, le coloriste reçoit un échantillon ou une référence Pantone du styliste. En laboratoire de teinturerie, il dose les pigments, colorants acides ou réactifs, teste la réaction chimique sur les fibres (coton, soie, polyester), mesure les écarts de couleur sous spectrophotomètre et valide la tenue au lavage, au frottement et aux rayons UV.",
        "simpleDefinition": "Chimiste spécialiste de la couleur qui crée la formule exacte pour teindre les vêtements et les tissus dans la teinte précise demandée par la mode.",
        "level": "Bac +2 à Bac +5 (BTS Métiers de la chimie / Ingénieur Textile & Chimie)",
        "missions": [
            "Analyser l'échantillon de couleur fourni par le styliste et identifier la famille de colorants adaptée à la fibre textile",
            "Formuler le mélange chimique de teinturerie (colorants primaires, fixateurs, agents mouillants) au gramme près",
            "Réaliser des essais de teinture en laboratoire sur des éprouvettes de tissu",
            "Mesurer avec exactitude le spectre lumineux de la couleur sous spectrophotomètre (espace colorimétrique L*a*b*)",
            "Transposer la recette de teinture du laboratoire vers les cuves industrielles géantes de production (scale-up)"
        ],
        "workEnvironment": "Laboratoires de recherche et de teinturerie des usines textiles, ateliers d'ennoblissement, industrie de l'habillement et équipementiers automobiles.",
        "typicalDay": [
            {"time": "08:00", "activity": "Étalonnage quotidien du spectrophotomètre de colorimétrie à l'aide des étalons noir et blanc"},
            {"time": "09:00", "activity": "Formulation d'un bain de teinture pour obtenir un 'vert sauge' sur du sergé de coton bio"},
            {"time": "11:00", "activity": "Sortie des éprouvettes teintes de l'appareil de laboratoire et séchage thermorégulé"},
            {"time": "13:30", "activity": "Mesure spectrophotométrique : calcul du Delta E (écart de couleur) par rapport au standard client"},
            {"time": "15:30", "activity": "Tests de solidité : passage des échantillons au xénotest pour vérifier la résistance au soleil sans décoloration"}
        ],
        "skills": {
            "technical": [
                "Chimie tinctoriale et affinité des colorants avec les fibres naturelles et synthétiques",
                "Colorimétrie scientifique (espace CIE L*a*b*, calculs des tolérances Delta E)",
                "Spectrophotométrie de réflexion et logiciel de contre-typage automatique",
                "Procédés d'ennoblissement textile (foulardage, teinture en pièce, apprêts)",
                "Normes écologiques et éco-toxicologiques (Oeko-Tex, REACH)"
            ],
            "human": [
                "Acuité visuelle colorée exceptionnelle (test de Farnsworth parfait, zéro daltonisme)",
                "Rigueur de chimiste et précision dans les pesées",
                "Sensibilité artistique aux matières et à la lumière",
                "Réactivité face aux exigences de cadence de la mode"
            ],
            "tools": [
                "Spectrophotomètre de paillasse à sphère d'intégration",
                "Appareil de teinture de laboratoire multi-postes (Mathis)",
                "Cabine de lumière normalisée (D65, tungstène, TL84) pour détecter le métamérisme",
                "Logiciel de contre-typage de couleur par ordinateur (Datacolor, X-Rite)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Bac STL Chimie ou Bac général scientifique", "desc": "Goût pour la chimie pratique et les couleurs."},
                {"step": "Diplôme Bac +2 à +3", "title": "BTS Métiers de la chimie ou BTS Innovation textile", "desc": "Formation technique aux procédés chimiques et textiles."},
                {"step": "Diplôme d'Ingénieur (Bac +5)", "title": "Diplôme d'Ingénieur Textile et Chimie (ITECH Lyon, ENSAIT)", "desc": "Haute qualification en formulation chimique et management industriel."}
            ],
            "schools": [
                {"name": "ITECH Lyon (Institut Textile et Chimique de Lyon — La référence mondiale des coloristes)", "country": "France", "scope": "France"},
                {"name": "ENSAIT — Roubaix (École Nationale Supérieure des Arts et Industries Textiles)", "country": "France", "scope": "France"},
                {"name": "Lycées techniques et centres de formation textile et teinturerie — Dakar / Thiès", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["BTS Innovation Textile option Traitements", "Diplôme d'Ingénieur ITECH Chimie et Matériaux"]
        },
        "career": {
            "sectors": ["Industrie textile et habillement", "Haute couture et luxe", "Plasturgie, cosmétique et peintures"],
            "employerTypes": ["Usines de teinture et ennoblissement textile", "Grandes maisons de mode et de sport (LVMH, Kering, Decathlon)", "Fabricants de colorants chimiques"],
            "evolution": "Coloriste de laboratoire ➔ Responsable de laboratoire colorimétrique ➔ Directeur d'atelier de teinturerie ➔ Directeur technique d'usine textile",
            "pros": "Métier visuel fascinant à l'intersection de la mode et de la chimie, voir ses créations colorées défiler ou portées par des millions de personnes.",
            "cons": "Manipulations de poudres tinctoriales tachantes, exposition aux odeurs de bains de teinture nécessitant des hottes aspirantes."
        },
        "salary": "🇫🇷 France : 1 900 - 3 200 € net/mois selon qualification (CIDJ) • 🇸🇳 Sénégal : 160 000 - 480 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Deux tissus peuvent paraître exactement de la même couleur sous la lumière du jour, mais devenir totalement dissemblables sous la lumière artificielle d'un magasin ! Ce piège optique bien connu des coloristes s'appelle le 'métamérisme'.",
            "pourquoi": "Si les mélanges de pigments chimiques sont différents, les spectres de réflexion ne réagissent pas de la même façon selon la température de couleur de l'éclairage."
        },
        "sources": [
            {"organization": "CIDJ", "title": "Fiche métier : Coloriste textile", "url": "https://www.cidj.com/s-orienter/metiers/coloriste-textile", "type": "metier"},
            {"organization": "Union des Industries Textiles (UIT)", "title": "Les métiers de la couleur et de la finition textile", "type": "institutionnel"}
        ],
        "interests": ["creer-produits-chimie", "creer-designer", "experiences-laboratoire"],
        "relatedJobSlugs": ["technicien-chimiste", "ingenieur-formulation", "parfumeur"]
    },

    # 8. EMPLOYÉ TECHNIQUE DE LABORATOIRE
    {
        "id": "employe-technique-laboratoire",
        "slug": "employe-technique-laboratoire",
        "title": "Employé / Employée Technique de Laboratoire",
        "aliases": ["Aide de laboratoire", "Agent technique de laboratoire", "Préparateur technique d'analyses"],
        "icon": "🧪",
        "familyId": "biologie-chimie",
        "connectedFamilies": ["biologie-chimie", "sante-soins-paramedical"],
        "domain": "Laboratoires, Analyses & Essais Scientifiques",
        "domainId": "laboratoires-analyses",
        "subdomain": "Préparation technique & Verrerie",
        "shortDescription": "Assistant logistique et technique indispensable des chercheurs et techniciens, il nettoie la verrerie de haute précision, prépare les réactifs simples et gère les consommables.",
        "longDescription": "Le CIDJ distingue formellement l'employé technique de laboratoire du technicien d'analyses. L'employé technique assure la préparation matérielle sans laquelle aucune manipulation scientifique ne peut débuter. Il lave et stérilise la verrerie jaugée au laveur spécialisé sans laisser la moindre trace de calcaire ou de produit, prépare les milieux de culture gélosés standards, approvisionne les postes de travail en pipettes et consommables, gère les stocks de produits chimiques de base et veille au tri des déchets chimiques et biologiques.",
        "simpleDefinition": "Professionnel qui prépare la verrerie ultra-propre, range les produits et fabrique les mélanges de base dont les chimistes ont besoin pour travailler.",
        "level": "CAP / BEP à Bac (CAP Agent de laboratoire / Bac STL)",
        "missions": [
            "Assurer le lavage manuel et automatisé de la verrerie scientifique avec détergents enzymatiques et eau déminéralisée",
            "Stériliser la verrerie et les milieux de culture à l'autoclave et au four Poupinel",
            "Préparer les solutions chimiques de base, les gels et les milieux de culture bactériologiques simples",
            "Réceptionner, étiqueter et ranger les livraisons de réactifs chimiques et consommables plastiques",
            "Conditionner les déchets de laboratoire (verre souillé, solvants usagés, déchets DASRI) selon les protocoles de sécurité"
        ],
        "workEnvironment": "Laboratoires de recherche universitaires, lycées et collèges (personnels techniques d'éducation), laboratoires d'analyses industrielles et médicales.",
        "typicalDay": [
            {"time": "08:00", "activity": "Déchargement des laveurs de verrerie et rangement méticuleux des fioles et béchers séchés dans les placards fermés"},
            {"time": "09:30", "activity": "Pesée de poudre nutritive de gélose et préparation de 5 litres de milieu de culture stérile pour l'équipe de microbiologie"},
            {"time": "11:30", "activity": "Coulage des boîtes de Pétri stériles sous flux laminaire et mise au frais"},
            {"time": "14:00", "activity": "Réception d'une palette de réactifs de chimie : vérification des fiches de données de sécurité (FDS) et stockage dans les armoires ventilées"},
            {"time": "16:00", "activity": "Collecte des bidons de solvants halogénés usagés et évacuation vers le local sécurisé des déchets chimiques"}
        ],
        "skills": {
            "technical": [
                "Techniques de nettoyage et décontamination chimique de la verrerie jaugée",
                "Utilisation des balances de précision, pH-mètres et autoclaves de paillasse",
                "Symboles de danger chimique (pictogrammes CLP) et règles de stockage des incompatibles",
                "Règles d'hygiène et sécurité au laboratoire (manipulation d'acides et bases)",
                "Gestion des stocks et traçabilité des lots de consommables"
            ],
            "human": [
                "Rigueur, méthode et soin méticuleux dans le geste",
                "Sens du service et de l'entraide en équipe scientifique",
                "Respect intransigeant des consignes de sécurité",
                "Bonne organisation pour ne jamais se laisser déborder par la verrerie sale"
            ],
            "tools": [
                "Laveur-désinfecteur de verrerie de laboratoire (Miele Professional)",
                "Autoclave vertical de laboratoire",
                "Distillateur / Osmoseur d'eau ultra-pure",
                "Armoires de sécurité ventilées pour produits inflammables et corrosifs"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Diplôme d'accès", "title": "CAP Agent technique de laboratoire ou Bac STL / Bac Pro PCEPC", "desc": "Apprentissage des bases pratiques de laboratoire."},
                {"step": "Concours de la fonction publique (optionnel)", "title": "Concours d'Adjoint Technique de Recherche et de Formation (ATRF)", "desc": "Pour exercer dans les universités, lycées et organismes publics (CNRS, Inserm)."}
            ],
            "schools": [
                {"name": "Lycées préparant au Bac STL et CAP techniques en France", "country": "France", "scope": "France"},
                {"name": "Centres de formation professionnelle technique et facultés des sciences — Dakar", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["CAP Agent de Laboratoire", "Habilitation sécurité chimique", "Attestation de formation aux déchets dangereux"]
        },
        "career": {
            "sectors": ["Enseignement secondaire et supérieur", "Recherche académique", "Industrie chimique et agroalimentaire"],
            "employerTypes": ["Éducation Nationale (collèges, lycées)", "Organismes publics de recherche (CNRS, universités)", "Laboratoires de contrôle qualité industriels"],
            "evolution": "Employé technique de laboratoire ➔ Technicien de laboratoire (par concours interne ou VAE) ➔ Responsable logistique de laboratoire",
            "pros": "Métier calme et très structuré, intégration dans un milieu scientifique stimulant, horaires fixes réguliers sans gardes.",
            "cons": "Tâches répétitives de nettoyage, port de gants et lunettes obligatoire, manutention de bacs de verrerie lourds."
        },
        "salary": "🇫🇷 France : 1 550 - 2 000 € net/mois selon échelon (CIDJ) • 🇸🇳 Sénégal : 100 000 - 240 000 FCFA net/mois",
        "saviezVous": {
            "fait": "En chimie de haute précision (spectrométrie de masse), une simple trace microscopique de détergent oubliée sur une éprouvette en verre peut fausser complètement une expérience coûtant plusieurs dizaines de milliers d'euros !",
            "pourquoi": "L'employé technique rince systématiquement la verrerie à l'eau déminéralisée puis osmosée de grade milli-Q pour garantir une pureté totale."
        },
        "sources": [
            {"organization": "CIDJ", "title": "Fiche métier : Employé technique de laboratoire", "url": "https://www.cidj.com/s-orienter/metiers/employe-employee-technique-de-laboratoire", "type": "metier"},
            {"organization": "Ministère de l'Éducation Nationale et de la Recherche", "title": "Corps des adjoints techniques de recherche et de formation (ATRF)", "type": "institutionnel"}
        ],
        "interests": ["experiences-laboratoire", "soigner-aider", "construire-fabriquer"],
        "relatedJobSlugs": ["technicien-laboratoire", "agent-sterilisation", "technicien-chimiste"]
    },

    # 9. INGÉNIEUR EN BIOTECHNOLOGIE
    {
        "id": "ingenieur-biotechnologie",
        "slug": "ingenieur-biotechnologie",
        "title": "Ingénieur / Ingénieure en Biotechnologie",
        "aliases": ["Biotechnologiste", "Ingénieur bioprocédés", "Bio-ingénieur de recherche"],
        "icon": "🧬",
        "familyId": "biologie-chimie",
        "connectedFamilies": ["biologie-chimie", "sante-soins-paramedical", "agriculture-agritech", "industrie-mecanique"],
        "domain": "Biotechnologies & Génie Génétique",
        "domainId": "biotechnologies",
        "subdomain": "Biotechnologies blanches et rouges",
        "shortDescription": "Ingénieur du vivant, il utilise des cellules, des bactéries ou des enzymes génétiquement programmées pour fabriquer des vaccins, des biomédicaments, des bioplastiques et des biocarburants.",
        "longDescription": "D'après la fiche officielle du CIDJ, l'ingénieur en biotechnologie applique les découvertes de la biologie moléculaire à l'échelle industrielle. Qu'il travaille dans les biotechnologies rouges (santé : anticorps monoclonaux, thérapies géniques), blanches (industrie : enzymes de lessives, biocarburants) ou vertes (agriculture : plantes résistantes à la sécheresse), il modifie le génome de micro-organismes, optimise la fermentation en bioréacteurs géants, purifie les molécules d'intérêt et supervise la transition de la paillasse vers la production industrielle.",
        "simpleDefinition": "Ingénieur qui programme des micro-organismes vivants (bactéries, levures) comme de minuscules usines pour fabriquer des médicaments innovants et des produits écologiques.",
        "level": "Bac +5 à Bac +8 (Diplôme d'Ingénieur en Biotechnologie / Master / Doctorat)",
        "missions": [
            "Concevoir des vecteurs génétiques et introduire des gènes d'intérêt dans des cellules hôtes (bactéries, levures, cellules CHO)",
            "Développer et optimiser les protocoles de culture cellulaire en fermenteurs et bioréacteurs (paramètres de pH, oxygène dissous, nutriments)",
            "Mettre au point les techniques de purification des protéines recombinantes (chromatographie d'affinité, filtration tangentielle)",
            "Valider la conformité des bioproduits aux normes pharmacopées et réglementaires strictes",
            "Piloter des projets d'innovation et déposer des brevets de propriété intellectuelle"
        ],
        "workEnvironment": "Laboratoires de R&D des multinationales biopharmaceutiques (Sanofi, Roche), start-ups de biotechnologie, usines de bioproduction, instituts de recherche.",
        "typicalDay": [
            {"time": "08:30", "activity": "Vérification des courbes de croissance cellulaire de la nuit sur les bioréacteurs connectés"},
            {"time": "10:00", "activity": "Extraction et dosage d'un anticorps monoclonal thérapeutique exprimé par des cellules de mammifères"},
            {"time": "12:00", "activity": "Purification sur colonne chromatographique FPLC et analyse par électrophorèse SDS-PAGE"},
            {"time": "14:30", "activity": "Réunion de transfert technologique avec les ingénieurs de l'usine de bioproduction pour augmenter le volume à 2 000 litres"},
            {"time": "16:45", "activity": "Rédaction du rapport de brevet décrivant une nouvelle méthode de fermentation enzymatique continue"}
        ],
        "skills": {
            "technical": [
                "Génie génétique, biologie moléculaire avancée et technologie de l'ADN recombinant",
                "Conduite et régulation des bioréacteurs (amont / upstream processing)",
                "Techniques de purification et séparation des biomolécules (aval / downstream processing)",
                "Réglementation pharmaceutique et Bonnes Pratiques de Fabrication (BPF / cGMP)",
                "Analyses biophysiques des protéines (spectrométrie de masse, diffusion de lumière DLS)"
            ],
            "human": [
                "Esprit d'innovation et créativité scientifique",
                "Rigueur méthodologique et exigence de traçabilité expérimentale",
                "Aptitude au management d'équipe pluridisciplinaire (techniciens, biologistes)",
                "Anglais scientifique courant obligatoire pour la littérature et les brevets"
            ],
            "tools": [
                "Bioréacteurs automatisés de paillasse et pilotes industriels",
                "Systèmes de chromatographie de purification FPLC (AKTA)",
                "Spectrophotomètres UV-visible et lecteurs de microplaques",
                "Logiciels de modélisation de bioprocédés et statistiques expérimentales"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Baccalauréat général scientifique", "desc": "Excellentes notes en biologie, chimie et mathématiques."},
                {"step": "Classes préparatoires / Licence (Bac +2 à +3)", "title": "Prépa BCPST ou Licence Biologie/Biochimie", "desc": "Concours d'entrée en école d'ingénieurs."},
                {"step": "École d'Ingénieurs (Bac +5)", "title": "Diplôme d'Ingénieur en Biotechnologie / Génie Biologique", "desc": "Formation de 3 ans avec stages industriels majeurs en biopharma."}
            ],
            "schools": [
                {"name": "ESBS — Strasbourg (École Supérieure de Biotechnologie de Strasbourg)", "country": "France", "scope": "France"},
                {"name": "INSA Toulouse (Génie Biologique) / UTC Compiègne", "country": "France", "scope": "France"},
                {"name": "ESP Dakar / Université Amadou Mahtar Mbow (UAM) — Diamniadio (Génie des Procédés et Biopharmacie)", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Titre d'Ingénieur Diplômé certifié par la CTI (Commission des Titres d'Ingénieur)", "Master Sciences du Vivant et Biotechnologies"]
        },
        "career": {
            "sectors": ["Industrie biopharmaceutique", "Agro-biotechnologies", "Chimie verte et environnement"],
            "employerTypes": ["Laboratoires pharmaceutiques mondiaux", "Start-ups innovantes (Biotechs)", "Instituts de bioproduction (Institut Pasteur de Dakar - projet MADIBA)"],
            "evolution": "Ingénieur R&D bioprocédés ➔ Chef de projet biotechnologies ➔ Responsable de production de vaccins/anticorps ➔ Directeur scientifique (CSO)",
            "pros": "Être au cœur des thérapies les plus révolutionnaires du siècle (vaccins ARN, immunothérapie du cancer), industrie en expansion fulgurante attirant des milliards d'investissements.",
            "cons": "Délais très longs de mise sur le marché d'un médicament (10 ans en moyenne), pression des rendements de culture biologique imprévisibles."
        },
        "salary": "🇫🇷 France : 2 800 - 5 500 € net/mois selon secteur et expérience (CIDJ) • 🇸🇳 Sénégal : 450 000 - 1 600 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Le vaccin contre le Covid-19 à ARN messager ou les nouveaux traitements révolutionnaires par anticorps monoclonaux contre les cancers ne sont pas fabriqués par de la chimie classique en éprouvette, mais produits par des cellules vivantes cultivées en bioréacteurs par des ingénieurs en biotechnologie !",
            "pourquoi": "Ces molécules géantes sont si complexes qu'aucune synthèse chimique artificielle n'est capable de les assembler à l'identique."
        },
        "sources": [
            {"organization": "CIDJ", "title": "Fiche métier : Ingénieur en biotechnologie", "url": "https://www.cidj.com/s-orienter/metiers/ingenieur-ingenieure-en-biotechnologie", "type": "metier"},
            {"organization": "France Biotech", "title": "Panorama des métiers des biotechnologies", "type": "institutionnel"}
        ],
        "interests": ["experiences-laboratoire", "creer-produits-chimie", "soigner-aider", "technologie-code"],
        "relatedJobSlugs": ["technicien-bioproduction", "bio-informaticien", "microbiologiste", "ingenieur-recherche-produit"]
    },

    # 10. INGÉNIEUR DE LA POLICE TECHNIQUE ET SCIENTIFIQUE
    {
        "id": "ingenieur-police-scientifique",
        "slug": "ingenieur-police-scientifique",
        "title": "Ingénieur / Ingénieure de la Police Technique et Scientifique",
        "aliases": ["Ingénieur PTS", "Expert criminalistique en chef", "Directeur de laboratoire de police scientifique"],
        "icon": "👮",
        "familyId": "biologie-chimie",
        "connectedFamilies": ["biologie-chimie", "droit-management", "industrie-mecanique"],
        "domain": "Police Technique & Scientifique (Criminalistique)",
        "domainId": "police-scientifique",
        "subdomain": "Biologie médico-légale (ADN)",
        "shortDescription": "Haut fonctionnaire scientifique, il dirige les expertises judiciaires complexes au laboratoire de criminalistique (ADN, toxicologie, balistique, stupéfiants) pour confondre les criminels.",
        "longDescription": "Le CIDJ référence les métiers de la police technique et scientifique au carrefour de Biologie-Chimie et de la Sécurité publique. L'ingénieur de police technique et scientifique (catégorie A) est un spécialiste de haut niveau scientifique (spécialités biologie moléculaire, chimie analytique, toxicologie, physique, balistique). Responsable de section en laboratoire de police scientifique ou à l'IRCGN, il valide les profils génétiques ADN, identifie les poisons et explosifs, rédige les rapports d'expertise judiciaire destinés aux juges d'instruction et témoigne aux assises pour expliquer scientifiquement les preuves matérielles.",
        "simpleDefinition": "Scientifique de haut niveau de la police qui dirige les analyses des traces de sang, d'ADN, de poisons et d'explosifs pour résoudre les crimes.",
        "level": "Bac +5 (Diplôme d'Ingénieur ou Master Scientifique + Concours du Ministère de l'Intérieur)",
        "missions": [
            "Concevoir et valider les protocoles d'analyses criminalistiques de pointe conformément aux normes d'accréditation ISO 17025",
            "Diriger la section d'expertise biologique (profils ADN, sang, sperme) ou chimique (stupéfiants, incendies, résidus de tir)",
            "Interpréter les résultats d'analyses et procéder aux comparaisons avec le Fichier National Automatisé des Empreintes Génétiques (FNAEG)",
            "Rédiger des rapports d'expertise médico-légale opposables devant la justice",
            "Témoigner en tant qu'expert judiciaire assermenté devant la Cour d'Assises et les tribunaux"
        ],
        "workEnvironment": "Laboratoires de police scientifique (SNPS en France, laboratoires de criminalistique de Dakar), Institut de Recherche Criminelle de la Gendarmerie Nationale (IRCGN).",
        "typicalDay": [
            {"time": "08:30", "activity": "Réception sous scellés judiciaires des prélèvements d'un dossier de meurtre non élucidé"},
            {"time": "09:30", "activity": "Supervision des analyses de profil génétique par séquençage capillaire menées par les techniciens"},
            {"time": "11:45", "activity": "Analyse d'un spectre de masse révélant la présence d'une nouvelle drogue de synthèse de synthèse dans un échantillon toxicologique"},
            {"time": "14:30", "activity": "Rédaction méticuleuse d'un rapport d'expertise technique pour le juge d'instruction"},
            {"time": "16:30", "activity": "Point téléphonique avec les enquêteurs de la brigade criminelle sur la compatibilité d'une trace ADN"}
        ],
        "skills": {
            "technical": [
                "Génétique médico-légale (STR, ADN mitochondrial, profilage génétique)",
                "Chimie analytique criminalistique (chromatographie gazeuse couplée spectrométrie de masse GC-MS)",
                "Droit pénal, procédure pénale et règles de conservation de la preuve matérielle (scellés)",
                "Norme qualité ISO 17025 des laboratoires d'essais médico-légaux",
                "Statistiques bayésiennes appliquées à l'évaluation des indices scientifiques"
            ],
            "human": [
                "Intégrité morale absolue, neutralité et sens de la justice",
                "Rigueur scientifique sans concession (le doute profite toujours à la défense)",
                "Clarté d'expression orale et écrite pour expliquer la science aux magistrats",
                "Résistance psychologique face à des affaires criminelles sordides"
            ],
            "tools": [
                "Analyseurs génétiques de séquençage d'ADN par électrophorèse capillaire (Applied Biosystems)",
                "Spectromètre de masse haute résolution GC-MS / LC-MS-MS",
                "Microscope électronique à balayage (MEB) pour résidus de tir",
                "Logiciels de comparaison génétique et bases FNAEG"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Bac scientifique général", "desc": "Bases d'excellence en biologie et chimie."},
                {"step": "Diplôme universitaire (Bac +5)", "title": "Master Biologie Moléculaire, Master Chimie Analytique ou Diplôme d'Ingénieur", "desc": "Formation scientifique de très haut niveau."},
                {"step": "Concours de la Police Nationale", "title": "Concours d'Ingénieur de la Police Technique et Scientifique (Catégorie A)", "desc": "Concours très sélectif organisé par le Ministère de l'Intérieur avec épreuves écrites et orales dans la spécialité choisie."}
            ],
            "schools": [
                {"name": "Service National de Police Scientifique (SNPS) / Universités partenaires — France", "country": "France", "scope": "France"},
                {"name": "École Nationale de Police et de Formation Permanente — Dakar (Sénégal) / Laboratoire de Police Scientifique", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Ingénieur de Police Technique et Scientifique assermenté", "Agrément d'Expert près la Cour d'Appel"]
        },
        "career": {
            "sectors": ["Police Nationale et Gendarmerie", "Justice et tribunaux", "Instituts de criminalistique"],
            "employerTypes": ["Ministère de l'Intérieur (Direction Générale de la Police Nationale)", "Ministère des Armées (Gendarmerie Nationale)", "Organisations internationales de police (Interpol)"],
            "evolution": "Ingénieur de PTS ➔ Ingénieur principal de PTS ➔ Chef de division / Chef de laboratoire de police scientifique ➔ Directeur de laboratoire",
            "pros": "Mettre la science au service de la vérité et de la justice, élucider des crimes réputés insolubles, environnement scientifique ultra-pointu.",
            "cons": "Nombre de postes très limité par an au concours, confrontation quotidienne à la noirceur humaine et aux scènes de violence."
        },
        "salary": "🇫🇷 France : 2 500 - 4 800 € net/mois selon grade et primes de police (CIDJ) • 🇸🇳 Sénégal : 350 000 - 950 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Une trace d'ADN contenant seulement quelques cellules (ADN de contact laissé par un doigt sur une poignée de porte) suffit aujourd'hui à un ingénieur de police scientifique pour établir un profil génétique complet grâce à la technologie PCR qui amplifie des millions de fois le moindre brin d'ADN !",
            "pourquoi": "La criminalistique moderne repose sur la sensibilité prodigieuse des techniques biochimiques d'amplification enzymatique."
        },
        "sources": [
            {"organization": "CIDJ", "title": "Fiche métier : Ingénieur de la police technique et scientifique", "url": "https://www.cidj.com/s-orienter/metiers/ingenieur-ingenieure-de-la-police-technique-et-scientifique", "type": "metier"},
            {"organization": "Police Nationale — Ministère de l'Intérieur", "title": "Ingénieur de la police technique et scientifique", "type": "institutionnel"}
        ],
        "interests": ["police-scientifique-enquete", "experiences-laboratoire", "proteger-defendre"],
        "relatedJobSlugs": ["technicien-police-scientifique", "technicien-principal-police-scientifique", "microbiologiste", "technicien-chimiste"]
    },

    # 11. INGÉNIEUR DE RECHERCHE PRODUIT
    {
        "id": "ingenieur-recherche-produit",
        "slug": "ingenieur-recherche-produit",
        "title": "Ingénieur / Ingénieure de Recherche Produit",
        "aliases": ["Ingénieur R&D produit", "Chef de projet R&D nouveau produit", "Ingénieur innovation et développement"],
        "icon": "🔬",
        "familyId": "biologie-chimie",
        "connectedFamilies": ["biologie-chimie", "industrie-mecanique", "agriculture-agritech", "sante-soins-paramedical", "environnement-climat"],
        "domain": "Recherche, R&D & Développement Produit",
        "domainId": "recherche-rd-produit",
        "subdomain": "R&D industrielle",
        "shortDescription": "Ingénieur transversal de l'innovation, il explore les propriétés chimiques, biologiques et physiques des matières pour inventer les produits de consommation de demain.",
        "longDescription": "Le CIDJ met en exergue l'extrême transversalité du métier d'ingénieur de recherche produit, associé à une multitude de secteurs vitaux : agriculture, agroalimentaire, biologie-chimie, industrie, énergie, environnement et santé. En laboratoire de R&D, il transforme une idée ou un besoin consommateur en un produit tangible performant : nouvel aliment santé, cosmétique éco-conçu, biomatériau composite biodégradable ou dispositif médical. Il conçoit les expériences, teste la résistance et l'efficacité des formules, pilote les études d'industrialisation et veille au respect des normes sanitaires mondiales.",
        "simpleDefinition": "Chercheur inventeur dans l'industrie qui crée de nouveaux produits (nourriture, crèmes, plastiques écologiques) en combinant sciences et expériences.",
        "level": "Bac +5 à Bac +8 (Diplôme d'Ingénieur chimiste/biologiste / Master R&D / Doctorat)",
        "missions": [
            "Conduire des recherches appliquées pour concevoir de nouvelles formules de produits chimiques, biologiques ou alimentaires",
            "Mener des expérimentations de criblage, caractériser la matière et tester l'efficacité fonctionnelle des prototypes",
            "Optimiser les coûts de revient et substituer les matières premières polluantes par des alternatives biosourcées",
            "Superviser les tests de stabilité, de vieillissement accéléré et de tolérance toxicologique",
            "Coordonner le scale-up avec les équipes de production industrielle et de propriété industrielle (brevets)"
        ],
        "workEnvironment": "Centres mondiaux de R&D des grands groupes industriels (L'Oréal, Danone, Michelin, Sanofi, Solvay), centres techniques et PME innovantes.",
        "typicalDay": [
            {"time": "08:45", "activity": "Revue des résultats d'analyses rhéologiques et de stabilité thermique sur 3 nouveaux prototypes de formulation"},
            {"time": "10:30", "activity": "Séance de brainstorming avec le service marketing sur le cahier des charges d'un emballage 100% compostable"},
            {"time": "12:00", "activity": "Déjeuner d'échanges avec des chercheurs universitaires partenaires d'un projet d'éco-conception"},
            {"time": "14:00", "activity": "Supervision sur ligne pilote de fabrication du premier lot test de 50 kg du nouveau produit"},
            {"time": "16:30", "activity": "Analyse de la liberté d'exploitation avec le conseil en brevets de l'entreprise"}
        ],
        "skills": {
            "technical": [
                "Physico-chimie de la matière condensée, biochimie et caractérisation des matériaux",
                "Méthodologie des plans d'expériences (DoE) et statistiques industrielles",
                "Formulation, rhéologie et dynamique des fluides complexes",
                "Éco-conception, Analyse de Cycle de Vie (ACV) et réglementation environnementale",
                "Management de projet R&D en mode agile et propriété intellectuelle (brevets)"
            ],
            "human": [
                "Créativité foisonnante et capacité à penser 'out of the box'",
                "Pragmatisme industriel pour concilier rêve scientifique et faisabilité en usine",
                "Sens aigu de la communication collaborative inter-métiers (marketing, usine, achats)",
                "Persévérance face aux échecs expérimentaux inhérents à toute découverte"
            ],
            "tools": [
                "Rhéomètre rotatif et analyseur de texture (Texture Analyzer)",
                "Microscopes optiques et électroniques de surface",
                "Logiciels de plans d'expériences (Design-Expert, MODDE)",
                "Lignes pilotes de production industrielle miniature"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Baccalauréat scientifique général", "desc": "Excellentes notes en physique, chimie et biologie."},
                {"step": "Cycle préparatoire / Licence (Bac +2 à +3)", "title": "Classes prépas scientifiques (PC, BCPST) ou Licence Chimie/Biologie", "desc": "Bases scientifiques fondamentales."},
                {"step": "École d'Ingénieurs (Bac +5)", "title": "Diplôme d'Ingénieur en Chimie, Matériaux ou Agroalimentaire", "desc": "Formation de pointe en R&D produit (ESPCI, Chimie Paris, AgroParisTech)."},
                {"step": "Doctorat (Bac +8, optionnel)", "title": "Doctorat (Thèse CIFRE en entreprise)", "desc": "Excellente voie pour devenir expert scientifique mondial."}
            ],
            "schools": [
                {"name": "Grandes écoles de chimie de la Fédération Gay-Lussac (Chimie ParisTech, ESPCI, ENSC Lille, Montpellier)", "country": "France", "scope": "France"},
                {"name": "AgroParisTech / ENSAIA (Pôles d'excellence en R&D produit agroalimentaire)", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique (ESP) — UCAD Dakar (Département Génie Chimique et Alimentaire)", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Titre d'Ingénieur certifié CTI", "Certification Green Belt / Black Belt Lean R&D"]
        },
        "career": {
            "sectors": ["Cosmétique et beauté", "Agroalimentaire et nutrition", "Chimie des matériaux et santé"],
            "employerTypes": ["Multinationales de grande consommation (Procter & Gamble, Unilever, Nestlé)", "Groupes chimiques et pharmaceutiques", "Start-ups de CleanTech"],
            "evolution": "Ingénieur R&D produit ➔ Chef de projet R&D senior ➔ Responsable de laboratoire d'innovation ➔ Directeur R&D Monde",
            "pros": "Créer de ses mains des objets ou aliments qui feront le quotidien de millions de personnes, grande transversalité sectorielle, métier très valorisé.",
            "cons": "Pression des délais de mise sur le marché face à la concurrence internationale, contraintes de rentabilité économique."
        },
        "salary": "🇫🇷 France : 2 900 - 5 800 € net/mois selon secteur et taille du groupe (CIDJ) • 🇸🇳 Sénégal : 400 000 - 1 500 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Pour concevoir une nouvelle crème hydratante ou un nouveau yaourt aux fruits, un ingénieur de recherche produit teste en moyenne plus de 150 formulations chimiques différentes en laboratoire avant de trouver celle qui possède la texture parfaite, la durée de vie idéale et l'efficacité prouvée !",
            "pourquoi": "Chaque ingrédient modifie l'équilibre microscopique de l'émulsion entre l'eau et l'huile."
        },
        "sources": [
            {"organization": "CIDJ", "title": "Fiche métier : Ingénieur de recherche produit", "url": "https://www.cidj.com/s-orienter/metiers/ingenieur-ingenieure-de-recherche-produit", "type": "metier"},
            {"organization": "Association Nationale des Industries Alimentaires (ANIA) / France Chimie", "title": "L'innovation et les métiers de la R&D", "type": "institutionnel"}
        ],
        "interests": ["creer-produits-chimie", "experiences-laboratoire", "creer-designer", "resoudre-problemes"],
        "relatedJobSlugs": ["ingenieur-formulation", "technicien-chimiste", "aromaticien", "ingenieur-biotechnologie"]
    },

    # 12. INGÉNIEUR FORMULATION
    {
        "id": "ingenieur-formulation",
        "slug": "ingenieur-formulation",
        "title": "Ingénieur / Ingénieure Formulation",
        "aliases": ["Formulateur chimiste", "Ingénieur chimiste formulateur", "Chef de projet formulation"],
        "icon": "🧴",
        "familyId": "biologie-chimie",
        "connectedFamilies": ["biologie-chimie", "industrie-mecanique", "sante-soins-paramedical"],
        "domain": "Formulation Chimique, Émulsions & Matériaux",
        "domainId": "formulation",
        "subdomain": "Tensioactifs & Émulsions",
        "shortDescription": "Maître de l'assemblage moléculaire, il associe principes actifs, liants, émulsifiants et solvants pour fabriquer peintures, crèmes de beauté, colles, phytosanitaires et médicaments.",
        "longDescription": "Le CIDJ documente l'ingénieur formulation comme le grand spécialiste de la chimie des mélanges stables. Il ne crée pas nécessairement de nouvelles molécules pures, mais sait marier des matières premières insolubles entre elles (comme l'eau et l'huile) à l'aide de tensioactifs et de polymères. Qu'il travaille pour la cosmétique de luxe (fond de teint ne tachant pas), le bâtiment (peintures thermorégulantes sans odeur), la pharmacie (gels à libération prolongée) ou l'automobile (adhésifs structuraux), il garantit que le produit reste homogène pendant des années sans déphaser.",
        "simpleDefinition": "Chimiste expert des recettes de pointe qui mélange des ingrédients liquides et poudres pour fabriquer des crèmes, des peintures et des gels parfaits.",
        "level": "Bac +5 à Bac +8 (Diplôme d'Ingénieur Chimiste / Master Formulation)",
        "missions": [
            "Concevoir et développer de nouvelles formules chimiques homogènes et pérennes (émulsions, gels, mousses, poudres)",
            "Sélectionner les tensioactifs, polymères, charges et conservateurs compatibles avec le cahier des charges",
            "Mesurer les propriétés rhéologiques (viscosité, étalement, texture) et la stabilité sous conditions extrêmes de température",
            "Remplacer les solvants pétrosourcés et composés organiques volatils (COV) par des alternatives bio-sourcées écologiques",
            "Superviser le passage industriel de la formule du bécher de 500 mL vers la cuve de 10 tonnes"
        ],
        "workEnvironment": "Laboratoires de formulation cosmétique, peintures et adhésifs, pharmaceutique, agrochimie, détergence.",
        "typicalDay": [
            {"time": "08:30", "activity": "Contrôle visuel et centrifugation des éprouvettes sorties de l'étuve de vieillissement à 45°C : aucun déphasage"},
            {"time": "09:30", "activity": "Mise au point d'une crème solaire minérale invisible : pesée précise des filtres UV en dioxyde de titane et des émulsifiants"},
            {"time": "11:30", "activity": "Mesure au rhéomètre rotatif de la courbe de viscosité pour vérifier la facilité d'étalement sur la peau"},
            {"time": "14:30", "activity": "Essai de substitution d'un solvant fossile par un dérivé biosourcé issu de la betterave sur une peinture murale"},
            {"time": "16:45", "activity": "Rédaction de la fiche technique de formulation et du protocole de fabrication pour l'usine"}
        ],
        "skills": {
            "technical": [
                "Physico-chimie des colloïdes, des émulsions et des suspensions",
                "Rhéologie appliquée (fluides newtoniens et non-newtoniens, seuil d'écoulement)",
                "Chimie des polymères, tensioactifs et interactions interfaciales",
                "Techniques de caractérisation physico-chimique (granulométrie laser, potentiel zêta, tensiométrie)",
                "Normes réglementaires sectorielles (REACH, cosmétique ISO 22716, BPF pharmaceutiques)"
            ],
            "human": [
                "Patience, méthode et rigueur de manipulation scientifique",
                "Créativité sensorielle pour imaginer des textures agréables et inédites",
                "Capacité à résoudre des énigmes chimiques de déstabilisation",
                "Esprit de synthèse pour dialoguer avec la production et le marketing"
            ],
            "tools": [
                "Turbine homogénéisatrice à fort cisaillement (Silverson, Ultra-Turrax)",
                "Rhéomètre rotatif et viscosimètre cône-plan",
                "Granulomètre laser pour mesure de taille des gouttelettes microscopiques",
                "Tensiomètre de goutte et étuves de stabilité thermo-régulées"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Baccalauréat général scientifique", "desc": "Points forts en chimie et physique."},
                {"step": "Cycle préparatoire / Licence (Bac +2 à +3)", "title": "Classes prépas ou Licence de Chimie", "desc": "Thermodynamique, chimie organique et atomistique."},
                {"step": "École d'Ingénieurs / Master (Bac +5)", "title": "Diplôme d'Ingénieur Chimiste spécialité Formulation (ITECH, CPE Lyon, ENSIC)", "desc": "Formation de référence internationale en science de la formulation."}
            ],
            "schools": [
                {"name": "ITECH Lyon — École d'Ingénieurs en formulation (chimie des peintures, cosmétiques, adhésifs)", "country": "France", "scope": "France"},
                {"name": "CPE Lyon / Chimie ParisTech / Université de Montpellier (Master Formulation)", "country": "France", "scope": "France"},
                {"name": "ESP — UCAD Dakar (Département Génie Chimique et Biologie Appliquée)", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Diplôme d'Ingénieur Chimiste certifié CTI", "Master en Formulation et Physico-Chimie des Colloïdes"]
        },
        "career": {
            "sectors": ["Cosmétique et parfumerie", "Peintures, encres et vernis", "Pharmacie galénique", "Détergence et agrochimie"],
            "employerTypes": ["Grands noms de la cosmétique (L'Oréal, Chanel, Clarins)", "Fabricants de peintures et matériaux (Saint-Gobain, Arkema)", "Laboratoires pharmaceutiques mondiaux"],
            "evolution": "Ingénieur formulateur ➔ Responsable d'équipe formulation ➔ Directeur de laboratoire R&D ➔ Directeur technique d'entité",
            "pros": "Métier fascinant où la science devient palpable et texturée, forte demande de l'industrie, opportunités exceptionnelles dans le luxe et la cosmétique.",
            "cons": "Échecs fréquents de stabilité à surmonter avec patience (les émulsions sont des systèmes vivants et capricieux), pression sur les délais."
        },
        "salary": "🇫🇷 France : 2 800 - 5 200 € net/mois selon industrie et réputation (CIDJ) • 🇸🇳 Sénégal : 350 000 - 1 300 000 FCFA net/mois",
        "saviezVous": {
            "fait": "L'eau et l'huile sont chimiquement incapables de se mélanger naturellement. Pour fabriquer une crème cosmétique ou une mayonnaise, l'ingénieur formulateur utilise des molécules 'bilingues' appelées tensioactifs, dont une extrémité aime l'eau (hydrophile) et l'autre aime l'huile (lipophile), emprisonnant ainsi des milliards de micro-gouttelettes !",
            "pourquoi": "Ces tensioactifs réduisent la tension interfaciale et empêchent les gouttelettes d'huile de se rassembler pour former une flaque en surface."
        },
        "sources": [
            {"organization": "CIDJ", "title": "Fiche métier : Ingénieur formulation", "url": "https://www.cidj.com/s-orienter/metiers/ingenieur-ingenieure-formulation", "type": "metier"},
            {"organization": "France Chimie", "title": "Les métiers de la formulation chimique", "type": "institutionnel"}
        ],
        "interests": ["creer-produits-chimie", "experiences-laboratoire", "creer-designer"],
        "relatedJobSlugs": ["ingenieur-recherche-produit", "technicien-chimiste", "aromaticien", "coloriste-textile"]
    }
]

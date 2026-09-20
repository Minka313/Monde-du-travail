# execution/btp_jobs_part1.py
# Fiches Métiers Dérivées du Référentiel Officiel L'Étudiant (Secteur Bâtiment et Travaux Publics)
# Fiches Métiers 1 à 13 : Architecture, Ingénierie, Économie de la construction, Géomètre, Urbanisme, Gros Œuvre

BTP_JOBS_PART1 = [
    # -----------------------------------------------------------------------
    # 1. ARCHITECTE
    # -----------------------------------------------------------------------
    {
        "id": "architecte",
        "slug": "architecte",
        "title": "Architecte DPLG / Diplômé d'État",
        "aliases": ["Architecte concepteur", "Maître d'œuvre en architecture", "Architecte urbaniste"],
        "icon": "🏛️",
        "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Architecture & Conception",
        "domainId": "architecture-conception",
        "subdomain": "Conception d'édifices & Maîtrise d'œuvre",
        "sectors": ["BTP", "Architecture", "Urbanisme"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "Bac +5 (Diplôme d'État d'Architecte - DEA) à Bac +6 (HMONP)",
        "salary": "🇫🇷 France : 2 400 - 5 200 € net/mois (~36 000 - 78 000 € brut/an en agence ou honoraires libéraux, Source : L'Étudiant) • 🇸🇳 Sénégal : 500 000 - 2 000 000 FCFA / mois (Ordre des Architectes du Sénégal - ODAS, agences de Dakar)",
        "simpleDefinition": "L'architecte conçoit des maisons, des immeubles et des édifices publics en alliant esthétique artistique, solidité technique, confort d'usage et respect de l'environnement, puis supervise leur construction du premier croquis jusqu'à la remise des clés.",
        "shortDescription": "Créateur majeur du cadre bâti répertorié par L'Étudiant, l'architecte traduit les besoins d'un maître d'ouvrage en plans spatiaux et coordonne le projet de A à Z.",
        "longDescription": "Comme décrit dans la fiche métier officielle de L'Étudiant, l'architecte prend en charge la conception d'un bâtiment neuf ou la réhabilitation d'un monument historique. Il analyse le terrain, les contraintes d'urbanisme (PLU) et le budget du client pour imaginer les volumes, la lumière et la distribution des pièces. Après avoir dessiné les esquisses et plans détaillés en 3D (BIM), il dépose la demande de permis de construire, sélectionne les entreprises du BTP lors des appels d'offres et effectue le suivi de chantier pour vérifier la conformité des travaux jusqu'à la réception de l'ouvrage.",
        "mainObjective": "Concevoir des espaces fonctionnels, esthétiques, durables et conformes aux réglementations constructives et environnementales.",
        "companyRole": "Concepteur visionnaire et garant de la cohérence spatiale, technique et juridique du projet architectural.",
        "workEnvironment": [
            "🏛️ Agences d'architecture privées ou cabinets d'urbanisme",
            "💻 Stations graphiques de CAO/DAO et modélisation BIM 3D",
            "🦺 Visites régulières de chantiers en extérieur par tous les temps"
        ],
        "missions": [
            "Rencontrer le client pour analyser ses attentes, contraintes financières et exigences programmatiques",
            "Réaliser les études de faisabilité technique et réglementaire (règles d'urbanisme, servitudes, accessibilité PMR)",
            "Dessiner les esquisses, avant-projets sommaires (APS) et avant-projets définitifs (APD) sous logiciels 3D",
            "Constituer et déposer le dossier administratif de demande de permis de construire",
            "Rédiger les pièces écrites (CCTP) pour la consultation des entreprises et diriger les réunions de chantier hebdomadaires"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Revue des plans d'exécution", "desc": "Ajustement sur Revit des percements de façade d'un immeuble de bureaux pour intégrer les gaines de ventilation CVC."},
            {"time": "10:30", "title": "Réunion de chantier sur site", "desc": "Visite du chantier de réhabilitation avec le conducteur de travaux et le client pour valider le coulage de l'escalier hélicoïdal."},
            {"time": "14:00", "title": "Rendez-vous au service d'urbanisme", "desc": "Échange avec l'architecte des Bâtiments de France (ABF) sur le choix des teintes d'enduit minéral en zone protégée."},
            {"time": "16:30", "title": "Présentation client 3D", "desc": "Projection d'une visite virtuelle immersive en réalité augmentée pour valider le projet d'école bioclimatique."}
        ],
        "skills": {
            "technical": [
                "Conception architecturale, histoire de l'art et composition des volumes",
                "Réglementation de la construction (Eurocodes, RE2020, sécurité incendie, accessibilité)",
                "Modélisation BIM 3D (Autodesk Revit, ArchiCAD, SketchUp, Rhinoceros)",
                "Économie de la construction, chiffrage estimatif et rédaction de CCTP"
            ],
            "human": [
                "Sensibilité artistique et vision spatiale tridimensionnelle innée",
                "Capacité d'écoute, diplomatie et qualités relationnelles",
                "Rigueur méthodologique et résistance au stress des livraisons de concours"
            ],
            "tools": [
                "Revit / ArchiCAD / AutoCAD",
                "Moteurs de rendu 3D (Lumion, Twinmotion, V-Ray)",
                "Logiciels de retouche et présentation (Photoshop, InDesign)",
                "Lasermètres de précision et casques de réalité virtuelle"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Licence en Architecture (Bac +3)", "title": "Diplôme d'Études En Architecture (DEEA)", "desc": "Acquisition des fondamentaux du dessin, de l'histoire architecturale et de la géométrie de l'espace."},
                {"step": "Master / Diplôme d'État (Bac +5)", "title": "Diplôme d'État d'Architecte (DEA)", "desc": "Formation de référence dispensée dans les 20 Écoles Nationales Supérieures d'Architecture (ENSA)."},
                {"step": "Habilitation professionnelle (Bac +6)", "title": "Habilitation à exercer la Maîtrise d'Œuvre en son Nom Propre (HMONP)", "desc": "Année de formation pratique en agence obligatoire pour s'inscrire à l'Ordre des Architectes et signer des permis."}
            ],
            "schools": [
                {"name": "Écoles Nationales Supérieures d'Architecture (ENSA Paris-Belleville, Lyon, Nantes) — France", "country": "France", "scope": "France"},
                {"name": "École Spéciale d'Architecture (ESA Paris) / INSA Strasbourg — France", "country": "France", "scope": "France"},
                {"name": "Collège Universitaire d'Architecture de Dakar (CUAD) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Africaine des Métiers de l'Architecture et de l'Urbanisme (EAMAU Lomé) — Régional UEMOA", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Inscription au Tableau de l'Ordre des Architectes", "Certification HQE Bâtiment Durable", "Certification Professionnelle Revit Certified Professional"],
            "schoolSubjects": ["Projet d'architecture", "Résistance des matériaux", "Histoire et théorie de l'architecture", "Droit de l'urbanisme"]
        },
        "career": {
            "sectors": ["Agences d'architecture privées", "Bureaux d'études pluridisciplinaires et promoteurs immobiliers", "Fonction publique territoriale et ministères (CAUE, DDE)", "Exercice libéral indépendant"],
            "employerTypes": ["Agences d'architecture", "Collectivités publiques", "Entreprises générales de construction"],
            "evolution": "Architecte salarié junior ➔ Chef de projet d'agence ➔ Associé en cabinet ➔ Fondateur de sa propre agence d'architecture",
            "pros": "Créativité sans limite, fierté de voir s'ériger durablement ses œuvres dans la ville, prestige intellectuel.",
            "cons": "Nombreuses heures de charrette avant les concours, lourdes responsabilités décennales en cas de malfaçon."
        },
        "gettingStarted": {
            "beginnerProject": "Tenir un carnet de croquis urbains en observant les façades et perspectives de sa ville.",
            "intermediateProject": "Modéliser sa propre chambre à l'échelle sur SketchUp avec mobilier et lumière naturelle.",
            "advancedProject": "Concevoir un pavillon d'exposition de 100 m² intégrant ventilation naturelle et toiture végétalisée.",
            "portfolioIdeas": ["Dossier de croquis artistiques et maquettes en carton", "Planches d'un projet de réhabilitation de hangar"]
        },
        "aiImpact": {
            "level": "Révolutionnaire",
            "summary": "L'IA générative (Midjourney, DALL-E, Stable Diffusion) permet d'explorer des dizaines de variations conceptuelles en quelques secondes, tandis que le design génératif optimise l'ensoleillement et l'acoustique.",
            "automatedTasks": ["Génération de moodboards d'ambiance", "Vérification automatisée de conformité au règlement d'urbanisme"],
            "emergingSkills": ["Prompt engineering architectural et intégration du design génératif sous Grasshopper"],
            "humanEdge": "La sensibilité émotionnelle, l'intelligence contextuelle du quartier et le dialogue humain avec les habitants."
        },
        "africaContext": {
            "senegalInsight": "À Dakar et dans le pôle urbain de Diamniadio, les architectes sont confrontés à des défis majeurs : inventer une architecture bioclimatique adaptée au climat sahélien (brise-soleil, double toiture ventilée, terre crue / briques BTC) pour réduire la dépendance à la climatisation électrique.",
            "localSectors": ["Ordre des Architectes du Sénégal (ODAS)", "Agences d'architecture dakaroises réputées", "DGPU (Délégation Générale à la Promotion des Pôles Urbains de Diamniadio)"],
            "remoteWork": "Hybride (dessin et modélisation en télétravail / réunions et chantiers sur place).",
            "entrepreneurship": "Fondation d'une agence d'architecture durable spécialisée dans les éco-matériaux locaux (typha, terre compressée, bois)."
        },
        "relatedJobSlugs": ["architecte-dinterieur", "urbaniste", "ingenieur-genie-civil", "dessinateur-projeteur-en-batiment"],
        "connectedFamilies": ["culture-medias", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier Architecte — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/architecte.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "Ordre National des Architectes", "url": "https://www.architectes.org/", "source": "CNOA"}
        ],
        "sources": ["L'Étudiant", "CNOA", "ODAS Sénégal"],
        "interests": ["concevoir-creer", "arts-design", "nature-environnement"],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "En France comme au Sénégal, le recours à un architecte diplômé est une obligation légale pour toute construction neuve dépassant 150 mètres carrés de surface de plancher.",
            "pourquoi": "Cette règle garantit la qualité architecturale du paysage urbain, la sécurité des habitants et l'insertion environnementale de l'édifice.",
            "a_retenir": "L'artiste et l'ingénieur qui imaginent les villes et les habitats de demain."
        }
    },

    # -----------------------------------------------------------------------
    # 2. ARCHITECTE D'INTÉRIEUR
    # -----------------------------------------------------------------------
    {
        "id": "architecte-dinterieur",
        "slug": "architecte-dinterieur",
        "title": "Architecte d'Intérieur",
        "aliases": ["Designer d'espace", "Architecte d'intérieur scénographe", "Aménageur d'espaces professionnels"],
        "icon": "🛋️",
        "image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Architecture & Conception",
        "domainId": "architecture-conception",
        "subdomain": "Architecture d'intérieur & Design d'espace",
        "sectors": ["BTP", "Architecture", "Design"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "Bac +4 à Bac +5 (Diplôme d'écoles d'art reconnues par le CFAI ou DSAA)",
        "salary": "🇫🇷 France : 2 000 - 4 200 € net/mois (~28 000 - 62 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 400 000 - 1 500 000 FCFA / mois (Boutiques de luxe, hôtels de la Petite Côte, résidences haut standing Almadies)",
        "simpleDefinition": "L'architecte d'intérieur repense la distribution des pièces d'un bâtiment sans toucher aux murs porteurs extérieurs, en jouant sur les cloisons, la lumière, les matières et le mobilier pour optimiser le confort et l'ambiance des lieux de vie et de travail.",
        "shortDescription": "Spécialiste de la scénographie intérieure documenté par L'Étudiant, il conçoit des espaces chaleureux et fonctionnels pour les appartements, commerces, hôtels et bureaux.",
        "longDescription": "Selon la fiche dédiée de L'Étudiant, l'architecte d'intérieur intervient une fois la structure du bâtiment érigée ou dans le cadre de rénovations lourdes. Il redistribue les volumes intérieurs, conçoit des rangements sur mesure, sélectionne les matériaux nobles (bois, métal, céramique), dessine les plans d'éclairage et coordonne les artisans du second œuvre (électriciens, menuisiers, peintres, carreleurs). Son travail allie sens de l'ergonomie, créativité plastique et rigueur technique pour sublimer le quotidien des usagers.",
        "mainObjective": "Harmoniser fonctionnalité, ergonomie et esthétique visuelle dans les volumes intérieurs en respectant les normes de sécurité et les budgets alloués.",
        "companyRole": "Metteur en scène de l'espace intérieur et garant de l'expérience utilisateur et de l'ambiance des lieux.",
        "workEnvironment": [
            "🛋️ Agences de design d'espace ou cabinets d'architecture pluridisciplinaires",
            "🏬 Boutiques, sièges sociaux d'entreprises, hôtels de prestige et logements de particuliers",
            "🛠️ Chantiers d'aménagement pour le calage des finitions avec les artisans"
        ],
        "missions": [
            "Analyser le mode de vie des particuliers ou l'organisation de travail des entreprises",
            "Concevoir des plans de circulation, d'implantation de mobilier et d'éclairage sur mesure",
            "Élaborer des planches de tendances (moodboards) associant couleurs, textiles et échantillons de matières",
            "Consulter les artisans spécialisés du second œuvre et établir les devis détaillés",
            "Assurer la direction artistique et le suivi rigoureux du chantier de second œuvre"
        ],
        "typicalDay": [
            {"time": "09:00", "title": "Planche tendance et sélection de matières", "desc": "Choix d'échantillons de travertin, de noyer massif et de laiton brossé pour la rénovation d'un restaurant gastronomique."},
            {"time": "11:30", "title": "Modélisation 3D photoréaliste", "desc": "Rendu sous SketchUp et Enscape d'une suite hôtelière avec simulation de l'éclairage indirect le soir."},
            {"time": "14:30", "title": "Visite d'avancement chez l'ébéniste", "desc": "Contrôle des assemblages et des coulisses des placards intégrés dans l'atelier du menuisier partenaire."},
            {"time": "16:45", "title": "Point sur chantier avec le plaquiste", "desc": "Vérification de l'implantation des corniches lumineuses et des coffrages de faux-plafond acoustiques."}
        ],
        "skills": {
            "technical": [
                "Maîtrise de la distribution spatiale et de l'ergonomie des flux humains",
                "Connaissance approfondie des matériaux de finition (bois, verre, pierres, métaux, résines)",
                "Éclairagisme architectural et acoustique des espaces intérieurs",
                "Logiciels de CAO/DAO (AutoCAD, SketchUp, Vectorworks, 3ds Max)"
            ],
            "human": [
                "Écoute empathique et intuition esthétique très développée",
                "Capacité de négociation et de coordination avec les artisans",
                "Rigueur dans le respect des délais et des enveloppes budgétaires"
            ],
            "tools": [
                "SketchUp Pro / AutoCAD / Revit",
                "Moteurs de rendu (Enscape, V-Ray, Corona)",
                "Nuanciers professionnels (Pantone, RAL) et matériauthèque",
                "Télémètres laser haute précision"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "DSAA / Bachelor (Bac +3)", "title": "DN MADE mention Espace ou Bachelor Design d'Intérieur", "desc": "Formation pratique aux bases du dessin d'espace, maquettes et histoire du mobilier."},
                {"step": "Master / Diplôme Bac +5", "title": "Diplôme d'Architecte d'Intérieur certifié par le CFAI (Bac +5)", "desc": "Niveau d'excellence dispensé dans les grandes écoles d'arts appliqués (Boulle, Camondo, Ensad, Penninghen)."},
                {"step": "Reconnaissance CFAI", "title": "Agrément du Conseil Français des Architectes d'Intérieur", "desc": "Label de qualification professionnelle garantissant la compétence auprès des maîtres d'ouvrage."}
            ],
            "schools": [
                {"name": "École Boulle / École Camondo / ENSAD (Arts Déco Paris) — France", "country": "France", "scope": "France"},
                {"name": "Penninghen / École Bleue / ESAIL Lyon — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure d'Arts Visuels et Design de Dakar — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Institut Supérieur des Arts et Métiers de Dakar — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Agrément professionnel CFAI", "Certification de modélisation 3D d'espace", "Habilitation sécurité des ERP (Établissements Recevant du Public)"],
            "schoolSubjects": ["Design d'espace", "Technologie des matériaux", "Histoire du design et du meuble", "Normes ERP et sécurité incendie"]
        },
        "career": {
            "sectors": ["Cabinets d'architecture d'intérieur et de design", "Grandes enseignes de distribution et d'hôtellerie", "Agences d'aménagement de bureaux tertiaires", "Exercice libéral indépendant"],
            "employerTypes": ["Agences d'architecture", "Studios de design d'espace", "Entreprises d'agencement haut de gamme"],
            "evolution": "Designer junior ➔ Architecte d'intérieur chef de projet ➔ Directeur artistique d'agence ➔ Fondateur de son propre studio d'intérieur",
            "pros": "Création d'espaces tangibles et intimes, satisfaction des retours enthousiastes des clients, diversité permanente des chantiers.",
            "cons": "Gestion des retards d'artisans, pression sur les délais de livraison d'ouverture de boutiques."
        },
        "gettingStarted": {
            "beginnerProject": "Relever le plan d'un appartement au mètre ruban et le redessiner à l'échelle 1/50e.",
            "intermediateProject": "Concevoir un moodboard thématique pour la reconversion d'une ancienne usine en loft chaleureux.",
            "advancedProject": "Réaliser le plan complet d'aménagement d'un café de 80 m² respectant les normes d'accessibilité handicapé (PMR).",
            "portfolioIdeas": ["Book de projets d'aménagement avec plans cotés et perspectives 3D", "Échantillonnage de matériaux coordonnés"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "Des outils de rendu par IA génèrent instantanément des mises en scène de meubles et de textures à partir de simples esquisses en traits noirs.",
            "automatedTasks": ["Génération d'options de rendu de textures", "Visualisation automatique de variations de luminaires"],
            "emergingSkills": ["Utilisation d'outils d'IA comme Krea ou PromeAI pour les phases d'idéation rapide"],
            "humanEdge": "La sensibilité au toucher des matières, la justesse du goût sur mesure et la relation de confiance avec le client."
        },
        "africaContext": {
            "senegalInsight": "À Dakar, l'explosion du secteur de l'hôtellerie de luxe, des restaurants branchés des Almadies et du Plateau, ainsi que des villas de standing de Saly crée un engouement massif pour l'architecture d'intérieur mêlant design contemporain épuré et artisanat d'art africain (bois d'ébène, vannerie, tissus wax ou bogolan).",
            "localSectors": ["Hôtellerie et restauration touristique", "Showrooms d'ameublement de Dakar", "Résidences privées de standing"],
            "remoteWork": "Hybride (conception en atelier et suivi régulier chez les menuisiers et sur les chantiers).",
            "entrepreneurship": "Création d'une marque de design d'intérieur valorisant les matières naturelles et le mobilier artisanal sénégalais."
        },
        "relatedJobSlugs": ["architecte", "menuisier", "peintre-en-batiment", "plaquiste"],
        "connectedFamilies": ["arts-design", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier Architecte d'intérieur — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/architecte-dinterieur.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "CFAI — Conseil Français des Architectes d'Intérieur", "url": "https://www.cfai.fr/", "source": "CFAI"}
        ],
        "sources": ["L'Étudiant", "CFAI"],
        "interests": ["arts-design", "concevoir-creer", "contact-humain"],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "À la différence du simple décorateur d'intérieur, l'architecte d'intérieur a les compétences techniques pour modifier les cloisons, les réseaux d'eau, d'électricité et la climatisation, transformant en profondeur la structure spatiale.",
            "pourquoi": "Il possède une véritable formation technique aux normes du bâtiment et à la sécurité incendie.",
            "a_retenir": "Le magicien des volumes qui réinvente nos espaces intérieurs."
        }
    },

    # -----------------------------------------------------------------------
    # 3. INGÉNIEUR DANS LE BTP / INGÉNIEUR TRAVAUX
    # -----------------------------------------------------------------------
    {
        "id": "ingenieur-dans-le-btp",
        "slug": "ingenieur-dans-le-btp",
        "title": "Ingénieur dans le BTP / Ingénieur Travaux",
        "aliases": ["Ingénieur de chantier", "Ingénieur travaux bâtiment", "Ingénieur d'affaires BTP"],
        "icon": "🏗️",
        "image": "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Ingénierie & Bureaux d'Études",
        "domainId": "ingenierie-bureaux-etudes",
        "subdomain": "Ingénierie de chantier & Travaux",
        "sectors": ["BTP", "Génie Civil", "Construction"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "Bac +5 (Diplôme d'Ingénieur en Génie Civil / BTP)",
        "salary": "🇫🇷 France : 2 900 - 5 500 € net/mois (~40 000 - 80 000 € brut/an avec véhicule de fonction, Source : L'Étudiant) • 🇸🇳 Sénégal : 600 000 - 2 200 000 FCFA / mois (Grands chantiers autoroutiers, Eiffage Sénégal, CSE, Sogea-Satom)",
        "simpleDefinition": "L'ingénieur dans le BTP pilote les aspects techniques, organisationnels, financiers et humains de la réalisation d'un grand ouvrage (pont, hôpital, tour, stade) depuis le démarrage du terrassement jusqu'à la livraison finale.",
        "shortDescription": "Cadre technique d'élite répertorié par L'Étudiant, il transforme les plans abstraits des architectes en réalités physiques pérennes tout en respectant délais, coûts et sécurité.",
        "longDescription": "Comme décrit dans les analyses de carrières de L'Étudiant, l'ingénieur dans le BTP peut exercer sur les chantiers (ingénieur travaux) ou dans les bureaux d'études techniques. Il coordonne les chefs de chantier, négocie avec les sous-traitants, résout les imprévus géologiques ou techniques (présence d'eau, fissures, retards de livraisons) et s'assure du strict respect des règles d'hygiène et de sécurité. Doté d'une double compétence scientifique et managériale, il gère des budgets de plusieurs millions d'euros.",
        "mainObjective": "Assurer la construction d'ouvrages complexes dans le respect intransigeant des règles de l'art, de la rentabilité financière et des normes de sécurité.",
        "companyRole": "Leader opérationnel et garant de la performance technique et économique du chantier.",
        "workEnvironment": [
            "🏗️ Chantiers de grande envergure en extérieur avec bases-vies modulaires",
            "🏢 Réunions de coordination avec maîtres d'ouvrage, architectes et bureaux de contrôle",
            "🦺 Présence terrain quotidienne au contact direct des équipes opérationnelles"
        ],
        "missions": [
            "Étudier le dossier de consultation des entreprises (DCE) et définir les méthodes de construction optimales",
            "Planifier l'ordonnancement, le pilotage et la coordination (OPC) des différents corps d'état",
            "Consulter les fournisseurs, passer les commandes de matériaux (béton, acier) et négocier les prix",
            "Superviser l'application des règles de sécurité (port des EPI, protection contre les chutes)",
            "Suivre le compte d'exploitation financier du chantier et valider les situations de travaux mensuelles"
        ],
        "typicalDay": [
            {"time": "07:15", "title": "Tour de chantier matinal", "desc": "Inspection avec les chefs de chantier de l'avancement du coulage des poteaux du 4e étage et vérification des échafaudages."},
            {"time": "09:30", "title": "Réunion hebdomadaire de chantier", "desc": "Point de blocage résolu avec le bureau d'études structure concernant le passage d'une gaine technique dans une poutre principale."},
            {"time": "13:30", "title": "Négociation sous-traitance", "desc": "Discussion financière avec l'entreprise de pose de menuiseries extérieures sur le calendrier de pose."},
            {"time": "16:00", "title": "Actualisation du planning prévisionnel", "desc": "Recalcul du chemin critique sur MS Project pour absorber une journée d'intempérie sans impacter la date de livraison."}
        ],
        "skills": {
            "technical": [
                "Résistance des matériaux (RDM), géotechnique et dynamique des structures",
                "Gestion contractuelle, droit de la construction et marchés publics/privés",
                "Planification de projet complexe (méthodes du chemin critique, diagramme de Gantt)",
                "Contrôle budgétaire de chantier et analyse des écarts de marge"
            ],
            "human": [
                "Leadership naturel et aptitude au commandement d'équipes hétérogènes",
                "Sang-froid et réactivité face aux aléas de chantier imprévus",
                "Sens de la négociation et fermeté bienveillante"
            ],
            "tools": [
                "Logiciels de planification : MS Project, Primavera P6",
                "Logiciels de gestion de chantier et levée de réserves (Finalcad, PlanGrid)",
                "Visionneuses BIM (Revit Viewer, Navisworks)",
                "Outils de contrôle béton (scléromètre, carotteuse)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Classes Préparatoires / BUT (Bac +2/+3)", "title": "CPGE Math-Physique ou BUT Génie Civil Construction Durable", "desc": "Acquisition des sciences de l'ingénieur, mécanique et mathématiques."},
                {"step": "Diplôme d'Ingénieur (Bac +5)", "title": "Diplôme d'Ingénieur en BTP / Génie Civil (ESTP, INSA, Polytech)", "desc": "Formation d'excellence accréditée par la CTI combinant ingénierie technique et management de chantier."},
                {"step": "Mastère Spécialisé (Bac +6)", "title": "Mastère Spécialisé Management de Projet BTP / BIM", "desc": "Spécialisation pour encadrer des méga-projets d'infrastructures internationales."}
            ],
            "schools": [
                {"name": "ESTP Paris (École Spéciale des Travaux Publics) — France", "country": "France", "scope": "France"},
                {"name": "INSA (Lyon, Strasbourg, Toulouse) / Polytech — France", "country": "France", "scope": "France"},
                {"name": "École Polytechnique de Thiès (EPT) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) / Génie Civil — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Habilitation coordination sécurité chantier (CSPS)", "Certification PMP (Project Management Professional)", "Habilitation travaux à proximité des réseaux (AIPR)"],
            "schoolSubjects": ["Mécanique des structures", "Topographie et terrassement", "Béton armé et précontraint", "Management et gestion d'entreprise"]
        },
        "career": {
            "sectors": ["Majors du BTP (Bouygues Construction, Vinci, Eiffage, NGE)", "Grandes entreprises régionales de construction et de VRD", "Bureaux d'ingénierie et d'assistance à maîtrise d'ouvrage (Egis, Setec, Artelia)"],
            "employerTypes": ["Entreprises générales de bâtiment", "Maîtres d'œuvre d'infrastructures", "Grands groupes d'ingénierie"],
            "evolution": "Ingénieur travaux débutant ➔ Conducteur de travaux principal ➔ Directeur de travaux ➔ Directeur d'agence régionale BTP",
            "pros": "Métier d'action où l'on voit concrètement le résultat de son travail chaque jour, responsabilités précoces, perspectives d'évolution rapides.",
            "cons": "Horaires matinaux, charge de travail intense lors des phases de livraison, météo parfois rude."
        },
        "gettingStarted": {
            "beginnerProject": "Visiter un chantier ouvert au public et identifier le rôle des différentes engins et corps de métier.",
            "intermediateProject": "Construire un planning de chantier fictif sous Excel avec l'ordre logique des étapes (fondations, élévations, toiture).",
            "advancedProject": "Calculer le dimensionnement d'une poutre en béton armé sous une charge uniforme de 20 kN/m.",
            "portfolioIdeas": ["Rapport de stage de conduite de travaux sur chantier", "Simulation de phasage d'un projet de bâtiment collectif"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "Des drones scannent quotidiennement le chantier pour comparer le nuage de points au modèle BIM 3D et alerter en cas de retard ou d'erreur d'implantation.",
            "automatedTasks": ["Détection automatique d'écarts entre plans et réalité", "Optimisation algorithmique des rotations de camions toupies"],
            "emergingSkills": ["Supervision des outils d'analyse de progression de chantier par intelligence artificielle"],
            "humanEdge": "Le management des équipes d'hommes et de femmes sur le terrain et la négociation humaine en cas de litige."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les ingénieurs BTP sont au cœur de la modernisation nationale : construction de la ligne du TER Dakar-AIBD, du Bus Rapid Transit (BRT), du pont à péage de Foundiougne, de l'autoroute Ila Touba et des infrastructures de la ville nouvelle de Diamniadio.",
            "localSectors": ["Grands groupes de BTP (Eiffage Sénégal, CSE - Compagnie Sahélienne d'Entreprises, Sogea-Satom)", "AGEROUTE (Agence des Travaux et de Gestion des Routes)", "Ministère des Infrastructures et des Transports"],
            "remoteWork": "Non compatible (présence physique quotidienne sur le terrain requise).",
            "entrepreneurship": "Création d'une entreprise générale de BTP spécialisée dans les ouvrages d'art et le génie civil au Sénégal et dans la sous-région."
        },
        "relatedJobSlugs": ["ingenieur-genie-civil", "conducteur-de-travaux", "chef-de-chantier", "ingenieur-structures"],
        "connectedFamilies": ["industrie-mecanique", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier Ingénieur dans le BTP — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/ingenieur-dans-le-btp.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "FNTP — Fédération Nationale des Travaux Publics", "url": "https://www.fntp.fr/", "source": "FNTP"}
        ],
        "sources": ["L'Étudiant", "FNTP", "FFB"],
        "interests": ["construire-fabriquer", "coordonner-gerer", "technique-outils"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Le secteur du BTP est l'un des premiers employeurs d'ingénieurs au monde, avec plus de 80% des jeunes diplômés signant un contrat à durée indéterminée avant même la fin de leurs études.",
            "pourquoi": "La complexité technique croissante des ouvrages et les exigences écologiques rendent ces profils indispensables.",
            "a_retenir": "Le bâtisseur qui coordonne l'intelligence collective sur les chantiers."
        }
    },

    # -----------------------------------------------------------------------
    # 4. INGÉNIEUR EN GÉNIE CIVIL
    # -----------------------------------------------------------------------
    {
        "id": "ingenieur-genie-civil",
        "slug": "ingenieur-genie-civil",
        "title": "Ingénieur en Génie Civil & BTP",
        "aliases": ["Ingénieur calcul génie civil", "Ingénieur ouvrages d'art", "Ingénieur concepteur de structures"],
        "icon": "🌉",
        "image": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Ingénierie & Bureaux d'Études",
        "domainId": "ingenierie-bureaux-etudes",
        "subdomain": "Génie civil, Calculs & Ouvrages d'art",
        "sectors": ["BTP", "Génie Civil", "Infrastructures"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "Bac +5 (Diplôme d'Ingénieur Génie Civil)",
        "salary": "🇫🇷 France : 3 000 - 5 600 € net/mois (~42 000 - 82 000 € brut/an, Source : L'Étudiant / APEC) • 🇸🇳 Sénégal : 600 000 - 2 300 000 FCFA / mois (Bureaux d'études structures, grands projets de ponts et routes)",
        "simpleDefinition": "L'ingénieur en génie civil conçoit, dimensionne et calcule la résistance des grandes structures (ponts, viaducs, barrages, tours de grande hauteur, tunnels) pour s'assurer qu'elles résistent aux charges, aux séismes, au vent et à l'usure du temps.",
        "shortDescription": "Scientifique de la matière et des efforts répertorié par L'Étudiant, il calcule les armatures, le béton et l'acier pour garantir la sécurité absolue des édifices.",
        "longDescription": "Comme mis en avant dans les fiches formations et métiers de L'Étudiant, l'ingénieur en génie civil intervient en amont et tout au long de la construction. À partir des croquis architecturaux, il effectue la descente de charges, modélise le comportement mécanique des matériaux (béton armé, béton précontraint, charpente métallique) et dimensionne les fondations profondes en fonction de la nature des sols révélée par les études géotechniques. Il édite les plans de ferraillage précis indispensables aux ouvriers de chantier.",
        "mainObjective": "Calculer et optimiser la structure porteuse des ouvrages pour assurer une stabilité et une durabilité centenaire en toute sécurité.",
        "companyRole": "Garant de l'intégrité physique et de la sécurité structurelle des bâtiments et infrastructures.",
        "workEnvironment": [
            "📐 Bureaux d'études techniques (BET) et sociétés d'ingénierie conseil",
            "💻 Simulateurs informatiques d'éléments finis et de dynamique des structures",
            "🏗️ Inspections techniques sur chantier lors des phases critiques de coulage et de précontrainte"
        ],
        "missions": [
            "Modéliser en 3D les structures sous logiciels de calcul par éléments finis (Robot, Advance Design)",
            "Calculer les sollicitations mécaniques (flexion, cisaillement, torsion) selon les Eurocodes",
            "Dimensionner les éléments porteurs (piliers, poutres, dalles, culées de pont) et leurs armatures en acier",
            "Analyser les rapports géotechniques pour choisir le type de fondations (semelles superficielles ou pieux forés)",
            "Rédiger les notes de calcul soumises à la validation intransigeante des bureaux de contrôle (Veritas, Socotec, Apave)"
        ],
        "typicalDay": [
            {"time": "08:45", "title": "Modélisation éléments finis", "desc": "Calcul de la résistance sismique d'un pont haubané sous séisme de magnitude 6,5 sur le logiciel Robot Structural Analysis."},
            {"time": "11:00", "title": "Validation d'une note de calcul", "desc": "Échange technique avec l'ingénieur du bureau de contrôle pour justifier le taux d'armatures d'un radier de sous-sol."},
            {"time": "14:15", "title": "Visite de ferraillage sur chantier", "desc": "Vérification in situ du diamètre et de l'espacement des barres d'acier haute adhérence avant autorisation de coulage du béton."},
            {"time": "16:45", "title": "Optimisation matière bas-carbone", "desc": "Comparaison de variantes de béton bas-carbone géopolymère pour réduire l'empreinte carbone des fondations de 30%."}
        ],
        "skills": {
            "technical": [
                "Mécanique des milieux continus, résistance des matériaux et élasticité",
                "Réglementation Eurocodes (Eurocode 0, 1, 2 béton, 3 acier, 7 géotechnique, 8 séismes)",
                "Calcul de structures par éléments finis (Robot, Scia Engineer, Advance Design)",
                "Géotechnique et mécanique des sols appliquée aux fondations"
            ],
            "human": [
                "Rigueur mathématique absolue et sens des responsabilités vitales",
                "Capacité d'analyse critique des résultats fournis par les logiciels",
                "Aisance dans le travail collaboratif avec architectes et chefs de chantier"
            ],
            "tools": [
                "Robot Structural Analysis / Advance Design / SCIA Engineer",
                "AutoCAD Structural Detailing / Tekla Structures",
                "Outils de calcul géotechnique (Talren, Foxta)",
                "Tableurs de calculs certifiés Eurocodes"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "CPGE / Licence (Bac +3)", "title": "Classes Préparatoires aux Grandes Écoles ou Licence de Mécanique", "desc": "Maîtrise fondamentale de l'algèbre linéaire, du calcul différentiel et de la physique mécanique."},
                {"step": "Diplôme d'Ingénieur (Bac +5)", "title": "Ingénieur en Génie Civil (Ponts ParisTech, ESTP, INSA, Polytech)", "desc": "Cursus d'excellence en calcul de structures, ouvrages d'art et mécanique des sols."},
                {"step": "Doctorat / Spécialisation (Bac +8)", "title": "Doctorat en Génie Civil / Calcul avancé des structures", "desc": "Recherche appliquée sur les bétons fibrés à ultra-hautes performances ou la sismicité."}
            ],
            "schools": [
                {"name": "École des Ponts ParisTech / ESTP Paris — France", "country": "France", "scope": "France"},
                {"name": "INSA Lyon / Polytech Lille / Centrale Lille — France", "country": "France", "scope": "France"},
                {"name": "École Polytechnique de Thiès (EPT) / Génie Civil — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Agrément d'ingénieur calcul de structures", "Certification Eurocodes niveau expert", "Habilitation d'accès aux ouvrages d'art"],
            "schoolSubjects": ["Calcul tensoriel", "Dynamique des structures", "Béton précontraint", "Mécanique de la rupture"]
        },
        "career": {
            "sectors": ["Bureaux d'études techniques indépendants", "Grands groupes d'ingénierie et de conseil (Egis, Setec, Systra, Artelia)", "Bureaux de contrôle technique (Bureau Veritas, Socotec, Dekra)", "Services techniques des ministères et collectivités"],
            "employerTypes": ["Sociétés d'ingénierie d'infrastructures", "Bureaux d'études de constructeurs", "Organismes de contrôle"],
            "evolution": "Ingénieur calcul junior ➔ Ingénieur d'études senior ➔ Chef de groupe calcul de structures ➔ Directeur technique bureau d'études",
            "pros": "Excellence intellectuelle de haut niveau, impact direct sur la sécurité publique, reconnaissance internationale.",
            "cons": "Responsabilité juridique et pénale lourde en cas d'effondrement, travail sur écran prolongé en phase d'études."
        },
        "gettingStarted": {
            "beginnerProject": "Observer les différents types de ponts (pont en arc, pont à poutres, pont suspendu) et comprendre comment circulent les forces.",
            "intermediateProject": "Modéliser un treillis métallique simple (type pont Eiffel) sous un logiciel de calcul gratuit comme RDM7.",
            "advancedProject": "Calculer la flèche maximale d'une poutre en béton armé de 8 mètres soumise à son poids propre et à une charge d'exploitation.",
            "portfolioIdeas": ["Note de calcul de structure rédigée selon les Eurocodes", "Maquette 3D d'un viaduc ferroviaire"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA générative de topologies (Generative Design) conçoit des formes d'ossatures organiques ultra-résistantes utilisant 25% de béton et d'acier en moins.",
            "automatedTasks": ["Optimisation automatique des sections de poutres", "Vérification automatisée des critères de flèche et de fissuration"],
            "emergingSkills": ["Paramétrage d'algorithmes d'optimisation topologique sous Dynamo / Grasshopper"],
            "humanEdge": "La validation finale de la robustesse globale et la responsabilité éthique face aux vies humaines abritées."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les ingénieurs en génie civil formés à l'EPT Thiès et à l'ESP Dakar ont conçu et supervisé les plus grands chefs-d'œuvre du pays : le Monument de la Renaissance Africaine, le pont Nelson Mandela de Foundiougne sur le fleuve Saloum, le viaduc du BRT et les nouveaux ponts de franchissement du fleuve Sénégal à Rosso.",
            "localSectors": ["AGEROUTE (Agence des Travaux et de Gestion des Routes)", "Bureaux d'études sénégalais réputés (CIRA, AIC, Gauff)", "Direction générale des grands travaux de l'État"],
            "remoteWork": "Favorable en phase d'études (calculs et modélisation en télétravail / visites de contrôle sur le terrain).",
            "entrepreneurship": "Création d'un bureau d'études techniques d'ingénierie et de calcul de structures pour l'Afrique de l'Ouest."
        },
        "relatedJobSlugs": ["ingenieur-structures", "ingenieur-dans-le-btp", "dessinateur-projeteur-en-batiment", "conducteur-de-travaux"],
        "connectedFamilies": ["industrie-mecanique", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche formation et métier Génie Civil — L'Étudiant", "url": "https://www.letudiant.fr/etudes/secteurs/btp.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "Syntec Ingénierie — Fédération des professionnels de l'ingénierie", "url": "https://www.syntec-ingenierie.fr/", "source": "Syntec"}
        ],
        "sources": ["L'Étudiant", "Syntec Ingénierie", "EPT Thiès"],
        "interests": ["donnees-chiffres", "construire-fabriquer", "technique-outils"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Le pont le plus long du monde (viaduc de Danyang-Kunshan) mesure 164,8 kilomètres et a mobilisé plus de 10 000 ingénieurs en génie civil et ouvriers pendant quatre ans.",
            "pourquoi": "Chaque millimètre d'acier et de béton doit être calculé pour résister aux typhons, séismes et variations de température.",
            "a_retenir": "Le cerveau scientifique qui s'assure que les ponts, les barrages et les tours ne s'effondrent jamais."
        }
    },

    # -----------------------------------------------------------------------
    # 5. INGÉNIEUR STRUCTURES
    # -----------------------------------------------------------------------
    {
        "id": "ingenieur-structures",
        "slug": "ingenieur-structures",
        "title": "Ingénieur Structures",
        "aliases": ["Ingénieur calcul de structures métalliques/béton/bois", "Ingénieur d'études charpente et ossature", "Spécialiste stabilité des ouvrages"],
        "icon": "📐",
        "image": "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Ingénierie & Bureaux d'Études",
        "domainId": "ingenierie-bureaux-etudes",
        "subdomain": "Calcul de structures & Stabilité",
        "sectors": ["BTP", "Ingénierie", "Bureaux d'Études"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "Bac +5 (Diplôme d'Ingénieur spécialisé en Génie Civil / Mécanique des structures)",
        "salary": "🇫🇷 France : 3 000 - 5 400 € net/mois (~42 000 - 78 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 550 000 - 2 000 000 FCFA / mois (Bureaux d'études BTP, charpentiers métalliques et bétonneurs)",
        "simpleDefinition": "L'ingénieur structures est le spécialiste pointu qui calcule l'ossature portrice des bâtiments (poutres, poteaux, planchers, dômes) en acier, béton, bois ou verre pour garantir que l'édifice supporte son propre poids et les forces extérieures comme le vent ou la neige.",
        "shortDescription": "Fiche métier clé citée par L'Étudiant, il collabore étroitement avec l'architecte pour rendre physiquement possibles les audaces esthétiques les plus spectaculaires.",
        "longDescription": "Comme l'explique la fiche descriptive de L'Étudiant, l'ingénieur structures donne corps aux intentions des architectes en résolvant l'équation de la stabilité. Qu'il s'agisse d'une verrière en porte-à-faux, d'un stade avec toiture rétractable ou d'un gratte-ciel élancé, il choisit les matériaux les plus appropriés (acier haute résistance, béton précontraint, lamellé-collé bois), définit les sections précises des profilés et vérifie l'assemblage des nœuds de connexion. Son travail est indispensable pour prévenir tout risque d'affaissement ou de fissuration.",
        "mainObjective": "Rendre stables, constructibles et sécurisées les géométries architecturales les plus audacieuses au meilleur coût de matière.",
        "companyRole": "Garant mathématique de l'équilibre et de la stabilité de l'ossature du bâtiment.",
        "workEnvironment": [
            "🏢 Bureaux d'études techniques spécialisés en charpente ou structures",
            "💻 Simulateurs tridimensionnels de calcul de déformations mécaniques",
            "🏗️ Visites d'usines de préfabrication et de chantiers de montage d'ossatures"
        ],
        "missions": [
            "Analyser les plans d'architecture pour identifier les points d'appui critiques et les lignes de force",
            "Modéliser l'ossature complète en éléments barres et coques sous logiciels spécialisés",
            "Simuler les cas de charges réglementaires (poids mort, surcharges d'exploitation, neige, vent dynamique, séismes)",
            "Concevoir et dimensionner les assemblages (boulons haute résistance, cordons de soudure, platines d'ancrage)",
            "Coordonner le travail des projeteurs pour l'édition des plans de calpinage et de fabrication d'atelier"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Calcul de portance d'un porte-à-faux", "desc": "Vérification des contraintes de von Mises sur un porte-à-faux de 12 mètres d'une médiathèque sous Advance Design."},
            {"time": "11:00", "title": "Revue d'assemblage métallique", "desc": "Calcul du nombre de boulons précontraints nécessaires pour assembler le jarret d'un portique métallique d'un hall logistique."},
            {"time": "14:30", "title": "Atelier de conception avec l'architecte", "desc": "Proposition d'une solution alternative de tirants métalliques discrets pour supprimer un poteau encombrant dans le hall."},
            {"time": "16:45", "title": "Inspection en usine de préfabrication", "desc": "Vérification de la qualité de fabrication de poutres en béton précontraint par pré-tension avant livraison sur chantier."}
        ],
        "skills": {
            "technical": [
                "Résistance des matériaux avancée et théorie de l'élasticité et de la plasticité",
                "Calcul des assemblages métalliques (Eurocode 3) et structures bois (Eurocode 5)",
                "Dynamique des structures et modélisation aux éléments finis",
                "Connaissance approfondie de la préfabrication industrielle"
            ],
            "human": [
                "Créativité technique pour trouver des solutions élégantes et invisibles",
                "Sens aigu du détail et rigueur dans les vérifications de sécurité",
                "Esprit d'équipe pour dialoguer avec les architectes et fabricants"
            ],
            "tools": [
                "Advance Design / SCIA Engineer / Robot Structural Analysis",
                "Tekla Structures (BIM charpente métallique et béton préfabriqué)",
                "Outils de calcul d'assemblages (IDEA StatiCa)",
                "Logiciels de calcul sismique"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Prépa / Licence (Bac +3)", "title": "CPGE Scientifique ou Licence de Génie Mécanique / Civil", "desc": "Apprentissage des lois fondamentales de la mécanique newtonienne et de la résistance des matériaux."},
                {"step": "Diplôme d'Ingénieur (Bac +5)", "title": "Ingénieur en Génie Civil / Calcul de Structures", "desc": "Spécialisation dans les Eurocodes, la modélisation numérique et la technologie des structures."},
                {"step": "Double Cursus Architecte-Ingénieur", "title": "Diplôme conjoint Architecte-Ingénieur (ENSA + École d'Ingénieurs)", "desc": "Profil d'élite extrêmement recherché maîtrisant à la fois le geste esthétique et le calcul de résistance."}
            ],
            "schools": [
                {"name": "INSA Strasbourg / ESTP Paris / CentraleSupélec — France", "country": "France", "scope": "France"},
                {"name": "École des Ponts ParisTech / CHEBAP (Centre des Hautes Études du Béton Armé et Précontraint) — France", "country": "France", "scope": "France"},
                {"name": "École Polytechnique de Thiès (EPT) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification IDEA StatiCa Steel Connection Specialist", "Certification Tekla Structures Professional", "Agrément technique de concepteur parasismique"],
            "schoolSubjects": ["Stabilité élastique (flambement, déversement, voilement)", "Béton précontraint", "Charpente métallique", "Génie parasismique"]
        },
        "career": {
            "sectors": ["Bureaux d'études spécialisés en structures", "Constructeurs métalliques et charpentiers industriels", "Entreprises générales de BTP", "Bureaux de contrôle technique et d'expertise judiciaire"],
            "employerTypes": ["Bureaux d'études d'ingénierie", "Entreprises de charpente métallique et bois", "Constructeurs de façades complexes"],
            "evolution": "Ingénieur structure débutant ➔ Chef de projet structure ➔ Directeur technique de bureau d'études ➔ Expert judiciaire en sinistres du bâtiment",
            "pros": "Défi intellectuel permanent, collaboration étroite avec de grands architectes mondiaux, rareté des compétences.",
            "cons": "Échéances d'études courtes, responsabilité directe sur l'absence de fléchissement ou d'effondrement."
        },
        "gettingStarted": {
            "beginnerProject": "Construire un pont en spaghettis et tester le poids maximal qu'il peut porter avant rupture.",
            "intermediateProject": "Modéliser un portique de hangar sur un logiciel 2D gratuit et identifier la zone où le moment fléchissant est maximal.",
            "advancedProject": "Dimensionner un profilé IPE en acier pour supporter une toiture terrasse soumise à 100 kg/m² de neige.",
            "portfolioIdeas": ["Dossier de calcul de structure d'un auvent en porte-à-faux", "Modèle Tekla d'une charpente métallique complète"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA calcule et teste automatiquement des milliers de configurations de treillis et d'épaisseurs pour trouver la structure la plus légère possible.",
            "automatedTasks": ["Optimisation du poids d'acier au mètre carré", "Détection automatique des collisions d'armatures dans les nœuds de ferraillage"],
            "emergingSkills": ["Utilisation de scripts d'optimisation paramétrique pour alléger les structures"],
            "humanEdge": "L'œil d'ingénieur qui comprend le comportement physique réel de la matière au-delà des résultats informatiques."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la conception des structures doit intégrer des contraintes spécifiques : l'air marin corrosif et humide de la presqu'île de Dakar qui accélère la rouille des armatures en acier, ainsi que les dilatations thermiques causées par les amplitudes de chaleur au soleil.",
            "localSectors": ["Bureaux d'études structures de Dakar", "Industries de charpente métallique (SENAC, SOCOCIM, Eiffage Métal)", "Grands projets de hangars industriels et d'aérogares"],
            "remoteWork": "Très favorable (stations de travail puissantes avec travail en bureau d'études ou à distance).",
            "entrepreneurship": "Création d'un cabinet d'ingénierie structurelle spécialisé dans le calcul aux Eurocodes pour la sous-région ouest-africaine."
        },
        "relatedJobSlugs": ["ingenieur-genie-civil", "dessinateur-projeteur-en-batiment", "charpentier", "architecte"],
        "connectedFamilies": ["industrie-mecanique", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier Ingénieur structures — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/ingenieur-structures.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "APK — Association pour la Promotion de la Construction Métallique", "url": "https://apk-asso.fr/", "source": "APK"}
        ],
        "sources": ["L'Étudiant", "APK", "CHEBAP"],
        "interests": ["donnees-chiffres", "technique-outils", "construire-fabriquer"],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "La tour Eiffel a été entièrement conçue par des ingénieurs structures qui ont calculé manuellement plus de 18 000 pièces de fer forgé et 2,5 millions de rivets, sans aucun ordinateur !",
            "pourquoi": "Grâce aux formules mathématiques de la résistance des matériaux développées au XIXe siècle, qui restent à la base de nos logiciels actuels.",
            "a_retenir": "L'ingénieur de l'ossature qui porte les rêves des architectes."
        }
    },

    # -----------------------------------------------------------------------
    # 6. DESSINATEUR-PROJETEUR EN BÂTIMENT
    # -----------------------------------------------------------------------
    {
        "id": "dessinateur-projeteur-en-batiment",
        "slug": "dessinateur-projeteur-en-batiment",
        "title": "Dessinateur-Projeteur en Bâtiment",
        "aliases": ["Projeteur BIM / CAO-DAO", "Technicien d'études en dessin du bâtiment", "Modeleur projeteur structure et fluides"],
        "icon": "📐",
        "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Ingénierie & Bureaux d'Études",
        "domainId": "ingenierie-bureaux-etudes",
        "subdomain": "Dessin technique & Modélisation CAO/DAO",
        "sectors": ["BTP", "Ingénierie", "Dessin"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "Bac +2 (BTS Bâtiment, BTS FED) à Bac +3 (Licence Pro Modélisation BIM)",
        "salary": "🇫🇷 France : 2 000 - 3 400 € net/mois (~28 000 - 48 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 300 000 - 900 000 FCFA / mois (Bureaux d'études, entreprises de construction de Dakar)",
        "simpleDefinition": "Le dessinateur-projeteur traduit les calculs des ingénieurs et les esquisses des architectes en plans d'exécution ultra-détaillés et maquettes numériques 3D que les ouvriers et chefs de chantier utilisent pour construire l'ouvrage.",
        "shortDescription": "Technicien incontournable répertorié par L'Étudiant, il conçoit les plans de ferraillage, de coffrage et d'implantation au millimètre près sur écran d'ordinateur.",
        "longDescription": "Comme décrit dans la fiche métier de L'Étudiant, le dessinateur-projeteur ne se contente pas de tracer des lignes : il est force de proposition technique. Maîtrisant les règles de l'art constructif, il vérifie que les tuyauteries ne traversent pas les poutres porteuses, calcule les dimensions d'assemblage et intègre toutes les gaines techniques dans la maquette numérique. Ses plans d'exécution (plans de coffrage, plans de ferraillage, coupes de façades) sont le document contractuel de référence sur le chantier.",
        "mainObjective": "Produire des plans d'exécution et maquettes 3D rigoureusement exploitables, sans erreurs de cotes ni conflits géométriques.",
        "companyRole": "Pont graphique et technique indispensable entre le bureau de calcul et les équipes de réalisation sur le terrain.",
        "workEnvironment": [
            "🖥️ Bureaux d'études techniques, agences d'architecture ou entreprises de BTP",
            "💻 Double écran avec logiciels de CAO/DAO de pointe (AutoCAD, Revit, Allplan)",
            "🏗️ Visites ponctuelles sur chantier pour confronter les plans à la réalité du terrain"
        ],
        "missions": [
            "Réaliser les plans de coffrage et de ferraillage des éléments en béton armé à partir des notes de calculs des ingénieurs",
            "Modéliser les réseaux techniques (électricité, plomberie, CVC) dans la maquette numérique BIM",
            "Détecter et résoudre les conflits d'encombrement (clash detection) entre structure et fluides",
            "Établir les nomenclatures de matériaux et les bordereaux de ferraillage (quantités de barres d'acier)",
            "Mettre à jour les plans au fur et à mesure des modifications et éditer les Dossiers d'Ouvrages Exécutés (DOE)"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Édition de plans de coffrage", "desc": "Dessin des réservations de gaines techniques sur le plan de plancher du 2e étage sous Revit."},
            {"time": "10:45", "title": "Détection d'interférences BIM", "desc": "Revue sous Navisworks : détection d'un conduit de désenfumage traversant une poutre maîtresse et proposition d'un dévoiement."},
            {"time": "14:00", "title": "Bordereau de ferraillage", "desc": "Génération automatique de la liste des aciers coupés et façonnés pour la commande auprès de l'usine d'armatures."},
            {"time": "16:30", "title": "Échange avec le chef de chantier", "desc": "Explication au téléphone d'un détail de coupe complexe d'étanchéité d'acrotère avant coulage le lendemain."}
        ],
        "skills": {
            "technical": [
                "Dessin technique du bâtiment, conventions graphiques et cotation fonctionnelle",
                "Technologie de construction (béton armé, charpente métallique, second œuvre)",
                "Modélisation CAO/DAO 2D et 3D (AutoCAD, Autodesk Revit, Allplan, Tekla)",
                "Démarche collaborative BIM et extraction de quantitatifs"
            ],
            "human": [
                "Rigueur millimétrique, précision et sens aigu de l'observation",
                "Bonne visualisation spatiale et sens pratique de la constructibilité",
                "Patience et aisance dans la communication technique"
            ],
            "tools": [
                "Autodesk Revit / AutoCAD / Allplan",
                "Navisworks (détection de clashs)",
                "Logiciels d'armatures (Cadwork, Armacad)",
                "Traceurs grand format et visionneuses de maquettes numériques"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Bac Pro / STI2D", "title": "Bac Pro Technicien d'Études du Bâtiment ou Bac STI2D", "desc": "Acquisition des bases du dessin d'architecture et de la lecture de plans."},
                {"step": "BTS / BUT (Bac +2/+3)", "title": "BTS Bâtiment, BTS Travaux Publics ou BUT Génie Civil", "desc": "Le diplôme de référence pour devenir dessinateur-projeteur autonome en bureau d'études."},
                {"step": "Licence Pro (Bac +3)", "title": "Licence Pro Métiers du BTP : Modélisation des Bâtiments et BIM", "desc": "Spécialisation dans les maquettes numériques communicantes et la coordination BIM."}
            ],
            "schools": [
                {"name": "Lycées techniques préparant le BTS Bâtiment et BTS TP — France", "country": "France", "scope": "France"},
                {"name": "IUT Génie Civil — Construction Durable (Bordeaux, Cergy, Lyon) — France", "country": "France", "scope": "France"},
                {"name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) / Génie Civil — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification Professionnelle Autodesk Certified Professional (Revit / AutoCAD)", "Certificat de Projeteur BIM", "Habilitation AIPR Concepteur"],
            "schoolSubjects": ["Dessin assisté par ordinateur", "Résistance des matériaux appliquée", "Technologie du bâtiment", "Métrés et études de prix"]
        },
        "career": {
            "sectors": ["Bureaux d'études techniques en bâtiment et génie civil", "Agences d'architecture et d'urbanisme", "Grandes entreprises générales de construction", "Fabricants de composants préfabriqués en béton ou métal"],
            "employerTypes": ["Bureaux d'études structures", "Entreprises générales BTP", "Cabinets d'architectes"],
            "evolution": "Dessinateur débutant ➔ Dessinateur-projeteur confirmé ➔ Projeteur coordinateur BIM ➔ Responsable bureau d'études dessin",
            "pros": "Métier très recherché avec forte sécurité de l'emploi, rôle pivot dans les projets, évolution naturelle vers le BIM Management.",
            "cons": "Travail prolongé assis devant des écrans, stress lors des remises urgentes de dossiers d'appels d'offres."
        },
        "gettingStarted": {
            "beginnerProject": "S'entraîner à lire un plan d'architecte et repérer les cotations, les épaisseurs de murs et le sens d'ouverture des portes.",
            "intermediateProject": "Dessiner le plan 2D côté d'une maison individuelle de plain-pied sur AutoCAD ou un logiciel libre.",
            "advancedProject": "Modéliser un bâtiment R+2 complet en 3D sous Revit avec dalles, poteaux et escaliers paramétriques.",
            "portfolioIdeas": ["Dossier de plans d'exécution de coffrage et ferraillage", "Maquette numérique 3D exportée au format IFC"]
        },
        "aiImpact": {
            "level": "Révolutionnaire",
            "summary": "L'IA génère automatiquement des plans de ferraillage optimisés et reporte les modifications en temps réel sur l'ensemble des coupes et façades.",
            "automatedTasks": ["Génération automatique des cotes et annotations de plans", "Conversion automatique de croquis papier en maquette 3D"],
            "emergingSkills": ["Supervision des outils d'automatisation de production de plans par IA"],
            "humanEdge": "La compréhension de la réalité du terrain et des contraintes concrètes des coffreurs lors du coulage du béton."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la transition accélérée vers le numérique et le BIM dans les bureaux d'études de Dakar entraîne une forte pénurie de dessinateurs-projeteurs qualifiés sur Revit, indispensables pour modéliser les grands immeubles de bureaux et les résidences modernes de la capitale.",
            "localSectors": ["Bureaux d'ingénierie et d'architecture de Dakar", "Entreprises de BTP (CSE, Eiffage Sénégal, Consortium d'Entreprises)", "Cabinet de modélisation BIM"],
            "remoteWork": "Très favorable (modélisation CAO/DAO sur station de travail facilement réalisable en télétravail).",
            "entrepreneurship": "Création d'un studio indépendant de dessin technique et de modélisation de maquettes numériques BIM en sous-traitance."
        },
        "relatedJobSlugs": ["bim-manager", "ingenieur-structures", "ingenieur-genie-civil", "architecte"],
        "connectedFamilies": ["numerique-ia", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier Dessinateur-projeteur — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/dessinateur-projeteur-en-batiment.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "Autodesk France — Ressources CAO et BIM", "url": "https://www.autodesk.fr/", "source": "Autodesk"}
        ],
        "sources": ["L'Étudiant", "FFB", "ESP Dakar"],
        "interests": ["technique-outils", "donnees-chiffres", "concevoir-creer"],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Dans le bâtiment moderne, le passage des plans papier en 2D à la maquette numérique intelligente (BIM) permet de réduire jusqu'à 80% des erreurs de chantier causées par des canalisations mal positionnées.",
            "pourquoi": "Le logiciel alerte immédiatement le projeteur en rouge dès qu'un tuyau entre en collision avec une poutre en béton.",
            "a_retenir": "Le cartographe du bâtiment qui traduit les calculs en plans d'action concrets."
        }
    },

    # -----------------------------------------------------------------------
    # 7. ACOUSTICIEN DU BÂTIMENT
    # -----------------------------------------------------------------------
    {
        "id": "acousticien-batiment",
        "slug": "acousticien-batiment",
        "title": "Acousticien du Bâtiment & Environnement",
        "aliases": ["Ingénieur acousticien", "Consultant en acoustique architecturale", "Technicien mesures de bruit"],
        "icon": "🔊",
        "image": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Ingénierie & Bureaux d'Études",
        "domainId": "ingenierie-bureaux-etudes",
        "subdomain": "Ingénierie acoustique & Confort sonore",
        "sectors": ["BTP", "Ingénierie", "Environnement"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "Bac +3 (Licence Pro Acoustique) à Bac +5 (Master ou Ingénieur Acoustique)",
        "salary": "🇫🇷 France : 2 500 - 4 600 € net/mois (~35 000 - 68 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 450 000 - 1 400 000 FCFA / mois (Bureaux d'études environnement, insonorisation de salles de spectacles et data centers)",
        "simpleDefinition": "L'acousticien étudie la propagation du son et des vibrations pour concevoir des salles de spectacle à l'acoustique parfaite, isoler les logements contre les bruits extérieurs (avions, trains, trafic) et protéger les salariés du vacarme des machines industrielles.",
        "shortDescription": "Expert du son et du confort répertorié par L'Étudiant, il mesure les décibels, choisit les isolants et façonne l'ambiance sonore des édifices.",
        "longDescription": "Comme mis en avant dans la présentation des métiers du BTP de L'Étudiant, l'acousticien allie physique des ondes et ingénierie de la construction. Muni de sonomètres et de générateurs de bruit rose, il mesure les temps de réverbération dans les pièces et traque les ponts phoniques. Il prescrit aux architectes les matériaux absorbants adéquats (panneaux de laine minérale perforés, doubles vitrages asymétriques, chapes flottantes désolidarisées) pour respecter la réglementation acoustique (NRA) et concevoir des auditoriums ou des bureaux calmes.",
        "mainObjective": "Garantir un confort sonore optimal dans les espaces bâtis en réduisant les bruits d'impact, les bruits aériens et les temps d'écho.",
        "companyRole": "Garant du confort acoustique et de la conformité réglementaire contre les nuisances sonores.",
        "workEnvironment": [
            "🔬 Bureaux d'études acoustiques indépendants ou départements d'ingénierie globale",
            "🎭 Salles de concert, théâtres, studios d'enregistrement et cinémas",
            "🏢 Chantiers de logements collectifs et abords d'infrastructures routières ou aéroportuaires"
        ],
        "missions": [
            "Réaliser des campagnes de mesures acoustiques in situ à l'aide de sonomètres de précision étalonnés",
            "Modéliser la propagation sonore et la réverbération dans les volumes complexes sous simulateur 3D",
            "Définir la nature et l'épaisseur des matériaux isolants phoniques et des silencieux de ventilation",
            "Contrôler la conformité acoustique des logements neufs lors de la réception des travaux (attestation réglementaire)",
            "Élaborer des cartes de bruit environnemental pour les collectivités autour des voies ferrées et aéroports"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Campagne de mesure acoustique", "desc": "Mesure des bruits d'impact d'une chape flottante à l'aide d'une machine à chocs réglementaire dans un immeuble neuf."},
            {"time": "11:00", "title": "Modélisation sous CATT-Acoustic", "desc": "Calcul du temps de réverbération (RT60) d'une salle polyvalente de 500 places pour optimiser l'intelligibilité de la parole."},
            {"time": "14:30", "title": "Prescription de silencieux CVC", "desc": "Dimensionnement de pièges à son à baffles absorbants sur la centrale de traitement d'air d'un hôtel de luxe."},
            {"time": "16:45", "title": "Rédaction du rapport d'expertise", "desc": "Finalisation du diagnostic acoustique d'un restaurant d'entreprise pour réduire le brouhaha de midi."}
        ],
        "skills": {
            "technical": [
                "Physique ondulatoire, propagation acoustique et mécanique vibratoire",
                "Réglementation acoustique des bâtiments (NRA) et normes de bruit au travail",
                "Métrologie acoustique (sonomètres intégrateurs classe 1, analyseurs par bande d'octave)",
                "Logiciels de simulation acoustique (CATT-Acoustic, Odeon, CadnaA)"
            ],
            "human": [
                "Oreille musicale et sensibilité fine aux phénomènes sonores",
                "Rigueur scientifique dans le protocole de mesure et l'analyse de données",
                "Sens de la pédagogie pour expliquer des grandeurs logarithmiques (décibels) aux clients"
            ],
            "tools": [
                "Sonomètres de précision de classe 1 (Brüel & Kjær, Norsonic)",
                "Sources sonores dodécaédriques omnidirectionnelles et machines à chocs",
                "Logiciels de simulation (Odeon, CATT-Acoustic, CadnaA, SoundPLAN)",
                "Calibreurs acoustiques acoustiques de référence"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "BUT / Licence (Bac +3)", "title": "BUT Mesures Physiques ou Licence Pro Acoustique et Vibrations", "desc": "Apprentissage des capteurs, de l'acquisition de signaux sonores et de la métrologie."},
                {"step": "Master / Ingénieur (Bac +5)", "title": "Master Acoustique ou Diplôme d'Ingénieur en Acoustique (ENSIM, UTC)", "desc": "Formation d'excellence en aéroacoustique, acoustique des salles et traitement du signal sonore."},
                {"step": "Doctorat (Bac +8)", "title": "Doctorat en Acoustique Physique", "desc": "Recherche avancée sur les métamatériaux acoustiques absorbants."}
            ],
            "schools": [
                {"name": "ENSIM Le Mans (École Nationale Supérieure d'Ingénieurs du Mans) — France", "country": "France", "scope": "France"},
                {"name": "Université du Mans (Institut d'Acoustique) / Sorbonne Université — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) / Physique appliquée — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Université Cheikh Anta Diop (UCAD Dakar) / Département de Physique — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification d'auditeur acoustique qualifié", "Agrément ministériel pour la mesure de bruit environnemental", "Certification Brüel & Kjær Measurement Specialist"],
            "schoolSubjects": ["Physique des ondes", "Acoustique architecturale", "Traitement du signal", "Psychoacoustique"]
        },
        "career": {
            "sectors": ["Bureaux d'études spécialisés en acoustique du bâtiment", "Sociétés d'ingénierie pluridisciplinaires", "Industries aéronautiques et automobiles (insonorisation de cabine)", "Cabinets d'architecture prestigieux"],
            "employerTypes": ["Bureaux d'études acoustiques", "Cabinets d'ingénierie du bâtiment", "Organismes d'audit environnemental"],
            "evolution": "Technicien de mesure acoustique ➔ Ingénieur acousticien d'études ➔ Chef de projet acoustique architecturale ➔ Directeur d'un pôle d'ingénierie environnementale",
            "pros": "Spécialité rare et valorisée, équilibre entre mesures concrètes sur site et calculs numériques, mission directe pour la santé publique.",
            "cons": "Nécessité de réaliser des mesures de nuit ou hors heures d'ouverture pour éviter les bruits parasites."
        },
        "gettingStarted": {
            "beginnerProject": "Télécharger une application sonomètre sur smartphone et mesurer les variations de décibels entre sa chambre et une rue animée.",
            "intermediateProject": "Calculer l'affaiblissement acoustique théorique d'un mur en briques de 20 cm selon la loi de masse.",
            "advancedProject": "Modéliser la réponse impulsionnelle d'une pièce sous un logiciel libre d'acoustique et proposer des rideaux acoustiques pour corriger l'écho.",
            "portfolioIdeas": ["Rapport d'audit acoustique d'un espace de travail partagé", "Étude d'isolation phonique d'une salle de répétition musicale"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'IA sépare automatiquement les différentes sources de bruit sur un enregistrement (voix, moteurs, oiseaux) pour isoler les nuisances précises.",
            "automatedTasks": ["Dépouillement automatisé des enregistrements de bruit de longue durée", "Filtrage numérique des signaux sonores parasites"],
            "emergingSkills": ["Utilisation de réseaux de neurones pour la classification automatique des ambiances sonores"],
            "humanEdge": "La perception subjective du confort par l'oreille humaine que les seules courbes de décibels ne peuvent pas décrire."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le confort acoustique devient une priorité majeure dans les grands projets hôteliers, les centres d'appels, les salles de spectacles prestigieuses (Grand Théâtre National de Dakar) et les hôpitaux proches des grandes artères saturées de la capitale.",
            "localSectors": ["Grands hôtels et centres de conférences de Dakar", "Studios d'enregistrement de musique et médias audiovisuels", "Bureaux d'ingénierie d'infrastructures de transport"],
            "remoteWork": "Hybride (mesures au sonomètre sur le terrain puis modélisation et rapports en télétravail).",
            "entrepreneurship": "Création d'un cabinet d'ingénierie acoustique spécialisé dans l'insonorisation industrielle et le confort des bureaux à Dakar."
        },
        "relatedJobSlugs": ["ingenieur-genie-civil", "architecte", "technicien-etudes-thermiques-batiment"],
        "connectedFamilies": ["sciences-biotech", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Métiers de l'acoustique et du bâtiment — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "SFA — Société Française d'Acoustique", "url": "https://www.sfa.asso.fr/", "source": "SFA"}
        ],
        "sources": ["L'Étudiant", "SFA", "CidB (Centre d'information sur le Bruit)"],
        "interests": ["sciences-recherche", "donnees-chiffres", "arts-design"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "L'échelle des décibels est logarithmique : augmenter le niveau sonore de seulement 3 décibels équivaut exactement à doubler l'énergie sonore émise !",
            "pourquoi": "C'est pour cela qu'une réduction de seulement 5 à 10 décibels grâce à un bon isolant acoustique procure une sensation de calme spectaculaire.",
            "a_retenir": "Le sculpteur du son et du silence dans le monde bâti."
        }
    },

    # -----------------------------------------------------------------------
    # 8. MÉTREUR / ÉCONOMISTE DE LA CONSTRUCTION
    # -----------------------------------------------------------------------
    {
        "id": "metreur-economiste-construction",
        "slug": "metreur-economiste-construction",
        "title": "Métreur / Économiste de la Construction",
        "aliases": ["Technicien métreur", "Économiste du BTP", "Chargé de métrés et de chiffrage"],
        "icon": "📊",
        "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Économie de la Construction & Métrés",
        "domainId": "economie-construction-metres",
        "subdomain": "Métrés, Chiffrage & Estimation financière",
        "sectors": ["BTP", "Économie", "Finance"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "Bac +2 (BTS Management Économique de la Construction - MEC) à Bac +3 (Licence Pro)",
        "salary": "🇫🇷 France : 2 200 - 3 800 € net/mois (~32 000 - 55 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 350 000 - 1 100 000 FCFA / mois (Entreprises de BTP, cabinets d'économistes à Dakar)",
        "simpleDefinition": "Le métreur et économiste de la construction chiffre le coût exact d'un projet de bâtiment en calculant les quantités précises de matériaux nécessaires (mètres cubes de béton, tonnes d'acier, mètres carrés de carrelage) et le temps de main-d'œuvre requis.",
        "shortDescription": "Comptable et technicien du chantier documenté par L'Étudiant, il évalue les coûts au centime près pour garantir qu'un chantier soit rentable et ne dépasse pas son budget.",
        "longDescription": "Comme décrit dans les fiches métiers de L'Étudiant, le métreur / économiste de la construction intervient dès la conception pour fixer l'enveloppe budgétaire prévisionnelle. Sur la base des plans d'architecte et des maquettes BIM, il réalise le métré quantitatif (avant-métré), décompose chaque opération en sous-détail de prix (fournitures, location d'engins, heures d'ouvriers) et rédige le devis quantitatif estimatif (DQE). Sur le chantier, il contrôle les dépenses réelles et vérifie les factures des sous-traitants pour éviter les dérives financières.",
        "mainObjective": "Déterminer avec une rigueur mathématique le coût de construction le plus juste et veiller à la rentabilité économique du projet.",
        "companyRole": "Garant financier et contrôleur budgétaire de l'opération de construction.",
        "workEnvironment": [
            "🏢 Cabinets d'économie de la construction indépendants ou cabinets d'architectes",
            "💻 Stations de chiffrage spécialisées interconnectées aux maquettes BIM",
            "🏗️ Visites de chantiers pour constater les quantités d'ouvrages réellement exécutées"
        ],
        "missions": [
            "Calculer les surfaces, volumes et linéaires de chaque élément du bâtiment d'après les plans",
            "Élaborer le cadre de décomposition du prix global et forfaitaire (DPGF)",
            "Chiffrer le coût des matériaux, de la main-d'œuvre et des matériels selon les cours du marché",
            "Participer à la rédaction des pièces financières pour les dossiers d'appels d'offres",
            "Vérifier les situations de travaux mensuelles des entreprises avant paiement par le client"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Extraction des quantités sur maquette BIM", "desc": "Extraction automatique sous Revit des volumes de béton armé et des surfaces d'isolation thermique par l'extérieur (ITE)."},
            {"time": "10:30", "title": "Sous-détail de prix gros œuvre", "desc": "Calcul du prix unitaire du mètre carré de voile banché en intégrant le coût du béton C25/30, des armatures et des heures de coffreurs."},
            {"time": "14:00", "title": "Comparatif d'offres sous-traitants", "desc": "Analyse comparative de trois devis d'étanchéité de toiture pour vérifier la conformité avec le cahier des charges."},
            {"time": "16:30", "title": "Contrôle d'avancement sur chantier", "desc": "Relevé des surfaces de cloisons plaquées posées dans la semaine pour valider l'acompte financier de l'entreprise."}
        ],
        "skills": {
            "technical": [
                "Technologie générale de la construction et terminologie du gros œuvre et second œuvre",
                "Méthodologie des métrés, sous-détails de prix et déboursés secs",
                "Logiciels de métrés et devis BTP (BatiPrix, DeviSOC, Mensura, Attic+)",
                "Lecture et extraction de données quantitatives depuis les maquettes BIM (IFC)"
            ],
            "human": [
                "Rigueur absolue avec les chiffres et sens de l'exactitude",
                "Sens de l'analyse économique et esprit de synthèse",
                "Bon relationnel pour négocier avec les artisans et fournisseurs"
            ],
            "tools": [
                "DeviSOC / Attic+ / BatiPrix",
                "Autodesk Revit (module quantitatifs)",
                "Excel avancé (tableaux croisés dynamiques, macros de chiffrage)",
                "Règles et échelles de métrés numériques"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Bac Pro / STI2D", "title": "Bac Pro Technicien d'Études du Bâtiment (option études de prix)", "desc": "Bases du dessin et du calcul de surfaces de chantier."},
                {"step": "BTS (Bac +2)", "title": "BTS Management Économique de la Construction (MEC - ex-BTS EEC)", "desc": "Le diplôme d'État roi pour exercer comme métreur ou économiste de la construction."},
                {"step": "Licence Pro (Bac +3)", "title": "Licence Pro Économie de la Construction en Maîtrise d'Œuvre", "desc": "Accès direct aux responsabilités de chef de projet économique en cabinet."}
            ],
            "schools": [
                {"name": "Lycées techniques préparant le BTS MEC — France", "country": "France", "scope": "France"},
                {"name": "IUT Génie Civil — Filière Économie de la Construction — France", "country": "France", "scope": "France"},
                {"name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Centre d'Entrepreneuriat et de Développement Technique (CEDT Le G15 Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Qualification professionnelle OPQTECC", "Certification Progiciels de Chiffrage BTP", "Certification Métreur BIM"],
            "schoolSubjects": ["Économie de la construction", "Technologie du bâtiment", "Droit des marchés publics", "Métrés et études de prix"]
        },
        "career": {
            "sectors": ["Cabinets indépendants d'économistes de la construction", "Entreprises générales de bâtiment et de TP (services études de prix)", "Agences d'architecture et de maîtrise d'œuvre", "Bailleurs sociaux et promoteurs immobiliers"],
            "employerTypes": ["Cabinets d'économie de la construction", "Services devis de majors du BTP", "Collectivités locales"],
            "evolution": "Métreur débutant ➔ Économiste de la construction confirmé ➔ Responsable service études de prix ➔ Directeur d'un cabinet d'économie",
            "pros": "Métier stable très recherché par les entreprises, responsabilité financière concrète, travail régulier sans déplacements lointains.",
            "cons": "Pression sur la rentabilité (une erreur de quantité peut faire perdre de l'argent au chantier), travail sur tableurs récurrent."
        },
        "gettingStarted": {
            "beginnerProject": "Calculer la surface totale de carrelage et le nombre de carreaux de 60x60 cm nécessaires pour paver un salon avec 10% de chutes.",
            "intermediateProject": "Établir le métré complet d'un garage individuel (fondations, parpaings, charpente bois, tuiles).",
            "advancedProject": "Construire un sous-détail de prix complet pour un mètre cube de béton armé coulé en place.",
            "portfolioIdeas": ["Cadre de décomposition de prix (DPGF) chiffré sous Excel", "Avant-métré d'une maison individuelle sous DeviSOC"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA extrait automatiquement les quantités depuis les plans PDF ou maquettes 3D et actualise les prix selon l'inflation des matières premières.",
            "automatedTasks": ["Reconnaissance automatique des surfaces de pièces", "Mise à jour en temps réel des bases de prix unitaires"],
            "emergingSkills": ["Supervision des outils d'estimation automatique de coûts par IA"],
            "humanEdge": "L'anticipation des aléas réels de chantier et la stratégie de négociation commerciale avec les fournisseurs."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la forte volatilité des cours du ciment, du fer à béton importé et du sable de carrière rend le rôle du métreur crucial pour éviter les arrêts de chantiers pour cause de faillite budgétaire dans les projets de résidences et de bureaux à Dakar et Diamniadio.",
            "localSectors": ["Entreprises sénégalaises de BTP (CSE, Eiffage Sénégal, Consortium d'Entreprises)", "Cabinets d'économie et d'ingénierie de Dakar", "Promoteurs immobiliers de la zone des Almadies"],
            "remoteWork": "Très favorable (chiffrage et métrés réalisables en télétravail).",
            "entrepreneurship": "Création d'un cabinet de métrés et d'assistance aux appels d'offres pour les artisans et PME du BTP au Sénégal."
        },
        "relatedJobSlugs": ["ingenieur-etudes-de-prix", "conducteur-de-travaux", "charge-affaires-btp", "dessinateur-projeteur-en-batiment"],
        "connectedFamilies": ["finance-fintech", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier Métreur — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/metreur.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "UNTEC — Union Nationale des Économistes de la Construction", "url": "https://www.untec.com/", "source": "UNTEC"}
        ],
        "sources": ["L'Étudiant", "UNTEC", "OPQTECC"],
        "interests": ["donnees-chiffres", "technique-outils", "coordonner-gerer"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Un métreur expérimenté est capable de repérer une erreur de devis de plus de 50 000 euros en quelques coups d'œil simplement en vérifiant les ratios d'acier par mètre cube de béton.",
            "pourquoi": "Ces ratios empiriques tirés de l'expérience lui permettent de vérifier instantanément la cohérence d'un devis complexe.",
            "a_retenir": "Le maître des coûts qui transforme les plans en budget équilibré."
        }
    },

    # -----------------------------------------------------------------------
    # 9. INGÉNIEUR ÉTUDES DE PRIX
    # -----------------------------------------------------------------------
    {
        "id": "ingenieur-etudes-de-prix",
        "slug": "ingenieur-etudes-de-prix",
        "title": "Ingénieur Études de Prix BTP",
        "aliases": ["Ingénieur chiffrage BTP", "Responsable bureau d'études de prix", "Estimator BTP grand projet"],
        "icon": "📈",
        "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Économie de la Construction & Métrés",
        "domainId": "economie-construction-metres",
        "subdomain": "Chiffrage stratégique & Appels d'offres",
        "sectors": ["BTP", "Ingénierie", "Finance"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "Bac +5 (Diplôme d'Ingénieur en Génie Civil / BTP ou Master Économie de la Construction)",
        "salary": "🇫🇷 France : 3 100 - 5 500 € net/mois (~44 000 - 80 000 € brut/an, Source : L'Étudiant / APEC) • 🇸🇳 Sénégal : 600 000 - 2 000 000 FCFA / mois (Direction technique des grands groupes de BTP)",
        "simpleDefinition": "L'ingénieur études de prix conçoit la stratégie financière et technique pour remporter les grands appels d'offres de construction (autoroutes, hôpitaux, tours, ponts), en calculant le prix le plus compétitif pour l'entreprise tout en garantissant sa marge bénéficiaire.",
        "shortDescription": "Profil stratégique majeur mis en valeur par L'Étudiant, il combine sens des affaires, génie civil et négociation pour faire gagner des chantiers de plusieurs dizaines de millions d'euros à son entreprise.",
        "longDescription": "Comme décrit dans la fiche métier de L'Étudiant, l'ingénieur études de prix intervient avant même le premier coup de pioche. Dès la publication d'un appel d'offres public ou privé, il étudie en détail le cahier des charges, propose des variantes techniques innovantes plus économiques, chiffre les modes opératoires et négocie avec les sous-traitants et fournisseurs. C'est sur son chiffrage que la direction générale s'appuie pour fixer le prix de vente final déposé lors de l'offre.",
        "mainObjective": "Proposer une offre technique et financière gagnante qui séduise le client tout en assurant une rentabilité solide à l'entreprise de construction.",
        "companyRole": "Stratège commercial et financier permettant à l'entreprise de remporter de nouveaux contrats majeurs.",
        "workEnvironment": [
            "🏢 Siège social des entreprises générales de BTP (bureau d'études de prix)",
            "💻 Simulateurs financiers et bases de données de ratios de productivité",
            "🤝 Réunions de soutenances orales devant les jurys de maîtres d'ouvrage"
        ],
        "missions": [
            "Examiner les dossiers d'appels d'offres et évaluer les risques techniques, géologiques et financiers",
            "Consulter le marché des fournisseurs et sous-traitants pour obtenir les meilleurs tarifs",
            "Imaginer des variantes techniques plus économiques (changement de procédé constructif ou de matériau)",
            "Établir le déboursé sec prévisionnel complet et proposer la marge bénéficiaire à la direction générale",
            "Participer aux séances de soutenance et de négociation avec le client jusqu'à la signature du marché"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Analyse d'un appel d'offres d'hôpital", "desc": "Examen du cahier des charges d'un hôpital de 40 millions d'euros pour repérer les risques de pénalités de retard."},
            {"time": "11:00", "title": "Proposition de variante technique", "desc": "Étude comparative : remplacer des fondations sur pieux battus par des inclusions rigides pour faire économiser 450 000 euros au client."},
            {"time": "14:30", "title": "Bouclage financier de l'offre", "desc": "Intégration des devis des lots techniques (électricité, plomberie) et calage du coefficient de vente final."},
            {"time": "17:00", "title": "Comité d'engagement de direction", "desc": "Présentation du dossier au directeur général pour valider le montant déposé à l'appel d'offres."}
        ],
        "skills": {
            "technical": [
                "Expertise approfondie des méthodes et cadences de construction BTP",
                "Chiffrage analytique, déboursé sec, frais de chantier et coefficients de vente",
                "Droit des marchés publics (Code de la commande publique) et marchés privés (norme NF P 03-001)",
                "Analyse des risques contractuels et clauses d'indexation de prix"
            ],
            "human": [
                "Fibre commerciale et sens aigu de la stratégie concurrentielle",
                "Résistance au stress lors des dates limites impératives de dépôts d'offres",
                "Force de conviction pour défendre l'offre technique en soutenance"
            ],
            "tools": [
                "Progiciels de chiffrage BTP (Candy, Onaya, Mensura, DeviSOC)",
                "Bases de données de prix et ratios internes d'entreprise",
                "Outils de planification d'études (MS Project)",
                "Plateformes d'appels d'offres dématérialisées"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Classes Préparatoires / Licence", "title": "CPGE Math-Physique ou Licence Génie Civil", "desc": "Bases solides en mathématiques, calculs de structures et physique."},
                {"step": "Diplôme d'Ingénieur (Bac +5)", "title": "Ingénieur en Génie Civil / Travaux Publics (ESTP, INSA, Centrale)", "desc": "Formation de référence pour maîtriser à la fois la technique et la gestion financière."},
                {"step": "Double Diplôme Ingénieur-Manager", "title": "Master Spécialisé en Management des Entreprises de BTP", "desc": "Atout majeur pour piloter les négociations financières de haut niveau."}
            ],
            "schools": [
                {"name": "ESTP Paris / École des Ponts ParisTech — France", "country": "France", "scope": "France"},
                {"name": "INSA Lyon / Polytech / Centrale — France", "country": "France", "scope": "France"},
                {"name": "École Polytechnique de Thiès (EPT) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification en Chiffrage de Projets BTP Complexes", "Agrément Marchés Publics et Concessions", "Certification Risk Management BTP"],
            "schoolSubjects": ["Économie de projet", "Procédés généraux de construction", "Droit des marchés", "Analyse financière"]
        },
        "career": {
            "sectors": ["Majors du BTP (Vinci, Bouygues, Eiffage, Spie Batignolles)", "Grandes entreprises de terrassement et travaux publics", "Promoteurs immobiliers et contractants généraux"],
            "employerTypes": ["Directions études de majors du BTP", "Entreprises générales régionales", "Cabinets de conseil en chiffrage"],
            "evolution": "Ingénieur études de prix junior ➔ Responsable pôle études de prix ➔ Directeur du bureau d'études ➔ Directeur commercial de filiale BTP",
            "pros": "Poste au cœur de la stratégie de l'entreprise, participation directe aux victoires commerciales, travail stimulant intellectuellement.",
            "cons": "Pics de stress intenses la veille de la clôture des appels d'offres, déception inévitable lorsqu'une offre travaillée pendant des semaines n'est pas retenue."
        },
        "gettingStarted": {
            "beginnerProject": "Analyser un appel d'offres public téléchargeable librement sur une plateforme de collectivité.",
            "intermediateProject": "Chiffrer le coût complet de réalisation d'un parking public de 200 places avec enrobé et éclairage.",
            "advancedProject": "Proposer une variante technique divisant par deux la quantité de déblais évacués sur un projet de terrassement.",
            "portfolioIdeas": ["Mémoire technique complet remis pour un appel d'offres fictif", "Analyse comparative de sous-traitance pour un chantier"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA analyse les données de milliers d'appels d'offres passés pour recommander le prix de vente optimal avec la plus haute probabilité de victoire.",
            "automatedTasks": ["Lecture automatique des centaines de pages de CCTP par IA", "Estimation prédictive des prix des matières premières à 2 ans"],
            "emergingSkills": ["Utilisation de modèles d'IA prédictive pour le positionnement de prix concurrentiel"],
            "humanEdge": "L'intelligence relationnelle avec le client et l'audace d'inventer une méthode constructive inédite."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les ingénieurs études de prix jouent un rôle capital lors des grands appels d'offres internationaux financés par la Banque Mondiale, la BAD ou l'État (autoroutes Mbour-Fatick-Kaolack, modernisation du port de Dakar, ponts régionaux), où la moindre erreur d'anticipation de change monétaire ou de douane peut menacer la rentabilité.",
            "localSectors": ["Grands majors du BTP (Eiffage Sénégal, CSE, Sogea-Satom, Sinohydro)", "AGEROUTE (Direction des Marchés)", "Promoteurs privés de la zone UEMOA"],
            "remoteWork": "Très favorable (dossiers traités au bureau et en télétravail avec outils cloud).",
            "entrepreneurship": "Création d'une agence de conseil en chiffrage et montage de dossiers d'appels d'offres pour les entreprises africaines du BTP."
        },
        "relatedJobSlugs": ["metreur-economiste-construction", "ingenieur-dans-le-btp", "conducteur-de-travaux", "charge-affaires-btp"],
        "connectedFamilies": ["finance-fintech", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier Ingénieur études de prix — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/ingenieur-etudes-de-prix_1.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "EGF BTP — Entreprises Générales de France BTP", "url": "https://www.egfbtp.com/", "source": "EGF BTP"}
        ],
        "sources": ["L'Étudiant", "EGF BTP", "FNTP"],
        "interests": ["donnees-chiffres", "coordonner-gerer", "technique-outils"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Sur un appel d'offres international de plusieurs dizaines de millions d'euros, la victoire se joue parfois à moins de 0,5% d'écart de prix entre les finalistes.",
            "pourquoi": "C'est l'ingéniosité de l'ingénieur études de prix à trouver une astuce logistique ou technique qui fait la différence décisive.",
            "a_retenir": "Le stratège qui gagne les chantiers avant même qu'ils ne commencent."
        }
    },

    # -----------------------------------------------------------------------
    # 10. GÉOMÈTRE-TOPOGRAPHE
    # -----------------------------------------------------------------------
    {
        "id": "geometre-topographe",
        "slug": "geometre-topographe",
        "title": "Géomètre-Topographe",
        "aliases": ["Technicien topographe", "Ingénieur géomètre", "Opérateur topographe scanner 3D"],
        "icon": "🗺️",
        "image": "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Géomètre, Topographie & Cartographie",
        "domainId": "geometre-topographie",
        "subdomain": "Topographie, Implantation & Foncier",
        "sectors": ["BTP", "Topographie", "Géomatique"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "Bac Pro à Bac +2 (BTS Métiers du Géomètre-Topographe) jusqu'à Bac +5 (Ingénieur Géomètre)",
        "salary": "🇫🇷 France : 2 000 - 3 800 € net/mois (~28 000 - 55 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 350 000 - 1 200 000 FCFA / mois (Ordre des Géomètres Experts du Sénégal - OGES, cadastre, grands travaux)",
        "simpleDefinition": "Le géomètre-topographe mesure le relief de la Terre au millimètre près à l'aide d'instruments lasers, satellites (GPS) et drones, délimite légalement les parcelles de terrain et guide l'implantation exacte des ouvrages sur le chantier.",
        "shortDescription": "Premier professionnel à intervenir sur le terrain selon L'Étudiant, il garantit la précision spatiale et juridique sans laquelle aucune construction ne peut démarrer.",
        "longDescription": "Comme décrit dans la fiche métier de L'Étudiant, le géomètre-topographe partage son temps entre les missions de terrain et le travail au bureau. Sur le terrain, muni de tachéomètres électroniques, de récepteurs GNSS et de scanners lasers 3D, il relève l'altitude, les limites et les obstacles naturels d'une parcelle. De retour au bureau, il traite les données géomatiques pour dessiner des cartes topographiques, des plans cadastraux et des modèles 3D de terrain. Sur le chantier, il implante les piquets repères qui indiquent aux engins de terrassement où creuser avec une exactitude chirurgicale.",
        "mainObjective": "Mesurer, cartographier et borner avec une précision absolue les parcelles de terrain et garantir l'implantation spatiale exacte des édifices.",
        "companyRole": "Garant de la vérité géographique, topographique et foncière du sol.",
        "workEnvironment": [
            "🌳 Missions extérieures en pleine nature, en ville ou sur chantiers de BTP",
            "🖥️ Bureau d'études topographiques pour le traitement des nuages de points 3D",
            "✈️ Pilotage de drones de cartographie aérienne et d'appareils de photogrammétrie"
        ],
        "missions": [
            "Effectuer les levés topographiques d'un terrain à l'aide de stations totales robotisées et GPS/GNSS",
            "Implanter sur le chantier les repères d'alignement et de niveau pour les fondations et les voiries",
            "Scanner en 3D des bâtiments existants pour créer des nuages de points d'aide à la modélisation BIM",
            "Délimiter légalement les limites de propriétés foncières privées ou publiques (bornage)",
            "Établir des plans de récolement après travaux pour cartographier précisément les réseaux souterrains"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Implantation d'axes sur chantier", "desc": "Mise en station de la station totale robotisée et traçage au laser des axes de piliers de fondation pour les maçons."},
            {"time": "10:30", "title": "Levé par drone photogrammétrique", "desc": "Vol programmé d'un drone sur une zone de 15 hectares pour générer le modèle numérique de terrain (MNT) d'un futur lotissement."},
            {"time": "13:30", "title": "Traitement géomatique au bureau", "desc": "Assemblage des données GNSS sous Covadis et calcul des courbes de niveau pour estimer les volumes de déblais et remblais."},
            {"time": "16:00", "title": "Rendez-vous de bornage contradictoire", "desc": "Pose de bornes physiques OGE entre deux parcelles en présence des deux propriétaires riverains."}
        ],
        "skills": {
            "technical": [
                "Topométrie, géodésie, systèmes de projection cartographique (Lambert, UTM)",
                "Maniement des instruments de mesure (stations totales Leica/Trimble, GPS RTK, niveaux optiques)",
                "Photogrammétrie par drone et traitement de nuages de points laser (LiDAR)",
                "Logiciels de dessin et modélisation topographique (AutoCAD, Covadis, Mensura, QGIS)"
            ],
            "human": [
                "Rigueur métrologique absolue (aucune tolérance à l'erreur de mesure)",
                "Goût prononcé pour le travail au grand air et autonomie sur le terrain",
                "Diplomatie et impartialité lors des litiges de bornage entre voisins"
            ],
            "tools": [
                "Stations totales robotisées (Leica Geosystems, Trimble)",
                "Récepteurs GPS/GNSS centimétriques RTK",
                "Drones professionnels de photogrammétrie",
                "Logiciels Covadis / Mensura / QGIS / AutoCAD"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Bac Pro (Bac)", "title": "Bac Pro Métiers du Géomètre-Topographe", "desc": "Acquisition des gestes d'arpentage, de mise en station et de dessin assisté par ordinateur."},
                {"step": "BTS (Bac +2)", "title": "BTS Métiers du Géomètre-Topographe et de la Modélisation Numérique (MGTMN)", "desc": "Le diplôme professionnel indispensable pour diriger des opérations topographiques autonomes."},
                {"step": "Diplôme d'Ingénieur Géomètre (Bac +5)", "title": "Ingénieur Géomètre (ESGT Le Mans, INSA Strasbourg, ESTP)", "desc": "Formation d'excellence ouvrant droit à l'exercice libéral sous le titre protégé de Géomètre-Expert."}
            ],
            "schools": [
                {"name": "ESGT (École Supérieure des Géomètres et Topographes Le Mans) — France", "country": "France", "scope": "France"},
                {"name": "INSA Strasbourg (filière topographie) / ESTP Paris — France", "country": "France", "scope": "France"},
                {"name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Polytechnique de Thiès (EPT) / Génie Topographique — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Inscription à l'Ordre des Géomètres-Experts (OGE / OGES)", "Télépilote de drone professionnel certifié DGAC", "Certification Covadis Topographie Avancée"],
            "schoolSubjects": ["Trigonométrie et géodésie", "Droit foncier et de l'urbanisme", "Topométrie appliquée", "Systèmes d'Information Géographique (SIG)"]
        },
        "career": {
            "sectors": ["Cabinets de géomètres-experts libéraux", "Grandes entreprises de travaux publics et terrassement", "Sociétés autoroutières et ferroviaires (SNCF Réseau)", "Services du cadastre, de l'IGN et collectivités territoriales"],
            "employerTypes": ["Cabinets de géomètres-experts", "Entreprises générales de TP", "Services publics du cadastre"],
            "evolution": "Technicien topographe de terrain ➔ Chef de brigade topographique ➔ Responsable pôle géomatique ➔ Géomètre-Expert libéral associé",
            "pros": "Équilibre parfait entre grand air et technologies informatiques de pointe (drones, 3D), fort sentiment d'autonomie.",
            "cons": "Exposition aux intempéries (chaleur, pluie, boue), port d'équipements lourds sur terrains accidentés."
        },
        "gettingStarted": {
            "beginnerProject": "Observer les bornes en béton ou clous d'arpentage visibles sur les trottoirs et limites de parcelles.",
            "intermediateProject": "Réaliser un levé de dénivelé simple dans un jardin avec un niveau à bulle et une règle graduée.",
            "advancedProject": "Importer un fichier de points topographiques sous QGIS et générer un modèle numérique d'élévation avec courbes de niveau.",
            "portfolioIdeas": ["Plan topographique côté réalisé sous Covadis", "Orthophotographie haute résolution générée par drone"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA classe automatiquement des milliards de points LiDAR en séparant le sol nu, la végétation et les bâtiments en quelques minutes.",
            "automatedTasks": ["Classification automatique des nuages de points laser", "Vectorisation automatique des contours de bâtiments"],
            "emergingSkills": ["Traitement automatique de données massives issues de scanners 3D mobiles"],
            "humanEdge": "La responsabilité juridique du bornage foncier et le discernement physique sur le terrain."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le géomètre-topographe est une figure centrale pour la sécurisation foncière, la délimitation des baux ruraux du domaine national et la réussite du programme national de cadastre numérique (PROCASEF), ainsi que pour le guidage des terrassements du TER et des autoroutes de l'AGEROUTE.",
            "localSectors": ["Ordre des Géomètres Experts du Sénégal (OGES)", "Direction du Cadastre et de la Conservation Foncière", "Entreprises de grands travaux (Eiffage, CSE)"],
            "remoteWork": "Hybride (terrain physique incontournable / traitement des nuages de points en télétravail).",
            "entrepreneurship": "Création d'un cabinet d'ingénierie topographique et de cartographie par drone à Dakar ou dans les capitales régionales."
        },
        "relatedJobSlugs": ["urbaniste", "ingenieur-genie-civil", "dessinateur-projeteur-en-batiment"],
        "connectedFamilies": ["mines-geosciences", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier Géomètre-topographe — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/geometre-topographe.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "Ordre des Géomètres-Experts (OGE France)", "url": "https://www.geometre-expert.fr/", "source": "OGE"}
        ],
        "sources": ["L'Étudiant", "OGE France", "OGES Sénégal"],
        "interests": ["sport-plein-air", "technique-outils", "donnees-chiffres"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Les géomètres-topographes utilisent des tachéomètres lasers capables de mesurer une distance de 1 kilomètre avec une précision inférieure à 1 millimètre.",
            "pourquoi": "C'est cette précision chirurgicale qui permet aux deux équipes forant un tunnel sous une montagne par chaque côté de se rejoindre pile en face au centimètre près !",
            "a_retenir": "L'œil de lynx qui pose les repères incontestables de chaque construction."
        }
    },

    # -----------------------------------------------------------------------
    # 11. URBANISTE
    # -----------------------------------------------------------------------
    {
        "id": "urbaniste",
        "slug": "urbaniste",
        "title": "Urbaniste & Aménageur du Territoire",
        "aliases": ["Aménageur urbain", "Chargé d'études urbaines", "Concepteur de villes durables"],
        "icon": "🏙️",
        "image": "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Urbanisme, Paysage & Aménagement",
        "domainId": "urbanisme-amenagement",
        "subdomain": "Planification urbaine & Éco-quartiers",
        "sectors": ["BTP", "Urbanisme", "Aménagement"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "Bac +5 (Master Urbanisme et Aménagement ou Diplôme d'Institut d'Urbanisme)",
        "salary": "🇫🇷 France : 2 400 - 4 800 € net/mois (~34 000 - 72 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 450 000 - 1 600 000 FCFA / mois (Direction de l'Urbanisme, DGPU Diamniadio, agences d'urbanisme privées)",
        "simpleDefinition": "L'urbaniste planifie le développement harmonieux des villes et des territoires : il conçoit l'organisation des quartiers, l'implantation des logements, des commerces, des espaces verts et des transports en commun pour rendre la ville agréable, accessible et résiliente au changement climatique.",
        "shortDescription": "Penseur et chef d'orchestre de la cité mis en avant par L'Étudiant, il conçoit les éco-quartiers de demain à l'échelle de territoires entiers.",
        "longDescription": "Comme mis en lumière dans le dossier BTP et aménagement de L'Étudiant, l'urbaniste travaille à une échelle bien plus large que l'architecte : celle de la ville, de la métropole ou de la région. À la croisée de la géographie, de la sociologie, de l'économie et de l'environnement, il élabore les documents cadres de planification urbaine (PLU, SCoT, PDU). Il imagine les transformations de friches industrielles en éco-quartiers mixtes, favorise les mobilités douces (pistes cyclables, tramways) et concerte les élus, les promoteurs et les citoyens pour bâtir un cadre de vie durable.",
        "mainObjective": "Planifier l'aménagement durable des espaces urbains et ruraux pour équilibrer développement économique, justice sociale et protection de la nature.",
        "companyRole": "Visionnaire territorial et coordinateur des politiques d'aménagement urbain.",
        "workEnvironment": [
            "🏛️ Collectivités territoriales, métropoles et agences d'urbanisme publiques",
            "🏢 Cabinets de conseil privés en urbanisme et aménagement",
            "👥 Réunions publiques de concertation citoyenne et ateliers de concertation avec les élus"
        ],
        "missions": [
            "Élaborer et réviser les documents réglementaires d'urbanisme (Plans Locaux d'Urbanisme - PLU, SCOT)",
            "Concevoir des schémas directeurs d'éco-quartiers et de zones d'aménagement concerté (ZAC)",
            "Étudier l'impact des infrastructures de transport sur le développement des mobilités douces",
            "Organiser la concertation citoyenne et animer les ateliers participatifs avec les riverains",
            "Veiller à la mixité sociale, à la végétalisation urbaine et à la lutte contre les îlots de chaleur"
        ],
        "typicalDay": [
            {"time": "09:00", "title": "Analyse cartographique sous SIG", "desc": "Croisement des couches de densité de population et d'espaces verts pour localiser un futur parc urbain rafraîchissant."},
            {"time": "11:00", "title": "Comité de pilotage éco-quartier", "desc": "Présentation aux élus municipaux du plan de circulation apaisée limitant la vitesse à 30 km/h et favorisant les voies piétonnes."},
            {"time": "14:30", "title": "Atelier de concertation citoyenne", "desc": "Animation d'un atelier avec les habitants d'un quartier populaire pour co-construire le réaménagement de la place centrale."},
            {"time": "17:00", "title": "Rédaction d'une note d'orientations", "desc": "Formalisation des critères environnementaux obligatoires pour les futurs permis de construire du secteur."}
        ],
        "skills": {
            "technical": [
                "Droit de l'urbanisme, de l'environnement et des collectivités territoriales",
                "Systèmes d'Information Géographique (QGIS, ArcGIS) et analyse spatiale",
                "Planification des mobilités et transition écologique des métropoles",
                "Méthodologie de concertation publique et de sociologie urbaine"
            ],
            "human": [
                "Vision prospective et capacité à penser la ville à 20 ou 30 ans",
                "Excellente aisance orale, sens de la médiation et diplomatie politique",
                "Sensibilité écologique et volonté de justice sociale"
            ],
            "tools": [
                "QGIS / ArcGIS (Cartographie et SIG)",
                "Illustrator / InDesign (Cartes et livrets de présentation urbaine)",
                "AutoCAD / SketchUp (Schémas de volumétrie urbaine)",
                "Outils d'enquêtes et de consultation citoyenne numérique"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Licence (Bac +3)", "title": "Licence Géographie, Aménagement du Territoire, Droit ou Architecture", "desc": "Acquisition des fondamentaux en sciences humaines, spatiales et juridiques."},
                {"step": "Master Urbanisme (Bac +5)", "title": "Master Urbanisme et Aménagement (Instituts d'Urbanisme - APERAU)", "desc": "La formation universitaire d'excellence reconnue par le Conseil Français des Urbanistes."},
                {"step": "Mastère Spécialisé (Bac +6)", "title": "Mastère Spécialisé Ingénierie Urbaine et Villes Durables", "desc": "Spécialisation dans les smart cities et la résilience climatique urbaine."}
            ],
            "schools": [
                {"name": "Instituts d'Urbanisme membres de l'APERAU (Paris-Est, Lyon, Bordeaux, Aix) — France", "country": "France", "scope": "France"},
                {"name": "Sciences Po Paris (École Urbaine) / École des Ponts ParisTech — France", "country": "France", "scope": "France"},
                {"name": "École Africaine des Métiers de l'Architecture et de l'Urbanisme (EAMAU Lomé) — Régional", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Université Cheikh Anta Diop (UCAD Dakar) / Département de Géographie — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Qualification Professionnelle des Urbanistes (OPQU)", "Agrément de programmation urbaine", "Certification Villes & Territoires Durables"],
            "schoolSubjects": ["Droit de l'urbanisme", "Sociologie urbaine", "Cartographie SIG", "Écologie du paysage urbain"]
        },
        "career": {
            "sectors": ["Agences d'urbanisme publiques et sociétés d'économie mixte (SEM)", "Collectivités locales (mairies, métropoles, départements)", "Cabinets de conseil privés en aménagement urbain", "Bailleurs sociaux et grands aménageurs fonciers"],
            "employerTypes": ["Agences d'urbanisme", "Collectivités territoriales", "Sociétés d'aménagement foncier"],
            "evolution": "Chargé d'études urbanisme débutant ➔ Chef de projet ZAC ➔ Directeur d'agence d'urbanisme ➔ Directeur général des services d'aménagement",
            "pros": "Impact direct et visible sur la qualité de vie de milliers d'habitants, vision stratégique globale, diversité des sujets.",
            "cons": "Processus de décision politique parfois très lents, conciliation complexe entre intérêts privés et intérêt général."
        },
        "gettingStarted": {
            "beginnerProject": "Consulter le Plan Local d'Urbanisme (PLU) de sa commune sur le Géoportail de l'Urbanisme et identifier le zonage de son quartier.",
            "intermediateProject": "Cartographier sous QGIS les arrêts de bus et les pistes cyclables d'une ville pour identifier les zones mal desservies.",
            "advancedProject": "Rédiger un diagnostic territorial de 5 pages pour la reconversion d'une friche ferroviaire en éco-quartier mixte.",
            "portfolioIdeas": ["Dossier de diagnostic urbain illustré de cartes SIG", "Projet d'aménagement d'une trame verte et bleue urbaine"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'analyse des flux de mobilité anonymisés par l'IA permet de simuler en direct les effets de la création d'une nouvelle ligne de transport ou d'un éco-quartier.",
            "automatedTasks": ["Analyse des données massives de déplacements urbains", "Cartographie automatisée des îlots de chaleur urbains par satellite"],
            "emergingSkills": ["Utilisation de jumeaux numériques urbains pour la simulation prospective"],
            "humanEdge": "La médiation démocratique, le sens politique du bien commun et l'écoute humaine des besoins des citoyens."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la croissance démographique fulgurante de Dakar et le désengorgement de la presqu'île ont donné naissance au pôle urbain pionnier de Diamniadio, laboratoire grandeur nature de l'urbanisme africain moderne, tandis que des villes comme Saint-Louis adaptent leur urbanisme à la montée des eaux.",
            "localSectors": ["DGPU (Délégation Générale à la Promotion des Pôles Urbains de Diamniadio)", "Direction de l'Urbanisme et de l'Architecture (DUA)", "Agences de développement communal et mairies de grandes villes sénégalaises"],
            "remoteWork": "Hybride (études de données et SIG en télétravail / réunions de concertation et visites sur le terrain).",
            "entrepreneurship": "Création d'un cabinet d'urbanisme et de géomatique spécialisé dans la planification des villes secondaires d'Afrique de l'Ouest."
        },
        "relatedJobSlugs": ["architecte", "geometre-topographe", "ingenieur-genie-civil"],
        "connectedFamilies": ["sciences-politiques", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier Urbaniste — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "OPQU — Office Professionnel de Qualification des Urbanistes", "url": "https://www.opqu.org/", "source": "OPQU"}
        ],
        "sources": ["L'Étudiant", "OPQU", "FNAU"],
        "interests": ["societe-culture", "nature-environnement", "donnees-chiffres"],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "En introduisant des arbres d'ombrage et des toitures végétalisées, les urbanistes parviennent à faire baisser la température d'un quartier de 3 à 5°C lors des canicules estivales.",
            "pourquoi": "Grâce au phénomène naturel d'évapotranspiration des végétaux qui agit comme une climatisation naturelle sans dépenser le moindre watt.",
            "a_retenir": "L'architecte de la cité qui réconcilie l'homme, la ville et la nature."
        }
    },

    # -----------------------------------------------------------------------
    # 12. MAÇON
    # -----------------------------------------------------------------------
    {
        "id": "macon",
        "slug": "macon",
        "title": "Maçon",
        "aliases": ["Maçon traditionnel", "Maçon du gros œuvre", "Compagnon maçon"],
        "icon": "🧱",
        "image": "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Gros Œuvre, Maçonnerie & Béton",
        "domainId": "gros-oeuvre-maconnerie",
        "subdomain": "Maçonnerie, Murs porteurs & Fondations",
        "sectors": ["BTP", "Gros Œuvre", "Construction"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "CAP Maçon à Bac Pro (Intervention sur le Patrimoine Bâti ou Technicien du Bâtiment)",
        "salary": "🇫🇷 France : 1 800 - 2 900 € net/mois (~26 000 - 41 000 € brut/an + primes de panier, Source : L'Étudiant) • 🇸🇳 Sénégal : 150 000 - 600 000 FCFA / mois (Maîtres maçons de chantiers résidentiels et industriels)",
        "simpleDefinition": "Le maçon est le bâtisseur fondamental du gros œuvre : il monte les murs, coule les dalles en béton, pose les parpaings, briques ou pierres et réalise les fondations sur lesquelles repose tout le reste du bâtiment.",
        "shortDescription": "Métier socle de la construction mis en valeur par le témoignage d'Olivier apprenti dans L'Étudiant, le maçon transforme le mortier et les blocs en édifices solides.",
        "longDescription": "Comme décrit dans la fiche et le reportage d'apprentissage de L'Étudiant, le maçon est le premier artisan à intervenir une fois le terrassement achevé. Muni de sa truelle, de son fil à plomb et de son niveau, il prépare les liants (ciments, chaux, mortiers), assemble les éléments de maçonnerie (briques creuses, moellons, blocs de béton) avec une planéité parfaite, pose les linteaux au-dessus des portes et fenêtres et coule les chapes de béton armé. Son savoir-faire s'étend de la construction de maisons modernes à la restauration de vieux murs en pierres de taille.",
        "mainObjective": "Ériger les structures porteuses verticales et horizontales d'un édifice avec une solidité, une verticalité et une étanchéité irréprochables.",
        "companyRole": "Pilier physique de la construction garantissant l'élévation des murs et la pérennité du gros œuvre.",
        "workEnvironment": [
            "🧱 Chantiers de construction neuve ou de rénovation patrimoniale",
            "🌤️ Travail en plein air par toutes les saisons, souvent sur échafaudages",
            "👥 Travail d'équipe solidaire avec les coffreurs, grutiers et chefs de chantier"
        ],
        "missions": [
            "Implanter les ouvrages et monter les murs porteurs en briques, parpaings, pierres ou béton cellulaire",
            "Fabriquer et gâcher les mortiers, bétons et enduits selon les dosages techniques requis",
            "Réaliser les coffrages simples en bois et poser les armatures métalliques pour les linteaux et chaînages",
            "Couler et vibrer le béton pour les dalles, chapes de sol et poteaux d'angle",
            "Appliquer les enduits traditionnels et assurer l'étanchéité à l'eau et à l'air des parois"
        ],
        "typicalDay": [
            {"time": "07:30", "title": "Installation du poste de travail", "desc": "Vérification des échafaudages, approvisionnement en palettes de parpaings par la grue et gâchage du mortier à la bétonnière."},
            {"time": "09:00", "title": "Montage de murs en briques", "desc": "Pose de rangs de briques au cordeau avec contrôle systématique du niveau à bulle et du fil à plomb."},
            {"time": "13:30", "title": "Coulage d'un linteau", "desc": "Ferraillage d'un linteau au-dessus d'une baie vitrée, pose du coffrage et coulage du béton vibré à l'aiguille."},
            {"time": "16:15", "title": "Nettoyage et protection des maçonneries", "desc": "Bâchage des maçonneries fraîches pour les protéger de la pluie ou du séchage trop rapide au soleil."}
        ],
        "skills": {
            "technical": [
                "Techniques d'appareillage des briques, blocs de béton, pierres et briques monomur",
                "Dosage, formulation et mise en œuvre des mortiers et bétons",
                "Lecture de plans d'exécution d'architecte et prise de cotes",
                "Règles de sécurité sur échafaudage et port des EPI"
            ],
            "human": [
                "Excellente condition physique, force et endurance corporelle",
                "Sens du travail en équipe et communication franche sur le chantier",
                "Précision du geste manuel et amour du travail soigné"
            ],
            "tools": [
                "Truelles de maçon, taloches et platoirs",
                "Niveaux à bulle magnétiques, fils à plomb et cordeaux d'alignement",
                "Bétonnières, aiguilles vibrantes à béton et meuleuses à disque diamant",
                "Échafaudages de pied et tréteaux de maçon"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "CAP Maçon (2 ans)", "title": "CAP Maçon en apprentissage", "desc": "La voie royale mise en avant par L'Étudiant pour apprendre le métier directement auprès des maîtres artisans."},
                {"step": "Bac Pro (3 ans)", "title": "Bac Pro Technicien du Bâtiment (organisation et réalisation de gros œuvre)", "desc": "Formation complète ouvrant la voie vers l'encadrement d'équipe de chantier."},
                {"step": "Brevet Professionnel (BP)", "title": "BP Maçonnerie (Compagnonnage)", "desc": "Perfectionnement technique de haute qualification chez les Compagnons du Devoir."}
            ],
            "schools": [
                {"name": "CFA du Bâtiment et des Travaux Publics — France", "country": "France", "scope": "France"},
                {"name": "Compagnons du Devoir et du Tour de France — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Centres Régionaux de Formation Professionnelle (CRFP Kaolack, Saint-Louis) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat de Qualification Professionnelle (CQP) Maçon", "CACES échafaudage de pied R408", "Brevet de Sauveteur Secouriste du Travail (SST)"],
            "schoolSubjects": ["Dessin technique et lecture de plans", "Technologie des matériaux de maçonnerie", "Sécurité de chantier", "Mathématiques appliquées au métré"]
        },
        "career": {
            "sectors": ["Entreprises artisanales de maçonnerie générale", "Entreprises générales de bâtiment et de gros œuvre", "Entreprises spécialisées dans la restauration des monuments historiques"],
            "employerTypes": ["Artisans maçons", "PME de gros œuvre", "Grandes entreprises de BTP"],
            "evolution": "Apprenti maçon ➔ Maçon qualifié ➔ Chef d'équipe maçonnerie ➔ Chef de chantier gros œuvre ➔ Artisan créateur de son entreprise",
            "pros": "Plein emploi permanent (pénurie aiguë de bras qualifiés), fierté de voir le bâtiment s'élever grâce à ses mains, opportunité rapide de créer sa boîte.",
            "cons": "Travail physique exigeant, dépendance aux conditions météo (pluie, gel, canicule)."
        },
        "gettingStarted": {
            "beginnerProject": "Gâcher une auge de mortier et monter un muret de 3 parpaings avec jointoiement parfait au niveau.",
            "intermediateProject": "Réaliser un coffrage bois étanche pour couler un petit massif de fondation.",
            "advancedProject": "Monter un pilier en briques apparentes avec joints creux réguliers et linteau cintré.",
            "portfolioIdeas": ["Photos de réalisations de murs en briques ou moellons", "Attestation de stage en entreprise de gros œuvre"]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "Bien que des robots poseurs de briques ou des imprimantes 3D à béton apparaissent pour certains murs droits, la maçonnerie courante et la réhabilitation restent totalement manuelles.",
            "automatedTasks": ["Découpe automatisée de briques à l'atelier", "Malaxage automatique des centrales à béton mobiles"],
            "emergingSkills": ["Utilisation de niveaux lasers rotatifs auto-calibrés"],
            "humanEdge": "L'adaptabilité aux irrégularités du terrain et l'art de l'ajustement millimétrique de chaque bloc au mortier."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le maçon est la figure centrale du secteur de la construction informelle et formelle : des milliers de concessions familiales s'érigent brique par brique à Dakar, Touba et Thiès grâce aux maîtres maçons qui fabriquent souvent eux-mêmes leurs briques de ciment sur place.",
            "localSectors": ["Entreprises de bâtiment de Dakar", "Chantiers résidentiels privés des régions", "Coopératives d'habitat"],
            "remoteWork": "Non compatible (100% physique sur le chantier).",
            "entrepreneurship": "Création d'une entreprise artisanale de maçonnerie et d'une unité de fabrication de briques en béton ou briques de terre compressée (BTC)."
        },
        "relatedJobSlugs": ["coffreur-bancheur", "chef-de-chantier", "carreleur", "charpentier"],
        "connectedFamilies": ["artisanat-metiers-dart", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Témoignage d'Olivier, apprenti maçon — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/macon-le-temoignage-dolivier-apprenti.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "CAPEB — Confédération de l'Artisanat et des Petites Entreprises du Bâtiment", "url": "https://www.capeb.fr/", "source": "CAPEB"}
        ],
        "sources": ["L'Étudiant", "CAPEB", "Compagnons du Devoir"],
        "interests": ["construire-fabriquer", "sport-plein-air", "technique-outils"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Un maçon qualifié pose en moyenne entre 400 et 600 parpaings par jour de travail, ce qui représente la manipulation manuelle de près de 10 tonnes de matériaux !",
            "pourquoi": "Grâce aux techniques d'ergonomie et à la précision du geste, il économise ses mouvements pour préserver son corps.",
            "a_retenir": "L'artisan fondamental sans lequel aucun bâtiment ne peut tenir debout."
        }
    },

    # -----------------------------------------------------------------------
    # 13. COFFREUR-BANCHEUR
    # -----------------------------------------------------------------------
    {
        "id": "coffreur-bancheur",
        "slug": "coffreur-bancheur",
        "title": "Coffreur-Bancheur",
        "aliases": ["Coffreur béton armé", "Bancheur de gros œuvre", "Monteur de coffrages industriels"],
        "icon": "🏗️",
        "image": "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Gros Œuvre, Maçonnerie & Béton",
        "domainId": "gros-oeuvre-maconnerie",
        "subdomain": "Coffrage industriel, Banches & Béton armé",
        "sectors": ["BTP", "Gros Œuvre", "Béton"],
        "sourceEtudiant": True,
        "isEmerging": False,
        "level": "CAP Coffreur-Bancheur à Bac Pro BTP",
        "salary": "🇫🇷 France : 1 900 - 3 100 € net/mois (~27 000 - 44 000 € brut/an + primes d'intempéries, Source : L'Étudiant) • 🇸🇳 Sénégal : 200 000 - 750 000 FCFA / mois (Grands chantiers de tours et viaducs, Eiffage Sénégal, CSE)",
        "simpleDefinition": "Le coffreur-bancheur assemble des moules en métal (les banches) ou en bois dans lesquels il installe les armatures d'acier, puis coule le béton liquide qui, en durcissant, formera les murs, dalles et piliers massifs des grands bâtiments.",
        "shortDescription": "Spécialiste du béton armé moderne cité par L'Étudiant, il manie des coffrages de plusieurs tonnes avec l'aide de la grue pour façonner les gratte-ciels et ponts.",
        "longDescription": "Comme décrit dans les métiers de gros œuvre de L'Étudiant, le coffreur-bancheur intervient principalement sur les chantiers de logements collectifs, d'ouvrages d'art et d'immeubles tertiaires. Il monte, stabilise et huile les grands panneaux de coffrage métalliques (banches). Il positionne méticuleusement les cages d'armatures en acier et les réservations de fenêtres et de tuyaux. Une fois le béton coulé et vibré à l'aiguille pour chasser les bulles d'air, il procède au décoffrage dès le lendemain matin, révélant un mur parfaitement lisse et résistant.",
        "mainObjective": "Fabriquer des moules étanches et sécurisés pour couler des ouvrages en béton armé conformes aux cotes et sans bulles d'air.",
        "companyRole": "Moteur de l'élévation des structures en béton armé des grands chantiers modernes.",
        "workEnvironment": [
            "🏗️ Grands chantiers de construction d'immeubles, de ponts et d'usines",
            "🌤️ Travail en hauteur sur plates-formes de travail en encorbellement (PTE)",
            "👥 Synchronisation permanente par gestes et radio avec le grutier"
        ],
        "missions": [
            "Positionner et caler les banches métalliques à l'aide de la grue et régler l'aplomb au vérin",
            "Huiler les parois de coffrage pour faciliter le démoulage ultérieur sans arrachement",
            "Installer les armatures métalliques en respectant l'enrobage minimal requis pour la durabilité",
            "Guider la benne à béton de la grue et couler le béton de manière homogène",
            "Vibrer le béton à l'aide d'aiguilles vibrantes pour éliminer les poches d'air et garantir la résistance"
        ],
        "typicalDay": [
            {"time": "07:30", "title": "Décoffrage des voiles de la veille", "desc": "Retrait des tiges de banches, recul des panneaux métalliques à la grue et inspection de l'aspect de surface du béton."},
            {"time": "10:00", "title": "Ferraillage et mise en place des mannequins", "desc": "Pose de la cage d'armatures du mur suivant et fixation des cadres bois réservant les baies de fenêtres."},
            {"time": "13:30", "title": "Fermeture et calage de la banche", "desc": "Rapprochement de la banche opposée, serrage des tiges d'écartement et réglage de la verticalité au fil à plomb."},
            {"time": "15:30", "title": "Coulage et vibration du béton", "desc": "Réception du camion toupie, remplissage de la banche par passes de 50 cm et vibration méthodique."}
        ],
        "skills": {
            "technical": [
                "Techniques de coffrage traditionnel bois et de coffrage outil métallique (banches)",
                "Pression hydrostatique du béton frais et dimensionnement du contreventement",
                "Maniement de l'aiguille vibrante et techniques de ragréage de surface",
                "Règles strictes de sécurité du travail en hauteur et d'élingage sous grue"
            ],
            "human": [
                "Esprit d'équipe soudé et vigilance permanente pour la sécurité collective",
                "Endurance physique et dextérité dans le maniement des outils",
                "Sens aigu du timing (le béton frais n'attend pas pour prendre)"
            ],
            "tools": [
                "Banches métalliques modulaires (Outinord, Sateco, Peri)",
                "Aiguilles vibrantes électriques ou thermiques à béton",
                "Tiges de serrage, écrous papillons et huile de décoffrage",
                "Élingues de levage, chaînes et talkies-walkies grue"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "CAP (2 ans)", "title": "CAP Constructeur en Béton Armé du Bâtiment (Coffreur-Bancheur)", "desc": "Apprentissage des techniques de coffrage, de ferraillage et de coulage en alternance."},
                {"step": "Bac Pro (3 ans)", "title": "Bac Pro Technicien du Bâtiment (Gros Œuvre)", "desc": "Formation approfondie ouvrant rapidement sur les fonctions de chef d'équipe bancheur."},
                {"step": "Titre Professionnel", "title": "Titre Professionnel de Coffreur-Bancheur (AFPA)", "desc": "Reconversion accélérée pour adultes très demandée par les majors du BTP."}
            ],
            "schools": [
                {"name": "CFA du Bâtiment spécialisés en gros œuvre — France", "country": "France", "scope": "France"},
                {"name": "Centres AFPA BTP — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["CACES R487 Grue (élingage et commandement)", "CQP Coffreur-Bancheur haute technicité", "Attestation de travail en hauteur et port du harnais"],
            "schoolSubjects": ["Lecture de plans de coffrage", "Technologie du béton et des adjuvants", "Sécurité de levage", "Métrés gros œuvre"]
        },
        "career": {
            "sectors": ["Grandes entreprises générales de construction (Vinci, Bouygues, Eiffage)", "Entreprises de gros œuvre spécialisées en logements collectifs", "Entreprises de génie civil et d'ouvrages d'art"],
            "employerTypes": ["Majors du BTP", "Grandes entreprises de béton armé", "Entreprises de préfabrication"],
            "evolution": "Coffreur débutant ➔ Coffreur-bancheur qualifié ➔ Chef d'équipe bancheurs ➔ Chef de chantier béton armé",
            "pros": "Poste au cœur des grands chantiers modernes prestigieux, rémunération valorisée avec nombreuses primes, travail en équipe solidaire.",
            "cons": "Travail en hauteur exposé au vent et au froid, manipulation de matériel lourd."
        },
        "gettingStarted": {
            "beginnerProject": "Observer les grandes banches métalliques jaunes ou bleues sur les chantiers de tours en ville.",
            "intermediateProject": "Fabriquer un petit coffrage en bois démontable avec serre-joints pour couler un plot en béton.",
            "advancedProject": "Calculer la poussée latérale exercée par 3 mètres de béton liquide sur une paroi de banche.",
            "portfolioIdeas": ["Photos d'un voile en béton décoffré avec fini lisse parfait", "Attestation de stage sur un chantier d'immeuble R+5"]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "L'élingage des banches, la vérification manuelle du serrage des tiges et le guidage de la benne de béton restent le domaine irremplaçable des ouvriers qualifiés.",
            "automatedTasks": ["Capteurs connectés intégrés dans le béton pour mesurer la vitesse de prise en temps réel", "Optimisation du planning de rotation des banches par algorithme"],
            "emergingSkills": ["Utilisation de capteurs de maturité du béton pour décoffrer au moment exact sans risque"],
            "humanEdge": "La coordination millimétrée entre le coffreur au sol et le grutier à 50 mètres de hauteur."
        },
        "africaContext": {
            "senegalInsight": "Sur les grands chantiers sénégalais modernes (tours de la Cité ministérielle de Diamniadio, piliers du pont de Foundiougne, viaduc du BRT à Dakar), les coffreurs-bancheurs manient des coffrages grimpants et glissants ultra-modernes pour faire monter les édifices à un rythme impressionnant d'un étage par semaine.",
            "localSectors": ["Grands chantiers de génie civil (Eiffage Sénégal, CSE, Sogea-Satom)", "Chantiers de tours à Dakar-Plateau et Almadies", "Projets d'infrastructures de transport"],
            "remoteWork": "Non compatible (100% terrain sur le chantier).",
            "entrepreneurship": "Création d'une entreprise sous-traitante spécialisée dans le coffrage et le coulage de voiles béton pour les promoteurs."
        },
        "relatedJobSlugs": ["macon", "grutier", "chef-de-chantier", "conducteur-de-travaux"],
        "connectedFamilies": ["industrie-mecanique", "btp-architecture"],
        "resources": [
            {"type": "fiche", "title": "Fiche métier Coffreur — L'Étudiant", "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics.html", "source": "L'Étudiant"},
            {"type": "portail", "title": "FFB — Fédération Française du Bâtiment", "url": "https://www.ffbatiment.fr/", "source": "FFB"}
        ],
        "sources": ["L'Étudiant", "FFB", "FNTP"],
        "interests": ["construire-fabriquer", "sport-plein-air", "technique-outils"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Le béton liquide exerce une pression phénoménale pouvant dépasser 8 tonnes par mètre carré sur le bas d'une banche de 3 mètres de haut.",
            "pourquoi": "Si une seule tige de serrage n'est pas correctement verrouillée par le coffreur, la banche peut s'ouvrir brutalement sous le poids du béton !",
            "a_retenir": "Le sculpteur de béton liquide qui donne forme à la ville moderne."
        }
    }
]

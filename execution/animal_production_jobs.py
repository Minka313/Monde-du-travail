# execution/animal_production_jobs.py
# Fiches Métiers Dérivées de la Source Officielle Groupe ESA (École Supérieure des Agricultures d'Angers)
# & Contextualisées pour Le Monde du Travail
# 22 Fiches Métiers Haute Profondeur pour la Production Animale, l'Élevage et les Filières Animales

ANIMAL_PRODUCTION_JOBS_PART1 = [
    # -----------------------------------------------------------------------
    # 1. ÉLEVEUR / ÉLEVEUSE — CONDUITE D'ÉLEVAGE & POLYPRODUCTION
    # -----------------------------------------------------------------------
    {
        "id": "eleveur",
        "slug": "eleveur",
        "title": "Éleveur / Éleveuse — Conduite d'Élevage & Polyproduction",
        "aliases": ["Éleveuse professionnelle", "Conducteur d'élevage", "Agriculteur-éleveur", "Chef d'atelier d'élevage"],
        "icon": "🐄",
        "image": "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Animale, Élevage & Filières",
        "domainId": "elevage-productions-animales",
        "subdomain": "Élevage & conduite des animaux",
        "sourceESA": True,
        "isEmerging": False,
        "level": "Bac Pro Agricole (CGEA) ou BTS Métiers de l'élevage (Productions Animales)",
        "salary": "🇫🇷 France : 1 800 - 3 400 € net/mois selon taille du cheptel et statut (Source : Référentiel Élevage / ESA) • 🇸🇳 Sénégal : 250 000 - 1 200 000 FCFA / mois (Fermes d'embouche bovine et laitière, Niayes / Dahra)",
        "simpleDefinition": "L'éleveur veille au quotidien à la santé, à l'alimentation, à la reproduction et au bien-être des animaux de la ferme (bovins, ovins, caprins, porcins ou volailles), tout en entretenant les pâtures et les bâtiments.",
        "shortDescription": "Métier socle documenté par le Groupe ESA (BTS Métiers de l'élevage), il combine passion du vivant, rigueur zootechnique, gestion économique et respect des normes environnementales.",
        "longDescription": "L'éleveur assure la conduite globale des animaux dont il a la charge : alimentation équilibrée, suivi de la croissance, soins quotidiens, surveillance des vêlages/mises bas et entretien des locaux et des pâturages. Comme le souligne le Groupe ESA dans son programme de BTS Métiers de l'élevage, l'éleveur moderne pilote un système d'élevage complexe intégrant autonomie fourragère, transition agroécologique, santé globale du troupeau et valorisation commerciale des productions (lait, viande, laine, fumier composté).",
        "mainObjective": "Assurer la prospérité et le bien-être du troupeau tout en garantissant une production saine, durable et économiquement viable.",
        "companyRole": "Gestionnaire du vivant, premier maillon et garant de la qualité de la chaîne alimentaire.",
        "species": ["Bovins lait", "Bovins viande", "Ovins", "Caprins", "Porcins", "Volailles"],
        "workEnvironment": [
            "🏡 Exploitation agricole, étables, stabulations libres, bergerie ou porcherie",
            "🌿 Pâturages, prairies permanentes et parcelles de culture fourragère",
            "🚜 Tracteurs, pailleuses, mélangeuses et salles/robots de traite connectés"
        ],
        "missions": [
            "Distribuer les rations alimentaires adaptées aux stades physiologiques des bêtes (gestation, lactation, engraissement)",
            "Observer quotidiennement le comportement des animaux, détecter les signes précoces de maladie et prodiguer les premiers soins",
            "Planifier et conduire la reproduction (choix des reproducteurs, insémination, suivi des naissances)",
            "Entretenir les bâtiments d'élevage (paillage, curage, désinfection) et gérer les clôtures et pâturages tournants",
            "Piloter la gestion technico-économique de l'exploitation et commercialiser les animaux ou le lait auprès des coopératives"
        ],
        "typicalDay": [
            {"time": "06:00", "title": "Tournée matinale et traite / alimentation", "desc": "Contrôle des box, traite des vaches ou chèvres et distribution du foin et des compléments minéraux."},
            {"time": "09:30", "title": "Soins vétérinaires et surveillance reproduction", "desc": "Vérification des chaleurs, inséminations prévues, soins aux nouveau-nés et désinfection du cordon ombilical."},
            {"time": "14:00", "title": "Travaux de plaine et entretien des clôtures", "desc": "Déplacement des fils du pâturage tournant, vérification des abreuvoirs et entretien mécanique du matériel."},
            {"time": "17:30", "title": "Deuxième traite et saisie du carnet sanitaire", "desc": "Traite du soir, alimentation du cheptel et enregistrement informatique des mouvements d'animaux."}
        ],
        "skills": {
            "technical": [
                "Zootechnie approfondie (nutrition, physiologie de la rumination, reproduction animale)",
                "Conduite et entretien du machinisme agricole d'élevage (mélangeuses, pailleuses)",
                "Normes d'hygiène de la traite et de biosécurité des bâtiments",
                "Gestion des prairies et calcul de chargement à l'hectare",
                "Gestion administrative et tenue du registre d'élevage réglementaire"
            ],
            "human": [
                "Patience et sang-froid face aux réactions imprévisibles des grands animaux",
                "Endurance physique et grande résistance aux rythmes soutenus du calendrier d'élevage",
                "Sens aigu de l'observation et empathie envers le bien-être animal",
                "Rigueur et sens de l'anticipation face aux aléas climatiques"
            ],
            "tools": [
                "Robots et stalles de traite automatisés (DeLaval, Lely)",
                "Colliers et boucles RFID connectés de détection des chaleurs et de rumination",
                "Logiciels de gestion de troupeau et de carnet sanitaire",
                "Tracteurs équipés de chargeurs frontaux et dérouleuses de balles"
            ],
            "analytical": [
                "Calcul du coût de revient au litre de lait ou au kilogramme de carcasse",
                "Évaluation de la note d'état corporel (NEC) des animaux"
            ]
        },
        "specializations": ["Élevage bovin laitier haute performance", "Élevage allaitant bovin charolais/limousin", "Élevage caprin avec transformation fromagère fermière", "Élevage ovin plein air pastoral"],
        "studies": {
            "pathway": [
                {"step": "Diplôme professionnel", "title": "Bac Pro CGEA (Conduite et Gestion de l'Entreprise Agricole)", "desc": "Acquisition des bases de la zootechnie, de l'agronomie et de la conduite des engins."},
                {"step": "Formation supérieure clé", "title": "BTS Métiers de l'élevage (Productions Animales) — Groupe ESA", "desc": "Formation de 2 ans formant au pilotage d'un système d'élevage et à l'accompagnement du changement."},
                {"step": "Spécialisation / Perfectionnement", "title": "Licence Pro Métiers du Conseil en Élevage ou Installation DJA", "desc": "Préparation à l'installation en tant que chef d'exploitation indépendant ou conseiller."}
            ],
            "schools": [
                {"name": "Groupe ESA (École Supérieure des Agricultures) — Angers, France", "country": "France", "scope": "France"},
                {"name": "Lycées agricoles partenaires de l'enseignement supérieur agricole — France", "country": "France", "scope": "France"},
                {"name": "Institut Supérieur de Formation Agricole et Rurale (ISFAR Bambey) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Centre de Recherches Zootechniques de Dahra (ISRA CRZ) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat de Capacité Animaux Domestiques", "Certificat d'Aptitude au Transport d'Animaux Vivants (CAPTAV)", "Certiphyto"],
            "schoolSubjects": ["Biologie animale", "Agronomie fourragère", "Gestion d'entreprise", "Santé animale"]
        },
        "career": {
            "sectors": ["Exploitations d'élevage familial ou sociétaire (GAEC, SCEA)", "Fermes expérimentales et conservatoires de races rustiques", "Grandes unités d'embouche ou d'élevage laitier"],
            "employerTypes": ["Chef d'exploitation agricole indépendant", "Salarié qualifié d'élevage / Second d'exploitation"],
            "evolution": "Salarié agricole d'élevage ➔ Chef d'atelier élevage ➔ Associé en GAEC ➔ Responsable d'exploitation agricole autonome ➔ Administrateur de coopérative",
            "pros": "Contact quotidien gratifiant avec les animaux, indépendance au travail, participation directe à la souveraineté alimentaire.",
            "cons": "Astreinte 365 jours par an pour la traite et les soins, forte sensibilité aux cours des matières premières et aux épizooties."
        },
        "gettingStarted": {
            "beginnerProject": "Effectuer un stage d'immersion de 2 semaines sur une ferme laitière ou allaitante pendant la période des naissances.",
            "intermediateProject": "Participer à la notation de l'état corporel d'un lot de 30 génisses et ajuster la ration fourragère.",
            "advancedProject": "Élaborer le plan prévisionnel de transition vers un système de pâturage tournant dynamique pour 50 vaches.",
            "portfolioIdeas": ["Journal de bord de suivi d'une saison de vêlage", "Tableau de bord de calcul de la marge alimentaire d'un troupeau"]
        },
        "aiImpact": {
            "level": "Modéré à Élevé",
            "summary": "L'IA transforme l'élevage via les capteurs biométriques (détection prédictive des boiteries, des mammites et du stress thermique), mais l'œil de l'éleveur reste irremplaçable.",
            "automatedTasks": ["Enregistrement automatique des volumes de traite et de la conductivité du lait", "Pesée automatique au passage des animaux sur balance connectée"],
            "emergingSkills": ["Interprétation des flux de données des colliers connectés", "Pilotage d'outils d'optimisation de l'empreinte carbone de l'élevage"],
            "humanEdge": "L'instinct et le sens relationnel pour rassurer un animal malade, l'assistance physique aux vêlages délicats et l'amour du cheptel."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'élevage représente plus de 28% de la valeur ajoutée du secteur primaire. Des bassins comme Dahra-Djoloff, Kolda et les fermes intensives des Niayes combinent pastoralisme traditionnel et fermes laitières modernes soutenues par le LNERV/ISRA.",
            "localSectors": ["Fermes d'embouche bovine et ovine (Tabaski)", "Réseaux de collecte laitière pastorale (Laiterie du Berger à Richard-Toll)", "Aviculture semi-industrielle des Niayes"],
            "remoteWork": "Totalement impossible, présence physique requise auprès des bêtes.",
            "entrepreneurship": "Création d'une unité d'embouche bovine avec production de fourrage irrigué (maralfalfa) pour valoriser les sous-produits agro-industriels locaux."
        },
        "relatedJobSlugs": ["responsable-elevage", "technicien-conseil-elevage", "responsable-collecte-laitiere", "ingenieur-production-animale"],
        "connectedFamilies": ["environnement-climat", "sante-biomedical", "artisanat-metiers-dart"],
        "resources": [
            {"type": "formation", "title": "BTS Métiers de l'élevage — Groupe ESA", "url": "https://www.groupe-esa.com/formation/bts-production-animales/", "source": "Groupe ESA"},
            {"type": "article", "title": "Les métiers de la production animale — Groupe ESA", "url": "https://www.groupe-esa.com/productions-animales/les-metiers-de-la-production-animale/", "source": "Groupe ESA"}
        ],
        "sources": ["Groupe ESA", "BTS Métiers de l'élevage ESA", "Chambres d'Agriculture France", "ISRA CRZ Dahra"],
        "interests": ["nature-environnement", "construire-fabriquer"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon les données de l'enseignement agricole et du Groupe ESA, plus de 50% des chefs d'exploitation d'élevage atteindront l'âge de la retraite d'ici 2030, ouvrant des opportunités sans précédent pour la relève.",
            "pourquoi": "L'automatisation et la numérisation des étables réduisent la pénibilité physique tout en offrant une meilleure qualité de vie aux nouvelles générations d'éleveurs.",
            "a_retenir": "Un métier noble et moderne où l'on est à la fois biologiste, chef d'entreprise et gardien des paysages ruraux."
        }
    },

    # -----------------------------------------------------------------------
    # 2. TECHNICIEN DE CENTRE D'ALLOTEMENT DE BÉTAIL
    # -----------------------------------------------------------------------
    {
        "id": "technicien-centre-allotement",
        "slug": "technicien-centre-allotement",
        "title": "Technicien de Centre d'Allotement de Bétail",
        "aliases": ["Responsable de centre d'allotement", "Alloteur de bétail", "Technicien de tri et groupement bovin/ovin"],
        "icon": "🐂",
        "image": "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Animale, Élevage & Filières",
        "domainId": "elevage-productions-animales",
        "subdomain": "Filière viande & allotement",
        "sourceESA": True,
        "isEmerging": False,
        "level": "Bac Pro Agricole ou BTS Métiers de l'élevage (Productions Animales)",
        "salary": "🇫🇷 France : 1 900 - 2 900 € net/mois (Source : Groupe ESA / Coopératives de bétail) • 🇸🇳 Sénégal : 220 000 - 800 000 FCFA / mois (Foirails et centres de regroupement pastoral, Dahra / Touba)",
        "simpleDefinition": "Le technicien de centre d'allotement réceptionne, trie et regroupe les animaux d'élevage par lots homogènes selon leur race, poids, conformation et statut sanitaire en vue de leur engraissement ou abattage.",
        "shortDescription": "Fiche documentée par le Groupe ESA, ce spécialiste assure le maillon clé entre les fermes d'élevage naisseurs et les filières aval d'engraissement et de viande.",
        "longDescription": "Véritable pivot logistique et zootechnique de la filière viande, le technicien de centre d'allotement accueille les animaux provenant de dizaines d'élevages différents. Comme documenté sur la page officielle du Groupe ESA, ce métier exige un excellent sens relationnel avec les éleveurs, le sens du travail d'équipe et de la persuasion. Il contrôle la conformité des passeports et de la traçabilité sanitaire, pèse les animaux, évalue leur conformation musculaire et compose des lots rigoureusement homogènes pour répondre aux exigences des engraisseurs ou des abattoirs.",
        "mainObjective": "Garantir un tri rapide, sécurisé et sans stress du bétail pour constituer des lots commerciaux homogènes conformes aux cahiers des charges.",
        "companyRole": "Régulateur de flux, garant de la conformité zootechnique et sanitaire lors des transferts d'animaux.",
        "species": ["Bovins viande (broutards, taurillons)", "Ovins (agneaux)", "Veaux d'élevage"],
        "workEnvironment": [
            "🏢 Centres d'allotement régionaux, quais de déchargement et parcs de contention",
            "🚛 Camions bétaillères climatisés et zones de pesée automatisées",
            "📋 Bureaux de gestion logistique et systèmes informatiques d'identification bovine (BDNI)"
        ],
        "missions": [
            "Réceptionner les animaux arrivant des élevages naisseurs et vérifier la stricte conformité sanitaire et réglementaire",
            "Évaluer la race, le gabarit, l'état d'engraissement et la conformation musculaire des bovins ou ovins",
            "Trier et alloter les bêtes dans les parcs de stabulation en lots harmonieux prêts pour l'export ou l'engraissement",
            "Veiller au bien-être des animaux en transit (abreuvement, repos, alimentation légère, absence de stress)",
            "Organiser les plannings de départ avec les transporteurs bétaillères et les acheteurs"
        ],
        "typicalDay": [
            {"time": "05:30", "title": "Réception des bétaillères et contrôle sanitaire", "desc": "Déchargement sécurisé des broutards, vérification des boucles auriculaires et examen vétérinaire d'admission."},
            {"time": "08:30", "title": "Pesée officielle et tri par lots", "desc": "Passage des animaux sur la bascule électronique et aiguillage vers les parcs selon le poids et le type racial."},
            {"time": "12:00", "title": "Soins et abreuvement du cheptel en transit", "desc": "Distribution de paille fraîche, vérification des abreuvoirs automatiques et surveillance comportementale."},
            {"time": "15:00", "title": "Allotement final et expédition", "desc": "Édition des bons de transport, chargement méthodique des camions à destination des centres d'engraissement."}
        ],
        "skills": {
            "technical": [
                "Typologie et grille de classement des carcasses et animaux vifs (grille EUROP)",
                "Techniques de contention sans violence et manipulation respectueuse des animaux",
                "Réglementation sur la traçabilité animale (boucles RFID, passeports, certificats sanitaires)",
                "Normes de biosécurité et désinfection des quais de chargement"
            ],
            "human": [
                "Sens aigu du relationnel et esprit de persuasion (documenté par le Groupe ESA)",
                "Goût affirmé pour le travail d'équipe avec les chauffeurs et les éleveurs",
                "Réactivité et vigilance permanente face aux mouvements brusques des animaux",
                "Calme et sang-froid dans les parcs de contention"
            ],
            "tools": [
                "Systèmes de contention hydrauliques et couloirs anti-recul",
                "Lecteurs électroniques de boucles RFID",
                "Bascules et ponts-bascules connectés",
                "Logiciels de gestion des flux d'allotement"
            ],
            "analytical": [
                "Estimation instantanée du poids vif et du rendement carcasse à l'œil",
                "Optimisation du taux de remplissage des camions et du confort de transport"
            ]
        },
        "specializations": ["Allotement de broutards maigres pour engraissement", "Allotement d'agneaux de boucherie", "Gestion de centres de quarantaine export", "Logistique sanitaire des foirails"],
        "studies": {
            "pathway": [
                {"step": "Formation initiale", "title": "Bac Pro CGEA ou BTS Métiers de l'élevage — Groupe ESA", "desc": "Maîtrise de la zootechnie des filières herbivores et de la conduite des animaux."},
                {"step": "Certification d'aptitude", "title": "Certificat de compétence au transport des animaux vivants (CAPTAV)", "desc": "Agrément officiel garantissant le respect de la réglementation sur le bien-être animal."},
                {"step": "Spécialisation", "title": "Formation continue en classement des animaux de boucherie", "desc": "Perfectionnement sur les grilles de conformation musculaire."}
            ],
            "schools": [
                {"name": "Groupe ESA — Angers, France", "country": "France", "scope": "France"},
                {"name": "Lycées d'enseignement agricole spécialisés élevage — France", "country": "France", "scope": "France"},
                {"name": "Centre de Recherches Zootechniques de Dahra — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["CAPTAV", "Habilitation à la manipulation des animaux en centre de rassemblement"],
            "schoolSubjects": ["Zootechnie", "Bien-être animal", "Logistique commerciale", "Réglementation sanitaire"]
        },
        "career": {
            "sectors": ["Coopératives d'élevage et groupements de producteurs bovins/ovins", "Négociants en bestiaux et entreprises de commerce d'animaux vivants", "Centres de rassemblement agréés pour l'exportation"],
            "employerTypes": ["Coopératives agricoles de commercialisation de bétail", "Entreprises privées de négoce de bestiaux"],
            "evolution": "Technicien d'allotement ➔ Responsable de centre d'allotement ➔ Acheteur-estimateur de bétail ➔ Directeur logistique bétail vif",
            "pros": "Métier dynamique très concret, au carrefour du monde agricole et du commerce, diversité des races manipulées.",
            "cons": "Exposition aux intempéries sur les quais, horaires très matinaux, vigilance physique constante face aux bêtes nerveuses."
        },
        "gettingStarted": {
            "beginnerProject": "Visiter un centre de tri coopératif un jour d'allotement de broutards pour comprendre la gestuelle de guidage.",
            "intermediateProject": "S'entraîner à la lecture rapide des boucles et à la saisie de passeports sans erreur sur un lot de 20 veaux.",
            "advancedProject": "Proposer un plan de réaménagement d'un couloir de contention pour réduire les hésitations des animaux selon les principes de Temple Grandin.",
            "portfolioIdeas": ["Schéma d'optimisation des flux d'animaux dans un centre de transit", "Grille synthétique d'estimation du poids vif"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'imagerie 3D et le scan optique commencent à estimer automatiquement le poids et la conformation, mais le tri physique et la maîtrise des bêtes restent manuels.",
            "automatedTasks": ["Lecture automatique des identifiants électroniques au passage sous portique", "Enregistrement dématérialisé des déclarations de mouvements"],
            "emergingSkills": ["Utilisation des caméras d'analyse morphologique assistées par ordinateur"],
            "humanEdge": "Le doigté et la compréhension du comportement grégaire des animaux pour les déplacer en douceur sans stress."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les foirails de Dahra, Touba, Tambacounda et Dakar (Gouye Fatma) constituent des centres névralgiques où transitent chaque semaine des dizaines de milliers de bovins et moutons. L'organisation de parcs de stabulation modernes et le suivi sanitaire sont des priorités de l'État.",
            "localSectors": ["Grands foirails nationaux et régionaux", "Centres d'appui à l'élevage pastoral (PRAPS)", "Opérateurs d'importation de bétail mauritanien et malien"],
            "remoteWork": "Strictement impossible sur le terrain.",
            "entrepreneurship": "Création d'un centre privé d'allotement et d'embouche intermédiaire sécurisé pour le ravitaillement régulier des boucheries dakaroises."
        },
        "relatedJobSlugs": ["eleveur", "acheteur-estimateur-betail", "responsable-elevage", "inspecteur-sanitaire"],
        "connectedFamilies": ["transport-logistique", "commerce-marketing", "sante-biomedical"],
        "resources": [
            {"type": "article", "title": "Technicien centre d'allotement — Groupe ESA", "url": "https://www.groupe-esa.com/productions-animales/les-metiers-de-la-production-animale/#technicien-centre-dallotement", "source": "Groupe ESA"}
        ],
        "sources": ["Groupe ESA", "Guide des métiers ESA", "Fédération Nationale du Cheval et du Bétail"],
        "interests": ["nature-environnement", "negocier-convaincre"],
        "documentaryNote": "Sur la page source du Groupe ESA, le paragraphe introductif rappelle la filiation avec l'élevage ('Un éleveur veille à la santé...'). La fiche intègre cette filiation tout en détaillant l'expertise propre au centre d'allotement (tri, pesée, constitution des lots et logistique bétaillère).",
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Dans un centre d'allotement moderne, plusieurs centaines de jeunes bovins sont triés en quelques heures pour composer des lots présentant moins de 15 kg d'écart de poids entre individus.",
            "pourquoi": "L'homogénéité parfaite des lots est la condition essentielle pour que les animaux mangent à la même vitesse et terminent leur engraissement au même moment.",
            "a_retenir": "Un maillon stratégique où l'œil de l'expert assure l'équilibre économique de toute la filière viande."
        }
    },

    # -----------------------------------------------------------------------
    # 3. RESPONSABLE COLLECTE LAITIÈRE
    # -----------------------------------------------------------------------
    {
        "id": "responsable-collecte-laitiere",
        "slug": "responsable-collecte-laitiere",
        "title": "Responsable de la Collecte Laitière",
        "aliases": ["Chef du service collecte lait", "Responsable approvisionnement laitier", "Coordinateur collecte laiterie"],
        "icon": "🥛",
        "image": "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Animale, Élevage & Filières",
        "domainId": "elevage-productions-animales",
        "subdomain": "Filière lait & collecte",
        "sourceESA": True,
        "isEmerging": False,
        "level": "BTS Métiers de l'élevage (Productions Animales) ou Ingénieur agronome ESA",
        "salary": "🇫🇷 France : 2 500 - 4 200 € net/mois (~35 000 - 55 000 € brut/an, Source : Groupe ESA / Industries Laitières) • 🇸🇳 Sénégal : 400 000 - 1 500 000 FCFA / mois (Laiteries industrielles, unités de pasteurisation, Richard-Toll / Dakar)",
        "simpleDefinition": "Le responsable de la collecte laitière dirige le service qui collecte le lait cru dans les fermes et gère les relations de partenariat et de qualité avec les producteurs approvisionnant l'usine.",
        "shortDescription": "Fiche officielle du Groupe ESA, il pilote la chaîne d'approvisionnement en lait : gestion des chauffeurs, relations producteurs, qualité sanitaire et optimisation des tournées.",
        "longDescription": "Comme documenté précisément par le Groupe ESA, ce professionnel est responsable du service collectant la matière première (le lait) et des relations avec les producteurs de lait qui approvisionnent l'usine. Ses compétences clés reposent sur la négociation, la persuasion, le management d'équipe et la recherche constante de l'excellence en qualité. Il coordonne les flottes de camions-citernes isothermes, garantit le maintien de la chaîne du froid à 4°C et analyse les résultats de composition du lait (matière grasse, protéique, germes) pour accompagner les éleveurs vers les standards industriels.",
        "mainObjective": "Assurer un approvisionnement continu, fluide et d'une qualité bactériologique irréprochable de l'usine laitière tout en maintenant des relations de confiance durable avec les éleveurs.",
        "companyRole": "Pont stratégique entre les producteurs fermiers et l'outil industriel de transformation laitière.",
        "species": ["Bovins lait", "Caprins lait", "Ovins lait"],
        "workEnvironment": [
            "🏭 Usines laitières, beurreries, fromageries et coopératives de transformation",
            "🚛 Flottes de camions-citernes de ramassage laitier et stations de dépotage",
            "🐮 Visites régulières dans les fermes laitières du bassin de collecte"
        ],
        "missions": [
            "Superviser et manager l'équipe des chauffeurs-ramasseurs de lait et organiser les plannings de tournées 24h/24",
            "Entretenir et développer la relation de confiance avec le réseau des éleveurs livreurs de lait de la laiterie",
            "Négocier et faire appliquer les contrats d'approvisionnement et les grilles de paiement du lait à la qualité",
            "Contrôler scrupuleusement la matière première collectée (température, absence d'antibiotiques, cellules somatiques)",
            "Optimiser les itinéraires de ramassage par géolocalisation pour réduire l'empreinte carbone du transport"
        ],
        "typicalDay": [
            {"time": "07:00", "title": "Bilan des réceptions nocturnes et contrôle qualité", "desc": "Vérification des volumes dépotés la nuit, analyse des alertes d'acidité ou d'inhibiteurs avec le laboratoire d'usine."},
            {"time": "09:30", "title": "Optimisation des tournées avec les chauffeurs", "desc": "Ajustement des plans de ramassage en fonction des pics de lactation printaniers ou des intempéries."},
            {"time": "14:00", "title": "Visite d'un éleveur sociétaire", "desc": "Rencontre avec un producteur pour analyser une dérive temporaire du taux cellulaire et proposer des pistes d'amélioration."},
            {"time": "17:00", "title": "Synthèse approvisionnement et réunion industrielle", "desc": "Point avec le directeur d'usine sur les volumes hebdomadaires prévus pour les ateliers yaourt et fromage."}
        ],
        "skills": {
            "technical": [
                "Technologies du lait et microbiologie laitière (chaîne du froid, germes, pasteurisation)",
                "Logistique de collecte en flux tendu et optimisation de tournées sous contraintes horaires",
                "Réglementation sur le paiement du lait à la qualité (taux protéique, matière grasse)",
                "Normes d'hygiène HACCP applicables au transport des denrées périssables"
            ],
            "human": [
                "Sens aigu de la négociation et de la persuasion (documenté explicitement par l'ESA)",
                "Excellente capacité de management et de leadership auprès des équipes de collecte",
                "Diplomatie et sens de l'écoute dans la gestion des litiges avec les agriculteurs",
                "Calme et réactivité en situation de crise (blocage de route, cuve polluée)"
            ],
            "tools": [
                "Logiciels de modélisation et d'optimisation de tournées de collecte (RouteFinder, PTV)",
                "Systèmes d'échantillonnage automatisé embarqué sur camion-citerne",
                "Outils de télérelève de niveau de tank à lait en ferme (IoT)",
                "ERP de gestion des approvisionnements laitiers (SAP, AgroVisi)"
            ],
            "analytical": [
                "Analyse des coûts de collecte au millier de litres et suivi des ratios gasoil/lait",
                "Modélisation saisonnière des courbes de lactation à l'échelle du bassin laitier"
            ]
        },
        "specializations": ["Collecte de lait biologique ou AOP sous cahier des charges strict", "Collecte multi-espèces (vache, chèvre, brebis)", "Direction des approvisionnements d'un groupe fromager"],
        "studies": {
            "pathway": [
                {"step": "Diplôme Bac +2", "title": "BTS Métiers de l'élevage (Productions Animales) — Groupe ESA", "desc": "Compréhension fine des systèmes laitiers et de la zootechnie bovine."},
                {"step": "Licence Pro", "title": "Licence Pro Métiers du Conseil en Élevage ou Logistique Agroalimentaire", "desc": "Maîtrise de la relation producteur et des flux de collecte."},
                {"step": "Diplôme Bac +5", "title": "Diplôme d'Ingénieur Agronome ESA — Majeure Productions Animales", "desc": "Accès direct aux postes de chef de service collecte et directeur d'approvisionnement."}
            ],
            "schools": [
                {"name": "Groupe ESA — Angers, France", "country": "France", "scope": "France"},
                {"name": "Écoles nationales supérieures agronomiques (Institut Agro, VetAgro Sup) — France", "country": "France", "scope": "France"},
                {"name": "École Inter-États des Sciences et Médecine Vétérinaires (EISMV Dakar) — Sénégal", "country": "Sénégal", "scope": "Afrique"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification HACCP Lait", "Auditeur Système Qualité ISO 22000"],
            "schoolSubjects": ["Microbiologie", "Zootechnie laitière", "Logistique", "Négociation commerciale"]
        },
        "career": {
            "sectors": ["Grandes coopératives laitières (Sodiaal, Agrial, Eurial, Laïta)", "Groupes laitiers industriels (Lactalis, Danone, Savencia)", "Fromageries artisanales et laiteries régionales"],
            "employerTypes": ["Industries de transformation laitière", "Coopératives de collecte"],
            "evolution": "Responsable de tournée ➔ Responsable collecte laitière territoriale ➔ Directeur des relations producteurs ➔ Directeur des approvisionnements du groupe",
            "pros": "Poste clé très valorisé au carrefour de l'amont agricole et de l'aval industriel, grande richesse des contacts humains.",
            "cons": "Forte pression liée au caractère ultra-périssable du lait cru, astreintes possibles le week-end en cas de panne de citerne."
        },
        "gettingStarted": {
            "beginnerProject": "Accompagner un chauffeur ramasseur sur une tournée de 8 fermes pour observer la prise d'échantillons et le pompage.",
            "intermediateProject": "Modéliser sur tableur l'impact d'une variation de 10% du prix du gazole sur le coût du litre de lait collecté.",
            "advancedProject": "Concevoir un plan de sensibilisation des éleveurs d'un canton pour réduire les germes totaux dans le lait d'été.",
            "portfolioIdeas": ["Cartographie optimisée d'un circuit de collecte laitière", "Guide des bonnes pratiques de lavage des tanks à lait"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA révolutionne la collecte grâce aux capteurs connectés sur les tanks qui prédisent l'heure exacte où la cuve sera pleine pour déclencher la tournée au moment parfait.",
            "automatedTasks": ["Calcul automatique des tournées dynamiques en temps réel", "Traitement instantané des résultats d'analyses spectrales infrarouges"],
            "emergingSkills": ["Supervision de plateformes prédictives d'approvisionnement laitier"],
            "humanEdge": "La négociation humaine et la diplomatie avec les producteurs lors des renégociations annuelles des contrats de prix."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la collecte laitière en milieu pastoral est une aventure humaine et industrielle remarquable, illustrée par la Laiterie du Berger à Richard-Toll qui collecte quotidiennement le lait auprès de milliers d'éleveurs peuls semi-nomades le long du fleuve Sénégal.",
            "localSectors": ["Unités de transformation laitière locale (Laiterie du Berger, Wayembam)", "Centres de collecte ruraux de Dahra, Kolda et Saint-Louis", "Mini-laiteries féminines artisanales"],
            "remoteWork": "Partiellement hybride (bureau d'optimisation / visites sur le terrain).",
            "entrepreneurship": "Mise en place d'un réseau de collecte laitière à motos équipées de bidons isothermes pour désenclaver les campements pastoraux isolés."
        },
        "relatedJobSlugs": ["eleveur", "responsable-elevage", "coordinateur-qhse-agro", "responsable-achat-approvisionnement-agri"],
        "connectedFamilies": ["transport-logistique", "commerce-marketing", "qualite-securite"],
        "resources": [
            {"type": "article", "title": "Responsable collecte laitière — Groupe ESA", "url": "https://www.groupe-esa.com/productions-animales/les-metiers-de-la-production-animale/#responsable-collecte-laitiere", "source": "Groupe ESA"},
            {"type": "formation", "title": "Ingénieur agronome ESA", "url": "https://www.groupe-esa.com/formation/ingenieur-agronome/", "source": "Groupe ESA"}
        ],
        "sources": ["Groupe ESA", "Fédération Nationale de l'Industrie Laitière (FNIL)", "Cniel"],
        "interests": ["negocier-convaincre", "nature-environnement", "donnees-chiffres"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "En France, un responsable collecte laitière gère en moyenne le ramassage de 50 à 150 millions de litres de lait par an auprès de centaines d'exploitations réparties sur plusieurs départements.",
            "pourquoi": "Le lait frais ne pouvant attendre plus de 48 heures avant transformation sous peine de cailler, la chaîne logistique doit fonctionner 365 jours par an sans aucune interruption.",
            "a_retenir": "Un stratège du flux qui veille à ce que le lait de nos campagnes arrive chaque matin d'une fraîcheur absolue dans les usines."
        }
    },

    # -----------------------------------------------------------------------
    # 4. INGÉNIEUR PRODUCTION EN ÉLEVAGE & REPRODUCTION
    # -----------------------------------------------------------------------
    {
        "id": "ingenieur-production-animale",
        "slug": "ingenieur-production-animale",
        "title": "Ingénieur Production en Élevage & Reproduction Animale",
        "aliases": ["Ingénieur en productions animales", "Chef de projet production animale", "Responsable d'unité expérimentale animale"],
        "icon": "🧑‍🔬",
        "image": "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Animale, Élevage & Filières",
        "domainId": "elevage-productions-animales",
        "subdomain": "Recherche & expérimentation animale",
        "sourceESA": True,
        "isEmerging": False,
        "level": "Diplôme d'Ingénieur Agronome (Groupe ESA) ou Master Productions Animales",
        "salary": "🇫🇷 France : 2 800 - 4 800 € net/mois (~38 000 - 65 000 € brut/an, Source : Groupe ESA / APEC) • 🇸🇳 Sénégal : 500 000 - 1 800 000 FCFA / mois (Instituts de recherche agronomique, ISRA, fermes modernes)",
        "simpleDefinition": "L'ingénieur production conçoit et supervise la mise en œuvre de programmes expérimentaux de reproduction, dirige une équipe technique et participe à l'adaptation des normes d'élevage en matière d'hygiène, d'alimentation et de bien-être animal.",
        "shortDescription": "Fiche officielle du Groupe ESA, il est la clé de voûte de la modernisation des techniques d'élevage, alliant recherche de rentabilité et mesure objective du bien-être animal.",
        "longDescription": "Comme documenté par le Groupe ESA, l'ingénieur production conçoit et supervise la mise en œuvre de programmes expérimentaux de reproduction et dirige une équipe au sein d'une structure de recherche ou d'un élevage de pointe. À la tête d'une unité expérimentale, il est la clé de la modernisation des techniques, du renforcement des règles et de l'adaptation des normes en matière d'élevage : hygiène, alimentation, qualité, sécurité et rentabilité. La source souligne expressément l'importance de ses compétences dans la mesure objective du bien-être des animaux, sa maîtrise de l'anglais scientifique pour la veille bibliographique et ses facultés d'analyse et de synthèse.",
        "mainObjective": "Piloter l'innovation zootechnique et les protocoles de reproduction pour concilier haute performance d'élevage, rentabilité économique et bien-être animal.",
        "companyRole": "Leader scientifique et opérationnel de la modernisation des élevages.",
        "species": ["Bovins", "Porcins", "Ovins", "Caprins", "Volailles"],
        "workEnvironment": [
            "🔬 Unités expérimentales de recherche animale et stations zootechniques",
            "🏢 Entreprises de sélection génétique et coopératives d'insémination",
            "💻 Laboratoires d'analyse de données zootechniques et rédaction scientifique"
        ],
        "missions": [
            "Concevoir, planifier et superviser des protocoles expérimentaux sur la reproduction et la nutrition animale",
            "Manager les équipes de techniciens d'expérimentation et de soigneurs dans le respect strict de l'éthique animale",
            "Mettre en place des indicateurs objectifs d'évaluation du bien-être animal (santé podale, niveau de cortisol, comportement)",
            "Effectuer une veille scientifique internationale continue en anglais sur les innovations en physiologie animale",
            "Adapter les cahiers des charges et les normes d'élevage en matière de sécurité sanitaire et de rentabilité pour les filières"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Point d'étape avec l'équipe de l'unité expérimentale", "desc": "Contrôle des paramètres de l'essai en cours sur l'efficacité de nouveaux acides aminés chez les truies reproductrices."},
            {"time": "10:30", "title": "Évaluation du bien-être et mesures physiologiques", "desc": "Supervision des prélèvements sanguins et analyse des capteurs comportementaux avec les vétérinaires."},
            {"time": "14:00", "title": "Analyse biométrique et modélisation des résultats", "desc": "Traitement statistique des données d'insémination et calcul des taux de fertilité comparés."},
            {"time": "16:30", "title": "Veille scientifique et rédaction de rapport", "desc": "Lecture d'articles scientifiques en anglais et rédaction d'une note de synthèse pour le comité d'éthique."}
        ],
        "skills": {
            "technical": [
                "Physiologie de la reproduction et biotechnologies de la fécondation (IA, transfert d'embryons)",
                "Méthodologie rigoureuse d'expérimentation animale et protocoles d'homologation",
                "Mesure objective et scientifique du bien-être animal (indicateurs Welfare Quality)",
                "Anglais scientifique courant pour lectures bibliographiques et publications (requis ESA)"
            ],
            "human": [
                "Excellentes capacités d'analyse, de synthèse et de communication (soulignées par l'ESA)",
                "Leadership et capacité à fédérer une équipe pluridisciplinaire (techniciens, vétérinaires)",
                "Éthique irréprochable et respect profond des animaux d'expérimentation",
                "Sens de l'innovation et esprit critique face aux résultats d'essais"
            ],
            "tools": [
                "Logiciels de traitement statistique (R, SAS, Python Data)",
                "Capteurs biométriques et caméras d'éthologie animale",
                "Bases de données de généalogie et de performances animales",
                "Systèmes automatisés de distribution d'aliment expérimental"
            ],
            "analytical": [
                "Modélisation des cinétiques de croissance et de fertilité",
                "Analyse technico-économique de rentabilité des protocoles innovants"
            ]
        },
        "specializations": ["Expérimentation en reproduction et sélection génétique", "Bien-être et éthologie appliquée aux élevages", "Nutrition animale de précision et réduction des rejets azotés"],
        "studies": {
            "pathway": [
                {"step": "Diplôme d'ingénieur", "title": "Diplôme d'Ingénieur Agronome du Groupe ESA — Majeure Productions Animales", "desc": "Formation de référence combinant sciences du vivant, zootechnie et management de projets."},
                {"step": "Option Master / Doctorat", "title": "Master Recherche en Biologie Animale ou Doctorat en Zootechnie", "desc": "Approfondissement en génétique moléculaire ou physiologie appliquée."}
            ],
            "schools": [
                {"name": "Groupe ESA — Angers, France", "country": "France", "scope": "France"},
                {"name": "Institut Agro (Rennes-Angers, Montpellier) — France", "country": "France", "scope": "France"},
                {"name": "EISMV (École Inter-États des Sciences et Médecine Vétérinaires) — Dakar, Sénégal", "country": "Sénégal", "scope": "Afrique"},
                {"name": "ENSA (École Nationale Supérieure d'Agriculture) — Thiès, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Agrément d'expérimentateur de niveau 1 (concepteur de projets sur animaux)", "Certification Bien-Être Animal"],
            "schoolSubjects": ["Génétique animale", "Biostatistiques", "Physiologie", "Anglais scientifique"]
        },
        "career": {
            "sectors": ["Instituts techniques de recherche appliquée (INRAE, Institut de l'Élevage - Idele)", "Entreprises de sélection génétique animale (Evolution, Innoval, Hendrix)", "Firmes d'alimentation animale et laboratoires de santé animale"],
            "employerTypes": ["Centres de recherche agronomique", "Firmes d'agrofourniture et de génétique", "Grandes entreprises d'élevage intégrées"],
            "evolution": "Ingénieur d'essais ➔ Ingénieur production expérimentale ➔ Responsable d'unité de recherche animale ➔ Directeur R&D productions animales",
            "pros": "Poste de haute valeur intellectuelle, impact direct sur l'avenir durable des filières, environnement de recherche stimulant.",
            "cons": "Lourdeur des démarches réglementaires et éthiques, responsabilités managériales exigeantes sur les résultats d'essais."
        },
        "gettingStarted": {
            "beginnerProject": "Analyser un article scientifique anglophone sur les indicateurs de bien-être animal et en faire une synthèse d'une page.",
            "intermediateProject": "Construire un protocole d'essai comparatif simple sur l'ingestion d'aliment chez 2 lots de génisses sous tableur.",
            "advancedProject": "Rédiger un dossier de saisine fictif pour un comité d'éthique décrivant les mesures d'évitement de la douleur lors d'un protocole d'insémination.",
            "portfolioIdeas": ["Rapport de synthèse bibliographique en anglais", "Plan d'expérimentation statistique avec modèle ANOVA"]
        },
        "aiImpact": {
            "level": "Très Élevé",
            "summary": "L'IA et la vision par ordinateur permettent de mesurer en continu les comportements des animaux (sommeil, locomotion, interactions sociales) sans perturber leur environnement.",
            "automatedTasks": ["Détection vidéo automatisée des postures et comportements anormaux", "Calcul automatique des corrélations génome-performance"],
            "emergingSkills": ["Supervision d'algorithmes de computer vision appliqués à l'éthologie"],
            "humanEdge": "La créativité dans la conception des hypothèses scientifiques et le respect scrupuleux de l'éthique envers l'animal sensible."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'ISRA et le LNERV emploient des ingénieurs de recherche en production animale pour adapter les races laitières aux fortes chaleurs sahéliennes et développer des compléments alimentaires à base de tourteau d'arachide et de gousses de Faidherbia albida.",
            "localSectors": ["ISRA (Institut Sénégalais de Recherches Agricoles)", "LNERV (Laboratoire National d'Élevage et de Recherches Vétérinaires)", "Projets de développement agro-pastoral de la CEDEAO"],
            "remoteWork": "Hybride (recherche de terrain / télétravail possible pour l'analyse de données et rédaction).",
            "entrepreneurship": "Création d'un centre privé d'amélioration génétique et de production de semences animales certifiées pour les éleveurs de la sous-région."
        },
        "relatedJobSlugs": ["geneticien", "technicien-recherche-animale", "responsable-experimentation-animale", "ingenieur-conseil-productions-animales"],
        "connectedFamilies": ["sciences-biotech", "sante-biomedical", "direction-strategie"],
        "resources": [
            {"type": "article", "title": "Ingénieur production — Groupe ESA", "url": "https://www.groupe-esa.com/productions-animales/les-metiers-de-la-production-animale/#ingenieur-production", "source": "Groupe ESA"},
            {"type": "formation", "title": "Formation Ingénieur agronome ESA", "url": "https://www.groupe-esa.com/formation/ingenieur-agronome/", "source": "Groupe ESA"}
        ],
        "sources": ["Groupe ESA", "INRAE", "Institut de l'Élevage (Idele)"],
        "interests": ["explorer-decouvrir", "nature-environnement", "donnees-chiffres"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon les publications scientifiques de l'ESA et de l'INRAE, la mesure objective du bien-être animal fait désormais appel à des thermographies infrarouges capables de détecter une inflammation sans toucher l'animal.",
            "pourquoi": "L'acceptabilité sociétale de l'élevage moderne exige des preuves scientifiques tangibles garantissant l'absence de souffrance et le confort des animaux.",
            "a_retenir": "Un profil scientifique d'élite qui invente les modèles d'élevage éthiques et performants de demain."
        }
    },

    # -----------------------------------------------------------------------
    # 5. TECHNICIEN DE RECHERCHE EN PRODUCTIONS ANIMALES
    # -----------------------------------------------------------------------
    {
        "id": "technicien-recherche-animale",
        "slug": "technicien-recherche-animale",
        "title": "Technicien de Recherche en Productions Animales",
        "aliases": ["Technicienne de recherche animale", "Technicien de laboratoire et d'élevage expérimental", "Technicien de recherche et de formation"],
        "icon": "🔬",
        "image": "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Animale, Élevage & Filières",
        "domainId": "elevage-productions-animales",
        "subdomain": "Recherche & expérimentation animale",
        "sourceESA": True,
        "isEmerging": False,
        "level": "BTS Métiers de l'élevage (Productions Animales) ou BTS Bioanalyses / Biotechnologies",
        "salary": "🇫🇷 France : 1 850 - 2 650 € net/mois (Source : Groupe ESA / Grille fonction publique recherche et instituts) • 🇸🇳 Sénégal : 250 000 - 800 000 FCFA / mois (Laboratoires ISRA, universités, EISMV Dakar)",
        "simpleDefinition": "Le technicien de recherche met en œuvre l'ensemble des techniques, méthodes et prélèvements nécessaires à la réalisation des programmes de recherche et contribue aux travaux pratiques et d'enseignement.",
        "shortDescription": "Fiche documentée par le Groupe ESA, ce praticien rigoureux réalise les protocoles en laboratoire et en élevage expérimental au côté des chercheurs.",
        "longDescription": "Comme l'indique la fiche officielle du Groupe ESA, les techniciens de recherche et de formation mettent en œuvre l'ensemble des techniques et des méthodes concourant à la réalisation des missions et des programmes d'activité des établissements où ils exercent, tout en contribuant aux missions d'enseignement. Les compétences indispensables citées sont une forte capacité d'adaptation et d'analyse. En productions animales, il assure les prélèvements biologiques (sang, lait, fèces), la manipulation des analyseurs de laboratoire, la pesée rigoureuse des aliments et la surveillance minutieuse des animaux sous protocole.",
        "mainObjective": "Appliquer fidèlement les protocoles scientifiques, préparer les manipulations expérimentales et garantir la fiabilité absolue des données collectées.",
        "companyRole": "Bras opérationnel et garant de la rigueur technique dans les laboratoires et fermes expérimentales.",
        "species": ["Bovins", "Porcins", "Ovins", "Volailles", "Rongeurs de laboratoire"],
        "workEnvironment": [
            "🧪 Laboratoires de biologie animale, biochimie et génomique",
            "🐮 Animaleries expérimentales et étables d'essais agronomiques",
            "🏫 Établissements d'enseignement supérieur agricole et universités"
        ],
        "missions": [
            "Préparer les matériels d'analyse, réactifs de laboratoire et échantillons biologiques",
            "Effectuer les mesures zootechniques et prélèvements réguliers selon les protocoles établis",
            "Entretenir et étalonner les instruments scientifiques de mesure et d'analyse",
            "Consigner méticuleusement les résultats dans les cahiers d'expérimentation électroniques",
            "Participer à l'encadrement pratique des étudiants lors des travaux dirigés et ateliers de recherche (mission citée par l'ESA)"
        ],
        "typicalDay": [
            {"time": "08:15", "title": "Préparation des postes de prélèvement", "desc": "Stérilisation du matériel, préparation des tubes sous vide et des anticoagulants pour l'échantillonnage de lait."},
            {"time": "09:30", "title": "Prélèvements et dosages analytiques", "desc": "Réalisation des prises de sang sur un lot expérimental et centrifugation immédiate pour isoler le plasma."},
            {"time": "13:30", "title": "Analyses au spectrophotomètre", "desc": "Dosage des métabolites sanguins et contrôle de la reproductibilité des courbes d'étalonnage."},
            {"time": "16:00", "title": "Assistance aux travaux pratiques étudiants", "desc": "Aide à la mise en place d'un atelier pratique de dissection et physiologie animale pour les élèves de l'ESA."}
        ],
        "skills": {
            "technical": [
                "Techniques de laboratoire en biologie, hématologie et biochimie animale",
                "Bonnes pratiques de laboratoire (BPL) et traçabilité des échantillons",
                "Gestes techniques de contention et de prélèvement sur animaux d'élevage",
                "Maintenance de premier niveau des automates de mesure"
            ],
            "human": [
                "Grande capacité d'adaptation aux protocoles changeants (requis ESA)",
                "Esprit d'analyse et sens aigu de l'observation critique (requis ESA)",
                "Rigueur méthodique absolue et honnêteté scientifique",
                "Patience, minutie et goût du travail collaboratif"
            ],
            "tools": [
                "Centrifugeuses, spectrophotomètres et compteurs cellulaires",
                "Pipettes automatiques de haute précision et microscopes à contraste de phase",
                "Cahiers de laboratoire électroniques (ELN)",
                "Automates d'alimentation individuelle des animaux (Dac)"
            ],
            "analytical": [
                "Contrôle de validité des séries analytiques et identification des biais de mesure",
                "Mise en forme des données brutes pour les statisticiens"
            ]
        },
        "specializations": ["Technicien en analyse biochimique animale", "Technicien animalier en unité de recherche", "Technicien de plateforme génomique"],
        "studies": {
            "pathway": [
                {"step": "Diplôme Bac +2", "title": "BTS Métiers de l'élevage (Productions Animales) — Groupe ESA", "desc": "Formation de base solide aux systèmes d'élevage et à l'expérimentation."},
                {"step": "Alternative Bac +2", "title": "BTS Biotechnologies ou Bioanalyses et Contrôles", "desc": "Formation axée sur la manipulation en laboratoire d'analyse biologique."}
            ],
            "schools": [
                {"name": "Groupe ESA — Angers, France", "country": "France", "scope": "France"},
                {"name": "Lycées techniques et agricoles préparant aux BTS de biologie — France", "country": "France", "scope": "France"},
                {"name": "École Inter-États des Sciences et Médecine Vétérinaires (EISMV) — Dakar, Sénégal", "country": "Sénégal", "scope": "Afrique"}
            ],
            "certifications": ["Certification expérimentateur animal niveau 2 (applicateur)", "Habilitation risque biologique niveau 2"],
            "schoolSubjects": ["Biologie cellulaire", "Chimie analytique", "Zootechnie", "Statistiques appliquées"]
        },
        "career": {
            "sectors": ["Organismes publics de recherche (INRAE, CNRS, Cirad)", "Établissements d'enseignement supérieur (Groupe ESA, universités)", "Laboratoires de R&D des entreprises pharmaceutiques et agroalimentaires"],
            "employerTypes": ["Instituts de recherche agronomique", "Grandes écoles et facultés", "Laboratoires d'analyses vétérinaires"],
            "evolution": "Technicien de recherche débutant ➔ Technicien principal ➔ Responsable technique de laboratoire ➔ Assistant ingénieur de recherche",
            "pros": "Environnement intellectuellement stimulant, rigueur scientifique, utilité directe pour la découverte et la formation des jeunes.",
            "cons": "Tâches répétitives de pipetage et dosage, respect de protocoles stricts sans grande marge d'improvisation."
        },
        "gettingStarted": {
            "beginnerProject": "S'entraîner à la pesée de précision au milligramme et à l'utilisation correcte d'une pipette automatique.",
            "intermediateProject": "Rédiger un mode opératoire standardisé (SOP) pour le nettoyage et l'étalonnage d'un pH-mètre.",
            "advancedProject": "Réaliser une série de 50 dosages colorimétriques et calculer le coefficient de variation des résultats.",
            "portfolioIdeas": ["Exemple de fiche de protocole expérimental annotée", "Rapport de contrôle qualité d'une chaîne d'échantillonnage"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'automatisation robotisée prend en charge le pipetage à haut débit, tandis que l'IA assiste la reconnaissance d'images cellulaires au microscope.",
            "automatedTasks": ["Pipetage automatisé par robots multicanaux", "Comptage automatique des cellules sur lames numériques"],
            "emergingSkills": ["Programmation et calibrage de robots d'analyse d'échantillons"],
            "humanEdge": "La sensibilité manuelle lors des manipulations délicates sur les tissus vivants et la vigilance critique face aux artéfacts de mesure."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les techniciens de recherche de l'ISRA LNERV et de l'EISMV Dakar réalisent les diagnostics sérologiques et les contrôles des vaccins vétérinaires distribués dans toute l'Afrique de l'Ouest (peste des petits ruminants, péripneumonie contagieuse bovine).",
            "localSectors": ["Laboratoire National de l'Élevage et de Recherches Vétérinaires (ISRA LNERV de Hann)", "EISMV Dakar", "Laboratoires régionaux vétérinaires de Saint-Louis et Louga"],
            "remoteWork": "Strictement impossible, présence requise au laboratoire et auprès des animaux.",
            "entrepreneurship": "Création d'un laboratoire privé d'analyses zootechniques rapides (parasitologie, qualité du lait) pour les éleveurs de la zone des Niayes."
        },
        "relatedJobSlugs": ["ingenieur-production-animale", "responsable-experimentation-animale", "geneticien", "controleur-qualite-produits-aquatiques"],
        "connectedFamilies": ["sciences-biotech", "sante-biomedical", "education-formation"],
        "resources": [
            {"type": "article", "title": "Technicien de recherche — Groupe ESA", "url": "https://www.groupe-esa.com/productions-animales/les-metiers-de-la-production-animale/#technicien-de-recherche", "source": "Groupe ESA"}
        ],
        "sources": ["Groupe ESA", "INRAE", "Ministère de l'Enseignement Supérieur et de la Recherche"],
        "interests": ["explorer-decouvrir", "nature-environnement"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon le Groupe ESA, les techniciens de recherche jouent un double rôle unique : ils soutiennent les chercheurs dans leurs découvertes et transmettent les gestes professionnels aux étudiants lors des séances d'enseignement.",
            "pourquoi": "Sans technicien rigoureux, aucune publication scientifique ne pourrait voir le jour, car la valeur d'une découverte repose entièrement sur l'exactitude des manipulations initiales.",
            "a_retenir": "L'artisan méticuleux de la science agronomique et animale."
        }
    },

    # -----------------------------------------------------------------------
    # 6. RESPONSABLE EXPÉRIMENTATION ANIMALE
    # -----------------------------------------------------------------------
    {
        "id": "responsable-experimentation-animale",
        "slug": "responsable-experimentation-animale",
        "title": "Responsable d'Expérimentation Animale & Terrain",
        "aliases": ["Chef de projet expérimentation agricole", "Responsable d'essais zootechniques", "Coordinateur d'expérimentations terrain"],
        "icon": "🧪",
        "image": "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Animale, Élevage & Filières",
        "domainId": "elevage-productions-animales",
        "subdomain": "Recherche & expérimentation animale",
        "sourceESA": True,
        "isEmerging": False,
        "level": "BTS Métiers de l'élevage, Licence Pro ou Ingénieur agronome ESA",
        "salary": "🇫🇷 France : 2 300 - 3 800 € net/mois (Source : Groupe ESA / Instituts techniques) • 🇸🇳 Sénégal : 350 000 - 1 300 000 FCFA / mois (Centres d'expérimentation ISRA, stations agropastorales)",
        "simpleDefinition": "Le responsable d'expérimentation élabore des protocoles d'essais, consulte les éleveurs pour recenser leurs besoins concrets et collabore avec les chercheurs pour mener à bien des programmes expérimentaux sur le terrain.",
        "shortDescription": "Fiche documentée par le Groupe ESA, ce médiateur de terrain relie les besoins des agriculteurs à la recherche scientifique appliquée.",
        "longDescription": "Comme documenté mot à mot par le Groupe ESA, le responsable d'expérimentation élabore des protocoles expérimentaux : il participe à la consultation des agriculteurs ou organise une concertation avec eux afin de recenser leurs besoins. Il met en œuvre une collaboration avec des chercheurs en vue de la réalisation d'un programme expérimental sur le terrain. La source insiste sur les compétences indispensables que sont les connaissances en agronomie/zootechnie, le sens de l'organisation, la rigueur et une grande patience. Il supervise le déploiement d'essais nutritionnels, sanitaires ou d'ambiance de bâtiment en conditions réelles d'élevage.",
        "mainObjective": "Tester en conditions réelles de terrain les innovations agricoles pour vérifier leur faisabilité pratique et leur rentabilité avant diffusion massive.",
        "companyRole": "Passerelle indispensable entre la recherche scientifique en laboratoire et la réalité quotidienne des exploitations.",
        "species": ["Bovins", "Porcins", "Ovins", "Volailles"],
        "workEnvironment": [
            "🚜 Exploitations agricoles pilotes et réseaux de fermes d'essais",
            "🔬 Stations expérimentales régionales et chambres d'agriculture",
            "🚗 Déplacements très fréquents sur les parcelles et dans les élevages partenaires"
        ],
        "missions": [
            "Concerter les éleveurs et organisations professionnelles pour identifier les verrous techniques prioritaires",
            "Co-rédiger avec les chercheurs des protocoles expérimentaux robustes et transposables sur le terrain",
            "Mettre en place les dispositifs d'essais chez les agriculteurs partenaires (lots témoins, lots traités)",
            "Effectuer les mesures et observations régulières avec une rigueur et une patience scientifiques",
            "Restituer les résultats sous forme de guides pratiques et d'articles vulgarisés lors de journées techniques"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Tournée de suivi d'un essai fourrager chez un éleveur", "desc": "Pesée des refus d'ensilage et prélèvement d'échantillons sur un lot de 25 vaches testant une nouvelle luzerne."},
            {"time": "11:00", "title": "Concertation avec un groupe d'éleveurs porcins", "desc": "Animation d'un atelier d'échange pour identifier les problèmes d'ambiance et de ventilation dans les maternités."},
            {"time": "14:30", "title": "Réunion de coordination avec les chercheurs de l'ESA / URSE", "desc": "Point de validation sur les protocoles statistiques à appliquer lors de la prochaine campagne d'essais."},
            {"time": "17:00", "title": "Rédaction d'une fiche de vulgarisation technique", "desc": "Synthèse des résultats d'un essai de 6 mois sur l'apport de plantes médicinales dans l'eau de boisson des volailles."}
        ],
        "skills": {
            "technical": [
                "Solides connaissances en agronomie et zootechnie appliquée (requis ESA)",
                "Conception et suivi de protocoles expérimentaux en milieu réel",
                "Techniques d'animation de groupes d'agriculteurs et recueil de besoins",
                "Statistiques appliquées et analyse de variance des résultats d'essais"
            ],
            "human": [
                "Patience face aux temps longs des cycles biologiques et de la recherche (requis ESA)",
                "Sens aigu de l'organisation et rigueur d'exécution méthodique (requis ESA)",
                "Sens du contact humain et respect du savoir-faire des éleveurs",
                "Qualités de pédagogue pour vulgariser des données scientifiques complexes"
            ],
            "tools": [
                "Outils de mesure portables (pesons, analyseurs d'humidité, thermomètres de fosse)",
                "Logiciels de traitement de données agronomiques et de cartographie d'essais",
                "Appareils photos et carnets de notation visuelle standardisés",
                "Plateformes collaboratives de partage de données scientifiques"
            ],
            "analytical": [
                "Différenciation entre variabilité naturelle et effet réel d'un traitement expérimental",
                "Calcul du retour sur investissement des innovations pour les agriculteurs"
            ]
        },
        "specializations": ["Expérimentation en alimentation et compléments naturels", "Essais d'équipements et d'ambiance en bâtiment d'élevage", "Expérimentation agroécologique et autonomie protéique"],
        "studies": {
            "pathway": [
                {"step": "Formation socle", "title": "BTS Métiers de l'élevage (Productions Animales) — Groupe ESA", "desc": "Apprentissage des bases du diagnostic d'exploitation et du suivi d'élevage."},
                {"step": "Licence Pro", "title": "Licence Pro Expérimentation Végétale & Animale ou Conseil en Élevage", "desc": "Formation spécifique aux normes BPE (Bonnes Pratiques d'Expérimentation)."},
                {"step": "Ingénieur", "title": "Diplôme d'Ingénieur Agronome du Groupe ESA", "desc": "Accès aux fonctions de chef de pôle expérimentation et coordination d'équipes d'essais."}
            ],
            "schools": [
                {"name": "Groupe ESA — Angers, France", "country": "France", "scope": "France"},
                {"name": "Instituts de formation supérieure agronomique — France", "country": "France", "scope": "France"},
                {"name": "Institut Supérieur de Formation Agricole et Rurale (ISFAR Bambey) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Agrément BPE (Bonnes Pratiques d'Expérimentation)", "Certificat d'animateur de groupes de progrès agricole"],
            "schoolSubjects": ["Agronomie", "Zootechnie", "Biométrie", "Communication rurale"]
        },
        "career": {
            "sectors": ["Instituts techniques de filières (Idele, ITAVI, IFIP)", "Chambres régionales d'agriculture et stations expérimentales", "Coopératives et firmes d'agrofourniture privées"],
            "employerTypes": ["Instituts techniques agricoles", "Chambres d'agriculture", "Firmes d'alimentation et de génétique"],
            "evolution": "Technicien d'expérimentation ➔ Responsable expérimentation ➔ Chef du département recherche appliquée ➔ Directeur de station d'essais",
            "pros": "Équilibre idéal entre le travail de terrain au contact des exploitants et la stimulation intellectuelle de la recherche.",
            "cons": "Déplacements constants en toute saison, contrainte d'essais parfois anéantis par un aléa climatique ou sanitaire."
        },
        "gettingStarted": {
            "beginnerProject": "Participer à une journée portes ouvertes d'une station expérimentale agricole pour observer l'implantation des micro-parcelles.",
            "intermediateProject": "Rédiger une grille d'entretien pour questionner 5 éleveurs sur leurs attentes face au réchauffement des bâtiments.",
            "advancedProject": "Concevoir un protocole complet d'évaluation de la digestibilité d'un fourrage avec calendrier de mesures et plan de collecte des fèces.",
            "portfolioIdeas": ["Protocole d'essai terrain conforme aux règles BPE", "Article de vulgarisation rédigé pour une revue agricole"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'IA aide à planifier les matrices d'essais statistiques et à traiter les données massives de capteurs, mais la mise en place sur le terrain reste 100% humaine.",
            "automatedTasks": ["Génération de plans d'expérience optimisés", "Nettoyage automatique des anomalies de données de pesée"],
            "emergingSkills": ["Utilisation d'outils de monitoring IoT à distance pour suivre les essais"],
            "humanEdge": "La confiance relationnelle nouée avec les éleveurs pour qu'ils acceptent d'accueillir des essais risqués dans leurs fermes."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les stations expérimentales de l'ISRA (Dahra, Kolda, Bambey) s'appuient sur des responsables d'expérimentation pour tester des rations à base de niébé, de tourteau de sésame et de mélasse afin de sécuriser l'alimentation du bétail pendant la longue saison sèche.",
            "localSectors": ["Stations expérimentales de l'ISRA", "Projets d'expérimentation agroécologique de la FAO et de l'ENDA Pronat", "Coopératives pastorales du Ferlo"],
            "remoteWork": "Exclusivement terrain et bureau local.",
            "entrepreneurship": "Création d'un cabinet privé d'expérimentation et d'homologation de compléments nutritionnels locaux pour animaux d'élevage."
        },
        "relatedJobSlugs": ["ingenieur-production-animale", "technicien-recherche-animale", "technicien-conseil-elevage", "ingenieur-agronome"],
        "connectedFamilies": ["sciences-biotech", "conseil-audit", "environnement-climat"],
        "resources": [
            {"type": "article", "title": "Responsable expérimentation — Groupe ESA", "url": "https://www.groupe-esa.com/productions-animales/les-metiers-de-la-production-animale/#responsable-experimentation", "source": "Groupe ESA"},
            {"type": "formation", "title": "Productions animales à l'ESA", "url": "https://www.groupe-esa.com/productions-animales/", "source": "Groupe ESA"}
        ],
        "sources": ["Groupe ESA", "Institut de l'Élevage", "Acta — Les instituts techniques agricoles"],
        "interests": ["nature-environnement", "explorer-decouvrir"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon le Groupe ESA, la patience est l'une des qualités maîtresses de ce métier : tester l'impact d'un nouveau régime alimentaire sur la longévité de vaches laitières demande entre 3 et 5 années complètes d'observations rigoureuses.",
            "pourquoi": "En biologie animale, les cycles ne peuvent pas être accélérés artificiellement sans fausser la vérité scientifique des résultats.",
            "a_retenir": "Le pont vivant entre l'innovation scientifique et le progrès concret au cœur des fermes."
        }
    },

    # -----------------------------------------------------------------------
    # 7. GÉNÉTICIEN / GÉNÉTICIENNE — SCIENCES & PRODUCTION ANIMALE
    # -----------------------------------------------------------------------
    {
        "id": "geneticien",
        "slug": "geneticien",
        "title": "Généticien / Généticienne — Sciences & Production Animale",
        "aliases": ["Généticien quantitatif", "Chercheur en génétique animale", "Biologiste généticien", "Généticien des populations"],
        "icon": "🧬",
        "image": "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Animale, Élevage & Filières",
        "domainId": "elevage-productions-animales",
        "subdomain": "Génétique & reproduction animale",
        "sourceESA": True,
        "isEmerging": True,
        "level": "Ingénieur Agronome ESA ou Master / Doctorat en Génétique et Génomique",
        "salary": "🇫🇷 France : 3 000 - 5 500 € net/mois (~42 000 - 75 000 € brut/an, Source : Groupe ESA / APEC Recherche) • 🇸🇳 Sénégal : 600 000 - 2 000 000 FCFA / mois (Centres de recherche génétique, ISRA, universités, EISMV)",
        "simpleDefinition": "Le généticien étudie et analyse les caractères héréditaires des êtres vivants à travers leur génome et leur ADN afin de comprendre la transmission des traits biologiques et d'améliorer la santé, la résilience et les qualités des lignées.",
        "shortDescription": "Fiche transversale documentée par le Groupe ESA, ce chercheur décode le génome pour sélectionner des animaux plus résistants aux maladies et adaptés au changement climatique.",
        "longDescription": "Comme formulé dans le référentiel du Groupe ESA, le généticien étudie et analyse les caractères héréditaires des êtres vivants (micro-organismes, animaux, végétaux, êtres humains) à travers leur génome (ensemble du matériel génétique codé dans leur ADN). Les compétences indispensables mises en avant par l'ESA sont de solides connaissances en biologie et biochimie, une grande rigueur et un remarquable esprit d'analyse et de synthèse. Dans les filières animales, il ne se contente pas d'accroître la productivité : il sélectionne aujourd'hui les gènes de rusticité, de résistance aux chaleurs extrêmes, de longévité et de réduction des émissions de méthane.",
        "mainObjective": "Découvrir les bases génétiques des traits d'intérêt et guider les schémas de sélection pour préserver la diversité biologique et adapter les espèces aux défis futurs.",
        "companyRole": "Architecte du patrimoine héréditaire et pionnier de la biologie moléculaire appliquée.",
        "species": ["Bovins", "Porcins", "Ovins", "Caprins", "Volailles", "Micro-organismes"],
        "workEnvironment": [
            "🧬 Laboratoires de biologie moléculaire et de séquençage ADN haute résolution",
            "💻 Centres de bio-informatique et grappes de serveurs de calcul intensif",
            "🏢 Entreprises internationales de sélection génétique et coopératives d'élevage"
        ],
        "missions": [
            "Extraire, séquencer et analyser l'ADN d'animaux pour identifier des marqueurs génétiques d'intérêt (SNP)",
            "Évaluer les valeurs génétiques des reproducteurs par sélection génomique à haut débit",
            "Modéliser l'évolution génétique des populations pour éviter la consanguinité et préserver la biodiversité",
            "Collaborer avec les vétérinaires pour éradiquer les tares génétiques héréditaires dans les cheptels",
            "Publier des articles scientifiques dans des revues internationales à comité de lecture"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Analyse de données de séquençage génomique", "desc": "Exploitation sur terminal Linux de fichiers FASTQ issus des séquenceurs NGS pour cartographier un allèle de thermotolérance."},
            {"time": "11:00", "title": "Réunion du schéma de sélection avec les éleveurs", "desc": "Présentation des index génomiques des futurs taureaux d'insémination à une coopérative partenaire."},
            {"time": "14:00", "title": "Validation des tests de dépistage génétique", "desc": "Vérification des résultats de PCR en temps réel pour exclure un gène de susceptibilité aux anomalies cardiaques."},
            {"time": "16:30", "title": "Veille scientifique internationale et modélisation", "desc": "Revue des publications récentes sur l'épigénétique et mise à jour d'un modèle bayésien de prédiction."}
        ],
        "skills": {
            "technical": [
                "Génétique moléculaire, biochimie et génomique quantitative (requis ESA)",
                "Bio-informatique et programmation (Python, R, Bioconductor, commandes Bash)",
                "Méthodologie de sélection génomique (BLUP, modèles mixtes, GWAS)",
                "Technologies de séquençage NGS et génotypage sur puces haute densité"
            ],
            "human": [
                "Rigueur scientifique absolue et esprit d'analyse critique (requis ESA)",
                "Grand esprit de synthèse pour dégager le sens de milliards de paires de bases (requis ESA)",
                "Patience, persévérance et curiosité intellectuelle insatiable",
                "Sens de l'éthique face aux manipulations génétiques et aux biotechnologies"
            ],
            "tools": [
                "Logiciels de bio-informatique et génétique des populations (PLINK, GCTA, BLUPF90)",
                "Séquenceurs d'ADN (Illumina, Oxford Nanopore)",
                "Automates de PCR en temps réel et stations de manipulation robotisée",
                "Serveurs de calcul haute performance (HPC)"
            ],
            "analytical": [
                "Interprétation des déséquilibres de liaison et des architectures génétiques polygéniques",
                "Calcul de consanguinité et d'héritabilité des caractères complexes"
            ]
        },
        "specializations": ["Sélection génomique appliquée aux ruminants", "Génétique de la rusticité et adaptation climatique", "Bio-informatique et annotation des génomes animaux"],
        "studies": {
            "pathway": [
                {"step": "Diplôme d'ingénieur", "title": "Diplôme d'Ingénieur Agronome du Groupe ESA — Majeure Productions Animales / Sciences du Vivant", "desc": "Bases solides en agronomie, biologie animale et mathématiques statistiques."},
                {"step": "Master spécialisé", "title": "Master Génétique Quantitative et Génomique Animale", "desc": "Perfectionnement en modélisation statistique et bio-informatique."},
                {"step": "Doctorat (PhD)", "title": "Doctorat en Génétique / Sciences Biologiques (Bac +8)", "desc": "Recherche fondamentale ou appliquée indispensable pour diriger des programmes d'envergure."}
            ],
            "schools": [
                {"name": "Groupe ESA — Angers, France", "country": "France", "scope": "France"},
                {"name": "Institut Agro / Université Paris-Saclay — France", "country": "France", "scope": "France"},
                {"name": "Université Cheikh Anta Diop (UCAD) / FST & EISMV — Dakar, Sénégal", "country": "Sénégal", "scope": "Afrique"}
            ],
            "certifications": ["Certification en Bio-informatique Génomique", "Agrément Éthique et Génétique Animale"],
            "schoolSubjects": ["Biologie moléculaire", "Génétique quantitative", "Biochimie", "Mathématiques & Algorithmique"]
        },
        "career": {
            "sectors": ["Entreprises de sélection génétique animale (Evolution, Innoval, Hendrix Genetics, Choice)", "Instituts publics de recherche (INRAE, CNRS, Cirad)", "Industries de santé animale et biotechnologies médicales"],
            "employerTypes": ["Entreprises de sélection animale", "Organismes nationaux de recherche", "Laboratoires universitaires"],
            "evolution": "Bio-informaticien / Généticien junior ➔ Généticien senior ➔ Responsable d'un programme de sélection ➔ Directeur scientifique de la génétique",
            "pros": "Métier passionnant au cœur des plus grandes découvertes contemporaines de la biologie, forte demande d'expertise au niveau mondial.",
            "cons": "Très longue formation académique (Bac +5 à Bac +8), temps important passé devant les écrans et serveurs informatiques."
        },
        "gettingStarted": {
            "beginnerProject": "Explorer la base de données Ensembl Genome Browser pour visualiser le génome du bovin (Bos taurus).",
            "intermediateProject": "Écrire un script Python pour calculer les fréquences alléliques d'un jeu de données de génotypage de 100 taureaux.",
            "advancedProject": "Réaliser une étude d'association pangénomique (GWAS) simplifiée sous R avec le logiciel PLINK sur un caractère qualitatif.",
            "portfolioIdeas": ["Notebook Jupyter d'analyse génomique commentée", "Revue critique d'un article scientifique récent sur la sélection génomique"]
        },
        "aiImpact": {
            "level": "Révolutionnaire",
            "summary": "L'IA et le Deep Learning révolutionnent la génétique en prédisant le repliement 3D des protéines (AlphaFold) et en décryptant les zones non codantes du génome.",
            "automatedTasks": ["Alignement et filtrage automatique des séquences d'ADN", "Détection automatique des mutations délétères par réseaux de neurones"],
            "emergingSkills": ["Entraînement de modèles de fondation génomiques pour prédire les phénotypes"],
            "humanEdge": "Le discernement éthique sur les limites des manipulations génétiques et la vision stratégique de préservation des races rustiques."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les généticiens de l'EISMV et de l'ISRA travaillent sur la préservation et la valorisation génétique des races locales tolérantes à la trypanosomiase (comme la race bovine N'Dama) et des métissages avec la Guzerat et la Montbéliarde pour le pôle laitier.",
            "localSectors": ["ISRA LNERV de Hann", "EISMV Dakar (Département des Sciences Biologiques)", "Direction des Haras Nationaux et de l'Amélioration Génétique"],
            "remoteWork": "Hautement compatible en télétravail pour toute la partie bio-informatique et modélisation.",
            "entrepreneurship": "Création d'une plateforme d'analyse bio-informatique de données génomiques pour les schémas de sélection d'Afrique subsaharienne."
        },
        "relatedJobSlugs": ["ingenieur-production-animale", "directeur-rd-agri-animal", "technicien-recherche-animale", "biologiste-marin"],
        "connectedFamilies": ["sciences-biotech", "sante-biomedical", "numerique-ia"],
        "resources": [
            {"type": "article", "title": "Fiche Généticien — Groupe ESA", "url": "https://www.groupe-esa.com/productions-animales/les-metiers-de-la-production-animale/#geneticien", "source": "Groupe ESA"},
            {"type": "formation", "title": "Ingénieur agronome ESA", "url": "https://www.groupe-esa.com/formation/ingenieur-agronome/", "source": "Groupe ESA"}
        ],
        "sources": ["Groupe ESA", "INRAE", "Société Française de Génétique"],
        "interests": ["explorer-decouvrir", "nature-environnement", "donnees-chiffres"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "En élevage bovin laitier, la sélection génomique introduite ces dix dernières années permet d'évaluer le potentiel d'un veau dès sa naissance à partir d'un simple échantillon de cartilage d'oreille, gagnant plus de 5 ans sur les anciens schémas de descendance.",
            "pourquoi": "L'analyse directe de l'ADN évite d'attendre que les filles du taureau grandissent et produisent du lait pour connaître sa valeur reproductrice.",
            "a_retenir": "Un métier transversal de pointe au confluent de la biologie moléculaire, du Big Data et de la sauvegarde du vivant."
        }
    },

    # -----------------------------------------------------------------------
    # 8. DIRECTEUR RECHERCHE ET DÉVELOPPEMENT (R&D)
    # -----------------------------------------------------------------------
    {
        "id": "directeur-rd-agri-animal",
        "slug": "directeur-rd-agri-animal",
        "title": "Directeur / Directrice Recherche et Développement (R&D) en Filières Animales",
        "aliases": ["Directeur R&D agroalimentaire et nutrition animale", "Chief Scientific Officer Agri", "Responsable scientifique R&D"],
        "icon": "🚀",
        "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Animale, Élevage & Filières",
        "domainId": "elevage-productions-animales",
        "subdomain": "Recherche & expérimentation animale",
        "sourceESA": True,
        "isEmerging": False,
        "level": "Diplôme d'Ingénieur Agronome ESA ou Doctorat (PhD) + 10 ans d'expérience",
        "salary": "🇫🇷 France : 4 500 - 8 500 € net/mois (~65 000 - 120 000 € brut/an, Source : Groupe ESA / APEC) • 🇸🇳 Sénégal : 1 200 000 - 3 500 000 FCFA / mois (Filiales multinationales agroalimentaires, santé animale)",
        "simpleDefinition": "Le directeur R&D définit, organise et valide les activités de recherche et développement de l'entreprise et participe activement à la stratégie globale concernant le lancement de nouveaux produits ou services innovants.",
        "shortDescription": "Fiche officielle du Groupe ESA, ce dirigeant allie expertise scientifique de pointe, vision stratégique d'entreprise et management d'équipes de chercheurs.",
        "longDescription": "Comme l'indique la fiche officielle du Groupe ESA, le directeur recherche et développement a pour mission de définir, d'organiser et de valider les activités de l'entreprise en R&D. Il est partie prenante de la définition de la stratégie dans son ensemble de la société en ce qui concerne le développement des nouveaux produits ou services. Les compétences documentées par l'ESA sont de solides connaissances en biologie et biochimie, une rigueur absolue et des capacités exceptionnelles d'analyse et de synthèse. Il pilote les budgets d'innovation, supervise les dépôts de brevets et oriente les partenariats académiques vers les attentes sociétales et environnementales.",
        "mainObjective": "Traduire la vision stratégique de l'entreprise en innovations concrètes, brevetables et rentables, anticipant les transitions agroécologiques et nutritionnelles.",
        "companyRole": "Membre du comité de direction, éclaireur scientifique et moteur de la compétitivité future.",
        "species": ["Toutes filières animales et végétales confondues"],
        "workEnvironment": [
            "🏢 Sièges sociaux de groupes agroalimentaires, firmes de nutrition animale et biotechnologies",
            "🔬 Centres de recherche privés et plateformes d'innovation partenariale",
            "🌐 Congrès scientifiques internationaux et comités de direction stratégique"
        ],
        "missions": [
            "Définir et faire valider par la direction générale la feuille de route pluriannuelle d'innovation scientifique",
            "Piloter et arbitrer le portefeuille de projets R&D (nutraceutique animale, alternatives protéiques, santé préventive)",
            "Manager les équipes de chercheurs, ingénieurs et techniciens de recherche dans un esprit d'émulation collective",
            "Gérer la propriété intellectuelle (dépôt et défense des brevets, veille technologique et concurrentielle)",
            "Développer des alliances stratégiques avec les grands organismes publics de recherche (INRAE, Cirad, universités)"
        ],
        "typicalDay": [
            {"time": "09:00", "title": "Comité de direction stratégique", "desc": "Présentation des avancées d'un nouvel additif réduisant de 30% les émissions de méthane des bovins et arbitrage budgétaire."},
            {"time": "11:30", "title": "Revue de projet avec l'équipe de chercheurs", "desc": "Évaluation des résultats d'un essai clinique sur la santé intestinale des porcelets avec les ingénieurs d'essais."},
            {"time": "14:30", "title": "Négociation d'un partenariat académique", "desc": "Échange avec les directeurs d'unités de recherche de l'ESA et de l'INRAE pour monter un projet financé par l'ANR."},
            {"time": "17:00", "title": "Point avec le cabinet de propriété intellectuelle", "desc": "Revue des revendications d'un brevet international avant soumission à l'Office Européen des Brevets."}
        ],
        "skills": {
            "technical": [
                "Biologie, biochimie et physiologie appliquée de haut niveau (requis ESA)",
                "Management de portefeuilles de projets R&D complexes et gestion des risques d'échec",
                "Droit de la propriété intellectuelle et stratégie de brevets technologiques",
                "Réglementation européenne sur les nouveaux aliments (Novel Food, additifs EFSA)"
            ],
            "human": [
                "Esprit de synthèse stratégique et rigueur analytique exceptionnelle (requis ESA)",
                "Leadership charismatique et capacité à inspirer des équipes scientifiques de haut niveau",
                "Vision prospective et courage managérial dans les arbitrages d'arrêts de projets",
                "Excellente aisance relationnelle pour dialoguer avec les investisseurs et la direction"
            ],
            "tools": [
                "Logiciels de gestion de portefeuille de projets (Stage-Gate, Jira Align, Planisware)",
                "Bases de données de brevets mondiaux (Orbit, Derwent)",
                "Outils de modélisation économique du retour sur investissement R&D",
                "Outils de veille scientifique automatisée"
            ],
            "analytical": [
                "Évaluation de la faisabilité technico-économique des concepts d'innovation",
                "Analyse prévisionnelle de marché et anticipation des ruptures technologiques"
            ]
        },
        "specializations": ["R&D en nutrition et additifs pour l'alimentation animale", "R&D en biotechnologies et génétique animale", "R&D en transition bas carbone et agroécologie"],
        "studies": {
            "pathway": [
                {"step": "Diplôme d'excellence", "title": "Ingénieur Agronome ESA ou Grande École Scientifique", "desc": "Formation de base d'ingénieur combinant agronomie et management."},
                {"step": "Doctorat ou MBA", "title": "Doctorat en Sciences du Vivant (PhD) ou Executive MBA", "desc": "Reconnaissance de l'autorité scientifique ou perfectionnement en stratégie d'entreprise."},
                {"step": "Expérience confirmée", "title": "10 à 15 ans d'expérience en gestion de projets R&D innovants", "desc": "Parcours indispensable prouvant la capacité à transformer une idée en succès commercial."}
            ],
            "schools": [
                {"name": "Groupe ESA — Angers, France", "country": "France", "scope": "France"},
                {"name": "Grandes écoles agronomiques et universités d'excellence — France", "country": "France", "scope": "France"},
                {"name": "Instituts de recherche et écoles vétérinaires internationales", "country": "International", "scope": "International"}
            ],
            "certifications": ["Certification PMP (Project Management Professional)", "Auditeur Propriété Industrielle"],
            "schoolSubjects": ["Biologie avancée", "Management stratégique", "Finance d'entreprise", "Biochimie"]
        },
        "career": {
            "sectors": ["Groupes coopératifs et industriels de nutrition animale (CCPA, Wisium, Neovia, Cargill)", "Laboratoires vétérinaires et de santé animale (Ceva, Virbac, Boehringer)", "Groupes agroalimentaires mondiaux"],
            "employerTypes": ["Grandes entreprises agroalimentaires", "Firmes d'agrofourniture internationale", "Startups AgriTech en phase d'industrialisation"],
            "evolution": "Chef de projet R&D ➔ Directeur de laboratoire R&D ➔ Directeur R&D groupe ➔ Vice-Président Innovation / Directeur Général Adjoint",
            "pros": "Influence directe sur les grandes orientations d'une multinationale, salaire attractif, prestige scientifique et managérial.",
            "cons": "Forte pression sur les délais et la rentabilité financière des innovations, responsabilités juridiques élevées."
        },
        "gettingStarted": {
            "beginnerProject": "Analyser le rapport annuel d'un grand groupe semencier ou de nutrition animale pour comprendre sa stratégie d'investissement R&D.",
            "intermediateProject": "Construire une matrice d'évaluation des risques pour un projet fictif de développement d'un nouvel aliment d'allaitement pour veaux.",
            "advancedProject": "Rédiger une synthèse de brevet en identifiant la nouveauté, l'activité inventive et le champ des revendications.",
            "portfolioIdeas": ["Dossier de candidature à un appel à projets collaboratif européen", "Matrice de scoring de portefeuille de projets d'innovation"]
        },
        "aiImpact": {
            "level": "Révolutionnaire",
            "summary": "L'IA générative et prédictive accélère la découverte de nouvelles molécules bioactives et simule les interactions nutritionnelles in silico avant les premiers essais in vivo.",
            "automatedTasks": ["Criblage virtuel de bibliothèques de molécules par Deep Learning", "Veille concurrentielle et brevet automatisée"],
            "emergingSkills": ["Intégration des plateformes d'IA scientifique dans les pipelines de développement"],
            "humanEdge": "L'intuition stratégique, l'éthique de la recherche et la capacité à fédérer des collectifs humains autour d'une vision de rupture."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal et en Afrique de l'Ouest, les directeurs R&D dans le secteur animal pilotent la formulation d'aliments locaux valorisant les coproduits disponibles (sons de céréales, drêches de brasserie, farine d'insectes) pour réduire la dépendance aux importations de maïs et de soja.",
            "localSectors": ["Grands groupes meuniers et avicoles (Sedima, NMA Sanders, FKS)", "Centres régionaux de recherche appliquée (CORAF, CERAAS)", "Multinationales de santé animale implantées à Dakar"],
            "remoteWork": "Hybride (stratégie et réunions à distance / présence sur sites d'essais).",
            "entrepreneurship": "Création d'une entreprise innovante de R&D contractuelle pour tester des formulations d'aliments locaux en conditions sahéliennes."
        },
        "relatedJobSlugs": ["geneticien", "ingenieur-production-animale", "responsable-usine-aliment-betail", "directeur-marketing-filiere-animale"],
        "connectedFamilies": ["direction-strategie", "sciences-biotech", "gestion-finance"],
        "resources": [
            {"type": "article", "title": "Directeur recherche et développement — Groupe ESA", "url": "https://www.groupe-esa.com/productions-animales/les-metiers-de-la-production-animale/#directeur-recherche-et-developpement", "source": "Groupe ESA"},
            {"type": "formation", "title": "Ingénieur agronome ESA", "url": "https://www.groupe-esa.com/formation/ingenieur-agronome/", "source": "Groupe ESA"}
        ],
        "sources": ["Groupe ESA", "Association Nationale de la Recherche et de la Technologie (ANRT)", "Apec"],
        "interests": ["explorer-decouvrir", "direction-strategie", "negocier-convaincre"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon le Groupe ESA, un directeur R&D en agro-industrie consacre en moyenne entre 5% et 10% du chiffre d'affaires de son entreprise à la recherche, et coordonne des projets dont l'aboutissement sur le marché s'étend souvent sur plus de 7 ans.",
            "pourquoi": "Entre la découverte en laboratoire, les tests de toxicité, les essais d'efficacité en élevage et l'homologation réglementaire par les autorités européennes (EFSA), le temps de l'innovation reste rigoureux et sécurisé.",
            "a_retenir": "Le visionnaire qui transforme les découvertes de la science en progrès durables pour nos assiettes et la planète."
        }
    },

    # -----------------------------------------------------------------------
    # 9. RESPONSABLE D'USINE D'ALIMENT DU BÉTAIL
    # -----------------------------------------------------------------------
    {
        "id": "responsable-usine-aliment-betail",
        "slug": "responsable-usine-aliment-betail",
        "title": "Responsable d'Usine d'Aliment du Bétail (Nutrition Animale)",
        "aliases": ["Directeur d'usine de nutrition animale", "Responsable de site industriel aliment bétail", "Chef d'usine agro-industrielle animale"],
        "icon": "🏭",
        "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Animale, Élevage & Filières",
        "domainId": "elevage-productions-animales",
        "subdomain": "Alimentation animale & agrofourniture",
        "sourceESA": True,
        "isEmerging": False,
        "level": "BTS Métiers de l'élevage, BTS Agroalimentaire ou Ingénieur agronome ESA",
        "salary": "🇫🇷 France : 3 000 - 5 200 € net/mois (~45 000 - 75 000 € brut/an, Source : Groupe ESA / Agroalimentaire) • 🇸🇳 Sénégal : 600 000 - 2 200 000 FCFA / mois (Usines d'aliment avicole et bétail, Sedima, NMA, FKS Dakar)",
        "simpleDefinition": "Le responsable d'usine d'aliment du bétail assure le pilotage, l'organisation et la planification de la production d'aliments composés pour animaux, de l'arrivée des matières premières jusqu'à l'expédition et au chargement des camions de produits finis.",
        "shortDescription": "Fiche officielle du Groupe ESA, il dirige un site industriel de haute précision fabricant granulés, farines et mélanges nutritifs pour les élevages.",
        "longDescription": "Comme formulé dans le référentiel officiel du Groupe ESA, le responsable d'usine d'aliment du bétail assure le pilotage, l'organisation et la planification de la production dans le sens des objectifs fixés dans le respect des normes établies, de l'arrivée des matières premières jusqu'aux expéditions et chargements camions des produits finis. Ses qualités et compétences documentées par l'ESA sont l'humilité, le sens de l'organisation et de l'à-propos, une rigueur exemplaire et une conscience aiguë des enjeux sanitaires et économiques. Il gère les équipes de fabrication, la maintenance des broyeurs et presses à granuler, la traçabilité des lots et la prévention des contaminations croisées.",
        "mainObjective": "Produire dans les délais et au moindre coût des aliments composés de haute valeur nutritionnelle dans le respect strict des normes de sécurité sanitaire.",
        "companyRole": "Patron de site, garant de la performance industrielle et de la sécurité des personnes et des aliments.",
        "species": ["Bovins", "Porcins", "Volailles", "Lapins", "Ovins / Caprins"],
        "workEnvironment": [
            "🏭 Usines d'aliments du bétail (tours de dosage, silos de stockage, presses de granulation)",
            "🖥️ Salles de contrôle automatisées et postes de supervision industrielle",
            "🚚 Quais de réception des céréales en vrac et d'expédition des camions-citernes"
        ],
        "missions": [
            "Planifier et ordonnancer les campagnes de fabrication selon les commandes des éleveurs et des technico-commerciaux",
            "Superviser la réception des matières premières (céréales, tourteaux, prémix de vitamines) et contrôler leur qualité",
            "Manager les équipes de production, maintenance et logistique (opérateurs, caristes, chauffeurs)",
            "Veiller au respect scrupuleux des protocoles de traçabilité, de nettoyage des lignes et de prévention des contaminations croisées",
            "Piloter le budget du site, optimiser la consommation énergétique (vapeur pour la granulation) et réduire les pertes matières"
        ],
        "typicalDay": [
            {"time": "06:30", "title": "Tournée sécurité et passage en salle de contrôle", "desc": "Contrôle des volumes fabriqués par l'équipe de nuit, vérification des indicateurs d'usure des presses de granulation."},
            {"time": "09:00", "title": "Point logistique et ordonnancement", "desc": "Coordination avec le service approvisionnement pour planifier le déchargement de 4 camions de tourteau de colza."},
            {"time": "14:00", "title": "Audit qualité interne d'une ligne de fabrication", "desc": "Vérification des procédures de purge entre un aliment porcelet médicamenteux et un aliment bovin standard."},
            {"time": "16:30", "title": "Réunion sécurité et performance avec les chefs d'équipe", "desc": "Analyse d'un incident mécanique sur un élévateur à godets et validation du plan d'amélioration continue."}
        ],
        "skills": {
            "technical": [
                "Technologies meunières et procédés de nutrition animale (broyage, mélange, granulation sous vapeur)",
                "Gestion industrielle de production (ordonnancement, lean manufacturing, TRS)",
                "Normes sanitaires drastiques de la nutrition animale (Oqualim, GMP+, FAMI-QS)",
                "Maintenance industrielle des équipements électromécaniques lourds"
            ],
            "human": [
                "Humilité et grande conscience des enjeux sanitaires pour la santé animale et humaine (souligné par l'ESA)",
                "Sens aigu de l'organisation et de l'à-propos face aux pannes imprévues (requis ESA)",
                "Rigueur managériale et écoute active de ses opérateurs de terrain",
                "Fermeté absolue sur l'application des règles de sécurité au travail"
            ],
            "tools": [
                "Superviseurs industriels et SCADA de dosage d'aliments",
                "ERP de production et d'ordonnancement (SAP, Wonderware)",
                "Presses à granuler haute pression et broyeurs à marteaux",
                "Équipements de nettoyage en place et détecteurs de métaux"
            ],
            "analytical": [
                "Calcul et suivi du Taux de Rendement Synthétique (TRS) des lignes",
                "Optimisation du bilan énergétique au kilowatt par tonne produite"
            ]
        },
        "specializations": ["Fabrication d'aliments biologiques certifiés", "Nutrition spécifique des jeunes animaux (aliments porcelets et poussins)", "Gestion de multi-sites industriels d'agrofourniture"],
        "studies": {
            "pathway": [
                {"step": "Diplôme Bac +2", "title": "BTS Métiers de l'élevage (Productions Animales) ou BTS Agroalimentaire", "desc": "Compréhension des besoins nutritionnels des animaux et des technologies industrielles."},
                {"step": "Licence Pro", "title": "Licence Pro Management de la Production Industrielle Agroalimentaire", "desc": "Perfectionnement en gestion d'atelier et management d'équipe."},
                {"step": "Diplôme d'Ingénieur", "title": "Diplôme d'Ingénieur Agronome du Groupe ESA", "desc": "Formation de référence pour la direction d'usines de grande capacité."}
            ],
            "schools": [
                {"name": "Groupe ESA — Angers, France", "country": "France", "scope": "France"},
                {"name": "Écoles nationales supérieures agronomiques et agroalimentaires (AgroParisTech, Oniris) — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification Oqualim / Guide des Bonnes Pratiques de la Nutrition Animale", "Habilitation Sauveteur Secouriste du Travail"],
            "schoolSubjects": ["Génie industriel", "Nutrition animale", "Qualité & Hygiène", "Management d'équipe"]
        },
        "career": {
            "sectors": ["Coopératives agricoles fabricants d'aliments (Terrena, Agrial, Eureden)", "Groupes industriels privés de nutrition animale (Sanders / Avril, De Heus, CCPA)", "Fabricants spécialisés d'aliments pour chevaux et animaux de compagnie"],
            "employerTypes": ["Coopératives polyvalentes", "Entreprises multinationales d'agrofourniture"],
            "evolution": "Responsable d'équipe fabrication ➔ Responsable d'usine d'aliment du bétail ➔ Directeur industriel multi-usines ➔ Directeur des opérations d'un groupe agro-industriel",
            "pros": "Poste à haute responsabilité managériale et industrielle, métier dynamique où aucune journée ne se ressemble, rémunération attractive.",
            "cons": "Environnement poussiéreux et bruyant par moments, astreintes industrielles 24h/24, responsabilité directe en cas d'erreur de dosage."
        },
        "gettingStarted": {
            "beginnerProject": "Visiter une minoterie ou une usine d'aliment pour comprendre le fonctionnement d'une tour de dosage gravitaire.",
            "intermediateProject": "Élaborer une fiche de contrôle qualité pour la réception d'un lot de 30 tonnes de maïs grain (humidité, impuretés, mycotoxines).",
            "advancedProject": "Modéliser sous tableur l'ordonnancement de fabrication d'une journée en minimisant les temps de nettoyage entre 4 recettes d'aliments différentes.",
            "portfolioIdeas": ["Schéma de flux matière d'une usine d'aliment du bétail", "Plan de prévention des poussières et risques ATEX"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA pilote les automates de dosage au gramme près en temps réel selon les analyses spectrométriques des matières premières et anticipe les pannes de presses par maintenance prédictive.",
            "automatedTasks": ["Ajustement automatique du temps de mélange et de vapeur selon l'humidité du grain", "Optimisation automatique de la consommation électrique lors des heures creuses"],
            "emergingSkills": ["Supervision d'usines 4.0 interconnectées aux commandes automatiques des fermes"],
            "humanEdge": "Le leadership pour souder des équipes de fabrication, l'humilité et le sens de l'à-propos face aux crises imprévues."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la filière avicole a explosé avec une production de plusieurs centaines de milliers de tonnes d'aliments par an. Des usines ultramodernes comme Sedima, NMA Sanders et FKS à Dakar emploient des responsables d'usine pour garantir la fourniture quotidienne des fermes des Niayes.",
            "localSectors": ["Industries d'aliments avicoles et bétail de la région dakaroise et de Thiès", "Unités de transformation de tourteau d'arachide (Sonacos)", "Projets de valorisation des résidus de canne à sucre de la CSS à Richard-Toll"],
            "remoteWork": "Strictement impossible, présence physique quotidienne impérative sur le site industriel.",
            "entrepreneurship": "Création d'une micro-usine régionale d'aliment du bétail valorisant les céréales locales (mil, sorgho, maïs) et les sous-produits de décorticage pour approvisionner les éleveurs ruraux."
        },
        "relatedJobSlugs": ["manager-agrofourniture", "technico-commercial-nutrition-animale", "coordinateur-qhse-agro", "responsable-achat-approvisionnement-agri"],
        "connectedFamilies": ["industrie-mecanique", "gestion-finance", "transport-logistique"],
        "resources": [
            {"type": "article", "title": "Responsable d'usine d'aliment du bétail — Groupe ESA", "url": "https://www.groupe-esa.com/productions-animales/les-metiers-de-la-production-animale/#responsable-dusine-daliment-du-betail", "source": "Groupe ESA"}
        ],
        "sources": ["Groupe ESA", "SNIA (Syndicat National de l'Industrie de la Nutrition Animale)", "Coop de France Nutrition Animale"],
        "interests": ["construire-fabriquer", "nature-environnement", "donnees-chiffres"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Une grande usine d'aliment du bétail peut fabriquer plus de 200 000 tonnes d'aliments par an avec plus de 80 recettes différentes adaptées aux vaches laitières, taurillons, poulets de chair, pondeuses ou porcelets.",
            "pourquoi": "Chaque espèce et chaque stade de croissance exige un équilibre précis au pourcent près en protéines, acides aminés, cellulose et minéraux pour garantir la santé des animaux sans gaspillage.",
            "a_retenir": "Le chef d'orchestre industriel qui transforme les récoltes de la terre en nourriture équilibrée pour les animaux d'élevage."
        }
    },

    # -----------------------------------------------------------------------
    # 10. MANAGER DANS L'AGROFOURNITURE
    # -----------------------------------------------------------------------
    {
        "id": "manager-agrofourniture",
        "slug": "manager-agrofourniture",
        "title": "Manager dans l'Agrofourniture",
        "aliases": ["Responsable d'agence agrofourniture", "Chef des ventes agrofourniture", "Responsable commercial élevage et intrants"],
        "icon": "📈",
        "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Animale, Élevage & Filières",
        "domainId": "elevage-productions-animales",
        "subdomain": "Alimentation animale & agrofourniture",
        "sourceESA": True,
        "isEmerging": False,
        "level": "BTS Métiers de l'élevage, Licence Pro ou Ingénieur agronome ESA",
        "salary": "🇫🇷 France : 2 800 - 5 000 € net/mois + primes sur objectifs (~40 000 - 70 000 € brut/an, Source : Groupe ESA / Apecita) • 🇸🇳 Sénégal : 450 000 - 1 600 000 FCFA / mois (Entreprises de distribution d'intrants et provendes)",
        "simpleDefinition": "Le manager dans l'agrofourniture met en œuvre la politique commerciale définie par la direction dans le domaine des intrants agricoles (semences, alimentation animale, minéraux, matériel d'élevage) et pilote une équipe de technico-commerciaux sur le terrain.",
        "shortDescription": "Fiche documentée par le Groupe ESA, ce manager commercial allie connaissance pointue des besoins d'élevage, négociation sur le terrain et animation d'équipe.",
        "longDescription": "Comme l'énonce précisément la page officielle du Groupe ESA, le manager dans l'agrofourniture met en œuvre la politique commerciale définie par la direction dans le domaine de l'agrofourniture (semences, engrais, phytosanitaires, alimentation animale, matériel agricole). Il est responsable de la réalisation des objectifs quantitatifs et qualitatifs. Ses compétences clés documentées par l'ESA sont la négociation, la persuasion, la présence active sur le terrain, le management, le commerce, l'animation d'équipe et l'analyse continue des résultats.",
        "mainObjective": "Développer le chiffre d'affaires et les parts de marché d'une gamme de produits d'agrofourniture tout en garantissant un conseil technique de qualité aux éleveurs.",
        "companyRole": "Moteur commercial et pilote opérationnel de la relation client avec le monde agricole.",
        "species": ["Toutes espèces d'élevage et productions végétales associées"],
        "workEnvironment": [
            "🏢 Négoces agricoles, coopératives et firmes d'agrofourniture",
            "🚗 Présence fréquente sur le terrain auprès des agriculteurs et des équipes commerciales",
            "💻 Bureau de gestion commerciale, réunions régionales et salons professionnels"
        ],
        "missions": [
            "Décliner la stratégie commerciale de la marque sur son territoire et fixer les objectifs de son équipe",
            "Animer, coacher et former au quotidien les technico-commerciaux lors de visites en duo chez les éleveurs",
            "Négocier directement les contrats importants avec les grands comptes, coopératives et groupements d'éleveurs",
            "Analyser les résultats de vente, les marges et les parts de marché pour ajuster les actions promotionnelles",
            "Assurer une veille concurrentielle sur les nouveaux produits de nutrition et de santé animale"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Briefing matinal de l'équipe commerciale", "desc": "Revue des commandes d'aliments du bétail de la semaine et point sur les cibles de prospection d'éleveurs laitiers."},
            {"time": "10:30", "title": "Visite commerciale conjointe sur le terrain", "desc": "Accompagnement d'un jeune technico-commercial chez un éleveur porcin pour négocier un contrat annuel de prémix."},
            {"time": "14:30", "title": "Analyse des tableaux de bord de vente", "desc": "Suivi des réalisations du mois par secteur géographique et calcul des marges brutes générées."},
            {"time": "17:00", "title": "Échange avec les formulateurs de l'usine d'aliment", "desc": "Remontée des retours clients sur l'appétence d'un nouvel aliment granulé pour veaux et ajustement de l'offre."}
        ],
        "skills": {
            "technical": [
                "Excellente maîtrise des gammes d'agrofourniture (nutrition animale, minéraux, semences fourragères)",
                "Techniques de vente complexe B2B appliquées au secteur agricole",
                "Management de la performance commerciale et animation de réseau",
                "Gestion financière de centre de profit (chiffre d'affaires, marges, encours clients)"
            ],
            "human": [
                "Négociation et persuasion d'excellence (souligné par le Groupe ESA)",
                "Sens aigu du management, écoute et capacité à motiver ses équipes (requis ESA)",
                "Goût affirmé pour le terrain et le contact authentique avec le monde rural (requis ESA)",
                "Rigueur d'analyse des résultats et réactivité face à la concurrence"
            ],
            "tools": [
                "Logiciels de CRM agricole et suivi de clientèle (Salesforce, E-Cow, Agreo)",
                "Tableaux de bord de Business Intelligence (Power BI, Excel avancé)",
                "Outils de calcul de rations et simulations technico-économiques",
                "Outils de visioconférence et présentations commerciales"
            ],
            "analytical": [
                "Analyse du retour sur investissement des actions de promotion commerciale",
                "Segmentation du portefeuille clients et identification des potentiels de croissance"
            ]
        },
        "specializations": ["Management de filière nutrition animale", "Management en agrofourniture végétale et semences", "Direction de réseau de distribution agricole régional"],
        "studies": {
            "pathway": [
                {"step": "Diplôme Bac +2", "title": "BTS Métiers de l'élevage (Productions Animales) ou BTS Technico-Commercial", "desc": "Double compétence technique agricole et relation commerciale."},
                {"step": "Licence Pro / Bachelor", "title": "Licence Pro Technico-Commercial en Agrofourniture ou Bachelor ESA", "desc": "Approfondissement de la négociation et du management des ventes."},
                {"step": "Bac +5 / Ingénieur", "title": "Diplôme d'Ingénieur Agronome du Groupe ESA ou Master Commerce Agricole", "desc": "Accès direct aux postes de chef des ventes national et direction commerciale."}
            ],
            "schools": [
                {"name": "Groupe ESA — Angers, France", "country": "France", "scope": "France"},
                {"name": "Lycées agricoles et écoles de commerce agricole spécialisées — France", "country": "France", "scope": "France"},
                {"name": "Institut Supérieur de Management (ISM Dakar) / Agro-business — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat de Management Commercial", "Certiphyto Décideur"],
            "schoolSubjects": ["Techniques de vente", "Zootechnie", "Comptabilité de gestion", "Négociation"]
        },
        "career": {
            "sectors": ["Grandes firmes internationales de nutrition animale et d'agrofourniture (Avril, Cargill, Lhoist, Trouw Nutrition)", "Coopératives d'approvisionnement agricole régionales", "Négoces agricoles indépendants"],
            "employerTypes": ["Entreprises de distribution agricole", "Firmes d'alimentation animale", "Coopératives d'élevage"],
            "evolution": "Technico-commercial de terrain ➔ Manager d'équipe agrofourniture ➔ Directeur régional des ventes ➔ Directeur commercial de groupe",
            "pros": "Métier stimulant à fort contact humain, rémunération valorisante avec primes, autonomie d'action sur son territoire.",
            "cons": "Pression sur l'atteinte des objectifs de chiffre d'affaires, déplacements fréquents en voiture, gestion des impayés délicate."
        },
        "gettingStarted": {
            "beginnerProject": "Accompagner un délégué commercial d'agrofourniture pendant une journée de tournée pour observer les techniques d'argumentation.",
            "intermediateProject": "Bâtir un argumentaire commercial comparatif entre deux formules de compléments minéraux pour vaches taries.",
            "advancedProject": "Élaborer un plan d'action commercial complet pour lancer une nouvelle gamme de protéagineux auprès de 50 éleveurs locaux.",
            "portfolioIdeas": ["Plan de prospection commerciale territorialisé", "Tableau de bord de suivi du taux de transformation devis-ventes"]
        },
        "aiImpact": {
            "level": "Modéré à Élevé",
            "summary": "L'IA analyse l'historique d'achats des exploitations et les données météo pour suggérer aux commerciaux le produit idéal à proposer au moment opportun.",
            "automatedTasks": ["Scoring prédictif des besoins de réapprovisionnement des élevages", "Génération automatique de propositions tarifaires personnalisées"],
            "emergingSkills": ["Utilisation des CRM prédictifs et de la vente assistée par intelligence artificielle"],
            "humanEdge": "La confiance personnelle et l'écoute sincère qui lient durablement un éleveur à son conseiller commercial."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la distribution d'aliments du bétail, de poussins d'un jour, de vaccins et de semences fourragères connaît un essor spectaculaire. Les managers d'agrofourniture coordonnent les réseaux de boutiques et de distributeurs dans des pôles comme Thiès, Mbour, Kaolack et Saint-Louis.",
            "localSectors": ["Réseaux de distribution d'intrants avicoles et bovins", "Comptoirs d'agrofourniture ruraux", "Coopératives maraîchères et pastorales"],
            "remoteWork": "Faible (métier de contact direct et d'animation de terrain).",
            "entrepreneurship": "Création d'un réseau franchisé de distribution d'intrants d'élevage et de conseil de proximité dans les zones rurales de l'intérieur du pays."
        },
        "relatedJobSlugs": ["technico-commercial-nutrition-animale", "responsable-usine-aliment-betail", "directeur-marketing-filiere-animale", "responsable-achat-approvisionnement-agri"],
        "connectedFamilies": ["commerce-marketing", "gestion-finance", "direction-strategie"],
        "resources": [
            {"type": "article", "title": "Manager dans l'agrofourniture — Groupe ESA", "url": "https://www.groupe-esa.com/productions-animales/les-metiers-de-la-production-animale/#manager-dans-lagrofourniture", "source": "Groupe ESA"},
            {"type": "formation", "title": "Formations commerce et management — Groupe ESA", "url": "https://www.groupe-esa.com/commerce-distribution-marketing/", "source": "Groupe ESA"}
        ],
        "sources": ["Groupe ESA", "Apecita", "Fédération du Négoce Agricole (FNA)"],
        "interests": ["negocier-convaincre", "nature-environnement", "donnees-chiffres"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon les statistiques d'insertion de l'enseignement supérieur agricole et du Groupe ESA, les fonctions managériales en agrofourniture recrutent massivement avec des taux de placement proches de 100% dans les six mois suivant l'obtention du diplôme.",
            "pourquoi": "L'évolution des réglementations environnementales et la complexification des rations animales exigent des managers capables d'apporter un conseil technique irréprochable au-delà de la simple vente.",
            "a_retenir": "Le pont commercial qui apporte aux éleveurs les solutions technologiques et nutritionnelles pour réussir."
        }
    }
]

from animal_production_jobs_part2 import ANIMAL_PRODUCTION_JOBS_PART2

ANIMAL_PRODUCTION_JOBS = ANIMAL_PRODUCTION_JOBS_PART1 + ANIMAL_PRODUCTION_JOBS_PART2

# execution/energy_jobs_part2.py
# Fiches Métiers Dérivées du Référentiel Officiel Energierecrute (Portail Emploi & Formation Énergie)
# Fiches Métiers 14 à 26 : Biomasse solide, Réseaux Électriques & Smart Grids, Nucléaire, Génie Climatique CVC, Audit MEER, Trading, Vente B2B, HSE, Exploration
# Structure Haute Définition alignée sur les 6 onglets du Dossier Métier

ENERGY_JOBS_PART2 = [
    # -----------------------------------------------------------------------
    # 14. TECHNICIEN EN BIOMASSE & CHAUFFERIES BOIS-ÉNERGIE
    # -----------------------------------------------------------------------
    {
        "id": "technicien-filiere-biomasse-bois-energie",
        "slug": "technicien-filiere-biomasse-bois-energie",
        "title": "Technicien en Biomasse & Chaufferies Bois-Énergie",
        "aliases": ["Technicien chaufferies industrielles biomasse", "Conducteur de chaufferie bois", "Exploitant réseau de chaleur biomasse"],
        "icon": "🪵",
        "image": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Biomasse, Biogaz & Valorisation Énergétique",
        "domainId": "biomasse-biogaz-dechets",
        "subdomain": "Biomasse solide & Chaufferies bois",
        "energyTechnology": ["Chaudières industrielles biomasse", "Granulés & Plaquettes forestières", "Réseaux de chaleur urbains"],
        "energySector": "Chaleur Renouvelable & Sylviculture Énergétique",
        "sourceEnergierecrute": True,
        "isEmerging": False,
        "level": "Bac Pro à Bac +2 (BTS FED option C - Génie thermique, BTS MEER)",
        "salary": "🇫🇷 France : 2 000 - 3 100 € net/mois (~28 000 - 44 000 € brut/an, Source : Energierecrute) • 🇸🇳 Sénégal : 280 000 - 750 000 FCFA / mois (Agro-industries huilières, canne à sucre, chaufferies)",
        "simpleDefinition": "Le technicien biomasse pilote l'alimentation, la combustion et la maintenance de grandes installations de chauffage collectif et industriel fonctionnant aux granulés, plaquettes forestières et résidus agricoles.",
        "shortDescription": "Spécialiste de la chaleur renouvelable répertorié par Energierecrute, il assure l'approvisionnement, le réglage de combustion et la maintenance de chaufferies bois et de réseaux de chaleur urbains.",
        "longDescription": "Comme décrit dans les référentiels de formations et d'offres d'Energierecrute (notamment les cursus BTS FED et MEER), le technicien en biomasse et chaufferies bois-énergie supervise le fonctionnement complet d'installations thermiques alimentées par du combustible végétal (plaquettes forestières, broyats, sciures, granulés ou bagasse agro-industrielle). Il contrôle la qualité hygrométrique du combustible à la livraison, calibre les vis sans fin et convoyeurs d'alimentation, surveille les paramètres de combustion (taux d'oxygène, températures de foyer) et gère le traitement des fumées (dépoussiéreurs, filtres à manches, électrofiltres) ainsi que l'évacuation des cendres pour respecter les seuils stricts d'émissions atmosphériques.",
        "mainObjective": "Garantir une production continue et décarbonée de vapeur et d'eau chaude tout en optimisant le rendement thermique et en respectant les normes de rejets atmosphériques.",
        "companyRole": "Garant opérationnel de la production thermique et de la pérennité des équipements de combustion biomasse.",
        "workEnvironment": [
            "🏭 Chaufferies collectives urbaines et centrales de cogénération biomasse",
            "🚜 Silos de stockage de combustible bois et plateformes d'approvisionnement forestier",
            "🎛️ Salles de commande automatisées et locaux techniques de distribution de chaleur"
        ],
        "missions": [
            "Superviser les réceptions de combustible bois (mesure d'humidité, granulométrie, pesage) et la gestion des stocks en silo",
            "Conduire les chaudières biomasse automatiques et ajuster les ratios air/combustible pour optimiser le rendement",
            "Effectuer la maintenance préventive et curative des convoyeurs, vis sans fin, grilles de combustion et décendrages",
            "Contrôler le système d'épuration des fumées (électrofiltres, filtres multicyclones) et mesurer les émissions de poussières",
            "Gérer les approvisionnements de secours et basculer sur les générateurs d'appoint lors des pointes de froid"
        ],
        "typicalDay": [
            {"time": "07:30", "title": "Tournée d'inspection des foyers", "desc": "Contrôle visuel de la flamme de la chaudière bois de 10 MW, vérification de l'épaisseur du lit de combustion et relevé des pressions différentielles."},
            {"time": "10:00", "title": "Réception d'un camion de plaquettes forestières", "desc": "Prélèvement d'échantillons et passage à l'humidimètre pour valider le taux d'humidité contractuel (<35%) avant dépotage."},
            {"time": "13:30", "title": "Maintenance curative", "desc": "Remplacement d'un roulement à billes grippé sur la vis d'extraction de cendres sous le filtre multicyclone."},
            {"time": "16:00", "title": "Analyse de la télésurveillance", "desc": "Examen des températures de départ et de retour du réseau de chaleur urbain pour caler la loi d'eau du lendemain."}
        ],
        "skills": {
            "technical": [
                "Combustion thermique des solides, cinétique de flamme et lois d'eau",
                "Mécanique industrielle (convoyeurs à bande, vis d'Archimède, trémies vibrantes)",
                "Dépoussiérage industriel et filtration des fumées (normes MCPD)",
                "Automates programmables industriels (Schneider, Siemens) et supervision SCADA"
            ],
            "human": [
                "Polyvalence technique (mécanique, électrotechnique, thermique)",
                "Réactivité face aux alertes de bourrage ou de surchauffe",
                "Sens aigu des règles de sécurité (poussières, atmosphères ATEX, risques d'incendie)"
            ],
            "tools": [
                "Humidimètres de précision pour biomasse",
                "Analyseurs de gaz de combustion portables (Testo, Ecom)",
                "Logiciels de supervision de réseaux de chaleur (Schneider Wonderware, WinCC)",
                "Appareils d'alignement laser pour pompes et motoréducteurs"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Bac Pro (Bac)", "title": "Bac Pro MELEC ou Métiers du Froid et des Énergies", "desc": "Acquisition des bases en électricité industrielle, tuyauterie et automatismes."},
                {"step": "BTS (Bac +2)", "title": "BTS Fluides Énergies Domotique (BTS FED option C) ou BTS MEER", "desc": "Formation de référence pour la conduite des chaufferies et la thermique industrielle."},
                {"step": "Licence Pro (Bac +3)", "title": "Licence Pro Métiers de l'Énergétique et de l'Environnement", "desc": "Perfectionnement en gestion des réseaux de chaleur urbains et optimisation environnementale."}
            ],
            "schools": [
                {"name": "Lycées Techniques préparant le BTS FED et BTS MEER — France", "country": "France", "scope": "France"},
                {"name": "IUT Génie Thermique et Énergie (GTE) — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) / Génie Énergétique — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Habilitation électrique BR/BC", "Certificat de conduite de générateurs de vapeur", "Formation risque poussières ATEX"],
            "schoolSubjects": ["Thermodynamique", "Mécanique industrielle", "Automatisme", "Physico-chimie de la combustion"]
        },
        "career": {
            "sectors": ["Exploitants de réseaux de chaleur urbains (Dalkia, ENGIE Solutions, Idex, Coriance)", "Agro-industries papetières, sucrières et huilières", "Collectivités territoriales et régies d'énergie"],
            "employerTypes": ["Entreprises de services énergétiques", "Groupes agro-industriels", "Syndicats mixtes d'énergie"],
            "evolution": "Technicien de maintenance ➔ Conducteur principal de chaufferie ➔ Chef d'exploitation réseau de chaleur ➔ Responsable d'agence thermique",
            "pros": "Métier concret au grand air et en salle des machines, filière en pleine expansion subventionnée par les fonds climat.",
            "cons": "Environnement poussiéreux, travail en astreinte hivernale le week-end."
        },
        "gettingStarted": {
            "beginnerProject": "Visiter une chaufferie bois de quartier et relever les étapes de filtration des fumées.",
            "intermediateProject": "Calculer la masse de bois nécessaire pour remplacer 10 000 litres de fioul de chauffage.",
            "advancedProject": "Modéliser le bilan carbone complet de l'approvisionnement en plaquettes forestières dans un rayon de 50 km.",
            "portfolioIdeas": ["Rapport d'audit de décendrage d'une chaudière biomasse", "Schéma de principe d'un réseau de chaleur avec sous-stations"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des algorithmes prédictifs croisent la météo à J+1 avec l'inertie des bâtiments pour doser l'injection de combustible en continu.",
            "automatedTasks": ["Ajustement automatisé des lois d'eau", "Détection automatique de baisse anormale de tirage"],
            "emergingSkills": ["Utilisation de jumeaux numériques de réseaux de distribution de chaleur"],
            "humanEdge": "La dextérité manuelle pour réparer les vis d'alimentation et le jugement humain sur la qualité du bois reçu."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la valorisation de la biomasse est vitale pour l'agro-industrie : la Compagnie Sucrière Sénégalaise (CSS) à Richard-Toll valorise la bagasse de canne à sucre pour alimenter sa centrale de cogénération, tandis que les coques d'arachide alimentent les chaudières des huileries de la Sonacos.",
            "localSectors": ["Compagnie Sucrière Sénégalaise (CSS Richard-Toll)", "Huileries Sonacos (Kaolack, Diourbel)", "Projets de valorisation des résidus de typha sur le fleuve Sénégal"],
            "remoteWork": "Non compatible (présence quotidienne obligatoire sur le site thermique).",
            "entrepreneurship": "Création d'une entreprise de granulation de biomasse locale (typha, balles de riz) pour alimenter des chaudières écologiques."
        },
        "relatedJobSlugs": ["responsable-unite-biogaz-methanisation", "technicien-etudes-energetiques-industrielles", "energy-manager-auditeur-energetique"],
        "connectedFamilies": ["agriculture-agritech", "industrie-mecanique"],
        "resources": [
            {"type": "guide", "title": "Filière biomasse et bois-énergie — Energierecrute", "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php", "source": "Energierecrute"},
            {"type": "organisme", "title": "Comité Interprofessionnel du Bois Énergie (CIBE)", "url": "https://cibe.fr/", "source": "CIBE"}
        ],
        "sources": ["Energierecrute", "ADEME", "CIBE"],
        "interests": ["construire-fabriquer", "nature-environnement", "technique-outils"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Le bois-énergie représente à lui seul plus de 35% de l'ensemble de la production d'énergie renouvelable en France, surpassant très largement l'éolien et le solaire dans le mix de chaleur.",
            "pourquoi": "C'est une énergie de base stockable qui ne dépend ni de la présence de vent ni de l'ensoleillement pour chauffer les foyers.",
            "a_retenir": "L'énergie renouvelable la plus utilisée en France pour le chauffage collectif et industriel."
        }
    },

    # -----------------------------------------------------------------------
    # 15. MONTEUR-TECHNICIEN DE RÉSEAUX ÉLECTRIQUES AÉRIENS & SOUTERRAINS
    # -----------------------------------------------------------------------
    {
        "id": "monteur-technicien-reseaux-electriques",
        "slug": "monteur-technicien-reseaux-electriques",
        "title": "Monteur-Technicien de Réseaux Électriques Aériens & Souterrains",
        "aliases": ["Monteur de lignes haute tension", "Lignard Enedis/RTE", "Électricien réseaux de distribution"],
        "icon": "🗼",
        "image": "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Réseaux Électriques, Transport & Distribution",
        "domainId": "reseaux-transport-distribution",
        "subdomain": "Construction & Travaux de réseaux HT/BT",
        "energyTechnology": ["Lignes aériennes HTA/HTB", "Câbles souterrains haute tension", "Postes de transformation HTA/BT"],
        "energySector": "Infrastructure de Transport & Distribution Électrique",
        "sourceEnergierecrute": True,
        "isEmerging": False,
        "level": "CAP / Bac Pro (MELEC) à Bac +2 (BTS Électrotechnique)",
        "salary": "🇫🇷 France : 1 900 - 3 200 € net/mois (~27 000 - 45 000 € brut/an + primes, Source : Energierecrute) • 🇸🇳 Sénégal : 250 000 - 800 000 FCFA / mois (Senelec, entreprises de transport de lignes HT)",
        "simpleDefinition": "Le monteur de réseaux électriques construit, entretient et modernise les lignes aériennes, les câbles souterrains et les postes de transformation qui acheminent l'électricité des centrales jusqu'aux usagers.",
        "shortDescription": "Métier de terrain essentiel répertorié par Energierecrute, le technicien de réseaux bâtit l'épine dorsale électrique indispensable au raccordement des énergies renouvelables et des bornes de recharge.",
        "longDescription": "Comme mis en lumière par Energierecrute dans ses rubriques dédiées aux réseaux électriques (Enedis, RTE, Bouygues Energies & Services, SPIE, Eiffage Énergie Systèmes), le monteur-technicien de réseaux intervient sur les lignes aériennes à haute tension (HTA, HTB) et sur les canalisations souterraines en milieu urbain ou rural. Il lève des pylônes, déroule et tend des câbles conducteurs de forte section, réalise des boîtes de jonction complexes et raccorde les postes de transformation moyenne/basse tension. Travaillant en hauteur ou en tranchée et souvent sous astreinte météo (dépannage après tempête), il applique des procédures de consignation électrique d'une rigueur absolue.",
        "mainObjective": "Assurer la continuité, la sécurité et l'extension du transit d'énergie électrique sur l'ensemble du territoire national.",
        "companyRole": "Artisan de terrain garantissant la solidité et la fiabilité physique du réseau de transport et de distribution.",
        "workEnvironment": [
            "🌲 Chantiers extérieurs en pleine nature (pylônes, grandes portées de franchissement)",
            "🏙️ Voies publiques urbaines pour la pose et le raccordement de câbles souterrains",
            "⚡ Postes sources et sous-stations électriques haute tension"
        ],
        "missions": [
            "Monter, assembler et hisser les supports de lignes aériennes (pylônes métalliques, poteaux béton ou bois)",
            "Tirer, dérouler, régler la tension mécanique et ancrer les faisceaux de câbles conducteurs et de câbles de garde",
            "Effectuer la pose et le raccordement d'accessoires sur câbles souterrains (extrémités, boîtes de jonction thermo-rétractables)",
            "Implanter et équiper les postes de transformation HTA/BT (cellules disjoncteurs, transformateurs, tableaux BT)",
            "Intervenir d'urgence en astreinte pour localiser les pannes de câble et rétablir le courant après des intempéries"
        ],
        "typicalDay": [
            {"time": "07:00", "title": "Brefing sécurité et vérification du matériel", "desc": "Briefing sécurité chantier avec le chef d'équipe, contrôle des harnais anti-chute, perches d'électrocution et vérificateurs d'absence de tension (VAT)."},
            {"time": "08:30", "title": "Opération de consignation", "desc": "Réception de l'attestation de consignation délivrée par le chargé d'exploitation de réseau et pose des mises à la terre et en court-circuit (MALT/CC)."},
            {"time": "11:00", "title": "Travail en hauteur sur pylône", "desc": "Ascension d'un pylône de 35 mètres pour le remplacement d'une chaîne d'isolateurs en verre détériorée par un coup de foudre."},
            {"time": "14:30", "title": "Jonction de câble souterrain", "desc": "Réalisation d'une boîte de jonction triphasée 20 000 volts en fouille avec kit de résine et manchons à serrage mécanique."},
            {"time": "16:30", "title": "Déconsignation et mise sous tension", "desc": "Retrait des protections de chantier, compte-rendu d'achèvement et participation aux essais de refermeture du disjoncteur."}
        ],
        "skills": {
            "technical": [
                "Électrotechnique des réseaux moyenne et haute tension (HTA / HTB / BT)",
                "Techniques de levage, d'élingage et de travail en hauteur (CQP Monteur de réseaux)",
                "Confection de jonctions et terminaisons de câbles synthétiques HT",
                "Habilitations électriques strictes (H1V, H2V, B1V, B2V, HC, TST)"
            ],
            "human": [
                "Excellente condition physique, agilité et absence totale de vertige",
                "Rigueur procédurale sans faille pour la sécurité vitale des équipes",
                "Esprit d'équipe et solidarité face aux aléas climatiques"
            ],
            "tools": [
                "Treuils de tirage cabestans et freins hydrauliques pour déroulage de lignes",
                "Vérificateurs d'absence de tension (VAT) et perches télescopiques isolantes",
                "Outillages de sertissage électrohydrauliques pour manchons de puissance",
                "Détecteurs de défauts de câbles souterrains et caméras acoustiques"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "CAP / Bac Pro (Bac)", "title": "Bac Pro MELEC (Métiers de l'Électricité)", "desc": "Bases pratiques en raccordements électriques et schémas industriels."},
                {"step": "Mention Complémentaire (Bac +1)", "title": "MC Technicien en Réseaux Électriques", "desc": "Année de spécialisation intensive en alternance très recherchée par Enedis et RTE."},
                {"step": "BTS (Bac +2)", "title": "BTS Électrotechnique", "desc": "Accès rapide aux fonctions de chef d'équipe, conducteur de travaux ou chargé de consignation."}
            ],
            "schools": [
                {"name": "Campus de formation Enedis et RTE — France", "country": "France", "scope": "France"},
                {"name": "CFA de l'Énergie et des Travaux Publics — France", "country": "France", "scope": "France"},
                {"name": "Centre de Perfectionnement Professionnel de la Senelec (CFPP Rufisque) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["CQP Monteur de Réseaux Électriques", "CACES nacelle PEMP 1B/3B", "Habilitations travaux sous tension (TST)"],
            "schoolSubjects": ["Électrotechnique", "Mécanique des structures", "Sécurité électrique", "Topographie de ligne"]
        },
        "career": {
            "sectors": ["Gestionnaires de réseaux de transport et distribution (RTE, Enedis)", "Entreprises du BTP électrique (SPIE, Bouygues Energies & Services, Eiffage, Omexom)", "Compagnies électriques nationales (Senelec, CIE, CEET)"],
            "employerTypes": ["Opérateurs de réseaux électriques", "Entreprises générales d'installations haute tension"],
            "evolution": "Monteur débutant ➔ Chef d'équipe lignes HT ➔ Conducteur de travaux réseaux ➔ Chargé d'affaires distribution",
            "pros": "Fraternité d'équipe exemplaire, sentiment d'utilité publique majeur lors des dépannages post-tempête, rémunération attractive avec primes.",
            "cons": "Exposition aux intempéries (froid, pluie, chaleur), travail physique exigeant en hauteur."
        },
        "gettingStarted": {
            "beginnerProject": "Observer le trajet des câbles entre un transformateur de quartier et les habitations.",
            "intermediateProject": "Réaliser une maquette de boîte de jonction électrique basse tension avec serre-fils.",
            "advancedProject": "Calculer la flèche mécanique d'un câble conducteur suspendu entre deux poteaux distants de 60 mètres.",
            "portfolioIdeas": ["Photos de réalisations de coffrets de raccordement", "Rapport de stage de tirage de câble sous gaine"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des drones dotés de caméras thermiques et d'IA survolent les lignes électriques pour repérer les anomalies avant l'envoi d'un monteur.",
            "automatedTasks": ["Détection automatique de végétation menaçant une ligne", "Cartographie LiDAR des corridors de lignes"],
            "emergingSkills": ["Pilotage de drones d'inspection et interprétation des relevés infrarouges"],
            "humanEdge": "La force, l'agilité et le savoir-faire physique irremplaçable pour monter sur un pylône et sertir un câble sous tension."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les monteurs de lignes sont les artisans du programme gouvernemental d'accès universel à l'électricité (PUDC, ISER), construisant des lignes HTA à travers le Sine Saloum, la Casamance et le Fouta, et connectant les villages aux postes sources de la Senelec.",
            "localSectors": ["Senelec (Société d'Électricité du Sénégal)", "Entreprises partenaires de réseaux (Eiffage Sénégal, SPIE Ouest Afrique)", "Agence Sénégalaise d'Électrification Rurale (ASER)"],
            "remoteWork": "Non compatible (100% sur chantiers et en extérieur).",
            "entrepreneurship": "Création d'une entreprise de pose de réseaux et de raccordements basse tension pour les concessions d'électrification rurale."
        },
        "relatedJobSlugs": ["technicien-exploitation-supervision-reseaux", "ingenieur-smart-grids-reseaux-intelligents", "installateur-mainteneur-photovoltaique"],
        "connectedFamilies": ["btp-architecture", "industrie-mecanique"],
        "resources": [
            {"type": "guide", "title": "Métiers des réseaux électriques — Energierecrute", "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php", "source": "Energierecrute"},
            {"type": "portail", "title": "Travailler chez RTE — Réseau de Transport d'Électricité", "url": "https://www.rte-france.com/carrieres", "source": "RTE"}
        ],
        "sources": ["Energierecrute", "Enedis", "RTE", "Senelec"],
        "interests": ["construire-fabriquer", "technique-outils", "sport-plein-air"],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Pour raccorder les futurs parcs éoliens maritimes et les centrales solaires, l'Europe et l'Afrique doivent construire ou renouveler plus de 10 millions de kilomètres de lignes électriques d'ici 2040.",
            "pourquoi": "Sans lignes électriques neuves et robustes, l'électricité verte produite par le soleil et le vent ne peut pas parvenir jusqu'aux villes.",
            "a_retenir": "Le bâtisseur de l'autoroute invisible de l'électricité."
        }
    },

    # -----------------------------------------------------------------------
    # 16. TECHNICIEN D'EXPLOITATION & CONDUITE DE RÉSEAUX ÉLECTRIQUES / DISPATCHING
    # -----------------------------------------------------------------------
    {
        "id": "technicien-exploitation-supervision-reseaux",
        "slug": "technicien-exploitation-supervision-reseaux",
        "title": "Technicien d'Exploitation & Conduite de Réseaux Électriques / Dispatching",
        "aliases": ["Opérateur de dispatching électrique", "Technicien de conduite réseau HTA/BT", "Superviseur téléconduite Enedis/RTE"],
        "icon": "🖥️",
        "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Réseaux Électriques, Transport & Distribution",
        "domainId": "reseaux-transport-distribution",
        "subdomain": "Conduite, Télégestion & Dispatching de réseaux",
        "energyTechnology": ["Systèmes SCADA réseaux", "Télécommande d'interrupteurs aériens (IAT)", "Gestion de la fréquence 50 Hz"],
        "energySector": "Pilotage & Stabilité du Système Électrique",
        "sourceEnergierecrute": True,
        "isEmerging": False,
        "level": "Bac +2 (BTS Électrotechnique, BUT GEII) à Bac +3 (Licence Pro Réseaux)",
        "salary": "🇫🇷 France : 2 400 - 3 800 € net/mois (~34 000 - 55 000 € brut/an avec primes de 3x8, Source : Energierecrute) • 🇸🇳 Sénégal : 400 000 - 1 100 000 FCFA / mois (Centre national de conduite Senelec Dispatching Hann)",
        "simpleDefinition": "Le technicien de conduite supervise en temps réel le flux d'électricité sur les réseaux, équilibre la charge, commande à distance les disjoncteurs et coordonne les interventions de rétablissement en cas d'avarie.",
        "shortDescription": "Véritable contrôleur aérien de l'électricité issu des cursus identifiés par Energierecrute, il veille 24h/24 et 7j/7 sur la stabilité de la tension, de la fréquence et l'absence de coupure.",
        "longDescription": "Comme explicité dans les offres de téléconduite d'Energierecrute chez les gestionnaires de réseaux de transport et de distribution (RTE, Enedis, régies locales d'électricité), le technicien d'exploitation pilote à distance les commutations sur le réseau électrique depuis un centre de conduite ultra-sécurisé (dispatching). Devant un mur d'écrans affichant en temps réel la topologie du réseau, les transits de mégawatts et l'état des organes de coupure, il équilibre la balance offre/demande, adapte les schémas d'acheminement lors des pointes de consommation, délivre les autorisations de manœuvre aux équipes de terrain et reconfigure instantanément le réseau en boucle pour réalimenter les abonnés en cas de déclenchement d'un transformateur.",
        "mainObjective": "Maintenir en permanence l'équilibre physique du réseau électrique, prévenir les blackouts et réalimenter les clients dans les plus brefs délais lors des incidents.",
        "companyRole": "Cerveau opérationnel assurant le bon fonctionnement temps réel du système électrique.",
        "workEnvironment": [
            "🖥️ Salles de contrôle de dispatching hautement sécurisées (murs d'écrans synoptiques, accès biométrique)",
            "🕒 Travail en horaires décalés et brigades tournantes en 3x8 (continuité de service 365j/an)",
            "📞 Liaisons radio et téléphoniques directes avec les chefs de quart de centrales et les équipes mobiles"
        ],
        "missions": [
            "Surveiller en temps réel les flux d'énergie, les tensions de jeu de barres et les charges des lignes électriques",
            "Télécommander les disjoncteurs et interrupteurs télécommandés pour modifier la topologie du réseau",
            "Établir les régimes d'exploitation et délivrer les autorisations de manœuvre et de mise sous tension aux chargés d'essais",
            "Analyser les défauts électriques (courts-circuits phase-terre, surcharges) et isoler rapidement la section défaillante",
            "Coordonner la réinjection des parcs éoliens et solaires pour éviter la congestion locale des lignes"
        ],
        "typicalDay": [
            {"time": "05:45", "title": "Prise de quart au dispatching", "desc": "Passation de consignes avec l'équipe de nuit : inventaire des chantiers en cours, prévisions météo de vent/ensoleillement et état des réserves de puissance."},
            {"time": "07:30", "title": "Gestion de la pointe de consommation matinale", "desc": "Surveillance de la montée en charge du réseau, ajustement des plots de régleurs en charge des transformateurs pour stabiliser la tension."},
            {"time": "10:15", "title": "Gestion d'un incident de câble 20 kV", "desc": "Déclenchement d'une protection de départ HTA : télécommande de réenclencheurs, localisation du tronçon défectueux et réalimentation de 4 200 clients par le réseau de secours en moins de 3 minutes."},
            {"time": "13:00", "title": "Programmation des retraits de ligne", "desc": "Validation des schémas d'alimentation alternatifs pour permettre la maintenance programmée d'un jeu de barres d'un poste source l'après-midi."}
        ],
        "skills": {
            "technical": [
                "Électrotechnique de puissance et dynamique des réseaux maillés",
                "Plans de protection électrique (relais différentiels, protection de distance, homopolaire)",
                "Systèmes de téléconduite SCADA / EMS (Energy Management System)",
                "Procédures d'urgence de reconstitution du réseau (blackout, renvoi de tension)"
            ],
            "human": [
                "Sang-froid exemplaire et capacité à gérer un stress aigu sous pression",
                "Prise de décision rapide et méthodique en situation dégradée",
                "Communication radio/téléphonique ultra-précise et sans ambiguïté"
            ],
            "tools": [
                "Logiciels SCADA / DMS (Distribution Management System)",
                "Outils de simulation de réseau en temps réel (PSS/E, Eurostag)",
                "Systèmes d'enregistrement chronologique des événements (SOE)",
                "Consoles de communication sécurisées d'exploitation"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "BTS / BUT (Bac +2/+3)", "title": "BTS Électrotechnique ou BUT GEII", "desc": "Maîtrise des régimes de neutre, calculs de court-circuit et automatismes de coupure."},
                {"step": "Licence Pro (Bac +3)", "title": "Licence Pro Systèmes Électriques Intelligents et Réseaux", "desc": "Formation avancée sur les protocoles de téléconduite et les réseaux communicants."},
                {"step": "Habilitation d'opérateur", "title": "Formation simulateur interne (RTE / Enedis / Senelec)", "desc": "Cursus immersif sur simulateur pleine échelle pour apprendre à gérer les pannes en direct."}
            ],
            "schools": [
                {"name": "Campus de formation Enedis et RTE — France", "country": "France", "scope": "France"},
                {"name": "IUT Génie Électrique et Informatique Industrielle (GEII) — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) / Génie Électrique — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Centre de Perfectionnement Professionnel Senelec (CFPP Rufisque) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Habilitation d'opérateur de conduite réseau", "Certification téléconduite SCADA", "Brevet de sécurité des installations critiques"],
            "schoolSubjects": ["Électrotechnique de réseau", "Télécommunications industrielles", "Protections électriques", "Analyse de défauts"]
        },
        "career": {
            "sectors": ["Centres nationaux et régionaux de conduite électrique (RTE, Enedis)", "Compagnies d'électricité nationales africaines (Senelec, CIE, Sonabel)", "Exploitants ferroviaires (SNCF Réseau - alimentation caténaire)"],
            "employerTypes": ["Gestionnaires de réseau de transport (GRT)", "Gestionnaires de réseau de distribution (GRD)"],
            "evolution": "Opérateur de conduite adjoint ➔ Opérateur de quart titulaire ➔ Chef de quart dispatching ➔ Ingénieur d'études dynamiques de réseau",
            "pros": "Poste passionnant au cœur de la décision nationale, travail sur des écrans high-tech, majorations de salaire en horaires postés 3x8.",
            "cons": "Horaires décalés (nuits, week-ends, jours fériés), responsabilité colossale sur la coupure de villes entières."
        },
        "gettingStarted": {
            "beginnerProject": "Comprendre la différence entre transport (400 kV) et distribution (20 kV / 230 V).",
            "intermediateProject": "Simuler un réseau en anneau simple sous un logiciel pédagogique et tester une manœuvre de réenclenchement.",
            "advancedProject": "Analyser le scénario de la grande panne européenne de 2006 causée par la coupure d'une ligne sur le fleuve Ems.",
            "portfolioIdeas": ["Schéma unifilaire annoté d'un poste source", "Fiche de procédure de réalimentation prioritaire d'un hôpital"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA analyse les flux en temps réel et suggère au technicien les 3 meilleures commutations pour éviter une surcharge de câble.",
            "automatedTasks": ["Détection précoce d'oscillations anormales de fréquence", "Prévision de charge par quartier à 15 minutes"],
            "emergingSkills": ["Supervision assistée par copilote IA d'exploitation de réseau"],
            "humanEdge": "La responsabilité légale et le sang-froid d'autoriser la mise sous tension d'un secteur où interviennent des équipes humaines."
        },
        "africaContext": {
            "senegalInsight": "Le Dispatching National de la Senelec à Hann (Dakar) est le centre névralgique de l'électricité sénégalaise : les opérateurs y arbitrent quotidiennement l'injection des centrales solaires (Bokhol, Malicounda, Kahone), du parc éolien de Taïba N'Diaye et des imports hydroélectriques du barrage de Manantali (OMVS).",
            "localSectors": ["Senelec Dispatching National de Hann (Dakar)", "OMVS (Organisation pour la Mise en Valeur du fleuve Sénégal - Manantali, Félou)", "WAPP (West African Power Pool - Système d'Échanges d'Énergie Électrique Ouest-Africain)"],
            "remoteWork": "Non compatible (salle de commandement sécurisée avec accès restreint).",
            "entrepreneurship": "Conseil en architecture de télégestion et intégration de centrales renouvelables sur les réseaux interconnectés."
        },
        "relatedJobSlugs": ["ingenieur-smart-grids-reseaux-intelligents", "monteur-technicien-reseaux-electriques", "trader-energie-analyste-marches"],
        "connectedFamilies": ["numerique-ia", "cybersecurite-reseaux"],
        "resources": [
            {"type": "guide", "title": "Conduite et exploitation des réseaux — Energierecrute", "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php", "source": "Energierecrute"},
            {"type": "portail", "title": "Enedis — Nos métiers de la conduite réseau", "url": "https://www.enedis.fr/recrutement", "source": "Enedis"}
        ],
        "sources": ["Energierecrute", "RTE", "Enedis", "Senelec"],
        "interests": ["donnees-chiffres", "technique-outils", "securite-defense"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En cas d'incident sur un câble moyenne tension en ville, les automates de téléconduite et les opérateurs parviennent aujourd'hui à réalimenter 80% des foyers coupés en moins de 3 minutes chrono.",
            "pourquoi": "Grâce aux boucles de secours et aux interrupteurs télécommandés par réseau cellulaire sécurisé.",
            "a_retenir": "Le pilote invisible qui garde les lumières allumées pour des millions de citoyens."
        }
    },

    # -----------------------------------------------------------------------
    # 17. INGÉNIEUR SMART GRIDS & SYSTÈMES ÉLECTRIQUES COMMUNICANTS
    # -----------------------------------------------------------------------
    {
        "id": "ingenieur-smart-grids-reseaux-intelligents",
        "slug": "ingenieur-smart-grids-reseaux-intelligents",
        "title": "Ingénieur Smart Grids & Systèmes Électriques Communicants",
        "aliases": ["Architecte réseaux intelligents", "Ingénieur flexibilité électrique & micro-réseaux", "Ingénieur IoT énergie & comptage intelligent"],
        "icon": "🧠",
        "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Réseaux Électriques, Transport & Distribution",
        "domainId": "reseaux-transport-distribution",
        "subdomain": "Smart grids & Réseaux communicants",
        "energyTechnology": ["Comptage communicant (Linky)", "Microgrids & Îlotage", "Véhicule-réseau (V2G - Vehicle-to-Grid)"],
        "energySector": "Digitalisation & Flexibilité Énergétique",
        "sourceEnergierecrute": True,
        "isEmerging": True,
        "level": "Bac +5 (Diplôme d'Ingénieur ou Master spécialisé Smart Grids)",
        "salary": "🇫🇷 France : 3 100 - 5 200 € net/mois (~44 000 - 75 000 € brut/an, Source : Energierecrute / APEC) • 🇸🇳 Sénégal : 600 000 - 1 800 000 FCFA / mois (Startups d'électrification rurale Pay-As-You-Go, Senelec, bureaux d'ingénierie)",
        "simpleDefinition": "L'ingénieur smart grids croise génie électrique, télécoms et intelligence logicielle pour transformer les réseaux classiques en réseaux intelligents capables d'intégrer massivement renouvelables, stockage et bornes de recharge.",
        "shortDescription": "Profil hybride d'élite très prisé sur Energierecrute, il conçoit les architectures numériques permettant l'autoconsommation collective, les micro-réseaux et la recharge intelligente des véhicules.",
        "longDescription": "Selon les analyses de marché et offres d'emploi d'Energierecrute, l'avènement de millions de panneaux photovoltaïques décentralisés et de parcs éoliens a rendu obsolète la gestion unidirectionnelle de l'électricité. L'ingénieur smart grids conçoit les systèmes de télécommunication, capteurs IoT, protocoles de communication (CEI 61850) et algorithmes prédictifs qui rendent le réseau bidirectionnel et réactif. Il pilote des projets de microgrids autonomes avec stockage batterie, teste les solutions de Vehicle-to-Grid (la batterie de voiture électrique devenant réserve d'appoint pour la maison ou le quartier) et déploie les mécanismes d'effacement de consommation lors des pics nationaux.",
        "mainObjective": "Rendre le réseau électrique adaptatif, flexible et digitalisé pour intégrer 100% d'énergies renouvelables intermittentes sans risque d'effondrement.",
        "companyRole": "Architecte de la transition digitale et de la flexibilité des réseaux énergétiques.",
        "workEnvironment": [
            "💻 Bureaux d'études d'ingénierie et sièges de gestionnaires de réseaux",
            "🔬 Bancs de tests 'Hardware-in-the-Loop' (HIL) pour simuler des micro-réseaux sous contrainte",
            "🏙️ Démonstrateurs urbains de quartiers à énergie positive et micro-grids industriels"
        ],
        "missions": [
            "Modéliser l'injection des énergies renouvelables et évaluer les impacts sur la stabilité locale de la tension",
            "Définir l'architecture télécoms et de cybersécurité des sous-stations électriques numériques (norme IEC 61850)",
            "Développer des algorithmes d'Energy Management System (EMS) pour piloter l'arbitrage stockage / consommation / vente",
            "Concevoir des solutions de recharge intelligente (Smart Charging) et de réinjection réseau (V2G)",
            "Superviser l'intégration des flux de données massives issues des compteurs communicants (Linky, Woyofal intelligent)"
        ],
        "typicalDay": [
            {"time": "09:00", "title": "Modélisation sous simulateur dynamique", "desc": "Test d'un algorithme de régulation de tension sur un microgrid insulaire combinant 2 MW solaire, 1 MW éolien et 3 MWh de batteries."},
            {"time": "11:15", "title": "Réunion cybersécurité des automates", "desc": "Validation des protocoles de chiffrement TLS sur les concentrateurs de données communicants d'un poste de transformation."},
            {"time": "14:30", "title": "Atelier Vehicle-to-Grid avec constructeur automobile", "desc": "Définition des messages ISO 15118 pour synchroniser la décharge partielle des batteries automobiles lors des pics de 19h."},
            {"time": "17:00", "title": "Dépouillement des données de flexibilité", "desc": "Analyse du comportement d'un parc tertiaire ayant effacé 500 kW de climatisation suite à un signal tarifaire de pointe."}
        ],
        "skills": {
            "technical": [
                "Génie électrique, électronique de puissance et convertisseurs bidirectionnels",
                "Protocoles de télécommunication industrielle (IEC 61850, Modbus TCP, MQTT, OCPP)",
                "Data science appliquée à l'énergie, Python, optimisation mathématique sous contraintes",
                "Cybersécurité des systèmes industriels et des infrastructures critiques"
            ],
            "human": [
                "Vision systémique et capacité à dialoguer avec électriciens, informaticiens et économistes",
                "Appétence pour l'innovation technologique et l'expérimentation agile",
                "Sens aigu des enjeux environnementaux et de sobriété"
            ],
            "tools": [
                "Simulateurs de réseaux : Matlab/Simulink, OPAL-RT, Typhoon HIL, PowerFactory DIgSILENT",
                "Outils de dimensionnement de micro-réseaux : HOMER Pro, DER-CAM",
                "Plateformes cloud IoT énergie (AWS IoT Core, Azure IoT)",
                "Analyseurs de protocoles réseaux (Wireshark avec décodeurs IEC 61850)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Classes Préparatoires / Licence (Bac +2/+3)", "title": "CPGE Math-Physique ou Licence Génie Électrique", "desc": "Bases fondamentales en mathématiques, physique appliquée et électromagnétisme."},
                {"step": "Diplôme d'Ingénieur (Bac +5)", "title": "Ingénieur en Génie Électrique / Smart Grids", "desc": "Spécialisation en réseaux électriques intelligents, télécommunications et électronique de puissance."},
                {"step": "Mastère Spécialisé (Bac +6)", "title": "Mastère Spécialisé Énergies Renouvelables et Systèmes Communicants", "desc": "Perfectionnement en cybersécurité industrielle et régulation des marchés d'électricité."}
            ],
            "schools": [
                {"name": "Grenoble INP — Ense3 (Énergie, Eau, Environnement) — France", "country": "France", "scope": "France"},
                {"name": "CentraleSupélec / INSA Lyon / ESIGELEC — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) / Génie Électrique — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Polytechnique de Thiès (EPT) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification IEC 61850 Substation Automation", "Certification Cybersécurité Industrielle ISA/IEC 62443", "Certification HOMER Pro Microgrid Designer"],
            "schoolSubjects": ["Électronique de puissance", "Protocoles IoT", "Automatique linéaire", "Data Science & Python"]
        },
        "career": {
            "sectors": ["Gestionnaires de réseaux (RTE, Enedis)", "Constructeurs d'équipements électriques (Schneider Electric, Siemens, ABB)", "Opérateurs de mobilité électrique et de bornes de recharge", "Startups de micro-réseaux décentralisés"],
            "employerTypes": ["Grands équipementiers industriels", "Bureaux d'études d'ingénierie avancée", "Opérateurs télécoms et énergie"],
            "evolution": "Ingénieur études smart grids ➔ Chef de projet micro-réseaux ➔ Architecte systèmes électriques communicants ➔ Directeur des technologies (CTO)",
            "pros": "Métier à la pointe absolue de la technologie, forte composante logicielle et écologique, profil très courtisé avec hauts salaires.",
            "cons": "Complexité technique élevée (croisement de 3 métiers différents), normes internationales en perpétuelle mutation."
        },
        "gettingStarted": {
            "beginnerProject": "Télécharger HOMER Pro (version d'essai) et modéliser un village alimenté par du solaire et des batteries.",
            "intermediateProject": "Programmer sous Python un script d'optimisation de recharge d'une voiture électrique aux heures creuses.",
            "advancedProject": "Configurer une trame de communication Modbus TCP pour commander la charge d'un onduleur virtuel.",
            "portfolioIdeas": ["Dépôt GitHub d'un algorithme de pilotage de batterie", "Étude d'impact de l'intégration de 10 000 véhicules électriques sur un quartier"]
        },
        "aiImpact": {
            "level": "Révolutionnaire",
            "summary": "L'apprentissage par renforcement (Reinforcement Learning) permet aux smart grids de s'auto-équilibrer à la milliseconde face aux variations du soleil et du vent.",
            "automatedTasks": ["Optimisation prédictive de la charge/décharge des batteries", "Détection automatique de cyberattaques sur les flux Linky"],
            "emergingSkills": ["Conception d'algorithmes d'IA embarquée dans les onduleurs connectés"],
            "humanEdge": "L'arbitrage géopolitique et sociétal sur l'accès aux données de consommation énergétique et la protection de la vie privée."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal et au Sahel, les microgrids intelligents sont la clé du développement rural : des villages entiers fonctionnent en autonomie totale grâce à des mini-centrales solaires hybrides équipées de compteurs communicants prépayés (Woyofal intelligent) et de stockage batterie intelligent.",
            "localSectors": ["Startups d'électrification rurale (Oolu Solar, Baobab+, Bonergie)", "Senelec (programme de modernisation des réseaux)", "Projets d'îlotage solaire de l'Agence Sénégalaise d'Électrification Rurale (ASER)"],
            "remoteWork": "Très favorable (modélisation logicielle, télégestion et data science en télétravail fréquent).",
            "entrepreneurship": "Création d'une plateforme de supervision IoT et de gestion de microgrids pour les communautés rurales et îles de la Casamance."
        },
        "relatedJobSlugs": ["technicien-exploitation-supervision-reseaux", "chef-projet-energie-solaire-photovoltaique", "energy-manager-auditeur-energetique"],
        "connectedFamilies": ["numerique-ia", "cybersecurite-reseaux"],
        "resources": [
            {"type": "guide", "title": "Smart Grids et réseaux communicants — Energierecrute", "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php", "source": "Energierecrute"},
            {"type": "portail", "title": "Association Think Smartgrids France", "url": "https://www.thinksmartgrids.fr/", "source": "Think Smartgrids"}
        ],
        "sources": ["Energierecrute", "Think Smartgrids", "RTE", "Enedis"],
        "interests": ["donnees-chiffres", "explorer-decouvrir", "technique-outils"],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Le concept de Vehicle-to-Grid (V2G) transforme la voiture électrique en réservoir d'énergie pour la maison : branchée le soir, elle peut restituer son électricité pendant le pic national de 19h puis se recharger la nuit au tarif le plus bas.",
            "pourquoi": "Cela permet de stabiliser le réseau sans avoir à construire de nouvelles centrales d'appoint au gaz.",
            "a_retenir": "L'architecte qui fusionne le numérique et les électrons pour créer le réseau du futur."
        }
    },

    # -----------------------------------------------------------------------
    # 18. INGÉNIEUR D'EXPLOITATION EN CENTRALE NUCLÉAIRE / REP & EPR
    # -----------------------------------------------------------------------
    {
        "id": "ingenieur-exploitation-nucleaire",
        "slug": "ingenieur-exploitation-nucleaire",
        "title": "Ingénieur d'Exploitation en Centrale Nucléaire / REP & EPR",
        "aliases": ["Ingénieur de quart nucléaire", "Ingénieur conduite réacteur", "Adjoint au chef d'exploitation nucléaire"],
        "icon": "⚛️",
        "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Énergie Nucléaire & Sûreté",
        "domainId": "energie-nucleaire-surete",
        "subdomain": "Conduite de réacteur & Exploitation de tranche",
        "energyTechnology": ["Réacteurs à Eau Pressurisée (REP 900, 1300, N4)", "EPR / SMR (Petits réacteurs modulaires)", "Circuit primaire & secondaire"],
        "energySector": "Production Électrique Nucléaire Décarbonée",
        "sourceEnergierecrute": True,
        "isEmerging": False,
        "level": "Bac +5 (Diplôme d'Ingénieur nucléaire ou Master Génie Atomique)",
        "salary": "🇫🇷 France : 3 500 - 5 800 € net/mois (~48 000 - 85 000 € brut/an avec primes de quart, Source : Energierecrute / EDF) • 🇸🇳 Sénégal : N/A (Filière en cours d'évaluation institutionnelle / Partenariats recherche AIEA)",
        "simpleDefinition": "L'ingénieur d'exploitation en centrale nucléaire supervise le fonctionnement opérationnel d'une tranche nucléaire, contrôle les réactions en chaîne de fission, gère la puissance thermique et garantit le respect absolu des règles de sûreté.",
        "shortDescription": "Fonction clé répertoriée par Energierecrute pour EDF et Framatome, ce cadre technique pilote les réacteurs nucléaires produisant la part majoritaire de l'électricité décarbonée française.",
        "longDescription": "Comme en témoignent les offres massives de recrutement et les fiches formations d'Energierecrute dans la filière nucléaire française (EDF, Framatome, CEA, Orano), l'ingénieur d'exploitation (souvent en brigade de quart en salle de commande) est responsable de la conduite temps réel du réacteur et des circuits thermodynamiques (primaire, secondaire et tertiaire). Il supervise les manœuvres de variation de puissance (suivi de charge), pilote les opérations d'arrêt de tranche pour renouvellement du combustible, applique rigoureusement les Règles Générales d'Exploitation (RGE) et gère toute situation transitoire en collaboration avec l'Autorité de Sûreté Nucléaire (ASN).",
        "mainObjective": "Produire de l'électricité en continu en garantissant la disponibilité de la tranche dans le respect intransigeant des critères de sûreté nucléaire.",
        "companyRole": "Garant technique et opérationnel de la sûreté et du pilotage de la tranche nucléaire en salle de commande.",
        "workEnvironment": [
            "⚛️ Salles de commande de réacteurs nucléaires ultra-protégées (accès sous habilitation confidentiel défense)",
            "🏢 Bâtiments réacteur et salles des machines (turbo-alternateurs de 900 à 1650 MW)",
            "🕒 Travail en horaires postés par roulement (3x8 ou 5x8) et simulateurs pleine échelle réguliers"
        ],
        "missions": [
            "Superviser les opérateurs de conduite et piloter la neutronique du cœur ainsi que le refroidissement du circuit primaire",
            "Assurer le respect strict des Spécifications Techniques d'Exploitation et des consignes incidentelles/accidentelles",
            "Coordonner les essais périodiques réglementaires sur les systèmes de sauvegarde (diesels de secours, injection de sécurité)",
            "Piloter les manœuvres de montée et baisse de charge en coordination avec le dispatching national de RTE",
            "Participer à la préparation et au suivi des arrêts de tranche pour rechargement de combustible et visite décennale"
        ],
        "typicalDay": [
            {"time": "06:15", "title": "Relève de quart en salle de commande", "desc": "Lecture du journal d'exploitation, revue de l'état des barres de contrôle, de la concentration en bore et des bilans d'activité radiologique."},
            {"time": "08:30", "title": "Supervision d'un essai périodique", "desc": "Contrôle du bon démarrage automatique d'une pompe du circuit d'injection de sécurité haute pression."},
            {"time": "11:00", "title": "Coordination avec la maintenance", "desc": "Délivrance des autorisations de travaux et validation de l'alignement des vannes d'isolement sur le circuit d'eau alimentaire."},
            {"time": "14:00", "title": "Session simulateur ou entraînement", "desc": "Mise en situation sur le simulateur réplique exacte de la tranche pour s'entraîner à la gestion d'une brèche du circuit secondaire."}
        ],
        "skills": {
            "technical": [
                "Physique des réacteurs, neutronique et cinétique du cœur nucléaire",
                "Thermodynamique industrielle, thermo-hydraulique diphasique et mécanique des fluides",
                "Réglementation de sûreté nucléaire (RGE, arrêt automatique réacteur, confinement)",
                "Radioprotection, zonage radiologique et barrières de confinement"
            ],
            "human": [
                "Culture de sûreté et rigueur intellectuelle absolue (zéro tolérance à l'approximation)",
                "Capacité de remise en question et pratique systématique du doute méthodique",
                "Communication sereine et leadership exemplaire sous situation de stress opérationnel"
            ],
            "tools": [
                "Simulateurs de conduite nucléaire pleine échelle (réplique exacte de salle de commande)",
                "Systèmes d'aide à la conduite informatisée (SACI) et instrumentation neutronique ex-cœur",
                "Logiciels de calcul neutronique de cœur (APOLLO, CRONOS)",
                "Outils de gestion d'arrêt de tranche et de consignation"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Diplôme d'Ingénieur (Bac +5)", "title": "Ingénieur généraliste ou génie énergétique / nucléaire", "desc": "Formation d'élite en physique quantique, thermodynamique et sciences de l'ingénieur."},
                {"step": "Génie Atomique (Bac +6)", "title": "Diplôme d'Ingénieur en Génie Atomique (INSTN)", "desc": "La formation de référence mondiale en physique des réacteurs et sûreté nucléaire."},
                {"step": "Parcours d'habilitation EDF", "title": "Formation conduite sur simulateur (18 à 24 mois)", "desc": "Entraînement intensif avant validation par la commission d'habilitation à la conduite autonome."}
            ],
            "schools": [
                {"name": "INSTN (Institut National des Sciences et Techniques Nucléaires) — CEA Saclay / Cadarache — France", "country": "France", "scope": "France"},
                {"name": "Grenoble INP — Phelma / Mines Paris-PSL / CentraleSupélec — France", "country": "France", "scope": "France"},
                {"name": "Université Cheikh Anta Diop (UCAD Dakar) / Institut de Technologie Nucléaire Appliquée (ITNA) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Habilitation Sûreté Nucléaire de tranche", "Certificat de conduite de réacteur REP / EPR", "Habilitation de Confidentiel Défense"],
            "schoolSubjects": ["Physique nucléaire", "Neutronique", "Thermo-hydraulique", "Métallurgie sous irradiation"]
        },
        "career": {
            "sectors": ["Exploitants de centrales nucléaires (EDF)", "Constructeurs de réacteurs (Framatome, CEA, TechnicAtome)", "Autorités de sûreté et instituts d'expertise (ASN, IRSN)"],
            "employerTypes": ["Grands électriciens nucléaires", "Instituts de recherche atomique", "Organismes d'audit de sûreté"],
            "evolution": "Ingénieur d'exploitation junior ➔ Ingénieur de quart titulaire ➔ Chef d'exploitation de site ➔ Directeur de centrale nucléaire",
            "pros": "Exigence intellectuelle inégalée, prestige technique, contribution majeure à la décarbonation du mix électrique mondial.",
            "cons": "Horaires postés en 3x8, contraintes de sécurité et d'habilitation très strictes, déplacements en formation fréquents."
        },
        "gettingStarted": {
            "beginnerProject": "Comprendre le rôle des trois circuits d'eau étanches d'un Réacteur à Eau Pressurisée (REP).",
            "intermediateProject": "Calculer la masse de combustible d'uranium nécessaire pour produire 1 000 mégawatts pendant un an.",
            "advancedProject": "Rédiger une fiche de synthèse sur le principe des trois barrières de confinement (gaine, circuit primaire, enceinte).",
            "portfolioIdeas": ["Schéma fonctionnel animé d'une tranche REP 1300", "Synthèse des systèmes de sauvegarde d'un EPR"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "En raison des exigences draconiennes de sûreté, l'IA est utilisée pour la maintenance prédictive des pompes et l'analyse de signaux acoustiques, mais la décision humaine reste souveraine en conduite.",
            "automatedTasks": ["Surveillance des vibrations des turbo-alternateurs", "Reconnaissance d'images pour le contrôle des soudures"],
            "emergingSkills": ["Utilisation de jumeaux numériques thermo-hydrauliques pour le recalage de modèles"],
            "humanEdge": "La culture de sûreté, le respect de la règle et la primauté absolue de l'esprit critique humain sur tout automatisme."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'Institut de Technologie Nucléaire Appliquée (ITNA) de l'UCAD forme des spécialistes aux applications pacifiques (médecine nucléaire, radiothérapie, sélection variétale agricole) et coopère avec l'AIEA pour évaluer le potentiel des Petits Réacteurs Modulaires (SMR) pour le dessalement d'eau de mer et l'électricité propre en Afrique.",
            "localSectors": ["Institut de Technologie Nucléaire Appliquée (ITNA - UCAD Dakar)", "Autorité Sénégalaise de Radioprotection et de Sûreté Nucléaire (ARSN)", "Centres hospitaliers de médecine nucléaire (Hôpital Dalal Jamm)"],
            "remoteWork": "Non compatible (conduite exclusive sur site en salle de commande).",
            "entrepreneurship": "Cabinet d'expertise en ingénierie de sûreté et radioprotection pour les industries sous rayonnements."
        },
        "relatedJobSlugs": ["technicien-radioprotection-surete-nucleaire", "technicien-maintenance-nucleaire", "ingenieur-rd-energie"],
        "connectedFamilies": ["sciences-biotech", "industrie-mecanique"],
        "resources": [
            {"type": "guide", "title": "Métiers du nucléaire et carrières — Energierecrute", "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php", "source": "Energierecrute"},
            {"type": "portail", "title": "SFEN — Société Française d'Énergie Nucléaire", "url": "https://www.sfen.org/", "source": "SFEN"}
        ],
        "sources": ["Energierecrute", "EDF", "CEA", "SFEN"],
        "interests": ["donnees-chiffres", "explorer-decouvrir", "securite-defense"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En produisant plus de 65% de l'électricité française sans émettre un seul gramme direct de CO2, le parc nucléaire évite chaque année le rejet de plus de 30 millions de tonnes de gaz à effet de serre dans l'atmosphère.",
            "pourquoi": "L'énergie provient de la fission de l'atome d'uranium et non de la combustion d'hydrocarbures.",
            "a_retenir": "Le pilote de la plus grande source d'électricité bas-carbone d'Europe."
        }
    },

    # -----------------------------------------------------------------------
    # 19. TECHNICIEN DE MAINTENANCE EN MILIEU NUCLÉAIRE & ROBINETTERIE
    # -----------------------------------------------------------------------
    {
        "id": "technicien-maintenance-nucleaire",
        "slug": "technicien-maintenance-nucleaire",
        "title": "Technicien de Maintenance en Milieu Nucléaire & Robinetterie",
        "aliases": ["Mécanicien robinetier nucléaire", "Technicien d'arrêt de tranche nucléaire", "Électromécanicien en zone contrôlée"],
        "icon": "🔧",
        "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Énergie Nucléaire & Sûreté",
        "domainId": "energie-nucleaire-surete",
        "subdomain": "Maintenance mécanique, chaudronnerie & robinetterie nucléaire",
        "energyTechnology": ["Robinetterie industrielle nucléaire (clapets, soupapes)", "Générateurs de vapeur & Pompes primaires", "Contrôles Non Destructifs (CND)"],
        "energySector": "Maintenance & Pérennité du Parc Nucléaire",
        "sourceEnergierecrute": True,
        "isEmerging": False,
        "level": "Bac Pro (MSP / Chaudronnerie) à Bac +2 (BTS Maintenance, BTS Génie Civil / Nucléaire)",
        "salary": "🇫🇷 France : 2 200 - 3 600 € net/mois (~32 000 - 52 000 € brut/an avec primes, Source : Energierecrute) • 🇸🇳 Sénégal : N/A (Compétences équivalentes hautement recherchées en offshore pétrogazier et mines)",
        "simpleDefinition": "Le technicien de maintenance nucléaire révise, répare et requalifie les composants mécaniques vitaux des centrales (vannes, pompes, turbines, robinets haute pression) dans le respect strict des normes de sûreté et de radioprotection.",
        "shortDescription": "Profil manuel hautement qualifié documenté par Energierecrute, ce spécialiste intervient lors des arrêts de réacteurs pour garantir l'étanchéité et la fiabilité de milliers d'organes mécaniques.",
        "longDescription": "Comme décrit dans les nombreuses offres de prestataires spécialisés d'Energierecrute (Endel Engie, Clemessy, Framatome, Onet Technologies, Orano), le technicien de robinetterie et de maintenance nucléaire opère sur des organes mécaniques critiques soumis à des pressions colossales (155 bars) et des températures élevées (300°C). Vêtu d'équipements de protection spécifiques (combinaisons vinyle, masques ventilés), il démonte, nettoie, rectifie les portées d'étanchéité, remplace les garnitures mécaniques et remonte des vannes de sécurité avec serrage au couple contrôlé. Chaque geste technique est tracé dans des dossiers de réalisation de travaux (DRT) minutieusement contrôlés.",
        "mainObjective": "Assurer l'intégrité mécanique et l'étanchéité absolue de l'ensemble des circuits de fluide de la centrale nucléaire.",
        "companyRole": "Expert de l'étanchéité et de la fiabilité des composants mécaniques sous contraintes extrêmes.",
        "workEnvironment": [
            "☢️ Zone contrôlée des centrales nucléaires (bâtiment réacteur, bâtiment combustible)",
            "🛠️ Ateliers chauds de maintenance et bancs d'épreuve hydrostatiques",
            "🧳 Déplacements fréquents sur les différents sites nucléaires selon le calendrier des arrêts de tranche"
        ],
        "missions": [
            "Préparer les chantiers en zone en intégrant la radioprotection et les autorisations de travail spécifiques",
            "Démonter, expertiser et réviser la robinetterie industrielle (soupapes de sûreté, vannes motorisées, clapets)",
            "Usiner, roder et rectifier les portées d'étanchéité métalliques au micromètre près",
            "Effectuer les essais d'étanchéité et les épreuves de pression hydrostatiques réglementaires",
            "Renseigner avec une rigueur absolue le dossier de suivi de maintenance (DRT) et le rapport de fin d'intervention"
        ],
        "typicalDay": [
            {"time": "07:00", "title": "Passage en vestiaire chaud", "desc": "Habillage complet en tenue de zone (sous-vêtements coton, combinaison étanche, dosimètres opérationnels passifs et électroniques)."},
            {"time": "08:15", "title": "Ouverture d'une soupape de sûreté", "desc": "Dévissage contrôlé à la clé dynamométrique, contrôle visuel des portées et pose de capuchons de protection anti-corps étrangers (FME)."},
            {"time": "11:30", "title": "Rodage en atelier de chantier", "desc": "Opération de rodage d'un clapet avec pâte abrasive fine pour éliminer un défaut de planéité microscopique détecté au marbre."},
            {"time": "14:45", "title": "Contrôle non destructif", "desc": "Participation au contrôle par ressuage et ultrasons sur la soudure d'un piquage de tuyauterie pour vérifier l'absence de fissure."},
            {"time": "16:15", "title": "Sortie de zone et dosimétrie", "desc": "Passage aux portiques de détection de contamination radiologique C1/C2 et enregistrement des doses reçues dans le logiciel SISERI."}
        ],
        "skills": {
            "technical": [
                "Mécanique de précision, métrologie et tolérancement géométrique",
                "Robinetterie industrielle (vannes à opercule, soupapes à ressort, actionneurs pneumatiques)",
                "Contrôles Non Destructifs (CND niveau 1/2 : ressuage, magnétoscopie)",
                "Habilitations nucléaires obligatoires (SCN1/SCN2, CSQ, RP1/RP2)"
            ],
            "human": [
                "Rigueur manuelle extrême et sens du détail chirurgical",
                "Discipline collective et respect scrupuleux des consignes de propreté (démarche FME - exclusion des corps étrangers)",
                "Endurance et sang-froid en milieu confiné sous tenue ventilée"
            ],
            "tools": [
                "Rodeuses mécaniques portatives et marbres de contrôle",
                "Clés dynamométriques et clés à choc hydrauliques asservies au couple",
                "Bancs d'essais d'étanchéité sous pression d'azote ou d'hélium",
                "Dosimètres électroniques individuels à lecture directe"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Bac Pro (Bac)", "title": "Bac Pro MSPC (Maintenance) ou Technicien en Chaudronnerie Industrielle", "desc": "Apprentissage de la mécanique d'ajustage, de l'usinage et des techniques de soudage."},
                {"step": "Certifications Nucléaires", "title": "Certifications SCN, CSQ et RP (CEFRI)", "desc": "Stages réglementaires obligatoires pour pouvoir franchir les portes de la zone contrôlée."},
                {"step": "BTS (Bac +2)", "title": "BTS Maintenance des Systèmes ou BTS Environnement Nucléaire", "desc": "Montée en compétences vers la chefferie d'équipe et la préparation de dossiers techniques."}
            ],
            "schools": [
                {"name": "Lycées professionnels labellisés filière nucléaire — France", "country": "France", "scope": "France"},
                {"name": "Centres de formation CEFRI et organismes agréés — France", "country": "France", "scope": "France"},
                {"name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Centre d'Entrepreneuriat et de Développement Technique (CEDT Le G15) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Habilitation SCN (Savoir Commun du Nucléaire)", "Habilitation RP (Radioprotection)", "Contrôle Non Destructif COFREND niveau 1/2"],
            "schoolSubjects": ["Mécanique des fluides", "Résistance des matériaux", "Métrologie dimensionnelle", "Soudure et chaudronnerie"]
        },
        "career": {
            "sectors": ["Entreprises de maintenance nucléaire spécialisées (Endel, Clemessy, Framatome, Onet)", "Grands exploitants (EDF, Orano, CEA)", "Industrie de haute technicité (pétrochimie, offshore, naval)"],
            "employerTypes": ["Prestataires de services en arrêt de tranche", "Grands constructeurs de turbines et vannes"],
            "evolution": "Robinetier junior ➔ Robinetier spécialiste haute pression ➔ Chef d'équipe arrêt de tranche ➔ Chargé d'affaires maintenance nucléaire",
            "pros": "Haut niveau de technicité et reconnaissance professionnelle, primes substantielles lors des arrêts de tranche.",
            "cons": "Déplacements géographiques très fréquents d'une centrale à l'autre, travail sous tenue ventilée étanche."
        },
        "gettingStarted": {
            "beginnerProject": "Démonter et remonter un robinet vanne à opercule pour comprendre l'étanchéité métal sur métal.",
            "intermediateProject": "Réaliser une opération de rodage manuel d'un siège de soupape avec de la pâte abrasive.",
            "advancedProject": "Rédiger un Dossier de Réalisation de Travaux (DRT) respectant la traçabilité complète des couples de serrage.",
            "portfolioIdeas": ["Photos de portées d'étanchéité rectifiées au micromètre", "Attestation de stage en atelier d'usinage"]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "L'expertise tactile, la sensibilité manuelle du rodage et le serrage au couple sous contrainte d'espace restent le domaine exclusif du geste humain.",
            "automatedTasks": ["Inspection vidéo robotisée des tuyauteries inaccessibles", "Traçabilité numérique sur tablette des pièces changées"],
            "emergingSkills": ["Utilisation de lunettes connectées pour assistance technique d'experts distants"],
            "humanEdge": "La précision du geste millimétrique dans un environnement étroit où aucun robot ne peut s'insérer."
        },
        "africaContext": {
            "senegalInsight": "Les compétences d'ajustage mécanique de précision, de robinetterie haute pression et de contrôles non destructifs sont exactement celles requises pour la maintenance des unités flottantes de production pétrolière et gazière offshore (FPSO Léopold Sédar Senghor sur le champ Sangomar).",
            "localSectors": ["Unités de maintenance industrielle navale (Dakarnave)", "Industrie pétrogazière offshore (FPSO Sangomar, GTA)", "Industries chimiques et cimenteries (ICS, Sococim)"],
            "remoteWork": "Non compatible (travail physique direct sur tuyauteries et machines).",
            "entrepreneurship": "Création d'un atelier spécialisé dans l'épreuve hydrostatique et la réfection de soupapes de sûreté pour les industries lourdes."
        },
        "relatedJobSlugs": ["technicien-radioprotection-surete-nucleaire", "ingenieur-exploitation-nucleaire", "technicien-maintenance-eolienne"],
        "connectedFamilies": ["industrie-mecanique", "btp-architecture"],
        "resources": [
            {"type": "guide", "title": "Maintenance industrielle nucléaire — Energierecrute", "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php", "source": "Energierecrute"},
            {"type": "portail", "title": "Pôle de compétitivité Nucléaire Nuclear Valley", "url": "https://www.nuclearvalley.com/", "source": "Nuclear Valley"}
        ],
        "sources": ["Energierecrute", "EDF", "Framatome", "Endel"],
        "interests": ["construire-fabriquer", "technique-outils"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Dans un circuit primaire de centrale nucléaire, les vannes supportent une pression de plus de 155 bars (l'équivalent de 150 fois la pression atmosphérique) et de l'eau chauffée à plus de 300°C sans la moindre goutte de fuite.",
            "pourquoi": "Grâce à des portées métalliques rodées avec une précision chirurgicale inférieure au millième de millimètre.",
            "a_retenir": "L'artisan de la très haute précision qui garantit l'étanchéité des réacteurs."
        }
    },

    # -----------------------------------------------------------------------
    # 20. TECHNICIEN EN RADIOPROTECTION & SÛRETÉ NUCLÉAIRE
    # -----------------------------------------------------------------------
    {
        "id": "technicien-radioprotection-surete-nucleaire",
        "slug": "technicien-radioprotection-surete-nucleaire",
        "title": "Technicien en Radioprotection & Sûreté Nucléaire",
        "aliases": ["Agent de radioprotection", "Technicien mesures nucléaires & environnement", "Conseiller en radioprotection (CRP)"],
        "icon": "🛡️",
        "image": "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Énergie Nucléaire & Sûreté",
        "domainId": "energie-nucleaire-surete",
        "subdomain": "Contrôle radiologique & Sécurité nucléaire",
        "energyTechnology": ["Détection des rayonnements ionisants (Alpha, Bêta, Gamma, Neutrons)", "Spectrométrie gamma & Dosimétrie", "Zonage radiologique réglementaire"],
        "energySector": "Protection Sanitaire & Environnement Nucléaire",
        "sourceEnergierecrute": True,
        "isEmerging": False,
        "level": "Bac +2 (BTS Contrôle des Rayonnements Ionisants - CRIAPR) à Bac +3",
        "salary": "🇫🇷 France : 2 300 - 3 700 € net/mois (~33 000 - 53 000 € brut/an avec primes de zone, Source : Energierecrute) • 🇸🇳 Sénégal : 350 000 - 900 000 FCFA / mois (Centres hospitaliers, ARSN, laboratoires de contrôle)",
        "simpleDefinition": "Le technicien en radioprotection mesure et surveille les niveaux de rayonnements ionisants sur les installations, veille à la protection des intervenants et de l'environnement, et fait respecter la réglementation de sûreté.",
        "shortDescription": "Garant de la santé des travailleurs et de l'environnement répertorié par Energierecrute, ce spécialiste mesure la radioactivité et applique le principe de précaution ALARA sur les sites énergétiques et médicaux.",
        "longDescription": "Comme mis en avant dans les fiches de formations spécialisées d'Energierecrute (notamment le BTS CRIAPR et les filières de l'INSTN), le technicien en radioprotection est l'expert sentinelle des rayonnements ionisants. Il délimite le zonage radiologique des chantiers (zone verte, jaune, orange, rouge), réalise des cartographies radiologiques précises des débits de dose, calcule les prévisions dosimétriques selon le principe ALARA (As Low As Reasonably Achievable), surveille la contamination surfacique et atmosphérique, et intervient immédiatement en cas d'alarme pour évacuer et confiner une zone suspecte.",
        "mainObjective": "Prévenir tout risque d'irradiation ou de contamination pour le personnel intervenant et garantir l'absence de dispersion de radioactivité dans l'environnement.",
        "companyRole": "Gendarme sanitaire et protecteur radiologique des intervenants et de l'environnement du site.",
        "workEnvironment": [
            "☢️ Installations nucléaires de base (CNPE EDF, usines Orano, centres de recherche CEA)",
            "🔬 Laboratoires de métrologie de la radioactivité et de spectrométrie",
            "🏥 Services hospitaliers de médecine nucléaire et centres de radiothérapie"
        ],
        "missions": [
            "Réaliser les mesures de débits d'équivalents de dose ambiants et les contrôles de contamination de surface",
            "Définir les conditions de travail en zone contrôlée et les équipements de protection individuelle requis (combinaisons étanches, masques filtrants)",
            "Gérer la dosimétrie opérationnelle du personnel et analyser les historiques d'exposition individuelle",
            "Contrôler les rejets d'effluents gazeux et liquides de la centrale par prélèvements et analyses de spectrométrie",
            "Sensibiliser les intervenants à la culture de radioprotection et auditer la conformité des chantiers"
        ],
        "typicalDay": [
            {"time": "07:30", "title": "Étalonnage des radiamètres", "desc": "Vérification du zéro et contrôle de source sur la flotte de radiamètres, contaminamètres et balises de surveillance atmosphérique."},
            {"time": "09:00", "title": "Cartographie radiologique d'un local", "desc": "Mesure des débits de dose gamma et neutrons dans le local échangeur avant l'entrée de l'équipe de maintenance mécanique."},
            {"time": "11:45", "title": "Optimisation ALARA d'une intervention", "desc": "Calcul prévisionnel de dose avec le chef d'équipe pour positionner des écrans de plomb mobiles et réduire l'exposition des soudeurs de 40%."},
            {"time": "14:30", "title": "Contrôle des filtres atmosphériques", "desc": "Remplacement des filtres aérosols des balises de cheminée et passage au passeur d'échantillons basse activité pour spectrométrie gamma."},
            {"time": "16:30", "title": "Revue des doses individuelles", "desc": "Vérification sur le logiciel de radioprotection que personne n'a dépassé son quota dosimétrique de la journée."}
        ],
        "skills": {
            "technical": [
                "Physique des rayonnements et interactions rayonnement-matière",
                "Métrologie nucléaire (radiamétrie gamma, neutrons, contamination alpha/bêta, spectrométrie)",
                "Réglementation de la radioprotection (Code du travail, principe ALARA, limites annuelles de dose)",
                "Gestion des situations d'urgence radiologique et plans de protection d'urgence (PPU)"
            ],
            "human": [
                "Pédagogie et capacité à faire respecter des règles de sécurité strictes avec fermeté",
                "Sens aigu de l'observation et vigilance permanente",
                "Calme et autorité naturelle lors de la gestion d'un incident de contamination"
            ],
            "tools": [
                "Radiamètres portables (gamme gamma et équivalents de dose)",
                "Contaminamètres surfaciques alpha/bêta et frottis de contrôle",
                "Balises de surveillance d'ambiance et moniteurs d'aérosols radioactifs",
                "Logiciels de gestion dosimétrique (SISERI, Dosinet)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Bac Scientifique / STI2D", "title": "Bac Général (Spécialités scientifiques) ou STI2D", "desc": "Acquisition des bases solides en physique des ondes, chimie et calculs."},
                {"step": "BTS (Bac +2)", "title": "BTS Contrôle des Rayonnements Ionisants (CRIAPR)", "desc": "Diplôme d'État de référence pour devenir technicien en radioprotection qualifié."},
                {"step": "Licence Pro (Bac +3)", "title": "Licence Pro Métiers de la Radioprotection et Sécurité Nucléaire", "desc": "Accès au titre de Conseiller en Radioprotection (CRP) habilité par l'ASN."}
            ],
            "schools": [
                {"name": "Lycées préparant le BTS CRIAPR (Marseille, Cherbourg, Lyon) — France", "country": "France", "scope": "France"},
                {"name": "INSTN — Institut National des Sciences et Techniques Nucléaires — France", "country": "France", "scope": "France"},
                {"name": "Université Cheikh Anta Diop (UCAD Dakar) / Faculté des Sciences — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Autorité Sénégalaise de Radioprotection et de Sûreté Nucléaire (ARSN) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat de Conseiller en Radioprotection (CRP)", "Habilitation PCR (Personne Compétente en Radioprotection)", "Agrément ASN pour les contrôles externes"],
            "schoolSubjects": ["Physique nucléaire", "Métrologie des rayonnements", "Biologie cellulaire et effets des radiations", "Droit nucléaire"]
        },
        "career": {
            "sectors": ["Centres nucléaires de production d'électricité (EDF)", "Industries du cycle du combustible (Orano, Framatome)", "Établissements de santé (hôpitaux, centres de lutte contre le cancer)", "Laboratoires de recherche (CEA, CNRS, IRSN)"],
            "employerTypes": ["Énergéticiens nucléaires", "Centres hospitaliers universitaires", "Organismes d'audit et de contrôle"],
            "evolution": "Technicien radioprotection junior ➔ Conseiller en Radioprotection d'établissement ➔ Chef de section radioprotection environnement ➔ Inspecteur de la sûreté nucléaire",
            "pros": "Rôle sanitaire et protecteur primordial, variété des milieux (centrales électriques, hôpitaux, industrie), forte employabilité.",
            "cons": "Rigueur procédurale sans concession, port de protections intégrales lors des contrôles en zone active."
        },
        "gettingStarted": {
            "beginnerProject": "Rechercher l'origine des rayonnements ionisants naturels qui nous entourent (radon, rayons cosmiques, bananes).",
            "intermediateProject": "Calculer la dose reçue lors d'un vol transatlantique Paris-Dakar en millisieverts et la comparer à une radio dentaire.",
            "advancedProject": "Établir une fiche de calcul d'épaisseur d'un écran de plomb pour diviser par 10 un débit de dose gamma de césium-137.",
            "portfolioIdeas": ["Protocole de frottis de détection de contamination surfacique", "Exposé pédagogique sur le principe ALARA"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des robots quadrupèdes autonomes cartographient les zones radioactives les plus chaudes avant l'entrée des techniciens.",
            "automatedTasks": ["Télé-relevé continu des balises d'ambiance", "Croisement automatique des historiques de doses des intervenants"],
            "emergingSkills": ["Supervision de flottes de drones et robots de mesure radiologique"],
            "humanEdge": "La décision éthique de validation d'un chantier et la communication rassurante auprès des travailleurs."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'Autorité Sénégalaise de Radioprotection et de Sûreté Nucléaire (ARSN) est chargée de surveiller toutes les sources radioactives : appareils de radiothérapie contre le cancer dans les hôpitaux de Dakar, gammagraphie industrielle pour contrôler la qualité des soudures sur les gazoducs offshore, et mesures de radioactivité naturelle dans les mines de zircon et de phosphate.",
            "localSectors": ["Autorité Sénégalaise de Radioprotection et de Sûreté Nucléaire (ARSN)", "Hôpitaux équipés de scanners et radiothérapie (Dakar, Touba)", "Entreprises d'inspection industrielle des pipelines pétroliers"],
            "remoteWork": "Hybride possible pour l'analyse des bilans dosimétriques et rapports d'audits.",
            "entrepreneurship": "Création d'un bureau de contrôle et de formation en radioprotection pour le personnel médical et industriel de l'Afrique de l'Ouest."
        },
        "relatedJobSlugs": ["responsable-hse-sites-energetiques", "ingenieur-exploitation-nucleaire", "technicien-maintenance-nucleaire"],
        "connectedFamilies": ["sante-biomedical", "sciences-biotech"],
        "resources": [
            {"type": "guide", "title": "Filière radioprotection — Energierecrute", "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php", "source": "Energierecrute"},
            {"type": "portail", "title": "IRSN — Institut de Radioprotection et de Sûreté Nucléaire", "url": "https://www.irsn.fr/", "source": "IRSN"}
        ],
        "sources": ["Energierecrute", "IRSN", "ASN", "ARSN Sénégal"],
        "interests": ["securite-defense", "nature-environnement", "donnees-chiffres"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Nous sommes tous exposés quotidiennement à environ 2,5 à 3 millisieverts par an de radioactivité naturelle (due aux roches granitiques terrestres, à l'air que nous respirons et à notre propre corps).",
            "pourquoi": "Le corps humain contient naturellement du potassium 40 radioactif et émet lui-même plusieurs milliers de désintégrations par seconde !",
            "a_retenir": "L'ange gardien qui protège les hommes et la nature contre les risques invisibles."
        }
    },

    # -----------------------------------------------------------------------
    # 21. TECHNICIEN FRIGORISTE & MAINTENANCE GÉNIE CLIMATIQUE CVC
    # -----------------------------------------------------------------------
    {
        "id": "technicien-genie-climatique-frigoriste",
        "slug": "technicien-genie-climatique-frigoriste",
        "title": "Technicien Frigoriste & Maintenance Génie Climatique CVC",
        "aliases": ["Technicien CVC", "Frigoriste industriel", "Technicien de maintenance pompes à chaleur et froid commercial"],
        "icon": "❄️",
        "image": "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Génie Climatique, Froid & Systèmes CVC",
        "domainId": "genie-climatique-cvc",
        "subdomain": "Froid commercial/industriel & CVC tertiaire",
        "energyTechnology": ["Groupes froids industriels", "Pompes à Chaleur (PAC) réversibles", "Fluides frigorigènes écologiques (CO2 transcritique, propane R290, ammoniac)"],
        "energySector": "Efficacité Énergétique du Bâtiment & Chaîne du Froid",
        "sourceEnergierecrute": True,
        "isEmerging": False,
        "level": "Bac Pro (TFCA) à Bac +2 (BTS FED option B - Génie frigorifique)",
        "salary": "🇫🇷 France : 2 200 - 3 500 € net/mois (~32 000 - 50 000 € brut/an avec véhicule, Source : Energierecrute) • 🇸🇳 Sénégal : 250 000 - 800 000 FCFA / mois (Maintenance supermarchés, hôtels, entrepôts frigorifiques du Port de Dakar)",
        "simpleDefinition": "Le technicien frigoriste et CVC installe, dépanne et optimise les systèmes de climatisation, de réfrigération industrielle et de pompes à chaleur garantissant le confort thermique et la chaîne du froid.",
        "shortDescription": "Métier sous très forte tension de recrutement sur Energierecrute, ce spécialiste assure le fonctionnement des systèmes thermodynamiques frigorifiques et le respect strict des réglementations sur les gaz à effet de serre.",
        "longDescription": "Comme en témoignent les très nombreuses offres publiées sur Energierecrute par les géants des services énergétiques et du froid (Carrier, Daikin, Dalkia, Engie Solutions, Clauger, Johnson Controls), le technicien frigoriste maîtrise le cycle thermodynamique de compression de vapeur. Il installe et règle des centrales de froid négatif pour l'agroalimentaire, des rooftops pour centres commerciaux, des groupes d'eau glacée pour hôpitaux ou des data centers. Titulaire de l'attestation d'aptitude aux fluides frigorigènes, il traque la moindre micro-fuite, récupère les gaz fluorés en circuit fermé et opère la transition vers les fluides naturels (CO2, ammoniac, hydrocarbures R290) à faible impact d'effet de serre.",
        "mainObjective": "Maintenir la performance thermodynamique et la continuité de fonctionnement des installations frigorifiques et climatiques sans émission de gaz à effet de serre.",
        "companyRole": "Garant du confort climatique, de la préservation de la chaîne alimentaire et de l'efficacité énergétique frigorifique.",
        "workEnvironment": [
            "🏬 Grandes surfaces commerciales, entrepôts logistiques frigorifiques et industries agroalimentaires",
            "🏥 Bâtiments tertiaires, cliniques, data centers et tours de bureaux",
            "🚐 Itinérance quotidienne en véhicule d'intervention outillé et astreintes froid 24h/24"
        ],
        "missions": [
            "Poser, raccorder et braser sous flux d'azote les circuits frigorifiques en cuivre de fortes épaisseurs",
            "Mettre en service les installations frigorifiques (tirage au vide, charge en fluide frigorigène, réglage des détendeurs)",
            "Diagnostiquer les dysfonctionnements thermodynamiques (manque de charge, incondensables, clapets de compresseur cassés)",
            "Réaliser la maintenance préventive (contrôle d'étanchéité périodique F-Gas, nettoyage des condenseurs, analyse d'huile)",
            "Régler les régulateurs électroniques et optimiser les températures d'évaporation pour réduire la facture électrique"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Diagnostic d'une alarme température haute", "desc": "Intervention d'urgence sur la chambre froide négative d'une plateforme logistique : détection d'un détendeur électronique bloqué fermé et remplacement de la tête motrice."},
            {"time": "10:45", "title": "Contrôle réglementaire F-Gas", "desc": "Recherche de fuite au détecteur électronique d'halogènes sur une centrale froid au R134a d'un hôpital et signature du registre CERFA dématérialisé."},
            {"time": "13:30", "title": "Mise en service d'une pompe à chaleur", "desc": "Tirage au vide poussé sous 200 microns sur une PAC tertiaire réversible de 80 kW, charge en gaz R32 et mesure des surchauffes et sous-refroidissements."},
            {"time": "16:00", "title": "Optimisation des paramètres de nuit", "desc": "Programmation de la régulation de pression de condensation flottante pour abaisser la consommation électrique nocturne du groupe d'eau glacée."}
        ],
        "skills": {
            "technical": [
                "Thermodynamique appliquée au froid (diagramme enthalpique de Mollier, surchauffe, sous-refroidissement)",
                "Brasage fort sous atmosphère neutre (azote) et tuyauterie cuivre frigorifique",
                "Électrotechnique et schémas électriques de puissance et régulation CVC",
                "Attestation d'aptitude à la manipulation des fluides frigorigènes (Catégorie 1 obligatoire)"
            ],
            "human": [
                "Sens aigu du diagnostic logique et esprit de déduction rapide",
                "Autonomie complète sur la route et gestion rigoureuse de son stock de pièces",
                "Orientation client et diplomatie lors des situations de panne bloquante"
            ],
            "tools": [
                "Manomètres électroniques numériques (manifolds connectés Bluetooth)",
                "Pompes à tirage au vide double étage et vacuomètres électroniques",
                "Détecteurs de fuites électroniques ultrasensibles et lampes UV",
                "Stations de récupération et bouteilles de transfert de fluide frigorigène"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "CAP / Bac Pro (Bac)", "title": "Bac Pro Technicien du Froid et Conditionnement d'Air (TFCA)", "desc": "Acquisition des gestes de brasage, de pose de tuyauterie et d'électricité de base."},
                {"step": "Attestation d'Aptitude Fluides", "title": "Attestation Catégorie 1 (Manipulation des fluides)", "desc": "Habilitation légale indispensable pour manipuler les gaz frigorigènes en circuit fermé."},
                {"step": "BTS (Bac +2)", "title": "BTS Fluides Énergies Domotique (BTS FED option B - Génie frigorifique)", "desc": "Maîtrise du dimensionnement des centrales de froid industriel et de la régulation électronique."}
            ],
            "schools": [
                {"name": "Lycées professionnels préparant le Bac Pro TFCA et BTS FED — France", "country": "France", "scope": "France"},
                {"name": "Institut Français du Froid Industriel (IFFI - CNAM) — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) / Génie Frigorifique — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Attestation d'Aptitude Fluides Frigorigènes Catégorie 1", "Habilitation électrique BR/B2V", "CACES nacelle PEMP"],
            "schoolSubjects": ["Thermodynamique frigorifique", "Électrotechnique CVC", "Mécanique des compresseurs", "Régulation numérique"]
        },
        "career": {
            "sectors": ["Entreprises de maintenance multitechnique (Dalkia, ENGIE Solutions, SPIE, Eiffage)", "Constructeurs et installateurs frigorifiques (Carrier, Daikin, Johnson Controls, Clauger)", "Agroalimentaire, grande distribution et chaîne logistique du froid"],
            "employerTypes": ["Installateurs frigorifiques indépendants", "Grands groupes d'efficacité énergétique", "Plateformes logistiques alimentaires"],
            "evolution": "Technicien frigoriste itinérant ➔ Frigoriste référent technique ➔ Chef d'équipe génie climatique ➔ Chargé d'affaires froid industriel ➔ Chef d'entreprise",
            "pros": "Plein emploi garanti (pénurie majeure de profils), autonomie avec véhicule de service, forte dimension technique de déduction logique.",
            "cons": "Astreintes week-end et nuit pour préserver la nourriture dans les chambres froides, manipulations de pièces lourdes."
        },
        "gettingStarted": {
            "beginnerProject": "Observer le cycle frigorifique d'un réfrigérateur domestique (compresseur, condenseur, détente, évaporateur).",
            "intermediateProject": "Tracer un cycle frigorifique classique sur un diagramme de Mollier (pression-enthalpie).",
            "advancedProject": "Calculer le coefficient d'efficacité frigorifique (COP froid) d'un groupe d'eau glacée de 50 kW.",
            "portfolioIdeas": ["Photos de brasages cuivre sous azote réussis", "Rapport de mise en service d'une pompe à chaleur réversible"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des algorithmes de maintenance prédictive détectent les micro-fuites de gaz et les encrassements d'échangeurs avant toute interruption de froid.",
            "automatedTasks": ["Détection précoce de dérive de surchauffe", "Télé-réglage automatique des consignes de nuit"],
            "emergingSkills": ["Utilisation de manifolds numériques connectés au cloud pour auto-diagnostic"],
            "humanEdge": "La dextérité manuelle du brasage de tuyauteries et le flair du technicien pour repérer une vibration suspecte."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le technicien frigoriste est au cœur de l'économie nationale : il préserve les milliers de tonnes de poisson frais débarquées au Port de Dakar, à Mbour et à Saint-Louis, climatise les data centers et banques de la capitale, et garantit la conservation des vaccins et médicaments dans les centres de santé de l'intérieur du pays sous plus de 40°C.",
            "localSectors": ["Entrepôts frigorifiques du Port Autonome de Dakar (PAD)", "Industries de transformation halieutique (conserveries, mareyeurs)", "Grandes surfaces, hôtellerie et tertiaire (Dakar, Saly)"],
            "remoteWork": "Non compatible (interventions physiques indispensables sur site et en ateliers).",
            "entrepreneurship": "Création d'une société d'installation de chambres froides solaires pour les coopératives maraîchères des Niayes."
        },
        "relatedJobSlugs": ["technicien-etudes-thermiques-batiment", "charge-affaires-energetique-cvc", "energy-manager-auditeur-energetique"],
        "connectedFamilies": ["btp-architecture", "industrie-mecanique"],
        "resources": [
            {"type": "guide", "title": "Métiers du froid et de la climatisation — Energierecrute", "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php", "source": "Energierecrute"},
            {"type": "portail", "title": "Snefcca — Syndicat national des entreprises du froid", "url": "https://www.snefcca.com/", "source": "Snefcca"}
        ],
        "sources": ["Energierecrute", "Snefcca", "IFFI", "ESP Dakar"],
        "interests": ["technique-outils", "construire-fabriquer"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Un technicien frigoriste ne 'fabrique pas du froid' : il extrait la chaleur présente dans un local fermé et l'évacue vers l'extérieur grâce aux changements d'état d'un fluide thermodynamique.",
            "pourquoi": "Le froid n'est physiquement rien d'autre que l'absence de chaleur.",
            "a_retenir": "Le spécialiste indispensable qui protège notre alimentation et notre confort thermique."
        }
    },

    # -----------------------------------------------------------------------
    # 22. ENERGY MANAGER & AUDITEUR ÉNERGÉTIQUE / ISO 50001 / MEER
    # -----------------------------------------------------------------------
    {
        "id": "energy-manager-auditeur-energetique",
        "slug": "energy-manager-auditeur-energetique",
        "title": "Energy Manager & Auditeur Énergétique / ISO 50001 / MEER",
        "aliases": ["Responsable performance énergétique", "Auditeur énergétique certifié", "Consultant efficacité énergétique industrielle"],
        "icon": "📊",
        "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Maîtrise de l'Énergie, Audit & Performance MEER",
        "domainId": "maitrise-energie-audit-meer",
        "subdomain": "Audit énergétique & Décarbonation industrielle",
        "energyTechnology": ["Norme de management de l'énergie ISO 50001", "Plans de comptage & Indicateurs de Performance Énergétique (IPÉ)", "Récupération de chaleur fatale industrielle"],
        "energySector": "Sobriété, Efficacité & Stratégie Bas-Carbone",
        "sourceEnergierecrute": True,
        "isEmerging": True,
        "level": "Bac +3 (Licence Pro MEER) à Bac +5 (Ingénieur en Énergétique / Master Management de l'Énergie)",
        "salary": "🇫🇷 France : 2 900 - 4 800 € net/mois (~40 000 - 70 000 € brut/an, Source : Energierecrute / APEC) • 🇸🇳 Sénégal : 500 000 - 1 600 000 FCFA / mois (Industries cimentières, brasseries, grands hôtels, programmes ASER/ANER)",
        "simpleDefinition": "L'Energy Manager analyse les consommations énergétiques d'entreprises ou de collectivités, traque les gaspillages, met en place la norme ISO 50001 et conçoit des plans d'investissement pour réduire durablement la facture et l'empreinte carbone.",
        "shortDescription": "Pilier de la transition énergétique valorisé par Energierecrute, ce cadre technico-économique transforme la sobriété et l'efficacité énergétique en leviers majeurs de rentabilité financière.",
        "longDescription": "Comme décrit au sein des cursus spécialisés en Maîtrise de l'Énergie et Énergies Renouvelables (MEER) documentés sur Energierecrute, l'Energy Manager (gestionnaire de l'énergie) est le chef d'orchestre de la décarbonation des usines et des parcs immobiliers tertiaires. Il cartographie les usages énergétiques significatifs (fours, compresseurs d'air, groupes froids, éclairage), installe des capteurs connectés pour suivre les consommations en temps réel et calcule des Indicateurs de Performance Énergétique (IPÉ). Il bâtit des plans d'actions pluriannuels chiffrés, mobilise les mécanismes de financement (Certificats d'Économies d'Énergie - CEE en France, fonds climat internationaux en Afrique) et fédère les salariés autour des éco-gestes.",
        "mainObjective": "Réduire de 15% à 40% la consommation globale d'énergie primaire d'un site industriel ou tertiaire tout en augmentant sa compétitivité.",
        "companyRole": "Pilote stratégique de la décarbonation, de la conformité réglementaire (Décret Tertiaire) et des économies financières d'énergie.",
        "workEnvironment": [
            "🏭 Sites industriels consommateurs intensifs d'énergie (agroalimentaire, chimie, métallurgie, cimenteries)",
            "🏢 Sièges de grandes entreprises tertiaires ou cabinets de conseil en transition écologique",
            "💻 Analyse poussée de données énergétiques et tableaux de bord de supervision"
        ],
        "missions": [
            "Réaliser des audits énergétiques instrumentés conformément aux normes réglementaires (NF EN 16247)",
            "Déployer et pérenniser le Système de Management de l'Énergie selon la norme internationale ISO 50001",
            "Mettre en place un plan de sous-comptage énergétique communicant et définir des indicateurs de performance (IPÉ)",
            "Identifier et chiffrer les gisements d'économies d'énergie (récupération de chaleur fatale, variateurs de vitesse, isolation)",
            "Monter les dossiers de subventions et valoriser les Certificats d'Économies d'Énergie (CEE)"
        ],
        "typicalDay": [
            {"time": "08:45", "title": "Analyse du tableau de bord énergétique", "desc": "Examen des dérives nocturnes de consommation : détection d'une fuite d'air comprimé persistante sur la ligne d'embouteillage grâce à la télé-relève."},
            {"time": "10:30", "title": "Visite technique de chaufferie industrielle", "desc": "Mesure des températures de fumées de la chaudière vapeur et calcul du gain financier potentiel de l'installation d'un économiseur-condenseur."},
            {"time": "14:00", "title": "Comité de pilotage ISO 50001", "desc": "Présentation à la direction générale des résultats du premier semestre : -12% d'électricité consommée par tonne produite."},
            {"time": "16:30", "title": "Montage d'un dossier de financement CEE", "desc": "Finalisation de la demande de subvention pour la mise en place d'une isolation thermique de vannes (matelas isolants) sur le réseau de vapeur."}
        ],
        "skills": {
            "technical": [
                "Thermodynamique industrielle et utilités d'usine (vapeur, air comprimé, froid, électricité)",
                "Normes d'audit et de management de l'énergie (ISO 50001, NF EN 16247, Décret Tertiaire)",
                "Instrumentation et métrologie énergétique (pinces ampèremétriques, caméras thermiques, débitmètres)",
                "Analyse financière de projets (calcul de ROI, VAN, TRI, valorisation des CEE)"
            ],
            "human": [
                "Capacité de conviction et pédagogie auprès des opérateurs comme des directions générales",
                "Rigueur analytique et esprit de synthèse pour exploiter de grands volumes de données",
                "Culture de l'amélioration continue et du changement durable des comportements"
            ],
            "tools": [
                "Logiciels d'Energy Management System (Metron, Qualisteo, Dapesco, Energis)",
                "Caméras thermiques infrarouges de diagnostic (FLIR, Fluke)",
                "Enregistreurs de puissance électrique et wattmètres communicants",
                "Détecteurs de fuites d'air comprimé par ultrasons"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "BTS / BUT (Bac +2/+3)", "title": "BTS MEER (Maîtrise de l'Énergie) ou BUT MT2E", "desc": "Bases solides en métrologie thermique, bilans énergétiques et énergies renouvelables."},
                {"step": "Licence Pro (Bac +3)", "title": "Licence Pro Gestionnaire des Énergies et Éco-Efficacité", "desc": "Formation ciblée sur l'audit énergétique NF EN 16247 et le management ISO 50001."},
                {"step": "Master / Diplôme d'Ingénieur (Bac +5)", "title": "Ingénieur en Efficacité Énergétique ou Master Management de l'Énergie", "desc": "Accès aux postes d'Energy Manager groupe et de consultant senior en décarbonation."}
            ],
            "schools": [
                {"name": "IUT et Universités proposant la filière MEER et MT2E — France", "country": "France", "scope": "France"},
                {"name": "Écoles d'ingénieurs (Polytech, INSA, EPF, Mines de Nantes) — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) / Licence Pro MEER — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Université Gaston Berger de Saint-Louis (UGB) / Master Énergies — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certified Energy Manager (CEM) - Association of Energy Engineers", "Auditeur Énergétique Certifié OPQIBI 1905", "Auditeur Interne ISO 50001"],
            "schoolSubjects": ["Thermodynamique des procédés", "Comptabilité carbone", "Métrologie énergétique", "Financement de projet"]
        },
        "career": {
            "sectors": ["Industries manufacturières lourdes (sidérurgie, cimenteries, chimie, agroalimentaire)", "Cabinets de conseil en transition énergétique et bureaux d'études", "Grandes foncières immobilières et bailleurs sociaux", "Collectivités territoriales"],
            "employerTypes": ["Sociétés de conseil en ingénierie énergétique", "Grands groupes industriels internationaux", "Services techniques de métropoles"],
            "evolution": "Auditeur énergétique junior ➔ Energy Manager de site industriel ➔ Directeur de la performance énergétique groupe ➔ Directeur RSE & Décarbonation",
            "pros": "Impact direct et immédiatement mesurable sur la réduction du CO2, double casquette technique et financière stimulante, très forte demande.",
            "cons": "Résistance au changement possible dans les ateliers, pression sur la rentabilité financière des investissements."
        },
        "gettingStarted": {
            "beginnerProject": "Relever les consommations électriques de son foyer sur 6 mois et identifier les 3 postes les plus gourmands.",
            "intermediateProject": "Réaliser le bilan thermique simplifié d'un bureau avec une caméra thermique infrarouge.",
            "advancedProject": "Calculer le temps de retour sur investissement d'un variateur de vitesse sur un moteur de pompe de 45 kW.",
            "portfolioIdeas": ["Rapport d'audit énergétique blanc conforme NF EN 16247", "Tableau de bord Excel d'Indicateurs de Performance Énergétique (IPÉ)"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA analyse en temps réel les données de centaines de capteurs pour modéliser la ligne de base énergétique et signaler instantanément toute anomalie.",
            "automatedTasks": ["Calcul automatisé de la ligne de base énergétique (Baseline)", "Détection des dérives de consommation hors heures de production"],
            "emergingSkills": ["Utilisation de plateformes cloud d'Energy Analytics pilotées par IA"],
            "humanEdge": "La capacité à mobiliser les équipes de terrain, changer les habitudes de travail et négocier les budgets avec la direction."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'Agence pour l'Économie et la Maîtrise de l'Énergie (AEME) impulse des audits énergétiques obligatoires pour les gros consommateurs industriels (cimenteries Sococim et Dangote, ICS) et le secteur tertiaire (hôtels, banques) afin d'alléger la facture électrique nationale et préserver le réseau Senelec.",
            "localSectors": ["AEME (Agence pour l'Économie et la Maîtrise de l'Énergie du Sénégal)", "Cimenteries industrielles (Sococim Rufisque, Dangote Pout)", "Industries Chimiques du Sénégal (ICS Darou Khoudoss)"],
            "remoteWork": "Très favorable (visites sur sites pour mesures puis analyse de données et rédaction en télétravail).",
            "entrepreneurship": "Création d'un cabinet d'audit énergétique et de conseil en efficacité énergétique industrielle pour la sous-région UEMOA."
        },
        "relatedJobSlugs": ["technicien-etudes-energetiques-industrielles", "technico-commercial-solutions-energetiques", "chef-projet-energie-solaire-photovoltaique"],
        "connectedFamilies": ["finance-fintech", "droit-management"],
        "resources": [
            {"type": "guide", "title": "Formation MEER et métiers de l'efficacité énergétique — Energierecrute", "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php", "source": "Energierecrute"},
            {"type": "portail", "title": "AEE — Association of Energy Engineers", "url": "https://www.aeecenter.org/", "source": "AEE"}
        ],
        "sources": ["Energierecrute", "ADEME", "AEME Sénégal", "AEE"],
        "interests": ["donnees-chiffres", "nature-environnement", "droit-politique"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Dans une usine classique, jusqu'à 30% de l'électricité consommée par les compresseurs d'air comprimé est gaspillée dans des micro-fuites invisibles et inaudibles sur les canalisations.",
            "pourquoi": "Un simple audit par caméra acoustique ultra-sons permet d'économiser des dizaines de milliers d'euros dès la première semaine de réparation.",
            "a_retenir": "Le détective de l'énergie qui traque les kilowattheures gaspillés."
        }
    },

    # -----------------------------------------------------------------------
    # 23. TRADER EN ÉNERGIE & ANALYSTE DES MARCHÉS DE GROS
    # -----------------------------------------------------------------------
    {
        "id": "trader-energie-analyste-marches",
        "slug": "trader-energie-analyste-marches",
        "title": "Trader en Énergie & Analyste des Marchés de Gros / Epex Spot / EEX",
        "aliases": ["Opérateur de marché électricité et gaz", "Analyste quantitatif énergie", "Portfolio manager énergie renouvelable"],
        "icon": "📈",
        "image": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Marchés, Trading & Économie de l'Énergie",
        "domainId": "marches-trading-economie-energie",
        "subdomain": "Trading d'électricité & Gaz / Marchés de capacité",
        "energyTechnology": ["Bourses de l'électricité (EPEX SPOT, EEX)", "Contrats PPA (Power Purchase Agreements)", "Certificats de garanties d'origine et quotas carbone ETS"],
        "energySector": "Finance de l'Énergie & Négociation de Gros",
        "sourceEnergierecrute": True,
        "isEmerging": False,
        "level": "Bac +5 (Master Finance / Économie de l'énergie, Grande École d'Ingénieurs ou de Commerce)",
        "salary": "🇫🇷 France : 4 000 - 8 000 € net/mois (~55 000 - 120 000 € brut/an hors bonus, Source : Energierecrute / APEC) • 🇸🇳 Sénégal : N/A (Marché régional WAPP / EEEOA à Cotonou : 800 000 - 2 500 000 FCFA)",
        "simpleDefinition": "Le trader en énergie achète et vend de l'électricité, du gaz et des quotas carbone sur les bourses de gros pour optimiser le portefeuille de production de son entreprise, couvrir les risques de volatilité des prix et valoriser la production renouvelable.",
        "shortDescription": "Profil hautement stratégique à la croisée de la physique et de la finance valorisé par Energierecrute, ce spécialiste négocie des mégawattheures en temps réel sur les marchés européens et mondiaux.",
        "longDescription": "Comme l'illustrent les offres d'opérateurs énergétiques et de traders spécialisés publiées sur Energierecrute (EDF Trading, TotalEnergies Gas & Power, Engie Global Energy Management, Axpo, Statkraft), le trader en énergie opère sur les marchés spot (Day-Ahead, Intraday) et à terme (Futures). Il arbitre en continu entre le coût marginal de démarrage d'une centrale, les prévisions météorologiques de vent et de soleil, le niveau de remplissage des barrages hydroélectriques et le prix des matières premières (gaz, charbon, quotas de CO2). Il négocie également des contrats de gré à gré à long terme (PPA) pour sécuriser le financement de nouveaux parcs photovoltaïques sans subventions d'État.",
        "mainObjective": "Maximiser les marges financières de valorisation de l'énergie produite tout en sécurisant l'approvisionnement des clients contre les flambées de cours.",
        "companyRole": "Générateur de marge financière et gestionnaire des risques de marché de l'énergéticien.",
        "workEnvironment": [
            "🏢 Salles de marché (trading floors) ultra-connectées des grands producteurs et fournisseurs d'énergie",
            "💻 Terminaux boursiers multi-écrans avec flux de cotations en temps réel (Bloomberg, Reuters Eikon)",
            "🌐 Interaction permanente avec les bourses européennes (EPEX SPOT, EEX, ICE)"
        ],
        "missions": [
            "Acheter et vendre de l'électricité et du gaz sur les marchés Day-Ahead et Intraday pour équilibrer le périmètre responsable d'équilibre",
            "Modéliser et anticiper les prix de l'électricité à partir des prévisions météorologiques (vent, ensoleillement, températures)",
            "Structurer et négocier des contrats de vente d'électricité renouvelable à long terme (Corporate PPA) avec de grands clients industriels",
            "Couvrir les risques de volatilité tarifaire et gérer le portefeuille d'actifs de production (dispatch économique)",
            "Négocier les quotas d'émissions de CO2 (système communautaire d'échange de quotas d'émission - EU ETS) et les Garanties d'Origine"
        ],
        "typicalDay": [
            {"time": "07:15", "title": "Revue météo et analyse de marché", "desc": "Examen des prévisions de vent pour l'Allemagne et la France : coup de vent attendu à 14h faisant chuter le cours spot de l'électricité."},
            {"time": "09:30", "title": "Enchère journalière Day-Ahead", "desc": "Passage des ordres d'achat et de vente d'électricité pour chaque heure du lendemain sur la plateforme d'enchères EPEX SPOT."},
            {"time": "12:30", "title": "Trading Intraday en continu", "desc": "Ajustement en temps réel des positions suite à l'arrêt imprévu d'une tranche thermique : rachat de 100 MW sur le marché infrajournalier pour éviter les pénalités de déséquilibre."},
            {"time": "15:30", "title": "Structuration d'un PPA solaire", "desc": "Simulation financière de la valorisation sur 15 ans d'une future ferme solaire de 50 MWc avec intégration d'une clause de plancher de prix."}
        ],
        "skills": {
            "technical": [
                "Fonctionnement des bourses de l'électricité et du gaz (EPEX SPOT, EEX, ICE, mécanisme de capacité)",
                "Mathématiques financières appliquées, calcul stochastique et valorisation d'options",
                "Programmation en Python pour le trading algorithmique et l'analyse quantitative (Pandas, Numpy, SQL)",
                "Compréhension approfondie du système électrique européen et du comportement des fondamentaux (météo, centrales, interconnexions)"
            ],
            "human": [
                "Résistance exceptionnelle au stress et rapidité de décision sous contrainte de temps",
                "Esprit de compétition et forte appétence pour les chiffres et les dynamiques de marché",
                "Discipline stricte dans l'application des limites de risque financier (Value at Risk - VaR)"
            ],
            "tools": [
                "Terminaux financiers professionnels (Bloomberg Terminal, Refinitiv Eikon)",
                "Plateformes d'exécution boursière d'énergie (Trayport, EPEX Trading System)",
                "Modèles quantitatifs de prévision de prix sous Python et R",
                "Logiciels d'Energy Trading and Risk Management (ETRM - Allegro, Openlink Endur)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Classes Préparatoires / Licence (Bac +3)", "title": "CPGE Mathématiques / Économie ou Licence d'Économétrie", "desc": "Acquisition d'une solide rigueur quantitative en modélisation mathématique et statistiques."},
                {"step": "Master / Diplôme de Grande École (Bac +5)", "title": "Grande École d'Ingénieurs, Grande École de Commerce ou Master Finance / Énergie", "desc": "Spécialisation en marchés financiers de l'énergie, calcul stochastique et régulation européenne."},
                {"step": "Certification de Marché", "title": "Agrément d'opérateur de marché boursier (EPEX SPOT / EEX Trader Exam)", "desc": "Examen officiel requis pour obtenir le droit de passer des ordres directs sur les bourses de l'électricité."}
            ],
            "schools": [
                {"name": "Grandes Écoles d'Ingénieurs (Polytechnique, Mines Paris, CentraleSupélec, Ponts) — France", "country": "France", "scope": "France"},
                {"name": "Grandes Écoles de Commerce (HEC Paris, ESSEC, ESCP) — France", "country": "France", "scope": "France"},
                {"name": "Université Paris Dauphine / Toulouse School of Economics (TSE) — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) / EPT Thiès — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Trader Examination EPEX SPOT / EEX", "Certification CFA (Chartered Financial Analyst)", "Certification ETRM Risk Management"],
            "schoolSubjects": ["Microéconomie de l'énergie", "Calcul stochastique", "Séries temporelles & Python", "Droit des marchés financiers"]
        },
        "career": {
            "sectors": ["Pôles trading des énergéticiens mondiaux (TotalEnergies, ENGIE, EDF Trading, Statkraft)", "Boutiques indépendantes de trading de matières premières (Vitol, Trafigura, Gunvor)", "Banques d'investissement et fonds spéculatifs énergie"],
            "employerTypes": ["Salles de marché d'énergéticiens", "Négociants internationaux en matières premières", "Bourses de l'énergie"],
            "evolution": "Analyste quantitatif junior ➔ Trader Day-Ahead ➔ Senior Trader Cross-Commodity ➔ Head of Energy Trading ➔ Directeur des risques de marché",
            "pros": "Rémunération très élevée avec bonus sur performance, adrénaline intellectuelle du direct, dimension internationale.",
            "cons": "Niveau de stress intense, horaires matinaux stricts calés sur les enchères boursières, impact financier immédiat de toute erreur."
        },
        "gettingStarted": {
            "beginnerProject": "Suivre l'évolution quotidienne du prix spot de l'électricité en France sur le site public d'EPEX SPOT.",
            "intermediateProject": "Corréler sous Excel ou Python les variations de température hivernales avec les cours de l'électricité.",
            "advancedProject": "Construire un modèle de valorisation d'un contrat PPA solaire sur 10 ans avec actualisation des flux.",
            "portfolioIdeas": ["Script Python d'analyse de données de marché EPEX SPOT", "Note de conjoncture sur les quotas d'émissions de CO2"]
        },
        "aiImpact": {
            "level": "Révolutionnaire",
            "summary": "Le trading algorithmique (algo-trading) et l'IA exécutent des milliers d'ordres par seconde sur les marchés infrajournaliers dès qu'une prévision météo évolue.",
            "automatedTasks": ["Passage d'ordres automatisé à haute fréquence", "Extraction automatique de nouvelles géopolitiques impactant le gaz"],
            "emergingSkills": ["Programmation de bots de trading énergie sous Python et C++"],
            "humanEdge": "La gestion psychologique du risque extrême, la vision macroéconomique et la négociation humaine des grands contrats bilatéraux."
        },
        "africaContext": {
            "senegalInsight": "En Afrique de l'Ouest, le Système d'Échanges d'Énergie Électrique Ouest-Africain (WAPP/EEEOA) développe un marché régional de gros de l'électricité basé à Cotonou, permettant au Sénégal, à la Côte d'Ivoire et au Ghana de négocier et commercer leurs excédents énergétiques à travers des interconnexions haute tension.",
            "localSectors": ["WAPP (Système d'Échanges d'Énergie Électrique Ouest-Africain)", "Senelec (Direction des Grands Projets et Achats d'Énergie)", "Bureaux de négoce pétrogazier de Dakar"],
            "remoteWork": "Hybride possible (terminaux de marché accessibles en environnement sécurisé).",
            "entrepreneurship": "Création d'un cabinet de courtage en contrats d'achat d'électricité verte (PPA) pour les miniers et industriels africains."
        },
        "relatedJobSlugs": ["energy-manager-auditeur-energetique", "technicien-exploitation-supervision-reseaux", "technico-commercial-solutions-energetiques"],
        "connectedFamilies": ["finance-fintech", "droit-management"],
        "resources": [
            {"type": "guide", "title": "Trading d'énergie et finance des marchés — Energierecrute", "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php", "source": "Energierecrute"},
            {"type": "portail", "title": "EPEX SPOT — Bourse européenne de l'électricité", "url": "https://www.epexspot.com/", "source": "EPEX SPOT"}
        ],
        "sources": ["Energierecrute", "EPEX SPOT", "EEX", "WAPP"],
        "interests": ["donnees-chiffres", "finance-fintech"],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Sur les bourses de l'électricité, les prix peuvent parfois devenir négatifs : lors d'un week-end de grand vent et de plein soleil en Allemagne où les usines sont fermées, les producteurs paient littéralement les consommateurs pour qu'ils absorbent les mégawattheures excédentaires !",
            "pourquoi": "Parce qu'arrêter puis redémarrer une centrale thermique coûterait encore plus cher que de payer pour évacuer l'électricité pendant quelques heures.",
            "a_retenir": "Le financier de l'énergie qui valorise chaque électron décarboné au meilleur cours boursier."
        }
    },

    # -----------------------------------------------------------------------
    # 24. TECHNICO-COMMERCIAL EN SOLUTIONS ÉNERGÉTIQUES & CPE
    # -----------------------------------------------------------------------
    {
        "id": "technico-commercial-solutions-energetiques",
        "slug": "technico-commercial-solutions-energetiques",
        "title": "Technico-Commercial en Solutions Énergétiques & CPE",
        "aliases": ["Ingénieur commercial transition énergétique", "Responsable développement solutions bas-carbone", "Chargé d'affaires contrats de performance énergétique"],
        "icon": "🤝",
        "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Commerce, Vente & Solutions Énergétiques B2B",
        "domainId": "commerce-solutions-energetiques",
        "subdomain": "Contrats de performance énergétique (CPE) & Équipements CVC/Solaire",
        "energyTechnology": ["Contrats de Performance Énergétique (CPE)", "Autoconsommation solaire B2B en tiers-financement", "Solutions de décarbonation globale du bâtiment"],
        "energySector": "Vente de Solutions Énergétiques Complexes B2B",
        "sourceEnergierecrute": True,
        "isEmerging": False,
        "level": "Bac +2 (BTS CCST) à Bac +5 (Ingénieur d'affaires)",
        "salary": "🇫🇷 France : 2 800 - 4 800 € net/mois (~38 000 - 70 000 € brut/an + variable non plafonné, Source : Energierecrute) • 🇸🇳 Sénégal : 450 000 - 1 500 000 FCFA / mois (Fournisseurs d'équipements solaires industriels, climatisation B2B)",
        "simpleDefinition": "Le technico-commercial en solutions énergétiques prospecte, conçoit et vend des offres techniques d'économies d'énergie (ombrières photovoltaïques, modernisation CVC, contrats de performance énergétique garantie) à des entreprises et collectivités.",
        "shortDescription": "Profil pivot du développement commercial présent en masse sur Energierecrute, il combine expertise thermique/électrique et force de persuasion pour faire signer des projets éco-responsables à fort retour sur investissement.",
        "longDescription": "Comme mis en avant dans les catégories 'Commercial / Vente' d'Energierecrute chez les installateurs et groupes de services (Dalkia, Spie, Engie, Schneider Electric, TotalEnergies, fabricants de pompes à chaleur et de panneaux solaires), le technico-commercial B2B ne vend pas un simple produit mais une solution globale de performance. Il audite les installations de ses clients industriels, tertiaires ou collectivités, conçoit avec le bureau d'études une offre clé en main intégrant travaux, maintenance et garantie d'économies d'énergie (CPE), monte le plan de financement (avec subventions CEE et tiers-financement) et négocie le contrat jusqu'au closing commercial.",
        "mainObjective": "Développer le chiffre d'affaires et la part de marché de son entreprise en proposant des offres d'efficacité énergétique rentables pour le client et à fort impact carbone.",
        "companyRole": "Moteur du développement commercial et ambassadeur des offres de transition énergétique de l'entreprise.",
        "workEnvironment": [
            "🏢 Entreprises clientes (usines, sièges sociaux, hôpitaux, centres commerciaux)",
            "🚗 Déplacements réguliers sur son secteur géographique avec véhicule de fonction",
            "💻 Élaboration d'offres financières et techniques complexes au bureau ou en télétravail"
        ],
        "missions": [
            "Prospecter de nouveaux comptes clients B2B (directeurs techniques, directeurs d'usines, élus locaux)",
            "Visiter les sites clients pour identifier les gisements d'économies d'énergie et qualifier les besoins",
            "Élaborer des propositions commerciales et financières complexes (CPE, tiers-investissement photovoltaïque, CEE)",
            "Soutenir et défendre l'offre technique en soutenance devant les comités de direction des clients",
            "Assurer le suivi de la satisfaction client et fidéliser son portefeuille par des avenants de services"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Prospection et ciblage de comptes industriels", "desc": "Qualification téléphonique de directeurs d'usines agroalimentaires pour leur proposer une offre de récupération de chaleur fatale financée par CEE."},
            {"time": "10:30", "title": "Visite technique chez un client", "desc": "Relevé des caractéristiques de toiture d'un entrepôt logistique de 15 000 m² pour dimensionner un projet de centrale solaire en autoconsommation."},
            {"time": "14:30", "title": "Montage de l'offre avec le bureau d'études", "desc": "Calcul du temps de retour sur investissement (TRI de 4,2 ans) et intégration de la garantie de performance énergétique."},
            {"time": "16:45", "title": "Soutenance commerciale", "desc": "Présentation en visioconférence devant le comité de direction d'un groupe hôtelier pour le remplacement de leurs groupes froids par des pompes à chaleur thermodynamiques."}
        ],
        "skills": {
            "technical": [
                "Technologies de l'énergie (CVC, photovoltaïque, éclairage LED, régulation GTB)",
                "Montage financier et contractuel des Contrats de Performance Énergétique (CPE)",
                "Mécanismes de subventions et aides d'État (CEE, MaPrimeRénov' Sérénité, fonds chaleur ADEME)",
                "Techniques de vente consultative complexe B2B et négociation grand compte"
            ],
            "human": [
                "Aisance relationnelle, sens de l'écoute active et force de persuasion",
                "Ténacité, persévérance et sens du résultat commercial",
                "Capacité à vulgariser des concepts techniques pointus pour des décideurs non-techniciens"
            ],
            "tools": [
                "Logiciels de gestion de la relation client CRM (Salesforce, HubSpot)",
                "Outils de simulation technico-économique de rentabilité énergétique",
                "Simulateurs de gisements et de calcul de Certificats d'Économies d'Énergie",
                "Outils de présentation commerciale percutants"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "BTS (Bac +2)", "title": "BTS CCST (Conseil et Commercialisation de Solutions Techniques)", "desc": "Double formation technique et commerciale pour négocier des équipements industriels."},
                {"step": "Licence Pro (Bac +3)", "title": "Licence Pro Commercialisation des Équipements de l'Énergie", "desc": "Spécialisation dans les montages de vente B2B photovoltaïques et génie climatique."},
                {"step": "Master / Ingénieur d'Affaires (Bac +5)", "title": "Master Ingénierie d'Affaires ou Double diplôme Ingénieur-Manager", "desc": "Accès aux postes de Key Account Manager et grands contrats de décarbonation industrielle."}
            ],
            "schools": [
                {"name": "Lycées et CFA préparant le BTS CCST et BTS FED — France", "country": "France", "scope": "France"},
                {"name": "Écoles d'ingénieurs d'affaires (ESTA Belfort, Hybria Lyon, Kedge) — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) / Gestion & Commerce — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "BEM Dakar (Bordeaux Management School) / IAM Dakar — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification Négociation Commerciale Complexe B2B", "Habilitation Certificats d'Économies d'Énergie (CEE)", "Certification Vente de CPE Ademe"],
            "schoolSubjects": ["Techniques de vente B2B", "Génie énergétique de base", "Analyse financière de rentabilité", "Droit des contrats commerciaux"]
        },
        "career": {
            "sectors": ["Distributeurs de matériel électrique et EnR (Rexel, Sonepar, CEDEO)", "Installateurs et intégrateurs photovoltaïques et CVC", "Sociétés de services énergétiques (Dalkia, ENGIE, SPIE, TotalEnergies Solutions)", "Fabricants d'équipements de chauffage et climatisation"],
            "employerTypes": ["Installateurs régionaux", "Négociants grossistes en matériel technique", "Grands énergéticiens"],
            "evolution": "Technico-commercial junior ➔ Responsable de secteur commercial ➔ Key Account Manager (Grands Comptes) ➔ Directeur commercial régional ➔ Directeur du développement",
            "pros": "Rémunération très stimulante avec primes variables, autonomie d'organisation, fierté de signer des contrats qui réduisent le carbone.",
            "cons": "Pression sur les objectifs de vente trimestriels, déplacements routiers fréquents."
        },
        "gettingStarted": {
            "beginnerProject": "Comparer les fiches techniques de 3 pompes à chaleur pour en extraire les arguments commerciaux clés.",
            "intermediateProject": "Construire un argumentaire de vente pour convaincre un chef d'entreprise d'installer des panneaux solaires sur son toit.",
            "advancedProject": "Rédiger une offre commerciale complète de Contrat de Performance Énergétique (CPE) avec garantie de résultat chiffrée.",
            "portfolioIdeas": ["Proposition commerciale fictive de centrale solaire en autoconsommation", "Simulation financière de temps de retour sur investissement (TRI)"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'IA générative rédige les premières ébauches de propositions techniques et qualifie automatiquement les prospects ayant le plus fort potentiel d'économies d'énergie.",
            "automatedTasks": ["Scoring prédictif des entreprises consommatrices", "Génération automatique des récapitulatifs de devis"],
            "emergingSkills": ["Utilisation d'assistants CRM pilotés par IA pour la relance commerciale ciblée"],
            "humanEdge": "La confiance interpersonnelle, l'empathie et la force de conviction en face à face qui emportent la décision du client."
        },
        "africaContext": {
            "senegalInsight": "À Dakar et dans les pôles économiques du Sénégal, les technico-commerciaux en solutions énergétiques sont très recherchés pour vendre des installations solaires en toiture et des climatisations éco-efficaces aux banques, hôtels de la Petite Côte, centres d'appels et usines, afin de sécuriser leur approvisionnement face aux hausses de tarifs de l'électricité.",
            "localSectors": ["Fournisseurs de kits solaires et de batteries (Ténergie, Nadji Bi, Solektra)", "Distributeurs de climatisation et génie frigorifique (CFAO Sénégal, Matforce)", "Bureaux de conseil en financement vert"],
            "remoteWork": "Hybride (visites clients sur le terrain et télétravail pour le CRM et les offres).",
            "entrepreneurship": "Création d'une agence de courtage en équipements d'énergie renouvelable et de solutions de tiers-financement solaire pour les PME."
        },
        "relatedJobSlugs": ["energy-manager-auditeur-energetique", "chef-projet-energie-solaire-photovoltaique", "charge-affaires-energetique-cvc"],
        "connectedFamilies": ["commerce-marketing", "droit-management"],
        "resources": [
            {"type": "guide", "title": "Vente et commerce des solutions énergétiques — Energierecrute", "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php", "source": "Energierecrute"},
            {"type": "portail", "title": "ADEME — Contrats de Performance Énergétique", "url": "https://www.ademe.fr/", "source": "ADEME"}
        ],
        "sources": ["Energierecrute", "ADEME", "FEDENE"],
        "interests": ["commerce-marketing", "contact-humain", "technique-outils"],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Dans un Contrat de Performance Énergétique (CPE), le vendeur s'engage contractuellement sur un pourcentage d'économies garanti : si l'usine n'atteint pas l'économie promise, l'entreprise prestataire paie elle-même la différence de facture au client !",
            "pourquoi": "Cet engagement juridique audacieux lève tous les doutes des directeurs financiers et déclenche les investissements.",
            "a_retenir": "Le négociateur qui rend la transition écologique immédiatement rentable pour les entreprises."
        }
    },

    # -----------------------------------------------------------------------
    # 25. RESPONSABLE HSE & SÉCURITÉ INDUSTRIELLE SUR SITES ÉNERGÉTIQUES
    # -----------------------------------------------------------------------
    {
        "id": "responsable-hse-sites-energetiques",
        "slug": "responsable-hse-sites-energetiques",
        "title": "Responsable HSE & Sécurité Industrielle sur Sites Énergétiques",
        "aliases": ["Ingénieur Hygiène Sécurité Environnement énergie", "Responsable prévention des risques industriels", "Coordonnateur SPS énergie"],
        "icon": "🦺",
        "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Hygiène, Sécurité, Environnement & Risques Énergétiques",
        "domainId": "hse-securite-risques-energie",
        "subdomain": "Prévention des risques électriques, chimiques & industriels",
        "energyTechnology": ["Consignation électrique (NF C 18-510)", "Réglementation ATEX (Atmosphères Explosives)", "Systèmes de management intégré ISO 14001 / ISO 45001"],
        "energySector": "Prévention des Risques & Conformité Environnementale",
        "sourceEnergierecrute": True,
        "isEmerging": False,
        "level": "Bac +3 (Licence Pro HSE) à Bac +5 (Master HSE ou Diplôme d'Ingénieur Sécurité Industrielle)",
        "salary": "🇫🇷 France : 2 800 - 4 600 € net/mois (~38 000 - 68 000 € brut/an, Source : Energierecrute / APEC) • 🇸🇳 Sénégal : 450 000 - 1 400 000 FCFA / mois (Plateformes pétrogazières, centrales Senelec, mines)",
        "simpleDefinition": "Le responsable HSE sur sites énergétiques identifie, évalue et prévient l'ensemble des risques d'accidents (électrocution, incendie, explosion ATEX, chutes de hauteur) et les impacts écologiques sur les parcs et centrales de production.",
        "shortDescription": "Sentinelle indispensable de la vie humaine et de l'environnement documentée sur Energierecrute, ce spécialiste impose une culture sécurité exemplaire sur les chantiers et sites d'exploitation énergétique.",
        "longDescription": "Comme rappelé dans la section 'QHSE / Sécurité' d'Energierecrute, le secteur de l'énergie concentre des risques industriels majeurs : hautes tensions mortelles, travail à 120 mètres de hauteur sur les éoliennes, fluides sous haute pression, gaz inflammables (méthanisation, hydrogène) et matières radioactives. Le responsable Hygiène, Sécurité et Environnement (HSE) définit et fait appliquer les politiques de sécurité (ISO 45001) et environnementales (ISO 14001). Il audite les chantiers, anime les causeries sécurité matinales, analyse les causes racines du moindre quasi-accident, organise les exercices d'évacuation d'urgence et s'assure de la conformité réglementaire absolue des installations.",
        "mainObjective": "Viser le 'zéro accident' mortel ou avec arrêt et garantir l'absence totale de pollution industrielle sur les sols, l'eau et l'air.",
        "companyRole": "Garant légal, éthique et opérationnel de la santé des travailleurs et de l'intégrité de l'environnement.",
        "workEnvironment": [
            "⚡ Centrales de production électrique (nucléaires, thermiques, hydrauliques, parcs éoliens)",
            "🦺 Visites et audits fréquents de chantiers de construction et d'intervention haute tension",
            "🏢 Bureau de coordination avec les instances représentatives (CSSCT) et l'inspection du travail"
        ],
        "missions": [
            "Élaborer et actualiser le Document Unique d'Évaluation des Risques Professionnels (DUERP)",
            "Définir les plans de prévention et délivrer les permis de travail spécifiques (permis feu, permis de pénétrer en espace confiné)",
            "Animer les accueils sécurité des nouveaux arrivants et des sous-traitants et piloter les quarts d'heure sécurité",
            "Mener des enquêtes méthodologiques après tout incident ou presqu'accident (méthode de l'arbre des causes)",
            "Superviser la gestion des déchets dangereux (huiles de transformateurs aux PCB, solvants, batteries en fin de vie)"
        ],
        "typicalDay": [
            {"time": "07:30", "title": "Accueil sécurité des sous-traitants", "desc": "Contrôle des habilitations électriques, du port des EPI et briefing sur les risques spécifiques du poste haute tension avant démarrage du chantier."},
            {"time": "09:30", "title": "Visite de sécurité sur le parc éolien", "desc": "Audit inopiné sur une éolienne en maintenance : vérification de l'ancrage des lignes de vie, du kit de descente d'urgence et de l'absence de fuite d'huile dans la nacelle."},
            {"time": "13:30", "title": "Analyse d'un quasi-incident", "desc": "Animation d'une réunion avec l'équipe de méthanisation suite à un déclenchement inattendu d'un détecteur de gaz H2S sans conséquence corporelle."},
            {"time": "16:00", "title": "Mise à jour du plan d'urgence incendie", "desc": "Coordination avec les sapeurs-pompiers locaux pour planifier un exercice conjoint d'extinction d'un transformateur à huile."}
        ],
        "skills": {
            "technical": [
                "Réglementation de la sécurité au travail et Code de l'environnement (ICPE)",
                "Risques électriques (norme NF C 18-510, consignation électrique)",
                "Réglementation des atmosphères explosives (Directives ATEX 1999/92/CE et 2014/34/UE)",
                "Normes internationales de management ISO 45001 (santé/sécurité) et ISO 14001 (environnement)"
            ],
            "human": [
                "Autorité naturelle et intransigeance bienveillante sur le respect des règles de sécurité",
                "Sens aigu de la pédagogie et capacité à faire adhérer sans braquer",
                "Sang-froid et méthode d'organisation lors des situations d'urgence"
            ],
            "tools": [
                "Détecteurs multigaz portables (O2, CO, H2S, LIE pour gaz explosifs)",
                "Sonomètres et dosimètres de bruit pour analyse des ambiances sonores",
                "Logiciels de gestion QHSE et de suivi des plans d'actions (Enablon, Cority, Tenor)",
                "Méthodes d'analyse de risques (AMDEC, HAZOP, Arbre des causes)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "BUT / Licence Pro (Bac +3)", "title": "BUT Hygiène Sécurité Environnement (HSE)", "desc": "Formation complète sur les risques professionnels, l'ergonomie et le droit environnemental."},
                {"step": "Master / Ingénieur HSE (Bac +5)", "title": "Master Gestion des Risques Industriels ou Ingénieur Sécurité", "desc": "Spécialisation dans les sites Seveso, la modélisation d'explosions et le management QHSE."},
                {"step": "Certifications Internationales", "title": "Certifications NEBOSH IGC et Auditeur Lead ISO 45001", "desc": "Les standards mondiaux indispensables pour exercer sur les grands chantiers internationaux."}
            ],
            "schools": [
                {"name": "IUT préparant le BUT HSE (Bordeaux, Lorient, Saint-Denis) — France", "country": "France", "scope": "France"},
                {"name": "Écoles d'ingénieurs en sécurité industrielle (INSA, CESI, Polytech Grenoble) — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) / Licence Pro QSE — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "BEM Dakar / Institut Africain de Management (IAM Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["NEBOSH International General Certificate (IGC)", "Auditeur Certifié ISO 45001 / ISO 14001", "Habilitation Sauveteur Secouriste du Travail (SST)"],
            "schoolSubjects": ["Droit du travail & HSE", "Toxicologie industrielle", "Électricité et ATEX", "Management des situations d'urgence"]
        },
        "career": {
            "sectors": ["Producteurs et exploitants d'énergie (EDF, ENGIE, TotalEnergies, Senelec)", "Chantiers de construction de parcs éoliens et solaires", "Infrastructures pétrogazières et chimiques", "Bureaux de contrôle et d'audit (Bureau Veritas, Dekra, Apave)"],
            "employerTypes": ["Énergéticiens majeurs", "Grands constructeurs industriels", "Organismes d'inspection technique"],
            "evolution": "Animateur HSE de chantier ➔ Responsable HSE de site de production ➔ Responsable QHSE régional ➔ Directeur Sécurité & Environnement groupe",
            "pros": "Métier qui sauve littéralement des vies, autorité d'arrêt de travail reconnue, mission éthique protectrice de premier plan.",
            "cons": "Devoir gérer des conflits lorsque la sécurité ralentit la production, charge mentale élevée en cas d'accident."
        },
        "gettingStarted": {
            "beginnerProject": "Observer les pictogrammes de sécurité et les extincteurs dans son établissement de formation.",
            "intermediateProject": "Rédiger une analyse de risques d'un travail en hauteur sur toiture avec harnais et ligne de vie.",
            "advancedProject": "Construire un arbre des causes complet pour un accident fictif de contact avec une ligne électrique.",
            "portfolioIdeas": ["Exemple de quart d'heure sécurité interactif", "Grille d'audit terrain de conformité des EPI"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "La vision par ordinateur analyse en continu les flux de caméras pour repérer le non-port du casque ou l'intrusion d'une personne dans une zone électrique dangereuse.",
            "automatedTasks": ["Détection automatique de franchissement de périmètre de sécurité", "Analyse prédictive des déclarations de presqu'accidents"],
            "emergingSkills": ["Supervision des systèmes de Computer Vision dédiés à la sécurité chantier"],
            "humanEdge": "La pédagogie humaine, la bienveillance et l'écoute nécessaires pour convaincre un ouvrier de ne pas contourner une règle de sécurité."
        },
        "africaContext": {
            "senegalInsight": "Avec l'essor des grands projets énergétiques au Sénégal (centrales solaires de Bokhol et Malicounda, parc éolien de Taïba N'Diaye, centrales thermiques, plateforme pétrolière Sangomar et gazière GTA), la demande d'ingénieurs et de coordinateurs HSE certifiés NEBOSH est explosive pour garantir des standards de sécurité de niveau international.",
            "localSectors": ["Grands chantiers énergétiques (Eiffage Énergie, SPIE Sénégal)", "Senelec (Direction Prévention et Sécurité)", "Pétrosen et consortiums pétrogaziers offshore (Sangomar, GTA)"],
            "remoteWork": "Hybride (présence sur le terrain pour les audits et télétravail pour les procédures et déclarations).",
            "entrepreneurship": "Création d'un cabinet de conseil en formation sécurité industrielle et délivrance de formations certifiantes (NEBOSH, IOSH) pour l'Afrique de l'Ouest."
        },
        "relatedJobSlugs": ["responsable-unite-biogaz-methanisation", "technicien-maintenance-eolienne", "technicien-radioprotection-surete-nucleaire"],
        "connectedFamilies": ["droit-management", "industrie-mecanique"],
        "resources": [
            {"type": "guide", "title": "Métiers QHSE et sécurité dans l'énergie — Energierecrute", "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php", "source": "Energierecrute"},
            {"type": "portail", "title": "INRS — Institut National de Recherche et de Sécurité", "url": "https://www.inrs.fr/", "source": "INRS"}
        ],
        "sources": ["Energierecrute", "INRS", "NEBOSH", "Senelec"],
        "interests": ["securite-defense", "contact-humain", "nature-environnement"],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Sur un site de production énergétique, la règle d'or universelle 'Stop Work Authority' autorise et oblige n'importe quel salarié, qu'il soit stagiaire ou sous-traitant, à interrompre immédiatement un travail s'il estime qu'une vie humaine est en danger.",
            "pourquoi": "Parce qu'aucune cadence de production ne vaut la vie d'un être humain.",
            "a_retenir": "La sentinelle du site qui veille à ce que chacun rentre chez soi en bonne santé chaque soir."
        }
    },

    # -----------------------------------------------------------------------
    # 26. INGÉNIEUR GÉOLOGUE D'EXPLORATION & RESSOURCES ÉNERGÉTIQUES
    # -----------------------------------------------------------------------
    {
        "id": "ingenieur-geologue-exploration-energetique",
        "slug": "ingenieur-geologue-exploration-energetique",
        "title": "Ingénieur Géologue d'Exploration & Ressources Énergétiques",
        "aliases": ["Géologue de réservoir géothermie et sous-sol", "Géophysicien d'exploration", "Ingénieur modélisation géologique du sous-sol"],
        "icon": "🌍",
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Exploration & Ressources Géologiques du Sous-Sol",
        "domainId": "exploration-ressources-sous-sol",
        "subdomain": "Modélisation géologique & Caractérisation de réservoirs",
        "energyTechnology": ["Sismique réflexion 2D/3D", "Modélisation de réservoirs profonds", "Stockage géologique de CO2 (CCUS) & Hydrogène naturel"],
        "energySector": "Caractérisation du Sous-Sol & Nouvelles Ressources",
        "sourceEnergierecrute": True,
        "isEmerging": False,
        "level": "Bac +5 (Diplôme d'Ingénieur géologue / géophysicien ou Master Géosciences)",
        "salary": "🇫🇷 France : 3 300 - 5 600 € net/mois (~46 000 - 80 000 € brut/an, Source : Energierecrute / APEC) • 🇸🇳 Sénégal : 700 000 - 2 200 000 FCFA / mois (Compagnies d'exploration, Petrosen, mines, géothermie)",
        "simpleDefinition": "L'ingénieur géologue d'exploration cartographie et sonde les couches géologiques profondes pour localiser les gisements de géothermie haute énergie, les aquifères thermiques, les cavités de stockage d'énergie et les ressources du sous-sol.",
        "shortDescription": "Spécialiste des profondeurs terrestres répertorié par Energierecrute, ce scientifique applique les géosciences de pointe pour trouver de la chaleur souterraine, stocker du CO2 ou déceler des réserves d'hydrogène naturel blanc.",
        "longDescription": "Comme l'illustrent les filières universitaires et d'écoles d'ingénieurs partenaires d'Energierecrute (École Nationale Supérieure de Géologie de Nancy - ENSG, IFP School, UniLaSalle, BRGM), le géologue d'exploration a vu son métier profondément renouvelé par la transition écologique. S'appuyant sur l'imagerie sismique par ondes, les diagraphies de forage et l'analyse pétrophysique d'échantillons de roches (carottes), il modélise en 3D les réservoirs du sous-sol. Ses compétences historiques sont aujourd'hui au cœur des projets de géothermie profonde pour chauffer des métropoles entières, du captage et stockage géologique de CO2 (CCUS) pour décarboner l'industrie lourde, et de l'exploration de l'hydrogène naturel natif piégé dans les roches anciennes.",
        "mainObjective": "Caractériser avec une précision mathématique la structure du sous-sol pour exploiter de manière durable la chaleur géothermique et sécuriser le stockage souterrain d'énergie.",
        "companyRole": "Explorateur scientifique et garant de la compréhension géologique des réservoirs profonds.",
        "workEnvironment": [
            "💻 Stations graphiques haute performance pour l'interprétation sismique et la modélisation 3D",
            "🔬 Laboratoires d'analyse pétrographique, de porosité et de perméabilité des roches",
            "🥾 Missions de terrain sur appareils de forage et campagnes d'acquisition géophysique"
        ],
        "missions": [
            "Traiter et interpréter les données géophysiques sismiques 2D et 3D pour cartographier les failles et réservoirs",
            "Analyser les carottes de forage et les diagraphies de puits (porosité, perméabilité, teneur en minéraux)",
            "Construire des modèles géologiques statiques et dynamiques 3D sous simulateurs spécialisés",
            "Évaluer les risques géologiques (risques sismiques induits lors des forages profonds, étanchéité de la couverture)",
            "Collaborer avec les ingénieurs de forage pour définir la trajectoire optimale des puits de production et de réinjection"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Interprétation de profils sismiques", "desc": "Repérage des horizons géologiques et pointage d'une faille majeure pouvant alimenter un aquifère géothermique à 2 400 mètres de profondeur."},
            {"time": "11:00", "title": "Examen de carottes de forage", "desc": "Observation sous loupe binoculaire et microscope électronique de lames minces de grès pour évaluer la perméabilité à l'eau chaude."},
            {"time": "14:15", "title": "Mise à jour du modèle géologique 3D", "desc": "Intégration des nouvelles données de pression et de température issues d'un forage pilote dans le logiciel de simulation de réservoir."},
            {"time": "16:45", "title": "Note d'aléa de sismicité induite", "desc": "Rédaction d'une note technique sur les pressions de fracturation hydraulique à ne pas dépasser pour garantir l'absence de microséisme en surface."}
        ],
        "skills": {
            "technical": [
                "Géologie structurale, sédimentologie, stratigraphie séquentielle et pétrophysique",
                "Géophysique d'imagerie (sismique réflexion, gravimétrie, magnétométrie, diagraphies)",
                "Modélisation géologique 3D et simulation thermodynamique d'écoulements souterrains",
                "Mécanique des roches et gestion des risques de sismicité induite"
            ],
            "human": [
                "Capacité de visualisation spatiale 3D et raisonnement probabiliste sous forte incertitude",
                "Rigueur scientifique et curiosité face aux phénomènes naturels terrestres",
                "Esprit de synthèse pour croiser données de surface, forages et mesures physiques"
            ],
            "tools": [
                "Logiciels d'interprétation sismique et de modélisation de réservoirs (Petrel, Kingdom, Petromod)",
                "Simulateurs d'écoulement thermique et hydrogéologique (TOUGH2, Eclipse, FEFLOW)",
                "Systèmes d'Information Géographique (QGIS, ArcGIS)",
                "Microscopes pétrographiques polarisants et diffractomètres à rayons X"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Licence en Géosciences / CPGE (Bac +3)", "title": "Licence Sciences de la Terre ou CPGE BCPST", "desc": "Bases solides en géologie de terrain, cartographie, minéralogie et physique du globe."},
                {"step": "Diplôme d'Ingénieur Géologue (Bac +5)", "title": "Ingénieur Géologue (ENSG, UniLaSalle) ou Master Géosciences", "desc": "Spécialisation en géophysique de réservoir, pétrophysique et modélisation 3D du sous-sol."},
                {"step": "Spécialisation Énergie (Bac +6)", "title": "Diplôme de l'IFP School (Génie des Réservoirs et Géosciences)", "desc": "L'excellence internationale pour l'ingénierie des réservoirs géothermiques et du stockage de carbone."}
            ],
            "schools": [
                {"name": "École Nationale Supérieure de Géologie (ENSG Nancy) — France", "country": "France", "scope": "France"},
                {"name": "UniLaSalle (Beauvais) / IFP School (Rueil-Malmaison) — France", "country": "France", "scope": "France"},
                {"name": "Institut des Sciences de la Terre (IST - UCAD Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Institut National du Pétrole et du Gaz (INPG Dakar) / EPT Thiès — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification Petrel Reservoir Modeling", "Certification Interprétation Sismique Avancée", "Habilitation sécurité forage Wellsite"],
            "schoolSubjects": ["Pétrophysique", "Sismique réflexion", "Hydrodynamique souterraine", "Géochimie isotopique"]
        },
        "career": {
            "sectors": ["Opérateurs de géothermie profonde et de réseaux de chaleur", "Compagnies d'exploration et de stockage souterrain (Storengy, TotalEnergies, Petrosen)", "Instituts géologiques nationaux (BRGM, USGS)", "Bureaux d'études en géotechnique et géophysique"],
            "employerTypes": ["Énergéticiens géothermiques", "Instituts géologiques de recherche", "Sociétés d'ingénierie du sous-sol"],
            "evolution": "Géologue de puits junior ➔ Géologue de réservoir ➔ Chef de projet exploration sous-sol ➔ Directeur des géosciences",
            "pros": "Fascinante exploration des entrailles de la Terre, voyages et missions de terrain, contribution clé à la géothermie propre.",
            "cons": "Déplacements fréquents sur les appareils de forage, part d'incertitude inhérente aux profondeurs terrestres."
        },
        "gettingStarted": {
            "beginnerProject": "Observer une carte géologique de sa région sur l'application InfoTerre du BRGM.",
            "intermediateProject": "Interpréter une ligne sismique 2D simple pour repérer un anticlinal et une faille normale.",
            "advancedProject": "Calculer le volume de chaleur stocké dans un aquifère géothermique de 10 km² d'une épaisseur de 50 m à 75°C.",
            "portfolioIdeas": ["Modèle structural 3D réalisé sous logiciel libre", "Rapport de géologie de terrain avec analyse de carotte"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "Le deep learning accélère le pointage des horizons sismiques et la détection automatique des réseaux de failles dans les cubes 3D.",
            "automatedTasks": ["Pointage automatique des réflecteurs sismiques", "Génération stochastique de modèles de porosité par IA"],
            "emergingSkills": ["Utilisation de modèles de Machine Learning pour la prédiction de perméabilité de réservoir"],
            "humanEdge": "La compréhension de l'histoire géologique sur des millions d'années et l'intégration des réalités tectoniques régionales."
        },
        "africaContext": {
            "senegalInsight": "Le Sénégal forme d'excellents géologues à l'Institut des Sciences de la Terre (IST de Dakar) et à l'INPG, dont l'expertise a été essentielle pour la découverte et la cartographie des gisements sous-marins de Sangomar et Grand Tortue Ahmeyim, et qui s'oriente désormais également vers le potentiel d'hydrogène naturel découvert dans le bassin sédimentaire ouest-africain (notamment au Mali voisin à Bourakébougou).",
            "localSectors": ["Institut des Sciences de la Terre (IST - UCAD Dakar)", "Petrosen (Société des Pétroles du Sénégal)", "Institut National du Pétrole et du Gaz (INPG)", "Projets d'exploration d'hydrogène naturel dans le bassin sénégalo-mauritanien"],
            "remoteWork": "Hybride (travail sur stations graphiques et missions de terrain ponctuelles).",
            "entrepreneurship": "Création d'un cabinet de conseil en géosciences et hydrogéologie thermique pour la sous-région."
        },
        "relatedJobSlugs": ["ingenieur-geothermie-energetique", "ingenieur-rd-energie", "responsable-hse-sites-energetiques"],
        "connectedFamilies": ["mines-geosciences", "sciences-biotech"],
        "resources": [
            {"type": "guide", "title": "Géosciences et exploration énergétique — Energierecrute", "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php", "source": "Energierecrute"},
            {"type": "portail", "title": "BRGM — Service géologique national", "url": "https://www.brgm.fr/", "source": "BRGM"}
        ],
        "sources": ["Energierecrute", "BRGM", "ENSG", "IST Dakar"],
        "interests": ["nature-environnement", "explorer-decouvrir", "donnees-chiffres"],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "La toute première exploitation commerciale au monde d'hydrogène naturel 'blanc' (pur à 98% jaillissant directement des entrailles terrestres) a été découverte par des géologues au village de Bourakébougou au Mali !",
            "pourquoi": "Cet hydrogène se régénère en continu dans le sous-sol par réaction entre l'eau et les roches riches en fer, sans nécessiter la moindre énergie pour être fabriqué.",
            "a_retenir": "L'explorateur scientifique qui révèle les richesses thermiques et énergétiques cachées sous nos pieds."
        }
    }
]

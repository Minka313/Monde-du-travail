# execution/energy_jobs_part1.py
# Fiches Métiers Dérivées du Référentiel Officiel Energierecrute (Portail Emploi & Formation Énergie)
# Fiches Métiers 1 à 13 : R&D, Ingénierie thermique, Solaire, Éolien, Hydroélectricité, Géothermie, Biogaz

ENERGY_JOBS_PART1 = [
    # -----------------------------------------------------------------------
    # 1. INGÉNIEUR R&D EN TECHNOLOGIES ÉNERGÉTIQUES
    # -----------------------------------------------------------------------
    {
        "id": "ingenieur-rd-energie",
        "slug": "ingenieur-rd-energie",
        "title": "Ingénieur R&D en Technologies Énergétiques",
        "aliases": ["Chercheur en génie énergétique", "Ingénieur innovation bas-carbone", "Ingénieur modélisation thermodynamique"],
        "icon": "🔬",
        "image": "https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Recherche, Développement & Ingénierie de Projet",
        "domainId": "recherche-ingenierie-etudes",
        "subdomain": "R&D énergétique",
        "energyTechnology": ["Stockage d'énergie", "Hydrogène", "Conversion thermodynamique", "Batteries"],
        "energySector": "Recherche & Industrie Énergétique",
        "sourceEnergierecrute": True,
        "isEmerging": True,
        "level": "Bac +5 (Ingénieur ou Master) à Bac +8 (Doctorat en Énergétique)",
        "salary": "🇫🇷 France : 3 200 - 5 400 € net/mois (~45 000 - 78 000 € brut/an, Source : Energierecrute / APEC) • 🇸🇳 Sénégal : 600 000 - 2 000 000 FCFA / mois (Centres de recherche, CEA, startups cleantech)",
        "simpleDefinition": "L'ingénieur R&D en énergie conçoit, modélise et teste les technologies de demain : nouveaux systèmes de stockage par batterie, vecteurs hydrogène vert, matériaux photovoltaïques à haut rendement et procédés de captage de chaleur fatale.",
        "shortDescription": "Profil scientifique de pointe répertorié par Energierecrute, ce chercheur conçoit les briques technologiques qui accélèrent la transition vers un mix 100% décarboné.",
        "longDescription": "Comme documenté dans les classifications R&D d'Energierecrute, l'ingénieur de recherche et développement en énergie imagine et valide les solutions de rupture énergétique. Travaillant à l'interface entre la physique des matériaux, la thermodynamique, la chimie des batteries et la mécanique des fluides, il modélise numériquement les cycles thermiques, réalise des prototypes à l'échelle laboratoire et supervise les bancs d'essais pilotes. Il collabore étroitement avec les universités, dépose des brevets industriels et analyse la faisabilité technico-économique des technologies propres avant leur passage à l'échelle industrielle.",
        "mainObjective": "Développer et breveter des technologies énergétiques innovantes à haut rendement pour maximiser la production décarbonée et réduire l'empreinte environnementale.",
        "companyRole": "Pionnier scientifique et moteur de l'innovation technologique de l'entreprise.",
        "workEnvironment": [
            "🔬 Laboratoires de recherche industrielle et centres de R&D privés (EDF R&D, CEA, TotalEnergies OneTech)",
            "💻 Stations de calcul intensif et logiciels de simulation multi-physique",
            "🛠️ Halls d'essais pilotes pour le test de prototypes et de bancs de puissance"
        ],
        "missions": [
            "Concevoir des modèles mathématiques et numériques simulant les transferts thermiques et électrochimiques",
            "Piloter des campagnes d'essais expérimentaux sur bancs de test en laboratoire et analyser les séries de données",
            "Développer de nouveaux procédés de stockage d'électricité (batteries solides, hydrogène, volants d'inertie)",
            "Rédiger des demandes de brevets de propriété industrielle et des publications scientifiques internationales",
            "Assurer une veille technologique mondiale continue sur les ruptures scientifiques du secteur de l'énergie"
        ],
        "typicalDay": [
            {"time": "08:45", "title": "Revue des simulations nocturnes", "desc": "Analyse des calculs de dynamique des fluides (CFD) sur l'échangeur thermique d'une turbine haute température."},
            {"time": "11:00", "title": "Banc d'essai en laboratoire", "desc": "Supervision des mesures d'impédance électrochimique sur un nouveau prototype de cellule de batterie lithium-fer-phosphate."},
            {"time": "14:30", "title": "Point d'étape consortium de recherche", "desc": "Visioconférence avec un laboratoire universitaire partenaire sur l'électrolyse de l'eau à haute température."},
            {"time": "16:45", "title": "Rédaction d'une note de brevet", "desc": "Formalisation des revendications techniques sur un nouvel algorithme de gestion thermique de pack batterie."}
        ],
        "skills": {
            "technical": [
                "Thermodynamique avancée, mécanique des fluides et transferts thermiques",
                "Modélisation numérique multi-physique (ANSYS Fluent, COMSOL Multiphysics, MATLAB/Simulink)",
                "Électrochimie, technologies des accumulateurs et systèmes hydrogène",
                "Méthodologie expérimentale, métrologie et instrumentation de précision"
            ],
            "human": [
                "Curiosité intellectuelle insatiable et capacité d'innovation conceptuelle",
                "Rigueur scientifique absolue et esprit d'analyse critique",
                "Sens du travail en équipe pluridisciplinaire (chimistes, thermiciens, data scientists)",
                "Aisance rédactionnelle pour les dossiers de brevets et de subventions publiques"
            ],
            "tools": [
                "COMSOL Multiphysics, ANSYS Fluent",
                "MATLAB / Simulink, Python scientifique (NumPy, SciPy)",
                "Bancs d'essais instrumentés (thermocouples, débitmètres massiques, spectromètres)",
                "Outils de CAO 3D (SolidWorks, CATIA)"
            ],
            "analytical": [
                "Optimisation thermodynamique des cycles de Carnot et rendements exergétiques",
                "Analyse technico-économique du coût nivelé de l'énergie (LCOE) des technologies émergentes"
            ]
        },
        "specializations": ["R&D stockage électrochimique et batteries de nouvelle génération", "Technologies de l'hydrogène vert et piles à combustible", "Récupération de chaleur fatale et échangeurs thermodynamiques innovants"],
        "studies": {
            "pathway": [
                {"step": "Diplôme d'ingénieur (Bac +5)", "title": "Diplôme d'Ingénieur en Génie Énergétique ou Électromécanique", "desc": "Formation d'excellence en thermodynamique, mécanique des fluides et sciences des matériaux."},
                {"step": "Master Recherche", "title": "Master Recherche Énergétique & Procédés Décarbonés", "desc": "Spécialisation dans les méthodes de modélisation avancée et de recherche en laboratoire."},
                {"step": "Doctorat (Bac +8)", "title": "Doctorat (PhD) en Sciences pour l'Ingénieur / Énergétique", "desc": "Thèse CIFRE en partenariat avec un groupe énergétique, tremplin direct pour les postes de chercheur senior."}
            ],
            "schools": [
                {"name": "Grenoble INP — Ense3 (Énergie, Eau, Environnement) — France", "country": "France", "scope": "France"},
                {"name": "CentraleSupélec / Mines Paris-PSL — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) / Génie Électromécanique — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Polytechnique de Thiès (EPT) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification en Modélisation Numérique Avancée", "Agrément de sécurité laboratoire haute tension / haute pression"],
            "schoolSubjects": ["Thermodynamique", "Mécanique des fluides", "Électrochimie", "Mathématiques appliquées"]
        },
        "career": {
            "sectors": ["Grands groupes énergétiques mondiaux (EDF, ENGIE, TotalEnergies, Schneider Electric)", "Organismes publics de recherche (CEA, CNRS, IFP Énergies Nouvelles)", "Startups industrielles de la deeptech et constructeurs de batteries"],
            "employerTypes": ["Centres de recherche appliquée", "Grands énergéticiens", "Startups industrielles innovantes"],
            "evolution": "Ingénieur R&D junior ➔ Chef de projet innovation ➔ Responsable de pôle R&D ➔ Directeur scientifique groupe",
            "pros": "Stimulation intellectuelle permanente, contribution directe aux technologies du futur décarboné, environnement scientifique international.",
            "cons": "Cycles de recherche longs avant commercialisation, incertitude sur l'aboutissement de certains projets d'essais."
        },
        "gettingStarted": {
            "beginnerProject": "Créer un script Python simple modélisant le rendement théorique d'un panneau solaire selon la température ambiante.",
            "intermediateProject": "Simuler sous OpenModelica le comportement thermodynamique d'une pompe à chaleur avec différents fluides frigorigènes.",
            "advancedProject": "Rédiger un dossier de synthèse de 5 pages sur les technologies d'électrolyse PEM vs Alcaline pour la production d'hydrogène vert.",
            "portfolioIdeas": ["Code de modélisation thermique open source sur GitHub", "Rapport d'analyse comparative de systèmes de stockage d'énergie"]
        },
        "aiImpact": {
            "level": "Révolutionnaire",
            "summary": "L'IA générative et l'apprentissage automatique accélèrent la découverte de nouveaux matériaux semi-conducteurs et optimisent instantanément les topologies d'échangeurs thermiques.",
            "automatedTasks": ["Dépouillement automatisé des gigaoctets de données de bancs d'essais", "Screening moléculaire par IA pour de nouvelles chimies de batteries"],
            "emergingSkills": ["Utilisation de modèles d'IA prédictive pour la modélisation multi-échelle des matériaux"],
            "humanEdge": "L'intuition scientifique des ruptures physiques, l'esprit critique devant les résultats expérimentaux inattendus et la vision stratégique d'application industrielle."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, des laboratoires comme le Centre d'Études et de Recherches sur les Énergies Renouvelables (CERER) de l'UCAD et l'ESP Dakar développent des projets R&D pour concevoir des panneaux photovoltaïques résistants aux poussières sahariennes et adapter les batteries de stockage aux températures extrêmes (> 45°C).",
            "localSectors": ["CERER (Université Cheikh Anta Diop de Dakar)", "Laboratoires de recherche de l'ESP et de l'UGB Saint-Louis", "Projets d'hydrogène vert de la zone industrielle de Kayar"],
            "remoteWork": "Hybride (présence requise pour manipulations sur bancs d'essais / télétravail pour modélisation et rédaction).",
            "entrepreneurship": "Création d'un laboratoire privé de métrologie et d'optimisation des performances des équipements solaires pour l'Afrique de l'Ouest."
        },
        "relatedJobSlugs": ["chef-projet-energie-solaire-photovoltaique", "ingenieur-smart-grids-reseaux-intelligents", "energy-manager-auditeur-energetique", "charge-affaires-energetique-cvc"],
        "connectedFamilies": ["sciences-biotech", "industrie-mecanique", "numerique-ia"],
        "resources": [
            {"type": "article", "title": "Métiers de l'énergie et R&D — Energierecrute", "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php", "source": "Energierecrute"},
            {"type": "portail", "title": "CEA Liten — Laboratoire d'innovation pour les énergies nouvelles", "url": "https://www.liten.cea.fr/", "source": "CEA"}
        ],
        "sources": ["Energierecrute", "CEA", "ADEME"],
        "interests": ["explorer-decouvrir", "nature-environnement", "donnees-chiffres"],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Les ingénieurs R&D en énergie testent désormais des cellules photovoltaïques à base de pérovskites capables de dépasser 33% de rendement de conversion, pulvérisant la limite historique du silicium classique.",
            "pourquoi": "Chaque pourcentage de rendement supplémentaire permet de produire des térawattheures d'électricité propre supplémentaires sans occuper un mètre carré de terrain en plus.",
            "a_retenir": "L'inventeur des technologies de rupture qui décarbonent la planète."
        }
    },

    # -----------------------------------------------------------------------
    # 2. TECHNICIEN EN ÉTUDES THERMIQUES DU BÂTIMENT & CLIMATISATION
    # -----------------------------------------------------------------------
    {
        "id": "technicien-etudes-thermiques-batiment",
        "slug": "technicien-etudes-thermiques-batiment",
        "title": "Technicien en Études Thermiques du Bâtiment & Climatisation",
        "aliases": ["Technicienne bureau d'études thermiques", "Dessinateur projeteur CVC", "Chargé d'études thermiques RT/RE2020"],
        "icon": "📐",
        "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Recherche, Développement & Ingénierie de Projet",
        "domainId": "recherche-ingenierie-etudes",
        "subdomain": "Bureaux d'études thermiques",
        "energyTechnology": ["Thermique du bâtiment", "Pompes à chaleur", "Ventilation double flux", "RE2020"],
        "energySector": "Ingénierie & Bâtiment",
        "sourceEnergierecrute": True,
        "isEmerging": False,
        "level": "BTS FED (Fluides Énergies Domotique) ou Licence Pro MEER (Maîtrise de l'Énergie et Énergies Renouvelables)",
        "salary": "🇫🇷 France : 2 000 - 3 200 € net/mois (~28 000 - 45 000 € brut/an, Source : Energierecrute / Bâtiment) • 🇸🇳 Sénégal : 300 000 - 1 000 000 FCFA / mois (Bureaux d'études BTP et fluides à Dakar)",
        "simpleDefinition": "Le technicien en études thermiques calcule les déperditions de chaleur et les apports solaires d'un bâtiment, dimensionne les installations de chauffage, de climatisation et de ventilation, et s'assure de la conformité aux normes environnementales.",
        "shortDescription": "Métier clé issu des formations référencées par Energierecrute (notamment la Licence MEER), cet expert optimise l'enveloppe thermique et les équipements des bâtiments.",
        "longDescription": "Conformément aux débouchés professionnels documentés par Energierecrute pour les cursus en efficacité énergétique (Licence Pro MEER et BTS FED), le technicien en études thermiques intervient dès la conception architecturale des ouvrages (immeubles de bureaux, hôpitaux, logements collectifs). Il modélise les bâtiments en 3D (BIM), effectue des calculs réglementaires de consommation d'énergie primaire (RE2020), dimensionne les réseaux de tuyauteries et gaines aérauliques, et préconise l'installation de pompes à chaleur, de chaudières biomasse ou de panneaux solaires thermiques.",
        "mainObjective": "Dimensionner avec exactitude les installations thermiques et aérauliques d'un édifice pour concilier confort thermique des occupants et sobriété énergétique maximale.",
        "companyRole": "Garant du dimensionnement technique et de la conformité réglementaire énergétique des bâtiments.",
        "workEnvironment": [
            "🏢 Bureaux d'études techniques fluides et ingénieries du bâtiment",
            "💻 Travail continu sur logiciels de simulation thermique dynamique (STD) et CAO/BIM",
            "🏗️ Visites ponctuelles sur chantiers pour contrôler l'implantation des réseaux de fluides"
        ],
        "missions": [
            "Modéliser l'enveloppe des bâtiments et saisir les caractéristiques thermiques des isolants et vitrages",
            "Calculer les déperditions d'énergie en hiver et les charges frigorifiques en été selon les logiciels certifiés",
            "Dimensionner les équipements thermiques (puissance des PAC, débits d'air des CTA, radiateurs, ventilo-convecteurs)",
            "Dessiner les schémas de principe hydrauliques et les plans de réseaux aérauliques sous AutoCAD/Revit",
            "Rédiger les notices thermiques et les dossiers de consultation des entreprises (CCTP fluides)"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Calculs réglementaires RE2020", "desc": "Saisie des parois d'un projet d'écoquartier de 40 logements sous logiciel de calcul certifié (Pleiades/Perrenoud)."},
            {"time": "11:00", "title": "Dimensionnement de centrale de traitement d'air", "desc": "Calcul des débits hygiéniques et sélection d'un récupérateur de chaleur à roue rotative d'un rendement de 82%."},
            {"time": "14:30", "title": "Tracé de réseaux sous Revit BIM", "desc": "Intégration en maquette numérique 3D des réseaux de gaines de ventilation pour éviter les clashs avec la structure béton."},
            {"time": "16:45", "title": "Réunion de coordination avec l'architecte", "desc": "Proposition d'intégration de brise-soleil orientables pour réduire de 4 kW les besoins de climatisation en toiture."}
        ],
        "skills": {
            "technical": [
                "Thermique du bâtiment, thermodynamique et mécanique des fluides appliquées",
                "Réglementations thermiques et environnementales (RE2020, Label Effinergie, HQE)",
                "Dessin technique assisté par ordinateur (AutoCAD, Revit MEP) et maquette numérique BIM",
                "Logiciels spécialisés de calcul thermique (Pleiades, ClimaWin, Perrenoud, DesignBuilder)"
            ],
            "human": [
                "Grande rigueur de calcul et minutie dans la saisie des métrés",
                "Capacité à dialoguer avec les architectes et corps d'état du gros œuvre",
                "Sens aigu de l'organisation pour respecter les plannings d'appels d'offres",
                "Force de proposition pour promouvoir les énergies renouvelables"
            ],
            "tools": [
                "Revit MEP, AutoCAD",
                "Pleiades + Comfie, Perrenoud, ClimaWin",
                "Diagrammes de l'air humide (Carrier / Mollier)",
                "Catalogues constructeurs de pompes à chaleur et centrales d'air"
            ],
            "analytical": [
                "Simulation thermique dynamique (STD) pour anticiper le confort d'été sans sur-climatisation",
                "Comparatif en coût global actualisé entre solutions géothermiques et chaudières gaz"
            ]
        },
        "specializations": ["Simulation Thermique Dynamique (STD) et confort d'été passif", "Modélisation BIM fluides (Revit MEP) sur grands projets tertiaires", "Bâtiments passifs (Passivhaus) et énergie positive (BEPOS)"],
        "studies": {
            "pathway": [
                {"step": "Diplôme clé Bac +2", "title": "BTS Fluides Énergies Domotique (FED) — Option Génie Climatique", "desc": "Formation de référence pour maîtriser les calculs thermiques et le dessin de plans fluides."},
                {"step": "Spécialisation Bac +3", "title": "Licence Professionnelle MEER (Maîtrise de l'Énergie et Énergies Renouvelables)", "desc": "Cursus valorisé par Energierecrute associant études thermiques, solaire et audits énergétiques."},
                {"step": "Alternance", "title": "Cursus en contrat d'apprentissage en bureau d'études", "desc": "Immersion professionnelle accélérant l'insertion directe."}
            ],
            "schools": [
                {"name": "Lycées techniques préparant au BTS FED — France", "country": "France", "scope": "France"},
                {"name": "IUT et universités proposant la Licence Pro MEER — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) / Génie Civil & Énergétique — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Dakar", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification OPQIBI Études thermiques", "Attestation de compétence logiciel BIM Revit MEP"],
            "schoolSubjects": ["Physique thermique", "Aéraulique & hydraulique", "CAO/DAO", "Réglementation du bâtiment"]
        },
        "career": {
            "sectors": ["Bureaux d'études thermiques et d'ingénierie du bâtiment", "Entreprises générales de génie climatique (Spie, Dalkia, Bouygues Energies & Services, Equans)", "Cabinets d'architecture et bureaux de contrôle technique (Apave, Bureau Veritas)"],
            "employerTypes": ["Bureaux d'études fluides", "Installateurs CVC", "Maîtres d'ouvrage immobiliers"],
            "evolution": "Technicien d'études junior ➔ Chargé d'études thermiques senior ➔ Responsable bureau d'études fluides ➔ Ingénieur thermicien",
            "pros": "Métier en tension extrême avec offres d'emploi abondantes, impact direct sur les factures d'énergie et le climat, travail moderne sur maquettes 3D.",
            "cons": "Pression sur les délais de rendu des permis de construire et dossiers d'appels d'offres."
        },
        "gettingStarted": {
            "beginnerProject": "Calculer la résistance thermique (R) d'un mur composé de parpaings, laine de verre de 14 cm et plaque de plâtre.",
            "intermediateProject": "Dessiner le réseau aéraulique d'une salle de classe sur un plan d'architecte en dimensionnant les sections de gaines.",
            "advancedProject": "Réaliser le bilan thermique complet d'une maison individuelle sous logiciel thermique gratuit avec dimensionnement d'une pompe à chaleur air-eau.",
            "portfolioIdeas": ["Plan de réseaux CVC sous Revit ou AutoCAD", "Note de calcul thermique réglementaire annotée"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA générative connectée au BIM génère automatiquement des réseaux de tuyauteries sans collisions et calcule instantanément des milliers de variantes d'isolation thermique.",
            "automatedTasks": ["Routage automatique des gaines et tuyauteries dans les maquettes 3D", "Extraction automatique des métrés et des quantités de matériaux"],
            "emergingSkills": ["Supervision des outils d'optimisation générative de tracés de réseaux"],
            "humanEdge": "Le dialogue de concertation avec l'architecte pour trouver le bon compromis entre esthétique des façades et efficacité énergétique passive."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la climatisation représente plus de 55% de la facture d'électricité des bâtiments tertiaires de Dakar et Diamniadio. Les techniciens en études thermiques conçoivent des façades ventilées, des brise-soleil adaptés à la latitude et des systèmes de climatisation solaire pour réduire les pointes de consommation sur le réseau.",
            "localSectors": ["Bureaux d'études d'ingénierie et fluides de Dakar", "Promoteurs immobiliers du pôle urbain de Diamniadio", "Entreprises de climatisation et d'équipements frigorifiques"],
            "remoteWork": "Hybride (très compatible avec le télétravail pour toute la partie modélisation CAO et calculs).",
            "entrepreneurship": "Création d'un bureau d'études indépendant d'assistance à maîtrise d'ouvrage pour la construction de bâtiments bioclimatiques en Afrique subsaharienne."
        },
        "relatedJobSlugs": ["charge-affaires-energetique-cvc", "energy-manager-auditeur-energetique", "technicien-genie-climatique-frigoriste", "technicien-etudes-energetiques-industrielles"],
        "connectedFamilies": ["btp-architecture", "environnement-climat", "industrie-mecanique"],
        "resources": [
            {"type": "formation", "title": "Licence Pro MEER (Maîtrise de l'Énergie) — Fiche Energierecrute", "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php?page=5", "source": "Energierecrute"},
            {"type": "guide", "title": "Guide de la RE2020 — Ministère de la Transition Écologique", "url": "https://www.ecologie.gouv.fr/reglementation-environnementale-re2020", "source": "Ministère Transition Écologique"}
        ],
        "sources": ["Energierecrute", "AICVF (Association des Ingénieurs en Climatique)", "ADEME"],
        "interests": ["construire-fabriquer", "donnees-chiffres", "nature-environnement"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon les données de recrutement d'Energierecrute, plus de 70% des diplômés en études thermiques et fluides reçoivent une proposition d'embauche en CDI avant même la fin de leur cursus de formation.",
            "pourquoi": "L'entrée en vigueur de normes environnementales toujours plus strictes oblige les constructeurs à justifier de calculs thermiques ultra-précis pour chaque permis de construire.",
            "a_retenir": "L'artisan de la fraîcheur et de la chaleur sobre dans nos bâtiments."
        }
    },

    # -----------------------------------------------------------------------
    # 3. TECHNICIEN EN ÉTUDES ÉNERGÉTIQUES INDUSTRIELLES
    # -----------------------------------------------------------------------
    {
        "id": "technicien-etudes-energetiques-industrielles",
        "slug": "technicien-etudes-energetiques-industrielles",
        "title": "Technicien en Études Énergétiques Industrielles",
        "aliases": ["Technicienne efficacité énergétique industrie", "Chargé d'études utilités industrielles", "Auditeur technique vapeur et air comprimé"],
        "icon": "🏭",
        "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Recherche, Développement & Ingénierie de Projet",
        "domainId": "recherche-ingenierie-etudes",
        "subdomain": "Études énergétiques industrielles",
        "energyTechnology": ["Vapeur industrielle", "Air comprimé", "Récupération de chaleur fatale", "Cogénération"],
        "energySector": "Industrie & Énergie",
        "sourceEnergierecrute": True,
        "isEmerging": False,
        "level": "BTS Électrotechnique / CVC ou Licence Pro MEER (Maîtrise de l'Énergie Industrielle)",
        "salary": "🇫🇷 France : 2 200 - 3 500 € net/mois (~32 000 - 50 000 € brut/an, Source : Energierecrute / Industrie) • 🇸🇳 Sénégal : 350 000 - 1 200 000 FCFA / mois (Usines agroalimentaires, cimenteries, mines)",
        "simpleDefinition": "Le technicien en études énergétiques industrielles analyse les consommations des usines (chaudières à vapeur, réseaux d'air comprimé, moteurs, fours), identifie les gaspillages et conçoit des solutions d'optimisation et de récupération de chaleur.",
        "shortDescription": "Issu des qualifications professionnelles citées par Energierecrute, cet expert traque les pertes d'énergie au cœur des processus de fabrication industrielle.",
        "longDescription": "Spécifié parmi les débouchés d'Energierecrute pour les cursus énergétiques avancés, le technicien en études énergétiques industrielles opère dans les usines chimiques, papetières, sidérurgiques ou agroalimentaires. Il installe des capteurs de mesure sur les utilités industrielles (vapeur, eau surchauffée, froid de process, air comprimé), dresse le bilan énergétique des lignes de production et dimensionne des systèmes de récupération d'énergie thermique (économiseurs sur fumées, échangeurs de chaleur, groupes frigorifiques à haute efficacité).",
        "mainObjective": "Chiffrer et déployer des plans d'économies d'énergie sur les utilités industrielles pour alléger les coûts d'exploitation et réduire les émissions de carbone.",
        "companyRole": "Chasseur de gaspillages énergétiques et concepteur de solutions d'efficacité dans les usines.",
        "workEnvironment": [
            "🏭 Sites industriels de production (chaufferies vapeur, compresseurs, ateliers de fabrication)",
            "🏢 Sociétés de services énergétiques (ESCO) et bureaux d'ingénierie industrielle",
            "💻 Bureau pour le traitement des données de télérelève et calculs de rentabilité"
        ],
        "missions": [
            "Réaliser des campagnes de mesure sur site (débits de vapeur, fuites d'air comprimé, puissance électrique appelée)",
            "Établir les bilans massiques et thermiques détaillés des utilités de l'usine",
            "Dimensionner des systèmes de récupération de chaleur fatale (échangeurs sur fumées de fours, pompes à chaleur industrielles)",
            "Calculer les gains financiers et le temps de retour sur investissement (TRI) des solutions préconisées",
            "Suivre la mise en service des nouveaux équipements et valider les économies d'énergie réelles selon le protocole IPMVP"
        ],
        "typicalDay": [
            {"time": "08:15", "title": "Campagne de détection de fuites d'air comprimé", "desc": "Parcours d'un atelier d'embouteillage avec un détecteur à ultrasons pour repérer et chiffrer 12 fuites d'air comprimé."},
            {"time": "10:45", "title": "Pose d'enregistreurs de puissance électrique", "desc": "Installation de pinces ampèremétriques communicantes sur le tableau électrique général des broyeurs."},
            {"time": "14:00", "title": "Modélisation sous tableur du gisement de chaleur", "desc": "Calcul de la quantité de mégawattheures valorisables sur les condensats de vapeur d'une blanchisserie industrielle."},
            {"time": "16:30", "title": "Restitution au directeur d'usine", "desc": "Présentation d'un projet de récupération de chaleur affichant un temps de retour sur investissement inférieur à 2 ans."}
        ],
        "skills": {
            "technical": [
                "Utilités industrielles (générateurs de vapeur, compresseurs d'air, groupes froids, moteurs IE3/IE4)",
                "Thermodynamique industrielle et bilans de matière et d'énergie",
                "Métrologie industrielle (débitmètres à ultrasons, caméras thermiques infrarouges, wattmètres)",
                "Protocole international de mesure et vérification de la performance énergétique (IPMVP)"
            ],
            "human": [
                "Rigueur méthodique et curiosité d'investigation sur le terrain industriel",
                "Sens aigu de la sécurité face aux risques vapeur, haute pression et électricité",
                "Pédagogie pour convaincre les chefs d'ateliers de modifier leurs réglages",
                "Pragmatisme économique orienté rentabilité et gain rapide"
            ],
            "tools": [
                "Caméras thermiques infrarouges (FLIR), détecteurs ultrasoniques de fuites",
                "Enregistreurs de puissance électrique triphasée (Chauvin Arnoux)",
                "Débitmètres à ultrasons non intrusifs pour conduites",
                "Tableurs de simulation énergétique industrielle et diagrammes de Sankey"
            ],
            "analytical": [
                "Construction de diagrammes de flux d'énergie de Sankey pour visualiser les pertes",
                "Calcul de rentabilité avec prise en compte des Certificats d'Économies d'Énergie (CEE)"
            ]
        },
        "specializations": ["Optimisation des réseaux de vapeur et purgeurs industriels", "Efficacité énergétique des systèmes de production d'air comprimé", "Récupération de chaleur fatale industrielle haute température"],
        "studies": {
            "pathway": [
                {"step": "Bac +2", "title": "BTS Contrôle Industriel et Régulation Automatique (CIRA) ou Électrotechnique", "desc": "Bases solides en mesures physiques, régulation industrielle et électromécanique."},
                {"step": "Bac +3 spécialisé", "title": "Licence Professionnelle MEER — Parcours Énergie dans l'Industrie", "desc": "Cursus valorisé par Energierecrute pour maîtriser l'audit et l'optimisation des utilités."},
                {"step": "Évolution continue", "title": "Certification CMVP (Certified Measurement & Verification Professional)", "desc": "Reconnaissance internationale pour la mesure des économies d'énergie."}
            ],
            "schools": [
                {"name": "IUT et universités partenaires de la formation MEER — France", "country": "France", "scope": "France"},
                {"name": "Lycées industriels préparant aux BTS de l'énergie — France", "country": "France", "scope": "France"},
                {"name": "Institut de Technologie Alimentaire (ITA) / Département Énergie — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification CMVP (Mesure et vérification de la performance)", "Habilitation électrique B2V / Risque vapeur"],
            "schoolSubjects": ["Thermodynamique industrielle", "Métrologie", "Régulation", "Électrotechnique"]
        },
        "career": {
            "sectors": ["Sociétés de services énergétiques (Dalkia, ENGIE Solutions, Veolia, Idex)", "Bureaux d'études spécialisés en décarbonation industrielle", "Grands sites industriels consommateurs d'énergie (chimie, agroalimentaire, métallurgie)"],
            "employerTypes": ["Sociétés de services d'efficacité énergétique", "Bureaux d'études industriels", "Usines de production"],
            "evolution": "Technicien d'études ➔ Ingénieur efficacité énergétique industrielle ➔ Responsable utilités de site ➔ Directeur énergie d'un groupe industriel",
            "pros": "Métier très concret sur le terrain des usines, gisement immense d'économies d'énergie à exploiter, forte valeur ajoutée écologique et financière.",
            "cons": "Environnements industriels bruyants et parfois chauds, déplacements fréquents sur sites de production."
        },
        "gettingStarted": {
            "beginnerProject": "Relever la plaque signalétique d'un moteur électrique et calculer son coût annuel de fonctionnement à plein régime.",
            "intermediateProject": "Dresser le schéma fonctionnel d'une chaufferie vapeur industrielle en identifiant les points de récupération de condensats.",
            "advancedProject": "Dimensionner un échangeur tubulaire pour récupérer la chaleur des eaux de lavage à 70°C d'une conserverie agroalimentaire.",
            "portfolioIdeas": ["Rapport d'audit d'utilités industrielles anonymisé", "Diagramme de Sankey des flux énergétiques d'une usine"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA analyse les flux de capteurs IoT industriels en temps réel pour ajuster dynamiquement la pression des compresseurs et détecter les dérives de chaudières.",
            "automatedTasks": ["Détection prédictive de l'encrassement des échangeurs thermiques", "Ajustement automatique des courbes de chauffe en fonction de la production"],
            "emergingSkills": ["Paramétrage de jumeaux numériques énergétiques d'usines"],
            "humanEdge": "L'investigation physique dans les recoins des ateliers pour déceler les anomalies mécaniques qu'aucun capteur n'a enregistrées."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les grandes unités agro-industrielles (Compagnie Sucrière Sénégalaise à Richard-Toll, Sonacos, Grands Moulins de Dakar) et les cimenteries (Sococim, Dangote) mobilisent des techniciens en études énergétiques pour valoriser la bagasse de canne à sucre en chaudière et réduire leur lourde facture d'électricité sur le réseau.",
            "localSectors": ["Compagnie Sucrière Sénégalaise (CSS à Richard-Toll)", "Cimenteries industrielles (Sococim, Dangote, Ciments du Sahel)", "Industries meunières et huileries du bassin arachidier"],
            "remoteWork": "Faible (présence sur les installations industrielles pour mesures et audits).",
            "entrepreneurship": "Création d'une société de services énergétiques (ESCO) proposant des audits de performance des moteurs et de l'air comprimé aux PME sénégalaises."
        },
        "relatedJobSlugs": ["technicien-etudes-thermiques-batiment", "energy-manager-auditeur-energetique", "charge-affaires-energetique-cvc", "responsable-hse-sites-energetiques"],
        "connectedFamilies": ["industrie-mecanique", "gestion-finance", "environnement-climat"],
        "resources": [
            {"type": "article", "title": "Filière efficacité énergétique industrielle — Energierecrute", "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php", "source": "Energierecrute"},
            {"type": "guide", "title": "Programme PRO-SMEn & CEE industrie — ATEE", "url": "https://atee.fr/", "source": "ATEE"}
        ],
        "sources": ["Energierecrute", "ATEE", "ADEME Industrie"],
        "interests": ["construire-fabriquer", "donnees-chiffres", "nature-environnement"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Dans une usine classique, l'air comprimé est l'énergie la plus chère : seulement 10% de l'électricité consommée par le compresseur est transformée en énergie utile, le reste étant dissipé en chaleur.",
            "pourquoi": "Un technicien qui traque les fuites et récupère la chaleur du compresseur génère des dizaines de milliers d'euros d'économies immédiates pour l'entreprise.",
            "a_retenir": "L'optimisateur de performance qui transforme les pertes d'usine en rentabilité industrielle."
        }
    },

    # -----------------------------------------------------------------------
    # 4. CHARGÉ / CHARGÉE D'AFFAIRES EN ÉNERGÉTIQUE & GÉNIE CLIMATIQUE
    # -----------------------------------------------------------------------
    {
        "id": "charge-affaires-energetique-cvc",
        "slug": "charge-affaires-energetique-cvc",
        "title": "Chargé / Chargée d'Affaires en Énergétique & Génie Climatique",
        "aliases": ["Responsable d'affaires CVC", "Chef de projets installations énergétiques", "Ingénieur d'affaires génie climatique"],
        "icon": "💼",
        "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Recherche, Développement & Ingénierie de Projet",
        "domainId": "recherche-ingenierie-etudes",
        "subdomain": "Conception d'installations",
        "energyTechnology": ["Génie climatique", "Chauffage urbain", "Climatisation", "Réseaux de chaleur"],
        "energySector": "Ingénierie & Travaux Énergétiques",
        "sourceEnergierecrute": True,
        "isEmerging": False,
        "level": "Licence Pro MEER, BTS FED ou Ingénieur en Génie Énergétique",
        "salary": "🇫🇷 France : 2 800 - 4 600 € net/mois + primes sur résultat (~38 000 - 65 000 € brut/an, Source : Energierecrute / APEC) • 🇸🇳 Sénégal : 450 000 - 1 500 000 FCFA / mois (Entreprises d'installation et de maintenance CVC)",
        "simpleDefinition": "Le chargé d'affaires en énergétique pilote de A à Z des projets d'installations de chauffage, climatisation, ventilation ou réseaux de chaleur : il répond aux appels d'offres, négocie les contrats, supervise les études et coordonne les chantiers jusqu'à la mise en service.",
        "shortDescription": "Débouché d'excellence mis en avant par Energierecrute pour les diplômés de Licence Pro MEER, ce chef d'orchestre conjugue négociation commerciale, rigueur technique et gestion de chantiers.",
        "longDescription": "Comme documenté par Energierecrute dans les filières de la maîtrise de l'énergie, le chargé d'affaires en génie climatique est le garant de la rentabilité technique et financière des chantiers énergétiques. Interlocuteur unique du client (collectivités, promoteurs, industriels), il chiffre les devis, consulte les fournisseurs de pompes à chaleur ou chaudières industrielles, coordonne le bureau d'études, manage les équipes d'installateurs et veille au respect des délais, des marges budgétaires et de la sécurité des intervenants.",
        "mainObjective": "Développer le portefeuille d'affaires de l'entreprise et assurer la livraison clé en main d'installations énergétiques performantes dans le respect des coûts et de la sécurité.",
        "companyRole": "Pilote commercial, technique et financier des grands chantiers énergétiques.",
        "workEnvironment": [
            "🏢 Sièges et agences régionales des grands installateurs énergétiques (Dalkia, Spie, Equans, Eiffage Énergie)",
            "🏗️ Chantiers de construction tertiaires, industriels ou hospitaliers",
            "🚗 Déplacements fréquents pour rendez-vous clients, réunions de chantier et négociations"
        ],
        "missions": [
            "Prospecter de nouveaux clients et répondre aux appels d'offres publics et privés de génie climatique",
            "Réaliser le chiffrage financier détaillé des projets (fournitures d'équipements, sous-traitance, main d'œuvre)",
            "Superviser les plans et notes de calcul établis par le bureau d'études techniques",
            "Négocier les contrats d'achats de matériel auprès des constructeurs (Daikin, Carrier, Atlantic, Viessmann)",
            "Coordonner les conducteurs de travaux et chefs de chantiers jusqu'à la réception sans réserves"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Point matinal sur chantier hospitalier", "desc": "Visite d'avancement de la pose de deux groupes frigorifiques à eau glacée de 500 kW avec le chef de chantier."},
            {"time": "10:30", "title": "Soutenance d'offre commerciale", "desc": "Présentation orale de la proposition technique de rénovation d'un réseau de chaleur devant la commission d'appel d'offres d'une mairie."},
            {"time": "14:00", "title": "Revue financière de gestion d'affaires", "desc": "Analyse sous ERP des marges à terminaison et validation des situations de travaux du mois."},
            {"time": "16:30", "title": "Négociation avec un équipementier", "desc": "Discussion tarifaire sur un lot de 80 ventilo-convecteurs pour équiper un campus de bureaux."}
        ],
        "skills": {
            "technical": [
                "Techniques du génie climatique (hydraulique, aéraulique, régulation GTB/GTC, électricité)",
                "Chiffrage de projets, élaboration de devis et décomposition des prix",
                "Gestion financière d'affaires (compte d'exploitation, facturation, trésorerie de chantier)",
                "Droit des marchés de travaux (CCAG travaux, contrats privés, garanties décennales)"
            ],
            "human": [
                "Aisance relationnelle et leadership pour fédérer des équipes de chantier",
                "Négociation commerciale et force de persuasion devant les clients",
                "Résistance au stress et réactivité face aux imprévus de chantier",
                "Organisation méthodique et vision globale des plannings"
            ],
            "tools": [
                "Logiciels de chiffrage et devis BTP (Optima, Quick Devis)",
                "ERP de gestion d'affaires (SAP, Sage, EBP Bâtiment)",
                "Outils de planification de projet (MS Project, Primavera)",
                "Visionneuses de plans et maquettes BIM (Navisworks, BIMx)"
            ],
            "analytical": [
                "Analyse des risques contractuels et financiers d'une réponse à appel d'offres",
                "Optimisation du planning de phasage des travaux pour réduire les coûts d'intérim"
            ]
        },
        "specializations": ["Affaires CVC en milieu hospitalier et salles blanches", "Réseaux de chaleur et de froid urbains (chaufferies biomasse/géothermie)", "Rénovation énergétique globale de parcs tertiaires en contrat CPE"],
        "studies": {
            "pathway": [
                {"step": "Diplôme clé Bac +2", "title": "BTS Fluides Énergies Domotique (FED) ou BTS Électrotechnique", "desc": "Compétence technique socle indispensable pour évaluer la faisabilité d'un chantier."},
                {"step": "Licence Pro d'excellence", "title": "Licence Pro MEER — Parcours Chargé d'Affaires en Énergétique", "desc": "Formation mise en valeur par Energierecrute pour acquérir la double casquette technique et commerciale."},
                {"step": "Bac +5 / Ingénieur", "title": "Diplôme d'Ingénieur Énergétique ou Master Management de Projet Énergie", "desc": "Accès direct à la gestion de grands comptes et de projets de plusieurs dizaines de millions d'euros."}
            ],
            "schools": [
                {"name": "IUT et universités proposant la Licence Pro MEER — France", "country": "France", "scope": "France"},
                {"name": "Grandes écoles d'ingénieurs (INSA, Polytech, ESTP) — France", "country": "France", "scope": "France"},
                {"name": "École Polytechnique de Thiès (EPT) / Génie Électromécanique — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Institut Supérieur de Management (ISM Dakar) / Gestion de Projets — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification en Management de Projet (PMP ou CAPM)", "Habilitation sécurité chantier (SPS niveau 3)"],
            "schoolSubjects": ["Génie climatique", "Gestion financière", "Négociation commerciale", "Droit des marchés"]
        },
        "career": {
            "sectors": ["Entreprises majeures du génie climatique et de l'énergie (Equans, Dalkia, Spie, Idex)", "Installateurs régionaux indépendants en CVC et plomberie industrielle", "Bureaux d'études contractants généraux"],
            "employerTypes": ["Entreprises de génie climatique", "Majors du BTP énergie", "Opérateurs de réseaux de chaleur"],
            "evolution": "Chargé d'affaires junior ➔ Chargé d'affaires confirmé ➔ Responsable de centre de profit CVC ➔ Directeur d'agence régionale",
            "pros": "Métier polyvalent où l'on ne s'ennuie jamais, autonomie complète sur ses affaires, rémunération stimulante avec intéressement sur les marges.",
            "cons": "Forte pression sur les résultats financiers, responsabilité directe sur les retards ou pénalités de chantier."
        },
        "gettingStarted": {
            "beginnerProject": "Établir un devis chiffré simple pour le remplacement d'une chaudière par une pompe à chaleur dans un commerce de 200 m².",
            "intermediateProject": "Construire un planning de Gantt sous MS Project pour un chantier de climatisation de 4 mois avec 5 corps d'état.",
            "advancedProject": "Rédiger un mémoire technique complet de réponse à appel d'offres incluant phasage, variantes environnementales et fiches matériel.",
            "portfolioIdeas": ["Exemple de mémoire technique d'appel d'offres CVC", "Compte d'exploitation prévisionnel d'un chantier énergétique"]
        },
        "aiImpact": {
            "level": "Modéré à Élevé",
            "summary": "L'IA automatise l'extraction des bordereaux de prix des cahiers des charges et optimise la prévision des marges en analysant l'historique de centaines de chantiers.",
            "automatedTasks": ["Lecture automatique des pièces d'appels d'offres et repérage des exigences techniques", "Pré-remplissage des devis à partir des bases de prix constructeurs"],
            "emergingSkills": ["Utilisation d'outils de chiffrage assistés par intelligence artificielle"],
            "humanEdge": "La confiance forgée avec les clients maîtres d'ouvrage et l'art de négocier fermement avec des sous-traitants sur un chantier complexe."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le boom immobilier de Dakar et du pôle urbain de Diamniadio génère une demande massive en chargés d'affaires pour climatiser et équiper les tours ministérielles, hôtels de luxe, hôpitaux et centres de données (Data Centers) avec des systèmes à haute efficacité énergétique.",
            "localSectors": ["Grands groupes d'installation et de maintenance CVC à Dakar", "Entreprises de climatisation et froid industriel des Niayes", "Projets d'infrastructures de l'Apix et de l'État sénégalais"],
            "remoteWork": "Faible (présence sur le terrain et en rendez-vous clients indispensable).",
            "entrepreneurship": "Création d'une entreprise d'installation et de maintenance en génie climatique spécialisée dans les systèmes de rafraîchissement éco-responsables pour les entreprises d'Afrique de l'Ouest."
        },
        "relatedJobSlugs": ["technicien-etudes-thermiques-batiment", "technicien-genie-climatique-frigoriste", "energy-manager-auditeur-energetique", "technico-commercial-solutions-energetiques"],
        "connectedFamilies": ["commerce-marketing", "gestion-finance", "btp-architecture"],
        "resources": [
            {"type": "article", "title": "Chargé d'affaires en génie climatique — Energierecrute", "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php", "source": "Energierecrute"},
            {"type": "formation", "title": "Licence Pro MEER — Débouchés chargés d'affaires", "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php?page=5", "source": "Energierecrute"}
        ],
        "sources": ["Energierecrute", "FFB (Fédération Française du Bâtiment)", "AICVF"],
        "interests": ["negocier-convaincre", "construire-fabriquer", "gerer-organiser"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon les bilans d'insertion professionnelle d'Energierecrute, le métier de chargé d'affaires CVC offre l'une des progressions de rémunération les plus rapides du secteur technique, les primes pouvant représenter 20% à 40% du salaire de base.",
            "pourquoi": "Dans un secteur où les commandes se chiffrent en millions d'euros, un professionnel capable de remporter des marchés tout en garantissant une marge saine est le profil le plus précieux d'une entreprise.",
            "a_retenir": "Le stratège qui gère l'alliance de la technique, du commerce et du terrain."
        }
    },

    # -----------------------------------------------------------------------
    # 5. CHEF DE PROJET ÉNERGIE SOLAIRE PHOTOVOLTAÏQUE
    # -----------------------------------------------------------------------
    {
        "id": "chef-projet-energie-solaire-photovoltaique",
        "slug": "chef-projet-energie-solaire-photovoltaique",
        "title": "Chef de Projet Énergie Solaire Photovoltaïque",
        "aliases": ["Chef de projet EnR solaire", "Ingénieur d'études photovoltaïques", "Développeur de projets solaires"],
        "icon": "☀️",
        "image": "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Énergie Solaire Photovoltaïque & Thermique",
        "domainId": "energie-solaire-pv-thermique",
        "subdomain": "Solaire photovoltaïque",
        "energyTechnology": ["Solaire photovoltaïque", "Onduleurs", "PVSyst", "Raccordement réseau"],
        "energySector": "Énergies Renouvelables",
        "sourceEnergierecrute": True,
        "isEmerging": False,
        "level": "Bac +5 (Ingénieur en Énergies Renouvelables ou Master Génie Électrique)",
        "salary": "🇫🇷 France : 2 900 - 4 800 € net/mois (~40 000 - 68 000 € brut/an, Source : Energierecrute / APEC) • 🇸🇳 Sénégal : 500 000 - 1 800 000 FCFA / mois (Producteurs IPP solaires, centrales de Bokhol, Malicounda)",
        "simpleDefinition": "Le chef de projet solaire photovoltaïque pilote le développement de parcs solaires au sol, d'ombrières de parking ou de toitures industrielles, de la recherche de foncier et des études d'impact jusqu'au raccordement au réseau électrique et à la mise en service.",
        "shortDescription": "Fiche de référence du portail Energierecrute, ce chef d'orchestre des énergies propres concrétise la construction de parcs solaires produisant des mégawatts d'électricité verte.",
        "longDescription": "Inscrit au cœur des métiers des énergies renouvelables sur Energierecrute, le chef de projet solaire photovoltaïque coordonne toutes les étapes d'un investissement de production d'électricité solaire. Il sécurise le foncier avec les propriétaires terriens et collectivités, pilote les études de gisement solaire (logiciel PVSyst), dépose les permis de construire et dossiers environnementaux, négocie la convention de raccordement avec le gestionnaire de réseau (Enedis/RTE en France, Senelec au Sénégal) et sélectionne les constructeurs EPC (Engineering, Procurement, Construction).",
        "mainObjective": "Développer et mener à bien la mise en service de centrales photovoltaïques rentables et respectueuses des écosystèmes locaux.",
        "companyRole": "Pilote stratégique et technique du déploiement des infrastructures solaires.",
        "workEnvironment": [
            "🏢 Développeurs et producteurs indépendants d'électricité renouvelable (Neoen, Voltalia, TotalEnergies Renouvelables, Engie Green)",
            "☀️ Visites de terrain régulières sur les parcelles agricoles ou friches industrielles destinées aux parcs solaires",
            "🏛️ Réunions avec élus locaux, services de l'État et gestionnaires de réseau électrique"
        ],
        "missions": [
            "Identifier et sécuriser les terrains propices (friches, toitures industrielles, délaissés routiers) par baux emphytéotiques",
            "Dimensionner la centrale solaire et modéliser la production électrique annuelle sous PVSyst",
            "Piloter les études d'impact environnemental (faune, flore, biodiversité) et les concertations publiques",
            "Obtenir les autorisations administratives (permis de construire, autorisation d'exploiter)",
            "Négocier les conditions de raccordement électrique et préparer la participation aux appels d'offres de rachat d'électricité"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Simulation de productible sous PVSyst", "desc": "Calcul des pertes par ombrage et par effet thermique sur une future centrale de 25 MWc en toitures logistiques."},
            {"time": "11:00", "title": "Réunion de concertation locale", "desc": "Présentation des mesures paysagères et agricoles d'un projet agrivoltaïque devant le conseil municipal d'une commune rurale."},
            {"time": "14:30", "title": "Échange technique avec le gestionnaire de réseau", "desc": "Validation de la proposition technique et financière (PTF) de raccordement au poste source haute tension."},
            {"time": "16:45", "title": "Revue du modèle financier", "desc": "Mise à jour du TRI projet avec l'équipe de financement de projet bancaire suite aux nouveaux cours des modules photovoltaïques."}
        ],
        "skills": {
            "technical": [
                "Technologie photovoltaïque (modules monocristallins, trackers mono-axes, onduleurs centraux et de chaîne)",
                "Simulation de productible solaire (PVSyst, SolarGIS, HelioScope)",
                "Réglementation de l'urbanisme et autorisations environnementales",
                "Génie électrique haute tension et processus de raccordement au réseau"
            ],
            "human": [
                "Excellentes qualités relationnelles et diplomatie dans la concertation territoriale",
                "Leadership et capacité à animer des équipes d'experts multidisciplinaires",
                "Ténacité et persévérance face à des processus de développement de 2 à 4 ans",
                "Aisance dans la négociation contractuelle et foncière"
            ],
            "tools": [
                "PVSyst, AutoCAD Electrical, QGIS",
                "SolarGIS, Meteonorm",
                "Outils de gestion de projet (Trello, MS Project)",
                "Modèles financiers sous tableur (DCF, TRI, LCOE)"
            ],
            "analytical": [
                "Optimisation du ratio de performance (PR - Performance Ratio) d'une installation solaire",
                "Arbitrage technico-économique entre trackers mobiles et structures fixes orientées sud"
            ]
        },
        "specializations": ["Parcs solaires au sol de grande puissance (> 30 MWc)", "Projets agrivoltaïques associant élevage ovin ou grandes cultures", "Grandes toitures photovoltaïques industrielles et ombrières de parking"],
        "studies": {
            "pathway": [
                {"step": "Formation ingénieur", "title": "Diplôme d'Ingénieur en Énergies Renouvelables ou Génie Électrique", "desc": "Compétence technique globale en production d'électricité, électronique de puissance et réseaux."},
                {"step": "Master Universitaire", "title": "Master Énergies Renouvelables & Management de Projets", "desc": "Formation aux dimensions réglementaires, juridiques et économiques des filières solaires."},
                {"step": "Cursus MEER", "title": "Licence Pro MEER complétée par un Master Énergie", "desc": "Parcours pragmatique très recherché par les développeurs solaires régionaux."}
            ],
            "schools": [
                {"name": "Polytech Nantes / Grenoble INP — France", "country": "France", "scope": "France"},
                {"name": "INSA Strasbourg / Lyon — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) / Master Énergies Renouvelables — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "UFR Sciences et Technologies / Université Iba Der Thiam de Thiès — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification PVSyst Avancé", "Habilitation électrique H0/B0 pour chantiers"],
            "schoolSubjects": ["Physique des semi-conducteurs", "Génie électrique", "Droit de l'énergie", "Gestion de projet"]
        },
        "career": {
            "sectors": ["Producteurs indépendants d'énergie (IPP) solaires (TotalEnergies Renouvelables, Neoen, Voltalia, Boralex)", "Bureaux d'études spécialisés en énergies renouvelables", "Coopératives citoyennes d'énergie et foncières solaires"],
            "employerTypes": ["Développeurs solaires internationaux", "Producteurs indépendants d'énergie", "Constructeurs EPC solaires"],
            "evolution": "Chef de projet junior ➔ Chef de projet senior ➔ Responsable développement régional ➔ Directeur du pôle solaire",
            "pros": "Métier porteur de sens au cœur de la décarbonation, variété passionnante des missions (terrain, technique, juridique, finance), dynamisme économique mondial.",
            "cons": "Délais administratifs parfois très longs (2 à 5 ans pour voir naître un parc), opposition locale possible sur certains territoires."
        },
        "gettingStarted": {
            "beginnerProject": "Télécharger la version d'essai de PVSyst et simuler la production d'un champ de 20 panneaux solaires dans sa région.",
            "intermediateProject": "Cartographier sous Google Earth et QGIS une friche industrielle et délimiter les zones d'implantation de tables solaires en évitant les masques d'ombre.",
            "advancedProject": "Monter un dossier fictif complet de demande de permis de construire pour une ombrière solaire de 500 places de parking avec bilan carbone prévisionnel.",
            "portfolioIdeas": ["Rapport de simulation de productible PVSyst annoté", "Note d'opportunité foncière et de raccordement pour un projet solaire"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA analyse les photographies aériennes satellites pour repérer instantanément les toitures exploitables et optimise le positionnement 3D des rangées de panneaux pour éliminer les ombrages portés.",
            "automatedTasks": ["Détection automatisée du potentiel solaire des toitures par vision par ordinateur", "Optimisation de l'implantation des modules sous contrainte de topographie"],
            "emergingSkills": ["Pilotage d'algorithmes d'orientation intelligente des trackers solaires face aux nuages"],
            "humanEdge": "La négociation humaine et la capacité à convaincre des agriculteurs et des maires de s'engager dans un projet solaire sur plusieurs décennies."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la stratégie 'mix énergétique' a fait émerger des parcs solaires de référence en Afrique de l'Ouest : Bokhol (20 MW), Malicounda (22 MW), Méouane (30 MW) et Kahone (35 MW). Les chefs de projets solaires sénégalais coordonnent également des mini-réseaux hybrides pour électrifier les villages isolés de Casamance et de la vallée du fleuve.",
            "localSectors": ["Senelec (Société Nationale d'Électricité du Sénégal)", "Agence Sénégalaise d'Électrification Rurale (ASER)", "Développeurs solaires privés opérant en Afrique de l'Ouest"],
            "remoteWork": "Hybride (déplacements fréquents sur les sites des parcs / travail de bureau et visioconférences).",
            "entrepreneurship": "Création d'une entreprise de développement et d'installation de centrales solaires pour l'autoconsommation des industries et hôtels du littoral sénégalais."
        },
        "relatedJobSlugs": ["installateur-mainteneur-photovoltaique", "chef-projet-eolien-onshore-offshore", "ingenieur-smart-grids-reseaux-intelligents", "energy-manager-auditeur-energetique"],
        "connectedFamilies": ["environnement-climat", "direction-strategie", "btp-architecture"],
        "resources": [
            {"type": "article", "title": "Fiche Chef de projet solaire — Energierecrute", "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php", "source": "Energierecrute"},
            {"type": "filiere", "title": "Enerplan — Syndicat des professionnels de l'énergie solaire", "url": "https://www.enerplan.asso.fr/", "source": "Enerplan"}
        ],
        "sources": ["Energierecrute", "Enerplan", "SER (Syndicat des Énergies Renouvelables)"],
        "interests": ["nature-environnement", "construire-fabriquer", "negocier-convaincre"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon les prévisions de l'Agence Internationale de l'Énergie (AIE), l'énergie solaire photovoltaïque est devenue la source d'électricité la moins chère de l'histoire de l'humanité dans la majorité des pays ensoleillés du monde.",
            "pourquoi": "La baisse de plus de 90% du coût des panneaux en dix ans a fait du solaire le moteur incontournable de la transition énergétique mondiale.",
            "a_retenir": "Le bâtisseur des grandes centrales qui transforment la lumière du soleil en électricité pour tous."
        }
    },

    # -----------------------------------------------------------------------
    # 6. INSTALLATEUR-MAINTENEUR DE SYSTÈMES SOLAIRES PHOTOVOLTAÏQUES
    # -----------------------------------------------------------------------
    {
        "id": "installateur-mainteneur-photovoltaique",
        "slug": "installateur-mainteneur-photovoltaique",
        "title": "Installateur-Mainteneur de Systèmes Solaires Photovoltaïques",
        "aliases": ["Électricien photovoltaïque", "Monteur de panneaux solaires", "Technicien de pose et mise en service solaire"],
        "icon": "🔧",
        "image": "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Énergie Solaire Photovoltaïque & Thermique",
        "domainId": "energie-solaire-pv-thermique",
        "subdomain": "Installation photovoltaïque",
        "energyTechnology": ["Solaire photovoltaïque", "Câblage courant continu", "Onduleurs", "Sécurité toiture"],
        "energySector": "Installation & Maintenance",
        "sourceEnergierecrute": True,
        "isEmerging": False,
        "level": "CAP / Bac Pro Électrotechnique ou Titre Professionnel Installateur Photovoltaïque",
        "salary": "🇫🇷 France : 1 900 - 2 900 € net/mois (~26 000 - 40 000 € brut/an, Source : Energierecrute / BTP) • 🇸🇳 Sénégal : 200 000 - 750 000 FCFA / mois (Entreprises d'électrification solaire, installateurs indépendants)",
        "simpleDefinition": "L'installateur-mainteneur solaire fixe les panneaux photovoltaïques sur les toitures ou au sol, réalise le câblage électrique en courant continu et alternatif, raccorde les onduleurs et les batteries, et assure la maintenance préventive et corrective des générateurs.",
        "shortDescription": "Fiche de terrain essentielle répertoriée par Energierecrute, ce technicien allie savoir-faire d'électricien qualifié et travail en hauteur pour monter les centrales solaires.",
        "longDescription": "Comme décrit dans les métiers d'installation et de maintenance sur Energierecrute, l'installateur photovoltaïque est le professionnel manuel et technique qui concrétise les projets solaires. Il assure la pose des rails de fixation et des panneaux solaires sur les toitures résidentielles, les hangars agricoles ou les parcs au sol. Il réalise le raccordement électrique des chaînes de modules (strings), installe les coffrets de protection DC/AC (parafoudres, disjoncteurs), configure les onduleurs connectés et diagnostique les pannes de production à l'aide de caméras thermiques.",
        "mainObjective": "Poser, raccorder et entretenir en toute sécurité des installations solaires photovoltaïques étanches, conformes aux normes électriques et produisant à leur plein potentiel.",
        "companyRole": "Opérateur clé de la réalisation physique et de la fiabilité des installations solaires.",
        "workEnvironment": [
            "☀️ Travail en plein air sur toitures de maisons, hangars agricoles ou chantiers de parcs au sol",
            "🪜 Utilisation quotidienne d'équipements de travail en hauteur (harnais, échafaudages, nacelles)",
            "⚡ Manipulation de circuits sous tension continue (DC) jusqu'à 1 500 Volts"
        ],
        "missions": [
            "Mettre en place les systèmes de sécurité collectifs et individuels de travail en hauteur sur toiture",
            "Poser les structures de fixation, rails en aluminium et crochets d'étanchéité sous les tuiles ou bacs acier",
            "Fixer et connecter en série les modules photovoltaïques en respectant les polarités électriques",
            "Tirer les câbles solaires résistants aux UV, poser les onduleurs et raccorder les coffrets de protection",
            "Réaliser la mise en service, vérifier la tension à vide (Voc), le courant de court-circuit (Isc) et la mise à la terre"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Sécurisation du chantier en toiture", "desc": "Installation des lignes de vie temporaires, des filets antichute et vérification des harnais de sécurité."},
            {"time": "09:30", "title": "Pose des rails et des modules solaires", "desc": "Fixation au couple de serrage réglementaire de 32 panneaux solaires de 425 Wc sur un toit de hangar."},
            {"time": "13:30", "title": "Câblage électrique et raccordement de l'onduleur", "desc": "Sertissage des connecteurs MC4, raccordement du coffret DC avec parafoudre et liaison à l'onduleur de chaîne."},
            {"time": "16:00", "title": "Mesures de conformité et mise en service", "desc": "Contrôle d'isolement diélectrique, mesure de la résistance de terre (< 30 Ohms) et appairage de l'onduleur au réseau Wi-Fi client."}
        ],
        "skills": {
            "technical": [
                "Électrotechnique appliquée au courant continu (DC) haute tension et alternatif (AC)",
                "Techniques de couverture, de charpente et d'étanchéité des toitures (tuiles, ardoises, bac acier)",
                "Normes électriques spécifiques au photovoltaïque (UTE C 15-712-1, NF C 15-100)",
                "Diagnostic de dépannage électrique et thermographie infrarouge de détection de points chauds (hot spots)"
            ],
            "human": [
                "Absence totale de vertige et excellente condition physique pour le port de charges",
                "Sens aigu et intransigeant des règles de sécurité (risque de chute et risque électrique)",
                "Soigneux dans les gestes d'étanchéité pour éviter toute fuite d'eau chez le client",
                "Bon contact humain pour expliquer le fonctionnement de l'installation aux usagers"
            ],
            "tools": [
                "Pinces à sertir spécifiques pour connecteurs solaires MC4",
                "Appareils de mesure multifonctions solaires (contrôleurs de continuité, mégohmmètres)",
                "Caméras thermiques de détection d'anomalies sur cellules solaires",
                "Visseuses à choc, cliquets dynamométriques, harnais et longes de sécurité"
            ],
            "analytical": [
                "Identification des causes de sous-performance d'un string (ombrage, diode by-pass défectueuse)",
                "Vérification de la compatibilité tension/courant entre les panneaux et les plages MPPT de l'onduleur"
            ]
        },
        "specializations": ["Pose et intégration en toiture résidentielle et tertiaire", "Maintenance et dépannage haute tension sur grandes centrales au sol", "Installations solaires autonomes avec parcs de batteries et groupes hybrides"],
        "studies": {
            "pathway": [
                {"step": "Diplôme socle", "title": "CAP Électricien ou Bac Pro MELEC (Métiers de l'Électricité)", "desc": "Apprentissage des bases fondamentales du câblage électrique et de la sécurité."},
                {"step": "Mention Complémentaire", "title": "Mention Complémentaire Énergies Renouvelables (MC EnR)", "desc": "Spécialisation d'un an axée sur la pose de générateurs solaires et pompes à chaleur."},
                {"step": "Qualification Professionnelle", "title": "Formation QualiPV (Élec et Bâtiment)", "desc": "Habilitation reconnue pour obtenir le label RGE (Reconnu Garant de l'Environnement)."}
            ],
            "schools": [
                {"name": "Lycées professionnels et CFA du bâtiment — France", "country": "France", "scope": "France"},
                {"name": "Centres de formation continue agréés Qualit'EnR — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Dakar", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Centres de Formation Professionnelle (CFP) régionaux de Thiès et Kaolack — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Qualifications QualiPV Élec & QualiPV Bâtiment", "Habilitation électrique BR Photovoltaïque / BP", "Certificat CACES nacelle et travail en hauteur"],
            "schoolSubjects": ["Électrotechnique", "Technologie du bâtiment", "Sécurité au travail", "Dessin de schémas"]
        },
        "career": {
            "sectors": ["Entreprises spécialisées dans la pose d'énergies renouvelables", "PME d'électricité générale et de couverture-zinguerie", "Entreprises de maintenance et de gestion d'actifs solaires (O&M)"],
            "employerTypes": ["Artisans et installateurs solaires", "Groupes de services énergétiques", "Sociétés d'exploitation de parcs solaires"],
            "evolution": "Installateur débutant ➔ Chef d'équipe pose photovoltaïque ➔ Conducteur de travaux solaire ➔ Créateur de sa propre entreprise d'installation",
            "pros": "Métier manuel passionnant au grand air, fierté de voir une installation produire de l'énergie propre, forte demande de recrutement sur tout le territoire.",
            "cons": "Conditions météorologiques parfois rigoureuses (chaleur en été, froid en hiver), pénibilité physique du travail en toiture."
        },
        "gettingStarted": {
            "beginnerProject": "Monter un petit kit solaire autonome de 50 W avec batterie 12V pour alimenter une lampe LED et charger un téléphone.",
            "intermediateProject": "S'entraîner à dénuder un câble solaire de 6 mm² et sertir des connecteurs étanches MC4 mâle et femelle avec l'outil adapté.",
            "advancedProject": "Réaliser le schéma unifilaire complet d'une installation solaire de 3 kWc avec coffret DC, parafoudre, onduleur et raccordement au tableau principal.",
            "portfolioIdeas": ["Photos documentées d'une pose de panneaux dans les règles de l'art", "Schéma unifilaire conforme à la norme UTE C 15-712"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des drones équipés de caméras thermiques et guidés par IA survolent les grandes toitures pour repérer en quelques minutes les modules solaires en panne et générer la feuille de route du mainteneur.",
            "automatedTasks": ["Inspection thermique automatisée par drone sur les grands parcs solaires", "Diagnostic automatique des codes d'erreurs d'onduleurs via applications mobiles"],
            "emergingSkills": ["Utilisation d'applications de diagnostic connecté et guidage par lunettes connectées"],
            "humanEdge": "Le geste technique manuel d'étanchéité de toiture, le sang-froid en hauteur et l'habileté de câblage dans des combles étroits."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, des milliers de kits solaires et de pompes solaires agricoles sont installés chaque mois dans les zones rurales des régions de Kaolack, Tambacounda et Saint-Louis. Les techniciens installateurs et mainteneurs solaires y sont indispensables pour garantir l'accès à l'eau potable des forages et alimenter les dispensaires.",
            "localSectors": ["Entreprises sénégalaises d'énergie solaire (Nadji.Bi, Solene, Bonergie)", "Programmes d'électrification rurale de l'ASER", "Agro-pasteurs équipant leurs forages de pompage solaire"],
            "remoteWork": "Strictement impossible (métier 100% physique sur chantiers et toitures).",
            "entrepreneurship": "Création d'une entreprise locale de pose et de maintenance de pompes solaires pour les maraîchers des Niayes et du bassin arachidier."
        },
        "relatedJobSlugs": ["chef-projet-energie-solaire-photovoltaique", "technicien-solaire-thermique", "monteur-technicien-reseaux-electriques", "technicien-maintenance-eolienne"],
        "connectedFamilies": ["btp-architecture", "industrie-mecanique", "artisanat-metiers-dart"],
        "resources": [
            {"type": "article", "title": "Installateur solaire — Portail Energierecrute", "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php", "source": "Energierecrute"},
            {"type": "label", "title": "Qualit'EnR — Les qualifications des énergies renouvelables", "url": "https://www.qualit-enr.org/", "source": "Qualit'EnR"}
        ],
        "sources": ["Energierecrute", "Qualit'EnR", "FFB"],
        "interests": ["construire-fabriquer", "nature-environnement"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Un panneau solaire moderne produit en moyenne 25 à 30 fois plus d'électricité propre au cours de ses 30 années de durée de vie que l'énergie nécessaire pour le fabriquer et le recycler.",
            "pourquoi": "L'amortissement énergétique d'un capteur solaire est atteint en moins d'un an et demi sous le soleil européen, et en moins de 9 mois sous l'ensoleillement tropical d'Afrique de l'Ouest.",
            "a_retenir": "Le technicien du réel qui capte la puissance du ciel pour électrifier nos vies."
        }
    },

    # -----------------------------------------------------------------------
    # 7. TECHNICIEN EN SOLAIRE THERMIQUE & CHAUFFE-EAU SOLAIRE
    # -----------------------------------------------------------------------
    {
        "id": "technicien-solaire-thermique",
        "slug": "technicien-solaire-thermique",
        "title": "Technicien en Solaire Thermique & Chauffe-Eau Solaire",
        "aliases": ["Installateur de chauffe-eau solaire", "Plombier chauffagiste solaire", "Technicien capteurs thermiques"],
        "icon": "🌡️",
        "image": "https://images.unsplash.com/photo-1542332213-31f87348057f?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Énergie Solaire Photovoltaïque & Thermique",
        "domainId": "energie-solaire-pv-thermique",
        "subdomain": "Solaire thermique",
        "energyTechnology": ["Capteurs solaires thermiques", "Fluide caloporteur", "Ballon d'eau chaude solaire", "Plomberie"],
        "energySector": "Thermique & Plomberie",
        "sourceEnergierecrute": True,
        "isEmerging": False,
        "level": "CAP / Bac Pro Installateur Thermique ou Titre Pro Plombier Chauffagiste Solaire",
        "salary": "🇫🇷 France : 1 950 - 3 000 € net/mois (~27 000 - 42 000 € brut/an, Source : Energierecrute / Plomberie) • 🇸🇳 Sénégal : 220 000 - 800 000 FCFA / mois (Entreprises d'équipements thermiques et sanitaires)",
        "simpleDefinition": "Le technicien en solaire thermique installe et entretient des capteurs solaires vitrés ou sous vide qui absorbent le rayonnement du soleil pour chauffer un fluide caloporteur et produire de l'eau chaude sanitaire ou du chauffage pour les maisons, hôtels et hôpitaux.",
        "shortDescription": "Fiche de spécialité répertoriée par Energierecrute (filière EnR thermique), cet artisan des fluides convertit la chaleur directe du soleil pour décarboner la production d'eau chaude.",
        "longDescription": "Différencié du photovoltaïque qui produit de l'électricité, le technicien en solaire thermique documenté par Energierecrute est un spécialiste de la plomberie et des échanges thermiques. Il pose les capteurs plans ou tubes sous vide en toiture, pose les tuyauteries en cuivre calorifugées transportant le fluide caloporteur (mélange d'eau et de glycol antigel), raccorde le ballon solaire échangeur et programme la régulation électronique différentielle qui enclenche le circulateur lorsque le panneau est plus chaud que le ballon.",
        "mainObjective": "Capter un maximum de calories solaires pour couvrir 60% à 80% des besoins d'eau chaude sanitaire sans consommer d'électricité ni de gaz de réseau.",
        "companyRole": "Installateur expert de la chaleur renouvelable et des systèmes hydrauliques solaires.",
        "workEnvironment": [
            "☀️ Toitures et terrasses pour la pose des capteurs vitrés",
            "🏠 Chaufferies, sous-sols et locaux techniques pour l'installation des ballons de stockage et circulateurs",
            "🔧 Intervention dans l'habitat individuel, l'hôtellerie, les campings et les cliniques"
        ],
        "missions": [
            "Calculer l'inclinaison et l'orientation optimale des capteurs thermiques (idéalement 45° plein Sud)",
            "Installer les capteurs solaires en toiture en garantissant une étanchéité absolue de la couverture",
            "Poser les conduites en cuivre brasé et l'isolation thermique haute température contre les déperditions",
            "Remplir et purger le circuit primaire sous pression avec le fluide caloporteur antigel (propylène glycol)",
            "Programmer la régulation différentielle solaire et régler les sécurités de surchauffe (vase d'expansion solaire)"
        ],
        "typicalDay": [
            {"time": "08:15", "title": "Pose des capteurs en toiture", "desc": "Fixation de deux panneaux solaires thermiques de 2,5 m² chacun sur le toit d'une maison individuelle."},
            {"time": "10:45", "title": "Brasure des tuyauteries en chaufferie", "desc": "Brasure forte à l'argent des tubes cuivre reliant les capteurs au serpentin inférieur du ballon solaire de 300 L."},
            {"time": "14:00", "title": "Remplissage et épreuve de pression", "desc": "Injection à la pompe manuelle du fluide caloporteur sous 3 bars et vérification de l'absence de fuite au manomètre."},
            {"time": "16:15", "title": "Mise en service de la régulation", "desc": "Paramétrage de la sonde de température panneau (PT1000) et vérification du déclenchement du circulateur dès que delta T > 6°C."}
        ],
        "skills": {
            "technical": [
                "Plomberie, brasure forte au cuivre et raccordements hydrauliques étanches",
                "Thermodynamique des fluides caloporteurs, vases d'expansion et mitigeurs thermostatiques",
                "Couverture de toiture et règles d'intégration étanche des panneaux",
                "Régulation électronique différentielle et gestion des risques de surchauffe estivale (stagnation)"
            ],
            "human": [
                "Rigueur manuelle et minutie dans les soudures pour éviter toute fuite de fluide",
                "Agilité physique et respect strict des règles de sécurité en toiture",
                "Pédagogie pour expliquer à l'usager la gestion d'un chauffe-eau solaire en été",
                "Sens du diagnostic méthodique lors des pannes de circulation"
            ],
            "tools": [
                "Chalumeau oxy-acétylénique ou poste de brasure cuivre",
                "Station de remplissage et de purge solaire avec pompe manuelle",
                "Réfractomètre pour mesurer le dosage et le point de gel du fluide caloporteur",
                "Manomètres de pression et thermomètres de contact"
            ],
            "analytical": [
                "Évaluation du volume de stockage nécessaire (environ 50 L d'eau par mètre carré de capteur)",
                "Diagnostic de dégradation du fluide caloporteur par mesure de pH et réfractométrie"
            ]
        },
        "specializations": ["Chauffe-eau solaires individuels (CESI)", "Systèmes Solaires Combinés (SSC) eau chaude + chauffage au sol", "Grandes installations solaires thermiques collectives pour hôpitaux et hôtels"],
        "studies": {
            "pathway": [
                {"step": "Diplôme de base", "title": "CAP Monteur en Installations Thermiques ou Plombier", "desc": "Bases de la plomberie, du cintrage de tubes et de la brasure cuivre."},
                {"step": "Bac Pro spécialisé", "title": "Bac Pro Métiers du Froid et des Énergies Renouvelables (MFER)", "desc": "Perfectionnement en hydraulique thermique et circuits solaires."},
                {"step": "Qualification Professionnelle", "title": "Formation QualiSol (Chauffe-eau & Combi)", "desc": "Reconnaissance RGE indispensable pour faire bénéficier les clients d'aides financières."}
            ],
            "schools": [
                {"name": "Lycées professionnels du bâtiment et CFA de plomberie — France", "country": "France", "scope": "France"},
                {"name": "Centres de formation Qualit'EnR agréés QualiSol — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Dakar", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification QualiSol CESI / QualiSol Combi", "Habilitation manipulation des fluides sous pression"],
            "schoolSubjects": ["Hydraulique", "Thermodynamique", "Plomberie", "Sécurité travail en hauteur"]
        },
        "career": {
            "sectors": ["Entreprises artisanales de plomberie-chauffage et énergies renouvelables", "Sociétés d'entretien et de maintenance thermique", "Bureaux d'études spécialisés dans le solaire collectif"],
            "employerTypes": ["Installateurs chauffagistes", "PME de génie climatique", "Exploitants de réseaux de chaleur"],
            "evolution": "Technicien poseur ➔ Chauffagiste solaire confirmé ➔ Chef d'équipe énergies renouvelables ➔ Artisan chef d'entreprise",
            "pros": "Très haute satisfaction client (énergie gratuite du soleil pour l'eau chaude), métier alliant plomberie noble et technologie verte, excellent taux d'emploi.",
            "cons": "Interventions en toiture par fortes chaleurs, manipulation délicate de fluides sous pression lors des purges."
        },
        "gettingStarted": {
            "beginnerProject": "Observer le fonctionnement d'un chauffe-eau solaire en mesurant la température de l'eau en haut et en bas du ballon à midi.",
            "intermediateProject": "Réaliser une brasure forte propre entre deux tubes de cuivre de 18 mm et tester son étanchéité sous pression d'eau.",
            "advancedProject": "Calculer le dimensionnement des capteurs et du ballon solaire pour un hôtel de 20 chambres consommant 1 000 litres d'eau chaude à 60°C par jour.",
            "portfolioIdeas": ["Schéma de principe hydraulique d'un CESI", "Compte-rendu de maintenance annuelle avec contrôle du glycol au réfractomètre"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des régulateurs solaires connectés intègrent des prévisions météo par IA pour anticiper les journées ensoleillées et bloquer automatiquement l'appoint électrique.",
            "automatedTasks": ["Optimisation prédictive de l'enclenchement de l'appoint électrique selon la météo du lendemain", "Alerte automatique en cas de baisse anormale de pression du fluide"],
            "emergingSkills": ["Paramétrage de passerelles domotiques intelligentes connectées aux ballons solaires"],
            "humanEdge": "La dextérité manuelle pour réaliser des soudures étanches pendant 30 ans et le respect des règles de l'art du bâtiment."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal et dans la zone sahélienne, le chauffe-eau solaire thermique est d'une rentabilité éclatante avec plus de 300 jours d'ensoleillement par an. Les hôtels de la Petite Côte (Saly, Somone), les résidences de Dakar et les hôpitaux régionaux en équipent leurs toits pour supprimer leur plus gros poste de consommation électrique.",
            "localSectors": ["Entreprises d'installations solaires thermiques de Dakar et Thiès", "Secteur hôtelier et touristique de la Petite Côte et de Saint-Louis", "Cliniques et maternités rurales"],
            "remoteWork": "Strictement impossible (installation physique sur toiture et raccordement plomberie).",
            "entrepreneurship": "Création d'un atelier local d'assemblage et d'installation de chauffe-eau solaires thermosiphons à bas coût pour les ménages urbains et ruraux."
        },
        "relatedJobSlugs": ["installateur-mainteneur-photovoltaique", "technicien-genie-climatique-frigoriste", "technicien-etudes-thermiques-batiment", "charge-affaires-energetique-cvc"],
        "connectedFamilies": ["btp-architecture", "artisanat-metiers-dart", "environnement-climat"],
        "resources": [
            {"type": "article", "title": "Métier Technicien solaire thermique — Energierecrute", "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php", "source": "Energierecrute"},
            {"type": "portail", "title": "Solaire thermique collectif — SOCOL", "url": "https://www.solaire-collectif.fr/", "source": "SOCOL / ADEME"}
        ],
        "sources": ["Energierecrute", "SOCOL", "Qualit'EnR QualiSol"],
        "interests": ["construire-fabriquer", "nature-environnement"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Un chauffe-eau solaire thermique possède un rendement énergétique impressionnant de 70% à 80% de conversion des rayons du soleil en chaleur utile, soit près de quatre fois plus que le photovoltaïque.",
            "pourquoi": "Le capteur thermique piège directement la chaleur infrarouge par effet de serre sous son vitrage sélectif, sans avoir besoin de convertir la lumière en électrons.",
            "a_retenir": "Le maître de la chaleur solaire qui chauffe l'eau des foyers avec la pure énergie du ciel."
        }
    },

    # -----------------------------------------------------------------------
    # 8. CHEF DE PROJET ÉOLIEN (ONSHORE & OFFSHORE)
    # -----------------------------------------------------------------------
    {
        "id": "chef-projet-eolien-onshore-offshore",
        "slug": "chef-projet-eolien-onshore-offshore",
        "title": "Chef de Projet Éolien (Onshore & Offshore)",
        "aliases": ["Développeur de parcs éoliens", "Ingénieur chef de projet éolien en mer", "Responsable de programmes éoliens"],
        "icon": "🌬️",
        "image": "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Énergie Éolienne Onshore & Offshore",
        "domainId": "energie-eolienne-onshore-offshore",
        "subdomain": "Éolien",
        "energyTechnology": ["Éoliennes terrestres", "Éolien posé & flottant en mer", "Gisement anémométrique", "Réseaux haute tension"],
        "energySector": "Énergies Renouvelables",
        "sourceEnergierecrute": True,
        "isEmerging": False,
        "level": "Bac +5 (Ingénieur en Génie Énergétique, Électrique ou Maritime / Master EnR)",
        "salary": "🇫🇷 France : 3 000 - 5 200 € net/mois (~42 000 - 75 000 € brut/an, Source : Energierecrute / APEC) • 🇸🇳 Sénégal : 600 000 - 2 000 000 FCFA / mois (Grands parcs éoliens, Taïba N'Diaye)",
        "simpleDefinition": "Le chef de projet éolien pilote le développement de parcs éoliens terrestres ou maritimes (offshore), depuis l'analyse des vents et la concertation citoyenne jusqu'à la construction et au raccordement électrique des turbines géantes.",
        "shortDescription": "Fiche majeure du catalogue Energierecrute, ce stratège de grande envergure mène des projets d'infrastructures éoliennes mobilisant des dizaines de millions d'euros d'investissements.",
        "longDescription": "Répertorié parmi les fonctions phares des énergies renouvelables sur Energierecrute, le chef de projet éolien gère un projet industriel sur un cycle de 4 à 8 ans. Il sélectionne les zones ventées par analyse anémométrique (mâts de mesure, lidar), engage les études acoustiques, d'avifaune (oiseaux, chauves-souris) et paysagères, mène les enquêtes publiques, négocie les contrats de rachat d'électricité et coordonne les chantiers de génie civil (fondations géantes en béton ou fondations marines posées/flottantes) et de levage des éoliennes.",
        "mainObjective": "Développer et mener à l'exploitation des parcs éoliens performants, financièrement solides et pleinement acceptés par les territoires d'accueil.",
        "companyRole": "Leader d'affaires et chef d'orchestre des projets éoliens d'envergure nationale et internationale.",
        "workEnvironment": [
            "🏢 Entreprises de développement et d'exploitation de parcs éoliens (ENGIE, EDF Renouvelables, TotalEnergies, Iberdrola, RWE)",
            "🌬️ Déplacements fréquents sur les sites de parcs terrestres et zones portuaires maritimes",
            "🏛️ Réunions publiques avec maires, agriculteurs, pêcheurs (offshore) et préfets"
        ],
        "missions": [
            "Coordonner l'implantation de mâts de mesure de vent (LIDAR) et interpréter les données d'anémométrie sur plusieurs saisons",
            "Superviser les études d'impact environnemental (chiroptères, oiseaux migrateurs, faune marine)",
            "Piloter la concertation territoriale avec les élus locaux, riverains et comités des pêches pour l'offshore",
            "Déposer et défendre le dossier de demande d'autorisation environnementale unique en préfecture",
            "Négocier avec le gestionnaire de réseau (RTE/Senelec) le raccordement en poste source et préparer les appels d'offres"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Analyse de données anémométriques LIDAR", "desc": "Calcul de la vitesse moyenne du vent à 140 m de hauteur et simulation de la courbe de puissance sous WAsP."},
            {"time": "11:00", "title": "Réunion publique d'information citoyenne", "desc": "Présentation des photomontages paysagers et des retombées fiscales d'un projet de 6 éoliennes devant les habitants."},
            {"time": "14:30", "title": "Point technique génie civil des fondations", "desc": "Vérification des études géotechniques de sol pour le coulage de 600 m³ de béton armé par socle d'éolienne."},
            {"time": "16:45", "title": "Comité d'investissement projet", "desc": "Présentation du plan de financement et du taux de rentabilité interne (TRI) devant le comité de direction."}
        ],
        "skills": {
            "technical": [
                "Aérodynamique éolienne, mécanique des fluides et anémométrie (WAsP, WindPro)",
                "Génie électrique haute tension (HTA/HTB) et transformateurs de parc",
                "Droit de l'environnement, ICPE éolienne et procédures d'autorisation unique",
                "Gestion de projets complexes multi-acteurs et financements de projets bancaires"
            ],
            "human": [
                "Diplomatie exceptionnelle, écoute active et courage dans la concertation publique",
                "Ténacité face aux recours contentieux et aux temps longs de développement",
                "Leadership rassembleur pour piloter experts géologues, acousticiens et juristes",
                "Sens aigu de la pédagogie technique pour déconstruire les fausses croyances"
            ],
            "tools": [
                "WindPro, WAsP, Openwind",
                "QGIS, ArcGIS pour la cartographie des contraintes territoriales",
                "LIDAR anémométriques, stations météo de mesure",
                "Logiciels de modélisation 3D acoustique et paysagère"
            ],
            "analytical": [
                "Calcul de l'effet de sillage (wake effect) entre éoliennes pour minimiser les pertes de vent",
                "Optimisation du rapport investissement CAPEX / production OPEX"
            ]
        },
        "specializations": ["Développement de parcs éoliens terrestres (Onshore)", "Éolien en mer posé (fondations jackets / monopieux)", "Éolien en mer flottant de nouvelle génération (grandes profondeurs)"],
        "studies": {
            "pathway": [
                {"step": "Diplôme d'ingénieur", "title": "Diplôme d'Ingénieur Énergies Renouvelables, Mécanique ou Maritime", "desc": "Formation de référence pour maîtriser les aspects mécaniques, aérodynamiques et électriques des éoliennes."},
                {"step": "Master Spécialisé", "title": "Master Énergies Renouvelables Marines ou Droit de l'Énergie", "desc": "Perfectionnement en environnement maritime et concertation publique."},
                {"step": "Double compétence", "title": "Cursus combinant technique de l'énergie et gestion de projet", "desc": "Profil idéal pour évoluer rapidement vers la direction de projets internationaux."}
            ],
            "schools": [
                {"name": "Centrale Nantes / École Navale (filières éolien offshore) — France", "country": "France", "scope": "France"},
                {"name": "INSA Rouen / Polytech Nantes — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Polytechnique de Thiès (EPT) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification WindPro / WAsP", "Habilitation sécurité maritime BST (GWO - Global Wind Organisation)"],
            "schoolSubjects": ["Aérodynamique", "Mécanique des structures", "Droit de l'environnement", "Électrotechnique"]
        },
        "career": {
            "sectors": ["Développeurs et producteurs indépendants d'électricité éolienne (Iberdrola, EDF Renouvelables, Neoen)", "Constructeurs de turbines éoliennes (Vestas, Siemens Gamesa, Nordex, GE Vernova)", "Bureaux d'études d'impact environnemental et d'ingénierie marine"],
            "employerTypes": ["Producteurs d'électricité verte", "Grands énergéticiens", "Cabinets de conseil éolien"],
            "evolution": "Chef de projet junior ➔ Chef de projet confirmé ➔ Responsable pôle éolien régional ➔ Directeur du développement éolien national/offshore",
            "pros": "Projets monumentaux emblématiques de la transition énergétique, adrénaline des grands chantiers industriels, très fortes perspectives de carrière mondiales.",
            "cons": "Délais de développement longs (jusqu'à 7 ans pour un parc terrestre, 10 ans pour l'offshore), exposition médiatique et contestations locales."
        },
        "gettingStarted": {
            "beginnerProject": "Consulter l'Atlas Global du Vent (Global Wind Atlas) pour observer les zones côtières et terrestres les plus venteuses de son pays.",
            "intermediateProject": "Modéliser sous tableur l'énergie produite par une éolienne de 3 MW en fonction d'une distribution de vent de Weibull.",
            "advancedProject": "Rédiger une note de cadrage environnemental identifiant les couloirs de migration des oiseaux et les contraintes radar militaires pour l'implantation d'un parc de 5 éoliennes.",
            "portfolioIdeas": ["Analyse de productible éolien sous WindPro ou tableur", "Dossier de concertation territoriale simulé pour un projet éolien"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA pilote des caméras intelligentes montées sur les mâts pour détecter l'approche de grands oiseaux et ralentir automatiquement les pales pour éviter les collisions.",
            "automatedTasks": ["Détection vidéo en temps réel de rapaces par IA et arrêt préventif des pales", "Simulation automatique de centaines d'agencements de mâts pour minimiser l'effet de sillage"],
            "emergingSkills": ["Paramétrage de systèmes anticollision faune pilotés par vision artificielle"],
            "humanEdge": "La capacité d'écoute sincère, de respect des riverains et de négociation politique lors des réunions publiques houleuses."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le parc éolien de Taïba N'Diaye (158,7 MW) est le plus grand parc éolien en exploitation d'Afrique de l'Ouest avec ses 46 turbines géantes fournissant plus de 15% de l'électricité du pays. Les chefs de projets y gèrent la cohabitation avec les vergers d'arbres fruitiers (manguiers) et les compensations agricoles.",
            "localSectors": ["Parc éolien de Taïba N'Diaye (PETN / Lekela Power)", "Senelec (Société Nationale d'Électricité)", "Bureaux d'études d'impact environnemental sénégalais"],
            "remoteWork": "Hybride (visites de terrain / travail de bureau et relations institutionnelles).",
            "entrepreneurship": "Création d'un cabinet de conseil en suivi environnemental et sociétal pour les grands parcs éoliens et solaires en Afrique subsaharienne."
        },
        "relatedJobSlugs": ["technicien-maintenance-eolienne", "chef-projet-energie-solaire-photovoltaique", "ingenieur-smart-grids-reseaux-intelligents", "responsable-hse-sites-energetiques"],
        "connectedFamilies": ["environnement-climat", "direction-strategie", "industrie-mecanique"],
        "resources": [
            {"type": "article", "title": "Fiche Chef de projet éolien — Energierecrute", "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php", "source": "Energierecrute"},
            {"type": "organisation", "title": "France Renouvelables (ex-FEE)", "url": "https://france-renouvelables.fr/", "source": "France Renouvelables"}
        ],
        "sources": ["Energierecrute", "France Renouvelables", "Global Wind Energy Council (GWEC)"],
        "interests": ["nature-environnement", "construire-fabriquer", "negocier-convaincre"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Une éolienne moderne en mer (offshore) peut mesurer plus de 260 mètres de hauteur totale avec des pales de 107 mètres de long balayant une surface équivalente à six terrains de football d'un seul tour.",
            "pourquoi": "Un seul tour de pale de ces géantes des mers produit suffisamment d'électricité pour alimenter un foyer moyen pendant deux journées complètes.",
            "a_retenir": "Le bâtisseur des cathédrales du vent qui fait tourner la force de l'air en électricité pour des millions d'habitants."
        }
    },

    # -----------------------------------------------------------------------
    # 9. TECHNICIEN DE MAINTENANCE ÉOLIENNE (ONSHORE & OFFSHORE)
    # -----------------------------------------------------------------------
    {
        "id": "technicien-maintenance-eolienne",
        "slug": "technicien-maintenance-eolienne",
        "title": "Technicien de Maintenance Éolienne (Onshore & Offshore)",
        "aliases": ["Technicienne éolien", "Électromécanicien éolien en mer", "Grimpeur technicien éolien"],
        "icon": "⚙️",
        "image": "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Énergie Éolienne Onshore & Offshore",
        "domainId": "energie-eolienne-onshore-offshore",
        "subdomain": "Maintenance de turbines éoliennes",
        "energyTechnology": ["Turbines éoliennes", "Multiplicateurs de vitesse", "Génératrices synchrones", "Hydraulique de pas"],
        "energySector": "Maintenance & Électromécanique",
        "sourceEnergierecrute": True,
        "isEmerging": False,
        "level": "Bac Pro Électrotechnique, BTS Maintenance des Systèmes (Option Éolien) ou Titre BZE",
        "salary": "🇫🇷 France : 2 200 - 3 600 € net/mois + primes de grand déplacement (~30 000 - 52 000 € brut/an, Source : Energierecrute / Éolien) • 🇸🇳 Sénégal : 350 000 - 1 200 000 FCFA / mois (Parcs éoliens industriels de Taïba N'Diaye)",
        "simpleDefinition": "Le technicien de maintenance éolienne escalade les mâts pour inspecter, entretenir et dépanner la mécanique, l'hydraulique et l'électronique de puissance situées dans la nacelle à plus de 100 mètres de hauteur, sur terre comme en mer.",
        "shortDescription": "Métier spectaculaire et très recherché documenté par les formations d'Energierecrute (maintenance éolienne et offshore), il assure la disponibilité opérationnelle des turbines par tous les temps.",
        "longDescription": "Mis en avant dans les offres et cursus de maintenance spécialisée sur Energierecrute, ce technicien hors pair intervient au sommet des éoliennes. En binôme permanent et équipé d'équipements de sécurité certifiés GWO (Global Wind Organisation), il réalise l'entretien préventif des engrenages du multiplicateur, vidange les huiles, contrôle le serrage des pales au couple, dépanne les systèmes hydrauliques d'orientation (pitch) et répare les convertisseurs électroniques de fréquence. En offshore, il embarque sur des navires spécialisés (CTV) et intervient en haute mer.",
        "mainObjective": "Maximiser le taux de disponibilité technique des éoliennes et réduire à zéro les temps d'arrêt non planifiés dans le respect absolu de la sécurité en hauteur.",
        "companyRole": "Opérateur de pointe assurant la santé mécanique et électrique des parcs éoliens.",
        "workEnvironment": [
            "🌬️ Nacelles étroites d'éoliennes situées entre 80 et 150 mètres au-dessus du sol ou des flots",
            "🚢 Navires de transfert d'équipage (CTV) et plateformes marines pour l'éolien offshore",
            "🛠️ Déplacements en équipe de deux techniciens minimum (règle de sécurité impérative)"
        ],
        "missions": [
            "Monter dans les mâts à l'aide d'échelles équipées d'antichutes ou d'élévateurs de service de nacelle",
            "Réaliser les contrôles d'alignement laser de la génératrice et du multiplicateur de vitesse",
            "Effectuer les vidanges d'huile haute température, le graissage des roulements et le remplacement des filtres",
            "Diagnostiquer les pannes électriques (automates programmables, capteurs anémométriques, convertisseurs)",
            "Inspecter l'état structurel des pales en composite de fibre de verre (fissures, impacts de foudre)"
        ],
        "typicalDay": [
            {"time": "07:30", "title": "Briefing sécurité et météo à la base de maintenance", "desc": "Vérification des prévisions de vent (vitesse < 12 m/s autorisée pour monter) et contrôle des harnais et longes de sécurité."},
            {"time": "08:45", "title": "Ascension de la tour de 120 mètres", "desc": "Montée par ascenseur de mât puis échelle de secours jusqu'à la nacelle avec l'outillage et les pièces de rechange."},
            {"time": "11:00", "title": "Dépannage du système hydraulique de pitch", "desc": "Remplacement d'une électrovanne fuyante sur le vérin de calage de la pale numéro 2 et purge du circuit sous 180 bars."},
            {"time": "14:30", "title": "Test de redémarrage et remise en production", "desc": "Lancement du cycle automatique de synchronisation avec le réseau électrique et surveillance des vibrations."},
            {"time": "16:45", "title": "Rédaction du compte-rendu sous GMAO", "desc": "Saisie des pièces changées et clôture du bon d'intervention sur la tablette de maintenance connectée."}
        ],
        "skills": {
            "technical": [
                "Électromécanique, mécanique lourde d'engrenages et alignement laser d'arbres tournants",
                "Hydraulique industrielle haute pression (vérins de pas de pale, freins aérodynamiques)",
                "Électronique de puissance et automates programmables industriels (PLC)",
                "Normes et gestes de sécurité de travail en hauteur et secours en espace confiné (standard GWO)"
            ],
            "human": [
                "Excellente condition physique, endurance et absence absolue de vertige",
                "Esprit d'équipe indéfectible et communication constante avec son binôme",
                "Sang-froid et rigueur totale face aux procédures de sécurité et d'urgence",
                "Capacité d'adaptation face aux conditions météorologiques changeantes"
            ],
            "tools": [
                "Clés dynamométriques et visseuses hydrauliques à fort couple (serrage de boulons M36 à plus de 1 500 Nm)",
                "Appareils d'alignement laser d'arbres et collecteurs de vibrations",
                "Multimètres, caméras d'inspection endoscopique pour boîtes de vitesses",
                "Harnais de sécurité intégrale, antichutes à rappel automatique et descendeurs de secours"
            ],
            "analytical": [
                "Analyse des spectres vibratoires pour détecter l'ébréchure d'une dent d'engrenage avant la casse",
                "Interprétation des codes d'erreurs du système SCADA de télégestion de l'éolienne"
            ]
        },
        "specializations": ["Maintenance électromécanique de turbines éoliennes terrestres", "Maintenance éolienne en mer (Offshore) avec hélitreuillage et transfert maritime", "Réparation et inspection cordiste de pales composites en hauteur"],
        "studies": {
            "pathway": [
                {"step": "Diplôme socle Bac +2", "title": "BTS Maintenance des Systèmes (Option Éolien) ou BTS Électrotechnique", "desc": "Formation technique de référence en mécanique, électricité et automatisme."},
                {"step": "Qualification Professionnelle", "title": "Titre Professionnel de Technicien de Maintenance Éolienne (BZE / Greta)", "desc": "Formation reconnue par Energierecrute axée sur l'immersion pratique en nacelle."},
                {"step": "Certification Internationale", "title": "Certification GWO (Global Wind Organisation) — Modules obligatoires", "desc": "Travail en hauteur, premiers secours, manipulation manuelle, incendie et survie en mer (Sea Survival)."}
            ],
            "schools": [
                {"name": "Lycées et centres préparant à la formation BZE / GWO — France", "country": "France", "scope": "France"},
                {"name": "Lycée technique de Fécamp / Cherbourg (filières éolien en mer) — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Dakar", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat GWO BST (Basic Safety Training)", "Habilitations électriques B2V / H2V / BR Éolien", "Certificat d'Aptitude Médicale au travail en hauteur et en mer"],
            "schoolSubjects": ["Électromécanique", "Hydraulique", "Sécurité travail en hauteur", "Automatisme"]
        },
        "career": {
            "sectors": ["Constructeurs mondiaux d'éoliennes (Vestas, Siemens Gamesa, Nordex, GE Vernova)", "Sociétés de maintenance multi-marques spécialisées (Deutsche Windtechnik, FairWind, Enertrag)", "Exploitants de parcs de production d'énergie renouvelable"],
            "employerTypes": ["Constructeurs d'éoliennes", "Prestataires de maintenance O&M", "Grands énergéticiens"],
            "evolution": "Technicien de maintenance junior ➔ Technicien senior / Team Leader ➔ Superviseur technique de parc éolien ➔ Responsable régional de maintenance",
            "pros": "Métier d'aventure et de grand air, camaraderie soudée entre techniciens, vues spectaculaires depuis les nacelles, rémunérations valorisées avec primes.",
            "cons": "Déplacements permanents (itinérance régionale ou nationale), contraintes physiques de l'ascension quotidienne, travail en milieu marin éprouvant."
        },
        "gettingStarted": {
            "beginnerProject": "S'entraîner à la lecture d'un schéma hydraulique industriel de vérin à double effet avec clapet anti-retour.",
            "intermediateProject": "Réaliser le contrôle d'isolement d'un moteur triphasé et mesurer la résistance de ses bobinages au multimètre.",
            "advancedProject": "Simuler une procédure d'évacuation d'urgence d'une nacelle d'éolienne avec utilisation d'un descendeur à vitesse constante.",
            "portfolioIdeas": ["Compte-rendu d'intervention de maintenance préventive", "Attestation de formation aux premiers secours et travail en hauteur"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "La maintenance prédictive par IA analyse en continu les vibrations et la température des roulements pour alerter le technicien des semaines avant qu'une défaillance mécanique ne survienne.",
            "automatedTasks": ["Analyse prédictive des capteurs d'huile et de température par réseaux de neurones", "Génération automatique des listes de pièces détachées à emporter en nacelle"],
            "emergingSkills": ["Utilisation de jumeaux numériques d'éoliennes pour préparer les interventions à distance"],
            "humanEdge": "La dextérité physique pour monter à 120 m, manœuvrer des pièces lourdes dans un espace confiné et porter secours à son collègue en cas d'accident."
        },
        "africaContext": {
            "senegalInsight": "Sur le parc éolien de Taïba N'Diaye au Sénégal, des équipes de techniciens sénégalais formés aux standards internationaux GWO assurent la maintenance quotidienne des 46 éoliennes Vestas de 3,45 MW, garantissant une disponibilité supérieure à 97% malgré les vents de poussière sahéliens (Harmattan).",
            "localSectors": ["Parc éolien de Taïba N'Diaye (PETN)", "Sous-traitants techniques de Senelec", "Centres de maintenance électromécanique industrielle de Thiès"],
            "remoteWork": "Strictement impossible (100% terrain sur le parc éolien et dans les nacelles).",
            "entrepreneurship": "Création d'une PME spécialisée dans le nettoyage des pales et la maintenance électromécanique des équipements éoliens et solaires en Afrique de l'Ouest."
        },
        "relatedJobSlugs": ["chef-projet-eolien-onshore-offshore", "installateur-mainteneur-photovoltaique", "monteur-technicien-reseaux-electriques", "technicien-maintenance-nucleaire"],
        "connectedFamilies": ["industrie-mecanique", "securite-defense", "environnement-climat"],
        "resources": [
            {"type": "formation", "title": "Formation maintenance éolienne offshore — Energierecrute", "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php?page=5", "source": "Energierecrute"},
            {"type": "standard", "title": "Global Wind Organisation (GWO) — Standards de sécurité", "url": "https://www.globalwindsafety.org/", "source": "GWO"}
        ],
        "sources": ["Energierecrute", "GWO", "France Renouvelables"],
        "interests": ["construire-fabriquer", "nature-environnement"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Pour accéder à la nacelle d'une éolienne moderne, un technicien gravit l'équivalent d'un immeuble de 40 étages, parfois à la force des bras et des jambes lorsque l'ascenseur de mât est en révision.",
            "pourquoi": "Ce métier exige une forme physique d'athlète et une rigueur totale, chaque montée étant précédée d'un contrôle scrupuleux de tous les points d'ancrage.",
            "a_retenir": "L'alpiniste de la transition énergétique qui maintient les géantes du vent en action."
        }
    },

    # -----------------------------------------------------------------------
    # 10. INGÉNIEUR EN HYDROÉLECTRICITÉ & OUVRAGES HYDRAULIQUES
    # -----------------------------------------------------------------------
    {
        "id": "ingenieur-hydroelectricite-barrages",
        "slug": "ingenieur-hydroelectricite-barrages",
        "title": "Ingénieur en Hydroélectricité & Ouvrages Hydrauliques",
        "aliases": ["Ingénieur hydroélectricien", "Ingénieur barrages et usines hydroélectriques", "Chef de projet aménagements hydrauliques"],
        "icon": "💧",
        "image": "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Hydroélectricité & Aménagements Hydrauliques",
        "domainId": "hydroelectricite-hydraulique",
        "subdomain": "Hydroélectricité",
        "energyTechnology": ["Turbines Pelton/Francis/Kaplan", "Barrages réservoirs", "Conduites forcées", "STEP (Pompage-turbinage)"],
        "energySector": "Hydroélectricité & Génie Civil",
        "sourceEnergierecrute": True,
        "isEmerging": False,
        "level": "Bac +5 (Ingénieur en Mécanique des Fluides, Hydraulique ou Génie Civil)",
        "salary": "🇫🇷 France : 3 000 - 5 200 € net/mois (~42 000 - 75 000 € brut/an, Source : Energierecrute / APEC) • 🇸🇳 Sénégal : 600 000 - 2 200 000 FCFA / mois (OMVS, barrages de Manantali, Félou, Gouina)",
        "simpleDefinition": "L'ingénieur hydroélectricien conçoit, modernise et supervise l'exploitation des barrages, usines hydroélectriques et stations de pompage-turbinage (STEP) qui transforment la force de l'eau en électricité pilotable et stockable.",
        "shortDescription": "Métier historique et stratégique de l'énergie répertorié par Energierecrute, ce spécialiste de la houille blanche gère la première source d'électricité renouvelable pilotable au monde.",
        "longDescription": "Comme documenté dans les fiches et classifications de production électrique sur Energierecrute, l'ingénieur hydroélectricien intervient à la croisée de l'hydraulique, de la mécanique lourde, du génie civil et de l'électrotechnique. Il dimensionne les turbines (Pelton pour hautes chutes, Francis pour moyennes chutes, Kaplan pour basses chutes), supervise la sécurité et l'auscultation des barrages, optimise le turbinage en fonction des débits des fleuves et déploie des stations de pompage-turbinage (STEP), véritables batteries d'eau indispensables pour équilibrer les réseaux électriques.",
        "mainObjective": "Valoriser au maximum le potentiel énergétique des cours d'eau tout en assurant la sûreté des barrages et la continuité écologique des rivières.",
        "companyRole": "Concepteur et garant de la sécurité et de la puissance des aménagements hydroélectriques.",
        "workEnvironment": [
            "💧 Usines hydroélectriques souterraines et centrales au fil de l'eau",
            "🏔️ Barrages d'altitude, retenues d'eau et vallées fluviales",
            "🏢 Sièges des grands exploitants hydroélectriques (EDF Hydro, CNR, SHEM, OMVS)"
        ],
        "missions": [
            "Dimensionner les composants hydrauliques des usines (conduites forcées, cheminées d'équilibre, répartiteurs)",
            "Sélectionner et modéliser les profils de turbines hydrauliques (Pelton, Francis, Kaplan) pour maximiser le rendement",
            "Ausculter les barrages (pendules de déplacement, piézomètres, déformations) pour garantir leur sûreté absolue",
            "Piloter des projets de réhabilitation de groupes de production hydroélectrique centenaires",
            "Concevoir des dispositifs de franchissement piscicole (passes à poissons, dévalaison) pour préserver la faune aquatique"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Auscultation géotechnique du barrage", "desc": "Contrôle des relevés de fuites et des mouvements millimétriques de la voûte en béton d'un barrage-voûte de 80 m."},
            {"time": "11:00", "title": "Modélisation de coup de bélier", "desc": "Calcul sous logiciel hydraulique des surpressions lors de la fermeture d'urgence des vannes d'une conduite forcée."},
            {"time": "14:30", "title": "Inspection de la roue de turbine Francis", "desc": "Examen visuel et contrôle non destructif par ressuage des aubes de la turbine pour déceler d'éventuelles traces de cavitation."},
            {"time": "16:45", "title": "Réunion sur le débit réservé avec l'Agence de l'Eau", "desc": "Ajustement du débit d'eau minimal restitué au cours d'eau pour concilier production d'énergie et vie biologique de la rivière."}
        ],
        "skills": {
            "technical": [
                "Mécanique des fluides incompressibles et hydraulique en charge et à surface libre",
                "Turbomachines hydrauliques (conception de roues Pelton, Francis, Kaplan, alternateurs)",
                "Génie civil et géotechnique des grands barrages (béton, enrochements, fondations)",
                "Réglementation de la sécurité des ouvrages hydrauliques et plans particuliers d'intervention (PPI)"
            ],
            "human": [
                "Sens aigu des responsabilités face à la sûreté publique des ouvrages hydrauliques",
                "Rigueur d'analyse physique et vision pluridisciplinaire (eau, mécanique, électricité)",
                "Aptitude au dialogue avec les parties prenantes de l'eau (pêcheurs, agriculteurs, parcs naturels)",
                "Capacité de coordination sur des chantiers d'envergure en milieu escarpé"
            ],
            "tools": [
                "Logiciels de modélisation hydraulique (ANSYS CFX, SIMSEN, Telemac)",
                "Appareils d'auscultation de barrages (inclinomètres, extensomètres, piézomètres)",
                "Outils de CAO 3D et SIG",
                "Systèmes de supervision et téléconduite SCADA de centrales"
            ],
            "analytical": [
                "Optimisation du turbinage par rapport aux cours horaires de l'électricité sur le marché spot",
                "Modélisation des phénomènes d'ondes de submersion en cas de crue millénale"
            ]
        },
        "specializations": ["Grandes usines et barrages de haute chute", "Stations de Transfert d'Énergie par Pompage (STEP - stockage de masse)", "Génie civil, diagnostic et réhabilitation des ouvrages hydrauliques anciens"],
        "studies": {
            "pathway": [
                {"step": "Diplôme d'ingénieur", "title": "Diplôme d'Ingénieur en Hydraulique, Mécanique des Fluides ou Génie Civil", "desc": "Formation de référence dispensée par les grandes écoles d'hydraulique."},
                {"step": "Master Spécialisé", "title": "Master Ouvrages d'Art et Barrages ou Énergie Hydroélectrique", "desc": "Approfondissement en dynamique des structures et mécanique des roches."},
                {"step": "Formation continue", "title": "Agrément d'expert en sûreté des ouvrages hydrauliques", "desc": "Habilitation d'État pour signer les rapports de visite technique approfondie (VTA)."}
            ],
            "schools": [
                {"name": "Grenoble INP — Ense3 (leader historique de l'hydroélectricité) — France", "country": "France", "scope": "France"},
                {"name": "ENSEEIHT Toulouse / École des Ponts ParisTech — France", "country": "France", "scope": "France"},
                {"name": "École Polytechnique de Thiès (EPT) / Génie Civil & Hydraulique — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) / Hydraulique — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "2iE (Institut International d'Ingénierie de l'Eau et de l'Environnement) — Burkina Faso", "country": "Burkina Faso", "scope": "Afrique"}
            ],
            "certifications": ["Agrément Expert Barrages délivré par le Ministère", "Habilitation H0/B0 et sécurité travaux hydrauliques"],
            "schoolSubjects": ["Hydraulique générale", "Mécanique des fluides", "Génie civil", "Électrotechnique"]
        },
        "career": {
            "sectors": ["Exploitants historiques d'hydroélectricité (EDF Hydro, Compagnie Nationale du Rhône CNR, SHEM)", "Sociétés de développement des bassins fluviaux (OMVS, OMVG en Afrique de l'Ouest)", "Bureaux d'ingénierie et de conseil international (Tractebel, Artelia, Egis)"],
            "employerTypes": ["Producteurs hydroélectriques", "Organisations régionales de bassins fluviaux", "Bureaux d'études internationaux"],
            "evolution": "Ingénieur d'études junior ➔ Chef de projet aménagements hydrauliques ➔ Responsable d'exploitation de groupement d'usines ➔ Directeur de pôle hydraulique",
            "pros": "Ouvrages majeurs construits pour durer plus d'un siècle, métier combinant nature majestueuse et haute technicité, rôle clé dans la stabilité du réseau électrique.",
            "cons": "Astreintes d'exploitation lors des périodes de crues, chantiers souvent isolés dans des vallées encaissées."
        },
        "gettingStarted": {
            "beginnerProject": "Calculer la puissance théorique (P = rho * g * Q * H) d'une chute d'eau de 50 mètres avec un débit de 2 m³/s.",
            "intermediateProject": "Dresser un tableau comparatif des plages d'utilisation des turbines Pelton, Francis et Kaplan selon la hauteur de chute et le débit.",
            "advancedProject": "Concevoir le prédimensionnement d'une conduite forcée en acier pour une usine hydroélectrique de 10 MW en minimisant les pertes de charge.",
            "portfolioIdeas": ["Note de calcul de puissance et choix de turbine", "Étude d'auscultation simplifiée d'un barrage en remblai"]
        },
        "aiImpact": {
            "level": "Modéré à Élevé",
            "summary": "L'IA analyse les prévisions météorologiques satellitaires et la fonte des neiges pour anticiper les apports d'eau dans les réservoirs et maximiser le stockage d'électricité.",
            "automatedTasks": ["Prévision hydrologique des débits de fleuves par réseaux de neurones", "Traitement automatisé des données des capteurs d'auscultation de barrage"],
            "emergingSkills": ["Utilisation de modèles d'IA hydro-météorologiques pour le pilotage de réservoirs"],
            "humanEdge": "La responsabilité ultime de déclenchement des évacuateurs de crues lors des tempêtes pour protéger les vies humaines en aval."
        },
        "africaContext": {
            "senegalInsight": "Pour le Sénégal, l'hydroélectricité du fleuve Sénégal gérée par l'OMVS (Organisation pour la Mise en Valeur du fleuve Sénégal) est un pilier de souveraineté énergétique à travers les barrages de Manantali (200 MW), Félou (60 MW) et Gouina (140 MW), qui injectent une électricité propre et bon marché sur le réseau interconnecté de Senelec.",
            "localSectors": ["OMVS (Organisation pour la Mise en Valeur du fleuve Sénégal)", "Senelec (Direction de la Production Hydraulique)", "OMVG (Organisation pour la Mise en Valeur du fleuve Gambie - barrage de Sambangalou)"],
            "remoteWork": "Faible (présence indispensable sur les ouvrages hydrauliques et usines de production).",
            "entrepreneurship": "Création d'un cabinet d'ingénierie conseil en diagnostic environnemental et sédimentaire des retenues de barrages en Afrique de l'Ouest."
        },
        "relatedJobSlugs": ["technicien-exploitation-micro-hydraulique", "ingenieur-smart-grids-reseaux-intelligents", "technicien-exploitation-supervision-reseaux", "chef-projet-eolien-onshore-offshore"],
        "connectedFamilies": ["environnement-climat", "btp-architecture", "industrie-mecanique"],
        "resources": [
            {"type": "article", "title": "Métiers de l'hydroélectricité — Portail Energierecrute", "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php", "source": "Energierecrute"},
            {"type": "institution", "title": "Comité Français des Barrages et Réservoirs (CFBR)", "url": "https://www.barrages-cfbr.eu/", "source": "CFBR"}
        ],
        "sources": ["Energierecrute", "CFBR", "OMVS", "EDF Hydro"],
        "interests": ["nature-environnement", "construire-fabriquer", "donnees-chiffres"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Les Stations de Transfert d'Énergie par Pompage (STEP) représentent à elles seules plus de 90% de la capacité mondiale de stockage d'électricité de tout le réseau électrique de la planète.",
            "pourquoi": "Quand l'électricité est abondante et peu chère, l'eau est pompée vers le bassin supérieur ; quand la demande explose, l'eau est turbinée en quelques minutes pour sauver le réseau du black-out.",
            "a_retenir": "Le maître de l'eau et des turbines qui sécurise l'énergie décarbonée à grande échelle."
        }
    },

    # -----------------------------------------------------------------------
    # 11. TECHNICIEN D'EXPLOITATION & MAINTENANCE EN MICRO-HYDRAULIQUE
    # -----------------------------------------------------------------------
    {
        "id": "technicien-exploitation-micro-hydraulique",
        "slug": "technicien-exploitation-micro-hydraulique",
        "title": "Technicien d'Exploitation & Maintenance en Micro-Hydraulique",
        "aliases": ["Technicienne petite centrale hydroélectrique", "Meunier électromécanicien moderne", "Exploitant de centrale au fil de l'eau"],
        "icon": "🌊",
        "image": "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Hydroélectricité & Aménagements Hydrauliques",
        "domainId": "hydroelectricite-hydraulique",
        "subdomain": "Micro-hydraulique",
        "energyTechnology": ["Micro-turbines hydrauliques", "Dégrilleurs automatiques", "Génératrices asynchrones", "Passes à poissons"],
        "energySector": "Hydroélectricité de Proximité",
        "sourceEnergierecrute": True,
        "isEmerging": False,
        "level": "Bac Pro Électromécanique, BTS Maintenance des Systèmes ou BTS Électrotechnique",
        "salary": "🇫🇷 France : 2 000 - 3 100 € net/mois (~28 000 - 44 000 € brut/an, Source : Energierecrute / Petite Hydro) • 🇸🇳 Sénégal : 250 000 - 900 000 FCFA / mois (Micro-centrales régionales, cours d'eau pérennes)",
        "simpleDefinition": "Le technicien en micro-hydraulique assure le bon fonctionnement quotidien de petites centrales électriques (puissance inférieure à 10 MW) implantées sur des rivières ou des canaux : il nettoie les grilles, entretient les turbines et répare les génératrices et armoires d'automatisme.",
        "shortDescription": "Spécialité expressément citée par les formations référencées par Energierecrute (EnR micro-hydraulique), ce professionnel polyvalent produit de l'électricité verte au cœur des cours d'eau de proximité.",
        "longDescription": "Différencié des méga-barrages, le métier en micro-hydraulique documenté par Energierecrute concerne les centrales au fil de l'eau, les anciens moulins réhabilités et les conduites d'eau potable turbinées. Le technicien surveille le débit de la rivière, entretient les dégrilleurs automatiques pour évacuer feuilles et branchages, graisse les paliers des turbines (vis d'Archimède, turbines Banki-Michell, micro-Kaplan), contrôle les armoires d'injection électrique sur le réseau basse et moyenne tension, et veille au strict maintien du débit réservé pour la survie des poissons.",
        "mainObjective": "Maintenir en rotation continue les micro-turbines hydrauliques pour produire une électricité décentralisée et régulière au fil de l'eau.",
        "companyRole": "Praticien de proximité garant de la production continue des petites centrales hydroélectriques.",
        "workEnvironment": [
            "🌊 Bords de rivières, canaux d'amenée d'anciens moulins et gorges de moyenne montagne",
            "⚙️ Petites usines hydroélectriques automatisées et salles de machines au ras de l'eau",
            "🌧️ Interventions extérieures en toutes saisons et parfois par temps de crue"
        ],
        "missions": [
            "Inspecter quotidiennement les prises d'eau et s'assurer du bon dégrillage automatique des débris flottants",
            "Assurer la maintenance mécanique des turbines hydrauliques (vis d'Archimède, micro-turbines Francis/Kaplan)",
            "Entretenir les génératrices électriques, les courroies de transmission et les paliers lubrifiés",
            "Contrôler les automates de régulation asservis au niveau d'eau amont et aux compteurs de débits réservés",
            "Entretenir et nettoyer les passes à poissons et dispositifs de dévalaison pour préserver la biodiversité aquatique"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Tournée de contrôle de la prise d'eau", "desc": "Évacuation des branches accumulées au dégrilleur et vérification du débit minimal restitué à la rivière."},
            {"time": "10:00", "title": "Graissage et contrôle des températures de paliers", "desc": "Prise de température au thermomètre infrarouge sur le palier avant de la turbine Banki de 250 kW."},
            {"time": "13:30", "title": "Dépannage d'un capteur de niveau ultrasonique", "desc": "Remplacement du capteur piézoélectrique de niveau amont et recalibrage de la boucle de régulation 4-20 mA."},
            {"time": "16:00", "title": "Relevé des compteurs d'injection réseau", "desc": "Contrôle de la production électrique quotidienne injectée sur le réseau Enedis/local et télétransmission des données."}
        ],
        "skills": {
            "technical": [
                "Mécanique générale, lignage d'arbres, roulements et réducteurs",
                "Électrotechnique moyenne et basse tension, armoires de relayage et automates programmables",
                "Hydraulique fluviale de surface libre et mécanique des vannes de décharge",
                "Réglementation environnementale des cours d'eau (loi sur l'eau, débit réservé, continuité écologique)"
            ],
            "human": [
                "Grande autonomie et sens de la débrouillardise sur des sites isolés",
                "Amour authentique de la nature et respect méticuleux des écosystèmes fluviaux",
                "Prudence rigoureuse lors du travail à proximité de l'eau en crue (risque de noyade)",
                "Polyvalence manuelle entre électricité, mécanique et maçonnerie de berge"
            ],
            "tools": [
                "Clés mécaniques, extracteurs de roulements, palans de levage",
                "Détecteurs de niveau d'eau ultrasoniques et capteurs de pression piézométriques",
                "Multimètres, contrôleurs d'isolement et pinces ampèremétriques",
                "Bottes de sécurité cuissardes, gilets de sauvetage automatiques et lignes de vie de berge"
            ],
            "analytical": [
                "Ajustement de la vitesse de rotation de la turbine pour maximiser le rendement lors des périodes de basses eaux",
                "Analyse des courbes de corrélation pluie-débit pour anticiper les crues"
            ]
        },
        "specializations": ["Réhabilitation de moulins historiques en micro-centrales hydroélectriques", "Turbinage sur réseaux d'eau potable et d'eaux usées", "Automatisation et télégestion de micro-centrales isolées"],
        "studies": {
            "pathway": [
                {"step": "Formation de base", "title": "Bac Pro MELEC ou BTS Électrotechnique / Maintenance", "desc": "Compétences clés en maintenance mécanique et circuits électriques industriels."},
                {"step": "Spécialisation EnR", "title": "Licence Pro MEER — Spécialité Énergies Renouvelables Hydrauliques", "desc": "Formation citée par Energierecrute couvrant la petite hydraulique et la production décentralisée."},
                {"step": "Formation terrain", "title": "Certificat de spécialisation Petite Hydroélectricité (France Hydro Électricité)", "desc": "Perfectionnement aux technologies spécifiques de la petite hydro."}
            ],
            "schools": [
                {"name": "IUT et universités partenaires de la filière MEER — France", "country": "France", "scope": "France"},
                {"name": "Lycées professionnels de montagne et des vallées fluviales — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Dakar", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification Sauvetage aquatique et travail près de l'eau", "Habilitation électrique BR / BC"],
            "schoolSubjects": ["Électromécanique", "Hydraulique", "Automatisme", "Droit de l'eau"]
        },
        "career": {
            "sectors": ["Producteurs indépendants de petite hydroélectricité (PME familiales, meuniers)", "Filiales régionales des énergéticiens (Dalkia, EDF Petite Hydro, Boralex)", "Collectivités gestionnaires de canaux d'irrigation et régies municipales d'eau"],
            "employerTypes": ["Producteurs indépendants de petite hydro", "Régies municipales d'électricité", "Sociétés d'ingénierie et d'exploitation hydroélectrique"],
            "evolution": "Technicien de centrale ➔ Responsable d'exploitation de plusieurs centrales de vallée ➔ Chef de projet réhabilitation petite hydro",
            "pros": "Grande autonomie quotidienne en pleine nature, métier concret redonnant vie au patrimoine des rivières, production d'énergie continue 24h/24.",
            "cons": "Interventions d'urgence en cas d'engorgement lors de crues torrentielles, travail parfois isolé en fond de vallée."
        },
        "gettingStarted": {
            "beginnerProject": "Visiter un ancien moulin à eau ou une micro-centrale et identifier le cheminement de l'eau (prise d'eau, canal, turbine, restitution).",
            "intermediateProject": "Calculer l'énergie annuelle produite par une micro-turbine de 100 kW tournant 6 000 heures par an et estimer son chiffre d'affaires à 10 centimes le kWh.",
            "advancedProject": "Dessiner le schéma de principe électrique d'une génératrice asynchrone raccordée au réseau avec condensateurs de compensation de puissance réactive.",
            "portfolioIdeas": ["Schéma fonctionnel d'une micro-centrale au fil de l'eau", "Rapport d'audit de continuité écologique d'un seuil en rivière"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des caméras IA surveillent les grilles de prise d'eau pour déclencher le dégrilleur uniquement en cas d'amas de feuilles, économisant l'énergie d'auxiliaires.",
            "automatedTasks": ["Détection automatique d'embâcles et de branchages par vision artificielle", "Optimisation automatisée de l'ouverture des directrices de turbine selon le niveau d'eau"],
            "emergingSkills": ["Téléconduite de micro-centrales via applications mobiles sécurisées"],
            "humanEdge": "Le savoir-faire pratique pour décoincer un tronc d'arbre dans une vanne et l'oreille attentive au bruit d'un roulement qui commence à fatiguer."
        },
        "africaContext": {
            "senegalInsight": "En Afrique de l'Ouest et dans les zones frontalières du sud du Sénégal (régions de Kédougou et Casamance), des cours d'eau pérennes et des cascades offrent des opportunités remarquables de micro-centrales hydroélectriques pour alimenter des villages ruraux et des centres de santé isolés sans dépendre du fioul importé.",
            "localSectors": ["Projets d'électrification rurale décentralisée de l'ASER", "Coopératives villageoises de la région de Kédougou", "Centres écologiques et touristiques de Casamance"],
            "remoteWork": "Strictement impossible (présence physique quotidienne le long des cours d'eau).",
            "entrepreneurship": "Création d'une entreprise d'installation et de maintenance de micro-turbines pico-hydro (1 kW à 50 kW) pour les communautés rurales riveraines des fleuves."
        },
        "relatedJobSlugs": ["ingenieur-hydroelectricite-barrages", "monteur-technicien-reseaux-electriques", "installateur-mainteneur-photovoltaique", "technicien-filiere-biomasse-bois-energie"],
        "connectedFamilies": ["environnement-climat", "industrie-mecanique", "artisanat-metiers-dart"],
        "resources": [
            {"type": "formation", "title": "Micro-hydraulique dans la formation MEER — Energierecrute", "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php?page=5", "source": "Energierecrute"},
            {"type": "syndicat", "title": "France Hydro Électricité — Syndicat de la petite hydroélectricité", "url": "https://www.france-hydro-electricite.fr/", "source": "France Hydro Électricité"}
        ],
        "sources": ["Energierecrute", "France Hydro Électricité", "Fédération des Moulins de France"],
        "interests": ["nature-environnement", "construire-fabriquer"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "En France, plus de 2 500 petites centrales hydroélectriques de moins de 10 MW produisent l'équivalent de la consommation électrique de plusieurs millions d'habitants, fonctionnant souvent sans interruption depuis plus de cinquante ans.",
            "pourquoi": "L'hydroélectricité au fil de l'eau produit de façon continue et prévisible, comblant les creux des autres énergies renouvelables météo-dépendantes.",
            "a_retenir": "L'héritier moderne des meuniers qui transforme le murmure des rivières en lumière pour les villages."
        }
    },

    # -----------------------------------------------------------------------
    # 12. INGÉNIEUR EN GÉOTHERMIE (HAUTE & BASSE ÉNERGIE)
    # -----------------------------------------------------------------------
    {
        "id": "ingenieur-geothermie-energetique",
        "slug": "ingenieur-geothermie-energetique",
        "title": "Ingénieur en Géothermie (Haute & Basse Énergie)",
        "aliases": ["Ingénieure géothermicienne", "Ingénieur réservoir géothermique", "Chef de projet géothermie profonde"],
        "icon": "🌋",
        "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Géothermie & Énergie de la Terre",
        "domainId": "geothermie-chaleur-terre",
        "subdomain": "Géothermie",
        "energyTechnology": ["Géothermie profonde", "Doublet géothermique", "Pompes à chaleur géothermiques", "Échangeurs de sous-sol"],
        "energySector": "Géosciences & Énergie",
        "sourceEnergierecrute": True,
        "isEmerging": True,
        "level": "Bac +5 (Ingénieur en Géosciences, Géologie ou Génie Énergétique)",
        "salary": "🇫🇷 France : 3 100 - 5 200 € net/mois (~44 000 - 74 000 € brut/an, Source : Energierecrute / APEC) • 🇸🇳 Sénégal : 600 000 - 2 000 000 FCFA / mois (Bureaux d'études hydrogéologiques, potentiel de la vallée du Rift)",
        "simpleDefinition": "L'ingénieur en géothermie capte la chaleur naturelle stockée sous la surface de la Terre en forant des puits profonds pour alimenter des réseaux de chauffage urbain (basse énergie) ou produire de l'électricité via des turbines à vapeur (haute énergie).",
        "shortDescription": "Fiche de pointe documentée par Energierecrute (filières EnR et exploration souterraine), ce géoscientifique exploite l'énergie inépuisable et continue qui dort sous nos pieds.",
        "longDescription": "Intégré dans les compétences renouvelables et d'exploration d'Energierecrute, l'ingénieur géothermicien associe géologie des sous-sols et génie thermique. En géothermie de surface, il dimensionne les sondes géothermiques verticales couplées à des pompes à chaleur pour les éco-quartiers. En géothermie profonde (Dogger, roches fracturées), il supervise le forage de doublets géothermiques (un puits producteur extrayant l'eau chaude à 70-80°C et un puits injecteur réintroduisant l'eau refroidie dans la nappe pour préserver la ressource).",
        "mainObjective": "Localiser et exploiter de manière pérenne et sécurisée les réservoirs thermiques souterrains pour fournir une chaleur décarbonée et continue 24h/24.",
        "companyRole": "Expert scientifique et pilote des projets d'extraction de la chaleur terrestre.",
        "workEnvironment": [
            "🏢 Entreprises de services énergétiques et exploitants de réseaux de chaleur (ENGIE Solutions, Dalkia, Coriance)",
            "🛢️ Plateformes de forages géothermiques profonds (jusqu'à 2 000 à 4 000 m sous terre)",
            "🔬 Laboratoires de géosciences et organismes d'études géologiques (BRGM)"
        ],
        "missions": [
            "Caractériser les aquifères profonds et estimer leur température, perméabilité et débit potentiel",
            "Dimensionner les doublets géothermiques (puits de production et puits de réinjection) pour éviter le refroidissement prématuré",
            "Superviser les opérations de forage incliné et veiller à l'étanchéité des tubages vis-à-vis des nappes d'eau potable",
            "Dimensionner les échangeurs thermiques en surface en matériaux résistants à la corrosion saline des eaux géothermales",
            "Gérer les risques sismiques induits et assurer la surveillance hydrogéologique en continu"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Analyse des diagraphies de forage", "desc": "Interprétation des enregistrements de porosité et de température sur un puits foré à 1 850 mètres de profondeur."},
            {"time": "11:00", "title": "Réunion sur plateforme de forage", "desc": "Point d'étape avec le chef de chantier de forage sur la trajectoire déviée du puits pour atteindre la zone de faille ciblée."},
            {"time": "14:30", "title": "Dimensionnement de l'échangeur thermique en titane", "desc": "Calcul de la surface d'échange nécessaire pour transférer 12 MW thermiques au réseau de chaleur d'une ville sans mélanger les fluides."},
            {"time": "16:45", "title": "Surveillance du réseau de sismographes", "desc": "Contrôle des capteurs microsismiques lors des essais d'injection pour vérifier l'absence d'activité anormale."}
        ],
        "skills": {
            "technical": [
                "Hydrogéologie profonde, thermodynamique des réservoirs et géologie structurale",
                "Techniques de forage pétrolier et géothermique (boues de forage, tubages, cimentations)",
                "Chimie des eaux thermales, corrosion et phénomènes de précipitation minérale (scaling)",
                "Thermodynamique des échangeurs de chaleur et réseaux de distribution urbains"
            ],
            "human": [
                "Rigueur scientifique d'investigation et humilité face aux incertitudes géologiques",
                "Capacité à prendre des décisions techniques lourdes lors des imprévus de forage",
                "Sens du dialogue avec les riverains et les services de l'État (DREAL, DRIEE)",
                "Esprit d'équipe avec les équipes de foreurs et les ingénieurs thermiciens"
            ],
            "tools": [
                "Logiciels de modélisation de réservoirs souterrains (TOUGH2, FEFLOW, Petrel)",
                "Outils de simulation de réseaux de chaleur (Termis)",
                "Diagraphies géophysiques et capteurs de fond de puits haute température",
                "Systèmes d'Information Géographique (SIG géologique ArcGIS/QGIS)"
            ],
            "analytical": [
                "Modélisation de la durée de vie thermique du doublet (anticipation du percement thermique sur 30 ans)",
                "Évaluation de l'impact environnemental et garantie du risque géologique de forage"
            ]
        },
        "specializations": ["Géothermie profonde pour réseaux de chaleur urbains (Basse et Moyenne énergie)", "Géothermie haute énergie et centrales électriques à cycle binaire (ORC)", "Géothermie de surface sur sondes et thermo-pieux pour bâtiments tertiaires"],
        "studies": {
            "pathway": [
                {"step": "Diplôme d'ingénieur", "title": "Diplôme d'Ingénieur en Géosciences, Géologie ou Génie Énergétique", "desc": "Formation d'excellence en géologie de subsurface, géophysique et thermodynamique."},
                {"step": "Master Spécialisé", "title": "Master Géothermie & Réservoirs Énergétiques", "desc": "Spécialisation pointue associant forage profond, chimie des fluides et réseaux thermiques."},
                {"step": "Reconnaissance professionnelle", "title": "Formation d'expert sous-sol et géothermie agréé ADEME / BRGM", "desc": "Habilitation reconnue pour les audits géologiques de grands projets."}
            ],
            "schools": [
                {"name": "École Nationale Supérieure de Géologie (ENSG Nancy) — France", "country": "France", "scope": "France"},
                {"name": "IFP School (Énergie et Géosciences) / UniLaSalle — France", "country": "France", "scope": "France"},
                {"name": "Institut des Sciences de la Terre (IST / UCAD Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Polytechnique de Thiès (EPT) / Génie Civil et Géotechnique — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification en Modélisation de Réservoirs Géothermiques", "Habilitation sécurité forage et risques H2S"],
            "schoolSubjects": ["Hydrogéologie", "Thermodynamique", "Géophysique", "Techniques de forage"]
        },
        "career": {
            "sectors": ["Opérateurs de réseaux de chaleur et énergéticiens (Dalkia, ENGIE Solutions, Coriance, Idex)", "Organismes publics et instituts de géosciences (BRGM en France)", "Compagnies d'ingénierie et de forage géothermique spécialisées"],
            "employerTypes": ["Énergéticiens de réseaux de chaleur", "Bureaux d'études de géosciences", "Sociétés de forage profond"],
            "evolution": "Ingénieur géothermie junior ➔ Chef de projet géothermie ➔ Directeur des opérations sous-sol ➔ Directeur technique réseau de chaleur et géothermie",
            "pros": "Énergie renouvelable de base continue (insensible à la météo, au vent et à la nuit), technologie en pleine expansion soutenue par les plans nationaux, rémunérations attractives.",
            "cons": "Coûts initiaux de forage très élevés (plusieurs millions d'euros par puits), aléa géologique inhérent au sous-sol."
        },
        "gettingStarted": {
            "beginnerProject": "Consulter la plateforme Géothermies du BRGM pour visualiser la carte des températures du sous-sol français à 1 500 m de profondeur.",
            "intermediateProject": "Calculer la puissance thermique extraite par un puits fournissant 250 m³/h d'eau à 75°C réinjectée à 40°C.",
            "advancedProject": "Modéliser l'écartement optimal entre puits producteur et puits injecteur pour éviter le refroidissement du réservoir pendant 30 ans.",
            "portfolioIdeas": ["Étude de faisabilité géologique d'un doublet géothermique", "Carte d'évaluation du potentiel géothermique d'un territoire"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA analyse les données sismiques et de forage pour cartographier en 3D les failles fracturées où circule l'eau chaude, réduisant drastiquement le risque de forage stérile.",
            "automatedTasks": ["Interprétation automatique des profils sismiques 3D de sous-sol", "Surveillance en temps réel des micro-séismes induits par apprentissage automatique"],
            "emergingSkills": ["Utilisation de modèles d'apprentissage profond pour la prédiction de la perméabilité des réservoirs"],
            "humanEdge": "La compréhension géologique globale de l'histoire sédimentaire d'un bassin et le sang-froid pour gérer des incidents de forage à 2 000 m sous terre."
        },
        "africaContext": {
            "senegalInsight": "En Afrique de l'Est (Kenya, Éthiopie), la vallée du Grand Rift possède un potentiel géothermique colossal qui produit plus de 45% de l'électricité du Kenya (centrales d'Olkaria). Au Sénégal, les ingénieurs en géosciences étudient les nappes profondes du bassin sédimentaire sénégalo-mauritanien pour évaluer les ressources thermiques exploitables pour l'agro-industrie et le dessalement d'eau.",
            "localSectors": ["Institut des Sciences de la Terre (IST) de Dakar", "Direction des Mines et de la Géologie du Sénégal", "Projets régionaux de géothermie en Afrique subsaharienne (Kenya Olkaria, Éthiopie)"],
            "remoteWork": "Hybride (travail de modélisation en bureau / présence requise pendant les phases de forage).",
            "entrepreneurship": "Création d'un cabinet de conseil en géothermie de surface et hydrogéologie pour équiper les nouveaux ensembles immobiliers de Dakar en climatisation géothermique basse température."
        },
        "relatedJobSlugs": ["ingenieur-geologue-exploration-energetique", "charge-affaires-energetique-cvc", "technicien-etudes-thermiques-batiment", "energy-manager-auditeur-energetique"],
        "connectedFamilies": ["mines-geosciences", "environnement-climat", "btp-architecture"],
        "resources": [
            {"type": "article", "title": "Filière Géothermie — Energierecrute", "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php", "source": "Energierecrute"},
            {"type": "portail", "title": "Portail Géothermies — BRGM / ADEME", "url": "https://www.geothermies.fr/", "source": "BRGM"}
        ],
        "sources": ["Energierecrute", "BRGM", "AFPG (Association Française des Professionnels de la Géothermie)"],
        "interests": ["explorer-decouvrir", "nature-environnement", "donnees-chiffres"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "En Île-de-France, le réservoir géothermique du Dogger situé entre 1 500 et 2 000 mètres sous terre chauffe déjà plus de 300 000 logements grâce à des eaux naturellement à 70°C emprisonnées depuis plus de 150 millions d'années.",
            "pourquoi": "Cette énergie ne dépend ni du vent, ni du soleil, ni des cours du gaz : elle fournit une chaleur propre et stable quelles que soient les crises géopolitiques.",
            "a_retenir": "L'explorateur des profondeurs qui puise la chaleur millénaire de la Terre pour chauffer nos villes."
        }
    },

    # -----------------------------------------------------------------------
    # 13. RESPONSABLE D'UNITÉ DE MÉTHANISATION & BIOGAZ
    # -----------------------------------------------------------------------
    {
        "id": "responsable-unite-biogaz-methanisation",
        "slug": "responsable-unite-biogaz-methanisation",
        "title": "Responsable d'Unité de Méthanisation & Biogaz",
        "aliases": ["Chef de site méthanisation", "Exploitant d'unité de biométhane", "Responsable d'usine de biogaz"],
        "icon": "♻️",
        "image": "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&auto=format&fit=crop&q=80",
        "familyId": "energie-renouvelable",
        "familyName": "Énergie, Électricité & Transition Énergétique",
        "domain": "Biomasse, Biogaz & Valorisation Énergétique",
        "domainId": "biomasse-biogaz-dechets",
        "subdomain": "Biogaz & méthanisation",
        "energyTechnology": ["Digesteurs anaérobies", "Biométhane", "Épuration membranaire", "Injection réseau de gaz"],
        "energySector": "Biogaz & Économie Circulaire",
        "sourceEnergierecrute": True,
        "isEmerging": True,
        "level": "BTS Métiers de l'eau / Génie biologique, Licence Pro MEER ou Ingénieur Agronome / Énergie",
        "salary": "🇫🇷 France : 2 400 - 4 200 € net/mois (~34 000 - 60 000 € brut/an, Source : Energierecrute / Biogaz) • 🇸🇳 Sénégal : 350 000 - 1 400 000 FCFA / mois (Unités agro-industrielles de biogaz, stations d'épuration)",
        "simpleDefinition": "Le responsable d'unité de méthanisation supervise la digestion biologique des effluents agricoles et déchets organiques dans des cuves étanches pour produire du biogaz, qu'il purifie en biométhane injecté dans le réseau gazier ou valorise en électricité et chaleur par cogénération.",
        "shortDescription": "Fiche de pointe mise en avant par Energierecrute (filière biogaz et valorisation organique), ce pilote de bioréacteurs transforme les déchets de la ferme et de l'industrie en gaz vert renouvelable.",
        "longDescription": "Intégré dans les compétences EnR et de transition environnementale d'Energierecrute, le responsable d'unité de méthanisation est le chef d'orchestre d'une mini-raffinerie biologique. Il gère l'approvisionnement régulier en matières organiques (fumiers, lisiers, résidus de cultures, déchets agroalimentaires), pilote l'équilibre biochimique délicat des cuves de digestion (température à 38°C, pH, teneur en acides gras volatils), surveille l'unité d'épuration membranaire qui sépare le CO2 du méthane pur (CH4) et organise l'épandage agronomique du digestat, un engrais naturel d'exception.",
        "mainObjective": "Assurer la production continue et sécurisée de biométhane de haute pureté tout en maintenant l'équilibre biologique des digesteurs et la conformité environnementale ICPE.",
        "companyRole": "Pilote opérationnel et garant de la rentabilité biologique, technique et sécuritaire de l'unité de méthanisation.",
        "workEnvironment": [
            "🚜 Sites de méthanisation agricole ou territoriale (cuves digesteurs, trémies d'incorporation, lagunes)",
            "🏢 Local technique d'automatisme et conteneur d'épuration membranaire du biogaz",
            "🔬 Petit laboratoire sur site pour l'analyse chimique quotidienne des substrats et du digestat"
        ],
        "missions": [
            "Planifier l'approvisionnement et la recette d'incorporation des matières organiques dans les digesteurs",
            "Contrôler quotidiennement les paramètres biologiques (pH, ratio FOS/TAC, température, teneur en méthane)",
            "Superviser les équipements industriels (agitateurs de cuve, pompes d'alimentation, épurateurs de gaz)",
            "Assurer la sécurité du site vis-à-vis des risques de gaz toxiques (H2S) et d'explosion (zonage ATEX)",
            "Organiser la logistique et le plan d'épandage du digestat fertilisant chez les agriculteurs partenaires"
        ],
        "typicalDay": [
            {"time": "07:45", "title": "Tournée visuelle et sécurité du site", "desc": "Contrôle des pressions sous les dômes de stockage de gaz et vérification de l'absence de fuites sur la torchère."},
            {"time": "09:00", "title": "Analyses biologiques en laboratoire", "desc": "Titrage du ratio FOS/TAC au pH-mètre pour vérifier l'absence d'acidose dans le digesteur principal."},
            {"time": "11:30", "title": "Réception des sous-produits agroalimentaires", "desc": "Contrôle visuel et pesée sur pont-bascule d'un camion de pulpes de betteraves avant injection dans la trémie."},
            {"time": "14:30", "title": "Supervision de la station d'injection de gaz", "desc": "Contrôle de la qualité du biométhane (taux de CH4 > 97%, H2S < 5 ppm) avec le technicien de GRDF."},
            {"time": "16:45", "title": "Maintenance préventive d'un agitateur", "desc": "Coordination du remplacement de garniture mécanique sur l'agitateur à pales de la cuve de post-digestion."}
        ],
        "skills": {
            "technical": [
                "Biotechnologie de la digestion anaérobie et biochimie des micro-organismes méthanogènes",
                "Génie des procédés gazeux (désulfuration, séchage, épuration membranaire ou PSA)",
                "Électromécanique, pompes dilacératrices, agitateurs submersibles et tuyauteries inox",
                "Réglementation des installations classées ICPE et normes de sécurité atmosphères explosives (ATEX)"
            ],
            "human": [
                "Grande vigilance et sang-froid face aux risques d'atmosphères explosives (CH4) et toxiques (H2S)",
                "Polyvalence et capacité à passer d'une analyse biochimique à une réparation mécanique de pompe",
                "Sens du contact avec le monde paysan et les riverains pour une intégration sereine",
                "Autonomie et réactivité en cas d'astreinte technique de nuit ou de week-end"
            ],
            "tools": [
                "Analyseurs de biogaz portables et fixes (mesure en continu de CH4, CO2, O2, H2S)",
                "Automates de supervision industrielle (Schneider, Siemens) avec télégestion sur smartphone",
                "Détecteurs multigaz personnels (protection H2S / CH4)",
                "Équipements de laboratoire (titrateur FOS/TAC, centrifugeuse, pH-mètre étalonné)"
            ],
            "analytical": [
                "Calcul du pouvoir méthanogène (BMP) des différents types de déchets pour optimiser la ration",
                "Bilan économique des recettes d'injection de biométhane et des coûts d'approvisionnement"
            ]
        },
        "specializations": ["Unités de méthanisation agricole territoriale en injection directe de biométhane", "Cogénération biogaz électricité-chaleur pour industries agroalimentaires", "Traitement et méthanisation des boues de stations d'épuration urbaines"],
        "studies": {
            "pathway": [
                {"step": "Diplôme Bac +2", "title": "BTS Métiers de l'Eau, BTS Génie Biologique ou BTS Agricole", "desc": "Bases solides en biochimie, hydraulique et mécanique générale."},
                {"step": "Licence Pro spécialisée", "title": "Licence Pro MEER / Parcours Biométhane et Valorisation des Déchets", "desc": "Formation citée par Energierecrute pour maîtriser la gestion complète d'une unité de biogaz."},
                {"step": "Ingénieur", "title": "Diplôme d'Ingénieur Agronome ou Ingénieur Génie des Procédés / Énergie", "desc": "Accès aux fonctions de responsable d'un parc de plusieurs unités de biométhane régionales."}
            ],
            "schools": [
                {"name": "IUT et lycées agricoles proposant des filières méthanisation — France", "country": "France", "scope": "France"},
                {"name": "Institut Agro / UniLaSalle — France", "country": "France", "scope": "France"},
                {"name": "Institut de Technologie Alimentaire (ITA) / Département Biogaz — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) / Génie Chimique — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Habilitation Risque Chimique et Atmosphères Explosives (ATEX niveau 2)", "Certification Responsable d'Exploitation Méthanisation"],
            "schoolSubjects": ["Microbiologie", "Génie des procédés", "Chimie organique", "Sécurité industrielle"]
        },
        "career": {
            "sectors": ["Exploitations agricoles et sociétés de méthanisation territoriale", "Grands énergéticiens et opérateurs de gaz vert (ENGIE Bio-CH4, TotalEnergies Biogaz, Dalkia)", "Sociétés de traitement des déchets et de l'eau (Veolia, Saur, Suez)"],
            "employerTypes": ["Sociétés d'exploitation de méthanisation", "Coopératives agricoles", "Opérateurs de réseaux de gaz"],
            "evolution": "Opérateur de méthanisation ➔ Responsable de site biogaz ➔ Responsable d'un cluster d'unités de biométhane ➔ Directeur pôle gaz renouvelables",
            "pros": "Métier à impact écologique concret (économie circulaire parfaite), autonomie complète sur le site, secteur en pleine explosion porté par la souveraineté gazière.",
            "cons": "Astreintes techniques de surveillance (alertes SMS 24h/24), odeurs inhérentes à certains intrants organiques lors du déchargement."
        },
        "gettingStarted": {
            "beginnerProject": "Construire un micro-digesteur expérimental de 5 litres dans une bonbonne d'eau avec ballon de baudruche pour observer la production de gaz.",
            "intermediateProject": "Calculer le volume de biométhane produit par an par un troupeau de 100 vaches laitières produisant chacune 20 tonnes de lisier par an.",
            "advancedProject": "Élaborer une ration d'intrants équilibrée pour un digesteur de 2 000 m³ en combinant ensilage de seigle, fumier bovin et marc de pomme.",
            "portfolioIdeas": ["Plan de sécurité ATEX d'une unité de biogaz", "Bilan matière et énergétique d'une unité de méthanisation en injection"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "Des algorithmes de machine learning analysent la composition spectrale des déchets entrants pour ajuster minute par minute la ration optimale afin de prévenir tout emballement biologique.",
            "automatedTasks": ["Ajustement prédictif des temps d'agitation et de chauffage des cuves", "Diagnostic précoce de dérive biologique par analyse des micro-variations de gaz"],
            "emergingSkills": ["Utilisation de jumeaux numériques de bioréacteurs anaérobies"],
            "humanEdge": "Le flair du praticien pour juger de la consistance d'un lisier à l'œil et au nez, et les réflexes de sécurité lors d'une intervention sur une conduite de gaz."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le Programme National de Biogaz Domestique (PNB-SN) et les abattoirs de Dakar développent des biodigesteurs pour valoriser les bouses de vaches et déchets d'abattoir en biogaz de cuisson pour les ménages et en biofertilisant pour enrichir les sols maraîchers épuisés sans engrais chimiques importés.",
            "localSectors": ["Programme National de Biogaz du Sénégal (PNB)", "Grandes fermes agro-pastorales de la zone des Niayes", "Abattoirs industriels de Dakar (SOGAS)"],
            "remoteWork": "Strictement impossible (présence physique quotidienne impérative sur les installations).",
            "entrepreneurship": "Création d'une entreprise de conception et d'exploitation d'unités de biogaz semi-industrielles pour les fermes avicoles et laitières sénégalaises."
        },
        "relatedJobSlugs": ["technicien-filiere-biomasse-bois-energie", "energy-manager-auditeur-energetique", "responsable-hse-sites-energetiques", "chef-projet-energie-solaire-photovoltaique"],
        "connectedFamilies": ["agriculture-agritech", "environnement-climat", "chimie-biologie"],
        "resources": [
            {"type": "article", "title": "Filière Biogaz & Méthanisation — Energierecrute", "url": "https://www.energierecrute.com/formation_energie/metiers-energie.php", "source": "Energierecrute"},
            {"type": "association", "title": "Club Biogaz ATEE", "url": "https://biogaz.atee.fr/", "source": "ATEE"}
        ],
        "sources": ["Energierecrute", "ATEE Club Biogaz", "GRDF", "ADEME"],
        "interests": ["nature-environnement", "construire-fabriquer", "donnees-chiffres"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "En se décomposant à l'air libre, le fumier et les lisiers émettent spontanément du méthane, un gaz à effet de serre 28 fois plus réchauffant que le CO2. En les méthanisant en cuve étanche, l'unité de biogaz capte ce méthane pour en faire de l'énergie et évite son rejet direct dans l'atmosphère.",
            "pourquoi": "La méthanisation est l'une des rares énergies au bilan carbone doublement vertueux : elle produit du gaz vert tout en évitant des émissions agricoles diffuses.",
            "a_retenir": "L'alchimiste de l'économie circulaire qui métamorphose les déchets en gaz vert d'avenir."
        }
    }
]

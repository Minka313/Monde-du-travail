# execution/maritime_jobs.py
# Fiches Métiers Dérivées de la Source Officielle ÉvoluPêches (Québec) & Contextualisées pour Le Monde du Travail
# 10 Fiches Métiers Maritimes Haute Profondeur

MARITIME_JOBS = [
    # -----------------------------------------------------------------------
    # 1. CAPITAINE-PROPRIÉTAIRE
    # -----------------------------------------------------------------------
    {
        "id": "capitaine-proprietaire",
        "slug": "capitaine-proprietaire",
        "title": "Capitaine-Propriétaire de Bateau de Pêche / Patron de Pêche",
        "aliases": ["Capitaine de pêche", "Pêcheur patron", "Armateur artisan", "Capitaine de navire de pêche"],
        "icon": "⚓",
        "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Pêche, Aquaculture & Ressources Marines",
        "domainId": "peche-aquaculture",
        "subdomain": "Pêche & capture",
        "sourceEvoluPeches": True,
        "cnpCode": "8261 et 8262",
        "isEmerging": False,
        "level": "Diplôme d'études professionnelles (DEP Pêche) ou Brevet de Capitaine de pêche",
        "salary": "🇨🇦 Québec : 50 000 - 130 000 $ CAD/an selon volume et valeur des captures de la saison (Source : ÉvoluPêches / Pêches maritimes) • 🇸🇳 Sénégal : 450 000 - 1 800 000 FCFA / mois (Capitaine de pêche côtière / hauturière - ENFM Dakar)",
        "simpleDefinition": "Le capitaine-propriétaire dirige le bateau de pêche et son équipage en mer : il pilote le navire, planifie les campagnes au large, localise les bancs de poissons et gère son entreprise comme un chef d'entreprise indépendant.",
        "shortDescription": "Fiche documentée par ÉvoluPêches, ce chef de bord allie navigation maritime experte, sens tactique de la capture et responsabilités de gestion entrepreneuriale.",
        "longDescription": "Agissant en tant que capitaine ou propriétaire d'un bateau de pêche, ce marin d'expérience assure le bon fonctionnement de son navire et des équipements de capture (chaluts, casiers, filets maillants, lignes). Comme le documente ÉvoluPêches, il assume avec polyvalence l'ensemble des tâches, de la préparation du bateau et des apparaux jusqu'à l'entreposage frigorifique des prises, le respect des quotas de capture et la gestion humaine de son équipage. La source précise également qu'une personne peut être capitaine sans être propriétaire.",
        "mainObjective": "Assurer la sécurité de l'équipage en mer et maximiser la rentabilité des campagnes de pêche dans le respect des quotas et des règles de conservation de la ressource.",
        "companyRole": "Dirigeant d'entreprise maritime, maître à bord après Dieu et garant de la sécurité nautique.",
        "characteristics": [
            "Goût de l'aventure",
            "Bonne condition physique et pied marin",
            "Travail manuel",
            "Esprit d'équipe",
            "Intérêt pour les équipements hydrauliques et les instruments de navigation et de communication radio"
        ],
        "regions": ["Côte-Nord", "Bas-Saint-Laurent", "Gaspésie", "Îles-de-la-Madeleine"],
        "sourceContext": "Québec / Canada (ÉvoluPêches)",
        "workEnvironment": [
            "🌊 Passerelle de commandement et pont de pêche d'un navire en mer",
            "📻 Instruments électroniques de radionavigation (GPS, sondeurs bathymétriques, radars, VHF)",
            "⚓ Ports de pêche, criées et quais de débarquement pour la commercialisation"
        ],
        "missions": [
            "Piloter le bateau de pêche et naviguer en toute sécurité selon la météo et les marées",
            "Planifier et effectuer les voyages de pêche en ciblant les zones autorisées et poissonneuses",
            "Préparer et entretenir le bateau, les moteurs et les engins de pêche (casiers, filets, treuils)",
            "Superviser les manœuvres de capture, de tri, de manipulation et d'entreposage soigné des prises sous glace",
            "Gérer l'entreprise (comptabilité, vente des captures, carburant) et manager l'équipage avec leadership"
        ],
        "typicalDay": [
            {"time": "04:00", "title": "Appareillage et consultation météo marine", "desc": "Contrôle des bulletins de vent et de houle, vérification des niveaux d'huile et démarrage des moteurs du navire."},
            {"time": "07:30", "title": "Mise à l'eau des engins et détection sonar", "desc": "Repérage des bancs de poissons au sondeur couleur et largage coordonné des casiers à homard ou du chalut."},
            {"time": "13:00", "title": "Virage des engins et tri sur le pont", "desc": "Remontée des filets au treuil hydraulique, tri des prises par taille et mise en cale réfrigérée immédiate."},
            {"time": "18:30", "title": "Retour à quai et débarquement commercial", "desc": "Accostage au port, pesée officielle des débarquements avec les acheteurs et remplissage du journal de bord."}
        ],
        "skills": {
            "technical": [
                "Navigation maritime hauturière et côtière (cartes marines, règles de barre)",
                "Maniement des instruments de radionavigation (radar, sondeur multifaisceaux, AIS, VHF SMDSM)",
                "Hydraulique navale et mécanique des treuils de pêche",
                "Réglementation des pêches maritimes, quotas et gestion des permis",
                "Gestion d'entreprise, comptabilité et commercialisation des produits de la mer"
            ],
            "human": [
                "Sang-froid exceptionnel et prise de décision rapide en situation de mer hostile",
                "Leadership naturel et capacité à motiver et souder un équipage confiné",
                "Pied marin et endurance physique face aux nuits courtes et au froid",
                "Sens aigu des responsabilités humaines"
            ],
            "tools": [
                "Radars marins et sondeurs acoustiques de pêche (Furuno, Simrad)",
                "Treuils, enrouleurs et apparaux hydrauliques de pont",
                "Systèmes de communication radio VHF et balises de détresse Cospas-Sarsat",
                "Logiciels de navigation électronique (MaxSea / TimeZero)"
            ],
            "analytical": [
                "Analyse des données océanographiques (température de l'eau, courants, thermocline)",
                "Calcul de rentabilité au mille nautique parcouru et ratio carburant/prises"
            ]
        },
        "specializations": ["Pêche aux crustacés (homard, crabe des neiges, crevettes)", "Pêche aux poissons de fond (flétan, morue)", "Pêche pélagique côtière", "Armement artisanal multi-espèces"],
        "studies": {
            "pathway": [
                {"step": "Diplôme professionnel", "title": "Diplôme d'études professionnelles (DEP) en pêche professionnelle", "desc": "Formation québécoise de référence dispensée à l'ÉPAQ ou au CSS des Îles."},
                {"step": "Certifications maritimes", "title": "Brevets de capacité de capitaine de pêche (Transports Canada / Affaires Maritimes)", "desc": "Validation des heures de mer et examens de sécurité en mer (FUM / STCW)."},
                {"step": "Perfectionnement", "title": "Formation continue en gestion d'entreprise de pêche", "desc": "Maîtrise des aspects financiers, fiscaux et du transfert de permis."}
            ],
            "schools": [
                {"name": "École des pêches et de l’aquaculture du Québec (ÉPAQ) — Grande-Rivière, Québec", "country": "Canada", "scope": "International"},
                {"name": "Centre de formation professionnelle des Îles (CSS des Îles) — Québec", "country": "Canada", "scope": "Canada"},
                {"name": "École Nationale de Formation Maritime (ENFM Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Lycées professionnels maritimes (Boulogne, Saint-Malo, Le Guilvinec) — France", "country": "France", "scope": "France"}
            ],
            "certifications": ["Certificat de Capitaine de pêche (classe 4 / 3)", "Certificat restreint d'opérateur radio maritime (CRO)", "Formation aux fonctions d'urgence en mer (FUM)"],
            "schoolSubjects": ["Navigation maritime", "Météorologie", "Sécurité en mer", "Gestion d'entreprise"]
        },
        "career": {
            "sectors": ["Flottes de pêche commerciale artisanale et semi-hauturière", "Armements maritimes coopératifs ou privés", "Expéditions de pêche scientifique et d'observation"],
            "employerTypes": ["Travailleur autonome / Propriétaire de son navire", "Armateurs de bateaux de pêche"],
            "evolution": "Aide-pêcheur ➔ Matelot qualifié ➔ Capitaine salarié ➔ Capitaine-propriétaire de son propre bateau ➔ Armateur de plusieurs navires",
            "pros": "Liberté incomparable de naviguer en mer ouverte, contact puissant avec la nature sauvage, rémunérations très substantielles lors des belles campagnes de capture.",
            "cons": "Métier à haut risque face aux tempêtes et avaries, éloignement familial, investissements en capital considérables (achat du navire et des permis de pêche)."
        },
        "gettingStarted": {
            "beginnerProject": "Embarquer comme observateur ou aide-pêcheur sur une sortie de marée côtière pour vérifier sa résistance au mal de mer et son endurance.",
            "intermediateProject": "Obtenir son certificat de secourisme en mer et s'entraîner à la lecture d'une carte marine et au tracé de route avec dérive.",
            "advancedProject": "Monter le plan d'affaires prévisionnel complet d'acquisition d'un bateau de pêche d'occasion avec estimation des quotas et amortissement des apparaux.",
            "portfolioIdeas": ["Journal de bord de navigation annoté", "Plan d'entretien annuel préventif d'un navire de pêche"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'IA améliore la prévision météo ultra-locale et cartographie les bancs de poissons par analyse thermique satellitaire, mais le sens marin et le pilotage dans la tempête restent 100% humains.",
            "automatedTasks": ["Calcul automatique des routes optimales d'évitement des tempêtes", "Enregistrement automatique des captures sur journal de pêche électronique"],
            "emergingSkills": ["Utilisation de sonars 3D temps réel à balayage multifaisceaux", "Optimisation de la vitesse moteur pour réduire l'empreinte carbone"],
            "humanEdge": "Le coup d'œil légendaire du capitaine pour sentir la houle, interpréter le vol des oiseaux marins et diriger des hommes face au danger."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le capitaine de pêche artisanale (chef de pirogue moderne motorisée ou de chalutier sénégalais) est une figure centrale de communautés côtières comme Kayar, Saint-Louis, Guet Ndar ou Joal. L'ENFM de Dakar forme les capitaines hauturiers qui commandent les navires battant pavillon sénégalais.",
            "localSectors": ["Grands ports de pêche artisanale et industrielle (Port Autonome de Dakar, Joal, Kayar, Ziguinchor)", "Armements thoniers et sardiniers nationaux", "Coopératives de pêcheurs artisans (GIE maritimes)"],
            "remoteWork": "Totalement exclu, présence physique impérative à la barre.",
            "entrepreneurship": "Acquisition d'une embarcation de pêche moderne équipée de GPS et caissons isothermes pour ravitailler les mareyeurs de Dakar en poisson noble frais."
        },
        "relatedJobSlugs": ["aide-pecheur", "mecanicien-marin", "gestionnaire-ressources-maritimes", "halieute"],
        "connectedFamilies": ["transport-logistique", "direction-strategie", "gestion-finance", "environnement-climat"],
        "resources": [{"type": "article", "title": "Fiche Capitaine-propriétaire ÉvoluPêches", "url": "https://evolupeches.org/metiers/capitaine-proprietaire/", "source": "ÉvoluPêches"}],
        "sources": ["ÉvoluPêches", "Transports Canada", "ÉPAQ", "ENFM Dakar"],
        "interests": ["nature-environnement", "explorer-decouvrir", "negocier-convaincre"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon ÉvoluPêches, le renouvellement de la relève des capitaines-propriétaires est l'un des défis majeurs des régions maritimes en raison de la valeur marchande très élevée des permis de pêche commerciale et du vieillissement démographique des patrons pêcheurs.",
            "pourquoi": "L'accès à la propriété d'un bateau et de ses permis nécessite des dispositifs de financement et de mentorat structurés pour soutenir les jeunes capitaines.",
            "a_retenir": "Un métier mythique alliant passion farouche de l'océan et rigueur d'un vrai chef d'entreprise maritime."
        }
    },

    # -----------------------------------------------------------------------
    # 2. AIDE-PÊCHEUR / AIDE-PÊCHEUSE
    # -----------------------------------------------------------------------
    {
        "id": "aide-pecheur",
        "slug": "aide-pecheur",
        "title": "Aide-Pêcheur / Aide-Pêcheuse (Matelot de Pont)",
        "aliases": ["Aide-pêcheuse", "Matelot de pêche", "Pêcheur d'équipage", "Matelot de pont de pêche"],
        "icon": "🐟",
        "image": "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Pêche, Aquaculture & Ressources Marines",
        "domainId": "peche-aquaculture",
        "subdomain": "Pêche & capture",
        "sourceEvoluPeches": True,
        "cnpCode": "8441",
        "isEmerging": False,
        "level": "DEP en pêche professionnelle ou Formation en entreprise (apprentissage)",
        "salary": "🇨🇦 Québec : 35 000 - 80 000 $ CAD/an (part à la pêche / saisonnier, Source : ÉvoluPêches) • 🇸🇳 Sénégal : 200 000 - 700 000 FCFA / mois (selon part de capture et marée)",
        "simpleDefinition": "L'aide-pêcheur seconde le capitaine en mer : il prépare et entretient les filets et casiers, participe aux manœuvres de capture sur le pont, trie, manipule et entrepose le poisson frais dans la cale glacée.",
        "shortDescription": "Fiche documentée par ÉvoluPêches, ce travailleur d'élite du pont de pêche assure le travail physique et technique indispensable au bon déroulement de chaque marée.",
        "longDescription": "L'aide-pêcheur aide principalement le capitaine-propriétaire en participant aux activités de préparation et d'entretien du bateau de pêche commerciale et de ses engins. Également, comme le souligne ÉvoluPêches, il prend part aux activités de capture, de démêlage, de calibrage et d'entreposage des prises en vue d'obtenir une qualité hors pair pour l'industrie de la transformation des produits marins.",
        "mainObjective": "Assurer avec efficacité, rapidité et sécurité le maniement des engins de pêche et la préservation de la fraîcheur irréprochable des prises.",
        "companyRole": "Matelot opérationnel de pont, maillon d'exécution indispensable à la réussite de chaque sortie en mer.",
        "characteristics": [
            "Goût de l'aventure",
            "Bonne condition physique et pied marin",
            "Intérêt pour la mer et le travail extérieur",
            "Efficacité"
        ],
        "regions": ["Côte-Nord", "Bas-Saint-Laurent", "Gaspésie", "Îles-de-la-Madeleine"],
        "sourceContext": "Québec / Canada (ÉvoluPêches)",
        "workEnvironment": [
            "🌊 Pont extérieur ouvert du bateau de pêche par tous les temps",
            "🧤 Ciré marin, bottes de sécurité antidérapantes et gants de protection thermique",
            "🧊 Cale à poissons réfrigérée et ateliers de ramendage de filets sur le quai"
        ],
        "missions": [
            "Participer aux activités de préparation, de nettoyage et d'entretien du bateau et des apparaux",
            "Entretenir, réparer et ramender les engins de pêche (casiers, palangres, filets)",
            "Participer aux activités de capture en mer (largage, virage, halage des engins)",
            "Manipuler, étêter, éviscérer et laver délicatement les espèces capturées",
            "Entreposer les prises sous glace en cale en respectant les normes d'hygiène et de qualité"
        ],
        "typicalDay": [
            {"time": "04:30", "title": "Préparation du pont et des appâts", "desc": "Embarquement de la glace en paillettes, découpe des appâts (boette) et vérification des amarres."},
            {"time": "08:00", "title": "Manoeuvre des engins de capture", "desc": "Réception des casiers remontés par le treuil, extraction rapide et sécurisée des crabes ou homards."},
            {"time": "12:30", "title": "Tri, calibrage et conditionnement en cale", "desc": "Mesure des carapaces à la jauge, rejet à l'eau des femelles grainées et mise en bacs d'eau de mer réfrigérée."},
            {"time": "17:00", "title": "Lavage au jet d'eau de mer et ramendage", "desc": "Nettoyage soigné du pont au jet haute pression et réparation des mailles déchirées avant la marée suivante."}
        ],
        "skills": {
            "technical": [
                "Techniques de ramendage et réparation des filets et câbles",
                "Maniement sécuritaire des apparaux de levage et treuils de pont",
                "Techniques d'éviscération, filetage sommaire et glaçage du poisson",
                "Protocoles d'hygiène et de conservation des produits marins frais",
                "Manœuvres d'amarrage et nœuds marins indispensables"
            ],
            "human": [
                "Pied marin absolu et endurance remarquable face à la fatigue physique",
                "Esprit d'équipe solidaire et respect des consignes de sécurité",
                "Rapidité d'exécution manuelle et souci de la qualité des produits",
                "Sens de l'entraide en milieu confiné"
            ],
            "tools": [
                "Aiguilles à ramender et couteaux marins d'étêtage",
                "Jauges de calibrage des crustacés",
                "Laveurs de pont et pompes de cale",
                "Gilets de sauvetage autogonflants de travail en mer"
            ],
            "analytical": [
                "Évaluation visuelle rapide de la fraîcheur et des calibres",
                "Comptage des prises par trait de chalut"
            ]
        },
        "specializations": ["Matelot casayeur (homard, crabe)", "Matelot chalutier", "Matelot palangrier", "Matelot sur senneur"],
        "studies": {
            "pathway": [
                {"step": "Diplôme professionnel", "title": "Diplôme d'études professionnelles (DEP) en pêche professionnelle", "desc": "Formation québécoise à l'ÉPAQ ou au CSS des Îles."},
                {"step": "Formation en entreprise", "title": "Formation en entreprise / Apprentissage au poste", "desc": "Transmission directe des savoir-faire marins par le patron pêcheur sur le pont."},
                {"step": "Certifications de sécurité", "title": "Certificat de sécurité de base en mer (STCW / FUM)", "desc": "Formations obligatoires aux exercices de survie et lutte incendie."}
            ],
            "schools": [
                {"name": "École des pêches et de l’aquaculture du Québec (ÉPAQ) — Québec", "country": "Canada", "scope": "International"},
                {"name": "Centre de formation professionnelle des Îles — Québec", "country": "Canada", "scope": "Canada"},
                {"name": "École Nationale de Formation Maritime (ENFM Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat de fonctions d'urgence en mer (FUM A1/A2)", "Certificat médical d'aptitude à la navigation"],
            "schoolSubjects": ["Techniques de pêche", "Sécurité maritime", "Hygiène alimentaire", "Secourisme"]
        },
        "career": {
            "sectors": ["Pêche commerciale côtière et hauturière", "Armements maritimes artisanaux", "Bateaux de récolte maricole"],
            "employerTypes": ["Patrons-pêcheurs indépendants", "Petites entreprises familiales de pêche"],
            "evolution": "Aide-pêcheur débutant ➔ Matelot de pont confirmé ➔ Maître d'équipage (Bosco) ➔ Capitaine de pêche (avec formation complémentaire et brevets)",
            "pros": "Accès direct au métier sans longues études préalables, vie intense et authentique au grand large, esprit d'équipage très fort, rémunération attractive les bonnes saisons.",
            "cons": "Pénibilité physique soutenue, travail dans l'humidité, le froid et le roulis de mer, saisonnalité marquée de l'emploi."
        },
        "gettingStarted": {
            "beginnerProject": "S'entraîner à exécuter rapidement 10 nœuds marins essentiels (nœud de chaise, nœud d'écoute, nœud de cabestan).",
            "intermediateProject": "Apprendre le ramendage manuel d'un filet de pêche déchiré à l'aide d'une aiguille et de fil nylon.",
            "advancedProject": "Valider son brevet de secourisme d'urgence en mer et suivre une campagne complète de pêche côtière.",
            "portfolioIdeas": ["Attestation de navigation en mer", "Démonstration vidéo de maîtrise des manœuvres de pont"]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "Le travail physique sur le pont d'un bateau remuant sous la houle exige une agilité motrice et une adaptation humaine qu'aucun robot ne peut fournir.",
            "automatedTasks": ["Enregistrement automatique des positions de captures par géolocalisation"],
            "emergingSkills": ["Utilisation d'équipements de pont à commande électrique sécurisée"],
            "humanEdge": "La dextérité manuelle pour démêler un filet en pleine mer et le courage physique face aux embruns."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les aides-pêcheurs et matelots constituent le gros des équipages des 20 000 pirogues artisanales et chalutiers côtiers. Ce sont eux qui assurent le débarquement quotidien des sardinelles, thiofs et poulpes qui nourrissent le pays.",
            "localSectors": ["Plages de débarquement artisanal de Dakar (Yoff, Soumbédioune, Ngor)", "Grands quais de pêche de Joal-Fadiouth et Kayar", "Chalutiers industriels du Port de Dakar"],
            "remoteWork": "100% sur le pont en mer.",
            "entrepreneurship": "Épargne progressive pour acquérir un moteur hors-bord et son propre filet de pêche."
        },
        "relatedJobSlugs": ["capitaine-proprietaire", "mecanicien-marin", "ouvrier-maricole", "prepose-transformation-produits-marins"],
        "connectedFamilies": ["transport-logistique", "environnement-climat", "commerce-marketing"],
        "resources": [{"type": "article", "title": "Fiche Aide-pêcheur ÉvoluPêches", "url": "https://evolupeches.org/metiers/aide-pecheur-aide-pecheuse/", "source": "ÉvoluPêches"}],
        "sources": ["ÉvoluPêches", "ÉPAQ", "ENFM Dakar"],
        "interests": ["nature-environnement", "construire-fabriquer", "explorer-decouvrir"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon ÉvoluPêches, la demande d'aides-pêcheurs formés et fiables est très forte au Québec lors de l'ouverture de la saison du crabe des neiges et du homard, les équipages recherchant des marins endurants et dévoués.",
            "pourquoi": "La brièveté des saisons de pêche impose d'être à 100% opérationnel dès le premier jour de marée pour rentabiliser l'année.",
            "a_retenir": "La porte d'entrée incontournable dans le monde fascinant des gens de mer."
        }
    },

    # -----------------------------------------------------------------------
    # 3. MÉCANICIEN MARIN
    # -----------------------------------------------------------------------
    {
        "id": "mecanicien-marin",
        "slug": "mecanicien-marin",
        "title": "Mécanicien Marin / Électromécanicien Naval",
        "aliases": ["Mécanicienne marine", "Mécanicien naval", "Chef mécanicien de navire de pêche", "Technicien de maintenance navale"],
        "icon": "🔧",
        "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Pêche, Aquaculture & Ressources Marines",
        "domainId": "peche-aquaculture",
        "subdomain": "Maintenance & équipements marins",
        "sourceEvoluPeches": True,
        "cnpCode": "74201",
        "isEmerging": False,
        "level": "DEP en mécanique marine (ÉPAQ) ou BTS Mécatronique navale",
        "salary": "🇨🇦 Québec : 45 000 - 90 000 $ CAD/an (Source : ÉvoluPêches / Secteur maritime) • 🇸🇳 Sénégal : 350 000 - 1 200 000 FCFA / mois (Chantiers navals de Dakar / Flotte de pêche)",
        "simpleDefinition": "Le mécanicien marin entretient, diagnostique et répare les moteurs diesel, les circuits électriques, les systèmes hydrauliques de levage et les installations frigorifiques des bateaux de pêche et navires maritimes.",
        "shortDescription": "Fiche documentée par ÉvoluPêches, ce technicien clé garantit la propulsion du navire et la sécurité énergétique en mer où l'assistance extérieure est impossible.",
        "longDescription": "En pleine mer, une panne de moteur ou de générateur électrique peut mettre en péril la vie de l'équipage. Le mécanicien marin intervient dans la salle des machines exiguë et chaude. Selon ÉvoluPêches, il entretient et répare les moteurs diesel, les systèmes électriques, hydrauliques et de réfrigération/climatisation, effectue des tâches de soudure et dessine des plans et des croquis pour adapter les équipements de pêche.",
        "mainObjective": "Garantir la fiabilité absolue de la propulsion navale, des groupes électrogènes et des apparaux hydrauliques de pêche.",
        "companyRole": "Responsable technique de la salle des machines et garant de la sécurité mécanique du bord.",
        "characteristics": [
            "Curiosité",
            "Aptitudes manuelles",
            "Habiletés en mathématiques",
            "Patience",
            "Rigueur et minutie",
            "Débrouillardise"
        ],
        "regions": ["Partout au Québec, avec forte proportion en régions maritimes (Côte-Nord, Gaspésie, Îles-de-la-Madeleine, Bas-Saint-Laurent)"],
        "sourceContext": "Québec / Canada (ÉvoluPêches)",
        "workEnvironment": [
            "⚙️ Salle des machines fermée d'un bateau de pêche avec bruit et chaleur",
            "⚓ Chantiers navals de carénage et cales sèches lors des arrêts techniques",
            "🌊 Interventions d'urgence en mer au milieu de la houle"
        ],
        "missions": [
            "Entretenir et réviser les moteurs diesel marins de propulsion et groupes auxiliaires",
            "Diagnostiquer et dépanner les circuits hydrauliques sous haute pression des treuils et enrouleurs",
            "Entretenir et réparer les génératrices et tableaux électriques du bord",
            "Assurer la maintenance des compresseurs frigorifiques de maintien de la cale à glace",
            "Exécuter des travaux d'ajustage, de tuyauterie marine et de soudure à l'arc ou TIG"
        ],
        "typicalDay": [
            {"time": "07:30", "title": "Ronde matinale de la salle des machines", "desc": "Contrôle des pressions d'huile, températures d'échappement et niveaux des réservoirs de carburant."},
            {"time": "10:00", "title": "Maintenance préventive d'une pompe à eau de mer", "desc": "Remplacement de la turbine caoutchouc (impulseur) du circuit de refroidissement moteur."},
            {"time": "14:00", "title": "Réparation d'un flexible hydraulique de treuil", "desc": "Remplacement d'un flexible fuyant et purge du distributeur hydraulique sous pression."},
            {"time": "16:30", "title": "Relevé des heures moteur et carnet d'entretien", "desc": "Enregistrement des maintenances et commandes de filtres et pièces de rechange auprès des fournisseurs."}
        ],
        "skills": {
            "technical": [
                "Mécanique diesel marine lourde (moteurs Caterpillar, Cummins, Volvo Penta)",
                "Hydraulique navale proportionnelle haute pression",
                "Électricité marine (tableaux 24V continu et 380V triphasé marin)",
                "Thermodynamique et froid embarqué (groupes frigorifiques marins)",
                "Soudure industrielle et tuyauterie cuivre/inox résistant à la corrosion saline"
            ],
            "human": [
                "Débrouillardise et calme olympien en cas d'avarie en mer",
                "Rigueur et minutie dans les serrages et calages de précision",
                "Patience face aux pannes électroniques intermittentes",
                "Aptitude physique à travailler dans des espaces confinés"
            ],
            "tools": [
                "Outillage complet de mécanique navale et clés dynamométriques",
                "Appareils de mesure d'isolement électrique (mégohmmètres) et multimètres",
                "Postes à souder portatifs et meuleuses d'ajustage",
                "Manomètres hydrauliques et détecteurs de fuites de fluides frigorigènes"
            ],
            "analytical": [
                "Diagnostic de vibrations anormales et analyse spectrale d'huile de moteur",
                "Lecture experte de schémas de tuyauterie navale et câblage électrique"
            ]
        },
        "specializations": ["Moteurs marins haute puissance", "Hydraulique navale de pont", "Froid industriel embarqué", "Électromécanique des bateaux de pêche"],
        "studies": {
            "pathway": [
                {"step": "Diplôme d'études professionnelles", "title": "DEP en mécanique marine", "desc": "Formation québécoise de référence dispensée à l'ÉPAQ (Grande-Rivière)."},
                {"step": "Brevet de mécanicien", "title": "Brevet d'officier mécanicien de pêche (classe 4 / 3)", "desc": "Examen de Transports Canada validant les compétences de chef de quart machine."},
                {"step": "Formation continue", "title": "Formations d'usine constructeurs (Caterpillar, Scania)", "desc": "Mise à niveau sur les moteurs marins électroniques récents."}
            ],
            "schools": [
                {"name": "École des pêches et de l’aquaculture du Québec (ÉPAQ) — Québec", "country": "Canada", "scope": "International"},
                {"name": "École Nationale de Formation Maritime (ENFM Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Lycées maritimes dispensant le Bac Pro EMM (Électromécanicien Marine) — France", "country": "France", "scope": "France"}
            ],
            "certifications": ["Brevet de mécanicien de marine (Transports Canada / Affaires Maritimes)", "Attestation manipulation des fluides frigorigènes"],
            "schoolSubjects": ["Mécanique diesel", "Électricité", "Hydraulique", "Dessin technique"]
        },
        "career": {
            "sectors": ["Bateaux de pêche semi-industriels et hauturiers", "Chantiers navals de réparation et d'entretien maritime", "Ateliers de motorisation marine côtière", "Remorqueurs portuaires et navires de service"],
            "employerTypes": ["Armateurs de pêche", "Chantiers navals privés", "Sociétés d'entretien mécanique portuaire"],
            "evolution": "Mécanicien naval junior ➔ Chef mécanicien de navire de pêche ➔ Chef d'atelier en chantier naval ➔ Expert technique d'assurance maritime",
            "pros": "Métier hautement valorisé et respecté par l'équipage, salaire très avantageux lié à la technicité rare, sécurité de l'emploi garantie.",
            "cons": "Espace de travail bruyant, exigü et chaud, interventions d'urgence parfois stressantes en pleine tempête."
        },
        "gettingStarted": {
            "beginnerProject": "Démonter, nettoyer et remplacer les joints d'un carburateur ou d'une pompe à injection diesel d'atelier.",
            "intermediateProject": "Câbler un tableau électrique 24V marin étanche avec disjoncteurs, relais et voyants de contrôle.",
            "advancedProject": "Réaliser le calage complet de la distribution d'un moteur diesel marin 6 cylindres en suivant la fiche constructeur.",
            "portfolioIdeas": ["Schéma hydraulique annoté d'un treuil de pêche", "Rapport d'analyse d'avarie moteur résolue"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "La télémétrie envoie les paramètres moteur par satellite aux centres de diagnostic à terre, mais le serrage mécanique et la réparation en mer restent purement manuels.",
            "automatedTasks": ["Surveillance continue des alertes de surchauffe et pression par capteurs connectés"],
            "emergingSkills": ["Diagnostic des moteurs marins à injection électronique Common Rail", "Maintenance des systèmes de propulsion hybride ou électrique"],
            "humanEdge": "L'oreille avertie du mécanicien qui décèle un cliquetis anormal de bielle et le doigté pour ressouder une pièce cassée en mer."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la maintenance navale concentrée au Port Autonome de Dakar (Dakar-Marine, chantiers navals privés) et le long des quais de pêche est vitale pour éviter l'immobilisation coûteuse des bateaux. L'ENFM de Dakar forme les motoristes et officiers mécaniciens sénégalais.",
            "localSectors": ["Chantiers navals de Dakar (Dakarnave)", "Ateliers de mécanique marine de Saint-Louis et Joal", "Flotte industrielle thonière et chalutière"],
            "remoteWork": "Exclu, présence machine indispensable.",
            "entrepreneurship": "Création d'un atelier mobile de maintenance mécanique diesel et hydraulique navale pour les quais de pêche côtiers."
        },
        "relatedJobSlugs": ["capitaine-proprietaire", "technicien-maintenance-agroequipement", "technicien-maintenance-industrielle-maritime", "aide-pecheur"],
        "connectedFamilies": ["industrie-ingenierie", "transport-logistique", "artisanat-metiers-art"],
        "resources": [{"type": "article", "title": "Fiche Mécanicien marin ÉvoluPêches", "url": "https://evolupeches.org/metiers/mecanicien-marin-mecanicienne-marine/", "source": "ÉvoluPêches"}],
        "sources": ["ÉvoluPêches", "Transports Canada", "ÉPAQ", "Dakarnave"],
        "interests": ["construire-fabriquer", "resoudre-problemes"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon ÉvoluPêches, les mécaniciens marins figurent parmi les spécialistes les plus difficiles à recruter pour les armements, conduisant à des offres d'emploi permanentes et des salaires de haut niveau.",
            "pourquoi": "La triple maîtrise du diesel lourd, de l'hydraulique haute pression et de l'électricité marine dans un contexte de mer est une denrée rare et précieuse.",
            "a_retenir": "Le gardien de la puissance et de la survie de tout navire au large."
        }
    },

    # -----------------------------------------------------------------------
    # 4. MARICULTEUR / MARICULTRICE
    # -----------------------------------------------------------------------
    {
        "id": "mariculteur",
        "slug": "mariculteur",
        "title": "Mariculteur / Maricultrice (Propriétaire-Exploitant en Aquaculture Marine)",
        "aliases": ["Maricultrice", "Éleveur de mollusques marins", "Conchyliculteur marin", "Producteur maricole"],
        "icon": "🦪",
        "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Pêche, Aquaculture & Ressources Marines",
        "domainId": "peche-aquaculture",
        "subdomain": "Aquaculture & mariculture",
        "sourceEvoluPeches": True,
        "cnpCode": "0823",
        "isEmerging": False,
        "level": "DEC en aquaculture ou AEC en élevage des mollusques en suspension (ÉPAQ)",
        "salary": "🇨🇦 Québec : 45 000 - 95 000 $ CAD/an selon volume récolté et cours des mollusques (Source : ÉvoluPêches) • 🇸🇳 Sénégal : 350 000 - 1 200 000 FCFA / mois (Fermes d'huîtres du Saloum et Casamance / ANA)",
        "simpleDefinition": "Le mariculteur élève des organismes marins en eau salée (huîtres, moules, pétoncles, oursins et algues) : il gère ses parcs maricoles, pilote sa barge en mer, supervise la croissance et commercialise sa production.",
        "shortDescription": "Fiche documentée par ÉvoluPêches, ce propriétaire-exploitant novateur conjugue savoir-faire d'élevage en mer et compétences de gestionnaire d'entreprise.",
        "longDescription": "La mariculture est l'élevage de mollusques en eau salée (ex: huîtres, moules, pétoncles) et la culture d'algues. Selon ÉvoluPêches, le mariculteur est un propriétaire-exploitant qui dirige et gère sa propre entreprise avec un effectif de deux ou trois personnes. Il possède les connaissances et le savoir-faire utiles pour mener à bien les activités de production, manœuvrer un bateau, s'assurer d'avoir le matériel adéquat et garantir la santé et la sécurité de l'équipage.",
        "mainObjective": "Produire des mollusques marins et algues d'excellence gastronomique et sanitaire tout en préservant l'écosystème côtier.",
        "companyRole": "Propriétaire-exploitant maricole, formateur de son personnel et stratège de son entreprise.",
        "characteristics": [
            "Débrouillardise et polyvalence",
            "Intérêt pour la mer et le travail extérieur",
            "Rigueur",
            "Efficacité",
            "Bonne condition physique",
            "Pensée analytique et méthodique"
        ],
        "regions": ["Côte-Nord", "Bas-Saint-Laurent", "Gaspésie", "Îles-de-la-Madeleine"],
        "sourceContext": "Québec / Canada (ÉvoluPêches)",
        "workEnvironment": [
            "🌊 Parcs maricoles en mer côtière abritée (baies, lagunes, filières en suspension)",
            "🚤 Barge ostréicole ou mytilicole équipée de grues de levage",
            "🏢 Station terrestre de calibrage, purification et expédition des coquillages"
        ],
        "missions": [
            "Gérer l'entreprise, les finances, la conformité réglementaire et le personnel (2 à 3 personnes)",
            "Donner les orientations stratégiques pour le développement et la rentabilité de l'entreprise",
            "Planifier, organiser et superviser la mise en œuvre de chaque cycle de production des mollusques",
            "Contribuer sur le terrain à l'exécution des tâches d'élevage (pose de filières, détroquage, calibrage)",
            "S'assurer du bon état et de l'entretien permanent du matériel nautique et d'élevage"
        ],
        "typicalDay": [
            {"time": "06:30", "title": "Appareillage de la barge maricole", "desc": "Contrôle de la météo côtière, embarquement de l'équipage et navigation vers les lignes de filières en mer."},
            {"time": "08:30", "title": "Levée des filières de moules ou lanternes de pétoncles", "desc": "Utilisation de la grue hydraulique pour hisser les cordes d'élevage et contrôler la croissance et l'absence de prédateurs (étoiles de mer)."},
            {"time": "13:00", "title": "Opérations de calibrage et dédoublonnage", "desc": "Passage des coquillages dans la calibreuse de bord et réensemencement des petits sujets dans de nouveaux pochons."},
            {"time": "17:00", "title": "Gestion commerciale et traçabilité", "desc": "Enregistrement des lots pour le laboratoire sanitaire et planification des livraisons vers les poissonniers et restaurateurs."}
        ],
        "skills": {
            "technical": [
                "Biologie marine des bivalves (cycle de reproduction, alimentation par filtration)",
                "Techniques d'élevage en suspension (filières sub-flottantes, lanternes, tables)",
                "Conduite et manœuvre de barges maricoles et engins de levage hydrauliques",
                "Normes strictes de salubrité conchylicole et suivi des toxines marines (phytoplancton toxique)",
                "Gestion d'entreprise et commercialisation des produits frais de la mer"
            ],
            "human": [
                "Polyvalence et capacité à alterner travail physique en mer et gestion sur ordinateur",
                "Patience face aux cycles naturels de croissance lente des coquillages (1 à 3 ans)",
                "Sens aigu de la pédagogie pour former et encadrer ses ouvriers maricoles",
                "Rigueur et sens de la sécurité en mer"
            ],
            "tools": [
                "Barges ostréicoles à fond plat et grues hydrauliques de levage",
                "Filières, bouées sub-flottantes et lanternes japonaises d'élevage",
                "Calibreuses rotatives et laveurs de coquillages",
                "Oxymètres et sondes de température et salinité de l'eau"
            ],
            "analytical": [
                "Suivi des courbes de croissance de la biomasse sous l'eau",
                "Calcul du prix de revient par douzaine ou kilogramme de coquillages récolté"
            ]
        },
        "specializations": ["Mytiliculture en suspension (moules bleues)", "Ostréiculture de pleine mer (huîtres)", "Élevage de pétoncles géants", "Algoculture marine (laminaires, wakamé, dulse)"],
        "studies": {
            "pathway": [
                {"step": "Diplôme collégial", "title": "Diplôme d'études collégiales (DEC) en aquaculture", "desc": "Formation québécoise complète dispensée à l'ÉPAQ (Grande-Rivière)."},
                {"step": "Attestation collégiale", "title": "Attestation d'études collégiales (AEC) en élevage des mollusques en suspension", "desc": "Formation spécifique axée sur la mariculture marine."},
                {"step": "Installation", "title": "Obtention de baux maricoles et conformité environnementale", "desc": "Démarches auprès des ministères de l'Agriculture et des Pêches."}
            ],
            "schools": [
                {"name": "École des pêches et de l’aquaculture du Québec (ÉPAQ) — Québec", "country": "Canada", "scope": "International"},
                {"name": "Lycée de la Mer et du Littoral (Bourcefranc-le-Chapus) — France", "country": "France", "scope": "France"},
                {"name": "Institut Universitaire de Pêche et d'Aquaculture (IUPA Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Permis de conducteur de petits bâtiments commerciaux (Transports Canada)", "Certificat d'attestation de salubrité conchylicole"],
            "schoolSubjects": ["Biologie marine", "Aquaculture", "Navigation", "Comptabilité de gestion"]
        },
        "career": {
            "sectors": ["Entreprises maricoles privées en eau salée", "Groupements de producteurs de mollusques", "Fermes aquacoles de diversification marine"],
            "employerTypes": ["Propriétaire de son exploitation maricole", "Coopératives de mariculteurs"],
            "evolution": "Ouvrier maricole ➔ Chef de parc aquacole ➔ Mariculteur propriétaire-exploitant ➔ Dirigeant d'une grande entreprise conchylicole",
            "pros": "Activité pionnière et écologique qui ne nécessite aucun apport d'aliments artificiels (les coquillages se nourrissent du plancton naturel), cadre de travail grandiose en baie marine, valorisation forte des produits.",
            "cons": "Sensibilité aux fermetures sanitaires temporaires (efflorescences d'algues toxiques), travail physique l'hiver lors de la prise des glaces, lourdeur des investissements maritimes."
        },
        "gettingStarted": {
            "beginnerProject": "Visiter une ferme d'élevage de moules en baie pour observer la structure des filières immergées sous bouées.",
            "intermediateProject": "Mesurer et consigner pendant un mois la salinité et la température de l'eau d'un site côtier propice à l'ostréiculture.",
            "advancedProject": "Rédiger le plan prévisionnel de production d'un parc de 50 filières mytilicoles avec calendrier d'ensemencement et de récolte.",
            "portfolioIdeas": ["Schéma côté d'une filière maricole en suspension", "Dossier d'analyse de rentabilité d'une concession maricole"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des bouées connectées équipées de spectromètres surveillent en direct la concentration de phytoplancton pour anticiper les marées rouges et optimiser les dates de récolte.",
            "automatedTasks": ["Relevé automatique des données physico-chimiques marines par bouées IoT"],
            "emergingSkills": ["Surveillance des concessions maricoles par drones aériens et sous-marins légers"],
            "humanEdge": "Le savoir-faire pour juger de la chair pleine d'un mollusque et la manœuvre précise de la barge lors des coups de vent en baie."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'ostréiculture est une tradition ancestrale portée par les femmes du delta du Sine Saloum et de Casamance. L'Agence Nationale de l'Aquaculture (ANA) modernise la filière en introduisant des guirlandes et tables ostréicoles modernes qui évitent la destruction des racines de palétuviers dans la mangrove.",
            "localSectors": ["Delta du Sine Saloum (Fatick, Toubacouta, Joal)", "Mangroves de Casamance (Ziguinchor, Oussouye)", "Agence Nationale de l'Aquaculture (ANA)"],
            "remoteWork": "100% sur l'eau et dans les parcs.",
            "entrepreneurship": "Création d'une ferme maricole moderne d'huîtres de palétuvier avec centre de purification aux normes d'exportation vers Dakar."
        },
        "relatedJobSlugs": ["ouvrier-maricole", "aquaculteur", "biologiste-marin", "controleur-qualite-produits-aquatiques"],
        "connectedFamilies": ["environnement-climat", "commerce-marketing", "recherche-sciences"],
        "resources": [{"type": "article", "title": "Fiche Mariculteur ÉvoluPêches", "url": "https://evolupeches.org/metiers/mariculteur-maricultrice/", "source": "ÉvoluPêches"}],
        "sources": ["ÉvoluPêches", "ÉPAQ", "ANA Sénégal"],
        "interests": ["nature-environnement", "construire-fabriquer", "negocier-convaincre"],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Selon ÉvoluPêches, la mariculture est considérée comme l'une des productions animales les plus écologiques de la planète car les mollusques et les algues ne consomment aucun aliment artificiel et filtrent naturellement l'eau de mer.",
            "pourquoi": "Une seule huître adulte peut filtrer jusqu'à 200 litres d'eau par jour, améliorant la clarté et la qualité de l'écosystème côtier où elle est élevée.",
            "a_retenir": "Un métier d'avenir absolu alliant esprit d'entreprise et régénération de la biodiversité marine."
        }
    },

    # -----------------------------------------------------------------------
    # 5. OUVRIER MARICOLE
    # -----------------------------------------------------------------------
    {
        "id": "ouvrier-maricole",
        "slug": "ouvrier-maricole",
        "title": "Ouvrier Maricole / Ouvrière Maricole (Agent Aquacole Marin)",
        "aliases": ["Ouvrière maricole", "Agent de parc maricole", "Aide-mariculteur", "Ouvrier ostréicole"],
        "icon": "🐚",
        "image": "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Pêche, Aquaculture & Ressources Marines",
        "domainId": "peche-aquaculture",
        "subdomain": "Aquaculture & mariculture",
        "sourceEvoluPeches": True,
        "cnpCode": "8613",
        "isEmerging": False,
        "level": "Formation en entreprise (Compagnonnage) accessible sans diplôme préalable",
        "salary": "🇨🇦 Québec : 32 000 - 55 000 $ CAD/an (Source : ÉvoluPêches / Secteur maricole) • 🇸🇳 Sénégal : 180 000 - 500 000 FCFA / mois (Fermes aquacoles et conchylicoles)",
        "simpleDefinition": "L'ouvrier maricole participe aux travaux quotidiens de l'élevage des mollusques en mer : il fabrique et entretient les cordes et lanternes, travaille sur la barge en mer, manipule et trie les espèces dans le respect de la qualité.",
        "shortDescription": "Fiche documentée par ÉvoluPêches, cet artisan de terrain prend soin des coquillages tout au long de leur croissance en milieu marin.",
        "longDescription": "L'ouvrier maricole met en œuvre les bonnes techniques de travail dans l'élevage d'espèces marines et respecte les règles d'hygiène et de salubrité pour assurer la qualité du produit. Comme le précise ÉvoluPêches, il doit porter une attention particulière à l'exécution des activités visant la manipulation et l'entreposage des espèces afin de ne pas altérer leur fraîcheur et leur chair délicate.",
        "mainObjective": "Réaliser avec rigueur les gestes techniques d'élevage, d'entretien des équipements et de manipulation soignée des mollusques en mer.",
        "companyRole": "Opérateur d'élevage marin, garant de la bientraitance des espèces vivantes et de la qualité finale.",
        "characteristics": [
            "Souci du travail bien fait",
            "Bonne condition physique",
            "Autonomie",
            "Habileté manuelle",
            "Esprit d'équipe"
        ],
        "regions": ["Côte-Nord", "Bas-Saint-Laurent", "Gaspésie", "Îles-de-la-Madeleine"],
        "sourceContext": "Québec / Canada (ÉvoluPêches)",
        "workEnvironment": [
            "🌊 Travail régulier sur une barge en mer par temps frais et humide",
            "🧤 Cirés marins, gants de travail étanches et bottes antidérapantes",
            "🏢 Hangars côtiers de calibrage, nettoyage et mise en filets des coquillages"
        ],
        "missions": [
            "Exécuter les activités quotidiennes liées à l'élevage des mollusques (ensemencement, détroquage)",
            "Fabriquer, installer, nettoyer et entretenir le matériel d'élevage (cordes, lanternes, poches)",
            "Travailler en mer sur la barge pour la levée et la remise à l'eau des structures d'élevage",
            "Manipuler, calibrer et entreposer soigneusement les mollusques sans casser les coquilles",
            "Appliquer rigoureusement les protocoles d'hygiène, de salubrité et de sécurité maritime"
        ],
        "typicalDay": [
            {"time": "07:00", "title": "Préparation des cordes d'élevage au hangar", "desc": "Boudinage des jeunes naissains de moules sur les cordages d'ensemencement avec filets biodégradables."},
            {"time": "09:00", "title": "Chantier en mer sur les filières", "desc": "Embarquement sur la barge, accrochage des nouvelles cordes sur la ligne principale en suspension sous l'eau."},
            {"time": "13:30", "title": "Nettoyage mécanique des lanternes de pétoncles", "desc": "Passage au nettoyeur rotatif pour éliminer les salissures biologiques (algues et balanes) qui étouffent les mollusques."},
            {"time": "16:00", "title": "Tri et ensachage pour l'expédition", "desc": "Mise en sacs de 15 kg des moules prêtes pour la vente et stockage en chambre froide ventilée."}
        ],
        "skills": {
            "technical": [
                "Techniques d'assemblage et de matelotage des cordes de mariculture",
                "Gestes de manipulation douce des coquillages fragiles",
                "Conduite et entretien des laveurs et calibreuses de coquillages",
                "Règles d'hygiène et de sécurité sanitaire conchylicole",
                "Sécurité des travaux sur barge maritime"
            ],
            "human": [
                "Souci constant du travail bien fait et méticulosité",
                "Bonne condition physique et résistance au travail dans l'eau salée",
                "Autonomie dans l'exécution des tâches confiées",
                "Esprit d'équipe et bonne communication à bord"
            ],
            "tools": [
                "Poches ostréicoles, lanternes japonaises et collecteurs de naissain",
                "Laveurs haute pression d'eau de mer et brosses rotatives",
                "Couteaux à détroquer et agrafeuses conchylicoles pneumatiques",
                "Bacs de manipulation ajourés et chariots de transport"
            ],
            "analytical": [
                "Contrôle visuel de l'état sanitaire et de la fermeture étanche des coquilles",
                "Pesée d'échantillons pour le suivi de la croissance"
            ]
        },
        "specializations": ["Ouvrier mytilicole (moules)", "Ouvrier ostréicole (huîtres)", "Ouvrier en écloserie maricole", "Ouvrier d'algoculture"],
        "studies": {
            "pathway": [
                {"step": "Formation en entreprise", "title": "Formation en entreprise / Compagnonnage au poste", "desc": "Mode d'apprentissage principal documenté par ÉvoluPêches."},
                {"step": "Diplôme professionnel", "title": "Attestation d'études ou DEP professionnel", "desc": "Possibilité d'accès aux formations modulaires de l'ÉPAQ pour progresser."}
            ],
            "schools": [
                {"name": "École des pêches et de l’aquaculture du Québec (ÉPAQ) — Québec", "country": "Canada", "scope": "International"},
                {"name": "Lycées maritimes et conchylicoles (France)", "country": "France", "scope": "France"},
                {"name": "Centres de formation aquacole de l'ANA — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Formation de sécurité pour passagers de bâtiments de travail", "Certificat d'opérateur conchylicole"],
            "schoolSubjects": ["Biologie pratique", "Travaux maritimes", "Hygiène conchylicole"]
        },
        "career": {
            "sectors": ["Fermes maricoles privées en eau de mer", "Coopératives de conchyliculteurs", "Centres de purification et d'expédition de coquillages"],
            "employerTypes": ["Mariculteurs exploitants indépendants", "PME aquacoles côtières"],
            "evolution": "Ouvrier maricole débutant ➔ Ouvrier maricole qualifié ➔ Chef d'équipe de parc maricole ➔ Mariculteur propriétaire-exploitant",
            "pros": "Travail sain au contact direct de la mer, satisfaction de voir grandir des millions d'organismes vivants, perspectives d'évolution vers la gestion de son propre parc.",
            "cons": "Travail physique avec charges régulières (sacs de coquillages), humidité constante et fraîcheur marine."
        },
        "gettingStarted": {
            "beginnerProject": "Effectuer une saison de récolte conchylicole comme saisonnier pour apprendre les gestes de calibrage.",
            "intermediateProject": "Apprendre à monter une lanterne d'élevage en suspension avec disques en filet tendu.",
            "advancedProject": "Maîtriser les protocoles de vérification de survie des naissains après une période de grand froid.",
            "portfolioIdeas": ["Attestation de stage en ferme maricole", "Journal des opérations d'élevage réalisées"]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "La manipulation délicate des coquilles vivantes et la pose manuelle des naissains ne sont pas automatisables par des machines rigides.",
            "automatedTasks": ["Calibrage automatique par trieuses mécaniques"],
            "emergingSkills": ["Utilisation de balances connectées pour la traçabilité des lots"],
            "humanEdge": "La délicatesse de la main pour manipuler un jeune pétoncle sans briser le bord fragile de sa coquille."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les ouvrières et collectrices maricoles du delta du Saloum (Fatick, Foundiougne, Dionewar) développent des techniques modernes d'engraissement d'huîtres sur guirlandes suspendues, générant des revenus autonomes majeurs pour les femmes rurales.",
            "localSectors": ["Delta du Saloum (GIE de femmes transformatrices d'huîtres)", "Casamance (estuaire du fleuve Casamance)", "Fermes pilotes de l'Agence Nationale de l'Aquaculture (ANA)"],
            "remoteWork": "100% sur le terrain.",
            "entrepreneurship": "Création d'un atelier d'engraissement et de conditionnement d'huîtres fraîches locales pour les hôtels de Dakar et Saly."
        },
        "relatedJobSlugs": ["mariculteur", "aquaculteur", "aide-pecheur", "prepose-transformation-produits-marins"],
        "connectedFamilies": ["environnement-climat", "artisanat-metiers-art", "commerce-marketing"],
        "resources": [{"type": "article", "title": "Fiche Ouvrier maricole ÉvoluPêches", "url": "https://evolupeches.org/metiers/ouvrier-ouvriere-maricole/", "source": "ÉvoluPêches"}],
        "sources": ["ÉvoluPêches", "ÉPAQ", "ANA Sénégal"],
        "interests": ["nature-environnement", "construire-fabriquer"],
        "saviezVous": {
            "statut": "metier_stable",
            "fait": "Selon ÉvoluPêches, l'ouvrier maricole qui démontre de la rigueur et apprend les techniques complètes de production peut évoluer directement vers le rôle de mariculteur exploitant en reprenant ou créant des concessions en mer.",
            "pourquoi": "La mariculture récompense l'expérience pratique acquise au contact direct des cycles du milieu marin.",
            "a_retenir": "Un travailleur de la mer discret mais indispensable à l'essor de l'aquaculture durable."
        }
    },

    # -----------------------------------------------------------------------
    # 6. PRÉPOSÉ À LA TRANSFORMATION DES PRODUITS MARINS
    # -----------------------------------------------------------------------
    {
        "id": "prepose-transformation-produits-marins",
        "slug": "prepose-transformation-produits-marins",
        "title": "Préposé / Préposée à la Transformation des Produits Marins",
        "aliases": ["Ouvrier de transformation des produits marins", "Fileteur de poisson", "Opérateur en usine de produits aquatiques", "Préposée à la transformation"],
        "icon": "🏭",
        "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Pêche, Aquaculture & Ressources Marines",
        "domainId": "peche-aquaculture",
        "subdomain": "Transformation des produits marins",
        "sourceEvoluPeches": True,
        "cnpCode": "9618 ou 9463",
        "isEmerging": False,
        "level": "AEP en opération d’équipements de transformation alimentaire, PAMT ou Formation en entreprise",
        "salary": "🇨🇦 Québec : 32 000 - 52 000 $ CAD/an (Source : ÉvoluPêches / Usines de transformation) • 🇸🇳 Sénégal : 180 000 - 550 000 FCFA / mois (Usines de conserve de thon et mareyage de Dakar)",
        "simpleDefinition": "Le préposé à la transformation prépare les poissons, crustacés et mollusques en usine : filetage, cuisson des crabes ou crevettes, fumaison, congélation rapide et emballage étanche selon des normes sanitaires strictes.",
        "shortDescription": "Fiche documentée par ÉvoluPêches, cet opérateur indispensable transforme les captures brutes en produits savoureux, calibrés et prêts à cuisiner pour les marchés mondiaux.",
        "longDescription": "Le préposé à la transformation effectue principalement les tâches liées à la préparation, à la cuisson, à la fumaison, à la congélation et à l'emballage des produits marins en vue d'obtenir des produits de qualité et respectant les normes établies. Selon ÉvoluPêches, il apprête avec dextérité le poisson (écaillage, étêtage, levage des filets, désarêtage), les crustacés (cuisson au bain, décorticage de crabe ou crevette) et les mollusques, sous la supervision des contremaîtres d'usine.",
        "mainObjective": "Transformer avec hygiène, précision et rapidité la matière première marine fraîche en filets, portions ou conserves de haute qualité marchande.",
        "companyRole": "Opérateur de transformation au cœur de la chaîne de valeur agroalimentaire marine.",
        "characteristics": [
            "Travail manuel",
            "Bonne condition physique",
            "Esprit d'équipe"
        ],
        "regions": ["Partout au Québec, avec forte proportion en régions maritimes (Côte-Nord, Gaspésie, Îles-de-la-Madeleine, Bas-Saint-Laurent)"],
        "sourceContext": "Québec / Canada (ÉvoluPêches)",
        "skillsRecognition": {
            "available": True,
            "description": "Dispositif officiel de reconnaissance des compétences de la main-d'œuvre (RAC) d'ÉvoluPêches pour le métier de préposé à la transformation, accessible avec 3 000 heures d'expérience professionnelle dans le métier pour obtenir le certificat de qualification.",
            "source": "ÉvoluPêches"
        },
        "workEnvironment": [
            "🏭 Ateliers réfrigérés d'usines de transformation de produits de la mer (température contrôlée 8-12°C)",
            "🥼 Tenue sanitaire stérile intégrale (bottes blanches, tablier imperméable, charlotte, gants en cotte de mailles)",
            "❄️ Lignes de congélation rapide à l'azote, tunnels de fumaison et autoclaves de cuisson"
        ],
        "missions": [
            "Apprêter les poissons (étêtage, éviscération, levage de filets, dépeçage, désarêtage)",
            "Cuire, refroidir et décortiquer les crustacés (homards, crabes des neiges, crevettes nordiques)",
            "Assurer les opérations de fumaison traditionnelle ou industrielle des poissons (saumon, flétan, hareng)",
            "Conduire les machines de congélation cryogénique ou sous plaques et de mise sous vide",
            "Peser, calibrer, étiqueter et emballer les produits finis selon les cahiers des charges clients"
        ],
        "typicalDay": [
            {"time": "06:00", "title": "Passage au sas sanitaire et prise de poste", "desc": "Désinfection des bottes, lavage des mains stérile et affûtage au fusil des couteaux de filetage."},
            {"time": "07:30", "title": "Ligne de filetage de poisson frais", "desc": "Levage de filets de sébaste ou de morue avec geste précis pour maximiser le rendement matière sans arêtes."},
            {"time": "11:30", "title": "Surveillance de la cuisson des crabes", "desc": "Contrôle des températures à cœur dans les cuiseurs automatisés et trempage en saumure glacée."},
            {"time": "14:30", "title": "Conditionnement et operculage sous vide", "desc": "Vérification du scellage des barquettes, passage au détecteur de métaux et mise en cartons d'expédition."}
        ],
        "skills": {
            "technical": [
                "Techniques manuelles expertes de filetage et découpe de poissons",
                "Paramètres de cuisson et de saumurage des crustacés",
                "Maîtrise des procédés de surgélation rapide (IQF) et de fumoir",
                "Normes d'hygiène HACCP en milieu aquatique",
                "Conduite des équipements de thermoformage et d'operculage sous vide"
            ],
            "human": [
                "Dextérité manuelle et rapidité gestuelle soutenue",
                "Endurance physique en environnement froid et humide",
                "Esprit d'équipe pour maintenir le rythme de la chaîne",
                "Rigueur absolue dans le respect des règles sanitaires"
            ],
            "tools": [
                "Couteaux de filetage professionnels flexibles et fusils d'affûtage",
                "Gants de protection en cotte de mailles en acier inoxydable",
                "Trieuses pondérales automatiques et peseuses associatives",
                "Tunnels de surgélation à spirale et operculeuses sous vide"
            ],
            "analytical": [
                "Calcul du ratio de rendement matière (poids de filet / poids brut)",
                "Contrôle visuel de l'absence totale de parasites (anisakis) sous table de mirage lumineuse"
            ]
        },
        "specializations": ["Fileteur spécialisé poisson noble", "Opérateur de cuisson et décorticage de crustacés", "Saurisseur / Maître de fumaison marine", "Conducteur d'équipements de conditionnement sous vide"],
        "studies": {
            "pathway": [
                {"step": "Attestation d'études professionnelles", "title": "Attestation d’études professionnelles (AEP) en opération d’équipements de transformation alimentaire", "desc": "Formation québécoise qualifiante dispensée en centre de formation professionnelle."},
                {"step": "Compagnonnage certifié", "title": "Programme d’apprentissage en milieu de travail (PAMT)", "desc": "Apprentissage en usine avec un tuteur compagnon menant à un certificat de qualification professionnelle."},
                {"step": "Reconnaissance de l'expérience", "title": "Reconnaissance des compétences de la main-d’œuvre (RAC)", "desc": "Dispositif d'ÉvoluPêches validant officiellement les compétences après 3 000 heures de pratique."}
            ],
            "schools": [
                {"name": "Centres de formation professionnelle du Québec (Inforoute FPT) — Québec", "country": "Canada", "scope": "International"},
                {"name": "Institut de Technologie Alimentaire du Québec (ITAQ) — Québec", "country": "Canada", "scope": "Canada"},
                {"name": "Institut de Technologie Alimentaire (ITA Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat de qualification professionnelle PAMT (Emploi-Québec)", "Certificat d'hygiène et salubrité alimentaires (MAPAQ)"],
            "schoolSubjects": ["Technologie alimentaire", "Hygiène HACCP", "Découpe industrielle", "Sécurité au travail"]
        },
        "career": {
            "sectors": ["Usines de transformation de poissons et fruits de mer", "Conserveries de thon et sardineries", "Entreprises de saurisserie et fumoirs artisanaux", "Ateliers de mareyage des ports de pêche"],
            "employerTypes": ["Industries de transformation aquatique", "Grandes coopératives de pêcheurs", "Grossistes maritimes"],
            "evolution": "Préposé à la transformation ➔ Préposé qualifié / Fileteur d'élite ➔ Superviseur d'équipe de ligne ➔ Contremaître d'usine ➔ Contrôleur de la qualité en usine",
            "pros": "Débouchés massifs en usine côtière, reconnaissance formelle des compétences sans prérequis scolaire lourd, évolution hiérarchique rapide pour les profils assidus.",
            "cons": "Travail en atmosphère réfrigérée, gestes répétitifs exigeant une bonne ergonomie posturale, odeur caractéristique inhérente aux produits de la mer."
        },
        "gettingStarted": {
            "beginnerProject": "S'entraîner à lever parfaitement les filets d'un poisson rond et d'un poisson plat sans laisser de chair sur l'arête centrale.",
            "intermediateProject": "Mettre en pratique un protocole complet de désinfection d'un plan de découpe en respectant les étapes BPH (Bonnes Pratiques d'Hygiène).",
            "advancedProject": "Réaliser une séance de fumaison à froid d'un filet de saumon avec maîtrise des dosages de sel, sucre et temps de séchage.",
            "portfolioIdeas": ["Photos de découpe de filets réguliers et nets", "Attestation de participation à une formation hygiène alimentaire"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des robots équipés de jets d'eau sous très haute pression découpent certaines espèces, mais la délicatesse d'éviscération des crabes ou des poissons nobles reste l'apanage des mains expertes.",
            "automatedTasks": ["Tri automatique des crevettes par caméras haute cadence", "Pesée et operculage automatisés"],
            "emergingSkills": ["Pilotage de trancheurs automatiques à guidage laser"],
            "humanEdge": "La sensibilité tactile pour déceler une arête restante et retirer la chair fragile du homard sans l'écraser."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les usines de transformation de poisson de Dakar (conserves de thon SCASA, usines de conditionnement de poulpe et crevettes de la zone portuaire) et les sites traditionnels de fumage et séchage de Guet Ndar et Joal emploient des milliers de femmes et d'ouvriers.",
            "localSectors": ["Zone industrielle du Port Autonome de Dakar (conserves et surgélation)", "Centres de mareyage de Joal-Fadiouth et Mbour", "GIE de femmes transformatrices de poisson (kethiakh, tambadiang)"],
            "remoteWork": "100% sur le site de transformation.",
            "entrepreneurship": "Création d'une micro-unité semi-industrielle de fumage hygiénique de poisson noble sous emballage sous vide pour les grandes surfaces de Dakar."
        },
        "relatedJobSlugs": ["controleur-qualite-produits-aquatiques", "technicien-maintenance-industrielle-maritime", "conducteur-ligne-agroalimentaire", "ouvrier-maricole"],
        "connectedFamilies": ["industrie-ingenierie", "commerce-marketing", "sante-biomedical"],
        "resources": [{"type": "article", "title": "Fiche Préposé à la transformation ÉvoluPêches", "url": "https://evolupeches.org/metiers/prepose-preposee-a-la-transformation-des-produits-marins/", "source": "ÉvoluPêches"}],
        "sources": ["ÉvoluPêches", "ITAQ", "PAMT Québec", "ITA Dakar"],
        "interests": ["construire-fabriquer", "nature-environnement"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon ÉvoluPêches, les usines maritimes québécoises recrutent massivement des préposés à la transformation et ont mis en place un dispositif PAMT avec prime de qualification pour pallier la pénurie de main-d'œuvre côtière.",
            "pourquoi": "La saison de pointe (printemps-été) demande de traiter des tonnes de homards et crabes en un temps record pour garantir leur extrême fraîcheur sur les tables du monde entier.",
            "a_retenir": "Un métier moteur de l'économie littorale, offrant une trajectoire documentée vers les postes de chef d'équipe et contrôle qualité."
        }
    },

    # -----------------------------------------------------------------------
    # 7. CONTRÔLEUR DE LA QUALITÉ EN USINE AQUATIQUE
    # -----------------------------------------------------------------------
    {
        "id": "controleur-qualite-produits-aquatiques",
        "slug": "controleur-qualite-produits-aquatiques",
        "title": "Contrôleur de la Qualité en Usine de Produits Aquatiques / Auditeur HACCP Marin",
        "aliases": ["Contrôleuse de la qualité", "Technicienne en contrôle qualité des produits marins", "Responsable qualité usine marée", "Inspecteur qualité poissons et fruits de mer"],
        "icon": "🧪",
        "image": "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Pêche, Aquaculture & Ressources Marines",
        "domainId": "peche-aquaculture",
        "subdomain": "Qualité & sécurité des produits aquatiques",
        "sourceEvoluPeches": True,
        "cnpCode": "2222 ou 22111",
        "isEmerging": False,
        "level": "DEC en transformation aquatique, AEC en contrôle qualité (ÉPAQ) ou BAC en sciences des aliments",
        "salary": "🇨🇦 Québec : 42 000 - 78 000 $ CAD/an (Source : ÉvoluPêches / Agroalimentaire marin) • 🇸🇳 Sénégal : 350 000 - 1 100 000 FCFA / mois (Laboratoires d'inspection sanitaire, ASN, usines exportatrices)",
        "simpleDefinition": "Le contrôleur qualité en usine aquatique inspecte les poissons et fruits de mer, prélève des échantillons microbiologiques, vérifie les températures et veille au respect strict des normes sanitaires (HACCP) et des exigences d'exportation.",
        "shortDescription": "Fiche documentée par ÉvoluPêches, ce garant de la salubrité veille à ce qu'aucun produit marin impropre ou contaminé ne quitte l'usine pour la consommation humaine.",
        "longDescription": "Les produits de la mer sont hautement périssables et sensibles aux dégradations bactériennes et aux toxines. Selon ÉvoluPêches, le contrôleur conçoit, prépare et voit à la mise en œuvre efficace des procédures de travail, inspecte les lieux de production et échantillonne la matière première lors des différentes étapes de transformation. Il analyse la fraîcheur organoleptique, teste l'eau des bassins et valide la conformité des étiquetages nutritionnels et de traçabilité.",
        "mainObjective": "Garantir la sécurité sanitaire irréprochable des aliments marins, la traçabilité des lots et la conformité aux normes internationales d'exportation.",
        "companyRole": "Bouclier sanitaire de l'usine et garant officiel de la conformité réglementaire.",
        "characteristics": [
            "Minutie",
            "Intérêt pour les nouvelles technologies",
            "Capacité d'application des règles",
            "Détection des problèmes",
            "Méthode"
        ],
        "regions": ["Partout au Québec, mais forte proportion des emplois en régions maritimes (Côte-Nord, Gaspésie, Îles-de-la-Madeleine, Bas-Saint-Laurent)"],
        "sourceContext": "Québec / Canada (ÉvoluPêches)",
        "workEnvironment": [
            "🔬 Laboratoire d'analyses microbiologiques et physico-chimiques attenant à l'usine",
            "🏭 Ateliers de transformation pour l'inspection des chaînes de production",
            "📋 Rencontres régulières avec les inspecteurs gouvernementaux de salubrité (ACIA / MAPAQ)"
        ],
        "missions": [
            "Concevoir, préparer et auditer l'application des procédures écrites du plan HACCP",
            "Inspecter les installations de production, la propreté des lignes et l'hygiène du personnel",
            "Échantillonner la matière première à réception et aux étapes clés de cuisson et congélation",
            "Effectuer les analyses d'altération (azote basique volatil total ABVT, pH, présence de parasites)",
            "Gérer les non-conformités, bloquer les lots suspects et superviser les audits clients internationaux"
        ],
        "typicalDay": [
            {"time": "06:30", "title": "Inspection sanitaire avant démarrage", "desc": "Contrôle à l'écouvillon de surface des tapis convoyeurs et validation de l'autorisation de démarrage de la ligne."},
            {"time": "09:00", "title": "Contrôle de réception des prises de pêche", "desc": "Mesure de la température au cœur des poissons à bord des camions isothermes et test organoleptique (yeux, ouïes, fermeté)."},
            {"time": "13:30", "title": "Analyses microbiologiques au laboratoire", "desc": "Ensemencement sur boîtes de Pétri pour recherche de coliformes, salmonelles et listeria dans les produits finis."},
            {"time": "16:00", "title": "Vérification des certificats d'exportation", "desc": "Validation des dossiers de traçabilité et délivrance des bons de libération des palettes pour les marchés américain et européen."}
        ],
        "skills": {
            "technical": [
                "Normes internationales de sécurité sanitaire des produits aquatiques (HACCP, Codex Alimentarius, BRC/IFS)",
                "Microbiologie alimentaire spécifique aux produits marins (Listeria monocytogenes, Vibrio, histamine)",
                "Techniques d'évaluation sensorielle de fraîcheur (grille Torry / Quality Index Method QIM)",
                "Chimie analytique des produits de la mer (dosage de l'histamine, des sulfites et métaux lourds)",
                "Réglementation sur l'étiquetage des allergènes et la traçabilité des espèces marines"
            ],
            "human": [
                "Rigueur absolue et intransigeance face aux écarts sanitaires",
                "Grand sens de l'observation et détection rapide des anomalies",
                "Pédagogie pour expliquer les règles aux ouvriers sans complaisance",
                "Aptitude à résister à la pression commerciale en cas de blocage de lot"
            ],
            "tools": [
                "Luminomètres ATP pour contrôles d'hygiène de surface instantanés",
                "Thermomètres à sonde piquée étalonnés et enregistreurs de température",
                "Réfractomètres, pH-mètres et kits de dosage rapide de l'histamine",
                "Logiciels de gestion documentaire qualité et traçabilité de lots"
            ],
            "analytical": [
                "Interprétation des courbes de cinétique bactérienne",
                "Analyse des causes racines lors d'une dérive de température de cuisson"
            ]
        },
        "specializations": ["Qualité des conserves de poisson (stérilisation)", "Qualité des produits crus et surgelés exportés", "Contrôle des toxines marines conchylicoles", "Auditeur de certifications durables (MSC, ASC)"],
        "studies": {
            "pathway": [
                {"step": "Diplôme collégial", "title": "Diplôme d’études collégiales (DEC) en transformation des produits aquatiques", "desc": "Formation de référence dispensée à l'ÉPAQ."},
                {"step": "Attestation collégiale", "title": "Attestation d’études collégiales (AEC) en contrôle de la qualité des produits aquatiques", "desc": "Formation ciblée sur le laboratoire et le contrôle en usine."},
                {"step": "Diplôme universitaire", "title": "Baccalauréat en sciences et technologie des aliments (BAC)", "desc": "Formation supérieure à l'Université Laval ou McGill University."},
                {"step": "Apprentissage PAMT", "title": "Programme d’apprentissage en milieu de travail (PAMT)", "desc": "Perfectionnement professionnel documenté par ÉvoluPêches."}
            ],
            "schools": [
                {"name": "École des pêches et de l’aquaculture du Québec (ÉPAQ) — Québec", "country": "Canada", "scope": "International"},
                {"name": "Institut de Technologie Agroalimentaire du Québec (ITAQ La Pocatière) — Québec", "country": "Canada", "scope": "Canada"},
                {"name": "Université Laval (Faculté des sciences de l'agriculture et de l'alimentation) — Québec", "country": "Canada", "scope": "Canada"},
                {"name": "Institut de Technologie Alimentaire (ITA Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat de responsable HACCP certifié", "Auditeur interne ISO 22000 / FSSC 22000"],
            "schoolSubjects": ["Microbiologie", "Chimie alimentaire", "Droit alimentaire", "Méthode HACCP"]
        },
        "career": {
            "sectors": ["Grandes usines de transformation de produits marins", "Conserveries et ateliers de saurisserie", "Laboratoires d'analyses agroalimentaires privés (SGS, Bureau Veritas)", "Agences gouvernementales d'inspection des aliments (ACIA, MAPAQ, DGAL)"],
            "employerTypes": ["Industries de transformation", "Organismes d'audit et de certification", "Services vétérinaires d'État"],
            "evolution": "Technicien de laboratoire qualité ➔ Contrôleur qualité usine ➔ Directeur de la qualité ➔ Directeur de production d'usine",
            "pros": "Poste éminemment stratégique garantissant la réputation de l'entreprise, forte reconnaissance technique, passerelle directe vers la direction d'usine.",
            "cons": "Responsabilité lourde en cas de litige sanitaire, nécessité fréquente de stopper une ligne en cas de non-conformité, horaires matinaux."
        },
        "gettingStarted": {
            "beginnerProject": "Évaluer la fraîcheur de 5 poissons entiers sur un étal de poissonnier en appliquant la grille officielle QIM (Quality Index Method).",
            "intermediateProject": "Rédiger le tableau d'analyse des dangers biologiques, chimiques et physiques pour une ligne de cuisson de crevettes.",
            "advancedProject": "Réaliser un audit à blanc complet d'un atelier de découpe de poisson selon le référentiel de salubrité de l'Agence d'inspection des aliments.",
            "portfolioIdeas": ["Plan de maîtrise sanitaire HACCP marin complet", "Rapport d'audit qualité illustré avec actions correctives"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des caméras multispectrales et des nez électroniques automatisent la détection de l'oxydation des graisses et des arêtes cachées, facilitant le travail de surveillance de l'auditeur.",
            "automatedTasks": ["Enregistrement sans fil continu des températures des chambres froides", "Détection automatique des défauts de scellage d'emballages par vision"],
            "emergingSkills": ["Analyse rapide de l'ADN d'espèces marines par PCR portative contre la fraude d'étiquetage", "Traçabilité sur technologie blockchain alimentaire"],
            "humanEdge": "L'intégrité morale pour refuser le départ d'un conteneur douteux et le dialogue constructif avec le chef de production."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la conformité aux normes sanitaires européennes est indispensable pour exporter poissons nobles, crevettes et poulpes vers le marché international. La Direction des Pêches Maritimes (DPM) et les laboratoires agréés de Dakar emploient des contrôleurs qualité stricts.",
            "localSectors": ["Industries exportatrices de produits halieutiques de Dakar et Thiès", "Laboratoire national d'analyse des produits de la pêche (DPM Dakar)", "Association Sénégalaise de Normalisation (ASN)"],
            "remoteWork": "Rapports d'audit faisables en télétravail partiel, inspections sur place requises.",
            "entrepreneurship": "Création d'un cabinet d'assistance technique et d'audit HACCP pour les PME de pêche artisanale souhaitant exporter vers l'Europe."
        },
        "relatedJobSlugs": ["responsable-qualite-haccp-agri", "prepose-transformation-produits-marins", "biologiste-marin", "ingenieur-agroalimentaire"],
        "connectedFamilies": ["sante-biomedical", "conseil-audit", "droit-justice"],
        "resources": [{"type": "article", "title": "Fiche Contrôleur de la qualité ÉvoluPêches", "url": "https://evolupeches.org/metiers/controleur-controleuse-de-la-qualite-en-usine-de-transformation-de-produits-aquatiques/", "source": "ÉvoluPêches"}],
        "sources": ["ÉvoluPêches", "ÉPAQ", "Université Laval", "DPM Sénégal"],
        "interests": ["resoudre-problemes", "nature-environnement"],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Selon ÉvoluPêches, les perspectives d'avancement du contrôleur de la qualité mènent directement aux fonctions prestigieuses de Directeur de la qualité et Directeur de production.",
            "pourquoi": "La maîtrise intime des procédés industriels et des règles de sécurité sanitaire fait de ces professionnels les meilleurs candidats pour diriger l'ensemble d'une usine alimentaire.",
            "a_retenir": "Le garant inflexible de la fraîcheur et de la confiance des consommateurs dans les délices de l'océan."
        }
    },

    # -----------------------------------------------------------------------
    # 8. TECHNICIEN EN MAINTENANCE INDUSTRIELLE (USINES MARINES)
    # -----------------------------------------------------------------------
    {
        "id": "technicien-maintenance-industrielle-maritime",
        "slug": "technicien-maintenance-industrielle-maritime",
        "title": "Technicien en Maintenance Industrielle (Usines Maritimes & Agroalimentaires)",
        "aliases": ["Technicienne en maintenance industrielle", "Électromécanicien d'usine de produits marins", "Technicien de maintenance agro-maritime", "Mécanicien d'usine de pêche"],
        "icon": "⚙️",
        "image": "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Pêche, Aquaculture & Ressources Marines",
        "domainId": "peche-aquaculture",
        "subdomain": "Maintenance & équipements marins",
        "sourceEvoluPeches": True,
        "cnpCode": "2243 ou 7311",
        "isEmerging": False,
        "level": "Diplôme d’études collégiales (DEC) en maintenance industrielle ou BTS Maintenance des systèmes",
        "salary": "🇨🇦 Québec : 45 000 - 85 000 $ CAD/an (Source : ÉvoluPêches / Industrie manufacturière) • 🇸🇳 Sénégal : 300 000 - 1 000 000 FCFA / mois (Usines agro-maritimes de Dakar)",
        "simpleDefinition": "Le technicien en maintenance industrielle assure le fonctionnement sans faille des machines de l'usine aquatique : convoyeurs étanches, découpeuses, cuiseurs, tunnels de congélation et systèmes pneumatiques.",
        "shortDescription": "Fiche documentée par ÉvoluPêches, cet expert polyvalent évite les arrêts de ligne coûteux lors des pics de débarquement où des tonnes de poisson doivent être traitées d'urgence.",
        "longDescription": "Le technicien s'occupe de l'entretien préventif et régulier du matériel utilisé dans la production. Selon ÉvoluPêches, il joue ainsi un rôle non négligeable dans le bon fonctionnement des équipements de la chaîne de production. Dans certaines usines de transformation de produits marins, il s'occupe aussi de l'entretien des bâtiments et du matériel roulant (chariots élévateurs, chargeurs). Il diagnostique les pannes mécaniques, hydrauliques, pneumatiques et électriques, fabrique et remplace des pièces et optimise les systèmes.",
        "mainObjective": "Maintenir un taux de disponibilité maximal des lignes de production automatisées en milieu humide et corrosif.",
        "companyRole": "Pilote de la continuité industrielle et garant de la sécurité technique des installations.",
        "characteristics": [
            "Esprit d'équipe",
            "Polyvalence",
            "Intérêt pour la résolution de problème",
            "Autonomie",
            "Esprit d'analyse",
            "Rigueur et minutie"
        ],
        "regions": ["Partout au Québec"],
        "sourceContext": "Québec / Canada (ÉvoluPêches)",
        "workEnvironment": [
            "🏭 Ateliers de production d'usine marine au contact de convoyeurs et machines de découpe",
            "🛠️ Atelier de maintenance mécanique avec tours, fraiseuses et postes de soudure",
            "❄️ Salles des compresseurs frigorifiques industriels à ammoniac ou fréon"
        ],
        "missions": [
            "Entretenir les machines de production (fileteuses automatiques, écailleuses, cuiseurs à vapeur)",
            "Diagnostiquer rapidement les pannes d'ordre mécanique, hydraulique, pneumatique et électrique",
            "Usiner, fabriquer et remplacer les pièces d'usure en acier inoxydable alimentaire",
            "Concevoir, modifier et optimiser des équipements pour améliorer les cadences et la sécurité",
            "Élaborer, implanter et gérer les programmes de maintenance préventive informatisée (GMAO)"
        ],
        "typicalDay": [
            {"time": "06:00", "title": "Tournée préventive avant l'arrivée des équipes", "desc": "Vérification des graissages des roulements inoxydables étanches et contrôle des tensions de courroies des fileteuses."},
            {"time": "09:30", "title": "Dépannage d'urgence sur convoyeur de crabe", "desc": "Remplacement express d'un moteur électrique grillé pour éviter l'arrêt de la ligne de cuisson."},
            {"time": "13:30", "title": "Usinage d'un axe en atelier", "desc": "Tournage d'un nouvel axe en inox 316L pour réparer une pompe de saumure corrodée par l'eau de mer."},
            {"time": "16:00", "title": "Mise à jour du logiciel de GMAO", "desc": "Clôture des bons de travail, commande de roulements et programmation des révisions du week-end."}
        ],
        "skills": {
            "technical": [
                "Mécanique industrielle et transmission de puissance en milieu humide",
                "Électrotechnique, variateurs de vitesse et automates programmables industriels (PLC)",
                "Pneumatique industrielle et vérins inoxydables",
                "Usinage conventionnel (tour, fraiseuse) et soudure TIG inox alimentaire",
                "Gestion de Maintenance Assistée par Ordinateur (GMAO)"
            ],
            "human": [
                "Sens aigu de la logique et méthode rigoureuse de diagnostic",
                "Polyvalence et capacité à passer de la mécanique à l'électricité",
                "Résistance au stress face aux impératifs horaires de production",
                "Autonomie et esprit d'initiative"
            ],
            "tools": [
                "Appareils de diagnostic de vibration et caméras thermiques d'armoires électriques",
                "Postes de soudure TIG gaz inerte et outillage d'atelier inox",
                "Multimètres, pinces ampèremétriques et consoles de programmation d'automates",
                "Logiciels de GMAO et schémas industriels de tuyauterie et instrumentation (P&ID)"
            ],
            "analytical": [
                "Analyse des temps moyens de bon fonctionnement (MTBF) et temps moyen de réparation (MTTR)",
                "Optimisation des consommations d'air comprimé et d'eau de nettoyage"
            ]
        },
        "specializations": ["Automatisme et robotique industrielle marine", "Maintenance frigorifique industrielle lourde", "Chaudronnerie et soudure inox alimentaire", "Direction d'équipe de maintenance"],
        "studies": {
            "pathway": [
                {"step": "Diplôme collégial", "title": "Diplôme d’études collégiales (DEC) en maintenance industrielle", "desc": "Formation québécoise de référence dispensée aux Cégeps de Gaspé, Sept-Îles, Rimouski."},
                {"step": "Formation professionnelle", "title": "DEP en électromécanique de systèmes automatisés", "desc": "Alternative axée sur la pratique d'atelier."},
                {"step": "Formation continue", "title": "Habilitations industrielles en réfrigération et électricité haute puissance", "desc": "Perfectionnement au fil de la carrière."}
            ],
            "schools": [
                {"name": "Cégep de la Gaspésie et des Îles (campus de Gaspé) — Québec", "country": "Canada", "scope": "International"},
                {"name": "Cégep de Sept-Îles / Cégep de Rimouski — Québec", "country": "Canada", "scope": "Canada"},
                {"name": "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat de mécanicien industriel certifié (Sceau rouge / Interprovincial)", "Licence d'électricien d'entretien industriel"],
            "schoolSubjects": ["Électromécanique", "Pneumatique", "Hydraulique", "Automatisme"]
        },
        "career": {
            "sectors": ["Usines de transformation de produits marins et poissonneries industrielles", "Industries agroalimentaires générales", "Grandes conserveries", "Chantiers de construction d'équipements agroalimentaires"],
            "employerTypes": ["Groupes industriels agroalimentaires", "PME de transformation des pêches"],
            "evolution": "Technicien de maintenance junior ➔ Électromécanicien senior de quart ➔ Superviseur de maintenance ➔ Directeur de maintenance d'usine",
            "pros": "Métier intellectuellement captivant où chaque panne est une énigme concrète à résoudre, très forte demande sur le marché de l'emploi, rôle indispensable.",
            "cons": "Astreintes et interventions d'urgence lors des pannes critiques, travail dans le bruit et les environnements froids ou humides de l'usine."
        },
        "gettingStarted": {
            "beginnerProject": "Câbler un petit circuit de démarrage d'un moteur électrique triphasé avec disjoncteur magnétothermique et bouton d'arrêt d'urgence.",
            "intermediateProject": "Diagnostiquer et remplacer un joint torique défaillant sur un distributeur pneumatique 5/2 de chaîne de tri.",
            "advancedProject": "Programmer un cycle automatique de convoyage avec cellule photoélectrique et vérin d'éjection sur un automate Siemens ou Schneider.",
            "portfolioIdeas": ["Schéma de câblage d'une armoire de commande", "Procédure écrite de maintenance préventive d'un tunnel de congélation"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des capteurs IoT de vibrations fixés sur les moteurs alertent par algorithme d'un échauffement anormal de roulement des jours avant qu'il ne casse.",
            "automatedTasks": ["Déclenchement automatique des ordres de travail prédictifs par IA industrielle"],
            "emergingSkills": ["Programmation et maintenance de cobots de palettisation", "Intégration de capteurs connectés LoRaWAN dans les ateliers"],
            "humanEdge": "La dextérité manuelle pour aligner des poulies au laser et le diagnostic intuitif basé sur le bruit d'un mécanisme en marche."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les techniciens en maintenance industrielle formés au CFPT Sénégal-Japon ou à l'ESP de Dakar sont activement chassés par les grandes usines de transformation du poisson (Amerger, Africamer, Ikagel) pour maintenir les lignes de congélation fonctionnelles.",
            "localSectors": ["Zone industrielle du Port Autonome de Dakar", "Entrepôts frigorifiques de stockage maritime", "Usines de conserves et farine de poisson"],
            "remoteWork": "Exclu, présence en usine requise.",
            "entrepreneurship": "Création d'une entreprise de sous-traitance de maintenance électromécanique et dépannage d'urgence pour les usines de marée."
        },
        "relatedJobSlugs": ["mecanicien-marin", "conducteur-ligne-agroalimentaire", "technicien-maintenance-agroequipement", "prepose-transformation-produits-marins"],
        "connectedFamilies": ["industrie-ingenierie", "transport-logistique", "technologies-donnees"],
        "resources": [{"type": "article", "title": "Fiche Technicien en maintenance industrielle ÉvoluPêches", "url": "https://evolupeches.org/metiers/technicien-technicienne-en-maintenance-industrielle/", "source": "ÉvoluPêches"}],
        "sources": ["ÉvoluPêches", "Cégep de Gaspé", "Inforoute FPT", "CFPT Sénégal-Japon"],
        "interests": ["construire-fabriquer", "resoudre-problemes"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon ÉvoluPêches, les perspectives d'avancement mènent rapidement au poste hautement stratégique de Directeur de maintenance de l'usine, avec des responsabilités sur l'ensemble des bâtiments et investissements techniques.",
            "pourquoi": "L'automatisation et la numérisation des usines rendent l'expertise du technicien de maintenance plus indispensable que jamais.",
            "a_retenir": "Le mécanicien de précision qui fait tourner le moteur économique des usines côtières."
        }
    },

    # -----------------------------------------------------------------------
    # 9. GESTIONNAIRE DES RESSOURCES MARITIMES
    # -----------------------------------------------------------------------
    {
        "id": "gestionnaire-ressources-maritimes",
        "slug": "gestionnaire-ressources-maritimes",
        "title": "Gestionnaire des Ressources Maritimes / Chargé d'Aménagement Côtier",
        "aliases": ["Gestionnaire de la ressource halieutique", "Administrateur des pêches", "Conseiller en gestion maritime", "Chargé de politique des pêches"],
        "icon": "🌍",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Pêche, Aquaculture & Ressources Marines",
        "domainId": "peche-aquaculture",
        "subdomain": "Gestion des ressources marines",
        "sourceEvoluPeches": True,
        "cnpCode": "0811",
        "isEmerging": False,
        "level": "Maîtrise en gestion des ressources maritimes (UQAR) ou Master Droit/Économie maritime",
        "salary": "🇨🇦 Québec : 55 000 - 105 000 $ CAD/an (Source : ÉvoluPêches / Ministères et organisations maritimes) • 🇸🇳 Sénégal : 450 000 - 1 600 000 FCFA / mois (Ministère des Pêches, Aires Marines Protégées, Projets Banque Mondiale)",
        "simpleDefinition": "Le gestionnaire des ressources maritimes élabore les plans de pêche, fixe les conditions d'attribution des permis de capture, concilie les pêcheurs et les scientifiques, et veille à l'équilibre entre rentabilité économique et préservation des océans.",
        "shortDescription": "Fiche documentée par ÉvoluPêches, ce stratège territorial concilie la pérennité écologique des espèces marines et la prospérité économique des communautés côtières.",
        "longDescription": "L'exploitation des richesses de la mer exige une régulation stricte pour éviter l'épuisement des stocks. Selon ÉvoluPêches, le gestionnaire des ressources maritimes élabore des plans de pêche durables, émet les conditions d'obtention et de transfert des permis, formule des recommandations stratégiques aux autorités, interagit étroitement avec les pêcheurs et leurs organisations représentatives et récolte les données statistiques d'effort de pêche.",
        "mainObjective": "Assurer une gouvernance équilibrée, concertée et pérenne de l'accès aux ressources marines et côtières.",
        "companyRole": "Médiateur stratégique, régulateur des filières de pêche et garant du développement territorial maritime durable.",
        "characteristics": [
            "Esprit d'équipe",
            "Bonne capacité d'analyse, de synthèse et de communication",
            "Jugement",
            "Résolution de situations complexes"
        ],
        "regions": ["Capitale-Nationale (Québec) et régions maritimes (Côte-Nord, Bas-Saint-Laurent, Gaspésie, Îles-de-la-Madeleine)"],
        "sourceContext": "Québec / Canada (ÉvoluPêches)",
        "workEnvironment": [
            "🏢 Ministères et organismes publics de gestion de la pêche (Pêches et Océans Canada, DPM)",
            "⚓ Ports et associations de pêcheurs pour les comités de concertation et négociations",
            "📊 Bureaux d'analyse de données statistiques et de cartographie maritime (SIG)"
        ],
        "missions": [
            "Élaborer et mettre à jour les plans de gestion intégrée de la pêche par espèce et par zone",
            "Définir et émettre les conditions réglementaires des permis de pêche commerciale",
            "Formuler des recommandations d'ajustement des Totaux Admissibles de Captures (TAC)",
            "Animer les tables de concertation et dialoguer en continu avec les associations de pêcheurs",
            "Récolter, traiter et analyser les données statistiques de débarquement et de surveillance côtière"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Analyse des statistiques de captures hebdomadaires", "desc": "Évaluation du rythme de consommation du quota de crabe des neiges sur la zone maritime côtière."},
            {"time": "10:30", "title": "Comité de concertation avec les associations de pêcheurs", "desc": "Présentation des données scientifiques et négociation des dates d'ouverture de la saison du homard."},
            {"time": "14:00", "title": "Rédaction des conditions de permis ministériels", "desc": "Intégration de nouvelles clauses de maillage sélectif et de protection des mammifères marins (baleines franches)."},
            {"time": "16:30", "title": "Coordination avec les biologistes marins", "desc": "Point de synthèse sur les campagnes scientifiques d'évaluation de la biomasse de crevettes nordiques."}
        ],
        "skills": {
            "technical": [
                "Gestion intégrée des zones côtières (GIZC) et droit maritime des pêches",
                "Économie des pêches et analyse des filières de capture et commercialisation",
                "Compréhension des indicateurs de dynamique des populations halieutiques (biomasse, RMD)",
                "Techniques de médiation et négociation de politiques publiques complexes",
                "Statistiques appliquées et Systèmes d'Information Géographique maritimes (QGIS)"
            ],
            "human": [
                "Diplomatie, tact et grand sens de l'écoute des réalités vécues par les pêcheurs",
                "Capacité d'arbitrage impartial et fermeté dans l'application des règles",
                "Clarté d'expression orale et écrite devant des publics variés",
                "Vision systémique à long terme"
            ],
            "tools": [
                "Systèmes d'Information Géographique maritimes (QGIS / ArcGIS Marine)",
                "Bases de données ministérielles de permis et quotas de pêche",
                "Outils d'analyse statistique et de modélisation bioéconomique",
                "Plateformes collaboratives de concertation publique"
            ],
            "analytical": [
                "Modélisation de l'impact socio-économique d'une variation de quota de capture",
                "Analyse critique des séries historiques de prises par unité d'effort (PUE)"
            ]
        },
        "specializations": ["Gestion des pêches commerciales côtières", "Gestion des Aires Marines Protégées (AMP)", "Politiques de conciliation entre pêche et parcs éoliens marins", "Administration des permis et transfert intergénérationnel"],
        "studies": {
            "pathway": [
                {"step": "Diplôme universitaire de 1er cycle", "title": "Baccalauréat en biologie marine, sciences politiques, droit ou géographie", "desc": "Premier cycle universitaire polyvalent dans le domaine du vivant ou des sciences sociales."},
                {"step": "Diplôme universitaire de 2e cycle", "title": "Maîtrise en gestion des ressources maritimes", "desc": "Programme d'excellence documenté par ÉvoluPêches, dispensé à l'UQAR."},
                {"step": "Doctorat ou spécialisation", "title": "Doctorat en gestion des ressources maritimes", "desc": "Pour les fonctions de recherche en politiques publiques marines."}
            ],
            "schools": [
                {"name": "Université du Québec à Rimouski (UQAR) — Québec", "country": "Canada", "scope": "International"},
                {"name": "Institut Universitaire Européen de la Mer (IUEM Brest) — France", "country": "France", "scope": "France"},
                {"name": "Institut Universitaire de Pêche et d'Aquaculture (IUPA Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification en gestion de projet public", "Attestation en médiation environnementale"],
            "schoolSubjects": ["Droit maritime", "Économie des ressources", "Biologie marine", "Gestion publique"]
        },
        "career": {
            "sectors": ["Ministères des Pêches et de l'Environnement (gouvernements provincial et fédéral)", "Organisations régionales de gestion de la pêche", "Associations et comités de pêcheurs professionnels", "Organismes de gestion d'aires marines protégées et parcs marins"],
            "employerTypes": ["Fonction publique d'État", "Organisations de producteurs maritimes", "Organisations non gouvernementales de conservation"],
            "evolution": "Analyste des pêches junior ➔ Gestionnaire des ressources maritimes ➔ Directeur régional des pêches ➔ Coordonnateur national des politiques maritimes",
            "pros": "Impact direct et déterminant sur la survie de la biodiversité marine et des économies côtières, position centrale au carrefour de la science, de la politique et de la mer.",
            "cons": "Position délicate d'arbitrage souvent prise entre deux feux (revendications économiques immédiates des pêcheurs et exigences strictes des biologistes), complexité des dossiers."
        },
        "gettingStarted": {
            "beginnerProject": "Lire et analyser un plan officiel de gestion intégrée des pêches publié par Pêches et Océans Canada ou le Ministère sénégalais des Pêches.",
            "intermediateProject": "Cartographier sous QGIS les zones de frayères d'une espèce et croiser avec les zones d'activités des navires de capture.",
            "advancedProject": "Rédiger une note de recommandation de politique publique pour concilier la protection des mammifères marins et le maintien de la pêche aux casiers.",
            "portfolioIdeas": ["Synthèse d'un plan de gestion durable d'une pêcherie", "Étude socio-économique d'un port de pêche face à la baisse d'un quota"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'IA croise en temps réel les positions satellites AIS des navires et les zones interdites pour générer des alertes de respect des fermetures saisonnières.",
            "automatedTasks": ["Détection automatique d'anomalies de trajectoire de pêche par algorithme satellite", "Consolidation automatisée des données de débarquement déclarées"],
            "emergingSkills": ["Utilisation de jumeaux numériques d'écosystèmes côtiers pour tester des scénarios de quotas"],
            "humanEdge": "L'écoute humaine, la négociation diplomatique et la construction de la confiance avec les pêcheurs sur le quai."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la gestion des pêches (Direction des Pêches Maritimes - DPM, Conseil National Consultatif des Pêches Maritimes) est un enjeu de souveraineté nationale aigu. Les gestionnaires maritimes sénégalais négocient les accords de pêche internationaux et pilotent les Aires Marines Protégées communautaires (AMP de Joal, Cayar, Bamboung).",
            "localSectors": ["Direction des Pêches Maritimes (DPM)", "Direction des Aires Marines Protégées Communautaires (DAMPC)", "Conseils Locaux de Pêche Artisanale (CLPA)"],
            "remoteWork": "Télétravail partiel possible pour la rédaction de plans, tournées côtières indispensables.",
            "entrepreneurship": "Création d'un cabinet indépendant d'audit et de conseil en gestion de pêcheries durables et certification écolabel pour l'Afrique de l'Ouest."
        },
        "relatedJobSlugs": ["biologiste-marin", "halieute", "capitaine-proprietaire", "juriste-agricole"],
        "connectedFamilies": ["droit-justice", "environnement-climat", "gestion-finance", "recherche-sciences"],
        "resources": [{"type": "article", "title": "Fiche Gestionnaire des ressources maritimes ÉvoluPêches", "url": "https://evolupeches.org/metiers/gestionnaire-des-ressources-maritimes/", "source": "ÉvoluPêches"}],
        "sources": ["ÉvoluPêches", "UQAR", "Pêches et Océans Canada", "DPM Sénégal"],
        "interests": ["nature-environnement", "resoudre-problemes", "negocier-convaincre"],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Selon ÉvoluPêches, l'Université du Québec à Rimouski (UQAR) est mondialement renommée pour sa Maîtrise en gestion des ressources maritimes, attirant des étudiants de tous les continents pour apprendre à gouverner la mer durablement.",
            "pourquoi": "Face aux crises climatiques et à la surexploitation des mers, les pays ont besoin de cadres capables d'unir sciences naturelles, droit et économie dans une même vision stratégique.",
            "a_retenir": "L'architecte de la paix et de la pérennité entre l'homme et l'océan."
        }
    },

    # -----------------------------------------------------------------------
    # 10. BIOLOGISTE (SCIENCES & MILIEUX MARINS)
    # -----------------------------------------------------------------------
    {
        "id": "biologiste-marin",
        "slug": "biologiste-marin",
        "title": "Biologiste des Milieux Marins & Aquatiques / Écologiste Marin",
        "aliases": ["Biologiste marin", "Biologiste des pêches", "Scientifique des écosystèmes marins", "Océanographe biologiste"],
        "icon": "🧬",
        "image": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Pêche, Aquaculture & Ressources Marines",
        "domainId": "peche-aquaculture",
        "subdomain": "Biologie marine",
        "sourceEvoluPeches": True,
        "cnpCode": "2121",
        "isEmerging": False,
        "level": "Baccalauréat en biologie - sciences marines (UQAR) à Master / Doctorat en océanographie biologique",
        "salary": "🇨🇦 Québec : 50 000 - 95 000 $ CAD/an (Source : ÉvoluPêches / Centres de recherche marine) • 🇸🇳 Sénégal : 450 000 - 1 500 000 FCFA / mois (CRODT/ISRA, Universités, IRD)",
        "simpleDefinition": "Le biologiste marin étudie la vie dans les océans et les estuaires : il observe la faune et la flore marines, mène des missions scientifiques en mer et en laboratoire, analyse la santé des écosystèmes et étudie l'impact du réchauffement de l'eau.",
        "shortDescription": "Fiche documentée par ÉvoluPêches, ce scientifique passionné perce les mystères des organismes marins pour éclairer la préservation de la biodiversité et la gestion durable des pêches.",
        "longDescription": "Le biologiste des milieux marins est un scientifique transversal intervenant à la frontière des sciences fondamentales, de l'écologie et des ressources aquatiques exploitées. Selon ÉvoluPêches, il planifie et exécute des études rigoureuses sur le milieu marin, réalise des recherches, essais et expériences, se déplace sur le terrain ou travaille en laboratoire, interprète des jeux complexes de données biologiques et rédige des rapports scientifiques. La source mentionne comme perspectives d'avancement l'accès aux fonctions de Gestionnaire des ressources maritimes.",
        "mainObjective": "Comprendre le fonctionnement des écosystèmes marins et fournir des bases scientifiques solides pour la conservation de la biodiversité et l'exploitation raisonnée.",
        "companyRole": "Expert scientifique, découvreur du vivant et conseiller éclairé des décideurs maritimes.",
        "characteristics": [
            "Curiosité",
            "Sens de l'observation",
            "Intérêt pour les sciences et les organismes vivants",
            "Esprit d'équipe",
            "Bonne capacité de concentration et de synthèse",
            "Autonomie"
        ],
        "regions": ["Partout au Québec et stations de biologie marine côtières"],
        "sourceContext": "Québec / Canada (ÉvoluPêches)",
        "workEnvironment": [
            "🔬 Laboratoires de recherche océanographique équipés d'aquariums et microscopes",
            "🚢 Navires océanographiques hauturiers lors de campagnes d'échantillonnage en mer",
            "🌊 Estran côtier, récifs, mangroves et fonds marins pour les observations directes"
        ],
        "missions": [
            "Planifier et exécuter des études écologiques de terrain sur les populations animales et végétales marines",
            "Mener des campagnes d'échantillonnage de plancton, poissons, invertébrés et algues en mer",
            "Réaliser des analyses microscopiques, biochimiques et génétiques (ADN environnemental) en laboratoire",
            "Modéliser l'impact du réchauffement des eaux et de l'acidification des océans sur les espèces cibles",
            "Rédiger des articles et rapports scientifiques et vulgariser les conclusions auprès des gestionnaires et du public"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Échantillonnage en mer côtière", "desc": "Prélèvement d'échantillons d'eau avec bouteilles Niskin et traits de filet à plancton Bongo."},
            {"time": "11:00", "title": "Dissection et biométrie au laboratoire", "desc": "Pesée des gonades, examen de l'état d'engraissement et analyse stomacale d'un lot de poissons prélevés."},
            {"time": "14:30", "title": "Traitement statistique sous R", "desc": "Calcul de la richesse spécifique et indices de diversité de Shannon sur des communautés benthiques sous-marines."},
            {"time": "17:00", "title": "Rédaction d'une publication scientifique", "desc": "Rédaction du chapitre méthodologique d'un article sur la migration des espèces causée par la perte du couvert de glace."}
        ],
        "skills": {
            "technical": [
                "Biologie marine, ichtyologie et écologie des invertébrés aquatiques",
                "Techniques d'échantillonnage océanographique en mer et plongée scientifique",
                "Génétique des populations marines et analyse de l'ADN environnemental (eDNA)",
                "Biostatistiques appliquées sous R ou Python et traitement de séries temporelles",
                "Connaissance des protocoles de protection des espèces marines vulnérables"
            ],
            "human": [
                "Insatiable curiosité intellectuelle et passion pour le monde vivant",
                "Sens de l'observation minutieux et rigueur de méthode scientifique",
                "Bonne capacité de concentration et de synthèse rédactionnelle",
                "Aptitude au travail d'équipe pluridisciplinaire en mer confinée"
            ],
            "tools": [
                "Filets à plancton, bennes d'échantillonnage benthique et chaluts scientifiques",
                "Microscopes à fluorescence et loupes binoculaires de laboratoire",
                "Sondes multiparamètres CTD (Conductivité, Température, Profondeur)",
                "Logiciels d'analyse statistique et de modélisation écologique (RStudio, Primer-e)"
            ],
            "analytical": [
                "Analyse multivariée de communautés écologiques",
                "Calcul de l'indice de condition corporelle des espèces commerciales"
            ]
        },
        "specializations": ["Ichtyologie (biologie des poissons marins)", "Biologie des invertébrés et benthos (crustacés, mollusques)", "Écologie du plancton et réseaux trophiques", "Conservation des mammifères marins"],
        "studies": {
            "pathway": [
                {"step": "Diplôme universitaire de 1er cycle", "title": "Baccalauréat (BAC) en biologie – sciences marines", "desc": "Programme québécois de référence documenté par ÉvoluPêches à l'UQAR."},
                {"step": "2e cycle universitaire", "title": "Maîtrise en océanographie biologique", "desc": "Spécialisation poussée en recherche marine fondamentale ou appliquée."},
                {"step": "Doctorat (PhD)", "title": "Doctorat en sciences de la mer", "desc": "Pour devenir chercheur principal ou professeur d'université."}
            ],
            "schools": [
                {"name": "Université du Québec à Rimouski (UQAR / Institut des sciences de la mer de Rimouski ISMER) — Québec", "country": "Canada", "scope": "International"},
                {"name": "Institut Universitaire Européen de la Mer (Brest) / Sorbonne Université — France", "country": "France", "scope": "France"},
                {"name": "Institut Universitaire de Pêche et d'Aquaculture (IUPA / UCAD Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat de plongeur scientifique (CAUS / CNRS)", "Attestation de sécurité pour recherche en mer"],
            "schoolSubjects": ["Biologie animale", "Écologie marine", "Océanographie", "Biostatistiques"]
        },
        "career": {
            "sectors": ["Instituts publics de recherche marine (ISMER, Ifremer, CRODT, IRD)", "Ministères de l'Environnement et des Pêches", "Bureaux d'études en environnement littoral et études d'impact", "Aquariums publics, musées maritimes et parcs marins"],
            "employerTypes": ["Centres de recherche scientifique", "Bureaux de consultants en environnement", "Organisations internationales de conservation (UICN, WWF)"],
            "evolution": "Biologiste marin de terrain ➔ Chargé de recherche océanographique ➔ Chef de laboratoire scientifique ➔ Gestionnaire des ressources maritimes",
            "pros": "Métier de vocation passionnant au plus près de la vie sauvage océanique, participation à des expéditions maritimes inoubliables, sentiment de contribuer à la sauvegarde des océans.",
            "cons": "Nombre de postes permanents limité imposant une sélection universitaire élevée, campagnes de mer exigeantes avec éloignement, délais longs de publication scientifique."
        },
        "gettingStarted": {
            "beginnerProject": "Reconnaître et photographier les invertébrés marins vivant dans les mares résiduelles de l'estran à marée basse.",
            "intermediateProject": "Participer à un programme de sciences participatives marines (recensement des laisses de mer ou ponte des raies).",
            "advancedProject": "Analyser un jeu de données libre d'abondance d'espèces pélagiques sous R pour identifier les corrélations avec la température de surface de l'eau.",
            "portfolioIdeas": ["Rapport d'échantillonnage biologique côtier", "Herbier d'algues marines identifiées avec clés de détermination"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA analyse des millions d'heures d'enregistrements audio sous-marins (acoustique passive) pour tracer les baleines et identifie les espèces sur les photos sous-marines automatiquement.",
            "automatedTasks": ["Comptage et reconnaissance taxonomique du plancton par imagerie automatisée (FlowCam)", "Cartographie automatique des herbiers marins par satellite"],
            "emergingSkills": ["Bio-informatique marine appliquée au métagénomique environnemental", "Entraînement de modèles de détection acoustique de la faune marine"],
            "humanEdge": "La formulation d'hypothèses scientifiques novatrices et l'émerveillement intellectuel devant la beauté de la vie sous-marine."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les biologistes marins du CRODT (Centre de Recherches Océanographiques de Dakar-Thiaroye) et de l'IUPA surveillent l'impact du réchauffement des eaux sur la reproduction des sardinelles et étudient les mangroves de Casamance comme nurserie vitale pour les poissons côtiers.",
            "localSectors": ["Centre de Recherches Océanographiques de Dakar-Thiaroye (CRODT/ISRA)", "Institut de Recherche pour le Développement (IRD Dakar)", "Institut Universitaire de Pêche et d'Aquaculture (IUPA)"],
            "remoteWork": "Analyses de données et rédaction d'articles possibles en télétravail partiel, travaux en mer et en labo réguliers.",
            "entrepreneurship": "Création d'un bureau d'études d'impact environnemental sous-marin pour les projets d'infrastructures portuaires et énergétiques offshore."
        },
        "relatedJobSlugs": ["gestionnaire-ressources-maritimes", "halieute", "aquaculteur", "ingenieur-agroecologie"],
        "connectedFamilies": ["recherche-sciences", "environnement-climat", "agriculture-agritech", "sante-biomedical"],
        "resources": [{"type": "article", "title": "Fiche Biologiste ÉvoluPêches", "url": "https://evolupeches.org/metiers/biologiste/", "source": "ÉvoluPêches"}],
        "sources": ["ÉvoluPêches", "UQAR / ISMER", "CRODT Dakar"],
        "interests": ["explorer-decouvrir", "nature-environnement", "resoudre-problemes"],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Selon ÉvoluPêches et l'UQAR, le métier de biologiste marin ouvre de nombreuses passerelles vers la direction d'équipes et la gestion publique des ressources maritimes.",
            "pourquoi": "La compréhension scientifique rigoureuse des équilibres biologiques marins est la meilleure compétence pour prendre des décisions politiques éclairées sur l'avenir des océans.",
            "a_retenir": "Le scientifique explorateur qui déchiffre les secrets des profondeurs pour sauver notre planète bleue."
        }
    }
]

print(f"✅ {len(MARITIME_JOBS)} métiers maritimes chargés avec succès depuis ÉvoluPêches.")

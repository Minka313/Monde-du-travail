# -*- coding: utf-8 -*-
"""
BASE DE DONNÉES DU SECTEUR SANTÉ, SOINS & PARAMÉDICAL — PARTIE 2
Fiches Métiers 11 à 20 : Maternité, Pédiatrie, Santé Mentale & Rééducation
"""

HEALTH_JOBS_PART2 = [
    # 11. SAGE-FEMME / MAÏEUTICIEN
    {
        "id": "sage-femme",
        "slug": "sage-femme",
        "title": "Sage-Femme / Maïeuticien",
        "aliases": ["Maïeuticien", "Praticien de la maïeutique", "Sage-femme hospitalière"],
        "icon": "🤰",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": ["sante-soins-paramedical", "biologie-chimie"],
        "domain": "Santé de la Femme & de l'Enfant",
        "domainId": "femme-enfant",
        "subdomain": "Maïeutique & Maternité",
        "shortDescription": "Spécialiste de la physiologie de la grossesse et de la naissance, la sage-femme assure le suivi prénatal, pratique l'accouchement eutocique et prend soin du nouveau-né.",
        "longDescription": "Profession médicale à part entière avec plein droit de prescription, la sage-femme accompagne les femmes tout au long de leur vie génésique. Elle assure le suivi gynécologique préventif, prescrit la contraception, réalise les échographies obstétricales, prépare les couples à la naissance, conduit seule les accouchements physiologiques et surveille la santé de la mère et du bébé en salle de naissance et post-partum.",
        "simpleDefinition": "Professionnel médical qui suit la femme enceinte, met les bébés au monde et surveille leur santé après la naissance.",
        "level": "Bac +5 (Diplôme d'État de Sage-Femme / Grade Master)",
        "missions": [
            "Assurer les consultations prénatales mensuelles, prescrire les bilans sanguins et échographies",
            "Animer les séances de préparation à la naissance et à la parentalité",
            "Diagnostiquer le début du travail, surveiller le monitoring foetal et pratiquer l'accouchement physiologique",
            "Examiner le nouveau-né en salle de naissance, pratiquer les premiers gestes de réanimation si nécessaire et coter le score d'Apgar",
            "Assurer le suivi post-natal, le soutien à l'allaitement et les consultations gynécologiques de prévention et contraception"
        ],
        "workEnvironment": "Salles de travail et de naissance en maternité hospitalière ou clinique, cabinet libéral, centres de Protection Maternelle et Infantile (PMI).",
        "typicalDay": [
            {"time": "07:30", "activity": "Relève en salle de naissances : point sur les patientes en cours de travail et les monitorings"},
            {"time": "08:30", "activity": "Pose d'une perfusion d'ocytocine et accompagnement postural d'une future maman sous péridurale"},
            {"time": "10:15", "activity": "Accouchement physiologique : guidage de la poussée, naissance d'un nouveau-né vigoureux et mise en peau à peau"},
            {"time": "11:00", "activity": "Délivrance placentaire, examen du placenta et réfection d'une déchirure périnéale simple sous anesthésie locale"},
            {"time": "14:00", "activity": "Visite des suites de couches et conseil en lactation pour une maman primipare"}
        ],
        "skills": {
            "technical": [
                "Physiologie obstétricale et mécanique de l'accouchement par voie basse",
                "Interprétation du rythme cardiaque fœtal (RCF) et échographie obstétricale",
                "Gestes de réanimation néonatale d'urgence",
                "Prescription réglementée d'examens biologiques, d'échographies et de thérapeutiques",
                "Sutures périnéales et soins gynécologiques de prévention"
            ],
            "human": [
                "Douceur, empathie et grande capacité d'écoute émotionnelle",
                "Sang-froid exceptionnel pour identifier une anomalie fœtale imposant l'appel de l'obstétricien",
                "Sens de la communication pour guider le couple avec sérénité dans la douleur",
                "Respect de l'intimité et des projets de naissance des patientes"
            ],
            "tools": [
                "Cardiotocographe (monitoring foetal)",
                "Échographe obstétrical Doppler",
                "Matériel stérile d'accouchement et boîtes d'épisiotomie",
                "Table de réanimation néonatale chauffante"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Bac scientifique général ou S", "desc": "Solide socle scientifique."},
                {"step": "Cycle 1 (Bac +1 à +3)", "title": "PASS/L.AS puis 2 années de maïeutique", "desc": "Sélection médicale, anatomie pelvienne, embryologie, stages en maternité."},
                {"step": "Cycle 2 (Bac +4 à +5)", "title": "Diplôme d'État de Sage-Femme (Grade Master)", "desc": "Gardes régulières en salle de naissance, autonomie pratique supervisée et mémoire de recherche."}
            ],
            "schools": [
                {"name": "Département de Gynécologie-Obstétrique et École de Sages-Femmes — FMPOS UCAD Dakar", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Écoles de sages-femmes intégrées aux universités de médecine en France (Paris, Nantes, Lille, Lyon)", "country": "France", "scope": "France"}
            ],
            "certifications": ["Diplôme d'État de Sage-Femme", "Inscription obligatoire au Tableau de l'Ordre des Sages-Femmes"]
        },
        "career": {
            "sectors": ["Maternité hospitalière", "Secteur libéral", "Protection Maternelle et Infantile (PMI)"],
            "employerTypes": ["Maternités de niveau 1, 2 et 3", "Cabinets libéraux", "Centres de santé et plannings familiaux"],
            "evolution": "Sage-femme clinicienne ➔ Sage-femme échographiste certifiée ➔ Sage-femme coordinatrice (Cadre) ➔ Directrice d'école de sages-femmes",
            "pros": "Moment magique d'accueillir la vie au quotidien, statut médical avec liberté de prescription, grande confiance des patientes.",
            "cons": "Gardes de 12 heures éprouvantes, urgences imprévisibles, responsabilité pénale sur deux vies à chaque naissance."
        },
        "salary": "🇫🇷 France : 2 400 - 4 200 € net/mois selon statut et secteur • 🇸🇳 Sénégal : 200 000 - 650 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Le terme maïeuticien désigne l'homme qui exerce le métier de sage-femme, en hommage à la 'maïeutique' de Socrate qui comparait sa philosophie à l'art d'accoucher les esprits, sa propre mère Phénarète étant sage-femme dans la Grèce antique.",
            "pourquoi": "Le mot sage-femme désigne littéralement celle qui possède la sagesse et le savoir sur la femme, et non le sexe du soignant."
        },
        "sources": [
            {"organization": "Studyrama", "title": "Fiche métier : Sage-femme", "url": "https://www.studyrama.com/formations/fiches-metiers/sante/sage-femme", "type": "metier"},
            {"organization": "Conseil National de l'Ordre des Sages-Femmes (CNOSF)", "title": "Compétences et champ d'exercice de la sage-femme", "type": "institutionnel"}
        ],
        "interests": ["soigner-aider", "comprendre-corps-humain"],
        "relatedJobSlugs": ["puericulteur", "auxiliaire-puericulture", "chirurgien", "infirmier-diplome-etat"]
    },

    # 12. PUÉRICULTEUR / PUÉRICULTRICE
    {
        "id": "puericulteur",
        "slug": "puericulteur",
        "title": "Puériculteur / Puéricultrice Diplômé(e) d'État",
        "aliases": ["Infirmier puériculteur", "Spécialiste de la petite enfance", "Soignant pédiatrique"],
        "icon": "👶",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": ["sante-soins-paramedical", "biologie-chimie"],
        "domain": "Santé de la Femme & de l'Enfant",
        "domainId": "femme-enfant",
        "subdomain": "Pédiatrie & Néonatologie",
        "shortDescription": "Infirmier ou sage-femme spécialisé dans la santé de l'enfant de 0 à 18 ans, le puériculteur soigne prématurés en néonatologie, veille au développement moteur et conseille les parents.",
        "longDescription": "Le puériculteur est l'expert des soins et du développement de l'enfant. En service de réanimation néonatale, il prend en charge les grands prématurés en couveuse avec des gestes ultra-minutieux. En service pédiatrique, il adapte les soins et les traitements à la morphologie de chaque tranche d'âge. En PMI ou en crèche, il joue un rôle majeur de prévention, de dépistage précoce des handicaps et de soutien à la parentalité.",
        "simpleDefinition": "Infirmier hautement spécialisé dans les soins aux nouveau-nés, prématurés et enfants malades.",
        "level": "Bac +4 à Bac +5 (Diplôme d'État de Puéricultrice)",
        "missions": [
            "Dispenser des soins techniques et relationnels hautement adaptés aux nouveau-nés, nourrissons et enfants",
            "Prendre en charge les prématurés en incubateur (monitoring, cathéters ombilicaux, photothérapie, gavage)",
            "Accompagner et guider les parents dans l'apprentissage des soins quotidiens et de l'alimentation",
            "Dépister les troubles du développement psychomoteur et sensoriel lors des consultations de PMI",
            "Gérer la douleur de l'enfant par des approches médicamenteuses et des techniques non pharmacologiques (distraction, hypnose)"
        ],
        "workEnvironment": "Services de néonatologie et réanimation pédiatrique, services de pédiatrie hospitalière, centres de PMI, crèches.",
        "typicalDay": [
            {"time": "08:00", "activity": "Relève et bilan des constantes des nouveau-nés prématurés en unité de soins intensifs"},
            {"time": "09:00", "activity": "Soin d'hygiène minutieux d'un bébé de 1,2 kg en couveuse et administration de nutrition parentérale"},
            {"time": "11:30", "activity": "Accompagnement des parents pour la séance quotidienne de 'peau à peau' (méthode kangourou)"},
            {"time": "14:00", "activity": "Pose d'une perfusion intraveineuse pédiatrique avec patch anesthésiant et distraction par le jeu"},
            {"time": "16:30", "activity": "Entretien avec une jeune maman angoissée sur les signes d'alerte de déshydratation du nourrisson"}
        ],
        "skills": {
            "technical": [
                "Physiopathologie néonatale et pédiatrique spécifique",
                "Calculs de micro-doses médicamenteuses adaptées au poids de l'enfant",
                "Techniques de soins en milieu stérile fermé (incubateurs, couveuses)",
                "Évaluation de la douleur chez le tout-petit non communicant",
                "Normes de développement psychomoteur de la petite enfance"
            ],
            "human": [
                "Douceur infinie, patience et gestes d'une grande délicatesse",
                "Capacité à décoder les pleurs et signaux corporels du nourrisson",
                "Sens psychologique aiguisé pour rassurer des parents en détresse",
                "Pédagogie bienveillante et communication adaptée à chaque âge"
            ],
            "tools": [
                "Incubateur néonatal fermé à température et hygrométrie régulées",
                "Pousse-seringues de précision pédiatrique",
                "Matériel d'oxygénothérapie néonatale non invasive (CPAP)",
                "Échelles validées d'évaluation de la douleur pédiatrique (EDIN, EVENDOL)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Diplôme d'IDE ou de Sage-Femme (Bac +3 à +5)", "title": "Diplôme d'État d'Infirmier ou de Sage-Femme", "desc": "Formation de base préalable obligatoire."},
                {"step": "Formation spécialisée (1 an)", "title": "École de Puériculture (Diplôme d'État)", "desc": "12 mois de formation théorique et clinique spécialisée en néonatologie, pédiatrie et PMI."}
            ],
            "schools": [
                {"name": "ENDSS — Dakar (Section Puériculture et Santé de la Reproduction)", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Écoles de puériculture agréées en France (CHU de Paris, Lille, Bordeaux, Strasbourg)", "country": "France", "scope": "France"}
            ],
            "certifications": ["Diplôme d'État de Puéricultrice (DEP)", "AFGSU Pédiatrique"]
        },
        "career": {
            "sectors": ["Pédiatrie hospitalière", "Néonatologie et soins intensifs", "Secteur médico-social et crèches"],
            "employerTypes": ["CHU et maternités de niveau 3", "Conseils départementaux (services PMI)", "Établissements d'accueil du jeune enfant (EAJE)"],
            "evolution": "Puériculteur hospitalier ➔ Puériculteur coordinateur en PMI ➔ Directeur de crèche multi-accueil ➔ Cadre de santé pédiatrique",
            "pros": "Métier profondément gratifiant, soins aux êtres les plus vulnérables, reconnaissance forte des familles, opportunités en hôpital et crèche.",
            "cons": "Déchirement émotionnel lors des situations de maladie grave ou de décès d'un enfant, horaires hospitaliers postés."
        },
        "salary": "🇫🇷 France : 2 200 - 3 600 € net/mois • 🇸🇳 Sénégal : 200 000 - 550 000 FCFA net/mois",
        "saviezVous": {
            "fait": "La 'méthode kangourou', qui consiste à placer un nouveau-né prématuré peau contre peau sur la poitrine de ses parents, régule sa température, son rythme cardiaque et son sommeil plus efficacement que les couveuses les plus perfectionnées !",
            "pourquoi": "Le contact direct stimule les hormones d'attachement (ocytocine) et reproduit l'environnement sensoriel utérin rassurant."
        },
        "sources": [
            {"organization": "Studyrama", "title": "Fiche métier : Puéricultrice", "url": "https://www.studyrama.com/formations/fiches-metiers/sante/puericultrice", "type": "metier"},
            {"organization": "Association Nationale des Puéricultrices Diplômées et des Étudiants (ANPDE)", "title": "Le métier de puéricultrice", "type": "institutionnel"}
        ],
        "interests": ["soigner-aider", "comprendre-corps-humain"],
        "relatedJobSlugs": ["sage-femme", "auxiliaire-puericulture", "infirmier-diplome-etat", "pediatre"]
    },

    # 13. AUXILIAIRE DE PUÉRICULTURE
    {
        "id": "auxiliaire-puericulture",
        "slug": "auxiliaire-puericulture",
        "title": "Auxiliaire de Puériculture",
        "aliases": ["Aide-soignante pédiatrique", "AP", "Professionnelle petite enfance hospitalière"],
        "icon": "🧸",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": ["sante-soins-paramedical", "biologie-chimie"],
        "domain": "Santé de la Femme & de l'Enfant",
        "domainId": "femme-enfant",
        "subdomain": "Petite enfance",
        "shortDescription": "Sous la responsabilité de l'infirmier ou de la sage-femme, l'auxiliaire de puériculture assure les soins d'hygiène, le confort, l'éveil et l'alimentation des tout-petits.",
        "longDescription": "L'auxiliaire de puériculture (AP) veille quotidiennement au bien-être physique et affectif des enfants bien portants ou malades, de la naissance à 3 ans. En maternité, elle montre les premiers gestes de bain et de change aux jeunes mères. En néonatologie ou pédiatrie, elle assiste l'infirmier lors des soins techniques et assure la surveillance du sommeil et des biberons. En crèche, elle anime des ateliers d'éveil favorisant l'autonomie et la socialisation.",
        "simpleDefinition": "Professionnelle de la petite enfance qui prend soin des bébés à la maternité, à l'hôpital ou en crèche (bains, repas, éveil).",
        "level": "Diplôme d'État (Formation 11 mois accessible sans diplôme préalable)",
        "missions": [
            "Donner les soins d'hygiène quotidiens aux bébés (bain, change, soins du cordon ombilical)",
            "Préparer les biberons dans le respect rigoureux de la biberonnerie et aider à la prise des repas",
            "Observer l'état général de l'enfant (température, selles, comportement) et alerter immédiatement l'infirmier",
            "Animer des activités d'éveil sensoriel, moteur et ludique adaptées au stade de développement",
            "Entretenir et désinfecter le matériel de puériculture et l'environnement de vie de l'enfant"
        ],
        "workEnvironment": "Maternités, services de pédiatrie et néonatologie, crèches collectives, haltes-garderies, pouponnières.",
        "typicalDay": [
            {"time": "07:30", "activity": "Accueil des nouveau-nés à la maternité, prise des températures et relevé des pesées"},
            {"time": "09:00", "activity": "Atelier pratique du bain avec une maman primipare et apprentissage des soins du nombril"},
            {"time": "11:30", "activity": "Préparation et distribution des biberons selon les prescriptions diététiques pédiatriques"},
            {"time": "14:00", "activity": "Désinfection méticuleuse des berceaux et renouvellement de la literie stérile"},
            {"time": "15:30", "activity": "Transmissions orales avec l'infirmière puéricultrice sur la prise alimentaire des nourrissons"}
        ],
        "skills": {
            "technical": [
                "Techniques de soins d'hygiène et de confort du nouveau-né",
                "Règles d'hygiène et de stérilisation en biberonnerie",
                "Repérage des signes d'inconfort, de douleur ou de détresse respiratoire chez le nourrisson",
                "Techniques d'animation d'éveil et de socialisation petite enfance",
                "Mesure et transcription des paramètres vitaux de base"
            ],
            "human": [
                "Patience infinie, écoute et sens du contact chaleureux",
                "Sens aigu de l'observation visuelle du comportement de l'enfant",
                "Capacité à rassurer les parents avec tact et pédagogie",
                "Esprit d'équipe et respect des consignes de l'encadrement soignant"
            ],
            "tools": [
                "Baignoires ergonomiques pédiatriques",
                "Pèse-bébé électronique de haute précision",
                "Chauffe-biberons professionnels et thermomètres auriculaires",
                "Jeux d'éveil sensoriel certifiés sans danger"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Conditions d'accès", "title": "Sélection sur dossier et entretien (aucun diplôme préalable exigé)", "desc": "Sensibilité à la petite enfance et motivation requise."},
                {"step": "Formation en Institut (11 mois)", "title": "Institut de Formation d'Auxiliaires de Puériculture (IFAP)", "desc": "Formation de 44 semaines alternant cours théoriques et 4 stages cliniques en maternité, crèche et pédiatrie."}
            ],
            "schools": [
                {"name": "ENDSS — Dakar (Section Santé Maternelle et Infantile)", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Instituts de formation IFAP agréés en France (Croix-Rouge, centres hospitaliers)", "country": "France", "scope": "France"}
            ],
            "certifications": ["Diplôme d'État d'Auxiliaire de Puériculture (DEAP)", "AFGSU Niveau 2"]
        },
        "career": {
            "sectors": ["Petite enfance", "Périnatalité hospitalière", "Accueil en collectivité"],
            "employerTypes": ["Maternités et CHU", "Crèches municipales ou associatives", "Pouponnières de l'Aide Sociale à l'Enfance"],
            "evolution": "Auxiliaire de puériculture ➔ Évolution par passerelle vers le Diplôme d'État d'Infirmier (après 3 ans d'exercice) ➔ Éducateur de jeunes enfants",
            "pros": "Contact joyeux et affectueux avec les tout-petits, métier très recherché dans les grandes métropoles, formation courte et concrète.",
            "cons": "Charge physique (porter les enfants à longueur de journée), niveau de rémunération débutant souvent modeste."
        },
        "salary": "🇫🇷 France : 1 650 - 2 300 € net/mois • 🇸🇳 Sénégal : 110 000 - 280 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Dans les maternités modernes, les auxiliaires de puériculture sont spécialement formées à décoder les micromouvements et les expressions faciales des bébés pour repérer un début de fatigue ou de faim avant même qu'ils ne se mettent à pleurer.",
            "pourquoi": "Pleurer est le tout dernier signal de faim d'un bébé ; intervenir avant évite qu'il ne s'épuise et favorise un allaitement serein."
        },
        "sources": [
            {"organization": "Studyrama", "title": "Fiche métier : Auxiliaire de puériculture", "url": "https://www.studyrama.com/formations/fiches-metiers/sante/auxiliaire-de-puericulture", "type": "metier"},
            {"organization": "Ministère des Solidarités et de la Santé", "title": "Référentiel DEAP", "type": "institutionnel"}
        ],
        "interests": ["soigner-aider", "comprendre-humain-societe"],
        "relatedJobSlugs": ["puericulteur", "sage-femme", "infirmier-diplome-etat"]
    },

    # 14. MÉDECIN PSYCHIATRE
    {
        "id": "psychiatre",
        "slug": "psychiatre",
        "title": "Médecin Psychiatre",
        "aliases": ["Psychiatre", "Pédopsychiatre", "Praticien hospitalier en psychiatrie"],
        "icon": "🧠",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": ["sante-soins-paramedical", "lettres-langues-sciences-humaines", "biologie-chimie"],
        "domain": "Santé Mentale & Psychiatrie",
        "domainId": "sante-mentale",
        "subdomain": "Psychiatrie clinique",
        "shortDescription": "Docteur en médecine spécialisé dans la santé mentale, le psychiatre diagnostique, traite et prévient les troubles psychiques à l'aide de psychothérapies et de traitements médicamenteux.",
        "longDescription": "À la différence du psychologue clinicien (qui est titulaire d'un master de psychologie non médical), le psychiatre est un médecin ayant suivi 10 à 11 années d'études médicales complètes. Il est le seul professionnel de santé mentale habilité à prescrire des bilans somatiques, des psychotropes (antidépresseurs, anxiolytiques, antipsychotiques, thymorégulateurs) et à prononcer des hospitalisations en soins psychiatriques. Il traite les dépressions sévères, troubles bipolaires, schizophrénies, addictions et traumatismes.",
        "simpleDefinition": "Médecin spécialiste qui diagnostique et soigne les maladies mentales en combinant psychothérapie et médicaments.",
        "level": "Bac +10 à Bac +11 (DES de Psychiatrie)",
        "missions": [
            "Conduire des entretiens diagnostiques approfondis pour évaluer les troubles psychiatriques et le risque suicidaire",
            "Éliminer une cause organique ou neurologique par des examens biologiques et imageries cérébrales (IRM)",
            "Prescrire et adapter les traitements médicamenteux psychotropes en surveillant les effets secondaires",
            "Mener des psychothérapies individuelles (TCC, thérapies analytiques, systémiques)",
            "Coordonner l'équipe pluridisciplinaire en Centre Médico-Psychologique (CMP) ou en clinique psychiatrique"
        ],
        "workEnvironment": "Centres Médico-Psychologiques (CMP), hôpitaux psychiatriques (CHS), cliniques privées, cabinet libéral, services d'urgences psychiatriques.",
        "typicalDay": [
            {"time": "08:30", "activity": "Réunion de synthèse clinique pluridisciplinaire avec infirmiers, psychologues et assistants sociaux du CMP"},
            {"time": "09:30", "activity": "Consultation de suivi d'un patient bipolaire stabilisé sous régulateur d'humeur"},
            {"time": "11:00", "activity": "Entretien d'admission en hospitalisation de jour pour un trouble anxieux dépressif sévère"},
            {"time": "14:00", "activity": "Séance de psychothérapie comportementale et cognitive (TCC) pour un trouble obsessionnel compulsif"},
            {"time": "16:30", "activity": "Évaluation d'urgence aux urgences générales pour une crise d'angoisse aiguë avec idées suicidaires"}
        ],
        "skills": {
            "technical": [
                "Sémiologie psychiatrique et classifications nosographiques (DSM-5, CIM-11)",
                "Neurobiologie, pharmacocinétique et psychopharmacologie avancée",
                "Techniques de psychothérapie validées scientifiquement (TCC, thérapies interpersonnelles)",
                "Législation des soins psychiatriques sans consentement et protection juridique",
                "Gestion des situations d'urgence psychiatrique et désescalade de crise"
            ],
            "human": [
                "Écoute active exempte de tout jugement de valeur",
                "Patience inaltérable face à des pathologies chroniques lentes à stabiliser",
                "Capacité d'analyse fine du transfert et du contre-transfert relationnel",
                "Solidité émotionnelle face à la détresse psychique intense"
            ],
            "tools": [
                "Échelles d'évaluation psychiatrique (Hamilton, MADRS, PANSS)",
                "Dossier médical psychiatrique informatisé",
                "Plateforme de télé-psychiatrie sécurisée"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Baccalauréat scientifique S", "desc": "Bases en sciences et sciences humaines."},
                {"step": "Cycles 1 et 2 (Bac +1 à +6)", "title": "Études médicales complètes et externat", "desc": "Stages hospitaliers et épreuves nationales classantes."},
                {"step": "Troisième cycle (Bac +7 à +11)", "title": "DES de Psychiatrie (4 à 5 ans)", "desc": "Internat spécialisé en psychiatrie adulte, pédopsychiatrie, addictologie et urgences."}
            ],
            "schools": [
                {"name": "FMPOS UCAD — Clinique Psychiatrique de Fann (École de Fann - Dakar)", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Facultés de médecine et CHS français (Sainte-Anne Paris, Lyon, Toulouse)", "country": "France", "scope": "France"}
            ],
            "certifications": ["DES de Psychiatrie", "Thèse de Docteur en Médecine", "Ordre des Médecins"]
        },
        "career": {
            "sectors": ["Psychiatrie publique", "Exercice libéral", "Psychiatrie légale et expertises judiciaires"],
            "employerTypes": ["Centres Hospitaliers Spécialisés (CHS)", "Cabinets privés", "Établissements pénitentiaires (UHSA)"],
            "evolution": "Praticien hospitalier psychiatre ➔ Chef de pôle de santé mentale ➔ Directeur médical de clinique ➔ Professeur d'université",
            "pros": "Profondeur inégalée de la relation d'aide humaine, capacité à transformer radicalement la vie des patients en crise, très forte demande sociétale.",
            "cons": "Charge mentale et émotionnelle intense, confrontation à des situations de grande vulnérabilité sociale et au risque suicidaire."
        },
        "salary": "🇫🇷 France : 4 500 - 9 500 € net/mois selon secteur • 🇸🇳 Sénégal : 450 000 - 1 800 000 FCFA net/mois",
        "saviezVous": {
            "fait": "L'École de Fann à Dakar, initiée par le Pr Henri Collomb et poursuivie par des maîtres sénégalais, est mondialement célèbre en psychiatrie pour avoir intégré l'écoute communautaire africaine traditionnelle (l'arbre à palabres, les familles élargies) au sein même de l'hôpital psychiatrique moderne.",
            "pourquoi": "Cette approche pionnière a prouvé que la guérison psychique dépend autant du lien social et du soutien culturel que des molécules thérapeutiques."
        },
        "sources": [
            {"organization": "Studyrama", "title": "Fiche métier : Psychiatre", "url": "https://www.studyrama.com/formations/fiches-metiers/sante/psychiatre", "type": "metier"},
            {"organization": "Association Française de Psychiatrie", "title": "Exercer la psychiatrie", "type": "institutionnel"}
        ],
        "interests": ["soigner-aider", "comprendre-humain-societe", "comprendre-corps-humain"],
        "relatedJobSlugs": ["psychologue-clinicien", "infirmier-sante-mentale", "medecin-generaliste"]
    },

    # 15. INFIRMIER EN SANTÉ MENTALE & PSYCHIATRIE
    {
        "id": "infirmier-sante-mentale",
        "slug": "infirmier-sante-mentale",
        "title": "Infirmier / Infirmière en Santé Mentale & Psychiatrie",
        "aliases": ["Infirmier de secteur psychiatrique", "Infirmier en psychiatrie", "Soignant en santé mentale"],
        "icon": "🧠",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": ["sante-soins-paramedical", "lettres-langues-sciences-humaines", "biologie-chimie"],
        "domain": "Santé Mentale & Psychiatrie",
        "domainId": "sante-mentale",
        "subdomain": "Soins infirmiers psychiatriques",
        "shortDescription": "Spécialiste de la relation d'aide et de l'écoute thérapeutique, l'infirmier en santé mentale accompagne les patients souffrant de troubles psychiques vers la réhabilitation et l'autonomie.",
        "longDescription": "En milieu psychiatrique, l'outil de soin principal de l'infirmier est la relation humaine elle-même. Il administre les traitements psychotropes, observe finement les fluctuations de l'humeur et des angoisses, anime des ateliers thérapeutiques (peinture, écriture, médiation corporelle) et désamorce les crises d'angoisse ou d'agitation par la parole et l'empathie.",
        "simpleDefinition": "Infirmier qui accompagne et soigne les personnes souffrant de dépression, d'angoisses ou de maladies psychologiques à travers la parole et les activités.",
        "level": "Bac +3 (Diplôme d'État d'Infirmier avec formation continue en santé mentale)",
        "missions": [
            "Établir une alliance thérapeutique solide avec le patient souffrant de troubles mentaux",
            "Administrer les thérapeutiques médicamenteuses (psychotropes) et surveiller l'observance et les effets secondaires",
            "Mener des entretiens infirmiers d'aide et d'apaisement lors des moments d'angoisse",
            "Concevoir et animer des ateliers à médiation thérapeutique (art-thérapie, cuisine, groupes de parole)",
            "Accompagner la réinsertion sociale et le maintien dans le logement en lien avec le réseau médico-social"
        ],
        "workEnvironment": "Unités d'hospitalisation complète en psychiatrie (CHS), centres médico-psychologiques (CMP), hôpitaux de jour, foyers de transition.",
        "typicalDay": [
            {"time": "08:00", "activity": "Relève clinique d'équipe et analyse des comportements nocturnes des patients"},
            {"time": "09:00", "activity": "Entretiens soignants d'accueil matinal et distribution sécurisée des traitements"},
            {"time": "10:30", "activity": "Animation d'un atelier thérapeutique de relaxation et gestion corporelle du stress"},
            {"time": "14:00", "activity": "Visite à domicile d'un patient en rémission pour évaluer son autonomie et l'observance du traitement"},
            {"time": "16:00", "activity": "Désescalade verbale d'un moment de tension et écoute bienveillante en salle d'apaisement"}
        ],
        "skills": {
            "technical": [
                "Techniques d'entretien infirmier d'aide et de soutien psychologique",
                "Psychopathologie clinique et sémiologie des troubles de l'humeur et psychoses",
                "Gestion des états de crise et techniques de désescalade verbale non violente",
                "Surveillance clinique des thérapeutiques psychotropes",
                "Animation de groupes et médiations thérapeutiques"
            ],
            "human": [
                "Patience inaltérable et grande tolérance aux attitudes de repli ou d'hostilité",
                "Excellente maîtrise de soi et calme contagieux en situation d'agitation",
                "Capacité d'écoute authentique sans chercher à juger ou moraliser",
                "Capacité de travail en équipe pour élaborer une stratégie soignante cohérente"
            ],
            "tools": [
                "Dossier de soins psychiatriques informatisé",
                "Outils de médiation thérapeutique (jeux de rôle, peinture, musique)",
                "Protocoles de gestion de crise et espaces d'apaisement"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Formation initiale (Bac +3)", "title": "Diplôme d'État d'Infirmier (IFSI / ENDSS)", "desc": "Formation infirmière socle avec stages obligatoires en psychiatrie."},
                {"step": "Spécialisation continue", "title": "Diplômes Universitaires (DU) en Santé Mentale et Psychiatrie", "desc": "Formation clinique approfondie en psychopathologie et réhabilitation psychosociale."}
            ],
            "schools": [
                {"name": "ENDSS — Dakar (Enseignement spécialisé en psychiatrie)", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Instituts de Formation en Soins Infirmiers (IFSI) en France", "country": "France", "scope": "France"}
            ],
            "certifications": ["Diplôme d'État d'Infirmier", "DU de Soins Infirmiers en Psychiatrie"]
        },
        "career": {
            "sectors": ["Psychiatrie adulte et infanto-juvénile", "Addictologie", "Santé mentale communautaire"],
            "employerTypes": ["Centres Hospitaliers Spécialisés", "Centres Médico-Psychologiques", "Associations d'insertion pour personnes handicapées psychiques"],
            "evolution": "Infirmier en psychiatrie ➔ Infirmier de pratique avancée en psychiatrie (IPA santé mentale) ➔ Cadre de santé en pôle psychiatrique",
            "pros": "L'humain au centre absolu du soin, valorisation de la parole et de la relation, horaires souvent sans urgences techniques lourdes.",
            "cons": "Charge émotionnelle forte, évolution lente de certaines pathologies chroniques, confrontation occasionnelle à l'agressivité verbale."
        },
        "salary": "🇫🇷 France : 2 050 - 3 400 € net/mois • 🇸🇳 Sénégal : 180 000 - 500 000 FCFA net/mois",
        "saviezVous": {
            "fait": "En psychiatrie moderne, l'isolement et la contention physique sont devenus des pratiques de tout dernier recours, remplacées par des 'salles d'apaisement sensorielles' (Snoezelen) combinant lumières douces, musique et textures apaisantes animées par les infirmiers.",
            "pourquoi": "Ces approches sensorielles désamorcent la crise sans générer de traumatisme supplémentaire chez le patient."
        },
        "sources": [
            {"organization": "Studyrama", "title": "Fiche métier : Infirmier en psychiatrie", "url": "https://www.studyrama.com/formations/fiches-metiers/sante/infirmier", "type": "metier"},
            {"organization": "Association Française des Soignants en Psychiatrie (AFSP)", "title": "Les soins infirmiers en psychiatrie", "type": "institutionnel"}
        ],
        "interests": ["soigner-aider", "comprendre-humain-societe"],
        "relatedJobSlugs": ["psychiatre", "psychologue-clinicien", "infirmier-diplome-etat"]
    },

    # 16. MASSEUR-KINÉSITHÉRAPEUTE
    {
        "id": "kinesitherapeute",
        "slug": "kinesitherapeute",
        "title": "Masseur-Kinésithérapeute Diplômé d'État",
        "aliases": ["Kinésithérapeute", "Kiné", "Physiothérapeute"],
        "icon": "🦴",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": ["sante-soins-paramedical", "biologie-chimie"],
        "domain": "Rééducation, Réadaptation & Autonomie",
        "domainId": "reeducation-readaptation",
        "subdomain": "Kinésithérapie",
        "shortDescription": "Spécialiste du mouvement et de la rééducation motrice, le kinésithérapeute rétablit les capacités physiques, soulage la douleur et rééduque les fonctions musculaires et articulaires.",
        "longDescription": "Par des massages médicaux ciblés, des mobilisations articulaires et des exercices de gymnastique thérapeutique, le masseur-kinésithérapeute rééduque les personnes souffrant de paralysies, de fractures, de rhumatismes, d'accidents du sport ou de troubles respiratoires. Il aide les personnes accidentées à remarcher, les sportifs à récupérer et les nourrissons atteints de bronchiolite à respirer.",
        "simpleDefinition": "Spécialiste de la rééducation qui utilise des massages et des mouvements pour soulager les douleurs et réapprendre au corps à bouger.",
        "level": "Bac +5 (Diplôme d'État de Masseur-Kinésithérapeute - Grade Master)",
        "missions": [
            "Réaliser le bilan kinésithérapique initial (mobilité articulaire, force musculaire, douleur, posture)",
            "Pratiquer des massages thérapeutiques et des mobilisations actives et passives",
            "Élaborer et superviser des programmes de renforcement musculaire et de proprioception sur plateau technique",
            "Pratiquer la kinésithérapie respiratoire (désencombrement bronchique chez l'adulte et le nourrisson)",
            "Conseiller les patients sur la posture ergonomique et la prévention des récidives au quotidien"
        ],
        "workEnvironment": "Cabinet libéral individuel ou de groupe, centres de rééducation fonctionnelle (CRF), services hospitaliers de traumatologie et neurologie.",
        "typicalDay": [
            {"time": "08:30", "activity": "Séance de rééducation post-opératoire d'une rupture du ligament croisé du genou chez un jeune footballeur"},
            {"time": "09:30", "activity": "Mobilisation douce de l'épaule pour un patient souffrant de capsulite rétractile"},
            {"time": "11:00", "activity": "Kinésithérapie respiratoire pédiatrique pour un bébé encombré envoyé par le pédiatre"},
            {"time": "14:00", "activity": "Rééducation de la marche et de l'équilibre chez une personne âgée après fracture du col du fémur"},
            {"time": "17:00", "activity": "Séance de réhabilitation cardiorespiratoire sur vélo ergométrique"}
        ],
        "skills": {
            "technical": [
                "Anatomie descriptive, palpatoire et biomécanique du mouvement",
                "Techniques manuelles de mobilisation articulaire et de massothérapie",
                "Physiothérapie instrumentale (électrothérapie, ultrasons, pressothérapie)",
                "Kinésithérapie respiratoire et cardio-vasculaire",
                "Rééducation neurologique (méthodes Bobath, Kabat)"
            ],
            "human": [
                "Énergie communicative et capacité à motiver le patient dans l'effort",
                "Écoute attentive pour adapter l'intensité des exercices au seuil de douleur",
                "Bonne forme et résistance physique personnelle pour soutenir les patients",
                "Pédagogie pour enseigner les auto-exercices à domicile"
            ],
            "tools": [
                "Table de massage électrique réglable",
                "Barres parallèles de marche et espaliers",
                "Vélo ergométrique, tapis de course et presse quadriceps",
                "Appareils d'ondes de choc et d'électrostimulation"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Bac scientifique général ou S", "desc": "Excellentes bases scientifiques et physiques."},
                {"step": "Année de sélection (Bac +1)", "title": "PASS, L.AS ou Licence STAPS", "desc": "Accès très compétitif aux instituts de kinésithérapie."},
                {"step": "Institut de Kinésithérapie (Bac +2 à +5)", "title": "4 années en Institut de Formation en Masso-Kinésithérapie (IFMK)", "desc": "Validation du Diplôme d'État conférant le grade de Master."}
            ],
            "schools": [
                {"name": "ENDSS — Section Kinésithérapie / Physiothérapie — Dakar", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Instituts de Formation en Masso-Kinésithérapie (IFMK) en France (Paris, Nancy, Rennes, Toulouse)", "country": "France", "scope": "France"}
            ],
            "certifications": ["Diplôme d'État de Masseur-Kinésithérapeute", "Inscription obligatoire au Conseil National de l'Ordre des Masseurs-Kinésithérapeutes"]
        },
        "career": {
            "sectors": ["Cabinet libéral", "Centres de rééducation et thermalisme", "Clubs sportifs professionnels"],
            "employerTypes": ["Pratique libérale (85% des professionnels)", "Centres de rééducation fonctionnelle", "Fédérations et clubs sportifs"],
            "evolution": "Kinésithérapeute libéral ➔ Spécialisation en kinésithérapie du sport ou pédiatrique ➔ Cadre de santé en rééducation ➔ Enseignant en IFMK",
            "pros": "Contact humain très valorisant, progression visible du patient retrouvant son autonomie, liberté totale d'installation, métier très dynamique.",
            "cons": "Fatigue physique des mains, des poignets et du dos, charges de gestion en cabinet libéral."
        },
        "salary": "🇫🇷 France : 2 500 - 4 800 € net/mois en libéral (environ 2 000 - 3 200 € à l'hôpital) • 🇸🇳 Sénégal : 200 000 - 650 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Les kinésithérapeutes du sport accompagnent chaque délégation olympique et sont capables de remettre sur pied un athlète victime d'une contracture en quelques heures grâce à une combinaison de cryothérapie, massages profonds et taping.",
            "pourquoi": "Leur compréhension fine de la chaîne myotendineuse permet d'isoler la lésion sans immobiliser l'ensemble du membre."
        },
        "sources": [
            {"organization": "Studyrama", "title": "Fiche métier : Kinésithérapeute", "url": "https://www.studyrama.com/formations/fiches-metiers/sante/kinesitherapeute", "type": "metier"},
            {"organization": "Conseil National de l'Ordre des Masseurs-Kinésithérapeutes (CNOMK)", "title": "Le métier de kinésithérapeute", "type": "institutionnel"}
        ],
        "interests": ["soigner-aider", "comprendre-corps-humain", "construire-fabriquer"],
        "relatedJobSlugs": ["ergotherapeute", "psychomotricien", "pedicure-podologue", "medecin-generaliste"]
    },

    # 17. ERGOTHÉRAPEUTE
    {
        "id": "ergotherapeute",
        "slug": "ergotherapeute",
        "title": "Ergothérapeute Diplômé d'État",
        "aliases": ["Occupational Therapist", "Thérapeute en réadaptation de l'activité", "Spécialiste de l'autonomie"],
        "icon": "🧩",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": ["sante-soins-paramedical", "biologie-chimie"],
        "domain": "Rééducation, Réadaptation & Autonomie",
        "domainId": "reeducation-readaptation",
        "subdomain": "Ergothérapie",
        "shortDescription": "Spécialiste de l'autonomie au quotidien, l'ergothérapeute rééduque par l'activité concrète et aménage l'environnement pour permettre aux personnes en situation de handicap de vivre pleinement.",
        "longDescription": "L'ergothérapie part d'un principe fondamental : l'activité humaine a un pouvoir thérapeutique. Après un AVC, un traumatisme crânien ou face à une maladie neurodégénérative (Parkinson, Alzheimer), l'ergothérapeute réentraîne le patient aux gestes de la vie quotidienne : s'habiller, cuisiner, écrire, conduire. Il préconise des aides techniques innovantes et aménage le logement ou le poste de travail pour compenser les incapacités.",
        "simpleDefinition": "Professionnel de santé qui aide les personnes blessées ou handicapées à retrouver leur autonomie dans les gestes de tous les jours (manger, s'habiller, travailler).",
        "level": "Bac +3 (Diplôme d'État d'Ergothérapeute - Grade Licence)",
        "missions": [
            "Évaluer les capacités motrices, cognitives et l'autonomie fonctionnelle du patient dans ses activités de vie quotidienne",
            "Mettre en place des exercices de rééducation gestuelle à travers des mises en situation concrètes (cuisine, écriture, informatique)",
            "Concevoir et fabriquer sur mesure de petites orthèses de main et de poignet thermoformables",
            "Réaliser des visites à domicile pour diagnostiquer les obstacles architecturaux et préconiser des aménagements (douche adaptée, rampes)",
            "Sélectionner et entraîner le patient à l'utilisation d'aides techniques (fauteuil roulant électrique, logiciels de commande oculaire)"
        ],
        "workEnvironment": "Centres de rééducation fonctionnelle (CRF), services de neurologie et gériatrie hospitaliers, EHPAD, exercice libéral, cabinets d'aménagement de l'habitat.",
        "typicalDay": [
            {"time": "08:45", "activity": "Bilan de préhension et dextérité fine d'un patient hémiplégique après un accident vasculaire cérébral"},
            {"time": "10:00", "activity": "Mise en situation de préparation d'un repas en cuisine thérapeutique adaptée"},
            {"time": "11:30", "activity": "Thermoformage sur mesure d'une attelle de repos de nuit pour une patiente polyarthritique"},
            {"time": "14:00", "activity": "Visite au domicile d'un enfant myopathe pour planifier l'élargissement des portes et la domotique"},
            {"time": "16:00", "activity": "Essai et réglage d'un fauteuil roulant électrique avec joystick adapté au menton"}
        ],
        "skills": {
            "technical": [
                "Analyse sémiologique de l'activité humaine et bilans d'autonomie (MIF, Barthel)",
                "Conception et fabrication d'orthèses thermoformables de membre supérieur",
                "Normes d'accessibilité PMR et aménagement architectural de l'habitat",
                "Aides techniques compensatoires et nouvelles technologies d'assistance",
                "Rééducation cognitive des fonctions exécutives"
            ],
            "human": [
                "Créativité et inventivité pour trouver des solutions ingénieuses sur mesure",
                "Écoute des projets de vie personnels du patient sans imposer de modèle normé",
                "Pédagogie pour réapprendre des gestes avec patience",
                "Sens de la négociation avec les financeurs pour l'attribution des aides techniques"
            ],
            "tools": [
                "Cuisine thérapeutique avec plans de travail réglables en hauteur",
                "Bac de thermoformage à eau chaude et plaques de plastique polymère",
                "Logiciels d'accessibilité informatique et contacteurs adaptés",
                "Mètre laser et grille d'évaluation d'accessibilité domiciliaire"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Baccalauréat général ou technologique", "desc": "Profil équilibré sciences et humanités."},
                {"step": "Sélection Parcoursup / Concours (Bac +1)", "title": "Accès aux Instituts de Formation en Ergothérapie (IFE)", "desc": "Dossier Parcoursup ou PASS/L.AS selon universités."},
                {"step": "Institut d'Ergothérapie (Bac +3)", "title": "3 années en IFE", "desc": "Obtention du Diplôme d'État d'Ergothérapeute conférant le grade de Licence."}
            ],
            "schools": [
                {"name": "ENDSS — Section Ergothérapie / Réadaptation — Dakar", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Instituts de Formation en Ergothérapie (IFE) en France (Paris, Bordeaux, Créteil, Rennes)", "country": "France", "scope": "France"}
            ],
            "certifications": ["Diplôme d'État d'Ergothérapeute", "Numéro ADELI / RPPS"]
        },
        "career": {
            "sectors": ["Rééducation hospitalière", "Secteur médico-social", "Exercice libéral et expertise assurances"],
            "employerTypes": ["Centres de rééducation fonctionnelle", "Services de soins de suite et de réadaptation (SSR)", "Maisons Départementales des Personnes Handicapées (MDPH)"],
            "evolution": "Ergothérapeute clinicien ➔ Ergothérapeute conseil en accessibilité et ergonomie industrielle ➔ Cadre de santé en rééducation",
            "pros": "Impact immédiatement visible sur la liberté et la dignité des personnes, métier extrêmement créatif et concret, demande en forte croissance.",
            "cons": "Démarches administratives parfois longues pour obtenir le financement des aides techniques prescrites."
        },
        "salary": "🇫🇷 France : 1 900 - 3 400 € net/mois selon secteur • 🇸🇳 Sénégal : 180 000 - 450 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Un ergothérapeute peut permettre à une personne totalement tétraplégique de contrôler les lumières, la télévision, son lit médicalisé et d'écrire sur ordinateur uniquement grâce au mouvement de ses yeux ou à un souffle d'air dans une paille !",
            "pourquoi": "L'ergothérapie adapte l'environnement aux capacités restantes du patient, aussi minimes soient-elles."
        },
        "sources": [
            {"organization": "Studyrama", "title": "Fiche métier : Ergothérapeute", "url": "https://www.studyrama.com/formations/fiches-metiers/sante/ergotherapeute", "type": "metier"},
            {"organization": "Association Nationale Française des Ergothérapeutes (ANFE)", "title": "Présentation de l'ergothérapie", "type": "institutionnel"}
        ],
        "interests": ["soigner-aider", "construire-fabriquer", "resoudre-problemes"],
        "relatedJobSlugs": ["kinesitherapeute", "psychomotricien", "orthophoniste"]
    },

    # 18. ORTHOPHONISTE
    {
        "id": "orthophoniste",
        "slug": "orthophoniste",
        "title": "Orthophoniste Diplômé d'État",
        "aliases": ["Logopède", "Thérapeute du langage et de la communication", "Speech Therapist"],
        "icon": "🗣️",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": ["sante-soins-paramedical", "lettres-langues-sciences-humaines", "biologie-chimie"],
        "domain": "Rééducation, Réadaptation & Autonomie",
        "domainId": "reeducation-readaptation",
        "subdomain": "Orthophonie",
        "shortDescription": "Spécialiste de la communication humaine, l'orthophoniste rééduque les troubles du langage oral et écrit (bégaiement, dyslexie), de la voix, de la déglutition et de la mémoire.",
        "longDescription": "L'orthophoniste intervient à tous les âges de la vie sur prescription médicale. Chez l'enfant, il rééduque les retards de parole, bégaiements, dyslexies et dysorthographies. Chez l'adulte, il restaure la parole et la déglutition après un AVC (aphasie) ou une chirurgie de la gorge (larynx), et stimule les fonctions cognitives chez les personnes âgées atteintes de maladies neurodégénératives.",
        "simpleDefinition": "Professionnel de santé qui rééduque les personnes qui ont du mal à parler, à lire, à écrire ou à avaler.",
        "level": "Bac +5 (Certificat de Capacité d'Orthophoniste - Grade Master)",
        "missions": [
            "Réaliser le bilan orthophonique complet : évaluation du langage oral, écrit, de la déglutition et des fonctions cognitives",
            "Élaborer un projet thérapeutique personnalisé avec objectifs précis et réguliers",
            "Mener des séances de rééducation du bégaiement, de l'articulation et des troubles spécifiques des apprentissages (dyslexie)",
            "Rééduquer les troubles de la déglutition pour éviter les fausses routes chez les personnes âgées ou opérées",
            "Accompagner la réhabilitation du langage des patients aphasiques après un accident vasculaire cérébral"
        ],
        "workEnvironment": "Cabinet libéral (80%), services hospitaliers de neurologie, pédiatrie et ORL, centres médico-psycho-pédagogiques (CMPP).",
        "typicalDay": [
            {"time": "08:30", "activity": "Séance de rééducation de la voix chez une enseignante souffrant de nodules des cordes vocales"},
            {"time": "09:30", "activity": "Rééducation du langage écrit chez un enfant de CE2 présentant une dyslexie phonologique"},
            {"time": "11:00", "activity": "Séance auprès d'un adulte aphasique après un AVC pour restaurer l'évocation des mots"},
            {"time": "14:00", "activity": "Bilan initial complet de langage oral d'un petit garçon de 4 ans ne formulant pas de phrases"},
            {"time": "16:30", "activity": "Rééducation de la déglutition chez un patient parkinsonien en collaboration avec l'aidant"}
        ],
        "skills": {
            "technical": [
                "Linguistique, phonétique, phonologie et sciences du langage",
                "Neuropsychologie cognitive du langage et de la mémoire",
                "Physiologie ORL des cordes vocales et du carrefour aéro-digestif",
                "Passation et étalonnage des tests orthophoniques standardisés",
                "Techniques de communication alternative et augmentée (pictogrammes, tablettes)"
            ],
            "human": [
                "Écoute attentive, bienveillance et patience à toute épreuve",
                "Créativité ludique pour motiver les enfants à travers des jeux ciblés",
                "Capacité à redonner confiance à des personnes isolées par l'incapacité de parler",
                "Pédagogie pour guider les parents et enseignants sans culpabiliser"
            ],
            "tools": [
                "Batteries de tests orthophoniques normés (BALE, Isadys, etc.)",
                "Jeux éducatifs et matériel de manipulation articulatoire",
                "Miroir de rééducation et enregistreurs vocaux",
                "Applications spécialisées sur tablette tactile"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Baccalauréat général (spécialités littéraires ou scientifiques)", "desc": "Excellente maîtrise du français et de la logique."},
                {"step": "Concours / Sélection Parcoursup (Bac +1)", "title": "Accès aux Centres de Formation Universitaire en Orthophonie (CFUO)", "desc": "Sélection drastique sur dossier et épreuves orales."},
                {"step": "Études universitaires (Bac +5)", "title": "5 années en département d'orthophonie", "desc": "Validation du Certificat de Capacité d'Orthophoniste (CCO) valant grade de Master."}
            ],
            "schools": [
                {"name": "Centres de Formation Universitaire en Orthophonie (CFUO) des facultés de médecine en France (Paris, Lyon, Marseille, Lille)", "country": "France", "scope": "France"},
                {"name": "FMPOS / Instituts spécialisés en réadaptation — UCAD Dakar", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat de Capacité d'Orthophoniste (Grade Master)", "Numéro RPPS"]
        },
        "career": {
            "sectors": ["Cabinet libéral", "Centres médico-psycho-pédagogiques (CMPP)", "Hôpitaux et rééducation"],
            "employerTypes": ["Pratique libérale majoritaire", "Services hospitaliers de neurologie/ORL", "Instituts pour enfants déficients auditifs"],
            "evolution": "Orthophoniste clinicien ➔ Orthophoniste spécialisé en neurologie ou bégaiement ➔ Maître de stage ➔ Chercheur en sciences de la réadaptation",
            "pros": "Reconnaissance affective immense des patients qui retrouvent la parole, indépendance complète en libéral, demande gigantesque (délais d'attente de plusieurs mois).",
            "cons": "Séances rapprochées de 30 minutes demandant une attention mentale constante toute la journée, listes d'attente parfois douloureuses à gérer."
        },
        "salary": "🇫🇷 France : 2 400 - 4 000 € net/mois en libéral (environ 2 000 - 3 200 € à l'hôpital) • 🇸🇳 Sénégal : 180 000 - 500 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Chez un patient victime d'un AVC ayant perdu l'usage de la parole (aphasie sévère), l'orthophoniste utilise parfois la mélodie et le chant (Thérapie Mélodique et Rythmée) pour lui permettre de chanter des phrases qu'il est incapable de prononcer normalement !",
            "pourquoi": "La musique et le chant mobilisent des circuits neuronaux situés dans l'hémisphère cérébral droit, contournant ainsi la lésion gauche de la parole."
        },
        "sources": [
            {"organization": "Studyrama", "title": "Fiche métier : Orthophoniste", "url": "https://www.studyrama.com/formations/fiches-metiers/sante/orthophoniste", "type": "metier"},
            {"organization": "Fédération Nationale des Orthophonistes (FNO)", "title": "La profession d'orthophoniste", "type": "institutionnel"}
        ],
        "interests": ["soigner-aider", "comprendre-humain-societe", "lire-ecrire-litterature"],
        "relatedJobSlugs": ["ergotherapeute", "psychomotricien", "psychologue-clinicien"]
    },

    # 19. PSYCHOMOTRICIEN
    {
        "id": "psychomotricien",
        "slug": "psychomotricien",
        "title": "Psychomotricien Diplômé d'État",
        "aliases": ["Thérapeute en psychomotricité", "Spécialiste du schéma corporel", "Psychomotricienne"],
        "icon": "🤸",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": ["sante-soins-paramedical", "lettres-langues-sciences-humaines", "biologie-chimie"],
        "domain": "Rééducation, Réadaptation & Autonomie",
        "domainId": "reeducation-readaptation",
        "subdomain": "Psychomotricité",
        "shortDescription": "Spécialiste du lien entre le corps et l'esprit, le psychomotricien rééduque les troubles du geste, de l'équilibre, de l'espace-temps et des émotions par le mouvement et le jeu.",
        "longDescription": "Le psychomotricien traite les troubles qui s'expriment à la fois sur le plan corporel et psychologique : maladresse motrice, hyperactivité (TDAH), troubles de l'orientation spatio-temporelle, tics, inhibition motrice ou dysgraphie. À travers le jeu corporel, la relaxation, la danse, le mime ou des parcours d'agilité, il aide le patient à se réconcilier avec son corps et à mieux réguler ses émotions.",
        "simpleDefinition": "Professionnel de santé qui aide les enfants et adultes maladroits, angoissés ou hyperactifs à mieux contrôler leur corps et leurs mouvements.",
        "level": "Bac +3 (Diplôme d'État de Psychomotricien)",
        "missions": [
            "Réaliser le bilan psychomoteur complet (tonus musculaire, schéma corporel, latéralité, repérage spatial, coordination motrice)",
            "Concevoir des séances de rééducation basées sur le jeu corporel, le rythme et le mouvement",
            "Aider les enfants avec TDAH ou autisme à canaliser leur agitation motrice et focaliser leur attention",
            "Accompagner les personnes âgées anxieuses face au risque de chute pour retrouver confiance en leur équilibre",
            "Pratiquer des séances de relaxation thérapeutique pour relâcher les tensions musculaires liées au stress"
        ],
        "workEnvironment": "Centres Médico-Psycho-Pédagogiques (CMPP), instituts médico-éducatifs (IME), services de pédopsychiatrie et gériatrie, cabinet libéral.",
        "typicalDay": [
            {"time": "09:00", "activity": "Parcours d'équilibre et de motricité globale pour un enfant de 6 ans dyspraxique"},
            {"time": "10:15", "activity": "Séance de rééducation de la motricité fine et de la tenue du stylo pour un écolier dysgraphique"},
            {"time": "11:30", "activity": "Atelier de relaxation corporelle pour un adolescent souffrant de phobie scolaire et de tics"},
            {"time": "14:00", "activity": "Séance en piscine thérapeutique (balnéothérapie) pour un jeune adulte avec infirmité motrice cérébrale"},
            {"time": "16:00", "activity": "Bilan psychomoteur initial d'un petit garçon suspecté de trouble du spectre de l'autisme"}
        ],
        "skills": {
            "technical": [
                "Passation et analyse des tests psychomoteurs étalonnés (EMG, BHK, MABC-2)",
                "Connaissance approfondie de la neurophysiologie motrice et du tonus",
                "Techniques de relaxation psychosomatique (Soubiran, Bergès)",
                "Pédagogie du jeu symbolique et de la motricité libre",
                "Approche snoezelen et stimulation sensorielle"
            ],
            "human": [
                "Patience, créativité ludique et expressivité corporelle",
                "Capacité à instaurer une relation de confiance sécurisante par le regard et la posture",
                "Sens aigu de l'observation des attitudes corporelles subtiles",
                "Non-jugement face à l'agitation ou au repli sur soi"
            ],
            "tools": [
                "Modules de motricité en mousse, poutres d'équilibre et ballons de Klein",
                "Tissus sensoriels, instruments de musique à percussion et cerceaux",
                "Miroirs d'auto-observation corporelle",
                "Tapis de sol épais et matériel de relaxation"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Baccalauréat toutes séries", "desc": "Goût pour le mouvement, le sport ou l'art."},
                {"step": "Sélection Parcoursup / Concours (Bac +1)", "title": "Accès aux Instituts de Formation en Psychomotricité (IFP)", "desc": "Sélection sur dossier et épreuves orales."},
                {"step": "Institut de Psychomotricité (Bac +3)", "title": "3 années en IFP", "desc": "Validation du Diplôme d'État de Psychomotricien."}
            ],
            "schools": [
                {"name": "Instituts de Formation en Psychomotricité (IFP) en France (Paris ISRP, Lyon, Bordeaux, Toulouse)", "country": "France", "scope": "France"},
                {"name": "Département de réadaptation — ENDSS / UCAD Dakar", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Diplôme d'État de Psychomotricien", "Numéro ADELI / RPPS"]
        },
        "career": {
            "sectors": ["Secteur médico-social", "Pédopsychiatrie", "Gériatrie et cabinets libéraux"],
            "employerTypes": ["Instituts Médico-Éducatifs (IME)", "Centres d'Action Médico-Sociale Précoce (CAMSP)", "Établissements pour personnes âgées"],
            "evolution": "Psychomotricien salarié ➔ Installation en cabinet libéral ➔ Cadre de santé en rééducation ➔ Formateur en institut",
            "pros": "Pratique soignante vivante et corporelle, impact rapide sur le bien-être de l'enfant qui retrouve le plaisir de bouger, grande variété de médiations.",
            "cons": "Reconnaissance encore inégale selon les pays, actes non remboursés par la sécurité sociale en France sans demande d'entente préalable en libéral."
        },
        "salary": "🇫🇷 France : 1 850 - 3 200 € net/mois selon statut • 🇸🇳 Sénégal : 170 000 - 450 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Chez les personnes âgées souffrant de la 'peur de tomber' après une fracture, le psychomotricien travaille sur la sensation des pieds au sol et le relâchement musculaire, ce qui permet à 80% d'entre elles de remarcher sans canne.",
            "pourquoi": "La peur de chuter raidit les muscles et aggrave paradoxalement le risque de chute ; détendre le tonus corporel rétablit l'équilibre naturel."
        },
        "sources": [
            {"organization": "Studyrama", "title": "Fiche métier : Psychomotricien", "url": "https://www.studyrama.com/formations/fiches-metiers/sante/psychomotricien", "type": "metier"},
            {"organization": "Fédération Française des Psychomotriciens (FFP)", "title": "Qu'est-ce que la psychomotricité ?", "type": "institutionnel"}
        ],
        "interests": ["soigner-aider", "comprendre-humain-societe", "comprendre-corps-humain"],
        "relatedJobSlugs": ["ergotherapeute", "kinesitherapeute", "orthophoniste"]
    },

    # 20. PÉDICURE-PODOLOGUE
    {
        "id": "pedicure-podologue",
        "slug": "pedicure-podologue",
        "title": "Pédicure-Podologue Diplômé d'État",
        "aliases": ["Podologue", "Spécialiste du pied", "Podologiste du sport"],
        "icon": "🦶",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": ["sante-soins-paramedical", "biologie-chimie"],
        "domain": "Rééducation, Réadaptation & Autonomie",
        "domainId": "reeducation-readaptation",
        "subdomain": "Pédicurie-Podologie",
        "shortDescription": "Expert du pied et de la marche, le pédicure-podologue soigne les affections de la peau et des ongles (cors, ongles incarnés) et conçoit des semelles orthopédiques sur mesure.",
        "longDescription": "Le pédicure-podologue possède une double compétence médicale et biomécanique. En tant que pédicure, il traite les affections épidermiques et unguéales (durillons, mycoses, verrues, ongles incarnés) avec des instruments stériles de haute précision. En tant que podologue, il analyse la statique et la dynamique de la marche sur plateforme baropodométrique et conçoit des semelles orthopédiques (orthèses plantaires) pour corriger les défauts d'alignement et soulager les douleurs de dos, de hanche ou de genou.",
        "simpleDefinition": "Professionnel de santé qui soigne les douleurs aux pieds, traite les ongles abîmés et fabrique des semelles orthopédiques pour bien marcher.",
        "level": "Bac +3 (Diplôme d'État de Pédicure-Podologue - Grade Licence)",
        "missions": [
            "Diagnostiquer les affections du pied et analyser les troubles de la posture et de la marche",
            "Pratiquer les soins de pédicurie médicale (ablation des cors, traitement des ongles incarnés, soins des pieds diabétiques à risque)",
            "Réaliser un examen podologique complet sur plateforme de pression électronique",
            "Concevoir et fabriquer sur mesure des semelles orthopédiques (thermoformées ou fraisées en 3D)",
            "Prescrire les pansements et topiques médicamenteux adaptés aux affections podologiques"
        ],
        "workEnvironment": "Cabinet libéral (95% des praticiens), cliniques privées, services de diabétologie hospitaliers, clubs de sport.",
        "typicalDay": [
            {"time": "08:30", "activity": "Soin de pédicurie complet pour une personne diabétique : vérification de la sensibilité et soins préventifs"},
            {"time": "09:30", "activity": "Traitement d'un ongle incarné douloureux avec pose d'une languette d'orthonyxie correctrice"},
            {"time": "11:00", "activity": "Bilan postural et podologique d'un coureur de marathon souffrant d'une tendinopathie d'Achille"},
            {"time": "14:00", "activity": "Atelier technique : thermoformage et meulage de semelles orthopédiques sur mesure"},
            {"time": "16:30", "activity": "Livraison et essayage dynamique des semelles dans les chaussures du patient"}
        ],
        "skills": {
            "technical": [
                "Sémiologie cutanée et unguéale du pied",
                "Biomécanique de la marche, analyse de la foulée et stabilométrie",
                "Conception d'orthèses plantaires (semelles classiques, thermoformées, 3D)",
                "Orthonyxie (correction de courbure unguéale) et onychoplastie",
                "Soins spécialisés du pied diabétique à haut risque d'amputation"
            ],
            "human": [
                "Minutie, précision chirurgicale du geste manuel",
                "Capacité d'écoute et douceur pour soulager immédiatement la douleur aiguë",
                "Sens de l'accueil et relation de proximité avec une patientèle fidèle",
                "Rigueur d'asepsie pour éviter toute complication infectieuse"
            ],
            "tools": [
                "Turbine et micromoteur de pédicurie avec spray",
                "Plateforme baropodométrique de capteurs de pression",
                "Touret d'atelier pour le meulage et ponçage des semelles",
                "Four de thermoformage sous vide pour résines et mousses EVA"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Baccalauréat général ou technologique", "desc": "Bases en biologie et physique."},
                {"step": "Sélection Parcoursup (Bac +1)", "title": "Accès aux Instituts de Formation en Pédicurie-Podologie (IFPP)", "desc": "Sélection sur dossier Parcoursup."},
                {"step": "Institut de Podologie (Bac +3)", "title": "3 années d'études en IFPP", "desc": "Obtention du Diplôme d'État de Pédicure-Podologue conférant le grade de Licence."}
            ],
            "schools": [
                {"name": "Instituts de Formation en Pédicurie-Podologie (IFPP) en France (Paris, Lille, Bordeaux, Rennes, Marseille)", "country": "France", "scope": "France"},
                {"name": "Écoles de formation aux métiers paramédicaux et de rééducation — Dakar", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Diplôme d'État de Pédicure-Podologue", "Inscription obligatoire à l'Ordre National des Pédicures-Podologues (ONPP)"]
        },
        "career": {
            "sectors": ["Cabinet libéral prépondérant", "Podologie du sport", "Services hospitaliers de diabétologie"],
            "employerTypes": ["Cabinets libéraux privés", "Réseaux de santé diabète", "Fédérations sportives"],
            "evolution": "Pédicure-podologue collaborateur ➔ Titulaire de cabinet ➔ Spécialisation en podologie du sport ➔ Enseignant en institut",
            "pros": "Indépendance professionnelle complète, liberté de prescription des topiques podologiques, soulagement quasi instantané de la douleur du patient, création manuelle de semelles valorisante.",
            "cons": "Coût d'installation initial pour équiper la salle de soins et l'atelier de semelles, sédentarité en cabinet."
        },
        "salary": "🇫🇷 France : 2 200 - 4 500 € net/mois en libéral • 🇸🇳 Sénégal : 180 000 - 550 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Chez les personnes atteintes de diabète sévère, la perte de sensibilité nerveuse aux pieds empêche de ressentir les blessures. La surveillance régulière par un pédicure-podologue permet de prévenir jusqu'à 80% des amputations !",
            "pourquoi": "Un simple petit frottement de chaussure non détecté peut dégénérer en plaie ouverte profonde sans intervention experte précoce."
        },
        "sources": [
            {"organization": "Studyrama", "title": "Fiche métier : Pédicure-podologue", "url": "https://www.studyrama.com/formations/fiches-metiers/sante/pedicure-podologue", "type": "metier"},
            {"organization": "Ordre National des Pédicures-Podologues (ONPP)", "title": "La profession de pédicure-podologue", "type": "institutionnel"}
        ],
        "interests": ["soigner-aider", "construire-fabriquer", "comprendre-corps-humain"],
        "relatedJobSlugs": ["kinesitherapeute", "ergotherapeute", "medecin-generaliste"]
    }
]

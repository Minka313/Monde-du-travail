# -*- coding: utf-8 -*-
"""
BASE DE DONNÉES DU SECTEUR SANTÉ, SOINS & PARAMÉDICAL — PARTIE 3
Fiches Métiers 21 à 30 : Orthoptie, Urgences, Biologie Médicale, Pharmacie & Management Hospitalier
"""

HEALTH_JOBS_PART3 = [
    # 21. ORTHOPTISTE
    {
        "id": "orthoptiste",
        "slug": "orthoptiste",
        "title": "Orthoptiste Diplômé d'État",
        "aliases": ["Rééducateur de la vision", "Spécialiste de la vision binoculaire", "Orthoptiste clinicien"],
        "icon": "👁️",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": ["sante-soins-paramedical", "biologie-chimie"],
        "domain": "Rééducation, Réadaptation & Autonomie",
        "domainId": "reeducation-readaptation",
        "subdomain": "Orthoptie",
        "shortDescription": "Kinésithérapeute des yeux, l'orthoptiste dépiste, explore et rééduque les anomalies de la vision binoculaire, les strabismes, la fatigue visuelle sur écran et la basse vision.",
        "longDescription": "L'orthoptiste est l'allié incontournable de l'ophtalmologiste. Sur prescription médicale, il évalue l'acuité visuelle, explore le champ visuel, réalise des bilans de strabisme chez les bébés, rééduque la convergence oculaire pour éliminer les maux de tête chroniques et prend en charge les personnes malvoyantes (DMLA, glaucome) pour leur réapprendre à utiliser leur vision résiduelle.",
        "simpleDefinition": "Professionnel de santé qui fait faire des exercices aux yeux pour soigner le strabisme, la fatigue visuelle et les problèmes de vision des deux yeux.",
        "level": "Bac +3 (Certificat de Capacité d'Orthoptiste - Grade Licence)",
        "missions": [
            "Réaliser des bilans orthoptiques complets (motilité oculaire, vision stéréoscopique 3D, acuité visuelle)",
            "Mener des séances de rééducation de la convergence pour soulager céphalées et fatigue sur écran",
            "Dépister et traiter l'amblyopie et le strabisme chez le jeune enfant par occlusion thérapeutique",
            "Réaliser des examens d'exploration instrumentale ophtalmologique (champ visuel, rétinographie, OCT, tonométrie)",
            "Accompagner la réadaptation visuelle des personnes atteintes de basse vision (DMLA, rétinopathie)"
        ],
        "workEnvironment": "Cabinet libéral individuel ou de groupe, cabinets d'ophtalmologie en collaboration directe, services hospitaliers ophtalmiques.",
        "typicalDay": [
            {"time": "08:45", "activity": "Bilan de dépistage visuel chez un enfant de 3 ans orienté par la PMI pour suspicion de strabisme"},
            {"time": "10:00", "activity": "Séance de rééducation de la convergence oculaire chez un jeune ingénieur sur écran souffrant de maux de tête"},
            {"time": "11:30", "activity": "Réalisation d'un champ visuel automatisé de Humphrey pour surveillance de glaucome"},
            {"time": "14:00", "activity": "Prise en charge en basse vision d'une dame de 75 ans atteinte de DMLA avec apprentissage d'une loupe électronique"},
            {"time": "16:00", "activity": "Consultation conjointe avec l'ophtalmologiste pour réfraction et adaptation de prismes correcteurs"}
        ],
        "skills": {
            "technical": [
                "Physiologie optique et anatomie neuromusculaire oculaire",
                "Techniques de rééducation de la vision binoculaire et prismation",
                "Maîtrise des appareils d'exploration ophtalmique (OCT, pachymétrie, tonométrie)",
                "Dépistage précoce des troubles réfractifs pédiatriques",
                "Basse vision et adaptation des aides optiques grossissantes"
            ],
            "human": [
                "Patience et sens pédagogique pour captiver l'attention visuelle des tout-petits",
                "Précision et minutie dans les mesures angulaires oculaires",
                "Capacité à encourager les patients dans la régularité des exercices",
                "Bonne communication collaborative avec les ophtalmologistes"
            ],
            "tools": [
                "Synoptophore (appareil d'exploration de la vision binoculaire)",
                "Règle de Krimsky et barres de prismes",
                "Coupole de champ visuel automatisé (Humphrey / Octopus)",
                "Rétinographe non mydriatique et tomographe OCT"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Baccalauréat scientifique ou général", "desc": "Bases en optique physique et biologie."},
                {"step": "Sélection Parcoursup (Bac +1)", "title": "Sélection en département d'orthoptie des facultés de médecine", "desc": "Dossier académique et entretien de motivation."},
                {"step": "Formation universitaire (Bac +3)", "title": "3 années en faculté de médecine", "desc": "Validation du Certificat de Capacité d'Orthoptiste (grade de Licence)."}
            ],
            "schools": [
                {"name": "Départements d'Orthoptie des facultés de médecine françaises (Paris Cité, Lyon, Marseille, Bordeaux, Lille)", "country": "France", "scope": "France"},
                {"name": "FMPOS / Instituts spécialisés en santé oculaire — UCAD Dakar", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat de Capacité d'Orthoptiste", "Numéro RPPS"]
        },
        "career": {
            "sectors": ["Ophtalmologie libérale et hospitalière", "Basse vision", "Centres de rééducation sensorielle"],
            "employerTypes": ["Cabinets libéraux privés", "Centres d'ophtalmologie pluridisciplinaires", "Hôpitaux et fondations ophtalmiques"],
            "evolution": "Orthoptiste collaborateur ➔ Orthoptiste titulaire de cabinet ➔ Orthoptiste expert en chirurgie réfractive ➔ Enseignant en département d'orthoptie",
            "pros": "Excellente insertion professionnelle (pénurie d'ophtalmologistes valorisant le rôle de l'orthoptiste), travail technique et varié, horaires réguliers sans gardes.",
            "cons": "Dépendance initiale à la prescription médicale d'un ophtalmologiste, travail minutieux devant des écrans de mesure."
        },
        "salary": "🇫🇷 France : 2 000 - 3 800 € net/mois selon statut • 🇸🇳 Sénégal : 180 000 - 450 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Si le strabisme d'un enfant n'est pas pris en charge par un orthoptiste avant l'âge de 6 ou 7 ans, le cerveau 'éteint' définitivement l'image de l'œil dévié pour éviter de voir double, rendant cet œil irrémédiablement aveugle (amblyopie fonctionnelle).",
            "pourquoi": "La plasticité cérébrale visuelle se ferme après la petite enfance ; l'intervention précoce de l'orthoptiste sauve la vue de cet œil."
        },
        "sources": [
            {"organization": "Studyrama", "title": "Fiche métier : Orthoptiste", "url": "https://www.studyrama.com/formations/fiches-metiers/sante/orthoptiste", "type": "metier"},
            {"organization": "Syndicat National des Orthoptistes (SNAO)", "title": "Présentation du métier d'orthoptiste", "type": "institutionnel"}
        ],
        "interests": ["soigner-aider", "comprendre-corps-humain", "resoudre-problemes"],
        "relatedJobSlugs": ["chirurgien", "kinesitherapeute", "ergotherapeute"]
    },

    # 22. AMBULANCIER
    {
        "id": "ambulancier",
        "slug": "ambulancier",
        "title": "Ambulancier / Ambulancière Diplômé(e) d'État",
        "aliases": ["Ambulancier SMUR", "Conducteur ambulancier", "Technicien de transport sanitaire"],
        "icon": "🚑",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": ["sante-soins-paramedical", "transport-logistique", "biologie-chimie"],
        "domain": "Urgences, Secours Médical & Régulation",
        "domainId": "urgences-secours",
        "subdomain": "Ambulance & Transport sanitaire",
        "shortDescription": "Maillon vital du secours d'urgence et du transport sanitaire, l'ambulancier transporte les blessés et malades, assure la surveillance clinique et pratique les gestes d'urgence.",
        "longDescription": "L'ambulancier diplômé d'État (ADE) assure le transport sanitaire d'urgence ou programmé des patients dans des véhicules médicalisés spécialement équipés. Qu'il intervienne sur demande du SAMU pour une détresse aiguë à domicile ou sur la route, ou qu'il conduise l'Unité Mobile Hospitalière du SMUR aux côtés d'un médecin urgentiste, il allie conduite rapide et ultra-sécurisée, gestes de secours d'urgence (massage cardiaque, arrêt d'hémorragie, pose de collier cervical) et réconfort humain.",
        "simpleDefinition": "Professionnel de santé qui conduit l'ambulance à toute vitesse en toute sécurité et prodigue les premiers soins aux blessés et malades.",
        "level": "Diplôme d'État d'Ambulancier (DEA - Formation en institut agréé)",
        "missions": [
            "Conduire le véhicule sanitaire d'urgence rapidement et en toute sécurité en respectant le confort du patient",
            "Prendre en charge le patient, l'installer et pratiquer les gestes de premiers secours d'urgence (défibrillation, oxygénothérapie)",
            "Surveiller en continu l'état clinique et les constantes vitales pendant le trajet jusqu'à l'hôpital",
            "Transmettre avec précision le bilan de santé au médecin régulateur du SAMU (centre 15)",
            "Désinfecter scrupuleusement la cellule sanitaire et contrôler les équipements médicaux de bord"
        ],
        "workEnvironment": "Entreprises privées de transport sanitaire, services mobiles d'urgence et de réanimation (SMUR), SAMU, centres hospitaliers.",
        "typicalDay": [
            {"time": "07:30", "activity": "Prise de service, vérification des niveaux d'oxygène, du défibrillateur et de la propreté de l'ambulance"},
            {"time": "08:15", "activity": "Départ en mission d'urgence déclenchée par le SAMU 15 : malaise cardiaque à domicile"},
            {"time": "09:00", "activity": "Prise en charge du patient, oxygénation, monitoring et transport sécurisé vers le déchocage du CHU"},
            {"time": "11:30", "activity": "Transport programmé couché d'un patient dialysé vers son centre de néphrologie"},
            {"time": "15:00", "activity": "Intervention SMUR avec médecin urgentiste et infirmier sur un accident de la route"}
        ],
        "skills": {
            "technical": [
                "Gestes d'urgence médicale et réanimation cardio-pulmonaire avec DAE",
                "Conduite rapide en sécurité et maîtrise des règles de priorité routière d'urgence",
                "Maniement du matériel d'immobilisation de traumatologie (matelas coquille, plan dur)",
                "Normes d'hygiène et de désinfection des véhicules sanitaires (bio-nettoyage)",
                "Transmissions radiotéléphoniques d'urgence avec le SAMU"
            ],
            "human": [
                "Sang-froid exemplaire et résistance au stress en situation de crise",
                "Sens de l'écoute et psychologie pour apaiser un patient paniqué",
                "Bonne condition physique pour le brancardage et la manutention",
                "Esprit d'équipe avec le binôme ambulancier et les équipes médicales"
            ],
            "tools": [
                "Défibrillateur Automatisé Externe (DAE)",
                "Brancard auto-chargeur et chaise de transport pliable",
                "Bouteilles d'oxygène médical de transport et débitmètres",
                "Radio de communication et GPS médicalisé d'intervention"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Prérequis", "title": "Permis de conduire B valide (plus de 3 ans) et attestation préfectorale", "desc": "Casier judiciaire vierge et vaccins obligatoires."},
                {"step": "Formation en Institut (6 mois)", "title": "Institut de Formation d'Ambulanciers (IFA)", "desc": "Formation alternant cours théoriques (secourisme, hygiène, législation) et stages cliniques en SMUR, urgences et entreprise sanitaire."}
            ],
            "schools": [
                {"name": "Instituts de Formation d'Ambulanciers (IFA) en France (Croix-Rouge, Ordre de Malte, CHU)", "country": "France", "scope": "France"},
                {"name": "Centres de formation au secourisme et transport d'urgence — SAMU National du Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Diplôme d'État d'Ambulancier (DEA)", "AFGSU Niveau 2"]
        },
        "career": {
            "sectors": ["Urgences préhospitalières", "Transport sanitaire privé", "Hôpitaux et SMUR"],
            "employerTypes": ["Sociétés privées d'ambulances", "Centres hospitaliers publics (conducteurs SMUR)", "Organismes de rapatriement"],
            "evolution": "Ambulancier salarié ➔ Ambulancier chef d'équipe ➔ Régulateur en entreprise de transport sanitaire ➔ Créateur d'entreprise d'ambulances",
            "pros": "Métier d'action utile et solidaire, adrénaline des interventions d'urgence, autonomie sur la route, contact humain fort.",
            "cons": "Horaires décalés, travail de nuit, week-ends, manutention fréquente de charges lourdes (patients dans les escaliers)."
        },
        "salary": "🇫🇷 France : 1 700 - 2 500 € net/mois (avec primes de nuit et gardes) • 🇸🇳 Sénégal : 120 000 - 350 000 FCFA net/mois",
        "saviezVous": {
            "fait": "En intervention d'urgence, un bon ambulancier ne cherche pas simplement à rouler le plus vite possible : il pratique une 'conduite coulée' ultra-fluide pour éviter que les secousses n'aggravent l'hémorragie ou les lésions rachidiennes du patient à l'arrière !",
            "pourquoi": "Les accélérations et freinages brutaux perturbent gravement la pression artérielle d'un patient en état de choc."
        },
        "sources": [
            {"organization": "Studyrama", "title": "Fiche métier : Ambulancier", "url": "https://www.studyrama.com/formations/fiches-metiers/sante/ambulancier", "type": "metier"},
            {"organization": "Fédération Nationale des Ambulanciers Privés (FNAP)", "title": "Le rôle de l'ambulancier dans l'urgence", "type": "institutionnel"}
        ],
        "interests": ["urgences-secours", "soigner-aider", "proteger-defendre"],
        "relatedJobSlugs": ["assistant-regulation-medicale", "medecin-urgentiste", "infirmier-diplome-etat"]
    },

    # 23. ASSISTANT DE RÉGULATION MÉDICALE (ARM)
    {
        "id": "assistant-regulation-medicale",
        "slug": "assistant-regulation-medicale",
        "title": "Assistant / Assistante de Régulation Médicale (ARM)",
        "aliases": ["ARM", "Opérateur SAMU", "Permanencier d'aide médicale urgente"],
        "icon": "🎧",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": ["sante-soins-paramedical", "numerique-ia", "biologie-chimie"],
        "domain": "Urgences, Secours Médical & Régulation",
        "domainId": "urgences-secours",
        "subdomain": "Régulation médicale (SAMU)",
        "shortDescription": "Première voix entendue au téléphone lors d'un appel au SAMU (le 15), l'ARM décroche en quelques secondes, localise la détresse, évalue la gravité et oriente vers le médecin régulateur.",
        "longDescription": "L'Assistant de Régulation Médicale (ARM) est le pivot invisible de la chaîne des secours. Installé dans la salle de régulation du SAMU devant plusieurs écrans, il réceptionne les appels d'urgence vitale, géolocalise précisément l'appelant en détresse, pose les questions clés pour discerner l'urgence absolue de la simple consultation, transmet le dossier au médecin régulateur et déclenche les moyens de secours adaptés (SMUR, pompiers, ambulance). Il peut également guider au téléphone les gestes de survie (massage cardiaque) en attendant l'arrivée des secours.",
        "simpleDefinition": "Professionnel qui décroche les appels d'urgence au numéro 15 (SAMU), calme les appelants en détresse et envoie les ambulances.",
        "level": "Bac à Bac +1 (Diplôme d'ARM - Formation 1 an en Centre de Formation d'ARM)",
        "missions": [
            "Réceptionner les appels d'aide médicale urgente sans délai dans un calme absolu",
            "Localiser précisément l'adresse de l'événement et identifier l'identité et l'âge du patient",
            "Poser les questions protocolisées pour identifier immédiatement une détresse vitale (arrêt respiratoire, hémorragie, coma)",
            "Guider l'appelant dans les gestes qui sauvent (compressions thoraciques, position latérale de sécurité) en direct au téléphone",
            "Transmettre immédiatement le dossier numérique au médecin régulateur et dispatcher les moyens de secours ordonnés (SMUR, ambulance)"
        ],
        "workEnvironment": "Salle de régulation des urgences du SAMU (Centre 15 / Centre 112) en milieu hospitalier.",
        "typicalDay": [
            {"time": "07:00", "activity": "Prise de poste au centre SAMU, connexion au poste de télécommunication et revue des moyens mobiles disponibles"},
            {"time": "08:15", "activity": "Décroché d'un appel angoissé : guidage téléphonique d'un père pour pratiquer la réanimation sur son enfant noyé"},
            {"time": "09:30", "activity": "Coordination avec les pompiers pour l'envoi simultané d'un VSAV et d'une équipe SMUR sur un carambolage"},
            {"time": "12:00", "activity": "Gestion des appels de médecine générale et orientation vers les médecins régulateurs libéraux"},
            {"time": "15:00", "activity": "Débriefing psychologique d'équipe suite à un appel pour urgence pédiatrique complexe"}
        ],
        "skills": {
            "technical": [
                "Techniques d'écoute active et de questionnement ciblé d'urgence",
                "Géolocalisation informatique avancée et cartographie d'urgence (SIG)",
                "Protocoles de régulation médicale et critères de gravité vitale",
                "Guidage téléphonique des gestes de réanimation cardio-pulmonaire",
                "Utilisation des systèmes informatiques de gestion des appels d'urgence (SGAU)"
            ],
            "human": [
                "Maîtrise absolue de ses émotions face à la panique ou aux cris de l'appelant",
                "Capacité d'écoute et autorité calme pour obtenir les informations vitales",
                "Sens aigu des priorités et rapidité d'exécution",
                "Résistance au stress et solidarité d'équipe"
            ],
            "tools": [
                "Casque téléphonique professionnel avec double écoute",
                "Système informatique de gestion des appels d'urgence (logiciel SAMU)",
                "Cartographie numérique de géolocalisation des flottes ambulancières",
                "Bases de données d'adresses et de télé-défibrillation citoyenne"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Prérequis", "title": "Baccalauréat toutes séries", "desc": "Sélection sur dossier, tests psychotechniques et entretien oral."},
                {"step": "Formation certifiante (1 an)", "title": "Centres de Formation d'Assistants de Régulation Médicale (CFARM)", "desc": "10 mois alternant enseignements théoriques médicaux/téléphoniques et stages pratiques en SAMU, SMUR et pompiers."}
            ],
            "schools": [
                {"name": "Centres de Formation d'ARM (CFARM) agréés en France adossés aux CHU (Paris, Lyon, Nancy, Marseille)", "country": "France", "scope": "France"},
                {"name": "Centre de Régulation du SAMU National du Sénégal (Dakar)", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Diplôme d'Assistant de Régulation Médicale (Certifié niveau 4/5)", "AFGSU Niveau 2"]
        },
        "career": {
            "sectors": ["Urgences hospitalières", "Sécurité civile et secours publics", "Centres d'appels d'urgence"],
            "employerTypes": ["SAMU hospitaliers", "Services départementaux d'incendie et de secours (SDIS / 18-112)", "Plateformes communes de secours"],
            "evolution": "ARM titulaire ➔ ARM superviseur de salle ➔ Cadre d'encadrement en régulation médicale ➔ Formateur en CFARM",
            "pros": "Chaque appel décroché peut sauver une vie humaine, rôle fondamental de sentinelle de santé, solidarité d'équipe exemplaire.",
            "cons": "Charge émotionnelle très lourde (appels dramatiques en direct), travail 24h/24 en gardes de 12 heures, sédentarité sur écran."
        },
        "salary": "🇫🇷 France : 1 800 - 2 800 € net/mois selon ancienneté et primes de gardes • 🇸🇳 Sénégal : 150 000 - 380 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Lors d'un arrêt cardiaque à domicile, chaque minute perdue avant le début du massage réduit les chances de survie de 10%. Grâce au guidage téléphonique vocal de l'ARM qui rythme les compressions à la seconde ('1, 2, 3, 4'), le taux de survie est multiplié par trois !",
            "pourquoi": "L'ARM transforme l'appelant paniqué en premier maillon actif de la réanimation avant l'arrivée du SMUR."
        },
        "sources": [
            {"organization": "Studyrama", "title": "Fiche métier : Assistant de régulation médicale", "url": "https://www.studyrama.com/formations/fiches-metiers/sante/assistant-de-regulation-medicale", "type": "metier"},
            {"organization": "Association Française des Assistants de Régulation Médicale (AFARM)", "title": "Le métier d'ARM au SAMU", "type": "institutionnel"}
        ],
        "interests": ["urgences-secours", "soigner-aider", "technologie-code"],
        "relatedJobSlugs": ["ambulancier", "medecin-urgentiste", "secretaire-medical"]
    },

    # 24. BIOLOGISTE MÉDICAL
    {
        "id": "biologiste-medical",
        "slug": "biologiste-medical",
        "title": "Biologiste Médical / Directeur de Laboratoire de Biologie Médicale",
        "aliases": ["Médecin biologiste", "Pharmacien biologiste", "Directeur de laboratoire d'analyses médicales"],
        "icon": "🔬",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": ["sante-soins-paramedical", "biologie-chimie"],
        "domain": "Biologie Médicale & Diagnostics de Laboratoire",
        "domainId": "laboratoires-medicaux",
        "subdomain": "Biochimie clinique",
        "shortDescription": "Médecin ou pharmacien spécialisé, le biologiste médical valide et interprète les analyses biologiques indispensables au diagnostic, au dépistage et au suivi des traitements.",
        "longDescription": "Le biologiste médical dirige le laboratoire d'analyses de biologie médicale (LBM), en ville ou à l'hôpital. Docteur en médecine ou en pharmacie ayant réalisé un internat de 4 ans en biologie médicale, il est le garant de la fiabilité des examens de sang, d'urine et de tissus (hématologie, bactériologie, virologie, biochimie, génétique). Il valide médicalement les résultats, appelle les prescripteurs en cas d'anomalie critique vitale et participe à la décision thérapeutique.",
        "simpleDefinition": "Médecin ou pharmacien spécialiste qui dirige le laboratoire d'analyses, valide les prises de sang et explique les résultats aux docteurs.",
        "level": "Bac +9 à Bac +10 (DES de Biologie Médicale)",
        "missions": [
            "Superviser l'ensemble de la chaîne analytique du laboratoire dans le respect de la norme ISO 15189",
            "Valider biologiquement et médicalement les résultats d'analyses (hématologie, biochimie, immuno-sérologie)",
            "Alerter sans délai les cliniciens en cas de résultat vital critique (anémie sévère, troponine élevée, bactériémie)",
            "Conseiller les médecins prescripteurs sur le choix des examens pertinents et l'interprétation des profils complexes",
            "Piloter la démarche qualité, la métrologie des automates et le management des techniciens de laboratoire"
        ],
        "workEnvironment": "Laboratoires de biologie médicale privés (polyvalents ou spécialisés), laboratoires hospitaliers de CHU/CHR, centres de lutte contre le cancer.",
        "typicalDay": [
            {"time": "08:00", "activity": "Contrôle des calibrations et validation des contrôles de qualité internes sur les automates de biochimie"},
            {"time": "09:30", "activity": "Validation médicale des dossiers d'analyses et corrélation avec les renseignements cliniques"},
            {"time": "11:30", "activity": "Appel d'urgence à un médecin généraliste pour une hypokaliémie sévère imposant une hospitalisation immédiate"},
            {"time": "14:00", "activity": "Lecture au microscope de frottis sanguins suspects pour identification d'un profil leucémique"},
            {"time": "16:30", "activity": "Réunion du comité qualité et validation des procédures de traçabilité des réactifs chimiques"}
        ],
        "skills": {
            "technical": [
                "Physiopathologie humaine, biochimie clinique, hématologie et hémostase",
                "Microbiologie médicale, virologie et interprétation d'antibiogrammes",
                "Norme qualité ISO 15189 des laboratoires de biologie médicale",
                "Biologie moléculaire, PCR en temps réel et cytométrie en flux",
                "Gestion des alertes biologiques vitales et pharmacocinétique"
            ],
            "human": [
                "Sens aigu de la rigueur scientifique et de la responsabilité médicale",
                "Aisance relationnelle pour dialoguer avec les médecins prescripteurs",
                "Leadership managérial pour encadrer techniciens et secrétaires",
                "Capacité de décision rapide face à un résultat discordant"
            ],
            "tools": [
                "Automates d'hématologie et de biochimie haut débit (Roche, Sysmex)",
                "Microscope optique à immersion et fluorescence",
                "Spectromètre de masse MALDI-TOF pour identification bactérienne rapide",
                "Système informatique de laboratoire (SIL)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Premier et deuxième cycle (Bac +1 à +5/6)", "title": "Études de Médecine ou de Pharmacie", "desc": "Validation du deuxième cycle médical ou pharmaceutique."},
                {"step": "Internat spécialisé (Bac +6 à +10)", "title": "DES de Biologie Médicale (4 ans)", "desc": "Internat commun aux médecins et pharmaciens en CHU couvrant biochimie, hématologie, microbiologie, immunologie et génétique."}
            ],
            "schools": [
                {"name": "FMPOS UCAD Dakar (Départements de Médecine et de Pharmacie / Institut Pasteur de Dakar)", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Facultés de médecine et de pharmacie des universités françaises", "country": "France", "scope": "France"}
            ],
            "certifications": ["DES de Biologie Médicale", "Thèse de Docteur en Médecine ou Docteur en Pharmacie", "Ordre des Médecins ou Ordre des Pharmaciens"]
        },
        "career": {
            "sectors": ["Biologie médicale de ville", "Biologie hospitalo-universitaire", "Recherche diagnostique et biotechnologies"],
            "employerTypes": ["Groupes de laboratoires privés (LBM)", "Centres Hospitaliers Universitaires", "Instituts de recherche médicale (Institut Pasteur, Inserm)"],
            "evolution": "Biologiste médical salarié ➔ Biologiste associé co-gérant de laboratoire ➔ Chef de pôle de biologie hospitalier ➔ Professeur des universités (PUPH)",
            "pros": "Métier intellectuellement stimulant à la pointe des technologies de santé, rôle décisif dans 70% des diagnostics médicaux, horaires plus réguliers que la clinique.",
            "cons": "Forte pression réglementaire et administrative liée aux accréditations COFRAC / ISO, astreintes de permanence des analyses hospitalières."
        },
        "salary": "🇫🇷 France : 5 000 - 12 000 € net/mois selon association ou statut hospitalier • 🇸🇳 Sénégal : 500 000 - 2 200 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Près de 70% de l'ensemble des décisions médicales prises par les médecins (prescriptions, opérations, hospitalisations) reposent directement sur les résultats d'analyses validés par un biologiste médical !",
            "pourquoi": "L'examen clinique seul ne permet pas d'observer les cellules sanguines, les virus ou les marqueurs biochimiques invisibles à l'œil nu."
        },
        "sources": [
            {"organization": "Studyrama", "title": "Fiche métier : Biologiste médical", "url": "https://www.studyrama.com/formations/fiches-metiers/sante/biologiste-medical", "type": "metier"},
            {"organization": "Ordre National des Pharmaciens & Ordre des Médecins", "title": "L'exercice de la biologie médicale", "type": "institutionnel"}
        ],
        "interests": ["experiences-laboratoire", "comprendre-corps-humain", "soigner-aider"],
        "relatedJobSlugs": ["technicien-analyses-biomedicales", "pharmacien-officine", "microbiologiste", "medecin-generaliste"]
    },

    # 25. TECHNICIEN DE LABORATOIRE MÉDICAL
    {
        "id": "technicien-analyses-biomedicales",
        "slug": "technicien-analyses-biomedicales",
        "title": "Technicien / Technicienne de Laboratoire Médical",
        "aliases": ["Technicien d'analyses biomédicales", "Technicienne de laboratoire d'analyses médicales", "Technicien LBM"],
        "icon": "🧫",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": ["sante-soins-paramedical", "biologie-chimie"],
        "domain": "Biologie Médicale & Diagnostics de Laboratoire",
        "domainId": "laboratoires-medicaux",
        "subdomain": "Hématologie & Hémostase",
        "shortDescription": "Sous la responsabilité du biologiste médical, il manipule le sang, les cellules et les tissus, conduit les automates d'analyses et prépare les résultats diagnostiques.",
        "longDescription": "Le technicien de laboratoire de biologie médicale (TLM) réalise techniquement les examens prescrits par les médecins. Dans le respect scrupuleux des normes d'hygiène et de sécurité biologique, il réceptionne les tubes, calibre les automates d'analyse, prépare les lames de microscopie, isole les bactéries sur milieux de culture, réalise les antibiogrammes et signale toute anomalie technique au biologiste médical. Il peut également effectuer des prélèvements sanguins s'il est titulaire du certificat de capacité.",
        "simpleDefinition": "Professionnel de santé en blouse blanche qui analyse les prises de sang et les prélèvements sur des machines perfectionnées pour trouver les maladies.",
        "level": "Bac +3 (BUT Génie Biologique / BTS Analyses de Biologie Médicale - Grade Licence)",
        "missions": [
            "Réceptionner, enregistrer et vérifier la conformité des échantillons biologiques (sang, urine, LCR)",
            "Piloter et assurer la maintenance quotidienne des automates d'analyses de biochimie et d'hématologie",
            "Mettre en culture les prélèvements bactériologiques sur gélose et identifier les germes pathogènes",
            "Réaliser des frottis sanguins, des colorations de Gram et observer les cellules au microscope",
            "Effectuer les contrôles de qualité quotidiens et alerter le biologiste sur les valeurs critiques"
        ],
        "workEnvironment": "Laboratoires de biologie médicale privés (ville), laboratoires hospitaliers d'urgence, centres de transfusion sanguine (EFS), Institut Pasteur.",
        "typicalDay": [
            {"time": "07:30", "activity": "Prélèvements sanguins au centre de prélèvement du laboratoire pour les patients à jeun"},
            {"time": "08:30", "activity": "Chargement des portoirs de tubes sur la chaîne automatisée d'immuno-analyse"},
            {"time": "10:30", "activity": "Ensemencement manuel d'urines et de prélèvements de gorge sous hotte à flux laminaire"},
            {"time": "13:30", "activity": "Coloration d'un frottis sanguin et comptage de la formule leucocytaire au microscope"},
            {"time": "15:30", "activity": "Archivage stérile des sérothèques et décontamination des plans de travail"}
        ],
        "skills": {
            "technical": [
                "Techniques d'analyses biochimiques, hématologiques et bactériologiques",
                "Manipulation sécurisée sous hotte de sécurité microbiologique (PSM)",
                "Contrôle de qualité analytique et métrologie des analyseurs",
                "Techniques de prélèvement sanguin veineux (prise de sang)",
                "Normes d'hygiène hospitalière et élimination des déchets DASRI"
            ],
            "human": [
                "Minutie et rigueur méthodologique sans faille",
                "Capacité de concentration soutenue sur des séries d'échantillons",
                "Sens du travail en équipe sous la conduite du biologiste",
                "Discrétion et respect strict du secret médical des patients"
            ],
            "tools": [
                "Automates d'hématologie et de coagulation",
                "Microscope optique binoculaire à haute résolution",
                "Centrifugeuses de paillasse et bains-marie",
                "Poste de Sécurité Microbiologique (PSM)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Bac STL (Sciences et Technologies de Laboratoire) ou Bac général scientifique", "desc": "Bases solides en biochimie et biologie."},
                {"step": "Formation supérieure (Bac +3)", "title": "BUT Génie Biologique parcours BMB ou BTS ABM", "desc": "3 années de formation technique intensive avec nombreux stages cliniques en laboratoire hospitalier et privé."}
            ],
            "schools": [
                {"name": "ENDSS — Section Techniciens Supérieurs de Laboratoire — Dakar", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "IUT et lycées techniques préparant au BTS ABM ou BUT Génie Biologique en France", "country": "France", "scope": "France"}
            ],
            "certifications": ["BTS Analyses de Biologie Médicale (ABM)", "BUT Génie Biologique BMB", "Certificat de Capacité de Prélèvements Sanguins"]
        },
        "career": {
            "sectors": ["Biologie médicale privée", "Laboratoires hospitaliers", "Établissements de transfusion sanguine (EFS)"],
            "employerTypes": ["Laboratoires d'analyses de ville", "Centres hospitaliers (CHU)", "Instituts de recherche biologique (Institut Pasteur)"],
            "evolution": "Technicien de laboratoire ➔ Technicien référent qualité métrologie ➔ Cadre médico-technique de laboratoire",
            "pros": "Métier scientifique concret au cœur de la médecine diagnostique, environnement technologique de pointe, forte sécurité de l'emploi.",
            "cons": "Horaires postés en milieu hospitalier (gardes de nuit et week-end), travail répétitif lors des grandes séries d'automates."
        },
        "salary": "🇫🇷 France : 1 800 - 2 600 € net/mois • 🇸🇳 Sénégal : 150 000 - 380 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Pour pouvoir réaliser des prises de sang au laboratoire ou à domicile, le technicien doit obligatoirement réussir une épreuve pratique officielle devant un jury hospitalier comportant au moins 40 ponctions veineuses parfaites !",
            "pourquoi": "Cette réglementation stricte garantit un geste sûr et sans douleur pour le patient."
        },
        "sources": [
            {"organization": "Studyrama", "title": "Fiche métier : Technicien d'analyses biomédicales", "url": "https://www.studyrama.com/formations/fiches-metiers/sante/technicien-d-analyses-biomedicales", "type": "metier"},
            {"organization": "Ministère de la Santé", "title": "Conditions d'exercice des techniciens de laboratoire médical", "type": "institutionnel"}
        ],
        "interests": ["experiences-laboratoire", "observer-microscope", "soigner-aider"],
        "relatedJobSlugs": ["biologiste-medical", "technicien-laboratoire", "microbiologiste", "technicien-biologiste"]
    },

    # 26. PHARMACIEN D'OFFICINE
    {
        "id": "pharmacien-officine",
        "slug": "pharmacien-officine",
        "title": "Pharmacien / Pharmacienne d'Officine",
        "aliases": ["Pharmacien de ville", "Docteur en pharmacie", "Apothicaire moderne"],
        "icon": "💊",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": ["sante-soins-paramedical", "biologie-chimie", "commerce-marketing"],
        "domain": "Pharmacie Clinique, Officine & Distribution",
        "domainId": "pharmacie",
        "subdomain": "Pharmacie d'officine",
        "shortDescription": "Expert du médicament et soignant de proximité accessible sans rendez-vous, le pharmacien délivre les ordonnances, sécurise les posologies, vaccine et conseille les patients.",
        "longDescription": "Le pharmacien d'officine est le spécialiste incontournable des médicaments, des dispositifs médicaux et de la pharmacovigilance. En officine, il analyse chaque ordonnance pour éliminer les contre-indications, incompatibilités ou surdosages mortels. Désormais acteur de premier recours, il réalise des dépistages (angines, Covid), vaccine, conduit des bilans de médication pour les personnes âgées polymédiquées et prodigue des conseils d'automédication éclairés.",
        "simpleDefinition": "Docteur en pharmacie qui délivre les médicaments en pharmacie, vérifie que les ordonnances sont sans danger et donne des conseils de santé.",
        "level": "Bac +6 (Diplôme d'État de Docteur en Pharmacie)",
        "missions": [
            "Analyser méthodiquement les ordonnances médicales, contrôler les posologies et interactions médicamenteuses",
            "Délivrer les médicaments prescrits en expliquant clairement les modalités de prise et effets indésirables",
            "Administrer les vaccins (grippe, rappels) et réaliser les tests rapides d'orientation diagnostique (TROD)",
            "Conseiller les patients en automédication pour les maux du quotidien (douleurs, troubles digestifs, dermatologie)",
            "Gérer l'officine (gestion des stocks, management de l'équipe de préparateurs, respect de la chaîne du froid)"
        ],
        "workEnvironment": "Pharmacies d'officine de quartier, pharmacies de centre commercial, officines rurales de proximité.",
        "typicalDay": [
            {"time": "08:30", "activity": "Ouverture de la pharmacie, contrôle des températures des réfrigérateurs à vaccins"},
            {"time": "09:30", "activity": "Délivrance d'une ordonnance complexe de chimiothérapie orale avec entretien pharmaceutique personnalisé"},
            {"time": "11:15", "activity": "Appel à un médecin pour signaler une interaction dangereuse entre deux molécules prescrites et proposition d'alternative"},
            {"time": "14:30", "activity": "Séance de vaccination antigrippale dans l'espace de confidentialité de l'officine"},
            {"time": "17:00", "activity": "Conseil au comptoir pour une dermatite atopique d'un nourrisson et dispensation de soins dermo-cosmétiques"}
        ],
        "skills": {
            "technical": [
                "Pharmacologie clinique, pharmacocinétique et toxicologie approfondie",
                "Chimie thérapeutique et mécanismes d'action moléculaire",
                "Législation des substances vénéneuses, stupéfiants et règles de délivrance",
                "Techniques vaccinales et gestes de premiers secours",
                "Gestion d'entreprise officinale et législation pharmaceutique"
            ],
            "human": [
                "Écoute attentive, sens de l'accueil et diplomatie",
                "Pédagogie pour vulgariser les modes d'action des traitements",
                "Vigilance intellectuelle constante lors de la validation des lignes d'ordonnance",
                "Sens des responsabilités et éthique déontologique stricte"
            ],
            "tools": [
                "Logiciel de gestion d'officine avec base de données médicamenteuse intégrée (Vidal, Claude Bernard)",
                "Frigo médicalisé sécurisé avec enregistreur de température",
                "Espace de confidentialité conforme aux normes de vaccination",
                "Matériel de tests de dépistage rapide (TROD)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Bac scientifique général ou S", "desc": "Très bonnes bases en chimie et biologie."},
                {"step": "Premier cycle (Bac +1 à +3)", "title": "PASS/L.AS puis études pharmaceutiques", "desc": "Chimie organique, botanique, biochimie, pharmacologie."},
                {"step": "Deuxième & Troisième cycle (Bac +4 à +6)", "title": "Filière officine et stage de 6 mois", "desc": "Soutenance de la thèse d'exercice de Docteur en Pharmacie."}
            ],
            "schools": [
                {"name": "FMPOS — UCAD Dakar (Département de Pharmacie)", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Facultés de pharmacie des universités françaises (Paris Cité, Châtenay-Malabry, Lyon, Montpellier)", "country": "France", "scope": "France"}
            ],
            "certifications": ["Diplôme d'État de Docteur en Pharmacie", "Inscription obligatoire à l'Ordre National des Pharmaciens"]
        },
        "career": {
            "sectors": ["Pharmacie d'officine", "Distribution pharmaceutique (grossistes-répartiteurs)", "Santé publique"],
            "employerTypes": ["Pharmacies de ville indépendantes ou associées", "Réseaux d'officines", "Agences de sécurité du médicament (ANSM, ARP Sénégal)"],
            "evolution": "Pharmacien adjoint salarié ➔ Pharmacien titulaire propriétaire de son officine ➔ Pharmacien conseil ➔ Maître de stage",
            "pros": "Acteur de santé le plus accessible sans rendez-vous, confiance immense de la population, opportunité entrepreneuriale de posséder son entreprise.",
            "cons": "Horaires d'ouverture étendus (gardes de nuit et dimanches), lourdeur de la gestion des stocks et de la paperasserie administrative de tiers payant."
        },
        "salary": "🇫🇷 France : 2 800 - 4 500 € net/mois pour un adjoint salarié (5 000 à 12 000 € net/mois pour un titulaire installé) • 🇸🇳 Sénégal : 350 000 - 1 800 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Le pharmacien a l'obligation légale et déontologique de refuser la délivrance d'un médicament s'il estime que la prescription médicale met en jeu la vie ou la santé du patient !",
            "pourquoi": "Sa signature au bas de la délivrance engage sa pleine et entière responsabilité civile et pénale aux côtés du médecin."
        },
        "sources": [
            {"organization": "Studyrama", "title": "Fiche métier : Pharmacien d'officine", "url": "https://www.studyrama.com/formations/fiches-metiers/sante/pharmacien-d-officine", "type": "metier"},
            {"organization": "Ordre National des Pharmaciens", "title": "La profession de pharmacien d'officine", "type": "institutionnel"}
        ],
        "interests": ["soigner-aider", "experiences-laboratoire", "comprendre-corps-humain"],
        "relatedJobSlugs": ["preparateur-pharmacie", "biologiste-medical", "medecin-generaliste"]
    },

    # 27. PRÉPARATEUR EN PHARMACIE
    {
        "id": "preparateur-pharmacie",
        "slug": "preparateur-pharmacie",
        "title": "Préparateur / Préparatrice en Pharmacie",
        "aliases": ["Technicien en pharmacie", "Préparateur hospitalier", "Préparateur en pharmacie d'officine"],
        "icon": "💊",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": ["sante-soins-paramedical", "biologie-chimie"],
        "domain": "Pharmacie Clinique, Officine & Distribution",
        "domainId": "pharmacie",
        "subdomain": "Préparation magistrale",
        "shortDescription": "Sous le contrôle effectif du pharmacien, le préparateur délivre les médicaments, réalise les préparations magistrales au préparatoire et gère les approvisionnements.",
        "longDescription": "Le préparateur en pharmacie seconde le pharmacien dans toutes les tâches quotidiennes. Titulaire d'un diplôme professionnel (DEUST de préparateur-technicien en pharmacie), il accueille les clients, délivre les ordonnances après vérification des posologies, réalise au laboratoire les préparations de crèmes, gélules et pommades prescrites sur mesure, gère le stock et réceptionne les commandes des grossistes.",
        "simpleDefinition": "Professionnel qui travaille en pharmacie au comptoir pour donner les médicaments et au laboratoire pour fabriquer des crèmes et gélules.",
        "level": "Bac +2 (DEUST Préparateur-Technicien en Pharmacie)",
        "missions": [
            "Accueillir les patients et délivrer les médicaments prescrits sous la surveillance du pharmacien",
            "Expliquer les posologies et s'assurer de la bonne compréhension du traitement par le patient",
            "Réaliser au préparatoire les préparations magistrales et officinales (pommades, gélules, solutions buvables)",
            "Réceptionner les livraisons quotidiennes des grossistes-répartiteurs et ranger les médicaments",
            "Contrôler les dates de péremption et veiller au respect de la chaîne du froid des produits biologiques"
        ],
        "workEnvironment": "Pharmacies d'officine de ville, pharmacies à usage intérieur (PUI) des hôpitaux et cliniques.",
        "typicalDay": [
            {"time": "08:30", "activity": "Réception des bacs de médicaments livrés par le répartiteur et vérification du bon de livraison"},
            {"time": "09:30", "activity": "Délivrance d'ordonnances au comptoir et conseils sur la prise des médicaments"},
            {"time": "11:30", "activity": "Au préparatoire : pesée précise des principes actifs et confection de 60 gélules pédiatriques dosées sur mesure"},
            {"time": "14:30", "activity": "Conseil en parapharmacie (gammes solaires, compléments alimentaires)"},
            {"time": "17:00", "activity": "Inventaire tournant des antibiotiques et réassort des tiroirs de dispensation"}
        ],
        "skills": {
            "technical": [
                "Pharmacologie de base, galénique et techniques de préparation magistrale",
                "Calculs de doses, pesées de précision et conversions d'unités",
                "Reconnaissance des matières premières et excipients",
                "Législation de la délivrance et gestion informatisée des stocks",
                "Bonnes Pratiques de Préparation (BPP)"
            ],
            "human": [
                "Sens de l'accueil, courtoisie et discrétion",
                "Rigueur et concentration méticuleuse au préparatoire",
                "Aptitude au travail en équipe sous la responsabilité du pharmacien",
                "Sens de l'organisation et mémoire des emplacements de produits"
            ],
            "tools": [
                "Balance électronique de précision au milligramme",
                "Gélulier manuel pour confection de gélules",
                "Mortier et pilon pour trituration des poudres",
                "Système informatique de gestion d'officine (scanners de boîtes Datamatrix)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Baccalauréat général, STL ou ST2S", "desc": "Bases en chimie et calculs numériques."},
                {"step": "Formation en alternance (Bac +2)", "title": "DEUST Préparateur-Technicien en Pharmacie (2 ans)", "desc": "Formation universitaire en contrat d'apprentissage associant cours à l'université et exercice en officine."}
            ],
            "schools": [
                {"name": "Centres de formation et facultés de pharmacie proposant le DEUST en France", "country": "France", "scope": "France"},
                {"name": "Instituts de formation professionnelle de préparateurs en pharmacie — Dakar", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["DEUST Préparateur-Technicien en Pharmacie", "Diplôme de Préparateur en Pharmacie Hospitalière (DPPH) pour l'hôpital"]
        },
        "career": {
            "sectors": ["Pharmacie d'officine", "Pharmacie hospitalière (PUI)", "Industrie pharmaceutique"],
            "employerTypes": ["Pharmacies de ville", "Centres hospitaliers et cliniques", "Laboratoires cosmétiques et galéniques"],
            "evolution": "Préparateur en officine ➔ Spécialisation en pharmacie hospitalière (DPPH) ➔ Préparateur référent en chimiothérapie ou stérilisation",
            "pros": "Contact humain constant sans la charge managériale et financière du titulaire, sécurité de l'emploi forte, horaires fixes de jour.",
            "cons": "Position debout quasi permanente derrière le comptoir, manipulation de produits chimiques nécessitant des protections."
        },
        "salary": "🇫🇷 France : 1 650 - 2 500 € net/mois selon coefficient conventionnel • 🇸🇳 Sénégal : 120 000 - 320 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Lorsqu'un médicament industriel n'existe pas au bon dosage pour un enfant prématuré (par exemple un comprimé adulte 10 fois trop fort), c'est le préparateur qui confectionne manuellement au préparatoire des mini-gélules au microgramme près sur ordonnance du médecin !",
            "pourquoi": "Cette activité de préparation magistrale sur mesure comble les vides de la production industrielle de masse."
        },
        "sources": [
            {"organization": "Studyrama", "title": "Fiche métier : Préparateur en pharmacie", "url": "https://www.studyrama.com/formations/fiches-metiers/sante/preparateur-en-pharmacie", "type": "metier"},
            {"organization": "Association Nationale des Préparateurs en Pharmacie d'Officine (ANPPO)", "title": "Le statut du préparateur", "type": "institutionnel"}
        ],
        "interests": ["experiences-laboratoire", "soigner-aider", "construire-fabriquer"],
        "relatedJobSlugs": ["pharmacien-officine", "technicien-galeniste", "technicien-analyses-biomedicales"]
    },

    # 28. DIRECTEUR D'ÉTABLISSEMENT DE SANTÉ
    {
        "id": "directeur-hopital",
        "slug": "directeur-hopital",
        "title": "Directeur / Directrice d'Établissement de Santé (Directeur d'Hôpital)",
        "aliases": ["Directeur d'hôpital", "Directeur de clinique", "Manager d'établissement de santé"],
        "icon": "🏥",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": ["sante-soins-paramedical", "droit-management", "finance-fintech"],
        "domain": "Direction, Encadrement & Administration de Santé",
        "domainId": "management-administration-sante",
        "subdomain": "Direction d'établissement",
        "shortDescription": "Pilote stratégique, financier et humain d'une structure hospitalière, le directeur d'hôpital garantit la continuité des soins, l'équilibre budgétaire et le management des équipes.",
        "longDescription": "Le directeur d'hôpital dirige une véritable 'ville dans la ville'. À la tête d'un établissement public de santé ou d'une clinique privée, il arbitre les investissements médicaux majeurs (achats de scanners, rénovation de blocs), gère un budget de plusieurs dizaines ou centaines de millions d'euros, manage des milliers d'agents (soignants, médecins, administratifs, techniciens) et assure le dialogue avec les autorités de tutelle (Ministère de la Santé, Agences Régionales de Santé).",
        "simpleDefinition": "Grand dirigeant qui gère l'hôpital comme une entreprise : il décide des budgets, recrute le personnel et achète les équipements médicaux.",
        "level": "Bac +5 à Bac +7 (École des Hautes Études en Santé Publique - EHESP / Master Management de la Santé)",
        "missions": [
            "Définir le projet d'établissement et la stratégie médicale en concertation avec la communauté médicale d'établissement (CME)",
            "Gérer l'équilibre financier, élaborer l'état prévisionnel des recettes et des dépenses (EPRD) et négocier les financements",
            "Superviser les ressources humaines (recrutements, carrières, climat social, négociations syndicales)",
            "Garantir la sécurité des soins, la gestion des crises sanitaires et la conformité aux normes de qualité (certification HAS)",
            "Piloter les grands projets d'infrastructures hospitalières et de modernisation numérique"
        ],
        "workEnvironment": "Direction générale de centres hospitaliers (CHU, CHR), cliniques privées, groupes mutualistes, agences de santé.",
        "typicalDay": [
            {"time": "08:30", "activity": "Comité de direction hebdomadaire avec le directeur financier, le directeur des soins et le président de la CME"},
            {"time": "10:30", "activity": "Négociation avec l'Agence Régionale de Santé sur l'autorisation d'installation d'un nouvel équipement IRM"},
            {"time": "12:30", "activity": "Déjeuner de travail avec les chefs de pôles médicaux sur le recrutement de praticiens hospitaliers"},
            {"time": "14:30", "activity": "Visite du chantier d'extension des urgences avec les ingénieurs travaux et les architectes"},
            {"time": "17:00", "activity": "Réunion de dialogue social avec les représentants du personnel soignant"}
        ],
        "skills": {
            "technical": [
                "Finances hospitalières (tarification à l'activité, EPRD) et comptabilité publique",
                "Droit de la santé, responsabilité hospitalière et droit public hospitalier",
                "Management stratégique des organisations complexes",
                "Gestion de crise sanitaire et plans de secours hospitaliers (Plan Blanc)",
                "Conduite du dialogue social et négociation sociale"
            ],
            "human": [
                "Leadership rassembleur et autorité naturelle",
                "Grand sens de la diplomatie pour concilier impératifs médicaux et contraintes budgétaires",
                "Résistance au stress et capacité de décision en temps de crise",
                "Vision prospective de l'évolution du système de santé"
            ],
            "tools": [
                "Tableaux de bord financiers et de pilotage médico-économique",
                "Logiciels de gestion des ressources humaines hospitalières",
                "Plateformes institutionnelles de reporting de santé publique"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Diplôme Bac +5 préalable", "title": "Sciences Po, Master Droit Public, Master Économie/Gestion ou École de Commerce", "desc": "Solide socle en droit, économie et gestion publique."},
                {"step": "Concours national très sélectif", "title": "Concours de Directeur d'Hôpital (EHESP)", "desc": "Concours de haute fonction publique hospitalière."},
                {"step": "Formation à l'EHESP (2 ans)", "title": "École des Hautes Études en Santé Publique (Rennes)", "desc": "Formation rémunérée de 24 mois alternant enseignements théoriques de haut niveau et stages de direction en CHU."}
            ],
            "schools": [
                {"name": "École des Hautes Études en Santé Publique (EHESP) — Rennes (France)", "country": "France", "scope": "France"},
                {"name": "Institut de Santé et Développement (ISED) — UCAD Dakar / ENA Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Diplôme de Directeur d'Hôpital (EHESP)", "Haut fonctionnaire hospitalier"]
        },
        "career": {
            "sectors": ["Direction hospitalière publique", "Cliniques privées et ESPIC", "Ministères et institutions de santé"],
            "employerTypes": ["CHU et grands groupes hospitaliers", "Agences Régionales de Santé (ARS)", "Groupes privés de santé (Ramsay, Elsan, etc.)"],
            "evolution": "Directeur adjoint (Finances, RH ou Achats) ➔ Directeur général d'hôpital ➔ Directeur général de CHU ➔ Directeur d'Agence Régionale de Santé (ARS)",
            "pros": "Impact stratégique majeur sur la santé de toute une population régionale, gestion de projets de grande envergure, statut prestigieux de dirigeant.",
            "cons": "Forte pression politique et médiatique, arbitrages budgétaires parfois douloureux, disponibilité H24 lors des crises sanitaires."
        },
        "salary": "🇫🇷 France : 3 500 - 9 000 € net/mois selon catégorie et responsabilités • 🇸🇳 Sénégal : 500 000 - 2 500 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Un grand Centre Hospitalier Universitaire (CHU) emploie souvent plus de 10 000 collaborateurs et gère un budget annuel supérieur à 1 milliard d'euros, ce qui en fait le premier employeur et le plus gros acteur économique de sa région !",
            "pourquoi": "L'hôpital moderne regroupe une immense diversité de métiers : médecins, soignants, cuisiniers, informaticiens, ingénieurs et logisticiens."
        },
        "sources": [
            {"organization": "Studyrama", "title": "Fiche métier : Directeur d'hôpital", "url": "https://www.studyrama.com/formations/fiches-metiers/sante/directeur-d-hopital", "type": "metier"},
            {"organization": "École des Hautes Études en Santé Publique (EHESP)", "title": "Le corps des directeurs d'hôpital", "type": "institutionnel"}
        ],
        "interests": ["droit-management", "soigner-aider", "finance-fintech"],
        "relatedJobSlugs": ["cadre-sante", "secretaire-medical", "medecin-generaliste"]
    },

    # 29. CADRE DE SANTÉ
    {
        "id": "cadre-sante",
        "slug": "cadre-sante",
        "title": "Cadre de Santé / Surveillant(e) de Service Hospitalier",
        "aliases": ["Cadre soignant", "Surveillant général", "Manager de proximité de santé"],
        "icon": "📋",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": ["sante-soins-paramedical", "droit-management"],
        "domain": "Direction, Encadrement & Administration de Santé",
        "domainId": "management-administration-sante",
        "subdomain": "Coordination des soins (Cadres)",
        "shortDescription": "Pilier du management de proximité hospitalier, le cadre de santé anime et coordonne l'équipe soignante, organise les plannings et garantit la qualité et la sécurité des soins dans son unité.",
        "longDescription": "Ancien soignant (infirmier, kiné, manipulateur radio) ayant accédé aux fonctions de management après une formation spécialisée en Institut de Formation des Cadres de Santé (IFCS), le cadre de santé fait le pont indispensable entre la direction de l'hôpital et le chevet du malade. Il gère les plannings et les compétences de l'équipe paramédicale (infirmiers, aides-soignants), veille à la disponibilité des lits et du matériel, intègre les nouveaux professionnels et anime les projets de soins du service.",
        "simpleDefinition": "Ancien soignant d'expérience qui dirige et organise l'équipe d'infirmiers et d'aides-soignants dans un service d'hôpital.",
        "level": "Bac +4 à Bac +5 (Diplôme de Cadre de Santé / Master Management des Établissements de Santé)",
        "missions": [
            "Organiser et coordonner les activités de soins de l'unité en veillant à la continuité et à la sécurité 24h/24",
            "Manager l'équipe paramédicale : plannings de travail, congés, évaluations annuelles, intégration des recrues",
            "Assurer la gestion logistique du service : commandes de pharmacie, matériel médical, maintenance des chambres",
            "Mener des démarches d'amélioration continue de la qualité et de gestion des risques infectieux",
            "Favoriser la communication entre l'équipe soignante, les médecins du service, les familles et la direction"
        ],
        "workEnvironment": "Services d'hospitalisation de jour ou de semaine, blocs opératoires, réanimations, EHPAD, instituts de formation (IFSI).",
        "typicalDay": [
            {"time": "08:00", "activity": "Tour du service, point sur les effectifs du jour et réajustement des plannings en cas d'absence imprévue"},
            {"time": "09:30", "activity": "Réunion de coordination des lits (bed management) pour fluidifier les admissions venant des urgences"},
            {"time": "11:00", "activity": "Entretien d'évaluation professionnelle annuel d'une infirmière et définition de son plan de formation"},
            {"time": "14:00", "activity": "Audit qualité des dossiers de soins informatisés et contrôle de l'application des protocoles d'hygiène"},
            {"time": "16:30", "activity": "Accueil d'une famille pour désamorcer une incompréhension concernant les modalités de visite"}
        ],
        "skills": {
            "technical": [
                "Management d'équipe soignante et gestion des conflits",
                "Législation hospitalière du travail et gestion des plannings (règles de temps de travail)",
                "Démarche d'amélioration continue de la qualité et gestion des évènements indésirables",
                "Gestion logistique et budgétaire de service de soins",
                "Pédagogie d'encadrement des étudiants et nouveaux professionnels"
            ],
            "human": [
                "Sens de l'écoute, justice et équité managériale",
                "Aptitude à la médiation et au dialogue apaisé",
                "Réactivité et capacité d'arbitrage dans l'urgence des flux de patients",
                "Loyauté envers l'institution tout en restant proche des réalités du terrain"
            ],
            "tools": [
                "Logiciel de gestion du temps de travail et plannings hospitaliers",
                "Système informatisé de gestion des lits (Bed Management)",
                "Outils de déclaration des événements indésirables (fiches d'incident)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Diplôme paramédical d'origine", "title": "Diplôme d'État d'Infirmier, Manipulateur, Kiné, etc.", "desc": "Formation soignante socle."},
                {"step": "Exercice clinique (4 ans minimum)", "title": "Au moins 4 années d'exercice professionnel à temps plein", "desc": "Exigence légale pour se présenter au concours d'entrée."},
                {"step": "Institut des Cadres de Santé (1 an)", "title": "Formation en IFCS (Diplôme de Cadre de Santé + Master 2)", "desc": "10 mois de formation intensive au management, à la pédagogie et à la sociologie des organisations."}
            ],
            "schools": [
                {"name": "Instituts de Formation des Cadres de Santé (IFCS) en France adossés aux universités", "country": "France", "scope": "France"},
                {"name": "ENDSS — Section Cadres de Santé / Gestion des Services de Soins — Dakar", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Diplôme de Cadre de Santé", "Master en Management des Établissements de Santé"]
        },
        "career": {
            "sectors": ["Hôpital public et privé", "Instituts de formation de santé (IFSI)", "Secteur médico-social (EHPAD)"],
            "employerTypes": ["Centres hospitaliers généraux et universitaires", "Établissements de santé privés", "Centres de formation paramédicale"],
            "evolution": "Cadre de santé d'unité ➔ Cadre supérieur de santé (gestion d'un pôle complet) ➔ Directeur des soins (membre de l'équipe de direction)",
            "pros": "Poste clé qui donne le cap et le sens au travail d'équipe, transformation concrète des conditions de travail et des soins, horaires réguliers sans gardes de nuit habituelles.",
            "cons": "Position parfois inconfortable 'entre le marteau et l'enclume' (exigences budgétaires de la direction et revendications du personnel), gestion perpétuelle du manque d'effectifs."
        },
        "salary": "🇫🇷 France : 2 400 - 4 100 € net/mois selon échelon • 🇸🇳 Sénégal : 250 000 - 700 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Un cadre de santé qui gère l'animation pédagogique dans une école d'infirmiers (IFSI) est appelé 'Cadre de santé formateur' ; il conçoit les cours et accompagne les étudiants pendant 3 ans jusqu'à leur diplôme.",
            "pourquoi": "Le diplôme de cadre de santé offre une double qualification officielle : le management de service et la formation pédagogique."
        },
        "sources": [
            {"organization": "Studyrama", "title": "Fiche métier : Cadre de santé", "url": "https://www.studyrama.com/formations/fiches-metiers/sante/cadre-de-sante", "type": "metier"},
            {"organization": "Association Nationale des Cadres de Santé (ANCS)", "title": "Le référentiel de compétences du cadre de santé", "type": "institutionnel"}
        ],
        "interests": ["droit-management", "soigner-aider"],
        "relatedJobSlugs": ["directeur-hopital", "infirmier-diplome-etat", "infirmier-pratique-avancee"]
    },

    # 30. SECRÉTAIRE MÉDICAL(E)
    {
        "id": "secretaire-medical",
        "slug": "secretaire-medical",
        "title": "Secrétaire Médical(e) / Gestionnaire de Dossiers Patients",
        "aliases": ["Assistant médico-administratif", "Secrétaire médico-sociale", "Gestionnaire administratif de santé"],
        "icon": "📁",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": ["sante-soins-paramedical", "droit-management", "numerique-ia"],
        "domain": "Direction, Encadrement & Administration de Santé",
        "domainId": "management-administration-sante",
        "subdomain": "Secrétariat & Dossier patient",
        "shortDescription": "Premier visage et interlocuteur administratif du patient, le secrétaire médical gère l'accueil, les plannings de consultation, la frappe des comptes-rendus et le dossier médical.",
        "longDescription": "Le secrétaire médical maîtrise à la fois l'accueil relationnel et le vocabulaire médical pointu. En cabinet libéral, maison de santé ou service hospitalier, il filtre les appels, planifie les consultations et examens, accueille les patients avec bienveillance, retranscrit sous dictée vocale les comptes-rendus opératoires ou d'hospitalisation, gère les feuilles de soins et garantit la confidentialité absolue des données médicales.",
        "simpleDefinition": "Professionnel administratif qui accueille les patients, répond au téléphone pour donner les rendez-vous et rédige les courriers des médecins.",
        "level": "Bac à Bac +2 (Titre certifié de Secrétaire Médical / BTS SP3S)",
        "missions": [
            "Accueillir physiquement et téléphoniquement les patients, identifier l'urgence de leur demande et fixer les rendez-vous",
            "Créer, actualiser et classer les dossiers médicaux des patients dans le respect strict du secret médical",
            "Saisir et mettre en page les comptes-rendus de consultation, d'imagerie et les lettres de sortie médicale",
            "Gérer la facturation des actes, la télétransmission des feuilles de soins aux organismes de sécurité sociale et mutuelles",
            "Assurer la liaison administrative entre le médecin, les confrères correspondants, les laboratoires et les hôpitaux"
        ],
        "workEnvironment": "Cabinets médicaux de spécialistes ou généralistes, hôpitaux et cliniques, cabinets de radiologie, laboratoires d'analyses.",
        "typicalDay": [
            {"time": "08:15", "activity": "Ouverture du secrétariat, écoute des messages sur le répondeur et réorganisation de l'agenda du jour"},
            {"time": "09:00", "activity": "Accueil des premiers patients, vérification de la carte Vitale / d'assuré et encaissement des consultations"},
            {"time": "11:00", "activity": "Frappe et relecture d'un compte-rendu d'échographie cardiaque sous dictée numérique du cardiologue"},
            {"time": "14:00", "activity": "Gestion des dossiers d'admission hospitalière et transmission de pièces au service de facturation"},
            {"time": "16:30", "activity": "Réponse téléphonique aux questions des patients sur la préparation d'un examen médical de lendemain"}
        ],
        "skills": {
            "technical": [
                "Maîtrise approfondie de la terminologie médicale (anatomie, pathologies, actes médicaux)",
                "Dactylographie rapide et retranscription audio numérique",
                "Gestion informatisée des dossiers patients et logiciels métiers de santé",
                "Réglementation du secret professionnel médical (article 226-13 du Code pénal)",
                "Procédures de remboursement de l'Assurance Maladie et télétransmission"
            ],
            "human": [
                "Excellente élocution et accueil chaleureux au téléphone comme au comptoir",
                "Discrétion absolue et sens aigu de la confidentialité",
                "Patience et diplomatie face à des patients stressés par la maladie",
                "Organisation méthodique pour ne perdre aucun document médical"
            ],
            "tools": [
                "Logiciel de gestion de cabinet médical (Doctolib, Weda, Chorus)",
                "Pédalier de transcription et casque de dictée vocale",
                "Lecteur de carte d'assuré et terminal de paiement",
                "Plateforme de messagerie sécurisée de santé (MSSanté)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Baccalauréat général ou ST2S (Sciences et Technologies de la Santé et du Social)", "desc": "Très bon niveau en orthographe et intérêt pour le secteur de la santé."},
                {"step": "Formation certifiante (1 à 2 ans)", "title": "Titre professionnel de Secrétaire Médico-Social (SMS) ou BTS SP3S", "desc": "Apprentissage de la terminologie médicale, de la gestion documentaire et stages cliniques en milieu de soins."}
            ],
            "schools": [
                {"name": "Lycées préparant au BTS SP3S et centres de formation continue (Croix-Rouge, Greta) en France", "country": "France", "scope": "France"},
                {"name": "Écoles de secrétariat de santé et d'administration hospitalière — Dakar", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Titre Certifié de Secrétaire Médical(e)", "BTS Services et Prestations des Secteurs Sanitaire et Social (SP3S)"]
        },
        "career": {
            "sectors": ["Médecine libérale", "Établissements hospitaliers publics et privés", "Centres d'imagerie et laboratoires"],
            "employerTypes": ["Cabinets médicaux", "Hôpitaux et cliniques", "Centres de radiologie et d'oncologie"],
            "evolution": "Secrétaire médical(e) ➔ Secrétaire médical(e) principal(e) ➔ Coordinateur de secrétariat médical ➔ Assistant de direction hospitalière",
            "pros": "Contact humain permanent, rôle central d'organisation au sein de l'équipe soignante, horaires de bureau réguliers sans gardes de nuit.",
            "cons": "Flux téléphonique continu pouvant être stressant, gestion de patients parfois impatients ou agressifs face aux délais d'attente."
        },
        "salary": "🇫🇷 France : 1 650 - 2 300 € net/mois • 🇸🇳 Sénégal : 120 000 - 300 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Le secrétaire médical est astreint exactement au même secret médical absolu que le médecin : révéler à un tiers une information de santé apprise dans le cadre de ses fonctions est passible d'un an de prison et de 15 000 € d'amende !",
            "pourquoi": "La confiance du patient dans l'institution de santé repose sur la garantie que sa vie privée reste strictement protégée."
        },
        "sources": [
            {"organization": "Studyrama", "title": "Fiche métier : Secrétaire médicale", "url": "https://www.studyrama.com/formations/fiches-metiers/sante/secretaire-medicale", "type": "metier"},
            {"organization": "Ministère du Travail et de la Santé", "title": "Référentiel du Titre de Secrétaire Médico-Social", "type": "institutionnel"}
        ],
        "interests": ["droit-management", "soigner-aider", "lire-ecrire-litterature"],
        "relatedJobSlugs": ["assistant-dentaire", "assistant-regulation-medicale", "cadre-sante"]
    }
]

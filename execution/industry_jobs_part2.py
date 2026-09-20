#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
CATALOGUE DES MÉTIERS DE L'INDUSTRIE, TECHNOLOGIES & INGÉNIERIE - PARTIE 2 (18 MÉTIERS)
Bloc B : Maintenance, Électronique, CND, Qualité, Aérodynamique, Naval, Logistique, Achats, R&D, Industrie 4.0 & Direction
Sources documentaires : L'Étudiant & Onisep
Double ancrage : France (€ brut/an) & Sénégal / Afrique de l'Ouest (FCFA net/mois)
"""

INDUSTRY_JOBS_PART2 = [
    # -----------------------------------------------------------------------
    # 19. ÉLECTROMÉCANICIEN DE MAINTENANCE
    # -----------------------------------------------------------------------
    {
        "id": "electromecanicien",
        "slug": "electromecanicien",
        "title": "Électromécanicien de Maintenance",
        "aliases": ["Technicien électromécanicien", "Mécanicien-électricien industriel", "Electromechanical Technician"],
        "icon": "⚡",
        "familyId": "industrie-mecanique",
        "domain": "Maintenance Industrielle",
        "domainId": "maintenance-industrielle",
        "subdomain": "Maintenance électromécanique & Dépannage multi-technique",
        "shortDescription": "Diagnostique et répare les défaillances combinant mécanique, électricité, pneumatique et hydraulique sur les parcs machines industriels.",
        "longDescription": "L'électromécanicien est le dépanneur universel de l'usine. Véritable couteau suisse technique, il intervient dès qu'une machine s'arrête. Il ouvre les armoires électriques, mesure les tensions, remplace les moteurs grillés, change les roulements usés, répare les fuites d'huile sous pression sur les vérins hydrauliques et recâble les capteurs pour relancer la production sans délai.",
        "missions": [
            "Localiser l'origine d'une panne complexe en combinant diagnostic électrique, mécanique et pneumatique",
            "Remplacer ou réparer les moteurs électriques, réducteurs, pompes hydrauliques et électrovannes",
            "Raccorder et paramétrer les variateurs de vitesse et les capteurs industriels (cellules optiques, fins de course)",
            "Réaliser la maintenance préventive planifiée (graissage, contrôle des charbons, vérification des isolements)",
            "Renseigner les comptes-rendus d'intervention détaillés dans le logiciel de GMAO (Gestion de Maintenance Assistée par Ordinateur)"
        ],
        "workEnvironment": ["Ateliers de fabrication de tous secteurs", "Usines en fonctionnement continu avec travail posté ou astreintes", "Atelier de maintenance équipé de tours, perceuses et bancs de test"],
        "typicalDay": [
            {"time": "07:45", "desc": "Prise de consignes de l'équipe précédente et consultation des alertes sur le terminal GMAO"},
            {"time": "08:30", "desc": "Intervention d'urgence sur un pont roulant bloqué : remplacement d'un contacteur de puissance défaillant"},
            {"time": "11:30", "desc": "Révision périodique d'un groupe hydraulique : vidange d'huile, changement des filtres et mesure de pression"},
            {"time": "13:00", "desc": "Déjeuner avec les techniciens de maintenance"},
            {"time": "14:30", "desc": "Alignement laser d'un moteur électrique et de sa pompe centrifuge pour éliminer les vibrations"},
            {"time": "16:30", "desc": "Saisie des pièces de rechange consommées pour réapprovisionnement du magasin"}
        ],
        "companyRole": "Garant de la disponibilité opérationnelle immédiate des machines, évitant les arrêts de production très coûteux.",
        "skills": {
            "technical": ["Électrotechnique et habilitations électriques industrielles (B2V, BR, BC)", "Mécanique d'entretien, guidages et transmissions (courroies, chaînes, pignons)", "Hydraulique industrielle et circuits pneumatiques", "Lecture rapide de schémas électriques multifilaires et hydrauliques"],
            "human": ["Sang-froid et esprit d'investigation méthodique", "Polyvalence et débrouillardise technique", "Réactivité et disponibilité", "Sens aigu des règles de consignation et de sécurité"],
            "tools": ["Multimètre, pince ampèremétrique et mégohmmètre", "Mallette d'outillage électromécanique isolé 1000V", "Centrale d'alignement laser de poulies et d'arbres", "Logiciel GMAO (Carl Source, Coswin, SAP PM)"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac Pro", "title": "Bac Pro Maintenance des Systèmes de Production Connectés (MSPC) ou MELEC", "desc": "Apprentissage complet du câblage, du dépannage mécanique et de la sécurité électrique."},
                {"step": "Bac +2 (BTS)", "title": "BTS Maintenance des Systèmes (MS) option Systèmes de Production ou BTS Électrotechnique", "desc": "Expertise en diagnostic d'installations automatisées et amélioration de fiabilité."}
            ],
            "schools": [
                {"name": "Lycées professionnels industriels et CFA de France (BTS MS) — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Lycée Technique Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Institut Supérieur d'Enseignement Professionnel (ISEP Diamniadio / Thiès) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Habilitations électriques obligatoires (BR, B2V, BC)", "Certificats CACES nacelle / chariot élévateur"]
        },
        "career": {
            "sectors": ["Agroalimentaire", "Automobile", "Cimenteries & Mines", "Pharmacie", "Transports & Aéroports"],
            "employerTypes": ["Entreprises industrielles manufacturières", "Sociétés de prestations de maintenance multi-techniques (Spie, Dalkia)", "Exploitants d'infrastructures de transport"],
            "evolution": ["Chef d'équipe de maintenance", "Technicien méthodes de maintenance", "Responsable de maintenance industrielle"],
            "pros": ["Métier très dynamique et varié : aucune journée ne se ressemble", "Plein emploi garanti partout dans le monde", "Forte reconnaissance de la part des équipes d'atelier"],
            "cons": ["Astreintes de nuit et de week-end possibles", "Interventions en situation d'urgence sous la pression de la reprise de production"]
        },
        "gettingStarted": {
            "beginnerProject": "Démonter, nettoyer, remplacer les roulements et tester électriquement l'isolement d'un moteur asynchrone triphasé d'atelier.",
            "steps": [
                "Consigner électriquement le moteur et vérifier l'absence de tension (VAT)",
                "Démonter les flasques à l'extracteur et remplacer les roulements",
                "Mesurer la résistance des enroulements au multimètre et l'isolement à 500V"
            ],
            "freeResources": ["Guide de maintenance industrielle Schneider Electric", "Tutoriels électromécanique et schémas industriels"]
        },
        "aiImpact": {
            "summary": "L'IA assiste l'électromécanicien par le diagnostic guidé sur tablette et l'analyse prédictive des signatures de courant moteur pour détecter les défauts avant la panne.",
            "positiveImpacts": ["Localisation instantanée du composant défaillant sur schéma interactif", "Accès en temps réel à l'historique de toutes les pannes similaires de l'usine"],
            "risksAndChallenges": ["La manipulation physique des outils et le remplacement des pièces lourdes demeurent 100% humains"],
            "recommendedSkills": ["Utilisation de caméras acoustiques et de tablettes de diagnostic connectées"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'électromécanicien est la cheville ouvrière des usines de la presqu'île de Dakar et des régions (cimenteries de Thiès, usines d'engrais des ICS, moulins de Dakar, brasseries de la SOBOA), où la robustesse de la maintenance garantit la rentabilité des installations.",
            "westAfricaOpportunities": "Pénurie critique d'électromécaniciens qualifiés dans le secteur minier (or au Sénégal Oriental, bauxite en Guinée).",
            "localChampions": ["Industries Chimiques du Sénégal (ICS)", "SOCOCIM Industries", "Senelec", "Dakar Marine"]
        },
        "salary": {
            "france": {"entry": 24000, "mid": 31000, "expert": 42000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant & primes d'astreintes"},
            "senegal": {"entry": 250000, "mid": 480000, "expert": 850000, "currency": "FCFA", "period": "mois", "note": "Salaires nets constatés dans les cimenteries, mines et grandes usines"}
        },
        "connectedFamilies": ["energie-renouvelable", "mines-geosciences"],
        "relatedJobs": ["technicien-maintenance-industrielle", "automaticien-industriel", "technicien-electronicien-industriel"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Électromécanicien", "url": "https://www.letudiant.fr/metiers/secteur/industrie/electromecanicien.html", "type": "metier"},
            {"organization": "Onisep", "title": "Électromécanicien / Électromécanicienne", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/electromecanicien-electromecanicienne", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Dans l'industrie lourde (chimie, ciment, raffinage), une heure d'arrêt imprévu d'une ligne peut coûter entre 20 000 et 100 000 euros. La rapidité d'intervention de l'électromécanicien évite des pertes colossales.",
            "pourquoi": "En maîtrisant à la fois le courant électrique qui alimente et la mécanique qui tourne, il intervient sans attendre d'autres spécialistes.",
            "a_retenir": "L'électromécanicien est le médecin urgentiste du parc machine industriel."
        }
    },

    # -----------------------------------------------------------------------
    # 20. TECHNICIEN DE MAINTENANCE INDUSTRIELLE
    # -----------------------------------------------------------------------
    {
        "id": "technicien-maintenance-industrielle",
        "slug": "technicien-maintenance-industrielle",
        "title": "Technicien de Maintenance Industrielle",
        "aliases": ["Technicien de maintenance polyvalent", "Agent de maintenance industrielle", "Industrial Maintenance Technician"],
        "icon": "🔧",
        "familyId": "industrie-mecanique",
        "domain": "Maintenance Industrielle",
        "domainId": "maintenance-industrielle",
        "subdomain": "Maintenance préventive, corrective & prédictive",
        "shortDescription": "Entretient, dépanne, surveille et modernise les équipements industriels pour garantir leur fonctionnement optimal et prévenir les pannes.",
        "longDescription": "Le technicien de maintenance industrielle veille à la santé globale de l'outil de production. Il ne se contente pas de réparer les pannes urgentes : il met en place des plans de maintenance préventive rigoureux, analyse les données vibratoires et thermographiques pour prédire les défaillances, et propose des améliorations techniques pour fiabiliser les machines et prolonger leur durée de vie.",
        "missions": [
            "Assurer la maintenance préventive systématique et conditionnelle de l'ensemble du parc machines",
            "Intervenir en urgence lors des pannes pour remettre la ligne en service dans les meilleurs délais",
            "Analyser les causes racines des pannes récurrentes au moyen de méthodes structurées (Ishikawa, 5 Pourquoi)",
            "Participer à l'installation, au raccordement et à la mise en service de nouveaux équipements industriels",
            "Gérer le stock de pièces détachées stratégiques et commander les composants d'usure courante"
        ],
        "workEnvironment": ["Usines de fabrication, ateliers de conditionnement, entrepôts logistiques automatisés", "Port permanent des équipements de protection individuelle (chaussures de sécurité, lunettes, casque anti-bruit)"],
        "typicalDay": [
            {"time": "08:00", "desc": "Tournée d'inspection préventive : contrôle des températures de paliers à la caméra thermique"},
            {"time": "09:30", "desc": "Remplacement préventif des courroies crantées et des filtres à air sur une ligne de conditionnement"},
            {"time": "12:30", "desc": "Déjeuner avec les équipes d'atelier"},
            {"time": "14:00", "desc": "Dépannage d'urgence d'une encartonneuse automatique (remplacement d'un vérin pneumatique)"},
            {"time": "16:30", "desc": "Mise à jour des fiches d'historique de vie des machines sur le logiciel de GMAO"}
        ],
        "companyRole": "Pilier de la fiabilité opérationnelle, garantissant que l'outil de travail des ouvriers reste sûr, précis et performant.",
        "skills": {
            "technical": ["Diagnostic méthodique de défaillances multi-techniques", "Mécanique générale, pneumatique, hydraulique et électricité industrielle", "Analyse vibratoire et thermographie infrarouge de base", "Maîtrise des logiciels de GMAO"],
            "human": ["Rigueur et méthode d'analyse", "Sens aigu du service et de l'entraide d'équipe", "Autonomie et esprit d'initiative", "Prise en compte permanente de la sécurité des personnes"],
            "tools": ["Caméra thermique infrarouge (Fluke)", "Collecteur de données vibratoires", "Outillage à main d'atelier de maintenance", "Logiciel de GMAO (SAP PM, Maximo, Infor)"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac Pro", "title": "Bac Pro Maintenance des Systèmes de Production Connectés (MSPC)", "desc": "Bases pratiques de l'entretien et du dépannage industriel."},
                {"step": "Bac +2 (BTS / BUT)", "title": "BTS Maintenance des Systèmes (MS) ou BUT Génie Industriel et Maintenance (GIM)", "desc": "Stratégie de maintenance, fiabilisation et gestion des coûts de maintenance."}
            ],
            "schools": [
                {"name": "Lycées polyvalents et IUT préparant au BTS MS / BUT GIM — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Lycée Technique Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "ISEP de Thiès / Diamniadio — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certifications AFNOR en maintenance prédictive", "Habilitations électriques industrielles (B2V, BR, BC)"]
        },
        "career": {
            "sectors": ["Tous secteurs industriels (Agroalimentaire, Automobile, Métallurgie, Chimie, Pharmacie, Énergie)", "Logistique & E-commerce (entrepôts automatisés)"],
            "employerTypes": ["Usines de production de toutes tailles", "Sociétés de maintenance industrielle externalisée", "Grands centres de distribution logistique"],
            "evolution": ["Technicien méthodes de maintenance", "Responsable d'équipe de maintenance", "Responsable de maintenance de site"],
            "pros": ["Métier indispensable dans 100% des entreprises industrielles", "Emploi garanti tout au long de la carrière", "Grande diversité des interventions"],
            "cons": ["Interventions possibles dans le bruit, la chaleur ou des espaces exigus"]
        },
        "gettingStarted": {
            "beginnerProject": "Établir le plan de maintenance préventive d'un équipement mécanique réel (ex: tondeuse, compresseur d'air) avec périodicité, points de contrôle et pièces à remplacer.",
            "steps": [
                "Lister les organes d'usure (filtres, huile, courroies, bougies)",
                "Déterminer les fréquences recommandées par le constructeur",
                "Créer une fiche de suivi d'entretien périodique"
            ],
            "freeResources": ["Guide pratique de la maintenance industrielle (Dunod)", "Fiches de l'Association Française des Ingénieurs et Responsables de Maintenance (AFIM)"]
        },
        "aiImpact": {
            "summary": "L'IA transforme la maintenance préventive en maintenance prédictive (PdM) grâce à l'analyse en continu des capteurs IoT mesurant les vibrations et le frottement des roulements.",
            "positiveImpacts": ["Arrêt de la machine programmé avant la casse catastrophique", "Réduction des stocks de pièces détachées grâce au réapprovisionnement juste-à-temps"],
            "risksAndChallenges": ["Nécessité de savoir interpréter les algorithmes prédictifs pour éviter les faux positifs"],
            "recommendedSkills": ["Compréhension des capteurs IoT industriels et des plateformes de maintenance prédictive"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la maintenance industrielle est le premier gisement d'emplois techniques qualifiés, indispensable à la survie des équipements importés soumis à la chaleur, à la poussière sahélienne et à la corrosion marine sur la côte.",
            "westAfricaOpportunities": "Forte demande dans les usines d'égrenage de coton, les centrales solaires et thermiques, et les installations minières de toute la sous-région.",
            "localChampions": ["Compagnie Sucrière Sénégalaise (Richard-Toll)", "SOCOCIM", "Grands Moulins de Dakar", "Kirène"]
        },
        "salary": {
            "france": {"entry": 25000, "mid": 33000, "expert": 43000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant & Onisep"},
            "senegal": {"entry": 260000, "mid": 480000, "expert": 850000, "currency": "FCFA", "period": "mois", "note": "Salaires nets constatés en usines manufacturières et mines à Dakar/régions"}
        },
        "connectedFamilies": ["energie-renouvelable", "transports-logistique"],
        "relatedJobs": ["electromecanicien", "automaticien-industriel", "directeur-site-industriel"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Technicien de maintenance", "url": "https://www.letudiant.fr/metiers/secteur/industrie/technicien-en-maintenance.html", "type": "metier"},
            {"organization": "Onisep", "title": "Technicien / Technicienne de maintenance industrielle", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/technicien-technicienne-de-maintenance-industrielle", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Dans l'industrie moderne, la maintenance ne représente pas un coût mais une source de profit : chaque euro intelligemment investi dans la maintenance préventive fait économiser 4 euros de réparations d'urgence et de pertes d'exploitation.",
            "pourquoi": "Un roulement à 50 euros changé à temps évite la destruction d'un arbre moteur à 15 000 euros et trois jours d'arrêt de production.",
            "a_retenir": "Le technicien de maintenance préserve le capital productif de l'entreprise."
        }
    },

    # -----------------------------------------------------------------------
    # 21. TECHNICIEN ÉLECTRONICIEN INDUSTRIEL
    # -----------------------------------------------------------------------
    {
        "id": "technicien-electronicien-industriel",
        "slug": "technicien-electronicien-industriel",
        "title": "Technicien Électronicien / Systèmes Embarqués",
        "aliases": ["Électronicien industriel", "Technicien de tests électroniques", "Electronics Technician"],
        "icon": "⚡",
        "familyId": "industrie-mecanique",
        "domain": "Électrotechnique & Électronique",
        "domainId": "electrotechnique-electronique-indus",
        "subdomain": "Électronique industrielle & Cartes de commande",
        "shortDescription": "Conçoit, assemble, teste, diagnostique et dépanne les cartes électroniques, capteurs et systèmes embarqués pilotant les machines industrielles.",
        "longDescription": "Le technicien électronicien intervient sur les circuits imprimés et les composants qui commandent les équipements industriels. À l'aide d'oscilloscopes, de fers à souder de précision et de bancs de test automatisés, il traque les composants CMS grillés (microcontrôleurs, diodes, condensateurs), reprogramme les mémoires flash et fiabilise les cartes de puissance des variateurs et alimentations à découpage.",
        "missions": [
            "Lire les schémas électroniques de cartes de commande, d'alimentation et de traitement du signal",
            "Diagnostiquer les pannes au composant sur banc de test à l'oscilloscope et au multimètre de précision",
            "Dessouder et ressouder les composants montés en surface (CMS) à l'air chaud et au microscope optique",
            "Flasher et tester les firmwares de microcontrôleurs embarqués (ARM, PIC, STM32)",
            "Vérifier la compatibilité électromagnétique (CEM) et le blindage des cartes face aux parasites d'atelier"
        ],
        "workEnvironment": ["Laboratoires d'électronique industrielle", "Salles blanches et ateliers de réparation protégés contre les décharges électrostatiques (ESD)", "Bancs d'essais électroniques"],
        "typicalDay": [
            {"time": "08:30", "desc": "Prise en charge d'une carte de variateur de vitesse tombée en panne sur une extrudeuse plastique"},
            {"time": "09:30", "desc": "Mesure des signaux PWM à l'oscilloscope numérique pour vérifier le pilotage des transistors IGBT"},
            {"time": "12:30", "desc": "Déjeuner avec les techniciens d'automatisme"},
            {"time": "14:00", "desc": "Remplacement sous binoculaire d'un circuit intégré CMS défaillant avec station à air chaud"},
            {"time": "16:30", "desc": "Test en charge sur banc d'essai et validation du bon fonctionnement avant réinstallation"}
        ],
        "companyRole": "Chirurgien des circuits électroniques de l'usine, sauvant des cartes industrielles coûteuses souvent introuvables sur le marché.",
        "skills": {
            "technical": ["Électronique analogique, numérique et de puissance", "Mesure et diagnostic de signaux haute fréquence à l'oscilloscope", "Brasage et débrasage manuel de composants CMS de haute précision", "Conformité et protection contre les décharges électrostatiques (ESD)"],
            "human": ["Minutie chirurgicale et patience extrême", "Esprit d'analyse logique et de déduction", "Capacité à lire des datasheets techniques en anglais", "Rigueur de manipulation des composants fragiles"],
            "tools": ["Oscilloscope numérique 4 voies (Tektronix / Keysight)", "Station de soudage et dessoudage à air chaud régulée", "Microscope binoculaire de précision", "Générateur de fonctions et alimentations de laboratoire"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac Pro", "title": "Bac Pro Systèmes Numériques (SN) option Réseaux et Équipements Électroniques", "desc": "Bases de l'électronique et de l'informatique appliquée."},
                {"step": "Bac +2 (BTS / BUT)", "title": "BTS Systèmes Numériques option Électronique et Communications ou BUT GEII", "desc": "Conception de cartes, programmation microcontrôleur et électronique de puissance."}
            ],
            "schools": [
                {"name": "Lycées polyvalents préparant au BTS SN / IUT de France — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Supérieure Polytechnique de Dakar (ESP) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "CEDT Le G15 (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certifications internationales IPC (IPC-A-610 pour l'acceptabilité des assemblages électroniques)"]
        },
        "career": {
            "sectors": ["Aéronautique & Défense (avionique)", "Automobile & Véhicules électriques", "Électronique médicale", "Télécoms & IoT industriel", "Ferroviaire"],
            "employerTypes": ["Entreprises de fabrication électronique (EMS)", "Laboratoires de maintenance électronique spécialisée", "Grands constructeurs de matériel industriel"],
            "evolution": ["Spécialiste CEM et certification", "Projeteur en CAO électronique (routage de circuits imprimés Altium)", "Responsable de laboratoire électronique"],
            "pros": ["Métier passionnant pour les amateurs de technologie et de micro-composants", "Excellente insertion professionnelle dans l'aéronautique et le ferroviaire", "Environnement de travail propre et tempéré"],
            "cons": ["Travail prolongé sous microscope pouvant fatiguer la vue"]
        },
        "gettingStarted": {
            "beginnerProject": "Concevoir le schéma et router un petit circuit imprimé sous KiCad (ex: variateur de vitesse pour moteur continu), le faire fabriquer et souder les composants CMS.",
            "steps": [
                "Dessiner le schéma logique avec les symboles des composants",
                "Placer les composants et tracer les pistes de cuivre sous KiCad",
                "Souder les composants à la pâte à braser et vérifier les continuités"
            ],
            "freeResources": ["KiCad EDA Open Source", "Chaînes YouTube d'électronique (EEVblog, Jipihorn)", "Datasheets de composants Texas Instruments / STMicroelectronics"]
        },
        "aiImpact": {
            "summary": "L'IA accélère le routage automatique des pistes de circuits imprimés multicouches et l'inspection optique automatisée (AOI) pour détecter les micro-fissures de soudure.",
            "positiveImpacts": ["Routage assisté par IA respectant automatiquement les contraintes thermiques", "Diagnostic d'anomalies de signal à l'oscilloscope assisté par IA"],
            "risksAndChallenges": ["La dextérité de soudure manuelle sur composants ultra-miniatures reste une compétence d'expert"],
            "recommendedSkills": ["Programmation de microcontrôleurs embarqués avec frameworks IA (TinyML)"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la maintenance de cartes électroniques industrielles est une activité vitale et extrêmement rentable, évitant aux usines dakaroises de coûteuses importations de pièces détachées avec plusieurs semaines d'immobilisation douanière.",
            "westAfricaOpportunities": "Développement des laboratoires de rétro-ingénierie et de réparation de cartes de régulation pour les parcs solaires et les télécoms.",
            "localChampions": ["Sonatel (Orange Sénégal)", "Senelec", "CFPT Sénégal-Japon", "Ateliers d'électronique industrielle de Sandiara"]
        },
        "salary": {
            "france": {"entry": 24000, "mid": 32000, "expert": 42000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant & Onisep"},
            "senegal": {"entry": 250000, "mid": 480000, "expert": 850000, "currency": "FCFA", "period": "mois", "note": "Salaires nets dans les laboratoires de télécoms et maintenance électronique"}
        },
        "connectedFamilies": ["numerique-ia", "energie-renouvelable"],
        "relatedJobs": ["electromecanicien", "automaticien-industriel", "roboticien-industriel"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Technicien électronicien", "url": "https://www.letudiant.fr/metiers/secteur/industrie/electronicien.html", "type": "metier"},
            {"organization": "Onisep", "title": "Électronicien / Électronicienne", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/electronicien-electronicienne", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Un composant électronique moderne monté en surface (CMS boîtier 0201) mesure à peine 0,6 millimètre de long sur 0,3 millimètre de large, soit la taille d'un grain de sel.",
            "pourquoi": "Seuls des techniciens électroniciens entraînés, travaillant sous binoculaire avec des fers microscopiques, sont capables de souder ou remplacer ces puces manuellement.",
            "a_retenir": "L'électronicien manipule l'infiniment petit pour faire fonctionner les géants de l'industrie."
        }
    },

    # -----------------------------------------------------------------------
    # 22. TECHNICIEN CONTRÔLE NON DESTRUCTIF (CND)
    # -----------------------------------------------------------------------
    {
        "id": "technicien-controle-cnd",
        "slug": "technicien-controle-cnd",
        "title": "Technicien en Contrôle Non Destructif (CND)",
        "aliases": ["Contrôleur CND", "Technicien END (Essais Non Destructifs)", "NDT Inspector"],
        "icon": "🔬",
        "familyId": "industrie-mecanique",
        "domain": "Contrôle, Inspection & Métrologie",
        "domainId": "controle-inspection-metrologie",
        "subdomain": "Contrôle non destructif (Radiographie, Ultrasons, Ressuage)",
        "shortDescription": "Examine la santé interne des pièces métalliques, tuyauteries et soudures sans les altérer, grâce à la radiographie, aux ultrasons, au ressuage et à la magnétoscopie.",
        "longDescription": "Le technicien en contrôle non destructif (CND / END) est le radiologue des matériaux industriels. Sur un réacteur nucléaire, une aile d'avion, une coque de navire ou un pipeline de gaz, il recherche les micro-fissures internes invisibles qui pourraient provoquer une catastrophe. Grâce aux rayons X, aux ondes ultrasonores ou à des liquides fluorescents, il garantit la sécurité absolue des structures avant leur mise en service.",
        "missions": [
            "Choisir et mettre en œuvre la méthode de contrôle CND appropriée (Ultrasons UT, Radiographie RT, Ressuage PT, Magnétoscopie MT, Courants de Foucault ET)",
            "Étalonner les appareils de mesure sur des cales étalons de référence certifiées",
            "Scanner les cordons de soudure et les pièces forgées ou moulées pour cartographier les défauts internes",
            "Interpréter les échos ultrasonores ou les clichés radiographiques pour classifier les anomalies (fissures, porosités, inclusions)",
            "Rédiger le rapport officiel de conformité selon les normes internationales (ISO 9712, ASME, RCC-M)"
        ],
        "workEnvironment": ["Centrales nucléaires, raffineries, chantiers navals, ateliers aéronautiques", "Laboratoires d'inspection technique", "Travail parfois en hauteur sur échafaudages ou cordes"],
        "typicalDay": [
            {"time": "08:30", "desc": "Étalonnage de l'appareil à ultrasons multi-éléments (Phased Array) sur bloc de référence en acier"},
            {"time": "10:00", "desc": "Contrôle par ultrasons d'une série de 15 soudures bout à bout sur une tuyauterie de vapeur surchauffée"},
            {"time": "12:30", "desc": "Déjeuner de chantier avec les coordinateurs soudage"},
            {"time": "13:30", "desc": "Contrôle par ressuage fluorescent sous lumière noire (UV) d'un carter d'hélice de navire"},
            {"time": "16:30", "desc": "Rédaction du procès-verbal de conformité CND et notification des deux zones nécessitant un meulage-reprise"}
        ],
        "companyRole": "Sentinelle de la sécurité industrielle, autorisant ou refusant la mise en service d'équipements vitaux selon des critères normatifs stricts.",
        "skills": {
            "technical": ["Maîtrise d'au moins 2 méthodes CND certifiées COFREND (Ultrasons, Radiographie, Ressuage, Magnétoscopie)", "Physique des ondes, radioprotection et métallurgie des défauts", "Lecture experte de clichés radiographiques industriels et A-scan/B-scan ultrasonores", "Normes et critères d'acceptabilité (ISO 5817, ISO 11666)"],
            "human": ["Intégrité professionnelle et rigueur morale absolue (ne jamais céder aux pressions de délais)", "Sens de l'observation aigu et minutie", "Sens des responsabilités et respect des consignes de sécurité", "Aisance rédactionnelle pour les rapports formels"],
            "tools": ["Appareils de contrôle par ultrasons multi-éléments (Olympus Omniscan)", "Générateurs de rayons X et sources gammagraphiques", "Lampes à ultraviolets (lumière de Wood) et pénétrants fluorescents", "Bancs de magnétoscopie"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +2 (BTS / BUT)", "title": "BTS Contrôle Industriel et Régulation Automatique (CIRA), BTS Métallurgie ou BUT Mesures Physiques", "desc": "Fondements de physique, optique, matériaux et métrologie."},
                {"step": "Certification professionnelle COFREND", "title": "Certifications COFREND Niveau 1, Niveau 2 (selon ISO 9712)", "desc": "Passage obligatoire des examens de certification reconnus internationalement par méthode."}
            ],
            "schools": [
                {"name": "Institut de Soudure (Centres de formation CND de France) — France", "country": "France", "scope": "France"},
                {"name": "IUT Mesures Physiques de France (Grenoble, Orsay, Le Mans) — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique de Dakar (ESP) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Institut Supérieur d'Enseignement Professionnel (ISEP Diamniadio) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certifications COFREND / ASNT Niveau 2 dans plusieurs méthodes (UT, RT, PT, MT)", "Certificat CAMARI (aptitude à la manipulation des appareils de radiologie industrielle)"]
        },
        "career": {
            "sectors": ["Nucléaire (EDF, Framatome, Orano)", "Pétrole, Gaz & Pétrochimie (TotalEnergies, Technip)", "Aéronautique & Spatial (Safran, Airbus)", "Construction navale & BTP métallique"],
            "employerTypes": ["Organismes de contrôle et d'inspection tierce partie (Bureau Veritas, Apave, Dekra, SGS)", "Services contrôle qualité de grands industriels", "Laboratoires d'essais"],
            "evolution": ["Inspecteur CND Niveau 3 COFREND (expertise et validation des procédures)", "Responsable du laboratoire de contrôle qualité", "Auditeur international en intégrité mécanique"],
            "pros": ["Métier à très haute responsabilité et fierté technique", "Rémunérations très attractives avec primes de certifications", "Mobilité internationale fréquente"],
            "cons": ["Déplacements réguliers sur sites industriels, contraintes de radioprotection lors des tirs radio de nuit"]
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser un test de ressuage simple à la bombe sur une soudure d'atelier pour révéler des micro-porosités débouchantes invisibles à l'œil nu.",
            "steps": [
                "Nettoyer et dégraisser parfaitement la surface",
                "Appliquer le pénétrant rouge et laisser agir 15 minutes",
                "Essuyer délicatement et pulvériser le révélateur blanc : la fissure apparaît en rouge vif"
            ],
            "freeResources": ["Guide pratique du ressuage et de la magnétoscopie (Institut de Soudure)", "Vidéos de la COFREND sur les métiers du CND"]
        },
        "aiImpact": {
            "summary": "L'IA assiste puissamment l'analyse d'images radiographiques et ultrasonores (Phased Array) en surlignant automatiquement les zones suspectes pour aider l'inspecteur.",
            "positiveImpacts": ["Détection automatique des défauts de soudure par réseaux de neurones convolutionnels", "Reconstruction tomographique 3D ultra-rapide des défauts internes"],
            "risksAndChallenges": ["L'inspecteur certifié Niveau 2/3 reste juridiquement le seul responsable de la signature du rapport"],
            "recommendedSkills": ["Interprétation assistée par IA sur logiciels de contrôle tomographique"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les techniciens CND certifiés sont le sésame obligatoire pour certifier les plateformes de gaz de GTA, les tuyauteries de la SAR, les citernes d'hydrocarbures de Bargny et les coques des navires entrant au port de Dakar.",
            "westAfricaOpportunities": "Recherche intense d'inspecteurs CND certifiés ISO 9712 dans tout le golfe de Guinée et l'espace UEMOA.",
            "localChampions": ["Bureau Veritas Sénégal", "SGS Sénégal", "Dakar Marine", "Petrosen"]
        },
        "salary": {
            "france": {"entry": 27000, "mid": 38000, "expert": 55000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant & baromètres COFREND (primes substantielles pour Niveaux 2)"},
            "senegal": {"entry": 350000, "mid": 750000, "expert": 1500000, "currency": "FCFA", "period": "mois", "note": "Salaires nets constatés pour inspecteurs certifiés sur projets pétro-gaziers"}
        },
        "connectedFamilies": ["energie-renouvelable", "mines-geosciences", "naval-maritime"],
        "relatedJobs": ["soudeur-industriel", "technicien-inspection-conformite", "ingenieur-qualite-industriel"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Technicien contrôle non destructif", "url": "https://www.letudiant.fr/metiers/secteur/industrie/technicien-ou-technicienne-controle-non-destructif.html", "type": "metier"},
            {"organization": "Onisep", "title": "Technicien / Technicienne en contrôle non destructif", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/technicien-technicienne-en-controle-non-destructif", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Un technicien CND utilisant la technique du ressuage est capable de déceler une fissure débouchante d'un dixième de micron d'ouverture, soit 1 000 fois plus fine qu'un cheveu humain.",
            "pourquoi": "Grâce aux forces de capillarité et aux pigments fluorescents excités par des rayons ultraviolets, le défaut invisible devient éclatant sous lumière noire.",
            "a_retenir": "Le technicien CND voit ce qui est caché pour protéger des milliers de vies."
        }
    },

    # -----------------------------------------------------------------------
    # 23. TECHNICIEN INSPECTION CONFORMITÉ
    # -----------------------------------------------------------------------
    {
        "id": "technicien-inspection-conformite",
        "slug": "technicien-inspection-conformite",
        "title": "Technicien Inspection & Conformité Industrielle",
        "aliases": ["Inspecteur de conformité industrielle", "Technicien d'inspection réglementaire", "Compliance Inspector"],
        "icon": "📏",
        "familyId": "industrie-mecanique",
        "domain": "Contrôle, Inspection & Métrologie",
        "domainId": "controle-inspection-metrologie",
        "subdomain": "Inspection réglementaire & Métrologie légale",
        "shortDescription": "Inspecte les installations, équipements sous pression et machines industrielles pour vérifier leur conformité aux réglementations et normes de sécurité.",
        "longDescription": "Le technicien d'inspection et de conformité veille au respect strict des normes de sécurité, environnementales et techniques imposées par la législation. Qu'il travaille pour un organisme de contrôle agréé ou au sein d'une usine, il ausculte les chaudières, compresseurs, appareils de levage, installations électriques et dispositifs d'arrêt d'urgence pour prévenir les accidents du travail et les sinistres industriels.",
        "missions": [
            "Réaliser les vérifications réglementaires périodiques d'appareils de levage, d'équipements sous pression et d'installations électriques",
            "Examiner les dossiers techniques de conformité machine (marquage CE, notices d'instructions, schémas de sécurité)",
            "Tester physiquement le déclenchement des soupapes de sûreté, arrêts d'urgence et capteurs de sécurité",
            "Rédiger les rapports d'inspection officiels en consignant avec précision les réserves et non-conformités constatées",
            "Conseiller les exploitants d'usines sur les actions correctives obligatoires pour obtenir la levée des réserves"
        ],
        "workEnvironment": ["Déplacements permanents sur tous types de sites industriels", "Usines chimiques, chantiers BTP, entrepôts logistiques, chaufferies", "Travail en autonomie avec tablette de saisie d'inspection"],
        "typicalDay": [
            {"time": "08:30", "desc": "Arrivée sur le site d'une usine agroalimentaire pour l'inspection annuelle de 3 chaudières à vapeur"},
            {"time": "09:30", "desc": "Vérification visuelle interne de la cuve sous pression et tarage des soupapes de sécurité"},
            {"time": "12:00", "desc": "Déjeuner de travail avec le responsable maintenance du site"},
            {"time": "13:30", "desc": "Contrôle réglementaire des ponts roulants de l'atelier d'embouteillage et épreuve de charge"},
            {"time": "16:00", "desc": "Débriefing de fin de visite avec la direction d'usine et transmission du rapport provisoire"}
        ],
        "companyRole": "Tiers de confiance indépendant garantissant que les équipements industriels ne présentent aucun danger pour les salariés et l'environnement.",
        "skills": {
            "technical": ["Réglementation des équipements sous pression (ESP) et des appareils de levage", "Normes de sécurité des machines (Directive Machines 2006/42/CE, NF C 15-100)", "Électrotechnique, hydraulique et mécanique générale", "Méthodologie d'audit et d'inspection technique"],
            "human": ["Intégrité morale et impartialité totale", "Pédagogie et diplomatie pour faire accepter les mises en conformité", "Rigueur d'observation et esprit critique", "Sens du relationnel client"],
            "tools": ["Tablette d'inspection avec logiciel réglementaire dédié", "Manomètres étalonnés et bancs de tarage de soupapes", "Télémètres laser et sonomètres", "Contrôleurs d'installations électriques multifonctions"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +2 (BTS / BUT)", "title": "BTS Maintenance des Systèmes, BTS Électrotechnique ou BUT Mesures Physiques", "desc": "Socle technique pluridisciplinaire en électromécanique et instrumentation."},
                {"step": "Formation & Habilitations d'Organisme", "title": "Parcours d'habilitation interne d'inspecteur en organisme agréé (Apave, Bureau Veritas, Dekra)", "desc": "Formation intensive au droit réglementaire de la sécurité et compagnonnage sur le terrain."}
            ],
            "schools": [
                {"name": "IUT et Lycées techniques de France (BTS MS / Électrotechnique) — France", "country": "France", "scope": "France"},
                {"name": "Centres de formation Apave / Bureau Veritas / Dekra — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique de Dakar (ESP) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Institut Supérieur d'Enseignement Professionnel (ISEP Diamniadio) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Agréments ministériels d'inspecteur en appareils à pression et levage", "Habilitations électriques inspecteur"]
        },
        "career": {
            "sectors": ["Organismes de contrôle et d'inspection (TIC : Testing, Inspection, Certification)", "Tous secteurs industriels", "Collectivités et établissements recevant du public (ERP)"],
            "employerTypes": ["Bureaux d'inspection agréés (Bureau Veritas, Apave, Socotec, Dekra)", "Directions sécurité de grands groupes industriels"],
            "evolution": ["Inspecteur référent technique régional", "Responsable d'agence d'inspection", "Auditeur de certification ISO 9001 / ISO 45001"],
            "pros": ["Autonomie quotidienne complète dans la gestion de ses tournées", "Grande variété des sites industriels visités chaque semaine", "Métier valorisant qui protège directement les travailleurs"],
            "cons": ["Nombreux kilomètres sur la route chaque jour, rigueur administrative stricte"]
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser l'audit de conformité de sécurité simplifié d'un petit équipement d'atelier (ex: perceuse à colonne) par rapport à la Directive Machines.",
            "steps": [
                "Vérifier la présence d'un bouton d'arrêt d'urgence coupant l'alimentation",
                "Contrôler la protection mobile interverrouillée sur le mandrin",
                "Rédiger la fiche de constat avec préconisations de mise aux normes"
            ],
            "freeResources": ["Guide de prévention de l'INRS sur la sécurité des machines", "Directive Européenne Machines 2006/42/CE commentée"]
        },
        "aiImpact": {
            "summary": "L'IA assiste l'inspecteur via la reconnaissance d'images sur tablette pour vérifier instantanément la présence des pictogrammes et la validité des plaques constructeurs.",
            "positiveImpacts": ["Génération automatique des rapports de visite avec renvoi direct aux articles du code du travail", "Suivi prédictif des échéances de requalification des équipements"],
            "risksAndChallenges": ["La responsabilité juridique de la signature et de la validation reste 100% humaine"],
            "recommendedSkills": ["Maîtrise des applications d'inspection digitale sur le terrain"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la Direction de la Protection Civile et les bureaux d'inspection technique agréés jouent un rôle capital dans le contrôle des dépôts pétroliers de Mbao, des réservoirs d'ammoniac des ICS et des grues portuaires du Port Autonome de Dakar.",
            "westAfricaOpportunities": "Forte demande d'inspecteurs de conformité dans l'ensemble de l'espace UEMOA pour sécuriser les nouvelles installations industrielles.",
            "localChampions": ["Bureau Veritas Sénégal", "Apave Sahel", "SGS Sénégal", "Socotec Sénégal"]
        },
        "salary": {
            "france": {"entry": 26000, "mid": 35000, "expert": 46000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant & grilles des bureaux de contrôle (véhicule de fonction inclus)"},
            "senegal": {"entry": 300000, "mid": 600000, "expert": 1100000, "currency": "FCFA", "period": "mois", "note": "Salaires nets dans les filiales des bureaux de contrôle internationaux à Dakar"}
        },
        "connectedFamilies": ["droit-management", "btp-architecture"],
        "relatedJobs": ["technicien-controle-cnd", "responsable-qse-industriel", "ingenieur-qualite-industriel"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Technicien inspection conformité", "url": "https://www.letudiant.fr/metiers/secteur/industrie/technicien-ne-inspection-conformite.html", "type": "metier"},
            {"organization": "Onisep", "title": "Technicien / Technicienne de contrôle et d'inspection", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/technicien-technicienne-de-controle-industriel", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En Europe et en Afrique, chaque ascenseur, chaque chaudière industrielle et chaque pont roulant doit légalement faire l'objet d'une visite d'inspection de conformité au moins une fois par an par un organisme agréé indépendant.",
            "pourquoi": "Ce cadre réglementaire strict a permis de diviser par plus de 15 le nombre d'accidents industriels majeurs au cours des cinquante dernières années.",
            "a_retenir": "L'inspecteur de conformité est le gardien de la légalité et de la sécurité dans l'usine."
        }
    },

    # -----------------------------------------------------------------------
    # 24. RESPONSABLE QSE INDUSTRIEL
    # -----------------------------------------------------------------------
    {
        "id": "responsable-qse-industriel",
        "slug": "responsable-qse-industriel",
        "title": "Responsable QSE (Qualité, Sécurité, Environnement)",
        "aliases": ["Responsable QHSE", "Ingénieur HSE", "QSE Manager"],
        "icon": "✅",
        "familyId": "industrie-mecanique",
        "domain": "Qualité, Sécurité & Environnement",
        "domainId": "qse-securite-environnement-indus",
        "subdomain": "Management intégré QSE & Prévention des risques",
        "shortDescription": "Pilote la politique globale de qualité des produits, de sécurité et santé des salariés, et de conformité environnementale de l'usine.",
        "longDescription": "Le responsable QSE est le garant éthique et managérial de l'usine. À la croisée des exigences clients et des réglementations environnementales, il déploie les systèmes de management intégrés (ISO 9001, ISO 14001, ISO 45001). Il analyse les accidents du travail, chasse les situations dangereuses, anime les causeries sécurité avec les ouvriers et veille au traitement rigoureux des déchets et des rejets industriels.",
        "missions": [
            "Concevoir, animer et faire certifier le système de management intégré QSE (ISO 9001, 14001, 45001)",
            "Élaborer le Document Unique d'Évaluation des Risques Professionnels (DUERP) et piloter le plan de prévention",
            "Mener les enquêtes d'accidents du travail au moyen de la méthode de l'arbre des causes",
            "Superviser les rejets industriels (eaux usées, cheminées, poussières) et la gestion des déchets dangereux",
            "Animer des sessions de sensibilisation à la sécurité pour les opérateurs et accueillir les entreprises extérieures"
        ],
        "workEnvironment": ["Sites industriels de toutes tailles", "Alternance permanente entre réunions de direction et tournées de terrain en atelier", "Relations étroites avec l'inspection du travail et la médecine du travail"],
        "typicalDay": [
            {"time": "08:30", "desc": "Tournée sécurité en atelier ('Safety Walk') pour observer les postes de travail et le port des EPI"},
            {"time": "10:00", "desc": "Animation d'une réunion de résolution de problème suite à un presqu'accident sur un chariot élévateur"},
            {"time": "12:30", "desc": "Déjeuner avec le directeur d'usine et le responsable des ressources humaines"},
            {"time": "14:00", "desc": "Audit interne de conformité environnementale ISO 14001 sur la rétention des cuves de produits chimiques"},
            {"time": "16:30", "desc": "Mise à jour des indicateurs de fréquence et de gravité des accidents sur le tableau de bord QSE"}
        ],
        "companyRole": "Protecteur des hommes et de la planète dans l'industrie, garantissant l'acceptabilité sociale et la pérennité légale de l'usine.",
        "skills": {
            "technical": ["Normes internationales de management (ISO 9001, ISO 14001, ISO 45001, ISO 50001)", "Droit du travail, droit de l'environnement et réglementation des sites classés (ICPE)", "Méthodes d'analyse des risques (arbre des causes, AMDEC, HAZOP)", "Techniques d'audit qualité et sécurité"],
            "human": ["Pédagogie et capacité à faire évoluer les comportements sans être autoritaire", "Écoute active et empathie vis-à-vis des opérateurs de terrain", "Fermeté absolue sur les règles vitales de sécurité", "Aisance en communication orale et écrite"],
            "tools": ["Logiciels QSE intégrés (QHSE Alert, Cority, Enablon)", "Arbre des causes et méthode Ishikawa", "Appareils de mesure d'ambiance (sonomètre, luxmètre, dosimètre)"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +3", "title": "Licence Professionnelle Métiers de la Qualité, de la Sécurité et de l'Environnement", "desc": "Réglementation QSE, ergonomie et animation de terrain."},
                {"step": "Bac +5 (Master / Diplôme d'Ingénieur)", "title": "Master QSE / Risques Industriels ou Diplôme d'Ingénieur spécialité Prévention des Risques", "desc": "Management stratégique des crises, responsabilité sociétale (RSE) et direction QSE."}
            ],
            "schools": [
                {"name": "Université de Technologie de Troyes (UTT - Mastère Sécurité & Risques) — France", "country": "France", "scope": "France"},
                {"name": "INSA Rouen / Polytech Grenoble (Filières Prévention des Risques) — France", "country": "France", "scope": "France"},
                {"name": "Institut des Sciences de l'Environnement (ISE - UCAD Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Supérieure Polytechnique de Dakar (ESP - Master QHSE) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certifications officielles Auditeur Lead IRCA (ISO 9001 / 14001 / 45001)"]
        },
        "career": {
            "sectors": ["Chimie & Pétrochimie (usines SEVESO)", "Agroalimentaire & Pharmacie", "BTP & Travaux Publics", "Automobile & Aéronautique", "Métallurgie"],
            "employerTypes": ["Grandes entreprises industrielles", "PME et ETI manufacturières", "Cabinets d'audit et de conseil en développement durable"],
            "evolution": ["Directeur QSE de groupe", "Directeur RSE (Responsabilité Sociétale des Entreprises)", "Directeur des opérations industrielles"],
            "pros": ["Métier à forte dimension humaine qui sauve concrètement des vies", "Rôle transverse en lien direct avec la direction générale", "Forte employabilité liée aux impératifs climatiques et ESG"],
            "cons": ["Gestion parfois complexe des tensions entre exigences de cadence de production et sécurité"]
        },
        "gettingStarted": {
            "beginnerProject": "Analyser un poste de travail manuel et rédiger son évaluation des risques en identifiant 5 dangers potentiels et en proposant des mesures de prévention hiérarchisées.",
            "steps": [
                "Distinguer le danger (la source) du risque (le contact avec l'humain)",
                "Évaluer la gravité et la fréquence d'exposition",
                "Appliquer les 9 principes généraux de prévention de l'INRS"
            ],
            "freeResources": ["Publications et brochures gratuites de l'INRS", "Plateforme ISO.org (découverte des normes 9001/14001/45001)"]
        },
        "aiImpact": {
            "summary": "L'IA analyse les flux vidéo des caméras d'atelier pour détecter automatiquement les zones d'encombrement des issues de secours ou le non-port du casque en temps réel.",
            "positiveImpacts": ["Cartographie dynamique en temps réel des zones à risque dans l'usine", "Génération assistée de formulaires de causeries sécurité thématiques"],
            "risksAndChallenges": ["Veiller au strict respect de la vie privée des travailleurs face à la surveillance par caméra"],
            "recommendedSkills": ["Gouvernance des données éthiques et conformité RGPD en milieu industriel"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le responsable QSE est indispensable pour gérer les études d'impact environnemental des grands projets industriels (cimenteries de Pout et Bargny, dépôts miniers de phosphate de Taïba, terminaux pétro-gaziers du port de Dakar).",
            "westAfricaOpportunities": "Recrutements massifs de cadres QSE bilingues (français/anglais) pour les multinationales de l'énergie et des mines en Afrique de l'Ouest.",
            "localChampions": ["Industries Chimiques du Sénégal (ICS)", "SOCOCIM", "TotalEnergies Sénégal", "Compagnie Sucrière Sénégalaise"]
        },
        "salary": {
            "france": {"entry": 35000, "mid": 48000, "expert": 68000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant"},
            "senegal": {"entry": 550000, "mid": 1100000, "expert": 2100000, "currency": "FCFA", "period": "mois", "note": "Salaires nets constatés pour responsables QHSE dans les industries lourdes"}
        },
        "connectedFamilies": ["environnement-developpement-durable", "sante-biomedical", "droit-management"],
        "relatedJobs": ["ingenieur-qualite-industriel", "technicien-inspection-conformite", "directeur-site-industriel"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Responsable QSE", "url": "https://www.letudiant.fr/metiers/secteur/industrie/responsable-qualite-1.html", "type": "metier"},
            {"organization": "Onisep", "title": "Responsable QSE (qualité, sécurité, environnement)", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/responsable-qse-qualite-securite-environnement", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "D'après la célèbre pyramide de Bird, pour 1 accident mortel en milieu industriel, on dénombre statistiquement 10 accidents graves, 30 accidents légers, et plus de 600 situations dangereuses ou presqu'accidents précurseurs.",
            "pourquoi": "En signalant et traitant chaque presqu'accident du quotidien, le responsable QSE désamorce la chaîne causale avant que l'accident grave ne se produise.",
            "a_retenir": "Le responsable QSE fait de la sécurité une culture partagée par tous."
        }
    },

    # -----------------------------------------------------------------------
    # 25. INGÉNIEUR QUALITÉ INDUSTRIELLE
    # -----------------------------------------------------------------------
    {
        "id": "ingenieur-qualite-industriel",
        "slug": "ingenieur-qualite-industriel",
        "title": "Ingénieur Qualité Industrielle",
        "aliases": ["Ingénieur assurance qualité", "Quality Engineer", "Responsable qualité produit"],
        "icon": "🎯",
        "familyId": "industrie-mecanique",
        "domain": "Qualité, Sécurité & Environnement",
        "domainId": "qse-securite-environnement-indus",
        "subdomain": "Assurance qualité & Maîtrise statistique des procédés (MSP)",
        "shortDescription": "Met en place les méthodes de contrôle, résout les problèmes de non-conformité et garantit que chaque produit fabriqué respecte les exigences du client.",
        "longDescription": "L'ingénieur qualité est le représentant du client au cœur de l'usine. Dès la phase de développement jusqu'à la livraison finale, il définit les plans de contrôle, qualifie les fournisseurs de composants, utilise la maîtrise statistique des procédés (MSP/SPC) pour éradiquer les dérives, et pilote les cellules de crise qualité en cas de réclamation client avec des outils structurés de résolution de problèmes.",
        "missions": [
            "Élaborer les plans de surveillance qualité et définir les points de contrôle sur la ligne de fabrication",
            "Déployer les outils de la qualité industrielle (AMDEC Produit/Process, 8D, Ishikawa, 5P, QRQC)",
            "Analyser les données statistiques de production (capabilités machines Cp/Cpk, cartes de contrôle Shewhart)",
            "Auditer et qualifier les sous-traitants et fournisseurs de matières premières",
            "Piloter le traitement des réclamations clients et mettre en place des actions correctives irréversibles"
        ],
        "workEnvironment": ["Usines de grande série (automobile, aéronautique, électronique, dispositifs médicaux)", "Laboratoires de métrologie et de contrôle qualité", "Poste d'interface entre production, R&D et clients"],
        "typicalDay": [
            {"time": "08:30", "desc": "Animation du rituel QRQC (Quick Response Quality Control) d'atelier suite à un défaut de dimension détecté la veille"},
            {"time": "10:00", "desc": "Analyse de capabilité sur une série d'alésages usinés pour vérifier que le Cpk reste supérieur à 1,67"},
            {"time": "12:30", "desc": "Déjeuner avec les ingénieurs méthodes"},
            {"time": "14:00", "desc": "Audit fournisseur chez un fondeur sous-traitant pour valider ses outillages de contrôle"},
            {"time": "16:30", "desc": "Rédaction d'un rapport 8D destiné à un grand constructeur automobile suite à une non-conformité mineure"}
        ],
        "companyRole": "Garant de l'excellence irréprochable des produits, protégeant la marque contre les défauts et les rappels de série coûteux.",
        "skills": {
            "technical": ["Maîtrise statistique des procédés (SPC / MSP, capabilités Cp, Cpk)", "Méthodes de résolution de problèmes structurées (8D, Ishikawa, 5 Pourquoi, AMDEC)", "Normes qualité sectorielles (IATF 16949 pour l'automobile, EN 9100 pour l'aéronautique, ISO 13485 médical)", "Métrologie tridimensionnelle et analyse des causes racines"],
            "human": ["Rigueur et honnêteté intellectuelle sans faille", "Forte capacité d'argumentation étayée par des données chiffrées", "Diplomatie dans la gestion des réclamations clients", "Esprit de synthèse et leadership transversal"],
            "tools": ["Logiciels statistiques (Minitab, JMP)", "Logiciels de gestion de la qualité (QMS)", "Systèmes de métrologie dimensionnelle"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +2 / BUT", "title": "BUT Mesures Physiques ou BUT Génie Industriel et Maintenance", "desc": "Métrologie fondamentale, physique des mesures et bases industrielles."},
                {"step": "Bac +5 (Diplôme d'Ingénieur)", "title": "Diplôme d'Ingénieur en Génie Industriel, Mécanique ou Management de la Qualité", "desc": "Maîtrise des systèmes qualité sectoriels, Six Sigma et audits internationaux."}
            ],
            "schools": [
                {"name": "INSA Lyon / UTC Compiègne — France", "country": "France", "scope": "France"},
                {"name": "Arts et Métiers ENSAM — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique de Dakar (ESP - UCAD) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Polytechnique de Thiès (EPT) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certifications Black Belt Lean Six Sigma", "Certifications Auditeur IATF 16949 / EN 9100"]
        },
        "career": {
            "sectors": ["Automobile & Véhicules électriques", "Aéronautique & Défense", "Dispositifs médicaux & Pharmacie", "Électronique grand public", "Agroalimentaire de pointe"],
            "employerTypes": ["Équipementiers automobiles de rang 1", "Grands constructeurs industriels", "Entreprises technologiques certifiées"],
            "evolution": ["Responsable qualité usine", "Directeur qualité groupe / VP Quality", "Directeur d'usine"],
            "pros": ["Position stratégique reconnue par la direction générale", "Compétences universellement transférables d'une industrie à une autre", "Rôle stimulant fondé sur la preuve scientifique et statistique"],
            "cons": ["Gestion de situations de crise délicates lors de blocages de livraison"]
        },
        "gettingStarted": {
            "beginnerProject": "Appliquer la méthode des 5 Pourquoi et le diagramme d'Ishikawa sur un problème concret du quotidien (ex: pourquoi le train a eu 20 minutes de retard) pour identifier la cause racine.",
            "steps": [
                "Catégoriser les causes selon les 5M (Matière, Matériel, Méthode, Main d'œuvre, Milieu)",
                "Remonter la chaîne des causes par 5 questions successives",
                "Définir l'action corrective qui empêchera définitivement la récidive"
            ],
            "freeResources": ["American Society for Quality (ASQ Learning Resources)", "Tutoriels Minitab de maîtrise statistique des procédés"]
        },
        "aiImpact": {
            "summary": "L'IA transforme l'assurance qualité via l'analyse prédictive de dérive : les algorithmes détectent un décalage de quelques fractions de micron avant même que la pièce ne sorte des tolérances.",
            "positiveImpacts": ["Zéro défaut grâce au contrôle optique IA automatisé à 100% sur les lignes", "Génération automatique d'ébauches de rapports 8D"],
            "risksAndChallenges": ["La validation humaine de la cause racine reste indispensable pour éviter des actions correctives inefficaces"],
            "recommendedSkills": ["Data analytics industriel et apprentissage automatique appliqué à la qualité"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'ingénieur qualité est indispensable pour l'obtention des labels d'exportation vers l'Europe et les États-Unis (AGOA) des produits agro-industriels (haricots verts, mangues, conserves de thon) et des ciments sénégalais.",
            "westAfricaOpportunities": "Forte demande dans l'industrie pharmaceutique et les entreprises certifiées ISO de la zone UEMOA.",
            "localChampions": ["Patisen", "SENICO", "Grands Moulins de Dakar", "SOCOCIM"]
        },
        "salary": {
            "france": {"entry": 38000, "mid": 50000, "expert": 70000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant & baromètres qualité"},
            "senegal": {"entry": 600000, "mid": 1150000, "expert": 2100000, "currency": "FCFA", "period": "mois", "note": "Salaires nets constatés dans les entreprises certifiées à Dakar"}
        },
        "connectedFamilies": ["droit-management", "sante-biomedical"],
        "relatedJobs": ["responsable-qse-industriel", "ingenieur-methodes-industriel", "technicien-inspection-conformite"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Ingénieur qualité", "url": "https://www.letudiant.fr/metiers/secteur/industrie/ingenieur-qualite.html", "type": "metier"},
            {"organization": "Onisep", "title": "Ingénieur / Ingénieure qualité", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/ingenieur-ingenieure-qualite", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "La méthodologie Six Sigma vise un niveau de qualité de 3,4 défauts par million d'opportunités, soit une fiabilité de 99,99966%.",
            "pourquoi": "Dans l'aéronautique ou la fabrication d'implants médicaux, une fiabilité de 99% signifierait des dizaines de défaillances dramatiques par jour.",
            "a_retenir": "L'ingénieur qualité vise la quasi-perfection pour protéger l'utilisateur."
        }
    },

    # -----------------------------------------------------------------------
    # 26. AÉRODYNAMICIEN / INGÉNIEUR AÉRODYNAMIQUE
    # -----------------------------------------------------------------------
    {
        "id": "aerodynamicien",
        "slug": "aerodynamicien",
        "title": "Aérodynamicien / Ingénieur Aérodynamique",
        "aliases": ["Ingénieur en mécanique des fluides", "Ingénieur CFD (Computational Fluid Dynamics)", "Aerodynamicist"],
        "icon": "🛩️",
        "familyId": "industrie-mecanique",
        "domain": "Aéronautique & Spatial",
        "domainId": "aeronautique-spatial-indus",
        "subdomain": "Mécanique des fluides, Aérodynamique & Soufflerie",
        "shortDescription": "Optimise l'écoulement de l'air autour des aéronefs, fusées, trains à grande vitesse et voitures pour réduire la traînée et maximiser la portance.",
        "longDescription": "L'aérodynamicien sculpte les flux invisibles de l'air. Par des calculs mathématiques intensifs de dynamique des fluides numérique (CFD) et des essais en soufflerie avec fumée et capteurs de pression, il façonne le profil des ailes d'avions, l'ogive des lanceurs spatiaux, les ailerons de Formule 1 ou le carénage des éoliennes pour minimiser la résistance de l'air, économiser du carburant et garantir la stabilité de vol.",
        "missions": [
            "Modéliser et simuler les écoulements compressibles et incompressibles par CFD (équations de Navier-Stokes)",
            "Concevoir et tester des maquettes instrumentées dans des souffleries aérodynamiques subsoniques et supersoniques",
            "Optimiser la finesse aérodynamique (rapport portance/traînée) des voilures et fuselages",
            "Analyser l'aéroacoustique pour réduire le bruit de frottement dans l'air et le souffle des réacteurs",
            "Collaborer avec les équipes structures pour valider le comportement aéroélastique (flutter)"
        ],
        "workEnvironment": ["Centres d'ingénierie aéronautique et spatiale", "Écuries de sport automobile (F1, endurance)", "Grands laboratoires de soufflerie (ONERA)"],
        "typicalDay": [
            {"time": "08:30", "desc": "Analyse des simulations CFD d'un nouveau profil d'aile tournées toute la nuit sur le supercalculateur"},
            {"time": "10:30", "desc": "Dépouillement des cartes de pression et des vortex générés en bout d'aile (winglets)"},
            {"time": "12:30", "desc": "Déjeuner avec les ingénieurs propulsion"},
            {"time": "14:00", "desc": "Séance d'essais en soufflerie : visualisation de l'écoulement par filets de fumée laser (PIV)"},
            {"time": "16:30", "desc": "Recommandation de modifications géométriques du carénage moteur pour réduire la traînée de 2%"}
        ],
        "companyRole": "Maître de la pénétration dans l'air, garant des performances de vitesse, de consommation énergétique et de stabilité des véhicules.",
        "skills": {
            "technical": ["Mécanique des fluides approfondie, turbulence et couches limites", "Simulation numérique CFD (Ansys Fluent, Star-CCM+, OpenFOAM)", "Techniques de mesure en soufflerie (PIV, balances aérodynamiques, capteurs de pression)", "Aéroélasticité et thermodynamique des gaz"],
            "human": ["Sens physique exceptionnel des phénomènes invisibles", "Rigueur scientifique et mathématique", "Capacité à collaborer avec des équipes pluridisciplinaires", "Passion pour la vitesse et l'aviation"],
            "tools": ["ANSYS Fluent", "Siemens Simcenter STAR-CCM+", "OpenFOAM", "Supercalculateurs HPC", "Systèmes de mesure laser PIV (Particle Image Velocimetry)"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +2 / CPGE", "title": "Classes Préparatoires aux Grandes Écoles (MPSI, PCSI, PSI)", "desc": "Fondements mathématiques d'analyse vectorielle et physique des ondes."},
                {"step": "Bac +5 (Diplôme d'Ingénieur)", "title": "Diplôme d'Ingénieur Aéronautique ou Mécanique des Fluides (ISAE-Supaero, ENAC, Centrale, Arts et Métiers)", "desc": "Spécialisation poussée en mécanique des fluides, turbulence et simulation numérique CFD."}
            ],
            "schools": [
                {"name": "ISAE-Supaero (Toulouse) — France", "country": "France", "scope": "France"},
                {"name": "Institut de Mécanique des Fluides de Toulouse (IMFT) — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique de Dakar (ESP - Département Génie Mécanique) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Université Amadou Mahtar Mbow (UAM Diamniadio) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Doctorat en mécanique des fluides (Ph.D.) valorisé en R&D avancée"]
        },
        "career": {
            "sectors": ["Aéronautique civile et militaire", "Spatial (lanceurs, capsules de rentrée atmosphérique)", "Automobile & Sport automobile (F1)", "Énergie éolienne (aérodynamique des pales)"],
            "employerTypes": ["Constructeurs aéronautiques (Airbus, Dassault)", "Équipementiers spatiaux (ArianeGroup)", "Laboratoires de recherche (ONERA, CNRS)", "Écuries automobiles de course"],
            "evolution": ["Expert aérodynamicien en chef", "Responsable du bureau d'études aérodynamique", "Directeur de programme avionique ou spatial"],
            "pros": ["Métier d'élite prestigieux au sommet de la technologie mondiale", "Influence directe sur la décarbonation de l'aviation", "Accès à des installations de test uniques (grandes souffleries)"],
            "cons": ["Temps de calcul longs et modèles de turbulence mathématiquement complexes"]
        },
        "gettingStarted": {
            "beginnerProject": "Utiliser OpenFOAM ou SimScale pour modéliser l'écoulement de l'air autour d'un profil d'aile NACA 0012 sous différents angles d'attaque et tracer la polaire de l'aile.",
            "steps": [
                "Générer la géométrie d'un profil NACA 2D",
                "Définir le maillage avec raffinement de couche limite",
                "Lancer le calcul CFD et identifier l'angle de décrochage"
            ],
            "freeResources": ["Airfoil Tools (base de données de profils aérodynamiques)", "Tutoriels OpenFOAM débutant", "NASA Glenn Research Center Educational Aerodynamics"]
        },
        "aiImpact": {
            "summary": "L'IA révolutionne la CFD en prédisant les champs de vitesse et de pression 1 000 fois plus vite que les solveurs traditionnels via des modèles neuronaux formés sur des banques d'essais.",
            "positiveImpacts": ["Optimisation aérodynamique continue en temps réel durant la conception", "Découverte de formes bio-inspirées ultra-efficientes impossibles à imaginer manuellement"],
            "risksAndChallenges": ["Nécessité de valider les solutions en soufflerie pour certifier les régimes transsoniques"],
            "recommendedSkills": ["Couplage IA et CFD (Deep Learning appliqué à la mécanique des fluides)"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les compétences en aérodynamique et mécanique des fluides s'appliquent directement à l'optimisation des parcs éoliens de Taïba N'Diaye (orientation et profilage des pales) et à l'aménagement aéroportuaire de l'AIBD.",
            "westAfricaOpportunities": "Études d'aérodynamique urbaine et de ventilation naturelle passive des nouveaux bâtiments bioclimatiques en Afrique de l'Ouest.",
            "localChampions": ["Parc Éolien de Taïba N'Diaye (PETN)", "Aéroport International Blaise Diagne (AIBD)", "Air Sénégal (Ingénierie de flotte)"]
        },
        "salary": {
            "france": {"entry": 40000, "mid": 55000, "expert": 80000, "currency": "EUR", "period": "an", "note": "Source : Onisep & L'Étudiant (très valorisé en Formule 1 et spatial)"},
            "senegal": {"entry": 700000, "mid": 1350000, "expert": 2500000, "currency": "FCFA", "period": "mois", "note": "Salaires nets dans les projets énergétiques d'envergure et bureaux d'ingénierie"}
        },
        "connectedFamilies": ["aeronautique-spatial", "energie-renouvelable"],
        "relatedJobs": ["ingenieur-calcul", "ingenieur-mecanique", "architecte-naval"],
        "sources": [
            {"organization": "Onisep", "title": "Aérodynamicien / Aérodynamicienne", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/aerodynamicien-aerodynamicienne", "type": "metier"},
            {"organization": "L'Étudiant", "title": "Fiche secteur : Ingénierie aéronautique", "url": "https://www.letudiant.fr/metiers/secteur/industrie.html", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Sur un avion de ligne moderne, chaque réduction de 1% de la traînée aérodynamique permet d'économiser plus de 100 000 litres de carburant par avion et par an.",
            "pourquoi": "L'air oppose une résistance gigantesque à 900 km/h : de minuscules ailettes d'extrémité (winglets) réduisent les tourbillons marginaux et génèrent des économies colossales.",
            "a_retenir": "L'aérodynamicien dompte le vent pour faire voler des géants de 500 tonnes."
        }
    },

    # -----------------------------------------------------------------------
    # 27. ARCHITECTE NAVAL
    # -----------------------------------------------------------------------
    {
        "id": "architecte-naval",
        "slug": "architecte-naval",
        "title": "Architecte Naval / Ingénieur de Construction Navale",
        "aliases": ["Ingénieur naval", "Concepteur de navires", "Naval Architect"],
        "icon": "🚢",
        "familyId": "industrie-mecanique",
        "domain": "Naval & Maritime Industriel",
        "domainId": "naval-maritime-industriel",
        "subdomain": "Hydrodynamique, Architecture de carène & Structures navales",
        "shortDescription": "Conçoit l'architecture globale des navires, calcule la stabilité et l'hydrodynamique de la carène, et supervise la construction maritime.",
        "longDescription": "L'architecte naval est le bâtisseur des mers. Des porte-conteneurs géants aux navires de pêche hauturière, en passant par les bateaux militaires, voiliers de course et plateformes pétrolières offshore, il conçoit la forme de la coque (carène), calcule la flottabilité, la stabilité par mer démontée, intègre la propulsion, les emménagements et veille au respect des règlements stricts de sécurité maritime internationale.",
        "missions": [
            "Dessiner les formes de carène et modéliser la géométrie 3D de la coque sous logiciels hydrodynamiques",
            "Calculer les courbes de stabilité statique et dynamique, le centre de gravité et le franc-bord réglementaire",
            "Dimensionner la structure en acier, aluminium ou composites pour résister aux efforts de houle (pilonnement, tangage)",
            "Sélectionner et intégrer les systèmes de propulsion (moteurs diesels marins, hélices, voiles rigides, piles à combustible)",
            "Superviser les essais en bassin des carènes et participer aux essais en mer avant livraison du navire"
        ],
        "workEnvironment": ["Bureaux d'architecture navale", "Chantiers de construction navale (Dakar Marine, Chantiers de l'Atlantique, Naval Group)", "Essais en mer et en bassins hydrodynamiques"],
        "typicalDay": [
            {"time": "08:30", "desc": "Analyse des simulations hydrodynamiques de traînée de coque à 18 nœuds pour un chalutier océanique"},
            {"time": "10:30", "desc": "Calcul réglementaire de stabilité après avarie (envahissement d'un compartiment étanche) sous logiciel Maxsurf"},
            {"time": "12:30", "desc": "Déjeuner de travail avec les ingénieurs d'armement naval"},
            {"time": "14:00", "desc": "Visite sur la cale sèche du chantier pour contrôler la pose des tôles de bordé et des varangues"},
            {"time": "16:30", "desc": "Validation des plans d'emménagement de passerelle avec le représentant de la société de classification (Bureau Veritas)"}
        ],
        "companyRole": "Créateur et maître d'œuvre du navire, garant de sa navigabilité, de sa sécurité en mer et de sa rentabilité opérationnelle.",
        "skills": {
            "technical": ["Hydrodynamique navale, théorie du navire et tenue à la mer (seakeeping)", "Calcul de structures navales (efforts de vague, flexion de poutre-navire)", "Règlements des sociétés de classification (Bureau Veritas, DNV, Lloyd's Register) et OMI (SOLAS)", "Logiciels spécialisés de CAO et d'hydrodynamique navale"],
            "human": ["Passion viscérale pour le monde maritime", "Sens des responsabilités humaines immenses face aux périls de la mer", "Capacité à concilier des contraintes techniques contradictoires (poids, vitesse, habitabilité)", "Leadership de grands projets pluridisciplinaires"],
            "tools": ["Maxsurf", "Paramarine", "Rhino 3D (modélisation de carène)", "ANSYS AQWA (hydrodynamique)", "Règlements SOLAS / MARPOL"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +2 / CPGE", "title": "Classes Préparatoires aux Grandes Écoles (Scientifiques)", "desc": "Bases solides en mathématiques, physique et mécanique rationnelle."},
                {"step": "Bac +5 (Diplôme d'Ingénieur)", "title": "Diplôme d'Ingénieur en Architecture Navale / Génie Maritime (ENSTA Bretagne, Centrale Marseille, École Navale)", "desc": "Formation de référence internationale en architecture navale et hydrodynamique."}
            ],
            "schools": [
                {"name": "ENSTA Bretagne (Brest - Formation d'élite en architecture navale) — France", "country": "France", "scope": "France"},
                {"name": "Centrale Méditerranée (Marseille) — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique de Dakar (ESP - Département Génie Mécanique) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Titre d'Architecte naval certifié", "Habilitation d'expert maritime assermenté"]
        },
        "career": {
            "sectors": ["Construction navale commerciale & militaire", "Offshore & Énergies marines renouvelables (éolien flottant)", "Plaisance & Yachting de luxe", "Course au large (voiliers de compétition)"],
            "employerTypes": ["Chantiers navals (Chantiers de l'Atlantique, Naval Group, Piriou)", "Bureaux d'études d'architecture navale", "Sociétés de classification maritimes (Bureau Veritas)"],
            "evolution": ["Directeur de bureau d'études navales", "Directeur de chantier naval", "Armateur ou expert maritime international"],
            "pros": ["Métier d'exception alliant prestige technique et passion de la mer", "Satisfaction monumentale de voir un navire conçu flotter et prendre le large", "Forte demande pour la décarbonation maritime (propulsion vélique)"],
            "cons": ["Lourde responsabilité sur la vie des marins et passagers"]
        },
        "gettingStarted": {
            "beginnerProject": "Modéliser une carène de bateau sous logiciel de modélisation surfacique (ex: Rhino ou Free!Ship) et calculer son déplacement et son volume immergé.",
            "steps": [
                "Tracer le plan de formes (couples, lignes d'eau, sections)",
                "Calculer les hydrostatiques à différentes lignes de flottaison",
                "Vérifier la position du centre de carène par rapport au centre de gravité"
            ],
            "freeResources": ["Free!Ship Plus (logiciel open source d'architecture navale)", "Principles of Naval Architecture (ouvrages SNAME)"]
        },
        "aiImpact": {
            "summary": "L'IA permet d'optimiser automatiquement les formes de carène pour réduire la consommation de carburant de 5 à 10% en simulant des milliers d'états de mer aléatoires.",
            "positiveImpacts": ["Optimisation de la forme du bulbe d'étrave par algorithmes génétiques", "Routage météo prédictif pour navires à propulsion hybride éolienne"],
            "risksAndChallenges": ["La conformité aux critères stricts de stabilité après avarie de l'OMI reste une exigence humaine incontournable"],
            "recommendedSkills": ["Conception navale assistée par algorithmes bio-inspirés"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'architecture navale est un secteur historique et stratégique grâce au Chantier Naval de Dakar (Dakar Marine), l'une des plus grandes infrastructures navales d'Afrique de l'Ouest (forme de radoub de 235m, dock flottant), capable d'accueillir des cargos et bateaux de pêche hauturière.",
            "westAfricaOpportunities": "Besoin massif de concepteurs pour moderniser les pirogues artisanales en embarcations en fibre de verre plus sûres et insubmersibles.",
            "localChampions": ["Chantier Naval de Dakar (Dakar Marine)", "Port Autonome de Dakar (PAD)", "Ateliers Navals du Sénégal"]
        },
        "salary": {
            "france": {"entry": 39000, "mid": 54000, "expert": 78000, "currency": "EUR", "period": "an", "note": "Source : Onisep & baromètres de l'industrie navale"},
            "senegal": {"entry": 700000, "mid": 1400000, "expert": 2600000, "currency": "FCFA", "period": "mois", "note": "Salaires nets dans la construction navale et projets pétroliers offshore à Dakar"}
        },
        "connectedFamilies": ["naval-maritime", "transports-logistique", "energie-renouvelable"],
        "relatedJobs": ["ingenieur-mecanique", "aerodynamicien", "chaudronnier-industriel"],
        "sources": [
            {"organization": "Onisep", "title": "Architecte naval / Navale", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/architecte-naval-navale", "type": "metier"},
            {"organization": "L'Étudiant", "title": "Fiche secteur : Métiers de la mer et du naval", "url": "https://www.letudiant.fr/metiers/secteur/industrie.html", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Plus de 90% du commerce mondial de marchandises voyage par voie maritime sur environ 55 000 navires de commerce conçus par des architectes navals.",
            "pourquoi": "Le transport maritime est le mode de transport le plus économe en énergie par tonne-kilomètre transportée.",
            "a_retenir": "L'architecte naval conçoit les artères flottantes de l'économie mondiale."
        }
    },

    # -----------------------------------------------------------------------
    # 28. MÉCANICIEN DE MAINTENANCE AÉRONAUTIQUE
    # -----------------------------------------------------------------------
    {
        "id": "mecanicien-maintenance-aeronautique",
        "slug": "mecanicien-maintenance-aeronautique",
        "title": "Mécanicien de Maintenance Aéronautique",
        "aliases": ["Mécanicien avion", "Technicien de maintenance aéronefs", "Aircraft Maintenance Engineer (Part-66)"],
        "icon": "✈️",
        "familyId": "industrie-mecanique",
        "domain": "Aéronautique & Spatial",
        "domainId": "aeronautique-spatial-indus",
        "subdomain": "Maintenance aéronautique (MRO) & Moteurs d'avion",
        "shortDescription": "Inspecte, révise, répare et certifie en toute sécurité les systèmes mécaniques, réacteurs et trains d'atterrissage des avions et hélicoptères.",
        "longDescription": "Le mécanicien de maintenance aéronautique détient la vie de centaines de passagers au bout de ses outils. En piste lors des escales ('line maintenance') ou en grand hangar de révision ('base maintenance'), il inspecte les aubes de réacteurs à l'endoscope, remplace les freins en carbone, vérifie les commandes de vol hydrauliques et délivre l'Approbation pour Remise en Service (APRS) sous licence officielle EASA Part-66.",
        "missions": [
            "Effectuer les visites pré-vol, journalières et périodiques d'avions de ligne ou militaires (visites A, C et D)",
            "Inspecter l'état des réacteurs à l'endoscope vidéo (boroscope) pour détecter d'éventuels impacts d'oiseaux",
            "Remplacer et tester les ensembles mécaniques lourds (moteurs, trains d'atterrissage, volets, pompes hydrauliques)",
            "Appliquer scrupuleusement la documentation constructeur officielle (Aircraft Maintenance Manual - AMM)",
            "Délivrer l'Approbation pour Remise en Service (APRS) engageant sa responsabilité pénale et professionnelle"
        ],
        "workEnvironment": ["Hangars de maintenance aéronautique (MRO)", "Pistes d'aéroports par tous les temps", "Travail posté en continu (jour/nuit) pour maintenir les avions en vol"],
        "typicalDay": [
            {"time": "06:00", "desc": "Prise de quart au hangar et vérification des rapports du carnet de bord (Aircraft Technical Log) des avions arrivés la nuit"},
            {"time": "07:30", "desc": "Inspection endoscopique de la turbine haute pression d'un moteur CFM56 sous AMM"},
            {"time": "11:00", "desc": "Remplacement d'un bloc de frein en carbone sur le train d'atterrissage principal"},
            {"time": "13:00", "desc": "Déjeuner avec les techniciens avionique"},
            {"time": "14:30", "desc": "Test de pressurisation du circuit hydraulique à 3 000 PSI et vérification de l'absence de fuite"},
            {"time": "17:30", "desc": "Signature de l'APRS dans le système informatique de maintenance de la compagnie"}
        ],
        "companyRole": "Garant ultime de la navigabilité des avions, autorisant formellement le décollage des aéronefs après vérification complète.",
        "skills": {
            "technical": ["Mécanique des turboréacteurs, turbopropulseurs et structures aéronefs", "Circuits hydrauliques haute pression (Skydrol) et pneumatiques de bord", "Réglementation aéronautique internationale (EASA Part-145, Part-66)", "Anglais technique aéronautique indispensable (toute la doc est en anglais)"],
            "human": ["Rigueur absolue et zéro tolérance pour l'approximation", "Résistance au stress des délais de départ en piste", "Sens aigu de la responsabilité éthique", "Rigueur d'enregistrement des pièces et outils (zéro outil oublié à bord)"],
            "tools": ["Boroscope / Vidéo-endoscope industriel", "Valises d'outillage aéronautique avec inventaire électronique (boîtes à outils contrôlées FOD)", "Bancs hydrauliques mobiles de pressurisation", "Clés dynamométriques d'aviation certifiées"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac Pro", "title": "Bac Pro Aéronautique option Systèmes ou Moteurs", "desc": "Apprentissage des règles d'atelier et de la mécanique aéronautique."},
                {"step": "Bac +2 / Licence Part-66", "title": "BTS Aéronautique ou Mention Complémentaire Aéronautique / Licence EASA Part-66 Catégorie B1", "desc": "Obtention de la licence aéronautique officielle obligatoire pour délivrer l'APRS."}
            ],
            "schools": [
                {"name": "Lycées professionnels et centres de formation aéronautique agréés EASA Part-147 — France", "country": "France", "scope": "France"},
                {"name": "École des Métiers de l'Aéronautique (EMA / Air France Industries) — France", "country": "France", "scope": "France"},
                {"name": "École de l'Air et de l'Aéronautique de Thiès (EAA) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Institut Africain des Métiers de l'Aérien (IAMA) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Licence de Mécanicien de Maintenance d'Aéronefs EASA Part-66 B1.1 (avions à turbines)", "Habilitations de sécurité aéroportuaire (badge rouge)"]
        },
        "career": {
            "sectors": ["Compagnies aériennes régulières et cargo", "Ateliers de révision aéronautique MRO", "Aviation d'affaires et de tourisme", "Aviation militaire et défense"],
            "employerTypes": ["Compagnies aériennes (Air France, Air Sénégal, Emirates)", "Géants du MRO (Air France Industries KLM E&M, Sabena Aerospace)", "Constructeurs (Airbus, Safran)"],
            "evolution": ["Chef d'équipe de maintenance en piste", "Contrôleur de navigabilité bureau technique (CAMO)", "Responsable qualité d'atelier Part-145"],
            "pros": ["Métier prestigieux et passionnant au contact direct des avions de ligne", "Forte demande mondiale dans l'aviation civile", "Rémunération très valorisée avec la licence B1"],
            "cons": ["Travail en extérieur par tous les temps et travail posté de nuit"]
        },
        "gettingStarted": {
            "beginnerProject": "Démonter et remonter un petit moteur thermique de modélisme, régler le jeu des soupapes et consigner chaque étape sur un carnet de maintenance fictif.",
            "steps": [
                "Nettoyer méthodiquement chaque pièce et la repérer",
                "Utiliser le manuel technique officiel pour respecter les couples de serrage",
                "Appliquer les règles FOD (Foreign Object Debris) : compter ses outils avant et après"
            ],
            "freeResources": ["FAA Aviation Maintenance Technician Handbook (téléchargeable gratuitement)", "Réglementations EASA Part-66 en ligne"]
        },
        "aiImpact": {
            "summary": "L'IA analyse les données télémétriques transmises en vol par les réacteurs (ACARS) pour alerter le mécanicien au sol sur la pièce exacte à remplacer avant même que l'avion n'atterrisse.",
            "positiveImpacts": ["Préparation des pièces détachées et outillages avant l'arrivée au parking", "Détection automatique des micro-fissures d'aubes par traitement d'images d'endoscopie"],
            "risksAndChallenges": ["La signature de l'APRS et la vérification visuelle restent sous la responsabilité juridique de l'humain"],
            "recommendedSkills": ["Utilisation de logiciels de maintenance prédictive aéronautique (Airbus Skywise)"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le hub aéroportuaire de l'AIBD (Diass) développe un centre de maintenance aéronautique régional de premier plan pour soutenir la flotte d'Air Sénégal et les avions en transit dans toute l'Afrique de l'Ouest.",
            "westAfricaOpportunities": "Besoin massif de mécaniciens avion licenciés Part-66 / ANACIM pour accompagner la croissance du trafic aérien africain.",
            "localChampions": ["Air Sénégal", "Aéroport International Blaise Diagne (AIBD)", "2AS (Senegal Airport Services)", "Armée de l'Air Sénégalaise"]
        },
        "salary": {
            "france": {"entry": 26000, "mid": 38000, "expert": 54000, "currency": "EUR", "period": "an", "note": "Source : Onisep & baromètres aéronautiques (jusqu'à 65k€ avec licence B1 complète)"},
            "senegal": {"entry": 350000, "mid": 750000, "expert": 1500000, "currency": "FCFA", "period": "mois", "note": "Salaires nets constatés pour mécaniciens avion certifiés à Dakar-AIBD"}
        },
        "connectedFamilies": ["aeronautique-spatial", "transports-logistique"],
        "relatedJobs": ["aerodynamicien", "electromecanicien", "technicien-maintenance-industrielle"],
        "sources": [
            {"organization": "Onisep", "title": "Mécanicien / Mécanicienne d'entretien avion", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/mecanicien-mecanicienne-d-entretien-avion", "type": "metier"},
            {"organization": "L'Étudiant", "title": "Les métiers de l'aéronautique : Mécanicien avion", "url": "https://www.letudiant.fr/metiers/secteur/industrie.html", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Dans l'aviation civile, chaque outil utilisé par un mécanicien est gravé au laser avec son matricule et rangé dans des mousses bicolores sur mesure : si un seul tournevis manque à l'appel lors de l'inventaire final, l'avion n'a pas le droit de décoller.",
            "pourquoi": "Un outil oublié dans un carter de réacteur pourrait détruire le moteur en vol par aspiration (phénomène de FOD - Foreign Object Damage).",
            "a_retenir": "La rigueur absolue du mécanicien aéronautique est la clé du mode de transport le plus sûr au monde."
        }
    },

    # -----------------------------------------------------------------------
    # 29. ACHETEUR INDUSTRIEL
    # -----------------------------------------------------------------------
    {
        "id": "acheteur-industriel",
        "slug": "acheteur-industriel",
        "title": "Acheteur Industriel / Négociateur Achats",
        "aliases": ["Acheteur technique", "Responsable des achats industriels", "Industrial Buyer"],
        "icon": "🛒",
        "familyId": "industrie-mecanique",
        "domain": "Achats Industriels",
        "domainId": "achats-industriels",
        "subdomain": "Sourcing équipements, Matières premières & Négociation fournisseurs",
        "shortDescription": "Sélectionne les fournisseurs de matières premières, composants et machines, négocie les contrats au meilleur coût et sécurise les approvisionnements.",
        "longDescription": "L'acheteur industriel est le stratège des dépenses de l'entreprise. En lien étroit avec le bureau d'études et la production, il source les fournisseurs capables de livrer des aciers, composants électroniques, outillages ou prestations de maintenance respectant scrupuleusement le cahier des charges technique. Il négocie les prix, les délais et les conditions de paiement à l'échelle mondiale pour optimiser les marges.",
        "missions": [
            "Prospecter et évaluer les fournisseurs industriels mondiaux (sourcing local et international)",
            "Rédiger les appels d'offres techniques en collaboration avec les ingénieurs d'études",
            "Négocier fermement les tarifs, les volumes, les délais de livraison et les garanties de pénalités de retard",
            "Contractualiser les accords-cadres et veiller au respect des clauses juridiques et de confidentialité",
            "Évaluer régulièrement la performance des fournisseurs (taux de service OTD, taux de non-conformité PPM)"
        ],
        "workEnvironment": ["Sièges sociaux et usines industrielles", "Déplacements fréquents en audit chez les fournisseurs en France et à l'étranger", "Environnement de bureau avec usage intensif de logiciels ERP"],
        "typicalDay": [
            {"time": "08:30", "desc": "Revue des cours mondiaux des matières premières (acier, cuivre, aluminium, pétrole)"},
            {"time": "10:00", "desc": "Négociation en visioconférence d'un contrat de fourniture de roulements pour l'année à venir"},
            {"time": "12:30", "desc": "Déjeuner de travail avec le directeur financier de l'usine"},
            {"time": "14:00", "desc": "Analyse comparative de 4 réponses à appel d'offres pour l'achat d'un nouveau centre d'usinage 5 axes"},
            {"time": "16:30", "desc": "Validation des commandes dans l'ERP SAP et suivi des livraisons critiques avec la logistique"}
        ],
        "companyRole": "Gestionnaire des coûts extérieurs, contribuant directement à la rentabilité et à la résilience de la chaîne d'approvisionnement.",
        "skills": {
            "technical": ["Techniques de négociation commerciale avancée et gestion des conflits", "Compréhension fine des procédés industriels et lecture de plans techniques", "Droit des contrats commerciaux internationaux (Incoterms, devises, litiges)", "Maîtrise des ERP achats (SAP MM, Oracle Ariba)"],
            "human": ["Force de persuasion et charisme relationnel", "Sens aigu de la diplomatie et du compromis gagnant-gagnant", "Esprit analytique et rigueur financière", "Résistance au stress des pénuries de matières premières"],
            "tools": ["SAP MM / S/4HANA", "Plateformes e-procurement", "Bases de données de cours des matières premières (LME)", "Tableaux de bord d'analyse des dépenses (Spend Analysis)"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +3", "title": "Licence Professionnelle Achats Industriels ou BUT Gestion des Entreprises", "desc": "Fondements du commerce international, de la gestion et de la logistique."},
                {"step": "Bac +5 (Master / Diplôme d'École)", "title": "Master Spécialisé Achats Internationaux (DESMA, MAI) ou Diplôme d'Ingénieur complété par un diplôme d'école de commerce", "desc": "Double compétence technique et commerciale très prisée des grands groupes."}
            ],
            "schools": [
                {"name": "IAE Grenoble (DESMA - Management des Achats) — France", "country": "France", "scope": "France"},
                {"name": "KEDGE Business School (Master MAI) — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique de Dakar (ESP - Département Gestion) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "BEM Management School Dakar — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certifications professionnelles CIPS (Chartered Institute of Procurement & Supply)"]
        },
        "career": {
            "sectors": ["Automobile & Transport", "Aéronautique", "Grande industrie manufacturière", "Chimie & Énergie", "Agroalimentaire"],
            "employerTypes": ["Grandes entreprises industrielles multinationales", "ETI et PME manufacturières", "Centrales d'achats industrielles"],
            "evolution": ["Responsable achats d'une division", "Directeur des achats industriels (CPO)", "Directeur de la supply chain"],
            "pros": ["Poste stratégique au carrefour de la technique, du droit et de la finance", "Rémunération très attractive avec parts variables sur objectifs", "Dimension internationale avec voyages réguliers"],
            "cons": ["Pression constante sur les objectifs de réduction des coûts (savings)"]
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser le tableau comparatif multicritères (matrice de décision pondérée) de 3 devis fournisseurs pour un projet industriel fictif.",
            "steps": [
                "Définir les critères : prix, délai, qualité, solidité financière, démarche RSE",
                "Attribuer des coefficients de pondération",
                "Argumenter le choix final devant un jury"
            ],
            "freeResources": ["CIPS Knowledge Portal", "Revue Décision Achats", "Tutoriels Incoterms 2020"]
        },
        "aiImpact": {
            "summary": "L'IA assiste les acheteurs par la veille prédictive sur la santé financière des fournisseurs et la détection d'opportunités de renégociation de prix sur les catalogues.",
            "positiveImpacts": ["Automatisation de l'analyse comparative des devis complexes", "Alertes précoces sur les risques de faillite d'un sous-traitant"],
            "risksAndChallenges": ["La relation de confiance interpersonnelle et la négociation en face-à-face restent purement humaines"],
            "recommendedSkills": ["Gestion des plateformes d'achats autonomes et sourcing assisté par IA"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'acheteur industriel joue un rôle clé dans la politique de 'Contenu Local' (Local Content) rendue obligatoire dans le secteur pétro-gazier, en formant et sélectionnant des sous-traitants sénégalais compétitifs face aux géants internationaux.",
            "westAfricaOpportunities": "Postes de direction des achats très recherchés dans les groupes cimentiers, miniers et de BTP dans toute la sous-région.",
            "localChampions": ["Petrosen (Comité National de Suivi du Contenu Local)", "SOCOCIM", "Compagnie Sucrière Sénégalaise", "Dangote Cement"]
        },
        "salary": {
            "france": {"entry": 36000, "mid": 48000, "expert": 70000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant"},
            "senegal": {"entry": 550000, "mid": 1100000, "expert": 2100000, "currency": "FCFA", "period": "mois", "note": "Salaires nets constatés pour acheteurs industriels à Dakar"}
        },
        "connectedFamilies": ["banque-finance-assurances", "droit-management"],
        "relatedJobs": ["logisticien-industriel", "responsable-ordonnancement-indus", "ingenieur-commercial-industriel"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Acheteur industriel", "url": "https://www.letudiant.fr/metiers/secteur/industrie/acheteur-industriel-1.html", "type": "metier"},
            {"organization": "Onisep", "title": "Acheteur / Acheteuse industriel", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/acheteur-acheteuse", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Dans une entreprise industrielle classique, les achats de biens et services représentent entre 50% et 70% du chiffre d'affaires total de l'entreprise.",
            "pourquoi": "Chaque pourcentage économisé sur les achats va directement grossir le résultat net sans avoir besoin de fabriquer un produit supplémentaire.",
            "a_retenir": "L'acheteur industriel est le premier créateur de marge de l'usine."
        }
    },

    # -----------------------------------------------------------------------
    # 30. LOGISTICIEN INDUSTRIEL
    # -----------------------------------------------------------------------
    {
        "id": "logisticien-industriel",
        "slug": "logisticien-industriel",
        "title": "Logisticien Industriel / Gestionnaire de Flux",
        "aliases": ["Responsable logistique d'usine", "Supply Chain Coordinator", "Industrial Logistician"],
        "icon": "📦",
        "familyId": "industrie-mecanique",
        "domain": "Logistique Industrielle & Supply Chain",
        "domainId": "logistique-supply-chain-indus",
        "subdomain": "Gestion des stocks, Flux physiques & Approvisionnements",
        "shortDescription": "Organise et synchronise la circulation des matières premières, composants et produits finis pour alimenter les lignes de production sans rupture.",
        "longDescription": "Le logisticien industriel est le maître des flux physiques et informatiques de l'usine. En amont, il coordonne la réception et le stockage des composants ; au cœur de l'atelier, il approvisionne les postes de travail en 'juste-à-temps' par trains de kitting ou chariots autonomes (AGV) ; en aval, il gère l'emballage, le stockage des produits finis et leur expédition chez les clients dans le monde entier.",
        "missions": [
            "Coordonner les réceptions de matières et composants et superviser le déchargement et le contrôle",
            "Optimiser la gestion des stocks de sécurité pour éviter à la fois les ruptures et le sur-stockage coûteux",
            "Organiser l'approvisionnement des lignes de fabrication en flux tendu (Kanban, milk-run)",
            "Superviser les équipes de caristes, magasiniers et préparateurs de commandes",
            "Planifier les expéditions de produits finis avec les transporteurs routiers, maritimes et aériens"
        ],
        "workEnvironment": ["Entrepôts industriels et plateformes logistiques d'usine", "Quais de chargement et ateliers de fabrication", "Bureaux logistiques équipés de WMS et ERP"],
        "typicalDay": [
            {"time": "08:00", "desc": "Point matinal sur les arrivages de camions et vérification des matières premières bloquées en douane"},
            {"time": "09:30", "desc": "Tournée dans le magasin automatique pour vérifier le réapprovisionnement des bacs Kanban des lignes d'assemblage"},
            {"time": "12:30", "desc": "Déjeuner avec les chefs d'équipe logistique"},
            {"time": "14:00", "desc": "Négociation avec un transporteur express pour acheminer d'urgence un moteur de rechange"},
            {"time": "16:30", "desc": "Analyse de la rotation des stocks sous SAP et proposition de déstockage de pièces obsolètes"}
        ],
        "companyRole": "Garant du sang qui irrigue l'usine : sans matières premières acheminées à temps, aucune machine ne peut produire.",
        "skills": {
            "technical": ["Gestion des stocks et méthodes de réapprovisionnement (MRP2, Kanban, FIFO)", "Maîtrise des logiciels de gestion d'entrepôt (WMS) et ERP (SAP WM/MM)", "Réglementation du transport national et international (douanes, matières dangereuses ADR)", "Organisation des flux physiques d'atelier et implantation d'entrepôts"],
            "human": ["Excellente résistance au stress et réactivité face aux imprévus", "Sens de l'organisation et anticipation permanente", "Qualités managériales pour encadrer les équipes de magasiniers", "Capacité à négocier avec les transporteurs"],
            "tools": ["ERP (SAP, Oracle)", "Logiciels WMS (Warehouse Management System)", "Lecteurs de codes-barres / terminaux RFID", "Chariots autoguidés (AGV / AMR)"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +2 (BTS / BUT)", "title": "BTS Gestion des Transports et Logistique Associée (GTLA) ou BUT Management de la Logistique et des Transports (MLT)", "desc": "Techniques d'exploitation des transports, gestion d'entrepôt et douanes."},
                {"step": "Bac +5 (Master / Diplôme d'École)", "title": "Master en Management de la Supply Chain ou Diplôme d'École de Commerce/Ingénieur", "desc": "Stratégie globale de chaîne logistique, optimisation des réseaux et logistique verte."}
            ],
            "schools": [
                {"name": "IUT et Universités préparant au BUT MLT / Masters Supply Chain — France", "country": "France", "scope": "France"},
                {"name": "Institut Supérieur de Transport et Logistique (Groupe Promotrans / AFT-IFTIM) — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique de Dakar (ESP - Département Gestion) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Institut Africain de Management (IAM Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certifications APICS (CPIM - Certified in Production and Inventory Management)"]
        },
        "career": {
            "sectors": ["Tous secteurs industriels", "Agroalimentaire & Distribution", "Automobile & Aéronautique", "Commerce en ligne & Logistique contractuelle"],
            "employerTypes": ["Usines de production", "Prestataires logistiques internationaux (DHL, Bolloré Logistics, Geodis)", "Grandes plateformes de distribution"],
            "evolution": ["Responsable supply chain de site", "Directeur de plateforme logistique", "Directeur supply chain groupe"],
            "pros": ["Métier d'action très concret et au cœur du commerce mondial", "Forte employabilité sur tout le territoire national et international", "Opportunités d'encadrement dès le début de carrière"],
            "cons": ["Dépendance aux aléas extérieurs (grèves de transporteurs, intempéries, retards maritimes)"]
        },
        "gettingStarted": {
            "beginnerProject": "Organiser l'inventaire et le réapprovisionnement d'un petit stock (ex: outillage d'atelier ou consommables de bureau) avec calcul du point de commande et stock de sécurité sous Excel.",
            "steps": [
                "Classer les articles selon la méthode ABC (Loi de Pareto)",
                "Calculer la formule de Wilson pour déterminer la quantité économique de commande",
                "Mettre en place un système visuel d'alerte de réapprovisionnement"
            ],
            "freeResources": ["Guide de gestion de stock de l'AFNOR", "Tutoriels supply chain de l'Association Française pour la Logistique (ASLOG)"]
        },
        "aiImpact": {
            "summary": "L'IA révolutionne la logistique industrielle par la prévision de la demande par machine learning et le pilotage de flottes de robots mobiles autonomes (AMR) dans les usines.",
            "positiveImpacts": ["Traçabilité en temps réel par balises IoT et RFID", "Optimisation dynamique des tournées de livraison et des chargements de camions"],
            "risksAndChallenges": ["Nécessité de gérer la transition vers des entrepôts automatisés tout en accompagnant les équipes"],
            "recommendedSkills": ["Pilotage de systèmes logistiques automatisés et analyse de flux par IA"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le logisticien industriel est au cœur du hub logistique de Diamniadio et du Port Autonome de Dakar, assurant le dédouanement et l'acheminement des marchandises vers le Mali et l'hinterland ouest-africain.",
            "westAfricaOpportunities": "Développement massif des corridors logistiques Dakar-Bamako et Abidjan-Ouagadougou.",
            "localChampions": ["Bolloré Transport & Logistics Sénégal (AGL)", "Port Autonome de Dakar", "DP World Dakar", "Grands Moulins de Dakar"]
        },
        "salary": {
            "france": {"entry": 27000, "mid": 38000, "expert": 55000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant & Onisep"},
            "senegal": {"entry": 350000, "mid": 750000, "expert": 1500000, "currency": "FCFA", "period": "mois", "note": "Salaires nets constatés dans la logistique industrielle et portuaire à Dakar"}
        },
        "connectedFamilies": ["transports-logistique", "commerce-vente"],
        "relatedJobs": ["acheteur-industriel", "responsable-ordonnancement-indus", "conducteur-ligne-production"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Logisticien", "url": "https://www.letudiant.fr/metiers/secteur/industrie/logisticien.html", "type": "metier"},
            {"organization": "Onisep", "title": "Logisticien / Logisticienne", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/logisticien-logisticienne", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Dans l'industrie automobile moderne, les pièces arrivent sur la ligne de montage seulement 2 heures avant d'être vissées sur la voiture (principe du Juste-à-Temps).",
            "pourquoi": "Stocker des carrosseries ou des moteurs immobiliserait des millions d'euros et des kilomètres carrés d'entrepôts inutiles.",
            "a_retenir": "Le logisticien fait circuler la matière avec une précision d'horloger suisse."
        }
    },

    # -----------------------------------------------------------------------
    # 31. RESPONSABLE ORDONNANCEMENT & PLANIFICATION
    # -----------------------------------------------------------------------
    {
        "id": "responsable-ordonnancement-indus",
        "slug": "responsable-ordonnancement-indus",
        "title": "Responsable Ordonnancement & Planification",
        "aliases": ["Ordonnanceur industriel", "Planificateur de production", "Master Scheduler"],
        "icon": "🗓️",
        "familyId": "industrie-mecanique",
        "domain": "Planification & Ordonnancement",
        "domainId": "planification-ordonnancement-indus",
        "subdomain": "Planning de production, Charges / Capacités & PIC / PDP",
        "shortDescription": "Élabore les plannings de production des ateliers, équilibre les charges et les capacités des machines et garantit les dates de livraison promises aux clients.",
        "longDescription": "Le responsable d'ordonnancement est le régulateur temporel de l'usine. Situé à la croisée des commandes commerciales et des capacités réelles de l'outil de production, il traduit les commandes clients en ordres de fabrication (OF). Il jongle avec les temps de changement d'outils, les disponibilités de matières premières et les contraintes de maintenance pour planifier chaque heure de chaque machine avec une efficience maximale.",
        "missions": [
            "Élaborer le Plan Industriel et Commercial (PIC) et le Plan Directeur de Production (PDP)",
            "Calculer les charges de travail et les capacités machines pour identifier les goulets d'étranglement",
            "Lancer et ordonnancer les ordres de fabrication (OF) au jour le jour pour les chefs d'atelier",
            "Réajuster immédiatement le planning en cas d'aléa (panne machine, retard de matière, commande urgente)",
            "Mesurer et analyser le taux de respect du planning de production et le taux de service client (OTIF)"
        ],
        "workEnvironment": ["Bureaux d'ordonnancement intégrés à l'usine", "Travail sur double ou triple écran avec progiciels ERP et GPAO", "Échanges continus avec la production et le service commercial"],
        "typicalDay": [
            {"time": "08:15", "desc": "Revue des fabrications de la veille et point sur l'avancement des ordres de fabrication prioritaires"},
            {"time": "09:30", "desc": "Réajustement du planning d'une ligne d'extrusion suite à l'arrêt imprévu d'un centre d'usinage"},
            {"time": "12:30", "desc": "Déjeuner avec les ingénieurs de production"},
            {"time": "14:00", "desc": "Réunion hebdomadaire de planification avec les commerciaux pour valider les délais de nouvelles commandes"},
            {"time": "16:30", "desc": "Calcul du plan de charge à 4 semaines sur l'ERP et lancement des approvisionnements de matières"}
        ],
        "companyRole": "Maître du temps industriel, garantissant que chaque commande client sort de l'usine à la date promise au meilleur coût de fonctionnement.",
        "skills": {
            "technical": ["Méthodes de planification industrielle (PIC, PDP, CBN / MRP, ordonnancement à capacité finie)", "Maîtrise approfondie des modules de production des ERP (SAP PP, Microsoft Dynamics NAV/BC)", "Connaissance pratique des cadences et contraintes techniques des ateliers", "Maîtrise experte d'Excel avancé et des outils de modélisation de plannings"],
            "human": ["Calme olympien et résistance aux pressions commerciales et d'atelier", "Esprit mathématique, logique et sens des priorités", "Aisance relationnelle pour arbitrer entre des services aux intérêts divergents", "Rigueur et minutie d'organisation"],
            "tools": ["ERP (SAP PP, Infor M3)", "Logiciels d'ordonnancement à capacité finie (Preactor / Opcenter APS, Ortems)", "Tableaux de bord Excel / Power BI"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +2 / BUT", "title": "BUT Gestion Logistique et Transport ou BUT Qualité, Logistique Industrielle et Organisation (QLIO)", "desc": "Bases de gestion de production, ordonnancement et GPAO."},
                {"step": "Bac +5 (Master / Diplôme d'Ingénieur)", "title": "Master Génie Industriel / Gestion de Production ou Diplôme d'Ingénieur", "desc": "Optimisation des flux, recherche opérationnelle et planification avancée (Supply Chain Management)."}
            ],
            "schools": [
                {"name": "IUT et Universités préparant au BUT QLIO / Masters Génie Industriel — France", "country": "France", "scope": "France"},
                {"name": "INSA Lyon / Strasbourg (Génie Industriel) — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique de Dakar (ESP - Département Gestion) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Polytechnique de Thiès (EPT) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certifications internationales APICS (CPIM - Certified in Production and Inventory Management)"]
        },
        "career": {
            "sectors": ["Tous secteurs industriels manufacturiers (Automobile, Aéronautique, Métallurgie, Chimie, Agroalimentaire)"],
            "employerTypes": ["Usines de production de moyenne et grande série", "PME industrielles", "Grands groupes manufacturiers"],
            "evolution": ["Responsable planification et ordonnancement d'usine", "Responsable supply chain de site", "Directeur des opérations de production"],
            "pros": ["Rôle pivot au cœur de la stratégie industrielle de l'entreprise", "Forte demande sur le marché de l'emploi", "Poste très intellectuel et stimulant combinant chiffres et relations humaines"],
            "cons": ["Pression constante des commerciaux voulant livrer leurs clients en priorité"]
        },
        "gettingStarted": {
            "beginnerProject": "Construire sous tableur Excel un diagramme de Gantt dynamique et une matrice d'équilibrage de charge pour 5 machines et 10 commandes avec dates de livraison imposées.",
            "steps": [
                "Déterminer les durées opératoires et les temps de préparation (setup)",
                "Calculer les dates de début au plus tôt et au plus tard",
                "Lisser la charge pour éliminer les surcharges supérieures à 100% de la capacité"
            ],
            "freeResources": ["Association Française de Gestion Industrielle (FGI)", "Tutoriels APICS Supply Chain Planning"]
        },
        "aiImpact": {
            "summary": "L'IA permet l'ordonnancement en temps réel sous contraintes multiples par algorithmes génétiques et recherche opérationnelle accélérée.",
            "positiveImpacts": ["Recalcul instantané d'un planning optimal de 500 machines en quelques secondes après une panne", "Prévision des risques de retard par apprentissage sur l'historique des temps réels de fabrication"],
            "risksAndChallenges": ["La validation finale et l'arbitrage humain des priorités clients restent indispensables"],
            "recommendedSkills": ["Utilisation d'outils APS (Advanced Planning & Scheduling) assistés par algorithmes d'optimisation"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'ordonnanceur industriel est la clé de voûte des usines de transformation agro-industrielle (huileries, biscuiteries, laiteries) où il faut synchroniser les récoltes saisonnières d'arachide ou de mangue avec les cadences d'usine.",
            "westAfricaOpportunities": "Postes clés dans les grandes filiales industrielles de toute l'Afrique de l'Ouest.",
            "localChampions": ["Patisen", "Compagnie Sucrière Sénégalaise", "SENICO", "Grands Moulins de Dakar"]
        },
        "salary": {
            "france": {"entry": 28000, "mid": 38000, "expert": 52000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant & baromètres de gestion industrielle"},
            "senegal": {"entry": 350000, "mid": 700000, "expert": 1300000, "currency": "FCFA", "period": "mois", "note": "Salaires nets dans les usines de production à Dakar/Sandiara"}
        },
        "connectedFamilies": ["transports-logistique", "droit-management"],
        "relatedJobs": ["ingenieur-de-production", "logisticien-industriel", "acheteur-industriel"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Responsable d'ordonnancement", "url": "https://www.letudiant.fr/metiers/secteur/industrie/responsable-d-ordonnancement.html", "type": "metier"},
            {"organization": "Onisep", "title": "Technicien / Technicienne en ordonnancement", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/technicien-technicienne-en-ordonnancement", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Dans une usine de pièces mécaniques complexes, ordonnancer 20 machines réalisant 100 opérations différentes génère un nombre de combinaisons mathématiques possibles supérieur au nombre d'atomes dans l'univers connu.",
            "pourquoi": "Le responsable d'ordonnancement utilise la recherche opérationnelle pour trouver la solution optimale parmi ces milliards d'agencements possibles.",
            "a_retenir": "L'ordonnanceur transforme le chaos des commandes en symphonie de production."
        }
    },

    # -----------------------------------------------------------------------
    # 32. INGÉNIEUR COMMERCIAL INDUSTRIEL
    # -----------------------------------------------------------------------
    {
        "id": "ingenieur-commercial-industriel",
        "slug": "ingenieur-commercial-industriel",
        "title": "Ingénieur Commercial / Ingénieur d'Affaires Industrielles",
        "aliases": ["Ingénieur technico-commercial", "Ingénieur commercial B2B", "Sales Engineer"],
        "icon": "💼",
        "familyId": "industrie-mecanique",
        "domain": "Commerce & Ingénierie Commerciale",
        "domainId": "commerce-technico-commercial-indus",
        "subdomain": "Vente de solutions industrielles complexes & B2B",
        "shortDescription": "Conseille et vend des solutions techniques complexes, machines spéciales et équipements industriels de haute technologie aux entreprises.",
        "longDescription": "L'ingénieur commercial industriel possède une double casquette rare et précieuse : il parle le langage technique des ingénieurs d'études et le langage financier des directeurs d'usine. Il analyse les besoins de production des clients, élabore des propositions techniques et financières sur mesure chiffrées en millions d'euros, négocie les contrats de vente et accompagne le client jusqu'à la mise en service.",
        "missions": [
            "Prospecter de nouveaux clients industriels et développer le portefeuille d'affaires",
            "Analyser les cahiers des charges techniques clients et réaliser les études de faisabilité avant-vente",
            "Coordonner le chiffrage technique et financier des solutions avec les bureaux d'études et les méthodes",
            "Présenter et soutenir l'offre technique et commerciale devant les comités de direction clients",
            "Négocier les conditions contractuelles, les jalons de paiement et superviser le déroulement du projet"
        ],
        "workEnvironment": ["Bureaux d'ingénierie et constructeurs de biens d'équipement", "Déplacements fréquents chez les clients industriels en France et à l'international", "Événements et salons professionnels spécialisés (Global Industrie, Hannover Messe)"],
        "typicalDay": [
            {"time": "08:30", "desc": "Préparation de la soutenance commerciale d'une ligne d'assemblage robotisée de 2,5 millions d'euros"},
            {"time": "10:30", "desc": "Réunion technique avec le bureau d'études pour valider le coût des outillages sur mesure"},
            {"time": "12:30", "desc": "Déjeuner d'affaires avec le directeur d'usine d'un client grand compte"},
            {"time": "14:30", "desc": "Visite d'atelier client pour relever sur place les contraintes d'encombrement au sol d'une future machine"},
            {"time": "17:00", "desc": "Mise à jour du CRM (Salesforce) et calcul des prévisions de chiffre d'affaires trimestriel"}
        ],
        "companyRole": "Apporteur d'affaires stratégique de l'entreprise industrielle, transformant l'expertise technique interne en contrats rentables.",
        "skills": {
            "technical": ["Connaissance approfondie des technologies industrielles (mécanique, automatisme, robotique, électricité)", "Chiffrage de projets industriels complexes et calcul de ROI pour le client", "Techniques de vente consultative B2B et négociation de grands comptes", "Droit des contrats de vente d'équipements industriels"],
            "human": ["Excellente écoute et capacité de persuasion naturelle", "Aisance relationnelle à tous les niveaux hiérarchiques", "Persévérance sur des cycles de vente longs (6 à 18 mois)", "Dynamisme, autonomie et enthousiasme"],
            "tools": ["CRM (Salesforce, HubSpot)", "Logiciels de devis et configurateurs de produits industriels (CPQ)", "Outils de présentation commerciale percutante"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +2 / BUT", "title": "BUT Génie Mécanique ou BUT GEII ou BTS CRSA", "desc": "Socle technique obligatoire pour comprendre les machines."},
                {"step": "Bac +5 (Master / Diplôme d'École)", "title": "Diplôme d'Ingénieur complété par un Master en Commerce B2B ou Master Ingénierie d'Affaires", "desc": "Double compétence ingénieur-commerciale très recherchée sur le marché."}
            ],
            "schools": [
                {"name": "Arts et Métiers ENSAM / INSA — France", "country": "France", "scope": "France"},
                {"name": "ESTA Belfort (École supérieure des technologies et des affaires) — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique de Dakar (ESP - UCAD) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "BEM Management School Dakar — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certifications professionnelles en négociation grands comptes (Miller Heiman, SPIN Selling)"]
        },
        "career": {
            "sectors": ["Machines spéciales & Robotique", "Énergie & Électrotechnique (Schneider, Siemens)", "Aéronautique & Défense", "Logiciels industriels (CAO, ERP, MES)", "Chimie & Procédés"],
            "employerTypes": ["Constructeurs d'équipements industriels", "Éditeurs de logiciels industriels", "Entreprises d'ingénierie et de conseil en technologies"],
            "evolution": ["Responsable des ventes régionales", "Directeur commercial industriel", "Directeur général de filiale"],
            "pros": ["Rémunération parmi les plus élevées de l'industrie (salaire fixe + commissions déplafonnées)", "Grande liberté d'action et autonomie", "Métier passionnant alliant technique de pointe et relations humaines"],
            "cons": ["Pression permanente sur les objectifs de chiffre d'affaires, déplacements fréquents"]
        },
        "gettingStarted": {
            "beginnerProject": "Construire un pitch commercial de 5 minutes et un argumentaire de vente chiffré pour convaincre un directeur d'usine d'acheter un robot collaboratif réduisant les TMS.",
            "steps": [
                "Structurer l'argumentaire selon la méthode CAP (Caractéristiques, Avantages, Preuves)",
                "Calculer le temps de retour sur investissement (ROI en mois)",
                "Anticiper 3 objections majeures du client et préparer les réponses"
            ],
            "freeResources": ["Livres de référence SPIN Selling (Neil Rackham)", "Revue Action Commerciale"]
        },
        "aiImpact": {
            "summary": "L'IA assiste l'ingénieur commercial par la génération automatique de propositions techniques personnalisées et l'analyse prédictive des intentions d'achat des industriels.",
            "positiveImpacts": ["Chiffrage ultra-rapide d'équipements complexes par configurateur intelligent", "Détection automatique d'appels d'offres publics et privés pertinents"],
            "risksAndChallenges": ["La signature de contrats à plusieurs millions d'euros repose à 100% sur la confiance humaine"],
            "recommendedSkills": ["Utilisation d'outils de prospection intelligente et de vente augmentée"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les ingénieurs commerciaux industriels sont très recherchés par les concessionnaires de machines agricoles, de groupes électrogènes (Caterpillar/Tractafric, SDMO) et d'équipements de traitement d'eau pour remporter les appels d'offres étatiques et privés.",
            "westAfricaOpportunities": "Rémunérations très attractives dans toute l'Afrique de l'Ouest pour les profils bilingues capables de vendre des solutions industrielles aux grands chantiers miniers et pétroliers.",
            "localChampions": ["Tractafric Equipment Sénégal", "Manutention Africaine (JA Delmas)", "Sop Senegalaise d'Outils et de Pieces", "BIA Sénégal"]
        },
        "salary": {
            "france": {"entry": 40000, "mid": 60000, "expert": 90000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant (fixe + variable pouvant dépasser 100k€ pour experts)"},
            "senegal": {"entry": 650000, "mid": 1400000, "expert": 2800000, "currency": "FCFA", "period": "mois", "note": "Salaires nets constatés (fixe + commissions) dans la vente d'équipements industriels lourds"}
        },
        "connectedFamilies": ["commerce-vente", "droit-management"],
        "relatedJobs": ["acheteur-industriel", "ingenieur-mecanique", "directeur-site-industriel"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Ingénieur commercial", "url": "https://www.letudiant.fr/metiers/secteur/industrie/ingenieur-e-commercial-e.html", "type": "metier"},
            {"organization": "Onisep", "title": "Ingénieur / Ingénieure technico-commercial", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/ingenieur-ingenieure-technico-commercial-technico-commerciale", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Dans la vente d'équipements industriels complexes, un seul contrat négocié par un ingénieur d'affaires peut dépasser les 10 millions d'euros et mobiliser l'usine pendant plus de 18 mois de travail.",
            "pourquoi": "Le client n'achète pas un simple produit sur étagère : il achète une solution sur mesure dont dépend la survie de sa propre production.",
            "a_retenir": "L'ingénieur commercial industriel est le moteur qui alimente le carnet de commandes de l'usine."
        }
    },

    # -----------------------------------------------------------------------
    # 33. INGÉNIEUR R&D INDUSTRIEL
    # -----------------------------------------------------------------------
    {
        "id": "ingenieur-rd-industriel",
        "slug": "ingenieur-rd-industriel",
        "title": "Ingénieur R&D / Recherche & Développement Industrielle",
        "aliases": ["Ingénieur recherche et développement", "Ingénieur innovation industrielle", "R&D Engineer"],
        "icon": "🔬",
        "familyId": "industrie-mecanique",
        "domain": "Recherche & Développement",
        "domainId": "rd-recherche-industrielle",
        "subdomain": "Innovation technologique, Nouveaux matériaux & Ruptures",
        "shortDescription": "Invente et met au point les technologies, matériaux et produits industriels de demain pour anticiper les besoins du marché et déposer des brevets.",
        "longDescription": "L'ingénieur R&D explore le futur de l'industrie. Au sein des laboratoires d'entreprises et centres de recherche appliquée, il imagine les ruptures technologiques : nouveaux alliages métalliques plus légers, batteries de nouvelle génération, moteurs électriques sans terres rares, polymères recyclables à l'infini. Il conçoit des preuves de concept, teste des prototypes de rupture et protège les innovations par le dépôt de brevets industriels.",
        "missions": [
            "Conduire des recherches appliquées pour lever des verrous scientifiques et technologiques",
            "Concevoir et tester des démonstrateurs et prototypes de rupture en laboratoire",
            "Réaliser une veille technologique et scientifique mondiale permanente (brevets, publications scientifiques)",
            "Déposer et défendre des brevets d'invention en collaboration avec les juristes en propriété industrielle",
            "Piloter des projets de recherche collaboratifs avec des universités et centres de recherche publics (CNRS, CEA)"
        ],
        "workEnvironment": ["Centres de recherche et développement (R&D)", "Laboratoires d'essais technologiques avancés", "Environnement stimulant dédié à la créativité et à l'innovation"],
        "typicalDay": [
            {"time": "08:30", "desc": "Veille scientifique sur les dernières publications de la base brevets de l'INPI et de l'EPO"},
            {"time": "10:00", "desc": "Expérimentation en laboratoire sur le vieillissement thermique accéléré d'un nouveau composite biosourcé"},
            {"time": "12:30", "desc": "Déjeuner d'échanges avec des chercheurs universitaires invités"},
            {"time": "14:00", "desc": "Analyse au microscope électronique à balayage (MEB) des micro-structures de fracture après essai de traction"},
            {"time": "16:30", "desc": "Rédaction d'une demande de brevet international avec le cabinet de conseil en propriété intellectuelle"}
        ],
        "companyRole": "Pionnier scientifique assurant l'avance technologique et la compétitivité future de l'entreprise sur les 10 prochaines années.",
        "skills": {
            "technical": ["Démarche scientifique expérimentale rigoureuse et protocole d'essais", "Science des matériaux avancée (métallurgie, nanomatériaux, polymères, composites)", "Propriété intellectuelle et rédaction de brevets industriels", "Modélisation numérique et traitement statistique de données expérimentales"],
            "human": ["Créativité intellectuelle et curiosité sans limites", "Patience et persévérance face aux échecs expérimentaux", "Rigueur méthodologique et esprit critique", "Capacité à transformer un concept théorique en produit industriel"],
            "tools": ["Instruments de caractérisation des matériaux (MEB, diffraction X, spectromètre)", "Bancs d'essais mécaniques et thermiques", "Logiciels de gestion de brevets (Orbit, Espacenet)", "Logiciels de modélisation scientifique (MATLAB, Python)"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +5 (Diplôme d'Ingénieur / Master Recherche)", "title": "Diplôme d'Ingénieur de Grande École ou Master Sciences de l'Ingénieur / Matériaux", "desc": "Fondements scientifiques solides en physique, chimie et mécanique."},
                {"step": "Bac +8 (Doctorat / Ph.D.)", "title": "Doctorat en Sciences de l'Ingénieur (souvent en thèse CIFRE en entreprise)", "desc": "Spécialisation d'excellence dans un domaine de recherche appliquée de pointe."}
            ],
            "schools": [
                {"name": "École Polytechnique (Institut Polytechnique de Paris) — France", "country": "France", "scope": "France"},
                {"name": "ESPCI Paris / Chimie ParisTech / Arts et Métiers — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique de Dakar (ESP - UCAD) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Université Amadou Mahtar Mbow (UAM Diamniadio) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Thèse de Doctorat en Sciences industrielles", "Certifications en Propriété Intellectuelle (CEIPI)"]
        },
        "career": {
            "sectors": ["Aéronautique & Spatial", "Automobile (Véhicules autonomes, hydrogène)", "Électronique & Semi-conducteurs", "Chimie & Matériaux innovants", "Énergie & Nucléaire"],
            "employerTypes": ["Grands centres de R&D d'entreprises mondiales", "Instituts de recherche technologique (IRT, CEA, CNRS)", "Start-ups technologiques de rupture (DeepTech)"],
            "evolution": ["Chef de projet R&D", "Directeur de la recherche et de l'innovation / CTO", "Expert scientifique émérite de groupe industriel"],
            "pros": ["Liberté de recherche et d'exploration scientifique", "Fierté d'inventer des technologies qui marqueront l'histoire", "Reconnaissance par les brevets et les publications"],
            "cons": ["Cycles de recherche longs pouvant aboutir à des impasses technologiques"]
        },
        "gettingStarted": {
            "beginnerProject": "Explorer la base de brevets gratuite Espacenet de l'Office Européen des Brevets pour analyser la dernière innovation brevetée par un grand groupe industriel dans le domaine des batteries.",
            "steps": [
                "Rechercher un brevet par mot-clé technologique",
                "Lire le texte des 'revendications' (claims) définissant la nouveauté",
                "Identifier le problème technique que le brevet résout"
            ],
            "freeResources": ["Espacenet (Office Européen des Brevets)", "Google Patents", "Coursera Introduction to Patent Law"]
        },
        "aiImpact": {
            "summary": "L'IA générative scientifique accélère la découverte de nouveaux matériaux (matériaux découverts par IA) et la formulation de molécules en quelques jours au lieu de plusieurs décennies.",
            "positiveImpacts": ["Exploration prédictive de millions d'alliages métalliques stables", "Synthèse automatique de milliers d'articles scientifiques par des agents d'IA"],
            "risksAndChallenges": ["La synthèse en laboratoire et la validation expérimentale physique restent indispensables"],
            "recommendedSkills": ["Utilisation de modèles d'IA pour la découverte de matériaux (Material Informatics)"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la R&D industrielle prend de l'ampleur autour du Pôle Urbain de Diamniadio et des laboratoires de l'ESP/UAM, notamment pour la valorisation des biomasses locales (typha, coques d'arachide en biocarburants) et des matériaux de construction géopolymères durables.",
            "westAfricaOpportunities": "Recherche appliquée dynamique dans les technologies solaires tropicalisées et l'agro-transformation locale.",
            "localChampions": ["Centre National de Recherches Agronomiques (ISRA)", "Cités des Savoirs de Diamniadio", "Laboratoires R&D des ICS", "Institut Pasteur de Dakar"]
        },
        "salary": {
            "france": {"entry": 40000, "mid": 54000, "expert": 78000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant & baromètres R&D (Crédit Impôt Recherche)"},
            "senegal": {"entry": 650000, "mid": 1300000, "expert": 2400000, "currency": "FCFA", "period": "mois", "note": "Salaires nets dans les centres de recherche appliquée et grands projets industriels"}
        },
        "connectedFamilies": ["sciences-biotech", "numerique-ia", "environnement-developpement-durable"],
        "relatedJobs": ["ingenieur-calcul", "ingenieur-mecanique", "ingenieur-fabrication-additive"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Ingénieur R&D", "url": "https://www.letudiant.fr/metiers/secteur/industrie/ingenieur-de-recherche-developpement-2.html", "type": "metier"},
            {"organization": "Onisep", "title": "Ingénieur / Ingénieure recherche et développement", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/ingenieur-ingenieure-recherche-et-developpement-en-industrie", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En 2023, plus de 3,5 millions de demandes de brevets ont été déposées dans le monde par les ingénieurs R&D, l'Asie et l'Europe représentant la majorité des innovations industrielles.",
            "pourquoi": "Un seul brevet de rupture bien protégé peut assurer le monopole et la rentabilité d'une entreprise industrielle pendant 20 ans.",
            "a_retenir": "L'ingénieur R&D transforme les découvertes de la science en richesse industrielle."
        }
    },

    # -----------------------------------------------------------------------
    # 34. TECHNICIEN JUMEAU NUMÉRIQUE
    # -----------------------------------------------------------------------
    {
        "id": "technicien-jumeau-numerique",
        "slug": "technicien-jumeau-numerique",
        "title": "Technicien Jumeau Numérique / Virtual Commissioning",
        "aliases": ["Technicien digital twin", "Spécialiste simulation usine 4.0", "Virtual Commissioning Technician"],
        "icon": "🥽",
        "familyId": "industrie-mecanique",
        "domain": "Jumeau Numérique & Simulation",
        "domainId": "jumeau-numerique-simulation-indus",
        "subdomain": "Jumeau numérique, Virtual commissioning & Modélisation 3D temps réel",
        "shortDescription": "Crée la réplique virtuelle interactive en 3D d'une machine ou d'une usine entière pour tester les programmes d'automatisme et anticiper les pannes.",
        "longDescription": "Le technicien jumeau numérique est un acteur central de l'Industrie 4.0. Il connecte la maquette CAO 3D d'une ligne de fabrication au programme réel de l'automate industriel (virtual commissioning). Il peut ainsi tester virtuellement tout le fonctionnement de l'usine avant même qu'elle ne soit construite, corriger les bugs sans risque de casse mécanique et surveiller en temps réel la santé de l'usine réelle grâce aux flux de données IoT.",
        "missions": [
            "Construire le modèle numérique 3D cinématique et dynamique des machines sous logiciels de jumeau numérique",
            "Connecter le modèle virtuel aux automates réels ou émulés via des protocoles industriels (OPC-UA, SIMIT)",
            "Valider virtuellement les trajectoires des robots et les cycles de fabrication avant la construction physique",
            "Former les opérateurs d'atelier en réalité virtuelle ou augmentée sur la réplique numérique exacte de l'usine",
            "Alimenter le jumeau numérique avec les données réelles des capteurs d'usine pour la maintenance prédictive"
        ],
        "workEnvironment": ["Bureaux d'ingénierie 4.0", "Salles immersives de réalité virtuelle", "Ateliers d'intégration de systèmes industriels"],
        "typicalDay": [
            {"time": "08:30", "desc": "Importation d'une géométrie CAO d'îlot robotisé dans le logiciel de jumeau numérique Siemens Tecnomatix"},
            {"time": "10:30", "desc": "Liaison des variables d'entrées/sorties du modèle 3D avec l'automate Siemens virtuel sous SIMIT"},
            {"time": "12:30", "desc": "Déjeuner avec les automaticiens et développeurs IoT"},
            {"time": "14:00", "desc": "Simulation d'un cycle complet d'emballage en temps réel et détection d'une collision virtuelle de pince"},
            {"time": "16:30", "desc": "Session de formation d'un futur conducteur de ligne équipé d'un casque de réalité virtuelle"}
        ],
        "companyRole": "Pionnier de la simulation intégrale, éliminant les aléas de mise en service sur site et divisant par deux le temps de démarrage des usines.",
        "skills": {
            "technical": ["Logiciels de jumeau numérique (Siemens Tecnomatix Process Simulate, Dassault 3DEXPERIENCE, SIMIT)", "Mise en service virtuelle (Hardware-in-the-Loop - HiL et Software-in-the-Loop - SiL)", "Communication industrielle temps réel (OPC-UA, MQTT, PROFINET)", "Bases d'automatisme et de robotique industrielle"],
            "human": ["Goût prononcé pour les technologies immersives et les jeux de simulation", "Rigueur de modélisation mathématique et physique", "Esprit novateur et curiosité technologique", "Pédagogie pour accompagner les équipes de terrain"],
            "tools": ["Siemens Tecnomatix / SIMIT", "Dassault DELMIA", "Unity Industry / Unreal Engine pour l'industrie", "Casques de réalité virtuelle (Meta Quest Pro, HTC Vive Focus)"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +2 (BTS / BUT)", "title": "BTS Conception et Réalisation de Systèmes Automatiques (CRSA) ou BUT GEII", "desc": "Bases de l'automatisme, de l'électricité et de la CAO industrielle."},
                {"step": "Bac +3 / Licence Professionnelle", "title": "Licence Professionnelle Métiers de l'Industrie 4.0 / Jumeau Numérique ou BUT GMP parcours simulation", "desc": "Spécialisation avancée en modélisation virtuelle, simulation de flux et réalité augmentée."}
            ],
            "schools": [
                {"name": "IUT et Universités proposant des licences Industrie 4.0 — France", "country": "France", "scope": "France"},
                {"name": "Campus des Métiers et des Qualifications Industrie du Futur — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique de Dakar (ESP) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Institut Supérieur d'Enseignement Professionnel (ISEP Diamniadio) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certifications Siemens Digital Enterprise / Tecnomatix Associate"]
        },
        "career": {
            "sectors": ["Automobile & Gigafactories de batteries", "Aéronautique & Spatial", "Agroalimentaire automatisé", "Logistique & Entrepôts connectés"],
            "employerTypes": ["Intégrateurs de systèmes automatisés", "Grands constructeurs industriels", "Sociétés de conseil en transformation digitale (Capgemini, Alten)"],
            "evolution": ["Ingénieur jumeau numérique et simulation", "Chef de projet Industrie 4.0", "Architecte d'usines intelligentes (Smart Factory Lead)"],
            "pros": ["Métier d'avenir ultra-moderne au carrefour du jeu vidéo, de l'IA et de l'usine", "Forte rareté des profils garantissant une très forte attractivité", "Travail dans un univers virtuel captivant"],
            "cons": ["Technologies en évolution permanente nécessitant une auto-formation continue"]
        },
        "gettingStarted": {
            "beginnerProject": "Créer sous Unity ou Blender une simulation physique d'un petit bras robotisé saisissant une pièce sur un tapis roulant déclenché par un capteur virtuel.",
            "steps": [
                "Importer les modèles 3D avec leurs centres de masse",
                "Ajouter les composants de physique (Rigidbodies, colliders)",
                "Scripter le comportement séquentiel en C# ou Python"
            ],
            "freeResources": ["Unity Learn Industry Tutorials", "Documentation Siemens SIMIT en ligne", "Chaînes YouTube sur le Virtual Commissioning"]
        },
        "aiImpact": {
            "summary": "L'IA transforme le jumeau numérique en jumeau cognitif capable de simuler des scénarios d'optimisation prédictive en autonomie complète.",
            "positiveImpacts": ["Prédiction des goulots d'étranglement avant qu'ils ne se produisent dans l'usine réelle", "Apprentissage des trajectoires robots par renforcement virtuel avant déploiement physique"],
            "risksAndChallenges": ["Nécessité de maintenir le jumeau numérique synchronisé avec les modifications physiques d'atelier"],
            "recommendedSkills": ["Intégration d'algorithmes de Machine Learning dans les moteurs de simulation 3D"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la modélisation par jumeau numérique commence à être utilisée pour concevoir les futures unités industrielles de la zone franche de Diamniadio et pour simuler le trafic et la maintenance des rames du TER de Dakar.",
            "westAfricaOpportunities": "Émergence de bureaux de conseil en ingénierie 4.0 à Dakar et Abidjan pour concevoir des usines neuves sans risque d'erreur d'investissement.",
            "localChampions": ["SETER (TER de Dakar)", "Senelec (Projet de réseau intelligent Smart Grid)", "Dakar Tech Hub"]
        },
        "salary": {
            "france": {"entry": 28000, "mid": 38000, "expert": 50000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant"},
            "senegal": {"entry": 350000, "mid": 700000, "expert": 1300000, "currency": "FCFA", "period": "mois", "note": "Salaires nets dans les intégrateurs technologiques et projets de simulation"}
        },
        "connectedFamilies": ["numerique-ia", "aeronautique-spatial"],
        "relatedJobs": ["roboticien-industriel", "automaticien-industriel", "dessinateur-industriel"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Technicien jumeau numérique", "url": "https://www.letudiant.fr/metiers/secteur/industrie/technicien-ou-technicienne-jumeau-numerique.html", "type": "metier"},
            {"organization": "Onisep", "title": "Métiers de l'Industrie 4.0 : La simulation numérique", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/technicien-technicienne-de-bureau-d-etudes-en-mecanique", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Grâce à la mise en service virtuelle par jumeau numérique, le temps passé par les ingénieurs sur le chantier réel pour démarrer une nouvelle ligne d'usine est réduit de 75%.",
            "pourquoi": "Tous les bugs informatiques et les collisions d'axes de robots ont été détectés et corrigés dans l'ordinateur des mois avant la pose de la première brique de l'usine.",
            "a_retenir": "Le jumeau numérique permet de tester l'impossible sans jamais rien casser."
        }
    },

    # -----------------------------------------------------------------------
    # 35. INGÉNIEUR EN FABRICATION ADDITIVE
    # -----------------------------------------------------------------------
    {
        "id": "ingenieur-fabrication-additive",
        "slug": "ingenieur-fabrication-additive",
        "title": "Ingénieur en Fabrication Additive / Impression 3D Métal",
        "aliases": ["Ingénieur impression 3D industrielle", "Concepteur fabrication additive", "Additive Manufacturing Engineer"],
        "icon": "🖨️",
        "familyId": "industrie-mecanique",
        "domain": "Fabrication Additive",
        "domainId": "fabrication-additive-impression3d",
        "subdomain": "Impression 3D métal, Fusion laser sur lit de poudre (SLM) & DfAM",
        "shortDescription": "Conçoit et fabrique des pièces métalliques ou polymères ultra-légères et complexes par empilement de couches de poudre fusionnées au laser.",
        "longDescription": "L'ingénieur en fabrication additive révolutionne la manière de fabriquer les objets. Au lieu de tailler dans un bloc de métal (usinage soustractif), il dépose la matière couche par couche (addition de poudre métallique ou polymère fusionnée par faisceau laser ou faisceau d'électrons). Grâce au Design for Additive Manufacturing (DfAM) et à l'optimisation topologique, il crée des pièces aux formes organiques impossibles à usiner, allégeant les avions et les fusées de dizaines de kilogrammes.",
        "missions": [
            "Concevoir des pièces optimisées selon les règles du DfAM (Design for Additive Manufacturing)",
            "Réaliser l'optimisation topologique pour éliminer la matière inutile tout en conservant la résistance mécanique",
            "Programmer et paramétrer les machines d'impression 3D métal (SLM / DMLS, EBM, WAAM) ou polymères (SLS)",
            "Définir les supports de fabrication et les stratégies de balayage laser pour limiter les déformations thermiques",
            "Piloter les traitements thermiques post-impression (détensionnement, compression isostatique à chaud HIP) et l'usinage de finition"
        ],
        "workEnvironment": ["Centres d'ingénierie aéronautique et spatiale", "Ateliers d'impression 3D industrielle sous atmosphère contrôlée (argon)", "Laboratoires de métallurgie des poudres"],
        "typicalDay": [
            {"time": "08:30", "desc": "Ouverture d'une machine SLM après 24 heures de fabrication laser pour dépoudrer une série d'injecteurs de fusée"},
            {"time": "10:30", "desc": "Session d'optimisation topologique sous Altair Inspire pour alléger un bras de suspension en titane de 45%"},
            {"time": "12:30", "desc": "Déjeuner avec les métallurgistes et ingénieurs calcul"},
            {"time": "14:00", "desc": "Contrôle tomographique aux rayons X d'une pièce imprimée pour vérifier l'absence de porosités internes"},
            {"time": "16:30", "desc": "Lancement d'une nouvelle production de pièces en superalliage Inconel 718 pour turbine à gaz"}
        ],
        "companyRole": "Rénovateur des procédés manufacturiers, brisant les limites de la géométrie traditionnelle pour créer les pièces les plus légères et performantes de l'industrie.",
        "skills": {
            "technical": ["Conception orientée fabrication additive (DfAM) et optimisation topologique", "Métallurgie des poudres et procédés laser (SLM, DMLS, SLS, WAAM)", "Gestion des contraintes thermiques résiduelles et des supports de fabrication", "Contrôle non destructif tomographique et post-traitement d'usinage"],
            "human": ["Créativité géométrique hors des schémas conventionnels", "Rigueur expérimentale et scientifique", "Curiosité pour les nouveaux matériaux", "Capacité à convaincre les concepteurs traditionnels"],
            "tools": ["Altair Inspire / OptiStruct", "Materialise Magics", "EOS Print / SLM Solutions", "Siemens NX Additive Manufacturing", "Imprimantes 3D métal professionnelles (EOS, SLM Solutions, Trumpf)"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +2 / BUT", "title": "BUT Génie Mécanique et Productique ou BUT Science et Génie des Matériaux", "desc": "Bases de résistance des matériaux, métallurgie et CAO."},
                {"step": "Bac +5 (Diplôme d'Ingénieur / Master)", "title": "Diplôme d'Ingénieur en Matériaux, Mécanique ou Génie Industriel avec spécialisation Fabrication Additive", "desc": "Conception avancée DfAM, physique des lasers et caractérisation métallurgique des poudres."}
            ],
            "schools": [
                {"name": "Arts et Métiers ENSAM (Chaire Fabrication Additive) — France", "country": "France", "scope": "France"},
                {"name": "École des Mines de Paris / Mines Saint-Étienne — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique de Dakar (ESP) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Université Amadou Mahtar Mbow (UAM Diamniadio) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certifications éditeurs de logiciels DfAM (Materialise Magics Certified Professional)"]
        },
        "career": {
            "sectors": ["Aéronautique & Spatial (pièces de moteurs, satellites)", "Médical (implants orthopédiques et dentaires sur mesure)", "Sport automobile & F1", "Défense & Énergie", "Outillage industriel"],
            "employerTypes": ["Constructeurs aérospatiaux (ArianeGroup, Safran, Airbus)", "Fabricants d'implants médicaux", "Centres de sous-traitance en fabrication additive"],
            "evolution": ["Responsable du pôle fabrication additive", "Directeur technique matériaux et procédés avancés", "Consultant expert international en DfAM"],
            "pros": ["Métier à la frontière absolue de la science-fiction industrielle", "Liberté de création de formes géométriques organiques fascinantes", "Très forte demande dans les secteurs de pointe"],
            "cons": ["Coût encore élevé des poudres métalliques et des machines de fusion laser"]
        },
        "gettingStarted": {
            "beginnerProject": "Utiliser un logiciel de conception intégrant le design génératif (ex: Fusion 360) pour générer une pièce optimisée topologiquement et la faire imprimer en 3D plastique ou résine.",
            "steps": [
                "Définir les zones à conserver (points de fixation, passage d'arbres)",
                "Appliquer les efforts et les conditions limites",
                "Lancer le calcul d'optimisation topologique et observer la forme biomimétique générée"
            ],
            "freeResources": ["Tutoriels Autodesk Generative Design", "Plateforme 3D Hubs Additive Manufacturing Guide", "Vidéos de l'Institut Carnot M.I.C.H.E.L.A.N.G.E."]
        },
        "aiImpact": {
            "summary": "L'IA pilote le generative design et ajuste la puissance du laser milliseconde par milliseconde grâce à des caméras thermiques embarquées analysant le bain de fusion (melt pool monitoring).",
            "positiveImpacts": ["Zéro porosité grâce à la correction en temps réel du laser", "Conception automatique de structures lattices ultra-légères inspirées de la structure des os humains"],
            "risksAndChallenges": ["La maîtrise métallurgique de la solidification rapide sous laser reste un défi physique complexe"],
            "recommendedSkills": ["Conception d'architectures lattices et maîtrise du monitoring thermique par IA"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la fabrication additive est un outil extraordinaire pour fabriquer sur place des pièces de rechange introuvables ou obsolètes pour les hôpitaux, les usines agroalimentaires et le matériel agricole, évitant des mois d'attente d'importation.",
            "westAfricaOpportunities": "Création de plateformes d'impression 3D métallique à Dakar et Abidjan pour la maintenance industrielle rapide.",
            "localChampions": ["FabLab Defko Ak Nièp (Dakar)", "ESP FabLab", "ISEP Diamniadio", "Plateforme d'Innovation de Diamniadio"]
        },
        "salary": {
            "france": {"entry": 39000, "mid": 52000, "expert": 75000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant & baromètres de la métallurgie"},
            "senegal": {"entry": 650000, "mid": 1250000, "expert": 2300000, "currency": "FCFA", "period": "mois", "note": "Salaires nets dans les centres de prototypage rapide et bureaux d'ingénierie de pointe"}
        },
        "connectedFamilies": ["aeronautique-spatial", "sante-biomedical", "numerique-ia"],
        "relatedJobs": ["ingenieur-calcul", "ingenieur-mecanique", "dessinateur-industriel"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Ingénieur en fabrication additive", "url": "https://www.letudiant.fr/metiers/secteur/industrie/ingenieur-e-en-fabrication-additive.html", "type": "metier"},
            {"organization": "Onisep", "title": "Ingénieur / Ingénieure procédés et matériaux", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/ingenieur-ingenieure-materiaux", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Le moteur de fusée Rutherford de Rocket Lab est le premier moteur spatial au monde dont toutes les pièces primaires (chambre de combustion, injecteurs, pompes) sont entièrement imprimées en 3D en 24 heures.",
            "pourquoi": "La fabrication additive permet d'intégrer des canaux de refroidissement hélicoïdaux directement à l'intérieur des parois de la chambre de combustion, ce qui est strictement impossible par usinage conventionnel.",
            "a_retenir": "L'ingénieur en fabrication additive façonne l'industrie du futur couche par couche."
        }
    },

    # -----------------------------------------------------------------------
    # 36. DIRECTEUR D'USINE / RESPONSABLE DE SITE INDUSTRIEL
    # -----------------------------------------------------------------------
    {
        "id": "directeur-site-industriel",
        "slug": "directeur-site-industriel",
        "title": "Directeur d'Usine / Responsable de Site Industriel",
        "aliases": ["Directeur de site industriel", "Directeur d'établissement industriel", "Plant Manager"],
        "icon": "🏢",
        "familyId": "industrie-mecanique",
        "domain": "Management Industriel & Direction",
        "domainId": "management-industriel-direction",
        "subdomain": "Direction d'usine, Pilotage stratégique & Dialogue social",
        "shortDescription": "Dirige l'ensemble des activités opérationnelles, humaines, financières et de sécurité d'un site industriel pour atteindre les objectifs stratégiques.",
        "longDescription": "Le directeur d'usine est le capitaine du navire industriel. Véritable chef d'entreprise au sein de son site, il supervise tous les départements : production, maintenance, méthodes, qualité, logistique, sécurité et ressources humaines. Il gère le compte de résultat (P&L) du site, arbitre les investissements machines (CAPEX), veille au dialogue social avec les représentants du personnel et garantit la conformité environnementale et la sécurité de tous les salariés.",
        "missions": [
            "Définir et piloter la stratégie industrielle, les budgets d'exploitation et les investissements du site",
            "Garantir la sécurité absolue des personnes et le respect scrupuleux des normes environnementales (zéro accident)",
            "Superviser les performances de production, de qualité et de respect des délais de livraison clients",
            "Conduire le dialogue social avec les partenaires syndicaux et animer le Comité Social et Économique (CSE)",
            "Incarner la vision de l'entreprise auprès des autorités locales, de l'inspection du travail et des clients stratégiques"
        ],
        "workEnvironment": ["Usines de production de 50 à plus de 1 000 salariés", "Partage du temps entre les comités de direction et le terrain en atelier", "Lourde responsabilité juridique, financière et humaine"],
        "typicalDay": [
            {"time": "08:00", "desc": "Tournée terrain quotidienne ('Gemba Walk') dans les ateliers pour échanger directement avec les opérateurs et chefs d'équipe"},
            {"time": "09:30", "desc": "Comité de direction de site : analyse du tableau de bord mensuel (TRS, rebuts, coûts de non-qualité, budget)"},
            {"time": "12:30", "desc": "Déjeuner de travail avec le directeur des ressources humaines pour préparer les négociations annuelles obligatoires (NAO)"},
            {"time": "14:00", "desc": "Validation d'un dossier d'investissement CAPEX de 4 millions d'euros pour moderniser une ligne de conditionnement"},
            {"time": "16:30", "desc": "Réception d'un grand client international pour l'audit annuel de renouvellement de contrat"}
        ],
        "companyRole": "Leader visionnaire et opérationnel, incarnant l'autorité et la responsabilité globale de l'outil industriel.",
        "skills": {
            "technical": ["Gestion d'un compte d'exploitation industriel (P&L, EBITDA, coûts de revient complets)", "Maîtrise approfondie des processus de production et du Lean Management", "Droit du travail, sécurité industrielle et droit de l'environnement (ICPE)", "Management stratégique de projets d'investissements industriels lourds"],
            "human": ["Leadership affirmé, courage managérial et capacité à inspirer confiance", "Sens aigu du dialogue social, écoute et diplomatie", "Sang-froid dans la gestion des crises industrielles majeures", "Vision stratégique et sens du résultat"],
            "tools": ["Tableaux de bord financiers et de gestion d'usine", "Systèmes ERP d'entreprise (SAP, Oracle)", "Méthodes de gouvernance industrielle et de management visuel"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +5 (Diplôme d'Ingénieur Généraliste)", "title": "Diplôme d'Ingénieur de Grande École (Arts et Métiers, Mines, Centrale, Polytech, INSA)", "desc": "Excellente culture technologique globale et scientifique."},
                {"step": "Expérience professionnelle (10 à 15 ans)", "title": "Parcours évolutif complet (Ingénieur Méthodes ➔ Responsable Production ➔ Directeur de Site)", "desc": "Éventuel complément par un Executive MBA en management général d'entreprise."}
            ],
            "schools": [
                {"name": "Arts et Métiers ENSAM — France", "country": "France", "scope": "France"},
                {"name": "École des Mines de Paris / CentraleSupélec — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique de Dakar (ESP - UCAD) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Polytechnique de Thiès (EPT) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Executive MBA d'école de commerce de premier plan", "Certifications de gouvernance d'entreprise"]
        },
        "career": {
            "sectors": ["Tous secteurs industriels manufacturiers (Automobile, Aéronautique, Métallurgie, Chimie, Agroalimentaire, Pharmacie)"],
            "employerTypes": ["Usines de production de groupes industriels", "ETI et PME industrielles indépendantes"],
            "evolution": ["Directeur des opérations de division (multi-sites)", "Directeur industriel de groupe (COO - Chief Operating Officer)", "Président du directoire / Directeur Général (CEO)"],
            "pros": ["Sommet de la carrière industrielle de terrain", "Impact direct et visible sur la vie de centaines de personnes et sur l'économie d'une région", "Rémunération de très haut niveau avec participation aux résultats"],
            "cons": ["Pression psychologique et charge de travail considérables, engagement total 24h/24"]
        },
        "gettingStarted": {
            "beginnerProject": "Analyser le rapport financier annuel d'un grand groupe industriel coté (ex: Michelin ou Renault) et identifier comment la performance opérationnelle de ses usines influence ses bénéfices nets.",
            "steps": [
                "Rechercher le chiffre d'affaires et la marge opérationnelle industrielle",
                "Identifier les priorités stratégiques : décarbonation, digitalisation, réduction des coûts",
                "Comprendre le rôle du directeur d'usine pour décliner cette stratégie au quotidien"
            ],
            "freeResources": ["Revue L'Usine Nouvelle", "Harvard Business Review Operations Management Articles"]
        },
        "aiImpact": {
            "summary": "L'IA fournit au directeur d'usine une tour de contrôle prédictive ('Digital Control Tower') centralisant les alertes de production, de qualité et d'énergie pour décider en temps réel.",
            "positiveImpacts": ["Visibilité complète et instantanée sur tous les flux de l'usine", "Simulations d'impact financier avant de valider un arbitrage de production"],
            "risksAndChallenges": ["Le leadership humain, l'écoute des salariés et la négociation syndicale ne seront jamais automatisables"],
            "recommendedSkills": ["Pilotage de la transformation digitale et culture du management 4.0"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les directeurs d'usine sont des figures économiques de premier plan, pilotant les piliers de l'économie nationale (cimenteries de Rufisque/Bargny, usines agroalimentaires de la banlieue dakaroise, raffinerie de la SAR, usines sucrières de Richard-Toll).",
            "westAfricaOpportunities": "Rôle moteur dans l'industrialisation durable et la création d'emplois qualifiés pour la jeunesse en Afrique de l'Ouest.",
            "localChampions": ["SOCOCIM Industries", "Compagnie Sucrière Sénégalaise (CSS)", "Patisen", "Société Africaine de Raffinage (SAR)"]
        },
        "salary": {
            "france": {"entry": 65000, "mid": 95000, "expert": 150000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant & cabinets de recrutement de cadres dirigeants (fixe + bonus annuel substantiel)"},
            "senegal": {"entry": 1500000, "mid": 3000000, "expert": 6000000, "currency": "FCFA", "period": "mois", "note": "Salaires nets constatés pour directeurs de sites industriels majeurs au Sénégal"}
        },
        "connectedFamilies": ["droit-management", "banque-finance-assurances"],
        "relatedJobs": ["ingenieur-de-production", "responsable-qse-industriel", "ingenieur-commercial-industriel"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Directeur de site / Responsable de site", "url": "https://www.letudiant.fr/metiers/secteur/industrie/directeur-dagence-responsable-de-site.html", "type": "metier"},
            {"organization": "Onisep", "title": "Directeur / Directrice d'usine", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/directeur-directrice-d-usine", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Une grande usine moderne de 1 000 salariés génère indirectement entre 3 000 et 4 000 emplois induits dans son bassin de vie local (fournisseurs, transporteurs, commerces, écoles).",
            "pourquoi": "L'industrie est le secteur qui présente le coefficient multiplicateur d'emplois le plus élevé de toute l'économie.",
            "a_retenir": "Le directeur d'usine ne dirige pas seulement un site : il fait vivre tout un territoire."
        }
    }
]

if __name__ == "__main__":
    print(f"✅ industry_jobs_part2.py : {len(INDUSTRY_JOBS_PART2)} fiches métiers chargées.")
    for j in INDUSTRY_JOBS_PART2:
        assert j["id"], "ID manquant"
        assert j["slug"], "Slug manquant"
        assert len(j["missions"]) == 5, f"5 missions requises pour {j['id']}"
        assert j["familyId"] == "industrie-mecanique", f"familyId invalide pour {j['id']}"
        assert "france" in j["salary"] and "senegal" in j["salary"], f"Salaires incomplets pour {j['id']}"
    print("✅ Intégrité validée pour les 18 fiches métiers du Bloc B.")

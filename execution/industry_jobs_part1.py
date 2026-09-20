#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
CATALOGUE DES MÉTIERS DE L'INDUSTRIE, TECHNOLOGIES & INGÉNIERIE - PARTIE 1 (18 MÉTIERS)
Bloc A : Conception, Calcul, Mécanique, Usinage, Fabrication, Robotique & Automatisation
Sources documentaires : L'Étudiant & Onisep
Double ancrage : France (€ brut/an) & Sénégal / Afrique de l'Ouest (FCFA net/mois)
"""

INDUSTRY_JOBS_PART1 = [
    # -----------------------------------------------------------------------
    # 1. DESSINATEUR INDUSTRIEL / PROJETEUR CAO
    # -----------------------------------------------------------------------
    {
        "id": "dessinateur-industriel",
        "slug": "dessinateur-industriel",
        "title": "Dessinateur Industriel / Projeteur CAO",
        "aliases": ["Dessinateur-projeteur en mécanique", "Concepteur CAO 3D", "Technicien de bureau d'études"],
        "icon": "📐",
        "familyId": "industrie-mecanique",
        "domain": "Conception & Ingénierie",
        "domainId": "conception-ingenierie-indus",
        "subdomain": "Dessin industriel & Modélisation CAO",
        "shortDescription": "Conçoit et modélise en 2D et 3D les plans techniques de pièces, d'équipements et d'ensembles mécaniques destinés à la production industrielle.",
        "longDescription": "Le dessinateur industriel traduit les cahiers des charges et les études de faisabilité des ingénieurs en plans de fabrication précis au millimètre près. À l'aide de logiciels de conception assistée par ordinateur (CAO), il dimensionne les pièces, applique les tolérances géométriques, définit les matériaux et prépare la nomenclature indispensable aux usineurs et monteurs.",
        "missions": [
            "Modéliser des pièces et sous-ensembles mécaniques en 3D volumique et surfacique sous SolidWorks, CATIA ou Inventor",
            "Établir les plans d'ensemble, de sous-ensemble et de détail avec cotation fonctionnelle et tolérances ISO",
            "Vérifier la faisabilité technique, les interférences cinématiques et la fabricabilité avec les équipes méthodes",
            "Rédiger la nomenclature industrielle exhaustive (références matières, visserie, composants standards)",
            "Mettre à jour les dossiers de plans techniques suite aux retours d'ateliers et aux modifications clients"
        ],
        "workEnvironment": ["Bureau d'études intégré", "Société d'ingénierie mécanique", "Usine de fabrication mécanique", "Écrans multiples et stations de travail CAO"],
        "typicalDay": [
            {"time": "08:30", "desc": "Point d'avancement avec l'ingénieur projet et revue des modifications demandées par l'atelier"},
            {"time": "10:00", "desc": "Conception 3D d'un carter réducteur sous CATIA et vérification des tolérances d'ajustement"},
            {"time": "12:30", "desc": "Déjeuner d'équipe technique"},
            {"time": "14:00", "desc": "Simulation d'assemblage cinématique pour détecter d'éventuelles collisions d'arbres en rotation"},
            {"time": "16:30", "desc": "Génération de la mise en plan 2D pour l'atelier d'usinage et archivage dans le PDM/PLM"}
        ],
        "companyRole": "Pivot technique entre le concept théorique de l'ingénieur R&D et la matérialisation physique en atelier d'usinage.",
        "skills": {
            "technical": [
                "Maîtrise experte des logiciels de CAO mécanique (SolidWorks, CATIA, PTC Creo, Autodesk Inventor)",
                "Cotation fonctionnelle, tolérancement géométrique (GPS ISO) et états de surface",
                "Connaissance approfondie des matériaux industriels (aciers, aluminiums, polymères, composites)",
                "Maîtrise des procédés d'usinage, de fonderie, de tôlerie et d'assemblage"
            ],
            "human": ["Rigueur et précision absolue", "Vision spatiale tridimensionnelle aiguisée", "Écoute et collaboration inter-métiers", "Patience et méticulosité"],
            "tools": ["CATIA V5/3DEXPERIENCE", "SolidWorks", "Autodesk Inventor", "PTC Creo", "Systèmes PDM/PLM (Windchill, Enovia)"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac Pro / Bac STI2D", "title": "Bac STI2D ITEC ou Bac Pro Étude et Définition de Produits Industriels", "desc": "Bases du dessin technique et des sciences de l'ingénieur."},
                {"step": "Bac +2 (BTS / BUT)", "title": "BTS Conception de Produits Industriels (CPI) ou BUT Génie Mécanique et Productique (GMP)", "desc": "Maîtrise de la chaîne numérique de conception, dimensionnement et résistance des matériaux."}
            ],
            "schools": [
                {"name": "Lycées techniques & IUT de France (BTS CPI, BUT GMP) — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique de Dakar (ESP - Département Génie Mécanique) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Institut Supérieur d'Enseignement Professionnel (ISEP de Diamniadio) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certifications officielles Dassault Systèmes (CSWA, CSWP SolidWorks)", "Certifications Autodesk Certified Professional"]
        },
        "career": {
            "sectors": ["Automobile & Mobilité", "Aéronautique & Spatial", "Machines-outils & Équipements", "Agro-industrie & Chaudronnerie"],
            "employerTypes": ["Bureaux d'études indépendants", "Constructeurs industriels", "PME de mécanique de précision", "Grandes entreprises industrielles"],
            "evolution": ["Dessinateur-projeteur senior", "Responsable de bureau d'études", "Ingénieur d'études par VAE ou formation continue"],
            "pros": ["Métier créatif et technique au cœur du produit", "Forte demande sur le marché de l'emploi", "Possibilité de travailler dans tous les secteurs industriels"],
            "cons": ["Travail prolongé sur écran", "Pressions sur les délais de livraison des plans de fabrication"]
        },
        "gettingStarted": {
            "beginnerProject": "Télécharger un logiciel de CAO gratuit (ex: FreeCAD ou Onshape) et modéliser un assemblage mécanique complet en 3 pièces avec mise en plan cotée.",
            "steps": [
                "Apprendre les règles de la cotation normalisée ISO et les projections orthogonales",
                "Modéliser une pièce simple sous logiciel CAO paramétrique",
                "Réaliser un assemblage avec contraintes mécaniques (coaxiales, coïncidentes)"
            ],
            "freeResources": ["FreeCAD Open Source", "Onshape Education", "Chaînes YouTube d'ingénierie mécanique et de CAO"]
        },
        "aiImpact": {
            "summary": "L'IA générative et le generative design automatisent la création d'ébauches et l'optimisation topologique, recentrant le dessinateur sur l'arbitrage fonctionnel et la conformité normative.",
            "positiveImpacts": ["Génération automatique de variantes légères optimisées", "Automatisation de la cotation répétitive sur les mises en plan"],
            "risksAndChallenges": ["Nécessité de contrôler rigoureusement les tolérances générées par l'IA", "Risque d'oubli des contraintes réelles d'atelier"],
            "recommendedSkills": ["Maîtrise du design génératif", "Intégration des contraintes de fabrication additive dans la CAO"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la modernisation industrielle (Plateforme Industrielle Internationale de Diamniadio, zones franches de Sandiara, usines de transformation agroalimentaire) crée une forte demande de projeteurs CAO capables d'adapter des machines importées aux besoins locaux.",
            "westAfricaOpportunities": "Besoin massif de dessinateurs industriels pour la maintenance d'usines minières, de cimenteries et de lignes agro-industrielles dans toute la CEDEAO.",
            "localChampions": ["Plateforme Industrielle de Diamniadio (PDI)", "SOCOCIM Industries", "SENAC SA", "Chantier Naval de Dakar (Dakar Marine)"]
        },
        "salary": {
            "france": {"entry": 24000, "mid": 32000, "expert": 42000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant & grilles UIMM métallurgie"},
            "senegal": {"entry": 250000, "mid": 450000, "expert": 750000, "currency": "FCFA", "period": "mois", "note": "Salaires nets constatés en bureau d'études et usines à Dakar/Thiès"}
        },
        "connectedFamilies": ["numerique-ia", "btp-architecture"],
        "relatedJobs": ["designer-industriel", "ingenieur-mecanique", "technicien-d-etudes-industriel"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Dessinateur industriel", "url": "https://www.letudiant.fr/metiers/secteur/industrie/dessinateur-industriel.html", "type": "metier"},
            {"organization": "Onisep", "title": "Dessinateur / Dessinatrice en construction mécanique", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/dessinateur-dessinatrice-en-construction-mecanique", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Près de 95% des objets manufacturés modernes ont d'abord existé sous la forme d'un modèle mathématique 3D conçu par un dessinateur industriel.",
            "pourquoi": "La maquette numérique permet d'éliminer les erreurs d'assemblage avant même de couler le premier gramme de métal.",
            "a_retenir": "Un bon plan d'atelier fait gagner des centaines d'heures d'usinage et des milliers d'euros."
        }
    },

    # -----------------------------------------------------------------------
    # 2. DESIGNER INDUSTRIEL
    # -----------------------------------------------------------------------
    {
        "id": "designer-industriel",
        "slug": "designer-industriel",
        "title": "Designer Industriel / Concepteur Produit",
        "aliases": ["Designer produit", "Concepteur de produits industriels", "Industrial Designer"],
        "icon": "🎨",
        "familyId": "industrie-mecanique",
        "domain": "Conception & Ingénierie",
        "domainId": "conception-ingenierie-indus",
        "subdomain": "Design produit & Ergonomie",
        "shortDescription": "Allie esthétique, ergonomie, faisabilité technique et éco-conception pour créer des objets industriels attractifs, fonctionnels et fabriquables en série.",
        "longDescription": "Le designer industriel imagine la forme, l'usage, la texture et l'expérience utilisateur de produits grand public ou d'équipements professionnels (véhicules, appareils électroménagers, outils, mobilier industriel). Il travaille en synergie étroite avec les ingénieurs d'études et le marketing pour concilier désirabilité esthétique, coûts de fabrication et durabilité environnementale.",
        "missions": [
            "Concevoir des concepts produits innovants par le croquis, le rendu 3D et le prototypage rapide",
            "Étudier l'ergonomie, les usages réels des utilisateurs et l'accessibilité",
            "Sélectionner les matériaux durables, les textures de surface et les finitions industrielles",
            "Collaborer avec les ingénieurs mécaniques pour intégrer les contraintes de moulage et d'assemblage",
            "Présenter les concepts aux comités de direction et affiner le design selon les retours d'usage"
        ],
        "workEnvironment": ["Agences de design industriel", "Studios de design intégrés aux grands groupes", "Ateliers de prototypage 3D"],
        "typicalDay": [
            {"time": "09:00", "desc": "Veille tendances matériaux et analyse des retours de tests utilisateurs sur un prototype"},
            {"time": "10:30", "desc": "Session d'esquisses créatives sur tablette graphique pour un nouvel équipement nomade"},
            {"time": "12:30", "desc": "Déjeuner de travail avec le chef de produit marketing"},
            {"time": "14:00", "desc": "Modélisation surfacique avancée sous Rhino/Alias et rendu photoréaliste sous KeyShot"},
            {"time": "16:30", "desc": "Vérification en atelier du prototype imprimé en 3D avec les ingénieurs mécaniques"}
        ],
        "companyRole": "Donneur de sens et d'identité au produit, garant de l'équilibre entre désirabilité client et faisabilité industrielle.",
        "skills": {
            "technical": ["Modélisation 3D surfacique (Rhino 3D, Alias, SolidWorks)", "Rendu photoréaliste (KeyShot, Blender)", "Ergonomie et design thinking", "Éco-conception et cycle de vie des produits"],
            "human": ["Créativité foisonnante et sensibilité esthétique", "Empathie utilisateur", "Capacité à défendre une vision devant des ingénieurs", "Curiosité technique"],
            "tools": ["Rhinoceros 3D", "Autodesk Alias", "KeyShot", "Suite Adobe Creative (Photoshop, Illustrator)", "Imprimantes 3D SLA/FDM"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +3", "title": "DN MADE mention Objet ou Bachelor en Design Industriel", "desc": "Fondamentaux de la démarche de design, maquettage et culture visuelle."},
                {"step": "Bac +5 (Master / Diplôme d'École)", "title": "Diplôme d'École Supérieure de Design (ENSCI-Les Ateliers, Strate, ENSAD, Rubika)", "desc": "Gestion de projets complexes, prospective industrielle et partenariats industriels."}
            ],
            "schools": [
                {"name": "ENSCI - Les Ateliers (Paris) — France", "country": "France", "scope": "France"},
                {"name": "Strate École de Design (Sèvres) — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure d'Art et de Design de Dakar (ESAD) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Université Amadou Mahtar Mbow (UAM Diamniadio - Pôle Ingénierie & Design) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Affiliation Alliance France Design (AFD)", "Certifications logiciels CAO design"]
        },
        "career": {
            "sectors": ["Automobile & Transport", "Électroménager & High-Tech", "Matériel médical", "Mobilier & Équipements de travail"],
            "employerTypes": ["Agences de design globales", "Constructeurs automobiles", "Grandes entreprises manufacturières", "Studio indépendant"],
            "evolution": ["Lead Designer", "Directeur du Design / Chief Design Officer", "Consultant en innovation produit"],
            "pros": ["Impact visuel direct et concret de ses créations sur le quotidien", "Métier carrefour entre art et technologie", "Forte valorisation de l'originalité"],
            "cons": ["Compromis parfois frustrants avec les contraintes financières et techniques de production"]
        },
        "gettingStarted": {
            "beginnerProject": "Choisir un objet quotidien défectueux ou peu ergonomique (ex: bouteille réutilisable) et concevoir un nouveau concept complet (croquis, modèle 3D et rendu).",
            "steps": [
                "Observer et photographier 5 irritants d'usage sur l'objet actuel",
                "Dessiner 10 esquisses d'idées de formes et de préhension",
                "Modéliser la solution retenue sous Rhino ou Fusion 360 et rendre une vue réaliste"
            ],
            "freeResources": ["Core77 (Design Magazine)", "Behance Industrial Design", "Tutoriels Blender Product Design"]
        },
        "aiImpact": {
            "summary": "L'IA générative d'images (Midjourney, Stable Diffusion) accélère la phase d'idéation visuelle mais requiert une expertise accrue pour traduire ces images en surfaces fabricables en usine.",
            "positiveImpacts": ["Génération instantanée de moodboards et de déclinaisons de style", "Accélération du prototypage d'idées auprès des clients"],
            "risksAndChallenges": ["Illusion de faisabilité : l'image générée ne tient pas compte des contre-dépouilles de moulage"],
            "recommendedSkills": ["Maîtrise des prompts de concept design", "Expertise approfondie en géométrie industrielle de fabrication"]
        },
        "africaContext": {
            "senegalInsight": "Le design industriel au Sénégal connaît un essor remarquable grâce à la valorisation des matières locales (bois de rônier, typha, cuir, métaux de récupération) et à l'aménagement des nouveaux espaces urbains de Diamniadio.",
            "westAfricaOpportunities": "Création d'équipements agricoles adaptés aux petits exploitants, de mobilier scolaire durable et de solutions d'emballages bio-sourcés.",
            "localChampions": ["FabLab Defko Ak Nièp (Dakar)", "Ateliers du Sahel", "Kër Thiossane (Pôle d'innovation citoyenne)"]
        },
        "salary": {
            "france": {"entry": 28000, "mid": 38000, "expert": 52000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant & baromètres de design"},
            "senegal": {"entry": 300000, "mid": 550000, "expert": 900000, "currency": "FCFA", "period": "mois", "note": "Salaires nets constatés en agence et pôle R&D à Dakar"}
        },
        "connectedFamilies": ["numerique-ia", "arts-culture-patrimoine"],
        "relatedJobs": ["dessinateur-industriel", "ingenieur-mecanique", "ingenieur-eco-conception-industrielle"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Designer industriel", "url": "https://www.letudiant.fr/metiers/secteur/creation/designer-industriel.html", "type": "metier"},
            {"organization": "Onisep", "title": "Designer / Designeuse produit", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/designer-designeuse-produit", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Selon une étude du Design Council, chaque euro investi dans le design industriel génère en moyenne 4 euros de chiffre d'affaires supplémentaire pour l'entreprise manufacturière.",
            "pourquoi": "Un produit bien pensé réduit les coûts d'assemblage tout en se vendant plus cher grâce à une ergonomie supérieure.",
            "a_retenir": "Le design industriel n'est pas de la décoration : c'est l'intelligence de l'usage rendue visible."
        }
    },

    # -----------------------------------------------------------------------
    # 3. INGÉNIEUR MÉCANIQUE
    # -----------------------------------------------------------------------
    {
        "id": "ingenieur-mecanique",
        "slug": "ingenieur-mecanique",
        "title": "Ingénieur Mécanique / Conception de Machines",
        "aliases": ["Ingénieur en mécanique industrielle", "Ingénieur conception mécanique", "Mechanical Engineer"],
        "icon": "⚙️",
        "familyId": "industrie-mecanique",
        "domain": "Conception & Ingénierie",
        "domainId": "conception-ingenierie-indus",
        "subdomain": "Ingénierie mécanique & Machines spéciales",
        "shortDescription": "Supervise la conception architecturale, le dimensionnement cinématique et la mise au point de machines, d'outils et de systèmes mécaniques complexes.",
        "longDescription": "L'ingénieur mécanique est le maître d'œuvre de la machine. Il dimensionne les mécanismes, calcule les efforts, sélectionne les motorisations, optimise la résistance des structures et veille au respect des normes de sécurité et de productivité. Il pilote les projets du cahier des charges initial jusqu'aux essais en plateforme industrielle.",
        "missions": [
            "Élaborer l'architecture globale de systèmes mécaniques et de machines spéciales",
            "Dimensionner les composants critiques (arbres, engrenages, roulements, vérins, moteurs)",
            "Valider la résistance mécanique et la tenue en fatigue sous sollicitations cycliques",
            "Superviser les équipes de dessinateurs-projeteurs et de techniciens de bureau d'études",
            "Piloter les essais de mise en service sur prototype et corriger les dysfonctionnements mécaniques"
        ],
        "workEnvironment": ["Bureaux d'études techniques", "Constructeurs de machines d'emballage, de robotique ou d'usinage", "Ateliers d'essais prototypes"],
        "typicalDay": [
            {"time": "08:30", "desc": "Analyse des résultats d'essais vibratoires sur un banc d'endurance de pompe hydraulique"},
            {"time": "10:00", "desc": "Calcul de pré-dimensionnement d'un réducteur épicycloïdal sous logiciel analytique"},
            {"time": "12:30", "desc": "Déjeuner avec les chefs de projets de l'usine"},
            {"time": "14:00", "desc": "Revue de conception CAO avec le projeteur et le responsable méthodes de production"},
            {"time": "16:30", "desc": "Rendez-vous fournisseur pour qualifier des réducteurs de vitesse de haute précision"}
        ],
        "companyRole": "Garant de la viabilité fonctionnelle, de la sécurité et de la robustesse opérationnelle des produits mécaniques.",
        "skills": {
            "technical": ["Mécanique générale, cinématique et dynamique des solides", "Résistance des matériaux (RDM) et mécanique de la rupture", "Transmission de puissance et composants mécaniques standards", "Mécanique des fluides et thermodynamique industrielle"],
            "human": ["Esprit d'analyse méthodique", "Leadership de projets techniques", "Pragmatisme de terrain", "Capacité à arbitrer entre performance et coût"],
            "tools": ["CATIA / SolidWorks", "ANSYS Mechanical", "KissSoft (Calcul d'engrenages)", "MATLAB / Simulink", "Normes Eurocodes / ISO"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +2 / CPGE", "title": "Classes Préparatoires aux Grandes Écoles (PTSI/PT, PSI) ou BUT GMP", "desc": "Bases scientifiques solides en mathématiques, physique et sciences industrielles."},
                {"step": "Bac +5 (Diplôme d'Ingénieur)", "title": "Diplôme d'Ingénieur en Génie Mécanique (Arts et Métiers, INSA, UTC, Polytech, ENSTA)", "desc": "Expertise approfondie en conception avancée, calculs de structures et industrialisation."}
            ],
            "schools": [
                {"name": "Arts et Métiers ENSAM (Paris, Lille, Metz, Aix, etc.) — France", "country": "France", "scope": "France"},
                {"name": "INSA Lyon / Toulouse (Départements Génie Mécanique) — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique de Dakar (ESP - UCAD) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Polytechnique de Thiès (EPT - Département Électromécanique) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Titre d'Ingénieur diplômé CTI (France)", "Diplôme d'Ingénieur accrédité CAMES (Sénégal)"]
        },
        "career": {
            "sectors": ["Aéronautique", "Automobile", "Ferroviaire", "Énergie & Nucléaire", "Biomédical & Robotique chirurgicale"],
            "employerTypes": ["Constructeurs aéronautiques et automobiles", "Équipementiers industriels", "Sociétés de conseil en technologies (Alten, Capgemini)", "PME innovantes"],
            "evolution": ["Chef de projet mécanique", "Directeur technique (CTO)", "Ingénieur en chef de programme industriel"],
            "pros": ["Métier pilier de l'industrie mondiale", "Très forte polyvalence technologique", "Rémunération attractive et évolutions internationales"],
            "cons": ["Lourde responsabilité sur la sécurité des équipements", "Cycles de projets longs pouvant générer des tensions"]
        },
        "gettingStarted": {
            "beginnerProject": "Démonter un mécanisme mécanique usagé (ex: perceuse ou dérailleur), modéliser chaque pièce et calculer l'effort nécessaire à son fonctionnement.",
            "steps": [
                "Réaliser un schéma cinématique normalisé du mécanisme avec liaisons mécaniques",
                "Isoler un solide et appliquer le principe fondamental de la statique (PFS)",
                "Choisir un matériau dans une base de données de matériaux pour résister à la contrainte"
            ],
            "freeResources": ["Techniques de l'Ingénieur (articles de référence)", "Coursera Mechanical Engineering Basics", "SimScale (plateforme de simulation cloud gratuite)"]
        },
        "aiImpact": {
            "summary": "L'IA assiste puissamment l'ingénieur mécanique dans le dimensionnement accéléré, l'optimisation multi-objectifs et le dépouillement massif de données d'essais.",
            "positiveImpacts": ["Exploration automatique de milliers de configurations géométriques optimales", "Réduction drastique des temps de calcul par métamodèles de deep learning"],
            "risksAndChallenges": ["Nécessité absolue d'une validation physique par les lois de la physique pour éviter les défaillances catastrophiques"],
            "recommendedSkills": ["Couplage IA physique (Physics-Informed Neural Networks)", "Gestion des jumeaux numériques mécaniques"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'ingénieur mécanique joue un rôle capital dans la mécanisation agricole dans la vallée du fleuve, la maintenance lourde des cimenteries et l'exploitation des nouvelles plateformes gazières GTA et pétrolières Sangomar.",
            "westAfricaOpportunities": "Forte recherche de profils en ingénierie de réhabilitation d'équipements lourds miniers en Guinée, au Mali et au Sénégal.",
            "localChampions": ["Industries Chimiques du Sénégal (ICS)", "Dangote Cement Sénégal", "Sococim Industries", "Compagnie Sucrière Sénégalaise (CSS)"]
        },
        "salary": {
            "france": {"entry": 38000, "mid": 50000, "expert": 70000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant & Syntec Ingénierie"},
            "senegal": {"entry": 600000, "mid": 1200000, "expert": 2200000, "currency": "FCFA", "period": "mois", "note": "Salaires nets dans les grands groupes industriels et projets offshore"}
        },
        "connectedFamilies": ["energie-renouvelable", "mines-geosciences", "btp-architecture"],
        "relatedJobs": ["ingenieur-calcul", "dessinateur-industriel", "ingenieur-de-production"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Ingénieur mécanique", "url": "https://www.letudiant.fr/metiers/secteur/industrie/ingenieur-mecanique.html", "type": "metier"},
            {"organization": "Onisep", "title": "Ingénieur / Ingénieure en mécanique", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/ingenieur-ingenieure-en-mecanique", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Un moteur d'avion moderne comme le CFM LEAP intègre des aubes de turbine en composites tissés 3D résistant à des forces centrifuges équivalentes au poids de deux bus londoniens par aube.",
            "pourquoi": "Seule une ingénierie mécanique de pointe permet d'allier légèreté extrême et résistance à des températures dépassant le point de fusion des métaux conventionnels.",
            "a_retenir": "L'ingénieur mécanique repousse continuellement les limites physiques de la matière."
        }
    },

    # -----------------------------------------------------------------------
    # 4. INGÉNIEUR CALCUL
    # -----------------------------------------------------------------------
    {
        "id": "ingenieur-calcul",
        "slug": "ingenieur-calcul",
        "title": "Ingénieur Calcul & Simulation Numérique",
        "aliases": ["Ingénieur calcul de structures", "Ingénieur simulation éléments finis", "FEA / FEM Engineer"],
        "icon": "💻",
        "familyId": "industrie-mecanique",
        "domain": "Conception & Ingénierie",
        "domainId": "conception-ingenierie-indus",
        "subdomain": "Calcul de structures & Simulation numérique",
        "shortDescription": "Simule numériquement le comportement physique (contraintes mécaniques, thermique, fatigue, crash) des structures et composants industriels.",
        "longDescription": "L'ingénieur calcul teste virtuellement la résistance des pièces avant leur fabrication réelle. En découpant le modèle 3D en millions de petits éléments (maillage pour la méthode des éléments finis - FEM), il calcule les contraintes, les déformations, les résonances vibratoires et les risques de rupture pour optimiser la masse et garantir la sécurité.",
        "missions": [
            "Nettoyer la géométrie CAO et générer des maillages éléments finis 1D, 2D et 3D de haute qualité",
            "Définir les conditions aux limites, les chargements thermomécaniques et les lois de comportement des matériaux",
            "Lancer et post-traiter les simulations statiques, dynamiques non-linéaires et de fatigue",
            "Analyser les concentrations de contraintes (critères de Von Mises, Tresca) et identifier les zones critiques",
            "Proposer des modifications d'épaisseurs, de congés de raccordement ou de nervures pour alléger et renforcer la structure"
        ],
        "workEnvironment": ["Bureaux d'études de calcul", "Centres de R&D des grands constructeurs", "Clusters de calcul intensif (HPC)"],
        "typicalDay": [
            {"time": "08:30", "desc": "Vérification des simulations non-linéaires de crash lancées la veille sur le cluster de calcul"},
            {"time": "10:00", "desc": "Post-traitement des cartes de contraintes et tracé des courbes déformation-temps"},
            {"time": "12:30", "desc": "Déjeuner avec les ingénieurs d'essais physiques"},
            {"time": "14:00", "desc": "Réunion de corrélation calcul-essais pour ajuster le modèle numérique aux mesures réelles de jauges de contrainte"},
            {"time": "16:30", "desc": "Rédaction de la note de calcul officielle de certification réglementaire"}
        ],
        "companyRole": "Expert scientifique qui valide la tenue sécuritaire et la conformité normative des structures sans avoir à détruire des prototypes physiques coûteux.",
        "skills": {
            "technical": ["Méthode des éléments finis (FEM / FEA)", "Mécanique des milieux continus et dynamique des structures", "Comportement non-linéaire des matériaux (plasticité, fluage, rupture)", "Maîtrise des codes de calcul industriels"],
            "human": ["Rigueur mathématique extrême", "Sens physique aigu pour juger de la cohérence d'un résultat numérique", "Esprit critique face aux logiciels", "Pédagogie pour expliquer des phénomènes complexes"],
            "tools": ["ANSYS Mechanical", "Abaqus", "Altair OptiStruct / HyperMesh", "NASTRAN / PATRAN", "Python / MATLAB (scripts de post-traitement)"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +3", "title": "Licence Mécanique / Mathématiques Appliquées ou BUT GMP", "desc": "Socle en mécanique analytique, algèbre linéaire et analyse numérique."},
                {"step": "Bac +5 (Master / Diplôme d'Ingénieur)", "title": "Diplôme d'Ingénieur ou Master Calcul de Structures / Simulation Numérique", "desc": "Spécialisation poussée en méthodes numériques, biomécanique, aéroélasticité et fatigue des matériaux."}
            ],
            "schools": [
                {"name": "École CentraleSupélec / École des Ponts ParisTech — France", "country": "France", "scope": "France"},
                {"name": "Institut Supérieur de l'Aéronautique et de l'Espace (ISAE-Supaero) — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique de Dakar (ESP - UCAD) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Université Amadou Mahtar Mbow (UAM - Pôle Sciences & Technologies) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certifications NAFEMS (organisme international indépendant de référence en simulation)"]
        },
        "career": {
            "sectors": ["Aéronautique & Spatial", "Automobile (Sécurité passive, crash)", "Énergie nucléaire & thermique", "BTP & Offshore"],
            "employerTypes": ["Sociétés de R&D", "Constructeurs de transport", "Bureaux d'études spécialisés en simulation (Altran, Segula, Capgemini)", "Instituts de recherche"],
            "evolution": ["Expert calcul senior", "Responsable du pôle simulation numérique", "Directeur technique scientifique"],
            "pros": ["Métier intellectuellement très stimulant", "Indispensable pour l'allègement et la décarbonation", "Compétences très recherchées à l'international"],
            "cons": ["Nécessite une concentration prolongée sur des modèles mathématiques complexes"]
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser une simulation statique simple de flexion d'une poutre sous charge sous FreeCAD FEM ou SimScale et comparer les résultats avec les formules théoriques de RDM.",
            "steps": [
                "Calculer à la main la flèche maximale d'une poutre encastrée",
                "Créer la géométrie et mailler en éléments tétraédriques sous logiciel gratuit",
                "Lancer le solveur et comparer l'écart relatif (doit être < 5%)"
            ],
            "freeResources": ["NAFEMS Resource Center", "SimScale Tutorials", "OpenFOAM & Code_Aster (EDF) Open Source"]
        },
        "aiImpact": {
            "summary": "L'IA transforme le calcul de structures via les solveurs neuronaux (Physics-Informed Neural Networks - PINNs) capables de prédire un champ de contraintes en quelques millisecondes au lieu de plusieurs heures.",
            "positiveImpacts": ["Simulation en temps réel pour l'optimisation géométrique instantanée", "Détection prédictive d'instabilités de calcul"],
            "risksAndChallenges": ["Risque d'effet 'boîte noire' où l'ingénieur ne maîtrise pas les hypothèses sous-jacentes du réseau de neurones"],
            "recommendedSkills": ["Programmation Python pour le Machine Learning scientifique", "Vérification et validation formelle de modèles IA"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'ingénierie de calcul est essentielle pour le dimensionnement des ouvrages côtiers face à l'érosion marine, la stabilité des plateformes pétro-gazières offshore et la résistance au vent des pylônes haute tension.",
            "westAfricaOpportunities": "Croissance des bureaux d'études de calcul de structures à Dakar pour des projets d'infrastructures énergétiques et industrielles sous-régionales.",
            "localChampions": ["Petrosen Exploration & Production", "Senelec (Direction de l'Ingénierie)", "Dakar Marine"]
        },
        "salary": {
            "france": {"entry": 39000, "mid": 52000, "expert": 72000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant & grilles d'ingénierie"},
            "senegal": {"entry": 650000, "mid": 1300000, "expert": 2400000, "currency": "FCFA", "period": "mois", "note": "Salaires nets constatés en ingénierie spécialisée et projets offshore"}
        },
        "connectedFamilies": ["numerique-ia", "mines-geosciences", "energie-renouvelable"],
        "relatedJobs": ["ingenieur-mecanique", "aerodynamicien", "dessinateur-industriel"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Ingénieur calcul", "url": "https://www.letudiant.fr/metiers/secteur/industrie/ingenieur-calcul.html", "type": "metier"},
            {"organization": "Onisep", "title": "Ingénieur / Ingénieure calcul", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/ingenieur-ingenieure-calcul", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Avant l'avènement du calcul par éléments finis, l'industrie automobile devait détruire en moyenne 100 prototypes réels pour homologuer un véhicule au crash test. Aujourd'hui, moins de 10 prototypes suffisent.",
            "pourquoi": "La précision des modèles de calcul permet de prédire les déformations de la tôle à la milliseconde près avec une fidélité supérieure à 98%.",
            "a_retenir": "L'ingénieur calcul protège des vies humaines en crash-testant virtuellement les structures."
        }
    },

    # -----------------------------------------------------------------------
    # 5. TECHNICIEN D'ÉTUDES INDUSTRIEL
    # -----------------------------------------------------------------------
    {
        "id": "technicien-d-etudes-industriel",
        "slug": "technicien-d-etudes-industriel",
        "title": "Technicien d'Études Industrielles",
        "aliases": ["Technicien de bureau d'études", "Technicien R&D mécanique", "Assistant ingénieur études"],
        "icon": "📐",
        "familyId": "industrie-mecanique",
        "domain": "Conception & Ingénierie",
        "domainId": "conception-ingenierie-indus",
        "subdomain": "Études de faisabilité & Essais préliminaires",
        "shortDescription": "Participe à la conception détaillée de nouveaux équipements, réalise les calculs préalables et valide les prototypes aux côtés des ingénieurs.",
        "longDescription": "Le technicien d'études industrielles travaille au sein des bureaux d'études et de recherche & développement. Bras droit de l'ingénieur de conception, il étudie la faisabilité des pièces mécaniques, consulte les catalogues fournisseurs, réalise les maquettes 3D intermédiaires et organise les premiers tests d'assemblage en atelier pour lever les aléas techniques.",
        "missions": [
            "Concevoir les schémas de principe et les études préliminaires de sous-ensembles industriels",
            "Réaliser des calculs mécaniques simples (poutres, couples de serrage, choix de roulements)",
            "Sélectionner les composants du commerce (actionneurs, pneumatique, capteurs) et contacter les fournisseurs",
            "Participer au montage des prototypes en atelier d'essais et consigner les anomalies constatées",
            "Adapter les plans de fabrication en fonction des retours d'industrialisation"
        ],
        "workEnvironment": ["Bureaux d'études de PME et ETI", "Laboratoires d'essais de prototypage", "Allers-retours réguliers avec l'atelier de fabrication"],
        "typicalDay": [
            {"time": "08:30", "desc": "Vérification des courriels et validation des fiches techniques d'actionneurs pneumatiques reçues d'un fournisseur"},
            {"time": "10:00", "desc": "Modélisation de l'intégration d'un vérin dans le bâti d'une machine d'emballage sous SolidWorks"},
            {"time": "12:30", "desc": "Déjeuner avec les techniciens d'usinage"},
            {"time": "14:00", "desc": "Descente en atelier pour assister au premier assemblage du prototype et noter les points de frottement"},
            {"time": "16:30", "desc": "Mise à jour du dossier technique de fabrication dans la base PDM"}
        ],
        "companyRole": "Relais opérationnel indispensable qui assure la transition fluide entre les idées d'ingénierie et la réalité concrète de l'atelier.",
        "skills": {
            "technical": ["CAO 3D et dessin technique industriel", "Connaissance des composants électropneumatiques et mécaniques standards", "Calculs élémentaires de RDM et dimensionnement", "Lecture de plans et métrologie de base"],
            "human": ["Pragmatisme et esprit pratique", "Sens aigu du contact humain avec les ouvriers d'atelier", "Rigueur d'exécution", "Réactivité face aux problèmes techniques"],
            "tools": ["SolidWorks", "Autodesk Inventor", "Catalogues industriels (TraceParts, Festo, SKF)", "Instruments de mesure d'atelier (pied à coulisse, comparateur)"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac STI2D / Bac Pro", "title": "Bac STI2D ou Bac Pro Modélisation et Usinage", "desc": "Bases de l'ingénierie et des procédés d'usinage."},
                {"step": "Bac +2 (BTS / BUT)", "title": "BTS Conception de Produits Industriels (CPI) ou BUT Génie Mécanique", "desc": "Pratique professionnelle intensive de la CAO et de la conception industrielle."}
            ],
            "schools": [
                {"name": "Lycées polyvalents techniques de France (BTS CPI) — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique de Dakar (ESP) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Lycée Technique Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "ISEP de Thiès / Diamniadio — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certifications CAO d'éditeurs (CSWA)", "Certificats de Qualification Paritaire de la Métallurgie (CQPM)"]
        },
        "career": {
            "sectors": ["Machines spéciales", "Agroalimentaire", "Automobile", "Biens d'équipement industriels"],
            "employerTypes": ["PME de mécanique industrielle", "Bureaux d'études", "Grandes entreprises manufacturières"],
            "evolution": ["Dessinateur-projeteur principal", "Chargé d'affaires industrielles", "Ingénieur d'études par promotion interne"],
            "pros": ["Métier équilibré entre bureau et atelier", "Grande variété des pièces étudiées", "Excellente insertion professionnelle"],
            "cons": ["Gestion de modifications fréquentes de plans selon les contraintes de coût"]
        },
        "gettingStarted": {
            "beginnerProject": "Relever les cotes d'un mécanisme réel au pied à coulisse et réaliser son dossier de fabrication complet (modèle 3D + plans de détail + nomenclature).",
            "steps": [
                "Mesurer rigoureusement chaque cote fonctionnelle",
                "Modéliser sous CAO avec l'arbre de création logique",
                "Établir la liste des composants standards à acheter dans le commerce"
            ],
            "freeResources": ["TraceParts (bibliothèque de composants CAO gratuits)", "GrabCAD Community"]
        },
        "aiImpact": {
            "summary": "L'IA assiste la recherche de composants équivalents et la vérification automatique des interférences de plans.",
            "positiveImpacts": ["Sourcing instantané de pièces standards chez les fabricants", "Génération automatique de nomenclatures"],
            "risksAndChallenges": ["Obligation de vérifier physiquement les dimensions des pièces fournies"],
            "recommendedSkills": ["Gestion des bases de données de composants industriels assistées par IA"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les techniciens d'études sont très recherchés pour moderniser les lignes de production locales (minoteries, savonneries, usines de transformation d'arachide et de mangue).",
            "westAfricaOpportunities": "Forte demande dans les PME sous-traitantes des chantiers pétroliers et miniers en Afrique de l'Ouest.",
            "localChampions": ["Grands Moulins de Dakar (GMD)", "Patisen", "SENAC SA"]
        },
        "salary": {
            "france": {"entry": 24000, "mid": 31000, "expert": 40000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant"},
            "senegal": {"entry": 250000, "mid": 450000, "expert": 700000, "currency": "FCFA", "period": "mois", "note": "Salaires nets dans les entreprises de transformation industrielle"}
        },
        "connectedFamilies": ["btp-architecture", "numerique-ia"],
        "relatedJobs": ["dessinateur-industriel", "ingenieur-mecanique", "ingenieur-methodes-industriel"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Technicien d'études", "url": "https://www.letudiant.fr/metiers/secteur/industrie/technicien-d-etudes.html", "type": "metier"},
            {"organization": "Onisep", "title": "Technicien / Technicienne de bureau d'études en mécanique", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/technicien-technicienne-de-bureau-d-etudes-en-mecanique", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Dans l'industrie mécanique, un technicien d'études passe en moyenne 35% de son temps à interagir directement avec l'atelier pour résoudre des défis concrets de fabrication.",
            "pourquoi": "Un plan parfait sur ordinateur peut être impossible à usiner si l'on ne tient pas compte du passage de l'outil ou de la clé de serrage.",
            "a_retenir": "Le technicien d'études garantit que ce qui est dessiné peut réellement être fabriqué."
        }
    },

    # -----------------------------------------------------------------------
    # 6. INGÉNIEUR MÉTHODES INDUSTRIEL
    # -----------------------------------------------------------------------
    {
        "id": "ingenieur-methodes-industriel",
        "slug": "ingenieur-methodes-industriel",
        "title": "Ingénieur Méthodes & Industrialisation",
        "aliases": ["Ingénieur industrialisation", "Ingénieur process et méthodes", "Manufacturing Engineer"],
        "icon": "🏗️",
        "familyId": "industrie-mecanique",
        "domain": "Génie Industriel & Organisation",
        "domainId": "genie-industriel-orga",
        "subdomain": "Méthodes, Process & Industrialisation",
        "shortDescription": "Conçoit et optimise les procédés de fabrication, l'outillage et l'organisation des postes pour fabriquer les produits au meilleur coût et en toute sécurité.",
        "longDescription": "L'ingénieur méthodes est l'architecte du processus de fabrication. Dès la phase de conception, il détermine 'comment' fabriquer le produit : choix des machines (fraisage, injection, emboutissage, soudage robotisé), conception des outillages spécifiques, définition des gammes opératoires, équilibrage des lignes et ergonomie des postes selon les principes du Lean Manufacturing.",
        "missions": [
            "Rédiger les gammes de fabrication, les modes opératoires et les fiches d'instructions au poste",
            "Concevoir et faire fabriquer les outillages de positionnement, de contrôle et de montage",
            "Définir le temps standard alloué pour chaque opération industrielle (chronométrage MTM, chrono-analyse)",
            "Mettre en œuvre les démarches d'amélioration continue (Kaizen, 5S, SMED, Kanban, Poka-Yoke)",
            "Chiffrer les investissements machines (CAPEX) et calculer le retour sur investissement (ROI)"
        ],
        "workEnvironment": ["Ateliers de fabrication de série", "Lignes d'assemblage automatisées", "Bureaux méthodes au plus près de la production"],
        "typicalDay": [
            {"time": "08:30", "desc": "Tournée d'atelier quotidienne ('Gemba Walk') avec les chefs d'équipe pour observer les goulets d'étranglement"},
            {"time": "10:00", "desc": "Chantier SMED sur une presse d'emboutissage pour réduire le temps de changement d'outil de 45 à 15 minutes"},
            {"time": "12:30", "desc": "Déjeuner avec les responsables qualité et maintenance"},
            {"time": "14:00", "desc": "Simulation de flux de production sous logiciel de simulation pour équilibrer une nouvelle ligne d'assemblage"},
            {"time": "16:30", "desc": "Validation des outillages de contrôle reçus avec l'opérateur référent"}
        ],
        "companyRole": "Garant de l'efficience productive, du respect des coûts de revient et de la sécurité ergonomique des opérateurs.",
        "skills": {
            "technical": ["Génie des procédés industriels (usinage, découpe, soudage, emboutissage, injection)", "Méthodes d'amélioration continue (Lean Manufacturing, Six Sigma)", "Conception d'outillages industriels", "Gestion des flux et équilibrage de postes"],
            "human": ["Excellente écoute et respect des opérateurs de terrain", "Capacité à convaincre et à conduire le changement", "Sens de l'observation et rigueur méthodologique", "Orientation résultats et rentabilité"],
            "tools": ["ERP / GPAO (SAP, Microsoft Dynamics)", "Logiciels de simulation de flux (FlexSim, Witness)", "SolidWorks (conception d'outillages)", "Outils Lean (VSM, SMED, 5S)"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +2 / BUT", "title": "BUT Génie Industriel et Maintenance (GIM) ou Génie Mécanique et Productique (GMP)", "desc": "Compréhension pratique des ateliers et des procédés d'usinage et de fabrication."},
                {"step": "Bac +5 (Diplôme d'Ingénieur)", "title": "Diplôme d'Ingénieur en Génie Industriel / Génie Mécanique (Arts et Métiers, INSA, UTBM, ENI)", "desc": "Maîtrise complète de la supply chain, du management de la performance et de l'industrialisation."}
            ],
            "schools": [
                {"name": "Arts et Métiers ENSAM — France", "country": "France", "scope": "France"},
                {"name": "INSA Lyon / Strasbourg (Génie Industriel) — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique de Dakar (ESP - UCAD) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Polytechnique de Thiès (EPT) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certifications Green Belt / Black Belt Lean Six Sigma", "Certifications PMI / IPMA en gestion de projet"]
        },
        "career": {
            "sectors": ["Automobile & Équipementiers", "Aéronautique", "Agro-industrie", "Pharmacie & Dispositifs médicaux", "Métallurgie"],
            "employerTypes": ["Usines de fabrication de série", "Grandes entreprises industrielles internationales", "Sous-traitants de premier rang"],
            "evolution": ["Responsable du service méthodes", "Responsable de production", "Directeur d'usine / Directeur des opérations"],
            "pros": ["Métier d'action concret avec une influence directe sur la performance", "Forte demande dans tous les bassins industriels", "Excellente passerelle vers la direction d'usine"],
            "cons": ["Gestion des résistances humaines au changement dans les ateliers"]
        },
        "gettingStarted": {
            "beginnerProject": "Cartographier le flux d'un processus artisanal ou quotidien (ex: préparation de repas ou emballage de colis) et identifier les 7 gaspillages du Lean (Muda) pour l'optimiser.",
            "steps": [
                "Mesurer les temps de cycle et les temps d'attente",
                "Dessiner une Value Stream Map (VSM) du processus",
                "Proposer 3 améliorations Poka-Yoke (détrompeurs) pour éliminer les erreurs"
            ],
            "freeResources": ["Lean Enterprise Institute (LEI)", "Cours OpenClassrooms sur le Lean Manufacturing", "Vidéos de Kaizen d'ateliers Toyota"]
        },
        "aiImpact": {
            "summary": "L'IA industrielle permet d'optimiser l'équilibrage des lignes en temps réel et de détecter automatiquement les micro-arrêts par vision par ordinateur.",
            "positiveImpacts": ["Génération assistée de gammes de fabrication optimisées", "Analyse automatisée des postures ergonomiques par caméra IA"],
            "risksAndChallenges": ["Nécessité de préserver le dialogue direct avec les opérateurs sans imposer des cadences robotisées"],
            "recommendedSkills": ["Intégration de l'IoT industriel (IIoT)", "Analyse de données de production sur tableau de bord Power BI"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'ingénieur méthodes est le moteur de la modernisation des usines agroalimentaires (biscuiteries, laiteries, conserveries de poisson) et des cimenteries pour rivaliser avec les produits importés en réduisant les rebuts de 30 à 50%.",
            "westAfricaOpportunities": "Rôle central dans l'aménagement des nouvelles usines de la zone économique spéciale (ZES) de Diass et de la zone industrielle de Sandiara.",
            "localChampions": ["Compagnie Sucrière Sénégalaise (CSS)", "SOCOCIM", "Kirène (Groupe SIAGRO)", "SENICO"]
        },
        "salary": {
            "france": {"entry": 37000, "mid": 48000, "expert": 68000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant & grilles UIMM métallurgie"},
            "senegal": {"entry": 550000, "mid": 1100000, "expert": 2000000, "currency": "FCFA", "period": "mois", "note": "Salaires nets dans les grandes unités industrielles au Sénégal"}
        },
        "connectedFamilies": ["droit-management", "numerique-ia"],
        "relatedJobs": ["technicien-methodes-industriel", "ingenieur-de-production", "ingenieur-qualite-industriel"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Ingénieur méthodes", "url": "https://www.letudiant.fr/metiers/secteur/industrie/ingenieur-e-methodes.html", "type": "metier"},
            {"organization": "Onisep", "title": "Ingénieur / Ingénieure méthodes", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/ingenieur-ingenieure-methodes", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "La méthode SMED développée par Shigeo Shingo chez Toyota a permis de faire passer le temps de changement d'outils sur des presses de carrosserie de 4 heures à moins de 3 minutes.",
            "pourquoi": "En distinguant les opérations internes (machine à l'arrêt) des opérations externes (préparées à l'avance), la flexibilité de l'usine est décuplée.",
            "a_retenir": "L'ingénieur méthodes ne travaille pas plus dur : il travaille plus intelligemment."
        }
    },

    # -----------------------------------------------------------------------
    # 7. TECHNICIEN MÉTHODES INDUSTRIEL
    # -----------------------------------------------------------------------
    {
        "id": "technicien-methodes-industriel",
        "slug": "technicien-methodes-industriel",
        "title": "Technicien Méthodes d'Atelier",
        "aliases": ["Agent des méthodes", "Technicien industrialisation d'atelier", "Préparateur de fabrication"],
        "icon": "📋",
        "familyId": "industrie-mecanique",
        "domain": "Génie Industriel & Organisation",
        "domainId": "genie-industriel-orga",
        "subdomain": "Gammes d'usinage & Préparation d'atelier",
        "shortDescription": "Rédige les fiches techniques d'instructions, choisit les outils de coupe et prépare les gammes d'usinage et d'assemblage en atelier.",
        "longDescription": "Le technicien méthodes est l'interlocuteur privilégié des opérateurs en atelier. Il décompose le travail en phases successives, choisit les vitesses de coupe, les avances et les paramètres machines, conçoit les gabarits de perçage ou de serrage et s'assure que chaque opérateur dispose du bon outil et de la bonne pièce au bon moment.",
        "missions": [
            "Établir les gammes d'usinage ou d'assemblage détaillées avec chronométrage opérationnel",
            "Choisir les plaquettes, forets, fraises et outils de coupe adaptés aux matériaux usinés",
            "Participer à la conception et à la mise au point des montages d'usinage et gabarits de soudage",
            "Former les opérateurs aux nouveaux modes opératoires et veiller à l'ergonomie des postes",
            "Analyser les défauts et non-conformités récurrentes d'atelier pour corriger les gammes"
        ],
        "workEnvironment": ["Ateliers d'usinage, de chaudronnerie et de montage", "Bureau méthodes adjacent aux lignes de production"],
        "typicalDay": [
            {"time": "08:00", "desc": "Point de démarrage d'équipe à l'atelier d'usinage CN"},
            {"time": "09:30", "desc": "Ajustement des paramètres de coupe d'une fraiseuse suite à une usure prématurée d'outil sur de l'acier inox"},
            {"time": "12:30", "desc": "Déjeuner avec les chefs d'îlots de production"},
            {"time": "14:00", "desc": "Rédaction d'une fiche d'instruction visuelle avec photos pour un nouveau poste de montage"},
            {"time": "16:30", "desc": "Essai d'un nouveau gabarit de positionnement avec un soudeur"}
        ],
        "companyRole": "Facilitateur technique direct de l'opérateur de production, garantissant l'application pratique des standards de productivité.",
        "skills": {
            "technical": ["Connaissance approfondie de l'usinage (tournage, fraisage) et de la mécanique générale", "Paramètres de coupe et choix des outillages (carbure, céramique, diamant)", "Lecture experte de plans techniques et cotation ISO", "Chronométrage et équilibrage de postes"],
            "human": ["Très bon relationnel avec les équipes de production", "Sens pratique et logique de terrain", "Pédagogie et écoute", "Réactivité face aux blocages techniques"],
            "tools": ["Catalogues d'outils (Sandvik, Seco, Walter)", "Logiciels de FAO / CFAO de base", "ERP de gestion d'atelier", "Chronomètre et outils de mesure"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac Pro", "title": "Bac Pro Technicien d'Usinage ou Métiers de l'Électricité", "desc": "Bases solides d'atelier et de manipulation des machines."},
                {"step": "Bac +2 (BTS)", "title": "BTS Conception des Processus de Réalisation de Produits (CPRP) ou BTS Mécanique", "desc": "Spécialisation avancée en élaboration de processus d'usinage et d'assemblage."}
            ],
            "schools": [
                {"name": "Lycées professionnels et CFA industriels de France (BTS CPRP) — France", "country": "France", "scope": "France"},
                {"name": "Lycée Technique Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Centre d'Entrepreneuriat et de Développement Technique (CEDT Le G15) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["CQPM Technicien en industrialisation et méthodes"]
        },
        "career": {
            "sectors": ["Usinage de précision", "Chaudronnerie & Tuyauterie", "Automobile", "Aéronautique"],
            "employerTypes": ["PME de mécanique industrielle", "Sous-traitants aéronautiques", "Usines d'équipements ferroviaires et navals"],
            "evolution": ["Responsable méthodes d'atelier", "Responsable d'atelier d'usinage", "Ingénieur méthodes par VAE"],
            "pros": ["Métier très valorisant au contact direct de la matière et des hommes", "Précieux dans l'atelier pour débloquer les problèmes", "Forte employabilité"],
            "cons": ["Environnement bruyant d'atelier et urgence permanente en cas d'arrêt machine"]
        },
        "gettingStarted": {
            "beginnerProject": "Prendre une pièce mécanique usinée et rédiger sa gamme de fabrication pas à pas (ordre des opérations, faces de référence, outils et vitesses).",
            "steps": [
                "Identifier la pièce brute de départ et la forme finie",
                "Déterminer l'ordre des opérations pour ne pas déformer la pièce",
                "Calculer les vitesses de rotation et les avances pour chaque outil"
            ],
            "freeResources": ["Guides du technicien en productique (Éditions Hachette)", "Sandvik Coromant E-Learning"]
        },
        "aiImpact": {
            "summary": "L'IA aide à recommander automatiquement les meilleures vitesses de coupe et trajectoires d'outils à partir des bases de données d'usinage mondiales.",
            "positiveImpacts": ["Calcul automatisé des conditions de coupe optimales pour minimiser l'usure de l'outil", "Génération rapide de fiches d'instructions bilingues"],
            "risksAndChallenges": ["Nécessité de valider les conditions réelles de vibration et de rigidité de la machine en atelier"],
            "recommendedSkills": ["Utilisation d'assistants numériques de sélection d'outillage"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les techniciens méthodes formés au CFPT Sénégal-Japon ou au Lycée Delafosse sont des piliers très courtisés par les ateliers de chaudronnerie lourde, de construction navale et d'entretien minier.",
            "westAfricaOpportunities": "Forte demande d'encadrement technique d'atelier dans les zones industrielles de Dakar, Abidjan et San Pedro.",
            "localChampions": ["Dakar Marine", "SOCOCIM", "Chantiers Navals du Sénégal"]
        },
        "salary": {
            "france": {"entry": 24000, "mid": 32000, "expert": 42000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant"},
            "senegal": {"entry": 280000, "mid": 500000, "expert": 800000, "currency": "FCFA", "period": "mois", "note": "Salaires nets dans les ateliers spécialisés et industries extractives"}
        },
        "connectedFamilies": ["btp-architecture"],
        "relatedJobs": ["ingenieur-methodes-industriel", "tourneur-fraiseur-cn", "ajusteur-monteur-industriel"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Technicien méthodes", "url": "https://www.letudiant.fr/metiers/secteur/industrie/ingenieur-e-methodes.html", "type": "metier"},
            {"organization": "Onisep", "title": "Technicien / Technicienne méthodes", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/technicien-technicienne-methodes", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Un mauvais choix de vitesse de coupe ou de plaquette d'usinage peut multiplier par dix l'usure de l'outil ou briser une pièce en titane à 5 000 euros en quelques secondes.",
            "pourquoi": "Le technicien méthodes maîtrise les lois de la thermodynamique de coupe pour maximiser la durée de vie de l'outil et l'état de surface de la pièce.",
            "a_retenir": "Le technicien méthodes transforme les contraintes physiques du métal en cadence d'atelier."
        }
    },

    # -----------------------------------------------------------------------
    # 8. INGÉNIEUR DE PRODUCTION INDUSTRIELLE
    # -----------------------------------------------------------------------
    {
        "id": "ingenieur-de-production",
        "slug": "ingenieur-de-production",
        "title": "Ingénieur de Production Industrielle",
        "aliases": ["Responsable de fabrication", "Ingénieur d'atelier de production", "Production Manager"],
        "icon": "🏭",
        "familyId": "industrie-mecanique",
        "domain": "Production & Fabrication",
        "domainId": "production-fabrication-indus",
        "subdomain": "Pilotage de la production & Performance d'atelier",
        "shortDescription": "Pilote la fabrication en série des produits dans l'usine, encadre les équipes d'opérateurs et garantit les cadences, la sécurité et la qualité.",
        "longDescription": "L'ingénieur de production est le chef d'orchestre opérationnel de l'usine. Responsable d'une ou plusieurs lignes de fabrication, il veille au respect des plannings de livraison, résout immédiatement les aléas techniques (pannes, ruptures d'approvisionnement), anime les équipes de chefs d'équipes et d'opérateurs, et conduit les chantiers de performance industrielle (TRS, taux de rebut, productivité).",
        "missions": [
            "Organiser et planifier la production quotidienne selon le carnet de commandes",
            "Encadrer, animer et développer les compétences des équipes d'opérateurs et chefs d'équipe (jusqu'à 100 personnes)",
            "Suivre et améliorer les indicateurs clés de performance : Taux de Rendement Synthétique (TRS), productivité, taux de rebut",
            "Garantir l'application stricte des règles d'hygiène, sécurité et conditions de travail (HSE)",
            "Coordonner les interventions d'urgence avec les services maintenance, méthodes et qualité"
        ],
        "workEnvironment": ["Ateliers industriels en continu (3x8, 2x8)", "Usines de grande série hautement automatisées", "Présence constante sur le terrain"],
        "typicalDay": [
            {"time": "07:30", "desc": "Point de relève avec l'équipe de nuit et analyse des chiffres de production et des éventuels arrêts"},
            {"time": "08:30", "desc": "Animation du rituel d'animation à intervalle court (AIC / Top 15) devant le tableau de bord de ligne"},
            {"time": "11:00", "desc": "Analyse d'un problème de non-conformité de cadence avec l'ingénieur méthodes et le responsable qualité"},
            {"time": "13:00", "desc": "Déjeuner au restaurant d'entreprise avec les chefs d'ateliers"},
            {"time": "14:30", "desc": "Audit de sécurité sur le port des EPI et analyse ergonomique d'un poste de chargement"},
            {"time": "16:30", "desc": "Validation du plan de production du lendemain avec le service ordonnancement"}
        ],
        "companyRole": "Pilote en chef de la transformation physique des matières premières en produits finis commercialisables, garant des volumes et des délais.",
        "skills": {
            "technical": ["Gestion et pilotage de production industrielle (TRS, OEE, SMED, Kanban)", "Connaissance des technologies de fabrication et d'automatisation", "Management de la sécurité industrielle et ergonomie", "Maîtrise des systèmes de supervision MES et ERP"],
            "human": ["Leadership naturel et capacité à fédérer des équipes d'horizons variés", "Sang-froid et réactivité face aux crises de production", "Sens de l'écoute et exemplarité", "Culture du résultat et de la performance"],
            "tools": ["Systèmes MES (Manufacturing Execution System)", "ERP (SAP PP, Oracle)", "Tableaux de bord de suivi TRS", "Outils de résolution de problèmes (8D, 5 Pourquoi, Ishikawa)"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +2 / BUT", "title": "BUT Génie Industriel et Maintenance (GIM) ou Génie Mécanique", "desc": "Bases de gestion de parc et de productique."},
                {"step": "Bac +5 (Diplôme d'Ingénieur)", "title": "Diplôme d'Ingénieur Généraliste ou Génie Industriel (Arts et Métiers, INSA, Mines, Centrale, ICAM)", "desc": "Management d'équipes, pilotage financier d'atelier et systèmes industriels."}
            ],
            "schools": [
                {"name": "Arts et Métiers ENSAM — France", "country": "France", "scope": "France"},
                {"name": "ICAM (Institut Catholique d'Arts et Métiers) — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique de Dakar (ESP - UCAD) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Polytechnique de Thiès (EPT) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certifications Lean Management / Six Sigma", "Habilitations sécurité industrielle"]
        },
        "career": {
            "sectors": ["Agroalimentaire", "Automobile", "Pharmaceutique", "Métallurgie", "Chimie & Plasturgie"],
            "employerTypes": ["Usines de production de moyenne et grande taille", "Multinationales manufacturières", "ETI industrielles"],
            "evolution": ["Responsable de département de production", "Directeur de production", "Directeur d'usine / Directeur de site"],
            "pros": ["Poste d'action au cœur du réacteur économique de l'entreprise", "Richesse des relations humaines quotidiennes", "Tremplin idéal vers la direction générale d'usine"],
            "cons": ["Pression constante des cadences et des livraisons", "Rythme de travail exigeant (astreintes, travail posté)"]
        },
        "gettingStarted": {
            "beginnerProject": "Simuler l'ordonnancement et le calcul du TRS d'une mini-ligne de 3 postes de travail avec 5 pannes aléatoires sous tableur Excel.",
            "steps": [
                "Définir le taux de disponibilité, le taux de performance et le taux de qualité",
                "Calculer le produit des 3 ratios pour obtenir le TRS",
                "Mettre en place un plan d'action pour remonter le TRS de 65% à 85%"
            ],
            "freeResources": ["Guide pratique du TRS (AFNOR)", "Coursera Manufacturing Operations Management"]
        },
        "aiImpact": {
            "summary": "L'IA transforme le pilotage de production grâce à l'ordonnancement dynamique prédictif et à l'optimisation énergétique en temps réel des machines.",
            "positiveImpacts": ["Réduction des arrêts grâce à la détection précoce d'anomalies de ligne", "Aide à la décision pour réaffecter instantanément les opérateurs en cas de panne"],
            "risksAndChallenges": ["Ne pas perdre le contact physique et la compréhension humaine du travail en atelier"],
            "recommendedSkills": ["Pilotage d'usines connectées via plateformes MES intelligentes"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les ingénieurs de production sont les moteurs de la souveraineté alimentaire et industrielle locale (raffineries d'huile, biscuiteries de Thiès, cimenteries de Bargny, usines pharmaceutiques Medis/Institut Pasteur).",
            "westAfricaOpportunities": "Postes clés très rémunérateurs dans l'agro-industrie ivoirienne, ghanéenne et sénégalaise.",
            "localChampions": ["Compagnie Sucrière Sénégalaise (CSS)", "Patisen", "Grands Moulins de Dakar", "SOCOCIM Industries"]
        },
        "salary": {
            "france": {"entry": 38000, "mid": 50000, "expert": 72000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant & baromètres industriels"},
            "senegal": {"entry": 600000, "mid": 1200000, "expert": 2300000, "currency": "FCFA", "period": "mois", "note": "Salaires nets dans les usines de transformation à Dakar/Sandiara"}
        },
        "connectedFamilies": ["droit-management", "agriculture-elevage-peche"],
        "relatedJobs": ["ingenieur-methodes-industriel", "conducteur-ligne-production", "directeur-site-industriel"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Ingénieur de production", "url": "https://www.letudiant.fr/metiers/secteur/industrie/ingenieur-de-production.html", "type": "metier"},
            {"organization": "Onisep", "title": "Ingénieur / Ingénieure de production", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/ingenieur-ingenieure-de-production", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Un point de TRS (Taux de Rendement Synthétique) gagné sur une ligne d'embouteillage ou de conditionnement à grande vitesse peut représenter plus de 500 000 euros de gain annuel pour une usine.",
            "pourquoi": "Le TRS mesure l'efficacité réelle : temps utile par rapport au temps théorique. Les micro-arrêts de quelques secondes sont les plus coûteux.",
            "a_retenir": "L'ingénieur de production chasse chaque seconde gaspillée pour maximiser la création de valeur."
        }
    },

    # -----------------------------------------------------------------------
    # 9. CONDUCTEUR DE LIGNE DE PRODUCTION
    # -----------------------------------------------------------------------
    {
        "id": "conducteur-ligne-production",
        "slug": "conducteur-ligne-production",
        "title": "Conducteur de Ligne de Production",
        "aliases": ["Pilote de ligne de fabrication", "Opérateur-régleur de ligne", "Line Operator"],
        "icon": "🎛️",
        "familyId": "industrie-mecanique",
        "domain": "Production & Fabrication",
        "domainId": "production-fabrication-indus",
        "subdomain": "Conduite de ligne & Pilotage de fabrication",
        "shortDescription": "Pilote un ensemble de machines automatisées sur une ligne de fabrication, effectue les réglages et veille à l'approvisionnement continu.",
        "longDescription": "Le conducteur de ligne de production gère le fonctionnement d'un ensemble de machines enchaînées (remplisseuses, emballeuses, robots de palettisation, presses). Depuis son pupitre tactile et sur la ligne, il règle les paramètres de vitesse, contrôle la conformité des produits, approvisionne les consommables et intervient immédiatement en cas de bourrage ou de panne de premier niveau.",
        "missions": [
            "Mettre en route la ligne, charger les recettes de production sur les pupitres tactiles et régler les guides",
            "Contrôler la qualité des produits en cours de fabrication (poids, étanchéité, dimensions, étiquetage)",
            "Alimenter la ligne en matières premières et consommables (bobines de film, cartons, bouchons, étiquettes)",
            "Détecter les dérives, identifier l'origine des blocages et réaliser les dépannages de premier niveau",
            "Nettoyer et désinfecter les machines lors des changements de série et renseigner les fiches de suivi de production"
        ],
        "workEnvironment": ["Usines de grande série (agroalimentaire, cosmétique, pharmacie, plasturgie)", "Travail en équipes postées (2x8, 3x8, week-end)", "Port obligatoire d'équipements de protection (charlotte, gants, chaussures de sécurité)"],
        "typicalDay": [
            {"time": "05:45", "desc": "Passage de consignes avec le conducteur de l'équipe de nuit et vérification de la propreté de la ligne"},
            {"time": "06:15", "desc": "Changement de format pour passer au conditionnement de flacons de 500 ml : réglage des étoiles de transfert et des têtes de vissage"},
            {"time": "09:00", "desc": "Contrôle qualité sur échantillon de 20 produits et saisie des poids sur la tablette de ligne"},
            {"time": "11:30", "desc": "Résolution d'un bourrage de cartons sur l'encaisseuse automatique"},
            {"time": "13:45", "desc": "Nettoyage du poste et transmission des consignes à l'équipe d'après-midi"}
        ],
        "companyRole": "Opérateur central au pied des machines, assurant la régularité du flux physique et le respect direct de la qualité produit.",
        "skills": {
            "technical": ["Réglages mécaniques et pneumatiques de base", "Pilotage d'interfaces homme-machine (IHM) industrielles", "Application stricte des règles d'hygiène et de sécurité (HACCP, BPF)", "Maintenance de niveau 1 (nettoyage, graissage, débourrage)"],
            "human": ["Vigilance permanente et réactivité", "Habileté manuelle et précision de réglage", "Esprit d'équipe et communication claire", "Rigueur d'enregistrement des données"],
            "tools": ["Écrans IHM tactiles", "Outillage manuel d'atelier (clés, tournevis)", "Appareils de contrôle qualité (balances de précision, débitmètres, pieds à coulisse)"]
        },
        "studies": {
            "pathway": [
                {"step": "CAP / Bac Pro", "title": "Bac Pro Pilote de Ligne de Production (PLP) ou Bio-Industries de Transformation", "desc": "Apprentissage complet de la conduite d'installations automatisées et de la maintenance de 1er niveau."},
                {"step": "Bac +2 (BTS)", "title": "BTS Pilotage de Procédés ou BTS Maintenance des Systèmes", "desc": "Pour évoluer rapidement vers des postes de chef d'équipe de ligne."}
            ],
            "schools": [
                {"name": "Lycées professionnels industriels de France (Bac Pro PLP) — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "ISEP de Diamniadio (Filière Agro-Industrie) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["CQP Conducteur de ligne", "Certificat d'Aptitude à la Conduite En Sécurité (CACES Chariots de manutention)"]
        },
        "career": {
            "sectors": ["Agroalimentaire", "Pharmaceutique", "Cosmétique", "Plasturgie", "Automobile"],
            "employerTypes": ["Grandes usines de conditionnement", "PME agroalimentaires", "Coopératives industrielles"],
            "evolution": ["Chef d'équipe de production", "Animateur de ligne", "Technicien de maintenance industrielle par formation continue"],
            "pros": ["Métier dynamique sans monotonie", "Forte demande sur tout le territoire", "Nombreuses opportunités d'heures majorées en travail posté"],
            "cons": ["Horaires décalés (postes de nuit, matin ou week-end)", "Bruit et station debout prolongée"]
        },
        "gettingStarted": {
            "beginnerProject": "Visiter une usine locale lors des journées portes ouvertes industrielles ou regarder des vidéos de 'Processus de fabrication' (How It's Made) et schématiser les 5 étapes d'une ligne d'embouteillage.",
            "steps": [
                "Identifier les étapes : soufflage, remplissage, bouchage, étiquetage, encaissage",
                "Comprendre le rôle des capteurs optiques et inductifs entre chaque machine",
                "Découvrir la réglementation d'hygiène alimentaire HACCP"
            ],
            "freeResources": ["Vidéos documentaires industrielles How It's Made", "Fiches de l'Association Nationale des Industries Alimentaires (ANIA)"]
        },
        "aiImpact": {
            "summary": "L'automatisation et les caméras de vision IA prennent en charge les contrôles visuels répétitifs, permettant au conducteur de se concentrer sur l'anticipation des pannes et l'optimisation des réglages.",
            "positiveImpacts": ["Détection automatique des défauts d'étiquetage ou de niveau de remplissage", "Alertes prédictives sur mobile avant rupture d'approvisionnement"],
            "risksAndChallenges": ["Nécessité de comprendre les alertes numériques générées par les algorithmes"],
            "recommendedSkills": ["Utilisation de tablettes numériques d'atelier et terminaux connectés"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le conducteur de ligne est le cœur battant des unités de conditionnement d'eau minérale (Kirène, Casamançais), des biscuiteries et des usines de transformation de poisson à Dakar et Saint-Louis.",
            "westAfricaOpportunities": "Emplois très nombreux dans toutes les capitales d'Afrique de l'Ouest avec le développement des biens de grande consommation locaux.",
            "localChampions": ["SIAGRO (Kirène)", "Compagnie Sucrière Sénégalaise", "Patisen", "SOBOA (Boissons gazeuses et bières)"]
        },
        "salary": {
            "france": {"entry": 22000, "mid": 27000, "expert": 35000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant & primes de poste"},
            "senegal": {"entry": 180000, "mid": 320000, "expert": 500000, "currency": "FCFA", "period": "mois", "note": "Salaires nets constatés en usines agroalimentaires et industrielles"}
        },
        "connectedFamilies": ["agriculture-elevage-peche"],
        "relatedJobs": ["conducteur-production-automatisee", "ingenieur-de-production", "technicien-maintenance-industrielle"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Conducteur de ligne de production", "url": "https://www.letudiant.fr/metiers/secteur/industrie/conducteur-de-ligne-de-production.html", "type": "metier"},
            {"organization": "Onisep", "title": "Conducteur / Conductrice de ligne de production", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/conducteur-conductrice-de-ligne-de-production", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Une ligne moderne de conditionnement de boissons peut embouteiller, étiqueter et palettiser jusqu'à 60 000 bouteilles par heure sous la surveillance attentive d'un seul conducteur de ligne.",
            "pourquoi": "L'extrême automatisation de la chaîne exige un pilote capable de réagir en quelques secondes pour éviter un arrêt d'alimentation.",
            "a_retenir": "Le conducteur de ligne est le garant du débit continu de l'industrie moderne."
        }
    },

    # -----------------------------------------------------------------------
    # 10. CONDUCTEUR DE LIGNE AUTOMATISÉE
    # -----------------------------------------------------------------------
    {
        "id": "conducteur-production-automatisee",
        "slug": "conducteur-production-automatisee",
        "title": "Conducteur de Ligne Automatisée",
        "aliases": ["Pilote d'installation automatisée", "Opérateur d'îlot robotisé", "Automated Line Pilot"],
        "icon": "🤖",
        "familyId": "industrie-mecanique",
        "domain": "Production & Fabrication",
        "domainId": "production-fabrication-indus",
        "subdomain": "Îlots robotisés & Automatismes de production",
        "shortDescription": "Supervise des systèmes automatisés complexes et des cellules robotisées de fabrication, diagnostique les pannes de logique et optimise le flux.",
        "longDescription": "Le conducteur de ligne automatisée opère sur des installations industrielles de haute technologie intégrant des automates programmables industriels (API), des robots polyarticulés et des convoyeurs intelligents. Il surveille les synoptiques de contrôle, réarme les cellules robotisées après arrêt d'urgence, adapte les programmes de fabrication et assure la maintenance préventive de premier plan.",
        "missions": [
            "Piloter des installations industrielles robotisées via des pupitres de commande SCADA",
            "Superviser les trajectoires des bras manipulateurs et des robots de soudure ou de palettisation",
            "Diagnostiquer les pannes électropneumatiques et les défauts de capteurs à l'aide des schémas d'automatisme",
            "Réaliser les réglages fins de vitesse, de pression et de positionnement des vérins et pinces",
            "Collaborer avec les techniciens d'automatisme pour optimiser les temps de cycle des robots"
        ],
        "workEnvironment": ["Usines de haute technologie (automobile, électronique, aéronautique)", "Ateliers robotisés sous atmosphère contrôlée"],
        "typicalDay": [
            {"time": "08:00", "desc": "Mise sous tension des robots de la cellule de soudage et étalonnage des origines de repères"},
            {"time": "09:30", "desc": "Dépannage d'un capteur inductif encrassé bloquant le convoyeur à bande"},
            {"time": "12:30", "desc": "Déjeuner d'équipe"},
            {"time": "14:00", "desc": "Test de trajectoire manuelle au boîtier d'apprentissage (Teach Pendant) pour éviter une collision de préhenseur"},
            {"time": "16:30", "desc": "Enregistrement des cycles réalisés sur le logiciel de GMAO"}
        ],
        "companyRole": "Pilote expert des technologies avancées de l'atelier, garant de la synergie parfaite entre automates, robots et produit.",
        "skills": {
            "technical": ["Bases de programmation des automates (Siemens TIA Portal, Schneider SoMachine)", "Manipulation et sécurité des robots industriels (FANUC, KUKA, ABB)", "Électropneumatique industrielle et schémas électriques", "Diagnostic méthodique de pannes d'automatismes"],
            "human": ["Calme et sang-froid face aux alertes d'automatismes", "Raisonnement logique et déductif", "Respect scrupuleux des consignes de sécurité robotique", "Goût pour les technologies avancées"],
            "tools": ["Pupitres d'apprentissage robotique (Teach Pendant)", "Automates Siemens S7-1200/1500", "Multimètre et manomètre de pression", "Schémas électriques et pneumatiques"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac Pro", "title": "Bac Pro Métiers de l'Électricité et de ses Environnements Connectés (MELEC) ou PLP", "desc": "Câblage, sécurité électrique et automatisme."},
                {"step": "Bac +2 (BTS)", "title": "BTS Conception et Réalisation de Systèmes Automatiques (CRSA) ou BTS Électrotechnique", "desc": "Conduite avancée, programmation et mise en service de lignes automatisées."}
            ],
            "schools": [
                {"name": "Lycées techniques préparant au BTS CRSA — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Supérieure Polytechnique de Dakar (ESP) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "ISEP de Diamniadio — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Habilitation électrique B1V / BR", "Certification sécurité robotique (norme ISO 10218)"]
        },
        "career": {
            "sectors": ["Automobile & Véhicules électriques", "Aéronautique", "Agroalimentaire automatisé", "Électronique & Énergie"],
            "employerTypes": ["Usines 4.0 ultra-automatisées", "Constructeurs automobiles", "Groupes de biens de consommation"],
            "evolution": ["Technicien en automatisme", "Roboticien de maintenance", "Chef d'équipe d'îlots robotisés"],
            "pros": ["Travail au cœur de la robotique et de l'Industrie 4.0", "Moins de manutention lourde que sur une ligne manuelle", "Très forte valorisation des compétences techniques"],
            "cons": ["Complexité des diagnostics lors d'arrêts imprévus"]
        },
        "gettingStarted": {
            "beginnerProject": "Programmer un petit automate virtuel ou une carte programmable (Arduino/ESP32) pour commander un cycle de convoyeur avec capteur et arrêt automatique.",
            "steps": [
                "Établir le grafcet du fonctionnement séquentiel",
                "Traduire le grafcet en langage ladder ou logique",
                "Simuler les entrées/sorties et tester les modes marche/arrêt"
            ],
            "freeResources": ["Siemens Industry Online Support (tutoriels TIA Portal)", "Logiciels libres de simulation Grafcet/Ladder"]
        },
        "aiImpact": {
            "summary": "L'intégration de la maintenance prédictive par IA permet d'alerter le conducteur avant même qu'un axe de robot ou une électrovanne ne tombe en panne.",
            "positiveImpacts": ["Supervision visuelle en 3D de l'état de chaque composant de la ligne", "Assistance au diagnostic guidé par IA sur tablette d'atelier"],
            "risksAndChallenges": ["Dépendance aux modèles d'IA : l'opérateur doit conserver la capacité d'intervenir manuellement en mode dégradé"],
            "recommendedSkills": ["Compréhension des alertes de maintenance prédictive par vibration et température"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, avec l'installation de lignes modernes d'ensachage de ciment à grande cadence et de chaînes automatisées de mise en boîte de thon, les compétences en conduite automatisée sont parmi les plus recherchées du secteur manufacturier.",
            "westAfricaOpportunities": "Opportunités dans toutes les usines agro-industrielles et cimentières modernes de la sous-région ouest-africaine.",
            "localChampions": ["Dangote Cement Sénégal", "Ciments du Sahel", "SOCOCIM", "Scasa (Société de Conserverie Africaine)"]
        },
        "salary": {
            "france": {"entry": 24000, "mid": 30000, "expert": 38000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant"},
            "senegal": {"entry": 220000, "mid": 400000, "expert": 650000, "currency": "FCFA", "period": "mois", "note": "Salaires nets constatés en usines automatisées à Dakar/Thiès"}
        },
        "connectedFamilies": ["numerique-ia", "energie-renouvelable"],
        "relatedJobs": ["conducteur-ligne-production", "automaticien-industriel", "roboticien-industriel"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Conducteur de production automatisée", "url": "https://www.letudiant.fr/metiers/secteur/industrie/conducteur-ou-conductrice-production-automatisee.html", "type": "metier"},
            {"organization": "Onisep", "title": "Pilote d'installation automatisée", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/pilote-d-installation-automatisee", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Dans une usine 4.0, un conducteur de ligne automatisée peut superviser à lui seul jusqu'à 8 robots industriels synchronisés effectuant 120 opérations à la minute sans interruption.",
            "pourquoi": "L'opérateur humain devient le superviseur intelligent des machines, intervenant pour arbitrer, régler et optimiser plutôt que pour exécuter des tâches répétitives.",
            "a_retenir": "La ligne automatisée décuple la force de l'opérateur grâce à la robotique."
        }
    },

    # -----------------------------------------------------------------------
    # 11. ROBOTICIEN INDUSTRIEL
    # -----------------------------------------------------------------------
    {
        "id": "roboticien-industriel",
        "slug": "roboticien-industriel",
        "title": "Roboticien / Ingénieur en Robotique Industrielle",
        "aliases": ["Ingénieur roboticien", "Concepteur de cellules robotisées", "Robotics Engineer"],
        "icon": "🤖",
        "familyId": "industrie-mecanique",
        "domain": "Automatisation & Robotique",
        "domainId": "automatisation-robotique-indus",
        "subdomain": "Robotique industrielle & Bras polyarticulés",
        "shortDescription": "Conçoit, programme, intègre et optimise les robots industriels et les cellules de manipulation automatique dans les usines de production.",
        "longDescription": "Le roboticien donne vie aux robots industriels. Qu'il s'agisse de robots 6 axes pour le soudage de carrosseries, de robots Delta ultra-rapides pour l'emballage ou de cobots collaboratifs, il modélise la cellule, programme les trajectoires millimétrées, intègre les systèmes de vision par caméra, configure les barrières immatérielles de sécurité et optimise les temps de cycle pour atteindre une cadence maximale.",
        "missions": [
            "Concevoir l'implantation 3D de la cellule robotisée et modéliser l'accessibilité des préhenseurs",
            "Programmer les trajectoires des robots dans les langages constructeurs (KAREL/TP pour FANUC, KRL pour KUKA, RAPID pour ABB)",
            "Intégrer les systèmes de vision industrielle pour guider les robots sur pièces en mouvement",
            "Sécuriser la cellule conformément aux directives machines et aux normes de sécurité robotique (ISO 10218, ISO/TS 15066)",
            "Mettre en service les cellules chez les clients industriels et former les opérateurs d'atelier"
        ],
        "workEnvironment": ["Intégrateurs de robotique industrielle", "Centres d'ingénierie automobile et aéronautique", "Déplacements fréquents sur sites industriels clients"],
        "typicalDay": [
            {"time": "08:30", "desc": "Simulation hors-ligne d'une cellule de palettisation robotisée sous logiciel RoboDK"},
            {"time": "10:30", "desc": "Programmation des trajectoires fines de soudure à l'arc sur un robot FANUC en atelier d'intégration"},
            {"time": "12:30", "desc": "Déjeuner avec les automaticiens et ingénieurs vision"},
            {"time": "14:00", "desc": "Test de reconnaissance de forme et d'orientation de pièces par caméra 3D connectée au robot"},
            {"time": "16:30", "desc": "Audit de sécurité des barrières immatérielles et des scanners laser de zone"}
        ],
        "companyRole": "Créateur d'automatisation intelligente, rendant les usines plus compétitives, plus rapides et supprimant la pénibilité pour les humains.",
        "skills": {
            "technical": ["Programmation robotique multimarques (KUKA, FANUC, ABB, Stäubli, Yaskawa)", "Simulation robotique hors-ligne (Process Simulate, Delmia, RoboDK)", "Vision industrielle et traitement d'image appliqué au guidage robot", "Sécurité des machines et des cellules robotisées"],
            "human": ["Esprit d'innovation et passion pour la mécatronique", "Patience et persévérance lors des phases de mise au point", "Rigueur absolue sur la sécurité des personnes", "Sens aigu du travail collaboratif"],
            "tools": ["RoboDK", "KUKA KRC / WorkVisual", "FANUC ROBOGUIDE", "ABB RobotStudio", "Systèmes de vision Cognex / Keyence"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +2 / BUT", "title": "BUT Génie Électrique et Informatique Industrielle (GEII) ou BUT GMP", "desc": "Électronique, automatique et mécanique fondamentale."},
                {"step": "Bac +5 (Master / Diplôme d'Ingénieur)", "title": "Diplôme d'Ingénieur en Robotique, Mécatronique ou Automatique (Polytech, ENSTA, INSA, ENSMM)", "desc": "Cinématique inverse, vision robotique, commande avancée et intelligence artificielle embarquée."}
            ],
            "schools": [
                {"name": "Polytech Montpellier / Sorbonne (Département Robotique) — France", "country": "France", "scope": "France"},
                {"name": "Supmicrotech ENSMM (Besançon) — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique de Dakar (ESP - Département Génie Électrique) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "École Polytechnique de Thiès (EPT) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certifications officielles constructeurs (FANUC Certified Robot Programmer, ABB Certified System Engineer)"]
        },
        "career": {
            "sectors": ["Automobile & Batteries", "Aéronautique", "Agroalimentaire & Logistique", "Industrie pharmaceutique", "Métallurgie"],
            "employerTypes": ["Sociétés intégrateurs de robotique", "Grands constructeurs industriels", "Fabricants de robots", "Bureaux d'ingénierie"],
            "evolution": ["Chef de projet robotique", "Responsable du pôle automatisation et robotique", "Directeur technique mécatronique"],
            "pros": ["Métier à la pointe de l'innovation technologique", "Forte employabilité internationale et salaires attractifs", "Satisfaction de voir des machines complexes bouger avec fluidité"],
            "cons": ["Déplacements réguliers pour les installations sur sites industriels"]
        },
        "gettingStarted": {
            "beginnerProject": "Télécharger la version d'essai de RoboDK et simuler un bras robotisé 6 axes effectuant une tâche de 'Pick and Place' de cubes avec calcul de trajectoire sans collision.",
            "steps": [
                "Importer un modèle CAO de robot et un outil préhenseur",
                "Définir les cibles cartésiennes et les approches",
                "Générer le programme robot et vérifier la cinématique sans singularité"
            ],
            "freeResources": ["Documentation RoboDK & Tutoriels YouTube", "ROS (Robot Operating System) Open Source Tutorials", "Chaîne YouTube Robotique Industrielle"]
        },
        "aiImpact": {
            "summary": "L'IA transforme la robotique par l'apprentissage par renforcement et la vision générative, permettant aux robots de saisir des objets inconnus et désordonnés sans programmation préalable de trajectoire.",
            "positiveImpacts": ["Capacité de 'Bin Picking' (dévracage) de pièces mélangées avec succès supérieur à 99%", "Adaptation automatique de trajectoire face à un obstacle imprévu"],
            "risksAndChallenges": ["Temps de calcul et robustesse des modèles de vision en conditions de luminosité variables"],
            "recommendedSkills": ["Interfaçage ROS 2 et modèles de vision par ordinateur (YOLO, OpenCV)"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la robotique industrielle émerge rapidement dans la palettisation automatisée des cimenteries et des meuneries, ainsi que dans les nouvelles lignes de tri et d'emballage agricole à Saint-Louis et dans les Niayes.",
            "westAfricaOpportunities": "Demande croissante d'ingénieurs d'intégration pour adapter les solutions robotiques importées aux cadences locales.",
            "localChampions": ["Senegal Robotic Center (Dakar)", "ESP Robotique Club", "SOCOCIM", "Grands Moulins de Dakar"]
        },
        "salary": {
            "france": {"entry": 38000, "mid": 52000, "expert": 72000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant & baromètres mécatronique"},
            "senegal": {"entry": 600000, "mid": 1200000, "expert": 2200000, "currency": "FCFA", "period": "mois", "note": "Salaires nets dans les intégrateurs et grandes usines automatisées"}
        },
        "connectedFamilies": ["numerique-ia", "energie-renouvelable"],
        "relatedJobs": ["automaticien-industriel", "ingenieur-cobotique", "conducteur-production-automatisee"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Roboticien", "url": "https://www.letudiant.fr/metiers/secteur/industrie/roboticien.html", "type": "metier"},
            {"organization": "Onisep", "title": "Roboticien / Roboticienne", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/roboticien-roboticienne", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Selon la Fédération Internationale de la Robotique (IFR), la densité mondiale de robots a dépassé 150 robots pour 10 000 employés dans l'industrie manufacturière, avec des pointes à plus de 1 000 en Corée du Sud et en Allemagne.",
            "pourquoi": "Les robots réalisent les tâches insalubres, lourdes ou toxiques (peinture solvantée, soudage sous gaz protecteur) tout en augmentant la cadence de production.",
            "a_retenir": "Le roboticien ne remplace pas l'homme : il le libère des tâches physiques les plus usantes."
        }
    },

    # -----------------------------------------------------------------------
    # 12. AUTOMATICIEN INDUSTRIEL
    # -----------------------------------------------------------------------
    {
        "id": "automaticien-industriel",
        "slug": "automaticien-industriel",
        "title": "Automaticien / Ingénieur en Automatismes",
        "aliases": ["Automaticien industriel", "Ingénieur automaticien", "Automation Engineer"],
        "icon": "⚡",
        "familyId": "industrie-mecanique",
        "domain": "Automatisation & Robotique",
        "domainId": "automatisation-robotique-indus",
        "subdomain": "Automates programmables (API) & Systèmes SCADA",
        "shortDescription": "Programme la logique de commande des automates industriels, conçoit les interfaces de supervision et met en réseau les équipements d'usine.",
        "longDescription": "L'automaticien est le cerveau du système de production. Il conçoit l'architecture d'automatismes des machines et des usines entières. En programmant les automates programmables industriels (API / PLC) selon la norme IEC 61131-3 (Ladder, Grafcet, Texte Structuré), il synchronise les capteurs, les moteurs, les vannes et les vérins. Il conçoit également les écrans de supervision (SCADA) permettant aux opérateurs de piloter l'usine.",
        "missions": [
            "Concevoir l'architecture d'automatisme et les réseaux de communication industriels (Profinet, Ethernet/IP, Modbus TCP)",
            "Développer les programmes d'automates programmables industriels (API) sous Siemens TIA Portal, Schneider ou Rockwell",
            "Créer les écrans tactiles IHM et les systèmes de supervision globale d'usine (SCADA WinCC, Wonderware)",
            "Réaliser les tests de mise en service sur plateforme d'essais et le débuggage en conditions réelles d'atelier",
            "Assurer la mise en conformité des sécurités machines (coupures d'urgence, arrêts de sécurité programmés)"
        ],
        "workEnvironment": ["Bureaux d'études d'automatisme", "Usines de production de tous secteurs", "Déplacements sur sites industriels pour les mises en service"],
        "typicalDay": [
            {"time": "08:30", "desc": "Connexion en ligne avec un automate Siemens S7-1500 pour analyser un défaut de synchronisation de convoyeurs"},
            {"time": "10:00", "desc": "Développement d'un bloc fonctionnel en Texte Structuré (SCL) pour réguler le débit d'une cuve de mélange"},
            {"time": "12:30", "desc": "Déjeuner avec les électrotechniciens de l'équipe"},
            {"time": "14:00", "desc": "Conception d'écrans graphiques de supervision IHM sous WinCC avec affichage des courbes de température en temps réel"},
            {"time": "16:30", "desc": "Test de communication réseau entre l'automate maître et des variateurs de fréquence via Profinet"}
        ],
        "companyRole": "Maître de la logique séquentielle de l'usine, transformant les signaux physiques des capteurs en actions mécaniques parfaitement coordonnées.",
        "skills": {
            "technical": ["Programmation d'automates industriels selon la norme IEC 61131-3 (Ladder, FBD, SFC, ST/SCL)", "Supervision industrielle et SCADA (WinCC, InTouch, Ignition)", "Bus de terrain et réseaux industriels (Profinet, Profibus, EtherCAT, OPC-UA)", "Électrotechnique, instrumentation et variateurs de vitesse"],
            "human": ["Logique rigoureuse et esprit de méthode", "Capacité à diagnostiquer rapidement des pannes complexes", "Calme et sang-froid en phase de démarrage d'usine", "Autonomie et adaptabilité"],
            "tools": ["Siemens TIA Portal (Step 7 / WinCC)", "Schneider EcoStruxure Machine Expert", "Rockwell Studio 5000", "Logiciels SCADA (Ignition, PCVue)", "Multimètres et analyseurs de réseau bus"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +2 (BTS / BUT)", "title": "BTS CRSA (Conception et Réalisation de Systèmes Automatiques) ou BUT GEII", "desc": "Fondements de l'automatique, de l'électrotechnique et des automates programmables."},
                {"step": "Bac +5 (Diplôme d'Ingénieur)", "title": "Diplôme d'Ingénieur en Automatique, Informatique Industrielle ou Génie Électrique", "desc": "Réseaux industriels complexes, cybersécurité des systèmes de contrôle (OT) et automatisation 4.0."}
            ],
            "schools": [
                {"name": "INSA Strasbourg / Lyon (Génie Électrique & Automatique) — France", "country": "France", "scope": "France"},
                {"name": "ENSEEIHT Toulouse (Automatique & Systèmes) — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique de Dakar (ESP - Département Génie Électrique) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certifications Siemens Certified Automation Engineer", "Certifications Schneider Electric Automation Expert"]
        },
        "career": {
            "sectors": ["Chimie & Pharmacie", "Agroalimentaire", "Énergie & Traitement des eaux", "Automobile", "Métallurgie"],
            "employerTypes": ["Sociétés d'ingénierie et d'intégration d'automatismes", "Grands groupes manufacturiers", "Exploitants d'infrastructures d'eau et d'énergie"],
            "evolution": ["Chef de projet automatismes", "Architecte de systèmes de contrôle-commande d'usine", "Responsable technique électricité et automatismes"],
            "pros": ["Métier omniprésent dans toutes les industries modernes", "Plein emploi garanti et forte rémunération", "Polyvalence unique entre logiciel et matériel"],
            "cons": ["Périodes de mise en service parfois intenses avec horaires extensifs sur site"]
        },
        "gettingStarted": {
            "beginnerProject": "Télécharger un simulateur d'automates gratuit (ex: OpenPLC ou simulateur Siemens) et concevoir le programme complet d'un carrefour à feux tricolores avec détection de véhicules.",
            "steps": [
                "Écrire le grafcet avec les étapes, transitions et temporisations",
                "Coder le programme en langage Ladder ou SFC",
                "Simuler le fonctionnement et vérifier les conditions de sécurité"
            ],
            "freeResources": ["OpenPLC Project (logiciel open source IEC 61131-3)", "Tutoriels Schneider et Siemens sur YouTube", "AutomationDirect Learning Center"]
        },
        "aiImpact": {
            "summary": "L'IA générative commence à assister les automaticiens dans la génération automatique de blocs de code en Texte Structuré (ST) et la documentation des programmes.",
            "positiveImpacts": ["Génération de squelettes de programmes automates à partir de spécifications textuelles", "Détection automatique de bugs de logique dans les programmes"],
            "risksAndChallenges": ["Nécessité de relire et tester rigoureusement chaque ligne pour éviter les accidents matériels en atelier"],
            "recommendedSkills": ["Passerelles entre protocoles industriels et IA (OPC-UA, MQTT, Node-RED)"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'automaticien est indispensable pour piloter les stations de pompage et de traitement d'eau potable (usine de Keur Momar Sarr 3 - KMS3), les centrales électriques de la Senelec et les processus continus des cimenteries.",
            "westAfricaOpportunities": "Très forte demande dans toute l'Afrique de l'Ouest pour la maintenance et la modernisation des automates industriels.",
            "localChampions": ["Senelec (Société Nationale d'Électricité)", "SEN'EAU", "Dangote Cement", "SOCOCIM Industries"]
        },
        "salary": {
            "france": {"entry": 36000, "mid": 48000, "expert": 68000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant & grilles d'ingénierie"},
            "senegal": {"entry": 550000, "mid": 1100000, "expert": 2100000, "currency": "FCFA", "period": "mois", "note": "Salaires nets dans les grands groupes industriels et stations de traitement"}
        },
        "connectedFamilies": ["energie-renouvelable", "numerique-ia"],
        "relatedJobs": ["roboticien-industriel", "conducteur-production-automatisee", "electromecanicien"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Automaticien", "url": "https://www.letudiant.fr/metiers/secteur/industrie/automaticien.html", "type": "metier"},
            {"organization": "Onisep", "title": "Automaticien / Automaticienne", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/automaticien-automaticienne", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Dans une usine de traitement d'eau ou une centrale électrique, un système d'automatisme traite plus de 10 000 signaux de capteurs et d'actionneurs chaque quart de seconde sans faillir.",
            "pourquoi": "Les automates industriels (API) sont conçus pour fonctionner 24h/24 pendant 20 ans dans des environnements poussiéreux et soumis à d'intenses parasites électromagnétiques.",
            "a_retenir": "L'automaticien assure la fiabilité sans faille des fonctions critiques de l'industrie."
        }
    },

    # -----------------------------------------------------------------------
    # 13. INGÉNIEUR EN COBOTIQUE
    # -----------------------------------------------------------------------
    {
        "id": "ingenieur-cobotique",
        "slug": "ingenieur-cobotique",
        "title": "Ingénieur en Cobotique & Robotique Collaborative",
        "aliases": ["Ingénieur cobotique", "Spécialiste de la collaboration homme-robot", "Cobotics Engineer"],
        "icon": "🤝",
        "familyId": "industrie-mecanique",
        "domain": "Automatisation & Robotique",
        "domainId": "automatisation-robotique-indus",
        "subdomain": "Cobotique & Interaction homme-machine sûre",
        "shortDescription": "Conçoit et déploie des robots collaboratifs (cobots) qui travaillent au contact direct des opérateurs humains sans barrière de sécurité physique.",
        "longDescription": "L'ingénieur en cobotique incarne la nouvelle frontière de l'Industrie 4.0. Contrairement aux robots traditionnels enfermés dans des cages métalliques, les cobots partagent l'espace de travail des ouvriers pour les assister dans le port de charges, le vissage de précision ou le collage. L'ingénieur cobotique programme les trajectoires par apprentissage gestuel et garantit que les forces d'impact ne présentent aucun danger pour l'humain.",
        "missions": [
            "Concevoir et implanter des postes de travail collaboratifs homme-robot (sans barrières matérielles)",
            "Programmer et régler des cobots multiaxes légers (Universal Robots, Doosan, KUKA LBR iiwa, Fanuc CRX)",
            "Réaliser l'analyse des risques de collision selon la norme internationale ISO/TS 15066",
            "Concevoir des préhenseurs à retour d'effort et des effecteurs amortis et sécurisés",
            "Accompagner les opérateurs d'atelier dans l'adoption du robot pour réduire les troubles musculosquelettiques (TMS)"
        ],
        "workEnvironment": ["Lignes d'assemblage flexibles", "Ateliers d'usinage et de contrôle qualité", "Bureaux d'études en ergonomie et mécatronique"],
        "typicalDay": [
            {"time": "08:30", "desc": "Mesure des forces d'impact d'un cobot lors d'un test de contact sur mannequin selon la norme ISO/TS 15066"},
            {"time": "10:30", "desc": "Programmation par guidage manuel direct (lead-through) d'une tâche de vissage de carter moteur"},
            {"time": "12:30", "desc": "Déjeuner avec les médecins du travail et les ergonomes"},
            {"time": "14:00", "desc": "Atelier participatif avec un opérateur de montage pour adapter la trajectoire du cobot à son confort gestuel"},
            {"time": "16:30", "desc": "Optimisation des temps de cycle tout en maintenant la vitesse sécuritaire réglementaire"}
        ],
        "companyRole": "Architecte de la collaboration bienveillante entre l'homme et la machine, conjuguant flexibilité humaine et puissance robotique.",
        "skills": {
            "technical": ["Programmation de cobots (Polyscope Universal Robots, Doosan Dart-Studio)", "Norme de sécurité de la robotique collaborative (ISO/TS 15066)", "Capteurs d'efforts, peau tactile et technologies de détection de présence", "Ergonomie industrielle et biomécanique du travail"],
            "human": ["Empathie et grande écoute des opérateurs d'atelier", "Sens aigu de la sécurité humaine", "Pédagogie et sens de la formation", "Esprit novateur"],
            "tools": ["Cobots Universal Robots (UR3e, UR5e, UR10e)", "Dynamomètres de collision (GTE / Pilz PRMS)", "Logiciels de simulation ergonomique", "Capteurs de couple multiaxes"]
        },
        "studies": {
            "pathway": [
                {"step": "Bac +2 / BUT", "title": "BUT GEII ou BUT Génie Mécanique et Productique", "desc": "Bases d'électrotechnique, d'automatique et de mécanique."},
                {"step": "Bac +5 (Master / Diplôme d'Ingénieur)", "title": "Diplôme d'Ingénieur en Robotique, Mécatronique ou Génie Industriel", "desc": "Spécialisation en interaction physique homme-robot, sécurité industrielle et intelligence collaborative."}
            ],
            "schools": [
                {"name": "École Centrale de Nantes / CentraleSupélec — France", "country": "France", "scope": "France"},
                {"name": "Polytech Sorbonne / Université de Lorraine — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique de Dakar (ESP - UCAD) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Institut Supérieur d'Enseignement Professionnel (ISEP Diamniadio) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certifications officielles Universal Robots Core & Advanced Certified", "Formations certifiantes Pilz en sécurité des machines"]
        },
        "career": {
            "sectors": ["Automobile & Équipementiers", "Pharmacie & Cosmétique", "Horlogerie & Électronique de précision", "Agroalimentaire"],
            "employerTypes": ["Intégrateurs de robotique collaborative", "Constructeurs de cobots", "Industries manufacturières innovantes"],
            "evolution": ["Responsable du pôle robotique & cobotique", "Directeur de l'innovation industrielle 4.0", "Consultant expert en ergonomie et automatisation"],
            "pros": ["Domaine technologique en explosion mondiale (+30% de croissance annuelle)", "Rôle très positif : élimination des douleurs physiques des ouvriers", "Technologie accessible et rapide à déployer"],
            "cons": ["Contraintes normatives très strictes sur les vitesses et puissances maximales"]
        },
        "gettingStarted": {
            "beginnerProject": "Utiliser le simulateur en ligne gratuit d'Universal Robots (URSim) pour programmer une application de dépose de colle sur pièce complexe.",
            "steps": [
                "Lancer le simulateur sous machine virtuelle",
                "Programmer les points de passage avec la fonction 'MoveL' et 'Wait'",
                "Simuler la détection d'un obstacle et le passage en vitesse réduite"
            ],
            "freeResources": ["Universal Robots Academy (cours en ligne gratuits certifiants)", "Guide INRS sur la sécurité des robots collaboratifs"]
        },
        "aiImpact": {
            "summary": "L'IA dote les cobots de vision sémantique et de prédiction d'intention humaine, leur permettant d'anticiper le geste de l'opérateur pour lui tendre l'outil adéquat.",
            "positiveImpacts": ["Interactions gestuelles intuitives sans écran ni boîtier", "Adaptation fluide de la trajectoire du bras en temps réel"],
            "risksAndChallenges": ["Garantir la fiabilité absolue des modèles face aux mouvements brusques"],
            "recommendedSkills": ["Vision par ordinateur appliquée et reconnaissance de squelette humain"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la cobotique offre une alternative abordable et peu encombrante aux PME pour assister le conditionnement de produits alimentaires sans nécessiter de refaire l'architecture des bâtiments d'usine existants.",
            "westAfricaOpportunities": "Déploiement prometteur dans les laboratoires pharmaceutiques et les coopératives d'emballage de fruits d'exportation.",
            "localChampions": ["Medis Sénégal", "Dakar Tech Valley", "Ateliers d'ingénierie de Sandiara"]
        },
        "salary": {
            "france": {"entry": 39000, "mid": 53000, "expert": 74000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant & Observatoire de la métallurgie"},
            "senegal": {"entry": 650000, "mid": 1250000, "expert": 2200000, "currency": "FCFA", "period": "mois", "note": "Salaires nets dans les intégrateurs technologiques et projets industriels"}
        },
        "connectedFamilies": ["numerique-ia", "sante-biomedical"],
        "relatedJobs": ["roboticien-industriel", "automaticien-industriel", "ingenieur-methodes-industriel"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Ingénieur en cobotique", "url": "https://www.letudiant.fr/metiers/secteur/industrie/ingenieur-e-en-cobotique.html", "type": "metier"},
            {"organization": "Onisep", "title": "Filière Robotique & Cobotique", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/roboticien-roboticienne", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Le terme 'cobot' est un mot-valise inventé en 1996 par les professeurs Edward Colgate et Michael Peshkin de la Northwestern University pour désigner un robot qui collabore avec un opérateur sans risque de blessure.",
            "pourquoi": "Équipé de capteurs de force dans chaque articulation, un cobot s'arrête instantanément dès qu'il touche un être humain avec une force minime.",
            "a_retenir": "Le cobot n'a pas vocation à remplacer le travailleur, mais à lui offrir un troisième bras infatigable."
        }
    },

    # -----------------------------------------------------------------------
    # 14. MÉCANICIEN OUTILLEUR
    # -----------------------------------------------------------------------
    {
        "id": "mecanicien-outilleur",
        "slug": "mecanicien-outilleur",
        "title": "Mécanicien Outilleur / Mouliste de Précision",
        "aliases": ["Outilleur", "Mouliste", "Technicien outillage", "Toolmaker"],
        "icon": "🔧",
        "familyId": "industrie-mecanique",
        "domain": "Mécanique & Usinage",
        "domainId": "mecanique-industrielle",
        "subdomain": "Outillage de précision & Moules d'injection",
        "shortDescription": "Fabrique, ajuste, met au point et entretient les moules d'injection plastique, les matrices d'emboutissage et les outils de découpe de haute précision.",
        "longDescription": "Véritable orfèvre de la métallurgie, le mécanicien outilleur réalise les outillages industriels sans lesquels aucune fabrication en série ne serait possible (moules de bouteilles, matrices de capots de voiture, outils de découpe de canettes). Il usine les aciers spéciaux trempés au micron près, procède à l'ajustage manuel, au polissage miroir et aux essais sur presses.",
        "missions": [
            "Usiner les empreintes de moules et de matrices sur fraiseuses CN, tours et machines d'électroérosion (EDM)",
            "Ajuster manuellement les blocs et tiroirs de moules au bleu de Prusse et à la pierre d'abrasion",
            "Réaliser le polissage optique miroir des surfaces d'empreintes pour garantir un démoulage parfait",
            "Assembler les circuits de refroidissement, les éjecteurs et les éléments de guidage de l'outillage",
            "Tester l'outillage sur presse d'essai, mesurer les premières pièces et corriger les défauts d'aspect ou de cotes"
        ],
        "workEnvironment": ["Ateliers d'outillage de précision et de mécanique générale", "Environnement climatisé pour stabiliser la dilatation thermique des métaux"],
        "typicalDay": [
            {"time": "08:00", "desc": "Lecture des plans d'un moule d'injection plastique de boîtier électronique automobile"},
            {"time": "09:30", "desc": "Réglage d'une machine d'électroérosion par enfonçage avec électrode en cuivre pour graver des nervures profondes"},
            {"time": "12:30", "desc": "Déjeuner à l'atelier d'outillage"},
            {"time": "14:00", "desc": "Ajustage méticuleux des plans de joint d'un moule pour éliminer toute bavure de matière"},
            {"time": "16:30", "desc": "Polissage manuel de finition d'une empreinte avec pâte diamantée"}
        ],
        "companyRole": "Artisan de précision indispensable, sans lequel l'industrie plastique, métallurgique et automobile ne pourrait mouler ni emboutir aucune pièce.",
        "skills": {
            "technical": ["Usinage de très haute précision (tolérances au micron)", "Électroérosion par fil et par enfonçage (EDM)", "Ajustage manuel, grattage et polissage miroir", "Lecture de plans complexes de moules à tiroirs et circuits thermiques"],
            "human": ["Patience infinie et minutie d'artisan d'art", "Sensibilité tactile et dextérité manuelle exceptionnelle", "Capacité de concentration prolongée", "Fierté du travail bien fait"],
            "tools": ["Machines d'électroérosion (AgieCharmilles)", "Tours et fraiseuses de précision", "Pâte diamantée et meules de polissage", "Micromètres d'extérieur et comparateurs au micron"]
        },
        "studies": {
            "pathway": [
                {"step": "CAP / Bac Pro", "title": "Bac Pro Technicien Outilleur ou Technicien d'Usinage", "desc": "Bases de l'usinage conventionnel et des machines-outils."},
                {"step": "Bac +2 (BTS)", "title": "BTS Conception des Processus de Réalisation de Produits (CPRP) option Mouliste", "desc": "Conception et fabrication avancée d'outillages complexes de plasturgie et d'emboutissage."}
            ],
            "schools": [
                {"name": "Lycées professionnels de la plasturgie et de la mécanique de précision — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Lycée Technique Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "CEDT Le G15 (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["CQPM Outilleur mouliste", "Certifications d'usinage de précision CN"]
        },
        "career": {
            "sectors": ["Plasturgie & Injection", "Automobile & Carrosserie", "Emballage métallique", "Aéronautique", "Connectique & Horlogerie"],
            "employerTypes": ["Ateliers de fabrication de moules et d'outillages", "Grandes entreprises de plasturgie", "Équipementiers automobiles"],
            "evolution": ["Chef d'atelier outillage", "Concepteur d'outillages en bureau d'études", "Expert technique en mise au point moules"],
            "pros": ["Savoir-faire rare et très recherché sur le marché international", "Véritable statut d'expert respecté dans l'usine", "Forte satisfaction esthétique et technique"],
            "cons": ["Rareté des postes dans certaines régions, concentration dans les bassins de plasturgie"]
        },
        "gettingStarted": {
            "beginnerProject": "Ajuster manuellement deux cales d'acier à la lime et à la pierre d'abrasion pour obtenir un plan de contact étanche à la lumière sans jeu décelable.",
            "steps": [
                "Vérifier la planéité au marbre de contrôle avec du bleu de Prusse",
                "Gratter les points de contact hauts avec un grattoir triangulaire",
                "Mesurer au micromètre pour vérifier la cote au centième de millimètre"
            ],
            "freeResources": ["Vidéos de fabrication de moules d'injection plastique", "Manuel de l'outilleur (Éditions Dunod)"]
        },
        "aiImpact": {
            "summary": "L'IA optimise les trajectoires d'usinage à grande vitesse (UGV) et le refroidissement conformé (conformal cooling) par fabrication additive, mais l'ajustage final reste 100% humain.",
            "positiveImpacts": ["Calcul automatisé des canaux de refroidissement optimaux dans les moules 3D", "Anticipation des déformations de retrait plastique"],
            "risksAndChallenges": ["La machine ne peut remplacer le toucher et le regard de l'outilleur sur l'état de surface"],
            "recommendedSkills": ["Maîtrise des outillages hybrides fabriqués par impression 3D métal"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la demande de mécaniciens outilleurs est cruciale pour réparer et entretenir les moules de bouteilles et de bidons des usines d'eau minérale et d'huile, ainsi que pour les matrices d'emboutissage d'ustensiles métalliques.",
            "westAfricaOpportunities": "Secteur en plein essor avec la croissance des emballages plastiques recyclables en Afrique de l'Ouest.",
            "localChampions": ["SIMPA (Société Industrielle Moderne des Plastiques Africains)", "SENBUS Industries", "Plastique Sénégal"]
        },
        "salary": {
            "france": {"entry": 24000, "mid": 33000, "expert": 45000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant & Onisep"},
            "senegal": {"entry": 250000, "mid": 450000, "expert": 800000, "currency": "FCFA", "period": "mois", "note": "Salaires nets constatés en ateliers de plasturgie et mécanique de précision"}
        },
        "connectedFamilies": ["arts-culture-patrimoine"],
        "relatedJobs": ["tourneur-fraiseur-cn", "ajusteur-monteur-industriel", "ingenieur-mecanique"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Outilleur", "url": "https://www.letudiant.fr/metiers/secteur/industrie/outilleur.html", "type": "metier"},
            {"organization": "Onisep", "title": "Mécanicien / Mécanicienne outilleur", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/mecanicien-mecanicienne-outilleur-outilleuse", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Un moule d'injection plastique automobile pour un tableau de bord peut peser jusqu'à 30 tonnes d'acier spécial et coûter plus de 500 000 euros.",
            "pourquoi": "Il doit résister à des pressions de plusieurs centaines de bars et fonctionner à des cadences de plusieurs millions de cycles sans perdre un seul micron de précision.",
            "a_retenir": "L'outilleur façonne le cœur métallique qui donne naissance à tous les objets de série."
        }
    },

    # -----------------------------------------------------------------------
    # 15. AJUSTEUR-MONTEUR INDUSTRIEL
    # -----------------------------------------------------------------------
    {
        "id": "ajusteur-monteur-industriel",
        "slug": "ajusteur-monteur-industriel",
        "title": "Ajusteur-Monteur Mécanique",
        "aliases": ["Monteur mécanique", "Mécanicien d'ajustage et d'assemblage", "Fitter-Assembler"],
        "icon": "🔩",
        "familyId": "industrie-mecanique",
        "domain": "Mécanique & Usinage",
        "domainId": "mecanique-industrielle",
        "subdomain": "Assemblage mécanique & Mise au point d'ensembles",
        "shortDescription": "Assemble, ajuste, cale et met au point les pièces mécaniques élémentaires pour constituer des sous-ensembles et machines complètes fonctionnelles.",
        "longDescription": "L'ajusteur-monteur est le constructeur final de la mécanique. À partir des plans d'ensemble, il assemble les roulements, engrenages, vérins et transmissions. Lorsque les pièces usinées présentent de légers écarts, il les lime, les taraude ou les alèse pour assurer un glissement ou un emboîtement parfait sans point dur. Il contrôle le jeu fonctionnel et s'assure du parfait mouvement cinématique.",
        "missions": [
            "Lire et interpréter les plans d'ensemble mécaniques avec chaînes de cotes et nomenclatures",
            "Ajuster et retoucher les pièces métalliques à la main ou sur machines d'atelier (perçage, alésage, ébavurage)",
            "Monter et assembler les roulements à billes, joints, bagues, arbres et éléments de transmission",
            "Contrôler les jeux de fonctionnement, les faux-ronds et les alignements au comparateur à cadran",
            "Tester le fonctionnement à vide et en charge des mécanismes et valider les couples de serrage"
        ],
        "workEnvironment": ["Ateliers de montage de machines spéciales", "Lignes d'assemblage aéronautiques, ferroviaires et navales", "Environnement d'atelier mécanique propre"],
        "typicalDay": [
            {"time": "08:00", "desc": "Lecture de la gamme de montage d'un train d'engrenages pour un réducteur de turbine"},
            {"time": "09:30", "desc": "Montage des roulements à la presse hydraulique et vérification du jeu axial au comparateur"},
            {"time": "12:30", "desc": "Déjeuner avec l'équipe de mécanique"},
            {"time": "14:00", "desc": "Calage des jeux d'engrenage au moyen de cales pelables de précision"},
            {"time": "16:30", "desc": "Serrage au couple contrôlé à la clé dynamométrique et freinage des vis au fil à freiner"}
        ],
        "companyRole": "Maillon d'assemblage final, transformant un tas de pièces métalliques isolées en une machine vivante et performante.",
        "skills": {
            "technical": ["Montage d'éléments mécaniques de haute précision", "Utilisation des outils de mesure d'atelier (comparateur, jauge de profondeur)", "Techniques d'assemblage thermique (frette à chaud, azote liquide)", "Lecture de plans d'ensemble complexes"],
            "human": ["Dextérité manuelle remarquable", "Rigueur et respect scrupuleux des couples de serrage", "Patience et sens du détail", "Esprit d'équipe"],
            "tools": ["Clés dynamométriques étalonnées", "Presses hydrauliques d'assemblage", "Comparateurs à cadran au centième", "Appareils de chauffe par induction de roulements"]
        },
        "studies": {
            "pathway": [
                {"step": "CAP / Bac Pro", "title": "CAP ou Bac Pro Technicien d'Usinage / Aéronautique option Structure", "desc": "Bases de l'ajustage manuel, de la métrologie et de l'assemblage."},
                {"step": "Bac +2 (BTS)", "title": "BTS Conception et Réalisation en Chaudronnerie ou CPRP", "desc": "Perfectionnement pour accéder à des postes de monteur d'ensembles complexes."}
            ],
            "schools": [
                {"name": "Lycées professionnels de l'aéronautique et de la mécanique — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Lycée Technique Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "CEDT Le G15 (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["CQPM Ajusteur-monteur de systèmes mécaniques"]
        },
        "career": {
            "sectors": ["Aéronautique (moteurs, trains d'atterrissage)", "Ferroviaire (bogies, moteurs de traction)", "Machines spéciales", "Armement & Défense"],
            "employerTypes": ["Constructeurs aéronautiques (Airbus, Safran)", "Constructeurs ferroviaires (Alstom)", "PME de mécanique générale"],
            "evolution": ["Chef d'équipe de montage", "Technicien d'essais mécaniques", "Responsable d'atelier de montage"],
            "pros": ["Métier très gratifiant au cœur de réalisations techniques prestigieuses", "Postes très recherchés dans l'aéronautique et le ferroviaire", "Excellente ambiance d'atelier"],
            "cons": ["Port de charges et postures parfois contraignantes lors du montage de grosses machines"]
        },
        "gettingStarted": {
            "beginnerProject": "Assembler et régler un petit mécanisme à engrenages (ex: boîte de vitesses de modélisme ou micromécanique), mesurer le jeu d'entre-dents et éliminer les points durs.",
            "steps": [
                "Vérifier le libre pivotement de chaque arbre",
                "Mesurer le jeu fonctionnel à la jauge d'épaisseur",
                "Appliquer le frein filet adéquat sur la visserie"
            ],
            "freeResources": ["Vidéos de formation à l'ajustage mécanique", "Guides d'assemblage SKF pour roulements"]
        },
        "aiImpact": {
            "summary": "L'IA et la réalité augmentée guident l'ajusteur-monteur en projetant directement les étapes de montage et les couples de serrage sur des lunettes connectées.",
            "positiveImpacts": ["Zéro oubli d'opération grâce au guidage pas-à-pas", "Enregistrement automatique des couples de serrage pour la traçabilité"],
            "risksAndChallenges": ["La dextérité humaine et le ressenti tactile du serrage restent indispensables"],
            "recommendedSkills": ["Utilisation d'outils de vissage connectés et de fiches de montage numériques"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les ajusteurs-monteurs sont essentiels pour le montage et la maintenance des trains du TER de Dakar, des rames ferroviaires des ICS et des moteurs marins au Chantier Naval de Dakar.",
            "westAfricaOpportunities": "Forte demande dans la révision lourde des engins de travaux publics et des turbines hydroélectriques en Afrique de l'Ouest.",
            "localChampions": ["Dakar Marine", "SETER (TER de Dakar)", "Senter (Chemins de fer du Sénégal)", "SOCOCIM"]
        },
        "salary": {
            "france": {"entry": 23000, "mid": 29000, "expert": 38000, "currency": "EUR", "period": "an", "note": "Source : Onisep & L'Étudiant"},
            "senegal": {"entry": 220000, "mid": 400000, "expert": 700000, "currency": "FCFA", "period": "mois", "note": "Salaires nets dans les ateliers ferroviaires, navals et miniers"}
        },
        "connectedFamilies": ["aeronautique-spatial", "transports-logistique"],
        "relatedJobs": ["mecanicien-outilleur", "tourneur-fraiseur-cn", "electromecanicien"],
        "sources": [
            {"organization": "Onisep", "title": "Ajusteur-monteur / Ajusteuse-monteuse", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/ajusteur-monteur-ajusteuse-monteuse", "type": "metier"},
            {"organization": "L'Étudiant", "title": "Métiers de l'industrie : Ajusteur-monteur", "url": "https://www.letudiant.fr/metiers/secteur/industrie.html", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Dans l'assemblage d'un réacteur d'avion, certaines pièces sont assemblées avec un jeu inférieur à 5 microns grâce au calage manuel de l'ajusteur-monteur.",
            "pourquoi": "À 10 000 mètres d'altitude, une dilatation thermique non anticipée ou un serrage imprécis pourrait bloquer le moteur.",
            "a_retenir": "L'ajusteur-monteur met son sens du toucher au service de la sécurité de vol."
        }
    },

    # -----------------------------------------------------------------------
    # 16. TOURNEUR-FRAISEUR CN
    # -----------------------------------------------------------------------
    {
        "id": "tourneur-fraiseur-cn",
        "slug": "tourneur-fraiseur-cn",
        "title": "Tourneur-Fraiseur / Opérateur d'Usinage CN",
        "aliases": ["Opérateur sur machines-outils à commande numérique", "Usiner CN", "Machinist CNC"],
        "icon": "⚙️",
        "familyId": "industrie-mecanique",
        "domain": "Mécanique & Usinage",
        "domainId": "mecanique-industrielle",
        "subdomain": "Usinage à commande numérique & FAO",
        "shortDescription": "Programme, règle et conduit des machines-outils à commande numérique (tours, centres d'usinage 5 axes) pour sculpter des pièces dans la masse de métal.",
        "longDescription": "Le tourneur-fraiseur CN enlève de la matière pour donner naissance à des pièces mécaniques de haute précision. À partir du programme informatique, il choisit les outils de coupe, monte les mors de serrage, jauge les outils au millième de millimètre, lance l'usinage à grande vitesse et contrôle scrupuleusement les cotes avec des instruments de métrologie.",
        "missions": [
            "Préparer et régler les centres d'usinage 3, 4 ou 5 axes et les tours à commande numérique",
            "Charger le programme CN (codes ISO, Heidenhain, Fanuc, Siemens Sinumerik) et vérifier les trajectoires à vide",
            "Monter et jauger les outils coupants (fraises, forets, plaquettes carbure) au banc de préréglage",
            "Brider les pièces brutes (blocs d'acier, d'aluminium, d'inconel, de titane) en garantissant l'isostatisme",
            "Contrôler la première pièce usinée sur machine tridimensionnelle (MMT) et corriger les jauges d'usure"
        ],
        "workEnvironment": ["Ateliers d'usinage de mécanique de précision", "Centres d'usinage modernes fermés et insonorisés", "Huile de coupe et copeaux métalliques"],
        "typicalDay": [
            {"time": "08:00", "desc": "Prise de poste et vérification des niveaux de fluide d'arrosage et des bacs à copeaux"},
            {"time": "09:00", "desc": "Montage d'une série de 10 plaquettes carbure sur une tête de fraisage UGV"},
            {"time": "12:30", "desc": "Déjeuner avec les techniciens d'usinage"},
            {"time": "14:00", "desc": "Usinage d'un carter en alliage d'aluminium aéronautique sur centre 5 axes"},
            {"time": "16:00", "desc": "Contrôle des tolérances géométriques de concentricité au comparateur micrométrique"}
        ],
        "companyRole": "Artisan de la coupe du métal, transformant un bloc de métal brut en une pièce fonctionnelle d'une précision chirurgicale.",
        "skills": {
            "technical": ["Programmation et conduite de machines CN (codes G, Heidenhain, Mazatrol, Fanuc)", "Connaissance fine des vitesses de coupe et de l'avance selon les matériaux", "Métrologie d'atelier et contrôle tridimensionnel", "Maintenance préventive des machines-outils (lubrification, géométrie)"],
            "human": ["Précision extrême et concentration soutenue", "Sens de l'écoute du bruit de coupe du métal", "Rigueur et respect des tolérances", "Autonomie sur machine"],
            "tools": ["Centres d'usinage 5 axes (DMG Mori, Mazak, Haas)", "Bancs de préréglage d'outils (Zoller)", "Machines à mesurer tridimensionnelles (MMT)", "Instruments de métrologie (palpeurs, micromètres)"]
        },
        "studies": {
            "pathway": [
                {"step": "CAP / Bac Pro", "title": "Bac Pro Technicien d'Usinage (TU) ou Modélisation et Usinage", "desc": "Apprentissage intensif des machines conventionnelles et CN."},
                {"step": "Bac +2 (BTS)", "title": "BTS Conception des Processus de Réalisation de Produits (CPRP)", "desc": "Programmation FAO avancée 5 axes et optimisation de production."}
            ],
            "schools": [
                {"name": "Lycées professionnels industriels préparant au Bac Pro TU / BTS CPRP — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Lycée Technique Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "CEDT Le G15 (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["CQPM Opérateur-régleur sur machines-outils à commande numérique"]
        },
        "career": {
            "sectors": ["Aéronautique & Spatial", "Automobile & Compétition", "Médical (implants, prothèses)", "Armement & Défense", "Énergie"],
            "employerTypes": ["PME de mécanique de précision", "Sous-traitants aéronautiques de rang 1", "Grands ateliers de maintenance industrielle"],
            "evolution": ["Programmeur régleur CN", "Programmeur FAO en bureau des méthodes", "Chef d'atelier d'usinage"],
            "pros": ["Métier moderne sur des machines high-tech à plusieurs centaines de milliers d'euros", "Forte pénurie de compétences garantissant de très belles opportunités", "Fierté de sortir une pièce parfaite du métal"],
            "cons": ["Environnement d'atelier avec présence d'huiles de coupe, port permanent des EPI"]
        },
        "gettingStarted": {
            "beginnerProject": "Utiliser un simulateur de tournage/fraisage CN gratuit (ex: CNC Simulator Pro ou Fusion 360 Manufacture) pour programmer et simuler l'usinage d'un arbre étagé en code G.",
            "steps": [
                "Écrire les blocs G00, G01, G02/G03 pour définir le profil",
                "Simuler l'enlèvement de matière pour éviter les collisions",
                "Vérifier les cotes obtenues sur le simulateur"
            ],
            "freeResources": ["Titans of CNC Academy (cours en ligne gratuits de renommée mondiale)", "Documentation Sandvik Coromant sur l'usinage"]
        },
        "aiImpact": {
            "summary": "L'IA surveille l'effort de coupe et les micro-vibrations de la broche en temps réel pour adapter automatiquement l'avance et prévenir la casse d'outil avant qu'elle ne survienne.",
            "positiveImpacts": ["Optimisation dynamique des trajectoires d'ébauche", "Détection prédictive de l'usure de l'arête tranchante"],
            "risksAndChallenges": ["L'usinage de matériaux exotiques (titane, inconel) exige toujours le ressenti acoustique et l'expérience du professionnel"],
            "recommendedSkills": ["Interprétation des données de télémétrie de broche d'usinage connectée"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les tourneurs-fraiseurs formés au CFPT Sénégal-Japon ou à Delafosse sont extrêmement recherchés pour l'usinage sur mesure de pièces de rechange de dragues marines, de concasseurs miniers et de pompes industrielles.",
            "westAfricaOpportunities": "Pénurie sévère d'opérateurs qualifiés sur machines CN dans toute l'Afrique de l'Ouest, assurant une valorisation salariale immédiate.",
            "localChampions": ["Chantier Naval de Dakar (Dakar Marine)", "SOCOCIM", "Ateliers Mécaniques du Sahel", "SENBUS Industries"]
        },
        "salary": {
            "france": {"entry": 24000, "mid": 31000, "expert": 42000, "currency": "EUR", "period": "an", "note": "Source : Onisep & L'Étudiant"},
            "senegal": {"entry": 260000, "mid": 480000, "expert": 850000, "currency": "FCFA", "period": "mois", "note": "Salaires nets dans les ateliers de précision et maintenance navale à Dakar"}
        },
        "connectedFamilies": ["aeronautique-spatial", "transports-logistique"],
        "relatedJobs": ["mecanicien-outilleur", "ajusteur-monteur-industriel", "technicien-methodes-industriel"],
        "sources": [
            {"organization": "Onisep", "title": "Tourneur-fraiseur / Tourneuse-fraiseuse", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/tourneur-fraiseur-tourneuse-fraiseuse", "type": "metier"},
            {"organization": "L'Étudiant", "title": "Les métiers de l'industrie : Tourneur-fraiseur", "url": "https://www.letudiant.fr/metiers/secteur/industrie.html", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Les broches de fraisage à grande vitesse (UGV) modernes tournent jusqu'à 40 000 tours par minute, projetant des copeaux métalliques à plus de 200 km/h dans l'enceinte fermée de la machine.",
            "pourquoi": "À cette vitesse de coupe phénoménale, la chaleur s'évacue directement dans le copeau sans chauffer la pièce, garantissant une précision micrométrique.",
            "a_retenir": "Le tourneur-fraiseur CN dompte la physique des métaux à des vitesses vertigineuses."
        }
    },

    # -----------------------------------------------------------------------
    # 17. CHAUDRONNIER INDUSTRIEL
    # -----------------------------------------------------------------------
    {
        "id": "chaudronnier-industriel",
        "slug": "chaudronnier-industriel",
        "title": "Chaudronnier Industriel / Tôlier Formeur",
        "aliases": ["Chaudronnier", "Chaudronnier-tôlier", "Boilermaker / Sheet Metal Worker"],
        "icon": "🔥",
        "familyId": "industrie-mecanique",
        "domain": "Mécanique & Usinage",
        "domainId": "mecanique-industrielle",
        "subdomain": "Chaudronnerie, Tôlerie & Tuyauterie industrielle",
        "shortDescription": "Découpe, trace, plie, roule et assemble les tôles et profilés métalliques pour fabriquer des cuves, des réservoirs, des coques de navires et des tuyauteries.",
        "longDescription": "Le chaudronnier façonne le métal en feuille. À partir de plaques d'acier, d'inox ou d'aluminium planes de quelques millimètres à plusieurs centimètres d'épaisseur, il développe les formes géométriques dans l'espace, découpe (laser, plasma), roule au laminoir pour créer des cylindres ou des cônes, plie sur presse plieuse et assemble les sous-ensembles chaudronnés pour les industries pétrolières, chimiques, alimentaires ou navales.",
        "missions": [
            "Lire les plans de chaudronnerie et tracer les développés géométriques des pièces sur tôle",
            "Découper les tôles par cisaillage, oxycoupage, découpe plasma ou laser CN",
            "Mettre en forme les éléments métalliques par roulage, cintrage, pliage et emboutissage",
            "Pré-assembler et pointer les éléments par soudage de pointage en contrôlant l'équerrage",
            "Vérifier la conformité dimensionnelle et géométrique de l'ouvrage fini avant le soudage final"
        ],
        "workEnvironment": ["Ateliers de chaudronnerie industrielle", "Chantiers navals et plateformes pétrolières", "Travail du métal lourd avec ponts roulants"],
        "typicalDay": [
            {"time": "07:30", "desc": "Briefing sécurité et lecture des plans de fabrication d'une cuve de stockage sous pression"},
            {"time": "08:30", "desc": "Traçage et découpe plasma d'une virole métallique de 2 mètres de diamètre"},
            {"time": "12:00", "desc": "Déjeuner d'équipe"},
            {"time": "13:30", "desc": "Roulage de la tôle de 15 mm d'épaisseur sur une rouleuse à 3 rouleaux croisés"},
            {"time": "16:00", "desc": "Pointage de la virole avec le fond bombé et contrôle de circularité au gabarit"}
        ],
        "companyRole": "Bâtisseur des structures métalliques creuses et des appareils sous pression indispensables au transport et au stockage des fluides industriels.",
        "skills": {
            "technical": ["Traçage géométrique des développés de formes (cônes, cylindres, trémies)", "Formage des métaux (pliage CN, roulage, emboutissage)", "Découpe thermique et mécanique des tôles fortes", "Bases de soudage TIG / MIG-MAG pour le pointage"],
            "human": ["Vision tridimensionnelle exceptionnelle pour imaginer un volume à partir d'une tôle plate", "Habileté manuelle et robustesse physique", "Rigueur et respect des tolérances géométriques", "Sens aigu de la sécurité lors des manutentions lourdes"],
            "tools": ["Presses plieuses CN", "Rouleuses de tôles", "Machines de découpe plasma / laser", "Ponts roulants et palans de manutention"]
        },
        "studies": {
            "pathway": [
                {"step": "CAP / Bac Pro", "title": "Bac Pro Technicien en Chaudronnerie Industrielle (TCI)", "desc": "Apprentissage du traçage, du formage et des assemblages mécano-soudés."},
                {"step": "Bac +2 (BTS)", "title": "BTS Conception et Réalisation en Chaudronnerie Industrielle (CRCI)", "desc": "Calculs des appareils à pression (CODAP), devis et gestion de projets chaudronnés."}
            ],
            "schools": [
                {"name": "Lycées professionnels de chaudronnerie et métallurgie — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Lycée Technique Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "CEDT Le G15 (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["CQPM Chaudronnier d'atelier", "Habilitation pontier élingueur"]
        },
        "career": {
            "sectors": ["Construction navale", "Pétrole & Gaz (cuves, tuyauteries offshore)", "Nucléaire & Énergie", "Agroalimentaire (cuves inox vinicoles/laitières)", "Aéronautique"],
            "employerTypes": ["Chantiers navals", "PME de chaudronnerie et tuyauterie", "Groupes de chaudronnerie nucléaire et pétrochimique"],
            "evolution": ["Chef d'atelier chaudronnerie", "Traceur de bureau d'études chaudronnées", "Contrôleur d'appareils sous pression"],
            "pros": ["Métier ancestral hautement modernisé par le laser et le numérique", "Forte demande sur les grands chantiers industriels mondiaux", "Fierté d'ériger des ouvrages monumentaux"],
            "cons": ["Bruit d'atelier, manutention de tôles lourdes nécessitant un respect absolu de la sécurité"]
        },
        "gettingStarted": {
            "beginnerProject": "Tracer sur un carton le développé d'un cône tronqué ou d'une trémie de raccordement carré-rond, le découper et vérifier que la forme 3D obtenue correspond au plan.",
            "steps": [
                "Utiliser la méthode des génératrices pour projeter le cône",
                "Calculer les rayons de courbure du développé",
                "Plier et scotcher pour admirer la forme spatiale"
            ],
            "freeResources": ["Livres de traçage de chaudronnerie (Éditions Dunod)", "Tutoriels de chaudronnerie YouTube"]
        },
        "aiImpact": {
            "summary": "Les logiciels d'imbrication (nesting) assistés par IA optimisent le placement des pièces sur les tôles pour réduire les chutes de métal à moins de 3%.",
            "positiveImpacts": ["Génération instantanée des développés 3D à partir de la CAO", "Programmation automatique des séquences de pliage pour éviter les collisions sur presse"],
            "risksAndChallenges": ["La maîtrise physique du retour élastique de la tôle après pliage reste une expertise humaine irremplaçable"],
            "recommendedSkills": ["Maîtrise des logiciels de dépliage et de FAO tôlerie (Alma, Radan, Lantek)"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la chaudronnerie lourde est un métier d'excellence stratégique : fabrication des barges fluviales, maintenance des silos de ciment, des cuves de raffinage de la SAR et des installations navales de Dakar Marine.",
            "westAfricaOpportunities": "Forte recherche de chaudronniers qualifiés sur les chantiers miniers en Guinée et au Mali et pétroliers offshore au Sénégal.",
            "localChampions": ["Dakar Marine", "Société Africaine de Raffinage (SAR)", "SOCOCIM", "Ateliers Métalliques de Mbao"]
        },
        "salary": {
            "france": {"entry": 24000, "mid": 32000, "expert": 44000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant & Onisep"},
            "senegal": {"entry": 260000, "mid": 480000, "expert": 850000, "currency": "FCFA", "period": "mois", "note": "Salaires nets dans les chantiers navals et chaudronneries industrielles à Dakar"}
        },
        "connectedFamilies": ["naval-maritime", "energie-renouvelable", "btp-architecture"],
        "relatedJobs": ["soudeur-industriel", "ajusteur-monteur-industriel", "tourneur-fraiseur-cn"],
        "sources": [
            {"organization": "L'Étudiant", "title": "Fiche métier : Chaudronnier", "url": "https://www.letudiant.fr/metiers/secteur/industrie.html", "type": "metier"},
            {"organization": "Onisep", "title": "Chaudronnier / Chaudronnière", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/chaudronnier-chaudronniere", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Un chaudronnier trace et assemble des réservoirs cryogéniques de fusée capables de contenir de l'hydrogène liquide à -253°C sous des pressions considérables sans la moindre fuite atomique.",
            "pourquoi": "La précision du traçage et de l'assemblage des tôles conditionne la survie des structures lors du décollage dans l'espace.",
            "a_retenir": "Le chaudronnier transforme des plaques planes en forteresses d'acier étanches."
        }
    },

    # -----------------------------------------------------------------------
    # 18. SOUDEUR INDUSTRIEL
    # -----------------------------------------------------------------------
    {
        "id": "soudeur-industriel",
        "slug": "soudeur-industriel",
        "title": "Soudeur Industriel Qualifié / Tuyauteur",
        "aliases": ["Soudeur haute pression", "Soudeur TIG / MIG-MAG", "Industrial Welder"],
        "icon": "⚡",
        "familyId": "industrie-mecanique",
        "domain": "Mécanique & Usinage",
        "domainId": "mecanique-industrielle",
        "subdomain": "Soudage industriel & Procédés d'assemblage thermique",
        "shortDescription": "Fusionne les métaux de manière indissociable selon des procédés de haute technicité (TIG, MIG-MAG, arc électrode) pour garantir des liaisons étanches et ultra-résistantes.",
        "longDescription": "Le soudeur industriel est l'artisan de la fusion métallique. Sur des tuyauteries sous haute pression, des réacteurs nucléaires, des coques de navires ou des pipelines sous-marins, il assemble les métaux selon des descriptifs de mode opératoire de soudage (DMOS) ultra-stricts. Ses cordons de soudure doivent passer avec succès des examens radiographiques et par ultrasons sans la moindre bulle, fissure ou inclusion.",
        "missions": [
            "Préparer les joints de soudure (chanfreinage, décapage, nettoyage) selon les spécifications techniques",
            "Régler les paramètres de soudage (intensité, tension, débit de gaz de protection argon/hélium, vitesse)",
            "Réaliser des cordons de soudure de haute qualité selon les procédés TIG (141), MIG-MAG (131/135) ou Électrode enrobée (111)",
            "Souder dans toutes les positions spatiales (à plat, en corniche, en montant, au plafond, en tuyauterie fixe)",
            "Contrôler visuellement l'aspect du cordon et préparer la pièce pour les contrôles non destructifs (ressuage, radio)"
        ],
        "workEnvironment": ["Chantiers navals, raffineries, centrales nucléaires, usines métallurgiques", "Milieux confinés, en hauteur ou en conditions climatiques rigoureuses", "Port d'une cagoule optoélectronique et de gants cuir protecteurs"],
        "typicalDay": [
            {"time": "08:00", "desc": "Lecture du DMOS (procédé de soudage) et vérification du certificat matière des tubes en acier inoxydable"},
            {"time": "09:00", "desc": "Préchauffage de la zone à souder et inertage intérieur du tube avec de l'argon pour éviter l'oxydation (rochage)"},
            {"time": "12:00", "desc": "Déjeuner de chantier"},
            {"time": "13:30", "desc": "Soudage de la passe de pénétration en TIG à l'envers sur tuyauterie haute pression"},
            {"time": "16:00", "desc": "Passe de remplissage et finition, meulage léger et nettoyage du cordon"}
        ],
        "companyRole": "Garant ultime de la solidité et de l'étanchéité des assemblages métalliques soumis aux contraintes de pression et de température les plus sévères.",
        "skills": {
            "technical": ["Maîtrise experte des procédés de soudage TIG, MIG-MAG, Arc submergé", "Métallurgie du soudage (dilution, zone affectée thermiquement ZAT, préchauffage)", "Lecture de plans de tuyauterie isométrique et symboles de soudure", "Application stricte des DMOS et des normes de qualification (ISO 9606-1, ASME IX)"],
            "human": ["Stabilité de la main et coordination œil-main exceptionnelle", "Patience et concentration ininterrompue", "Rigueur sans compromis sur la qualité", "Endurance physique et résistance à la chaleur"],
            "tools": ["Postes à souder onduleurs TIG / MIG-MAG pulsés", "Torches de soudage refroidies à l'eau", "Cagoules à cristaux liquides ventilées", "Meuleuses et outillage de préparation de chanfrein"]
        },
        "studies": {
            "pathway": [
                {"step": "CAP / Bac Pro", "title": "Bac Pro Technicien en Chaudronnerie Industrielle ou CAP Réalisations Industrielles", "desc": "Apprentissage des bases du soudage multi-procédés et de la sécurité thermique."},
                {"step": "Mention Complémentaire / Titre Professionnel", "title": "Mention Complémentaire Soudage ou Titre Professionnel Soudeur TIG / Tuyauterie", "desc": "Passage des qualifications de soudeur officielles obligatoires (licences de soudure)."}
            ],
            "schools": [
                {"name": "Institut de Soudure (France - Centres de formation spécialisés) — France", "country": "France", "scope": "France"},
                {"name": "Lycées professionnels industriels et CFA métallurgie — France", "country": "France", "scope": "France"},
                {"name": "Centre de Formation Professionnelle et Technique Sénégal-Japon (CFPT) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Lycée Technique Maurice Delafosse (Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Qualifications de Soudeur (QS) selon ISO 9606-1 ou ASME Section IX (renouvelables tous les 2 ans)"]
        },
        "career": {
            "sectors": ["Pétrole, Gaz & Offshore", "Nucléaire & Centrales thermiques", "Construction navale", "Chaudronnerie & Tuyauterie industrielle", "Aéronautique"],
            "employerTypes": ["Entreprises de tuyauterie industrielle", "Grands groupes d'énergie (EDF, Technip, Saipem)", "Chantiers navals et sous-traitants pétroliers"],
            "evolution": ["Soudeur d'élite qualifié nucléaire / offshore", "Contrôleur en soudage (IWT / IWS)", "Coordinateur en soudage / Inspecteur en soudage"],
            "pros": ["Métier en très forte pénurie internationale avec des rémunérations très élevées pour les profils qualifiés", "Possibilité de travailler dans le monde entier (offshore, chantiers internationaux)", "Reconnaissance directe de l'excellence du geste"],
            "cons": ["Exposition aux fumées de soudage (nécessitant une ventilation efficace), positions de travail parfois inconfortables"]
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser un cordon d'assemblage en angle sur deux tôles d'acier doux et effectuer un test d'écrasement à la presse pour vérifier que la soudure ne casse pas.",
            "steps": [
                "Nettoyer et chanfreiner les bords",
                "Régler l'intensité adéquate (environ 40A par millimètre d'épaisseur)",
                "Maintenir un angle de torche constant de 70° et une vitesse régulière"
            ],
            "freeResources": ["Vidéos pédagogiques de l'Institut de Soudure", "Fiches pratiques de sécurité de l'INRS sur le soudage"]
        },
        "aiImpact": {
            "summary": "Le soudage robotisé et le soudage laser assisté par caméra IA prennent en charge les soudures répétitives de grande série, mais les soudures complexes sur site et les tuyauteries d'accès difficile restent l'apanage des soudeurs humains hautement qualifiés.",
            "positiveImpacts": ["Suivi de joint laser en temps réel sur les robots de soudage", "Inspection radiographique automatisée par deep learning"],
            "risksAndChallenges": ["Nécessité de former les soudeurs à la supervision et à la programmation de robots de soudage"],
            "recommendedSkills": ["Conduite de robots de soudage orbital et automates de soudage"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, avec l'exploitation des gisements de gaz de Grand Tortue Ahmeyim (GTA) et de pétrole de Sangomar, les soudeurs qualifiés certifiés ASME / ISO 9606 sont les profils techniques les plus recherchés et les mieux rémunérés du pays.",
            "westAfricaOpportunities": "Chantiers majeurs de pipelines, d'usines de liquéfaction de gaz et de maintenance navale dans toute la sous-région.",
            "localChampions": ["Dakar Marine", "Petrosen", "Eiffage Sénégal (projets maritimes)", "SAR (Société Africaine de Raffinage)"]
        },
        "salary": {
            "france": {"entry": 25000, "mid": 35000, "expert": 50000, "currency": "EUR", "period": "an", "note": "Source : L'Étudiant & Onisep (jusqu'à 70k€ pour soudeurs nucléaires/offshore)"},
            "senegal": {"entry": 300000, "mid": 650000, "expert": 1400000, "currency": "FCFA", "period": "mois", "note": "Salaires nets constatés pour soudeurs certifiés sur projets pétro-gaziers et navals"}
        },
        "connectedFamilies": ["naval-maritime", "energie-renouvelable", "mines-geosciences"],
        "relatedJobs": ["chaudronnier-industriel", "ajusteur-monteur-industriel", "technicien-controle-cnd"],
        "sources": [
            {"organization": "Onisep", "title": "Soudeur / Soudeuse", "url": "https://www.onisep.fr/ressources/univers-metier/metiers/soudeur-soudeuse", "type": "metier"},
            {"organization": "L'Étudiant", "title": "Les métiers de l'industrie : Soudeur", "url": "https://www.letudiant.fr/metiers/secteur/industrie.html", "type": "metier"}
        ],
        "sourceLetudiant": True,
        "sourceOnisep": True,
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Sur un pipeline sous-marin ou une tuyauterie de centrale nucléaire, 100% des soudures sont radiographiées aux rayons X ou testées aux ultrasons : le moindre défaut d'un demi-millimètre entraîne le meulage et la réfection complète de la soudure.",
            "pourquoi": "À 200 bars de pression, une minuscule micro-fissure invisible à l'œil nu provoquerait une rupture explosive catastrophique.",
            "a_retenir": "Le soudeur qualifié détient entre ses mains la sécurité absolue des installations industrielles."
        }
    }
]

if __name__ == "__main__":
    print(f"✅ industry_jobs_part1.py : {len(INDUSTRY_JOBS_PART1)} fiches métiers chargées.")
    for j in INDUSTRY_JOBS_PART1:
        assert j["id"], "ID manquant"
        assert j["slug"], "Slug manquant"
        assert len(j["missions"]) == 5, f"5 missions requises pour {j['id']}"
        assert j["familyId"] == "industrie-mecanique", f"familyId invalide pour {j['id']}"
        assert "france" in j["salary"] and "senegal" in j["salary"], f"Salaires incomplets pour {j['id']}"
    print("✅ Intégrité validée pour les 18 fiches métiers du Bloc A.")

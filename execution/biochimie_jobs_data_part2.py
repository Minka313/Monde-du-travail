# -*- coding: utf-8 -*-
"""
BASE DE DONNÉES DU SECTEUR BIOLOGIE & CHIMIE — PARTIE 2
Fiches Métiers 13 à 24 (Référentiel Officiel CIDJ Biologie-Chimie)
Double Ancrage Géographique : France (€) / Sénégal & Afrique de l'Ouest (FCFA)
Sources Principales : CIDJ, Onisep, France Chimie, Police Nationale / Gendarmerie, Sociétés Savantes
"""

BIOCHIMIE_JOBS_PART2 = [
    # 13. Microbiologiste
    {
        "id": "microbiologiste",
        "slug": "microbiologiste",
        "familyId": "biologie-chimie",
        "domainId": "microbiologie",
        "connectedFamilies": ["sante-soins-paramedical", "agriculture-agroalimentaire", "environnement-nature"],
        "title": "Microbiologiste",
        "genderAlternative": "Microbiologiste",
        "summary": "Spécialiste de l'infiniment petit, il étudie et cultive bactéries, virus, champignons et levures pour lutter contre les pathogènes, développer des vaccins ou fermenter des aliments.",
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/microbiologiste",
        "description": "Le microbiologiste explore la diversité des micro-organismes, leurs génomes et leurs métabolismes. Dans la santé, il traque les résistances aux antibiotiques et isole des souches pour fabriquer des antiviraux ou des vaccins. Dans l'agroalimentaire, il sélectionne des ferments lactiques ou s'assure de l'absence totale de Listeria et Salmonella. Dans l'environnement, il pilote la biodégradation microbienne de déchets organiques et de plastiques.",
        "studyLevel": "Bac +5 / Bac +8 (Master, Diplôme d'Ingénieur, Doctorat PhD)",
        "duration": "5 à 8 ans après le bac",
        "status": "Chercheur, ingénieur R&D, enseignant-chercheur ou responsable de laboratoire privé",
        "daily": {
            "morning": "Vérification des incubateurs et boîtes de Petri ensemencées la veille, comptage des colonies bactériennes, séquençage génomique d'une souche suspecte.",
            "afternoon": "Essais de sensibilité aux antibiotiques (antibiogrammes) ou cinétique enzymatique de fermentation, rédaction d'un article de recherche ou rapport d'homologation.",
            "challenges": "Maîtriser les protocoles de confinement (P2/P3/P4), prévenir toute contamination croisée d'échantillons et interpréter des volumes massifs de données génétiques microbiennes."
        },
        "skills": {
            "technical": [
                "Bactériologie, virologie et mycologie fondamentale et appliquée",
                "Isolement, ensemencement en milieu sélectif et identification par spectrométrie MALDI-TOF",
                "Biologie moléculaire (PCR temps réel, séquençage NGS Illumina / Nanopore)",
                "Normes de biosécurité et confinement en laboratoire L2/L3"
            ],
            "soft": [
                "Rigueur scientifique sans concession et respect absolu de l'asepsie",
                "Esprit d'analyse et curiosité d'investigation biologique",
                "Patience face aux temps d'incubation incompressibles",
                "Capacité de communication pluridisciplinaire (médecins, pharmaciens, industriels)"
            ],
            "tools": [
                "Microscopes à fluorescence, à contraste de phase et électroniques (MEB/MET)",
                "Spectromètre de masse MALDI-TOF Biotyper",
                "Thermocycleur PCR et séquenceur d'ADN à haut débit",
                "Incubateurs sous atmosphère contrôlée (CO2, anaérobie)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Baccalauréat général scientifique", "desc": "Spécialités SVT et Physique-Chimie recommandées."},
                {"step": "Licence / CPGE (Bac +3)", "title": "Licence Sciences de la Vie / Biologie Cellulaire et Physiologie", "desc": "Bases en biochimie, génétique et microbiologie générale."},
                {"step": "Master / Ingénieur (Bac +5)", "title": "Master Microbiologie Fondamentale & Appliquée ou Diplôme d'Ingénieur en Biotechnologies (AgroParisTech, ESBS)", "desc": "Microbiologie moléculaire, virologie, métabolisme bactérien et bio-informatique microbienne."},
                {"step": "Doctorat (Bac +8, optionnel mais recommandé)", "title": "Doctorat PhD en Microbiologie / Virologie", "desc": "Indispensable pour diriger une équipe de recherche à l'INSERM, CNRS, Institut Pasteur ou en R&D pharmaceutique."}
            ],
            "schools": [
                {"name": "Institut Pasteur (Enseignements universitaires de microbiologie et virologie)", "country": "France", "scope": "France"},
                {"name": "Université Paris-Saclay / Université Claude Bernard Lyon 1 (Masters Microbiologie)", "country": "France", "scope": "France"},
                {"name": "Institut Pasteur de Dakar / UCAD (Faculté des Sciences & CRCF)", "country": "Sénégal", "scope": "Sénégal / International"}
            ],
            "certifications": ["Doctorat d'Université en Sciences de la Vie", "Habilitation de manipulation en laboratoire de confinement P3"]
        },
        "career": {
            "sectors": ["Industrie pharmaceutique et vaccins", "Instituts de recherche biomédicale", "Industrie agroalimentaire et fermentaire", "Environnement et dépollution"],
            "employerTypes": ["Instituts de recherche (Pasteur, CNRS, INRAE, Inserm)", "Big Pharma et biotechs (Sanofi, bioMérieux, Valneva)", "Multinationales alimentaires (Danone, Lesaffre, Nestlé)"],
            "evolution": "Microbiologiste chercheur ➔ Chef de projet R&D ➔ Directeur d'unité de recherche ➔ Directeur scientifique de biotechnologie",
            "pros": "Place centrale dans la lutte contre les pandémies et les superbactéries antibiorésistantes, impact mondial direct sur la santé publique.",
            "cons": "Parcours académique long (Bac +8 pour les postes de direction de recherche), manipulation d'agents biologiques potentiellement pathogènes exigeant une concentration extrême."
        },
        "salary": "🇫🇷 France : 2 500 - 4 800 € net/mois selon statut public/privé et expérience (CIDJ) • 🇸🇳 Sénégal : 350 000 - 1 400 000 FCFA net/mois (Institut Pasteur, UCAD, labos privés)",
        "saviezVous": {
            "fait": "Le corps d'un adulte moyen abrite environ 38 000 milliards de bactéries (notre microbiote), soit autant voire plus que ses propres cellules humaines ! Sans ces bactéries intestinales, nous serions incapables de digérer certains nutriments ou de développer un système immunitaire robuste.",
            "pourquoi": "Ces micro-organismes vivent en symbiose mutualiste avec nous depuis des millions d'années d'évolution partagée."
        },
        "sources": [
            {"organization": "CIDJ", "title": "Fiche métier : Microbiologiste", "url": "https://www.cidj.com/s-orienter/metiers/microbiologiste", "type": "metier"},
            {"organization": "Société Française de Microbiologie (SFM)", "title": "Carrières et métiers de la microbiologie", "type": "institutionnel"}
        ],
        "interests": ["observer-microscope", "experiences-laboratoire", "comprendre-corps-humain", "soigner-aider"],
        "relatedJobSlugs": ["technicien-microbiologie", "ingenieur-biotechnologie", "biologiste-medical", "technicien-analyses-biomedicales"]
    },

    # 14. Parfumeur / Nez
    {
        "id": "parfumeur",
        "slug": "parfumeur",
        "familyId": "biologie-chimie",
        "domainId": "cosmetique-parfumerie-aromes",
        "connectedFamilies": ["industrie-technologies", "mode-design-beaute", "commerce-marketing"],
        "title": "Parfumeur (Nez)",
        "genderAlternative": "Parfumeuse (Nez)",
        "summary": "Artiste et chimiste de l'odorat doté d'une mémoire de plusieurs milliers de senteurs, il compose les fragrances de la haute parfumerie, de la cosmétique et des produits du quotidien.",
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/parfumeur-parfumeuse",
        "description": "Le parfumeur, couramment appelé 'Nez', associe matières premières naturelles (huiles essentielles florales, résines, épices) et molécules de synthèse issues de la chimie organique pour créer des compositions olfactives uniques. Il conçoit des parfums de prestige, mais aussi les signatures olfactives des gels douche, lessives, bougies et cosmétiques. Il travaille sur brief créatif en respectant scrupuleusement les contraintes de coût et les normes toxicologiques internationales (IFRA).",
        "studyLevel": "Bac +3 à Bac +5 (Écoles de parfumerie spécialisées ou Master Chimie / Cosmétique)",
        "duration": "3 à 5 ans d'études + de nombreuses années d'apprentissage olfactif",
        "status": "Salarié de maison de composition de parfums, formulateur indépendant ou parfumeur maison de luxe",
        "daily": {
            "morning": "Séance d'évaluation olfactive matinale (l'odorat est le plus frais au réveil) : sentir à l'aveugle sur des touches à parfum les accords maturés la veille et noter l'évolution des notes de tête, de cœur et de fond.",
            "afternoon": "Ajustement des dosages de la formule au milligramme près, choix de nouvelles molécules de synthèse, rencontre avec l'équipe marketing pour débriefing d'un projet client.",
            "challenges": "Mémoriser plus de 3 000 molécules et essences naturelles, faire preuve d'une hygiène de vie préservant l'odorat (pas de tabac, pas d'épices fortes avant une session) et renouveler sans cesse la créativité."
        },
        "skills": {
            "technical": [
                "Pyramide olfactive (notes de tête, de cœur, de fond) et volatilité des composés organiques",
                "Chimie des terpènes, esters, aldéhydes et muscs synthétiques",
                "Connaissance approfondie de la réglementation internationale IFRA et de la cosmétovigilance",
                "Extraction et analyse physico-chimique des matières premières naturelles"
            ],
            "soft": [
                "Mémoire olfactive exceptionnelle et sensibilité artistique",
                "Patience, humilité et résilience face aux multiples reformulations imposées par les marques",
                "Curiosité culturelle et capacité à traduire des émotions ou des images en senteurs",
                "Capacité d'écoute des tendances du marché mondial"
            ],
            "tools": [
                "Orgue à parfums (meuble circulaire regroupant les flacons de concentrés)",
                "Mouillettes / Touches à parfum (bandelettes de papier buvard neutre)",
                "Chromatographie en phase gazeuse couplée à la spectrométrie de masse (CPG-SM)",
                "Logiciel de formulation olfactive et de calcul de conformité IFRA"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Baccalauréat général scientifique", "desc": "Chimie et biologie fortement valorisées."},
                {"step": "Licence de Chimie (Bac +3)", "title": "Licence de Chimie ou Biochimie", "desc": "Acquérir les bases indispensables de la chimie organique et de la structure moléculaire."},
                {"step": "École Spécialisée / Master (Bac +5)", "title": "ISIPCA (Versailles), École Supérieure du Parfum (ESP Paris/Grasse) ou Master ICAP Montpellier", "desc": "Formation d'excellence reconnue mondialement formant les Nez de l'industrie du luxe."}
            ],
            "schools": [
                {"name": "ISIPCA — Institut Supérieur International du Parfum, de la Cosmétique et de l'Aromatique (Versailles)", "country": "France", "scope": "International"},
                {"name": "École Supérieure du Parfum (Paris & Grasse)", "country": "France", "scope": "France"},
                {"name": "Grasse Institute of Perfumery (GIP, Grasse)", "country": "France", "scope": "International"},
                {"name": "ESP Dakar / UCAD (Chimie des substances naturelles et huiles essentielles ouest-africaines)", "country": "Sénégal", "scope": "Afrique de l'Ouest"}
            ],
            "certifications": ["Diplôme de Parfumeur-Créateur certifié RNCP Niveau 7 (ISIPCA/ESP)"]
        },
        "career": {
            "sectors": ["Haute parfumerie et cosmétique de luxe", "Grandes maisons de composition aromatique", "Arômes et détergence industrielle", "Cosmétiques bio et aromathérapie"],
            "employerTypes": ["Géants mondiaux de la composition (Givaudan, Firmenich-dsm, IFF, Symrise, Mane)", "Grandes maisons de couture et de joaillerie (Chanel, Dior, Hermès, Guerlain)", "Marques de cosmétiques de niche"],
            "evolution": "Évaluateur olfactif ➔ Parfumeur junior ➔ Parfumeur senior ➔ Parfumeur maison (titre rarissime et prestigieux)",
            "pros": "Métier de passion fusionnant art pur et chimie fine, reconnaissance internationale, salaire très attractif pour les profils confirmés.",
            "cons": "Nombre de postes très limité (moins d'un millier de Nez en activité dans le monde), compétition féroce à l'entrée des grandes maisons de composition."
        },
        "salary": "🇫🇷 France : 2 400 - 3 500 € net/mois en début de carrière, jusqu'à 8 000 - 15 000+ € net/mois pour un Nez reconnu (CIDJ) • 🇸🇳 Sénégal : 350 000 - 1 500 000 FCFA net/mois (secteur cosmétique, savonnerie et valorisation des essences locales)",
        "saviezVous": {
            "fait": "La ville de Grasse, dans le sud de la France, est reconnue comme la capitale mondiale du parfum depuis le XVIIe siècle. Ses savoir-faire liés au parfum (culture des plantes à parfum, connaissance des matières premières et art de composer) sont inscrits au Patrimoine Culturel Immatériel de l'Humanité par l'UNESCO !",
            "pourquoi": "Le microclimat exceptionnel de Grasse permettait de cultiver la rose de mai (Rosa centifolia), le jasmin et la tubéreuse avec une délicatesse aromatique inégalable."
        },
        "sources": [
            {"organization": "CIDJ", "title": "Fiche métier : Parfumeur / Parfumeuse", "url": "https://www.cidj.com/s-orienter/metiers/parfumeur-parfumeuse", "type": "metier"},
            {"organization": "ISIPCA", "title": "Filière Métiers de la Parfumerie et de la Création Olfactive", "type": "ecole"}
        ],
        "interests": ["creer-produits-chimie", "creer-designer", "experiences-laboratoire"],
        "relatedJobSlugs": ["aromaticien", "ingenieur-formulation", "coloriste-textile", "technicien-chimiste"]
    },

    # 15. Technicien biologiste
    {
        "id": "technicien-biologiste",
        "slug": "technicien-biologiste",
        "familyId": "biologie-chimie",
        "domainId": "biologie-sciences-vivant",
        "connectedFamilies": ["sante-soins-paramedical", "agriculture-agroalimentaire", "environnement-nature"],
        "title": "Technicien biologiste",
        "genderAlternative": "Technicienne biologiste",
        "summary": "Bras droit de l'ingénieur et du chercheur, il prépare les réactifs, réalise les expériences de biologie cellulaire et moléculaire et consigne avec précision les résultats d'essais.",
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-biologiste",
        "description": "Le technicien biologiste exécute des protocoles expérimentaux sophistiqués en laboratoire de recherche ou dans l'industrie (biotech, santé, agroalimentaire, cosmétique). Il réalise des cultures de cellules vivantes, extrait de l'ADN/ARN, pratique des électrophorèses, dose des protéines et assure la maintenance de premier niveau des automates d'analyse. Il vérifie la validité des témoins et saisit les données dans le système d'information de gestion du laboratoire (LIMS).",
        "studyLevel": "Bac +2 / Bac +3 (BTS, BUT, Licence Professionnelle)",
        "duration": "2 à 3 ans après le bac",
        "status": "Salarié du secteur privé (biotechs, labos pharma) ou technicien de la fonction publique (CNRS, INRAE, Universités)",
        "daily": {
            "morning": "Préparation des milieux de culture cellulaire sous hotte à flux laminaire, repiquage de lignées cellulaires et vérification de leur viabilité au microscope.",
            "afternoon": "Extraction d'ARN, amplification génique par PCR et révélation sur gel d'agarose, nettoyage du poste et saisie des résultats d'essais dans le LIMS.",
            "challenges": "Assurer une répétabilité parfaite des manips (deux réplicats doivent être identiques), prévenir les contaminations fongiques ou bactériennes des lignées de cellules."
        },
        "skills": {
            "technical": [
                "Techniques de culture cellulaire et tissulaire en milieu stérile",
                "Biologie moléculaire (extraction d'acides nucléiques, PCR, électrophorèse)",
                "Dosages biochimiques (ELISA, spectrophotométrie UV-Visible)",
                "Normes BPL (Bonnes Pratiques de Laboratoire) et traçabilité métrologique"
            ],
            "soft": [
                "Minutie chirurgicale et habileté manuelle",
                "Sens aigu de l'observation et détection rapide des anomalies d'échantillons",
                "Rigueur documentaire et méthode de travail méthodique",
                "Sens du travail en équipe de recherche"
            ],
            "tools": [
                "Poste de sécurité microbiologique (PSM hotte flux laminaire)",
                "Micropipettes automatiques de précision monocanal et multicanaux",
                "Centrifugeuses réfrigérées à haute vitesse",
                "Lecteur de microplaques pour tests immuno-enzymatiques ELISA"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Baccalauréat général ou STL (Sciences et Technologies de Laboratoire)", "desc": "Option Biotechnologies ou SVT."},
                {"step": "BTS / BUT (Bac +2 à +3)", "title": "BTS Biotechnologies ou BUT Génie Biologique parcours Biologie Médicale et Biotechnologie", "desc": "Formation professionnalisante intensive combinant cours théoriques et dizaines d'heures de TP par semaine."},
                {"step": "Licence Professionnelle (Bac +3)", "title": "Licence Pro Bio-expérimentation industrielle ou Génomique", "desc": "Spécialisation avancée très appréciée des laboratoires de R&D."}
            ],
            "schools": [
                {"name": "Lycées préparant au BTS Biotechnologies et IUT de France (BUT Génie Biologique)", "country": "France", "scope": "France"},
                {"name": "ESTBA (École Supérieure des Techniques de Biologie Appliquée, Paris)", "country": "France", "scope": "France"},
                {"name": "ESP — UCAD Dakar (Département Génie Biologique Appliqué)", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Centre de Formation Professionnelle Horticole de Cambérène (biotechnologies végétales)", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["BTS Biotechnologies / Bioanalyses et contrôles", "BUT Génie Biologique"]
        },
        "career": {
            "sectors": ["Startups biotechnologiques et pharma", "Recherche biomédicale publique et universitaire", "Agrochimie et semences végétales", "Cosmétologie et dermopharmacie"],
            "employerTypes": ["Laboratoires pharmaceutiques (Sanofi, Servier)", "Organismes publics de recherche (INSERM, CNRS, Cirad)", "Plateformes technologiques universitaires"],
            "evolution": "Technicien biologiste ➔ Technicien supérieur expert ➔ Assistant ingénieur ➔ Ingénieur biologiste (via VAE ou promotion interne)",
            "pros": "Métier concret au contact direct de la science vivante, manipulation de technologies de pointe, recrutement dynamique dans les biotechs.",
            "cons": "Tâches parfois répétitives lors de campagnes de criblage à haut débit, nécessité d'une attention constante sans baisse de vigilance."
        },
        "salary": "🇫🇷 France : 1 800 - 2 500 € net/mois selon ancienneté et convention collective (CIDJ) • 🇸🇳 Sénégal : 180 000 - 550 000 FCFA net/mois (labos universitaires, recherche, industries agroalimentaires)",
        "saviezVous": {
            "fait": "La technique de la PCR (réaction en chaîne par polymérase), devenue incontournable dans tous les laboratoires du monde, utilise une enzyme découverte dans une bactérie vivant dans les sources chaudes à plus de 70°C du parc de Yellowstone (Thermus aquaticus) !",
            "pourquoi": "Cette enzyme (la Taq polymérase) résiste aux températures extrêmes nécessaires pour séparer les deux brins d'ADN lors de chaque cycle d'amplification."
        },
        "sources": [
            {"organization": "CIDJ", "title": "Fiche métier : Technicien biologiste", "url": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-biologiste", "type": "metier"},
            {"organization": "Onisep", "title": "Fiche métier : Technicien / Technicienne biologiste", "type": "orientation"}
        ],
        "interests": ["observer-microscope", "experiences-laboratoire", "comprendre-corps-humain"],
        "relatedJobSlugs": ["microbiologiste", "technicien-analyses-biomedicales", "ingenieur-biotechnologie", "animalier-laboratoire"]
    },

    # 16. Technicien chimiste
    {
        "id": "technicien-chimiste",
        "slug": "technicien-chimiste",
        "familyId": "biologie-chimie",
        "domainId": "chimie-synthese",
        "connectedFamilies": ["industrie-technologies", "energie-mines", "environnement-nature"],
        "title": "Technicien chimiste",
        "genderAlternative": "Technicienne chimiste",
        "summary": "Maillon essentiel de la chimie analytique et de synthèse, il réalise les synthèses moléculaires, dose les principes actifs et garantit la conformité des produits finis.",
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-chimiste",
        "description": "Le technicien chimiste intervient soit en recherche-développement (synthèse de nouvelles molécules, extraction de principes actifs), soit en contrôle qualité (analyse de pureté des matières premières et des lots de fabrication). Il met en œuvre des protocoles d'analyse physico-chimique poussés : titrages potentiométriques, chromatographies liquides (HPLC) ou gazeuses (CPG), spectrométries infrarouge et UV. Il interprète les spectres obtenus et valide la libération des lots.",
        "studyLevel": "Bac +2 / Bac +3 (BTS Chimie, BUT Chimie, Licence Pro)",
        "duration": "2 à 3 ans après le bac",
        "status": "Salarié du secteur industriel (chimie fine, pétrochimie, cosmétique, pharmacie, plasturgie)",
        "daily": {
            "morning": "Étalonnage quotidien des balances de précision, pH-mètres et chromatographes, préparation des phases mobiles et étalons analytiques.",
            "afternoon": "Injection des séries d'échantillons en HPLC/CPG, traitement informatique des pics chromatographiques, calcul des concentrations et validation des certificats d'analyse.",
            "challenges": "Respecter scrupuleusement les consignes de sécurité chimique (fiches FDS, port des EPI adaptés, manipulation sous hotte aspirante) et éliminer les solvants selon les filières écologiques."
        },
        "skills": {
            "technical": [
                "Techniques de séparation analytique (HPLC, CPG, électrophorèse capillaire)",
                "Spectroscopies d'identification moléculaire (UV-Visible, Infrarouge FT-IR, RMN)",
                "Montages de synthèse organique (reflux, distillation sous vide, extraction liquide-liquide)",
                "Calculs de stœchiométrie, rendements et incertitudes de mesure"
            ],
            "soft": [
                "Rigueur et précision mathématique dans la pesée et la dilution",
                "Sens aigu de la sécurité face aux produits toxiques, inflammables ou corrosifs",
                "Méthode et propreté exemplaire de la verrerie et de la paillasse",
                "Autonomie dans la résolution d'anomalies analytiques (dérive de ligne de base, contamination de colonne)"
            ],
            "tools": [
                "Chromatographe en phase liquide haute performance (HPLC / UPLC)",
                "Chromatographe en phase gazeuse (CPG-FID / CPG-SM)",
                "Spectrophotomètre Infrarouge à transformée de Fourier (FT-IR)",
                "Bain thermostaté, évaporateur rotatif (Rotavapor) et hotte ventilée à flux d'air guidé"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Baccalauréat général (spécialité Physique-Chimie) ou STL (Sciences et Technologies de Laboratoire)", "desc": "Option SPCL (Sciences Physiques et Chimiques en Laboratoire)."},
                {"step": "BTS / BUT (Bac +2 à +3)", "title": "BTS Métiers de la Chimie ou BUT Chimie parcours Analyse, Contrôle Qualité et Environnement / Synthèse", "desc": "Formation de référence dispensant un socle technique complet et pratique."},
                {"step": "Licence Professionnelle (Bac +3)", "title": "Licence Pro Chimie Analytique ou Contrôle Physico-Chimique", "desc": "Compétences renforcées en instrumentation de pointe et validation de méthodes analytiques (norme ISO 17025)."}
            ],
            "schools": [
                {"name": "Lycées préparant au BTS Métiers de la Chimie et IUT de France (BUT Chimie)", "country": "France", "scope": "France"},
                {"name": "ENCPB — Lycée Pierre-Gilles de Gennes (Paris)", "country": "France", "scope": "France"},
                {"name": "ESP — UCAD Dakar (Département Génie Chimique & Chimie Appliquée)", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Institut Supérieur d'Enseignement Professionnel (ISEP) de Thiès / Diamniadio", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["BTS Métiers de la Chimie", "BUT Chimie certifié CTI / Université"]
        },
        "career": {
            "sectors": ["Chimie de spécialité et polymères", "Pharmacie et santé", "Cosmétique et parfumerie", "Pétrochimie, engrais et cimenterie"],
            "employerTypes": ["Industries chimiques (Arkema, BASF, Solvay)", "Laboratoires pharmaceutiques (Sanofi, Ipsen)", "Entreprises d'analyse et certification (SGS, Eurofins, Bureau Veritas)"],
            "evolution": "Technicien chimiste ➔ Technicien analyste référent ➔ Spécialiste méthode / validation ➔ Responsable de laboratoire de contrôle qualité",
            "pros": "Forte demande sur le marché de l'emploi industriel, compétences très polyvalentes transférables d'une industrie à une autre.",
            "cons": "Manipulation de réactifs chimiques dangereux nécessitant une concentration continue et le port prolongé d'équipements de protection (gants, lunettes, masque)."
        },
        "salary": "🇫🇷 France : 1 800 - 2 600 € net/mois selon l'industrie et le travail en équipe postée (CIDJ) • 🇸🇳 Sénégal : 180 000 - 600 000 FCFA net/mois (industries chimiques sénégalaises : ICS, SAR, cimenteries, labos pharma)",
        "saviezVous": {
            "fait": "L'aspirine (acide acétylsalicylique), l'un des médicaments les plus consommés au monde, est le résultat d'une réaction chimique très simple de synthèse : l'acétylation de l'acide salicylique (extrait à l'origine de l'écorce de saule) par l'anhydride acétique. Cette réaction est apprise dès la première année d'études de technicien chimiste !",
            "pourquoi": "L'ajout du groupement acétyle rend la molécule beaucoup moins agressive pour la muqueuse de l'estomac que l'acide salicylique pur."
        },
        "sources": [
            {"organization": "CIDJ", "title": "Fiche métier : Technicien chimiste", "url": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-chimiste", "type": "metier"},
            {"organization": "France Chimie", "title": "Métiers de la chimie : Technicien de laboratoire d'analyse", "type": "institutionnel"}
        ],
        "interests": ["experiences-laboratoire", "creer-produits-chimie", "fabriquer-construire"],
        "relatedJobSlugs": ["technicien-laboratoire", "ingenieur-formulation", "employe-technique-laboratoire", "aromaticien"]
    },

    # 17. Technicien en bioproduction
    {
        "id": "technicien-bioproduction",
        "slug": "technicien-bioproduction",
        "familyId": "biologie-chimie",
        "domainId": "galenique-bioproduction",
        "connectedFamilies": ["sante-soins-paramedical", "industrie-technologies"],
        "title": "Technicien en bioproduction",
        "genderAlternative": "Technicienne en bioproduction",
        "summary": "Spécialiste de la fabrication industrielle de biomédicaments, il pilote des bioréacteurs où des cellules vivantes génétiquement modifiées produisent des anticorps monoclonaux et des vaccins.",
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-en-bioproduction",
        "description": "Le technicien en bioproduction intervient au cœur des usines de biomédicaments. Il pilote la phase 'Upstream' (culture et multiplication des cellules en bioréacteurs dans des conditions de température, pH et oxygénation ultra-strictes) ou la phase 'Downstream' (récolte, purification et filtration des protéines thérapeutiques par chromatographie industrielle). Il travaille en salle blanche (classe B/C/D) sous atmosphère contrôlée en suivant scrupuleusement les Bonnes Pratiques de Fabrication (BPF).",
        "studyLevel": "Bac +2 / Bac +3 (BTS, BUT, Licence Professionnelle en Bioproduction)",
        "duration": "2 à 3 ans après le bac",
        "status": "Salarié de l'industrie pharmaceutique ou des sous-traitants CDMO (Contract Development and Manufacturing)",
        "daily": {
            "morning": "Habillage complet stérile pour accès en salle blanche (combinaison intégrale, masque, surbottes), vérification des paramètres de fermentation d'un bioréacteur de 2 000 litres.",
            "afternoon": "Supervision de la phase de clarification et chromatographie d'affinité, prélèvements pour contrôle de stérilité et saisie du dossier de lot électronique.",
            "challenges": "Maintenir une asepsie absolue : la moindre spore bactérienne dans un bioréacteur industriel peut détruire une cuve de plusieurs millions d'euros de biomédicament."
        },
        "skills": {
            "technical": [
                "Culture cellulaire à grande échelle et génie fermentaire (Upstream Processing)",
                "Purification et filtration tangentielle de protéines thérapeutiques (Downstream Processing)",
                "Réglementation pharmaceutique et Bonnes Pratiques de Fabrication (BPF / GMP)",
                "Protocoles de nettoyage et stérilisation en place (NEP / SEP)"
            ],
            "soft": [
                "Discipline rigoureuse et respect sans faille des procédures opératoires standard (SOP)",
                "Grande réactivité en cas d'alerte sur un paramètre biologique critique",
                "Sens aigu du détail et rigueur documentaire (traçabilité de lot)",
                "Aisance dans le travail en environnement stérile confiné"
            ],
            "tools": [
                "Bioréacteurs industriels à usage unique ou cuves inox automatisées",
                "Systèmes de chromatographie préparative automatisée (ÄKTA process)",
                "Sonde en ligne de mesure de pH, oxygène dissous et biomasse par impédancemétrie",
                "Système de supervision SCADA et dossiers de lots électroniques (EBR)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Baccalauréat général ou STL / STI2D", "desc": "Spécialités scientifiques et technologiques."},
                {"step": "BTS / BUT (Bac +2 à +3)", "title": "BTS Biotechnologies ou BUT Génie Biologique ou BUT Génie Chimique - Génie des Procédés", "desc": "Apprentissage des biotechnologies et du génie industriel des bioréacteurs."},
                {"step": "Licence Professionnelle / Titre Pro (Bac +3)", "title": "Licence Pro Bioprocédés et Bioproduction ou Titre Technicien en Bioproduction Pharmaceutique (IMT)", "desc": "Formation de pointe en immersion sur plateformes pédagogiques reproduisant des usines pharmaceutiques."}
            ],
            "schools": [
                {"name": "Groupe IMT (Tours, Évry, Lyon) — Institut de formation industrielle de référence en bioproduction", "country": "France", "scope": "France"},
                {"name": "ESTBB — Université Catholique de Lyon (filière Bioproduction)", "country": "France", "scope": "France"},
                {"name": "Institut Pasteur de Dakar — Unité de production vaccinale MADIBA (Dakar)", "country": "Sénégal", "scope": "Afrique de l'Ouest / Pôle d'excellence continental"}
            ],
            "certifications": ["Certification BPF / GMP Niveau Opérateur et Technicien", "Habilitation travail en Zone d'Atmosphère Contrôlée (ZAC)"]
        },
        "career": {
            "sectors": ["Biotechnologies de la santé", "Production de vaccins et d'anticorps", "Thérapies géniques et cellulaires", "CDMO pharmaceutiques"],
            "employerTypes": ["Usines de bioproduction (Sanofi Bioproductions, Novartis)", "Sous-traitants mondiaux (Lonza, Boehringer Ingelheim, Delpharm)", "Instituts de production vaccinale (Institut Pasteur de Dakar - Projet MADIBA)"],
            "evolution": "Technicien de bioproduction ➔ Chef d'équipe bioproduction ➔ Spécialiste transposition industrielle (Scale-up) ➔ Responsable de production de zone stérile",
            "pros": "Métier d'avenir absolu avec la souveraineté sanitaire et l'essor des biomédicaments, salaires attractifs, primes de travail en salle blanche et horaires décalés.",
            "cons": "Horaires postés fréquents (2x8 ou 3x8 pour surveiller les bioréacteurs en continu), contrainte physique de l'habillage stérile prolongé."
        },
        "salary": "🇫🇷 France : 2 000 - 3 000 € net/mois + primes de travail posté (CIDJ) • 🇸🇳 Sénégal : 250 000 - 850 000 FCFA net/mois (pôle vaccinal MADIBA de l'Institut Pasteur de Dakar, industrie pharma locale)",
        "saviezVous": {
            "fait": "Plus de 60 % des nouveaux médicaments autorisés aujourd'hui dans le monde ne sont plus issus de la chimie classique, mais sont des 'biomédicaments' produits par des organismes vivants (cellules de mammifères, levures) formés dans des bioréacteurs par des techniciens en bioproduction !",
            "pourquoi": "Ces molécules (comme les anticorps monoclonaux) sont trop complexes et volumineuses pour être synthétisées par réaction chimique dans un ballon."
        },
        "sources": [
            {"organization": "CIDJ", "title": "Fiche métier : Technicien en bioproduction", "url": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-en-bioproduction", "type": "metier"},
            {"organization": "Leem", "title": "Les entreprises du médicament : Technicien de bioproduction", "type": "institutionnel"}
        ],
        "interests": ["experiences-laboratoire", "fabriquer-construire", "soigner-aider"],
        "relatedJobSlugs": ["ingenieur-biotechnologie", "technicien-galeniste", "technicien-biologiste", "microbiologiste"]
    },

    # 18. Technicien de police technique et scientifique (PTS)
    {
        "id": "technicien-police-scientifique",
        "slug": "technicien-police-scientifique",
        "familyId": "biologie-chimie",
        "domainId": "police-scientifique",
        "connectedFamilies": ["securite-defense", "droit-justice"],
        "title": "Technicien de police technique et scientifique (PTS)",
        "genderAlternative": "Technicienne de police technique et scientifique (PTS)",
        "summary": "Spécialiste forensique sur le terrain ou en laboratoire, il recherche, prélève et analyse les indices matériels (traces papillaires, ADN, résidus de tir) pour éclairer la justice.",
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-de-police-technique-et-scientifique",
        "description": "Le technicien de police technique et scientifique (catégorie B de la Police Nationale ou corps équivalent de la Gendarmerie) intervient soit en Service Local de Police Technique (SLPT / commissariat) pour geler et exploiter les scènes d'infraction courantes (cambriolages, dégradations, vols avec violence), soit dans un laboratoire de police scientifique (SNPS) où il réalise des analyses spécialisées en biologie, physico-chimie, balistique ou toxicologie selon sa filière.",
        "studyLevel": "Bac +2 / Bac +3 (Concours sélectif niveau BTS, DUT/BUT ou Licence)",
        "duration": "2 à 3 ans après le bac + formation en école de police après concours",
        "status": "Fonctionnaire d'État (Ministère de l'Intérieur, Police Nationale ou Gendarmerie Nationale)",
        "daily": {
            "morning": "Prise de service, vérification du matériel de constatation (mallette de relevé d'empreintes, éclairages ultraviolet, écouvillons stériles), intervention sur une scène d'effraction.",
            "afternoon": "Révélation des traces digitales au cyanoacrylate ou poudres magnétiques, conditionnement sous scellés des prélèvements biologiques et saisie dans le FNAEG / FAED.",
            "challenges": "Préserver l'intégrité absolue des scènes de crime, éviter tout risque de contamination par son propre ADN et garder son sang-froid face à des scènes dramatiques."
        },
        "skills": {
            "technical": [
                "Techniques de révélation de traces papillaires (poudres, fumigation cyanoacrylate, ninhydrine)",
                "Prélèvements biologiques pour typage génétique ADN et conservation sous scellés judiciaires",
                "Photographie technique judiciaire et relevé métrique de scène d'infraction",
                "Bases de procédure pénale appliquée à la criminalistique (Code de Procédure Pénale)"
            ],
            "soft": [
                "Rigueur méthodologique absolue et sens aigu de l'observation méticuleuse",
                "Stabilité émotionnelle et force psychologique face à la violence et la détresse",
                "Discrétion professionnelle totale et respect du secret de l'instruction",
                "Disponibilité opérationnelle (astreintes de nuit et week-ends)"
            ],
            "tools": [
                "Mallette de prélèvement forensique et poudres révélatrices (dactyloscopie)",
                "Sources de lumière médico-légales (Crimescope, Polilight)",
                "Appareil photo reflex professionnel avec objectifs macro et flashs déportés",
                "Fichiers d'identification judiciaire (FAED pour empreintes, FNAEG pour profils génétiques)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Baccalauréat général ou STL / ST2S", "desc": "Base scientifique solide."},
                {"step": "Diplôme d'accès (Bac +2 à +3)", "title": "BTS / BUT Chimie, Biologie, Mesures Physiques ou Licence Scientifique", "desc": "Niveau requis pour candidater au concours officiel de technicien de PTS."},
                {"step": "Concours & École (Post-sélection)", "title": "Concours de Technicien de PTS (Ministère de l'Intérieur) + Formation initiale à l'École Nationale de Police", "desc": "Formation pratique rémunérée alternant cours juridiques, criminalistique de terrain et stages."}
            ],
            "schools": [
                {"name": "Direction Centrale du Recrutement et de la Formation de la Police Nationale (DCRFPN, France)", "country": "France", "scope": "France"},
                {"name": "Institut de Recherche Criminelle de la Gendarmerie Nationale (IRCGN, Pontoise)", "country": "France", "scope": "France"},
                {"name": "École Nationale de Police de Dakar / Division de la Police Technique et Scientifique (DPTS, Sénégal)", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Concours de Technicien de Police Technique et Scientifique (Catégorie B)"]
        },
        "career": {
            "sectors": ["Police Nationale et Ministère de l'Intérieur", "Gendarmerie Nationale", "Justice et administration pénale", "Sécurité intérieure et défense"],
            "employerTypes": ["Commissariats et Services Locaux de Police Technique (SLPT)", "Laboratoires de police scientifique (Service National de Police Scientifique - SNPS)", "Division de la Police Technique et Scientifique du Sénégal (DPTS)"],
            "evolution": "Technicien de PTS ➔ Technicien principal de PTS ➔ Ingénieur de PTS (par concours interne) ➔ Chef de groupe SLPT",
            "pros": "Métier passionnant au cœur des enquêtes judiciaires, utilité civique directe pour rendre justice aux victimes, diversité des situations.",
            "cons": "Astreintes fréquentes de nuit et de week-end, confrontation à des scènes de mort violente ou d'infractions graves, concours très sélectif."
        },
        "salary": "🇫🇷 France : 1 900 - 2 800 € net/mois selon grade et primes de sujétion (CIDJ) • 🇸🇳 Sénégal : 180 000 - 480 000 FCFA net/mois (statut fonctionnaire police / gendarmerie nationale)",
        "saviezVous": {
            "fait": "Le premier laboratoire de police scientifique au monde a été créé en 1910 à Lyon par le médecin et juriste français Edmond Locard. Il est l'auteur du célèbre 'Principe d'échange de Locard' : 'Tout contact laisse une trace' !",
            "pourquoi": "Un criminel emporte toujours sans le savoir des fragments de la scène où il se trouvait (poussière, fibres) et y dépose des fragments de sa propre présence (poils, salive, empreintes)."
        },
        "sources": [
            {"organization": "CIDJ", "title": "Fiche métier : Technicien de police technique et scientifique", "url": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-de-police-technique-et-scientifique", "type": "metier"},
            {"organization": "Ministère de l'Intérieur", "title": "Devenir technicien de police technique et scientifique", "type": "institutionnel"}
        ],
        "interests": ["police-scientifique-enquete", "experiences-laboratoire", "observer-microscope"],
        "relatedJobSlugs": ["technicien-principal-police-scientifique", "ingenieur-police-scientifique", "technicien-chimiste", "technicien-biologiste"]
    },

    # 19. Technicien qualité de l'air
    {
        "id": "technicien-qualite-air",
        "slug": "technicien-qualite-air",
        "familyId": "biologie-chimie",
        "domainId": "environnement-qualite-air-depollution",
        "connectedFamilies": ["environnement-nature", "industrie-technologies", "sante-soins-paramedical"],
        "title": "Technicien de la qualité de l'air",
        "genderAlternative": "Technicienne de la qualité de l'air",
        "summary": "Sentinelle de l'atmosphère, il installe, calibre et entretient les capteurs analysant les gaz polluants et particules fines dans l'air urbain, industriel et intérieur.",
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-de-la-qualite-de-l-air",
        "description": "Le technicien de la qualité de l'air effectue des campagnes de mesure des polluants atmosphériques (dioxyde d'azote, ozone, dioxyde de soufre, composés organiques volatils COV, particules fines PM2.5 et PM10). Il assure la maintenance préventive et curative des stations fixes et mobiles d'analyse de l'air, vérifie la fiabilité des données transmises par télémétrie et réalise des diagnostics de la qualité de l'air intérieur dans les écoles, hôpitaux ou bureaux.",
        "studyLevel": "Bac +2 / Bac +3 (BTS, BUT Mesures Physiques, Licence Pro)",
        "duration": "2 à 3 ans après le bac",
        "status": "Salarié d'associations agréées de surveillance de la qualité de l'air (AASQA), bureaux d'études ou régulateurs",
        "daily": {
            "morning": "Tournée terrain sur les stations de mesure urbaines : changement des filtres à particules, test d'étanchéité des circuits gazeux et injection de gaz étalons.",
            "afternoon": "Vérification des courbes de pollution sur le serveur central, détection des anomalies de capteurs, rédaction d'un rapport de diagnostic d'air intérieur pour une collectivité.",
            "challenges": "Intervenir par tous les temps sur des toits ou le long des axes routiers pour réparer un analyseur en panne et garantir la continuité des alertes canicule / pic de pollution."
        },
        "skills": {
            "technical": [
                "Physico-chimie de l'atmosphère et cinétique des gaz polluants",
                "Fonctionnement des analyseurs automatiques (chimiluminescence, absorption UV, fluorescence)",
                "Métrologie des particules fines (microbalance à élément oscillant TEOM, optique laser)",
                "Normes environnementales de surveillance de l'air (normes européennes et recommandations OMS)"
            ],
            "soft": [
                "Polyvalence technique (chimie, électronique, mécanique et informatique)",
                "Autonomie et débrouillardise lors des interventions sur le terrain",
                "Sensibilité écologique et rigueur dans l'interprétation des données de santé publique",
                "Aisance dans la rédaction de comptes-rendus techniques"
            ],
            "tools": [
                "Analyseurs de gaz en continu (NOx, O3, SO2, CO) par photométrie UV et chimiluminescence",
                "Capteurs optiques et compteurs optiques de particules (OPC pour PM10 et PM2.5)",
                "Bouteilles de gaz étalons certifiés et diluteurs de gaz de haute précision",
                "Pompes de prélèvement d'air à débit régulé et canisters pour analyse COV"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Baccalauréat général ou STI2D / STL", "desc": "Sciences physiques, chimie ou technologies environnementales."},
                {"step": "BTS / BUT (Bac +2 à +3)", "title": "BUT Mesures Physiques ou BTS Métiers des Services à l'Environnement ou BUT Métiers de la Transition et de l'Efficacité Énergétiques", "desc": "Acquérir les compétences en instrumentation, capteurs et chimie de l'environnement."},
                {"step": "Licence Professionnelle (Bac +3)", "title": "Licence Pro Métrologie de l'Environnement ou Qualité de l'Air et Traitement des Émissions", "desc": "Spécialisation pointue très recherchée par les réseaux de surveillance."}
            ],
            "schools": [
                {"name": "IUT de France préparant au BUT Mesures Physiques (Orsay, Grenoble, Lille, etc.)", "country": "France", "scope": "France"},
                {"name": "Réseau des AASQA (Airparif, Atmo, etc. — formations et apprentissages)", "country": "France", "scope": "France"},
                {"name": "ESP — UCAD Dakar (Département Génie Chimique / Hygiène et Environnement)", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Centre de Gestion de la Qualité de l'Air (CGQA, Dakar)", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Habilitation travail en hauteur (accès toitures)", "Habilitation électrique BR/B2V"]
        },
        "career": {
            "sectors": ["Surveillance environnementale et climat", "Bureaux d'études en ingénierie environnementale", "Industries émettrices (énergie, ciment, incinérateurs)", "Santé publique et collectivités"],
            "employerTypes": ["Réseau ATMO France / Airparif (Associations de surveillance agréées)", "Bureaux d'ingénierie (Apave, Bureau Veritas, Dekra)", "Centre de Gestion de la Qualité de l'Air de Dakar (CGQA) / Direction de l'Environnement"],
            "evolution": "Technicien qualité de l'air ➔ Technicien métrologue référent ➔ Chargé d'études environnementales ➔ Responsable d'exploitation de réseau de mesure",
            "pros": "Métier à forte valeur environnementale et sociétale, équilibre parfait entre interventions terrain et traitement de données informatisées.",
            "cons": "Déplacements fréquents, interventions parfois en hauteur ou dans des zones polluées nécessitant des protections respiratoires."
        },
        "salary": "🇫🇷 France : 1 850 - 2 600 € net/mois (CIDJ) • 🇸🇳 Sénégal : 170 000 - 500 000 FCFA net/mois (CGQA, bureaux d'études, ministères et mines)",
        "saviezVous": {
            "fait": "À Dakar, la pollution de l'air est amplifiée plusieurs fois par an par les vents d'harmattan qui transportent d'immenses panaches de poussières désertiques venues du Sahara, créant des dépassements massifs des seuils de particules fines PM10 mesurés par le CGQA !",
            "pourquoi": "Ces particules minérales microscopiques pénètrent profondément dans les voies respiratoires et nécessitent des alertes publiques régulières pour les personnes vulnérables."
        },
        "sources": [
            {"organization": "CIDJ", "title": "Fiche métier : Technicien de la qualité de l'air", "url": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-de-la-qualite-de-l-air", "type": "metier"},
            {"organization": "Atmo France", "title": "Les métiers des associations de surveillance de la qualité de l'air", "type": "institutionnel"}
        ],
        "interests": ["proteger-planete", "experiences-laboratoire", "fabriquer-construire"],
        "relatedJobSlugs": ["agent-depolluant-nrbc", "technicien-chimiste", "ingenieur-recherche-produit", "technicien-laboratoire"]
    },

    # 20. Technicien en microbiologie
    {
        "id": "technicien-microbiologie",
        "slug": "technicien-microbiologie",
        "familyId": "biologie-chimie",
        "domainId": "microbiologie",
        "connectedFamilies": ["sante-soins-paramedical", "agriculture-agroalimentaire"],
        "title": "Technicien en microbiologie",
        "genderAlternative": "Technicienne en microbiologie",
        "summary": "Expert du contrôle de stérilité et de l'analyse microbienne, il traque les bactéries indésirables dans les produits alimentaires, pharmaceutiques et cosmétiques avant leur commercialisation.",
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-en-microbiologie",
        "description": "Le technicien en microbiologie effectue des analyses quotidiennes sur des échantillons de matières premières, d'eaux et de produits finis. Il prépare les gélose et milieux sélectifs, ensemence les boîtes de Petri, met à incuber à température contrôlée et procède au dénombrement des colonies (germes totaux, coliformes, staphylocoques, salmonelles). En cas de non-conformité, il déclenche les protocoles d'alerte et isole la souche pour identification biochimique ou sérologique.",
        "studyLevel": "Bac +2 / Bac +3 (BTS, BUT Génie Biologique, Licence Professionnelle)",
        "duration": "2 à 3 ans après le bac",
        "status": "Salarié du secteur privé (laboratoires de contrôle, agroalimentaire, cosmétique, pharma)",
        "daily": {
            "morning": "Lecture et dénombrement des boîtes de Petri incubées à 37°C ou 30°C, coloration de Gram et observation au microscope pour orienter le typage d'un germe.",
            "afternoon": "Ensemencement d'une nouvelle série d'échantillons sous poste de sécurité microbiologique, stérilisation des déchets à l'autoclave et validation des résultats dans le LIMS.",
            "challenges": "Ne jamais commettre de contamination accidentelle qui fausserait les résultats et bloquerait à tort une chaîne de production alimentaire ou médicamenteuse."
        },
        "skills": {
            "technical": [
                "Techniques d'ensemencement stérile (étalement, ensemencement en masse, filtration sur membrane)",
                "Colorations microbiologiques (Gram, Ziehl-Neelsen) et microscopie optique",
                "Tests biochimiques d'identification (galeries d'identification API, catalase, oxydase)",
                "Normes AFNOR / ISO de contrôle microbiologique (ISO 4833, ISO 6579)"
            ],
            "soft": [
                "Rigueur absolue dans le respect des gestes barrières et d'asepsie",
                "Sens aigu de la précision et de l'honnêteté scientifique dans la lecture des résultats",
                "Capacité de travail cadencé tout en maintenant une vigilance maximale",
                "Esprit d'équipe et communication claire des non-conformités"
            ],
            "tools": [
                "Poste de Sécurité Microbiologique (PSM de type II)",
                "Compteur automatique de colonies à caméra haute résolution",
                "Galeries d'identification biochimique miniaturisées (galeries API bioMérieux)",
                "Autoclave de stérilisation et étuves de culture à thermostat de précision"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Baccalauréat général ou STL (Biotechnologies) ou ST2S", "desc": "Intérêt marqué pour les sciences de la vie et le laboratoire."},
                {"step": "BTS / BUT (Bac +2 à +3)", "title": "BTS Bioanalyses et Contrôles ou BUT Génie Biologique parcours Biologie Médicale et Biotechnologie / Sciences de l'Aliment", "desc": "Formation pratique complète combinant microbiologie, biochimie et hygiène industrielle."},
                {"step": "Licence Professionnelle (Bac +3)", "title": "Licence Pro Microbiologie Industrielle et Sécurité Sanitaire", "desc": "Approfondissement en validation de méthodes rapides et gestion du risque microbiologique."}
            ],
            "schools": [
                {"name": "Lycées préparant au BTS Bioanalyses et contrôles et IUT (Génie Biologique)", "country": "France", "scope": "France"},
                {"name": "ENIL / ENILV (Écoles Nationales d'Industrie Laitière — spécialité microbiologie alimentaire)", "country": "France", "scope": "France"},
                {"name": "ESP — UCAD Dakar (Département Génie Chimique & Biologie Appliquée)", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Institut de Technologie Alimentaire (ITA, Dakar)", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["BTS Bioanalyses et contrôles", "Habilitation manipulation d'agents biologiques classe 2"]
        },
        "career": {
            "sectors": ["Industrie agroalimentaire et boissons", "Pharmacie et cosmétique", "Laboratoires d'analyses vétérinaires et d'hygiène", "Gestion de l'eau et assainissement"],
            "employerTypes": ["Groupes agroalimentaires (Lactalis, Danone, Sodebo)", "Laboratoires de contrôle accrédités (Eurofins, Silliker-Mérieux NutriSciences)", "Industries de transformation alimentaire sénégalaises (Vitalait, Kirène, CSS, labos ITA)"],
            "evolution": "Technicien microbiologiste ➔ Animateur qualité laboratoire ➔ Responsable du laboratoire microbiologique ➔ Responsable hygiène et sécurité sanitaire (HACCP)",
            "pros": "Métier indispensable à la sécurité alimentaire et sanitaire de tous, débouchés très stables et nombreux dans tous les bassins d'emploi.",
            "cons": "Gestes répétitifs d'ensemencement, odeurs parfois désagréables de certains milieux ou souches en culture, astreintes possibles le week-end pour relever les boîtes à terme."
        },
        "salary": "🇫🇷 France : 1 800 - 2 500 € net/mois (CIDJ) • 🇸🇳 Sénégal : 170 000 - 520 000 FCFA net/mois (ITA, usines agroalimentaires, abattoirs, labos d'hygiène)",
        "saviezVous": {
            "fait": "Toutes les boîtes de Petri d'un laboratoire de microbiologie sont incubées 'tête en bas' (le couvercle vers le bas) ! Cette astuce très simple évite que la condensation formée sur le couvercle ne retombe en gouttes sur la gélose et ne noie les colonies bactériennes, ce qui rendrait le comptage impossible.",
            "pourquoi": "La vapeur d'eau générée par le milieu chaud s'évapore et se condense sur le couvercle situé en bas, préservant la surface nette du milieu gélosé."
        },
        "sources": [
            {"organization": "CIDJ", "title": "Fiche métier : Technicien en microbiologie", "url": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-en-microbiologie", "type": "metier"},
            {"organization": "Onisep", "title": "Fiche métier : Technicien en bioanalyses et contrôles", "type": "orientation"}
        ],
        "interests": ["observer-microscope", "experiences-laboratoire", "soigner-aider"],
        "relatedJobSlugs": ["microbiologiste", "technicien-biologiste", "technicien-analyses-biomedicales", "agent-sterilisation"]
    },

    # 21. Technicien galéniste
    {
        "id": "technicien-galeniste",
        "slug": "technicien-galeniste",
        "familyId": "biologie-chimie",
        "domainId": "galenique-bioproduction",
        "connectedFamilies": ["sante-soins-paramedical", "industrie-technologies"],
        "title": "Technicien galéniste",
        "genderAlternative": "Technicienne galéniste",
        "summary": "Artisan scientifique de la forme des médicaments, il met au point et optimise la texture, la dissolution et la conservation des comprimés, sirops, crèmes et gélules.",
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-galeniste",
        "description": "La pharmacie galénique est la science qui transforme une molécule active pure en un médicament pratique, absorbable et stable pour le patient. Le technicien galéniste réalise en laboratoire de formulation des essais de compression, de pelliculage, de granulation humide ou sèche, et d'encapsulation. Il évalue la vitesse de dissolution du comprimé dans l'estomac simulé, sa dureté mécanique et sa stabilité dans le temps face à l'humidité et la chaleur.",
        "studyLevel": "Bac +2 / Bac +3 (BTS, BUT Génie Chimique ou Biologique, Titre Professionnel IMT)",
        "duration": "2 à 3 ans après le bac",
        "status": "Salarié de l'industrie pharmaceutique, dermocosmétique ou vétérinaire",
        "daily": {
            "morning": "Mélange des poudres (principe actif et excipients : liants, désintégrants, lubrifiants), passage sur machine à comprimer rotative de laboratoire.",
            "afternoon": "Contrôle physique des comprimés obtenus (test de friabilité, duromètre pour tester la dureté, test de désagrégation en milieu acide), saisie du compte-rendu de formulation.",
            "challenges": "Trouver le compromis galénique parfait : un comprimé doit être suffisamment dur pour ne pas s'effriter dans son emballage, mais se désagréger en moins de 15 minutes dans l'estomac."
        },
        "skills": {
            "technical": [
                "Science des excipients pharmaceutiques (lactose, cellulose microcristalline, stéarate de magnésium)",
                "Procédés de fabrication des formes sèches (mélange, granulation, compression, enrobage)",
                "Procédés de fabrication des formes liquides et pâteuses (suspensions, émulsions, gels)",
                "Tests physico-chimiques de libération des principes actifs (dissolutest, friabilimètre)"
            ],
            "soft": [
                "Sens de l'expérimentation minutieuse et observation attentive de la matière",
                "Rigueur dans le suivi des protocoles de pharmacopée (Pharmacopée Européenne / US)",
                "Patience pour ajuster des dizaines de variations de formules",
                "Esprit d'analyse et force de proposition technique"
            ],
            "tools": [
                "Presse à comprimer instrumentée de laboratoire",
                "Appareil d'essai de dissolution in vitro (Dissolutest 6 à 8 bols)",
                "Granulateur à lit fluidisé et turbine de pelliculage",
                "Duromètre pour comprimés et testeur de friabilité"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Baccalauréat général ou STL / STI2D", "desc": "Bases en chimie et physique appliquées."},
                {"step": "BTS / BUT (Bac +2 à +3)", "title": "BTS Métiers de la Chimie ou BUT Génie Biologique ou BUT Génie Chimique - Génie des Procédés", "desc": "Formation solide en formulation et génie des procédés pharmaceutiques."},
                {"step": "Titre Pro / Licence Pro (Bac +3)", "title": "Titre Pro Technicien en Développement Galénique (Groupe IMT) ou Licence Pro Formulation Pharmaceutique", "desc": "Spécialisation professionnelle intensive au plus près des besoins des laboratoires."}
            ],
            "schools": [
                {"name": "Groupe IMT (Tours, Lyon, Évry) — Spécialiste européen de la formation galénique industrielle", "country": "France", "scope": "France"},
                {"name": "Université de Strasbourg / Faculté de Pharmacie (Licence Pro Galénique)", "country": "France", "scope": "France"},
                {"name": "Faculté de Médecine, de Pharmacie et d'Odonto-Stomatologie (FMPOS) — UCAD Dakar", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification Technicien Galéniste (IMT / Leem)", "Bonnes Pratiques de Laboratoire (BPL)"]
        },
        "career": {
            "sectors": ["Industrie pharmaceutique humaine et vétérinaire", "Cosméceutique et dermocosmétique", "Compléments alimentaires et nutraceutique", "Centres de recherche sous contrat (CRO)"],
            "employerTypes": ["Laboratoires pharmaceutiques (Sanofi, Pierre Fabre, Boiron)", "Fabricants de génériques (Mylan/Viatris, Teva)", "Industrie pharmaceutique régionale ouest-africaine (Medis Sénégal, Valdafrique)"],
            "evolution": "Technicien galéniste ➔ Galéniste formulateur senior ➔ Responsable de transposition industrielle (Scale-up) ➔ Chef de projet formulation R&D",
            "pros": "Métier très créatif où la chimie se concrétise sous forme de médicaments palpables qui sauvent des vies, forte valeur ajoutée industrielle.",
            "cons": "Multiplication d'essais parfois fastidieux avant de parvenir à une formule stable dans le temps, travail en atmosphère parfois poussiéreuse sous masque."
        },
        "salary": "🇫🇷 France : 1 900 - 2 700 € net/mois selon profil et entreprise (CIDJ) • 🇸🇳 Sénégal : 200 000 - 650 000 FCFA net/mois (industries pharmaceutiques locales : Medis, Valdafrique, laboratoires)",
        "saviezVous": {
            "fait": "Le nom 'galénique' vient de Claude Galien, célèbre médecin grec de l'Antiquité (IIe siècle après J.-C.), médecin des gladiateurs et de l'empereur Marc Aurèle. Il fut le premier à codifier la préparation des remèdes en combinant les plantes et minéraux selon des formules précises !",
            "pourquoi": "Ses traités ont posé les fondations de la pharmacie moderne pendant plus d'un millénaire."
        },
        "sources": [
            {"organization": "CIDJ", "title": "Fiche métier : Technicien galéniste", "url": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-galeniste", "type": "metier"},
            {"organization": "Leem", "title": "Fiche métier : Technicien galéniste R&D", "type": "institutionnel"}
        ],
        "interests": ["creer-produits-chimie", "experiences-laboratoire", "soigner-aider"],
        "relatedJobSlugs": ["technicien-bioproduction", "ingenieur-formulation", "preparateur-pharmacie", "pharmacien-officine"]
    },

    # 22. Technicien principal de police technique et scientifique
    {
        "id": "technicien-principal-police-scientifique",
        "slug": "technicien-principal-police-scientifique",
        "familyId": "biologie-chimie",
        "domainId": "police-scientifique",
        "connectedFamilies": ["securite-defense", "droit-justice"],
        "title": "Technicien principal de police technique et scientifique",
        "genderAlternative": "Technicienne principale de police technique et scientifique",
        "summary": "Cadre technique intermédiaire de la criminalistique, il encadre les techniciens sur le terrain, traite les scènes de crime complexes et conduit des expertises de laboratoire poussées.",
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/technicien-principal-technicienne-principale-de-police-technique-et-scientifique",
        "description": "Le technicien principal de police technique et scientifique (catégorie B+, niveau supérieur) assume des responsabilités managériales et d'expertise criminalistique de haut vol. En service de terrain (SLPT, SLPJ ou brigade départementale), il dirige la gestion des scènes d'infractions graves (homicides, attentats, catastrophes de masse). En laboratoire (SNPS), il coordonne les sections d'analyse (biologie, traces papillaires, toxicologie, balistique), valide les rapports d'expertise destinés aux magistrats et présente ses conclusions lors des procès d'assises.",
        "studyLevel": "Bac +3 / Bac +5 (Concours externe niveau Licence scientifique ou Master)",
        "duration": "3 à 5 ans d'études + formation à l'école de police après réussite du concours",
        "status": "Fonctionnaire d'État (Ministère de l'Intérieur, encadrement criminalistique)",
        "daily": {
            "morning": "Coordination des équipes d'intervention sur les scènes d'infraction, point d'avancement des scellés prioritaires avec le commissaire de police ou le juge d'instruction.",
            "afternoon": "Supervision technique des protocoles complexes (révélation au Bluestar/Luminol pour le sang effacé, typage de mélanges d'ADN complexes), relecture critique et signature des rapports d'expertise judiciaire.",
            "challenges": "Gérer la pression judiciaire et temporelle des gardes à vue (délais légaux très serrés pour obtenir un profil ADN ou une concordance d'empreinte digitale décisive)."
        },
        "skills": {
            "technical": [
                "Criminalistique avancée et morphoanalyse des traces de sang (BPA - Bloodstain Pattern Analysis)",
                "Expertise dactylo-lophoscopique et comparaison de traces papillaires dégradées",
                "Gestion technique globale et chaîne de traçabilité des scènes d'homicide",
                "Droit pénal spécial, procédure pénale et rédaction d'expertises opposables en justice"
            ],
            "soft": [
                "Leadership d'équipe et calme olympien sous tension extrême",
                "Esprit d'analyse critique aiguisé pour repérer les incohérences d'une scène maquillée",
                "Aisance oratoire face aux magistrats et jurés de cour d'assises",
                "Résilience morale exemplaire face aux drames humains"
            ],
            "tools": [
                "Scanner laser 3D (Faro, Leica) pour modélisation spatiale de scènes de crime",
                "Réactifs chimioluminescents de détection des traces de sang invisibles (Bluestar Forensic)",
                "Station de comparaison macroscopique et dactyloscopique numérique",
                "Terminaux sécurisés d'accès aux bases nationales judiciaires (FAED, FNAEG)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Baccalauréat général scientifique", "desc": "Solide socle scientifique."},
                {"step": "Licence / BUT (Bac +3)", "title": "Licence en Chimie, Biologie, Biochimie ou BUT Mesures Physiques", "desc": "Diplôme universitaire requis pour le concours de technicien principal."},
                {"step": "Master (Bac +5, recommandé)", "title": "Master Sciences Forensiques (Lausanne, CY Cergy Paris Université) ou Master Chimie/Biologie", "desc": "Atout majeur pour dominer les épreuves scientifiques très sélectives du concours."},
                {"step": "Concours & Nomination", "title": "Concours de Technicien Principal de PTS (Ministère de l'Intérieur) + Stage probatoire", "desc": "Formation criminalistique de commandement technique."}
            ],
            "schools": [
                {"name": "École Nationale Supérieure de la Police (ENSP, Saint-Cyr-au-Mont-d'Or / Cannes-Écluse)", "country": "France", "scope": "France"},
                {"name": "CY Cergy Paris Université (Master Sciences Forensiques)", "country": "France", "scope": "France"},
                {"name": "École de Police de Dakar / Division de la Police Technique et Scientifique (DPTS, Sénégal)", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Concours de Technicien Principal de Police Technique et Scientifique", "Certification en morphoanalyse des traces de sang (CSM)"]
        },
        "career": {
            "sectors": ["Police Nationale et Ministère de l'Intérieur", "Police Judiciaire et tribunaux judiciaires", "Sécurité publique et antiterrorisme", "Enseignement criminalistique"],
            "employerTypes": ["Services Régionaux de Police Judiciaire (DTPJ / SRPJ)", "Service National de Police Scientifique (SNPS : Lyon, Paris, Marseille, Lille, Toulouse)", "Division de la Police Technique et Scientifique (DPTS Sénégal)"],
            "evolution": "Technicien principal de PTS ➔ Ingénieur de PTS (par concours interne) ➔ Chef de division / Directeur de laboratoire de police scientifique",
            "pros": "Niveau de responsabilité opérationnelle passionnant, contribution directe à la résolution des énigmes judiciaires majeures.",
            "cons": "Charge mentale élevée liée aux dossiers criminels les plus lourds, sollicitations d'urgence à toute heure du jour et de la nuit."
        },
        "salary": "🇫🇷 France : 2 200 - 3 400 € net/mois primes de police incluses (CIDJ) • 🇸🇳 Sénégal : 250 000 - 650 000 FCFA net/mois (cadre policier criminalistique, DPTS, Gendarmerie)",
        "saviezVous": {
            "fait": "La morphoanalyse des traces de sang (BPA) permet, uniquement à partir de la forme, de l'angle et de la répartition des gouttes de sang sur un mur ou un sol, de reconstituer la position de la victime, la force de l'impact, le type d'arme utilisé et même les mouvements de l'agresseur dans la pièce !",
            "pourquoi": "Les lois de la dynamique des fluides et de la trigonométrie s'appliquent rigoureusement aux projections sanguines propulsées dans l'air."
        },
        "sources": [
            {"organization": "CIDJ", "title": "Fiche métier : Technicien principal de police technique et scientifique", "url": "https://www.cidj.com/s-orienter/metiers/technicien-principal-technicienne-principale-de-police-technique-et-scientifique", "type": "metier"},
            {"organization": "Police Nationale", "title": "Concours de technicien principal de PTS", "type": "institutionnel"}
        ],
        "interests": ["police-scientifique-enquete", "experiences-laboratoire", "observer-microscope"],
        "relatedJobSlugs": ["technicien-police-scientifique", "ingenieur-police-scientifique", "technicien-chimiste", "microbiologiste"]
    },

    # 23. Technicien de laboratoire (générique CIDJ)
    {
        "id": "technicien-laboratoire",
        "slug": "technicien-laboratoire",
        "familyId": "biologie-chimie",
        "domainId": "laboratoires-analyses",
        "connectedFamilies": ["industrie-technologies", "agriculture-agroalimentaire", "sante-soins-paramedical"],
        "title": "Technicien de laboratoire",
        "genderAlternative": "Technicienne de laboratoire",
        "summary": "Polytechnicien de l'analyse instrumentale, il réalise des batteries de tests physiques, chimiques et biologiques pour contrôler la conformité de tous types de produits manufacturés.",
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-de-laboratoire",
        "description": "Le technicien de laboratoire est le profil polyvalent par excellence de l'analyse expérimentale. Présent dans tous les secteurs industriels (peintures, plastiques, eaux, métallurgie, emballages, cosmétiques), il teste la résistance, la composition et la pureté des matériaux et formulations. Il monte les bancs d'essai, programme les appareils de mesure, saisit les données et rédige les bulletins d'analyse certifiés indispensables à l'exportation et à la vente des produits.",
        "studyLevel": "Bac +2 / Bac +3 (BTS, BUT Mesures Physiques / Chimie / Génie Biologique)",
        "duration": "2 à 3 ans après le bac",
        "status": "Salarié de l'industrie, d'un centre technique professionnel ou d'un laboratoire prestataire d'analyses",
        "daily": {
            "morning": "Réception et enregistrement des échantillons avec code-barres dans le LIMS, préparation des éprouvettes et solutions d'essai selon les normes d'homologation.",
            "afternoon": "Lancement des séries de tests (traction mécanique, viscosité, teneur en eau par titrage Karl Fischer), calcul statistique des écarts-types et signalement des valeurs hors spécifications.",
            "challenges": "Maintenir une cadence d'analyse élevée sans dégrader la minutie des mesures et respecter les normes qualité ISO 9001 et ISO 17025."
        },
        "skills": {
            "technical": [
                "Techniques générales d'analyse physico-chimique (titrimétrie, pH-métrie, conductimétrie, viscosité)",
                "Métrologie des instruments de mesure et calcul d'incertitudes expérimentales",
                "Utilisation de logiciels LIMS (Laboratory Information Management System)",
                "Normes qualité de laboratoire (ISO 17025, BPL) et gestion des fiches d'anomalies"
            ],
            "soft": [
                "Polyvalence et capacité d'adaptation à différents types de matériaux et produits",
                "Sens aigu de la précision et rigueur mathématique",
                "Sens pratique et habileté manuelle pour les montages expérimentaux",
                "Esprit d'équipe et clarté dans la communication des résultats aux équipes de production"
            ],
            "tools": [
                "Titreur automatique Karl Fischer pour dosage d'eau résiduelle",
                "Viscosimètre rotatif et rhéomètre de laboratoire",
                "Balances d'analyse au dixième de milligramme avec étalonnage certifié",
                "Logiciel de gestion de laboratoire LIMS et progiciels de métrologie"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Baccalauréat général ou STL / STI2D", "desc": "Filière scientifique ou technologique de laboratoire."},
                {"step": "BTS / BUT (Bac +2 à +3)", "title": "BTS Métiers de la Chimie ou BUT Mesures Physiques ou BTS Bioanalyses et Contrôles", "desc": "Diplôme d'État formant aux méthodes d'essais et d'analyses de laboratoire."},
                {"step": "Licence Professionnelle (Bac +3, optionnel)", "title": "Licence Pro Métrologie, Qualité et Essais Industriels", "desc": "Spécialisation en accréditation d'essais et instrumentation industrielle avancée."}
            ],
            "schools": [
                {"name": "Lycées préparant aux BTS de laboratoire et IUT de France (BUT Mesures Physiques / Chimie)", "country": "France", "scope": "France"},
                {"name": "CFA de l'industrie et centres techniques professionnels", "country": "France", "scope": "France"},
                {"name": "ESP — UCAD Dakar (Départements Génie Chimique & Mesures Physiques)", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "ISEP de Thiès (Analyses physico-chimiques et maintenance des équipements de labo)", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["BTS de laboratoire / BUT Mesures Physiques", "Formation auditeur interne ISO 17025"]
        },
        "career": {
            "sectors": ["Industries manufacturières tous secteurs", "Entreprises d'inspection et de certification", "Centres techniques industriels (CTI)", "Services d'analyse de l'eau et assainissement"],
            "employerTypes": ["Groupes d'audit et d'inspection (Bureau Veritas, SGS, Eurofins, Dekra)", "PME et multinationales de l'industrie (plasturgie, métallurgie, détergence)", "Laboratoires de contrôle qualité des travaux publics et des matériaux (CEREEQ Sénégal)"],
            "evolution": "Technicien de laboratoire ➔ Responsable métrologie du laboratoire ➔ Responsable contrôle qualité ➔ Directeur de laboratoire d'essais",
            "pros": "Très grande polyvalence ouvrant des portes dans des dizaines d'industries différentes, forte employabilité sur tout le territoire.",
            "cons": "Répétitivité possible sur les lignes d'analyses de routine à grande échelle, cadence de rendu des résultats parfois serrée."
        },
        "salary": "🇫🇷 France : 1 800 - 2 500 € net/mois selon secteur d'activité (CIDJ) • 🇸🇳 Sénégal : 160 000 - 500 000 FCFA net/mois (CEREEQ, usines de transformation, laboratoires d'analyses)",
        "saviezVous": {
            "fait": "Le titrage Karl Fischer, inventé en 1935 par le chimiste allemand éponyme, est tellement sensible qu'il permet de détecter la présence d'eau dans une huile de moteur ou un plastique avec une précision descendant jusqu'à une seule partie par million (1 ppm = 0,0001 %) !",
            "pourquoi": "Cette précision extrême est vitale : une infime trace d'eau dans un transformateur haute tension ou un liquide de frein peut provoquer un court-circuit ou une défaillance catastrophique."
        },
        "sources": [
            {"organization": "CIDJ", "title": "Fiche métier : Technicien de laboratoire", "url": "https://www.cidj.com/s-orienter/metiers/technicien-technicienne-de-laboratoire", "type": "metier"},
            {"organization": "Onisep", "title": "Fiche métier : Technicien de laboratoire de contrôle", "type": "orientation"}
        ],
        "interests": ["experiences-laboratoire", "fabriquer-construire", "creer-produits-chimie"],
        "relatedJobSlugs": ["employe-technique-laboratoire", "technicien-chimiste", "technicien-biologiste", "ingenieur-recherche-produit"]
    },

    # 24. Thanatopracteur
    {
        "id": "thanatopracteur",
        "slug": "thanatopracteur",
        "familyId": "biologie-chimie",
        "domainId": "sciences-thanatologiques",
        "connectedFamilies": ["sante-soins-paramedical", "services-proximite"],
        "title": "Thanatopracteur",
        "genderAlternative": "Thanatopractrice",
        "summary": "Praticien des soins de conservation post-mortem, il allie chimie biologique, anatomie et art de la restauration pour préserver les défunts et apporter du réconfort aux familles en deuil.",
        "cidjUrl": "https://www.cidj.com/s-orienter/metiers/thanatopracteur-thanatopractrice",
        "description": "Le thanatopracteur prodigue des soins de conservation et d'embellissement sur les corps des personnes décédées. Par une technique d'injection vasculaire d'une solution chimique antiseptique et conservatrice (formaldéhyde et conservateurs biochimiques) et par aspiration des cavités, il stoppe temporairement la décomposition naturelle du corps. Il pratique ensuite la toilette funéraire, l'habillage, la coiffure et le maquillage (dermatologie restauratrice) pour restituer au défunt un visage paisible et digne lors de la présentation aux proches.",
        "studyLevel": "Diplôme National de Thanatopracteur (Bac +2, Ministère de la Santé)",
        "duration": "2 ans (formation théorique universitaire + stage pratique sous tutorat + épreuve pratique nationale)",
        "status": "Salarié d'une entreprise de pompes funèbres, régie municipale ou thanatopracteur libéral indépendant",
        "daily": {
            "morning": "Réception des autorisations de soins signées par la mairie et la famille, préparation de la salle de thanatopraxie en chambre funéraire ou mortuaire d'hôpital.",
            "afternoon": "Réalisation du soin de conservation vasculaire (abord carotidien ou fémoral), modelage des traits du visage, coiffure, habillage et maquillage adapté à la carnation du défunt.",
            "challenges": "Travailler dans la sérénité et le respect absolu de la dignité humaine face à la mort, et maîtriser strictement les règles de biosécurité face aux agents pathogènes potentiels."
        },
        "skills": {
            "technical": [
                "Anatomie humaine descriptive et angiologie (système artériel et veineux)",
                "Chimie des fluides de conservation (formol, glycérine, colorants vasculaires)",
                "Microbiologie post-mortem, toxicologie et prévention des risques infectieux",
                "Techniques de restauration faciale (reconstitution de tissus, cosmétologie funéraire)"
            ],
            "soft": [
                "Équilibre psychologique solide et grand respect éthique envers les défunts",
                "Discrétion, compassion et sens du devoir envers les familles endeuillées",
                "Minutie, dextérité manuelle et sens esthétique pour la présentation",
                "Autonomie complète dans l'organisation de ses déplacements et interventions"
            ],
            "tools": [
                "Appareil d'injection de fluides sous pression régulée (thanatographe)",
                "Canules artérielles, trocarts d'aspiration cavitaire et bistouris de précision",
                "Mallette de maquillage dermique spécifique pour carnation post-mortem",
                "Équipements de Protection Individuelle intégrale (masque respiratoire, blouse étanche, visière)"
            ]
        },
        "studies": {
            "pathway": [
                {"step": "Baccalauréat", "title": "Baccalauréat général ou ST2S / STL / Professionnel", "desc": "Aucune filière de bac spécifique obligatoire, profil scientifique ou médico-social apprécié."},
                {"step": "Formation théorique universitaire", "title": "Formation théorique préparatoire au Diplôme National (Université Lyon 1 ou Université d'Angers)", "desc": "Enseignement théorique officiel en médecine légale, anatomie, chimie biologique, réglementation funéraire et éthique."},
                {"step": "Stage pratique & Concours National", "title": "Diplôme National de Thanatopracteur (Ministère de la Santé)", "desc": "Réussite aux épreuves théoriques nationales, réalisation de 100 soins pratiques sous tutorat et examen pratique terminal devant le jury d'État."}
            ],
            "schools": [
                {"name": "Université Claude Bernard Lyon 1 (Faculté de Médecine / Institut de Thanatopraxie)", "country": "France", "scope": "France"},
                {"name": "Université d'Angers (UFR Santé — Formation théorique de thanatopraxie)", "country": "France", "scope": "France"},
                {"name": "Écoles privées agréées par le Comité National d'Évaluation Funéraire (AFIF, IFFPF)", "country": "France", "scope": "France"},
                {"name": "Services mortuaires hospitaliers universitaires de Dakar (Hôpital Aristide Le Dantec, Hôpital Fann — morgues et conservation)", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Diplôme National de Thanatopracteur délivré par le Ministère de la Santé (France)"]
        },
        "career": {
            "sectors": ["Services funéraires et pompes funèbres", "Chambres mortuaires hospitalières et instituts médico-légaux", "Thanatopraxie libérale itinérante"],
            "employerTypes": ["Entreprises de pompes funèbres (OGF, Roc-Eclerc, indépendants)", "Cabinets de thanatopraxie indépendants prestataires de services", "Services funéraires municipaux"],
            "evolution": "Thanatopracteur salarié ➔ Thanatopracteur libéral indépendant ➔ Maître de stage / Formateur en thanatopraxie ➔ Directeur d'agence funéraire",
            "pros": "Métier d'une profonde utilité humaine facilitant le travail de deuil des proches, liberté d'organisation appréciable pour les indépendants, recrutement stable.",
            "cons": "Confrontation permanente avec la mort, les corps altérés et la tristesse des proches, odeurs, exposition aux produits chimiques nécessitant des précautions strictes."
        },
        "salary": "🇫🇷 France : 2 000 - 3 500 € net/mois en tant que salarié, jusqu'à 4 000 - 5 500 € net/mois pour un praticien libéral à forte activité (CIDJ) • 🇸🇳 Sénégal : 200 000 - 600 000 FCFA net/mois (services mortuaires hospitaliers et entreprises de rapatriement funéraire)",
        "saviezVous": {
            "fait": "Les techniques modernes de thanatopraxie ont connu leur essor décisif lors de la Guerre de Sécession américaine (1861-1865). Le Dr Thomas Holmes a embaumé sur les champs de bataille plus de 4 000 soldats nordistes pour permettre le rapatriement en train de leurs dépouilles vers leurs familles à des milliers de kilomètres !",
            "pourquoi": "Avant cela, la décomposition rendait impossible tout long transport ferroviaire en plein été."
        },
        "sources": [
            {"organization": "CIDJ", "title": "Fiche métier : Thanatopracteur / Thanatopractrice", "url": "https://www.cidj.com/s-orienter/metiers/thanatopracteur-thanatopractrice", "type": "metier"},
            {"organization": "Ministère de la Santé", "title": "Conditions d'exercice et diplôme national de thanatopracteur", "type": "institutionnel"}
        ],
        "interests": ["creer-produits-chimie", "soigner-aider", "comprendre-corps-humain"],
        "relatedJobSlugs": ["agent-sterilisation", "technicien-chimiste", "biologiste-medical", "secretaire-medical"]
    }
]

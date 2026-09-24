# -*- coding: utf-8 -*-
"""
Part 2 of Communication, Marketing, Médias & Création Data Module
Contains 21 High-depth Job Cards:
  Domaine 3 : Marketing Digital & Acquisition (8 métiers)
  Domaine 4 : Médias, Publicité & Contenu (13 métiers)
Sources : École Supérieure de Publicité (ESP Métiers) & Studyrama Communication
"""

JOBS_PART2 = [
    # =========================================================================
    # DOMAINE 3 : MARKETING DIGITAL & ACQUISITION
    # =========================================================================
    {
        "id": "webmarketer",
        "slug": "webmarketer",
        "title": "Webmarketer / Responsable Marketing Digital",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "marketing-digital-acquisition",
        "subdomain": "Acquisition digitale & Growth",
        "sourceKey": "ESP_STUDYRAMA",
        "description": "Le Webmarketer conçoit, déploie et optimise l'ensemble de la stratégie marketing sur les canaux numériques afin de développer la notoriété en ligne, attirer des prospects qualifiés et maximiser les conversions et les ventes.",
        "shortDescription": "Pilote la stratégie marketing globale sur les leviers numériques (SEO, SEA, réseaux, emailing, site web) pour stimuler l'activité.",
        "missions": [
            "Élaborer et mettre en œuvre la stratégie de visibilité et d'acquisition digitale multicanale (site web, blog, newsletters, réseaux sociaux).",
            "Coordonner et piloter les campagnes publicitaires payantes (Google Ads, Meta Ads, LinkedIn Ads, Display).",
            "Superviser l'optimisation du référencement naturel (SEO) et la production de contenus digitaux attractifs.",
            "Analyser le trafic, les parcours utilisateurs et le taux de conversion via des outils de webanalytics (Google Analytics 4, Tag Manager).",
            "Mettre en place des tests A/B réguliers sur les pages d'atterrissage (landing pages) pour maximiser le retour sur investissement (ROI).",
            "Assurer une veille technologique permanente sur les nouveaux formats et les évolutions des algorithmes publicitaires."
        ],
        "salaries": {
            "france": {
                "junior": "32 000 - 38 000 € brut/an",
                "senior": "45 000 - 62 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "450 000 - 800 000 FCFA net/mois",
                "senior": "1 100 000 - 1 900 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Startups tech, pure-players e-commerce, PME en transition numérique, grandes entreprises omnicanales, agences web.",
        "typicalDay": "Analyse matinale du dashboard GA4 et des performances de conversion de la veille, réunion de calage avec le graphiste pour les créas de la semaine, puis paramétrage d'un split test sur les pages produits.",
        "skills": {
            "technical": ["Google Analytics 4 & Tag Manager", "Publicité en ligne (Google Ads, Social Ads)", "Notions solides de SEO et CMS (WordPress, Shopify)", "Email marketing & CRM basique", "Maîtrise des KPIs de rentabilité (CPA, CPL, ROAS, LTV)"],
            "human": ["Esprit analytique orienté chiffres", "Polyvalence et réactivité", "Curiosité technologique", "Sens de l'expérience utilisateur (UX)"]
        },
        "studies": {
            "france": ["Bachelor / Master en Marketing Digital (ESP, Sup de Pub, ESD, IAE, Écoles de commerce)"],
            "senegal": ["Licence / Master en Marketing Digital & E-commerce (Sup de Co Dakar, BEM Dakar, ISM, IAM)"]
        },
        "career": "Évolution vers Head of Digital, Directeur Marketing Digital ou Consultant Senior en Stratégie Web.",
        "relatedJobSlugs": ["responsable-acquisition-digitale", "traffic-manager-digital", "responsable-ecommerce"],
        "resources": [
            {"title": "Fiche Métier ESP — Webmarketer", "url": "https://espub.org/metiers/webmarketer/"},
            {"title": "Studyrama — Fiche métier Webmarketer", "url": "https://www.studyrama.com/formations/fiches-metiers/communication/webmarketer"}
        ],
        "sources": ["ESP", "Studyrama"],
        "saviezVous": "Le webmarketing allie rigueur scientifique des tests mathématiques et intuition psychologique pour décrypter ce qui pousse un internaute à passer à l'action.",
        "interests": ["J'aime les données et les chiffres", "J'aime la technologie", "J'aime les marques"],
        "connectedFamilies": ["informatique-numerique"]
    },
    {
        "id": "responsable-acquisition-digitale",
        "slug": "responsable-acquisition-digitale",
        "title": "Responsable Acquisition Digitale / Head of Acquisition",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "marketing-digital-acquisition",
        "subdomain": "Acquisition digitale & Growth",
        "sourceKey": "ESP",
        "description": "Le Responsable Acquisition Digitale a pour unique mission d'optimiser l'entonnoir d'acquisition de nouveaux clients et utilisateurs au coût par acquisition (CPA) le plus bas possible et au meilleur rendement sur dépenses publicitaires (ROAS).",
        "shortDescription": "Pilote les budgets et leviers payants et organiques pour générer un flux continu de prospects et de nouveaux clients.",
        "missions": [
            "Définir la stratégie d'acquisition multicanale payante (Paid Search, Paid Social, Affiliation, Display programmatique, Native Ads).",
            "Gérer et arbitrer les budgets d'investissement publicitaire en fonction de la rentabilité marginale de chaque canal.",
            "Coordonner les équipes créatives pour produire des déclinaisons publicitaires à fort taux de clic (CTR).",
            "Mettre en place des modèles d'attribution multi-touch pour évaluer la contribution réelle de chaque point de contact.",
            "Tester continuellement de nouveaux canaux d'acquisition émergents (TikTok Ads, Pinterest Ads, Retail Media).",
            "Présenter chaque semaine au comité de direction les performances d'acquisition et les prévisions de croissance."
        ],
        "salaries": {
            "france": {
                "junior": "38 000 - 45 000 € brut/an",
                "senior": "55 000 - 80 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "600 000 - 950 000 FCFA net/mois",
                "senior": "1 400 000 - 2 400 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Scale-ups tech, sites e-commerce à forte croissance, fintech, entreprises SaaS, grandes marques B2C.",
        "typicalDay": "Arbitrage budgétaire en temps réel sur les campagnes Meta Ads et Google Search après analyse des volumes de leads du weekend, point avec le pôle Data sur les signaux d'attrition précoce.",
        "skills": {
            "technical": ["Excellence sur Google Ads & Meta Ads Manager", "Analyse fine des cohortes et CAC/LTV", "Connaissance poussée des algorithmes d'enchères", "Attribution data-driven & Tracking server-side", "Outils d'AB testing et CRO"],
            "human": ["Obsession du résultat chiffré", "Résistance à la pression budgétaire", "Agilité intellectuelle", "Vision business affûtée"]
        },
        "studies": {
            "france": ["Master en Marketing Digital / Data Marketing (ESP, HEC, ESCP, Dauphine, écoles d'ingénieurs)"],
            "senegal": ["Master Spécialisé en Stratégie Digitale & Growth (BEM Dakar, ISM, Sup de Co Dakar)"]
        },
        "career": "Directeur Marketing (CMO), Chief Growth Officer (CGO) ou Directeur du Revenu (CRO).",
        "relatedJobSlugs": ["traffic-manager-digital", "social-ads-manager", "data-analyst-marketing"],
        "resources": [
            {"title": "Fiche Métier ESP — Responsable d'acquisition", "url": "https://espub.org/metiers/responsable-dacquisition/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "Dans les startups à forte croissance, le Head of Acquisition gère parfois des budgets publicitaires mensuels dépassant plusieurs centaines de milliers d'euros.",
        "interests": ["J'aime les données et les chiffres", "J'aime la technologie", "J'aime convaincre"],
        "connectedFamilies": ["informatique-numerique", "droit-management"]
    },
    {
        "id": "social-ads-manager",
        "slug": "social-ads-manager",
        "title": "Social Ads Manager / Spécialiste Media Payant Social",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "marketing-digital-acquisition",
        "subdomain": "SEA & Publicité payante (Google/Social Ads)",
        "sourceKey": "ESP",
        "description": "Le Social Ads Manager conçoit, configure, lance et optimise les campagnes publicitaires sponsorisées sur les plateformes sociales (Meta Ads, TikTok Ads, LinkedIn Ads, Pinterest, Snapchat) pour générer notoriété, trafic et conversions.",
        "shortDescription": "Expert des campagnes publicitaires ciblées sur les réseaux sociaux au service du ROI des marques.",
        "missions": [
            "Définir la stratégie média payante sur les réseaux sociaux en ciblant précisément les audiences cœurs et similaires (Lookalikes).",
            "Rédiger les briefings créatifs et collaborer avec les créatifs pour adapter les vidéos et formats verticaux (9:16).",
            "Configurer les campagnes, les pixels de conversion et les APIs de conversion côté serveur (CAPI Meta, TikTok Events API).",
            "Piloter au quotidien les enchères, les budgets et le capping de répétition pour éviter la fatigue publicitaire.",
            "Analyser les KPIs clés : coût pour mille (CPM), coût par clic (CPC), taux de conversion et ROAS.",
            "Rédiger des bilans de campagne réguliers enrichis de recommandations stratégiques pour les marques."
        ],
        "salaries": {
            "france": {
                "junior": "32 000 - 38 000 € brut/an",
                "senior": "45 000 - 60 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "400 000 - 750 000 FCFA net/mois",
                "senior": "1 000 000 - 1 700 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Agences médias spécialisées en social ads, agences de marketing d'influence, marques DNVB (Digital Native Vertical Brands), départements communication internes.",
        "typicalDay": "Tour d'horizon des métriques Meta Ads de nuit, coupure des créas sous-performantes, lancement de 5 nouveaux angles publicitaires TikTok en vidéo courte et échange avec le client agence.",
        "skills": {
            "technical": ["Meta Ads Manager, TikTok Ads, LinkedIn Campaign Manager", "Tracking CAPI & pixels", "Connaissance des formats publicitaires immersifs", "Notions de copywriting d'accroche", "Reporting sur Looker Studio ou Tableau"],
            "human": ["Créativité couplée à la rigueur mathématique", "Grande réactivité", "Curiosité pour les tendances de pop-culture", "Capacité de vulgarisation"]
        },
        "studies": {
            "france": ["Bachelor / Master Publicité Digitale & Réseaux Sociaux (ESP, Sup de Pub, ISCOM)"],
            "senegal": ["Licence / Master en Communication Digitale & Community/Ads (ISM, Sup de Co Dakar, BEM)"]
        },
        "career": "Head of Social Ads, Lead Media Buyer ou Directeur de Pôle Média Social en agence.",
        "relatedJobSlugs": ["responsable-acquisition-digitale", "traffic-manager-digital", "concepteur-redacteur"],
        "resources": [
            {"title": "Fiche Métier ESP — Social Ads Manager", "url": "https://espub.org/metiers/social-ads-manager/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "Sur TikTok et Instagram Reels, les 2 premières secondes d'une publicité vidéo (« le hook ») déterminent plus de 80 % de son succès commercial.",
        "interests": ["J'aime les réseaux sociaux", "J'aime les données et les chiffres", "J'aime créer des visuels"],
        "connectedFamilies": ["informatique-numerique"]
    },
    {
        "id": "email-marketing-manager",
        "slug": "email-marketing-manager",
        "title": "Email Marketing Manager / Spécialiste CRM Emailing",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "marketing-digital-acquisition",
        "subdomain": "CRM & Marketing Automation",
        "sourceKey": "ESP",
        "description": "L'Email Marketing Manager conçoit, scénarise et analyse les campagnes d'emailing et de newsletters pour fidéliser la base de contacts, réactiver les clients inactifs et générer du chiffre d'affaires incrémental récurrent.",
        "shortDescription": "Spécialiste de la communication par email, des scénarios automatisés et de la délivrabilité auprès des abonnés.",
        "missions": [
            "Concevoir le calendrier éditorial des newsletters commerciales, éditoriales et promotionnelles.",
            "Créer des séquences d'emails automatisés (onboarding, abandon de panier, anniversaire, réengagement).",
            "Segmenter finement la base de données selon les profils démographiques, les centres d'intérêt et l'historique d'achat.",
            "Optimiser la délivrabilité des emails en surveillant les protocoles techniques (SPF, DKIM, DMARC) et la réputation d'expéditeur.",
            "Tester en continu les objets, l'heure d'envoi, les visuels et les boutons d'appel à l'action (Call-to-Action).",
            "Mesurer les performances (taux d'ouverture, taux de clic, taux de désabonnement, revenus générés par email)."
        ],
        "salaries": {
            "france": {
                "junior": "30 000 - 36 000 € brut/an",
                "senior": "42 000 - 55 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "380 000 - 650 000 FCFA net/mois",
                "senior": "900 000 - 1 500 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Entreprises d'e-commerce, éditeurs de logiciels SaaS, médias en ligne, grandes banques et compagnies d'assurance, agences CRM.",
        "typicalDay": "Analyse du taux d'ouverture de la newsletter du mardi, rédaction d'une série de bienvenue pour les nouveaux inscrits, et vérification des scores de spam avant un envoi de masse.",
        "skills": {
            "technical": ["Logiciels d'emailing (Klaviyo, Brevo, Mailchimp, HubSpot, Salesforce Marketing Cloud)", "Bases de HTML/CSS pour templates responsives", "Segmentation et gestion de bases de données", "Copywriting d'objets d'emails captivants", "Règles RGPD et gestion des consentements"],
            "human": ["Empathie et écoute du client", "Sens du détail rédactionnel", "Rigueur méthodologique", "Affinité avec la psychologie de vente"]
        },
        "studies": {
            "france": ["Bachelor / Master Marketing Digital & Relation Client (ESP, IAE, Écoles de commerce)"],
            "senegal": ["Licence / Master en Marketing & Commerce Électronique (BEM Dakar, ISM, Sup de Co)"]
        },
        "career": "Responsable CRM, Responsable Rétention & Fidélisation ou Chef de Projet Marketing Automation.",
        "relatedJobSlugs": ["responsable-crm", "webmarketer", "ux-writer-copywriter-digital"],
        "resources": [
            {"title": "Fiche Métier ESP — Responsable Email Marketing", "url": "https://espub.org/metiers/responsable-email-marketing/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "L'email marketing conserve historiquement le meilleur retour sur investissement (ROI) de tout le marketing digital, avec en moyenne 36 à 40 € de revenus générés par euro investi.",
        "interests": ["J'aime écrire des textes", "J'aime convaincre", "J'aime les données et les chiffres"],
        "connectedFamilies": ["informatique-numerique"]
    },
    {
        "id": "responsable-crm",
        "slug": "responsable-crm",
        "title": "Responsable CRM & Fidélisation Client",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "marketing-digital-acquisition",
        "subdomain": "CRM & Marketing Automation",
        "sourceKey": "ESP_STUDYRAMA",
        "description": "Le Responsable CRM (Customer Relationship Management) pilote la stratégie de gestion de la relation client de bout en bout afin d'augmenter la valeur vie client (Customer Lifetime Value), réduire le churn et transformer les clients en ambassadeurs.",
        "shortDescription": "Structure et exploite les données clients pour personnaliser les parcours, maximiser la fidélité et la rétention.",
        "missions": [
            "Concevoir le programme de fidélisation global de la marque (statuts, points, avantages exclusifs, parrainage).",
            "Cartographier et orchestrer les parcours clients omnicanaux (web, application mobile, boutiques physiques, service client).",
            "Administrer la plateforme CRM (Salesforce, HubSpot, Braze, Dynamics) et assurer la qualité et l'enrichissement des données.",
            "Définir les règles de scoring des prospects et clients pour déclencher les interactions les plus pertinentes au bon moment.",
            "Mener des analyses prédictives sur le taux d'attrition (churn) et concevoir des plans d'action anti-départ.",
            "Piloter les indicateurs de satisfaction client : NPS (Net Promoter Score), CSAT et valeur moyenne de commande."
        ],
        "salaries": {
            "france": {
                "junior": "36 000 - 42 000 € brut/an",
                "senior": "50 000 - 75 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "550 000 - 900 000 FCFA net/mois",
                "senior": "1 300 000 - 2 200 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Grandes enseignes de distribution, banques et assurances, télécoms, plateformes de streaming et d'abonnement, marques de mode.",
        "typicalDay": "Analyse de la courbe de churn du dernier trimestre, atelier avec les équipes produit pour intégrer des notifications push ciblées dans l'application mobile et revue de conformité RGPD.",
        "skills": {
            "technical": ["Maîtrise d'un outil CRM majeur (Salesforce, HubSpot, Adobe Campaign)", "Connaissance des bases relationnelles SQL", "Modélisation de parcours clients (Customer Journey Mapping)", "Analyse RFM (Récence, Fréquence, Montant)", "Connaissance de la réglementation des données personnelles"],
            "human": ["Orientation client absolue", "Vision transverse et collaborative", "Esprit analytique poussé", "Pédagogie et communication claire"]
        },
        "studies": {
            "france": ["Master en Marketing & Gestion de la Relation Client (ESP, IAE, Audencia, Neoma, Dauphine)"],
            "senegal": ["Master en Marketing Relationnel & Data Client (BEM Dakar, IAM, Sup de Co Dakar)"]
        },
        "career": "Directeur CRM & Data Client, Directeur de l'Expérience Client (CX) ou Chief Customer Officer (CCO).",
        "relatedJobSlugs": ["email-marketing-manager", "data-analyst-marketing", "responsable-experience-client"],
        "resources": [
            {"title": "Fiche Métier ESP — Responsable CRM", "url": "https://espub.org/metiers/responsable-crm/"},
            {"title": "Studyrama — Fiche Responsable relation client", "url": "https://www.studyrama.com/formations/fiches-metiers/communication/responsable-relation-client"}
        ],
        "sources": ["ESP", "Studyrama"],
        "saviezVous": "Acquérir un nouveau client coûte entre 5 et 7 fois plus cher que de fidéliser un client existant, ce qui place le CRM au centre de la rentabilité des entreprises.",
        "interests": ["J'aime les données et les chiffres", "J'aime communiquer avec les gens", "J'aime convaincre"],
        "connectedFamilies": ["droit-management", "informatique-numerique"]
    },
    {
        "id": "data-analyst-marketing",
        "slug": "data-analyst-marketing",
        "title": "Data Analyst Marketing / Web Analytics Specialist",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "marketing-digital-acquisition",
        "subdomain": "Data Marketing & Web Analytics",
        "sourceKey": "ESP",
        "description": "Le Data Analyst Marketing collecte, modélise et interprète les données issues des campagnes marketing, des sites web et des applications pour fournir des insights stratégiques concrets aux décideurs et optimiser les investissements.",
        "shortDescription": "Fait parler les données des campagnes et des utilisateurs pour éclairer les décisions stratégiques et budgétaires.",
        "missions": [
            "Concevoir le plan de marquage technique (tagging plan) pour suivre tous les événements sur les plateformes digitales.",
            "Extraire et nettoyer les jeux de données complexes à partir des entrepôts de données (BigQuery, Snowflake).",
            "Construire des tableaux de bord interactifs de pilotage de performance commerciale et marketing (Looker Studio, Power BI, Tableau).",
            "Analyser la performance des entonnoirs de conversion et identifier les points de friction dans les parcours d'achat.",
            "Modéliser le mix marketing (Marketing Mix Modeling - MMM) pour quantifier l'impact de chaque canal de communication.",
            "Traduire des analyses statistiques avancées en recommandations business claires et actionnables."
        ],
        "salaries": {
            "france": {
                "junior": "38 000 - 45 000 € brut/an",
                "senior": "55 000 - 75 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "650 000 - 1 100 000 FCFA net/mois",
                "senior": "1 500 000 - 2 500 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Cabinets de conseil en data marketing, agences médias, grands comptes e-commerce, banques, télécoms.",
        "typicalDay": "Requêtes SQL matinales pour isoler l'impact d'une promotion sur le panier moyen, mise à jour d'un dashboard Power BI pour le comité de direction et réunion de cadrage d'un modèle d'attribution avec l'équipe Acquisition.",
        "skills": {
            "technical": ["SQL & manipulation de bases de données", "Google Analytics 4 & Google Tag Manager", "Outils de Data Visualization (Power BI, Tableau, Looker)", "Notions de Python ou R pour l'analyse statistique", "Compréhension fine des métriques marketing"],
            "human": ["Rigueur et esprit critique", "Capacité de vulgarisation et storytelling de données", "Curiosité intellectuelle", "Goût pour la résolution de problèmes"]
        },
        "studies": {
            "france": ["Master en Data Marketing / Économétrie / Statistiques (ESP, ENSAI, Dauphine, IAE, Télécom Paris)"],
            "senegal": ["Master en Big Data & Analytics appliqué au Business (BEM Dakar, UCAD FASEG, ESP Dakar, ISM)"]
        },
        "career": "Lead Data Analyst, Head of Marketing Intelligence ou Chief Data Officer (CDO).",
        "relatedJobSlugs": ["responsable-acquisition-digitale", "webmarketer", "traffic-manager-digital"],
        "resources": [
            {"title": "Fiche Métier ESP — Data Analyst Marketing", "url": "https://espub.org/metiers/data-analyst-marketing/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "La fin progressive des cookies tiers a rendu le rôle du Data Analyst Marketing encore plus crucial pour inventer de nouveaux modes de mesure respectueux de la vie privée.",
        "interests": ["J'aime les données et les chiffres", "J'aime résoudre des énigmes", "J'aime la technologie"],
        "connectedFamilies": ["informatique-numerique"]
    },
    {
        "id": "responsable-ecommerce",
        "slug": "responsable-ecommerce",
        "title": "Responsable E-commerce / E-store Manager",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "marketing-digital-acquisition",
        "subdomain": "E-commerce & Vente en ligne",
        "sourceKey": "ESP_STUDYRAMA",
        "description": "Le Responsable E-commerce gère le site de vente en ligne comme une véritable boutique digitale. Il pilote l'offre produit, le merchandising digital, les promotions et la chaîne logistique pour maximiser le chiffre d'affaires et la satisfaction client.",
        "shortDescription": "Pilote la stratégie de vente en ligne, l'expérience d'achat sur le site et l'atteinte des objectifs de chiffre d'affaires.",
        "missions": [
            "Piloter la performance commerciale du site e-commerce (chiffre d'affaires, marge, panier moyen, taux de conversion).",
            "Organiser le calendrier promotionnel (soldes, Black Friday, lancements exclusifs) et animer les pages d'accueil et de catégories.",
            "Superviser l'intégration des catalogues produits, la rédaction des fiches descriptives et l'optimisation des visuels.",
            "Améliorer continuellement l'expérience d'achat (UX) sur mobile et ordinateur de la recherche au paiement sécurisé.",
            "Coordonner la logistique des expéditions, la gestion des stocks avec les entrepôts et le service après-vente.",
            "Travailler main dans la main avec les équipes d'acquisition pour amener un trafic ciblé et rentable sur la boutique."
        ],
        "salaries": {
            "france": {
                "junior": "35 000 - 42 000 € brut/an",
                "senior": "50 000 - 75 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "500 000 - 900 000 FCFA net/mois",
                "senior": "1 200 000 - 2 000 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Marques de prêt-à-porter, cosmétiques, biens d'équipement, pure-players du commerce électronique, marketplaces.",
        "typicalDay": "Vérification des commandes du matin et de la bonne synchronisation des stocks, réagencement des bannières de la home page pour mettre en avant une nouveauté, puis échange avec la logistique sur les délais de livraison.",
        "skills": {
            "technical": ["CMS E-commerce (Shopify, Magento, Prestashop, Salesforce Commerce Cloud)", "E-merchandising et gestion de catalogue", "Google Analytics 4 & suivi des tunnels de commande", "Logistique e-commerce et gestion des retours", "Moyens de paiement en ligne et sécurité"],
            "human": ["Fibre commerciale très prononcée", "Sens du client et de l'expérience d'achat", "Polyvalence et sens opérationnel", "Capacité à gérer les urgences techniques"]
        },
        "studies": {
            "france": ["Master en E-commerce & Vente Omnicanale (ESP, Kedge, Neoma, Université Paris-Dauphine)"],
            "senegal": ["Master en Commerce Électronique & Management Digital (BEM Dakar, Sup de Co, ISM)"]
        },
        "career": "Directeur E-commerce & Digital, Directeur Omnicanal ou Directeur Général de marque DNVB.",
        "relatedJobSlugs": ["webmarketer", "responsable-merchandising", "responsable-acquisition-digitale"],
        "resources": [
            {"title": "Fiche Métier ESP — Responsable e-commerce", "url": "https://espub.org/metiers/responsable-e-commerce/"},
            {"title": "Studyrama — Fiche Responsable e-commerce", "url": "https://www.studyrama.com/formations/fiches-metiers/communication/responsable-e-commerce"}
        ],
        "sources": ["ESP", "Studyrama"],
        "saviezVous": "En Afrique de l'Ouest, l'intégration du paiement mobile (Wave, Orange Money) a révolutionné les taux de conversion des sites e-commerce locaux.",
        "interests": ["J'aime convaincre", "J'aime la technologie", "J'aime les données et les chiffres"],
        "connectedFamilies": ["droit-management", "informatique-numerique"]
    },
    {
        "id": "traffic-manager-digital",
        "slug": "traffic-manager-digital",
        "title": "Traffic Manager Digital / Spécialiste Génération d'Audience",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "marketing-digital-acquisition",
        "subdomain": "Acquisition digitale & Growth",
        "sourceKey": "ESP_STUDYRAMA",
        "description": "Le Traffic Manager Digital a la charge d'orienter le maximum d'internautes qualifiés vers un site web ou une application mobile en orchestrant et en optimisant tous les leviers d'audience payants, partenaires et naturels.",
        "shortDescription": "Garantit le flux d'audience qualifiée vers les sites web en pilotant les sources de trafic et leur rentabilité.",
        "missions": [
            "Concevoir et programmer les plans de trafic pour les campagnes promotionnelles et institutionnelles.",
            "Paramétrer et auditer les tags et marqueurs de suivi sur le site web pour garantir la traçabilité des visiteurs.",
            "Négocier et gérer les partenariats de visibilité, l'affiliation et les réseaux publicitaires tiers.",
            "Analyser quotidiennement les sources d'audience (direct, organique, referral, payant) et les taux de rebond.",
            "Optimiser le coût au clic (CPC) et le coût par mille impressions (CPM) sur chaque source d'acquisition.",
            "Collaborer avec les développeurs web pour optimiser la vitesse de chargement des pages d'accueil et d'atterrissage."
        ],
        "salaries": {
            "france": {
                "junior": "30 000 - 36 000 € brut/an",
                "senior": "42 000 - 58 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "400 000 - 700 000 FCFA net/mois",
                "senior": "950 000 - 1 600 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Agences d'acquisition digitale, grands médias en ligne, sites marchands à fort volume de transactions, comparateurs de prix.",
        "typicalDay": "Contrôle des volumes de trafic d'un lancement de produit, ajustement des enchères sur les plateformes de reciblage publicitaire (retargeting) et détection d'une anomalie de tracking corrigée avec l'équipe technique.",
        "skills": {
            "technical": ["Maîtrise complète de Google Analytics 4 & Tag Manager", "Gestion des réseaux d'affiliation et des plateformes DSP", "Compréhension fine des cookies, UTM et paramètres d'URL", "Bases solides en SEO et SEA", "Analyse de rentabilité sur tableurs"],
            "human": ["Rigueur chirurgicale", "Esprit analytique affûté", "Curiosité technique", "Réactivité face aux anomalies de trafic"]
        },
        "studies": {
            "france": ["Licence Pro / Master E-marketing & Traffic Management (ESP, IAE, Université Sorbonne Nouvelle)"],
            "senegal": ["Licence / Master en Marketing Digital & Gestion de Plateforme (Sup de Co, ISM, BEM)"]
        },
        "career": "Responsable de l'Acquisition, Directeur du Trafic et des Médias Digitaux ou Consultant Analytics Indépendant.",
        "relatedJobSlugs": ["webmarketer", "responsable-acquisition-digitale", "data-analyst-marketing"],
        "resources": [
            {"title": "Fiche Métier ESP — Traffic Manager", "url": "https://espub.org/metiers/traffic-manager/"},
            {"title": "Studyrama — Fiche Traffic Manager", "url": "https://www.studyrama.com/formations/fiches-metiers/communication/traffic-manager"}
        ],
        "sources": ["ESP", "Studyrama"],
        "saviezVous": "Un bon Traffic Manager ne cherche pas le trafic le plus volumineux, mais le trafic le plus qualifié : 1 000 visiteurs très ciblés valent bien plus que 100 000 visiteurs désintéressés.",
        "interests": ["J'aime les données et les chiffres", "J'aime la technologie", "J'aime résoudre des énigmes"],
        "connectedFamilies": ["informatique-numerique"]
    },

    # =========================================================================
    # DOMAINE 4 : MÉDIAS, PUBLICITÉ & CONTENU
    # =========================================================================
    {
        "id": "chef-de-publicite",
        "slug": "chef-de-publicite",
        "title": "Chef de Publicité en Agence / Client Account Executive",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "medias-publicite-contenu",
        "subdomain": "Publicité, Agences & Conseil",
        "sourceKey": "ESP_STUDYRAMA",
        "description": "Le Chef de Publicité en agence est le chef d'orchestre opérationnel de la relation client. Il prend le brief de l'annonceur, coordonne l'équipe créative et média, respecte le planning et le budget pour faire naître des campagnes percutantes.",
        "shortDescription": "Pilote opérationnel des campagnes publicitaires en agence, assurant le lien entre l'annonceur et les créatifs.",
        "missions": [
            "Recueillir et approfondir les besoins de communication et les objectifs de l'annonceur (brief client).",
            "Rédiger le brief créatif destiné aux concepteurs-rédacteurs, directeurs artistiques et planneurs stratégiques.",
            "Construire le rétroplanning de production et veiller au strict respect des jalons de livraison.",
            "Élaborer les devis prévisionnels, négocier les prestations et suivre la rentabilité financière de chaque projet.",
            "Présenter les concepts créatifs au client annonceur et animer les réunions de validation.",
            "Assurer le bilan de fin de campagne et évaluer la réalisation des objectifs d'impact et d'image."
        ],
        "salaries": {
            "france": {
                "junior": "30 000 - 36 000 € brut/an",
                "senior": "40 000 - 55 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "400 000 - 750 000 FCFA net/mois",
                "senior": "950 000 - 1 650 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Agences de publicité (Havas, Publicis, BETC, Dentsu, agences indépendantes), agences de communication 360°, régies médias.",
        "typicalDay": "Point client de calage sur les retouches d'un spot vidéo, débrief avec l'équipe créative dans l'open space de l'agence et actualisation du tableau de suivi des coûts de production.",
        "skills": {
            "technical": ["Compréhension aiguë de la chaîne graphique et de production audiovisuelle", "Gestion de projet publicitaire et budgétaire", "Techniques de pitch et de soutenance", "Culture publicitaire et créative solide", "Outils de gestion collaborative (Asana, Monday, Notion)"],
            "human": ["Sens relationnel et diplomatie", "Résistance au stress et gestion des délais serrés", "Énergie communicative et enthousiasme", "Rigueur d'organisation"]
        },
        "studies": {
            "france": ["Bachelor / Master Communication & Publicité (ESP, Sup de Pub, ISCOM, CELSA)"],
            "senegal": ["Licence / Master en Communication & Publicité (Sup de Co Dakar, BEM Dakar, ISM, CESTI)"]
        },
        "career": "Directeur de Clientèle, Directeur Commercial d'Agence ou Responsable Communication chez l'Annonceur.",
        "relatedJobSlugs": ["directeur-de-clientele", "planneur-strategique", "concepteur-redacteur"],
        "resources": [
            {"title": "Fiche Métier ESP — Chef de publicité", "url": "https://espub.org/metiers/chef-de-publicite/"},
            {"title": "Studyrama — Fiche métier Chef de publicité", "url": "https://www.studyrama.com/formations/fiches-metiers/communication/chef-de-publicite"}
        ],
        "sources": ["ESP", "Studyrama"],
        "saviezVous": "Le rôle du Chef de Publicité exige une empathie bilingue : savoir parler le langage business et financier du client tout en respectant l'audace et la sensibilité des créatifs.",
        "interests": ["J'aime convaincre", "J'aime communiquer avec les gens", "J'aime les marques"],
        "connectedFamilies": ["droit-management"]
    },
    {
        "id": "directeur-de-clientele",
        "slug": "directeur-de-clientele",
        "title": "Directeur / Directrice de Clientèle en Agence",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "medias-publicite-contenu",
        "subdomain": "Publicité, Agences & Conseil",
        "sourceKey": "ESP",
        "description": "Le Directeur de Clientèle pilote un portefeuille stratégique de comptes clients au sein d'une agence de publicité. Il supervise les chefs de publicité, conseille les comités de direction des marques et gère le développement commercial de l'agence.",
        "shortDescription": "Conseille stratégiquement les annonceurs au plus haut niveau et pilote le pôle commercial et opérationnel de l'agence.",
        "missions": [
            "Piloter la relation commerciale et stratégique avec les directeurs généraux et marketing des entreprises clientes.",
            "Manager et faire monter en compétences une équipe de chefs de publicité et de chargés de compte.",
            "Repérer les opportunités de développement commercial et remporter des appels d'offres stratégiques (compétitions d'agences).",
            "Garantir la profitabilité économique de chaque compte client sous sa responsabilité.",
            "Valider les orientations stratégiques et créatives avant la soutenance finale devant le client.",
            "Participer à la gouvernance et au positionnement d'expertise de l'agence."
        ],
        "salaries": {
            "france": {
                "junior": "45 000 - 55 000 € brut/an",
                "senior": "65 000 - 95 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "850 000 - 1 400 000 FCFA net/mois",
                "senior": "1 800 000 - 3 200 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Grandes agences de publicité mondiales, agences indépendantes réputées, groupes de communication intégrée.",
        "typicalDay": "Pitch matinal lors d'une compétition d'agence face au comité exécutif d'une multinationale, déjeuner stratégique avec un client clé et revue de marge opérationnelle avec la direction financière de l'agence.",
        "skills": {
            "technical": ["Vision stratégique 360° des marques", "Négociation de contrats complexes et gestion de P&L", "Leadership d'équipe créative et commerciale", "Excellence oratoire et charisme de soutenance", "Maîtrise du marché publicitaire et des tendances de consommation"],
            "human": ["Hauteur de vue et intelligence relationnelle", "Capacité à inspirer confiance et leadership", "Résilience et goût du défi commercial", "Diplomatie sous haute tension"]
        },
        "studies": {
            "france": ["Master Grande École de Commerce (HEC, ESCP, ESSEC) ou Master Spécialisé Publicité (ESP, CELSA, Sup de Pub)"],
            "senegal": ["Master en Management des Organisations & Communication d'Entreprise (BEM Dakar, IAM, ISM)"]
        },
        "career": "Directeur Général d'Agence, Associé (Partner) ou Vice-Président Marketing chez un grand annonceur.",
        "relatedJobSlugs": ["chef-de-publicite", "planneur-strategique", "directeur-de-creation"],
        "resources": [
            {"title": "Fiche Métier ESP — Directeur de clientèle", "url": "https://espub.org/metiers/directeur-de-clientele/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "Remporter une grande compétition d'agence peut représenter des millions d'euros d'honoraires et mobiliser des dizaines d'experts pendant un mois de travail jour et nuit.",
        "interests": ["J'aime convaincre", "J'aime diriger une équipe", "J'aime les marques"],
        "connectedFamilies": ["droit-management"]
    },
    {
        "id": "planneur-strategique",
        "slug": "planneur-strategique",
        "title": "Planneur Stratégique / Brand Planner",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "medias-publicite-contenu",
        "subdomain": "Planning stratégique",
        "sourceKey": "ESP_STUDYRAMA",
        "description": "Le Planneur Stratégique est le cerveau inspirateur des agences de publicité. À la croisée de la sociologie, des tendances culturelles et du business, il déniche l'« insight consommateur » décisif qui sert de point de départ à des campagnes créatives légendaires.",
        "shortDescription": "Décrypte les évolutions de société et les comportements pour formuler l'idée motrice des campagnes publicitaires.",
        "missions": [
            "Observer et analyser les mouvements de société, les contre-cultures et les évolutions comportementales des consommateurs.",
            "Étudier en profondeur les marques, leurs marchés concurrentiels et leurs territoires de légitimité.",
            "Identifier l'insight consommateur : cette vérité humaine profonde souvent non exprimée mais partagée par le public cible.",
            "Rédiger la plateforme de marque et formuler le brief créatif le plus inspirant possible pour les créatifs.",
            "Animer des ateliers d'idéation et stimuler la créativité de l'agence lors des compétitions.",
            "Participer aux soutenances client pour défendre la pertinence intellectuelle et stratégique du parti-pris choisi."
        ],
        "salaries": {
            "france": {
                "junior": "34 000 - 42 000 € brut/an",
                "senior": "55 000 - 85 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "500 000 - 900 000 FCFA net/mois",
                "senior": "1 300 000 - 2 300 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Départements de planning stratégique en agence de pub, cabinets de prospective et de tendances, directions de marque.",
        "typicalDay": "Lecture de rapports sociologiques et de vidéos TikTok d'une sous-culture émergente, formalisation d'une métaphore conceptuelle percutante et session de rebond d'idées avec le Directeur de Création.",
        "skills": {
            "technical": ["Méthodologie des études qualitatives et quantitatives", "Veille sociologique, culturelle et sémiologique", "Capacité à synthétiser des données complexes en une formule percutante", "Culture générale encyclopédique", "Maîtrise des modèles de plateformes de marque"],
            "human": ["Curiosité insatiable et esprit rebelle", "Capacité d'émerveillement et intuition aiguë", "Aisance rédactionnelle et verbale brillante", "Sensibilité esthétique"]
        },
        "studies": {
            "france": ["Master en Planning Stratégique (ESP, CELSA, Sciences Po, Sup de Pub, Universités de Philosophie/Sociologie)"],
            "senegal": ["Master en Stratégie de Communication & Sociologie des Médias (CESTI UCAD, BEM Dakar, ISM)"]
        },
        "career": "Directeur du Planning Stratégique, Brand Strategist International ou Directeur de la Stratégie de Marque.",
        "relatedJobSlugs": ["brand-strategist", "concepteur-redacteur", "directeur-de-clientele"],
        "resources": [
            {"title": "Fiche Métier ESP — Planneur stratégique", "url": "https://espub.org/metiers/planneur-strategique/"},
            {"title": "Studyrama — Fiche métier Planneur stratégique", "url": "https://www.studyrama.com/formations/fiches-metiers/communication/planneur-strategique"}
        ],
        "sources": ["ESP", "Studyrama"],
        "saviezVous": "La célèbre campagne « Think Different » d'Apple ou « Just Do It » de Nike sont nées du travail d'orfèvre de planneurs stratégiques qui ont capté l'air du temps.",
        "interests": ["J'aime analyser les gens", "J'aime les marques", "J'aime résoudre des énigmes"],
        "connectedFamilies": ["sciences-humaines-sociales", "culture-patrimoine"]
    },
    {
        "id": "channel-planner",
        "slug": "channel-planner",
        "title": "Channel Planner / Stratège des Canaux de Diffusion",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "medias-publicite-contenu",
        "subdomain": "Planning stratégique",
        "sourceKey": "ESP",
        "description": "Le Channel Planner conçoit l'architecture de diffusion omnicanale d'une campagne. Il détermine précisément à quel moment, sur quel écran, dans quel lieu physique ou virtuel et sous quel format le message publicitaire touchera la cible avec le maximum d'impact.",
        "shortDescription": "Architecte de la diffusion publicitaire : détermine les meilleurs points de contact pour toucher les audiences cibles.",
        "missions": [
            "Analyser les parcours de consommation média des cibles (télévision, streaming, podcasts, réseaux sociaux, affichage, cinéma).",
            "Définir la synergie optimale entre les canaux owned (propres à la marque), earned (retombées gratuites) et paid (payants).",
            "Collaborer étroitement avec les planneurs stratégiques et les créatifs pour adapter les idées aux spécificités des supports.",
            "Élaborer la matrice d'allocation des investissements entre médias traditionnels et digitaux.",
            "Mesurer l'impact de synergie (cross-média) sur la mémorisation du message et l'intention d'achat.",
            "Assurer une veille constante sur l'apparition de nouveaux carrefours d'audience (métavers, jeux vidéo, plateformes de live)."
        ],
        "salaries": {
            "france": {
                "junior": "33 000 - 40 000 € brut/an",
                "senior": "50 000 - 75 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "450 000 - 800 000 FCFA net/mois",
                "senior": "1 100 000 - 1 900 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Agences médias de grande envergure (Omnicom Media Group, Publicis Media, GroupM), agences 360°, grandes régies publicitaires.",
        "typicalDay": "Modélisation d'un parcours consommateur reliant affichage urbain dynamique, campagne radio géolocalisée et notifications push sponsorisées sur mobile, puis présentation de la répartition média au client.",
        "skills": {
            "technical": ["Études d'audience média (Médiamétrie, Kantar, ACPM)", "Connaissance exhaustive de l'écosystème média et digital", "Modélisation de points de contact (Touchpoint Planning)", "Compréhension des comportements multi-écrans", "Gestion budgétaire média"],
            "human": ["Vision holistique et capacité de synthèse", "Pragmatisme et créativité contextuelle", "Pédagogie pour expliquer les choix d'écrans", "Curiosité pour les usages médias"]
        },
        "studies": {
            "france": ["Master en Stratégie Média / Communication (ESP, CELSA, Sup de Pub, Sciences Po)"],
            "senegal": ["Master en Gestion des Médias & Communication (CESTI, BEM Dakar, ISM)"]
        },
        "career": "Directeur de la Stratégie Média, Head of Media Planning ou Directeur Général d'Agence Média.",
        "relatedJobSlugs": ["planneur-strategique", "responsable-strategie-medias", "media-buyer"],
        "resources": [
            {"title": "Fiche Métier ESP — Channel Planner", "url": "https://espub.org/metiers/channel-planner/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "Aujourd'hui, un consommateur est exposé à plus de 5 000 messages commerciaux par jour ; le rôle du Channel Planner est d'éviter le matraquage pour privilégier la pertinence du moment.",
        "interests": ["J'aime les données et les chiffres", "J'aime résoudre des énigmes", "J'aime les marques"],
        "connectedFamilies": ["culture-patrimoine"]
    },
    {
        "id": "responsable-strategie-medias",
        "slug": "responsable-strategie-medias",
        "title": "Responsable de la Stratégie Médias / Media Strategist",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "medias-publicite-contenu",
        "subdomain": "Media Planning, Achat d'espace & Régies",
        "sourceKey": "ESP",
        "description": "Le Responsable de la Stratégie Médias orchestre l'ensemble des investissements publicitaires plurimédias d'un groupe ou d'une marque. Il garantit la couverture optimale des cibles au meilleur coût tout en préservant l'image de marque dans les environnements de diffusion (Brand Safety).",
        "shortDescription": "Conçoit et pilote la stratégie d'achat d'espace et d'exposition plurimédia pour les marques.",
        "missions": [
            "Concevoir la recommandation média annuelle en cohérence avec les lancements commerciaux et les temps forts de la marque.",
            "Piloter les relations avec les agences médias conseil et challenger leurs plans médias recommandés.",
            "Négocier les accords-cadres pluriannuels et les conditions tarifaires avec les grandes régies publicitaires.",
            "Arbitrer les budgets entre télévision, affichage extérieur (OOH/DOOH), presse, radio et médias digitaux.",
            "Garantir le respect des critères de Brand Safety et d'éthique de diffusion des publicités.",
            "Auditer et mesurer l'efficacité globale des investissements à l'aide d'études post-tests publicitaires."
        ],
        "salaries": {
            "france": {
                "junior": "38 000 - 45 000 € brut/an",
                "senior": "60 000 - 90 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "600 000 - 1 000 000 FCFA net/mois",
                "senior": "1 500 000 - 2 600 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Grandes entreprises annonceurs (l'Oréal, Orange, Renault, Danone), agences médias internationales, régies audiovisuelles.",
        "typicalDay": "Revue des scores d'audience du dernier spot TV diffusé en prime-time, négociation des tarifs d'affichage urbain pour les fêtes de fin d'année et arbitrage budgétaire entre sponsoring sportif et digital.",
        "skills": {
            "technical": ["Connaissance approfondie de tous les univers médias (TV, Digital, OOH, Radio, Presse)", "Mesures d'audience et calcul de GRP (Gross Rating Point)", "Négociation d'accords volumiques de haut niveau", "Contrôle financier et audit média", "Compréhension de la réglementation publicitaire (Loi Évin, Loi Sapin)"],
            "human": ["Sens aigu de la négociation", "Leadership et vision stratégique", "Excellence relationnelle", "Capacité à gérer des budgets massifs avec sérénité"]
        },
        "studies": {
            "france": ["Master en Stratégie Média / Écoles de Commerce (ESP, CELSA, ESSEC, ESCP, IAE)"],
            "senegal": ["Master en Communication & Négociation Média (BEM Dakar, CESTI UCAD, ISM)"]
        },
        "career": "Directeur Média & Publicité, Directeur de la Communication Globale ou Vice-Président Marketing.",
        "relatedJobSlugs": ["channel-planner", "media-buyer", "directeur-communication"],
        "resources": [
            {"title": "Fiche Métier ESP — Responsable stratégie média", "url": "https://espub.org/metiers/responsable-de-strategie-media/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "La négociation média obéit à des codes stricts : en France, la Loi Sapin encadre la transparence totale de l'achat d'espace pour protéger les annonceurs.",
        "interests": ["J'aime négocier", "J'aime les marques", "J'aime les données et les chiffres"],
        "connectedFamilies": ["droit-management"]
    },
    {
        "id": "media-buyer",
        "slug": "media-buyer",
        "title": "Media Buyer / Acheteur d'Espaces Publicitaires",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "medias-publicite-contenu",
        "subdomain": "Media Planning, Achat d'espace & Régies",
        "sourceKey": "ESP",
        "description": "Le Media Buyer négocie et achète les espaces publicitaires auprès des régies médias (chaînes de télévision, radios, afficheurs, réseaux digitaux) aux meilleurs tarifs et aux créneaux les plus avantageux pour optimiser le budget de l'annonceur.",
        "shortDescription": "Négociateur aguerri qui réserve et optimise l'achat des espaces publicitaires sur tous les supports.",
        "missions": [
            "Consulter les régies médias et analyser les grilles tarifaires et les inventaires disponibles.",
            "Négocier âprement les remises, les emplacements préférentiels et les compensations d'audience.",
            "Réserver les espaces et s'assurer de la bonne transmission technique des éléments publicitaires dans les délais.",
            "Surveiller en temps réel la diffusion effective et vérifier la conformité avec les engagements contractuels.",
            "Gérer les litiges éventuels en cas de non-diffusion ou de sous-performance d'audience.",
            "Rédiger le bilan financier détaillé de l'achat d'espace et calculer les économies réalisées."
        ],
        "salaries": {
            "france": {
                "junior": "30 000 - 36 000 € brut/an",
                "senior": "45 000 - 65 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "400 000 - 750 000 FCFA net/mois",
                "senior": "1 000 000 - 1 700 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Agences d'achat d'espace média, agences médias indépendantes, plateformes de trading média, annonceurs intégrés.",
        "typicalDay": "Session intensive d'appels et d'échanges d'ordres d'achat avec les régies TV pour bloquer les meilleurs spots publicitaires avant un grand match de football, vérification des ordres de diffusion du lendemain.",
        "skills": {
            "technical": ["Techniques de négociation commerciale agressive", "Maîtrise des logiciels d'achat d'espace (Medialand, Popcorn, Kantar)", "Calculs de rentabilité et ratios coût/contact", "Droit de la publicité et contrats commerciaux", "Gestion administrative rigoureuse"],
            "human": ["Ténacité et sang-froid", "Sens aigu du contact et de la persuasion", "Réactivité sous pression", "Précision chirurgicale dans les chiffres"]
        },
        "studies": {
            "france": ["Licence Pro / Master Négociation & Achat Média (ESP, Sup de Pub, IAE, Écoles de commerce)"],
            "senegal": ["Licence / Master en Gestion Commerciale & Médias (Sup de Co Dakar, BEM Dakar, ESMT)"]
        },
        "career": "Directeur des Achats Médias, Responsable de Département Négociation ou Directeur Commercial en Régie.",
        "relatedJobSlugs": ["responsable-strategie-medias", "programmatic-manager", "vendeur-espaces-publicitaires"],
        "resources": [
            {"title": "Fiche Métier ESP — Media Buyer", "url": "https://espub.org/metiers/media-buyer/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "Lors d'événements planétaires comme la Coupe du Monde ou le Super Bowl, 30 secondes d'espace publicitaire peuvent se négocier à plusieurs millions de dollars.",
        "interests": ["J'aime négocier", "J'aime les données et les chiffres", "J'aime convaincre"],
        "connectedFamilies": ["droit-management"]
    },
    {
        "id": "programmatic-manager",
        "slug": "programmatic-manager",
        "title": "Programmatic Manager / Trader Média Programmatique",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "medias-publicite-contenu",
        "subdomain": "Media Planning, Achat d'espace & Régies",
        "sourceKey": "ESP",
        "description": "Le Programmatic Manager achète des espaces publicitaires numériques en temps réel (Real-Time Bidding - RTB) via des plateformes automatisées (DSP). Il optimise les algorithmes d'enchères pour délivrer la bonne impression publicitaire à la bonne personne au bon millième de seconde.",
        "shortDescription": "Pilote l'achat automatisé d'espaces publicitaires digitaux en temps réel sur les plateformes programmatiques.",
        "missions": [
            "Configurer et gérer les campagnes sur les plateformes de demande (Demand Side Platforms - DSP comme DV360, The Trade Desk).",
            "Paramétrer le ciblage d'audience à l'aide de données 1st, 2nd et 3rd party issues de plateformes de gestion de données (DMP/CDP).",
            "Ajuster en continu les stratégies d'enchères au coût par mille (CPM) en fonction de la visibilité et du taux d'engagement.",
            "Établir des listes d'inclusion et d'exclusion de sites web (Whitelists/Blacklists) pour garantir la Brand Safety.",
            "Optimiser les deals privés (Private Marketplaces - PMP) passés directement avec les grands éditeurs de presse et de vidéo.",
            "Analyser les déperditions d'impressions et maximiser le taux de complétion des vidéos et bannières programmatiques."
        ],
        "salaries": {
            "france": {
                "junior": "35 000 - 42 000 € brut/an",
                "senior": "50 000 - 75 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "550 000 - 950 000 FCFA net/mois",
                "senior": "1 200 000 - 2 100 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Trading desks d'agences médias, régies publicitaires numériques, pure-players technologiques adtech, annonceurs avec pôle digital interne.",
        "typicalDay": "Ajustement des algorithmes d'enchères sur DV360 suite à la hausse du coût par mille sur les sites d'actualité, résolution d'un bug de pixels de tracking et point avec un éditeur sur un accord direct en programmatique garanti.",
        "skills": {
            "technical": ["Maîtrise des DSP majeures (Display & Video 360, The Trade Desk, Xandr)", "Compréhension de l'écosystème AdTech (SSP, Ad Server, DMP, Identity Resolution)", "Gestion des formats IAB et créas dynamiques (DCO)", "Analyse statistique de performance publicitaire", "Veille sur la fin des cookies tiers et le Privacy Sandbox"],
            "human": ["Esprit logique et affinité technologique", "Résistance au stress des enchères temps réel", "Rigueur d'exécution absolue", "Capacité à vulgariser une matière technique"]
        },
        "studies": {
            "france": ["Master en Publicité Digitale & AdTech (ESP, Sup de Pub, Télécom Évolution, IAE)"],
            "senegal": ["Master en Ingénierie Média & Marketing Digital (ESMT Dakar, BEM, ISM)"]
        },
        "career": "Head of Programmatic, Directeur du Pôle AdTech ou Directeur des Médias Numériques.",
        "relatedJobSlugs": ["traffic-manager-publicitaire", "media-buyer", "traffic-manager-digital"],
        "resources": [
            {"title": "Fiche Métier ESP — Programmatic Manager", "url": "https://espub.org/metiers/programmatic-manager/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "En programmatique, une transaction publicitaire est négociée, arbitrée par algorithme et affichée sur l'écran de l'utilisateur en moins de 100 millisecondes, soit plus vite qu'un battement de paupière.",
        "interests": ["J'aime la technologie", "J'aime les données et les chiffres", "J'aime résoudre des énigmes"],
        "connectedFamilies": ["informatique-numerique"]
    },
    {
        "id": "traffic-manager-publicitaire",
        "slug": "traffic-manager-publicitaire",
        "title": "Traffic Manager Publicitaire AdOps / Régie & Agence",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "medias-publicite-contenu",
        "subdomain": "Media Planning, Achat d'espace & Régies",
        "sourceKey": "ESP",
        "description": "Le Traffic Manager Publicitaire (AdOps) est le garant technique de la diffusion des publicités. En régie ou en agence, il réceptionne les créations, les implémente dans les serveurs publicitaires (Ad Servers), teste leur affichage et assure le suivi rigoureux des volumes d'impressions contractuels.",
        "shortDescription": "Garant technique de l'intégration, du tracking et de la bonne diffusion des campagnes publicitaires sur les serveurs.",
        "missions": [
            "Réceptionner les bannières, vidéos et habillages publicitaires et vérifier leur stricte conformité aux spécifications techniques de diffusion.",
            "Créer les campagnes, les tags de redirection et les règles de ciblage dans l'Ad Server (Google Ad Manager, Smart/Equativ).",
            "Mettre en place les traceurs de tracking de clics, de visibilité et d'attribution post-clic et post-vue.",
            "Surveiller le rythme de diffusion (pacing) pour éviter toute sous-livraison ou sur-livraison d'impressions publicitaires.",
            "Résoudre en urgence les dysfonctionnements d'affichage, d'incompatibilité de code JavaScript ou de lenteur de chargement.",
            "Extraire et transmettre les bilans de diffusion certifiés aux clients et aux régies partenaires."
        ],
        "salaries": {
            "france": {
                "junior": "28 000 - 34 000 € brut/an",
                "senior": "40 000 - 52 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "350 000 - 650 000 FCFA net/mois",
                "senior": "850 000 - 1 400 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Régies publicitaires de grands médias (TF1 Pub, Le Monde, Canal+ Brand Solutions), agences médias, réseaux display.",
        "typicalDay": "Vérification des éléments techniques d'une vague de campagnes débutant le jour même, programmation d'une bannière interactive HTML5 sur Google Ad Manager et ajustement du débit de distribution d'une campagne vidéo.",
        "skills": {
            "technical": ["Ad Servers majeurs (Google Ad Manager, Equativ, Xandr)", "Connaissances techniques HTML5, CSS et JavaScript de base", "Outils de mesure de visibilité (IAS, Moat, DoubleVerify)", "Gestion des pixels de redirection et tracking d'URLs", "Résolution rapide d'incidents techniques"],
            "human": ["Rigueur méthodique exemplaire", "Calme et sang-froid face aux urgences de direct", "Sens du service client", "Organisation méthodique"]
        },
        "studies": {
            "france": ["Bac+2 / Bac+3 en Métiers du Web, Communication Digitale ou Informatique (ESP, IUT MMI, BTS SN)"],
            "senegal": ["Licence Pro en Réseaux, Multimédia & Gestion de Contenu Numérique (ESMT, UCAD, ISM)"]
        },
        "career": "Responsable du Pôle AdOps, Chef de Projet AdTech ou Responsable de Régie Numérique.",
        "relatedJobSlugs": ["programmatic-manager", "traffic-manager-digital", "media-buyer"],
        "resources": [
            {"title": "Fiche Métier ESP — Traffic Manager en régie", "url": "https://espub.org/metiers/traffic-manager/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "Sans le Traffic Manager Publicitaire, aucun média en ligne gratuit ne pourrait monétiser son audience : c'est la cheville ouvrière invisible de toute la publicité numérique.",
        "interests": ["J'aime la technologie", "J'aime résoudre des énigmes", "J'aime les données et les chiffres"],
        "connectedFamilies": ["informatique-numerique"]
    },
    {
        "id": "vendeur-espaces-publicitaires",
        "slug": "vendeur-espaces-publicitaires",
        "title": "Vendeur / Régisseur d'Espaces Publicitaires",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "medias-publicite-contenu",
        "subdomain": "Media Planning, Achat d'espace & Régies",
        "sourceKey": "STUDYRAMA",
        "description": "Le Vendeur d'Espaces Publicitaires commercialise les espaces d'un support média (presse écrite, radio, chaîne de télévision, panneau d'affichage, site internet) auprès des agences médias et des annonceurs directs afin de maximiser les revenus publicitaires du média.",
        "shortDescription": "Commercialise les encarts et espaces publicitaires d'un média auprès des marques et agences.",
        "missions": [
            "Prospecter activement un portefeuille d'entreprises et d'agences médias pour leur présenter l'attractivité du support média.",
            "Argumenter sur les chiffres d'audience, le profil des auditeurs/lecteurs/internautes et l'affinité avec leur cible.",
            "Concevoir des offres publicitaires sur-mesure combinant formats classiques, opérations spéciales et parrainages.",
            "Négocier les tarifs d'insertion et les volumes d'achat tout en défendant la rentabilité de la régie.",
            "Veiller au respect du planning de publication et coordonner la bonne réception des maquettes publicitaires.",
            "Fidéliser la clientèle d'annonceurs par un suivi personnalisé et la présentation régulière des nouvelles offres."
        ],
        "salaries": {
            "france": {
                "junior": "28 000 - 35 000 € brut/an (+ commissions)",
                "senior": "45 000 - 70 000 € brut/an (+ commissions)",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "350 000 - 650 000 FCFA net/mois (+ commissions)",
                "senior": "900 000 - 1 600 000 FCFA net/mois (+ commissions)",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Régies publicitaires de journaux, radios, chaînes de télévision, régies d'affichage urbain, portails d'actualité en ligne.",
        "typicalDay": "Appels de prospection le matin, rendez-vous de négociation l'après-midi avec un directeur marketing local pour boucler l'encart publicitaire d'un numéro spécial et envoi des devis.",
        "skills": {
            "technical": ["Techniques de prospection commerciale et de closing", "Connaissance approfondie des chiffres d'audience de son média", "Maîtrise du tarif de base et des règles de remises dégressives", "Construction de propositions commerciales percutantes", "Outils de CRM commercial (Salesforce, HubSpot)"],
            "human": ["Persuasion et force de conviction", "Excellent relationnel et convivialité", "Persévérance et pugnacité", "Écoute active des besoins des annonceurs"]
        },
        "studies": {
            "france": ["BTS Négociation et Digitalisation de la Relation Client (NDRC) / Bachelor Commerce & Médias (ESP, IAE, Écoles de commerce)"],
            "senegal": ["BTS / Licence en Action Commerciale & Marketing (Sup de Co, ISM, ESP Dakar)"]
        },
        "career": "Directeur de Publicité en Régie, Directeur Commercial de Support Média ou Responsable Partenariats.",
        "relatedJobSlugs": ["media-buyer", "chef-de-publicite", "responsable-strategie-medias"],
        "resources": [
            {"title": "Studyrama — Fiche métier Vendeur d'espaces publicitaires", "url": "https://www.studyrama.com/formations/fiches-metiers/communication/vendeur-d-espaces-publicitaires"}
        ],
        "sources": ["Studyrama"],
        "saviezVous": "La rémunération d'un vendeur d'espaces publicitaires comprend souvent une part variable très attractive indexée directement sur son chiffre d'affaires généré.",
        "interests": ["J'aime convaincre", "J'aime négocier", "J'aime communiquer avec les gens"],
        "connectedFamilies": ["droit-management"]
    },
    {
        "id": "concepteur-redacteur",
        "slug": "concepteur-redacteur",
        "title": "Concepteur-Rédacteur / Copywriter Publicitaire",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "medias-publicite-contenu",
        "subdomain": "Brand Content, Rédaction & Copywriting",
        "sourceKey": "ESP_STUDYRAMA",
        "description": "Le Concepteur-Rédacteur forme avec le Directeur Artistique le mythique « team créatif » d'agence de publicité. Maître des mots et des idées, il invente les slogans inoubliables, les scénarios de spots vidéo, les manifestes de marque et les accroches qui frappent l'imaginaire collectif.",
        "shortDescription": "Magicien des mots et des concepts publicitaires : invente slogans, scénarios et manifestes de marques.",
        "missions": [
            "Imaginer des concepts publicitaires originaux et disruptifs en réponse aux briefs de l'agence.",
            "Travailler en symbiose permanente avec le Directeur Artistique pour allier force du mot et puissance du visuel.",
            "Rédiger des slogans marquants (punchlines, baselines), des manifestes de marque et des scénarios de films publicitaires.",
            "Adapter le ton de voix éditorial aux différentes marques : sérieux, humoristique, provocateur, poétique.",
            "Écrire les scripts de messages radio, podcasts sponsorisés et concepts d'activations sur les réseaux sociaux.",
            "Défendre avec ferveur les concepts créatifs lors des présentations devant les clients annonceurs."
        ],
        "salaries": {
            "france": {
                "junior": "32 000 - 38 000 € brut/an",
                "senior": "50 000 - 80 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "450 000 - 800 000 FCFA net/mois",
                "senior": "1 100 000 - 2 000 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Agences de publicité de création, agences de brand content, studios créatifs, ou statut de concepteur-rédacteur indépendant (freelance).",
        "typicalDay": "Brainstorming matinal intense avec le Directeur Artistique autour de 50 pistes de slogans jetées sur paperboard, écriture du script d'un film de 30 secondes pour la télévision et enregistrement d'une voix-off.",
        "skills": {
            "technical": ["Maîtrise virtuose de la langue et des figures de style", "Techniques d'écriture de scénarios publicitaires et storyboards", "Capacité à formuler des formules synthétiques inoubliables", "Sensibilité aiguë à la pop-culture et aux mèmes", "Connaissance des contraintes de formats audiovisuels"],
            "human": ["Créativité foisonnante et sens de l'humour", "Capacité à accepter la critique et à jeter 90% de ses idées", "Intuition psychologique sur ce qui émeut", "Curiosité permanente"]
        },
        "studies": {
            "france": ["Master en Conception-Rédaction / Création Publicitaire (ESP, Sup de Pub, CELSA, Écoles de Lettres/Sciences Po)"],
            "senegal": ["Licence / Master en Création Publicitaire & Lettres Modernes (CESTI UCAD, Sup de Co Dakar, ISM)"]
        },
        "career": "Directeur de Création, Associé Fondateur d'Agence Créative ou Auteur / Scénariste.",
        "relatedJobSlugs": ["directeur-artistique", "brand-content-manager", "ux-writer-copywriter-digital"],
        "resources": [
            {"title": "Fiche Métier ESP — Concepteur-rédacteur", "url": "https://espub.org/metiers/concepteur-redacteur/"},
            {"title": "Studyrama — Fiche Concepteur-rédacteur", "url": "https://www.studyrama.com/formations/fiches-metiers/communication/concepteur-redacteur"}
        ],
        "sources": ["ESP", "Studyrama"],
        "saviezVous": "Un slogan réussi de 4 mots peut faire basculer le destin d'une entreprise mondiale : penser à « Venez comme vous êtes » (McDonald's) ou « C'est fort en chocolat » (Lion).",
        "interests": ["J'aime écrire des textes", "J'aime créer des visuels", "J'aime convaincre"],
        "connectedFamilies": ["lettres-philosophie", "arts-spectacle-audiovisuel"]
    },
    {
        "id": "brand-content-manager",
        "slug": "brand-content-manager",
        "title": "Brand Content Manager / Responsable Contenu de Marque",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "medias-publicite-contenu",
        "subdomain": "Brand Content, Rédaction & Copywriting",
        "sourceKey": "ESP",
        "description": "Le Brand Content Manager conçoit et produit des contenus éditoriaux, audiovisuels et expérientiels non directement publicitaires (documentaires, podcasts, webséries, magazines, livres blancs) qui apportent une réelle valeur culturelle ou pratique tout en renforçant l'attachement à la marque.",
        "shortDescription": "Pilote la production de contenus riches et narratifs (podcasts, vidéos, documentaires) qui incarnent l'univers de la marque.",
        "missions": [
            "Définir la ligne éditoriale et la stratégie de contenu de marque (Content Strategy) à moyen et long terme.",
            "Produire ou superviser la production de formats premium : mini-séries documentaires, podcasts audio, articles de fond, guides experts.",
            "Piloter des collaborations avec des réalisateurs, journalistes, photographes et créateurs de contenu indépendants.",
            "Assurer la diffusion et l'amplification des contenus sur les plateformes adaptées (YouTube, Spotify, plateformes VOD).",
            "Mesurer l'impact des contenus sur la notoriété, l'image de marque et l'engagement qualitatif de l'audience.",
            "Garantir la cohérence narrative et esthétique de l'univers de la marque à travers tous les points de contact."
        ],
        "salaries": {
            "france": {
                "junior": "34 000 - 40 000 € brut/an",
                "senior": "48 000 - 68 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "450 000 - 850 000 FCFA net/mois",
                "senior": "1 150 000 - 1 950 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Marques disposant de médias propriétaires (Red Bull, Décathlon, Michelin, Sephora), agences éditoriales et de brand content, studios médias.",
        "typicalDay": "Validation du montage final d'un épisode de podcast de marque avec l'ingénieur du son, comité éditorial de planification des formats vidéo du trimestre et analyse du temps de visionnage moyen sur YouTube.",
        "skills": {
            "technical": ["Techniques de Storytelling et de journalisme de marque", "Gestion de production audiovisuelle et audio (podcasts)", "Maîtrise des stratégies éditoriales et calendriers de publication", "Connaissance des codes des plateformes de streaming et réseaux", "Pilotage d'équipes créatives pluridisciplinaires"],
            "human": ["Excellente culture générale et curiosité", "Sens aigu du récit et de l'émotion", "Qualités rédactionnelles hors pair", "Capacité à fédérer des talents créatifs"]
        },
        "studies": {
            "france": ["Master en Brand Content / Médias / Journalisme (ESP, CELSA, Sup de Pub, Sciences Po)"],
            "senegal": ["Master en Production de Contenus & Communication Digitale (CESTI UCAD, BEM Dakar, ISM)"]
        },
        "career": "Directeur Éditorial de Marque, Head of Content & Social Media ou Directeur de la Communication Globale.",
        "relatedJobSlugs": ["concepteur-redacteur", "directeur-artistique", "responsable-communication"],
        "resources": [
            {"title": "Fiche Métier ESP — Brand Content Manager", "url": "https://espub.org/metiers/brand-content-manager/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "Le cas Red Bull est la référence mondiale du brand content : l'entreprise se considère aujourd'hui autant comme une société de médias et de production de sports extrêmes que comme un vendeur de boissons.",
        "interests": ["J'aime écrire des textes", "J'aime créer des visuels", "J'aime les marques"],
        "connectedFamilies": ["arts-spectacle-audiovisuel", "lettres-philosophie"]
    },
    {
        "id": "ux-writer-copywriter-digital",
        "slug": "ux-writer-copywriter-digital",
        "title": "UX Writer / Copywriter Digital & Micro-copy",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "medias-publicite-contenu",
        "subdomain": "Brand Content, Rédaction & Copywriting",
        "sourceKey": "ESP",
        "description": "L'UX Writer est l'architecte des mots au sein des interfaces logicielles et applications mobiles. Il conçoit chaque mot d'un bouton, d'un message d'erreur, d'une infobulle ou d'un écran de paiement pour rendre l'expérience utilisateur intuitive, rassurante et fluide.",
        "shortDescription": "Rédige les textes et micro-copies au cœur des applications et interfaces pour guider et rassurer les utilisateurs.",
        "missions": [
            "Rédiger l'ensemble des textes d'interfaces : boutons d'action (CTA), messages d'erreur, modales de confirmation, menus de navigation.",
            "Créer et documenter la charte éditoriale produit (Content Design System) avec les tons de voix appropriés selon le contexte d'usage.",
            "Collaborer étroitement avec les Product Designers et UI Designers lors de la conception des maquettes (Figma).",
            "Mener des tests de compréhension et d'utilisabilité des textes auprès d'utilisateurs finaux.",
            "Optimiser les flux de conversion et de paiement en éliminant les incompréhensions textuelles génératrices d'abandon.",
            "Gérer l'internationalisation et l'adaptation culturelle des textes dans les différentes langues."
        ],
        "salaries": {
            "france": {
                "junior": "34 000 - 42 000 € brut/an",
                "senior": "50 000 - 72 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "500 000 - 850 000 FCFA net/mois",
                "senior": "1 200 000 - 2 000 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Équipes produit de startups tech, licornes du numérique, banques en ligne, géants du logiciel SaaS, agences de design d'interaction.",
        "typicalDay": "Atelier de co-conception sur Figma avec un UI designer pour réécrire un parcours d'inscription, test A/B de 3 formulations d'un message d'erreur de carte bancaire pour rassurer l'utilisateur.",
        "skills": {
            "technical": ["Pratique de Figma et des outils de maquettage produit", "Principes de Design d'Interaction et d'Ergonomie cognitive", "Méthodologie de Content Design & Design Systems", "Techniques de tests utilisateurs qualitatifs", "Capacité à synthétiser des idées complexes en 2 mots"],
            "human": ["Empathie exceptionnelle pour l'utilisateur lambda", "Sens de la clarté et concision extrême", "Écoute et travail collaboratif en équipe agile", "Précision quasi chirurgicale des nuances lexicales"]
        },
        "studies": {
            "france": ["Master en Design Numérique / Sciences du Langage / Ergonomie (ESP, Gobelins, Strate, CELSA)"],
            "senegal": ["Master en Informatique & Design d'Interaction / Communication Digitale (BEM Dakar, ISM, ESP Dakar)"]
        },
        "career": "Lead UX Writer, Content Design Manager ou Head of Product Design.",
        "relatedJobSlugs": ["concepteur-redacteur", "webmarketer", "brand-content-manager"],
        "resources": [
            {"title": "Fiche Métier ESP — UX Writer", "url": "https://espub.org/metiers/ux-writer/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "Google a augmenté de 17 % le taux d'engagement sur la réservation d'hôtels simplement en remplaçant le texte d'un bouton « Réserver une chambre » par « Vérifier la disponibilité ».",
        "interests": ["J'aime écrire des textes", "J'aime la technologie", "J'aime résoudre des énigmes"],
        "connectedFamilies": ["informatique-numerique", "lettres-philosophie"]
    },
    {
        "id": "acheteur-art-tv-producer",
        "slug": "acheteur-art-tv-producer",
        "title": "Acheteur d'Art / TV Producer Publicitaire",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "medias-publicite-contenu",
        "subdomain": "Publicité, Agences & Conseil",
        "sourceKey": "ESP",
        "description": "L'Acheteur d'Art et le TV Producer en agence de publicité concrétisent les idées créatives. Ils sélectionnent et engagent les meilleurs réalisateurs, photographes, illustrateurs, acteurs et musiciens, négocient les droits d'auteur et supervisent la fabrication matérielle des campagnes.",
        "shortDescription": "Supervise la production audiovisuelle et artistique des campagnes publicitaires (spots TV, photos, tournages).",
        "missions": [
            "Analyser les maquettes et scripts créatifs pour évaluer la faisabilité technique, artistique et budgétaire de la production.",
            "Rechercher, caster et sélectionner les réalisateurs, photographes, stylistes et studios de post-production les plus adaptés.",
            "Lancer les appels d'offres auprès des maisons de production audiovisuelle et négocier âprement les devis de tournage.",
            "Négocier l'acquisition des droits d'auteur, droits à l'image des mannequins/comédiens et droits musicaux.",
            "Superviser les tournages sur le plateau (shootings photos, films publicitaires) et le calendrier de post-production (montage, étalonnage, effets spéciaux).",
            "Garantir la livraison technique des masters conformes aux normes de diffusion télévisuelle et cinéma (ARPP, CST)."
        ],
        "salaries": {
            "france": {
                "junior": "32 000 - 38 000 € brut/an",
                "senior": "48 000 - 75 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "450 000 - 800 000 FCFA net/mois",
                "senior": "1 100 000 - 1 900 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Départements de production d'agences de publicité, maisons de production de films publicitaires, studios photo, marques de luxe.",
        "typicalDay": "Participation à un pré-lighting sur un plateau de tournage de publicité parfum, négociation des droits d'une musique internationale culte pour le film et vérification de l'étalonnage couleur chez le monteur.",
        "skills": {
            "technical": ["Connaissance approfondie de la chaîne de production cinématographique et photographique", "Droit de la propriété intellectuelle et droits d'auteur", "Négociation budgétaire avec les maisons de production", "Réseau étendu de talents artistiques internationaux", "Maîtrise des plannings de post-production"],
            "human": ["Œil artistique très exercé", "Sens du relationnel avec les artistes et réalisateurs", "Fermeté commerciale et rigueur contractuelle", "Calme et résolution rapide des imprévus de plateau"]
        },
        "studies": {
            "france": ["Master en Production Audiovisuelle / Communication (ESP, Fémis, Sup de Pub, Gobelins, CELSA)"],
            "senegal": ["Master en Réalisation & Production Audiovisuelle (CESTI, Cinékap, BEM Dakar)"]
        },
        "career": "Directeur de la Production d'Agence (Head of TV / Head of Production) ou Producteur Exécutif Indépendant.",
        "relatedJobSlugs": ["directeur-artistique", "chef-de-publicite", "concepteur-redacteur"],
        "resources": [
            {"title": "Fiche Métier ESP — Acheteur d'art / TV Producer", "url": "https://espub.org/metiers/acheteur-dart/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "La musique d'une publicité représente parfois plus de 30 % du budget total de production en raison des droits de synchronisation mondiaux d'un titre célèbre.",
        "interests": ["J'aime créer des visuels", "J'aime négocier", "J'aime les marques"],
        "connectedFamilies": ["arts-spectacle-audiovisuel", "droit-management"]
    }
]

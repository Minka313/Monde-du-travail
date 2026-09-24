# -*- coding: utf-8 -*-
"""
Part 1 of Communication, Marketing, Médias & Création Data Module
Contains:
- 6 Consolidated Domains (Domain 7 merged into Domain 1 for compact architecture)
- 23 High-depth Job Cards:
  Domaine 1 : Communication & Relations publiques (11 métiers)
  Domaine 2 : Marketing & Stratégie de marque (12 métiers)
Sources : École Supérieure de Publicité (ESP Métiers) & Studyrama Communication
"""

DOMAINS = [
    {
        "id": "communication-relations-publiques",
        "name": "Communication & Relations publiques",
        "icon": "📣",
        "order": 1,
        "chainStage": "Stratégie de Communication, Relations Médias, Affaires Publiques & Image Institutionnelle",
        "description": "Bâtir et préserver la réputation des entreprises, marques et institutions à travers les relations presse, la communication interne et externe, les affaires publiques, la gestion de crise et la RSE.",
        "subdomains": [
            "Communication corporate & institutionnelle",
            "Communication interne",
            "Relations médias & presse",
            "Relations publiques & influence",
            "Affaires publiques & lobbying",
            "Communication de crise & réputation",
            "Communication RSE & responsable"
        ]
    },
    {
        "id": "marketing-strategie-marque",
        "name": "Marketing & Stratégie de marque",
        "icon": "📊",
        "order": 2,
        "chainStage": "Analyse de Marché, Positionnement de Marque, Lancement Produit & Merchandising",
        "description": "Analyser les attentes des consommateurs, définir le positionnement de marque (branding), piloter le cycle de vie des produits, animer les réseaux de distribution (trade marketing) et valoriser les territoires.",
        "subdomains": [
            "Marketing stratégique & de marque",
            "Brand Management & Branding",
            "Marketing produit & Category management",
            "Marketing opérationnel",
            "Trade Marketing",
            "Merchandising",
            "Marketing territorial & international"
        ]
    },
    {
        "id": "marketing-digital-acquisition",
        "name": "Marketing Digital & Acquisition",
        "icon": "💻",
        "order": 3,
        "chainStage": "Génération de Trafic, Conversion Digitale, Automatisation CRM & Vente en Ligne",
        "description": "Capter et convertir l'audience sur les canaux digitaux via le référencement naturel (SEO), payant (SEA/Social Ads), le marketing automation CRM, l'e-commerce et l'analyse data de performance.",
        "subdomains": [
            "Acquisition digitale & Growth",
            "SEO (Référencement naturel)",
            "SEA & Publicité payante (Google/Social Ads)",
            "CRM & Marketing Automation",
            "E-commerce & Vente en ligne",
            "Data Marketing & Web Analytics"
        ]
    },
    {
        "id": "medias-publicite-contenu",
        "name": "Médias, Publicité & Contenu",
        "icon": "📺",
        "order": 4,
        "chainStage": "Idéation Publicitaire, Stratégie Média, Création de Contenu de Marque & Diffusion",
        "description": "Imaginer les campagnes publicitaires percutantes, élaborer les plans médias, négocier les espaces en régie ou programmatique, concevoir des récits de marque engageants (brand content) et rédiger avec impact.",
        "subdomains": [
            "Publicité & Gestion de clientèle en agence",
            "Planning stratégique & Insight consommateur",
            "Stratégie médias & Media Planning",
            "Media Buying & Programmatique",
            "Brand Content & Contenu de marque",
            "Rédaction & Copywriting / UX Writing",
            "Régie publicitaire & Achat d'art"
        ]
    },
    {
        "id": "creation-design",
        "name": "Création & Design",
        "icon": "🎨",
        "order": 5,
        "chainStage": "Direction Artistique, Conception Visuelle, Typographie, Motion Design & UI",
        "description": "Donner une forme visuelle, esthétique et mémorable aux idées par la direction artistique, le design graphique, le motion design, l'illustration, les interfaces utilisateur (UI) et la photographie.",
        "subdomains": [
            "Direction artistique & Création visuelle",
            "Design graphique & Identité visuelle",
            "Motion Design & Animation vidéo",
            "Illustration & Storyboarding",
            "UI Design & Interfaces graphiques",
            "PAO & Édition imprimée",
            "Photographie & Production visuelle"
        ]
    },
    {
        "id": "evenementiel-experience",
        "name": "Événementiel & Expérience",
        "icon": "🎪",
        "order": 6,
        "chainStage": "Conception d'Expériences Immersives, Logistique, Régie & Célébration de Marque",
        "description": "Faire vivre des émotions partagées à travers la production d'événements corporate, de congrès, de salons professionnels, de festivals, d'hospitality haut de gamme et d'expériences clients marquantes.",
        "subdomains": [
            "Gestion de projet & Coordination événementielle",
            "Production & Régie technique",
            "Événements corporate & Institutionnels",
            "Congrès, Salons & Expositions",
            "Hospitality & Accueil VIP",
            "Expérience client & Publics",
            "Wedding planning & Événements privés"
        ]
    }
]

JOBS_PART1 = [
    # =========================================================================
    # DOMAINE 1 : COMMUNICATION & RELATIONS PUBLIQUES
    # =========================================================================
    {
        "id": "charge-de-communication",
        "slug": "charge-de-communication",
        "title": "Chargé de Communication",
        "icon": "📢",
        "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=80",
        "familyId": "communication-marketing-medias-creation",
        "familyName": "Communication, Marketing, Médias & Création",
        "domainId": "communication-relations-publiques",
        "domain": "Communication & Relations publiques",
        "subdomain": "Communication corporate & institutionnelle",
        "shortDescription": "Élabore et diffuse les messages de l'entreprise vers ses publics cibles à travers tous les supports prints et digitaux.",
        "longDescription": "Le Chargé de Communication est la voix opérationnelle d'une entreprise, d'une collectivité ou d'une association. Polyvalent, il décline la stratégie globale de communication sur le terrain : rédaction d'articles, création de newsletters, animation des réseaux sociaux, relations presse locales et organisation de rendez-vous d'information. Il veille à la cohérence de l'image de marque et mesure l'impact des actions menées.",
        "level": "Bac+3 à Bac+5 (Licence Pro, Master Info-Com, École de communication)",
        "salary": {
            "france": {
                "junior": "2 300 € - 2 800 € brut/mois",
                "confirmed": "2 900 € - 3 600 € brut/mois",
                "senior": "3 800 € - 4 800 € brut/mois",
                "currency": "EUR",
                "period": "mois"
            },
            "senegal": {
                "junior": "350 000 - 550 000 FCFA net/mois",
                "confirmed": "600 000 - 950 000 FCFA net/mois",
                "senior": "1 100 000 - 1 700 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Entreprises privées, agences de communication, ministères et institutions publiques, ONG.",
        "typicalDay": "Revue de presse matinale, rédaction d'un communiqué et d'une newsletter interne, briefing d'un graphiste pour une affiche, mise à jour du site web et suivi des retombées média.",
        "skills": {
            "technical": ["Rédaction persuasive & storytelling", "Maîtrise des outils PAO (Canva, InDesign)", "Gestion de CMS (WordPress)", "Gestion des réseaux sociaux", "Relations presse de base"],
            "human": ["Excellente aisance relationnelle", "Créativité & curiosité", "Sens de l'écoute", "Rigueur et respect des délais", "Esprit d'équipe"]
        },
        "studies": {
            "france": ["BTS Communication", "BUT Information-Communication", "Licence Information-Communication", "Master Communication d'Entreprise (CELSA, ISCOM, ESP, Sup de Pub)"],
            "senegal": ["Licence en Communication d'Entreprise (CESTI Dakar, ISM, Sup de Co)", "Master en Stratégie de Communication (BEM Dakar, UGB Saint-Louis, UCAO)"]
        },
        "career": "Évolution vers des postes de Responsable de la communication, Responsable communication digitale ou Consultant en agence.",
        "relatedJobSlugs": ["responsable-communication", "attache-de-presse", "content-manager", "community-manager"],
        "resources": [
            {"title": "Fiche Métier ESP — Chargé de communication", "url": "https://espub.org/metiers/charge-de-communication/"},
            {"title": "Studyrama — Métiers de la communication", "url": "https://www.studyrama.com/formations/fiches-metiers/communication"}
        ],
        "sources": ["ESP École Supérieure de Publicité", "Studyrama", "AACC"],
        "saviezVous": "Plus de 65% des chargés de communication jonglent aujourd'hui entre création de contenu visuel, pilotage digital et relations médias traditionnelles.",
        "interests": ["J'aime communiquer avec les gens", "J'aime écrire", "J'aime les marques"],
        "connectedFamilies": ["lettres-langues-sciences-humaines", "commerce-marketing"]
    },
    {
        "id": "responsable-communication",
        "slug": "responsable-communication",
        "title": "Responsable de la Communication",
        "icon": "🗣️",
        "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80",
        "familyId": "communication-marketing-medias-creation",
        "familyName": "Communication, Marketing, Médias & Création",
        "domainId": "communication-relations-publiques",
        "domain": "Communication & Relations publiques",
        "subdomain": "Communication corporate & institutionnelle",
        "shortDescription": "Pilote la stratégie de communication globale, anime l'équipe et gère le budget annuel des campagnes.",
        "longDescription": "Le Responsable de la Communication définit et met en œuvre le plan de communication global de la structure. Bras droit de la direction générale, il veille à la notoriété, à l'attractivité et à la cohérence des prises de parole. Il manage l'équipe interne (graphistes, rédacteurs, chargés de projet), pilote les agences prestataires et arbitre les budgets entre actions digitales, événementielles et médias.",
        "level": "Bac+5 (Master Communication, École de commerce, IEP)",
        "salary": {
            "france": {
                "junior": "3 200 € - 3 800 € brut/mois",
                "confirmed": "4 000 € - 5 200 € brut/mois",
                "senior": "5 500 € - 7 000 € brut/mois",
                "currency": "EUR",
                "period": "mois"
            },
            "senegal": {
                "junior": "600 000 - 900 000 FCFA net/mois",
                "confirmed": "1 000 000 - 1 600 000 FCFA net/mois",
                "senior": "1 800 000 - 2 800 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Directions générales d'entreprises, filiales de groupes internationaux, grands établissements publics, fédérations.",
        "typicalDay": "Comité de direction hebdomadaire, validation des maquettes d'un rapport annuel, arbitrage budgétaire d'une campagne publicitaire et coordination d'une interview du Directeur Général.",
        "skills": {
            "technical": ["Planification stratégique de communication", "Management d'équipe pluridisciplinaire", "Gestion budgétaire & ROI", "Communication de crise", "Supervision des prestataires et agences"],
            "human": ["Leadership & diplomatie", "Excellente communication orale", "Prise de recul stratégique", "Résistance au stress"],
        },
        "studies": {
            "france": ["Master en Communication (CELSA, Sciences Po, ISCOM, ESP)", "Diplôme Grande École de Commerce (spécialisation marketing/com)"],
            "senegal": ["Master professionnel Communication (CESTI, BEM Dakar, ISM, Sup de Co)", "Master en Management Stratégique (UCAD / CESAG)"]
        },
        "career": "Évolution naturelle vers Directeur de la Communication (DirCom), Directeur des Affaires Publiques ou Directeur Général Adjoint.",
        "relatedJobSlugs": ["directeur-de-la-communication", "charge-de-communication", "responsable-communication-interne"],
        "resources": [
            {"title": "Fiche Métier ESP — Responsable communication", "url": "https://espub.org/metiers/responsable-communication/"}
        ],
        "sources": ["ESP", "Studyrama", "AACC"],
        "saviezVous": "Dans les grandes organisations, le responsable de communication est souvent le garant de la cohérence entre la marque employeur et la communication commerciale.",
        "interests": ["J'aime communiquer avec les gens", "J'aime convaincre", "J'aime les marques"],
        "connectedFamilies": ["droit-management", "commerce-marketing"]
    },
    {
        "id": "directeur-de-la-communication",
        "slug": "directeur-de-la-communication",
        "title": "Directeur de la Communication (DirCom / CCO)",
        "icon": "🏛️",
        "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80",
        "familyId": "communication-marketing-medias-creation",
        "familyName": "Communication, Marketing, Médias & Création",
        "domainId": "communication-relations-publiques",
        "domain": "Communication & Relations publiques",
        "subdomain": "Communication corporate & institutionnelle",
        "shortDescription": "Membre du comité exécutif, il orchestre la politique d'image, l'influence institutionnelle et la réputation de l'organisation.",
        "longDescription": "Le Directeur de la Communication (Chief Communication Officer - CCO) siège au plus haut niveau de gouvernance. Il conçoit la doctrine de communication de l'organisation à l'échelle nationale et internationale. Il protège la réputation face aux crises, orchestre la diplomatie d'entreprise, porte les engagements RSE et insuffle la vision stratégique auprès des investisseurs, collaborateurs et citoyens.",
        "level": "Bac+5 et plus de 10 ans d'expérience managériale",
        "salary": {
            "france": {
                "junior": "5 000 € - 6 500 € brut/mois",
                "confirmed": "7 000 € - 10 000 € brut/mois",
                "senior": "11 000 € - 16 000 €+ brut/mois",
                "currency": "EUR",
                "period": "mois"
            },
            "senegal": {
                "junior": "1 500 000 - 2 500 000 FCFA net/mois",
                "confirmed": "2 800 000 - 4 000 000 FCFA net/mois",
                "senior": "4 500 000 - 7 000 000 FCFA+ net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Comités de direction de grands groupes, ministères, institutions panafricaines, grands cabinets de conseil en réputation.",
        "typicalDay": "Point avec le CEO sur la stratégie de positionnement, validation d'un plan d'affaires publiques, intervention en cellule de gestion des risques et interview médiatique de haut rang.",
        "skills": {
            "technical": ["Stratégie d'influence & affaires publiques", "Gouvernance de marque internationale", "Cellule de gestion de crise médiatique", "Communication financière & actionnariale", "Pilotage budgétaire de haut niveau"],
            "human": ["Vision prospective", "Aisance oratoire et charisme", "Sang-froid exceptionnel", "Haute diplomatie"]
        },
        "studies": {
            "france": ["CELSA Paris", "Sciences Po Paris", "Grandes Écoles de Commerce (HEC, ESSEC, ESCP)", "Universités de renom en Sciences de l'Information"],
            "senegal": ["CESTI Dakar (Cycle supérieur)", "BEM Management School Dakar", "CESAG Dakar", "Sciences Po / Grandes écoles internationales"]
        },
        "career": "Directeur Général d'agence, Conseiller ministériel, Membre du Conseil d'Administration ou Consultant senior en stratégie d'influence.",
        "relatedJobSlugs": ["responsable-communication", "consultant-en-communication-de-crise", "lobbyiste-consultant-en-affaires-publiques"],
        "resources": [
            {"title": "Fiche Métier ESP — Directeur de la communication", "url": "https://espub.org/metiers/directeur-de-la-communication/"}
        ],
        "sources": ["ESP", "Sciences Po", "DirCom Réseau"],
        "saviezVous": "Le Directeur de la Communication est souvent le premier porte-parole officiel sollicité par les journalistes lors d'événements majeurs touchant l'entreprise.",
        "interests": ["J'aime convaincre", "J'aime communiquer avec les gens", "J'aime les marques"],
        "connectedFamilies": ["droit-management", "lettres-langues-sciences-humaines"]
    },
    {
        "id": "responsable-communication-interne",
        "slug": "responsable-communication-interne",
        "title": "Responsable de la Communication Interne",
        "icon": "👥",
        "image": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
        "familyId": "communication-marketing-medias-creation",
        "familyName": "Communication, Marketing, Médias & Création",
        "domainId": "communication-relations-publiques",
        "domain": "Communication & Relations publiques",
        "subdomain": "Communication interne",
        "shortDescription": "Fédère les collaborateurs, diffuse la culture d'entreprise et anime les canaux d'échange internes.",
        "longDescription": "Le Responsable de la Communication Interne est le garant du sentiment d'appartenance et de l'alignement des équipes avec la vision de l'entreprise. Il conçoit les supports collaboratifs (intranet, journal interne, podcasts d'équipe), organise les conventions du personnel, les séminaires et accompagne les transformations managériales en étroite coopération avec les Ressources Humaines.",
        "level": "Bac+5 (Master Communication interne, RH ou Sciences Sociales)",
        "salary": {
            "france": {
                "junior": "2 800 € - 3 400 € brut/mois",
                "confirmed": "3 600 € - 4 600 € brut/mois",
                "senior": "4 800 € - 6 200 € brut/mois",
                "currency": "EUR",
                "period": "mois"
            },
            "senegal": {
                "junior": "450 000 - 700 000 FCFA net/mois",
                "confirmed": "800 000 - 1 300 000 FCFA net/mois",
                "senior": "1 500 000 - 2 300 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Moyennes et grandes entreprises, banques, sociétés industrielles, organisations multisites.",
        "typicalDay": "Animation de l'intranet collaboratif, préparation d'une web-conférence pour l'ensemble des salariés, conception d'un baromètre de satisfaction interne et briefing des managers.",
        "skills": {
            "technical": ["Animation d'intranet et réseaux sociaux d'entreprise", "Organisation de conventions et séminaires", "Conduite du changement", "Rédaction institutionnelle bienveillante", "Enquêtes de climat social"],
            "human": ["Empathie et écoute active", "Sens pédagogique prononcé", "Facilité d'intégration", "Confidentialité absolue"]
        },
        "studies": {
            "france": ["Master Communication des Organisations (CELSA, Université Paris-Dauphine, ESP, ISCOM)", "IAE en Management des RH & Communication"],
            "senegal": ["Master Communication & RH (CESTI, ISM Dakar, BEM Dakar, Sup de Co Dakar)"]
        },
        "career": "Directeur de la Communication, Directeur de l'Engagement et de la Culture, ou Consultant en conduite du changement.",
        "relatedJobSlugs": ["responsable-communication", "charge-de-communication", "consultant-rse"],
        "resources": [
            {"title": "Fiche Métier ESP — Responsable communication interne", "url": "https://espub.org/metiers/responsable-communication-interne/"}
        ],
        "sources": ["ESP", "AFCI - Association Française de Communication Interne"],
        "saviezVous": "La communication interne est aujourd'hui reconnue comme un levier direct de réduction du turnover et d'attractivité de la marque employeur.",
        "interests": ["J'aime communiquer avec les gens", "J'aime écrire"],
        "connectedFamilies": ["droit-management"]
    },
    {
        "id": "attache-de-presse",
        "slug": "attache-de-presse",
        "title": "Attaché de Presse / PR Manager",
        "icon": "📰",
        "image": "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&auto=format&fit=crop&q=80",
        "familyId": "communication-marketing-medias-creation",
        "familyName": "Communication, Marketing, Médias & Création",
        "domainId": "communication-relations-publiques",
        "domain": "Communication & Relations publiques",
        "subdomain": "Relations médias & presse",
        "shortDescription": "Fait le lien entre l'organisation et les journalistes pour maximiser les retombées éditoriales positives.",
        "longDescription": "L'Attaché de Presse (ou Relations Presse / PR Manager) conçoit et diffuse l'actualité de son organisation auprès des journalistes de la presse écrite, de la télévision, de la radio et des médias en ligne. Il rédige les communiqués et dossiers de presse, organise les conférences de presse, coache les porte-paroles et analyse scrupuleusement les retombées médiatiques (revues de presse et équivalent publicitaire).",
        "level": "Bac+3 à Bac+5 (Information-Communication, Journalisme, Relations Presse)",
        "salary": {
            "france": {
                "junior": "2 200 € - 2 800 € brut/mois",
                "confirmed": "3 000 € - 4 000 € brut/mois",
                "senior": "4 200 € - 5 500 € brut/mois",
                "currency": "EUR",
                "period": "mois"
            },
            "senegal": {
                "junior": "350 000 - 550 000 FCFA net/mois",
                "confirmed": "650 000 - 1 000 000 FCFA net/mois",
                "senior": "1 200 000 - 1 800 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Agences de relations presse & influence, institutions culturelles, entreprises de mode, tech, secteur public.",
        "typicalDay": "Épluchage de la presse du matin, relance téléphonique de journalistes ciblés, rédaction d'un communiqué de lancement, accueil des médias lors d'un point presse.",
        "skills": {
            "technical": ["Rédaction journalistique de communiqués", "Connaissance fine des rédactions et médias", "Techniques d'interview & média-training", "Outils de veille et revues de presse (Cision, Kantar)", "Organisation de conférences de presse"],
            "human": ["Sens aigu du contact et de la persuasion", "Grande réactivité", "Ténacité et diplomatie", "Excellente mémoire relationnelle"]
        },
        "studies": {
            "france": ["Licence Pro / Master Information-Communication", "Écoles de journalisme ou de communication (CELSA, ESP, ISCOM, EFAP)"],
            "senegal": ["Diplôme du CESTI (section journalisme / communication)", "Licence/Master Communication des organisations (UGB, ISM, Sup de Co)"]
        },
        "career": "Responsable des relations médias, Directeur de clientèle RP en agence, ou Consultant indépendant en relations publiques.",
        "relatedJobSlugs": ["responsable-relations-medias", "charge-de-relations-publiques", "consultant-rp"],
        "resources": [
            {"title": "Fiche Métier ESP — Attaché de presse", "url": "https://espub.org/metiers/attache-de-presse/"}
        ],
        "sources": ["ESP", "Studyrama", "Syntec Conseil en Relations Publics"],
        "saviezVous": "Un attaché de presse performant ne se contente pas d'envoyer un mail générique : il adapte son angle éditorial selon la ligne précise de chaque journaliste contacté.",
        "interests": ["J'aime écrire", "J'aime communiquer avec les gens", "J'aime convaincre"],
        "connectedFamilies": ["lettres-langues-sciences-humaines"]
    },
    {
        "id": "responsable-relations-medias",
        "slug": "responsable-relations-medias",
        "title": "Responsable des Relations Médias",
        "icon": "🎙️",
        "image": "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&auto=format&fit=crop&q=80",
        "familyId": "communication-marketing-medias-creation",
        "familyName": "Communication, Marketing, Médias & Création",
        "domainId": "communication-relations-publiques",
        "domain": "Communication & Relations publiques",
        "subdomain": "Relations médias & presse",
        "shortDescription": "Pilote la politique médiatique de l'organisation et supervise les attachés de presse et agences RP.",
        "longDescription": "Le Responsable des Relations Médias orchestre l'ensemble des relations entre l'organisation et le monde journalistique. Il définit la stratégie éditoriale médias, sélectionne les prises de parole clés, forme les dirigeants à l'exercice de l'interview et intervient directement en première ligne lors des sollicitations sensibles ou des polémiques pour cadrer les narratifs.",
        "level": "Bac+5 (Master Communication, Sciences Po, CELSA, Journalisme)",
        "salary": {
            "france": {
                "junior": "3 000 € - 3 700 € brut/mois",
                "confirmed": "3 900 € - 5 000 € brut/mois",
                "senior": "5 200 € - 6 800 € brut/mois",
                "currency": "EUR",
                "period": "mois"
            },
            "senegal": {
                "junior": "550 000 - 800 000 FCFA net/mois",
                "confirmed": "950 000 - 1 500 000 FCFA net/mois",
                "senior": "1 700 000 - 2 600 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Grandes entreprises cotées, institutions d'État, grandes ONG, agences RP internationales.",
        "typicalDay": "Briefing média du président du groupe avant une matinale radio, arbitrage sur les exclusivités de presse, encadrement de l'équipe RP et analyse de l'impact réputationnel.",
        "skills": {
            "technical": ["Stratégie médiatique nationale et internationale", "Média-training des dirigeants", "Gestion de réputation sous tension", "Maîtrise du droit de la presse", "Supervision d'agences RP globales"],
            "human": ["Charisme et aplomb", "Clarté d'expression", "Esprit analytique rapide", "Fiabilité sans faille"]
        },
        "studies": {
            "france": ["CELSA Paris", "Sciences Po", "Masters en communication stratégique (ESP, ISCOM, EFAP)"],
            "senegal": ["CESTI Dakar", "Master en communication institutionnelle (BEM Dakar, ISM, Sup de Co)"]
        },
        "career": "Directeur de la communication, Directeur des affaires publiques ou Porte-parole officiel.",
        "relatedJobSlugs": ["attache-de-presse", "directeur-de-la-communication", "consultant-en-communication-de-crise"],
        "resources": [
            {"title": "Fiche Métier ESP — Responsable relations médias", "url": "https://espub.org/metiers/responsable-relations-medias/"}
        ],
        "sources": ["ESP", "Club de la Presse"],
        "saviezVous": "La frontière entre relations presse et relations influenceurs s'estompe : le responsable médias intègre désormais les leaders d'opinion du web dans ses plans de diffusion.",
        "interests": ["J'aime convaincre", "J'aime communiquer avec les gens"],
        "connectedFamilies": ["lettres-langues-sciences-humaines", "droit-management"]
    },
    {
        "id": "charge-de-relations-publiques",
        "slug": "charge-de-relations-publiques",
        "title": "Chargé de Relations Publiques (RP)",
        "icon": "🤝",
        "image": "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop&q=80",
        "familyId": "communication-marketing-medias-creation",
        "familyName": "Communication, Marketing, Médias & Création",
        "domainId": "communication-relations-publiques",
        "domain": "Communication & Relations publiques",
        "subdomain": "Relations publiques & influence",
        "shortDescription": "Crée et entretient des relations de confiance durables entre une marque et ses partenaires ou leaders d'opinion.",
        "longDescription": "Le Chargé de Relations Publiques développe le réseau d'influence et le capital sympathie d'une marque. Au-delà des journalistes, il tisse des liens étroits avec des prescripteurs, des experts, des personnalités, des influenceurs et des partenaires institutionnels. Il conçoit des opérations de relations publiques ciblées (voyages d'information, réceptions VIP, tables rondes) pour renforcer la crédibilité de l'organisation.",
        "level": "Bac+3 à Bac+5 (Relations publiques, Communication événementielle)",
        "salary": {
            "france": {
                "junior": "2 200 € - 2 700 € brut/mois",
                "confirmed": "2 800 € - 3 700 € brut/mois",
                "senior": "3 900 € - 5 000 € brut/mois",
                "currency": "EUR",
                "period": "mois"
            },
            "senegal": {
                "junior": "350 000 - 550 000 FCFA net/mois",
                "confirmed": "650 000 - 1 000 000 FCFA net/mois",
                "senior": "1 150 000 - 1 700 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Agences d'influence et de RP, marques de luxe et cosmétiques, institutions culturelles, tourisme et sport.",
        "typicalDay": "Cartographie des nouveaux influenceurs du secteur, invitation de personnalités à une soirée de lancement, animation d'un déjeuner avec des experts et suivi des retours.",
        "skills": {
            "technical": ["Techniques de relations publiques & networking", "Protocoles d'accueil VIP et événements", "Marketing d'influence et partenariats", "Veille de réputation", "Aisance en négociation"],
            "human": ["Sociabilité naturelle", "Élégance relationnelle", "Organisation méticuleuse", "Discrétion et entregent"]
        },
        "studies": {
            "france": ["Licence Pro / Master Relations Publiques (ESP, ISCOM, EFAP, CELSA)"],
            "senegal": ["Licence/Master Communication et Relations Publiques (ISM, CESTI, Sup de Co Dakar)"]
        },
        "career": "Directeur de clientèle RP, Responsable des partenariats et du mécénat, ou Directeur des relations extérieures.",
        "relatedJobSlugs": ["attache-de-presse", "consultant-rp", "event-manager"],
        "resources": [
            {"title": "Fiche Métier ESP — Chargé de relations publiques", "url": "https://espub.org/metiers/charge-de-relations-publiques/"}
        ],
        "sources": ["ESP", "Studyrama"],
        "saviezVous": "Les relations publiques ne visent pas à vendre immédiatement un produit, mais à installer une confiance durable qui favorisera l'adhésion sur le long terme.",
        "interests": ["J'aime communiquer avec les gens", "J'aime convaincre"],
        "connectedFamilies": ["commerce-marketing", "hotellerie-restauration-hospitalite"]
    },
    {
        "id": "consultant-rp",
        "slug": "consultant-rp",
        "title": "Consultant en Relations Publics (RP)",
        "icon": "💼",
        "image": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop&q=80",
        "familyId": "communication-marketing-medias-creation",
        "familyName": "Communication, Marketing, Médias & Création",
        "domainId": "communication-relations-publiques",
        "domain": "Communication & Relations publiques",
        "subdomain": "Relations publiques & influence",
        "shortDescription": "Conseille plusieurs entreprises clientes en agence pour optimiser leur influence et leur réputation.",
        "longDescription": "Le Consultant RP exerce au sein d'une agence de conseil. Il accompagne un portefeuille d'entreprises clientes dans leur stratégie de réputation : positionnement des dirigeants, relations médias, gestion des controverses et création de contenu d'autorité (tribunes, livres blancs, études exclusives). Polyvalent et réactif, il sait s'adapter rapidement aux cultures de différents secteurs économiques.",
        "level": "Bac+5 (École de communication, Sciences Po, IEP, CELSA)",
        "salary": {
            "france": {
                "junior": "2 500 € - 3 200 € brut/mois",
                "confirmed": "3 500 € - 4 600 € brut/mois",
                "senior": "4 800 € - 6 500 € brut/mois",
                "currency": "EUR",
                "period": "mois"
            },
            "senegal": {
                "junior": "450 000 - 750 000 FCFA net/mois",
                "confirmed": "850 000 - 1 400 000 FCFA net/mois",
                "senior": "1 600 000 - 2 500 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Agences conseil en relations publics, cabinets de communication stratégique, structures d'affaires publiques.",
        "typicalDay": "Pitch client pour remporter un nouveau budget, rédaction d'une tribune d'opinion pour Les Échos, cadrage d'une stratégie d'influence et suivi des KPIs de visibilité.",
        "skills": {
            "technical": ["Conseil stratégique en image & influence", "Conception de tribunes d'experts et ghostwriting", "Recommandation d'agences et pitchs", "Analyse d'opinion et baromètres", "Gestion de portefeuille clients"],
            "human": ["Excellente hauteur de vue", "Facilité d'adaptation sectorielle", "Culture générale approfondie", "Force de proposition"]
        },
        "studies": {
            "france": ["Sciences Po / IEP", "CELSA Paris", "Écoles de communication spécialisées (ESP, ISCOM, Sup de Pub)"],
            "senegal": ["Master Communication Stratégique (BEM Dakar, CESTI, ISM Dakar)"]
        },
        "career": "Directeur de pôle en agence RP, Directeur Conseil, ou passage en entreprise comme Directeur de la Communication.",
        "relatedJobSlugs": ["charge-de-relations-publiques", "consultant-en-communication-de-crise", "lobbyiste-consultant-en-affaires-publiques"],
        "resources": [
            {"title": "Fiche Métier ESP — Consultant RP", "url": "https://espub.org/metiers/consultant-rp/"}
        ],
        "sources": ["ESP", "Syntec Conseil en Relations Publics"],
        "saviezVous": "Le terme officiel de la profession en France est désormais « Relations Publics » avec un « s », pour souligner la diversité des différents publics ciblés.",
        "interests": ["J'aime convaincre", "J'aime écrire", "J'aime communiquer avec les gens"],
        "connectedFamilies": ["droit-management", "lettres-langues-sciences-humaines"]
    },
    {
        "id": "consultant-en-communication-de-crise",
        "slug": "consultant-en-communication-de-crise",
        "title": "Consultant en Communication de Crise",
        "icon": "🛡️",
        "image": "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&auto=format&fit=crop&q=80",
        "familyId": "communication-marketing-medias-creation",
        "familyName": "Communication, Marketing, Médias & Création",
        "domainId": "communication-relations-publiques",
        "domain": "Communication de crise & réputation",
        "subdomain": "Communication de crise & réputation",
        "shortDescription": "Prépare les entreprises aux scénarios d'urgence et protège leur réputation face aux tempêtes médiatiques et juridiques.",
        "longDescription": "Le Consultant en Communication de Crise intervient lorsque la réputation ou la survie d'une organisation est menacée : cyberattaque, accident industriel, scandale financier, rappel de produit ou polémique sur les réseaux sociaux. En amont, il rédige les manuels de crise et anime des simulations immersives. En période de crise, il pilote la cellule d'urgence, prépare les éléments de langage et coache les porte-paroles sous haute tension.",
        "level": "Bac+5 (Sciences Po, Droit, CELSA, Gestion des risques)",
        "salary": {
            "france": {
                "junior": "3 000 € - 3 800 € brut/mois",
                "confirmed": "4 200 € - 5 800 € brut/mois",
                "senior": "6 500 € - 10 000 €+ brut/mois",
                "currency": "EUR",
                "period": "mois"
            },
            "senegal": {
                "junior": "600 000 - 950 000 FCFA net/mois",
                "confirmed": "1 100 000 - 1 800 000 FCFA net/mois",
                "senior": "2 000 000 - 3 500 000 FCFA+ net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Cabinets spécialisés en gestion de crise, agences de communication stratégique, grandes banques, groupes industriels.",
        "typicalDay": "Simulation de cellule de crise avec un comité de direction, veille en temps réel sur un bad buzz naissant, rédaction urgente d'un communiqué et débriefing juridique.",
        "skills": {
            "technical": ["Méthodologie de cellule de crise", "Droit de la presse et contentieux", "Gestion du temps médiatique et des réseaux sociaux", "Média-training intensif sous stress", "Veille d'opinion et détection de signaux faibles"],
            "human": ["Calme olympien sous la pression", "Capacité d'analyse immédiate", "Fermeté et autorité naturelle", "Totale discrétion"]
        },
        "studies": {
            "france": ["Sciences Po / IEP (Affaires Publiques)", "CELSA Paris", "Master en Droit / Sciences Politiques", "Formations spécialisées ESP / ISCOM"],
            "senegal": ["Master en Sciences Politiques ou Droit (UCAD)", "Master Communication Stratégique (BEM Dakar, CESTI)"]
        },
        "career": "Directeur de cabinet, Directeur de la communication de crise en grand groupe ou Associé de cabinet d'affaires publiques.",
        "relatedJobSlugs": ["directeur-de-la-communication", "lobbyiste-consultant-en-affaires-publiques", "consultant-rp"],
        "resources": [
            {"title": "Fiche Métier ESP — Communication de crise", "url": "https://espub.org/metiers/consultant-en-communication-de-crise/"}
        ],
        "sources": ["ESP", "Sciences Po", "Syntec Conseil"],
        "saviezVous": "La règle d'or en communication de crise : une réaction non préparée dans la première heure peut aggraver la crise de plus de 80% face à l'opinion publique.",
        "interests": ["J'aime convaincre", "J'aime communiquer avec les gens"],
        "connectedFamilies": ["droit-management", "lettres-langues-sciences-humaines"]
    },
    {
        "id": "lobbyiste-consultant-en-affaires-publiques",
        "slug": "lobbyiste-consultant-en-affaires-publiques",
        "title": "Lobbyiste / Consultant en Affaires Publiques",
        "icon": "🏛️",
        "image": "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop&q=80",
        "familyId": "communication-marketing-medias-creation",
        "familyName": "Communication, Marketing, Médias & Création",
        "domainId": "communication-relations-publiques",
        "domain": "Communication & Relations publiques",
        "subdomain": "Affaires publiques & lobbying",
        "shortDescription": "Défend les intérêts légitimes d'entreprises ou de filières auprès des décideurs politiques et des institutions législatives.",
        "longDescription": "Le Lobbyiste (ou Consultant en Affaires Publiques) assure le pont entre le monde économique et les pouvoirs publics (parlementaires, ministères, régulateurs, institutions européennes ou régionales). Il analyse les projets de lois, rédige des amendements argumentés, produit des études d'impact socio-économique et sensibilise les élus aux réalités de terrain de son secteur, dans le respect des registres de transparence.",
        "level": "Bac+5 (Sciences Po, Droit public, Affaires européennes, Relations internationales)",
        "salary": {
            "france": {
                "junior": "3 000 € - 3 800 € brut/mois",
                "confirmed": "4 200 € - 6 000 € brut/mois",
                "senior": "6 500 € - 11 000 €+ brut/mois",
                "currency": "EUR",
                "period": "mois"
            },
            "senegal": {
                "junior": "600 000 - 950 000 FCFA net/mois",
                "confirmed": "1 100 000 - 1 900 000 FCFA net/mois",
                "senior": "2 200 000 - 4 000 000 FCFA+ net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Cabinets de conseil en affaires publiques, fédérations professionnelles, grandes entreprises industrielles et de services, ONG.",
        "typicalDay": "Veille sur l'agenda législatif de l'Assemblée, rédaction d'une note d'analyse sur une directive européenne, rencontre avec un député et préparation d'un colloque institutionnel.",
        "skills": {
            "technical": ["Procédure législative et réglementaire", "Droit public et communautaire", "Rédaction juridique et plaidoyer politique", "Cartographie d'acteurs décisionnels", "Déontologie et conformité HATVP"],
            "human": ["Excellente rhétorique et force d'argumentation", "Réseau et sens politique", "Persévérance et patience", "Éthique irréprochable"]
        },
        "studies": {
            "france": ["Sciences Po Paris / IEP", "Master en Droit Public ou Affaires Publiques", "Écoles de communication (spécialisation lobbying ESP, ISCOM, EFAP)"],
            "senegal": ["Master Droit Public / Relations Internationales (UCAD, UGB)", "Sciences Po Dakar / BEM School of Governance"]
        },
        "career": "Directeur des Affaires Publiques et Juridiques, Délégué Général de fédération patronale, ou Conseiller diplomatique.",
        "relatedJobSlugs": ["directeur-de-la-communication", "consultant-en-communication-de-crise", "consultant-rse"],
        "resources": [
            {"title": "Fiche Métier ESP — Affaires publiques & Lobbying", "url": "https://espub.org/metiers/lobbyiste-consultant-en-affaires-publiques/"}
        ],
        "sources": ["ESP", "Haute Autorité pour la Transparence de la Vie Publique (HATVP)"],
        "saviezVous": "En France, les représentants d'intérêts doivent obligatoirement déclarer leurs activités et leurs rencontres avec les décideurs publics sur le répertoire public de la HATVP.",
        "interests": ["J'aime convaincre", "J'aime communiquer avec les gens"],
        "connectedFamilies": ["droit-management", "lettres-langues-sciences-humaines"]
    },
    {
        "id": "consultant-rse",
        "slug": "consultant-rse",
        "title": "Consultant RSE & Communication Responsable",
        "icon": "🌱",
        "image": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80",
        "familyId": "communication-marketing-medias-creation",
        "familyName": "Communication, Marketing, Médias & Création",
        "domainId": "communication-relations-publiques",
        "domain": "Communication & Relations publiques",
        "subdomain": "Communication RSE & responsable",
        "shortDescription": "Accompagne les organisations dans la valorisation sincère de leurs engagements écologiques et sociétaux.",
        "longDescription": "Le Consultant RSE & Communication Responsable aide les entreprises à structurer et faire connaître leurs démarches environnementales, sociales et de gouvernance (ESG). Il veille scrupuleusement à bannir le « greenwashing », rédige le rapport de durabilité (norme CSRD), anime les dialogues avec les parties prenantes et forme les équipes marketing aux règles de l'éco-communication.",
        "level": "Bac+5 (Master RSE, Développement Durable, Communication Responsable)",
        "salary": {
            "france": {
                "junior": "2 800 € - 3 500 € brut/mois",
                "confirmed": "3 800 € - 4 800 € brut/mois",
                "senior": "5 000 € - 6 800 € brut/mois",
                "currency": "EUR",
                "period": "mois"
            },
            "senegal": {
                "junior": "450 000 - 750 000 FCFA net/mois",
                "confirmed": "850 000 - 1 400 000 FCFA net/mois",
                "senior": "1 600 000 - 2 500 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Cabinets de conseil RSE et stratégie durable, agences de communication engagée, grandes entreprises du CAC 40.",
        "typicalDay": "Audit des preuves environnementales d'un produit avant lancement, rédaction d'une section du rapport extra-financier, animation d'un atelier sur la communication sobre.",
        "skills": {
            "technical": ["Normes ESG & directive européenne CSRD", "Méthodologie du Bilan Carbone", "Règles déontologiques anti-greenwashing (ARPP / ADEME)", "Communication d'engagement et labels durables", "Concertation avec les ONG"],
            "human": ["Conviction environnementale", "Rigueur de vérification des faits", "Pédagogie et esprit d'influence", "Sens du dialogue"]
        },
        "studies": {
            "france": ["Master Développement Durable & RSE (Université Paris-Dauphine, Sciences Po)", "Écoles de commerce et de communication (ESP, Sup de Pub, ISCOM)"],
            "senegal": ["Master RSE & Développement Durable (BEM Dakar, ISM, CESAG, UCAD)"]
        },
        "career": "Directeur de la RSE et de la Durabilité, Directeur de la Communication Responsable ou Fondateur de cabinet de conseil à impact.",
        "relatedJobSlugs": ["responsable-communication", "directeur-de-la-communication", "lobbyiste-consultant-en-affaires-publiques"],
        "resources": [
            {"title": "Fiche Métier ESP — Consultant RSE", "url": "https://espub.org/metiers/consultant-rse/"}
        ],
        "sources": ["ESP", "ADEME", "ARPP"],
        "saviezVous": "La directive européenne CSRD oblige désormais des milliers d'entreprises à faire auditer leurs données extra-financières aussi rigoureusement que leurs comptes financiers.",
        "interests": ["J'aime la nature et l'environnement", "J'aime convaincre", "J'aime communiquer avec les gens"],
        "connectedFamilies": ["environnement-developpement-durable", "droit-management"]
    },

    # =========================================================================
    # DOMAINE 2 : MARKETING & STRATÉGIE DE MARQUE
    # =========================================================================
    {
        "id": "charge-de-marketing",
        "slug": "charge-de-marketing",
        "title": "Chargé de Marketing",
        "icon": "📈",
        "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
        "familyId": "communication-marketing-medias-creation",
        "familyName": "Communication, Marketing, Médias & Création",
        "domainId": "marketing-strategie-marque",
        "domain": "Marketing & Stratégie de marque",
        "subdomain": "Marketing opérationnel",
        "shortDescription": "Participe au déploiement opérationnel des plans marketing et analyse l'efficacité des campagnes.",
        "longDescription": "Le Chargé de Marketing coordonne au quotidien la mise en œuvre des actions destinées à promouvoir une offre, conquérir des clients et fidéliser la base existante. Il réalise des études de marché, analyse les ventes, conçoit les fiches argumentaires commerciales, supervise la diffusion des offres promotionnelles et suit de près les indicateurs clés de rentabilité (KPIs).",
        "level": "Bac+3 à Bac+5 (Bachelor Marketing, BUT Tech de Co, Master Marketing)",
        "salary": {
            "france": {
                "junior": "2 300 € - 2 900 € brut/mois",
                "confirmed": "3 000 € - 3 800 € brut/mois",
                "senior": "4 000 € - 4 900 € brut/mois",
                "currency": "EUR",
                "period": "mois"
            },
            "senegal": {
                "junior": "350 000 - 550 000 FCFA net/mois",
                "confirmed": "600 000 - 950 000 FCFA net/mois",
                "senior": "1 100 000 - 1 600 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Entreprises de grande consommation, télécoms, secteur bancaire, startups en forte croissance, agences marketing.",
        "typicalDay": "Extraction des données de vente de la semaine, analyse du positionnement d'un concurrent, briefing avec les commerciaux et création des visuels d'une promo.",
        "skills": {
            "technical": ["Analyse des données de vente et KPIs", "Études de marché et veille concurrentielle", "Conception d'opérations promotionnelles", "Maîtrise d'Excel et outils BI", "Coordination des ventes et du terrain"],
            "human": ["Esprit d'analyse et sens des chiffres", "Sensibilité commerciale", "Créativité pragmatique", "Sens de l'organisation"]
        },
        "studies": {
            "france": ["BUT Techniques de Commercialisation", "Bachelor en Marketing (ESP, ISCOM, Écoles de commerce)", "Master Marketing (IAE, Universités)"],
            "senegal": ["Licence en Marketing & Vente (Sup de Co Dakar, ISM, BEM Dakar)", "Master Marketing Opérationnel (CESAG, UCAD)"]
        },
        "career": "Responsable marketing opérationnel, Chef de produit ou Brand Manager.",
        "relatedJobSlugs": ["responsable-marketing", "chef-de-produit", "trade-marketing-manager"],
        "resources": [
            {"title": "Fiche Métier ESP — Chargé de marketing", "url": "https://espub.org/metiers/charge-de-marketing/"}
        ],
        "sources": ["ESP", "Studyrama"],
        "saviezVous": "Le marketing moderne combine à 50/50 l'intuition créative et l'analyse rigoureuse des données comportementales des utilisateurs.",
        "interests": ["J'aime analyser les comportements des consommateurs", "J'aime les marques"],
        "connectedFamilies": ["commerce-marketing"]
    },
    {
        "id": "responsable-marketing",
        "slug": "responsable-marketing",
        "title": "Responsable Marketing",
        "icon": "🎯",
        "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80",
        "familyId": "communication-marketing-medias-creation",
        "familyName": "Communication, Marketing, Médias & Création",
        "domainId": "marketing-strategie-marque",
        "domain": "Marketing & Stratégie de marque",
        "subdomain": "Marketing stratégique & de marque",
        "shortDescription": "Définit le plan marketing annuel, manage l'équipe produit/opérationnelle et maximise la part de marché.",
        "longDescription": "Le Responsable Marketing orchestre l'ensemble de la démarche commerciale et d'image d'une gamme ou d'une entreprise. Il identifie les opportunités de croissance, fixe la politique de prix (pricing), optimise le mix marketing (produit, prix, distribution, promotion) et pilote la rentabilité des investissements marketing tout en manageant les chefs de produit et chargés de marketing.",
        "level": "Bac+5 (École de commerce, Master Marketing Stratégique)",
        "salary": {
            "france": {
                "junior": "3 300 € - 4 000 € brut/mois",
                "confirmed": "4 200 € - 5 400 € brut/mois",
                "senior": "5 800 € - 7 200 € brut/mois",
                "currency": "EUR",
                "period": "mois"
            },
            "senegal": {
                "junior": "650 000 - 950 000 FCFA net/mois",
                "confirmed": "1 100 000 - 1 700 000 FCFA net/mois",
                "senior": "1 900 000 - 2 900 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Sièges d'entreprises B2B et B2C, marques agroalimentaires, cosmétiques, services financiers, distribution.",
        "typicalDay": "Revue des parts de marché du trimestre, validation du packaging d'une nouvelle gamme, réunion avec la direction commerciale pour la rentrée et arbitrage budget.",
        "skills": {
            "technical": ["Plan marketing stratégique à 3 ans", "Gestion de compte de résultat (P&L produit)", "Politique tarifaire et élasticité prix", "Management d'équipe marketing", "Gestion de la relation client"],
            "human": ["Vision stratégique claire", "Aisance managériale", "Culture du résultat et des données", "Sens de l'anticipation"]
        },
        "studies": {
            "france": ["Grandes Écoles de Commerce (spécialisation marketing stratégique)", "Master en Marketing et Stratégie (IAE, Universités, ESP)"],
            "senegal": ["Master Marketing Stratégique (BEM Dakar, Sup de Co Dakar, ISM, CESAG)"]
        },
        "career": "Directeur Marketing (CMO), Directeur Commercial & Marketing ou Directeur de Business Unit.",
        "relatedJobSlugs": ["directeur-marketing", "chef-de-produit", "brand-manager"],
        "resources": [
            {"title": "Fiche Métier ESP — Responsable marketing", "url": "https://espub.org/metiers/responsable-marketing/"}
        ],
        "sources": ["ESP", "Association Française du Marketing (AFM)"],
        "saviezVous": "Un bon responsable marketing sait autant regarder les études de panels de consommateurs que tester directement les produits avec les clients finaux.",
        "interests": ["J'aime analyser les comportements des consommateurs", "J'aime les marques", "J'aime convaincre"],
        "connectedFamilies": ["commerce-marketing", "droit-management"]
    },
    {
        "id": "directeur-marketing",
        "slug": "directeur-marketing",
        "title": "Directeur Marketing (CMO)",
        "icon": "👑",
        "image": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&auto=format&fit=crop&q=80",
        "familyId": "communication-marketing-medias-creation",
        "familyName": "Communication, Marketing, Médias & Création",
        "domainId": "marketing-strategie-marque",
        "domain": "Marketing & Stratégie de marque",
        "subdomain": "Marketing stratégique & de marque",
        "shortDescription": "Membre du comité de direction, il pilote la vision marché, l'innovation de l'offre et l'expansion commerciale globale.",
        "longDescription": "Le Directeur Marketing (Chief Marketing Officer - CMO) impulse la vision consommateur au plus haut niveau de l'entreprise. Il anticipe les mutations de marché, pilote la politique d'innovation produits et services, arbitre les budgets à grande échelle et orchestre la synergie entre marketing traditionnel, digital, data et communication de marque pour pérenniser la profitabilité de l'organisation.",
        "level": "Bac+5 et 8 à 12 ans d'expérience stratégique",
        "salary": {
            "france": {
                "junior": "5 500 € - 7 000 € brut/mois",
                "confirmed": "7 500 € - 11 000 € brut/mois",
                "senior": "12 000 € - 18 000 €+ brut/mois",
                "currency": "EUR",
                "period": "mois"
            },
            "senegal": {
                "junior": "1 600 000 - 2 600 000 FCFA net/mois",
                "confirmed": "2 900 000 - 4 500 000 FCFA net/mois",
                "senior": "5 000 000 - 8 000 000 FCFA+ net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Comités exécutifs de multinationales, groupes cotés, scale-ups technologiques de premier plan.",
        "typicalDay": "Présentation de la feuille de route stratégique au conseil d'administration, analyse de la rentabilité des nouveaux segments, arbitrage d'un rachat de marque.",
        "skills": {
            "technical": ["Vision stratégique internationale", "Gestion de P&L à plusieurs millions d'euros", "Gouvernance de portefeuille de marques", "Transformation digitale & MarTech", "Marketing axé sur la valeur client (CLV)"],
            "human": ["Leadership visionnaire", "Excellente aptitude à la négociation", "Culture de l'innovation audacieuse", "Résilience et sens du collectif"]
        },
        "studies": {
            "france": ["Grandes Écoles de Commerce (HEC, ESSEC, ESCP, EM Lyon, EDHEC)", "Sciences Po", "Masters d'excellence en Marketing"],
            "senegal": ["BEM Management School Dakar", "CESAG Dakar", "Grandes universités et écoles internationales"]
        },
        "career": "Directeur Général d'entreprise (CEO), Administrateur de société ou Membre de fonds d'investissement.",
        "relatedJobSlugs": ["responsable-marketing", "brand-manager", "directeur-de-la-communication"],
        "resources": [
            {"title": "Fiche Métier ESP — Directeur marketing", "url": "https://espub.org/metiers/directeur-marketing/"}
        ],
        "sources": ["ESP", "CMO Council"],
        "saviezVous": "Le rôle du CMO s'est considérablement enrichi : il est désormais co-responsable de l'expérience client globale et de l'intégration de l'IA prédictive dans le commerce.",
        "interests": ["J'aime les marques", "J'aime analyser les comportements des consommateurs", "J'aime convaincre"],
        "connectedFamilies": ["commerce-marketing", "droit-management"]
    },
    {
        "id": "chef-de-produit",
        "slug": "chef-de-produit",
        "title": "Chef de Produit (Product Manager)",
        "icon": "📦",
        "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
        "familyId": "communication-marketing-medias-creation",
        "familyName": "Communication, Marketing, Médias & Création",
        "domainId": "marketing-strategie-marque",
        "domain": "Marketing & Stratégie de marque",
        "subdomain": "Marketing produit & Category management",
        "shortDescription": "Gère le cycle de vie complet d'un produit, de sa conception à sa commercialisation en magasin ou en ligne.",
        "longDescription": "Le Chef de Produit est souvent comparé au « chef d'orchestre » de son produit ou service. Il analyse les besoins des consommateurs, rédige le cahier des charges avec les équipes R&D et design, teste les prototypes, définit le packaging et le prix, puis conçoit le plan de lancement promotionnel. Il suit au jour le jour les volumes de vente, la rentabilité et propose les évolutions nécessaires.",
        "level": "Bac+5 (École de commerce, Master Marketing Produit, Ingénieur d'affaires)",
        "salary": {
            "france": {
                "junior": "2 800 € - 3 500 € brut/mois",
                "confirmed": "3 600 € - 4 700 € brut/mois",
                "senior": "5 000 € - 6 500 € brut/mois",
                "currency": "EUR",
                "period": "mois"
            },
            "senegal": {
                "junior": "450 000 - 750 000 FCFA net/mois",
                "confirmed": "850 000 - 1 400 000 FCFA net/mois",
                "senior": "1 600 000 - 2 500 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Industrie agroalimentaire, cosmétique, biens électroniques, mode, pharmacie, services télécoms.",
        "typicalDay": "Test consommateur à l'aveugle sur une nouvelle formule, séance de validation du packaging avec l'agence créative, analyse des panels Nielsen/Kantar et ajustement des prévisions de vente.",
        "skills": {
            "technical": ["Analyse de panels de distributeurs et consommateurs", "Élaboration de mix marketing complet (4P/7P)", "Coordination R&D, juridique et supply chain", "Calcul de marge brute et rentabilité", "Argumentaires de vente pour la force commerciale"],
            "human": ["Capacité à fédérer des métiers très différents", "Créativité orientée marché", "Sens du détail", "Dynamisme et passion produit"]
        },
        "studies": {
            "france": ["Grandes Écoles de Commerce", "Master Marketing Produit (IAE, Universités, ESP)", "Double diplôme Ingénieur-Manager"],
            "senegal": ["Master Marketing & Management de Produit (BEM Dakar, ISM, Sup de Co Dakar)"]
        },
        "career": "Chef de groupe produits, Responsable marketing produit, Brand Manager ou Category Manager.",
        "relatedJobSlugs": ["responsable-marketing-produit", "brand-manager", "category-manager"],
        "resources": [
            {"title": "Fiche Métier ESP — Chef de produit", "url": "https://espub.org/metiers/chef-de-produit/"}
        ],
        "sources": ["ESP", "Studyrama"],
        "saviezVous": "Le chef de produit passe environ un tiers de son temps en réunion de coordination pour faire dialoguer les ingénieurs R&D, les designers et les vendeurs.",
        "interests": ["J'aime les marques", "J'aime analyser les comportements des consommateurs"],
        "connectedFamilies": ["commerce-marketing", "industrie-mecanique"]
    },
    {
        "id": "responsable-marketing-produit",
        "slug": "responsable-marketing-produit",
        "title": "Responsable Marketing Produit",
        "icon": "📑",
        "image": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=80",
        "familyId": "communication-marketing-medias-creation",
        "familyName": "Communication, Marketing, Médias & Création",
        "domainId": "marketing-strategie-marque",
        "domain": "Marketing & Stratégie de marque",
        "subdomain": "Marketing produit & Category management",
        "shortDescription": "Supervise une gamme complète de produits et pilote l'équipe de chefs de produits.",
        "longDescription": "Le Responsable Marketing Produit gère un portefeuille complet d'offres au sein d'une entreprise. Il garantit la cohérence entre les différents produits de la gamme, arbitre les investissements R&D selon le retour sur investissement attendu, et coordonne les lancements sur les différents marchés géographiques. Il manage une équipe de chefs de produits juniors et confirmés.",
        "level": "Bac+5 et 5 à 7 ans d'expérience en gestion de produit",
        "salary": {
            "france": {
                "junior": "3 800 € - 4 500 € brut/mois",
                "confirmed": "4 600 € - 5 800 € brut/mois",
                "senior": "6 000 € - 7 800 € brut/mois",
                "currency": "EUR",
                "period": "mois"
            },
            "senegal": {
                "junior": "800 000 - 1 200 000 FCFA net/mois",
                "confirmed": "1 400 000 - 2 000 000 FCFA net/mois",
                "senior": "2 200 000 - 3 200 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Groupes agroalimentaires, équipementiers de santé, biens de consommation courante, entreprises SaaS.",
        "typicalDay": "Revue de rentabilité du portefeuille, arbitrage entre deux projets de refonte de packaging, coaching d'un chef de produit junior et négociation avec la direction des achats.",
        "skills": {
            "technical": ["Management de portefeuille de produits", "Management hiérarchique et transversal", "Stratégie d'extension de gamme", "Gestion budgétaire globale", "Analyses prédictives de marché"],
            "human": ["Sens aigu des priorités économiques", "Leadership d'équipe", "Aisance de négociation", "Vision stratégique"]
        },
        "studies": {
            "france": ["Grandes Écoles de Commerce", "Master Marketing Stratégique (CELSA, ESP, IAE)"],
            "senegal": ["Master en Management Stratégique & Marketing (BEM Dakar, Sup de Co Dakar, ISM)"]
        },
        "career": "Directeur Marketing, Directeur de Division Produit ou Directeur Général de Filiale.",
        "relatedJobSlugs": ["chef-de-produit", "responsable-marketing", "category-manager"],
        "resources": [
            {"title": "Fiche Métier ESP — Marketing produit", "url": "https://espub.org/metiers/responsable-marketing-produit/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "Savoir retirer du marché un produit vieillissant au bon moment est une décision stratégique tout aussi cruciale que de lancer une nouveauté.",
        "interests": ["J'aime les marques", "J'aime analyser les comportements des consommateurs"],
        "connectedFamilies": ["commerce-marketing"]
    },
    {
        "id": "responsable-marketing-operationnel",
        "slug": "responsable-marketing-operationnel",
        "title": "Responsable Marketing Opérationnel",
        "icon": "⚡",
        "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
        "familyId": "communication-marketing-medias-creation",
        "familyName": "Communication, Marketing, Médias & Création",
        "domainId": "marketing-strategie-marque",
        "domain": "Marketing & Stratégie de marque",
        "subdomain": "Marketing opérationnel",
        "shortDescription": "Transforme la stratégie marketing en actions concrètes sur les points de vente et les canaux de distribution.",
        "longDescription": "Le Responsable Marketing Opérationnel assure la liaison directe entre la stratégie de marque et le terrain. Il conçoit les supports d'aide à la vente (PLV, kakémonos, catalogues), orchestre les animations commerciales en magasin, pilote les campagnes de promotion saisonnières et s'assure que la force de vente dispose de tous les leviers pour atteindre ses objectifs de chiffre d'affaires.",
        "level": "Bac+5 (École de commerce, Master Marketing Opérationnel)",
        "salary": {
            "france": {
                "junior": "3 000 € - 3 600 € brut/mois",
                "confirmed": "3 800 € - 4 800 € brut/mois",
                "senior": "5 000 € - 6 400 € brut/mois",
                "currency": "EUR",
                "period": "mois"
            },
            "senegal": {
                "junior": "550 000 - 850 000 FCFA net/mois",
                "confirmed": "950 000 - 1 500 000 FCFA net/mois",
                "senior": "1 700 000 - 2 500 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Réseaux de magasins, enseignes de distribution, franchises, marques d'électronique et de mode.",
        "typicalDay": "Validation d'un prototype de présentoir en tête de gondole, tournée terrain avec des commerciaux, analyse des retours d'une opération couponing et commande d'outils promotionnels.",
        "skills": {
            "technical": ["Conception de campagnes promotionnelles terrain", "Gestion de la PLV et merchandising opérationnel", "Brief des prestataires fabricants et logisticiens", "Mesure du ROI des actions promotionnelles", "Synergie marketing-vente"],
            "human": ["Grand sens pratique et réactivité", "Facilité de contact avec le terrain", "Goût du challenge commercial", "Rigueur d'exécution"]
        },
        "studies": {
            "france": ["Écoles de commerce (ESP, ISCOM, IAE)", "Master en Marketing et Négociation Commerciale"],
            "senegal": ["Master Marketing & Distribution (Sup de Co Dakar, ISM, BEM Dakar)"]
        },
        "career": "Directeur Marketing Opérationnel, Trade Marketing Manager ou Directeur Commercial Régional.",
        "relatedJobSlugs": ["trade-marketing-manager", "charge-de-marketing", "chef-de-projet-merchandising"],
        "resources": [
            {"title": "Fiche Métier ESP — Marketing opérationnel", "url": "https://espub.org/metiers/responsable-marketing-operationnel/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "Près de 70% des décisions d'achat se prennent directement devant le rayon : le marketing opérationnel est le moteur de cette décision ultime.",
        "interests": ["J'aime convaincre", "J'aime analyser les comportements des consommateurs"],
        "connectedFamilies": ["commerce-marketing"]
    },
    {
        "id": "brand-manager",
        "slug": "brand-manager",
        "title": "Brand Manager (Gestionnaire de Marque)",
        "icon": "✨",
        "image": "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&auto=format&fit=crop&q=80",
        "familyId": "communication-marketing-medias-creation",
        "familyName": "Communication, Marketing, Médias & Création",
        "domainId": "marketing-strategie-marque",
        "domain": "Marketing & Stratégie de marque",
        "subdomain": "Brand Management & Branding",
        "shortDescription": "Façonne l'ADN, la réputation et la désirabilité émotionnelle d'une marque auprès de ses communautés.",
        "longDescription": "Le Brand Manager est le gardien de l'identité et de l'âme d'une marque. Plus qu'un simple produit, il vend une histoire, un univers de valeurs et une émotion. Il veille à ce que chaque point de contact (publicité, packaging, réseaux sociaux, partenariats, événements) reflète parfaitement l'ADN de la marque. Il mène les études de notoriété et pilote les collaborations créatives avec les créateurs et agences.",
        "level": "Bac+5 (École de commerce, Master Marketing de Marque, CELSA)",
        "salary": {
            "france": {
                "junior": "3 000 € - 3 800 € brut/mois",
                "confirmed": "4 000 € - 5 300 € brut/mois",
                "senior": "5 600 € - 7 500 € brut/mois",
                "currency": "EUR",
                "period": "mois"
            },
            "senegal": {
                "junior": "600 000 - 950 000 FCFA net/mois",
                "confirmed": "1 100 000 - 1 800 000 FCFA net/mois",
                "senior": "2 000 000 - 3 200 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Grandes marques de mode, cosmétiques, luxe, tech, boissons, biens culturels.",
        "typicalDay": "Validation d'une charte de collaboration avec une égérie, analyse des études d'image de marque du semestre, briefing créatif pour le prochain film publicitaire.",
        "skills": {
            "technical": ["Définition de plateforme de marque (Brand Platform)", "Storytelling de marque et tonalité rédactionnelle", "Gestion de partenariats et co-branding", "Études qualitatives d'image et de résonance", "Contrôle de conformité de l'identité visuelle"],
            "human": ["Haute sensibilité esthétique et culturelle", "Passion pour la psychologie du consommateur", "Audace créative", "Sens aigu de l'élégance"]
        },
        "studies": {
            "france": ["Grandes Écoles de Commerce", "CELSA Paris", "Écoles spécialisées en communication de marque (ESP, ISCOM, Sup de Pub)"],
            "senegal": ["Master en Stratégie de Marque (BEM Dakar, Sup de Co Dakar, ISM)"]
        },
        "career": "Directeur de la Marque (Brand Director), Directeur Marketing ou Directeur de la Création de Marque.",
        "relatedJobSlugs": ["brand-strategist", "responsable-marketing", "brand-content-manager"],
        "resources": [
            {"title": "Fiche Métier ESP — Brand Manager", "url": "https://espub.org/metiers/brand-manager/"}
        ],
        "sources": ["ESP", "Studyrama"],
        "saviezVous": "Une marque forte ne vend pas des fonctionnalités, elle propose une vision du monde à laquelle le client est fier de s'identifier.",
        "interests": ["J'aime les marques", "J'aime analyser les comportements des consommateurs", "J'aime créer des visuels"],
        "connectedFamilies": ["commerce-marketing", "lettres-langues-sciences-humaines"]
    },
    {
        "id": "brand-strategist",
        "slug": "brand-strategist",
        "title": "Brand Strategist (Stratège de Marque)",
        "icon": "🧠",
        "image": "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80",
        "familyId": "communication-marketing-medias-creation",
        "familyName": "Communication, Marketing, Médias & Création",
        "domainId": "marketing-strategie-marque",
        "domain": "Marketing & Stratégie de marque",
        "subdomain": "Brand Management & Branding",
        "shortDescription": "Décrypte les tendances sociétales pour définir le positionnement futur et la mission des marques.",
        "longDescription": "Le Brand Strategist travaille en amont de toute création publicitaire. Véritable sociologue de la consommation, il analyse les mutations de société, les nouveaux usages et les attentes de sens des nouvelles générations pour définir la « raison d'être » (purpose) et le territoire stratégique d'une marque. Ses recommandations orientent les décisions des dirigeants et inspirent les directeurs artistiques.",
        "level": "Bac+5 (Sciences Po, CELSA, Master Stratégie de Marque, Écoles de commerce)",
        "salary": {
            "france": {
                "junior": "3 200 € - 4 000 € brut/mois",
                "confirmed": "4 200 € - 5 600 € brut/mois",
                "senior": "6 000 € - 8 500 € brut/mois",
                "currency": "EUR",
                "period": "mois"
            },
            "senegal": {
                "junior": "650 000 - 1 000 000 FCFA net/mois",
                "confirmed": "1 200 000 - 1 900 000 FCFA net/mois",
                "senior": "2 200 000 - 3 500 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Agences de branding de premier plan, agences de conseil en innovation, grands groupes internationaux.",
        "typicalDay": "Veille sur les signaux faibles et micro-tendances, animation d'un workshop de co-création avec les fondateurs d'une marque, rédaction d'un manifeste de marque inspirant.",
        "skills": {
            "technical": ["Analyse sociologique et prospective de consommation", "Élaboration de plateformes et manifestes de marque", "Benchmark concurrentiel approfondi", "Animation de workshops d'idéation", "Synthèse conceptuelle de haut niveau"],
            "human": ["Curiosité intellectuelle insatiable", "Esprit de synthèse remarquable", "Éloquence et force de conviction", "Créativité conceptuelle"]
        },
        "studies": {
            "france": ["CELSA Paris", "Sciences Po", "Grandes Écoles de Commerce (spécialisation branding)", "ESP / ISCOM"],
            "senegal": ["Master en Stratégie d'Entreprise et Marque (BEM Dakar, ISM, CESAG)"]
        },
        "career": "Directeur de la Stratégie de Marque, Head of Planning Stratégique ou Consultant indépendant en positionnement.",
        "relatedJobSlugs": ["brand-manager", "planneur-strategique", "directeur-marketing"],
        "resources": [
            {"title": "Fiche Métier ESP — Brand Strategist", "url": "https://espub.org/metiers/brand-strategist/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "Les marques les plus résilientes au monde sont celles dont la stratégie de marque a su anticiper un changement sociétal majeur 5 ans avant la concurrence.",
        "interests": ["J'aime les marques", "J'aime analyser les comportements des consommateurs", "J'aime écrire"],
        "connectedFamilies": ["lettres-langues-sciences-humaines", "commerce-marketing"]
    },
    {
        "id": "category-manager",
        "slug": "category-manager",
        "title": "Category Manager",
        "icon": "📊",
        "image": "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=800&auto=format&fit=crop&q=80",
        "familyId": "communication-marketing-medias-creation",
        "familyName": "Communication, Marketing, Médias & Création",
        "domainId": "marketing-strategie-marque",
        "domain": "Marketing & Stratégie de marque",
        "subdomain": "Marketing produit & Category management",
        "shortDescription": "Optimise la performance d'une catégorie complète de produits chez les distributeurs pour maximiser les ventes.",
        "longDescription": "Le Category Manager analyse une catégorie entière de produits (ex. les boissons fraîches, les soins du visage, le petit électroménager) non pas du seul point de vue d'une marque, mais pour l'ensemble du rayon. Il conseille les centrales d'achat de la grande distribution sur la composition idéale de l'assortiment, les plans d'implantation en rayon (planogrammes) et les promotions à organiser.",
        "level": "Bac+5 (École de commerce, Master Marketing & Distribution)",
        "salary": {
            "france": {
                "junior": "2 900 € - 3 600 € brut/mois",
                "confirmed": "3 800 € - 4 900 € brut/mois",
                "senior": "5 200 € - 6 800 € brut/mois",
                "currency": "EUR",
                "period": "mois"
            },
            "senegal": {
                "junior": "550 000 - 850 000 FCFA net/mois",
                "confirmed": "1 000 000 - 1 600 000 FCFA net/mois",
                "senior": "1 800 000 - 2 700 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Industriels de grande consommation (FMCG), centrales d'achat de la grande distribution (hypermarchés, e-commerce).",
        "typicalDay": "Analyse des données de sorties de caisses et parts de marché, simulation d'un nouveau planogramme 3D pour un distributeur, négociation d'une exclusivité de promo.",
        "skills": {
            "technical": ["Analyse de données panels distributeurs (Circana, NielsenIQ)", "Logiciels de planogrammes (JDA Space Planning)", "Gestion d'assortiment et rentabilité au mètre linéaire", "Négociation commerciale en centrale d'achat", "Compréhension du shopper parcours"],
            "human": ["Excellente rigueur analytique", "Sens de la négociation partenariale", "Aisance avec les chiffres volumineux", "Pédagogie"]
        },
        "studies": {
            "france": ["Grandes Écoles de Commerce", "Master en Distribution et Relation Client (IAE, Universités, ESP)"],
            "senegal": ["Master Commerce & Distribution (Sup de Co Dakar, BEM Dakar, ISM)"]
        },
        "career": "Directeur de Catégorie, Directeur Trade Marketing, Directeur d'Enseigne ou Directeur Commercial.",
        "relatedJobSlugs": ["trade-marketing-manager", "chef-de-produit", "chef-de-projet-merchandising"],
        "resources": [
            {"title": "Fiche Métier ESP — Category Manager", "url": "https://espub.org/metiers/category-manager/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "La position exacte d'un produit en rayon (au niveau des yeux vs au niveau des pieds) peut faire varier ses ventes de plus de 40%.",
        "interests": ["J'aime analyser les comportements des consommateurs", "J'aime convaincre"],
        "connectedFamilies": ["commerce-marketing"]
    },
    {
        "id": "trade-marketing-manager",
        "slug": "trade-marketing-manager",
        "title": "Trade Marketing Manager",
        "icon": "🛒",
        "image": "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&auto=format&fit=crop&q=80",
        "familyId": "communication-marketing-medias-creation",
        "familyName": "Communication, Marketing, Médias & Création",
        "domainId": "marketing-strategie-marque",
        "domain": "Marketing & Stratégie de marque",
        "subdomain": "Trade Marketing",
        "shortDescription": "Crée des partenariats gagnant-gagnant entre la marque et les distributeurs pour booster l'écoulement des stocks.",
        "longDescription": "Le Trade Marketing Manager conçoit et déploie la stratégie marketing spécifiquement dédiée au réseau de distribution (grossistes, magasins, plateformes e-commerce). Il développe des opérations promotionnelles sur-mesure pour chaque enseigne, optimise la visibilité des produits en rayon, conçoit des animations de vente attractives et forme les conseillers de vente pour valoriser les points forts de la marque.",
        "level": "Bac+5 (École de commerce, Master Marketing & Négociation)",
        "salary": {
            "france": {
                "junior": "2 900 € - 3 600 € brut/mois",
                "confirmed": "3 800 € - 4 900 € brut/mois",
                "senior": "5 200 € - 6 700 € brut/mois",
                "currency": "EUR",
                "period": "mois"
            },
            "senegal": {
                "junior": "550 000 - 850 000 FCFA net/mois",
                "confirmed": "1 000 000 - 1 600 000 FCFA net/mois",
                "senior": "1 800 000 - 2 700 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Industrie des biens de grande consommation, cosmétique, électronique, textile, alimentation.",
        "typicalDay": "Négociation d'une opération catalogue avec un grand distributeur, mise au point d'un jeu-concours en magasin, suivi logistique des kits promotionnels.",
        "skills": {
            "technical": ["Négociation avec la distribution", "Conception de mécaniques promotionnelles enseignes", "Gestion budgétaire Trade", "Coordination entre marketing produit et force de vente", "Analyse des retombées en volume"],
            "human": ["Sens aigu du partenariat", "Réactivité commerciale", "Organisation et sens logistique", "Aisance relationnelle"]
        },
        "studies": {
            "france": ["Grandes Écoles de Commerce", "Master Marketing Opérationnel et Distribution (ESP, ISCOM, IAE)"],
            "senegal": ["Master Marketing & Distribution (Sup de Co Dakar, BEM Dakar, ISM)"]
        },
        "career": "Directeur Trade Marketing, Directeur Commercial ou Directeur de Réseau.",
        "relatedJobSlugs": ["category-manager", "responsable-marketing-operationnel", "chef-de-projet-merchandising"],
        "resources": [
            {"title": "Fiche Métier ESP — Trade Marketing Manager", "url": "https://espub.org/metiers/trade-marketing-manager/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "Le trade marketing transforme un distributeur en véritable allié stratégique plutôt qu'en simple revendeur de produits.",
        "interests": ["J'aime convaincre", "J'aime analyser les comportements des consommateurs"],
        "connectedFamilies": ["commerce-marketing"]
    },
    {
        "id": "chef-de-projet-merchandising",
        "slug": "chef-de-projet-merchandising",
        "title": "Chef de Projet Merchandising",
        "icon": "🛍️",
        "image": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=80",
        "familyId": "communication-marketing-medias-creation",
        "familyName": "Communication, Marketing, Médias & Création",
        "domainId": "marketing-strategie-marque",
        "domain": "Marketing & Stratégie de marque",
        "subdomain": "Merchandising",
        "shortDescription": "Met en scène les produits dans les points de vente pour rendre l'achat intuitif, fluide et irrésistible.",
        "longDescription": "Le Chef de Projet Merchandising est l'architecte de l'attractivité visuelle et commerciale du magasin. Il conçoit l'agencement des rayons, le choix des éclairages, la signalétique et le parcours client afin que les produits soient immédiatement repérés et désirés. Il élabore les guides de visual merchandising (book merchandising) et forme les équipes de vente à leur respect scrupuleux.",
        "level": "Bac+3 à Bac+5 (Design d'espace, Visual Merchandising, Marketing de distribution)",
        "salary": {
            "france": {
                "junior": "2 400 € - 3 000 € brut/mois",
                "confirmed": "3 200 € - 4 100 € brut/mois",
                "senior": "4 300 € - 5 500 € brut/mois",
                "currency": "EUR",
                "period": "mois"
            },
            "senegal": {
                "junior": "400 000 - 650 000 FCFA net/mois",
                "confirmed": "750 000 - 1 200 000 FCFA net/mois",
                "senior": "1 400 000 - 2 000 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Enseignes de prêt-à-porter, grands magasins, marques de luxe, cosmétique, distribution spécialisée.",
        "typicalDay": "Modélisation 3D d'une vitrine de Noël, visite surprise d'une boutique pour auditer l'implantation, mise à jour du book de directives pour les 50 magasins du réseau.",
        "skills": {
            "technical": ["Visual merchandising et scénographie de boutique", "Modélisation d'espace (Sketchup, Photoshop, InDesign)", "Psychologie du comportement d'achat shopper", "Élaboration de chartes et books merchandising", "Analyse de rentabilité au mètre carré"],
            "human": ["Sensibilité esthétique et du volume", "Sens aigu du détail visuel", "Sens du pragmatisme commercial", "Pédagogie de formation"]
        },
        "studies": {
            "france": ["Bachelor / Master Visual Merchandising (ESP, Negoventis, Écoles de design et de mode)", "Master Marketing de la Distribution"],
            "senegal": ["Licence/Master Marketing et Distribution Commerciale (Sup de Co Dakar, ISM)"]
        },
        "career": "Directeur Visual Merchandising, Directeur Concept Store ou Responsable Retail & Expérience Client.",
        "relatedJobSlugs": ["trade-marketing-manager", "category-manager", "designer-graphique"],
        "resources": [
            {"title": "Fiche Métier ESP — Merchandising", "url": "https://espub.org/metiers/chef-de-projet-merchandising/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "La musique d'ambiance, l'éclairage chaud et l'odeur d'un magasin font partie intégrante du merchandising sensoriel pour inciter le client à prolonger sa visite.",
        "interests": ["J'aime créer des visuels", "J'aime analyser les comportements des consommateurs"],
        "connectedFamilies": ["commerce-marketing"]
    },
    {
        "id": "charge-de-marketing-territorial",
        "slug": "charge-de-marketing-territorial",
        "title": "Chargé de Marketing Territorial",
        "icon": "🌍",
        "image": "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?w=800&auto=format&fit=crop&q=80",
        "familyId": "communication-marketing-medias-creation",
        "familyName": "Communication, Marketing, Médias & Création",
        "domainId": "marketing-strategie-marque",
        "domain": "Marketing & Stratégie de marque",
        "subdomain": "Marketing territorial & international",
        "shortDescription": "Fait rayonner l'attractivité d'une ville, région ou pays pour séduire talents, touristes et investisseurs.",
        "longDescription": "Le Chargé de Marketing Territorial applique les méthodes du marketing et du branding au développement des territoires. Il valorise les atouts économiques, touristiques et culturels d'une métropole ou d'une région pour convaincre des entreprises de s'y implanter, attirer des étudiants et des professionnels qualifiés, et booster le flux touristique international.",
        "level": "Bac+5 (Master Développement Territorial, Marketing Public, Sciences Po)",
        "salary": {
            "france": {
                "junior": "2 400 € - 3 000 € brut/mois",
                "confirmed": "3 100 € - 4 000 € brut/mois",
                "senior": "4 200 € - 5 400 € brut/mois",
                "currency": "EUR",
                "period": "mois"
            },
            "senegal": {
                "junior": "400 000 - 650 000 FCFA net/mois",
                "confirmed": "750 000 - 1 200 000 FCFA net/mois",
                "senior": "1 350 000 - 2 100 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Agences d'attractivité territoriale, conseils régionaux, métropoles, offices de tourisme, agences de promotion des investissements (APIX).",
        "typicalDay": "Conception d'une campagne de promotion à destination des investisseurs de la diaspora, accueil d'une délégation économique étrangère et analyse des retombées presse internationales.",
        "skills": {
            "technical": ["Techniques de branding territorial", "Coordination d'acteurs publics et privés", "Promotion touristique et économique", "Organisation de salons d'investissement", "Analyse socio-économique territoriale"],
            "human": ["Ferveur et passion pour son territoire", "Sens politique et diplomatique", "Aisance en langues étrangères", "Capacité à fédérer"]
        },
        "studies": {
            "france": ["Master Marketing Territorial (Sciences Po, IAE, ESP, Universités de géographie/aménagement)"],
            "senegal": ["Master en Aménagement et Développement des Territoires (UGB Saint-Louis, UCAD, BEM Dakar)"]
        },
        "career": "Directeur d'Agence d'Attractivité, Directeur du Tourisme et de l'Économie ou Conseiller en développement régional.",
        "relatedJobSlugs": ["brand-strategist", "responsable-communication", "coordinateur-de-congres-et-salons"],
        "resources": [
            {"title": "Fiche Métier ESP — Marketing territorial", "url": "https://espub.org/metiers/charge-de-marketing-territorial/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "La marque « OnlyLyon » ou la marque pays « Sénégal Teranga » sont des exemples emblématiques de marketing territorial réussi à l'échelle internationale.",
        "interests": ["J'aime convaincre", "J'aime les marques", "J'aime communiquer avec les gens"],
        "connectedFamilies": ["hotellerie-restauration-hospitalite", "droit-management"]
    }
]

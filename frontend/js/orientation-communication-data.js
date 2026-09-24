/**
 * MODULE OFFICIEL COMMUNICATION, MARKETING, MÉDIAS & CRÉATION
 * Base de données exhaustive : 6 Domaines Consolidés • 65 Fiches Métiers Haute Profondeur
 * Double ancrage France (€ brut/an) / Sénégal (FCFA net/mois)
 * Sources Principales de référence :
 * - École Supérieure de Publicité (ESP Métiers) : https://espub.org/metiers/ (94 profils vérifiés)
 * - Studyrama Fiches Métiers Communication : https://www.studyrama.com/formations/fiches-metiers/communication
 * Architecture optimisée : 0 doublons, consolidation sémantique, intégration Boussole & Recherche
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        const exported = factory();
        module.exports = exported;
        if (typeof global !== 'undefined') global.OrientationCommunicationData = exported;
        if (typeof window !== 'undefined') window.OrientationCommunicationData = exported;
    } else {
        root.OrientationCommunicationData = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    'use strict';

    const DOMAINS = [
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
        ],
        "jobsCount": 11
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
        ],
        "jobsCount": 12
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
        ],
        "jobsCount": 8
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
        ],
        "jobsCount": 13
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
        ],
        "jobsCount": 9
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
        ],
        "jobsCount": 12
    }
];

    const JOBS = [
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
            "technical": [
                "Rédaction persuasive & storytelling",
                "Maîtrise des outils PAO (Canva, InDesign)",
                "Gestion de CMS (WordPress)",
                "Gestion des réseaux sociaux",
                "Relations presse de base"
            ],
            "human": [
                "Excellente aisance relationnelle",
                "Créativité & curiosité",
                "Sens de l'écoute",
                "Rigueur et respect des délais",
                "Esprit d'équipe"
            ]
        },
        "studies": {
            "france": [
                "BTS Communication",
                "BUT Information-Communication",
                "Licence Information-Communication",
                "Master Communication d'Entreprise (CELSA, ISCOM, ESP, Sup de Pub)"
            ],
            "senegal": [
                "Licence en Communication d'Entreprise (CESTI Dakar, ISM, Sup de Co)",
                "Master en Stratégie de Communication (BEM Dakar, UGB Saint-Louis, UCAO)"
            ]
        },
        "career": "Évolution vers des postes de Responsable de la communication, Responsable communication digitale ou Consultant en agence.",
        "relatedJobSlugs": [
            "responsable-communication",
            "attache-de-presse",
            "content-manager",
            "community-manager"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Chargé de communication",
                "url": "https://espub.org/metiers/charge-de-communication/"
            },
            {
                "title": "Studyrama — Métiers de la communication",
                "url": "https://www.studyrama.com/formations/fiches-metiers/communication"
            }
        ],
        "sources": [
            "ESP École Supérieure de Publicité",
            "Studyrama",
            "AACC"
        ],
        "saviezVous": "Plus de 65% des chargés de communication jonglent aujourd'hui entre création de contenu visuel, pilotage digital et relations médias traditionnelles.",
        "interests": [
            "J'aime communiquer avec les gens",
            "J'aime écrire",
            "J'aime les marques"
        ],
        "connectedFamilies": [
            "lettres-langues-sciences-humaines",
            "commerce-marketing"
        ],
        "salaries": {
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
        "description": "Le Chargé de Communication est la voix opérationnelle d'une entreprise, d'une collectivité ou d'une association. Polyvalent, il décline la stratégie globale de communication sur le terrain : rédaction d'articles, création de newsletters, animation des réseaux sociaux, relations presse locales et organisation de rendez-vous d'information. Il veille à la cohérence de l'image de marque et mesure l'impact des actions menées."
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
            "technical": [
                "Planification stratégique de communication",
                "Management d'équipe pluridisciplinaire",
                "Gestion budgétaire & ROI",
                "Communication de crise",
                "Supervision des prestataires et agences"
            ],
            "human": [
                "Leadership & diplomatie",
                "Excellente communication orale",
                "Prise de recul stratégique",
                "Résistance au stress"
            ]
        },
        "studies": {
            "france": [
                "Master en Communication (CELSA, Sciences Po, ISCOM, ESP)",
                "Diplôme Grande École de Commerce (spécialisation marketing/com)"
            ],
            "senegal": [
                "Master professionnel Communication (CESTI, BEM Dakar, ISM, Sup de Co)",
                "Master en Management Stratégique (UCAD / CESAG)"
            ]
        },
        "career": "Évolution naturelle vers Directeur de la Communication (DirCom), Directeur des Affaires Publiques ou Directeur Général Adjoint.",
        "relatedJobSlugs": [
            "directeur-de-la-communication",
            "charge-de-communication",
            "responsable-communication-interne"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Responsable communication",
                "url": "https://espub.org/metiers/responsable-communication/"
            }
        ],
        "sources": [
            "ESP",
            "Studyrama",
            "AACC"
        ],
        "saviezVous": "Dans les grandes organisations, le responsable de communication est souvent le garant de la cohérence entre la marque employeur et la communication commerciale.",
        "interests": [
            "J'aime communiquer avec les gens",
            "J'aime convaincre",
            "J'aime les marques"
        ],
        "connectedFamilies": [
            "droit-management",
            "commerce-marketing"
        ],
        "salaries": {
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
        "description": "Le Responsable de la Communication définit et met en œuvre le plan de communication global de la structure. Bras droit de la direction générale, il veille à la notoriété, à l'attractivité et à la cohérence des prises de parole. Il manage l'équipe interne (graphistes, rédacteurs, chargés de projet), pilote les agences prestataires et arbitre les budgets entre actions digitales, événementielles et médias."
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
            "technical": [
                "Stratégie d'influence & affaires publiques",
                "Gouvernance de marque internationale",
                "Cellule de gestion de crise médiatique",
                "Communication financière & actionnariale",
                "Pilotage budgétaire de haut niveau"
            ],
            "human": [
                "Vision prospective",
                "Aisance oratoire et charisme",
                "Sang-froid exceptionnel",
                "Haute diplomatie"
            ]
        },
        "studies": {
            "france": [
                "CELSA Paris",
                "Sciences Po Paris",
                "Grandes Écoles de Commerce (HEC, ESSEC, ESCP)",
                "Universités de renom en Sciences de l'Information"
            ],
            "senegal": [
                "CESTI Dakar (Cycle supérieur)",
                "BEM Management School Dakar",
                "CESAG Dakar",
                "Sciences Po / Grandes écoles internationales"
            ]
        },
        "career": "Directeur Général d'agence, Conseiller ministériel, Membre du Conseil d'Administration ou Consultant senior en stratégie d'influence.",
        "relatedJobSlugs": [
            "responsable-communication",
            "consultant-en-communication-de-crise",
            "lobbyiste-consultant-en-affaires-publiques"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Directeur de la communication",
                "url": "https://espub.org/metiers/directeur-de-la-communication/"
            }
        ],
        "sources": [
            "ESP",
            "Sciences Po",
            "DirCom Réseau"
        ],
        "saviezVous": "Le Directeur de la Communication est souvent le premier porte-parole officiel sollicité par les journalistes lors d'événements majeurs touchant l'entreprise.",
        "interests": [
            "J'aime convaincre",
            "J'aime communiquer avec les gens",
            "J'aime les marques"
        ],
        "connectedFamilies": [
            "droit-management",
            "lettres-langues-sciences-humaines"
        ],
        "salaries": {
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
        "description": "Le Directeur de la Communication (Chief Communication Officer - CCO) siège au plus haut niveau de gouvernance. Il conçoit la doctrine de communication de l'organisation à l'échelle nationale et internationale. Il protège la réputation face aux crises, orchestre la diplomatie d'entreprise, porte les engagements RSE et insuffle la vision stratégique auprès des investisseurs, collaborateurs et citoyens."
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
            "technical": [
                "Animation d'intranet et réseaux sociaux d'entreprise",
                "Organisation de conventions et séminaires",
                "Conduite du changement",
                "Rédaction institutionnelle bienveillante",
                "Enquêtes de climat social"
            ],
            "human": [
                "Empathie et écoute active",
                "Sens pédagogique prononcé",
                "Facilité d'intégration",
                "Confidentialité absolue"
            ]
        },
        "studies": {
            "france": [
                "Master Communication des Organisations (CELSA, Université Paris-Dauphine, ESP, ISCOM)",
                "IAE en Management des RH & Communication"
            ],
            "senegal": [
                "Master Communication & RH (CESTI, ISM Dakar, BEM Dakar, Sup de Co Dakar)"
            ]
        },
        "career": "Directeur de la Communication, Directeur de l'Engagement et de la Culture, ou Consultant en conduite du changement.",
        "relatedJobSlugs": [
            "responsable-communication",
            "charge-de-communication",
            "consultant-rse"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Responsable communication interne",
                "url": "https://espub.org/metiers/responsable-communication-interne/"
            }
        ],
        "sources": [
            "ESP",
            "AFCI - Association Française de Communication Interne"
        ],
        "saviezVous": "La communication interne est aujourd'hui reconnue comme un levier direct de réduction du turnover et d'attractivité de la marque employeur.",
        "interests": [
            "J'aime communiquer avec les gens",
            "J'aime écrire"
        ],
        "connectedFamilies": [
            "droit-management"
        ],
        "salaries": {
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
        "description": "Le Responsable de la Communication Interne est le garant du sentiment d'appartenance et de l'alignement des équipes avec la vision de l'entreprise. Il conçoit les supports collaboratifs (intranet, journal interne, podcasts d'équipe), organise les conventions du personnel, les séminaires et accompagne les transformations managériales en étroite coopération avec les Ressources Humaines."
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
            "technical": [
                "Rédaction journalistique de communiqués",
                "Connaissance fine des rédactions et médias",
                "Techniques d'interview & média-training",
                "Outils de veille et revues de presse (Cision, Kantar)",
                "Organisation de conférences de presse"
            ],
            "human": [
                "Sens aigu du contact et de la persuasion",
                "Grande réactivité",
                "Ténacité et diplomatie",
                "Excellente mémoire relationnelle"
            ]
        },
        "studies": {
            "france": [
                "Licence Pro / Master Information-Communication",
                "Écoles de journalisme ou de communication (CELSA, ESP, ISCOM, EFAP)"
            ],
            "senegal": [
                "Diplôme du CESTI (section journalisme / communication)",
                "Licence/Master Communication des organisations (UGB, ISM, Sup de Co)"
            ]
        },
        "career": "Responsable des relations médias, Directeur de clientèle RP en agence, ou Consultant indépendant en relations publiques.",
        "relatedJobSlugs": [
            "responsable-relations-medias",
            "charge-de-relations-publiques",
            "consultant-rp"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Attaché de presse",
                "url": "https://espub.org/metiers/attache-de-presse/"
            }
        ],
        "sources": [
            "ESP",
            "Studyrama",
            "Syntec Conseil en Relations Publics"
        ],
        "saviezVous": "Un attaché de presse performant ne se contente pas d'envoyer un mail générique : il adapte son angle éditorial selon la ligne précise de chaque journaliste contacté.",
        "interests": [
            "J'aime écrire",
            "J'aime communiquer avec les gens",
            "J'aime convaincre"
        ],
        "connectedFamilies": [
            "lettres-langues-sciences-humaines"
        ],
        "salaries": {
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
        "description": "L'Attaché de Presse (ou Relations Presse / PR Manager) conçoit et diffuse l'actualité de son organisation auprès des journalistes de la presse écrite, de la télévision, de la radio et des médias en ligne. Il rédige les communiqués et dossiers de presse, organise les conférences de presse, coache les porte-paroles et analyse scrupuleusement les retombées médiatiques (revues de presse et équivalent publicitaire)."
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
            "technical": [
                "Stratégie médiatique nationale et internationale",
                "Média-training des dirigeants",
                "Gestion de réputation sous tension",
                "Maîtrise du droit de la presse",
                "Supervision d'agences RP globales"
            ],
            "human": [
                "Charisme et aplomb",
                "Clarté d'expression",
                "Esprit analytique rapide",
                "Fiabilité sans faille"
            ]
        },
        "studies": {
            "france": [
                "CELSA Paris",
                "Sciences Po",
                "Masters en communication stratégique (ESP, ISCOM, EFAP)"
            ],
            "senegal": [
                "CESTI Dakar",
                "Master en communication institutionnelle (BEM Dakar, ISM, Sup de Co)"
            ]
        },
        "career": "Directeur de la communication, Directeur des affaires publiques ou Porte-parole officiel.",
        "relatedJobSlugs": [
            "attache-de-presse",
            "directeur-de-la-communication",
            "consultant-en-communication-de-crise"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Responsable relations médias",
                "url": "https://espub.org/metiers/responsable-relations-medias/"
            }
        ],
        "sources": [
            "ESP",
            "Club de la Presse"
        ],
        "saviezVous": "La frontière entre relations presse et relations influenceurs s'estompe : le responsable médias intègre désormais les leaders d'opinion du web dans ses plans de diffusion.",
        "interests": [
            "J'aime convaincre",
            "J'aime communiquer avec les gens"
        ],
        "connectedFamilies": [
            "lettres-langues-sciences-humaines",
            "droit-management"
        ],
        "salaries": {
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
        "description": "Le Responsable des Relations Médias orchestre l'ensemble des relations entre l'organisation et le monde journalistique. Il définit la stratégie éditoriale médias, sélectionne les prises de parole clés, forme les dirigeants à l'exercice de l'interview et intervient directement en première ligne lors des sollicitations sensibles ou des polémiques pour cadrer les narratifs."
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
            "technical": [
                "Techniques de relations publiques & networking",
                "Protocoles d'accueil VIP et événements",
                "Marketing d'influence et partenariats",
                "Veille de réputation",
                "Aisance en négociation"
            ],
            "human": [
                "Sociabilité naturelle",
                "Élégance relationnelle",
                "Organisation méticuleuse",
                "Discrétion et entregent"
            ]
        },
        "studies": {
            "france": [
                "Licence Pro / Master Relations Publiques (ESP, ISCOM, EFAP, CELSA)"
            ],
            "senegal": [
                "Licence/Master Communication et Relations Publiques (ISM, CESTI, Sup de Co Dakar)"
            ]
        },
        "career": "Directeur de clientèle RP, Responsable des partenariats et du mécénat, ou Directeur des relations extérieures.",
        "relatedJobSlugs": [
            "attache-de-presse",
            "consultant-rp",
            "event-manager"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Chargé de relations publiques",
                "url": "https://espub.org/metiers/charge-de-relations-publiques/"
            }
        ],
        "sources": [
            "ESP",
            "Studyrama"
        ],
        "saviezVous": "Les relations publiques ne visent pas à vendre immédiatement un produit, mais à installer une confiance durable qui favorisera l'adhésion sur le long terme.",
        "interests": [
            "J'aime communiquer avec les gens",
            "J'aime convaincre"
        ],
        "connectedFamilies": [
            "commerce-marketing",
            "hotellerie-restauration-hospitalite"
        ],
        "salaries": {
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
        "description": "Le Chargé de Relations Publiques développe le réseau d'influence et le capital sympathie d'une marque. Au-delà des journalistes, il tisse des liens étroits avec des prescripteurs, des experts, des personnalités, des influenceurs et des partenaires institutionnels. Il conçoit des opérations de relations publiques ciblées (voyages d'information, réceptions VIP, tables rondes) pour renforcer la crédibilité de l'organisation."
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
            "technical": [
                "Conseil stratégique en image & influence",
                "Conception de tribunes d'experts et ghostwriting",
                "Recommandation d'agences et pitchs",
                "Analyse d'opinion et baromètres",
                "Gestion de portefeuille clients"
            ],
            "human": [
                "Excellente hauteur de vue",
                "Facilité d'adaptation sectorielle",
                "Culture générale approfondie",
                "Force de proposition"
            ]
        },
        "studies": {
            "france": [
                "Sciences Po / IEP",
                "CELSA Paris",
                "Écoles de communication spécialisées (ESP, ISCOM, Sup de Pub)"
            ],
            "senegal": [
                "Master Communication Stratégique (BEM Dakar, CESTI, ISM Dakar)"
            ]
        },
        "career": "Directeur de pôle en agence RP, Directeur Conseil, ou passage en entreprise comme Directeur de la Communication.",
        "relatedJobSlugs": [
            "charge-de-relations-publiques",
            "consultant-en-communication-de-crise",
            "lobbyiste-consultant-en-affaires-publiques"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Consultant RP",
                "url": "https://espub.org/metiers/consultant-rp/"
            }
        ],
        "sources": [
            "ESP",
            "Syntec Conseil en Relations Publics"
        ],
        "saviezVous": "Le terme officiel de la profession en France est désormais « Relations Publics » avec un « s », pour souligner la diversité des différents publics ciblés.",
        "interests": [
            "J'aime convaincre",
            "J'aime écrire",
            "J'aime communiquer avec les gens"
        ],
        "connectedFamilies": [
            "droit-management",
            "lettres-langues-sciences-humaines"
        ],
        "salaries": {
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
        "description": "Le Consultant RP exerce au sein d'une agence de conseil. Il accompagne un portefeuille d'entreprises clientes dans leur stratégie de réputation : positionnement des dirigeants, relations médias, gestion des controverses et création de contenu d'autorité (tribunes, livres blancs, études exclusives). Polyvalent et réactif, il sait s'adapter rapidement aux cultures de différents secteurs économiques."
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
            "technical": [
                "Méthodologie de cellule de crise",
                "Droit de la presse et contentieux",
                "Gestion du temps médiatique et des réseaux sociaux",
                "Média-training intensif sous stress",
                "Veille d'opinion et détection de signaux faibles"
            ],
            "human": [
                "Calme olympien sous la pression",
                "Capacité d'analyse immédiate",
                "Fermeté et autorité naturelle",
                "Totale discrétion"
            ]
        },
        "studies": {
            "france": [
                "Sciences Po / IEP (Affaires Publiques)",
                "CELSA Paris",
                "Master en Droit / Sciences Politiques",
                "Formations spécialisées ESP / ISCOM"
            ],
            "senegal": [
                "Master en Sciences Politiques ou Droit (UCAD)",
                "Master Communication Stratégique (BEM Dakar, CESTI)"
            ]
        },
        "career": "Directeur de cabinet, Directeur de la communication de crise en grand groupe ou Associé de cabinet d'affaires publiques.",
        "relatedJobSlugs": [
            "directeur-de-la-communication",
            "lobbyiste-consultant-en-affaires-publiques",
            "consultant-rp"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Communication de crise",
                "url": "https://espub.org/metiers/consultant-en-communication-de-crise/"
            }
        ],
        "sources": [
            "ESP",
            "Sciences Po",
            "Syntec Conseil"
        ],
        "saviezVous": "La règle d'or en communication de crise : une réaction non préparée dans la première heure peut aggraver la crise de plus de 80% face à l'opinion publique.",
        "interests": [
            "J'aime convaincre",
            "J'aime communiquer avec les gens"
        ],
        "connectedFamilies": [
            "droit-management",
            "lettres-langues-sciences-humaines"
        ],
        "salaries": {
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
        "description": "Le Consultant en Communication de Crise intervient lorsque la réputation ou la survie d'une organisation est menacée : cyberattaque, accident industriel, scandale financier, rappel de produit ou polémique sur les réseaux sociaux. En amont, il rédige les manuels de crise et anime des simulations immersives. En période de crise, il pilote la cellule d'urgence, prépare les éléments de langage et coache les porte-paroles sous haute tension."
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
            "technical": [
                "Procédure législative et réglementaire",
                "Droit public et communautaire",
                "Rédaction juridique et plaidoyer politique",
                "Cartographie d'acteurs décisionnels",
                "Déontologie et conformité HATVP"
            ],
            "human": [
                "Excellente rhétorique et force d'argumentation",
                "Réseau et sens politique",
                "Persévérance et patience",
                "Éthique irréprochable"
            ]
        },
        "studies": {
            "france": [
                "Sciences Po Paris / IEP",
                "Master en Droit Public ou Affaires Publiques",
                "Écoles de communication (spécialisation lobbying ESP, ISCOM, EFAP)"
            ],
            "senegal": [
                "Master Droit Public / Relations Internationales (UCAD, UGB)",
                "Sciences Po Dakar / BEM School of Governance"
            ]
        },
        "career": "Directeur des Affaires Publiques et Juridiques, Délégué Général de fédération patronale, ou Conseiller diplomatique.",
        "relatedJobSlugs": [
            "directeur-de-la-communication",
            "consultant-en-communication-de-crise",
            "consultant-rse"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Affaires publiques & Lobbying",
                "url": "https://espub.org/metiers/lobbyiste-consultant-en-affaires-publiques/"
            }
        ],
        "sources": [
            "ESP",
            "Haute Autorité pour la Transparence de la Vie Publique (HATVP)"
        ],
        "saviezVous": "En France, les représentants d'intérêts doivent obligatoirement déclarer leurs activités et leurs rencontres avec les décideurs publics sur le répertoire public de la HATVP.",
        "interests": [
            "J'aime convaincre",
            "J'aime communiquer avec les gens"
        ],
        "connectedFamilies": [
            "droit-management",
            "lettres-langues-sciences-humaines"
        ],
        "salaries": {
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
        "description": "Le Lobbyiste (ou Consultant en Affaires Publiques) assure le pont entre le monde économique et les pouvoirs publics (parlementaires, ministères, régulateurs, institutions européennes ou régionales). Il analyse les projets de lois, rédige des amendements argumentés, produit des études d'impact socio-économique et sensibilise les élus aux réalités de terrain de son secteur, dans le respect des registres de transparence."
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
            "technical": [
                "Normes ESG & directive européenne CSRD",
                "Méthodologie du Bilan Carbone",
                "Règles déontologiques anti-greenwashing (ARPP / ADEME)",
                "Communication d'engagement et labels durables",
                "Concertation avec les ONG"
            ],
            "human": [
                "Conviction environnementale",
                "Rigueur de vérification des faits",
                "Pédagogie et esprit d'influence",
                "Sens du dialogue"
            ]
        },
        "studies": {
            "france": [
                "Master Développement Durable & RSE (Université Paris-Dauphine, Sciences Po)",
                "Écoles de commerce et de communication (ESP, Sup de Pub, ISCOM)"
            ],
            "senegal": [
                "Master RSE & Développement Durable (BEM Dakar, ISM, CESAG, UCAD)"
            ]
        },
        "career": "Directeur de la RSE et de la Durabilité, Directeur de la Communication Responsable ou Fondateur de cabinet de conseil à impact.",
        "relatedJobSlugs": [
            "responsable-communication",
            "directeur-de-la-communication",
            "lobbyiste-consultant-en-affaires-publiques"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Consultant RSE",
                "url": "https://espub.org/metiers/consultant-rse/"
            }
        ],
        "sources": [
            "ESP",
            "ADEME",
            "ARPP"
        ],
        "saviezVous": "La directive européenne CSRD oblige désormais des milliers d'entreprises à faire auditer leurs données extra-financières aussi rigoureusement que leurs comptes financiers.",
        "interests": [
            "J'aime la nature et l'environnement",
            "J'aime convaincre",
            "J'aime communiquer avec les gens"
        ],
        "connectedFamilies": [
            "environnement-developpement-durable",
            "droit-management"
        ],
        "salaries": {
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
        "description": "Le Consultant RSE & Communication Responsable aide les entreprises à structurer et faire connaître leurs démarches environnementales, sociales et de gouvernance (ESG). Il veille scrupuleusement à bannir le « greenwashing », rédige le rapport de durabilité (norme CSRD), anime les dialogues avec les parties prenantes et forme les équipes marketing aux règles de l'éco-communication."
    },
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
            "technical": [
                "Analyse des données de vente et KPIs",
                "Études de marché et veille concurrentielle",
                "Conception d'opérations promotionnelles",
                "Maîtrise d'Excel et outils BI",
                "Coordination des ventes et du terrain"
            ],
            "human": [
                "Esprit d'analyse et sens des chiffres",
                "Sensibilité commerciale",
                "Créativité pragmatique",
                "Sens de l'organisation"
            ]
        },
        "studies": {
            "france": [
                "BUT Techniques de Commercialisation",
                "Bachelor en Marketing (ESP, ISCOM, Écoles de commerce)",
                "Master Marketing (IAE, Universités)"
            ],
            "senegal": [
                "Licence en Marketing & Vente (Sup de Co Dakar, ISM, BEM Dakar)",
                "Master Marketing Opérationnel (CESAG, UCAD)"
            ]
        },
        "career": "Responsable marketing opérationnel, Chef de produit ou Brand Manager.",
        "relatedJobSlugs": [
            "responsable-marketing",
            "chef-de-produit",
            "trade-marketing-manager"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Chargé de marketing",
                "url": "https://espub.org/metiers/charge-de-marketing/"
            }
        ],
        "sources": [
            "ESP",
            "Studyrama"
        ],
        "saviezVous": "Le marketing moderne combine à 50/50 l'intuition créative et l'analyse rigoureuse des données comportementales des utilisateurs.",
        "interests": [
            "J'aime analyser les comportements des consommateurs",
            "J'aime les marques"
        ],
        "connectedFamilies": [
            "commerce-marketing"
        ],
        "salaries": {
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
        "description": "Le Chargé de Marketing coordonne au quotidien la mise en œuvre des actions destinées à promouvoir une offre, conquérir des clients et fidéliser la base existante. Il réalise des études de marché, analyse les ventes, conçoit les fiches argumentaires commerciales, supervise la diffusion des offres promotionnelles et suit de près les indicateurs clés de rentabilité (KPIs)."
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
            "technical": [
                "Plan marketing stratégique à 3 ans",
                "Gestion de compte de résultat (P&L produit)",
                "Politique tarifaire et élasticité prix",
                "Management d'équipe marketing",
                "Gestion de la relation client"
            ],
            "human": [
                "Vision stratégique claire",
                "Aisance managériale",
                "Culture du résultat et des données",
                "Sens de l'anticipation"
            ]
        },
        "studies": {
            "france": [
                "Grandes Écoles de Commerce (spécialisation marketing stratégique)",
                "Master en Marketing et Stratégie (IAE, Universités, ESP)"
            ],
            "senegal": [
                "Master Marketing Stratégique (BEM Dakar, Sup de Co Dakar, ISM, CESAG)"
            ]
        },
        "career": "Directeur Marketing (CMO), Directeur Commercial & Marketing ou Directeur de Business Unit.",
        "relatedJobSlugs": [
            "directeur-marketing",
            "chef-de-produit",
            "brand-manager"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Responsable marketing",
                "url": "https://espub.org/metiers/responsable-marketing/"
            }
        ],
        "sources": [
            "ESP",
            "Association Française du Marketing (AFM)"
        ],
        "saviezVous": "Un bon responsable marketing sait autant regarder les études de panels de consommateurs que tester directement les produits avec les clients finaux.",
        "interests": [
            "J'aime analyser les comportements des consommateurs",
            "J'aime les marques",
            "J'aime convaincre"
        ],
        "connectedFamilies": [
            "commerce-marketing",
            "droit-management"
        ],
        "salaries": {
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
        "description": "Le Responsable Marketing orchestre l'ensemble de la démarche commerciale et d'image d'une gamme ou d'une entreprise. Il identifie les opportunités de croissance, fixe la politique de prix (pricing), optimise le mix marketing (produit, prix, distribution, promotion) et pilote la rentabilité des investissements marketing tout en manageant les chefs de produit et chargés de marketing."
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
            "technical": [
                "Vision stratégique internationale",
                "Gestion de P&L à plusieurs millions d'euros",
                "Gouvernance de portefeuille de marques",
                "Transformation digitale & MarTech",
                "Marketing axé sur la valeur client (CLV)"
            ],
            "human": [
                "Leadership visionnaire",
                "Excellente aptitude à la négociation",
                "Culture de l'innovation audacieuse",
                "Résilience et sens du collectif"
            ]
        },
        "studies": {
            "france": [
                "Grandes Écoles de Commerce (HEC, ESSEC, ESCP, EM Lyon, EDHEC)",
                "Sciences Po",
                "Masters d'excellence en Marketing"
            ],
            "senegal": [
                "BEM Management School Dakar",
                "CESAG Dakar",
                "Grandes universités et écoles internationales"
            ]
        },
        "career": "Directeur Général d'entreprise (CEO), Administrateur de société ou Membre de fonds d'investissement.",
        "relatedJobSlugs": [
            "responsable-marketing",
            "brand-manager",
            "directeur-de-la-communication"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Directeur marketing",
                "url": "https://espub.org/metiers/directeur-marketing/"
            }
        ],
        "sources": [
            "ESP",
            "CMO Council"
        ],
        "saviezVous": "Le rôle du CMO s'est considérablement enrichi : il est désormais co-responsable de l'expérience client globale et de l'intégration de l'IA prédictive dans le commerce.",
        "interests": [
            "J'aime les marques",
            "J'aime analyser les comportements des consommateurs",
            "J'aime convaincre"
        ],
        "connectedFamilies": [
            "commerce-marketing",
            "droit-management"
        ],
        "salaries": {
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
        "description": "Le Directeur Marketing (Chief Marketing Officer - CMO) impulse la vision consommateur au plus haut niveau de l'entreprise. Il anticipe les mutations de marché, pilote la politique d'innovation produits et services, arbitre les budgets à grande échelle et orchestre la synergie entre marketing traditionnel, digital, data et communication de marque pour pérenniser la profitabilité de l'organisation."
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
            "technical": [
                "Analyse de panels de distributeurs et consommateurs",
                "Élaboration de mix marketing complet (4P/7P)",
                "Coordination R&D, juridique et supply chain",
                "Calcul de marge brute et rentabilité",
                "Argumentaires de vente pour la force commerciale"
            ],
            "human": [
                "Capacité à fédérer des métiers très différents",
                "Créativité orientée marché",
                "Sens du détail",
                "Dynamisme et passion produit"
            ]
        },
        "studies": {
            "france": [
                "Grandes Écoles de Commerce",
                "Master Marketing Produit (IAE, Universités, ESP)",
                "Double diplôme Ingénieur-Manager"
            ],
            "senegal": [
                "Master Marketing & Management de Produit (BEM Dakar, ISM, Sup de Co Dakar)"
            ]
        },
        "career": "Chef de groupe produits, Responsable marketing produit, Brand Manager ou Category Manager.",
        "relatedJobSlugs": [
            "responsable-marketing-produit",
            "brand-manager",
            "category-manager"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Chef de produit",
                "url": "https://espub.org/metiers/chef-de-produit/"
            }
        ],
        "sources": [
            "ESP",
            "Studyrama"
        ],
        "saviezVous": "Le chef de produit passe environ un tiers de son temps en réunion de coordination pour faire dialoguer les ingénieurs R&D, les designers et les vendeurs.",
        "interests": [
            "J'aime les marques",
            "J'aime analyser les comportements des consommateurs"
        ],
        "connectedFamilies": [
            "commerce-marketing",
            "industrie-mecanique"
        ],
        "salaries": {
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
        "description": "Le Chef de Produit est souvent comparé au « chef d'orchestre » de son produit ou service. Il analyse les besoins des consommateurs, rédige le cahier des charges avec les équipes R&D et design, teste les prototypes, définit le packaging et le prix, puis conçoit le plan de lancement promotionnel. Il suit au jour le jour les volumes de vente, la rentabilité et propose les évolutions nécessaires."
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
            "technical": [
                "Management de portefeuille de produits",
                "Management hiérarchique et transversal",
                "Stratégie d'extension de gamme",
                "Gestion budgétaire globale",
                "Analyses prédictives de marché"
            ],
            "human": [
                "Sens aigu des priorités économiques",
                "Leadership d'équipe",
                "Aisance de négociation",
                "Vision stratégique"
            ]
        },
        "studies": {
            "france": [
                "Grandes Écoles de Commerce",
                "Master Marketing Stratégique (CELSA, ESP, IAE)"
            ],
            "senegal": [
                "Master en Management Stratégique & Marketing (BEM Dakar, Sup de Co Dakar, ISM)"
            ]
        },
        "career": "Directeur Marketing, Directeur de Division Produit ou Directeur Général de Filiale.",
        "relatedJobSlugs": [
            "chef-de-produit",
            "responsable-marketing",
            "category-manager"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Marketing produit",
                "url": "https://espub.org/metiers/responsable-marketing-produit/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "Savoir retirer du marché un produit vieillissant au bon moment est une décision stratégique tout aussi cruciale que de lancer une nouveauté.",
        "interests": [
            "J'aime les marques",
            "J'aime analyser les comportements des consommateurs"
        ],
        "connectedFamilies": [
            "commerce-marketing"
        ],
        "salaries": {
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
        "description": "Le Responsable Marketing Produit gère un portefeuille complet d'offres au sein d'une entreprise. Il garantit la cohérence entre les différents produits de la gamme, arbitre les investissements R&D selon le retour sur investissement attendu, et coordonne les lancements sur les différents marchés géographiques. Il manage une équipe de chefs de produits juniors et confirmés."
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
            "technical": [
                "Conception de campagnes promotionnelles terrain",
                "Gestion de la PLV et merchandising opérationnel",
                "Brief des prestataires fabricants et logisticiens",
                "Mesure du ROI des actions promotionnelles",
                "Synergie marketing-vente"
            ],
            "human": [
                "Grand sens pratique et réactivité",
                "Facilité de contact avec le terrain",
                "Goût du challenge commercial",
                "Rigueur d'exécution"
            ]
        },
        "studies": {
            "france": [
                "Écoles de commerce (ESP, ISCOM, IAE)",
                "Master en Marketing et Négociation Commerciale"
            ],
            "senegal": [
                "Master Marketing & Distribution (Sup de Co Dakar, ISM, BEM Dakar)"
            ]
        },
        "career": "Directeur Marketing Opérationnel, Trade Marketing Manager ou Directeur Commercial Régional.",
        "relatedJobSlugs": [
            "trade-marketing-manager",
            "charge-de-marketing",
            "chef-de-projet-merchandising"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Marketing opérationnel",
                "url": "https://espub.org/metiers/responsable-marketing-operationnel/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "Près de 70% des décisions d'achat se prennent directement devant le rayon : le marketing opérationnel est le moteur de cette décision ultime.",
        "interests": [
            "J'aime convaincre",
            "J'aime analyser les comportements des consommateurs"
        ],
        "connectedFamilies": [
            "commerce-marketing"
        ],
        "salaries": {
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
        "description": "Le Responsable Marketing Opérationnel assure la liaison directe entre la stratégie de marque et le terrain. Il conçoit les supports d'aide à la vente (PLV, kakémonos, catalogues), orchestre les animations commerciales en magasin, pilote les campagnes de promotion saisonnières et s'assure que la force de vente dispose de tous les leviers pour atteindre ses objectifs de chiffre d'affaires."
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
            "technical": [
                "Définition de plateforme de marque (Brand Platform)",
                "Storytelling de marque et tonalité rédactionnelle",
                "Gestion de partenariats et co-branding",
                "Études qualitatives d'image et de résonance",
                "Contrôle de conformité de l'identité visuelle"
            ],
            "human": [
                "Haute sensibilité esthétique et culturelle",
                "Passion pour la psychologie du consommateur",
                "Audace créative",
                "Sens aigu de l'élégance"
            ]
        },
        "studies": {
            "france": [
                "Grandes Écoles de Commerce",
                "CELSA Paris",
                "Écoles spécialisées en communication de marque (ESP, ISCOM, Sup de Pub)"
            ],
            "senegal": [
                "Master en Stratégie de Marque (BEM Dakar, Sup de Co Dakar, ISM)"
            ]
        },
        "career": "Directeur de la Marque (Brand Director), Directeur Marketing ou Directeur de la Création de Marque.",
        "relatedJobSlugs": [
            "brand-strategist",
            "responsable-marketing",
            "brand-content-manager"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Brand Manager",
                "url": "https://espub.org/metiers/brand-manager/"
            }
        ],
        "sources": [
            "ESP",
            "Studyrama"
        ],
        "saviezVous": "Une marque forte ne vend pas des fonctionnalités, elle propose une vision du monde à laquelle le client est fier de s'identifier.",
        "interests": [
            "J'aime les marques",
            "J'aime analyser les comportements des consommateurs",
            "J'aime créer des visuels"
        ],
        "connectedFamilies": [
            "commerce-marketing",
            "lettres-langues-sciences-humaines"
        ],
        "salaries": {
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
        "description": "Le Brand Manager est le gardien de l'identité et de l'âme d'une marque. Plus qu'un simple produit, il vend une histoire, un univers de valeurs et une émotion. Il veille à ce que chaque point de contact (publicité, packaging, réseaux sociaux, partenariats, événements) reflète parfaitement l'ADN de la marque. Il mène les études de notoriété et pilote les collaborations créatives avec les créateurs et agences."
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
            "technical": [
                "Analyse sociologique et prospective de consommation",
                "Élaboration de plateformes et manifestes de marque",
                "Benchmark concurrentiel approfondi",
                "Animation de workshops d'idéation",
                "Synthèse conceptuelle de haut niveau"
            ],
            "human": [
                "Curiosité intellectuelle insatiable",
                "Esprit de synthèse remarquable",
                "Éloquence et force de conviction",
                "Créativité conceptuelle"
            ]
        },
        "studies": {
            "france": [
                "CELSA Paris",
                "Sciences Po",
                "Grandes Écoles de Commerce (spécialisation branding)",
                "ESP / ISCOM"
            ],
            "senegal": [
                "Master en Stratégie d'Entreprise et Marque (BEM Dakar, ISM, CESAG)"
            ]
        },
        "career": "Directeur de la Stratégie de Marque, Head of Planning Stratégique ou Consultant indépendant en positionnement.",
        "relatedJobSlugs": [
            "brand-manager",
            "planneur-strategique",
            "directeur-marketing"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Brand Strategist",
                "url": "https://espub.org/metiers/brand-strategist/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "Les marques les plus résilientes au monde sont celles dont la stratégie de marque a su anticiper un changement sociétal majeur 5 ans avant la concurrence.",
        "interests": [
            "J'aime les marques",
            "J'aime analyser les comportements des consommateurs",
            "J'aime écrire"
        ],
        "connectedFamilies": [
            "lettres-langues-sciences-humaines",
            "commerce-marketing"
        ],
        "salaries": {
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
        "description": "Le Brand Strategist travaille en amont de toute création publicitaire. Véritable sociologue de la consommation, il analyse les mutations de société, les nouveaux usages et les attentes de sens des nouvelles générations pour définir la « raison d'être » (purpose) et le territoire stratégique d'une marque. Ses recommandations orientent les décisions des dirigeants et inspirent les directeurs artistiques."
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
            "technical": [
                "Analyse de données panels distributeurs (Circana, NielsenIQ)",
                "Logiciels de planogrammes (JDA Space Planning)",
                "Gestion d'assortiment et rentabilité au mètre linéaire",
                "Négociation commerciale en centrale d'achat",
                "Compréhension du shopper parcours"
            ],
            "human": [
                "Excellente rigueur analytique",
                "Sens de la négociation partenariale",
                "Aisance avec les chiffres volumineux",
                "Pédagogie"
            ]
        },
        "studies": {
            "france": [
                "Grandes Écoles de Commerce",
                "Master en Distribution et Relation Client (IAE, Universités, ESP)"
            ],
            "senegal": [
                "Master Commerce & Distribution (Sup de Co Dakar, BEM Dakar, ISM)"
            ]
        },
        "career": "Directeur de Catégorie, Directeur Trade Marketing, Directeur d'Enseigne ou Directeur Commercial.",
        "relatedJobSlugs": [
            "trade-marketing-manager",
            "chef-de-produit",
            "chef-de-projet-merchandising"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Category Manager",
                "url": "https://espub.org/metiers/category-manager/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "La position exacte d'un produit en rayon (au niveau des yeux vs au niveau des pieds) peut faire varier ses ventes de plus de 40%.",
        "interests": [
            "J'aime analyser les comportements des consommateurs",
            "J'aime convaincre"
        ],
        "connectedFamilies": [
            "commerce-marketing"
        ],
        "salaries": {
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
        "description": "Le Category Manager analyse une catégorie entière de produits (ex. les boissons fraîches, les soins du visage, le petit électroménager) non pas du seul point de vue d'une marque, mais pour l'ensemble du rayon. Il conseille les centrales d'achat de la grande distribution sur la composition idéale de l'assortiment, les plans d'implantation en rayon (planogrammes) et les promotions à organiser."
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
            "technical": [
                "Négociation avec la distribution",
                "Conception de mécaniques promotionnelles enseignes",
                "Gestion budgétaire Trade",
                "Coordination entre marketing produit et force de vente",
                "Analyse des retombées en volume"
            ],
            "human": [
                "Sens aigu du partenariat",
                "Réactivité commerciale",
                "Organisation et sens logistique",
                "Aisance relationnelle"
            ]
        },
        "studies": {
            "france": [
                "Grandes Écoles de Commerce",
                "Master Marketing Opérationnel et Distribution (ESP, ISCOM, IAE)"
            ],
            "senegal": [
                "Master Marketing & Distribution (Sup de Co Dakar, BEM Dakar, ISM)"
            ]
        },
        "career": "Directeur Trade Marketing, Directeur Commercial ou Directeur de Réseau.",
        "relatedJobSlugs": [
            "category-manager",
            "responsable-marketing-operationnel",
            "chef-de-projet-merchandising"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Trade Marketing Manager",
                "url": "https://espub.org/metiers/trade-marketing-manager/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "Le trade marketing transforme un distributeur en véritable allié stratégique plutôt qu'en simple revendeur de produits.",
        "interests": [
            "J'aime convaincre",
            "J'aime analyser les comportements des consommateurs"
        ],
        "connectedFamilies": [
            "commerce-marketing"
        ],
        "salaries": {
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
        "description": "Le Trade Marketing Manager conçoit et déploie la stratégie marketing spécifiquement dédiée au réseau de distribution (grossistes, magasins, plateformes e-commerce). Il développe des opérations promotionnelles sur-mesure pour chaque enseigne, optimise la visibilité des produits en rayon, conçoit des animations de vente attractives et forme les conseillers de vente pour valoriser les points forts de la marque."
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
            "technical": [
                "Visual merchandising et scénographie de boutique",
                "Modélisation d'espace (Sketchup, Photoshop, InDesign)",
                "Psychologie du comportement d'achat shopper",
                "Élaboration de chartes et books merchandising",
                "Analyse de rentabilité au mètre carré"
            ],
            "human": [
                "Sensibilité esthétique et du volume",
                "Sens aigu du détail visuel",
                "Sens du pragmatisme commercial",
                "Pédagogie de formation"
            ]
        },
        "studies": {
            "france": [
                "Bachelor / Master Visual Merchandising (ESP, Negoventis, Écoles de design et de mode)",
                "Master Marketing de la Distribution"
            ],
            "senegal": [
                "Licence/Master Marketing et Distribution Commerciale (Sup de Co Dakar, ISM)"
            ]
        },
        "career": "Directeur Visual Merchandising, Directeur Concept Store ou Responsable Retail & Expérience Client.",
        "relatedJobSlugs": [
            "trade-marketing-manager",
            "category-manager",
            "designer-graphique"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Merchandising",
                "url": "https://espub.org/metiers/chef-de-projet-merchandising/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "La musique d'ambiance, l'éclairage chaud et l'odeur d'un magasin font partie intégrante du merchandising sensoriel pour inciter le client à prolonger sa visite.",
        "interests": [
            "J'aime créer des visuels",
            "J'aime analyser les comportements des consommateurs"
        ],
        "connectedFamilies": [
            "commerce-marketing"
        ],
        "salaries": {
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
        "description": "Le Chef de Projet Merchandising est l'architecte de l'attractivité visuelle et commerciale du magasin. Il conçoit l'agencement des rayons, le choix des éclairages, la signalétique et le parcours client afin que les produits soient immédiatement repérés et désirés. Il élabore les guides de visual merchandising (book merchandising) et forme les équipes de vente à leur respect scrupuleux."
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
            "technical": [
                "Techniques de branding territorial",
                "Coordination d'acteurs publics et privés",
                "Promotion touristique et économique",
                "Organisation de salons d'investissement",
                "Analyse socio-économique territoriale"
            ],
            "human": [
                "Ferveur et passion pour son territoire",
                "Sens politique et diplomatique",
                "Aisance en langues étrangères",
                "Capacité à fédérer"
            ]
        },
        "studies": {
            "france": [
                "Master Marketing Territorial (Sciences Po, IAE, ESP, Universités de géographie/aménagement)"
            ],
            "senegal": [
                "Master en Aménagement et Développement des Territoires (UGB Saint-Louis, UCAD, BEM Dakar)"
            ]
        },
        "career": "Directeur d'Agence d'Attractivité, Directeur du Tourisme et de l'Économie ou Conseiller en développement régional.",
        "relatedJobSlugs": [
            "brand-strategist",
            "responsable-communication",
            "coordinateur-de-congres-et-salons"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Marketing territorial",
                "url": "https://espub.org/metiers/charge-de-marketing-territorial/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "La marque « OnlyLyon » ou la marque pays « Sénégal Teranga » sont des exemples emblématiques de marketing territorial réussi à l'échelle internationale.",
        "interests": [
            "J'aime convaincre",
            "J'aime les marques",
            "J'aime communiquer avec les gens"
        ],
        "connectedFamilies": [
            "hotellerie-restauration-hospitalite",
            "droit-management"
        ],
        "salaries": {
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
        "description": "Le Chargé de Marketing Territorial applique les méthodes du marketing et du branding au développement des territoires. Il valorise les atouts économiques, touristiques et culturels d'une métropole ou d'une région pour convaincre des entreprises de s'y implanter, attirer des étudiants et des professionnels qualifiés, et booster le flux touristique international."
    },
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
            "technical": [
                "Google Analytics 4 & Tag Manager",
                "Publicité en ligne (Google Ads, Social Ads)",
                "Notions solides de SEO et CMS (WordPress, Shopify)",
                "Email marketing & CRM basique",
                "Maîtrise des KPIs de rentabilité (CPA, CPL, ROAS, LTV)"
            ],
            "human": [
                "Esprit analytique orienté chiffres",
                "Polyvalence et réactivité",
                "Curiosité technologique",
                "Sens de l'expérience utilisateur (UX)"
            ]
        },
        "studies": {
            "france": [
                "Bachelor / Master en Marketing Digital (ESP, Sup de Pub, ESD, IAE, Écoles de commerce)"
            ],
            "senegal": [
                "Licence / Master en Marketing Digital & E-commerce (Sup de Co Dakar, BEM Dakar, ISM, IAM)"
            ]
        },
        "career": "Évolution vers Head of Digital, Directeur Marketing Digital ou Consultant Senior en Stratégie Web.",
        "relatedJobSlugs": [
            "responsable-acquisition-digitale",
            "traffic-manager-digital",
            "responsable-ecommerce"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Webmarketer",
                "url": "https://espub.org/metiers/webmarketer/"
            },
            {
                "title": "Studyrama — Fiche métier Webmarketer",
                "url": "https://www.studyrama.com/formations/fiches-metiers/communication/webmarketer"
            }
        ],
        "sources": [
            "ESP",
            "Studyrama"
        ],
        "saviezVous": "Le webmarketing allie rigueur scientifique des tests mathématiques et intuition psychologique pour décrypter ce qui pousse un internaute à passer à l'action.",
        "interests": [
            "J'aime les données et les chiffres",
            "J'aime la technologie",
            "J'aime les marques"
        ],
        "connectedFamilies": [
            "informatique-numerique"
        ],
        "salary": {
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
        "longDescription": "Le Webmarketer conçoit, déploie et optimise l'ensemble de la stratégie marketing sur les canaux numériques afin de développer la notoriété en ligne, attirer des prospects qualifiés et maximiser les conversions et les ventes.",
        "domain": "Marketing Digital & Acquisition",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "💻"
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
            "technical": [
                "Excellence sur Google Ads & Meta Ads Manager",
                "Analyse fine des cohortes et CAC/LTV",
                "Connaissance poussée des algorithmes d'enchères",
                "Attribution data-driven & Tracking server-side",
                "Outils d'AB testing et CRO"
            ],
            "human": [
                "Obsession du résultat chiffré",
                "Résistance à la pression budgétaire",
                "Agilité intellectuelle",
                "Vision business affûtée"
            ]
        },
        "studies": {
            "france": [
                "Master en Marketing Digital / Data Marketing (ESP, HEC, ESCP, Dauphine, écoles d'ingénieurs)"
            ],
            "senegal": [
                "Master Spécialisé en Stratégie Digitale & Growth (BEM Dakar, ISM, Sup de Co Dakar)"
            ]
        },
        "career": "Directeur Marketing (CMO), Chief Growth Officer (CGO) ou Directeur du Revenu (CRO).",
        "relatedJobSlugs": [
            "traffic-manager-digital",
            "social-ads-manager",
            "data-analyst-marketing"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Responsable d'acquisition",
                "url": "https://espub.org/metiers/responsable-dacquisition/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "Dans les startups à forte croissance, le Head of Acquisition gère parfois des budgets publicitaires mensuels dépassant plusieurs centaines de milliers d'euros.",
        "interests": [
            "J'aime les données et les chiffres",
            "J'aime la technologie",
            "J'aime convaincre"
        ],
        "connectedFamilies": [
            "informatique-numerique",
            "droit-management"
        ],
        "salary": {
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
        "longDescription": "Le Responsable Acquisition Digitale a pour unique mission d'optimiser l'entonnoir d'acquisition de nouveaux clients et utilisateurs au coût par acquisition (CPA) le plus bas possible et au meilleur rendement sur dépenses publicitaires (ROAS).",
        "domain": "Marketing Digital & Acquisition",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "💻"
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
            "technical": [
                "Meta Ads Manager, TikTok Ads, LinkedIn Campaign Manager",
                "Tracking CAPI & pixels",
                "Connaissance des formats publicitaires immersifs",
                "Notions de copywriting d'accroche",
                "Reporting sur Looker Studio ou Tableau"
            ],
            "human": [
                "Créativité couplée à la rigueur mathématique",
                "Grande réactivité",
                "Curiosité pour les tendances de pop-culture",
                "Capacité de vulgarisation"
            ]
        },
        "studies": {
            "france": [
                "Bachelor / Master Publicité Digitale & Réseaux Sociaux (ESP, Sup de Pub, ISCOM)"
            ],
            "senegal": [
                "Licence / Master en Communication Digitale & Community/Ads (ISM, Sup de Co Dakar, BEM)"
            ]
        },
        "career": "Head of Social Ads, Lead Media Buyer ou Directeur de Pôle Média Social en agence.",
        "relatedJobSlugs": [
            "responsable-acquisition-digitale",
            "traffic-manager-digital",
            "concepteur-redacteur"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Social Ads Manager",
                "url": "https://espub.org/metiers/social-ads-manager/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "Sur TikTok et Instagram Reels, les 2 premières secondes d'une publicité vidéo (« le hook ») déterminent plus de 80 % de son succès commercial.",
        "interests": [
            "J'aime les réseaux sociaux",
            "J'aime les données et les chiffres",
            "J'aime créer des visuels"
        ],
        "connectedFamilies": [
            "informatique-numerique"
        ],
        "salary": {
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
        "longDescription": "Le Social Ads Manager conçoit, configure, lance et optimise les campagnes publicitaires sponsorisées sur les plateformes sociales (Meta Ads, TikTok Ads, LinkedIn Ads, Pinterest, Snapchat) pour générer notoriété, trafic et conversions.",
        "domain": "Marketing Digital & Acquisition",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "💻"
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
            "technical": [
                "Logiciels d'emailing (Klaviyo, Brevo, Mailchimp, HubSpot, Salesforce Marketing Cloud)",
                "Bases de HTML/CSS pour templates responsives",
                "Segmentation et gestion de bases de données",
                "Copywriting d'objets d'emails captivants",
                "Règles RGPD et gestion des consentements"
            ],
            "human": [
                "Empathie et écoute du client",
                "Sens du détail rédactionnel",
                "Rigueur méthodologique",
                "Affinité avec la psychologie de vente"
            ]
        },
        "studies": {
            "france": [
                "Bachelor / Master Marketing Digital & Relation Client (ESP, IAE, Écoles de commerce)"
            ],
            "senegal": [
                "Licence / Master en Marketing & Commerce Électronique (BEM Dakar, ISM, Sup de Co)"
            ]
        },
        "career": "Responsable CRM, Responsable Rétention & Fidélisation ou Chef de Projet Marketing Automation.",
        "relatedJobSlugs": [
            "responsable-crm",
            "webmarketer",
            "ux-writer-copywriter-digital"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Responsable Email Marketing",
                "url": "https://espub.org/metiers/responsable-email-marketing/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "L'email marketing conserve historiquement le meilleur retour sur investissement (ROI) de tout le marketing digital, avec en moyenne 36 à 40 € de revenus générés par euro investi.",
        "interests": [
            "J'aime écrire des textes",
            "J'aime convaincre",
            "J'aime les données et les chiffres"
        ],
        "connectedFamilies": [
            "informatique-numerique"
        ],
        "salary": {
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
        "longDescription": "L'Email Marketing Manager conçoit, scénarise et analyse les campagnes d'emailing et de newsletters pour fidéliser la base de contacts, réactiver les clients inactifs et générer du chiffre d'affaires incrémental récurrent.",
        "domain": "Marketing Digital & Acquisition",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "💻"
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
            "technical": [
                "Maîtrise d'un outil CRM majeur (Salesforce, HubSpot, Adobe Campaign)",
                "Connaissance des bases relationnelles SQL",
                "Modélisation de parcours clients (Customer Journey Mapping)",
                "Analyse RFM (Récence, Fréquence, Montant)",
                "Connaissance de la réglementation des données personnelles"
            ],
            "human": [
                "Orientation client absolue",
                "Vision transverse et collaborative",
                "Esprit analytique poussé",
                "Pédagogie et communication claire"
            ]
        },
        "studies": {
            "france": [
                "Master en Marketing & Gestion de la Relation Client (ESP, IAE, Audencia, Neoma, Dauphine)"
            ],
            "senegal": [
                "Master en Marketing Relationnel & Data Client (BEM Dakar, IAM, Sup de Co Dakar)"
            ]
        },
        "career": "Directeur CRM & Data Client, Directeur de l'Expérience Client (CX) ou Chief Customer Officer (CCO).",
        "relatedJobSlugs": [
            "email-marketing-manager",
            "data-analyst-marketing",
            "responsable-experience-client"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Responsable CRM",
                "url": "https://espub.org/metiers/responsable-crm/"
            },
            {
                "title": "Studyrama — Fiche Responsable relation client",
                "url": "https://www.studyrama.com/formations/fiches-metiers/communication/responsable-relation-client"
            }
        ],
        "sources": [
            "ESP",
            "Studyrama"
        ],
        "saviezVous": "Acquérir un nouveau client coûte entre 5 et 7 fois plus cher que de fidéliser un client existant, ce qui place le CRM au centre de la rentabilité des entreprises.",
        "interests": [
            "J'aime les données et les chiffres",
            "J'aime communiquer avec les gens",
            "J'aime convaincre"
        ],
        "connectedFamilies": [
            "droit-management",
            "informatique-numerique"
        ],
        "salary": {
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
        "longDescription": "Le Responsable CRM (Customer Relationship Management) pilote la stratégie de gestion de la relation client de bout en bout afin d'augmenter la valeur vie client (Customer Lifetime Value), réduire le churn et transformer les clients en ambassadeurs.",
        "domain": "Marketing Digital & Acquisition",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "💻"
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
            "technical": [
                "SQL & manipulation de bases de données",
                "Google Analytics 4 & Google Tag Manager",
                "Outils de Data Visualization (Power BI, Tableau, Looker)",
                "Notions de Python ou R pour l'analyse statistique",
                "Compréhension fine des métriques marketing"
            ],
            "human": [
                "Rigueur et esprit critique",
                "Capacité de vulgarisation et storytelling de données",
                "Curiosité intellectuelle",
                "Goût pour la résolution de problèmes"
            ]
        },
        "studies": {
            "france": [
                "Master en Data Marketing / Économétrie / Statistiques (ESP, ENSAI, Dauphine, IAE, Télécom Paris)"
            ],
            "senegal": [
                "Master en Big Data & Analytics appliqué au Business (BEM Dakar, UCAD FASEG, ESP Dakar, ISM)"
            ]
        },
        "career": "Lead Data Analyst, Head of Marketing Intelligence ou Chief Data Officer (CDO).",
        "relatedJobSlugs": [
            "responsable-acquisition-digitale",
            "webmarketer",
            "traffic-manager-digital"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Data Analyst Marketing",
                "url": "https://espub.org/metiers/data-analyst-marketing/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "La fin progressive des cookies tiers a rendu le rôle du Data Analyst Marketing encore plus crucial pour inventer de nouveaux modes de mesure respectueux de la vie privée.",
        "interests": [
            "J'aime les données et les chiffres",
            "J'aime résoudre des énigmes",
            "J'aime la technologie"
        ],
        "connectedFamilies": [
            "informatique-numerique"
        ],
        "salary": {
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
        "longDescription": "Le Data Analyst Marketing collecte, modélise et interprète les données issues des campagnes marketing, des sites web et des applications pour fournir des insights stratégiques concrets aux décideurs et optimiser les investissements.",
        "domain": "Marketing Digital & Acquisition",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "💻"
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
            "technical": [
                "CMS E-commerce (Shopify, Magento, Prestashop, Salesforce Commerce Cloud)",
                "E-merchandising et gestion de catalogue",
                "Google Analytics 4 & suivi des tunnels de commande",
                "Logistique e-commerce et gestion des retours",
                "Moyens de paiement en ligne et sécurité"
            ],
            "human": [
                "Fibre commerciale très prononcée",
                "Sens du client et de l'expérience d'achat",
                "Polyvalence et sens opérationnel",
                "Capacité à gérer les urgences techniques"
            ]
        },
        "studies": {
            "france": [
                "Master en E-commerce & Vente Omnicanale (ESP, Kedge, Neoma, Université Paris-Dauphine)"
            ],
            "senegal": [
                "Master en Commerce Électronique & Management Digital (BEM Dakar, Sup de Co, ISM)"
            ]
        },
        "career": "Directeur E-commerce & Digital, Directeur Omnicanal ou Directeur Général de marque DNVB.",
        "relatedJobSlugs": [
            "webmarketer",
            "responsable-merchandising",
            "responsable-acquisition-digitale"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Responsable e-commerce",
                "url": "https://espub.org/metiers/responsable-e-commerce/"
            },
            {
                "title": "Studyrama — Fiche Responsable e-commerce",
                "url": "https://www.studyrama.com/formations/fiches-metiers/communication/responsable-e-commerce"
            }
        ],
        "sources": [
            "ESP",
            "Studyrama"
        ],
        "saviezVous": "En Afrique de l'Ouest, l'intégration du paiement mobile (Wave, Orange Money) a révolutionné les taux de conversion des sites e-commerce locaux.",
        "interests": [
            "J'aime convaincre",
            "J'aime la technologie",
            "J'aime les données et les chiffres"
        ],
        "connectedFamilies": [
            "droit-management",
            "informatique-numerique"
        ],
        "salary": {
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
        "longDescription": "Le Responsable E-commerce gère le site de vente en ligne comme une véritable boutique digitale. Il pilote l'offre produit, le merchandising digital, les promotions et la chaîne logistique pour maximiser le chiffre d'affaires et la satisfaction client.",
        "domain": "Marketing Digital & Acquisition",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "💻"
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
            "technical": [
                "Maîtrise complète de Google Analytics 4 & Tag Manager",
                "Gestion des réseaux d'affiliation et des plateformes DSP",
                "Compréhension fine des cookies, UTM et paramètres d'URL",
                "Bases solides en SEO et SEA",
                "Analyse de rentabilité sur tableurs"
            ],
            "human": [
                "Rigueur chirurgicale",
                "Esprit analytique affûté",
                "Curiosité technique",
                "Réactivité face aux anomalies de trafic"
            ]
        },
        "studies": {
            "france": [
                "Licence Pro / Master E-marketing & Traffic Management (ESP, IAE, Université Sorbonne Nouvelle)"
            ],
            "senegal": [
                "Licence / Master en Marketing Digital & Gestion de Plateforme (Sup de Co, ISM, BEM)"
            ]
        },
        "career": "Responsable de l'Acquisition, Directeur du Trafic et des Médias Digitaux ou Consultant Analytics Indépendant.",
        "relatedJobSlugs": [
            "webmarketer",
            "responsable-acquisition-digitale",
            "data-analyst-marketing"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Traffic Manager",
                "url": "https://espub.org/metiers/traffic-manager/"
            },
            {
                "title": "Studyrama — Fiche Traffic Manager",
                "url": "https://www.studyrama.com/formations/fiches-metiers/communication/traffic-manager"
            }
        ],
        "sources": [
            "ESP",
            "Studyrama"
        ],
        "saviezVous": "Un bon Traffic Manager ne cherche pas le trafic le plus volumineux, mais le trafic le plus qualifié : 1 000 visiteurs très ciblés valent bien plus que 100 000 visiteurs désintéressés.",
        "interests": [
            "J'aime les données et les chiffres",
            "J'aime la technologie",
            "J'aime résoudre des énigmes"
        ],
        "connectedFamilies": [
            "informatique-numerique"
        ],
        "salary": {
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
        "longDescription": "Le Traffic Manager Digital a la charge d'orienter le maximum d'internautes qualifiés vers un site web ou une application mobile en orchestrant et en optimisant tous les leviers d'audience payants, partenaires et naturels.",
        "domain": "Marketing Digital & Acquisition",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "💻"
    },
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
            "technical": [
                "Compréhension aiguë de la chaîne graphique et de production audiovisuelle",
                "Gestion de projet publicitaire et budgétaire",
                "Techniques de pitch et de soutenance",
                "Culture publicitaire et créative solide",
                "Outils de gestion collaborative (Asana, Monday, Notion)"
            ],
            "human": [
                "Sens relationnel et diplomatie",
                "Résistance au stress et gestion des délais serrés",
                "Énergie communicative et enthousiasme",
                "Rigueur d'organisation"
            ]
        },
        "studies": {
            "france": [
                "Bachelor / Master Communication & Publicité (ESP, Sup de Pub, ISCOM, CELSA)"
            ],
            "senegal": [
                "Licence / Master en Communication & Publicité (Sup de Co Dakar, BEM Dakar, ISM, CESTI)"
            ]
        },
        "career": "Directeur de Clientèle, Directeur Commercial d'Agence ou Responsable Communication chez l'Annonceur.",
        "relatedJobSlugs": [
            "directeur-de-clientele",
            "planneur-strategique",
            "concepteur-redacteur"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Chef de publicité",
                "url": "https://espub.org/metiers/chef-de-publicite/"
            },
            {
                "title": "Studyrama — Fiche métier Chef de publicité",
                "url": "https://www.studyrama.com/formations/fiches-metiers/communication/chef-de-publicite"
            }
        ],
        "sources": [
            "ESP",
            "Studyrama"
        ],
        "saviezVous": "Le rôle du Chef de Publicité exige une empathie bilingue : savoir parler le langage business et financier du client tout en respectant l'audace et la sensibilité des créatifs.",
        "interests": [
            "J'aime convaincre",
            "J'aime communiquer avec les gens",
            "J'aime les marques"
        ],
        "connectedFamilies": [
            "droit-management"
        ],
        "salary": {
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
        "longDescription": "Le Chef de Publicité en agence est le chef d'orchestre opérationnel de la relation client. Il prend le brief de l'annonceur, coordonne l'équipe créative et média, respecte le planning et le budget pour faire naître des campagnes percutantes.",
        "domain": "Médias, Publicité & Contenu",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "📺"
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
            "technical": [
                "Vision stratégique 360° des marques",
                "Négociation de contrats complexes et gestion de P&L",
                "Leadership d'équipe créative et commerciale",
                "Excellence oratoire et charisme de soutenance",
                "Maîtrise du marché publicitaire et des tendances de consommation"
            ],
            "human": [
                "Hauteur de vue et intelligence relationnelle",
                "Capacité à inspirer confiance et leadership",
                "Résilience et goût du défi commercial",
                "Diplomatie sous haute tension"
            ]
        },
        "studies": {
            "france": [
                "Master Grande École de Commerce (HEC, ESCP, ESSEC) ou Master Spécialisé Publicité (ESP, CELSA, Sup de Pub)"
            ],
            "senegal": [
                "Master en Management des Organisations & Communication d'Entreprise (BEM Dakar, IAM, ISM)"
            ]
        },
        "career": "Directeur Général d'Agence, Associé (Partner) ou Vice-Président Marketing chez un grand annonceur.",
        "relatedJobSlugs": [
            "chef-de-publicite",
            "planneur-strategique",
            "directeur-de-creation"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Directeur de clientèle",
                "url": "https://espub.org/metiers/directeur-de-clientele/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "Remporter une grande compétition d'agence peut représenter des millions d'euros d'honoraires et mobiliser des dizaines d'experts pendant un mois de travail jour et nuit.",
        "interests": [
            "J'aime convaincre",
            "J'aime diriger une équipe",
            "J'aime les marques"
        ],
        "connectedFamilies": [
            "droit-management"
        ],
        "salary": {
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
        "longDescription": "Le Directeur de Clientèle pilote un portefeuille stratégique de comptes clients au sein d'une agence de publicité. Il supervise les chefs de publicité, conseille les comités de direction des marques et gère le développement commercial de l'agence.",
        "domain": "Médias, Publicité & Contenu",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "📺"
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
            "technical": [
                "Méthodologie des études qualitatives et quantitatives",
                "Veille sociologique, culturelle et sémiologique",
                "Capacité à synthétiser des données complexes en une formule percutante",
                "Culture générale encyclopédique",
                "Maîtrise des modèles de plateformes de marque"
            ],
            "human": [
                "Curiosité insatiable et esprit rebelle",
                "Capacité d'émerveillement et intuition aiguë",
                "Aisance rédactionnelle et verbale brillante",
                "Sensibilité esthétique"
            ]
        },
        "studies": {
            "france": [
                "Master en Planning Stratégique (ESP, CELSA, Sciences Po, Sup de Pub, Universités de Philosophie/Sociologie)"
            ],
            "senegal": [
                "Master en Stratégie de Communication & Sociologie des Médias (CESTI UCAD, BEM Dakar, ISM)"
            ]
        },
        "career": "Directeur du Planning Stratégique, Brand Strategist International ou Directeur de la Stratégie de Marque.",
        "relatedJobSlugs": [
            "brand-strategist",
            "concepteur-redacteur",
            "directeur-de-clientele"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Planneur stratégique",
                "url": "https://espub.org/metiers/planneur-strategique/"
            },
            {
                "title": "Studyrama — Fiche métier Planneur stratégique",
                "url": "https://www.studyrama.com/formations/fiches-metiers/communication/planneur-strategique"
            }
        ],
        "sources": [
            "ESP",
            "Studyrama"
        ],
        "saviezVous": "La célèbre campagne « Think Different » d'Apple ou « Just Do It » de Nike sont nées du travail d'orfèvre de planneurs stratégiques qui ont capté l'air du temps.",
        "interests": [
            "J'aime analyser les gens",
            "J'aime les marques",
            "J'aime résoudre des énigmes"
        ],
        "connectedFamilies": [
            "sciences-humaines-sociales",
            "culture-patrimoine"
        ],
        "salary": {
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
        "longDescription": "Le Planneur Stratégique est le cerveau inspirateur des agences de publicité. À la croisée de la sociologie, des tendances culturelles et du business, il déniche l'« insight consommateur » décisif qui sert de point de départ à des campagnes créatives légendaires.",
        "domain": "Médias, Publicité & Contenu",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "📺"
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
            "technical": [
                "Études d'audience média (Médiamétrie, Kantar, ACPM)",
                "Connaissance exhaustive de l'écosystème média et digital",
                "Modélisation de points de contact (Touchpoint Planning)",
                "Compréhension des comportements multi-écrans",
                "Gestion budgétaire média"
            ],
            "human": [
                "Vision holistique et capacité de synthèse",
                "Pragmatisme et créativité contextuelle",
                "Pédagogie pour expliquer les choix d'écrans",
                "Curiosité pour les usages médias"
            ]
        },
        "studies": {
            "france": [
                "Master en Stratégie Média / Communication (ESP, CELSA, Sup de Pub, Sciences Po)"
            ],
            "senegal": [
                "Master en Gestion des Médias & Communication (CESTI, BEM Dakar, ISM)"
            ]
        },
        "career": "Directeur de la Stratégie Média, Head of Media Planning ou Directeur Général d'Agence Média.",
        "relatedJobSlugs": [
            "planneur-strategique",
            "responsable-strategie-medias",
            "media-buyer"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Channel Planner",
                "url": "https://espub.org/metiers/channel-planner/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "Aujourd'hui, un consommateur est exposé à plus de 5 000 messages commerciaux par jour ; le rôle du Channel Planner est d'éviter le matraquage pour privilégier la pertinence du moment.",
        "interests": [
            "J'aime les données et les chiffres",
            "J'aime résoudre des énigmes",
            "J'aime les marques"
        ],
        "connectedFamilies": [
            "culture-patrimoine"
        ],
        "salary": {
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
        "longDescription": "Le Channel Planner conçoit l'architecture de diffusion omnicanale d'une campagne. Il détermine précisément à quel moment, sur quel écran, dans quel lieu physique ou virtuel et sous quel format le message publicitaire touchera la cible avec le maximum d'impact.",
        "domain": "Médias, Publicité & Contenu",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "📺"
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
            "technical": [
                "Connaissance approfondie de tous les univers médias (TV, Digital, OOH, Radio, Presse)",
                "Mesures d'audience et calcul de GRP (Gross Rating Point)",
                "Négociation d'accords volumiques de haut niveau",
                "Contrôle financier et audit média",
                "Compréhension de la réglementation publicitaire (Loi Évin, Loi Sapin)"
            ],
            "human": [
                "Sens aigu de la négociation",
                "Leadership et vision stratégique",
                "Excellence relationnelle",
                "Capacité à gérer des budgets massifs avec sérénité"
            ]
        },
        "studies": {
            "france": [
                "Master en Stratégie Média / Écoles de Commerce (ESP, CELSA, ESSEC, ESCP, IAE)"
            ],
            "senegal": [
                "Master en Communication & Négociation Média (BEM Dakar, CESTI UCAD, ISM)"
            ]
        },
        "career": "Directeur Média & Publicité, Directeur de la Communication Globale ou Vice-Président Marketing.",
        "relatedJobSlugs": [
            "channel-planner",
            "media-buyer",
            "directeur-communication"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Responsable stratégie média",
                "url": "https://espub.org/metiers/responsable-de-strategie-media/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "La négociation média obéit à des codes stricts : en France, la Loi Sapin encadre la transparence totale de l'achat d'espace pour protéger les annonceurs.",
        "interests": [
            "J'aime négocier",
            "J'aime les marques",
            "J'aime les données et les chiffres"
        ],
        "connectedFamilies": [
            "droit-management"
        ],
        "salary": {
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
        "longDescription": "Le Responsable de la Stratégie Médias orchestre l'ensemble des investissements publicitaires plurimédias d'un groupe ou d'une marque. Il garantit la couverture optimale des cibles au meilleur coût tout en préservant l'image de marque dans les environnements de diffusion (Brand Safety).",
        "domain": "Médias, Publicité & Contenu",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "📺"
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
            "technical": [
                "Techniques de négociation commerciale agressive",
                "Maîtrise des logiciels d'achat d'espace (Medialand, Popcorn, Kantar)",
                "Calculs de rentabilité et ratios coût/contact",
                "Droit de la publicité et contrats commerciaux",
                "Gestion administrative rigoureuse"
            ],
            "human": [
                "Ténacité et sang-froid",
                "Sens aigu du contact et de la persuasion",
                "Réactivité sous pression",
                "Précision chirurgicale dans les chiffres"
            ]
        },
        "studies": {
            "france": [
                "Licence Pro / Master Négociation & Achat Média (ESP, Sup de Pub, IAE, Écoles de commerce)"
            ],
            "senegal": [
                "Licence / Master en Gestion Commerciale & Médias (Sup de Co Dakar, BEM Dakar, ESMT)"
            ]
        },
        "career": "Directeur des Achats Médias, Responsable de Département Négociation ou Directeur Commercial en Régie.",
        "relatedJobSlugs": [
            "responsable-strategie-medias",
            "programmatic-manager",
            "vendeur-espaces-publicitaires"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Media Buyer",
                "url": "https://espub.org/metiers/media-buyer/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "Lors d'événements planétaires comme la Coupe du Monde ou le Super Bowl, 30 secondes d'espace publicitaire peuvent se négocier à plusieurs millions de dollars.",
        "interests": [
            "J'aime négocier",
            "J'aime les données et les chiffres",
            "J'aime convaincre"
        ],
        "connectedFamilies": [
            "droit-management"
        ],
        "salary": {
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
        "longDescription": "Le Media Buyer négocie et achète les espaces publicitaires auprès des régies médias (chaînes de télévision, radios, afficheurs, réseaux digitaux) aux meilleurs tarifs et aux créneaux les plus avantageux pour optimiser le budget de l'annonceur.",
        "domain": "Médias, Publicité & Contenu",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "📺"
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
            "technical": [
                "Maîtrise des DSP majeures (Display & Video 360, The Trade Desk, Xandr)",
                "Compréhension de l'écosystème AdTech (SSP, Ad Server, DMP, Identity Resolution)",
                "Gestion des formats IAB et créas dynamiques (DCO)",
                "Analyse statistique de performance publicitaire",
                "Veille sur la fin des cookies tiers et le Privacy Sandbox"
            ],
            "human": [
                "Esprit logique et affinité technologique",
                "Résistance au stress des enchères temps réel",
                "Rigueur d'exécution absolue",
                "Capacité à vulgariser une matière technique"
            ]
        },
        "studies": {
            "france": [
                "Master en Publicité Digitale & AdTech (ESP, Sup de Pub, Télécom Évolution, IAE)"
            ],
            "senegal": [
                "Master en Ingénierie Média & Marketing Digital (ESMT Dakar, BEM, ISM)"
            ]
        },
        "career": "Head of Programmatic, Directeur du Pôle AdTech ou Directeur des Médias Numériques.",
        "relatedJobSlugs": [
            "traffic-manager-publicitaire",
            "media-buyer",
            "traffic-manager-digital"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Programmatic Manager",
                "url": "https://espub.org/metiers/programmatic-manager/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "En programmatique, une transaction publicitaire est négociée, arbitrée par algorithme et affichée sur l'écran de l'utilisateur en moins de 100 millisecondes, soit plus vite qu'un battement de paupière.",
        "interests": [
            "J'aime la technologie",
            "J'aime les données et les chiffres",
            "J'aime résoudre des énigmes"
        ],
        "connectedFamilies": [
            "informatique-numerique"
        ],
        "salary": {
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
        "longDescription": "Le Programmatic Manager achète des espaces publicitaires numériques en temps réel (Real-Time Bidding - RTB) via des plateformes automatisées (DSP). Il optimise les algorithmes d'enchères pour délivrer la bonne impression publicitaire à la bonne personne au bon millième de seconde.",
        "domain": "Médias, Publicité & Contenu",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "📺"
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
            "technical": [
                "Ad Servers majeurs (Google Ad Manager, Equativ, Xandr)",
                "Connaissances techniques HTML5, CSS et JavaScript de base",
                "Outils de mesure de visibilité (IAS, Moat, DoubleVerify)",
                "Gestion des pixels de redirection et tracking d'URLs",
                "Résolution rapide d'incidents techniques"
            ],
            "human": [
                "Rigueur méthodique exemplaire",
                "Calme et sang-froid face aux urgences de direct",
                "Sens du service client",
                "Organisation méthodique"
            ]
        },
        "studies": {
            "france": [
                "Bac+2 / Bac+3 en Métiers du Web, Communication Digitale ou Informatique (ESP, IUT MMI, BTS SN)"
            ],
            "senegal": [
                "Licence Pro en Réseaux, Multimédia & Gestion de Contenu Numérique (ESMT, UCAD, ISM)"
            ]
        },
        "career": "Responsable du Pôle AdOps, Chef de Projet AdTech ou Responsable de Régie Numérique.",
        "relatedJobSlugs": [
            "programmatic-manager",
            "traffic-manager-digital",
            "media-buyer"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Traffic Manager en régie",
                "url": "https://espub.org/metiers/traffic-manager/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "Sans le Traffic Manager Publicitaire, aucun média en ligne gratuit ne pourrait monétiser son audience : c'est la cheville ouvrière invisible de toute la publicité numérique.",
        "interests": [
            "J'aime la technologie",
            "J'aime résoudre des énigmes",
            "J'aime les données et les chiffres"
        ],
        "connectedFamilies": [
            "informatique-numerique"
        ],
        "salary": {
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
        "longDescription": "Le Traffic Manager Publicitaire (AdOps) est le garant technique de la diffusion des publicités. En régie ou en agence, il réceptionne les créations, les implémente dans les serveurs publicitaires (Ad Servers), teste leur affichage et assure le suivi rigoureux des volumes d'impressions contractuels.",
        "domain": "Médias, Publicité & Contenu",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "📺"
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
            "technical": [
                "Techniques de prospection commerciale et de closing",
                "Connaissance approfondie des chiffres d'audience de son média",
                "Maîtrise du tarif de base et des règles de remises dégressives",
                "Construction de propositions commerciales percutantes",
                "Outils de CRM commercial (Salesforce, HubSpot)"
            ],
            "human": [
                "Persuasion et force de conviction",
                "Excellent relationnel et convivialité",
                "Persévérance et pugnacité",
                "Écoute active des besoins des annonceurs"
            ]
        },
        "studies": {
            "france": [
                "BTS Négociation et Digitalisation de la Relation Client (NDRC) / Bachelor Commerce & Médias (ESP, IAE, Écoles de commerce)"
            ],
            "senegal": [
                "BTS / Licence en Action Commerciale & Marketing (Sup de Co, ISM, ESP Dakar)"
            ]
        },
        "career": "Directeur de Publicité en Régie, Directeur Commercial de Support Média ou Responsable Partenariats.",
        "relatedJobSlugs": [
            "media-buyer",
            "chef-de-publicite",
            "responsable-strategie-medias"
        ],
        "resources": [
            {
                "title": "Studyrama — Fiche métier Vendeur d'espaces publicitaires",
                "url": "https://www.studyrama.com/formations/fiches-metiers/communication/vendeur-d-espaces-publicitaires"
            }
        ],
        "sources": [
            "Studyrama"
        ],
        "saviezVous": "La rémunération d'un vendeur d'espaces publicitaires comprend souvent une part variable très attractive indexée directement sur son chiffre d'affaires généré.",
        "interests": [
            "J'aime convaincre",
            "J'aime négocier",
            "J'aime communiquer avec les gens"
        ],
        "connectedFamilies": [
            "droit-management"
        ],
        "salary": {
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
        "longDescription": "Le Vendeur d'Espaces Publicitaires commercialise les espaces d'un support média (presse écrite, radio, chaîne de télévision, panneau d'affichage, site internet) auprès des agences médias et des annonceurs directs afin de maximiser les revenus publicitaires du média.",
        "domain": "Médias, Publicité & Contenu",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "📺"
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
            "technical": [
                "Maîtrise virtuose de la langue et des figures de style",
                "Techniques d'écriture de scénarios publicitaires et storyboards",
                "Capacité à formuler des formules synthétiques inoubliables",
                "Sensibilité aiguë à la pop-culture et aux mèmes",
                "Connaissance des contraintes de formats audiovisuels"
            ],
            "human": [
                "Créativité foisonnante et sens de l'humour",
                "Capacité à accepter la critique et à jeter 90% de ses idées",
                "Intuition psychologique sur ce qui émeut",
                "Curiosité permanente"
            ]
        },
        "studies": {
            "france": [
                "Master en Conception-Rédaction / Création Publicitaire (ESP, Sup de Pub, CELSA, Écoles de Lettres/Sciences Po)"
            ],
            "senegal": [
                "Licence / Master en Création Publicitaire & Lettres Modernes (CESTI UCAD, Sup de Co Dakar, ISM)"
            ]
        },
        "career": "Directeur de Création, Associé Fondateur d'Agence Créative ou Auteur / Scénariste.",
        "relatedJobSlugs": [
            "directeur-artistique",
            "brand-content-manager",
            "ux-writer-copywriter-digital"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Concepteur-rédacteur",
                "url": "https://espub.org/metiers/concepteur-redacteur/"
            },
            {
                "title": "Studyrama — Fiche Concepteur-rédacteur",
                "url": "https://www.studyrama.com/formations/fiches-metiers/communication/concepteur-redacteur"
            }
        ],
        "sources": [
            "ESP",
            "Studyrama"
        ],
        "saviezVous": "Un slogan réussi de 4 mots peut faire basculer le destin d'une entreprise mondiale : penser à « Venez comme vous êtes » (McDonald's) ou « C'est fort en chocolat » (Lion).",
        "interests": [
            "J'aime écrire des textes",
            "J'aime créer des visuels",
            "J'aime convaincre"
        ],
        "connectedFamilies": [
            "lettres-philosophie",
            "arts-spectacle-audiovisuel"
        ],
        "salary": {
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
        "longDescription": "Le Concepteur-Rédacteur forme avec le Directeur Artistique le mythique « team créatif » d'agence de publicité. Maître des mots et des idées, il invente les slogans inoubliables, les scénarios de spots vidéo, les manifestes de marque et les accroches qui frappent l'imaginaire collectif.",
        "domain": "Médias, Publicité & Contenu",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "📺"
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
            "technical": [
                "Techniques de Storytelling et de journalisme de marque",
                "Gestion de production audiovisuelle et audio (podcasts)",
                "Maîtrise des stratégies éditoriales et calendriers de publication",
                "Connaissance des codes des plateformes de streaming et réseaux",
                "Pilotage d'équipes créatives pluridisciplinaires"
            ],
            "human": [
                "Excellente culture générale et curiosité",
                "Sens aigu du récit et de l'émotion",
                "Qualités rédactionnelles hors pair",
                "Capacité à fédérer des talents créatifs"
            ]
        },
        "studies": {
            "france": [
                "Master en Brand Content / Médias / Journalisme (ESP, CELSA, Sup de Pub, Sciences Po)"
            ],
            "senegal": [
                "Master en Production de Contenus & Communication Digitale (CESTI UCAD, BEM Dakar, ISM)"
            ]
        },
        "career": "Directeur Éditorial de Marque, Head of Content & Social Media ou Directeur de la Communication Globale.",
        "relatedJobSlugs": [
            "concepteur-redacteur",
            "directeur-artistique",
            "responsable-communication"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Brand Content Manager",
                "url": "https://espub.org/metiers/brand-content-manager/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "Le cas Red Bull est la référence mondiale du brand content : l'entreprise se considère aujourd'hui autant comme une société de médias et de production de sports extrêmes que comme un vendeur de boissons.",
        "interests": [
            "J'aime écrire des textes",
            "J'aime créer des visuels",
            "J'aime les marques"
        ],
        "connectedFamilies": [
            "arts-spectacle-audiovisuel",
            "lettres-philosophie"
        ],
        "salary": {
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
        "longDescription": "Le Brand Content Manager conçoit et produit des contenus éditoriaux, audiovisuels et expérientiels non directement publicitaires (documentaires, podcasts, webséries, magazines, livres blancs) qui apportent une réelle valeur culturelle ou pratique tout en renforçant l'attachement à la marque.",
        "domain": "Médias, Publicité & Contenu",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "📺"
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
            "technical": [
                "Pratique de Figma et des outils de maquettage produit",
                "Principes de Design d'Interaction et d'Ergonomie cognitive",
                "Méthodologie de Content Design & Design Systems",
                "Techniques de tests utilisateurs qualitatifs",
                "Capacité à synthétiser des idées complexes en 2 mots"
            ],
            "human": [
                "Empathie exceptionnelle pour l'utilisateur lambda",
                "Sens de la clarté et concision extrême",
                "Écoute et travail collaboratif en équipe agile",
                "Précision quasi chirurgicale des nuances lexicales"
            ]
        },
        "studies": {
            "france": [
                "Master en Design Numérique / Sciences du Langage / Ergonomie (ESP, Gobelins, Strate, CELSA)"
            ],
            "senegal": [
                "Master en Informatique & Design d'Interaction / Communication Digitale (BEM Dakar, ISM, ESP Dakar)"
            ]
        },
        "career": "Lead UX Writer, Content Design Manager ou Head of Product Design.",
        "relatedJobSlugs": [
            "concepteur-redacteur",
            "webmarketer",
            "brand-content-manager"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — UX Writer",
                "url": "https://espub.org/metiers/ux-writer/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "Google a augmenté de 17 % le taux d'engagement sur la réservation d'hôtels simplement en remplaçant le texte d'un bouton « Réserver une chambre » par « Vérifier la disponibilité ».",
        "interests": [
            "J'aime écrire des textes",
            "J'aime la technologie",
            "J'aime résoudre des énigmes"
        ],
        "connectedFamilies": [
            "informatique-numerique",
            "lettres-philosophie"
        ],
        "salary": {
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
        "longDescription": "L'UX Writer est l'architecte des mots au sein des interfaces logicielles et applications mobiles. Il conçoit chaque mot d'un bouton, d'un message d'erreur, d'une infobulle ou d'un écran de paiement pour rendre l'expérience utilisateur intuitive, rassurante et fluide.",
        "domain": "Médias, Publicité & Contenu",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "📺"
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
            "technical": [
                "Connaissance approfondie de la chaîne de production cinématographique et photographique",
                "Droit de la propriété intellectuelle et droits d'auteur",
                "Négociation budgétaire avec les maisons de production",
                "Réseau étendu de talents artistiques internationaux",
                "Maîtrise des plannings de post-production"
            ],
            "human": [
                "Œil artistique très exercé",
                "Sens du relationnel avec les artistes et réalisateurs",
                "Fermeté commerciale et rigueur contractuelle",
                "Calme et résolution rapide des imprévus de plateau"
            ]
        },
        "studies": {
            "france": [
                "Master en Production Audiovisuelle / Communication (ESP, Fémis, Sup de Pub, Gobelins, CELSA)"
            ],
            "senegal": [
                "Master en Réalisation & Production Audiovisuelle (CESTI, Cinékap, BEM Dakar)"
            ]
        },
        "career": "Directeur de la Production d'Agence (Head of TV / Head of Production) ou Producteur Exécutif Indépendant.",
        "relatedJobSlugs": [
            "directeur-artistique",
            "chef-de-publicite",
            "concepteur-redacteur"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Acheteur d'art / TV Producer",
                "url": "https://espub.org/metiers/acheteur-dart/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "La musique d'une publicité représente parfois plus de 30 % du budget total de production en raison des droits de synchronisation mondiaux d'un titre célèbre.",
        "interests": [
            "J'aime créer des visuels",
            "J'aime négocier",
            "J'aime les marques"
        ],
        "connectedFamilies": [
            "arts-spectacle-audiovisuel",
            "droit-management"
        ],
        "salary": {
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
        "longDescription": "L'Acheteur d'Art et le TV Producer en agence de publicité concrétisent les idées créatives. Ils sélectionnent et engagent les meilleurs réalisateurs, photographes, illustrateurs, acteurs et musiciens, négocient les droits d'auteur et supervisent la fabrication matérielle des campagnes.",
        "domain": "Médias, Publicité & Contenu",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "📺"
    },
    {
        "id": "directeur-artistique",
        "slug": "directeur-artistique",
        "title": "Directeur Artistique / DA Publicitaire & Graphique",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "creation-design",
        "subdomain": "Direction artistique & Création",
        "sourceKey": "ESP_STUDYRAMA",
        "description": "Le Directeur Artistique conçoit l'identité visuelle et l'esthétique générale des campagnes publicitaires et des marques. En binôme avec le concepteur-rédacteur, il transforme une idée stratégique en un univers visuel marquant (typographie, photographie, couleur, composition).",
        "shortDescription": "Donne vie visuellement aux idées des campagnes et définit l'identité esthétique des marques.",
        "missions": [
            "Concevoir le concept visuel global des campagnes publicitaires (print, digital, film, affichage).",
            "Travailler en étroite synergie avec le concepteur-rédacteur au sein du team créatif de l'agence.",
            "Créer les moodboards, les pistes graphiques et les roughs pour matérialiser les intentions artistiques.",
            "Diriger les séances de prises de vue avec les photographes, réalisateurs, stylistes et illustrateurs.",
            "Superviser l'exécution graphique finale assurée par les graphistes et animateurs motion.",
            "Présenter et défendre avec passion le parti-pris esthétique devant l'annonceur."
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
        "workEnvironment": "Agences de publicité de création, agences de design de marque, studios graphiques, maisons de mode et de luxe, freelance.",
        "typicalDay": "Direction artistique sur un plateau de shooting mode le matin, retouche de colorimétrie l'après-midi sur Photoshop et création d'une présentation de concept visuel pour une compétition d'agence.",
        "skills": {
            "technical": [
                "Suite Adobe Creative Cloud (Photoshop, Illustrator, InDesign, After Effects)",
                "Maîtrise virtuose de la typographie, des couleurs et de la composition",
                "Direction de shooting photo et vidéo",
                "Culture visuelle, artistique et cinématographique immense",
                "Outils de design d'interface (Figma)"
            ],
            "human": [
                "Sensibilité esthétique exceptionnelle",
                "Capacité à conceptualiser et synthétiser visuellement",
                "Curiosité insatiable pour l'art contemporain et la pop-culture",
                "Force de conviction et charisme créatif"
            ]
        },
        "studies": {
            "france": [
                "Master en Direction Artistique / Design Graphique (ESP, Penninghen, Gobelins, Estienne, ECV, Sup de Pub)"
            ],
            "senegal": [
                "Master en Arts Visuels & Direction Artistique (École Nationale des Arts de Dakar, Sup de Co Dakar, BEM)"
            ]
        },
        "career": "Directeur de Création, Associé Fondateur de Studio Créatif ou Directeur du Design de Marque.",
        "relatedJobSlugs": [
            "concepteur-redacteur",
            "directeur-de-creation",
            "designer-graphique"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Directeur artistique",
                "url": "https://espub.org/metiers/directeur-artistique/"
            },
            {
                "title": "Studyrama — Fiche Directeur artistique",
                "url": "https://www.studyrama.com/formations/fiches-metiers/communication/directeur-artistique"
            }
        ],
        "sources": [
            "ESP",
            "Studyrama"
        ],
        "saviezVous": "Certaines des campagnes visuelles les plus mémorables de l'histoire, comme les affiches Benetton par Oliviero Toscani, sont le fruit d'une vision de direction artistique sans compromis.",
        "interests": [
            "J'aime créer des visuels",
            "J'aime l'art et le design",
            "J'aime les marques"
        ],
        "connectedFamilies": [
            "arts-spectacle-audiovisuel",
            "culture-patrimoine"
        ],
        "salary": {
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
        "longDescription": "Le Directeur Artistique conçoit l'identité visuelle et l'esthétique générale des campagnes publicitaires et des marques. En binôme avec le concepteur-rédacteur, il transforme une idée stratégique en un univers visuel marquant (typographie, photographie, couleur, composition).",
        "domain": "Création & Design",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "🎨"
    },
    {
        "id": "directeur-de-creation",
        "slug": "directeur-de-creation",
        "title": "Directeur de Création / Executive Creative Director (ECD)",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "creation-design",
        "subdomain": "Direction artistique & Création",
        "sourceKey": "ESP",
        "description": "Le Directeur de Création est le patron de la création d'une agence de publicité. Il définit la ligne artistique et philosophique de l'agence, manage l'ensemble des teams créatifs, valide les concepts avant les présentations clients et inspire des campagnes récompensées dans les plus grands festivals internationaux (Cannes Lions).",
        "shortDescription": "Dirige l'ensemble du pôle créatif de l'agence et insuffle l'audace conceptuelle des campagnes.",
        "missions": [
            "Définir la vision créative de l'agence et veiller au niveau d'exigence artistique de chaque projet.",
            "Manager, recruter et coacher une équipe de directeurs artistiques, concepteurs-rédacteurs et designers.",
            "Sélectionner les meilleures idées proposées par les teams créatifs et les pousser vers l'excellence.",
            "Défendre en personne les partis-pris créatifs les plus audacieux devant les grands patrons annonceurs.",
            "Piloter la participation de l'agence aux compétitions majeures et aux prix internationaux de création publicitaire.",
            "Représenter l'agence lors des jurys professionnels et des conférences de l'industrie publicitaire."
        ],
        "salaries": {
            "france": {
                "junior": "55 000 - 75 000 € brut/an",
                "senior": "85 000 - 150 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "1 200 000 - 2 000 000 FCFA net/mois",
                "senior": "2 500 000 - 4 500 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Grandes agences internationales de publicité (BETC, Publicis Conseil, Marcel, Ogilvy), agences boutiques indépendantes renommées.",
        "typicalDay": "Revue des idées de 4 binômes créatifs sur une campagne internationale automobile, arbitrage tranché sur le concept à retenir, déjeuner avec le Directeur Général de l'agence et appel avec un juré des Cannes Lions.",
        "skills": {
            "technical": [
                "Capacité infaillible à reconnaître une idée de génie en 3 secondes",
                "Maîtrise totale de la chaîne créative (concept, rédaction, image, film)",
                "Leadership d'artistes et gestion de personnalités créatives complexes",
                "Excellence oratoire et charisme de soutenance",
                "Vision des tendances culturelles d'avant-garde"
            ],
            "human": [
                "Audace intellectuelle et goût du risque",
                "Générosité pour faire grandir ses équipes",
                "Résistance extrême à la pression",
                "Pugnacité et exigence sans faille"
            ]
        },
        "studies": {
            "france": [
                "Parcours d'excellence en Direction Artistique ou Conception-Rédaction (ESP, Penninghen, Gobelins, CELSA)"
            ],
            "senegal": [
                "Parcours reconnu de créatif senior primé, issu des Beaux-Arts, CESTI ou Grandes Écoles de communication"
            ]
        },
        "career": "Président d'Agence, Chief Creative Officer (CCO) de réseau mondial ou Créateur de sa propre agence.",
        "relatedJobSlugs": [
            "directeur-artistique",
            "concepteur-redacteur",
            "directeur-de-clientele"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Directeur de création",
                "url": "https://espub.org/metiers/directeur-de-creation/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "Les plus grands Directeurs de Création mondiaux ont autant d'influence sur la culture populaire que des réalisateurs de cinéma oscarisés.",
        "interests": [
            "J'aime diriger une équipe",
            "J'aime l'art et le design",
            "J'aime créer des visuels"
        ],
        "connectedFamilies": [
            "arts-spectacle-audiovisuel",
            "droit-management"
        ],
        "salary": {
            "france": {
                "junior": "55 000 - 75 000 € brut/an",
                "senior": "85 000 - 150 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "1 200 000 - 2 000 000 FCFA net/mois",
                "senior": "2 500 000 - 4 500 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "longDescription": "Le Directeur de Création est le patron de la création d'une agence de publicité. Il définit la ligne artistique et philosophique de l'agence, manage l'ensemble des teams créatifs, valide les concepts avant les présentations clients et inspire des campagnes récompensées dans les plus grands festivals internationaux (Cannes Lions).",
        "domain": "Création & Design",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "🎨"
    },
    {
        "id": "directeur-creatif",
        "slug": "directeur-creatif",
        "title": "Directeur Créatif / Head of Creative",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "creation-design",
        "subdomain": "Direction artistique & Création",
        "sourceKey": "ESP",
        "description": "Le Directeur Créatif orchestre l'innovation créative et l'expression transversale d'une marque ou d'une agence pluridisciplinaire. À la convergence du design, de la narration numérique et de l'expérience produit, il impulse des concepts créatifs holistiques.",
        "shortDescription": "Pilote l'expression créative 360° et l'innovation conceptuelle chez l'annonceur ou en agence d'expérience.",
        "missions": [
            "Concevoir l'univers créatif global d'une marque à travers tous ses vecteurs d'expression (produit, digital, retail, événement).",
            "Encadrer des équipes pluridisciplinaires composées d'UX/UI designers, de copywriters, de scénographes et de vidéastes.",
            "Traduire la stratégie commerciale de l'entreprise en concepts créatifs originaux et mémorables.",
            "Veiller à la cohérence de l'expérience de marque dans le monde physique comme dans les environnements virtuels.",
            "Piloter des collaborations artistiques exclusives (capsules mode, partenariats créateurs, pop-up stores).",
            "Accompagner les comités de direction dans la transformation créative de leur modèle d'affaires."
        ],
        "salaries": {
            "france": {
                "junior": "45 000 - 60 000 € brut/an",
                "senior": "70 000 - 110 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "800 000 - 1 400 000 FCFA net/mois",
                "senior": "1 800 000 - 3 200 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Studios de design d'expérience, directions de marque chez les annonceurs (mode, luxe, tech, divertissement), agences d'innovation.",
        "typicalDay": "Atelier de design prospectif sur l'expérience en boutique connectée de 2030, validation de l'univers visuel d'un jeu vidéo promotionnel et présentation de la vision de marque aux actionnaires.",
        "skills": {
            "technical": [
                "Vision holistique du design thinking et du design produit",
                "Direction créative multicanale (physique et digitale)",
                "Compréhension des technologies immersives (3D, VR, AR, IA générative)",
                "Gestion de projets créatifs transversaux",
                "Culture encyclopédique du design et de l'architecture"
            ],
            "human": [
                "Vision prospective et intuition visionnaire",
                "Leadership inspirant et fédérateur",
                "Esprit de synthèse et communication captivante",
                "Ouverture d'esprit radicale"
            ]
        },
        "studies": {
            "france": [
                "Master en Design / Création & Innovation (ESP, ENSCI-Les Ateliers, Strate École de Design, Gobelins)"
            ],
            "senegal": [
                "Master en Design & Management de l'Innovation (BEM Dakar, Sup de Co Dakar, École des Arts)"
            ]
        },
        "career": "Chief Design Officer (CDO), Vice-Président Création & Expérience de Marque ou Entrepreneur créatif.",
        "relatedJobSlugs": [
            "directeur-de-creation",
            "directeur-artistique",
            "brand-strategist"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Directeur créatif",
                "url": "https://espub.org/metiers/directeur-creatif/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "Dans les maisons de mode et les entreprises de la Silicon Valley, le titre de Creative Director est souvent le rôle le plus influent après le Directeur Général.",
        "interests": [
            "J'aime l'art et le design",
            "J'aime concevoir des projets",
            "J'aime diriger une équipe"
        ],
        "connectedFamilies": [
            "arts-spectacle-audiovisuel",
            "architecture-urbanisme-btp"
        ],
        "salary": {
            "france": {
                "junior": "45 000 - 60 000 € brut/an",
                "senior": "70 000 - 110 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "800 000 - 1 400 000 FCFA net/mois",
                "senior": "1 800 000 - 3 200 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "longDescription": "Le Directeur Créatif orchestre l'innovation créative et l'expression transversale d'une marque ou d'une agence pluridisciplinaire. À la convergence du design, de la narration numérique et de l'expérience produit, il impulse des concepts créatifs holistiques.",
        "domain": "Création & Design",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "🎨"
    },
    {
        "id": "chef-de-studio-creatif",
        "slug": "chef-de-studio-creatif",
        "title": "Chef de Studio Créatif / Studio Manager",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "creation-design",
        "subdomain": "Graphisme, Illustration & PAO",
        "sourceKey": "ESP",
        "description": "Le Chef de Studio Créatif supervise la production graphique opérationnelle au sein d'une agence ou d'un studio. Il planifie les charges de travail des graphistes, maquettistes et retoucheurs, garantit la conformité technique des fichiers et respecte rigoureusement les délais de livraison des campagnes.",
        "shortDescription": "Pilote la logistique opérationnelle, la charge de travail et le contrôle qualité des équipes graphiques.",
        "missions": [
            "Organiser et répartir les plannings quotidiens des graphistes, maquettistes, infographistes et monteurs vidéo.",
            "Contrôler la faisabilité technique des maquettes transmises par les directeurs artistiques.",
            "Vérifier la parfaite conformité des fichiers d'exécution (résolution, profils colorimétriques, débord, normes de gravure/impression).",
            "Gérer les relations avec les imprimeurs, photograveurs et développeurs techniques.",
            "Recruter et encadrer les équipes graphiques permanentes et les freelances en période de rush.",
            "Optimiser les flux de production (workflows numériques) pour gagner en rapidité et réduire les coûts d'exécution."
        ],
        "salaries": {
            "france": {
                "junior": "32 000 - 38 000 € brut/an",
                "senior": "45 000 - 62 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "450 000 - 750 000 FCFA net/mois",
                "senior": "1 000 000 - 1 700 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Studios graphiques intégrés en agence de communication, maisons d'édition, imprimeries de packaging, régies médias.",
        "typicalDay": "Point de charge du matin pour attribuer les urgences de 12 campagnes en cours, vérification du BAT (Bon à Tirer) d'un catalogue de 80 pages et call d'arbitrage de délai avec un chef de publicité.",
        "skills": {
            "technical": [
                "Maîtrise experte de la chaîne graphique print et web",
                "Gestion des flux de prépresse et profils ICC",
                "Logiciels de planification de charge (Monday, Wrike, Asana)",
                "Suite Adobe Creative Cloud (InDesign, Photoshop, Illustrator)",
                "Règles typographiques et de mise en page"
            ],
            "human": [
                "Organisation et rigueur quasi militaire",
                "Calme olympien sous la pression des délais",
                "Fermeté bienveillante dans le management",
                "Sens du service et de la réactivité"
            ]
        },
        "studies": {
            "france": [
                "Licence Pro / Master Gestion de Flux Graphiques & Multimédia (ESP, École Estienne, Gobelins)"
            ],
            "senegal": [
                "Licence / Master en Gestion de Production Graphique & Multimédia (École des Arts Dakar, ESMT)"
            ]
        },
        "career": "Directeur de Production Graphique, Responsable Fabrication & Print ou Directeur des Opérations d'Agence.",
        "relatedJobSlugs": [
            "designer-graphique",
            "maquettiste-pao",
            "directeur-artistique"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Chef de studio",
                "url": "https://espub.org/metiers/chef-de-studio/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "Une simple erreur d'espace insécable ou un profil de couleur non converti en quadrichromie (CMJN) peut entraîner la réimpression de centaines de milliers de catalogues aux frais du studio.",
        "interests": [
            "J'aime organiser des événements ou projets",
            "J'aime créer des visuels",
            "J'aime diriger une équipe"
        ],
        "connectedFamilies": [
            "arts-spectacle-audiovisuel"
        ],
        "salary": {
            "france": {
                "junior": "32 000 - 38 000 € brut/an",
                "senior": "45 000 - 62 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "450 000 - 750 000 FCFA net/mois",
                "senior": "1 000 000 - 1 700 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "longDescription": "Le Chef de Studio Créatif supervise la production graphique opérationnelle au sein d'une agence ou d'un studio. Il planifie les charges de travail des graphistes, maquettistes et retoucheurs, garantit la conformité technique des fichiers et respecte rigoureusement les délais de livraison des campagnes.",
        "domain": "Création & Design",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "🎨"
    },
    {
        "id": "designer-graphique",
        "slug": "designer-graphique",
        "title": "Designer Graphique / Graphiste Créatif",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "creation-design",
        "subdomain": "Graphisme, Illustration & PAO",
        "sourceKey": "ESP_STUDYRAMA",
        "description": "Le Designer Graphique conçoit les identités visuelles des marques et réalise une variété de supports de communication visuelle (logos, affiches, brochures, habillages de réseaux sociaux, packagings) en combinant typographies, couleurs, photographies et illustrations.",
        "shortDescription": "Crée les logos, identités visuelles et supports visuels print et digitaux pour donner une image forte aux marques.",
        "missions": [
            "Créer des logotypes et des chartes graphiques complètes (systèmes visuels, palettes de couleurs, hiérarchies typographiques).",
            "Mettre en page des supports de communication imprimés (dépliants, brochures corporate, affiches, rapports annuels).",
            "Concevoir des déclinaisons graphiques digitales (bannières web, visuels pour réseaux sociaux, templates d'emails).",
            "Créer des packagings produits attractifs et conformes aux contraintes réglementaires et industrielles.",
            "Préparer les fichiers sources pour l'impression ou l'intégration web en respectant les normes techniques.",
            "Collaborer avec les directeurs artistiques pour décliner les concepts clés en supports concrets."
        ],
        "salaries": {
            "france": {
                "junior": "26 000 - 32 000 € brut/an",
                "senior": "38 000 - 52 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "300 000 - 600 000 FCFA net/mois",
                "senior": "750 000 - 1 400 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Studios de création graphique, agences de publicité, services communication d'entreprises, imprimeries, statut indépendant (freelance).",
        "typicalDay": "Finalisation du logo d'une startup sur Illustrator avec ses 3 déclinaisons de couleurs, mise en page d'un livre blanc de 20 pages sur InDesign et export des visuels pour le lancement LinkedIn.",
        "skills": {
            "technical": [
                "Suite Adobe Creative Cloud experte (Illustrator, Photoshop, InDesign)",
                "Connaissances solides des règles typographiques et de composition",
                "Gestion de la chaîne graphique print et formats web",
                "Création vectorielle de logos et pictogrammes",
                "Bases d'outils digitaux (Figma, Canva pro)"
            ],
            "human": [
                "Créativité et sensibilité esthétique",
                "Patience et minutie dans les détails",
                "Capacité à écouter et intégrer les retours clients",
                "Polyvalence et autonomie"
            ]
        },
        "studies": {
            "france": [
                "BTS Design Graphique / DN MADE Graphisme / Bachelor Design (ESP, Estienne, ECV, LISAA, Sup de Pub)"
            ],
            "senegal": [
                "Licence Pro en Design Graphique & Infographie (École Nationale des Arts de Dakar, ISM, Sup de Co)"
            ]
        },
        "career": "Directeur Artistique Junior, Lead Graphic Designer, Packaging Designer ou Fondateur d'un Studio Graphique.",
        "relatedJobSlugs": [
            "directeur-artistique",
            "maquettiste-pao",
            "illustrateur"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Designer graphique",
                "url": "https://espub.org/metiers/designer-graphique/"
            },
            {
                "title": "Studyrama — Fiche métier Graphiste",
                "url": "https://www.studyrama.com/formations/fiches-metiers/communication/graphiste"
            }
        ],
        "sources": [
            "ESP",
            "Studyrama"
        ],
        "saviezVous": "Le célèbre logo Nike (le « Swoosh ») a été conçu en 1971 par Carolyn Davidson, une étudiante en graphisme, pour la modique somme de 35 dollars.",
        "interests": [
            "J'aime créer des visuels",
            "J'aime l'art et le design",
            "J'aime le travail manuel ou minutieux"
        ],
        "connectedFamilies": [
            "arts-spectacle-audiovisuel"
        ],
        "salary": {
            "france": {
                "junior": "26 000 - 32 000 € brut/an",
                "senior": "38 000 - 52 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "300 000 - 600 000 FCFA net/mois",
                "senior": "750 000 - 1 400 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "longDescription": "Le Designer Graphique conçoit les identités visuelles des marques et réalise une variété de supports de communication visuelle (logos, affiches, brochures, habillages de réseaux sociaux, packagings) en combinant typographies, couleurs, photographies et illustrations.",
        "domain": "Création & Design",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "🎨"
    },
    {
        "id": "illustrateur",
        "slug": "illustrateur",
        "title": "Illustrateur / Concept Artist Publicitaire",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "creation-design",
        "subdomain": "Graphisme, Illustration & PAO",
        "sourceKey": "STUDYRAMA",
        "description": "L'Illustrateur donne vie à des récits visuels à travers son coup de crayon et son style artistique singulier. En communication et publicité, il crée des visuels poétiques, percutants ou humoristiques pour les affiches, packagings, livres, jeux de société et campagnes digitales.",
        "shortDescription": "Crée des œuvres dessinées et illustrations originales sur mesure pour la publicité, la presse et l'édition.",
        "missions": [
            "Comprendre l'univers et le message d'une marque pour proposer un style d'illustration adapté (vectoriel, aquarelle, crayonné, 3D).",
            "Créer des roughs et esquisses préparatoires pour valider la composition et les personnages.",
            "Réaliser l'illustration finale sur tablette graphique (iPad Pro, Wacom Cintiq) ou techniques traditionnelles.",
            "Concevoir des mascottes de marques et des univers visuels narratifs complets.",
            "Fournir les fichiers numériques haute définition détourés et calibrés pour l'impression ou l'animation.",
            "Négocier et formaliser les contrats de cession de droits d'auteur en fonction des territoires et durées d'exploitation."
        ],
        "salaries": {
            "france": {
                "junior": "24 000 - 30 000 € brut/an (ou équivalent cachets/droits)",
                "senior": "36 000 - 65 000 € brut/an (ou équivalent droits d'auteur)",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "250 000 - 550 000 FCFA net/mois",
                "senior": "700 000 - 1 500 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Exercice majoritairement en indépendant (freelance), représenté par des agents d'illustrateurs, ou au sein d'agences d'édition, de presse et de jeux vidéo.",
        "typicalDay": "Recherches d'ambiance et esquisses le matin sur tablette pour la couverture d'un magazine international, mise en couleur numérique l'après-midi et échange sur les droits d'auteur avec un directeur artistique d'agence.",
        "skills": {
            "technical": [
                "Maîtrise du dessin anatomique, de la perspective et de la théorie des couleurs",
                "Outils de dessin numérique (Procreate, Photoshop, Illustrator)",
                "Développement d'une signature graphique reconnaissable",
                "Connaissance des droits de propriété intellectuelle",
                "Adaptation aux contraintes de formats multiples"
            ],
            "human": [
                "Imagination et univers poétique",
                "Patience et persévérance",
                "Sensibilité narrative",
                "Capacité à gérer son activité d'indépendant"
            ]
        },
        "studies": {
            "france": [
                "DN MADE Mention Graphisme / Écoles d'Art et Illustration (École Émile Cohl, Estienne, Gobelins, Penninghen)"
            ],
            "senegal": [
                "Diplôme de l'École Nationale des Arts de Dakar (ENA) / Beaux-Arts"
            ]
        },
        "career": "Illustrateur international renommé, Directeur Artistique d'Édition, Auteur de bande dessinée ou Concept Artist en studio d'animation.",
        "relatedJobSlugs": [
            "designer-graphique",
            "directeur-artistique",
            "infographiste"
        ],
        "resources": [
            {
                "title": "Studyrama — Fiche métier Illustrateur",
                "url": "https://www.studyrama.com/formations/fiches-metiers/communication/illustrateur"
            }
        ],
        "sources": [
            "Studyrama"
        ],
        "saviezVous": "La plupart des illustrateurs célèbres sont représentés par des agents artistiques qui négocient leurs commandes auprès des agences de publicité de New York, Paris ou Tokyo.",
        "interests": [
            "J'aime l'art et le design",
            "J'aime créer des visuels",
            "J'aime le travail manuel ou minutieux"
        ],
        "connectedFamilies": [
            "arts-spectacle-audiovisuel",
            "culture-patrimoine"
        ],
        "salary": {
            "france": {
                "junior": "24 000 - 30 000 € brut/an (ou équivalent cachets/droits)",
                "senior": "36 000 - 65 000 € brut/an (ou équivalent droits d'auteur)",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "250 000 - 550 000 FCFA net/mois",
                "senior": "700 000 - 1 500 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "longDescription": "L'Illustrateur donne vie à des récits visuels à travers son coup de crayon et son style artistique singulier. En communication et publicité, il crée des visuels poétiques, percutants ou humoristiques pour les affiches, packagings, livres, jeux de société et campagnes digitales.",
        "domain": "Création & Design",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "🎨"
    },
    {
        "id": "infographiste",
        "slug": "infographiste",
        "title": "Infographiste 2D/3D / Concepteur Visuel",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "creation-design",
        "subdomain": "Graphisme, Illustration & PAO",
        "sourceKey": "ESP_STUDYRAMA",
        "description": "L'Infographiste maîtrise les outils informatiques de création d'images fixes et animées. En publicité et communication d'entreprise, il modélise des produits en 3D photoréaliste, conçoit des schémas d'infographie de données complexes et intègre des éléments visuels interactifs.",
        "shortDescription": "Spécialiste de la création d'images assistée par ordinateur, de la modélisation 3D et de la visualisation de données.",
        "missions": [
            "Modéliser en 3D des produits, packagings ou éléments architecturaux pour des visuels publicitaires hyperréalistes.",
            "Créer des infographies didactiques (Data Visualization) pour rendre digestes des rapports financiers ou d'impact RSE.",
            "Traiter et retoucher numériquement des photographies haute définition (chromie, détourage complexe, incrustations).",
            "Concevoir des éléments graphiques 2D animés pour des présentations d'entreprise ou des vidéos explicatives.",
            "Générer des rendus d'éclairage et de textures réalistes pour les campagnes de lancement commercial.",
            "Archiver et classer rigoureusement les banques d'assets visuels numériques de l'entreprise."
        ],
        "salaries": {
            "france": {
                "junior": "28 000 - 34 000 € brut/an",
                "senior": "38 000 - 55 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "320 000 - 650 000 FCFA net/mois",
                "senior": "800 000 - 1 500 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Studios de rendu 3D, agences de packaging, studios de post-production, services communication de l'industrie automobile et du luxe.",
        "typicalDay": "Texture et éclairage d'un flacon de parfum modélisé en 3D sur Blender, export de rendus en 4K et réalisation d'une infographie statistique pour le rapport d'activité annuel.",
        "skills": {
            "technical": [
                "Logiciels de 3D (Blender, Cinema 4D, 3ds Max, Maya)",
                "Moteurs de rendu (Octane, Redshift, Cycles)",
                "Suite Adobe (Photoshop, Illustrator, After Effects)",
                "Techniques d'éclairage, texturing et mapping UV",
                "Visualisation graphique de données (Data Viz)"
            ],
            "human": [
                "Sens de l'observation et du réalisme physique",
                "Patience et précision technique",
                "Capacité d'apprentissage permanent des nouveaux outils",
                "Sens du rendu esthétique"
            ]
        },
        "studies": {
            "france": [
                "BTS / Bachelor Infographie & 3D (ESP, Gobelins, Supinfocom Rubika, LISAA)"
            ],
            "senegal": [
                "Licence Pro en Infographie & Modélisation 3D (ESMT, Institut Supérieur des Arts Dakar, ISM)"
            ]
        },
        "career": "Lead Infographiste 3D, Texture Artist, Superviseur d'Effets Visuels (VFX) ou Directeur Artistique 3D.",
        "relatedJobSlugs": [
            "designer-graphique",
            "illustrateur",
            "maquettiste-pao"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Infographiste",
                "url": "https://espub.org/metiers/infographiste/"
            },
            {
                "title": "Studyrama — Fiche métier Infographiste",
                "url": "https://www.studyrama.com/formations/fiches-metiers/communication/infographiste"
            }
        ],
        "sources": [
            "ESP",
            "Studyrama"
        ],
        "saviezVous": "La quasi-totalité des catalogues automobiles ou de mobilier contemporain (comme IKEA) ne sont plus photographiés en studio, mais modélisés intégralement en infographie 3D.",
        "interests": [
            "J'aime la technologie",
            "J'aime créer des visuels",
            "J'aime le travail manuel ou minutieux"
        ],
        "connectedFamilies": [
            "arts-spectacle-audiovisuel",
            "informatique-numerique"
        ],
        "salary": {
            "france": {
                "junior": "28 000 - 34 000 € brut/an",
                "senior": "38 000 - 55 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "320 000 - 650 000 FCFA net/mois",
                "senior": "800 000 - 1 500 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "longDescription": "L'Infographiste maîtrise les outils informatiques de création d'images fixes et animées. En publicité et communication d'entreprise, il modélise des produits en 3D photoréaliste, conçoit des schémas d'infographie de données complexes et intègre des éléments visuels interactifs.",
        "domain": "Création & Design",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "🎨"
    },
    {
        "id": "maquettiste-pao",
        "slug": "maquettiste-pao",
        "title": "Maquettiste PAO / Opérateur Prépresse",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "creation-design",
        "subdomain": "Graphisme, Illustration & PAO",
        "sourceKey": "STUDYRAMA",
        "description": "Le Maquettiste PAO (Publication Assistée par Ordinateur) est l'expert technique de la mise en page. Il assemble textes, images et éléments graphiques selon la charte du projet pour produire des documents prêts pour l'impression (magazines, livres, catalogues, packagings) dans le respect absolu des règles typographiques.",
        "shortDescription": "Met en page avec une rigueur absolue les textes et images pour l'édition et l'impression de masse.",
        "missions": [
            "Intégrer les textes rédigés et les visuels dans les grilles de mise en page sous InDesign.",
            "Respecter scrupuleusement la feuille de style typographique (interlignage, césures, veuves et orphelines).",
            "Calibrer et convertir les images en haute résolution et en profils colorimétriques CMJN adaptés au papier choisi.",
            "Créer les gabarits, folios, tables des matières et index de documents éditoriaux volumineux.",
            "Effectuer les relectures techniques et corriger les coquilles signalées par les correcteurs d'édition.",
            "Générer les fichiers PDF certifiés conformes (normes PDF/X-1a ou PDF/X-4) destinés au flashage et à l'imprimerie."
        ],
        "salaries": {
            "france": {
                "junior": "24 000 - 29 000 € brut/an",
                "senior": "33 000 - 45 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "250 000 - 500 000 FCFA net/mois",
                "senior": "600 000 - 1 100 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Maisons d'édition littéraire et scolaire, rédactions de journaux et magazines, imprimeries de labeur, studios de photogravure.",
        "typicalDay": "Mise en page d'un numéro spécial de magazine d'information sous la pression du bouclage d'impression du soir, correction des césures de texte et génération du Bon à Tirer (BAT) numérique.",
        "skills": {
            "technical": [
                "Maîtrise absolue d'Adobe InDesign et de ses fonctionnalités avancées (styles GREP, scripts)",
                "Photoshop et Illustrator pour la préparation technique des assets",
                "Code typographique français et règles orthotypographiques",
                "Connaissance approfondie de la chaîne graphique et des papiers",
                "Normes d'exportation prépresse et imposition"
            ],
            "human": [
                "Rigueur et sens du détail extrême",
                "Patience et concentration de longue durée",
                "Résistance au stress des heures de bouclage",
                "Respect des consignes des directeurs artistiques"
            ]
        },
        "studies": {
            "france": [
                "Bac Pro Réalisation de Produits Plurimédias / BTS Édition / DN MADE Graphisme"
            ],
            "senegal": [
                "BTS en Industries Graphiques & Multimédia (Centre d'Enseignement Technique Féminin, ESMT)"
            ]
        },
        "career": "Premier Maquettiste, Chef d'Atelier PAO, Responsable de Fabrication d'Édition ou Chef de Studio Créatif.",
        "relatedJobSlugs": [
            "chef-de-studio-creatif",
            "designer-graphique",
            "infographiste"
        ],
        "resources": [
            {
                "title": "Studyrama — Fiche métier Maquettiste PAO",
                "url": "https://www.studyrama.com/formations/fiches-metiers/communication/maquettiste"
            }
        ],
        "sources": [
            "Studyrama"
        ],
        "saviezVous": "Le code typographique français comporte des règles fascinantes et séculaires : une mauvaise utilisation d'un espace insécable avant un point-virgule peut ruiner la réputation d'une maison d'édition prestigieuse.",
        "interests": [
            "J'aime le travail manuel ou minutieux",
            "J'aime créer des visuels",
            "J'aime écrire des textes"
        ],
        "connectedFamilies": [
            "lettres-philosophie",
            "arts-spectacle-audiovisuel"
        ],
        "salary": {
            "france": {
                "junior": "24 000 - 29 000 € brut/an",
                "senior": "33 000 - 45 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "250 000 - 500 000 FCFA net/mois",
                "senior": "600 000 - 1 100 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "longDescription": "Le Maquettiste PAO (Publication Assistée par Ordinateur) est l'expert technique de la mise en page. Il assemble textes, images et éléments graphiques selon la charte du projet pour produire des documents prêts pour l'impression (magazines, livres, catalogues, packagings) dans le respect absolu des règles typographiques.",
        "domain": "Création & Design",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "🎨"
    },
    {
        "id": "photographe-pro",
        "slug": "photographe-pro",
        "title": "Photographe Professionnel Publicitaire & Corporate",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "creation-design",
        "subdomain": "Photographie & Production visuelle",
        "sourceKey": "ESP_STUDYRAMA",
        "description": "Le Photographe Publicitaire et Corporate capture les images qui illustrent les campagnes, catalogues de mode, packagings et communications d'entreprises. En studio ou en extérieur, il maîtrise la lumière, le cadrage et la mise en scène pour sublimer les personnes, les produits et les lieux.",
        "shortDescription": "Maître de la lumière et du cadrage : sublime les produits, égéries et entreprises pour des visuels d'impact.",
        "missions": [
            "Concevoir le dispositif technique de prise de vue (éclairage studio, flashs, réflecteurs, optiques spécialisées).",
            "Mettre en scène les produits ou guider les modèles, dirigeants et collaborateurs lors des séances de shooting.",
            "Collaborer étroitement avec le directeur artistique pour concrétiser le parti-pris visuel du brief.",
            "Développer les fichiers RAW et réaliser la retouche numérique poussée sur Capture One et Photoshop.",
            "Gérer la logistique de prise de vue (repérages de décors, régie, autorisations d'occupation du domaine public).",
            "Négocier les droits de diffusion commerciale et préserver la propriété intellectuelle de ses œuvres."
        ],
        "salaries": {
            "france": {
                "junior": "26 000 - 32 000 € brut/an (ou forfaits journaliers de 400 à 800 €)",
                "senior": "45 000 - 85 000 € brut/an (ou forfaits journaliers de 1 200 à 3 000 €)",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "300 000 - 650 000 FCFA net/mois (ou 75 000 à 150 000 FCFA/jour)",
                "senior": "800 000 - 1 800 000 FCFA net/mois (ou 200 000 à 500 000 FCFA/jour)",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Studios photo professionnels indépendants, plateaux de tournage, déplacements sur sites industriels, agences de mannequins et de presse.",
        "typicalDay": "Shooting en studio toute la matinée pour une grande marque de joaillerie avec lumière complexe, sélection (éditing) des 20 meilleurs clichés l'après-midi et envoi des épreuves retouchées au DA.",
        "skills": {
            "technical": [
                "Technique experte de l'éclairage de studio (strobisme, boîtes à lumière, Fresnel)",
                "Maîtrise des boîtiers moyen format et plein format (Hasselblad, Sony, Canon)",
                "Capture One Pro et Adobe Photoshop pour la retouche",
                "Gestion de la colorimétrie et étalonnage d'écrans",
                "Gestion contractuelle des droits d'image et droits d'auteur"
            ],
            "human": [
                "Œil photographique affûté et sens du cadre",
                "Aisance relationnelle pour mettre les modèles en confiance",
                "Patience et ténacité pour capter l'instant parfait",
                "Adaptabilité aux conditions météorologiques et lumineuses"
            ]
        },
        "studies": {
            "france": [
                "Bac Pro Photographie / BTS Photographie / Écoles supérieures (Gobelins, École Nationale Supérieure Louis-Lumière, Arles)"
            ],
            "senegal": [
                "Formation professionnelle de l'École Nationale des Arts de Dakar / Centre d'Études Spécialisées en Image"
            ]
        },
        "career": "Photographe de renommée internationale, Réalisateur de films publicitaires ou Directeur de la Photographie (Chef Opérateur).",
        "relatedJobSlugs": [
            "directeur-artistique",
            "acheteur-art-tv-producer",
            "designer-graphique"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Photographe professionnel",
                "url": "https://espub.org/metiers/photographe/"
            },
            {
                "title": "Studyrama — Fiche métier Photographe",
                "url": "https://www.studyrama.com/formations/fiches-metiers/communication/photographe"
            }
        ],
        "sources": [
            "ESP",
            "Studyrama"
        ],
        "saviezVous": "La photographie publicitaire de nature morte (montres, parfums, nourriture) requiert souvent plus de 4 heures d'ajustement millimétrique de la lumière pour une seule prise de vue finale.",
        "interests": [
            "J'aime créer des visuels",
            "J'aime l'art et le design",
            "J'aime le travail manuel ou minutieux"
        ],
        "connectedFamilies": [
            "arts-spectacle-audiovisuel",
            "culture-patrimoine"
        ],
        "salary": {
            "france": {
                "junior": "26 000 - 32 000 € brut/an (ou forfaits journaliers de 400 à 800 €)",
                "senior": "45 000 - 85 000 € brut/an (ou forfaits journaliers de 1 200 à 3 000 €)",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "300 000 - 650 000 FCFA net/mois (ou 75 000 à 150 000 FCFA/jour)",
                "senior": "800 000 - 1 800 000 FCFA net/mois (ou 200 000 à 500 000 FCFA/jour)",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "longDescription": "Le Photographe Publicitaire et Corporate capture les images qui illustrent les campagnes, catalogues de mode, packagings et communications d'entreprises. En studio ou en extérieur, il maîtrise la lumière, le cadrage et la mise en scène pour sublimer les personnes, les produits et les lieux.",
        "domain": "Création & Design",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "🎨"
    },
    {
        "id": "event-manager",
        "slug": "event-manager",
        "title": "Event Manager / Chef de Projet Événementiel",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "evenementiel-experience",
        "subdomain": "Projets événementiels & Production",
        "sourceKey": "ESP_STUDYRAMA",
        "description": "L'Event Manager pilote la conception et l'organisation d'événements de toutes envergures (conventions d'entreprise, soirées de gala, lancements de produit, festivals, salons). Il coordonne tous les prestataires, gère le budget et garantit une expérience inoubliable pour les participants.",
        "shortDescription": "Chef d'orchestre de la conception et réalisation d'événements marquants de A à Z.",
        "missions": [
            "Prendre le brief client et élaborer un concept événementiel original en phase avec les objectifs et le budget.",
            "Rechercher et sélectionner les lieux réceptifs atypiques et négocier les conditions de location.",
            "Lancer les appels d'offres auprès des traiteurs, techniciens audiovisuels, artistes, fleuristes et agents de sécurité.",
            "Construire le rétroplanning minute par minute (déroulé technique de la soirée ou de la convention).",
            "Superviser l'installation, coordonner les équipes sur le terrain le jour J et résoudre les aléas en temps réel.",
            "Établir le bilan financier final de l'événement et analyser la satisfaction des participants via des questionnaires post-événement."
        ],
        "salaries": {
            "france": {
                "junior": "28 000 - 34 000 € brut/an",
                "senior": "42 000 - 65 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "350 000 - 650 000 FCFA net/mois",
                "senior": "900 000 - 1 650 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Agences d'événementiel corporate et grand public, directions de la communication de grands groupes, palais des congrès, structures culturelles et sportives.",
        "typicalDay": "Visite technique d'un domaine viticole pour un séminaire de 200 personnes, dégustation test avec le traiteur, calage des micros et des éclairages avec la régie son, et gestion des listes d'invités VIP.",
        "skills": {
            "technical": [
                "Gestion budgétaire événementielle et rentabilité",
                "Réglementation des Établissements Recevant du Public (ERP) et sécurité",
                "Scénographie et technique audiovisuelle de base",
                "Négociation avec un panel varié de fournisseurs",
                "Outils de billetterie et d'inscription en ligne"
            ],
            "human": [
                "Résistance exceptionnelle au stress",
                "Réactivité et capacité d'improvisation",
                "Sens relationnel chaleureux et sens du service",
                "Rigueur d'organisation sans faille"
            ]
        },
        "studies": {
            "france": [
                "Bachelor / Master en Événementiel & Relations Publiques (ESP, Sup de Pub, ISCOM, EFAP, Écoles de commerce)"
            ],
            "senegal": [
                "Licence / Master en Gestion d'Événements & Communication (BEM Dakar, Sup de Co Dakar, ISM, CESTI)"
            ]
        },
        "career": "Directeur d'Agence Événementielle, Directeur de la Communication Événementielle ou Fondateur de son agence de production.",
        "relatedJobSlugs": [
            "coordinateur-evenementiel",
            "charge-production-evenementielle",
            "responsable-evenements-corporate"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Event Manager",
                "url": "https://espub.org/metiers/event-manager/"
            },
            {
                "title": "Studyrama — Fiche Chef de projet événementiel",
                "url": "https://www.studyrama.com/formations/fiches-metiers/communication/chef-de-projet-evenementiel"
            }
        ],
        "sources": [
            "ESP",
            "Studyrama"
        ],
        "saviezVous": "Le métier de chef de projet événementiel est régulièrement classé parmi les métiers les plus stimulants mais aussi les plus intenses en raison du stress du direct où chaque seconde compte.",
        "interests": [
            "J'aime organiser des événements ou projets",
            "J'aime communiquer avec les gens",
            "J'aime convaincre"
        ],
        "connectedFamilies": [
            "hotellerie-restauration-hospitalite",
            "droit-management"
        ],
        "salary": {
            "france": {
                "junior": "28 000 - 34 000 € brut/an",
                "senior": "42 000 - 65 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "350 000 - 650 000 FCFA net/mois",
                "senior": "900 000 - 1 650 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "longDescription": "L'Event Manager pilote la conception et l'organisation d'événements de toutes envergures (conventions d'entreprise, soirées de gala, lancements de produit, festivals, salons). Il coordonne tous les prestataires, gère le budget et garantit une expérience inoubliable pour les participants.",
        "domain": "Événementiel & Expérience",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "🎪"
    },
    {
        "id": "coordinateur-evenementiel",
        "slug": "coordinateur-evenementiel",
        "title": "Coordinateur Événementiel / Event Coordinator",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "evenementiel-experience",
        "subdomain": "Projets événementiels & Production",
        "sourceKey": "ESP",
        "description": "Le Coordinateur Événementiel est le bras droit opérationnel du chef de projet. Sur le terrain comme au bureau, il coordonne les prestataires, gère les plannings des hôtes et hôtesses, assure l'accueil des invités et veille à ce que chaque détail logistique s'exécute avec fluidité.",
        "shortDescription": "Coordonne les aspects pratiques, opérationnels et humains le jour de l'événement et en amont.",
        "missions": [
            "Assister le chef de projet dans la recherche de prestataires et le suivi des devis.",
            "Recruter, briefer et superviser le personnel d'accueil (hôtes, hôtesses, voituriers, vestiaires).",
            "Gérer la logistique des invitations, des confirmations et de l'émargement sur place (badges, QR codes).",
            "Coordonner l'acheminement des matériels, de la signalétique et des cadeaux invités (goodies).",
            "Être le point de contact privilégié des intervenants et animateurs le jour J pour gérer leur prise en charge.",
            "Participer au démontage des installations et à la remise en état des lieux après l'événement."
        ],
        "salaries": {
            "france": {
                "junior": "25 000 - 30 000 € brut/an",
                "senior": "34 000 - 45 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "280 000 - 550 000 FCFA net/mois",
                "senior": "700 000 - 1 200 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Agences événementielles, hôtels haut de gamme avec espaces congrès, centres de séminaires, associations professionnelles.",
        "typicalDay": "Briefing de 15 hôtesses d'accueil à 7h30 pour un congrès médical, vérification du bon fonctionnement des scanners de badges, distribution des paniers repas et gestion des arrivées tardives d'intervenants.",
        "skills": {
            "technical": [
                "Utilisation des logiciels de billetterie et d'émargement (Eventbrite, Weezevent)",
                "Gestion logistique et coordination terrain",
                "Techniques d'accueil et de relationnel public",
                "Bases de secourisme et consignes de sécurité",
                "Aisance en anglais pour les événements internationaux"
            ],
            "human": [
                "Énergie débordante et dynamisme",
                "Sourire et sens de l'hospitalité en toute circonstance",
                "Grande débrouillardise et réactivité",
                "Sens du travail en équipe"
            ]
        },
        "studies": {
            "france": [
                "BTS Tourisme / BTS SAM / Bachelor Événementiel (ESP, IUT, Écoles spécialisées)"
            ],
            "senegal": [
                "Licence Pro en Tourisme & Management Événementiel (UGB Saint-Louis, Sup de Co Dakar, ISM)"
            ]
        },
        "career": "Chef de Projet Événementiel, Event Manager Senior ou Responsable de Salle de Réception.",
        "relatedJobSlugs": [
            "event-manager",
            "charge-production-evenementielle",
            "logisticien-evenementiel"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Coordinateur événementiel",
                "url": "https://espub.org/metiers/coordinateur-evenementiel/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "Un coordinateur événementiel parcourt souvent plus de 15 kilomètres à pied à l'intérieur d'un centre de congrès au cours d'une seule journée d'événement.",
        "interests": [
            "J'aime organiser des événements ou projets",
            "J'aime communiquer avec les gens",
            "J'aime bouger et être actif"
        ],
        "connectedFamilies": [
            "hotellerie-restauration-hospitalite"
        ],
        "salary": {
            "france": {
                "junior": "25 000 - 30 000 € brut/an",
                "senior": "34 000 - 45 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "280 000 - 550 000 FCFA net/mois",
                "senior": "700 000 - 1 200 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "longDescription": "Le Coordinateur Événementiel est le bras droit opérationnel du chef de projet. Sur le terrain comme au bureau, il coordonne les prestataires, gère les plannings des hôtes et hôtesses, assure l'accueil des invités et veille à ce que chaque détail logistique s'exécute avec fluidité.",
        "domain": "Événementiel & Expérience",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "🎪"
    },
    {
        "id": "charge-production-evenementielle",
        "slug": "charge-production-evenementielle",
        "title": "Chargé de Production Événementielle",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "evenementiel-experience",
        "subdomain": "Projets événementiels & Production",
        "sourceKey": "ESP",
        "description": "Le Chargé de Production Événementielle est le bâtisseur concret de l'événement. Il traduit le concept créatif en réalité physique et technique : structures éphémères, podiums, éclairages, sonorisation, écrans géants et sécurité globale du site.",
        "shortDescription": "Prend en charge la réalisation technique, la fabrication et l'installation concrète des événements.",
        "missions": [
            "Étudier la faisabilité technique des concepts créatifs et dimensionner les moyens matériels nécessaires.",
            "Établir les cahiers des charges techniques pour les prestataires de son, lumière, vidéo et structures modulaires.",
            "Négocier et passer les commandes auprès des fournisseurs techniques et loueurs de matériel.",
            "Obtenir les autorisations administratives nécessaires (commissions de sécurité, préfecture, mairie).",
            "Superviser les phases de montage (load-in), d'exploitation technique et de démontage (load-out) dans les règles de l'art.",
            "Faire respecter scrupuleusement les normes d'hygiène, de santé et de sécurité du travail sur les chantiers événementiels."
        ],
        "salaries": {
            "france": {
                "junior": "28 000 - 34 000 € brut/an",
                "senior": "40 000 - 58 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "350 000 - 650 000 FCFA net/mois",
                "senior": "850 000 - 1 500 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Agences de production d'événements, parcs d'expositions, festivals de musique, sociétés de prestation technique audiovisuelle.",
        "typicalDay": "Supervision du montage d'un chapiteau géant et de l'accroche d'écrans LED suspendus à 8 mètres de haut, vérification de la conformité électrique avec l'inspecteur du bureau de contrôle.",
        "skills": {
            "technical": [
                "Technique du spectacle et de l'événementiel (son, lumière, vidéo, structures)",
                "Réglementation de sécurité ERP, travail en hauteur et électricité",
                "Planification de chantiers et logiciels de plans techniques (AutoCAD, SketchUp)",
                "Gestion des approvisionnements et transports volumineux",
                "Contrôle budgétaire de production"
            ],
            "human": [
                "Sens pratique et pragmatisme rigoureux",
                "Autorité naturelle sur un chantier technique",
                "Sang-froid et gestion des imprévus techniques",
                "Grande endurance physique"
            ]
        },
        "studies": {
            "france": [
                "BTS Métiers de l'Audiovisuel / Licence Pro Régie et Production Événementielle (ESP, CFA du Spectacle)"
            ],
            "senegal": [
                "Licence Pro en Techniques Audiovisuelles & Gestion de Spectacle (Institut des Métiers des Arts et de la Culture, ESMT)"
            ]
        },
        "career": "Directeur Technique Événementiel, Régisseur Général ou Directeur de Production en Agence.",
        "relatedJobSlugs": [
            "regisseur-general-evenementiel",
            "logisticien-evenementiel",
            "event-manager"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Chargé de production événementielle",
                "url": "https://espub.org/metiers/charge-de-production-evenementielle/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "Sur des festivals majeurs, le chargé de production coordonne souvent des centaines de tonnes de matériel et des kilomètres de câblage déployés en moins de 48 heures.",
        "interests": [
            "J'aime bouger et être actif",
            "J'aime le travail manuel ou minutieux",
            "J'aime la technologie"
        ],
        "connectedFamilies": [
            "arts-spectacle-audiovisuel",
            "architecture-urbanisme-btp"
        ],
        "salary": {
            "france": {
                "junior": "28 000 - 34 000 € brut/an",
                "senior": "40 000 - 58 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "350 000 - 650 000 FCFA net/mois",
                "senior": "850 000 - 1 500 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "longDescription": "Le Chargé de Production Événementielle est le bâtisseur concret de l'événement. Il traduit le concept créatif en réalité physique et technique : structures éphémères, podiums, éclairages, sonorisation, écrans géants et sécurité globale du site.",
        "domain": "Événementiel & Expérience",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "🎪"
    },
    {
        "id": "responsable-evenements-corporate",
        "slug": "responsable-evenements-corporate",
        "title": "Responsable Événements Corporate & Séminaires",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "evenementiel-experience",
        "subdomain": "Corporate, Congrès & Salons",
        "sourceKey": "ESP",
        "description": "Le Responsable Événements Corporate pilote la stratégie événementielle interne et externe d'une grande entreprise : conventions annuelles des cadres, assemblées générales d'actionnaires, voyages de récompense (incentives), séminaires d'intégration et soirées de gala.",
        "shortDescription": "Conçoit et organise les temps forts événementiels internes et institutionnels pour engager les collaborateurs.",
        "missions": [
            "Concevoir le plan annuel des événements de l'entreprise en lien avec la stratégie RH et de communication interne.",
            "Piloter les agences événementielles prestataires via des appels d'offres rigoureux et contrôler leurs prestations.",
            "Scénariser le déroulé des conventions d'entreprise : thématiques, interventions des dirigeants, vidéos de synthèse.",
            "Organiser les séminaires de cohésion d'équipe (team buildings) et les voyages incentives à l'étranger.",
            "Gérer l'organisation logistique et protocolaire des Assemblées Générales et des réunions avec les actionnaires.",
            "Mesurer le niveau d'engagement et de fierté d'appartenance des collaborateurs post-événement."
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
                "senior": "1 200 000 - 2 200 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Sièges sociaux de grands groupes multinationaux, banques, grands cabinets de conseil, entreprises industrielles.",
        "typicalDay": "Répétition de discours sur scène avec le PDG pour la convention annuelle de 1 000 collaborateurs, négociation des chambres d'un complexe hôtelier pour le séminaire managers et validation de la vidéo d'ouverture.",
        "skills": {
            "technical": [
                "Maîtrise des formats d'engagement collectif (hackathons, conventions, icebreakers)",
                "Gestion de budgets annuels corporate significatifs",
                "Protocoles d'accueil de dirigeants et personnalités publiques",
                "Sélection et audit d'agences réceptives (DMC)",
                "Techniques d'animation et de storytelling corporate"
            ],
            "human": [
                "Excellente présentation et diplomatie de haut niveau",
                "Sens politique et discrétion absolue",
                "Empathie pour les cultures d'entreprise",
                "Rigueur d'organisation hors pair"
            ]
        },
        "studies": {
            "france": [
                "Master en Communication d'Entreprise / Management Événementiel (ESP, CELSA, ISCOM, Sciences Po, IAE)"
            ],
            "senegal": [
                "Master en Communication d'Entreprise & Management (BEM Dakar, IAM, Sup de Co Dakar, ISM)"
            ]
        },
        "career": "Directeur de la Communication Interne, Directeur de l'Expérience Collaborateur ou Directeur de la RSE.",
        "relatedJobSlugs": [
            "responsable-communication-interne",
            "event-manager",
            "responsable-hospitality-vip"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Responsable événements corporate",
                "url": "https://espub.org/metiers/responsable-evenementiel/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "Un séminaire d'entreprise réussi renforce la fidélisation des collaborateurs et réduit le turnover de manière mesurable au cours des 12 mois suivants.",
        "interests": [
            "J'aime organiser des événements ou projets",
            "J'aime communiquer avec les gens",
            "J'aime convaincre"
        ],
        "connectedFamilies": [
            "droit-management"
        ],
        "salary": {
            "france": {
                "junior": "35 000 - 42 000 € brut/an",
                "senior": "50 000 - 75 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "500 000 - 900 000 FCFA net/mois",
                "senior": "1 200 000 - 2 200 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "longDescription": "Le Responsable Événements Corporate pilote la stratégie événementielle interne et externe d'une grande entreprise : conventions annuelles des cadres, assemblées générales d'actionnaires, voyages de récompense (incentives), séminaires d'intégration et soirées de gala.",
        "domain": "Événementiel & Expérience",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "🎪"
    },
    {
        "id": "wedding-planner",
        "slug": "wedding-planner",
        "title": "Wedding Planner / Organisateur d'Événements Privés & Cérémonies",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "evenementiel-experience",
        "subdomain": "Projets événementiels & Production",
        "sourceKey": "STUDYRAMA",
        "description": "Le Wedding Planner accompagne les futurs mariés de la première esquisse jusqu'au jour de la fête pour concevoir un mariage sur-mesure féerique et sans stress. Il gère le budget, négocie avec tous les prestataires et assure la coordination millimétrée le jour J.",
        "shortDescription": "Organise des mariages et cérémonies d'exception sur mesure en alliant magie esthétique et rigueur logistique.",
        "missions": [
            "Écouter les envies, l'histoire et les contraintes budgétaires des futurs mariés pour définir le concept et l'ambiance du mariage.",
            "Dénicher des lieux d'exception : châteaux, plages privées, domaines historiques, tentes nomades.",
            "Sélectionner et coordonner les meilleurs artisans : traiteur d'excellence, designer floral, photographe, DJ/orchestre, pâtissier.",
            "Concevoir la scénographie complète des tables, de la cérémonie laïque/religieuse et de l'espace de danse.",
            "Établir le planning minute par minute du jour J et orchestrer les temps forts (entrée, discours, ouverture de bal, pièce montée).",
            "Gérer avec sérénité et discrétion tous les imprévus techniques, météo ou familiaux le jour de la célébration."
        ],
        "salaries": {
            "france": {
                "junior": "24 000 - 30 000 € brut/an (ou honoraires de 2 500 à 5 000 € par mariage)",
                "senior": "38 000 - 65 000 € brut/an (ou honoraires de 6 000 à 15 000 € sur mariages haut de gamme)",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "300 000 - 600 000 FCFA net/mois (ou forfaits par célébration)",
                "senior": "800 000 - 1 800 000 FCFA net/mois (ou forfaits prestige cérémonies familiales)",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Créateur d'entreprise indépendant, agences de wedding planning haut de gamme et de destination weddings (mariages à l'étranger).",
        "typicalDay": "Dégustation du gâteau de mariage chez le chef pâtissier avec les mariés, ajustement des bouquets d'hortensias avec la fleuriste et installation de 200 chaises pour la cérémonie en plein air.",
        "skills": {
            "technical": [
                "Scénographie et décoration de table haut de gamme",
                "Gestion budgétaire rigoureuse et négociation de prestataires",
                "Maîtrise des protocoles de cérémonies laïques, religieuses et coutumières",
                "Coordination de déroulés événementiels millimétrés",
                "Gestion commerciale et marketing d'une agence indépendante"
            ],
            "human": [
                "Empathie exceptionnelle et écoute sensible",
                "Patience et gestion des émotions intenses des familles",
                "Sens de l'esthétique et du détail parfait",
                "Calme olympien et sourire inaltérable"
            ]
        },
        "studies": {
            "france": [
                "Certifications professionnelles de Wedding Planner reconnues / Formations en Événementiel (ESP, EFAP, écoles spécialisées)"
            ],
            "senegal": [
                "Licence en Gestion d'Événements & Hôtellerie / Formations spécialisées en organisation de cérémonies (BEM, ISM)"
            ]
        },
        "career": "Wedding Planner de renommée internationale (Destination Wedding), Directeur d'Agence d'Événements Privés ou Scénographe Événementiel de Luxe.",
        "relatedJobSlugs": [
            "event-manager",
            "scenographe-evenements",
            "coordinateur-evenementiel"
        ],
        "resources": [
            {
                "title": "Studyrama — Fiche métier Wedding Planner",
                "url": "https://www.studyrama.com/formations/fiches-metiers/communication/wedding-planner"
            }
        ],
        "sources": [
            "Studyrama"
        ],
        "saviezVous": "Le marché du « Destination Wedding » (se marier dans un pays d'accueil exotique avec tous ses invités) connaît une croissance mondiale fulgurante.",
        "interests": [
            "J'aime organiser des événements ou projets",
            "J'aime communiquer avec les gens",
            "J'aime l'art et le design"
        ],
        "connectedFamilies": [
            "hotellerie-restauration-hospitalite"
        ],
        "salary": {
            "france": {
                "junior": "24 000 - 30 000 € brut/an (ou honoraires de 2 500 à 5 000 € par mariage)",
                "senior": "38 000 - 65 000 € brut/an (ou honoraires de 6 000 à 15 000 € sur mariages haut de gamme)",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "300 000 - 600 000 FCFA net/mois (ou forfaits par célébration)",
                "senior": "800 000 - 1 800 000 FCFA net/mois (ou forfaits prestige cérémonies familiales)",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "longDescription": "Le Wedding Planner accompagne les futurs mariés de la première esquisse jusqu'au jour de la fête pour concevoir un mariage sur-mesure féerique et sans stress. Il gère le budget, négocie avec tous les prestataires et assure la coordination millimétrée le jour J.",
        "domain": "Événementiel & Expérience",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "🎪"
    },
    {
        "id": "regisseur-general-evenementiel",
        "slug": "regisseur-general-evenementiel",
        "title": "Régisseur Général Événementiel",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "evenementiel-experience",
        "subdomain": "Régie & Logistique événementielle",
        "sourceKey": "ESP",
        "description": "Le Régisseur Général Événementiel est le patron technique absolu sur le terrain. Responsable de la sécurité des personnes, de la coordination des équipes techniques et du respect des plannings de montage et de démontage, il veille au bon déroulement matériel de chaque seconde de l'événement.",
        "shortDescription": "Pilote technique et garant de la sécurité sur le terrain lors des montages, de l'exploitation et des démontages.",
        "missions": [
            "Étudier les plans d'implantation, les charges au sol et les capacités électriques des sites réceptifs.",
            "Coordonner sur place tous les corps de métier techniques (son, lumière, vidéo, machinerie, chapiteaux, sécurité).",
            "Élaborer et faire appliquer le plan de prévention des risques et les consignes de sécurité.",
            "Accueillir la commission de sécurité (pompiers, police, préfecture) et obtenir l'autorisation d'ouverture au public.",
            "Diriger les opérations en régie pendant toute la durée de l'événement (top départs, gestion des accès coulisses).",
            "Superviser le démontage rapide, le nettoyage complet et la restitution des lieux sans dommage."
        ],
        "salaries": {
            "france": {
                "junior": "30 000 - 36 000 € brut/an (ou statut d'intermittent du spectacle)",
                "senior": "45 000 - 68 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "400 000 - 700 000 FCFA net/mois",
                "senior": "900 000 - 1 600 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Festivals musicaux, grandes manifestations sportives, tournées de spectacles, agences de régie technique spécialisée.",
        "typicalDay": "Briefing de 50 techniciens à 6h du matin au talkie-walkie, contrôle de l'amarrage des structures métalliques face au vent et gestion de la mise sous tension générale des générateurs électriques.",
        "skills": {
            "technical": [
                "Législation stricte ERP, SSI (Systèmes de Sécurité Incendie) et habilitations électriques",
                "Lecture et modification de plans architecturaux (DWG, AutoCAD)",
                "Maîtrise de la chaîne technique scénique (accroches, levages, distribution électrique)",
                "Gestion des flux de véhicules poids-lourds et engins de levage",
                "Maniement des procédures d'évacuation d'urgence"
            ],
            "human": [
                "Autorité naturelle indiscutable",
                "Sang-froid exemplaire en situation de crise",
                "Endurance physique et mentale hors du commun",
                "Sens du devoir et protection des personnes"
            ]
        },
        "studies": {
            "france": [
                "Diplôme de Régisseur Général / Formations professionnelles supérieures de la régie (CFPTS, ISTS Avignon, ENSATT)"
            ],
            "senegal": [
                "Diplôme en Régie de Spectacle & Gestion Technique Événementielle (ENA, IMAC Dakar)"
            ]
        },
        "career": "Directeur Technique de Grande Salle de Spectacle (Arena, Zénith), Directeur des Opérations de Festival ou Consultant Sécurité ERP.",
        "relatedJobSlugs": [
            "charge-production-evenementielle",
            "logisticien-evenementiel",
            "event-manager"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Régisseur événementiel",
                "url": "https://espub.org/metiers/regisseur-evenementiel/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "Le Régisseur Général a le pouvoir légal d'annuler ou d'interrompre un spectacle ou un événement si les conditions de sécurité du public ou des équipes ne sont pas garanties.",
        "interests": [
            "J'aime bouger et être actif",
            "J'aime diriger une équipe",
            "J'aime résoudre des énigmes"
        ],
        "connectedFamilies": [
            "arts-spectacle-audiovisuel",
            "securite-defense"
        ],
        "salary": {
            "france": {
                "junior": "30 000 - 36 000 € brut/an (ou statut d'intermittent du spectacle)",
                "senior": "45 000 - 68 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "400 000 - 700 000 FCFA net/mois",
                "senior": "900 000 - 1 600 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "longDescription": "Le Régisseur Général Événementiel est le patron technique absolu sur le terrain. Responsable de la sécurité des personnes, de la coordination des équipes techniques et du respect des plannings de montage et de démontage, il veille au bon déroulement matériel de chaque seconde de l'événement.",
        "domain": "Événementiel & Expérience",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "🎪"
    },
    {
        "id": "logisticien-evenementiel",
        "slug": "logisticien-evenementiel",
        "title": "Logisticien Événementiel / Event Logistics Coordinator",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "evenementiel-experience",
        "subdomain": "Régie & Logistique événementielle",
        "sourceKey": "ESP",
        "description": "Le Logisticien Événementiel planifie et organise les flux de matériels, de marchandises et de personnes indispensables à la réussite de l'événement. Du transport des équipements jusqu'à l'hébergement et la gestion des flux de déchets, il assure une mécanique logistique sans accroc.",
        "shortDescription": "Organise les flux de transport, de stockage, de matériels et d'approvisionnement indispensables à l'événement.",
        "missions": [
            "Planifier l'acheminement, le déchargement et le stockage sécurisé des milliers d'équipements nécessaires.",
            "Gérer les réservations d'hébergement, de billetterie ferroviaire/aérienne et de transferts pour les participants et équipes.",
            "Mettre en place le plan de circulation des véhicules sur site et coordonner les zones de livraison et de stationnement.",
            "Gérer les stocks de consommables, de signalétique, de badges et de dotations cadeaux.",
            "Déployer un plan éco-responsable de tri des déchets, de lutte contre le gaspillage alimentaire et de nettoyage de site.",
            "Réaliser l'inventaire contradictoire du matériel au départ et au retour pour éviter les pertes."
        ],
        "salaries": {
            "france": {
                "junior": "26 000 - 32 000 € brut/an",
                "senior": "36 000 - 50 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "300 000 - 550 000 FCFA net/mois",
                "senior": "750 000 - 1 300 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Comités d'organisation de grandes compétitions sportives (JO, CAN, Marathons), agences de logistique événementielle, salons professionnels.",
        "typicalDay": "Gestion de l'arrivée échelonnée de 12 semi-remorques sur le site d'un salon, distribution des badges chauffeurs et optimisation des flux de tri des emballages recyclables avec la collectivité.",
        "skills": {
            "technical": [
                "Planification de la chaîne logistique (Supply Chain) appliquée à l'événementiel",
                "Logiciels de gestion de stocks et d'itinéraires",
                "Réglementation douanière pour le transport de matériel à l'international (carnets ATA)",
                "Éco-gestion événementielle (norme ISO 20121)",
                "Gestion des flottes de navettes et transports"
            ],
            "human": [
                "Rigueur d'anticipation et sens méthodique",
                "Capacité à gérer le stress des retards de livraison",
                "Pragmatisme et réactivité",
                "Communication claire avec les transporteurs"
            ]
        },
        "studies": {
            "france": [
                "BTS Transport et Prestations Logistiques / Licence Pro Logistique Événementielle (ESP, IUT)"
            ],
            "senegal": [
                "Licence Pro en Logistique & Transport (BEM Dakar, Sup de Co Dakar, ISM)"
            ]
        },
        "career": "Directeur Logistique Événementiel, Responsable des Opérations de Salon ou Directeur de Site (Venue Manager).",
        "relatedJobSlugs": [
            "regisseur-general-evenementiel",
            "coordinateur-evenementiel",
            "coordinateur-congres-salons"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Logisticien événementiel",
                "url": "https://espub.org/metiers/logisticien-evenementiel/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "La norme internationale ISO 20121 encadre désormais la gestion responsable des événements pour limiter leur empreinte carbone, un défi au cœur du travail du logisticien moderne.",
        "interests": [
            "J'aime bouger et être actif",
            "J'aime organiser des événements ou projets",
            "J'aime résoudre des énigmes"
        ],
        "connectedFamilies": [
            "transport-logistique"
        ],
        "salary": {
            "france": {
                "junior": "26 000 - 32 000 € brut/an",
                "senior": "36 000 - 50 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "300 000 - 550 000 FCFA net/mois",
                "senior": "750 000 - 1 300 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "longDescription": "Le Logisticien Événementiel planifie et organise les flux de matériels, de marchandises et de personnes indispensables à la réussite de l'événement. Du transport des équipements jusqu'à l'hébergement et la gestion des flux de déchets, il assure une mécanique logistique sans accroc.",
        "domain": "Événementiel & Expérience",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "🎪"
    },
    {
        "id": "coordinateur-congres-salons",
        "slug": "coordinateur-congres-salons",
        "title": "Coordinateur de Congrès, Foires & Salons Professionnels",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "evenementiel-experience",
        "subdomain": "Corporate, Congrès & Salons",
        "sourceKey": "ESP",
        "description": "Le Coordinateur de Congrès et Salons pilote l'organisation de grands rassemblements professionnels (B2B). Il commercialise les stands aux exposants, gère la logistique des palais des congrès, planifie les conférences plénières et garantit le succès commercial du salon.",
        "shortDescription": "Orchestre les foires, salons et congrès professionnels réunissant des milliers d'exposants et visiteurs.",
        "missions": [
            "Commercialiser les surfaces d'exposition et les espaces de stands auprès des entreprises de la filière.",
            "Coordonner l'implantation générale des allées, des stands modulaires et des zones de conférences (plan de masse).",
            "Élaborer le programme scientifique ou professionnel des tables rondes avec le comité de programmation.",
            "Gérer la logistique d'accueil des milliers de congressistes (badges d'accès, vestiaires, restauration rapide, wifi haut débit).",
            "Organiser les rendez-vous d'affaires individuels (B2B Matchmaking) entre acheteurs et fournisseurs.",
            "Analyser le trafic dans les allées et dresser le bilan d'impact économique pour les exposants."
        ],
        "salaries": {
            "france": {
                "junior": "28 000 - 35 000 € brut/an",
                "senior": "42 000 - 62 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "380 000 - 700 000 FCFA net/mois",
                "senior": "900 000 - 1 600 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Organisateurs professionnels de salons (Comexposium, GL Events, RX France), palais des congrès, centres d'exposition internationaux (CICES Dakar), fédérations professionnelles.",
        "typicalDay": "Suivi des inscriptions des 150 exposants d'un salon de l'énergie, calage de l'ordre de passage des ministres en séance plénière et vérification du débit wifi avec l'opérateur télécom.",
        "skills": {
            "technical": [
                "Gestion commerciale et prospection de salons B2B",
                "Plans d'aménagement et sécurité ERP de très grande capacité",
                "Gestion de programmes de conférences complexes",
                "Plateformes de mise en relation d'affaires (B2B matchmaking apps)",
                "Marketing direct et promotion de salon auprès des visiteurs"
            ],
            "human": [
                "Aisance commerciale et négociation",
                "Rigueur d'organisation à grande échelle",
                "Sens de la diplomatie et accueil des délégations",
                "Capacité à coordonner une multitude d'acteurs"
            ]
        },
        "studies": {
            "france": [
                "Master en Management de Congrès & Tourisme d'Affaires (ESP, IAE, Université d'Angers Esthua, Écoles de commerce)"
            ],
            "senegal": [
                "Master en Tourisme d'Affaires & Gestion de Foires/Salons (UGB Saint-Louis, Sup de Co Dakar, BEM)"
            ]
        },
        "career": "Directeur de Salon Professionnel, Directeur de Parc d'Exposition ou Directeur du Développement Événementiel B2B.",
        "relatedJobSlugs": [
            "event-manager",
            "logisticien-evenementiel",
            "responsable-evenements-corporate"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Coordinateur de congrès",
                "url": "https://espub.org/metiers/coordinateur-de-congres-et-salons/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "Les grands salons professionnels comme le Salon de l'Agriculture ou le Mobile World Congress génèrent des retombées économiques de centaines de millions d'euros pour les villes qui les hébergent.",
        "interests": [
            "J'aime organiser des événements ou projets",
            "J'aime convaincre",
            "J'aime communiquer avec les gens"
        ],
        "connectedFamilies": [
            "hotellerie-restauration-hospitalite",
            "droit-management"
        ],
        "salary": {
            "france": {
                "junior": "28 000 - 35 000 € brut/an",
                "senior": "42 000 - 62 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "380 000 - 700 000 FCFA net/mois",
                "senior": "900 000 - 1 600 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "longDescription": "Le Coordinateur de Congrès et Salons pilote l'organisation de grands rassemblements professionnels (B2B). Il commercialise les stands aux exposants, gère la logistique des palais des congrès, planifie les conférences plénières et garantit le succès commercial du salon.",
        "domain": "Événementiel & Expérience",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "🎪"
    },
    {
        "id": "scenographe-evenements",
        "slug": "scenographe-evenements",
        "title": "Scénographe d'Événements / Designer d'Espaces Éphémères",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "evenementiel-experience",
        "subdomain": "Expérience de marque & Hospitalité",
        "sourceKey": "ESP_STUDYRAMA",
        "description": "Le Scénographe d'Événements conçoit l'architecture éphémère, la mise en scène spatiale et l'ambiance immersive des événements (défilés de mode, stands spectaculaires, scènes de congrès, pop-up stores). Il marie volumes, lumières, matières et technologies pour créer une émotion visuelle immédiate.",
        "shortDescription": "Conçoit l'architecture intérieure éphémère, les décors et la mise en scène spatiale d'événements marquants.",
        "missions": [
            "Concevoir le concept spatial et l'univers décoratif en adéquation parfaite avec l'ADN de la marque.",
            "Dessiner les plans d'implantation, les croquis d'ambiance et les modélisations 3D photoréalistes du décor.",
            "Sélectionner les matériaux, mobiliers design, textiles, revêtements de sol et éclairages d'ambiance.",
            "Travailler en lien avec les constructeurs de décors, menuisiers, tapissiers et éclairagistes pour la fabrication.",
            "Garantir le respect des règles d'évacuation, de stabilité des structures et de classement au feu des matériaux (norme M1).",
            "Superviser l'installation finale des décors et ajuster les ambiances lumineuses jusqu'au rendu parfait."
        ],
        "salaries": {
            "france": {
                "junior": "28 000 - 35 000 € brut/an",
                "senior": "45 000 - 70 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "350 000 - 650 000 FCFA net/mois",
                "senior": "850 000 - 1 600 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Agences de scénographie événementielle, bureaux d'architecture éphémère, agences de design de luxe, grandes marques de mode.",
        "typicalDay": "Modélisation 3D sur SketchUp de la scène d'un lancement de smartphone haut de gamme, sélection d'échantillons de bois éco-responsable et visite de l'atelier de menuiserie pour vérifier les finitions.",
        "skills": {
            "technical": [
                "Modélisation spatiale 3D (SketchUp, AutoCAD, Vectorworks, Rhino)",
                "Rendu photoréaliste (V-Ray, Enscape)",
                "Culture du design d'espace, du mobilier et de l'architecture d'intérieur",
                "Connaissance des matériaux, des normes de résistance et de sécurité incendie",
                "Conception de décors démontables et réutilisables"
            ],
            "human": [
                "Sensibilité poétique et vision des volumes",
                "Créativité plastique et sens des textures",
                "Capacité à concrétiser une idée abstraite en un lieu palpable",
                "Rigueur constructive"
            ]
        },
        "studies": {
            "france": [
                "Diplôme en Scénographie / Design d'Espace (ESP, École Boulle, Ensad, Camondo, Écoles d'Architecture)"
            ],
            "senegal": [
                "Diplôme en Arts Plastiques, Scénographie ou Architecture d'Intérieur (École Nationale des Arts, Collège Universitaire d'Architecture)"
            ]
        },
        "career": "Directeur de la Scénographie, Architecte d'Intérieur Commercial ou Directeur Artistique d'Espaces Éphémères.",
        "relatedJobSlugs": [
            "directeur-creatif",
            "event-manager",
            "charge-production-evenementielle"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Scénographe événementiel",
                "url": "https://espub.org/metiers/scenographe/"
            },
            {
                "title": "Studyrama — Fiche métier Scénographe",
                "url": "https://www.studyrama.com/formations/fiches-metiers/communication/scenographe"
            }
        ],
        "sources": [
            "ESP",
            "Studyrama"
        ],
        "saviezVous": "Les défilés de haute couture Chanel au Grand Palais ont élevé la scénographie éphémère au rang d'œuvre d'art totale, recréant fusées spatiales, plages de sable blanc ou forêts d'automne sous la verrière.",
        "interests": [
            "J'aime concevoir des projets",
            "J'aime l'art et le design",
            "J'aime le travail manuel ou minutieux"
        ],
        "connectedFamilies": [
            "architecture-urbanisme-btp",
            "arts-spectacle-audiovisuel"
        ],
        "salary": {
            "france": {
                "junior": "28 000 - 35 000 € brut/an",
                "senior": "45 000 - 70 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "350 000 - 650 000 FCFA net/mois",
                "senior": "850 000 - 1 600 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "longDescription": "Le Scénographe d'Événements conçoit l'architecture éphémère, la mise en scène spatiale et l'ambiance immersive des événements (défilés de mode, stands spectaculaires, scènes de congrès, pop-up stores). Il marie volumes, lumières, matières et technologies pour créer une émotion visuelle immédiate.",
        "domain": "Événementiel & Expérience",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "🎪"
    },
    {
        "id": "responsable-experience-client",
        "slug": "responsable-experience-client",
        "title": "Responsable Expérience Client / CX Manager",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "evenementiel-experience",
        "subdomain": "Expérience de marque & Hospitalité",
        "sourceKey": "ESP",
        "description": "Le Responsable Expérience Client (Customer Experience Manager) conçoit et harmonise chaque moment d'interaction entre le consommateur et la marque (en boutique, sur les plateformes digitales, lors des événements et au service après-vente) pour susciter enchantement, fidélité et bouche-à-oreille positif.",
        "shortDescription": "Orchestre l'ensemble des interactions et émotions vécues par le client pour créer un parcours d'exception.",
        "missions": [
            "Cartographier l'intégralité des parcours clients omnicanaux (Customer Journeys) et détecter les points de friction.",
            "Définir les standards d'accueil, de personnalisation et de services dans les points de vente physiques et événements.",
            "Concevoir des rituels de marque mémorables et des attentions surprenantes pour enchanter les clients.",
            "Piloter les outils de recueil de la voix du client (Voice of the Customer) et analyser le NPS (Net Promoter Score) en continu.",
            "Sensibiliser et former l'ensemble des équipes en contact avec le public à la culture du service d'excellence.",
            "Mettre en place des protocoles rapides de résolution des réclamations pour transformer des clients mécontents en ambassadeurs."
        ],
        "salaries": {
            "france": {
                "junior": "36 000 - 42 000 € brut/an",
                "senior": "55 000 - 80 000 € brut/an",
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
        "workEnvironment": "Marques de luxe, hôtellerie haut de gamme, compagnies aériennes, distribution sélective, banques privées, parcs à thèmes.",
        "typicalDay": "Analyse matinale des verbatims clients recueillis après une visite en boutique, réunion de refonte du packaging de commande e-commerce pour améliorer l'expérience d'unboxing et atelier de formation des équipes d'accueil.",
        "skills": {
            "technical": [
                "Méthodologie de Design Thinking et Customer Journey Mapping",
                "Indicateurs de satisfaction (NPS, CSAT, CES)",
                "Outils de feedback management (Qualtrics, Medallia)",
                "Culture du service haut de gamme et d'hospitalité",
                "Gestion de projet transverse et conduite du changement"
            ],
            "human": [
                "Empathie naturelle exceptionnelle",
                "Obsession du détail et de l'harmonie",
                "Aisance relationnelle et leadership bienveillant",
                "Capacité à fédérer des métiers hétérogènes"
            ]
        },
        "studies": {
            "france": [
                "Master en Customer Experience / Marketing des Services / Hôtellerie de Luxe (ESP, Glion, Essec, IAE)"
            ],
            "senegal": [
                "Master en Management de la Relation Client & Hospitalité (BEM Dakar, Sup de Co Dakar, IAM)"
            ]
        },
        "career": "Chief Customer Officer (CCO), Directeur de l'Expérience de Marque ou Directeur Général d'Enseigne.",
        "relatedJobSlugs": [
            "responsable-crm",
            "chef-projet-hospitality",
            "brand-strategist"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Responsable expérience client",
                "url": "https://espub.org/metiers/responsable-experience-client/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "Selon plusieurs études de marché mondiales, plus de 80 % des consommateurs se disent prêts à payer plus cher pour un produit ou service s'il s'accompagne d'une expérience client exceptionnelle.",
        "interests": [
            "J'aime communiquer avec les gens",
            "J'aime résoudre des énigmes",
            "J'aime les marques"
        ],
        "connectedFamilies": [
            "hotellerie-restauration-hospitalite",
            "droit-management"
        ],
        "salary": {
            "france": {
                "junior": "36 000 - 42 000 € brut/an",
                "senior": "55 000 - 80 000 € brut/an",
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
        "longDescription": "Le Responsable Expérience Client (Customer Experience Manager) conçoit et harmonise chaque moment d'interaction entre le consommateur et la marque (en boutique, sur les plateformes digitales, lors des événements et au service après-vente) pour susciter enchantement, fidélité et bouche-à-oreille positif.",
        "domain": "Événementiel & Expérience",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "🎪"
    },
    {
        "id": "chef-projet-hospitality",
        "slug": "chef-projet-hospitality",
        "title": "Chef de Projet Hospitality & Relations VIP",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "evenementiel-experience",
        "subdomain": "Expérience de marque & Hospitalité",
        "sourceKey": "ESP",
        "description": "Le Chef de Projet Hospitality conçoit et déploie les programmes d'accueil haut de gamme pour les invités de marque, délégations officielles, célébrités et clients stratégiques lors de grands événements (Roland-Garros, Grand Prix de Formule 1, festivals de cinéma, loges de stades).",
        "shortDescription": "Gère l'accueil personnalisé d'exception et les programmes VIP lors de grands événements sportifs et culturels.",
        "missions": [
            "Concevoir les offres et packages d'hospitalité pour les entreprises partenaires et leurs invités de prestige.",
            "Aménager et scénariser les espaces de réception privatifs (loges d'honneur, salons VIP, pavillons éphémères).",
            "Superviser les prestations gastronomiques avec des chefs étoilés et sommeliers de renom.",
            "Organiser les accès privilégiés, les coupes-files, les voituriers et la conciergerie dédiée aux personnalités.",
            "Assurer la prise en charge personnalisée des invités de marque depuis leur arrivée jusqu'à leur départ.",
            "Gérer avec tact et célérité les demandes les plus spécifiques des célébrités et décideurs économiques."
        ],
        "salaries": {
            "france": {
                "junior": "30 000 - 36 000 € brut/an",
                "senior": "45 000 - 68 000 € brut/an",
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
        "workEnvironment": "Fédérations sportives (FIFA, UEFA, FFT), comités de grands tournois, agences spécialisées en relations publiques et hospitality, palaces.",
        "typicalDay": "Vérification des accès loges avant l'ouverture des portes d'un match de gala, accueil d'un directeur général de multinationale et de ses invités, et coordination d'un service de conciergerie VIP imprévu.",
        "skills": {
            "technical": [
                "Protocoles d'accueil de haut niveau et étiquette internationale",
                "Gestion de la restauration gastronomique et des arts de la table",
                "Sécurité des personnalités et confidentialité",
                "Négociation de partenariats de conciergerie de luxe",
                "Maîtrise courante de plusieurs langues étrangères"
            ],
            "human": [
                "Discrétion absolue et diplomatie irréprochable",
                "Présentation et élocution impeccables",
                "Sens du service exceptionnel et réactivité",
                "Maîtrise de soi en présence de personnalités célèbres"
            ]
        },
        "studies": {
            "france": [
                "Master en Hospitality Management / Relations Publiques (ESP, Institut Paul Bocuse, Vatel, Glion)"
            ],
            "senegal": [
                "Master en Management Hôtelier & Événementiel de Luxe (BEM Dakar, Sup de Co Dakar, IAM)"
            ]
        },
        "career": "Directeur de l'Hospitalité & du Protocole, Directeur des Relations VIP ou Directeur de Palace.",
        "relatedJobSlugs": [
            "responsable-experience-client",
            "event-manager",
            "charge-de-relations-publiques"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Chef de projet hospitality",
                "url": "https://espub.org/metiers/charge-de-projet-hospitality/"
            }
        ],
        "sources": [
            "ESP"
        ],
        "saviezVous": "Pendant des tournois comme les Jeux Olympiques, les programmes d'hospitalité représentent souvent un tiers des recettes commerciales totales générées par l'organisation.",
        "interests": [
            "J'aime communiquer avec les gens",
            "J'aime organiser des événements ou projets",
            "J'aime convaincre"
        ],
        "connectedFamilies": [
            "hotellerie-restauration-hospitalite"
        ],
        "salary": {
            "france": {
                "junior": "30 000 - 36 000 € brut/an",
                "senior": "45 000 - 68 000 € brut/an",
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
        "longDescription": "Le Chef de Projet Hospitality conçoit et déploie les programmes d'accueil haut de gamme pour les invités de marque, délégations officielles, célébrités et clients stratégiques lors de grands événements (Roland-Garros, Grand Prix de Formule 1, festivals de cinéma, loges de stades).",
        "domain": "Événementiel & Expérience",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "🎪"
    },
    {
        "id": "charge-de-mecenat",
        "slug": "charge-de-mecenat",
        "title": "Chargé de Mécénat, Sponsoring & Partenariats",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "evenementiel-experience",
        "subdomain": "Corporate, Congrès & Salons",
        "sourceKey": "ESP_STUDYRAMA",
        "description": "Le Chargé de Mécénat et Sponsoring recherche et noue des partenariats financiers, en nature ou de compétences entre des entreprises et des projets culturels, sportifs, humanitaires ou écologiques afin de faire rayonner leur engagement sociétal.",
        "shortDescription": "Développe des partenariats de financement et de visibilité entre entreprises et projets culturels ou sportifs.",
        "missions": [
            "Définir la stratégie de mécénat ou de sponsoring en lien avec les valeurs de la fondation ou de l'entreprise.",
            "Prospecter des entreprises marraines ou des institutions pour financer des festivals, expositions ou projets solidaires.",
            "Concevoir des dossiers de partenariat attrayants démontrant l'impact sociétal et les contreparties de visibilité offertes.",
            "Négocier et rédiger les conventions juridiques de mécénat et de sponsoring en respectant le cadre fiscal avantageux.",
            "Assurer la mise en œuvre fidèle des contreparties promises (visibilité sur les supports, places VIP, visites privées).",
            "Entretenir des relations de confiance durable avec les mécènes à travers des bilans d'impact chaleureux et documentés."
        ],
        "salaries": {
            "france": {
                "junior": "28 000 - 35 000 € brut/an",
                "senior": "42 000 - 65 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "350 000 - 650 000 FCFA net/mois",
                "senior": "850 000 - 1 600 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Fondations d'entreprises, musées nationaux, théâtres et opéras, ONG, clubs sportifs professionnels, agences de conseil en mécénat.",
        "typicalDay": "Rendez-vous avec le directeur RSE d'un groupe du CAC 40 pour lui présenter le programme éducatif d'une fondation d'art contemporain, suivi de la rédaction d'une convention de mécénat fiscalement optimisée.",
        "skills": {
            "technical": [
                "Droit du mécénat et dispositifs fiscaux d'exonération (Loi Aillagon)",
                "Techniques de prospection et de levée de fonds (Fundraising)",
                "Montage de dossiers de sponsoring commercial et sportif",
                "Connaissance fine de l'écosystème associatif et culturel",
                "Outils de CRM donateurs"
            ],
            "human": [
                "Force de conviction et enthousiasme contagieux",
                "Sensibilité aux causes culturelles et humanitaires",
                "Sens politique et aisance auprès des grands dirigeants",
                "Ténacité et rigueur de suivi"
            ]
        },
        "studies": {
            "france": [
                "Master en Mécénat / Gestion de Projets Culturels / Communication (ESP, Sciences Po, CELSA, Dauphine, IAE)"
            ],
            "senegal": [
                "Master en Gestion des Projets de Développement & Économie Solidaire (UCAD, BEM Dakar, Sup de Co)"
            ]
        },
        "career": "Directeur du Mécénat et des Partenariats, Délégué Général de Fondation d'Entreprise ou Directeur du Développement d'Institution Culturelle.",
        "relatedJobSlugs": [
            "responsable-communication-rse",
            "charge-de-relations-publiques",
            "event-manager"
        ],
        "resources": [
            {
                "title": "Fiche Métier ESP — Chargé de mécénat",
                "url": "https://espub.org/metiers/charge-de-mecenat/"
            },
            {
                "title": "Studyrama — Fiche métier Chargé de mécénat",
                "url": "https://www.studyrama.com/formations/fiches-metiers/communication/charge-de-mecenat"
            }
        ],
        "sources": [
            "ESP",
            "Studyrama"
        ],
        "saviezVous": "En France, la loi Aillagon de 2003 permet aux entreprises de déduire de leur impôt sur les sociétés 60 % du montant de leur don de mécénat, ce qui en fait un levier puissant d'engagement sociétal.",
        "interests": [
            "J'aime convaincre",
            "J'aime communiquer avec les gens",
            "J'aime aider les autres"
        ],
        "connectedFamilies": [
            "culture-patrimoine",
            "droit-management"
        ],
        "salary": {
            "france": {
                "junior": "28 000 - 35 000 € brut/an",
                "senior": "42 000 - 65 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "350 000 - 650 000 FCFA net/mois",
                "senior": "850 000 - 1 600 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "longDescription": "Le Chargé de Mécénat et Sponsoring recherche et noue des partenariats financiers, en nature ou de compétences entre des entreprises et des projets culturels, sportifs, humanitaires ou écologiques afin de faire rayonner leur engagement sociétal.",
        "domain": "Événementiel & Expérience",
        "familyName": "Communication, Marketing, Médias & Création",
        "icon": "🎪"
    }
];

    const COMMUNICATION_PATHWAYS = [
    {
        "id": "publicite-strategie-marque",
        "name": "Filière Publicité & Stratégie de Marque",
        "icon": "🎯",
        "description": "De l'analyse d'insight sociologique à la création et au pilotage de campagnes de marques légendaires en agence ou chez l'annonceur.",
        "steps": [
            {
                "title": "Baccalauréat Général / Technologique",
                "level": "Bac",
                "duration": "3 ans"
            },
            {
                "title": "Bachelor / Licence en Communication, Publicité ou Marketing (ESP, Sup de Pub, ISCOM, BEM Dakar, Sup de Co)",
                "level": "Bac+3",
                "duration": "3 ans"
            },
            {
                "title": "Master Spécialisé / MBA en Stratégie de Marque, Publicité ou Planning Stratégique (CELSA, ESP, Sciences Po, ISM)",
                "level": "Bac+5",
                "duration": "2 ans"
            },
            {
                "title": "Postes : Chef de publicité, Planneur stratégique, Brand Manager, Directeur de clientèle, Directeur de création",
                "level": "Insertion & Évolution",
                "duration": "Carrière"
            }
        ]
    },
    {
        "id": "marketing-digital-performance",
        "name": "Filière Marketing Digital, Growth & E-commerce",
        "icon": "💻",
        "description": "Maîtrise de l'acquisition payante, du SEO, du CRM automatisé et de l'analyse data pour accélérer la croissance commerciale des entreprises.",
        "steps": [
            {
                "title": "Baccalauréat Général ou STMG",
                "level": "Bac",
                "duration": "3 ans"
            },
            {
                "title": "BUT MMI, Licence Pro E-commerce ou Bachelor Digital (IUT, ESP, ESD, BEM Dakar)",
                "level": "Bac+3",
                "duration": "3 ans"
            },
            {
                "title": "Master en Marketing Digital, Data Analytics & E-business (ESP, Dauphine, Audencia, Sup de Co Dakar)",
                "level": "Bac+5",
                "duration": "2 ans"
            },
            {
                "title": "Postes : Webmarketer, Social Ads Manager, Responsable E-commerce, Head of Acquisition, CMO",
                "level": "Insertion & Évolution",
                "duration": "Carrière"
            }
        ]
    },
    {
        "id": "creation-direction-artistique",
        "name": "Filière Création, Design Graphique & Direction Artistique",
        "icon": "🎨",
        "description": "L'alliance de la maîtrise plastique, de la typographie, des technologies visuelles (2D/3D/Vidéo) et du concept artistique pour sublimer l'image des marques.",
        "steps": [
            {
                "title": "Baccalauréat Général, STD2A ou Bac Pro Métiers d'Art",
                "level": "Bac",
                "duration": "3 ans"
            },
            {
                "title": "DN MADE Graphisme / Bachelor Design & Création Visuelle (Penninghen, Gobelins, Estienne, ENA Dakar)",
                "level": "Bac+3",
                "duration": "3 ans"
            },
            {
                "title": "Master Direction Artistique, Design de Marque ou Création Publicitaire (ESP, Gobelins, Sup de Pub, ECV)",
                "level": "Bac+5",
                "duration": "2 ans"
            },
            {
                "title": "Postes : Graphiste, Illustrateur, Directeur Artistique, Directeur de Création, Head of Design",
                "level": "Insertion & Évolution",
                "duration": "Carrière"
            }
        ]
    },
    {
        "id": "relations-publiques-corporate-rse",
        "name": "Filière Relations Publiques, Affaires Publiques & RSE",
        "icon": "📣",
        "description": "Préservation de la réputation, gestion de crise, relations presse, affaires publiques et communication d'engagement sociétal et environnemental.",
        "steps": [
            {
                "title": "Baccalauréat Général",
                "level": "Bac",
                "duration": "3 ans"
            },
            {
                "title": "Licence Information-Communication, Sciences Politiques ou Droit (CELSA, Sciences Po, Universités, CESTI UCAD)",
                "level": "Bac+3",
                "duration": "3 ans"
            },
            {
                "title": "Master Affaires Publiques, Communication de Crise ou RSE (Sciences Po, CELSA, ESP, BEM Dakar)",
                "level": "Bac+5",
                "duration": "2 ans"
            },
            {
                "title": "Postes : Attaché de presse, Chargé de relations publiques, Responsable RSE, Directeur de la Communication",
                "level": "Insertion & Évolution",
                "duration": "Carrière"
            }
        ]
    },
    {
        "id": "evenementiel-experience-hospitality",
        "name": "Filière Événementiel, Scénographie & Hospitality",
        "icon": "🎪",
        "description": "Conception et pilotage logistique de rassemblements marquants, congrès, salons professionnels, scénographies immersives et accueil VIP d'exception.",
        "steps": [
            {
                "title": "Baccalauréat Général ou STMG",
                "level": "Bac",
                "duration": "3 ans"
            },
            {
                "title": "BTS Tourisme, BTS SAM ou Bachelor Événementiel & Relations Publiques (ESP, EFAP, UGB Saint-Louis)",
                "level": "Bac+3",
                "duration": "3 ans"
            },
            {
                "title": "Master Management Événementiel, Tourisme d'Affaires ou Hospitality (ESP, Glion, Institut Paul Bocuse, BEM Dakar)",
                "level": "Bac+5",
                "duration": "2 ans"
            },
            {
                "title": "Postes : Event Coordinator, Event Manager, Régisseur Général, Scénographe, Directeur d'Agence Événementielle",
                "level": "Insertion & Évolution",
                "duration": "Carrière"
            }
        ]
    }
];

    return {
        getDomains: function() {
            return DOMAINS.map(function(d) {
                return Object.assign({}, d, {
                    jobsCount: d.jobsCount || JOBS.filter(function(j) { return j.domainId === d.id; }).length
                });
            });
        },
        getDomainById: function(id) {
            return DOMAINS.find(function(d) { return d.id === id; });
        },
        getJobs: function() {
            return JOBS;
        },
        getJobById: function(id) {
            return JOBS.find(function(j) { return j.id === id; });
        },
        getJobBySlug: function(slug) {
            return JOBS.find(function(j) { return j.slug === slug || j.id === slug; });
        },
        getJobsByDomain: function(domainId) {
            return JOBS.filter(function(j) { return j.domainId === domainId; });
        },
        getPathways: function() {
            return COMMUNICATION_PATHWAYS;
        },
        getCommunicationPathways: function() {
            return COMMUNICATION_PATHWAYS;
        }
    };
}));

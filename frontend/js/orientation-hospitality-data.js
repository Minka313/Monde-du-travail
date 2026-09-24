/**
 * MODULE OFFICIEL HÔTELLERIE, RESTAURATION & HOSPITALITÉ
 * Base de données exhaustive : 8 Domaines d'Excellence • 21 Fiches Métiers Haute Profondeur
 * Double ancrage France (€) / Sénégal (FCFA)
 * Source Principale de référence : France Travail / MétierScope (Secteur 102 & Fiches ROME)
 * https://candidat.francetravail.fr/metierscope/secteurs-activite/102/hotellerie-et-restauration
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        const exported = factory();
        module.exports = exported;
        if (typeof global !== 'undefined') global.OrientationHospitalityData = exported;
        if (typeof window !== 'undefined') window.OrientationHospitalityData = exported;
    } else {
        root.OrientationHospitalityData = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    'use strict';

    const DOMAINS = [
    {
        "id": "cuisine-production-culinaire",
        "name": "Cuisine & Production culinaire",
        "icon": "🍳",
        "order": 1,
        "chainStage": "Élaboration des Recettes, Cuissons & Gestion des Brigades de Cuisine",
        "description": "Préparer les denrées alimentaires, maîtriser les cuissons et techniques culinaires, concevoir les cartes et diriger les brigades de cuisine dans le respect des règles d'hygiène HACCP.",
        "subdomains": [
            "Préparations de base & Commis de cuisine",
            "Cuisine de tradition & Gastronomie",
            "Gestion des parties & Secondat de cuisine",
            "Chef de cuisine & Création culinaire",
            "Plonge & Hygiène du matériel de production"
        ]
    },
    {
        "id": "patisserie-desserts",
        "name": "Pâtisserie & Desserts",
        "icon": "🍰",
        "order": 2,
        "chainStage": "Confection Sucrée, Chocolaterie, Glacerie & Dressage à l'Assiette",
        "description": "Concevoir et réaliser les entremets, tartes, pâtes, chocolats, glaces et desserts à l'assiette pour sublimer la fin de repas des restaurants et salons de thé.",
        "subdomains": [
            "Pâtisserie de restaurant & Desserts à l'assiette",
            "Chocolaterie, Confiserie & Glacerie",
            "Boulangerie-Viennoiserie hôtelière"
        ]
    },
    {
        "id": "service-salle-restauration",
        "name": "Service en salle & Restauration",
        "icon": "🍽️",
        "order": 3,
        "chainStage": "Accueil en Salle, Prise de Commande, Dressage des Tables & Service Client",
        "description": "Orchestrer l'expérience client en salle : mise en place soignée, accueil personnalisé, présentation des mets, service au plateau ou au guéridon et encaissement.",
        "subdomains": [
            "Service polyvalent & Restauration rapide",
            "Service en salle traditionnel & Brasserie",
            "Garçon de café & Art du comptoir",
            "Maîtrise d'hôtel & Service haut de gamme"
        ]
    },
    {
        "id": "bar-boissons-sommellerie",
        "name": "Bar, Boissons & Sommellerie",
        "icon": "🍷",
        "order": 4,
        "chainStage": "Confection de Boissons, Mixologie, Dégustation & Conseil Accords Mets-Vins",
        "description": "Créer des cocktails signature, servir les boissons avec expertise, gérer la cave à vin, conseiller les accords mets-vins et valoriser le patrimoine viticole et brassicole.",
        "subdomains": [
            "Bar & Mixologie moderne",
            "Caféterie & Barista",
            "Sommellerie, Gestion de cave & Accords gastronomiques"
        ]
    },
    {
        "id": "hebergement-accueil-reception",
        "name": "Hébergement, Accueil & Réception",
        "icon": "🛎️",
        "order": 5,
        "chainStage": "Accueil des Voyageurs, Check-in / Check-out, Réservations & Conciergerie",
        "description": "Accueillir les clients dès leur arrivée, gérer les séjours, planifier les réservations par logiciel PMS, coordonner les bagages et stationnements et garantir un confort optimal.",
        "subdomains": [
            "Réception hôtelière & Gestion des réservations",
            "Voiturier, Bagagiste & Conciergerie de luxe",
            "Accueil en résidences de tourisme & Resorts"
        ]
    },
    {
        "id": "entretien-housekeeping",
        "name": "Entretien & Housekeeping",
        "icon": "🧹",
        "order": 6,
        "chainStage": "Propreté des Chambres, Lingerie, Gestion des Étages & Contrôle Qualité",
        "description": "Garantir une propreté irréprochable et un niveau de confort exemplaire dans les chambres, suites et parties communes des établissements hôteliers.",
        "subdomains": [
            "Nettoyage des locaux & Entretien hôtelier",
            "Valet & Femme de chambre (Service des étages)",
            "Gouvernance hôtelière & Contrôle qualité"
        ]
    },
    {
        "id": "management-exploitation-etablissement",
        "name": "Management d'établissement & Restauration collective",
        "icon": "🏢",
        "order": 7,
        "chainStage": "Direction Opérationnelle, Gestion Budgétaire, RH & Exploitation Multi-sites",
        "description": "Piloter la rentabilité, diriger les équipes pluridisciplinaires, assurer la satisfaction des clients et superviser l'exploitation d'hôtels, restaurants ou cantines collectives.",
        "subdomains": [
            "Direction de restaurant & Brasserie",
            "Direction d'hôtel, Palace & Resort touristique",
            "Gestion de restauration collective (Scolaire, Médico-sociale, Entreprise)"
        ]
    },
    {
        "id": "strategie-revenue-management",
        "name": "Gestion, Stratégie & Revenue Management",
        "icon": "📊",
        "order": 8,
        "chainStage": "Yield Management, Tarification Dynamique, Analyse de la Demande & Distribution OTA",
        "description": "Optimiser le chiffre d'affaires et le taux d'occupation des établissements hôteliers grâce à l'analyse des flux de réservation, aux prévisions de la demande et à la tarification dynamique.",
        "subdomains": [
            "Yield Management & Pricing dynamique",
            "Distribution en ligne, OTA & Marketing hôtelier",
            "Contrôle de gestion & Performance financière hôtelière"
        ]
    }
];

    const JOBS = [
    {
        "id": "commis-cuisine",
        "slug": "commis-cuisine",
        "title": "Commis de cuisine",
        "aliases": [
            "Aide de cuisine",
            "Commis de partie",
            "Assistant cuisinier",
            "Apprenti en cuisine"
        ],
        "icon": "🔪",
        "image": "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&auto=format&fit=crop&q=80",
        "familyId": "hotellerie-restauration-hospitalite",
        "familyName": "Hôtellerie, Restauration & Hospitalité",
        "connectedFamilies": [
            "hotellerie-restauration-hospitalite",
            "agriculture-agritech"
        ],
        "domain": "Cuisine & Production culinaire",
        "domainId": "cuisine-production-culinaire",
        "subdomain": "Préparations de base & Commis de cuisine",
        "sectors": [
            "Restaurants traditionnels et gastronomiques",
            "Hôtels et complexes hôteliers",
            "Brasseries et bistrots",
            "Sociétés de restauration collective et traiteurs"
        ],
        "codeRome": "G1602",
        "franceTravailUrl": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1602",
        "franceTravailSource": true,
        "isEmerging": false,
        "level": "Sans diplôme à CAP / BEP (CAP Cuisine / Titre professionnel Cuisinier)",
        "salary": "🇫🇷 France : 1 800 € à 2 100 € brut/mois (SMIC hôtelier à débutant CCN HCR) • 🇸🇳 Sénégal : 100 000 à 200 000 FCFA net/mois (restauration dakaroise, réceptifs balnéaires de Saly et Cap Skirring)",
        "salaryDetails": {
            "france": {
                "starter": "1 800 € brut/mois",
                "experienced": "1 950 € brut/mois",
                "senior": "2 150 € brut/mois",
                "source": "France Travail / Convention Collective Nationale des HCR (Hôtels, Cafés, Restaurants)"
            },
            "senegal": {
                "starter": "100 000 FCFA net/mois",
                "experienced": "150 000 FCFA net/mois",
                "senior": "200 000 FCFA net/mois",
                "source": "Convention Collective de l'Hôtellerie et de la Restauration du Sénégal / Marché de l'emploi Dakar"
            }
        },
        "targetAudience": "Passionnés de cuisine souhaitant apprendre les bases techniques du métier au sein d'une brigade.",
        "workEnvironment": [
            "🔥 Cuisine chaude ou froide en tablier et toque réglementaire",
            "⚡ Rythme soutenu pendant les 'coups de feu' de midi et du soir",
            "🧼 Respect intransigeant des protocoles sanitaires HACCP et de la chaîne du froid"
        ],
        "summary": "Premier échelon indispensable de la brigade culinaire, le commis de cuisine prépare les ingrédients, épluche les légumes, découpe les viandes et poissons et assure la mise en place sous les ordres des chefs de partie.",
        "shortDescription": "Premier échelon indispensable de la brigade culinaire, le commis de cuisine prépare les ingrédients, épluche les légumes, découpe les viandes et poissons et assure la mise en place sous les ordres des chefs de partie.",
        "longDescription": "Le commis de cuisine est le bras droit direct des chefs de partie. Il commence sa journée par la réception et le contrôle qualitatif des livraisons de produits frais. Il effectue l'épluchage, le parage des viandes, le taillage des légumes (julienne, brunoise) et la préparation des fonds et sauces de base. Pendant le service, il assiste le cuisinier dans la cuisson des garnitures, le dressage minutieux et l'approvisionnement du poste de travail. En fin de service, il nettoie et désinfecte scrupuleusement le plan de travail, les couteaux et les chambres froides selon les normes HACCP.",
        "description": "Le commis de cuisine est le bras droit direct des chefs de partie. Il commence sa journée par la réception et le contrôle qualitatif des livraisons de produits frais. Il effectue l'épluchage, le parage des viandes, le taillage des légumes (julienne, brunoise) et la préparation des fonds et sauces de base. Pendant le service, il assiste le cuisinier dans la cuisson des garnitures, le dressage minutieux et l'approvisionnement du poste de travail. En fin de service, il nettoie et désinfecte scrupuleusement le plan de travail, les couteaux et les chambres froides selon les normes HACCP.",
        "missions": [
            "Réceptionner, vérifier et stocker les denrées alimentaires dans les réserves et chambres froides",
            "Effectuer les travaux préparatoires d'épluchage, parage, désossage et taillage des légumes, viandes et poissons",
            "Participer à la réalisation des sauces simples, vinaigrettes, marinades et garnitures d'accompagnement",
            "Entretenir et ranger le matériel de cuisine (couteaux, casseroles, planches à découper) et les plans de travail",
            "Appliquer strictement les règles d'hygiène corporelle, de traçabilité et de sécurité alimentaire (HACCP)"
        ],
        "activities": [
            "Taillage régulier des légumes en brunoise, julienne, mirepoix ou émincé",
            "Écaillage et éviscération des poissons frais ou parage des pièces de boucherie",
            "Surveillance des cuissons d'accompagnement (légumes vapeur, pommes de terre, riz, pâtes)",
            "Nettoyage méthodique du poste de travail et désinfection des plans en inox après chaque préparation"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Arrivée en tenue professionnelle (veste, tablier, toque, chaussures de sécurité), contrôle des frigos et déchargement des livraisons de légumes et viandes."
            },
            {
                "time": "09:30",
                "activity": "Mise en place : épluchage et taillage de 30 kg de légumes, préparation des herbes fraîches et pré-cuisson des garnitures."
            },
            {
                "time": "11:45",
                "activity": "Briefing de service avec le Chef de cuisine et vérification finale des postes de cuisson."
            },
            {
                "time": "12:00",
                "activity": "Coup de feu du déjeuner : transmission rapide des ingrédients, réapprovisionnement des garnitures et aide au dressage des assiettes."
            },
            {
                "time": "14:30",
                "activity": "Fin de service : rangement des préparations filmées et étiquetées (dates limites), nettoyage approfondi et désinfection des sols et plans de travail."
            },
            {
                "time": "18:00",
                "activity": "Deuxième service : répétition de la mise en place pour les réservations du dîner."
            }
        ],
        "daily": {
            "morning": "Réception des marchandises, mise en place rigoureuse des postes de travail et taille des légumes.",
            "afternoon": "Enchaînement du service du midi en cadence soutenue, nettoyage complet et préparation du service du soir.",
            "challenges": "Maintenir un niveau de concentration et de rapidité extrême pendant les pics d'affluence tout en gardant une hygiène irréprochable."
        },
        "skills": {
            "hard": [
                "Techniques de coupe et de taillage au couteau d'office et éminceur",
                "Connaissance des règles d'hygiène alimentaire et de la méthode HACCP",
                "Gestion des températures de stockage et respect de la chaîne du froid",
                "Utilisation sécurisée des trancheuses, hachoirs et robots coupe-légumes"
            ],
            "soft": [
                "Capacité d'écoute et exécution rapide des consignes",
                "Résistance physique (station debout prolongée, chaleur des fourneaux)",
                "Ponctualité irréprochable et sens du travail en équipe",
                "Goût de l'apprentissage et souci de la propreté méticuleuse"
            ],
            "technical": [
                "Techniques de coupe et de taillage au couteau d'office et éminceur",
                "Connaissance des règles d'hygiène alimentaire et de la méthode HACCP",
                "Gestion des températures de stockage et respect de la chaîne du froid"
            ],
            "human": [
                "Capacité d'écoute et exécution rapide des consignes",
                "Résistance physique (station debout prolongée, chaleur des fourneaux)",
                "Ponctualité irréprochable et sens du travail en équipe"
            ],
            "tools": [
                "Couteaux professionnels de chef (éminceur, couteau d'office, désosseur)",
                "Mandolines, coupe-légumes et robots mélangeurs professionnels",
                "Thermomètres à sonde et fiches d'enregistrement de traçabilité HACCP"
            ]
        },
        "qualities": [
            "Rigueur et propreté exemplaire",
            "Endurance physique et vivacité",
            "Esprit d'équipe et humilité d'apprentissage",
            "Sens de l'organisation spatiale"
        ],
        "studies": [
            "🇫🇷 France : CAP Cuisine (formation socle en 2 ans en CFA ou lycée hôtelier) ou Titre Professionnel Cuisinier (Afpa / Greta). Accessible également par l'apprentissage dès la sortie de 3e sans diplôme préalable.",
            "🇸🇳 Sénégal : CAP / BEP Cuisine et Restauration (Centre National de Qualification Professionnelle - CNQP Dakar, Lycée Technique Cheikh Ahmadou Bamba, CFP Hôtelier de Saint-Louis ou Ziguinchor)."
        ],
        "evolution": "Commis de cuisine ➔ Cuisinier de partie ➔ Demi-chef de partie ➔ Chef de partie ➔ Second de cuisine.",
        "saviezVous": {
            "fait": "Dans la brigade traditionnelle créée par Auguste Escoffier à la fin du XIXe siècle, chaque poste est codifié militairement : le commis est le soldat d'élite qui permet au chef de partie d'exécuter jusqu'à 200 plats à l'heure !",
            "chiffre": "Le métier de commis de cuisine est l'un des postes les plus recherchés de France Travail, avec plus de 35 000 offres d'emploi saisonnières et pérennes enregistrées chaque année."
        },
        "sources": [
            {
                "name": "France Travail MétierScope - Fiche Métier Commis de cuisine (ROME G1602)",
                "url": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1602",
                "date": "2026",
                "type": "Source officielle française"
            }
        ],
        "interests": [
            "passion-cuisine-gastronomie",
            "accueil-relation-client-service"
        ]
    },
    {
        "id": "cuisinier",
        "slug": "cuisinier",
        "title": "Cuisinier / Cuisinière",
        "aliases": [
            "Chef de partie",
            "Cuisinier de restaurant",
            "Cuisinière de brasserie",
            "Rôtisseur / Saucier / Poissonnier"
        ],
        "icon": "👨‍🍳",
        "image": "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&auto=format&fit=crop&q=80",
        "familyId": "hotellerie-restauration-hospitalite",
        "familyName": "Hôtellerie, Restauration & Hospitalité",
        "connectedFamilies": [
            "hotellerie-restauration-hospitalite",
            "agriculture-agritech",
            "tourisme-hotellerie"
        ],
        "domain": "Cuisine & Production culinaire",
        "domainId": "cuisine-production-culinaire",
        "subdomain": "Cuisine de tradition & Gastronomie",
        "sectors": [
            "Restaurants gastronomiques, traditionnels et bistronomiques",
            "Hôtellerie de luxe et resorts de vacances",
            "Traiteurs événementiels et réceptions",
            "Brasseries urbaines et tables d'hôtes"
        ],
        "codeRome": "G1602",
        "franceTravailUrl": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1602",
        "franceTravailSource": true,
        "isEmerging": false,
        "level": "CAP à Bac Pro (CAP Cuisine / Bac Pro Commercialisation et Services en Restauration / BP Cuisine)",
        "salary": "🇫🇷 France : 1 950 € à 2 800 € brut/mois selon expérience et qualification (CCN HCR) • 🇸🇳 Sénégal : 150 000 à 380 000 FCFA net/mois (restaurants de Dakar Almadies/Plateau, réceptifs touristiques de Saly)",
        "salaryDetails": {
            "france": {
                "starter": "1 950 € brut/mois",
                "experienced": "2 350 € brut/mois",
                "senior": "2 800 € brut/mois",
                "source": "France Travail / Observatoire des Métiers de l'Hôtellerie et de la Restauration"
            },
            "senegal": {
                "starter": "150 000 FCFA net/mois",
                "experienced": "250 000 FCFA net/mois",
                "senior": "380 000 FCFA net/mois",
                "source": "Grilles salariales Hôtellerie Sénégal / Enquêtes terrain professionnelles"
            }
        },
        "targetAudience": "Créatifs, passionnés de saveurs et d'arts de la table aimant transformer des matières premières brutes en émotions gustatives.",
        "workEnvironment": [
            "🍳 Cuisine équipée de pianos de cuisson, fours mixtes et planchas",
            "⏱️ Travail en coupure (midi et soir) avec une exigence de synchronisation parfaite",
            "🌿 Évolution vers le choix de produits locaux, de saison et éco-responsables"
        ],
        "summary": "Véritable artisan du goût, le cuisinier sélectionne, assaisonne, cuit et dresse les viandes, poissons et légumes pour régaler les convives selon les recettes et l'identité de l'établissement.",
        "shortDescription": "Véritable artisan du goût, le cuisinier sélectionne, assaisonne, cuit et dresse les viandes, poissons et légumes pour régaler les convives selon les recettes et l'identité de l'établissement.",
        "longDescription": "Le cuisinier maîtrise l'intégralité des modes de cuisson : rôtir, pocher, braiser, saisir à la plancha ou cuire à basse température sous vide. Responsable d'une 'partie' de la cuisine (saucier, rôtisseur, entremétier ou garde-manger), il coordonne les commis placés sous sa responsabilité et garantit la régularité gustative et visuelle de chaque assiette expédiée en salle. Il évalue la fraîcheur des arrivages, ajuste les assaisonnements, veille aux cuissons minute et respecte les fiches techniques pour maîtriser le coût matière (food cost).",
        "missions": [
            "Maîtriser les différentes techniques de cuisson (grillades, rôtissage, pochage, sous-vide, vapeur)",
            "Élaborer et assaisonner les sauces d'accompagnement, émulsions et jus de réduction",
            "Dresser harmonieusement et rapidement les assiettes lors de l'envoi des commandes au passe-plat",
            "Former, guider et encadrer le commis de cuisine ou l'apprenti rattaché à sa partie",
            "Gérer les stocks du poste, anticiper les ruptures et contrôler les dates limites de consommation (DLC)"
        ],
        "activities": [
            "Confection des fonds de veau, fumets de poisson et jus corsés",
            "Cuisson minute des poissons à l'unilatérale et viandes rouges selon la demande du client (bleu, saignant, à point)",
            "Dressage à la pince et à la cuillère des assiettes selon le modèle visuel du chef",
            "Contrôle systématique de la température au cœur des aliments à l'aide d'une thermosonde"
        ],
        "typicalDay": [
            {
                "time": "09:00",
                "activity": "Prise de poste : allumage des pianos, préparation des marinades et démarrage des cuissons lentes (braisés, bouillons)."
            },
            {
                "time": "10:30",
                "activity": "Mise en place de sa partie : pesée des ingrédients, confection des sauces mères et pré-dressage des garnitures."
            },
            {
                "time": "11:45",
                "activity": "Dégustation et assaisonnement des préparations avec le Second et le Chef de cuisine."
            },
            {
                "time": "12:15",
                "activity": "Envoi du service déjeuner : annonce des bons par le passe, cuissons précises et expédition sans temps mort."
            },
            {
                "time": "14:45",
                "activity": "Arrêt du service, récapitulatif des consommations, rangement hermétique et nettoyage de la partie."
            },
            {
                "time": "18:30",
                "activity": "Retour en cuisine pour le service du dîner : réajustement des préparations et nouvel envoi culinaire."
            }
        ],
        "daily": {
            "morning": "Cuisson des bases, sauces, taillage fin et mise au point gustative des plats du jour.",
            "afternoon": "Gestion intense du service, cadence des cuissons minutes et propreté impeccable de la station.",
            "challenges": "Délivrer une cuisson et un assaisonnement parfaits sous la pression de commandes simultanées."
        },
        "skills": {
            "hard": [
                "Maîtrise complète des cuissons (saisir, rôtir, pocher, braiser, basse température)",
                "Confection des sauces classiques, réductions et émulsions",
                "Sensibilité aux accords aromatiques et maîtrise de l'assaisonnement",
                "Application stricte du plan de maîtrise sanitaire (PMS) et règles HACCP"
            ],
            "soft": [
                "Rapidité d'exécution et réactivité sous pression",
                "Créativité gustative et sens de l'esthétique du dressage",
                "Sens du collectif et coordination fluide avec la salle",
                "Régularité et rigueur méthodologique"
            ],
            "technical": [
                "Maîtrise complète des cuissons (saisir, rôtir, pocher, braiser, basse température)",
                "Confection des sauces classiques, réductions et émulsions",
                "Sensibilité aux accords aromatiques et maîtrise de l'assaisonnement"
            ],
            "human": [
                "Rapidité d'exécution et réactivité sous pression",
                "Créativité gustative et sens de l'esthétique du dressage",
                "Sens du collectif et coordination fluide avec la salle"
            ],
            "tools": [
                "Four mixte vapeur / convection, salamandre et pianos de cuisson induction",
                "Thermoplongeur de cuisson sous-vide et cellule de refroidissement rapide",
                "Batterie de cuisine en cuivre, inox et couteaux japonais ou français haut de gamme"
            ]
        },
        "qualities": [
            "Sens aigu du goût et de l'odorat",
            "Résistance physique et mentale au stress",
            "Perfectionnisme et minutie",
            "Polyvalence technique"
        ],
        "studies": [
            "🇫🇷 France : CAP Cuisine (2 ans), complété idéalement par un Bac Professionnel Cuisine ou un Brevet Professionnel (BP) Arts de la cuisine. Écoles réputées : Ferrandi Paris, Lycée Hôtelier de Thonon, Institut Paul Bocuse / Lyfe.",
            "🇸🇳 Sénégal : Brevet de Technicien Hôtelier option Cuisine (École Nationale de Formation Hôtelière et Touristique - ENFHT Dakar), Certificat de Spécialité Hôtelière du CFP de Saly ou Saint-Louis."
        ],
        "evolution": "Cuisinier ➔ Chef de partie ➔ Second de cuisine ➔ Chef de cuisine ➔ Chef propriétaire / Consultant culinaire.",
        "saviezVous": {
            "fait": "En cuisine professionnelle, le terme 'passe' désigne la table chauffante séparant la cuisine de la salle où le chef valide la conformité de chaque plat avant qu'un serveur ne l'emporte !",
            "chiffre": "Plus de 80% des chefs étoilés Michelin au monde ont débuté leur carrière comme simples cuisiniers de partie à éplucher et surveiller les cuissons de base."
        },
        "sources": [
            {
                "name": "France Travail MétierScope - Fiche Métier Cuisinier / Cuisinière (ROME G1602)",
                "url": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1602",
                "date": "2026",
                "type": "Source officielle française"
            }
        ],
        "interests": [
            "passion-cuisine-gastronomie",
            "accueil-relation-client-service"
        ]
    },
    {
        "id": "second-cuisine",
        "slug": "second-cuisine",
        "title": "Second de cuisine",
        "aliases": [
            "Sous-chef de cuisine",
            "Adjoint au chef de cuisine",
            "Second de brigade",
            "Sous-cheffe de cuisine"
        ],
        "icon": "👨‍🍳",
        "image": "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=800&auto=format&fit=crop&q=80",
        "familyId": "hotellerie-restauration-hospitalite",
        "familyName": "Hôtellerie, Restauration & Hospitalité",
        "connectedFamilies": [
            "hotellerie-restauration-hospitalite",
            "droit-management",
            "agriculture-agritech"
        ],
        "domain": "Cuisine & Production culinaire",
        "domainId": "cuisine-production-culinaire",
        "subdomain": "Gestion des parties & Secondat de cuisine",
        "sectors": [
            "Restaurants gastronomiques et étoilés",
            "Hôtels 4 et 5 étoiles, resorts de luxe",
            "Grands traiteurs et organisateurs de réceptions",
            "Restauration thématique haut de gamme"
        ],
        "codeRome": "G1601",
        "franceTravailUrl": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1601",
        "franceTravailSource": true,
        "isEmerging": false,
        "level": "Bac Pro à Bac +2 (Bac Pro Cuisine / BP Arts de la cuisine / BTS Management en Hôtellerie-Restauration option Cuisine)",
        "salary": "🇫🇷 France : 2 200 € à 3 400 € brut/mois (jusqu'à 4 200 € en gastronomique/palace) • 🇸🇳 Sénégal : 250 000 à 600 000 FCFA net/mois (hôtels internationaux de Dakar, resorts de standing à Saly)",
        "salaryDetails": {
            "france": {
                "starter": "2 200 € brut/mois",
                "experienced": "2 800 € brut/mois",
                "senior": "3 400 € brut/mois",
                "source": "France Travail / Synhorcat / Données grilles salariales CCN HCR"
            },
            "senegal": {
                "starter": "250 000 FCFA net/mois",
                "experienced": "400 000 FCFA net/mois",
                "senior": "600 000 FCFA net/mois",
                "source": "Enquêtes hôtelières et d'affaires Dakar / Saly / Saint-Louis"
            }
        },
        "targetAudience": "Cuisiniers chevronnés dotés d'un leadership naturel, souhaitant manager une brigade et se préparer à devenir Chef.",
        "workEnvironment": [
            "🔥 Présence active au piano de cuisson et au passe-plat",
            "📋 Travail de gestion en coulisses (plannings d'équipes, commandes fournisseurs, suivi des fiches techniques)",
            "⚖️ Remplacement direct du Chef cuisinier en cas d'absence"
        ],
        "summary": "Bras droit et lieutenant du chef de cuisine, le second de cuisine supervise le travail de toute la brigade, coordonne les différentes parties, gère les stocks et assure le management opérationnel au passe-plat.",
        "shortDescription": "Bras droit et lieutenant du chef de cuisine, le second de cuisine supervise le travail de toute la brigade, coordonne les différentes parties, gère les stocks et assure le management opérationnel au passe-plat.",
        "longDescription": "Le second de cuisine (ou sous-chef) est le rouage central de l'organisation en cuisine. D'une part, il maîtrise toutes les techniques culinaires pour prêter main-forte à n'importe quel poste en difficulté. D'autre part, il est le garant de la discipline, des plannings d'horaires et de la transmission du savoir-faire aux commis et apprentis. Il gère les inventaires quotidiens, passe les commandes auprès des fournisseurs sélectionnés par le chef et contrôle la stricte conformité sanitaire HACCP. Lors du service, il 'envoie les bons' au micro ou à haute voix et contrôle l'allure de chaque assiette avant le départ en salle.",
        "missions": [
            "Coordonner et synchroniser l'ensemble des chefs de partie et commis pendant la préparation et le service",
            "Superviser le dressage et valider la conformité gustative et visuelle de chaque assiette expédiée",
            "Remplacer le chef de cuisine en son absence pour le pilotage de l'établissement et des achats",
            "Élaborer et suivre les fiches techniques de fabrication pour maîtriser les marges et le coût portion",
            "Veiller au respect scrupuleux de l'hygiène (HACCP), à l'entretien du matériel et à la sécurité du personnel"
        ],
        "activities": [
            "Animation du 'briefing' de service : annonce des suggestions du jour, des allergies clients et du nombre de couverts",
            "Contrôle de la conformité des températures des chambres froides et traçabilité des viandes et poissons",
            "Ajustement des recettes et tests d'essais culinaires avec le Chef",
            "Organisation des plannings de rotation des repos et des congés de la brigade"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "activity": "Arrivée matinale : vérification des arrivages fournisseurs, validation des bons de livraison et contrôle qualité."
            },
            {
                "time": "09:00",
                "activity": "Vérification des postes de travail des chefs de partie, répartition des tâches de mise en place."
            },
            {
                "time": "11:30",
                "activity": "Goûtage des sauces, des émulsions et des garnitures avec l'équipe."
            },
            {
                "time": "12:00",
                "activity": "Prise de position au passe-plat : annonce des bons, coordination du rythme de service et inspection des assiettes."
            },
            {
                "time": "14:45",
                "activity": "Débriefing de fin de service : analyse des pertes matières, inventaire des stocks et passation des commandes du lendemain."
            },
            {
                "time": "18:00",
                "activity": "Préparation et relance du coup de feu pour le service du soir."
            }
        ],
        "daily": {
            "morning": "Supervision des livraisons, vérification des préparations de base et briefing des cuisiniers.",
            "afternoon": "Pilotage au passe-plat, vérification des finitions et gestion des approvisionnements.",
            "challenges": "Faire respecter la cadence et l'excellence du chef à une dizaine de cuisiniers sans jamais perdre son calme."
        },
        "skills": {
            "hard": [
                "Maîtrise polyvalente de toutes les spécialités culinaires (saucier, rôtisseur, entremétier, garde-manger)",
                "Gestion des stocks, ratios matières premières (food cost) et fiches techniques",
                "Management opérationnel d'équipe en environnement à haute cadence",
                "Maîtrise experte de la réglementation HACCP et de la gestion des allergènes"
            ],
            "soft": [
                "Leadership fédérateur, fermeté bienveillante et autorité naturelle",
                "Gestion exemplaire du stress et réactivité face aux imprévus",
                "Pédagogie active pour former les jeunes commis et apprentis",
                "Sens aigu de la communication entre cuisine et salle"
            ],
            "technical": [
                "Maîtrise polyvalente de toutes les spécialités culinaires",
                "Gestion des stocks, ratios matières premières (food cost) et fiches techniques",
                "Management opérationnel d'équipe en environnement à haute cadence"
            ],
            "human": [
                "Leadership fédérateur, fermeté bienveillante et autorité naturelle",
                "Gestion exemplaire du stress et réactivité face aux imprévus",
                "Pédagogie active pour former les jeunes commis et apprentis"
            ],
            "tools": [
                "Logiciels de gestion hôtelière et de fiches techniques (Koust, Melba, Micros)",
                "Passe-plat chauffant et micro d'interphonie de cuisine",
                "Outils de métrologie et thermomètres enregistreurs HACCP"
            ]
        },
        "qualities": [
            "Sens aigu de l'organisation et anticipation",
            "Rigueur militaire et sens du détail",
            "Charisme et intelligence émotionnelle",
            "Résistance physique remarquable"
        ],
        "studies": [
            "🇫🇷 France : Bac Pro Cuisine ou Brevet Professionnel (BP) Arts de la cuisine, suivi idéalement d'un BTS Management en Hôtellerie-Restauration (option A Management d'unité de restauration) ou d'un Bachelor en Arts Culinaires (Ferrandi, Institut Paul Bocuse / Lyfe). Accessible après 4 à 6 ans d'expérience comme chef de partie.",
            "🇸🇳 Sénégal : BTS Hôtellerie-Restauration (ENFHT Dakar), complété par des années de pratique confirmée dans les palaces ou resorts de la Petite-Côte sénégalaise."
        ],
        "evolution": "Second de cuisine ➔ Chef de cuisine ➔ Chef exécutif de groupe hôtelier ➔ Chef propriétaire.",
        "saviezVous": {
            "fait": "Dans les grandes brigades étoilées, le second de cuisine passe souvent autant de temps sur un tableur de gestion des coûts que devant les fourneaux !",
            "chiffre": "Un bon second de cuisine permet d'économiser jusqu'à 5% sur le gaspillage alimentaire global d'un restaurant grâce à une gestion millimétrée des stocks."
        },
        "sources": [
            {
                "name": "France Travail MétierScope - Fiche Métier Management du personnel de cuisine / Second de cuisine (ROME G1601)",
                "url": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1601",
                "date": "2026",
                "type": "Source officielle française"
            }
        ],
        "interests": [
            "passion-cuisine-gastronomie",
            "management-direction-etablissement"
        ]
    },
    {
        "id": "chef-cuisinier",
        "slug": "chef-cuisinier",
        "title": "Chef cuisinier / Cheffe de cuisine",
        "aliases": [
            "Chef de cuisine",
            "Cheffe exécutive",
            "Chef cuisinier de restaurant",
            "Chef de cuisine gastronomique",
            "Maître cuisinier"
        ],
        "icon": "👨‍🍳",
        "image": "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&auto=format&fit=crop&q=80",
        "familyId": "hotellerie-restauration-hospitalite",
        "familyName": "Hôtellerie, Restauration & Hospitalité",
        "connectedFamilies": [
            "hotellerie-restauration-hospitalite",
            "droit-management",
            "agriculture-agritech",
            "tourisme-hotellerie"
        ],
        "domain": "Cuisine & Production culinaire",
        "domainId": "cuisine-production-culinaire",
        "subdomain": "Chef de cuisine & Création culinaire",
        "sectors": [
            "Restaurants gastronomiques, étoilés et tables d'auteur",
            "Palaces, hôtels 5 étoiles et resorts internationaux",
            "Compagnies de croisière de luxe et traiteurs de prestige",
            "Groupes de restauration commerciale haut de gamme"
        ],
        "codeRome": "G1601",
        "franceTravailUrl": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1601",
        "franceTravailSource": true,
        "isEmerging": false,
        "level": "Bac +2 à Bac +5 (BTS Management en Hôtellerie-Restauration / Bachelor Arts Culinaires / Master Management Hôtelier)",
        "salary": "🇫🇷 France : 2 800 € à 5 500 € brut/mois (jusqu'à 8 000 €+ pour les chefs de palaces ou établissements étoilés) • 🇸🇳 Sénégal : 450 000 à 1 500 000 FCFA net/mois (hôtellerie de luxe à Dakar, résidences diplomatiques, resorts Saly)",
        "salaryDetails": {
            "france": {
                "starter": "2 800 € brut/mois",
                "experienced": "4 200 € brut/mois",
                "senior": "6 500 € brut/mois",
                "source": "France Travail / Guide Michelin / Données salariales cadres HCR"
            },
            "senegal": {
                "starter": "450 000 FCFA net/mois",
                "experienced": "850 000 FCFA net/mois",
                "senior": "1 500 000 FCFA net/mois",
                "source": "Grilles salariales cadres hôteliers Sénégal / Hôtels 5 étoiles Dakar & Saly"
            }
        },
        "targetAudience": "Créateurs d'émotions, leaders et gestionnaires souhaitant imposer leur vision culinaire et piloter un établissement d'excellence.",
        "workEnvironment": [
            "✨ Ateliers de création culinaire et cuisines de prestige",
            "🤝 Relations constantes avec les producteurs locaux, maraîchers, éleveurs et pêcheurs",
            "📸 Exposition médiatique (critiques gastronomiques, réseaux sociaux, concours culinaires)"
        ],
        "summary": "Véritable capitaine de vaisseau et créateur de l'identité gustative d'un restaurant, le chef cuisinier conçoit la carte, sélectionne les producteurs, encadre l'ensemble de la brigade et gère la rentabilité financière de la cuisine.",
        "shortDescription": "Véritable capitaine de vaisseau et créateur de l'identité gustative d'un restaurant, le chef cuisinier conçoit la carte, sélectionne les producteurs, encadre l'ensemble de la brigade et gère la rentabilité financière de la cuisine.",
        "longDescription": "Le chef de cuisine est à la fois un artiste, un manager et un gestionnaire d'entreprise. Il imagine les menus au fil des saisons en s'approvisionnant auprès de producteurs d'exception. Il teste de nouvelles associations de textures et de saveurs, conçoit le stylisme des assiettes et transmet ses exigences d'exécution à son second et à toute sa brigade. Il est responsable des comptes d'exploitation de la cuisine : négociation des prix avec les fournisseurs, maîtrise des marges brutes, gestion des ratios de masse salariale et respect absolu des normes sanitaires et de sécurité au travail.",
        "missions": [
            "Créer la carte des menus, les plats du jour et les cartes de saison en accord avec la philosophie de l'établissement",
            "Sélectionner et négocier avec les maraîchers, éleveurs, marayeurs et vignerons partenaires",
            "Recruter, former, encadrer et insuffler l'esprit d'excellence à l'ensemble de la brigade de cuisine",
            "Calculer le coût de revient des plats, fixer les prix de vente et piloter le compte de résultat de la cuisine",
            "Garantir le respect intégral des normes sanitaires HACCP et veiller à la sécurité au travail de ses équipes"
        ],
        "activities": [
            "Séances de recherche et développement culinaire : essais de cuissons, sauces et dressages innovants",
            "Négociation hebdomadaire des prix de gros sur les marchés de gros ou avec les coopératives agricoles",
            "Direction opérationnelle des coups de feu depuis le passe-plat lors des services de prestige",
            "Échanges quotidiens avec le Maître d'hôtel et le Sommelier pour parfaire les accords mets et vins"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Point avec le Second sur les stocks et revue des réservations de prestige (VIP, critiques, régimes spécifiques)."
            },
            {
                "time": "09:30",
                "activity": "Visite du marché ou réception des produits nobles (truffe, homard, poissons de ligne, gibiers)."
            },
            {
                "time": "10:30",
                "activity": "Séance de création culinaire : ajustement d'un nouveau dessert ou d'une sauce d'accompagnement."
            },
            {
                "time": "11:45",
                "activity": "Briefing général avec les équipes de cuisine et de salle : explication des plats et démonstration de dressage."
            },
            {
                "time": "12:15",
                "activity": "Conduite du coup de feu : autorité suprême au passe-plat, validation ultime de chaque assiette."
            },
            {
                "time": "15:00",
                "activity": "Réunion administrative : analyse des marges, factures fournisseurs et plannings RH avec la direction."
            },
            {
                "time": "19:00",
                "activity": "Supervision du service d'excellence du soir et accueil en salle des convives en fin de service."
            }
        ],
        "daily": {
            "morning": "Approvisionnement noble, mise au point créative et supervision managériale de la brigade.",
            "afternoon": "Pilotage au passe-plat, analyse de rentabilité et relations avec les producteurs.",
            "challenges": "Maintenir une exigence de perfection absolue à chaque assiette tout en assurant la viabilité économique du restaurant."
        },
        "skills": {
            "hard": [
                "Maîtrise virtuose de la haute gastronomie et des techniques de pointe (émulsions, texturants, fumages)",
                "Gestion financière : calcul de food cost, ratios de productivité et rentabilité de la carte",
                "Management d'équipes de grande taille et recrutement des talents de la brigade",
                "Connaissance encyclopédique des terroirs, des produits de saison et de la sommellerie"
            ],
            "soft": [
                "Vision créative affirmée et signature culinaire originale",
                "Leadership charismatique, rigueur et résistance exceptionnelle à la fatigue",
                "Sens de la transmission pédagogique et culture de l'exemplarité",
                "Excellente aisance relationnelle face aux clients et aux médias"
            ],
            "technical": [
                "Maîtrise virtuose de la haute gastronomie et des techniques de pointe",
                "Gestion financière : calcul de food cost, ratios de productivité et rentabilité",
                "Management d'équipes de grande taille et recrutement des talents"
            ],
            "human": [
                "Vision créative affirmée et signature culinaire originale",
                "Leadership charismatique, rigueur et résistance exceptionnelle à la fatigue",
                "Sens de la transmission pédagogique et culture de l'exemplarité"
            ],
            "tools": [
                "Équipements de laboratoire culinaire (Rotavapor, centrifugeuses, Pacojet, thermoplongeurs)",
                "Progiciels de gestion intégrée de restaurant et ERP hôteliers (Lightspeed, Zenchef, Micros)",
                "Tableaux de bord de suivi des ratios de marge brute et fiches techniques digitalisées"
            ]
        },
        "qualities": [
            "Créativité et sensibilité esthétique",
            "Leadership naturel et sang-froid",
            "Résistance physique et mentale",
            "Exigence et quête constante de perfection"
        ],
        "studies": [
            "🇫🇷 France : Bac Pro Cuisine ou BP Arts de la cuisine, suivi d'un BTS Management en Hôtellerie-Restauration (MHR) ou d'un Bachelor spécialisé (École Ferrandi Paris, Institut Paul Bocuse / Lyfe, École Ducasse). Accès au titre de Chef après 7 à 10 ans d'ascension au sein de brigades réputées.",
            "🇸🇳 Sénégal : Diplôme Supérieur d'Hôtellerie (ENFHT Dakar / UFR SAT Université Gaston Berger de Saint-Louis), complété par une expérience solide en hôtellerie internationale 4 ou 5 étoiles."
        ],
        "evolution": "Chef cuisinier ➔ Chef étoilé Michelin ➔ Chef exécutif multi-établissements ➔ Chef propriétaire / Restaurateur entrepreneur.",
        "saviezVous": {
            "fait": "Le concours du Meilleur Ouvrier de France (MOF) Cuisine, reconnaissable à son col bleu-blanc-rouge, est considéré comme le Graal absolu de la profession, exigeant des années d'entraînement intensif.",
            "chiffre": "Le secteur de la gastronomie française emploie plus de 500 000 salariés et génère des milliards d'euros de retombées économiques grâce au tourisme international."
        },
        "sources": [
            {
                "name": "France Travail MétierScope - Fiche Métier Management du personnel de cuisine / Chef cuisinier (ROME G1601)",
                "url": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1601",
                "date": "2026",
                "type": "Source officielle française"
            }
        ],
        "interests": [
            "passion-cuisine-gastronomie",
            "management-direction-etablissement",
            "voyage-hospitalite-hotellerie"
        ]
    },
    {
        "id": "plongeur-restauration",
        "slug": "plongeur-restauration",
        "title": "Plongeur / Plongeuse en restauration",
        "aliases": [
            "Agent de plonge",
            "Opérateur de lavage en restauration",
            "Aide de cuisine - plongeur",
            "Plongeur-batterie"
        ],
        "icon": "🧽",
        "image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80",
        "familyId": "hotellerie-restauration-hospitalite",
        "familyName": "Hôtellerie, Restauration & Hospitalité",
        "connectedFamilies": [
            "hotellerie-restauration-hospitalite"
        ],
        "domain": "Cuisine & Production culinaire",
        "domainId": "cuisine-production-culinaire",
        "subdomain": "Plonge & Hygiène du matériel de production",
        "sectors": [
            "Restaurants traditionnels, brasseries et bistrots",
            "Hôtels et centres de vacances",
            "Cuisines centrales et cantines de restauration collective",
            "Traiteurs et organisateurs d'événements"
        ],
        "codeRome": "G1605",
        "franceTravailUrl": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1605",
        "franceTravailSource": true,
        "isEmerging": false,
        "level": "Accessible sans diplôme ni expérience préalable (formation assurée sur le poste)",
        "salary": "🇫🇷 France : 1 800 € à 2 000 € brut/mois (SMIC hôtelier CCN HCR) • 🇸🇳 Sénégal : 80 000 à 160 000 FCFA net/mois (restauration dakaroise, hôtellerie de la Petite-Côte)",
        "salaryDetails": {
            "france": {
                "starter": "1 800 € brut/mois",
                "experienced": "1 900 € brut/mois",
                "senior": "2 050 € brut/mois",
                "source": "France Travail / Convention Collective HCR / Données SMIC hôtelier"
            },
            "senegal": {
                "starter": "80 000 FCFA net/mois",
                "experienced": "120 000 FCFA net/mois",
                "senior": "160 000 FCFA net/mois",
                "source": "Pratiques salariales du secteur de la restauration au Sénégal"
            }
        },
        "targetAudience": "Personnes dynamiques, résistantes et rigoureuses souhaitant s'insérer rapidement dans l'hôtellerie-restauration sans barrière de diplôme.",
        "workEnvironment": [
            "🌊 Espace de plonge chaud et humide, bottes et tablier étanches",
            "⚡ Rythme soutenu pour réapprovisionner la salle en assiettes propres et la cuisine en casseroles",
            "🧴 Manipulation de produits dégraissants et désinfectants industriels"
        ],
        "summary": "Pilier essentiel de la fluidité du service, le plongeur nettoie, désinfecte et range la vaisselle, la verrerie et les ustensiles de cuisine (batterie) tout en garantissant la propreté de l'espace de travail.",
        "shortDescription": "Pilier essentiel de la fluidité du service, le plongeur nettoie, désinfecte et range la vaisselle, la verrerie et les ustensiles de cuisine (batterie) tout en garantissant la propreté de l'espace de travail.",
        "longDescription": "Sans plongeur, un restaurant s'arrête en moins de trente minutes ! Le plongeur assure le roulement continu des assiettes, couverts, verres et de la 'batterie' (casseroles, poêles, plaques en inox). Il trie les retours de salle, racle les déchets alimentaires vers les bacs de compostage, utilise les lave-vaisselle à capot ou à avancement automatique et décape manuellement les ustensiles brûlés. Il essuie, trie et restitue le matériel propre aux cuisiniers et aux serveurs. En fin de service, il vide les bacs à graisse, désinfecte les poubelles et nettoie le sol de la cuisine.",
        "missions": [
            "Réceptionner, débarrasser et trier la vaisselle sale en provenance de la salle et la batterie de la cuisine",
            "Faire fonctionner les lave-vaisselle industriels à capot, régler les doses de produits de lavage et de rinçage",
            "Laver et récurer manuellement les ustensiles volumineux (marmites, sauteuses, plaques de cuisson)",
            "Essuyer et ranger rapidement la vaisselle propre et les couverts aux postes de dressage",
            "Évacuer les déchets organiques, nettoyer les siphons de sol et désinfecter la zone de plonge"
        ],
        "activities": [
            "Remplissage et vidange des bacs de trempage avec eau chaude et dégraissant alimentaire",
            "Alimentation rythmée des casiers de verres et d'assiettes dans le lave-vaisselle",
            "Contrôle visuel de la propreté impeccable de chaque verre et assiette avant rangement",
            "Balayage et lavage au jet d'eau / raclette des sols de la cuisine à la fermeture"
        ],
        "typicalDay": [
            {
                "time": "11:30",
                "activity": "Mise en route de la machine à laver, vérification des niveaux de détergent et préparation des bacs de trempage."
            },
            {
                "time": "12:15",
                "activity": "Arrivée massive des premiers plateaux de vaisselle sale : tri immédiat, passage en machine et essuyage des couverts."
            },
            {
                "time": "13:30",
                "activity": "Nettoyage en flux tendu de la batterie de cuisine (casseroles, poêles) réclamée d'urgence par les cuisiniers."
            },
            {
                "time": "14:45",
                "activity": "Fin des retours : récurage des bacs, vidange et nettoyage des filtres du lave-vaisselle, évacuation des poubelles."
            },
            {
                "time": "15:30",
                "activity": "Lavage complet du sol de la plonge et coupure d'après-midi."
            },
            {
                "time": "18:45",
                "activity": "Reprise de poste pour le service du dîner."
            }
        ],
        "daily": {
            "morning": "Vérification des machines, mise en chauffe de l'eau et aide préliminaire aux épluchages.",
            "afternoon": "Plonge intensive en cadence soutenue pendant le rush, nettoyage des filtres et désinfection des sols.",
            "challenges": "Conserver une cadence constante pour éviter tout goulot d'étranglement de vaisselle propre pendant le service."
        },
        "skills": {
            "hard": [
                "Utilisation des machines à laver la vaisselle industrielles (à capot ou à convoyeur)",
                "Connaissance des dosages des produits d'entretien et de désinfection",
                "Respect des règles de sécurité (port d'EPI, manipulation d'objets tranchants et brûlants)",
                "Tri sélectif des déchets alimentaires et respect des normes d'hygiène HACCP"
            ],
            "soft": [
                "Grande endurance physique et résistance à la chaleur et à l'humidité",
                "Rapidité d'exécution et sens du rythme",
                "Esprit d'entraide et solidarité avec la brigade",
                "Sens aigu du devoir bien fait et méticulosité"
            ],
            "technical": [
                "Utilisation des machines à laver la vaisselle industrielles",
                "Connaissance des dosages des produits d'entretien et de désinfection",
                "Respect des règles de sécurité"
            ],
            "human": [
                "Grande endurance physique et résistance à la chaleur et à l'humidité",
                "Rapidité d'exécution et sens du rythme",
                "Esprit d'entraide et solidarité avec la brigade"
            ],
            "tools": [
                "Lave-vaisselle professionnel à capot ou à tunnel de lavage",
                "Bacs de dégraissage et douchette haute pression",
                "Gants de protection thermique/chimique, tablier étanche et bottes antidérapantes"
            ]
        },
        "qualities": [
            "Robustesse et vitalité",
            "Courage et assiduité",
            "Goût de la propreté",
            "Esprit d'équipe"
        ],
        "studies": [
            "🇫🇷 France : Aucun diplôme requis. Accessible directement avec une formation sur le tas. Les personnes désireuses d'évoluer peuvent préparer un CAP Cuisine ou un Titre Professionnel Cuisinier en cours d'emploi.",
            "🇸🇳 Sénégal : Accessible sans diplôme formel. Nombreux sont les commis et chefs reconnus ayant fait leurs premiers pas au poste de plongeur avant d'apprendre sur le tas."
        ],
        "evolution": "Plongeur ➔ Aide de cuisine / Commis de cuisine ➔ Cuisinier.",
        "saviezVous": {
            "fait": "Des chefs illustres mondialement ont commencé leur parcours en cuisine comme simples plongeurs, apprenant en observant silencieusement les gestes de la brigade !",
            "chiffre": "Un lave-vaisselle à capot professionnel consomme en moyenne moins de 2,5 litres d'eau par panier de 18 assiettes, bien moins qu'un lavage manuel traditionnel."
        },
        "sources": [
            {
                "name": "France Travail MétierScope - Fiche Métier Plonge en restauration (ROME G1605)",
                "url": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1605",
                "date": "2026",
                "type": "Source officielle française"
            }
        ],
        "interests": [
            "passion-cuisine-gastronomie"
        ]
    },
    {
        "id": "patissier",
        "slug": "patissier",
        "title": "Pâtissier / Pâtissière",
        "aliases": [
            "Chef pâtissier",
            "Pâtissier de restaurant",
            "Pâtissière de boutique",
            "Chocolatier-confiseur",
            "Artisan pâtissier"
        ],
        "icon": "🍰",
        "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&auto=format&fit=crop&q=80",
        "familyId": "hotellerie-restauration-hospitalite",
        "familyName": "Hôtellerie, Restauration & Hospitalité",
        "connectedFamilies": [
            "hotellerie-restauration-hospitalite",
            "agriculture-agritech",
            "commerce-marketing"
        ],
        "domain": "Pâtisserie & Desserts",
        "domainId": "patisserie-desserts",
        "subdomain": "Pâtisserie de restaurant & Desserts à l'assiette",
        "sectors": [
            "Pâtisseries artisanales, chocolateries et salons de thé",
            "Restaurants gastronomiques et étoilés (desserts à l'assiette)",
            "Hôtellerie de luxe, palaces et resorts",
            "Boutiques traiteurs et grandes maisons de haute pâtisserie"
        ],
        "codeRome": "D1104",
        "franceTravailUrl": "https://candidat.francetravail.fr/metierscope/fiche-metier/D1104",
        "franceTravailSource": true,
        "isEmerging": false,
        "level": "CAP à Bac +2 (CAP Pâtissier / MC Cuisinier en desserts de restaurant / BTM Pâtissier / BTS Pâtisserie)",
        "salary": "🇫🇷 France : 1 850 € à 3 200 € brut/mois (jusqu'à 5 000 €+ pour un Chef pâtissier de palace ou boutique réputée) • 🇸🇳 Sénégal : 180 000 à 500 000 FCFA net/mois (pâtisseries modernes de Dakar, grands hôtels balnéaires)",
        "salaryDetails": {
            "france": {
                "starter": "1 850 € brut/mois",
                "experienced": "2 500 € brut/mois",
                "senior": "3 500 € brut/mois",
                "source": "France Travail / Confédération Nationale des Artisans Pâtissiers"
            },
            "senegal": {
                "starter": "180 000 FCFA net/mois",
                "experienced": "300 000 FCFA net/mois",
                "senior": "500 000 FCFA net/mois",
                "source": "Grilles salariales Métiers de bouche Dakar / Petite-Côte"
            }
        },
        "targetAudience": "Passionnés de créations sucrées, méticuleux, ayant le sens du détail, des textures et des équilibres gustatifs.",
        "workEnvironment": [
            "🧁 Laboratoire de pâtisserie climatisé (température contrôlée pour le chocolat et le beurre)",
            "⚖️ Pesées d'ingrédients au gramme près, travail matinal ou en coupure de restaurant",
            "🎨 Créativité visuelle constante (pochage, glaçage miroir, travail du sucre et du chocolat)"
        ],
        "summary": "Magicien des saveurs sucrées, le pâtissier maîtrise la chimie délicate des pâtes, crèmes, mousses, chocolats et fruits pour confectionner viennoiseries, entremets et desserts à l'assiette d'une grande finesse.",
        "shortDescription": "Magicien des saveurs sucrées, le pâtissier maîtrise la chimie délicate des pâtes, crèmes, mousses, chocolats et fruits pour confectionner viennoiseries, entremets et desserts à l'assiette d'une grande finesse.",
        "longDescription": "Le pâtissier allie une rigueur scientifique à une haute sensibilité artistique. En boutique comme en restaurant, la pâtisserie ne tolère aucune approximation : la moindre erreur de température ou de grammage peut gâcher un appareil. Il confectionne les pâtes de base (feuilletée, sablée, brisée, à choux), monte les crèmes (pâtissière, diplomate, ganache), cuit au degré près, glace et décore avec minutie. En restauration, le pâtissier conçoit des desserts légers, peu sucrés, jouant sur le chaud-froid et les contrastes de textures pour conclure le repas en apothéose.",
        "missions": [
            "Concevoir et fabriquer la gamme d'entremets, tartes, gâteaux de voyage et viennoiseries",
            "Maîtriser le travail du chocolat (tempérage, moulage, ganaches) et du sucre d'art",
            "Créer et dresser les desserts à l'assiette pour le service des restaurants gastronomiques",
            "Sélectionner des farines, beurres AOP, cacaos d'origine et fruits frais de saison",
            "Assurer la gestion rigoureuse des stocks, du matériel et le respect strict des normes HACCP"
        ],
        "activities": [
            "Tourage délicat de la pâte feuilletée levée pour les croissants et pains au chocolat",
            "Pochage régulier à la douille des choux, éclairs et macarons",
            "Moulage de bonbons de chocolat et réalisation de décors sculptés en chocolat",
            "Dressage minute des desserts glacés et soufflés chauds au passe-plat du restaurant"
        ],
        "typicalDay": [
            {
                "time": "05:00",
                "activity": "Arrivée au laboratoire : cuisson des viennoiseries du matin, mise en route des fours à sole."
            },
            {
                "time": "06:30",
                "activity": "Confection des crèmes et montage des entremets pour la mise en vitrine ou le service de midi."
            },
            {
                "time": "09:00",
                "activity": "Glaçage miroir des gâteaux, découpe des tartes et finition des décors aux fruits frais."
            },
            {
                "time": "11:00",
                "activity": "Tempérage du chocolat de couverture et moulage des pièces de présentation."
            },
            {
                "time": "12:30",
                "activity": "En restaurant : envoi des desserts à l'assiette en synchronisation avec le chef de cuisine."
            },
            {
                "time": "14:00",
                "activity": "Nettoyage méticuleux des marbres, batteurs-mélangeurs et rangement des chambres froides positives et négatives."
            }
        ],
        "daily": {
            "morning": "Cuissons matinales, montage des entremets et précision millimétrée des pesées.",
            "afternoon": "Finition des décors, travail du chocolat et dressage minute des commandes.",
            "challenges": "Faire preuve d'une exactitude mathématique tout en renouvelant sans cesse l'originalité esthétique."
        },
        "skills": {
            "hard": [
                "Maîtrise parfaite de toutes les pâtes (feuilletée, sablée, à choux, levée)",
                "Connaissance approfondie de la cristallisation du beurre de cacao et tempérage du chocolat",
                "Techniques de pochage, glaçage miroir, pulvérisation au pistolet et travail du sucre",
                "Maîtrise des normes sanitaires HACCP appliquées aux ovoproduits et crèmes sensibles"
            ],
            "soft": [
                "Précision millimétrée, minutie et patience infinie",
                "Créativité artistique et sens affirmé de l'harmonie des couleurs",
                "Sensibilité gustative et équilibre des sucres et acidités",
                "Discipline et goût de l'effort matinal"
            ],
            "technical": [
                "Maîtrise parfaite de toutes les pâtes",
                "Connaissance approfondie de la cristallisation du beurre de cacao et tempérage",
                "Techniques de pochage, glaçage miroir et travail du sucre"
            ],
            "human": [
                "Précision millimétrée, minutie et patience infinie",
                "Créativité artistique et sens affirmé de l'harmonie des couleurs",
                "Sensibilité gustative et équilibre des sucres et acidités"
            ],
            "tools": [
                "Batteurs-mélangeurs professionnels, laminoir à pâte et tempéreuse à chocolat",
                "Pistolet à chocolat, thermomètre infrarouge et poches à douille de précision",
                "Cellules de surgélation rapide et armoires de fermentation contrôlée"
            ]
        },
        "qualities": [
            "Minutie et rigueur quasi scientifique",
            "Sens esthétique et créativité",
            "Patience et persévérance",
            "Gourmandise éclairée"
        ],
        "studies": [
            "🇫🇷 France : CAP Pâtissier (2 ans), suivi d'une Mention Complémentaire (MC) Cuisinier en desserts de restaurant ou d'un Bac Pro Boulanger-Pâtissier. Pour les postes de direction : Brevet Technique des Métiers (BTM Pâtissier) ou Bachelor en Arts de la Pâtisserie (École Ducasse, Ferrandi Paris, École Bellouet Conseil).",
            "🇸🇳 Sénégal : CAP Pâtisserie / Restauration (ENFHT Dakar, CNQP, centres de formation professionnelle de Dakar et de Saly)."
        ],
        "evolution": "Pâtissier de boutique ➔ Chef de partie pâtisserie en restaurant ➔ Chef pâtissier d'hôtel ➔ Artisan pâtissier entrepreneur.",
        "saviezVous": {
            "fait": "La pâtisserie française est inscrite au patrimoine culturel mondial : des chefs pâtissiers comme Pierre Hermé, Cédric Grolet ou Nina Métayer sont aujourd'hui de véritables ambassadeurs de la créativité française !",
            "chiffre": "Le métier de pâtissier connaît un engouement planétaire avec une hausse de plus de 25% des créations de boutiques haut de gamme dans les grandes capitales internationales."
        },
        "sources": [
            {
                "name": "France Travail MétierScope - Fiche Métier Pâtisserie, confiserie, chocolaterie (ROME D1104)",
                "url": "https://candidat.francetravail.fr/metierscope/fiche-metier/D1104",
                "date": "2026",
                "type": "Source officielle française"
            }
        ],
        "interests": [
            "patisserie-desserts-creatifs",
            "passion-cuisine-gastronomie",
            "accueil-relation-client-service"
        ]
    },
    {
        "id": "employe-restaurant",
        "slug": "employe-restaurant",
        "title": "Employé / Employée de restaurant",
        "aliases": [
            "Équipier polyvalent de restauration",
            "Employé polyvalent de cafétéria",
            "Agent de service en restauration",
            "Employé de restauration rapide"
        ],
        "icon": "🍽️",
        "image": "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&auto=format&fit=crop&q=80",
        "familyId": "hotellerie-restauration-hospitalite",
        "familyName": "Hôtellerie, Restauration & Hospitalité",
        "connectedFamilies": [
            "hotellerie-restauration-hospitalite",
            "commerce-marketing"
        ],
        "domain": "Service en salle & Restauration",
        "domainId": "service-salle-restauration",
        "subdomain": "Service polyvalent & Restauration rapide",
        "sectors": [
            "Restauration rapide, snacking et coffee-shops",
            "Cafétérias d'entreprises, d'universités et d'hôpitaux",
            "Restaurants d'autoroute, gares et aéroports",
            "Chaînes de restauration à thème et buffets"
        ],
        "codeRome": "G1603",
        "franceTravailUrl": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1603",
        "franceTravailSource": true,
        "isEmerging": false,
        "level": "Sans diplôme à CAP (CAP Commercialisation et services en hôtel-café-restaurant / Titre pro Employé de restauration)",
        "salary": "🇫🇷 France : 1 800 € à 2 100 € brut/mois (SMIC hôtelier CCN HCR) • 🇸🇳 Sénégal : 90 000 à 180 000 FCFA net/mois (fast-foods, cafétérias de Dakar, gares routières et stations)",
        "salaryDetails": {
            "france": {
                "starter": "1 800 € brut/mois",
                "experienced": "1 920 € brut/mois",
                "senior": "2 100 € brut/mois",
                "source": "France Travail / CCN Restauration Rapide & HCR"
            },
            "senegal": {
                "starter": "90 000 FCFA net/mois",
                "experienced": "130 000 FCFA net/mois",
                "senior": "180 000 FCFA net/mois",
                "source": "Restauration commerciale moderne Dakar / Secteur formel"
            }
        },
        "targetAudience": "Candidats recherchant un métier dynamique, accessible rapidement, alliant contact avec la clientèle et esprit d'équipe.",
        "workEnvironment": [
            "⚡ Environnement à cadence rapide, travail au comptoir ou en salle",
            "🖥️ Utilisation de caisses tactiles et de bornes de commande interactives",
            "🦺 Tenue vestimentaire standardisée de l'enseigne avec charlotte ou casquette"
        ],
        "summary": "Polyvalent par excellence, l'employé de restaurant accueille les clients, prépare les repas simples (salades, sandwichs, desserts), encaisse les commandes, réapprovisionne les buffets et maintient une propreté constante de la salle.",
        "shortDescription": "Polyvalent par excellence, l'employé de restaurant accueille les clients, prépare les repas simples (salades, sandwichs, desserts), encaisse les commandes, réapprovisionne les buffets et maintient une propreté constante de la salle.",
        "longDescription": "L'employé de restaurant assure la polyvalence complète d'un point de vente de restauration. Il alterne entre l'accueil chaleureux des convives au comptoir, la prise de commande, l'encaissement informatisé, l'assemblage des plateaux et la cuisson rapide d'en-cas (pizzas, frites, burgers, grillades minutes). En salle, il s'assure que les tables soient toujours nettes et débarrassées, approvisionne les distributeurs de sauces et de serviettes et veille au réassortiment des vitrines réfrigérées. Il applique scrupuleusement les consignes d'hygiène et de conservation des aliments.",
        "missions": [
            "Accueillir le client avec le sourire, renseigner sur les formules et enregistrer la commande sur caisse tactile",
            "Assembler les plateaux, réchauffer ou cuire les snacks et servir les boissons",
            "Effectuer l'encaissement (espèces, cartes bancaires, titres restaurant, paiements mobiles)",
            "Débarrasser les tables, nettoyer les plateaux et entretenir la propreté de la salle de restauration",
            "Réceptionner les livraisons d'emballages et de produits alimentaires, vérifier les dates de péremption"
        ],
        "activities": [
            "Préparation minute des salades composées, paninis et sandwichs froids ou chauds",
            "Nettoyage méthodique des tables au désinfectant de contact alimentaire après chaque départ",
            "Approvisionnement des linéaires libre-service et vitrines à desserts",
            "Clôture de caisse et comptage des recettes journalières en fin de vacation"
        ],
        "typicalDay": [
            {
                "time": "10:30",
                "activity": "Arrivée et mise en place : garnissage des vitrines réfrigérées, contrôle des dates et approvisionnement des caisses."
            },
            {
                "time": "11:45",
                "activity": "Ouverture des portes : accueil des premiers clients, prise de commandes et service souriant."
            },
            {
                "time": "12:15",
                "activity": "Rush du déjeuner : cadence rapide aux caisses, préparation synchrone des commandes à emporter et sur place."
            },
            {
                "time": "13:45",
                "activity": "Passage en salle pour le débarrassage régulier des plateaux et désinfection des tables."
            },
            {
                "time": "14:30",
                "activity": "Nettoyage des machines (distributeurs de boissons, friteuses, toasters) et balayage de la salle."
            },
            {
                "time": "15:00",
                "activity": "Passation des consignes à l'équipe de l'après-midi."
            }
        ],
        "daily": {
            "morning": "Vérification des stocks, garniture des vitrines et mise en route des appareils de cuisson.",
            "afternoon": "Service intense au comptoir, encaissement rapide et maintien de la propreté de la salle.",
            "challenges": "Garder un sourire accueillant et un calme parfait face au flux important de clients pressés."
        },
        "skills": {
            "hard": [
                "Utilisation des caisses tactiles enregistreuses et terminaux de paiement électronique (TPE)",
                "Respect strict des normes d'hygiène HACCP et de la chaîne du froid",
                "Techniques de petite cuisine d'assemblage et préparation de snacking",
                "Gestion du réapprovisionnement et valorisation des produits en vitrine"
            ],
            "soft": [
                "Aisance relationnelle, sourire et sens de l'accueil client",
                "Rapidité d'exécution et dynamisme face au rush",
                "Sens du travail en équipe et entraide spontanée",
                "Ponctualité et présentation soignée"
            ],
            "technical": [
                "Utilisation des caisses tactiles enregistreuses et terminaux TPE",
                "Respect strict des normes d'hygiène HACCP et chaîne du froid",
                "Techniques de petite cuisine d'assemblage"
            ],
            "human": [
                "Aisance relationnelle, sourire et sens de l'accueil client",
                "Rapidité d'exécution et dynamisme face au rush",
                "Sens du travail en équipe et entraide spontanée"
            ],
            "tools": [
                "Caisses tactiles connectées (Micros, Toast, Lightspeed)",
                "Fours à cuisson accélérée, friteuses professionnelles et toasters",
                "Chariots de débarrassage et produits détergents désinfectants homologués"
            ]
        },
        "qualities": [
            "Sens du service et amabilité",
            "Énergie et réactivité",
            "Polyvalence et adaptabilité",
            "Organisation et propreté"
        ],
        "studies": [
            "🇫🇷 France : Accessible sans diplôme particulier avec formation interne assurée par l'employeur. Diplômes conseillés : CAP Commercialisation et services en hôtel-café-restaurant ou CAP Production et service en restaurations (rapide, collective, cafétéria).",
            "🇸🇳 Sénégal : Accessible directement ou après un CAP Restauration (Centres de Formation Professionnelle de Dakar, Thiès ou Saint-Louis)."
        ],
        "evolution": "Employé de restaurant ➔ Chef d'équipe / Leader de shift ➔ Assistant manager de restaurant ➔ Directeur de restaurant rapide.",
        "saviezVous": {
            "fait": "La restauration rapide et le snacking représentent aujourd'hui plus de la moitié des repas pris hors domicile en France, offrant des opportunités d'ascension interne exceptionnelles !",
            "chiffre": "Près de 60% des directeurs d'enseignes de restauration rapide ont débuté leur carrière comme simples équipiers polyvalents sur le terrain."
        },
        "sources": [
            {
                "name": "France Travail MétierScope - Fiche Métier Personnel polyvalent en restauration (ROME G1603)",
                "url": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1603",
                "date": "2026",
                "type": "Source officielle française"
            }
        ],
        "interests": [
            "accueil-relation-client-service",
            "passion-cuisine-gastronomie"
        ]
    },
    {
        "id": "serveur",
        "slug": "serveur",
        "title": "Serveur / Serveuse en restauration",
        "aliases": [
            "Serveur de restaurant",
            "Chef de rang",
            "Commis de salle",
            "Serveuse de brasserie",
            "Demi-chef de rang"
        ],
        "icon": "🤵",
        "image": "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80",
        "familyId": "hotellerie-restauration-hospitalite",
        "familyName": "Hôtellerie, Restauration & Hospitalité",
        "connectedFamilies": [
            "hotellerie-restauration-hospitalite",
            "commerce-marketing",
            "tourisme-hotellerie"
        ],
        "domain": "Service en salle & Restauration",
        "domainId": "service-salle-restauration",
        "subdomain": "Service en salle traditionnel & Brasserie",
        "sectors": [
            "Restaurants traditionnels, gastronomiques et bistronomiques",
            "Hôtels de standing et resorts de vacances",
            "Brasseries parisiennes et grandes tables urbaines",
            "Traiteurs événementiels, galas et banquets"
        ],
        "codeRome": "G1803",
        "franceTravailUrl": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1803",
        "franceTravailSource": true,
        "isEmerging": false,
        "level": "CAP à Bac Pro (CAP Commercialisation et services / Bac Pro Restauration / BP Arts du service)",
        "salary": "🇫🇷 France : 1 850 € à 2 600 € brut/mois + pourboires substantiels (CCN HCR) • 🇸🇳 Sénégal : 120 000 à 300 000 FCFA net/mois + pourboires (restaurants de Dakar Almadies/Plateau, réceptifs touristiques de Saly)",
        "salaryDetails": {
            "france": {
                "starter": "1 850 € brut/mois",
                "experienced": "2 200 € brut/mois",
                "senior": "2 600 € brut/mois",
                "source": "France Travail / Observatoire des Métiers HCR / Pratique des pourboires"
            },
            "senegal": {
                "starter": "120 000 FCFA net/mois",
                "experienced": "180 000 FCFA net/mois",
                "senior": "300 000 FCFA net/mois",
                "source": "Secteur de la restauration gastronomique et touristique au Sénégal"
            }
        },
        "targetAudience": "Personnes élégantes, courtoises et physiquement actives qui aiment le contact client, la gastronomie et l'art de recevoir.",
        "workEnvironment": [
            "✨ Salle de restaurant soignée, nappage blanc et vaisselle fine",
            "🚶 Marche constante (plusieurs kilomètres par service) plateau chargé au bras",
            "👔 Tenue impeccable (chemise, tablier noir ou costume de service selon le standing)"
        ],
        "summary": "Ambassadeur de la cuisine auprès des convives, le serveur dresse les tables, accueille chaleureusement les clients, présente la carte avec expertise, prend les commandes, assure le service des mets et veille à leur bien-être.",
        "shortDescription": "Ambassadeur de la cuisine auprès des convives, le serveur dresse les tables, accueille chaleureusement les clients, présente la carte avec expertise, prend les commandes, assure le service des mets et veille à leur bien-être.",
        "longDescription": "Le serveur en restauration est le créateur de l'ambiance et du confort du client tout au long de son repas. Avant l'arrivée des convives, il participe au 'dressage' irréprochable de son rang : alignement des verres, disposition des couverts et pliage des serviettes. Dès l'arrivée des clients, il les installe, leur remet la carte et sait décrire avec passion la composition des plats, les méthodes de cuisson et la provenance des ingrédients. Il transmet les commandes à la cuisine par boîtier électronique, porte jusqu'à quatre assiettes à la fois avec aisance, débarrasse discrètement et réalise l'encaissement tout en fidélisant la clientèle.",
        "missions": [
            "Préparer la salle de restaurant : mise en place des tables, ménage soigné et vérification du dressage",
            "Accueillir les clients, les installer à leur table et leur présenter la carte et les suggestions du jour",
            "Conseiller les convives sur les plats et orienter vers les accords mets-vins de base",
            "Prendre les commandes via un pad électronique (télécommande) et les transmettre en cuisine",
            "Servir les plats et les boissons avec élégance, synchronisation et respect des règles de préséance"
        ],
        "activities": [
            "Port de plateaux lourds au-dessus de l'épaule et transport de 3 à 4 assiettes chaudes au bras",
            "Débarrassage silencieux et changement des couverts entre chaque plat",
            "Présentation et ouverture des bouteilles d'eau et de vin à la table",
            "Édition de l'addition, encaissement et raccompagnement courtois du client vers la sortie"
        ],
        "typicalDay": [
            {
                "time": "10:30",
                "activity": "Mise en place de la salle : balayage, nettoyage des pieds de tables, repassage des nappes et mise des couverts."
            },
            {
                "time": "11:45",
                "activity": "Briefing de service avec le Maître d'hôtel et le Chef cuisinier : découverte des plats du jour et consignes."
            },
            {
                "time": "12:00",
                "activity": "Début du service du midi : accueil continu des clients, prise de commandes et aller-retours cadencés avec la cuisine."
            },
            {
                "time": "14:15",
                "activity": "Fin du service : encaissements, débarrassage intégral, dé-nappage et réarmement pour le soir."
            },
            {
                "time": "15:00",
                "activity": "Pause en coupure de l'après-midi."
            },
            {
                "time": "18:45",
                "activity": "Prise de service pour le dîner : lumières tamisées, allumage des bougies et accueil des réservations du soir."
            }
        ],
        "daily": {
            "morning": "Préparation minutieuse des tables, vérification de la verrerie et briefing de service.",
            "afternoon": "Service cadencé, port de plateaux, attention constante aux besoins des convives et encaissement.",
            "challenges": "Conserver une démarche élégante, une mémoire sans faille et une courtoisie constante malgré la fatigue physique."
        },
        "skills": {
            "hard": [
                "Techniques de service à l'assiette, au plateau et au guéridon",
                "Connaissance des règles de bienséance, préséance et arts de la table",
                "Utilisation des systèmes informatiques de commande en salle (Pads tactiles, Zenchef, Lightspeed)",
                "Connaissance des accords mets-vins de base et des fiches recettes de la carte"
            ],
            "soft": [
                "Courtoisie naturelle, politesse et excellente présentation personnelle",
                "Excellente mémoire immédiate (tables, commandes, demandes spéciales)",
                "Endurance physique et maintien postural équilibré",
                "Sens commercial et capacité de persuasion subtile (up-selling)"
            ],
            "technical": [
                "Techniques de service à l'assiette, au plateau et au guéridon",
                "Connaissance des règles de bienséance et arts de la table",
                "Utilisation des systèmes informatiques de commande en salle"
            ],
            "human": [
                "Courtoisie naturelle, politesse et excellente présentation personnelle",
                "Excellente mémoire immédiate",
                "Endurance physique et maintien postural équilibré"
            ],
            "tools": [
                "Pads et télécommandes de prise de commande tactile (Orderman, iPad)",
                "Plateaux ronds de brasserie, guéridons et chauffe-plats",
                "Tire-bouchons de sommelier, liteaux de service et terminaux de carte bancaire sans contact"
            ]
        },
        "qualities": [
            "Sens aigu du service et diplomatie",
            "Élégance corporelle et sourire constant",
            "Rapidité et discrétion",
            "Résistance à la station debout"
        ],
        "studies": [
            "🇫🇷 France : CAP Commercialisation et services en hôtel-café-restaurant (2 ans) ou Bac Professionnel Commercialisation et services en restauration (3 ans). Pour progresser vers le poste de maître d'hôtel : BTS Management en Hôtellerie-Restauration option B (Management d'unité d'hébergement / salle).",
            "🇸🇳 Sénégal : CAP / BEP Hôtellerie option Restaurant-Bar (École Nationale de Formation Hôtelière et Touristique - ENFHT Dakar, CFP Hôtelier de Saint-Louis)."
        ],
        "evolution": "Commis de salle ➔ Serveur / Demi-chef de rang ➔ Chef de rang ➔ Maître d'hôtel ➔ Directeur de salle.",
        "saviezVous": {
            "fait": "Le service à la française (tous les plats apportés en même temps sur la table) a été supplanté au XIXe siècle par le service à la russe, où chaque plat est servi successivement et chaud, révolutionnant le rôle du serveur !",
            "chiffre": "Un serveur en brasserie active parcourt en moyenne entre 12 et 18 kilomètres par jour tout en portant des charges de plusieurs kilogrammes à bout de bras."
        },
        "sources": [
            {
                "name": "France Travail MétierScope - Fiche Métier Service en restauration (ROME G1803)",
                "url": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1803",
                "date": "2026",
                "type": "Source officielle française"
            }
        ],
        "interests": [
            "accueil-relation-client-service",
            "passion-cuisine-gastronomie",
            "voyage-hospitalite-hotellerie"
        ]
    },
    {
        "id": "garcon-cafe",
        "slug": "garcon-cafe",
        "title": "Garçon / Serveuse de café",
        "aliases": [
            "Serveur de café",
            "Garçon de brasserie",
            "Limonadier",
            "Serveuse de terrasse",
            "Bistrotier"
        ],
        "icon": "☕",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80",
        "familyId": "hotellerie-restauration-hospitalite",
        "familyName": "Hôtellerie, Restauration & Hospitalité",
        "connectedFamilies": [
            "hotellerie-restauration-hospitalite",
            "commerce-marketing",
            "tourisme-hotellerie"
        ],
        "domain": "Service en salle & Restauration",
        "domainId": "service-salle-restauration",
        "subdomain": "Garçon de café & Art du comptoir",
        "sectors": [
            "Cafés traditionnels et brasseries historiques",
            "Terrasses touristiques et salons de thé",
            "Bars à bières et estaminets",
            "Cafés littéraires et lieux de convivialité urbains"
        ],
        "codeRome": "G1801",
        "franceTravailUrl": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1801",
        "franceTravailSource": true,
        "isEmerging": false,
        "level": "Sans diplôme à CAP (CAP Commercialisation et services en hôtel-café-restaurant / Formation sur le tas)",
        "salary": "🇫🇷 France : 1 800 € à 2 400 € brut/mois + pourboires de terrasse (CCN HCR) • 🇸🇳 Sénégal : 100 000 à 250 000 FCFA net/mois + pourboires (terrasses du Plateau à Dakar, cafés d'affaires et réceptifs bord de mer)",
        "salaryDetails": {
            "france": {
                "starter": "1 800 € brut/mois",
                "experienced": "2 050 € brut/mois",
                "senior": "2 450 € brut/mois",
                "source": "France Travail / Traditions des Cafés-Brasseries / Données HCR"
            },
            "senegal": {
                "starter": "100 000 FCFA net/mois",
                "experienced": "160 000 FCFA net/mois",
                "senior": "250 000 FCFA net/mois",
                "source": "Secteur des brasseries et terrasses urbaines Dakar / Saly"
            }
        },
        "targetAudience": "Personnes énergiques, vives d'esprit, dotées de gouaille, aimant le contact populaire et la dynamique intense des terrasses.",
        "workEnvironment": [
            "☕ Comptoir en zinc, percolateurs à café fumants et terrasse extérieure animée",
            "⚡ Rythme effréné aux heures de pointe (petit-déjeuner, apéritif, sortie de bureaux)",
            "🎩 Tenue emblématique traditionnelle (gilet noir, tablier blanc long 'rondin' et liteau au bras)"
        ],
        "summary": "Figure légendaire de l'art de vivre, le garçon de café sert avec dextérité et rapidité cafés, rafraîchissements et encas en terrasse ou au comptoir, jonglant avec les commandes dans une ambiance rythmée.",
        "shortDescription": "Figure légendaire de l'art de vivre, le garçon de café sert avec dextérité et rapidité cafés, rafraîchissements et encas en terrasse ou au comptoir, jonglant avec les commandes dans une ambiance rythmée.",
        "longDescription": "Le garçon de café incarne le dynamisme urbain et la convivialité des brasseries. Portant son plateau d'une seule main levée au-dessus de la foule avec un sens de l'équilibre stupéfiant, il sert expressos, thés, bières pression, croque-monsieur et limonades sans jamais ralentir. Il retient de tête des dizaines de commandes simultanées, calcule les additions à la volée, rend la monnaie dans la seconde depuis sa sacoche et échange un mot d'esprit avec les habitués. Par tous les temps, il anime la terrasse et fidélise la clientèle locale et touristique.",
        "missions": [
            "Accueillir les clients au comptoir ou en terrasse et prendre les commandes avec vivacité",
            "Confectionner les boissons chaudes (cafés, cappuccinos, thés) et tirer les bières pression",
            "Servir au plateau en terrasse avec rapidité, dextérité et équilibre parfait",
            "Calculer les additions de tête ou sur terminal, encaisser et rendre la monnaie rapidement",
            "Entretenir la propreté du comptoir, des tables de terrasse et nettoyer la machine à café"
        ],
        "activities": [
            "Jonglage au plateau chargé de verres à pied entre les chaises serrées des terrasses",
            "Entretien du percolateur, purge des buses de vapeur et moulin à café",
            "Remplissage des réfrigérateurs de boissons fraîches et des tireuses à bière",
            "Fidélisation des habitués du quartier par un accueil personnalisé et chaleureux"
        ],
        "typicalDay": [
            {
                "time": "06:30",
                "activity": "Ouverture du café : allumage du percolateur, installation des tables et chaises en terrasse, réception des journaux."
            },
            {
                "time": "07:30",
                "activity": "Rush matinal des cafés-croissants : cadence maximale au comptoir et en terrasse pour les clients pressés."
            },
            {
                "time": "10:30",
                "activity": "Débarrassage, nettoyage des tables et préparation des mises en place de midi (salades, plats du jour)."
            },
            {
                "time": "12:00",
                "activity": "Coup de feu du déjeuner de brasserie : enchaînement des plats du jour, bières pression et cafés gourmands."
            },
            {
                "time": "14:30",
                "activity": "Encaissements de fin de déjeuner et nettoyage du zinc du comptoir."
            },
            {
                "time": "16:30",
                "activity": "Pause et relais avec l'équipe de soirée (afterwork / apéritif)."
            }
        ],
        "daily": {
            "morning": "Installation de la terrasse, préparation des machines à café et rush des petits déjeuners.",
            "afternoon": "Service continu en terrasse, encaissements rapides et verres de l'après-midi.",
            "challenges": "Conserver un équilibre parfait du plateau au milieu de la foule tout en calculant les additions de tête."
        },
        "skills": {
            "hard": [
                "Équilibre et maniement virtuose du plateau de limonadier d'une seule main",
                "Connaissance des techniques de tirage de bière pression (col de mousse parfait)",
                "Maîtrise de la machine à expresso professionnelle et de la buse vapeur",
                "Calcul mental ultra-rapide et maîtrise des terminaux d'encaissement"
            ],
            "soft": [
                "Vivacité d'esprit, sens de la repartie et aisance relationnelle naturelle",
                "Mémoire prodigieuse des visages, des habitudes et des commandes",
                "Endurance physique face aux intempéries (chaleur, froid en terrasse)",
                "Sens aigu de l'observation et réactivité immédiate"
            ],
            "technical": [
                "Équilibre et maniement virtuose du plateau de limonadier",
                "Connaissance des techniques de tirage de bière pression",
                "Maîtrise de la machine à expresso professionnelle"
            ],
            "human": [
                "Vivacité d'esprit, sens de la repartie et aisance relationnelle",
                "Mémoire prodigieuse des visages et des habitudes",
                "Endurance physique face aux intempéries"
            ],
            "tools": [
                "Plateau rond antidérapant de limonadier (en métal ou bakélite)",
                "Tireuse à bière avec groupe froid et machine à café espresso à leviers/groupes",
                "Monnayeur de ceinture (sacoche de garçon de café) et TPE portable"
            ]
        },
        "qualities": [
            "Vivacité et rapidité",
            "Équilibre physique et agilité",
            "Sociabilité et bonne humeur",
            "Mémoire immédiate"
        ],
        "studies": [
            "🇫🇷 France : Accessible sans diplôme avec apprentissage direct sur le terrain. Formations valorisées : CAP Commercialisation et services en hôtel-café-restaurant ou CQP Serveur en restauration.",
            "🇸🇳 Sénégal : Accessible sans diplôme spécifique ou via les formations pratiques en service de bar/café des centres hôteliers de Dakar."
        ],
        "evolution": "Garçon de café ➔ Chef de rang de brasserie ➔ Responsable de salle / Gérant de café ➔ Propriétaire exploitant de bistrot.",
        "saviezVous": {
            "fait": "La célèbre 'Course des Garçons de Café', créée à Paris dans les années 1930, met au défi les serveurs de courir plus de 8 kilomètres à travers la ville avec un plateau chargé sans renverser une seule goutte !",
            "chiffre": "Le métier de garçon de café est l'un des emblèmes culturels français les plus photographiés par les touristes internationaux arpentant les boulevards parisiens."
        },
        "sources": [
            {
                "name": "France Travail MétierScope - Fiche Métier Café, bar brasserie (ROME G1801)",
                "url": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1801",
                "date": "2026",
                "type": "Source officielle française"
            }
        ],
        "interests": [
            "accueil-relation-client-service",
            "voyage-hospitalite-hotellerie"
        ]
    },
    {
        "id": "maitre-d-hotel",
        "slug": "maitre-d-hotel",
        "title": "Maître / Maîtresse d'hôtel",
        "aliases": [
            "Directeur de salle",
            "Premier maître d'hôtel",
            "Responsable de salle gastronomique",
            "Maîtresse de maison de restaurant"
        ],
        "icon": "🎩",
        "image": "https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&auto=format&fit=crop&q=80",
        "familyId": "hotellerie-restauration-hospitalite",
        "familyName": "Hôtellerie, Restauration & Hospitalité",
        "connectedFamilies": [
            "hotellerie-restauration-hospitalite",
            "droit-management",
            "tourisme-hotellerie"
        ],
        "domain": "Service en salle & Restauration",
        "domainId": "service-salle-restauration",
        "subdomain": "Maîtrise d'hôtel & Service haut de gamme",
        "sectors": [
            "Restaurants étoilés Michelin et gastronomiques de prestige",
            "Palaces, hôtels 5 étoiles et clubs privés de grand luxe",
            "Résidences officielles d'État, ministères et ambassades",
            "Salons privés de haute gastronomie et banquets de gala"
        ],
        "codeRome": "G1802",
        "franceTravailUrl": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1802",
        "franceTravailSource": true,
        "isEmerging": false,
        "level": "Bac Pro à Bac +3 (Bac Pro Restauration / BTS Management en Hôtellerie-Restauration / Licence Pro Hôtellerie)",
        "salary": "🇫🇷 France : 2 400 € à 4 200 € brut/mois (jusqu'à 6 000 €+ dans les palaces et grandes maisons de renom) • 🇸🇳 Sénégal : 350 000 à 900 000 FCFA net/mois (hôtels d'affaires haut de gamme Dakar, resorts de luxe de Saly)",
        "salaryDetails": {
            "france": {
                "starter": "2 400 € brut/mois",
                "experienced": "3 200 € brut/mois",
                "senior": "4 500 € brut/mois",
                "source": "France Travail / Association des Maîtres d'Hôtel de France"
            },
            "senegal": {
                "starter": "350 000 FCFA net/mois",
                "experienced": "550 000 FCFA net/mois",
                "senior": "900 000 FCFA net/mois",
                "source": "Enquêtes de rémunération hôtellerie internationale au Sénégal"
            }
        },
        "targetAudience": "Professionnels de l'accueil de prestige, diplomates du service, passionnés de haute gastronomie et de psychologie humaine.",
        "workEnvironment": [
            "✨ Salles de restaurant feutrées, argenterie étincelante et lustres en cristal",
            "🎭 Mise en scène théâtrale du repas : découpe de volailles, flambage de desserts au guéridon",
            "👔 Élégance absolue : smoking, queue-de-pie ou tailleur sur-mesure impeccable"
        ],
        "summary": "Chef d'orchestre de la salle de restaurant, le maître d'hôtel accueille les convives de marque, coordonne le ballet des chefs de rang, réalise les découpes et flambages d'art au guéridon et veille au moindre détail du confort des clients.",
        "shortDescription": "Chef d'orchestre de la salle de restaurant, le maître d'hôtel accueille les convives de marque, coordonne le ballet des chefs de rang, réalise les découpes et flambages d'art au guéridon et veille au moindre détail du confort des clients.",
        "longDescription": "Le maître d'hôtel est le garant de la perfection du service et de l'expérience vécue par le client. Bras droit de la direction du restaurant en salle, il accueille personnellement chaque convive, les appelle par leur nom s'ils sont habitués, et les guide vers leur table. Doté d'une psychologie subtile, il devine les attentes des clients : un repas d'affaires discret ou un dîner romantique festif. Il maîtrise les gestes techniques les plus pointus : découpe d'un canard au sang, levage de filets de sole au guéridon, flambage de crêpes Suzette sous les yeux ébahis des convives. Il manage les chefs de rang et les sommeliers avec une autorité élégante et règle avec tact le moindre incident.",
        "missions": [
            "Superviser la préparation et l'ordonnancement parfait de la salle avant l'ouverture",
            "Accueillir personnellement les convives, placer les tables et soigner les attentions VIP",
            "Coordonner le rythme du service entre la cuisine et les différents rangs de la salle",
            "Exécuter les découpes de viandes et poissons, carafages et flambages spectaculaires au guéridon",
            "Gérer avec diplomatie les remarques des clients et veiller à une satisfaction intégrale"
        ],
        "activities": [
            "Briefing préalable du personnel de salle : revue du plan de table et particularités des convives",
            "Découpe de précision au guéridon (filet de bœuf en croûte, pigeon rôti, turbot entier)",
            "Flambage à la liqueur devant les convives dans le respect absolu des règles de sécurité",
            "Collaboration étroite avec le Sommelier pour parfaire le timing des accords mets-vins"
        ],
        "typicalDay": [
            {
                "time": "10:30",
                "activity": "Contrôle visuel minutieux de la salle : alignement des tables, propreté de l'argenterie, composition florale et cartes des menus."
            },
            {
                "time": "11:30",
                "activity": "Briefing de la brigade de salle avec le Chef cuisinier : explication de l'esprit des plats, questions des serveurs."
            },
            {
                "time": "12:00",
                "activity": "Ouverture des portes : accueil personnalisé à l'entrée du restaurant et installation cérémonieuse des convives."
            },
            {
                "time": "12:45",
                "activity": "Service au guéridon : découpe d'une pièce de viande noble et service aux convives d'honneur."
            },
            {
                "time": "14:30",
                "activity": "Accompagnement des clients jusqu'au vestiaire, recueil des retours d'expérience et debriefing d'après-service."
            },
            {
                "time": "18:30",
                "activity": "Mise en place de l'ambiance nocturne et préparation du service de prestige du dîner."
            }
        ],
        "daily": {
            "morning": "Inspection générale de la salle, vérification des réservations VIP et briefing managérial.",
            "afternoon": "Accueil d'honneur, supervision du rythme de salle, démonstrations au guéridon et relation client.",
            "challenges": "Faire régner une harmonie et une fluidité parfaites en salle sans jamais laisser transparaître le stress des coulisses."
        },
        "skills": {
            "hard": [
                "Techniques d'art du service en salle (découpe, flambage, désossage, service à la cloche)",
                "Connaissance encyclopédique de la gastronomie française, des vins et spiritueux",
                "Pratique courante de plusieurs langues étrangères (anglais impératif, espagnol ou chinois)",
                "Management d'équipe haut de gamme et gestion des litiges avec diplomatie"
            ],
            "soft": [
                "Psychologie relationnelle, écoute active et élégance verbale irréprochable",
                "Sens aigu de l'observation et anticipation discrète du moindre désir du client",
                "Sang-froid exemplaire et autorité naturelle bienveillante",
                "Discrétion absolue quant à la vie privée des clients reçus"
            ],
            "technical": [
                "Techniques d'art du service en salle (découpe, flambage, désossage)",
                "Connaissance encyclopédique de la gastronomie et des vins",
                "Pratique courante de plusieurs langues étrangères"
            ],
            "human": [
                "Psychologie relationnelle, écoute active et élégance verbale",
                "Sens aigu de l'observation et anticipation discrète",
                "Sang-froid exemplaire et autorité naturelle bienveillante"
            ],
            "tools": [
                "Guéridon de service en bois précieux ou inox avec réchaud de flambage",
                "Couteaux de découpe à lame dentée et fourchettes de service en argent",
                "Progiciel de réservation de table en ligne et fiches clients informatisées"
            ]
        },
        "qualities": [
            "Distinction naturelle et courtoisie exquise",
            "Sens inné de la psychologie et tact",
            "Leadership élégant et rigueur",
            "Excellence mémorielle"
        ],
        "studies": [
            "🇫🇷 France : Bac Pro Restauration ou Bac Techno STHR (Sciences et Technologies de l'Hôtellerie et de la Restauration), suivi d'un BTS Management en Hôtellerie-Restauration (MHR option B) ou d'un Bachelor spécialisé (Ferrandi, Institut Paul Bocuse / Lyfe). Accessible après plusieurs années comme chef de rang.",
            "🇸🇳 Sénégal : Diplôme Supérieur en Hôtellerie option Restauration de l'ENFHT Dakar, complété par une expérience confirmée dans les réceptifs 4 et 5 étoiles de la capitale ou de la côte."
        ],
        "evolution": "Maître d'hôtel ➔ Premier Maître d'hôtel ➔ Directeur de salle ➔ Directeur de restaurant ➔ Directeur de la restauration (Food & Beverage Manager).",
        "saviezVous": {
            "fait": "Le titre de 'Meilleur Ouvrier de France' Maître d'Hôtel récompense l'art du service, la découpe de précision, l'élocution et la culture œnologique et gastronomique au plus haut niveau mondial !",
            "chiffre": "Dans un restaurant gastronomique 3 étoiles, on compte souvent autant de membres du personnel en salle que de convives à table afin de garantir une attention continue."
        },
        "sources": [
            {
                "name": "France Travail MétierScope - Fiche Métier Maître d'hôtel (ROME G1802)",
                "url": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1802",
                "date": "2026",
                "type": "Source officielle française"
            }
        ],
        "interests": [
            "accueil-relation-client-service",
            "management-direction-etablissement",
            "voyage-hospitalite-hotellerie"
        ]
    },
    {
        "id": "barman",
        "slug": "barman",
        "title": "Barman / Barmaid",
        "aliases": [
            "Mixologue",
            "Chef barman",
            "Barman de palace",
            "Barmaker",
            "Barman d'hôtel de luxe"
        ],
        "icon": "🍸",
        "image": "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&auto=format&fit=crop&q=80",
        "familyId": "hotellerie-restauration-hospitalite",
        "familyName": "Hôtellerie, Restauration & Hospitalité",
        "connectedFamilies": [
            "hotellerie-restauration-hospitalite",
            "commerce-marketing",
            "tourisme-hotellerie"
        ],
        "domain": "Bar, Boissons & Sommellerie",
        "domainId": "bar-boissons-sommellerie",
        "subdomain": "Bar & Mixologie moderne",
        "sectors": [
            "Bars à cocktails spécialisés et bars d'hôtels de luxe",
            "Palaces, resorts et clubs de vacances",
            "Établissements de nuit, lounges et rooftops",
            "Restaurants gastronomiques et bars événementiels"
        ],
        "codeRome": "G1801",
        "franceTravailUrl": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1801",
        "franceTravailSource": true,
        "isEmerging": false,
        "level": "CAP à Bac +1 (CAP Restaurant / Mention Complémentaire Employé Barman / CQP Barman)",
        "salary": "🇫🇷 France : 1 850 € à 2 800 € brut/mois (jusqu'à 4 000 € pour un Chef barman de palace réputé) • 🇸🇳 Sénégal : 150 000 à 450 000 FCFA net/mois (bars d'hôtels d'affaires, lounges huppés des Almadies et resorts balnéaires)",
        "salaryDetails": {
            "france": {
                "starter": "1 850 € brut/mois",
                "experienced": "2 300 € brut/mois",
                "senior": "3 000 € brut/mois",
                "source": "France Travail / Association des Barmen de France (ABF)"
            },
            "senegal": {
                "starter": "150 000 FCFA net/mois",
                "experienced": "260 000 FCFA net/mois",
                "senior": "450 000 FCFA net/mois",
                "source": "Lounges, hôtels 4/5 étoiles et clubs d'affaires de Dakar / Saly"
            }
        },
        "targetAudience": "Passionnés de créations aromatiques, d'ambiance nocturne raffinée, dotés d'un grand sens de l'écoute et du spectacle discret.",
        "workEnvironment": [
            "🍸 Comptoir de bar élégant, verrerie de collection et rétro-éclairage soigné",
            "🌙 Horaires essentiellement en soirée et de nuit, ambiance musicale tamisée ou festive",
            "🧊 Manipulation permanente de glace pilée, shakers, agrumes et infusions botaniques"
        ],
        "summary": "Artiste des saveurs liquides et créateur d'ambiance, le barman conçoit des cocktails classiques ou innovants, prépare sirops et garnitures maison, sert les boissons avec dextérité et noue un dialogue attentif avec les clients.",
        "shortDescription": "Artiste des saveurs liquides et créateur d'ambiance, le barman conçoit des cocktails classiques ou innovants, prépare sirops et garnitures maison, sert les boissons avec dextérité et noue un dialogue attentif avec les clients.",
        "longDescription": "Le barman (ou mixologue) combine l'art de recevoir et la chimie des saveurs. Avant l'ouverture, il réalise une mise en place pointue : découpe artistique des zestes d'agrumes, préparation de sirops maison (gingembre, hibiscus, vanille), clarification de jus frais et taillage de blocs de glace transparente. Pendant la soirée, il manie le shaker, le verre à mélange et la cuillère de bar avec précision et rapidité. Il connaît par cœur les recettes classiques internationales (Mojito, Negroni, Old Fashioned, Daiquiri) ainsi que les créations 'mocktails' sans alcool très demandées. Il est également gestionnaire : inventaire des bouteilles de prestige, respect des doses réglementaires et encaissement.",
        "missions": [
            "Préparer le bar : approvisionnement des alcools, sodas, jus, fruits frais et fabrication de glaçons limpides",
            "Créer et servir les cocktails avec ou sans alcool selon les fiches recettes officielles ou sur-mesure",
            "Accueillir chaleureusement les clients au comptoir, les conseiller et instaurer une atmosphère conviviale",
            "Assurer la gestion rigoureuse de la caisse, des stocks de bouteilles et des ratios de consommation",
            "Nettoyer scrupuleusement la verrerie, le comptoir et les outils de mixologie selon les règles d'hygiène"
        ],
        "activities": [
            "Infusion à froid de spiritueux, clarification de jus et fabrication de sirops aromatiques artisanaux",
            "Maniement précis du doseur (jigger) pour garantir l'exactitude des proportions au centilitre près",
            "Secouage rythmé au shaker ou dilution au verre à mélange avec filtre julep",
            "Échange courtois avec les clients du comptoir tout en restant discret et attentif"
        ],
        "typicalDay": [
            {
                "time": "16:00",
                "activity": "Arrivée et mise en place du bar : pressage des agrumes frais, préparation des herbes (menthe, thym) et contrôle des stocks."
            },
            {
                "time": "17:30",
                "activity": "Remplissage des bacs à glace et vérification de la propreté étincelante de la verrerie (verres martini, rocks, flûtes)."
            },
            {
                "time": "18:30",
                "activity": "Début du service afterwork : accueil des premiers clients, conseil sur les cocktails signature et service cadencé."
            },
            {
                "time": "21:30",
                "activity": "Pic de fréquentation : enchaînement rythmé des shakers et verres à mélange, ambiance musicale feutrée."
            },
            {
                "time": "01:00",
                "activity": "Dernières commandes, fermeture des caisses et comptage des recettes."
            },
            {
                "time": "01:45",
                "activity": "Nettoyage approfondi du zinc, lavage de la verrerie fine au lave-verre spécifique et inventaire des bouteilles entamées."
            }
        ],
        "daily": {
            "morning": "Repos décalé en journée et veille sur les nouvelles tendances internationales de mixologie.",
            "afternoon": "Mise en place minutieuse du bar, pressage des jus frais et préparation des garnitures.",
            "challenges": "Maintenir un équilibre parfait des saveurs et un service souriant au milieu du bruit et de la foule nocturne."
        },
        "skills": {
            "hard": [
                "Techniques professionnelles de mixologie (shake, stir, build, muddle, throw, flame)",
                "Connaissance approfondie des spiritueux, liqueurs, bitters et ingrédients sans alcool",
                "Gestion des stocks, calcul des coûts de revient par verre (pourcentage matière) et encaissement",
                "Maîtrise de la législation des débits de boissons et sensibilisation à la consommation responsable"
            ],
            "soft": [
                "Excellente aisance relationnelle, empathie et sens de la discrétion",
                "Sens aigu du rythme, coordination motrice et mémoire vive",
                "Créativité olfactive et gustative",
                "Résistance physique aux horaires nocturnes décalés"
            ],
            "technical": [
                "Techniques professionnelles de mixologie",
                "Connaissance approfondie des spiritueux, liqueurs et bitters",
                "Gestion des stocks et législation des débits de boissons"
            ],
            "human": [
                "Excellente aisance relationnelle, empathie et discrétion",
                "Sens aigu du rythme et mémoire vive",
                "Créativité olfactive et gustative"
            ],
            "tools": [
                "Shaker parisien ou Boston, cuillère de bar torsadée et passoire Hawthorne",
                "Doseurs gradués (jigger), pilon en bois et couteaux à zester",
                "Lave-verres professionnel à osmose inverse pour une brillance sans traces"
            ]
        },
        "qualities": [
            "Sens de l'accueil et charisme",
            "Écoute et discrétion professionnelle",
            "Dextérité manuelle et élégance",
            "Rigueur dans les dosages"
        ],
        "studies": [
            "🇫🇷 France : CAP Commercialisation et services en hôtel-café-restaurant ou Bac Pro Restauration, complété par la Mention Complémentaire (MC) Employé Barman (1 an en CFA). Certificats reconnus : CQP Barman du monde de la nuit, diplômes de l'Association des Barmen de France (ABF).",
            "🇸🇳 Sénégal : Formation spécialisée Bar & Restaurant à l'ENFHT Dakar, complétée par des stages en resorts de la Petite-Côte ou hôtels internationaux."
        ],
        "evolution": "Barman ➔ Chef barman ➔ Bar Manager / Directeur de bar ➔ Consultant mixologue / Propriétaire de bar à cocktails.",
        "saviezVous": {
            "fait": "L'engouement mondial pour la mixologie a remis au goût du jour des recettes de cocktails créées dans les années 1920 (comme le Sidecar ou le French 75) revisitées avec des techniques de gastronomie moléculaire !",
            "chiffre": "Le marché des cocktails sans alcool ('mocktails' ou 'no-low') enregistre une croissance annuelle de plus de 30% dans les grands bars hôteliers internationaux."
        },
        "sources": [
            {
                "name": "France Travail MétierScope - Fiche Métier Café, bar brasserie / Barman (ROME G1801)",
                "url": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1801",
                "date": "2026",
                "type": "Source officielle française"
            }
        ],
        "interests": [
            "bar-mixologie-sommellerie",
            "accueil-relation-client-service",
            "voyage-hospitalite-hotellerie"
        ]
    },
    {
        "id": "sommelier",
        "slug": "sommelier",
        "title": "Sommelier / Sommelière",
        "aliases": [
            "Chef sommelier",
            "Caviste de restaurant",
            "Conseiller en sommellerie",
            "Sommelière de palace",
            "Responsable de cave gastronomique"
        ],
        "icon": "🍷",
        "image": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&auto=format&fit=crop&q=80",
        "familyId": "hotellerie-restauration-hospitalite",
        "familyName": "Hôtellerie, Restauration & Hospitalité",
        "connectedFamilies": [
            "hotellerie-restauration-hospitalite",
            "agriculture-agritech",
            "commerce-marketing",
            "tourisme-hotellerie"
        ],
        "domain": "Bar, Boissons & Sommellerie",
        "domainId": "bar-boissons-sommellerie",
        "subdomain": "Sommellerie, Gestion de cave & Accords gastronomiques",
        "sectors": [
            "Restaurants gastronomiques et étoilés Michelin",
            "Palaces, grands hôtels internationaux et resorts",
            "Caves à vins de prestige et négoce de grands crus",
            "Bars à vins haut de gamme et œnotourisme"
        ],
        "codeRome": "G1804",
        "franceTravailUrl": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1804",
        "franceTravailSource": true,
        "isEmerging": false,
        "level": "Bac Pro à Bac +2 (Mention Complémentaire Sommellerie / BP Sommelier / BTS MHR / Titre Sommelier-Conseil)",
        "salary": "🇫🇷 France : 2 200 € à 3 800 € brut/mois (jusqu'à 6 000 €+ pour un Chef sommelier de palace ou grand restaurant étoilé) • 🇸🇳 Sénégal : 300 000 à 750 000 FCFA net/mois (restauration gastronomique de Dakar, caves de prestige et réceptifs touristiques)",
        "salaryDetails": {
            "france": {
                "starter": "2 200 € brut/mois",
                "experienced": "3 100 € brut/mois",
                "senior": "4 500 € brut/mois",
                "source": "France Travail / Union de la Sommellerie Française (UDSF)"
            },
            "senegal": {
                "starter": "300 000 FCFA net/mois",
                "experienced": "480 000 FCFA net/mois",
                "senior": "750 000 FCFA net/mois",
                "source": "Grilles spécialisées hôtellerie internationale et grands crus Dakar"
            }
        },
        "targetAudience": "Passionnés d'œnologie, de géographie viticole, d'histoire des terroirs et de gastronomie d'exception.",
        "workEnvironment": [
            "🍇 Cave à vins tempérée (12-14°C) et hygrométrie contrôlée",
            "🍷 Salle de restaurant gastronomique, dialogue attentif avec les clients",
            "✈️ Déplacements dans les vignobles et salons professionnels de dégustation"
        ],
        "summary": "Expert des cépages, des vignobles et des boissons raffinées, le sommelier conçoit la carte des vins, gère la cave du restaurant, conseille les convives sur les accords mets-vins et assure le service cérémonieux des flacons.",
        "shortDescription": "Expert des cépages, des vignobles et des boissons raffinées, le sommelier conçoit la carte des vins, gère la cave du restaurant, conseille les convives sur les accords mets-vins et assure le service cérémonieux des flacons.",
        "longDescription": "Le sommelier est le trait d'union sensoriel entre la cuisine du chef et le patrimoine vinicole. En coulisses, il sélectionne les vignerons, négocie l'achat des crus, surveille le vieillissement des bouteilles et tient un inventaire financier rigoureux d'une cave dont la valeur peut atteindre plusieurs centaines de milliers d'euros. En salle, muni de son sommelier (tire-bouchon) et de sa grappe emblématique, il écoute les goûts des convives, respecte leur budget et suggère des associations audacieuses et harmonieuses. Il débouche avec rituel, carafe ou décante si nécessaire, et sert dans des verres adaptés en racontant l'histoire du domaine.",
        "missions": [
            "Concevoir, rédiger et faire évoluer la carte des vins, champagnes, eaux minérales et spiritueux",
            "Gérer la cave du restaurant : commandes vignerons, suivi des millésimes, hygrométrie et rentabilité",
            "Collaborer étroitement avec le Chef pour imaginer des accords mets-vins sublimant chaque plat",
            "Conseiller les convives en salle avec pédagogie, humilité et sans jargon intimidant",
            "Réaliser le service du vin : présentation de l'étiquette, ouverture, dégustation, carafage et température de service"
        ],
        "activities": [
            "Dégustation à l'aveugle pour évaluer le potentiel de garde des nouveaux millésimes",
            "Carafage des vins jeunes pour aération ou décantation minutieuse à la bougie des vieux millésimes",
            "Vérification rigoureuse de la température de service au degré près selon les appellations",
            "Animation de soirées œnologiques et dégustations commentées pour la clientèle"
        ],
        "typicalDay": [
            {
                "time": "10:00",
                "activity": "Descente en cave : réception des caisses expédiées par les domaines, étiquetage et rangement par région."
            },
            {
                "time": "11:00",
                "activity": "Point avec le Chef cuisinier sur les créations du jour et ajustement des propositions de vin au verre."
            },
            {
                "time": "11:45",
                "activity": "Mise en température des bouteilles pour le service du midi dans les armoires de chambrage ou de rafraîchissement."
            },
            {
                "time": "12:15",
                "activity": "Début du service : conseil personnalisé aux tables, ouverture cérémonieuse et service des verres."
            },
            {
                "time": "14:45",
                "activity": "Mise à jour du livre de cave numérique et analyse des ventes de la matinée."
            },
            {
                "time": "18:45",
                "activity": "Préparation du service du dîner : sélection des grands crus réservés et aération préalable en carafe."
            }
        ],
        "daily": {
            "morning": "Gestion de la cave, contrôle des températures et concertation avec le chef de cuisine.",
            "afternoon": "Conseil œnologique en salle, débouchage cérémonieux et service attentif.",
            "challenges": "Trouver l'accord vin parfait pour chaque convive tout en respectant scrupuleusement son budget."
        },
        "skills": {
            "hard": [
                "Connaissance encyclopédique de l'ampélographie, des terroirs viticoles mondiaux et de la vinification",
                "Techniques professionnelles d'analyse sensorielle (robe, nez, bouche, persistance aromatique)",
                "Gestion technique et comptable d'une cave de prestige (taux de rotation, marges)",
                "Maîtrise des protocoles de décantation, carafage et choix de la verrerie œnologique"
            ],
            "soft": [
                "Pédagogie, humilité et écoute sincère des goûts des clients",
                "Mémoire olfactive et gustative exceptionnelle",
                "Élégance verbale et talent de conteur pour faire voyager le convive",
                "Polyglotte (anglais courant indispensable en hôtellerie internationale)"
            ],
            "technical": [
                "Connaissance encyclopédique des terroirs viticoles et de la vinification",
                "Techniques professionnelles d'analyse sensorielle",
                "Gestion technique et comptable d'une cave de prestige"
            ],
            "human": [
                "Pédagogie, humilité et écoute sincère des clients",
                "Mémoire olfactive et gustative exceptionnelle",
                "Élégance verbale et talent de conteur"
            ],
            "tools": [
                "Tire-bouchon limonadier professionnel de haute précision à double levier",
                "Carafes à décanter en cristal et bougeoir de décantation",
                "Caves de vieillissement thermo-régulées et système de préservation sous gaz neutre (Coravin)"
            ]
        },
        "qualities": [
            "Humilité et passion du partage",
            "Mémoire sensorielle d'exception",
            "Élégance et courtoisie",
            "Curiosité pour les nouveaux terroirs mondiaux"
        ],
        "studies": [
            "🇫🇷 France : CAP ou Bac Pro en hôtellerie-restauration, impérativement complété par la Mention Complémentaire (MC) Sommellerie (1 an) ou le Brevet Professionnel (BP) Sommelier. Écoles de renom : Université du Vin de Suze-la-Rousse, Lycée Hôtelier de Tain-l'Hermitage, Institut Paul Bocuse / Lyfe.",
            "🇸🇳 Sénégal : Formation en restauration de l'ENFHT Dakar, complétée par des formations spécialisées en œnologie et dégustation auprès des grands importateurs et cavistes de la sous-région."
        ],
        "evolution": "Commis sommelier ➔ Sommelier ➔ Chef sommelier ➔ Directeur de cave / Wine Buyer international ➔ Caviste négociant indépendant.",
        "saviezVous": {
            "fait": "Le sommelier moderne ne s'intéresse plus uniquement au vin : il conseille également les accords avec les thés de prestige, les cafés de spécialité, les eaux minérales rares et les bières artisanales !",
            "chiffre": "Le concours du Meilleur Sommelier du Monde, organisé tous les trois ans par l'ASI, réunit plus de 65 pays dans des épreuves théoriques et de dégustation à l'aveugle d'une difficulté extrême."
        },
        "sources": [
            {
                "name": "France Travail MétierScope - Fiche Métier Sommellerie (ROME G1804)",
                "url": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1804",
                "date": "2026",
                "type": "Source officielle française"
            }
        ],
        "interests": [
            "bar-mixologie-sommellerie",
            "passion-cuisine-gastronomie",
            "voyage-hospitalite-hotellerie"
        ]
    },
    {
        "id": "employe-menage",
        "slug": "employe-menage",
        "title": "Employé / Employée de ménage",
        "aliases": [
            "Agent de propreté et d'hygiène",
            "Agent d'entretien des locaux",
            "Technicien de surface hôtelier",
            "Nettoyeur de locaux"
        ],
        "icon": "🧹",
        "image": "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80",
        "familyId": "hotellerie-restauration-hospitalite",
        "familyName": "Hôtellerie, Restauration & Hospitalité",
        "connectedFamilies": [
            "hotellerie-restauration-hospitalite"
        ],
        "domain": "Entretien & Housekeeping",
        "domainId": "entretien-housekeeping",
        "subdomain": "Nettoyage des locaux & Entretien hôtelier",
        "sectors": [
            "Hôtels, résidences hôtelières et villages de vacances",
            "Entreprises de propreté et multiservices intervenant en hôtellerie",
            "Restaurants, brasseries et espaces événementiels",
            "Thermes, spas et centres de bien-être"
        ],
        "codeRome": "K2204",
        "franceTravailUrl": "https://candidat.francetravail.fr/metierscope/fiche-metier/K2204",
        "franceTravailSource": true,
        "isEmerging": false,
        "level": "Sans diplôme à CAP (CAP Agent de propreté et d'hygiène / Titre pro Agent de propreté)",
        "salary": "🇫🇷 France : 1 800 € à 2 050 € brut/mois (SMIC hôtelier CCN HCR ou Propreté) • 🇸🇳 Sénégal : 80 000 à 160 000 FCFA net/mois (hôtels, résidences meublées et complexes hôteliers)",
        "salaryDetails": {
            "france": {
                "starter": "1 800 € brut/mois",
                "experienced": "1 920 € brut/mois",
                "senior": "2 050 € brut/mois",
                "source": "France Travail / Convention Collective Nationale de la Propreté / CCN HCR"
            },
            "senegal": {
                "starter": "80 000 FCFA net/mois",
                "experienced": "120 000 FCFA net/mois",
                "senior": "160 000 FCFA net/mois",
                "source": "Pratiques salariales du secteur hôtelier et résidentiel au Sénégal"
            }
        },
        "targetAudience": "Personnes organisées, méticuleuses et autonomes aimant voir le résultat immédiat d'un travail soigné garantissant la sécurité sanitaire.",
        "workEnvironment": [
            "🧼 Parties communes d'hôtels (halls d'accueil, couloirs, salons, sanitaires, escaliers)",
            "👟 Travail physique actif, port d'EPI (gants, tabliers, chaussures de sécurité légères)",
            "🧴 Utilisation d'autolaveuses, aspirateurs industriels et produits désinfectants"
        ],
        "summary": "Garant de l'hygiène et de la salubrité, l'employé de ménage assure le nettoyage, le dépoussiérage et la désinfection méticuleuse des parties communes, sanitaires, couloirs et halls des établissements d'hospitalité.",
        "shortDescription": "Garant de l'hygiène et de la salubrité, l'employé de ménage assure le nettoyage, le dépoussiérage et la désinfection méticuleuse des parties communes, sanitaires, couloirs et halls des établissements d'hospitalité.",
        "longDescription": "L'employé de ménage se distingue du valet de chambre par son périmètre d'action centré sur les parties communes et les locaux collectifs d'un établissement hôtelier ou de restauration. Avant l'arrivée du public ou tôt le matin, il nettoie les halls de réception, fait briller les sols en marbre ou carrelage, désinfecte les poignées de portes et rampes d'escalier, nettoie les vitres et entretient les sanitaires publics avec des protocoles stricts de décontamination. Il gère son chariot d'entretien, veille à l'approvisionnement des consommables (savons, papier toilette) et signale toute anomalie technique (fuite d'eau, ampoule grillée) à la maintenance.",
        "missions": [
            "Nettoyer, aspirer, laver et désinfecter les sols des halls d'entrée, couloirs, salons et terrasses",
            "Assurer l'entretien approfondi et le réapprovisionnement des sanitaires communs",
            "Dépoussiérer les mobiliers, luminaires, plinthes et nettoyer les baies vitrées accessibles",
            "Vider les corbeilles, trier les déchets selon les filières de recyclage et évacuer les poubelles",
            "Détecter et signaler les dysfonctionnements matériels au service de maintenance technique"
        ],
        "activities": [
            "Utilisation de mono-brosses et autolaveuses autotractées pour le lustrage des sols",
            "Désinfection ciblée des points de contact fréquents (interrupteurs, boutons d'ascenseur)",
            "Lavage professionnel des vitres à la raclette sans laisser de traces",
            "Nettoyage et désinfection du matériel et du chariot d'entretien en fin de journée"
        ],
        "typicalDay": [
            {
                "time": "06:00",
                "activity": "Prise de poste matinale avant le réveil des clients : nettoyage du grand hall d'accueil et des paliers d'ascenseurs."
            },
            {
                "time": "07:30",
                "activity": "Lustrage du sol en marbre à l'autolaveuse et dépoussiérage des comptoirs d'accueil."
            },
            {
                "time": "09:00",
                "activity": "Tournée complète d'entretien et de désinfection des sanitaires publics et espaces bien-être (spa, fitness)."
            },
            {
                "time": "11:30",
                "activity": "Nettoyage des baies vitrées de la terrasse et réapprovisionnement des distributeurs de savon et essuie-mains."
            },
            {
                "time": "13:30",
                "activity": "Tri des déchets, vidage des poubelles dans les conteneurs extérieurs et désinfection des locaux à poubelles."
            },
            {
                "time": "14:15",
                "activity": "Rangement du local technique de ménage et lavage des franges de balayage."
            }
        ],
        "daily": {
            "morning": "Entretien des espaces communs stratégiques avant l'affluence des clients et lustrage des sols.",
            "afternoon": "Tournée de désinfection des sanitaires, nettoyage des vitres et évacuation des déchets.",
            "challenges": "Assurer une propreté immaculée dans les moindres recoins avec une discrétion totale pour ne pas déranger les clients."
        },
        "skills": {
            "hard": [
                "Techniques de bio-nettoyage et application des protocoles sanitaires d'hygiène",
                "Connaissance des règles de dilution et sécurité des produits chimiques (fiches FDS)",
                "Maniement du matériel mécanisé (autolaveuses, monobrosses, aspirateurs eau et poussière)",
                "Techniques ergonomiques de gestes et postures pour préserver son dos"
            ],
            "soft": [
                "Rigueur, méticulosité et souci du détail propre",
                "Discrétion absolue et ponctualité exemplaire",
                "Autonomie dans l'exécution de sa feuille de route",
                "Sens de l'observation pour signaler les dégradations techniques"
            ],
            "technical": [
                "Techniques de bio-nettoyage et application des protocoles sanitaires",
                "Connaissance des règles de dilution et sécurité des produits",
                "Maniement du matériel mécanisé"
            ],
            "human": [
                "Rigueur, méticulosité et souci du détail propre",
                "Discrétion absolue et ponctualité exemplaire",
                "Autonomie dans l'exécution de sa feuille de route"
            ],
            "tools": [
                "Autolaveuse autotractée, mono-brosse basse vitesse et aspirateur à filtration HEPA",
                "Chariot de ménage ergonomique à double bac de lavage et presse",
                "Raclettes à vitres professionnelles, microfibres de couleur codifiée et perches télescopiques"
            ]
        },
        "qualities": [
            "Méticulosité et goût de la propreté",
            "Autonomie et conscience professionnelle",
            "Endurance physique",
            "Sens de la discrétion"
        ],
        "studies": [
            "🇫🇷 France : Accessible sans diplôme avec formation interne assurée sur le poste. Diplômes facilitant l'accès : CAP Agent de propreté et d'hygiène (APH) ou Titre Professionnel Agent de propreté et d'hygiène.",
            "🇸🇳 Sénégal : Accessible sans diplôme formel. Expérience appréciée dans les sociétés de nettoyage ou résidences de standing à Dakar."
        ],
        "evolution": "Employé de ménage ➔ Chef d'équipe propreté ➔ Valet de chambre ➔ Gouvernant d'étage.",
        "saviezVous": {
            "fait": "Dans l'hôtellerie moderne, le codage couleur des microfibres (bleu pour les surfaces, rouge pour les sanitaires, jaune pour les faïences) est une norme internationale pour prévenir toute contamination croisée !",
            "chiffre": "Le secteur de la propreté et de l'hygiène emploie plus de 600 000 salariés en France, constituant l'un des premiers employeurs nationaux."
        },
        "sources": [
            {
                "name": "France Travail MétierScope - Fiche Métier Nettoyage de locaux (ROME K2204)",
                "url": "https://candidat.francetravail.fr/metierscope/fiche-metier/K2204",
                "date": "2026",
                "type": "Source officielle française"
            }
        ],
        "interests": [
            "voyage-hospitalite-hotellerie"
        ]
    },
    {
        "id": "valet-de-chambre",
        "slug": "valet-de-chambre",
        "title": "Valet / Femme de chambre",
        "aliases": [
            "Femme de chambre",
            "Valet de chambre d'hôtel",
            "Équipier d'étage",
            "Agent des étages en hôtellerie"
        ],
        "icon": "🛏️",
        "image": "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop&q=80",
        "familyId": "hotellerie-restauration-hospitalite",
        "familyName": "Hôtellerie, Restauration & Hospitalité",
        "connectedFamilies": [
            "hotellerie-restauration-hospitalite",
            "tourisme-hotellerie"
        ],
        "domain": "Entretien & Housekeeping",
        "domainId": "entretien-housekeeping",
        "subdomain": "Valet & Femme de chambre (Service des étages)",
        "sectors": [
            "Hôtels de tourisme de toutes catégories (2 à 5 étoiles)",
            "Palaces et hôtels de luxe historiques",
            "Résidences de tourisme et villages vacances",
            "Bateaux de croisière fluviale et maritime"
        ],
        "codeRome": "G1501",
        "franceTravailUrl": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1501",
        "franceTravailSource": true,
        "isEmerging": false,
        "level": "Sans diplôme à CAP (CAP Commercialisation et services en hôtel-café-restaurant / Titre pro Agent d'hôtellerie)",
        "salary": "🇫🇷 France : 1 800 € à 2 200 € brut/mois + pourboires de chambre (CCN HCR) • 🇸🇳 Sénégal : 90 000 à 200 000 FCFA net/mois (hôtels d'affaires Dakar, réceptifs touristiques balnéaires)",
        "salaryDetails": {
            "france": {
                "starter": "1 800 € brut/mois",
                "experienced": "1 950 € brut/mois",
                "senior": "2 200 € brut/mois",
                "source": "France Travail / CCN Hôtels, Cafés, Restaurants"
            },
            "senegal": {
                "starter": "90 000 FCFA net/mois",
                "experienced": "140 000 FCFA net/mois",
                "senior": "200 000 FCFA net/mois",
                "source": "Grilles salariales hôtelières Sénégal / Pratiques Dakar-Saly"
            }
        },
        "targetAudience": "Personnes minutieuses, dynamiques et d'une honnêteté irréprochable aimant préparer des espaces douillets et parfaits pour le repos des voyageurs.",
        "workEnvironment": [
            "🛏️ Chambres, suites et salles de bains d'hôtel privatisées",
            "⏰ Contrainte de temps stricte (entre 20 et 35 minutes par chambre selon le standing)",
            "🤫 Déplacements silencieux dans les couloirs avec un chariot d'étage complet"
        ],
        "summary": "Véritable artisan du confort des voyageurs, le valet ou la femme de chambre nettoie, aère, désinfecte et remet en état parfait les chambres et salles de bains d'hôtel, veillant au moindre détail pour que chaque client se sente comme chez lui.",
        "shortDescription": "Véritable artisan du confort des voyageurs, le valet ou la femme de chambre nettoie, aère, désinfecte et remet en état parfait les chambres et salles de bains d'hôtel, veillant au moindre détail pour que chaque client se sente comme chez lui.",
        "longDescription": "Le valet ou la femme de chambre est la fée du logis des établissements hôteliers. À partir de la feuille de service remise par le gouvernant, il traite les chambres en 'départ' (nettoyage complet de fond en comble pour le prochain client) ou en 'recouche' (réfection quotidienne pour un client qui reste plusieurs nuits). Il aère la pièce, retire le linge de lit sale, refait le lit selon les standards de pliage de l'établissement (au carré, couette rentrée), nettoie et désinfecte la salle de bains (baignoire, douche, lavabo, WC), renouvelle les serviettes et réapprovisionne les produits d'accueil (savons, shampoings, capsules de café). Il signale les objets oubliés par les clients et les pannes techniques.",
        "missions": [
            "Aérer, nettoyer, aspirer et dépoussiérer les chambres et suites allouées sur sa feuille de service",
            "Changer les draps et taies d'oreiller, refaire les lits avec un tombé et des plis impeccables",
            "Nettoyer et désinfecter intégralement les sanitaires, miroirs, douches et baignoires",
            "Réapprovisionner les serviettes, peignoirs, pantoufles et produits d'accueil (shampoings, thés, cafés)",
            "Collecter et enregistrer les objets trouvés oubliés par les clients et signaler les dégradations matérielles"
        ],
        "activities": [
            "Pliage au carré 'au millimètre' des draps et mise en place des oreillers gonflés",
            "Détartrage et polissage de la robinetterie chromée pour une brillance éclatante sans goutte d'eau",
            "Alimentation ordonnée de son chariot d'étage en linge propre, oreillers et produits d'accueil",
            "Contrôle du bon fonctionnement des téléviseurs, télécommandes, lampes de chevet et climatisation"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Briefing matinal avec la Gouvernante : remise du rapport d'occupation des chambres (départs, arrivées, recouches VIP)."
            },
            {
                "time": "09:00",
                "activity": "Préparation du chariot d'étage : chargement du linge propre (draps, housses, serviettes) et des produits de toilette."
            },
            {
                "time": "09:30",
                "activity": "Début de la tournée des chambres : priorité aux départs pour préparer l'arrivée des clients de l'après-midi."
            },
            {
                "time": "12:00",
                "activity": "Traitement des recouches (clients en séjour) : réfection du lit, changement des serviettes au sol et rapide dépoussiérage."
            },
            {
                "time": "14:30",
                "activity": "Contrôle des chambres terminées avec la Gouvernante d'étage."
            },
            {
                "time": "15:30",
                "activity": "Déchargement du linge sale à la buanderie, réassort du chariot pour le lendemain et remise des objets trouvés."
            }
        ],
        "daily": {
            "morning": "Préparation du chariot d'étage, nettoyage complet des chambres en départ et changement des draps.",
            "afternoon": "Finalisation des recouches, contrôle de conformité avec la gouvernante et évacuation du linge.",
            "challenges": "Allier une rapidité d'exécution sans faille au respect d'un niveau d'exigence maniaque sur la propreté."
        },
        "skills": {
            "hard": [
                "Techniques professionnelles de réfection de lit (lit au carré, housse de couette express)",
                "Normes d'hygiène et protocoles de désinfection des sanitaires et surfaces",
                "Connaissance des gestes et postures de manutention pour le port du linge lourd",
                "Organisation séquentielle du nettoyage d'une chambre pour respecter le temps imparti"
            ],
            "soft": [
                "Honnêteté scrupuleuse et intégrité totale face aux effets personnels des clients",
                "Discrétion absolue et politesse feutrée lors des croisements dans les couloirs",
                "Sens aigu du détail visuel (symétrie des coussins, alignement des chaussons)",
                "Résistance physique et constance dans l'effort"
            ],
            "technical": [
                "Techniques professionnelles de réfection de lit",
                "Normes d'hygiène et protocoles de désinfection des sanitaires",
                "Organisation séquentielle du nettoyage"
            ],
            "human": [
                "Honnêteté scrupuleuse et intégrité totale",
                "Discrétion absolue et politesse feutrée",
                "Sens aigu du détail visuel"
            ],
            "tools": [
                "Chariot d'étage compartimenté avec sacs à linge sale intégrés",
                "Aspirateurs d'étage silencieux à haute filtration et plumeaux électrostatiques",
                "Chiffons microfibres et produits écologiques certifiés Ecolabel"
            ]
        },
        "qualities": [
            "Honnêteté exemplaire et discrétion",
            "Minutie et sens de l'ordre",
            "Rapidité et endurance physique",
            "Esprit de service"
        ],
        "studies": [
            "🇫🇷 France : Aucun diplôme obligatoire à l'embauche (formation pratique assurée). Diplômes facilitant l'accès et l'évolution : CAP Commercialisation et services en hôtel-café-restaurant ou Titre Professionnel Agent d'hôtellerie (Afpa / Greta).",
            "🇸🇳 Sénégal : Accessible sans diplôme spécifique ou avec un Certificat de Formation Professionnelle en Hôtellerie (ENFHT Dakar, CFP de Saly Portudal ou Ziguinchor)."
        ],
        "evolution": "Valet / Femme de chambre ➔ Première femme de chambre ➔ Gouvernante d'étage ➔ Gouvernante générale.",
        "saviezVous": {
            "fait": "Dans les palaces parisiens, un lit refait au carré par un valet expérimenté est si tendu qu'une pièce de monnaie lâchée au centre doit littéralement rebondir !",
            "chiffre": "Une femme de chambre fait et défait en moyenne 14 à 16 lits complets par jour, représentant le soulèvement cumulé de plus de 400 kg de couettes et matelas."
        },
        "sources": [
            {
                "name": "France Travail MétierScope - Fiche Métier Personnel d'étage (ROME G1501)",
                "url": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1501",
                "date": "2026",
                "type": "Source officielle française"
            }
        ],
        "interests": [
            "voyage-hospitalite-hotellerie"
        ]
    },
    {
        "id": "gouvernant",
        "slug": "gouvernant",
        "title": "Gouvernant / Gouvernante d'hôtel",
        "aliases": [
            "Gouvernante d'étage",
            "Gouvernante générale",
            "Gouvernant d'hôtel de luxe",
            "Responsable du service des étages",
            "Housekeeping Supervisor"
        ],
        "icon": "🔑",
        "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=80",
        "familyId": "hotellerie-restauration-hospitalite",
        "familyName": "Hôtellerie, Restauration & Hospitalité",
        "connectedFamilies": [
            "hotellerie-restauration-hospitalite",
            "droit-management",
            "tourisme-hotellerie"
        ],
        "domain": "Entretien & Housekeeping",
        "domainId": "entretien-housekeeping",
        "subdomain": "Gouvernance hôtelière & Contrôle qualité",
        "sectors": [
            "Hôtels 4 et 5 étoiles, palaces et résidences hôtelières de prestige",
            "Resorts internationaux et clubs de vacances haut de gamme",
            "Compagnies de croisière de luxe et yachts privés",
            "Cliniques privées haut de gamme et résidences d'ambassade"
        ],
        "codeRome": "G1502",
        "franceTravailUrl": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1502",
        "franceTravailSource": true,
        "isEmerging": false,
        "level": "Bac Pro à Bac +2 (Bac Pro Gestion-Administration / BTS Management en Hôtellerie-Restauration option Hébergement / Titre pro Gouvernante)",
        "salary": "🇫🇷 France : 2 100 € à 3 400 € brut/mois (jusqu'à 4 800 €+ pour une Gouvernante générale de palace) • 🇸🇳 Sénégal : 250 000 à 650 000 FCFA net/mois (hôtels internationaux de Dakar, resorts de standing à Saly)",
        "salaryDetails": {
            "france": {
                "starter": "2 100 € brut/mois",
                "experienced": "2 700 € brut/mois",
                "senior": "3 800 € brut/mois",
                "source": "France Travail / Association des Gouvernantes Générales de l'Hôtellerie (AGGH)"
            },
            "senegal": {
                "starter": "250 000 FCFA net/mois",
                "experienced": "420 000 FCFA net/mois",
                "senior": "650 000 FCFA net/mois",
                "source": "Hôtellerie 4 et 5 étoiles Dakar / Petite-Côte sénégalaise"
            }
        },
        "targetAudience": "Leaders exigeants, rigoureux, dotés du sens de la perfection esthétique et du management bienveillant d'équipes d'étage.",
        "workEnvironment": [
            "✨ Suites, couloirs et chambres des étages d'hôtels de prestige",
            "📱 Équipé d'une tablette ou d'un smartphone connecté au logiciel hôtelier PMS",
            "🗂️ Coordination permanente avec la Réception, la Maintenance et la Lingerie"
        ],
        "summary": "Gardienne impitoyable de la qualité et du confort hôtelier, la gouvernante organise le travail des valets et femmes de chambre, contrôle minutieusement l'état de chaque chambre avant l'arrivée du client et gère la lingerie et les stocks.",
        "shortDescription": "Gardienne impitoyable de la qualité et du confort hôtelier, la gouvernante organise le travail des valets et femmes de chambre, contrôle minutieusement l'état de chaque chambre avant l'arrivée du client et gère la lingerie et les stocks.",
        "longDescription": "La gouvernante (ou gouvernant d'hôtel) est la cheffe d'orchestre de l'ombre sans qui la réputation d'un établissement s'effondrerait. Chaque matin, elle analyse le plan d'occupation des chambres, répartit les charges de travail équitablement et motive ses équipes. Son œil d'aigle inspecte ensuite chaque chambre 'à blanc' : propreté des miroirs, absence de poussière sous les têtes de lit, fonctionnement de la climatisation, fraîcheur du linge et disposition exacte des attentions VIP. Elle valide le statut 'chambre propre et prête' sur le logiciel hôtelier (PMS) pour permettre à la réception d'accueillir le client. Elle gère également la blanchisserie, les budgets de produits d'accueil et forme les nouvelles recrues.",
        "missions": [
            "Établir les plannings quotidiens et répartir les chambres entre les valets et femmes de chambre",
            "Contrôler la conformité absolue de chaque chambre selon les standards de qualité de l'hôtel",
            "Signaler en temps réel sur le logiciel PMS les chambres prêtes à la vente pour la réception",
            "Gérer les stocks de linge propre, les commandes auprès de la blanchisserie et les stocks de produits d'accueil",
            "Former, encadrer et évaluer le personnel d'étage en veillant au respect des règles d'hygiène et de sécurité"
        ],
        "activities": [
            "Inspection détaillée d'une chambre en 35 points de contrôle (de la salle de bains au mini-bar)",
            "Mise à jour en temps réel des statuts des chambres sur tablette numérique connectée au PMS",
            "Gestion des demandes spécifiques des clients VIP (oreillers en plumes d'oie, fleurs fraîches, lit bébé)",
            "Inventaire mensuel du linge d'hôtel et calcul des ratios de renouvellement de stock"
        ],
        "typicalDay": [
            {
                "time": "07:45",
                "activity": "Arrivée et extraction du rapport d'hébergement : départs anticipés, arrivées VIP, demandes spéciales."
            },
            {
                "time": "08:30",
                "activity": "Briefing matinal avec les équipes d'étage : distribution des feuilles de travail et rappel des consignes."
            },
            {
                "time": "09:30",
                "activity": "Inspection des couloirs, des ascenseurs et début du contrôle systématique des chambres libérées."
            },
            {
                "time": "12:00",
                "activity": "Vérification des suites de prestige réservées pour le début d'après-midi, validation sur le PMS."
            },
            {
                "time": "14:30",
                "activity": "Réunion de coordination avec le Directeur d'hébergement et le Chef de maintenance."
            },
            {
                "time": "16:00",
                "activity": "Inventaire du linge retourné par la blanchisserie, validation des bons de livraison et préparation du lendemain."
            }
        ],
        "daily": {
            "morning": "Planification des tournées d'étage, briefing managérial et contrôle rigoureux des premières chambres.",
            "afternoon": "Validation des chambres pour le check-in, coordination avec la maintenance et gestion du linge.",
            "challenges": "Faire monter en compétences son équipe tout en ne laissant passer aucun défaut dans les suites haut de gamme."
        },
        "skills": {
            "hard": [
                "Maîtrise des standards hôteliers d'excellence (LQA - Leading Quality Assurance, Forbes Travel Guide)",
                "Utilisation des progiciels de gestion hôtelière PMS (Opera, Fidelio, Mews)",
                "Gestion des stocks de linge, gestion budgétaire des consommables et blanchisserie",
                "Management d'équipe, planification des plannings RH et gestion des conflits"
            ],
            "soft": [
                "Sens aigu du détail, regard perfectionniste et exigence bienveillante",
                "Leadership fédérateur et capacité à motiver dans un métier physique",
                "Excellente gestion du temps et réactivité face aux imprévus de dernière minute",
                "Sens de la discrétion et respect de la confidentialité des clients"
            ],
            "technical": [
                "Maîtrise des standards hôteliers d'excellence",
                "Utilisation des progiciels de gestion hôtelière PMS",
                "Gestion des stocks de linge et budget consommables"
            ],
            "human": [
                "Sens aigu du détail et regard perfectionniste",
                "Leadership fédérateur et capacité à motiver",
                "Excellente gestion du temps et réactivité"
            ],
            "tools": [
                "Tablettes tactiles professionnelles avec applications de Housekeeping (Optii, Roomchecking, Mews)",
                "Logiciels de gestion hôtelière PMS (Opera Cloud, Protel)",
                "Luxmètres, testeurs de propreté ATP-métriques et clés maîtresses magnétiques d'étage"
            ]
        },
        "qualities": [
            "Perfectionnisme et rigueur d'inspection",
            "Autorité naturelle et diplomatie",
            "Organisation millimétrée",
            "Résistance au stress"
        ],
        "studies": [
            "🇫🇷 France : Bac Pro Gestion-Administration ou Bac Techno STHR, complété par un BTS Management en Hôtellerie-Restauration (MHR option C Hébergement) ou un Titre Professionnel Gouvernant(e) en hôtellerie (Afpa / Lycées hôteliers). Écoles spécialisées : Ferrandi, Vatel, Institut Paul Bocuse / Lyfe.",
            "🇸🇳 Sénégal : Diplôme Supérieur d'Hôtellerie option Hébergement (ENFHT Dakar / UGB Saint-Louis), complété par une expérience réussie d'au moins 3 ans en service des étages d'hôtels étoilés."
        ],
        "evolution": "Gouvernante d'étage ➔ Première Gouvernante ➔ Gouvernante générale ➔ Directrice de l'hébergement ➔ Directrice adjointe d'hôtel.",
        "saviezVous": {
            "fait": "L'Association des Gouvernantes Générales de l'Hôtellerie (AGGH) édite des grilles de qualité si strictes que la moindre pliure asymétrique sur un plaid peut disqualifier une chambre dans un palace !",
            "chiffre": "Dans un hôtel 5 étoiles de 200 chambres, la gouvernante générale gère un parc de plus de 10 000 pièces de linge renouvelées et blanchies chaque semaine."
        },
        "sources": [
            {
                "name": "France Travail MétierScope - Fiche Métier Management du personnel d'étage / Gouvernant d'hôtel (ROME G1502)",
                "url": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1502",
                "date": "2026",
                "type": "Source officielle française"
            }
        ],
        "interests": [
            "management-direction-etablissement",
            "voyage-hospitalite-hotellerie"
        ]
    },
    {
        "id": "receptionniste",
        "slug": "receptionniste",
        "title": "Réceptionniste en hôtellerie",
        "aliases": [
            "Agent de réception",
            "Réceptionniste de nuit (Night auditor)",
            "Chef de brigade de réception",
            "Front Desk Agent",
            "Hôte d'accueil hôtelier"
        ],
        "icon": "🛎️",
        "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80",
        "familyId": "hotellerie-restauration-hospitalite",
        "familyName": "Hôtellerie, Restauration & Hospitalité",
        "connectedFamilies": [
            "hotellerie-restauration-hospitalite",
            "tourisme-hotellerie",
            "commerce-marketing",
            "culture-medias"
        ],
        "domain": "Hébergement, Accueil & Réception",
        "domainId": "hebergement-accueil-reception",
        "subdomain": "Réception hôtelière & Gestion des réservations",
        "sectors": [
            "Hôtels de toutes catégories (2 à 5 étoiles) et palaces",
            "Résidences de tourisme d'affaires et de loisirs",
            "Resorts touristiques et villages vacances",
            "Aparthôtels et hébergements haut de gamme"
        ],
        "codeRome": "G1703",
        "franceTravailUrl": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1703",
        "franceTravailSource": true,
        "isEmerging": false,
        "level": "Bac à Bac +2 (Bac STHR / BTS Management en Hôtellerie-Restauration option C Hébergement / Titre pro Réceptionniste)",
        "salary": "🇫🇷 France : 1 900 € à 2 700 € brut/mois (jusqu'à 3 200 € pour un Chef de brigade en palace) • 🇸🇳 Sénégal : 150 000 à 400 000 FCFA net/mois (hôtels d'affaires à Dakar Plateau/Almadies, réceptifs touristiques de Saly)",
        "salaryDetails": {
            "france": {
                "starter": "1 900 € brut/mois",
                "experienced": "2 300 € brut/mois",
                "senior": "2 900 € brut/mois",
                "source": "France Travail / Convention Collective HCR / Données de branche hôtelière"
            },
            "senegal": {
                "starter": "150 000 FCFA net/mois",
                "experienced": "250 000 FCFA net/mois",
                "senior": "400 000 FCFA net/mois",
                "source": "Pratiques hôtelières au Sénégal / Réceptifs internationaux Dakar et Saly"
            }
        },
        "targetAudience": "Personnes polyglottes, souriantes et diplomates, aimant le contact international et la gestion administrative informatisée.",
        "workEnvironment": [
            "🛎️ Comptoir de réception lumineux et hall d'accueil élégant",
            "🖥️ Travail sur logiciel hôtelier PMS (Property Management System) et téléphone",
            "🔄 Travail en horaires décalés (shifts du matin, du soir ou nuit / night auditor)"
        ],
        "summary": "Premier et dernier visage de l'hôtel, le réceptionniste accueille les clients du monde entier, effectue les formalités d'arrivée et de départ (check-in / check-out), gère les réservations et renseigne sur les services de l'établissement.",
        "shortDescription": "Premier et dernier visage de l'hôtel, le réceptionniste accueille les clients du monde entier, effectue les formalités d'arrivée et de départ (check-in / check-out), gère les réservations et renseigne sur les services de l'établissement.",
        "longDescription": "Le réceptionniste est la vitrine vivante de l'hôtel. Dès le franchissement des portes, il accueille le voyageur avec une courtoisie irréprochable, vérifie sa réservation sur le progiciel hôtelier (PMS), attribue la chambre la plus adaptée et lui remet la clé ou carte magnétique. Durant le séjour, il répond à toutes les demandes : conseils touristiques, réservations de taxis, recommandations de restaurants et gestion des réveils. Au moment du départ (check-out), il édite la facture détaillée, encaisse le séjour, recueille les impressions du client et veille à son entière satisfaction. Il travaille en étroite liaison avec les étages (Housekeeping) et la maintenance.",
        "missions": [
            "Accueillir les clients à leur arrivée (check-in) et procéder aux formalités de départ (check-out)",
            "Gérer les réservations par téléphone, e-mail et via les plateformes en ligne (Booking, Expedia, site web direct)",
            "Attribuer les chambres selon les préférences clients et vérifier leur statut avec la gouvernante",
            "Renseigner les clients sur les prestations de l'hôtel (petit-déjeuner, spa, room service) et le patrimoine local",
            "Éditer les factures, vérifier les extras, encaisser les règlements et clôturer la caisse journalière"
        ],
        "activities": [
            "Enregistrement des pièces d'identité et fiches de police pour les voyageurs internationaux",
            "Encodage des cartes magnétiques RFID d'accès aux chambres et ascenseurs",
            "Traitement des réclamations clients avec diplomatie, calme et sens du compromis commercial",
            "Passation des consignes entre les équipes de jour et le veilleur de nuit (night auditor)"
        ],
        "typicalDay": [
            {
                "time": "06:45",
                "activity": "Arrivée et passation de consignes avec le Night Auditor : revue des événements de la nuit et arrivées VIP du jour."
            },
            {
                "time": "07:30",
                "activity": "Période de check-out : facturation des départs, encaissement rapide des hommes d'affaires et commande de taxis."
            },
            {
                "time": "10:30",
                "activity": "Traitement administratif : réponse aux e-mails de réservation, vérification des arrhes et des pré-autorisations bancaires."
            },
            {
                "time": "12:00",
                "activity": "Point avec la Gouvernante sur les chambres libérées et nettoyées en priorité pour les arrivées précoces."
            },
            {
                "time": "14:00",
                "activity": "Début des check-ins de l'après-midi : accueil chaleureux, présentation des services et remise des clés."
            },
            {
                "time": "15:15",
                "activity": "Passation détaillée du relais avec le réceptionniste du shift du soir."
            }
        ],
        "daily": {
            "morning": "Gestion des formalités de départ matinales, encaissements et transmission des consignes de nuit.",
            "afternoon": "Enregistrement des arrivées, réponse aux demandes de réservations et conciergerie locale.",
            "challenges": "Conserver un sourire rayonnant et une écoute bienveillante face aux clients fatigués par leur voyage ou mécontents."
        },
        "skills": {
            "hard": [
                "Maîtrise des logiciels de gestion hôtelière PMS (Opera, Fidelio, Mews, Protel)",
                "Pratique courante d'au moins deux langues étrangères (anglais bilingue impératif, espagnol/allemand/mandarin)",
                "Techniques de facturation, encaissement multi-devises et clôture comptable journalière",
                "Connaissance des normes de sécurité hôtelière et gestion des procédures d'évacuation"
            ],
            "soft": [
                "Excellente élocution, courtoisie naturelle et sens aigu du service client",
                "Diplomatie, calme et maîtrise de soi face aux situations conflictuelles",
                "Sens de l'écoute, réactivité et capacité à résoudre les imprévus rapidement",
                "Présentation vestimentaire et corporelle soignée et professionnelle"
            ],
            "technical": [
                "Maîtrise des logiciels de gestion hôtelière PMS",
                "Pratique courante d'au moins deux langues étrangères",
                "Techniques de facturation et encaissement"
            ],
            "human": [
                "Excellente élocution et courtoisie naturelle",
                "Diplomatie et maîtrise de soi face aux conflits",
                "Sens de l'écoute et réactivité"
            ],
            "tools": [
                "Progiciel de gestion hôtelière PMS (Opera Cloud, Mews, Protel PMS)",
                "Encodeurs de cartes magnétiques ou puces RFID d'accès aux chambres",
                "Standard téléphonique multi-lignes et terminaux de paiement électronique (TPE)"
            ]
        },
        "qualities": [
            "Sens de l'accueil et bienveillance",
            "Diplomatie et maîtrise émotionnelle",
            "Aisance linguistique",
            "Rigueur administrative"
        ],
        "studies": [
            "🇫🇷 France : Bac Techno STHR ou Bac Pro Métiers de l'accueil, complété par un BTS Management en Hôtellerie-Restauration (MHR option C Hébergement) ou un Titre Professionnel Réceptionniste en hôtellerie. Pour les hôtels haut de gamme : Bachelor Hospitality Management (Vatel, Ferrandi, Glion, Institut Paul Bocuse / Lyfe).",
            "🇸🇳 Sénégal : BTS Hôtellerie-Tourisme option Hébergement (École Nationale de Formation Hôtelière et Touristique - ENFHT Dakar, UFR SAT Université Gaston Berger de Saint-Louis, ESMT Hospitality)."
        ],
        "evolution": "Réceptionniste ➔ Chef de brigade de réception ➔ Premier de réception ➔ Chef de réception ➔ Directeur de l'hébergement ➔ Directeur d'hôtel.",
        "saviezVous": {
            "fait": "Dans les palaces, le réceptionniste et le concierge partagent le hall mais ont des rôles distincts : le réceptionniste gère la chambre et la facturation, tandis que le concierge aux Clés d'Or réalise tous les souhaits extérieurs du client !",
            "chiffre": "Le métier de réceptionniste est l'un des postes les plus internationaux : la maîtrise de l'anglais et d'une seconde langue permet de travailler dans plus de 150 pays à travers le monde."
        },
        "sources": [
            {
                "name": "France Travail MétierScope - Fiche Métier Réception en hôtellerie (ROME G1703)",
                "url": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1703",
                "date": "2026",
                "type": "Source officielle française"
            }
        ],
        "interests": [
            "accueil-relation-client-service",
            "voyage-hospitalite-hotellerie",
            "management-direction-etablissement"
        ]
    },
    {
        "id": "voiturier",
        "slug": "voiturier",
        "title": "Voiturier / Voiturier-bagagiste",
        "aliases": [
            "Voiturier-bagagiste",
            "Chasseur-voiturier",
            "Portier-voiturier",
            "Valet de parking de luxe"
        ],
        "icon": "🚗",
        "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80",
        "familyId": "hotellerie-restauration-hospitalite",
        "familyName": "Hôtellerie, Restauration & Hospitalité",
        "connectedFamilies": [
            "hotellerie-restauration-hospitalite",
            "tourisme-hotellerie",
            "transport-logistique"
        ],
        "domain": "Hébergement, Accueil & Réception",
        "domainId": "hebergement-accueil-reception",
        "subdomain": "Voiturier, Bagagiste & Conciergerie de luxe",
        "sectors": [
            "Palaces et hôtels 4 et 5 étoiles",
            "Restaurants gastronomiques et étoilés",
            "Casinos, clubs de membres et lieux de prestige",
            "Agences d'accueil événementiel haut de gamme"
        ],
        "codeRome": "G1701",
        "franceTravailUrl": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1701",
        "franceTravailSource": true,
        "isEmerging": false,
        "level": "Permis de conduire B obligatoire (exigé depuis au moins 2 ans) + Sans diplôme à CAP",
        "salary": "🇫🇷 France : 1 800 € à 2 300 € brut/mois + pourboires substantiels (CCN HCR) • 🇸🇳 Sénégal : 100 000 à 250 000 FCFA net/mois + pourboires (hôtels de luxe à Dakar, casinos, restaurants huppés des Almadies)",
        "salaryDetails": {
            "france": {
                "starter": "1 800 € brut/mois",
                "experienced": "2 050 € brut/mois",
                "senior": "2 350 € brut/mois",
                "source": "France Travail / CCN HCR / Pourboires de conciergerie"
            },
            "senegal": {
                "starter": "100 000 FCFA net/mois",
                "experienced": "160 000 FCFA net/mois",
                "senior": "250 000 FCFA net/mois",
                "source": "Palaces, casinos et réceptifs haut de gamme à Dakar et Saly"
            }
        },
        "targetAudience": "Passionnés de belle automobile, courtois, discrets et réactifs, aimant l'accueil haut de gamme et le travail en plein air.",
        "workEnvironment": [
            "🏛️ Parvis d'hôtel, entrée majestueuse sous auvent et parkings sécurisés",
            "🌧️ Travail en extérieur par tous les temps (froid, pluie, soleil estival)",
            "👔 Uniforme traditionnel soigné (casquette, livrée ou costume sur-mesure)"
        ],
        "summary": "Premier interlocuteur physique à la descente du véhicule, le voiturier accueille les hôtes avec distinction, ouvre leur portière, prend en charge leur véhicule pour le stationner en sécurité et monte les bagages en chambre.",
        "shortDescription": "Premier interlocuteur physique à la descente du véhicule, le voiturier accueille les hôtes avec distinction, ouvre leur portière, prend en charge leur véhicule pour le stationner en sécurité et monte les bagages en chambre.",
        "longDescription": "Le voiturier est le maître du parvis des établissements de grand standing. Dès qu'un véhicule s'immobilise devant l'hôtel, il s'approche avec élégance, salue le client, ouvre la portière et protège de la pluie si nécessaire à l'aide d'un parapluie d'accueil. Il décharge les bagages avec soin et les confie au bagagiste ou les monte lui-même en chambre. Il prend le volant de véhicules prestigieux (berlines de luxe, sportives, SUV haut de gamme) pour les stationner avec une précision millimétrée dans le parking de l'établissement sans commettre le moindre accroc. Au départ du client, il avance la voiture au pied du parvis à la minute exacte convenue.",
        "missions": [
            "Accueillir les clients à leur arrivée sur le parvis et leur ouvrir courtoisement la portière",
            "Prendre en charge les véhicules des clients, inspecter l'état extérieur et les stationner en sécurité",
            "Prendre en charge, étiqueter et acheminer les bagages en chambre en liaison avec la réception",
            "Tenir à disposition et restituer les clés de contact sécurisées au départ des clients",
            "Maintenir la propreté irréprochable de l'entrée de l'hôtel, du trottoir et de la zone de stationnement"
        ],
        "activities": [
            "Conduite de véhicules automatiques et manuels haut de gamme avec douceur et respect",
            "Maniement de chariots à bagages dorés pour transporter valises et malles sans dommage",
            "Surveillance constante de la fluidité de circulation sur le parvis et guidage des chauffeurs",
            "Renseignement des clients sur les itinéraires routiers et les transferts vers les aéroports"
        ],
        "typicalDay": [
            {
                "time": "11:00",
                "activity": "Prise de poste sur le parvis : vérification du carnet de bord des véhicules en stationnement et propreté de l'entrée."
            },
            {
                "time": "12:00",
                "activity": "Arrivée continue des clients du déjeuner : accueil chaleureux, stationnement méthodique et remise des tickets de vestiaire auto."
            },
            {
                "time": "14:30",
                "activity": "Départ des convives : restitution rapide des voitures devant le perron et raccompagnement soigné."
            },
            {
                "time": "15:30",
                "activity": "Vague des arrivées hôtelières (check-in) : déchargement des malles de voyage et livraison dans les suites."
            },
            {
                "time": "18:00",
                "activity": "Coordination avec le Concierge pour la préparation des véhicules réservés pour les soirées des clients."
            },
            {
                "time": "19:30",
                "activity": "Accueil du dîner gastronomique et relais avec le voiturier de nuit."
            }
        ],
        "daily": {
            "morning": "Vérification des parkings, accueil des premiers départs et mise en place du parvis.",
            "afternoon": "Gestion continue des flux de véhicules, port des bagages et réactivité maximale.",
            "challenges": "Manœuvrer des bolides et berlines de très grande valeur dans des espaces exigus sans la moindre rayure."
        },
        "skills": {
            "hard": [
                "Maîtrise parfaite de la conduite de tous types de véhicules (boîtes automatiques, sportives, hybrides, électriques)",
                "Permis de conduire B valide et respect absolu du code de la route et des règles de sécurité",
                "Connaissance des protocoles d'accueil haut de gamme et du portage ergonomique des bagages lourds",
                "Notions d'anglais professionnel pour accueillir la clientèle touristique internationale"
            ],
            "soft": [
                "Présentation physique impeccable, politesse raffinée et discrétion absolue",
                "Sens aigu de la responsabilité, vigilance et honnêteté irréprochable",
                "Réactivité, vivacité et sens de l'anticipation sur le parvis",
                "Résistance physique aux variations météorologiques extérieures"
            ],
            "technical": [
                "Maîtrise de la conduite de tous types de véhicules de prestige",
                "Permis B valide et respect absolu du code de la route",
                "Protocoles d'accueil haut de gamme et portage de charges"
            ],
            "human": [
                "Présentation physique impeccable et politesse raffinée",
                "Sens aigu de la responsabilité et honnêteté irréprochable",
                "Réactivité et vivacité sur le parvis"
            ],
            "tools": [
                "Armoire à clés sécurisée informatisée (Keywatcher)",
                "Chariot à bagages hôtelier en laiton poli ou inox à roulettes silencieuses",
                "Tickets de voiturier numérotés et parapluies d'accueil grand format"
            ]
        },
        "qualities": [
            "Courtoisie et sourire",
            "Dextérité au volant et prudence",
            "Honnêteté scrupuleuse",
            "Endurance aux intempéries"
        ],
        "studies": [
            "🇫🇷 France : Permis de conduire B obligatoire (exigé sans sinistre responsable depuis au moins 2 ans). Diplômes valorisés : CAP Commercialisation et services en hôtel-café-restaurant ou CQP Voiturier-Bagagiste.",
            "🇸🇳 Sénégal : Permis de conduire B en règle exigé. Expérience de conduite prudente et référence de moralité irréprochable auprès des grands hôtels dakarois."
        ],
        "evolution": "Voiturier ➔ Chef voiturier ➔ Bagagiste ➔ Portier ➔ Chasseur / Assistant Concierge ➔ Concierge d'hôtel.",
        "saviezVous": {
            "fait": "Dans les palaces de la Côte d'Azur ou de Monaco, un voiturier manipule régulièrement des véhicules dont la valeur unitaire dépasse plusieurs centaines de milliers d'euros, exigeant une confiance aveugle de la part des propriétaires !",
            "chiffre": "Les pourboires remis aux voituriers peuvent représenter une part très importante de leur rémunération globale dans les établissements les plus réputés."
        },
        "sources": [
            {
                "name": "France Travail MétierScope - Fiche Métier Conciergerie en hôtellerie / Voiturier (ROME G1701)",
                "url": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1701",
                "date": "2026",
                "type": "Source officielle française"
            }
        ],
        "interests": [
            "accueil-relation-client-service",
            "voyage-hospitalite-hotellerie"
        ]
    },
    {
        "id": "directeur-restaurant",
        "slug": "directeur-restaurant",
        "title": "Directeur / Directrice de restaurant",
        "aliases": [
            "Manager de restaurant",
            "Gérant de restaurant",
            "Directrice d'exploitation restauration",
            "Restaurant Manager",
            "Responsable d'établissement de restauration"
        ],
        "icon": "🏢",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80",
        "familyId": "hotellerie-restauration-hospitalite",
        "familyName": "Hôtellerie, Restauration & Hospitalité",
        "connectedFamilies": [
            "hotellerie-restauration-hospitalite",
            "droit-management",
            "commerce-marketing",
            "finance-fintech"
        ],
        "domain": "Management d'établissement & Restauration collective",
        "domainId": "management-exploitation-etablissement",
        "subdomain": "Direction de restaurant & Brasserie",
        "sectors": [
            "Restaurants traditionnels, brasseries et tables gastronomiques",
            "Grandes chaînes de restauration commerciale et franchises",
            "Restauration hôtelière intégrée (hôtels 4 et 5 étoiles)",
            "Complexes de loisirs, casinos et centres événementiels"
        ],
        "codeRome": "G1402",
        "franceTravailUrl": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1402",
        "franceTravailSource": true,
        "isEmerging": false,
        "level": "Bac +2 à Bac +5 (BTS Management en Hôtellerie-Restauration / Licence Pro / Master Management Hôtelier et Restauration)",
        "salary": "🇫🇷 France : 2 800 € à 5 200 € brut/mois + primes sur objectifs de chiffre d'affaires • 🇸🇳 Sénégal : 450 000 à 1 300 000 FCFA net/mois (grandes brasseries et restaurants haut de gamme de Dakar et Saly)",
        "salaryDetails": {
            "france": {
                "starter": "2 800 € brut/mois",
                "experienced": "3 900 € brut/mois",
                "senior": "5 500 € brut/mois",
                "source": "France Travail / APEC / Fédération Nationale de la Restauration"
            },
            "senegal": {
                "starter": "450 000 FCFA net/mois",
                "experienced": "750 000 FCFA net/mois",
                "senior": "1 300 000 FCFA net/mois",
                "source": "Marché des cadres de la restauration à Dakar et sur la Petite-Côte"
            }
        },
        "targetAudience": "Gestionnaires charismatiques, organisateurs rigoureux, passionnés de gastronomie, d'expérience client et de rentabilité économique.",
        "workEnvironment": [
            "🏢 Bureau de direction et présence active en salle au contact des clients",
            "📊 Pilotage quotidien des indicateurs de performance (ticket moyen, coût matière, masse salariale)",
            "🤝 Interface entre les équipes de cuisine, de salle et les propriétaires / actionnaires"
        ],
        "summary": "Pilote opérationnel et financier d'un restaurant, le directeur manage les équipes de cuisine et de salle, élabore la stratégie commerciale, veille à la rentabilité économique et garantit la satisfaction totale des convives.",
        "shortDescription": "Pilote opérationnel et financier d'un restaurant, le directeur manage les équipes de cuisine et de salle, élabore la stratégie commerciale, veille à la rentabilité économique et garantit la satisfaction totale des convives.",
        "longDescription": "Le directeur de restaurant orchestre l'ensemble des activités d'un établissement de restauration. Véritable chef d'entreprise sur son site, il supervise à la fois la qualité gastronomique avec le chef de cuisine et la perfection de l'accueil avec le maître d'hôtel. Il est responsable des résultats financiers : fixation des prix, respect des budgets d'achats, optimisation du ticket moyen et maîtrise de la masse salariale. Sur le plan humain, il recrute, motive, forme et fédère le personnel. Il déploie la communication commerciale locale (réseaux sociaux, fidélisation, événements) et veille au respect strict des réglementations d'hygiène, de sécurité et du droit du travail.",
        "missions": [
            "Définir la stratégie commerciale, la politique tarifaire et les objectifs de fréquentation du restaurant",
            "Piloter le compte de résultat de l'établissement : chiffre d'affaires, marge brute, food cost et frais généraux",
            "Recruter, encadrer, planifier et fédérer les équipes de salle et de cuisine",
            "Garantir le respect intégral des normes d'hygiène (HACCP), de sécurité ERP et de la législation du travail",
            "Superviser les opérations lors des grands services et développer la relation avec la clientèle VIP et entreprises"
        ],
        "activities": [
            "Analyse quotidienne des indicateurs de vente (CA par service, taux de remplissage, ventes additionnelles)",
            "Négociation des contrats avec les brasseurs, fournisseurs de denrées et prestataires de services",
            "Animation des réunions de direction hebdomadaires avec le Chef de cuisine et les maîtres d'hôtel",
            "Gestion des avis en ligne sur Google et Tripadvisor pour préserver l'e-réputation de l'enseigne"
        ],
        "typicalDay": [
            {
                "time": "09:30",
                "activity": "Arrivée et analyse des chiffres de la veille : comparaison du réalisé avec les objectifs budgétaires."
            },
            {
                "time": "10:30",
                "activity": "Entretien individuel de recrutement pour un poste de chef de rang et validation des plannings de la semaine."
            },
            {
                "time": "11:30",
                "activity": "Briefing pré-service avec le Chef cuisinier et le responsable de salle."
            },
            {
                "time": "12:15",
                "activity": "Présence active en salle pendant le service : accueil des habitués, contrôle de la fluidité et du standing."
            },
            {
                "time": "14:45",
                "activity": "Contrôle des clôtures de caisse, vérification des factures fournisseurs et gestion des règlements."
            },
            {
                "time": "16:30",
                "activity": "Rendez-vous avec un organisateur d'événements pour privatiser le restaurant pour un séminaire d'entreprise."
            }
        ],
        "daily": {
            "morning": "Analyse des ratios financiers, gestion administrative et management des plannings RH.",
            "afternoon": "Présence stratégique en salle pendant le coup de feu, relations clients et développement commercial.",
            "challenges": "Maintenir un niveau d'excellence client constant tout en pilotant une rentabilité financière rigoureuse."
        },
        "skills": {
            "hard": [
                "Pilotage de compte d'exploitation (P&L), gestion des ratios de restauration et contrôle de gestion",
                "Management d'équipes pluridisciplinaires (cuisine et salle) et législation sociale HCR",
                "Marketing de la restauration, fidélisation client et gestion de l'e-réputation digitale",
                "Connaissance des réglementations sanitaires (HACCP) et des règles de sécurité des établissements recevant du public (ERP)"
            ],
            "soft": [
                "Leadership charismatique, exemplarité et capacité à fédérer dans l'effort",
                "Sens aigu du commerce, aisance relationnelle et diplomatie commerciale",
                "Résistance au stress et capacité de décision rapide dans les situations de crise",
                "Sensibilité gastronomique et culture de l'hospitalité"
            ],
            "technical": [
                "Pilotage de compte d'exploitation (P&L) et contrôle de gestion",
                "Management d'équipes pluridisciplinaires et législation sociale",
                "Marketing de la restauration et gestion de l'e-réputation"
            ],
            "human": [
                "Leadership charismatique et capacité à fédérer",
                "Sens aigu du commerce et aisance relationnelle",
                "Résistance au stress et prise de décision rapide"
            ],
            "tools": [
                "Logiciels de caisse et de gestion intégrée de restaurant (Lightspeed, Zenchef, Koust)",
                "Outils de gestion des plannings et RH (Combo, Skello, PayFit)",
                "Tableurs financiers et plateformes de réputation client (Google My Business, TheFork)"
            ]
        },
        "qualities": [
            "Leadership et vision entrepreneuriale",
            "Rigueur de gestionnaire",
            "Excellence relationnelle",
            "Sang-froid sous pression"
        ],
        "studies": [
            "🇫🇷 France : Bac +2 à Bac +5. BTS Management en Hôtellerie-Restauration (MHR option A), complété par une Licence Pro Métiers des arts culinaires et des arts de la table ou un Master en Management Hôtelier (Ferrandi, Institut Paul Bocuse / Lyfe, Vatel, IAE). Accessible également par promotion interne après plusieurs années comme maître d'hôtel.",
            "🇸🇳 Sénégal : Diplôme Supérieur d'Hôtellerie et Tourisme (ENFHT Dakar / UGB Saint-Louis), complété par une expérience confirmée de direction opérationnelle dans des établissements de premier plan."
        ],
        "evolution": "Directeur de restaurant ➔ Directeur de la restauration multi-sites (Food & Beverage Director) ➔ Directeur d'hôtel ➔ Restaurateur propriétaire.",
        "saviezVous": {
            "fait": "Dans la restauration commerciale moderne, le 'ratio masse salariale + coût matière' (le 'Prime Cost') ne doit généralement pas dépasser 60% du chiffre d'affaires pour assurer la pérennité du restaurant !",
            "chiffre": "Le secteur de la restauration commerciale emploie plus de 450 000 salariés en France et représente un vivier d'opportunités managériales majeures pour les jeunes diplômés."
        },
        "sources": [
            {
                "name": "France Travail MétierScope - Fiche Métier Management d'établissement de restauration de service à table (ROME G1402)",
                "url": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1402",
                "date": "2026",
                "type": "Source officielle française"
            }
        ],
        "interests": [
            "management-direction-etablissement",
            "passion-cuisine-gastronomie",
            "accueil-relation-client-service"
        ]
    },
    {
        "id": "directeur-hotel",
        "slug": "directeur-hotel",
        "title": "Directeur / Directrice d'hôtel",
        "aliases": [
            "Directeur général d'hôtel",
            "General Manager d'hôtel",
            "Directrice d'établissement hôtelier",
            "Directeur de resort touristique",
            "Directeur de palace"
        ],
        "icon": "🏨",
        "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80",
        "familyId": "hotellerie-restauration-hospitalite",
        "familyName": "Hôtellerie, Restauration & Hospitalité",
        "connectedFamilies": [
            "hotellerie-restauration-hospitalite",
            "tourisme-hotellerie",
            "droit-management",
            "finance-fintech",
            "commerce-marketing"
        ],
        "domain": "Management d'établissement & Restauration collective",
        "domainId": "management-exploitation-etablissement",
        "subdomain": "Direction d'hôtel, Palace & Resort touristique",
        "sectors": [
            "Hôtels indépendants et franchisés de toutes catégories (3 à 5 étoiles)",
            "Palaces et hôtels historiques de renommée internationale",
            "Resorts balnéaires, villages vacances et complexes écotouristiques",
            "Groupes hôteliers internationaux (Accor, Marriott, Hilton, Radisson)"
        ],
        "codeRome": "G1401",
        "franceTravailUrl": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1401",
        "franceTravailSource": true,
        "isEmerging": false,
        "level": "Bac +3 à Bac +5 (Bachelor Hospitality Management / Master Management Hôtelier / Diplôme d'École de Commerce)",
        "salary": "🇫🇷 France : 3 500 € à 7 500 € brut/mois (jusqu'à 15 000 €+ pour les directeurs généraux de palaces ou resorts de luxe) • 🇸🇳 Sénégal : 700 000 à 2 500 000 FCFA net/mois (hôtels d'affaires et resorts de luxe à Dakar, Saly et Cap Skirring)",
        "salaryDetails": {
            "france": {
                "starter": "3 500 € brut/mois",
                "experienced": "5 500 € brut/mois",
                "senior": "8 500 € brut/mois",
                "source": "France Travail / APEC / Union des Métiers et des Industries de l'Hôtellerie (UMIH)"
            },
            "senegal": {
                "starter": "700 000 FCFA net/mois",
                "experienced": "1 300 000 FCFA net/mois",
                "senior": "2 500 000 FCFA net/mois",
                "source": "Chaînes hôtelières internationales et syndicats patronaux hôteliers au Sénégal"
            }
        },
        "targetAudience": "Leaders visionnaires, stratèges et polyglottes ayant le sens de l'accueil de prestige, de la rentabilité financière et du management multiculturel.",
        "workEnvironment": [
            "🏨 Complexe hôtelier complet : hébergement, restaurants, spa, salons de séminaires et parcs",
            "💼 Responsabilité totale de l'exploitation, de la rentabilité et de la sécurité des personnes",
            "🌍 Représentation officielle auprès des autorités touristiques locales et délégations internationales"
        ],
        "summary": "Premier dirigeant d'un complexe hôtelier, le directeur d'hôtel coordonne tous les services (hébergement, restauration, technique, commercial), pilote les budgets, veille à la rentabilité et garantit une expérience inoubliable aux voyageurs.",
        "shortDescription": "Premier dirigeant d'un complexe hôtelier, le directeur d'hôtel coordonne tous les services (hébergement, restauration, technique, commercial), pilote les budgets, veille à la rentabilité et garantit une expérience inoubliable aux voyageurs.",
        "longDescription": "Le directeur d'hôtel (General Manager) est le garant de la réputation, de la rentabilité et de l'âme d'un établissement d'hébergement. Véritable chef d'orchestre, il supervise l'ensemble des départements : la réception, les étages (gouvernance), la restauration (F&B), les ventes, la comptabilité et la maintenance technique. Il définit la stratégie tarifaire en concertation avec le Revenue Manager pour optimiser le RevPAR (Revenu par chambre disponible). Il veille au respect rigoureux des standards de la marque ou du label qualité, insuffle une culture du service d'exception à ses collaborateurs et résout les situations de crise avec sang-froid et autorité.",
        "missions": [
            "Piloter la stratégie globale, la politique commerciale et le positionnement haut de gamme de l'hôtel",
            "Élaborer et suivre les budgets annuels, piloter le compte de résultat et optimiser le RevPAR et le taux d'occupation",
            "Diriger, motiver et coordonner les chefs de départements (Hébergement, F&B, Maintenance, Ventes)",
            "Superviser les relations avec les propriétaires, investisseurs, chaînes partenaires et autorités administratives",
            "Garantir la sécurité physique des hôtes, la conformité légale et la perfection de l'expérience client"
        ],
        "activities": [
            "Comité de direction quotidien : revue des arrivées VIP, événements en cours et maintenance des installations",
            "Analyse hebdomadaire des performances de Yield Management avec les équipes commerciales",
            "Inspection inopinée des chambres, des cuisines et des locaux techniques pour garantir l'excellence",
            "Accueil personnel des chefs d'État, personnalités et clients fidèles lors de leur séjour"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "activity": "Tournée matinale de l'hôtel : salutation des équipes de petit-déjeuner et inspection du hall de réception."
            },
            {
                "time": "09:00",
                "activity": "Morning Briefing avec les chefs de service : chiffres d'occupation de la nuit, événements du jour et arrivées VIP."
            },
            {
                "time": "10:30",
                "activity": "Réunion financière : analyse du RevPAR, des coûts d'énergie et négociation des contrats fournisseurs majeurs."
            },
            {
                "time": "12:30",
                "activity": "Déjeuner de travail avec un client d'entreprise stratégique ou le président de l'office de tourisme local."
            },
            {
                "time": "14:30",
                "activity": "Revue des projets d'investissement : rénovation d'une aile de chambres et transition écologique de l'hôtel."
            },
            {
                "time": "17:00",
                "activity": "Accueil d'une délégation internationale à la réception et échanges personnalisés."
            },
            {
                "time": "19:00",
                "activity": "Passage dans les restaurants et bars de l'hôtel avant de confier la permanence au Night Manager."
            }
        ],
        "daily": {
            "morning": "Inspection des installations, briefing avec les chefs de département et contrôle de la qualité de service.",
            "afternoon": "Pilotage financier, stratégie commerciale, relations institutionnelles et accueil des VIP.",
            "challenges": "Faire converger l'exigence de rentabilité des investisseurs avec la promesse d'enchantement des voyageurs."
        },
        "skills": {
            "hard": [
                "Gestion financière et hôtelière avancée (RevPAR, ADR, GOP, bilan d'exploitation hôtelier)",
                "Connaissance des progiciels hôteliers intégrés PMS et outils de Revenue Management",
                "Management stratégique, leadership multiculturel et conduite du changement",
                "Droit hôtelier, droit du travail, normes de sécurité incendie et accessibilité ERP"
            ],
            "soft": [
                "Charisme naturel, vision stratégique et sens politique affirmé",
                "Sang-froid exceptionnel et gestion des situations d'urgence (sécurité, sanitaires)",
                "Politesse raffinée, élégance relationnelle et maîtrise parfaite de plusieurs langues",
                "Disponibilité totale et culture de l'hospitalité chevillée au corps"
            ],
            "technical": [
                "Gestion financière et hôtelière avancée (RevPAR, ADR, GOP)",
                "Connaissance des progiciels hôteliers intégrés PMS",
                "Management stratégique et leadership multiculturel"
            ],
            "human": [
                "Charisme naturel et sens politique affirmé",
                "Sang-froid exceptionnel et gestion de crise",
                "Politesse raffinée et maîtrise de plusieurs langues"
            ],
            "tools": [
                "Progiciels de gestion de propriété hôtelière PMS (Opera Cloud, Protel, Infor)",
                "Systèmes d'aide à la décision et de Yield Management (IDeaS, Duetto)",
                "Tableaux de bord de suivi de la réputation client (ReviewPro, TrustYou)"
            ]
        },
        "qualities": [
            "Leadership et stature managériale",
            "Sens aigu des affaires et rentabilité",
            "Élégance diplomatique",
            "Rigueur et sens de l'honneur"
        ],
        "studies": [
            "🇫🇷 France : Bac +3 à Bac +5. Écoles de management hôtelier de prestige (Vatel, Ferrandi, Institut Paul Bocuse / Lyfe, Glion, Les Roches), Masters en Management de l'Hôtellerie et du Tourisme ou diplômes de grandes Écoles de Commerce (HEC, ESSEC Hospitality Management IMHI). Accessible après 8 à 15 ans d'expérience opérationnelle progressive.",
            "🇸🇳 Sénégal : Diplôme Supérieur d'Hôtellerie et Tourisme (ENFHT Dakar / UGB Saint-Louis), complété par des cycles de management hôtelier international et une solide expérience de direction adjointe."
        ],
        "evolution": "Directeur d'hôtel ➔ Directeur général de palace ➔ Directeur régional d'un groupe hôtelier ➔ Vice-Président Opérations hôtelières ➔ Propriétaire hôtelier.",
        "saviezVous": {
            "fait": "Le terme 'RevPAR' (Revenue Per Available Room) est l'indicateur roi de l'hôtellerie mondiale : il multiplie le prix moyen de la chambre par le taux d'occupation pour mesurer l'efficacité réelle de l'établissement !",
            "chiffre": "Le groupe hôtelier français Accor exploite plus de 5 500 hôtels dans plus de 110 pays à travers le monde, offrant des opportunités de mobilité internationale uniques aux directeurs d'établissement."
        },
        "sources": [
            {
                "name": "France Travail MétierScope - Fiche Métier Management d'établissement d'hébergement hôtelier (ROME G1401)",
                "url": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1401",
                "date": "2026",
                "type": "Source officielle française"
            }
        ],
        "interests": [
            "management-direction-etablissement",
            "voyage-hospitalite-hotellerie",
            "accueil-relation-client-service"
        ]
    },
    {
        "id": "gerant-restauration-collective",
        "slug": "gerant-restauration-collective",
        "title": "Gérant / Gérante de restauration collective",
        "aliases": [
            "Chef gérant de restaurant collectif",
            "Responsable de cuisine centrale",
            "Directeur de restaurant d'entreprise",
            "Gérant de cantine scolaire / hospitalière",
            "Responsable de site de restauration sociale"
        ],
        "icon": "🏫",
        "image": "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&auto=format&fit=crop&q=80",
        "familyId": "hotellerie-restauration-hospitalite",
        "familyName": "Hôtellerie, Restauration & Hospitalité",
        "connectedFamilies": [
            "hotellerie-restauration-hospitalite",
            "sante-soins-paramedical",
            "education-formation",
            "droit-management",
            "transport-logistique"
        ],
        "domain": "Management d'établissement & Restauration collective",
        "domainId": "management-exploitation-etablissement",
        "subdomain": "Gestion de restauration collective (Scolaire, Médico-sociale, Entreprise)",
        "sectors": [
            "Sociétés de restauration collective (Sodexo, Elior, Compass Group)",
            "Établissements scolaires, collèges, lycées et universités",
            "Hôpitaux, cliniques, EHPAD et centres médico-sociaux",
            "Restaurants d'entreprises, ministères et bases de vie industrielles"
        ],
        "codeRome": "G1403",
        "franceTravailUrl": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1403",
        "franceTravailSource": true,
        "isEmerging": false,
        "level": "Bac Pro à Bac +3 (Bac Pro Cuisine / BTS Management en Hôtellerie-Restauration / Licence Pro Restauration Collective)",
        "salary": "🇫🇷 France : 2 400 € à 4 000 € brut/mois (selon le volume de repas et la complexité du site) • 🇸🇳 Sénégal : 350 000 à 900 000 FCFA net/mois (sociétés de catering pour bases minières, pétrolières, cliniques et lycées)",
        "salaryDetails": {
            "france": {
                "starter": "2 400 € brut/mois",
                "experienced": "3 100 € brut/mois",
                "senior": "4 200 € brut/mois",
                "source": "France Travail / SNRC (Syndicat National de la Restauration Collective)"
            },
            "senegal": {
                "starter": "350 000 FCFA net/mois",
                "experienced": "550 000 FCFA net/mois",
                "senior": "900 000 FCFA net/mois",
                "source": "Catering industriel, bases-vie offshore et cliniques privées Sénégal"
            }
        },
        "targetAudience": "Professionnels alliant compétences culinaires de masse, rigueur nutritionnelle, respect intransigeant de l'hygiène et gestion budgétaire.",
        "workEnvironment": [
            "🏫 Cuisines de grande capacité (de 300 à plus de 3 000 repas par jour en liaison chaude ou froide)",
            "🥗 Travail en journée continue (généralement sans coupure le soir ni le week-end en scolaire/entreprise)",
            "📋 Protocoles sanitaires et diététiques très stricts (menus équilibrés, textures modifiées en EHPAD)"
        ],
        "summary": "Responsable de la production de repas à grande échelle, le gérant de restauration collective pilote la préparation de centaines ou milliers de repas quotidiens, garantit l'équilibre nutritionnel et gère les approvisionnements et budgets du site.",
        "shortDescription": "Responsable de la production de repas à grande échelle, le gérant de restauration collective pilote la préparation de centaines ou milliers de repas quotidiens, garantit l'équilibre nutritionnel et gère les approvisionnements et budgets du site.",
        "longDescription": "Le gérant de restauration collective allie la passion de la cuisine au défi de la logistique industrielle et de la santé publique. Qu'il exerce dans une école, un hôpital ou un siège d'entreprise, il élabore des plans de menus équilibrés en collaboration avec des diététiciens. Il encadre une équipe de cuisiniers et d'agents de service, supervise la cuisson en gros volumes (sauteuses basculantes de 300 litres, fours vapeur géants) et contrôle scrupuleusement la chaîne du chaud (>63°C) ou du froid (<3°C). Il gère les achats de denrées, favorise les circuits courts et produits bio imposés par la loi (EGalim), suit les ratios budgétaires par assiette et dialogue avec les représentants des usagers.",
        "missions": [
            "Organiser et superviser la production culinaire de repas en grand volume selon les effectifs prévus",
            "Élaborer des plans de menus équilibrés et adaptés aux publics (enfants, patients, résidents, salariés)",
            "Appliquer avec une rigueur absolue le Plan de Maîtrise Sanitaire (HACCP) et conserver les plats témoins",
            "Gérer les approvisionnements : commandes, réception, traçabilité et négociation des denrées alimentaires",
            "Piloter le budget de fonctionnement du site : coût matière par repas (grammage strict), masse salariale et productivité"
        ],
        "activities": [
            "Prélèvement et archivage réglementaire des échantillons témoins de chaque plat pendant 7 jours",
            "Programmation des cellules de refroidissement rapide et des chambres de maintien en température",
            "Animation de la commission des menus avec les représentants des élèves, parents ou salariés",
            "Gestion du tri des biodéchets et déploiement de plans de lutte contre le gaspillage alimentaire"
        ],
        "typicalDay": [
            {
                "time": "06:30",
                "activity": "Arrivée sur site : contrôle des températures des chambres froides et réception des livraisons de produits frais."
            },
            {
                "time": "07:30",
                "activity": "Lancement de la production avec l'équipe de cuisine : cuisson des légumes à la vapeur et rôtissage des viandes."
            },
            {
                "time": "10:30",
                "activity": "Prélèvement obligatoire des plats témoins, vérification organoleptique et contrôle de la température au cœur."
            },
            {
                "time": "11:30",
                "activity": "Début de la distribution : approvisionnement continu des lignes de self-service et contrôle du réassort."
            },
            {
                "time": "13:45",
                "activity": "Fin du service : pesée des restes pour le suivi du gaspillage alimentaire et nettoyage intégral de la cuisine."
            },
            {
                "time": "14:30",
                "activity": "Travail administratif : commande des matières premières sur progiciel d'achat et validation des plannings."
            }
        ],
        "daily": {
            "morning": "Réception des marchandises, lancement des cuissons en gros volumes et contrôle sanitaire strict.",
            "afternoon": "Supervision de la distribution au self, analyse des coûts par assiette et commandes fournisseurs.",
            "challenges": "Proposer des repas savoureux et nutritionnellement irréprochables avec un coût de revient très contraint."
        },
        "skills": {
            "hard": [
                "Techniques culinaires de grande production (liaison chaude, liaison froide, cuisson sous-vide)",
                "Maîtrise approfondie des normes sanitaires HACCP, du PMS et de la législation nutritionnelle (loi EGalim, GEMRCN)",
                "Gestion financière : calcul du coût portion au centime d'euro près et gestion des stocks",
                "Management d'équipe de production et logistique de distribution"
            ],
            "soft": [
                "Organisation méthodologique et sens de l'anticipation logistique",
                "Capacité d'écoute et sens pédagogique face aux convives et usagers",
                "Rigueur administrative et respect scrupuleux des procédures de sécurité sanitaire",
                "Sens du collectif et bienveillance managériale"
            ],
            "technical": [
                "Techniques culinaires de grande production",
                "Maîtrise approfondie des normes sanitaires HACCP et PMS",
                "Gestion financière et calcul du coût portion"
            ],
            "human": [
                "Organisation méthodologique et anticipation logistique",
                "Capacité d'écoute et sens pédagogique",
                "Rigueur administrative et respect des procédures"
            ],
            "tools": [
                "Sauteuses basculantes automatisées, fours mixtes grande capacité et marmites vapeur",
                "Cellules de refroidissement rapide et chariots isothermes de transport",
                "Logiciels de gestion de restauration collective (Adoria, Datameal, WinRest)"
            ]
        },
        "qualities": [
            "Rigueur sanitaire maniaque",
            "Sens de l'organisation et méthode",
            "Leadership opérationnel",
            "Sensibilité nutritionnelle et diététique"
        ],
        "studies": [
            "🇫🇷 France : Bac Pro Cuisine ou Bac Pro Restauration, suivi d'un BTS Management en Hôtellerie-Restauration (MHR option A Cuisine) ou d'une Licence Professionnelle Métiers de la santé : nutrition et alimentation (parcours Restauration collective).",
            "🇸🇳 Sénégal : Diplôme de Technicien Supérieur en Restauration (ENFHT Dakar / CNQP), très recherché par les compagnies de catering minier et pétrolier opérant au Sénégal et en Afrique de l'Ouest."
        ],
        "evolution": "Chef gérant ➔ Responsable de secteur restauration collective (supervision de 5 à 10 sites) ➔ Directeur régional d'exploitation.",
        "saviezVous": {
            "fait": "En restauration collective hospitalière, le gérant doit maîtriser plus de 20 régimes alimentaires différents en même temps (sans sel, sans gluten, diabétique, textures lisses) tout en assurant le plaisir de manger !",
            "chiffre": "La restauration collective sert plus de 3 milliards de repas chaque année en France, représentant un levier d'action massif pour la transition agricole et l'approvisionnement biologique local."
        },
        "sources": [
            {
                "name": "France Travail MétierScope - Fiche Métier Gestion de structure de restauration collective (ROME G1403)",
                "url": "https://candidat.francetravail.fr/metierscope/fiche-metier/G1403",
                "date": "2026",
                "type": "Source officielle française"
            }
        ],
        "interests": [
            "management-direction-etablissement",
            "passion-cuisine-gastronomie",
            "accueil-relation-client-service"
        ]
    },
    {
        "id": "yield-manager",
        "slug": "yield-manager",
        "title": "Yield Manager / Revenue Manager",
        "aliases": [
            "Revenue Manager hôtelier",
            "Responsable de la tarification dynamique",
            "Gestionnaire des revenus et des capacités",
            "Pricing & Revenue Analyst",
            "Responsable Yield Management"
        ],
        "icon": "📊",
        "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
        "familyId": "hotellerie-restauration-hospitalite",
        "familyName": "Hôtellerie, Restauration & Hospitalité",
        "connectedFamilies": [
            "hotellerie-restauration-hospitalite",
            "data-decision",
            "finance-fintech",
            "commerce-marketing",
            "tourisme-hotellerie",
            "numerique-ia"
        ],
        "domain": "Gestion, Stratégie & Revenue Management",
        "domainId": "strategie-revenue-management",
        "subdomain": "Yield Management & Pricing dynamique",
        "sectors": [
            "Grands groupes hôteliers internationaux et palaces",
            "Compagnies aériennes, ferroviaires et maritimes",
            "Plateformes de réservation en ligne (OTAs, agences de voyage en ligne)",
            "Parcs d'attractions, résidences de tourisme et loueurs de véhicules"
        ],
        "codeRome": "M1704",
        "franceTravailUrl": "https://candidat.francetravail.fr/metierscope/fiche-metier/M1704",
        "franceTravailSource": true,
        "isEmerging": true,
        "level": "Bac +5 (Master Management Hôtelier / Master Revenue Management / École de Commerce / Master Data & Décision)",
        "salary": "🇫🇷 France : 3 000 € à 5 800 € brut/mois (jusqu'à 7 500 € pour un Corporate Director of Revenue Management) • 🇸🇳 Sénégal : 500 000 à 1 500 000 FCFA net/mois (sièges régionaux de groupes hôteliers, compagnies aériennes Air Sénégal / ASECNA)",
        "salaryDetails": {
            "france": {
                "starter": "3 000 € brut/mois",
                "experienced": "4 500 € brut/mois",
                "senior": "6 500 € brut/mois",
                "source": "France Travail / APEC / Hospitality Revenue Management Association"
            },
            "senegal": {
                "starter": "500 000 FCFA net/mois",
                "experienced": "900 000 FCFA net/mois",
                "senior": "1 500 000 FCFA net/mois",
                "source": "Grilles cadres compagnies aériennes et hubs hôteliers régionaux Dakar"
            }
        },
        "targetAudience": "Esprits analytiques passionnés de chiffres, d'économie comportementale, de prévisions statistiques et de stratégie commerciale hôtelière.",
        "workEnvironment": [
            "📊 Bureau connecté équipé de plusieurs écrans d'analyse de données et d'algorithmes de pricing",
            "🤝 Réunions régulières avec la direction générale, les ventes et le marketing digital",
            "⚡ Prise de décision en temps réel face aux variations de la demande et de la concurrence"
        ],
        "summary": "Stratège de la rentabilité hôtelière, le Yield Manager analyse la demande, les comportements d'achat et la concurrence pour fixer en temps réel le prix optimal de chaque chambre afin de maximiser le chiffre d'affaires et le taux d'occupation.",
        "shortDescription": "Stratège de la rentabilité hôtelière, le Yield Manager analyse la demande, les comportements d'achat et la concurrence pour fixer en temps réel le prix optimal de chaque chambre afin de maximiser le chiffre d'affaires et le taux d'occupation.",
        "longDescription": "Le Yield Manager (ou Revenue Manager) applique la formule magique du commerce moderne : 'vendre la bonne chambre, au bon client, au bon moment, au bon prix et par le bon canal de distribution'. À l'aide de logiciels de pointe (RMS) et d'algorithmes prédictifs, il étudie l'historique des réservations, les tendances météo, le calendrier des événements (salons, concerts, vacances) et surveille les tarifs des concurrents. Si la demande explose pour une date donnée, il augmente les prix pour doper la marge ; si le taux de remplissage est faible, il crée des promotions ciblées pour remplir l'hôtel. Il gère également la répartition des chambres entre les canaux directs (site de l'hôtel) et les plateformes en ligne (Booking, Expedia) pour minimiser les commissions d'intermédiation.",
        "missions": [
            "Analyser quotidiennement les données d'occupation, les courbes de montée en charge et les prévisions de demande",
            "Ajuster en temps réel les tarifs des chambres et suites selon les segments de clientèle (loisirs, affaires, groupes)",
            "Optimiser la politique de distribution : arbitrer entre ventes directes et agences de voyage en ligne (OTAs)",
            "Définir les conditions de vente : durées minimales de séjour, conditions d'annulation et offres promotionnelles",
            "Présenter les rapports de performance (RevPAR, Taux d'occupation, ADR) à la direction générale et aux propriétaires"
        ],
        "activities": [
            "Paramétrage des algorithmes de Revenue Management System (RMS) et veille concurrentielle automatisée",
            "Élaboration des budgets prévisionnels de chiffre d'affaires hébergement pour l'année à venir",
            "Animation du 'Revenue Meeting' hebdomadaire avec le Directeur Général et la Directrice des Ventes",
            "Suivi du coût d'acquisition client par canal de distribution pour maximiser le bénéfice net de l'hôtel"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Arrivée et extraction des rapports de la veille : analyse du taux d'occupation réalisé, du prix moyen et du RevPAR."
            },
            {
                "time": "09:30",
                "activity": "Vérification des courbes de réservation pour les 90 prochains jours et détection des dates à forte ou faible demande."
            },
            {
                "time": "11:00",
                "activity": "Ajustement des grilles tarifaires sur le channel manager : hausse de prix pour un week-end de grand salon."
            },
            {
                "time": "14:00",
                "activity": "Revue des contrats d'agences de voyage et négociation des quotas de chambres alloués pour la saison haute."
            },
            {
                "time": "16:00",
                "activity": "Animation du Revenue Meeting avec le Directeur d'hôtel et le Chef de réception."
            },
            {
                "time": "17:30",
                "activity": "Modélisation statistique des scénarios d'atterrissage budgétaire de fin de mois."
            }
        ],
        "daily": {
            "morning": "Analyse rigoureuse des indicateurs de la veille, benchmark des prix concurrents et ajustements tarifaires.",
            "afternoon": "Concertation stratégique avec les équipes commerciales, optimisation des canaux OTA et prévisions.",
            "challenges": "Anticiper avec précision les retournements de marché pour ne brader aucune chambre ni laisser de chambres vides."
        },
        "skills": {
            "hard": [
                "Maîtrise experte des principes du Yield Management et du Revenue Management hôtelier",
                "Utilisation avancée des progiciels RMS (IDeaS, Duetto, Atomize) et des Channel Managers (Siteminder, D-Edge)",
                "Statistiques décisionnelles, modélisation mathématique et maîtrise virtuose d'Excel / Power BI",
                "Compréhension approfondie de l'écosystème de distribution en ligne (GDS, OTA, Metasearch)"
            ],
            "soft": [
                "Esprit d'analyse aiguisé, rigueur logique et passion pour l'interprétation des données",
                "Capacité de conviction, pédagogie et communication claire auprès des équipes opérationnelles",
                "Sens aigu du commerce, réactivité et prise de décision rapide sous incertitude",
                "Vision prospective et curiosité pour les évolutions technologiques et l'IA prédictive"
            ],
            "technical": [
                "Maîtrise experte des principes du Yield Management",
                "Utilisation des progiciels RMS et Channel Managers",
                "Statistiques décisionnelles et modélisation Excel / Power BI"
            ],
            "human": [
                "Esprit d'analyse aiguisé et rigueur logique",
                "Capacité de conviction et pédagogie",
                "Sens aigu du commerce et réactivité"
            ],
            "tools": [
                "Revenue Management Systems (IDeaS G3 RMS, Duetto GameChanger)",
                "Channel Managers et moteurs de réservation (D-Edge, Siteminder)",
                "Outils de veille tarifaire (OTA Insight / Lighthouse, RateGain) et Microsoft Power BI"
            ]
        },
        "qualities": [
            "Esprit analytique et cartésien",
            "Anticipation et flair commercial",
            "Pédagogie et force de persuasion",
            "Agilité mentale"
        ],
        "studies": [
            "🇫🇷 France : Bac +5. Master spécialisé en Revenue Management hôtelier (Université d'Angers ESTHUA, IAE Savoie Mont-Blanc), Diplôme d'École de Commerce avec spécialisation Hospitality (ESSEC IMHI, EM Lyon, Kedge) ou écoles hôtelières de renommée internationale (Vatel, Ferrandi, Institut Paul Bocuse / Lyfe).",
            "🇸🇳 Sénégal : Master en Gestion / Économie / Statistiques (FASEG UCAD Dakar, Université Gaston Berger de Saint-Louis) ou Master Management du Tourisme (ENFHT), très recherché par les compagnies aériennes régionales et groupes hôteliers."
        ],
        "evolution": "Yield Analyst ➔ Revenue Manager d'établissement ➔ Multi-unit Revenue Manager ➔ Corporate Director of Revenue ➔ Directeur Général d'hôtel.",
        "saviezVous": {
            "fait": "Inventé dans les années 1980 par les compagnies aériennes américaines (notamment American Airlines) pour contrer la dérégulation des vols, le Yield Management a été adapté avec éclat à l'hôtellerie au début des années 1990 !",
            "chiffre": "L'implémentation d'un système moderne de Yield Management permet d'augmenter le chiffre d'affaires d'un hôtel de 5% à 15% à volume de chambres strictement identique."
        },
        "sources": [
            {
                "name": "France Travail MétierScope - Fiche Métier Management de la stratégie commerciale / Yield Manager (ROME M1704 / G1401)",
                "url": "https://candidat.francetravail.fr/metierscope/fiche-metier/M1704",
                "date": "2026",
                "type": "Source officielle française"
            }
        ],
        "interests": [
            "yield-revenue-management",
            "management-direction-etablissement",
            "voyage-hospitalite-hotellerie"
        ]
    }
];

    const HOSPITALITY_PATHWAYS = [
    {
        "id": "voie-professionnelle-cap-cqp",
        "name": "Filière Voie Professionnelle : CAP, CQP & Titres Professionnels",
        "duration": "CAP (2 ans) à Titre Professionnel (6 à 12 mois)",
        "icon": "🍳",
        "description": "Voie royale d'apprentissage pratique des gestes métiers fondamentaux en cuisine, service et entretien : CAP Cuisine, CAP Commercialisation et services en HCR, Titres professionnels Cuisinier, Serveur ou Agent d'hôtellerie.",
        "steps": [
            "Accès direct dès la fin de 3e en lycée hôtelier ou CFA en alternance, ou par reconversion adulte",
            "Apprentissage intensif des techniques de base : taillage, cuissons, arts de la table ou techniques d'entretien",
            "Immersion directe en entreprise (restaurants, brasseries, hôtels) facilitant l'insertion professionnelle immédiate",
            "Insertion rapide comme commis de cuisine, serveur ou valet de chambre avec perspectives d'évolution interne"
        ]
    },
    {
        "id": "voie-technologique-bac-pro-bp",
        "name": "Filière Bac Technologique & Professionnel : Bac Pro & BP Arts Culinaires",
        "duration": "Bac Pro (3 ans) / Bac STHR (3 ans) / BP (2 ans après CAP)",
        "icon": "🍽️",
        "description": "Formation technique approfondie associant savoir-faire culinaire ou de salle, gestion des coûts et culture professionnelle : Bac Pro Cuisine, Bac Pro CSR, Bac Techno STHR et Brevet Professionnel (BP) Arts de la cuisine.",
        "steps": [
            "Orientation après la 3e ou passerelle après un CAP pour approfondir la théorie et la pratique",
            "Étude des sciences appliquées à l'alimentation, de la gestion des stocks, du droit HCR et des langues étrangères",
            "Stages longs et apprentissage en établissements gastronomiques ou hôtels de chaîne",
            "Accès aux postes de demi-chef de partie, chef de rang ou poursuite d'études en BTS"
        ]
    },
    {
        "id": "voie-superieure-bts-mhr",
        "name": "Filière Technicien Supérieur : BTS Management en Hôtellerie-Restauration",
        "duration": "Bac +2 (BTS MHR Options A, B, C)",
        "icon": "🎓",
        "description": "Diplôme d'État de référence pour former les cadres opérationnels intermédiaires en 3 options : Option A (Management d'unité de restauration), Option B (Management d'unité de production culinaire), Option C (Management d'unité d'hébergement).",
        "steps": [
            "Recrutement sélectif après un Bac STHR, Bac général ou Bac Pro (avec classe de mise à niveau si nécessaire)",
            "Enseignement complet : management des équipes, droit du travail, contrôle de gestion, marketing et œnologie",
            "Stages de management et conduite de projets en restauration ou hôtellerie de grand standing",
            "Accès direct aux postes de second de cuisine, maître d'hôtel, chef de réception ou poursuite en Licence Pro"
        ]
    },
    {
        "id": "voie-bachelor-licence-pro",
        "name": "Filière Cadre Opérationnel : Licence Professionnelle & Bachelor Hospitality",
        "duration": "Bac +3 (Licence Pro / Bachelor spécialisé)",
        "icon": "⭐",
        "description": "Cursus professionnalisant de haut niveau délivré par les universités et grandes écoles hôtelières réputées (Ferrandi Paris, Institut Paul Bocuse / Lyfe, Vatel, ENFHT Dakar) pour maîtriser la gestion d'établissement et le service d'excellence.",
        "steps": [
            "Recrutement après un Bac +2 (BTS, DUT/BUT, L2) ou cursus intégré post-bac en 3 ans",
            "Spécialisations de pointe : Gastronomie internationale, Gestion de palace, Éco-hôtellerie ou Événementiel",
            "Projets de création d'entreprise hôtelière et stages internationaux dans des resorts 5 étoiles",
            "Postes d'assistant de direction, premier maître d'hôtel, gouvernante générale ou adjoint de direction"
        ]
    },
    {
        "id": "voie-master-msc-direction",
        "name": "Filière Dirigeant & Stratège : Master Universitaire & MSc Hospitality Management",
        "duration": "Bac +5 (Master / MSc / MBA Hospitality Management)",
        "icon": "👑",
        "description": "Filière d'excellence managériale et stratégique pour former les directeurs généraux d'hôtels, directeurs de la restauration (F&B) et Yield Managers internationaux (Écoles de commerce, IAE, Écoles de Lausanne/Glion/Ferrandi).",
        "steps": [
            "Admission sur concours et dossier après une Licence, Bachelor ou diplôme d'école hôtelière",
            "Formation stratégique : Revenue Management, finance d'entreprise, asset management hôtelier et IA appliquée",
            "Missions de conseil, stages de direction générale à l'international et thèses professionnelles",
            "Accès aux postes de Yield Manager, Directeur de restaurant gastronomique, Directeur d'hôtel ou Directeur régional"
        ]
    }
];

    return {
        DOMAINS: DOMAINS,
        JOBS: JOBS,
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
            return HOSPITALITY_PATHWAYS;
        },
        getHospitalityPathways: function() {
            return HOSPITALITY_PATHWAYS;
        }
    };
}));

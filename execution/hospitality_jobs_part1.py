# -*- coding: utf-8 -*-
"""
Part 1 of Hospitality, Catering & Hospitality Data Module
Contains:
- 8 Structured Domains with full metadata
- 6 High-depth Job Cards:
  1. Commis de cuisine (ROME G1602)
  2. Cuisinier / Cuisinière (ROME G1602)
  3. Second de cuisine (ROME G1601)
  4. Chef cuisinier / Cheffe de cuisine (ROME G1601)
  5. Plongeur en restauration (ROME G1605)
  6. Pâtissier de restaurant (ROME D1104)
Source: France Travail / MétierScope (Secteur 102: Hôtellerie et restauration)
"""

DOMAINS = [
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
]

JOBS_PART1 = [
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
        "franceTravailSource": True,
        "isEmerging": False,
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
            {"time": "08:30", "activity": "Arrivée en tenue professionnelle (veste, tablier, toque, chaussures de sécurité), contrôle des frigos et déchargement des livraisons de légumes et viandes."},
            {"time": "09:30", "activity": "Mise en place : épluchage et taillage de 30 kg de légumes, préparation des herbes fraîches et pré-cuisson des garnitures."},
            {"time": "11:45", "activity": "Briefing de service avec le Chef de cuisine et vérification finale des postes de cuisson."},
            {"time": "12:00", "activity": "Coup de feu du déjeuner : transmission rapide des ingrédients, réapprovisionnement des garnitures et aide au dressage des assiettes."},
            {"time": "14:30", "activity": "Fin de service : rangement des préparations filmées et étiquetées (dates limites), nettoyage approfondi et désinfection des sols et plans de travail."},
            {"time": "18:00", "activity": "Deuxième service : répétition de la mise en place pour les réservations du dîner."}
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
        "interests": ["passion-cuisine-gastronomie", "accueil-relation-client-service"]
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
        "franceTravailSource": True,
        "isEmerging": False,
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
            {"time": "09:00", "activity": "Prise de poste : allumage des pianos, préparation des marinades et démarrage des cuissons lentes (braisés, bouillons)."},
            {"time": "10:30", "activity": "Mise en place de sa partie : pesée des ingrédients, confection des sauces mères et pré-dressage des garnitures."},
            {"time": "11:45", "activity": "Dégustation et assaisonnement des préparations avec le Second et le Chef de cuisine."},
            {"time": "12:15", "activity": "Envoi du service déjeuner : annonce des bons par le passe, cuissons précises et expédition sans temps mort."},
            {"time": "14:45", "activity": "Arrêt du service, récapitulatif des consommations, rangement hermétique et nettoyage de la partie."},
            {"time": "18:30", "activity": "Retour en cuisine pour le service du dîner : réajustement des préparations et nouvel envoi culinaire."}
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
        "interests": ["passion-cuisine-gastronomie", "accueil-relation-client-service"]
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
        "franceTravailSource": True,
        "isEmerging": False,
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
            {"time": "08:00", "activity": "Arrivée matinale : vérification des arrivages fournisseurs, validation des bons de livraison et contrôle qualité."},
            {"time": "09:00", "activity": "Vérification des postes de travail des chefs de partie, répartition des tâches de mise en place."},
            {"time": "11:30", "activity": "Goûtage des sauces, des émulsions et des garnitures avec l'équipe."},
            {"time": "12:00", "activity": "Prise de position au passe-plat : annonce des bons, coordination du rythme de service et inspection des assiettes."},
            {"time": "14:45", "activity": "Débriefing de fin de service : analyse des pertes matières, inventaire des stocks et passation des commandes du lendemain."},
            {"time": "18:00", "activity": "Préparation et relance du coup de feu pour le service du soir."}
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
        "interests": ["passion-cuisine-gastronomie", "management-direction-etablissement"]
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
        "franceTravailSource": True,
        "isEmerging": False,
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
            {"time": "08:30", "activity": "Point avec le Second sur les stocks et revue des réservations de prestige (VIP, critiques, régimes spécifiques)."},
            {"time": "09:30", "activity": "Visite du marché ou réception des produits nobles (truffe, homard, poissons de ligne, gibiers)."},
            {"time": "10:30", "activity": "Séance de création culinaire : ajustement d'un nouveau dessert ou d'une sauce d'accompagnement."},
            {"time": "11:45", "activity": "Briefing général avec les équipes de cuisine et de salle : explication des plats et démonstration de dressage."},
            {"time": "12:15", "activity": "Conduite du coup de feu : autorité suprême au passe-plat, validation ultime de chaque assiette."},
            {"time": "15:00", "activity": "Réunion administrative : analyse des marges, factures fournisseurs et plannings RH avec la direction."},
            {"time": "19:00", "activity": "Supervision du service d'excellence du soir et accueil en salle des convives en fin de service."}
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
        "interests": ["passion-cuisine-gastronomie", "management-direction-etablissement", "voyage-hospitalite-hotellerie"]
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
        "franceTravailSource": True,
        "isEmerging": False,
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
            {"time": "11:30", "activity": "Mise en route de la machine à laver, vérification des niveaux de détergent et préparation des bacs de trempage."},
            {"time": "12:15", "activity": "Arrivée massive des premiers plateaux de vaisselle sale : tri immédiat, passage en machine et essuyage des couverts."},
            {"time": "13:30", "activity": "Nettoyage en flux tendu de la batterie de cuisine (casseroles, poêles) réclamée d'urgence par les cuisiniers."},
            {"time": "14:45", "activity": "Fin des retours : récurage des bacs, vidange et nettoyage des filtres du lave-vaisselle, évacuation des poubelles."},
            {"time": "15:30", "activity": "Lavage complet du sol de la plonge et coupure d'après-midi."},
            {"time": "18:45", "activity": "Reprise de poste pour le service du dîner."}
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
        "interests": ["passion-cuisine-gastronomie"]
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
        "franceTravailSource": True,
        "isEmerging": False,
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
            {"time": "05:00", "activity": "Arrivée au laboratoire : cuisson des viennoiseries du matin, mise en route des fours à sole."},
            {"time": "06:30", "activity": "Confection des crèmes et montage des entremets pour la mise en vitrine ou le service de midi."},
            {"time": "09:00", "activity": "Glaçage miroir des gâteaux, découpe des tartes et finition des décors aux fruits frais."},
            {"time": "11:00", "activity": "Tempérage du chocolat de couverture et moulage des pièces de présentation."},
            {"time": "12:30", "activity": "En restaurant : envoi des desserts à l'assiette en synchronisation avec le chef de cuisine."},
            {"time": "14:00", "activity": "Nettoyage méticuleux des marbres, batteurs-mélangeurs et rangement des chambres froides positives et négatives."}
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
        "interests": ["patisserie-desserts-creatifs", "passion-cuisine-gastronomie", "accueil-relation-client-service"]
    }
]

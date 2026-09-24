# -*- coding: utf-8 -*-
"""
Part 2 of Hospitality, Catering & Hospitality Data Module
Contains 9 High-depth Job Cards:
  7. Employé / Employée de restaurant (ROME G1603)
  8. Serveur / Serveuse en restauration (ROME G1803)
  9. Garçon / Serveuse de café (ROME G1801)
  10. Maître / Maîtresse d'hôtel (ROME G1802)
  11. Barman / Barmaid (ROME G1801)
  12. Sommelier / Sommelière (ROME G1804)
  13. Employé / Employée de ménage (ROME K2204)
  14. Valet / Femme de chambre (ROME G1501)
  15. Gouvernant / Gouvernante d'hôtel (ROME G1502)
Source: France Travail / MétierScope (Secteur 102: Hôtellerie et restauration)
"""

JOBS_PART2 = [
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
        "franceTravailSource": True,
        "isEmerging": False,
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
            {"time": "10:30", "activity": "Arrivée et mise en place : garnissage des vitrines réfrigérées, contrôle des dates et approvisionnement des caisses."},
            {"time": "11:45", "activity": "Ouverture des portes : accueil des premiers clients, prise de commandes et service souriant."},
            {"time": "12:15", "activity": "Rush du déjeuner : cadence rapide aux caisses, préparation synchrone des commandes à emporter et sur place."},
            {"time": "13:45", "activity": "Passage en salle pour le débarrassage régulier des plateaux et désinfection des tables."},
            {"time": "14:30", "activity": "Nettoyage des machines (distributeurs de boissons, friteuses, toasters) et balayage de la salle."},
            {"time": "15:00", "activity": "Passation des consignes à l'équipe de l'après-midi."}
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
        "interests": ["accueil-relation-client-service", "passion-cuisine-gastronomie"]
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
        "franceTravailSource": True,
        "isEmerging": False,
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
            {"time": "10:30", "activity": "Mise en place de la salle : balayage, nettoyage des pieds de tables, repassage des nappes et mise des couverts."},
            {"time": "11:45", "activity": "Briefing de service avec le Maître d'hôtel et le Chef cuisinier : découverte des plats du jour et consignes."},
            {"time": "12:00", "activity": "Début du service du midi : accueil continu des clients, prise de commandes et aller-retours cadencés avec la cuisine."},
            {"time": "14:15", "activity": "Fin du service : encaissements, débarrassage intégral, dé-nappage et réarmement pour le soir."},
            {"time": "15:00", "activity": "Pause en coupure de l'après-midi."},
            {"time": "18:45", "activity": "Prise de service pour le dîner : lumières tamisées, allumage des bougies et accueil des réservations du soir."}
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
        "interests": ["accueil-relation-client-service", "passion-cuisine-gastronomie", "voyage-hospitalite-hotellerie"]
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
        "franceTravailSource": True,
        "isEmerging": False,
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
            {"time": "06:30", "activity": "Ouverture du café : allumage du percolateur, installation des tables et chaises en terrasse, réception des journaux."},
            {"time": "07:30", "activity": "Rush matinal des cafés-croissants : cadence maximale au comptoir et en terrasse pour les clients pressés."},
            {"time": "10:30", "activity": "Débarrassage, nettoyage des tables et préparation des mises en place de midi (salades, plats du jour)."},
            {"time": "12:00", "activity": "Coup de feu du déjeuner de brasserie : enchaînement des plats du jour, bières pression et cafés gourmands."},
            {"time": "14:30", "activity": "Encaissements de fin de déjeuner et nettoyage du zinc du comptoir."},
            {"time": "16:30", "activity": "Pause et relais avec l'équipe de soirée (afterwork / apéritif)."}
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
        "interests": ["accueil-relation-client-service", "voyage-hospitalite-hotellerie"]
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
        "franceTravailSource": True,
        "isEmerging": False,
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
            {"time": "10:30", "activity": "Contrôle visuel minutieux de la salle : alignement des tables, propreté de l'argenterie, composition florale et cartes des menus."},
            {"time": "11:30", "activity": "Briefing de la brigade de salle avec le Chef cuisinier : explication de l'esprit des plats, questions des serveurs."},
            {"time": "12:00", "activity": "Ouverture des portes : accueil personnalisé à l'entrée du restaurant et installation cérémonieuse des convives."},
            {"time": "12:45", "activity": "Service au guéridon : découpe d'une pièce de viande noble et service aux convives d'honneur."},
            {"time": "14:30", "activity": "Accompagnement des clients jusqu'au vestiaire, recueil des retours d'expérience et debriefing d'après-service."},
            {"time": "18:30", "activity": "Mise en place de l'ambiance nocturne et préparation du service de prestige du dîner."}
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
        "interests": ["accueil-relation-client-service", "management-direction-etablissement", "voyage-hospitalite-hotellerie"]
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
        "franceTravailSource": True,
        "isEmerging": False,
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
            {"time": "16:00", "activity": "Arrivée et mise en place du bar : pressage des agrumes frais, préparation des herbes (menthe, thym) et contrôle des stocks."},
            {"time": "17:30", "activity": "Remplissage des bacs à glace et vérification de la propreté étincelante de la verrerie (verres martini, rocks, flûtes)."},
            {"time": "18:30", "activity": "Début du service afterwork : accueil des premiers clients, conseil sur les cocktails signature et service cadencé."},
            {"time": "21:30", "activity": "Pic de fréquentation : enchaînement rythmé des shakers et verres à mélange, ambiance musicale feutrée."},
            {"time": "01:00", "activity": "Dernières commandes, fermeture des caisses et comptage des recettes."},
            {"time": "01:45", "activity": "Nettoyage approfondi du zinc, lavage de la verrerie fine au lave-verre spécifique et inventaire des bouteilles entamées."}
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
        "interests": ["bar-mixologie-sommellerie", "accueil-relation-client-service", "voyage-hospitalite-hotellerie"]
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
        "franceTravailSource": True,
        "isEmerging": False,
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
            {"time": "10:00", "activity": "Descente en cave : réception des caisses expédiées par les domaines, étiquetage et rangement par région."},
            {"time": "11:00", "activity": "Point avec le Chef cuisinier sur les créations du jour et ajustement des propositions de vin au verre."},
            {"time": "11:45", "activity": "Mise en température des bouteilles pour le service du midi dans les armoires de chambrage ou de rafraîchissement."},
            {"time": "12:15", "activity": "Début du service : conseil personnalisé aux tables, ouverture cérémonieuse et service des verres."},
            {"time": "14:45", "activity": "Mise à jour du livre de cave numérique et analyse des ventes de la matinée."},
            {"time": "18:45", "activity": "Préparation du service du dîner : sélection des grands crus réservés et aération préalable en carafe."}
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
        "interests": ["bar-mixologie-sommellerie", "passion-cuisine-gastronomie", "voyage-hospitalite-hotellerie"]
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
        "franceTravailSource": True,
        "isEmerging": False,
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
            {"time": "06:00", "activity": "Prise de poste matinale avant le réveil des clients : nettoyage du grand hall d'accueil et des paliers d'ascenseurs."},
            {"time": "07:30", "activity": "Lustrage du sol en marbre à l'autolaveuse et dépoussiérage des comptoirs d'accueil."},
            {"time": "09:00", "activity": "Tournée complète d'entretien et de désinfection des sanitaires publics et espaces bien-être (spa, fitness)."},
            {"time": "11:30", "activity": "Nettoyage des baies vitrées de la terrasse et réapprovisionnement des distributeurs de savon et essuie-mains."},
            {"time": "13:30", "activity": "Tri des déchets, vidage des poubelles dans les conteneurs extérieurs et désinfection des locaux à poubelles."},
            {"time": "14:15", "activity": "Rangement du local technique de ménage et lavage des franges de balayage."}
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
        "interests": ["voyage-hospitalite-hotellerie"]
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
        "franceTravailSource": True,
        "isEmerging": False,
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
            {"time": "08:30", "activity": "Briefing matinal avec la Gouvernante : remise du rapport d'occupation des chambres (départs, arrivées, recouches VIP)."},
            {"time": "09:00", "activity": "Préparation du chariot d'étage : chargement du linge propre (draps, housses, serviettes) et des produits de toilette."},
            {"time": "09:30", "activity": "Début de la tournée des chambres : priorité aux départs pour préparer l'arrivée des clients de l'après-midi."},
            {"time": "12:00", "activity": "Traitement des recouches (clients en séjour) : réfection du lit, changement des serviettes au sol et rapide dépoussiérage."},
            {"time": "14:30", "activity": "Contrôle des chambres terminées avec la Gouvernante d'étage."},
            {"time": "15:30", "activity": "Déchargement du linge sale à la buanderie, réassort du chariot pour le lendemain et remise des objets trouvés."}
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
        "interests": ["voyage-hospitalite-hotellerie"]
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
        "franceTravailSource": True,
        "isEmerging": False,
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
            {"time": "07:45", "activity": "Arrivée et extraction du rapport d'hébergement : départs anticipés, arrivées VIP, demandes spéciales."},
            {"time": "08:30", "activity": "Briefing matinal avec les équipes d'étage : distribution des feuilles de travail et rappel des consignes."},
            {"time": "09:30", "activity": "Inspection des couloirs, des ascenseurs et début du contrôle systématique des chambres libérées."},
            {"time": "12:00", "activity": "Vérification des suites de prestige réservées pour le début d'après-midi, validation sur le PMS."},
            {"time": "14:30", "activity": "Réunion de coordination avec le Directeur d'hébergement et le Chef de maintenance."},
            {"time": "16:00", "activity": "Inventaire du linge retourné par la blanchisserie, validation des bons de livraison et préparation du lendemain."}
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
        "interests": ["management-direction-etablissement", "voyage-hospitalite-hotellerie"]
    }
]

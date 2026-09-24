# -*- coding: utf-8 -*-
"""
Part 3 of Hospitality, Catering & Hospitality Data Module
Contains 6 High-depth Job Cards:
  16. Réceptionniste en hôtellerie (ROME G1703)
  17. Voiturier / Voiturier-bagagiste (ROME G1701)
  18. Directeur / Directrice de restaurant (ROME G1402)
  19. Directeur / Directrice d'hôtel (ROME G1401)
  20. Gérant / Gérante de restauration collective (ROME G1403)
  21. Yield Manager / Revenue Manager (ROME M1704 / G1401)
And:
  - HOSPITALITY_PATHWAYS (5 Tiers of Hospitality Studies from CAP to Master/MSc)
Source: France Travail / MétierScope (Secteur 102: Hôtellerie et restauration)
"""

JOBS_PART3 = [
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
        "franceTravailSource": True,
        "isEmerging": False,
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
            {"time": "06:45", "activity": "Arrivée et passation de consignes avec le Night Auditor : revue des événements de la nuit et arrivées VIP du jour."},
            {"time": "07:30", "activity": "Période de check-out : facturation des départs, encaissement rapide des hommes d'affaires et commande de taxis."},
            {"time": "10:30", "activity": "Traitement administratif : réponse aux e-mails de réservation, vérification des arrhes et des pré-autorisations bancaires."},
            {"time": "12:00", "activity": "Point avec la Gouvernante sur les chambres libérées et nettoyées en priorité pour les arrivées précoces."},
            {"time": "14:00", "activity": "Début des check-ins de l'après-midi : accueil chaleureux, présentation des services et remise des clés."},
            {"time": "15:15", "activity": "Passation détaillée du relais avec le réceptionniste du shift du soir."}
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
        "interests": ["accueil-relation-client-service", "voyage-hospitalite-hotellerie", "management-direction-etablissement"]
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
        "franceTravailSource": True,
        "isEmerging": False,
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
            {"time": "11:00", "activity": "Prise de poste sur le parvis : vérification du carnet de bord des véhicules en stationnement et propreté de l'entrée."},
            {"time": "12:00", "activity": "Arrivée continue des clients du déjeuner : accueil chaleureux, stationnement méthodique et remise des tickets de vestiaire auto."},
            {"time": "14:30", "activity": "Départ des convives : restitution rapide des voitures devant le perron et raccompagnement soigné."},
            {"time": "15:30", "activity": "Vague des arrivées hôtelières (check-in) : déchargement des malles de voyage et livraison dans les suites."},
            {"time": "18:00", "activity": "Coordination avec le Concierge pour la préparation des véhicules réservés pour les soirées des clients."},
            {"time": "19:30", "activity": "Accueil du dîner gastronomique et relais avec le voiturier de nuit."}
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
        "interests": ["accueil-relation-client-service", "voyage-hospitalite-hotellerie"]
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
        "franceTravailSource": True,
        "isEmerging": False,
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
            {"time": "09:30", "activity": "Arrivée et analyse des chiffres de la veille : comparaison du réalisé avec les objectifs budgétaires."},
            {"time": "10:30", "activity": "Entretien individuel de recrutement pour un poste de chef de rang et validation des plannings de la semaine."},
            {"time": "11:30", "activity": "Briefing pré-service avec le Chef cuisinier et le responsable de salle."},
            {"time": "12:15", "activity": "Présence active en salle pendant le service : accueil des habitués, contrôle de la fluidité et du standing."},
            {"time": "14:45", "activity": "Contrôle des clôtures de caisse, vérification des factures fournisseurs et gestion des règlements."},
            {"time": "16:30", "activity": "Rendez-vous avec un organisateur d'événements pour privatiser le restaurant pour un séminaire d'entreprise."}
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
        "interests": ["management-direction-etablissement", "passion-cuisine-gastronomie", "accueil-relation-client-service"]
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
        "franceTravailSource": True,
        "isEmerging": False,
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
            {"time": "08:00", "activity": "Tournée matinale de l'hôtel : salutation des équipes de petit-déjeuner et inspection du hall de réception."},
            {"time": "09:00", "activity": "Morning Briefing avec les chefs de service : chiffres d'occupation de la nuit, événements du jour et arrivées VIP."},
            {"time": "10:30", "activity": "Réunion financière : analyse du RevPAR, des coûts d'énergie et négociation des contrats fournisseurs majeurs."},
            {"time": "12:30", "activity": "Déjeuner de travail avec un client d'entreprise stratégique ou le président de l'office de tourisme local."},
            {"time": "14:30", "activity": "Revue des projets d'investissement : rénovation d'une aile de chambres et transition écologique de l'hôtel."},
            {"time": "17:00", "activity": "Accueil d'une délégation internationale à la réception et échanges personnalisés."},
            {"time": "19:00", "activity": "Passage dans les restaurants et bars de l'hôtel avant de confier la permanence au Night Manager."}
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
        "interests": ["management-direction-etablissement", "voyage-hospitalite-hotellerie", "accueil-relation-client-service"]
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
        "franceTravailSource": True,
        "isEmerging": False,
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
            {"time": "06:30", "activity": "Arrivée sur site : contrôle des températures des chambres froides et réception des livraisons de produits frais."},
            {"time": "07:30", "activity": "Lancement de la production avec l'équipe de cuisine : cuisson des légumes à la vapeur et rôtissage des viandes."},
            {"time": "10:30", "activity": "Prélèvement obligatoire des plats témoins, vérification organoleptique et contrôle de la température au cœur."},
            {"time": "11:30", "activity": "Début de la distribution : approvisionnement continu des lignes de self-service et contrôle du réassort."},
            {"time": "13:45", "activity": "Fin du service : pesée des restes pour le suivi du gaspillage alimentaire et nettoyage intégral de la cuisine."},
            {"time": "14:30", "activity": "Travail administratif : commande des matières premières sur progiciel d'achat et validation des plannings."}
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
        "interests": ["management-direction-etablissement", "passion-cuisine-gastronomie", "accueil-relation-client-service"]
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
        "franceTravailSource": True,
        "isEmerging": True,
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
            {"time": "08:30", "activity": "Arrivée et extraction des rapports de la veille : analyse du taux d'occupation réalisé, du prix moyen et du RevPAR."},
            {"time": "09:30", "activity": "Vérification des courbes de réservation pour les 90 prochains jours et détection des dates à forte ou faible demande."},
            {"time": "11:00", "activity": "Ajustement des grilles tarifaires sur le channel manager : hausse de prix pour un week-end de grand salon."},
            {"time": "14:00", "activity": "Revue des contrats d'agences de voyage et négociation des quotas de chambres alloués pour la saison haute."},
            {"time": "16:00", "activity": "Animation du Revenue Meeting avec le Directeur d'hôtel et le Chef de réception."},
            {"time": "17:30", "activity": "Modélisation statistique des scénarios d'atterrissage budgétaire de fin de mois."}
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
        "interests": ["yield-revenue-management", "management-direction-etablissement", "voyage-hospitalite-hotellerie"]
    }
]

HOSPITALITY_PATHWAYS = [
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
]

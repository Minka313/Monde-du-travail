# -*- coding: utf-8 -*-
"""
BASE DE DONNÉES COMPLÈTE PARTIE 2 :
♻️ DÉCHETS, TRI & RECYCLAGE (7 Métiers Vérifiés Onisep)
"""

JOBS_PART2 = [
    # -------------------------------------------------------------------------
    # DOMAINE 2 : DÉCHETS, TRI & RECYCLAGE (dechets-tri-recyclage)
    # -------------------------------------------------------------------------
    {
        "id": "agent-proprete-urbaine",
        "slug": "agent-proprete-urbaine",
        "title": "Agent / Agente de Propreté Urbaine",
        "aliases": [
            "Agent de nettoiement urbain",
            "Éboueur",
            "Ripeur",
            "Agent salubrité publique",
            "Balayeur de voirie",
            "Conducteur d'engin de propreté urbaine"
        ],
        "icon": "🧹",
        "image": "https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?w=800&auto=format&fit=crop&q=80",
        "familyId": "environnement-developpement-durable",
        "familyName": "Environnement, Écologie & Développement durable",
        "connectedFamilies": [
            "environnement-developpement-durable",
            "btp-construction"
        ],
        "domain": "Déchets, Tri & Recyclage",
        "domainId": "dechets-tri-recyclage",
        "subdomain": "Collecte sélective & Nettoiement urbain",
        "sectors": [
            "Services techniques municipaux et métropoles",
            "Grands groupes de propreté et services environnementaux (Veolia, Suez, Derichebourg)",
            "Entreprises de collecte et traitement des déchets ménagers",
            "Régies publiques de propreté et salubrité"
        ],
        "onisepUrl": "https://www.onisep.fr/ressources/univers-metier/metiers/agent-agente-de-proprete-urbaine",
        "onisepSource": True,
        "isEmerging": False,
        "level": "Sans diplôme à CAP (CAP Valorisation des matières et propreté des espaces urbains / Bac Pro Propreté)",
        "salary": "🇫🇷 France : SMIC à 1 950 € brut/mois débutant (~21 000 à 25 000 € brut/an) hors primes de pénibilité, d'horaires décalés et de dimanche (Source : Onisep / Convention collective de la Propreté) • 🇸🇳 Sénégal : 120 000 à 250 000 FCFA net/mois (SONAGED, régies municipales de salubrité urbaine)",
        "salaryDetails": {
            "france": {
                "starter": "1 820 € brut/mois (SMIC + primes)",
                "experienced": "2 100 € brut/mois",
                "senior": "2 400 € brut/mois",
                "source": "Onisep / Convention collective nationale des activités du déchet"
            },
            "senegal": {
                "starter": "120 000 FCFA net/mois",
                "experienced": "170 000 FCFA net/mois",
                "senior": "250 000 FCFA net/mois",
                "source": "Grilles Société Nationale de Gestion Intégrée des Déchets (SONAGED)"
            }
        },
        "targetAudience": "Espace public, voirie, marchés, caniveaux, conteneurs d'apport volontaire et bacs roulants d'ordures ménagères",
        "workEnvironment": "Extérieur permanent (rues, trottoirs, quais de transfert), travail souvent très tôt le matin ou la nuit, manutention de charges",
        "summary": "Acteur essentiel du cadre de vie et de la santé publique, l'agent de propreté urbaine nettoie et entretient les rues, trottoirs, places de marché et espaces publics, tout en assurant la collecte des bacs roulants à l'arrière de la benne à ordures.",
        "missions": [
            "Balayer, laver, désinfecter et désencombrer les voies publiques, trottoirs, passages piétons et squares.",
            "Collecter les déchets ménagers et le tri sélectif en suivant la tournée du camion benne (ripeur).",
            "Conduire des engins mécanisés de nettoiement urbain (balayeuses de voirie, laveuses haute pression, aspirateurs de feuilles).",
            "Vider et entretenir les corbeilles de rue, nettoyer les points d'apport volontaire et signaler les dépôts sauvages."
        ],
        "activities": [
            "Parcours de la tournée de collecte matinale et accrochage sécurisé des bacs roulants au lève-conteneur.",
            "Nettoyage haute pression des abords des marchés municipaux après fermeture.",
            "Dégagement des feuilles mortes en automne et salage préventif des trottoirs en période hivernale.",
            "Entretien quotidien et désinfection du matériel et des engins motorisés au dépôt."
        ],
        "specialties": [
            "Ripeur / Éboueur de collecte des déchets",
            "Conducteur de balayeuse ou laveuse de voirie",
            "Agent de nettoiement manuel et mobilier urbain",
            "Équipier d'intervention rapide anti-tags et dépôts sauvages"
        ],
        "skills": {
            "hard": [
                "Techniques de nettoiement de voirie et utilisation du matériel haute pression",
                "Règles strictes de sécurité routière et port des Équipements de Protection Individuelle (EPI)",
                "Maniement des lève-conteneurs et compacteurs de bennes à ordures",
                "Permis B obligatoire, Permis C (Poids Lourd) très apprécié"
            ],
            "soft": [
                "Excellente condition physique et résistance aux intempéries (froid, pluie, chaleur)",
                "Ponctualité rigoureuse indispensable (démarrages de tournée à 05h00)",
                "Esprit d'équipe et solidarité de binôme lors des tournées de benne",
                "Sens du service public et courtoisie envers les usagers de l'espace public"
            ],
            "technical": [
                "Techniques de nettoiement de voirie et utilisation du matériel haute pression",
                "Règles strictes de sécurité routière et port des Équipements de Protection Individuelle (EPI)",
                "Maniement des lève-conteneurs et compacteurs de bennes à ordures",
                "Permis B obligatoire, Permis C (Poids Lourd) très apprécié"
            ],
            "human": [
                "Excellente condition physique et résistance aux intempéries (froid, pluie, chaleur)",
                "Ponctualité rigoureuse indispensable (démarrages de tournée à 05h00)",
                "Esprit d'équipe et solidarité de binôme lors des tournées de benne",
                "Sens du service public et courtoisie envers les usagers de l'espace public"
            ]
        },
        "qualities": [
            "Endurance physique",
            "Sens de la sécurité",
            "Régularité et ponctualité",
            "Esprit de service public",
            "Esprit d'équipe"
        ],
        "studies": [
            "🇫🇷 France : Accessible sans diplôme. Formations recommandées pour évoluer : CAP Valorisation des matières et propreté des espaces urbains, CAP Propreté de l'environnement urbain, Bac Pro Maintenance environnementale et propreté des espaces urbains.",
            "🇸🇳 Sénégal : Recrutement direct avec formation technique aux gestes de sécurité, permis C recommandé, formations d'insertion de la SONAGED (Société Nationale de Gestion Intégrée des Déchets)."
        ],
        "evolution": [
            "Chauffeur de benne à ordures ménagères (après obtention du permis C et FIMO)",
            "Chef d'équipe de collecte ou de nettoiement",
            "Contrôleur de propreté et médiateur cadre de vie",
            "Agent d'accueil et gardien de déchèterie",
            "Responsable adjoint de secteur de collecte"
        ],
        "dailySchedule": [
            {"time": "05:00", "activity": "Arrivée au centre technique municipal, contrôle des EPI haute visibilité et prise de consignes du chef d'équipe."},
            {"time": "05:30", "activity": "Départ de la tournée de collecte en binôme avec le chauffeur de la benne à ordures dans le centre-ville."},
            {"time": "08:30", "activity": "Pause réglementaire et rotation des bacs collectés au quai de déchargement du centre de transfert."},
            {"time": "09:30", "activity": "Reprise de la seconde boucle de collecte des bacs jaunes réservés au tri sélectif."},
            {"time": "11:30", "activity": "Vidage complet de la benne, lavage haute pression du camion et désinfection des équipements."},
            {"time": "12:30", "activity": "Débriefing de fin de tournée, signalement des conteneurs cassés et fin de service."}
        ],
        "daily": {
            "morning": "Démarrage matinal de la tournée de benne, levage sécurisé des bacs, nettoyage manuel des dépôts aux pieds d'immeubles et déchargement.",
            "afternoon": "Nettoiement mécanisé de places publiques, désinfection de la benne au dépôt et préparation du matériel pour le lendemain.",
            "challenges": "Maintenir un rythme soutenu en bordure de circulation routière tout en respectant scrupuleusement la sécurité."
        },
        "quiz": [
            {
                "question": "Quel CAP prépare spécifiquement aux métiers de la propreté de la ville et du tri en France ?",
                "options": [
                    "Le CAP Valorisation des matières et propreté des espaces urbains",
                    "Le CAP Pâtisserie",
                    "Le CAP Coiffure",
                    "Le CAP Horlogerie"
                ],
                "answer": 0,
                "explanation": "Le CAP Valorisation des matières et propreté des espaces urbains forme aux techniques de nettoiement et de tri."
            },
            {
                "question": "À quels moments de la journée les agents de propreté urbaine interviennent-ils principalement ?",
                "options": [
                    "Uniquement en plein après-midi",
                    "Très tôt le matin (dès 05h00) ou la nuit pour ne pas bloquer la circulation urbaine",
                    "Uniquement le week-end",
                    "Pendant les vacances scolaires seulement"
                ],
                "answer": 1,
                "explanation": "Pour des raisons de fluidité du trafic et d'hygiène, la collecte et le nettoiement débutent majoritairement à l'aube."
            }
        ],
        "saviezVous": {
            "fait": "Un ripeur manipule en moyenne plus de 5 tonnes de bacs et de déchets ménagers au cours d'une seule tournée matinale !",
            "chiffre": "En France, chaque habitant produit environ 590 kg de déchets ménagers et assimilés par an, pris en charge par les agents de collecte."
        },
        "sources": [
            {
                "name": "Onisep - Fiche Métier Agent / Agente de propreté urbaine",
                "url": "https://www.onisep.fr/ressources/univers-metier/metiers/agent-agente-de-proprete-urbaine",
                "date": "04/11/2025",
                "type": "Source officielle française"
            }
        ]
    },
    {
        "id": "ambassadeur-tri",
        "slug": "ambassadeur-tri",
        "title": "Ambassadeur / Ambassadrice de Tri",
        "aliases": [
            "Guide du tri",
            "Agent de sensibilisation aux déchets",
            "Médiateur propreté",
            "Conseiller de tri sélectif",
            "Chargé de prévention et de tri des déchets",
            "Éco-médiateur déchets"
        ],
        "icon": "♻️",
        "image": "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&auto=format&fit=crop&q=80",
        "familyId": "environnement-developpement-durable",
        "familyName": "Environnement, Écologie & Développement durable",
        "connectedFamilies": [
            "environnement-developpement-durable",
            "education-formation",
            "lettres-langues-sciences-humaines"
        ],
        "domain": "Déchets, Tri & Recyclage",
        "domainId": "dechets-tri-recyclage",
        "subdomain": "Sensibilisation des usagers & Prévention des déchets",
        "sectors": [
            "Collectivités territoriales (mairies, métropoles, communautés de communes)",
            "Syndicats intercommunaux de traitement des ordures ménagères (SITOM)",
            "Éco-organismes de filières de recyclage (Citeo, Ecosystem, Refashion)",
            "Associations d'éducation à l'environnement et de lutte contre le gaspillage"
        ],
        "onisepUrl": "https://www.onisep.fr/metier/decouvrir-le-monde-professionnel/environnement-developpement-durable/les-metiers-et-l-emploi-dans-l-environnement-et-le-developpement-durable",
        "onisepSource": True,
        "isEmerging": False,
        "level": "Bac à Bac +2 (BTSA GPN / BTS Métiers des services à l'environnement)",
        "salary": "🇫🇷 France : 1 800 € à 2 200 € brut/mois débutant (~22 000 à 27 000 € brut/an), jusqu'à 2 700 € brut/mois avec ancienneté en collectivité (Source : Onisep / Grilles Fonction Publique Territoriale) • 🇸🇳 Sénégal : 140 000 à 300 000 FCFA net/mois (SONAGED, programmes de salubrité et éducation citoyenne)",
        "salaryDetails": {
            "france": {
                "starter": "1 850 € brut/mois",
                "experienced": "2 200 € brut/mois",
                "senior": "2 700 € brut/mois",
                "source": "Onisep / Grilles d'Adjoint Technique / Animateur FPT"
            },
            "senegal": {
                "starter": "140 000 FCFA net/mois",
                "experienced": "210 000 FCFA net/mois",
                "senior": "300 000 FCFA net/mois",
                "source": "SONAGED / Projets Éco-citoyens et Salubrité Urbaine"
            }
        },
        "targetAudience": "Habitants, écoliers, collégiens, gardiens d'immeubles, commerçants et comités de quartier",
        "workEnvironment": "Terrain (porte-à-porte dans les quartiers, stands sur marchés, halls d'immeubles, écoles) et bureau (supports de communication)",
        "summary": "Pédagogue de l'économie circulaire, l'ambassadeur de tri va à la rencontre des citoyens, des écoliers et des commerçants pour expliquer les consignes de tri, corriger les erreurs de poubelle et promouvoir les gestes de réduction des déchets à la source.",
        "missions": [
            "Informer et sensibiliser les usagers aux règles du tri sélectif (emballages, verre, biodéchets, encombrants).",
            "Mener des opérations de porte-à-porte et de distribution de bio-seaux et composteurs collectifs.",
            "Contrôler la qualité du tri dans les bacs de collecte et apposer des messages pédagogiques en cas d'erreurs de tri.",
            "Animer des ateliers ludiques dans les écoles primaires et stands interactifs lors d'événements publics."
        ],
        "activities": [
            "Visites d'immeubles résidentiels pour vérifier l'état des locaux poubelles et échanger avec les gardiens.",
            "Animation d'un atelier 'zéro déchet' et fabrication de produits ménagers écologiques avec des riverains.",
            "Analyse des taux de refus de tri dans les bennes de collecte sélective pour cibler les quartiers prioritaires.",
            "Conception de dépliants explicatifs en concertation avec les services de communication de la collectivité."
        ],
        "specialties": [
            "Compostage partagé et valorisation des biodéchets",
            "Sensibilisation en milieu scolaire et périscolaire",
            "Accompagnement du tri dans l'habitat collectif vertical",
            "Médiation en quartiers prioritaires et multiculturels"
        ],
        "skills": {
            "hard": [
                "Consignes nationales et locales du tri et filières de recyclage des matériaux",
                "Techniques de compostage individuel et collectif",
                "Animation de groupe et techniques de médiation citoyenne",
                "Outils de reporting et saisie de données d'enquêtes terrain"
            ],
            "soft": [
                "Excellente aisance relationnelle et sens de l'écoute sans jugement",
                "Pédagogie, patience et capacité d'adaptation à tous les publics",
                "Dynamisme, enthousiasme et force de conviction écologique",
                "Diplomatie face aux usagers mécontents des taxes ou des collectes"
            ],
            "technical": [
                "Consignes nationales et locales du tri et filières de recyclage des matériaux",
                "Techniques de compostage individuel et collectif",
                "Animation de groupe et techniques de médiation citoyenne",
                "Outils de reporting et saisie de données d'enquêtes terrain"
            ],
            "human": [
                "Excellente aisance relationnelle et sens de l'écoute sans jugement",
                "Pédagogie, patience et capacité d'adaptation à tous les publics",
                "Dynamisme, enthousiasme et force de conviction écologique",
                "Diplomatie face aux usagers mécontents des taxes ou des collectes"
            ]
        },
        "qualities": [
            "Sens du contact humain",
            "Pédagogie active",
            "Patience et diplomatie",
            "Dynamisme de terrain",
            "Conviction écologique"
        ],
        "studies": [
            "🇫🇷 France : Bac à Bac +2. Bac Pro Gestion des pollutions / Bac Pro GPN, BTSA Gestion et protection de la nature (GPN), BTS Métiers des services à l'environnement, ou Titre professionnel de Médiateur social accès aux droits et services.",
            "🇸🇳 Sénégal : Bac à Bac +2. Cursus en animation sociale, communication pour le développement, médiation communautaire ou hygiène et environnement."
        ],
        "evolution": [
            "Coordinateur des ambassadeurs de tri",
            "Chargé de mission prévention et réduction des déchets en collectivité",
            "Responsable du service animation environnementale",
            "Conseiller en gestion des déchets en entreprise",
            "Chargé de communication environnementale"
        ],
        "dailySchedule": [
            {"time": "08:30", "activity": "Réunion matinale avec l'équipe pour définir le plan de prospection du quartier d'immeubles ciblé."},
            {"time": "09:30", "activity": "Visite des locaux poubelles avec le gardien de résidence pour vérifier le tri des bacs jaunes et bio-déchets."},
            {"time": "11:00", "activity": "Porte-à-porte pédagogique auprès des résidents pour remettre le guide du tri et répondre à leurs doutes."},
            {"time": "12:30", "activity": "Déjeuner d'équipe et partage des retours d'expérience du matin."},
            {"time": "14:00", "activity": "Intervention dans une école primaire : jeu interactif sur le cycle de vie d'une bouteille plastique recyclée."},
            {"time": "16:00", "activity": "Tenue d'un stand de distribution de composteurs individuels devant le centre commercial."},
            {"time": "17:30", "activity": "Saisie des statistiques de contacts et des besoins de nouveaux bacs sur la tablette professionnelle."}
        ],
        "daily": {
            "morning": "Diagnostic des bacs de collecte sélective, dialogue en porte-à-porte avec les riverains et distribution d'équipements de tri.",
            "afternoon": "Animation d'ateliers pédagogiques en milieu scolaire, tenue de stands d'information et encodage des données terrain.",
            "challenges": "Faire évoluer durablement les habitudes quotidiennes des citoyens sans adopter une posture moralisatrice."
        },
        "quiz": [
            {
                "question": "Quel est l'objectif premier d'un ambassadeur de tri ?",
                "options": [
                    "Sanctionner immédiatement les citoyens par des amendes",
                    "Expliquer les consignes de tri et sensibiliser à la réduction des déchets",
                    "Réparer les camions de collecte",
                    "Surveiller les caméras de sécurité de la ville"
                ],
                "answer": 1,
                "explanation": "L'ambassadeur de tri privilégie toujours la pédagogie, l'écoute et l'explication des bons gestes de recyclage."
            },
            {
                "question": "Quel déchet fait l'objet d'une obligation de tri à la source pour tous les ménages depuis janvier 2024 en France ?",
                "options": [
                    "Les biodéchets (déchets alimentaires et restes de repas)",
                    "Les cartouches d'encre",
                    "Les vieux pneus uniquement",
                    "Les meubles en chêne"
                ],
                "answer": 0,
                "explanation": "Le tri à la source des biodéchets (compostage ou collecte dédiée) est obligatoire pour valoriser la matière organique."
            }
        ],
        "saviezVous": {
            "fait": "Le tri d'une seule tonne d'emballages en plastique permet d'économiser l'équivalent de la consommation en pétrole d'une voiture sur plus de 15 000 kilomètres !",
            "chiffre": "Le taux de refus de tri dans les centres de recyclage peut chuter de 25% à moins de 8% après le passage régulier d'ambassadeurs de tri."
        },
        "sources": [
            {
                "name": "Onisep - Les métiers et l'emploi dans l'environnement et le développement durable",
                "url": "https://www.onisep.fr/metier/decouvrir-le-monde-professionnel/environnement-developpement-durable/les-metiers-et-l-emploi-dans-l-environnement-et-le-developpement-durable",
                "date": "04/11/2025",
                "type": "Source officielle française"
            }
        ]
    },
    {
        "id": "operateur-collecte-tri",
        "slug": "operateur-collecte-tri",
        "title": "Opérateur / Opératrice de Collecte ou de Tri",
        "aliases": [
            "Agent de tri des déchets",
            "Opérateur de centre de tri",
            "Trieur valoriste",
            "Opérateur sur chaîne de tri",
            "Agent de tri mécanisé",
            "Conducteur d'engins de centre de tri"
        ],
        "icon": "📦",
        "image": "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=800&auto=format&fit=crop&q=80",
        "familyId": "environnement-developpement-durable",
        "familyName": "Environnement, Écologie & Développement durable",
        "connectedFamilies": [
            "environnement-developpement-durable",
            "industrie-mecanique"
        ],
        "domain": "Déchets, Tri & Recyclage",
        "domainId": "dechets-tri-recyclage",
        "subdomain": "Tri mécanisé, optique & Massification",
        "sectors": [
            "Centres de tri de déchets ménagers et industriels",
            "Usines de recyclage des matières premières secondaires (plastiques, papiers, métaux)",
            "Plates-formes de massification et de déconditionnement",
            "Entreprises d'insertion par l'activité économique (IAE) dédiées au recyclage"
        ],
        "onisepUrl": "https://www.onisep.fr/metier/decouvrir-le-monde-professionnel/environnement-developpement-durable/les-metiers-et-l-emploi-dans-l-environnement-et-le-developpement-durable",
        "onisepSource": True,
        "isEmerging": False,
        "level": "Sans diplôme à CAP (CAP Valorisation des matières et propreté / Titre pro Agent de valorisation)",
        "salary": "🇫🇷 France : SMIC à 1 900 € brut/mois débutant (~21 000 à 24 500 € brut/an) hors primes d'équipe et cadence (Source : Onisep / Convention collective des activités du déchet) • 🇸🇳 Sénégal : 130 000 à 250 000 FCFA net/mois (Centres de tri et de valorisation, unités de récupération de plastique)",
        "salaryDetails": {
            "france": {
                "starter": "1 800 € brut/mois",
                "experienced": "2 050 € brut/mois",
                "senior": "2 300 € brut/mois",
                "source": "Onisep / Convention collective des activités du déchet"
            },
            "senegal": {
                "starter": "130 000 FCFA net/mois",
                "experienced": "180 000 FCFA net/mois",
                "senior": "250 000 FCFA net/mois",
                "source": "SONAGED / Filières de valorisation des plastiques et métaux"
            }
        },
        "targetAudience": "Tapis roulants de convoyage, cabines de tri climatisées, trieurs optiques, trommels et presses à balles",
        "workEnvironment": "Centre de tri industriel, cabine de tri ventilée au-dessus des convoyeurs à bande, travail posté (en 2x8 ou 3x8), port d'EPI spécifiques",
        "summary": "Maillon clé du recyclage industriel, l'opérateur de tri sépare et contrôle les différents flux de matières recyclables (cartons, bouteilles plastiques transparentes, canettes métalliques) qui défilent sur les tapis roulants pour garantir des balles de matières pures destinées aux usines de réincorporation.",
        "missions": [
            "Trier à la main ou superviser le tri automatisé des flux d'emballages défilant sur les bandes transporteuses.",
            "Isoler et écarter les objets dangereux, indésirables ou non recyclables (refus de tri) qui risquent d'endommager les machines.",
            "Alimenter et surveiller les presses à balles qui compactent les matières homogènes triées.",
            "Contrôler la qualité des balles compactées avant expédition vers les papeteries, aciéries et régénérateurs de plastique."
        ],
        "activities": [
            "Saisie rapide des corps creux et plats selon la consigne de tri de la cabine.",
            "Surveillance du bon fonctionnement du crible rotatif (trommel) et des séparateurs magnétiques (overband).",
            "Évacuation des bourrages légers sur les trémies dans le respect des consignes d'arrêt d'urgence.",
            "Nettoyage et dépoussiérage de fin de poste de la cabine et de la zone de compactage."
        ],
        "specialties": [
            "Trieur sur cabine de contrôle optique",
            "Conducteur de presse à balles et compacteurs",
            "Cariste approvisionneur de centre de tri (CACES)",
            "Opérateur de tri des Déchets d'Équipements Électriques et Électroniques (DEEE)"
        ],
        "skills": {
            "hard": [
                "Reconnaissance visuelle et tactile instantanée des différentes résines plastiques (PET, PEHD, PP)",
                "Respect rigoureux des procédures de sécurité industrielle et d'arrêt d'urgence",
                "Conduite de presses à balles industrielles et transpalettes électriques",
                "Notions de maintenance préventive de premier niveau sur bandes transporteuses"
            ],
            "soft": [
                "Excellente rapidité gestuelle et réflexes affûtés",
                "Capacité de concentration visuelle soutenue malgré la monotonie du défilement",
                "Résistance à la fatigue posturale (station debout en cabine)",
                "Esprit de discipline et de rigueur collective en environnement bruyant"
            ],
            "technical": [
                "Reconnaissance visuelle et tactile instantanée des différentes résines plastiques (PET, PEHD, PP)",
                "Respect rigoureux des procédures de sécurité industrielle et d'arrêt d'urgence",
                "Conduite de presses à balles industrielles et transpalettes électriques",
                "Notions de maintenance préventive de premier niveau sur bandes transporteuses"
            ],
            "human": [
                "Excellente rapidité gestuelle et réflexes affûtés",
                "Capacité de concentration visuelle soutenue malgré la monotonie du défilement",
                "Résistance à la fatigue posturale (station debout en cabine)",
                "Esprit de discipline et de rigueur collective en environnement bruyant"
            ]
        },
        "qualities": [
            "Vitesse d'exécution et dextérité",
            "Capacité d'attention soutenue",
            "Vigilance sécurité",
            "Endurance physique",
            "Esprit d'équipe"
        ],
        "studies": [
            "🇫🇷 France : Accessible sans diplôme initial. Formations d'appui : CAP Valorisation des matières et propreté des espaces urbains, Titre professionnel d'Agent de valorisation des déchets, CACES chariots élévateurs (R489).",
            "🇸🇳 Sénégal : Recrutement direct avec formation interne sur la reconnaissance des matières valorisables (plastiques, métaux ferreux/non ferreux, cartons)."
        ],
        "evolution": [
            "Chef d'équipe de cabine de tri",
            "Conducteur d'engins lourds de déchèterie / centre de tri (pelle, chargeuse)",
            "Technicien de maintenance électromécanique de centre de tri",
            "Contrôleur qualité des matières recyclables",
            "Responsable d'exploitation adjoint de centre de tri"
        ],
        "dailySchedule": [
            {"time": "06:00", "activity": "Prise de poste en équipe du matin (poste 1), équipement complet (gants anti-coupure, casque antibruit, masque anti-poussière)."},
            {"time": "06:15", "activity": "Mise en route de la ligne de tri, vérification de la ventilation de la cabine et défilement des flux de plastiques."},
            {"time": "08:15", "activity": "Rotation de poste pour reposer la vision et la posture corporelle, passage au contrôle des refus de tri."},
            {"time": "09:45", "activity": "Pause réglementaire au réfectoire du centre de tri."},
            {"time": "10:15", "activity": "Contrôle du liage automatique de la presse à balles de cartons et vérification de la densité du compactage."},
            {"time": "12:30", "activity": "Nettoyage soigné du poste de travail et évacuation des poussières au balai d'aspiration."},
            {"time": "13:30", "activity": "Passation des consignes à l'équipe du poste d'après-midi (poste 2) et sortie de vestiaire."}
        ],
        "daily": {
            "morning": "Tri gestuel rapide des matières sur tapis roulant, séparation des résines recyclables et évacuation des éléments non conformes.",
            "afternoon": "Conditionnement des flux triés en balles compactées, contrôle de propreté des lots et nettoyage technique des installations.",
            "challenges": "Soutenir une cadence élevée tout en maintenant une pureté supérieure à 95% dans les matières sélectionnées."
        },
        "quiz": [
            {
                "question": "Quel risque physique majeur les gants de l'opérateur de tri doivent-ils impérativement prévenir ?",
                "options": [
                    "Le froid sibérien uniquement",
                    "Les coupures et piqûres par bris de verre, métaux tranchants ou aiguilles égarées",
                    "Les brûlures par gel",
                    "Les éclaboussures d'encre"
                ],
                "answer": 1,
                "explanation": "Les gants professionnels normés anti-coupure et anti-perforation protègent des objets tranchants mêlés aux emballages."
            },
            {
                "question": "Sous quelle forme les matières recyclées triées (cartons, plastiques) sont-elles compactées pour le transport ?",
                "options": [
                    "En balles cubiques denses compressées pesant plusieurs centaines de kilos",
                    "En petits sachets individuels",
                    "En poudre fine",
                    "En tonneaux de bois"
                ],
                "answer": 0,
                "explanation": "Les presses industrielles compactent les emballages en balles denses faciles à empiler et à transporter par camion vers les usines de recyclage."
            }
        ],
        "saviezVous": {
            "fait": "Les centres de tri modernes utilisent des trieurs optiques à infrarouge capables de reconnaître la signature moléculaire d'une bouteille en quelques millièmes de seconde !",
            "chiffre": "Le tri et le recyclage des canettes en aluminium consomment 95% d'énergie en moins que la fabrication d'aluminium neuf à partir de bauxite."
        },
        "sources": [
            {
                "name": "Onisep - Les métiers et l'emploi dans l'environnement et le développement durable",
                "url": "https://www.onisep.fr/metier/decouvrir-le-monde-professionnel/environnement-developpement-durable/les-metiers-et-l-emploi-dans-l-environnement-et-le-developpement-durable",
                "date": "04/11/2025",
                "type": "Source officielle française"
            }
        ]
    },
    {
        "id": "responsable-collecte-dechets",
        "slug": "responsable-collecte-dechets",
        "title": "Responsable de la Collecte des Déchets Ménagers",
        "aliases": [
            "Chef de secteur collecte",
            "Responsable d'exploitation déchets",
            "Coordinateur collecte des ordures ménagères",
            "Responsable service propreté et collecte",
            "Manager d'exploitation déchets ménagers"
        ],
        "icon": "🚛",
        "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80",
        "familyId": "environnement-developpement-durable",
        "familyName": "Environnement, Écologie & Développement durable",
        "connectedFamilies": [
            "environnement-developpement-durable",
            "transport-logistique"
        ],
        "domain": "Déchets, Tri & Recyclage",
        "domainId": "dechets-tri-recyclage",
        "subdomain": "Logistique des tournées & Gestion de flotte de collecte",
        "sectors": [
            "Sociétés de collecte privées délégataires (Suez, Veolia, Sepur, Nicollin)",
            "Communautés de communes et métropoles en régie directe",
            "Syndicats mixtes de collecte et traitement des déchets (SMITOM)",
            "Agences nationales de gestion des déchets"
        ],
        "onisepUrl": "https://www.onisep.fr/ressources/univers-metier/metiers/responsable-de-la-collecte-des-dechets-menagers",
        "onisepSource": True,
        "isEmerging": False,
        "level": "Bac +2 à Bac +5 (BTS Métiers des services à l'environnement / BUT HSE / Master Gestion des déchets)",
        "salary": "🇫🇷 France : 2 200 € à 2 800 € brut/mois débutant (~30 000 à 38 000 € brut/an), 3 500 € à 4 800 € brut/mois pour un responsable de secteur confirmé (Source : Onisep / APEC) • 🇸🇳 Sénégal : 350 000 à 800 000 FCFA net/mois (SONAGED, coordinations régionales de collecte des déchets)",
        "salaryDetails": {
            "france": {
                "starter": "2 300 € brut/mois",
                "experienced": "3 400 € brut/mois",
                "senior": "4 800 € brut/mois",
                "source": "Onisep / APEC Métiers de l'Environnement et de la Logistique"
            },
            "senegal": {
                "starter": "350 000 FCFA net/mois",
                "experienced": "550 000 FCFA net/mois",
                "senior": "800 000 FCFA net/mois",
                "source": "SONAGED / Grilles Cadres d'Exploitation Environnementale Sénégal"
            }
        },
        "targetAudience": "Flottes de camions bennes à ordures ménagères (BOM), équipes de ripeurs et chauffeurs, dépôts techniques et quais de transfert",
        "workEnvironment": "Bureau d'exploitation logistique (logiciels de géolocalisation et tournées) et visites régulières sur le terrain (dépôt, départs de bennes, points noirs)",
        "summary": "Chef d'orchestre de la propreté d'un territoire, le responsable de la collecte organise et optimise les tournées quotidiennes des camions bennes, manage les équipes de chauffeurs et ripeurs, veille à la sécurité au travail et garantit la continuité de service pour des centaines de milliers d'habitants.",
        "missions": [
            "Planifier et optimiser les circuits de collecte des ordures ménagères, du tri sélectif et des encombrants.",
            "Manager au quotidien les chauffeurs de bennes, ripeurs et agents d'entretien (plannings, sécurité, remplacements).",
            "Superviser l'entretien, le contrôle technique réglementaire et la conformité de la flotte de camions bennes.",
            "Traiter les réclamations des usagers et des élus et résoudre les incidents d'exploitation (pannes, blocages de circulation, intempéries)."
        ],
        "activities": [
            "Ajustement en temps réel des plannings de tournées en cas d'absence de personnel ou de panne mécanique.",
            "Analyse des données télématiques des camions (consommation de carburant, temps d'arrêt, tonnage collecté).",
            "Animation des réunions de sécurité ('quarts d'heure sécurité') axées sur les gestes et postures et les angles morts.",
            "Élaboration des réponses aux appels d'offres des marchés publics de collecte pour les collectivités."
        ],
        "specialties": [
            "Collecte sélective en zone urbaine dense",
            "Collecte en milieu rural dispersé et points d'apport volontaire",
            "Gestion des déchets industriels banals (DIB) d'entreprises",
            "Logistique de décarbonation des flottes (bennes électriques et GNV)"
        ],
        "skills": {
            "hard": [
                "Gestion d'exploitation logistique et optimisation d'itinéraires de collecte",
                "Réglementation du transport routier de marchandises et temps de repos des chauffeurs",
                "Règles d'hygiène et de sécurité au travail (Recommandation CNAM R437)",
                "Logiciels de gestion de tournées et SIG appliqués à la collecte (RouteOp, Praxedo)"
            ],
            "soft": [
                "Leadership managérial et aisance dans les relations sociales de terrain",
                "Réactivité et excellente gestion du stress face aux imprévus d'exploitation",
                "Sens aigu du service client et diplomatie auprès des élus locaux",
                "Rigueur d'organisation et respect scrupuleux des budgets d'exploitation"
            ],
            "technical": [
                "Gestion d'exploitation logistique et optimisation d'itinéraires de collecte",
                "Réglementation du transport routier de marchandises et temps de repos des chauffeurs",
                "Règles d'hygiène et de sécurité au travail (Recommandation CNAM R437)",
                "Logiciels de gestion de tournées et SIG appliqués à la collecte (RouteOp, Praxedo)"
            ],
            "human": [
                "Leadership managérial et aisance dans les relations sociales de terrain",
                "Réactivité et excellente gestion du stress face aux imprévus d'exploitation",
                "Sens aigu du service client et diplomatie auprès des élus locaux",
                "Rigueur d'organisation et respect scrupuleux des budgets d'exploitation"
            ]
        },
        "qualities": [
            "Leadership affirmé",
            "Sens de l'organisation logistique",
            "Sang-froid face aux urgences",
            "Esprit d'écoute sociale",
            "Exigence de sécurité"
        ],
        "studies": [
            "🇫🇷 France : Bac +2 à Bac +5. BTS Métiers des services à l'environnement, BUT Hygiène, Sécurité, Environnement (HSE), Licence Pro Gestion des déchets, ou Master/Ingénieur Logistique & Management environnemental.",
            "🇸🇳 Sénégal : Bac +3 à Bac +5. Licence / Master en Gestion urbaine, Logistique et Transports, Génie Sanitaire (ESEA, ESP Dakar, universités publiques)."
        ],
        "evolution": [
            "Directeur d'exploitation d'une agence de collecte régionale",
            "Directeur des services Déchets et Propreté en métropole",
            "Responsable des méthodes et de l'optimisation des tournées nationales",
            "Consultant en ingénierie de collecte et valorisation des déchets",
            "Directeur d'un pôle multi-activités (collecte + centre de tri + valorisation)"
        ],
        "dailySchedule": [
            {"time": "05:15", "activity": "Présence au dépôt pour le départ des premières bennes, affectation des chauffeurs remplaçants sur les tournées prioritaires."},
            {"time": "07:30", "activity": "Débriefing avec le chef d'atelier sur les réparations mécaniques des trois bennes en révision."},
            {"time": "09:00", "activity": "Analyse sur logiciel de géolocalisation des données de vidage des conteneurs connectés de la veille."},
            {"time": "11:00", "activity": "Visite de terrain avec l'adjoint au maire chargé de la propreté pour étudier la réorganisation d'un quartier commerçant."},
            {"time": "13:00", "activity": "Déjeuner de travail avec les chefs d'équipe de l'après-midi."},
            {"time": "14:30", "activity": "Animation d'un quart d'heure sécurité sur la prévention des chutes de marchepied et les règles de marche arrière."},
            {"time": "16:30", "activity": "Validation des plannings d'équipes du lendemain et réponse aux demandes d'usagers sur la plateforme métropolitaine."}
        ],
        "daily": {
            "morning": "Supervision des départs des camions bennes à l'aube, réorganisation immédiate des circuits en cas d'aléas et gestion d'équipe.",
            "afternoon": "Optimisation des tournées sur ordinateur, réunions sécurité avec les ripeurs et inspection des points sensibles de collecte.",
            "challenges": "Assurer un taux de collecte de 100% chaque jour tout en réduisant l'empreinte carbone kilométrique des bennes."
        },
        "quiz": [
            {
                "question": "Quel est l'un des enjeux majeurs actuels dans l'optimisation des tournées de bennes à ordures ?",
                "options": [
                    "Supprimer totalement les camions pour porter les bacs à dos d'homme",
                    "Optimiser les itinéraires par capteurs connectés et passer à des motorisations décarbonées (électrique/biogaz)",
                    "Ne collecter qu'une seule fois par an",
                    "Remplacer les poubelles par des fosses individuelles"
                ],
                "answer": 1,
                "explanation": "L'usage de capteurs de remplissage et de bennes au bioGNV permet de réduire les trajets inutiles et la pollution de l'air."
            },
            {
                "question": "Quelle compétence managériale est cruciale pour le responsable de collecte ?",
                "options": [
                    "L'animation des consignes de sécurité pour éviter les accidents de circulation et de manutention",
                    "La fabrication de verre soufflé",
                    "L'expertise en droit maritime international",
                    "Le dessin de plans d'avions"
                ],
                "answer": 0,
                "explanation": "La collecte des déchets est un métier physiquement exposé où la prévention des accidents du travail est une priorité absolue."
            }
        ],
        "saviezVous": {
            "fait": "Les bennes modernes à ordures roulant au biogaz utilisent souvent le biométhane produit par la méthanisation des boues d'épuration ou des déchets alimentaires de la même ville : c'est un cercle vertueux parfait !",
            "chiffre": "Une benne à ordures ménagères freine et repart en moyenne plus de 1 000 fois au cours d'une seule tournée de collecte en zone urbaine."
        },
        "sources": [
            {
                "name": "Onisep - Fiche Métier Responsable de la collecte des déchets ménagers",
                "url": "https://www.onisep.fr/ressources/univers-metier/metiers/responsable-de-la-collecte-des-dechets-menagers",
                "date": "04/11/2025",
                "type": "Source officielle française"
            }
        ]
    },
    {
        "id": "responsable-unite-traitement-dechets",
        "slug": "responsable-unite-traitement-dechets",
        "title": "Responsable d'Unité de Traitement des Déchets",
        "aliases": [
            "Directeur d'unité de valorisation énergétique (UVE)",
            "Chef d'usine d'incinération",
            "Responsable d'installation de stockage de déchets non dangereux (ISDND)",
            "Responsable d'usine de méthanisation",
            "Directeur de site de traitement des déchets"
        ],
        "icon": "🏭",
        "image": "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&auto=format&fit=crop&q=80",
        "familyId": "environnement-developpement-durable",
        "familyName": "Environnement, Écologie & Développement durable",
        "connectedFamilies": [
            "environnement-developpement-durable",
            "industrie-mecanique",
            "energie-renouvelable"
        ],
        "domain": "Déchets, Tri & Recyclage",
        "domainId": "dechets-tri-recyclage",
        "subdomain": "Valorisation matière, organique & énergétique",
        "sectors": [
            "Unités de valorisation énergétique (UVE / incinérateurs urbains)",
            "Installations de stockage de déchets non dangereux (ISDND)",
            "Usines de méthanisation industrielle et compostage de grande capacité",
            "Centres de traitement des déchets dangereux et spéciaux"
        ],
        "onisepUrl": "https://www.onisep.fr/metier/decouvrir-le-monde-professionnel/environnement-developpement-durable/les-metiers-et-l-emploi-dans-l-environnement-et-le-developpement-durable",
        "onisepSource": True,
        "isEmerging": False,
        "level": "Bac +5 (Diplôme d'ingénieur en procédés / thermique / environnement ou Master Sciences industrielles)",
        "salary": "🇫🇷 France : 3 000 € à 3 800 € brut/mois débutant (~40 000 à 50 000 € brut/an), 4 500 € à 6 500 € brut/mois pour un directeur de site industriel (Source : Onisep / APEC) • 🇸🇳 Sénégal : 600 000 à 1 500 000 FCFA net/mois (Centres de valorisation, unités de biogaz et gestion industrielle des déchets)",
        "salaryDetails": {
            "france": {
                "starter": "3 200 € brut/mois",
                "experienced": "4 500 € brut/mois",
                "senior": "6 500 € brut/mois",
                "source": "Onisep / APEC Ingénierie des Procédés et de l'Énergie"
            },
            "senegal": {
                "starter": "600 000 FCFA net/mois",
                "experienced": "950 000 FCFA net/mois",
                "senior": "1 500 000 FCFA net/mois",
                "source": "Secteur Industriel / Grands Projets d'Énergie et de Déchets Sénégal"
            }
        },
        "targetAudience": "Fours d'incinération à 1 000°C, turbines de production d'électricité, chaudières de réseau de chaleur urbain, digesteurs de biogaz et filtres de traitement des fumées",
        "workEnvironment": "Site industriel classé ICPE (Installations Classées pour la Protection de l'Environnement), salle de contrôle automatisée, zones techniques thermiques",
        "summary": "Pilote d'usines industrielles complexes, le responsable d'unité de traitement transforme les déchets non recyclables en électricité, en chauffage urbain ou en biogaz grâce à des procédés thermiques ou biologiques de pointe, tout en garantissant des rejets atmosphériques scrupuleusement dépollués.",
        "missions": [
            "Superviser le fonctionnement continu (24h/24, 7j/7) des fours d'incinération, turbines à vapeur ou digesteurs de méthanisation.",
            "Garantir le respect absolu des normes environnementales de rejets dans l'air (dioxines, métaux lourds, poussières) et dans l'eau.",
            "Optimiser la production et la vente d'énergie récupérée (vapeur injectée dans le réseau de chaleur urbain, mégawatts électriques vendus au réseau).",
            "Manager les équipes de quart (conducteurs de ligne, mécaniciens, électriciens) et piloter les arrêts techniques annuels de maintenance."
        ],
        "activities": [
            "Contrôle continu des mesures en sortie de cheminée sur les analyseurs de gaz en temps réel.",
            "Négociation des plannings de livraison avec les transporteurs de déchets ménagers et industriels.",
            "Pilotage des arrêts de maintenance préventive programmée pour le rechargement réfractaire des fours.",
            "Présentation des bilans d'exploitation lors des réunions publiques avec la commission locale d'information et de surveillance (CLIS)."
        ],
        "specialties": [
            "Incinération et valorisation énergétique (UVE)",
            "Méthanisation industrielle et injection de biométhane",
            "Stockage étanche et valorisation du biogaz de décharge (ISDND)",
            "Traitement thermique et physico-chimique des déchets industriels dangereux"
        ],
        "skills": {
            "hard": [
                "Génie des procédés thermiques, thermodynamique et combustion industrielle",
                "Chimie du traitement des fumées et épuration des gaz acides",
                "Réglementation sévère des Installations Classées pour la Protection de l'Environnement (ICPE)",
                "Gestion budgétaire industrielle, maintenance d'usines lourdes et management de la sécurité"
            ],
            "soft": [
                "Autorité naturelle et leadership pour diriger des équipes industrielles postées",
                "Rigueur absolue face aux risques d'explosion, d'incendie et de pollution atmosphérique",
                "Aisance relationnelle pour dialoguer avec les inspecteurs de la DREAL et les associations citoyennes",
                "Capacité d'analyse stratégique et de prise de décision rapide en situation de crise"
            ],
            "technical": [
                "Génie des procédés thermiques, thermodynamique et combustion industrielle",
                "Chimie du traitement des fumées et épuration des gaz acides",
                "Réglementation sévère des Installations Classées pour la Protection de l'Environnement (ICPE)",
                "Gestion budgétaire industrielle, maintenance d'usines lourdes et management de la sécurité"
            ],
            "human": [
                "Autorité naturelle et leadership pour diriger des équipes industrielles postées",
                "Rigueur absolue face aux risques d'explosion, d'incendie et de pollution atmosphérique",
                "Aisance relationnelle pour dialoguer avec les inspecteurs de la DREAL et les associations citoyennes",
                "Capacité d'analyse stratégique et de prise de décision rapide en situation de crise"
            ]
        },
        "qualities": [
            "Rigueur industrielle absolue",
            "Leadership managérial",
            "Sens de la sécurité et des normes",
            "Capacité d'arbitrage financier et technique",
            "Sens de la communication publique"
        ],
        "studies": [
            "🇫🇷 France : Bac +5. Diplôme d'ingénieur (Génie chimique, Génie des procédés, Énergétique, Écoles des Mines, INSA, Polytech) ou Master universitaire spécialisé en génie de l'environnement et thermique.",
            "🇸🇳 Sénégal : Bac +5. Diplôme d'ingénieur en Génie Électromécanique, Génie Chimique ou Énergie (ESP Dakar, École Polytechnique de Thiès, 2iE)."
        ],
        "evolution": [
            "Directeur régional des unités de valorisation industrielle",
            "Directeur technique national d'un groupe de gestion des déchets",
            "Expert international en conception de nouvelles usines de valorisation",
            "Inspecteur des installations classées pour l'environnement (fonction publique d'État)",
            "Directeur général de filiale de services énergétiques et environnementaux"
        ],
        "dailySchedule": [
            {"time": "08:00", "activity": "Point d'exploitation matinal avec les chefs de quart : analyse de la combustion nocturne et de la production électrique."},
            {"time": "09:30", "activity": "Inspection visuelle de la fosse de déchargement des déchets et contrôle du fonctionnement du grappin automatisé."},
            {"time": "11:00", "activity": "Vérification des registres de rejets gazeux et étalonnage des analyseurs de dioxyde de soufre et d'oxydes d'azote."},
            {"time": "12:30", "activity": "Déjeuner avec les ingénieurs de maintenance mécanique."},
            {"time": "14:00", "activity": "Réunion de cadrage du grand arrêt technique annuel prévu pour l'inspection de la turbine à vapeur."},
            {"time": "16:00", "activity": "Audit sécurité sur site avec l'animateur HSE : contrôle des permis de feu et des consignations électriques."},
            {"time": "18:00", "activity": "Validation des bilans de tonnes incinérées et des mégawattheures livrés au réseau de chauffage urbain."}
        ],
        "daily": {
            "morning": "Analyse des paramètres de combustion et de puissance électrique produite, visite de sécurité de l'usine et coordination d'équipes.",
            "afternoon": "Supervision de la maintenance préventive, contrôle des rejets environnementaux et relations avec les autorités administratives.",
            "challenges": "Maximiser la production d'énergie propre à partir des ordures tout en maintenant les émissions très en-deçà des seuils européens."
        },
        "quiz": [
            {
                "question": "En quoi les usines d'incinération modernes (UVE) sont-elles utiles pour la ville ?",
                "options": [
                    "Elles brûlent les ordures à l'air libre sans filtrer les fumées",
                    "Elles récupèrent la chaleur de combustion pour chauffer des milliers de logements et produire de l'électricité",
                    "Elles ne servent qu'à stocker de l'eau",
                    "Elles fabriquent des emballages neufs en carton"
                ],
                "answer": 1,
                "explanation": "Les UVE récupèrent l'énergie thermique des déchets ménagers résiduels pour alimenter les réseaux de chaleur urbains et le réseau électrique."
            },
            {
                "question": "Quel statut réglementaire français régit les usines de traitement des déchets en raison de leurs enjeux environnementaux ?",
                "options": [
                    "Le statut ICPE (Installation Classée pour la Protection de l'Environnement)",
                    "Le statut d'auberge de jeunesse",
                    "Le statut de zone franche agricole",
                    "Le statut de monument historique uniquement"
                ],
                "answer": 0,
                "explanation": "Les usines de traitement sont des ICPE soumises à autorisation préfectorale stricte et à des contrôles réguliers de l'État."
            }
        ],
        "saviezVous": {
            "fait": "À Paris, l'énergie issue de l'incinération des déchets ménagers fournit près de la moitié du chauffage de tous les hôpitaux de la capitale et du musée du Louvre !",
            "chiffre": "Le traitement des fumées dans une unité moderne représente souvent plus de la moitié de l'investissement total de construction de l'usine."
        },
        "sources": [
            {
                "name": "Onisep - Les métiers et l'emploi dans l'environnement et le développement durable",
                "url": "https://www.onisep.fr/metier/decouvrir-le-monde-professionnel/environnement-developpement-durable/les-metiers-et-l-emploi-dans-l-environnement-et-le-developpement-durable",
                "date": "04/11/2025",
                "type": "Source officielle française"
            }
        ]
    },
    {
        "id": "responsable-recyclerie",
        "slug": "responsable-recyclerie",
        "title": "Responsable de Recyclerie / Ressourcerie",
        "aliases": [
            "Directeur de ressourcerie",
            "Coordinateur de tiers-lieu circulaire",
            "Responsable d'atelier réemploi",
            "Directeur de recyclerie associative",
            "Responsable valoriste du réemploi"
        ],
        "icon": "🔄",
        "image": "https://images.unsplash.com/photo-1528323273322-d81458248d40?w=800&auto=format&fit=crop&q=80",
        "familyId": "environnement-developpement-durable",
        "familyName": "Environnement, Écologie & Développement durable",
        "connectedFamilies": [
            "environnement-developpement-durable",
            "droit-management",
            "artisanat-metiers-art"
        ],
        "domain": "Déchets, Tri & Recyclage",
        "domainId": "dechets-tri-recyclage",
        "subdomain": "Réemploi, Économie circulaire & Recycleries",
        "sectors": [
            "Réseau national des ressourceries et recycleries (Économie Sociale et Solidaire - ESS)",
            "Structures d'insertion par l'activité économique (SIAE)",
            "Collectivités territoriales développant des pôles d'économie circulaire",
            "Entreprises pionnières du réemploi solidaire et de la seconde main"
        ],
        "onisepUrl": "https://www.onisep.fr/metier/decouvrir-le-monde-professionnel/environnement-developpement-durable/les-metiers-et-l-emploi-dans-l-environnement-et-le-developpement-durable",
        "onisepSource": True,
        "isEmerging": True,
        "level": "Bac +2 à Bac +5 (Management ESS / Développement local / Gestion de projet durable)",
        "salary": "🇫🇷 France : 2 000 € à 2 600 € brut/mois débutant (~26 000 à 34 000 € brut/an), jusqu'à 3 600 € brut/mois pour une grande structure multi-sites (Source : Onisep / Réseau des Ressourceries) • 🇸🇳 Sénégal : 250 000 à 600 000 FCFA net/mois (Entreprises sociales, tiers-lieux d'économie circulaire et ateliers de transformation locale)",
        "salaryDetails": {
            "france": {
                "starter": "2 100 € brut/mois",
                "experienced": "2 700 € brut/mois",
                "senior": "3 600 € brut/mois",
                "source": "Onisep / Convention collective de l'Animation et de l'ESS"
            },
            "senegal": {
                "starter": "250 000 FCFA net/mois",
                "experienced": "400 000 FCFA net/mois",
                "senior": "600 000 FCFA net/mois",
                "source": "Économie Sociale et Solidaire / Incubateurs Circulaires Sénégal"
            }
        },
        "targetAudience": "Objets usagés réutilisables (mobilier, électroménager, textiles, vélos, vaisselle), usagers donateurs, acheteurs solidaires et salariés en insertion",
        "workEnvironment": "Atelier de réparation/upcycling, magasin solidaire de vente au public, quai d'apport volontaire et bureau de gestion de projet",
        "summary": "Pionnier du réemploi et de la consommation sobre, le responsable de recyclerie gère un lieu vivant où les objets destinés à la poubelle sont collectés, nettoyés, réparés ou relookés par des équipes souvent en insertion, avant d'être revendus à prix modiques pour prolonger leur durée de vie.",
        "missions": [
            "Organiser les 4 fonctions fondamentales de la ressourcerie : collecte, valorisation/réparation, vente solidaire et sensibilisation.",
            "Manager les équipes salariées, bénévoles et personnes en parcours d'insertion socioprofessionnelle.",
            "Gérer l'équilibre économique de la structure (ventes en boutique, subventions publiques, prestations aux collectivités).",
            "Nouer des partenariats avec les déchèteries publiques pour détourner les objets réemployables des bennes d'enfouissement."
        ],
        "activities": [
            "Accueil des donateurs au quai d'apport et pesée méthodique des gisements d'objets récupérés.",
            "Coordination des ateliers de réparation (menuiserie, petit électroménager, vélos, customisation textile).",
            "Agencement commercial de la boutique solidaire et fixation de prix justes et accessibles à tous.",
            "Animation d'ateliers de sensibilisation au réemploi (Repair Café) à destination des habitants du quartier."
        ],
        "specialties": [
            "Direction de ressourcerie généraliste",
            "Recyclerie spécialisée (matériaux de construction du BTP, textile, vélos)",
            "Insertion socioprofessionnelle et encadrement technique",
            "Animation de tiers-lieux d'économie circulaire et Repair Cafés"
        ],
        "skills": {
            "hard": [
                "Gestion d'entreprise de l'Économie Sociale et Solidaire (ESS) et comptabilité associative",
                "Réglementation du réemploi, sécurité des appareils électriques d'occasion et traçabilité",
                "Techniques de base de remise en état d'objets (bricolage, électroménager, menuiserie)",
                "Montage de dossiers de subventions européennes, régionales et d'éco-organismes"
            ],
            "soft": [
                "Forte fibre sociale, écoute et bienveillance envers les publics en insertion",
                "Polyvalence opérationnelle et capacité à passer de la gestion budgétaire à l'atelier",
                "Créativité et dynamisme pour valoriser les objets et réinventer les usages",
                "Aisance dans la négociation avec les élus, entreprises mécènes et partenaires"
            ],
            "technical": [
                "Gestion d'entreprise de l'Économie Sociale et Solidaire (ESS) et comptabilité associative",
                "Réglementation du réemploi, sécurité des appareils électriques d'occasion et traçabilité",
                "Techniques de base de remise en état d'objets (bricolage, électroménager, menuiserie)",
                "Montage de dossiers de subventions européennes, régionales et d'éco-organismes"
            ],
            "human": [
                "Forte fibre sociale, écoute et bienveillance envers les publics en insertion",
                "Polyvalence opérationnelle et capacité à passer de la gestion budgétaire à l'atelier",
                "Créativité et dynamisme pour valoriser les objets et réinventer les usages",
                "Aisance dans la négociation avec les élus, entreprises mécènes et partenaires"
            ]
        },
        "qualities": [
            "Polyvalence managériale",
            "Sensibilité humaine et sociale",
            "Esprit d'entreprise solidaire",
            "Sens de la créativité et du réemploi",
            "Aptitude à fédérer une communauté"
        ],
        "studies": [
            "🇫🇷 France : Bac +2 à Bac +5. BTS Gestion de la PME, Licence Pro Métiers de l'économie sociale et solidaire, Master Management de l'ESS, Master Développement durable ou Titre professionnel d'Entrepreneur de l'économie circulaire.",
            "🇸🇳 Sénégal : Bac +3 à Bac +5. Licence / Master en Entrepreneuriat social, Gestion de projets de développement local, Économie circulaire (BEM Dakar, ISM, universités)."
        ],
        "evolution": [
            "Directeur d'un réseau territorial de ressourceries",
            "Chargé de mission Économie Circulaire en collectivité territoriale",
            "Consultant en stratégie zéro déchet et réemploi",
            "Responsable des partenariats réemploi au sein d'un grand éco-organisme",
            "Créateur d'une entreprise innovante de surcyclage (upcycling)"
        ],
        "dailySchedule": [
            {"time": "08:30", "activity": "Accueil de l'équipe au dépôt : point café matinal avec les salariés en contrat d'insertion."},
            {"time": "09:00", "activity": "Contrôle des tonnages collectés la veille lors du passage de la camionnette en déchèterie partenaire."},
            {"time": "10:30", "activity": "Tournée des ateliers : validation de la remise en état d'un lot de fauteuils vintage et tests électriques d'aspirateurs."},
            {"time": "12:30", "activity": "Déjeuner partagé avec l'équipe et les bénévoles de l'association."},
            {"time": "14:00", "activity": "Ouverture de la boutique solidaire au public et supervision de l'encaissement et du réassort des rayons."},
            {"time": "16:00", "activity": "Rendez-vous avec le directeur environnement de la métropole pour renouveler la convention d'occupation du local."},
            {"time": "18:30", "activity": "Clôture de la caisse, bilan des ventes de la journée et préparation de l'atelier Repair Café du samedi."}
        ],
        "daily": {
            "morning": "Réception des dons d'objets, pesée des gisements détournés de l'enfouissement, encadrement des ateliers de réparation.",
            "afternoon": "Supervision de la boutique solidaire, gestion financière, relations institutionnelles avec les partenaires et ateliers citoyens.",
            "challenges": "Trouver le juste équilibre entre viabilité économique de la boutique et finalité d'insertion sociale et d'écologie solidaire."
        },
        "quiz": [
            {
                "question": "Quelles sont les 4 fonctions indissociables d'une ressourcerie agréée ?",
                "options": [
                    "Collecter, valoriser/réparer, revendre à prix solidaire et sensibiliser le public",
                    "Brûler, enfouir, exporter et facturer",
                    "Acheter du neuf, déballer, emballer et jeter",
                    "Démolir, broyer, couler du béton et louer"
                ],
                "answer": 0,
                "explanation": "La charte des ressourceries repose sur 4 piliers : collecte, valorisation, redistribution solidaire et sensibilisation citoyenne."
            },
            {
                "question": "Quel est le bénéfice environnemental immédiat de l'achat d'un objet en recyclerie ?",
                "options": [
                    "Il évite l'extraction de matières premières vierges et prolonge la vie d'un objet qui aurait fini en décharge",
                    "Il permet de consommer plus de carburant",
                    "Il oblige à fabriquer du plastique",
                    "Aucun bénéfice mesurable"
                ],
                "answer": 0,
                "explanation": "Chaque objet réemployé évite la production d'un objet neuf équivalent et l'émission de CO2 associée."
            }
        ],
        "saviezVous": {
            "fait": "En France, les ressourceries et recycleries détournent chaque année plus de 250 000 tonnes d'objets de la poubelle pour leur offrir une seconde vie !",
            "chiffre": "Le secteur du réemploi et des recycleries génère en moyenne 5 à 10 fois plus d'emplois locaux non délocalisables que l'incinération ou l'enfouissement."
        },
        "sources": [
            {
                "name": "Onisep - Les métiers et l'emploi dans l'environnement et le développement durable",
                "url": "https://www.onisep.fr/metier/decouvrir-le-monde-professionnel/environnement-developpement-durable/les-metiers-et-l-emploi-dans-l-environnement-et-le-developpement-durable",
                "date": "04/11/2025",
                "type": "Source officielle française"
            }
        ]
    },
    {
        "id": "conseiller-gestion-dechets",
        "slug": "conseiller-gestion-dechets",
        "title": "Conseiller / Conseillère en Gestion des Déchets",
        "aliases": [
            "Consultant déchets",
            "Auditeur réduction des déchets",
            "Chargé de mission zéro déchet",
            "Conseiller prévention déchets",
            "Consultant économie circulaire et matières",
            "Expert en tri et valorisation industrielle"
        ],
        "icon": "📋",
        "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
        "familyId": "environnement-developpement-durable",
        "familyName": "Environnement, Écologie & Développement durable",
        "connectedFamilies": [
            "environnement-developpement-durable",
            "droit-management"
        ],
        "domain": "Déchets, Tri & Recyclage",
        "domainId": "dechets-tri-recyclage",
        "subdomain": "Prévention & Réduction des déchets",
        "sectors": [
            "Cabinets d'audit et de conseil en stratégie environnementale",
            "Chambres de Commerce et d'Industrie (CCI) et Chambres de Métiers (CMA)",
            "Grandes entreprises industrielles, agroalimentaires et plateformes logistiques",
            "Établissements de santé (hôpitaux et gestion des déchets de soins DASRI)"
        ],
        "onisepUrl": "https://www.onisep.fr/metier/decouvrir-le-monde-professionnel/environnement-developpement-durable/les-metiers-et-l-emploi-dans-l-environnement-et-le-developpement-durable",
        "onisepSource": True,
        "isEmerging": False,
        "level": "Bac +3 à Bac +5 (Licence Pro Gestion des déchets / Master Management de l'Environnement)",
        "salary": "🇫🇷 France : 2 200 € à 2 900 € brut/mois débutant (~30 000 à 38 000 € brut/an), 3 600 € à 4 800 € brut/mois pour un consultant confirmé en cabinet (Source : Onisep / APEC) • 🇸🇳 Sénégal : 350 000 à 800 000 FCFA net/mois (Bureaux d'études, industries minières et agroalimentaires, appui aux PME)",
        "salaryDetails": {
            "france": {
                "starter": "2 350 € brut/mois",
                "experienced": "3 500 € brut/mois",
                "senior": "4 800 € brut/mois",
                "source": "Onisep / APEC Métiers du Conseil et de l'Environnement"
            },
            "senegal": {
                "starter": "350 000 FCFA net/mois",
                "experienced": "550 000 FCFA net/mois",
                "senior": "800 000 FCFA net/mois",
                "source": "Bureaux d'études en Éco-conseil / Secteur Privé Sénégal"
            }
        },
        "targetAudience": "Entreprises de tous secteurs, chantiers du BTP, hôpitaux, restaurants d'entreprise et plateformes logistiques",
        "workEnvironment": "Bureaux de conseil (analyse de données et rédaction d'audits) et déplacements sur sites industriels et entrepôts",
        "summary": "Expert en sobriété matérielle, le conseiller en gestion des déchets audite les entreprises pour identifier leurs gaspillages, cartographier leurs flux de matières, concevoir des plans de réduction à la source et mettre en place des filières de valorisation rentables et conformes à la loi.",
        "missions": [
            "Réaliser des audits complets des flux de déchets générés par une entreprise ou une collectivité.",
            "Identifier les gisements d'économies financières grâce à la réduction des emballages et au réemploi de palettes et chutes de production.",
            "Veiller à la conformité réglementaire stricte (tri 7 flux, bordereaux de suivi des déchets dangereux Trackdéchets).",
            "Négocier et optimiser les contrats avec les prestataires de collecte, de rachat de matières et de traitement."
        ],
        "activities": [
            "Visite des chaînes de fabrication pour peser et caractériser les rebus et chutes de production.",
            "Calcul de la taxe générale sur les activités polluantes (TGAP) et des gains financiers potentiels du recyclage.",
            "Formation des chefs d'atelier et des salariés aux nouveaux protocoles de tri sélectif interne.",
            "Mise en place de filières de valorisation en boucle fermée (symbiose industrielle entre entreprises voisines)."
        ],
        "specialties": [
            "Gestion des déchets de chantiers du BTP (Diagnostic PEMD)",
            "Déchets industriels dangereux (DID) et traçabilité chimique",
            "Économie circulaire et réincorporation de matières recyclées",
            "Lutte contre le gaspillage alimentaire en restauration collective"
        ],
        "skills": {
            "hard": [
                "Méthodes d'audit et de caractérisation des déchets (norme MODECOM)",
                "Réglementation française et européenne des déchets (Loi AGEC, responsabilité élargie des producteurs)",
                "Outils numériques de traçabilité des déchets (Trackdéchets, registres dématérialisés)",
                "Calcul de rentabilité technico-économique des filières de valorisation matière"
            ],
            "soft": [
                "Capacité de persuasion et sens de la pédagogie auprès des dirigeants d'entreprises",
                "Rigueur d'analyse méthodologique et esprit de synthèse chiffré",
                "Sens de l'innovation pour trouver des débouchés créatifs aux matières délaissées",
                "Aisance dans l'animation de sessions de formation des salariés d'usine"
            ],
            "technical": [
                "Méthodes d'audit et de caractérisation des déchets (norme MODECOM)",
                "Réglementation française et européenne des déchets (Loi AGEC, responsabilité élargie des producteurs)",
                "Outils numériques de traçabilité des déchets (Trackdéchets, registres dématérialisés)",
                "Calcul de rentabilité technico-économique des filières de valorisation matière"
            ],
            "human": [
                "Capacité de persuasion et sens de la pédagogie auprès des dirigeants d'entreprises",
                "Rigueur d'analyse méthodologique et esprit de synthèse chiffré",
                "Sens de l'innovation pour trouver des débouchés créatifs aux matières délaissées",
                "Aisance dans l'animation de sessions de formation des salariés d'usine"
            ]
        },
        "qualities": [
            "Esprit d'analyse et de diagnostic",
            "Aptitude à convaincre",
            "Pragmatisme économique",
            "Rigueur réglementaire",
            "Créativité dans l'écologie industrielle"
        ],
        "studies": [
            "🇫🇷 France : Bac +3 à Bac +5. BUT Hygiène, Sécurité, Environnement (HSE), Licence Pro Métiers de la gestion des déchets, Master Management environnemental et développement durable, ou Diplôme d'ingénieur en écologie industrielle.",
            "🇸🇳 Sénégal : Bac +3 à Bac +5. Licence / Master en Sciences de l'Environnement, Gestion des déchets et hygiène publique (Institut des Sciences de l'Environnement - ISE UCAD, ESP Dakar)."
        ],
        "evolution": [
            "Directeur de département Environnement & Déchets en cabinet de conseil",
            "Responsable RSE et Économie Circulaire au sein d'un grand groupe industriel",
            "Expert auprès d'organismes de normalisation et d'agences d'État (ADEME)",
            "Chef d'entreprise de courtage et négoce en matières premières secondaires",
            "Auditeur international pour des programmes de décarbonation industrielle"
        ],
        "dailySchedule": [
            {"time": "08:45", "activity": "Arrivée sur le site d'une usine agroalimentaire cliente pour lancer un diagnostic de réduction des emballages."},
            {"time": "09:30", "activity": "Visite des lignes de conditionnement et pesée des chutes de cartons et films plastiques étirables."},
            {"time": "11:30", "activity": "Entretien avec le responsable des achats pour étudier le passage à des cagettes lavables réutilisables."},
            {"time": "13:00", "activity": "Déjeuner de travail avec le directeur de l'usine."},
            {"time": "14:30", "activity": "Vérification des bordereaux Trackdéchets pour les huiles usagées et solvants de nettoyage."},
            {"time": "16:00", "activity": "Calcul du retour sur investissement de l'acquisition d'un compacteur à carton pour réduire le nombre d'enlèvements."},
            {"time": "17:30", "activity": "Restitution intermédiaire des pistes d'économies devant le comité de direction de l'usine."}
        ],
        "daily": {
            "morning": "Audit sur site industriel, observation des postes de travail, caractérisation des chutes de matière et contrôle réglementaire.",
            "afternoon": "Modélisation chiffrée des gains financiers du recyclage, rédaction des rapports d'audit et recommandations stratégiques.",
            "challenges": "Démontrer aux entreprises que la réduction des déchets génère des économies financières substantielles et immédiates."
        },
        "quiz": [
            {
                "question": "En France, quelle loi majeure a renforcé l'obligation pour les entreprises de trier leurs déchets et de lutter contre le gaspillage ?",
                "options": [
                    "La loi AGEC (Anti-Gaspillage pour une Économie Circulaire)",
                    "La loi sur le droit d'auteur",
                    "Le code de la route",
                    "Le traité de l'Atlantique Nord"
                ],
                "answer": 0,
                "explanation": "La loi AGEC adoptée en 2020 accélère la fin des emballages plastiques à usage unique et impose le tri 7 flux aux professionnels."
            },
            {
                "question": "Comment le conseiller en déchets aide-t-il concrètement une entreprise ?",
                "options": [
                    "En payant lui-même les factures",
                    "En auditant les flux de déchets pour réduire le gaspillage, sécuriser la conformité et diminuer la facture de traitement",
                    "En augmentant la production d'ordures",
                    "En installant des logiciels de jeux vidéo"
                ],
                "answer": 1,
                "explanation": "Le conseiller transforme la contrainte des déchets en opportunité d'économies et de transition écologique pérenne."
            }
        ],
        "saviezVous": {
            "fait": "Le meilleur déchet est celui que l'on ne produit pas : le conseiller en gestion des déchets applique en priorité le principe de prévention avant même le recyclage !",
            "chiffre": "Pour une entreprise tertiaire moyenne, la mise en place d'un tri efficace et d'une dématérialisation réduit le volume de déchets de plus de 40% en un an."
        },
        "sources": [
            {
                "name": "Onisep - Les métiers et l'emploi dans l'environnement et le développement durable",
                "url": "https://www.onisep.fr/metier/decouvrir-le-monde-professionnel/environnement-developpement-durable/les-metiers-et-l-emploi-dans-l-environnement-et-le-developpement-durable",
                "date": "04/11/2025",
                "type": "Source officielle française"
            }
        ]
    }
]

/**
 * OrientationBtpData
 * Module de données officiel pour la grande famille :
 * 🏗️ BTP, ARCHITECTURE & CONSTRUCTION
 * Référentiel documentaire : L'Étudiant (Futurs métiers et fiches BTP)
 *
 * 15 Domaines d'Excellence • 37 Fiches Métiers Haute Profondeur
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.OrientationBtpData = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var BTP_DOMAINS = [
    {
        "id": "architecture-conception",
        "name": "Architecture & Conception",
        "icon": "🏛️",
        "description": "Conception d'édifices, architecture d'intérieur, aménagement d'espaces et scénographie du cadre bâti.",
        "subdomains": [
            "Conception d'édifices & Maîtrise d'œuvre",
            "Architecture d'intérieur & Design d'espace",
            "Rénovation patrimoniale & Réhabilitation",
            "Décoration & Aménagement intérieur"
        ]
    },
    {
        "id": "ingenierie-bureaux-etudes",
        "name": "Ingénierie & Bureaux d'Études",
        "icon": "📐",
        "description": "Calculs de structures, résistance des matériaux, génie civil, dessin technique CAO/DAO et ingénierie acoustique.",
        "subdomains": [
            "Ingénierie de chantier & Travaux",
            "Génie civil, Calculs & Ouvrages d'art",
            "Calcul de structures & Stabilité",
            "Dessin technique & Modélisation CAO/DAO",
            "Ingénierie acoustique & Confort sonore"
        ]
    },
    {
        "id": "economie-construction-metres",
        "name": "Économie de la Construction & Métrés",
        "icon": "📊",
        "description": "Métrés, études de prix, chiffrage analytique, estimation financière et montage stratégique des appels d'offres.",
        "subdomains": [
            "Métrés, Chiffrage & Estimation financière",
            "Chiffrage stratégique & Appels d'offres",
            "Sous-détails de prix & Déboursés secs",
            "Suivi budgétaire & Vérification des situations"
        ]
    },
    {
        "id": "geometre-topographie",
        "name": "Géomètre, Topographie & Cartographie",
        "icon": "🗺️",
        "description": "Mesures de haute précision, délimitation foncière, photogrammétrie par drone, SIG et implantation de chantiers.",
        "subdomains": [
            "Topographie, Implantation & Foncier",
            "Bornage & Délimitation juridique",
            "Photogrammétrie par drone & LiDAR",
            "Systèmes d'Information Géographique (SIG)"
        ]
    },
    {
        "id": "urbanisme-amenagement",
        "name": "Urbanisme, Paysage & Aménagement",
        "icon": "🏙️",
        "description": "Planification urbaine, conception d'éco-quartiers, mobilités douces et aménagement durable du territoire.",
        "subdomains": [
            "Planification urbaine & Éco-quartiers",
            "Mobilités & Réseaux de transport",
            "Espaces publics & Végétalisation urbaine",
            "Concertation citoyenne & Sociologie urbaine"
        ]
    },
    {
        "id": "gros-oeuvre-maconnerie",
        "name": "Gros Œuvre, Maçonnerie & Béton",
        "icon": "🧱",
        "description": "Élévation des murs porteurs, maçonnerie de parpaings et briques, coffrage industriel de banches et coulage du béton.",
        "subdomains": [
            "Maçonnerie, Murs porteurs & Fondations",
            "Coffrage industriel, Banches & Béton armé",
            "Polyvalence gros œuvre & Chantiers",
            "Ferraillage & Éléments préfabriqués"
        ]
    },
    {
        "id": "charpente-enveloppe-couverture",
        "name": "Charpente, Couverture & Enveloppe",
        "icon": "🪵",
        "description": "Taille et levage d'ossatures bois et métalliques, couverture en tuiles, ardoises, zinc et étanchéité de toitures.",
        "subdomains": [
            "Charpente bois, Métal & Ossature",
            "Couverture, Zinguerie & Étanchéité",
            "Étanchéité toitures-terrasses & Façades",
            "Isolation sous toiture (Sarking)"
        ]
    },
    {
        "id": "travaux-publics-infrastructures",
        "name": "Travaux Publics & Infrastructures",
        "icon": "🛣️",
        "description": "Construction de routes, autoroutes, ponts, viaducs, voiries et réseaux divers (VRD) et aménagements urbains.",
        "subdomains": [
            "Construction routière, Enrobés & Voiries",
            "Ponts, Viaducs & Ouvrages d'art",
            "Voiries et Réseaux Divers (VRD)",
            "Terrassement routier & Assainissement"
        ]
    },
    {
        "id": "engins-terrassement-chantier",
        "name": "Terrassement & Engins de Chantier",
        "icon": "🚧",
        "description": "Conduite de pelles mécaniques, bulldozers, tombereaux et pilotage de grues à tour pour le levage lourd.",
        "subdomains": [
            "Conduite d'engins, Terrassement & Pelles",
            "Grutage à tour, Grue mobile & Levage lourd",
            "Nivellement guidé par GPS 3D",
            "Maintenance des matériels de terrassement"
        ]
    },
    {
        "id": "conduite-gestion-chantier",
        "name": "Gestion & Conduite de Chantier",
        "icon": "👷",
        "description": "Conduite de travaux, chefferie de chantier, maîtrise d'œuvre (MOE), coordination SPS et management opérationnel.",
        "subdomains": [
            "Conduite d'opérations & Coordination",
            "Management terrain & Sécurité de chantier",
            "Supervision technique & Encadrement direct",
            "Maîtrise d'œuvre & Coordination globale"
        ]
    },
    {
        "id": "second-oeuvre-finitions",
        "name": "Second Œuvre, Finitions & Carrelage",
        "icon": "🎨",
        "description": "Peinture en bâtiment, plâtrerie, pose de cloisons sèches, faux-plafonds, carrelage, faïence et revêtements de sol.",
        "subdomains": [
            "Peinture, Enduits & Ravalement",
            "Plaques de plâtre, Cloisons & Faux-plafonds",
            "Carrelage, Faïence & Mosaïque",
            "Revêtements de sol souples & Parquets"
        ]
    },
    {
        "id": "menuiserie-agencement",
        "name": "Menuiserie & Métiers Spécialisés",
        "icon": "🪚",
        "description": "Menuiserie bois, aluminium et PVC, agencement sur mesure, taille de pierre patrimoniale et travaux sur cordes.",
        "subdomains": [
            "Menuiserie bois, Aluminium & PVC",
            "Taille de pierre & Restauration patrimoniale",
            "Travaux acrobatiques & Grande hauteur",
            "Agencement intérieur & Ébénisterie"
        ]
    },
    {
        "id": "electricite-plomberie-cvc",
        "name": "Équipements : Électricité, Plomberie & CVC",
        "icon": "⚡",
        "description": "Électricité tertiaire et résidentielle, plomberie sanitaire, génie climatique, climatisation et ventilation.",
        "subdomains": [
            "Électricité du bâtiment & Distribution",
            "Plomberie sanitaire, Chauffage & Réseaux d'eau",
            "Climatisation, Ventilation & Traitement d'air",
            "Sécurité électrique & Énergies du bâtiment"
        ]
    },
    {
        "id": "bim-construction-numerique",
        "name": "BIM & Bâtiment Intelligent",
        "icon": "💻",
        "description": "Maquette numérique 3D (BIM), détection de clashs, domotique, Gestion Technique du Bâtiment (GTB) et Smart Building.",
        "subdomains": [
            "Maquette numérique 3D, BIM & Données",
            "Domotique, Gestion Technique (GTB) & Smart Building",
            "Coordination numérique de projet (openBIM)",
            "Jumeaux numériques & Bâtiments connectés"
        ]
    },
    {
        "id": "construction-durable-performance",
        "name": "Construction Durable, Éco-Conception & Affaires",
        "icon": "🌱",
        "description": "Éco-conception bas-carbone (RE2020), matériaux biosourcés, diagnostics immobiliers obligatoires et affaires BTP.",
        "subdomains": [
            "Éco-conception, Bâtiment bas-carbone & ACV",
            "Inspection technique, DPE & Sécurité",
            "Développement commercial & Gestion de contrats",
            "Économie circulaire & Réemploi de matériaux"
        ]
    }
];

  var BTP_JOBS = [
    {
        "id": "architecte",
        "slug": "architecte",
        "title": "Architecte DPLG / Diplômé d'État",
        "aliases": [
            "Architecte concepteur",
            "Maître d'œuvre en architecture",
            "Architecte urbaniste"
        ],
        "icon": "🏛️",
        "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Architecture & Conception",
        "domainId": "architecture-conception",
        "subdomain": "Conception d'édifices & Maîtrise d'œuvre",
        "sectors": [
            "BTP",
            "Architecture",
            "Urbanisme"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "Bac +5 (Diplôme d'État d'Architecte - DEA) à Bac +6 (HMONP)",
        "salary": "🇫🇷 France : 2 400 - 5 200 € net/mois (~36 000 - 78 000 € brut/an en agence ou honoraires libéraux, Source : L'Étudiant) • 🇸🇳 Sénégal : 500 000 - 2 000 000 FCFA / mois (Ordre des Architectes du Sénégal - ODAS, agences de Dakar)",
        "simpleDefinition": "L'architecte conçoit des maisons, des immeubles et des édifices publics en alliant esthétique artistique, solidité technique, confort d'usage et respect de l'environnement, puis supervise leur construction du premier croquis jusqu'à la remise des clés.",
        "shortDescription": "Créateur majeur du cadre bâti répertorié par L'Étudiant, l'architecte traduit les besoins d'un maître d'ouvrage en plans spatiaux et coordonne le projet de A à Z.",
        "longDescription": "Comme décrit dans la fiche métier officielle de L'Étudiant, l'architecte prend en charge la conception d'un bâtiment neuf ou la réhabilitation d'un monument historique. Il analyse le terrain, les contraintes d'urbanisme (PLU) et le budget du client pour imaginer les volumes, la lumière et la distribution des pièces. Après avoir dessiné les esquisses et plans détaillés en 3D (BIM), il dépose la demande de permis de construire, sélectionne les entreprises du BTP lors des appels d'offres et effectue le suivi de chantier pour vérifier la conformité des travaux jusqu'à la réception de l'ouvrage.",
        "mainObjective": "Concevoir des espaces fonctionnels, esthétiques, durables et conformes aux réglementations constructives et environnementales.",
        "companyRole": "Concepteur visionnaire et garant de la cohérence spatiale, technique et juridique du projet architectural.",
        "workEnvironment": [
            "🏛️ Agences d'architecture privées ou cabinets d'urbanisme",
            "💻 Stations graphiques de CAO/DAO et modélisation BIM 3D",
            "🦺 Visites régulières de chantiers en extérieur par tous les temps"
        ],
        "missions": [
            "Rencontrer le client pour analyser ses attentes, contraintes financières et exigences programmatiques",
            "Réaliser les études de faisabilité technique et réglementaire (règles d'urbanisme, servitudes, accessibilité PMR)",
            "Dessiner les esquisses, avant-projets sommaires (APS) et avant-projets définitifs (APD) sous logiciels 3D",
            "Constituer et déposer le dossier administratif de demande de permis de construire",
            "Rédiger les pièces écrites (CCTP) pour la consultation des entreprises et diriger les réunions de chantier hebdomadaires"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Revue des plans d'exécution",
                "desc": "Ajustement sur Revit des percements de façade d'un immeuble de bureaux pour intégrer les gaines de ventilation CVC."
            },
            {
                "time": "10:30",
                "title": "Réunion de chantier sur site",
                "desc": "Visite du chantier de réhabilitation avec le conducteur de travaux et le client pour valider le coulage de l'escalier hélicoïdal."
            },
            {
                "time": "14:00",
                "title": "Rendez-vous au service d'urbanisme",
                "desc": "Échange avec l'architecte des Bâtiments de France (ABF) sur le choix des teintes d'enduit minéral en zone protégée."
            },
            {
                "time": "16:30",
                "title": "Présentation client 3D",
                "desc": "Projection d'une visite virtuelle immersive en réalité augmentée pour valider le projet d'école bioclimatique."
            }
        ],
        "skills": {
            "technical": [
                "Conception architecturale, histoire de l'art et composition des volumes",
                "Réglementation de la construction (Eurocodes, RE2020, sécurité incendie, accessibilité)",
                "Modélisation BIM 3D (Autodesk Revit, ArchiCAD, SketchUp, Rhinoceros)",
                "Économie de la construction, chiffrage estimatif et rédaction de CCTP"
            ],
            "human": [
                "Sensibilité artistique et vision spatiale tridimensionnelle innée",
                "Capacité d'écoute, diplomatie et qualités relationnelles",
                "Rigueur méthodologique et résistance au stress des livraisons de concours"
            ],
            "tools": [
                "Revit / ArchiCAD / AutoCAD",
                "Moteurs de rendu 3D (Lumion, Twinmotion, V-Ray)",
                "Logiciels de retouche et présentation (Photoshop, InDesign)",
                "Lasermètres de précision et casques de réalité virtuelle"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence en Architecture (Bac +3)",
                    "title": "Diplôme d'Études En Architecture (DEEA)",
                    "desc": "Acquisition des fondamentaux du dessin, de l'histoire architecturale et de la géométrie de l'espace."
                },
                {
                    "step": "Master / Diplôme d'État (Bac +5)",
                    "title": "Diplôme d'État d'Architecte (DEA)",
                    "desc": "Formation de référence dispensée dans les 20 Écoles Nationales Supérieures d'Architecture (ENSA)."
                },
                {
                    "step": "Habilitation professionnelle (Bac +6)",
                    "title": "Habilitation à exercer la Maîtrise d'Œuvre en son Nom Propre (HMONP)",
                    "desc": "Année de formation pratique en agence obligatoire pour s'inscrire à l'Ordre des Architectes et signer des permis."
                }
            ],
            "schools": [
                {
                    "name": "Écoles Nationales Supérieures d'Architecture (ENSA Paris-Belleville, Lyon, Nantes) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Spéciale d'Architecture (ESA Paris) / INSA Strasbourg — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Collège Universitaire d'Architecture de Dakar (CUAD) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "École Africaine des Métiers de l'Architecture et de l'Urbanisme (EAMAU Lomé) — Régional UEMOA",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Inscription au Tableau de l'Ordre des Architectes",
                "Certification HQE Bâtiment Durable",
                "Certification Professionnelle Revit Certified Professional"
            ],
            "schoolSubjects": [
                "Projet d'architecture",
                "Résistance des matériaux",
                "Histoire et théorie de l'architecture",
                "Droit de l'urbanisme"
            ]
        },
        "career": {
            "sectors": [
                "Agences d'architecture privées",
                "Bureaux d'études pluridisciplinaires et promoteurs immobiliers",
                "Fonction publique territoriale et ministères (CAUE, DDE)",
                "Exercice libéral indépendant"
            ],
            "employerTypes": [
                "Agences d'architecture",
                "Collectivités publiques",
                "Entreprises générales de construction"
            ],
            "evolution": "Architecte salarié junior ➔ Chef de projet d'agence ➔ Associé en cabinet ➔ Fondateur de sa propre agence d'architecture",
            "pros": "Créativité sans limite, fierté de voir s'ériger durablement ses œuvres dans la ville, prestige intellectuel.",
            "cons": "Nombreuses heures de charrette avant les concours, lourdes responsabilités décennales en cas de malfaçon."
        },
        "gettingStarted": {
            "beginnerProject": "Tenir un carnet de croquis urbains en observant les façades et perspectives de sa ville.",
            "intermediateProject": "Modéliser sa propre chambre à l'échelle sur SketchUp avec mobilier et lumière naturelle.",
            "advancedProject": "Concevoir un pavillon d'exposition de 100 m² intégrant ventilation naturelle et toiture végétalisée.",
            "portfolioIdeas": [
                "Dossier de croquis artistiques et maquettes en carton",
                "Planches d'un projet de réhabilitation de hangar"
            ]
        },
        "aiImpact": {
            "level": "Révolutionnaire",
            "summary": "L'IA générative (Midjourney, DALL-E, Stable Diffusion) permet d'explorer des dizaines de variations conceptuelles en quelques secondes, tandis que le design génératif optimise l'ensoleillement et l'acoustique.",
            "automatedTasks": [
                "Génération de moodboards d'ambiance",
                "Vérification automatisée de conformité au règlement d'urbanisme"
            ],
            "emergingSkills": [
                "Prompt engineering architectural et intégration du design génératif sous Grasshopper"
            ],
            "humanEdge": "La sensibilité émotionnelle, l'intelligence contextuelle du quartier et le dialogue humain avec les habitants."
        },
        "africaContext": {
            "senegalInsight": "À Dakar et dans le pôle urbain de Diamniadio, les architectes sont confrontés à des défis majeurs : inventer une architecture bioclimatique adaptée au climat sahélien (brise-soleil, double toiture ventilée, terre crue / briques BTC) pour réduire la dépendance à la climatisation électrique.",
            "localSectors": [
                "Ordre des Architectes du Sénégal (ODAS)",
                "Agences d'architecture dakaroises réputées",
                "DGPU (Délégation Générale à la Promotion des Pôles Urbains de Diamniadio)"
            ],
            "remoteWork": "Hybride (dessin et modélisation en télétravail / réunions et chantiers sur place).",
            "entrepreneurship": "Fondation d'une agence d'architecture durable spécialisée dans les éco-matériaux locaux (typha, terre compressée, bois)."
        },
        "relatedJobSlugs": [
            "architecte-dinterieur",
            "urbaniste",
            "ingenieur-genie-civil",
            "dessinateur-projeteur-en-batiment"
        ],
        "connectedFamilies": [
            "culture-medias",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier Architecte — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/architecte.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "Ordre National des Architectes",
                "url": "https://www.architectes.org/",
                "source": "CNOA"
            }
        ],
        "sources": [
            "L'Étudiant",
            "CNOA",
            "ODAS Sénégal"
        ],
        "interests": [
            "concevoir-creer",
            "arts-design",
            "nature-environnement"
        ],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "En France comme au Sénégal, le recours à un architecte diplômé est une obligation légale pour toute construction neuve dépassant 150 mètres carrés de surface de plancher.",
            "pourquoi": "Cette règle garantit la qualité architecturale du paysage urbain, la sécurité des habitants et l'insertion environnementale de l'édifice.",
            "a_retenir": "L'artiste et l'ingénieur qui imaginent les villes et les habitats de demain."
        }
    },
    {
        "id": "architecte-dinterieur",
        "slug": "architecte-dinterieur",
        "title": "Architecte d'Intérieur",
        "aliases": [
            "Designer d'espace",
            "Architecte d'intérieur scénographe",
            "Aménageur d'espaces professionnels"
        ],
        "icon": "🛋️",
        "image": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Architecture & Conception",
        "domainId": "architecture-conception",
        "subdomain": "Architecture d'intérieur & Design d'espace",
        "sectors": [
            "BTP",
            "Architecture",
            "Design"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "Bac +4 à Bac +5 (Diplôme d'écoles d'art reconnues par le CFAI ou DSAA)",
        "salary": "🇫🇷 France : 2 000 - 4 200 € net/mois (~28 000 - 62 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 400 000 - 1 500 000 FCFA / mois (Boutiques de luxe, hôtels de la Petite Côte, résidences haut standing Almadies)",
        "simpleDefinition": "L'architecte d'intérieur repense la distribution des pièces d'un bâtiment sans toucher aux murs porteurs extérieurs, en jouant sur les cloisons, la lumière, les matières et le mobilier pour optimiser le confort et l'ambiance des lieux de vie et de travail.",
        "shortDescription": "Spécialiste de la scénographie intérieure documenté par L'Étudiant, il conçoit des espaces chaleureux et fonctionnels pour les appartements, commerces, hôtels et bureaux.",
        "longDescription": "Selon la fiche dédiée de L'Étudiant, l'architecte d'intérieur intervient une fois la structure du bâtiment érigée ou dans le cadre de rénovations lourdes. Il redistribue les volumes intérieurs, conçoit des rangements sur mesure, sélectionne les matériaux nobles (bois, métal, céramique), dessine les plans d'éclairage et coordonne les artisans du second œuvre (électriciens, menuisiers, peintres, carreleurs). Son travail allie sens de l'ergonomie, créativité plastique et rigueur technique pour sublimer le quotidien des usagers.",
        "mainObjective": "Harmoniser fonctionnalité, ergonomie et esthétique visuelle dans les volumes intérieurs en respectant les normes de sécurité et les budgets alloués.",
        "companyRole": "Metteur en scène de l'espace intérieur et garant de l'expérience utilisateur et de l'ambiance des lieux.",
        "workEnvironment": [
            "🛋️ Agences de design d'espace ou cabinets d'architecture pluridisciplinaires",
            "🏬 Boutiques, sièges sociaux d'entreprises, hôtels de prestige et logements de particuliers",
            "🛠️ Chantiers d'aménagement pour le calage des finitions avec les artisans"
        ],
        "missions": [
            "Analyser le mode de vie des particuliers ou l'organisation de travail des entreprises",
            "Concevoir des plans de circulation, d'implantation de mobilier et d'éclairage sur mesure",
            "Élaborer des planches de tendances (moodboards) associant couleurs, textiles et échantillons de matières",
            "Consulter les artisans spécialisés du second œuvre et établir les devis détaillés",
            "Assurer la direction artistique et le suivi rigoureux du chantier de second œuvre"
        ],
        "typicalDay": [
            {
                "time": "09:00",
                "title": "Planche tendance et sélection de matières",
                "desc": "Choix d'échantillons de travertin, de noyer massif et de laiton brossé pour la rénovation d'un restaurant gastronomique."
            },
            {
                "time": "11:30",
                "title": "Modélisation 3D photoréaliste",
                "desc": "Rendu sous SketchUp et Enscape d'une suite hôtelière avec simulation de l'éclairage indirect le soir."
            },
            {
                "time": "14:30",
                "title": "Visite d'avancement chez l'ébéniste",
                "desc": "Contrôle des assemblages et des coulisses des placards intégrés dans l'atelier du menuisier partenaire."
            },
            {
                "time": "16:45",
                "title": "Point sur chantier avec le plaquiste",
                "desc": "Vérification de l'implantation des corniches lumineuses et des coffrages de faux-plafond acoustiques."
            }
        ],
        "skills": {
            "technical": [
                "Maîtrise de la distribution spatiale et de l'ergonomie des flux humains",
                "Connaissance approfondie des matériaux de finition (bois, verre, pierres, métaux, résines)",
                "Éclairagisme architectural et acoustique des espaces intérieurs",
                "Logiciels de CAO/DAO (AutoCAD, SketchUp, Vectorworks, 3ds Max)"
            ],
            "human": [
                "Écoute empathique et intuition esthétique très développée",
                "Capacité de négociation et de coordination avec les artisans",
                "Rigueur dans le respect des délais et des enveloppes budgétaires"
            ],
            "tools": [
                "SketchUp Pro / AutoCAD / Revit",
                "Moteurs de rendu (Enscape, V-Ray, Corona)",
                "Nuanciers professionnels (Pantone, RAL) et matériauthèque",
                "Télémètres laser haute précision"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "DSAA / Bachelor (Bac +3)",
                    "title": "DN MADE mention Espace ou Bachelor Design d'Intérieur",
                    "desc": "Formation pratique aux bases du dessin d'espace, maquettes et histoire du mobilier."
                },
                {
                    "step": "Master / Diplôme Bac +5",
                    "title": "Diplôme d'Architecte d'Intérieur certifié par le CFAI (Bac +5)",
                    "desc": "Niveau d'excellence dispensé dans les grandes écoles d'arts appliqués (Boulle, Camondo, Ensad, Penninghen)."
                },
                {
                    "step": "Reconnaissance CFAI",
                    "title": "Agrément du Conseil Français des Architectes d'Intérieur",
                    "desc": "Label de qualification professionnelle garantissant la compétence auprès des maîtres d'ouvrage."
                }
            ],
            "schools": [
                {
                    "name": "École Boulle / École Camondo / ENSAD (Arts Déco Paris) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Penninghen / École Bleue / ESAIL Lyon — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Supérieure d'Arts Visuels et Design de Dakar — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Institut Supérieur des Arts et Métiers de Dakar — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Agrément professionnel CFAI",
                "Certification de modélisation 3D d'espace",
                "Habilitation sécurité des ERP (Établissements Recevant du Public)"
            ],
            "schoolSubjects": [
                "Design d'espace",
                "Technologie des matériaux",
                "Histoire du design et du meuble",
                "Normes ERP et sécurité incendie"
            ]
        },
        "career": {
            "sectors": [
                "Cabinets d'architecture d'intérieur et de design",
                "Grandes enseignes de distribution et d'hôtellerie",
                "Agences d'aménagement de bureaux tertiaires",
                "Exercice libéral indépendant"
            ],
            "employerTypes": [
                "Agences d'architecture",
                "Studios de design d'espace",
                "Entreprises d'agencement haut de gamme"
            ],
            "evolution": "Designer junior ➔ Architecte d'intérieur chef de projet ➔ Directeur artistique d'agence ➔ Fondateur de son propre studio d'intérieur",
            "pros": "Création d'espaces tangibles et intimes, satisfaction des retours enthousiastes des clients, diversité permanente des chantiers.",
            "cons": "Gestion des retards d'artisans, pression sur les délais de livraison d'ouverture de boutiques."
        },
        "gettingStarted": {
            "beginnerProject": "Relever le plan d'un appartement au mètre ruban et le redessiner à l'échelle 1/50e.",
            "intermediateProject": "Concevoir un moodboard thématique pour la reconversion d'une ancienne usine en loft chaleureux.",
            "advancedProject": "Réaliser le plan complet d'aménagement d'un café de 80 m² respectant les normes d'accessibilité handicapé (PMR).",
            "portfolioIdeas": [
                "Book de projets d'aménagement avec plans cotés et perspectives 3D",
                "Échantillonnage de matériaux coordonnés"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "Des outils de rendu par IA génèrent instantanément des mises en scène de meubles et de textures à partir de simples esquisses en traits noirs.",
            "automatedTasks": [
                "Génération d'options de rendu de textures",
                "Visualisation automatique de variations de luminaires"
            ],
            "emergingSkills": [
                "Utilisation d'outils d'IA comme Krea ou PromeAI pour les phases d'idéation rapide"
            ],
            "humanEdge": "La sensibilité au toucher des matières, la justesse du goût sur mesure et la relation de confiance avec le client."
        },
        "africaContext": {
            "senegalInsight": "À Dakar, l'explosion du secteur de l'hôtellerie de luxe, des restaurants branchés des Almadies et du Plateau, ainsi que des villas de standing de Saly crée un engouement massif pour l'architecture d'intérieur mêlant design contemporain épuré et artisanat d'art africain (bois d'ébène, vannerie, tissus wax ou bogolan).",
            "localSectors": [
                "Hôtellerie et restauration touristique",
                "Showrooms d'ameublement de Dakar",
                "Résidences privées de standing"
            ],
            "remoteWork": "Hybride (conception en atelier et suivi régulier chez les menuisiers et sur les chantiers).",
            "entrepreneurship": "Création d'une marque de design d'intérieur valorisant les matières naturelles et le mobilier artisanal sénégalais."
        },
        "relatedJobSlugs": [
            "architecte",
            "menuisier",
            "peintre-en-batiment",
            "plaquiste"
        ],
        "connectedFamilies": [
            "arts-design",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier Architecte d'intérieur — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/architecte-dinterieur.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "CFAI — Conseil Français des Architectes d'Intérieur",
                "url": "https://www.cfai.fr/",
                "source": "CFAI"
            }
        ],
        "sources": [
            "L'Étudiant",
            "CFAI"
        ],
        "interests": [
            "arts-design",
            "concevoir-creer",
            "contact-humain"
        ],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "À la différence du simple décorateur d'intérieur, l'architecte d'intérieur a les compétences techniques pour modifier les cloisons, les réseaux d'eau, d'électricité et la climatisation, transformant en profondeur la structure spatiale.",
            "pourquoi": "Il possède une véritable formation technique aux normes du bâtiment et à la sécurité incendie.",
            "a_retenir": "Le magicien des volumes qui réinvente nos espaces intérieurs."
        }
    },
    {
        "id": "ingenieur-dans-le-btp",
        "slug": "ingenieur-dans-le-btp",
        "title": "Ingénieur dans le BTP / Ingénieur Travaux",
        "aliases": [
            "Ingénieur de chantier",
            "Ingénieur travaux bâtiment",
            "Ingénieur d'affaires BTP"
        ],
        "icon": "🏗️",
        "image": "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Ingénierie & Bureaux d'Études",
        "domainId": "ingenierie-bureaux-etudes",
        "subdomain": "Ingénierie de chantier & Travaux",
        "sectors": [
            "BTP",
            "Génie Civil",
            "Construction"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "Bac +5 (Diplôme d'Ingénieur en Génie Civil / BTP)",
        "salary": "🇫🇷 France : 2 900 - 5 500 € net/mois (~40 000 - 80 000 € brut/an avec véhicule de fonction, Source : L'Étudiant) • 🇸🇳 Sénégal : 600 000 - 2 200 000 FCFA / mois (Grands chantiers autoroutiers, Eiffage Sénégal, CSE, Sogea-Satom)",
        "simpleDefinition": "L'ingénieur dans le BTP pilote les aspects techniques, organisationnels, financiers et humains de la réalisation d'un grand ouvrage (pont, hôpital, tour, stade) depuis le démarrage du terrassement jusqu'à la livraison finale.",
        "shortDescription": "Cadre technique d'élite répertorié par L'Étudiant, il transforme les plans abstraits des architectes en réalités physiques pérennes tout en respectant délais, coûts et sécurité.",
        "longDescription": "Comme décrit dans les analyses de carrières de L'Étudiant, l'ingénieur dans le BTP peut exercer sur les chantiers (ingénieur travaux) ou dans les bureaux d'études techniques. Il coordonne les chefs de chantier, négocie avec les sous-traitants, résout les imprévus géologiques ou techniques (présence d'eau, fissures, retards de livraisons) et s'assure du strict respect des règles d'hygiène et de sécurité. Doté d'une double compétence scientifique et managériale, il gère des budgets de plusieurs millions d'euros.",
        "mainObjective": "Assurer la construction d'ouvrages complexes dans le respect intransigeant des règles de l'art, de la rentabilité financière et des normes de sécurité.",
        "companyRole": "Leader opérationnel et garant de la performance technique et économique du chantier.",
        "workEnvironment": [
            "🏗️ Chantiers de grande envergure en extérieur avec bases-vies modulaires",
            "🏢 Réunions de coordination avec maîtres d'ouvrage, architectes et bureaux de contrôle",
            "🦺 Présence terrain quotidienne au contact direct des équipes opérationnelles"
        ],
        "missions": [
            "Étudier le dossier de consultation des entreprises (DCE) et définir les méthodes de construction optimales",
            "Planifier l'ordonnancement, le pilotage et la coordination (OPC) des différents corps d'état",
            "Consulter les fournisseurs, passer les commandes de matériaux (béton, acier) et négocier les prix",
            "Superviser l'application des règles de sécurité (port des EPI, protection contre les chutes)",
            "Suivre le compte d'exploitation financier du chantier et valider les situations de travaux mensuelles"
        ],
        "typicalDay": [
            {
                "time": "07:15",
                "title": "Tour de chantier matinal",
                "desc": "Inspection avec les chefs de chantier de l'avancement du coulage des poteaux du 4e étage et vérification des échafaudages."
            },
            {
                "time": "09:30",
                "title": "Réunion hebdomadaire de chantier",
                "desc": "Point de blocage résolu avec le bureau d'études structure concernant le passage d'une gaine technique dans une poutre principale."
            },
            {
                "time": "13:30",
                "title": "Négociation sous-traitance",
                "desc": "Discussion financière avec l'entreprise de pose de menuiseries extérieures sur le calendrier de pose."
            },
            {
                "time": "16:00",
                "title": "Actualisation du planning prévisionnel",
                "desc": "Recalcul du chemin critique sur MS Project pour absorber une journée d'intempérie sans impacter la date de livraison."
            }
        ],
        "skills": {
            "technical": [
                "Résistance des matériaux (RDM), géotechnique et dynamique des structures",
                "Gestion contractuelle, droit de la construction et marchés publics/privés",
                "Planification de projet complexe (méthodes du chemin critique, diagramme de Gantt)",
                "Contrôle budgétaire de chantier et analyse des écarts de marge"
            ],
            "human": [
                "Leadership naturel et aptitude au commandement d'équipes hétérogènes",
                "Sang-froid et réactivité face aux aléas de chantier imprévus",
                "Sens de la négociation et fermeté bienveillante"
            ],
            "tools": [
                "Logiciels de planification : MS Project, Primavera P6",
                "Logiciels de gestion de chantier et levée de réserves (Finalcad, PlanGrid)",
                "Visionneuses BIM (Revit Viewer, Navisworks)",
                "Outils de contrôle béton (scléromètre, carotteuse)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Classes Préparatoires / BUT (Bac +2/+3)",
                    "title": "CPGE Math-Physique ou BUT Génie Civil Construction Durable",
                    "desc": "Acquisition des sciences de l'ingénieur, mécanique et mathématiques."
                },
                {
                    "step": "Diplôme d'Ingénieur (Bac +5)",
                    "title": "Diplôme d'Ingénieur en BTP / Génie Civil (ESTP, INSA, Polytech)",
                    "desc": "Formation d'excellence accréditée par la CTI combinant ingénierie technique et management de chantier."
                },
                {
                    "step": "Mastère Spécialisé (Bac +6)",
                    "title": "Mastère Spécialisé Management de Projet BTP / BIM",
                    "desc": "Spécialisation pour encadrer des méga-projets d'infrastructures internationales."
                }
            ],
            "schools": [
                {
                    "name": "ESTP Paris (École Spéciale des Travaux Publics) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "INSA (Lyon, Strasbourg, Toulouse) / Polytech — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Polytechnique de Thiès (EPT) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) / Génie Civil — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Habilitation coordination sécurité chantier (CSPS)",
                "Certification PMP (Project Management Professional)",
                "Habilitation travaux à proximité des réseaux (AIPR)"
            ],
            "schoolSubjects": [
                "Mécanique des structures",
                "Topographie et terrassement",
                "Béton armé et précontraint",
                "Management et gestion d'entreprise"
            ]
        },
        "career": {
            "sectors": [
                "Majors du BTP (Bouygues Construction, Vinci, Eiffage, NGE)",
                "Grandes entreprises régionales de construction et de VRD",
                "Bureaux d'ingénierie et d'assistance à maîtrise d'ouvrage (Egis, Setec, Artelia)"
            ],
            "employerTypes": [
                "Entreprises générales de bâtiment",
                "Maîtres d'œuvre d'infrastructures",
                "Grands groupes d'ingénierie"
            ],
            "evolution": "Ingénieur travaux débutant ➔ Conducteur de travaux principal ➔ Directeur de travaux ➔ Directeur d'agence régionale BTP",
            "pros": "Métier d'action où l'on voit concrètement le résultat de son travail chaque jour, responsabilités précoces, perspectives d'évolution rapides.",
            "cons": "Horaires matinaux, charge de travail intense lors des phases de livraison, météo parfois rude."
        },
        "gettingStarted": {
            "beginnerProject": "Visiter un chantier ouvert au public et identifier le rôle des différentes engins et corps de métier.",
            "intermediateProject": "Construire un planning de chantier fictif sous Excel avec l'ordre logique des étapes (fondations, élévations, toiture).",
            "advancedProject": "Calculer le dimensionnement d'une poutre en béton armé sous une charge uniforme de 20 kN/m.",
            "portfolioIdeas": [
                "Rapport de stage de conduite de travaux sur chantier",
                "Simulation de phasage d'un projet de bâtiment collectif"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "Des drones scannent quotidiennement le chantier pour comparer le nuage de points au modèle BIM 3D et alerter en cas de retard ou d'erreur d'implantation.",
            "automatedTasks": [
                "Détection automatique d'écarts entre plans et réalité",
                "Optimisation algorithmique des rotations de camions toupies"
            ],
            "emergingSkills": [
                "Supervision des outils d'analyse de progression de chantier par intelligence artificielle"
            ],
            "humanEdge": "Le management des équipes d'hommes et de femmes sur le terrain et la négociation humaine en cas de litige."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les ingénieurs BTP sont au cœur de la modernisation nationale : construction de la ligne du TER Dakar-AIBD, du Bus Rapid Transit (BRT), du pont à péage de Foundiougne, de l'autoroute Ila Touba et des infrastructures de la ville nouvelle de Diamniadio.",
            "localSectors": [
                "Grands groupes de BTP (Eiffage Sénégal, CSE - Compagnie Sahélienne d'Entreprises, Sogea-Satom)",
                "AGEROUTE (Agence des Travaux et de Gestion des Routes)",
                "Ministère des Infrastructures et des Transports"
            ],
            "remoteWork": "Non compatible (présence physique quotidienne sur le terrain requise).",
            "entrepreneurship": "Création d'une entreprise générale de BTP spécialisée dans les ouvrages d'art et le génie civil au Sénégal et dans la sous-région."
        },
        "relatedJobSlugs": [
            "ingenieur-genie-civil",
            "conducteur-de-travaux",
            "chef-de-chantier",
            "ingenieur-structures"
        ],
        "connectedFamilies": [
            "industrie-mecanique",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier Ingénieur dans le BTP — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/ingenieur-dans-le-btp.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "FNTP — Fédération Nationale des Travaux Publics",
                "url": "https://www.fntp.fr/",
                "source": "FNTP"
            }
        ],
        "sources": [
            "L'Étudiant",
            "FNTP",
            "FFB"
        ],
        "interests": [
            "construire-fabriquer",
            "coordonner-gerer",
            "technique-outils"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Le secteur du BTP est l'un des premiers employeurs d'ingénieurs au monde, avec plus de 80% des jeunes diplômés signant un contrat à durée indéterminée avant même la fin de leurs études.",
            "pourquoi": "La complexité technique croissante des ouvrages et les exigences écologiques rendent ces profils indispensables.",
            "a_retenir": "Le bâtisseur qui coordonne l'intelligence collective sur les chantiers."
        }
    },
    {
        "id": "ingenieur-genie-civil",
        "slug": "ingenieur-genie-civil",
        "title": "Ingénieur en Génie Civil & BTP",
        "aliases": [
            "Ingénieur calcul génie civil",
            "Ingénieur ouvrages d'art",
            "Ingénieur concepteur de structures"
        ],
        "icon": "🌉",
        "image": "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Ingénierie & Bureaux d'Études",
        "domainId": "ingenierie-bureaux-etudes",
        "subdomain": "Génie civil, Calculs & Ouvrages d'art",
        "sectors": [
            "BTP",
            "Génie Civil",
            "Infrastructures"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "Bac +5 (Diplôme d'Ingénieur Génie Civil)",
        "salary": "🇫🇷 France : 3 000 - 5 600 € net/mois (~42 000 - 82 000 € brut/an, Source : L'Étudiant / APEC) • 🇸🇳 Sénégal : 600 000 - 2 300 000 FCFA / mois (Bureaux d'études structures, grands projets de ponts et routes)",
        "simpleDefinition": "L'ingénieur en génie civil conçoit, dimensionne et calcule la résistance des grandes structures (ponts, viaducs, barrages, tours de grande hauteur, tunnels) pour s'assurer qu'elles résistent aux charges, aux séismes, au vent et à l'usure du temps.",
        "shortDescription": "Scientifique de la matière et des efforts répertorié par L'Étudiant, il calcule les armatures, le béton et l'acier pour garantir la sécurité absolue des édifices.",
        "longDescription": "Comme mis en avant dans les fiches formations et métiers de L'Étudiant, l'ingénieur en génie civil intervient en amont et tout au long de la construction. À partir des croquis architecturaux, il effectue la descente de charges, modélise le comportement mécanique des matériaux (béton armé, béton précontraint, charpente métallique) et dimensionne les fondations profondes en fonction de la nature des sols révélée par les études géotechniques. Il édite les plans de ferraillage précis indispensables aux ouvriers de chantier.",
        "mainObjective": "Calculer et optimiser la structure porteuse des ouvrages pour assurer une stabilité et une durabilité centenaire en toute sécurité.",
        "companyRole": "Garant de l'intégrité physique et de la sécurité structurelle des bâtiments et infrastructures.",
        "workEnvironment": [
            "📐 Bureaux d'études techniques (BET) et sociétés d'ingénierie conseil",
            "💻 Simulateurs informatiques d'éléments finis et de dynamique des structures",
            "🏗️ Inspections techniques sur chantier lors des phases critiques de coulage et de précontrainte"
        ],
        "missions": [
            "Modéliser en 3D les structures sous logiciels de calcul par éléments finis (Robot, Advance Design)",
            "Calculer les sollicitations mécaniques (flexion, cisaillement, torsion) selon les Eurocodes",
            "Dimensionner les éléments porteurs (piliers, poutres, dalles, culées de pont) et leurs armatures en acier",
            "Analyser les rapports géotechniques pour choisir le type de fondations (semelles superficielles ou pieux forés)",
            "Rédiger les notes de calcul soumises à la validation intransigeante des bureaux de contrôle (Veritas, Socotec, Apave)"
        ],
        "typicalDay": [
            {
                "time": "08:45",
                "title": "Modélisation éléments finis",
                "desc": "Calcul de la résistance sismique d'un pont haubané sous séisme de magnitude 6,5 sur le logiciel Robot Structural Analysis."
            },
            {
                "time": "11:00",
                "title": "Validation d'une note de calcul",
                "desc": "Échange technique avec l'ingénieur du bureau de contrôle pour justifier le taux d'armatures d'un radier de sous-sol."
            },
            {
                "time": "14:15",
                "title": "Visite de ferraillage sur chantier",
                "desc": "Vérification in situ du diamètre et de l'espacement des barres d'acier haute adhérence avant autorisation de coulage du béton."
            },
            {
                "time": "16:45",
                "title": "Optimisation matière bas-carbone",
                "desc": "Comparaison de variantes de béton bas-carbone géopolymère pour réduire l'empreinte carbone des fondations de 30%."
            }
        ],
        "skills": {
            "technical": [
                "Mécanique des milieux continus, résistance des matériaux et élasticité",
                "Réglementation Eurocodes (Eurocode 0, 1, 2 béton, 3 acier, 7 géotechnique, 8 séismes)",
                "Calcul de structures par éléments finis (Robot, Scia Engineer, Advance Design)",
                "Géotechnique et mécanique des sols appliquée aux fondations"
            ],
            "human": [
                "Rigueur mathématique absolue et sens des responsabilités vitales",
                "Capacité d'analyse critique des résultats fournis par les logiciels",
                "Aisance dans le travail collaboratif avec architectes et chefs de chantier"
            ],
            "tools": [
                "Robot Structural Analysis / Advance Design / SCIA Engineer",
                "AutoCAD Structural Detailing / Tekla Structures",
                "Outils de calcul géotechnique (Talren, Foxta)",
                "Tableurs de calculs certifiés Eurocodes"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "CPGE / Licence (Bac +3)",
                    "title": "Classes Préparatoires aux Grandes Écoles ou Licence de Mécanique",
                    "desc": "Maîtrise fondamentale de l'algèbre linéaire, du calcul différentiel et de la physique mécanique."
                },
                {
                    "step": "Diplôme d'Ingénieur (Bac +5)",
                    "title": "Ingénieur en Génie Civil (Ponts ParisTech, ESTP, INSA, Polytech)",
                    "desc": "Cursus d'excellence en calcul de structures, ouvrages d'art et mécanique des sols."
                },
                {
                    "step": "Doctorat / Spécialisation (Bac +8)",
                    "title": "Doctorat en Génie Civil / Calcul avancé des structures",
                    "desc": "Recherche appliquée sur les bétons fibrés à ultra-hautes performances ou la sismicité."
                }
            ],
            "schools": [
                {
                    "name": "École des Ponts ParisTech / ESTP Paris — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "INSA Lyon / Polytech Lille / Centrale Lille — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Polytechnique de Thiès (EPT) / Génie Civil — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Agrément d'ingénieur calcul de structures",
                "Certification Eurocodes niveau expert",
                "Habilitation d'accès aux ouvrages d'art"
            ],
            "schoolSubjects": [
                "Calcul tensoriel",
                "Dynamique des structures",
                "Béton précontraint",
                "Mécanique de la rupture"
            ]
        },
        "career": {
            "sectors": [
                "Bureaux d'études techniques indépendants",
                "Grands groupes d'ingénierie et de conseil (Egis, Setec, Systra, Artelia)",
                "Bureaux de contrôle technique (Bureau Veritas, Socotec, Dekra)",
                "Services techniques des ministères et collectivités"
            ],
            "employerTypes": [
                "Sociétés d'ingénierie d'infrastructures",
                "Bureaux d'études de constructeurs",
                "Organismes de contrôle"
            ],
            "evolution": "Ingénieur calcul junior ➔ Ingénieur d'études senior ➔ Chef de groupe calcul de structures ➔ Directeur technique bureau d'études",
            "pros": "Excellence intellectuelle de haut niveau, impact direct sur la sécurité publique, reconnaissance internationale.",
            "cons": "Responsabilité juridique et pénale lourde en cas d'effondrement, travail sur écran prolongé en phase d'études."
        },
        "gettingStarted": {
            "beginnerProject": "Observer les différents types de ponts (pont en arc, pont à poutres, pont suspendu) et comprendre comment circulent les forces.",
            "intermediateProject": "Modéliser un treillis métallique simple (type pont Eiffel) sous un logiciel de calcul gratuit comme RDM7.",
            "advancedProject": "Calculer la flèche maximale d'une poutre en béton armé de 8 mètres soumise à son poids propre et à une charge d'exploitation.",
            "portfolioIdeas": [
                "Note de calcul de structure rédigée selon les Eurocodes",
                "Maquette 3D d'un viaduc ferroviaire"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA générative de topologies (Generative Design) conçoit des formes d'ossatures organiques ultra-résistantes utilisant 25% de béton et d'acier en moins.",
            "automatedTasks": [
                "Optimisation automatique des sections de poutres",
                "Vérification automatisée des critères de flèche et de fissuration"
            ],
            "emergingSkills": [
                "Paramétrage d'algorithmes d'optimisation topologique sous Dynamo / Grasshopper"
            ],
            "humanEdge": "La validation finale de la robustesse globale et la responsabilité éthique face aux vies humaines abritées."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les ingénieurs en génie civil formés à l'EPT Thiès et à l'ESP Dakar ont conçu et supervisé les plus grands chefs-d'œuvre du pays : le Monument de la Renaissance Africaine, le pont Nelson Mandela de Foundiougne sur le fleuve Saloum, le viaduc du BRT et les nouveaux ponts de franchissement du fleuve Sénégal à Rosso.",
            "localSectors": [
                "AGEROUTE (Agence des Travaux et de Gestion des Routes)",
                "Bureaux d'études sénégalais réputés (CIRA, AIC, Gauff)",
                "Direction générale des grands travaux de l'État"
            ],
            "remoteWork": "Favorable en phase d'études (calculs et modélisation en télétravail / visites de contrôle sur le terrain).",
            "entrepreneurship": "Création d'un bureau d'études techniques d'ingénierie et de calcul de structures pour l'Afrique de l'Ouest."
        },
        "relatedJobSlugs": [
            "ingenieur-structures",
            "ingenieur-dans-le-btp",
            "dessinateur-projeteur-en-batiment",
            "conducteur-de-travaux"
        ],
        "connectedFamilies": [
            "industrie-mecanique",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche formation et métier Génie Civil — L'Étudiant",
                "url": "https://www.letudiant.fr/etudes/secteurs/btp.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "Syntec Ingénierie — Fédération des professionnels de l'ingénierie",
                "url": "https://www.syntec-ingenierie.fr/",
                "source": "Syntec"
            }
        ],
        "sources": [
            "L'Étudiant",
            "Syntec Ingénierie",
            "EPT Thiès"
        ],
        "interests": [
            "donnees-chiffres",
            "construire-fabriquer",
            "technique-outils"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Le pont le plus long du monde (viaduc de Danyang-Kunshan) mesure 164,8 kilomètres et a mobilisé plus de 10 000 ingénieurs en génie civil et ouvriers pendant quatre ans.",
            "pourquoi": "Chaque millimètre d'acier et de béton doit être calculé pour résister aux typhons, séismes et variations de température.",
            "a_retenir": "Le cerveau scientifique qui s'assure que les ponts, les barrages et les tours ne s'effondrent jamais."
        }
    },
    {
        "id": "ingenieur-structures",
        "slug": "ingenieur-structures",
        "title": "Ingénieur Structures",
        "aliases": [
            "Ingénieur calcul de structures métalliques/béton/bois",
            "Ingénieur d'études charpente et ossature",
            "Spécialiste stabilité des ouvrages"
        ],
        "icon": "📐",
        "image": "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Ingénierie & Bureaux d'Études",
        "domainId": "ingenierie-bureaux-etudes",
        "subdomain": "Calcul de structures & Stabilité",
        "sectors": [
            "BTP",
            "Ingénierie",
            "Bureaux d'Études"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "Bac +5 (Diplôme d'Ingénieur spécialisé en Génie Civil / Mécanique des structures)",
        "salary": "🇫🇷 France : 3 000 - 5 400 € net/mois (~42 000 - 78 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 550 000 - 2 000 000 FCFA / mois (Bureaux d'études BTP, charpentiers métalliques et bétonneurs)",
        "simpleDefinition": "L'ingénieur structures est le spécialiste pointu qui calcule l'ossature portrice des bâtiments (poutres, poteaux, planchers, dômes) en acier, béton, bois ou verre pour garantir que l'édifice supporte son propre poids et les forces extérieures comme le vent ou la neige.",
        "shortDescription": "Fiche métier clé citée par L'Étudiant, il collabore étroitement avec l'architecte pour rendre physiquement possibles les audaces esthétiques les plus spectaculaires.",
        "longDescription": "Comme l'explique la fiche descriptive de L'Étudiant, l'ingénieur structures donne corps aux intentions des architectes en résolvant l'équation de la stabilité. Qu'il s'agisse d'une verrière en porte-à-faux, d'un stade avec toiture rétractable ou d'un gratte-ciel élancé, il choisit les matériaux les plus appropriés (acier haute résistance, béton précontraint, lamellé-collé bois), définit les sections précises des profilés et vérifie l'assemblage des nœuds de connexion. Son travail est indispensable pour prévenir tout risque d'affaissement ou de fissuration.",
        "mainObjective": "Rendre stables, constructibles et sécurisées les géométries architecturales les plus audacieuses au meilleur coût de matière.",
        "companyRole": "Garant mathématique de l'équilibre et de la stabilité de l'ossature du bâtiment.",
        "workEnvironment": [
            "🏢 Bureaux d'études techniques spécialisés en charpente ou structures",
            "💻 Simulateurs tridimensionnels de calcul de déformations mécaniques",
            "🏗️ Visites d'usines de préfabrication et de chantiers de montage d'ossatures"
        ],
        "missions": [
            "Analyser les plans d'architecture pour identifier les points d'appui critiques et les lignes de force",
            "Modéliser l'ossature complète en éléments barres et coques sous logiciels spécialisés",
            "Simuler les cas de charges réglementaires (poids mort, surcharges d'exploitation, neige, vent dynamique, séismes)",
            "Concevoir et dimensionner les assemblages (boulons haute résistance, cordons de soudure, platines d'ancrage)",
            "Coordonner le travail des projeteurs pour l'édition des plans de calpinage et de fabrication d'atelier"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Calcul de portance d'un porte-à-faux",
                "desc": "Vérification des contraintes de von Mises sur un porte-à-faux de 12 mètres d'une médiathèque sous Advance Design."
            },
            {
                "time": "11:00",
                "title": "Revue d'assemblage métallique",
                "desc": "Calcul du nombre de boulons précontraints nécessaires pour assembler le jarret d'un portique métallique d'un hall logistique."
            },
            {
                "time": "14:30",
                "title": "Atelier de conception avec l'architecte",
                "desc": "Proposition d'une solution alternative de tirants métalliques discrets pour supprimer un poteau encombrant dans le hall."
            },
            {
                "time": "16:45",
                "title": "Inspection en usine de préfabrication",
                "desc": "Vérification de la qualité de fabrication de poutres en béton précontraint par pré-tension avant livraison sur chantier."
            }
        ],
        "skills": {
            "technical": [
                "Résistance des matériaux avancée et théorie de l'élasticité et de la plasticité",
                "Calcul des assemblages métalliques (Eurocode 3) et structures bois (Eurocode 5)",
                "Dynamique des structures et modélisation aux éléments finis",
                "Connaissance approfondie de la préfabrication industrielle"
            ],
            "human": [
                "Créativité technique pour trouver des solutions élégantes et invisibles",
                "Sens aigu du détail et rigueur dans les vérifications de sécurité",
                "Esprit d'équipe pour dialoguer avec les architectes et fabricants"
            ],
            "tools": [
                "Advance Design / SCIA Engineer / Robot Structural Analysis",
                "Tekla Structures (BIM charpente métallique et béton préfabriqué)",
                "Outils de calcul d'assemblages (IDEA StatiCa)",
                "Logiciels de calcul sismique"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Prépa / Licence (Bac +3)",
                    "title": "CPGE Scientifique ou Licence de Génie Mécanique / Civil",
                    "desc": "Apprentissage des lois fondamentales de la mécanique newtonienne et de la résistance des matériaux."
                },
                {
                    "step": "Diplôme d'Ingénieur (Bac +5)",
                    "title": "Ingénieur en Génie Civil / Calcul de Structures",
                    "desc": "Spécialisation dans les Eurocodes, la modélisation numérique et la technologie des structures."
                },
                {
                    "step": "Double Cursus Architecte-Ingénieur",
                    "title": "Diplôme conjoint Architecte-Ingénieur (ENSA + École d'Ingénieurs)",
                    "desc": "Profil d'élite extrêmement recherché maîtrisant à la fois le geste esthétique et le calcul de résistance."
                }
            ],
            "schools": [
                {
                    "name": "INSA Strasbourg / ESTP Paris / CentraleSupélec — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École des Ponts ParisTech / CHEBAP (Centre des Hautes Études du Béton Armé et Précontraint) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Polytechnique de Thiès (EPT) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification IDEA StatiCa Steel Connection Specialist",
                "Certification Tekla Structures Professional",
                "Agrément technique de concepteur parasismique"
            ],
            "schoolSubjects": [
                "Stabilité élastique (flambement, déversement, voilement)",
                "Béton précontraint",
                "Charpente métallique",
                "Génie parasismique"
            ]
        },
        "career": {
            "sectors": [
                "Bureaux d'études spécialisés en structures",
                "Constructeurs métalliques et charpentiers industriels",
                "Entreprises générales de BTP",
                "Bureaux de contrôle technique et d'expertise judiciaire"
            ],
            "employerTypes": [
                "Bureaux d'études d'ingénierie",
                "Entreprises de charpente métallique et bois",
                "Constructeurs de façades complexes"
            ],
            "evolution": "Ingénieur structure débutant ➔ Chef de projet structure ➔ Directeur technique de bureau d'études ➔ Expert judiciaire en sinistres du bâtiment",
            "pros": "Défi intellectuel permanent, collaboration étroite avec de grands architectes mondiaux, rareté des compétences.",
            "cons": "Échéances d'études courtes, responsabilité directe sur l'absence de fléchissement ou d'effondrement."
        },
        "gettingStarted": {
            "beginnerProject": "Construire un pont en spaghettis et tester le poids maximal qu'il peut porter avant rupture.",
            "intermediateProject": "Modéliser un portique de hangar sur un logiciel 2D gratuit et identifier la zone où le moment fléchissant est maximal.",
            "advancedProject": "Dimensionner un profilé IPE en acier pour supporter une toiture terrasse soumise à 100 kg/m² de neige.",
            "portfolioIdeas": [
                "Dossier de calcul de structure d'un auvent en porte-à-faux",
                "Modèle Tekla d'une charpente métallique complète"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA calcule et teste automatiquement des milliers de configurations de treillis et d'épaisseurs pour trouver la structure la plus légère possible.",
            "automatedTasks": [
                "Optimisation du poids d'acier au mètre carré",
                "Détection automatique des collisions d'armatures dans les nœuds de ferraillage"
            ],
            "emergingSkills": [
                "Utilisation de scripts d'optimisation paramétrique pour alléger les structures"
            ],
            "humanEdge": "L'œil d'ingénieur qui comprend le comportement physique réel de la matière au-delà des résultats informatiques."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la conception des structures doit intégrer des contraintes spécifiques : l'air marin corrosif et humide de la presqu'île de Dakar qui accélère la rouille des armatures en acier, ainsi que les dilatations thermiques causées par les amplitudes de chaleur au soleil.",
            "localSectors": [
                "Bureaux d'études structures de Dakar",
                "Industries de charpente métallique (SENAC, SOCOCIM, Eiffage Métal)",
                "Grands projets de hangars industriels et d'aérogares"
            ],
            "remoteWork": "Très favorable (stations de travail puissantes avec travail en bureau d'études ou à distance).",
            "entrepreneurship": "Création d'un cabinet d'ingénierie structurelle spécialisé dans le calcul aux Eurocodes pour la sous-région ouest-africaine."
        },
        "relatedJobSlugs": [
            "ingenieur-genie-civil",
            "dessinateur-projeteur-en-batiment",
            "charpentier",
            "architecte"
        ],
        "connectedFamilies": [
            "industrie-mecanique",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier Ingénieur structures — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/ingenieur-structures.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "APK — Association pour la Promotion de la Construction Métallique",
                "url": "https://apk-asso.fr/",
                "source": "APK"
            }
        ],
        "sources": [
            "L'Étudiant",
            "APK",
            "CHEBAP"
        ],
        "interests": [
            "donnees-chiffres",
            "technique-outils",
            "construire-fabriquer"
        ],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "La tour Eiffel a été entièrement conçue par des ingénieurs structures qui ont calculé manuellement plus de 18 000 pièces de fer forgé et 2,5 millions de rivets, sans aucun ordinateur !",
            "pourquoi": "Grâce aux formules mathématiques de la résistance des matériaux développées au XIXe siècle, qui restent à la base de nos logiciels actuels.",
            "a_retenir": "L'ingénieur de l'ossature qui porte les rêves des architectes."
        }
    },
    {
        "id": "dessinateur-projeteur-en-batiment",
        "slug": "dessinateur-projeteur-en-batiment",
        "title": "Dessinateur-Projeteur en Bâtiment",
        "aliases": [
            "Projeteur BIM / CAO-DAO",
            "Technicien d'études en dessin du bâtiment",
            "Modeleur projeteur structure et fluides"
        ],
        "icon": "📐",
        "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Ingénierie & Bureaux d'Études",
        "domainId": "ingenierie-bureaux-etudes",
        "subdomain": "Dessin technique & Modélisation CAO/DAO",
        "sectors": [
            "BTP",
            "Ingénierie",
            "Dessin"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "Bac +2 (BTS Bâtiment, BTS FED) à Bac +3 (Licence Pro Modélisation BIM)",
        "salary": "🇫🇷 France : 2 000 - 3 400 € net/mois (~28 000 - 48 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 300 000 - 900 000 FCFA / mois (Bureaux d'études, entreprises de construction de Dakar)",
        "simpleDefinition": "Le dessinateur-projeteur traduit les calculs des ingénieurs et les esquisses des architectes en plans d'exécution ultra-détaillés et maquettes numériques 3D que les ouvriers et chefs de chantier utilisent pour construire l'ouvrage.",
        "shortDescription": "Technicien incontournable répertorié par L'Étudiant, il conçoit les plans de ferraillage, de coffrage et d'implantation au millimètre près sur écran d'ordinateur.",
        "longDescription": "Comme décrit dans la fiche métier de L'Étudiant, le dessinateur-projeteur ne se contente pas de tracer des lignes : il est force de proposition technique. Maîtrisant les règles de l'art constructif, il vérifie que les tuyauteries ne traversent pas les poutres porteuses, calcule les dimensions d'assemblage et intègre toutes les gaines techniques dans la maquette numérique. Ses plans d'exécution (plans de coffrage, plans de ferraillage, coupes de façades) sont le document contractuel de référence sur le chantier.",
        "mainObjective": "Produire des plans d'exécution et maquettes 3D rigoureusement exploitables, sans erreurs de cotes ni conflits géométriques.",
        "companyRole": "Pont graphique et technique indispensable entre le bureau de calcul et les équipes de réalisation sur le terrain.",
        "workEnvironment": [
            "🖥️ Bureaux d'études techniques, agences d'architecture ou entreprises de BTP",
            "💻 Double écran avec logiciels de CAO/DAO de pointe (AutoCAD, Revit, Allplan)",
            "🏗️ Visites ponctuelles sur chantier pour confronter les plans à la réalité du terrain"
        ],
        "missions": [
            "Réaliser les plans de coffrage et de ferraillage des éléments en béton armé à partir des notes de calculs des ingénieurs",
            "Modéliser les réseaux techniques (électricité, plomberie, CVC) dans la maquette numérique BIM",
            "Détecter et résoudre les conflits d'encombrement (clash detection) entre structure et fluides",
            "Établir les nomenclatures de matériaux et les bordereaux de ferraillage (quantités de barres d'acier)",
            "Mettre à jour les plans au fur et à mesure des modifications et éditer les Dossiers d'Ouvrages Exécutés (DOE)"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Édition de plans de coffrage",
                "desc": "Dessin des réservations de gaines techniques sur le plan de plancher du 2e étage sous Revit."
            },
            {
                "time": "10:45",
                "title": "Détection d'interférences BIM",
                "desc": "Revue sous Navisworks : détection d'un conduit de désenfumage traversant une poutre maîtresse et proposition d'un dévoiement."
            },
            {
                "time": "14:00",
                "title": "Bordereau de ferraillage",
                "desc": "Génération automatique de la liste des aciers coupés et façonnés pour la commande auprès de l'usine d'armatures."
            },
            {
                "time": "16:30",
                "title": "Échange avec le chef de chantier",
                "desc": "Explication au téléphone d'un détail de coupe complexe d'étanchéité d'acrotère avant coulage le lendemain."
            }
        ],
        "skills": {
            "technical": [
                "Dessin technique du bâtiment, conventions graphiques et cotation fonctionnelle",
                "Technologie de construction (béton armé, charpente métallique, second œuvre)",
                "Modélisation CAO/DAO 2D et 3D (AutoCAD, Autodesk Revit, Allplan, Tekla)",
                "Démarche collaborative BIM et extraction de quantitatifs"
            ],
            "human": [
                "Rigueur millimétrique, précision et sens aigu de l'observation",
                "Bonne visualisation spatiale et sens pratique de la constructibilité",
                "Patience et aisance dans la communication technique"
            ],
            "tools": [
                "Autodesk Revit / AutoCAD / Allplan",
                "Navisworks (détection de clashs)",
                "Logiciels d'armatures (Cadwork, Armacad)",
                "Traceurs grand format et visionneuses de maquettes numériques"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Bac Pro / STI2D",
                    "title": "Bac Pro Technicien d'Études du Bâtiment ou Bac STI2D",
                    "desc": "Acquisition des bases du dessin d'architecture et de la lecture de plans."
                },
                {
                    "step": "BTS / BUT (Bac +2/+3)",
                    "title": "BTS Bâtiment, BTS Travaux Publics ou BUT Génie Civil",
                    "desc": "Le diplôme de référence pour devenir dessinateur-projeteur autonome en bureau d'études."
                },
                {
                    "step": "Licence Pro (Bac +3)",
                    "title": "Licence Pro Métiers du BTP : Modélisation des Bâtiments et BIM",
                    "desc": "Spécialisation dans les maquettes numériques communicantes et la coordination BIM."
                }
            ],
            "schools": [
                {
                    "name": "Lycées techniques préparant le BTS Bâtiment et BTS TP — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "IUT Génie Civil — Construction Durable (Bordeaux, Cergy, Lyon) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) / Génie Civil — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification Professionnelle Autodesk Certified Professional (Revit / AutoCAD)",
                "Certificat de Projeteur BIM",
                "Habilitation AIPR Concepteur"
            ],
            "schoolSubjects": [
                "Dessin assisté par ordinateur",
                "Résistance des matériaux appliquée",
                "Technologie du bâtiment",
                "Métrés et études de prix"
            ]
        },
        "career": {
            "sectors": [
                "Bureaux d'études techniques en bâtiment et génie civil",
                "Agences d'architecture et d'urbanisme",
                "Grandes entreprises générales de construction",
                "Fabricants de composants préfabriqués en béton ou métal"
            ],
            "employerTypes": [
                "Bureaux d'études structures",
                "Entreprises générales BTP",
                "Cabinets d'architectes"
            ],
            "evolution": "Dessinateur débutant ➔ Dessinateur-projeteur confirmé ➔ Projeteur coordinateur BIM ➔ Responsable bureau d'études dessin",
            "pros": "Métier très recherché avec forte sécurité de l'emploi, rôle pivot dans les projets, évolution naturelle vers le BIM Management.",
            "cons": "Travail prolongé assis devant des écrans, stress lors des remises urgentes de dossiers d'appels d'offres."
        },
        "gettingStarted": {
            "beginnerProject": "S'entraîner à lire un plan d'architecte et repérer les cotations, les épaisseurs de murs et le sens d'ouverture des portes.",
            "intermediateProject": "Dessiner le plan 2D côté d'une maison individuelle de plain-pied sur AutoCAD ou un logiciel libre.",
            "advancedProject": "Modéliser un bâtiment R+2 complet en 3D sous Revit avec dalles, poteaux et escaliers paramétriques.",
            "portfolioIdeas": [
                "Dossier de plans d'exécution de coffrage et ferraillage",
                "Maquette numérique 3D exportée au format IFC"
            ]
        },
        "aiImpact": {
            "level": "Révolutionnaire",
            "summary": "L'IA génère automatiquement des plans de ferraillage optimisés et reporte les modifications en temps réel sur l'ensemble des coupes et façades.",
            "automatedTasks": [
                "Génération automatique des cotes et annotations de plans",
                "Conversion automatique de croquis papier en maquette 3D"
            ],
            "emergingSkills": [
                "Supervision des outils d'automatisation de production de plans par IA"
            ],
            "humanEdge": "La compréhension de la réalité du terrain et des contraintes concrètes des coffreurs lors du coulage du béton."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la transition accélérée vers le numérique et le BIM dans les bureaux d'études de Dakar entraîne une forte pénurie de dessinateurs-projeteurs qualifiés sur Revit, indispensables pour modéliser les grands immeubles de bureaux et les résidences modernes de la capitale.",
            "localSectors": [
                "Bureaux d'ingénierie et d'architecture de Dakar",
                "Entreprises de BTP (CSE, Eiffage Sénégal, Consortium d'Entreprises)",
                "Cabinet de modélisation BIM"
            ],
            "remoteWork": "Très favorable (modélisation CAO/DAO sur station de travail facilement réalisable en télétravail).",
            "entrepreneurship": "Création d'un studio indépendant de dessin technique et de modélisation de maquettes numériques BIM en sous-traitance."
        },
        "relatedJobSlugs": [
            "bim-manager",
            "ingenieur-structures",
            "ingenieur-genie-civil",
            "architecte"
        ],
        "connectedFamilies": [
            "numerique-ia",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier Dessinateur-projeteur — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/dessinateur-projeteur-en-batiment.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "Autodesk France — Ressources CAO et BIM",
                "url": "https://www.autodesk.fr/",
                "source": "Autodesk"
            }
        ],
        "sources": [
            "L'Étudiant",
            "FFB",
            "ESP Dakar"
        ],
        "interests": [
            "technique-outils",
            "donnees-chiffres",
            "concevoir-creer"
        ],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Dans le bâtiment moderne, le passage des plans papier en 2D à la maquette numérique intelligente (BIM) permet de réduire jusqu'à 80% des erreurs de chantier causées par des canalisations mal positionnées.",
            "pourquoi": "Le logiciel alerte immédiatement le projeteur en rouge dès qu'un tuyau entre en collision avec une poutre en béton.",
            "a_retenir": "Le cartographe du bâtiment qui traduit les calculs en plans d'action concrets."
        }
    },
    {
        "id": "acousticien-batiment",
        "slug": "acousticien-batiment",
        "title": "Acousticien du Bâtiment & Environnement",
        "aliases": [
            "Ingénieur acousticien",
            "Consultant en acoustique architecturale",
            "Technicien mesures de bruit"
        ],
        "icon": "🔊",
        "image": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Ingénierie & Bureaux d'Études",
        "domainId": "ingenierie-bureaux-etudes",
        "subdomain": "Ingénierie acoustique & Confort sonore",
        "sectors": [
            "BTP",
            "Ingénierie",
            "Environnement"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "Bac +3 (Licence Pro Acoustique) à Bac +5 (Master ou Ingénieur Acoustique)",
        "salary": "🇫🇷 France : 2 500 - 4 600 € net/mois (~35 000 - 68 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 450 000 - 1 400 000 FCFA / mois (Bureaux d'études environnement, insonorisation de salles de spectacles et data centers)",
        "simpleDefinition": "L'acousticien étudie la propagation du son et des vibrations pour concevoir des salles de spectacle à l'acoustique parfaite, isoler les logements contre les bruits extérieurs (avions, trains, trafic) et protéger les salariés du vacarme des machines industrielles.",
        "shortDescription": "Expert du son et du confort répertorié par L'Étudiant, il mesure les décibels, choisit les isolants et façonne l'ambiance sonore des édifices.",
        "longDescription": "Comme mis en avant dans la présentation des métiers du BTP de L'Étudiant, l'acousticien allie physique des ondes et ingénierie de la construction. Muni de sonomètres et de générateurs de bruit rose, il mesure les temps de réverbération dans les pièces et traque les ponts phoniques. Il prescrit aux architectes les matériaux absorbants adéquats (panneaux de laine minérale perforés, doubles vitrages asymétriques, chapes flottantes désolidarisées) pour respecter la réglementation acoustique (NRA) et concevoir des auditoriums ou des bureaux calmes.",
        "mainObjective": "Garantir un confort sonore optimal dans les espaces bâtis en réduisant les bruits d'impact, les bruits aériens et les temps d'écho.",
        "companyRole": "Garant du confort acoustique et de la conformité réglementaire contre les nuisances sonores.",
        "workEnvironment": [
            "🔬 Bureaux d'études acoustiques indépendants ou départements d'ingénierie globale",
            "🎭 Salles de concert, théâtres, studios d'enregistrement et cinémas",
            "🏢 Chantiers de logements collectifs et abords d'infrastructures routières ou aéroportuaires"
        ],
        "missions": [
            "Réaliser des campagnes de mesures acoustiques in situ à l'aide de sonomètres de précision étalonnés",
            "Modéliser la propagation sonore et la réverbération dans les volumes complexes sous simulateur 3D",
            "Définir la nature et l'épaisseur des matériaux isolants phoniques et des silencieux de ventilation",
            "Contrôler la conformité acoustique des logements neufs lors de la réception des travaux (attestation réglementaire)",
            "Élaborer des cartes de bruit environnemental pour les collectivités autour des voies ferrées et aéroports"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Campagne de mesure acoustique",
                "desc": "Mesure des bruits d'impact d'une chape flottante à l'aide d'une machine à chocs réglementaire dans un immeuble neuf."
            },
            {
                "time": "11:00",
                "title": "Modélisation sous CATT-Acoustic",
                "desc": "Calcul du temps de réverbération (RT60) d'une salle polyvalente de 500 places pour optimiser l'intelligibilité de la parole."
            },
            {
                "time": "14:30",
                "title": "Prescription de silencieux CVC",
                "desc": "Dimensionnement de pièges à son à baffles absorbants sur la centrale de traitement d'air d'un hôtel de luxe."
            },
            {
                "time": "16:45",
                "title": "Rédaction du rapport d'expertise",
                "desc": "Finalisation du diagnostic acoustique d'un restaurant d'entreprise pour réduire le brouhaha de midi."
            }
        ],
        "skills": {
            "technical": [
                "Physique ondulatoire, propagation acoustique et mécanique vibratoire",
                "Réglementation acoustique des bâtiments (NRA) et normes de bruit au travail",
                "Métrologie acoustique (sonomètres intégrateurs classe 1, analyseurs par bande d'octave)",
                "Logiciels de simulation acoustique (CATT-Acoustic, Odeon, CadnaA)"
            ],
            "human": [
                "Oreille musicale et sensibilité fine aux phénomènes sonores",
                "Rigueur scientifique dans le protocole de mesure et l'analyse de données",
                "Sens de la pédagogie pour expliquer des grandeurs logarithmiques (décibels) aux clients"
            ],
            "tools": [
                "Sonomètres de précision de classe 1 (Brüel & Kjær, Norsonic)",
                "Sources sonores dodécaédriques omnidirectionnelles et machines à chocs",
                "Logiciels de simulation (Odeon, CATT-Acoustic, CadnaA, SoundPLAN)",
                "Calibreurs acoustiques acoustiques de référence"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "BUT / Licence (Bac +3)",
                    "title": "BUT Mesures Physiques ou Licence Pro Acoustique et Vibrations",
                    "desc": "Apprentissage des capteurs, de l'acquisition de signaux sonores et de la métrologie."
                },
                {
                    "step": "Master / Ingénieur (Bac +5)",
                    "title": "Master Acoustique ou Diplôme d'Ingénieur en Acoustique (ENSIM, UTC)",
                    "desc": "Formation d'excellence en aéroacoustique, acoustique des salles et traitement du signal sonore."
                },
                {
                    "step": "Doctorat (Bac +8)",
                    "title": "Doctorat en Acoustique Physique",
                    "desc": "Recherche avancée sur les métamatériaux acoustiques absorbants."
                }
            ],
            "schools": [
                {
                    "name": "ENSIM Le Mans (École Nationale Supérieure d'Ingénieurs du Mans) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université du Mans (Institut d'Acoustique) / Sorbonne Université — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) / Physique appliquée — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Université Cheikh Anta Diop (UCAD Dakar) / Département de Physique — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification d'auditeur acoustique qualifié",
                "Agrément ministériel pour la mesure de bruit environnemental",
                "Certification Brüel & Kjær Measurement Specialist"
            ],
            "schoolSubjects": [
                "Physique des ondes",
                "Acoustique architecturale",
                "Traitement du signal",
                "Psychoacoustique"
            ]
        },
        "career": {
            "sectors": [
                "Bureaux d'études spécialisés en acoustique du bâtiment",
                "Sociétés d'ingénierie pluridisciplinaires",
                "Industries aéronautiques et automobiles (insonorisation de cabine)",
                "Cabinets d'architecture prestigieux"
            ],
            "employerTypes": [
                "Bureaux d'études acoustiques",
                "Cabinets d'ingénierie du bâtiment",
                "Organismes d'audit environnemental"
            ],
            "evolution": "Technicien de mesure acoustique ➔ Ingénieur acousticien d'études ➔ Chef de projet acoustique architecturale ➔ Directeur d'un pôle d'ingénierie environnementale",
            "pros": "Spécialité rare et valorisée, équilibre entre mesures concrètes sur site et calculs numériques, mission directe pour la santé publique.",
            "cons": "Nécessité de réaliser des mesures de nuit ou hors heures d'ouverture pour éviter les bruits parasites."
        },
        "gettingStarted": {
            "beginnerProject": "Télécharger une application sonomètre sur smartphone et mesurer les variations de décibels entre sa chambre et une rue animée.",
            "intermediateProject": "Calculer l'affaiblissement acoustique théorique d'un mur en briques de 20 cm selon la loi de masse.",
            "advancedProject": "Modéliser la réponse impulsionnelle d'une pièce sous un logiciel libre d'acoustique et proposer des rideaux acoustiques pour corriger l'écho.",
            "portfolioIdeas": [
                "Rapport d'audit acoustique d'un espace de travail partagé",
                "Étude d'isolation phonique d'une salle de répétition musicale"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'IA sépare automatiquement les différentes sources de bruit sur un enregistrement (voix, moteurs, oiseaux) pour isoler les nuisances précises.",
            "automatedTasks": [
                "Dépouillement automatisé des enregistrements de bruit de longue durée",
                "Filtrage numérique des signaux sonores parasites"
            ],
            "emergingSkills": [
                "Utilisation de réseaux de neurones pour la classification automatique des ambiances sonores"
            ],
            "humanEdge": "La perception subjective du confort par l'oreille humaine que les seules courbes de décibels ne peuvent pas décrire."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le confort acoustique devient une priorité majeure dans les grands projets hôteliers, les centres d'appels, les salles de spectacles prestigieuses (Grand Théâtre National de Dakar) et les hôpitaux proches des grandes artères saturées de la capitale.",
            "localSectors": [
                "Grands hôtels et centres de conférences de Dakar",
                "Studios d'enregistrement de musique et médias audiovisuels",
                "Bureaux d'ingénierie d'infrastructures de transport"
            ],
            "remoteWork": "Hybride (mesures au sonomètre sur le terrain puis modélisation et rapports en télétravail).",
            "entrepreneurship": "Création d'un cabinet d'ingénierie acoustique spécialisé dans l'insonorisation industrielle et le confort des bureaux à Dakar."
        },
        "relatedJobSlugs": [
            "ingenieur-genie-civil",
            "architecte",
            "technicien-etudes-thermiques-batiment"
        ],
        "connectedFamilies": [
            "sciences-biotech",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Métiers de l'acoustique et du bâtiment — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "SFA — Société Française d'Acoustique",
                "url": "https://www.sfa.asso.fr/",
                "source": "SFA"
            }
        ],
        "sources": [
            "L'Étudiant",
            "SFA",
            "CidB (Centre d'information sur le Bruit)"
        ],
        "interests": [
            "sciences-recherche",
            "donnees-chiffres",
            "arts-design"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "L'échelle des décibels est logarithmique : augmenter le niveau sonore de seulement 3 décibels équivaut exactement à doubler l'énergie sonore émise !",
            "pourquoi": "C'est pour cela qu'une réduction de seulement 5 à 10 décibels grâce à un bon isolant acoustique procure une sensation de calme spectaculaire.",
            "a_retenir": "Le sculpteur du son et du silence dans le monde bâti."
        }
    },
    {
        "id": "metreur-economiste-construction",
        "slug": "metreur-economiste-construction",
        "title": "Métreur / Économiste de la Construction",
        "aliases": [
            "Technicien métreur",
            "Économiste du BTP",
            "Chargé de métrés et de chiffrage"
        ],
        "icon": "📊",
        "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Économie de la Construction & Métrés",
        "domainId": "economie-construction-metres",
        "subdomain": "Métrés, Chiffrage & Estimation financière",
        "sectors": [
            "BTP",
            "Économie",
            "Finance"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "Bac +2 (BTS Management Économique de la Construction - MEC) à Bac +3 (Licence Pro)",
        "salary": "🇫🇷 France : 2 200 - 3 800 € net/mois (~32 000 - 55 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 350 000 - 1 100 000 FCFA / mois (Entreprises de BTP, cabinets d'économistes à Dakar)",
        "simpleDefinition": "Le métreur et économiste de la construction chiffre le coût exact d'un projet de bâtiment en calculant les quantités précises de matériaux nécessaires (mètres cubes de béton, tonnes d'acier, mètres carrés de carrelage) et le temps de main-d'œuvre requis.",
        "shortDescription": "Comptable et technicien du chantier documenté par L'Étudiant, il évalue les coûts au centime près pour garantir qu'un chantier soit rentable et ne dépasse pas son budget.",
        "longDescription": "Comme décrit dans les fiches métiers de L'Étudiant, le métreur / économiste de la construction intervient dès la conception pour fixer l'enveloppe budgétaire prévisionnelle. Sur la base des plans d'architecte et des maquettes BIM, il réalise le métré quantitatif (avant-métré), décompose chaque opération en sous-détail de prix (fournitures, location d'engins, heures d'ouvriers) et rédige le devis quantitatif estimatif (DQE). Sur le chantier, il contrôle les dépenses réelles et vérifie les factures des sous-traitants pour éviter les dérives financières.",
        "mainObjective": "Déterminer avec une rigueur mathématique le coût de construction le plus juste et veiller à la rentabilité économique du projet.",
        "companyRole": "Garant financier et contrôleur budgétaire de l'opération de construction.",
        "workEnvironment": [
            "🏢 Cabinets d'économie de la construction indépendants ou cabinets d'architectes",
            "💻 Stations de chiffrage spécialisées interconnectées aux maquettes BIM",
            "🏗️ Visites de chantiers pour constater les quantités d'ouvrages réellement exécutées"
        ],
        "missions": [
            "Calculer les surfaces, volumes et linéaires de chaque élément du bâtiment d'après les plans",
            "Élaborer le cadre de décomposition du prix global et forfaitaire (DPGF)",
            "Chiffrer le coût des matériaux, de la main-d'œuvre et des matériels selon les cours du marché",
            "Participer à la rédaction des pièces financières pour les dossiers d'appels d'offres",
            "Vérifier les situations de travaux mensuelles des entreprises avant paiement par le client"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Extraction des quantités sur maquette BIM",
                "desc": "Extraction automatique sous Revit des volumes de béton armé et des surfaces d'isolation thermique par l'extérieur (ITE)."
            },
            {
                "time": "10:30",
                "title": "Sous-détail de prix gros œuvre",
                "desc": "Calcul du prix unitaire du mètre carré de voile banché en intégrant le coût du béton C25/30, des armatures et des heures de coffreurs."
            },
            {
                "time": "14:00",
                "title": "Comparatif d'offres sous-traitants",
                "desc": "Analyse comparative de trois devis d'étanchéité de toiture pour vérifier la conformité avec le cahier des charges."
            },
            {
                "time": "16:30",
                "title": "Contrôle d'avancement sur chantier",
                "desc": "Relevé des surfaces de cloisons plaquées posées dans la semaine pour valider l'acompte financier de l'entreprise."
            }
        ],
        "skills": {
            "technical": [
                "Technologie générale de la construction et terminologie du gros œuvre et second œuvre",
                "Méthodologie des métrés, sous-détails de prix et déboursés secs",
                "Logiciels de métrés et devis BTP (BatiPrix, DeviSOC, Mensura, Attic+)",
                "Lecture et extraction de données quantitatives depuis les maquettes BIM (IFC)"
            ],
            "human": [
                "Rigueur absolue avec les chiffres et sens de l'exactitude",
                "Sens de l'analyse économique et esprit de synthèse",
                "Bon relationnel pour négocier avec les artisans et fournisseurs"
            ],
            "tools": [
                "DeviSOC / Attic+ / BatiPrix",
                "Autodesk Revit (module quantitatifs)",
                "Excel avancé (tableaux croisés dynamiques, macros de chiffrage)",
                "Règles et échelles de métrés numériques"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Bac Pro / STI2D",
                    "title": "Bac Pro Technicien d'Études du Bâtiment (option études de prix)",
                    "desc": "Bases du dessin et du calcul de surfaces de chantier."
                },
                {
                    "step": "BTS (Bac +2)",
                    "title": "BTS Management Économique de la Construction (MEC - ex-BTS EEC)",
                    "desc": "Le diplôme d'État roi pour exercer comme métreur ou économiste de la construction."
                },
                {
                    "step": "Licence Pro (Bac +3)",
                    "title": "Licence Pro Économie de la Construction en Maîtrise d'Œuvre",
                    "desc": "Accès direct aux responsabilités de chef de projet économique en cabinet."
                }
            ],
            "schools": [
                {
                    "name": "Lycées techniques préparant le BTS MEC — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "IUT Génie Civil — Filière Économie de la Construction — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Centre d'Entrepreneuriat et de Développement Technique (CEDT Le G15 Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Qualification professionnelle OPQTECC",
                "Certification Progiciels de Chiffrage BTP",
                "Certification Métreur BIM"
            ],
            "schoolSubjects": [
                "Économie de la construction",
                "Technologie du bâtiment",
                "Droit des marchés publics",
                "Métrés et études de prix"
            ]
        },
        "career": {
            "sectors": [
                "Cabinets indépendants d'économistes de la construction",
                "Entreprises générales de bâtiment et de TP (services études de prix)",
                "Agences d'architecture et de maîtrise d'œuvre",
                "Bailleurs sociaux et promoteurs immobiliers"
            ],
            "employerTypes": [
                "Cabinets d'économie de la construction",
                "Services devis de majors du BTP",
                "Collectivités locales"
            ],
            "evolution": "Métreur débutant ➔ Économiste de la construction confirmé ➔ Responsable service études de prix ➔ Directeur d'un cabinet d'économie",
            "pros": "Métier stable très recherché par les entreprises, responsabilité financière concrète, travail régulier sans déplacements lointains.",
            "cons": "Pression sur la rentabilité (une erreur de quantité peut faire perdre de l'argent au chantier), travail sur tableurs récurrent."
        },
        "gettingStarted": {
            "beginnerProject": "Calculer la surface totale de carrelage et le nombre de carreaux de 60x60 cm nécessaires pour paver un salon avec 10% de chutes.",
            "intermediateProject": "Établir le métré complet d'un garage individuel (fondations, parpaings, charpente bois, tuiles).",
            "advancedProject": "Construire un sous-détail de prix complet pour un mètre cube de béton armé coulé en place.",
            "portfolioIdeas": [
                "Cadre de décomposition de prix (DPGF) chiffré sous Excel",
                "Avant-métré d'une maison individuelle sous DeviSOC"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA extrait automatiquement les quantités depuis les plans PDF ou maquettes 3D et actualise les prix selon l'inflation des matières premières.",
            "automatedTasks": [
                "Reconnaissance automatique des surfaces de pièces",
                "Mise à jour en temps réel des bases de prix unitaires"
            ],
            "emergingSkills": [
                "Supervision des outils d'estimation automatique de coûts par IA"
            ],
            "humanEdge": "L'anticipation des aléas réels de chantier et la stratégie de négociation commerciale avec les fournisseurs."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la forte volatilité des cours du ciment, du fer à béton importé et du sable de carrière rend le rôle du métreur crucial pour éviter les arrêts de chantiers pour cause de faillite budgétaire dans les projets de résidences et de bureaux à Dakar et Diamniadio.",
            "localSectors": [
                "Entreprises sénégalaises de BTP (CSE, Eiffage Sénégal, Consortium d'Entreprises)",
                "Cabinets d'économie et d'ingénierie de Dakar",
                "Promoteurs immobiliers de la zone des Almadies"
            ],
            "remoteWork": "Très favorable (chiffrage et métrés réalisables en télétravail).",
            "entrepreneurship": "Création d'un cabinet de métrés et d'assistance aux appels d'offres pour les artisans et PME du BTP au Sénégal."
        },
        "relatedJobSlugs": [
            "ingenieur-etudes-de-prix",
            "conducteur-de-travaux",
            "charge-affaires-btp",
            "dessinateur-projeteur-en-batiment"
        ],
        "connectedFamilies": [
            "finance-fintech",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier Métreur — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/metreur.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "UNTEC — Union Nationale des Économistes de la Construction",
                "url": "https://www.untec.com/",
                "source": "UNTEC"
            }
        ],
        "sources": [
            "L'Étudiant",
            "UNTEC",
            "OPQTECC"
        ],
        "interests": [
            "donnees-chiffres",
            "technique-outils",
            "coordonner-gerer"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Un métreur expérimenté est capable de repérer une erreur de devis de plus de 50 000 euros en quelques coups d'œil simplement en vérifiant les ratios d'acier par mètre cube de béton.",
            "pourquoi": "Ces ratios empiriques tirés de l'expérience lui permettent de vérifier instantanément la cohérence d'un devis complexe.",
            "a_retenir": "Le maître des coûts qui transforme les plans en budget équilibré."
        }
    },
    {
        "id": "ingenieur-etudes-de-prix",
        "slug": "ingenieur-etudes-de-prix",
        "title": "Ingénieur Études de Prix BTP",
        "aliases": [
            "Ingénieur chiffrage BTP",
            "Responsable bureau d'études de prix",
            "Estimator BTP grand projet"
        ],
        "icon": "📈",
        "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Économie de la Construction & Métrés",
        "domainId": "economie-construction-metres",
        "subdomain": "Chiffrage stratégique & Appels d'offres",
        "sectors": [
            "BTP",
            "Ingénierie",
            "Finance"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "Bac +5 (Diplôme d'Ingénieur en Génie Civil / BTP ou Master Économie de la Construction)",
        "salary": "🇫🇷 France : 3 100 - 5 500 € net/mois (~44 000 - 80 000 € brut/an, Source : L'Étudiant / APEC) • 🇸🇳 Sénégal : 600 000 - 2 000 000 FCFA / mois (Direction technique des grands groupes de BTP)",
        "simpleDefinition": "L'ingénieur études de prix conçoit la stratégie financière et technique pour remporter les grands appels d'offres de construction (autoroutes, hôpitaux, tours, ponts), en calculant le prix le plus compétitif pour l'entreprise tout en garantissant sa marge bénéficiaire.",
        "shortDescription": "Profil stratégique majeur mis en valeur par L'Étudiant, il combine sens des affaires, génie civil et négociation pour faire gagner des chantiers de plusieurs dizaines de millions d'euros à son entreprise.",
        "longDescription": "Comme décrit dans la fiche métier de L'Étudiant, l'ingénieur études de prix intervient avant même le premier coup de pioche. Dès la publication d'un appel d'offres public ou privé, il étudie en détail le cahier des charges, propose des variantes techniques innovantes plus économiques, chiffre les modes opératoires et négocie avec les sous-traitants et fournisseurs. C'est sur son chiffrage que la direction générale s'appuie pour fixer le prix de vente final déposé lors de l'offre.",
        "mainObjective": "Proposer une offre technique et financière gagnante qui séduise le client tout en assurant une rentabilité solide à l'entreprise de construction.",
        "companyRole": "Stratège commercial et financier permettant à l'entreprise de remporter de nouveaux contrats majeurs.",
        "workEnvironment": [
            "🏢 Siège social des entreprises générales de BTP (bureau d'études de prix)",
            "💻 Simulateurs financiers et bases de données de ratios de productivité",
            "🤝 Réunions de soutenances orales devant les jurys de maîtres d'ouvrage"
        ],
        "missions": [
            "Examiner les dossiers d'appels d'offres et évaluer les risques techniques, géologiques et financiers",
            "Consulter le marché des fournisseurs et sous-traitants pour obtenir les meilleurs tarifs",
            "Imaginer des variantes techniques plus économiques (changement de procédé constructif ou de matériau)",
            "Établir le déboursé sec prévisionnel complet et proposer la marge bénéficiaire à la direction générale",
            "Participer aux séances de soutenance et de négociation avec le client jusqu'à la signature du marché"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Analyse d'un appel d'offres d'hôpital",
                "desc": "Examen du cahier des charges d'un hôpital de 40 millions d'euros pour repérer les risques de pénalités de retard."
            },
            {
                "time": "11:00",
                "title": "Proposition de variante technique",
                "desc": "Étude comparative : remplacer des fondations sur pieux battus par des inclusions rigides pour faire économiser 450 000 euros au client."
            },
            {
                "time": "14:30",
                "title": "Bouclage financier de l'offre",
                "desc": "Intégration des devis des lots techniques (électricité, plomberie) et calage du coefficient de vente final."
            },
            {
                "time": "17:00",
                "title": "Comité d'engagement de direction",
                "desc": "Présentation du dossier au directeur général pour valider le montant déposé à l'appel d'offres."
            }
        ],
        "skills": {
            "technical": [
                "Expertise approfondie des méthodes et cadences de construction BTP",
                "Chiffrage analytique, déboursé sec, frais de chantier et coefficients de vente",
                "Droit des marchés publics (Code de la commande publique) et marchés privés (norme NF P 03-001)",
                "Analyse des risques contractuels et clauses d'indexation de prix"
            ],
            "human": [
                "Fibre commerciale et sens aigu de la stratégie concurrentielle",
                "Résistance au stress lors des dates limites impératives de dépôts d'offres",
                "Force de conviction pour défendre l'offre technique en soutenance"
            ],
            "tools": [
                "Progiciels de chiffrage BTP (Candy, Onaya, Mensura, DeviSOC)",
                "Bases de données de prix et ratios internes d'entreprise",
                "Outils de planification d'études (MS Project)",
                "Plateformes d'appels d'offres dématérialisées"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Classes Préparatoires / Licence",
                    "title": "CPGE Math-Physique ou Licence Génie Civil",
                    "desc": "Bases solides en mathématiques, calculs de structures et physique."
                },
                {
                    "step": "Diplôme d'Ingénieur (Bac +5)",
                    "title": "Ingénieur en Génie Civil / Travaux Publics (ESTP, INSA, Centrale)",
                    "desc": "Formation de référence pour maîtriser à la fois la technique et la gestion financière."
                },
                {
                    "step": "Double Diplôme Ingénieur-Manager",
                    "title": "Master Spécialisé en Management des Entreprises de BTP",
                    "desc": "Atout majeur pour piloter les négociations financières de haut niveau."
                }
            ],
            "schools": [
                {
                    "name": "ESTP Paris / École des Ponts ParisTech — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "INSA Lyon / Polytech / Centrale — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Polytechnique de Thiès (EPT) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification en Chiffrage de Projets BTP Complexes",
                "Agrément Marchés Publics et Concessions",
                "Certification Risk Management BTP"
            ],
            "schoolSubjects": [
                "Économie de projet",
                "Procédés généraux de construction",
                "Droit des marchés",
                "Analyse financière"
            ]
        },
        "career": {
            "sectors": [
                "Majors du BTP (Vinci, Bouygues, Eiffage, Spie Batignolles)",
                "Grandes entreprises de terrassement et travaux publics",
                "Promoteurs immobiliers et contractants généraux"
            ],
            "employerTypes": [
                "Directions études de majors du BTP",
                "Entreprises générales régionales",
                "Cabinets de conseil en chiffrage"
            ],
            "evolution": "Ingénieur études de prix junior ➔ Responsable pôle études de prix ➔ Directeur du bureau d'études ➔ Directeur commercial de filiale BTP",
            "pros": "Poste au cœur de la stratégie de l'entreprise, participation directe aux victoires commerciales, travail stimulant intellectuellement.",
            "cons": "Pics de stress intenses la veille de la clôture des appels d'offres, déception inévitable lorsqu'une offre travaillée pendant des semaines n'est pas retenue."
        },
        "gettingStarted": {
            "beginnerProject": "Analyser un appel d'offres public téléchargeable librement sur une plateforme de collectivité.",
            "intermediateProject": "Chiffrer le coût complet de réalisation d'un parking public de 200 places avec enrobé et éclairage.",
            "advancedProject": "Proposer une variante technique divisant par deux la quantité de déblais évacués sur un projet de terrassement.",
            "portfolioIdeas": [
                "Mémoire technique complet remis pour un appel d'offres fictif",
                "Analyse comparative de sous-traitance pour un chantier"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA analyse les données de milliers d'appels d'offres passés pour recommander le prix de vente optimal avec la plus haute probabilité de victoire.",
            "automatedTasks": [
                "Lecture automatique des centaines de pages de CCTP par IA",
                "Estimation prédictive des prix des matières premières à 2 ans"
            ],
            "emergingSkills": [
                "Utilisation de modèles d'IA prédictive pour le positionnement de prix concurrentiel"
            ],
            "humanEdge": "L'intelligence relationnelle avec le client et l'audace d'inventer une méthode constructive inédite."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les ingénieurs études de prix jouent un rôle capital lors des grands appels d'offres internationaux financés par la Banque Mondiale, la BAD ou l'État (autoroutes Mbour-Fatick-Kaolack, modernisation du port de Dakar, ponts régionaux), où la moindre erreur d'anticipation de change monétaire ou de douane peut menacer la rentabilité.",
            "localSectors": [
                "Grands majors du BTP (Eiffage Sénégal, CSE, Sogea-Satom, Sinohydro)",
                "AGEROUTE (Direction des Marchés)",
                "Promoteurs privés de la zone UEMOA"
            ],
            "remoteWork": "Très favorable (dossiers traités au bureau et en télétravail avec outils cloud).",
            "entrepreneurship": "Création d'une agence de conseil en chiffrage et montage de dossiers d'appels d'offres pour les entreprises africaines du BTP."
        },
        "relatedJobSlugs": [
            "metreur-economiste-construction",
            "ingenieur-dans-le-btp",
            "conducteur-de-travaux",
            "charge-affaires-btp"
        ],
        "connectedFamilies": [
            "finance-fintech",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier Ingénieur études de prix — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/ingenieur-etudes-de-prix_1.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "EGF BTP — Entreprises Générales de France BTP",
                "url": "https://www.egfbtp.com/",
                "source": "EGF BTP"
            }
        ],
        "sources": [
            "L'Étudiant",
            "EGF BTP",
            "FNTP"
        ],
        "interests": [
            "donnees-chiffres",
            "coordonner-gerer",
            "technique-outils"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Sur un appel d'offres international de plusieurs dizaines de millions d'euros, la victoire se joue parfois à moins de 0,5% d'écart de prix entre les finalistes.",
            "pourquoi": "C'est l'ingéniosité de l'ingénieur études de prix à trouver une astuce logistique ou technique qui fait la différence décisive.",
            "a_retenir": "Le stratège qui gagne les chantiers avant même qu'ils ne commencent."
        }
    },
    {
        "id": "geometre-topographe",
        "slug": "geometre-topographe",
        "title": "Géomètre-Topographe",
        "aliases": [
            "Technicien topographe",
            "Ingénieur géomètre",
            "Opérateur topographe scanner 3D"
        ],
        "icon": "🗺️",
        "image": "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Géomètre, Topographie & Cartographie",
        "domainId": "geometre-topographie",
        "subdomain": "Topographie, Implantation & Foncier",
        "sectors": [
            "BTP",
            "Topographie",
            "Géomatique"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "Bac Pro à Bac +2 (BTS Métiers du Géomètre-Topographe) jusqu'à Bac +5 (Ingénieur Géomètre)",
        "salary": "🇫🇷 France : 2 000 - 3 800 € net/mois (~28 000 - 55 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 350 000 - 1 200 000 FCFA / mois (Ordre des Géomètres Experts du Sénégal - OGES, cadastre, grands travaux)",
        "simpleDefinition": "Le géomètre-topographe mesure le relief de la Terre au millimètre près à l'aide d'instruments lasers, satellites (GPS) et drones, délimite légalement les parcelles de terrain et guide l'implantation exacte des ouvrages sur le chantier.",
        "shortDescription": "Premier professionnel à intervenir sur le terrain selon L'Étudiant, il garantit la précision spatiale et juridique sans laquelle aucune construction ne peut démarrer.",
        "longDescription": "Comme décrit dans la fiche métier de L'Étudiant, le géomètre-topographe partage son temps entre les missions de terrain et le travail au bureau. Sur le terrain, muni de tachéomètres électroniques, de récepteurs GNSS et de scanners lasers 3D, il relève l'altitude, les limites et les obstacles naturels d'une parcelle. De retour au bureau, il traite les données géomatiques pour dessiner des cartes topographiques, des plans cadastraux et des modèles 3D de terrain. Sur le chantier, il implante les piquets repères qui indiquent aux engins de terrassement où creuser avec une exactitude chirurgicale.",
        "mainObjective": "Mesurer, cartographier et borner avec une précision absolue les parcelles de terrain et garantir l'implantation spatiale exacte des édifices.",
        "companyRole": "Garant de la vérité géographique, topographique et foncière du sol.",
        "workEnvironment": [
            "🌳 Missions extérieures en pleine nature, en ville ou sur chantiers de BTP",
            "🖥️ Bureau d'études topographiques pour le traitement des nuages de points 3D",
            "✈️ Pilotage de drones de cartographie aérienne et d'appareils de photogrammétrie"
        ],
        "missions": [
            "Effectuer les levés topographiques d'un terrain à l'aide de stations totales robotisées et GPS/GNSS",
            "Implanter sur le chantier les repères d'alignement et de niveau pour les fondations et les voiries",
            "Scanner en 3D des bâtiments existants pour créer des nuages de points d'aide à la modélisation BIM",
            "Délimiter légalement les limites de propriétés foncières privées ou publiques (bornage)",
            "Établir des plans de récolement après travaux pour cartographier précisément les réseaux souterrains"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Implantation d'axes sur chantier",
                "desc": "Mise en station de la station totale robotisée et traçage au laser des axes de piliers de fondation pour les maçons."
            },
            {
                "time": "10:30",
                "title": "Levé par drone photogrammétrique",
                "desc": "Vol programmé d'un drone sur une zone de 15 hectares pour générer le modèle numérique de terrain (MNT) d'un futur lotissement."
            },
            {
                "time": "13:30",
                "title": "Traitement géomatique au bureau",
                "desc": "Assemblage des données GNSS sous Covadis et calcul des courbes de niveau pour estimer les volumes de déblais et remblais."
            },
            {
                "time": "16:00",
                "title": "Rendez-vous de bornage contradictoire",
                "desc": "Pose de bornes physiques OGE entre deux parcelles en présence des deux propriétaires riverains."
            }
        ],
        "skills": {
            "technical": [
                "Topométrie, géodésie, systèmes de projection cartographique (Lambert, UTM)",
                "Maniement des instruments de mesure (stations totales Leica/Trimble, GPS RTK, niveaux optiques)",
                "Photogrammétrie par drone et traitement de nuages de points laser (LiDAR)",
                "Logiciels de dessin et modélisation topographique (AutoCAD, Covadis, Mensura, QGIS)"
            ],
            "human": [
                "Rigueur métrologique absolue (aucune tolérance à l'erreur de mesure)",
                "Goût prononcé pour le travail au grand air et autonomie sur le terrain",
                "Diplomatie et impartialité lors des litiges de bornage entre voisins"
            ],
            "tools": [
                "Stations totales robotisées (Leica Geosystems, Trimble)",
                "Récepteurs GPS/GNSS centimétriques RTK",
                "Drones professionnels de photogrammétrie",
                "Logiciels Covadis / Mensura / QGIS / AutoCAD"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Bac Pro (Bac)",
                    "title": "Bac Pro Métiers du Géomètre-Topographe",
                    "desc": "Acquisition des gestes d'arpentage, de mise en station et de dessin assisté par ordinateur."
                },
                {
                    "step": "BTS (Bac +2)",
                    "title": "BTS Métiers du Géomètre-Topographe et de la Modélisation Numérique (MGTMN)",
                    "desc": "Le diplôme professionnel indispensable pour diriger des opérations topographiques autonomes."
                },
                {
                    "step": "Diplôme d'Ingénieur Géomètre (Bac +5)",
                    "title": "Ingénieur Géomètre (ESGT Le Mans, INSA Strasbourg, ESTP)",
                    "desc": "Formation d'excellence ouvrant droit à l'exercice libéral sous le titre protégé de Géomètre-Expert."
                }
            ],
            "schools": [
                {
                    "name": "ESGT (École Supérieure des Géomètres et Topographes Le Mans) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "INSA Strasbourg (filière topographie) / ESTP Paris — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "École Polytechnique de Thiès (EPT) / Génie Topographique — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Inscription à l'Ordre des Géomètres-Experts (OGE / OGES)",
                "Télépilote de drone professionnel certifié DGAC",
                "Certification Covadis Topographie Avancée"
            ],
            "schoolSubjects": [
                "Trigonométrie et géodésie",
                "Droit foncier et de l'urbanisme",
                "Topométrie appliquée",
                "Systèmes d'Information Géographique (SIG)"
            ]
        },
        "career": {
            "sectors": [
                "Cabinets de géomètres-experts libéraux",
                "Grandes entreprises de travaux publics et terrassement",
                "Sociétés autoroutières et ferroviaires (SNCF Réseau)",
                "Services du cadastre, de l'IGN et collectivités territoriales"
            ],
            "employerTypes": [
                "Cabinets de géomètres-experts",
                "Entreprises générales de TP",
                "Services publics du cadastre"
            ],
            "evolution": "Technicien topographe de terrain ➔ Chef de brigade topographique ➔ Responsable pôle géomatique ➔ Géomètre-Expert libéral associé",
            "pros": "Équilibre parfait entre grand air et technologies informatiques de pointe (drones, 3D), fort sentiment d'autonomie.",
            "cons": "Exposition aux intempéries (chaleur, pluie, boue), port d'équipements lourds sur terrains accidentés."
        },
        "gettingStarted": {
            "beginnerProject": "Observer les bornes en béton ou clous d'arpentage visibles sur les trottoirs et limites de parcelles.",
            "intermediateProject": "Réaliser un levé de dénivelé simple dans un jardin avec un niveau à bulle et une règle graduée.",
            "advancedProject": "Importer un fichier de points topographiques sous QGIS et générer un modèle numérique d'élévation avec courbes de niveau.",
            "portfolioIdeas": [
                "Plan topographique côté réalisé sous Covadis",
                "Orthophotographie haute résolution générée par drone"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA classe automatiquement des milliards de points LiDAR en séparant le sol nu, la végétation et les bâtiments en quelques minutes.",
            "automatedTasks": [
                "Classification automatique des nuages de points laser",
                "Vectorisation automatique des contours de bâtiments"
            ],
            "emergingSkills": [
                "Traitement automatique de données massives issues de scanners 3D mobiles"
            ],
            "humanEdge": "La responsabilité juridique du bornage foncier et le discernement physique sur le terrain."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le géomètre-topographe est une figure centrale pour la sécurisation foncière, la délimitation des baux ruraux du domaine national et la réussite du programme national de cadastre numérique (PROCASEF), ainsi que pour le guidage des terrassements du TER et des autoroutes de l'AGEROUTE.",
            "localSectors": [
                "Ordre des Géomètres Experts du Sénégal (OGES)",
                "Direction du Cadastre et de la Conservation Foncière",
                "Entreprises de grands travaux (Eiffage, CSE)"
            ],
            "remoteWork": "Hybride (terrain physique incontournable / traitement des nuages de points en télétravail).",
            "entrepreneurship": "Création d'un cabinet d'ingénierie topographique et de cartographie par drone à Dakar ou dans les capitales régionales."
        },
        "relatedJobSlugs": [
            "urbaniste",
            "ingenieur-genie-civil",
            "dessinateur-projeteur-en-batiment"
        ],
        "connectedFamilies": [
            "mines-geosciences",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier Géomètre-topographe — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/geometre-topographe.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "Ordre des Géomètres-Experts (OGE France)",
                "url": "https://www.geometre-expert.fr/",
                "source": "OGE"
            }
        ],
        "sources": [
            "L'Étudiant",
            "OGE France",
            "OGES Sénégal"
        ],
        "interests": [
            "sport-plein-air",
            "technique-outils",
            "donnees-chiffres"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Les géomètres-topographes utilisent des tachéomètres lasers capables de mesurer une distance de 1 kilomètre avec une précision inférieure à 1 millimètre.",
            "pourquoi": "C'est cette précision chirurgicale qui permet aux deux équipes forant un tunnel sous une montagne par chaque côté de se rejoindre pile en face au centimètre près !",
            "a_retenir": "L'œil de lynx qui pose les repères incontestables de chaque construction."
        }
    },
    {
        "id": "urbaniste",
        "slug": "urbaniste",
        "title": "Urbaniste & Aménageur du Territoire",
        "aliases": [
            "Aménageur urbain",
            "Chargé d'études urbaines",
            "Concepteur de villes durables"
        ],
        "icon": "🏙️",
        "image": "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Urbanisme, Paysage & Aménagement",
        "domainId": "urbanisme-amenagement",
        "subdomain": "Planification urbaine & Éco-quartiers",
        "sectors": [
            "BTP",
            "Urbanisme",
            "Aménagement"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "Bac +5 (Master Urbanisme et Aménagement ou Diplôme d'Institut d'Urbanisme)",
        "salary": "🇫🇷 France : 2 400 - 4 800 € net/mois (~34 000 - 72 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 450 000 - 1 600 000 FCFA / mois (Direction de l'Urbanisme, DGPU Diamniadio, agences d'urbanisme privées)",
        "simpleDefinition": "L'urbaniste planifie le développement harmonieux des villes et des territoires : il conçoit l'organisation des quartiers, l'implantation des logements, des commerces, des espaces verts et des transports en commun pour rendre la ville agréable, accessible et résiliente au changement climatique.",
        "shortDescription": "Penseur et chef d'orchestre de la cité mis en avant par L'Étudiant, il conçoit les éco-quartiers de demain à l'échelle de territoires entiers.",
        "longDescription": "Comme mis en lumière dans le dossier BTP et aménagement de L'Étudiant, l'urbaniste travaille à une échelle bien plus large que l'architecte : celle de la ville, de la métropole ou de la région. À la croisée de la géographie, de la sociologie, de l'économie et de l'environnement, il élabore les documents cadres de planification urbaine (PLU, SCoT, PDU). Il imagine les transformations de friches industrielles en éco-quartiers mixtes, favorise les mobilités douces (pistes cyclables, tramways) et concerte les élus, les promoteurs et les citoyens pour bâtir un cadre de vie durable.",
        "mainObjective": "Planifier l'aménagement durable des espaces urbains et ruraux pour équilibrer développement économique, justice sociale et protection de la nature.",
        "companyRole": "Visionnaire territorial et coordinateur des politiques d'aménagement urbain.",
        "workEnvironment": [
            "🏛️ Collectivités territoriales, métropoles et agences d'urbanisme publiques",
            "🏢 Cabinets de conseil privés en urbanisme et aménagement",
            "👥 Réunions publiques de concertation citoyenne et ateliers de concertation avec les élus"
        ],
        "missions": [
            "Élaborer et réviser les documents réglementaires d'urbanisme (Plans Locaux d'Urbanisme - PLU, SCOT)",
            "Concevoir des schémas directeurs d'éco-quartiers et de zones d'aménagement concerté (ZAC)",
            "Étudier l'impact des infrastructures de transport sur le développement des mobilités douces",
            "Organiser la concertation citoyenne et animer les ateliers participatifs avec les riverains",
            "Veiller à la mixité sociale, à la végétalisation urbaine et à la lutte contre les îlots de chaleur"
        ],
        "typicalDay": [
            {
                "time": "09:00",
                "title": "Analyse cartographique sous SIG",
                "desc": "Croisement des couches de densité de population et d'espaces verts pour localiser un futur parc urbain rafraîchissant."
            },
            {
                "time": "11:00",
                "title": "Comité de pilotage éco-quartier",
                "desc": "Présentation aux élus municipaux du plan de circulation apaisée limitant la vitesse à 30 km/h et favorisant les voies piétonnes."
            },
            {
                "time": "14:30",
                "title": "Atelier de concertation citoyenne",
                "desc": "Animation d'un atelier avec les habitants d'un quartier populaire pour co-construire le réaménagement de la place centrale."
            },
            {
                "time": "17:00",
                "title": "Rédaction d'une note d'orientations",
                "desc": "Formalisation des critères environnementaux obligatoires pour les futurs permis de construire du secteur."
            }
        ],
        "skills": {
            "technical": [
                "Droit de l'urbanisme, de l'environnement et des collectivités territoriales",
                "Systèmes d'Information Géographique (QGIS, ArcGIS) et analyse spatiale",
                "Planification des mobilités et transition écologique des métropoles",
                "Méthodologie de concertation publique et de sociologie urbaine"
            ],
            "human": [
                "Vision prospective et capacité à penser la ville à 20 ou 30 ans",
                "Excellente aisance orale, sens de la médiation et diplomatie politique",
                "Sensibilité écologique et volonté de justice sociale"
            ],
            "tools": [
                "QGIS / ArcGIS (Cartographie et SIG)",
                "Illustrator / InDesign (Cartes et livrets de présentation urbaine)",
                "AutoCAD / SketchUp (Schémas de volumétrie urbaine)",
                "Outils d'enquêtes et de consultation citoyenne numérique"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence (Bac +3)",
                    "title": "Licence Géographie, Aménagement du Territoire, Droit ou Architecture",
                    "desc": "Acquisition des fondamentaux en sciences humaines, spatiales et juridiques."
                },
                {
                    "step": "Master Urbanisme (Bac +5)",
                    "title": "Master Urbanisme et Aménagement (Instituts d'Urbanisme - APERAU)",
                    "desc": "La formation universitaire d'excellence reconnue par le Conseil Français des Urbanistes."
                },
                {
                    "step": "Mastère Spécialisé (Bac +6)",
                    "title": "Mastère Spécialisé Ingénierie Urbaine et Villes Durables",
                    "desc": "Spécialisation dans les smart cities et la résilience climatique urbaine."
                }
            ],
            "schools": [
                {
                    "name": "Instituts d'Urbanisme membres de l'APERAU (Paris-Est, Lyon, Bordeaux, Aix) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Sciences Po Paris (École Urbaine) / École des Ponts ParisTech — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Africaine des Métiers de l'Architecture et de l'Urbanisme (EAMAU Lomé) — Régional",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Université Cheikh Anta Diop (UCAD Dakar) / Département de Géographie — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Qualification Professionnelle des Urbanistes (OPQU)",
                "Agrément de programmation urbaine",
                "Certification Villes & Territoires Durables"
            ],
            "schoolSubjects": [
                "Droit de l'urbanisme",
                "Sociologie urbaine",
                "Cartographie SIG",
                "Écologie du paysage urbain"
            ]
        },
        "career": {
            "sectors": [
                "Agences d'urbanisme publiques et sociétés d'économie mixte (SEM)",
                "Collectivités locales (mairies, métropoles, départements)",
                "Cabinets de conseil privés en aménagement urbain",
                "Bailleurs sociaux et grands aménageurs fonciers"
            ],
            "employerTypes": [
                "Agences d'urbanisme",
                "Collectivités territoriales",
                "Sociétés d'aménagement foncier"
            ],
            "evolution": "Chargé d'études urbanisme débutant ➔ Chef de projet ZAC ➔ Directeur d'agence d'urbanisme ➔ Directeur général des services d'aménagement",
            "pros": "Impact direct et visible sur la qualité de vie de milliers d'habitants, vision stratégique globale, diversité des sujets.",
            "cons": "Processus de décision politique parfois très lents, conciliation complexe entre intérêts privés et intérêt général."
        },
        "gettingStarted": {
            "beginnerProject": "Consulter le Plan Local d'Urbanisme (PLU) de sa commune sur le Géoportail de l'Urbanisme et identifier le zonage de son quartier.",
            "intermediateProject": "Cartographier sous QGIS les arrêts de bus et les pistes cyclables d'une ville pour identifier les zones mal desservies.",
            "advancedProject": "Rédiger un diagnostic territorial de 5 pages pour la reconversion d'une friche ferroviaire en éco-quartier mixte.",
            "portfolioIdeas": [
                "Dossier de diagnostic urbain illustré de cartes SIG",
                "Projet d'aménagement d'une trame verte et bleue urbaine"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'analyse des flux de mobilité anonymisés par l'IA permet de simuler en direct les effets de la création d'une nouvelle ligne de transport ou d'un éco-quartier.",
            "automatedTasks": [
                "Analyse des données massives de déplacements urbains",
                "Cartographie automatisée des îlots de chaleur urbains par satellite"
            ],
            "emergingSkills": [
                "Utilisation de jumeaux numériques urbains pour la simulation prospective"
            ],
            "humanEdge": "La médiation démocratique, le sens politique du bien commun et l'écoute humaine des besoins des citoyens."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la croissance démographique fulgurante de Dakar et le désengorgement de la presqu'île ont donné naissance au pôle urbain pionnier de Diamniadio, laboratoire grandeur nature de l'urbanisme africain moderne, tandis que des villes comme Saint-Louis adaptent leur urbanisme à la montée des eaux.",
            "localSectors": [
                "DGPU (Délégation Générale à la Promotion des Pôles Urbains de Diamniadio)",
                "Direction de l'Urbanisme et de l'Architecture (DUA)",
                "Agences de développement communal et mairies de grandes villes sénégalaises"
            ],
            "remoteWork": "Hybride (études de données et SIG en télétravail / réunions de concertation et visites sur le terrain).",
            "entrepreneurship": "Création d'un cabinet d'urbanisme et de géomatique spécialisé dans la planification des villes secondaires d'Afrique de l'Ouest."
        },
        "relatedJobSlugs": [
            "architecte",
            "geometre-topographe",
            "ingenieur-genie-civil"
        ],
        "connectedFamilies": [
            "sciences-politiques",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier Urbaniste — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "OPQU — Office Professionnel de Qualification des Urbanistes",
                "url": "https://www.opqu.org/",
                "source": "OPQU"
            }
        ],
        "sources": [
            "L'Étudiant",
            "OPQU",
            "FNAU"
        ],
        "interests": [
            "societe-culture",
            "nature-environnement",
            "donnees-chiffres"
        ],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "En introduisant des arbres d'ombrage et des toitures végétalisées, les urbanistes parviennent à faire baisser la température d'un quartier de 3 à 5°C lors des canicules estivales.",
            "pourquoi": "Grâce au phénomène naturel d'évapotranspiration des végétaux qui agit comme une climatisation naturelle sans dépenser le moindre watt.",
            "a_retenir": "L'architecte de la cité qui réconcilie l'homme, la ville et la nature."
        }
    },
    {
        "id": "macon",
        "slug": "macon",
        "title": "Maçon",
        "aliases": [
            "Maçon traditionnel",
            "Maçon du gros œuvre",
            "Compagnon maçon"
        ],
        "icon": "🧱",
        "image": "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Gros Œuvre, Maçonnerie & Béton",
        "domainId": "gros-oeuvre-maconnerie",
        "subdomain": "Maçonnerie, Murs porteurs & Fondations",
        "sectors": [
            "BTP",
            "Gros Œuvre",
            "Construction"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "CAP Maçon à Bac Pro (Intervention sur le Patrimoine Bâti ou Technicien du Bâtiment)",
        "salary": "🇫🇷 France : 1 800 - 2 900 € net/mois (~26 000 - 41 000 € brut/an + primes de panier, Source : L'Étudiant) • 🇸🇳 Sénégal : 150 000 - 600 000 FCFA / mois (Maîtres maçons de chantiers résidentiels et industriels)",
        "simpleDefinition": "Le maçon est le bâtisseur fondamental du gros œuvre : il monte les murs, coule les dalles en béton, pose les parpaings, briques ou pierres et réalise les fondations sur lesquelles repose tout le reste du bâtiment.",
        "shortDescription": "Métier socle de la construction mis en valeur par le témoignage d'Olivier apprenti dans L'Étudiant, le maçon transforme le mortier et les blocs en édifices solides.",
        "longDescription": "Comme décrit dans la fiche et le reportage d'apprentissage de L'Étudiant, le maçon est le premier artisan à intervenir une fois le terrassement achevé. Muni de sa truelle, de son fil à plomb et de son niveau, il prépare les liants (ciments, chaux, mortiers), assemble les éléments de maçonnerie (briques creuses, moellons, blocs de béton) avec une planéité parfaite, pose les linteaux au-dessus des portes et fenêtres et coule les chapes de béton armé. Son savoir-faire s'étend de la construction de maisons modernes à la restauration de vieux murs en pierres de taille.",
        "mainObjective": "Ériger les structures porteuses verticales et horizontales d'un édifice avec une solidité, une verticalité et une étanchéité irréprochables.",
        "companyRole": "Pilier physique de la construction garantissant l'élévation des murs et la pérennité du gros œuvre.",
        "workEnvironment": [
            "🧱 Chantiers de construction neuve ou de rénovation patrimoniale",
            "🌤️ Travail en plein air par toutes les saisons, souvent sur échafaudages",
            "👥 Travail d'équipe solidaire avec les coffreurs, grutiers et chefs de chantier"
        ],
        "missions": [
            "Implanter les ouvrages et monter les murs porteurs en briques, parpaings, pierres ou béton cellulaire",
            "Fabriquer et gâcher les mortiers, bétons et enduits selon les dosages techniques requis",
            "Réaliser les coffrages simples en bois et poser les armatures métalliques pour les linteaux et chaînages",
            "Couler et vibrer le béton pour les dalles, chapes de sol et poteaux d'angle",
            "Appliquer les enduits traditionnels et assurer l'étanchéité à l'eau et à l'air des parois"
        ],
        "typicalDay": [
            {
                "time": "07:30",
                "title": "Installation du poste de travail",
                "desc": "Vérification des échafaudages, approvisionnement en palettes de parpaings par la grue et gâchage du mortier à la bétonnière."
            },
            {
                "time": "09:00",
                "title": "Montage de murs en briques",
                "desc": "Pose de rangs de briques au cordeau avec contrôle systématique du niveau à bulle et du fil à plomb."
            },
            {
                "time": "13:30",
                "title": "Coulage d'un linteau",
                "desc": "Ferraillage d'un linteau au-dessus d'une baie vitrée, pose du coffrage et coulage du béton vibré à l'aiguille."
            },
            {
                "time": "16:15",
                "title": "Nettoyage et protection des maçonneries",
                "desc": "Bâchage des maçonneries fraîches pour les protéger de la pluie ou du séchage trop rapide au soleil."
            }
        ],
        "skills": {
            "technical": [
                "Techniques d'appareillage des briques, blocs de béton, pierres et briques monomur",
                "Dosage, formulation et mise en œuvre des mortiers et bétons",
                "Lecture de plans d'exécution d'architecte et prise de cotes",
                "Règles de sécurité sur échafaudage et port des EPI"
            ],
            "human": [
                "Excellente condition physique, force et endurance corporelle",
                "Sens du travail en équipe et communication franche sur le chantier",
                "Précision du geste manuel et amour du travail soigné"
            ],
            "tools": [
                "Truelles de maçon, taloches et platoirs",
                "Niveaux à bulle magnétiques, fils à plomb et cordeaux d'alignement",
                "Bétonnières, aiguilles vibrantes à béton et meuleuses à disque diamant",
                "Échafaudages de pied et tréteaux de maçon"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "CAP Maçon (2 ans)",
                    "title": "CAP Maçon en apprentissage",
                    "desc": "La voie royale mise en avant par L'Étudiant pour apprendre le métier directement auprès des maîtres artisans."
                },
                {
                    "step": "Bac Pro (3 ans)",
                    "title": "Bac Pro Technicien du Bâtiment (organisation et réalisation de gros œuvre)",
                    "desc": "Formation complète ouvrant la voie vers l'encadrement d'équipe de chantier."
                },
                {
                    "step": "Brevet Professionnel (BP)",
                    "title": "BP Maçonnerie (Compagnonnage)",
                    "desc": "Perfectionnement technique de haute qualification chez les Compagnons du Devoir."
                }
            ],
            "schools": [
                {
                    "name": "CFA du Bâtiment et des Travaux Publics — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Compagnons du Devoir et du Tour de France — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Centres Régionaux de Formation Professionnelle (CRFP Kaolack, Saint-Louis) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certificat de Qualification Professionnelle (CQP) Maçon",
                "CACES échafaudage de pied R408",
                "Brevet de Sauveteur Secouriste du Travail (SST)"
            ],
            "schoolSubjects": [
                "Dessin technique et lecture de plans",
                "Technologie des matériaux de maçonnerie",
                "Sécurité de chantier",
                "Mathématiques appliquées au métré"
            ]
        },
        "career": {
            "sectors": [
                "Entreprises artisanales de maçonnerie générale",
                "Entreprises générales de bâtiment et de gros œuvre",
                "Entreprises spécialisées dans la restauration des monuments historiques"
            ],
            "employerTypes": [
                "Artisans maçons",
                "PME de gros œuvre",
                "Grandes entreprises de BTP"
            ],
            "evolution": "Apprenti maçon ➔ Maçon qualifié ➔ Chef d'équipe maçonnerie ➔ Chef de chantier gros œuvre ➔ Artisan créateur de son entreprise",
            "pros": "Plein emploi permanent (pénurie aiguë de bras qualifiés), fierté de voir le bâtiment s'élever grâce à ses mains, opportunité rapide de créer sa boîte.",
            "cons": "Travail physique exigeant, dépendance aux conditions météo (pluie, gel, canicule)."
        },
        "gettingStarted": {
            "beginnerProject": "Gâcher une auge de mortier et monter un muret de 3 parpaings avec jointoiement parfait au niveau.",
            "intermediateProject": "Réaliser un coffrage bois étanche pour couler un petit massif de fondation.",
            "advancedProject": "Monter un pilier en briques apparentes avec joints creux réguliers et linteau cintré.",
            "portfolioIdeas": [
                "Photos de réalisations de murs en briques ou moellons",
                "Attestation de stage en entreprise de gros œuvre"
            ]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "Bien que des robots poseurs de briques ou des imprimantes 3D à béton apparaissent pour certains murs droits, la maçonnerie courante et la réhabilitation restent totalement manuelles.",
            "automatedTasks": [
                "Découpe automatisée de briques à l'atelier",
                "Malaxage automatique des centrales à béton mobiles"
            ],
            "emergingSkills": [
                "Utilisation de niveaux lasers rotatifs auto-calibrés"
            ],
            "humanEdge": "L'adaptabilité aux irrégularités du terrain et l'art de l'ajustement millimétrique de chaque bloc au mortier."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le maçon est la figure centrale du secteur de la construction informelle et formelle : des milliers de concessions familiales s'érigent brique par brique à Dakar, Touba et Thiès grâce aux maîtres maçons qui fabriquent souvent eux-mêmes leurs briques de ciment sur place.",
            "localSectors": [
                "Entreprises de bâtiment de Dakar",
                "Chantiers résidentiels privés des régions",
                "Coopératives d'habitat"
            ],
            "remoteWork": "Non compatible (100% physique sur le chantier).",
            "entrepreneurship": "Création d'une entreprise artisanale de maçonnerie et d'une unité de fabrication de briques en béton ou briques de terre compressée (BTC)."
        },
        "relatedJobSlugs": [
            "coffreur-bancheur",
            "chef-de-chantier",
            "carreleur",
            "charpentier"
        ],
        "connectedFamilies": [
            "artisanat-metiers-dart",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Témoignage d'Olivier, apprenti maçon — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/macon-le-temoignage-dolivier-apprenti.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "CAPEB — Confédération de l'Artisanat et des Petites Entreprises du Bâtiment",
                "url": "https://www.capeb.fr/",
                "source": "CAPEB"
            }
        ],
        "sources": [
            "L'Étudiant",
            "CAPEB",
            "Compagnons du Devoir"
        ],
        "interests": [
            "construire-fabriquer",
            "sport-plein-air",
            "technique-outils"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Un maçon qualifié pose en moyenne entre 400 et 600 parpaings par jour de travail, ce qui représente la manipulation manuelle de près de 10 tonnes de matériaux !",
            "pourquoi": "Grâce aux techniques d'ergonomie et à la précision du geste, il économise ses mouvements pour préserver son corps.",
            "a_retenir": "L'artisan fondamental sans lequel aucun bâtiment ne peut tenir debout."
        }
    },
    {
        "id": "coffreur-bancheur",
        "slug": "coffreur-bancheur",
        "title": "Coffreur-Bancheur",
        "aliases": [
            "Coffreur béton armé",
            "Bancheur de gros œuvre",
            "Monteur de coffrages industriels"
        ],
        "icon": "🏗️",
        "image": "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Gros Œuvre, Maçonnerie & Béton",
        "domainId": "gros-oeuvre-maconnerie",
        "subdomain": "Coffrage industriel, Banches & Béton armé",
        "sectors": [
            "BTP",
            "Gros Œuvre",
            "Béton"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "CAP Coffreur-Bancheur à Bac Pro BTP",
        "salary": "🇫🇷 France : 1 900 - 3 100 € net/mois (~27 000 - 44 000 € brut/an + primes d'intempéries, Source : L'Étudiant) • 🇸🇳 Sénégal : 200 000 - 750 000 FCFA / mois (Grands chantiers de tours et viaducs, Eiffage Sénégal, CSE)",
        "simpleDefinition": "Le coffreur-bancheur assemble des moules en métal (les banches) ou en bois dans lesquels il installe les armatures d'acier, puis coule le béton liquide qui, en durcissant, formera les murs, dalles et piliers massifs des grands bâtiments.",
        "shortDescription": "Spécialiste du béton armé moderne cité par L'Étudiant, il manie des coffrages de plusieurs tonnes avec l'aide de la grue pour façonner les gratte-ciels et ponts.",
        "longDescription": "Comme décrit dans les métiers de gros œuvre de L'Étudiant, le coffreur-bancheur intervient principalement sur les chantiers de logements collectifs, d'ouvrages d'art et d'immeubles tertiaires. Il monte, stabilise et huile les grands panneaux de coffrage métalliques (banches). Il positionne méticuleusement les cages d'armatures en acier et les réservations de fenêtres et de tuyaux. Une fois le béton coulé et vibré à l'aiguille pour chasser les bulles d'air, il procède au décoffrage dès le lendemain matin, révélant un mur parfaitement lisse et résistant.",
        "mainObjective": "Fabriquer des moules étanches et sécurisés pour couler des ouvrages en béton armé conformes aux cotes et sans bulles d'air.",
        "companyRole": "Moteur de l'élévation des structures en béton armé des grands chantiers modernes.",
        "workEnvironment": [
            "🏗️ Grands chantiers de construction d'immeubles, de ponts et d'usines",
            "🌤️ Travail en hauteur sur plates-formes de travail en encorbellement (PTE)",
            "👥 Synchronisation permanente par gestes et radio avec le grutier"
        ],
        "missions": [
            "Positionner et caler les banches métalliques à l'aide de la grue et régler l'aplomb au vérin",
            "Huiler les parois de coffrage pour faciliter le démoulage ultérieur sans arrachement",
            "Installer les armatures métalliques en respectant l'enrobage minimal requis pour la durabilité",
            "Guider la benne à béton de la grue et couler le béton de manière homogène",
            "Vibrer le béton à l'aide d'aiguilles vibrantes pour éliminer les poches d'air et garantir la résistance"
        ],
        "typicalDay": [
            {
                "time": "07:30",
                "title": "Décoffrage des voiles de la veille",
                "desc": "Retrait des tiges de banches, recul des panneaux métalliques à la grue et inspection de l'aspect de surface du béton."
            },
            {
                "time": "10:00",
                "title": "Ferraillage et mise en place des mannequins",
                "desc": "Pose de la cage d'armatures du mur suivant et fixation des cadres bois réservant les baies de fenêtres."
            },
            {
                "time": "13:30",
                "title": "Fermeture et calage de la banche",
                "desc": "Rapprochement de la banche opposée, serrage des tiges d'écartement et réglage de la verticalité au fil à plomb."
            },
            {
                "time": "15:30",
                "title": "Coulage et vibration du béton",
                "desc": "Réception du camion toupie, remplissage de la banche par passes de 50 cm et vibration méthodique."
            }
        ],
        "skills": {
            "technical": [
                "Techniques de coffrage traditionnel bois et de coffrage outil métallique (banches)",
                "Pression hydrostatique du béton frais et dimensionnement du contreventement",
                "Maniement de l'aiguille vibrante et techniques de ragréage de surface",
                "Règles strictes de sécurité du travail en hauteur et d'élingage sous grue"
            ],
            "human": [
                "Esprit d'équipe soudé et vigilance permanente pour la sécurité collective",
                "Endurance physique et dextérité dans le maniement des outils",
                "Sens aigu du timing (le béton frais n'attend pas pour prendre)"
            ],
            "tools": [
                "Banches métalliques modulaires (Outinord, Sateco, Peri)",
                "Aiguilles vibrantes électriques ou thermiques à béton",
                "Tiges de serrage, écrous papillons et huile de décoffrage",
                "Élingues de levage, chaînes et talkies-walkies grue"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "CAP (2 ans)",
                    "title": "CAP Constructeur en Béton Armé du Bâtiment (Coffreur-Bancheur)",
                    "desc": "Apprentissage des techniques de coffrage, de ferraillage et de coulage en alternance."
                },
                {
                    "step": "Bac Pro (3 ans)",
                    "title": "Bac Pro Technicien du Bâtiment (Gros Œuvre)",
                    "desc": "Formation approfondie ouvrant rapidement sur les fonctions de chef d'équipe bancheur."
                },
                {
                    "step": "Titre Professionnel",
                    "title": "Titre Professionnel de Coffreur-Bancheur (AFPA)",
                    "desc": "Reconversion accélérée pour adultes très demandée par les majors du BTP."
                }
            ],
            "schools": [
                {
                    "name": "CFA du Bâtiment spécialisés en gros œuvre — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centres AFPA BTP — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "CACES R487 Grue (élingage et commandement)",
                "CQP Coffreur-Bancheur haute technicité",
                "Attestation de travail en hauteur et port du harnais"
            ],
            "schoolSubjects": [
                "Lecture de plans de coffrage",
                "Technologie du béton et des adjuvants",
                "Sécurité de levage",
                "Métrés gros œuvre"
            ]
        },
        "career": {
            "sectors": [
                "Grandes entreprises générales de construction (Vinci, Bouygues, Eiffage)",
                "Entreprises de gros œuvre spécialisées en logements collectifs",
                "Entreprises de génie civil et d'ouvrages d'art"
            ],
            "employerTypes": [
                "Majors du BTP",
                "Grandes entreprises de béton armé",
                "Entreprises de préfabrication"
            ],
            "evolution": "Coffreur débutant ➔ Coffreur-bancheur qualifié ➔ Chef d'équipe bancheurs ➔ Chef de chantier béton armé",
            "pros": "Poste au cœur des grands chantiers modernes prestigieux, rémunération valorisée avec nombreuses primes, travail en équipe solidaire.",
            "cons": "Travail en hauteur exposé au vent et au froid, manipulation de matériel lourd."
        },
        "gettingStarted": {
            "beginnerProject": "Observer les grandes banches métalliques jaunes ou bleues sur les chantiers de tours en ville.",
            "intermediateProject": "Fabriquer un petit coffrage en bois démontable avec serre-joints pour couler un plot en béton.",
            "advancedProject": "Calculer la poussée latérale exercée par 3 mètres de béton liquide sur une paroi de banche.",
            "portfolioIdeas": [
                "Photos d'un voile en béton décoffré avec fini lisse parfait",
                "Attestation de stage sur un chantier d'immeuble R+5"
            ]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "L'élingage des banches, la vérification manuelle du serrage des tiges et le guidage de la benne de béton restent le domaine irremplaçable des ouvriers qualifiés.",
            "automatedTasks": [
                "Capteurs connectés intégrés dans le béton pour mesurer la vitesse de prise en temps réel",
                "Optimisation du planning de rotation des banches par algorithme"
            ],
            "emergingSkills": [
                "Utilisation de capteurs de maturité du béton pour décoffrer au moment exact sans risque"
            ],
            "humanEdge": "La coordination millimétrée entre le coffreur au sol et le grutier à 50 mètres de hauteur."
        },
        "africaContext": {
            "senegalInsight": "Sur les grands chantiers sénégalais modernes (tours de la Cité ministérielle de Diamniadio, piliers du pont de Foundiougne, viaduc du BRT à Dakar), les coffreurs-bancheurs manient des coffrages grimpants et glissants ultra-modernes pour faire monter les édifices à un rythme impressionnant d'un étage par semaine.",
            "localSectors": [
                "Grands chantiers de génie civil (Eiffage Sénégal, CSE, Sogea-Satom)",
                "Chantiers de tours à Dakar-Plateau et Almadies",
                "Projets d'infrastructures de transport"
            ],
            "remoteWork": "Non compatible (100% terrain sur le chantier).",
            "entrepreneurship": "Création d'une entreprise sous-traitante spécialisée dans le coffrage et le coulage de voiles béton pour les promoteurs."
        },
        "relatedJobSlugs": [
            "macon",
            "grutier",
            "chef-de-chantier",
            "conducteur-de-travaux"
        ],
        "connectedFamilies": [
            "industrie-mecanique",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier Coffreur — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "FFB — Fédération Française du Bâtiment",
                "url": "https://www.ffbatiment.fr/",
                "source": "FFB"
            }
        ],
        "sources": [
            "L'Étudiant",
            "FFB",
            "FNTP"
        ],
        "interests": [
            "construire-fabriquer",
            "sport-plein-air",
            "technique-outils"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Le béton liquide exerce une pression phénoménale pouvant dépasser 8 tonnes par mètre carré sur le bas d'une banche de 3 mètres de haut.",
            "pourquoi": "Si une seule tige de serrage n'est pas correctement verrouillée par le coffreur, la banche peut s'ouvrir brutalement sous le poids du béton !",
            "a_retenir": "Le sculpteur de béton liquide qui donne forme à la ville moderne."
        }
    },
    {
        "id": "ouvrier-qualifie-btp",
        "slug": "ouvrier-qualifie-btp",
        "title": "Ouvrier Qualifié du Gros Œuvre BTP",
        "aliases": [
            "Ouvrier polyvalent du bâtiment",
            "Compagnon professionnel gros œuvre",
            "Aide-maçon qualifié"
        ],
        "icon": "👷",
        "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Gros Œuvre, Maçonnerie & Béton",
        "domainId": "gros-oeuvre-maconnerie",
        "subdomain": "Polyvalence gros œuvre & Chantiers",
        "sectors": [
            "BTP",
            "Gros Œuvre",
            "Construction"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "CAP / Titre Professionnel à Bac Pro BTP",
        "salary": "🇫🇷 France : 1 800 - 2 600 € net/mois (~25 000 - 37 000 € brut/an + paniers, Source : L'Étudiant) • 🇸🇳 Sénégal : 150 000 - 450 000 FCFA / mois (Chantiers de construction du Sénégal)",
        "simpleDefinition": "L'ouvrier qualifié du gros œuvre exécute les travaux fondamentaux de construction : préparation des fondations, coulage des dalles de béton, pose d'éléments préfabriqués, manutention sécurisée et assistance technique aux maçons et coffreurs.",
        "shortDescription": "Bras droit indispensable des chantiers répertorié par L'Étudiant, il maîtrise les gestes techniques polyvalents nécessaires pour faire progresser les ouvrages jour après jour.",
        "longDescription": "Comme décrit dans les fiches d'orientation de L'Étudiant, l'ouvrier qualifié est au cœur de l'activité du chantier. Polyvalent et robuste, il sait implanter un ouvrage simple, poser des canalisations d'évacuation sous dallage, préparer les armatures métalliques, guider la pose des dalles alvéolées préfabriquées et reboucher les trémies. Sa parfaite connaissance des règles de sécurité et sa capacité à anticiper les besoins des compagnons en font un maillon clé de la productivité.",
        "mainObjective": "Réaliser avec rigueur les tâches d'exécution du gros œuvre et garantir le bon approvisionnement et la sécurité du front de travail.",
        "companyRole": "Exécutant polyvalent et moteur de la cadence d'avancement du gros œuvre.",
        "workEnvironment": [
            "🏗️ Chantiers extérieurs en construction neuve, réhabilitation ou génie civil",
            "🌤️ Travail en plein air par tous les temps, au sol ou sur dalles d'étages",
            "👥 Travail en équipe sous les ordres directs du chef d'équipe ou du contremaître"
        ],
        "missions": [
            "Préparer les zones de travail, installer les garde-corps de sécurité et sécuriser les trémies",
            "Couler et lisser les bétons de propreté, semelles de fondations et chapes de ravoirage",
            "Approvisionner les postes de travail en mortier, parpaings, armatures et banches",
            "Aider à la pose d'éléments préfabriqués (prédalles, poutres, escaliers préfabriqués)",
            "Nettoyer, entretenir et ranger le matériel de chantier et trier les déchets de démolition"
        ],
        "typicalDay": [
            {
                "time": "07:30",
                "title": "Préparation du matériel et sécurité",
                "desc": "Contrôle des filets anti-chutes sur les rives de plancher et vérification du niveau d'huile de la pilonneuse."
            },
            {
                "time": "09:30",
                "title": "Coulage d'une dalle de sous-sol",
                "desc": "Tirage du béton à la règle vibrante et talonnage des surfaces pour obtenir une dalle parfaitement lisse."
            },
            {
                "time": "13:30",
                "title": "Pose de canalisations sous dallage",
                "desc": "Emboîtement de tuyaux PVC d'évacuation avec respect rigoureux de la pente de 1% au niveau laser."
            },
            {
                "time": "16:00",
                "title": "Rangement et sécurisation du chantier",
                "desc": "Nettoyage de la bétonnière et fermeture des accès au chantier avant la tombée de la nuit."
            }
        ],
        "skills": {
            "technical": [
                "Techniques générales du bâtiment, fabrication et vibration des mortiers et bétons",
                "Utilisation de l'outillage électroportatif de chantier (marteau-piqueur, meuleuse, carotteuse)",
                "Lecture élémentaire de plans de repérage et prise de niveaux au laser",
                "Gestes et postures de manutention manuelle et consignes de sécurité strictes"
            ],
            "human": [
                "Ponctualité, assiduité et grand sens de l'entraide collective",
                "Excellente condition physique et résistance à l'effort extérieur",
                "Écoute attentive des consignes du chef d'équipe"
            ],
            "tools": [
                "Règles à niveau, taloches et platoirs flamands",
                "Marteaux piqueurs et brise-béton électropneumatiques",
                "Lasers de chantier rotatifs autonivelants",
                "Pilonneuses et plaques vibrantes pour remblais"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "CAP (2 ans)",
                    "title": "CAP Maçon ou Constructeur en Béton Armé",
                    "desc": "Formation de base pour acquérir les gestes techniques en alternance."
                },
                {
                    "step": "Titre Professionnel (6 à 12 mois)",
                    "title": "Titre Professionnel Ouvrier Polyvalent du Bâtiment (AFPA)",
                    "desc": "Cursus modulaire certifiant très prisé pour les adultes et débutants motivés."
                },
                {
                    "step": "Bac Pro (3 ans)",
                    "title": "Bac Pro Technicien du Bâtiment",
                    "desc": "Évolution rapide vers le statut de chef d'équipe de gros œuvre."
                }
            ],
            "schools": [
                {
                    "name": "CFA du Bâtiment — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centres AFPA BTP — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "CFPT Sénégal-Japon (Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Centre de Formation Professionnelle de Guédiawaye — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certificat de Sauveteur Secouriste du Travail (SST)",
                "CACES mini-pelle et engins de chantier R482 catégorie A",
                "Habilitation travail en hauteur"
            ],
            "schoolSubjects": [
                "Sécurité et gestes professionnels",
                "Technologie du béton",
                "Dessin de bâtiment de base",
                "Mathématiques professionnelles"
            ]
        },
        "career": {
            "sectors": [
                "Entreprises de maçonnerie et de gros œuvre",
                "Entreprises générales de BTP",
                "Artisans du bâtiment",
                "Sociétés de travaux de rénovation"
            ],
            "employerTypes": [
                "Artisans du BTP",
                "PME de gros œuvre",
                "Grands groupes de construction"
            ],
            "evolution": "Ouvrier d'exécution ➔ Ouvrier hautement qualifié (compagnon) ➔ Chef d'équipe gros œuvre ➔ Chef de chantier",
            "pros": "Accès facile sans long cursus initial, apprentissage permanent au contact de compagnons chevronnés, forte demande de recrutement.",
            "cons": "Travail physique exigeant, pénibilité liée aux intempéries."
        },
        "gettingStarted": {
            "beginnerProject": "Participer à la construction d'un muret de jardin ou au coulage d'une allée piétonne en béton.",
            "intermediateProject": "S'entraîner à poser des parpaings d'angle parfaitement verticaux au fil à plomb.",
            "advancedProject": "Réaliser un calage d'armatures pour semelle filante en respectant l'enrobage de 5 cm.",
            "portfolioIdeas": [
                "Photos de chantiers réalisés en tant qu'ouvrier qualifié",
                "Recommandation d'un artisan ou tuteur de stage"
            ]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "L'effort physique, la réactivité sur le terrain et la polyvalence des interventions manuelles restent impossibles à robotiser sur les chantiers hétérogènes.",
            "automatedTasks": [
                "Approvisionnement automatisé par monte-charges intelligents",
                "Tri automatique de gravats sur les plateformes de recyclage"
            ],
            "emergingSkills": [
                "Utilisation d'exosquelettes légers pour soulager les lombaires lors du levage de charges"
            ],
            "humanEdge": "Le coup de main pratique, la solidarité humaine dans l'effort et l'endurance sur le chantier."
        },
        "africaContext": {
            "senegalInsight": "Sur tous les chantiers du Sénégal, les ouvriers qualifiés forment la base indispensable de la construction : ils manient le béton, fabriquent les blocs et montent les étages sous le soleil sahélien, avec une solidarité de groupe exemplaire.",
            "localSectors": [
                "Chantiers de construction d'habitat de Dakar et banlieue",
                "Entreprises de TP sénégalaises",
                "Travaux communaux d'assainissement"
            ],
            "remoteWork": "Non compatible (100% physique sur place).",
            "entrepreneurship": "Création d'une équipe autonome de maçons et ouvriers qualifiés proposant des prestations de gros œuvre clé en main."
        },
        "relatedJobSlugs": [
            "macon",
            "coffreur-bancheur",
            "chef-de-chantier"
        ],
        "connectedFamilies": [
            "artisanat-metiers-dart",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier Ouvrier qualifié — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/ouvrier-qualifie.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "FFB — Métiers du gros œuvre",
                "url": "https://www.ffbatiment.fr/",
                "source": "FFB"
            }
        ],
        "sources": [
            "L'Étudiant",
            "FFB",
            "CFPT Dakar"
        ],
        "interests": [
            "construire-fabriquer",
            "sport-plein-air",
            "technique-outils"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Dans le BTP, plus d'un tiers des chefs d'entreprise et directeurs de travaux ont démarré leur carrière comme simples ouvriers qualifiés sur les chantiers.",
            "pourquoi": "C'est un des rares secteurs où l'ascenseur social fonctionne pleinement au mérite et à la compétence pratique démontrée sur le terrain.",
            "a_retenir": "Le bâtisseur de terrain sans lequel aucun projet ne sort de terre."
        }
    },
    {
        "id": "charpentier",
        "slug": "charpentier",
        "title": "Charpentier Bois & Métallique",
        "aliases": [
            "Charpentier constructeur bois",
            "Monteur de charpente métallique",
            "Compagnon charpentier"
        ],
        "icon": "🪵",
        "image": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Charpente, Couverture & Enveloppe",
        "domainId": "charpente-enveloppe-couverture",
        "subdomain": "Charpente bois, Métal & Ossature",
        "sectors": [
            "BTP",
            "Charpente",
            "Bois"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "CAP Charpentier bois ou métallique à Bac Pro / BTS SCBH",
        "salary": "🇫🇷 France : 2 000 - 3 200 € net/mois (~28 000 - 45 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 250 000 - 800 000 FCFA / mois (Hangars industriels métalliques, charpentes toitures de prestige)",
        "simpleDefinition": "Le charpentier conçoit, taille en atelier et assemble sur le toit la structure porteuse (en bois ou en acier) qui soutient la couverture d'une maison, d'un gymnase, d'une église ou d'un grand hangar industriel.",
        "shortDescription": "Artisan noble et géomètre de la structure documenté par L'Étudiant, il maîtrise l'art du trait, l'assemblage précis et le levage en hauteur.",
        "longDescription": "Comme décrit dans les fiches métiers de L'Étudiant, le charpentier combine deux univers : le travail minutieux de traçage et de taille en atelier, et le spectaculaire travail de levage et d'assemblage en hauteur sur le chantier. Qu'il travaille le bois massif, le lamellé-collé ou les profilés d'acier, il réalise des épures géométriques, découpe les tenons, mortaises ou platines d'assemblage, puis monte sur l'ossature pour boulonner et contreventer les fermes avec l'aide de la grue.",
        "mainObjective": "Tailler et lever une charpente robuste et pérenne capable de résister au vent et aux charges de toiture selon les règles de l'art.",
        "companyRole": "Créateur de l'ossature de toit et garant de la géométrie de la toiture du bâtiment.",
        "workEnvironment": [
            "🪵 Ateliers de taille de charpente et de préfabrication d'ossatures",
            "🌤️ Chantiers en hauteur sur les toits par tous les temps",
            "🦺 Travail sous harnais de sécurité avec grutier et équipes de charpentiers"
        ],
        "missions": [
            "Tracer les épures et plans de charpente selon les cotes d'architecte (l'art du trait)",
            "Découper, raboter et tailler les pièces de bois ou d'acier en atelier avec machines numériques",
            "Pré-assembler les fermes et éléments d'ossature au sol pour vérifier l'exactitude des emboîtements",
            "Hisser les éléments de charpente à la grue et les fixer solidement sur la maçonnerie porteuse",
            "Poser les pannes, chevrons et contreventements qui accueilleront les matériaux de couverture"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Taille d'arbalétriers en atelier",
                "desc": "Usinage numérique et finition manuelle au ciseau à bois des assemblages à mi-bois d'une ferme traditionnelle."
            },
            {
                "time": "10:30",
                "title": "Levage de fermes sur chantier",
                "desc": "Guidage à la grue d'une ferme en lamellé-collé de 18 mètres de portée et boulonnage sur les platines d'ancrage en béton."
            },
            {
                "time": "14:00",
                "title": "Pose des pannes et liernes",
                "desc": "Travail en hauteur sur nacelle pour fixer les pannes intermédiaires et régler l'alignement au cordeau."
            },
            {
                "time": "16:30",
                "title": "Contrôle d'aplomb",
                "desc": "Vérification au fil à plomb et niveau laser de la parfaite verticalité des fermes avant pose des contreventements définitifs."
            }
        ],
        "skills": {
            "technical": [
                "Art du trait de charpente et géométrie descriptive dans l'espace",
                "Résistance des matériaux bois et acier et règles de calcul des assemblages",
                "Maniement des machines d'atelier (scies à ruban, raboteuses, centres d'usinage à commande numérique)",
                "Techniques de levage, d'élingage et travail en hauteur sous harnais"
            ],
            "human": [
                "Absence totale de vertige, équilibre et agilité physique en hauteur",
                "Sens aigu de la précision millimétrique et respect de la matière bois/acier",
                "Confiance et solidarité absolue avec les compagnons de cordée"
            ],
            "tools": [
                "Ciseaux à bois, bisaiguës, herminettes et scies sabres",
                "Machines de taille numériques (Hundegger, SCM)",
                "Boulonneuses à choc, cloueurs pneumatiques et tire-forts",
                "Harnais de sécurité, lignes de vie et longes antichute"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "CAP (2 ans)",
                    "title": "CAP Charpentier Bois ou Constructeur Métallique",
                    "desc": "La formation pratique d'apprentissage de référence mise en avant par L'Étudiant."
                },
                {
                    "step": "Bac Pro / BP (2 à 3 ans)",
                    "title": "Bac Pro Technicien Constructeur Bois ou BP Charpentier",
                    "desc": "Perfectionnement technique sur le calcul de charges et les charpentes complexes."
                },
                {
                    "step": "BTS (Bac +2)",
                    "title": "BTS Systèmes Constructifs Bois et Habitat (SCBH)",
                    "desc": "Formation de haut niveau pour devenir chef d'atelier ou conducteur de travaux bois."
                }
            ],
            "schools": [
                {
                    "name": "Compagnons du Devoir et du Tour de France — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Lycées professionnels du bois et CFA BTP — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "CQP Charpentier Haute Qualification",
                "CACES nacelle PEMP 1B/3B",
                "Attestation de montage d'échafaudages et harnais"
            ],
            "schoolSubjects": [
                "Épure et géométrie dans l'espace",
                "Technologie du bois et des métaux",
                "Dessin assisté par ordinateur (Cadwork)",
                "Sécurité du travail en hauteur"
            ]
        },
        "career": {
            "sectors": [
                "Entreprises de charpente traditionnelle et couverture",
                "Constructeurs de maisons à ossature bois (MOB)",
                "Entreprises de construction métallique et hangars industriels",
                "Restauration des monuments historiques"
            ],
            "employerTypes": [
                "Artisans charpentiers",
                "Entreprises de charpente industrielle",
                "Grandes entreprises de BTP bois"
            ],
            "evolution": "Apprenti charpentier ➔ Compagnon charpentier ➔ Chef d'équipe levage ➔ Chef d'atelier de taille ➔ Artisan chef d'entreprise",
            "pros": "Prestige ancestral du métier de compagnon, beauté du travail du bois noble, fierté de poser la couronne du bouquet de fin de charpente.",
            "cons": "Travail en hauteur exposé au vent, aux chaleurs et au froid, manipulation de poutres lourdes."
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser un assemblage à mi-bois parfait entre deux tasseaux avec scie égoïne et ciseau.",
            "intermediateProject": "Construire une maquette à l'échelle 1/10e d'une ferme de charpente traditionnelle avec poinçon et fiches.",
            "advancedProject": "Dessiner l'épure d'un raccord de comble avec noue et arêtier sous le logiciel Cadwork.",
            "portfolioIdeas": [
                "Maquette en bois d'une ferme traditionnelle",
                "Photos de chantier de levage d'une charpente complète"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'IA et les logiciels de CAO 3D optimisent les découpes de bois pour réduire les chutes à moins de 2%, mais l'assemblage et le levage sur le toit restent purement humains.",
            "automatedTasks": [
                "Génération automatique des fichiers de pilotage des machines de taille CNC",
                "Calcul automatique des efforts aux nœuds de charpente"
            ],
            "emergingSkills": [
                "Pilotage des centres d'usinage à commande numérique pour ossatures bois"
            ],
            "humanEdge": "L'art du geste d'ajustement en hauteur, la lecture du fil du bois et le courage physique sur le toit."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, si la charpente métallique domine dans les entrepôts portuaires et hangars industriels, la charpente bois de qualité connaît un fort essor dans l'éco-tourisme (lodges du Sine Saloum, toitures en chaume et rônier de Casamance, hôtels de Saly) pour son esthétique chaleureuse et sa fraîcheur thermique naturelle.",
            "localSectors": [
                "Ateliers de construction métallique de Dakar (SENAC, Eiffage Métal)",
                "Menuiseries et charpenteries artisanales",
                "Projets d'éco-lodges touristiques"
            ],
            "remoteWork": "Non compatible (atelier de taille et chantiers physiques sur place).",
            "entrepreneurship": "Création d'une entreprise de construction de charpentes métalliques légères et toitures isolées pour hangars agricoles et industriels."
        },
        "relatedJobSlugs": [
            "couvreur",
            "menuisier",
            "ingenieur-structures",
            "macon"
        ],
        "connectedFamilies": [
            "artisanat-metiers-dart",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier Charpentier — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "Compagnons du Devoir — Métier de Charpentier",
                "url": "https://www.compagnons-du-devoir.com/",
                "source": "Compagnons"
            }
        ],
        "sources": [
            "L'Étudiant",
            "Compagnons du Devoir",
            "CAPEB"
        ],
        "interests": [
            "construire-fabriquer",
            "sport-plein-air",
            "technique-outils"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "La tradition millénaire des charpentiers veut que l'on fixe un arbre ou un bouquet de fleurs sur le sommet de la charpente une fois le dernier chevron posé (le 'bouquet du charpentier').",
            "pourquoi": "Ce rite célèbre l'arbre qui a donné son bois pour abriter les hommes et rend hommage au travail des compagnons.",
            "a_retenir": "L'artisan d'exception qui dresse l'ossature protectrice de chaque foyer."
        }
    },
    {
        "id": "couvreur",
        "slug": "couvreur",
        "title": "Couvreur-Zingueur",
        "aliases": [
            "Couvreur toiturier",
            "Zingueur étancheur",
            "Compagnon couvreur ardoisier"
        ],
        "icon": "🏠",
        "image": "https://images.unsplash.com/photo-1542332213-31f87348057f?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Charpente, Couverture & Enveloppe",
        "domainId": "charpente-enveloppe-couverture",
        "subdomain": "Couverture, Zinguerie & Étanchéité",
        "sectors": [
            "BTP",
            "Couverture",
            "Second Œuvre"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "CAP Couvreur à Bac Pro / BP Couvreur",
        "salary": "🇫🇷 France : 2 000 - 3 400 € net/mois (~28 000 - 48 000 € brut/an avec primes de panier et intempéries, Source : L'Étudiant) • 🇸🇳 Sénégal : 200 000 - 700 000 FCFA / mois (Poseurs de bacs acier, étanchéité de toitures terrasses)",
        "simpleDefinition": "Le couvreur pose les tuiles, ardoises, feuilles de zinc ou bacs acier sur le toit et façonne les gouttières et tuyaux d'évacuation d'eau de pluie pour garantir que l'édifice reste parfaitement étanche et sec sous les orages.",
        "shortDescription": "Spécialiste de la mise hors d'eau cité par L'Étudiant, il travaille en équilibre sur les toits avec une maîtrise parfaite des métaux et de l'étanchéité.",
        "longDescription": "Comme décrit dans la fiche métier de L'Étudiant, le couvreur intervient directement après le charpentier pour mettre le bâtiment 'hors d'eau'. Posant des lattis de bois, il dispose méticuleusement les éléments de couverture (ardoises naturelles clouées, tuiles en terre cuite emboîtées, zinc à tasseaux ou à joint debout). Expert en zinguerie, il plie, découpe et soude les éléments en zinc ou cuivre (gouttières, chêneaux, abergements de cheminées, lucarnes) pour garantir qu'aucune goutte de pluie ne puisse s'infiltrer.",
        "mainObjective": "Assurer l'étanchéité absolue à l'eau et à l'air de la toiture tout en soignant l'esthétique et l'isolation thermique du bâtiment.",
        "companyRole": "Garant de l'étanchéité et protecteur suprême de l'édifice contre les agressions climatiques.",
        "workEnvironment": [
            "🏠 Toits de maisons, d'immeubles, de clochers d'églises ou de hangars industriels",
            "🌤️ Travail en hauteur sur toitures pentues exposé au vent, au soleil et au froid",
            "🦺 Port obligatoire du harnais de sécurité, des chaussures antidérapantes et des lignes de vie"
        ],
        "missions": [
            "Poser les écrans de sous-toiture et les liteaux en respectant le pureau des tuiles ou ardoises",
            "Tailler et fixer les matériaux de couverture (tuiles mécaniques, ardoises taillées à l'enclume, zinc)",
            "Façonner, plier et braser les éléments de zinguerie d'évacuation d'eau pluviale",
            "Réaliser l'isolation thermique par l'extérieur de la toiture (technique du sarking)",
            "Diagnostiquer et réparer les fuites de toiture après des tempêtes ou chutes de grêle"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Sécurisation de la toiture",
                "desc": "Amarrage des longes aux points d'ancrage de la ligne de vie et vérification du monte-matériaux de tuiles."
            },
            {
                "time": "09:30",
                "title": "Façonnage d'un abergement de cheminée",
                "desc": "Traçage, pliage et soudure à l'étain d'une bavette de zinc sur mesure pour contourner un conduit de cheminée."
            },
            {
                "time": "13:30",
                "title": "Pose de rangées d'ardoises",
                "desc": "Clouage au marteau de couvreur d'ardoises naturelles d'Angers avec respect strict du recouvrement au pureau."
            },
            {
                "time": "16:00",
                "title": "Pose d'une gouttière demi-ronde",
                "desc": "Emboîtement des longueurs de gouttières zinc, fixation sur les crochets et soudure des fonds de gouttière."
            }
        ],
        "skills": {
            "technical": [
                "Techniques de pose de tous types de couvertures (tuiles, ardoises, zinc, cuivre, bac acier)",
                "Façonnage et soudure à l'étain du zinc et des métaux non ferreux",
                "Règles de ventilation sous toiture et de mise en œuvre des pare-vapeurs",
                "Règles strictes de sécurité du travail en hauteur sur toiture pentue"
            ],
            "human": [
                "Absence totale de vertige, sens de l'équilibre et pied sûr",
                "Résistance physique remarquable et endurance aux conditions climatiques",
                "Sens du détail pour un alignement esthétique parfait des rangs de tuiles"
            ],
            "tools": [
                "Marteaux de couvreur et enclumes d'ardoissier",
                "Fers à souder de couvreur au gaz propane",
                "Plieuses à zinc d'atelier et cisailles à tôle",
                "Monte-matériaux de toiture et harnais de sécurité"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "CAP (2 ans)",
                    "title": "CAP Couvreur en apprentissage",
                    "desc": "Le parcours de référence cité par L'Étudiant pour apprendre la taille d'ardoises et la zinguerie."
                },
                {
                    "step": "Mention Complémentaire (1 an)",
                    "title": "MC Zinguerie",
                    "desc": "Année de spécialisation très recherchée axée sur le pliage et la soudure des métaux nobles de toiture."
                },
                {
                    "step": "Brevet Professionnel (BP)",
                    "title": "BP Couvreur",
                    "desc": "Diplôme d'excellence permettant de diriger une équipe ou de s'installer à son compte."
                }
            ],
            "schools": [
                {
                    "name": "CFA du Bâtiment spécialisés en couverture — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Compagnons du Devoir (Maison des Couvreurs) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Centres de formation aux métiers du bâtiment du Sénégal — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "CQP Couvreur-Zingueur",
                "Habilitation travail en hauteur et port du harnais",
                "Qualification Qualibat RGE Isolation toiture"
            ],
            "schoolSubjects": [
                "Dessin de toiture et géométrie des versants",
                "Technologie des matériaux de couverture",
                "Brasure et soudure des métaux",
                "Sécurité antichute"
            ]
        },
        "career": {
            "sectors": [
                "Entreprises artisanales de couverture et zinguerie",
                "PME de rénovation de toitures et de charpente",
                "Entreprises spécialisées dans la restauration du patrimoine ancien et monuments"
            ],
            "employerTypes": [
                "Artisans couvreurs",
                "Entreprises d'étanchéité du bâtiment",
                "Sociétés de pose de panneaux solaires intégrés au bâti"
            ],
            "evolution": "Apprenti couvreur ➔ Couvreur-zingueur qualifié ➔ Chef d'équipe toiture ➔ Artisan chef d'entreprise de couverture",
            "pros": "Plein emploi garanti (métier sous très forte tension), vue panoramique quotidienne sur les toits, haute technicité du travail du zinc.",
            "cons": "Exposition directe aux températures extrêmes (soleil brûlant l'été sur le zinc, gel l'hiver), travail physique sur les genoux."
        },
        "gettingStarted": {
            "beginnerProject": "Observer les toitures de sa ville et identifier les matériaux utilisés (ardoises, tuiles canal, zinc, bac acier).",
            "intermediateProject": "S'entraîner à souder deux morceaux de zinc à l'étain avec un fer chaud et de la pâte décapante.",
            "advancedProject": "Réaliser une maquette de toiture à deux pans avec pose de mini-tuiles à emboîtement régulières.",
            "portfolioIdeas": [
                "Photos d'abergements de cheminées soudés impeccablement",
                "Attestation de stage chez un artisan couvreur"
            ]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "Des drones équipés de caméras thermiques inspectent les toitures pour détecter les fuites invisibles, mais la pose de chaque tuile et le façonnage du zinc restent 100% manuels.",
            "automatedTasks": [
                "Inspection photographique par drone des toitures dangereuses",
                "Calcul automatique des surfaces de versants par satellite"
            ],
            "emergingSkills": [
                "Intégration de tuiles solaires photovoltaïques étanches lors de la rénovation de toiture"
            ],
            "humanEdge": "La dextérité manuelle pour épouser les formes complexes du toit et la bravoure physique sur les pentes."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le métier se décline sous deux formes capitales : la pose experte de bacs acier nervurés et isolés sur les toits à deux pans pour résister aux violents coups de vent de l'hivernage, et l'étanchéité des toitures terrasses bétonnées (chapes bitumineuses, étanchéité liquide) pour empêcher les infiltrations lors de la saison des pluies.",
            "localSectors": [
                "Entreprises d'étanchéité et de couverture de Dakar",
                "Industries de profilage de tôles bac acier (Sénégal Tôles, Métal Afrique)",
                "Chantiers de réfection toitures"
            ],
            "remoteWork": "Non compatible (travail physique direct sur le toit).",
            "entrepreneurship": "Création d'une entreprise spécialisée dans l'étanchéité garantie des toitures-terrasses et la pose de toitures métalliques isolées."
        },
        "relatedJobSlugs": [
            "charpentier",
            "installateur-mainteneur-photovoltaique",
            "macon"
        ],
        "connectedFamilies": [
            "artisanat-metiers-dart",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier Couvreur — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/couvreur.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "FFB — Métiers de la couverture et du zinc",
                "url": "https://www.ffbatiment.fr/",
                "source": "FFB"
            }
        ],
        "sources": [
            "L'Étudiant",
            "FFB",
            "CAPEB"
        ],
        "interests": [
            "sport-plein-air",
            "construire-fabriquer",
            "technique-outils"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Les toits de zinc gris de Paris, façonnés par des générations de couvreurs-zingueurs, couvrent plus de 70% des immeubles de la capitale et sont candidats au patrimoine mondial de l'UNESCO !",
            "pourquoi": "Le zinc est un matériau léger, malléable et d'une durabilité exceptionnelle qui dépasse souvent 100 ans sans rouiller.",
            "a_retenir": "L'artisan funambule qui protège le toit du monde."
        }
    },
    {
        "id": "ouvrier-routier",
        "slug": "ouvrier-routier",
        "title": "Ouvrier Routier / Constructeur de Routes",
        "aliases": [
            "Constructeur de routes",
            "Ouvrier voiries et réseaux divers (VRD)",
            "Applicateur d'enrobés routiers"
        ],
        "icon": "🛣️",
        "image": "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Travaux Publics & Infrastructures",
        "domainId": "travaux-publics-infrastructures",
        "subdomain": "Construction routière, Enrobés & Voiries",
        "sectors": [
            "BTP",
            "Travaux Publics",
            "Infrastructures"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "CAP Constructeur de routes à Bac Pro Travaux Publics",
        "salary": "🇫🇷 France : 1 850 - 2 800 € net/mois (~26 000 - 40 000 € brut/an + primes de grand déplacement, Source : L'Étudiant) • 🇸🇳 Sénégal : 180 000 - 550 000 FCFA / mois (Grands chantiers autoroutiers et voiries urbaines)",
        "simpleDefinition": "L'ouvrier routier construit et rénove les routes, autoroutes, pistes cyclables, ronds-points et trottoirs en décapant le sol, en posant les bordures et les canalisations, et en appliquant le bitume chaud à l'aide de finisseurs et de compacteurs.",
        "shortDescription": "Spécialiste des infrastructures mis en lumière par le témoignage de Cédric apprenti dans L'Étudiant, il relie les villes et les hommes en traçant des voies sécurisées.",
        "longDescription": "Comme décrit dans le reportage d'apprentissage de L'Étudiant, l'ouvrier routier travaille au sein d'une équipe soudée et mobile. Il prépare le fond de forme du sol en étalant les graves de calcaire, pose les bordures de trottoirs et les caniveaux d'évacuation d'eau pluviale, et participe à l'application spectaculaire des enrobés bitumineux chauds (160°C) déversés par le finisseur. Il manie la raclette à enrobé, la dame mécanique et guide les rouleaux compacteurs pour obtenir une chaussée parfaitement plane et silencieuse.",
        "mainObjective": "Bâtir et entretenir des chaussées durables, drainantes et sûres capables de supporter le trafic intense des véhicules lourds.",
        "companyRole": "Exécutant qualifié de l'infrastructure routière garantissant la qualité de roulement des voies.",
        "workEnvironment": [
            "🛣️ Chantiers extérieurs d'autoroutes, routes nationales, pistes cyclables et avenues urbaines",
            "🦺 Travail sous circulation routière avec signalisation temporaire stricte",
            "👥 Travail d'équipe solidaire et déplacements régionaux fréquents"
        ],
        "missions": [
            "Poser la signalisation temporaire de chantier et baliser les voies de déviation pour protéger les automobilistes",
            "Poser les bordures en béton, pavés de trottoir et regards d'assainissement avec prise de niveau",
            "Épandre et régler les couches de fondation en grave non traitée (GNT) à l'aide du laser",
            "Participer à l'application des enrobés chauds derrière le finisseur et réaliser les raccords manuels au râteau",
            "Compacter les surfaces à l'aide de plaques vibrantes ou de petits cylindres pour assurer la densité du bitume"
        ],
        "typicalDay": [
            {
                "time": "07:30",
                "title": "Balisage et consignes de sécurité",
                "desc": "Installation des cônes de signalisation et des panneaux de réduction de voie sur l'axe routier avant l'arrivée des engins."
            },
            {
                "time": "09:00",
                "title": "Pose de bordures de trottoir",
                "desc": "Coulage du lit de béton maigre au cordeau et alignement au maillet de 80 mètres linéaires de bordures T2."
            },
            {
                "time": "13:30",
                "title": "Arrivée des camions d'enrobé chaud",
                "desc": "Déversement de l'enrobé à 160°C dans la trémie du finisseur et réglage manuel des rives au râteau."
            },
            {
                "time": "16:00",
                "title": "Compactage et contrôle de planéité",
                "desc": "Vérification au piquet laser de la pente transversale de 2% pour assurer l'évacuation rapide des eaux de pluie."
            }
        ],
        "skills": {
            "technical": [
                "Techniques d'application des enrobés bitumineux à chaud et émulsions de bitume",
                "Pose de bordures, pavés, caniveaux et réseaux d'assainissement pluvial",
                "Maniement du niveau de chantier laser et lecture de profils en travers",
                "Réglementation stricte de signalisation temporaire sous circulation routière"
            ],
            "human": [
                "Vigilance permanente face au danger de la circulation des voitures",
                "Esprit d'équipe fraternel et endurance physique face à la chaleur du bitume",
                "Sens du travail bien fait pour la sécurité des millions d'usagers de la route"
            ],
            "tools": [
                "Râteaux à enrobé, raclettes thermiques et pilonneuses mécaniques",
                "Lasers de voirie et niveaux d'optique de chantier",
                "Scies à sol à disque diamant pour découpe d'enrobé existant",
                "Cylindres compacteurs guidés et plaques vibrantes"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "CAP (2 ans)",
                    "title": "CAP Constructeur de Routes et Aménagements Urbains",
                    "desc": "La formation d'apprentissage mise en valeur par le reportage de L'Étudiant."
                },
                {
                    "step": "Bac Pro (3 ans)",
                    "title": "Bac Pro Travaux Publics",
                    "desc": "Formation complète menant aux fonctions de chef d'équipe de voirie."
                },
                {
                    "step": "BP Travaux Publics",
                    "title": "Brevet Professionnel VRD",
                    "desc": "Perfectionnement technique en topographie de voirie et organisation de chantier."
                }
            ],
            "schools": [
                {
                    "name": "CFA des Travaux Publics (Égletons, Paris, Lyon) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centres de formation de la Fédération Nationale des TP (FNTP) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certificat AIPR Opérateur (Travaux à proximité des réseaux)",
                "CACES compacteur et mini-engins R482",
                "Habilitation Sauveteur Secouriste du Travail (SST)"
            ],
            "schoolSubjects": [
                "Technologie des liants hydrocarbonés et granulats",
                "Topographie et nivellement",
                "Sécurité routière de chantier",
                "Lecture de plans de voirie"
            ]
        },
        "career": {
            "sectors": [
                "Grandes entreprises de travaux routiers (Colas, Eurovia, Eiffage Route, NGE)",
                "PME régionales de travaux publics et voiries et réseaux divers (VRD)",
                "Services de voirie des métropoles et directions des routes"
            ],
            "employerTypes": [
                "Entreprises de travaux routiers",
                "Filiales routières de majors du BTP",
                "Régies municipales de voirie"
            ],
            "evolution": "Ouvrier routier débutant ➔ Applicateur régleur d'enrobés ➔ Chef d'équipe voirie ➔ Chef de chantier routier",
            "pros": "Sentiment fort d'utilité publique (relier les territoires), esprit d'équipe très soudé, rémunération intéressante avec primes de chantiers.",
            "cons": "Chaleur intense lors de l'application du bitume en été, bruit des engins, travail parfois de nuit pour ne pas bloquer le trafic."
        },
        "gettingStarted": {
            "beginnerProject": "Observer le passage d'un finisseur et d'un compacteur lors de la réfection de la route de son quartier.",
            "intermediateProject": "Poser trois bordures de jardin parfaitement alignées au niveau laser sur lit de mortier.",
            "advancedProject": "Calculer le tonnage d'enrobé à commander pour recouvrir 500 mètres de route sur 6 mètres de large avec une épaisseur de 6 cm.",
            "portfolioIdeas": [
                "Photos de réalisations de voiries et ronds-points",
                "Rapport de stage dans une entreprise de TP routiers"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des systèmes de guidage laser et GPS 3D asservissent automatiquement la hauteur de la table du finisseur au millimètre près pour une planéité parfaite.",
            "automatedTasks": [
                "Guidage automatique de l'épaisseur d'enrobé par satellite GNSS",
                "Cartographie thermique du refroidissement de l'enrobé par caméra infrarouge"
            ],
            "emergingSkills": [
                "Utilisation de compacteurs connectés mesurant le taux de compactage en temps réel"
            ],
            "humanEdge": "Le savoir-faire manuel pour réaliser les raccords au râteau autour des bouches d'égout et la vigilance face au trafic."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les ouvriers routiers sont les bâtisseurs de l'émergence économique : ils ont déroulé les centaines de kilomètres d'enrobés de l'autoroute de l'Avenir Dakar-Diamniadio-AIBD, de l'autoroute Ila Touba, du corridor Dakar-Bamako et des grands boulevards du BRT dakarois sous la supervision de l'AGEROUTE.",
            "localSectors": [
                "AGEROUTE (Agence des Travaux et de Gestion des Routes)",
                "Entreprises de TP routiers (Eiffage Sénégal, CSE, Sogea-Satom, Arezki)",
                "Projets de pistes rurales d'enclavement (PUDC)"
            ],
            "remoteWork": "Non compatible (100% sur le bitume en extérieur).",
            "entrepreneurship": "Création d'une PME de voiries urbaines, pavage autobloquant et assainissement pour les communes sénégalaises."
        },
        "relatedJobSlugs": [
            "conducteur-engins-chantier",
            "chef-de-chantier",
            "ingenieur-dans-le-btp"
        ],
        "connectedFamilies": [
            "industrie-mecanique",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Témoignage de Cédric, apprenti ouvrier routier — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/ouvrier-routier-le-temoignage-de-cedric-apprenti.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "Routes de France — Organisation professionnelle des travaux routiers",
                "url": "https://www.routesdefrance.com/",
                "source": "Routes de France"
            }
        ],
        "sources": [
            "L'Étudiant",
            "Routes de France",
            "FNTP"
        ],
        "interests": [
            "sport-plein-air",
            "construire-fabriquer",
            "technique-outils"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "L'enrobé bitumineux est l'un des matériaux les plus recyclés au monde : en France et sur les grands chantiers modernes, jusqu'à 70% du vieux bitume raboté est réinjecté dans les centrales pour fabriquer la nouvelle route !",
            "pourquoi": "Cette boucle vertueuse économise des millions de tonnes de granulats de carrières et de bitume pétrolier.",
            "a_retenir": "Le bâtisseur de routes qui rapproche les hommes et ouvre les voies du futur."
        }
    },
    {
        "id": "conducteur-engins-chantier",
        "slug": "conducteur-engins-chantier",
        "title": "Conducteur d'Engins de Chantier",
        "aliases": [
            "Pilote d'engins TP",
            "Conducteur de pelle mécanique",
            "Terrassier mécanicien"
        ],
        "icon": "🚜",
        "image": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Terrassement & Engins de Chantier",
        "domainId": "engins-terrassement-chantier",
        "subdomain": "Conduite d'engins, Terrassement & Pelles",
        "sectors": [
            "BTP",
            "Travaux Publics",
            "Engins"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "CAP Conducteur d'engins de TP à Bac Pro Travaux Publics",
        "salary": "🇫🇷 France : 2 000 - 3 200 € net/mois (~28 000 - 45 000 € brut/an avec primes d'heures, Source : L'Étudiant) • 🇸🇳 Sénégal : 250 000 - 850 000 FCFA / mois (Mines, grands terrassements autoroutiers, carrières)",
        "simpleDefinition": "Le conducteur d'engins pilote des machines géantes et surpuissantes (pelleteuses hydrauliques de 30 tonnes, bulldozers, tombereaux articulés, niveleuses) pour déblayer des milliers de tonnes de terre, creuser les tranchées et niveler le sol avec une précision chirurgicale.",
        "shortDescription": "Maître de la puissance mécanique cité par L'Étudiant, il manie des manettes électroniques depuis sa cabine climatisée pour déplacer des montagnes.",
        "longDescription": "Comme décrit dans la fiche métier de L'Étudiant, le conducteur d'engins est le roi du terrassement. Installé dans sa cabine panoramique haute technologie dotée de joysticks hydrauliques et d'écrans GPS 3D, il déblaie les collines, remblaie les vallées, creuse les fondations d'immeubles ou les tranchées de canalisations sans jamais accrocher les câbles souterrains. Responsable de son engin qui coûte souvent plusieurs centaines de milliers d'euros, il effectue l'entretien quotidien (graissage des axes, vérification des niveaux d'huile hydraulique et contrôle des chenilles).",
        "mainObjective": "Déplacer et niveler des volumes massifs de terre et de roches rapidement et avec une précision millimétrique en toute sécurité.",
        "companyRole": "Opérateur clé de la force mécanique et du terrassement initial du chantier.",
        "workEnvironment": [
            "🚜 Cabine climatisée et suspendue d'engins de travaux publics de grande taille",
            "🏞️ Chantiers de terrassement, carrières, mines et plateformes autoroutières",
            "🎧 Environnement bruyant et poussiéreux à l'extérieur mais isolé dans la cabine"
        ],
        "missions": [
            "Piloter des engins de terrassement diversifiés (pelles à chenilles, chargeuses, bouteurs, dumpers)",
            "Creuser les fouilles, tranchées et bassins de rétention en suivant les cotes des géomètres",
            "Niveler et régler les plates-formes de terrassement au laser ou par guidage GPS 3D",
            "Charger les camions bennes en optimisant la rotation sans perte de temps",
            "Assurer l'entretien préventif courant de la machine (graissage, filtres, tension des chenilles)"
        ],
        "typicalDay": [
            {
                "time": "07:30",
                "title": "Contrôle journalier de la pelle",
                "desc": "Tour de la pelleteuse de 25 tonnes, vérification du niveau d'huile hydraulique et graissage des axes de flèche et godet."
            },
            {
                "time": "08:15",
                "title": "Terrassement d'un sous-sol d'immeuble",
                "desc": "Extraction de 800 m³ de terre avec chargement continu de semi-remorques bennes en moins de 3 minutes par camion."
            },
            {
                "time": "13:30",
                "title": "Ouverture d'une tranchée étroite",
                "desc": "Changement de godet pour monter un godet de curage orientable et creusement d'une tranchée au ras d'un câble haute tension repéré au détecteur."
            },
            {
                "time": "16:00",
                "title": "Nivellement de finition au GPS",
                "desc": "Passage au bulldozer guidé par satellite 3D pour régler la plateforme d'un futur entrepôt avec une tolérance de +/- 1 cm."
            }
        ],
        "skills": {
            "technical": [
                "Pilotage expert des différents types d'engins de chantier (catégories CACES R482)",
                "Lecture de piquets topographiques et compréhension des pentes et talus",
                "Mécanique d'engins, hydraulique de puissance et maintenance de premier niveau",
                "Maîtrise des systèmes de guidage d'engins 3D par GPS et station totale (Trimble, Leica)"
            ],
            "human": [
                "Excellente coordination motrice œil-main et perception spatiale du gabarit",
                "Sens aigu des réflexes de sécurité et vigilance pour les ouvriers à pied autour",
                "Calme, patience et concentration soutenue pendant de longues heures"
            ],
            "tools": [
                "Pelles hydrauliques sur chenilles et sur pneus (Caterpillar, Komatsu, Liebherr)",
                "Bulldozers, chargeuses sur pneus et tombereaux articulés (dumpers)",
                "Systèmes de guidage d'engins 3D avec écrans tactiles de cabine",
                "Pompes à graisse haute pression et outillage mécanique"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "CAP (2 ans)",
                    "title": "CAP Conducteur d'Engins : Travaux Publics et Carrières",
                    "desc": "Formation de référence mise en avant par L'Étudiant avec entraînement intensif sur simulateur et engins réels."
                },
                {
                    "step": "Bac Pro (3 ans)",
                    "title": "Bac Pro Travaux Publics ou Maintenance des Matériels",
                    "desc": "Double compétence en conduite d'engins et mécanique lourde."
                },
                {
                    "step": "Certificats CACES R482",
                    "title": "CACES R482 (Catégories B1, C1, D, E, F)",
                    "desc": "Les permis indispensables renouvelés tous les 5 ans pour piloter légalement chaque catégorie d'engin."
                }
            ],
            "schools": [
                {
                    "name": "CFA des Travaux Publics et lycées professionnels TP — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centres de formation AFPA et EATP Égletons — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Centres de perfectionnement des travaux publics du Sénégal — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "CACES R482 Engins de chantier (Catégories B1 pelle, C1 chargeuse)",
                "Certification AIPR Opérateur",
                "Attestation éco-conduite d'engins TP"
            ],
            "schoolSubjects": [
                "Technologie des engins et hydraulique",
                "Topographie et terrassement",
                "Règles de sécurité et circulation sur chantier",
                "Mécanique d'engins lourds"
            ]
        },
        "career": {
            "sectors": [
                "Grandes entreprises de terrassement et travaux publics",
                "Exploitants de carrières de granulats et cimenteries",
                "Exploitations minières à ciel ouvert",
                "Entreprises de démolition et de dépollution"
            ],
            "employerTypes": [
                "Terrassiers spécialisés",
                "Entreprises générales de BTP",
                "Groupes carriers et miniers"
            ],
            "evolution": "Conducteur de tombereau débutant ➔ Conducteur de pelle qualifié ➔ Conducteur d'engins polyvalent confirmé ➔ Chef d'équipe terrassement",
            "pros": "Plaisir de manier des machines colossales avec des joysticks d'une grande douceur, forte autonomie en cabine, métier très valorisé et bien payé.",
            "cons": "Vibrations continues du siège, travail parfois monotone lors de longues phases de déblais, déplacements sur de grands chantiers éloignés."
        },
        "gettingStarted": {
            "beginnerProject": "Tester un simulateur de pelleteuse sur ordinateur ou jeu vidéo spécialisé pour comprendre le maniement inversé des deux joysticks.",
            "intermediateProject": "Observer le cycle de travail d'une pelleteuse chargeant un camion (temps de rotation, positionnement de la benne).",
            "advancedProject": "Calculer le foisonnement d'une terre argileuse compacte passant de l'état naturel à l'état déblayé dans la benne (+25%).",
            "portfolioIdeas": [
                "Certificat de formation sur simulateur d'engins",
                "Attestation CACES obtenue avec succès"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "Des engins semi-autonomes creusent déjà automatiquement selon le modèle 3D sans que le conducteur n'ait besoin de toucher aux manettes de profondeur.",
            "automatedTasks": [
                "Arrêt automatique du godet à la profondeur exacte demandée",
                "Détection automatique de piétons par caméras à intelligence artificielle"
            ],
            "emergingSkills": [
                "Pilotage et supervision d'engins de terrassement téléopérés à distance"
            ],
            "humanEdge": "La sensibilité au terrain (ressentir si le godet bute sur un rocher dur ou un tuyau plastique) et l'adaptabilité aux imprévus du sol."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les conducteurs d'engins de chantier sont très recherchés pour les chantiers d'envergure du Plan Sénégal Émergent : terrassement de la ville de Diamniadio, exploitation des mines de phosphate de Taïba, carrières de calcaire de Pout et de Rufisque, et dragage du port de Dakar.",
            "localSectors": [
                "Grands chantiers d'infrastructures (Eiffage, CSE, Sogea-Satom)",
                "Industries minières et carrières (Sococim, Dangote, GCO Grande Côte Operations)",
                "Dragage portuaire"
            ],
            "remoteWork": "Non compatible (conduite physique de la machine sur le site).",
            "entrepreneurship": "Création d'une entreprise de location d'engins de terrassement avec chauffeur pour les chantiers de particuliers et de PME."
        },
        "relatedJobSlugs": [
            "grutier",
            "ouvrier-routier",
            "chef-de-chantier"
        ],
        "connectedFamilies": [
            "industrie-mecanique",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier Conducteur d'engins — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/conducteur-d-engins-de-chantier.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "FNTP — Fédération Nationale des Travaux Publics",
                "url": "https://www.fntp.fr/",
                "source": "FNTP"
            }
        ],
        "sources": [
            "L'Étudiant",
            "FNTP",
            "Caterpillar University"
        ],
        "interests": [
            "technique-outils",
            "sport-plein-air",
            "construire-fabriquer"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Les plus grandes pelleteuses de terrassement minier au monde pèsent près de 1 000 tonnes et leur godet peut soulever plus de 100 tonnes de roches en un seul coup !",
            "pourquoi": "Grâce à des circuits hydrauliques colossaux générant des pressions de plus de 350 bars.",
            "a_retenir": "Le pilote de titan qui sculpte la terre à coups de godet."
        }
    },
    {
        "id": "grutier",
        "slug": "grutier",
        "title": "Grutier à Tour & Grutier Mobile",
        "aliases": [
            "Pilote de grue à tour",
            "Opérateur de grue mobile télescopique",
            "Conducteur d'appareils de levage BTP"
        ],
        "icon": "🏗️",
        "image": "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Terrassement & Engins de Chantier",
        "domainId": "engins-terrassement-chantier",
        "subdomain": "Grutage à tour, Grue mobile & Levage lourd",
        "sectors": [
            "BTP",
            "Levage",
            "Gros Œuvre"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "Titre Professionnel Grutier / CAP BTP + CACES R487",
        "salary": "🇫🇷 France : 2 200 - 3 600 € net/mois (~32 000 - 52 000 € brut/an avec primes de hauteur, Source : L'Étudiant) • 🇸🇳 Sénégal : 300 000 - 950 000 FCFA / mois (Grands chantiers de tours à Dakar, ponts et ports)",
        "simpleDefinition": "Le grutier pilote depuis sa cabine perchée à plusieurs dizaines de mètres de hauteur une grue à tour géante pour déplacer et déposer avec une précision millimétrique des charges de plusieurs tonnes (bennes de béton, banches métalliques, palettes de briques) sur le chantier.",
        "shortDescription": "Sentinelle du ciel et chef d'orchestre du levage mis en lumière par L'Étudiant, il domine le chantier et approvisionne l'ensemble des équipes au sol.",
        "longDescription": "Comme décrit dans la fiche métier de L'Étudiant, le grutier a une responsabilité colossale. Perché dans sa cabine vitrée à 40 ou 80 mètres d'altitude après avoir gravi l'échelle du mât, il a une vue imprenable sur tout le chantier. Maniant deux manettes ultrasensibles pour combiner rotation de la flèche, déplacement du chariot et descente du câble, il dépose des fardeaux immenses à quelques centimètres près des coffreurs, souvent en aveugle grâce aux indications précises transmises par radio par le chef de manœuvre au sol. Il surveille en continu la vitesse du vent à l'anémomètre et met sa grue en girouette dès que les rafales dépassent 72 km/h.",
        "mainObjective": "Assurer l'ensemble des opérations de levage et d'approvisionnement du chantier avec une précision chirurgicale et une sécurité absolue.",
        "companyRole": "Cœur névralgique de la logistique verticale et du rythme de production du chantier.",
        "workEnvironment": [
            "🏗️ Cabine de grue à tour panoramique isolée à haute altitude (30 à 80 m)",
            "🌤️ Vue imprenable sur la ville, exposé au vent et aux variations de température",
            "📻 Communication radio permanente avec les équipes au sol (élingueurs, chefs de chantier)"
        ],
        "missions": [
            "Effectuer les vérifications de sécurité quotidiennes (freins, câbles de levage, anémomètre, fin de course)",
            "Déplacer les charges lourdes (banches, bennes à béton, armatures, prédalles) à travers tout le chantier",
            "Coordonner les manœuvres en aveugle via le guidage radio de l'élingueur",
            "Surveiller les conditions météorologiques et interrompre immédiatement le levage en cas de vent fort",
            "Mettre la grue en girouette le soir pour qu'elle s'oriente librement dans le lit du vent sans basculer"
        ],
        "typicalDay": [
            {
                "time": "07:15",
                "title": "Ascension du mât et vérifications",
                "desc": "Montée des échelles avec harnais de sécurité jusqu'à la cabine à 45 mètres, mise en route des commandes et contrôle de l'anémomètre (vent à 18 km/h)."
            },
            {
                "time": "08:00",
                "title": "Rotation de banches de coffrage",
                "desc": "Déplacement d'un train de banches métalliques de 4 tonnes depuis la zone de stockage jusqu'au 3e étage en guidage radio."
            },
            {
                "time": "11:30",
                "title": "Coulage continu du béton",
                "desc": "Navette ininterrompue de la benne de 1 500 litres entre le camion malaxeur et les bancheurs au sommet du bâtiment."
            },
            {
                "time": "16:30",
                "title": "Mise en sécurité de la grue",
                "desc": "Remontée du crochet au plus haut, dégagement de la flèche et déblocage du frein de girouette pour la nuit."
            }
        ],
        "skills": {
            "technical": [
                "Pilotage précis des mouvements combinés (levage, orientation, chariotage)",
                "Courbes de charges de la grue (capacité de levage en fonction de la portée)",
                "Techniques d'élingage, centre de gravité des charges et résistance des câbles",
                "Réglementation stricte de sécurité de levage et normes anémométriques"
            ],
            "human": [
                "Calme olympien, sang-froid et résistance parfaite au vertige",
                "Sens aigu de la précision millimétrique et acuité visuelle excellente",
                "Capacité de concentration intense et prolongée en isolement dans la cabine"
            ],
            "tools": [
                "Grues à tour à montage par éléments (GME - Potain, Liebherr)",
                "Grues à montage rapide (GMR) télécommandées au sol",
                "Anémomètres de cabine et indicateurs de moment de charge",
                "Talkies-walkies professionnels avec canaux sécurisés"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Formation CACES R487",
                    "title": "CACES R487 Grue à Tour (Catégories 1 et 3)",
                    "desc": "Le certificat légal obligatoire attestant de la capacité à conduire les grues à cabine ou télécommandées."
                },
                {
                    "step": "Titre Professionnel (6 mois)",
                    "title": "Titre Professionnel Conducteur de Grue à Tour (AFPA)",
                    "desc": "Formation complète très reconnue combinant théorie du levage, simulateurs et pratique réelle en hauteur."
                },
                {
                    "step": "CAP / Bac Pro",
                    "title": "CAP ou Bac Pro BTP avec mention levage",
                    "desc": "Parcours complet ouvrant l'accès aux postes de grutier pour les majors du bâtiment."
                }
            ],
            "schools": [
                {
                    "name": "Centres AFPA spécialisés en levage et grues à tour — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "CFA du BTP et centres de formation agréés CACES — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Écoles de formation aux métiers portuaires et de levage de Dakar — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "CACES R487 Grue à Tour (conduite en cabine)",
                "Visite médicale renforcée d'aptitude au travail en hauteur",
                "Habilitation Sauveteur Secouriste du Travail"
            ],
            "schoolSubjects": [
                "Mécanique de levage et treuils",
                "Physique des forces et équilibre",
                "Réglementation des appareils de levage",
                "Météorologie appliquée"
            ]
        },
        "career": {
            "sectors": [
                "Grandes entreprises de construction et de gros œuvre",
                "Sociétés de location de matériel de levage avec opérateur",
                "Chantiers navals et manutention portuaire lourde"
            ],
            "employerTypes": [
                "Entreprises générales de bâtiment",
                "Loueurs de grues professionnels",
                "Majors du BTP"
            ],
            "evolution": "Grutier sur grue de moyenne hauteur ➔ Grutier grands chantiers de tours (80 m+) ➔ Chef de manœuvre levage ➔ Moniteur d'école de grue ➔ Chef de parc matériel",
            "pros": "Vue imprenable chaque jour, rôle de roi du chantier très respecté par toutes les équipes, rémunération très valorisée avec primes de hauteur.",
            "cons": "Isolement total dans la cabine pendant la journée, fatigue oculaire et nerveuse liée à la concentration permanente."
        },
        "gettingStarted": {
            "beginnerProject": "Observer les mouvements d'une grue de chantier en ville et analyser comment le grutier compense l'effet de balancier de la charge.",
            "intermediateProject": "Tester un simulateur de grue à tour pour comprendre l'inversion des commandes lors de la rotation.",
            "advancedProject": "Calculer la charge maximale admissible à 50 mètres de portée d'après la courbe de charge d'une grue Potain.",
            "portfolioIdeas": [
                "Certificat de formation CACES R487",
                "Rapport de stage d'élingueur sur chantier de gros œuvre"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des caméras gyrostabilisées sous le chariot et des systèmes anti-collision automatiques assistent le grutier pour empêcher que deux flèches de grues voisines ne se percutent.",
            "automatedTasks": [
                "Système anti-collision automatique entre grues proches",
                "Amortissement électronique automatique du balancement de la charge"
            ],
            "emergingSkills": [
                "Utilisation de cabines de grue virtuelles téléopérées depuis le sol par caméras 4K"
            ],
            "humanEdge": "La délicatesse du toucher des manettes pour poser une pièce de 5 tonnes au millimètre près sans à-coup."
        },
        "africaContext": {
            "senegalInsight": "À Dakar, la multiplication des tours de grand standing aux Almadies, au Plateau et à Diamniadio a fait exploser la présence des grues à tour dans le ciel de la capitale, créant une forte demande de grutiers d'élite capables d'opérer en sécurité face aux alizés maritimes vigoureux.",
            "localSectors": [
                "Grands chantiers de tours dakarois (Eiffage Sénégal, CSE, Batiplus)",
                "Port Autonome de Dakar (grues mobiles et portiques)",
                "Sociétés de location de grues"
            ],
            "remoteWork": "Non compatible (présence physique obligatoire en cabine).",
            "entrepreneurship": "Création d'une société de services d'élingage professionnel et de mise à disposition de grutiers certifiés pour les chantiers."
        },
        "relatedJobSlugs": [
            "conducteur-engins-chantier",
            "coffreur-bancheur",
            "chef-de-chantier"
        ],
        "connectedFamilies": [
            "industrie-mecanique",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier Grutier — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/grutier.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "CISMA — Syndicat des équipements pour la construction",
                "url": "https://www.cisma-france.com/",
                "source": "CISMA"
            }
        ],
        "sources": [
            "L'Étudiant",
            "CISMA",
            "Potain Manitowoc"
        ],
        "interests": [
            "technique-outils",
            "sport-plein-air",
            "construire-fabriquer"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Pour éviter qu'une grue de 60 mètres ne bascule sous une tempête, son frein de rotation est totalement désactivé la nuit : la flèche tourne librement comme une girouette pour offrir le moins de prise possible au vent !",
            "pourquoi": "Si la grue était bloquée face au vent, la force exercée sur la flèche ferait plier le mât en acier.",
            "a_retenir": "L'aigle du chantier qui veille sur tous les ouvriers depuis les nuages."
        }
    },
    {
        "id": "conducteur-de-travaux",
        "slug": "conducteur-de-travaux",
        "title": "Conducteur de Travaux BTP",
        "aliases": [
            "Conductrice de travaux",
            "Responsable de travaux BTP",
            "Chargé de conduite d'opérations"
        ],
        "icon": "👷",
        "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Gestion & Conduite de Chantier",
        "domainId": "conduite-gestion-chantier",
        "subdomain": "Conduite d'opérations & Coordination",
        "sectors": [
            "BTP",
            "Gestion de Chantier",
            "Management"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "Bac +2 (BTS Bâtiment, BTS TP) à Bac +5 (Ingénieur Travaux / ESTP)",
        "salary": "🇫🇷 France : 2 600 - 4 800 € net/mois (~36 000 - 70 000 € brut/an avec véhicule de fonction et primes, Source : L'Étudiant) • 🇸🇳 Sénégal : 500 000 - 1 800 000 FCFA / mois (Entreprises générales de BTP, chantiers immobiliers)",
        "simpleDefinition": "Le conducteur de travaux est le véritable patron opérationnel d'un ou plusieurs chantiers : il coordonne l'ensemble des moyens humains, techniques et financiers, gère les sous-traitants et veille au respect strict du planning, du budget et de la sécurité du premier jour à la livraison.",
        "shortDescription": "Pivot central de la construction détaillé par L'Étudiant, il assure le lien permanent entre la direction, le client, les architectes et les équipes de chantier.",
        "longDescription": "Comme décrit avec précision dans la fiche métier de L'Étudiant, le conducteur de travaux est le responsable direct de la bonne exécution des ouvrages. Dès la phase de préparation, il étudie le dossier technique, recrute les sous-traitants, négocie les achats de matériaux et établit le planning d'intervention. Durant les travaux, il manage les chefs de chantier, règle les litiges techniques, contrôle les dépenses financières chaque semaine et anime les réunions de chantier avec le maître d'ouvrage jusqu'à la levée de la dernière réserve lors de la réception.",
        "mainObjective": "Livrer l'ouvrage dans les délais impartis, au niveau de qualité contractuel et en dégageant la rentabilité financière prévue en toute sécurité.",
        "companyRole": "Patron opérationnel et financier du chantier, responsable de la réussite globale du projet.",
        "workEnvironment": [
            "🚗 Mobilité permanente entre plusieurs chantiers, bureaux de chantier et siège de l'entreprise",
            "🦺 Présence régulière sur le terrain pour contrôler la qualité d'exécution des travaux",
            "💼 Réunions hebdomadaires de coordination avec architectes, clients et bureaux de contrôle"
        ],
        "missions": [
            "Préparer le chantier (planning directeur, budget prévisionnel, démarches administratives et de voirie)",
            "Sélectionner, négocier et contractualiser les marchés avec les entreprises sous-traitantes",
            "Manager les chefs de chantier et veiller à l'application rigoureuse du plan de sécurité (PPSPS)",
            "Contrôler la conformité des travaux avec les plans d'architecte et les règles de l'art (DTU)",
            "Gérer la facturation mensuelle, suivre la rentabilité financière et organiser la réception de l'ouvrage"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Point avec le chef de chantier",
                "desc": "Visite du chantier d'une résidence de 60 logements : vérification du coulage de la dalle du 2e étage et validation du planning de pose des fenêtres."
            },
            {
                "time": "10:30",
                "title": "Réunion de chantier avec l'architecte",
                "desc": "Examen des détails de raccordement de la façade isolée et arbitrage technique sur le passage des gaines électriques."
            },
            {
                "time": "14:00",
                "title": "Gestion financière au bureau",
                "desc": "Validation des situations de travaux des sous-traitants électriciens et mise à jour du prévisionnel budgétaire à terminaison."
            },
            {
                "time": "16:30",
                "title": "Négociation avec un fournisseur de béton",
                "desc": "Négociation d'une remise tarifaire pour la commande de 1 200 m³ de béton bas-carbone sur le prochain chantier."
            }
        ],
        "skills": {
            "technical": [
                "Technologie générale du bâtiment et des travaux publics (gros œuvre et tous corps d'état)",
                "Gestion financière de chantier, analyse des coûts de revient et marges d'exploitation",
                "Droit de la construction, marchés de travaux et gestion des réclamations",
                "Planification de travaux (MS Project) et lecture critique de maquettes BIM"
            ],
            "human": [
                "Autorité naturelle, leadership et excellentes qualités relationnelles",
                "Sens aigu de l'organisation méthodique et gestion des priorités multiples",
                "Résistance au stress et grande capacité de négociation ferme et courtoise"
            ],
            "tools": [
                "Logiciels de planification de travaux (MS Project, Primavera)",
                "Applications mobiles de suivi de chantier et levée de réserves (Finalcad, PlanRadar)",
                "Logiciels de gestion financière BTP (Onaya, Sage BTP)",
                "Visionneuses de plans et de maquettes BIM (BIMx, Navisworks)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "BTS / BUT (Bac +2/+3)",
                    "title": "BTS Bâtiment, BTS TP ou BUT Génie Civil Construction Durable",
                    "desc": "La voie d'accès très appréciée mise en valeur par L'Étudiant, combinant technique et conduite d'équipes."
                },
                {
                    "step": "Licence Pro (Bac +3)",
                    "title": "Licence Pro Conduite de Travaux BTP",
                    "desc": "Année de spécialisation en alternance très recherchée par les entreprises générales."
                },
                {
                    "step": "Diplôme d'Ingénieur (Bac +5)",
                    "title": "Ingénieur ESTP, INSA, Polytech ou Mines",
                    "desc": "Accès direct aux responsabilités de conducteur de travaux principal sur grands projets."
                }
            ],
            "schools": [
                {
                    "name": "ESTP Paris (École Spéciale des Travaux Publics) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Lycées préparant le BTS Bâtiment et BUT Génie Civil — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) / Génie Civil — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "École Polytechnique de Thiès (EPT) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification en Conduite de Travaux BTP",
                "Habilitation AIPR Concepteur / Encadrant",
                "Attestation de Coordinateur Sécurité SPS"
            ],
            "schoolSubjects": [
                "Organisation et gestion de chantier",
                "Droit de la construction",
                "Résistance des matériaux appliquée",
                "Comptabilité analytique de travaux"
            ]
        },
        "career": {
            "sectors": [
                "Entreprises générales de bâtiment et de travaux publics",
                "PME régionales de construction tous corps d'état",
                "Promoteurs immobiliers et sociétés d'économie mixte"
            ],
            "employerTypes": [
                "Majors du BTP (Vinci, Bouygues, Eiffage)",
                "Entreprises générales régionales",
                "Entreprises de second œuvre"
            ],
            "evolution": "Conducteur de travaux junior ➔ Conducteur de travaux principal ➔ Directeur de travaux ➔ Directeur d'agence BTP",
            "pros": "Grande autonomie et responsabilités de chef d'orchestre, fierté concrète des réalisations livrées, véhicule de fonction et perspectives de carrière rapides.",
            "cons": "Journées denses et imprévus permanents sur les chantiers, pression sur les délais de livraison."
        },
        "gettingStarted": {
            "beginnerProject": "Suivre un projet de rénovation dans son entourage et noter toutes les étapes d'intervention des corps d'état.",
            "intermediateProject": "Établir un rétro-planning de chantier sous Excel pour la rénovation complète d'un appartement de 70 m².",
            "advancedProject": "Rédiger un plan particulier de sécurité et de protection de la santé (PPSPS) pour un chantier de terrassement.",
            "portfolioIdeas": [
                "Planning de travaux réel réalisé sous MS Project",
                "Rapport de suivi d'un chantier de bâtiment livré"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA analyse les photos de chantier prises sur smartphone pour mettre à jour automatiquement le pourcentage d'avancement des corps d'état et anticiper les retards.",
            "automatedTasks": [
                "Suivi automatique de l'avancement par vision par ordinateur",
                "Génération automatique des comptes-rendus de réunion de chantier"
            ],
            "emergingSkills": [
                "Utilisation de plateformes collaboratives de chantier augmentées par IA"
            ],
            "humanEdge": "La négociation humaine avec les sous-traitants, le management des équipes et la relation de confiance avec le client."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le conducteur de travaux est le garant de la tenue des délais sur des projets immobiliers et d'infrastructures majeurs (hôtels de la Petite Côte, tours de bureaux au Plateau, cités résidentielles de Diamniadio), manageant des équipes multiculturelles avec une autorité respectueuse.",
            "localSectors": [
                "Grands groupes de BTP (Eiffage Sénégal, CSE, Sogea-Satom, Consortium d'Entreprises)",
                "Promoteurs immobiliers privés sénégalais",
                "Sociétés d'ingénierie et de maîtrise d'œuvre"
            ],
            "remoteWork": "Hybride limité (bureau de chantier indispensable pour être au contact physique des équipes).",
            "entrepreneurship": "Création d'une société de contractant général ou de maîtrise d'œuvre déléguée accompagnant les investisseurs de la diaspora."
        },
        "relatedJobSlugs": [
            "chef-de-chantier",
            "ingenieur-dans-le-btp",
            "maitre-doeuvre",
            "metreur-economiste-construction"
        ],
        "connectedFamilies": [
            "management-gestion",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier Conducteur de travaux — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/conducteur-de-travaux.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "FFB — Fédération Française du Bâtiment",
                "url": "https://www.ffbatiment.fr/",
                "source": "FFB"
            }
        ],
        "sources": [
            "L'Étudiant",
            "FFB",
            "FNTP"
        ],
        "interests": [
            "coordonner-gerer",
            "construire-fabriquer",
            "contact-humain"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Sur un grand chantier de bâtiment, un conducteur de travaux coordonne en moyenne entre 15 et 30 entreprises sous-traitantes différentes et jusqu'à 150 compagnons simultanément !",
            "pourquoi": "Du terrassier au peintre en passant par l'électricien et le vitrier, chaque corps de métier doit intervenir dans un ordre chronologique d'une précision d'horloger.",
            "a_retenir": "Le chef d'orchestre indispensable qui transforme les plans en réalité."
        }
    },
    {
        "id": "chef-de-chantier",
        "slug": "chef-de-chantier",
        "title": "Chef de Chantier BTP",
        "aliases": [
            "Cheffe de chantier",
            "Responsable d'équipe de chantier",
            "Superviseur de chantier gros œuvre"
        ],
        "icon": "🦺",
        "image": "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Gestion & Conduite de Chantier",
        "domainId": "conduite-gestion-chantier",
        "subdomain": "Management terrain & Sécurité de chantier",
        "sectors": [
            "BTP",
            "Chantier",
            "Encadrement"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "Bac Pro Technicien du Bâtiment à Bac +2 (BTS Bâtiment / Travaux Publics)",
        "salary": "🇫🇷 France : 2 200 - 3 500 € net/mois (~30 000 - 50 000 € brut/an avec véhicule et primes, Source : L'Étudiant) • 🇸🇳 Sénégal : 350 000 - 1 100 000 FCFA / mois (Chantiers de construction industrielle et résidentielle)",
        "simpleDefinition": "Le chef de chantier est le patron direct du terrain : présent du matin au soir sur le chantier, il organise le travail quotidien des équipes, commande les matériaux, veille à la sécurité des ouvriers et contrôle la qualité d'exécution de chaque étape.",
        "shortDescription": "Homme de terrain incontournable décrit par L'Étudiant, il fait régner l'ordre, la cadence et la sécurité sur le chantier sous l'autorité du conducteur de travaux.",
        "longDescription": "Comme l'explique en détail la fiche métier de L'Étudiant, le chef de chantier est la cheville ouvrière du BTP. Bras droit du conducteur de travaux, il prépare l'installation du chantier, répartit les tâches entre les chefs d'équipe, contrôle les livraisons de béton et d'acier, et vérifie que chaque mur ou ouvrage est réalisé dans le respect des cotes du plan. Responsable légal de la sécurité au quotidien, il veille au port des équipements de protection et anime les briefings sécurité chaque matin.",
        "mainObjective": "Faire avancer les travaux chaque jour dans le respect scrupuleux des plans, des délais et des règles de sécurité des personnes.",
        "companyRole": "Leader permanent sur le terrain et garant direct de la qualité d'exécution des travaux.",
        "workEnvironment": [
            "🦺 Présence permanente en extérieur sur le chantier, bottes aux pieds et casque vissé sur la tête",
            "🏢 Bureau de chantier modulaire (base-vie) pour les points de pointage et réunions d'équipe",
            "👥 Contact humain permanent avec les ouvriers, les grutiers et les livreurs de matériaux"
        ],
        "missions": [
            "Organiser le travail quotidien des équipes d'ouvriers et des chefs d'équipe selon le planning",
            "Passer les commandes de matériaux (béton prêt à l'emploi, ferraillage, parpaings) pour éviter toute rupture",
            "Contrôler la qualité technique des ouvrages (aplomb, ferraillage, planéité, tolérances de coulage)",
            "Faire appliquer avec fermeté les consignes de sécurité (port du casque, protections antichute)",
            "Tenir le journal de chantier quotidien et consigner les intempéries, livraisons et effectifs présents"
        ],
        "typicalDay": [
            {
                "time": "07:00",
                "title": "Ouverture du chantier et accueil sécurité",
                "desc": "Accueil des équipes au réfectoire, rappel des consignes de sécurité pour le travail en hauteur et distribution des tâches du jour."
            },
            {
                "time": "08:30",
                "title": "Contrôle des réservations avant coulage",
                "desc": "Vérification au mètre ruban du bon positionnement des gaines de plomberie dans les banches avant l'arrivée du béton."
            },
            {
                "time": "11:30",
                "title": "Réception d'une livraison d'aciers",
                "desc": "Contrôle du bon de livraison et guidage du camion pour le déchargement à la grue dans la zone de stockage."
            },
            {
                "time": "15:30",
                "title": "Contrôle qualité et pointage",
                "desc": "Vérification de la planéité de la dalle coulée le matin et pointage des heures des équipes sur la tablette de chantier."
            }
        ],
        "skills": {
            "technical": [
                "Maîtrise complète des techniques d'exécution du gros œuvre et du second œuvre",
                "Lecture experte de tous les plans de coffrage, ferraillage et réseaux",
                "Réglementation de la sécurité sur les chantiers (PPSPS, travail en hauteur, élingage)",
                "Topographie de chantier de base (utilisation du niveau optique et laser rotatif)"
            ],
            "human": [
                "Autorité naturelle bienveillante et leadership de meneur d'hommes",
                "Sens aigu de l'anticipation pour ne jamais bloquer une équipe faute de matériel",
                "Sang-froid et capacité à résoudre les conflits sur le terrain avec justice"
            ],
            "tools": [
                "Niveaux de chantier lasers automatiques et mètres rubans de 50 m",
                "Tablettes tactiles de suivi de chantier (Finalcad, Alobees)",
                "Appareils de mesure d'affaissement du béton (cône d'Abrams)",
                "Équipements de protection individuelle complets (EPI)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Bac Pro (3 ans)",
                    "title": "Bac Pro Technicien du Bâtiment : Organisation et Réalisation du Gros Œuvre",
                    "desc": "La formation de base mise en avant par L'Étudiant avec alternance sur les chantiers."
                },
                {
                    "step": "BTS (Bac +2)",
                    "title": "BTS Bâtiment ou BTS Travaux Publics",
                    "desc": "Le cursus d'excellence permettant d'accéder directement au poste de chef de chantier sans attendre."
                },
                {
                    "step": "Promotion Interne",
                    "title": "Évolution d'ouvrier qualifié à chef de chantier",
                    "desc": "Parcours classique très fréquent dans le BTP valorisant l'expérience de terrain."
                }
            ],
            "schools": [
                {
                    "name": "Lycées professionnels BTP préparant le Bac Pro et BTS — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "CFA du Bâtiment et centres de perfectionnement des cadres de chantier — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "CFPT Sénégal-Japon (Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Habilitation AIPR Encadrant",
                "Certificat de Sauveteur Secouriste du Travail (SST)",
                "Attestation de formation au management de chantier BTP"
            ],
            "schoolSubjects": [
                "Organisation des méthodes de chantier",
                "Lecture de plans de ferraillage",
                "Sécurité et hygiène du travail",
                "Topographie appliquée"
            ]
        },
        "career": {
            "sectors": [
                "Entreprises générales de bâtiment et de génie civil",
                "PME régionales de maçonnerie et gros œuvre",
                "Entreprises de travaux publics et voirie"
            ],
            "employerTypes": [
                "Entreprises de gros œuvre",
                "Majors du BTP",
                "Artisans en développement"
            ],
            "evolution": "Chef d'équipe confirmé ➔ Chef de chantier junior ➔ Chef de chantier principal de grand projet ➔ Conducteur de travaux",
            "pros": "Poste clé très valorisé et respecté sur le chantier, travail concret en plein air sans routine, fortes primes de résultat.",
            "cons": "Présence requise très tôt le matin (dès 7h), fatigue physique des kilomètres parcourus à pied sur le chantier chaque jour."
        },
        "gettingStarted": {
            "beginnerProject": "S'entraîner à donner des consignes claires et précises lors d'une activité sportive ou associative.",
            "intermediateProject": "Apprendre à lire couramment un plan d'armatures de poutre en béton armé.",
            "advancedProject": "Établir le planning journalier d'une équipe de 6 coffreurs pour couler 4 poteaux dans la journée.",
            "portfolioIdeas": [
                "Journal de chantier modèle tenu pendant un stage",
                "Fiche de contrôle qualité de ferraillage validée"
            ]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "L'œil du chef de chantier, son autorité sur les équipes et sa capacité à gérer les imprévus humains et matériels de la minute sont irremplaçables par aucune technologie.",
            "automatedTasks": [
                "Pointage automatique des heures par badgeuse mobile",
                "Commandes automatiques de réassort de petit matériel consommable"
            ],
            "emergingSkills": [
                "Utilisation de tablettes connectées pour la consultation immédiate des plans mis à jour"
            ],
            "humanEdge": "Le regard humain qui détecte en une seconde la fatigue d'un ouvrier ou un danger imminent."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le chef de chantier est la figure d'autorité respectée de tous les ouvriers : il gère le rythme des travaux sous la chaleur dakaroise, maintient la discipline et fait le pont entre les ingénieurs de conception et les compagnons locaux.",
            "localSectors": [
                "Grands chantiers d'infrastructures sénégalais (Eiffage, CSE, Consortium d'Entreprises)",
                "Chantiers immobiliers privés de Dakar et Saly",
                "Chantiers de rénovation urbaine"
            ],
            "remoteWork": "Non compatible (100% sur le terrain du premier au dernier coup de truelle).",
            "entrepreneurship": "Création d'une entreprise de sous-traitance en encadrement et fourniture d'équipes de gros œuvre qualifiées."
        },
        "relatedJobSlugs": [
            "conducteur-de-travaux",
            "contremaitre-btp",
            "macon",
            "coffreur-bancheur"
        ],
        "connectedFamilies": [
            "management-gestion",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier Chef de chantier — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/chef-de-chantier.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "FFB — Fédération Française du Bâtiment",
                "url": "https://www.ffbatiment.fr/",
                "source": "FFB"
            }
        ],
        "sources": [
            "L'Étudiant",
            "FFB",
            "FNTP"
        ],
        "interests": [
            "coordonner-gerer",
            "construire-fabriquer",
            "sport-plein-air"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Un chef de chantier parcourt en moyenne entre 8 et 15 kilomètres à pied par jour sur son chantier, montant et descendant des dizaines d'étages à pied avant que les ascenseurs ne soient installés !",
            "pourquoi": "Pour contrôler de ses propres yeux chaque détail et s'assurer que la sécurité est respectée partout.",
            "a_retenir": "Le patron du terrain sans qui aucun ouvrier ne sait exactement quoi faire le matin."
        }
    },
    {
        "id": "contremaitre-btp",
        "slug": "contremaitre-btp",
        "title": "Contremaître de Chantier BTP",
        "aliases": [
            "Maître ouvrier BTP",
            "Chef d'équipe principal",
            "Superviseur technique de chantier"
        ],
        "icon": "👷",
        "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Gestion & Conduite de Chantier",
        "domainId": "conduite-gestion-chantier",
        "subdomain": "Supervision technique & Encadrement direct",
        "sectors": [
            "BTP",
            "Encadrement",
            "Chantier"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "Bac Pro BTP à Bac +2 (BTS Bâtiment ou Travaux Publics)",
        "salary": "🇫🇷 France : 2 100 - 3 200 € net/mois (~29 000 - 45 000 € brut/an avec primes, Source : L'Étudiant) • 🇸🇳 Sénégal : 300 000 - 900 000 FCFA / mois (Entreprises de BTP, chantiers d'infrastructures)",
        "simpleDefinition": "Le contremaître supervise directement un groupe de chefs d'équipe et d'ouvriers sur le chantier : expert des techniques constructives, il montre le geste juste, contrôle les finitions et veille à ce que les cadences et la sécurité soient respectées.",
        "shortDescription": "Professionnel chevronné cité par L'Étudiant, il assure la jonction directe entre la chefferie de chantier et les équipes opérationnelles au pied du mur.",
        "longDescription": "Comme décrit dans la liste des métiers BTP de L'Étudiant, le contremaître est un technicien d'expérience issu du terrain. Sous les ordres du chef de chantier, il a la responsabilité directe d'un atelier ou d'un secteur de travaux (par exemple le ferraillage, les voiles béton ou le terrassement). Il transmet les consignes techniques, résout les blocages pratiques d'exécution, forme les apprentis et veille à ce que le matériel soit parfaitement entretenu.",
        "mainObjective": "Coordonner les équipes d'exécution au plus près du travail pour garantir une qualité parfaite des réalisations dans les temps impartis.",
        "companyRole": "Relais technique de commandement direct entre le management de chantier et les compagnons.",
        "workEnvironment": [
            "🦺 Présence continue aux côtés des ouvriers sur le front de taille ou de construction",
            "🛠️ Maniement régulier des outils pour montrer l'exemple ou débloquer une difficulté",
            "👥 Rôle de meneur d'équipe et de formateur de jeunes compagnons"
        ],
        "missions": [
            "Répartir les postes de travail entre les compagnons selon leurs compétences respectives",
            "Expliquer les détails des plans d'exécution et guider les traçages au cordeau",
            "Contrôler la qualité des pièces assemblées ou coulées et faire corriger immédiatement les défauts",
            "Veiller au bon usage et à la longévité de l'outillage et des engins mis à disposition",
            "Rendre compte quotidiennement de l'avancement technique au chef de chantier"
        ],
        "typicalDay": [
            {
                "time": "07:30",
                "title": "Bilan technique du matin",
                "desc": "Point avec les chefs d'équipe sur les objectifs de métrés à atteindre avant midi."
            },
            {
                "time": "09:30",
                "title": "Assistance technique sur ferraillage",
                "desc": "Démonstration aux apprentis du calage correct d'un chapeau d'armature au niveau d'un appui de poutre."
            },
            {
                "time": "13:30",
                "title": "Contrôle de planéité d'un plancher",
                "desc": "Vérification au niveau optique de la cote altimétrique des coffrages de dalles."
            },
            {
                "time": "16:00",
                "title": "Bilan d'avancement avec le chef de chantier",
                "desc": "Confirmation de l'achèvement de la zone A et planification des besoins en béton pour le lendemain."
            }
        ],
        "skills": {
            "technical": [
                "Maîtrise exemplaire des tours de main et techniques du métier (gros œuvre ou VRD)",
                "Lecture rapide et sans erreur de tous les documents graphiques de chantier",
                "Gestion des cadences de production et optimisation des gestes d'équipe",
                "Réglementation de la sécurité opérationnelle et prévention des risques"
            ],
            "human": [
                "Autorité respectée fondée sur la compétence technique démontrée",
                "Sens de la pédagogie et transmission patiente du savoir-faire",
                "Esprit d'équité et capacité à motiver les troupes dans l'effort"
            ],
            "tools": [
                "Niveaux lasers et optiques de chantier",
                "Mètres rubans, cordeaux et outillage spécialisé de gros œuvre",
                "Tablettes ou carnets de pointage de chantier",
                "Équipements de protection individuelle complets"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Bac Pro (3 ans)",
                    "title": "Bac Pro Technicien du Bâtiment ou Travaux Publics",
                    "desc": "Formation de base solide aux techniques de construction et d'organisation."
                },
                {
                    "step": "Expérience de terrain (3 à 5 ans)",
                    "title": "Expérience confirmée comme chef d'équipe",
                    "desc": "La légitimité du contremaître repose d'abord sur sa réputation d'excellent compagnon."
                },
                {
                    "step": "BTS (Bac +2)",
                    "title": "BTS Bâtiment ou BTS TP",
                    "desc": "Accès plus rapide au statut de contremaître principal ou adjoint chef de chantier."
                }
            ],
            "schools": [
                {
                    "name": "Lycées professionnels du BTP — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centres de formation continue des Travaux Publics — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "CFPT Sénégal-Japon (Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certificat de Maître Compagnon BTP",
                "Habilitation AIPR Encadrant",
                "Brevet de Sauveteur Secouriste du Travail"
            ],
            "schoolSubjects": [
                "Technologie constructive",
                "Management d'équipe de chantier",
                "Sécurité opérationnelle",
                "Lecture de plans"
            ]
        },
        "career": {
            "sectors": [
                "Entreprises de bâtiment et de travaux publics",
                "Entreprises générales de gros œuvre",
                "Sociétés de terrassement et d'infrastructures"
            ],
            "employerTypes": [
                "PME du BTP",
                "Grandes entreprises de construction",
                "Majors du BTP"
            ],
            "evolution": "Chef d'équipe ➔ Contremaître de chantier ➔ Chef de chantier ➔ Conducteur de travaux",
            "pros": "Reconnaissance unanime de son savoir-faire par les ouvriers, autonomie d'organisation sur son secteur, rôle formateur gratifiant.",
            "cons": "Devoir concilier les exigences de rapidité du chef de chantier avec les difficultés réelles des ouvriers au sol."
        },
        "gettingStarted": {
            "beginnerProject": "Observer le rôle du contremaître sur un chantier : comment il guide un geste sans élever la voix.",
            "intermediateProject": "S'entraîner à expliquer à un débutant comment lire les cotations d'un plan de coffrage.",
            "advancedProject": "Organiser l'enchaînement des tâches d'une équipe de 4 maçons pour monter 50 mètres de mur en une journée.",
            "portfolioIdeas": [
                "Attestation de responsabilités de chef d'équipe",
                "Recommandation d'un chef de chantier pour passage contremaître"
            ]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "Le geste technique parfait, l'évaluation visuelle de la qualité d'une soudure ou d'un coulage et le management direct restent 100% humains.",
            "automatedTasks": [
                "Pointage automatisé des heures par application mobile",
                "Notification automatique des alertes météo sur smartphone"
            ],
            "emergingSkills": [
                "Utilisation d'outils numériques portables pour remonter les anomalies de chantier en temps réel"
            ],
            "humanEdge": "La confiance des ouvriers envers celui qui sait faire le métier mieux que quiconque."
        },
        "africaContext": {
            "senegalInsight": "Sur les chantiers sénégalais, le contremaître est le pont culturel et technique indispensable entre la direction d'ingénierie et les équipes d'ouvriers locaux, parlant wolof et français pour transmettre les consignes avec clarté et bienveillance.",
            "localSectors": [
                "Grands chantiers de BTP (CSE, Eiffage Sénégal, Sogea-Satom)",
                "Chantiers de résidences et de bureaux",
                "Infrastructures régionales"
            ],
            "remoteWork": "Non compatible (100% sur le chantier).",
            "entrepreneurship": "Création d'une entreprise générale de travaux de second œuvre ou de gros œuvre."
        },
        "relatedJobSlugs": [
            "chef-de-chantier",
            "conducteur-de-travaux",
            "macon"
        ],
        "connectedFamilies": [
            "management-gestion",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier Contremaître — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/contremaitre.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "FNTP — Fédération Nationale des Travaux Publics",
                "url": "https://www.fntp.fr/",
                "source": "FNTP"
            }
        ],
        "sources": [
            "L'Étudiant",
            "FNTP",
            "FFB"
        ],
        "interests": [
            "construire-fabriquer",
            "coordonner-gerer",
            "technique-outils"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Le terme 'contremaître' vient du compagnonnage médiéval où il désignait celui qui se tenait 'contre le maître' d'œuvre pour faire exécuter les plans avec une fidélité absolue.",
            "pourquoi": "Il reste aujourd'hui encore le garant direct du respect des règles de l'art au millimètre près.",
            "a_retenir": "L'artisan d'expérience qui montre la voie et guide les bâtisseurs."
        }
    },
    {
        "id": "maitre-doeuvre",
        "slug": "maitre-doeuvre",
        "title": "Maître d'Œuvre BTP (MOE)",
        "aliases": [
            "Chef de projet maîtrise d'œuvre",
            "Coordinateur technique MOE",
            "Ingénieur maître d'œuvre d'exécution"
        ],
        "icon": "📋",
        "image": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Gestion & Conduite de Chantier",
        "domainId": "conduite-gestion-chantier",
        "subdomain": "Maîtrise d'œuvre & Coordination globale",
        "sectors": [
            "BTP",
            "Ingénierie",
            "Gestion de Projet"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "Bac +3 (Licence Pro MOE) à Bac +5 (Ingénieur BTP ou Architecte)",
        "salary": "🇫🇷 France : 2 800 - 5 200 € net/mois (~40 000 - 75 000 € brut/an ou honoraires libéraux, Source : L'Étudiant) • 🇸🇳 Sénégal : 550 000 - 1 900 000 FCFA / mois (Bureaux d'études MOE, cabinets d'architecture)",
        "simpleDefinition": "Le maître d'œuvre (MOE) est le professionnel ou le cabinet mandaté par le client (le maître d'ouvrage) pour concevoir le projet, choisir les entreprises de construction, coordonner les travaux et s'assurer que l'ouvrage est livré conformément aux plans, au budget et aux normes.",
        "shortDescription": "Représentant technique suprême du projet cité par L'Étudiant, il orchestre la conception et supervise l'exécution des travaux pour le compte du client.",
        "longDescription": "Comme expliqué dans la fiche métier de L'Étudiant, il ne faut pas confondre maître d'ouvrage (le client qui paie et commande l'ouvrage) et maître d'œuvre (le technicien qui le conçoit et en supervise la réalisation). Le maître d'œuvre peut être un architecte, un ingénieur ou un cabinet spécialisé. Il rédige le cahier des charges, anime les réunions de chantier hebdomadaires, arbitre les éventuels litiges entre corps d'état, vérifie les situations de paiement et prononce la réception des travaux.",
        "mainObjective": "Piloter la conception et la réalisation de l'ouvrage pour livrer un bâtiment parfait répondant scrupuleusement aux attentes du maître d'ouvrage.",
        "companyRole": "Représentant technique, garant de la qualité et coordinateur général de l'ensemble des acteurs du projet.",
        "workEnvironment": [
            "🏢 Cabinets de maîtrise d'œuvre indépendants, agences d'architecture ou bureaux d'études",
            "🦺 Réunions de chantier hebdomadaires sur site pour vérifier la conformité des travaux",
            "💼 Présentations formelles et arbitrages financiers avec les clients maîtres d'ouvrage"
        ],
        "missions": [
            "Concevoir le projet architectural et technique d'après les besoins exprimés par le client",
            "Rédiger les dossiers de consultation des entreprises (CCTP, CCAP) et analyser les offres reçues",
            "Diriger les réunions de chantier hebdomadaires et rédiger les comptes-rendus opposables",
            "Vérifier les factures des entreprises et certifier les demandes de paiement pour le client",
            "Assister le client lors des opérations préalables à la réception (OPR) et acter la livraison"
        ],
        "typicalDay": [
            {
                "time": "09:00",
                "title": "Direction de la réunion de chantier",
                "desc": "Tour complet du chantier avec les 12 chefs d'entreprises sous-traitantes et arbitrage d'un décalage de planning."
            },
            {
                "time": "11:30",
                "title": "Rédaction du compte-rendu de chantier",
                "desc": "Envoi du procès-verbal officiel listant les actions correctives à mener par le plaquiste et l'électricien sous 48h."
            },
            {
                "time": "14:30",
                "title": "Point financier avec le maître d'ouvrage",
                "desc": "Présentation au directeur d'hôpital de l'état d'avancement des dépenses et validation d'un avenant pour une amélioration technique."
            },
            {
                "time": "17:00",
                "title": "Visite préalable de réception",
                "desc": "Contrôle des finitions d'un plateau de bureaux et notation des éventuelles réserves sur tablette."
            }
        ],
        "skills": {
            "technical": [
                "Loi MOP (Maîtrise d'Ouvrage Publique) et réglementation des marchés privés de travaux",
                "Connaissances transversales complètes en structure, fluides, thermique et finitions",
                "Gestion contractuelle, analyse des avenants et vérification des décomptes généraux définitifs (DGD)",
                "Procédures d'Opérations Préalables à la Réception (OPR) et garanties légales (décennale, parfait achèvement)"
            ],
            "human": [
                "Autorité naturelle, impartialité et grand sens de l'équité",
                "Excellente diplomatie pour désamorcer les conflits entre entreprises sur chantier",
                "Rigueur juridique et sens de la responsabilité envers le client"
            ],
            "tools": [
                "Logiciels de gestion de comptes-rendus et de suivi de chantier (BatiScript, Archireport)",
                "Outils de planification OPC (MS Project)",
                "Visionneuses de maquettes BIM (BIM Vision, Navisworks)",
                "Appareils de mesure de conformité technique"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Bac +3 (Licence Pro)",
                    "title": "Licence Pro Métiers de la Maîtrise d'Œuvre et de la Coordination",
                    "desc": "Formation ciblée sur le suivi juridique, technique et financier de chantier."
                },
                {
                    "step": "Diplôme Bac +5",
                    "title": "Diplôme d'Ingénieur en BTP (ESTP, INSA) ou Diplôme d'État d'Architecte",
                    "desc": "La voie royale pour diriger des missions complètes de maîtrise d'œuvre d'envergure."
                },
                {
                    "step": "Expérience professionnelle",
                    "title": "Expérience préalable en conduite de travaux",
                    "desc": "La connaissance intime de la vie de chantier est le meilleur atout d'un maître d'œuvre respecté."
                }
            ],
            "schools": [
                {
                    "name": "ESTP Paris / ENSA (Écoles d'Architecture) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "IUT et Universités délivrant les Licences Pro BTP — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Collège Universitaire d'Architecture de Dakar (CUAD) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Assurance Décennale Maîtrise d'Œuvre",
                "Certification Professionnelle OPQIBI Maîtrise d'Œuvre",
                "Certification Coordinateur BIM MOE"
            ],
            "schoolSubjects": [
                "Droit des marchés de construction",
                "Gestion contractuelle",
                "Technologie du bâtiment tous corps d'état",
                "Économie de projet"
            ]
        },
        "career": {
            "sectors": [
                "Cabinets de maîtrise d'œuvre indépendants",
                "Agences d'architecture pluridisciplinaires",
                "Sociétés d'ingénierie conseil (Egis, Setec, Artelia)",
                "Services techniques des grandes institutions et collectivités"
            ],
            "employerTypes": [
                "Cabinets de MOE",
                "Bureaux d'ingénierie",
                "Cabinets d'architectes"
            ],
            "evolution": "Chargé d'opérations junior ➔ Maître d'œuvre chef de projet ➔ Directeur du pôle maîtrise d'œuvre ➔ Fondateur de son cabinet de MOE",
            "pros": "Position centrale de décision et d'arbitrage, vision globale de la conception à la livraison, indépendance d'action.",
            "cons": "Responsabilité civile et décennale engagée, gestion quotidienne des tensions et litiges entre artisans et clients."
        },
        "gettingStarted": {
            "beginnerProject": "Assister à une réunion de chantier avec un maître d'œuvre et observer comment il anime le tour de table.",
            "intermediateProject": "Rédiger un compte-rendu de chantier type avec tableau des réserves, entreprises responsables et dates limites.",
            "advancedProject": "Établir le procès-verbal d'Opérations Préalables à la Réception (OPR) d'un bâtiment fictif de 10 appartements.",
            "portfolioIdeas": [
                "Exemple de compte-rendu de chantier professionnel",
                "Dossier de consultation des entreprises (CCTP) rédigé"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'IA retranscrit automatiquement les enregistrements audio des réunions de chantier pour générer les comptes-rendus opposables en quelques secondes.",
            "automatedTasks": [
                "Retranscription vocale automatique des comptes-rendus de chantier",
                "Suivi automatique de la levée des réserves par photo sur smartphone"
            ],
            "emergingSkills": [
                "Utilisation d'assistants IA juridiques pour l'analyse des réclamations contractuelles"
            ],
            "humanEdge": "Le discernement technique impartial et l'autorité morale pour faire respecter la parole donnée."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la maîtrise d'œuvre indépendante est très recherchée par les investisseurs institutionnels et les Sénégalais de l'extérieur (diaspora) qui financent des immeubles à distance et ont besoin d'un professionnel intègre sur place pour vérifier que l'argent débloqué correspond exactement à des travaux réels et bien exécutés.",
            "localSectors": [
                "Cabinets de maîtrise d'œuvre de Dakar",
                "Sociétés d'Assistance à Maîtrise d'Ouvrage (AMO)",
                "Projets d'infrastructures publiques (AGEROUTE, APIX)"
            ],
            "remoteWork": "Hybride (rédaction des marchés et comptes-rendus en télétravail / présence obligatoire sur le chantier pour les réunions).",
            "entrepreneurship": "Création d'un cabinet de maîtrise d'œuvre et de suivi de chantier pour sécuriser les investissements immobiliers de la diaspora."
        },
        "relatedJobSlugs": [
            "conducteur-de-travaux",
            "architecte",
            "ingenieur-genie-civil"
        ],
        "connectedFamilies": [
            "management-gestion",
            "droit-management",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier Maître d'œuvre — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/maitre-doeuvre.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "Syntec Ingénierie — Fiches métiers",
                "url": "https://www.syntec-ingenierie.fr/",
                "source": "Syntec"
            }
        ],
        "sources": [
            "L'Étudiant",
            "Syntec Ingénierie",
            "CNOA"
        ],
        "interests": [
            "coordonner-gerer",
            "droit-politique",
            "construire-fabriquer"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Le maître d'œuvre est le seul professionnel habilité à prononcer la 'réception de l'ouvrage' : cet acte juridique capital transfère la garde du bâtiment au client et déclenche la garantie décennale de 10 ans !",
            "pourquoi": "C'est la preuve officielle que le chantier est terminé et conforme aux règles de l'art.",
            "a_retenir": "L'œil de confiance du client qui veille sur chaque brique et chaque euro investi."
        }
    },
    {
        "id": "peintre-en-batiment",
        "slug": "peintre-en-batiment",
        "title": "Peintre en Bâtiment & Applicateur de Revêtements",
        "aliases": [
            "Peintre applicateur d'enduits",
            "Peintre décorateur",
            "Façadier peintre"
        ],
        "icon": "🎨",
        "image": "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Second Œuvre, Finitions & Carrelage",
        "domainId": "second-oeuvre-finitions",
        "subdomain": "Peinture, Enduits & Ravalement",
        "sectors": [
            "BTP",
            "Second Œuvre",
            "Finition"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "CAP Peintre applicateur de revêtements à Bac Pro Aménagement-Finition",
        "salary": "🇫🇷 France : 1 800 - 2 800 € net/mois (~26 000 - 40 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 150 000 - 550 000 FCFA / mois (Peintres en bâtiment, façadiers décorateurs)",
        "simpleDefinition": "Le peintre en bâtiment apporte la touche finale visible d'un édifice : il prépare minutieusement les murs (rebouchage, ponçage, lissage), puis applique peintures, vernis, enduits décoratifs ou papiers peints pour protéger et embellir les intérieurs et façades.",
        "shortDescription": "Artisan de la couleur et de la lumière répertorié par L'Étudiant, il transforme des parois brutes en surfaces impeccables et chaleureuses.",
        "longDescription": "Comme décrit dans la fiche métier de L'Étudiant, le travail du peintre ne se résume pas à passer un rouleau : 80% de son temps est consacré à la préparation invisible du support. Sur le plâtre, le béton ou le bois, il lessive, rebouche les fissures à l'enduit, ponce avec une planéité parfaite, puis applique sous-couches et couches de finition (peintures mates, satinées, laquées ou peintures dépolluantes sans COV). En extérieur, il ravale les façades en appliquant des revêtements imperméables protégeant les murs contre la pluie et les UV.",
        "mainObjective": "Sublimer l'esthétique des pièces et protéger durablement les surfaces murales contre l'humidité, l'usure et les salissures.",
        "companyRole": "Artisan de la touche finale apportant la lumière, la couleur et le niveau d'excellence visible.",
        "workEnvironment": [
            "🏠 Intérieurs de logements neufs, bureaux, boutiques ou appartements habités",
            "🏢 Façades extérieures d'immeubles sur échafaudages ou nacelles",
            "🪜 Travail debout sur escabeaux, échafaudages roulants et planchers de travail"
        ],
        "missions": [
            "Protéger le mobilier, les sols et les plinthes à l'aide de bâches et rubans de masquage adhésifs",
            "Préparer les fonds : grattage, ponçage, rebouchage des trous et application d'enduit de lissage complet",
            "Appliquer les peintures au rouleau, à la brosse ou au pistolet sans trace (technique Airless)",
            "Poser les revêtements muraux collés (papiers peints, toiles de verre, tissus muraux)",
            "Réaliser des enduits décoratifs à la chaux, stucs vénitiens ou peintures à effets matières"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Protection et préparation de chantier",
                "desc": "Bâchage soigné d'un parquet massif et masquage des prises électriques dans un appartement à rénover."
            },
            {
                "time": "09:30",
                "title": "Enduisage et ratissage de murs",
                "desc": "Application à la lame à enduire d'une fine couche d'enduit de finition pour faire disparaître les bandes de plâtre."
            },
            {
                "time": "13:30",
                "title": "Ponçage mécanique aspirant",
                "desc": "Ponçage à la ponceuse girafe avec éclairage rasant pour traquer la moindre micro-aspérité sans poussière."
            },
            {
                "time": "15:30",
                "title": "Application de la couche de finition",
                "desc": "Passage au rouleau microfibres de la deuxième couche de peinture veloutée sans trace de reprise."
            }
        ],
        "skills": {
            "technical": [
                "Préparation rigoureuse des subjectiles (plâtre, béton, bois, métaux)",
                "Chimie des peintures (acryliques, alkydes, peintures biosourcées, résines époxy)",
                "Technique d'application au pistolet Airless haute pression et au rouleau",
                "Harmonie des couleurs, colorimétrie et éclairage des pièces"
            ],
            "human": [
                "Propreté exemplaire et soin méticuleux apporté aux finitions",
                "Sensibilité esthétique aux nuances de couleurs et à la lumière",
                "Discrétion et courtoisie lors des interventions chez des particuliers"
            ],
            "tools": [
                "Lames à enduire, couteaux de peintre et platoirs à lisser",
                "Ponceuses girafes télescopiques avec aspirateur industriel de classe M",
                "Stations de peinture Airless haute pression (Graco, Wagner)",
                "Pinceaux à rechampir, rouleaux microfibres et nuanciers de couleurs"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "CAP (2 ans)",
                    "title": "CAP Peintre Applicateur de Revêtements",
                    "desc": "Le diplôme d'apprentissage roi cité par L'Étudiant pour apprendre le métier en entreprise."
                },
                {
                    "step": "Bac Pro (3 ans)",
                    "title": "Bac Pro Aménagement et Finition du Bâtiment",
                    "desc": "Formation complète incluant plâtrerie, sols et gestion d'équipe."
                },
                {
                    "step": "BP Peintre Décorateur",
                    "title": "Brevet Professionnel Peinture et Décors",
                    "desc": "Spécialisation haut de gamme en décors peints, trompe-l'œil et patines anciennes."
                }
            ],
            "schools": [
                {
                    "name": "CFA du Bâtiment et lycées professionnels — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Compagnons du Devoir (filière finition) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "CQP Peintre Décorateur",
                "Certification Qualibat Peinture et Ravalement",
                "Attestation de montage d'échafaudages de pied"
            ],
            "schoolSubjects": [
                "Technologie des enduits et peintures",
                "Colorimétrie et histoire des décors",
                "Dessin d'art et perspective",
                "Sécurité chimique et aération"
            ]
        },
        "career": {
            "sectors": [
                "Entreprises artisanales de peinture et décoration",
                "PME de second œuvre et de rénovation intérieure",
                "Entreprises spécialisées en ravalement de façades et isolation extérieure (ITE)"
            ],
            "employerTypes": [
                "Artisans peintres",
                "Entreprises de second œuvre",
                "Sociétés de rénovation immobilière"
            ],
            "evolution": "Apprenti peintre ➔ Peintre qualifié ➔ Chef d'équipe finition ➔ Métreur-deviseur peinture ➔ Artisan peintre chef d'entreprise",
            "pros": "Satisfaction visuelle immédiate de voir une pièce transformée et lumineuse, métier valorisé au contact direct des clients particuliers, plein emploi.",
            "cons": "Travail régulier les bras levés pour les plafonds, postures penchées pour les plinthes."
        },
        "gettingStarted": {
            "beginnerProject": "Reboucher un trou de cheville dans un mur au plâtre et poncer jusqu'à ce qu'on ne sente plus rien au toucher.",
            "intermediateProject": "Peindre un pan de mur complet avec rechampis parfaits sans déborder sur les plinthes ni le plafond.",
            "advancedProject": "Réaliser un enduit à la chaux cirée (stuc vénitien) avec nuançage de teintes sur panneau de bois.",
            "portfolioIdeas": [
                "Photos avant/après de pièces rénovées et repeintes",
                "Nuancier d'échantillons d'enduits décoratifs réalisés"
            ]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "Des applications sur smartphone permettent aux clients de visualiser la couleur des murs en réalité augmentée avant de peindre, mais l'application sans trace reste 100% manuelle.",
            "automatedTasks": [
                "Simulateurs de teintes en réalité augmentée",
                "Mélangeurs automatiques de peintures en magasin"
            ],
            "emergingSkills": [
                "Utilisation de peintures écologiques dépolluantes assainissant l'air intérieur"
            ],
            "humanEdge": "La sensibilité du toucher pour sentir si un mur est parfaitement lisse et le coup de pinceau pour rechampir net."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les peintres en bâtiment sont particulièrement sollicités avant les grandes fêtes familiales (Tabaski, Korité, Gamou) où les maisons sont traditionnellement repeintes à neuf, et maîtrisent des enduits décoratifs tyroliens et grattés très résistants au soleil et à la poussière côtière.",
            "localSectors": [
                "Entreprises de peinture et décoration de Dakar",
                "Boutiques et distributeurs de peinture (Seigneurie Sénégal, Sofap Plastène)",
                "Chantiers résidentiels"
            ],
            "remoteWork": "Non compatible (100% sur place dans les pièces ou sur échafaudages).",
            "entrepreneurship": "Création d'une entreprise artisanale de peinture intérieure haut de gamme et ravalement de façades."
        },
        "relatedJobSlugs": [
            "plaquiste",
            "carreleur",
            "architecte-dinterieur"
        ],
        "connectedFamilies": [
            "arts-design",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier Peintre en bâtiment — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/peintre-en-batiment.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "CAPEB — Métiers de la peinture et de la finition",
                "url": "https://www.capeb.fr/",
                "source": "CAPEB"
            }
        ],
        "sources": [
            "L'Étudiant",
            "CAPEB",
            "FFB"
        ],
        "interests": [
            "arts-design",
            "construire-fabriquer",
            "technique-outils"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Un bon peintre passe en moyenne 80% de son temps de chantier à protéger, boucher, enduire et poncer le mur, et seulement 20% à passer la peinture elle-même !",
            "pourquoi": "Parce que la peinture ne masque jamais un défaut : au contraire, une peinture brillante ou satinée fait ressortir la moindre bosse !",
            "a_retenir": "L'artisan de la lumière qui donne son âme et sa couleur au bâtiment."
        }
    },
    {
        "id": "plaquiste",
        "slug": "plaquiste",
        "title": "Plaquiste-Plâtrier",
        "aliases": [
            "Monteur de cloisons sèches",
            "Plâtrier plaquiste",
            "Poseur de plaques de plâtre et faux-plafonds"
        ],
        "icon": "🧱",
        "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Second Œuvre, Finitions & Carrelage",
        "domainId": "second-oeuvre-finitions",
        "subdomain": "Plaques de plâtre, Cloisons & Faux-plafonds",
        "sectors": [
            "BTP",
            "Second Œuvre",
            "Aménagement"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "CAP Plâtrier-plaquiste à Bac Pro Aménagement et Finition",
        "salary": "🇫🇷 France : 1 900 - 3 000 € net/mois (~27 000 - 42 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 180 000 - 600 000 FCFA / mois (Entreprises de faux-plafonds décoratifs et cloisons à Dakar)",
        "simpleDefinition": "Le plaquiste monte l'ossature métallique et fixe les plaques de plâtre (Placo) pour créer les cloisons entre les pièces, isoler thermiquement et phoniquement les murs intérieurs et installer les faux-plafonds modernes.",
        "shortDescription": "Artisan indispensable de l'aménagement intérieur documenté par L'Étudiant, il façonne les volumes habitables et intègre l'isolation thermique et acoustique.",
        "longDescription": "Comme décrit dans la fiche descriptive de L'Étudiant, le plaquiste intervient dès que le bâtiment est hors d'eau et hors d'air. À partir des plans d'architecte, il trace les emplacements, fixe les rails métalliques au sol et au plafond, insère les panneaux d'isolant (laine de verre, ouate de cellulose), puis visse les plaques de plâtre (BA13). Il colle ensuite les bandes à joints au niveau des raccords et applique l'enduit pour que la surface soit parfaitement plane, prête à être peinte.",
        "mainObjective": "Créer les cloisons séparatives, doubler les murs extérieurs et poser les faux-plafonds avec une isolation phonique, thermique et coupe-feu exemplaire.",
        "companyRole": "Structurateur des volumes intérieurs et garant de la performance thermique et acoustique des cloisons.",
        "workEnvironment": [
            "🏠 Bâtiments neufs et chantiers de rénovation intérieure",
            "🏢 Plateaux de bureaux tertiaires, cliniques, commerces et logements",
            "🪜 Travail en intérieur à l'abri du vent, mais poussiéreux lors du ponçage des bandes"
        ],
        "missions": [
            "Implanter et tracer l'emplacement des cloisons au cordeau bleu et au laser",
            "Monter les ossatures métalliques légères (rails, montants, suspentes de plafond)",
            "Découper et poser les isolants thermiques et acoustiques dans l'épaisseur des cloisons",
            "Visser les plaques de plâtre (BA13 standard, hydrofuge, phonique ou coupe-feu)",
            "Coller les bandes à joints armées et appliquer l'enduit de finition en plusieurs passes lissées"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Traçage et fixation des rails",
                "desc": "Implantation au laser rotatif des cloisons distributives d'un appartement et vissage des rails au sol."
            },
            {
                "time": "10:00",
                "title": "Pose des montants et isolant phonique",
                "desc": "Insertion des montants métalliques tous les 60 cm et mise en place de la laine de roche acoustique entre les montants."
            },
            {
                "time": "13:30",
                "title": "Vissage des plaques au lève-plaque",
                "desc": "Montage des plaques de plâtre au plafond avec lève-plaque mécanique et vissage à la visseuse automatique à bande."
            },
            {
                "time": "15:30",
                "title": "Jointoiement des plaques",
                "desc": "Collage des bandes à joints papier microperforées avec la boîte à joint automatique et lissage soigné."
            }
        ],
        "skills": {
            "technical": [
                "Techniques de pose des cloisons sèches, doublages et plafonds suspendus",
                "Connaissance des différentes plaques spécialisées (Placoplâtre hydrofuge vert, phonique bleu, coupe-feu rose)",
                "Normes d'isolation thermique (RE2020), acoustique et résistance au feu",
                "Maîtrise du collage et lissage parfait des bandes à joints sans surépaisseur"
            ],
            "human": [
                "Rapidité d'exécution et sens du rendement tout en restant très soigneux",
                "Bonne force physique pour le port des plaques de plâtre de 30 kg",
                "Rigueur géométrique pour des angles droits et des aplombs impeccables"
            ],
            "tools": [
                "Visseuses spécifiques pour plaques de plâtre à butée de profondeur débrayable",
                "Lève-plaques télescopiques pour travail au plafond",
                "Lasers de traçage autonivelants 360 degrés",
                "Applicateurs automatiques de bandes à joints (Bazooka) et couteaux à enduire"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "CAP (2 ans)",
                    "title": "CAP Métiers du Plâtre et de l'Isolation",
                    "desc": "Le parcours en apprentissage privilégié cité par L'Étudiant pour apprendre la pose de cloisons sèches."
                },
                {
                    "step": "Bac Pro (3 ans)",
                    "title": "Bac Pro Aménagement et Finition du Bâtiment (AFB)",
                    "desc": "Formation polyvalente combinant cloisons, faux-plafonds et finitions peintes."
                },
                {
                    "step": "Brevet Professionnel (BP)",
                    "title": "BP Plâtrerie-Plaques",
                    "desc": "Perfectionnement technique sur les plafonds décoratifs acoustiques et formes cintrées."
                }
            ],
            "schools": [
                {
                    "name": "CFA du Bâtiment spécialisés en second œuvre — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centres de formation continue BTP — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification Poseur Agréé Placo / Knauf",
                "CQP Plaquiste haute performance acoustique",
                "Attestation de montage d'échafaudages roulants"
            ],
            "schoolSubjects": [
                "Technologie des systèmes en plaques de plâtre",
                "Isolation thermique et acoustique",
                "Lecture de plans d'aménagement",
                "Sécurité de chantier"
            ]
        },
        "career": {
            "sectors": [
                "Entreprises de plâtrerie et d'isolation",
                "Entreprises générales de second œuvre BTP",
                "Entreprises spécialisées dans les faux-plafonds tertiaires démontables"
            ],
            "employerTypes": [
                "PME de second œuvre",
                "Artisans plaquistes",
                "Entreprises d'aménagement intérieur"
            ],
            "evolution": "Plaquiste junior ➔ Plaquiste-jointeur hautement qualifié ➔ Chef d'équipe cloisons ➔ Artisan chef d'entreprise",
            "pros": "Métier sous très forte demande de recrutement, travail toujours à l'abri des intempéries, satisfaction de voir naître les pièces d'un logement.",
            "cons": "Manutention répétée de plaques lourdes, poussière de plâtre lors du ponçage des bandes."
        },
        "gettingStarted": {
            "beginnerProject": "Découper une plaque de plâtre au cutter en pliant le carton d'un coup sec net.",
            "intermediateProject": "Poser un montant métallique vertical et visser une plaque de plâtre sans percer le carton avec la tête de vis.",
            "advancedProject": "Réaliser le jointoiement parfait de deux plaques biseautées avec pose de bande et enduit sans bulle d'air.",
            "portfolioIdeas": [
                "Photos de cloisons montées avec faux-plafond décaissé rétro-éclairé",
                "Attestation de stage chez un plaquiste"
            ]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "Même si des robots automatiques de pose de cloisons apparaissent dans certains chantiers expérimentaux japonais, l'agilité manuelle et l'adaptation aux gaines restent 100% manuelles.",
            "automatedTasks": [
                "Optimisation logicielle du calepinage des plaques pour minimiser les chutes",
                "Découpeuse numérique de plaques aux formes spéciales en usine"
            ],
            "emergingSkills": [
                "Utilisation de lève-plaques électriques connectés et d'exosquelettes pour le travail au plafond"
            ],
            "humanEdge": "La sensibilité du geste du jointeur pour appliquer la juste épaisseur d'enduit invisible à l'œil nu."
        },
        "africaContext": {
            "senegalInsight": "À Dakar et dans les grandes villes du Sénégal, le métier de plaquiste connaît une véritable explosion avec la mode des faux-plafonds décoratifs en plaques de plâtre intégrant des spots LED et des gorges lumineuses dans les salons des nouvelles résidences et villas.",
            "localSectors": [
                "Entreprises d'aménagement intérieur de Dakar",
                "Boutiques d'importation de plaques de plâtre et rails métalliques",
                "Chantiers de bureaux et de résidences"
            ],
            "remoteWork": "Non compatible (100% sur le chantier d'aménagement).",
            "entrepreneurship": "Création d'une entreprise spécialisée dans la pose de faux-plafonds décoratifs design et d'isolation acoustique à Dakar."
        },
        "relatedJobSlugs": [
            "peintre-en-batiment",
            "menuisier",
            "electricien-du-btp"
        ],
        "connectedFamilies": [
            "artisanat-metiers-dart",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier Plaquiste — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/plaquiste.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "Placo Saint-Gobain — Solutions constructives",
                "url": "https://www.placo.fr/",
                "source": "Placo"
            }
        ],
        "sources": [
            "L'Étudiant",
            "CAPEB",
            "Placo Saint-Gobain"
        ],
        "interests": [
            "construire-fabriquer",
            "technique-outils"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Une cloison moderne composée de deux plaques de plâtre spéciales avec 5 cm de laine de verre au milieu isole mieux du bruit qu'un mur en béton plein de 15 cm d'épaisseur !",
            "pourquoi": "Grâce au principe acoustique 'masse-ressort-masse' où l'isolant dissipe l'énergie sonore par frottement.",
            "a_retenir": "L'architecte des cloisons qui transforme un grand hangar vide en appartements confortables."
        }
    },
    {
        "id": "carreleur",
        "slug": "carreleur",
        "title": "Carreleur-Mosaïste",
        "aliases": [
            "Poseur de carrelage",
            "Carreleur chapiste",
            "Artisan mosaïste décorateur"
        ],
        "icon": "🧱",
        "image": "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Second Œuvre, Finitions & Carrelage",
        "domainId": "second-oeuvre-finitions",
        "subdomain": "Carrelage, Faïence & Mosaïque",
        "sectors": [
            "BTP",
            "Second Œuvre",
            "Finition"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "CAP Carreleur-mosaïste à Bac Pro Aménagement-Finition",
        "salary": "🇫🇷 France : 1 900 - 3 100 € net/mois (~27 000 - 44 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 200 000 - 750 000 FCFA / mois (Poseurs de carrelage grès cérame grands formats, mosaïque de piscines)",
        "simpleDefinition": "Le carreleur-mosaïste habille les sols et les murs intérieurs et extérieurs de carreaux de céramique, faïence, marbre, grès cérame ou mosaïque, en assurant une planéité parfaite, une étanchéité totale et une esthétique raffinée dans les salles de bains, cuisines, terrasses et piscines.",
        "shortDescription": "Artisan de la géométrie et du décor répertorié par L'Étudiant, il allie rigueur de pose au millimètre et sens du beau pour sublimer les sols et les murs d'eau.",
        "longDescription": "Comme décrit dans la fiche métier de L'Étudiant, le carreleur intervient après le maçon et le plombier. Il coule d'abord la chape de mortier pour égaliser le sol ou applique des nattes d'étanchéité liquide sous carrelage dans les douches à l'italienne. Il effectue le calepinage (dessin précis de l'implantation des carreaux pour éviter les découpes inesthétiques aux entrées). Il colle ensuite les carreaux (parfois géants de 120x120 cm) au mortier-colle avec des croisillons autonivelants, découpe les passages de tuyaux à la meuleuse diamantée et réalise des joints lisses et étanches.",
        "mainObjective": "Poser des revêtements de sol et muraux durables, imperméables, esthétiques et d'une planéité irréprochable.",
        "companyRole": "Créateur de la finition noble des pièces humides et des sols d'usure.",
        "workEnvironment": [
            "🏠 Salles de bains, cuisines de particuliers, pièces à vivre et terrasses extérieures",
            "🏊 Piscines, centres aquatiques, hôpitaux, cuisines industrielles et centres commerciaux",
            "🦺 Travail à genoux muni de genouillères professionnelles et gants étanches"
        ],
        "missions": [
            "Contrôler les supports (dalles béton, cloisons) et réaliser les chapes ou ragréages d'égalisation",
            "Appliquer les systèmes d'étanchéité sous carrelage (SPEC / SEL) dans les douches et pièces humides",
            "Établir le plan de calepinage pour harmoniser les découpes et aligner les joints",
            "Encoller les carreaux au peigne cranté et régler la planéité à l'aide de croisillons autonivelants",
            "Gâcher et appliquer le mortier à joint (ciment ou époxy) et nettoyer soigneusement la laitance"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Calepinage d'un salon",
                "desc": "Traçage au laser des axes de départ au centre de la pièce pour équilibrer les coupes en pourtour de plinthes."
            },
            {
                "time": "09:30",
                "title": "Encollage et pose de grands carreaux",
                "desc": "Double encollage au mortier-colle déformable C2S1 de carreaux en grès cérame de 90x90 cm et serrage des cales autonivelantes."
            },
            {
                "time": "14:00",
                "title": "Découpes complexes à la meuleuse",
                "desc": "Découpes circulaires à la carotteuse diamantée pour laisser passer les alimentations d'eau d'un mitigeur de douche."
            },
            {
                "time": "16:00",
                "title": "Jointoiement et nettoyage à l'éponge",
                "desc": "Application du joint hydrofuge et passage de l'éponge taloche pour éliminer le voile de ciment avant séchage."
            }
        ],
        "skills": {
            "technical": [
                "Techniques de calepinage géométrique et calcul des coupes de carrelage",
                "Chimie des mortiers-colles, ragréages fibrés et joints époxy anti-acides",
                "Maniement de la coupeuse manuelle (carrelette) et de la scie à eau sur table",
                "Normes d'étanchéité des douches à l'italienne et terrasses extérieures"
            ],
            "human": [
                "Sens aigu du détail géométrique et du fini esthétique impeccable",
                "Patience, minutie et grande concentration lors de la pose",
                "Bonne endurance physique pour le travail agenouillé"
            ],
            "tools": [
                "Coupeuses de carrelage manuelles (carrelettes de 120 cm Rubi, Sigma)",
                "Scies à carrelage électriques sur table refroidies à l'eau",
                "Croisillons de nivellement à vis ou à cales et ventouses de manutention",
                "Malaxeurs électriques de mortier-colle et taloches à joints"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "CAP (2 ans)",
                    "title": "CAP Carreleur-Mosaïste",
                    "desc": "La voie royale en apprentissage citée par L'Étudiant pour acquérir le coup de main et la précision de pose."
                },
                {
                    "step": "Bac Pro (3 ans)",
                    "title": "Bac Pro Aménagement et Finition du Bâtiment",
                    "desc": "Formation élargie intégrant la gestion de chantier de second œuvre."
                },
                {
                    "step": "Brevet Professionnel (BP)",
                    "title": "BP Carreleur-Mosaïste",
                    "desc": "Perfectionnement sur les mosaïques d'art, faïences anciennes et sols industriels lourds."
                }
            ],
            "schools": [
                {
                    "name": "CFA du Bâtiment et lycées professionnels — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Compagnons du Devoir (filière carrelage) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "CFPT Sénégal-Japon (Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "CQP Carreleur Grands Formats",
                "Certification Qualibat Carrelage et Revêtements",
                "Habilitation étanchéité SEL / SPEC"
            ],
            "schoolSubjects": [
                "Géométrie et calepinage",
                "Technologie de la céramique et des colles",
                "Étanchéité et isolation phonique sous carrelage",
                "Sécurité et ergonomie"
            ]
        },
        "career": {
            "sectors": [
                "Entreprises artisanales de carrelage et revêtements",
                "Entreprises générales de second œuvre",
                "Constructeurs de piscines et spas",
                "Entreprises spécialisées dans les sols industriels et agroalimentaires"
            ],
            "employerTypes": [
                "Artisans carreleurs",
                "Entreprises de carrelage et sols",
                "Pisciniers"
            ],
            "evolution": "Apprenti carreleur ➔ Carreleur qualifié ➔ Spécialiste grands formats et faïence de luxe ➔ Artisan chef d'entreprise",
            "pros": "Satisfaction artistique permanente de voir briller un sol parfaitement lisse, forte rentabilité pour les artisans qualifiés, liberté d'exercice.",
            "cons": "Position agenouillée usante pour les articulations, port de cartons de carreaux lourds."
        },
        "gettingStarted": {
            "beginnerProject": "S'entraîner à couper un carreau en deux à la carrelette manuelle en suivant un trait de crayon tracé à l'équerre.",
            "intermediateProject": "Poser un carré de 9 carreaux sur un panneau de bois avec mortier-colle et croisillons réguliers.",
            "advancedProject": "Réaliser le calepinage complet d'une salle de bain de 10 m² intégrant une douche à l'italienne sans aucune coupe inférieure à un demi-carreau.",
            "portfolioIdeas": [
                "Photos de réalisations de salles de bains carrelées",
                "Mosaïque décorative artistique réalisée à la pince"
            ]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "Des logiciels d'aménagement 3D permettent de générer le calepinage idéal en évitant les petites coupes, mais le geste de pose et l'écrasement de la colle au peigne restent 100% manuels.",
            "automatedTasks": [
                "Calcul automatique des plans de calepinage sans chutes par logiciel 3D",
                "Découpeuse à jet d'eau haute pression pour motifs de mosaïques complexes"
            ],
            "emergingSkills": [
                "Maniement des systèmes de ventouses à pompe pour manipuler les dalles géantes en grès de 160x320 cm"
            ],
            "humanEdge": "La sensibilité tactile du doigt pour vérifier qu'il n'y a aucun décroché entre deux carreaux voisins."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le carrelage en grès cérame poli et brillant est le revêtement de sol roi de toutes les maisons et villas pour sa fraîcheur sous les pieds et sa facilité d'entretien face au sable, créant une demande continue pour des carreleurs réputés pour leur rectitude.",
            "localSectors": [
                "Magasins d'importation de carrelage de Dakar (Batimat, Comptoir Commercial, Batiplus)",
                "Entreprises de second œuvre sénégalaises",
                "Chantiers de résidences privées"
            ],
            "remoteWork": "Non compatible (100% sur le sol du chantier).",
            "entrepreneurship": "Création d'une entreprise artisanale de pose de carrelage haute précision et de mosaïque de piscines à Saly ou Dakar."
        },
        "relatedJobSlugs": [
            "plaquiste",
            "peintre-en-batiment",
            "macon"
        ],
        "connectedFamilies": [
            "artisanat-metiers-dart",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier Carreleur — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/carreleur.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "CAPEB — Métiers du carrelage",
                "url": "https://www.capeb.fr/",
                "source": "CAPEB"
            }
        ],
        "sources": [
            "L'Étudiant",
            "CAPEB",
            "Compagnons du Devoir"
        ],
        "interests": [
            "artisanat-metiers-dart",
            "construire-fabriquer",
            "arts-design"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Les nouveaux carreaux de céramique pour les hôtels et villas de standing atteignent aujourd'hui des dimensions monumentales de 1,60 mètre de large sur 3,20 mètres de haut pour seulement 6 millimètres d'épaisseur !",
            "pourquoi": "Ces dalles géantes permettent d'habiller un mur de douche du sol au plafond sans le moindre joint, exigeant une virtuosité technique exceptionnelle de la part du carreleur.",
            "a_retenir": "L'artiste de la céramique qui habille nos sols pour des décennies."
        }
    },
    {
        "id": "menuisier",
        "slug": "menuisier",
        "title": "Menuisier du Bâtiment & Agenceur",
        "aliases": [
            "Menuisier poseur bois/alu/PVC",
            "Menuisier d'agencement intérieur",
            "Artisan menuisier fabricant"
        ],
        "icon": "🪚",
        "image": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Menuiserie & Métiers Spécialisés",
        "domainId": "menuiserie-agencement",
        "subdomain": "Menuiserie bois, Aluminium & PVC",
        "sectors": [
            "BTP",
            "Menuiserie",
            "Second Œuvre"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "CAP Menuisier installateur/fabricant à Bac Pro / BTS ERA",
        "salary": "🇫🇷 France : 1 900 - 3 100 € net/mois (~27 000 - 44 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 200 000 - 750 000 FCFA / mois (Menuiseries aluminium de vitrines, ébénisterie bois noble)",
        "simpleDefinition": "Le menuisier fabrique et installe les fermetures extérieures et aménagements intérieurs d'un bâtiment : fenêtres, portes d'entrée, volets, escaliers sur mesure, placards intégrés et parquets en bois, aluminium ou PVC.",
        "shortDescription": "Artisan noble et précis répertorié par L'Étudiant, il allie travail du bois traditionnel et technologies de pointe des profilés en aluminium et double vitrage.",
        "longDescription": "Comme décrit dans les fiches métiers de L'Étudiant, le menuisier moderne partage son temps entre la fabrication en atelier et la pose minutieuse sur le chantier. En atelier, il utilise des machines à bois traditionnelles et des centres d'usinage à commande numérique pour découper et profiler les pièces. Sur le chantier, il pose les fenêtres et portes avec une étanchéité à l'air parfaite (gage de la performance thermique du bâtiment), installe les cuisines aménagées, pose les parquets massifs et monte les escaliers.",
        "mainObjective": "Assurer la fermeture, l'isolation thermique et phonique et l'aménagement esthétique fonctionnel des espaces de vie.",
        "companyRole": "Garant de l'étanchéité des ouvertures et de la chaleur visuelle des aménagements intérieurs.",
        "workEnvironment": [
            "🪚 Ateliers d'ébénisterie et de menuiserie bois ou aluminium",
            "🏠 Chantiers de maisons individuelles, immeubles neufs ou rénovation",
            "🛠️ Pose sur site au contact direct des clients et architectes d'intérieur"
        ],
        "missions": [
            "Prendre les cotes précises au télémètre laser sur le chantier",
            "Fabriquer en atelier les portes, fenêtres, dressings, banques d'accueil et escaliers",
            "Poser les menuiseries extérieures (fenêtres à double ou triple vitrage, baies coulissantes)",
            "Garantir l'isolation thermique et l'étanchéité à l'air selon les normes RE2020",
            "Installer les parquets en bois massif, placards, portes intérieures et plinthes"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Prise de cotes en rénovation",
                "desc": "Relevé au millimètre près des feuillures de fenêtres anciennes d'un immeuble haussmannien."
            },
            {
                "time": "10:00",
                "title": "Usinage en atelier",
                "desc": "Découpe et profilage de montants de portes en chêne sur centre d'usinage numérique à 5 axes."
            },
            {
                "time": "13:30",
                "title": "Pose de baies vitrées aluminium",
                "desc": "Installation d'une grande baie coulissante à rupture de pont thermique avec joint compriband étanche à l'air."
            },
            {
                "time": "16:00",
                "title": "Ajustement d'un dressing sur mesure",
                "desc": "Pose des coulisses télescopiques et ajustement des portes de placard au rabot manuel pour un jeu de 2 mm parfait."
            }
        ],
        "skills": {
            "technical": [
                "Technologie du bois, essences locales et exotiques, profilés aluminium et PVC",
                "Maniement des machines-outils traditionnelles (toupie, dégauchisseuse, scie à format)",
                "Normes d'étanchéité à l'air (DTU 36.5 pour les menuiseries extérieures)",
                "Lecture de plans d'exécution et dessin technique d'ébénisterie"
            ],
            "human": [
                "Minutie, précision chirurgicale et sens du détail esthétique",
                "Sensibilité tactile et respect de la noblesse du bois naturel",
                "Autonomie, propreté et politesse lors des interventions en site habité"
            ],
            "tools": [
                "Rabots manuels, ciseaux à bois et scies à onglet radiales",
                "Centres d'usinage à bois à commande numérique (CNC)",
                "Visseuses professionnelles, défonceuses et lamelleuses",
                "Lasermètres et niveaux optiques de précision"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "CAP (2 ans)",
                    "title": "CAP Menuisier Fabricant ou Installateur",
                    "desc": "La voie d'apprentissage classique valorisée par L'Étudiant."
                },
                {
                    "step": "Bac Pro (3 ans)",
                    "title": "Bac Pro Technicien Menuisier Agenceur (TMA)",
                    "desc": "Formation complète ouvrant sur la chefferie d'atelier et la pose d'agencements complexes."
                },
                {
                    "step": "BTS (Bac +2)",
                    "title": "BTS Étude et Réalisation d'Agencement (ERA)",
                    "desc": "Diplôme supérieur pour concevoir des agencements de magasins et bureaux de luxe."
                }
            ],
            "schools": [
                {
                    "name": "Compagnons du Devoir et du Tour de France (Menuiserie) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Lycées professionnels du bois et de l'agencement — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "CQP Menuisier Agenceur",
                "Qualification Qualibat RGE Menuiseries extérieures",
                "Attestation sécurité machines à bois"
            ],
            "schoolSubjects": [
                "Technologie du bois et des dérivés",
                "Dessin technique et DAO",
                "Procédés de fabrication et d'usinage",
                "Normes d'isolation thermique"
            ]
        },
        "career": {
            "sectors": [
                "Entreprises artisanales de menuiserie bois, PVC et aluminium",
                "Fabricants et installateurs de vérandas et fermetures",
                "Sociétés d'agencement de boutiques de luxe et de stands",
                "Ateliers d'ébénisterie et de restauration de meubles anciens"
            ],
            "employerTypes": [
                "Artisans menuisiers",
                "PME d'agencement commercial",
                "Entreprises de second œuvre"
            ],
            "evolution": "Apprenti menuisier ➔ Menuisier qualifié d'atelier/pose ➔ Chef d'atelier menuiserie ➔ Conducteur de travaux agencement ➔ Artisan chef d'entreprise",
            "pros": "Odeur et noblesse du bois, créations sur mesure durables, forte valeur ajoutée reconnue par les clients.",
            "cons": "Poussières de sciure (nécessite aspiration et masques), port de vitrages lourds lors des poses de baies vitrées."
        },
        "gettingStarted": {
            "beginnerProject": "Fabriquer une petite boîte en bois avec assemblage d'angles à coupe d'onglet à 45 degrés.",
            "intermediateProject": "Réaliser une étagère murale sur mesure avec fixations invisibles et finition huilée au chiffon.",
            "advancedProject": "Concevoir et fabriquer un châssis de fenêtre en bois à double vitrage avec battée et joint d'étanchéité.",
            "portfolioIdeas": [
                "Photos de meubles ou placards sur mesure posés",
                "Plans d'agencement intérieur côtés sous logiciel de DAO"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des logiciels de conception d'agencement pilotés par IA génèrent automatiquement les programmes d'usinage pour les machines de découpe à partir des dimensions de la pièce.",
            "automatedTasks": [
                "Découpe automatique optimisée des panneaux de bois (nesting)",
                "Génération automatique des nomenclatures de quincaillerie"
            ],
            "emergingSkills": [
                "Programmation et télémaintenance des centres d'usinage bois connectés"
            ],
            "humanEdge": "La lecture du veinage du bois pour un assemblage harmonieux et la dextérité de l'ajustement au millimètre sur le chantier."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la menuiserie est divisée en deux filières très dynamiques : la menuiserie aluminium pour les façades vitrées et baies coulissantes modernes résistant à l'air marin salin, et la menuiserie bois noble traditionnelle (teck, vène, dimb, ébène) très prisée pour les portes sculptées et le mobilier de salon.",
            "localSectors": [
                "Ateliers de menuiserie aluminium de Dakar (AluSénégal, Eiffage Métal)",
                "Menuiseries ébénisteries artisanales de Grand Yoff et Soumbédioune",
                "Entreprises d'aménagement de bureaux"
            ],
            "remoteWork": "Non compatible (atelier de fabrication et chantiers de pose).",
            "entrepreneurship": "Création d'un atelier moderne de menuiserie aluminium et façades vitrées pour les immeubles de Dakar."
        },
        "relatedJobSlugs": [
            "architecte-dinterieur",
            "charpentier",
            "plaquiste"
        ],
        "connectedFamilies": [
            "artisanat-metiers-dart",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier Menuisier — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "Compagnons du Devoir — Métier de Menuisier",
                "url": "https://www.compagnons-du-devoir.com/",
                "source": "Compagnons"
            }
        ],
        "sources": [
            "L'Étudiant",
            "Compagnons du Devoir",
            "CAPEB"
        ],
        "interests": [
            "artisanat-metiers-dart",
            "construire-fabriquer",
            "arts-design"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Dans une maison contemporaine, le remplacement de vieilles fenêtres par des menuiseries modernes à double vitrage isolant réduit instantanément la facture de chauffage ou de climatisation de 15 à 20% !",
            "pourquoi": "Grâce aux gaz isolants (argon) injectés entre les vitres et aux joints d'étanchéité à l'air posés par le menuisier.",
            "a_retenir": "L'artisan de la lumière et du confort thermique qui habille chaque ouverture."
        }
    },
    {
        "id": "tailleur-de-pierre",
        "slug": "tailleur-de-pierre",
        "title": "Tailleur de Pierre & Restaurateur du Patrimoine",
        "aliases": [
            "Compagnon tailleur de pierre",
            "Restaurateur de monuments historiques",
            "Sculpteur appareilleur de pierre"
        ],
        "icon": "🪨",
        "image": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Menuiserie & Métiers Spécialisés",
        "domainId": "menuiserie-agencement",
        "subdomain": "Taille de pierre & Restauration patrimoniale",
        "sectors": [
            "BTP",
            "Patrimoine",
            "Artisanat d'Art"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "CAP Tailleur de pierre à Bac Pro / Brevet des Métiers d'Art (BMA)",
        "salary": "🇫🇷 France : 1 900 - 3 200 € net/mois (~27 000 - 46 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 200 000 - 700 000 FCFA / mois (Restauration du patrimoine historique de l'île de Gorée et de Saint-Louis)",
        "simpleDefinition": "Le tailleur de pierre façonne les blocs de pierre naturelle (calcaire, granit, grès, marbre) à l'aide de marteaux, ciseaux et disques pour tailler des voûtes, corniches, piliers, linteaux ou sculptures ornant les façades et restaurer les cathédrales et monuments historiques.",
        "shortDescription": "Métier millénaire et d'art répertorié par L'Étudiant, il perpétue des savoir-faire d'excellence indispensables à la conservation de notre histoire bâtie.",
        "longDescription": "Comme décrit dans la fiche métier de L'Étudiant, le tailleur de pierre exerce un métier à la croisée de l'art et de la technique du bâtiment. À partir d'épures géométriques précises (le stéréotomie), il débite les blocs bruts extraits de carrières, taille les moulures au ciseau et à la boucharde, et pose les pierres taillées au millimètre près avec des mortiers de chaux traditionnels. Sa contribution a été mise en lumière mondialement lors du chantier de reconstruction de Notre-Dame de Paris.",
        "mainObjective": "Transformer des blocs de roche brute en éléments architecturaux moulurés durables et restaurer les monuments historiques à l'identique.",
        "companyRole": "Artisan d'art garant de la transmission du geste patrimonial et de la noblesse minérale de la pierre.",
        "workEnvironment": [
            "🪨 Ateliers de taille de pierre et chantiers de restauration de monuments",
            "⛪ Cathédrales, châteaux, églises anciennes et immeubles haussmanniens en pierre de taille",
            "🌤️ Travail sur échafaudages monumentaux au contact direct de l'histoire"
        ],
        "missions": [
            "Tracer les gabarits en zinc ou carton d'après les relevés d'architecture (stéréotomie)",
            "Débiter les blocs de pierre de carrière à la scie à ruban diamantée",
            "Tailler les moulures, bossages, chanfreins et cintres au ciseau, à la gradine et au boucharde",
            "Déposer avec précaution les pierres malades ou dégradées par la pollution sur les monuments",
            "Poser les pierres neuves taillées au mortier de chaux aérienne et couler les coulis de fixation"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Tracé stéréotomique sur bloc",
                "desc": "Report au compas et à la fausse équerre du gabarit d'un voussoir d'arc gothique sur un bloc de calcaire dur."
            },
            {
                "time": "09:30",
                "title": "Taille de moulure au ciseau",
                "desc": "Ébauche à la massette et à la gradine puis finition au ciseau fin pour faire ressortir une gorge et un boudin."
            },
            {
                "time": "13:30",
                "title": "Levage de pierre sur échafaudage",
                "desc": "Montage au palan d'une pierre de corniche de 80 kg à 25 mètres de hauteur sur la façade d'un monument."
            },
            {
                "time": "15:30",
                "title": "Jointoiement à la chaux",
                "desc": "Pose de la pierre au bain de mortier de chaux naturelle et vérification de la planéité au cordeau."
            }
        ],
        "skills": {
            "technical": [
                "Stéréotomie (géométrie descriptive appliquée à la coupe des pierres)",
                "Géologie appliquée et connaissance des propriétés des roches sédimentaires et magmatiques",
                "Maniement de la massette, des ciseaux, gradines, gouges et chemins de fer",
                "Techniques de restauration patrimoniale et compatibilité des liants à la chaux"
            ],
            "human": [
                "Patience infinie, minutie et amour du travail artisanal parfait",
                "Sensibilité artistique et respect scrupuleux du patrimoine historique",
                "Excellente condition physique pour le port des outils lourds"
            ],
            "tools": [
                "Massettes en acier, ciseaux droits, gradines et bouchardes",
                "Chemins de fer pour le ragréage manuel de la pierre calcaire",
                "Scies à disque diamanté à eau et meuleuses d'angle",
                "Palans manuels de levage et cales en bois"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "CAP (2 ans)",
                    "title": "CAP Tailleur de Pierre",
                    "desc": "La formation pratique d'apprentissage citée par L'Étudiant pour acquérir les gestes fondamentaux."
                },
                {
                    "step": "Bac Pro / BP (2 ans)",
                    "title": "Bac Pro Métiers et Arts de la Pierre ou BP Tailleur de Pierre",
                    "desc": "Perfectionnement sur le dessin stéréotomique complexe et la restauration d'édifices anciens."
                },
                {
                    "step": "Brevet des Métiers d'Art (BMA)",
                    "title": "BMA Arts de la Pierre",
                    "desc": "Formation d'excellence artistique pour la sculpture d'ornements et le haut de gamme patrimonial."
                }
            ],
            "schools": [
                {
                    "name": "Compagnons du Devoir et du Tour de France (Maison des Tailleurs de Pierre) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Lycées des Métiers d'Art et du Patrimoine (Rodez, Saint-Lambert, Thônes) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centre de Formation Professionnelle aux Métiers du Patrimoine de Saint-Louis — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Ateliers de restauration patrimoniale de Gorée — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certificat de Maître Tailleur de Pierre",
                "Habilitation Travaux sur Monuments Historiques",
                "CACES échafaudage de pied R408"
            ],
            "schoolSubjects": [
                "Stéréotomie et géométrie descriptive",
                "Histoire de l'architecture et des styles",
                "Technologie de la pierre et géologie",
                "Sculpture d'ornements"
            ]
        },
        "career": {
            "sectors": [
                "Entreprises spécialisées dans la restauration des monuments historiques (qualifiées MH)",
                "PME de taille de pierre, marbrerie et cheminées anciennes",
                "Ateliers d'artisanat d'art et sculpteurs indépendants"
            ],
            "employerTypes": [
                "Restaurateurs de monuments historiques",
                "Marbreries de décoration",
                "Entreprises de taille de pierre"
            ],
            "evolution": "Apprenti tailleur ➔ Compagnon tailleur qualifié ➔ Appareilleur de chantier ➔ Chef d'atelier de taille ➔ Maître artisan tailleur de pierre",
            "pros": "Prestige culturel immense, travail sur des monuments centenaires uniques, transmission de savoir-faire millénaires inaltérables.",
            "cons": "Poussières de pierre de silice (nécessite masques FFP3 et arrosage), travail physique lourd."
        },
        "gettingStarted": {
            "beginnerProject": "Tailler un bloc de savon ou de craie pour comprendre comment dégager une moulure en relief.",
            "intermediateProject": "Dégauchir les 6 faces d'un pavé en pierre tendre au ciseau pour obtenir des angles droits parfaits.",
            "advancedProject": "Tracer et tailler une corniche à doucine avec retour d'angle à 45 degrés d'après gabarit.",
            "portfolioIdeas": [
                "Photos de pierres sculptées avec détails de finitions",
                "Carnet de relevés stéréotomiques de monuments anciens"
            ]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "Des scanners 3D photographient les gargouilles et corniches abîmées pour modéliser la forme originelle, mais la taille de la pierre et la patine finale restent 100% manuelles.",
            "automatedTasks": [
                "Numérisation 3D sans contact des sculptures endommagées",
                "Prédébitage au robot de découpe 5 axes"
            ],
            "emergingSkills": [
                "Utilisation de modèles 3D numériques pour guider les gabarits de taille"
            ],
            "humanEdge": "La sensibilité du tailleur à la vibration de la roche sous la massette pour ne pas fendre le bloc."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la taille de pierre et la maçonnerie patrimoniale sont cruciales pour la sauvegarde des joyaux classés au patrimoine mondial de l'UNESCO : les bâtisses coloniales aux façades sculptées de l'île de Gorée et de la ville historique de Saint-Louis, menacées par l'air marin salé.",
            "localSectors": [
                "Projets de réhabilitation du patrimoine de Gorée et Saint-Louis (UNESCO / État du Sénégal)",
                "Carrières de basalte et de calcaire du Sénégal",
                "Ateliers d'artisanat d'art"
            ],
            "remoteWork": "Non compatible (atelier de taille et chantiers sur échafaudage).",
            "entrepreneurship": "Création d'un atelier spécialisé dans la restauration des façades patrimoniales et la sculpture de pierre décorative au Sénégal."
        },
        "relatedJobSlugs": [
            "macon",
            "architecte",
            "menuisier"
        ],
        "connectedFamilies": [
            "artisanat-metiers-dart",
            "culture-medias",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier Tailleur de pierre — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/tailleur-de-pierre-1.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "Compagnons du Devoir — Tailleur de pierre",
                "url": "https://www.compagnons-du-devoir.com/",
                "source": "Compagnons"
            }
        ],
        "sources": [
            "L'Étudiant",
            "Compagnons du Devoir",
            "Groupement des Monuments Historiques (GMH)"
        ],
        "interests": [
            "artisanat-metiers-dart",
            "arts-design",
            "construire-fabriquer"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Pour restaurer la cathédrale Notre-Dame de Paris après l'incendie, il a fallu extraire plus de 1 000 mètres cubes de pierre calcaire lutétienne identique à celle utilisée par les bâtisseurs du Moyen Âge au XIIe siècle !",
            "pourquoi": "Seuls les tailleurs de pierre d'aujourd'hui maîtrisent encore exactement les mêmes gestes manuels que leurs ancêtres bâtisseurs.",
            "a_retenir": "Le sculpteur d'éternité qui répare les blessures du temps sur nos monuments."
        }
    },
    {
        "id": "cordiste-btp",
        "slug": "cordiste-btp",
        "title": "Cordiste / Technicien de Travaux en Hauteur",
        "aliases": [
            "Alpiniste du bâtiment",
            "Technicien cordiste BTP",
            "Ouvrier sur cordes grande hauteur"
        ],
        "icon": "🧗",
        "image": "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Menuiserie & Métiers Spécialisés",
        "domainId": "menuiserie-agencement",
        "subdomain": "Travaux acrobatiques & Grande hauteur",
        "sectors": [
            "BTP",
            "Travaux Spécialisés",
            "Hauteur"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "CQP Cordiste niveau 1/2 ou Titre Professionnel Cordiste",
        "salary": "🇫🇷 France : 2 200 - 3 800 € net/mois (~32 000 - 55 000 € brut/an avec primes de risque et de hauteur, Source : L'Étudiant) • 🇸🇳 Sénégal : 280 000 - 850 000 FCFA / mois (Maintenance de tours à Dakar, ponts suspendus, industrie offshore)",
        "simpleDefinition": "Le cordiste est l'alpiniste du BTP : suspendu dans le vide à deux cordes à plusieurs dizaines ou centaines de mètres de haut, il effectue des travaux d'entretien, de maçonnerie, de peinture, de vitrerie ou de confortement de falaises là où aucun échafaudage ni nacelle ne peut accéder.",
        "shortDescription": "Professionnel acrobatique d'élite cité par L'Étudiant, il associe la maîtrise des techniques de spéléologie et d'escalade aux compétences manuelles de la construction.",
        "longDescription": "Comme décrit dans la fiche métier de L'Étudiant, le cordiste est appelé lorsque l'accès à un ouvrage d'art, un viaduc, un clocher, une éolienne ou une tour de verre est impossible avec des moyens traditionnels. Muni d'un baudrier professionnel, d'une corde de travail et d'une corde de sécurité antichute indépendante, il s'amarre sur des points d'ancrage solides et se déplace dans les airs avec agilité. Une fois positionné, il peut tout faire : purger des façades de pierres instables, poser des filets pare-éboulements sur des falaises, peindre des structures métalliques ou nettoyer des verrières géantes.",
        "mainObjective": "Intervenir en sécurité absolue dans les zones d'accès difficile ou en hauteur pour réaliser des travaux techniques de maintenance ou de sécurisation.",
        "companyRole": "Intervenant d'élite pour les chantiers inaccessibles et les travaux vertigineux.",
        "workEnvironment": [
            "🧗 Suspendu dans le vide sur cordes le long de tours, viaducs, ponts haubanés ou barrages",
            "🏔️ Falaises rocheuses le long des routes de montagne ou falaises côtières",
            "🌤️ Travail en extérieur avec exposition permanente au vent et aux éléments"
        ],
        "missions": [
            "Installer les amarrages de sécurité conformes aux normes et vérifier la solidité des points d'ancrage",
            "Se déplacer sur cordes à l'aide de bloqueurs, descendeurs et longes de sécurité",
            "Réaliser des opérations de maçonnerie, ravalement, peinture ou soudure en suspension",
            "Purger les rochers instables et forer pour poser des grillages pare-blocs sur falaises",
            "Être capable d'effectuer en quelques secondes l'évacuation et le secours d'un équipier suspendu"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Reconnaissance et amarrage en toiture",
                "desc": "Installation des cordes semi-statiques sur les points d'ancrage certifiés de la toiture terrasse d'une tour de 70 mètres."
            },
            {
                "time": "09:30",
                "title": "Descente et purge de façade",
                "desc": "Descente en rappel contrôlé le long de la façade vitrée et remplacement de joints d'étanchéité silicones usés à 50 m du sol."
            },
            {
                "time": "13:30",
                "title": "Entraînement au secours sur corde",
                "desc": "Exercice hebdomadaire obligatoire de décrochage d'un collègue en situation fictive de malaise sur corde."
            },
            {
                "time": "15:30",
                "title": "Inspection visuelle au viaduc",
                "desc": "Relevé photographique des fissures sous le tablier d'un pont routier au-dessus d'un fleuve."
            }
        ],
        "skills": {
            "technical": [
                "Techniques de progression et de sauvetage sur cordes (noeuds, amarrages débrayables, mouflage)",
                "Polyvalence technique du BTP (maçonnerie, peinture, vitrerie, soudure, perçage)",
                "Réglementation stricte des équipements de protection individuelle contre les chutes (EPI catégorie 3)",
                "Gestion du vent et des facteurs de chute en milieu vertical"
            ],
            "human": [
                "Absence totale de vertige et sérénité absolue dans le vide",
                "Condition physique athlétique, souplesse et maîtrise de son corps",
                "Rigueur procédurale sans concession (la moindre négligence sur une corde peut être mortelle)"
            ],
            "tools": [
                "Harnais complets d'accès sur corde avec sellette de confort",
                "Cordes semi-statiques de type A et appareils antichutes mobiles (Petzl Asap)",
                "Descendeurs auto-freinants (Petzl I'D) et bloqueurs ventraux",
                "Sacs à outils imperdables avec longes de sécurité"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "CQP Cordiste Niveau 1",
                    "title": "Certificat de Qualification Professionnelle Cordiste (CQP 1)",
                    "desc": "La certification indispensable de référence reconnue par la profession pour exercer sur cordes."
                },
                {
                    "step": "CQP Niveau 2 / IRATA",
                    "title": "CQP Cordiste Niveau 2 ou IRATA Level 2/3 (International)",
                    "desc": "Qualification supérieure permettant d'encadrer les chantiers et d'exercer partout dans le monde."
                },
                {
                    "step": "Double Compétence Métier",
                    "title": "CAP préalable en maçonnerie, peinture, soudure ou électricité",
                    "desc": "Un bon cordiste est avant tout un bon ouvrier qui sait manier les cordes pour travailler."
                }
            ],
            "schools": [
                {
                    "name": "Centres de formation aux travaux sur cordes (CREFUM, Criter, Altipur) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Association DPMC (Développement et Promotion des Métiers sur Cordes) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centres de formation aux travaux en hauteur de Dakar — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Écoles de spéléologie et de secours en milieu périlleux — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "CQP Cordiste Niveau 1 & 2 (France)",
                "Certification internationale IRATA Level 1/2/3",
                "Attestation Sauveteur Secouriste du Travail spécifique cordiste"
            ],
            "schoolSubjects": [
                "Techniques de progression verticale",
                "Résistance des matériaux textiles",
                "Techniques de sauvetage en hauteur",
                "Physiologie et syndrome du baudrier"
            ]
        },
        "career": {
            "sectors": [
                "Entreprises spécialisées dans les travaux d'accès difficile",
                "Sociétés d'inspection et de maintenance industrielle (pétrochimie, nucléaire, éolien offshore)",
                "Entreprises de confortement de falaises et génie civil montagnard",
                "Événementiel et spectacle vivant (riggers)"
            ],
            "employerTypes": [
                "Entreprises de travaux sur cordes",
                "Bureaux de contrôle d'ouvrages d'art",
                "Opérateurs éoliens"
            ],
            "evolution": "Cordiste exécutant ➔ Cordiste confirmé de niveau 2 ➔ Chef d'équipe cordiste ➔ Superviseur de travaux d'accès difficile ➔ Formateur en travaux en hauteur",
            "pros": "Sensations fortes au grand air, vues exceptionnelles sur les villes et paysages, rémunération attractive avec primes de risque.",
            "cons": "Exigence physique permanente pour les bras et les épaules, inconfort possible de la suspension prolongée dans le baudrier."
        },
        "gettingStarted": {
            "beginnerProject": "Pratiquer l'escalade en salle ou en falaise pour tester son aisance avec la hauteur et le vide.",
            "intermediateProject": "Apprendre à réaliser les nœuds fondamentaux du cordiste : huit double, nœud de chaise, papillon alpin et cabestan.",
            "advancedProject": "Réaliser un sauvetage fictif sur simulateur en décrochant une charge suspendue à un amarrage.",
            "portfolioIdeas": [
                "Certificat de CQP Cordiste obtenu",
                "Attestation de stage sur un chantier d'accès difficile"
            ]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "Des drones inspectent les façades avec des caméras, mais dès qu'il faut boucher une fissure, remplacer un carreau ou peindre une poutre à 100 m de haut, le geste de l'homme sur corde reste unique.",
            "automatedTasks": [
                "Inspection visuelle préalable par drone pour repérer les zones de travail",
                "Modélisation 3D des falaises par LiDAR avant purge"
            ],
            "emergingSkills": [
                "Utilisation de treuils motorisés électriques légers pour remonter sur corde sans fatigue"
            ],
            "humanEdge": "Le courage dans le vide, l'ingéniosité des nœuds et la dextérité manuelle en suspension."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les techniciens cordistes interviennent sur des ouvrages majeurs : l'entretien du Monument de la Renaissance Africaine (haut de 52 mètres), le lavage et le jointoiement des façades vitrées des tours du Plateau et de Diamniadio, et l'inspection des torchères des plateformes pétrolières et gazières offshore au large de Dakar.",
            "localSectors": [
                "Entreprises de travaux acrobatiques de Dakar",
                "Secteur pétrogazier offshore (FPSO Sangomar, GTA)",
                "Entretien des tours et hôtels de luxe"
            ],
            "remoteWork": "Non compatible (100% suspendu sur les cordes).",
            "entrepreneurship": "Création d'une entreprise spécialisée dans les travaux sur cordes, le nettoyage de vitres en hauteur et la maintenance industrielle au Sénégal."
        },
        "relatedJobSlugs": [
            "technicien-maintenance-eolienne",
            "peintre-en-batiment",
            "couvreur"
        ],
        "connectedFamilies": [
            "industrie-mecanique",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier Cordiste — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/cordiste.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "DPMC — Développement et Promotion des Métiers sur Cordes",
                "url": "https://www.metiersducordiste.fr/",
                "source": "DPMC"
            }
        ],
        "sources": [
            "L'Étudiant",
            "DPMC",
            "IRATA International"
        ],
        "interests": [
            "sport-plein-air",
            "construire-fabriquer",
            "technique-outils"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Un cordiste ne travaille JAMAIS sur une seule corde : il utilise obligatoirement deux cordes indépendantes (une corde de travail et une corde de sécurité) ayant chacune une résistance à la rupture de plus de 2,5 tonnes !",
            "pourquoi": "Si la corde principale venait à être coupée par une arête coupante, l'antichute bloque instantanément le cordiste sur la seconde corde sans aucune chute.",
            "a_retenir": "L'alpiniste des villes qui défie le vide pour réparer l'inaccessible."
        }
    },
    {
        "id": "charge-affaires-btp",
        "slug": "charge-affaires-btp",
        "title": "Chargé d'Affaires dans le BTP",
        "aliases": [
            "Ingénieur d'affaires BTP",
            "Responsable d'affaires génie civil/bâtiment",
            "Commercial de projets BTP"
        ],
        "icon": "💼",
        "image": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Construction Durable, Éco-Conception & Affaires",
        "domainId": "construction-durable-performance",
        "subdomain": "Développement commercial & Gestion de contrats",
        "sectors": [
            "BTP",
            "Commerce",
            "Gestion"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "Bac +3 (Licence Pro BTP) à Bac +5 (Ingénieur d'Affaires BTP ou Master Management)",
        "salary": "🇫🇷 France : 2 900 - 5 200 € net/mois (~40 000 - 75 000 € brut/an + variable non plafonné, Source : L'Étudiant) • 🇸🇳 Sénégal : 500 000 - 1 800 000 FCFA / mois (Entreprises de construction et équipementiers BTP)",
        "simpleDefinition": "Le chargé d'affaires dans le BTP prospecte de nouveaux clients, répond aux appels d'offres, négocie les contrats de travaux et pilote la rentabilité globale des opérations jusqu'à la livraison complète et le règlement des factures.",
        "shortDescription": "Profil hybride technico-commercial mis en valeur par L'Étudiant, il combine sens aigu de la négociation et expertise des chantiers pour développer le carnet de commandes.",
        "longDescription": "Comme explicité dans la fiche de L'Étudiant, le chargé d'affaires porte une double casquette : développeur commercial et gestionnaire de projets. Il identifie les futurs projets de construction publics ou privés, rencontre les décideurs (promoteurs, mairies, directeurs d'usines), élabore l'offre avec le bureau d'études, défend la marge de l'entreprise lors des négociations contractuelles, puis supervise le déroulement des travaux en lien avec les conducteurs de travaux pour assurer la satisfaction totale du client.",
        "mainObjective": "Développer le chiffre d'affaires et la rentabilité de l'entreprise en signant et pilotant des contrats de travaux pérennes.",
        "companyRole": "Moteur du carnet de commandes et garant de la relation client et de la marge financière.",
        "workEnvironment": [
            "🏢 Sièges d'entreprises de construction, bureaux régionaux ou cabinets d'ingénierie",
            "🤝 Salons professionnels, déjeuners d'affaires et soutenances devant des jurys",
            "🚗 Mobilité fréquente pour visiter les clients et inspecter les chantiers en cours"
        ],
        "missions": [
            "Détecter les opportunités d'affaires et prospecter les maîtres d'ouvrage publics et privés",
            "Piloter l'élaboration des offres techniques et financières avec les équipes d'études de prix",
            "Négocier les conditions contractuelles, les prix et les plannings avec les clients",
            "Superviser le bon déroulement technique et financier des chantiers remportés",
            "Fidéliser son portefeuille de clients et assurer le recouvrement des paiements"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Prospection et veille marchés",
                "desc": "Veille sur les avis de marchés publics régionaux pour repérer la construction d'un futur groupe scolaire de 8 millions d'euros."
            },
            {
                "time": "10:30",
                "title": "Soutenance commerciale",
                "desc": "Présentation orale de l'offre technique de l'entreprise devant le comité de sélection d'un promoteur immobilier privé."
            },
            {
                "time": "14:00",
                "title": "Point d'avancement sur chantier",
                "desc": "Visite d'un chantier en cours avec le client pour valider un avenant de travaux modificatifs acquéreurs (TMA)."
            },
            {
                "time": "16:30",
                "title": "Bilan de rentabilité d'affaires",
                "desc": "Examen de la marge brute dégagée sur les trois chantiers livrés le mois dernier avec le directeur d'agence."
            }
        ],
        "skills": {
            "technical": [
                "Technologies du bâtiment et des travaux publics (gros œuvre, second œuvre ou lots techniques)",
                "Droit des contrats de construction et gestion des risques d'impayés",
                "Techniques de vente consultative complexe B2B et négociation grand compte",
                "Gestion financière d'affaires et suivi des comptes de résultats de chantier"
            ],
            "human": [
                "Aisance relationnelle, charisme naturel et force de persuasion",
                "Sens de l'écoute active et capacité d'adaptation à des interlocuteurs variés",
                "Ténacité commerciale et goût du challenge des résultats"
            ],
            "tools": [
                "Logiciels CRM de gestion de la relation client (Salesforce, HubSpot)",
                "Progiciels de gestion intégrée BTP (Onaya, Sage BTP, EBP)",
                "Outils de présentation commerciale percutants",
                "Plateformes d'appels d'offres dématérialisées"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "BTS / BUT (Bac +2/+3)",
                    "title": "BTS CCST (Conseil et Commercialisation de Solutions Techniques) ou BUT Génie Civil",
                    "desc": "Bases solides en technique du bâtiment et négociation commerciale."
                },
                {
                    "step": "Licence Pro (Bac +3)",
                    "title": "Licence Pro Chargé d'Affaires BTP",
                    "desc": "Formation de spécialisation en alternance très prisée par les PME du bâtiment."
                },
                {
                    "step": "Master / Ingénieur d'Affaires (Bac +5)",
                    "title": "Diplôme d'Ingénieur d'Affaires (ESTP, ESTA, Kedge, Écoles d'Ingénieurs)",
                    "desc": "Formation d'excellence pour négocier des contrats de plusieurs dizaines de millions d'euros."
                }
            ],
            "schools": [
                {
                    "name": "ESTP Paris (Mastère Spécialisé Ingénierie d'Affaires) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "ESTA Belfort (École Supérieure des Technologies et des Affaires) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) / Gestion BTP — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "BEM Dakar (Bordeaux Management School) / IAM Dakar — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification Négociation Commerciale B2B Complexe",
                "Agrément Marchés Publics de Travaux",
                "Certification Management d'Affaires BTP"
            ],
            "schoolSubjects": [
                "Droit des marchés et des contrats",
                "Techniques de négociation commerciale",
                "Gestion financière d'affaires",
                "Technologie du BTP"
            ]
        },
        "career": {
            "sectors": [
                "Grandes entreprises générales de construction",
                "PME de second œuvre et d'installations techniques (CVC, électricité, façades)",
                "Négociants et distributeurs de matériaux du bâtiment (Point P, Saint-Gobain)",
                "Sociétés de location de matériel de chantier"
            ],
            "employerTypes": [
                "Entreprises générales de BTP",
                "Installateurs de génie climatique et électrique",
                "Fabricants de composants de construction"
            ],
            "evolution": "Chargé d'affaires junior ➔ Chargé d'affaires senior ➔ Responsable commercial régional ➔ Directeur d'agence BTP ➔ Directeur du développement",
            "pros": "Rémunération stimulante avec primes variables sur marge, autonomie d'action, réseau relationnel vaste et influent.",
            "cons": "Pression permanente sur les objectifs de vente trimestriels, devoir concilier les promesses faites au client avec les contraintes du chantier."
        },
        "gettingStarted": {
            "beginnerProject": "Analyser la plaquette commerciale d'une entreprise générale de BTP pour repérer ses arguments de vente clés.",
            "intermediateProject": "Construire un argumentaire de vente pour convaincre un promoteur de choisir une structure bois plutôt que béton.",
            "advancedProject": "Rédiger une offre commerciale complète avec calendrier d'acomptes financiers pour la construction d'un entrepôt de 2 000 m².",
            "portfolioIdeas": [
                "Proposition commerciale BTP argumentée",
                "Simulation de marge brute prévisionnelle sur une affaire"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'IA analyse les signaux faibles sur le web (dépôts de permis de construire, levées de fonds) pour alerter le chargé d'affaires sur les futurs projets avant la concurrence.",
            "automatedTasks": [
                "Veille automatique et qualification des appels d'offres",
                "Génération automatique des premières ébauches de mémoires techniques"
            ],
            "emergingSkills": [
                "Utilisation d'assistants CRM pilotés par IA pour la relance personnalisée des décideurs"
            ],
            "humanEdge": "La confiance humaine, la poignée de main et la relation interpersonnelle qui font signer un contrat de plusieurs millions d'euros."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal et dans la sous-région ouest-africaine, le chargé d'affaires BTP est le pivot de la négociation avec les ministères, les promoteurs privés et les investisseurs internationaux, devant faire preuve d'une grande finesse relationnelle et culturelle pour remporter les grands chantiers du Plan Sénégal Émergent.",
            "localSectors": [
                "Grands groupes de BTP (Eiffage Sénégal, CSE, Consortium d'Entreprises)",
                "Sociétés de promotion immobilière de Dakar",
                "Fournisseurs industriels de matériaux"
            ],
            "remoteWork": "Hybride (déplacements fréquents chez les clients et télétravail pour le CRM et les devis).",
            "entrepreneurship": "Création d'une agence de courtage en travaux et de mise en relation entre investisseurs et entreprises générales de construction qualifiées."
        },
        "relatedJobSlugs": [
            "conducteur-de-travaux",
            "ingenieur-etudes-de-prix",
            "metreur-economiste-construction"
        ],
        "connectedFamilies": [
            "commerce-marketing",
            "management-gestion",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier Chargé d'affaires dans le BTP — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/charge-d-affaires-dans-le-btp-2.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "EGF BTP — Entreprises Générales de France",
                "url": "https://www.egfbtp.com/",
                "source": "EGF BTP"
            }
        ],
        "sources": [
            "L'Étudiant",
            "EGF BTP",
            "FFB"
        ],
        "interests": [
            "commerce-marketing",
            "coordonner-gerer",
            "contact-humain"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Un bon chargé d'affaires dans le BTP génère souvent entre 5 et 15 millions d'euros de chiffre d'affaires par an à lui tout seul pour son entreprise !",
            "pourquoi": "Grâce à son carnet d'adresses et à sa capacité à rassurer les clients sur la fiabilité technique de ses équipes.",
            "a_retenir": "L'ambassadeur commercial qui alimente le travail de centaines d'ouvriers sur le terrain."
        }
    },
    {
        "id": "electricien-du-btp",
        "slug": "electricien-du-btp",
        "title": "Électricien du BTP & Installateur Réseaux",
        "aliases": [
            "Électricien bâtiment",
            "Installateur électricien tertiaire et habitat",
            "Technicien en installations électriques"
        ],
        "icon": "⚡",
        "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Équipements : Électricité, Plomberie & CVC",
        "domainId": "electricite-plomberie-cvc",
        "subdomain": "Électricité du bâtiment & Distribution",
        "sectors": [
            "BTP",
            "Énergie",
            "Second Œuvre"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "CAP Électricien à Bac Pro MELEC (Métiers de l'Électricité)",
        "salary": "🇫🇷 France : 1 900 - 3 100 € net/mois (~27 000 - 44 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 200 000 - 700 000 FCFA / mois (Installations tertiaires et résidentielles, raccordements)",
        "simpleDefinition": "L'électricien du BTP installe, câble et raccorde tous les réseaux électriques d'un bâtiment (éclairage, prises de courant, tableaux de disjoncteurs, sécurité incendie, bornes de recharge pour voitures) en garantissant une sécurité totale contre les risques d'incendie et d'électrocution.",
        "shortDescription": "Artisan de l'énergie et de la lumière cité par L'Étudiant, il apporte le courant dans chaque pièce selon des normes de sécurité draconiennes.",
        "longDescription": "Comme décrit dans la fiche métier de L'Étudiant, l'électricien intervient en deux phases : d'abord lors du gros œuvre pour encastrer les gaines et conduits dans les dalles et cloisons avant qu'elles ne soient fermées, puis lors du second œuvre pour tirer les fils conducteurs, équiper le tableau électrique principal de disjoncteurs différentiels, brancher les interrupteurs et poser les luminaires. Il vérifie la mise à la terre au mesureur de terre avant d'obtenir le certificat de conformité (Consuel) indispensable à l'ouverture du compteur électrique.",
        "mainObjective": "Distribuer l'électricité en toute sécurité dans l'ensemble du bâtiment en respectant scrupuleusement la norme de sécurité NF C 15-100.",
        "companyRole": "Garant de l'alimentation énergétique et de la sécurité électrique des personnes et des biens.",
        "workEnvironment": [
            "🏠 Logements individuels et collectifs en construction ou rénovation",
            "🏢 Bâtiments tertiaires (bureaux, hôpitaux, centres commerciaux, écoles)",
            "🪜 Travail en intérieur à genoux (prises) ou sur escabeau (plafonds et chemins de câbles)"
        ],
        "missions": [
            "Poser les chemins de câbles, saignées et gaines encastrées selon les plans d'implantation",
            "Tirer les câbles d'alimentation de puissance et les câbles de communication réseau (RJ45)",
            "Câbler et étiqueter le tableau électrique de distribution et les disjoncteurs divisionnaires",
            "Raccorder les appareillages (prises 16A/32A, interrupteurs, variateurs, éclairages LED, VMC)",
            "Mesurer la résistance de la prise de terre et vérifier le déclenchement des différentiels 30 mA"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Tirage de câbles sous gaine",
                "desc": "Passage des conducteurs phase, neutre et terre à l'aide d'une aiguille tire-fil dans les gaines ICTA d'un appartement."
            },
            {
                "time": "10:30",
                "title": "Câblage d'un tableau divisionnaire",
                "desc": "Raccordement peigné des disjoncteurs modulaires et équilibrage des charges sur les 3 phases d'un tableau tertiaire."
            },
            {
                "time": "13:30",
                "title": "Pose de cheminements de câbles",
                "desc": "Fixation de chemins de câbles métalliques perforés dans le faux-plafond d'un couloir de bureaux."
            },
            {
                "time": "15:30",
                "title": "Mesures de conformité Consuel",
                "desc": "Contrôle de la boucle de terre au telluromètre (obtention de 18 ohms, conforme au seuil de 100 ohms)."
            }
        ],
        "skills": {
            "technical": [
                "Norme électrique d'installation basse tension (NF C 15-100)",
                "Schémas électriques unifilaires et multifilaires et calcul de section de câbles",
                "Habilitations électriques obligatoires (B1V, B2V, BR, BC)",
                "Réseaux de communication et courants faibles (VDI - Voix Données Images)"
            ],
            "human": [
                "Rigueur absolue et respect strict des règles de sécurité vitale",
                "Méthode, soin dans le repérage et propreté du câblage",
                "Esprit d'analyse logique pour dépanner une panne de disjonction"
            ],
            "tools": [
                "Multimètres numériques, vérificateurs d'absence de tension (VAT) et pinces ampèremétriques",
                "Telluromètres et mesureurs d'isolement de terre (Megger)",
                "Pinces à dénuder automatiques et pinces à sertir les embouts de câblage",
                "Rainureuses à béton avec aspiration pour saignées murales"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "CAP (2 ans)",
                    "title": "CAP Électricien",
                    "desc": "Le parcours en alternance classique valorisé par L'Étudiant pour apprendre le câblage et la sécurité."
                },
                {
                    "step": "Bac Pro (3 ans)",
                    "title": "Bac Pro MELEC (Métiers de l'Électricité et de ses Environnements Connectés)",
                    "desc": "Formation de référence incluant la domotique, les réseaux communicants et la gestion d'énergie."
                },
                {
                    "step": "BTS (Bac +2)",
                    "title": "BTS Électrotechnique ou BTS FED",
                    "desc": "Accès aux fonctions de chef d'équipe électricité ou chargé d'affaires électricité tertiaire."
                }
            ],
            "schools": [
                {
                    "name": "CFA du Bâtiment et lycées professionnels préparant le Bac Pro MELEC — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centres de formation continue spécialisés en électricité tertiaire — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centre de Perfectionnement Professionnel de la Senelec (CFPP Rufisque) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Habilitation électrique BR/B2V/BC",
                "Certification Qualification IRVE (Bornes de recharge de véhicules électriques)",
                "Attestation Qualifelec"
            ],
            "schoolSubjects": [
                "Électrotechnique et lois d'Ohm/Joule",
                "Schémas électriques et normes",
                "Réseaux informatiques et courants faibles",
                "Sécurité électrique"
            ]
        },
        "career": {
            "sectors": [
                "Entreprises artisanales d'électricité générale",
                "Grandes entreprises d'installations électriques (SPIE, Bouygues ES, Eiffage Énergie)",
                "Entreprises de maintenance multitechnique tertiaire et industrielle"
            ],
            "employerTypes": [
                "Artisans électriciens",
                "PME d'électricité générale",
                "Entreprises générales de BTP"
            ],
            "evolution": "Électricien débutant ➔ Électricien chef d'équipe ➔ Chef de chantier électricité ➔ Artisan chef d'entreprise d'électricité",
            "pros": "Plein emploi permanent (pénurie majeure de profils), diversité des chantiers (habitat, tertiaire, bornes IRVE), compétences techniques nobles.",
            "cons": "Travail régulier les bras en l'air lors de la pose de luminaires, vigilance permanente contre le risque d'électrocution."
        },
        "gettingStarted": {
            "beginnerProject": "Câbler un va-et-vient simple sur une maquette en bois avec deux interrupteurs et une ampoule.",
            "intermediateProject": "Brancher un disjoncteur différentiel 30 mA et deux disjoncteurs divisionnaires sur un tableau électrique d'essai.",
            "advancedProject": "Réaliser le schéma unifilaire complet d'un appartement T3 conforme à la norme NF C 15-100.",
            "portfolioIdeas": [
                "Photos d'un tableau électrique câblé au cordeau avec étiquetage parfait",
                "Attestation de réussite d'habilitation électrique"
            ]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "Le tirage de fils dans les gaines sinueuses, le raccordement minutieux des disjoncteurs et le dépannage au multimètre restent l'apanage exclusif de la main humaine.",
            "automatedTasks": [
                "Calcul automatique des sections de câbles par logiciel de dimensionnement (Caneco BT)",
                "Vérification automatisée de l'équilibrage des phases"
            ],
            "emergingSkills": [
                "Installation de bornes de recharge intelligentes et de gestionnaires d'énergie communicants"
            ],
            "humanEdge": "La dextérité manuelle pour sertir des conducteurs dans des espaces exigus et le respect absolu de la vie humaine."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'électricien du bâtiment est au cœur de l'accès à la modernité : il équipe les nouvelles résidences, installe les compteurs prépayés Woyofal de la Senelec, sécurise les installations contre les courts-circuits fréquents et installe des inverseurs de sources automatiques pour les groupes électrogènes et onduleurs de secours.",
            "localSectors": [
                "Entreprises d'électricité de Dakar",
                "Partenaires installateurs de la Senelec",
                "Chantiers immobiliers et tertiaires"
            ],
            "remoteWork": "Non compatible (100% sur le chantier d'installation).",
            "entrepreneurship": "Création d'une entreprise d'installations électriques résidentielles et d'onduleurs solaires de secours à Dakar."
        },
        "relatedJobSlugs": [
            "domoticien",
            "monteur-technicien-reseaux-electriques",
            "plombier-chauffagiste"
        ],
        "connectedFamilies": [
            "energie-renouvelable",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier Électricien — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/electricien-du-btp.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "Qualifelec — Association professionnelle de qualification électrique",
                "url": "https://www.qualifelec.fr/",
                "source": "Qualifelec"
            }
        ],
        "sources": [
            "L'Étudiant",
            "Qualifelec",
            "FFB"
        ],
        "interests": [
            "technique-outils",
            "construire-fabriquer",
            "sciences-recherche"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Le disjoncteur différentiel 30 milliampères, présent dans chaque maison, est capable de couper le courant en moins de 30 millisecondes dès qu'il détecte une fuite de courant de quelques gouttes d'électrons !",
            "pourquoi": "Cette rapidité foudroyante évite que le courant ne traverse le cœur humain, sauvant des milliers de vies chaque année.",
            "a_retenir": "L'artisan de la lumière qui apprivoise les électrons pour nous éclairer en sécurité."
        }
    },
    {
        "id": "plombier-chauffagiste",
        "slug": "plombier-chauffagiste",
        "title": "Plombier-Chauffagiste & Installateur Sanitaire",
        "aliases": [
            "Installateur sanitaire et thermique",
            "Technicien chauffagiste",
            "Plombier dépanneur"
        ],
        "icon": "🚰",
        "image": "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Équipements : Électricité, Plomberie & CVC",
        "domainId": "electricite-plomberie-cvc",
        "subdomain": "Plomberie sanitaire, Chauffage & Réseaux d'eau",
        "sectors": [
            "BTP",
            "Plomberie",
            "Génie Climatique"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "CAP Plombier / Installateur thermique à Bac Pro / BTS FED",
        "salary": "🇫🇷 France : 2 000 - 3 400 € net/mois (~28 000 - 48 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 180 000 - 650 000 FCFA / mois (Installations sanitaires d'immeubles, plomberie d'urgence)",
        "simpleDefinition": "Le plombier-chauffagiste achemine l'eau potable jusqu'aux robinets et évacue les eaux usées d'un bâtiment, installe les équipements sanitaires (douches, lavabos, WC) et pose les systèmes de chauffage (chaudières, radiateurs, planchers chauffants, pompes à chaleur).",
        "shortDescription": "Artisan de l'eau et de la chaleur cité par L'Étudiant, il maîtrise la tuyauterie sous pression et assure l'hygiène et le confort thermique quotidien.",
        "longDescription": "Comme décrit dans les fiches d'orientation de L'Étudiant, le plombier-chauffagiste est l'expert des fluides en circulation. Il façonne et raccorde les tuyauteries en cuivre par brasage fort, pose les canalisations multicouches ou PER sans soudure, et installe les tuyaux d'évacuation en PVC avec des pentes rigoureuses pour éviter les bouchons. En tant que chauffagiste, il raccorde les générateurs de chaleur (pompes à chaleur air/eau, chaudières gaz à condensation, chauffe-eaux thermodynamiques) et équilibre les circuits hydrauliques pour une température agréable dans chaque pièce.",
        "mainObjective": "Garantir la distribution saine de l'eau potable, l'évacuation sans fuite des eaux usées et la performance du chauffage en toute sécurité.",
        "companyRole": "Garant du confort sanitaire, de l'hygiène et de l'alimentation en eau et chaleur du bâtiment.",
        "workEnvironment": [
            "🏠 Salles de bains, cuisines, caves et combles d'immeubles ou de maisons",
            "🏢 Locaux techniques de chaufferies collectives et gaines techniques étroites",
            "🚐 Déplacements quotidiens avec véhicule utilitaire atelier pour dépannages et poses"
        ],
        "missions": [
            "Tracer les parcours de canalisations et encastrer les tuyaux dans les cloisons ou sols",
            "Couper, cintrer et braser les tuyaux en cuivre et sertir les raccords multicouches",
            "Poser les appareils sanitaires (baignoires, receveurs de douche, WC suspendus, vasques)",
            "Installer les systèmes de production d'eau chaude (chauffe-eau thermodynamique, solaire)",
            "Réaliser les épreuves de pression d'eau pour vérifier l'étanchéité absolue avant fermeture des cloisons"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Brasage d'une nourrice d'eau sanitaire",
                "desc": "Façonnage et soudure au chalumeau oxyacétylénique d'une clarinette de distribution en cuivre dans une gaine technique."
            },
            {
                "time": "10:30",
                "title": "Pose d'un plancher chauffant hydraulique",
                "desc": "Déroulage des tubes PER sur dalles d'isolant quadrillées et raccordement au collecteur régulé."
            },
            {
                "time": "13:30",
                "title": "Installation d'un WC suspendu",
                "desc": "Fixation du bâti-support métallique au sol et au mur et raccordement de la pipe d'évacuation de 100 mm."
            },
            {
                "time": "15:30",
                "title": "Mise en eau sous pression",
                "desc": "Mise sous pression d'épreuve à 6 bars avec pompe manuelle pour vérifier l'absence totale de micro-fuite."
            }
        ],
        "skills": {
            "technical": [
                "Hydraulique du bâtiment, débits d'eau, pertes de charge et équilibrage des réseaux",
                "Brasage fort du cuivre, soudure oxyacétylénique et techniques de sertissage mécanique",
                "Technologie des systèmes de chauffage (pompes à chaleur, chaudières, radiateurs)",
                "Normes sanitaires de potabilité de l'eau (DTU 60.1) et évacuation gravitaire"
            ],
            "human": [
                "Sens du diagnostic méthodique pour repérer rapidement l'origine d'une fuite",
                "Habileté manuelle et souplesse corporelle pour travailler dans des espaces restreints",
                "Sens du service client et disponibilité lors des urgences de dégâts des eaux"
            ],
            "tools": [
                "Chalumeaux oxyacétyléniques et postes de brasage portables",
                "Pinces à sertir électrohydrauliques pour raccords cuivre et multicouche",
                "Cintreuses arbalètes manuelles et coupe-tubes professionnels",
                "Pompes d'épreuve hydrostatiques et caméras d'inspection de canalisations"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "CAP (2 ans)",
                    "title": "CAP Monteur en Installations Sanitaires ou Thermiques",
                    "desc": "La formation en alternance de base recommandée par L'Étudiant pour apprendre la soudure et la plomberie."
                },
                {
                    "step": "Bac Pro (3 ans)",
                    "title": "Bac Pro Métiers du Froid et des Énergies Renouvelables (MFER)",
                    "desc": "Formation moderne axée sur les pompes à chaleur et la transition énergétique."
                },
                {
                    "step": "BP / BTS (Bac +2)",
                    "title": "BP Monteur en Installations du Génie Climatique ou BTS FED",
                    "desc": "Spécialisation de haut niveau pour concevoir et diriger des chantiers de plomberie tertiaire."
                }
            ],
            "schools": [
                {
                    "name": "CFA du Bâtiment spécialisés en génie climatique et plomberie — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Compagnons du Devoir (filière plomberie) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification Qualibat RGE Pompe à Chaleur / Chaudière biomasse",
                "Habilitation gaz (Professionnel du Gaz - PG)",
                "CQP Plombier Spécialiste"
            ],
            "schoolSubjects": [
                "Hydraulique et thermodynamique appliquée",
                "Technologie des tuyauteries et raccords",
                "Lecture de plans de réseaux sanitaires",
                "Sécurité gaz et incendie"
            ]
        },
        "career": {
            "sectors": [
                "Entreprises artisanales de plomberie et chauffage",
                "Sociétés de maintenance immobilière et dépannage d'urgence",
                "Grands groupes de génie climatique (Dalkia, ENGIE Solutions, Spie)",
                "Entreprises de construction de piscines et spas"
            ],
            "employerTypes": [
                "Artisans plombiers",
                "PME de génie climatique",
                "Sociétés de dépannage 24/7"
            ],
            "evolution": "Apprenti plombier ➔ Plombier qualifié ➔ Chef d'équipe sanitaire ➔ Technicien metteur au point chauffage ➔ Artisan chef d'entreprise",
            "pros": "Métier indispensable au quotidien avec zéro chômage, liberté totale d'exercice à son compte, forte reconnaissance des clients dépannés.",
            "cons": "Interventions parfois salissantes ou dans des espaces exigus (vides sanitaires), astreintes possibles le week-end."
        },
        "gettingStarted": {
            "beginnerProject": "Changer le joint torique d'un robinet qui goutte et comprendre le fonctionnement d'un siphon sous un évier.",
            "intermediateProject": "Réaliser une brasure capillaire parfaite sur tube cuivre de 14 mm avec fil d'étain/argent.",
            "advancedProject": "Assembler un réseau complet d'alimentation de douche en tube multicouche avec collecteur et nourrice.",
            "portfolioIdeas": [
                "Photos de réalisations d'installations sanitaires propres et soignées",
                "Schéma de principe d'un circuit de chauffage central"
            ]
        },
        "aiImpact": {
            "level": "Faible",
            "summary": "Aucun robot ne peut se glisser sous un évier étroit pour réparer une fuite de joint ou braser un coude en cuivre au ras d'un mur.",
            "automatedTasks": [
                "Détecteurs connectés de fuites d'eau coupant automatiquement l'arrivée principale",
                "Thermostats intelligents pilotés par IA pour réguler le chauffage"
            ],
            "emergingSkills": [
                "Installation et paramétrage de chauffe-eaux connectés et de pompes à chaleur intelligentes"
            ],
            "humanEdge": "La dextérité manuelle pour braser dans un angle aveugle et le flair du dépanneur qui trouve l'origine d'une fuite cachée."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le plombier est un acteur essentiel de la vie des quartiers : il installe les surpresseurs et bâches à eau indispensables pour garantir une pression constante dans les étages malgré les coupures d'eau du réseau urbain de la Sen'Eau, et pose des chauffe-eaux solaires sur les toits de Dakar.",
            "localSectors": [
                "Entreprises de plomberie sanitaire de Dakar",
                "Partenaires de la Sen'Eau (Société d'Exploitation des Eaux du Sénégal)",
                "Chantiers d'immeubles et résidences"
            ],
            "remoteWork": "Non compatible (100% sur place les mains sur les tuyaux).",
            "entrepreneurship": "Création d'une entreprise spécialisée dans l'installation de surpresseurs d'eau automatiques et de chauffe-eaux solaires pour les ménages sénégalais."
        },
        "relatedJobSlugs": [
            "technicien-climatisation",
            "technicien-solaire-thermique",
            "electricien-du-btp"
        ],
        "connectedFamilies": [
            "artisanat-metiers-dart",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier Plombier — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "CAPEB — Métiers de la plomberie et du chauffage",
                "url": "https://www.capeb.fr/",
                "source": "CAPEB"
            }
        ],
        "sources": [
            "L'Étudiant",
            "CAPEB",
            "FFB"
        ],
        "interests": [
            "technique-outils",
            "construire-fabriquer",
            "contact-humain"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Le mot 'plombier' vient du métal le plomb, utilisé depuis l'Empire romain pour fabriquer les canalisations des aqueducs et thermes antiques !",
            "pourquoi": "Aujourd'hui, le plomb a été totalement banni pour des raisons de santé au profit du cuivre, du multicouche et de l'inox alimentaire.",
            "a_retenir": "Le maître de l'eau qui apporte l'hygiène, la santé et la chaleur au cœur de nos maisons."
        }
    },
    {
        "id": "technicien-climatisation",
        "slug": "technicien-climatisation",
        "title": "Technicien en Climatisation & Ventilation CVC",
        "aliases": [
            "Technicien génie climatique CVC",
            "Installateur dépanneur en climatisation",
            "Technicien ventilation et traitement d'air"
        ],
        "icon": "❄️",
        "image": "https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Équipements : Électricité, Plomberie & CVC",
        "domainId": "electricite-plomberie-cvc",
        "subdomain": "Climatisation, Ventilation & Traitement d'air",
        "sectors": [
            "BTP",
            "Génie Climatique",
            "Climatisation"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "Bac Pro (TFCA / MFER) à Bac +2 (BTS Fluides Énergies Domotique - FED)",
        "salary": "🇫🇷 France : 2 200 - 3 500 € net/mois (~32 000 - 50 000 € brut/an avec véhicule, Source : L'Étudiant) • 🇸🇳 Sénégal : 250 000 - 800 000 FCFA / mois (Maintenance des climatiseurs de bureaux, banques, hôtels à Dakar)",
        "simpleDefinition": "Le technicien en climatisation et ventilation installe, règle et dépanne les climatiseurs, pompes à chaleur réversibles et centrales de traitement d'air (VMC) pour assurer une température agréable et un air sain et purifié dans les logements, bureaux, hôpitaux et commerces.",
        "shortDescription": "Spécialiste du confort thermique et de la qualité de l'air cité par L'Étudiant, il maîtrise la thermodynamique, les fluides frigorigènes et l'aéraulique.",
        "longDescription": "Comme décrit dans les métiers techniques du BTP de L'Étudiant, le technicien en climatisation est un profil sous très forte tension de recrutement. Il installe les unités intérieures (splits, cassettes de plafond) et extérieures, tire les liaisons frigorifiques en cuivre, effectue le tirage au vide et charge le gaz caloporteur. Il raccorde les réseaux de gaines de ventilation double flux avec récupération d'énergie et règle les thermostats électroniques pour garantir un renouvellement d'air constant sans déperdition énergétique.",
        "mainObjective": "Maintenir une température intérieure idéale été comme hiver et assurer un air purifié et renouvelé en optimisant la consommation électrique.",
        "companyRole": "Garant du confort thermique, de la santé respiratoire et de l'efficacité énergétique du bâtiment.",
        "workEnvironment": [
            "🏢 Immeubles de bureaux tertiaires, cliniques, data centers, hôtels et commerces",
            "🏠 Logements de particuliers équipés de pompes à chaleur réversibles",
            "🪜 Intervention sur les toits-terrasses pour les groupes extérieurs et locaux techniques de ventilation"
        ],
        "missions": [
            "Implanter et fixer les groupes frigorifiques extérieurs et les diffuseurs intérieurs (splits, ventilo-convecteurs)",
            "Façonner et braser les liaisons frigorifiques en cuivre sous azote pour éviter l'oxydation interne",
            "Réaliser le tirage au vide de l'installation et vérifier l'étanchéité absolue au détecteur électronique",
            "Monter et équilibrer les réseaux de gaines aérauliques de ventilation (VMC simple et double flux)",
            "Effectuer la maintenance préventive (nettoyage des filtres antibactériens, contrôle des pressions de gaz)"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Diagnostic d'une alarme climatisation",
                "desc": "Intervention d'urgence dans un data center : remplacement d'un ventilateur de condenseur en toiture pour éviter la surchauffe des serveurs."
            },
            {
                "time": "10:30",
                "title": "Mise en service d'un système multi-split",
                "desc": "Tirage au vide poussé sous 250 microns sur un système à 4 unités intérieures et vérification des pressions de fonctionnement au manifold numérique."
            },
            {
                "time": "14:00",
                "title": "Pose de gaines de ventilation double flux",
                "desc": "Raccordement de gaines aérauliques calorifugées sur la centrale de traitement d'air (CTA) d'une clinique."
            },
            {
                "time": "16:30",
                "title": "Mesure des débits d'air aux bouches",
                "desc": "Contrôle des volumes d'air neuf au cône anémomètre pour vérifier le renouvellement d'air hygiénique de 30 m³/h par occupant."
            }
        ],
        "skills": {
            "technical": [
                "Thermodynamique des cycles frigorifiques et fluides frigorigènes (R32, R410A, R290)",
                "Aéraulique, calcul des débits d'air, pertes de charge et équilibrage des gaines",
                "Brasage fort sous azote et tuyauterie cuivre frigorifique",
                "Attestation d'aptitude à la manipulation des fluides frigorigènes (Catégorie 1)"
            ],
            "human": [
                "Méthode logique de diagnostic de panne et esprit d'investigation",
                "Autonomie complète sur le terrain avec véhicule d'intervention",
                "Pédagogie pour expliquer le fonctionnement des télécommandes aux usagers"
            ],
            "tools": [
                "Manifolds électroniques connectés avec sondes de température Bluetooth",
                "Pompes à vide double étage et vacuomètres électroniques",
                "Détecteurs de fuites de gaz électroniques sensibles au gramme/an",
                "Anémomètres à fil chaud et cônes de mesure de débit d'air"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Bac Pro (3 ans)",
                    "title": "Bac Pro Métiers du Froid et des Énergies Renouvelables (MFER)",
                    "desc": "La formation de base mise en avant par L'Étudiant pour acquérir les compétences frigorifiques."
                },
                {
                    "step": "Attestation Fluides",
                    "title": "Attestation d'Aptitude Fluides Frigorigènes (Catégorie 1)",
                    "desc": "L'habilitation légale obligatoire pour manipuler les gaz frigorigènes."
                },
                {
                    "step": "BTS (Bac +2)",
                    "title": "BTS Fluides Énergies Domotique (BTS FED option A - Génie climatique)",
                    "desc": "Formation de référence pour concevoir des installations de climatisation tertiaires complexes."
                }
            ],
            "schools": [
                {
                    "name": "Lycées préparant le Bac Pro MFER et BTS FED — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "IFFI (Institut Français du Froid Industriel - CNAM) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) / Génie Frigorifique et CVC — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Lycée Technique Industriel Maurice Delafosse (Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Attestation d'Aptitude Fluides Frigorigènes Catégorie 1",
                "Habilitation électrique BR/B2V",
                "Certification Qualiclimat / Qualipac"
            ],
            "schoolSubjects": [
                "Thermodynamique appliquée",
                "Aéraulique et ventilation",
                "Électrotechnique et régulation CVC",
                "Sécurité des gaz sous pression"
            ]
        },
        "career": {
            "sectors": [
                "Entreprises d'installation et de maintenance en génie climatique (Dalkia, ENGIE Solutions, Spie)",
                "Installateurs spécialisés en climatisation et pompes à chaleur",
                "Services techniques d'établissements de santé et d'hôtellerie"
            ],
            "employerTypes": [
                "Installateurs CVC",
                "PME de climatisation",
                "Groupes de services à l'énergie"
            ],
            "evolution": "Technicien dépanneur itinérant ➔ Technicien metteur au point CVC ➔ Chef d'équipe génie climatique ➔ Chargé d'affaires climatisation",
            "pros": "Métier sous très forte demande mondiale portée par le réchauffement climatique, indépendance au volant de son véhicule atelier, haute technologie des équipements.",
            "cons": "Pics d'interventions intenses lors des premières vagues de canicule estivales, travail en toiture sous le soleil."
        },
        "gettingStarted": {
            "beginnerProject": "Nettoyer les filtres à poussière d'un climatiseur domestique et observer la différence de débit d'air.",
            "intermediateProject": "Tracer un cycle frigorifique basique de climatisation sur un diagramme enthalpique de Mollier.",
            "advancedProject": "Calculer le bilan thermique simplifié d'une pièce de 25 m² exposée au sud pour estimer la puissance frigorifique nécessaire (en Watts).",
            "portfolioIdeas": [
                "Fiche de mise en service d'un climatiseur réversible avec mesures de surchauffe",
                "Attestation de stage chez un installateur CVC"
            ]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des algorithmes prédictifs analysent en direct les pressions de gaz et la température extérieure pour anticiper les pannes avant l'arrêt de la climatisation.",
            "automatedTasks": [
                "Détection précoce automatique des micro-fuites de gaz",
                "Télé-réglage automatique des lois d'eau et de soufflage"
            ],
            "emergingSkills": [
                "Utilisation d'outils de diagnostic de pannes assistés par intelligence artificielle"
            ],
            "humanEdge": "La dextérité du brasage de cuivre en toiture et le diagnostic sensoriel face au bruit d'un compresseur."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal et dans toute l'Afrique de l'Ouest où les températures dépassent régulièrement 40°C, le technicien en climatisation est un professionnel providentiel : il maintient au frais les banques, les hôpitaux, les commerces et les ménages dakarois, et opère la conversion vers des climatiseurs Inverter à faible consommation électrique.",
            "localSectors": [
                "Entreprises de climatisation et froid de Dakar (CFAO Sénégal, Matforce, Clim Sénégal)",
                "Maintenance hôtelière et bancaire",
                "Boutiques et distributeurs d'appareils de climatisation"
            ],
            "remoteWork": "Non compatible (100% sur le terrain pour les poses et dépannages).",
            "entrepreneurship": "Création d'une entreprise de maintenance préventive et d'installation de climatiseurs solaires photovoltaïques autonomes."
        },
        "relatedJobSlugs": [
            "technicien-genie-climatique-frigoriste",
            "plombier-chauffagiste",
            "electricien-du-btp"
        ],
        "connectedFamilies": [
            "energie-renouvelable",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier Technicien en climatisation — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "Snefcca — Syndicat du froid et du conditionnement d'air",
                "url": "https://www.snefcca.com/",
                "source": "Snefcca"
            }
        ],
        "sources": [
            "L'Étudiant",
            "Snefcca",
            "IFFI"
        ],
        "interests": [
            "technique-outils",
            "construire-fabriquer"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Les climatiseurs modernes réversibles (pompes à chaleur air/air) produisent jusqu'à 4 fois plus d'énergie thermique qu'ils ne consomment d'électricité !",
            "pourquoi": "Parce qu'ils ne fabriquent pas de chaleur ou de fraîcheur : ils transfèrent les calories gratuites présentes naturellement dans l'air extérieur grâce aux changements d'état du gaz.",
            "a_retenir": "L'artisan du souffle d'air pur et de la fraîcheur indispensable en ville."
        }
    },
    {
        "id": "bim-manager",
        "slug": "bim-manager",
        "title": "BIM Manager / Coordinateur de la Maquette Numérique",
        "aliases": [
            "Responsable maquette numérique BTP",
            "BIM Coordinator",
            "Chef de projet construction numérique"
        ],
        "icon": "💻",
        "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "BIM & Bâtiment Intelligent",
        "domainId": "bim-construction-numerique",
        "subdomain": "Maquette numérique 3D, BIM & Données",
        "sectors": [
            "BTP",
            "Numérique",
            "Ingénierie"
        ],
        "sourceEtudiant": true,
        "isEmerging": true,
        "level": "Bac +5 (Ingénieur BTP, Architecte ou Master spécialisé BIM)",
        "salary": "🇫🇷 France : 3 200 - 5 600 € net/mois (~45 000 - 82 000 € brut/an, Source : L'Étudiant / APEC) • 🇸🇳 Sénégal : 600 000 - 2 000 000 FCFA / mois (Grands projets d'infrastructures et tours de Diamniadio)",
        "simpleDefinition": "Le BIM Manager est le chef d'orchestre numérique de la construction : il crée et gère le jumeau numérique 3D du bâtiment (le modèle BIM) en y intégrant toutes les informations des architectes, des ingénieurs structures et des électriciens pour détecter et corriger les erreurs avant le début du chantier réel.",
        "shortDescription": "Métier émergent d'élite mis en valeur par L'Étudiant, il fusionne les technologies du numérique et de la 3D avec les sciences de la construction.",
        "longDescription": "Comme décrit dans la fiche des nouveaux métiers de L'Étudiant, le BIM Manager (Building Information Modeling) a révolutionné la façon de bâtir. Au lieu d'empiler des milliers de plans papier en 2D souvent contradictoires, il fédère tous les intervenants autour d'une maquette 3D unique, vivante et paramétrique. Chaque mur, tuyau, fenêtre ou disjoncteur y est modélisé avec ses caractéristiques physiques, thermiques, son coût et sa date de livraison. Grâce à des outils de détection de clashs, il résout les conflits spatiaux sur ordinateur, évitant des retards et des surcoûts colossaux sur le chantier réel.",
        "mainObjective": "Coordonner la maquette numérique unique du projet, éliminer les conflits géométriques et optimiser la collaboration numérique de tous les corps d'état.",
        "companyRole": "Pilote stratégique de la transformation digitale et de la collaboration 3D du projet de construction.",
        "workEnvironment": [
            "💻 Agences d'architecture prestigieuses, grands bureaux d'ingénierie ou sièges de majors du BTP",
            "🖥️ Stations graphiques haute performance multi-écrans avec logiciels BIM collaboratifs",
            "👥 Animation de réunions de coordination BIM avec l'ensemble des bureaux d'études"
        ],
        "missions": [
            "Rédiger la convention BIM du projet fixant les protocoles, formats d'échanges (IFC) et niveaux de détail (LOD)",
            "Compiler et fédérer les maquettes numériques des architectes, bureaux d'études structures et fluides",
            "Organiser les sessions de détection automatique de collisions (clash detection) sous Navisworks ou Solibri",
            "Animer les revues de projet numériques hebdomadaires et assigner les réserves aux modeleurs",
            "Garantir la conformité de la maquette numérique finale livrée pour l'exploitation et la maintenance du bâtiment (BIM GEM)"
        ],
        "typicalDay": [
            {
                "time": "09:00",
                "title": "Revue hebdomadaire de coordination BIM",
                "desc": "Animation en visioconférence de la réunion de synthèse 3D avec l'architecte, l'ingénieur structure et le projeteur CVC."
            },
            {
                "time": "11:15",
                "title": "Lancement d'une détection d'interférences",
                "desc": "Analyse sous Solibri de 42 collisions détectées entre les gaines de désenfumage et les poutres métalliques du 3e étage."
            },
            {
                "time": "14:30",
                "title": "Contrôle qualité des fichiers IFC",
                "desc": "Vérification du renseignement des métadonnées thermiques et acoustiques sur chaque famille de portes et fenêtres."
            },
            {
                "time": "16:45",
                "title": "Mise à jour de la plateforme cloud BIM",
                "desc": "Dépôt de la maquette fédérée consolidée sur l'environnement de données commun (CDE Autodesk Construction Cloud)."
            }
        ],
        "skills": {
            "technical": [
                "Technologies et protocoles BIM (norme internationale ISO 19650, formats openBIM IFC, BCF)",
                "Maîtrise des logiciels de modélisation et de coordination (Autodesk Revit, Navisworks, Solibri, ArchiCAD)",
                "Compréhension approfondie des interfaces entre structure, enveloppe et réseaux techniques",
                "Gestion des environnements de données communs cloud (Autodesk BIM 360, Trimble Connect)"
            ],
            "human": [
                "Excellente pédagogie et capacité à faire collaborer des équipes hétérogènes",
                "Rigueur d'organisation et sens de la standardisation des données",
                "Esprit de médiation diplomatique pour trancher les litiges techniques"
            ],
            "tools": [
                "Autodesk Revit / ArchiCAD / Tekla",
                "Navisworks Manage / Solibri Model Checker",
                "Plateformes cloud CDE (Autodesk Construction Cloud, Dalux)",
                "Outils de script paramétrique (Dynamo, Python pour Revit)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Diplôme Bac +5",
                    "title": "Diplôme d'Ingénieur BTP ou Diplôme d'État d'Architecte",
                    "desc": "Le socle technique indispensable pour comprendre la logique constructive réelle."
                },
                {
                    "step": "Mastère Spécialisé BIM (Bac +6)",
                    "title": "Mastère Spécialisé BIM : Modélisation et Gestion des Données (École des Ponts / ESTP)",
                    "desc": "La formation d'excellence française de référence citée par L'Étudiant."
                },
                {
                    "step": "Certifications de Référence",
                    "title": "Certifications BuildingSMART International",
                    "desc": "Reconnaissance internationale des compétences de gestion openBIM."
                }
            ],
            "schools": [
                {
                    "name": "École des Ponts ParisTech / ESTP Paris (Mastère BIM) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "INSA Strasbourg / CESI École d'Ingénieurs — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) / Cursus BIM — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "École Polytechnique de Thiès (EPT) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification buildingSMART International Professional",
                "Autodesk Certified Professional Revit & Navisworks",
                "Certification RICS BIM Manager"
            ],
            "schoolSubjects": [
                "Management de l'information BIM",
                "Interopérabilité IFC et openBIM",
                "Droit de la propriété intellectuelle des maquettes",
                "Scripting Dynamo et automatisation"
            ]
        },
        "career": {
            "sectors": [
                "Grandes agences d'architecture internationales",
                "Sociétés d'ingénierie pluridisciplinaires (Egis, Setec, Systra, Artelia)",
                "Majors de la construction (Vinci, Bouygues, Eiffage)",
                "Sociétés de conseil en gestion de patrimoine immobilier tertiaire"
            ],
            "employerTypes": [
                "Bureaux d'ingénierie globale",
                "Agences d'architectes de renom",
                "Directions techniques de constructeurs"
            ],
            "evolution": "Modeleur BIM ➔ Coordinateur BIM ➔ BIM Manager ➔ Directeur du pôle digital et technologies (Chief Digital Officer) d'un groupe BTP",
            "pros": "Métier d'avenir ultra-prisé avec salaires très élevés, position de pivot technologique au cœur du projet, travail en 3D passionnant.",
            "cons": "Devoir convaincre certains intervenants traditionnels réticents au numérique, responsabilité lourde en cas de bug de coordination."
        },
        "gettingStarted": {
            "beginnerProject": "Télécharger un visualiseur IFC gratuit (BIMcollab Zoom) et naviguer dans la maquette 3D d'un projet public.",
            "intermediateProject": "Modéliser un bâtiment simple sous Revit et exporter le fichier au format neutre IFC en vérifiant que les données sont conservées.",
            "advancedProject": "Lancer une détection de clashs sous Navisworks entre une maquette structure et une maquette tuyauterie et éditer le rapport d'erreurs.",
            "portfolioIdeas": [
                "Convention BIM complète rédigée selon la norme ISO 19650",
                "Script Dynamo automatisant la numérotation des portes d'un étage"
            ]
        },
        "aiImpact": {
            "level": "Révolutionnaire",
            "summary": "L'IA analyse instantanément la maquette BIM pour proposer la disposition la plus économe en câbles ou détecter d'elle-même les infractions aux normes de sécurité incendie.",
            "automatedTasks": [
                "Résolution automatique des clashs simples par déplacement de tuyaux",
                "Génération automatique du jumeau numérique à partir des nuages de points LiDAR"
            ],
            "emergingSkills": [
                "Programmation de scripts d'intelligence artificielle appliqués aux maquettes IFC"
            ],
            "humanEdge": "La négociation humaine entre corps d'état pour décider qui doit faire un compromis de tracé spatial."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'exigence du BIM est désormais inscrite dans les cahiers des charges des projets d'infrastructures d'envergure internationale (nouvelle ville de Diamniadio, extensions du port de Ndayane, gares du TER), créant une quête permanente de BIM Managers bilingues capables de piloter des maquettes complexes.",
            "localSectors": [
                "Grands projets publics de Diamniadio (DGPU)",
                "Bureaux d'ingénierie dakarois partenaires de groupes internationaux",
                "Agences d'architecture de prestige"
            ],
            "remoteWork": "Très favorable (travail collaboratif sur plateformes cloud facilement réalisable à distance).",
            "entrepreneurship": "Création d'un cabinet de conseil en management BIM et d'assistance à maîtrise d'ouvrage numérique pour l'Afrique de l'Ouest."
        },
        "relatedJobSlugs": [
            "dessinateur-projeteur-en-batiment",
            "architecte",
            "ingenieur-genie-civil",
            "domoticien"
        ],
        "connectedFamilies": [
            "numerique-ia",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier BIM Manager — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics/bim-manager.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "buildingSMART France — Chapitre français de l'openBIM",
                "url": "https://www.buildingsmartfrance-mediaconstruct.fr/",
                "source": "buildingSMART"
            }
        ],
        "sources": [
            "L'Étudiant",
            "buildingSMART France",
            "École des Ponts"
        ],
        "interests": [
            "donnees-chiffres",
            "technique-outils",
            "coordonner-gerer"
        ],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Sur un chantier classique sans maquette numérique BIM, les erreurs de coordination non détectées génèrent en moyenne entre 5 et 10% de surcoûts imprévus lors des travaux !",
            "pourquoi": "Le BIM Manager élimine ces collisions virtuellement sur l'ordinateur des mois avant qu'une seule brique ne soit posée.",
            "a_retenir": "L'architecte de la maquette numérique qui bâtit d'abord dans le virtuel pour réussir dans le réel."
        }
    },
    {
        "id": "domoticien",
        "slug": "domoticien",
        "title": "Domoticien / Technicien en Bâtiment Intelligent",
        "aliases": [
            "Intégrateur domotique",
            "Technicien Smart Building & GTB",
            "Spécialiste de l'automatisation du bâtiment"
        ],
        "icon": "🏠",
        "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "BIM & Bâtiment Intelligent",
        "domainId": "bim-construction-numerique",
        "subdomain": "Domotique, Gestion Technique (GTB) & Smart Building",
        "sectors": [
            "BTP",
            "Numérique",
            "Énergie"
        ],
        "sourceEtudiant": true,
        "isEmerging": true,
        "level": "Bac +2 (BTS FED option C - Domotique et Bâtiments communicants) à Bac +3 (Licence Pro)",
        "salary": "🇫🇷 France : 2 200 - 3 800 € net/mois (~32 000 - 55 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 350 000 - 1 200 000 FCFA / mois (Villas connectées Almadies, immeubles intelligents Diamniadio)",
        "simpleDefinition": "Le domoticien programme et interconnecte tous les équipements électroniques d'un bâtiment (éclairage, volets roulants, chauffage, climatisation, caméras de sécurité, alarmes, serrures connectées) pour qu'ils fonctionnent de façon autonome, sécurisée et économe en énergie.",
        "shortDescription": "Magicien de la maison connectée cité parmi les métiers d'avenir par L'Étudiant, il fusionne électricité, informatique et automatismes pour créer des bâtiments intelligents.",
        "longDescription": "Comme mis en avant dans la sélection des métiers émergents de L'Étudiant, le domoticien ne pose pas seulement des fils : il paramètre l'intelligence du bâtiment. En résidentiel, il permet aux occupants de piloter toute leur maison d'un simple clic sur smartphone ou par commande vocale (scénarios 'départ', 'cinéma', 'nuit'). En tertiaire (Gestion Technique du Bâtiment - GTB), il déploie des capteurs de présence et de luminosité qui coupent automatiquement la climatisation et éteignent les lumières dans les bureaux vides, réduisant la facture énergétique de 20 à 30%.",
        "mainObjective": "Rendre les bâtiments communicants, confortables, sécurisés et sobres en énergie grâce à l'automatisation intelligente des équipements.",
        "companyRole": "Intégrateur des technologies connectées et garant de l'expérience utilisateur et de la performance énergétique automatisée.",
        "workEnvironment": [
            "🏠 Villas et appartements résidentiels haut de gamme connectés",
            "🏢 Immeubles tertiaires équipés de systèmes de Gestion Technique du Bâtiment (GTB/GTC)",
            "💻 Programmation sur ordinateur portable directement sur site ou à distance"
        ],
        "missions": [
            "Concevoir l'architecture domotique (choix des protocoles de communication : KNX, Zigbee, BACnet, Modbus)",
            "Câbler les bus de communication et raccorder les modules actionneurs et capteurs",
            "Programmer les scénarios d'usage personnalisés (gestion crépusculaire, délestage automatique d'énergie)",
            "Configurer les interfaces de pilotage sur tablettes murales, smartphones et assistants vocaux",
            "Assurer la cybersécurité des passerelles IoT connectées à Internet pour éviter tout piratage du bâtiment"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Programmation d'un serveur KNX",
                "desc": "Configuration sous le logiciel ETS des adresses de groupe pour piloter 40 circuits d'éclairage DALI à gradation automatique."
            },
            {
                "time": "11:00",
                "title": "Intégration d'un système de sécurité",
                "desc": "Interconnexion des caméras IP et des détecteurs d'intrusion avec le système d'ouverture des volets roulants en cas d'alerte."
            },
            {
                "time": "14:00",
                "title": "Essais de régulation thermique",
                "desc": "Test d'un scénario de fermeture automatique des brise-soleil orientables (BSO) dès que le capteur de façade dépasse 50 000 lux pour éviter la surchauffe."
            },
            {
                "time": "16:30",
                "title": "Formation du client particulier",
                "desc": "Démonstration personnalisée sur tablette tactile et paramétrage des accès familiaux sécurisés."
            }
        ],
        "skills": {
            "technical": [
                "Protocoles domotiques et immotiques standards (KNX mondial, Zigbee, Z-Wave, BACnet, DALI)",
                "Programmation sous logiciel ETS (Engineering Tool Software)",
                "Réseaux informatiques locaux (adressage IP, VLAN, routeurs, pare-feu, Wi-Fi 6)",
                "Électricité basse tension et régulation thermique multizone"
            ],
            "human": [
                "Écoute attentive pour comprendre le mode de vie réel des habitants",
                "Sens de la pédagogie pour rendre la technologie simple et intuitive à utiliser",
                "Curiosité technologique permanente face aux innovations de l'IoT"
            ],
            "tools": [
                "Logiciel de programmation ETS (standard KNX mondial)",
                "Contrôleurs et serveurs domotiques (Schneider, Legrand, Somfy, Crestron)",
                "Analyseurs de trames réseaux (Wireshark) et testeurs de câblage RJ45",
                "Multimètres électroniques et outillage d'électricien intégrateur"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Bac Pro (3 ans)",
                    "title": "Bac Pro MELEC (option environnements connectés)",
                    "desc": "Bases pratiques en électricité et raccordement de capteurs communicants."
                },
                {
                    "step": "BTS (Bac +2)",
                    "title": "BTS Fluides Énergies Domotique (BTS FED option C - Domotique et Bâtiments communicants)",
                    "desc": "Le diplôme d'État de référence cité par L'Étudiant pour devenir intégrateur domoticien expert."
                },
                {
                    "step": "Licence Pro (Bac +3)",
                    "title": "Licence Pro Bâtiments Intelligents et Efficacité Énergétique",
                    "desc": "Spécialisation dans les smart grids, la GTB tertiaire et la cybersécurité des bâtiments."
                }
            ],
            "schools": [
                {
                    "name": "Lycées préparant le BTS FED option Domotique — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "IUT et Universités proposant les Licences Pro Smart Building — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centre de Formation Professionnelle et Technique (CFPT Sénégal-Japon) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) / Télécoms et Réseaux — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification KNX Partner International",
                "Certification Intégrateur Smarthome certifié",
                "Certification Cybersécurité IoT Bâtiment"
            ],
            "schoolSubjects": [
                "Protocoles de bus domotiques (KNX)",
                "Réseaux informatiques et IP",
                "Régulation thermique et gestion d'énergie",
                "Électrotechnique du bâtiment"
            ]
        },
        "career": {
            "sectors": [
                "Entreprises spécialisées dans l'intégration domotique et audiovisuelle haut de gamme",
                "Grands groupes d'installations électriques et d'efficacité énergétique (Schneider, Spie, Legrand)",
                "Promoteurs immobiliers de résidences connectées",
                "Bureaux d'études en ingénierie Smart Building"
            ],
            "employerTypes": [
                "Intégrateurs domotiques indépendants",
                "Entreprises d'électricité tertiaire",
                "Grands équipementiers du bâtiment"
            ],
            "evolution": "Technicien domotique junior ➔ Intégrateur Smart Building confirmé ➔ Chef de projet GTB tertiaire ➔ Responsable pôle Bâtiment Intelligent",
            "pros": "Métier passionnant à la frontière de l'électronique et du confort, forte composante innovante, demande en plein essor portée par la sobriété énergétique.",
            "cons": "Évolution très rapide des technologies nécessitant une veille permanente, gestion des pannes logicielles parfois complexes à diagnostiquer."
        },
        "gettingStarted": {
            "beginnerProject": "Installer une ampoule connectée et une prise intelligente chez soi et créer un scénario d'allumage automatique au coucher du soleil.",
            "intermediateProject": "Configurer une box domotique open-source (Home Assistant) sur un mini-ordinateur Raspberry Pi avec capteurs de température Zigbee.",
            "advancedProject": "Télécharger la version de démonstration du logiciel ETS et programmer une installation virtuelle KNX de 3 pièces.",
            "portfolioIdeas": [
                "Dossier technique de programmation KNX d'une maison individuelle",
                "Interface graphique de pilotage d'appartement sur tablette"
            ]
        },
        "aiImpact": {
            "level": "Révolutionnaire",
            "summary": "L'IA apprend les habitudes réelles de vie des résidents pour anticiper leurs besoins sans qu'ils aient besoin de toucher à un interrupteur, optimisant l'énergie à la minute près.",
            "automatedTasks": [
                "Apprentissage automatique des rythmes de vie des usagers",
                "Ajustement prédictif de la climatisation selon la météo du lendemain"
            ],
            "emergingSkills": [
                "Intégration d'agents d'IA vocaux et de modèles de machine learning dans la gestion du bâtiment"
            ],
            "humanEdge": "La protection de la vie privée des habitants et la conception d'interfaces simples que même un enfant ou une personne âgée peut utiliser."
        },
        "africaContext": {
            "senegalInsight": "À Dakar, la domotique connaît un succès fulgurant dans les nouvelles villas de grand standing des Almadies, de Fann Résidence et de Ngor, où les propriétaires recherchent la sécurité connectée (caméras intelligentes, alerte intrusion sur smartphone) et la gestion optimisée de la climatisation pour alléger les factures de la Senelec.",
            "localSectors": [
                "Entreprises d'intégration domotique de Dakar",
                "Promoteurs de résidences de standing",
                "Boutiques d'équipements connectés et de sécurité"
            ],
            "remoteWork": "Hybride (programmation et supervision logicielle à distance / raccordements physiques sur le chantier).",
            "entrepreneurship": "Création d'une entreprise d'intégration domotique et d'efficacité énergétique automatisée pour les résidences et bureaux de Dakar."
        },
        "relatedJobSlugs": [
            "electricien-du-btp",
            "bim-manager",
            "technicien-climatisation"
        ],
        "connectedFamilies": [
            "numerique-ia",
            "energie-renouvelable",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Les métiers émergents du BTP : Domoticien — L'Étudiant",
                "url": "https://www.letudiant.fr/futurs-metiers/secteur-batiment-et-travaux-publics.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "Fédération Française de Domotique (FFDomotique)",
                "url": "https://www.ffdomotique.org/",
                "source": "FFDomotique"
            }
        ],
        "sources": [
            "L'Étudiant",
            "FFDomotique",
            "KNX Association"
        ],
        "interests": [
            "technique-outils",
            "donnees-chiffres",
            "construire-fabriquer"
        ],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Un bâtiment tertiaire intelligent équipé d'une Gestion Technique du Bâtiment (GTB) bien programmée réduit sa consommation d'énergie de près de 30% sans aucune perte de confort pour les employés !",
            "pourquoi": "En éteignant automatiquement le chauffage, la climatisation et les lumières dès qu'une salle de réunion est inoccupée.",
            "a_retenir": "L'ingénieur du bâtiment vivant qui insuffle de l'intelligence dans chaque mur."
        }
    },
    {
        "id": "ingenieur-eco-conception-btp",
        "slug": "ingenieur-eco-conception-btp",
        "title": "Ingénieur Éco-Conception & Bâtiment Durable",
        "aliases": [
            "Ingénieur construction durable",
            "Consultant bâtiment bas-carbone",
            "Ingénieur analyse de cycle de vie BTP"
        ],
        "icon": "🌱",
        "image": "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Construction Durable, Éco-Conception & Affaires",
        "domainId": "construction-durable-performance",
        "subdomain": "Éco-conception, Bâtiment bas-carbone & ACV",
        "sectors": [
            "BTP",
            "Environnement",
            "Ingénierie"
        ],
        "sourceEtudiant": true,
        "isEmerging": true,
        "level": "Bac +5 (Ingénieur BTP spécialité environnement ou Master Bâtiment Durable)",
        "salary": "🇫🇷 France : 3 000 - 5 200 € net/mois (~42 000 - 75 000 € brut/an, Source : L'Étudiant / APEC) • 🇸🇳 Sénégal : 550 000 - 1 800 000 FCFA / mois (Bureaux d'études environnement, éco-quartiers Diamniadio)",
        "simpleDefinition": "L'ingénieur éco-conception calcule et réduit l'impact écologique d'un bâtiment tout au long de sa vie (de l'extraction des matériaux jusqu'à sa démolition future) en privilégiant les matériaux biosourcés (bois, paille, chanvre, terre crue), le recyclage et la neutralité carbone.",
        "shortDescription": "Pionnier de la révolution écologique du BTP identifié comme métier émergent par L'Étudiant, il conçoit les édifices neutres en carbone de l'après-pétrole.",
        "longDescription": "Comme mis en avant dans le dossier des nouveaux métiers de L'Étudiant, l'ingénieur éco-conception est l'acteur clé de l'application des nouvelles réglementations environnementales (comme la RE2020 en France). Réalisant des Analyses de Cycle de Vie (ACV) approfondies, il quantifie le poids carbone de chaque matériau (ciment, isolants, vitrages), préconise le réemploi de matériaux issus de déconstructions et conçoit des architectures bioclimatiques favorisant la lumière et la ventilation naturelles. Il accompagne les projets pour l'obtention des labels écologiques internationaux les plus exigeants (HQE, BREEAM, LEED).",
        "mainObjective": "Minimiser l'empreinte carbone et environnementale globale des bâtiments neufs et rénovés sans compromettre leur durabilité ni leur confort.",
        "companyRole": "Pionnier stratégique de la décarbonation et garant de la conformité écologique et des labels environnementaux.",
        "workEnvironment": [
            "🌿 Bureaux d'études techniques en environnement et éco-conception",
            "🏛️ Collaboration étroite avec les agences d'architecture lors des concours de maîtrise d'œuvre",
            "🏗️ Visites de chantiers pour contrôler la traçabilité des matériaux écologiques et le tri des déchets"
        ],
        "missions": [
            "Réaliser l'Analyse de Cycle de Vie (ACV) dynamique du bâtiment selon la réglementation RE2020",
            "Préconiser des matériaux biosourcés, géosourcés (terre crue, pierre) ou issus du réemploi circulaire",
            "Concevoir des stratégies bioclimatiques passives (protection solaire d'été, inertie thermique)",
            "Monter et piloter les dossiers de certification environnementale (HQE Bâtiment Durable, BREEAM, LEED)",
            "Sensibiliser les équipes de maîtrise d'œuvre et les conducteurs de travaux aux éco-pratiques de chantier vert"
        ],
        "typicalDay": [
            {
                "time": "08:45",
                "title": "Calcul d'Analyse de Cycle de Vie (ACV)",
                "desc": "Modélisation sous le logiciel One Click LCA du bilan carbone d'un lycée de 6 000 m² : comparaison d'une ossature bois vs béton."
            },
            {
                "time": "11:00",
                "title": "Revue bioclimatique avec l'architecte",
                "desc": "Proposition de brise-soleil horizontaux en bois local et ventilation naturelle traversante pour éviter l'installation de climatiseurs énergivores."
            },
            {
                "time": "14:15",
                "title": "Visite d'une plateforme de réemploi",
                "desc": "Sélection d'un lot de 200 portes intérieures et de faux-planchers métalliques démontés sur un chantier de curage pour être réutilisés."
            },
            {
                "time": "16:30",
                "title": "Audit d'un chantier à faibles nuisances",
                "desc": "Contrôle du taux de valorisation des déchets de chantier (atteinte de 85% de recyclage des gravats) pour le label BREEAM."
            }
        ],
        "skills": {
            "technical": [
                "Méthodologie de l'Analyse de Cycle de Vie (ACV) et réglementation environnementale RE2020",
                "Connaissance approfondie des matériaux biosourcés (bois, ouate, chanvre, paille, terre crue)",
                "Référentiels de certification environnementale (HQE, BREEAM, LEED, BBCA bas-carbone)",
                "Thermique du bâtiment, ventilation naturelle et conception bioclimatique passive"
            ],
            "human": [
                "Forte conviction écologique et sens aigu de l'éthique environnementale",
                "Capacité de persuasion et diplomatie pour faire évoluer les pratiques traditionnelles",
                "Rigueur analytique dans le traitement de milliers de données de fiches FDES"
            ],
            "tools": [
                "Logiciels d'ACV bâtiment (One Click LCA, Pleiades ACV, Elodie)",
                "Bases de données environnementales de référence (base INIES)",
                "Simulateurs thermiques dynamiques (Pleiades, EnergyPlus)",
                "Plateformes de matériaux de réemploi (Cycle Up, Backacia)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Classes Préparatoires / BUT (Bac +3)",
                    "title": "CPGE Scientifique ou BUT Génie Civil Construction Durable",
                    "desc": "Bases solides en sciences de la matière et technologie du bâtiment."
                },
                {
                    "step": "Diplôme d'Ingénieur (Bac +5)",
                    "title": "Ingénieur BTP spécialisé Environnement / Éco-matériaux (INSA, Mines, ESTP)",
                    "desc": "Formation de référence citée par L'Étudiant combinant génie civil et transition écologique."
                },
                {
                    "step": "Master Spécialisé Bâtiment Durable (Bac +6)",
                    "title": "Mastère Spécialisé Éco-conception et Management Environnemental",
                    "desc": "Spécialisation de haut niveau pour piloter la stratégie carbone de grands groupes."
                }
            ],
            "schools": [
                {
                    "name": "INSA Lyon / Mines Paris-PSL / Centrale Lyon — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Polytech Nantes (Génie Civil et Éco-matériaux) / ESTP Paris — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) / Environnement et BTP — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "École Polytechnique de Thiès (EPT) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Assesseur Certifié BREEAM / LEED AP",
                "Référent Reconnu HQE Bâtiment Durable",
                "Auditeur Carbone Certifié Bilan Carbone / BBCA"
            ],
            "schoolSubjects": [
                "Analyse de cycle de vie (ACV)",
                "Écologie industrielle et économie circulaire",
                "Physique du bâtiment et thermique",
                "Éco-matériaux et chimie verte"
            ]
        },
        "career": {
            "sectors": [
                "Bureaux d'études spécialisés en ingénierie environnementale du bâtiment",
                "Grandes agences d'architecture et de paysage",
                "Majors de la construction (pôles R&D et développement durable)",
                "Grandes foncières immobilières et promoteurs engagés"
            ],
            "employerTypes": [
                "Cabinets d'ingénierie environnementale",
                "Grands constructeurs BTP",
                "Bureaux de conseil RSE"
            ],
            "evolution": "Ingénieur éco-conception junior ➔ Chef de projet bâtiment durable ➔ Directeur du pôle environnement d'une société d'ingénierie ➔ Directeur RSE & Transition écologique d'un groupe",
            "pros": "Métier porteur de sens absolu, rôle pionnier dans la décarbonation du monde bâti, profil extrêmement recherché par le marché.",
            "cons": "Devoir parfois lutter contre la tentation du 'greenwashing', arbitrage délicat entre surcoûts des matériaux écologiques et budget du client."
        },
        "gettingStarted": {
            "beginnerProject": "Consulter la base publique INIES et comparer l'empreinte carbone d'un isolant en laine de verre vs laine de bois.",
            "intermediateProject": "Calculer l'énergie grise nécessaire pour fabriquer 1 tonne de ciment classique comparé à 1 tonne de brique de terre crue.",
            "advancedProject": "Réaliser l'Analyse de Cycle de Vie simplifiée d'une maison individuelle sous un logiciel libre d'ACV.",
            "portfolioIdeas": [
                "Bilan carbone complet d'un bâtiment tertiaire sous format RE2020",
                "Guide de réemploi de matériaux rédigé pour un chantier"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA analyse instantanément la maquette BIM pour proposer des matériaux alternatifs ayant la même résistance mais divisant l'empreinte carbone par deux.",
            "automatedTasks": [
                "Calcul instantané du score carbone à chaque modification de plan",
                "Identification automatique des matériaux disponibles sur les plateformes de réemploi"
            ],
            "emergingSkills": [
                "Utilisation d'outils d'optimisation générative bas-carbone sous BIM"
            ],
            "humanEdge": "La vision holistique du vivant, la créativité bioclimatique et la sensibilisation éthique des maîtres d'ouvrage."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'éco-conception est une opportunité historique : des pionniers de l'architecture durable redécouvrent les matériaux traditionnels locaux comme le typha (plante envahissante du fleuve Sénégal transformée en isolant thermique exceptionnel) et la brique de terre compressée (BTC) pour construire des maisons fraîches sans climatisation.",
            "localSectors": [
                "Projets d'éco-construction sahélienne (Programme Typha, Éléments Terre)",
                "Bureaux d'études d'impact environnemental de Dakar",
                "Éco-quartiers et cités universitaires écologiques"
            ],
            "remoteWork": "Très favorable (calculs d'ACV et modélisations environnementales en télétravail).",
            "entrepreneurship": "Création d'une entreprise de production et commercialisation de matériaux de construction biosourcés locaux (isolants en typha, briques de terre compressée)."
        },
        "relatedJobSlugs": [
            "energy-manager-auditeur-energetique",
            "architecte",
            "technicien-etudes-thermiques-batiment"
        ],
        "connectedFamilies": [
            "environnement-ecologie",
            "sciences-biotech",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Les métiers de l'éco-construction — L'Étudiant",
                "url": "https://www.letudiant.fr/futurs-metiers/secteur-batiment-et-travaux-publics.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "Alliance HQE — Bâtiment Durable",
                "url": "https://www.hqegbc.org/",
                "source": "Alliance HQE"
            }
        ],
        "sources": [
            "L'Étudiant",
            "ADEME",
            "Alliance HQE"
        ],
        "interests": [
            "nature-environnement",
            "sciences-recherche",
            "concevoir-creer"
        ],
        "saviezVous": {
            "statut": "metier_d_avenir",
            "fait": "Le secteur de la construction et des bâtiments représente à lui seul près de 40% des émissions mondiales de gaz à effet de serre et consomme plus de 50% des matières premières extraites sur Terre !",
            "pourquoi": "C'est pour cela que l'ingénieur éco-conception est l'un des métiers les plus cruciaux du XXIe siècle pour sauver le climat mondial.",
            "a_retenir": "L'ingénieur de l'après-pétrole qui réconcilie l'art de bâtir avec la planète."
        }
    },
    {
        "id": "technicien-diagnostics-immobiliers",
        "slug": "technicien-diagnostics-immobiliers",
        "title": "Technicien en Diagnostics Immobiliers",
        "aliases": [
            "Diagnostiqueur immobilier certifié",
            "Auditeur technique immobilier",
            "Diagnostiqueur DPE et amiante"
        ],
        "icon": "🧪",
        "image": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80",
        "familyId": "btp-architecture",
        "familyName": "BTP, Architecture & Construction",
        "domain": "Construction Durable, Éco-Conception & Affaires",
        "domainId": "construction-durable-performance",
        "subdomain": "Inspection technique, DPE & Sécurité",
        "sectors": [
            "BTP",
            "Immobilier",
            "Contrôle"
        ],
        "sourceEtudiant": true,
        "isEmerging": false,
        "level": "Bac +2 (BTS Bâtiment, Professions Immobilières) + Certifications d'État obligatoires",
        "salary": "🇫🇷 France : 2 200 - 3 800 € net/mois (~32 000 - 55 000 € brut/an, Source : L'Étudiant) • 🇸🇳 Sénégal : 350 000 - 1 100 000 FCFA / mois (Cabinets d'expertise immobilière, contrôle technique de vétusté à Dakar)",
        "simpleDefinition": "Le diagnostiqueur immobilier est le médecin légiste du bâtiment : il inspecte un logement ou un immeuble de fond en comble avant sa vente ou sa location pour détecter l'amiante, le plomb, les termites, vérifier la conformité du gaz et de l'électricité et calculer sa note énergétique (le DPE).",
        "shortDescription": "Expert réglementaire et sanitaire répertorié par L'Étudiant, il protège la santé des occupants et informe en toute impartialité les acheteurs et locataires.",
        "longDescription": "Comme décrit dans la présentation des métiers de L'Étudiant, le technicien en diagnostics immobiliers intervient obligatoirement lors de toute transaction immobilière. Armé de son télémètre laser, de son détecteur de plomb à fluorescence X et de son logiciel réglementaire, il passe au crible chaque recoin du bien. Il calcule la surface Carrez exacte, évalue l'isolation pour attribuer la fameuse étiquette énergétique (de A à G du Diagnostic de Performance Énergétique - DPE), traque les matériaux amiantés et teste la sécurité du tableau électrique et des tuyaux de gaz pour remettre le Dossier de Diagnostic Technique (DDT).",
        "mainObjective": "Contrôler la sécurité sanitaire, la conformité réglementaire et la performance énergétique des bâtiments pour garantir la transparence des transactions.",
        "companyRole": "Expert indépendant et garant juridique de la sécurité et de la transparence de l'état du bâtiment.",
        "workEnvironment": [
            "🏠 Visites quotidiennes de maisons, appartements anciens et immeubles récents",
            "🏢 Locaux commerciaux, hangars industriels et copropriétés",
            "💻 Rédaction des rapports réglementaires et calculs DPE au bureau ou en télétravail"
        ],
        "missions": [
            "Réaliser le Diagnostic de Performance Énergétique (DPE) en calculant les déperditions thermiques",
            "Rechercher la présence d'amiante dans les calorifugeages, faux-plafonds et toitures en fibrociment",
            "Détecter les peintures anciennes au plomb dans les logements construits avant 1949 (CREP)",
            "Contrôler la sécurité des installations intérieures d'électricité et de gaz de plus de 15 ans",
            "Mesurer la superficie privative exacte de la loi Carrez pour les appartements en copropriété"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Diagnostic complet d'une maison ancienne",
                "desc": "Visite technique de 3 heures : métré laser des pièces, relevé de l'épaisseur d'isolant dans les combles et vérification du disjoncteur différentiel."
            },
            {
                "time": "11:45",
                "title": "Mesure du plomb au pistolet à rayons X",
                "desc": "Analyse à fluorescence X des peintures des boiseries pour détecter le plomb sans abîmer les murs."
            },
            {
                "time": "14:00",
                "title": "Saisie des données DPE",
                "desc": "Entrée des caractéristiques du vitrage, de la chaudière et de l'orientation dans le logiciel certifié par l'ADEME pour générer l'étiquette DPE (classe D)."
            },
            {
                "time": "16:30",
                "title": "Envoi du Dossier de Diagnostic Technique",
                "desc": "Signature électronique du rapport officiel de 40 pages et transmission immédiate au notaire et au propriétaire."
            }
        ],
        "skills": {
            "technical": [
                "Pathologies du bâtiment, matériaux anciens et isolation thermique",
                "Réglementation stricte des diagnostics obligatoires du Code de la construction",
                "Métrologie de précision (analyseur de plomb à rayons X, télémètre laser)",
                "Méthode de calcul 3CL du Diagnostic de Performance Énergétique (DPE)"
            ],
            "human": [
                "Impartialité et indépendance totale vis-à-vis des vendeurs et agences immobilières",
                "Rigueur d'observation et sens du détail pour ne rien laisser passer",
                "Pédagogie pour expliquer les résultats techniques sans affoler le client"
            ],
            "tools": [
                "Analyseurs de plomb à fluorescence X portables (fondés sur source scellée)",
                "Télémètres laser professionnels avec liaison Bluetooth",
                "Testeurs de prises électriques et contrôleurs de disjoncteurs",
                "Logiciels de diagnostics immobiliers certifiés ADEME (Liciel, Analysimmo)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Bac +2 (BTS)",
                    "title": "BTS Bâtiment, Professions Immobilières ou BUT Génie Civil",
                    "desc": "Bases de la construction et du droit immobilier."
                },
                {
                    "step": "Formation Diagnostiqueur (3 à 6 mois)",
                    "title": "Formation certifiante aux 6 diagnostics réglementaires",
                    "desc": "Apprentissage des protocoles stricts de mesure et de sécurité."
                },
                {
                    "step": "Certifications de Compétences",
                    "title": "Certifications individuelles avec mention délivrées par organisme accrédité COFRAC",
                    "desc": "Examen théorique et pratique obligatoire renouvelé tous les 7 ans pour chaque domaine (DPE, Amiante, Plomb, etc.)."
                }
            ],
            "schools": [
                {
                    "name": "Centres de formation spécialisés en diagnostics immobiliers (AFDI, ITGA, I.F.D.B) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Lycées préparant les BTS BTP et immobilier — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Instituts de formation en expertise immobilière de Dakar — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP Dakar) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certifications COFRAC (DPE mention, Amiante mention, Plomb, Gaz, Électricité, Termites)",
                "Attestation PCR (Personne Compétente en Radioprotection pour pistolet plomb)",
                "Habilitation électrique B0/H0"
            ],
            "schoolSubjects": [
                "Réglementation du Code de la construction",
                "Thermique du bâtiment et DPE",
                "Pathologie des matériaux et amiante",
                "Sécurité des installations gaz et électricité"
            ]
        },
        "career": {
            "sectors": [
                "Cabinets indépendants de diagnostics immobiliers",
                "Réseaux nationaux franchisés d'expertise immobilière (Diagamter, Exim, Agenda Diagnostics)",
                "Bureaux de contrôle technique et d'inspection (Bureau Veritas, Apave, Dekra)"
            ],
            "employerTypes": [
                "Cabinets de diagnostics",
                "Réseaux de diagnostiqueurs",
                "Exercice libéral indépendant"
            ],
            "evolution": "Diagnostiqueur salarié ➔ Diagnostiqueur expert avec mention tertiaire ➔ Responsable d'agence de diagnostics ➔ Créateur de son cabinet franchisé",
            "pros": "Métier très autonome avec voiture de tournée, équilibre entre visites sur le terrain et travail sur ordinateur, activité garantie par la loi à chaque vente.",
            "cons": "Évolution perpétuelle des textes de loi, responsabilité juridique importante en cas d'amiante non décelé."
        },
        "gettingStarted": {
            "beginnerProject": "Regarder attentivement l'étiquette DPE (de A à G) sur une annonce immobilière en vitrine d'agence et comprendre ce qu'elle signifie.",
            "intermediateProject": "Mesurer au télémètre laser la surface habitable d'une pièce en déduisant les placards et cloisons.",
            "advancedProject": "Identifier les 5 points de sécurité critiques d'un vieux tableau électrique résidentiel (différentiel, terre, calibres).",
            "portfolioIdeas": [
                "Rapport blanc d'inspection de logement réalisé sous logiciel d'essai",
                "Attestation de formation aux règles de sécurité électrique"
            ]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA analyse les photos de l'installation pour pré-remplir les formulaires de diagnostics et vérifier automatiquement la cohérence des relevés de surfaces.",
            "automatedTasks": [
                "Reconnaissance d'équipements sur photos pour auto-complétion du DPE",
                "Calcul automatique de la surface Carrez à partir d'un scan 3D de smartphone"
            ],
            "emergingSkills": [
                "Utilisation d'applications de photogrammétrie sur smartphone pour numériser le bien en une seule visite"
            ],
            "humanEdge": "La responsabilité pénale de la signature et le regard d'expert pour déceler une fissure structurelle suspecte."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'expertise technique des bâtiments prend une importance vitale avec la lutte contre la vétusté et les effondrements d'immeubles anciens à Dakar (Médina, Plateau) : les experts en diagnostic inspectent la corrosion des fers à béton par l'air salin et vérifient la solidité des structures avant réhabilitation.",
            "localSectors": [
                "Cabinets d'expertise immobilière et foncière de Dakar",
                "Ordre des Experts et Évaluateurs Immobiliers du Sénégal (ONEEAS)",
                "Bureaux de contrôle technique (Bureau Veritas Sénégal, Socotec)"
            ],
            "remoteWork": "Hybride (visites sur le terrain le matin puis rédaction des rapports en télétravail l'après-midi).",
            "entrepreneurship": "Création d'un cabinet d'audit technique et de diagnostic de vétusté des immeubles résidentiels et commerciaux à Dakar."
        },
        "relatedJobSlugs": [
            "energy-manager-auditeur-energetique",
            "ingenieur-eco-conception-btp",
            "technicien-etudes-thermiques-batiment"
        ],
        "connectedFamilies": [
            "immobilier-habitat",
            "droit-management",
            "btp-architecture"
        ],
        "resources": [
            {
                "type": "fiche",
                "title": "Fiche métier Diagnostiqueur immobilier — L'Étudiant",
                "url": "https://www.letudiant.fr/metiers/secteur/batiment-et-travaux-publics.html",
                "source": "L'Étudiant"
            },
            {
                "type": "portail",
                "title": "Fidi — Fédération Interprofessionnelle du Diagnostic Immobilier",
                "url": "https://www.fidi.fr/",
                "source": "FIDI"
            }
        ],
        "sources": [
            "L'Étudiant",
            "FIDI",
            "ADEME"
        ],
        "interests": [
            "sciences-recherche",
            "donnees-chiffres",
            "technique-outils"
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En France, depuis 2023, les logements classés 'G' (les fameuses passoires thermiques au DPE) sont progressivement interdits à la location pour forcer les propriétaires à réaliser des travaux d'isolation !",
            "pourquoi": "Cette mesure protège les locataires contre des factures d'énergie exorbitantes et accélère la rénovation écologique nationale.",
            "a_retenir": "Le contrôleur assermenté qui protège notre santé et ausculte les bâtiments."
        }
    }
];

  return {
    getDomains: function () {
      return JSON.parse(JSON.stringify(BTP_DOMAINS));
    },
    getJobs: function () {
      return JSON.parse(JSON.stringify(BTP_JOBS));
    },
    getJobById: function (id) {
      return BTP_JOBS.find(function (j) { return j.id === id; }) || null;
    },
    getJobBySlug: function (slug) {
      return BTP_JOBS.find(function (j) { return j.slug === slug; }) || null;
    },
    getJobsByDomain: function (domainId) {
      return BTP_JOBS.filter(function (j) { return j.domainId === domainId; });
    }
  };
});

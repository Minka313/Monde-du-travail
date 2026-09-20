/**
 * OrientationLlshData
 * Module de données officiel pour la grande famille :
 * 📚 LETTRES, LANGUES & SCIENCES HUMAINES
 * Référentiel documentaire : Imagine ton Futur (https://www.imaginetonfutur.com/les-metiers/domaine/lettres-langues-sciences-humaines.html)
 *
 * 20 Domaines d'Excellence • 32 Fiches Métiers Haute Profondeur
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    var exp = factory();
    module.exports = exp;
    if (typeof global !== 'undefined') {
      global.OrientationLlshData = exp;
    }
  } else {
    root.OrientationLlshData = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var LLSH_DOMAINS = [
    {
        "id": "lettres-litterature",
        "name": "Lettres & Littérature",
        "icon": "✍️",
        "description": "Littérature, langue française, création romanesque, analyse de textes, critique littéraire et révision stylistique.",
        "subdomains": [
            "Création littéraire & Écriture",
            "Édition & Révision de textes",
            "Langue française & Stylistique",
            "Analyse textuelle & Critique littéraire",
            "Recherche littéraire & Poétique"
        ]
    },
    {
        "id": "langues-etrangeres",
        "name": "Langues Étrangères",
        "icon": "🌍",
        "description": "Langues vivantes régionales et internationales, didactique des langues, FLE (Français Langue Étrangère) et communication interculturelle.",
        "subdomains": [
            "Didactique des langues & FLE",
            "Langues européennes & internationales",
            "Langues africaines & orientales",
            "Communication & Négociation interculturelle"
        ]
    },
    {
        "id": "traduction-interpretation",
        "name": "Traduction & Interprétation",
        "icon": "🗣️",
        "description": "Traduction littéraire, juridique et assermentée, interprétation simultanée et consécutive de conférences mondiales.",
        "subdomains": [
            "Traduction générale & spécialisée",
            "Interprétation de conférence & diplomatique",
            "Traduction assermentée & juridique",
            "Traduction audiovisuelle & Sous-titrage"
        ]
    },
    {
        "id": "traduction-technique",
        "name": "Traduction Technique",
        "icon": "🧰",
        "description": "Traduction de documentation industrielle, notices médicales et pharmaceutiques, brevets d'invention et localisation logicielle.",
        "subdomains": [
            "Documentation technique & industrielle",
            "Traduction médicale & pharmaceutique",
            "Brevets & Propriété industrielle",
            "Localisation de logiciels & Jeux vidéo"
        ]
    },
    {
        "id": "linguistique-tal",
        "name": "Linguistique & Traitement du Langage",
        "icon": "📜",
        "description": "Linguistique théorique et appliquée, phonétique, morphosyntaxe, ingénierie TAL (NLP) et constitution d'ontologies.",
        "subdomains": [
            "Traitement automatique des langues (TAL / NLP)",
            "Terminologie, Lexicographie & Normalisation",
            "Phonétique, Phonologie & Prosodie",
            "Sociolinguistique & Dialectologie"
        ]
    },
    {
        "id": "histoire-patrimoine",
        "name": "Histoire & Patrimoine",
        "icon": "🏛️",
        "description": "Histoire des civilisations, recherche archivistique, records management, valorisation des mémoires et conservation du patrimoine.",
        "subdomains": [
            "Recherche historique & Valorisation mémorielle",
            "Archives, Conservation & Records Management",
            "Conservation & Valorisation patrimoniale",
            "Histoire contemporaine & Relations internationales"
        ]
    },
    {
        "id": "archeologie",
        "name": "Archéologie",
        "icon": "🏺",
        "description": "Fouilles préventives et programmées, archéométrie, paléontologie, étude de la culture matérielle et des origines humaines.",
        "subdomains": [
            "Archéologie de terrain & préventive",
            "Paléontologie & Évolution des espèces",
            "Archéométrie & Datation physique",
            "Conservation des vestiges archéologiques"
        ]
    },
    {
        "id": "histoire-art",
        "name": "Histoire de l'Art",
        "icon": "🎨",
        "description": "Arts visuels, peinture, sculpture, muséologie, expertise d'authenticité des œuvres et marché des enchères publiques.",
        "subdomains": [
            "Arts visuels, Expertise & Muséologie",
            "Direction de musée & Muséographie",
            "Marché de l'art, Enchères & Expertise légale",
            "Histoire de l'art contemporain & Avant-gardes"
        ]
    },
    {
        "id": "philosophie-ethique",
        "name": "Philosophie & Éthique Appliquée",
        "icon": "🧠",
        "description": "Philosophie générale, épistémologie, éthique biomédicale, philosophie politique et gouvernance éthique des technologies d'IA.",
        "subdomains": [
            "Philosophie, Éthique appliquée & Bioéthique",
            "Épistémologie & Philosophie des sciences",
            "Philosophie politique & Morale",
            "Éthique de l'IA & des Technologies"
        ]
    },
    {
        "id": "sociologie-etudes",
        "name": "Sociologie & Enquêtes Sociales",
        "icon": "👥",
        "description": "Sociologie des organisations et du travail, études quantitatives et qualitatives, ethnologie, anthropologie et dynamique des populations.",
        "subdomains": [
            "Études sociologiques, Enquêtes & Analyses de population",
            "Ethnologie, Anthropologie culturelle & Récits oraux",
            "Sociologie urbaine & Développement local",
            "Sociologie du travail & Climat social"
        ]
    },
    {
        "id": "psychologie",
        "name": "Psychologie & Accompagnement",
        "icon": "🧠",
        "description": "Psychologie clinique et psychopathologie, psychologie du travail et ergonomie, psychologie du développement et orientation scolaire.",
        "subdomains": [
            "Psychologie clinique & Psychopathologie",
            "Psychologie du travail, Santé mentale & Ergonomie",
            "Orientation scolaire, Bilans & Psychologie du développement",
            "Neuropsychologie & Sciences cognitives"
        ]
    },
    {
        "id": "geographie-amenagement",
        "name": "Géographie & Aménagement",
        "icon": "🌍",
        "description": "Cartographie thématique, Systèmes d'Information Géographique (SIG), géopolitique spatiale, urbanisme et résilience environnementale.",
        "subdomains": [
            "Cartographie numérique, SIG & Analyse spatiale",
            "Aménagement du territoire & Géographie humaine",
            "Géographie physique, Climat & Risques naturels",
            "Géomatique & Télédétection par satellite"
        ]
    },
    {
        "id": "sciences-politiques-ri",
        "name": "Sciences Politiques & Relations Internationales",
        "icon": "🏛️",
        "description": "Analyse géopolitique, affaires publiques, diplomatie, prospective stratégique, régimes politiques et coopération internationale.",
        "subdomains": [
            "Géopolitique, Affaires publiques & Analyse stratégique",
            "Relations internationales & Diplomatie",
            "Gouvernance publique & Évaluation des politiques",
            "Coopération multilatérale & Développement"
        ]
    },
    {
        "id": "documentation-information",
        "name": "Documentation & Information",
        "icon": "📚",
        "description": "Recherche documentaire avancée, bibliothéconomie, médiathèques, veille stratégique et gestion électronique des connaissances.",
        "subdomains": [
            "Recherche documentaire, Gestion de l'information & Veille",
            "Bibliothèques, Médiathèques & Collections publiques",
            "Knowledge Management & GED d'entreprise",
            "Éducation aux médias & à l'information"
        ]
    },
    {
        "id": "culture-mediation",
        "name": "Médiation Culturelle",
        "icon": "🎭",
        "description": "Éducation artistique et culturelle, animation de musées et monuments, conception d'expositions et élargissement des publics.",
        "subdomains": [
            "Éducation artistique, Médiation des publics & Événements culturels",
            "Médiation muséale & Outils participatifs",
            "Action culturelle territoriale & Champ social",
            "Scénographie & Ingénierie culturelle"
        ]
    },
    {
        "id": "enseignement-shs",
        "name": "Enseignement & Pédagogie",
        "icon": "👨‍🏫",
        "description": "Enseignement secondaire (Lettres, Histoire, Philosophie, Langues), pédagogie active, formation des adultes et enseignement supérieur.",
        "subdomains": [
            "Enseignement supérieur universitaire & Direction de recherche",
            "Enseignement secondaire en humanités & Concours",
            "Pédagogie active & Didactique des disciplines",
            "Formation continue des adultes"
        ]
    },
    {
        "id": "recherche-shs",
        "name": "Recherche Fondamentale & Appliquée",
        "icon": "🔬",
        "description": "Recherche scientifique en instituts d'État, laboratoires interdisciplinaires, direction de projets internationaux et science ouverte.",
        "subdomains": [
            "Recherche interdisciplinaire, Laboratoires & Publications savantes",
            "Humanités numériques & Traitement de corpus massifs",
            "Recherche pour le développement & Savoirs endogènes",
            "Épistémologie & Évaluation par les pairs"
        ]
    },
    {
        "id": "journalisme-medias",
        "name": "Journalisme & Médias",
        "icon": "📰",
        "description": "Presse écrite, agences de presse, journalisme d'investigation, médias numériques, reportage de terrain et déontologie de l'information.",
        "subdomains": [
            "Presse écrite, Médias numériques & Investigation",
            "Secrétariat de rédaction & Édition de presse",
            "Journalisme mobile (MoJo) & Nouveaux formats",
            "Fact-checking & Vérification des sources"
        ]
    },
    {
        "id": "redaction-edition",
        "name": "Rédaction & Édition",
        "icon": "✍️",
        "description": "Maisons d'édition littéraires et savantes, direction éditoriale, conception-rédaction, écriture de marque et chaîne du livre.",
        "subdomains": [
            "Maison d'édition, Collections & Chaîne du livre",
            "Conception-rédaction & Écriture de marque",
            "Édition numérique & Livres audio",
            "Droits d'auteur & Contrats d'édition"
        ]
    },
    {
        "id": "economie-transversale",
        "name": "Études Économiques & Métiers Transversaux",
        "icon": "💼",
        "description": "Études de conjoncture économique, modélisation économétrique de marché, conseil stratégique aux dirigeants et analyse de la concurrence.",
        "subdomains": [
            "Études de conjoncture, Stratégie dirigeant & Analyse de marché",
            "Économétrie appliquée & Modélisation prédictive",
            "Conseil en politiques économiques & Régulation",
            "Analyse concurrentielle & Stratégie de prix"
        ]
    }
];

  var LLSH_JOBS = [
    {
        "id": "auteur-ecrivain",
        "slug": "auteur-ecrivain",
        "title": "Auteur / Écrivain",
        "aliases": [
            "Romancier",
            "Écrivain littéraire",
            "Auteur d'essais",
            "Biographe"
        ],
        "icon": "✍️",
        "image": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Lettres & Littérature",
        "domainId": "lettres-litterature",
        "subdomain": "Création littéraire & Écriture",
        "sectors": [
            "Édition",
            "Littérature",
            "Culture & Médias"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": false,
        "level": "Formation littéraire ouverte (Bac +3 à Bac +5 conseillé : Lettres Modernes, Création littéraire)",
        "salary": "🇫🇷 France : Rémunération en droits d'auteur (8% à 12% du prix hors taxes du livre) + à-valoir • 🇸🇳 Sénégal : Droits d'auteur et bourses de résidence (SODAV, résidences littéraires d'Afrique de l'Ouest)",
        "simpleDefinition": "L'écrivain conçoit et rédige des œuvres littéraires originales (romans, nouvelles, essais, pièces de théâtre, biographies) en façonnant la langue pour émouvoir, questionner et transmettre une vision du monde.",
        "shortDescription": "Artisan des mots et explorateur de la condition humaine, l'auteur élabore des récits narratifs ou documentaires destinés à l'édition papier et numérique.",
        "longDescription": "L'auteur ou écrivain structure des récits fictionnels ou documentaires en travaillant le rythme, le style, la psychologie des personnages et la dramaturgie. Il effectue des recherches documentaires approfondies, dialogue avec son éditeur pour les phases de relecture et de correction, et participe à des salons du livre, des résidences d'écriture et des rencontres avec les lecteurs pour faire rayonner son œuvre.",
        "mainObjective": "Créer des œuvres écrites originales qui captivent l'imaginaire, interrogent la société et enrichissent le patrimoine littéraire.",
        "companyRole": "Créateur de contenu intellectuel et artistique, source première de la chaîne de valeur du livre.",
        "workEnvironment": [
            "🏠 Travail solitaire en bureau personnel, bibliothèques ou résidences d'écriture",
            "📚 Salons du livre, dédicaces, festivals littéraires et interventions publiques",
            "🤝 Échanges réguliers avec les directeurs de collection, correcteurs et attachés de presse"
        ],
        "missions": [
            "Concevoir l'univers narratif, l'intrigue et l'architecture globale d'un ouvrage",
            "Mener des enquêtes de terrain et des recherches historiques ou sociologiques documentaires",
            "Rédiger avec rigueur stylistique, inventivité lexicale et précision syntaxique",
            "Retravailler les manuscrits d'après les retours du comité de lecture et de l'éditeur",
            "Animer des ateliers d'écriture et participer aux événements promotionnels"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Session d'écriture créative matinale",
                "desc": "Rédaction continue de 1 500 mots sur le chapitre 4 du roman en cours, travail sur le dialogue entre protagonistes."
            },
            {
                "time": "11:30",
                "title": "Recherche documentaire & sources",
                "desc": "Consultation d'archives numérisées pour vérifier l'exactitude des détails historiques d'une scène d'époque."
            },
            {
                "time": "14:30",
                "title": "Relecture critique & réécriture",
                "desc": "Chasse aux répétitions, affûtage du rythme des phrases et précision des descriptions sensorielles."
            },
            {
                "time": "17:00",
                "title": "Échange avec la maison d'édition",
                "desc": "Point téléphonique avec le responsable éditorial sur le planning des épreuves et le choix de la couverture."
            }
        ],
        "skills": {
            "technical": [
                "Maîtrise stylistique exceptionnelle de la langue française et de la dramaturgie",
                "Méthodologie de recherche documentaire et d'enquête de terrain",
                "Techniques narratives, polyphonie des voix et construction de personnages",
                "Connaissance des contrats d'édition et du droit de la propriété intellectuelle"
            ],
            "human": [
                "Imagination féconde et acuité d'observation du comportement humain",
                "Discipline personnelle rigoureuse et persévérance face aux blocages créatifs",
                "Sensibilité esthétique et humilité face aux phases de réécriture"
            ],
            "tools": [
                "Logiciels d'écriture (Scrivener, Microsoft Word, Ulysses)",
                "Outils de prise de notes et fiches personnages (Notion, Obsidian)",
                "Dictionnaires étymologiques, synonymiques et corpus textuels (CNRTL, Le Robert)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence (Bac +3)",
                    "title": "Licence Lettres Modernes, Humanités ou Philosophie",
                    "desc": "Socle de culture littéraire, analyse textuelle approfondie et maîtrise stylistique."
                },
                {
                    "step": "Master (Bac +5)",
                    "title": "Master Création Littéraire ou Master Métiers de l'Écrit",
                    "desc": "Ateliers d'écriture professionnelle, perfectionnement narratif et immersion dans le monde de l'édition."
                }
            ],
            "schools": [
                {
                    "name": "Université Sorbonne Nouvelle (Paris 3) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Paris 8 Vincennes-Saint-Denis (Master Création Littéraire) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Cheikh Anta Diop de Dakar (UCAD - Faculté des Lettres et Sciences Humaines) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Résidences d'écriture CNL",
                "Bourses de création littéraire"
            ]
        },
        "career": {
            "sectors": [
                "Édition littéraire",
                "Presse & Médias",
                "Scénarisation & Cinéma",
                "Enseignement artistique"
            ],
            "employerTypes": [
                "Travailleur indépendant (Auteur)",
                "Maisons d'édition",
                "Instituts culturels"
            ],
            "evolution": [
                "Scénariste pour le cinéma / séries",
                "Directeur de collection éditoriale",
                "Critique littéraire",
                "Romancier reconnu"
            ],
            "pros": [
                "Liberté créative totale",
                "Possibilité de marquer durablement les esprits",
                "Travail nomade"
            ],
            "cons": [
                "Rémunération irrégulière et aléatoire au début",
                "Grande solitude lors des phases d'écriture"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Écrire une nouvelle de 3 000 mots sur un thème fort et la soumettre à un concours littéraire ou une revue étudiante.",
            "steps": [
                "Définir un synopsis clair en 5 actes et la fiche des 3 personnages principaux",
                "Planifier une session d'écriture quotidienne de 500 mots pendant une semaine",
                "Faire relire par 2 lecteurs critiques et retravailler le manuscrit"
            ],
            "freeResources": [
                "Fabula.org (Recherche littéraire)",
                "CNRTL (Centre National de Ressources Textuelles et Lexicales)"
            ]
        },
        "aiImpact": {
            "summary": "L'IA générative produit des ébauches de textes mais ne remplace ni la singularité d'une voix d'auteur, ni l'expérience vécue humaine.",
            "positiveImpacts": [
                "Aide au brainstorming et à la structuration d'intrigues complexes",
                "Génération rapide d'idées de noms et de décors"
            ],
            "risksAndChallenges": [
                "Uniformisation du style si l'auteur s'appuie trop sur les modèles",
                "Questions éthiques de plagiat et de droit d'auteur"
            ],
            "recommendedSkills": [
                "Affirmer une voix stylistique unique et originale",
                "Maîtriser les questions de propriété intellectuelle face aux LLMs"
            ]
        },
        "africaContext": {
            "senegalInsight": "Le Sénégal est une terre de géants littéraires (Léopold Sédar Senghor, Mariama Bâ, Cheikh Hamidou Kane, Boubacar Boris Diop, Mohamed Mbougar Sarr - Prix Goncourt 2021). La vitalité des maisons d'édition dakaroises (Présence Africaine, NEAS, Jimsaan) offre un écosystème fécond.",
            "westAfricaOpportunities": "Forte demande d'œuvres reflétant les réalités contemporaines africaines, de littératures jeunesses et d'essais décoloniaux.",
            "localChampions": [
                "Éditions Jimsaan (Dakar)",
                "Les Nouvelles Éditions Africaines du Sénégal (NEAS)",
                "La Maison de l'Oralité et du Conte"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Secteur Lettres, langues, sciences humaines",
                "url": "https://www.imaginetonfutur.com/les-metiers/domaine/lettres-langues-sciences-humaines.html",
                "type": "metier"
            },
            {
                "organization": "Ministère de la Culture / Centre National du Livre (CNL)",
                "title": "Statut et rémunération des auteurs de livres",
                "url": "https://www.centrenationaldulivre.fr",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En 2021, l'écrivain sénégalais Mohamed Mbougar Sarr est devenu à 31 ans le premier auteur d'Afrique subsaharienne à remporter le prestigieux Prix Goncourt avec 'La plus secrète mémoire des hommes'.",
            "pourquoi": "Cette distinction historique a mis en lumière la puissance narrative et intellectuelle des humanités littéraires africaines à l'échelle mondiale.",
            "a_retenir": "L'art d'écrire exige à la fois rigueur d'artisan et authenticité d'âme."
        }
    },
    {
        "id": "lecteur-correcteur",
        "slug": "lecteur-correcteur",
        "title": "Lecteur-Correcteur / Préparateur de copie",
        "aliases": [
            "Correcteur d'édition",
            "Secrétaire de rédaction",
            "Préparateur de texte",
            "Réviseur linguistique"
        ],
        "icon": "🔍",
        "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Lettres & Littérature",
        "domainId": "lettres-litterature",
        "subdomain": "Édition & Révision de textes",
        "sectors": [
            "Édition",
            "Presse écrite",
            "Communication",
            "Traduction"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": false,
        "level": "Bac +3 à Bac +5 (Lettres Modernes, Métiers du Livre, Sciences du Langage)",
        "salary": "🇫🇷 France : 1 800 - 2 600 € brut/mois (ou 15 à 25 € le feuillet de 1 500 signes) • 🇸🇳 Sénégal : 300 000 - 750 000 FCFA / mois",
        "simpleDefinition": "Le lecteur-correcteur traque et élimine les fautes d'orthographe, de grammaire, de ponctuation et de typographie tout en vérifiant la cohérence logique et la véracité des faits cités dans un texte.",
        "shortDescription": "Sentinelle de la langue et garant de la perfection éditoriale, il prépare les manuscrits avant leur impression ou publication web.",
        "longDescription": "Véritable artisan de la précision linguistique, le lecteur-correcteur intervient avant l'impression ou la mise en ligne. Il applique à la lettre le Code typographique, harmonise les citations et bibliographies, rectifie les contresens et vérifie les dates, noms propres et faits historiques. Il protège la réputation de l'éditeur ou de l'entreprise contre toute coquille décrédibilisante.",
        "mainObjective": "Garantir la perfection orthographique, syntaxique, typographique et sémantique de tout document éditorial.",
        "companyRole": "Garant qualité linguistique et éditoriale dans la chaîne de publication.",
        "workEnvironment": [
            "📚 Maisons d'édition littéraires, scolaires et universitaires",
            "📰 Rédactions de presse écrite et médias d'information en ligne",
            "💻 Télétravail fréquent en indépendant ou vacation éditoriale"
        ],
        "missions": [
            "Corriger rigoureusement l'orthographe, la grammaire et les accords complexes",
            "Appliquer les règles du Code typographique (espaces insécables, majuscules, italiques)",
            "Vérifier l'exactitude des faits historiques, citations et données chiffrées (fact-checking)",
            "Harmoniser la maquette textuelle et signaler les incohérences de narration",
            "Proposer des reformulations élégantes tout en respectant la voix propre de l'auteur"
        ],
        "typicalDay": [
            {
                "time": "09:00",
                "title": "Préparation de copie d'un essai",
                "desc": "Lecture attentive d'un manuscrit en sciences humaines, normalisation des notes de bas de page."
            },
            {
                "time": "11:30",
                "title": "Fact-checking & vérification de sources",
                "desc": "Vérification sur les répertoires officiels de l'orthographe de noms propres et de traités historiques cités."
            },
            {
                "time": "14:00",
                "title": "Relecture sur épreuves maquettées",
                "desc": "Chasse aux coquilles résiduelles, césures vicieuses et lignes orphelines sur fichier PDF balisé."
            },
            {
                "time": "16:30",
                "title": "Dialogue avec le secrétaire d'édition",
                "desc": "Restitution des arbitrages typographiques et signalement d'une contradiction chronologique au chapitre 6."
            }
        ],
        "skills": {
            "technical": [
                "Maîtrise infaillible de la grammaire française et des subtilités orthotypographiques",
                "Connaissance exhaustive du Code typographique en usage à l'Imprimerie Nationale",
                "Techniques de préparation de copie et signes conventionnels de correction",
                "Méthodologie de fact-checking documentaire"
            ],
            "human": [
                "Attention au détail quasi chirurgicale et concentration soutenue",
                "Curiosité intellectuelle et vaste culture générale",
                "Tact et diplomatie dans les échanges avec les auteurs"
            ],
            "tools": [
                "Adobe Acrobat Pro (outils d'annotation et révision de PDF)",
                "ProLexis / Antidote (logiciels d'aide à la correction avancée)",
                "Le Lexique des règles typographiques en usage à l'Imprimerie nationale",
                "Dictionnaires de référence (Trésor de la Langue Française, Littré, Larousse)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence (Bac +3)",
                    "title": "Licence Lettres Modernes ou Sciences du Langage",
                    "desc": "Étude approfondie de la syntaxe, de la stylistique et de l'histoire de la langue."
                },
                {
                    "step": "Formation spécialisée / Master (Bac +4/5)",
                    "title": "Formation de Lecteur-Correcteur (Asfored, Formacom, EMI) ou Master Métiers du Livre",
                    "desc": "Apprentissage intensif du code typographique, des signes de correction et du calibrage."
                }
            ],
            "schools": [
                {
                    "name": "Asfored (Centre de formation de l'Édition) — Paris, France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École des Métiers de l'Information (EMI) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "EBAD (École de Bibliothécaires, Archivistes et Documentalistes - UCAD) — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certificat Voltaire (score 950+ recommandé)",
                "Certificat Asfored de relecture-correction"
            ]
        },
        "career": {
            "sectors": [
                "Édition de livres",
                "Presse & Magazines",
                "Agences de communication",
                "Institutions publiques"
            ],
            "employerTypes": [
                "Maisons d'édition",
                "Organes de presse",
                "Freelance"
            ],
            "evolution": [
                "Secrétaire d'édition",
                "Responsable éditorial",
                "Chef de fabrication",
                "Rédacteur en chef technique"
            ],
            "pros": [
                "Satisfaction du travail bien fait et amour des textes",
                "Grande autonomie et flexibilité de travail"
            ],
            "cons": [
                "Fatigue visuelle liée aux écrans",
                "Tarifs à la page parfois tirés vers le bas"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser la révision complète d'un rapport académique de 30 pages en appliquant les règles typographiques de l'Imprimerie nationale.",
            "steps": [
                "Passer le Certificat Voltaire pour attester de son niveau d'orthographe",
                "Acquérir le Lexique des règles typographiques en usage à l'Imprimerie nationale",
                "S'entraîner à la correction sur épreuves papier et numérique avec signes conventionnels"
            ],
            "freeResources": [
                "Académie Française (Questions de langue)",
                "Languefrancaise.net (Ressources orthographiques)"
            ]
        },
        "aiImpact": {
            "summary": "Les correcteurs automatiques basés sur l'IA assistent la relecture de base mais échouent sur les subtilités stylistiques, le ton et la logique narrative.",
            "positiveImpacts": [
                "Détection rapide des doubles espaces et fautes de frappe courantes",
                "Gain de temps sur la phase de premier défrichage"
            ],
            "risksAndChallenges": [
                "Fausses corrections suggérées par des algorithmes ne comprenant pas le contexte",
                "Risque d'appauvrissement du style"
            ],
            "recommendedSkills": [
                "Expertise inégalable sur la typographie fine",
                "Capacité à justifier chaque choix textuel par les règles académiques"
            ]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la croissance des maisons d'édition indépendantes et des publications institutionnelles de l'UEMOA/CEDEAO requiert des relecteurs bilingues (français/anglais) et sensibles aux particularités du français d'Afrique.",
            "westAfricaOpportunities": "Édition de manuels scolaires régionaux, rapports d'ONG internationales et publications de recherche universitaire.",
            "localChampions": [
                "Éditions L'Harmattan Sénégal",
                "Presses Universitaires de Dakar (UCAD)",
                "ENDA Tiers-Monde Publications"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Secteur Information, communication & Métiers du Livre",
                "url": "https://www.imaginetonfutur.com/les-metiers/domaine/information-communication.html",
                "type": "metier"
            },
            {
                "organization": "Syndicat National de l'Édition (SNE)",
                "title": "Le métier de préparateur de copie et correcteur",
                "url": "https://www.sne.fr",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En typographie française, le point-virgule, le point d'interrogation et le point d'exclamation sont toujours précédés d'une espace insécable, contrairement à la typographie anglaise !",
            "pourquoi": "Ces règles strictes évitent qu'un signe de ponctuation ne se retrouve seul et isolé au début d'une nouvelle ligne.",
            "a_retenir": "Le lecteur-correcteur est le gardien invisible de l'élégance intellectuelle d'un livre."
        }
    },
    {
        "id": "formateur-langues-fle",
        "slug": "formateur-langues-fle",
        "title": "Formateur en Langues & FLE (Français Langue Étrangère)",
        "aliases": [
            "Enseignant de FLE",
            "Formateur linguistique pour adultes",
            "Coach en langues étrangères",
            "Professeur de langues vivantes"
        ],
        "icon": "🌍",
        "image": "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Langues Étrangères",
        "domainId": "langues-etrangeres",
        "subdomain": "Didactique des langues & FLE",
        "sectors": [
            "Formation professionnelle",
            "Enseignement",
            "Relations internationales",
            "Intégration"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": false,
        "level": "Bac +3 (Licence FLE/Langues) à Bac +5 (Master Didactique des Langues / FLE)",
        "salary": "🇫🇷 France : 1 900 - 3 200 € brut/mois (ou 25 à 45 € de l'heure en formation continue) • 🇸🇳 Sénégal : 350 000 - 900 000 FCFA / mois",
        "simpleDefinition": "Le formateur en langues transmet la pratique orale et écrite d'une langue étrangère ou du français à des apprenants adultes, professionnels en mobilité internationale ou étudiants étrangers.",
        "shortDescription": "Pédagogue interculturel, il conçoit des modules d'apprentissage linguistique contextualisés aux besoins professionnels et personnels.",
        "longDescription": "L'enseignant de FLE ou formateur en langues étrangères ne se contente pas d'enseigner la grammaire : il transmet les codes culturels, les subtilités d'expression et les réflexes de communication indispensables pour évoluer dans un monde globalisé. Il utilise des méthodes communicatives actives, prépare ses apprenants aux certifications reconnues (TOEIC, TOEFL, DELF/DALF) et adapte sa pédagogie à des publics très hétérogènes (diplomates, ingénieurs, réfugiés, étudiants universitaires).",
        "mainObjective": "Développer l'autonomie et l'aisance communicationnelle des apprenants dans une langue cible selon le Cadre européen (CECRL).",
        "companyRole": "Facilitateur interculturel et spécialiste de la montée en compétences linguistiques des équipes.",
        "workEnvironment": [
            "🏫 Centres de langues universitaires, Alliances Françaises et Instituts Français",
            "🏢 Entreprises multinationales (formations intra-entreprises)",
            "💻 Classes virtuelles interactives et e-learning synchrone"
        ],
        "missions": [
            "Évaluer le niveau initial des apprenants selon le référentiel CECRL (niveaux A1 à C2)",
            "Concevoir des séquences pédagogiques interactives basées sur des situations réelles",
            "Animer des ateliers de conversation, de prononciation et de rédaction professionnelle",
            "Préparer les candidats aux examens officiels (DELF, DALF, TCF, Cambridge, DELE)",
            "Sensibiliser aux codes culturels et aux pratiques de négociation interculturelle"
        ],
        "typicalDay": [
            {
                "time": "09:00",
                "title": "Cours de français professionnel pour expatriés",
                "desc": "Animation d'un atelier sur la rédaction d'e-mails formels et la conduite de réunions en contexte francophone."
            },
            {
                "time": "11:00",
                "title": "Session individuelle de phonétique corrective",
                "desc": "Entraînement ciblé sur les voyelles nasales et l'intonation avec un professionnel anglophone."
            },
            {
                "time": "14:00",
                "title": "Conception d'un module d'anglais des affaires",
                "desc": "Création d'études de cas interactives pour des cadres d'une entreprise tech en expansion."
            },
            {
                "time": "16:30",
                "title": "Correction d'épreuves blanches DELF B2",
                "desc": "Évaluation détaillée de productions écrites et feedback personnalisé pour chaque participant."
            }
        ],
        "skills": {
            "technical": [
                "Didactique des langues vivantes et pédagogie par tâches / approche actionnelle",
                "Maîtrise approfondie du Cadre européen commun de référence pour les langues (CECRL)",
                "Conception de parcours de formation hybrides (blended learning)",
                "Ingénierie d'évaluation et habilitation d'examinateur-correcteur officiel"
            ],
            "human": [
                "Empathie, patience et capacité à débloquer l'inhibition linguistique",
                "Sens aigu de l'animation de groupe et dynamisme communicatif",
                "Curiosité pour les cultures d'origine des apprenants"
            ],
            "tools": [
                "Plateformes LMS (Moodle, Canvas, Google Classroom)",
                "Outils d'interaction synchrone (Kahoot, Miro, Padlet, Wooclap)",
                "Ressources de didactique numérique (TV5Monde Édu, RFI Savoirs, BBC Learning English)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence (Bac +3)",
                    "title": "Licence LLCER (Langues) ou Lettres avec parcours FLE",
                    "desc": "Maîtrise linguistique bilingue et introduction aux sciences du langage."
                },
                {
                    "step": "Master (Bac +5)",
                    "title": "Master Didactique des Langues / Français Langue Étrangère",
                    "desc": "Ingénierie pédagogique, phonétique appliquée et stages en institutions culturelles internationales."
                }
            ],
            "schools": [
                {
                    "name": "Université Sorbonne Nouvelle (DILTEC) — Paris, France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Alliance Française Paris Île-de-France — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "FASTEF (Faculté des Sciences et Technologies de l'Éducation et de la Formation - UCAD) — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Habilitation examinateur DELF-DALF",
                "Certificat TEFL / CELTA (pour l'anglais)"
            ]
        },
        "career": {
            "sectors": [
                "Réseau culturel international (Alliances/Instituts)",
                "Universités",
                "Organismes de formation continue",
                "ONGs"
            ],
            "employerTypes": [
                "Ministère des Affaires Étrangères",
                "Centres de langues privés",
                "Freelance / Formateur indépendant"
            ],
            "evolution": [
                "Responsable pédagogique de centre de langues",
                "Directeur d'Alliance Française",
                "Concepteur de méthodes pédagogiques",
                "Attaché de coopération linguistique"
            ],
            "pros": [
                "Mobilité géographique internationale exceptionnelle",
                "Richesse des rencontres humaines multiculturelles"
            ],
            "cons": [
                "Contrats parfois fractionnés en début de parcours",
                "Décalages horaires en formation en ligne"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Créer une fiche pédagogique complète de 60 minutes pour enseigner la prise de parole en réunion à un public niveau B1.",
            "steps": [
                "Étudier la grille d'auto-évaluation du CECRL",
                "Suivre le MOOC 'Enseigner le français langue étrangère aujourd'hui' (France Éducation International)",
                "Faire du tutorat linguistique bénévole auprès d'associations d'intégration"
            ],
            "freeResources": [
                "France Éducation International (Grilles CECRL)",
                "RFI Savoirs (Exercices d'écoute)"
            ]
        },
        "aiImpact": {
            "summary": "Les applications d'IA génèrent des exercices et des chatbots de conversation, recentrant le rôle du formateur humain sur la motivation, la nuance culturelle et l'interaction authentique.",
            "positiveImpacts": [
                "Génération instantanée de dialogues sur mesure adaptés aux métiers des apprenants",
                "Automatisation des corrections grammaticales de base"
            ],
            "risksAndChallenges": [
                "Illusion d'apprentissage passif des élèves avec des tuteurs IA",
                "Nécessité de réinventer la valeur ajoutée de la classe vivante"
            ],
            "recommendedSkills": [
                "Maîtriser l'intégration des tuteurs IA comme compléments d'entraînement",
                "Accentuer l'entraînement à la négociation et à l'improvisation orale"
            ]
        },
        "africaContext": {
            "senegalInsight": "Dakar est une plaque tournante de la francophonie et accueille l'Institut Français et de nombreux centres de langues préparant les étudiants à la mobilité vers le Canada, la France ou les pays anglophones voisins (Ghana, Nigeria).",
            "westAfricaOpportunities": "Forte demande pour des formateurs bilingues anglais/français dans les organisations régionales (CEDEAO, BAD, agences de l'ONU).",
            "localChampions": [
                "Institut Français du Sénégal à Dakar",
                "British Council Sénégal",
                "FASTEF UCAD"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Secteur Éducation, formation & Enseignement",
                "url": "https://www.imaginetonfutur.com/les-metiers/domaine/education-formation-rh.html",
                "type": "metier"
            },
            {
                "organization": "France Éducation International",
                "title": "Les métiers du Français Langue Étrangère",
                "url": "https://www.france-education-international.fr",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Le réseau des Alliances Françaises compte plus de 800 établissements répartis dans 130 pays sur les 5 continents, formant plus de 500 000 étudiants chaque année !",
            "pourquoi": "C'est l'un des plus grands réseaux culturels et d'enseignement linguistique au monde, créant une demande constante de formateurs qualifiés.",
            "a_retenir": "Enseigner une langue, c'est ouvrir une fenêtre sur une autre manière de penser le monde."
        }
    },
    {
        "id": "traducteur",
        "slug": "traducteur",
        "title": "Traducteur (Littéraire, Juridique & Spécialisé)",
        "aliases": [
            "Traducteur assermenté",
            "Traducteur littéraire",
            "Traducteur audiovisuel",
            "Localisateur de contenus"
        ],
        "icon": "🗣️",
        "image": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Traduction & Interprétation",
        "domainId": "traduction-interpretation",
        "subdomain": "Traduction générale & spécialisée",
        "sectors": [
            "Traduction",
            "Édition",
            "Droit & Justice",
            "Audiovisuel & Médias"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": false,
        "level": "Bac +5 (Master Traduction professionnelle, Diplôme ESIT ou ISIT)",
        "salary": "🇫🇷 France : 29 500 € brut/an moyen (~1 800 - 2 500 € débutant / mois, Source : Imagine ton Futur) • 🇸🇳 Sénégal : 450 000 - 1 400 000 FCFA / mois",
        "simpleDefinition": "Le traducteur transpose fidèlement des textes écrits d'une langue de départ (langue source) vers sa langue maternelle (langue cible), en préservant le sens, le ton, le registre de langue et les subtilités culturelles de l'original.",
        "shortDescription": "Pont écrit entre deux cultures décrit par Imagine ton Futur, le traducteur allie rigueur terminologique et sensibilité littéraire.",
        "longDescription": "Comme l'explique la fiche officielle d'Imagine ton Futur, le traducteur travaille à l'écrit et s'exprime dans sa langue maternelle. Son défi quotidien ne consiste jamais en un simple mot-à-mot, mais en une véritable réécriture respectueuse des nuances et des contextes culturels. Qu'il s'agisse de romans primés, d'actes juridiques certifiés pour les tribunaux (traducteur assermenté) ou de sous-titrage audiovisuel, il s'imprègne de la pensée de l'auteur d'origine pour en offrir l'écho le plus juste.",
        "mainObjective": "Transposer un texte écrit d'une culture à une autre avec une fidélité absolue au fond et une élégance irréprochable dans la forme.",
        "companyRole": "Médiateur linguistique garant de l'exactitude des échanges internationaux et de l'accès aux œuvres étrangères.",
        "workEnvironment": [
            "💻 Bureau personnel en télétravail ou agences de traduction internationales",
            "📚 Bibliothèques de recherche et corpus dictionnairiques spécialisés",
            "⚖️ Tribunaux et cours d'appel (pour les traducteurs assermentés)"
        ],
        "missions": [
            "Lire et analyser le texte source pour en cerner les enjeux sémantiques et le public cible",
            "Effectuer des recherches terminologiques poussées sur les concepts complexes",
            "Traduire vers sa langue maternelle en respectant scrupuleusement la cohérence stylistique",
            "Relire et polir le texte pour qu'il se lise comme un texte originalement écrit dans la langue cible",
            "Gérer les mémoires de traduction et glossaires dans les outils de TAO (Traduction Assistée par Ordinateur)"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Traduction d'un chapitre d'essai littéraire",
                "desc": "Transposition de 2 000 mots d'anglais vers le français avec recherche de métaphores équivalentes."
            },
            {
                "time": "11:30",
                "title": "Recherche terminologique juridique",
                "desc": "Consultation des bases de données juridiques européennes pour traduire un contrat commercial avec exactitude."
            },
            {
                "time": "14:30",
                "title": "Session de post-édition",
                "desc": "Affinement stylistique d'une première passe de traduction assistée pour supprimer toute lourdeur syntaxique."
            },
            {
                "time": "17:00",
                "title": "Livraison au client et mise à jour des mémoires",
                "desc": "Envoi du texte certifié et intégration des nouveaux termes validés dans le glossaire SDL Trados."
            }
        ],
        "skills": {
            "technical": [
                "Bilinguisme parfait et maîtrise stylistique exceptionnelle de sa langue maternelle (langue cible)",
                "Connaissance approfondie de la culture, des idiomes et de l'histoire des pays de langue source",
                "Maîtrise des logiciels de TAO (SDL Trados Studio, memoQ, OmegaT)",
                "Méthodologie de recherche terminologique et documentation spécialisée"
            ],
            "human": [
                "Sens aigu de la nuance et rigueur intellectuelle absolue",
                "Patience, endurance et goût prononcé pour la lecture méticuleuse",
                "Fiabilité et respect intransigeant des délais de livraison"
            ],
            "tools": [
                "Logiciels de TAO (SDL Trados, memoQ, Phrase/Memsource)",
                "Bases terminologiques (IATE, Grand Dictionnaire Terminologique, Termium Plus)",
                "Outils de concordance textuelle et dictionnaires bilingues avancés"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence (Bac +3)",
                    "title": "Licence LEA (Langues Étrangères Appliquées) ou LLCER",
                    "desc": "Perfectionnement linguistique poussé sur au moins 2 langues vivantes."
                },
                {
                    "step": "Master professionnel (Bac +5)",
                    "title": "Master Traduction et Interprétation (ESIT, ISIT, Universités)",
                    "desc": "Formation d'élite aux techniques de traduction professionnelle, juridique, économique et littéraire."
                }
            ],
            "schools": [
                {
                    "name": "ESIT (École Supérieure d'Interprètes et de Traducteurs - Sorbonne Nouvelle) — Paris, France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "ISIT (Institut de Management et de Communication Interculturels) — Paris, France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Gaston Berger (UGB de Saint-Louis - Section de Langues Étrangères Appliquées) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Agrément d'Expert Traducteur près la Cour d'Appel (Traducteur Assermenté)",
                "Adhésion SFT (Société Française des Traducteurs)"
            ]
        },
        "career": {
            "sectors": [
                "Organisations internationales (ONU, UE)",
                "Maisons d'édition",
                "Cabinets d'avocats",
                "Agences de traduction"
            ],
            "employerTypes": [
                "Traducteur indépendant (Freelance 80%)",
                "Organismes multilatéraux",
                "Agences de localisation"
            ],
            "evolution": [
                "Chef de projet linguistique",
                "Réviseur / Relecteur senior",
                "Terminologue",
                "Interprète de conférence"
            ],
            "pros": [
                "Autonomie totale de travail et travail nomade possible",
                "Richesse intellectuelle continue des sujets abordés"
            ],
            "cons": [
                "Pression des délais courts de livraison",
                "Tarifs au mot soumis à une forte concurrence internationale"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Traduire un article de presse économique ou littéraire de 1 000 mots d'une langue étrangère vers le français et le soumettre à un traducteur diplômé pour relecture.",
            "steps": [
                "Consulter le guide des tarifs et usages de la Société Française des Traducteurs (SFT)",
                "Prendre en main un outil de TAO open-source gratuit (OmegaT)",
                "Constituer son premier glossaire bilingue thématique de 100 entrées"
            ],
            "freeResources": [
                "IATE (Base terminologique interactive de l'Union Européenne)",
                "Société Française des Traducteurs (SFT.fr)"
            ]
        },
        "aiImpact": {
            "summary": "L'émergence des moteurs neuronaux (DeepL, LLMs) transforme le métier : les traducteurs évoluent vers la post-édition à haute valeur ajoutée, l'adaptation culturelle et la localisation créative (transcréation).",
            "positiveImpacts": [
                "Automatisation du premier jet sur les textes répétitifs",
                "Gain de rapidité permettant de se concentrer sur l'élégance stylistique"
            ],
            "risksAndChallenges": [
                "Baisse des tarifs au mot proposée par certains intermédiaires",
                "Perte de sensibilité stylistique si l'on accepte les suggestions sans recul"
            ],
            "recommendedSkills": [
                "Compétences certifiées en Post-édition (norme ISO 18587)",
                "Spécialisation dans les domaines hautement techniques ou littéraires étanches à l'IA"
            ]
        },
        "africaContext": {
            "senegalInsight": "Le Sénégal est un carrefour diplomatique régional majeur abritant les bureaux régionaux des Nations Unies, de l'OIF, de la BCEAO et de nombreuses ambassades, générant une demande constante de traducteurs certifiés anglais-français-arabe-portugais.",
            "westAfricaOpportunities": "Traduction de documents de politiques publiques, d'accords bilatéraux et valorisation de la traduction vers les langues nationales (Wolof, Pulaar, Mandingue).",
            "localChampions": [
                "BCEAO (Services linguistiques)",
                "Bureau Régional de l'UNESCO à Dakar (BREDA)",
                "Agences de traduction dakaroises"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Fiche métier : Interprète / Traducteur",
                "url": "https://www.imaginetonfutur.com/metier/interprete-traducteur.html",
                "type": "metier"
            },
            {
                "organization": "Société Française des Traducteurs (SFT)",
                "title": "Observatoire des métiers de la traduction",
                "url": "https://www.sft.fr",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Selon les statistiques officielles d'Imagine ton Futur, un traducteur diplômé débute entre 1 800 et 2 500 € brut par mois, et plus de 80% des professionnels choisissent d'exercer en tant qu'indépendants !",
            "pourquoi": "Le statut d'indépendant permet de choisir ses domaines de prédilection et de travailler pour des clients situés partout sur le globe.",
            "a_retenir": "Traduire n'est pas transposer des mots : c'est réincarner une pensée dans une autre âme culturelle."
        }
    },
    {
        "id": "interprete-conference",
        "slug": "interprete-conference",
        "title": "Interprète de Conférence",
        "aliases": [
            "Interprète simultané",
            "Interprète consécutif",
            "Interprète de liaison",
            "Interprète diplomatique"
        ],
        "icon": "🎧",
        "image": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Traduction & Interprétation",
        "domainId": "traduction-interpretation",
        "subdomain": "Interprétation de conférence & diplomatique",
        "sectors": [
            "Diplomatie",
            "Organisations internationales",
            "Conférences mondiales",
            "Événementiel"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": false,
        "level": "Bac +5 (Master Interprétation de conférence, ESIT, ISIT, FTI Genève)",
        "salary": "🇫🇷 France : 29 500 € brut/an débutant à 60 000 - 90 000 € pour les interprètes seniors d'institutions • 🇸🇳 Sénégal : 600 000 - 2 500 000 FCFA / mois (ou 150 000 à 400 000 FCFA / jour de vacation)",
        "simpleDefinition": "L'interprète de conférence restitue instantanément et oralement les propos d'un orateur d'une langue vers une autre, en temps réel dans une cabine insonorisée (simultanée) ou après l'intervention (consécutive).",
        "shortDescription": "Spécialiste de la communication orale instantanée décrit par Imagine ton Futur, il permet le dialogue en direct des dirigeants mondiaux.",
        "longDescription": "Comme le souligne la fiche métier d'Imagine ton Futur, traducteur et interprète sont deux métiers distincts : tandis que le traducteur travaille à l'écrit de manière sédentaire, l'interprète exerce à l'oral, souvent dans l'immédiateté absolue. Équipé d'un casque et d'un micro en cabine, il écoute l'orateur dans une langue source tout en traduisant simultanément dans le micro avec seulement 2 à 3 secondes de décalage. Cette performance cérébrale extrême exige une concentration hors norme et une préparation documentaire rigoureuse avant chaque sommet.",
        "mainObjective": "Assurer la compréhension orale instantanée et fluide entre interlocuteurs de langues maternelles différentes.",
        "companyRole": "Voix en temps réel de la diplomatie, des négociations d'affaires et des sommets multilatéraux.",
        "workEnvironment": [
            "🎙️ Cabines d'interprétation insonorisées lors de sommets internationaux",
            "✈️ Déplacements fréquents à travers le monde (Genève, New York, Bruxelles, Addis-Abeba)",
            "👥 Travail obligatoirement en binôme (relais toutes les 20 à 30 minutes pour préserver l'acuité cérébrale)"
        ],
        "missions": [
            "Effectuer l'interprétation simultanée en cabine avec fidélité absolue au registre et au ton de l'orateur",
            "Assurer l'interprétation consécutive lors de réunions restreintes avec prise de notes codée",
            "Préparer minutieusement les glossaires terminologiques et dossiers de chaque conférence en amont",
            "Gérer le stress et la fatigue cognitive en alternant rigoureusement avec son binôme de cabine",
            "Respecter le secret professionnel absolu sur les négociations diplomatiques et financières confidentielles"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Briefing pré-sommet & installation en cabine",
                "desc": "Vérification de la console audio, échange avec le président de séance et passage en revue des textes d'allocution."
            },
            {
                "time": "09:30",
                "title": "Interprétation simultanée de la séance plénière",
                "desc": "Interprétation en direct du discours d'un chef d'État, relais avec le binôme toutes les 25 minutes."
            },
            {
                "time": "14:00",
                "title": "Interprétation consécutive de négociation",
                "desc": "Prise de notes sténographiques codées et restitution orale lors d'un déjeuner bilatéral confidentiel."
            },
            {
                "time": "17:00",
                "title": "Préparation documentaire du lendemain",
                "desc": "Étude des rapports techniques sur les énergies renouvelables et mise à jour du glossaire pour la session suivante."
            }
        ],
        "skills": {
            "technical": [
                "Maîtrise orale native de sa langue maternelle et compréhension instantanée parfaite de 2 à 3 langues étrangères",
                "Technique de l'interprétation simultanée (décalage ou 'décalage temporel' maîtrisé)",
                "Système de prise de notes codée pour l'interprétation consécutive",
                "Gestion de la prosodie, de l'intonation et de la diction sous haute pression"
            ],
            "human": [
                "Vitesse de réaction cérébrale exceptionnelle et résistance au stress",
                "Sens aigu de la diplomatie, discrétion absolue et sang-froid",
                "Culture générale encyclopédique et curiosité insatiable de l'actualité mondiale"
            ],
            "tools": [
                "Consoles et régies d'interprétation cabine (BOSCH, Shure, Televic)",
                "Plateformes d'interprétation à distance (RSI - Kudo, Interprefy, Zoom Pro Audio)",
                "Cahiers de prise de notes spécialisés et glossaires terminologiques dynamiques"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence (Bac +3)",
                    "title": "Licence en Langues (LEA/LLCER), Sciences Politiques ou Droit",
                    "desc": "Excellence linguistique et solide compréhension des enjeux géopolitiques."
                },
                {
                    "step": "Master professionnel sélectif (Bac +5)",
                    "title": "Master d'Interprétation de Conférence (ESIT, ISIT, Genève)",
                    "desc": "Entraînement intensif en cabine, concours d'entrée très sélectif et simulations réelles."
                }
            ],
            "schools": [
                {
                    "name": "ESIT (Sorbonne Nouvelle) — Section Interprétation de Conférence — Paris, France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "FTI (Faculté de Traduction et d'Interprétation - Université de Genève) — Suisse / International",
                    "country": "Suisse",
                    "scope": "International"
                },
                {
                    "name": "Institut Supérieur de Traduction et d'Interprétation (ISTI - UCAD) — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Accréditation auprès des institutions de l'Union Européenne (SCIC)",
                "Test d'accréditation des Nations Unies (ONU)",
                "Membre AIIC (Association Internationale des Interprètes de Conférence)"
            ]
        },
        "career": {
            "sectors": [
                "Organisations internationales (ONU, UE, Union Africaine)",
                "Ministères des Affaires Étrangères",
                "Congrès scientifiques et médicaux",
                "Événements sportifs mondiaux"
            ],
            "employerTypes": [
                "Fonctionnaire international permanent",
                "Interprète de conférence indépendant (Freelance)",
                "Agences gouvernementales"
            ],
            "evolution": [
                "Chef d'équipe d'interprétation",
                "Directeur des services linguistiques d'une organisation mondiale",
                "Consultant en communication diplomatique"
            ],
            "pros": [
                "Rémunération très valorisante",
                "Présence au cœur des décisions qui façonnent l'histoire mondiale",
                "Voyages internationaux permanents"
            ],
            "cons": [
                "Intense fatigue cognitive en cabine",
                "Rythme de voyages éprouvant et calendrier changeant"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Pratiquer le 'shadowing' (répétition orale instantanée mot à mot) pendant 10 minutes par jour sur des discours de l'ONU pour entraîner la mémoire de travail.",
            "steps": [
                "Écouter des conférences TED ou des séances de l'ONU en version originale avec casque",
                "S'exercer à résumer en 2 minutes dans sa langue maternelle un discours étranger de 5 minutes",
                "Consulter le site de l'AIIC (aiic.org) pour comprendre les règles déontologiques du métier"
            ],
            "freeResources": [
                "Speech Repository (Banque de discours d'entraînement de la Commission Européenne)",
                "AIIC.org (Association Internationale des Interprètes de Conférence)"
            ]
        },
        "aiImpact": {
            "summary": "L'IA propose des outils de transcription et traduction vocale en temps réel, mais ne peut reproduire la diplomatie, l'adaptation aux humeurs d'un orateur et la réactivité contextuelle en direct.",
            "positiveImpacts": [
                "Assistance terminologique dynamique sur écran en cabine",
                "Transcription automatique d'appoint pour les chiffres et sigles complexes"
            ],
            "risksAndChallenges": [
                "Arrivée d'outils automatiques sur les visioconférences informelles",
                "Exigence accrue d'excellence absolue pour les interprètes humains"
            ],
            "recommendedSkills": [
                "Maîtrise des plateformes d'interprétation à distance (RSI)",
                "Expertise accrue en gestion des nuances diplomatiques et des non-dits"
            ]
        },
        "africaContext": {
            "senegalInsight": "Dakar accueille régulièrement de grands sommets internationaux (Forum de Dakar sur la Paix et la Sécurité, Sommet Mondial de l'Agro-industrie, conférences panafricaines), mobilisant des interprètes francophones, anglophones, arabophones et lusophones.",
            "westAfricaOpportunities": "Recrutements permanents et missions régulières auprès de l'Union Africaine (Addis-Abeba), de la CEDEAO (Abuja) et de la BAD (Abidjan).",
            "localChampions": [
                "Conférence des Chefs d'État de l'UEMOA",
                "Centre International de Conférences Abdou Diouf (CICAD de Diamniadio)",
                "Bureaux régionaux de l'ONU à Dakar"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Fiche métier : Interprète / Traducteur",
                "url": "https://www.imaginetonfutur.com/metier/interprete-traducteur.html",
                "type": "metier"
            },
            {
                "organization": "Association Internationale des Interprètes de Conférence (AIIC)",
                "title": "Le métier d'interprète de conférence",
                "url": "https://aiic.org",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En cabine simultanée, le cerveau de l'interprète réalise un exploit neurologique unique : il écoute une langue tout en parlant dans une autre avec un décalage de seulement 2 à 3 secondes !",
            "pourquoi": "Cette charge cognitive intense nécessite de travailler en binôme et de se relayer toutes les 30 minutes au maximum.",
            "a_retenir": "L'interprète de conférence est l'artisan invisible qui permet aux peuples de se parler d'égal à égal."
        }
    },
    {
        "id": "traducteur-technique",
        "slug": "traducteur-technique",
        "title": "Traducteur Technique",
        "aliases": [
            "Traducteur scientifique",
            "Traducteur médical",
            "Traducteur industriel",
            "Localisateur de logiciels"
        ],
        "icon": "🧰",
        "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Traduction Technique",
        "domainId": "traduction-technique",
        "subdomain": "Documentation technique & industrielle",
        "sectors": [
            "Industrie",
            "Ingénierie",
            "Pharmacie & Santé",
            "Télécoms & Numérique"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": false,
        "level": "Bac +5 (Master Traduction technique, École d'ingénieurs + langues, ESIT/ISIT)",
        "salary": "🇫🇷 France : 29 500 € brut/an moyen (~1 800 - 2 500 € brut/mois débutant, Source officielle : Imagine ton Futur) • 🇸🇳 Sénégal : 500 000 - 1 600 000 FCFA / mois",
        "simpleDefinition": "Le traducteur technique transpose des documents spécialisés (manuels industriels, brevets, notices pharmaceutiques, protocoles aéronautiques, logiciels) en combinant une parfaite maîtrise des langues et une expertise pointue dans un domaine scientifique ou industriel.",
        "shortDescription": "Spécialiste de la documentation industrielle décrit par Imagine ton Futur, il traduit les notices, brevets et logiciels avec une rigueur absolue.",
        "longDescription": "Comme documenté mot pour mot dans la fiche originale d'Imagine ton Futur : 'Son rôle ? Traduire la documentation technique d'un produit fabriqué à l'étranger. Les traducteurs techniques traduisent des textes à caractère scientifique, juridique ou commercial. En plus d'un très bon niveau en langues étrangères, ce métier nécessite des compétences techniques dans un domaine précis : logiciel informatique, ouvrage médical, protocoles en chimie ou derniers progrès de la chirurgie oculaire... Le médical, le juridique, l'électronique, le multimédia et les télécoms sont les secteurs qui offrent le plus de débouchés.'",
        "mainObjective": "Assurer la sécurité d'utilisation et la conformité internationale d'équipements industriels et médicaux complexes grâce à une documentation technique sans faille.",
        "companyRole": "Garant de l'interopérabilité technique et de la conformité réglementaire des produits exportés ou importés.",
        "workEnvironment": [
            "🏭 Grands groupes industriels (aéronautique, automobile, pharmacie, énergie)",
            "🏢 Agences de traduction spécialisées et sociétés de localisation",
            "💻 Télétravail en freelance avec stations de travail équipées d'écrans doubles et de logiciels de TAO"
        ],
        "missions": [
            "Traduire des manuels de maintenance d'avions, des notices de médicaments et des brevets d'invention",
            "Constituer et normaliser des glossaires terminologiques hautement spécialisés",
            "Vérifier la conformité des termes traduits avec les normes internationales (ISO, CE, FDA)",
            "Collaborer étroitement avec les ingénieurs d'essais et les rédacteurs techniques",
            "Effectuer la post-édition spécialisée de traductions automatiques neuronales"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Traduction d'un protocole de chirurgie robotique",
                "desc": "Traduction de l'anglais vers le français d'une notice d'utilisation de bras opératoire de haute précision."
            },
            {
                "time": "11:00",
                "title": "Point d'échange avec l'ingénieur biomédical",
                "desc": "Clarification sur la désignation exacte d'un capteur de pression piézoélectrique."
            },
            {
                "time": "14:00",
                "title": "Normalisation de la mémoire SDL Trados",
                "desc": "Harmonisation des termes traduits dans la base terminologique partagée de l'entreprise."
            },
            {
                "time": "16:30",
                "title": "Relecture croisée d'un brevet aéronautique",
                "desc": "Vérification de la cohérence juridique et technique des revendications avant dépôt auprès de l'INPI."
            }
        ],
        "skills": {
            "technical": [
                "Excellence linguistique dans la langue source et langue maternelle (anglais indispensable)",
                "Double compétence technique solide (mécanique, électronique, chimie, santé ou informatique)",
                "Maîtrise approfondie des logiciels de Traduction Assistée par Ordinateur (SDL Trados Studio, memoQ)",
                "Respect rigoureux des normes documentaires industrielles (S1000D, DITA, ISO 17100)"
            ],
            "human": [
                "Précision millimétrique et horreur de l'approximation terminologique",
                "Esprit d'investigation technique et curiosité pour les innovations industrielles",
                "Sens aigu des responsabilités (une erreur dans une notice médicale peut coûter des vies)"
            ],
            "tools": [
                "SDL Trados Studio / memoQ / Passolo (localisation de logiciels)",
                "Grand Dictionnaire Terminologique (OQLF) et bases de brevets (Espacenet)",
                "Logiciels de gestion terminologique (MultiTerm)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence (Bac +3)",
                    "title": "Licence LEA ou Licence scientifique/technique avec mineure langues",
                    "desc": "Bases solides en langues étrangères appliquées et acquisition d'un champ disciplinaire scientifique."
                },
                {
                    "step": "Master professionnel (Bac +5)",
                    "title": "Master Traduction Technique et Scientifique ou Diplôme ISIT/ESIT",
                    "desc": "Conseillé par Imagine ton Futur : 5 années d'études après un bac général avec forte valorisation des doubles compétences (droit, biologie, ingénierie + langues)."
                }
            ],
            "schools": [
                {
                    "name": "Université de Strasbourg (Master Traduction Professionnelle et Technologies) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "ISIT (Master Traduction et Localisation de Technologies) — Paris, France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Supérieure Polytechnique (ESP de Dakar) / UCAD — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification SDL Trados Studio Certified Professional",
                "Norme ISO 17100 pour les services de traduction"
            ]
        },
        "career": {
            "sectors": [
                "Pharmacie & Essais cliniques",
                "Aéronautique & Défense",
                "Télécoms & Électronique",
                "Organismes internationaux (OTAN, ONU)"
            ],
            "employerTypes": [
                "Industries manufacturières",
                "Sociétés de services de traduction",
                "Freelance / Indépendant"
            ],
            "evolution": [
                "Chef de projet localisation",
                "Terminologue en chef",
                "Responsable de documentation technique internationale",
                "Consultant en ingénierie linguistique"
            ],
            "pros": [
                "Secteur très porteur offrant les meilleurs débouchés de la traduction",
                "Tarifs de prestation supérieurs à la traduction générale"
            ],
            "cons": [
                "Textes parfois très austères et répétitifs",
                "Veille technologique permanente obligatoire"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Traduire intégralement la notice technique en anglais d'un objet connecté de 5 pages vers le français, avec constitution d'un glossaire de 50 termes bilingues.",
            "steps": [
                "Choisir un domaine de spécialité de prédilection (médical, énergie, informatique, automobile)",
                "Apprendre à utiliser un gestionnaire de terminologie (MultiTerm ou base Excel normalisée)",
                "Contacter des agences de traduction technique spécialisées pour des tests de recrutement"
            ],
            "freeResources": [
                "IATE (Terminologie technique européenne)",
                "TermSciences (Portail terminologique du CNRS)"
            ]
        },
        "aiImpact": {
            "summary": "La traduction automatique neuronale est très performante sur les textes techniques stéréotypés, transformant le traducteur en expert de post-édition et de contrôle qualité critique.",
            "positiveImpacts": [
                "Accélération massive du traitement des volumes documentaires",
                "Suppression des tâches de retranscription fastidieuses"
            ],
            "risksAndChallenges": [
                "Banalisation apparente de la compétence linguistique",
                "Risque d'erreurs subtiles mais fatales dans les dosages pharmaceutiques ou couples de serrage mécanique"
            ],
            "recommendedSkills": [
                "Expertise dans l'évaluation des erreurs de moteurs neuronaux",
                "Compétences poussées en gestion de la cohérence terminologique globale"
            ]
        },
        "africaContext": {
            "senegalInsight": "Avec l'exploitation des gisements de pétrole et gaz offshore (Sangomar, GTA), le déploiement des infrastructures solaires et ferroviaires (TER), le Sénégal connaît une demande explosive de traduction technique de normes, manuels de forage et spécifications HSE.",
            "westAfricaOpportunities": "Documentation minière, projets d'ingénierie civile de la CEDEAO et partenariats industriels sino-africains.",
            "localChampions": [
                "Ministère de l'Énergie, du Pétrole et des Mines (Sénégal)",
                "PETROSEN (Société des Pétroles du Sénégal)",
                "Apave Sénégal & Bureaux de contrôle"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Fiche métier : Traducteur technique",
                "url": "https://www.imaginetonfutur.com/metier/traducteur-technique.html",
                "type": "metier"
            },
            {
                "organization": "Société Française des Traducteurs",
                "title": "Le traducteur technique et scientifique",
                "url": "https://www.sft.fr",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Selon Imagine ton Futur, les secteurs du médical, du juridique, de l'électronique et des télécoms sont ceux qui offrent le plus de débouchés et les rémunérations les plus attractives de toute la profession !",
            "pourquoi": "Dans ces domaines critiques, la moindre erreur de traduction peut engager des responsabilités financières de millions d'euros ou menacer la vie humaine.",
            "a_retenir": "Le traducteur technique est le copilote linguistique de l'industrie moderne."
        }
    },
    {
        "id": "linguiste-informaticien",
        "slug": "linguiste-informaticien",
        "title": "Linguiste Informaticien / Ingénieur TAL (NLP)",
        "aliases": [
            "Ingénieur en traitement automatique des langues",
            "Computational Linguist",
            "Expert NLP",
            "Spécialiste IA & Langage"
        ],
        "icon": "📜",
        "image": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Linguistique & Traitement du Langage",
        "domainId": "linguistique-tal",
        "subdomain": "Traitement automatique des langues (TAL / NLP)",
        "sectors": [
            "Intelligence artificielle",
            "Recherche linguistique",
            "Logiciels & Tech",
            "Télécoms"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": true,
        "level": "Bac +5 (Master Sciences du langage parcours TAL, Master Informatique & Linguistique) à Bac +8 (Doctorat)",
        "salary": "🇫🇷 France : 38 000 - 58 000 € brut/an (~2 600 - 4 200 € net/mois, forte demande tech) • 🇸🇳 Sénégal : 650 000 - 2 200 000 FCFA / mois",
        "simpleDefinition": "Le linguiste informaticien conçoit des modèles informatiques et des algorithmes capables de comprendre, d'analyser, de traduire et de générer le langage humain naturel (IA conversationnelle, moteurs de recherche, correcteurs, assistants vocaux).",
        "shortDescription": "Pionnier à la croisée des langues et de l'IA répertorié par Imagine ton Futur, il enseigne aux machines les subtilités du langage humain.",
        "longDescription": "Comme recensé dans la documentation d'Imagine ton Futur, le linguiste informaticien se situe à la confluence passionnante des humanités linguistiques et des sciences informatiques. Il formalise la grammaire, la morphologie, la syntaxe et la sémantique pour que les ordinateurs puissent traiter le texte et la parole. Il entraîne les grands modèles de langage (LLMs), annote des corpus textuels, conçoit des ontologies et améliore la précision des systèmes de reconnaissance vocale et de traduction automatique.",
        "mainObjective": "Modéliser la structure de la langue pour permettre aux systèmes d'intelligence artificielle de traiter le langage humain avec précision et nuance.",
        "companyRole": "Architecte de l'intelligence linguistique dans les produits technologiques et laboratoires de recherche.",
        "workEnvironment": [
            "💻 Entreprises d'IA, éditeurs de logiciels et géants de la tech",
            "🔬 Laboratoires de recherche universitaire (CNRS, Inria, IFAN)",
            "📱 Équipes de conception d'assistants vocaux et de moteurs de recherche"
        ],
        "missions": [
            "Constituer, nettoyer et annoter des corpus textuels et vocaux massifs pour l'entraînement d'algorithmes",
            "Développer des modèles de TAL (analyse de sentiments, extraction d'entités nommées, résumé automatique)",
            "Optimiser les prompts et l'alignement éthique des grands modèles de langage (RLHF)",
            "Créer des grammaires formelles et des ontologies sémantiques pour des domaines métiers spécifiques",
            "Évaluer la précision linguistique des modèles et corriger les biais sémantiques"
        ],
        "typicalDay": [
            {
                "time": "09:00",
                "title": "Analyse d'erreurs sur un classifieur textuel",
                "desc": "Identification des ambiguïtés syntaxiques causant de faux positifs dans la détection d'intentions utilisateurs."
            },
            {
                "time": "11:00",
                "title": "Session d'annotation sémantique",
                "desc": "Définition du guide d'annotation pour une équipe d'étiqueteurs sur des corpus de questions juridiques."
            },
            {
                "time": "14:00",
                "title": "Développement en Python / Hugging Face",
                "desc": "Fine-tuning d'un modèle Transformer (BERT / Mistral) pour la reconnaissance d'entités médicales."
            },
            {
                "time": "16:30",
                "title": "Réunion interdisciplinaire avec les data scientists",
                "desc": "Explication des phénomènes d'anaphore et de polysémie pour affiner l'architecture du réseau de neurones."
            }
        ],
        "skills": {
            "technical": [
                "Linguistique théorique approfondie (morphosyntaxe, sémantique formelle, phonétique)",
                "Programmation en Python orientée data et texte (NLTK, spaCy, Hugging Face, PyTorch)",
                "Architecture des modèles de langage (Transformers, Embeddings, Attention mechanisms)",
                "Méthodologie de constitution et d'alignement de corpus (XML/TEI, formats CoNLL)"
            ],
            "human": [
                "Capacité de conceptualisation abstraite et rigueur logique",
                "Sens de la passerelle interdisciplinaire entre littéraires et développeurs",
                "Curiosité pour les évolutions fulgurantes des technologies d'IA"
            ],
            "tools": [
                "Python (spaCy, NLTK, Transformers, LangChain)",
                "Logiciels d'annotation linguistique (Prodigy, Label Studio, Praat)",
                "Bases lexicales et ontologies (WordNet, BabelNet)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence (Bac +3)",
                    "title": "Licence Sciences du Langage avec parcours Informatique ou Licence MIASHS",
                    "desc": "Alliance des fondamentaux de la linguistique et des mathématiques/informatique."
                },
                {
                    "step": "Master professionnel / recherche (Bac +5)",
                    "title": "Master TAL (Traitement Automatique des Langues) ou Master Informatique parcours TAL",
                    "desc": "Formation de référence alliant deep learning, ingénierie linguistique et linguistique informatique."
                }
            ],
            "schools": [
                {
                    "name": "INALCO (Langues O' - Master TAL) — Paris, France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Sorbonne Nouvelle & Paris Nanterre (Master TAL) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Cheikh Anta Diop (UCAD - Master Informatique / Linguistique appliquée) — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certifications Hugging Face NLP",
                "DeepLearning.AI Natural Language Processing Specialization"
            ]
        },
        "career": {
            "sectors": [
                "Intelligence artificielle",
                "Moteurs de recherche & réseaux sociaux",
                "Santé & Pharmacie",
                "Défense & Sécurité"
            ],
            "employerTypes": [
                "Startups IA & Scale-ups",
                "Grands groupes technologiques",
                "Instituts de recherche publique"
            ],
            "evolution": [
                "Lead NLP Scientist",
                "Head of AI Product",
                "Directeur de recherche en linguistique computationnelle"
            ],
            "pros": [
                "Rémunération parmi les plus élevées des humanités",
                "Au cœur de la révolution technologique contemporaine"
            ],
            "cons": [
                "Nécessite une double compétence exigeante (littéraire + code mathématique)"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Créer avec Python et la bibliothèque spaCy un extracteur automatique d'entités nommées (personnes, lieux, dates) sur des articles de presse en français.",
            "steps": [
                "Suivre le tutoriel gratuit 'spaCy 101' en ligne",
                "Prendre en main Google Colab pour exécuter des modèles de langage pré-entraînés",
                "Participer à une compétition textuelle sur Kaggle"
            ],
            "freeResources": [
                "Course.spacy.io (Formation interactive gratuite au NLP)",
                "Hugging Face NLP Course"
            ]
        },
        "aiImpact": {
            "summary": "Le linguiste informaticien est l'artisan direct de la révolution des LLMs : son expertise est indispensable pour guider, évaluer et corriger les modèles de fondation.",
            "positiveImpacts": [
                "Explosion de la demande de compétences linguistiques dans l'industrie tech",
                "Rôle clé dans la réduction des hallucinations des IA"
            ],
            "risksAndChallenges": [
                "Obsolescence rapide des approches à base de règles au profit des modèles neuronaux massifs",
                "Nécessité de comprendre les architectures hardware de calcul"
            ],
            "recommendedSkills": [
                "Maîtrise des techniques de RAG (Retrieval-Augmented Generation)",
                "Prompt engineering avancé et techniques de 'fine-tuning' linguistique"
            ]
        },
        "africaContext": {
            "senegalInsight": "Le Sénégal est un pionnier africain du TAL pour les langues locales. Des initiatives d'envergure (IA en Wolof, Pulaar, Sérère) sont développées pour permettre aux populations non alphabétisées d'accéder aux services publics et financiers par la voix.",
            "westAfricaOpportunities": "Création de corpus vocaux et textuels pour les langues nationales ouest-africaines, traduction automatique vocale pour l'AgriTech et la Santé.",
            "localChampions": [
                "Laboratoire LERSTAD (UGB Saint-Louis)",
                "Projet Masakhane (NLP panafricain)",
                "Startups sénégalaises d'IA vocale (Baamtu, SunuCode)"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Fiche métier : Linguiste informaticien",
                "url": "https://www.imaginetonfutur.com/metier/linguiste-informaticien.html",
                "type": "metier"
            },
            {
                "organization": "ATALA (Association pour le Traitement Automatique des Langues)",
                "title": "Les formations et carrières en TAL",
                "url": "https://www.atala.org",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Pour qu'une IA comme ChatGPT ou Siri comprenne la différence entre 'Je prends un avocat pour me défendre' et 'Je mange un avocat avec de la vinaigrette', il a fallu l'expertise d'un linguiste informaticien pour désambiguïser la polysémie !",
            "pourquoi": "L'ordinateur ne voit que des suites de chiffres : seul le linguiste sait lui apprendre les règles sémantiques invisibles du contexte humain.",
            "a_retenir": "Le linguiste informaticien donne une conscience linguistique aux machines."
        }
    },
    {
        "id": "terminologue",
        "slug": "terminologue",
        "title": "Terminologue",
        "aliases": [
            "Gestionnaire terminologique",
            "Lexicographe technique",
            "Ingénieur terminologue",
            "Spécialiste du vocabulaire spécialisé"
        ],
        "icon": "📖",
        "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Linguistique & Traitement du Langage",
        "domainId": "linguistique-tal",
        "subdomain": "Terminologie, Lexicographie & Normalisation",
        "sectors": [
            "Organisations internationales",
            "Industrie",
            "Édition de dictionnaires",
            "Intelligence artificielle"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": false,
        "level": "Bac +5 (Master Terminologie et Traduction, Master Sciences du Langage)",
        "salary": "🇫🇷 France : 32 000 - 48 000 € brut/an (~2 200 - 3 400 € net/mois, Source : Imagine ton Futur) • 🇸🇳 Sénégal : 450 000 - 1 300 000 FCFA / mois",
        "simpleDefinition": "Le terminologue identifie, définit, classe et normalise les termes techniques et spécialisés d'un domaine d'activité (aéronautique, droit, médecine, IA), créant des dictionnaires et bases de données qui garantissent un vocabulaire unique sans ambiguïté.",
        "shortDescription": "Gardien de la précision conceptuelle recensé par Imagine ton Futur, il étudie les vocabulaires spécialisés pour les organisations internationales et industrielles.",
        "longDescription": "Comme décrit sur Imagine ton Futur, le terminologue analyse le vocabulaire propre à une discipline ou une entreprise pour éliminer les synonymes trompeurs et les imprécisions. Dans un monde où les technologies émergentes font naître des milliers de nouveaux concepts chaque année, il invente ou valide les néologismes, rédige des définitions normatives et alimente les bases terminologiques multilingues utilisées par les ingénieurs, les juristes et les traducteurs du monde entier.",
        "mainObjective": "Créer et maintenir des bases terminologiques multilingues rigoureuses pour harmoniser le langage au sein des organisations complexes.",
        "companyRole": "Garant de l'unicité du vocabulaire et de la clarté conceptuelle des communications spécialisées.",
        "workEnvironment": [
            "🏛️ Organisations internationales (Commission Européenne - IATE, ONU, UNESCO, OIF)",
            "🏭 Grands groupes industriels (normes aéronautiques, biotechnologies, pharmacie)",
            "📚 Instituts linguistiques et commissions officielles de terminologie"
        ],
        "missions": [
            "Dépouiller des corpus de documents techniques pour extraire les termes émergents (extraction terminologique)",
            "Rédiger des fiches terminologiques complètes (définitions, contextes d'usage, équivalents multilingues, relations conceptuelles)",
            "Harmoniser les vocabulaires techniques et éliminer les faux-amis ou doublons conceptuels",
            "Créer des néologismes francophones en concertation avec les académies et commissions officielles",
            "Administrer les bases de données terminologiques connectées aux outils de traduction assistée par ordinateur"
        ],
        "typicalDay": [
            {
                "time": "09:00",
                "title": "Extraction terminologique sur textes d'énergie verte",
                "desc": "Analyse assistée par logiciel d'un corpus de 500 pages sur l'hydrogène vert pour repérer les nouveaux termes."
            },
            {
                "time": "11:30",
                "title": "Rédaction de fiches terminologiques",
                "desc": "Rédaction de définitions rigoureuses pour 5 concepts naissants et recherche des équivalents en anglais, espagnol et allemand."
            },
            {
                "time": "14:30",
                "title": "Commission de normalisation linguistique",
                "desc": "Débat avec des experts scientifiques pour valider la proposition d'un terme français officiel en remplacement d'un anglicisme."
            },
            {
                "time": "16:30",
                "title": "Mise à jour de la base de données internationale",
                "desc": "Validation et publication des nouvelles entrées terminologiques dans le portail partagé des traducteurs."
            }
        ],
        "skills": {
            "technical": [
                "Méthodologie de la recherche terminologique ponctuelle et thématique",
                "Linguistique outillée et utilisation de logiciels d'extraction automatique (TermoStat, Synapsy)",
                "Conception d'arbres de domaine et modélisation ontologique de concepts",
                "Maîtrise des standards d'échange terminologique (TBX, ISO 30042)"
            ],
            "human": [
                "Rigueur analytique et obsession pour la définition exacte",
                "Sens de la négociation pour faire adopter des termes consensuels par les experts métiers",
                "Esprit de synthèse et haute curiosité scientifique"
            ],
            "tools": [
                "Logiciels de gestion terminologique (SDL MultiTerm, TermWeb)",
                "Bases mondiales de référence (IATE, Grand Dictionnaire Terminologique de l'OQLF, Termium Plus)",
                "Outils de concordancier et d'analyse de corpus (AntConc, Sketch Engine)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence (Bac +3)",
                    "title": "Licence Sciences du Langage, LEA ou Information-Communication",
                    "desc": "Bases de la linguistique descriptive, de la lexicologie et pratique de deux langues étrangères."
                },
                {
                    "step": "Master professionnel (Bac +5)",
                    "title": "Master Ingénierie Terminologique, Traduction & Gestion de Contenu",
                    "desc": "Formation spécialisée en gestion de bases de données terminologiques, ontologies et néologie."
                }
            ],
            "schools": [
                {
                    "name": "Université Rennes 2 (Master Traduction et Terminologie) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut National des Langues et Civilisations Orientales (INALCO) — Paris, France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Cheikh Anta Diop (UCAD - FLSH / Département de Linguistique) — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certificat de Terminologie de l'Association Européenne de Terminologie (EAFT)"
            ]
        },
        "career": {
            "sectors": [
                "Institutions multilatérales",
                "Industrie pharmaceutique et automobile",
                "Grandes banques et assurances",
                "Éditeurs de logiciels"
            ],
            "employerTypes": [
                "Institutions publiques internationales",
                "Cabinets de conseil terminologique",
                "Grandes entreprises"
            ],
            "evolution": [
                "Responsable de la gouvernance des données terminologiques",
                "Chef de projet en ingénierie linguistique",
                "Directeur de la communication institutionnelle"
            ],
            "pros": [
                "Rôle d'autorité intellectuelle respecté dans les grandes organisations",
                "Activité intellectuelle stimulante et structurante"
            ],
            "cons": [
                "Métier parfois méconnu du grand public",
                "Nécessite de convaincre de l'importance de la rigueur lexicale"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Constituer une base de données terminologique de 30 termes sur un domaine novateur (par exemple les batteries solides ou la finance décentralisée) avec définitions et contextes d'usage.",
            "steps": [
                "Explorer la base européenne IATE en libre accès (iate.europa.eu)",
                "Apprendre à rédiger une définition selon la norme ISO 704",
                "Créer son premier fichier d'export au format TBX"
            ],
            "freeResources": [
                "IATE (Base terminologique de l'UE)",
                "Grand Dictionnaire Terminologique (GDT - Québec)"
            ]
        },
        "aiImpact": {
            "summary": "La terminologie est le pilier indispensable pour guider les IA d'entreprise : sans vocabulaire contrôlé et ontologies créées par des terminologues, les LLMs génèrent des contresens coûteux.",
            "positiveImpacts": [
                "Automatisation de l'extraction de candidats termes par les algorithmes",
                "Revalorisation du rôle de terminologue comme garant de la vérité terrain pour les IA"
            ],
            "risksAndChallenges": [
                "Prolifération de termes générés sans validation humaine",
                "Nécessité de maîtriser les graphes de connaissances (Knowledge Graphs)"
            ],
            "recommendedSkills": [
                "Modélisation d'ontologies sémantiques (OWL, Protégé)",
                "Connexion entre bases terminologiques et architectures RAG d'entreprises"
            ]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la terminologie joue un rôle stratégique dans la modernisation des langues nationales (Wolof, Pulaar, Sérère) pour transcrire le vocabulaire médical, juridique, agricole et numérique sans recourir systématiquement au français.",
            "westAfricaOpportunities": "Commissions nationales de terminologie de l'Académie Africaine des Langues (ACALAN), harmonisation terminologique de l'OHADA en droit des affaires.",
            "localChampions": [
                "Centre de Linguistique Appliquée de Dakar (CLAD - UCAD)",
                "Académie Africaine des Langues (ACALAN - Union Africaine)",
                "Secrétariat Général de l'OHADA"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Fiche métier : Terminologue",
                "url": "https://www.imaginetonfutur.com/metier/terminologue.html",
                "type": "metier"
            },
            {
                "organization": "Délégation générale à la langue française et aux langues de France (DGLFLF)",
                "title": "Dispositif d'enrichissement de la langue française",
                "url": "https://www.culture.gouv.fr/DGLFLF",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "La base terminologique officielle IATE de l'Union Européenne compte plus de 8 millions de termes répartis dans les 24 langues officielles de l'Union !",
            "pourquoi": "Sans cette normalisation rigoureuse assurée au quotidien par des terminologues, les lois européennes seraient inapplicables et créeraient des contentieux juridiques permanents.",
            "a_retenir": "Le terminologue donne des frontières nettes aux idées."
        }
    },
    {
        "id": "historien",
        "slug": "historien",
        "title": "Historien / Chercheur en Histoire",
        "aliases": [
            "Enseignant-chercheur en histoire",
            "Historien consultant",
            "Historien d'entreprise",
            "Médiateur de la mémoire"
        ],
        "icon": "🏛️",
        "image": "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Histoire & Patrimoine",
        "domainId": "histoire-patrimoine",
        "subdomain": "Recherche historique & Valorisation mémorielle",
        "sectors": [
            "Recherche scientifique",
            "Enseignement supérieur",
            "Patrimoine & Musées",
            "Médias & Conseil"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": false,
        "level": "Bac +5 (Master Recherche Histoire) à Bac +8 (Doctorat en Histoire / Thèse)",
        "salary": "🇫🇷 France : 2 200 - 4 200 € net/mois (Maître de conférences / Chercheur CNRS, Source : Imagine ton Futur) • 🇸🇳 Sénégal : 450 000 - 1 500 000 FCFA / mois (UCAD, Enseignement supérieur & Recherche)",
        "simpleDefinition": "L'historien étudie, analyse et interprète les événements, les sociétés, les cultures et les mentalités du passé en examinant méthodiquement des sources d'époque (manuscrits, archives, photographies, témoignages oraux) pour éclairer les enjeux du présent.",
        "shortDescription": "Analyste rigoureux du temps long décrit par Imagine ton Futur, l'historien interroge les archives pour comprendre la trajectoire des sociétés.",
        "longDescription": "Comme l'indique la fiche d'Imagine ton Futur, l'historien se consacre à l'enseignement et à la recherche après de longues études universitaires. Il passe de nombreuses heures dans les centres d'archives et bibliothèques pour déchiffrer des documents inédits, en croiser la véracité et contextualiser les faits. Loin de répéter des légendes, il applique une critique des sources impitoyable pour reconstituer les dynamiques économiques, politiques, culturelles et humaines du passé, partageant ses découvertes via des publications scientifiques, des documentaires et des cours universitaires.",
        "mainObjective": "Reconstituer et expliquer les faits et processus du passé à travers une critique rigoureuse des sources documentaires et matérielles.",
        "companyRole": "Garant de la vérité historique, de la profondeur d'analyse et de la transmission de la mémoire collective.",
        "workEnvironment": [
            "🏛️ Universités et laboratoires de recherche (CNRS, IFAN Ch. Anta Diop)",
            "📚 Centres d'archives nationales, départementales et bibliothèques patrimoniales",
            "📺 Médias, maisons de production de documentaires et musées"
        ],
        "missions": [
            "Explorer et déchiffrer des sources primaires (archives écrites, traités, correspondance, registres fiscaux)",
            "Pratiquer la critique historique externe (authenticité) et interne (crédibilité et biais de l'auteur)",
            "Rédiger des articles de recherche évalués par les pairs, des essais et des monographies historiques",
            "Transmettre le savoir à travers des cours magistraux, conférences et séminaires universitaires",
            "Conseiller les créateurs de fictions historiques (cinéma, séries, romans, jeux vidéo) ou les entreprises sur leur patrimoine historique"
        ],
        "typicalDay": [
            {
                "time": "09:00",
                "title": "Dépouillement d'archives aux Archives Nationales",
                "desc": "Lecture et retranscription de registres de commerce maritime du XVIIIe siècle pour analyser les flux marchands."
            },
            {
                "time": "12:00",
                "title": "Séminaire de recherche doctoral",
                "desc": "Débat méthodologique avec des collègues et doctorants sur les nouvelles approches de l'histoire environnementale."
            },
            {
                "time": "14:30",
                "title": "Rédaction d'un article scientifique",
                "desc": "Rédaction d'un chapitre pour une revue internationale sur l'histoire des épidémies et de la santé publique."
            },
            {
                "time": "17:00",
                "title": "Intervention média / vulgarisation",
                "desc": "Enregistrement d'un podcast d'histoire grand public pour expliquer la genèse historique d'un conflit géopolitique actuel."
            }
        ],
        "skills": {
            "technical": [
                "Méthode historienne rigoureuse (critique des sources, contextualisation, historiographie)",
                "Paléographie (capacité à lire les écritures anciennes manuscrites)",
                "Connaissance des langues anciennes et modernes utiles à la période étudiée (latin, grec, arabe, langues régionales)",
                "Humanités numériques (traitement de bases de données historiques, cartographie historique SIG)"
            ],
            "human": [
                "Patience infinie, esprit critique aiguisé et rigueur d'enquêteur",
                "Capacité de synthèse remarquable pour relier des faits disparates",
                "Talent de pédagogue et clarté de transmission orale et écrite"
            ],
            "tools": [
                "Logiciels de gestion bibliographique (Zotero, Mendeley)",
                "Outils de reconnaissance d'écriture manuscrite par IA (Transkribus)",
                "Systèmes d'Information Géographique historiques (QGIS, ArcGIS)",
                "Bases de données patrimoniales et archives numérisées (Gallica, Europeana, Archives Nationales d'Outre-Mer)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence (Bac +3)",
                    "title": "Licence d'Histoire ou bi-licence Histoire / Sciences Politiques",
                    "desc": "Panorama des quatre grandes périodes (ancienne, médiévale, moderne, contemporaine) et méthode documentaire."
                },
                {
                    "step": "Master Recherche (Bac +5)",
                    "title": "Master Histoire et Civilisations",
                    "desc": "Premier mémoire de recherche original sur archives inédites et séminaires méthodologiques."
                },
                {
                    "step": "Doctorat (Bac +8)",
                    "title": "Doctorat en Histoire (Thèse de 3 à 4 ans)",
                    "desc": "Recherche doctorale majeure donnant accès aux concours d'enseignant-chercheur ou de chercheur CNRS."
                }
            ],
            "schools": [
                {
                    "name": "Université Panthéon-Sorbonne (Paris 1) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École des Hautes Études en Sciences Sociales (EHESS) — Paris, France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Cheikh Anta Diop (UCAD - Département d'Histoire de la FLSH) — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Agrégation d'Histoire (concours d'enseignement d'excellence)",
                "Habilitation à Diriger des Recherches (HDR)"
            ]
        },
        "career": {
            "sectors": [
                "Enseignement supérieur & Recherche",
                "Enseignement secondaire",
                "Institutions patrimoniales & Musées",
                "Médias & Édition"
            ],
            "employerTypes": [
                "Universités publiques",
                "CNRS / Instituts de recherche",
                "Ministère de la Culture",
                "Sociétés de production"
            ],
            "evolution": [
                "Professeur des universités",
                "Directeur de laboratoire de recherche",
                "Commissaire scientifique d'exposition historique",
                "Directeur de musée historique"
            ],
            "pros": [
                "Passion intellectuelle absolue et satisfaction de découvrir des faits oubliés",
                "Utilité citoyenne pour éclairer le débat public"
            ],
            "cons": [
                "Nombre de postes académiques limités et concours très exigeants",
                "Travail de recherche long et exigeant"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Reconstituer l'histoire d'un lieu ou d'un événement local méconnu à partir de 3 sources d'archives numérisées en libre accès sur Gallica ou les archives départementales.",
            "steps": [
                "Se former à la recherche dans les bases de données d'archives en ligne",
                "Lire un classique de méthode historique (ex: 'Apologie pour l'histoire ou Métier d'historien' de Marc Bloch)",
                "Rédiger une synthèse de 5 pages en citant scrupuleusement ses sources en notes de bas de page"
            ],
            "freeResources": [
                "Gallica (Bibliothèque Nationale de France)",
                "Retronews (Presse historique numérisée)"
            ]
        },
        "aiImpact": {
            "summary": "L'IA transforme l'accès aux archives grâce à la transcription automatique d'écritures manuscrites (Transkribus) et la recherche vectorielle, permettant d'analyser des millions de pages en quelques secondes.",
            "positiveImpacts": [
                "Déchiffrement rapide de milliers de manuscrits anciens manuscrits",
                "Visualisation de réseaux historiques complexes"
            ],
            "risksAndChallenges": [
                "Risque d'anachronisme si l'on fait confiance à des résumés automatisés sans vérifier les sources",
                "Hallucinations de faux faits historiques par les LLMs"
            ],
            "recommendedSkills": [
                "Maîtrise des outils d'humanités numériques et de transcription assistée",
                "Esprit critique redoublé pour déjouer les fausses affirmations historiques"
            ]
        },
        "africaContext": {
            "senegalInsight": "Le Sénégal est au cœur de l'historiographie africaine grâce à l'œuvre monumentale du Pr Cheikh Anta Diop (antériorité des civilisations noires, Égypte antique). L'Institut Fondamental d'Afrique Noire (IFAN Ch. Anta Diop) à l'UCAD demeure un pôle mondial de recherche sur l'histoire et les civilisations africaines.",
            "westAfricaOpportunities": "Histoire de la traite négrière et de la colonisation (Île de Gorée), histoire des royaumes précoloniaux (Djolof, Cayor, Fouta), décolonisation et archives orales.",
            "localChampions": [
                "IFAN Cheikh Anta Diop (Dakar)",
                "Archives Nationales du Sénégal",
                "Maison des Esclaves de Gorée"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Fiche métier : Historien",
                "url": "https://www.imaginetonfutur.com/metier/historien.html",
                "type": "metier"
            },
            {
                "organization": "Comité Français des Sciences Historiques",
                "title": "Les métiers de l'histoire et de la recherche",
                "url": "https://www.cfsh.fr",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "La prestigieuse collection de l''Histoire Générale de l'Afrique', rédigée sous l'égide de l'UNESCO sur 30 ans par les plus éminents historiens africains, compte 8 volumes monumentaux déconstruisant les préjugés coloniaux !",
            "pourquoi": "Ce projet scientifique historique a rendu aux peuples africains leur place légitime au cœur du récit de l'humanité.",
            "a_retenir": "Celui qui comprend son passé éclaire le chemin de son avenir."
        }
    },
    {
        "id": "archiviste",
        "slug": "archiviste",
        "title": "Archiviste / Record Manager",
        "aliases": [
            "Conservateur des archives",
            "Gestionnaire d'archives numériques",
            "Records Manager d'entreprise",
            "Responsable de fonds patrimoniaux"
        ],
        "icon": "📦",
        "image": "https://images.unsplash.com/photo-1507842229458-577884d08332?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Histoire & Patrimoine",
        "domainId": "histoire-patrimoine",
        "subdomain": "Archives, Conservation & Records Management",
        "sectors": [
            "Patrimoine public",
            "Grandes entreprises & Banques",
            "Institutions judiciaires",
            "Numérique"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": false,
        "level": "Bac +3 (Licence Pro Archives) à Bac +5 (Master Métiers des Archives, École Nationale des Chartes, EBAD)",
        "salary": "🇫🇷 France : 2 000 - 3 500 € brut/mois (Fonction publique d'État/territoriale ou grandes entreprises) • 🇸🇳 Sénégal : 350 000 - 1 100 000 FCFA / mois (Diplômés EBAD très recherchés)",
        "simpleDefinition": "L'archiviste collecte, trie, classe, conserve, sécurise et rend accessibles les documents historiques et administratifs (papier et numériques) produits par les administrations, les entreprises ou les particuliers, garantissant la traçabilité juridique et la mémoire collective.",
        "shortDescription": "Sentinelle de la mémoire et de la preuve juridique, il organise et pérennise le patrimoine documentaire à l'ère numérique.",
        "longDescription": "L'archiviste applique la célèbre règle des '4C' : Collecter, Classer, Conserver et Communiquer. Loin de l'image poussiéreuse du passé, l'archiviste moderne est un gestionnaire d'information stratégique. Il pilote le Records Management en entreprise pour garantir la valeur probante des contrats, préserve les archives historiques multiséculaires contre la détérioration physique et met en place des plateformes d'archivage électronique pérennes certifiées.",
        "mainObjective": "Assurer la conservation pérenne et l'accessibilité méthodique des archives historiques et contemporaines pour la preuve de droit et la recherche.",
        "companyRole": "Garant de la conformité légale documentaire et de la pérennité de la mémoire organisationnelle.",
        "workEnvironment": [
            "🏛️ Archives Nationales, Départementales et Municipales",
            "🏢 Sièges de grandes banques, groupes industriels et hôpitaux",
            "💻 Salles de serveurs sécurisées et systèmes d'archivage électronique (SAE)"
        ],
        "missions": [
            "Élaborer les tableaux de gestion et chartes d'archivage (durées d'utilité administrative et critères d'élimination)",
            "Classer les fonds selon les principes archivistiques (respect des fonds) et rédiger des inventaires normés",
            "Veiller aux conditions physiques de conservation (température, hygrométrie, protection contre les nuisibles)",
            "Déployer des systèmes d'archivage électronique pérenne (SAE) conformes à la norme ISO 14721 (OAIS)",
            "Accueillir, orienter et conseiller les chercheurs et citoyens dans la consultation des documents"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Contrôle des versements administratifs",
                "desc": "Réception de 50 boîtes d'archives d'un tribunal, vérification des bordereaux et tri des pièces éliminables."
            },
            {
                "time": "11:00",
                "title": "Numérisation et métadonnées",
                "desc": "Indexation de parchemins numérisés sous la norme internationale de description archivistique ISAD(G)."
            },
            {
                "time": "14:00",
                "title": "Audit Records Management en entreprise",
                "desc": "Intervention auprès de la direction juridique d'une banque pour auditer la politique de conservation des contrats numériques."
            },
            {
                "time": "16:30",
                "title": "Atelier pédagogique / accueil du public",
                "desc": "Animation d'un atelier d'initiation à la recherche généalogique pour un groupe de lycéens."
            }
        ],
        "skills": {
            "technical": [
                "Théorie et pratique de l'archivistique (principe de provenance, respect des fonds, diplomatique)",
                "Normes internationales de description archivistique (ISAD(G), ISAAR(CPF), EAD, RiC-CM)",
                "Archivage électronique pérenne et formats de conservation numérique (PDF/A, TIFF, XML)",
                "Droit des archives, accès aux documents administratifs et RGPD"
            ],
            "human": [
                "Rigueur méthodique absolue et sens aigu de l'organisation",
                "Sens du service public et goût pour la transmission du savoir",
                "Discrétion professionnelle et respect de la confidentialité des données privées"
            ],
            "tools": [
                "Logiciels de gestion d'archives (Avenio, Ligéo, Thot, AtoM - Access to Memory)",
                "Systèmes d'Archivage Électronique SAE (Asalae, Alfresco, Maarch)",
                "Outils de numérisation patrimoniale et scanners haute définition"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence (Bac +3)",
                    "title": "Licence Histoire ou Licence Pro Métiers de l'Information et des Archives",
                    "desc": "Bases historiques, méthodologie documentaire et droit public."
                },
                {
                    "step": "Master professionnel (Bac +5)",
                    "title": "Master Gestion des Archives et Records Management ou Diplôme de l'École des Chartes",
                    "desc": "Formation de haut niveau en archivistique contemporaine, archives numériques et paléographie."
                }
            ],
            "schools": [
                {
                    "name": "École Nationale des Chartes — Paris, France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université d'Angers / Université Paris 8 (Master Archives) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "EBAD (École de Bibliothécaires, Archivistes et Documentalistes - UCAD) — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Concours de Conservateur du Patrimoine (spécialité Archives)",
                "Certification Records Manager (ARMA / ICA)"
            ]
        },
        "career": {
            "sectors": [
                "Fonction publique d'État et territoriale",
                "Grandes entreprises (Banques, Énergie, Luxe)",
                "Organisations internationales",
                "Prestataires d'archivage"
            ],
            "employerTypes": [
                "Services d'archives publiques",
                "Directions juridiques de multinationales",
                "Sociétés de numérisation"
            ],
            "evolution": [
                "Directeur d'archives départementales/nationales",
                "Chief Information Officer (CIO)",
                "Directeur de la gouvernance des données"
            ],
            "pros": [
                "Rôle essentiel de garant des droits et de l'histoire",
                "Très forte insertion professionnelle pour les diplômés spécialisés"
            ],
            "cons": [
                "Poussière et manipulation de charges lourdes lors des inventaires physiques",
                "Budget parfois sous-estimé par les organisations"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Organiser et inventorier les archives familiales ou associatives sur 3 générations en créant un tableau de classement Excel normé.",
            "steps": [
                "Découvrir la norme de description ISAD(G) sur le site des Archives de France",
                "Visiter les archives départementales les plus proches lors des Journées du Patrimoine",
                "Se renseigner sur les formations de l'Association des Archivistes Français (AAF)"
            ],
            "freeResources": [
                "FranceArchives (Portail national des archives françaises)",
                "ICA (Conseil International des Archives)"
            ]
        },
        "aiImpact": {
            "summary": "L'IA révolutionne l'indexation des archives grâce à la reconnaissance de texte manuscrit (HTR), la classification automatique et la détection d'entités nommées dans des millions de documents.",
            "positiveImpacts": [
                "Automatisation des tâches de métadonnées chronophages",
                "Recherche plein texte dans des manuscrits vieux de cinq siècles"
            ],
            "risksAndChallenges": [
                "Obsolescence des formats numériques nécessitant une veille technologique constante",
                "Risque de perte de contexte dans le classement algorithmique"
            ],
            "recommendedSkills": [
                "Maîtrise des formats d'encadrement des métadonnées ouvertes (Linked Open Data)",
                "Gouvernance des données et archivage conforme aux normes d'audit"
            ]
        },
        "africaContext": {
            "senegalInsight": "L'EBAD (École de Bibliothécaires, Archivistes et Documentalistes de l'UCAD à Dakar) est l'école panafricaine de référence historique créée en 1967, formant l'élite des archivistes de plus de 25 pays d'Afrique francophone.",
            "westAfricaOpportunities": "Modernisation et numérisation des archives de l'Afrique Occidentale Française (fonds de l'AOF conservé à Dakar, trésor mondial unique).",
            "localChampions": [
                "Direction des Archives du Sénégal (Fonds AOF)",
                "EBAD de l'Université Cheikh Anta Diop",
                "Banque Centrale des États de l'Afrique de l'Ouest (BCEAO)"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Secteur Information, communication & Métiers du Livre",
                "url": "https://www.imaginetonfutur.com/les-metiers/domaine/information-communication.html",
                "type": "metier"
            },
            {
                "organization": "Association des Archivistes Français (AAF)",
                "title": "Le métier d'archiviste aujourd'hui",
                "url": "https://www.archivistes.org",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Les Archives Nationales du Sénégal à Dakar conservent le fond historique de l'Afrique Occidentale Française (AOF), soit plus de 15 kilomètres linéaires de documents historiques inestimables retraçant l'histoire de 8 pays de la région !",
            "pourquoi": "Ces documents sont classés au Registre Mémoire du Monde de l'UNESCO pour leur valeur universelle exceptionnelle.",
            "a_retenir": "Sans archives, il n'y a ni preuve de droit pour le citoyen, ni histoire pour la nation."
        }
    },
    {
        "id": "conservateur-patrimoine",
        "slug": "conservateur-patrimoine",
        "title": "Conservateur du Patrimoine",
        "aliases": [
            "Conservateur en chef",
            "Directeur de musée patrimonial",
            "Conservateur des monuments historiques",
            "Responsable scientifique de collections"
        ],
        "icon": "🏛️",
        "image": "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Histoire & Patrimoine",
        "domainId": "histoire-patrimoine",
        "subdomain": "Conservation & Valorisation patrimoniale",
        "sectors": [
            "Musées",
            "Monuments historiques",
            "Ministère de la Culture",
            "Collectivités territoriales"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": false,
        "level": "Bac +5 (Master Histoire de l'art / Archéologie / Histoire) + Concours d'élite INP (Institut National du Patrimoine)",
        "salary": "🇫🇷 France : 2 400 - 4 500 € net/mois (Cadre A+ de la Fonction publique d'État/territoriale, Source : Imagine ton Futur) • 🇸🇳 Sénégal : 500 000 - 1 600 000 FCFA / mois",
        "simpleDefinition": "Le conservateur du patrimoine étudie, inventorie, enrichit, protège, restaure et valorise les trésors du patrimoine public (œuvres d'art, monuments historiques, objets archéologiques, archives) pour les transmettre aux générations futures.",
        "shortDescription": "Haut fonctionnaire scientifique et gardien des trésors collectifs documenté par Imagine ton Futur, il pilote la politique culturelle des musées et sites historiques.",
        "longDescription": "Comme décrit dans les ressources officielles d'Imagine ton Futur sur les métiers du patrimoine et des musées, le conservateur du patrimoine est un scientifique de haut niveau doublé d'un gestionnaire public. Spécialisé dans l'une des spécialités d'État (Archéologie, Archives, Monuments historiques, Musées ou Patrimoine scientifique), il décide de l'acquisition de nouvelles œuvres, supervise les chantiers de restauration délicats et conçoit les grandes expositions temporaires pour instruire et émerveiller le public.",
        "mainObjective": "Assurer la préservation scientifique, juridique et physique du patrimoine culturel national et concevoir sa mise en valeur auprès du grand public.",
        "companyRole": "Responsable scientifique et directeur stratégique d'institutions muséales et de sites patrimoniaux.",
        "workEnvironment": [
            "🏛️ Grands musées nationaux, châteaux et sites archéologiques",
            "🔬 Ateliers de restauration d'œuvres et laboratoires de recherche des musées",
            "🏢 Ministères de la Culture et directions régionales des affaires culturelles (DRAC)"
        ],
        "missions": [
            "Inventorier, documenter et récolement scientifique des collections publiques",
            "Diriger la politique d'acquisition d'œuvres nouvelles et négocier les préemptions en ventes publiques",
            "Superviser les chantiers de restauration et veiller à la conservation préventive des œuvres",
            "Concevoir le commissariat scientifique d'expositions nationales et internationales",
            "Publier des catalogues scientifiques de référence et animer la recherche universitaire"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Inspection d'une salle de musée en conservation préventive",
                "desc": "Relevé des hygromètres et luxmètres dans la galerie des peintures anciennes pour prévenir toute dégradation."
            },
            {
                "time": "11:00",
                "title": "Comité d'acquisition d'œuvres d'art",
                "desc": "Défense scientifique d'un projet d'achat d'un tableau du XVIIe siècle auprès du conseil d'administration."
            },
            {
                "time": "14:30",
                "title": "Visite d'atelier avec les restaurateurs agréés",
                "desc": "Validation du protocole de nettoyage et de rentoilage d'une fresque historique."
            },
            {
                "time": "17:00",
                "title": "Réunion scénographie pour la future exposition",
                "desc": "Arbitrage des textes de médiation, de l'éclairage et du parcours visiteur avec les scénographes."
            }
        ],
        "skills": {
            "technical": [
                "Érudition exceptionnelle en histoire de l'art, archéologie ou histoire",
                "Principes scientifiques de conservation préventive et curative des matériaux",
                "Droit du patrimoine public, législation des trésors nationaux et marchés publics",
                "Muséographie contemporaine et médiation des collections"
            ],
            "human": [
                "Sensibilité esthétique raffinée et rigueur scientifique sans compromis",
                "Leadership managérial et compétences de pilotage budgétaire d'envergure",
                "Aisance oratoire et diplomatie auprès des mécènes et élus"
            ],
            "tools": [
                "Bases de données patrimoniales nationales (Joconde, POP - Plateforme Ouverte du Patrimoine)",
                "Logiciels de gestion de collections muséales (Skin/Micromusée, ActiMuséo)",
                "Instruments de mesure physique (enregistreurs thermo-hygromètres, luxmètres UV)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence & Master (Bac +5)",
                    "title": "Master Histoire de l'art, Archéologie ou École du Louvre",
                    "desc": "Haute spécialisation dans une aire chrono-culturelle et pratique de 2 langues étrangères."
                },
                {
                    "step": "Concours & Formation d'élite (Bac +6)",
                    "title": "Institut National du Patrimoine (INP - 18 mois)",
                    "desc": "Concours parmi les plus sélectifs de la fonction publique (taux de réussite < 5%) suivi d'une formation rémunérée."
                }
            ],
            "schools": [
                {
                    "name": "Institut National du Patrimoine (INP) — Paris, France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École du Louvre — Paris, France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut Fondamental d'Afrique Noire (IFAN Ch. Anta Diop / Musée Théodore Monod) — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Titre de Conservateur d'État ou Territorial du Patrimoine",
                "Habilitation de régie des œuvres d'art"
            ]
        },
        "career": {
            "sectors": [
                "Musées de France",
                "Monuments nationaux",
                "Directions régionales des affaires culturelles (DRAC)",
                "Fondations privées de prestige"
            ],
            "employerTypes": [
                "Ministère de la Culture",
                "Grandes métropoles régionales",
                "Institutions muséales internationales"
            ],
            "evolution": [
                "Conservateur général du patrimoine",
                "Directeur d'un grand musée national (Louvre, Orsay, Quai Branly)",
                "Inspecteur général des patrimoines"
            ],
            "pros": [
                "Prestige intellectuel incomparable et contact quotidien intime avec les chefs-d'œuvre",
                "Statut protégé de haut fonctionnaire"
            ],
            "cons": [
                "Concours d'entrée exceptionnellement difficile",
                "Lourdes responsabilités administratives et budgétaires"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser une fiche d'inventaire scientifique détaillée d'une œuvre patrimoniale locale selon la grille descriptive du ministère de la Culture.",
            "steps": [
                "Visiter régulièrement les musées et analyser l'accrochage et les cartels explicatifs",
                "Consulter les annales des épreuves du concours de l'INP sur inp.fr",
                "Effectuer un stage de régie ou de documentation dans un musée municipal"
            ],
            "freeResources": [
                "POP (Plateforme Ouverte du Patrimoine du Ministère de la Culture)",
                "INP.fr (Institut National du Patrimoine)"
            ]
        },
        "aiImpact": {
            "summary": "L'IA assiste la recherche de provenances d'œuvres, la détection des faussaires par analyse spectrale et la modélisation 3D de monuments disparus, renforçant le rôle décisionnel du conservateur.",
            "positiveImpacts": [
                "Reconstitution virtuelle immersive de sites historiques détruits",
                "Croisement ultra-rapide des catalogues de ventes mondiales pour tracer les spoliations"
            ],
            "risksAndChallenges": [
                "Multiplication de faux générés par IA reproduisant la patine des maîtres anciens",
                "Nécessité d'expertises matérielles physiques irréfutables"
            ],
            "recommendedSkills": [
                "Technologies d'analyse physico-chimique non invasive",
                "Éthique de la restitution patrimoniale et de la traçabilité numérique"
            ]
        },
        "africaContext": {
            "senegalInsight": "Dakar abrite le Musée des Civilisations Noires (MCN), l'un des musées les plus modernes du continent inauguré en 2018, ainsi que le Musée Théodore Monod d'Art Africain (IFAN). Les conservateurs sénégalais sont aux avant-postes du débat mondial sur la restitution des biens culturels africains.",
            "westAfricaOpportunities": "Muséographie contemporaine, conservation du patrimoine matériel et immatériel, gestion de réserves muséales sécurisées.",
            "localChampions": [
                "Musée des Civilisations Noires (MCN de Dakar)",
                "Musée Théodore Monod d'Art Africain (IFAN)",
                "Musée Historique de Gorée"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Secteur Art, culture, audiovisuel & Patrimoine",
                "url": "https://www.imaginetonfutur.com/les-metiers/domaine/art-culture-audiovisuel.html",
                "type": "metier"
            },
            {
                "organization": "Institut National du Patrimoine (INP)",
                "title": "Le métier de conservateur du patrimoine",
                "url": "https://www.inp.fr",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Le Musée des Civilisations Noires de Dakar, d'une superficie de 14 000 m², a été conçu pour accueillir les œuvres restituées par les musées occidentaux dans des conditions de conservation préventive équivalentes aux plus grands musées du monde !",
            "pourquoi": "Ses salles régulées climatiquement permettent de conserver masques en bois, textiles royaux et bronzes séculaires dans des conditions parfaites.",
            "a_retenir": "Le conservateur est le relais sacré qui permet aux œuvres du passé de traverser les siècles intactes."
        }
    },
    {
        "id": "archeologue",
        "slug": "archeologue",
        "title": "Archéologue",
        "aliases": [
            "Archéologue de terrain",
            "Archéologue préventif",
            "Chercheur en archéologie",
            "Archéo-anthropologue"
        ],
        "icon": "🏺",
        "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Archéologie",
        "domainId": "archeologie",
        "subdomain": "Archéologie de terrain & préventive",
        "sectors": [
            "Recherche scientifique",
            "Aménagement du territoire",
            "Patrimoine & Culture",
            "Enseignement"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": false,
        "level": "Bac +5 (Master Archéologie) à Bac +8 (Doctorat en Archéologie)",
        "salary": "🇫🇷 France : 1 900 - 3 200 € net/mois (INRAP, universités, CNRS, Source : Imagine ton Futur) • 🇸🇳 Sénégal : 400 000 - 1 400 000 FCFA / mois (IFAN, Laboratoire d'Archéologie)",
        "simpleDefinition": "L'archéologue exhume, enregistre, analyse et interprète les vestiges matériels laissés par les civilisations disparues (céramiques, ossements, fondations, outils, monnaies) pour reconstituer l'histoire humaine.",
        "shortDescription": "Enquêteur du sous-sol répertorié par Imagine ton Futur, il fouille la terre pour reconstituer le quotidien des civilisations passées.",
        "longDescription": "Comme décrit sur la fiche officielle d'Imagine ton Futur, l'archéologue ne passe pas sa vie à vivre des aventures romanesques à la Indiana Jones : son quotidien est celui d'un scientifique méthodique. Qu'il travaille en archéologie préventive (avant la construction d'une autoroute ou d'un tramway) ou en fouille programmée de recherche, il passe de longues heures sur le terrain, à genoux dans la boue ou la poussière, armé de truelles et de pinceaux, pour enregistrer minutieusement chaque strate géologique. Puis en laboratoire, il date les objets, dessine les plans et rédige des rapports d'opération exhaustifs.",
        "mainObjective": "Sauvegarder et analyser les vestiges enfouis pour comprendre l'évolution technique, sociale, économique et biologique des sociétés humaines.",
        "companyRole": "Scientifique de terrain garant de la protection du patrimoine enfoui lors des grands projets d'aménagement.",
        "workEnvironment": [
            "⛏️ Chantiers de fouilles en plein air par toutes les conditions météorologiques",
            "🔬 Laboratoires d'analyse post-fouilles (datation carbone 14, archéozoologie)",
            "🏢 Instituts nationaux d'archéologie préventive (INRAP) et universités"
        ],
        "missions": [
            "Conduire des diagnostics archéologiques et des fouilles de sauvetage avant travaux de construction",
            "Décaper avec précaution les couches sédimentaires et identifier les structures (murs, tombes, fosses)",
            "Enregistrer rigoureusement les données stratigraphiques, coupes et coordonnées spatiales des objets (tachéomètre)",
            "Laver, inventorier, marquer et consolider les artefacts découverts en atelier post-fouille",
            "Rédiger le Rapport Final d'Opération (RFO) et publier les découvertes dans des revues scientifiques"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Briefing sécurité et reprise du décapage de terrain",
                "desc": "Fouille minutieuse à la truelle d'une nécropole antique mise au jour sur le tracé d'une future voie ferrée."
            },
            {
                "time": "11:00",
                "title": "Enregistrement photogrammétrique",
                "desc": "Prise de clichés par drone et enregistrement au théodolite des coordonnées 3D de poteries intactes."
            },
            {
                "time": "14:00",
                "title": "Dessin stratigraphique en laboratoire de chantier",
                "desc": "Relevé à l'échelle d'une coupe de terrain montrant la succession des couches d'occupation humaine."
            },
            {
                "time": "16:30",
                "title": "Conditionnement des prélèvements",
                "desc": "Emballage sécurisé d'échantillons de charbon de bois destinés à une datation au radiocarbone."
            }
        ],
        "skills": {
            "technical": [
                "Techniques de fouille stratigraphique et méthode de Wheeler/Harris",
                "Topographie, relevés photogrammétriques et utilisation de stations totales",
                "Typologie céramique, numismatique ou anthropologie biologique de base",
                "Réglementation du Code du Patrimoine relative à l'archéologie préventive"
            ],
            "human": [
                "Excellente condition physique et grande endurance aux intempéries",
                "Patience infinie, méticulosité et capacité de travail en équipe soudée",
                "Sens aigu de l'observation et rigueur de raisonnement déductif"
            ],
            "tools": [
                "Truelles archéologiques (Marshalltown, WHS), pinceaux et mirettes",
                "Stations totales topographiques, GPS différentiel et drones de cartographie",
                "Logiciels de modélisation SIG et photogrammétrie (QGIS, Agisoft Metashape)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence (Bac +3)",
                    "title": "Licence Histoire de l'art et Archéologie",
                    "desc": "Méthodologie archéologique, périodes chrono-culturelles et premiers stages obligatoires sur chantiers-écoles."
                },
                {
                    "step": "Master professionnel / recherche (Bac +5)",
                    "title": "Master Archéologie préventive ou Master Archéosciences",
                    "desc": "Direction de secteur de fouille, spécialisation technique (céramologie, archéozoologie) et mémoire de recherche."
                }
            ],
            "schools": [
                {
                    "name": "Université Paris 1 Panthéon-Sorbonne (UFR d'Archéologie) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "INRAP (Institut National de Recherches Archéologiques Préventives) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut Fondamental d'Afrique Noire (Laboratoire d'Archéologie de l'UCAD) — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Agrément d'opérateur d'archéologie préventive",
                "Brevet de secourisme sur chantier de travaux publics"
            ]
        },
        "career": {
            "sectors": [
                "Archéologie préventive (INRAP, collectivités)",
                "Recherche universitaire et CNRS",
                "Musées archéologiques",
                "Bureaux d'études privés en aménagement"
            ],
            "employerTypes": [
                "INRAP (Institut d'État)",
                "Collectivités locales",
                "Opérateurs privés agréés (Éveha, Hadès)",
                "Laboratoires de recherche"
            ],
            "evolution": [
                "Responsable de secteur de fouille",
                "Responsable d'opération archéologique (RO)",
                "Directeur interrégional de l'INRAP",
                "Enseignant-chercheur universitaire"
            ],
            "pros": [
                "Émotion unique d'être le premier être humain à toucher un objet vieux de millénaires",
                "Travail dynamique alternant plein air et recherche de laboratoire"
            ],
            "cons": [
                "Pénibilité physique sur les chantiers d'hiver ou sous forte chaleur",
                "Précarité des contrats à durée déterminée (CDD de chantier) au début"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Participer comme fouilleur bénévole pendant 2 à 3 semaines sur un chantier de fouilles archéologiques programmées agréé par le ministère de la Culture.",
            "steps": [
                "Consulter la liste officielle des chantiers archéologiques ouverts aux bénévoles sur culture.gouv.fr",
                "Acquérir sa propre truelle archéologique (truelle triangulaire Marshalltown de 4 pouces)",
                "Tenir un carnet de fouille de terrain rigoureux avec croquis et descriptions stratigraphiques"
            ],
            "freeResources": [
                "Culture.gouv.fr (Liste des chantiers de fouilles bénévoles)",
                "INRAP.fr (Actualités des découvertes archéologiques)"
            ]
        },
        "aiImpact": {
            "summary": "L'IA révolutionne la prospection archéologique grâce à l'analyse d'images satellites et de relevés LiDAR, détectant automatiquement des cités et tumulus enfouis sous la forêt.",
            "positiveImpacts": [
                "Détection en quelques heures de milliers de structures invisibles à l'œil nu",
                "Reconstitution 3D et remontage automatique de fragments de poteries brisées"
            ],
            "risksAndChallenges": [
                "La fouille physique de terrain reste irremplaçable pour vérifier les hypothèses",
                "Risque de pillage accéléré si des cartes de vestiges fuitent"
            ],
            "recommendedSkills": [
                "Traitement d'images LiDAR et télédétection par drone",
                "Gestion de bases de données spatialisées sous QGIS"
            ]
        },
        "africaContext": {
            "senegalInsight": "Le Sénégal possède un patrimoine archéologique exceptionnel : les cercles mégalithiques de Sénégambie (classés UNESCO), les amas coquilliers du Delta du Saloum et les sites paléolithiques de la presqu'île du Cap-Vert et de la Falémé. L'IFAN de Dakar abrite le laboratoire de référence en archéologie ouest-africaine.",
            "westAfricaOpportunities": "Fouilles préventives lors de la construction des grands corridors autoroutiers, projets miniers et préservation des sites rupestres du Sahara/Sahel.",
            "localChampions": [
                "Laboratoire d'Archéologie de l'IFAN Ch. Anta Diop",
                "Direction du Patrimoine Culturel du Sénégal",
                "Site des Mégalithes de Sine Ngayène"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Fiche métier : Archéologue",
                "url": "https://www.imaginetonfutur.com/metier/archeologue.html",
                "type": "metier"
            },
            {
                "organization": "INRAP (Institut National de Recherches Archéologiques Préventives)",
                "title": "Le métier d'archéologue",
                "url": "https://www.inrap.fr",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En France, la loi sur l'archéologie préventive votée en 2001 oblige tout aménageur (autoroutes, centres commerciaux, lotissements) à financer un diagnostic archéologique préalable, ce qui a sauvé de la destruction des dizaines de milliers de sites historiques !",
            "pourquoi": "Grâce à cette mesure, l'archéologie moderne ne détruit pas le progrès économique mais l'enrichit de connaissances historiques majeures.",
            "a_retenir": "L'archéologue lit dans les couches de terre comme dans les pages d'un livre millénaire."
        }
    },
    {
        "id": "paleontologue",
        "slug": "paleontologue",
        "title": "Paléontologue",
        "aliases": [
            "Chercheur en paléontologie",
            "Paléoanthropologue",
            "Paléontologue des vertébrés",
            "Micropaléontologue"
        ],
        "icon": "🦴",
        "image": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Archéologie",
        "domainId": "archeologie",
        "subdomain": "Paléontologie & Évolution des espèces",
        "sectors": [
            "Recherche fondamentale",
            "Muséums d'histoire naturelle",
            "Industrie géologique & minière",
            "Enseignement"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": false,
        "level": "Bac +5 (Master Sciences de la Terre et de l'Univers) à Bac +8 (Doctorat en Paléontologie)",
        "salary": "🇫🇷 France : 2 100 - 4 000 € net/mois (Muséum National d'Histoire Naturelle, universités, CNRS, Source : Imagine ton Futur) • 🇸🇳 Sénégal : 450 000 - 1 500 000 FCFA / mois",
        "simpleDefinition": "Le paléontologue étudie les restes fossilisés d'organismes vivants (animaux, végétaux, micro-organismes, hominidés) piégés dans les roches sédimentaires depuis des millions d'années pour retracer l'histoire de la vie et l'évolution du climat sur Terre.",
        "shortDescription": "Explorateur de l'histoire du vivant recensé par Imagine ton Futur, il étudie les fossiles pour comprendre l'évolution de la vie sur Terre.",
        "longDescription": "À la charnière entre les sciences de la Terre et les sciences de la vie, le paléontologue traque les indices du passé lointain de notre planète. Comme documenté dans les fiches spécialisées d'Imagine ton Futur, il organise des expéditions géologiques dans des déserts, falaises ou carrières pour dégager des fossiles sans les briser. En laboratoire, il extrait les ossements à l'aide de micro-percuteurs et d'acides doux, scanne les squelettes au tomographe à rayons X et reconstitue les écosystèmes disparus pour mieux appréhender les crises climatiques actuelles.",
        "mainObjective": "Reconstituer la morphologie, le comportement, l'environnement et l'évolution généalogique des espèces éteintes grâce aux archives fossiles.",
        "companyRole": "Scientifique de référence pour l'histoire des écosystèmes terrestres et la datation géologique des strates sédimentaires.",
        "workEnvironment": [
            "🔬 Laboratoires de recherche et réserves de muséums d'histoire naturelle",
            "⛏️ Gisements fossilifères, déserts, carrières et falaises du monde entier",
            "💻 Stations de modélisation 3D et scanners tomographiques industriels"
        ],
        "missions": [
            "Prospecter des strates géologiques et excaver délicatement des fossiles enrobés dans des plâtres de protection",
            "Dégager en laboratoire les spécimens sous loupe binoculaire à l'aide de micro-burins et de bains chimiques",
            "Décrire l'anatomie comparée et classifier les spécimens selon la nomenclature phylogénétique",
            "Reconstituer les paléoenvironnements et les paléoclimats grâce aux isotopes stables",
            "Participer à la muséographie et présenter des squelettes fossilisés reconstitués au grand public"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Dégagement au laboratoire de préparation",
                "desc": "Travail minutieux sous binoculaire pour libérer une mâchoire de mammifère primitif fossilisée de sa gangue calcaire."
            },
            {
                "time": "11:00",
                "title": "Tomographie 3D de la boîte crânienne",
                "desc": "Analyse au scanner CT haute résolution pour visualiser la cavité endocrânienne sans détruire le fossile."
            },
            {
                "time": "14:30",
                "title": "Analyse phylogénétique par ordinateur",
                "desc": "Saisie des caractères anatomiques dans un logiciel cladistique pour déterminer l'arbre généalogique de l'espèce."
            },
            {
                "time": "17:00",
                "title": "Préparation de la prochaine mission d'expédition",
                "desc": "Coordination logistique et permis d'exportation scientifique pour une campagne de prospection au désert."
            }
        ],
        "skills": {
            "technical": [
                "Anatomie comparée des vertébrés et invertébrés fossiles",
                "Géologie sédimentaire, stratigraphie et biostratigraphie",
                "Techniques de dégagement mécanique et chimique des fossiles",
                "Modélisation anatomique 3D et morphométrie géométrique"
            ],
            "human": [
                "Patience extrême et dextérité manuelle millimétrique",
                "Esprit d'aventure et goût pour les expéditions de terrain isolées",
                "Rigueur scientifique et capacité à imaginer des organismes en trois dimensions"
            ],
            "tools": [
                "Micro-graveurs pneumatiques, microscopes électroniques à balayage (MEB)",
                "Tomographes à rayons X (micro-CT scan)",
                "Logiciels de reconstruction 3D (Avizo, 3D Slicer, MeshLab)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence (Bac +3)",
                    "title": "Licence Sciences de la Terre ou Sciences de la Vie (Biologie / Géologie)",
                    "desc": "Fondations en sédimentologie, biologie de l'évolution et écologie."
                },
                {
                    "step": "Master de recherche (Bac +5)",
                    "title": "Master Paléontologie, Paléoenvironnements ou Géobiologie",
                    "desc": "Analyse phylogénétique avancée, géochimie isotopique et premier mémoire sur spécimens fossiles."
                },
                {
                    "step": "Doctorat (Bac +8)",
                    "title": "Doctorat en Paléontologie (Thèse)",
                    "desc": "Étude exhaustive d'une lignée fossile ou d'un gisement, indispensable pour les carrières académiques."
                }
            ],
            "schools": [
                {
                    "name": "Muséum National d'Histoire Naturelle (MNHN) — Paris, France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Claude Bernard Lyon 1 (Master Paléontologie) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Cheikh Anta Diop (Département de Géologie de la FST / IFAN) — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Habilitation à diriger des fouilles paléontologiques",
                "Certificat de radioprotection pour utilisation de micro-CT scanners"
            ]
        },
        "career": {
            "sectors": [
                "Recherche fondamentale (CNRS, universités)",
                "Muséums d'histoire naturelle",
                "Compagnies pétrolières et minières (micropaléontologie de forage)",
                "Édition scientifique"
            ],
            "employerTypes": [
                "Muséum National d'Histoire Naturelle",
                "Instituts de géosciences",
                "Universités"
            ],
            "evolution": [
                "Directeur de collection paléontologique",
                "Professeur de muséum",
                "Conseiller scientifique de parcs géologiques mondiaux"
            ],
            "pros": [
                "Rêve d'enfant devenu réalité scientifique",
                "Découverte d'espèces inconnues ayant vécu il y a des dizaines de millions d'années"
            ],
            "cons": [
                "Nombre de postes d'enseignant-chercheur très réduit",
                "Nécessite une grande persévérance académique"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Identifier et classer une collection de 10 fossiles marins (ammonites, trilobites, bivalves) en déterminant leur époque géologique grâce à une clé d'identification.",
            "steps": [
                "Visiter la grande galerie de l'Évolution ou la galerie de Paléontologie du Muséum de Paris",
                "Rejoindre une association de géologie amateur pour s'initier au ramassage légal de fossiles",
                "Lire 'L'éventail du vivant' de Stephen Jay Gould pour comprendre les enjeux de l'évolution"
            ],
            "freeResources": [
                "MNHN.fr (Collections numérisées du Muséum)",
                "Paleobiology Database (Base mondiale de fossiles)"
            ]
        },
        "aiImpact": {
            "summary": "Les algorithmes de vision par ordinateur accélèrent le tri de micro-fossiles par millions et reconstruisent les tissus mous et la dynamique de marche d'espèces éteintes par simulation biomécanique.",
            "positiveImpacts": [
                "Classification automatique de foraminifères pour la datation des carottes de glace et de roche",
                "Simulation ultra-réaliste de la biomécanique des dinosaures"
            ],
            "risksAndChallenges": [
                "La modélisation informatique ne dispense jamais de la découverte physique du fossile",
                "Nécessité de valider les simulations par des lois physiques éprouvées"
            ],
            "recommendedSkills": [
                "Morphométrie géométrique assistée par ordinateur",
                "Maîtrise des logiciels de simulation biomécanique"
            ]
        },
        "africaContext": {
            "senegalInsight": "Le continent africain est le berceau de l'humanité (Lucy en Éthiopie, Toumaï au Tchad). Au Sénégal, les falaises de Popenguine et de la presqu'île de Dakar abritent des gisements paléontologiques tertiaires et crétacés riches en dents de requins fossiles et faune marine ancienne, étudiés par l'IFAN et le département de Géologie de l'UCAD.",
            "westAfricaOpportunities": "Paléoanthropologie dans le rift et le Sahel, études paléoclimatiques pour comprendre la désertification historique du Sahara.",
            "localChampions": [
                "Laboratoire de Paléontologie de l'IFAN Ch. Anta Diop",
                "Musée Géologique de l'UCAD",
                "Association Sénégalaise pour l'Étude du Quaternaire"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Fiche métier : Paléontologue",
                "url": "https://www.imaginetonfutur.com/metier/paleontologue.html",
                "type": "metier"
            },
            {
                "organization": "Muséum National d'Histoire Naturelle (MNHN)",
                "title": "Les métiers de la recherche en paléontologie",
                "url": "https://www.mnhn.fr",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En 2001 au Tchad, la découverte du fossile de 'Toumaï' (Sahelanthropus tchadensis), vieux de 7 millions d'années, a révolutionné la paléontologie mondiale en repoussant l'âge de nos origines hominidées en plein cœur de l'Afrique sahélienne !",
            "pourquoi": "Cette découverte a prouvé que l'évolution humaine ne s'est pas limitée à l'Afrique de l'Est mais a concerné l'ensemble des écosystèmes africains.",
            "a_retenir": "Le paléontologue est l'archiviste du grand livre de la vie sur Terre."
        }
    },
    {
        "id": "historien-de-lart",
        "slug": "historien-de-lart",
        "title": "Historien de l'Art",
        "aliases": [
            "Chercheur en histoire de l'art",
            "Critique d'art",
            "Expert en art ancien et contemporain",
            "Conseiller scientifique en arts visuels"
        ],
        "icon": "🎨",
        "image": "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Histoire de l'Art",
        "domainId": "histoire-art",
        "subdomain": "Arts visuels, Expertise & Muséologie",
        "sectors": [
            "Marché de l'art",
            "Musées & Galeries",
            "Recherche & Enseignement",
            "Édition d'art"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": false,
        "level": "Bac +5 (Master Histoire de l'art, Diplôme de l'École du Louvre) à Bac +8 (Doctorat)",
        "salary": "🇫🇷 France : 2 200 - 4 200 € net/mois (Universités, galeries de prestige, conseil d'art) • 🇸🇳 Sénégal : 450 000 - 1 500 000 FCFA / mois (Biennale de Dakar, Galeries, UCAD)",
        "simpleDefinition": "L'historien de l'art analyse, contextualise et authentifie les œuvres visuelles (peintures, sculptures, photographies, installations, arts décoratifs) à travers les époques et les civilisations, étudiant leur signification symbolique, technique et esthétique.",
        "shortDescription": "Spécialiste du regard et des créations visuelles, il décrypte le sens, l'histoire et l'authenticité des chefs-d'œuvre à travers les siècles.",
        "longDescription": "L'historien de l'art fait parler les formes et les couleurs. En combinant l'analyse formelle (composition, pigments, facture), l'iconographie (symboles et récits représentés) et l'histoire des idées, il replace chaque création dans son contexte sociétal et philosophique. Il intervient auprès des musées pour documenter les collections, des galeries pour valoriser les artistes contemporains, des maisons d'édition pour concevoir des monographies somptueuses, ou des collectionneurs pour expertiser et certifier l'authenticité d'œuvres rares.",
        "mainObjective": "Comprendre et faire comprendre la création artistique dans toute sa complexité stylistique, historique, matérielle et conceptuelle.",
        "companyRole": "Garant de l'attribution, de la datation et de la valeur culturelle des œuvres d'art.",
        "workEnvironment": [
            "🏛️ Musées d'art, fondations privées et centres d'art contemporain",
            "🖼️ Galeries d'art internationales et maisons de ventes aux enchères",
            "📚 Bibliothèques d'art prestigieuses (INHA, bibliothèque Kandinsky du Centre Pompidou)"
        ],
        "missions": [
            "Attribuer une œuvre à un artiste ou un atelier d'époque grâce à l'analyse stylistique et documentaire",
            "Tracer la provenance d'une œuvre à travers les siècles (inventaires de successions, catalogues anciens)",
            "Rédiger des articles de recherche, notices de catalogues raisonnés et essais critiques",
            "Conseiller les commissaires d'exposition dans le choix des œuvres et la conception du parcours muséographique",
            "Former les étudiants et transmettre la sensibilité au patrimoine visuel"
        ],
        "typicalDay": [
            {
                "time": "09:00",
                "title": "Étude d'une toile attribuée à un maître classique",
                "desc": "Examen sous lumière rasante et réflectographie infrarouge pour déceler le dessin sous-jacent et les repentirs."
            },
            {
                "time": "11:30",
                "title": "Recherche de provenance en bibliothèque d'art (INHA)",
                "desc": "Consultation des catalogues de ventes aux enchères du XIXe siècle pour reconstituer la chaîne des propriétaires."
            },
            {
                "time": "14:30",
                "title": "Visite d'atelier d'artiste contemporain",
                "desc": "Échange approfondi avec un peintre en vue de la rédaction du texte critique d'une future rétrospective."
            },
            {
                "time": "17:00",
                "title": "Rédaction d'une notice scientifique",
                "desc": "Finalisation de la notice d'une sculpture médiévale pour le catalogue raisonné d'une grande collection publique."
            }
        ],
        "skills": {
            "technical": [
                "Expertise du regard et reconnaissance stylistique des courants artistiques mondiaux",
                "Méthodologie iconographique et iconologique (Panofsky, Warburg)",
                "Connaissance des techniques matérielles (peinture à l'huile, fresque, fonte du bronze, gravure)",
                "Histoire du marché de l'art et méthodologie de traçabilité des provenances"
            ],
            "human": [
                "Acuité visuelle exceptionnelle et mémoire photographique des formes",
                "Sensibilité poétique doublée d'une rigueur d'enquêteur policier",
                "Aisance rédactionnelle pour transcrire la beauté plastique en mots précis"
            ],
            "tools": [
                "Bases de données d'art mondiales (Artnet, Artprice, Getty Research Institute)",
                "Portail de l'Institut National d'Histoire de l'Art (INHA - AGORHA)",
                "Outils de comparaison d'images haute résolution et réflectographie infrarouge"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence (Bac +3)",
                    "title": "Licence Histoire de l'art ou Premier Cycle de l'École du Louvre",
                    "desc": "Grandes périodes de l'art universel, méthodologie d'analyse d'œuvres et langues étrangères."
                },
                {
                    "step": "Master professionnel / recherche (Bac +5)",
                    "title": "Master Histoire de l'art ou Deuxième Cycle de l'École du Louvre",
                    "desc": "Spécialisation poussée (arts d'Afrique, Renaissance, art contemporain) et rédaction d'un mémoire de recherche original."
                },
                {
                    "step": "Doctorat (Bac +8)",
                    "title": "Doctorat en Histoire de l'art",
                    "desc": "Recherche doctorale indispensable pour les postes universitaires et de grands musées nationaux."
                }
            ],
            "schools": [
                {
                    "name": "École du Louvre — Paris, France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Paris 1 Panthéon-Sorbonne (UFR Histoire de l'art) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Cheikh Anta Diop (Département de Philosophie & Lettres / Arts Visuels) — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Agrément d'expert près les Cours d'Appel",
                "Certificat d'expertise en œuvres d'art"
            ]
        },
        "career": {
            "sectors": [
                "Marché de l'art (Maisons de ventes, galeries)",
                "Musées et fondations culturelles",
                "Enseignement supérieur",
                "Édition et presse d'art"
            ],
            "employerTypes": [
                "Maisons de ventes internationales (Sotheby's, Christie's, Artcurial)",
                "Galeries d'art",
                "Universités & CNRS"
            ],
            "evolution": [
                "Spécialiste de département en maison de vente",
                "Directeur de galerie d'art internationale",
                "Conservateur de musée",
                "Critique d'art influent"
            ],
            "pros": [
                "Émerveillement visuel permanent au contact de la beauté",
                "Opportunités de voyages mondiaux pour découvrir des collections privées"
            ],
            "cons": [
                "Milieu professionnel sélectif et concurrentiel",
                "Exigence d'un réseau relationnel développé dans le milieu de l'art"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Rédiger une analyse iconographique et formelle de 3 pages d'un tableau célèbre en appliquant la méthode des 3 niveaux d'Erwin Panofsky.",
            "steps": [
                "Télécharger et explorer la base de données Joconde du ministère de la Culture",
                "Visiter un musée avec un carnet de croquis pour observer la composition des toiles",
                "Lire 'L'Histoire de l'art' d'Ernst Gombrich, ouvrage de référence universel"
            ],
            "freeResources": [
                "INHA.fr (Portail de l'Institut National d'Histoire de l'Art)",
                "Google Arts & Culture (Visites virtuelles en ultra-haute résolution)"
            ]
        },
        "aiImpact": {
            "summary": "L'IA analyse les coups de pinceau et la composition pour assister l'authentification et restaurer virtuellement des œuvres abîmées, mais seul l'historien de l'art comprend l'intention sensible de l'artiste.",
            "positiveImpacts": [
                "Comparaison de millions d'œuvres en quelques secondes pour repérer les influences stylistiques",
                "Reconstitution numérique des couleurs d'origine dégradées par le temps"
            ],
            "risksAndChallenges": [
                "Production de faux 'dans le style de' par des IA génératives (Midjourney)",
                "Nécessité de maîtriser l'analyse matérielle des supports pour contrecarrer les contrefaçons"
            ],
            "recommendedSkills": [
                "Connaissance des protocoles d'analyse scientifique des pigments (spectrométrie XRF)",
                "Expertise sur les nouvelles formes artistiques numériques (Art génératif, NFTs)"
            ]
        },
        "africaContext": {
            "senegalInsight": "Dakar est la capitale incontestée des arts visuels d'Afrique contemporaine grâce à la Biennale de Dakar (Dak'Art), fondée en 1992, qui réunit tous les deux ans des milliers d'historiens de l'art, commissaires et collectionneurs du monde entier. L'École de Dakar (initiée sous Senghor) a forgé une esthétique majeure de la modernité africaine.",
            "westAfricaOpportunities": "Documentation et théorisation des avant-gardes artistiques africaines, commissariat d'expositions panafricaines et marché de l'art en plein essor.",
            "localChampions": [
                "Biennale de l'Art Africain Contemporain (Dak'Art)",
                "Musée Théodore Monod d'Art Africain (IFAN)",
                "Galerie Cécile Fakhoury (Dakar)"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Secteur Art, culture, audiovisuel",
                "url": "https://www.imaginetonfutur.com/les-metiers/domaine/art-culture-audiovisuel.html",
                "type": "metier"
            },
            {
                "organization": "Institut National d'Histoire de l'Art (INHA)",
                "title": "Recherche et carrières en histoire de l'art",
                "url": "https://www.inha.fr",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "La Biennale de Dakar (Dak'Art) est la plus ancienne et la plus prestigieuse biennale d'art contemporain d'Afrique, accueillant plus de 250 000 visiteurs et des centaines d'artistes de la diaspora à chaque édition !",
            "pourquoi": "Elle offre aux historiens de l'art une tribune mondiale pour écrire l'histoire des arts visuels africains depuis l'Afrique.",
            "a_retenir": "L'historien de l'art apprend au monde à voir au-delà du visible."
        }
    },
    {
        "id": "conservateur-de-musee",
        "slug": "conservateur-de-musee",
        "title": "Conservateur de Musée",
        "aliases": [
            "Directeur de musée",
            "Responsable de collections muséales",
            "Conservateur d'art",
            "Chef d'établissement muséal"
        ],
        "icon": "🏛️",
        "image": "https://images.unsplash.com/photo-1572953109213-3be62398eb95?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Histoire de l'Art",
        "domainId": "histoire-art",
        "subdomain": "Direction de musée & Muséographie",
        "sectors": [
            "Musées publics & privés",
            "Ministère de la Culture",
            "Collectivités locales",
            "Fondations artistiques"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": false,
        "level": "Bac +5 (Master Histoire de l'art, Archéologie, Muséologie) + Concours INP",
        "salary": "🇫🇷 France : 29 500 € brut/an débutant à 55 000 € en cours de carrière (Cadre A+ fonction publique, Source : Imagine ton Futur) • 🇸🇳 Sénégal : 500 000 - 1 500 000 FCFA / mois",
        "simpleDefinition": "Le conservateur de musée dirige les collections d'un musée, décide des acquisitions de nouvelles œuvres, veille à leur conservation matérielle, orchestre les expositions temporaires et organise l'accueil du public.",
        "shortDescription": "Pilote scientifique et culturel d'un musée documenté par Imagine ton Futur, il fait dialoguer les œuvres avec les visiteurs de tous horizons.",
        "longDescription": "Comme décrit sur la fiche officielle d'Imagine ton Futur, le conservateur de musée est le chef d'orchestre d'une institution muséale. Il concilie une immense érudition en histoire de l'art avec des aptitudes de gestionnaire d'équipe et de budget. Il conçoit le parcours permanent pour raconter une histoire au public, collabore avec les restaurateurs pour sauver les œuvres endommagées, prête des toiles à des musées partenaires dans le monde entier et organise des événements culturels pour attirer des publics variés.",
        "mainObjective": "Donner vie aux collections patrimoniales en garantissant leur sécurité physique et en offrant une expérience culturelle marquante aux visiteurs.",
        "companyRole": "Directeur scientifique, artistique et managérial de l'établissement muséal.",
        "workEnvironment": [
            "🏛️ Musées nationaux, régionaux ou municipaux",
            "🖼️ Réserves muséales climatisées et sécurisées",
            "🤝 Échanges réguliers avec les mécènes, élus territoriaux et commissaires internationaux"
        ],
        "missions": [
            "Définir et exécuter le Projet Scientifique et Culturel (PSC) du musée",
            "Diriger le récolement décennal des collections conformément aux règles de l'État",
            "Sélectionner et négocier les prêts d'œuvres d'art avec des institutions étrangères",
            "Coordonner les équipes de médiateurs culturels, régisseurs d'œuvres et agents d'accueil",
            "Rechercher des financements mécènes et partenariats pour enrichir les collections"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Tournée de sécurité et état des salles",
                "desc": "Vérification des conditions de présentation des œuvres avant l'ouverture des portes au public."
            },
            {
                "time": "10:30",
                "title": "Négociation d'un prêt international d'œuvres",
                "desc": "Visioconférence avec un musée new-yorkais pour finaliser le prêt d'un chef-d'œuvre lors de la prochaine exposition."
            },
            {
                "time": "14:00",
                "title": "Point d'étape avec les médiateurs culturels",
                "desc": "Validation des livrets de visite pour enfants et du parcours sonore accessible aux personnes malvoyantes."
            },
            {
                "time": "16:30",
                "title": "Conférence de presse de lancement de saison",
                "desc": "Présentation aux journalistes culturels des grandes acquisitions de l'année et du programme des expositions."
            }
        ],
        "skills": {
            "technical": [
                "Haute culture historique, artistique et muséologique",
                "Réglementation de la loi Musées de France et normes de sécurité ICOM",
                "Muséographie contemporaine, éclairagisme et aménagement d'espaces d'exposition",
                "Gestion budgétaire publique et recherche de mécénat privé"
            ],
            "human": [
                "Leadership rassembleur et qualités de communication publique",
                "Créativité narrative pour imaginer des expositions attractives",
                "Diplomatie et sens politique aiguisé avec les partenaires institutionnels"
            ],
            "tools": [
                "Logiciels de gestion informatisée de collections (Skin, ActiMuséo)",
                "Outils de gestion de projets et budgets culturels",
                "Dispositifs d'audioguides interactifs et réalité augmentée muséale"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence (Bac +3)",
                    "title": "Licence Histoire de l'art, Archéologie ou Lettres",
                    "desc": "Acquisition d'une solide culture générale et historique."
                },
                {
                    "step": "Master (Bac +5)",
                    "title": "Master Muséologie ou Gestion du Patrimoine culturel",
                    "desc": "Apprentissage de la muséographie, de la régie des œuvres et du droit des musées."
                },
                {
                    "step": "Concours de conservateur (Bac +6)",
                    "title": "Concours de l'Institut National du Patrimoine (INP)",
                    "desc": "Voie royale d'accès au statut de conservateur d'État ou territorial des musées."
                }
            ],
            "schools": [
                {
                    "name": "Institut National du Patrimoine (INP) — Paris, France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École du Louvre (Filière Muséologie) — Paris, France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Musée des Civilisations Noires / UCAD — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certificat de Conservateur agréé ICOM (Conseil International des Musées)"
            ]
        },
        "career": {
            "sectors": [
                "Musées de France",
                "Musées municipaux et métropolitains",
                "Fondations d'art privées (Fondation Vuitton, Pinault Collection)",
                "Musées d'entreprises"
            ],
            "employerTypes": [
                "Ministère de la Culture",
                "Collectivités territoriales",
                "Grandes fondations d'entreprise"
            ],
            "evolution": [
                "Conservateur en chef",
                "Directeur d'un établissement public muséal majeur",
                "Commissaire général de grandes biennales internationales"
            ],
            "pros": [
                "Rôle de chef d'orchestre au cœur de la création et du patrimoine",
                "Impact culturel direct sur des dizaines de milliers de visiteurs"
            ],
            "cons": [
                "Pression budgétaire et impératifs de fréquentation croissants",
                "Gestion d'équipes pluridisciplinaires parfois complexe"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Concevoir un projet d'exposition imaginaire de 20 œuvres sur un thème original, avec cartel d'introduction, texte de salle et budget prévisionnel.",
            "steps": [
                "Devenir bénévole dans un musée ou une association d'amis du musée",
                "Participer à la Nuit Européenne des Musées pour observer la gestion des flux de visiteurs",
                "Consulter le site officiel de l'ICOM (icom.museum) pour comprendre les normes éthiques mondiales"
            ],
            "freeResources": [
                "ICOM.museum (Conseil International des Musées)",
                "Ministère de la Culture (Fiches Musées de France)"
            ]
        },
        "aiImpact": {
            "summary": "L'IA enrichit la médiation muséale via des avatars de personnages historiques interactifs et des analyses prédictives de fréquentation pour réguler les foules.",
            "positiveImpacts": [
                "Parcours de visite personnalisés en fonction des centres d'intérêt de chaque visiteur",
                "Optimisation de la conservation énergétique des salles d'exposition"
            ],
            "risksAndChallenges": [
                "Risque de gadgetisation technologique au détriment du contact direct avec l'œuvre authentique",
                "Coûts de maintenance des dispositifs numériques interactifs"
            ],
            "recommendedSkills": [
                "Conception d'expériences de médiation hybrides (physique + numérique subtil)",
                "Maîtrise des outils d'analyse de données de fréquentation"
            ]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la direction du Musée des Civilisations Noires ou du Musée Théodore Monod implique d'incarner une muséologie novatrice, décolonisée et ouverte aux communautés, combinant chefs-d'œuvre historiques et créations contemporaines les plus audacieuses.",
            "westAfricaOpportunities": "Développement de nouveaux écomusées régionaux (Saint-Louis, Ziguinchor) et valorisation des trésors du patrimoine matériel et vivant ouest-africain.",
            "localChampions": [
                "Musée des Civilisations Noires (MCN - Dakar)",
                "Musée d'Art Contemporain de Diamniadio",
                "Musée du CRDS de Saint-Louis"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Fiche métier : Conservateur de musée",
                "url": "https://www.imaginetonfutur.com/metier/conservateur-de-musee.html",
                "type": "metier"
            },
            {
                "organization": "Conseil International des Musées (ICOM)",
                "title": "Code de déontologie des musées",
                "url": "https://icom.museum",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Selon les données officielles d'Imagine ton Futur, un conservateur de musée débutant démarre aux alentours de 29 500 € brut par an et peut évoluer vers la direction des plus grands établissements culturels nationaux !",
            "pourquoi": "Ce métier allie une haute formation académique à des responsabilités de gestion publique prestigieuses.",
            "a_retenir": "Le conservateur de musée transforme un dépôt d'objets anciens en un foyer vivant d'émotion et de savoir."
        }
    },
    {
        "id": "commissaire-priseur",
        "slug": "commissaire-priseur",
        "title": "Commissaire-Priseur",
        "aliases": [
            "Commissaire de justice (ventes aux enchères)",
            "Opérateur de ventes volontaires",
            "Directeur de maison d'enchères",
            "Expert-estimateur d'art"
        ],
        "icon": "⚖️",
        "image": "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Histoire de l'Art",
        "domainId": "histoire-art",
        "subdomain": "Marché de l'art, Enchères & Expertise légale",
        "sectors": [
            "Marché de l'art",
            "Justice & Droit",
            "Commerce de luxe",
            "Expertise patrimoniale"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": false,
        "level": "Double diplôme Droit (Bac +3 minimum) + Histoire de l'art (Bac +3 minimum) + Examen d'accès au stage professionnel",
        "salary": "🇫🇷 France : 3 000 - 8 000 € net/mois (Honoraires proportionnels aux adjudications de ventes aux enchères, Source : Imagine ton Futur) • 🇸🇳 Sénégal : 600 000 - 2 500 000 FCFA / mois",
        "simpleDefinition": "Le commissaire-priseur estime la valeur financière des meubles, tableaux, sculptures, bijoux et objets d'art, puis les adjuge au plus offrant lors de ventes aux enchères publiques sous le coup de son marteau d'ivoire.",
        "shortDescription": "Maître du marteau et expert des valeurs documenté par Imagine ton Futur, il allie savoir juridique et œil aiguisé d'amateur d'art.",
        "longDescription": "Comme décrit sur Imagine ton Futur, le commissaire-priseur est un professionnel atypique qui possède une double culture impérative : une formation juridique approfondie en droit des contrats et des successions, doublée d'une érudition pointue en histoire de l'art. Lors d'inventaires de successions dans des châteaux ou appartements, il déniche des trésors oubliés, les expertise avec l'aide de spécialistes, rédige le catalogue de vente et mène les enchères en public avec verve, énergie et sens du spectacle.",
        "mainObjective": "Estimer avec exactitude et vendre aux enchères publiques des biens meubles au meilleur prix dans le respect absolu des règles juridiques.",
        "companyRole": "Officier ministériel ou opérateur de ventes garant de la sécurité juridique et de la valorisation marchande des biens.",
        "workEnvironment": [
            "🏛️ Hôtels des ventes (Hôtel Drouot à Paris, maisons de ventes en région)",
            "🏰 Déplacements chez les particuliers pour inventaires de successions",
            "💻 Plateformes d'enchères internationales en ligne (Drouot Digital, Interencheres)"
        ],
        "missions": [
            "Inventorier et priser (estimer la valeur marchande) des objets d'art et mobiliers lors de successions ou partages",
            "Faire authentifier les œuvres douteuses auprès des comités d'experts de référence",
            "Concevoir, rédiger et illustrer les catalogues de ventes aux enchères de prestige",
            "Faire la promotion des ventes auprès des collectionneurs, musées et galeries du monde entier",
            "Diriger la vente publique à la tribune, susciter les enchères en salle et sur internet, et prononcer l'adjudication ('Adjugé !')"
        ],
        "typicalDay": [
            {
                "time": "09:00",
                "title": "Inventaire de succession sur place",
                "desc": "Visite d'une propriété historique pour inventorier et estimer pièce par pièce le mobilier, les toiles et l'argenterie."
            },
            {
                "time": "12:00",
                "title": "Exposition publique avant-vente",
                "desc": "Accueil des collectionneurs et conservateurs de musées venus examiner les lots avant la vacation."
            },
            {
                "time": "14:30",
                "title": "Tenue de la vente aux enchères publique à la tribune",
                "desc": "Animation de la vente de 250 lots d'art moderne au marteau avec enchérisseurs en salle, au téléphone et en ligne."
            },
            {
                "time": "18:30",
                "title": "Règlement des adjudications et bordereaux",
                "desc": "Vérification des encaissements, des ordres d'achat exécutés et gestion des éventuelles préemptions de l'État."
            }
        ],
        "skills": {
            "technical": [
                "Droit civil (droit des successions, régimes matrimoniaux, droit des ventes aux enchères)",
                "Histoire de l'art approfondie (arts décoratifs, mobilier, peinture, orfèvrerie)",
                "Connaissance des cotes du marché de l'art international et des indices d'adjudication",
                "Réglementation des exportations de biens culturels et préemptions des musées"
            ],
            "human": [
                "Charisme, voix portante, grand sens du spectacle et de la mise en scène",
                "Psychologie fine pour capter la dynamique d'une salle d'enchères",
                "Honnêteté scrupuleuse, discrétion absolue et sang-froid"
            ],
            "tools": [
                "Marteau de commissaire-priseur (marteau d'ivoire ou de bois précieux)",
                "Plateformes de live bidding (Drouot.com, Interencheres, Invaluable)",
                "Bases de données de résultats de ventes mondiales (Artprice, Artnet, Gazette Drouot)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Double cursus universitaire (Bac +3)",
                    "title": "Licence en Droit + Licence en Histoire de l'Art",
                    "desc": "Double exigence légale obligatoire pour se présenter à l'examen d'accès."
                },
                {
                    "step": "Examen d'accès & Stage professionnel (Bac +5)",
                    "title": "Examen d'aptitude à la profession de commissaire de justice / opérateur de ventes + Stage de 2 ans",
                    "desc": "Formation pratique intensive en maison de ventes suivie de l'examen d'aptitude finale."
                }
            ],
            "schools": [
                {
                    "name": "École du Louvre (associée à l'Université de Droit Panthéon-Assas Paris 2) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Conseil des Ventes Volontaires (CVV) / Chambre Nationale des Commissaires de Justice — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Cheikh Anta Diop (Faculté des Sciences Juridiques et Politiques - FSJP) — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Prestation de serment devant le Tribunal judiciaire",
                "Agrément du Conseil des Maisons de Vente"
            ]
        },
        "career": {
            "sectors": [
                "Marché de l'art",
                "Maisons de ventes aux enchères (Drouot, Artcurial, Sotheby's)",
                "Études judiciaires",
                "Conseil en gestion de patrimoine"
            ],
            "employerTypes": [
                "Sociétés de Ventes Volontaires (SVV)",
                "Offices de commissaires de justice",
                "Maisons d'enchères indépendantes"
            ],
            "evolution": [
                "Commissaire-priseur associé",
                "Président de maison de ventes internationale",
                "Expert d'art auprès des tribunaux et compagnies d'assurance"
            ],
            "pros": [
                "Métier spectaculaire, vibrant et passionnément humain",
                "Rémunération très attractive indexée sur le chiffre d'affaires des ventes"
            ],
            "cons": [
                "Double parcours universitaire très exigeant",
                "Responsabilité juridique et financière lourde sur les garanties d'authenticité (10 ans)"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Assister en direct à une vente aux enchères publique à l'Hôtel Drouot ou en ligne sur Drouot Live et noter l'évolution des enchères sur 10 lots consécutifs.",
            "steps": [
                "S'inscrire en double cursus Droit et Histoire de l'Art (ou bi-licence)",
                "Lire chaque semaine La Gazette Drouot pour se familiariser avec les estimations et le vocabulaire du marteau",
                "Faire un stage d'observation dans une maison de ventes aux enchères locale"
            ],
            "freeResources": [
                "Gazette-drouot.com (Magazine de référence des enchères)",
                "Conseil des Maisons de Vente (conseildesmaisonsdevente.fr)"
            ]
        },
        "aiImpact": {
            "summary": "L'IA transforme l'estimation préliminaire d'objets d'art à partir de photos et optimise les algorithmes de vente en direct en ligne, mais le talent du commissaire-priseur à la tribune reste irremplaçable pour enflammer les enchères.",
            "positiveImpacts": [
                "Estimation automatique de cotes par comparaison de milliers de résultats passés",
                "Détection automatique de signatures et poinçons sur les photos d'argenterie"
            ],
            "risksAndChallenges": [
                "Erreurs de datation des modèles sur les copies anciennes de tableaux",
                "Nécessité absolue de l'œil et du toucher physique du commissaire-priseur"
            ],
            "recommendedSkills": [
                "Maîtrise des enchères hybrides (salle + enchères connectées mondiales en direct)",
                "Expertise sur l'art numérique et les certificats d'authenticité sur blockchain (NFTs)"
            ]
        },
        "africaContext": {
            "senegalInsight": "Le marché de l'art contemporain africain connaît une envolée spectaculaire. Dakar est devenue une place de cotation incontournable où les maisons de ventes sénégalaises et internationales organisent des vacations dédiées aux maîtres de la peinture et sculpture africaines sous le contrôle de commissaires-priseurs judiciaires et d'experts agréés.",
            "westAfricaOpportunities": "Organisation de ventes caritatives de prestige, ventes aux enchères judiciaires d'entreprises et développement du marché privé des collectionneurs ouest-africains.",
            "localChampions": [
                "Chambre Nationale des Huissiers et Commissaires de Justice du Sénégal",
                "Maisons de ventes de Dakar",
                "Fondations de collectionneurs d'art contemporain"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Fiche métier : Commissaire-priseur",
                "url": "https://www.imaginetonfutur.com/metier/commissaire-priseur.html",
                "type": "metier"
            },
            {
                "organization": "Conseil des Maisons de Vente",
                "title": "Accéder à la profession de commissaire-priseur",
                "url": "https://www.conseildesmaisonsdevente.fr",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En France, la responsabilité du commissaire-priseur sur l'authenticité des biens vendus aux enchères est engagée pendant une durée de 10 ans après la vente !",
            "pourquoi": "Cette garantie légale exceptionnelle offre aux acheteurs une sécurité totale et fait des enchères publiques le canal de vente le plus sûr au monde.",
            "a_retenir": "Le commissaire-priseur fait chanter le marteau entre la rigueur de la loi et la passion de l'art."
        }
    },
    {
        "id": "enseignant-chercheur-philosophie",
        "slug": "enseignant-chercheur-philosophie",
        "title": "Enseignant-Chercheur en Philosophie / Consultant en Éthique",
        "aliases": [
            "Professeur de philosophie",
            "Philosophe clinicien",
            "Consultant en éthique appliquée",
            "Éthicien"
        ],
        "icon": "🧠",
        "image": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Philosophie & Éthique Appliquée",
        "domainId": "philosophie-ethique",
        "subdomain": "Philosophie, Éthique appliquée & Bioéthique",
        "sectors": [
            "Enseignement supérieur",
            "Comités d'éthique",
            "Santé & Hôpitaux",
            "Intelligence artificielle & Tech"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": true,
        "level": "Bac +5 (Master Recherche Philosophie) à Bac +8 (Doctorat en Philosophie, Agrégation)",
        "salary": "🇫🇷 France : 2 400 - 4 800 € net/mois (Maître de conférences / Professeur d'université ou vacations d'expertise éthique) • 🇸🇳 Sénégal : 500 000 - 1 600 000 FCFA / mois (UCAD, comités nationaux de bioéthique)",
        "simpleDefinition": "Le philosophe / chercheur en philosophie interroge les concepts fondamentaux (vérité, justice, conscience, liberté, technique), analyse de manière critique les mutations du monde contemporain et conseille les institutions ou entreprises sur les choix éthiques cruciaux (bioéthique, gouvernance de l'IA, responsabilité écologique).",
        "shortDescription": "Analyste des fondements de la pensée humaine, il éclaire les dilemmes éthiques contemporains et forme les esprits à l'esprit critique.",
        "longDescription": "Loin de la simple spéculation théorique, le philosophe contemporain s'empare des plus grands défis de notre époque. À l'université, il transmet l'histoire de la pensée et publie des recherches fondamentales. En entreprise, en milieu hospitalier (comités de bioéthique) ou dans la tech (gouvernance des algorithmes et de l'IA), il intervient comme consultant pour poser les questions de fond : Qu'est-ce qu'une décision juste ? Quels sont les risques de la délégation aux machines ? Il apporte une méthode d'argumentation impitoyable et une capacité de clarification conceptuelle indispensable.",
        "mainObjective": "Développer une pensée critique rigoureuse, analyser les concepts universels et guider les prises de décision face aux dilemmes moraux et technologiques.",
        "companyRole": "Garant du discernement éthique, de la clarification des concepts et de la rigueur argumentative.",
        "workEnvironment": [
            "🏛️ Universités et grands établissements d'enseignement (cours magistraux, séminaires)",
            "🏥 Espaces éthiques hospitaliers et comités nationaux de bioéthique",
            "🏢 Entreprises de haute technologie (comités d'éthique de l'IA, RSE)"
        ],
        "missions": [
            "Concevoir et dispenser des cours de philosophie générale, éthique, logique et philosophie des sciences",
            "Mener des recherches fondamentales sur les textes philosophiques et publier des ouvrages de référence",
            "Auditer les dilemmes éthiques dans les hôpitaux (fin de vie, dons d'organes, essais thérapeutiques)",
            "Définir des cadres de gouvernance éthique pour le déploiement d'algorithmes d'IA (IA Act, explicabilité)",
            "Animer des débats publics et cafés philosophiques pour démocratiser l'esprit critique citoyen"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Préparation de cours magistral",
                "desc": "Élaboration d'un cours d'épistémologie sur la distinction entre corrélation statistique et causalité pour des étudiants de master."
            },
            {
                "time": "10:30",
                "title": "Séance d'enseignement universitaire",
                "desc": "Animation d'un cours de 2 heures sur la théorie de la justice de John Rawls avec 150 étudiants."
            },
            {
                "time": "14:00",
                "title": "Comité d'éthique de l'IA pour une fintech",
                "desc": "Analyse critique des risques de discrimination algorithmique dans un modèle d'octroi de crédits."
            },
            {
                "time": "16:30",
                "title": "Rédaction d'un essai philosophique",
                "desc": "Rédaction d'un chapitre sur les mutations de la subjectivité humaine à l'ère des agents conversationnels."
            }
        ],
        "skills": {
            "technical": [
                "Maîtrise exhaustive de l'histoire de la philosophie (antique, médiévale, moderne et contemporaine)",
                "Logique formelle, philosophie du langage et épistémologie des sciences",
                "Méthodologie de la dissertation philosophique et de l'explication critique de texte",
                "Cadres réglementaires de la bioéthique et des chartes d'éthique de l'intelligence artificielle"
            ],
            "human": [
                "Pensée critique radicale et capacité à déceler les postulats implicites",
                "Pédagogie remarquable pour rendre accessibles des concepts hautement abstraits",
                "Écoute attentive, tolérance au doute constructif et humilité intellectuelle"
            ],
            "tools": [
                "Plateformes académiques (Cairn.info, PhilPapers, JSTOR)",
                "Outils de cartographie conceptuelle et d'argumentation (Coggle, Kialo)",
                "Logiciels de gestion bibliographique (Zotero)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence (Bac +3)",
                    "title": "Licence de Philosophie",
                    "desc": "Fondements des grands courants philosophiques, logique formelle et histoire des idées."
                },
                {
                    "step": "Master (Bac +5)",
                    "title": "Master Recherche Philosophie ou Master Éthique appliquée / Bioéthique",
                    "desc": "Mémoire de recherche approfondi sur un concept ou un auteur et séminaires thématiques."
                },
                {
                    "step": "Doctorat & Concours (Bac +8)",
                    "title": "Doctorat en Philosophie + Agrégation de Philosophie",
                    "desc": "Agrégation pour l'enseignement en lycée/classes préparatoires, doctorat pour le statut d'enseignant-chercheur."
                }
            ],
            "schools": [
                {
                    "name": "Université Paris 1 Panthéon-Sorbonne / Sorbonne Université — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École Normale Supérieure (ENS Rue d'Ulm) — Paris, France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Cheikh Anta Diop (Département de Philosophie de la FLSH) — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Agrégation de Philosophie",
                "Diplôme Universitaire (DU) d'Éthique biomédicale"
            ]
        },
        "career": {
            "sectors": [
                "Enseignement secondaire et supérieur",
                "Comités d'éthique et de bioéthique",
                "Grandes entreprises technologiques (Ethical AI Officer)",
                "Médias & Édition d'essais"
            ],
            "employerTypes": [
                "Ministère de l'Éducation Nationale / Universités",
                "Établissements de santé",
                "Cabinets de conseil en gouvernance éthique"
            ],
            "evolution": [
                "Professeur des universités",
                "Chief Ethics Officer (Directeur de l'Éthique en entreprise tech)",
                "Membre du Comité Consultatif National d'Éthique (CCNE)"
            ],
            "pros": [
                "Élévation intellectuelle continue et liberté de pensée absolue",
                "Demande croissante d'éthique face aux dérives technologiques"
            ],
            "cons": [
                "Concours de l'agrégation particulièrement sélectif",
                "Débouchés académiques limités nécessitant de savoir diversifier ses applications"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Rédiger un plaidoyer éthique contradictoire de 4 pages sur la question : 'Faut-il accorder des droits juridiques ou une personnalité morale aux systèmes d'IA ?'.",
            "steps": [
                "Lire 'L'Impératif de responsabilité' de Hans Jonas",
                "Participer à des débats philosophiques structurés sur la plateforme collaborative Kialo.com",
                "Consulter les avis publics du Comité Consultatif National d'Éthique (CCNE)"
            ],
            "freeResources": [
                "PhilPapers (Répertoire mondial de philosophie)",
                "CCNE-ethique.fr (Avis et publications bioéthiques)"
            ]
        },
        "aiImpact": {
            "summary": "L'essor fulgurant des IA génératives place la philosophie au cœur des enjeux stratégiques mondiaux : définir ce qu'est la conscience, la responsabilité juridique et la dignité humaine face à la machine.",
            "positiveImpacts": [
                "Création de postes d'éthiciens de l'IA (AI Ethics Officer) dans les géants de la tech",
                "Valorisation renouvelée des humanités dans la conception logicielle"
            ],
            "risksAndChallenges": [
                "Réduction de l'éthique à du 'ethics-washing' superficiel dans certaines firmes",
                "Nécessité pour les philosophes de comprendre la réalité technique des modèles"
            ],
            "recommendedSkills": [
                "Compréhension des architectures de deep learning et des biais d'entraînement",
                "Maîtrise des textes réglementaires émergents (AI Act européen)"
            ]
        },
        "africaContext": {
            "senegalInsight": "La tradition philosophique sénégalaise est d'une richesse universelle, illustrée par la pensée de Léopold Sédar Senghor (l'humanisme du donner et du recevoir), Cheikh Anta Diop, et le philosophe contemporain mondialement célébré Souleymane Bachir Diagne (professeur à Columbia University et normalien). Le département de philosophie de l'UCAD est un phare intellectuel panafricain.",
            "westAfricaOpportunities": "Éthique du développement, philosophie politique décoloniale, bioéthique adaptée aux systèmes de santé africains et pensée du métissage culturel.",
            "localChampions": [
                "Département de Philosophie de l'UCAD (Dakar)",
                "Conseil National de l'Éthique pour la Recherche en Santé (CNERS Sénégal)",
                "Chaire UNESCO de Bioéthique"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Secteur Éducation, formation & Sciences humaines",
                "url": "https://www.imaginetonfutur.com/les-metiers/domaine/education-formation-rh.html",
                "type": "metier"
            },
            {
                "organization": "Comité Consultatif National d'Éthique (CCNE)",
                "title": "L'expertise éthique et philosophique",
                "url": "https://www.ccne-ethique.fr",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Le philosophe sénégalais Souleymane Bachir Diagne, ancien élève de l'École Normale Supérieure et professeur à l'Université Columbia de New York, a reçu en 2020 le prestigieux Prix Frantz Fanon pour l'ensemble de son œuvre philosophique réconciliant humanisme universel et pensée africaine !",
            "pourquoi": "Son parcours démontre que les humanités formées à Dakar rayonnent au sommet de la pensée mondiale.",
            "a_retenir": "La philosophie n'est pas une matière scolaire : c'est l'art d'habiter le monde avec lucidité."
        }
    },
    {
        "id": "sociologue",
        "slug": "sociologue",
        "title": "Sociologue / Chargé d'Études Sociales",
        "aliases": [
            "Chercheur en sociologie",
            "Sociologue d'entreprise",
            "Chargé d'enquêtes sociologiques",
            "Analyste des comportements sociaux"
        ],
        "icon": "👥",
        "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Sociologie & Enquêtes Sociales",
        "domainId": "sociologie-etudes",
        "subdomain": "Études sociologiques, Enquêtes & Analyses de population",
        "sectors": [
            "Instituts de sondage & d'études",
            "Politiques publiques",
            "Ressources humaines",
            "Recherche & Universités"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": false,
        "level": "Bac +5 (Master Sociologie d'enquête, Sociologie du travail) à Bac +8 (Doctorat)",
        "salary": "🇫🇷 France : 2 100 - 3 800 € net/mois (~32 000 - 52 000 € brut/an, Source : Imagine ton Futur) • 🇸🇳 Sénégal : 450 000 - 1 500 000 FCFA / mois (ONGs internationales, Ministères, ANSD)",
        "simpleDefinition": "Le sociologue étudie le fonctionnement de la société, les comportements des groupes humains, les interactions sociales et les grandes mutations contemporaines en concevant des enquêtes de terrain rigoureuses (questionnaires, entretiens, observations) appuyées sur des méthodes statistiques et qualitatives.",
        "shortDescription": "Observateur méthodique des dynamiques collectives répertorié par Imagine ton Futur, il décode les transformations sociales pour guider les décideurs.",
        "longDescription": "Comme décrit sur la fiche officielle d'Imagine ton Futur, le sociologue ne se contente pas d'avoir des opinions : il applique une méthode scientifique rigoureuse pour comprendre pourquoi les individus agissent comme ils le font dans un contexte donné. Qu'il analyse les nouvelles aspirations au travail, les inégalités scolaires, les fractures territoriales ou les habitudes de consommation, il croise le recueil statistique quantitatif (sondages, démographie) avec l'analyse qualitative de terrain (entretiens approfondis, immersion ethnographique) pour produire des diagnostics objectifs.",
        "mainObjective": "Produire une analyse empirique et théorique des faits sociaux afin d'éclairer l'élaboration des politiques publiques et les stratégies organisationnelles.",
        "companyRole": "Analyste des dynamiques collectives et conseiller stratégique sur l'acceptabilité sociale et les transformations sociétales.",
        "workEnvironment": [
            "📊 Instituts de sondages et d'études d'opinion (Ipsos, BVA, Ifop, ANSD)",
            "🏛️ Ministères, collectivités territoriales et agences d'urbanisme",
            "🔬 Laboratoires de recherche sociologique et universités"
        ],
        "missions": [
            "Concevoir des protocoles d'enquêtes sociologiques (échantillonnage représentatif, grilles d'entretien)",
            "Mener des entretiens semi-directifs auprès de populations cibles et observer les interactions in situ",
            "Traiter et modéliser des bases de données statistiques d'enquêtes (analyses multivariées, régressions)",
            "Rédiger des rapports d'études opérationnels formulant des préconisations pour les décideurs",
            "Restituer les conclusions lors de colloques scientifiques ou auprès des directions générales"
        ],
        "typicalDay": [
            {
                "time": "09:00",
                "title": "Entretien qualitatif de terrain",
                "desc": "Conduite d'un entretien de 1h30 avec un représentant associatif sur les difficultés d'accès aux services publics en zone rurale."
            },
            {
                "time": "11:30",
                "title": "Traitement statistique sous R / SPSS",
                "desc": "Analyse factorielle des correspondances sur un échantillon de 2 000 réponses à une enquête sur le télétravail."
            },
            {
                "time": "14:30",
                "title": "Analyse thématique de verbatim",
                "desc": "Codage des réponses ouvertes et identification des sentiments dominants à l'aide d'un logiciel d'analyse textuelle."
            },
            {
                "time": "16:30",
                "title": "Restitution client auprès d'un ministère",
                "desc": "Présentation des résultats clés de l'étude sur l'insertion professionnelle des jeunes diplômés."
            }
        ],
        "skills": {
            "technical": [
                "Méthodes d'enquêtes quantitatives (échantillonnage, redressement, statistiques inférentielles)",
                "Méthodes qualitatives avancées (entretiens compréhensifs, observation participante, analyse de contenu)",
                "Épistémologie sociologique (Bourdieu, Weber, Durkheim, Crozier, Latour)",
                "Logiciels de traitement de données quantitatives et qualitatives (R, Python, SPSS, NVivo, Sphinx)"
            ],
            "human": [
                "Neutralité axiologique et capacité à mettre à distance ses propres préjugés",
                "Sens aigu de l'écoute bienveillante et aisance relationnelle tous publics",
                "Capacité de synthèse remarquable pour transformer des données brutes en récits intelligibles"
            ],
            "tools": [
                "Logiciels de statistiques (RStudio, SPSS, Stata)",
                "Outils d'analyse qualitative textuelle (NVivo, MAXQDA, Iramuteq)",
                "Plateformes d'enquêtes en ligne (Qualtrics, LimeSurvey, Sphinx)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence (Bac +3)",
                    "title": "Licence de Sociologie ou Licence Sciences Sociales",
                    "desc": "Fondations des théories sociologiques, statistiques descriptives et première enquête de terrain encadrée."
                },
                {
                    "step": "Master professionnel / recherche (Bac +5)",
                    "title": "Master Sociologie appliquée aux études d'opinion ou Master Sociologie du travail",
                    "desc": "Recommandé par Imagine ton Futur : formation pluridisciplinaire croisant sociologie, statistiques et démographie."
                },
                {
                    "step": "Doctorat (Bac +8)",
                    "title": "Doctorat en Sociologie",
                    "desc": "Indispensable pour les postes de chargé de recherche au CNRS, à l'IRD ou enseignant-chercheur universitaire."
                }
            ],
            "schools": [
                {
                    "name": "Sciences Po Paris (École de la Recherche - Master Sociologie) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Paris Cité / Sorbonne (Faculté des Sciences Sociales) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Cheikh Anta Diop (Département de Sociologie de la FLSH) — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification d'analyste de données d'enquêtes (R / Python)",
                "Certificat d'évaluation des politiques publiques"
            ]
        },
        "career": {
            "sectors": [
                "Instituts de sondages et études de marché",
                "Directions des Ressources Humaines (climat social, QVT)",
                "Collectivités et ministères des affaires sociales",
                "Organisations non gouvernementales (ONGs)"
            ],
            "employerTypes": [
                "Cabinets d'études sociologiques",
                "Agences de développement territorial",
                "Grandes entreprises"
            ],
            "evolution": [
                "Directeur d'études d'opinion",
                "Directeur de la RSE et de l'impact social",
                "Directeur de recherche universitaire",
                "Consultant expert en politiques publiques"
            ],
            "pros": [
                "Compréhension profonde des ressorts invisibles de la société",
                "Diversité infinie des sujets d'études (travail, famille, écologie, numérique)"
            ],
            "cons": [
                "Pression des délais de restitution en institut privé",
                "Complexité de la recherche de financements académiques"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser une micro-enquête sociologique sur les pratiques de mobilité des étudiants de son quartier avec un questionnaire administré à 30 personnes et une analyse statistique de base.",
            "steps": [
                "Rédiger un questionnaire de 15 questions fermées et ouvertes sans biais d'induction",
                "Traiter les résultats sous Excel ou Google Sheets avec tableaux croisés",
                "Lire 'Le Métier de sociologue' de Pierre Bourdieu, Jean-Claude Chamboredon et Jean-Claude Passeron"
            ],
            "freeResources": [
                "Insee.fr (Données démographiques et sociales françaises)",
                "ANSD.sn (Agence Nationale de la Statistique et de la Démographie du Sénégal)"
            ]
        },
        "aiImpact": {
            "summary": "L'IA accélère l'analyse de millions de publications sur les réseaux sociaux et la transcription instantanée d'entretiens, mais le recul sociologique est plus que jamais vital pour déconstruire les biais algorithmiques.",
            "positiveImpacts": [
                "Transcription audio automatisée des entretiens de recherche",
                "Analyse sémantique de corpus qualitatifs massifs en quelques minutes"
            ],
            "risksAndChallenges": [
                "Illusion que le Big Data remplace l'enquête qualitative sur le terrain",
                "Renforcement des stéréotypes sociaux dans les modèles d'IA non audités"
            ],
            "recommendedSkills": [
                "Sociologie du numérique et des algorithmes",
                "Audit critique des bases d'entraînement d'IA et de leurs biais sociaux"
            ]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la sociologie est omniprésente dans les programmes de développement communautaire, les études sur la jeunesse, les migrations, la microfinance et la modernisation des confréries religieuses. Le département de sociologie de l'UCAD, fondé sous l'impulsion de pionniers comme Abdoulaye Bara Diop, forme des sociologues intervenant auprès des ministères et grandes agences de coopération (AFD, USAID, PNUD).",
            "westAfricaOpportunities": "Évaluation d'impact social de projets miniers et d'infrastructures, sociologie de la santé (lutte contre les épidémies) et sociologie rurale.",
            "localChampions": [
                "ANSD (Agence Nationale de la Statistique et de la Démographie)",
                "Département de Sociologie de l'UCAD",
                "Laboratoire d'Études et de Recherches sur les Dynamiques Sociales et le Développement Local (LASDEL)"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Fiche métier : Sociologue",
                "url": "https://www.imaginetonfutur.com/metier/sociologue.html",
                "type": "metier"
            },
            {
                "organization": "Association Française de Sociologie (AFS)",
                "title": "Les métiers de la sociologie",
                "url": "https://afs-socio.fr",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Selon Imagine ton Futur, les diplômés de sociologie qui s'orientent vers les instituts de sondage ou les entreprises bénéficient d'une forte insertion professionnelle grâce à leur double compétence rare : rigueur statistique et analyse humaine des comportements !",
            "pourquoi": "Dans un monde saturé de données brutes, savoir leur donner un sens humain et prédictif est une compétence hautement recherchée.",
            "a_retenir": "Le sociologue dévoile les mécanismes invisibles qui relient l'individu au destin collectif."
        }
    },
    {
        "id": "ethnologue",
        "slug": "ethnologue",
        "title": "Ethnologue / Anthropologue",
        "aliases": [
            "Anthropologue social",
            "Chercheur en ethnologie",
            "Anthropologue culturel",
            "Conseiller en diversité culturelle"
        ],
        "icon": "👥",
        "image": "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Sociologie & Enquêtes Sociales",
        "domainId": "sociologie-etudes",
        "subdomain": "Ethnologie, Anthropologie culturelle & Récits oraux",
        "sectors": [
            "Recherche & Universités",
            "Musées d'ethnographie",
            "ONGs internationales",
            "Conseil d'entreprise"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": false,
        "level": "Bac +5 (Master Anthropologie) à Bac +8 (Doctorat en Ethnologie / Anthropologie sociale)",
        "salary": "🇫🇷 France : 2 100 - 3 900 € net/mois (CNRS, IRD, Muséum d'Histoire Naturelle, Musées, Source : Imagine ton Futur) • 🇸🇳 Sénégal : 450 000 - 1 500 000 FCFA / mois (IFAN, projets de développement)",
        "simpleDefinition": "L'ethnologue étudie les cultures, traditions, rites, structures de parenté et modes de vie des différents groupes humains, à travers une immersion prolongée sur le terrain, l'observation participante et le recueil des traditions orales.",
        "shortDescription": "Spécialiste des cultures humaines documenté par Imagine ton Futur, il vit en immersion pour comprendre les coutumes et représentations du monde de chaque peuple.",
        "longDescription": "Comme décrit sur Imagine ton Futur, l'ethnologue passe plusieurs mois ou années en immersion au sein d'une communauté (qu'il s'agisse d'un village traditionnel d'Afrique ou d'Amazonie, ou d'une tribu urbaine de traders dans une salle de marché financière). Il apprend la langue locale, partage le quotidien des habitants, écoute les mythes et observe les rituels pour comprendre de l'intérieur comment cette société fait sens de l'existence. Ses écrits permettent de préserver le patrimoine culturel immatériel mondial et d'éviter les malentendus interculturels dans les projets d'aide au développement ou les entreprises mondialisées.",
        "mainObjective": "Décrire et théoriser la diversité des cultures humaines grâce à l'enquête de terrain ethnographique par immersion participante.",
        "companyRole": "Médiateur des diversités culturelles et expert de l'impact humain des mutations contemporaines.",
        "workEnvironment": [
            "⛺ Missions d'immersion de terrain en zones rurales ou urbaines du monde",
            "🏛️ Musées d'ethnographie et d'arts premiers (Musée du Quai Branly, Musée Théodore Monod)",
            "🔬 Instituts de recherche sur le développement (IRD, CNRS, IFAN)"
        ],
        "missions": [
            "Conduire des séjours d'immersion ethnographique prolongés avec observation participante",
            "Enregistrer, traduire et analyser les traditions orales, récits de vie et mythes fondateurs",
            "Étudier les systèmes de parenté, les croyances religieuses et les rapports de pouvoir locaux",
            "Conseiller les agences de développement et les ONGs sur l'acceptabilité culturelle des projets de santé ou d'eau potable",
            "Constituer des collections d'objets usuels et rituels pour les musées de société"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "title": "Observation participante de terrain",
                "desc": "Accompagnement des pêcheurs traditionnels lors de la préparation des filets pour observer les rituels propitiatoires."
            },
            {
                "time": "11:00",
                "title": "Enregistrement d'un récit de vie",
                "desc": "Entretien enregistré avec une doyenne du village sur la transmission des savoirs médicinaux traditionnels par les plantes."
            },
            {
                "time": "15:00",
                "title": "Rédaction du journal de terrain",
                "desc": "Consignation minutieuse des observations de la journée, des expressions locales et des réflexions méthodologiques."
            },
            {
                "time": "18:00",
                "title": "Point d'échange avec l'équipe de développement local",
                "desc": "Conseil aux ingénieurs agronomes pour adapter l'implantation d'un puits solaire aux croyances sacrées du lieu."
            }
        ],
        "skills": {
            "technical": [
                "Méthodologie de l'observation participante et du journal de terrain",
                "Techniques de recueil et d'analyse des récits de vie et de la tradition orale",
                "Anthropologie de la parenté, de l'art, de la santé et du religieux",
                "Maîtrise de la langue vernaculaire de la communauté étudiée"
            ],
            "human": [
                "Capacité d'adaptation exceptionnelle à des conditions de vie rustiques",
                "Empathie profonde, respect inconditionnel de l'autre et absence de jugement ethnocentrique",
                "Patience infinie pour gagner la confiance des communautés"
            ],
            "tools": [
                "Enregistreurs audio professionnels haute définition (Zoom H5/H6)",
                "Caméras vidéo pour l'anthropologie visuelle",
                "Carnets de terrain reliés étanches et logiciels de transcription audio"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence (Bac +3)",
                    "title": "Licence Sociologie / Anthropologie ou Licence d'Ethnologie",
                    "desc": "Introduction aux grands courants anthropologiques (évolutionnisme, fonctionnalisme, structuralisme de Claude Lévi-Strauss)."
                },
                {
                    "step": "Master de recherche (Bac +5)",
                    "title": "Master Anthropologie sociale et culturelle",
                    "desc": "Recommandé par Imagine ton Futur : double compétence forte (ethnologie + communication, développement ou santé) et premier terrain d'enquête de plusieurs mois."
                },
                {
                    "step": "Doctorat (Bac +8)",
                    "title": "Doctorat en Anthropologie / Ethnologie",
                    "desc": "Longue mission de terrain (1 à 2 ans d'immersion) aboutissant à la rédaction de la thèse d'État."
                }
            ],
            "schools": [
                {
                    "name": "École des Hautes Études en Sciences Sociales (EHESS - Laboratoire d'Anthropologie Sociale) — Paris, France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Musée du Quai Branly - Jacques Chirac / Université Paris Nanterre — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "IFAN Cheikh Anta Diop / Département de Sociologie de l'UCAD — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Habilitation de recherche de terrain de l'IRD",
                "Certificat d'anthropologie visuelle"
            ]
        },
        "career": {
            "sectors": [
                "Recherche académique (IRD, CNRS, universités)",
                "Musées ethnographiques et de société",
                "Organisations humanitaires et de développement (Croix-Rouge, UNICEF, OMS)",
                "Corporate Anthropology (cabinets d'innovation)"
            ],
            "employerTypes": [
                "Instituts de recherche pour le développement",
                "ONGs internationales",
                "Musées nationaux"
            ],
            "evolution": [
                "Directeur de recherche à l'IRD ou au CNRS",
                "Conservateur de musée d'ethnographie",
                "Expert-conseil pour les agences des Nations Unies"
            ],
            "pros": [
                "Expérience humaine unique de fraternité avec des cultures du bout du monde",
                "Contribution à la sauvegarde du patrimoine immatériel de l'humanité"
            ],
            "cons": [
                "Isolement géographique lors des longues missions de terrain",
                "Nombre de postes académiques permanents restreint"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser une observation participante de 3 jours dans un lieu de sociabilité urbain (marché de quartier, club de sport) et rédiger un carnet ethnographique de 10 pages décrivant les rituels invisibles du lieu.",
            "steps": [
                "Lire 'Tristes Tropiques' de Claude Lévi-Strauss pour comprendre l'esprit du métier",
                "Consulter les revues ethnologiques de référence (L'Homme, Journal des Africanistes)",
                "Prendre en main un enregistreur audio pour s'entraîner aux entretiens ethnographiques"
            ],
            "freeResources": [
                "Gradhiva (Revue d'anthropologie et d'histoire des arts du Musée du Quai Branly)",
                "Cairn.info (Revue L'Homme)"
            ]
        },
        "aiImpact": {
            "summary": "L'IA ne peut vivre une expérience vécue humaine ni partager un repas sous une tente pour nouer des liens de confiance, confirmant le caractère irremplaçable du chercheur de terrain.",
            "positiveImpacts": [
                "Traduction automatique de dialectes rares pour assister les premiers contacts",
                "Numérisation et transcription rapide d'enregistrements audio de récits oraux"
            ],
            "risksAndChallenges": [
                "Réductionnisme algorithmique ignorant les subtilités du non-verbal et des non-dits",
                "Risque d'appropriation culturelle des données indigènes"
            ],
            "recommendedSkills": [
                "Éthique de la collecte des données patrimoniales autochtones",
                "Compétences en anthropologie visuelle et cinéma documentaire"
            ]
        },
        "africaContext": {
            "senegalInsight": "Le Sénégal est une terre fondatrice de l'ethnologie africaine. L'IFAN (fondé en 1936 par Théodore Monod et dirigé plus tard par Cheikh Anta Diop) a documenté les savoirs ancestraux des peuples d'Afrique de l'Ouest (Sérères, Diolas, Peuls, Mandingues). Les anthropologues contemporains étudient les hybridations culturelles, les confréries soufies et les mutations écologiques de la pêche artisanale.",
            "westAfricaOpportunities": "Préservation des savoirs médicinaux traditionnels, médiation culturelle lors de grands projets d'aménagement et lutte contre les épidémies (anthropologie de la santé).",
            "localChampions": [
                "Musée Théodore Monod d'Art Africain (IFAN - Dakar)",
                "Société des Africanistes",
                "Laboratoire d'Anthropologie Médicale de l'UCAD"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Fiche métier : Ethnologue",
                "url": "https://www.imaginetonfutur.com/metier/ethnologue.html",
                "type": "metier"
            },
            {
                "organization": "Musée du Quai Branly - Jacques Chirac",
                "title": "L'anthropologie et l'ethnologie aujourd'hui",
                "url": "https://www.quaibranly.fr",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Selon Imagine ton Futur, pour exercer comme ethnologue, une double compétence est particulièrement recommandée (ex: ethnologie et communication, ou ethnologie et santé publique) afin de travailler pour des ONGs et des organisations internationales !",
            "pourquoi": "Les agences internationales ont compris qu'aucun projet de santé ou d'agriculture ne réussit sans comprendre intimement les croyances et représentations culturelles des populations locales.",
            "a_retenir": "L'ethnologue regarde l'autre pour découvrir ce qui nous unit tous."
        }
    },
    {
        "id": "psychologue-clinicien",
        "slug": "psychologue-clinicien",
        "title": "Psychologue Clinicien",
        "aliases": [
            "Psychothérapeute diplômé",
            "Psychologue de la santé",
            "Clinicien en santé mentale",
            "Psychologue d'hôpital"
        ],
        "icon": "🧠",
        "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Psychologie & Accompagnement",
        "domainId": "psychologie",
        "subdomain": "Psychologie clinique & Psychopathologie",
        "sectors": [
            "Santé & Hôpitaux",
            "Cabinet libéral",
            "Aide sociale & Protection de l'enfance",
            "Éducation"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": false,
        "level": "Bac +5 obligatoire (Master Psychologie clinique et psychopathologie) — Titre protégé par la loi",
        "salary": "🇫🇷 France : 2 000 - 3 800 € net/mois (Hôpital public / Salarié) à 3 500 - 6 500 € en cabinet libéral établi (Source : Imagine ton Futur) • 🇸🇳 Sénégal : 450 000 - 1 600 000 FCFA / mois",
        "simpleDefinition": "Le psychologue clinicien écoute, évalue, diagnostique et traite la souffrance psychologique, les traumatismes, les angoisses et les troubles du comportement chez les enfants, adolescents ou adultes, à travers des thérapies par la parole et des bilans psychologiques.",
        "shortDescription": "Spécialiste de la vie psychique documenté par Imagine ton Futur, il accompagne les personnes en souffrance pour restaurer leur équilibre émotionnel.",
        "longDescription": "Comme souligné dans les ressources d'Imagine ton Futur sur les métiers de la psychologie, le psychologue n'est ni un psychiatre (qui est un médecin habilité à prescrire des médicaments), ni un simple coach. C'est un professionnel titulaire d'un titre protégé par la loi après un Master universitaire sélectif et des centaines d'heures de stage clinique. En milieu hospitalier, en CMP (Centre Médico-Psychologique) ou en cabinet libéral, il offre un cadre d'écoute sécurisant, conduit des entretiens thérapeutiques et utilise des tests projectifs ou neuropsychologiques pour aider chaque personne à surmonter ses épreuves.",
        "mainObjective": "Restaurer l'équilibre psychologique, apaiser la détresse émotionnelle et favoriser le développement personnel des patients.",
        "companyRole": "Praticien de la santé mentale et de l'écoute clinique personnalisée.",
        "workEnvironment": [
            "🛋️ Cabinets libéraux de consultation psychologique",
            "🏥 Établissements hospitaliers (services de psychiatrie, pédiatrie, oncologie, soins palliatifs)",
            "🏢 Centres Médico-Psychologiques (CMP) et maisons d'enfants à caractère social (MECS)"
        ],
        "missions": [
            "Réaliser des entretiens cliniques approfondis pour évaluer la demande et le fonctionnement psychique",
            "Conduire des thérapies individuelles, de couple ou familiales (thérapies analytiques, TCC, systémiques)",
            "Faire passer des bilans psychologiques et tests de personnalité / d'intelligence (WISC, WAIS, Rorschach)",
            "Accompagner les victimes de traumatismes psychologiques ou de violences",
            "Participer aux réunions de synthèse pluridisciplinaires avec les médecins psychiatres, infirmiers et travailleurs sociaux"
        ],
        "typicalDay": [
            {
                "time": "09:00",
                "title": "Consultation clinique en cabinet",
                "desc": "Séance thérapeutique de 45 minutes avec un adulte souffrant d'anxiété généralisée et de phobie sociale."
            },
            {
                "time": "11:00",
                "title": "Passation de bilan psychologique chez un enfant",
                "desc": "Administration d'un test d'efficience cognitive (WISC-V) et analyse des processus attentionnels."
            },
            {
                "time": "14:00",
                "title": "Consultation à l'hôpital en oncologie",
                "desc": "Soutien psychologique d'un patient en cours de protocole de chimiothérapie et échange avec l'équipe soignante."
            },
            {
                "time": "16:30",
                "title": "Séance de supervision professionnelle",
                "desc": "Échange confidentiel avec un psychologue superviseur pour analyser les phénomènes de transfert et contre-transfert."
            }
        ],
        "skills": {
            "technical": [
                "Psychopathologie de l'adulte, de l'adolescent et de l'enfant",
                "Maîtrise des courants thérapeutiques (psychanalytique, cognitivo-comportemental TCC, systémique)",
                "Méthodologie de passation et d'interprétation des tests psychométriques et projectifs",
                "Code de déontologie des psychologues et secret professionnel médical"
            ],
            "human": [
                "Écoute bienveillante inconditionnelle et empathie profonde",
                "Solidité émotionnelle personnelle et capacité à contenir la souffrance d'autrui",
                "Capacité d'analyse clinique fine et neutralité bienveillante"
            ],
            "tools": [
                "Échelles psychométriques standardisées (WISC-V, WAIS-IV, NEPSY-II)",
                "Tests projectifs de personnalité (Rorschach, TAT, Patte-Noire)",
                "Outils de médiation thérapeutique (jeux, dessins, contes métaphoriques pour enfants)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence (Bac +3)",
                    "title": "Licence de Psychologie",
                    "desc": "Enseignement des 4 piliers : psychologie clinique, cognitive, du développement et sociale."
                },
                {
                    "step": "Master professionnel (Bac +5)",
                    "title": "Master Psychologie Clinique, Psychopathologie et Psychologie de la santé",
                    "desc": "Sélection drastique à l'entrée de Master, 500 heures minimum de stage clinique et mémoire de recherche. Donne droit au titre légal de Psychologue."
                }
            ],
            "schools": [
                {
                    "name": "Université Paris Cité (Institut de Psychologie) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Paris 8 Vincennes-Saint-Denis (UFR Psychologie) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Cheikh Anta Diop (Département de Psychologie de la FLSH) — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Numéro ADELI / RPPS (Enregistrement obligatoire auprès de l'Agence Régionale de Santé)",
                "Titre légal de Psychologue (Loi n°85-772)"
            ]
        },
        "career": {
            "sectors": [
                "Santé publique et privée",
                "Pratique libérale",
                "Protection judiciaire de la jeunesse (PJJ)",
                "Milieu pénitentiaire"
            ],
            "employerTypes": [
                "Hôpitaux et cliniques",
                "Cabinet libéral indépendant",
                "Associations médico-sociales"
            ],
            "evolution": [
                "Psychologue clinicien expert près les tribunaux",
                "Directeur d'établissement médico-social",
                "Enseignant-chercheur en psychologie",
                "Psychanalyste certifié"
            ],
            "pros": [
                "Sentiment d'utilité humaine profond et accompagnement de résiliences extraordinaires",
                "Liberté de pratique et organisation souple en cabinet libéral"
            ],
            "cons": [
                "Charge émotionnelle lourde nécessitant une supervision continue",
                "Risque d'usure de compassion (burnout empathique) si l'on ne pose pas de limites nettes"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser une fiche de lecture comparative entre l'approche psychanalytique (Freud/Lacan) et l'approche cognitivo-comportementale (Beck/Ellis) face aux attaques de panique.",
            "steps": [
                "S'inscrire en Licence de Psychologie à l'université",
                "Lire le Code de déontologie des psychologues de France",
                "Faire du bénévolat d'écoute auprès de plateformes d'aide (SOS Amitié, Croix-Rouge Écoute)"
            ],
            "freeResources": [
                "Codededeontologiedespsychologues.fr",
                "Société Française de Psychologie (SFP)"
            ]
        },
        "aiImpact": {
            "summary": "Des chatbots conversationnels prétendent offrir un soutien émotionnel, mais seul un psychologue humain peut ressentir la détresse réelle, percevoir les silences et tisser l'alliance thérapeutique qui guérit.",
            "positiveImpacts": [
                "Outils numériques d'auto-évaluation et journaux de bord d'humeur partagés",
                "Réalité virtuelle thérapeutique pour le traitement des phobies (exposition graduée)"
            ],
            "risksAndChallenges": [
                "Conseils inadaptés voire dangereux générés par des chatbots non régulés",
                "Perte de contact humain direct chez les personnes isolées"
            ],
            "recommendedSkills": [
                "Maîtrise de la téléconsultation psychologique sécurisée",
                "Intégration éthique d'outils numériques complémentaires aux séances en présentiel"
            ]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la santé mentale connaît une prise de conscience historique avec la valorisation de la psychologie clinique et de l'ethnopsychiatrie (illustrée par les travaux mondialement célèbres de l'École de Fann à Dakar, initiée par les Prs Collomb et Diop). Les psychologues sénégalais créent des passerelles uniques entre thérapies occidentales et traditions d'écoute communautaire (le 'Ndeup').",
            "westAfricaOpportunities": "Psychologie d'urgence lors de crises humanitaires, soutien psychologique des réfugiés et lutte contre la stigmatisation des maladies mentales.",
            "localChampions": [
                "Clinique Psychiatrique de Fann (CHNU de Fann - Dakar)",
                "Département de Psychologie de l'UCAD",
                "Association Sénégalaise des Psychologues"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Fiche métier : Psychologue",
                "url": "https://www.imaginetonfutur.com/metier/devenir-psychologue.html",
                "type": "metier"
            },
            {
                "organization": "Fédération Française des Psychologues et de Psychologie (FFPP)",
                "title": "Le titre et l'exercice de psychologue",
                "url": "https://psychologues-psychologie.net",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En France comme dans la plupart des pays francophones, le titre de psychologue est strictement protégé par la loi : nul ne peut se dire psychologue sans détenir une licence ET un master de psychologie comportant un stage validé de 500 heures sous peine de poursuites pénales pour usurpation de titre !",
            "pourquoi": "Cette protection légale garantit aux patients que leur santé mentale est confiée à un professionnel hautement qualifié soumis au secret professionnel.",
            "a_retenir": "Le psychologue clinicien est l'artisan de la parole qui libère et reconstruit."
        }
    },
    {
        "id": "psychologue-du-travail",
        "slug": "psychologue-du-travail",
        "title": "Psychologue du Travail & des Organisations",
        "aliases": [
            "Ergonome psychologue",
            "Consultant en Qualité de Vie au Travail (QVT)",
            "Psychologue d'entreprise",
            "Expert RPS (Risques Psycho-Sociaux)"
        ],
        "icon": "🏢",
        "image": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Psychologie & Accompagnement",
        "domainId": "psychologie",
        "subdomain": "Psychologie du travail, Santé mentale & Ergonomie",
        "sectors": [
            "Grandes entreprises",
            "Services de santé au travail",
            "Cabinets de conseil RH",
            "Institutions publiques"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": true,
        "level": "Bac +5 (Master Psychologie du travail et des organisations, Ergonomie)",
        "salary": "🇫🇷 France : 34 000 - 55 000 € brut/an (~2 300 - 3 800 € net/mois, forte demande en entreprise) • 🇸🇳 Sénégal : 500 000 - 1 700 000 FCFA / mois (Multinationales, banques, télécoms)",
        "simpleDefinition": "Le psychologue du travail étudie les relations entre l'humain et son environnement professionnel pour améliorer le bien-être des salariés, prévenir les risques psychosociaux (burnout, harcèlement, stress), concevoir des organisations de travail saines et accompagner le changement.",
        "shortDescription": "Spécialiste de la santé mentale en entreprise documenté par Imagine ton Futur, il prévient le surmenage et concilie bien-être et performance.",
        "longDescription": "Face à la digitalisation effrénée, au télétravail et aux restructurations permanentes, le psychologue du travail est un acteur pivot des organisations modernes. Il n'intervient pas pour psychanalyser les salariés, mais pour analyser scientifiquement l'activité réelle, l'ergonomie cognitive, la charge mentale et la dynamique des équipes. Il audite les Risques Psycho-Sociaux (RPS), forme les managers à la bienveillance, aménage les postes de travail et aide les entreprises à concilier santé mentale des équipes et efficacité économique.",
        "mainObjective": "Adapter le travail à l'humain afin de protéger la santé psychologique des collaborateurs et d'optimiser l'organisation collective.",
        "companyRole": "Expert en santé au travail, prévention des risques psychosociaux et accompagnement humain des transformations.",
        "workEnvironment": [
            "🏢 Sièges sociaux de grandes entreprises et multinationales",
            "🏥 Services de Prévention et de Santé au Travail (SPST)",
            "💼 Cabinets de conseil en management, ergonomie et ressources humaines"
        ],
        "missions": [
            "Conduire des audits de climat social et des diagnostics approfondis des Risques Psycho-Sociaux (RPS)",
            "Accompagner individuellement les salariés en situation de souffrance professionnelle (burnout, perte de sens)",
            "Animer des ateliers de prévention du stress, de communication non violente et de gestion des conflits",
            "Conseiller les directions des ressources humaines lors de fusions, déménagements ou réorganisations majeures",
            "Concevoir des fiches de postes ergonomiques et adapter les environnements de travail pour les personnes en situation de handicap"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Entretien individuel de soutien psychologique",
                "desc": "Entretien confidentiel avec un manager victime d'épuisement professionnel pour préparer son plan de reprise d'activité."
            },
            {
                "time": "10:30",
                "title": "Animation d'un groupe d'expression sur le télétravail",
                "desc": "Facilitation d'un atelier avec 12 collaborateurs pour identifier les bonnes pratiques d'équilibre vie pro / vie perso."
            },
            {
                "time": "14:00",
                "title": "Restitution d'audit RPS devant le CSE",
                "desc": "Présentation des indicateurs de charge mentale et préconisations d'amélioration devant la direction et les élus du personnel."
            },
            {
                "time": "16:30",
                "title": "Conception d'un module de formation managériale",
                "desc": "Élaboration d'un guide pratique 'Détecter les signes faibles de détresse psychologique dans son équipe'."
            }
        ],
        "skills": {
            "technical": [
                "Psychologie des organisations, dynamique de groupe et psychosociologie",
                "Méthodologie d'analyse de l'activité réelle de travail et ergonomie cognitive",
                "Réglementation sur la santé et sécurité au travail (Document Unique d'Évaluation des Risques - DUERP)",
                "Techniques de médiation et de résolution de conflits interpersonnels"
            ],
            "human": [
                "Neutralité absolue entre les intérêts de la direction et les attentes des salariés",
                "Grande écoute empathique et capacité à désamorcer des situations tendues",
                "Aisance oratoire face aux directions générales et aux partenaires sociaux"
            ],
            "tools": [
                "Questionnaires de mesure du stress et de l'épuisement (MBI de Maslach, Karasek, Siegrist)",
                "Outils de cartographie des processus de travail et grilles d'observation ergonomique",
                "Plateformes d'écoute psychologique et de baromètres d'engagement anonymes"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence (Bac +3)",
                    "title": "Licence de Psychologie",
                    "desc": "Bases de la psychologie sociale, cognitive et des méthodes quantitatives."
                },
                {
                    "step": "Master professionnel (Bac +5)",
                    "title": "Master Psychologie du Travail et des Organisations ou Master Ergonomie",
                    "desc": "Stage professionnel obligatoire en entreprise de 500 heures et titre légal de psychologue."
                }
            ],
            "schools": [
                {
                    "name": "CNAM (Conservatoire National des Arts et Métiers - Chaire de Psychologie du Travail) — Paris, France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Paris Nanterre (Master Psychologie du Travail) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "BEM Dakar / ISM Dakar (Modules RH & Psychologie organisationnelle) — Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Titre légal de Psychologue (ADELI / RPPS)",
                "Certification IPRP (Intervenant en Prévention des Risques Professionnels)"
            ]
        },
        "career": {
            "sectors": [
                "Grandes entreprises industrielles et de services",
                "Services de santé au travail interentreprises",
                "Cabinets de conseil RH et de recrutement",
                "Fonction publique hospitalière et territoriale"
            ],
            "employerTypes": [
                "Directions RH de multinationales",
                "Cabinets de conseil spécialisés QVT",
                "Organismes d'audit"
            ],
            "evolution": [
                "Directeur des Ressources Humaines (DRH)",
                "Responsable RSE et Santé globale",
                "Directeur de cabinet de conseil en management",
                "Consultant indépendant de haut niveau"
            ],
            "pros": [
                "Rôle stratégique très valorisé par les entreprises modernes",
                "Excellente insertion professionnelle et rémunérations attractives"
            ],
            "cons": [
                "Position parfois délicate entre les exigences de rentabilité de la direction et la détresse des salariés",
                "Résistance culturelle au changement dans certaines structures"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Analyser l'ergonomie et la charge mentale d'un poste de travail administratif à partir d'une grille d'observation de 10 critères et proposer 3 améliorations concrètes.",
            "steps": [
                "Découvrir les grilles de diagnostic du stress au travail (modèle Karasek)",
                "Lire 'Le travail à cœur' d'Yves Clot, référence de la psychologie du travail contemporaine",
                "Assister aux webinaires de l'INRS (Institut National de Recherche et de Sécurité)"
            ],
            "freeResources": [
                "INRS.fr (Dossiers sur les risques psychosociaux)",
                "ANACT (Agence Nationale pour l'Amélioration des Conditions de Travail)"
            ]
        },
        "aiImpact": {
            "summary": "L'automatisation et les outils d'IA transforment les métiers à un rythme effréné : le psychologue du travail est indispensable pour concevoir des transitions professionnelles qui respectent la dignité et le rythme d'adaptation des salariés.",
            "positiveImpacts": [
                "Baromètres de bien-être au travail analysés en temps réel par IA pour détecter les signaux d'alerte",
                "Élimination des tâches de saisie fastidieuses au profit de l'accompagnement humain"
            ],
            "risksAndChallenges": [
                "Stress accru lié à la surveillance algorithmique et au travail sous contrôle d'IA",
                "Isolement accru des salariés en 100% télétravail"
            ],
            "recommendedSkills": [
                "Ergonomie des interfaces homme-machine (IHM) augmentées par IA",
                "Accompagnement du changement face aux technologies d'automatisation"
            ]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la croissance rapide du secteur tertiaire (banques, télécoms comme Orange/Sonatel, centres d'appels BPO à Dakar) fait émerger une forte demande de psychologues du travail pour gérer le stress des téléconseillers, prévenir le turnover et adapter le management aux valeurs culturelles locales (solidarité communautaire, respect des aînés).",
            "westAfricaOpportunities": "Politiques de QVT dans les multinationales minières et pétrolières, audit de climat social et formation des cadres dirigeants africains.",
            "localChampions": [
                "Caisse de Sécurité Sociale du Sénégal (Direction de la Prévention)",
                "Sonatel / Orange Sénégal (Direction RH & QVT)",
                "Cabinet Afrique Compétences"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Secteur Éducation, formation, RH & Psychologie",
                "url": "https://www.imaginetonfutur.com/les-metiers/domaine/education-formation-rh.html",
                "type": "metier"
            },
            {
                "organization": "Institut National de Recherche et de Sécurité (INRS)",
                "title": "Les risques psychosociaux au travail",
                "url": "https://www.inrs.fr",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Selon les études de l'OMS et du BIT, chaque euro ou dollar investi par une entreprise dans la prévention de la santé mentale et l'ergonomie génère un retour sur investissement moyen de 4 euros en baisse de l'absentéisme et hausse de productivité !",
            "pourquoi": "Des salariés écoutés et travaillant dans un cadre ergonomique sain sont beaucoup plus innovants et fidèles à leur entreprise.",
            "a_retenir": "Le psychologue du travail prouve que l'humanisme est le meilleur allié de l'efficacité."
        }
    },
    {
        "id": "conseiller-orientation-psychologue",
        "slug": "conseiller-orientation-psychologue",
        "title": "Conseiller d'Orientation Psychologue / Psychologue de l'Éducation Nationale",
        "aliases": [
            "Psychologue de l'Éducation Nationale (PsyEN)",
            "Conseiller d'orientation scolaire",
            "Coach d'orientation professionnelle",
            "Consultant en bilans de compétences"
        ],
        "icon": "🧭",
        "image": "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Psychologie & Accompagnement",
        "domainId": "psychologie",
        "subdomain": "Orientation scolaire, Bilans & Psychologie du développement",
        "sectors": [
            "Éducation Nationale (Collèges, Lycées, CIO)",
            "Enseignement supérieur",
            "Cabinets privés d'orientation",
            "Centres de bilans"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": false,
        "level": "Bac +5 (Master Psychologie) + Concours d'État de Psychologue de l'Éducation Nationale (PsyEN)",
        "salary": "🇫🇷 France : 1 900 - 3 400 € net/mois (Fonction publique d'État, Source : Imagine ton Futur) • 🇸🇳 Sénégal : 350 000 - 950 000 FCFA / mois (Ministère de l'Éducation, CAOSP)",
        "simpleDefinition": "Le conseiller d'orientation psychologue aide les élèves, étudiants et adultes à identifier leurs talents, leurs centres d'intérêt et leurs compétences afin d'élaborer un projet d'études et de carrière réaliste, motivant et épanouissant.",
        "shortDescription": "Guide des trajectoires d'avenir recensé par Imagine ton Futur, il éclaire les choix de filières et dénoue les blocages scolaires.",
        "longDescription": "Comme décrit sur la fiche officielle d'Imagine ton Futur, le conseiller d'orientation psychologue (aujourd'hui PsyEN) possède une double compétence essentielle : il connaît sur le bout des doigts le système éducatif, les filières de formation et l'évolution du marché du travail, tout en étant un psychologue diplômé capable d'écouter les angoisses d'un jeune, de déceler une phobie scolaire ou d'administrer des tests d'intérêts et de personnalité. Il intervient dans les collèges, lycées et Centres d'Information et d'Orientation (CIO) pour redonner confiance à ceux qui hésitent sur leur avenir.",
        "mainObjective": "Permettre à chaque individu de construire son identité professionnelle en alignant ses aspirations personnelles, ses aptitudes réelles et les réalités du monde du travail.",
        "companyRole": "Accompagnateur des transitions d'études et architecte du parcours d'orientation des jeunes.",
        "workEnvironment": [
            "🏫 Collèges et lycées (permanences hebdomadaires)",
            "🏢 Centres d'Information et d'Orientation (CIO)",
            "💼 Cabinets privés d'orientation scolaire et bilans de compétences pour adultes"
        ],
        "missions": [
            "Conduire des entretiens individuels d'orientation pour clarifier les projets et rassurer les élèves et familles",
            "Faire passer et interpréter des questionnaires d'intérêts professionnels et bilans psychologiques (IRMR, RIASEC)",
            "Animer des séances collectives en classe sur la découverte des grandes familles de métiers et Parcoursup",
            "Détecter et prendre en charge les élèves en situation de décrochage scolaire, mal-être ou phobie des apprentissages",
            "Conseiller les équipes pédagogiques et participer aux conseils de classe pour guider les choix de spécialités"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Entretien individuel au lycée",
                "desc": "Entretien de 45 minutes avec un élève de première indécis entre des études de médecine ou d'ingénierie."
            },
            {
                "time": "10:30",
                "title": "Animation d'un atelier en classe de terminale",
                "desc": "Présentation méthodologique de la formulation des vœux et lettres de motivation sur Parcoursup."
            },
            {
                "time": "14:00",
                "title": "Permanence au Centre d'Information et d'Orientation (CIO)",
                "desc": "Accueil sans rendez-vous d'un jeune déscolarisé et orientation vers une filière d'apprentissage adaptée."
            },
            {
                "time": "16:30",
                "title": "Réunion de l'équipe de suivi de scolarisation",
                "desc": "Coordination avec le médecin scolaire et l'assistante sociale pour un plan d'accompagnement personnalisé."
            }
        ],
        "skills": {
            "technical": [
                "Psychologie de l'adolescent, du développement et théories de l'orientation",
                "Connaissance exhaustive des diplômes, filières de formation et débouchés professionnels",
                "Méthodologie de passation et d'analyse des questionnaires d'intérêts (modèle RIASEC de Holland)",
                "Procédures d'affectation et plateformes d'accès à l'enseignement supérieur (Parcoursup)"
            ],
            "human": [
                "Écoute bienveillante dénuée de tout jugement et capacité à rassurer",
                "Patience, neutralité face aux désirs parfois contradictoires des parents et des enfants",
                "Esprit d'encouragement et capacité à faire émerger le potentiel caché"
            ],
            "tools": [
                "Questionnaires d'intérêts et d'orientation (IRMR3, Strong, Profil Pro)",
                "Bases de données documentaires de l'Onisep et référentiels métiers",
                "Plateformes d'affectation scolaire et universitaire"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence (Bac +3)",
                    "title": "Licence de Psychologie",
                    "desc": "Fondements de la psychologie clinique, différentielle et cognitive."
                },
                {
                    "step": "Master (Bac +5)",
                    "title": "Master Psychologie de l'Éducation et de la Formation",
                    "desc": "Formation spécialisée en psychologie du développement et théories de l'orientation scolaire."
                },
                {
                    "step": "Concours de recrutement (Bac +5)",
                    "title": "Concours de Psychologue de l'Éducation Nationale (PsyEN spécialité EDO)",
                    "desc": "Concours d'État sélectif suivi d'une année de stage rémunérée en CIO et établissements scolaires."
                }
            ],
            "schools": [
                {
                    "name": "INETOP / CNAM (Institut National d'Étude du Travail et d'Orientation Professionnelle) — Paris, France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université de Rennes 2 / Université d'Aix-Marseille (Master PsyEN) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "FASTEF (Faculté des Sciences et Technologies de l'Éducation et de la Formation - UCAD) — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certificat de Psychologue de l'Éducation Nationale (PsyEN)",
                "Certification Praticien RIASEC / MBTI"
            ]
        },
        "career": {
            "sectors": [
                "Ministère de l'Éducation Nationale",
                "Services d'orientation universitaire (SCUIO)",
                "Cabinets privés d'orientation et de coaching",
                "Centres de reconversion pour adultes"
            ],
            "employerTypes": [
                "Éducation Nationale (Collèges, Lycées, CIO)",
                "Universités",
                "Cabinets libéraux"
            ],
            "evolution": [
                "Directeur de Centre d'Information et d'Orientation (DCIO)",
                "Inspecteur de l'Éducation Nationale (IEN-IO)",
                "Consultant senior en gestion des carrières et mobilité"
            ],
            "pros": [
                "Rôle décisif pour débloquer l'avenir de jeunes en perte de repères",
                "Rythme de travail aligné sur le calendrier scolaire pour les fonctionnaires"
            ],
            "cons": [
                "Nombre d'élèves très élevé par conseiller (parfois plus de 1 000 élèves par PsyEN)",
                "Lourdeur des procédures administratives d'affectation"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Passer soi-même le test des 6 types de personnalité professionnelle de Holland (RIASEC) et analyser en 3 pages l'adéquation entre son profil et 5 fiches métiers cibles.",
            "steps": [
                "Découvrir la typologie RIASEC (Réaliste, Investigateur, Artistique, Social, Entreprenant, Conventionnel)",
                "Explorer la plateforme Le Monde du Travail et tester l'algorithme de la Boussole",
                "Interviewer un conseiller d'orientation en CIO pour comprendre son quotidien"
            ],
            "freeResources": [
                "Onisep.fr (Portail national d'information sur les métiers)",
                "Orientation.ch (Ressources d'orientation francophones)"
            ]
        },
        "aiImpact": {
            "summary": "Des algorithmes de matching recommandent des listes de métiers à partir de questionnaires, mais seul le conseiller humain sait détecter les peurs cachées, les pressions familiales inconscientes et redonner foi en soi.",
            "positiveImpacts": [
                "Boussoles intelligentes et cartographies de métiers pour élargir les horizons des jeunes",
                "Automatisation de la recherche de critères de formation et de débouchés"
            ],
            "risksAndChallenges": [
                "Enfermement des jeunes dans des profils stéréotypés par des algorithmes simplistes",
                "Risque de découragement face à des scores d'admission anxiogènes"
            ],
            "recommendedSkills": [
                "Posture d'écoute clinique empathique augmentée par les données",
                "Capacité à accompagner le discernement critique face aux suggestions automatisées"
            ]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, l'orientation scolaire et professionnelle est pilotée par les Centres Académiques de l'Orientation Scolaire et Professionnelle (CAOSP) présents dans chaque région. Face à une population dont plus de 60% a moins de 25 ans, les conseillers d'orientation jouent un rôle de sécurité nationale en guidant la jeunesse vers les filières scientifiques, techniques et professionnelles porteuses (BTP, numérique, agroalimentaire) pour lutter contre le sous-emploi.",
            "westAfricaOpportunities": "Mise en place de cellules d'orientation dans les lycées techniques et universités régionales (UGB, USSEIN, UASZ).",
            "localChampions": [
                "CAOSP de Dakar et des régions du Sénégal",
                "FASTEF de l'Université Cheikh Anta Diop",
                "Direction de l'Enseignement Supérieur (DES)"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Fiche métier : Conseiller d'orientation psychologue",
                "url": "https://www.imaginetonfutur.com/metier/conseiller-dorientation-psychologue.html",
                "type": "metier"
            },
            {
                "organization": "Ministère de l'Éducation Nationale",
                "title": "Devenir Psychologue de l'Éducation nationale (PsyEN)",
                "url": "https://www.education.gouv.fr",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Selon Imagine ton Futur, le conseiller d'orientation psychologue est avant tout un psychologue diplômé d'État : son écoute permet de déceler si un problème d'orientation cache en réalité un problème familial, relationnel ou un manque d'estime de soi !",
            "pourquoi": "L'orientation n'est pas une simple formalité administrative : c'est un moment charnière de la construction de sa propre identité d'adulte.",
            "a_retenir": "Le conseiller d'orientation aide chacun à trouver sa boussole intérieure."
        }
    },
    {
        "id": "geographe-cartographe",
        "slug": "geographe-cartographe",
        "title": "Géographe-Cartographe / Analyste SIG",
        "aliases": [
            "Ingénieur géomaticien",
            "Analyste spatial",
            "Cartographe d'aménagement",
            "Géographe urbaniste"
        ],
        "icon": "🌍",
        "image": "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Géographie & Aménagement",
        "domainId": "geographie-amenagement",
        "subdomain": "Cartographie numérique, SIG & Analyse spatiale",
        "sectors": [
            "Aménagement du territoire",
            "Environnement & Climat",
            "Transports & Mobilité",
            "Défense & Géomatique"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": true,
        "level": "Bac +3 (Licence Pro SIG) à Bac +5 (Master Géographie, Aménagement & Géomatique)",
        "salary": "🇫🇷 France : 2 200 - 3 900 € net/mois (~32 000 - 54 000 € brut/an, forte demande SIG) • 🇸🇳 Sénégal : 450 000 - 1 600 000 FCFA / mois (Projets cadastraux, aménagement, ONG)",
        "simpleDefinition": "Le géographe-cartographe collecte, modélise, croise et visualise les données spatiales et territoriales à l'aide de Systèmes d'Information Géographique (SIG) pour concevoir des cartes décisionnelles éclairant l'aménagement urbain, l'environnement et les transports.",
        "shortDescription": "Architecte des cartes et des données spatiales, il combine sciences humaines et technologies numériques pour penser les territoires.",
        "longDescription": "Loin de se limiter à dessiner les frontières, le géographe moderne est un ingénieur de l'espace. En associant une solide compréhension des dynamiques humaines et physiques (urbanisme, sociologie, climatologie) aux outils informatiques les plus puissants (SIG, imagerie satellite, drones, Big Data spatial), il modélise les risques d'inondation, planifie le tracé d'un futur tramway ou cartographie les déserts médicaux pour aider les élus et les entreprises à prendre les bonnes décisions d'implantation.",
        "mainObjective": "Transformer des données géographiques complexes en représentations cartographiques stratégiques et intelligibles pour la gestion du territoire.",
        "companyRole": "Expert en intelligence spatiale et pilotage cartographique des projets territoriaux.",
        "workEnvironment": [
            "🖥️ Stations graphiques de géomatique et double écran de modélisation SIG",
            "🏛️ Collectivités locales, agences d'urbanisme et ministères de l'Aménagement",
            "🛰️ Bureaux d'études en environnement, énergie et sociétés de transport"
        ],
        "missions": [
            "Intégrer et géoréférencer des flux de données massives (images satellites, OpenStreetMap, données démographiques)",
            "Concevoir des analyses spatiales multicritères sous SIG (zones d'influence, couloirs de biodiversité, accessibilité)",
            "Réaliser des cartes thématiques communicantes selon les règles de la sémiologie graphique (Jacques Bertin)",
            "Piloter des applications cartographiques web interactives (WebSIG) pour les citoyens ou les décideurs",
            "Effectuer des relevés de terrain par GPS différentiel ou drone pour mettre à jour les bases spatiales"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Modélisation des îlots de chaleur urbains",
                "desc": "Croisement sous QGIS des données thermographiques satellites avec la densité de végétation pour cartographier les zones prioritaires de végétalisation."
            },
            {
                "time": "11:00",
                "title": "Création d'une carte thématique pour le Plan Local d'Urbanisme",
                "desc": "Mise en page vectorielle sous Illustrator d'une carte de zonage réglementaire pour une métropole."
            },
            {
                "time": "14:00",
                "title": "Développement d'une couche WebSIG interactive",
                "desc": "Configuration d'un tableau de bord cartographique Mapbox / Leaflet pour suivre en direct le réseau de transports."
            },
            {
                "time": "16:30",
                "title": "Réunion avec les urbanistes et élus",
                "desc": "Présentation des résultats de l'étude d'accessibilité piétonne autour des futures gares ferroviaires."
            }
        ],
        "skills": {
            "technical": [
                "Maîtrise des Systèmes d'Information Géographique SIG (QGIS, ArcGIS Pro)",
                "Règles d'or de la sémiologie graphique et du design cartographique",
                "Traitement d'images de télédétection satellite (Sentinel, Landsat) et LiDAR",
                "Gestion de bases de données spatiales (PostGIS, SQL spatial) et langages de script (Python GeoPandas)"
            ],
            "human": [
                "Sens aigu de l'esthétique visuelle et précision géométrique",
                "Esprit de synthèse pour faire ressortir l'essentiel d'une masse de données complexes",
                "Curiosité pour les enjeux sociétaux, environnementaux et géopolitiques"
            ],
            "tools": [
                "Logiciels SIG de référence (QGIS, ArcGIS Pro)",
                "Bases de données relationnelles spatiales (PostgreSQL / PostGIS)",
                "Outils graphiques de mise en page cartographique (Adobe Illustrator + plug-in MAPublisher)",
                "Librairies de webmapping (Leaflet, Mapbox GL JS, OpenLayers)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence (Bac +3)",
                    "title": "Licence de Géographie et Aménagement ou Licence Pro Géomatique",
                    "desc": "Fondations en géographie physique et humaine, initiation aux SIG et à la cartographie statistique."
                },
                {
                    "step": "Master professionnel (Bac +5)",
                    "title": "Master Géomatique / SIG ou Master Aménagement du Territoire et Urbanisme",
                    "desc": "Apprentissage approfondi de la modélisation spatiale, du codage Python spatial et gestion de projets territoriaux."
                }
            ],
            "schools": [
                {
                    "name": "ENSG (École Nationale des Sciences Géographiques - IGN) — Champs-sur-Marne, France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Panthéon-Sorbonne (Master Géoprisme / Géomatique) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Cheikh Anta Diop (Département de Géographie de la FLSH / CSE) — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certification professionnelle Esri ArcGIS Desktop",
                "Brevet de télépilote professionnel de drone civil"
            ]
        },
        "career": {
            "sectors": [
                "Collectivités territoriales (Régions, Métropoles, Mairies)",
                "Bureaux d'études en environnement & BTP",
                "Grandes entreprises de réseaux (Eau, Électricité, Télécoms)",
                "Organismes d'aide internationale"
            ],
            "employerTypes": [
                "Agences d'urbanisme",
                "IGN (Institut national de l'information géographique et forestière)",
                "Sociétés de conseil en géomatique"
            ],
            "evolution": [
                "Chef de projet SIG / Géomatique",
                "Directeur de l'aménagement du territoire",
                "Expert data territoriale & Smart City",
                "Consultant international en cartographie d'urgence"
            ],
            "pros": [
                "Secteur en plein essor au carrefour de la technologie et de l'environnement",
                "Impact visuel immédiat et satisfaction de voir ses cartes guider les décisions"
            ],
            "cons": [
                "Gestion de bases de données volumineuses parfois fastidieuse",
                "Nécessite une veille technologique constante sur les outils du webmapping"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Télécharger le logiciel open-source gratuit QGIS et créer une carte des pistes cyclables ou des espaces verts de sa ville à partir des données ouvertes d'OpenStreetMap.",
            "steps": [
                "Suivre le tutoriel gratuit en ligne 'Débuter avec QGIS 3'",
                "Télécharger des données spatiales ouvertes sur data.gouv.fr ou OpenStreetMap",
                "Appliquer les règles de couleurs et contrastes de la sémiologie graphique pour finaliser sa carte"
            ],
            "freeResources": [
                "QGIS.org (Logiciel SIG libre et documentation complète)",
                "Data.gouv.fr (Données géographiques ouvertes)"
            ]
        },
        "aiImpact": {
            "summary": "L'IA intégrée aux SIG automatise la détection des bâtiments, des parcelles agricoles et de la déforestation sur les images satellites en quelques secondes, propulsant le cartographe vers l'analyse stratégique prédictive.",
            "positiveImpacts": [
                "Cartographie instantanée des dégâts après une catastrophe naturelle par vision par ordinateur",
                "Prédiction des flux de circulation urbaine par modèles de machine learning"
            ],
            "risksAndChallenges": [
                "Erreurs de détection automatique sur les zones ombragées ou nuageuses",
                "Perte de compréhension des réalités de terrain si l'on ne sort plus des écrans"
            ],
            "recommendedSkills": [
                "Spatial Data Science (Python GeoPandas, Rasterio)",
                "Utilisation d'outils de Deep Learning appliqués à l'imagerie satellite (YOLO, Segment Anything)"
            ]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la géomatique est un secteur stratégique national incarné par le Centre de Suivi Écologique (CSE de Dakar), mondialement réputé pour sa surveillance spatiale des feux de brousse, de la désertification et des ressources pastorales. Les géographes sénégalais sont au cœur du Plan Sénégal Émergent pour le cadastre numérique et l'aménagement du pôle urbain de Diamniadio.",
            "westAfricaOpportunities": "Cartographie de la Grande Muraille Verte, prévention des inondations urbaines à Dakar et surveillance côtière contre l'érosion marine.",
            "localChampions": [
                "Centre de Suivi Écologique (CSE - Dakar)",
                "Agence Nationale de l'Aménagement du Territoire (ANAT)",
                "Département de Géographie de l'UCAD"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Secteur Urbanisme, aménagement & Sciences humaines",
                "url": "https://www.imaginetonfutur.com/les-metiers/domaine/urbanisme-btp-immobilier.html",
                "type": "metier"
            },
            {
                "organization": "IGN (Institut national de l'information géographique et forestière)",
                "title": "Les métiers de la géomatique et de la cartographie",
                "url": "https://www.ign.fr",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Plus de 80% des données produites aujourd'hui dans le monde (données de smartphones, transactions financières, livraisons, capteurs météo) comportent une dimension géographique !",
            "pourquoi": "Cette explosion du 'Big Data spatial' fait du géographe-cartographe l'un des spécialistes les plus convoités pour donner une intelligence visuelle aux territoires connectés.",
            "a_retenir": "Faire une carte, ce n'est pas copier la réalité : c'est la rendre intelligible pour guider l'action."
        }
    },
    {
        "id": "politologue-geopolitique",
        "slug": "politologue-geopolitique",
        "title": "Politologue / Analyste Géopolitique",
        "aliases": [
            "Analyste des affaires publiques",
            "Chercheur en sciences politiques",
            "Consultant en risques pays",
            "Analyste des relations internationales"
        ],
        "icon": "🏛️",
        "image": "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Sciences Politiques & Relations Internationales",
        "domainId": "sciences-politiques-ri",
        "subdomain": "Géopolitique, Affaires publiques & Analyse stratégique",
        "sectors": [
            "Affaires étrangères & Diplomatie",
            "Think tanks & Instituts d'analyse",
            "Grandes entreprises multinationales",
            "Médias d'information"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": false,
        "level": "Bac +5 (Sciences Po / IEP, Master Relations Internationales ou Sciences Politiques) à Bac +8 (Doctorat)",
        "salary": "🇫🇷 France : 2 500 - 4 800 € net/mois (~38 000 - 65 000 € brut/an en think tank, ministère ou groupe privé) • 🇸🇳 Sénégal : 550 000 - 1 800 000 FCFA / mois",
        "simpleDefinition": "Le politologue / analyste géopolitique décrypte les équilibres de pouvoir, les élections, les conflits internationaux, les politiques publiques et les traités diplomatiques, fournissant des notes prospectives objectives pour éclairer les États et les entreprises.",
        "shortDescription": "Analyste des rapports de force mondiaux documenté par Imagine ton Futur, il décrypte les crises politiques et anticipe les ruptures géostratégiques.",
        "longDescription": "Loin de tout parti pris idéologique, le politologue aborde les phénomènes politiques avec la rigueur d'un chercheur et l'acuité d'un stratège. Comme relevé dans les formations répertoriées par Imagine ton Futur (Instituts d'Études Politiques - IEP), il maîtrise le droit constitutionnel, la sociologie électorale, l'économie politique et les relations internationales. Il intervient au sein des ministères de la Défense et des Affaires étrangères, des directions de la prospective de grands groupes industriels ou des médias pour analyser les risques géopolitiques (guerres, sanctions, transitions démocratiques) et proposer des scénarios d'anticipation fiables.",
        "mainObjective": "Produire une analyse rigoureuse, prospective et neutre des systèmes politiques nationaux et de la scène internationale pour guider les choix stratégiques.",
        "companyRole": "Conseiller en intelligence stratégique, affaires publiques et analyse des risques pays.",
        "workEnvironment": [
            "🏛️ Instituts d'Études Politiques (Sciences Po), universités et think tanks d'analyse stratégique (IRIS, IFRI, SIPRI)",
            "🌐 Ministères des Affaires Étrangères, ambassades et organisations régionales (Union Africaine, UE, ONU)",
            "🏢 Directions de la stratégie et des affaires publiques de grands groupes multinationaux"
        ],
        "missions": [
            "Rédiger des notes de synthèse stratégique et d'évaluation des 'risques pays' pour des investisseurs ou ministères",
            "Analyser les résultats électoraux, les sondages d'opinion et les dynamiques parlementaires",
            "Décrypter les traités internationaux, les accords de paix et les sanctions économiques",
            "Élaborer des scénarios prospectifs à moyen et long terme sur les tensions géopolitiques régionales",
            "Intervenir dans les médias et colloques pour vulgariser avec rigueur les enjeux géopolitiques contemporains"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Veille diplomatique et revue de presse internationale",
                "desc": "Dépouillement des câbles d'agences et déclarations officielles dans 3 langues sur une zone de crise."
            },
            {
                "time": "10:30",
                "title": "Rédaction d'une note de prospective géopolitique",
                "desc": "Analyse des conséquences d'un changement de régime électoral sur les approvisionnements énergétiques pour une multinationale."
            },
            {
                "time": "14:00",
                "title": "Table ronde dans un think tank",
                "desc": "Débat avec d'anciens diplomates et officiers supérieurs sur l'architecture de sécurité collective régionale."
            },
            {
                "time": "16:30",
                "title": "Enregistrement d'un décryptage géopolitique",
                "desc": "Intervention sur une chaîne d'information internationale pour expliquer les enjeux d'un sommet bilatéral."
            }
        ],
        "skills": {
            "technical": [
                "Théories des relations internationales (réalisme, libéralisme, constructivisme)",
                "Droit international public, géopolitique des ressources (énergie, eau, métaux rares)",
                "Sociologie politique, analyse des régimes politiques comparés et méthodologie de prospective",
                "Maîtrise bilingue ou trilingue impérative (anglais de négociation irréprochable)"
            ],
            "human": [
                "Objectivité et neutralité axiologique absolue (indépendance d'esprit vis-à-vis des partis)",
                "Esprit de synthèse rapide et capacités de rédaction percutantes",
                "Sens aigu de la diplomatie et hauteur de vue face aux emballements médiatiques"
            ],
            "tools": [
                "Bases de données géopolitiques et de conflits (Uppsala Conflict Data Program, ACLED)",
                "Outils de veille informationnelle stratégique (Feedly Pro, Factiva)",
                "Cartes géopolitiques et modélisations d'arbres de scénarios stratégiques"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Diplôme d'IEP / Licence (Bac +3)",
                    "title": "Institut d'Études Politiques (Sciences Po) ou Licence Science Politique",
                    "desc": "Pluridisciplinarité d'excellence : histoire contemporaine, droit public, économie et sociologie politique."
                },
                {
                    "step": "Master professionnel (Bac +5)",
                    "title": "Master Relations Internationales, Affaires Publiques ou Études de Sécurité",
                    "desc": "Spécialisation géographique ou thématique poussée, stages diplomatiques et mémoire de prospective."
                },
                {
                    "step": "Doctorat (Bac +8)",
                    "title": "Doctorat en Sciences Politiques",
                    "desc": "Voie de recherche approfondie pour intégrer les think tanks d'élite ou les postes d'enseignant-chercheur."
                }
            ],
            "schools": [
                {
                    "name": "Sciences Po Paris (Institut d'Études Politiques) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut de Relations Internationales et Stratégiques (IRIS Sup') — Paris, France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Faculté des Sciences Juridiques et Politiques (FSJP - UCAD) — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certificat d'analyse géopolitique de défense (IHEDN)",
                "Certificat d'analyste risques pays"
            ]
        },
        "career": {
            "sectors": [
                "Ministères des Affaires Étrangères et de la Défense",
                "Think tanks mondiaux (IFRI, IRIS, Chatham House, Timbuktu Institute)",
                "Grandes banques et multinationales (Risk Management)",
                "Organisations internationales (ONU, UA, UE)"
            ],
            "employerTypes": [
                "Agences d'État",
                "Instituts de prospective privée",
                "Médias d'analyse internationale"
            ],
            "evolution": [
                "Directeur d'études d'un think tank",
                "Conseiller spécial auprès d'un cabinet ministériel ou présidentiel",
                "Directeur des affaires institutionnelles internationales",
                "Diplomate de carrière"
            ],
            "pros": [
                "Intellectuellement passionnant, au cœur des grands basculements historiques du monde",
                "Reconnaissance d'autorité intellectuelle dans le débat public"
            ],
            "cons": [
                "Pression intense lors des crises internationales imprévues",
                "Exigence d'une neutralité rigoureuse face aux polarisations sociétales"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Rédiger une note de synthèse géopolitique de 3 pages analysant les enjeux de sécurité et d'accès aux ressources dans une région stratégique (ex: le golfe de Guinée ou la mer de Chine).",
            "steps": [
                "Lire chaque mois les revues de référence (Le Monde Diplomatique, Politique Étrangère, Foreign Affairs)",
                "Écouter les podcasts de prospective géopolitique (Le Collimateur, Géopolitique sur France Inter)",
                "S'entraîner à cartographier les alliances et rivalités entre les acteurs d'un conflit"
            ],
            "freeResources": [
                "IRIS-France.org (Analyses géopolitiques en libre accès)",
                "Cairn.info (Revue Politique Étrangère de l'IFRI)"
            ]
        },
        "aiImpact": {
            "summary": "L'IA analyse d'immenses flux d'informations ouvertes (OSINT) et détecte des signaux faibles de déstabilisation, mais seul le politologue humain sait évaluer la psychologie des chefs d'État, les facteurs culturels et le poids de l'honneur dans les décisions de guerre ou de paix.",
            "positiveImpacts": [
                "Surveillance des signaux faibles de crise par traitement automatique du langage sur les réseaux",
                "Cartographie automatisée des flux de commerce d'armes et d'énergie"
            ],
            "risksAndChallenges": [
                "Désinformation de masse et 'deepfakes' géopolitiques créés pour manipuler l'opinion",
                "Risque de sur-confiance dans des algorithmes aveugles à l'irrationalité humaine"
            ],
            "recommendedSkills": [
                "Méthodes d'investigation en sources ouvertes (OSINT)",
                "Analyse critique de la propagande et des opérations de cyberguerre cognitive"
            ]
        },
        "africaContext": {
            "senegalInsight": "Dakar est l'épicentre intellectuel de la géopolitique ouest-africaine. Elle accueille chaque année le Forum International de Dakar sur la Paix et la Sécurité en Afrique, réunissant chefs d'État, généraux et chercheurs. Des think tanks de renommée mondiale y sont basés (Timbuktu Institute, CODESRIA, Gorée Institute) pour analyser les transitions politiques sahéliennes et la sécurité maritime.",
            "westAfricaOpportunities": "Médiation de paix dans le Sahel, analyse de la gouvernance démocratique de la CEDEAO et prospective sur l'autonomie stratégique africaine.",
            "localChampions": [
                "Timbuktu Institute - African Center for Peace Studies (Dakar)",
                "CODESRIA (Conseil pour le Développement de la Recherche en Sciences Sociales en Afrique)",
                "FSJP de l'Université Cheikh Anta Diop"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Secteur Droit et sciences politiques",
                "url": "https://www.imaginetonfutur.com/les-metiers/domaine/droit-et-sciences-politiques.html",
                "type": "metier"
            },
            {
                "organization": "Association Française de Science Politique (AFSP)",
                "title": "Les métiers de la science politique",
                "url": "https://www.afsp.info",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Le Timbuktu Institute, basé à Dakar et dirigé par des politologues et universitaires de renommée internationale, est l'un des centres d'études géopolitiques les plus consultés au monde par l'ONU et l'Union Européenne pour prévenir l'extrémisme violent au Sahel !",
            "pourquoi": "Leur approche endogène privilégie la diplomatie culturelle et religieuse africaine plutôt que les seules réponses militaires.",
            "a_retenir": "Le politologue éclaire la marche du monde pour conjurer le fracas des armes."
        }
    },
    {
        "id": "documentaliste",
        "slug": "documentaliste",
        "title": "Documentaliste / Chargé de Gestion de l'Information",
        "aliases": [
            "Professeur documentaliste",
            "Veilleur documentaire",
            "Gestionnaire de bases documentaires",
            "Documentaliste d'entreprise"
        ],
        "icon": "📚",
        "image": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Documentation & Information",
        "domainId": "documentation-information",
        "subdomain": "Recherche documentaire, Gestion de l'information & Veille",
        "sectors": [
            "Entreprises & R&D",
            "Médias & Audiovisuel",
            "Éducation Nationale (Collèges/Lycées - CDI)",
            "Instituts de recherche"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": false,
        "level": "Bac +3 (Licence Pro Métiers de l'Information) à Bac +5 (Master Information-Documentation, Concours CAPES Documentation)",
        "salary": "🇫🇷 France : 1 900 - 3 200 € net/mois (Entreprise ou Éducation Nationale, Source : Imagine ton Futur) • 🇸🇳 Sénégal : 350 000 - 1 100 000 FCFA / mois (Diplômés EBAD)",
        "simpleDefinition": "Le documentaliste recherche, sélectionne, valide, classe et diffuse l'information stratégique et scientifique au sein d'une organisation (entreprise, média, établissement scolaire) pour permettre aux utilisateurs de prendre les meilleures décisions.",
        "shortDescription": "Spécialiste de la recherche et de la sélection de l'information documenté par Imagine ton Futur, il transforme le flot de données en savoir utile.",
        "longDescription": "Comme décrit sur la fiche officielle d'Imagine ton Futur, dans un monde submergé par l'infobésité et les fausses nouvelles, le documentaliste est un expert indispensable de la sélection et de la validation des sources. Il maîtrise les opérateurs booléens de recherche avancée, interroge des bases de données spécialisées inaccessibles sur le web grand public, indexe les ressources selon des thésaurus rigoureux et diffuse des revues de presse ou dossiers documentaires sur mesure pour les ingénieurs, journalistes ou enseignants.",
        "mainObjective": "Fournir la bonne information, fiable et validée, à la bonne personne et au bon moment pour optimiser la prise de décision et l'apprentissage.",
        "companyRole": "Gestionnaire du capital informationnel et garant de la fiabilité des sources documentaires.",
        "workEnvironment": [
            "🏫 Centres de Documentation et d'Information (CDI) d'établissements scolaires",
            "📺 Chaînes de télévision et rédactions de presse (services de documentation visuelle)",
            "🏢 Sièges sociaux de grandes entreprises, laboratoires pharmaceutiques et cabinets d'avocats"
        ],
        "missions": [
            "Interroger des bases de données spécialisées et extraire l'information stratégique avec rapidité et exactitude",
            "Évaluer la fiabilité, l'autorité scientifique et la fraîcheur des sources trouvées",
            "Indexer et cataloguer les documents numériques et physiques selon des normes bibliothéconomiques (Unimarc, Dublin Core)",
            "Élaborer des revues de presse quotidiennes, synthèses documentaires et bulletins de veille ciblés",
            "Former les élèves ou collaborateurs à la méthodologie de recherche documentaire et à l'esprit critique face aux fake news"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Diffusion de la revue de presse thématique",
                "desc": "Sélection et synthèse des 10 articles majeurs de la presse mondiale sur les réglementations environnementales du secteur."
            },
            {
                "time": "10:30",
                "title": "Recherche documentaire approfondie pour la R&D",
                "desc": "Interrogation des bases de données de brevets et de littérature scientifique pour une équipe de chercheurs."
            },
            {
                "time": "14:00",
                "title": "Séance pédagogique en CDI avec une classe",
                "desc": "Atelier pratique avec des lycéens pour apprendre à débusquer les théories du complot et les images générées par IA."
            },
            {
                "time": "16:30",
                "title": "Indexation et alimentation de la GED",
                "desc": "Intégration et balisage de 40 nouveaux rapports techniques dans le logiciel de gestion électronique de documents."
            }
        ],
        "skills": {
            "technical": [
                "Techniques de recherche d'information avancée (langages d'interrogation, opérateurs logiques, web invisible)",
                "Indexation documentaire, langages documentaires et thésaurus (Rameau, Dewey)",
                "Normes de métadonnées documentaires (Dublin Core, ISO 2709)",
                "Droit de l'information (droit d'auteur, licences Creative Commons, droit de réutilisation des données)"
            ],
            "human": [
                "Curiosité insatiable pour tous les domaines de la connaissance",
                "Sens aigu du service utilisateur et grande réactivité",
                "Pédagogie et talent de vulgarisation pour transmettre les réflexes de vérification"
            ],
            "tools": [
                "Systèmes Intégrés de Gestion de Bibliothèques / Documentation (PMB, BCDI, Koha)",
                "Bases de données professionnelles (Factiva, LexisNexis, ScienceDirect, Cairn)",
                "Agrégateurs de flux RSS et outils de veille documentaire (Inoreader, Feedly, Netvibes)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence (Bac +3)",
                    "title": "Licence Information-Communication option Documentation",
                    "desc": "Bases de la recherche d'information, des langages documentaires et du droit de l'information."
                },
                {
                    "step": "Master professionnel (Bac +5)",
                    "title": "Master Métiers de l'Information et de la Documentation (ou CAPES Doc)",
                    "desc": "Architecture de l'information, veille stratégique ou concours de Professeur Documentaliste (Capes)."
                }
            ],
            "schools": [
                {
                    "name": "INTD / CNAM (Institut National des Techniques de la Documentation) — Paris, France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Gustave Eiffel / Université Paul-Valéry Montpellier (Master Doc) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "EBAD (École de Bibliothécaires, Archivistes et Documentalistes - UCAD) — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "CAPES de Professeur Documentaliste",
                "Certificat de Veilleur Stratégique de l'ADBS"
            ]
        },
        "career": {
            "sectors": [
                "Éducation Nationale (Collèges, Lycées)",
                "Grands médias (INA, TF1, France Télévisions, Le Monde)",
                "Industrie pharmaceutique et chimique",
                "Cabinets de conseil et banques"
            ],
            "employerTypes": [
                "Établissements scolaires",
                "Groupes de médias",
                "Centres de recherche"
            ],
            "evolution": [
                "Responsable du centre de ressources documentaires",
                "Knowledge Manager d'entreprise",
                "Chef de projet en gouvernance de l'information numérique"
            ],
            "pros": [
                "Métier au cœur de la connaissance et de la vérité factuelle",
                "Grande diversité des sujets traités au quotidien"
            ],
            "cons": [
                "Travail sur écran prolongé",
                "Nécessité de défendre la valeur de l'information vérifiée face à l'illusion du 'tout gratuit sur Google'"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Créer un dossier documentaire thématique de 5 pages sur les énergies renouvelables en sélectionnant 8 sources expertes validées avec bibliographie normalisée aux normes ISO 690.",
            "steps": [
                "Apprendre à utiliser les opérateurs booléens (AND, OR, NOT, guillemets) sur Google et les moteurs académiques",
                "Découvrir la plateforme documentaire ouverte Cairn.info",
                "Consulter le site de l'ADBS (Association des professionnels de l'information et de la documentation)"
            ],
            "freeResources": [
                "ADBS.fr (Association des professionnels de l'information)",
                "CLEMI (Centre pour l'éducation aux médias et à l'information)"
            ]
        },
        "aiImpact": {
            "summary": "L'IA génère des synthèses de textes mais hallucine des sources inventées : le documentaliste est le vérificateur ultime de l'authenticité des références et de la solidité des preuves documentaires.",
            "positiveImpacts": [
                "Automatisation des résumés documentaires préliminaires",
                "Recherche sémantique vectorielle plus intuitive dans les bases documentaires internes"
            ],
            "risksAndChallenges": [
                "Propagation de fausses citations créées par des modèles d'IA",
                "Illusion que l'IA sait tout sans avoir besoin de vérifier les sources primaires"
            ],
            "recommendedSkills": [
                "Techniques de vérification des sources et fact-checking de contenus générés par IA",
                "Knowledge Management et structuration de bases de données pour systèmes RAG"
            ]
        },
        "africaContext": {
            "senegalInsight": "L'EBAD de l'UCAD à Dakar forme depuis plus d'un demi-siècle les spécialistes de la documentation de toute l'Afrique de l'Ouest et Centrale. Les documentalistes y jouent un rôle moteur dans les centres de documentation des ministères, des ONG régionales et des universités pour organiser le libre accès aux thèses et à la recherche africaine.",
            "westAfricaOpportunities": "Documentation agricole pour les coopératives rurales, centres de ressources sur le changement climatique et numérisation des revues savantes africaines.",
            "localChampions": [
                "EBAD de l'Université Cheikh Anta Diop",
                "Centre National de Documentation Scientifique et Technique (CNDST - Sénégal)",
                "Bibliothèque Centrale de l'UCAD"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Fiche métier : Documentaliste",
                "url": "https://www.imaginetonfutur.com/metier/documentaliste.html",
                "type": "metier"
            },
            {
                "organization": "ADBS (Association des professionnels de l'information et de la documentation)",
                "title": "Le référentiel des métiers de l'information",
                "url": "https://www.adbs.fr",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Selon Imagine ton Futur, le documentaliste est le spécialiste absolu qui sait naviguer dans le 'web invisible' : cette immense partie d'internet (plus de 90% des bases de données mondiales) qui n'est pas indexée par les moteurs grand public comme Google !",
            "pourquoi": "Sans l'intervention du documentaliste, ces gisements de savoirs scientifiques et juridiques resteraient totalement inaccessibles aux chercheurs et dirigeants.",
            "a_retenir": "Le documentaliste éclaire le chemin de la vérité dans l'océan de l'information."
        }
    },
    {
        "id": "bibliothecaire",
        "slug": "bibliothecaire",
        "title": "Bibliothécaire / Conservateur des Bibliothèques",
        "aliases": [
            "Bibliothécaire universitaire",
            "Médiathécaire",
            "Directeur de médiathèque",
            "Chargé de collections patrimoniales"
        ],
        "icon": "📚",
        "image": "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Documentation & Information",
        "domainId": "documentation-information",
        "subdomain": "Bibliothèques, Médiathèques & Collections publiques",
        "sectors": [
            "Lecture publique (Villes & Métropoles)",
            "Enseignement supérieur (BU)",
            "Bibliothèques nationales (BnF)",
            "Instituts culturels"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": false,
        "level": "Bac +3 (Licence Pro Métiers du Livre) à Bac +5 (Master Métiers du Livre / Enssib)",
        "salary": "🇫🇷 France : 1 900 - 3 400 € net/mois (Cadre A de la fonction publique d'État ou territoriale, Source : Imagine ton Futur) • 🇸🇳 Sénégal : 350 000 - 1 200 000 FCFA / mois (Diplômés EBAD, universités)",
        "simpleDefinition": "Le bibliothécaire sélectionne, acquiert, catalogue, conserve et met à disposition du public des collections de livres, revues, documents numériques, musiques et films, tout en animant la vie culturelle et l'accès démocratique au savoir.",
        "shortDescription": "Passeur culturel et gestionnaire des savoirs répertorié par Imagine ton Futur, il transforme les bibliothèques en lieux vivants de rencontre et de découverte.",
        "longDescription": "Comme décrit dans les fiches officielles d'Imagine ton Futur, les bibliothèques modernes se sont métamorphosées en 'troisièmes lieux' conviviaux et connectés. Le bibliothécaire n'est plus seulement celui qui demande le silence entre les rayonnages : il est un médiateur culturel dynamique. Il choisit les nouveautés littéraires, conseille les lecteurs de tous âges, numérise des manuscrits précieux, organise des clubs de lecture, des projections de films et des ateliers d'initiation au numérique pour lutter contre la fracture digitale.",
        "mainObjective": "Garantir le libre accès de tous les citoyens à la culture, à l'information et à la formation tout au long de la vie.",
        "companyRole": "Médiateur culturel public et gestionnaire de collections documentaires physiques et dématérialisées.",
        "workEnvironment": [
            "🏛️ Médiathèques municipales, intercommunales et métropolitaines",
            "🎓 Bibliothèques Universitaires (BU) et grandes écoles",
            "📖 Bibliothèques nationales (Bibliothèque nationale de France - BnF, Bibliothèque Centrale de Dakar)"
        ],
        "missions": [
            "Constituer et enrichir les collections en achetant livres, romans, essais, revues et abonnements numériques",
            "Cataloguer et indexer les ouvrages selon les normes internationales (UNIMARC, RDA-FR)",
            "Accueillir, conseiller et orienter les usagers dans leurs lectures et recherches académiques",
            "Concevoir une programmation culturelle vivante (expositions, rencontres d'auteurs, ateliers numériques, heures du conte)",
            "Participer à la conservation préventive des fonds patrimoniaux rares et précieux"
        ],
        "typicalDay": [
            {
                "time": "09:00",
                "title": "Comité d'acquisitions de livres",
                "desc": "Sélection des 50 nouveaux titres de rentrée littéraire et d'essais sociologiques à commander pour les rayons."
            },
            {
                "time": "11:00",
                "title": "Catalogage et indexation sous SIGB",
                "desc": "Saisie des notices bibliographiques et attribution des cotes de rangement selon la classification décimale de Dewey."
            },
            {
                "time": "14:00",
                "title": "Ouverture des portes et accueil des lecteurs",
                "desc": "Conseil personnalisé à des étudiants pour la bibliographie de leur mémoire et à des familles pour des albums jeunesse."
            },
            {
                "time": "17:00",
                "title": "Animation du club de lecture mensuel",
                "desc": "Modération d'un échange passionné entre 15 usagers autour d'un roman africain contemporain primé."
            }
        ],
        "skills": {
            "technical": [
                "Bibliothéconomie et normes internationales de catalogage (UNIMARC, RDA, normes de l'IFLA)",
                "Classification décimale Dewey et langages d'indexation matière (Rameau)",
                "Politique documentaire (désherbage, plans de développement des collections)",
                "Médiation culturelle et gestion de projets d'animation publique"
            ],
            "human": [
                "Immense culture générale et amour contagieux de la lecture",
                "Sens du contact humain, écoute bienveillante et ouverture à tous les publics",
                "Pédagogie et esprit d'initiative pour imaginer de nouvelles animations"
            ],
            "tools": [
                "Systèmes Intégrés de Gestion de Bibliothèques SIGB (Koha, Nanook, Aloès, Decalog)",
                "Portails documentaires web pour les usagers (OPAC)",
                "Logiciels de gestion des prêts automatiques par puces RFID"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence (Bac +3)",
                    "title": "Licence Lettres, Histoire ou Licence Pro Métiers du Livre",
                    "desc": "Culture générale, histoire du livre et premiers stages en bibliothèque publique."
                },
                {
                    "step": "Master professionnel (Bac +5)",
                    "title": "Master Métiers du Livre et de l'Édition ou Diplôme de l'Enssib",
                    "desc": "Conseillé par Imagine ton Futur : formation d'élite aux concours de la fonction publique d'État (bibliothécaire universitaire, conservateur) et territoriale."
                }
            ],
            "schools": [
                {
                    "name": "Enssib (École Nationale Supérieure des Sciences de l'Information et des Bibliothèques) — Lyon, France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Paris Nanterre (Pôle Métiers du Livre) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "EBAD (École de Bibliothécaires, Archivistes et Documentalistes - UCAD) — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Concours de Bibliothécaire d'État ou Territorial",
                "Concours de Conservateur des Bibliothèques (Enssib)"
            ]
        },
        "career": {
            "sectors": [
                "Lecture publique (Collectivités territoriales)",
                "Enseignement supérieur (Ministère de la Recherche)",
                "Bibliothèques nationales patrimoniales",
                "Instituts culturels à l'étranger"
            ],
            "employerTypes": [
                "Villes et communautés de communes",
                "Universités publiques",
                "Ministère de la Culture"
            ],
            "evolution": [
                "Directeur de médiathèque",
                "Conservateur en chef des bibliothèques",
                "Directeur de réseau de lecture publique métropolitain",
                "Inspecteur général des bibliothèques"
            ],
            "pros": [
                "Cadre de travail magnifique entouré de livres et de savoirs",
                "Rôle social fort et gratuité de l'accès à la culture pour tous"
            ],
            "cons": [
                "Travail régulier le samedi pour accueillir le public familial",
                "Concours de la fonction publique très disputés"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Créer une bibliographie commentée de 10 romans incontournables de la littérature mondiale avec un cartel de recommandation pour chaque livre.",
            "steps": [
                "Visiter la médiathèque la plus proche et observer l'organisation des rayonnages par la classification Dewey",
                "Consulter le portail Enssib.fr pour découvrir les fiches pratiques de bibliothéconomie",
                "Faire du bénévolat dans une bibliothèque de quartier ou une boîte à livres citoyenne"
            ],
            "freeResources": [
                "Enssib.fr (Fiches pratiques et bibliothèque numérique de référence)",
                "BnF.fr (Catalogues et expositions virtuelles de la Bibliothèque nationale de France)"
            ]
        },
        "aiImpact": {
            "summary": "L'IA personnalise les recommandations de lecture et transcrit les manuscrits anciens numérisés, renforçant le rôle irremplaçable du bibliothécaire comme tisseur de lien social et animateur de quartier.",
            "positiveImpacts": [
                "Systèmes de recommandation intelligents fondés sur les affinités littéraires des usagers",
                "Recherche vocale et accessibilité accrue pour les personnes malvoyantes"
            ],
            "risksAndChallenges": [
                "Tentative de réduction des horaires d'ouverture avec des automates sans présence humaine",
                "Surconsommation d'écrans au détriment de la lecture profonde"
            ],
            "recommendedSkills": [
                "Animation d'ateliers de sensibilisation citoyenne à l'IA",
                "Médiation numérique inclusive pour les personnes âgées et non connectées"
            ]
        },
        "africaContext": {
            "senegalInsight": "Dakar abrite la Bibliothèque Centrale de l'UCAD (la plus grande bibliothèque universitaire d'Afrique de l'Ouest francophone avec plus de 500 000 ouvrages) ainsi que le réseau des bibliothèques de l'Institut Français. Les bibliothécaires sénégalais, tous formés à l'EBAD, jouent un rôle fondamental pour promouvoir la lecture dans les quartiers populaires et valoriser les littératures africaines.",
            "westAfricaOpportunities": "Réseau des Centres de Lecture et d'Animation Culturelle (CLAC) en milieu rural soutenu par l'OIF, bibliobus itinérants et numérisation des thèses africaines.",
            "localChampions": [
                "Bibliothèque Centrale de l'UCAD (Dakar)",
                "EBAD de l'Université Cheikh Anta Diop",
                "Réseau des CLAC du Sénégal (Direction du Livre)"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Fiche métier : Bibliothécaire",
                "url": "https://www.imaginetonfutur.com/metier/bibliothecaire.html",
                "type": "metier"
            },
            {
                "organization": "Enssib (École Nationale Supérieure des Sciences de l'Information et des Bibliothèques)",
                "title": "Les métiers en bibliothèque",
                "url": "https://www.enssib.fr",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Selon les sources d'Imagine ton Futur, les bibliothèques sont l'équipement culturel le plus fréquenté de France, avec plus de 16 000 bibliothèques et points d'accès accueillant chaque année des dizaines de millions de visites !",
            "pourquoi": "Elles sont le seul lieu public totalement gratuit où n'importe quel citoyen peut entrer, s'asseoir au chaud, lire, travailler, se connecter à internet et apprendre sans rien payer.",
            "a_retenir": "Le bibliothécaire maintient allumée la flamme du savoir pour chaque citoyen."
        }
    },
    {
        "id": "mediateur-culturel",
        "slug": "mediateur-culturel",
        "title": "Médiateur Culturel",
        "aliases": [
            "Chargé des publics",
            "Médiateur de musée",
            "Guide-conférencier culturel",
            "Animateur du patrimoine"
        ],
        "icon": "🎭",
        "image": "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Médiation Culturelle",
        "domainId": "culture-mediation",
        "subdomain": "Éducation artistique, Médiation des publics & Événements culturels",
        "sectors": [
            "Musées & Centres d'art",
            "Théâtres & Salles de spectacle",
            "Monuments historiques",
            "Festivals & Biennales"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": false,
        "level": "Bac +3 (Licence Pro Médiation culturelle) à Bac +5 (Master Médiation culturelle et communication)",
        "salary": "🇫🇷 France : 1 800 - 2 800 € net/mois (Musées, collectivités territoriales, fondations) • 🇸🇳 Sénégal : 350 000 - 950 000 FCFA / mois (Biennale de Dakar, MCN, centres culturels)",
        "simpleDefinition": "Le médiateur culturel crée des ponts vivants entre les œuvres artistiques ou patrimoniales et tous les publics (scolaires, familles, personnes éloignées de la culture, personnes handicapées), en concevant des visites guidées passionnantes, des ateliers participatifs et des outils interactifs.",
        "shortDescription": "Tisseur de liens entre l'art et les citoyens, il rend la culture accessible, compréhensible et émouvante pour chacun.",
        "longDescription": "L'art et le patrimoine peuvent parfois intimider. C'est là qu'intervient le médiateur culturel. Doté d'une solide formation en histoire de l'art, lettres ou histoire, il vulgarise sans jamais simplifier à l'excès. Dans les musées, théâtres, châteaux ou festivals, il invente des visites contées pour les tout-petits, des parcours sensoriels pour les personnes aveugles, des escape games patrimoniaux pour les adolescents et des projets d'action culturelle en milieu carcéral ou hospitalier.",
        "mainObjective": "Faciliter l'appropriation sensible et intellectuelle de l'art et du patrimoine par tous les publics sans exception.",
        "companyRole": "Ambassadeur des publics et créateur d'expériences culturelles mémorables au sein des institutions artistiques.",
        "workEnvironment": [
            "🏛️ Musées, monuments nationaux et centres d'art contemporain",
            "🎭 Théâtres, opéras et salles de spectacles vivants",
            "🎒 Déplacements dans les écoles, hôpitaux et centres sociaux"
        ],
        "missions": [
            "Concevoir et animer des visites guidées interactives adaptées aux différents profils de visiteurs",
            "Créer des outils d'aide à la visite (livrets-jeux pour enfants, applications interactives, cartels explicatifs)",
            "Mettre en place des projets d'éducation artistique et culturelle (EAC) en partenariat avec les écoles",
            "Organiser des actions culturelles ciblées pour les publics du champ social et les personnes en situation de handicap",
            "Recueillir et analyser les retours des visiteurs pour améliorer continuellement l'accueil du musée"
        ],
        "typicalDay": [
            {
                "time": "09:30",
                "title": "Visite atelier avec une classe d'école primaire",
                "desc": "Parcours interactif dans les salles de peinture suivi d'un atelier pratique de création d'autoportraits."
            },
            {
                "time": "11:30",
                "title": "Conception d'un livret d'exposition pour ados",
                "desc": "Rédaction de textes décalés et conception de jeux d'énigmes pour accompagner la future biennale d'art contemporain."
            },
            {
                "time": "14:30",
                "title": "Visite guidée thématique pour adultes",
                "desc": "Animation d'une visite d'une heure sur le thème 'Femmes artistes et figures de pouvoir dans l'Antiquité'."
            },
            {
                "time": "16:30",
                "title": "Réunion avec un centre social de quartier",
                "desc": "Co-construction d'un projet de visite privilégiée pour des jeunes n'ayant jamais mis les pieds dans un musée."
            }
        ],
        "skills": {
            "technical": [
                "Histoire de l'art, histoire et connaissances approfondies du champ culturel",
                "Pédagogie active et méthodologie de la médiation des savoirs",
                "Réglementation de l'accessibilité culturelle et démarches de démocratisation",
                "Techniques de prise de parole en public et storytelling narratif"
            ],
            "human": [
                "Enthousiasme communicatif et charisme oral bienveillant",
                "Grande capacité d'écoute et adaptabilité immédiate à tous les publics",
                "Patience, créativité ludique et générosité de transmission"
            ],
            "tools": [
                "Mallettes pédagogiques et matériel d'ateliers créatifs",
                "Outils de publication assistée par ordinateur pour livrets (Canva, InDesign)",
                "Dispositifs numériques de visite (tablettes tactiles, casques de réalité virtuelle)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence (Bac +3)",
                    "title": "Licence Histoire de l'art, Lettres ou Licence Pro Médiation culturelle",
                    "desc": "Culture artistique solide et premiers stages d'animation de visites dans des musées ou châteaux."
                },
                {
                    "step": "Master professionnel (Bac +5)",
                    "title": "Master Médiation Culturelle, Ingénierie de Projets Culturels ou Muséologie",
                    "desc": "Conception de politiques de publics, partenariats territoriaux et pilotage d'actions culturelles d'envergure."
                }
            ],
            "schools": [
                {
                    "name": "Université Sorbonne Nouvelle (Master Médiation Culturelle) — Paris, France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "École du Louvre (Parcours Médiation et Publics) — Paris, France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut Supérieur des Arts et des Métiers de la Culture (ISAC / UCAD) — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Carte professionnelle de Guide-conférencier",
                "Brevet d'Aptitude aux Fonctions d'Animateur (BAFA)"
            ]
        },
        "career": {
            "sectors": [
                "Musées et fondations d'art",
                "Théâtres nationaux et scènes conventionnées",
                "Monuments historiques et offices de tourisme",
                "Festivals internationaux"
            ],
            "employerTypes": [
                "Établissements publics culturels",
                "Collectivités locales",
                "Compagnies artistiques"
            ],
            "evolution": [
                "Responsable du service des publics",
                "Directeur de l'action culturelle d'une métropole",
                "Chargé de programmation culturelle",
                "Commissaire d'exposition grand public"
            ],
            "pros": [
                "Métier joyeux, humain et riche de partages quotidiens",
                "Satisfaction d'allumer une étincelle de curiosité chez un enfant ou un néophyte"
            ],
            "cons": [
                "Horaires décalés (week-ends, soirées de vernissages)",
                "Statuts contractuels parfois précaires au démarrage de carrière"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Concevoir un parcours de visite commentée de 45 minutes pour faire découvrir 5 monuments ou œuvres de sa ville à un groupe d'amis.",
            "steps": [
                "Rechercher des anecdotes historiques vérifiées sur les 5 lieux choisis",
                "Construire un fil conducteur narratif engageant sans jargon technique",
                "Tester sa visite en direct et chronométrer son intervention en recueillant les impressions"
            ],
            "freeResources": [
                "Culture.gouv.fr (Ressources sur l'Éducation Artistique et Culturelle)",
                "Fondation Culture & Diversité"
            ]
        },
        "aiImpact": {
            "summary": "Les audioguides par IA répondent aux questions factuelles, mais seul le médiateur humain sait adapter son regard, ressentir l'ennui ou l'émerveillement d'un groupe et créer une émotion collective partagée.",
            "positiveImpacts": [
                "Génération rapide de quiz interactifs et de scénarios de jeux de piste",
                "Traduction instantanée des livrets de visite dans toutes les langues"
            ],
            "risksAndChallenges": [
                "Tentative de remplacement des guides humains par des casques audio automatisés",
                "Perte de la chaleur de l'échange humain"
            ],
            "recommendedSkills": [
                "Conception d'expériences de visite hautement sensorielles et interactives",
                "Médiation inclusive pour les publics empêchés ou en situation de handicap"
            ]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la médiation culturelle est au cœur de la vitalité artistique dakaroise. Lors de la Biennale de Dakar (Dak'Art), les médiateurs culturels guident des milliers de scolaires dans les expositions internationales du Musée des Civilisations Noires ou de l'Ancien Palais de Justice. Ils perpétuent la tradition de l'oralité en la reliant à la création contemporaine la plus moderne.",
            "westAfricaOpportunities": "Médiation dans les nouveaux centres culturels régionaux, parcours de mémoire sur l'Île de Gorée et transmission des contes et traditions orales aux jeunes générations.",
            "localChampions": [
                "Biennale de Dakar (Service de médiation des publics)",
                "Musée des Civilisations Noires (MCN - Dakar)",
                "Centre Culturel Blaise Senghor"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Secteur Art, culture & Médiation",
                "url": "https://www.imaginetonfutur.com/les-metiers/domaine/art-culture-audiovisuel.html",
                "type": "metier"
            },
            {
                "organization": "Ministère de la Culture",
                "title": "Les métiers de la médiation culturelle",
                "url": "https://www.culture.gouv.fr",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Dans les musées modernes, plus de 50% des visiteurs déclarent qu'une visite guidée animée par un médiateur passionné a radicalement changé leur regard sur l'art et leur envie de revenir !",
            "pourquoi": "L'art ne s'impose pas : il s'apprivoise grâce aux histoires humaines que le médiateur sait raconter.",
            "a_retenir": "Le médiateur culturel est la clé bienveillante qui ouvre les portes de l'art à tous."
        }
    },
    {
        "id": "professeur-universite",
        "slug": "professeur-universite",
        "title": "Professeur d'Université en Sciences Humaines",
        "aliases": [
            "Enseignant-chercheur universitaire",
            "Professeur des universités (PU)",
            "Maître de conférences (MCU)",
            "Directeur de laboratoire de recherche"
        ],
        "icon": "👨‍🏫",
        "image": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Enseignement & Pédagogie",
        "domainId": "enseignement-shs",
        "subdomain": "Enseignement supérieur universitaire & Direction de recherche",
        "sectors": [
            "Enseignement supérieur",
            "Recherche fondamentale",
            "Édition universitaire",
            "Conseil institutionnel"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": false,
        "level": "Bac +8 (Doctorat) + Habilitation à Diriger des Recherches (HDR - Bac +10)",
        "salary": "🇫🇷 France : 3 000 - 5 500 € net/mois (Grille indiciaire des Professeurs des Universités, Source : Imagine ton Futur) • 🇸🇳 Sénégal : 900 000 - 2 500 000 FCFA / mois (Statut autonome de l'Enseignement Supérieur)",
        "simpleDefinition": "Le professeur d'université accomplit une double mission d'excellence : il transmet le savoir de haut niveau aux étudiants de la licence au doctorat (enseignement) et produit de nouvelles connaissances scientifiques en dirigeant des laboratoires et des thèses de recherche.",
        "shortDescription": "Sommet académique des humanités décrit par Imagine ton Futur, il forme les élites de demain et repousse les frontières du savoir humain.",
        "longDescription": "Comme recensé dans les fiches de référence d'Imagine ton Futur, le professeur d'université consacre la moitié de son temps à l'enseignement (cours magistraux en amphithéâtre, séminaires doctoraux) et l'autre moitié à la recherche scientifique de pointe. Titulaire d'une thèse de doctorat et d'une Habilitation à Diriger des Recherches (HDR), il publie des livres majeurs, dirige des équipes internationales de chercheurs, évalue les publications de ses pairs et représente son pays dans les plus grands congrès mondiaux.",
        "mainObjective": "Produire des connaissances originales de niveau mondial et former les futurs cadres, enseignants et chercheurs de la société.",
        "companyRole": "Pilote scientifique, autorité académique et formateur des talents de demain.",
        "workEnvironment": [
            "🏛️ Amphithéâtres et salles de séminaire des universités prestigieuses",
            "🔬 Laboratoires et centres de recherche mixtes (CNRS, IFAN, IRD)",
            "✈️ Déplacements internationaux réguliers pour colloques et jurys de thèses"
        ],
        "missions": [
            "Dispenser des cours magistraux fondés sur l'état de l'art de la recherche en lettres, langues ou sciences humaines",
            "Diriger des mémoires de master et encadrer des thèses de doctorat pendant 3 à 5 ans",
            "Publier des articles dans des revues internationales à comité de lecture et des ouvrages de synthèse",
            "Diriger des laboratoires de recherche, gérer des budgets scientifiques et répondre à des appels à projets (ANR, ERC)",
            "Participer à la gouvernance de l'université (conseils scientifiques, commissions de recrutement)"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Cours magistral en amphithéâtre",
                "desc": "Dispensation d'un cours de 2 heures d'histoire de la pensée politique devant 300 étudiants de licence."
            },
            {
                "time": "11:00",
                "title": "Point d'avancement de thèse de doctorat",
                "desc": "Séance de travail avec une doctorante sur la méthodologie d'analyse de son corpus d'archives sénégalaises."
            },
            {
                "time": "14:00",
                "title": "Réunion du conseil de laboratoire",
                "desc": "Arbitrage des financements pour la participation des jeunes chercheurs à un colloque international."
            },
            {
                "time": "16:30",
                "title": "Évaluation d'articles scientifiques (Peer Review)",
                "desc": "Lecture critique et rapport d'expertise pour une grande revue universitaire internationale."
            }
        ],
        "skills": {
            "technical": [
                "Érudition encyclopédique et méthodologie de recherche au plus haut niveau académique",
                "Pédagogie universitaire avancée pour captiver un auditoire exigeant",
                "Management d'équipes de recherche internationales et montage de projets scientifiques",
                "Maîtrise des langues académiques internationales (anglais scientifique courant)"
            ],
            "human": [
                "Passion inaltérable pour la transmission du savoir et l'élévation des esprits",
                "Rigueur éthique et intégrité intellectuelle sans compromis",
                "Capacité d'écoute, générosité mentorale et leadership inspirant"
            ],
            "tools": [
                "Plateformes académiques mondiales (HAL, Cairn, JSTOR, ResearchGate)",
                "Outils de gestion de laboratoire et de soumission de projets de recherche",
                "Plateformes d'enseignement numérique universitaire (Moodle)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence & Master (Bac +5)",
                    "title": "Master Recherche en Lettres, Langues ou Sciences Humaines",
                    "desc": "Mention Très Bien requise pour obtenir un contrat doctoral financé."
                },
                {
                    "step": "Doctorat (Bac +8)",
                    "title": "Doctorat / Thèse d'Université (3 à 4 ans)",
                    "desc": "Rédaction et soutenance publique d'une thèse de 400 à 600 pages avec félicitations du jury."
                },
                {
                    "step": "Maître de conférences puis HDR (Bac +10)",
                    "title": "Habilitation à Diriger des Recherches (HDR) + Concours de Professeur",
                    "desc": "Parcours d'excellence comme Maître de conférences pendant 5 à 10 ans, puis soutenance de l'HDR pour accéder au rang de Professeur."
                }
            ],
            "schools": [
                {
                    "name": "École Normale Supérieure (ENS Ulm / Lyon) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Sorbonne Université / Université Paris 1 Panthéon-Sorbonne — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Université Cheikh Anta Diop (Faculté des Lettres et Sciences Humaines - FLSH) — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Habilitation à Diriger des Recherches (HDR)",
                "Qualification aux fonctions de Professeur par le CNU (Conseil National des Universités)"
            ]
        },
        "career": {
            "sectors": [
                "Universités et grandes écoles nationales et internationales",
                "Instituts de recherche fondamentale (CNRS, IFAN)",
                "Conseil auprès des organisations internationales",
                "Édition savante"
            ],
            "employerTypes": [
                "Ministère de l'Enseignement Supérieur",
                "Universités étrangères prestigieuses",
                "Grands instituts de recherche"
            ],
            "evolution": [
                "Président d'université",
                "Doyen de faculté",
                "Membre de l'Institut de France (Académies)",
                "Professeur émérite"
            ],
            "pros": [
                "Liberté académique totale garantie par la loi",
                "Prestige social et intellectuel suprême",
                "Richesse de guider des vocations de chercheurs"
            ],
            "cons": [
                "Parcours d'études le plus long et sélectif du système éducatif",
                "Lourdeur croissante des tâches administratives universitaires"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Rédiger un état de l'art bibliographique de 10 pages sur une controverse scientifique en sciences humaines en synthétisant 15 articles de revues à comité de lecture.",
            "steps": [
                "Assister à une soutenance publique de thèse de doctorat dans une université",
                "Visiter les portails de thèses ouvertes (theses.fr et portail HAL)",
                "Échanger avec un enseignant-chercheur lors des journées portes ouvertes universitaires"
            ],
            "freeResources": [
                "Theses.fr (Moteur des thèses de doctorat françaises)",
                "HAL.science (Archives ouvertes de la recherche scientifique)"
            ]
        },
        "aiImpact": {
            "summary": "L'IA transforme l'enseignement universitaire en obligeant à repenser l'évaluation des étudiants : les examens se recentrent sur la soutenance orale, la dialectique en direct et l'analyse critique de données non traitables par des modèles.",
            "positiveImpacts": [
                "Assistance à la revue de littérature scientifique sur des milliers d'articles",
                "Création de supports de cours dynamiques et interactifs"
            ],
            "risksAndChallenges": [
                "Fraude académique si les étudiants font rédiger leurs devoirs par des LLMs",
                "Nécessité de réinventer la pédagogie magistrale"
            ],
            "recommendedSkills": [
                "Maîtrise des outils de détection de plagiat et de génération par IA",
                "Pédagogie inversée et évaluation par la soutenance orale contradictoire"
            ]
        },
        "africaContext": {
            "senegalInsight": "L'UCAD à Dakar a été le berceau des plus grandes figures académiques africaines contemporaines (Pr Cheikh Anta Diop, Pr Assane Seck, Pr Souleymane Bachir Diagne). Les professeurs d'université y jouissent d'un respect immense dans la société et sont régulièrement sollicités comme ministres, diplomates ou médiateurs républicains.",
            "westAfricaOpportunities": "Développement des écoles doctorales panafricaines, publications scientifiques indexées au CAMES et coopération universitaire Sud-Sud.",
            "localChampions": [
                "Faculté des Lettres et Sciences Humaines (FLSH - UCAD)",
                "CAMES (Conseil Africain et Malgache pour l'Enseignement Supérieur)",
                "Université Gaston Berger de Saint-Louis"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Fiche métier : Professeur d'université",
                "url": "https://www.imaginetonfutur.com/metier/professeur-duniversite.html",
                "type": "metier"
            },
            {
                "organization": "Ministère de l'Enseignement Supérieur et de la Recherche",
                "title": "Les carrières d'enseignant-chercheur",
                "url": "https://www.enseignementsup-recherche.gouv.fr",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Selon Imagine ton Futur, le professeur d'université est le plus haut grade de l'enseignement en France : il forme les étudiants jusqu'au bac +8 et au-delà, et ses découvertes sont publiées dans le monde entier !",
            "pourquoi": "Ce statut garantit aux enseignants-chercheurs une indépendance intellectuelle constitutionnellement protégée pour chercher sans pression politique ou commerciale.",
            "a_retenir": "Le professeur d'université allume des phares de savoir qui guident des générations entières."
        }
    },
    {
        "id": "chercheur-shs",
        "slug": "chercheur-shs",
        "title": "Chercheur en Sciences Humaines et Sociales (SHS)",
        "aliases": [
            "Chargé de recherche CNRS",
            "Chercheur IRD",
            "Scientifique en humanités",
            "Post-doctorant en sciences humaines"
        ],
        "icon": "🔬",
        "image": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Recherche Fondamentale & Appliquée",
        "domainId": "recherche-shs",
        "subdomain": "Recherche interdisciplinaire, Laboratoires & Publications savantes",
        "sectors": [
            "Instituts de recherche d'État (CNRS, IRD, INED)",
            "Fondations scientifiques",
            "Universités",
            "Organisations multilatérales"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": false,
        "level": "Bac +8 (Doctorat / Ph.D. dans une discipline des sciences humaines)",
        "salary": "🇫🇷 France : 2 200 - 4 300 € net/mois (Chargé de recherche puis Directeur de recherche CNRS, Source : Imagine ton Futur) • 🇸🇳 Sénégal : 500 000 - 1 800 000 FCFA / mois (IFAN Ch. Anta Diop, IRD Dakar)",
        "simpleDefinition": "Le chercheur en sciences humaines et sociales se consacre à 100% à la production de connaissances scientifiques nouvelles sur les comportements, les sociétés, les langues, l'histoire et les cultures, en concevant des programmes d'investigation originaux, en analysant des corpus massifs et en publiant ses découvertes.",
        "shortDescription": "Scientifique de la condition humaine documenté par Imagine ton Futur, il mène des recherches fondamentales pour comprendre les transformations du monde.",
        "longDescription": "Comme décrit sur la fiche officielle d'Imagine ton Futur pour le métier de chercheur, ce professionnel dédie sa vie à l'investigation intellectuelle. Contrairement à l'enseignant-chercheur qui partage son temps avec les cours, le chercheur d'institut (comme au CNRS ou à l'IRD) se concentre principalement sur la conception et l'exécution de projets scientifiques : missions de terrain aux quatre coins du globe, exploitation d'archives inédites, expérimentations psychosociales en laboratoire et rédaction d'articles scientifiques soumis à l'évaluation impitoyable de ses pairs.",
        "mainObjective": "Produire des théories, des modèles et des données empiriques rigoureuses pour faire progresser la compréhension universelle de l'être humain et des sociétés.",
        "companyRole": "Pionnier de l'investigation scientifique fondamentale et garant de la rigueur méthodologique.",
        "workEnvironment": [
            "🔬 Laboratoires de recherche et Unités Mixtes de Recherche (UMR CNRS / Universités)",
            "📚 Bibliothèques de recherche d'élite et centres de documentation spécialisés",
            "🌍 Terrains d'enquête internationaux (fouilles, immersions, enquêtes sociales)"
        ],
        "missions": [
            "Élaborer des protocoles de recherche innovants et répondre aux appels à projets scientifiques internationaux",
            "Collecter et analyser des données empiriques de première main (archives, entretiens, fouilles, sondages)",
            "Rédiger des monographies de recherche et des articles dans des revues internationales de premier rang",
            "Organiser et animer des colloques, congrès et séminaires scientifiques interdisciplinaires",
            "Assurer la diffusion grand public des résultats scientifiques (vulgarisation, médias, débats citoyens)"
        ],
        "typicalDay": [
            {
                "time": "09:00",
                "title": "Analyse de données de recherche",
                "desc": "Exploitation d'un corpus de 200 entretiens d'enquête à l'aide d'un logiciel d'analyse sémantique."
            },
            {
                "time": "11:30",
                "title": "Réunion d'équipe d'un projet international",
                "desc": "Visioconférence avec des collègues sénégalais, français et canadiens pour coordonner un projet comparatif sur les migrations."
            },
            {
                "time": "14:30",
                "title": "Rédaction d'un article scientifique",
                "desc": "Finalisation de la discussion théorique d'un article destiné à une revue internationale à comité de lecture."
            },
            {
                "time": "17:00",
                "title": "Montage d'une candidature à un financement européen",
                "desc": "Chiffrage du budget et calendrier opérationnel pour un appel à projet de recherche du Conseil Européen de la Recherche (ERC)."
            }
        ],
        "skills": {
            "technical": [
                "Méthodologie de la recherche en sciences sociales au plus haut niveau de rigueur",
                "Maîtrise des normes académiques de publication et du processus d'évaluation par les pairs",
                "Compétences en humanités numériques (traitement de données, statistiques textuelles)",
                "Anglais scientifique irréprochable à l'écrit comme à l'oral"
            ],
            "human": [
                "Curiosité intellectuelle insatiable et persévérance à toute épreuve",
                "Rigueur méthodologique et honnêteté scientifique scrupuleuse",
                "Aptitude au travail collaboratif en équipes interdisciplinaires"
            ],
            "tools": [
                "Logiciels d'analyse qualitative et quantitative (R, Python, NVivo)",
                "Portails d'archives ouvertes et gestionnaires de références (Zotero, HAL, Zenodo)",
                "Plateformes d'appels à projets de recherche (ANR, Horizon Europe)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Master Recherche (Bac +5)",
                    "title": "Master Recherche en Sciences Humaines et Sociales",
                    "desc": "Obtention d'un mémoire de recherche avec mention d'excellence et obtention d'une bourse doctorale."
                },
                {
                    "step": "Doctorat (Bac +8)",
                    "title": "Doctorat en Sciences Humaines (Thèse de 3 à 4 ans)",
                    "desc": "Soutenance d'une thèse de doctorat originale devant un jury international de pairs."
                },
                {
                    "step": "Post-doctorat & Concours (Bac +9/10)",
                    "title": "Post-doctorats internationaux + Concours de Chargé de Recherche (CRCN)",
                    "desc": "Concours très sélectif du CNRS, de l'IRD ou de l'INED pour obtenir un poste de chercheur titulaire à vie."
                }
            ],
            "schools": [
                {
                    "name": "CNRS (Centre National de la Recherche Scientifique) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "IRD (Institut de Recherche pour le Développement) — France / International",
                    "country": "France",
                    "scope": "International"
                },
                {
                    "name": "IFAN Cheikh Anta Diop (Institut Fondamental d'Afrique Noire - UCAD) — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Habilitation à Diriger des Recherches (HDR)",
                "Agrément de chercheur d'institut national"
            ]
        },
        "career": {
            "sectors": [
                "Instituts publics de recherche (CNRS, IRD, INED, IFAN)",
                "Organisations internationales (UNESCO, OCDE, Banque Mondiale)",
                "Fondations privées de recherche",
                "Cabinets de prospective stratégique"
            ],
            "employerTypes": [
                "Établissements Publics à caractère Scientifique et Technologique (EPST)",
                "Institutions multilatérales",
                "Think tanks d'excellence"
            ],
            "evolution": [
                "Chargé de recherche de classe normale (CRCN)",
                "Directeur de recherche (DR)",
                "Directeur de laboratoire de recherche (UMR)",
                "Président d'organisme de recherche"
            ],
            "pros": [
                "Liberté absolue d'explorer des questions passionnantes",
                "Participation directe à l'élargissement de la connaissance universelle de l'humanité"
            ],
            "cons": [
                "Rareté des postes permanents ouverts aux concours chaque année",
                "Pression constante pour obtenir des financements de projets ('publish or perish')"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Analyser un fait d'actualité contemporain sous le prisme d'un article scientifique de sciences sociales en rédigeant une fiche de lecture critique de 4 pages.",
            "steps": [
                "Créer un compte gratuit sur Google Scholar et configurer des alertes sur son sujet favori",
                "Consulter le portail OpenEdition.org qui regroupe des milliers de revues de sciences humaines en accès libre",
                "Lire 'La Méthode' d'Edgar Morin pour comprendre l'interdisciplinarité"
            ],
            "freeResources": [
                "OpenEdition.org (Portail de revues scientifiques en SHS)",
                "Google Scholar (Moteur de littérature académique mondiale)"
            ]
        },
        "aiImpact": {
            "summary": "L'IA assiste la synthèse documentaire et le croisement de bases de données massives, mais la formulation d'hypothèses novatrices et la critique épistémologique restent le monopole absolu de l'esprit du chercheur.",
            "positiveImpacts": [
                "Exploration automatique de millions de citations pour détecter les lacunes dans la littérature scientifique",
                "Traduction multilingue instantanée des articles pour accroître la portée mondiale des découvertes"
            ],
            "risksAndChallenges": [
                "Prolifération de faux articles scientifiques générés par IA soumis aux revues prédatrices",
                "Risque de perte de profondeur dans la lecture des grands textes canoniques"
            ],
            "recommendedSkills": [
                "Maîtrise des protocoles de reproductibilité de la science ouverte (Open Science)",
                "Détection des données synthétiques et intégrité scientifique numérique"
            ]
        },
        "africaContext": {
            "senegalInsight": "Dakar est historiquement la capitale ouest-africaine de la recherche en sciences humaines grâce à l'IFAN Cheikh Anta Diop, créé en 1936. Aujourd'hui, l'IFAN et le CODESRIA hébergent des dizaines de chercheurs renommés qui travaillent sur l'histoire, la linguistique africaine, la démographie, la sociologie urbaine et l'écologie sahélienne.",
            "westAfricaOpportunities": "Recherche sur les savoirs endogènes, études démographiques sur le dividende de la jeunesse et analyse des transitions écologiques et agraires.",
            "localChampions": [
                "IFAN Cheikh Anta Diop (Dakar)",
                "CODESRIA (Dakar)",
                "Représentation régionale de l'IRD au Sénégal"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Fiche métier : Chercheur",
                "url": "https://www.imaginetonfutur.com/metier/chercheur.html",
                "type": "metier"
            },
            {
                "organization": "CNRS (Centre National de la Recherche Scientifique)",
                "title": "Les métiers de la recherche scientifique",
                "url": "https://www.cnrs.fr",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Selon Imagine ton Futur, le chercheur fait progresser la science en ne tenant rien pour acquis : son moteur quotidien est le doute méthodique et l'expérimentation patiente !",
            "pourquoi": "Toutes les grandes avancées qui ont transformé nos sociétés (droits humains, compréhension des crises économiques, politiques de santé) sont nées de recherches patientes en sciences humaines.",
            "a_retenir": "Le chercheur en sciences humaines est l'éclaireur qui aide l'humanité à se comprendre elle-même."
        }
    },
    {
        "id": "journaliste",
        "slug": "journaliste",
        "title": "Journaliste de Presse Écrite & Web",
        "aliases": [
            "Reporter",
            "Journaliste d'investigation",
            "Rédacteur web d'actualité",
            "Correspondant de presse"
        ],
        "icon": "📰",
        "image": "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Journalisme & Médias",
        "domainId": "journalisme-medias",
        "subdomain": "Presse écrite, Médias numériques & Investigation",
        "sectors": [
            "Presse nationale & régionale",
            "Médias d'information en ligne",
            "Agences de presse (AFP, Reuters)",
            "Magazines spécialisés"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": false,
        "level": "Bac +3 à Bac +5 (Écoles de journalisme reconnues par la profession - CFJ, ESJ Lille, IPJ, CESTI)",
        "salary": "🇫🇷 France : 2 000 - 3 800 € net/mois (~30 000 - 52 000 € brut/an titulaire de la carte de presse, Source : Imagine ton Futur) • 🇸🇳 Sénégal : 350 000 - 1 200 000 FCFA / mois (Presse dakaroise, CESTI)",
        "simpleDefinition": "Le journaliste recherche, vérifie, recoupe, analyse et met en forme l'information d'actualité sous forme d'articles, d'enquêtes ou de reportages pour informer le public de manière rigoureuse, indépendante et honnête.",
        "shortDescription": "Témoin et décrypteur de l'actualité documenté par Imagine ton Futur, il enquête sur le terrain pour faire émerger la vérité des faits.",
        "longDescription": "Comme décrit sur la fiche officielle d'Imagine ton Futur, le journaliste est au cœur de la vie démocratique. Curieux de tout, il ne se contente jamais des communiqués officiels : il va sur le terrain, interroge des témoins, croise ses sources avec un esprit critique intransigeant et vérifie chaque chiffre avant de rédiger son papier. Dans un environnement numérique où les fake news circulent à la vitesse de l'éclair, sa déontologie (Charte de Munich) et sa rigueur d'enquêteur sont le rempart indispensable de la vérité publique.",
        "mainObjective": "Informer les citoyens de manière objective, vérifiée et équilibrée sur tous les aspects de la vie politique, économique, culturelle et sociale.",
        "companyRole": "Enquêteur de terrain et rédacteur garant de la véracité et de la clarté de l'information diffusée.",
        "workEnvironment": [
            "📰 Rédactions de journaux quotidiens et pure players en ligne",
            "🏃 Enquêtes de terrain permanentes (tribunaux, manifestations, sommets, zones de crise)",
            "📱 Stations de travail multimédias équipées pour la publication multi-supports en direct"
        ],
        "missions": [
            "Recueillir des informations exclusives auprès de réseaux de sources fiables et confidentielles",
            "Recouper systématiquement toute information auprès d'au moins deux sources indépendantes (règle déontologique)",
            "Rédiger des articles clairs, percutants et rythmés (titre, chapeau, intertitres, relances)",
            "Réaliser des reportages photo et vidéo mobiles sur le terrain (journalisme MoJo)",
            "Respecter scrupuleusement la déontologie journalistique et le droit de la presse (diffamation, respect de la vie privée)"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Conférence de rédaction matinale",
                "desc": "Proposition de sujets d'enquêtes au rédacteur en chef et répartition des angles de traitement de l'actualité du jour."
            },
            {
                "time": "10:30",
                "title": "Enquête de terrain & interviews",
                "desc": "Interviews contradictoires sur place auprès d'experts, d'élus et de riverains concernés par un projet urbain controversé."
            },
            {
                "time": "14:30",
                "title": "Fact-checking et vérification juridique",
                "desc": "Croisement des documents obtenus avec les bilans financiers officiels et consultation du service juridique."
            },
            {
                "time": "17:00",
                "title": "Bouclage et livraison de l'article",
                "desc": "Rédaction calibrée de 5 000 signes, choix des photos et transmission au secrétaire de rédaction avant l'heure limite de bouclage."
            }
        ],
        "skills": {
            "technical": [
                "Techniques d'écriture journalistique (pyramide inversée, accroche, chute, règle des 5W)",
                "Méthodologie d'investigation, d'interview contradictoire et de fact-checking",
                "Droit de la presse (Loi de 1881 sur la liberté de la presse, présomption d'innocence, diffamation)",
                "Outils de publication web (CMS WordPress, SEO d'actualité, réseaux sociaux d'information)"
            ],
            "human": [
                "Curiosité insatiable, pugnacité d'enquêteur et courage intellectuel",
                "Sensibilité humaine et capacité à mettre en confiance des interlocuteurs de tout milieu",
                "Résistance au stress du bouclage et rapidité d'exécution sous contrainte de temps"
            ],
            "tools": [
                "Logiciels de traitement éditorial et CMS (WordPress, Drupal, Adobe InCopy)",
                "Smartphones équipés pour le tournage et montage mobile (MoJo - LumaFusion, Filmic Pro)",
                "Outils de vérification d'images et de fact-checking (InVID, Google Reverse Image)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence (Bac +3)",
                    "title": "Licence Lettres, Histoire, Sciences Politiques ou Droit",
                    "desc": "Socle de culture générale, d'expression écrite irréprochable et compréhension du monde politique."
                },
                {
                    "step": "École de journalisme reconnue (Bac +5)",
                    "title": "Master d'école de journalisme (CFJ, ESJ Lille, IPJ, Sciences Po, CESTI)",
                    "desc": "Conseillé par Imagine ton Futur : formation intensive aux techniques d'écriture, déontologie, radio, TV et web avec concours sélectif."
                }
            ],
            "schools": [
                {
                    "name": "ESJ Lille (École Supérieure de Journalisme de Lille) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "CFJ Paris (Centre de Formation des Journalistes) — Paris, France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "CESTI (Centre d'Études des Sciences et Techniques de l'Information - UCAD) — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Carte d'Identité des Journalistes Professionnels (Carte de Presse CCIJP)",
                "Carte de Presse Nationale du Sénégal (CAPS)"
            ]
        },
        "career": {
            "sectors": [
                "Presse quotidienne nationale et régionale",
                "Pure players et médias d'investigation en ligne (Mediapart, Les Jours)",
                "Agences de presse mondiales (AFP, Reuters, AP)",
                "Magazines et revues d'analyse"
            ],
            "employerTypes": [
                "Groupes de presse",
                "Médias indépendants",
                "Journaliste indépendant (Pigeur)"
            ],
            "evolution": [
                "Grand reporter",
                "Chef de rubrique",
                "Rédacteur en chef adjoint",
                "Rédacteur en chef",
                "Directeur de la rédaction"
            ],
            "pros": [
                "Métier d'aventure civique et de passion où aucun jour ne ressemble au précédent",
                "Possibilité d'avoir un impact direct sur la justice et la transparence démocratique"
            ],
            "cons": [
                "Horaires imprévisibles et disponibilité constante selon l'actualité",
                "Précarité des piges lors des premières années d'exercice"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser une enquête journalistique locale de 800 mots sur un sujet de quartier méconnu, avec 3 interviews de terrain contradictoires et publication sur un blog étudiant.",
            "steps": [
                "Lire attentivement la Charte de Munich (Déclaration des devoirs et des droits des journalistes)",
                "S'entraîner à résumer une conférence de presse en 200 mots selon la règle des 5W (Who, What, Where, When, Why)",
                "Participer au journal étudiant ou à la radio associative de son université"
            ],
            "freeResources": [
                "SNJ.fr (Charte de Munich et déontologie journalistique)",
                "AFP.com (Dépêches de référence et fact-checking AFP Factuel)"
            ]
        },
        "aiImpact": {
            "summary": "Des algorithmes rédigent des brèves boursières ou sportives à partir de chiffres bruts, mais l'investigation sur le terrain, la recherche de sources confidentielles et l'empathie du reportage humain sont totalement hors de portée de l'IA.",
            "positiveImpacts": [
                "Transcription instantanée des enregistrements d'interviews",
                "Analyse rapide de fuites de documents massives (Panama Papers) par recherche textuelle"
            ],
            "risksAndChallenges": [
                "Banalisation de fermes à contenus IA produisant des articles clickbaits sans vérification",
                "Multiplication de 'deepfakes' audiovisuels nécessitant une vérification forensic permanente"
            ],
            "recommendedSkills": [
                "Techniques avancées d'investigation en sources ouvertes (OSINT)",
                "Vérification forensic d'images et vidéos manipulées par IA"
            ]
        },
        "africaContext": {
            "senegalInsight": "Le Sénégal jouit d'une tradition de presse libre et bouillonnante parmi les plus dynamiques d'Afrique. Le CESTI (Centre d'Études des Sciences et Techniques de l'Information de l'UCAD, fondé en 1965 avec l'UNESCO) est l'école de journalisme d'élite de toute l'Afrique de l'Ouest francophone, ayant formé les plus grands journalistes et directeurs de médias du continent.",
            "westAfricaOpportunities": "Journalisme d'investigation sur les ressources extractives, couverture des enjeux de gouvernance régionale et développement de médias d'information 100% mobiles.",
            "localChampions": [
                "CESTI de l'Université Cheikh Anta Diop",
                "Le Soleil (Quotidien national historique)",
                "Sud Quotidien & Groupe Sud Communication"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Fiche métier : Journaliste",
                "url": "https://www.imaginetonfutur.com/metier/journaliste.html",
                "type": "metier"
            },
            {
                "organization": "Syndicat National des Journalistes (SNJ)",
                "title": "Déontologie et statut du journaliste",
                "url": "https://www.snj.fr",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Selon Imagine ton Futur, pour obtenir la carte de presse professionnelle officielle (CCIJP), un journaliste doit tirer au moins 50% de ses revenus réguliers de son activité journalistique au sein d'une publication reconnue !",
            "pourquoi": "Cette carte protège le secret des sources, garantit le droit d'accès aux lieux officiels et protège l'indépendance de la profession contre les pressions extérieures.",
            "a_retenir": "Le journaliste cherche la vérité pour éclairer les citoyens libres."
        }
    },
    {
        "id": "editeur",
        "slug": "editeur",
        "title": "Éditeur / Responsable Éditorial",
        "aliases": [
            "Directeur de collection",
            "Directeur éditorial",
            "Éditeur littéraire",
            "Responsable de projet éditorial"
        ],
        "icon": "✍️",
        "image": "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Rédaction & Édition",
        "domainId": "redaction-edition",
        "subdomain": "Maison d'édition, Collections & Chaîne du livre",
        "sectors": [
            "Édition de livres",
            "Littérature & Essais",
            "Bande dessinée & Jeunesse",
            "Édition universitaire"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": false,
        "level": "Bac +5 (Master Métiers du Livre et de l'Édition, Master Lettres / Sciences Humaines)",
        "salary": "🇫🇷 France : 2 200 - 4 500 € net/mois (~32 000 - 62 000 € brut/an selon la renommée de la maison, Source : Imagine ton Futur) • 🇸🇳 Sénégal : 450 000 - 1 500 000 FCFA / mois",
        "simpleDefinition": "L'éditeur découvre de nouveaux talents littéraires, sélectionne les manuscrits au sein du comité de lecture, accompagne l'auteur dans la réécriture de son texte, coordonne la fabrication matérielle du livre et orchestre sa mise en marché en librairie.",
        "shortDescription": "Chef d'orchestre de la chaîne du livre documenté par Imagine ton Futur, il transforme un manuscrit brut en un bel ouvrage qui rencontre son public.",
        "longDescription": "L'éditeur est à la fois un intellectuel exigeant et un chef de projet pragmatique. Comme documenté dans les formations littéraires d'Imagine ton Futur, il lit des centaines de manuscrits pour dénicher la perle rare qui portera la ligne éditoriale de sa maison. Une fois le contrat signé, il noue une relation de confiance intime avec l'auteur pour peaufiner chaque page du manuscrit. Il coordonne ensuite les correcteurs, les graphistes pour la couverture, l'imprimeur pour le choix du papier et l'équipe commerciale pour assurer une présence éclatante en vitrine des librairies.",
        "mainObjective": "Donner corps aux œuvres littéraires et intellectuelles en garantissant leur qualité d'écriture, leur beauté matérielle et leur viabilité économique.",
        "companyRole": "Découvreur de talents et gestionnaire stratégique d'une ligne ou d'une collection éditoriale.",
        "workEnvironment": [
            "📚 Maisons d'édition littéraires, illustrées ou universitaires",
            "🤝 Salons du livre, foires internationales (Francfort, Paris, Bruxelles, Dakar)",
            "☕ Rencontres régulières et intimes avec les auteurs, traducteurs et illustrateurs"
        ],
        "missions": [
            "Lire et évaluer les manuscrits reçus, animer les réunions du comité de lecture",
            "Négocier et rédiger les contrats d'édition et conventions de droits d'auteur",
            "Accompagner l'auteur dans le travail de réécriture, de rythme et de structure du texte",
            "Piloter le budget de fabrication du livre avec le maquettiste, l'iconographe et l'imprimeur",
            "Coordonner la stratégie de lancement avec l'équipe de promotion, les attachés de presse et les libraires"
        ],
        "typicalDay": [
            {
                "time": "09:00",
                "title": "Comité de lecture éditorial",
                "desc": "Débat avec la direction littéraire sur 3 manuscrits de romans reçus, décision de proposer un contrat pour l'un d'eux."
            },
            {
                "time": "11:00",
                "title": "Séance de travail en tête-à-tête avec un auteur",
                "desc": "Discussion approfondie sur la fin d'un roman et suggestion de resserrer l'intrigue du dernier chapitre."
            },
            {
                "time": "14:30",
                "title": "Validation du BAT (Bon à Tirer) de couverture",
                "desc": "Vérification des épreuves couleurs de la jaquette chez le fabricant avant lancement de l'impression de 10 000 exemplaires."
            },
            {
                "time": "17:00",
                "title": "Point presse avec l'attachée de presse",
                "desc": "Sélection des journalistes littéraires et influenceurs de lecture à qui adresser les épreuves non corrigées en avant-première."
            }
        ],
        "skills": {
            "technical": [
                "Excellence stylistique, littéraire et culture générale approfondie",
                "Droit de la propriété intellectuelle et contrats d'édition d'œuvres de l'esprit",
                "Maîtrise de la chaîne graphique et de fabrication du livre (papier, reliure, photogravure)",
                "Gestion financière d'un compte d'exploitation de livre (tirage, point mort, diffusion/distribution)"
            ],
            "human": [
                "Flavophilie (flair littéraire) et intuition pour déceler une voix d'auteur prometteuse",
                "Diplomatie, psychologie et tact pour faire accepter des réécritures sans blesser l'auteur",
                "Sens de l'organisation rigoureux et vision commerciale affûtée"
            ],
            "tools": [
                "Logiciels de PAO et suivi de fabrication (Adobe InDesign, Acrobat Pro)",
                "Outils de gestion de catalogue éditorial et de droits d'auteur",
                "Bases de données professionnelles des ventes de livres (GfK, Edistat, Dilicom)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence (Bac +3)",
                    "title": "Licence de Lettres Modernes, Histoire ou Philosophie",
                    "desc": "Solide culture littéraire, capacité de lecture critique rapide et maîtrise parfaite de la langue."
                },
                {
                    "step": "Master professionnel (Bac +5)",
                    "title": "Master Métiers du Livre et de l'Édition",
                    "desc": "Formation de référence aux techniques éditoriales, droit de l'édition, marketing du livre et gestion de collection."
                }
            ],
            "schools": [
                {
                    "name": "Université Sorbonne Paris Nord / Pôle Métiers du Livre de Villetaneuse — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Asfored (École de Management de l'Édition) — Paris, France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "EBAD / UFR Lettres et Sciences Humaines (UCAD) — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certificat de Management de l'Édition (Asfored)",
                "Formation aux contrats de cession de droits internationaux"
            ]
        },
        "career": {
            "sectors": [
                "Grandes maisons d'édition (Gallimard, Seuil, Albin Michel, Grasset)",
                "Maisons d'édition indépendantes",
                "Édition scolaire et universitaire",
                "Édition numérique et audio"
            ],
            "employerTypes": [
                "Groupes éditoriaux (Hachette, Madrigall, Editis)",
                "Maisons d'édition à taille humaine",
                "Création de sa propre maison d'édition"
            ],
            "evolution": [
                "Directeur de collection",
                "Directeur littéraire",
                "Directeur général de maison d'édition",
                "Agent littéraire"
            ],
            "pros": [
                "Accompagner la naissance d'œuvres qui marqueront des générations",
                "Métier passionnant au croisement de la création intellectuelle et du commerce culturel"
            ],
            "cons": [
                "Marché du livre concurrentiel avec un nombre d'exemplaires vendus parfois décevant",
                "Nécessité de gérer la déception des auteurs dont les manuscrits sont refusés"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Rédiger une fiche de lecture éditoriale de 2 pages sur un roman récent avec argumentaire de vente, public cible, forces, faiblesses et préconisations de tirage.",
            "steps": [
                "Fréquenter assidûment les librairies indépendantes pour observer l'accueil des nouveautés",
                "Consulter les dossiers professionnels de Livres Hebdo (magazine de référence de l'édition)",
                "Postuler pour un stage de lecture de manuscrits dans une maison d'édition"
            ],
            "freeResources": [
                "LivresHebdo.fr (Actualité de l'édition française et mondiale)",
                "SNE.fr (Syndicat National de l'Édition)"
            ]
        },
        "aiImpact": {
            "summary": "L'IA assiste la relecture de base et le calibrage des tirages par analyse prédictive des ventes, mais le flair éditorial, l'intuition artistique et la complicité humaine avec l'auteur restent l'apanage irremplaçable de l'éditeur.",
            "positiveImpacts": [
                "Génération automatisée de métadonnées pour le référencement des livres en ligne (ONIX)",
                "Détection des tendances de lecture émergentes sur les réseaux sociaux littéraires (BookTok)"
            ],
            "risksAndChallenges": [
                "Inondation des comités de lecture par des milliers de manuscrits écrits par IA sans âme",
                "Nécessité de protéger les textes des auteurs contre l'entraînement sauvage des modèles sans droit"
            ],
            "recommendedSkills": [
                "Connaissance des droits d'auteur face à l'IA générative",
                "Compétences en marketing digital littéraire et animation de communautés de lecteurs"
            ]
        },
        "africaContext": {
            "senegalInsight": "Dakar est historiquement le phare de l'édition d'Afrique subsaharienne avec des maisons de légende comme Présence Africaine (fondée par Alioune Diop), les Nouvelles Éditions Africaines du Sénégal (NEAS) et aujourd'hui la maison indépendante d'excellence Jimsaan (fondée par Felwine Sarr et Boubacar Boris Diop). Les éditeurs sénégalais mènent un combat vital pour éditer en Afrique et faire rayonner les auteurs du continent à travers le monde.",
            "westAfricaOpportunities": "Édition d'ouvrages en langues nationales (Wolof, Pulaar), manuels scolaires régionaux et coéditions internationales panafricaines.",
            "localChampions": [
                "Éditions Jimsaan (Dakar)",
                "Les Nouvelles Éditions Africaines du Sénégal (NEAS)",
                "Éditions L'Harmattan Sénégal"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Secteur Information, communication & Métiers du Livre",
                "url": "https://www.imaginetonfutur.com/les-metiers/domaine/information-communication.html",
                "type": "metier"
            },
            {
                "organization": "Syndicat National de l'Édition (SNE)",
                "title": "Les métiers et formations de l'édition",
                "url": "https://www.sne.fr",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En 1947 à Dakar et Paris, l'intellectuel sénégalais Alioune Diop fondait 'Présence Africaine', la revue et maison d'édition historique qui allait publier les plus grands esprits de la négritude et du panafricanisme (Césaire, Senghor, Cheikh Anta Diop, Nelson Mandela) !",
            "pourquoi": "Cette initiative éditoriale a prouvé que l'édition est une arme d'émancipation intellectuelle et politique majeure.",
            "a_retenir": "L'éditeur offre des ailes de papier aux rêves des auteurs."
        }
    },
    {
        "id": "economiste-entreprise",
        "slug": "economiste-entreprise",
        "title": "Économiste d'Entreprise / Analyste Conjoncturel",
        "aliases": [
            "Économiste de marché",
            "Analyste d'études économiques",
            "Économiste d'affaires",
            "Chief Economist adjoint"
        ],
        "icon": "💼",
        "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Études Économiques & Métiers Transversaux",
        "domainId": "economie-transversale",
        "subdomain": "Études de conjoncture, Stratégie dirigeant & Analyse de marché",
        "sectors": [
            "Grandes entreprises & Groupes industriels",
            "Banques & Institutions financières",
            "Administration publique & Ministères",
            "Cabinets de conseil en stratégie"
        ],
        "sourceImagineTonFutur": true,
        "isEmerging": false,
        "level": "Bac +5 (Master Économie / Économétrie, Diplôme d'IEP / Sciences Po, ENSAE)",
        "salary": "🇫🇷 France : 2 900 € brut/mois débutant (~35 000 - 65 000 € brut/an selon expérience, Source officielle : Imagine ton Futur) • 🇸🇳 Sénégal : 600 000 - 2 200 000 FCFA / mois (BCEAO, banques, multinationales)",
        "simpleDefinition": "L'économiste d'entreprise réalise des études de conjoncture, analyse les tendances de marché, scrute la concurrence et les prix, puis conseille directement les dirigeants d'entreprise ou l'administration pour orienter leurs décisions stratégiques (politique tarifaire, implantations, investissements).",
        "shortDescription": "Conseiller économique des dirigeants documenté mot pour mot par Imagine ton Futur, il traduit les grands flux économiques mondiaux en décisions concrètes.",
        "longDescription": "Comme documenté mot pour mot dans la fiche officielle d'Imagine ton Futur pour le secteur Lettres, Langues & Sciences Humaines : 'L'économiste d'entreprise réalise des études qui vont servir aux dirigeants d'entreprise ou à l'administration. En collectant diverses informations dans les journaux, les revues, il va analyser la concurrence, observer la hausse ou la baisse des prix... Il pourra ensuite conseiller un chef d'entreprise sur les prix à pratiquer sur les produits, lui donner des conseils par rapport à un site d'implantation... Un économiste d'entreprise débutant gagne environ 2 900 euros brut par mois.'",
        "mainObjective": "Modéliser et interpréter les variables économiques pour éclairer la prise de décision stratégique des états-majors d'entreprises.",
        "companyRole": "Conseiller de confiance des directions générales pour l'anticipation macro et micro-économique.",
        "workEnvironment": [
            "🏢 Sièges sociaux de grands groupes industriels et commerciaux",
            "🏦 Salles de marchés, banques d'affaires et banques centrales",
            "🏛️ Ministères de l'Économie, du Commerce et agences de développement"
        ],
        "missions": [
            "Collecter, traiter et modéliser les indicateurs macroéconomiques (inflation, taux d'intérêt, cours des matières premières)",
            "Analyser la concurrence sectorielle et scruter les dynamiques de prix sur les marchés cibles",
            "Réaliser des études d'impact économique préalables aux décisions d'investissement ou d'implantation internationale",
            "Rédiger des notes de conjoncture régulières et des scénarios prédictifs destinés aux comités exécutifs",
            "Conseiller la direction sur les stratégies de tarification (pricing) et les risques de change"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "title": "Tour d'horizon de la conjoncture matinale",
                "desc": "Analyse des chiffres d'inflation et des décisions de politique monétaire de la banque centrale (BCE / BCEAO)."
            },
            {
                "time": "10:30",
                "title": "Modélisation économétrique de la demande",
                "desc": "Simulation sous R de l'élasticité-prix d'une nouvelle gamme de produits en fonction des hausses de coûts énergétiques."
            },
            {
                "time": "14:00",
                "title": "Étude d'implantation géographique",
                "desc": "Rédaction d'une note d'aide à la décision sur le choix d'un site logistique régional d'après les incitations fiscales et coûts de main-d'œuvre."
            },
            {
                "time": "16:30",
                "title": "Présentation stratégique au comité de direction",
                "desc": "Exposé de 30 minutes devant le PDG sur les prévisions de croissance sectorielle pour le prochain exercice budgétaire."
            }
        ],
        "skills": {
            "technical": [
                "Analyse micro et macroéconomique approfondie",
                "Économétrie, modélisation de séries temporelles et statistiques avancées",
                "Analyse de la concurrence et théories industrielles des prix (pricing strategy)",
                "Maîtrise des logiciels statistiques et de traitement de données (R, Python, Stata, EViews)"
            ],
            "human": [
                "Haute rigueur intellectuelle et esprit critique face aux données chiffrées",
                "Sens aigu des réalités du business et pragmatisme opérationnel",
                "Capacité à vulgariser des mécanismes économiques complexes auprès de dirigeants non-économistes"
            ],
            "tools": [
                "Logiciels d'économétrie et statistiques (R, Python Pandas, Stata)",
                "Bases de données économiques mondiales (Bloomberg, Refinitiv Eikon, Eurostat, FMI, Banque Mondiale)",
                "Outils de visualisation de données et présentations pour comités exécutifs (PowerBI, Tableau)"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Licence (Bac +3)",
                    "title": "Licence d'Économie-Gestion ou Licence Sciences Sociales parcours Économie",
                    "desc": "Fondements de la microéconomie, macroéconomie, mathématiques et statistiques."
                },
                {
                    "step": "Master professionnel (Bac +5)",
                    "title": "Master Économie d'entreprise, Économétrie ou Diplôme d'IEP section économique",
                    "desc": "Recommandé par Imagine ton Futur : formation bac+5 en économie avec bon niveau mathématique (IEP, écoles de commerce, ENSAE, Masters universitaires)."
                }
            ],
            "schools": [
                {
                    "name": "ENSAE Paris (École Nationale de la Statistique et de l'Administration Économique) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Sciences Po Paris (Master Economics and Public Policy) — France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Faculté des Sciences Économiques et de Gestion (FASEG - UCAD) — Dakar, Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certificat de modélisation financière et économétrique",
                "Certification CFA (Chartered Financial Analyst - niveau 1)"
            ]
        },
        "career": {
            "sectors": [
                "Grandes entreprises industrielles et de distribution",
                "Banques de détail et d'investissement",
                "Organisations patronales et chambres de commerce",
                "Institutions de régulation économique"
            ],
            "employerTypes": [
                "Directions de la stratégie de multinationales",
                "Bureaux d'études économiques",
                "Grandes institutions financières"
            ],
            "evolution": [
                "Chef économiste (Chief Economist)",
                "Directeur de la stratégie d'entreprise",
                "Directeur du développement international",
                "Conseiller économique ministériel"
            ],
            "pros": [
                "Poste d'influence stratégique directe auprès des plus hauts dirigeants",
                "Rémunération très attractive dès le début de carrière (2 900 € brut/mois)"
            ],
            "cons": [
                "Pression sur la justesse des prévisions économiques en période d'incertitude",
                "Exigence d'une grande rigueur sur la manipulation de chiffres complexes"
            ]
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser une note de conjoncture de 3 pages analysant l'impact de la variation des cours du baril de pétrole sur les coûts de production d'une entreprise industrielle.",
            "steps": [
                "Télécharger les données économiques ouvertes sur le site de la Banque Mondiale ou de l'INSEE",
                "Construire des graphiques d'évolution sous Excel et calculer des corrélations statistiques",
                "Lire chaque semaine les chroniques économiques des journaux de référence (Les Échos, Financial Times)"
            ],
            "freeResources": [
                "Banque-france.fr (Notes de conjoncture économique)",
                "Worldbank.org (Bases de données économiques ouvertes)"
            ]
        },
        "aiImpact": {
            "summary": "L'IA excelle dans le traitement instantané de millions de signaux économiques et la détection d'anomalies de prix, permettant à l'économiste d'entreprise de se concentrer sur l'interprétation stratégique et le conseil aux dirigeants.",
            "positiveImpacts": [
                "Automatisation des collectes de données de prix concurrentiels sur le web (scraping légal)",
                "Modèles prédictifs d'élasticité de la demande alimentés par le machine learning"
            ],
            "risksAndChallenges": [
                "Incapacité des modèles d'IA à anticiper les chocs géopolitiques imprévisibles ('cygnes noirs')",
                "Risque d'alignement moutonnier des prix si toutes les entreprises utilisent le même algorithme"
            ],
            "recommendedSkills": [
                "Machine learning appliqué à l'économétrie (Causal AI)",
                "Maîtrise des tableaux de bord interactifs de prévision économique"
            ]
        },
        "africaContext": {
            "senegalInsight": "À Dakar, siège de la Banque Centrale des États de l'Afrique de l'Ouest (BCEAO), les économistes d'entreprise sont au premier rang pour analyser les dynamiques de la zone Franc CFA, l'impact des découvertes pétrogazières (Sangomar, GTA) et l'intégration commerciale de la Zone de Libre-Échange Continentale Africaine (ZLECAF).",
            "westAfricaOpportunities": "Études de marché pour les investissements industriels en Afrique de l'Ouest, conseil en pricing agricole et analyses macroéconomiques régionales.",
            "localChampions": [
                "BCEAO (Siège central de Dakar)",
                "FASEG de l'Université Cheikh Anta Diop",
                "Direction de la Prévision et des Études Économiques (DPEE Sénégal)"
            ]
        },
        "sources": [
            {
                "organization": "Imagine ton Futur",
                "title": "Fiche métier : Economiste d'entreprise",
                "url": "https://www.imaginetonfutur.com/metier/economiste-dentreprise.html",
                "type": "metier"
            },
            {
                "organization": "Association Française de Science Économique (AFSE)",
                "title": "Les métiers de l'économie",
                "url": "https://www.afse.fr",
                "type": "institutionnel"
            }
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Selon la fiche officielle d'Imagine ton Futur, l'économiste d'entreprise est classé dans le secteur Lettres, langues, sciences humaines car son analyse repose autant sur la compréhension qualitative des comportements humains et sociétaux que sur les équations mathématiques !",
            "pourquoi": "L'économie est avant tout une science sociale : sans compréhension de la psychologie des consommateurs et du climat social, les chiffres ne permettent pas d'anticiper le futur.",
            "a_retenir": "L'économiste d'entreprise traduit les soubresauts du monde en boussole pour les dirigeants."
        }
    }
];

  return {
    getDomains: function () {
      return JSON.parse(JSON.stringify(LLSH_DOMAINS));
    },
    getJobs: function () {
      return JSON.parse(JSON.stringify(LLSH_JOBS));
    },
    getJobById: function (id) {
      return LLSH_JOBS.find(function (j) { return j.id === id; }) || null;
    },
    getJobBySlug: function (slug) {
      return LLSH_JOBS.find(function (j) { return j.slug === slug; }) || null;
    },
    getJobsByDomain: function (domainId) {
      return LLSH_JOBS.filter(function (j) { return j.domainId === domainId; });
    }
  };
});

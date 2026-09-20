# execution/llsh_jobs_part1.py
# -*- coding: utf-8 -*-
"""
Module de données métiers — Partie 1 : Lettres, Langues, Traduction, Linguistique, Histoire, Archéologie, Art.
Grande Famille : 📚 LETTRES, LANGUES & SCIENCES HUMAINES
Référentiel principal : Imagine ton Futur (https://www.imaginetonfutur.com/les-metiers/domaine/lettres-langues-sciences-humaines.html)
"""

LLSH_JOBS_PART1 = [
    # -----------------------------------------------------------------------
    # 1. AUTEUR / ÉCRIVAIN
    # -----------------------------------------------------------------------
    {
        "id": "auteur-ecrivain",
        "slug": "auteur-ecrivain",
        "title": "Auteur / Écrivain",
        "aliases": ["Romancier", "Écrivain littéraire", "Auteur d'essais", "Biographe"],
        "icon": "✍️",
        "image": "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Lettres & Littérature",
        "domainId": "lettres-litterature",
        "subdomain": "Création littéraire & Écriture",
        "sectors": ["Édition", "Littérature", "Culture & Médias"],
        "sourceImagineTonFutur": True,
        "isEmerging": False,
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
            {"time": "08:30", "title": "Session d'écriture créative matinale", "desc": "Rédaction continue de 1 500 mots sur le chapitre 4 du roman en cours, travail sur le dialogue entre protagonistes."},
            {"time": "11:30", "title": "Recherche documentaire & sources", "desc": "Consultation d'archives numérisées pour vérifier l'exactitude des détails historiques d'une scène d'époque."},
            {"time": "14:30", "title": "Relecture critique & réécriture", "desc": "Chasse aux répétitions, affûtage du rythme des phrases et précision des descriptions sensorielles."},
            {"time": "17:00", "title": "Échange avec la maison d'édition", "desc": "Point téléphonique avec le responsable éditorial sur le planning des épreuves et le choix de la couverture."}
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
                {"step": "Licence (Bac +3)", "title": "Licence Lettres Modernes, Humanités ou Philosophie", "desc": "Socle de culture littéraire, analyse textuelle approfondie et maîtrise stylistique."},
                {"step": "Master (Bac +5)", "title": "Master Création Littéraire ou Master Métiers de l'Écrit", "desc": "Ateliers d'écriture professionnelle, perfectionnement narratif et immersion dans le monde de l'édition."}
            ],
            "schools": [
                {"name": "Université Sorbonne Nouvelle (Paris 3) — France", "country": "France", "scope": "France"},
                {"name": "Université Paris 8 Vincennes-Saint-Denis (Master Création Littéraire) — France", "country": "France", "scope": "France"},
                {"name": "Université Cheikh Anta Diop de Dakar (UCAD - Faculté des Lettres et Sciences Humaines) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Résidences d'écriture CNL", "Bourses de création littéraire"]
        },
        "career": {
            "sectors": ["Édition littéraire", "Presse & Médias", "Scénarisation & Cinéma", "Enseignement artistique"],
            "employerTypes": ["Travailleur indépendant (Auteur)", "Maisons d'édition", "Instituts culturels"],
            "evolution": ["Scénariste pour le cinéma / séries", "Directeur de collection éditoriale", "Critique littéraire", "Romancier reconnu"],
            "pros": ["Liberté créative totale", "Possibilité de marquer durablement les esprits", "Travail nomade"],
            "cons": ["Rémunération irrégulière et aléatoire au début", "Grande solitude lors des phases d'écriture"]
        },
        "gettingStarted": {
            "beginnerProject": "Écrire une nouvelle de 3 000 mots sur un thème fort et la soumettre à un concours littéraire ou une revue étudiante.",
            "steps": [
                "Définir un synopsis clair en 5 actes et la fiche des 3 personnages principaux",
                "Planifier une session d'écriture quotidienne de 500 mots pendant une semaine",
                "Faire relire par 2 lecteurs critiques et retravailler le manuscrit"
            ],
            "freeResources": ["Fabula.org (Recherche littéraire)", "CNRTL (Centre National de Ressources Textuelles et Lexicales)"]
        },
        "aiImpact": {
            "summary": "L'IA générative produit des ébauches de textes mais ne remplace ni la singularité d'une voix d'auteur, ni l'expérience vécue humaine.",
            "positiveImpacts": ["Aide au brainstorming et à la structuration d'intrigues complexes", "Génération rapide d'idées de noms et de décors"],
            "risksAndChallenges": ["Uniformisation du style si l'auteur s'appuie trop sur les modèles", "Questions éthiques de plagiat et de droit d'auteur"],
            "recommendedSkills": ["Affirmer une voix stylistique unique et originale", "Maîtriser les questions de propriété intellectuelle face aux LLMs"]
        },
        "africaContext": {
            "senegalInsight": "Le Sénégal est une terre de géants littéraires (Léopold Sédar Senghor, Mariama Bâ, Cheikh Hamidou Kane, Boubacar Boris Diop, Mohamed Mbougar Sarr - Prix Goncourt 2021). La vitalité des maisons d'édition dakaroises (Présence Africaine, NEAS, Jimsaan) offre un écosystème fécond.",
            "westAfricaOpportunities": "Forte demande d'œuvres reflétant les réalités contemporaines africaines, de littératures jeunesses et d'essais décoloniaux.",
            "localChampions": ["Éditions Jimsaan (Dakar)", "Les Nouvelles Éditions Africaines du Sénégal (NEAS)", "La Maison de l'Oralité et du Conte"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Secteur Lettres, langues, sciences humaines", "url": "https://www.imaginetonfutur.com/les-metiers/domaine/lettres-langues-sciences-humaines.html", "type": "metier"},
            {"organization": "Ministère de la Culture / Centre National du Livre (CNL)", "title": "Statut et rémunération des auteurs de livres", "url": "https://www.centrenationaldulivre.fr", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En 2021, l'écrivain sénégalais Mohamed Mbougar Sarr est devenu à 31 ans le premier auteur d'Afrique subsaharienne à remporter le prestigieux Prix Goncourt avec 'La plus secrète mémoire des hommes'.",
            "pourquoi": "Cette distinction historique a mis en lumière la puissance narrative et intellectuelle des humanités littéraires africaines à l'échelle mondiale.",
            "a_retenir": "L'art d'écrire exige à la fois rigueur d'artisan et authenticité d'âme."
        }
    },

    # -----------------------------------------------------------------------
    # 2. LECTEUR-CORRECTEUR
    # -----------------------------------------------------------------------
    {
        "id": "lecteur-correcteur",
        "slug": "lecteur-correcteur",
        "title": "Lecteur-Correcteur / Préparateur de copie",
        "aliases": ["Correcteur d'édition", "Secrétaire de rédaction", "Préparateur de texte", "Réviseur linguistique"],
        "icon": "🔍",
        "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Lettres & Littérature",
        "domainId": "lettres-litterature",
        "subdomain": "Édition & Révision de textes",
        "sectors": ["Édition", "Presse écrite", "Communication", "Traduction"],
        "sourceImagineTonFutur": True,
        "isEmerging": False,
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
            {"time": "09:00", "title": "Préparation de copie d'un essai", "desc": "Lecture attentive d'un manuscrit en sciences humaines, normalisation des notes de bas de page."},
            {"time": "11:30", "title": "Fact-checking & vérification de sources", "desc": "Vérification sur les répertoires officiels de l'orthographe de noms propres et de traités historiques cités."},
            {"time": "14:00", "title": "Relecture sur épreuves maquettées", "desc": "Chasse aux coquilles résiduelles, césures vicieuses et lignes orphelines sur fichier PDF balisé."},
            {"time": "16:30", "title": "Dialogue avec le secrétaire d'édition", "desc": "Restitution des arbitrages typographiques et signalement d'une contradiction chronologique au chapitre 6."}
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
                {"step": "Licence (Bac +3)", "title": "Licence Lettres Modernes ou Sciences du Langage", "desc": "Étude approfondie de la syntaxe, de la stylistique et de l'histoire de la langue."},
                {"step": "Formation spécialisée / Master (Bac +4/5)", "title": "Formation de Lecteur-Correcteur (Asfored, Formacom, EMI) ou Master Métiers du Livre", "desc": "Apprentissage intensif du code typographique, des signes de correction et du calibrage."}
            ],
            "schools": [
                {"name": "Asfored (Centre de formation de l'Édition) — Paris, France", "country": "France", "scope": "France"},
                {"name": "École des Métiers de l'Information (EMI) — France", "country": "France", "scope": "France"},
                {"name": "EBAD (École de Bibliothécaires, Archivistes et Documentalistes - UCAD) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat Voltaire (score 950+ recommandé)", "Certificat Asfored de relecture-correction"]
        },
        "career": {
            "sectors": ["Édition de livres", "Presse & Magazines", "Agences de communication", "Institutions publiques"],
            "employerTypes": ["Maisons d'édition", "Organes de presse", "Freelance"],
            "evolution": ["Secrétaire d'édition", "Responsable éditorial", "Chef de fabrication", "Rédacteur en chef technique"],
            "pros": ["Satisfaction du travail bien fait et amour des textes", "Grande autonomie et flexibilité de travail"],
            "cons": ["Fatigue visuelle liée aux écrans", "Tarifs à la page parfois tirés vers le bas"]
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser la révision complète d'un rapport académique de 30 pages en appliquant les règles typographiques de l'Imprimerie nationale.",
            "steps": [
                "Passer le Certificat Voltaire pour attester de son niveau d'orthographe",
                "Acquérir le Lexique des règles typographiques en usage à l'Imprimerie nationale",
                "S'entraîner à la correction sur épreuves papier et numérique avec signes conventionnels"
            ],
            "freeResources": ["Académie Française (Questions de langue)", "Languefrancaise.net (Ressources orthographiques)"]
        },
        "aiImpact": {
            "summary": "Les correcteurs automatiques basés sur l'IA assistent la relecture de base mais échouent sur les subtilités stylistiques, le ton et la logique narrative.",
            "positiveImpacts": ["Détection rapide des doubles espaces et fautes de frappe courantes", "Gain de temps sur la phase de premier défrichage"],
            "risksAndChallenges": ["Fausses corrections suggérées par des algorithmes ne comprenant pas le contexte", "Risque d'appauvrissement du style"],
            "recommendedSkills": ["Expertise inégalable sur la typographie fine", "Capacité à justifier chaque choix textuel par les règles académiques"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la croissance des maisons d'édition indépendantes et des publications institutionnelles de l'UEMOA/CEDEAO requiert des relecteurs bilingues (français/anglais) et sensibles aux particularités du français d'Afrique.",
            "westAfricaOpportunities": "Édition de manuels scolaires régionaux, rapports d'ONG internationales et publications de recherche universitaire.",
            "localChampions": ["Éditions L'Harmattan Sénégal", "Presses Universitaires de Dakar (UCAD)", "ENDA Tiers-Monde Publications"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Secteur Information, communication & Métiers du Livre", "url": "https://www.imaginetonfutur.com/les-metiers/domaine/information-communication.html", "type": "metier"},
            {"organization": "Syndicat National de l'Édition (SNE)", "title": "Le métier de préparateur de copie et correcteur", "url": "https://www.sne.fr", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En typographie française, le point-virgule, le point d'interrogation et le point d'exclamation sont toujours précédés d'une espace insécable, contrairement à la typographie anglaise !",
            "pourquoi": "Ces règles strictes évitent qu'un signe de ponctuation ne se retrouve seul et isolé au début d'une nouvelle ligne.",
            "a_retenir": "Le lecteur-correcteur est le gardien invisible de l'élégance intellectuelle d'un livre."
        }
    },

    # -----------------------------------------------------------------------
    # 3. FORMATEUR EN LANGUES & FLE
    # -----------------------------------------------------------------------
    {
        "id": "formateur-langues-fle",
        "slug": "formateur-langues-fle",
        "title": "Formateur en Langues & FLE (Français Langue Étrangère)",
        "aliases": ["Enseignant de FLE", "Formateur linguistique pour adultes", "Coach en langues étrangères", "Professeur de langues vivantes"],
        "icon": "🌍",
        "image": "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Langues Étrangères",
        "domainId": "langues-etrangeres",
        "subdomain": "Didactique des langues & FLE",
        "sectors": ["Formation professionnelle", "Enseignement", "Relations internationales", "Intégration"],
        "sourceImagineTonFutur": True,
        "isEmerging": False,
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
            {"time": "09:00", "title": "Cours de français professionnel pour expatriés", "desc": "Animation d'un atelier sur la rédaction d'e-mails formels et la conduite de réunions en contexte francophone."},
            {"time": "11:00", "title": "Session individuelle de phonétique corrective", "desc": "Entraînement ciblé sur les voyelles nasales et l'intonation avec un professionnel anglophone."},
            {"time": "14:00", "title": "Conception d'un module d'anglais des affaires", "desc": "Création d'études de cas interactives pour des cadres d'une entreprise tech en expansion."},
            {"time": "16:30", "title": "Correction d'épreuves blanches DELF B2", "desc": "Évaluation détaillée de productions écrites et feedback personnalisé pour chaque participant."}
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
                {"step": "Licence (Bac +3)", "title": "Licence LLCER (Langues) ou Lettres avec parcours FLE", "desc": "Maîtrise linguistique bilingue et introduction aux sciences du langage."},
                {"step": "Master (Bac +5)", "title": "Master Didactique des Langues / Français Langue Étrangère", "desc": "Ingénierie pédagogique, phonétique appliquée et stages en institutions culturelles internationales."}
            ],
            "schools": [
                {"name": "Université Sorbonne Nouvelle (DILTEC) — Paris, France", "country": "France", "scope": "France"},
                {"name": "Alliance Française Paris Île-de-France — France", "country": "France", "scope": "France"},
                {"name": "FASTEF (Faculté des Sciences et Technologies de l'Éducation et de la Formation - UCAD) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Habilitation examinateur DELF-DALF", "Certificat TEFL / CELTA (pour l'anglais)"]
        },
        "career": {
            "sectors": ["Réseau culturel international (Alliances/Instituts)", "Universités", "Organismes de formation continue", "ONGs"],
            "employerTypes": ["Ministère des Affaires Étrangères", "Centres de langues privés", "Freelance / Formateur indépendant"],
            "evolution": ["Responsable pédagogique de centre de langues", "Directeur d'Alliance Française", "Concepteur de méthodes pédagogiques", "Attaché de coopération linguistique"],
            "pros": ["Mobilité géographique internationale exceptionnelle", "Richesse des rencontres humaines multiculturelles"],
            "cons": ["Contrats parfois fractionnés en début de parcours", "Décalages horaires en formation en ligne"]
        },
        "gettingStarted": {
            "beginnerProject": "Créer une fiche pédagogique complète de 60 minutes pour enseigner la prise de parole en réunion à un public niveau B1.",
            "steps": [
                "Étudier la grille d'auto-évaluation du CECRL",
                "Suivre le MOOC 'Enseigner le français langue étrangère aujourd'hui' (France Éducation International)",
                "Faire du tutorat linguistique bénévole auprès d'associations d'intégration"
            ],
            "freeResources": ["France Éducation International (Grilles CECRL)", "RFI Savoirs (Exercices d'écoute)"]
        },
        "aiImpact": {
            "summary": "Les applications d'IA génèrent des exercices et des chatbots de conversation, recentrant le rôle du formateur humain sur la motivation, la nuance culturelle et l'interaction authentique.",
            "positiveImpacts": ["Génération instantanée de dialogues sur mesure adaptés aux métiers des apprenants", "Automatisation des corrections grammaticales de base"],
            "risksAndChallenges": ["Illusion d'apprentissage passif des élèves avec des tuteurs IA", "Nécessité de réinventer la valeur ajoutée de la classe vivante"],
            "recommendedSkills": ["Maîtriser l'intégration des tuteurs IA comme compléments d'entraînement", "Accentuer l'entraînement à la négociation et à l'improvisation orale"]
        },
        "africaContext": {
            "senegalInsight": "Dakar est une plaque tournante de la francophonie et accueille l'Institut Français et de nombreux centres de langues préparant les étudiants à la mobilité vers le Canada, la France ou les pays anglophones voisins (Ghana, Nigeria).",
            "westAfricaOpportunities": "Forte demande pour des formateurs bilingues anglais/français dans les organisations régionales (CEDEAO, BAD, agences de l'ONU).",
            "localChampions": ["Institut Français du Sénégal à Dakar", "British Council Sénégal", "FASTEF UCAD"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Secteur Éducation, formation & Enseignement", "url": "https://www.imaginetonfutur.com/les-metiers/domaine/education-formation-rh.html", "type": "metier"},
            {"organization": "France Éducation International", "title": "Les métiers du Français Langue Étrangère", "url": "https://www.france-education-international.fr", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Le réseau des Alliances Françaises compte plus de 800 établissements répartis dans 130 pays sur les 5 continents, formant plus de 500 000 étudiants chaque année !",
            "pourquoi": "C'est l'un des plus grands réseaux culturels et d'enseignement linguistique au monde, créant une demande constante de formateurs qualifiés.",
            "a_retenir": "Enseigner une langue, c'est ouvrir une fenêtre sur une autre manière de penser le monde."
        }
    },

    # -----------------------------------------------------------------------
    # 4. TRADUCTEUR
    # -----------------------------------------------------------------------
    {
        "id": "traducteur",
        "slug": "traducteur",
        "title": "Traducteur (Littéraire, Juridique & Spécialisé)",
        "aliases": ["Traducteur assermenté", "Traducteur littéraire", "Traducteur audiovisuel", "Localisateur de contenus"],
        "icon": "🗣️",
        "image": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Traduction & Interprétation",
        "domainId": "traduction-interpretation",
        "subdomain": "Traduction générale & spécialisée",
        "sectors": ["Traduction", "Édition", "Droit & Justice", "Audiovisuel & Médias"],
        "sourceImagineTonFutur": True,
        "isEmerging": False,
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
            {"time": "08:30", "title": "Traduction d'un chapitre d'essai littéraire", "desc": "Transposition de 2 000 mots d'anglais vers le français avec recherche de métaphores équivalentes."},
            {"time": "11:30", "title": "Recherche terminologique juridique", "desc": "Consultation des bases de données juridiques européennes pour traduire un contrat commercial avec exactitude."},
            {"time": "14:30", "title": "Session de post-édition", "desc": "Affinement stylistique d'une première passe de traduction assistée pour supprimer toute lourdeur syntaxique."},
            {"time": "17:00", "title": "Livraison au client et mise à jour des mémoires", "desc": "Envoi du texte certifié et intégration des nouveaux termes validés dans le glossaire SDL Trados."}
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
                {"step": "Licence (Bac +3)", "title": "Licence LEA (Langues Étrangères Appliquées) ou LLCER", "desc": "Perfectionnement linguistique poussé sur au moins 2 langues vivantes."},
                {"step": "Master professionnel (Bac +5)", "title": "Master Traduction et Interprétation (ESIT, ISIT, Universités)", "desc": "Formation d'élite aux techniques de traduction professionnelle, juridique, économique et littéraire."}
            ],
            "schools": [
                {"name": "ESIT (École Supérieure d'Interprètes et de Traducteurs - Sorbonne Nouvelle) — Paris, France", "country": "France", "scope": "France"},
                {"name": "ISIT (Institut de Management et de Communication Interculturels) — Paris, France", "country": "France", "scope": "France"},
                {"name": "Université Gaston Berger (UGB de Saint-Louis - Section de Langues Étrangères Appliquées) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Agrément d'Expert Traducteur près la Cour d'Appel (Traducteur Assermenté)", "Adhésion SFT (Société Française des Traducteurs)"]
        },
        "career": {
            "sectors": ["Organisations internationales (ONU, UE)", "Maisons d'édition", "Cabinets d'avocats", "Agences de traduction"],
            "employerTypes": ["Traducteur indépendant (Freelance 80%)", "Organismes multilatéraux", "Agences de localisation"],
            "evolution": ["Chef de projet linguistique", "Réviseur / Relecteur senior", "Terminologue", "Interprète de conférence"],
            "pros": ["Autonomie totale de travail et travail nomade possible", "Richesse intellectuelle continue des sujets abordés"],
            "cons": ["Pression des délais courts de livraison", "Tarifs au mot soumis à une forte concurrence internationale"]
        },
        "gettingStarted": {
            "beginnerProject": "Traduire un article de presse économique ou littéraire de 1 000 mots d'une langue étrangère vers le français et le soumettre à un traducteur diplômé pour relecture.",
            "steps": [
                "Consulter le guide des tarifs et usages de la Société Française des Traducteurs (SFT)",
                "Prendre en main un outil de TAO open-source gratuit (OmegaT)",
                "Constituer son premier glossaire bilingue thématique de 100 entrées"
            ],
            "freeResources": ["IATE (Base terminologique interactive de l'Union Européenne)", "Société Française des Traducteurs (SFT.fr)"]
        },
        "aiImpact": {
            "summary": "L'émergence des moteurs neuronaux (DeepL, LLMs) transforme le métier : les traducteurs évoluent vers la post-édition à haute valeur ajoutée, l'adaptation culturelle et la localisation créative (transcréation).",
            "positiveImpacts": ["Automatisation du premier jet sur les textes répétitifs", "Gain de rapidité permettant de se concentrer sur l'élégance stylistique"],
            "risksAndChallenges": ["Baisse des tarifs au mot proposée par certains intermédiaires", "Perte de sensibilité stylistique si l'on accepte les suggestions sans recul"],
            "recommendedSkills": ["Compétences certifiées en Post-édition (norme ISO 18587)", "Spécialisation dans les domaines hautement techniques ou littéraires étanches à l'IA"]
        },
        "africaContext": {
            "senegalInsight": "Le Sénégal est un carrefour diplomatique régional majeur abritant les bureaux régionaux des Nations Unies, de l'OIF, de la BCEAO et de nombreuses ambassades, générant une demande constante de traducteurs certifiés anglais-français-arabe-portugais.",
            "westAfricaOpportunities": "Traduction de documents de politiques publiques, d'accords bilatéraux et valorisation de la traduction vers les langues nationales (Wolof, Pulaar, Mandingue).",
            "localChampions": ["BCEAO (Services linguistiques)", "Bureau Régional de l'UNESCO à Dakar (BREDA)", "Agences de traduction dakaroises"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Fiche métier : Interprète / Traducteur", "url": "https://www.imaginetonfutur.com/metier/interprete-traducteur.html", "type": "metier"},
            {"organization": "Société Française des Traducteurs (SFT)", "title": "Observatoire des métiers de la traduction", "url": "https://www.sft.fr", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Selon les statistiques officielles d'Imagine ton Futur, un traducteur diplômé débute entre 1 800 et 2 500 € brut par mois, et plus de 80% des professionnels choisissent d'exercer en tant qu'indépendants !",
            "pourquoi": "Le statut d'indépendant permet de choisir ses domaines de prédilection et de travailler pour des clients situés partout sur le globe.",
            "a_retenir": "Traduire n'est pas transposer des mots : c'est réincarner une pensée dans une autre âme culturelle."
        }
    },

    # -----------------------------------------------------------------------
    # 5. INTERPRÈTE DE CONFÉRENCE
    # -----------------------------------------------------------------------
    {
        "id": "interprete-conference",
        "slug": "interprete-conference",
        "title": "Interprète de Conférence",
        "aliases": ["Interprète simultané", "Interprète consécutif", "Interprète de liaison", "Interprète diplomatique"],
        "icon": "🎧",
        "image": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Traduction & Interprétation",
        "domainId": "traduction-interpretation",
        "subdomain": "Interprétation de conférence & diplomatique",
        "sectors": ["Diplomatie", "Organisations internationales", "Conférences mondiales", "Événementiel"],
        "sourceImagineTonFutur": True,
        "isEmerging": False,
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
            {"time": "08:00", "title": "Briefing pré-sommet & installation en cabine", "desc": "Vérification de la console audio, échange avec le président de séance et passage en revue des textes d'allocution."},
            {"time": "09:30", "title": "Interprétation simultanée de la séance plénière", "desc": "Interprétation en direct du discours d'un chef d'État, relais avec le binôme toutes les 25 minutes."},
            {"time": "14:00", "title": "Interprétation consécutive de négociation", "desc": "Prise de notes sténographiques codées et restitution orale lors d'un déjeuner bilatéral confidentiel."},
            {"time": "17:00", "title": "Préparation documentaire du lendemain", "desc": "Étude des rapports techniques sur les énergies renouvelables et mise à jour du glossaire pour la session suivante."}
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
                {"step": "Licence (Bac +3)", "title": "Licence en Langues (LEA/LLCER), Sciences Politiques ou Droit", "desc": "Excellence linguistique et solide compréhension des enjeux géopolitiques."},
                {"step": "Master professionnel sélectif (Bac +5)", "title": "Master d'Interprétation de Conférence (ESIT, ISIT, Genève)", "desc": "Entraînement intensif en cabine, concours d'entrée très sélectif et simulations réelles."}
            ],
            "schools": [
                {"name": "ESIT (Sorbonne Nouvelle) — Section Interprétation de Conférence — Paris, France", "country": "France", "scope": "France"},
                {"name": "FTI (Faculté de Traduction et d'Interprétation - Université de Genève) — Suisse / International", "country": "Suisse", "scope": "International"},
                {"name": "Institut Supérieur de Traduction et d'Interprétation (ISTI - UCAD) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Accréditation auprès des institutions de l'Union Européenne (SCIC)", "Test d'accréditation des Nations Unies (ONU)", "Membre AIIC (Association Internationale des Interprètes de Conférence)"]
        },
        "career": {
            "sectors": ["Organisations internationales (ONU, UE, Union Africaine)", "Ministères des Affaires Étrangères", "Congrès scientifiques et médicaux", "Événements sportifs mondiaux"],
            "employerTypes": ["Fonctionnaire international permanent", "Interprète de conférence indépendant (Freelance)", "Agences gouvernementales"],
            "evolution": ["Chef d'équipe d'interprétation", "Directeur des services linguistiques d'une organisation mondiale", "Consultant en communication diplomatique"],
            "pros": ["Rémunération très valorisante", "Présence au cœur des décisions qui façonnent l'histoire mondiale", "Voyages internationaux permanents"],
            "cons": ["Intense fatigue cognitive en cabine", "Rythme de voyages éprouvant et calendrier changeant"]
        },
        "gettingStarted": {
            "beginnerProject": "Pratiquer le 'shadowing' (répétition orale instantanée mot à mot) pendant 10 minutes par jour sur des discours de l'ONU pour entraîner la mémoire de travail.",
            "steps": [
                "Écouter des conférences TED ou des séances de l'ONU en version originale avec casque",
                "S'exercer à résumer en 2 minutes dans sa langue maternelle un discours étranger de 5 minutes",
                "Consulter le site de l'AIIC (aiic.org) pour comprendre les règles déontologiques du métier"
            ],
            "freeResources": ["Speech Repository (Banque de discours d'entraînement de la Commission Européenne)", "AIIC.org (Association Internationale des Interprètes de Conférence)"]
        },
        "aiImpact": {
            "summary": "L'IA propose des outils de transcription et traduction vocale en temps réel, mais ne peut reproduire la diplomatie, l'adaptation aux humeurs d'un orateur et la réactivité contextuelle en direct.",
            "positiveImpacts": ["Assistance terminologique dynamique sur écran en cabine", "Transcription automatique d'appoint pour les chiffres et sigles complexes"],
            "risksAndChallenges": ["Arrivée d'outils automatiques sur les visioconférences informelles", "Exigence accrue d'excellence absolue pour les interprètes humains"],
            "recommendedSkills": ["Maîtrise des plateformes d'interprétation à distance (RSI)", "Expertise accrue en gestion des nuances diplomatiques et des non-dits"]
        },
        "africaContext": {
            "senegalInsight": "Dakar accueille régulièrement de grands sommets internationaux (Forum de Dakar sur la Paix et la Sécurité, Sommet Mondial de l'Agro-industrie, conférences panafricaines), mobilisant des interprètes francophones, anglophones, arabophones et lusophones.",
            "westAfricaOpportunities": "Recrutements permanents et missions régulières auprès de l'Union Africaine (Addis-Abeba), de la CEDEAO (Abuja) et de la BAD (Abidjan).",
            "localChampions": ["Conférence des Chefs d'État de l'UEMOA", "Centre International de Conférences Abdou Diouf (CICAD de Diamniadio)", "Bureaux régionaux de l'ONU à Dakar"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Fiche métier : Interprète / Traducteur", "url": "https://www.imaginetonfutur.com/metier/interprete-traducteur.html", "type": "metier"},
            {"organization": "Association Internationale des Interprètes de Conférence (AIIC)", "title": "Le métier d'interprète de conférence", "url": "https://aiic.org", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En cabine simultanée, le cerveau de l'interprète réalise un exploit neurologique unique : il écoute une langue tout en parlant dans une autre avec un décalage de seulement 2 à 3 secondes !",
            "pourquoi": "Cette charge cognitive intense nécessite de travailler en binôme et de se relayer toutes les 30 minutes au maximum.",
            "a_retenir": "L'interprète de conférence est l'artisan invisible qui permet aux peuples de se parler d'égal à égal."
        }
    },

    # -----------------------------------------------------------------------
    # 6. TRADUCTEUR TECHNIQUE
    # -----------------------------------------------------------------------
    {
        "id": "traducteur-technique",
        "slug": "traducteur-technique",
        "title": "Traducteur Technique",
        "aliases": ["Traducteur scientifique", "Traducteur médical", "Traducteur industriel", "Localisateur de logiciels"],
        "icon": "🧰",
        "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Traduction Technique",
        "domainId": "traduction-technique",
        "subdomain": "Documentation technique & industrielle",
        "sectors": ["Industrie", "Ingénierie", "Pharmacie & Santé", "Télécoms & Numérique"],
        "sourceImagineTonFutur": True,
        "isEmerging": False,
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
            {"time": "08:30", "title": "Traduction d'un protocole de chirurgie robotique", "desc": "Traduction de l'anglais vers le français d'une notice d'utilisation de bras opératoire de haute précision."},
            {"time": "11:00", "title": "Point d'échange avec l'ingénieur biomédical", "desc": "Clarification sur la désignation exacte d'un capteur de pression piézoélectrique."},
            {"time": "14:00", "title": "Normalisation de la mémoire SDL Trados", "desc": "Harmonisation des termes traduits dans la base terminologique partagée de l'entreprise."},
            {"time": "16:30", "title": "Relecture croisée d'un brevet aéronautique", "desc": "Vérification de la cohérence juridique et technique des revendications avant dépôt auprès de l'INPI."}
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
                {"step": "Licence (Bac +3)", "title": "Licence LEA ou Licence scientifique/technique avec mineure langues", "desc": "Bases solides en langues étrangères appliquées et acquisition d'un champ disciplinaire scientifique."},
                {"step": "Master professionnel (Bac +5)", "title": "Master Traduction Technique et Scientifique ou Diplôme ISIT/ESIT", "desc": "Conseillé par Imagine ton Futur : 5 années d'études après un bac général avec forte valorisation des doubles compétences (droit, biologie, ingénierie + langues)."}
            ],
            "schools": [
                {"name": "Université de Strasbourg (Master Traduction Professionnelle et Technologies) — France", "country": "France", "scope": "France"},
                {"name": "ISIT (Master Traduction et Localisation de Technologies) — Paris, France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique (ESP de Dakar) / UCAD — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification SDL Trados Studio Certified Professional", "Norme ISO 17100 pour les services de traduction"]
        },
        "career": {
            "sectors": ["Pharmacie & Essais cliniques", "Aéronautique & Défense", "Télécoms & Électronique", "Organismes internationaux (OTAN, ONU)"],
            "employerTypes": ["Industries manufacturières", "Sociétés de services de traduction", "Freelance / Indépendant"],
            "evolution": ["Chef de projet localisation", "Terminologue en chef", "Responsable de documentation technique internationale", "Consultant en ingénierie linguistique"],
            "pros": ["Secteur très porteur offrant les meilleurs débouchés de la traduction", "Tarifs de prestation supérieurs à la traduction générale"],
            "cons": ["Textes parfois très austères et répétitifs", "Veille technologique permanente obligatoire"]
        },
        "gettingStarted": {
            "beginnerProject": "Traduire intégralement la notice technique en anglais d'un objet connecté de 5 pages vers le français, avec constitution d'un glossaire de 50 termes bilingues.",
            "steps": [
                "Choisir un domaine de spécialité de prédilection (médical, énergie, informatique, automobile)",
                "Apprendre à utiliser un gestionnaire de terminologie (MultiTerm ou base Excel normalisée)",
                "Contacter des agences de traduction technique spécialisées pour des tests de recrutement"
            ],
            "freeResources": ["IATE (Terminologie technique européenne)", "TermSciences (Portail terminologique du CNRS)"]
        },
        "aiImpact": {
            "summary": "La traduction automatique neuronale est très performante sur les textes techniques stéréotypés, transformant le traducteur en expert de post-édition et de contrôle qualité critique.",
            "positiveImpacts": ["Accélération massive du traitement des volumes documentaires", "Suppression des tâches de retranscription fastidieuses"],
            "risksAndChallenges": ["Banalisation apparente de la compétence linguistique", "Risque d'erreurs subtiles mais fatales dans les dosages pharmaceutiques ou couples de serrage mécanique"],
            "recommendedSkills": ["Expertise dans l'évaluation des erreurs de moteurs neuronaux", "Compétences poussées en gestion de la cohérence terminologique globale"]
        },
        "africaContext": {
            "senegalInsight": "Avec l'exploitation des gisements de pétrole et gaz offshore (Sangomar, GTA), le déploiement des infrastructures solaires et ferroviaires (TER), le Sénégal connaît une demande explosive de traduction technique de normes, manuels de forage et spécifications HSE.",
            "westAfricaOpportunities": "Documentation minière, projets d'ingénierie civile de la CEDEAO et partenariats industriels sino-africains.",
            "localChampions": ["Ministère de l'Énergie, du Pétrole et des Mines (Sénégal)", "PETROSEN (Société des Pétroles du Sénégal)", "Apave Sénégal & Bureaux de contrôle"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Fiche métier : Traducteur technique", "url": "https://www.imaginetonfutur.com/metier/traducteur-technique.html", "type": "metier"},
            {"organization": "Société Française des Traducteurs", "title": "Le traducteur technique et scientifique", "url": "https://www.sft.fr", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Selon Imagine ton Futur, les secteurs du médical, du juridique, de l'électronique et des télécoms sont ceux qui offrent le plus de débouchés et les rémunérations les plus attractives de toute la profession !",
            "pourquoi": "Dans ces domaines critiques, la moindre erreur de traduction peut engager des responsabilités financières de millions d'euros ou menacer la vie humaine.",
            "a_retenir": "Le traducteur technique est le copilote linguistique de l'industrie moderne."
        }
    },

    # -----------------------------------------------------------------------
    # 7. LINGUISTE INFORMATICIEN / INGÉNIEUR TAL
    # -----------------------------------------------------------------------
    {
        "id": "linguiste-informaticien",
        "slug": "linguiste-informaticien",
        "title": "Linguiste Informaticien / Ingénieur TAL (NLP)",
        "aliases": ["Ingénieur en traitement automatique des langues", "Computational Linguist", "Expert NLP", "Spécialiste IA & Langage"],
        "icon": "📜",
        "image": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Linguistique & Traitement du Langage",
        "domainId": "linguistique-tal",
        "subdomain": "Traitement automatique des langues (TAL / NLP)",
        "sectors": ["Intelligence artificielle", "Recherche linguistique", "Logiciels & Tech", "Télécoms"],
        "sourceImagineTonFutur": True,
        "isEmerging": True,
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
            {"time": "09:00", "title": "Analyse d'erreurs sur un classifieur textuel", "desc": "Identification des ambiguïtés syntaxiques causant de faux positifs dans la détection d'intentions utilisateurs."},
            {"time": "11:00", "title": "Session d'annotation sémantique", "desc": "Définition du guide d'annotation pour une équipe d'étiqueteurs sur des corpus de questions juridiques."},
            {"time": "14:00", "title": "Développement en Python / Hugging Face", "desc": "Fine-tuning d'un modèle Transformer (BERT / Mistral) pour la reconnaissance d'entités médicales."},
            {"time": "16:30", "title": "Réunion interdisciplinaire avec les data scientists", "desc": "Explication des phénomènes d'anaphore et de polysémie pour affiner l'architecture du réseau de neurones."}
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
                {"step": "Licence (Bac +3)", "title": "Licence Sciences du Langage avec parcours Informatique ou Licence MIASHS", "desc": "Alliance des fondamentaux de la linguistique et des mathématiques/informatique."},
                {"step": "Master professionnel / recherche (Bac +5)", "title": "Master TAL (Traitement Automatique des Langues) ou Master Informatique parcours TAL", "desc": "Formation de référence alliant deep learning, ingénierie linguistique et linguistique informatique."}
            ],
            "schools": [
                {"name": "INALCO (Langues O' - Master TAL) — Paris, France", "country": "France", "scope": "France"},
                {"name": "Université Sorbonne Nouvelle & Paris Nanterre (Master TAL) — France", "country": "France", "scope": "France"},
                {"name": "Université Cheikh Anta Diop (UCAD - Master Informatique / Linguistique appliquée) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certifications Hugging Face NLP", "DeepLearning.AI Natural Language Processing Specialization"]
        },
        "career": {
            "sectors": ["Intelligence artificielle", "Moteurs de recherche & réseaux sociaux", "Santé & Pharmacie", "Défense & Sécurité"],
            "employerTypes": ["Startups IA & Scale-ups", "Grands groupes technologiques", "Instituts de recherche publique"],
            "evolution": ["Lead NLP Scientist", "Head of AI Product", "Directeur de recherche en linguistique computationnelle"],
            "pros": ["Rémunération parmi les plus élevées des humanités", "Au cœur de la révolution technologique contemporaine"],
            "cons": ["Nécessite une double compétence exigeante (littéraire + code mathématique)"]
        },
        "gettingStarted": {
            "beginnerProject": "Créer avec Python et la bibliothèque spaCy un extracteur automatique d'entités nommées (personnes, lieux, dates) sur des articles de presse en français.",
            "steps": [
                "Suivre le tutoriel gratuit 'spaCy 101' en ligne",
                "Prendre en main Google Colab pour exécuter des modèles de langage pré-entraînés",
                "Participer à une compétition textuelle sur Kaggle"
            ],
            "freeResources": ["Course.spacy.io (Formation interactive gratuite au NLP)", "Hugging Face NLP Course"]
        },
        "aiImpact": {
            "summary": "Le linguiste informaticien est l'artisan direct de la révolution des LLMs : son expertise est indispensable pour guider, évaluer et corriger les modèles de fondation.",
            "positiveImpacts": ["Explosion de la demande de compétences linguistiques dans l'industrie tech", "Rôle clé dans la réduction des hallucinations des IA"],
            "risksAndChallenges": ["Obsolescence rapide des approches à base de règles au profit des modèles neuronaux massifs", "Nécessité de comprendre les architectures hardware de calcul"],
            "recommendedSkills": ["Maîtrise des techniques de RAG (Retrieval-Augmented Generation)", "Prompt engineering avancé et techniques de 'fine-tuning' linguistique"]
        },
        "africaContext": {
            "senegalInsight": "Le Sénégal est un pionnier africain du TAL pour les langues locales. Des initiatives d'envergure (IA en Wolof, Pulaar, Sérère) sont développées pour permettre aux populations non alphabétisées d'accéder aux services publics et financiers par la voix.",
            "westAfricaOpportunities": "Création de corpus vocaux et textuels pour les langues nationales ouest-africaines, traduction automatique vocale pour l'AgriTech et la Santé.",
            "localChampions": ["Laboratoire LERSTAD (UGB Saint-Louis)", "Projet Masakhane (NLP panafricain)", "Startups sénégalaises d'IA vocale (Baamtu, SunuCode)"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Fiche métier : Linguiste informaticien", "url": "https://www.imaginetonfutur.com/metier/linguiste-informaticien.html", "type": "metier"},
            {"organization": "ATALA (Association pour le Traitement Automatique des Langues)", "title": "Les formations et carrières en TAL", "url": "https://www.atala.org", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Pour qu'une IA comme ChatGPT ou Siri comprenne la différence entre 'Je prends un avocat pour me défendre' et 'Je mange un avocat avec de la vinaigrette', il a fallu l'expertise d'un linguiste informaticien pour désambiguïser la polysémie !",
            "pourquoi": "L'ordinateur ne voit que des suites de chiffres : seul le linguiste sait lui apprendre les règles sémantiques invisibles du contexte humain.",
            "a_retenir": "Le linguiste informaticien donne une conscience linguistique aux machines."
        }
    },

    # -----------------------------------------------------------------------
    # 8. TERMINOLOGUE
    # -----------------------------------------------------------------------
    {
        "id": "terminologue",
        "slug": "terminologue",
        "title": "Terminologue",
        "aliases": ["Gestionnaire terminologique", "Lexicographe technique", "Ingénieur terminologue", "Spécialiste du vocabulaire spécialisé"],
        "icon": "📖",
        "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Linguistique & Traitement du Langage",
        "domainId": "linguistique-tal",
        "subdomain": "Terminologie, Lexicographie & Normalisation",
        "sectors": ["Organisations internationales", "Industrie", "Édition de dictionnaires", "Intelligence artificielle"],
        "sourceImagineTonFutur": True,
        "isEmerging": False,
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
            {"time": "09:00", "title": "Extraction terminologique sur textes d'énergie verte", "desc": "Analyse assistée par logiciel d'un corpus de 500 pages sur l'hydrogène vert pour repérer les nouveaux termes."},
            {"time": "11:30", "title": "Rédaction de fiches terminologiques", "desc": "Rédaction de définitions rigoureuses pour 5 concepts naissants et recherche des équivalents en anglais, espagnol et allemand."},
            {"time": "14:30", "title": "Commission de normalisation linguistique", "desc": "Débat avec des experts scientifiques pour valider la proposition d'un terme français officiel en remplacement d'un anglicisme."},
            {"time": "16:30", "title": "Mise à jour de la base de données internationale", "desc": "Validation et publication des nouvelles entrées terminologiques dans le portail partagé des traducteurs."}
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
                {"step": "Licence (Bac +3)", "title": "Licence Sciences du Langage, LEA ou Information-Communication", "desc": "Bases de la linguistique descriptive, de la lexicologie et pratique de deux langues étrangères."},
                {"step": "Master professionnel (Bac +5)", "title": "Master Ingénierie Terminologique, Traduction & Gestion de Contenu", "desc": "Formation spécialisée en gestion de bases de données terminologiques, ontologies et néologie."}
            ],
            "schools": [
                {"name": "Université Rennes 2 (Master Traduction et Terminologie) — France", "country": "France", "scope": "France"},
                {"name": "Institut National des Langues et Civilisations Orientales (INALCO) — Paris, France", "country": "France", "scope": "France"},
                {"name": "Université Cheikh Anta Diop (UCAD - FLSH / Département de Linguistique) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat de Terminologie de l'Association Européenne de Terminologie (EAFT)"]
        },
        "career": {
            "sectors": ["Institutions multilatérales", "Industrie pharmaceutique et automobile", "Grandes banques et assurances", "Éditeurs de logiciels"],
            "employerTypes": ["Institutions publiques internationales", "Cabinets de conseil terminologique", "Grandes entreprises"],
            "evolution": ["Responsable de la gouvernance des données terminologiques", "Chef de projet en ingénierie linguistique", "Directeur de la communication institutionnelle"],
            "pros": ["Rôle d'autorité intellectuelle respecté dans les grandes organisations", "Activité intellectuelle stimulante et structurante"],
            "cons": ["Métier parfois méconnu du grand public", "Nécessite de convaincre de l'importance de la rigueur lexicale"]
        },
        "gettingStarted": {
            "beginnerProject": "Constituer une base de données terminologique de 30 termes sur un domaine novateur (par exemple les batteries solides ou la finance décentralisée) avec définitions et contextes d'usage.",
            "steps": [
                "Explorer la base européenne IATE en libre accès (iate.europa.eu)",
                "Apprendre à rédiger une définition selon la norme ISO 704",
                "Créer son premier fichier d'export au format TBX"
            ],
            "freeResources": ["IATE (Base terminologique de l'UE)", "Grand Dictionnaire Terminologique (GDT - Québec)"]
        },
        "aiImpact": {
            "summary": "La terminologie est le pilier indispensable pour guider les IA d'entreprise : sans vocabulaire contrôlé et ontologies créées par des terminologues, les LLMs génèrent des contresens coûteux.",
            "positiveImpacts": ["Automatisation de l'extraction de candidats termes par les algorithmes", "Revalorisation du rôle de terminologue comme garant de la vérité terrain pour les IA"],
            "risksAndChallenges": ["Prolifération de termes générés sans validation humaine", "Nécessité de maîtriser les graphes de connaissances (Knowledge Graphs)"],
            "recommendedSkills": ["Modélisation d'ontologies sémantiques (OWL, Protégé)", "Connexion entre bases terminologiques et architectures RAG d'entreprises"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la terminologie joue un rôle stratégique dans la modernisation des langues nationales (Wolof, Pulaar, Sérère) pour transcrire le vocabulaire médical, juridique, agricole et numérique sans recourir systématiquement au français.",
            "westAfricaOpportunities": "Commissions nationales de terminologie de l'Académie Africaine des Langues (ACALAN), harmonisation terminologique de l'OHADA en droit des affaires.",
            "localChampions": ["Centre de Linguistique Appliquée de Dakar (CLAD - UCAD)", "Académie Africaine des Langues (ACALAN - Union Africaine)", "Secrétariat Général de l'OHADA"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Fiche métier : Terminologue", "url": "https://www.imaginetonfutur.com/metier/terminologue.html", "type": "metier"},
            {"organization": "Délégation générale à la langue française et aux langues de France (DGLFLF)", "title": "Dispositif d'enrichissement de la langue française", "url": "https://www.culture.gouv.fr/DGLFLF", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "La base terminologique officielle IATE de l'Union Européenne compte plus de 8 millions de termes répartis dans les 24 langues officielles de l'Union !",
            "pourquoi": "Sans cette normalisation rigoureuse assurée au quotidien par des terminologues, les lois européennes seraient inapplicables et créeraient des contentieux juridiques permanents.",
            "a_retenir": "Le terminologue donne des frontières nettes aux idées."
        }
    },

    # -----------------------------------------------------------------------
    # 9. HISTORIEN
    # -----------------------------------------------------------------------
    {
        "id": "historien",
        "slug": "historien",
        "title": "Historien / Chercheur en Histoire",
        "aliases": ["Enseignant-chercheur en histoire", "Historien consultant", "Historien d'entreprise", "Médiateur de la mémoire"],
        "icon": "🏛️",
        "image": "https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Histoire & Patrimoine",
        "domainId": "histoire-patrimoine",
        "subdomain": "Recherche historique & Valorisation mémorielle",
        "sectors": ["Recherche scientifique", "Enseignement supérieur", "Patrimoine & Musées", "Médias & Conseil"],
        "sourceImagineTonFutur": True,
        "isEmerging": False,
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
            {"time": "09:00", "title": "Dépouillement d'archives aux Archives Nationales", "desc": "Lecture et retranscription de registres de commerce maritime du XVIIIe siècle pour analyser les flux marchands."},
            {"time": "12:00", "title": "Séminaire de recherche doctoral", "desc": "Débat méthodologique avec des collègues et doctorants sur les nouvelles approches de l'histoire environnementale."},
            {"time": "14:30", "title": "Rédaction d'un article scientifique", "desc": "Rédaction d'un chapitre pour une revue internationale sur l'histoire des épidémies et de la santé publique."},
            {"time": "17:00", "title": "Intervention média / vulgarisation", "desc": "Enregistrement d'un podcast d'histoire grand public pour expliquer la genèse historique d'un conflit géopolitique actuel."}
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
                {"step": "Licence (Bac +3)", "title": "Licence d'Histoire ou bi-licence Histoire / Sciences Politiques", "desc": "Panorama des quatre grandes périodes (ancienne, médiévale, moderne, contemporaine) et méthode documentaire."},
                {"step": "Master Recherche (Bac +5)", "title": "Master Histoire et Civilisations", "desc": "Premier mémoire de recherche original sur archives inédites et séminaires méthodologiques."},
                {"step": "Doctorat (Bac +8)", "title": "Doctorat en Histoire (Thèse de 3 à 4 ans)", "desc": "Recherche doctorale majeure donnant accès aux concours d'enseignant-chercheur ou de chercheur CNRS."}
            ],
            "schools": [
                {"name": "Université Panthéon-Sorbonne (Paris 1) — France", "country": "France", "scope": "France"},
                {"name": "École des Hautes Études en Sciences Sociales (EHESS) — Paris, France", "country": "France", "scope": "France"},
                {"name": "Université Cheikh Anta Diop (UCAD - Département d'Histoire de la FLSH) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Agrégation d'Histoire (concours d'enseignement d'excellence)", "Habilitation à Diriger des Recherches (HDR)"]
        },
        "career": {
            "sectors": ["Enseignement supérieur & Recherche", "Enseignement secondaire", "Institutions patrimoniales & Musées", "Médias & Édition"],
            "employerTypes": ["Universités publiques", "CNRS / Instituts de recherche", "Ministère de la Culture", "Sociétés de production"],
            "evolution": ["Professeur des universités", "Directeur de laboratoire de recherche", "Commissaire scientifique d'exposition historique", "Directeur de musée historique"],
            "pros": ["Passion intellectuelle absolue et satisfaction de découvrir des faits oubliés", "Utilité citoyenne pour éclairer le débat public"],
            "cons": ["Nombre de postes académiques limités et concours très exigeants", "Travail de recherche long et exigeant"]
        },
        "gettingStarted": {
            "beginnerProject": "Reconstituer l'histoire d'un lieu ou d'un événement local méconnu à partir de 3 sources d'archives numérisées en libre accès sur Gallica ou les archives départementales.",
            "steps": [
                "Se former à la recherche dans les bases de données d'archives en ligne",
                "Lire un classique de méthode historique (ex: 'Apologie pour l'histoire ou Métier d'historien' de Marc Bloch)",
                "Rédiger une synthèse de 5 pages en citant scrupuleusement ses sources en notes de bas de page"
            ],
            "freeResources": ["Gallica (Bibliothèque Nationale de France)", "Retronews (Presse historique numérisée)"]
        },
        "aiImpact": {
            "summary": "L'IA transforme l'accès aux archives grâce à la transcription automatique d'écritures manuscrites (Transkribus) et la recherche vectorielle, permettant d'analyser des millions de pages en quelques secondes.",
            "positiveImpacts": ["Déchiffrement rapide de milliers de manuscrits anciens manuscrits", "Visualisation de réseaux historiques complexes"],
            "risksAndChallenges": ["Risque d'anachronisme si l'on fait confiance à des résumés automatisés sans vérifier les sources", "Hallucinations de faux faits historiques par les LLMs"],
            "recommendedSkills": ["Maîtrise des outils d'humanités numériques et de transcription assistée", "Esprit critique redoublé pour déjouer les fausses affirmations historiques"]
        },
        "africaContext": {
            "senegalInsight": "Le Sénégal est au cœur de l'historiographie africaine grâce à l'œuvre monumentale du Pr Cheikh Anta Diop (antériorité des civilisations noires, Égypte antique). L'Institut Fondamental d'Afrique Noire (IFAN Ch. Anta Diop) à l'UCAD demeure un pôle mondial de recherche sur l'histoire et les civilisations africaines.",
            "westAfricaOpportunities": "Histoire de la traite négrière et de la colonisation (Île de Gorée), histoire des royaumes précoloniaux (Djolof, Cayor, Fouta), décolonisation et archives orales.",
            "localChampions": ["IFAN Cheikh Anta Diop (Dakar)", "Archives Nationales du Sénégal", "Maison des Esclaves de Gorée"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Fiche métier : Historien", "url": "https://www.imaginetonfutur.com/metier/historien.html", "type": "metier"},
            {"organization": "Comité Français des Sciences Historiques", "title": "Les métiers de l'histoire et de la recherche", "url": "https://www.cfsh.fr", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "La prestigieuse collection de l''Histoire Générale de l'Afrique', rédigée sous l'égide de l'UNESCO sur 30 ans par les plus éminents historiens africains, compte 8 volumes monumentaux déconstruisant les préjugés coloniaux !",
            "pourquoi": "Ce projet scientifique historique a rendu aux peuples africains leur place légitime au cœur du récit de l'humanité.",
            "a_retenir": "Celui qui comprend son passé éclaire le chemin de son avenir."
        }
    },

    # -----------------------------------------------------------------------
    # 10. ARCHIVISTE
    # -----------------------------------------------------------------------
    {
        "id": "archiviste",
        "slug": "archiviste",
        "title": "Archiviste / Record Manager",
        "aliases": ["Conservateur des archives", "Gestionnaire d'archives numériques", "Records Manager d'entreprise", "Responsable de fonds patrimoniaux"],
        "icon": "📦",
        "image": "https://images.unsplash.com/photo-1507842229458-577884d08332?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Histoire & Patrimoine",
        "domainId": "histoire-patrimoine",
        "subdomain": "Archives, Conservation & Records Management",
        "sectors": ["Patrimoine public", "Grandes entreprises & Banques", "Institutions judiciaires", "Numérique"],
        "sourceImagineTonFutur": True,
        "isEmerging": False,
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
            {"time": "08:30", "title": "Contrôle des versements administratifs", "desc": "Réception de 50 boîtes d'archives d'un tribunal, vérification des bordereaux et tri des pièces éliminables."},
            {"time": "11:00", "title": "Numérisation et métadonnées", "desc": "Indexation de parchemins numérisés sous la norme internationale de description archivistique ISAD(G)."},
            {"time": "14:00", "title": "Audit Records Management en entreprise", "desc": "Intervention auprès de la direction juridique d'une banque pour auditer la politique de conservation des contrats numériques."},
            {"time": "16:30", "title": "Atelier pédagogique / accueil du public", "desc": "Animation d'un atelier d'initiation à la recherche généalogique pour un groupe de lycéens."}
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
                {"step": "Licence (Bac +3)", "title": "Licence Histoire ou Licence Pro Métiers de l'Information et des Archives", "desc": "Bases historiques, méthodologie documentaire et droit public."},
                {"step": "Master professionnel (Bac +5)", "title": "Master Gestion des Archives et Records Management ou Diplôme de l'École des Chartes", "desc": "Formation de haut niveau en archivistique contemporaine, archives numériques et paléographie."}
            ],
            "schools": [
                {"name": "École Nationale des Chartes — Paris, France", "country": "France", "scope": "France"},
                {"name": "Université d'Angers / Université Paris 8 (Master Archives) — France", "country": "France", "scope": "France"},
                {"name": "EBAD (École de Bibliothécaires, Archivistes et Documentalistes - UCAD) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Concours de Conservateur du Patrimoine (spécialité Archives)", "Certification Records Manager (ARMA / ICA)"]
        },
        "career": {
            "sectors": ["Fonction publique d'État et territoriale", "Grandes entreprises (Banques, Énergie, Luxe)", "Organisations internationales", "Prestataires d'archivage"],
            "employerTypes": ["Services d'archives publiques", "Directions juridiques de multinationales", "Sociétés de numérisation"],
            "evolution": ["Directeur d'archives départementales/nationales", "Chief Information Officer (CIO)", "Directeur de la gouvernance des données"],
            "pros": ["Rôle essentiel de garant des droits et de l'histoire", "Très forte insertion professionnelle pour les diplômés spécialisés"],
            "cons": ["Poussière et manipulation de charges lourdes lors des inventaires physiques", "Budget parfois sous-estimé par les organisations"]
        },
        "gettingStarted": {
            "beginnerProject": "Organiser et inventorier les archives familiales ou associatives sur 3 générations en créant un tableau de classement Excel normé.",
            "steps": [
                "Découvrir la norme de description ISAD(G) sur le site des Archives de France",
                "Visiter les archives départementales les plus proches lors des Journées du Patrimoine",
                "Se renseigner sur les formations de l'Association des Archivistes Français (AAF)"
            ],
            "freeResources": ["FranceArchives (Portail national des archives françaises)", "ICA (Conseil International des Archives)"]
        },
        "aiImpact": {
            "summary": "L'IA révolutionne l'indexation des archives grâce à la reconnaissance de texte manuscrit (HTR), la classification automatique et la détection d'entités nommées dans des millions de documents.",
            "positiveImpacts": ["Automatisation des tâches de métadonnées chronophages", "Recherche plein texte dans des manuscrits vieux de cinq siècles"],
            "risksAndChallenges": ["Obsolescence des formats numériques nécessitant une veille technologique constante", "Risque de perte de contexte dans le classement algorithmique"],
            "recommendedSkills": ["Maîtrise des formats d'encadrement des métadonnées ouvertes (Linked Open Data)", "Gouvernance des données et archivage conforme aux normes d'audit"]
        },
        "africaContext": {
            "senegalInsight": "L'EBAD (École de Bibliothécaires, Archivistes et Documentalistes de l'UCAD à Dakar) est l'école panafricaine de référence historique créée en 1967, formant l'élite des archivistes de plus de 25 pays d'Afrique francophone.",
            "westAfricaOpportunities": "Modernisation et numérisation des archives de l'Afrique Occidentale Française (fonds de l'AOF conservé à Dakar, trésor mondial unique).",
            "localChampions": ["Direction des Archives du Sénégal (Fonds AOF)", "EBAD de l'Université Cheikh Anta Diop", "Banque Centrale des États de l'Afrique de l'Ouest (BCEAO)"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Secteur Information, communication & Métiers du Livre", "url": "https://www.imaginetonfutur.com/les-metiers/domaine/information-communication.html", "type": "metier"},
            {"organization": "Association des Archivistes Français (AAF)", "title": "Le métier d'archiviste aujourd'hui", "url": "https://www.archivistes.org", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Les Archives Nationales du Sénégal à Dakar conservent le fond historique de l'Afrique Occidentale Française (AOF), soit plus de 15 kilomètres linéaires de documents historiques inestimables retraçant l'histoire de 8 pays de la région !",
            "pourquoi": "Ces documents sont classés au Registre Mémoire du Monde de l'UNESCO pour leur valeur universelle exceptionnelle.",
            "a_retenir": "Sans archives, il n'y a ni preuve de droit pour le citoyen, ni histoire pour la nation."
        }
    },

    # -----------------------------------------------------------------------
    # 11. CONSERVATEUR DU PATRIMOINE
    # -----------------------------------------------------------------------
    {
        "id": "conservateur-patrimoine",
        "slug": "conservateur-patrimoine",
        "title": "Conservateur du Patrimoine",
        "aliases": ["Conservateur en chef", "Directeur de musée patrimonial", "Conservateur des monuments historiques", "Responsable scientifique de collections"],
        "icon": "🏛️",
        "image": "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Histoire & Patrimoine",
        "domainId": "histoire-patrimoine",
        "subdomain": "Conservation & Valorisation patrimoniale",
        "sectors": ["Musées", "Monuments historiques", "Ministère de la Culture", "Collectivités territoriales"],
        "sourceImagineTonFutur": True,
        "isEmerging": False,
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
            {"time": "08:30", "title": "Inspection d'une salle de musée en conservation préventive", "desc": "Relevé des hygromètres et luxmètres dans la galerie des peintures anciennes pour prévenir toute dégradation."},
            {"time": "11:00", "title": "Comité d'acquisition d'œuvres d'art", "desc": "Défense scientifique d'un projet d'achat d'un tableau du XVIIe siècle auprès du conseil d'administration."},
            {"time": "14:30", "title": "Visite d'atelier avec les restaurateurs agréés", "desc": "Validation du protocole de nettoyage et de rentoilage d'une fresque historique."},
            {"time": "17:00", "title": "Réunion scénographie pour la future exposition", "desc": "Arbitrage des textes de médiation, de l'éclairage et du parcours visiteur avec les scénographes."}
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
                {"step": "Licence & Master (Bac +5)", "title": "Master Histoire de l'art, Archéologie ou École du Louvre", "desc": "Haute spécialisation dans une aire chrono-culturelle et pratique de 2 langues étrangères."},
                {"step": "Concours & Formation d'élite (Bac +6)", "title": "Institut National du Patrimoine (INP - 18 mois)", "desc": "Concours parmi les plus sélectifs de la fonction publique (taux de réussite < 5%) suivi d'une formation rémunérée."}
            ],
            "schools": [
                {"name": "Institut National du Patrimoine (INP) — Paris, France", "country": "France", "scope": "France"},
                {"name": "École du Louvre — Paris, France", "country": "France", "scope": "France"},
                {"name": "Institut Fondamental d'Afrique Noire (IFAN Ch. Anta Diop / Musée Théodore Monod) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Titre de Conservateur d'État ou Territorial du Patrimoine", "Habilitation de régie des œuvres d'art"]
        },
        "career": {
            "sectors": ["Musées de France", "Monuments nationaux", "Directions régionales des affaires culturelles (DRAC)", "Fondations privées de prestige"],
            "employerTypes": ["Ministère de la Culture", "Grandes métropoles régionales", "Institutions muséales internationales"],
            "evolution": ["Conservateur général du patrimoine", "Directeur d'un grand musée national (Louvre, Orsay, Quai Branly)", "Inspecteur général des patrimoines"],
            "pros": ["Prestige intellectuel incomparable et contact quotidien intime avec les chefs-d'œuvre", "Statut protégé de haut fonctionnaire"],
            "cons": ["Concours d'entrée exceptionnellement difficile", "Lourdes responsabilités administratives et budgétaires"]
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser une fiche d'inventaire scientifique détaillée d'une œuvre patrimoniale locale selon la grille descriptive du ministère de la Culture.",
            "steps": [
                "Visiter régulièrement les musées et analyser l'accrochage et les cartels explicatifs",
                "Consulter les annales des épreuves du concours de l'INP sur inp.fr",
                "Effectuer un stage de régie ou de documentation dans un musée municipal"
            ],
            "freeResources": ["POP (Plateforme Ouverte du Patrimoine du Ministère de la Culture)", "INP.fr (Institut National du Patrimoine)"]
        },
        "aiImpact": {
            "summary": "L'IA assiste la recherche de provenances d'œuvres, la détection des faussaires par analyse spectrale et la modélisation 3D de monuments disparus, renforçant le rôle décisionnel du conservateur.",
            "positiveImpacts": ["Reconstitution virtuelle immersive de sites historiques détruits", "Croisement ultra-rapide des catalogues de ventes mondiales pour tracer les spoliations"],
            "risksAndChallenges": ["Multiplication de faux générés par IA reproduisant la patine des maîtres anciens", "Nécessité d'expertises matérielles physiques irréfutables"],
            "recommendedSkills": ["Technologies d'analyse physico-chimique non invasive", "Éthique de la restitution patrimoniale et de la traçabilité numérique"]
        },
        "africaContext": {
            "senegalInsight": "Dakar abrite le Musée des Civilisations Noires (MCN), l'un des musées les plus modernes du continent inauguré en 2018, ainsi que le Musée Théodore Monod d'Art Africain (IFAN). Les conservateurs sénégalais sont aux avant-postes du débat mondial sur la restitution des biens culturels africains.",
            "westAfricaOpportunities": "Muséographie contemporaine, conservation du patrimoine matériel et immatériel, gestion de réserves muséales sécurisées.",
            "localChampions": ["Musée des Civilisations Noires (MCN de Dakar)", "Musée Théodore Monod d'Art Africain (IFAN)", "Musée Historique de Gorée"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Secteur Art, culture, audiovisuel & Patrimoine", "url": "https://www.imaginetonfutur.com/les-metiers/domaine/art-culture-audiovisuel.html", "type": "metier"},
            {"organization": "Institut National du Patrimoine (INP)", "title": "Le métier de conservateur du patrimoine", "url": "https://www.inp.fr", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Le Musée des Civilisations Noires de Dakar, d'une superficie de 14 000 m², a été conçu pour accueillir les œuvres restituées par les musées occidentaux dans des conditions de conservation préventive équivalentes aux plus grands musées du monde !",
            "pourquoi": "Ses salles régulées climatiquement permettent de conserver masques en bois, textiles royaux et bronzes séculaires dans des conditions parfaites.",
            "a_retenir": "Le conservateur est le relais sacré qui permet aux œuvres du passé de traverser les siècles intactes."
        }
    },

    # -----------------------------------------------------------------------
    # 12. ARCHÉOLOGUE
    # -----------------------------------------------------------------------
    {
        "id": "archeologue",
        "slug": "archeologue",
        "title": "Archéologue",
        "aliases": ["Archéologue de terrain", "Archéologue préventif", "Chercheur en archéologie", "Archéo-anthropologue"],
        "icon": "🏺",
        "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Archéologie",
        "domainId": "archeologie",
        "subdomain": "Archéologie de terrain & préventive",
        "sectors": ["Recherche scientifique", "Aménagement du territoire", "Patrimoine & Culture", "Enseignement"],
        "sourceImagineTonFutur": True,
        "isEmerging": False,
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
            {"time": "08:00", "title": "Briefing sécurité et reprise du décapage de terrain", "desc": "Fouille minutieuse à la truelle d'une nécropole antique mise au jour sur le tracé d'une future voie ferrée."},
            {"time": "11:00", "title": "Enregistrement photogrammétrique", "desc": "Prise de clichés par drone et enregistrement au théodolite des coordonnées 3D de poteries intactes."},
            {"time": "14:00", "title": "Dessin stratigraphique en laboratoire de chantier", "desc": "Relevé à l'échelle d'une coupe de terrain montrant la succession des couches d'occupation humaine."},
            {"time": "16:30", "title": "Conditionnement des prélèvements", "desc": "Emballage sécurisé d'échantillons de charbon de bois destinés à une datation au radiocarbone."}
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
                {"step": "Licence (Bac +3)", "title": "Licence Histoire de l'art et Archéologie", "desc": "Méthodologie archéologique, périodes chrono-culturelles et premiers stages obligatoires sur chantiers-écoles."},
                {"step": "Master professionnel / recherche (Bac +5)", "title": "Master Archéologie préventive ou Master Archéosciences", "desc": "Direction de secteur de fouille, spécialisation technique (céramologie, archéozoologie) et mémoire de recherche."}
            ],
            "schools": [
                {"name": "Université Paris 1 Panthéon-Sorbonne (UFR d'Archéologie) — France", "country": "France", "scope": "France"},
                {"name": "INRAP (Institut National de Recherches Archéologiques Préventives) — France", "country": "France", "scope": "France"},
                {"name": "Institut Fondamental d'Afrique Noire (Laboratoire d'Archéologie de l'UCAD) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Agrément d'opérateur d'archéologie préventive", "Brevet de secourisme sur chantier de travaux publics"]
        },
        "career": {
            "sectors": ["Archéologie préventive (INRAP, collectivités)", "Recherche universitaire et CNRS", "Musées archéologiques", "Bureaux d'études privés en aménagement"],
            "employerTypes": ["INRAP (Institut d'État)", "Collectivités locales", "Opérateurs privés agréés (Éveha, Hadès)", "Laboratoires de recherche"],
            "evolution": ["Responsable de secteur de fouille", "Responsable d'opération archéologique (RO)", "Directeur interrégional de l'INRAP", "Enseignant-chercheur universitaire"],
            "pros": ["Émotion unique d'être le premier être humain à toucher un objet vieux de millénaires", "Travail dynamique alternant plein air et recherche de laboratoire"],
            "cons": ["Pénibilité physique sur les chantiers d'hiver ou sous forte chaleur", "Précarité des contrats à durée déterminée (CDD de chantier) au début"]
        },
        "gettingStarted": {
            "beginnerProject": "Participer comme fouilleur bénévole pendant 2 à 3 semaines sur un chantier de fouilles archéologiques programmées agréé par le ministère de la Culture.",
            "steps": [
                "Consulter la liste officielle des chantiers archéologiques ouverts aux bénévoles sur culture.gouv.fr",
                "Acquérir sa propre truelle archéologique (truelle triangulaire Marshalltown de 4 pouces)",
                "Tenir un carnet de fouille de terrain rigoureux avec croquis et descriptions stratigraphiques"
            ],
            "freeResources": ["Culture.gouv.fr (Liste des chantiers de fouilles bénévoles)", "INRAP.fr (Actualités des découvertes archéologiques)"]
        },
        "aiImpact": {
            "summary": "L'IA révolutionne la prospection archéologique grâce à l'analyse d'images satellites et de relevés LiDAR, détectant automatiquement des cités et tumulus enfouis sous la forêt.",
            "positiveImpacts": ["Détection en quelques heures de milliers de structures invisibles à l'œil nu", "Reconstitution 3D et remontage automatique de fragments de poteries brisées"],
            "risksAndChallenges": ["La fouille physique de terrain reste irremplaçable pour vérifier les hypothèses", "Risque de pillage accéléré si des cartes de vestiges fuitent"],
            "recommendedSkills": ["Traitement d'images LiDAR et télédétection par drone", "Gestion de bases de données spatialisées sous QGIS"]
        },
        "africaContext": {
            "senegalInsight": "Le Sénégal possède un patrimoine archéologique exceptionnel : les cercles mégalithiques de Sénégambie (classés UNESCO), les amas coquilliers du Delta du Saloum et les sites paléolithiques de la presqu'île du Cap-Vert et de la Falémé. L'IFAN de Dakar abrite le laboratoire de référence en archéologie ouest-africaine.",
            "westAfricaOpportunities": "Fouilles préventives lors de la construction des grands corridors autoroutiers, projets miniers et préservation des sites rupestres du Sahara/Sahel.",
            "localChampions": ["Laboratoire d'Archéologie de l'IFAN Ch. Anta Diop", "Direction du Patrimoine Culturel du Sénégal", "Site des Mégalithes de Sine Ngayène"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Fiche métier : Archéologue", "url": "https://www.imaginetonfutur.com/metier/archeologue.html", "type": "metier"},
            {"organization": "INRAP (Institut National de Recherches Archéologiques Préventives)", "title": "Le métier d'archéologue", "url": "https://www.inrap.fr", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En France, la loi sur l'archéologie préventive votée en 2001 oblige tout aménageur (autoroutes, centres commerciaux, lotissements) à financer un diagnostic archéologique préalable, ce qui a sauvé de la destruction des dizaines de milliers de sites historiques !",
            "pourquoi": "Grâce à cette mesure, l'archéologie moderne ne détruit pas le progrès économique mais l'enrichit de connaissances historiques majeures.",
            "a_retenir": "L'archéologue lit dans les couches de terre comme dans les pages d'un livre millénaire."
        }
    },

    # -----------------------------------------------------------------------
    # 13. PALÉONTOLOGUE
    # -----------------------------------------------------------------------
    {
        "id": "paleontologue",
        "slug": "paleontologue",
        "title": "Paléontologue",
        "aliases": ["Chercheur en paléontologie", "Paléoanthropologue", "Paléontologue des vertébrés", "Micropaléontologue"],
        "icon": "🦴",
        "image": "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Archéologie",
        "domainId": "archeologie",
        "subdomain": "Paléontologie & Évolution des espèces",
        "sectors": ["Recherche fondamentale", "Muséums d'histoire naturelle", "Industrie géologique & minière", "Enseignement"],
        "sourceImagineTonFutur": True,
        "isEmerging": False,
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
            {"time": "08:30", "title": "Dégagement au laboratoire de préparation", "desc": "Travail minutieux sous binoculaire pour libérer une mâchoire de mammifère primitif fossilisée de sa gangue calcaire."},
            {"time": "11:00", "title": "Tomographie 3D de la boîte crânienne", "desc": "Analyse au scanner CT haute résolution pour visualiser la cavité endocrânienne sans détruire le fossile."},
            {"time": "14:30", "title": "Analyse phylogénétique par ordinateur", "desc": "Saisie des caractères anatomiques dans un logiciel cladistique pour déterminer l'arbre généalogique de l'espèce."},
            {"time": "17:00", "title": "Préparation de la prochaine mission d'expédition", "desc": "Coordination logistique et permis d'exportation scientifique pour une campagne de prospection au désert."}
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
                {"step": "Licence (Bac +3)", "title": "Licence Sciences de la Terre ou Sciences de la Vie (Biologie / Géologie)", "desc": "Fondations en sédimentologie, biologie de l'évolution et écologie."},
                {"step": "Master de recherche (Bac +5)", "title": "Master Paléontologie, Paléoenvironnements ou Géobiologie", "desc": "Analyse phylogénétique avancée, géochimie isotopique et premier mémoire sur spécimens fossiles."},
                {"step": "Doctorat (Bac +8)", "title": "Doctorat en Paléontologie (Thèse)", "desc": "Étude exhaustive d'une lignée fossile ou d'un gisement, indispensable pour les carrières académiques."}
            ],
            "schools": [
                {"name": "Muséum National d'Histoire Naturelle (MNHN) — Paris, France", "country": "France", "scope": "France"},
                {"name": "Université Claude Bernard Lyon 1 (Master Paléontologie) — France", "country": "France", "scope": "France"},
                {"name": "Université Cheikh Anta Diop (Département de Géologie de la FST / IFAN) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Habilitation à diriger des fouilles paléontologiques", "Certificat de radioprotection pour utilisation de micro-CT scanners"]
        },
        "career": {
            "sectors": ["Recherche fondamentale (CNRS, universités)", "Muséums d'histoire naturelle", "Compagnies pétrolières et minières (micropaléontologie de forage)", "Édition scientifique"],
            "employerTypes": ["Muséum National d'Histoire Naturelle", "Instituts de géosciences", "Universités"],
            "evolution": ["Directeur de collection paléontologique", "Professeur de muséum", "Conseiller scientifique de parcs géologiques mondiaux"],
            "pros": ["Rêve d'enfant devenu réalité scientifique", "Découverte d'espèces inconnues ayant vécu il y a des dizaines de millions d'années"],
            "cons": ["Nombre de postes d'enseignant-chercheur très réduit", "Nécessite une grande persévérance académique"]
        },
        "gettingStarted": {
            "beginnerProject": "Identifier et classer une collection de 10 fossiles marins (ammonites, trilobites, bivalves) en déterminant leur époque géologique grâce à une clé d'identification.",
            "steps": [
                "Visiter la grande galerie de l'Évolution ou la galerie de Paléontologie du Muséum de Paris",
                "Rejoindre une association de géologie amateur pour s'initier au ramassage légal de fossiles",
                "Lire 'L'éventail du vivant' de Stephen Jay Gould pour comprendre les enjeux de l'évolution"
            ],
            "freeResources": ["MNHN.fr (Collections numérisées du Muséum)", "Paleobiology Database (Base mondiale de fossiles)"]
        },
        "aiImpact": {
            "summary": "Les algorithmes de vision par ordinateur accélèrent le tri de micro-fossiles par millions et reconstruisent les tissus mous et la dynamique de marche d'espèces éteintes par simulation biomécanique.",
            "positiveImpacts": ["Classification automatique de foraminifères pour la datation des carottes de glace et de roche", "Simulation ultra-réaliste de la biomécanique des dinosaures"],
            "risksAndChallenges": ["La modélisation informatique ne dispense jamais de la découverte physique du fossile", "Nécessité de valider les simulations par des lois physiques éprouvées"],
            "recommendedSkills": ["Morphométrie géométrique assistée par ordinateur", "Maîtrise des logiciels de simulation biomécanique"]
        },
        "africaContext": {
            "senegalInsight": "Le continent africain est le berceau de l'humanité (Lucy en Éthiopie, Toumaï au Tchad). Au Sénégal, les falaises de Popenguine et de la presqu'île de Dakar abritent des gisements paléontologiques tertiaires et crétacés riches en dents de requins fossiles et faune marine ancienne, étudiés par l'IFAN et le département de Géologie de l'UCAD.",
            "westAfricaOpportunities": "Paléoanthropologie dans le rift et le Sahel, études paléoclimatiques pour comprendre la désertification historique du Sahara.",
            "localChampions": ["Laboratoire de Paléontologie de l'IFAN Ch. Anta Diop", "Musée Géologique de l'UCAD", "Association Sénégalaise pour l'Étude du Quaternaire"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Fiche métier : Paléontologue", "url": "https://www.imaginetonfutur.com/metier/paleontologue.html", "type": "metier"},
            {"organization": "Muséum National d'Histoire Naturelle (MNHN)", "title": "Les métiers de la recherche en paléontologie", "url": "https://www.mnhn.fr", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En 2001 au Tchad, la découverte du fossile de 'Toumaï' (Sahelanthropus tchadensis), vieux de 7 millions d'années, a révolutionné la paléontologie mondiale en repoussant l'âge de nos origines hominidées en plein cœur de l'Afrique sahélienne !",
            "pourquoi": "Cette découverte a prouvé que l'évolution humaine ne s'est pas limitée à l'Afrique de l'Est mais a concerné l'ensemble des écosystèmes africains.",
            "a_retenir": "Le paléontologue est l'archiviste du grand livre de la vie sur Terre."
        }
    },

    # -----------------------------------------------------------------------
    # 14. HISTORIEN DE L'ART
    # -----------------------------------------------------------------------
    {
        "id": "historien-de-lart",
        "slug": "historien-de-lart",
        "title": "Historien de l'Art",
        "aliases": ["Chercheur en histoire de l'art", "Critique d'art", "Expert en art ancien et contemporain", "Conseiller scientifique en arts visuels"],
        "icon": "🎨",
        "image": "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Histoire de l'Art",
        "domainId": "histoire-art",
        "subdomain": "Arts visuels, Expertise & Muséologie",
        "sectors": ["Marché de l'art", "Musées & Galeries", "Recherche & Enseignement", "Édition d'art"],
        "sourceImagineTonFutur": True,
        "isEmerging": False,
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
            {"time": "09:00", "title": "Étude d'une toile attribuée à un maître classique", "desc": "Examen sous lumière rasante et réflectographie infrarouge pour déceler le dessin sous-jacent et les repentirs."},
            {"time": "11:30", "title": "Recherche de provenance en bibliothèque d'art (INHA)", "desc": "Consultation des catalogues de ventes aux enchères du XIXe siècle pour reconstituer la chaîne des propriétaires."},
            {"time": "14:30", "title": "Visite d'atelier d'artiste contemporain", "desc": "Échange approfondi avec un peintre en vue de la rédaction du texte critique d'une future rétrospective."},
            {"time": "17:00", "title": "Rédaction d'une notice scientifique", "desc": "Finalisation de la notice d'une sculpture médiévale pour le catalogue raisonné d'une grande collection publique."}
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
                {"step": "Licence (Bac +3)", "title": "Licence Histoire de l'art ou Premier Cycle de l'École du Louvre", "desc": "Grandes périodes de l'art universel, méthodologie d'analyse d'œuvres et langues étrangères."},
                {"step": "Master professionnel / recherche (Bac +5)", "title": "Master Histoire de l'art ou Deuxième Cycle de l'École du Louvre", "desc": "Spécialisation poussée (arts d'Afrique, Renaissance, art contemporain) et rédaction d'un mémoire de recherche original."},
                {"step": "Doctorat (Bac +8)", "title": "Doctorat en Histoire de l'art", "desc": "Recherche doctorale indispensable pour les postes universitaires et de grands musées nationaux."}
            ],
            "schools": [
                {"name": "École du Louvre — Paris, France", "country": "France", "scope": "France"},
                {"name": "Université Paris 1 Panthéon-Sorbonne (UFR Histoire de l'art) — France", "country": "France", "scope": "France"},
                {"name": "Université Cheikh Anta Diop (Département de Philosophie & Lettres / Arts Visuels) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Agrément d'expert près les Cours d'Appel", "Certificat d'expertise en œuvres d'art"]
        },
        "career": {
            "sectors": ["Marché de l'art (Maisons de ventes, galeries)", "Musées et fondations culturelles", "Enseignement supérieur", "Édition et presse d'art"],
            "employerTypes": ["Maisons de ventes internationales (Sotheby's, Christie's, Artcurial)", "Galeries d'art", "Universités & CNRS"],
            "evolution": ["Spécialiste de département en maison de vente", "Directeur de galerie d'art internationale", "Conservateur de musée", "Critique d'art influent"],
            "pros": ["Émerveillement visuel permanent au contact de la beauté", "Opportunités de voyages mondiaux pour découvrir des collections privées"],
            "cons": ["Milieu professionnel sélectif et concurrentiel", "Exigence d'un réseau relationnel développé dans le milieu de l'art"]
        },
        "gettingStarted": {
            "beginnerProject": "Rédiger une analyse iconographique et formelle de 3 pages d'un tableau célèbre en appliquant la méthode des 3 niveaux d'Erwin Panofsky.",
            "steps": [
                "Télécharger et explorer la base de données Joconde du ministère de la Culture",
                "Visiter un musée avec un carnet de croquis pour observer la composition des toiles",
                "Lire 'L'Histoire de l'art' d'Ernst Gombrich, ouvrage de référence universel"
            ],
            "freeResources": ["INHA.fr (Portail de l'Institut National d'Histoire de l'Art)", "Google Arts & Culture (Visites virtuelles en ultra-haute résolution)"]
        },
        "aiImpact": {
            "summary": "L'IA analyse les coups de pinceau et la composition pour assister l'authentification et restaurer virtuellement des œuvres abîmées, mais seul l'historien de l'art comprend l'intention sensible de l'artiste.",
            "positiveImpacts": ["Comparaison de millions d'œuvres en quelques secondes pour repérer les influences stylistiques", "Reconstitution numérique des couleurs d'origine dégradées par le temps"],
            "risksAndChallenges": ["Production de faux 'dans le style de' par des IA génératives (Midjourney)", "Nécessité de maîtriser l'analyse matérielle des supports pour contrecarrer les contrefaçons"],
            "recommendedSkills": ["Connaissance des protocoles d'analyse scientifique des pigments (spectrométrie XRF)", "Expertise sur les nouvelles formes artistiques numériques (Art génératif, NFTs)"]
        },
        "africaContext": {
            "senegalInsight": "Dakar est la capitale incontestée des arts visuels d'Afrique contemporaine grâce à la Biennale de Dakar (Dak'Art), fondée en 1992, qui réunit tous les deux ans des milliers d'historiens de l'art, commissaires et collectionneurs du monde entier. L'École de Dakar (initiée sous Senghor) a forgé une esthétique majeure de la modernité africaine.",
            "westAfricaOpportunities": "Documentation et théorisation des avant-gardes artistiques africaines, commissariat d'expositions panafricaines et marché de l'art en plein essor.",
            "localChampions": ["Biennale de l'Art Africain Contemporain (Dak'Art)", "Musée Théodore Monod d'Art Africain (IFAN)", "Galerie Cécile Fakhoury (Dakar)"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Secteur Art, culture, audiovisuel", "url": "https://www.imaginetonfutur.com/les-metiers/domaine/art-culture-audiovisuel.html", "type": "metier"},
            {"organization": "Institut National d'Histoire de l'Art (INHA)", "title": "Recherche et carrières en histoire de l'art", "url": "https://www.inha.fr", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "La Biennale de Dakar (Dak'Art) est la plus ancienne et la plus prestigieuse biennale d'art contemporain d'Afrique, accueillant plus de 250 000 visiteurs et des centaines d'artistes de la diaspora à chaque édition !",
            "pourquoi": "Elle offre aux historiens de l'art une tribune mondiale pour écrire l'histoire des arts visuels africains depuis l'Afrique.",
            "a_retenir": "L'historien de l'art apprend au monde à voir au-delà du visible."
        }
    },

    # -----------------------------------------------------------------------
    # 15. CONSERVATEUR DE MUSÉE
    # -----------------------------------------------------------------------
    {
        "id": "conservateur-de-musee",
        "slug": "conservateur-de-musee",
        "title": "Conservateur de Musée",
        "aliases": ["Directeur de musée", "Responsable de collections muséales", "Conservateur d'art", "Chef d'établissement muséal"],
        "icon": "🏛️",
        "image": "https://images.unsplash.com/photo-1572953109213-3be62398eb95?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Histoire de l'Art",
        "domainId": "histoire-art",
        "subdomain": "Direction de musée & Muséographie",
        "sectors": ["Musées publics & privés", "Ministère de la Culture", "Collectivités locales", "Fondations artistiques"],
        "sourceImagineTonFutur": True,
        "isEmerging": False,
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
            {"time": "08:30", "title": "Tournée de sécurité et état des salles", "desc": "Vérification des conditions de présentation des œuvres avant l'ouverture des portes au public."},
            {"time": "10:30", "title": "Négociation d'un prêt international d'œuvres", "desc": "Visioconférence avec un musée new-yorkais pour finaliser le prêt d'un chef-d'œuvre lors de la prochaine exposition."},
            {"time": "14:00", "title": "Point d'étape avec les médiateurs culturels", "desc": "Validation des livrets de visite pour enfants et du parcours sonore accessible aux personnes malvoyantes."},
            {"time": "16:30", "title": "Conférence de presse de lancement de saison", "desc": "Présentation aux journalistes culturels des grandes acquisitions de l'année et du programme des expositions."}
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
                {"step": "Licence (Bac +3)", "title": "Licence Histoire de l'art, Archéologie ou Lettres", "desc": "Acquisition d'une solide culture générale et historique."},
                {"step": "Master (Bac +5)", "title": "Master Muséologie ou Gestion du Patrimoine culturel", "desc": "Apprentissage de la muséographie, de la régie des œuvres et du droit des musées."},
                {"step": "Concours de conservateur (Bac +6)", "title": "Concours de l'Institut National du Patrimoine (INP)", "desc": "Voie royale d'accès au statut de conservateur d'État ou territorial des musées."}
            ],
            "schools": [
                {"name": "Institut National du Patrimoine (INP) — Paris, France", "country": "France", "scope": "France"},
                {"name": "École du Louvre (Filière Muséologie) — Paris, France", "country": "France", "scope": "France"},
                {"name": "Musée des Civilisations Noires / UCAD — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat de Conservateur agréé ICOM (Conseil International des Musées)"]
        },
        "career": {
            "sectors": ["Musées de France", "Musées municipaux et métropolitains", "Fondations d'art privées (Fondation Vuitton, Pinault Collection)", "Musées d'entreprises"],
            "employerTypes": ["Ministère de la Culture", "Collectivités territoriales", "Grandes fondations d'entreprise"],
            "evolution": ["Conservateur en chef", "Directeur d'un établissement public muséal majeur", "Commissaire général de grandes biennales internationales"],
            "pros": ["Rôle de chef d'orchestre au cœur de la création et du patrimoine", "Impact culturel direct sur des dizaines de milliers de visiteurs"],
            "cons": ["Pression budgétaire et impératifs de fréquentation croissants", "Gestion d'équipes pluridisciplinaires parfois complexe"]
        },
        "gettingStarted": {
            "beginnerProject": "Concevoir un projet d'exposition imaginaire de 20 œuvres sur un thème original, avec cartel d'introduction, texte de salle et budget prévisionnel.",
            "steps": [
                "Devenir bénévole dans un musée ou une association d'amis du musée",
                "Participer à la Nuit Européenne des Musées pour observer la gestion des flux de visiteurs",
                "Consulter le site officiel de l'ICOM (icom.museum) pour comprendre les normes éthiques mondiales"
            ],
            "freeResources": ["ICOM.museum (Conseil International des Musées)", "Ministère de la Culture (Fiches Musées de France)"]
        },
        "aiImpact": {
            "summary": "L'IA enrichit la médiation muséale via des avatars de personnages historiques interactifs et des analyses prédictives de fréquentation pour réguler les foules.",
            "positiveImpacts": ["Parcours de visite personnalisés en fonction des centres d'intérêt de chaque visiteur", "Optimisation de la conservation énergétique des salles d'exposition"],
            "risksAndChallenges": ["Risque de gadgetisation technologique au détriment du contact direct avec l'œuvre authentique", "Coûts de maintenance des dispositifs numériques interactifs"],
            "recommendedSkills": ["Conception d'expériences de médiation hybrides (physique + numérique subtil)", "Maîtrise des outils d'analyse de données de fréquentation"]
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la direction du Musée des Civilisations Noires ou du Musée Théodore Monod implique d'incarner une muséologie novatrice, décolonisée et ouverte aux communautés, combinant chefs-d'œuvre historiques et créations contemporaines les plus audacieuses.",
            "westAfricaOpportunities": "Développement de nouveaux écomusées régionaux (Saint-Louis, Ziguinchor) et valorisation des trésors du patrimoine matériel et vivant ouest-africain.",
            "localChampions": ["Musée des Civilisations Noires (MCN - Dakar)", "Musée d'Art Contemporain de Diamniadio", "Musée du CRDS de Saint-Louis"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Fiche métier : Conservateur de musée", "url": "https://www.imaginetonfutur.com/metier/conservateur-de-musee.html", "type": "metier"},
            {"organization": "Conseil International des Musées (ICOM)", "title": "Code de déontologie des musées", "url": "https://icom.museum", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "Selon les données officielles d'Imagine ton Futur, un conservateur de musée débutant démarre aux alentours de 29 500 € brut par an et peut évoluer vers la direction des plus grands établissements culturels nationaux !",
            "pourquoi": "Ce métier allie une haute formation académique à des responsabilités de gestion publique prestigieuses.",
            "a_retenir": "Le conservateur de musée transforme un dépôt d'objets anciens en un foyer vivant d'émotion et de savoir."
        }
    },

    # -----------------------------------------------------------------------
    # 16. COMMISSAIRE-PRISEUR
    # -----------------------------------------------------------------------
    {
        "id": "commissaire-priseur",
        "slug": "commissaire-priseur",
        "title": "Commissaire-Priseur",
        "aliases": ["Commissaire de justice (ventes aux enchères)", "Opérateur de ventes volontaires", "Directeur de maison d'enchères", "Expert-estimateur d'art"],
        "icon": "⚖️",
        "image": "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop&q=80",
        "familyId": "lettres-langues-sciences-humaines",
        "familyName": "Lettres, Langues & Sciences Humaines",
        "domain": "Histoire de l'Art",
        "domainId": "histoire-art",
        "subdomain": "Marché de l'art, Enchères & Expertise légale",
        "sectors": ["Marché de l'art", "Justice & Droit", "Commerce de luxe", "Expertise patrimoniale"],
        "sourceImagineTonFutur": True,
        "isEmerging": False,
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
            {"time": "09:00", "title": "Inventaire de succession sur place", "desc": "Visite d'une propriété historique pour inventorier et estimer pièce par pièce le mobilier, les toiles et l'argenterie."},
            {"time": "12:00", "title": "Exposition publique avant-vente", "desc": "Accueil des collectionneurs et conservateurs de musées venus examiner les lots avant la vacation."},
            {"time": "14:30", "title": "Tenue de la vente aux enchères publique à la tribune", "desc": "Animation de la vente de 250 lots d'art moderne au marteau avec enchérisseurs en salle, au téléphone et en ligne."},
            {"time": "18:30", "title": "Règlement des adjudications et bordereaux", "desc": "Vérification des encaissements, des ordres d'achat exécutés et gestion des éventuelles préemptions de l'État."}
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
                {"step": "Double cursus universitaire (Bac +3)", "title": "Licence en Droit + Licence en Histoire de l'Art", "desc": "Double exigence légale obligatoire pour se présenter à l'examen d'accès."},
                {"step": "Examen d'accès & Stage professionnel (Bac +5)", "title": "Examen d'aptitude à la profession de commissaire de justice / opérateur de ventes + Stage de 2 ans", "desc": "Formation pratique intensive en maison de ventes suivie de l'examen d'aptitude finale."}
            ],
            "schools": [
                {"name": "École du Louvre (associée à l'Université de Droit Panthéon-Assas Paris 2) — France", "country": "France", "scope": "France"},
                {"name": "Conseil des Ventes Volontaires (CVV) / Chambre Nationale des Commissaires de Justice — France", "country": "France", "scope": "France"},
                {"name": "Université Cheikh Anta Diop (Faculté des Sciences Juridiques et Politiques - FSJP) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Prestation de serment devant le Tribunal judiciaire", "Agrément du Conseil des Maisons de Vente"]
        },
        "career": {
            "sectors": ["Marché de l'art", "Maisons de ventes aux enchères (Drouot, Artcurial, Sotheby's)", "Études judiciaires", "Conseil en gestion de patrimoine"],
            "employerTypes": ["Sociétés de Ventes Volontaires (SVV)", "Offices de commissaires de justice", "Maisons d'enchères indépendantes"],
            "evolution": ["Commissaire-priseur associé", "Président de maison de ventes internationale", "Expert d'art auprès des tribunaux et compagnies d'assurance"],
            "pros": ["Métier spectaculaire, vibrant et passionnément humain", "Rémunération très attractive indexée sur le chiffre d'affaires des ventes"],
            "cons": ["Double parcours universitaire très exigeant", "Responsabilité juridique et financière lourde sur les garanties d'authenticité (10 ans)"]
        },
        "gettingStarted": {
            "beginnerProject": "Assister en direct à une vente aux enchères publique à l'Hôtel Drouot ou en ligne sur Drouot Live et noter l'évolution des enchères sur 10 lots consécutifs.",
            "steps": [
                "S'inscrire en double cursus Droit et Histoire de l'Art (ou bi-licence)",
                "Lire chaque semaine La Gazette Drouot pour se familiariser avec les estimations et le vocabulaire du marteau",
                "Faire un stage d'observation dans une maison de ventes aux enchères locale"
            ],
            "freeResources": ["Gazette-drouot.com (Magazine de référence des enchères)", "Conseil des Maisons de Vente (conseildesmaisonsdevente.fr)"]
        },
        "aiImpact": {
            "summary": "L'IA transforme l'estimation préliminaire d'objets d'art à partir de photos et optimise les algorithmes de vente en direct en ligne, mais le talent du commissaire-priseur à la tribune reste irremplaçable pour enflammer les enchères.",
            "positiveImpacts": ["Estimation automatique de cotes par comparaison de milliers de résultats passés", "Détection automatique de signatures et poinçons sur les photos d'argenterie"],
            "risksAndChallenges": ["Erreurs de datation des modèles sur les copies anciennes de tableaux", "Nécessité absolue de l'œil et du toucher physique du commissaire-priseur"],
            "recommendedSkills": ["Maîtrise des enchères hybrides (salle + enchères connectées mondiales en direct)", "Expertise sur l'art numérique et les certificats d'authenticité sur blockchain (NFTs)"]
        },
        "africaContext": {
            "senegalInsight": "Le marché de l'art contemporain africain connaît une envolée spectaculaire. Dakar est devenue une place de cotation incontournable où les maisons de ventes sénégalaises et internationales organisent des vacations dédiées aux maîtres de la peinture et sculpture africaines sous le contrôle de commissaires-priseurs judiciaires et d'experts agréés.",
            "westAfricaOpportunities": "Organisation de ventes caritatives de prestige, ventes aux enchères judiciaires d'entreprises et développement du marché privé des collectionneurs ouest-africains.",
            "localChampions": ["Chambre Nationale des Huissiers et Commissaires de Justice du Sénégal", "Maisons de ventes de Dakar", "Fondations de collectionneurs d'art contemporain"]
        },
        "sources": [
            {"organization": "Imagine ton Futur", "title": "Fiche métier : Commissaire-priseur", "url": "https://www.imaginetonfutur.com/metier/commissaire-priseur.html", "type": "metier"},
            {"organization": "Conseil des Maisons de Vente", "title": "Accéder à la profession de commissaire-priseur", "url": "https://www.conseildesmaisonsdevente.fr", "type": "institutionnel"}
        ],
        "saviezVous": {
            "statut": "chiffre_cle",
            "fait": "En France, la responsabilité du commissaire-priseur sur l'authenticité des biens vendus aux enchères est engagée pendant une durée de 10 ans après la vente !",
            "pourquoi": "Cette garantie légale exceptionnelle offre aux acheteurs une sécurité totale et fait des enchères publiques le canal de vente le plus sûr au monde.",
            "a_retenir": "Le commissaire-priseur fait chanter le marteau entre la rigueur de la loi et la passion de l'art."
        }
    }
]

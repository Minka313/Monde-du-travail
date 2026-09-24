/**
 * MODULE OFFICIEL ENSEIGNEMENT, ÉDUCATION & FORMATION
 * Base de données exhaustive : 8 Domaines d'Excellence • 21 Fiches Métiers Haute Profondeur
 * Double ancrage France (€) / Sénégal (FCFA)
 * Source Principale de référence : Studyrama Enseignement (https://www.studyrama.com/formations/fiches-metiers/enseignement)
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.OrientationEducationData = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    'use strict';

    const DOMAINS = [
    {
        "id": "enseignement-primaire",
        "name": "Enseignement Primaire & Petite Enfance",
        "icon": "🏫",
        "order": 1,
        "chainStage": "Apprentissages Fondamentaux & Éveil",
        "description": "Accompagner les enfants de 2 à 11 ans dans l'acquisition du langage, de la lecture, de l'écriture, du calcul et de la socialisation citoyenne.",
        "subdomains": [
            "École maternelle & Petite enfance",
            "École élémentaire (CP au CM2)",
            "Adaptation scolaire & RASED",
            "Direction d'école primaire"
        ]
    },
    {
        "id": "enseignement-secondaire",
        "name": "Enseignement Secondaire (Général, Technologique & Professionnel)",
        "icon": "📚",
        "order": 2,
        "chainStage": "Approfondissement Disciplinaire & Orientation",
        "description": "Enseigner des disciplines spécialisées au collège et au lycée, préparer aux brevets, baccalauréats et certifications professionnelles.",
        "subdomains": [
            "Collège & Socle commun",
            "Lycée général & Spécialités",
            "Lycée technologique",
            "Lycée professionnel & Enseignement technique",
            "Éducation physique et sportive (EPS)",
            "Éducation artistique & musicale"
        ]
    },
    {
        "id": "enseignement-superieur-recherche",
        "name": "Enseignement Supérieur, Recherche & Milieu Universitaire",
        "icon": "🎓",
        "order": 3,
        "chainStage": "Formation Académique Supérieure & Recherche Fondamentale",
        "description": "Transmettre les savoirs experts à l'université et dans les grandes écoles, tout en menant des activités de recherche et de publication scientifique.",
        "subdomains": [
            "Université & Enseignement magistral / TD",
            "Grandes écoles & Écoles d'ingénieurs / management",
            "Recherche universitaire & Laboratoires",
            "Doctorat & Post-doctorat"
        ]
    },
    {
        "id": "formation-professionnelle",
        "name": "Formation Professionnelle Continue & Éducation des Adultes",
        "icon": "🧑‍🏫",
        "order": 4,
        "chainStage": "Montée en Compétences & Reconversion",
        "description": "Former les salariés, demandeurs d'emploi et professionnels en reconversion, concevoir des modules sur mesure pour le monde économique.",
        "subdomains": [
            "Formation continue pour adultes",
            "Formation technique en entreprise",
            "Apprentissage & CFA",
            "Ingénierie de certification professionnelle"
        ]
    },
    {
        "id": "pedagogie-ingenierie-edtech",
        "name": "Pédagogie, Ingénierie Pédagogique & Technologies Éducatives (EdTech)",
        "icon": "🧠",
        "order": 5,
        "chainStage": "Conception Didactique & Innovation Numérique",
        "description": "Structurer les parcours d'apprentissage, créer des contenus multimédias, animer les plateformes de formation en ligne et dynamiser les communautés apprenantes.",
        "subdomains": [
            "Ingénierie pédagogique multimodale",
            "Digital Learning & Plateformes LMS",
            "Animation de communautés d'apprenants",
            "Responsabilité pédagogique de programmes"
        ]
    },
    {
        "id": "orientation-vie-scolaire-inclusion",
        "name": "Orientation, Vie Scolaire & Inclusion Éducative",
        "icon": "🧭",
        "order": 6,
        "chainStage": "Accompagnement de l'Élève & Cadre de Vie",
        "description": "Veiller au climat scolaire, accompagner le bien-être des élèves, favoriser l'inclusion des élèves à besoins spécifiques et guider l'orientation.",
        "subdomains": [
            "Vie scolaire & Climat éducatif (CPE, AED)",
            "Inclusion scolaire des élèves en situation de handicap (AESH)",
            "Psychologie de l'Éducation Nationale (PsyEN)",
            "Conseil en orientation scolaire et professionnelle"
        ]
    },
    {
        "id": "direction-administration-inspection",
        "name": "Direction, Encadrement, Administration & Inspection Scolaire",
        "icon": "🏢",
        "order": 7,
        "chainStage": "Gouvernance, Pilotage Institutionnel & Évaluation",
        "description": "Piloter les établissements scolaires et universitaires, animer les équipes pédagogiques, gérer les budgets et contrôler la qualité des enseignements.",
        "subdomains": [
            "Direction d'école & Chefferie d'établissement (Principal, Proviseur)",
            "Inspection académique (IEN, IA-IPR)",
            "Admissions & Recrutement d'étudiants",
            "Administration et gestion scolaire"
        ]
    },
    {
        "id": "sante-social-scolaire",
        "name": "Santé, Prévention & Bien-Être en Milieu Éducatif",
        "icon": "🩺",
        "order": 8,
        "chainStage": "Soins, Prévention Sanitaire & Protection de l'Enfance",
        "description": "Assurer le suivi médical et infirmier des élèves, promouvoir l'éducation à la santé, la prévention des conduites à risque et la protection de l'enfance.",
        "subdomains": [
            "Soins infirmiers scolaires & Urgences",
            "Bilans de santé scolaires & Dépistages",
            "Prévention & Éducation à la santé",
            "Protection de l'enfance & Signalements"
        ]
    }
];

    const PEDAGOGICAL_PATHWAYS = [
    {
        "id": "voie-concours-enseignants-education-nationale",
        "name": "Voie Concours Enseignement Public (France & Sénégal)",
        "duration": "Bac +5 (Master MEEF ou Master disciplinaire)",
        "icon": "🏛️",
        "description": "Parcours classique d'accès au statut d'enseignant titulaire : Licence (Bac+3), Master MEEF (Métiers de l'Enseignement, de l'Éducation et de la Formation) ou équivalent FASTEF à Dakar, réussite aux concours d'État (CRPE, CAPES, CAPET, CAPLP, CAPEPS, Agrégation) puis année de stage rémunérée avant titularisation.",
        "steps": [
            "Licence disciplinaire (Maths, Lettres, Histoire, SVT, Anglais...) ou Licence Sciences de l'Éducation (3 ans)",
            "Master MEEF 1ère et 2ème année préparant aux épreuves écrites et orales du concours (2 ans)",
            "Réussite au concours de recrutement de la Fonction Publique d'État",
            "Année de stage avec prise en charge de classe et titularisation comme fonctionnaire d'État"
        ]
    },
    {
        "id": "voie-universitaire-doctorat-recherche",
        "name": "Voie Universitaire & Recherche Académique",
        "duration": "Bac +8 (Doctorat) à Bac +10 (HDR)",
        "icon": "🔬",
        "description": "Filière d'excellence pour l'enseignement supérieur : Licence, Master de Recherche, Thèse de Doctorat avec monitorat ou contrat doctoral ATER, qualification CNU (Conseil National des Universités) et recrutement comme Maître de conférences ou Professeur des Universités.",
        "steps": [
            "Licence et Master 2 à finalité recherche dans la discipline choisie (5 ans)",
            "Thèse de doctorat avec travaux de recherche et charges d'enseignement ATER (3 à 4 ans)",
            "Soutenance de thèse, obtention du titre de Docteur et qualification aux fonctions d'enseignant-chercheur",
            "Recrutement par concours sur profil au sein d'une université ou d'une grande école"
        ]
    },
    {
        "id": "voie-formation-professionnelle-adultes",
        "name": "Voie Formation Professionnelle & Métiers de l'EdTech",
        "duration": "Bac +2 à Bac +5 (Titres professionnels & Masters spécialisés)",
        "icon": "💼",
        "description": "Accès direct au secteur de la formation continue et des technologies de l'éducation : Titre professionnel de Formateur Professionnel d'Adultes (FPA, Bac+2/+3), Masters en Ingénierie Pédagogique Multimodale et Digital Learning.",
        "steps": [
            "Expérience professionnelle métier de 3 à 5 ans dans un secteur d'activité",
            "Formation certifiante au Titre Professionnel FPA (Formateur Professionnel d'Adultes) ou Master EdTech",
            "Conception de déroulés pédagogiques, maîtrise des plateformes LMS et animation de groupes d'adultes",
            "Intervention en organismes de formation, CFA, cabinets de conseil ou directions RH en entreprise"
        ]
    }
];

    const JOBS = [
    {
        "id": "professeur-des-ecoles",
        "slug": "professeur-des-ecoles",
        "title": "Professeur des Écoles",
        "aliases": [
            "Professeur des ecoles",
            "Professeur des écoles",
            "Enseignant du premier degré",
            "Instituteur / Institutrice",
            "Maître / Maîtresse d'école",
            "Professeur des écoles stagiaire / titulaire"
        ],
        "icon": "👨‍🏫",
        "image": "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "education-formation",
            "lettres-langues-sciences-humaines",
            "sante-soins-paramedical"
        ],
        "domain": "Enseignement Primaire & Petite Enfance",
        "domainId": "enseignement-primaire",
        "subdomain": "École maternelle & École élémentaire (CP au CM2)",
        "sectors": [
            "Éducation Nationale (Premier degré public & privé sous contrat)",
            "Établissements scolaires français à l'étranger (AEFE)",
            "Écoles bilingues et internationales"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/enseignement/professeur-des-ecoles-690",
        "studyramaSource": true,
        "isEmerging": false,
        "level": "Bac +5 (Master MEEF Premier degré + Concours CRPE en France / FASTEF au Sénégal)",
        "salary": "🇫🇷 France : 1 400 € net/mois en stage, 1 800 € à 2 100 € net/mois en début de carrière, jusqu'à 3 200 € net/mois en fin de carrière (Source : Studyrama / Grilles Éducation Nationale) • 🇸🇳 Sénégal : 180 000 à 380 000 FCFA net/mois selon l'échelon et indemnités (Corps des Instituteurs / Fonction Publique)",
        "salaryDetails": {
            "france": {
                "starter": "1 800 € net/mois (1 400 € en 1ère année stage)",
                "experienced": "2 400 € net/mois",
                "senior": "3 200 € net/mois",
                "source": "Studyrama / Ministère de l'Éducation Nationale (France)"
            },
            "senegal": {
                "starter": "180 000 FCFA net/mois",
                "experienced": "270 000 FCFA net/mois",
                "senior": "380 000 FCFA net/mois",
                "source": "Grille de la Fonction Publique Sénégalaise / Ministère de l'Éducation Nationale du Sénégal"
            }
        },
        "targetAudience": "Enfants de 2 à 11 ans (de la toute petite section de maternelle au CM2)",
        "workEnvironment": "Écoles maternelles et élémentaires, classes uniques en milieu rural, groupes scolaires urbains",
        "summary": "Polyvalent par excellence, le professeur des écoles accompagne les enfants de 2 à 11 ans dans leurs premiers apprentissages fondamentaux : lire, écrire, compter, s'exprimer, vivre ensemble et découvrir le monde avec curiosité et méthode.",
        "missions": [
            "Enseigner l'ensemble des matières fondamentales : français, mathématiques, histoire-géographie, sciences et technologie, éducation civique, arts plastiques, musique et EPS.",
            "Concevoir des progressions pédagogiques adaptées au rythme et au niveau de développement de chaque élève.",
            "Repérer précocement les difficultés d'apprentissage, les troubles dys ou les situations de handicap et mettre en œuvre la différenciation pédagogique.",
            "Assurer la relation éducative avec les parents et collaborer avec les équipes du RASED, psychologues scolaires et ATSEM."
        ],
        "activities": [
            "Préparation minutieuse des séances de classe, fiches d'exercices et matériel didactique.",
            "Animation quotidienne des séquences pédagogiques, alternant temps collectifs, travail en ateliers et exercices individuels.",
            "Évaluation formative et sommative des acquisitions des élèves et renseignement du livret scolaire.",
            "Surveillance des récréations, participation aux conseils de maîtres, conseils d'école et réunions de suivi de scolarisation (ESS)."
        ],
        "specialties": [
            "Polyvalence premier degré",
            "Maternelle & Petite enfance",
            "Enseignement spécialisé (ASH / RASED / ULIS)",
            "Écoles bilingues & Langues régionales"
        ],
        "skills": {
            "hard": [
                "Didactique des fondamentaux (lecture, écriture, numération)",
                "Programmes officiels du premier degré (cycles 1, 2 et 3)",
                "Différenciation pédagogique & adaptation aux troubles d'apprentissage",
                "Maîtrise des outils numériques éducatifs pour l'école primaire"
            ],
            "soft": [
                "Patience infinie et écoute bienveillante",
                "Capacité d'adaptation et réactivité face aux imprévus",
                "Autorité naturelle et gestion calme du groupe classe",
                "Excellente communication avec les enfants et leurs familles"
            ],
            "pedagogie": [
                "Construire des séquences didactiques structurées",
                "Expliquer simplement des concepts abstraits",
                "Adapter son rythme au profil de chaque enfant"
            ],
            "communication": [
                "S'exprimer avec clarté et bienveillance",
                "Conduire des entretiens constructifs avec les parents",
                "Collaborer étroitement avec les collègues et partenaires médico-sociaux"
            ],
            "organisation": [
                "Planifier rigoureusement l'emploi du temps de la semaine et de l'année",
                "Gérer le matériel pédagogique et l'agencement de la classe",
                "Tenir à jour le registre d'appel et le livret de compétences"
            ],
            "numerique": [
                "Utiliser le tableau blanc interactif (TBI/VPI)",
                "Exploiter les logiciels éducatifs et applications de lecture",
                "Renseigner les plateformes numériques de suivi scolaire"
            ],
            "technical": [
                "Didactique des fondamentaux (lecture, écriture, numération)",
                "Programmes officiels du premier degré (cycles 1, 2 et 3)",
                "Différenciation pédagogique & adaptation aux troubles d'apprentissage",
                "Maîtrise des outils numériques éducatifs pour l'école primaire"
            ],
            "human": [
                "Patience infinie et écoute bienveillante",
                "Capacité d'adaptation et réactivité face aux imprévus",
                "Autorité naturelle et gestion calme du groupe classe",
                "Excellente communication avec les enfants et leurs familles"
            ]
        },
        "qualities": [
            "Patience et empathie",
            "Créativité pédagogique",
            "Sens aigu de l'écoute",
            "Rigueur et organisation",
            "Énergie et dynamisme"
        ],
        "studies": [
            "🇫🇷 France : Bac +5. Licence (générale ou Sciences de l'Éducation) + Master MEEF 1er degré + Réussite au Concours de Recrutement de Professeurs des Écoles (CRPE).",
            "🇸🇳 Sénégal : Bac +2 à Bac +5. Baccalauréat puis entrée sur concours dans un Centre Régional de Formation des Personnels de l'Éducation (CRFPE) pour l'obtention du CEAP puis du CAP, ou Licence + Master à la FASTEF (Faculté des Sciences et Technologies de l'Éducation et de la Formation - UCAD)."
        ],
        "evolution": [
            "Directeur / Directrice d'école primaire",
            "Maître formateur (CAFIPEMF) accueillant et formant les enseignants stagiaires",
            "Conseiller pédagogique de circonscription (CPC)",
            "Enseignant spécialisé en RASED, ULIS école ou IME",
            "Inspecteur de l'Éducation Nationale (IEN)"
        ],
        "dailySchedule": [
            {
                "time": "08:00",
                "activity": "Arrivée à l'école, agencement de la classe, préparation des ateliers autonomes et impression des supports."
            },
            {
                "time": "08:30",
                "activity": "Accueil bienveillant des élèves, rituels du matin, date et consignes de la journée."
            },
            {
                "time": "09:00",
                "activity": "Séquence d'apprentissage fondamental en français (lecture phonologique et étude de texte guidée)."
            },
            {
                "time": "10:15",
                "activity": "Récréation surveillée et échange rapide entre collègues sur la vie de l'école."
            },
            {
                "time": "10:35",
                "activity": "Séquence de mathématiques : manipulation d'objets, résolution de problèmes en petits groupes."
            },
            {
                "time": "12:00",
                "activity": "Pause méridienne, repas, préparation des ateliers d'arts plastiques et correction de cahiers."
            },
            {
                "time": "13:45",
                "activity": "Retour au calme, quart d'heure de lecture partagée et séance de découverte du monde (sciences du vivant)."
            },
            {
                "time": "15:00",
                "activity": "Séance d'EPS dans la cour ou au gymnase : motricité et jeux collectifs coopératifs."
            },
            {
                "time": "16:30",
                "activity": "Sortie des classes, transmission aux parents et animation d'une réunion de suivi pour un élève à besoins éducatifs particuliers."
            },
            {
                "time": "17:30",
                "activity": "Corrections approfondies, mise à jour du cahier journal du lendemain et fin de journée."
            }
        ],
        "quiz": [
            {
                "question": "Quel concours officiel permet de devenir professeur des écoles titulaire en France ?",
                "options": [
                    "Le CAPES",
                    "Le CRPE (Concours de Recrutement de Professeurs des Écoles)",
                    "L'Agrégation",
                    "Le concours de l'ENA"
                ],
                "answer": 1,
                "explanation": "Le CRPE est le concours spécifique de recrutement des enseignants du premier degré en France (maternelle et élémentaire)."
            },
            {
                "question": "Quelle tranche d'âge d'élèves est confiée au professeur des écoles ?",
                "options": [
                    "De 2 à 11 ans",
                    "De 11 à 15 ans",
                    "De 15 à 18 ans",
                    "Les adultes uniquement"
                ],
                "answer": 0,
                "explanation": "Le professeur des écoles enseigne aux enfants de la toute petite section de maternelle jusqu'au CM2 (2 à 11 ans)."
            }
        ],
        "shortDescription": "Polyvalent par excellence, le professeur des écoles accompagne les enfants de 2 à 11 ans dans leurs premiers apprentissages fondamentaux : lire, écrire, compter, s'exprimer, vivre ensemble et découvrir le monde avec curiosité et méthode.",
        "longDescription": "Polyvalent par excellence, le professeur des écoles accompagne les enfants de 2 à 11 ans dans leurs premiers apprentissages fondamentaux : lire, écrire, compter, s'exprimer, vivre ensemble et découvrir le monde avec curiosité et méthode. Enseigner l'ensemble des matières fondamentales : français, mathématiques, histoire-géographie, sciences et technologie, éducation civique, arts plastiques, musique et EPS. Concevoir des progressions pédagogiques adaptées au rythme et au niveau de développement de chaque élève. Repérer précocement les difficultés d'apprentissage, les troubles dys ou les situations de handicap et mettre en œuvre la différenciation pédagogique. Assurer la relation éducative avec les parents et collaborer avec les équipes du RASED, psychologues scolaires et ATSEM.",
        "description": "Polyvalent par excellence, le professeur des écoles accompagne les enfants de 2 à 11 ans dans leurs premiers apprentissages fondamentaux : lire, écrire, compter, s'exprimer, vivre ensemble et découvrir le monde avec curiosité et méthode. Enseigner l'ensemble des matières fondamentales : français, mathématiques, histoire-géographie, sciences et technologie, éducation civique, arts plastiques, musique et EPS. Concevoir des progressions pédagogiques adaptées au rythme et au niveau de développement de chaque élève. Repérer précocement les difficultés d'apprentissage, les troubles dys ou les situations de handicap et mettre en œuvre la différenciation pédagogique. Assurer la relation éducative avec les parents et collaborer avec les équipes du RASED, psychologues scolaires et ATSEM.",
        "studyLevel": "Bac +5 (Master MEEF Premier degré + Concours CRPE en France / FASTEF au Sénégal)",
        "hard": [
            "Didactique des fondamentaux (lecture, écriture, numération)",
            "Programmes officiels du premier degré (cycles 1, 2 et 3)",
            "Différenciation pédagogique & adaptation aux troubles d'apprentissage",
            "Maîtrise des outils numériques éducatifs pour l'école primaire"
        ],
        "soft": [
            "Patience infinie et écoute bienveillante",
            "Capacité d'adaptation et réactivité face aux imprévus",
            "Autorité naturelle et gestion calme du groupe classe",
            "Excellente communication avec les enfants et leurs familles"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "activity": "Arrivée à l'école, agencement de la classe, préparation des ateliers autonomes et impression des supports."
            },
            {
                "time": "08:30",
                "activity": "Accueil bienveillant des élèves, rituels du matin, date et consignes de la journée."
            },
            {
                "time": "09:00",
                "activity": "Séquence d'apprentissage fondamental en français (lecture phonologique et étude de texte guidée)."
            },
            {
                "time": "10:15",
                "activity": "Récréation surveillée et échange rapide entre collègues sur la vie de l'école."
            },
            {
                "time": "10:35",
                "activity": "Séquence de mathématiques : manipulation d'objets, résolution de problèmes en petits groupes."
            },
            {
                "time": "12:00",
                "activity": "Pause méridienne, repas, préparation des ateliers d'arts plastiques et correction de cahiers."
            },
            {
                "time": "13:45",
                "activity": "Retour au calme, quart d'heure de lecture partagée et séance de découverte du monde (sciences du vivant)."
            },
            {
                "time": "15:00",
                "activity": "Séance d'EPS dans la cour ou au gymnase : motricité et jeux collectifs coopératifs."
            },
            {
                "time": "16:30",
                "activity": "Sortie des classes, transmission aux parents et animation d'une réunion de suivi pour un élève à besoins éducatifs particuliers."
            },
            {
                "time": "17:30",
                "activity": "Corrections approfondies, mise à jour du cahier journal du lendemain et fin de journée."
            }
        ],
        "daily": {
            "morning": "Arrivée à l'école, agencement de la classe, préparation des ateliers autonomes et impression des supports. • Accueil bienveillant des élèves, rituels du matin, date et consignes de la journée. • Séquence d'apprentissage fondamental en français (lecture phonologique et étude de texte guidée). • Récréation surveillée et échange rapide entre collègues sur la vie de l'école. • Séquence de mathématiques : manipulation d'objets, résolution de problèmes en petits groupes. • Pause méridienne, repas, préparation des ateliers d'arts plastiques et correction de cahiers.",
            "afternoon": "Retour au calme, quart d'heure de lecture partagée et séance de découverte du monde (sciences du vivant). • Séance d'EPS dans la cour ou au gymnase : motricité et jeux collectifs coopératifs. • Sortie des classes, transmission aux parents et animation d'une réunion de suivi pour un élève à besoins éducatifs particuliers. • Corrections approfondies, mise à jour du cahier journal du lendemain et fin de journée.",
            "challenges": "Régulation des dynamiques de groupe, transmission bienveillante et exigence éducative."
        },
        "saviezVous": {
            "fait": "En France, les professeurs des écoles enseignent en moyenne 24 heures hebdomadaires en présence d'élèves, complétées par 108 heures annuelles obligatoires consacrées aux activités pédagogiques complémentaires (APC), réunions d'équipe et relations avec les parents.",
            "chiffre": "Plus de 380 000 professeurs des écoles exercent en France dans environ 48 000 écoles primaires."
        }
    },
    {
        "id": "professeur-college-lycee",
        "slug": "professeur-college-lycee",
        "title": "Professeur de Collège et Lycée (Général & Technologique)",
        "aliases": [
            "Enseignant du second degré",
            "Professeur certifié (CAPES)",
            "Professeur agrégé",
            "Enseignant de discipline secondaire",
            "Professeur de maths",
            "Professeur de mathématiques",
            "Enseignant de mathématiques",
            "Enseigner les maths"
        ],
        "icon": "📚",
        "image": "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "education-formation",
            "lettres-langues-sciences-humaines",
            "biologie-chimie",
            "sciences-terre-geosciences",
            "numerique-ia"
        ],
        "domain": "Enseignement Secondaire (Général, Technologique & Professionnel)",
        "domainId": "enseignement-secondaire",
        "subdomain": "Collège & Lycée général et technologique",
        "sectors": [
            "Éducation Nationale (Second degré public et privé sous contrat)",
            "Lycées français de l'étranger (AEFE)",
            "Instituts privés et cours préparatoires"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/enseignement/professeur-de-college-et-lycee-691",
        "studyramaSource": true,
        "isEmerging": false,
        "level": "Bac +5 (Master MEEF Second degré / Master disciplinaire + Concours CAPES ou Agrégation)",
        "salary": "🇫🇷 France : 1 400 € net/mois en stage, 1 900 € à 2 300 € net/mois certifié débutant (jusqu'à 3 600 € net en fin de carrière) ; 2 400 € à 4 500 € pour un agrégé (Source : Studyrama / Grilles Éducation Nationale) • 🇸🇳 Sénégal : 230 000 à 490 000 FCFA net/mois (Corps des PCEM et PEM - Professeurs d'Enseignement Moyen et Secondaire)",
        "salaryDetails": {
            "france": {
                "starter": "1 900 € net/mois (Certifié) / 2 400 € (Agrégé)",
                "experienced": "2 700 € net/mois",
                "senior": "3 600 € net/mois (4 500 € Agrégé hors classe)",
                "source": "Studyrama / Ministère de l'Éducation Nationale (France)"
            },
            "senegal": {
                "starter": "230 000 FCFA net/mois (PCEM)",
                "experienced": "340 000 FCFA net/mois (PEM)",
                "senior": "490 000 FCFA net/mois (PES principal)",
                "source": "Grille de la Fonction Publique Sénégalaise / Ministère de l'Éducation Nationale du Sénégal"
            }
        },
        "targetAudience": "Adolescents et jeunes adultes de 11 à 18 ans (de la classe de 6ème aux classes préparatoires / BTS)",
        "workEnvironment": "Collèges publics ou privés, lycées d'enseignement général et technologique, cités scolaires",
        "summary": "Expert de sa matière d'enseignement, le professeur de collège et lycée transmet des savoirs approfondis aux adolescents, développe leur esprit critique et les prépare aux examens du Brevet et du Baccalauréat.",
        "missions": [
            "Transmettre les savoirs, méthodes de travail et compétences du programme officiel dans sa discipline d'expertise.",
            "Concevoir des cours magistraux, travaux dirigés, activités pratiques et projets interdisciplinaires.",
            "Évaluer régulièrement les progrès des élèves par des devoirs sur table, contrôles continus et épreuves orales.",
            "Exercer la mission de professeur principal : coordonner l'équipe pédagogique et accompagner les élèves dans leur projet d'orientation."
        ],
        "activities": [
            "Élaboration des cours, fiches de synthèse, exercices d'application et grilles d'évaluation critères.",
            "Enseignement en classe entière et en demi-groupes (travaux pratiques de sciences, langues vivantes).",
            "Correction rigoureuse et annotée des devoirs et copies d'examens blancs.",
            "Participation aux conseils de classe trimestriels, réunions parents-professeurs et conseils pédagogiques."
        ],
        "specialties": [
            "Mathématiques",
            "Physique-Chimie",
            "Sciences de la Vie et de la Terre (SVT)",
            "Lettres Modernes / Lettres Classiques",
            "Histoire-Géographie & Géopolitique",
            "Philosophie",
            "Langues vivantes (Anglais, Espagnol, Allemand, Arabe)",
            "Sciences Économiques et Sociales (SES)",
            "Numérique et Sciences Informatiques (NSI)",
            "Sciences Industrielles de l'Ingénieur (SII)"
        ],
        "skills": {
            "hard": [
                "Maîtrise académique de haut niveau dans la discipline enseignée",
                "Didactique disciplinaire et pédagogie différenciée pour adolescents",
                "Exigences et barèmes des épreuves du Brevet et du Baccalauréat",
                "Utilisation des environnements numériques de travail (ENT, Pronote)"
            ],
            "soft": [
                "Aisance oratoire et passion communicative pour sa matière",
                "Sens de l'autorité juste et gestion des dynamiques adolescentes",
                "Écoute, empathie et encouragement de l'effort individuel",
                "Capacité de travail en équipe interdisciplinaire"
            ],
            "pedagogie": [
                "Rendre attrayante et accessible une matière complexe",
                "Varier les supports : textes, schémas, vidéos, expériences",
                "Donner du sens aux apprentissages par des applications concrètes"
            ],
            "communication": [
                "Capter et maintenir l'attention d'une classe de 30 à 35 élèves",
                "Restituer clairement les bilans d'orientation aux familles",
                "Réguler les conflits et tensions éventuelles avec tact"
            ],
            "organisation": [
                "Planifier le bouclage du programme dans le respect du calendrier scolaire",
                "Gérer les plannings de devoirs et respecter les délais de correction",
                "Tenir scrupuleusement à jour le cahier de textes numérique"
            ],
            "numerique": [
                "Maîtriser les logiciels disciplinaires (GeoGebra, éditeurs Python, simulateurs)",
                "Administrer les espaces de cours sur les plateformes ENT",
                "Animer des séances en salle informatique ou avec tablettes numériques"
            ],
            "technical": [
                "Maîtrise académique de haut niveau dans la discipline enseignée",
                "Didactique disciplinaire et pédagogie différenciée pour adolescents",
                "Exigences et barèmes des épreuves du Brevet et du Baccalauréat",
                "Utilisation des environnements numériques de travail (ENT, Pronote)"
            ],
            "human": [
                "Aisance oratoire et passion communicative pour sa matière",
                "Sens de l'autorité juste et gestion des dynamiques adolescentes",
                "Écoute, empathie et encouragement de l'effort individuel",
                "Capacité de travail en équipe interdisciplinaire"
            ]
        },
        "qualities": [
            "Rigueur intellectuelle",
            "Charisme et dynamisme pédagogique",
            "Patience et équité",
            "Capacité d'écoute",
            "Passion pour sa discipline"
        ],
        "studies": [
            "🇫🇷 France : Bac +5. Licence disciplinaire (3 ans) + Master MEEF 2nd degré ou Master recherche (2 ans) + Réussite au CAPES (certifié) ou au concours de l'Agrégation.",
            "🇸🇳 Sénégal : Bac +3 à Bac +5. Licence ou Master disciplinaire (UCAD, UGB, etc.) + Concours d'entrée et formation à la FASTEF (Faculté des Sciences et Technologies de l'Éducation et de la Formation - Dakar) pour l'obtention du CAEM (Collèges) ou du CAES (Lycées)."
        ],
        "evolution": [
            "Professeur agrégé (par concours interne)",
            "Enseignant en classe préparatoire aux grandes écoles (CPGE) ou en section de technicien supérieur (STS/BTS)",
            "Formateur académique d'enseignants stagiaires",
            "Personnel de direction : Principal de collège ou Proviseur de lycée (sur concours)",
            "Inspecteur d'académie - Inspecteur pédagogique régional (IA-IPR)"
        ],
        "dailySchedule": [
            {
                "time": "07:45",
                "activity": "Arrivée en salle des professeurs, consultation des messages de la direction et préparation des polycopiés."
            },
            {
                "time": "08:15",
                "activity": "Cours de Mathématiques avec une classe de 3ème : résolution de théorèmes et travail sur logiciel dynamique."
            },
            {
                "time": "10:10",
                "activity": "Permanence pédagogique : accueil individualisé de deux élèves en difficulté méthodologique."
            },
            {
                "time": "10:30",
                "activity": "Cours magistral et analyse de documents en classe de 1ère générale."
            },
            {
                "time": "12:15",
                "activity": "Déjeuner au réfectoire et réunion rapide de concertation disciplinaire entre enseignants de sciences."
            },
            {
                "time": "13:30",
                "activity": "Séance de travaux pratiques en demi-groupe au laboratoire de physique-chimie."
            },
            {
                "time": "15:30",
                "activity": "Heure de vie de classe (mission de professeur principal) dédiée aux vœux d'orientation et à la préparation de Parcoursup."
            },
            {
                "time": "17:00",
                "activity": "Conseil de classe trimestriel avec les délégués élèves et les représentants de parents d'élèves."
            },
            {
                "time": "18:45",
                "activity": "Retour au domicile, préparation des interrogations écrites du lendemain et fin de journée."
            }
        ],
        "quiz": [
            {
                "question": "Quel concours d'État permet d'obtenir le statut de professeur certifié du second degré en France ?",
                "options": [
                    "Le CRPE",
                    "Le CAPES (Certificat d'Aptitude au Professorat de l'Enseignement du Second Degré)",
                    "L'internat en médecine",
                    "Le barreau"
                ],
                "answer": 1,
                "explanation": "Le CAPES est le concours officiel qui confère le titre de professeur certifié pour enseigner en collège et lycée."
            },
            {
                "question": "Un professeur certifié enseigne-t-il l'ensemble des matières ou une discipline spécialisée ?",
                "options": [
                    "Toutes les matières comme à l'école primaire",
                    "Une discipline spécialisée (ou un bloc disciplinaire précis comme Histoire-Géo ou Physique-Chimie)",
                    "Uniquement le sport",
                    "Uniquement les matières artistiques"
                ],
                "answer": 1,
                "explanation": "Au collège et au lycée, les enseignants sont recrutés par discipline d'expertise (Maths, Français, Anglais, Histoire, etc.)."
            }
        ],
        "shortDescription": "Expert de sa matière d'enseignement, le professeur de collège et lycée transmet des savoirs approfondis aux adolescents, développe leur esprit critique et les prépare aux examens du Brevet et du Baccalauréat.",
        "longDescription": "Expert de sa matière d'enseignement, le professeur de collège et lycée transmet des savoirs approfondis aux adolescents, développe leur esprit critique et les prépare aux examens du Brevet et du Baccalauréat. Transmettre les savoirs, méthodes de travail et compétences du programme officiel dans sa discipline d'expertise. Concevoir des cours magistraux, travaux dirigés, activités pratiques et projets interdisciplinaires. Évaluer régulièrement les progrès des élèves par des devoirs sur table, contrôles continus et épreuves orales. Exercer la mission de professeur principal : coordonner l'équipe pédagogique et accompagner les élèves dans leur projet d'orientation.",
        "description": "Expert de sa matière d'enseignement, le professeur de collège et lycée transmet des savoirs approfondis aux adolescents, développe leur esprit critique et les prépare aux examens du Brevet et du Baccalauréat. Transmettre les savoirs, méthodes de travail et compétences du programme officiel dans sa discipline d'expertise. Concevoir des cours magistraux, travaux dirigés, activités pratiques et projets interdisciplinaires. Évaluer régulièrement les progrès des élèves par des devoirs sur table, contrôles continus et épreuves orales. Exercer la mission de professeur principal : coordonner l'équipe pédagogique et accompagner les élèves dans leur projet d'orientation.",
        "studyLevel": "Bac +5 (Master MEEF Second degré / Master disciplinaire + Concours CAPES ou Agrégation)",
        "hard": [
            "Maîtrise académique de haut niveau dans la discipline enseignée",
            "Didactique disciplinaire et pédagogie différenciée pour adolescents",
            "Exigences et barèmes des épreuves du Brevet et du Baccalauréat",
            "Utilisation des environnements numériques de travail (ENT, Pronote)"
        ],
        "soft": [
            "Aisance oratoire et passion communicative pour sa matière",
            "Sens de l'autorité juste et gestion des dynamiques adolescentes",
            "Écoute, empathie et encouragement de l'effort individuel",
            "Capacité de travail en équipe interdisciplinaire"
        ],
        "typicalDay": [
            {
                "time": "07:45",
                "activity": "Arrivée en salle des professeurs, consultation des messages de la direction et préparation des polycopiés."
            },
            {
                "time": "08:15",
                "activity": "Cours de Mathématiques avec une classe de 3ème : résolution de théorèmes et travail sur logiciel dynamique."
            },
            {
                "time": "10:10",
                "activity": "Permanence pédagogique : accueil individualisé de deux élèves en difficulté méthodologique."
            },
            {
                "time": "10:30",
                "activity": "Cours magistral et analyse de documents en classe de 1ère générale."
            },
            {
                "time": "12:15",
                "activity": "Déjeuner au réfectoire et réunion rapide de concertation disciplinaire entre enseignants de sciences."
            },
            {
                "time": "13:30",
                "activity": "Séance de travaux pratiques en demi-groupe au laboratoire de physique-chimie."
            },
            {
                "time": "15:30",
                "activity": "Heure de vie de classe (mission de professeur principal) dédiée aux vœux d'orientation et à la préparation de Parcoursup."
            },
            {
                "time": "17:00",
                "activity": "Conseil de classe trimestriel avec les délégués élèves et les représentants de parents d'élèves."
            },
            {
                "time": "18:45",
                "activity": "Retour au domicile, préparation des interrogations écrites du lendemain et fin de journée."
            }
        ],
        "daily": {
            "morning": "Arrivée en salle des professeurs, consultation des messages de la direction et préparation des polycopiés. • Cours de Mathématiques avec une classe de 3ème : résolution de théorèmes et travail sur logiciel dynamique. • Permanence pédagogique : accueil individualisé de deux élèves en difficulté méthodologique. • Cours magistral et analyse de documents en classe de 1ère générale. • Déjeuner au réfectoire et réunion rapide de concertation disciplinaire entre enseignants de sciences.",
            "afternoon": "Séance de travaux pratiques en demi-groupe au laboratoire de physique-chimie. • Heure de vie de classe (mission de professeur principal) dédiée aux vœux d'orientation et à la préparation de Parcoursup. • Conseil de classe trimestriel avec les délégués élèves et les représentants de parents d'élèves. • Retour au domicile, préparation des interrogations écrites du lendemain et fin de journée.",
            "challenges": "Régulation des dynamiques de groupe, transmission bienveillante et exigence éducative."
        },
        "saviezVous": {
            "fait": "Le corps des professeurs certifiés (CAPES) effectue un service hebdomadaire de 18 heures d'enseignement, tandis que les professeurs agrégés effectuent 15 heures, complétées par les temps de préparation, de correction et de réunions.",
            "chiffre": "Le Ministère de l'Éducation Nationale est l'un des plus grands employeurs d'Europe avec près de 850 000 enseignants au total."
        }
    },
    {
        "id": "professeur-lycee-professionnel-plp",
        "slug": "professeur-lycee-professionnel-plp",
        "title": "Professeur de Lycée Professionnel (PLP)",
        "aliases": [
            "Enseignant en lycée pro",
            "Professeur d'enseignement professionnel et technique",
            "Formateur CAP / Bac Pro",
            "PLP certifié"
        ],
        "icon": "⚙️",
        "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "education-formation",
            "industrie-mecanique",
            "btp-architecture",
            "energie-renouvelable",
            "droit-management"
        ],
        "domain": "Enseignement Secondaire (Général, Technologique & Professionnel)",
        "domainId": "enseignement-secondaire",
        "subdomain": "Lycée professionnel & Enseignement technique",
        "sectors": [
            "Lycées professionnels de l'Éducation Nationale",
            "Centres de Formation d'Apprentis (CFA)",
            "Établissements régionaux d'enseignement adapté (EREA)"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/enseignement",
        "studyramaSource": true,
        "isEmerging": false,
        "level": "Bac +3 à Bac +5 (Master MEEF ou expérience professionnelle reconnue + Concours CAPLP)",
        "salary": "🇫🇷 France : 1 900 € à 3 500 € net/mois selon l'échelon et primes d'atelier (Grille PLP de l'Éducation Nationale) • 🇸🇳 Sénégal : 220 000 à 460 000 FCFA net/mois (Corps des professeurs d'enseignement technique et professionnel)",
        "salaryDetails": {
            "france": {
                "starter": "1 900 € net/mois",
                "experienced": "2 600 € net/mois",
                "senior": "3 500 € net/mois",
                "source": "Studyrama / Ministère de l'Éducation Nationale (France)"
            },
            "senegal": {
                "starter": "220 000 FCFA net/mois",
                "experienced": "320 000 FCFA net/mois",
                "senior": "460 000 FCFA net/mois",
                "source": "Ministère de la Formation Professionnelle, de l'Apprentissage et de l'Artisanat du Sénégal"
            }
        },
        "targetAudience": "Élèves de 14 à 20 ans préparant un CAP, un Baccalauréat Professionnel ou un brevet des métiers d'art",
        "workEnvironment": "Ateliers techniques de lycées professionnels, salles de cours, plateaux techniques industriels ou tertiaires",
        "summary": "Acteur clé de l'insertion professionnelle des jeunes, le professeur de lycée professionnel enseigne les gestes métiers, la technologie appliquée ou les matières générales bivalentes (ex: Lettres-Histoire, Maths-Sciences) en lien étroit avec les réalités de l'entreprise.",
        "missions": [
            "Enseigner les savoir-faire techniques, règles de l'art, normes de sécurité et gestes professionnels en atelier.",
            "Dispenser les cours théoriques technologiques ou généraux appliqués aux filières professionnelles.",
            "Accompagner les élèves dans la recherche de stages et effectuer les visites de suivi en entreprise (PFMP).",
            "Développer l'autonomie, la fierté du métier et la confiance en soi des élèves souvent en quête de repères."
        ],
        "activities": [
            "Animation de séances pratiques sur machines-outils, chantiers pédagogiques ou simulateurs informatisés.",
            "Supervision stricte du port des équipements de protection individuelle (EPI) et de la sécurité en atelier.",
            "Visites d'entreprises pour évaluer les compétences professionnelles acquises lors des périodes de stage.",
            "Préparation et organisation des épreuves d'évaluation en cours de formation (CCF) pour le CAP et le Bac Pro."
        ],
        "specialties": [
            "Génie mécanique & Usinage",
            "Électrotechnique & Énergie",
            "Bâtiment & Gros œuvre / Finitions",
            "Maintenance des véhicules",
            "Métiers de la relation client & Commerce",
            "Gestion-Administration",
            "Hôtellerie-Restauration",
            "Bivalence générale : Lettres-Histoire ou Maths-Sciences"
        ],
        "skills": {
            "hard": [
                "Expertise pratique et technique éprouvée dans le métier enseigné",
                "Connaissance approfondie des normes de sécurité et de santé au travail",
                "Pédagogie de projet et évaluation par compétences (référentiels RNCP)",
                "Modalités du contrôle en cours de formation (CCF)"
            ],
            "soft": [
                "Bienveillance et capacité à redonner le goût des études",
                "Fermeté rassurante sur les questions de sécurité",
                "Sens pratique et esprit concret",
                "Excellente écoute et relationnel de proximité"
            ],
            "pedagogie": [
                "Décomposer un geste technique complexe en étapes assimilables",
                "Articuler théorie technologique et mise en situation réelle",
                "Faire de l'erreur une étape constructive d'apprentissage"
            ],
            "communication": [
                "Dialoguer efficacement avec les maîtres de stage et tuteurs d'entreprise",
                "Rassurer les familles sur les débouchés professionnels",
                "Favoriser l'esprit d'équipe et la solidarité d'atelier"
            ],
            "organisation": [
                "Gérer l'approvisionnement en matières premières et outillage d'atelier",
                "Planifier les calendriers de stages et de visites de suivi",
                "Assurer la maintenance de premier niveau des équipements pédagogiques"
            ],
            "numerique": [
                "Utiliser les logiciels de CAO/DAO (SolidWorks, AutoCAD) et progiciels de gestion",
                "Exploiter les tableaux de bord numériques de suivi des compétences",
                "Piloter les machines à commande numérique (CNC) pédagogiques"
            ],
            "technical": [
                "Expertise pratique et technique éprouvée dans le métier enseigné",
                "Connaissance approfondie des normes de sécurité et de santé au travail",
                "Pédagogie de projet et évaluation par compétences (référentiels RNCP)",
                "Modalités du contrôle en cours de formation (CCF)"
            ],
            "human": [
                "Bienveillance et capacité à redonner le goût des études",
                "Fermeté rassurante sur les questions de sécurité",
                "Sens pratique et esprit concret",
                "Excellente écoute et relationnel de proximité"
            ]
        },
        "qualities": [
            "Pragmatisme et habileté manuelle",
            "Pédagogie de l'encouragement",
            "Rigueur sécuritaire absolue",
            "Sens de l'écoute",
            "Disponibilité"
        ],
        "studies": [
            "🇫🇷 France : Bac +3 à Bac +5 ou Bac + expérience professionnelle de plusieurs années en entreprise (selon les sections professionnelles) + Réussite au Concours CAPLP (Certificat d'Aptitude au Professorat de Lycée Professionnel).",
            "🇸🇳 Sénégal : Bac + Licence professionnelle ou Brevet de Technicien Supérieur (BTS) + formation à l'ENSET (École Normale Supérieure d'Enseignement Technique et Professionnel - Dakar) pour l'obtention du CAPET/CAPLP."
        ],
        "evolution": [
            "Directeur Délégué aux Formations Professionnelles et Technologiques (DDFPT, ex-chef de travaux)",
            "Personnel de direction de lycée professionnel (sur concours)",
            "Inspecteur de l'Éducation Nationale de l'enseignement technique (IEN-ET)"
        ],
        "dailySchedule": [
            {
                "time": "08:00",
                "activity": "Ouverture de l'atelier technique, vérification des organes de sécurité des machines et mise à disposition des matériaux."
            },
            {
                "time": "08:30",
                "activity": "Briefing de sécurité et revue des objectifs professionnels de la journée avec la classe de 1ère Bac Pro."
            },
            {
                "time": "09:00",
                "activity": "Encadrement individuel des élèves sur le plateau technique : réglage de postes et contrôle dimensionnel."
            },
            {
                "time": "12:00",
                "activity": "Rangement collectif rigoureux de l'atelier et déjeuner partagé avec l'équipe technique."
            },
            {
                "time": "13:30",
                "activity": "Déplacement en entreprise pour la visite de suivi de stage d'un élève de Terminale CAP."
            },
            {
                "time": "15:00",
                "activity": "Entretien tripartite avec le tuteur d'entreprise et l'élève, évaluation de la grille de compétences."
            },
            {
                "time": "16:30",
                "activity": "Retour au lycée, mise à jour des dossiers CCF et préparation du cours de technologie appliquée du lendemain."
            }
        ],
        "quiz": [
            {
                "question": "Quel concours permet de devenir enseignant en lycée professionnel en France ?",
                "options": [
                    "Le CAPLP (Certificat d'Aptitude au Professorat de Lycée Professionnel)",
                    "Le CRPE",
                    "Le concours de greffier",
                    "Le concours de commissaire"
                ],
                "answer": 0,
                "explanation": "Le CAPLP est le concours national de recrutement des professeurs de lycée professionnel en France."
            }
        ],
        "shortDescription": "Acteur clé de l'insertion professionnelle des jeunes, le professeur de lycée professionnel enseigne les gestes métiers, la technologie appliquée ou les matières générales bivalentes (ex: Lettres-Histoire, Maths-Sciences) en lien étroit avec les réalités de l'entreprise.",
        "longDescription": "Acteur clé de l'insertion professionnelle des jeunes, le professeur de lycée professionnel enseigne les gestes métiers, la technologie appliquée ou les matières générales bivalentes (ex: Lettres-Histoire, Maths-Sciences) en lien étroit avec les réalités de l'entreprise. Enseigner les savoir-faire techniques, règles de l'art, normes de sécurité et gestes professionnels en atelier. Dispenser les cours théoriques technologiques ou généraux appliqués aux filières professionnelles. Accompagner les élèves dans la recherche de stages et effectuer les visites de suivi en entreprise (PFMP). Développer l'autonomie, la fierté du métier et la confiance en soi des élèves souvent en quête de repères.",
        "description": "Acteur clé de l'insertion professionnelle des jeunes, le professeur de lycée professionnel enseigne les gestes métiers, la technologie appliquée ou les matières générales bivalentes (ex: Lettres-Histoire, Maths-Sciences) en lien étroit avec les réalités de l'entreprise. Enseigner les savoir-faire techniques, règles de l'art, normes de sécurité et gestes professionnels en atelier. Dispenser les cours théoriques technologiques ou généraux appliqués aux filières professionnelles. Accompagner les élèves dans la recherche de stages et effectuer les visites de suivi en entreprise (PFMP). Développer l'autonomie, la fierté du métier et la confiance en soi des élèves souvent en quête de repères.",
        "studyLevel": "Bac +3 à Bac +5 (Master MEEF ou expérience professionnelle reconnue + Concours CAPLP)",
        "hard": [
            "Expertise pratique et technique éprouvée dans le métier enseigné",
            "Connaissance approfondie des normes de sécurité et de santé au travail",
            "Pédagogie de projet et évaluation par compétences (référentiels RNCP)",
            "Modalités du contrôle en cours de formation (CCF)"
        ],
        "soft": [
            "Bienveillance et capacité à redonner le goût des études",
            "Fermeté rassurante sur les questions de sécurité",
            "Sens pratique et esprit concret",
            "Excellente écoute et relationnel de proximité"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "activity": "Ouverture de l'atelier technique, vérification des organes de sécurité des machines et mise à disposition des matériaux."
            },
            {
                "time": "08:30",
                "activity": "Briefing de sécurité et revue des objectifs professionnels de la journée avec la classe de 1ère Bac Pro."
            },
            {
                "time": "09:00",
                "activity": "Encadrement individuel des élèves sur le plateau technique : réglage de postes et contrôle dimensionnel."
            },
            {
                "time": "12:00",
                "activity": "Rangement collectif rigoureux de l'atelier et déjeuner partagé avec l'équipe technique."
            },
            {
                "time": "13:30",
                "activity": "Déplacement en entreprise pour la visite de suivi de stage d'un élève de Terminale CAP."
            },
            {
                "time": "15:00",
                "activity": "Entretien tripartite avec le tuteur d'entreprise et l'élève, évaluation de la grille de compétences."
            },
            {
                "time": "16:30",
                "activity": "Retour au lycée, mise à jour des dossiers CCF et préparation du cours de technologie appliquée du lendemain."
            }
        ],
        "daily": {
            "morning": "Ouverture de l'atelier technique, vérification des organes de sécurité des machines et mise à disposition des matériaux. • Briefing de sécurité et revue des objectifs professionnels de la journée avec la classe de 1ère Bac Pro. • Encadrement individuel des élèves sur le plateau technique : réglage de postes et contrôle dimensionnel. • Rangement collectif rigoureux de l'atelier et déjeuner partagé avec l'équipe technique.",
            "afternoon": "Déplacement en entreprise pour la visite de suivi de stage d'un élève de Terminale CAP. • Entretien tripartite avec le tuteur d'entreprise et l'élève, évaluation de la grille de compétences. • Retour au lycée, mise à jour des dossiers CCF et préparation du cours de technologie appliquée du lendemain.",
            "challenges": "Régulation des dynamiques de groupe, transmission bienveillante et exigence éducative."
        },
        "saviezVous": {
            "fait": "Les professeurs de lycée professionnel assurent souvent une bivalence originale : ils peuvent enseigner à la fois les Lettres et l'Histoire-Géographie, ou les Mathématiques et les Sciences Physiques appliquées à leur filière.",
            "chiffre": "Près d'un tiers des bacheliers de France préparent un baccalauréat professionnel, tremplin vers l'emploi direct ou la poursuite en BTS."
        }
    },
    {
        "id": "professeur-eps",
        "slug": "professeur-eps",
        "title": "Professeur d'Éducation Physique et Sportive (EPS)",
        "aliases": [
            "Enseignant d'EPS",
            "Professeur de sport scolaire",
            "Professeur certifié d'EPS (CAPEPS)",
            "Animateur d'association sportive (UNSS)"
        ],
        "icon": "🏃",
        "image": "https://images.unsplash.com/photo-1517649763962-0c623266ddc0?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "education-formation",
            "sante-soins-paramedical"
        ],
        "domain": "Enseignement Secondaire (Général, Technologique & Professionnel)",
        "domainId": "enseignement-secondaire",
        "subdomain": "Éducation physique et sportive (EPS)",
        "sectors": [
            "Éducation Nationale (Collèges, Lycées généraux, techniques et pro)",
            "Associations sportives scolaires (UNSS, UGSEL)",
            "Fédérations sportives universitaires"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sport/professeur-d-eps-1344",
        "studyramaSource": true,
        "isEmerging": false,
        "level": "Bac +5 (Master MEEF EPS + Concours CAPEPS ou Agrégation d'EPS)",
        "salary": "🇫🇷 France : 1 900 € à 3 600 € net/mois pour un certifié CAPEPS (jusqu'à 4 500 € pour un agrégé) (Source : Studyrama / Grilles Éducation Nationale) • 🇸🇳 Sénégal : 220 000 à 460 000 FCFA net/mois (Corps des professeurs d'EPS - Ministère des Sports / Éducation Nationale)",
        "salaryDetails": {
            "france": {
                "starter": "1 900 € net/mois",
                "experienced": "2 700 € net/mois",
                "senior": "3 600 € net/mois (4 500 € Agrégé)",
                "source": "Studyrama / Ministère de l'Éducation Nationale (France)"
            },
            "senegal": {
                "starter": "220 000 FCFA net/mois",
                "experienced": "320 000 FCFA net/mois",
                "senior": "460 000 FCFA net/mois",
                "source": "Ministère des Sports / Ministère de l'Éducation Nationale du Sénégal (CNEPS Thiès / INSEPS Dakar)"
            }
        },
        "targetAudience": "Élèves de 11 à 18 ans au collège et au lycée, étudiants du supérieur",
        "workEnvironment": "Gymnases, stades d'athlétisme, piscines municipales, murs d'escalade, espaces extérieurs",
        "summary": "Le professeur d'EPS transmet le goût de l'effort physique, la culture sportive et les valeurs citoyennes (fair-play, respect des règles, solidarité). Il veille à l'épanouissement corporel et à la santé de chaque élève, quel que soit son niveau sportif initial.",
        "missions": [
            "Enseigner une grande diversité d'activités physiques, sportives et artistiques (APSA) : athlétisme, natation, sports collectifs, gymnastique, course d'orientation.",
            "Développer les capacités motrices, l'esprit d'équipe, le respect de l'adversaire et l'hygiène de vie des élèves.",
            "Adapter les exercices aux élèves inaptes partiels ou en situation de handicap pour garantir l'inclusion sportive.",
            "Animer l'Association Sportive (AS) du collège ou du lycée le mercredi après-midi dans le cadre de l'UNSS."
        ],
        "activities": [
            "Organisation des séances pratiques d'échauffement, d'ateliers techniques et de situations de match.",
            "Contrôle strict et permanent de la sécurité du matériel (tapis, agrès, cordes) et respect des consignes de sécurité.",
            "Évaluation continue des performances motrices et des rôles sociaux (arbitre, juge, chronométreur).",
            "Encadrement des compétitions scolaires inter-établissements le mercredi après-midi."
        ],
        "specialties": [
            "Sports collectifs (Handball, Basketball, Football, Volleyball)",
            "Sports de pleine nature & Course d'orientation",
            "Activités aquatiques & Natation",
            "Gymnastique & Arts du cirque",
            "Danse & Expression corporelle",
            "Athlétisme & Demi-fond"
        ],
        "skills": {
            "hard": [
                "Polyvalence technique dans l'ensemble des disciplines sportives inscrites aux programmes",
                "Physiologie de l'effort, biomécanique et règles de premiers secours (PSC1)",
                "Didactique de l'EPS et barèmes officiels d'évaluation pour le Baccalauréat",
                "Réglementation et sécurité des installations sportives et nautiques"
            ],
            "soft": [
                "Énergie contagieuse et dynamisme moteur",
                "Pédagogie bienveillante envers les élèves complexés ou non sportifs",
                "Autorité naturelle et maîtrise d'un groupe en mouvement dans un grand espace",
                "Sens de la cohésion et exemplarité morale"
            ],
            "pedagogie": [
                "Valoriser les progrès individuels plutôt que la seule performance brute",
                "Faire acquérir des compétences d'auto-évaluation et de gestion de l'effort",
                "Attribuer des rôles valorisants à tous les élèves (arbitre, observateur, coach)"
            ],
            "communication": [
                "Donner des consignes claires, audibles et concises sur le terrain",
                "Sensibiliser aux bienfaits de l'activité physique contre la sédentarité",
                "Communiquer avec bienveillance sur les questions d'hygiène corporelle"
            ],
            "organisation": [
                "Organiser les déplacements sécurisés entre l'établissement et les installations sportives",
                "Gérer les plannings d'utilisation des gymnases et l'inventaire du matériel",
                "Planifier les déplacements et engagements de l'association sportive"
            ],
            "numerique": [
                "Utiliser des tablettes tactiles pour l'analyse vidéo des gestes sportifs en direct",
                "Exploiter les applications de chronométrage et de suivi de fréquence cardiaque",
                "Gérer les inscriptions et résultats sur les portails sportifs scolaires"
            ],
            "technical": [
                "Polyvalence technique dans l'ensemble des disciplines sportives inscrites aux programmes",
                "Physiologie de l'effort, biomécanique et règles de premiers secours (PSC1)",
                "Didactique de l'EPS et barèmes officiels d'évaluation pour le Baccalauréat",
                "Réglementation et sécurité des installations sportives et nautiques"
            ],
            "human": [
                "Énergie contagieuse et dynamisme moteur",
                "Pédagogie bienveillante envers les élèves complexés ou non sportifs",
                "Autorité naturelle et maîtrise d'un groupe en mouvement dans un grand espace",
                "Sens de la cohésion et exemplarité morale"
            ]
        },
        "qualities": [
            "Excellente condition physique",
            "Pédagogie inclusive et valorisante",
            "Sens aigu de la sécurité",
            "Esprit d'équipe et convivialité",
            "Enthousiasme"
        ],
        "studies": [
            "🇫🇷 France : Bac +5. Licence STAPS (Sciences et Techniques des Activités Physiques et Sportives) + Master MEEF EPS + Réussite au Concours du CAPEPS (Certificat d'Aptitude au Professorat d'Éducation Physique et Sportive).",
            "🇸🇳 Sénégal : Bac + Licence ou Master STAPS + Concours d'entrée et formation à l'INSEPS (Institut National Supérieur de l'Éducation Populaire et du Sport - UCAD Dakar) ou au CNEPS de Thiès."
        ],
        "evolution": [
            "Professeur agrégé d'EPS",
            "Coordinateur d'EPS et de district UNSS",
            "Conseiller pédagogique ou personnel de direction (sur concours)",
            "Inspecteur d'académie - Inspecteur pédagogique régional d'EPS (IA-IPR EPS)"
        ],
        "dailySchedule": [
            {
                "time": "08:00",
                "activity": "Arrivée au gymnase, installation des filets de volleyball et vérification du matériel."
            },
            {
                "time": "08:15",
                "activity": "Séance avec une classe de 4ème : apprentissage des phases d'attaque et d'arbitrage en volleyball."
            },
            {
                "time": "10:15",
                "activity": "Transition vers la piste d'athlétisme pour une séance de relais-vitesse avec une classe de 1ère."
            },
            {
                "time": "12:15",
                "activity": "Déjeuner rapide et préparation des fiches d'évaluation pour la séance de natation."
            },
            {
                "time": "13:30",
                "activity": "Encadrement du groupe au bassin nautique : sauvetage et perfectionnement de la brasse coulée."
            },
            {
                "time": "15:45",
                "activity": "Rangement du matériel aquatique et retour à l'établissement."
            },
            {
                "time": "16:30",
                "activity": "Entraînement de l'équipe de basketball de l'Association Sportive (AS) pour le championnat UNSS."
            }
        ],
        "quiz": [
            {
                "question": "Quel est le concours spécifique requis pour être professeur d'EPS titulaire en France ?",
                "options": [
                    "Le CAPES de Mathématiques",
                    "Le CAPEPS (Certificat d'Aptitude au Professorat d'Éducation Physique et Sportive)",
                    "Le CRPE",
                    "Le BPJEPS"
                ],
                "answer": 1,
                "explanation": "Le CAPEPS est le concours national dédié au recrutement des professeurs d'EPS dans l'enseignement public."
            }
        ],
        "shortDescription": "Le professeur d'EPS transmet le goût de l'effort physique, la culture sportive et les valeurs citoyennes (fair-play, respect des règles, solidarité). Il veille à l'épanouissement corporel et à la santé de chaque élève, quel que soit son niveau sportif initial.",
        "longDescription": "Le professeur d'EPS transmet le goût de l'effort physique, la culture sportive et les valeurs citoyennes (fair-play, respect des règles, solidarité). Il veille à l'épanouissement corporel et à la santé de chaque élève, quel que soit son niveau sportif initial. Enseigner une grande diversité d'activités physiques, sportives et artistiques (APSA) : athlétisme, natation, sports collectifs, gymnastique, course d'orientation. Développer les capacités motrices, l'esprit d'équipe, le respect de l'adversaire et l'hygiène de vie des élèves. Adapter les exercices aux élèves inaptes partiels ou en situation de handicap pour garantir l'inclusion sportive. Animer l'Association Sportive (AS) du collège ou du lycée le mercredi après-midi dans le cadre de l'UNSS.",
        "description": "Le professeur d'EPS transmet le goût de l'effort physique, la culture sportive et les valeurs citoyennes (fair-play, respect des règles, solidarité). Il veille à l'épanouissement corporel et à la santé de chaque élève, quel que soit son niveau sportif initial. Enseigner une grande diversité d'activités physiques, sportives et artistiques (APSA) : athlétisme, natation, sports collectifs, gymnastique, course d'orientation. Développer les capacités motrices, l'esprit d'équipe, le respect de l'adversaire et l'hygiène de vie des élèves. Adapter les exercices aux élèves inaptes partiels ou en situation de handicap pour garantir l'inclusion sportive. Animer l'Association Sportive (AS) du collège ou du lycée le mercredi après-midi dans le cadre de l'UNSS.",
        "studyLevel": "Bac +5 (Master MEEF EPS + Concours CAPEPS ou Agrégation d'EPS)",
        "hard": [
            "Polyvalence technique dans l'ensemble des disciplines sportives inscrites aux programmes",
            "Physiologie de l'effort, biomécanique et règles de premiers secours (PSC1)",
            "Didactique de l'EPS et barèmes officiels d'évaluation pour le Baccalauréat",
            "Réglementation et sécurité des installations sportives et nautiques"
        ],
        "soft": [
            "Énergie contagieuse et dynamisme moteur",
            "Pédagogie bienveillante envers les élèves complexés ou non sportifs",
            "Autorité naturelle et maîtrise d'un groupe en mouvement dans un grand espace",
            "Sens de la cohésion et exemplarité morale"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "activity": "Arrivée au gymnase, installation des filets de volleyball et vérification du matériel."
            },
            {
                "time": "08:15",
                "activity": "Séance avec une classe de 4ème : apprentissage des phases d'attaque et d'arbitrage en volleyball."
            },
            {
                "time": "10:15",
                "activity": "Transition vers la piste d'athlétisme pour une séance de relais-vitesse avec une classe de 1ère."
            },
            {
                "time": "12:15",
                "activity": "Déjeuner rapide et préparation des fiches d'évaluation pour la séance de natation."
            },
            {
                "time": "13:30",
                "activity": "Encadrement du groupe au bassin nautique : sauvetage et perfectionnement de la brasse coulée."
            },
            {
                "time": "15:45",
                "activity": "Rangement du matériel aquatique et retour à l'établissement."
            },
            {
                "time": "16:30",
                "activity": "Entraînement de l'équipe de basketball de l'Association Sportive (AS) pour le championnat UNSS."
            }
        ],
        "daily": {
            "morning": "Arrivée au gymnase, installation des filets de volleyball et vérification du matériel. • Séance avec une classe de 4ème : apprentissage des phases d'attaque et d'arbitrage en volleyball. • Transition vers la piste d'athlétisme pour une séance de relais-vitesse avec une classe de 1ère. • Déjeuner rapide et préparation des fiches d'évaluation pour la séance de natation.",
            "afternoon": "Encadrement du groupe au bassin nautique : sauvetage et perfectionnement de la brasse coulée. • Rangement du matériel aquatique et retour à l'établissement. • Entraînement de l'équipe de basketball de l'Association Sportive (AS) pour le championnat UNSS.",
            "challenges": "Régulation des dynamiques de groupe, transmission bienveillante et exigence éducative."
        },
        "saviezVous": {
            "fait": "L'EPS est la seule discipline scolaire obligatoire dispensée de l'école maternelle jusqu'en classe de terminale, contribuant directement aux objectifs nationaux de santé publique et de lutte contre la sédentarité.",
            "chiffre": "L'UNSS (Union Nationale du Sport Scolaire) compte plus d'un million de licenciés collégiens et lycéens encadrés par leurs professeurs d'EPS."
        }
    },
    {
        "id": "professeur-arts-plastiques",
        "slug": "professeur-arts-plastiques",
        "title": "Professeur d'Arts Plastiques",
        "aliases": [
            "Enseignant d'arts plastiques",
            "Professeur certifié d'arts plastiques (CAPES)",
            "Professeur d'éducation artistique"
        ],
        "icon": "🎨",
        "image": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "education-formation",
            "lettres-langues-sciences-humaines"
        ],
        "domain": "Enseignement Secondaire (Général, Technologique & Professionnel)",
        "domainId": "enseignement-secondaire",
        "subdomain": "Éducation artistique & musicale",
        "sectors": [
            "Éducation Nationale (Collèges, Lycées généraux et technologiques)",
            "Écoles d'art et conservatoires municipaux",
            "Ateliers d'expression plastique"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/enseignement/professeur-d-arts-plastiques-6317",
        "studyramaSource": true,
        "isEmerging": false,
        "level": "Bac +5 (Licence Arts Plastiques + Master MEEF + Concours CAPES Arts Plastiques ou Agrégation)",
        "salary": "🇫🇷 France : 1 900 € à 3 600 € net/mois pour un certifié (jusqu'à 4 500 € pour un agrégé) (Source : Studyrama / Grilles Éducation Nationale) • 🇸🇳 Sénégal : 220 000 à 450 000 FCFA net/mois (Corps des professeurs d'éducation artistique)",
        "salaryDetails": {
            "france": {
                "starter": "1 900 € net/mois",
                "experienced": "2 650 € net/mois",
                "senior": "3 600 € net/mois",
                "source": "Studyrama / Ministère de l'Éducation Nationale (France)"
            },
            "senegal": {
                "starter": "220 000 FCFA net/mois",
                "experienced": "315 000 FCFA net/mois",
                "senior": "450 000 FCFA net/mois",
                "source": "Ministère de la Culture / Ministère de l'Éducation Nationale du Sénégal (ENA - École Nationale des Arts Dakar)"
            }
        },
        "targetAudience": "Collégiens et lycéens de 11 à 18 ans, élèves des spécialités artistiques",
        "workEnvironment": "Salles spécialisées d'arts plastiques au collège et au lycée, ateliers d'expérimentation, musées",
        "summary": "Le professeur d'arts plastiques éveille la créativité, la sensibilité esthétique et l'esprit critique des élèves en associant la pratique créative (dessin, peinture, volume, numérique) à l'histoire des arts et à l'analyse d'œuvres.",
        "missions": [
            "Concevoir des situations d'apprentissage invitant les élèves à créer, expérimenter des médiums et résoudre un problème plastique.",
            "Enseigner l'histoire des arts, les mouvements artistiques majeurs et les langages visuels contemporains.",
            "Guider les élèves dans l'analyse critique de leurs propres productions et de celles de grands maîtres.",
            "Organiser des projets culturels, expositions des travaux d'élèves et visites dans les musées et galeries d'art."
        ],
        "activities": [
            "Préparation et approvisionnement des matériaux d'atelier (argile, peinture, supports, encres, outils numériques).",
            "Animation des cours en atelier, guidage technique et questionnement bienveillant pendant la création.",
            "Mise en espace et accrochage des réalisations d'élèves dans les couloirs et le hall de l'établissement.",
            "Conduite de projets interdisciplinaires associant arts, histoire, lettres et technologies numériques."
        ],
        "specialties": [
            "Dessin, Peinture & Techniques mixtes",
            "Sculpture, Volume & Modelage",
            "Photographie & Création numérique",
            "Histoire des arts & Muséologie",
            "Design graphique & Bande dessinée"
        ],
        "skills": {
            "hard": [
                "Culture artistique et muséale encyclopédique",
                "Maîtrise technique d'un large éventail de médiums plastiques traditionnels et contemporains",
                "Didactique de la pratique artistique et questionnement de projet",
                "Connaissance des consignes de sécurité liées aux produits et matériels d'atelier"
            ],
            "soft": [
                "Curiosité insatiable et sensibilité esthétique",
                "Bienveillance et capacité à désinhiber les élèves face à la création",
                "Ouverture d'esprit et respect de l'originalité de chaque élève",
                "Sens du partage et enthousiasme"
            ],
            "pedagogie": [
                "Poser des consignes ouvertes stimulant l'imagination personnelle",
                "Conduire des verbalisations collectives constructives sur les œuvres d'élèves",
                "Valoriser la singularité de la démarche plutôt que le seul résultat esthétique"
            ],
            "communication": [
                "Sensibiliser les élèves aux codes et messages visuels de la société moderne",
                "Présenter les expositions scolaires aux familles et au public",
                "Tisser des partenariats avec les acteurs culturels locaux"
            ],
            "organisation": [
                "Gérer le budget d'achat de fournitures artistiques de l'établissement",
                "Maintenir l'ordre, la propreté et la conservation des travaux en salle spécialisée",
                "Coordonner la logistique des sorties scolaires aux musées"
            ],
            "numerique": [
                "Utiliser les logiciels de retouche photo et de création graphique (Photoshop, GIMP)",
                "Exploiter les tablettes graphiques et la vidéo d'animation (Stop-motion)",
                "Administrer une galerie virtuelle des travaux d'élèves sur le site du collège"
            ],
            "technical": [
                "Culture artistique et muséale encyclopédique",
                "Maîtrise technique d'un large éventail de médiums plastiques traditionnels et contemporains",
                "Didactique de la pratique artistique et questionnement de projet",
                "Connaissance des consignes de sécurité liées aux produits et matériels d'atelier"
            ],
            "human": [
                "Curiosité insatiable et sensibilité esthétique",
                "Bienveillance et capacité à désinhiber les élèves face à la création",
                "Ouverture d'esprit et respect de l'originalité de chaque élève",
                "Sens du partage et enthousiasme"
            ]
        },
        "qualities": [
            "Créativité féconde",
            "Écoute et bienveillance",
            "Culture esthétique riche",
            "Sens de l'innovation",
            "Patience"
        ],
        "studies": [
            "🇫🇷 France : Bac +5. Licence d'Arts Plastiques + Master MEEF 2nd degré Arts Plastiques + Réussite au CAPES ou à l'Agrégation d'Arts Plastiques.",
            "🇸🇳 Sénégal : Bac + Licence ou Master en Arts Plastiques (ENA - École Nationale des Arts de Dakar ou UCAD) + formation pédagogique à la FASTEF."
        ],
        "evolution": [
            "Professeur agrégé d'arts plastiques",
            "Enseignant en classe préparatoire artistique ou en école supérieure d'art (Beaux-Arts)",
            "Formateur académique ou conseiller en action culturelle auprès du Rectorat",
            "Inspecteur d'académie - Inspecteur pédagogique régional (IA-IPR Arts plastiques)"
        ],
        "dailySchedule": [
            {
                "time": "08:15",
                "activity": "Arrivée en salle d'arts, disposition des tables en îlots et préparation des pots de gouache et papiers grand format."
            },
            {
                "time": "08:30",
                "activity": "Cours avec une classe de 5ème : questionnement plastique sur le thème 'L'objet métamorphosé'."
            },
            {
                "time": "10:15",
                "activity": "Temps de verbalisation collective : les élèves exposent leurs réalisations et expliquent leurs choix."
            },
            {
                "time": "11:00",
                "activity": "Cours avec une classe de 3ème : création numérique et travail de cadrage photographique sur tablettes."
            },
            {
                "time": "12:30",
                "activity": "Déjeuner et réunion avec la documentaliste du CDI pour planifier l'exposition annuelle d'art du collège."
            },
            {
                "time": "14:00",
                "activity": "Atelier pratique de sculpture avec des élèves de l'option artistique du lycée."
            },
            {
                "time": "16:00",
                "activity": "Nettoyage des pinceaux, rangement des matériaux et saisie des évaluations sur le logiciel de notes."
            }
        ],
        "quiz": [
            {
                "question": "En arts plastiques au collège, l'évaluation porte-t-elle uniquement sur le 'don' pour le dessin ?",
                "options": [
                    "Oui, seuls les élèves doués ont de bonnes notes",
                    "Non, elle évalue la démarche de création, l'expérimentation, la prise de risque et la capacité à expliciter son travail",
                    "Non, elle évalue uniquement l'écriture",
                    "L'art plastique n'est jamais noté"
                ],
                "answer": 1,
                "explanation": "L'enseignement des arts plastiques évalue la démarche créative, le dialogue entre pratique et culture artistique, et non un prétendu don inné."
            }
        ],
        "shortDescription": "Le professeur d'arts plastiques éveille la créativité, la sensibilité esthétique et l'esprit critique des élèves en associant la pratique créative (dessin, peinture, volume, numérique) à l'histoire des arts et à l'analyse d'œuvres.",
        "longDescription": "Le professeur d'arts plastiques éveille la créativité, la sensibilité esthétique et l'esprit critique des élèves en associant la pratique créative (dessin, peinture, volume, numérique) à l'histoire des arts et à l'analyse d'œuvres. Concevoir des situations d'apprentissage invitant les élèves à créer, expérimenter des médiums et résoudre un problème plastique. Enseigner l'histoire des arts, les mouvements artistiques majeurs et les langages visuels contemporains. Guider les élèves dans l'analyse critique de leurs propres productions et de celles de grands maîtres. Organiser des projets culturels, expositions des travaux d'élèves et visites dans les musées et galeries d'art.",
        "description": "Le professeur d'arts plastiques éveille la créativité, la sensibilité esthétique et l'esprit critique des élèves en associant la pratique créative (dessin, peinture, volume, numérique) à l'histoire des arts et à l'analyse d'œuvres. Concevoir des situations d'apprentissage invitant les élèves à créer, expérimenter des médiums et résoudre un problème plastique. Enseigner l'histoire des arts, les mouvements artistiques majeurs et les langages visuels contemporains. Guider les élèves dans l'analyse critique de leurs propres productions et de celles de grands maîtres. Organiser des projets culturels, expositions des travaux d'élèves et visites dans les musées et galeries d'art.",
        "studyLevel": "Bac +5 (Licence Arts Plastiques + Master MEEF + Concours CAPES Arts Plastiques ou Agrégation)",
        "hard": [
            "Culture artistique et muséale encyclopédique",
            "Maîtrise technique d'un large éventail de médiums plastiques traditionnels et contemporains",
            "Didactique de la pratique artistique et questionnement de projet",
            "Connaissance des consignes de sécurité liées aux produits et matériels d'atelier"
        ],
        "soft": [
            "Curiosité insatiable et sensibilité esthétique",
            "Bienveillance et capacité à désinhiber les élèves face à la création",
            "Ouverture d'esprit et respect de l'originalité de chaque élève",
            "Sens du partage et enthousiasme"
        ],
        "typicalDay": [
            {
                "time": "08:15",
                "activity": "Arrivée en salle d'arts, disposition des tables en îlots et préparation des pots de gouache et papiers grand format."
            },
            {
                "time": "08:30",
                "activity": "Cours avec une classe de 5ème : questionnement plastique sur le thème 'L'objet métamorphosé'."
            },
            {
                "time": "10:15",
                "activity": "Temps de verbalisation collective : les élèves exposent leurs réalisations et expliquent leurs choix."
            },
            {
                "time": "11:00",
                "activity": "Cours avec une classe de 3ème : création numérique et travail de cadrage photographique sur tablettes."
            },
            {
                "time": "12:30",
                "activity": "Déjeuner et réunion avec la documentaliste du CDI pour planifier l'exposition annuelle d'art du collège."
            },
            {
                "time": "14:00",
                "activity": "Atelier pratique de sculpture avec des élèves de l'option artistique du lycée."
            },
            {
                "time": "16:00",
                "activity": "Nettoyage des pinceaux, rangement des matériaux et saisie des évaluations sur le logiciel de notes."
            }
        ],
        "daily": {
            "morning": "Arrivée en salle d'arts, disposition des tables en îlots et préparation des pots de gouache et papiers grand format. • Cours avec une classe de 5ème : questionnement plastique sur le thème 'L'objet métamorphosé'. • Temps de verbalisation collective : les élèves exposent leurs réalisations et expliquent leurs choix. • Cours avec une classe de 3ème : création numérique et travail de cadrage photographique sur tablettes. • Déjeuner et réunion avec la documentaliste du CDI pour planifier l'exposition annuelle d'art du collège.",
            "afternoon": "Atelier pratique de sculpture avec des élèves de l'option artistique du lycée. • Nettoyage des pinceaux, rangement des matériaux et saisie des évaluations sur le logiciel de notes.",
            "challenges": "Régulation des dynamiques de groupe, transmission bienveillante et exigence éducative."
        },
        "saviezVous": {
            "fait": "L'enseignement des arts plastiques en France ne se limite pas au dessin : il englobe la sculpture, la photographie, la création numérique, l'installation spatiale et l'histoire des arts depuis l'Antiquité jusqu'à l'art contemporain.",
            "chiffre": "Tous les collégiens bénéficient d'une heure hebdomadaire d'arts plastiques tout au long des quatre années de collège."
        }
    },
    {
        "id": "professeur-musique",
        "slug": "professeur-musique",
        "title": "Professeur de Musique & Éducation Musicale",
        "aliases": [
            "Enseignant d'éducation musicale",
            "Professeur certifié de musique (CAPES)",
            "Chef de chœur scolaire",
            "Professeur de conservatoire"
        ],
        "icon": "🎵",
        "image": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "education-formation",
            "lettres-langues-sciences-humaines"
        ],
        "domain": "Enseignement Secondaire (Général, Technologique & Professionnel)",
        "domainId": "enseignement-secondaire",
        "subdomain": "Éducation artistique & musicale",
        "sectors": [
            "Éducation Nationale (Collèges, Lycées généraux et techniques)",
            "Conservatoires à rayonnement régional (CRR) et municipal (CRM)",
            "Chorales scolaires et académies musicales"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/musique/professeur-de-musique-1218",
        "studyramaSource": true,
        "isEmerging": false,
        "level": "Bac +5 (Licence Musicologie + Master MEEF Éducation Musicale + Concours CAPES Musique ou Agrégation)",
        "salary": "🇫🇷 France : 1 900 € à 3 600 € net/mois pour un certifié (jusqu'à 4 500 € pour un agrégé) (Source : Studyrama / Grilles Éducation Nationale) • 🇸🇳 Sénégal : 220 000 à 450 000 FCFA net/mois (Corps des professeurs d'éducation musicale)",
        "salaryDetails": {
            "france": {
                "starter": "1 900 € net/mois",
                "experienced": "2 650 € net/mois",
                "senior": "3 600 € net/mois",
                "source": "Studyrama / Ministère de l'Éducation Nationale (France)"
            },
            "senegal": {
                "starter": "220 000 FCFA net/mois",
                "experienced": "315 000 FCFA net/mois",
                "senior": "450 000 FCFA net/mois",
                "source": "Ministère de la Culture / Ministère de l'Éducation Nationale du Sénégal"
            }
        },
        "targetAudience": "Collégiens et lycéens de 11 à 18 ans, élèves chanteurs et choristes",
        "workEnvironment": "Salles spécialisées d'éducation musicale équipées de claviers et instruments, auditoriums, salles de concert",
        "summary": "Le professeur d'éducation musicale développe l'écoute critique, la voix chantée et la culture musicale des élèves. Par la pratique vocale collective en chorale et l'exploration des répertoires du monde entier, il rend la musique accessible à tous.",
        "missions": [
            "Former la voix des élèves à travers des exercices de respiration, de posture, d'articulation et de chant choral.",
            "Enseigner l'écoute analytique et reconnaître les timbres, structures, rythmes et styles musicaux de différentes époques et cultures.",
            "Initier aux pratiques instrumentales simples (percussions, claviers) et à la création sonore assistée par ordinateur (MAO).",
            "Diriger la chorale de l'établissement scolaire et organiser le concert de fin d'année."
        ],
        "activities": [
            "Animation de séances de chant polyphonique en classe entière et direction du chœur.",
            "Écoute comparée d'œuvres musicales au tableau interactif et prise de notes analytiques guidée.",
            "Répétitions hebdomadaires de la chorale sur la pause méridienne ou le soir.",
            "Organisation logistique des concerts, rencontres chorales académiques et partenariats avec les opéras et salles de concert."
        ],
        "specialties": [
            "Chant choral & Direction de chœur",
            "Musique assistée par ordinateur (MAO)",
            "Musicologie & Histoire de la musique",
            "Pratique instrumentale & Accompagnement piano/guitare",
            "Musiques traditionnelles & Musiques actuelles"
        ],
        "skills": {
            "hard": [
                "Maîtrise vocale confirmée et pratique fluide d'un instrument d'accompagnement (piano, guitare)",
                "Culture musicale universelle (musique classique, jazz, musiques du monde, musiques actuelles)",
                "Techniques de direction de chœur et de travail polyphonique à deux ou trois voix",
                "Logiciels de musique assistée par ordinateur (Cubase, GarageBand, Audacity)"
            ],
            "soft": [
                "Enthousiasme communicatif et énergie vocale",
                "Capacité à mettre en confiance les élèves timides face au chant",
                "Patience et rigueur dans l'écoute musicale",
                "Charisme et présence scénique"
            ],
            "pedagogie": [
                "Rendre l'apprentissage vocal ludique et décomplexé",
                "Développer l'oreille musicale par des jeux d'écoute interactifs",
                "Adapter les tonalités et tessitures à l'âge et à la mue de la voix des adolescents"
            ],
            "communication": [
                "Fédérer un groupe d'élèves autour d'un projet choral collectif",
                "Présenter avec clarté les œuvres et leur contexte historique",
                "Animer les représentations publiques devant les familles"
            ],
            "organisation": [
                "Entretenir et gérer le parc d'instruments de musique du collège",
                "Planifier les répétitions générales et balances sonores du spectacle annuel",
                "Organiser les sorties scolaires au concert ou à l'opéra"
            ],
            "numerique": [
                "Maîtriser les outils d'enregistrement et de mixage sonore",
                "Utiliser les claviers MIDI branchés sur ordinateurs en salle de classe",
                "Mettre à disposition des élèves des fichiers audio de travail pour répéter à la maison"
            ],
            "technical": [
                "Maîtrise vocale confirmée et pratique fluide d'un instrument d'accompagnement (piano, guitare)",
                "Culture musicale universelle (musique classique, jazz, musiques du monde, musiques actuelles)",
                "Techniques de direction de chœur et de travail polyphonique à deux ou trois voix",
                "Logiciels de musique assistée par ordinateur (Cubase, GarageBand, Audacity)"
            ],
            "human": [
                "Enthousiasme communicatif et énergie vocale",
                "Capacité à mettre en confiance les élèves timides face au chant",
                "Patience et rigueur dans l'écoute musicale",
                "Charisme et présence scénique"
            ]
        },
        "qualities": [
            "Sensibilité artistique et musicale",
            "Dynamisme vocal et relationnel",
            "Patience et bienveillance",
            "Esprit de troupe",
            "Rigueur"
        ],
        "studies": [
            "🇫🇷 France : Bac +5. Licence de Musicologie + Master MEEF 2nd degré Éducation Musicale + Réussite au CAPES ou à l'Agrégation de Musique.",
            "🇸🇳 Sénégal : Bac + Licence ou Master en Musicologie ou formation au Conservatoire / ENA + formation pédagogique à la FASTEF."
        ],
        "evolution": [
            "Professeur agrégé de musique",
            "Coordinateur de projets artistiques et chorals au niveau académique",
            "Enseignant en classe à horaires aménagés musique (CHAM) ou en conservatoire",
            "Inspecteur d'académie - Inspecteur pédagogique régional (IA-IPR Éducation musicale)"
        ],
        "dailySchedule": [
            {
                "time": "08:15",
                "activity": "Arrivée en salle de musique, accordage de la guitare et mise sous tension du piano et de la sonorisation."
            },
            {
                "time": "08:30",
                "activity": "Échauffement vocal ludique et travail polyphonique sur un chant traditionnel avec une classe de 6ème."
            },
            {
                "time": "10:15",
                "activity": "Séance d'analyse auditive comparée (baroque vs jazz) avec une classe de 3ème."
            },
            {
                "time": "12:15",
                "activity": "Déjeuner rapide et préparation des partitions pour la chorale."
            },
            {
                "time": "13:00",
                "activity": "Répétition de la chorale du collège : travail à deux voix sur une chanson contemporaine en vue du spectacle de fin d'année."
            },
            {
                "time": "14:15",
                "activity": "Atelier de création sonore et MAO en demi-groupe sur tablettes tactiles."
            },
            {
                "time": "16:00",
                "activity": "Fin des cours, rangement des claviers et préparation des bandes-son de travail pour les élèves."
            }
        ],
        "quiz": [
            {
                "question": "Quelle activité collective phare le professeur de musique anime-t-il souvent au collège ?",
                "options": [
                    "Le club de bridge",
                    "La chorale du collège",
                    "Le tournoi d'échecs",
                    "La compétition d'athlétisme"
                ],
                "answer": 1,
                "explanation": "La chorale scolaire est un prolongement majeur de l'éducation musicale au collège, rassemblant les élèves pour des projets vocaux d'envergure."
            }
        ],
        "shortDescription": "Le professeur d'éducation musicale développe l'écoute critique, la voix chantée et la culture musicale des élèves. Par la pratique vocale collective en chorale et l'exploration des répertoires du monde entier, il rend la musique accessible à tous.",
        "longDescription": "Le professeur d'éducation musicale développe l'écoute critique, la voix chantée et la culture musicale des élèves. Par la pratique vocale collective en chorale et l'exploration des répertoires du monde entier, il rend la musique accessible à tous. Former la voix des élèves à travers des exercices de respiration, de posture, d'articulation et de chant choral. Enseigner l'écoute analytique et reconnaître les timbres, structures, rythmes et styles musicaux de différentes époques et cultures. Initier aux pratiques instrumentales simples (percussions, claviers) et à la création sonore assistée par ordinateur (MAO). Diriger la chorale de l'établissement scolaire et organiser le concert de fin d'année.",
        "description": "Le professeur d'éducation musicale développe l'écoute critique, la voix chantée et la culture musicale des élèves. Par la pratique vocale collective en chorale et l'exploration des répertoires du monde entier, il rend la musique accessible à tous. Former la voix des élèves à travers des exercices de respiration, de posture, d'articulation et de chant choral. Enseigner l'écoute analytique et reconnaître les timbres, structures, rythmes et styles musicaux de différentes époques et cultures. Initier aux pratiques instrumentales simples (percussions, claviers) et à la création sonore assistée par ordinateur (MAO). Diriger la chorale de l'établissement scolaire et organiser le concert de fin d'année.",
        "studyLevel": "Bac +5 (Licence Musicologie + Master MEEF Éducation Musicale + Concours CAPES Musique ou Agrégation)",
        "hard": [
            "Maîtrise vocale confirmée et pratique fluide d'un instrument d'accompagnement (piano, guitare)",
            "Culture musicale universelle (musique classique, jazz, musiques du monde, musiques actuelles)",
            "Techniques de direction de chœur et de travail polyphonique à deux ou trois voix",
            "Logiciels de musique assistée par ordinateur (Cubase, GarageBand, Audacity)"
        ],
        "soft": [
            "Enthousiasme communicatif et énergie vocale",
            "Capacité à mettre en confiance les élèves timides face au chant",
            "Patience et rigueur dans l'écoute musicale",
            "Charisme et présence scénique"
        ],
        "typicalDay": [
            {
                "time": "08:15",
                "activity": "Arrivée en salle de musique, accordage de la guitare et mise sous tension du piano et de la sonorisation."
            },
            {
                "time": "08:30",
                "activity": "Échauffement vocal ludique et travail polyphonique sur un chant traditionnel avec une classe de 6ème."
            },
            {
                "time": "10:15",
                "activity": "Séance d'analyse auditive comparée (baroque vs jazz) avec une classe de 3ème."
            },
            {
                "time": "12:15",
                "activity": "Déjeuner rapide et préparation des partitions pour la chorale."
            },
            {
                "time": "13:00",
                "activity": "Répétition de la chorale du collège : travail à deux voix sur une chanson contemporaine en vue du spectacle de fin d'année."
            },
            {
                "time": "14:15",
                "activity": "Atelier de création sonore et MAO en demi-groupe sur tablettes tactiles."
            },
            {
                "time": "16:00",
                "activity": "Fin des cours, rangement des claviers et préparation des bandes-son de travail pour les élèves."
            }
        ],
        "daily": {
            "morning": "Arrivée en salle de musique, accordage de la guitare et mise sous tension du piano et de la sonorisation. • Échauffement vocal ludique et travail polyphonique sur un chant traditionnel avec une classe de 6ème. • Séance d'analyse auditive comparée (baroque vs jazz) avec une classe de 3ème. • Déjeuner rapide et préparation des partitions pour la chorale.",
            "afternoon": "Répétition de la chorale du collège : travail à deux voix sur une chanson contemporaine en vue du spectacle de fin d'année. • Atelier de création sonore et MAO en demi-groupe sur tablettes tactiles. • Fin des cours, rangement des claviers et préparation des bandes-son de travail pour les élèves.",
            "challenges": "Régulation des dynamiques de groupe, transmission bienveillante et exigence éducative."
        },
        "saviezVous": {
            "fait": "La pratique collective de la voix et du chant choral est reconnue par les neurosciences comme l'un des plus puissants stimulateurs du développement cognitif, de la concentration et de l'empathie chez les adolescents.",
            "chiffre": "Plus de 250 000 élèves participent chaque année aux chorales des collèges et lycées en France."
        }
    },
    {
        "id": "enseignant-chercheur",
        "slug": "enseignant-chercheur",
        "title": "Enseignant-Chercheur (Maître de Conférences / Professeur des Universités)",
        "aliases": [
            "Maître de conférences (MCU)",
            "Professeur des universités (PU)",
            "Universitaire chercheur",
            "Directeur de thèse / chercheur académique"
        ],
        "icon": "🔬",
        "image": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "education-formation",
            "biologie-chimie",
            "sciences-terre-geosciences",
            "numerique-ia",
            "lettres-langues-sciences-humaines",
            "sante-soins-paramedical"
        ],
        "domain": "Enseignement Supérieur, Recherche & Milieu Universitaire",
        "domainId": "enseignement-superieur-recherche",
        "subdomain": "Université & Recherche universitaire",
        "sectors": [
            "Universités publiques et privées",
            "Grandes écoles d'ingénieurs et de management",
            "Organismes publics de recherche (CNRS, INSERM, INRIA, IRD au Sénégal)",
            "Laboratoires mixtes de recherche internationaux"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/enseignement/enseignant-chercheur",
        "studyramaSource": true,
        "isEmerging": false,
        "level": "Bac +8 (Doctorat) à Bac +10 (Habilitation à Diriger des Recherches - HDR)",
        "salary": "🇫🇷 France : 2 400 € à 4 200 € net/mois pour un Maître de conférences ; 3 200 € à 6 000 € net/mois pour un Professeur des universités (Source : Studyrama / Grilles Enseignement Supérieur) • 🇸🇳 Sénégal : 600 000 à 1 800 000 FCFA net/mois selon le grade (Maître-assistant, Maître de conférences, Professeur titulaire - UCAD, UGB)",
        "salaryDetails": {
            "france": {
                "starter": "2 400 € net/mois (Maître de conférences échelon 1)",
                "experienced": "3 500 € net/mois (Maître de conférences hors classe)",
                "senior": "4 800 € à 6 000 € net/mois (Professeur des universités classe exceptionnelle)",
                "source": "Studyrama / Ministère de l'Enseignement Supérieur et de la Recherche (France)"
            },
            "senegal": {
                "starter": "600 000 FCFA net/mois (Maître-assistant)",
                "experienced": "1 100 000 FCFA net/mois (Maître de conférences assimilé)",
                "senior": "1 800 000 FCFA net/mois (Professeur titulaire de chaire)",
                "source": "Grille de l'Enseignement Supérieur du Sénégal / UCAD / CAMES"
            }
        },
        "targetAudience": "Étudiants de Licence, Master, élèves-ingénieurs, doctorants et chercheurs internationaux",
        "workEnvironment": "Amphithéâtres universitaires, salles de travaux dirigés, laboratoires de recherche de pointe, colloques internationaux",
        "summary": "Doté d'une double casquette, l'enseignant-chercheur partage son temps entre la transmission des savoirs de pointe aux étudiants de l'université et la production de connaissances nouvelles au sein d'un laboratoire de recherche de niveau mondial.",
        "missions": [
            "Dispenser des cours magistraux (CM) et des travaux dirigés (TD) de haut niveau aux étudiants du supérieur (Licence, Master).",
            "Mener des projets de recherche originaux, expérimentaux ou théoriques, et publier les résultats dans des revues scientifiques internationales à comité de lecture.",
            "Encadrer des étudiants en Master et diriger des thèses de Doctorat.",
            "Participer à la vie universitaire, à la gouvernance des composantes (UFR, départements) et à la vulgarisation scientifique."
        ],
        "activities": [
            "Conception de cours actualisés intégrant les découvertes scientifiques les plus récentes.",
            "Conduite d'expériences en laboratoire ou dépouillement de corpus documentaires.",
            "Rédaction d'articles scientifiques en anglais et soumission aux comités éditoriaux.",
            "Intervention dans des congrès et colloques scientifiques en France et à l'international."
        ],
        "specialties": [
            "Sciences exactes (Mathématiques, Physique, Chimie, Informatique, IA)",
            "Sciences de la vie, de la Terre & Santé",
            "Sciences humaines et sociales (Histoire, Sociologie, Philosophie, Droit)",
            "Sciences économiques et gestion",
            "Sciences de l'ingénieur et technologies"
        ],
        "skills": {
            "hard": [
                "Expertise scientifique de niveau doctoral dans son domaine de recherche",
                "Méthodologie rigoureuse de la recherche scientifique et analyse de données complexes",
                "Anglais académique courant (oral et écrit pour les publications internationales)",
                "Didactique universitaire et pédagogie active pour grands auditoires"
            ],
            "soft": [
                "Curiosité intellectuelle insatiable et persévérance",
                "Aisance oratoire face à un amphithéâtre de plusieurs centaines d'étudiants",
                "Rigueur éthique et déontologique dans la conduite de la recherche",
                "Capacité à manager une équipe de jeunes chercheurs et doctorants"
            ],
            "pedagogie": [
                "Structurer une pensée complexe pour la rendre intelligible à des étudiants",
                "Transmettre la démarche critique et la méthode d'investigation scientifique",
                "Encadrer l'autonomie intellectuelle des étudiants avancés"
            ],
            "communication": [
                "Défendre avec brio ses hypothèses lors de conférences internationales",
                "Vulgariser la science auprès du grand public et des médias",
                "Collaborer avec des équipes de recherche pluridisciplinaires"
            ],
            "organisation": [
                "Gérer les financements de projets de recherche (bourses ANR, européennes, CAMES)",
                "Planifier les campagnes expérimentales et le calendrier des jurys de thèse",
                "Concilier rigoureusement les heures d'enseignement et le temps de recherche"
            ],
            "numerique": [
                "Maîtriser les logiciels de traitement de données (R, Python, MATLAB)",
                "Utiliser les plateformes de cours en ligne (Moodle) et les archives ouvertes (HAL, ArXiv)",
                "Exploiter les outils de travail collaboratif scientifique international"
            ],
            "technical": [
                "Expertise scientifique de niveau doctoral dans son domaine de recherche",
                "Méthodologie rigoureuse de la recherche scientifique et analyse de données complexes",
                "Anglais académique courant (oral et écrit pour les publications internationales)",
                "Didactique universitaire et pédagogie active pour grands auditoires"
            ],
            "human": [
                "Curiosité intellectuelle insatiable et persévérance",
                "Aisance oratoire face à un amphithéâtre de plusieurs centaines d'étudiants",
                "Rigueur éthique et déontologique dans la conduite de la recherche",
                "Capacité à manager une équipe de jeunes chercheurs et doctorants"
            ]
        },
        "qualities": [
            "Rigueur scientifique absolue",
            "Passion pour la recherche",
            "Pédagogie et sens de la transmission",
            "Persévérance",
            "Excellente expression"
        ],
        "studies": [
            "🇫🇷 France : Bac +8 à Bac +10. Licence + Master de recherche + Doctorat (3 à 4 ans de thèse) + Qualification délivrée par le Conseil National des Universités (CNU) + Recrutement sur concours par les universités. Pour devenir Professeur des universités : obtention de l'HDR (Habilitation à Diriger des Recherches) ou concours d'agrégation du supérieur.",
            "🇸🇳 Sénégal : Bac +8. Licence + Master + Doctorat unique ou Doctorat d'État + Inscription sur les listes d'aptitude du CAMES (Conseil Africain et Malgache pour l'Enseignement Supérieur) pour les grades de Maître-Assistant, Maître de Conférences et Professeur Titulaire."
        ],
        "evolution": [
            "Professeur des universités de classe exceptionnelle",
            "Directeur d'un laboratoire de recherche ou d'une Unité Mixte de Recherche (UMR)",
            "Doyen d'UFR ou Président d'université",
            "Expert auprès d'instances nationales ou internationales (UNESCO, Union Européenne, OMS)"
        ],
        "dailySchedule": [
            {
                "time": "08:30",
                "activity": "Arrivée au laboratoire de recherche, analyse des données expérimentales de la veille avec deux doctorants."
            },
            {
                "time": "10:00",
                "activity": "Cours magistral d'amphithéâtre devant 200 étudiants de Licence 3 : théories avancées et études de cas récents."
            },
            {
                "time": "12:00",
                "activity": "Déjeuner de travail avec des collègues universitaires pour monter un dossier de candidature à un appel à projets ANR."
            },
            {
                "time": "13:30",
                "activity": "Séance de travaux dirigés en salle informatique avec un groupe de Master 2."
            },
            {
                "time": "15:30",
                "activity": "Travail individuel de recherche : rédaction d'un article en anglais pour une revue scientifique de rang A."
            },
            {
                "time": "17:30",
                "activity": "Participation à un jury de soutenance de mémoire de recherche d'un étudiant de Master."
            },
            {
                "time": "19:00",
                "activity": "Fin de journée universitaire."
            }
        ],
        "quiz": [
            {
                "question": "Quel diplôme universitaire est le prérequis indispensable pour devenir enseignant-chercheur ?",
                "options": [
                    "Le Baccalauréat",
                    "Le Doctorat (Bac +8)",
                    "Le BTS",
                    "Le brevet des collèges"
                ],
                "answer": 1,
                "explanation": "L'accès aux fonctions d'enseignant-chercheur exige l'obtention du Doctorat (Bac +8) sanctionnant plusieurs années de recherche originale."
            }
        ],
        "shortDescription": "Doté d'une double casquette, l'enseignant-chercheur partage son temps entre la transmission des savoirs de pointe aux étudiants de l'université et la production de connaissances nouvelles au sein d'un laboratoire de recherche de niveau mondial.",
        "longDescription": "Doté d'une double casquette, l'enseignant-chercheur partage son temps entre la transmission des savoirs de pointe aux étudiants de l'université et la production de connaissances nouvelles au sein d'un laboratoire de recherche de niveau mondial. Dispenser des cours magistraux (CM) et des travaux dirigés (TD) de haut niveau aux étudiants du supérieur (Licence, Master). Mener des projets de recherche originaux, expérimentaux ou théoriques, et publier les résultats dans des revues scientifiques internationales à comité de lecture. Encadrer des étudiants en Master et diriger des thèses de Doctorat. Participer à la vie universitaire, à la gouvernance des composantes (UFR, départements) et à la vulgarisation scientifique.",
        "description": "Doté d'une double casquette, l'enseignant-chercheur partage son temps entre la transmission des savoirs de pointe aux étudiants de l'université et la production de connaissances nouvelles au sein d'un laboratoire de recherche de niveau mondial. Dispenser des cours magistraux (CM) et des travaux dirigés (TD) de haut niveau aux étudiants du supérieur (Licence, Master). Mener des projets de recherche originaux, expérimentaux ou théoriques, et publier les résultats dans des revues scientifiques internationales à comité de lecture. Encadrer des étudiants en Master et diriger des thèses de Doctorat. Participer à la vie universitaire, à la gouvernance des composantes (UFR, départements) et à la vulgarisation scientifique.",
        "studyLevel": "Bac +8 (Doctorat) à Bac +10 (Habilitation à Diriger des Recherches - HDR)",
        "hard": [
            "Expertise scientifique de niveau doctoral dans son domaine de recherche",
            "Méthodologie rigoureuse de la recherche scientifique et analyse de données complexes",
            "Anglais académique courant (oral et écrit pour les publications internationales)",
            "Didactique universitaire et pédagogie active pour grands auditoires"
        ],
        "soft": [
            "Curiosité intellectuelle insatiable et persévérance",
            "Aisance oratoire face à un amphithéâtre de plusieurs centaines d'étudiants",
            "Rigueur éthique et déontologique dans la conduite de la recherche",
            "Capacité à manager une équipe de jeunes chercheurs et doctorants"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Arrivée au laboratoire de recherche, analyse des données expérimentales de la veille avec deux doctorants."
            },
            {
                "time": "10:00",
                "activity": "Cours magistral d'amphithéâtre devant 200 étudiants de Licence 3 : théories avancées et études de cas récents."
            },
            {
                "time": "12:00",
                "activity": "Déjeuner de travail avec des collègues universitaires pour monter un dossier de candidature à un appel à projets ANR."
            },
            {
                "time": "13:30",
                "activity": "Séance de travaux dirigés en salle informatique avec un groupe de Master 2."
            },
            {
                "time": "15:30",
                "activity": "Travail individuel de recherche : rédaction d'un article en anglais pour une revue scientifique de rang A."
            },
            {
                "time": "17:30",
                "activity": "Participation à un jury de soutenance de mémoire de recherche d'un étudiant de Master."
            },
            {
                "time": "19:00",
                "activity": "Fin de journée universitaire."
            }
        ],
        "daily": {
            "morning": "Arrivée au laboratoire de recherche, analyse des données expérimentales de la veille avec deux doctorants. • Cours magistral d'amphithéâtre devant 200 étudiants de Licence 3 : théories avancées et études de cas récents. • Déjeuner de travail avec des collègues universitaires pour monter un dossier de candidature à un appel à projets ANR.",
            "afternoon": "Séance de travaux dirigés en salle informatique avec un groupe de Master 2. • Travail individuel de recherche : rédaction d'un article en anglais pour une revue scientifique de rang A. • Participation à un jury de soutenance de mémoire de recherche d'un étudiant de Master. • Fin de journée universitaire.",
            "challenges": "Régulation des dynamiques de groupe, transmission bienveillante et exigence éducative."
        },
        "saviezVous": {
            "fait": "Le temps de travail statutaire d'un enseignant-chercheur est strictement réparti à parité : 50% dédié à l'enseignement supérieur (192 heures équivalent TD annuelles) et 50% consacré à la recherche fondamentale ou appliquée.",
            "chiffre": "La France compte environ 56 000 enseignants-chercheurs titulaires dans ses universités et grands établissements."
        }
    },
    {
        "id": "conseiller-principal-education",
        "slug": "conseiller-principal-education",
        "title": "Conseiller Principal d'Éducation (CPE)",
        "aliases": [
            "CPE",
            "Responsable de la vie scolaire",
            "Conseiller d'éducation",
            "Cadre éducatif en collège / lycée"
        ],
        "icon": "🧭",
        "image": "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "education-formation",
            "lettres-langues-sciences-humaines",
            "droit-management"
        ],
        "domain": "Orientation, Vie Scolaire & Inclusion Éducative",
        "domainId": "orientation-vie-scolaire-inclusion",
        "subdomain": "Vie scolaire & Climat éducatif",
        "sectors": [
            "Éducation Nationale (Collèges, Lycées généraux, technologiques et pro)",
            "Internats scolaires et d'excellence",
            "Établissements régionaux d'enseignement adapté"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/enseignement/conseiller-principal-d-education-101698",
        "studyramaSource": true,
        "isEmerging": false,
        "level": "Bac +5 (Master MEEF Métiers de la Vie Scolaire + Concours de CPE)",
        "salary": "🇫🇷 France : 1 900 € à 3 600 € net/mois selon l'échelon et indemnités (2 000 € net une fois titularisé) (Source : Studyrama / Grilles Éducation Nationale) • 🇸🇳 Sénégal : 230 000 à 480 000 FCFA net/mois (Corps des conseillers de vie scolaire / administration scolaire)",
        "salaryDetails": {
            "france": {
                "starter": "2 000 € net/mois (titularisé)",
                "experienced": "2 700 € net/mois",
                "senior": "3 600 € net/mois",
                "source": "Studyrama / Ministère de l'Éducation Nationale (France)"
            },
            "senegal": {
                "starter": "230 000 FCFA net/mois",
                "experienced": "330 000 FCFA net/mois",
                "senior": "480 000 FCFA net/mois",
                "source": "Ministère de l'Éducation Nationale du Sénégal"
            }
        },
        "targetAudience": "Élèves de 11 à 18 ans au collège et au lycée, familles et équipes éducatives",
        "workEnvironment": "Bureau de la vie scolaire, cours de récréation, internats scolaires, couloirs et salles d'étude",
        "summary": "Pilier du climat scolaire, le CPE assure le bon fonctionnement de la vie quotidienne au collège et au lycée. Il encadre l'équipe des surveillants (AED), veille à l'assiduité des élèves, régule les conflits et accompagne chaque jeune dans son épanouissement citoyen.",
        "missions": [
            "Veiller au respect du règlement intérieur, à la sécurité des élèves et au climat serein de l'établissement.",
            "Contrôler et suivre avec rigueur l'assiduité et la ponctualité des élèves, et lutter contre le décrochage scolaire.",
            "Manager et animer au quotidien l'équipe des assistants d'éducation (AED / surveillants).",
            "Mener des actions de prévention citoyenne (lutte contre le harcèlement, égalité filles-garçons, formation des délégués)."
        ],
        "activities": [
            "Traitement des absences, retards et échanges téléphoniques réguliers avec les familles.",
            "Entretiens éducatifs individuels avec les élèves en difficulté de comportement ou de motivation.",
            "Animation des réunions de service de la vie scolaire et planning de surveillance.",
            "Participation aux conseils de classe, cellules de veille éducative et commissions éducatives."
        ],
        "specialties": [
            "Climat scolaire & Médiation des conflits",
            "Lutte contre le harcèlement scolaire & cyberharcèlement",
            "Gestion des internats scolaires",
            "Formation des délégués élèves & Citoyenneté (CVC / CVL)",
            "Prévention du décrochage scolaire"
        ],
        "skills": {
            "hard": [
                "Connaissance approfondie du droit de l'éducation et de la réglementation scolaire",
                "Techniques d'entretien d'écoute, de médiation et de régulation des conflits",
                "Management d'équipe et organisation logistique de service",
                "Maîtrise des logiciels de vie scolaire (Pronote, La-Vie-Scolaire)"
            ],
            "soft": [
                "Grand sens de l'écoute, psychologie et empathie",
                "Autorité naturelle, fermeté bienveillante et équité",
                "Sang-froid et gestion remarquable du stress face aux urgences",
                "Discrétion professionnelle absolue et sens du devoir"
            ],
            "pedagogie": [
                "Accompagner l'adolescent dans la responsabilisation de ses actes",
                "Organiser des temps d'échange démocratiques pour les délégués de classe",
                "Valoriser les comportements solidaires et l'engagement associatif des jeunes"
            ],
            "communication": [
                "Désamorcer l'agressivité lors d'échanges tendus avec des parents ou élèves",
                "Assurer la liaison constante entre enseignants, direction et services sociaux",
                "Porter la parole de l'institution avec tact et pédagogie"
            ],
            "organisation": [
                "Élaborer les plannings de service des assistants d'éducation (surveillance, étude)",
                "Tracer méthodiquement les incidents et les mesures éducatives prises",
                "Organiser l'accueil des élèves lors des mouvements de début et fin de journée"
            ],
            "numerique": [
                "Gérer les modules de vie scolaire sur l'ENT pour la saisie des absences",
                "Exploiter les tableaux de bord statistiques d'absentéisme pour cibler les alertes",
                "Sensibiliser les élèves aux risques des réseaux sociaux et à l'identité numérique"
            ],
            "technical": [
                "Connaissance approfondie du droit de l'éducation et de la réglementation scolaire",
                "Techniques d'entretien d'écoute, de médiation et de régulation des conflits",
                "Management d'équipe et organisation logistique de service",
                "Maîtrise des logiciels de vie scolaire (Pronote, La-Vie-Scolaire)"
            ],
            "human": [
                "Grand sens de l'écoute, psychologie et empathie",
                "Autorité naturelle, fermeté bienveillante et équité",
                "Sang-froid et gestion remarquable du stress face aux urgences",
                "Discrétion professionnelle absolue et sens du devoir"
            ]
        },
        "qualities": [
            "Sens relationnel aigu",
            "Calme et diplomatie",
            "Rigueur et équité",
            "Esprit d'équipe",
            "Disponibilité"
        ],
        "studies": [
            "🇫🇷 France : Bac +5. Licence (Sciences de l'Éducation, Psychologie, Sociologie, Droit, Lettres...) + Master MEEF mention Encadrement Éducatif + Réussite au Concours de Recrutement de CPE.",
            "🇸🇳 Sénégal : Bac +3 à Bac +5. Licence ou Master + formation et concours à la FASTEF pour l'encadrement éducatif et la vie scolaire."
        ],
        "evolution": [
            "Personnel de direction : Principal-adjoint puis Proviseur d'établissement (sur concours)",
            "Inspecteur de l'Éducation Nationale (IEN)",
            "Formateur académique de CPE stagiaires"
        ],
        "dailySchedule": [
            {
                "time": "07:45",
                "activity": "Arrivée à la vie scolaire, point avec l'équipe des AED sur les surveillances de la journée et accueil des premiers élèves."
            },
            {
                "time": "08:15",
                "activity": "Traitement des absences du matin sur le logiciel et appel des familles des élèves non signalés."
            },
            {
                "time": "09:30",
                "activity": "Entretien individuel avec un élève de 4ème signalé pour un comportement conflictuel répété en classe."
            },
            {
                "time": "10:30",
                "activity": "Présence active dans la cour pendant la récréation, observation du climat et échange informel avec les élèves."
            },
            {
                "time": "11:15",
                "activity": "Réunion de la cellule de veille avec l'assistante sociale scolaire, l'infirmière et le PsyEN sur les situations préoccupantes."
            },
            {
                "time": "12:30",
                "activity": "Supervision du flux au réfectoire et de l'animation du foyer des élèves avec les surveillants."
            },
            {
                "time": "14:00",
                "activity": "Séance de formation des délégués de classe de 6ème à leur rôle au conseil de classe."
            },
            {
                "time": "15:30",
                "activity": "Entretien avec les parents d'un élève en situation de décrochage pour construire un contrat d'objectifs."
            },
            {
                "time": "17:15",
                "activity": "Débriefing de fin de journée avec les assistants d'éducation et point avec le Chef d'établissement."
            }
        ],
        "quiz": [
            {
                "question": "Quelle est l'une des responsabilités centrales du CPE dans un collège ou lycée ?",
                "options": [
                    "Faire passer les visites médicales",
                    "Animer et coordonner la vie scolaire, veiller à l'assiduité et manager l'équipe des surveillants (AED)",
                    "Réparer les ordinateurs de l'établissement",
                    "Gérer la comptabilité générale de l'école"
                ],
                "answer": 1,
                "explanation": "Le CPE est le responsable de l'organisation et de l'animation de la vie scolaire, garantissant le climat éducatif en collaboration avec l'équipe de direction."
            }
        ],
        "shortDescription": "Pilier du climat scolaire, le CPE assure le bon fonctionnement de la vie quotidienne au collège et au lycée. Il encadre l'équipe des surveillants (AED), veille à l'assiduité des élèves, régule les conflits et accompagne chaque jeune dans son épanouissement citoyen.",
        "longDescription": "Pilier du climat scolaire, le CPE assure le bon fonctionnement de la vie quotidienne au collège et au lycée. Il encadre l'équipe des surveillants (AED), veille à l'assiduité des élèves, régule les conflits et accompagne chaque jeune dans son épanouissement citoyen. Veiller au respect du règlement intérieur, à la sécurité des élèves et au climat serein de l'établissement. Contrôler et suivre avec rigueur l'assiduité et la ponctualité des élèves, et lutter contre le décrochage scolaire. Manager et animer au quotidien l'équipe des assistants d'éducation (AED / surveillants). Mener des actions de prévention citoyenne (lutte contre le harcèlement, égalité filles-garçons, formation des délégués).",
        "description": "Pilier du climat scolaire, le CPE assure le bon fonctionnement de la vie quotidienne au collège et au lycée. Il encadre l'équipe des surveillants (AED), veille à l'assiduité des élèves, régule les conflits et accompagne chaque jeune dans son épanouissement citoyen. Veiller au respect du règlement intérieur, à la sécurité des élèves et au climat serein de l'établissement. Contrôler et suivre avec rigueur l'assiduité et la ponctualité des élèves, et lutter contre le décrochage scolaire. Manager et animer au quotidien l'équipe des assistants d'éducation (AED / surveillants). Mener des actions de prévention citoyenne (lutte contre le harcèlement, égalité filles-garçons, formation des délégués).",
        "studyLevel": "Bac +5 (Master MEEF Métiers de la Vie Scolaire + Concours de CPE)",
        "hard": [
            "Connaissance approfondie du droit de l'éducation et de la réglementation scolaire",
            "Techniques d'entretien d'écoute, de médiation et de régulation des conflits",
            "Management d'équipe et organisation logistique de service",
            "Maîtrise des logiciels de vie scolaire (Pronote, La-Vie-Scolaire)"
        ],
        "soft": [
            "Grand sens de l'écoute, psychologie et empathie",
            "Autorité naturelle, fermeté bienveillante et équité",
            "Sang-froid et gestion remarquable du stress face aux urgences",
            "Discrétion professionnelle absolue et sens du devoir"
        ],
        "typicalDay": [
            {
                "time": "07:45",
                "activity": "Arrivée à la vie scolaire, point avec l'équipe des AED sur les surveillances de la journée et accueil des premiers élèves."
            },
            {
                "time": "08:15",
                "activity": "Traitement des absences du matin sur le logiciel et appel des familles des élèves non signalés."
            },
            {
                "time": "09:30",
                "activity": "Entretien individuel avec un élève de 4ème signalé pour un comportement conflictuel répété en classe."
            },
            {
                "time": "10:30",
                "activity": "Présence active dans la cour pendant la récréation, observation du climat et échange informel avec les élèves."
            },
            {
                "time": "11:15",
                "activity": "Réunion de la cellule de veille avec l'assistante sociale scolaire, l'infirmière et le PsyEN sur les situations préoccupantes."
            },
            {
                "time": "12:30",
                "activity": "Supervision du flux au réfectoire et de l'animation du foyer des élèves avec les surveillants."
            },
            {
                "time": "14:00",
                "activity": "Séance de formation des délégués de classe de 6ème à leur rôle au conseil de classe."
            },
            {
                "time": "15:30",
                "activity": "Entretien avec les parents d'un élève en situation de décrochage pour construire un contrat d'objectifs."
            },
            {
                "time": "17:15",
                "activity": "Débriefing de fin de journée avec les assistants d'éducation et point avec le Chef d'établissement."
            }
        ],
        "daily": {
            "morning": "Arrivée à la vie scolaire, point avec l'équipe des AED sur les surveillances de la journée et accueil des premiers élèves. • Traitement des absences du matin sur le logiciel et appel des familles des élèves non signalés. • Entretien individuel avec un élève de 4ème signalé pour un comportement conflictuel répété en classe. • Présence active dans la cour pendant la récréation, observation du climat et échange informel avec les élèves. • Réunion de la cellule de veille avec l'assistante sociale scolaire, l'infirmière et le PsyEN sur les situations préoccupantes. • Supervision du flux au réfectoire et de l'animation du foyer des élèves avec les surveillants.",
            "afternoon": "Séance de formation des délégués de classe de 6ème à leur rôle au conseil de classe. • Entretien avec les parents d'un élève en situation de décrochage pour construire un contrat d'objectifs. • Débriefing de fin de journée avec les assistants d'éducation et point avec le Chef d'établissement.",
            "challenges": "Régulation des dynamiques de groupe, transmission bienveillante et exigence éducative."
        },
        "saviezVous": {
            "fait": "Le corps des Conseillers Principaux d'Éducation (CPE) est une spécificité reconnue du système éducatif français, créé en 1970 pour remplacer les anciens 'surveillants généraux' par des cadres pédagogiques de l'éducation.",
            "chiffre": "Environ 12 500 CPE veillent quotidiennement au climat scolaire et au suivi éducatif de plusieurs millions d'adolescents."
        }
    },
    {
        "id": "assistant-education",
        "slug": "assistant-education",
        "title": "Assistant d'Éducation (AED / Surveillant)",
        "aliases": [
            "Surveillant de collège / lycée",
            "Pion (terme usuel)",
            "AED vie scolaire",
            "Animateur d'internat"
        ],
        "icon": "🛡️",
        "image": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "education-formation",
            "lettres-langues-sciences-humaines"
        ],
        "domain": "Orientation, Vie Scolaire & Inclusion Éducative",
        "domainId": "orientation-vie-scolaire-inclusion",
        "subdomain": "Vie scolaire & Climat éducatif",
        "sectors": [
            "Éducation Nationale (Collèges, Lycées publics et privés)",
            "Internats scolaires"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/enseignement/assistant-d-education-101694",
        "studyramaSource": true,
        "isEmerging": false,
        "level": "Baccalauréat à Bac +3 (Contrat ouvert aux étudiants de l'enseignement supérieur)",
        "salary": "🇫🇷 France : Rémunéré au SMIC horaire ou mensuel (environ 1 400 € net/mois pour un temps plein de 35h, proratisé pour les temps partiels étudiants) (Source : Studyrama) • 🇸🇳 Sénégal : 110 000 à 180 000 FCFA net/mois (Surveillants généraux adjoints et agents de vie scolaire)",
        "salaryDetails": {
            "france": {
                "starter": "1 400 € net/mois (Temps plein SMIC)",
                "experienced": "1 450 € net/mois",
                "senior": "1 500 € net/mois",
                "source": "Studyrama / Ministère de l'Éducation Nationale (France)"
            },
            "senegal": {
                "starter": "110 000 FCFA net/mois",
                "experienced": "145 000 FCFA net/mois",
                "senior": "180 000 FCFA net/mois",
                "source": "Secteur éducatif sénégalais"
            }
        },
        "targetAudience": "Élèves de 11 à 18 ans au collège et au lycée",
        "workEnvironment": "Cour de récréation, couloirs, réfectoire, permanence d'étude, internat",
        "summary": "Au contact direct des élèves tout au long de la journée, l'assistant d'éducation encadre les temps hors classe : récréations, heures d'étude, demi-pension et nuits d'internat. Souvent étudiant, il combine autorité de proximité et écoute bienveillante.",
        "missions": [
            "Surveiller et sécuriser les déplacements des élèves dans l'enceinte de l'établissement (entrées, sorties, récréations).",
            "Encadrer les heures d'étude surveillée et apporter une aide aux devoirs aux collégiens et lycéens.",
            "Surveiller les dortoirs de l'internat la nuit et assurer le réveil des élèves.",
            "Participer au contrôle des absences et retards au bureau de la vie scolaire sous l'autorité du CPE."
        ],
        "activities": [
            "Accueil au portail et vérification des carnets de correspondance des élèves.",
            "Gestion du calme et du travail silencieux en salle de permanence.",
            "Surveillance du réfectoire pendant le service de restauration scolaire.",
            "Saisie informatique des billets de retard et transmission des justificatifs d'absence."
        ],
        "specialties": [
            "Surveillance d'externat & demi-pension",
            "Surveillance d'internat de nuit",
            "Aide aux devoirs & Tutorat scolaire (Devoirs Faits)",
            "Animation du foyer socio-éducatif"
        ],
        "skills": {
            "hard": [
                "Connaissance des règles de sécurité des établissements scolaires",
                "Maîtrise des logiciels de vie scolaire pour l'enregistrement des absences",
                "Notions pédagogiques pour l'aide aux devoirs au collège",
                "Gestes de premiers secours (PSC1)"
            ],
            "soft": [
                "Fermeté bienveillante et sens de la juste distance avec les élèves",
                "Patience, écoute et calme face aux provocations adolescentes",
                "Réactivité et vigilance constante",
                "Esprit d'équipe avec les autres assistants d'éducation et le CPE"
            ],
            "pedagogie": [
                "Créer une atmosphère propice à la concentration en salle d'étude",
                "Aider un élève à s'organiser dans son travail personnel",
                "Expliquer le bien-fondé d'une règle plutôt que de sanctionner arbitrairement"
            ],
            "communication": [
                "S'adresser aux adolescents avec respect tout en exigeant le respect des règles",
                "Rendre compte fidèlement des incidents au CPE",
                "Accueillir avec courtoisie les personnes extérieures à l'établissement"
            ],
            "organisation": [
                "Respecter scrupuleusement les horaires de prise de poste aux différents points de surveillance",
                "Classer avec rigueur les billets d'absence et les justificatifs médicaux",
                "Gérer les listes d'élèves autorisés à sortir selon leur régime de scolarité"
            ],
            "numerique": [
                "Utiliser les postes informatiques de la vie scolaire",
                "Saisir les incidents et notifications sur Pronote",
                "Pointer les présences des élèves en permanence sur tablette"
            ],
            "technical": [
                "Connaissance des règles de sécurité des établissements scolaires",
                "Maîtrise des logiciels de vie scolaire pour l'enregistrement des absences",
                "Notions pédagogiques pour l'aide aux devoirs au collège",
                "Gestes de premiers secours (PSC1)"
            ],
            "human": [
                "Fermeté bienveillante et sens de la juste distance avec les élèves",
                "Patience, écoute et calme face aux provocations adolescentes",
                "Réactivité et vigilance constante",
                "Esprit d'équipe avec les autres assistants d'éducation et le CPE"
            ]
        },
        "qualities": [
            "Vigilance",
            "Sens de l'autorité",
            "Patience et sang-froid",
            "Dynamisme",
            "Ponctualité"
        ],
        "studies": [
            "🇫🇷 France : Baccalauréat minimum. Recrutement direct par les chefs d'établissement sous contrat de droit public (CDD de 1 an renouvelable jusqu'à 6 ans). Emploi idéal pour les étudiants préparant les concours de l'enseignement (CRPE, CAPES, CPE).",
            "🇸猊 Sénégal : Baccalauréat ou Licence. Recrutement contractuel dans les collèges et lycées."
        ],
        "evolution": [
            "Passage des concours d'État : CPE, Professeur des écoles (CRPE), Professeur de collège/lycée (CAPES)",
            "Métiers de l'animation socio-culturelle ou de l'éducateur spécialisé",
            "Concours administratifs de la fonction publique (adjoint administratif, secrétaire)"
        ],
        "dailySchedule": [
            {
                "time": "07:45",
                "activity": "Prise de service au portail de l'établissement : contrôle visuel des carnets et accueil des élèves."
            },
            {
                "time": "08:15",
                "activity": "Saisie informatique des absences du premier cours au bureau de la vie scolaire."
            },
            {
                "time": "09:00",
                "activity": "Surveillance d'une salle de permanence d'étude de 40 collégiens : maintien du silence et aide aux devoirs."
            },
            {
                "time": "10:15",
                "activity": "Surveillance de la récréation dans la cour : prévention des bousculades et régulation d'un différend."
            },
            {
                "time": "11:30",
                "activity": "Gestion des flux d'élèves à l'entrée du restaurant scolaire et surveillance du réfectoire."
            },
            {
                "time": "13:30",
                "activity": "Point de transmission avec le CPE sur les absences de la matinée et classement des justificatifs."
            },
            {
                "time": "14:00",
                "activity": "Animation d'un atelier 'Devoirs Faits' avec un petit groupe de quatre élèves de 6ème."
            },
            {
                "time": "16:30",
                "activity": "Surveillance de la sortie des cours au portail et fin de service."
            }
        ],
        "quiz": [
            {
                "question": "Quel est le niveau de diplôme minimal pour être recruté comme Assistant d'Éducation (AED) en France ?",
                "options": [
                    "Le Doctorat",
                    "Le Baccalauréat (ou équivalent)",
                    "Le diplôme d'ingénieur",
                    "Aucun diplôme"
                ],
                "answer": 1,
                "explanation": "Le Baccalauréat est le niveau minimum requis pour postuler comme assistant d'éducation, un contrat souvent occupé par des étudiants préparant les concours."
            }
        ],
        "shortDescription": "Au contact direct des élèves tout au long de la journée, l'assistant d'éducation encadre les temps hors classe : récréations, heures d'étude, demi-pension et nuits d'internat. Souvent étudiant, il combine autorité de proximité et écoute bienveillante.",
        "longDescription": "Au contact direct des élèves tout au long de la journée, l'assistant d'éducation encadre les temps hors classe : récréations, heures d'étude, demi-pension et nuits d'internat. Souvent étudiant, il combine autorité de proximité et écoute bienveillante. Surveiller et sécuriser les déplacements des élèves dans l'enceinte de l'établissement (entrées, sorties, récréations). Encadrer les heures d'étude surveillée et apporter une aide aux devoirs aux collégiens et lycéens. Surveiller les dortoirs de l'internat la nuit et assurer le réveil des élèves. Participer au contrôle des absences et retards au bureau de la vie scolaire sous l'autorité du CPE.",
        "description": "Au contact direct des élèves tout au long de la journée, l'assistant d'éducation encadre les temps hors classe : récréations, heures d'étude, demi-pension et nuits d'internat. Souvent étudiant, il combine autorité de proximité et écoute bienveillante. Surveiller et sécuriser les déplacements des élèves dans l'enceinte de l'établissement (entrées, sorties, récréations). Encadrer les heures d'étude surveillée et apporter une aide aux devoirs aux collégiens et lycéens. Surveiller les dortoirs de l'internat la nuit et assurer le réveil des élèves. Participer au contrôle des absences et retards au bureau de la vie scolaire sous l'autorité du CPE.",
        "studyLevel": "Baccalauréat à Bac +3 (Contrat ouvert aux étudiants de l'enseignement supérieur)",
        "hard": [
            "Connaissance des règles de sécurité des établissements scolaires",
            "Maîtrise des logiciels de vie scolaire pour l'enregistrement des absences",
            "Notions pédagogiques pour l'aide aux devoirs au collège",
            "Gestes de premiers secours (PSC1)"
        ],
        "soft": [
            "Fermeté bienveillante et sens de la juste distance avec les élèves",
            "Patience, écoute et calme face aux provocations adolescentes",
            "Réactivité et vigilance constante",
            "Esprit d'équipe avec les autres assistants d'éducation et le CPE"
        ],
        "typicalDay": [
            {
                "time": "07:45",
                "activity": "Prise de service au portail de l'établissement : contrôle visuel des carnets et accueil des élèves."
            },
            {
                "time": "08:15",
                "activity": "Saisie informatique des absences du premier cours au bureau de la vie scolaire."
            },
            {
                "time": "09:00",
                "activity": "Surveillance d'une salle de permanence d'étude de 40 collégiens : maintien du silence et aide aux devoirs."
            },
            {
                "time": "10:15",
                "activity": "Surveillance de la récréation dans la cour : prévention des bousculades et régulation d'un différend."
            },
            {
                "time": "11:30",
                "activity": "Gestion des flux d'élèves à l'entrée du restaurant scolaire et surveillance du réfectoire."
            },
            {
                "time": "13:30",
                "activity": "Point de transmission avec le CPE sur les absences de la matinée et classement des justificatifs."
            },
            {
                "time": "14:00",
                "activity": "Animation d'un atelier 'Devoirs Faits' avec un petit groupe de quatre élèves de 6ème."
            },
            {
                "time": "16:30",
                "activity": "Surveillance de la sortie des cours au portail et fin de service."
            }
        ],
        "daily": {
            "morning": "Prise de service au portail de l'établissement : contrôle visuel des carnets et accueil des élèves. • Saisie informatique des absences du premier cours au bureau de la vie scolaire. • Surveillance d'une salle de permanence d'étude de 40 collégiens : maintien du silence et aide aux devoirs. • Surveillance de la récréation dans la cour : prévention des bousculades et régulation d'un différend. • Gestion des flux d'élèves à l'entrée du restaurant scolaire et surveillance du réfectoire.",
            "afternoon": "Point de transmission avec le CPE sur les absences de la matinée et classement des justificatifs. • Animation d'un atelier 'Devoirs Faits' avec un petit groupe de quatre élèves de 6ème. • Surveillance de la sortie des cours au portail et fin de service.",
            "challenges": "Régulation des dynamiques de groupe, transmission bienveillante et exigence éducative."
        },
        "saviezVous": {
            "fait": "Créé en 2003, le statut d'assistant d'éducation (AED) offre des aménagements d'emploi du temps spécifiques aux étudiants pour leur permettre de concilier leurs études supérieures et leur activité professionnelle.",
            "chiffre": "Plus de 60 000 assistants d'éducation exercent dans les collèges et lycées français."
        }
    },
    {
        "id": "psychologue-scolaire",
        "slug": "psychologue-scolaire",
        "title": "Psychologue de l'Éducation Nationale (PsyEN 1er degré - Éducation, Développement & Apprentissages)",
        "aliases": [
            "Psychologue scolaire",
            "PsyEN EDA",
            "Psychologue du premier degré",
            "Membre du RASED"
        ],
        "icon": "🧠",
        "image": "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "education-formation",
            "lettres-langues-sciences-humaines",
            "sante-soins-paramedical"
        ],
        "domain": "Orientation, Vie Scolaire & Inclusion Éducative",
        "domainId": "orientation-vie-scolaire-inclusion",
        "subdomain": "Psychologie de l'Éducation Nationale (PsyEN)",
        "sectors": [
            "Écoles maternelles et élémentaires de l'Éducation Nationale",
            "Réseaux d'Aides Spécialisées aux Élèves en Difficulté (RASED)",
            "Centres Médico-Psycho-Pédagogiques (CMPP)"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/psychologie/psychologue-scolaire-1267",
        "studyramaSource": true,
        "isEmerging": false,
        "level": "Bac +5 (Master de Psychologie + Concours d'État de Psychologue de l'Éducation Nationale - PsyEN spécialité EDA)",
        "salary": "🇫🇷 France : 1 900 € à 3 600 € net/mois selon l'échelon et primes d'exercice (Source : Studyrama / Grilles Éducation Nationale) • 🇸🇳 Sénégal : 230 000 à 480 000 FCFA net/mois (Corps des psychologues scolaires et conseillers d'orientation)",
        "salaryDetails": {
            "france": {
                "starter": "1 900 € net/mois",
                "experienced": "2 700 € net/mois",
                "senior": "3 600 € net/mois",
                "source": "Studyrama / Ministère de l'Éducation Nationale (France)"
            },
            "senegal": {
                "starter": "230 000 FCFA net/mois",
                "experienced": "330 000 FCFA net/mois",
                "senior": "480 000 FCFA net/mois",
                "source": "Ministère de l'Éducation Nationale du Sénégal"
            }
        },
        "targetAudience": "Enfants de 2 à 11 ans scolarisés en maternelle et primaire, parents et enseignants",
        "workEnvironment": "Bureau RASED en école primaire, écoles maternelles et élémentaires d'une circonscription, réunions de synthèse",
        "summary": "Spécialiste du développement de l'enfant et des mécanismes cognitifs, le psychologue scolaire intervient au sein des écoles primaires pour prévenir les difficultés d'apprentissage, réaliser des bilans psychologiques et favoriser l'inclusion de tous les enfants.",
        "missions": [
            "Réaliser des bilans psychologiques et psychométriques (tests d'intelligence WISC, épreuves projectives) pour éclairer les difficultés d'un enfant.",
            "Apporter une écoute clinique et un soutien aux enfants traversant des épreuves émotionnelles, familiales ou comportementales.",
            "Conseiller les enseignants sur les aménagements pédagogiques à mettre en place pour les élèves à besoins particuliers.",
            "Participer aux équipes éducatives, aux synthèses RASED et aux réunions de suivi de scolarisation (ESS) pour les notifications MDPH."
        ],
        "activities": [
            "Passation de bilans psychologiques individuels en cabinet scolaire.",
            "Observations cliniques d'élèves en situation de classe ou de récréation.",
            "Entretiens approfondis avec les parents d'élèves pour restituer les bilans et orienter vers les structures adaptées.",
            "Collaboration étroite avec les médecins scolaires, orthophonistes et pédopsychiatres du secteur."
        ],
        "specialties": [
            "Psychologie du développement de l'enfant",
            "Évaluation des fonctions cognitives & Troubles dys",
            "Inclusion scolaire du handicap & Troubles du spectre de l'autisme (TSA)",
            "Soutien à la parentalité & Protection de l'enfance"
        ],
        "skills": {
            "hard": [
                "Titre officiel de Psychologue (loi de 1985) et maîtrise des tests standardisés (WISC-V, WPPSI-IV)",
                "Clinique de l'enfant, psychopathologie et psychologie cognitive des apprentissages",
                "Textes officiels régissant la scolarisation des élèves en situation de handicap (loi de 2005)",
                "Déontologie stricte et respect du secret professionnel partagé"
            ],
            "soft": [
                "Neutralité bienveillante, grande écoute et empathie sans jugement",
                "Capacité à mettre les jeunes enfants en confiance lors des passations de tests",
                "Tact et diplomatie pour aborder des sujets délicats avec les parents",
                "Aptitude à travailler en réseau pluridisciplinaire"
            ],
            "pedagogie": [
                "Traduire des scores psychométriques abstraits en pistes pédagogiques concrètes pour l'enseignant",
                "Aider l'enfant à comprendre ses propres points forts et leviers de progression",
                "Accompagner les équipes dans le décodage des manifestations d'angoisse scolaire"
            ],
            "communication": [
                "Rédiger des comptes-rendus psychologiques clairs et nuancés",
                "Restituer les bilans aux familles avec délicatesse et bienveillance",
                "Coordonner les démarches avec les services hospitaliers et médico-sociaux"
            ],
            "organisation": [
                "Planifier les bilans sur les différentes écoles de la circonscription",
                "Gérer les urgences tout en respectant les délais des dossiers MDPH",
                "Tenir à jour les dossiers psychologiques sous pli confidentiel sécurisé"
            ],
            "numerique": [
                "Utiliser les logiciels informatisés de dépouillement des tests psychométriques",
                "Sécuriser les transmissions de bilans numériques selon le RGPD de santé",
                "Consulter les dossiers scolaires numériques dans le respect de la confidentialité"
            ],
            "technical": [
                "Titre officiel de Psychologue (loi de 1985) et maîtrise des tests standardisés (WISC-V, WPPSI-IV)",
                "Clinique de l'enfant, psychopathologie et psychologie cognitive des apprentissages",
                "Textes officiels régissant la scolarisation des élèves en situation de handicap (loi de 2005)",
                "Déontologie stricte et respect du secret professionnel partagé"
            ],
            "human": [
                "Neutralité bienveillante, grande écoute et empathie sans jugement",
                "Capacité à mettre les jeunes enfants en confiance lors des passations de tests",
                "Tact et diplomatie pour aborder des sujets délicats avec les parents",
                "Aptitude à travailler en réseau pluridisciplinaire"
            ]
        },
        "qualities": [
            "Finesse d'analyse clinique",
            "Empathie et bienveillance",
            "Patience et douceur",
            "Neutralité déontologique",
            "Rigueur intellectuelle"
        ],
        "studies": [
            "🇫🇷 France : Bac +5. Licence de Psychologie + Master en Psychologie (du développement, de l'éducation ou clinique) permettant l'obtention du titre de psychologue + Réussite au Concours de Psychologue de l'Éducation Nationale (PsyEN spécialité éducation, développement et apprentissages).",
            "🇸🇳 Sénégal : Bac +5. Master en Psychologie (UCAD) + Concours et formation d'orientation et de psychologie scolaire."
        ],
        "evolution": [
            "Maître de stage pour les étudiants en psychologie",
            "Formateur académique",
            "Directeur de Centre d'Information et d'Orientation (DCIO)",
            "Inspecteur de l'Éducation Nationale chargé de l'information et de l'orientation (IEN-IO)"
        ],
        "dailySchedule": [
            {
                "time": "08:30",
                "activity": "Arrivée dans une école de la circonscription, échange préalable avec l'enseignant d'un élève de CE1 en grande difficulté d'apprentissage."
            },
            {
                "time": "09:00",
                "activity": "Passation de la première partie du test d'efficience intellectuelle (WISC-V) avec l'enfant dans le bureau RASED."
            },
            {
                "time": "10:30",
                "activity": "Observation attentive de l'élève en situation de récréation : interactions avec ses pairs et motricité."
            },
            {
                "time": "11:15",
                "activity": "Dépouillement des subtests du matin et cotation des épreuves de mémoire de travail et vitesse de traitement."
            },
            {
                "time": "12:15",
                "activity": "Déjeuner et réunion de synthèse RASED avec l'enseignant spécialisé et le maître formateur."
            },
            {
                "time": "14:00",
                "activity": "Entretien de restitution de bilan avec la mère d'un élève de Grande Section de maternelle et préconisation d'un bilan orthophonique."
            },
            {
                "time": "15:30",
                "activity": "Réunion d'équipe éducative pour examiner la mise en place d'un PAP (Plan d'Accompagnement Personnalisé)."
            },
            {
                "time": "17:00",
                "activity": "Rédaction du compte-rendu psychologique confidentiel et fin de journée."
            }
        ],
        "quiz": [
            {
                "question": "Le psychologue de l'Éducation Nationale EDA exerce principalement auprès de quel public ?",
                "options": [
                    "Les étudiants d'université",
                    "Les enfants scolarisés en école maternelle et élémentaire (premier degré)",
                    "Les demandeurs d'emploi adultes",
                    "Les dirigeants d'entreprise"
                ],
                "answer": 1,
                "explanation": "Le PsyEN spécialité EDA (éducation, développement et apprentissages) intervient spécifiquement dans les écoles maternelles et primaires au sein du RASED."
            }
        ],
        "shortDescription": "Spécialiste du développement de l'enfant et des mécanismes cognitifs, le psychologue scolaire intervient au sein des écoles primaires pour prévenir les difficultés d'apprentissage, réaliser des bilans psychologiques et favoriser l'inclusion de tous les enfants.",
        "longDescription": "Spécialiste du développement de l'enfant et des mécanismes cognitifs, le psychologue scolaire intervient au sein des écoles primaires pour prévenir les difficultés d'apprentissage, réaliser des bilans psychologiques et favoriser l'inclusion de tous les enfants. Réaliser des bilans psychologiques et psychométriques (tests d'intelligence WISC, épreuves projectives) pour éclairer les difficultés d'un enfant. Apporter une écoute clinique et un soutien aux enfants traversant des épreuves émotionnelles, familiales ou comportementales. Conseiller les enseignants sur les aménagements pédagogiques à mettre en place pour les élèves à besoins particuliers. Participer aux équipes éducatives, aux synthèses RASED et aux réunions de suivi de scolarisation (ESS) pour les notifications MDPH.",
        "description": "Spécialiste du développement de l'enfant et des mécanismes cognitifs, le psychologue scolaire intervient au sein des écoles primaires pour prévenir les difficultés d'apprentissage, réaliser des bilans psychologiques et favoriser l'inclusion de tous les enfants. Réaliser des bilans psychologiques et psychométriques (tests d'intelligence WISC, épreuves projectives) pour éclairer les difficultés d'un enfant. Apporter une écoute clinique et un soutien aux enfants traversant des épreuves émotionnelles, familiales ou comportementales. Conseiller les enseignants sur les aménagements pédagogiques à mettre en place pour les élèves à besoins particuliers. Participer aux équipes éducatives, aux synthèses RASED et aux réunions de suivi de scolarisation (ESS) pour les notifications MDPH.",
        "studyLevel": "Bac +5 (Master de Psychologie + Concours d'État de Psychologue de l'Éducation Nationale - PsyEN spécialité EDA)",
        "hard": [
            "Titre officiel de Psychologue (loi de 1985) et maîtrise des tests standardisés (WISC-V, WPPSI-IV)",
            "Clinique de l'enfant, psychopathologie et psychologie cognitive des apprentissages",
            "Textes officiels régissant la scolarisation des élèves en situation de handicap (loi de 2005)",
            "Déontologie stricte et respect du secret professionnel partagé"
        ],
        "soft": [
            "Neutralité bienveillante, grande écoute et empathie sans jugement",
            "Capacité à mettre les jeunes enfants en confiance lors des passations de tests",
            "Tact et diplomatie pour aborder des sujets délicats avec les parents",
            "Aptitude à travailler en réseau pluridisciplinaire"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Arrivée dans une école de la circonscription, échange préalable avec l'enseignant d'un élève de CE1 en grande difficulté d'apprentissage."
            },
            {
                "time": "09:00",
                "activity": "Passation de la première partie du test d'efficience intellectuelle (WISC-V) avec l'enfant dans le bureau RASED."
            },
            {
                "time": "10:30",
                "activity": "Observation attentive de l'élève en situation de récréation : interactions avec ses pairs et motricité."
            },
            {
                "time": "11:15",
                "activity": "Dépouillement des subtests du matin et cotation des épreuves de mémoire de travail et vitesse de traitement."
            },
            {
                "time": "12:15",
                "activity": "Déjeuner et réunion de synthèse RASED avec l'enseignant spécialisé et le maître formateur."
            },
            {
                "time": "14:00",
                "activity": "Entretien de restitution de bilan avec la mère d'un élève de Grande Section de maternelle et préconisation d'un bilan orthophonique."
            },
            {
                "time": "15:30",
                "activity": "Réunion d'équipe éducative pour examiner la mise en place d'un PAP (Plan d'Accompagnement Personnalisé)."
            },
            {
                "time": "17:00",
                "activity": "Rédaction du compte-rendu psychologique confidentiel et fin de journée."
            }
        ],
        "daily": {
            "morning": "Arrivée dans une école de la circonscription, échange préalable avec l'enseignant d'un élève de CE1 en grande difficulté d'apprentissage. • Passation de la première partie du test d'efficience intellectuelle (WISC-V) avec l'enfant dans le bureau RASED. • Observation attentive de l'élève en situation de récréation : interactions avec ses pairs et motricité. • Dépouillement des subtests du matin et cotation des épreuves de mémoire de travail et vitesse de traitement. • Déjeuner et réunion de synthèse RASED avec l'enseignant spécialisé et le maître formateur.",
            "afternoon": "Entretien de restitution de bilan avec la mère d'un élève de Grande Section de maternelle et préconisation d'un bilan orthophonique. • Réunion d'équipe éducative pour examiner la mise en place d'un PAP (Plan d'Accompagnement Personnalisé). • Rédaction du compte-rendu psychologique confidentiel et fin de journée.",
            "challenges": "Régulation des dynamiques de groupe, transmission bienveillante et exigence éducative."
        },
        "saviezVous": {
            "fait": "Depuis la réforme de 2017, les psychologues scolaires et conseillers d'orientation sont réunis au sein d'un corps unique : les Psychologues de l'Éducation Nationale (PsyEN), avec la spécialité EDA pour le 1er degré et EDO pour le 2nd degré.",
            "chiffre": "Chaque psychologue de l'Éducation Nationale EDA suit en moyenne un secteur de 1 200 à 1 500 élèves répartis sur plusieurs écoles maternelles et élémentaires."
        }
    },
    {
        "id": "inspecteur-education-nationale",
        "slug": "inspecteur-education-nationale",
        "title": "Inspecteur de l'Éducation Nationale (IEN)",
        "aliases": [
            "IEN",
            "Inspecteur du premier degré",
            "Inspecteur de circonscription",
            "Cadre supérieur de l'Éducation Nationale"
        ],
        "icon": "🧐",
        "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "education-formation",
            "droit-management"
        ],
        "domain": "Direction, Encadrement, Administration & Inspection Scolaire",
        "domainId": "direction-administration-inspection",
        "subdomain": "Inspection académique (IEN, IA-IPR)",
        "sectors": [
            "Ministère de l'Éducation Nationale (Services déconcentrés, Rectorats, DSDEN)",
            "Circonscriptions du premier degré",
            "Enseignement technique et professionnel"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/enseignement/inspecteur-de-l-education-nationale-101688",
        "studyramaSource": true,
        "isEmerging": false,
        "level": "Bac +5 + minimum 5 ans d'expérience dans l'enseignement ou l'encadrement + Concours d'État d'IEN",
        "salary": "🇫🇷 France : 32 739 € nets/an en début de carrière (environ 2 700 € net/mois) jusqu'à 44 343 € nets/an en fin de carrière (environ 3 700 € net/mois hors primes de responsabilité) (Source : Studyrama / Grilles Éducation Nationale) • 🇸🇳 Sénégal : 450 000 à 850 000 FCFA net/mois (Corps des inspecteurs de l'enseignement élémentaire et moyen - IEF)",
        "salaryDetails": {
            "france": {
                "starter": "2 700 € net/mois (32 739 € nets annuels début)",
                "experienced": "3 200 € net/mois",
                "senior": "3 700 € à 4 500 € net/mois (44 343 € nets annuels fin)",
                "source": "Studyrama / Ministère de l'Éducation Nationale (France)"
            },
            "senegal": {
                "starter": "450 000 FCFA net/mois",
                "experienced": "650 000 FCFA net/mois",
                "senior": "850 000 FCFA net/mois",
                "source": "Inspection d'Académie (IA) / Ministère de l'Éducation Nationale du Sénégal"
            }
        },
        "targetAudience": "Professeurs des écoles, directeurs d'écoles, équipes pédagogiques et cadres institutionnels",
        "workEnvironment": "Bureaux de l'Inspection de circonscription, écoles primaires du secteur, Rectorat et DSDEN",
        "summary": "Cadre supérieur de l'Éducation Nationale, l'Inspecteur de l'Éducation Nationale (IEN) pilote la politique éducative sur sa circonscription. Il évalue les enseignants, anime la formation continue, conseille les directeurs d'école et veille à la mise en œuvre rigoureuse des programmes officiels.",
        "missions": [
            "Contrôler la conformité des enseignements aux programmes officiels et évaluer la valeur professionnelle des enseignants (Rendez-vous de Carrière).",
            "Piloter les projets pédagogiques et impulser les priorités ministérielles (maîtrise de la langue, mathématiques, inclusion).",
            "Organiser le plan de formation continue des enseignants et animer l'équipe de conseillers pédagogiques de circonscription (CPC).",
            "Conseiller et soutenir les directeurs d'école dans la gestion des situations complexes ou conflictuelles."
        ],
        "activities": [
            "Visites d'inspection en classe, observation des séances pédagogiques et entretien approfondi avec l'enseignant.",
            "Rédaction de rapports d'évaluation détaillés avec préconisations de carrière et pistes d'amélioration.",
            "Animation de séminaires et de journées de formation pour les directeurs d'école et enseignants.",
            "Gestion des relations institutionnelles avec les maires, les élus locaux et les représentants de parents d'élèves."
        ],
        "specialties": [
            "Enseignement primaire (Circonscription 1er degré)",
            "Enseignement technique (IEN-ET) & Enseignement général (IEN-EG)",
            "Information et orientation (IEN-IO)",
            "Adaptation scolaire et scolarisation des élèves handicapés (IEN-ASH)"
        ],
        "skills": {
            "hard": [
                "Maîtrise juridique et réglementaire du système éducatif et du droit de la fonction publique",
                "Expertise didactique et méthodologique de très haut niveau sur les apprentissages",
                "Techniques d'évaluation des compétences professionnelles et de conduite d'entretien de carrière",
                "Management public et pilotage stratégique de circonscription"
            ],
            "soft": [
                "Autorité morale incontestable et sens élevé de l'État",
                "Bienveillance exigeante, diplomatie et qualités d'écoute",
                "Capacité d'analyse stratégique et vision prospective",
                "Sang-froid dans la résolution des crises et conflits locaux"
            ],
            "pedagogie": [
                "Identifier les leviers d'amélioration pédagogique d'un enseignant",
                "Concevoir des parcours de formation continue innovants",
                "Diffuser les recherches en sciences de l'éducation auprès des praticiens"
            ],
            "communication": [
                "Formuler des retours constructifs et stimulants lors des bilans professionnels",
                "Négocier avec les municipalités sur la carte scolaire et les ouvertures de classes",
                "Porter le discours institutionnel avec conviction et clarté"
            ],
            "organisation": [
                "Gérer le calendrier des rendez-vous de carrière sur l'ensemble des écoles du secteur",
                "Coordonner le travail de l'équipe de circonscription (secrétaires, CPC, enseignants référents)",
                "Réguler les flux et affectations des personnels remplaçants"
            ],
            "numerique": [
                "Exploiter les applications ministérielles de gestion des carrières (SIAE, I-Prof)",
                "Analyser les indicateurs statistiques des évaluations nationales d'élèves",
                "Promouvoir le déploiement du numérique éducatif dans les écoles de sa circonscription"
            ],
            "technical": [
                "Maîtrise juridique et réglementaire du système éducatif et du droit de la fonction publique",
                "Expertise didactique et méthodologique de très haut niveau sur les apprentissages",
                "Techniques d'évaluation des compétences professionnelles et de conduite d'entretien de carrière",
                "Management public et pilotage stratégique de circonscription"
            ],
            "human": [
                "Autorité morale incontestable et sens élevé de l'État",
                "Bienveillance exigeante, diplomatie et qualités d'écoute",
                "Capacité d'analyse stratégique et vision prospective",
                "Sang-froid dans la résolution des crises et conflits locaux"
            ]
        },
        "qualities": [
            "Rigueur intellectuelle et morale",
            "Équité et discernement",
            "Sens de l'écoute et diplomatie",
            "Leadership pédagogique",
            "Haute conscience professionnelle"
        ],
        "studies": [
            "🇫🇷 France : Bac +5 + Justifier d'au moins 5 ans de services effectifs en tant qu'enseignant titulaire, CPE ou personnel de direction + Réussite au Concours de recrutement d'Inspecteur de l'Éducation Nationale (IEN) + formation statutaire à l'IH2EF (Institut des Hautes Études de l'Éducation et de la Formation).",
            "🇸🇳 Sénégal : Bac +5 + Expérience d'enseignement confirmée + Réussite au concours de recrutement des Inspecteurs de l'Éducation et de la Formation (IEF) à la FASTEF / UCAD."
        ],
        "evolution": [
            "Inspecteur d'Académie - Directeur Académique des Services de l'Éducation Nationale (DASEN)",
            "Inspecteur Général de l'Éducation, du Sport et de la Recherche (IGÉSR)",
            "Directeur de cabinet rectoral ou expert ministériel"
        ],
        "dailySchedule": [
            {
                "time": "08:15",
                "activity": "Arrivée dans une école rurale de la circonscription pour la visite d'inspection d'une professeure des écoles en classe de CM1."
            },
            {
                "time": "08:30",
                "activity": "Observation attentive de la séance d'apprentissage en résolution de problèmes mathématiques et analyse des cahiers d'élèves."
            },
            {
                "time": "10:30",
                "activity": "Entretien professionnel approfondi avec l'enseignante : analyse réflexive, points forts et axes d'évolution."
            },
            {
                "time": "12:00",
                "activity": "Point rapide avec le directeur de l'école sur le projet d'école et les effectifs prévisionnels pour la rentrée."
            },
            {
                "time": "13:30",
                "activity": "Retour au bureau de circonscription et réunion de pilotage avec les trois conseillers pédagogiques sur le plan de formation en français."
            },
            {
                "time": "15:30",
                "activity": "Rendez-vous en mairie avec l'adjoint aux affaires scolaires pour étudier l'ouverture d'une nouvelle classe élémentaire."
            },
            {
                "time": "17:30",
                "activity": "Rédaction du rapport d'évaluation officiel et validation des dossiers administratifs sur les plateformes ministérielles."
            }
        ],
        "quiz": [
            {
                "question": "Quel est le rôle principal de l'Inspecteur de l'Éducation Nationale (IEN) du premier degré ?",
                "options": [
                    "Gérer le réfectoire municipal",
                    "Piloter la politique éducative sur sa circonscription, évaluer les enseignants et animer leur formation continue",
                    "Donner des cours de musique le samedi",
                    "Remplacer les professeurs absents"
                ],
                "answer": 1,
                "explanation": "L'IEN est le cadre responsable du pilotage pédagogique, de l'évaluation des enseignants et du fonctionnement du service public éducatif dans sa circonscription."
            }
        ],
        "shortDescription": "Cadre supérieur de l'Éducation Nationale, l'Inspecteur de l'Éducation Nationale (IEN) pilote la politique éducative sur sa circonscription. Il évalue les enseignants, anime la formation continue, conseille les directeurs d'école et veille à la mise en œuvre rigoureuse des programmes officiels.",
        "longDescription": "Cadre supérieur de l'Éducation Nationale, l'Inspecteur de l'Éducation Nationale (IEN) pilote la politique éducative sur sa circonscription. Il évalue les enseignants, anime la formation continue, conseille les directeurs d'école et veille à la mise en œuvre rigoureuse des programmes officiels. Contrôler la conformité des enseignements aux programmes officiels et évaluer la valeur professionnelle des enseignants (Rendez-vous de Carrière). Piloter les projets pédagogiques et impulser les priorités ministérielles (maîtrise de la langue, mathématiques, inclusion). Organiser le plan de formation continue des enseignants et animer l'équipe de conseillers pédagogiques de circonscription (CPC). Conseiller et soutenir les directeurs d'école dans la gestion des situations complexes ou conflictuelles.",
        "description": "Cadre supérieur de l'Éducation Nationale, l'Inspecteur de l'Éducation Nationale (IEN) pilote la politique éducative sur sa circonscription. Il évalue les enseignants, anime la formation continue, conseille les directeurs d'école et veille à la mise en œuvre rigoureuse des programmes officiels. Contrôler la conformité des enseignements aux programmes officiels et évaluer la valeur professionnelle des enseignants (Rendez-vous de Carrière). Piloter les projets pédagogiques et impulser les priorités ministérielles (maîtrise de la langue, mathématiques, inclusion). Organiser le plan de formation continue des enseignants et animer l'équipe de conseillers pédagogiques de circonscription (CPC). Conseiller et soutenir les directeurs d'école dans la gestion des situations complexes ou conflictuelles.",
        "studyLevel": "Bac +5 + minimum 5 ans d'expérience dans l'enseignement ou l'encadrement + Concours d'État d'IEN",
        "hard": [
            "Maîtrise juridique et réglementaire du système éducatif et du droit de la fonction publique",
            "Expertise didactique et méthodologique de très haut niveau sur les apprentissages",
            "Techniques d'évaluation des compétences professionnelles et de conduite d'entretien de carrière",
            "Management public et pilotage stratégique de circonscription"
        ],
        "soft": [
            "Autorité morale incontestable et sens élevé de l'État",
            "Bienveillance exigeante, diplomatie et qualités d'écoute",
            "Capacité d'analyse stratégique et vision prospective",
            "Sang-froid dans la résolution des crises et conflits locaux"
        ],
        "typicalDay": [
            {
                "time": "08:15",
                "activity": "Arrivée dans une école rurale de la circonscription pour la visite d'inspection d'une professeure des écoles en classe de CM1."
            },
            {
                "time": "08:30",
                "activity": "Observation attentive de la séance d'apprentissage en résolution de problèmes mathématiques et analyse des cahiers d'élèves."
            },
            {
                "time": "10:30",
                "activity": "Entretien professionnel approfondi avec l'enseignante : analyse réflexive, points forts et axes d'évolution."
            },
            {
                "time": "12:00",
                "activity": "Point rapide avec le directeur de l'école sur le projet d'école et les effectifs prévisionnels pour la rentrée."
            },
            {
                "time": "13:30",
                "activity": "Retour au bureau de circonscription et réunion de pilotage avec les trois conseillers pédagogiques sur le plan de formation en français."
            },
            {
                "time": "15:30",
                "activity": "Rendez-vous en mairie avec l'adjoint aux affaires scolaires pour étudier l'ouverture d'une nouvelle classe élémentaire."
            },
            {
                "time": "17:30",
                "activity": "Rédaction du rapport d'évaluation officiel et validation des dossiers administratifs sur les plateformes ministérielles."
            }
        ],
        "daily": {
            "morning": "Arrivée dans une école rurale de la circonscription pour la visite d'inspection d'une professeure des écoles en classe de CM1. • Observation attentive de la séance d'apprentissage en résolution de problèmes mathématiques et analyse des cahiers d'élèves. • Entretien professionnel approfondi avec l'enseignante : analyse réflexive, points forts et axes d'évolution. • Point rapide avec le directeur de l'école sur le projet d'école et les effectifs prévisionnels pour la rentrée.",
            "afternoon": "Retour au bureau de circonscription et réunion de pilotage avec les trois conseillers pédagogiques sur le plan de formation en français. • Rendez-vous en mairie avec l'adjoint aux affaires scolaires pour étudier l'ouverture d'une nouvelle classe élémentaire. • Rédaction du rapport d'évaluation officiel et validation des dossiers administratifs sur les plateformes ministérielles.",
            "challenges": "Régulation des dynamiques de groupe, transmission bienveillante et exigence éducative."
        },
        "saviezVous": {
            "fait": "L'Inspecteur de l'Éducation Nationale est le représentant du recteur sur son territoire ; il a autorité sur une circonscription regroupant en moyenne 20 à 40 écoles primaires et 200 à 400 professeurs des écoles.",
            "chiffre": "On compte environ 2 200 IEN en exercice sur le territoire national français."
        }
    },
    {
        "id": "inspecteur-academie",
        "slug": "inspecteur-academie",
        "title": "Inspecteur d'Académie - Inspecteur Pédagogique Régional (IA-IPR)",
        "aliases": [
            "IA-IPR",
            "Inspecteur pédagogique régional",
            "Inspecteur du second degré",
            "Inspecteur d'académie"
        ],
        "icon": "⚖️",
        "image": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "education-formation",
            "droit-management"
        ],
        "domain": "Direction, Encadrement, Administration & Inspection Scolaire",
        "domainId": "direction-administration-inspection",
        "subdomain": "Inspection académique (IEN, IA-IPR)",
        "sectors": [
            "Rectorats d'académie (Services déconcentrés du Ministère de l'Éducation Nationale)",
            "Collèges et lycées généraux, technologiques et professionnels",
            "Commissions nationales d'élaboration des programmes et jurys de concours"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/enseignement/inspecteur-d-academie-101696",
        "studyramaSource": true,
        "isEmerging": false,
        "level": "Bac +5 (Agrégation ou Doctorat recommandé) + minimum 5 ans d'expérience + Concours national d'IA-IPR",
        "salary": "🇫🇷 France : 3 000 € à 5 200 € net/mois selon l'échelon et primes d'encadrement supérieur (Source : Studyrama / Grilles Éducation Nationale) • 🇸🇳 Sénégal : 500 000 à 950 000 FCFA net/mois (Inspecteurs de l'enseignement secondaire - IGS / Doyen des inspecteurs)",
        "salaryDetails": {
            "france": {
                "starter": "3 000 € net/mois",
                "experienced": "4 100 € net/mois",
                "senior": "5 200 € net/mois",
                "source": "Studyrama / Ministère de l'Éducation Nationale (France)"
            },
            "senegal": {
                "starter": "500 000 FCFA net/mois",
                "experienced": "720 000 FCFA net/mois",
                "senior": "950 000 FCFA net/mois",
                "source": "Inspection Générale de l'Éducation Nationale du Sénégal (IGEN) / Rectorats"
            }
        },
        "targetAudience": "Professeurs certifiés et agrégés du second degré, chefs d'établissement, Recteur d'académie",
        "workEnvironment": "Rectorat d'académie, collèges et lycées de l'académie, jurys nationaux de concours",
        "summary": "Expert disciplinaire et cadre supérieur du second degré, l'IA-IPR veille à la qualité de l'enseignement d'une matière spécifique (Lettres, Maths, Histoire, SVT, etc.) dans l'ensemble des collèges et lycées d'une académie, évalue les professeurs certifiés et agrégés et conseille le Recteur.",
        "missions": [
            "Évaluer les enseignants certifiés et agrégés de sa discipline dans les collèges et lycées de l'académie.",
            "Piloter l'harmonisation académique des épreuves du Baccalauréat et présider les jurys d'examen.",
            "Concevoir et animer le plan académique de formation disciplinaire continue des enseignants du second degré.",
            "Participer au recrutement des enseignants contractuels et aux jurys nationaux des concours (CAPES, Agrégation)."
        ],
        "activities": [
            "Inspection en classe de lycée ou collège, observation de la séance didactique et entretien de carrière.",
            "Rédaction des avis motivés pour les avancements d'échelons et promotions au grade de la hors-classe.",
            "Animation de réunions académiques de professeurs coordonnateurs de discipline.",
            "Contribution à des groupes d'experts ministériels sur l'évolution des programmes et des épreuves."
        ],
        "specialties": [
            "Lettres & Philosophie",
            "Mathématiques & Informatique",
            "Sciences Physiques et Chimiques",
            "Sciences de la Vie et de la Terre",
            "Histoire-Géographie",
            "Langues vivantes étrangères",
            "Éducation Physique et Sportive",
            "Établissements et Vie Scolaire (EVS)"
        ],
        "skills": {
            "hard": [
                "Érudition académique et maîtrise magistrale des programmes de sa discipline",
                "Didactique disciplinaire approfondie et théories de l'apprentissage adolescent",
                "Réglementation des examens nationaux et des concours de recrutement",
                "Méthodologie de l'évaluation professionnelle de haut niveau"
            ],
            "soft": [
                "Haute hauteur de vue et rigueur intellectuelle",
                "Sens de la justice, équité et autorité naturelle",
                "Excellente aisance oratoire et qualités rédactionnelles exceptionnelles",
                "Capacité d'écoute et d'émulation des équipes pédagogiques"
            ],
            "pedagogie": [
                "Accompagner les enseignants dans l'appropriation des réformes pédagogiques",
                "Encourager l'innovation didactique et l'usage des technologies",
                "Valoriser l'exigence intellectuelle tout en préservant la bienveillance envers les élèves"
            ],
            "communication": [
                "Synthétiser avec finesse les enjeux pédagogiques auprès du Recteur",
                "Présider avec autorité et diplomatie des commissions académiques d'harmonisation",
                "Rédiger des rapports d'expertise clairs, étayés et constructifs"
            ],
            "organisation": [
                "Planifier les tournées d'inspection dans les différents départements de l'académie",
                "Coordonner les équipes de formateurs académiques disciplinaires",
                "Superviser les commissions de choix de sujets du Baccalauréat"
            ],
            "numerique": [
                "Analyser les bases de données d'évaluation des compétences des élèves",
                "Utiliser les plateformes nationales de notation numérique des examens (Santorin)",
                "Promouvoir les ressources numériques disciplinaires certifiées"
            ],
            "technical": [
                "Érudition académique et maîtrise magistrale des programmes de sa discipline",
                "Didactique disciplinaire approfondie et théories de l'apprentissage adolescent",
                "Réglementation des examens nationaux et des concours de recrutement",
                "Méthodologie de l'évaluation professionnelle de haut niveau"
            ],
            "human": [
                "Haute hauteur de vue et rigueur intellectuelle",
                "Sens de la justice, équité et autorité naturelle",
                "Excellente aisance oratoire et qualités rédactionnelles exceptionnelles",
                "Capacité d'écoute et d'émulation des équipes pédagogiques"
            ]
        },
        "qualities": [
            "Excellence intellectuelle",
            "Sens de l'État et loyauté",
            "Capacité de jugement équitable",
            "Esprit de synthèse",
            "Discrétion"
        ],
        "studies": [
            "🇫🇷 France : Bac +5 minimum (Agrégation ou Doctorat généralement détenu) + Justifier de 5 ans d'expérience en tant qu'enseignant titulaire du second degré ou enseignant-chercheur + Concours national d'Inspecteur d'Académie - Inspecteur Pédagogique Régional (IA-IPR) + formation à l'IH2EF.",
            "🇸🇳 Sénégal : Bac +5 (CAES, Doctorat) + Expérience d'enseignement en lycée + Concours d'Inspecteur de l'Enseignement Secondaire à la FASTEF."
        ],
        "evolution": [
            "Inspecteur Général de l'Éducation Nationale (IGÉSR)",
            "Directeur Académique des Services de l'Éducation Nationale (DASEN)",
            "Recteur d'académie (sur nomination présidentielle)",
            "Directeur général d'administration centrale au Ministère"
        ],
        "dailySchedule": [
            {
                "time": "08:00",
                "activity": "Déplacement dans un lycée général de l'académie pour le rendez-vous de carrière d'un professeur agrégé de physique-chimie."
            },
            {
                "time": "08:45",
                "activity": "Observation de la séance de cours en Terminale spécialité : étude des ondes électromagnétiques et démarches d'investigation."
            },
            {
                "time": "10:30",
                "activity": "Entretien approfondi de carrière avec l'enseignant, analyse de ses pratiques d'évaluation et de son implication dans l'établissement."
            },
            {
                "time": "12:15",
                "activity": "Échange informel avec le Proviseur du lycée sur la mise en œuvre de la réforme du Baccalauréat."
            },
            {
                "time": "14:00",
                "activity": "Retour au Rectorat et animation du collège académique des inspecteurs de sciences avec le doyen des IPR."
            },
            {
                "time": "16:00",
                "activity": "Supervision de la commission académique d'harmonisation des sujets d'évaluation des épreuves de spécialité."
            },
            {
                "time": "18:00",
                "activity": "Finalisation du rapport d'évaluation pour la promotion de l'enseignant au tableau d'avancement."
            }
        ],
        "quiz": [
            {
                "question": "Quelle est la différence principale entre un IEN et un IA-IPR en France ?",
                "options": [
                    "L'IEN s'occupe de l'université, l'IA-IPR de la maternelle",
                    "L'IEN intervient principalement dans le premier degré (écoles primaires) tandis que l'IA-IPR intervient par discipline dans le second degré (collèges et lycées)",
                    "L'IA-IPR ne travaille que l'été",
                    "Il n'y a aucune différence"
                ],
                "answer": 1,
                "explanation": "L'IEN pilote une circonscription du premier degré (écoles), alors que l'IA-IPR est un inspecteur expert disciplinaire pour les collèges et lycées au niveau académique."
            }
        ],
        "shortDescription": "Expert disciplinaire et cadre supérieur du second degré, l'IA-IPR veille à la qualité de l'enseignement d'une matière spécifique (Lettres, Maths, Histoire, SVT, etc.) dans l'ensemble des collèges et lycées d'une académie, évalue les professeurs certifiés et agrégés et conseille le Recteur.",
        "longDescription": "Expert disciplinaire et cadre supérieur du second degré, l'IA-IPR veille à la qualité de l'enseignement d'une matière spécifique (Lettres, Maths, Histoire, SVT, etc.) dans l'ensemble des collèges et lycées d'une académie, évalue les professeurs certifiés et agrégés et conseille le Recteur. Évaluer les enseignants certifiés et agrégés de sa discipline dans les collèges et lycées de l'académie. Piloter l'harmonisation académique des épreuves du Baccalauréat et présider les jurys d'examen. Concevoir et animer le plan académique de formation disciplinaire continue des enseignants du second degré. Participer au recrutement des enseignants contractuels et aux jurys nationaux des concours (CAPES, Agrégation).",
        "description": "Expert disciplinaire et cadre supérieur du second degré, l'IA-IPR veille à la qualité de l'enseignement d'une matière spécifique (Lettres, Maths, Histoire, SVT, etc.) dans l'ensemble des collèges et lycées d'une académie, évalue les professeurs certifiés et agrégés et conseille le Recteur. Évaluer les enseignants certifiés et agrégés de sa discipline dans les collèges et lycées de l'académie. Piloter l'harmonisation académique des épreuves du Baccalauréat et présider les jurys d'examen. Concevoir et animer le plan académique de formation disciplinaire continue des enseignants du second degré. Participer au recrutement des enseignants contractuels et aux jurys nationaux des concours (CAPES, Agrégation).",
        "studyLevel": "Bac +5 (Agrégation ou Doctorat recommandé) + minimum 5 ans d'expérience + Concours national d'IA-IPR",
        "hard": [
            "Érudition académique et maîtrise magistrale des programmes de sa discipline",
            "Didactique disciplinaire approfondie et théories de l'apprentissage adolescent",
            "Réglementation des examens nationaux et des concours de recrutement",
            "Méthodologie de l'évaluation professionnelle de haut niveau"
        ],
        "soft": [
            "Haute hauteur de vue et rigueur intellectuelle",
            "Sens de la justice, équité et autorité naturelle",
            "Excellente aisance oratoire et qualités rédactionnelles exceptionnelles",
            "Capacité d'écoute et d'émulation des équipes pédagogiques"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "activity": "Déplacement dans un lycée général de l'académie pour le rendez-vous de carrière d'un professeur agrégé de physique-chimie."
            },
            {
                "time": "08:45",
                "activity": "Observation de la séance de cours en Terminale spécialité : étude des ondes électromagnétiques et démarches d'investigation."
            },
            {
                "time": "10:30",
                "activity": "Entretien approfondi de carrière avec l'enseignant, analyse de ses pratiques d'évaluation et de son implication dans l'établissement."
            },
            {
                "time": "12:15",
                "activity": "Échange informel avec le Proviseur du lycée sur la mise en œuvre de la réforme du Baccalauréat."
            },
            {
                "time": "14:00",
                "activity": "Retour au Rectorat et animation du collège académique des inspecteurs de sciences avec le doyen des IPR."
            },
            {
                "time": "16:00",
                "activity": "Supervision de la commission académique d'harmonisation des sujets d'évaluation des épreuves de spécialité."
            },
            {
                "time": "18:00",
                "activity": "Finalisation du rapport d'évaluation pour la promotion de l'enseignant au tableau d'avancement."
            }
        ],
        "daily": {
            "morning": "Déplacement dans un lycée général de l'académie pour le rendez-vous de carrière d'un professeur agrégé de physique-chimie. • Observation de la séance de cours en Terminale spécialité : étude des ondes électromagnétiques et démarches d'investigation. • Entretien approfondi de carrière avec l'enseignant, analyse de ses pratiques d'évaluation et de son implication dans l'établissement. • Échange informel avec le Proviseur du lycée sur la mise en œuvre de la réforme du Baccalauréat.",
            "afternoon": "Retour au Rectorat et animation du collège académique des inspecteurs de sciences avec le doyen des IPR. • Supervision de la commission académique d'harmonisation des sujets d'évaluation des épreuves de spécialité. • Finalisation du rapport d'évaluation pour la promotion de l'enseignant au tableau d'avancement.",
            "challenges": "Régulation des dynamiques de groupe, transmission bienveillante et exigence éducative."
        },
        "saviezVous": {
            "fait": "Les IA-IPR président les commissions académiques d'harmonisation du baccalauréat et veillent à l'équité nationale des notations des épreuves pour des dizaines de milliers de candidats.",
            "chiffre": "Chaque académie compte entre 30 et 80 IA-IPR répartis selon les différentes disciplines d'enseignement."
        }
    },
    {
        "id": "directeur-ecole",
        "slug": "directeur-ecole",
        "title": "Directeur / Directrice d'École Primaire",
        "aliases": [
            "Directeur d'école maternelle",
            "Directeur d'école élémentaire",
            "Chef d'établissement primaire",
            "Directrice d'école"
        ],
        "icon": "🏫",
        "image": "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "education-formation",
            "droit-management"
        ],
        "domain": "Direction, Encadrement, Administration & Inspection Scolaire",
        "domainId": "direction-administration-inspection",
        "subdomain": "Direction d'école & Chefferie d'établissement",
        "sectors": [
            "Éducation Nationale (Écoles maternelles, élémentaires et primaires publiques et privées)",
            "Collectivités territoriales (Mairies - Affaires scolaires)"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/enseignement/directeur-d-ecole-101689",
        "studyramaSource": true,
        "isEmerging": false,
        "level": "Bac +5 (Professeur des écoles titulaire justifiant de plusieurs années d'expérience + Inscription sur liste d'aptitude)",
        "salary": "🇫🇷 France : 1 700 € net/mois en début de carrière, jusqu'à 3 200 € net/mois en fin de carrière (selon échelon, bonification indiciaire et indemnité de direction liée au nombre de classes) (Source : Studyrama / Grilles Éducation Nationale) • 🇸🇳 Sénégal : 230 000 à 460 000 FCFA net/mois (Corps des directeurs d'école élémentaire - indemnité de charge)",
        "salaryDetails": {
            "france": {
                "starter": "1 700 € à 2 100 € net/mois (selon taille de l'école)",
                "experienced": "2 600 € net/mois",
                "senior": "3 200 € net/mois (avec indemnité de sujétion spéciale)",
                "source": "Studyrama / Ministère de l'Éducation Nationale (France)"
            },
            "senegal": {
                "starter": "230 000 FCFA net/mois",
                "experienced": "330 000 FCFA net/mois",
                "senior": "460 000 FCFA net/mois",
                "source": "Ministère de l'Éducation Nationale du Sénégal"
            }
        },
        "targetAudience": "Élèves de l'école, équipe enseignante, ATSEM, parents d'élèves, municipalité",
        "workEnvironment": "Bureau de direction d'école, cour de récréation, mairie, réunions de quartier",
        "summary": "Premier interlocuteur des familles et de la mairie, le directeur d'école anime l'équipe des enseignants, coordonne le projet d'école, veille à la sécurité des locaux et au bien-être de tous les élèves, tout en assurant souvent lui-même une partie de son temps en classe.",
        "missions": [
            "Assurer la bonne marche générale de l'école et veiller au respect des règles de sécurité des locaux (PPMS, sécurité incendie).",
            "Animer et présider les conseils des maîtres et les conseils d'école trimestriels réunissant enseignants, parents élus et municipalité.",
            "Organiser les admissions et inscriptions des nouveaux élèves et veiller à l'assiduité scolaire obligatoire dès 3 ans.",
            "Représenter l'institution scolaire auprès des services municipaux (cantine, périscolaire, travaux d'entretien)."
        ],
        "activities": [
            "Accueil matinal des élèves et familles à l'entrée de l'école pour créer un climat de confiance.",
            "Gestion du registre matricule, des dossiers scolaires dématérialisés (Onde) et des plannings de surveillance de cour.",
            "Coordination des protocoles d'accueil individualisé (PAI pour allergies/maladies chroniques) avec le médecin scolaire.",
            "Gestion des imprévus quotidiens (absence d'enseignant, incidents de cour, travaux urgents de maintenance)."
        ],
        "specialties": [
            "Direction d'école maternelle",
            "Direction d'école élémentaire",
            "Direction de groupe scolaire primaire (avec décharge totale d'enseignement)",
            "Direction d'école en réseau d'éducation prioritaire (REP / REP+)"
        ],
        "skills": {
            "hard": [
                "Législation et réglementation du premier degré et responsabilités juridiques du directeur",
                "Protocoles de sécurité des établissements scolaires (PPMS attentat-intrusion et risques majeurs)",
                "Maîtrise des logiciels administratifs de l'Éducation Nationale (Onde, Affelnet 6ème)",
                "Conduite de réunion et animation d'une équipe professionnelle"
            ],
            "soft": [
                "Grande diplomatie, tact relationnel et écoute",
                "Réactivité et sang-froid face aux urgences et situations de crise",
                "Sens de l'organisation et capacité à prioriser les multiples sollicitations",
                "Bienveillance et sens du service public"
            ],
            "pedagogie": [
                "Fédérer l'équipe des maîtres autour d'un projet d'école cohérent et ambitieux",
                "Favoriser les échanges de pratiques entre enseignants",
                "Accompagner l'intégration des jeunes collègues débutants ou stagiaires"
            ],
            "communication": [
                "Dialoguer de manière constructive avec les associations de parents d'élèves",
                "Négocier les budgets et dotations matérielles avec les services municipaux",
                "Désamorcer avec calme les tensions éventuelles entre familles et enseignants"
            ],
            "organisation": [
                "Planifier les plannings de service partagé (surveillances, répartition des salles)",
                "Coordonner l'intervention des ATSEM et des animateurs périscolaires",
                "Organiser les exercices obligatoires de sécurité (évacuation incendie, confinement)"
            ],
            "numerique": [
                "Administrer la base de données élèves sur l'application nationale Onde",
                "Gérer la messagerie officielle de l'école et les plateformes de communication familles",
                "Garantir la conformité RGPD de la gestion des données scolaires"
            ],
            "technical": [
                "Législation et réglementation du premier degré et responsabilités juridiques du directeur",
                "Protocoles de sécurité des établissements scolaires (PPMS attentat-intrusion et risques majeurs)",
                "Maîtrise des logiciels administratifs de l'Éducation Nationale (Onde, Affelnet 6ème)",
                "Conduite de réunion et animation d'une équipe professionnelle"
            ],
            "human": [
                "Grande diplomatie, tact relationnel et écoute",
                "Réactivité et sang-froid face aux urgences et situations de crise",
                "Sens de l'organisation et capacité à prioriser les multiples sollicitations",
                "Bienveillance et sens du service public"
            ]
        },
        "qualities": [
            "Sens de l'écoute et médiation",
            "Polyvalence et organisation",
            "Disponibilité",
            "Calme et autorité bienveillante",
            "Pragmatisme"
        ],
        "studies": [
            "🇫🇷 France : Être professeur des écoles titulaire justifiant d'au moins deux ans d'exercice + Inscription sur la liste d'aptitude aux fonctions de directeur d'école (commission départementale) + Suivi d'une formation préalable à la prise de fonction organisée par le Rectorat.",
            "🇸🇳 Sénégal : Être instituteur titulaire expérimenté du corps des maîtres + Nomination par arrêté ministériel sur proposition de l'Inspecteur de l'Éducation et de la Formation (IEF)."
        ],
        "evolution": [
            "Directeur d'une école de grande taille avec décharge d'enseignement totale",
            "Maître formateur (CAFIPEMF)",
            "Conseiller pédagogique de circonscription (CPC)",
            "Inspecteur de l'Éducation Nationale (IEN)"
        ],
        "dailySchedule": [
            {
                "time": "07:30",
                "activity": "Ouverture des locaux scolaires, consultation des messages urgents de parents et réception de l'appel d'un enseignant malade."
            },
            {
                "time": "08:00",
                "activity": "Organisation du remplacement interne et accueil des élèves et parents au portail de l'école."
            },
            {
                "time": "08:45",
                "activity": "Temps d'enseignement dans sa propre classe (pour les écoles sans décharge totale) ou travail administratif de direction."
            },
            {
                "time": "11:30",
                "activity": "Rendez-vous avec une famille pour l'inscription d'un nouvel élève arrivant dans la commune."
            },
            {
                "time": "12:15",
                "activity": "Point rapide avec le responsable du restaurant scolaire municipal sur les repas adaptés (PAI)."
            },
            {
                "time": "14:00",
                "activity": "Réunion téléphonique avec l'IEN et l'assistante sociale scolaire sur une situation d'information préoccupante."
            },
            {
                "time": "16:30",
                "activity": "Surveillance de la sortie des classes et échange informel avec les parents d'élèves élus."
            },
            {
                "time": "17:30",
                "activity": "Animation du Conseil des maîtres : bilan du premier trimestre et préparation du conseil d'école."
            }
        ],
        "quiz": [
            {
                "question": "Le directeur d'école primaire en France est-il le supérieur hiérarchique direct de ses collègues enseignants ?",
                "options": [
                    "Non, le supérieur hiérarchique est l'Inspecteur de l'Éducation Nationale (IEN), mais le directeur dispose d'une autorité fonctionnelle pour organiser la vie de l'école (loi Rilhac)",
                    "Oui, c'est leur patron privé",
                    "Non, il n'a aucun rôle",
                    "Oui, il peut les licencier sur-le-champ"
                ],
                "answer": 0,
                "explanation": "En France, les enseignants du premier degré dépendent hiérarchiquement de l'IEN de circonscription. La loi confère au directeur une autorité fonctionnelle pour piloter l'école."
            }
        ],
        "shortDescription": "Premier interlocuteur des familles et de la mairie, le directeur d'école anime l'équipe des enseignants, coordonne le projet d'école, veille à la sécurité des locaux et au bien-être de tous les élèves, tout en assurant souvent lui-même une partie de son temps en classe.",
        "longDescription": "Premier interlocuteur des familles et de la mairie, le directeur d'école anime l'équipe des enseignants, coordonne le projet d'école, veille à la sécurité des locaux et au bien-être de tous les élèves, tout en assurant souvent lui-même une partie de son temps en classe. Assurer la bonne marche générale de l'école et veiller au respect des règles de sécurité des locaux (PPMS, sécurité incendie). Animer et présider les conseils des maîtres et les conseils d'école trimestriels réunissant enseignants, parents élus et municipalité. Organiser les admissions et inscriptions des nouveaux élèves et veiller à l'assiduité scolaire obligatoire dès 3 ans. Représenter l'institution scolaire auprès des services municipaux (cantine, périscolaire, travaux d'entretien).",
        "description": "Premier interlocuteur des familles et de la mairie, le directeur d'école anime l'équipe des enseignants, coordonne le projet d'école, veille à la sécurité des locaux et au bien-être de tous les élèves, tout en assurant souvent lui-même une partie de son temps en classe. Assurer la bonne marche générale de l'école et veiller au respect des règles de sécurité des locaux (PPMS, sécurité incendie). Animer et présider les conseils des maîtres et les conseils d'école trimestriels réunissant enseignants, parents élus et municipalité. Organiser les admissions et inscriptions des nouveaux élèves et veiller à l'assiduité scolaire obligatoire dès 3 ans. Représenter l'institution scolaire auprès des services municipaux (cantine, périscolaire, travaux d'entretien).",
        "studyLevel": "Bac +5 (Professeur des écoles titulaire justifiant de plusieurs années d'expérience + Inscription sur liste d'aptitude)",
        "hard": [
            "Législation et réglementation du premier degré et responsabilités juridiques du directeur",
            "Protocoles de sécurité des établissements scolaires (PPMS attentat-intrusion et risques majeurs)",
            "Maîtrise des logiciels administratifs de l'Éducation Nationale (Onde, Affelnet 6ème)",
            "Conduite de réunion et animation d'une équipe professionnelle"
        ],
        "soft": [
            "Grande diplomatie, tact relationnel et écoute",
            "Réactivité et sang-froid face aux urgences et situations de crise",
            "Sens de l'organisation et capacité à prioriser les multiples sollicitations",
            "Bienveillance et sens du service public"
        ],
        "typicalDay": [
            {
                "time": "07:30",
                "activity": "Ouverture des locaux scolaires, consultation des messages urgents de parents et réception de l'appel d'un enseignant malade."
            },
            {
                "time": "08:00",
                "activity": "Organisation du remplacement interne et accueil des élèves et parents au portail de l'école."
            },
            {
                "time": "08:45",
                "activity": "Temps d'enseignement dans sa propre classe (pour les écoles sans décharge totale) ou travail administratif de direction."
            },
            {
                "time": "11:30",
                "activity": "Rendez-vous avec une famille pour l'inscription d'un nouvel élève arrivant dans la commune."
            },
            {
                "time": "12:15",
                "activity": "Point rapide avec le responsable du restaurant scolaire municipal sur les repas adaptés (PAI)."
            },
            {
                "time": "14:00",
                "activity": "Réunion téléphonique avec l'IEN et l'assistante sociale scolaire sur une situation d'information préoccupante."
            },
            {
                "time": "16:30",
                "activity": "Surveillance de la sortie des classes et échange informel avec les parents d'élèves élus."
            },
            {
                "time": "17:30",
                "activity": "Animation du Conseil des maîtres : bilan du premier trimestre et préparation du conseil d'école."
            }
        ],
        "daily": {
            "morning": "Ouverture des locaux scolaires, consultation des messages urgents de parents et réception de l'appel d'un enseignant malade. • Organisation du remplacement interne et accueil des élèves et parents au portail de l'école. • Temps d'enseignement dans sa propre classe (pour les écoles sans décharge totale) ou travail administratif de direction. • Rendez-vous avec une famille pour l'inscription d'un nouvel élève arrivant dans la commune. • Point rapide avec le responsable du restaurant scolaire municipal sur les repas adaptés (PAI).",
            "afternoon": "Réunion téléphonique avec l'IEN et l'assistante sociale scolaire sur une situation d'information préoccupante. • Surveillance de la sortie des classes et échange informel avec les parents d'élèves élus. • Animation du Conseil des maîtres : bilan du premier trimestre et préparation du conseil d'école.",
            "challenges": "Régulation des dynamiques de groupe, transmission bienveillante et exigence éducative."
        },
        "saviezVous": {
            "fait": "La loi Rilhac promulguée en 2021 a renforcé l'autorité fonctionnelle et l'autonomie de décision des directeurs d'école en France pour animer l'équipe pédagogique et organiser la vie scolaire.",
            "chiffre": "Il existe près de 45 000 directeurs et directrices d'école en France, dont une majorité cumule la direction avec la charge d'une classe."
        }
    },
    {
        "id": "chef-etablissement-scolaire",
        "slug": "chef-etablissement-scolaire",
        "title": "Chef d'Établissement Scolaire (Principal de Collège / Proviseur de Lycée)",
        "aliases": [
            "Principal de collège",
            "Proviseur de lycée",
            "Personnel de direction",
            "Proviseur-adjoint / Principal-adjoint"
        ],
        "icon": "🏛️",
        "image": "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "education-formation",
            "droit-management"
        ],
        "domain": "Direction, Encadrement, Administration & Inspection Scolaire",
        "domainId": "direction-administration-inspection",
        "subdomain": "Direction d'école & Chefferie d'établissement",
        "sectors": [
            "Établissements Publics Locaux d'Enseignement (EPLE - Collèges, Lycées généraux, techniques et professionnels)",
            "Lycées privés sous contrat",
            "Lycées français du réseau AEFE à l'international"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/enseignement",
        "studyramaSource": true,
        "isEmerging": false,
        "level": "Bac +5 + minimum 3 à 5 ans d'expérience dans l'éducation ou la fonction publique + Concours national des Personnels de Direction",
        "salary": "🇫🇷 France : 2 800 € net/mois en début de carrière (adjoint), jusqu'à 4 800 € à 6 000 € net/mois pour un proviseur expérimenté d'une grande cité scolaire (logement de fonction inclus) • 🇸🇳 Sénégal : 450 000 à 900 000 FCFA net/mois (Principaux de CEM et Proviseurs de Lycée)",
        "salaryDetails": {
            "france": {
                "starter": "2 800 € net/mois (Principal/Proviseur adjoint débutant)",
                "experienced": "4 200 € net/mois",
                "senior": "5 500 € à 6 000 € net/mois (Proviseur de lycée 1ère catégorie)",
                "source": "Studyrama / Ministère de l'Éducation Nationale (France) / IH2EF"
            },
            "senegal": {
                "starter": "450 000 FCFA net/mois",
                "experienced": "650 000 FCFA net/mois",
                "senior": "900 000 FCFA net/mois",
                "source": "Ministère de l'Éducation Nationale du Sénégal"
            }
        },
        "targetAudience": "Ensemble de la communauté éducative : centaines ou milliers d'élèves, professeurs, CPE, agents territoriaux, parents, rectorat et collectivités",
        "workEnvironment": "Direction d'un collège ou lycée, conseil d'administration, rectorat, instances territoriales (Département / Région)",
        "summary": "À la tête d'un collège (Principal) ou d'un lycée (Proviseur), le chef d'établissement est le représentant de l'État et le président du Conseil d'Administration. Il pilote la stratégie pédagogique, gère un budget de plusieurs centaines de milliers d'euros, manage des dizaines d'agents et garantit la sécurité de la cité scolaire.",
        "missions": [
            "Présider le Conseil d'Administration (CA), fixer les orientations stratégiques du projet d'établissement et voter le budget.",
            "Manager et animer les équipes : corps enseignant, vie scolaire (CPE), intendance et personnels médico-sociaux.",
            "Garantir la sécurité physique et morale des personnes et des biens au sein de l'établissement (plans de sécurité, discipline).",
            "Représenter l'établissement auprès du Rectorat, des collectivités de tutelle (Conseil Départemental pour les collèges, Conseil Régional pour les lycées) et du tissu économique local."
        ],
        "activities": [
            "Élaboration de la Dotation Horaire Globale (DHG) et répartition des heures d'enseignement par discipline.",
            "Présidence des commissions éducatives, des conseils de discipline et des assemblées générales.",
            "Gestion des relations partenariales avec les entreprises partenaires pour les stages et l'apprentissage.",
            "Pilotage de la gestion de crise (conflits, intrusions, accidents) en lien direct avec le Rectorat et la Préfecture."
        ],
        "specialties": [
            "Direction de collège (Principal)",
            "Direction de lycée d'enseignement général et technologique (Proviseur)",
            "Direction de lycée polyvalent ou professionnel",
            "Direction de cité scolaire à internat d'excellence"
        ],
        "skills": {
            "hard": [
                "Droit public, droit de l'éducation, finances publiques et comptabilité des EPLE",
                "Gestion des ressources humaines et dialogue social dans la fonction publique",
                "Techniques de négociation complexe et de gestion des crises",
                "Management stratégique et pilotage par objectifs"
            ],
            "soft": [
                "Leadership charismatique et sens affirmé de l'autorité",
                "Diplomatie, sens politique et intelligence relationnelle",
                "Résistance exceptionnelle à la pression et disponibilité totale",
                "Équité, impartialité et grand sens des responsabilités"
            ],
            "pedagogie": [
                "Impulser des projets éducatifs ambitieux pour la réussite de tous les élèves",
                "Accompagner les équipes dans la modernisation des pratiques d'enseignement",
                "Développer des dispositifs innovants de lutte contre le décrochage"
            ],
            "communication": [
                "Prendre la parole avec aisance et autorité face à une communauté de plusieurs centaines de personnes",
                "Communiquer avec les médias en situation de crise sous tutelle rectorale",
                "Fédérer des partenaires institutionnels variés autour des ambitions de l'établissement"
            ],
            "organisation": [
                "Construire des emplois du temps complexes pour plusieurs centaines d'élèves et dizaines de professeurs",
                "Superviser l'exécution budgétaire avec le Gestionnaire / Agent comptable",
                "Assurer la permanence et la continuité du service public toute l'année"
            ],
            "numerique": [
                "Piloter le déploiement des infrastructures numériques et du matériel informatique (Région/Département)",
                "Exploiter les logiciels de gestion scolaire et d'emploi du temps (EDT, Pronote, STSWeb)",
                "Veiller à la sécurité des systèmes d'information et à la protection des données des mineurs"
            ],
            "technical": [
                "Droit public, droit de l'éducation, finances publiques et comptabilité des EPLE",
                "Gestion des ressources humaines et dialogue social dans la fonction publique",
                "Techniques de négociation complexe et de gestion des crises",
                "Management stratégique et pilotage par objectifs"
            ],
            "human": [
                "Leadership charismatique et sens affirmé de l'autorité",
                "Diplomatie, sens politique et intelligence relationnelle",
                "Résistance exceptionnelle à la pression et disponibilité totale",
                "Équité, impartialité et grand sens des responsabilités"
            ]
        },
        "qualities": [
            "Leadership et autorité",
            "Vision stratégique",
            "Résistance au stress",
            "Sens de l'écoute et diplomatie",
            "Intégrité"
        ],
        "studies": [
            "🇫🇷 France : Bac +5 + Avoir accompli au moins 3 années de services effectifs comme enseignant titulaire, CPE ou fonctionnaire de catégorie A + Réussite au Concours national des Personnels de Direction + Stage de 2 ans rémunéré en tant que proviseur-adjoint ou principal-adjoint avec formation à l'IH2EF.",
            "🇸🇳 Sénégal : Bac +5 (PEM, PES) + Ancienneté d'enseignement et de responsabilité pédagogique + Nomination ministérielle au poste de Principal de CEM ou Proviseur de Lycée."
        ],
        "evolution": [
            "Proviseur d'un grand lycée de prestige ou d'une grande cité scolaire internationale",
            "Inspecteur d'Académie - Directeur Académique des Services de l'Éducation Nationale (DASEN)",
            "Directeur d'administration centrale ou conseiller technique en cabinet ministériel",
            "Directeur général d'établissement public"
        ],
        "dailySchedule": [
            {
                "time": "07:30",
                "activity": "Arrivée dans l'établissement, point opérationnel avec le proviseur-adjoint, le gestionnaire et les CPE sur l'organisation de la journée."
            },
            {
                "time": "08:15",
                "activity": "Accueil des élèves et professeurs au hall d'entrée du lycée."
            },
            {
                "time": "09:00",
                "activity": "Entretien de dialogue de gestion avec l'agent comptable pour analyser l'avancement des dépenses d'investissement matériel."
            },
            {
                "time": "10:30",
                "activity": "Réunion avec une délégation d'enseignants pour préparer la répartition de la Dotation Horaire Globale (DHG)."
            },
            {
                "time": "12:30",
                "activity": "Déjeuner au réfectoire et observation des conditions de restauration scolaire."
            },
            {
                "time": "14:00",
                "activity": "Visite des représentants du Conseil Régional pour le suivi des travaux de rénovation du plateau scientifique."
            },
            {
                "time": "16:00",
                "activity": "Réception d'une famille d'élève convoquée avant passage éventuel en commission éducative."
            },
            {
                "time": "18:00",
                "activity": "Présidence de la séance du Conseil d'Administration du lycée : vote du compte financier et conventions de partenariats."
            },
            {
                "time": "20:30",
                "activity": "Fin de séance et clôture des portes de l'établissement."
            }
        ],
        "quiz": [
            {
                "question": "Comment s'appelle le chef d'établissement dans un collège et dans un lycée en France ?",
                "options": [
                    "Directeur dans les deux cas",
                    "Principal au collège, Proviseur au lycée",
                    "Recteur au collège, Doyen au lycée",
                    "Maire au collège, Préfet au lycée"
                ],
                "answer": 1,
                "explanation": "Le chef d'établissement d'un collège porte le titre de Principal, tandis que celui d'un lycée porte le titre de Proviseur."
            }
        ],
        "shortDescription": "À la tête d'un collège (Principal) ou d'un lycée (Proviseur), le chef d'établissement est le représentant de l'État et le président du Conseil d'Administration. Il pilote la stratégie pédagogique, gère un budget de plusieurs centaines de milliers d'euros, manage des dizaines d'agents et garantit la sécurité de la cité scolaire.",
        "longDescription": "À la tête d'un collège (Principal) ou d'un lycée (Proviseur), le chef d'établissement est le représentant de l'État et le président du Conseil d'Administration. Il pilote la stratégie pédagogique, gère un budget de plusieurs centaines de milliers d'euros, manage des dizaines d'agents et garantit la sécurité de la cité scolaire. Présider le Conseil d'Administration (CA), fixer les orientations stratégiques du projet d'établissement et voter le budget. Manager et animer les équipes : corps enseignant, vie scolaire (CPE), intendance et personnels médico-sociaux. Garantir la sécurité physique et morale des personnes et des biens au sein de l'établissement (plans de sécurité, discipline). Représenter l'établissement auprès du Rectorat, des collectivités de tutelle (Conseil Départemental pour les collèges, Conseil Régional pour les lycées) et du tissu économique local.",
        "description": "À la tête d'un collège (Principal) ou d'un lycée (Proviseur), le chef d'établissement est le représentant de l'État et le président du Conseil d'Administration. Il pilote la stratégie pédagogique, gère un budget de plusieurs centaines de milliers d'euros, manage des dizaines d'agents et garantit la sécurité de la cité scolaire. Présider le Conseil d'Administration (CA), fixer les orientations stratégiques du projet d'établissement et voter le budget. Manager et animer les équipes : corps enseignant, vie scolaire (CPE), intendance et personnels médico-sociaux. Garantir la sécurité physique et morale des personnes et des biens au sein de l'établissement (plans de sécurité, discipline). Représenter l'établissement auprès du Rectorat, des collectivités de tutelle (Conseil Départemental pour les collèges, Conseil Régional pour les lycées) et du tissu économique local.",
        "studyLevel": "Bac +5 + minimum 3 à 5 ans d'expérience dans l'éducation ou la fonction publique + Concours national des Personnels de Direction",
        "hard": [
            "Droit public, droit de l'éducation, finances publiques et comptabilité des EPLE",
            "Gestion des ressources humaines et dialogue social dans la fonction publique",
            "Techniques de négociation complexe et de gestion des crises",
            "Management stratégique et pilotage par objectifs"
        ],
        "soft": [
            "Leadership charismatique et sens affirmé de l'autorité",
            "Diplomatie, sens politique et intelligence relationnelle",
            "Résistance exceptionnelle à la pression et disponibilité totale",
            "Équité, impartialité et grand sens des responsabilités"
        ],
        "typicalDay": [
            {
                "time": "07:30",
                "activity": "Arrivée dans l'établissement, point opérationnel avec le proviseur-adjoint, le gestionnaire et les CPE sur l'organisation de la journée."
            },
            {
                "time": "08:15",
                "activity": "Accueil des élèves et professeurs au hall d'entrée du lycée."
            },
            {
                "time": "09:00",
                "activity": "Entretien de dialogue de gestion avec l'agent comptable pour analyser l'avancement des dépenses d'investissement matériel."
            },
            {
                "time": "10:30",
                "activity": "Réunion avec une délégation d'enseignants pour préparer la répartition de la Dotation Horaire Globale (DHG)."
            },
            {
                "time": "12:30",
                "activity": "Déjeuner au réfectoire et observation des conditions de restauration scolaire."
            },
            {
                "time": "14:00",
                "activity": "Visite des représentants du Conseil Régional pour le suivi des travaux de rénovation du plateau scientifique."
            },
            {
                "time": "16:00",
                "activity": "Réception d'une famille d'élève convoquée avant passage éventuel en commission éducative."
            },
            {
                "time": "18:00",
                "activity": "Présidence de la séance du Conseil d'Administration du lycée : vote du compte financier et conventions de partenariats."
            },
            {
                "time": "20:30",
                "activity": "Fin de séance et clôture des portes de l'établissement."
            }
        ],
        "daily": {
            "morning": "Arrivée dans l'établissement, point opérationnel avec le proviseur-adjoint, le gestionnaire et les CPE sur l'organisation de la journée. • Accueil des élèves et professeurs au hall d'entrée du lycée. • Entretien de dialogue de gestion avec l'agent comptable pour analyser l'avancement des dépenses d'investissement matériel. • Réunion avec une délégation d'enseignants pour préparer la répartition de la Dotation Horaire Globale (DHG). • Déjeuner au réfectoire et observation des conditions de restauration scolaire.",
            "afternoon": "Visite des représentants du Conseil Régional pour le suivi des travaux de rénovation du plateau scientifique. • Réception d'une famille d'élève convoquée avant passage éventuel en commission éducative. • Présidence de la séance du Conseil d'Administration du lycée : vote du compte financier et conventions de partenariats. • Fin de séance et clôture des portes de l'établissement.",
            "challenges": "Régulation des dynamiques de groupe, transmission bienveillante et exigence éducative."
        },
        "saviezVous": {
            "fait": "Le chef d'établissement (Principal ou Proviseur) est personnellement responsable de la sécurité des personnes et des biens de son établissement 24h/24, et dispose pour cela d'un logement de fonction par nécessité absolue de service.",
            "chiffre": "La France compte environ 14 000 personnels de direction pilotant les collèges et lycées publics."
        }
    },
    {
        "id": "infirmier-scolaire",
        "slug": "infirmier-scolaire",
        "title": "Infirmier / Infirmière Scolaire",
        "aliases": [
            "Infirmier de l'Éducation Nationale",
            "Infirmière en collège / lycée",
            "Personnel infirmier scolaire",
            "Infirmier de santé scolaire"
        ],
        "icon": "🩺",
        "image": "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "education-formation",
            "sante-soins-paramedical"
        ],
        "domain": "Santé, Prévention & Bien-Être en Milieu Éducatif",
        "domainId": "sante-social-scolaire",
        "subdomain": "Soins infirmiers scolaires & Urgences",
        "sectors": [
            "Éducation Nationale (Collèges, Lycées généraux et professionnels, internats, universités)",
            "Services départementaux de santé scolaire (DSDEN)"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/enseignement/infirmier-scolaire-101697",
        "studyramaSource": true,
        "isEmerging": false,
        "level": "Bac +3 (Diplôme d'État d'Infirmier - DEI + Concours de recrutement d'infirmier de l'Éducation Nationale)",
        "salary": "🇫🇷 France : 1 800 € à 3 200 € net/mois selon l'échelon et astreintes d'internat (Source : Studyrama / Grilles Éducation Nationale) • 🇸🇳 Sénégal : 180 000 à 380 000 FCFA net/mois (Corps des infirmiers de santé scolaire)",
        "salaryDetails": {
            "france": {
                "starter": "1 800 € net/mois",
                "experienced": "2 400 € net/mois",
                "senior": "3 200 € net/mois",
                "source": "Studyrama / Ministère de l'Éducation Nationale (France)"
            },
            "senegal": {
                "starter": "180 000 FCFA net/mois",
                "experienced": "270 000 FCFA net/mois",
                "senior": "380 000 FCFA net/mois",
                "source": "Ministère de la Santé / Ministère de l'Éducation Nationale du Sénégal"
            }
        },
        "targetAudience": "Élèves de 11 à 18 ans au collège et au lycée, enfants des écoles primaires rattachées au secteur",
        "workEnvironment": "Infirmerie scolaire équipée, salles de classe (séances de prévention), internats scolaires",
        "summary": "Acteur essentiel du bien-être et de la santé des jeunes, l'infirmier scolaire accueille, écoute et soigne les élèves au quotidien. Au-delà des soins d'urgence, il mène des actions majeures de prévention, d'éducation à la sexualité et à l'alimentation, et veille à la protection des mineurs en danger.",
        "missions": [
            "Accueillir et écouter tout élève qui se présente à l'infirmerie pour quelque motif que ce soit (maux physiques ou souffrance psychologique).",
            "Dispenser les soins d'urgence et administrer les traitements prescrits dans le cadre des PAI (Projet d'Accueil Individualisé).",
            "Mener les dépistages infirmiers obligatoires (vue, audition, poids, taille, hygiène bucco-dentaire) et bilans de santé.",
            "Concevoir et animer des séances collectives d'éducation à la santé (alimentation, sommeil, contraception, prévention des addictions)."
        ],
        "activities": [
            "Prise en charge des malaises, petites blessures, crises d'angoisse et urgences vitales.",
            "Entretiens infirmiers confidentiels pour repérer le mal-être adolescent, le harcèlement ou les violences intrafamiliales.",
            "Rédaction d'Informations Préoccupantes (IP) en lien avec l'assistante sociale scolaire en cas de danger pour un mineur.",
            "Gestion des stocks de médicaments de l'armoire à pharmacie et tenue sécurisée du registre de santé."
        ],
        "specialties": [
            "Santé des adolescents & Soins d'urgence scolaire",
            "Dépistages sensoriels et biométriques",
            "Éducation à la sexualité & Prévention des conduites addictives",
            "Suivi des maladies chroniques et allergies sévères (PAI)"
        ],
        "skills": {
            "hard": [
                "Diplôme d'État d'Infirmier (DEI) et compétences cliniques d'urgence (AFGSU niveau 2)",
                "Cadre réglementaire de la santé scolaire et des protocoles d'urgence de l'Éducation Nationale",
                "Connaissance des pathologies chroniques infantiles et de l'adolescent (diabète, asthme, épilepsie)",
                "Secret médical et déontologie de l'Ordre des Infirmiers"
            ],
            "soft": [
                "Écoute bienveillante sans jugement et neutralité absolue",
                "Patience, empathie et capacité à rassurer les adolescents angoissés",
                "Sang-froid face aux urgences vitales ou aux décompensations psychologiques",
                "Aptitude à travailler en collaboration avec l'équipe éducative et sociale"
            ],
            "pedagogie": [
                "Expliquer aux élèves le fonctionnement de leur corps et l'importance de l'hygiène de vie",
                "Animer des ateliers participatifs interactifs sur les thèmes de santé publique",
                "Former les personnels de l'établissement à l'usage du défibrillateur et aux gestes qui sauvent"
            ],
            "communication": [
                "Instaurer une relation de confiance propice aux confidences sur les situations de détresse",
                "Alerter les parents avec tact et discernement en cas de problème de santé dépisté",
                "Participer activement à la cellule de veille éducative de l'établissement"
            ],
            "organisation": [
                "Planifier les bilans de santé des classes de 6ème et 3ème sur l'ensemble de l'année",
                "Gérer l'approvisionnement en consommables médicaux et trousses de secours de l'établissement",
                "Assurer les astreintes de nuit pour les infirmiers logés en internat"
            ],
            "numerique": [
                "Enregistrer confidentiellement les consultations et passages à l'infirmerie sur l'application nationale Sconet/Santé",
                "Gérer les dossiers médicaux dématérialisés dans le respect strict des normes de sécurité de santé",
                "Exploiter les données épidémiologiques scolaires pour orienter les projets de prévention"
            ],
            "technical": [
                "Diplôme d'État d'Infirmier (DEI) et compétences cliniques d'urgence (AFGSU niveau 2)",
                "Cadre réglementaire de la santé scolaire et des protocoles d'urgence de l'Éducation Nationale",
                "Connaissance des pathologies chroniques infantiles et de l'adolescent (diabète, asthme, épilepsie)",
                "Secret médical et déontologie de l'Ordre des Infirmiers"
            ],
            "human": [
                "Écoute bienveillante sans jugement et neutralité absolue",
                "Patience, empathie et capacité à rassurer les adolescents angoissés",
                "Sang-froid face aux urgences vitales ou aux décompensations psychologiques",
                "Aptitude à travailler en collaboration avec l'équipe éducative et sociale"
            ]
        },
        "qualities": [
            "Écoute et discrétion absolue",
            "Douceur et empathie",
            "Réactivité et sang-froid",
            "Sens aigu de l'observation",
            "Pédagogie"
        ],
        "studies": [
            "🇫🇷 France : Bac +3 (Diplôme d'État d'Infirmier - DEI obtenu en IFSI) + Réussite au Concours de recrutement d'infirmier de l'Éducation Nationale et de l'enseignement supérieur (concours déconcentré académique).",
            "🇸🇳 Sénégal : Bac +3 (Licence en Sciences Infirmières et Obstétricales - ENDSS Dakar ou universités régionales) + Concours d'intégration de la Fonction Publique."
        ],
        "evolution": [
            "Infirmier scolaire conseiller technique auprès de la DSDEN ou du Rectorat",
            "Cadre de santé scolaire / formateur en institut de formation en soins infirmiers (IFSI)",
            "Infirmier en pratique avancée (IPA)"
        ],
        "dailySchedule": [
            {
                "time": "08:00",
                "activity": "Ouverture de l'infirmerie, vérification des trousses d'urgence et consultation des courriels des équipes."
            },
            {
                "time": "08:30",
                "activity": "Accueil des premiers élèves pour des soins de premier recours (céphalées, pansements, administration de PAI)."
            },
            {
                "time": "09:30",
                "activity": "Entretien confidentiel avec une élève de 3ème en souffrance psychologique et repli sur elle-même."
            },
            {
                "time": "11:00",
                "activity": "Passation des bilans de santé sensoriels (dépistage visuel et auditif) pour les élèves d'une classe de 6ème."
            },
            {
                "time": "12:30",
                "activity": "Pause méridienne, permanence pour les urgences du réfectoire et de la cour."
            },
            {
                "time": "14:00",
                "activity": "Animation d'une séance collective d'éducation à la vie affective et relationnelle avec une classe de 4ème."
            },
            {
                "time": "15:30",
                "activity": "Point de transmission avec l'assistante sociale scolaire et le médecin scolaire sur deux dossiers préoccupants."
            },
            {
                "time": "17:00",
                "activity": "Saisie sécurisée des passages du jour sur le logiciel de santé scolaire et fermeture de l'infirmerie."
            }
        ],
        "quiz": [
            {
                "question": "L'infirmier scolaire est-il soumis au secret professionnel ?",
                "options": [
                    "Non, il doit tout raconter aux professeurs",
                    "Oui, au secret médical absolu, sauf obligation légale de signalement de sévices ou mauvais traitements sur mineur",
                    "Uniquement pour les notes de cours",
                    "Seulement si l'élève a plus de 18 ans"
                ],
                "answer": 1,
                "explanation": "L'infirmier scolaire est un professionnel de santé strictement soumis au secret médical, garantissant la confiance des élèves pour se confier."
            }
        ],
        "shortDescription": "Acteur essentiel du bien-être et de la santé des jeunes, l'infirmier scolaire accueille, écoute et soigne les élèves au quotidien. Au-delà des soins d'urgence, il mène des actions majeures de prévention, d'éducation à la sexualité et à l'alimentation, et veille à la protection des mineurs en danger.",
        "longDescription": "Acteur essentiel du bien-être et de la santé des jeunes, l'infirmier scolaire accueille, écoute et soigne les élèves au quotidien. Au-delà des soins d'urgence, il mène des actions majeures de prévention, d'éducation à la sexualité et à l'alimentation, et veille à la protection des mineurs en danger. Accueillir et écouter tout élève qui se présente à l'infirmerie pour quelque motif que ce soit (maux physiques ou souffrance psychologique). Dispenser les soins d'urgence et administrer les traitements prescrits dans le cadre des PAI (Projet d'Accueil Individualisé). Mener les dépistages infirmiers obligatoires (vue, audition, poids, taille, hygiène bucco-dentaire) et bilans de santé. Concevoir et animer des séances collectives d'éducation à la santé (alimentation, sommeil, contraception, prévention des addictions).",
        "description": "Acteur essentiel du bien-être et de la santé des jeunes, l'infirmier scolaire accueille, écoute et soigne les élèves au quotidien. Au-delà des soins d'urgence, il mène des actions majeures de prévention, d'éducation à la sexualité et à l'alimentation, et veille à la protection des mineurs en danger. Accueillir et écouter tout élève qui se présente à l'infirmerie pour quelque motif que ce soit (maux physiques ou souffrance psychologique). Dispenser les soins d'urgence et administrer les traitements prescrits dans le cadre des PAI (Projet d'Accueil Individualisé). Mener les dépistages infirmiers obligatoires (vue, audition, poids, taille, hygiène bucco-dentaire) et bilans de santé. Concevoir et animer des séances collectives d'éducation à la santé (alimentation, sommeil, contraception, prévention des addictions).",
        "studyLevel": "Bac +3 (Diplôme d'État d'Infirmier - DEI + Concours de recrutement d'infirmier de l'Éducation Nationale)",
        "hard": [
            "Diplôme d'État d'Infirmier (DEI) et compétences cliniques d'urgence (AFGSU niveau 2)",
            "Cadre réglementaire de la santé scolaire et des protocoles d'urgence de l'Éducation Nationale",
            "Connaissance des pathologies chroniques infantiles et de l'adolescent (diabète, asthme, épilepsie)",
            "Secret médical et déontologie de l'Ordre des Infirmiers"
        ],
        "soft": [
            "Écoute bienveillante sans jugement et neutralité absolue",
            "Patience, empathie et capacité à rassurer les adolescents angoissés",
            "Sang-froid face aux urgences vitales ou aux décompensations psychologiques",
            "Aptitude à travailler en collaboration avec l'équipe éducative et sociale"
        ],
        "typicalDay": [
            {
                "time": "08:00",
                "activity": "Ouverture de l'infirmerie, vérification des trousses d'urgence et consultation des courriels des équipes."
            },
            {
                "time": "08:30",
                "activity": "Accueil des premiers élèves pour des soins de premier recours (céphalées, pansements, administration de PAI)."
            },
            {
                "time": "09:30",
                "activity": "Entretien confidentiel avec une élève de 3ème en souffrance psychologique et repli sur elle-même."
            },
            {
                "time": "11:00",
                "activity": "Passation des bilans de santé sensoriels (dépistage visuel et auditif) pour les élèves d'une classe de 6ème."
            },
            {
                "time": "12:30",
                "activity": "Pause méridienne, permanence pour les urgences du réfectoire et de la cour."
            },
            {
                "time": "14:00",
                "activity": "Animation d'une séance collective d'éducation à la vie affective et relationnelle avec une classe de 4ème."
            },
            {
                "time": "15:30",
                "activity": "Point de transmission avec l'assistante sociale scolaire et le médecin scolaire sur deux dossiers préoccupants."
            },
            {
                "time": "17:00",
                "activity": "Saisie sécurisée des passages du jour sur le logiciel de santé scolaire et fermeture de l'infirmerie."
            }
        ],
        "daily": {
            "morning": "Ouverture de l'infirmerie, vérification des trousses d'urgence et consultation des courriels des équipes. • Accueil des premiers élèves pour des soins de premier recours (céphalées, pansements, administration de PAI). • Entretien confidentiel avec une élève de 3ème en souffrance psychologique et repli sur elle-même. • Passation des bilans de santé sensoriels (dépistage visuel et auditif) pour les élèves d'une classe de 6ème. • Pause méridienne, permanence pour les urgences du réfectoire et de la cour.",
            "afternoon": "Animation d'une séance collective d'éducation à la vie affective et relationnelle avec une classe de 4ème. • Point de transmission avec l'assistante sociale scolaire et le médecin scolaire sur deux dossiers préoccupants. • Saisie sécurisée des passages du jour sur le logiciel de santé scolaire et fermeture de l'infirmerie.",
            "challenges": "Régulation des dynamiques de groupe, transmission bienveillante et exigence éducative."
        },
        "saviezVous": {
            "fait": "L'infirmier scolaire est habilité à délivrer la contraception d'urgence sans ordonnance et sans accord parental, dans le respect de l'anonymat et du secret professionnel le plus strict.",
            "chiffre": "Plus de 7 700 infirmiers et infirmières scolaires exercent au sein de l'Éducation Nationale."
        }
    },
    {
        "id": "agent-territorial-specialise-ecoles-maternelles",
        "slug": "agent-territorial-specialise-ecoles-maternelles",
        "title": "Agent Territorial Spécialisé des Écoles Maternelles (ATSEM)",
        "aliases": [
            "ATSEM",
            "Aide-maternelle",
            "Agent de petite enfance en école maternelle",
            "Agent territorial des écoles"
        ],
        "icon": "🧸",
        "image": "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "education-formation",
            "sante-soins-paramedical"
        ],
        "domain": "Enseignement Primaire & Petite Enfance",
        "domainId": "enseignement-primaire",
        "subdomain": "École maternelle & Petite enfance",
        "sectors": [
            "Fonction Publique Territoriale (Mairies - Écoles maternelles)",
            "Centres de loisirs municipaux (ALSH)"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/social/agent-territorial-specialise-des-ecoles-maternelles-1312",
        "studyramaSource": true,
        "isEmerging": false,
        "level": "CAP Accompagnant Éducatif Petite Enfance (AEPE) + Concours d'ATSEM de la Fonction Publique Territoriale",
        "salary": "🇫🇷 France : 1 450 € à 2 100 € net/mois selon l'échelon et primes territoriales (Source : Studyrama / Grilles Fonction Publique Territoriale) • 🇸🇳 Sénégal : 110 000 à 210 000 FCFA net/mois (Aides éducatrices en case des tout-petits et écoles maternelles)",
        "salaryDetails": {
            "france": {
                "starter": "1 450 € net/mois (SMIC + primes)",
                "experienced": "1 750 € net/mois",
                "senior": "2 100 € net/mois",
                "source": "Studyrama / Fonction Publique Territoriale (France)"
            },
            "senegal": {
                "starter": "110 000 FCFA net/mois",
                "experienced": "150 000 FCFA net/mois",
                "senior": "210 000 FCFA net/mois",
                "source": "Agence Nationale de la Case des Tout-Petits (ANCTP) / Sénégal"
            }
        },
        "targetAudience": "Jeunes enfants de 2 à 6 ans en école maternelle",
        "workEnvironment": "Classes de maternelle, dortoirs de sieste, sanitaires adaptés, cour de récréation, cantine scolaire",
        "summary": "Binôme indispensable du professeur des écoles en maternelle, l'ATSEM prend soin des tout-petits tout au long de la journée. Il prépare les ateliers d'activités manuelles, veille à l'hygiène, accompagne le coucher pour la sieste et encadre le déjeuner à la cantine.",
        "missions": [
            "Assister l'enseignant dans la préparation et l'animation des activités pédagogiques et artistiques (peinture, collage, manipulation).",
            "Veiller à l'hygiène corporelle des enfants (lavage des mains, accompagnement aux toilettes, change des accidents).",
            "Assurer la propreté, la désinfection et l'entretien quotidien du matériel éducatif, des tables et des jeux de classe.",
            "Accompagner les enfants lors de la pause méridienne à la cantine et surveiller le dortoir pendant la sieste."
        ],
        "activities": [
            "Accueil des enfants et des parents le matin au vestiaire, aide à l'habillage et au déshabillage.",
            "Installation du matériel pour les ateliers d'arts plastiques et découpage préalable de supports.",
            "Surveillance bienveillante de la cour de récréation aux côtés de l'enseignant.",
            "Nettoyage rigoureux et désinfection des sanitaires et des jouets selon les normes d'hygiène petite enfance."
        ],
        "specialties": [
            "Toute petite section & Petite section (apprentissage de la propreté)",
            "Moyenne et Grande section (ateliers d'autonomie)",
            "Restauration scolaire maternelle",
            "Animation périscolaire du soir"
        ],
        "skills": {
            "hard": [
                "Règles d'hygiène, d'asepsie et de sécurité spécifiques aux locaux et matériels de petite enfance",
                "Gestes et postures ergonomiques adaptés au portage des jeunes enfants",
                "Protocoles d'urgence et gestes de premiers secours pour enfants",
                "Développement psycho-affectif et moteur des enfants de 2 à 6 ans"
            ],
            "soft": [
                "Patience infinie, douceur et grande tendresse bienveillante",
                "Vigilance de tous les instants pour prévenir les accidents domestiques",
                "Capacité d'écoute et d'apaisement des gros chagrins du matin",
                "Excellent esprit d'équipe et complicité professionnelle avec l'enseignant"
            ],
            "pedagogie": [
                "Guider l'enfant vers l'autonomie dans les gestes de la vie quotidienne (manger, s'habiller)",
                "Soutenir la socialisation des tout-petits et l'apprentissage du partage",
                "Reformuler calmement les consignes données par l'enseignant pendant un atelier"
            ],
            "communication": [
                "Rassurer les parents lors de la séparation du matin",
                "Transmettre fidèlement à l'enseignant les remarques ou incidents de la journée",
                "Communiquer avec douceur et clarté avec les enfants"
            ],
            "organisation": [
                "Gérer les rotations de matériel lors des ateliers multiples de la matinée",
                "Préparer les lits de sieste avec les draps nominatifs et doudous de chaque enfant",
                "Optimiser le temps de nettoyage pour rendre la classe impeccable chaque soir"
            ],
            "numerique": [
                "Consulter les plannings municipaux sur les outils intranet de la mairie",
                "Pointer les présences aux services de restauration scolaire sur tablette numérique"
            ],
            "technical": [
                "Règles d'hygiène, d'asepsie et de sécurité spécifiques aux locaux et matériels de petite enfance",
                "Gestes et postures ergonomiques adaptés au portage des jeunes enfants",
                "Protocoles d'urgence et gestes de premiers secours pour enfants",
                "Développement psycho-affectif et moteur des enfants de 2 à 6 ans"
            ],
            "human": [
                "Patience infinie, douceur et grande tendresse bienveillante",
                "Vigilance de tous les instants pour prévenir les accidents domestiques",
                "Capacité d'écoute et d'apaisement des gros chagrins du matin",
                "Excellent esprit d'équipe et complicité professionnelle avec l'enseignant"
            ]
        },
        "qualities": [
            "Patience et tendresse",
            "Sens de l'hygiène irréprochable",
            "Vigilance permanente",
            "Énergie et dynamisme",
            "Disponibilité"
        ],
        "studies": [
            "🇫🇷 France : CAP Accompagnant Éducatif Petite Enfance (AEPE) + Réussite au Concours territorial d'ATSEM (catégorie C de la fonction publique territoriale).",
            "🇸🇳 Sénégal : Diplôme d'éducateur de la petite enfance ou Certificat d'aptitude professionnelle d'aide-maternelle (ANCTP / Écoles de formation petite enfance)."
        ],
        "evolution": [
            "ATSEM principal de 1ère classe",
            "Concours interne d'Animateur territorial petite enfance (catégorie B)",
            "Éducateur de Jeunes Enfants (EJE)",
            "Passage du concours de Professeur des écoles (CRPE via la voie interne ou 3ème voie)"
        ],
        "dailySchedule": [
            {
                "time": "07:45",
                "activity": "Arrivée à l'école maternelle, aération de la classe, préparation des tabliers de peinture et disposition des chevalets."
            },
            {
                "time": "08:20",
                "activity": "Accueil chaleureux des enfants et parents au vestiaire : aide à enlever les manteaux et mots rassurants."
            },
            {
                "time": "09:00",
                "activity": "Animation d'un atelier pâte à modeler et découpage pendant que l'enseignante mène un atelier de langage."
            },
            {
                "time": "10:15",
                "activity": "Accompagnement du groupe aux toilettes, apprentissage du lavage des mains au savon et récréation."
            },
            {
                "time": "11:30",
                "activity": "Accompagnement des enfants au restaurant scolaire, aide à la découpe des aliments et surveillance."
            },
            {
                "time": "13:00",
                "activity": "Installation des tout-petits au dortoir de sieste, distribution des doudous et berceuse d'endormissement."
            },
            {
                "time": "14:30",
                "activity": "Nettoyage approfondi et désinfection des tables et pinceaux de la matinée pendant la sieste."
            },
            {
                "time": "15:00",
                "activity": "Réveil échelonné des enfants, aide au rhabillage et collation de l'après-midi."
            },
            {
                "time": "16:30",
                "activity": "Transmission aux parents à la sortie et remise en ordre complète de la classe pour le lendemain."
            }
        ],
        "quiz": [
            {
                "question": "De quel employeur dépend l'ATSEM en France ?",
                "options": [
                    "Du Ministère de la Défense",
                    "De la Mairie (Fonction Publique Territoriale)",
                    "D'une entreprise privée de sécurité",
                    "De l'UNESCO"
                ],
                "answer": 1,
                "explanation": "L'ATSEM est un agent communal de la Fonction Publique Territoriale, mis à disposition de l'école maternelle sous l'autorité fonctionnelle de l'enseignant et du directeur d'école."
            }
        ],
        "shortDescription": "Binôme indispensable du professeur des écoles en maternelle, l'ATSEM prend soin des tout-petits tout au long de la journée. Il prépare les ateliers d'activités manuelles, veille à l'hygiène, accompagne le coucher pour la sieste et encadre le déjeuner à la cantine.",
        "longDescription": "Binôme indispensable du professeur des écoles en maternelle, l'ATSEM prend soin des tout-petits tout au long de la journée. Il prépare les ateliers d'activités manuelles, veille à l'hygiène, accompagne le coucher pour la sieste et encadre le déjeuner à la cantine. Assister l'enseignant dans la préparation et l'animation des activités pédagogiques et artistiques (peinture, collage, manipulation). Veiller à l'hygiène corporelle des enfants (lavage des mains, accompagnement aux toilettes, change des accidents). Assurer la propreté, la désinfection et l'entretien quotidien du matériel éducatif, des tables et des jeux de classe. Accompagner les enfants lors de la pause méridienne à la cantine et surveiller le dortoir pendant la sieste.",
        "description": "Binôme indispensable du professeur des écoles en maternelle, l'ATSEM prend soin des tout-petits tout au long de la journée. Il prépare les ateliers d'activités manuelles, veille à l'hygiène, accompagne le coucher pour la sieste et encadre le déjeuner à la cantine. Assister l'enseignant dans la préparation et l'animation des activités pédagogiques et artistiques (peinture, collage, manipulation). Veiller à l'hygiène corporelle des enfants (lavage des mains, accompagnement aux toilettes, change des accidents). Assurer la propreté, la désinfection et l'entretien quotidien du matériel éducatif, des tables et des jeux de classe. Accompagner les enfants lors de la pause méridienne à la cantine et surveiller le dortoir pendant la sieste.",
        "studyLevel": "CAP Accompagnant Éducatif Petite Enfance (AEPE) + Concours d'ATSEM de la Fonction Publique Territoriale",
        "hard": [
            "Règles d'hygiène, d'asepsie et de sécurité spécifiques aux locaux et matériels de petite enfance",
            "Gestes et postures ergonomiques adaptés au portage des jeunes enfants",
            "Protocoles d'urgence et gestes de premiers secours pour enfants",
            "Développement psycho-affectif et moteur des enfants de 2 à 6 ans"
        ],
        "soft": [
            "Patience infinie, douceur et grande tendresse bienveillante",
            "Vigilance de tous les instants pour prévenir les accidents domestiques",
            "Capacité d'écoute et d'apaisement des gros chagrins du matin",
            "Excellent esprit d'équipe et complicité professionnelle avec l'enseignant"
        ],
        "typicalDay": [
            {
                "time": "07:45",
                "activity": "Arrivée à l'école maternelle, aération de la classe, préparation des tabliers de peinture et disposition des chevalets."
            },
            {
                "time": "08:20",
                "activity": "Accueil chaleureux des enfants et parents au vestiaire : aide à enlever les manteaux et mots rassurants."
            },
            {
                "time": "09:00",
                "activity": "Animation d'un atelier pâte à modeler et découpage pendant que l'enseignante mène un atelier de langage."
            },
            {
                "time": "10:15",
                "activity": "Accompagnement du groupe aux toilettes, apprentissage du lavage des mains au savon et récréation."
            },
            {
                "time": "11:30",
                "activity": "Accompagnement des enfants au restaurant scolaire, aide à la découpe des aliments et surveillance."
            },
            {
                "time": "13:00",
                "activity": "Installation des tout-petits au dortoir de sieste, distribution des doudous et berceuse d'endormissement."
            },
            {
                "time": "14:30",
                "activity": "Nettoyage approfondi et désinfection des tables et pinceaux de la matinée pendant la sieste."
            },
            {
                "time": "15:00",
                "activity": "Réveil échelonné des enfants, aide au rhabillage et collation de l'après-midi."
            },
            {
                "time": "16:30",
                "activity": "Transmission aux parents à la sortie et remise en ordre complète de la classe pour le lendemain."
            }
        ],
        "daily": {
            "morning": "Arrivée à l'école maternelle, aération de la classe, préparation des tabliers de peinture et disposition des chevalets. • Accueil chaleureux des enfants et parents au vestiaire : aide à enlever les manteaux et mots rassurants. • Animation d'un atelier pâte à modeler et découpage pendant que l'enseignante mène un atelier de langage. • Accompagnement du groupe aux toilettes, apprentissage du lavage des mains au savon et récréation. • Accompagnement des enfants au restaurant scolaire, aide à la découpe des aliments et surveillance.",
            "afternoon": "Installation des tout-petits au dortoir de sieste, distribution des doudous et berceuse d'endormissement. • Nettoyage approfondi et désinfection des tables et pinceaux de la matinée pendant la sieste. • Réveil échelonné des enfants, aide au rhabillage et collation de l'après-midi. • Transmission aux parents à la sortie et remise en ordre complète de la classe pour le lendemain.",
            "challenges": "Régulation des dynamiques de groupe, transmission bienveillante et exigence éducative."
        },
        "saviezVous": {
            "fait": "Le concours d'ATSEM est l'un des concours les plus sélectifs de la fonction publique territoriale avec des taux de réussite souvent inférieurs à 10% des candidats inscrits.",
            "chiffre": "Plus de 54 000 ATSEM accompagnent quotidiennement les tout-petits dans les écoles maternelles françaises."
        }
    },
    {
        "id": "accompagnant-eleves-situation-handicap-aesh",
        "slug": "accompagnant-eleves-situation-handicap-aesh",
        "title": "Accompagnant des Élèves en Situation de Handicap (AESH)",
        "aliases": [
            "AESH",
            "Auxiliaire de vie scolaire (AVS - ancienne appellation)",
            "Accompagnateur scolaire inclusion",
            "AESH mutualisé / individualisé"
        ],
        "icon": "🤝",
        "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "education-formation",
            "sante-soins-paramedical",
            "lettres-langues-sciences-humaines"
        ],
        "domain": "Orientation, Vie Scolaire & Inclusion Éducative",
        "domainId": "orientation-vie-scolaire-inclusion",
        "subdomain": "Inclusion scolaire des élèves en situation de handicap (AESH)",
        "sectors": [
            "Éducation Nationale (Écoles maternelles, élémentaires, collèges, lycées)",
            "Unités Localisées pour l'Inclusion Scolaire (ULIS école, collège, lycée)"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/enseignement",
        "studyramaSource": true,
        "isEmerging": false,
        "level": "Baccalauréat ou Diplôme d'État d'Accompagnant Éducatif et Social (DEAES) ou titre équivalent",
        "salary": "🇫🇷 France : Rémunéré sur la grille indiciaire des AESH (environ 1 400 € net/mois pour un temps plein, très souvent exercé à temps partiel de 24h/semaine pour environ 950 € à 1 050 € net/mois) (Source : Grilles officielles Éducation Nationale) • 🇸🇳 Sénégal : 100 000 à 180 000 FCFA net/mois (Auxiliaires d'intégration scolaire en centres spécialisés et écoles inclusives)",
        "salaryDetails": {
            "france": {
                "starter": "1 400 € net/mois (équivalent temps plein) / ~1 000 € net pour 24h",
                "experienced": "1 550 € net/mois (temps plein)",
                "senior": "1 750 € net/mois (après plusieurs années et CDI)",
                "source": "Ministère de l'Éducation Nationale (France) / Circulaires AESH"
            },
            "senegal": {
                "starter": "100 000 FCFA net/mois",
                "experienced": "140 000 FCFA net/mois",
                "senior": "180 000 FCFA net/mois",
                "source": "Structures d'éducation inclusive du Sénégal"
            }
        },
        "targetAudience": "Enfants et adolescents de 3 à 20 ans en situation de handicap (moteur, sensoriel, cognitif, TSA, troubles dys)",
        "workEnvironment": "Salles de classe ordinaires en école, collège ou lycée, dispositifs ULIS, sorties scolaires",
        "summary": "Acteur majeur de l'école inclusive, l'AESH accompagne au quotidien les élèves en situation de handicap dans leur scolarité ordinaire. Présent à leurs côtés en classe, il compense leurs difficultés motrices ou cognitives pour leur permettre d'apprendre au même rythme que leurs camarades.",
        "missions": [
            "Accompagner l'élève dans la réalisation des consignes pédagogiques sans faire à sa place pour préserver son autonomie.",
            "Aider aux actes de la vie quotidienne à l'école (installation en classe, prise de notes, manipulation du matériel, habillage, déplacements).",
            "Faciliter la communication et les interactions sociales positives de l'élève avec ses pairs et les enseignants.",
            "Participer aux réunions d'équipe de suivi de la scolarisation (ESS) pour ajuster les adaptations du Projet Personnalisé de Scolarisation (PPS)."
        ],
        "activities": [
            "Aide à l'écriture, au coloriage, à la manipulation des règles et compas ou utilisation de l'ordinateur portable adapté.",
            "Reformulation bienveillante des consignes données par l'enseignant pour les élèves avec troubles de l'attention ou autisme.",
            "Accompagnement sécurisé lors des récréations, des cours d'EPS ou des sorties scolaires.",
            "Échanges réguliers avec la famille et les professionnels soignants (ergothérapeute, orthophoniste) sous supervision de l'enseignant."
        ],
        "specialties": [
            "AESH Individuel (AESH-I pour un élève notifié)",
            "AESH Mutualisé (AESH-M pour plusieurs élèves d'un même établissement)",
            "AESH Collectif en dispositif ULIS",
            "Accompagnement des troubles du spectre de l'autisme (TSA)",
            "Accompagnement des déficiences sensorielles (visuelles, auditives)"
        ],
        "skills": {
            "hard": [
                "Connaissance des différents types de handicap (troubles neurodéveloppementaux, moteurs, sensoriels)",
                "Notions fondamentales de la compensation du handicap et des outils numériques adaptés (logiciels de synthèse vocale)",
                "Textes relatifs au Projet Personnalisé de Scolarisation (PPS) et aux notifications MDPH",
                "Gestes d'aide à la mobilité et postures de sécurité"
            ],
            "soft": [
                "Patience infinie, douceur et grande écoute",
                "Discrétion absolue et juste posture en classe (ne pas faire écran entre l'élève et le professeur)",
                "Capacité d'adaptation permanente au rythme et aux émotions de l'enfant",
                "Sens aigu du travail collaboratif avec les enseignants"
            ],
            "pedagogie": [
                "Encourager l'effort et la persévérance sans jamais stigmatiser",
                "Décomposer les consignes complexes en sous-étapes visuelles",
                "Favoriser l'autonomie maximale de l'élève au fur et à mesure de ses progrès"
            ],
            "communication": [
                "Créer une relation d'alliance et de confiance avec l'élève",
                "Rendre compte des évolutions observées à l'équipe pédagogique",
                "Gérer les moments d'anxiété ou de crise avec un calme communicatif"
            ],
            "organisation": [
                "Gérer son planning entre plusieurs élèves lorsqu'on est affecté à un Pôle Inclusif d'Accompagnement Localisé (PIAL)",
                "Préparer en amont les supports adaptés en concertation avec l'enseignant",
                "Tenir un carnet de bord de suivi des réussites et difficultés de l'élève"
            ],
            "numerique": [
                "Maîtriser les logiciels d'accessibilité (Antidote, Médialexie, OneNote adapté)",
                "Aider l'élève à classer ses cours numériques sur sa tablette ou son ordinateur scolaire"
            ],
            "technical": [
                "Connaissance des différents types de handicap (troubles neurodéveloppementaux, moteurs, sensoriels)",
                "Notions fondamentales de la compensation du handicap et des outils numériques adaptés (logiciels de synthèse vocale)",
                "Textes relatifs au Projet Personnalisé de Scolarisation (PPS) et aux notifications MDPH",
                "Gestes d'aide à la mobilité et postures de sécurité"
            ],
            "human": [
                "Patience infinie, douceur et grande écoute",
                "Discrétion absolue et juste posture en classe (ne pas faire écran entre l'élève et le professeur)",
                "Capacité d'adaptation permanente au rythme et aux émotions de l'enfant",
                "Sens aigu du travail collaboratif avec les enseignants"
            ]
        },
        "qualities": [
            "Empathie et bienveillance",
            "Patience d'ange",
            "Discrétion",
            "Adaptabilité",
            "Sens de l'écoute"
        ],
        "studies": [
            "🇫🇷 France : Baccalauréat ou Diplôme d'État d'Accompagnant Éducatif et Social (DEAES spécialité inclusion scolaire) ou justifier d'au moins 9 mois d'expérience d'accompagnement. Recrutement contractuel par les DSDEN/Rectorats (CDD de 3 ans renouvelable une fois, puis passage en CDI).",
            "🇸🇳 Sénégal : Baccalauréat ou formation en éducation spécialisée / travail social."
        ],
        "evolution": [
            "AESH référent coordonnant et tutorant d'autres collègues",
            "Concours d'Éducateur spécialisé ou Moniteur-éducateur",
            "Concours de Professeur des écoles (CRPE via la 3ème voie)",
            "Accès aux carrières médico-sociales et paramédicales"
        ],
        "dailySchedule": [
            {
                "time": "08:15",
                "activity": "Accueil d'un élève de 6ème avec troubles dyspraxiques sévères à l'entrée du collège et aide à l'installation en classe."
            },
            {
                "time": "08:30",
                "activity": "Accompagnement pendant le cours d'histoire : branchement de l'ordinateur portable et soutien à la saisie de texte."
            },
            {
                "time": "10:15",
                "activity": "Aide au rangement des affaires dans le cartable et transition sécurisée vers le cours de sciences."
            },
            {
                "time": "10:30",
                "activity": "Aide à la manipulation délicate des tubes à essais en travaux pratiques de chimie avec l'enseignant."
            },
            {
                "time": "12:15",
                "activity": "Accompagnement au restaurant scolaire pour le portage du plateau repas."
            },
            {
                "time": "13:30",
                "activity": "Prise en charge d'un second élève atteint de troubles du spectre autistique en classe de 4ème : guidage visuel des consignes."
            },
            {
                "time": "15:30",
                "activity": "Participation à une réunion d'Équipe de Suivi de Scolarisation (ESS) avec l'enseignant référent et la famille."
            },
            {
                "time": "16:45",
                "activity": "Bilan de la journée sur le cahier de liaison et fin de service."
            }
        ],
        "quiz": [
            {
                "question": "Quel est le but premier de l'action de l'AESH auprès de l'élève en situation de handicap ?",
                "options": [
                    "Faire tous ses devoirs à sa place pour qu'il ait 20/20",
                    "Développer son autonomie dans les apprentissages et la vie scolaire tout en compensant ses difficultés",
                    "Remplacer le professeur",
                    "L'empêcher de parler à ses camarades"
                ],
                "answer": 1,
                "explanation": "L'AESH cherche avant tout à rendre l'élève le plus autonome possible, en l'accompagnant sans faire les exercices à sa place."
            }
        ],
        "shortDescription": "Acteur majeur de l'école inclusive, l'AESH accompagne au quotidien les élèves en situation de handicap dans leur scolarité ordinaire. Présent à leurs côtés en classe, il compense leurs difficultés motrices ou cognitives pour leur permettre d'apprendre au même rythme que leurs camarades.",
        "longDescription": "Acteur majeur de l'école inclusive, l'AESH accompagne au quotidien les élèves en situation de handicap dans leur scolarité ordinaire. Présent à leurs côtés en classe, il compense leurs difficultés motrices ou cognitives pour leur permettre d'apprendre au même rythme que leurs camarades. Accompagner l'élève dans la réalisation des consignes pédagogiques sans faire à sa place pour préserver son autonomie. Aider aux actes de la vie quotidienne à l'école (installation en classe, prise de notes, manipulation du matériel, habillage, déplacements). Faciliter la communication et les interactions sociales positives de l'élève avec ses pairs et les enseignants. Participer aux réunions d'équipe de suivi de la scolarisation (ESS) pour ajuster les adaptations du Projet Personnalisé de Scolarisation (PPS).",
        "description": "Acteur majeur de l'école inclusive, l'AESH accompagne au quotidien les élèves en situation de handicap dans leur scolarité ordinaire. Présent à leurs côtés en classe, il compense leurs difficultés motrices ou cognitives pour leur permettre d'apprendre au même rythme que leurs camarades. Accompagner l'élève dans la réalisation des consignes pédagogiques sans faire à sa place pour préserver son autonomie. Aider aux actes de la vie quotidienne à l'école (installation en classe, prise de notes, manipulation du matériel, habillage, déplacements). Faciliter la communication et les interactions sociales positives de l'élève avec ses pairs et les enseignants. Participer aux réunions d'équipe de suivi de la scolarisation (ESS) pour ajuster les adaptations du Projet Personnalisé de Scolarisation (PPS).",
        "studyLevel": "Baccalauréat ou Diplôme d'État d'Accompagnant Éducatif et Social (DEAES) ou titre équivalent",
        "hard": [
            "Connaissance des différents types de handicap (troubles neurodéveloppementaux, moteurs, sensoriels)",
            "Notions fondamentales de la compensation du handicap et des outils numériques adaptés (logiciels de synthèse vocale)",
            "Textes relatifs au Projet Personnalisé de Scolarisation (PPS) et aux notifications MDPH",
            "Gestes d'aide à la mobilité et postures de sécurité"
        ],
        "soft": [
            "Patience infinie, douceur et grande écoute",
            "Discrétion absolue et juste posture en classe (ne pas faire écran entre l'élève et le professeur)",
            "Capacité d'adaptation permanente au rythme et aux émotions de l'enfant",
            "Sens aigu du travail collaboratif avec les enseignants"
        ],
        "typicalDay": [
            {
                "time": "08:15",
                "activity": "Accueil d'un élève de 6ème avec troubles dyspraxiques sévères à l'entrée du collège et aide à l'installation en classe."
            },
            {
                "time": "08:30",
                "activity": "Accompagnement pendant le cours d'histoire : branchement de l'ordinateur portable et soutien à la saisie de texte."
            },
            {
                "time": "10:15",
                "activity": "Aide au rangement des affaires dans le cartable et transition sécurisée vers le cours de sciences."
            },
            {
                "time": "10:30",
                "activity": "Aide à la manipulation délicate des tubes à essais en travaux pratiques de chimie avec l'enseignant."
            },
            {
                "time": "12:15",
                "activity": "Accompagnement au restaurant scolaire pour le portage du plateau repas."
            },
            {
                "time": "13:30",
                "activity": "Prise en charge d'un second élève atteint de troubles du spectre autistique en classe de 4ème : guidage visuel des consignes."
            },
            {
                "time": "15:30",
                "activity": "Participation à une réunion d'Équipe de Suivi de Scolarisation (ESS) avec l'enseignant référent et la famille."
            },
            {
                "time": "16:45",
                "activity": "Bilan de la journée sur le cahier de liaison et fin de service."
            }
        ],
        "daily": {
            "morning": "Accueil d'un élève de 6ème avec troubles dyspraxiques sévères à l'entrée du collège et aide à l'installation en classe. • Accompagnement pendant le cours d'histoire : branchement de l'ordinateur portable et soutien à la saisie de texte. • Aide au rangement des affaires dans le cartable et transition sécurisée vers le cours de sciences. • Aide à la manipulation délicate des tubes à essais en travaux pratiques de chimie avec l'enseignant. • Accompagnement au restaurant scolaire pour le portage du plateau repas.",
            "afternoon": "Prise en charge d'un second élève atteint de troubles du spectre autistique en classe de 4ème : guidage visuel des consignes. • Participation à une réunion d'Équipe de Suivi de Scolarisation (ESS) avec l'enseignant référent et la famille. • Bilan de la journée sur le cahier de liaison et fin de service.",
            "challenges": "Régulation des dynamiques de groupe, transmission bienveillante et exigence éducative."
        },
        "saviezVous": {
            "fait": "Le nombre d'AESH a plus que doublé en dix ans pour accompagner la scolarisation de plus de 430 000 élèves en situation de handicap dans l'école ordinaire en France.",
            "chiffre": "Avec plus de 135 000 agents, les AESH représentent aujourd'hui le deuxième effectif le plus nombreux de l'Éducation Nationale après les enseignants."
        }
    },
    {
        "id": "responsable-pedagogique",
        "slug": "responsable-pedagogique",
        "title": "Responsable Pédagogique / Ingénieur Pédagogique",
        "aliases": [
            "Ingénieur pédagogique",
            "Coordinateur pédagogique",
            "Directeur des études / des programmes",
            "Concepteur pédagogique multimodal (Instructional Designer)"
        ],
        "icon": "💡",
        "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "education-formation",
            "numerique-ia",
            "droit-management"
        ],
        "domain": "Pédagogie, Ingénierie Pédagogique & Technologies Éducatives (EdTech)",
        "domainId": "pedagogie-ingenierie-edtech",
        "subdomain": "Ingénierie pédagogique multimodale",
        "sectors": [
            "Universités et grandes écoles (écoles de commerce, d'ingénieurs)",
            "Organismes de formation professionnelle et CFA",
            "Entreprises EdTech et plateformes d'apprentissage en ligne",
            "Directions des Ressources Humaines / Corporate Academies"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/enseignement/responsable-pedagogique",
        "studyramaSource": true,
        "isEmerging": true,
        "level": "Bac +5 (Master Sciences de l'Éducation, Master Ingénierie Pédagogique Multimodale ou diplôme d'école de commerce/ingénieur)",
        "salary": "🇫🇷 France : 2 500 € et 3 500 € bruts mensuels en début de carrière (environ 2 000 € à 2 700 € net/mois), pouvant atteindre 4 500 € brut/mois (3 500 € net) avec expérience (Source : Studyrama) • 🇸🇳 Sénégal : 350 000 à 850 000 FCFA net/mois (Universités privées d'excellence, cabinets de formation et instituts supérieurs de management)",
        "salaryDetails": {
            "france": {
                "starter": "2 500 € bruts/mois (environ 2 000 € net)",
                "experienced": "3 200 € bruts/mois (environ 2 500 € net)",
                "senior": "3 500 € à 4 500 € bruts/mois (jusqu'à 3 500 € net)",
                "source": "Studyrama / APEC / Enquêtes salaires EdTech"
            },
            "senegal": {
                "starter": "350 000 FCFA net/mois",
                "experienced": "550 000 FCFA net/mois",
                "senior": "850 000 FCFA net/mois",
                "source": "Écoles supérieures et cabinets de formation à Dakar (BEM, ISM, SupdeCo, ESP)"
            }
        },
        "targetAudience": "Étudiants du supérieur, adultes en formation continue, formateurs et intervenants professionnels",
        "workEnvironment": "Bureaux de direction pédagogique, plateaux de tournage e-learning, campus universitaires, télétravail",
        "summary": "Architecte des parcours de formation, le responsable pédagogique conçoit l'ingénierie des programmes d'études, coordonne les intervenants, choisit les modalités d'apprentissage (présentiel, distanciel, hybride) et garantit la qualité académique et professionnelle des diplômes.",
        "missions": [
            "Concevoir les maquettes pédagogiques, syllabus de cours et référentiels de compétences en phase avec les besoins du marché de l'emploi.",
            "Recruter, animer et évaluer le corps professoral et les intervenants professionnels experts.",
            "Déployer des méthodes didactiques innovantes (classes inversées, serious games, études de cas réels, projets tutorés).",
            "Piloter les démarches d'accréditation et de certification des diplômes (titres RNCP, accréditations internationales, labels Qualiopi)."
        ],
        "activities": [
            "Élaboration des plannings annuels de formation et répartition des volumes horaires des modules.",
            "Scénarisation de modules de Digital Learning avec des outils auteurs pour les plateformes LMS.",
            "Animation des comités de perfectionnement avec les entreprises partenaires et diplômés.",
            "Suivi de la satisfaction des apprenants et analyse des taux de réussite et d'insertion professionnelle."
        ],
        "specialties": [
            "Ingénierie de programmes d'enseignement supérieur (Bachelors, Masters, MBA)",
            "Digital Learning & E-learning (scénarisation multimodale)",
            "Formation continue d'entreprise & Reconversion",
            "Certifications professionnelles & Qualité de la formation (Qualiopi, RNCP)"
        ],
        "skills": {
            "hard": [
                "Théories de l'apprentissage des adultes (andragogie) et ingénierie de formation (modèle ADDIE)",
                "Connaissance pointue des référentiels de compétences et des dispositifs de financement (CPF, OPCO)",
                "Maîtrise des plateformes LMS (Canvas, Moodle, 360Learning) et logiciels auteurs (Articulate Storyline)",
                "Management de projet agile appliqué à l'éducation"
            ],
            "soft": [
                "Excellente vision stratégique et sens de l'organisation",
                "Aisance relationnelle et leadership pour fédérer des enseignants et intervenants",
                "Créativité didactique et curiosité pour les innovations pédagogiques",
                "Rigueur et sens de la qualité"
            ],
            "pedagogie": [
                "Scénariser un parcours pour maintenir l'engagement et la motivation des apprenants",
                "Définir des objectifs pédagogiques opérationnels selon la taxonomie de Bloom",
                "Concevoir des modalités d'évaluation authentiques et formatives"
            ],
            "communication": [
                "Animer des réunions de rentrée inspirantes pour les promotions d'étudiants",
                "Dialoguer avec les directeurs des ressources humaines d'entreprises partenaires",
                "Donner des feedbacks constructifs aux intervenants pédagogiques"
            ],
            "organisation": [
                "Gérer les calendriers d'examens, jurys de soutenance et rattrapages",
                "Superviser les budgets d'intervention des enseignants vacataires",
                "Auditer la conformité des dossiers pédagogiques pour les audits de certification"
            ],
            "numerique": [
                "Paramétrer des parcours d'apprentissage adaptatifs (Adaptive Learning)",
                "Intégrer des outils interactifs d'évaluation en direct (Wooclap, Kahoot)",
                "Exploiter les Learning Analytics pour identifier les apprenants en risque de décrochage"
            ],
            "technical": [
                "Théories de l'apprentissage des adultes (andragogie) et ingénierie de formation (modèle ADDIE)",
                "Connaissance pointue des référentiels de compétences et des dispositifs de financement (CPF, OPCO)",
                "Maîtrise des plateformes LMS (Canvas, Moodle, 360Learning) et logiciels auteurs (Articulate Storyline)",
                "Management de projet agile appliqué à l'éducation"
            ],
            "human": [
                "Excellente vision stratégique et sens de l'organisation",
                "Aisance relationnelle et leadership pour fédérer des enseignants et intervenants",
                "Créativité didactique et curiosité pour les innovations pédagogiques",
                "Rigueur et sens de la qualité"
            ]
        },
        "qualities": [
            "Créativité pédagogique",
            "Leadership et diplomatie",
            "Sens de l'organisation",
            "Rigueur qualité",
            "Vision prospective"
        ],
        "studies": [
            "🇫🇷 France : Bac +5. Master Sciences de l'Éducation (mention Ingénierie Pédagogique), Master Digital Learning, diplôme d'école de commerce ou diplôme d'école d'ingénieurs avec spécialisation en management de l'éducation.",
            "🇸🇳 Sénégal : Bac +5. Master en Ingénierie Pédagogique ou Sciences de l'Éducation (FASTEF / UCAD, universités privées) ou Master en Management de la formation."
        ],
        "evolution": [
            "Directeur des études / Directeur académique d'un groupe d'enseignement supérieur",
            "Chief Learning Officer (CLO) / Directeur de la formation dans une grande entreprise",
            "Directeur de cabinet de conseil en formation ou fondateur d'une startup EdTech",
            "Consultant senior en ingénierie de certification"
        ],
        "dailySchedule": [
            {
                "time": "08:45",
                "activity": "Consultation des tableaux de bord LMS et analyse des taux de complétion des modules e-learning de la semaine."
            },
            {
                "time": "09:30",
                "activity": "Entretien de recrutement avec un consultant expert professionnel pressenti pour animer le module de finance d'entreprise."
            },
            {
                "time": "11:00",
                "activity": "Atelier de co-design pédagogique avec une équipe d'enseignants : refonte d'un cours en blended learning (hybride)."
            },
            {
                "time": "12:30",
                "activity": "Déjeuner de travail avec la directrice des admissions et des relations entreprises."
            },
            {
                "time": "14:00",
                "activity": "Scénarisation d'une étude de cas vidéo interactive sur outil auteur avec le pôle audiovisuel du campus."
            },
            {
                "time": "16:00",
                "activity": "Comité pédagogique de suivi de promotion : point sur les étudiants en difficulté méthodologique."
            },
            {
                "time": "17:30",
                "activity": "Mise à jour du dossier d'audit Qualiopi et validation des conventions de formation."
            }
        ],
        "quiz": [
            {
                "question": "Quel est le rôle fondamental d'un ingénieur / responsable pédagogique ?",
                "options": [
                    "Réparer les tableaux noirs de l'école",
                    "Concevoir la structure, les méthodes didactiques et les parcours d'apprentissage des programmes de formation",
                    "Surveiller les récréations",
                    "Vendre des manuels scolaires au porte-à-porte"
                ],
                "answer": 1,
                "explanation": "Le responsable ou ingénieur pédagogique est le concepteur des cursus : il structure les contenus, choisit les modalités (présentiel/distanciel) et garantit l'efficacité des apprentissages."
            }
        ],
        "shortDescription": "Architecte des parcours de formation, le responsable pédagogique conçoit l'ingénierie des programmes d'études, coordonne les intervenants, choisit les modalités d'apprentissage (présentiel, distanciel, hybride) et garantit la qualité académique et professionnelle des diplômes.",
        "longDescription": "Architecte des parcours de formation, le responsable pédagogique conçoit l'ingénierie des programmes d'études, coordonne les intervenants, choisit les modalités d'apprentissage (présentiel, distanciel, hybride) et garantit la qualité académique et professionnelle des diplômes. Concevoir les maquettes pédagogiques, syllabus de cours et référentiels de compétences en phase avec les besoins du marché de l'emploi. Recruter, animer et évaluer le corps professoral et les intervenants professionnels experts. Déployer des méthodes didactiques innovantes (classes inversées, serious games, études de cas réels, projets tutorés). Piloter les démarches d'accréditation et de certification des diplômes (titres RNCP, accréditations internationales, labels Qualiopi).",
        "description": "Architecte des parcours de formation, le responsable pédagogique conçoit l'ingénierie des programmes d'études, coordonne les intervenants, choisit les modalités d'apprentissage (présentiel, distanciel, hybride) et garantit la qualité académique et professionnelle des diplômes. Concevoir les maquettes pédagogiques, syllabus de cours et référentiels de compétences en phase avec les besoins du marché de l'emploi. Recruter, animer et évaluer le corps professoral et les intervenants professionnels experts. Déployer des méthodes didactiques innovantes (classes inversées, serious games, études de cas réels, projets tutorés). Piloter les démarches d'accréditation et de certification des diplômes (titres RNCP, accréditations internationales, labels Qualiopi).",
        "studyLevel": "Bac +5 (Master Sciences de l'Éducation, Master Ingénierie Pédagogique Multimodale ou diplôme d'école de commerce/ingénieur)",
        "hard": [
            "Théories de l'apprentissage des adultes (andragogie) et ingénierie de formation (modèle ADDIE)",
            "Connaissance pointue des référentiels de compétences et des dispositifs de financement (CPF, OPCO)",
            "Maîtrise des plateformes LMS (Canvas, Moodle, 360Learning) et logiciels auteurs (Articulate Storyline)",
            "Management de projet agile appliqué à l'éducation"
        ],
        "soft": [
            "Excellente vision stratégique et sens de l'organisation",
            "Aisance relationnelle et leadership pour fédérer des enseignants et intervenants",
            "Créativité didactique et curiosité pour les innovations pédagogiques",
            "Rigueur et sens de la qualité"
        ],
        "typicalDay": [
            {
                "time": "08:45",
                "activity": "Consultation des tableaux de bord LMS et analyse des taux de complétion des modules e-learning de la semaine."
            },
            {
                "time": "09:30",
                "activity": "Entretien de recrutement avec un consultant expert professionnel pressenti pour animer le module de finance d'entreprise."
            },
            {
                "time": "11:00",
                "activity": "Atelier de co-design pédagogique avec une équipe d'enseignants : refonte d'un cours en blended learning (hybride)."
            },
            {
                "time": "12:30",
                "activity": "Déjeuner de travail avec la directrice des admissions et des relations entreprises."
            },
            {
                "time": "14:00",
                "activity": "Scénarisation d'une étude de cas vidéo interactive sur outil auteur avec le pôle audiovisuel du campus."
            },
            {
                "time": "16:00",
                "activity": "Comité pédagogique de suivi de promotion : point sur les étudiants en difficulté méthodologique."
            },
            {
                "time": "17:30",
                "activity": "Mise à jour du dossier d'audit Qualiopi et validation des conventions de formation."
            }
        ],
        "daily": {
            "morning": "Consultation des tableaux de bord LMS et analyse des taux de complétion des modules e-learning de la semaine. • Entretien de recrutement avec un consultant expert professionnel pressenti pour animer le module de finance d'entreprise. • Atelier de co-design pédagogique avec une équipe d'enseignants : refonte d'un cours en blended learning (hybride). • Déjeuner de travail avec la directrice des admissions et des relations entreprises.",
            "afternoon": "Scénarisation d'une étude de cas vidéo interactive sur outil auteur avec le pôle audiovisuel du campus. • Comité pédagogique de suivi de promotion : point sur les étudiants en difficulté méthodologique. • Mise à jour du dossier d'audit Qualiopi et validation des conventions de formation.",
            "challenges": "Régulation des dynamiques de groupe, transmission bienveillante et exigence éducative."
        },
        "saviezVous": {
            "fait": "Face à l'essor du e-learning et des formations hybrides, le métier d'ingénieur pédagogique figure parmi les profils les plus recherchés du secteur EdTech et des universités modernes.",
            "chiffre": "Le marché mondial des technologies de l'éducation (EdTech) dépasse les 300 milliards de dollars d'investissements."
        }
    },
    {
        "id": "charge-admissions",
        "slug": "charge-admissions",
        "title": "Chargé / Chargée des Admissions (Enseignement Supérieur)",
        "aliases": [
            "Responsable des admissions",
            "Conseiller en recrutement d'étudiants",
            "Chargé du recrutement académique",
            "Admissions Officer"
        ],
        "icon": "🎯",
        "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "education-formation",
            "droit-management"
        ],
        "domain": "Direction, Encadrement, Administration & Inspection Scolaire",
        "domainId": "direction-administration-inspection",
        "subdomain": "Admissions & Recrutement d'étudiants",
        "sectors": [
            "Écoles de commerce et de management",
            "Écoles d'ingénieurs et écoles du numérique",
            "Universités privées et instituts supérieurs internationaux",
            "Écoles d'art, de design et de communication"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/enseignement/charge-admissions",
        "studyramaSource": true,
        "isEmerging": false,
        "level": "Bac +3 à Bac +5 (Licence ou Master en commerce, communication, sciences humaines ou gestion)",
        "salary": "🇫🇷 France : 2 500 € et 3 300 € par mois (environ 30 000 € à 40 000 € bruts annuels avec primes sur objectifs) (Source : Studyrama) • 🇸🇳 Sénégal : 250 000 à 600 000 FCFA net/mois (Grandes écoles privées d'enseignement supérieur à Dakar)",
        "salaryDetails": {
            "france": {
                "starter": "2 500 € brut/mois (environ 1 950 € net)",
                "experienced": "2 900 € brut/mois",
                "senior": "3 300 € brut/mois (et primes de performance)",
                "source": "Studyrama / Enquêtes rémunération enseignement supérieur privé"
            },
            "senegal": {
                "starter": "250 000 FCFA net/mois",
                "experienced": "400 000 FCFA net/mois",
                "senior": "600 000 FCFA net/mois",
                "source": "Secteur de l'enseignement supérieur privé au Sénégal"
            }
        },
        "targetAudience": "Lycéens de terminale, étudiants en réorientation, candidats internationaux et parents d'élèves",
        "workEnvironment": "Bureaux de recrutement sur campus, salons d'orientation (Studyrama, L'Étudiant), visioconférences internationales",
        "summary": "Ambassadeur de son établissement, le chargé des admissions conseille et sélectionne les futurs étudiants. Il présente les cursus lors des salons et journées portes ouvertes, examine les dossiers scolaires, conduit les entretiens de motivation et guide les familles dans leur choix d'orientation.",
        "missions": [
            "Informer et conseiller les candidats potentiels sur les programmes, débouchés professionnels et critères d'admission.",
            "Représenter l'établissement lors des salons étudiants, forums des lycées et Journées Portes Ouvertes (JPO).",
            "Organiser et gérer le processus de sélection : étude des dossiers scolaires, épreuves écrites et oraux de motivation.",
            "Suivre la conversion des candidats admissibles jusqu'à leur inscription administrative définitive."
        ],
        "activities": [
            "Entretiens individuels d'orientation et de motivation avec des lycéens et leurs parents en présentiel ou visioconférence.",
            "Traitement des candidatures sur les plateformes dédiées (Parcoursup, portails internes, Campus France).",
            "Animation de webinaires de présentation des programmes et visites guidées du campus.",
            "Relances téléphoniques et suivi personnalisé des candidats dans un outil CRM."
        ],
        "specialties": [
            "Admissions nationales (post-bac & admissions parallèles)",
            "Recrutement d'étudiants internationaux (mobilité académique, visas)",
            "Admissions en programmes d'apprentissage / alternance",
            "Relations lycées et prescripteurs d'orientation"
        ],
        "skills": {
            "hard": [
                "Connaissance exhaustive des programmes de l'école et de leurs débouchés professionnels",
                "Maîtrise des procédures de candidature (Parcoursup, concours communs, Campus France)",
                "Utilisation des logiciels CRM de recrutement d'étudiants (Salesforce, HubSpot)",
                "Anglais professionnel courant pour les admissions internationales"
            ],
            "soft": [
                "Excellente aisance relationnelle, empathie et sens du contact humain",
                "Conviction communicative, dynamisme et sens du service",
                "Écoute active pour cerner le projet authentique d'un candidat",
                "Rigueur administrative et sens de l'organisation"
            ],
            "pedagogie": [
                "Aider un jeune à clarifier son projet d'études et ses aspirations professionnelles",
                "Expliquer la valeur ajoutée d'un diplôme et les compétences clés acquises",
                "Dédramatiser les épreuves orales de sélection pour mettre le candidat à l'aise"
            ],
            "communication": [
                "Prendre la parole en public devant des dizaines de familles lors des réunions d'information",
                "Argumenter avec bienveillance et professionnalisme",
                "Rédiger des courriers d'admission personnalisés et chaleureux"
            ],
            "organisation": [
                "Coordonner la logistique des jurys d'admission et des journées de concours",
                "Respecter les calendriers stricts des phases d'admission ministérielles",
                "Suivre les indicateurs clés de performance (nombre de leads, taux de conversion)"
            ],
            "numerique": [
                "Gérer les flux de candidatures sur le CRM de l'école",
                "Organiser des jurys dématérialisés en visioconférence",
                "Exploiter les réseaux sociaux professionnels pour contacter les candidats potentiels"
            ],
            "technical": [
                "Connaissance exhaustive des programmes de l'école et de leurs débouchés professionnels",
                "Maîtrise des procédures de candidature (Parcoursup, concours communs, Campus France)",
                "Utilisation des logiciels CRM de recrutement d'étudiants (Salesforce, HubSpot)",
                "Anglais professionnel courant pour les admissions internationales"
            ],
            "human": [
                "Excellente aisance relationnelle, empathie et sens du contact humain",
                "Conviction communicative, dynamisme et sens du service",
                "Écoute active pour cerner le projet authentique d'un candidat",
                "Rigueur administrative et sens de l'organisation"
            ]
        },
        "qualities": [
            "Aisance relationnelle remarquable",
            "Énergie et dynamisme",
            "Sens de l'écoute",
            "Rigueur et organisation",
            "Sens commercial et bienveillance"
        ],
        "studies": [
            "🇫🇷 France : Bac +3 à Bac +5. Licence ou Master en Communication, Commerce, Marketing, Sciences Humaines ou Management des organisations éducatives.",
            "🇸🇳 Sénégal : Bac +3 à Bac +5. Licence ou Master en Communication, Gestion ou Marketing (écoles de commerce à Dakar)."
        ],
        "evolution": [
            "Directeur / Directrice des admissions et du recrutement d'un campus",
            "Directeur du développement international d'une grande école",
            "Directeur de la communication et du marketing de l'enseignement supérieur"
        ],
        "dailySchedule": [
            {
                "time": "09:00",
                "activity": "Revue des nouvelles candidatures déposées en ligne la veille sur le CRM et attribution aux chargés de sélection."
            },
            {
                "time": "09:30",
                "activity": "Entretiens individuels de motivation en visioconférence avec trois candidats internationaux d'Afrique de l'Ouest."
            },
            {
                "time": "11:30",
                "activity": "Point avec la direction des études sur les quotas d'admissibilité par filière et filière alternance."
            },
            {
                "time": "12:30",
                "activity": "Déjeuner avec les étudiants ambassadeurs de l'école qui animent les visites du campus."
            },
            {
                "time": "14:00",
                "activity": "Animation d'un webinaire interactif en direct sur Parcoursup suivi d'une session de questions-réponses pour 150 lycéens."
            },
            {
                "time": "16:00",
                "activity": "Session téléphonique personnalisée avec des candidats admissibles pour répondre à leurs questions pratiques (logement, bourses)."
            },
            {
                "time": "17:45",
                "activity": "Préparation de la logistique du stand de l'école pour le salon Studyrama du week-end prochain."
            }
        ],
        "quiz": [
            {
                "question": "Quelle est la mission clé d'un chargé des admissions dans l'enseignement supérieur ?",
                "options": [
                    "Donner des cours de mathématiques",
                    "Conseiller, informer et sélectionner les futurs étudiants lors du processus de candidature",
                    "Nettoyer les amphithéâtres",
                    "Surveiller les internats scolaires"
                ],
                "answer": 1,
                "explanation": "Le chargé des admissions guide les candidats dans leur orientation, organise la sélection et accompagne leur inscription au sein de l'établissement."
            }
        ],
        "shortDescription": "Ambassadeur de son établissement, le chargé des admissions conseille et sélectionne les futurs étudiants. Il présente les cursus lors des salons et journées portes ouvertes, examine les dossiers scolaires, conduit les entretiens de motivation et guide les familles dans leur choix d'orientation.",
        "longDescription": "Ambassadeur de son établissement, le chargé des admissions conseille et sélectionne les futurs étudiants. Il présente les cursus lors des salons et journées portes ouvertes, examine les dossiers scolaires, conduit les entretiens de motivation et guide les familles dans leur choix d'orientation. Informer et conseiller les candidats potentiels sur les programmes, débouchés professionnels et critères d'admission. Représenter l'établissement lors des salons étudiants, forums des lycées et Journées Portes Ouvertes (JPO). Organiser et gérer le processus de sélection : étude des dossiers scolaires, épreuves écrites et oraux de motivation. Suivre la conversion des candidats admissibles jusqu'à leur inscription administrative définitive.",
        "description": "Ambassadeur de son établissement, le chargé des admissions conseille et sélectionne les futurs étudiants. Il présente les cursus lors des salons et journées portes ouvertes, examine les dossiers scolaires, conduit les entretiens de motivation et guide les familles dans leur choix d'orientation. Informer et conseiller les candidats potentiels sur les programmes, débouchés professionnels et critères d'admission. Représenter l'établissement lors des salons étudiants, forums des lycées et Journées Portes Ouvertes (JPO). Organiser et gérer le processus de sélection : étude des dossiers scolaires, épreuves écrites et oraux de motivation. Suivre la conversion des candidats admissibles jusqu'à leur inscription administrative définitive.",
        "studyLevel": "Bac +3 à Bac +5 (Licence ou Master en commerce, communication, sciences humaines ou gestion)",
        "hard": [
            "Connaissance exhaustive des programmes de l'école et de leurs débouchés professionnels",
            "Maîtrise des procédures de candidature (Parcoursup, concours communs, Campus France)",
            "Utilisation des logiciels CRM de recrutement d'étudiants (Salesforce, HubSpot)",
            "Anglais professionnel courant pour les admissions internationales"
        ],
        "soft": [
            "Excellente aisance relationnelle, empathie et sens du contact humain",
            "Conviction communicative, dynamisme et sens du service",
            "Écoute active pour cerner le projet authentique d'un candidat",
            "Rigueur administrative et sens de l'organisation"
        ],
        "typicalDay": [
            {
                "time": "09:00",
                "activity": "Revue des nouvelles candidatures déposées en ligne la veille sur le CRM et attribution aux chargés de sélection."
            },
            {
                "time": "09:30",
                "activity": "Entretiens individuels de motivation en visioconférence avec trois candidats internationaux d'Afrique de l'Ouest."
            },
            {
                "time": "11:30",
                "activity": "Point avec la direction des études sur les quotas d'admissibilité par filière et filière alternance."
            },
            {
                "time": "12:30",
                "activity": "Déjeuner avec les étudiants ambassadeurs de l'école qui animent les visites du campus."
            },
            {
                "time": "14:00",
                "activity": "Animation d'un webinaire interactif en direct sur Parcoursup suivi d'une session de questions-réponses pour 150 lycéens."
            },
            {
                "time": "16:00",
                "activity": "Session téléphonique personnalisée avec des candidats admissibles pour répondre à leurs questions pratiques (logement, bourses)."
            },
            {
                "time": "17:45",
                "activity": "Préparation de la logistique du stand de l'école pour le salon Studyrama du week-end prochain."
            }
        ],
        "daily": {
            "morning": "Revue des nouvelles candidatures déposées en ligne la veille sur le CRM et attribution aux chargés de sélection. • Entretiens individuels de motivation en visioconférence avec trois candidats internationaux d'Afrique de l'Ouest. • Point avec la direction des études sur les quotas d'admissibilité par filière et filière alternance. • Déjeuner avec les étudiants ambassadeurs de l'école qui animent les visites du campus.",
            "afternoon": "Animation d'un webinaire interactif en direct sur Parcoursup suivi d'une session de questions-réponses pour 150 lycéens. • Session téléphonique personnalisée avec des candidats admissibles pour répondre à leurs questions pratiques (logement, bourses). • Préparation de la logistique du stand de l'école pour le salon Studyrama du week-end prochain.",
            "challenges": "Régulation des dynamiques de groupe, transmission bienveillante et exigence éducative."
        },
        "saviezVous": {
            "fait": "Le chargé des admissions d'une grande école gère souvent plusieurs milliers de dossiers par an et coordonne les jurys d'oraux de sélection réunissant enseignants et diplômés professionnels.",
            "chiffre": "L'enseignement supérieur privé accueille plus de 750 000 étudiants en France, soit plus de 25% de la population étudiante totale."
        }
    },
    {
        "id": "learning-community-manager",
        "slug": "learning-community-manager",
        "title": "Learning Community Manager (Animateur de Communautés Apprenantes)",
        "aliases": [
            "Responsable de communauté apprenante",
            "Community manager formation",
            "Animateur de communauté e-learning",
            "EdTech Community Manager"
        ],
        "icon": "🌐",
        "image": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "education-formation",
            "numerique-ia"
        ],
        "domain": "Pédagogie, Ingénierie Pédagogique & Technologies Éducatives (EdTech)",
        "domainId": "pedagogie-ingenierie-edtech",
        "subdomain": "Animation de communautés d'apprenants",
        "sectors": [
            "Startups et entreprises de l'EdTech",
            "Plateformes de MOOC et de formation à distance",
            "Écoles en ligne (bootcamps de code, data, design)",
            "Départements formation de grandes entreprises"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/enseignement/learning-community-manager",
        "studyramaSource": true,
        "isEmerging": true,
        "level": "Bac +3 à Bac +5 (Communication digitale, Sciences de l'Éducation, E-learning ou Marketing digital)",
        "salary": "🇫🇷 France : 2 200 € à 3 400 € net/mois selon l'expérience et l'envergure de la communauté en ligne (Source : Studyrama / Baromètres EdTech) • 🇸🇳 Sénégal : 280 000 à 650 000 FCFA net/mois (Startups numériques, hubs d'innovation et académies de formation en ligne)",
        "salaryDetails": {
            "france": {
                "starter": "2 200 € net/mois",
                "experienced": "2 800 € net/mois",
                "senior": "3 400 € net/mois",
                "source": "Studyrama / Enquêtes Métiers du Digital & EdTech France"
            },
            "senegal": {
                "starter": "280 000 FCFA net/mois",
                "experienced": "420 000 FCFA net/mois",
                "senior": "650 000 FCFA net/mois",
                "source": "Secteur EdTech et écosystème numérique sénégalais (Dakar Digital)"
            }
        },
        "targetAudience": "Apprenants en ligne, étudiants de bootcamps, salariés en formation e-learning, mentors et tuteurs",
        "workEnvironment": "Entreprises EdTech, plateformes collaboratives (Discord, Slack, Teams), campus numériques, télétravail",
        "summary": "Moteur de l'apprentissage collaboratif à l'ère numérique, le Learning Community Manager anime et fédère les apprenants sur les plateformes en ligne. En brisant l'isolement de l'e-learning, il stimule l'entraide entre pairs, organise des événements virtuels et garantit des taux d'engagement records.",
        "missions": [
            "Créer et animer une dynamique collective bienveillante sur les canaux d'échange (Discord, Slack, forums LMS).",
            "Lutter contre le décrochage dans les parcours de formation à distance en suivant l'engagement individuel et collectif.",
            "Organiser des événements d'apprentissage synchrones (ateliers live, masterclasses, hackathons en ligne, sessions de co-working virtuel).",
            "Faciliter les interactions entre les apprenants, les mentors experts et les formateurs."
        ],
        "activities": [
            "Animation quotidienne des discussions, défis d'apprentissage (learning challenges) et partage de ressources pédagogiques.",
            "Modération des espaces communautaires et garantie du respect de la charte de bienveillance.",
            "Accompagnement personnalisé des apprenants qui expriment un doute ou une baisse de motivation.",
            "Analyse des métriques de participation et reporting auprès des ingénieurs pédagogiques."
        ],
        "specialties": [
            "Animation de bootcamps intensifs en ligne",
            "Communautés de pairs (Peer-learning)",
            "Gamification & Défis d'apprentissage",
            "Gestion des réseaux d'alumni diplômés"
        ],
        "skills": {
            "hard": [
                "Techniques d'animation de communautés virtuelles et dynamiques de groupe",
                "Maîtrise approfondie des outils collaboratifs (Discord, Slack, Notion, Teams, Miro)",
                "Principes fondamentaux du Social Learning et de la motivation en formation d'adultes",
                "Analyse des données d'engagement et indicateurs de rétention"
            ],
            "soft": [
                "Empathie remarquable, énergie positive et enthousiasme communicatif",
                "Excellente aisance rédactionnelle et sens de la formulation engageante",
                "Réactivité, disponibilité et bienveillance",
                "Sens de l'écoute et psychologie relationnelle"
            ],
            "pedagogie": [
                "Transformer un groupe d'apprenants isolés en une promotion solidaire",
                "Inciter les apprenants à s'expliquer mutuellement les concepts difficiles",
                "Valoriser publiquement les victoires et progrès de chaque apprenant"
            ],
            "communication": [
                "Animer des sessions de live vidéo dynamiques et participatives",
                "Désamorcer avec bienveillance les incompréhensions sur les forums",
                "Rédiger des newsletters de communauté inspirantes et rythmées"
            ],
            "organisation": [
                "Planifier le calendrier éditorial des animations et événements communautaires",
                "Coordonner les plannings d'intervention des tuteurs et mentors",
                "Gérer les canaux thématiques d'échanges pour maintenir la lisibilité"
            ],
            "numerique": [
                "Configurer des bots d'automatisation et de bienvenue (Zapier, bots Discord)",
                "Administrer les espaces de discussion intégrés aux LMS",
                "Créer des visuels attractifs pour les réseaux et ateliers (Canva, Figma)"
            ],
            "technical": [
                "Techniques d'animation de communautés virtuelles et dynamiques de groupe",
                "Maîtrise approfondie des outils collaboratifs (Discord, Slack, Notion, Teams, Miro)",
                "Principes fondamentaux du Social Learning et de la motivation en formation d'adultes",
                "Analyse des données d'engagement et indicateurs de rétention"
            ],
            "human": [
                "Empathie remarquable, énergie positive et enthousiasme communicatif",
                "Excellente aisance rédactionnelle et sens de la formulation engageante",
                "Réactivité, disponibilité et bienveillance",
                "Sens de l'écoute et psychologie relationnelle"
            ]
        },
        "qualities": [
            "Enthousiasme contagieux",
            "Empathie et sens de l'écoute",
            "Créativité relationnelle",
            "Aisance digitale",
            "Réactivité"
        ],
        "studies": [
            "🇫🇷 France : Bac +3 à Bac +5. Licence ou Master en Communication digitale, Sciences de l'Éducation, E-learning ou Marketing digital.",
            "🇸🇳 Sénégal : Bac +3 à Bac +5. Formation en communication numérique, community management ou sciences de l'éducation (Dakar)."
        ],
        "evolution": [
            "Head of Community / Responsable de l'expérience apprenant (Student Success Manager)",
            "Ingénieur pédagogique spécialisé en Social Learning",
            "Directeur des opérations d'une école EdTech en ligne"
        ],
        "dailySchedule": [
            {
                "time": "09:00",
                "activity": "Tournée matinale des canaux de discussion de la promotion sur Discord : réponse aux messages et lancement du rituel du matin."
            },
            {
                "time": "10:00",
                "activity": "Lancement du 'Défi du jour' pour stimuler l'application pratique du module de code de la veille."
            },
            {
                "time": "11:30",
                "activity": "Appel d'encouragement individuel en visio avec un apprenant qui n'a pas participé depuis trois jours."
            },
            {
                "time": "12:30",
                "activity": "Animation d'un café virtuel informel pour permettre aux apprenants de faire connaissance et d'échanger."
            },
            {
                "time": "14:00",
                "activity": "Préparation de la masterclasse en direct du jeudi soir avec un expert invité du secteur."
            },
            {
                "time": "16:00",
                "activity": "Analyse des données d'activité de la plateforme et point avec l'ingénieur pédagogique sur les points de blocage du cours."
            },
            {
                "time": "17:30",
                "activity": "Publication du récapitulatif des ressources partagées et mot de clôture bienveillant pour la soirée."
            }
        ],
        "quiz": [
            {
                "question": "Quel est l'un des objectifs clés du Learning Community Manager dans une formation en ligne ?",
                "options": [
                    "Vendre des téléphones portables",
                    "Rompre le sentiment d'isolement des apprenants et favoriser l'entraide collective pour éviter le décrochage",
                    "Remplacer les serveurs informatiques",
                    "Noter tous les devoirs seul"
                ],
                "answer": 1,
                "explanation": "En e-learning, le Learning Community Manager anime la communauté d'apprenants pour maintenir la motivation, l'engagement et l'entraide collective."
            }
        ],
        "shortDescription": "Moteur de l'apprentissage collaboratif à l'ère numérique, le Learning Community Manager anime et fédère les apprenants sur les plateformes en ligne. En brisant l'isolement de l'e-learning, il stimule l'entraide entre pairs, organise des événements virtuels et garantit des taux d'engagement records.",
        "longDescription": "Moteur de l'apprentissage collaboratif à l'ère numérique, le Learning Community Manager anime et fédère les apprenants sur les plateformes en ligne. En brisant l'isolement de l'e-learning, il stimule l'entraide entre pairs, organise des événements virtuels et garantit des taux d'engagement records. Créer et animer une dynamique collective bienveillante sur les canaux d'échange (Discord, Slack, forums LMS). Lutter contre le décrochage dans les parcours de formation à distance en suivant l'engagement individuel et collectif. Organiser des événements d'apprentissage synchrones (ateliers live, masterclasses, hackathons en ligne, sessions de co-working virtuel). Faciliter les interactions entre les apprenants, les mentors experts et les formateurs.",
        "description": "Moteur de l'apprentissage collaboratif à l'ère numérique, le Learning Community Manager anime et fédère les apprenants sur les plateformes en ligne. En brisant l'isolement de l'e-learning, il stimule l'entraide entre pairs, organise des événements virtuels et garantit des taux d'engagement records. Créer et animer une dynamique collective bienveillante sur les canaux d'échange (Discord, Slack, forums LMS). Lutter contre le décrochage dans les parcours de formation à distance en suivant l'engagement individuel et collectif. Organiser des événements d'apprentissage synchrones (ateliers live, masterclasses, hackathons en ligne, sessions de co-working virtuel). Faciliter les interactions entre les apprenants, les mentors experts et les formateurs.",
        "studyLevel": "Bac +3 à Bac +5 (Communication digitale, Sciences de l'Éducation, E-learning ou Marketing digital)",
        "hard": [
            "Techniques d'animation de communautés virtuelles et dynamiques de groupe",
            "Maîtrise approfondie des outils collaboratifs (Discord, Slack, Notion, Teams, Miro)",
            "Principes fondamentaux du Social Learning et de la motivation en formation d'adultes",
            "Analyse des données d'engagement et indicateurs de rétention"
        ],
        "soft": [
            "Empathie remarquable, énergie positive et enthousiasme communicatif",
            "Excellente aisance rédactionnelle et sens de la formulation engageante",
            "Réactivité, disponibilité et bienveillance",
            "Sens de l'écoute et psychologie relationnelle"
        ],
        "typicalDay": [
            {
                "time": "09:00",
                "activity": "Tournée matinale des canaux de discussion de la promotion sur Discord : réponse aux messages et lancement du rituel du matin."
            },
            {
                "time": "10:00",
                "activity": "Lancement du 'Défi du jour' pour stimuler l'application pratique du module de code de la veille."
            },
            {
                "time": "11:30",
                "activity": "Appel d'encouragement individuel en visio avec un apprenant qui n'a pas participé depuis trois jours."
            },
            {
                "time": "12:30",
                "activity": "Animation d'un café virtuel informel pour permettre aux apprenants de faire connaissance et d'échanger."
            },
            {
                "time": "14:00",
                "activity": "Préparation de la masterclasse en direct du jeudi soir avec un expert invité du secteur."
            },
            {
                "time": "16:00",
                "activity": "Analyse des données d'activité de la plateforme et point avec l'ingénieur pédagogique sur les points de blocage du cours."
            },
            {
                "time": "17:30",
                "activity": "Publication du récapitulatif des ressources partagées et mot de clôture bienveillant pour la soirée."
            }
        ],
        "daily": {
            "morning": "Tournée matinale des canaux de discussion de la promotion sur Discord : réponse aux messages et lancement du rituel du matin. • Lancement du 'Défi du jour' pour stimuler l'application pratique du module de code de la veille. • Appel d'encouragement individuel en visio avec un apprenant qui n'a pas participé depuis trois jours. • Animation d'un café virtuel informel pour permettre aux apprenants de faire connaissance et d'échanger.",
            "afternoon": "Préparation de la masterclasse en direct du jeudi soir avec un expert invité du secteur. • Analyse des données d'activité de la plateforme et point avec l'ingénieur pédagogique sur les points de blocage du cours. • Publication du récapitulatif des ressources partagées et mot de clôture bienveillant pour la soirée.",
            "challenges": "Régulation des dynamiques de groupe, transmission bienveillante et exigence éducative."
        },
        "saviezVous": {
            "fait": "Les études en sciences cognitives démontrent que le taux d'abandon dans un cours en ligne autonome passe de 85% à moins de 15% lorsqu'une communauté apprenante est activement animée par un Learning Community Manager.",
            "chiffre": "Les bootcamps en ligne et académies d'entreprises comptent des communautés atteignant plusieurs dizaines de milliers d'apprenants connectés simultanément."
        }
    },
    {
        "id": "formateur-professionnel-adultes",
        "slug": "formateur-professionnel-adultes",
        "title": "Formateur / Formatrice Professionnel d'Adultes (FPA)",
        "aliases": [
            "Formateur d'adultes",
            "Formateur de formateurs",
            "Consultant formateur en entreprise",
            "Formateur continue / reconversion",
            "Formation adulte",
            "Formateur d'adulte",
            "Formation continue pour adulte"
        ],
        "icon": "🧑‍🏫",
        "image": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80",
        "familyId": "education-formation",
        "familyName": "Enseignement, Éducation & Formation",
        "connectedFamilies": [
            "education-formation",
            "droit-management",
            "industrie-mecanique",
            "finance-fintech",
            "numerique-ia"
        ],
        "domain": "Formation Professionnelle Continue & Éducation des Adultes",
        "domainId": "formation-professionnelle",
        "subdomain": "Formation continue pour adultes",
        "sectors": [
            "Organismes privés de formation continue (Greta, AFPA, cabinets spécialisés)",
            "Centres de Formation d'Apprentis (CFA)",
            "Directions des Ressources Humaines de grandes entreprises",
            "Activité indépendante / Consultant formateur freelance"
        ],
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/enseignement",
        "studyramaSource": true,
        "isEmerging": false,
        "level": "Bac +2 à Bac +5 (Titre Professionnel de Formateur Professionnel d'Adultes - niveau 5/Bac+2 ou Master Sciences de l'Éducation) + Expertise métier confirmée",
        "salary": "🇫🇷 France : 2 000 € à 3 500 € net/mois pour un salarié en organisme de formation ; 350 € à 800 € / jour pour un formateur consultant indépendant selon son domaine d'expertise • 🇸🇳 Sénégal : 250 000 à 750 000 FCFA net/mois (Organismes de formation professionnelle, cabinets RH et instituts de formation continue à Dakar)",
        "salaryDetails": {
            "france": {
                "starter": "2 000 € net/mois (Salarié débutant)",
                "experienced": "2 700 € net/mois",
                "senior": "3 500 € net/mois (ou 500-800 €/jour en freelance)",
                "source": "Grilles conventionnelles des organismes de formation (France) / Titre Pro FPA"
            },
            "senegal": {
                "starter": "250 000 FCFA net/mois",
                "experienced": "450 000 FCFA net/mois",
                "senior": "750 000 FCFA net/mois",
                "source": "Ministère de la Formation Professionnelle du Sénégal / Cabinets de formation"
            }
        },
        "targetAudience": "Adultes salariés, demandeurs d'emploi, personnes en reconversion professionnelle, artisans et entrepreneurs",
        "workEnvironment": "Salles de formation pour adultes, entreprises clientes, centres AFPA/Greta, plateformes de visioformation",
        "summary": "Expert de la pédagogie des adultes (andragogie), le formateur professionnel transmet des compétences immédiatement opérationnelles à des salariés ou des adultes en reconversion. Il conçoit des modules sur mesure et anime des ateliers interactifs ancrés dans les réalités concrètes du monde du travail.",
        "missions": [
            "Concevoir l'ingénierie pédagogique de formations adaptées aux objectifs professionnels des adultes et des entreprises commanditaires.",
            "Animer des sessions de formation dynamiques privilégiant la mise en pratique, les études de cas et les jeux de rôles.",
            "Accompagner individuellement chaque adulte dans l'acquisition des gestes professionnels et la levée des freins à l'apprentissage.",
            "Évaluer les compétences acquises en cours et en fin de formation en vue de l'obtention d'une certification ou d'un titre professionnel."
        ],
        "activities": [
            "Élaboration des déroulés pédagogiques pas à pas, fiches d'exercices pratiques et supports de présentation multimédias.",
            "Animation de groupes d'adultes : alternance d'apports théoriques concis, d'ateliers en sous-groupes et de débriefings.",
            "Animation de classes virtuelles interactives pour la formation à distance.",
            "Rédaction des bilans de fin de formation et transmission des attestations de fin de stage aux OPCO et employeurs."
        ],
        "specialties": [
            "Formation aux métiers techniques et industriels",
            "Formation au management, leadership et compétences douces (Soft skills)",
            "Formation au numérique, bureautique et technologies de pointe",
            "Formation en sécurité au travail, habilitations et prévention des risques",
            "Reconversion professionnelle et accompagnement vers l'emploi"
        ],
        "skills": {
            "hard": [
                "Principes fondamentaux de l'andragogie (pédagogie active des adultes)",
                "Expertise métier pointue et actualisée dans son domaine d'intervention",
                "Ingénierie pédagogique par compétences et conception de déroulés d'animation",
                "Maîtrise des critères de qualité de la formation professionnelle (Qualiopi)"
            ],
            "soft": [
                "Excellente pédagogie, écoute active et bienveillance sans infantilisation",
                "Capacité à s'adapter à des publics adultes d'âges, de parcours et de niveaux hétérogènes",
                "Énergie communicative et sens de la dynamique de groupe",
                "Posture de facilitateur plutôt que de professeur magistral"
            ],
            "pedagogie": [
                "Partir de l'expérience vécue des apprenants pour construire les nouveaux savoirs",
                "Rendre l'apprentissage immédiatement applicable dans le travail quotidien",
                "Désarmer les angoisses des adultes éloignés de l'école depuis de nombreuses années"
            ],
            "communication": [
                "Capter l'attention d'un groupe d'adultes avec des exemples professionnels frappants",
                "Donner des feedbacks valorisants et orientés solution",
                "Dialoguer avec les DRH pour cerner précisément leurs besoins de formation"
            ],
            "organisation": [
                "Gérer le timing strict des modules de formation sur la journée",
                "Préparer la logistique des salles et les accès aux plateformes informatiques",
                "Renseigner avec rigueur les feuilles d'émargement réglementaires"
            ],
            "numerique": [
                "Animer des visioconférences dynamiques avec des outils collaboratifs (Klaxoon, Miro, Teams)",
                "Exploiter les plateformes LMS pour partager les supports de cours avant et après la session",
                "Concevoir des quiz d'ancrage mémoriel sur smartphone"
            ],
            "technical": [
                "Principes fondamentaux de l'andragogie (pédagogie active des adultes)",
                "Expertise métier pointue et actualisée dans son domaine d'intervention",
                "Ingénierie pédagogique par compétences et conception de déroulés d'animation",
                "Maîtrise des critères de qualité de la formation professionnelle (Qualiopi)"
            ],
            "human": [
                "Excellente pédagogie, écoute active et bienveillance sans infantilisation",
                "Capacité à s'adapter à des publics adultes d'âges, de parcours et de niveaux hétérogènes",
                "Énergie communicative et sens de la dynamique de groupe",
                "Posture de facilitateur plutôt que de professeur magistral"
            ]
        },
        "qualities": [
            "Andragogie et pragmatisme",
            "Écoute et bienveillance",
            "Dynamisme communicatif",
            "Expertise métier solide",
            "Adaptabilité"
        ],
        "studies": [
            "🇫🇷 France : Justifier d'une expérience professionnelle préalable réussie dans son métier d'origine + Obtention du Titre Professionnel de Formateur Professionnel d'Adultes (FPA, niveau 5/Bac+2 certifié par le Ministère du Travail) ou Licence pro / Master en formation des adultes.",
            "🇸🇳 Sénégal : Diplôme supérieur dans son domaine métier (technique, gestion, informatique) + formation certifiante en pédagogie des adultes et andragogie (CESTI, ESP, cabinets spécialisés)."
        ],
        "evolution": [
            "Responsable de formation en entreprise",
            "Directeur d'un centre ou organisme de formation professionnelle",
            "Formateur de formateurs et consultant senior en ingénierie de compétences",
            "Création de son propre organisme de formation indépendant certifié Qualiopi"
        ],
        "dailySchedule": [
            {
                "time": "08:30",
                "activity": "Arrivée dans la salle de formation, disposition des tables en U, vérification du vidéoprojecteur et accueil café des stagiaires adultes."
            },
            {
                "time": "09:00",
                "activity": "Tour de table de bienvenue, présentation des objectifs opérationnels et brise-glace participatif."
            },
            {
                "time": "09:30",
                "activity": "Séquence interactive : apport théorique concis suivi d'un atelier pratique en sous-groupes de trois personnes."
            },
            {
                "time": "11:15",
                "activity": "Débriefing collectif en plénière et partage des bonnes pratiques professionnelles."
            },
            {
                "time": "12:30",
                "activity": "Déjeuner convivial avec les stagiaires pour maintenir un climat d'échange informel."
            },
            {
                "time": "14:00",
                "activity": "Mise en situation professionnelle filmée et jeu de rôle pour ancrer les compétences acquises."
            },
            {
                "time": "16:00",
                "activity": "Quiz interactif sur smartphone pour évaluer les acquis de la journée et validation individuelle."
            },
            {
                "time": "17:00",
                "activity": "Émargement dématérialisé, recueil des évaluations de satisfaction et rangement des supports."
            }
        ],
        "quiz": [
            {
                "question": "En quoi l'andragogie (formation des adultes) se distingue-t-elle de la pédagogie scolaire traditionnelle ?",
                "options": [
                    "Elle s'adresse aux adultes en valorisant leur expérience vécue, leur autonomie et l'application concrète immédiate à leur métier",
                    "Elle punit les stagiaires au piquet",
                    "Elle consiste uniquement à regarder des films",
                    "Il n'y a aucune différence"
                ],
                "answer": 0,
                "explanation": "L'andragogie prend en compte l'expérience, la maturité et les besoins opérationnels concrets des adultes pour construire un apprentissage actif et respectueux."
            }
        ],
        "shortDescription": "Expert de la pédagogie des adultes (andragogie), le formateur professionnel transmet des compétences immédiatement opérationnelles à des salariés ou des adultes en reconversion. Il conçoit des modules sur mesure et anime des ateliers interactifs ancrés dans les réalités concrètes du monde du travail.",
        "longDescription": "Expert de la pédagogie des adultes (andragogie), le formateur professionnel transmet des compétences immédiatement opérationnelles à des salariés ou des adultes en reconversion. Il conçoit des modules sur mesure et anime des ateliers interactifs ancrés dans les réalités concrètes du monde du travail. Concevoir l'ingénierie pédagogique de formations adaptées aux objectifs professionnels des adultes et des entreprises commanditaires. Animer des sessions de formation dynamiques privilégiant la mise en pratique, les études de cas et les jeux de rôles. Accompagner individuellement chaque adulte dans l'acquisition des gestes professionnels et la levée des freins à l'apprentissage. Évaluer les compétences acquises en cours et en fin de formation en vue de l'obtention d'une certification ou d'un titre professionnel.",
        "description": "Expert de la pédagogie des adultes (andragogie), le formateur professionnel transmet des compétences immédiatement opérationnelles à des salariés ou des adultes en reconversion. Il conçoit des modules sur mesure et anime des ateliers interactifs ancrés dans les réalités concrètes du monde du travail. Concevoir l'ingénierie pédagogique de formations adaptées aux objectifs professionnels des adultes et des entreprises commanditaires. Animer des sessions de formation dynamiques privilégiant la mise en pratique, les études de cas et les jeux de rôles. Accompagner individuellement chaque adulte dans l'acquisition des gestes professionnels et la levée des freins à l'apprentissage. Évaluer les compétences acquises en cours et en fin de formation en vue de l'obtention d'une certification ou d'un titre professionnel.",
        "studyLevel": "Bac +2 à Bac +5 (Titre Professionnel de Formateur Professionnel d'Adultes - niveau 5/Bac+2 ou Master Sciences de l'Éducation) + Expertise métier confirmée",
        "hard": [
            "Principes fondamentaux de l'andragogie (pédagogie active des adultes)",
            "Expertise métier pointue et actualisée dans son domaine d'intervention",
            "Ingénierie pédagogique par compétences et conception de déroulés d'animation",
            "Maîtrise des critères de qualité de la formation professionnelle (Qualiopi)"
        ],
        "soft": [
            "Excellente pédagogie, écoute active et bienveillance sans infantilisation",
            "Capacité à s'adapter à des publics adultes d'âges, de parcours et de niveaux hétérogènes",
            "Énergie communicative et sens de la dynamique de groupe",
            "Posture de facilitateur plutôt que de professeur magistral"
        ],
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Arrivée dans la salle de formation, disposition des tables en U, vérification du vidéoprojecteur et accueil café des stagiaires adultes."
            },
            {
                "time": "09:00",
                "activity": "Tour de table de bienvenue, présentation des objectifs opérationnels et brise-glace participatif."
            },
            {
                "time": "09:30",
                "activity": "Séquence interactive : apport théorique concis suivi d'un atelier pratique en sous-groupes de trois personnes."
            },
            {
                "time": "11:15",
                "activity": "Débriefing collectif en plénière et partage des bonnes pratiques professionnelles."
            },
            {
                "time": "12:30",
                "activity": "Déjeuner convivial avec les stagiaires pour maintenir un climat d'échange informel."
            },
            {
                "time": "14:00",
                "activity": "Mise en situation professionnelle filmée et jeu de rôle pour ancrer les compétences acquises."
            },
            {
                "time": "16:00",
                "activity": "Quiz interactif sur smartphone pour évaluer les acquis de la journée et validation individuelle."
            },
            {
                "time": "17:00",
                "activity": "Émargement dématérialisé, recueil des évaluations de satisfaction et rangement des supports."
            }
        ],
        "daily": {
            "morning": "Arrivée dans la salle de formation, disposition des tables en U, vérification du vidéoprojecteur et accueil café des stagiaires adultes. • Tour de table de bienvenue, présentation des objectifs opérationnels et brise-glace participatif. • Séquence interactive : apport théorique concis suivi d'un atelier pratique en sous-groupes de trois personnes. • Débriefing collectif en plénière et partage des bonnes pratiques professionnelles. • Déjeuner convivial avec les stagiaires pour maintenir un climat d'échange informel.",
            "afternoon": "Mise en situation professionnelle filmée et jeu de rôle pour ancrer les compétences acquises. • Quiz interactif sur smartphone pour évaluer les acquis de la journée et validation individuelle. • Émargement dématérialisé, recueil des évaluations de satisfaction et rangement des supports.",
            "challenges": "Régulation des dynamiques de groupe, transmission bienveillante et exigence éducative."
        },
        "saviezVous": {
            "fait": "Le secteur de la formation professionnelle continue en France représente plus de 32 milliards d'euros d'investissements annuels pour l'adaptation des compétences et la reconversion des actifs.",
            "chiffre": "Plus de 60 000 organismes de formation détiennent la certification nationale de qualité Qualiopi en France."
        }
    }
];

    return {
        DOMAINS: DOMAINS,
        PEDAGOGICAL_PATHWAYS: PEDAGOGICAL_PATHWAYS,
        JOBS: JOBS,
        getDomains: function() {
            return DOMAINS;
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
            return PEDAGOGICAL_PATHWAYS;
        },
        getPedagogicalPathways: function() {
            return PEDAGOGICAL_PATHWAYS;
        }
    };
}));

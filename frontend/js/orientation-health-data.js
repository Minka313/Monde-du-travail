/**
 * MODULE OFFICIEL SANTÉ, SOINS & PARAMÉDICAL
 * Base de données exhaustive : 11 Domaines • 30 Fiches Métiers Haute Profondeur
 * Double ancrage France (€) / Sénégal (FCFA)
 * Sources Principales : Studyrama Santé, Ministère de la Santé, Ordres Professionnels
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.OrientationHealthData = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {
    'use strict';

    const DOMAINS = [
    {
        "id": "medecine",
        "name": "Médecine & Chirurgie",
        "icon": "🩺",
        "order": 1,
        "chainStage": "Diagnostic & Traitement Médical",
        "description": "Examiner, diagnostiquer, soigner les pathologies et réaliser des actes médicaux et chirurgicaux pour préserver et rétablir la santé.",
        "subdomains": [
            "Médecine générale",
            "Chirurgie & Bloc"
        ]
    },
    {
        "id": "soins-infirmiers",
        "name": "Soins Infirmiers & Pratiques Avancées",
        "icon": "👩⚕️",
        "order": 2,
        "chainStage": "Soins & Accompagnement Clinique",
        "description": "Dispenser les soins prescrits, surveiller l'état clinique des patients, coordonner les parcours de soins et assurer la prévention.",
        "subdomains": [
            "Soins généraux",
            "Anesthésie-réanimation (IADE)",
            "Bloc opératoire (IBODE)",
            "Pratique avancée (IPA)"
        ]
    },
    {
        "id": "sante-dentaire",
        "name": "Santé Dentaire & Odontologie",
        "icon": "🦷",
        "order": 3,
        "chainStage": "Soins Bucco-Dentaires & Prothèses",
        "description": "Prévenir, diagnostiquer et traiter les anomalies et maladies de la bouche, des dents, des gencives et des maxillaires.",
        "subdomains": [
            "Chirurgie dentaire",
            "Assistance dentaire",
            "Prothèse dentaire & CFAO"
        ]
    },
    {
        "id": "femme-enfant",
        "name": "Santé de la Femme & de l'Enfant",
        "icon": "👶",
        "order": 4,
        "chainStage": "Maternité & Pédiatrie",
        "description": "Accompagner la grossesse, l'accouchement, la santé gynécologique et prodiguer des soins spécialisés aux nouveau-nés et enfants.",
        "subdomains": [
            "Maïeutique & Maternité",
            "Pédiatrie & Néonatologie",
            "Petite enfance"
        ]
    },
    {
        "id": "sante-mentale",
        "name": "Santé Mentale & Psychiatrie",
        "icon": "🧠",
        "order": 5,
        "chainStage": "Psychiatrie & Soins Relationnels",
        "description": "Diagnostiquer et soigner les troubles psychiques et psychiatriques, avec thérapies médicamenteuses et accompagnement relationnel.",
        "subdomains": [
            "Psychiatrie clinique",
            "Soins infirmiers psychiatriques"
        ]
    },
    {
        "id": "reeducation-readaptation",
        "name": "Rééducation, Réadaptation & Autonomie",
        "icon": "🦴",
        "order": 6,
        "chainStage": "Restauration Fonctionnelle & Ergonomie",
        "description": "Rétablir les capacités motrices, sensorielles, posturales et de communication pour restaurer l'autonomie du patient.",
        "subdomains": [
            "Kinésithérapie",
            "Ergothérapie",
            "Orthophonie",
            "Psychomotricité",
            "Pédicurie-Podologie",
            "Orthoptie"
        ]
    },
    {
        "id": "urgences-secours",
        "name": "Urgences, Secours Médical & Régulation",
        "icon": "🚑",
        "order": 7,
        "chainStage": "Intervention Préhospitalière & Triage",
        "description": "Prendre en charge les urgences vitales, réguler les appels d'aide médicale urgente et transporter les patients sécurisés.",
        "subdomains": [
            "SMUR & Déchocage",
            "Ambulance & Transport sanitaire",
            "Régulation médicale (SAMU)"
        ]
    },
    {
        "id": "laboratoires-medicaux",
        "name": "Biologie Médicale & Diagnostics de Laboratoire",
        "icon": "🔬",
        "order": 8,
        "chainStage": "Analyses In Vitro & Diagnostic",
        "description": "Réaliser et interpréter les examens de biologie médicale (hématologie, biochimie, sérologie) guidant les décisions cliniques.",
        "subdomains": [
            "Biochimie clinique",
            "Hématologie & Hémostase"
        ]
    },
    {
        "id": "pharmacie",
        "name": "Pharmacie Clinique, Officine & Distribution",
        "icon": "💊",
        "order": 9,
        "chainStage": "Médicaments & Dispositifs Thérapeutiques",
        "description": "Délivrer les médicaments, analyser les ordonnances, garantir la sécurité thérapeutique et assurer la pharmacovigilance.",
        "subdomains": [
            "Pharmacie d'officine",
            "Préparation magistrale"
        ]
    },
    {
        "id": "management-administration-sante",
        "name": "Direction, Encadrement & Administration de Santé",
        "icon": "🏥",
        "order": 10,
        "chainStage": "Gouvernance & Gestion Hospitalière",
        "description": "Diriger les structures hospitalières, manager les équipes soignantes et orchestrer la logistique et l'administration des soins.",
        "subdomains": [
            "Direction d'établissement",
            "Coordination des soins (Cadres)",
            "Secrétariat & Dossier patient"
        ]
    },
    {
        "id": "technologies-biomedicales",
        "name": "Dispositifs Médicaux & Ingénierie Biomédicale",
        "icon": "⚙️",
        "order": 11,
        "chainStage": "Maintenance & Équipements de Haute Précision",
        "description": "Maintenir, calibrer et déployer les technologies d'imagerie, respirateurs, moniteurs et blocs opératoires connectés.",
        "subdomains": [
            "Dispositifs médicaux"
        ]
    }
];

    const PEDAGOGICAL_PATHWAYS = [
    {
        "id": "chaine-de-soins-integree",
        "title": "Du premier symptôme au rétablissement : la chaîne de soins intégrée",
        "icon": "🏥",
        "description": "Comprendre comment les 11 domaines de santé coopèrent autour du patient pour assurer diagnostic, traitement et rééducation.",
        "steps": [
            {
                "order": 1,
                "name": "Alerte & Triage",
                "icon": "🚑",
                "desc": "Appel SAMU/15, régulation médicale et transport d'urgence"
            },
            {
                "order": 2,
                "name": "Examen & Diagnostic",
                "icon": "🩺",
                "desc": "Consultation générale ou d'accueil des urgences"
            },
            {
                "order": 3,
                "name": "Analyses & Imagerie",
                "icon": "🔬",
                "desc": "Bilans de biologie médicale et imagerie diagnostique"
            },
            {
                "order": 4,
                "name": "Intervention & Soins",
                "icon": "💉",
                "desc": "Chirurgie, anesthésie ou prise en charge infirmière"
            },
            {
                "order": 5,
                "name": "Médication",
                "icon": "💊",
                "desc": "Dispensation sécurisée par la pharmacie hospitalière ou d'officine"
            },
            {
                "order": 6,
                "name": "Rééducation",
                "icon": "🏃",
                "desc": "Kinésithérapie, ergothérapie ou orthophonie pour retrouver l'autonomie"
            },
            {
                "order": 7,
                "name": "Prévention",
                "icon": "🛡️",
                "desc": "Suivi au long cours, hygiène et éducation thérapeutique"
            }
        ]
    },
    {
        "id": "cycle-de-la-vie-sante",
        "title": "Le continuum de santé au fil des âges de la vie",
        "icon": "👶👵",
        "description": "L'accompagnement soignant de la conception au grand âge.",
        "steps": [
            {
                "order": 1,
                "name": "Maternité & Naissance",
                "icon": "🤰",
                "desc": "Suivi prénatal et accouchement par la sage-femme"
            },
            {
                "order": 2,
                "name": "Petite enfance",
                "icon": "🍼",
                "desc": "Puéricultrice et pédiatre pour la croissance et vaccinations"
            },
            {
                "order": 3,
                "name": "Jeunesse & Adulte",
                "icon": "🧑",
                "desc": "Médecine préventive, dentaire et santé mentale"
            },
            {
                "order": 4,
                "name": "Grand âge & Autonomie",
                "icon": "🧓",
                "desc": "Gériatrie, kinésithérapie, soins infirmiers et ergothérapie"
            }
        ]
    }
];

    const JOBS = [
    {
        "id": "medecin-generaliste",
        "slug": "medecin-generaliste",
        "title": "Médecin Généraliste",
        "aliases": [
            "Médecin de famille",
            "Omnipraticien",
            "Praticien de premier recours"
        ],
        "icon": "🩺",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "biologie-chimie"
        ],
        "domain": "Médecine & Chirurgie",
        "domainId": "medecine",
        "subdomain": "Médecine générale",
        "shortDescription": "Pilier central du système de santé, le médecin généraliste diagnostique, traite et coordonne les soins de santé globale pour tous les âges de la vie.",
        "longDescription": "Interlocuteur privilégié des patients, le médecin généraliste assure une prise en charge globale : prévention, dépistage, traitement des affections aiguës et chroniques (diabète, hypertension). Il prescrit les examens complémentaires et oriente vers les confrères spécialistes lorsque la situation l'exige. En cabinet libéral, maison de santé ou centre hospitalier, il incarne la continuité des soins et l'écoute humaine indispensable au rétablissement.",
        "simpleDefinition": "Docteur en médecine qui reçoit les patients pour tout problème de santé, pose un diagnostic, prescrit les médicaments et coordonne les soins.",
        "level": "Bac +9 (Doctorat d'État en Médecine)",
        "missions": [
            "Recevoir les patients en consultation clinique, écouter leurs symptômes et pratiquer un examen physique complet",
            "Poser un diagnostic médical et prescrire le traitement adapté (ordonnances, examens biologiques, radiographies)",
            "Assurer le suivi régulier des patients atteints de maladies chroniques et coordonner leur parcours avec les spécialistes",
            "Mener des actions de prévention, de dépistage précoce et de vaccination pour toute la famille",
            "Participer à la permanence des soins (gardes médicales, urgences de premier recours)"
        ],
        "workEnvironment": "Cabinet libéral individuel ou de groupe, maison de santé pluriprofessionnelle (MSP), dispensaire, centre de santé communal ou service des urgences hospitalières.",
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Début des consultations sur rendez-vous au cabinet : auscultations, bilans de santé, renouvellements"
            },
            {
                "time": "11:30",
                "activity": "Consultation d'urgence pour un enfant fébrile : diagnostic d'otite et prescription d'antibiothérapie adaptée"
            },
            {
                "time": "13:30",
                "activity": "Visites à domicile pour des patients âgés ou à mobilité réduite"
            },
            {
                "time": "15:30",
                "activity": "Reprise des consultations et téléconsultations de suivi pour des bilans biologiques"
            },
            {
                "time": "19:00",
                "activity": "Analyse des résultats de laboratoire reçus, courriers aux confrères et tenue des dossiers médicaux"
            }
        ],
        "skills": {
            "technical": [
                "Diagnostic sémiologique et examen clinique méthodique",
                "Pharmacologie clinique et interactions médicamenteuses",
                "Gestes d'urgence et réanimation cardio-pulmonaire",
                "Interprétation d'électrocardiogrammes (ECG) et bilans biologiques",
                "Gestion du dossier médical informatisé et télé-expertise"
            ],
            "human": [
                "Écoute empathique et sens aigu de la relation humaine",
                "Résistance au stress et réactivité face à l'imprévu",
                "Pédagogie pour expliquer les pathologies et traitements",
                "Respect strict du secret médical et éthique déontologique"
            ],
            "tools": [
                "Stéthoscope de précision (Littmann)",
                "Tensiomètre et otoscope",
                "Électrocardiographe portable",
                "Logiciel de dossier médical partagé (DMP)"
            ],
            "soft": [
                "Écoute empathique et sens aigu de la relation humaine",
                "Résistance au stress et réactivité face à l'imprévu",
                "Pédagogie pour expliquer les pathologies et traitements",
                "Respect strict du secret médical et éthique déontologique"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Bac général à spécialités scientifiques (SVT, Physique-Chimie, Maths) ou Bac S",
                    "desc": "Excellentes bases scientifiques et méthode de travail rigoureuse."
                },
                {
                    "step": "Premier cycle (Bac +1 à +3)",
                    "title": "PASS / L.AS (France) ou Première Année Commune de Médecine (Sénégal)",
                    "desc": "Sélection exigeante, anatomie, physiologie, biochimie, sémiologie."
                },
                {
                    "step": "Deuxième cycle (Bac +4 à +6)",
                    "title": "Externat en médecine",
                    "desc": "Stages hospitaliers quotidiens et apprentissage des pathologies cliniques."
                },
                {
                    "step": "Troisième cycle (Bac +7 à +9)",
                    "title": "Internat de médecine générale & Thèse d'exercice",
                    "desc": "Pratique en autonomie supervisée en cabinet et hôpital, soutenance de thèse de Docteur en Médecine."
                }
            ],
            "schools": [
                {
                    "name": "Faculté de Médecine, de Pharmacie et d'Odonto-Stomatologie (FMPOS) — UCAD Dakar",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "UFR des Sciences de la Santé — Université Gaston Berger (UGB) Saint-Louis",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "UFR de Santé — Université Iba Der Thiam de Thiès",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Facultés de Médecine des universités françaises (Sorbonne, Paris Cité, Bordeaux, Lyon)",
                    "country": "France",
                    "scope": "France"
                }
            ],
            "certifications": [
                "Diplôme d'État de Docteur en Médecine",
                "Inscription obligatoire au Tableau de l'Ordre des Médecins"
            ]
        },
        "career": {
            "sectors": [
                "Santé publique",
                "Médecine libérale",
                "Établissements hospitaliers",
                "Centres de santé"
            ],
            "employerTypes": [
                "Pratique libérale (cabinet privé)",
                "Hôpitaux publics (CHU, CHR)",
                "Centres de santé municipaux",
                "Organisations humanitaires (MSF, Croix-Rouge)"
            ],
            "evolution": "Médecin généraliste installé ➔ Maître de stage universitaire ➔ Médecin coordinateur d'Ehpad/clinique ➔ Directeur de centre de santé",
            "pros": "Utilité sociale absolue, lien de confiance profond avec les patients, indépendance professionnelle en libéral, plein emploi garanti.",
            "cons": "Charge de travail hebdomadaire très lourde (50 à 60h), astreintes de nuit et gardes de week-end, responsabilité juridique et morale constante."
        },
        "salary": "🇫🇷 France : 4 500 - 8 500 € net/mois en libéral (environ 3 500 - 6 000 € à l'hôpital) • 🇸🇳 Sénégal : 400 000 - 1 500 000 FCFA net/mois dans le public (jusqu'à 2 500 000 FCFA en clinique privée)",
        "saviezVous": {
            "fait": "Selon les données de l'Ordre des Médecins, un médecin généraliste traite en moyenne entre 85% et 90% des motifs de consultation sans nécessiter d'orientation vers un deuxième avis spécialisé.",
            "pourquoi": "Sa formation pluridisciplinaire poussée lui confère une vision d'ensemble de l'organisme humain et des interactions biopsychosociales."
        },
        "sources": [
            {
                "organization": "Studyrama",
                "title": "Fiche métier : Médecin généraliste",
                "url": "https://www.studyrama.com/formations/fiches-metiers/sante/medecin-generaliste",
                "type": "metier"
            },
            {
                "organization": "Conseil National de l'Ordre des Médecins",
                "title": "Démographie médicale et exercice de la médecine générale",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "soigner-aider",
            "comprendre-corps-humain",
            "resoudre-problemes"
        ],
        "relatedJobSlugs": [
            "medecin-urgentiste",
            "chirurgien",
            "infirmier-diplome-etat",
            "pediatre"
        ],
        "summary": "Pilier central du système de santé, le médecin généraliste diagnostique, traite et coordonne les soins de santé globale pour tous les âges de la vie.",
        "description": "Interlocuteur privilégié des patients, le médecin généraliste assure une prise en charge globale : prévention, dépistage, traitement des affections aiguës et chroniques (diabète, hypertension). Il prescrit les examens complémentaires et oriente vers les confrères spécialistes lorsque la situation l'exige. En cabinet libéral, maison de santé ou centre hospitalier, il incarne la continuité des soins et l'écoute humaine indispensable au rétablissement.",
        "studyLevel": "Bac +9 (Doctorat d'État en Médecine)",
        "daily": {
            "morning": "Début des consultations sur rendez-vous au cabinet : auscultations, bilans de santé, renouvellements • Consultation d'urgence pour un enfant fébrile : diagnostic d'otite et prescription d'antibiothérapie adaptée",
            "afternoon": "Visites à domicile pour des patients âgés ou à mobilité réduite • Reprise des consultations et téléconsultations de suivi pour des bilans biologiques • Analyse des résultats de laboratoire reçus, courriers aux confrères et tenue des dossiers médicaux",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sante/medecin-generaliste"
    },
    {
        "id": "chirurgien",
        "slug": "chirurgien",
        "title": "Chirurgien / Médecin Spécialiste en Chirurgie",
        "aliases": [
            "Chirurgien viscéral",
            "Chirurgien orthopédiste",
            "Chirurgien traumatologue"
        ],
        "icon": "👨⚕️",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "biologie-chimie"
        ],
        "domain": "Médecine & Chirurgie",
        "domainId": "medecine",
        "subdomain": "Chirurgie & Bloc",
        "shortDescription": "Expert des interventions opératoires, le chirurgien répare traumatismes, retire tumeurs et rétablit les fonctions vitales au bloc opératoire.",
        "longDescription": "Le chirurgien opère le corps humain avec une rigueur millimétrique. Qu'il pratique la chirurgie orthopédique, viscérale, cardiaque ou réparatrice, il pose l'indication opératoire en amont, conduit l'acte au bloc avec l'équipe pluridisciplinaire (anesthésistes, IBODE) et assure le suivi post-opératoire jusqu'à la cicatrisation complète.",
        "simpleDefinition": "Médecin hautement qualifié qui opère les patients au bloc opératoire pour soigner blessures, maladies ou malformations.",
        "level": "Bac +11 à Bac +12 (DES de Chirurgie)",
        "missions": [
            "Examiner les patients lors de consultations pré-opératoires et poser l'indication chirurgicale",
            "Planifier l'acte avec l'équipe anesthésique et vérifier les imageries (IRM, scanners 3D)",
            "Réaliser l'intervention chirurgicale au bloc opératoire dans le respect absolu de l'asepsie",
            "Gérer les complications per-opératoires imprévues avec sang-froid",
            "Superviser les soins de réanimation post-opératoire et le suivi de cicatrisation"
        ],
        "workEnvironment": "Bloc opératoire stérile en milieu hospitalier public (CHU) ou clinique chirurgicale privée, unité de soins continus.",
        "typicalDay": [
            {
                "time": "07:30",
                "activity": "Visite des opérés de la veille en service de chirurgie et validation des sorties"
            },
            {
                "time": "08:30",
                "activity": "Lavage chirurgical des mains et première intervention : résection d'une hernie discale sous microscope"
            },
            {
                "time": "12:00",
                "activity": "Seconde intervention programmée : ostéosynthèse complexe de fracture ouverte"
            },
            {
                "time": "15:00",
                "activity": "Consultations externes pré et post-opératoires, explication des bénéfices/risques aux patients"
            },
            {
                "time": "18:00",
                "activity": "Garde aux urgences chirurgicales pour admission d'un traumatisé de la route"
            }
        ],
        "skills": {
            "technical": [
                "Techniques de dissection, hémostase et sutures microchirurgicales",
                "Chirurgie mini-invasive, coelioscopie et chirurgie assistée par robot",
                "Anatomie chirurgicale descriptive et topographique parfaite",
                "Gestion du risque infectieux et de l'hémodynamique per-opératoire",
                "Prise de décision rapide en situation critique d'hémorragie"
            ],
            "human": [
                "Dextérité manuelle et coordination visuo-motrice exceptionnelle",
                "Endurance physique et concentration soutenue sur des interventions de plusieurs heures",
                "Sens aigu du leadership bienveillant en équipe de bloc",
                "Capacité à annoncer des diagnostics graves avec empathie"
            ],
            "tools": [
                "Bistouri électrique et instruments de microchirurgie",
                "Optiques de coelioscopie et colonnes vidéo HD",
                "Console robotisée de chirurgie (Da Vinci)",
                "Amplificateur de brillance radiologique au bloc"
            ],
            "soft": [
                "Dextérité manuelle et coordination visuo-motrice exceptionnelle",
                "Endurance physique et concentration soutenue sur des interventions de plusieurs heures",
                "Sens aigu du leadership bienveillant en équipe de bloc",
                "Capacité à annoncer des diagnostics graves avec empathie"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Bac scientifique S1, S2 ou bac général scientifique",
                    "desc": "Mention requise, profil d'excellence académique."
                },
                {
                    "step": "Cycle médical (Bac +1 à +6)",
                    "title": "Études médicales complètes et externat",
                    "desc": "Concours de l'Internat / EDN en fin de 6ème année."
                },
                {
                    "step": "Internat chirurgical (Bac +7 à +12)",
                    "title": "Diplôme d'Études Spécialisées (DES) en Chirurgie",
                    "desc": "5 à 6 ans d'internat chirurgical exclusif et compagnonnage au bloc."
                }
            ],
            "schools": [
                {
                    "name": "FMPOS — UCAD Dakar (Département de Chirurgie Générale et Spécialités)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "UFR Santé — UGB Saint-Louis",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Facultés de médecine et CHU de France (Paris, Lyon, Marseille, Toulouse)",
                    "country": "France",
                    "scope": "France"
                }
            ],
            "certifications": [
                "DES de Chirurgie",
                "Thèse de Docteur en Médecine",
                "Ordre des Médecins"
            ]
        },
        "career": {
            "sectors": [
                "Chirurgie hospitalière",
                "Cliniques privées",
                "Enseignement et recherche médicale"
            ],
            "employerTypes": [
                "CHU / Hôpitaux militaires",
                "Cliniques mutualistes ou privées",
                "ONG de chirurgie d'urgence (Chirurgiens du Monde)"
            ],
            "evolution": "Chirurgien praticien hospitalier ➔ Chef de clinique ➔ Chef de service chirurgical ➔ Professeur des Universités (PUPH)",
            "pros": "Prestige professionnel élevé, pouvoir de guérison immédiat et spectaculaire, technologie de pointe au bloc.",
            "cons": "Énorme charge mentale, risque médicolégal omniprésent, gardes éprouvantes et postures debout prolongées."
        },
        "salary": "🇫🇷 France : 5 500 - 14 000 € net/mois selon statut et secteur • 🇸🇳 Sénégal : 600 000 - 2 500 000 FCFA net/mois (secteur public à privé)",
        "saviezVous": {
            "fait": "Les chirurgiens modernes s'entraînent désormais sur des simulateurs de réalité virtuelle haptiques reproduisant exactement la résistance des tissus humains.",
            "pourquoi": "Cela permet de répéter des opérations rares avant d'intervenir pour la première fois sur un être humain."
        },
        "sources": [
            {
                "organization": "Studyrama",
                "title": "Fiche métier : Chirurgien",
                "url": "https://www.studyrama.com/formations/fiches-metiers/sante/chirurgien",
                "type": "metier"
            },
            {
                "organization": "Académie Nationale de Chirurgie",
                "title": "La formation chirurgicale en France",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "soigner-aider",
            "comprendre-corps-humain",
            "construire-fabriquer"
        ],
        "relatedJobSlugs": [
            "medecin-generaliste",
            "medecin-urgentiste",
            "infirmier-bloc-operatoire",
            "chirurgien-dentiste"
        ],
        "summary": "Expert des interventions opératoires, le chirurgien répare traumatismes, retire tumeurs et rétablit les fonctions vitales au bloc opératoire.",
        "description": "Le chirurgien opère le corps humain avec une rigueur millimétrique. Qu'il pratique la chirurgie orthopédique, viscérale, cardiaque ou réparatrice, il pose l'indication opératoire en amont, conduit l'acte au bloc avec l'équipe pluridisciplinaire (anesthésistes, IBODE) et assure le suivi post-opératoire jusqu'à la cicatrisation complète.",
        "studyLevel": "Bac +11 à Bac +12 (DES de Chirurgie)",
        "daily": {
            "morning": "Visite des opérés de la veille en service de chirurgie et validation des sorties • Lavage chirurgical des mains et première intervention : résection d'une hernie discale sous microscope • Seconde intervention programmée : ostéosynthèse complexe de fracture ouverte",
            "afternoon": "Consultations externes pré et post-opératoires, explication des bénéfices/risques aux patients • Garde aux urgences chirurgicales pour admission d'un traumatisé de la route",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sante/chirurgien"
    },
    {
        "id": "medecin-urgentiste",
        "slug": "medecin-urgentiste",
        "title": "Médecin Urgentiste",
        "aliases": [
            "Praticien hospitalier urgentiste",
            "Médecin SMUR",
            "Urgentiste SAMU"
        ],
        "icon": "🚑",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "biologie-chimie"
        ],
        "domain": "Urgences, Secours Médical & Régulation",
        "domainId": "urgences-secours",
        "subdomain": "SMUR & Déchocage",
        "shortDescription": "En première ligne des urgences vitales et des catastrophes, l'urgentiste stabilise les détresses aiguës en service hospitalier et en intervention mobile SMUR.",
        "longDescription": "L'urgentiste est le médecin de la première heure. Au service d'accueil des urgences (SAU), en salle d'accueil des urgences vitales (déchocage) ou à bord de l'ambulance de réanimation du SMUR, il évalue en quelques secondes la gravité d'un état critique (infarctus, polytraumatisme, AVC, détresse respiratoire) et initie les gestes de survie.",
        "simpleDefinition": "Médecin spécialisé dans les soins d'extrême urgence et la réanimation immédiate des patients en danger de mort.",
        "level": "Bac +10 (DES de Médecine d'Urgence)",
        "missions": [
            "Trier et prendre en charge sans délai les patients présentant une détresse vitale",
            "Pratiquer les gestes de réanimation avancée : intubation endotrachéale, défibrillation, pose de voies veineuses centrales",
            "Intervenir hors de l'hôpital avec l'équipe mobile du SMUR (accidents de la voie publique, domiciles)",
            "Prescrire les bilans biologiques et radiologiques d'urgence pour orienter vers le bloc ou les soins intensifs",
            "Coordonner la régulation médicale des appels d'urgence au centre 15 / SAMU"
        ],
        "workEnvironment": "Services d'urgences hospitaliers (SAU), véhicules d'intervention SMUR et hélicoptères sanitaires, centre de régulation SAMU.",
        "typicalDay": [
            {
                "time": "08:00",
                "activity": "Transmission médicale entre l'équipe de nuit et l'équipe de jour au déchocage"
            },
            {
                "time": "09:30",
                "activity": "Prise en charge d'un arrêt cardiorespiratoire : réanimation, massage, administration d'adrénaline"
            },
            {
                "time": "11:45",
                "activity": "Départ en intervention SMUR pour un choc anaphylactique grave sur voie publique"
            },
            {
                "time": "14:30",
                "activity": "Examen de patients au box des urgences (douleurs thoraciques, fractures, coliques néphrétiques)"
            },
            {
                "time": "18:00",
                "activity": "Point d'admission avec la réanimation et les services de cardiologie interventionnelle"
            }
        ],
        "skills": {
            "technical": [
                "Techniques de réanimation cardio-pulmonaire avancée (ACLS)",
                "Gestion des voies aériennes difficiles et ventilation mécanique",
                "Échographie clinique ciblée d'urgence (échographie FAST)",
                "Traitement de la douleur aiguë et sédation procédurale",
                "Protocoles de régulation et plans de secours d'urgence (Plan Blanc)"
            ],
            "human": [
                "Calme olympien et lucidité maximale sous stress intense",
                "Prise de décision rapide sans hésitation",
                "Capacité à diriger une équipe de réanimation dans l'urgence",
                "Empathie immédiate pour rassurer les proches angoissés"
            ],
            "tools": [
                "Défibrillateur multiparamétrique de transport",
                "Échographe portable de poche (Point-of-Care Ultrasound)",
                "Respirateur de transport et matériel d'intubation vidéo",
                "Dispositifs d'immobilisation de traumatologie"
            ],
            "soft": [
                "Calme olympien et lucidité maximale sous stress intense",
                "Prise de décision rapide sans hésitation",
                "Capacité à diriger une équipe de réanimation dans l'urgence",
                "Empathie immédiate pour rassurer les proches angoissés"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Baccalauréat scientifique S",
                    "desc": "Bases solides en physiologie et biochimie."
                },
                {
                    "step": "Cycles 1 et 2 (Bac +1 à +6)",
                    "title": "Études médicales complètes",
                    "desc": "Stages aux urgences, réanimation et cardiologie."
                },
                {
                    "step": "Troisième cycle (Bac +7 à +10)",
                    "title": "DES de Médecine d'Urgence",
                    "desc": "4 ans d'internat en SMUR, urgences adultes, pédiatriques et réanimation."
                }
            ],
            "schools": [
                {
                    "name": "FMPOS UCAD Dakar (Spécialisation Médecine d'Urgence / SAMU National du Sénégal)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Facultés de médecine et CHU français (Paris, Lille, Nancy, Lyon)",
                    "country": "France",
                    "scope": "France"
                }
            ],
            "certifications": [
                "DES de Médecine d'Urgence",
                "Attestation de Formation aux Gestes et Soins d'Urgence (AFGSU)",
                "Ordre des Médecins"
            ]
        },
        "career": {
            "sectors": [
                "Médecine d'urgence hospitalière",
                "SAMU / SMUR",
                "Médecine humanitaire et rapatriement sanitaire"
            ],
            "employerTypes": [
                "Hôpitaux publics (CHU, CHR)",
                "Sociétés d'assistance et rapatriement international (Europ Assistance, SOS Médecins)",
                "Armée et sécurité civile"
            ],
            "evolution": "Praticien hospitalier urgentiste ➔ Responsable d'unité SMUR ➔ Chef du pôle urgences-réanimation ➔ Directeur de SAMU",
            "pros": "Adrénaline, sauvetages directs de vies humaines au quotidien, grande solidarité d'équipe, diversité totale des cas cliniques.",
            "cons": "Rythme de travail en gardes de 12h ou 24h, impact lourd sur le sommeil et la vie personnelle, confrontation fréquente à la mort."
        },
        "salary": "🇫🇷 France : 4 000 - 8 000 € net/mois selon ancienneté et gardes • 🇸🇳 Sénégal : 450 000 - 1 600 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Le concept de SAMU (Service d'Aide Médicale Urgente) et de SMUR projetant le médecin et l'hôpital directement sur la voie publique est une innovation médicale francophone créée à Toulouse par le Pr Louis Lareng.",
            "pourquoi": "Avant cela, les ambulances se contentaient de transporter les blessés le plus vite possible sans soins médicaux pendant le trajet."
        },
        "sources": [
            {
                "organization": "Studyrama",
                "title": "Fiche métier : Médecin urgentiste",
                "url": "https://www.studyrama.com/formations/fiches-metiers/sante/medecin-urgentiste",
                "type": "metier"
            },
            {
                "organization": "Société Française de Médecine d'Urgence (SFMU)",
                "title": "Référentiel métier d'urgentiste",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "urgences-secours",
            "soigner-aider",
            "comprendre-corps-humain"
        ],
        "relatedJobSlugs": [
            "ambulancier",
            "assistant-regulation-medicale",
            "medecin-generaliste",
            "infirmier-anesthesiste"
        ],
        "summary": "En première ligne des urgences vitales et des catastrophes, l'urgentiste stabilise les détresses aiguës en service hospitalier et en intervention mobile SMUR.",
        "description": "L'urgentiste est le médecin de la première heure. Au service d'accueil des urgences (SAU), en salle d'accueil des urgences vitales (déchocage) ou à bord de l'ambulance de réanimation du SMUR, il évalue en quelques secondes la gravité d'un état critique (infarctus, polytraumatisme, AVC, détresse respiratoire) et initie les gestes de survie.",
        "studyLevel": "Bac +10 (DES de Médecine d'Urgence)",
        "daily": {
            "morning": "Transmission médicale entre l'équipe de nuit et l'équipe de jour au déchocage • Prise en charge d'un arrêt cardiorespiratoire : réanimation, massage, administration d'adrénaline • Départ en intervention SMUR pour un choc anaphylactique grave sur voie publique",
            "afternoon": "Examen de patients au box des urgences (douleurs thoraciques, fractures, coliques néphrétiques) • Point d'admission avec la réanimation et les services de cardiologie interventionnelle",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sante/medecin-urgentiste"
    },
    {
        "id": "infirmier-diplome-etat",
        "slug": "infirmier-diplome-etat",
        "title": "Infirmier / Infirmière Diplômé(e) d'État (IDE)",
        "aliases": [
            "Infirmier hospitalier",
            "Infirmier clinicien",
            "Infirmière en soins généraux"
        ],
        "icon": "💉",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "biologie-chimie"
        ],
        "domain": "Soins Infirmiers & Pratiques Avancées",
        "domainId": "soins-infirmiers",
        "subdomain": "Soins généraux",
        "shortDescription": "Cœur battant des établissements de soins, l'infirmier dispense les traitements, surveille l'état de santé des patients et assure leur accompagnement quotidien.",
        "longDescription": "L'infirmier diplômé d'État (IDE) assure le lien constant entre le médecin et le patient. Sur prescription médicale ou dans le cadre de son rôle propre d'autonomie, il pose des perfusions, administre les médicaments, surveille les constantes vitales (tension, pouls, saturation), réalise des pansements complexes et écoute les angoisses des personnes soignées.",
        "simpleDefinition": "Professionnel de santé qui prodigue des soins médicaux, surveille l'état des malades et veille à leur bien-être au quotidien.",
        "level": "Bac +3 (Diplôme d'État d'Infirmier - Grade Licence)",
        "missions": [
            "Évaluer l'état de santé du patient et concevoir le plan de soins infirmiers personnalisé",
            "Administrer les thérapeutiques prescrites (injections, perfusions, chimiothérapies, médicaments)",
            "Pratiquer les soins techniques (pansements complexes, sondages, prises de sang, prélèvements)",
            "Surveiller l'évolution des paramètres vitaux et alerter le médecin en cas d'aggravation",
            "Écouter, rassurer et éduquer le patient et ses proches à la gestion de la maladie"
        ],
        "workEnvironment": "Services hospitaliers (médecine, chirurgie, réanimation, gériatrie), cliniques privées, EHPAD, centres de soins et exercice libéral.",
        "typicalDay": [
            {
                "time": "06:45",
                "activity": "Relève et transmissions orales avec l'équipe soignante de nuit"
            },
            {
                "time": "07:30",
                "activity": "Tournée des constantes vitales, administration des traitements matinaux et bilans sanguins"
            },
            {
                "time": "10:00",
                "activity": "Réfection de pansements chirurgicaux stériles et pose de perfusions"
            },
            {
                "time": "12:00",
                "activity": "Visite médicale conjointe avec les médecins du service et ajustement des prescriptions"
            },
            {
                "time": "14:00",
                "activity": "Transmission des dossiers informatisés à l'équipe d'après-midi"
            }
        ],
        "skills": {
            "technical": [
                "Techniques de soins infirmiers et administration sécurisée des médicaments",
                "Surveillance clinique armée (scopes, oxymètres, pompes à perfusion)",
                "Normes d'hygiène hospitalière, asepsie et prévention des infections nosocomiales",
                "Évaluation et prise en charge de la douleur",
                "Transmissions ciblées et tenue du dossier de soins informatisé"
            ],
            "human": [
                "Empathie, douceur et grande capacité d'écoute",
                "Résistance physique et psychologique face à la souffrance",
                "Rigueur absolue dans le calcul de doses médicamenteuses",
                "Esprit d'équipe avec les aides-soignants et médecins"
            ],
            "tools": [
                "Pousse-seringues électriques et pompes volumétriques",
                "Matériel de ponction veineuse et cathéters",
                "Moniteurs multiparamétriques de surveillance",
                "Logiciel de soins infirmiers et traçabilité"
            ],
            "soft": [
                "Empathie, douceur et grande capacité d'écoute",
                "Résistance physique et psychologique face à la souffrance",
                "Rigueur absolue dans le calcul de doses médicamenteuses",
                "Esprit d'équipe avec les aides-soignants et médecins"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Baccalauréat toutes séries (sciences recommandées)",
                    "desc": "Sélection sur dossier Parcoursup (France) ou concours d'entrée IFSI/ENDSS (Sénégal)."
                },
                {
                    "step": "Formation en Institut (Bac +3)",
                    "title": "Institut de Formation en Soins Infirmiers (IFSI) / Licence Sciences Infirmières",
                    "desc": "3 années alternant cours théoriques (anatomie, pharmacologie, éthique) et 60 semaines de stages cliniques."
                }
            ],
            "schools": [
                {
                    "name": "École Nationale de Développement Sanitaire et Social (ENDSS) — Dakar",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Institut de Formation en Sciences Infirmières et Obstétricales (IFSIO) — UCAD",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Instituts de Formation en Soins Infirmiers (IFSI) hospitaliers et universitaires",
                    "country": "France",
                    "scope": "France"
                }
            ],
            "certifications": [
                "Diplôme d'État d'Infirmier (DEI)",
                "Enregistrement auprès de l'Ordre National des Infirmiers"
            ]
        },
        "career": {
            "sectors": [
                "Hôpital public",
                "Cliniques privées",
                "Secteur libéral",
                "Santé scolaire et au travail"
            ],
            "employerTypes": [
                "CHU / Centres hospitaliers généraux",
                "EHPAD et résidences médicalisées",
                "Cabinets infirmiers libéraux",
                "Entreprises et ONG"
            ],
            "evolution": "Infirmier en soins généraux ➔ Spécialisation (IADE, IBODE, Puériculteur) ➔ Infirmier en Pratique Avancée (IPA) ➔ Cadre de santé",
            "pros": "Relation d'aide incomparable, diversité extrême des services possibles, employabilité garantie à 100%, passerelles d'évolution.",
            "cons": "Horaires décalés (3x8, travail de nuit, week-ends et jours fériés), pénibilité physique (manutention de patients), charge émotionnelle."
        },
        "salary": "🇫🇷 France : 2 000 - 3 400 € net/mois selon ancienneté et secteur • 🇸🇳 Sénégal : 180 000 - 550 000 FCFA net/mois (public à privé)",
        "saviezVous": {
            "fait": "Les infirmiers constituent la profession de santé la plus nombreuse au monde, représentant plus de la moitié de l'ensemble du personnel de santé mondial selon l'OMS.",
            "pourquoi": "Ils sont présents 24h/24 au chevet du patient, là où les autres soignants n'interviennent que ponctuellement."
        },
        "sources": [
            {
                "organization": "Studyrama",
                "title": "Fiche métier : Infirmier",
                "url": "https://www.studyrama.com/formations/fiches-metiers/sante/infirmier",
                "type": "metier"
            },
            {
                "organization": "Ordre National des Infirmiers",
                "title": "Le référentiel de compétences de l'infirmier",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "soigner-aider",
            "comprendre-corps-humain"
        ],
        "relatedJobSlugs": [
            "infirmier-anesthesiste",
            "infirmier-bloc-operatoire",
            "infirmier-pratique-avancee",
            "cadre-sante"
        ],
        "summary": "Cœur battant des établissements de soins, l'infirmier dispense les traitements, surveille l'état de santé des patients et assure leur accompagnement quotidien.",
        "description": "L'infirmier diplômé d'État (IDE) assure le lien constant entre le médecin et le patient. Sur prescription médicale ou dans le cadre de son rôle propre d'autonomie, il pose des perfusions, administre les médicaments, surveille les constantes vitales (tension, pouls, saturation), réalise des pansements complexes et écoute les angoisses des personnes soignées.",
        "studyLevel": "Bac +3 (Diplôme d'État d'Infirmier - Grade Licence)",
        "daily": {
            "morning": "Relève et transmissions orales avec l'équipe soignante de nuit • Tournée des constantes vitales, administration des traitements matinaux et bilans sanguins • Réfection de pansements chirurgicaux stériles et pose de perfusions • Visite médicale conjointe avec les médecins du service et ajustement des prescriptions",
            "afternoon": "Transmission des dossiers informatisés à l'équipe d'après-midi",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sante/infirmier"
    },
    {
        "id": "infirmier-anesthesiste",
        "slug": "infirmier-anesthesiste",
        "title": "Infirmier Anesthésiste Diplômé d'État (IADE)",
        "aliases": [
            "IADE",
            "Infirmier spécialiste d'anesthésie",
            "Anesthesia Nurse"
        ],
        "icon": "💤",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "biologie-chimie"
        ],
        "domain": "Soins Infirmiers & Pratiques Avancées",
        "domainId": "soins-infirmiers",
        "subdomain": "Anesthésie-réanimation (IADE)",
        "shortDescription": "Spécialiste de la narcose et du réveil, l'IADE endort, surveille les constantes vitales au bloc et gère la réanimation per-opératoire aux côtés du médecin anesthésiste.",
        "longDescription": "L'infirmier anesthésiste est un soignant de haute précision. En collaboration étroite avec le médecin anesthésiste-réanimateur (MAR), il prépare les drogues anesthésiques, induit la narcose, intube le patient, maintient la stabilité respiratoire et hémodynamique tout au long de l'opération et assure la prise en charge post-interventionnelle en salle de réveil.",
        "simpleDefinition": "Infirmier spécialisé au bloc opératoire qui gère l'anesthésie du patient, son sommeil et sa surveillance vitale pendant l'opération.",
        "level": "Bac +5 (Diplôme d'État d'Infirmier Anesthésiste - Grade Master)",
        "missions": [
            "Préparer la salle d'intervention, calibrer le respirateur d'anesthésie et doser les hypnotiques, curares et opioïdes",
            "Accueillir le patient au bloc opératoire et le rassurer avant l'induction anesthésique",
            "Réaliser l'intubation trachéale et la pose de voies veineuses périphériques ou artérielles",
            "Surveiller en temps réel la profondeur de l'anesthésie, la tension, le rythme cardiaque et la ventilation",
            "Assurer la prise en charge de la douleur aiguë et la surveillance en Salle de Surveillance Post-Interventionnelle (SSPI)"
        ],
        "workEnvironment": "Blocs opératoires multidisciplinaires, salles de surveillance post-interventionnelle (SSPI), équipes mobiles de SMUR et services d'urgences.",
        "typicalDay": [
            {
                "time": "07:15",
                "activity": "Vérification de sécurité obligatoire (check-list anesthésie) du respirateur et des plateaux de drogues"
            },
            {
                "time": "08:00",
                "activity": "Accueil du premier patient, pose du monitorage, induction anesthésique et intubation réussie"
            },
            {
                "time": "10:30",
                "activity": "Surveillance vigilante des constantes pendant l'acte de chirurgie viscérale"
            },
            {
                "time": "12:00",
                "activity": "Extubation sécurisée du patient en fin d'intervention et transfert surveillé en salle de réveil"
            },
            {
                "time": "14:00",
                "activity": "Prise en charge d'une urgence obstétricale (césarienne) sous rachianesthésie"
            }
        ],
        "skills": {
            "technical": [
                "Pharmacologie poussée des agents anesthésiques et réanimateurs",
                "Maîtrise experte de la gestion des voies aériennes et intubation difficile",
                "Gestion des monitorages hémodynamiques invasifs et gaz du sang",
                "Protocoles d'analgésie post-opératoire et prise en charge des chocs",
                "Utilisation des respirateurs d'anesthésie de dernière génération"
            ],
            "human": [
                "Vigilance ininterrompue et anticipation des moindres déviations physiologiques",
                "Capacité à apaiser immédiatement l'anxiété du patient avant d'être endormi",
                "Sang-froid absolu lors d'une désaturation ou d'une chute tensionnelle brutale",
                "Communication en boucle fermée au sein de l'équipe de bloc"
            ],
            "tools": [
                "Respirateur d'anesthésie (Draeger / GE Healthcare)",
                "Moniteur BIS (indice bispectral pour la profondeur de narcose)",
                "Vidéo-laryngoscope et fibroscopes d'intubation",
                "Pousse-seringues de target-controlled infusion (AIVOC)"
            ],
            "soft": [
                "Vigilance ininterrompue et anticipation des moindres déviations physiologiques",
                "Capacité à apaiser immédiatement l'anxiété du patient avant d'être endormi",
                "Sang-froid absolu lors d'une désaturation ou d'une chute tensionnelle brutale",
                "Communication en boucle fermée au sein de l'équipe de bloc"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Diplôme d'IDE (Bac +3)",
                    "title": "Obtention du Diplôme d'État d'Infirmier",
                    "desc": "Formation initiale en soins généraux."
                },
                {
                    "step": "Expérience préalable (2 ans)",
                    "title": "Pratique clinique en soins généraux",
                    "desc": "Exigence de 2 années d'exercice hospitalier minimum."
                },
                {
                    "step": "Concours et École IADE (Bac +5)",
                    "title": "Formation de spécialité de 24 mois en école IADE",
                    "desc": "Validation du Diplôme d'État d'IADE conférant le grade de Master universitaire."
                }
            ],
            "schools": [
                {
                    "name": "Centre de Formation des IADE — CHU de Fann / Faculté de Médecine Dakar",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Écoles d'IADE adossées aux CHU français (Paris, Bordeaux, Lille, Marseille)",
                    "country": "France",
                    "scope": "France"
                }
            ],
            "certifications": [
                "Diplôme d'État d'Infirmier Anesthésiste (Grade Master)",
                "AFGSU spécialisée"
            ]
        },
        "career": {
            "sectors": [
                "Chirurgie hospitalière",
                "Réanimation",
                "SMUR et médecine de catastrophe"
            ],
            "employerTypes": [
                "Hôpitaux publics (CHU, CHR)",
                "Cliniques chirurgicales privées",
                "Centres de lutte contre le cancer",
                "Services de santé des armées"
            ],
            "evolution": "IADE clinicien de bloc ➔ IADE référent douleur / bloc ➔ Cadre de santé IADE ➔ Directeur d'école d'anesthésie",
            "pros": "Niveau d'expertise technique et d'autonomie très valorisé, reconnaissance au bloc, rémunération supérieure aux infirmiers généraux.",
            "cons": "Responsabilité vitale directe, stress aigu lors des urgences per-opératoires, gardes d'anesthésie."
        },
        "salary": "🇫🇷 France : 2 800 - 4 600 € net/mois • 🇸🇳 Sénégal : 350 000 - 900 000 FCFA net/mois",
        "saviezVous": {
            "fait": "L'IADE est le seul professionnel paramédical habilité en France à pratiquer des actes d'anesthésie générale et locorégionale sous la responsabilité d'un médecin.",
            "pourquoi": "Ses 2 années supplémentaires de formation théorique et pratique intensive lui confèrent une maîtrise des mécanismes de défaillance respiratoire et cardiaque."
        },
        "sources": [
            {
                "organization": "Studyrama",
                "title": "Fiche métier : Infirmier anesthésiste",
                "url": "https://www.studyrama.com/formations/fiches-metiers/sante/infirmier-anesthesiste",
                "type": "metier"
            },
            {
                "organization": "Syndicat National des Infirmiers Anesthésistes (SNIA)",
                "title": "Statut et exercice de l'IADE",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "soigner-aider",
            "comprendre-corps-humain",
            "resoudre-problemes"
        ],
        "relatedJobSlugs": [
            "infirmier-diplome-etat",
            "infirmier-bloc-operatoire",
            "medecin-urgentiste",
            "chirurgien"
        ],
        "summary": "Spécialiste de la narcose et du réveil, l'IADE endort, surveille les constantes vitales au bloc et gère la réanimation per-opératoire aux côtés du médecin anesthésiste.",
        "description": "L'infirmier anesthésiste est un soignant de haute précision. En collaboration étroite avec le médecin anesthésiste-réanimateur (MAR), il prépare les drogues anesthésiques, induit la narcose, intube le patient, maintient la stabilité respiratoire et hémodynamique tout au long de l'opération et assure la prise en charge post-interventionnelle en salle de réveil.",
        "studyLevel": "Bac +5 (Diplôme d'État d'Infirmier Anesthésiste - Grade Master)",
        "daily": {
            "morning": "Vérification de sécurité obligatoire (check-list anesthésie) du respirateur et des plateaux de drogues • Accueil du premier patient, pose du monitorage, induction anesthésique et intubation réussie • Surveillance vigilante des constantes pendant l'acte de chirurgie viscérale • Extubation sécurisée du patient en fin d'intervention et transfert surveillé en salle de réveil",
            "afternoon": "Prise en charge d'une urgence obstétricale (césarienne) sous rachianesthésie",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sante/infirmier-anesthesiste"
    },
    {
        "id": "infirmier-bloc-operatoire",
        "slug": "infirmier-bloc-operatoire",
        "title": "Infirmier de Bloc Opératoire Diplômé d'État (IBODE)",
        "aliases": [
            "IBODE",
            "Instrumentiste de bloc",
            "Infirmier circulant"
        ],
        "icon": "🏥",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "biologie-chimie"
        ],
        "domain": "Soins Infirmiers & Pratiques Avancées",
        "domainId": "soins-infirmiers",
        "subdomain": "Bloc opératoire (IBODE)",
        "shortDescription": "Garant absolu de l'asepsie et du bon déroulement technique de la chirurgie, l'IBODE prépare les instruments, assiste le chirurgien et veille à la sécurité du patient.",
        "longDescription": "L'IBODE maîtrise l'environnement ultra-technologique du bloc opératoire. En tant qu'instrumentiste, circulant ou aide opératoire, il anticipe chaque geste du chirurgien, lui passe avec exactitude les pinces, ciseaux et écarteurs, contrôle le compte des compresses et instruments avant fermeture pour éviter tout oubli corporel et garantit l'asepsie environnementale.",
        "simpleDefinition": "Infirmier spécialisé qui prépare les instruments chirurgicaux et assiste directement le chirurgien pendant l'opération.",
        "level": "Bac +5 (Diplôme d'État d'Infirmier de Bloc Opératoire - Grade Master)",
        "missions": [
            "Organiser la salle d'opération et vérifier le fonctionnement des dispositifs médicaux implantables et moteurs",
            "Assurer l'habillage stérile de l'équipe et préparer les tables d'instruments en fonction du temps opératoire",
            "Anticiper et tendre les instruments au chirurgien dans le bon ordre pendant l'intervention",
            "Effectuer le comptage rigoureux et contradictoire des compresses, aiguilles et instruments avant fermeture",
            "Gérer la traçabilité des pièces opératoires destinées aux analyses anatomopathologiques"
        ],
        "workEnvironment": "Bloc opératoire stérile en milieu hospitalier ou clinique, service de stérilisation centrale.",
        "typicalDay": [
            {
                "time": "07:30",
                "activity": "Vérification des boîtes d'instruments stériles pour le programme de chirurgie orthopédique de la matinée"
            },
            {
                "time": "08:15",
                "activity": "Lavage chirurgical des mains, habillage en casaque stérile et installation de la table d'instrumentation"
            },
            {
                "time": "09:00",
                "activity": "Assistance active au chirurgien lors de la pose d'une prothèse totale de hanche"
            },
            {
                "time": "11:30",
                "activity": "Comptage final des textiles, pansement stérile et transfert du patient vers la salle de réveil"
            },
            {
                "time": "14:00",
                "activity": "Intervention de coelioscopie digestive et gestion de la colonne vidéo"
            }
        ],
        "skills": {
            "technical": [
                "Connaissance exhaustive de l'instrumentation chirurgicale de pointe",
                "Règles strictes d'asepsie, de stérilisation et de circulation au bloc",
                "Gestes d'aide opératoire (hémostase, aspiration, écartement des tissus)",
                "Normes de traçabilité des implants et greffons",
                "Techniques de comptage de sécurité per-opératoire"
            ],
            "human": [
                "Anticipation réflexe des besoins du chirurgien sans qu'il ait à parler",
                "Concentration extrême et endurance physique en position debout",
                "Capacité à réagir instantanément face à un saignement inattendu",
                "Rigueur intraitable sur les protocoles d'hygiène"
            ],
            "tools": [
                "Boîtes d'instruments chirurgicaux spécialisés",
                "Bistouri électrique et aspirateurs chirurgicaux",
                "Systèmes d'imagerie per-opératoire et scialytiques",
                "Logiciel de traçabilité des dispositifs médicaux au bloc"
            ],
            "soft": [
                "Anticipation réflexe des besoins du chirurgien sans qu'il ait à parler",
                "Concentration extrême et endurance physique en position debout",
                "Capacité à réagir instantanément face à un saignement inattendu",
                "Rigueur intraitable sur les protocoles d'hygiène"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Diplôme d'IDE (Bac +3)",
                    "title": "Diplôme d'État d'Infirmier",
                    "desc": "Formation initiale socle."
                },
                {
                    "step": "Pratique professionnelle",
                    "title": "Exercice infirmier",
                    "desc": "Expérience préalable en milieu de soins."
                },
                {
                    "step": "École d'IBODE (Bac +5)",
                    "title": "Formation de spécialité IBODE de 18 à 24 mois",
                    "desc": "Stages intensifs dans toutes les spécialités chirurgicales et grade Master."
                }
            ],
            "schools": [
                {
                    "name": "ENDSS / Département de Spécialités Paramédicales — Dakar",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Écoles d'IBODE agréées en France (CHU de Paris, Lyon, Lille, Marseille)",
                    "country": "France",
                    "scope": "France"
                }
            ],
            "certifications": [
                "Diplôme d'État d'IBODE (Grade Master)",
                "Ordre des Infirmiers"
            ]
        },
        "career": {
            "sectors": [
                "Bloc opératoire hospitalier",
                "Cliniques chirurgicales",
                "Stérilisation centrale"
            ],
            "employerTypes": [
                "Établissements de santé publics et privés",
                "Centres hospitaliers spécialisés"
            ],
            "evolution": "IBODE instrumentiste ➔ IBODE aide opératoire exclusif ➔ Cadre de santé de bloc opératoire ➔ Coordinateur général des blocs",
            "pros": "Rôle central au bloc, travail en équipe soudée, environnement technologique de pointe, valorisation statutaire Master.",
            "cons": "Position debout immobile prolongée pouvant causer des troubles musculosquelettiques, port du masque et des gants toute la journée."
        },
        "salary": "🇫🇷 France : 2 400 - 3 900 € net/mois • 🇸🇳 Sénégal : 300 000 - 750 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Le comptage des compresses et des instruments est une procédure de sécurité légale si critique qu'aucune incision ne peut être refermée sans l'autorisation expresse de l'IBODE attestant que le compte est exact.",
            "pourquoi": "Cette règle protège le patient contre le risque rarissime mais dramatique d'oubli de corps étranger."
        },
        "sources": [
            {
                "organization": "Studyrama",
                "title": "Fiche métier : Infirmier de bloc opératoire",
                "url": "https://www.studyrama.com/formations/fiches-metiers/sante/infirmier-de-bloc-operatoire-ibode",
                "type": "metier"
            },
            {
                "organization": "Association des Enseignants et Cadres des Écoles d'IBODE (AEEIBO)",
                "title": "Référentiel de formation IBODE",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "soigner-aider",
            "construire-fabriquer",
            "comprendre-corps-humain"
        ],
        "relatedJobSlugs": [
            "infirmier-diplome-etat",
            "infirmier-anesthesiste",
            "chirurgien",
            "agent-sterilisation"
        ],
        "summary": "Garant absolu de l'asepsie et du bon déroulement technique de la chirurgie, l'IBODE prépare les instruments, assiste le chirurgien et veille à la sécurité du patient.",
        "description": "L'IBODE maîtrise l'environnement ultra-technologique du bloc opératoire. En tant qu'instrumentiste, circulant ou aide opératoire, il anticipe chaque geste du chirurgien, lui passe avec exactitude les pinces, ciseaux et écarteurs, contrôle le compte des compresses et instruments avant fermeture pour éviter tout oubli corporel et garantit l'asepsie environnementale.",
        "studyLevel": "Bac +5 (Diplôme d'État d'Infirmier de Bloc Opératoire - Grade Master)",
        "daily": {
            "morning": "Vérification des boîtes d'instruments stériles pour le programme de chirurgie orthopédique de la matinée • Lavage chirurgical des mains, habillage en casaque stérile et installation de la table d'instrumentation • Assistance active au chirurgien lors de la pose d'une prothèse totale de hanche • Comptage final des textiles, pansement stérile et transfert du patient vers la salle de réveil",
            "afternoon": "Intervention de coelioscopie digestive et gestion de la colonne vidéo",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sante/infirmier-de-bloc-operatoire-ibode"
    },
    {
        "id": "infirmier-pratique-avancee",
        "slug": "infirmier-pratique-avancee",
        "title": "Infirmier en Pratique Avancée (IPA)",
        "aliases": [
            "IPA",
            "Infirmier praticien",
            "Advanced Practice Nurse"
        ],
        "icon": "📋",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "biologie-chimie"
        ],
        "domain": "Soins Infirmiers & Pratiques Avancées",
        "domainId": "soins-infirmiers",
        "subdomain": "Pratique avancée (IPA)",
        "shortDescription": "Métier d'avenir à la frontière entre soins infirmiers et médecine, l'IPA réalise des consultations de suivi, prescrit des examens et ajuste les traitements de pathologies ciblées.",
        "longDescription": "L'Infirmier en Pratique Avancée (IPA) représente une révolution dans l'organisation des soins. Titulaire d'un diplôme d'État de niveau Bac +5 (Master), il prend en charge des patients confiés par les médecins, notamment dans le suivi des maladies chroniques stabilisées, l'oncologie, la néphrologie, la psychiatrie ou la santé communautaire. Il prescrit des examens de biologie médicale, renouvelle et adapte les traitements médicamenteux.",
        "simpleDefinition": "Infirmier expert de niveau Master qui assure des consultations médicales avancées et ajuste les traitements sous la responsabilité d'un médecin.",
        "level": "Bac +5 (Diplôme d'État d'Infirmier en Pratique Avancée - Grade Master)",
        "missions": [
            "Conduire des consultations d'évaluation clinique approfondie auprès de patients atteints de maladies chroniques",
            "Prescrire des examens complémentaires de biologie médicale et d'imagerie",
            "Renouveler et adapter les posologies des thérapeutiques médicamenteuses ciblées",
            "Mener des actions d'éducation thérapeutique du patient (ETP) et de prévention",
            "Coordonner les parcours de soins complexes entre la ville et l'hôpital"
        ],
        "workEnvironment": "Maisons de santé pluriprofessionnelles (MSP), centres hospitaliers (services d'oncologie, néphrologie, cardiologie), cabinets médicaux libéraux.",
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Consultation de suivi d'un patient diabétique et insuffisant cardiaque : examen clinique et adaptation de posologie"
            },
            {
                "time": "10:30",
                "activity": "Prescription d'un bilan rénal complet et d'une échographie de contrôle pour un patient hypertendu"
            },
            {
                "time": "13:30",
                "activity": "Atelier collectif d'éducation thérapeutique pour des patients sous anticoagulants"
            },
            {
                "time": "15:30",
                "activity": "Réunion de concertation pluriprofessionnelle avec les médecins généralistes du cabinet"
            },
            {
                "time": "17:30",
                "activity": "Synthèse des dossiers et télé-expertise avec le cardiologue référent"
            }
        ],
        "skills": {
            "technical": [
                "Examen clinique complet et sémiologie médicale avancée",
                "Prescription réglementée d'examens biologiques et de médicaments",
                "Éducation thérapeutique du patient et entretien motivationnel",
                "Gestion des parcours de soins complexes en équipe pluriprofessionnelle",
                "Analyse critique d'articles scientifiques et pratique fondée sur les preuves (EBP)"
            ],
            "human": [
                "Autonomie décisionnelle et rigueur d'analyse clinique",
                "Pédagogie bienveillante pour responsabiliser le patient",
                "Capacité de collaboration partenariale d'égal à égal avec les médecins",
                "Sens aigu des limites de ses compétences pour référer en temps voulu"
            ],
            "tools": [
                "Logiciel de dossier médical partagé et d'aide à la prescription",
                "Matériel de consultation clinique (stéthoscope, tensiomètre, saturomètre)",
                "Outils validés d'évaluation de la qualité de vie et de la douleur"
            ],
            "soft": [
                "Autonomie décisionnelle et rigueur d'analyse clinique",
                "Pédagogie bienveillante pour responsabiliser le patient",
                "Capacité de collaboration partenariale d'égal à égal avec les médecins",
                "Sens aigu des limites de ses compétences pour référer en temps voulu"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Diplôme d'IDE (Bac +3)",
                    "title": "Diplôme d'État d'Infirmier",
                    "desc": "Formation de base."
                },
                {
                    "step": "Exercice professionnel (3 ans)",
                    "title": "3 années de pratique comme infirmier en soins généraux",
                    "desc": "Condition d'admission indispensable."
                },
                {
                    "step": "Master IPA (Bac +5)",
                    "title": "Diplôme d'État d'IPA (Universités de Médecine)",
                    "desc": "2 années de Master universitaire avec spécialisation (pathologies chroniques, oncologie, psychiatrie, néphrologie, urgences)."
                }
            ],
            "schools": [
                {
                    "name": "UFR de Santé et Facultés de Médecine de France (Sorbonne, Paris Cité, Marseille, Bordeaux)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Programmes de Master en Pratiques Avancées Infirmières en Afrique de l'Ouest (UCAD / IPD)",
                    "country": "Sénégal / Afrique",
                    "scope": "Afrique"
                }
            ],
            "certifications": [
                "Diplôme d'État d'Infirmier en Pratique Avancée (Grade Master)",
                "Ordre National des Infirmiers"
            ]
        },
        "career": {
            "sectors": [
                "Médecine de ville",
                "Soins de premiers recours",
                "Cancérologie et néphrologie hospitalière"
            ],
            "employerTypes": [
                "Maisons de santé et centres de santé",
                "Établissements publics de santé",
                "Exercice libéral conventionné"
            ],
            "evolution": "IPA clinicien ➔ IPA coordonnateur de réseau de soins ➔ Enseignant-chercheur en sciences infirmières (Doctorat) ➔ Consultant en santé publique",
            "pros": "Grande autonomie clinique, consultations de 30 à 45 minutes permettant un accompagnement humain approfondi, métier pionnier très demandé pour lutter contre les déserts médicaux.",
            "cons": "Métier récent nécessitant parfois de faire reconnaître son périmètre d'action auprès de certains médecins ou patients habitués au modèle traditionnel."
        },
        "salary": "🇫🇷 France : 2 500 - 4 200 € net/mois selon statut • 🇸🇳 Sénégal : 350 000 - 850 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Le modèle de l'IPA s'inspire directement des 'Nurse Practitioners' anglo-saxons qui ont prouvé depuis plus de 40 ans qu'un suivi paramédical avancé diminue considérablement les réhospitalisations des malades chroniques.",
            "pourquoi": "Grâce à une écoute prolongée et un suivi régulier, les alertes précoces sont détectées avant la crise aiguë."
        },
        "sources": [
            {
                "organization": "Studyrama",
                "title": "Fiche métier : Infirmier en pratique avancée",
                "url": "https://www.studyrama.com/formations/fiches-metiers/sante/infirmier-en-pratique-avancee",
                "type": "metier"
            },
            {
                "organization": "Ministère de la Santé",
                "title": "La pratique avancée infirmière : cadre et compétences",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "soigner-aider",
            "comprendre-corps-humain",
            "resoudre-problemes"
        ],
        "relatedJobSlugs": [
            "infirmier-diplome-etat",
            "medecin-generaliste",
            "cadre-sante",
            "puériculteur"
        ],
        "summary": "Métier d'avenir à la frontière entre soins infirmiers et médecine, l'IPA réalise des consultations de suivi, prescrit des examens et ajuste les traitements de pathologies ciblées.",
        "description": "L'Infirmier en Pratique Avancée (IPA) représente une révolution dans l'organisation des soins. Titulaire d'un diplôme d'État de niveau Bac +5 (Master), il prend en charge des patients confiés par les médecins, notamment dans le suivi des maladies chroniques stabilisées, l'oncologie, la néphrologie, la psychiatrie ou la santé communautaire. Il prescrit des examens de biologie médicale, renouvelle et adapte les traitements médicamenteux.",
        "studyLevel": "Bac +5 (Diplôme d'État d'Infirmier en Pratique Avancée - Grade Master)",
        "daily": {
            "morning": "Consultation de suivi d'un patient diabétique et insuffisant cardiaque : examen clinique et adaptation de posologie • Prescription d'un bilan rénal complet et d'une échographie de contrôle pour un patient hypertendu",
            "afternoon": "Atelier collectif d'éducation thérapeutique pour des patients sous anticoagulants • Réunion de concertation pluriprofessionnelle avec les médecins généralistes du cabinet • Synthèse des dossiers et télé-expertise avec le cardiologue référent",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sante/infirmier-en-pratique-avancee"
    },
    {
        "id": "chirurgien-dentiste",
        "slug": "chirurgien-dentiste",
        "title": "Chirurgien-Dentiste / Docteur en Chirurgie Dentaire",
        "aliases": [
            "Dentiste",
            "Odontologiste",
            "Praticien de l'art dentaire"
        ],
        "icon": "🦷",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "biologie-chimie"
        ],
        "domain": "Santé Dentaire & Odontologie",
        "domainId": "sante-dentaire",
        "subdomain": "Chirurgie dentaire",
        "shortDescription": "Spécialiste de la santé bucco-dentaire, le chirurgien-dentiste soigne les caries, réalise détartrages et extractions, pose des couronnes et restaure le sourire.",
        "longDescription": "Le chirurgien-dentiste traite les dents, les gencives et les mâchoires. Il soulage la douleur aiguë de la rage de dent, traite les canaux infectés (endodontie), pose des implants en titane, réalise des greffes gingivales et prévient les affections parodontales. Il allie connaissances médicales pointues, précision mécanique manuelle et sens esthétique du sourire.",
        "simpleDefinition": "Médecin spécialiste de la bouche qui soigne les dents cariées, extrait les dents malades et remplace les dents manquantes.",
        "level": "Bac +6 à Bac +9 (Diplôme d'État de Docteur en Chirurgie Dentaire)",
        "missions": [
            "Diagnostiquer les affections bucco-dentaires à l'aide d'examens cliniques et de radiographies panoramiques 3D",
            "Soigner les caries et dévitaliser les dents atteintes en obturant les canaux radiculaires",
            "Poser des prothèses fixes ou amovibles (couronnes, inlays, bridges, prothèses complètes)",
            "Pratiquer des interventions chirurgicales : extractions complexes de dents de sagesse, pose d'implants",
            "Conseiller les patients sur l'hygiène bucco-dentaire et prescrire les antibiotiques et antalgiques adaptés"
        ],
        "workEnvironment": "Cabinet dentaire libéral individuel ou de groupe, centres de santé mutualistes, services d'odontologie hospitaliers.",
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Accueil d'une urgence matinale : pulpite aiguë douloureuse et dévitalisation d'urgence"
            },
            {
                "time": "10:00",
                "activity": "Séance de pose d'un implant dentaire sous anesthésie locale et contrôle radiologique immédiat"
            },
            {
                "time": "11:30",
                "activity": "Prise d'empreinte optique 3D intra-orale pour la fabrication d'une couronne céramique"
            },
            {
                "time": "14:30",
                "activity": "Détartrages ultrasoniques, bilans parodontaux et soins conservateurs chez des adolescents"
            },
            {
                "time": "17:00",
                "activity": "Scellement définitif d'un bridge et vérification millimétrique de l'occlusion"
            }
        ],
        "skills": {
            "technical": [
                "Techniques de soins conservateurs (composites, inlays/onlays) et endodontie",
                "Chirurgie buccale et implantologie ostéo-intégrée",
                "Radiologie dentaire numérique (panoramique, Cone Beam CT 3D)",
                "Prothèse dentaire conjointe et adjointe",
                "Anesthésie locale et locorégionale de la sphère faciale"
            ],
            "human": [
                "Habileté gestuelle millimétrique et minutie extrême",
                "Capacité à apaiser la phobie du dentiste et instaurer la détente",
                "Sens esthétique affiné de l'harmonie du visage et du sourire",
                "Rigueur déontologique et écoute patient"
            ],
            "tools": [
                "Fauteuil dentaire avec turbine, contre-angle et micro-moteur",
                "Caméra d'empreinte optique intra-orale 3D",
                "Scanner Cone Beam 3D et radio numérique",
                "Laser dentaire et localisateur d'apex pour canaux"
            ],
            "soft": [
                "Habileté gestuelle millimétrique et minutie extrême",
                "Capacité à apaiser la phobie du dentiste et instaurer la détente",
                "Sens esthétique affiné de l'harmonie du visage et du sourire",
                "Rigueur déontologique et écoute patient"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Baccalauréat scientifique S",
                    "desc": "Excellentes notes requises."
                },
                {
                    "step": "Premier cycle (Bac +1 à +3)",
                    "title": "PASS / L.AS (France) ou Année commune FMPOS (Sénégal)",
                    "desc": "Accès très sélectif aux études d'odontologie."
                },
                {
                    "step": "Deuxième & Troisième cycle (Bac +4 à +6)",
                    "title": "Études odontologiques et internat qualifiant éventuel",
                    "desc": "Stages cliniques quotidiens sur fauteuil, soutenance de thèse d'exercice de Docteur en Chirurgie Dentaire."
                }
            ],
            "schools": [
                {
                    "name": "FMPOS — UCAD Dakar (Département d'Odontologie)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "UFR d'Odontologie des universités françaises (Montpellier, Paris, Bordeaux, Strasbourg)",
                    "country": "France",
                    "scope": "France"
                }
            ],
            "certifications": [
                "Diplôme d'État de Docteur en Chirurgie Dentaire",
                "Inscription obligatoire à l'Ordre National des Chirurgiens-Dentistes"
            ]
        },
        "career": {
            "sectors": [
                "Dentisterie libérale",
                "Santé hospitalière",
                "Enseignement universitaire"
            ],
            "employerTypes": [
                "Cabinets dentaires privés",
                "Centres mutualistes",
                "Services d'odontologie des CHU"
            ],
            "evolution": "Chirurgien-dentiste collaborateur ➔ Titulaire de son propre cabinet ➔ Spécialisation en orthodontie ou chirurgie orale ➔ Enseignant universitaire",
            "pros": "Indépendance professionnelle complète, profession très rémunératrice, impact direct sur le soulagement de la douleur et l'estime de soi des patients.",
            "cons": "Coût d'installation très élevé pour équiper un cabinet (fauteuil, radios, stérilisation), posture penchée fatigante pour le dos et les cervicales."
        },
        "salary": "🇫🇷 France : 4 500 - 11 000 € net/mois en libéral • 🇸🇳 Sénégal : 450 000 - 2 500 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Grâce aux caméras intra-orales 3D et aux usineuses CFAO (Conception et Fabrication Assistées par Ordinateur), un dentiste moderne peut concevoir et poser une couronne en céramique personnalisée en une seule séance d'une heure !",
            "pourquoi": "L'empreinte physique pâteuse traditionnelle est remplacée par un fichier numérique envoyé directement à la micro-fraiseuse."
        },
        "sources": [
            {
                "organization": "Studyrama",
                "title": "Fiche métier : Chirurgien-dentiste",
                "url": "https://www.studyrama.com/formations/fiches-metiers/sante/chirurgien-dentiste",
                "type": "metier"
            },
            {
                "organization": "Conseil National de l'Ordre des Chirurgiens-Dentistes",
                "title": "L'exercice de l'art dentaire",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "soigner-aider",
            "construire-fabriquer",
            "comprendre-corps-humain"
        ],
        "relatedJobSlugs": [
            "prothesiste-dentaire",
            "assistant-dentaire",
            "chirurgien",
            "medecin-generaliste"
        ],
        "summary": "Spécialiste de la santé bucco-dentaire, le chirurgien-dentiste soigne les caries, réalise détartrages et extractions, pose des couronnes et restaure le sourire.",
        "description": "Le chirurgien-dentiste traite les dents, les gencives et les mâchoires. Il soulage la douleur aiguë de la rage de dent, traite les canaux infectés (endodontie), pose des implants en titane, réalise des greffes gingivales et prévient les affections parodontales. Il allie connaissances médicales pointues, précision mécanique manuelle et sens esthétique du sourire.",
        "studyLevel": "Bac +6 à Bac +9 (Diplôme d'État de Docteur en Chirurgie Dentaire)",
        "daily": {
            "morning": "Accueil d'une urgence matinale : pulpite aiguë douloureuse et dévitalisation d'urgence • Séance de pose d'un implant dentaire sous anesthésie locale et contrôle radiologique immédiat • Prise d'empreinte optique 3D intra-orale pour la fabrication d'une couronne céramique",
            "afternoon": "Détartrages ultrasoniques, bilans parodontaux et soins conservateurs chez des adolescents • Scellement définitif d'un bridge et vérification millimétrique de l'occlusion",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sante/chirurgien-dentiste"
    },
    {
        "id": "assistant-dentaire",
        "slug": "assistant-dentaire",
        "title": "Assistant / Assistante Dentaire",
        "aliases": [
            "Aide-dentiste",
            "Secrétaire dentaire",
            "Assistant médico-technique dentaire"
        ],
        "icon": "🦷",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "biologie-chimie"
        ],
        "domain": "Santé Dentaire & Odontologie",
        "domainId": "sante-dentaire",
        "subdomain": "Assistance dentaire",
        "shortDescription": "Bras droit indispensable du chirurgien-dentiste, l'assistant dentaire gère la stérilisation, assiste au fauteuil à 4 mains et prend en charge l'accueil des patients.",
        "longDescription": "L'assistant dentaire qualifié assure la triple fonction médico-technique, logistique et relationnelle du cabinet dentaire. Il prépare le plateau d'instruments pour chaque soin, assiste le praticien en aspirant la salive et en tendant les instruments, désinfecte scrupuleusement la salle après chaque patient, stérilise le matériel en autoclave et gère les rendez-vous et stocks de consommables.",
        "simpleDefinition": "Professionnel qui seconde le dentiste en lui tendant les instruments au fauteuil et en assurant la stérilisation parfaite du matériel.",
        "level": "Bac à Bac +1 (Titre d'Assistant Dentaire qualifié)",
        "missions": [
            "Accueillir les patients, constituer les dossiers informatisés et les installer confortablement au fauteuil",
            "Assister le chirurgien-dentiste au fauteuil (technique du travail à quatre mains : aspiration chirurgicale, passage d'instruments)",
            "Préparer les ciments, résines et matériaux d'empreinte",
            "Nettoyer, thermo-désinfecter, ensacher et stériliser les instruments à l'autoclave avec traçabilité",
            "Gérer les stocks de matériel dentaire et coordonner les envois avec le prothésiste dentaire"
        ],
        "workEnvironment": "Cabinets dentaires libéraux, centres de santé dentaire mutualistes, services hospitaliers d'odontologie.",
        "typicalDay": [
            {
                "time": "08:00",
                "activity": "Ouverture du cabinet, mise en route des compresseurs, vérification de l'eau distillée et des autoclaves"
            },
            {
                "time": "08:30",
                "activity": "Accueil du premier patient, installation du bavoir protecteur et préparation du plateau de soins"
            },
            {
                "time": "09:30",
                "activity": "Assistance au fauteuil pendant une pose d'implant : aspiration chirurgicale et éclairage du champ"
            },
            {
                "time": "12:00",
                "activity": "Cycle de stérilisation des turbines et instruments et vérification des tests de vapeur"
            },
            {
                "time": "14:30",
                "activity": "Accueil téléphonique des urgences et commande de fournitures (gants, composites)"
            }
        ],
        "skills": {
            "technical": [
                "Protocoles stricts de décontamination, désinfection et stérilisation (autoclave classe B)",
                "Assistance opératoire 'à quatre mains'",
                "Connaissance des instruments dentaires et des matériaux d'obturation",
                "Gestion du dossier patient informatisé et de la télétransmission",
                "Règles de radioprotection au cabinet"
            ],
            "human": [
                "Capacité d'accueil chaleureuse pour détendre les patients anxieux",
                "Sens aigu de l'anticipation et synchronisation avec le praticien",
                "Discrétion professionnelle absolue et respect du secret médical",
                "Excellente organisation et rigueur d'hygiène"
            ],
            "tools": [
                "Autoclave à vapeur d'eau avec imprimante de traçabilité",
                "Thermo-désinfecteur et bacs à ultrasons",
                "Aspirateurs chirurgicaux haute vélocité",
                "Logiciel de gestion de cabinet dentaire (Julie, Visiodent, etc.)"
            ],
            "soft": [
                "Capacité d'accueil chaleureuse pour détendre les patients anxieux",
                "Sens aigu de l'anticipation et synchronisation avec le praticien",
                "Discrétion professionnelle absolue et respect du secret médical",
                "Excellente organisation et rigueur d'hygiène"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Niveau requis",
                    "title": "Baccalauréat ou niveau équivalent",
                    "desc": "Bonne expression et sens du contact."
                },
                {
                    "step": "Formation en alternance (18 mois)",
                    "title": "Titre certifié d'Assistant Dentaire (CNQAOS)",
                    "desc": "Contrat de professionnalisation en alternance : 1 jour en cours théoriques, 4 jours en cabinet dentaire."
                }
            ],
            "schools": [
                {
                    "name": "Centres de formation CNQAOS / AFPPCD en France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Écoles de formation aux métiers de santé et cabinets partenaires — Dakar",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Titre d'Assistant Dentaire qualifié (reconnu par la Convention Collective Nationale des Cabinets Dentaires)"
            ]
        },
        "career": {
            "sectors": [
                "Odontologie privée",
                "Centres mutualistes",
                "Cabinets d'orthodontie exclusive"
            ],
            "employerTypes": [
                "Chirurgiens-dentistes libéraux",
                "Centres de santé",
                "Polycliniques dentaires"
            ],
            "evolution": "Assistant dentaire ➔ Assistant dentaire d'implantologie ou d'orthodontie ➔ Assistant responsable de cabinet dentaire (management) ➔ Formateur",
            "pros": "Métier très dynamique sans routine, ambiance de cabinet souvent soudée, horaires de jour réguliers sans gardes de nuit.",
            "cons": "Exposition continue aux bruits de turbines et aux projections biologiques nécessitant un port rigoureux d'EPI."
        },
        "salary": "🇫🇷 France : 1 650 - 2 400 € net/mois • 🇸🇳 Sénégal : 120 000 - 300 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Un travail à quatre mains efficace entre le dentiste et son assistant réduit la durée d'une intervention chirurgicale de 30% tout en diminuant la fatigue du patient.",
            "pourquoi": "Le dentiste n'a jamais à quitter des yeux le champ opératoire buccal pour chercher un instrument."
        },
        "sources": [
            {
                "organization": "Studyrama",
                "title": "Fiche métier : Assistant dentaire",
                "url": "https://www.studyrama.com/formations/fiches-metiers/sante/assistant-dentaire",
                "type": "metier"
            },
            {
                "organization": "Commission Nationale Paritaire de l'Emploi et de la Formation Professionnelle (CPNE-FP) Dentaire",
                "title": "Référentiel de formation assistant dentaire",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "soigner-aider",
            "construire-fabriquer"
        ],
        "relatedJobSlugs": [
            "chirurgien-dentiste",
            "prothesiste-dentaire",
            "secretaire-medical",
            "infirmier-diplome-etat"
        ],
        "summary": "Bras droit indispensable du chirurgien-dentiste, l'assistant dentaire gère la stérilisation, assiste au fauteuil à 4 mains et prend en charge l'accueil des patients.",
        "description": "L'assistant dentaire qualifié assure la triple fonction médico-technique, logistique et relationnelle du cabinet dentaire. Il prépare le plateau d'instruments pour chaque soin, assiste le praticien en aspirant la salive et en tendant les instruments, désinfecte scrupuleusement la salle après chaque patient, stérilise le matériel en autoclave et gère les rendez-vous et stocks de consommables.",
        "studyLevel": "Bac à Bac +1 (Titre d'Assistant Dentaire qualifié)",
        "daily": {
            "morning": "Ouverture du cabinet, mise en route des compresseurs, vérification de l'eau distillée et des autoclaves • Accueil du premier patient, installation du bavoir protecteur et préparation du plateau de soins • Assistance au fauteuil pendant une pose d'implant : aspiration chirurgicale et éclairage du champ • Cycle de stérilisation des turbines et instruments et vérification des tests de vapeur",
            "afternoon": "Accueil téléphonique des urgences et commande de fournitures (gants, composites)",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sante/assistant-dentaire"
    },
    {
        "id": "prothesiste-dentaire",
        "slug": "prothesiste-dentaire",
        "title": "Prothésiste Dentaire / Spécialiste CFAO Dentaire",
        "aliases": [
            "Technicien de laboratoire dentaire",
            "Céramiste dentaire",
            "Modeleur dentaire"
        ],
        "icon": "🦷",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "biologie-chimie",
            "industrie-mecanique"
        ],
        "domain": "Santé Dentaire & Odontologie",
        "domainId": "sante-dentaire",
        "subdomain": "Prothèse dentaire & CFAO",
        "shortDescription": "Artisan et technicien de haute précision, le prothésiste conçoit et fabrique des dents artificielles, couronnes céramiques, bridges et appareils sur mesure.",
        "longDescription": "Le prothésiste dentaire travaille dans son propre laboratoire en étroite collaboration avec les dentistes. À partir des empreintes réelles ou numériques 3D envoyées par le cabinet, il sculpte, fraise, cuit la céramique et polit des dispositifs médicaux sur mesure : couronnes céramo-métalliques, facettes ultra-fines, implants et appareils amovibles. Le métier a été profondément révolutionné par la CFAO (conception et fabrication assistées par ordinateur) et l'impression 3D métallique et résine.",
        "simpleDefinition": "Technicien qui fabrique en laboratoire les fausses dents, couronnes et appareils dentaires commandés par les dentistes.",
        "level": "Bac Pro à Bac +3 (BTS Prothésiste Dentaire / Licence pro)",
        "missions": [
            "Réceptionner les empreintes dentaires (plâtre ou fichiers numériques 3D) et analyser les prescriptions du dentiste",
            "Modéliser sur logiciel de CAO les couronnes, armatures de bridges et gouttières occlusales",
            "Usiner les prothèses par commande numérique (fraiseuses 5 axes) ou par impression 3D résine et métal",
            "Monter et cuire la céramique dentaire couche par couche pour reproduire fidèlement la translucidité naturelle de l'émail",
            "Contrôler l'adaptation mécanique et la conformité aux normes médicales européennes"
        ],
        "workEnvironment": "Laboratoire de prothèse dentaire indépendant, laboratoire intégré en clinique ou en centre de fabrication industrielle CFAO.",
        "typicalDay": [
            {
                "time": "08:00",
                "activity": "Téléchargement des fichiers STL d'empreintes numériques reçus des cabinets partenaires"
            },
            {
                "time": "09:00",
                "activity": "Modélisation 3D d'un bridge de 3 éléments sous logiciel de CAO dentaire (Exocad)"
            },
            {
                "time": "11:00",
                "activity": "Lancement de l'usinage d'un bloc de zircone multicouche sur fraiseuse numérique"
            },
            {
                "time": "14:00",
                "activity": "Travail minutieux au pinceau : stratification céramique d'une incisive centrale pour imiter la teinte naturelle"
            },
            {
                "time": "16:30",
                "activity": "Cuisson au four à céramique sous vide et glaçage final avant emballage stérile"
            }
        ],
        "skills": {
            "technical": [
                "Maîtrise des logiciels de CAO dentaire (Exocad, 3Shape Dental Designer)",
                "Morphologie dentaire et règles d'occlusion biomécanique",
                "Stratification céramique, maquillage et cuisson sous vide",
                "Connaissance des matériaux biomédicaux (zircone, titane, chrome-cobalt, résines)",
                "Pilotage de fraiseuses d'usinage et d'imprimantes 3D"
            ],
            "human": [
                "Sens artistique et œil aiguisé pour les nuances de teintes et la translucidité",
                "Patience infinie et minutie d'orfèvre dans le geste manuel",
                "Rigueur dimensionnelle au micron près",
                "Capacité d'écoute et de dialogue technique avec les chirurgiens-dentistes"
            ],
            "tools": [
                "Four à céramique programmable sous vide",
                "Micro-moteur de laboratoire et fraises diamantées",
                "Logiciel CAO Exocad ou 3Shape",
                "Fraiseuse d'usinage dentaire 5 axes et imprimante 3D résine"
            ],
            "soft": [
                "Sens artistique et œil aiguisé pour les nuances de teintes et la translucidité",
                "Patience infinie et minutie d'orfèvre dans le geste manuel",
                "Rigueur dimensionnelle au micron près",
                "Capacité d'écoute et de dialogue technique avec les chirurgiens-dentistes"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat (Bac Pro)",
                    "title": "Bac Pro Prothèse Dentaire (3 ans)",
                    "desc": "Bases pratiques de sculpture en cire, métallurgie et plâtre."
                },
                {
                    "step": "Formation supérieure (Bac +2 à +3)",
                    "title": "BTS Prothésiste Dentaire / Licence professionnelle CFAO Dentaire",
                    "desc": "Perfectionnement en céramique esthétique, implantologie et CFAO numérique."
                }
            ],
            "schools": [
                {
                    "name": "Centres de formation et lycées techniques de prothèse dentaire en France (Paris, Marseille, Lyon)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Instituts de formation professionnelle dentaire — Dakar (Sénégal)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "BTS Prothésiste Dentaire",
                "Titre de Brevet de Maîtrise (BM) Prothésiste Dentaire"
            ]
        },
        "career": {
            "sectors": [
                "Artisanat médical",
                "Laboratoires CFAO dentaire",
                "Industrie biomédicale dentaire"
            ],
            "employerTypes": [
                "Laboratoires de prothèse artisanaux",
                "Grands centres d'usinage industriels",
                "Cliniques dentaires privées"
            ],
            "evolution": "Prothésiste dentaire technicien ➔ Céramiste expert ➔ Chef de laboratoire ➔ Propriétaire-dirigeant de son propre laboratoire",
            "pros": "Mariage parfait entre artisanat d'art et technologies 3D de pointe, possibilité de créer son entreprise, aucun contact direct contraignant avec la douleur des patients.",
            "cons": "Délais de livraison serrés imposés par les plannings opératoires des dentistes, sédentarité au poste de travail."
        },
        "salary": "🇫🇷 France : 1 900 - 3 800 € net/mois (supérieur pour un chef de laboratoire installé) • 🇸🇳 Sénégal : 180 000 - 600 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Aucune dent humaine n'a une couleur uniforme : elle est plus saturée à la racine, plus lumineuse au milieu et translucide au bord libre. Le prothésiste doit superposer jusqu'à 8 couches de poudres céramiques différentes pour reproduire cette illusion naturelle parfaite !",
            "pourquoi": "L'émail et la dentine ont des indices de réfraction lumineuse complexes qui défient la simple coloration monochrome."
        },
        "sources": [
            {
                "organization": "Studyrama",
                "title": "Fiche métier : Prothésiste dentaire",
                "url": "https://www.studyrama.com/formations/fiches-metiers/sante/prothesiste-dentaire",
                "type": "metier"
            },
            {
                "organization": "Union Nationale des Patronats de Prothèse Dentaire (UNPPD)",
                "title": "Le métier de prothésiste dentaire et la transition numérique",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "construire-fabriquer",
            "creer-designer",
            "soigner-aider"
        ],
        "relatedJobSlugs": [
            "chirurgien-dentiste",
            "assistant-dentaire",
            "technicien-laboratoire"
        ],
        "summary": "Artisan et technicien de haute précision, le prothésiste conçoit et fabrique des dents artificielles, couronnes céramiques, bridges et appareils sur mesure.",
        "description": "Le prothésiste dentaire travaille dans son propre laboratoire en étroite collaboration avec les dentistes. À partir des empreintes réelles ou numériques 3D envoyées par le cabinet, il sculpte, fraise, cuit la céramique et polit des dispositifs médicaux sur mesure : couronnes céramo-métalliques, facettes ultra-fines, implants et appareils amovibles. Le métier a été profondément révolutionné par la CFAO (conception et fabrication assistées par ordinateur) et l'impression 3D métallique et résine.",
        "studyLevel": "Bac Pro à Bac +3 (BTS Prothésiste Dentaire / Licence pro)",
        "daily": {
            "morning": "Téléchargement des fichiers STL d'empreintes numériques reçus des cabinets partenaires • Modélisation 3D d'un bridge de 3 éléments sous logiciel de CAO dentaire (Exocad) • Lancement de l'usinage d'un bloc de zircone multicouche sur fraiseuse numérique",
            "afternoon": "Travail minutieux au pinceau : stratification céramique d'une incisive centrale pour imiter la teinte naturelle • Cuisson au four à céramique sous vide et glaçage final avant emballage stérile",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sante/prothesiste-dentaire"
    },
    {
        "id": "sage-femme",
        "slug": "sage-femme",
        "title": "Sage-Femme / Maïeuticien",
        "aliases": [
            "Maïeuticien",
            "Praticien de la maïeutique",
            "Sage-femme hospitalière"
        ],
        "icon": "🤰",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "biologie-chimie"
        ],
        "domain": "Santé de la Femme & de l'Enfant",
        "domainId": "femme-enfant",
        "subdomain": "Maïeutique & Maternité",
        "shortDescription": "Spécialiste de la physiologie de la grossesse et de la naissance, la sage-femme assure le suivi prénatal, pratique l'accouchement eutocique et prend soin du nouveau-né.",
        "longDescription": "Profession médicale à part entière avec plein droit de prescription, la sage-femme accompagne les femmes tout au long de leur vie génésique. Elle assure le suivi gynécologique préventif, prescrit la contraception, réalise les échographies obstétricales, prépare les couples à la naissance, conduit seule les accouchements physiologiques et surveille la santé de la mère et du bébé en salle de naissance et post-partum.",
        "simpleDefinition": "Professionnel médical qui suit la femme enceinte, met les bébés au monde et surveille leur santé après la naissance.",
        "level": "Bac +5 (Diplôme d'État de Sage-Femme / Grade Master)",
        "missions": [
            "Assurer les consultations prénatales mensuelles, prescrire les bilans sanguins et échographies",
            "Animer les séances de préparation à la naissance et à la parentalité",
            "Diagnostiquer le début du travail, surveiller le monitoring foetal et pratiquer l'accouchement physiologique",
            "Examiner le nouveau-né en salle de naissance, pratiquer les premiers gestes de réanimation si nécessaire et coter le score d'Apgar",
            "Assurer le suivi post-natal, le soutien à l'allaitement et les consultations gynécologiques de prévention et contraception"
        ],
        "workEnvironment": "Salles de travail et de naissance en maternité hospitalière ou clinique, cabinet libéral, centres de Protection Maternelle et Infantile (PMI).",
        "typicalDay": [
            {
                "time": "07:30",
                "activity": "Relève en salle de naissances : point sur les patientes en cours de travail et les monitorings"
            },
            {
                "time": "08:30",
                "activity": "Pose d'une perfusion d'ocytocine et accompagnement postural d'une future maman sous péridurale"
            },
            {
                "time": "10:15",
                "activity": "Accouchement physiologique : guidage de la poussée, naissance d'un nouveau-né vigoureux et mise en peau à peau"
            },
            {
                "time": "11:00",
                "activity": "Délivrance placentaire, examen du placenta et réfection d'une déchirure périnéale simple sous anesthésie locale"
            },
            {
                "time": "14:00",
                "activity": "Visite des suites de couches et conseil en lactation pour une maman primipare"
            }
        ],
        "skills": {
            "technical": [
                "Physiologie obstétricale et mécanique de l'accouchement par voie basse",
                "Interprétation du rythme cardiaque fœtal (RCF) et échographie obstétricale",
                "Gestes de réanimation néonatale d'urgence",
                "Prescription réglementée d'examens biologiques, d'échographies et de thérapeutiques",
                "Sutures périnéales et soins gynécologiques de prévention"
            ],
            "human": [
                "Douceur, empathie et grande capacité d'écoute émotionnelle",
                "Sang-froid exceptionnel pour identifier une anomalie fœtale imposant l'appel de l'obstétricien",
                "Sens de la communication pour guider le couple avec sérénité dans la douleur",
                "Respect de l'intimité et des projets de naissance des patientes"
            ],
            "tools": [
                "Cardiotocographe (monitoring foetal)",
                "Échographe obstétrical Doppler",
                "Matériel stérile d'accouchement et boîtes d'épisiotomie",
                "Table de réanimation néonatale chauffante"
            ],
            "soft": [
                "Douceur, empathie et grande capacité d'écoute émotionnelle",
                "Sang-froid exceptionnel pour identifier une anomalie fœtale imposant l'appel de l'obstétricien",
                "Sens de la communication pour guider le couple avec sérénité dans la douleur",
                "Respect de l'intimité et des projets de naissance des patientes"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Bac scientifique général ou S",
                    "desc": "Solide socle scientifique."
                },
                {
                    "step": "Cycle 1 (Bac +1 à +3)",
                    "title": "PASS/L.AS puis 2 années de maïeutique",
                    "desc": "Sélection médicale, anatomie pelvienne, embryologie, stages en maternité."
                },
                {
                    "step": "Cycle 2 (Bac +4 à +5)",
                    "title": "Diplôme d'État de Sage-Femme (Grade Master)",
                    "desc": "Gardes régulières en salle de naissance, autonomie pratique supervisée et mémoire de recherche."
                }
            ],
            "schools": [
                {
                    "name": "Département de Gynécologie-Obstétrique et École de Sages-Femmes — FMPOS UCAD Dakar",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Écoles de sages-femmes intégrées aux universités de médecine en France (Paris, Nantes, Lille, Lyon)",
                    "country": "France",
                    "scope": "France"
                }
            ],
            "certifications": [
                "Diplôme d'État de Sage-Femme",
                "Inscription obligatoire au Tableau de l'Ordre des Sages-Femmes"
            ]
        },
        "career": {
            "sectors": [
                "Maternité hospitalière",
                "Secteur libéral",
                "Protection Maternelle et Infantile (PMI)"
            ],
            "employerTypes": [
                "Maternités de niveau 1, 2 et 3",
                "Cabinets libéraux",
                "Centres de santé et plannings familiaux"
            ],
            "evolution": "Sage-femme clinicienne ➔ Sage-femme échographiste certifiée ➔ Sage-femme coordinatrice (Cadre) ➔ Directrice d'école de sages-femmes",
            "pros": "Moment magique d'accueillir la vie au quotidien, statut médical avec liberté de prescription, grande confiance des patientes.",
            "cons": "Gardes de 12 heures éprouvantes, urgences imprévisibles, responsabilité pénale sur deux vies à chaque naissance."
        },
        "salary": "🇫🇷 France : 2 400 - 4 200 € net/mois selon statut et secteur • 🇸🇳 Sénégal : 200 000 - 650 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Le terme maïeuticien désigne l'homme qui exerce le métier de sage-femme, en hommage à la 'maïeutique' de Socrate qui comparait sa philosophie à l'art d'accoucher les esprits, sa propre mère Phénarète étant sage-femme dans la Grèce antique.",
            "pourquoi": "Le mot sage-femme désigne littéralement celle qui possède la sagesse et le savoir sur la femme, et non le sexe du soignant."
        },
        "sources": [
            {
                "organization": "Studyrama",
                "title": "Fiche métier : Sage-femme",
                "url": "https://www.studyrama.com/formations/fiches-metiers/sante/sage-femme",
                "type": "metier"
            },
            {
                "organization": "Conseil National de l'Ordre des Sages-Femmes (CNOSF)",
                "title": "Compétences et champ d'exercice de la sage-femme",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "soigner-aider",
            "comprendre-corps-humain"
        ],
        "relatedJobSlugs": [
            "puericulteur",
            "auxiliaire-puericulture",
            "chirurgien",
            "infirmier-diplome-etat"
        ],
        "summary": "Spécialiste de la physiologie de la grossesse et de la naissance, la sage-femme assure le suivi prénatal, pratique l'accouchement eutocique et prend soin du nouveau-né.",
        "description": "Profession médicale à part entière avec plein droit de prescription, la sage-femme accompagne les femmes tout au long de leur vie génésique. Elle assure le suivi gynécologique préventif, prescrit la contraception, réalise les échographies obstétricales, prépare les couples à la naissance, conduit seule les accouchements physiologiques et surveille la santé de la mère et du bébé en salle de naissance et post-partum.",
        "studyLevel": "Bac +5 (Diplôme d'État de Sage-Femme / Grade Master)",
        "daily": {
            "morning": "Relève en salle de naissances : point sur les patientes en cours de travail et les monitorings • Pose d'une perfusion d'ocytocine et accompagnement postural d'une future maman sous péridurale • Accouchement physiologique : guidage de la poussée, naissance d'un nouveau-né vigoureux et mise en peau à peau • Délivrance placentaire, examen du placenta et réfection d'une déchirure périnéale simple sous anesthésie locale",
            "afternoon": "Visite des suites de couches et conseil en lactation pour une maman primipare",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sante/sage-femme"
    },
    {
        "id": "puericulteur",
        "slug": "puericulteur",
        "title": "Puériculteur / Puéricultrice Diplômé(e) d'État",
        "aliases": [
            "Infirmier puériculteur",
            "Spécialiste de la petite enfance",
            "Soignant pédiatrique"
        ],
        "icon": "👶",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "biologie-chimie"
        ],
        "domain": "Santé de la Femme & de l'Enfant",
        "domainId": "femme-enfant",
        "subdomain": "Pédiatrie & Néonatologie",
        "shortDescription": "Infirmier ou sage-femme spécialisé dans la santé de l'enfant de 0 à 18 ans, le puériculteur soigne prématurés en néonatologie, veille au développement moteur et conseille les parents.",
        "longDescription": "Le puériculteur est l'expert des soins et du développement de l'enfant. En service de réanimation néonatale, il prend en charge les grands prématurés en couveuse avec des gestes ultra-minutieux. En service pédiatrique, il adapte les soins et les traitements à la morphologie de chaque tranche d'âge. En PMI ou en crèche, il joue un rôle majeur de prévention, de dépistage précoce des handicaps et de soutien à la parentalité.",
        "simpleDefinition": "Infirmier hautement spécialisé dans les soins aux nouveau-nés, prématurés et enfants malades.",
        "level": "Bac +4 à Bac +5 (Diplôme d'État de Puéricultrice)",
        "missions": [
            "Dispenser des soins techniques et relationnels hautement adaptés aux nouveau-nés, nourrissons et enfants",
            "Prendre en charge les prématurés en incubateur (monitoring, cathéters ombilicaux, photothérapie, gavage)",
            "Accompagner et guider les parents dans l'apprentissage des soins quotidiens et de l'alimentation",
            "Dépister les troubles du développement psychomoteur et sensoriel lors des consultations de PMI",
            "Gérer la douleur de l'enfant par des approches médicamenteuses et des techniques non pharmacologiques (distraction, hypnose)"
        ],
        "workEnvironment": "Services de néonatologie et réanimation pédiatrique, services de pédiatrie hospitalière, centres de PMI, crèches.",
        "typicalDay": [
            {
                "time": "08:00",
                "activity": "Relève et bilan des constantes des nouveau-nés prématurés en unité de soins intensifs"
            },
            {
                "time": "09:00",
                "activity": "Soin d'hygiène minutieux d'un bébé de 1,2 kg en couveuse et administration de nutrition parentérale"
            },
            {
                "time": "11:30",
                "activity": "Accompagnement des parents pour la séance quotidienne de 'peau à peau' (méthode kangourou)"
            },
            {
                "time": "14:00",
                "activity": "Pose d'une perfusion intraveineuse pédiatrique avec patch anesthésiant et distraction par le jeu"
            },
            {
                "time": "16:30",
                "activity": "Entretien avec une jeune maman angoissée sur les signes d'alerte de déshydratation du nourrisson"
            }
        ],
        "skills": {
            "technical": [
                "Physiopathologie néonatale et pédiatrique spécifique",
                "Calculs de micro-doses médicamenteuses adaptées au poids de l'enfant",
                "Techniques de soins en milieu stérile fermé (incubateurs, couveuses)",
                "Évaluation de la douleur chez le tout-petit non communicant",
                "Normes de développement psychomoteur de la petite enfance"
            ],
            "human": [
                "Douceur infinie, patience et gestes d'une grande délicatesse",
                "Capacité à décoder les pleurs et signaux corporels du nourrisson",
                "Sens psychologique aiguisé pour rassurer des parents en détresse",
                "Pédagogie bienveillante et communication adaptée à chaque âge"
            ],
            "tools": [
                "Incubateur néonatal fermé à température et hygrométrie régulées",
                "Pousse-seringues de précision pédiatrique",
                "Matériel d'oxygénothérapie néonatale non invasive (CPAP)",
                "Échelles validées d'évaluation de la douleur pédiatrique (EDIN, EVENDOL)"
            ],
            "soft": [
                "Douceur infinie, patience et gestes d'une grande délicatesse",
                "Capacité à décoder les pleurs et signaux corporels du nourrisson",
                "Sens psychologique aiguisé pour rassurer des parents en détresse",
                "Pédagogie bienveillante et communication adaptée à chaque âge"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Diplôme d'IDE ou de Sage-Femme (Bac +3 à +5)",
                    "title": "Diplôme d'État d'Infirmier ou de Sage-Femme",
                    "desc": "Formation de base préalable obligatoire."
                },
                {
                    "step": "Formation spécialisée (1 an)",
                    "title": "École de Puériculture (Diplôme d'État)",
                    "desc": "12 mois de formation théorique et clinique spécialisée en néonatologie, pédiatrie et PMI."
                }
            ],
            "schools": [
                {
                    "name": "ENDSS — Dakar (Section Puériculture et Santé de la Reproduction)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Écoles de puériculture agréées en France (CHU de Paris, Lille, Bordeaux, Strasbourg)",
                    "country": "France",
                    "scope": "France"
                }
            ],
            "certifications": [
                "Diplôme d'État de Puéricultrice (DEP)",
                "AFGSU Pédiatrique"
            ]
        },
        "career": {
            "sectors": [
                "Pédiatrie hospitalière",
                "Néonatologie et soins intensifs",
                "Secteur médico-social et crèches"
            ],
            "employerTypes": [
                "CHU et maternités de niveau 3",
                "Conseils départementaux (services PMI)",
                "Établissements d'accueil du jeune enfant (EAJE)"
            ],
            "evolution": "Puériculteur hospitalier ➔ Puériculteur coordinateur en PMI ➔ Directeur de crèche multi-accueil ➔ Cadre de santé pédiatrique",
            "pros": "Métier profondément gratifiant, soins aux êtres les plus vulnérables, reconnaissance forte des familles, opportunités en hôpital et crèche.",
            "cons": "Déchirement émotionnel lors des situations de maladie grave ou de décès d'un enfant, horaires hospitaliers postés."
        },
        "salary": "🇫🇷 France : 2 200 - 3 600 € net/mois • 🇸🇳 Sénégal : 200 000 - 550 000 FCFA net/mois",
        "saviezVous": {
            "fait": "La 'méthode kangourou', qui consiste à placer un nouveau-né prématuré peau contre peau sur la poitrine de ses parents, régule sa température, son rythme cardiaque et son sommeil plus efficacement que les couveuses les plus perfectionnées !",
            "pourquoi": "Le contact direct stimule les hormones d'attachement (ocytocine) et reproduit l'environnement sensoriel utérin rassurant."
        },
        "sources": [
            {
                "organization": "Studyrama",
                "title": "Fiche métier : Puéricultrice",
                "url": "https://www.studyrama.com/formations/fiches-metiers/sante/puericultrice",
                "type": "metier"
            },
            {
                "organization": "Association Nationale des Puéricultrices Diplômées et des Étudiants (ANPDE)",
                "title": "Le métier de puéricultrice",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "soigner-aider",
            "comprendre-corps-humain"
        ],
        "relatedJobSlugs": [
            "sage-femme",
            "auxiliaire-puericulture",
            "infirmier-diplome-etat",
            "pediatre"
        ],
        "summary": "Infirmier ou sage-femme spécialisé dans la santé de l'enfant de 0 à 18 ans, le puériculteur soigne prématurés en néonatologie, veille au développement moteur et conseille les parents.",
        "description": "Le puériculteur est l'expert des soins et du développement de l'enfant. En service de réanimation néonatale, il prend en charge les grands prématurés en couveuse avec des gestes ultra-minutieux. En service pédiatrique, il adapte les soins et les traitements à la morphologie de chaque tranche d'âge. En PMI ou en crèche, il joue un rôle majeur de prévention, de dépistage précoce des handicaps et de soutien à la parentalité.",
        "studyLevel": "Bac +4 à Bac +5 (Diplôme d'État de Puéricultrice)",
        "daily": {
            "morning": "Relève et bilan des constantes des nouveau-nés prématurés en unité de soins intensifs • Soin d'hygiène minutieux d'un bébé de 1,2 kg en couveuse et administration de nutrition parentérale • Accompagnement des parents pour la séance quotidienne de 'peau à peau' (méthode kangourou)",
            "afternoon": "Pose d'une perfusion intraveineuse pédiatrique avec patch anesthésiant et distraction par le jeu • Entretien avec une jeune maman angoissée sur les signes d'alerte de déshydratation du nourrisson",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sante/puericultrice"
    },
    {
        "id": "auxiliaire-puericulture",
        "slug": "auxiliaire-puericulture",
        "title": "Auxiliaire de Puériculture",
        "aliases": [
            "Aide-soignante pédiatrique",
            "AP",
            "Professionnelle petite enfance hospitalière"
        ],
        "icon": "🧸",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "biologie-chimie"
        ],
        "domain": "Santé de la Femme & de l'Enfant",
        "domainId": "femme-enfant",
        "subdomain": "Petite enfance",
        "shortDescription": "Sous la responsabilité de l'infirmier ou de la sage-femme, l'auxiliaire de puériculture assure les soins d'hygiène, le confort, l'éveil et l'alimentation des tout-petits.",
        "longDescription": "L'auxiliaire de puériculture (AP) veille quotidiennement au bien-être physique et affectif des enfants bien portants ou malades, de la naissance à 3 ans. En maternité, elle montre les premiers gestes de bain et de change aux jeunes mères. En néonatologie ou pédiatrie, elle assiste l'infirmier lors des soins techniques et assure la surveillance du sommeil et des biberons. En crèche, elle anime des ateliers d'éveil favorisant l'autonomie et la socialisation.",
        "simpleDefinition": "Professionnelle de la petite enfance qui prend soin des bébés à la maternité, à l'hôpital ou en crèche (bains, repas, éveil).",
        "level": "Diplôme d'État (Formation 11 mois accessible sans diplôme préalable)",
        "missions": [
            "Donner les soins d'hygiène quotidiens aux bébés (bain, change, soins du cordon ombilical)",
            "Préparer les biberons dans le respect rigoureux de la biberonnerie et aider à la prise des repas",
            "Observer l'état général de l'enfant (température, selles, comportement) et alerter immédiatement l'infirmier",
            "Animer des activités d'éveil sensoriel, moteur et ludique adaptées au stade de développement",
            "Entretenir et désinfecter le matériel de puériculture et l'environnement de vie de l'enfant"
        ],
        "workEnvironment": "Maternités, services de pédiatrie et néonatologie, crèches collectives, haltes-garderies, pouponnières.",
        "typicalDay": [
            {
                "time": "07:30",
                "activity": "Accueil des nouveau-nés à la maternité, prise des températures et relevé des pesées"
            },
            {
                "time": "09:00",
                "activity": "Atelier pratique du bain avec une maman primipare et apprentissage des soins du nombril"
            },
            {
                "time": "11:30",
                "activity": "Préparation et distribution des biberons selon les prescriptions diététiques pédiatriques"
            },
            {
                "time": "14:00",
                "activity": "Désinfection méticuleuse des berceaux et renouvellement de la literie stérile"
            },
            {
                "time": "15:30",
                "activity": "Transmissions orales avec l'infirmière puéricultrice sur la prise alimentaire des nourrissons"
            }
        ],
        "skills": {
            "technical": [
                "Techniques de soins d'hygiène et de confort du nouveau-né",
                "Règles d'hygiène et de stérilisation en biberonnerie",
                "Repérage des signes d'inconfort, de douleur ou de détresse respiratoire chez le nourrisson",
                "Techniques d'animation d'éveil et de socialisation petite enfance",
                "Mesure et transcription des paramètres vitaux de base"
            ],
            "human": [
                "Patience infinie, écoute et sens du contact chaleureux",
                "Sens aigu de l'observation visuelle du comportement de l'enfant",
                "Capacité à rassurer les parents avec tact et pédagogie",
                "Esprit d'équipe et respect des consignes de l'encadrement soignant"
            ],
            "tools": [
                "Baignoires ergonomiques pédiatriques",
                "Pèse-bébé électronique de haute précision",
                "Chauffe-biberons professionnels et thermomètres auriculaires",
                "Jeux d'éveil sensoriel certifiés sans danger"
            ],
            "soft": [
                "Patience infinie, écoute et sens du contact chaleureux",
                "Sens aigu de l'observation visuelle du comportement de l'enfant",
                "Capacité à rassurer les parents avec tact et pédagogie",
                "Esprit d'équipe et respect des consignes de l'encadrement soignant"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Conditions d'accès",
                    "title": "Sélection sur dossier et entretien (aucun diplôme préalable exigé)",
                    "desc": "Sensibilité à la petite enfance et motivation requise."
                },
                {
                    "step": "Formation en Institut (11 mois)",
                    "title": "Institut de Formation d'Auxiliaires de Puériculture (IFAP)",
                    "desc": "Formation de 44 semaines alternant cours théoriques et 4 stages cliniques en maternité, crèche et pédiatrie."
                }
            ],
            "schools": [
                {
                    "name": "ENDSS — Dakar (Section Santé Maternelle et Infantile)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Instituts de formation IFAP agréés en France (Croix-Rouge, centres hospitaliers)",
                    "country": "France",
                    "scope": "France"
                }
            ],
            "certifications": [
                "Diplôme d'État d'Auxiliaire de Puériculture (DEAP)",
                "AFGSU Niveau 2"
            ]
        },
        "career": {
            "sectors": [
                "Petite enfance",
                "Périnatalité hospitalière",
                "Accueil en collectivité"
            ],
            "employerTypes": [
                "Maternités et CHU",
                "Crèches municipales ou associatives",
                "Pouponnières de l'Aide Sociale à l'Enfance"
            ],
            "evolution": "Auxiliaire de puériculture ➔ Évolution par passerelle vers le Diplôme d'État d'Infirmier (après 3 ans d'exercice) ➔ Éducateur de jeunes enfants",
            "pros": "Contact joyeux et affectueux avec les tout-petits, métier très recherché dans les grandes métropoles, formation courte et concrète.",
            "cons": "Charge physique (porter les enfants à longueur de journée), niveau de rémunération débutant souvent modeste."
        },
        "salary": "🇫🇷 France : 1 650 - 2 300 € net/mois • 🇸🇳 Sénégal : 110 000 - 280 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Dans les maternités modernes, les auxiliaires de puériculture sont spécialement formées à décoder les micromouvements et les expressions faciales des bébés pour repérer un début de fatigue ou de faim avant même qu'ils ne se mettent à pleurer.",
            "pourquoi": "Pleurer est le tout dernier signal de faim d'un bébé ; intervenir avant évite qu'il ne s'épuise et favorise un allaitement serein."
        },
        "sources": [
            {
                "organization": "Studyrama",
                "title": "Fiche métier : Auxiliaire de puériculture",
                "url": "https://www.studyrama.com/formations/fiches-metiers/sante/auxiliaire-de-puericulture",
                "type": "metier"
            },
            {
                "organization": "Ministère des Solidarités et de la Santé",
                "title": "Référentiel DEAP",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "soigner-aider",
            "comprendre-humain-societe"
        ],
        "relatedJobSlugs": [
            "puericulteur",
            "sage-femme",
            "infirmier-diplome-etat"
        ],
        "summary": "Sous la responsabilité de l'infirmier ou de la sage-femme, l'auxiliaire de puériculture assure les soins d'hygiène, le confort, l'éveil et l'alimentation des tout-petits.",
        "description": "L'auxiliaire de puériculture (AP) veille quotidiennement au bien-être physique et affectif des enfants bien portants ou malades, de la naissance à 3 ans. En maternité, elle montre les premiers gestes de bain et de change aux jeunes mères. En néonatologie ou pédiatrie, elle assiste l'infirmier lors des soins techniques et assure la surveillance du sommeil et des biberons. En crèche, elle anime des ateliers d'éveil favorisant l'autonomie et la socialisation.",
        "studyLevel": "Diplôme d'État (Formation 11 mois accessible sans diplôme préalable)",
        "daily": {
            "morning": "Accueil des nouveau-nés à la maternité, prise des températures et relevé des pesées • Atelier pratique du bain avec une maman primipare et apprentissage des soins du nombril • Préparation et distribution des biberons selon les prescriptions diététiques pédiatriques",
            "afternoon": "Désinfection méticuleuse des berceaux et renouvellement de la literie stérile • Transmissions orales avec l'infirmière puéricultrice sur la prise alimentaire des nourrissons",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sante/auxiliaire-de-puericulture"
    },
    {
        "id": "psychiatre",
        "slug": "psychiatre",
        "title": "Médecin Psychiatre",
        "aliases": [
            "Psychiatre",
            "Pédopsychiatre",
            "Praticien hospitalier en psychiatrie"
        ],
        "icon": "🧠",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "lettres-langues-sciences-humaines",
            "biologie-chimie"
        ],
        "domain": "Santé Mentale & Psychiatrie",
        "domainId": "sante-mentale",
        "subdomain": "Psychiatrie clinique",
        "shortDescription": "Docteur en médecine spécialisé dans la santé mentale, le psychiatre diagnostique, traite et prévient les troubles psychiques à l'aide de psychothérapies et de traitements médicamenteux.",
        "longDescription": "À la différence du psychologue clinicien (qui est titulaire d'un master de psychologie non médical), le psychiatre est un médecin ayant suivi 10 à 11 années d'études médicales complètes. Il est le seul professionnel de santé mentale habilité à prescrire des bilans somatiques, des psychotropes (antidépresseurs, anxiolytiques, antipsychotiques, thymorégulateurs) et à prononcer des hospitalisations en soins psychiatriques. Il traite les dépressions sévères, troubles bipolaires, schizophrénies, addictions et traumatismes.",
        "simpleDefinition": "Médecin spécialiste qui diagnostique et soigne les maladies mentales en combinant psychothérapie et médicaments.",
        "level": "Bac +10 à Bac +11 (DES de Psychiatrie)",
        "missions": [
            "Conduire des entretiens diagnostiques approfondis pour évaluer les troubles psychiatriques et le risque suicidaire",
            "Éliminer une cause organique ou neurologique par des examens biologiques et imageries cérébrales (IRM)",
            "Prescrire et adapter les traitements médicamenteux psychotropes en surveillant les effets secondaires",
            "Mener des psychothérapies individuelles (TCC, thérapies analytiques, systémiques)",
            "Coordonner l'équipe pluridisciplinaire en Centre Médico-Psychologique (CMP) ou en clinique psychiatrique"
        ],
        "workEnvironment": "Centres Médico-Psychologiques (CMP), hôpitaux psychiatriques (CHS), cliniques privées, cabinet libéral, services d'urgences psychiatriques.",
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Réunion de synthèse clinique pluridisciplinaire avec infirmiers, psychologues et assistants sociaux du CMP"
            },
            {
                "time": "09:30",
                "activity": "Consultation de suivi d'un patient bipolaire stabilisé sous régulateur d'humeur"
            },
            {
                "time": "11:00",
                "activity": "Entretien d'admission en hospitalisation de jour pour un trouble anxieux dépressif sévère"
            },
            {
                "time": "14:00",
                "activity": "Séance de psychothérapie comportementale et cognitive (TCC) pour un trouble obsessionnel compulsif"
            },
            {
                "time": "16:30",
                "activity": "Évaluation d'urgence aux urgences générales pour une crise d'angoisse aiguë avec idées suicidaires"
            }
        ],
        "skills": {
            "technical": [
                "Sémiologie psychiatrique et classifications nosographiques (DSM-5, CIM-11)",
                "Neurobiologie, pharmacocinétique et psychopharmacologie avancée",
                "Techniques de psychothérapie validées scientifiquement (TCC, thérapies interpersonnelles)",
                "Législation des soins psychiatriques sans consentement et protection juridique",
                "Gestion des situations d'urgence psychiatrique et désescalade de crise"
            ],
            "human": [
                "Écoute active exempte de tout jugement de valeur",
                "Patience inaltérable face à des pathologies chroniques lentes à stabiliser",
                "Capacité d'analyse fine du transfert et du contre-transfert relationnel",
                "Solidité émotionnelle face à la détresse psychique intense"
            ],
            "tools": [
                "Échelles d'évaluation psychiatrique (Hamilton, MADRS, PANSS)",
                "Dossier médical psychiatrique informatisé",
                "Plateforme de télé-psychiatrie sécurisée"
            ],
            "soft": [
                "Écoute active exempte de tout jugement de valeur",
                "Patience inaltérable face à des pathologies chroniques lentes à stabiliser",
                "Capacité d'analyse fine du transfert et du contre-transfert relationnel",
                "Solidité émotionnelle face à la détresse psychique intense"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Baccalauréat scientifique S",
                    "desc": "Bases en sciences et sciences humaines."
                },
                {
                    "step": "Cycles 1 et 2 (Bac +1 à +6)",
                    "title": "Études médicales complètes et externat",
                    "desc": "Stages hospitaliers et épreuves nationales classantes."
                },
                {
                    "step": "Troisième cycle (Bac +7 à +11)",
                    "title": "DES de Psychiatrie (4 à 5 ans)",
                    "desc": "Internat spécialisé en psychiatrie adulte, pédopsychiatrie, addictologie et urgences."
                }
            ],
            "schools": [
                {
                    "name": "FMPOS UCAD — Clinique Psychiatrique de Fann (École de Fann - Dakar)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Facultés de médecine et CHS français (Sainte-Anne Paris, Lyon, Toulouse)",
                    "country": "France",
                    "scope": "France"
                }
            ],
            "certifications": [
                "DES de Psychiatrie",
                "Thèse de Docteur en Médecine",
                "Ordre des Médecins"
            ]
        },
        "career": {
            "sectors": [
                "Psychiatrie publique",
                "Exercice libéral",
                "Psychiatrie légale et expertises judiciaires"
            ],
            "employerTypes": [
                "Centres Hospitaliers Spécialisés (CHS)",
                "Cabinets privés",
                "Établissements pénitentiaires (UHSA)"
            ],
            "evolution": "Praticien hospitalier psychiatre ➔ Chef de pôle de santé mentale ➔ Directeur médical de clinique ➔ Professeur d'université",
            "pros": "Profondeur inégalée de la relation d'aide humaine, capacité à transformer radicalement la vie des patients en crise, très forte demande sociétale.",
            "cons": "Charge mentale et émotionnelle intense, confrontation à des situations de grande vulnérabilité sociale et au risque suicidaire."
        },
        "salary": "🇫🇷 France : 4 500 - 9 500 € net/mois selon secteur • 🇸🇳 Sénégal : 450 000 - 1 800 000 FCFA net/mois",
        "saviezVous": {
            "fait": "L'École de Fann à Dakar, initiée par le Pr Henri Collomb et poursuivie par des maîtres sénégalais, est mondialement célèbre en psychiatrie pour avoir intégré l'écoute communautaire africaine traditionnelle (l'arbre à palabres, les familles élargies) au sein même de l'hôpital psychiatrique moderne.",
            "pourquoi": "Cette approche pionnière a prouvé que la guérison psychique dépend autant du lien social et du soutien culturel que des molécules thérapeutiques."
        },
        "sources": [
            {
                "organization": "Studyrama",
                "title": "Fiche métier : Psychiatre",
                "url": "https://www.studyrama.com/formations/fiches-metiers/sante/psychiatre",
                "type": "metier"
            },
            {
                "organization": "Association Française de Psychiatrie",
                "title": "Exercer la psychiatrie",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "soigner-aider",
            "comprendre-humain-societe",
            "comprendre-corps-humain"
        ],
        "relatedJobSlugs": [
            "psychologue-clinicien",
            "infirmier-sante-mentale",
            "medecin-generaliste"
        ],
        "summary": "Docteur en médecine spécialisé dans la santé mentale, le psychiatre diagnostique, traite et prévient les troubles psychiques à l'aide de psychothérapies et de traitements médicamenteux.",
        "description": "À la différence du psychologue clinicien (qui est titulaire d'un master de psychologie non médical), le psychiatre est un médecin ayant suivi 10 à 11 années d'études médicales complètes. Il est le seul professionnel de santé mentale habilité à prescrire des bilans somatiques, des psychotropes (antidépresseurs, anxiolytiques, antipsychotiques, thymorégulateurs) et à prononcer des hospitalisations en soins psychiatriques. Il traite les dépressions sévères, troubles bipolaires, schizophrénies, addictions et traumatismes.",
        "studyLevel": "Bac +10 à Bac +11 (DES de Psychiatrie)",
        "daily": {
            "morning": "Réunion de synthèse clinique pluridisciplinaire avec infirmiers, psychologues et assistants sociaux du CMP • Consultation de suivi d'un patient bipolaire stabilisé sous régulateur d'humeur • Entretien d'admission en hospitalisation de jour pour un trouble anxieux dépressif sévère",
            "afternoon": "Séance de psychothérapie comportementale et cognitive (TCC) pour un trouble obsessionnel compulsif • Évaluation d'urgence aux urgences générales pour une crise d'angoisse aiguë avec idées suicidaires",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sante/psychiatre"
    },
    {
        "id": "infirmier-sante-mentale",
        "slug": "infirmier-sante-mentale",
        "title": "Infirmier / Infirmière en Santé Mentale & Psychiatrie",
        "aliases": [
            "Infirmier de secteur psychiatrique",
            "Infirmier en psychiatrie",
            "Soignant en santé mentale"
        ],
        "icon": "🧠",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "lettres-langues-sciences-humaines",
            "biologie-chimie"
        ],
        "domain": "Santé Mentale & Psychiatrie",
        "domainId": "sante-mentale",
        "subdomain": "Soins infirmiers psychiatriques",
        "shortDescription": "Spécialiste de la relation d'aide et de l'écoute thérapeutique, l'infirmier en santé mentale accompagne les patients souffrant de troubles psychiques vers la réhabilitation et l'autonomie.",
        "longDescription": "En milieu psychiatrique, l'outil de soin principal de l'infirmier est la relation humaine elle-même. Il administre les traitements psychotropes, observe finement les fluctuations de l'humeur et des angoisses, anime des ateliers thérapeutiques (peinture, écriture, médiation corporelle) et désamorce les crises d'angoisse ou d'agitation par la parole et l'empathie.",
        "simpleDefinition": "Infirmier qui accompagne et soigne les personnes souffrant de dépression, d'angoisses ou de maladies psychologiques à travers la parole et les activités.",
        "level": "Bac +3 (Diplôme d'État d'Infirmier avec formation continue en santé mentale)",
        "missions": [
            "Établir une alliance thérapeutique solide avec le patient souffrant de troubles mentaux",
            "Administrer les thérapeutiques médicamenteuses (psychotropes) et surveiller l'observance et les effets secondaires",
            "Mener des entretiens infirmiers d'aide et d'apaisement lors des moments d'angoisse",
            "Concevoir et animer des ateliers à médiation thérapeutique (art-thérapie, cuisine, groupes de parole)",
            "Accompagner la réinsertion sociale et le maintien dans le logement en lien avec le réseau médico-social"
        ],
        "workEnvironment": "Unités d'hospitalisation complète en psychiatrie (CHS), centres médico-psychologiques (CMP), hôpitaux de jour, foyers de transition.",
        "typicalDay": [
            {
                "time": "08:00",
                "activity": "Relève clinique d'équipe et analyse des comportements nocturnes des patients"
            },
            {
                "time": "09:00",
                "activity": "Entretiens soignants d'accueil matinal et distribution sécurisée des traitements"
            },
            {
                "time": "10:30",
                "activity": "Animation d'un atelier thérapeutique de relaxation et gestion corporelle du stress"
            },
            {
                "time": "14:00",
                "activity": "Visite à domicile d'un patient en rémission pour évaluer son autonomie et l'observance du traitement"
            },
            {
                "time": "16:00",
                "activity": "Désescalade verbale d'un moment de tension et écoute bienveillante en salle d'apaisement"
            }
        ],
        "skills": {
            "technical": [
                "Techniques d'entretien infirmier d'aide et de soutien psychologique",
                "Psychopathologie clinique et sémiologie des troubles de l'humeur et psychoses",
                "Gestion des états de crise et techniques de désescalade verbale non violente",
                "Surveillance clinique des thérapeutiques psychotropes",
                "Animation de groupes et médiations thérapeutiques"
            ],
            "human": [
                "Patience inaltérable et grande tolérance aux attitudes de repli ou d'hostilité",
                "Excellente maîtrise de soi et calme contagieux en situation d'agitation",
                "Capacité d'écoute authentique sans chercher à juger ou moraliser",
                "Capacité de travail en équipe pour élaborer une stratégie soignante cohérente"
            ],
            "tools": [
                "Dossier de soins psychiatriques informatisé",
                "Outils de médiation thérapeutique (jeux de rôle, peinture, musique)",
                "Protocoles de gestion de crise et espaces d'apaisement"
            ],
            "soft": [
                "Patience inaltérable et grande tolérance aux attitudes de repli ou d'hostilité",
                "Excellente maîtrise de soi et calme contagieux en situation d'agitation",
                "Capacité d'écoute authentique sans chercher à juger ou moraliser",
                "Capacité de travail en équipe pour élaborer une stratégie soignante cohérente"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Formation initiale (Bac +3)",
                    "title": "Diplôme d'État d'Infirmier (IFSI / ENDSS)",
                    "desc": "Formation infirmière socle avec stages obligatoires en psychiatrie."
                },
                {
                    "step": "Spécialisation continue",
                    "title": "Diplômes Universitaires (DU) en Santé Mentale et Psychiatrie",
                    "desc": "Formation clinique approfondie en psychopathologie et réhabilitation psychosociale."
                }
            ],
            "schools": [
                {
                    "name": "ENDSS — Dakar (Enseignement spécialisé en psychiatrie)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Instituts de Formation en Soins Infirmiers (IFSI) en France",
                    "country": "France",
                    "scope": "France"
                }
            ],
            "certifications": [
                "Diplôme d'État d'Infirmier",
                "DU de Soins Infirmiers en Psychiatrie"
            ]
        },
        "career": {
            "sectors": [
                "Psychiatrie adulte et infanto-juvénile",
                "Addictologie",
                "Santé mentale communautaire"
            ],
            "employerTypes": [
                "Centres Hospitaliers Spécialisés",
                "Centres Médico-Psychologiques",
                "Associations d'insertion pour personnes handicapées psychiques"
            ],
            "evolution": "Infirmier en psychiatrie ➔ Infirmier de pratique avancée en psychiatrie (IPA santé mentale) ➔ Cadre de santé en pôle psychiatrique",
            "pros": "L'humain au centre absolu du soin, valorisation de la parole et de la relation, horaires souvent sans urgences techniques lourdes.",
            "cons": "Charge émotionnelle forte, évolution lente de certaines pathologies chroniques, confrontation occasionnelle à l'agressivité verbale."
        },
        "salary": "🇫🇷 France : 2 050 - 3 400 € net/mois • 🇸🇳 Sénégal : 180 000 - 500 000 FCFA net/mois",
        "saviezVous": {
            "fait": "En psychiatrie moderne, l'isolement et la contention physique sont devenus des pratiques de tout dernier recours, remplacées par des 'salles d'apaisement sensorielles' (Snoezelen) combinant lumières douces, musique et textures apaisantes animées par les infirmiers.",
            "pourquoi": "Ces approches sensorielles désamorcent la crise sans générer de traumatisme supplémentaire chez le patient."
        },
        "sources": [
            {
                "organization": "Studyrama",
                "title": "Fiche métier : Infirmier en psychiatrie",
                "url": "https://www.studyrama.com/formations/fiches-metiers/sante/infirmier",
                "type": "metier"
            },
            {
                "organization": "Association Française des Soignants en Psychiatrie (AFSP)",
                "title": "Les soins infirmiers en psychiatrie",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "soigner-aider",
            "comprendre-humain-societe"
        ],
        "relatedJobSlugs": [
            "psychiatre",
            "psychologue-clinicien",
            "infirmier-diplome-etat"
        ],
        "summary": "Spécialiste de la relation d'aide et de l'écoute thérapeutique, l'infirmier en santé mentale accompagne les patients souffrant de troubles psychiques vers la réhabilitation et l'autonomie.",
        "description": "En milieu psychiatrique, l'outil de soin principal de l'infirmier est la relation humaine elle-même. Il administre les traitements psychotropes, observe finement les fluctuations de l'humeur et des angoisses, anime des ateliers thérapeutiques (peinture, écriture, médiation corporelle) et désamorce les crises d'angoisse ou d'agitation par la parole et l'empathie.",
        "studyLevel": "Bac +3 (Diplôme d'État d'Infirmier avec formation continue en santé mentale)",
        "daily": {
            "morning": "Relève clinique d'équipe et analyse des comportements nocturnes des patients • Entretiens soignants d'accueil matinal et distribution sécurisée des traitements • Animation d'un atelier thérapeutique de relaxation et gestion corporelle du stress",
            "afternoon": "Visite à domicile d'un patient en rémission pour évaluer son autonomie et l'observance du traitement • Désescalade verbale d'un moment de tension et écoute bienveillante en salle d'apaisement",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sante/infirmier"
    },
    {
        "id": "kinesitherapeute",
        "slug": "kinesitherapeute",
        "title": "Masseur-Kinésithérapeute Diplômé d'État",
        "aliases": [
            "Kinésithérapeute",
            "Kiné",
            "Physiothérapeute"
        ],
        "icon": "🦴",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "biologie-chimie"
        ],
        "domain": "Rééducation, Réadaptation & Autonomie",
        "domainId": "reeducation-readaptation",
        "subdomain": "Kinésithérapie",
        "shortDescription": "Spécialiste du mouvement et de la rééducation motrice, le kinésithérapeute rétablit les capacités physiques, soulage la douleur et rééduque les fonctions musculaires et articulaires.",
        "longDescription": "Par des massages médicaux ciblés, des mobilisations articulaires et des exercices de gymnastique thérapeutique, le masseur-kinésithérapeute rééduque les personnes souffrant de paralysies, de fractures, de rhumatismes, d'accidents du sport ou de troubles respiratoires. Il aide les personnes accidentées à remarcher, les sportifs à récupérer et les nourrissons atteints de bronchiolite à respirer.",
        "simpleDefinition": "Spécialiste de la rééducation qui utilise des massages et des mouvements pour soulager les douleurs et réapprendre au corps à bouger.",
        "level": "Bac +5 (Diplôme d'État de Masseur-Kinésithérapeute - Grade Master)",
        "missions": [
            "Réaliser le bilan kinésithérapique initial (mobilité articulaire, force musculaire, douleur, posture)",
            "Pratiquer des massages thérapeutiques et des mobilisations actives et passives",
            "Élaborer et superviser des programmes de renforcement musculaire et de proprioception sur plateau technique",
            "Pratiquer la kinésithérapie respiratoire (désencombrement bronchique chez l'adulte et le nourrisson)",
            "Conseiller les patients sur la posture ergonomique et la prévention des récidives au quotidien"
        ],
        "workEnvironment": "Cabinet libéral individuel ou de groupe, centres de rééducation fonctionnelle (CRF), services hospitaliers de traumatologie et neurologie.",
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Séance de rééducation post-opératoire d'une rupture du ligament croisé du genou chez un jeune footballeur"
            },
            {
                "time": "09:30",
                "activity": "Mobilisation douce de l'épaule pour un patient souffrant de capsulite rétractile"
            },
            {
                "time": "11:00",
                "activity": "Kinésithérapie respiratoire pédiatrique pour un bébé encombré envoyé par le pédiatre"
            },
            {
                "time": "14:00",
                "activity": "Rééducation de la marche et de l'équilibre chez une personne âgée après fracture du col du fémur"
            },
            {
                "time": "17:00",
                "activity": "Séance de réhabilitation cardiorespiratoire sur vélo ergométrique"
            }
        ],
        "skills": {
            "technical": [
                "Anatomie descriptive, palpatoire et biomécanique du mouvement",
                "Techniques manuelles de mobilisation articulaire et de massothérapie",
                "Physiothérapie instrumentale (électrothérapie, ultrasons, pressothérapie)",
                "Kinésithérapie respiratoire et cardio-vasculaire",
                "Rééducation neurologique (méthodes Bobath, Kabat)"
            ],
            "human": [
                "Énergie communicative et capacité à motiver le patient dans l'effort",
                "Écoute attentive pour adapter l'intensité des exercices au seuil de douleur",
                "Bonne forme et résistance physique personnelle pour soutenir les patients",
                "Pédagogie pour enseigner les auto-exercices à domicile"
            ],
            "tools": [
                "Table de massage électrique réglable",
                "Barres parallèles de marche et espaliers",
                "Vélo ergométrique, tapis de course et presse quadriceps",
                "Appareils d'ondes de choc et d'électrostimulation"
            ],
            "soft": [
                "Énergie communicative et capacité à motiver le patient dans l'effort",
                "Écoute attentive pour adapter l'intensité des exercices au seuil de douleur",
                "Bonne forme et résistance physique personnelle pour soutenir les patients",
                "Pédagogie pour enseigner les auto-exercices à domicile"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Bac scientifique général ou S",
                    "desc": "Excellentes bases scientifiques et physiques."
                },
                {
                    "step": "Année de sélection (Bac +1)",
                    "title": "PASS, L.AS ou Licence STAPS",
                    "desc": "Accès très compétitif aux instituts de kinésithérapie."
                },
                {
                    "step": "Institut de Kinésithérapie (Bac +2 à +5)",
                    "title": "4 années en Institut de Formation en Masso-Kinésithérapie (IFMK)",
                    "desc": "Validation du Diplôme d'État conférant le grade de Master."
                }
            ],
            "schools": [
                {
                    "name": "ENDSS — Section Kinésithérapie / Physiothérapie — Dakar",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Instituts de Formation en Masso-Kinésithérapie (IFMK) en France (Paris, Nancy, Rennes, Toulouse)",
                    "country": "France",
                    "scope": "France"
                }
            ],
            "certifications": [
                "Diplôme d'État de Masseur-Kinésithérapeute",
                "Inscription obligatoire au Conseil National de l'Ordre des Masseurs-Kinésithérapeutes"
            ]
        },
        "career": {
            "sectors": [
                "Cabinet libéral",
                "Centres de rééducation et thermalisme",
                "Clubs sportifs professionnels"
            ],
            "employerTypes": [
                "Pratique libérale (85% des professionnels)",
                "Centres de rééducation fonctionnelle",
                "Fédérations et clubs sportifs"
            ],
            "evolution": "Kinésithérapeute libéral ➔ Spécialisation en kinésithérapie du sport ou pédiatrique ➔ Cadre de santé en rééducation ➔ Enseignant en IFMK",
            "pros": "Contact humain très valorisant, progression visible du patient retrouvant son autonomie, liberté totale d'installation, métier très dynamique.",
            "cons": "Fatigue physique des mains, des poignets et du dos, charges de gestion en cabinet libéral."
        },
        "salary": "🇫🇷 France : 2 500 - 4 800 € net/mois en libéral (environ 2 000 - 3 200 € à l'hôpital) • 🇸🇳 Sénégal : 200 000 - 650 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Les kinésithérapeutes du sport accompagnent chaque délégation olympique et sont capables de remettre sur pied un athlète victime d'une contracture en quelques heures grâce à une combinaison de cryothérapie, massages profonds et taping.",
            "pourquoi": "Leur compréhension fine de la chaîne myotendineuse permet d'isoler la lésion sans immobiliser l'ensemble du membre."
        },
        "sources": [
            {
                "organization": "Studyrama",
                "title": "Fiche métier : Kinésithérapeute",
                "url": "https://www.studyrama.com/formations/fiches-metiers/sante/kinesitherapeute",
                "type": "metier"
            },
            {
                "organization": "Conseil National de l'Ordre des Masseurs-Kinésithérapeutes (CNOMK)",
                "title": "Le métier de kinésithérapeute",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "soigner-aider",
            "comprendre-corps-humain",
            "construire-fabriquer"
        ],
        "relatedJobSlugs": [
            "ergotherapeute",
            "psychomotricien",
            "pedicure-podologue",
            "medecin-generaliste"
        ],
        "summary": "Spécialiste du mouvement et de la rééducation motrice, le kinésithérapeute rétablit les capacités physiques, soulage la douleur et rééduque les fonctions musculaires et articulaires.",
        "description": "Par des massages médicaux ciblés, des mobilisations articulaires et des exercices de gymnastique thérapeutique, le masseur-kinésithérapeute rééduque les personnes souffrant de paralysies, de fractures, de rhumatismes, d'accidents du sport ou de troubles respiratoires. Il aide les personnes accidentées à remarcher, les sportifs à récupérer et les nourrissons atteints de bronchiolite à respirer.",
        "studyLevel": "Bac +5 (Diplôme d'État de Masseur-Kinésithérapeute - Grade Master)",
        "daily": {
            "morning": "Séance de rééducation post-opératoire d'une rupture du ligament croisé du genou chez un jeune footballeur • Mobilisation douce de l'épaule pour un patient souffrant de capsulite rétractile • Kinésithérapie respiratoire pédiatrique pour un bébé encombré envoyé par le pédiatre",
            "afternoon": "Rééducation de la marche et de l'équilibre chez une personne âgée après fracture du col du fémur • Séance de réhabilitation cardiorespiratoire sur vélo ergométrique",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sante/kinesitherapeute"
    },
    {
        "id": "ergotherapeute",
        "slug": "ergotherapeute",
        "title": "Ergothérapeute Diplômé d'État",
        "aliases": [
            "Occupational Therapist",
            "Thérapeute en réadaptation de l'activité",
            "Spécialiste de l'autonomie"
        ],
        "icon": "🧩",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "biologie-chimie"
        ],
        "domain": "Rééducation, Réadaptation & Autonomie",
        "domainId": "reeducation-readaptation",
        "subdomain": "Ergothérapie",
        "shortDescription": "Spécialiste de l'autonomie au quotidien, l'ergothérapeute rééduque par l'activité concrète et aménage l'environnement pour permettre aux personnes en situation de handicap de vivre pleinement.",
        "longDescription": "L'ergothérapie part d'un principe fondamental : l'activité humaine a un pouvoir thérapeutique. Après un AVC, un traumatisme crânien ou face à une maladie neurodégénérative (Parkinson, Alzheimer), l'ergothérapeute réentraîne le patient aux gestes de la vie quotidienne : s'habiller, cuisiner, écrire, conduire. Il préconise des aides techniques innovantes et aménage le logement ou le poste de travail pour compenser les incapacités.",
        "simpleDefinition": "Professionnel de santé qui aide les personnes blessées ou handicapées à retrouver leur autonomie dans les gestes de tous les jours (manger, s'habiller, travailler).",
        "level": "Bac +3 (Diplôme d'État d'Ergothérapeute - Grade Licence)",
        "missions": [
            "Évaluer les capacités motrices, cognitives et l'autonomie fonctionnelle du patient dans ses activités de vie quotidienne",
            "Mettre en place des exercices de rééducation gestuelle à travers des mises en situation concrètes (cuisine, écriture, informatique)",
            "Concevoir et fabriquer sur mesure de petites orthèses de main et de poignet thermoformables",
            "Réaliser des visites à domicile pour diagnostiquer les obstacles architecturaux et préconiser des aménagements (douche adaptée, rampes)",
            "Sélectionner et entraîner le patient à l'utilisation d'aides techniques (fauteuil roulant électrique, logiciels de commande oculaire)"
        ],
        "workEnvironment": "Centres de rééducation fonctionnelle (CRF), services de neurologie et gériatrie hospitaliers, EHPAD, exercice libéral, cabinets d'aménagement de l'habitat.",
        "typicalDay": [
            {
                "time": "08:45",
                "activity": "Bilan de préhension et dextérité fine d'un patient hémiplégique après un accident vasculaire cérébral"
            },
            {
                "time": "10:00",
                "activity": "Mise en situation de préparation d'un repas en cuisine thérapeutique adaptée"
            },
            {
                "time": "11:30",
                "activity": "Thermoformage sur mesure d'une attelle de repos de nuit pour une patiente polyarthritique"
            },
            {
                "time": "14:00",
                "activity": "Visite au domicile d'un enfant myopathe pour planifier l'élargissement des portes et la domotique"
            },
            {
                "time": "16:00",
                "activity": "Essai et réglage d'un fauteuil roulant électrique avec joystick adapté au menton"
            }
        ],
        "skills": {
            "technical": [
                "Analyse sémiologique de l'activité humaine et bilans d'autonomie (MIF, Barthel)",
                "Conception et fabrication d'orthèses thermoformables de membre supérieur",
                "Normes d'accessibilité PMR et aménagement architectural de l'habitat",
                "Aides techniques compensatoires et nouvelles technologies d'assistance",
                "Rééducation cognitive des fonctions exécutives"
            ],
            "human": [
                "Créativité et inventivité pour trouver des solutions ingénieuses sur mesure",
                "Écoute des projets de vie personnels du patient sans imposer de modèle normé",
                "Pédagogie pour réapprendre des gestes avec patience",
                "Sens de la négociation avec les financeurs pour l'attribution des aides techniques"
            ],
            "tools": [
                "Cuisine thérapeutique avec plans de travail réglables en hauteur",
                "Bac de thermoformage à eau chaude et plaques de plastique polymère",
                "Logiciels d'accessibilité informatique et contacteurs adaptés",
                "Mètre laser et grille d'évaluation d'accessibilité domiciliaire"
            ],
            "soft": [
                "Créativité et inventivité pour trouver des solutions ingénieuses sur mesure",
                "Écoute des projets de vie personnels du patient sans imposer de modèle normé",
                "Pédagogie pour réapprendre des gestes avec patience",
                "Sens de la négociation avec les financeurs pour l'attribution des aides techniques"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Baccalauréat général ou technologique",
                    "desc": "Profil équilibré sciences et humanités."
                },
                {
                    "step": "Sélection Parcoursup / Concours (Bac +1)",
                    "title": "Accès aux Instituts de Formation en Ergothérapie (IFE)",
                    "desc": "Dossier Parcoursup ou PASS/L.AS selon universités."
                },
                {
                    "step": "Institut d'Ergothérapie (Bac +3)",
                    "title": "3 années en IFE",
                    "desc": "Obtention du Diplôme d'État d'Ergothérapeute conférant le grade de Licence."
                }
            ],
            "schools": [
                {
                    "name": "ENDSS — Section Ergothérapie / Réadaptation — Dakar",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Instituts de Formation en Ergothérapie (IFE) en France (Paris, Bordeaux, Créteil, Rennes)",
                    "country": "France",
                    "scope": "France"
                }
            ],
            "certifications": [
                "Diplôme d'État d'Ergothérapeute",
                "Numéro ADELI / RPPS"
            ]
        },
        "career": {
            "sectors": [
                "Rééducation hospitalière",
                "Secteur médico-social",
                "Exercice libéral et expertise assurances"
            ],
            "employerTypes": [
                "Centres de rééducation fonctionnelle",
                "Services de soins de suite et de réadaptation (SSR)",
                "Maisons Départementales des Personnes Handicapées (MDPH)"
            ],
            "evolution": "Ergothérapeute clinicien ➔ Ergothérapeute conseil en accessibilité et ergonomie industrielle ➔ Cadre de santé en rééducation",
            "pros": "Impact immédiatement visible sur la liberté et la dignité des personnes, métier extrêmement créatif et concret, demande en forte croissance.",
            "cons": "Démarches administratives parfois longues pour obtenir le financement des aides techniques prescrites."
        },
        "salary": "🇫🇷 France : 1 900 - 3 400 € net/mois selon secteur • 🇸🇳 Sénégal : 180 000 - 450 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Un ergothérapeute peut permettre à une personne totalement tétraplégique de contrôler les lumières, la télévision, son lit médicalisé et d'écrire sur ordinateur uniquement grâce au mouvement de ses yeux ou à un souffle d'air dans une paille !",
            "pourquoi": "L'ergothérapie adapte l'environnement aux capacités restantes du patient, aussi minimes soient-elles."
        },
        "sources": [
            {
                "organization": "Studyrama",
                "title": "Fiche métier : Ergothérapeute",
                "url": "https://www.studyrama.com/formations/fiches-metiers/sante/ergotherapeute",
                "type": "metier"
            },
            {
                "organization": "Association Nationale Française des Ergothérapeutes (ANFE)",
                "title": "Présentation de l'ergothérapie",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "soigner-aider",
            "construire-fabriquer",
            "resoudre-problemes"
        ],
        "relatedJobSlugs": [
            "kinesitherapeute",
            "psychomotricien",
            "orthophoniste"
        ],
        "summary": "Spécialiste de l'autonomie au quotidien, l'ergothérapeute rééduque par l'activité concrète et aménage l'environnement pour permettre aux personnes en situation de handicap de vivre pleinement.",
        "description": "L'ergothérapie part d'un principe fondamental : l'activité humaine a un pouvoir thérapeutique. Après un AVC, un traumatisme crânien ou face à une maladie neurodégénérative (Parkinson, Alzheimer), l'ergothérapeute réentraîne le patient aux gestes de la vie quotidienne : s'habiller, cuisiner, écrire, conduire. Il préconise des aides techniques innovantes et aménage le logement ou le poste de travail pour compenser les incapacités.",
        "studyLevel": "Bac +3 (Diplôme d'État d'Ergothérapeute - Grade Licence)",
        "daily": {
            "morning": "Bilan de préhension et dextérité fine d'un patient hémiplégique après un accident vasculaire cérébral • Mise en situation de préparation d'un repas en cuisine thérapeutique adaptée • Thermoformage sur mesure d'une attelle de repos de nuit pour une patiente polyarthritique",
            "afternoon": "Visite au domicile d'un enfant myopathe pour planifier l'élargissement des portes et la domotique • Essai et réglage d'un fauteuil roulant électrique avec joystick adapté au menton",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sante/ergotherapeute"
    },
    {
        "id": "orthophoniste",
        "slug": "orthophoniste",
        "title": "Orthophoniste Diplômé d'État",
        "aliases": [
            "Logopède",
            "Thérapeute du langage et de la communication",
            "Speech Therapist"
        ],
        "icon": "🗣️",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "lettres-langues-sciences-humaines",
            "biologie-chimie"
        ],
        "domain": "Rééducation, Réadaptation & Autonomie",
        "domainId": "reeducation-readaptation",
        "subdomain": "Orthophonie",
        "shortDescription": "Spécialiste de la communication humaine, l'orthophoniste rééduque les troubles du langage oral et écrit (bégaiement, dyslexie), de la voix, de la déglutition et de la mémoire.",
        "longDescription": "L'orthophoniste intervient à tous les âges de la vie sur prescription médicale. Chez l'enfant, il rééduque les retards de parole, bégaiements, dyslexies et dysorthographies. Chez l'adulte, il restaure la parole et la déglutition après un AVC (aphasie) ou une chirurgie de la gorge (larynx), et stimule les fonctions cognitives chez les personnes âgées atteintes de maladies neurodégénératives.",
        "simpleDefinition": "Professionnel de santé qui rééduque les personnes qui ont du mal à parler, à lire, à écrire ou à avaler.",
        "level": "Bac +5 (Certificat de Capacité d'Orthophoniste - Grade Master)",
        "missions": [
            "Réaliser le bilan orthophonique complet : évaluation du langage oral, écrit, de la déglutition et des fonctions cognitives",
            "Élaborer un projet thérapeutique personnalisé avec objectifs précis et réguliers",
            "Mener des séances de rééducation du bégaiement, de l'articulation et des troubles spécifiques des apprentissages (dyslexie)",
            "Rééduquer les troubles de la déglutition pour éviter les fausses routes chez les personnes âgées ou opérées",
            "Accompagner la réhabilitation du langage des patients aphasiques après un accident vasculaire cérébral"
        ],
        "workEnvironment": "Cabinet libéral (80%), services hospitaliers de neurologie, pédiatrie et ORL, centres médico-psycho-pédagogiques (CMPP).",
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Séance de rééducation de la voix chez une enseignante souffrant de nodules des cordes vocales"
            },
            {
                "time": "09:30",
                "activity": "Rééducation du langage écrit chez un enfant de CE2 présentant une dyslexie phonologique"
            },
            {
                "time": "11:00",
                "activity": "Séance auprès d'un adulte aphasique après un AVC pour restaurer l'évocation des mots"
            },
            {
                "time": "14:00",
                "activity": "Bilan initial complet de langage oral d'un petit garçon de 4 ans ne formulant pas de phrases"
            },
            {
                "time": "16:30",
                "activity": "Rééducation de la déglutition chez un patient parkinsonien en collaboration avec l'aidant"
            }
        ],
        "skills": {
            "technical": [
                "Linguistique, phonétique, phonologie et sciences du langage",
                "Neuropsychologie cognitive du langage et de la mémoire",
                "Physiologie ORL des cordes vocales et du carrefour aéro-digestif",
                "Passation et étalonnage des tests orthophoniques standardisés",
                "Techniques de communication alternative et augmentée (pictogrammes, tablettes)"
            ],
            "human": [
                "Écoute attentive, bienveillance et patience à toute épreuve",
                "Créativité ludique pour motiver les enfants à travers des jeux ciblés",
                "Capacité à redonner confiance à des personnes isolées par l'incapacité de parler",
                "Pédagogie pour guider les parents et enseignants sans culpabiliser"
            ],
            "tools": [
                "Batteries de tests orthophoniques normés (BALE, Isadys, etc.)",
                "Jeux éducatifs et matériel de manipulation articulatoire",
                "Miroir de rééducation et enregistreurs vocaux",
                "Applications spécialisées sur tablette tactile"
            ],
            "soft": [
                "Écoute attentive, bienveillance et patience à toute épreuve",
                "Créativité ludique pour motiver les enfants à travers des jeux ciblés",
                "Capacité à redonner confiance à des personnes isolées par l'incapacité de parler",
                "Pédagogie pour guider les parents et enseignants sans culpabiliser"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Baccalauréat général (spécialités littéraires ou scientifiques)",
                    "desc": "Excellente maîtrise du français et de la logique."
                },
                {
                    "step": "Concours / Sélection Parcoursup (Bac +1)",
                    "title": "Accès aux Centres de Formation Universitaire en Orthophonie (CFUO)",
                    "desc": "Sélection drastique sur dossier et épreuves orales."
                },
                {
                    "step": "Études universitaires (Bac +5)",
                    "title": "5 années en département d'orthophonie",
                    "desc": "Validation du Certificat de Capacité d'Orthophoniste (CCO) valant grade de Master."
                }
            ],
            "schools": [
                {
                    "name": "Centres de Formation Universitaire en Orthophonie (CFUO) des facultés de médecine en France (Paris, Lyon, Marseille, Lille)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "FMPOS / Instituts spécialisés en réadaptation — UCAD Dakar",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certificat de Capacité d'Orthophoniste (Grade Master)",
                "Numéro RPPS"
            ]
        },
        "career": {
            "sectors": [
                "Cabinet libéral",
                "Centres médico-psycho-pédagogiques (CMPP)",
                "Hôpitaux et rééducation"
            ],
            "employerTypes": [
                "Pratique libérale majoritaire",
                "Services hospitaliers de neurologie/ORL",
                "Instituts pour enfants déficients auditifs"
            ],
            "evolution": "Orthophoniste clinicien ➔ Orthophoniste spécialisé en neurologie ou bégaiement ➔ Maître de stage ➔ Chercheur en sciences de la réadaptation",
            "pros": "Reconnaissance affective immense des patients qui retrouvent la parole, indépendance complète en libéral, demande gigantesque (délais d'attente de plusieurs mois).",
            "cons": "Séances rapprochées de 30 minutes demandant une attention mentale constante toute la journée, listes d'attente parfois douloureuses à gérer."
        },
        "salary": "🇫🇷 France : 2 400 - 4 000 € net/mois en libéral (environ 2 000 - 3 200 € à l'hôpital) • 🇸🇳 Sénégal : 180 000 - 500 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Chez un patient victime d'un AVC ayant perdu l'usage de la parole (aphasie sévère), l'orthophoniste utilise parfois la mélodie et le chant (Thérapie Mélodique et Rythmée) pour lui permettre de chanter des phrases qu'il est incapable de prononcer normalement !",
            "pourquoi": "La musique et le chant mobilisent des circuits neuronaux situés dans l'hémisphère cérébral droit, contournant ainsi la lésion gauche de la parole."
        },
        "sources": [
            {
                "organization": "Studyrama",
                "title": "Fiche métier : Orthophoniste",
                "url": "https://www.studyrama.com/formations/fiches-metiers/sante/orthophoniste",
                "type": "metier"
            },
            {
                "organization": "Fédération Nationale des Orthophonistes (FNO)",
                "title": "La profession d'orthophoniste",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "soigner-aider",
            "comprendre-humain-societe",
            "lire-ecrire-litterature"
        ],
        "relatedJobSlugs": [
            "ergotherapeute",
            "psychomotricien",
            "psychologue-clinicien"
        ],
        "summary": "Spécialiste de la communication humaine, l'orthophoniste rééduque les troubles du langage oral et écrit (bégaiement, dyslexie), de la voix, de la déglutition et de la mémoire.",
        "description": "L'orthophoniste intervient à tous les âges de la vie sur prescription médicale. Chez l'enfant, il rééduque les retards de parole, bégaiements, dyslexies et dysorthographies. Chez l'adulte, il restaure la parole et la déglutition après un AVC (aphasie) ou une chirurgie de la gorge (larynx), et stimule les fonctions cognitives chez les personnes âgées atteintes de maladies neurodégénératives.",
        "studyLevel": "Bac +5 (Certificat de Capacité d'Orthophoniste - Grade Master)",
        "daily": {
            "morning": "Séance de rééducation de la voix chez une enseignante souffrant de nodules des cordes vocales • Rééducation du langage écrit chez un enfant de CE2 présentant une dyslexie phonologique • Séance auprès d'un adulte aphasique après un AVC pour restaurer l'évocation des mots",
            "afternoon": "Bilan initial complet de langage oral d'un petit garçon de 4 ans ne formulant pas de phrases • Rééducation de la déglutition chez un patient parkinsonien en collaboration avec l'aidant",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sante/orthophoniste"
    },
    {
        "id": "psychomotricien",
        "slug": "psychomotricien",
        "title": "Psychomotricien Diplômé d'État",
        "aliases": [
            "Thérapeute en psychomotricité",
            "Spécialiste du schéma corporel",
            "Psychomotricienne"
        ],
        "icon": "🤸",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "lettres-langues-sciences-humaines",
            "biologie-chimie"
        ],
        "domain": "Rééducation, Réadaptation & Autonomie",
        "domainId": "reeducation-readaptation",
        "subdomain": "Psychomotricité",
        "shortDescription": "Spécialiste du lien entre le corps et l'esprit, le psychomotricien rééduque les troubles du geste, de l'équilibre, de l'espace-temps et des émotions par le mouvement et le jeu.",
        "longDescription": "Le psychomotricien traite les troubles qui s'expriment à la fois sur le plan corporel et psychologique : maladresse motrice, hyperactivité (TDAH), troubles de l'orientation spatio-temporelle, tics, inhibition motrice ou dysgraphie. À travers le jeu corporel, la relaxation, la danse, le mime ou des parcours d'agilité, il aide le patient à se réconcilier avec son corps et à mieux réguler ses émotions.",
        "simpleDefinition": "Professionnel de santé qui aide les enfants et adultes maladroits, angoissés ou hyperactifs à mieux contrôler leur corps et leurs mouvements.",
        "level": "Bac +3 (Diplôme d'État de Psychomotricien)",
        "missions": [
            "Réaliser le bilan psychomoteur complet (tonus musculaire, schéma corporel, latéralité, repérage spatial, coordination motrice)",
            "Concevoir des séances de rééducation basées sur le jeu corporel, le rythme et le mouvement",
            "Aider les enfants avec TDAH ou autisme à canaliser leur agitation motrice et focaliser leur attention",
            "Accompagner les personnes âgées anxieuses face au risque de chute pour retrouver confiance en leur équilibre",
            "Pratiquer des séances de relaxation thérapeutique pour relâcher les tensions musculaires liées au stress"
        ],
        "workEnvironment": "Centres Médico-Psycho-Pédagogiques (CMPP), instituts médico-éducatifs (IME), services de pédopsychiatrie et gériatrie, cabinet libéral.",
        "typicalDay": [
            {
                "time": "09:00",
                "activity": "Parcours d'équilibre et de motricité globale pour un enfant de 6 ans dyspraxique"
            },
            {
                "time": "10:15",
                "activity": "Séance de rééducation de la motricité fine et de la tenue du stylo pour un écolier dysgraphique"
            },
            {
                "time": "11:30",
                "activity": "Atelier de relaxation corporelle pour un adolescent souffrant de phobie scolaire et de tics"
            },
            {
                "time": "14:00",
                "activity": "Séance en piscine thérapeutique (balnéothérapie) pour un jeune adulte avec infirmité motrice cérébrale"
            },
            {
                "time": "16:00",
                "activity": "Bilan psychomoteur initial d'un petit garçon suspecté de trouble du spectre de l'autisme"
            }
        ],
        "skills": {
            "technical": [
                "Passation et analyse des tests psychomoteurs étalonnés (EMG, BHK, MABC-2)",
                "Connaissance approfondie de la neurophysiologie motrice et du tonus",
                "Techniques de relaxation psychosomatique (Soubiran, Bergès)",
                "Pédagogie du jeu symbolique et de la motricité libre",
                "Approche snoezelen et stimulation sensorielle"
            ],
            "human": [
                "Patience, créativité ludique et expressivité corporelle",
                "Capacité à instaurer une relation de confiance sécurisante par le regard et la posture",
                "Sens aigu de l'observation des attitudes corporelles subtiles",
                "Non-jugement face à l'agitation ou au repli sur soi"
            ],
            "tools": [
                "Modules de motricité en mousse, poutres d'équilibre et ballons de Klein",
                "Tissus sensoriels, instruments de musique à percussion et cerceaux",
                "Miroirs d'auto-observation corporelle",
                "Tapis de sol épais et matériel de relaxation"
            ],
            "soft": [
                "Patience, créativité ludique et expressivité corporelle",
                "Capacité à instaurer une relation de confiance sécurisante par le regard et la posture",
                "Sens aigu de l'observation des attitudes corporelles subtiles",
                "Non-jugement face à l'agitation ou au repli sur soi"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Baccalauréat toutes séries",
                    "desc": "Goût pour le mouvement, le sport ou l'art."
                },
                {
                    "step": "Sélection Parcoursup / Concours (Bac +1)",
                    "title": "Accès aux Instituts de Formation en Psychomotricité (IFP)",
                    "desc": "Sélection sur dossier et épreuves orales."
                },
                {
                    "step": "Institut de Psychomotricité (Bac +3)",
                    "title": "3 années en IFP",
                    "desc": "Validation du Diplôme d'État de Psychomotricien."
                }
            ],
            "schools": [
                {
                    "name": "Instituts de Formation en Psychomotricité (IFP) en France (Paris ISRP, Lyon, Bordeaux, Toulouse)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Département de réadaptation — ENDSS / UCAD Dakar",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Diplôme d'État de Psychomotricien",
                "Numéro ADELI / RPPS"
            ]
        },
        "career": {
            "sectors": [
                "Secteur médico-social",
                "Pédopsychiatrie",
                "Gériatrie et cabinets libéraux"
            ],
            "employerTypes": [
                "Instituts Médico-Éducatifs (IME)",
                "Centres d'Action Médico-Sociale Précoce (CAMSP)",
                "Établissements pour personnes âgées"
            ],
            "evolution": "Psychomotricien salarié ➔ Installation en cabinet libéral ➔ Cadre de santé en rééducation ➔ Formateur en institut",
            "pros": "Pratique soignante vivante et corporelle, impact rapide sur le bien-être de l'enfant qui retrouve le plaisir de bouger, grande variété de médiations.",
            "cons": "Reconnaissance encore inégale selon les pays, actes non remboursés par la sécurité sociale en France sans demande d'entente préalable en libéral."
        },
        "salary": "🇫🇷 France : 1 850 - 3 200 € net/mois selon statut • 🇸🇳 Sénégal : 170 000 - 450 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Chez les personnes âgées souffrant de la 'peur de tomber' après une fracture, le psychomotricien travaille sur la sensation des pieds au sol et le relâchement musculaire, ce qui permet à 80% d'entre elles de remarcher sans canne.",
            "pourquoi": "La peur de chuter raidit les muscles et aggrave paradoxalement le risque de chute ; détendre le tonus corporel rétablit l'équilibre naturel."
        },
        "sources": [
            {
                "organization": "Studyrama",
                "title": "Fiche métier : Psychomotricien",
                "url": "https://www.studyrama.com/formations/fiches-metiers/sante/psychomotricien",
                "type": "metier"
            },
            {
                "organization": "Fédération Française des Psychomotriciens (FFP)",
                "title": "Qu'est-ce que la psychomotricité ?",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "soigner-aider",
            "comprendre-humain-societe",
            "comprendre-corps-humain"
        ],
        "relatedJobSlugs": [
            "ergotherapeute",
            "kinesitherapeute",
            "orthophoniste"
        ],
        "summary": "Spécialiste du lien entre le corps et l'esprit, le psychomotricien rééduque les troubles du geste, de l'équilibre, de l'espace-temps et des émotions par le mouvement et le jeu.",
        "description": "Le psychomotricien traite les troubles qui s'expriment à la fois sur le plan corporel et psychologique : maladresse motrice, hyperactivité (TDAH), troubles de l'orientation spatio-temporelle, tics, inhibition motrice ou dysgraphie. À travers le jeu corporel, la relaxation, la danse, le mime ou des parcours d'agilité, il aide le patient à se réconcilier avec son corps et à mieux réguler ses émotions.",
        "studyLevel": "Bac +3 (Diplôme d'État de Psychomotricien)",
        "daily": {
            "morning": "Parcours d'équilibre et de motricité globale pour un enfant de 6 ans dyspraxique • Séance de rééducation de la motricité fine et de la tenue du stylo pour un écolier dysgraphique • Atelier de relaxation corporelle pour un adolescent souffrant de phobie scolaire et de tics",
            "afternoon": "Séance en piscine thérapeutique (balnéothérapie) pour un jeune adulte avec infirmité motrice cérébrale • Bilan psychomoteur initial d'un petit garçon suspecté de trouble du spectre de l'autisme",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sante/psychomotricien"
    },
    {
        "id": "pedicure-podologue",
        "slug": "pedicure-podologue",
        "title": "Pédicure-Podologue Diplômé d'État",
        "aliases": [
            "Podologue",
            "Spécialiste du pied",
            "Podologiste du sport"
        ],
        "icon": "🦶",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "biologie-chimie"
        ],
        "domain": "Rééducation, Réadaptation & Autonomie",
        "domainId": "reeducation-readaptation",
        "subdomain": "Pédicurie-Podologie",
        "shortDescription": "Expert du pied et de la marche, le pédicure-podologue soigne les affections de la peau et des ongles (cors, ongles incarnés) et conçoit des semelles orthopédiques sur mesure.",
        "longDescription": "Le pédicure-podologue possède une double compétence médicale et biomécanique. En tant que pédicure, il traite les affections épidermiques et unguéales (durillons, mycoses, verrues, ongles incarnés) avec des instruments stériles de haute précision. En tant que podologue, il analyse la statique et la dynamique de la marche sur plateforme baropodométrique et conçoit des semelles orthopédiques (orthèses plantaires) pour corriger les défauts d'alignement et soulager les douleurs de dos, de hanche ou de genou.",
        "simpleDefinition": "Professionnel de santé qui soigne les douleurs aux pieds, traite les ongles abîmés et fabrique des semelles orthopédiques pour bien marcher.",
        "level": "Bac +3 (Diplôme d'État de Pédicure-Podologue - Grade Licence)",
        "missions": [
            "Diagnostiquer les affections du pied et analyser les troubles de la posture et de la marche",
            "Pratiquer les soins de pédicurie médicale (ablation des cors, traitement des ongles incarnés, soins des pieds diabétiques à risque)",
            "Réaliser un examen podologique complet sur plateforme de pression électronique",
            "Concevoir et fabriquer sur mesure des semelles orthopédiques (thermoformées ou fraisées en 3D)",
            "Prescrire les pansements et topiques médicamenteux adaptés aux affections podologiques"
        ],
        "workEnvironment": "Cabinet libéral (95% des praticiens), cliniques privées, services de diabétologie hospitaliers, clubs de sport.",
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Soin de pédicurie complet pour une personne diabétique : vérification de la sensibilité et soins préventifs"
            },
            {
                "time": "09:30",
                "activity": "Traitement d'un ongle incarné douloureux avec pose d'une languette d'orthonyxie correctrice"
            },
            {
                "time": "11:00",
                "activity": "Bilan postural et podologique d'un coureur de marathon souffrant d'une tendinopathie d'Achille"
            },
            {
                "time": "14:00",
                "activity": "Atelier technique : thermoformage et meulage de semelles orthopédiques sur mesure"
            },
            {
                "time": "16:30",
                "activity": "Livraison et essayage dynamique des semelles dans les chaussures du patient"
            }
        ],
        "skills": {
            "technical": [
                "Sémiologie cutanée et unguéale du pied",
                "Biomécanique de la marche, analyse de la foulée et stabilométrie",
                "Conception d'orthèses plantaires (semelles classiques, thermoformées, 3D)",
                "Orthonyxie (correction de courbure unguéale) et onychoplastie",
                "Soins spécialisés du pied diabétique à haut risque d'amputation"
            ],
            "human": [
                "Minutie, précision chirurgicale du geste manuel",
                "Capacité d'écoute et douceur pour soulager immédiatement la douleur aiguë",
                "Sens de l'accueil et relation de proximité avec une patientèle fidèle",
                "Rigueur d'asepsie pour éviter toute complication infectieuse"
            ],
            "tools": [
                "Turbine et micromoteur de pédicurie avec spray",
                "Plateforme baropodométrique de capteurs de pression",
                "Touret d'atelier pour le meulage et ponçage des semelles",
                "Four de thermoformage sous vide pour résines et mousses EVA"
            ],
            "soft": [
                "Minutie, précision chirurgicale du geste manuel",
                "Capacité d'écoute et douceur pour soulager immédiatement la douleur aiguë",
                "Sens de l'accueil et relation de proximité avec une patientèle fidèle",
                "Rigueur d'asepsie pour éviter toute complication infectieuse"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Baccalauréat général ou technologique",
                    "desc": "Bases en biologie et physique."
                },
                {
                    "step": "Sélection Parcoursup (Bac +1)",
                    "title": "Accès aux Instituts de Formation en Pédicurie-Podologie (IFPP)",
                    "desc": "Sélection sur dossier Parcoursup."
                },
                {
                    "step": "Institut de Podologie (Bac +3)",
                    "title": "3 années d'études en IFPP",
                    "desc": "Obtention du Diplôme d'État de Pédicure-Podologue conférant le grade de Licence."
                }
            ],
            "schools": [
                {
                    "name": "Instituts de Formation en Pédicurie-Podologie (IFPP) en France (Paris, Lille, Bordeaux, Rennes, Marseille)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Écoles de formation aux métiers paramédicaux et de rééducation — Dakar",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Diplôme d'État de Pédicure-Podologue",
                "Inscription obligatoire à l'Ordre National des Pédicures-Podologues (ONPP)"
            ]
        },
        "career": {
            "sectors": [
                "Cabinet libéral prépondérant",
                "Podologie du sport",
                "Services hospitaliers de diabétologie"
            ],
            "employerTypes": [
                "Cabinets libéraux privés",
                "Réseaux de santé diabète",
                "Fédérations sportives"
            ],
            "evolution": "Pédicure-podologue collaborateur ➔ Titulaire de cabinet ➔ Spécialisation en podologie du sport ➔ Enseignant en institut",
            "pros": "Indépendance professionnelle complète, liberté de prescription des topiques podologiques, soulagement quasi instantané de la douleur du patient, création manuelle de semelles valorisante.",
            "cons": "Coût d'installation initial pour équiper la salle de soins et l'atelier de semelles, sédentarité en cabinet."
        },
        "salary": "🇫🇷 France : 2 200 - 4 500 € net/mois en libéral • 🇸🇳 Sénégal : 180 000 - 550 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Chez les personnes atteintes de diabète sévère, la perte de sensibilité nerveuse aux pieds empêche de ressentir les blessures. La surveillance régulière par un pédicure-podologue permet de prévenir jusqu'à 80% des amputations !",
            "pourquoi": "Un simple petit frottement de chaussure non détecté peut dégénérer en plaie ouverte profonde sans intervention experte précoce."
        },
        "sources": [
            {
                "organization": "Studyrama",
                "title": "Fiche métier : Pédicure-podologue",
                "url": "https://www.studyrama.com/formations/fiches-metiers/sante/pedicure-podologue",
                "type": "metier"
            },
            {
                "organization": "Ordre National des Pédicures-Podologues (ONPP)",
                "title": "La profession de pédicure-podologue",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "soigner-aider",
            "construire-fabriquer",
            "comprendre-corps-humain"
        ],
        "relatedJobSlugs": [
            "kinesitherapeute",
            "ergotherapeute",
            "medecin-generaliste"
        ],
        "summary": "Expert du pied et de la marche, le pédicure-podologue soigne les affections de la peau et des ongles (cors, ongles incarnés) et conçoit des semelles orthopédiques sur mesure.",
        "description": "Le pédicure-podologue possède une double compétence médicale et biomécanique. En tant que pédicure, il traite les affections épidermiques et unguéales (durillons, mycoses, verrues, ongles incarnés) avec des instruments stériles de haute précision. En tant que podologue, il analyse la statique et la dynamique de la marche sur plateforme baropodométrique et conçoit des semelles orthopédiques (orthèses plantaires) pour corriger les défauts d'alignement et soulager les douleurs de dos, de hanche ou de genou.",
        "studyLevel": "Bac +3 (Diplôme d'État de Pédicure-Podologue - Grade Licence)",
        "daily": {
            "morning": "Soin de pédicurie complet pour une personne diabétique : vérification de la sensibilité et soins préventifs • Traitement d'un ongle incarné douloureux avec pose d'une languette d'orthonyxie correctrice • Bilan postural et podologique d'un coureur de marathon souffrant d'une tendinopathie d'Achille",
            "afternoon": "Atelier technique : thermoformage et meulage de semelles orthopédiques sur mesure • Livraison et essayage dynamique des semelles dans les chaussures du patient",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sante/pedicure-podologue"
    },
    {
        "id": "orthoptiste",
        "slug": "orthoptiste",
        "title": "Orthoptiste Diplômé d'État",
        "aliases": [
            "Rééducateur de la vision",
            "Spécialiste de la vision binoculaire",
            "Orthoptiste clinicien"
        ],
        "icon": "👁️",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "biologie-chimie"
        ],
        "domain": "Rééducation, Réadaptation & Autonomie",
        "domainId": "reeducation-readaptation",
        "subdomain": "Orthoptie",
        "shortDescription": "Kinésithérapeute des yeux, l'orthoptiste dépiste, explore et rééduque les anomalies de la vision binoculaire, les strabismes, la fatigue visuelle sur écran et la basse vision.",
        "longDescription": "L'orthoptiste est l'allié incontournable de l'ophtalmologiste. Sur prescription médicale, il évalue l'acuité visuelle, explore le champ visuel, réalise des bilans de strabisme chez les bébés, rééduque la convergence oculaire pour éliminer les maux de tête chroniques et prend en charge les personnes malvoyantes (DMLA, glaucome) pour leur réapprendre à utiliser leur vision résiduelle.",
        "simpleDefinition": "Professionnel de santé qui fait faire des exercices aux yeux pour soigner le strabisme, la fatigue visuelle et les problèmes de vision des deux yeux.",
        "level": "Bac +3 (Certificat de Capacité d'Orthoptiste - Grade Licence)",
        "missions": [
            "Réaliser des bilans orthoptiques complets (motilité oculaire, vision stéréoscopique 3D, acuité visuelle)",
            "Mener des séances de rééducation de la convergence pour soulager céphalées et fatigue sur écran",
            "Dépister et traiter l'amblyopie et le strabisme chez le jeune enfant par occlusion thérapeutique",
            "Réaliser des examens d'exploration instrumentale ophtalmologique (champ visuel, rétinographie, OCT, tonométrie)",
            "Accompagner la réadaptation visuelle des personnes atteintes de basse vision (DMLA, rétinopathie)"
        ],
        "workEnvironment": "Cabinet libéral individuel ou de groupe, cabinets d'ophtalmologie en collaboration directe, services hospitaliers ophtalmiques.",
        "typicalDay": [
            {
                "time": "08:45",
                "activity": "Bilan de dépistage visuel chez un enfant de 3 ans orienté par la PMI pour suspicion de strabisme"
            },
            {
                "time": "10:00",
                "activity": "Séance de rééducation de la convergence oculaire chez un jeune ingénieur sur écran souffrant de maux de tête"
            },
            {
                "time": "11:30",
                "activity": "Réalisation d'un champ visuel automatisé de Humphrey pour surveillance de glaucome"
            },
            {
                "time": "14:00",
                "activity": "Prise en charge en basse vision d'une dame de 75 ans atteinte de DMLA avec apprentissage d'une loupe électronique"
            },
            {
                "time": "16:00",
                "activity": "Consultation conjointe avec l'ophtalmologiste pour réfraction et adaptation de prismes correcteurs"
            }
        ],
        "skills": {
            "technical": [
                "Physiologie optique et anatomie neuromusculaire oculaire",
                "Techniques de rééducation de la vision binoculaire et prismation",
                "Maîtrise des appareils d'exploration ophtalmique (OCT, pachymétrie, tonométrie)",
                "Dépistage précoce des troubles réfractifs pédiatriques",
                "Basse vision et adaptation des aides optiques grossissantes"
            ],
            "human": [
                "Patience et sens pédagogique pour captiver l'attention visuelle des tout-petits",
                "Précision et minutie dans les mesures angulaires oculaires",
                "Capacité à encourager les patients dans la régularité des exercices",
                "Bonne communication collaborative avec les ophtalmologistes"
            ],
            "tools": [
                "Synoptophore (appareil d'exploration de la vision binoculaire)",
                "Règle de Krimsky et barres de prismes",
                "Coupole de champ visuel automatisé (Humphrey / Octopus)",
                "Rétinographe non mydriatique et tomographe OCT"
            ],
            "soft": [
                "Patience et sens pédagogique pour captiver l'attention visuelle des tout-petits",
                "Précision et minutie dans les mesures angulaires oculaires",
                "Capacité à encourager les patients dans la régularité des exercices",
                "Bonne communication collaborative avec les ophtalmologistes"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Baccalauréat scientifique ou général",
                    "desc": "Bases en optique physique et biologie."
                },
                {
                    "step": "Sélection Parcoursup (Bac +1)",
                    "title": "Sélection en département d'orthoptie des facultés de médecine",
                    "desc": "Dossier académique et entretien de motivation."
                },
                {
                    "step": "Formation universitaire (Bac +3)",
                    "title": "3 années en faculté de médecine",
                    "desc": "Validation du Certificat de Capacité d'Orthoptiste (grade de Licence)."
                }
            ],
            "schools": [
                {
                    "name": "Départements d'Orthoptie des facultés de médecine françaises (Paris Cité, Lyon, Marseille, Bordeaux, Lille)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "FMPOS / Instituts spécialisés en santé oculaire — UCAD Dakar",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Certificat de Capacité d'Orthoptiste",
                "Numéro RPPS"
            ]
        },
        "career": {
            "sectors": [
                "Ophtalmologie libérale et hospitalière",
                "Basse vision",
                "Centres de rééducation sensorielle"
            ],
            "employerTypes": [
                "Cabinets libéraux privés",
                "Centres d'ophtalmologie pluridisciplinaires",
                "Hôpitaux et fondations ophtalmiques"
            ],
            "evolution": "Orthoptiste collaborateur ➔ Orthoptiste titulaire de cabinet ➔ Orthoptiste expert en chirurgie réfractive ➔ Enseignant en département d'orthoptie",
            "pros": "Excellente insertion professionnelle (pénurie d'ophtalmologistes valorisant le rôle de l'orthoptiste), travail technique et varié, horaires réguliers sans gardes.",
            "cons": "Dépendance initiale à la prescription médicale d'un ophtalmologiste, travail minutieux devant des écrans de mesure."
        },
        "salary": "🇫🇷 France : 2 000 - 3 800 € net/mois selon statut • 🇸🇳 Sénégal : 180 000 - 450 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Si le strabisme d'un enfant n'est pas pris en charge par un orthoptiste avant l'âge de 6 ou 7 ans, le cerveau 'éteint' définitivement l'image de l'œil dévié pour éviter de voir double, rendant cet œil irrémédiablement aveugle (amblyopie fonctionnelle).",
            "pourquoi": "La plasticité cérébrale visuelle se ferme après la petite enfance ; l'intervention précoce de l'orthoptiste sauve la vue de cet œil."
        },
        "sources": [
            {
                "organization": "Studyrama",
                "title": "Fiche métier : Orthoptiste",
                "url": "https://www.studyrama.com/formations/fiches-metiers/sante/orthoptiste",
                "type": "metier"
            },
            {
                "organization": "Syndicat National des Orthoptistes (SNAO)",
                "title": "Présentation du métier d'orthoptiste",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "soigner-aider",
            "comprendre-corps-humain",
            "resoudre-problemes"
        ],
        "relatedJobSlugs": [
            "chirurgien",
            "kinesitherapeute",
            "ergotherapeute"
        ],
        "summary": "Kinésithérapeute des yeux, l'orthoptiste dépiste, explore et rééduque les anomalies de la vision binoculaire, les strabismes, la fatigue visuelle sur écran et la basse vision.",
        "description": "L'orthoptiste est l'allié incontournable de l'ophtalmologiste. Sur prescription médicale, il évalue l'acuité visuelle, explore le champ visuel, réalise des bilans de strabisme chez les bébés, rééduque la convergence oculaire pour éliminer les maux de tête chroniques et prend en charge les personnes malvoyantes (DMLA, glaucome) pour leur réapprendre à utiliser leur vision résiduelle.",
        "studyLevel": "Bac +3 (Certificat de Capacité d'Orthoptiste - Grade Licence)",
        "daily": {
            "morning": "Bilan de dépistage visuel chez un enfant de 3 ans orienté par la PMI pour suspicion de strabisme • Séance de rééducation de la convergence oculaire chez un jeune ingénieur sur écran souffrant de maux de tête • Réalisation d'un champ visuel automatisé de Humphrey pour surveillance de glaucome",
            "afternoon": "Prise en charge en basse vision d'une dame de 75 ans atteinte de DMLA avec apprentissage d'une loupe électronique • Consultation conjointe avec l'ophtalmologiste pour réfraction et adaptation de prismes correcteurs",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sante/orthoptiste"
    },
    {
        "id": "ambulancier",
        "slug": "ambulancier",
        "title": "Ambulancier / Ambulancière Diplômé(e) d'État",
        "aliases": [
            "Ambulancier SMUR",
            "Conducteur ambulancier",
            "Technicien de transport sanitaire"
        ],
        "icon": "🚑",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "transport-logistique",
            "biologie-chimie"
        ],
        "domain": "Urgences, Secours Médical & Régulation",
        "domainId": "urgences-secours",
        "subdomain": "Ambulance & Transport sanitaire",
        "shortDescription": "Maillon vital du secours d'urgence et du transport sanitaire, l'ambulancier transporte les blessés et malades, assure la surveillance clinique et pratique les gestes d'urgence.",
        "longDescription": "L'ambulancier diplômé d'État (ADE) assure le transport sanitaire d'urgence ou programmé des patients dans des véhicules médicalisés spécialement équipés. Qu'il intervienne sur demande du SAMU pour une détresse aiguë à domicile ou sur la route, ou qu'il conduise l'Unité Mobile Hospitalière du SMUR aux côtés d'un médecin urgentiste, il allie conduite rapide et ultra-sécurisée, gestes de secours d'urgence (massage cardiaque, arrêt d'hémorragie, pose de collier cervical) et réconfort humain.",
        "simpleDefinition": "Professionnel de santé qui conduit l'ambulance à toute vitesse en toute sécurité et prodigue les premiers soins aux blessés et malades.",
        "level": "Diplôme d'État d'Ambulancier (DEA - Formation en institut agréé)",
        "missions": [
            "Conduire le véhicule sanitaire d'urgence rapidement et en toute sécurité en respectant le confort du patient",
            "Prendre en charge le patient, l'installer et pratiquer les gestes de premiers secours d'urgence (défibrillation, oxygénothérapie)",
            "Surveiller en continu l'état clinique et les constantes vitales pendant le trajet jusqu'à l'hôpital",
            "Transmettre avec précision le bilan de santé au médecin régulateur du SAMU (centre 15)",
            "Désinfecter scrupuleusement la cellule sanitaire et contrôler les équipements médicaux de bord"
        ],
        "workEnvironment": "Entreprises privées de transport sanitaire, services mobiles d'urgence et de réanimation (SMUR), SAMU, centres hospitaliers.",
        "typicalDay": [
            {
                "time": "07:30",
                "activity": "Prise de service, vérification des niveaux d'oxygène, du défibrillateur et de la propreté de l'ambulance"
            },
            {
                "time": "08:15",
                "activity": "Départ en mission d'urgence déclenchée par le SAMU 15 : malaise cardiaque à domicile"
            },
            {
                "time": "09:00",
                "activity": "Prise en charge du patient, oxygénation, monitoring et transport sécurisé vers le déchocage du CHU"
            },
            {
                "time": "11:30",
                "activity": "Transport programmé couché d'un patient dialysé vers son centre de néphrologie"
            },
            {
                "time": "15:00",
                "activity": "Intervention SMUR avec médecin urgentiste et infirmier sur un accident de la route"
            }
        ],
        "skills": {
            "technical": [
                "Gestes d'urgence médicale et réanimation cardio-pulmonaire avec DAE",
                "Conduite rapide en sécurité et maîtrise des règles de priorité routière d'urgence",
                "Maniement du matériel d'immobilisation de traumatologie (matelas coquille, plan dur)",
                "Normes d'hygiène et de désinfection des véhicules sanitaires (bio-nettoyage)",
                "Transmissions radiotéléphoniques d'urgence avec le SAMU"
            ],
            "human": [
                "Sang-froid exemplaire et résistance au stress en situation de crise",
                "Sens de l'écoute et psychologie pour apaiser un patient paniqué",
                "Bonne condition physique pour le brancardage et la manutention",
                "Esprit d'équipe avec le binôme ambulancier et les équipes médicales"
            ],
            "tools": [
                "Défibrillateur Automatisé Externe (DAE)",
                "Brancard auto-chargeur et chaise de transport pliable",
                "Bouteilles d'oxygène médical de transport et débitmètres",
                "Radio de communication et GPS médicalisé d'intervention"
            ],
            "soft": [
                "Sang-froid exemplaire et résistance au stress en situation de crise",
                "Sens de l'écoute et psychologie pour apaiser un patient paniqué",
                "Bonne condition physique pour le brancardage et la manutention",
                "Esprit d'équipe avec le binôme ambulancier et les équipes médicales"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Prérequis",
                    "title": "Permis de conduire B valide (plus de 3 ans) et attestation préfectorale",
                    "desc": "Casier judiciaire vierge et vaccins obligatoires."
                },
                {
                    "step": "Formation en Institut (6 mois)",
                    "title": "Institut de Formation d'Ambulanciers (IFA)",
                    "desc": "Formation alternant cours théoriques (secourisme, hygiène, législation) et stages cliniques en SMUR, urgences et entreprise sanitaire."
                }
            ],
            "schools": [
                {
                    "name": "Instituts de Formation d'Ambulanciers (IFA) en France (Croix-Rouge, Ordre de Malte, CHU)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centres de formation au secourisme et transport d'urgence — SAMU National du Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Diplôme d'État d'Ambulancier (DEA)",
                "AFGSU Niveau 2"
            ]
        },
        "career": {
            "sectors": [
                "Urgences préhospitalières",
                "Transport sanitaire privé",
                "Hôpitaux et SMUR"
            ],
            "employerTypes": [
                "Sociétés privées d'ambulances",
                "Centres hospitaliers publics (conducteurs SMUR)",
                "Organismes de rapatriement"
            ],
            "evolution": "Ambulancier salarié ➔ Ambulancier chef d'équipe ➔ Régulateur en entreprise de transport sanitaire ➔ Créateur d'entreprise d'ambulances",
            "pros": "Métier d'action utile et solidaire, adrénaline des interventions d'urgence, autonomie sur la route, contact humain fort.",
            "cons": "Horaires décalés, travail de nuit, week-ends, manutention fréquente de charges lourdes (patients dans les escaliers)."
        },
        "salary": "🇫🇷 France : 1 700 - 2 500 € net/mois (avec primes de nuit et gardes) • 🇸🇳 Sénégal : 120 000 - 350 000 FCFA net/mois",
        "saviezVous": {
            "fait": "En intervention d'urgence, un bon ambulancier ne cherche pas simplement à rouler le plus vite possible : il pratique une 'conduite coulée' ultra-fluide pour éviter que les secousses n'aggravent l'hémorragie ou les lésions rachidiennes du patient à l'arrière !",
            "pourquoi": "Les accélérations et freinages brutaux perturbent gravement la pression artérielle d'un patient en état de choc."
        },
        "sources": [
            {
                "organization": "Studyrama",
                "title": "Fiche métier : Ambulancier",
                "url": "https://www.studyrama.com/formations/fiches-metiers/sante/ambulancier",
                "type": "metier"
            },
            {
                "organization": "Fédération Nationale des Ambulanciers Privés (FNAP)",
                "title": "Le rôle de l'ambulancier dans l'urgence",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "urgences-secours",
            "soigner-aider",
            "proteger-defendre"
        ],
        "relatedJobSlugs": [
            "assistant-regulation-medicale",
            "medecin-urgentiste",
            "infirmier-diplome-etat"
        ],
        "summary": "Maillon vital du secours d'urgence et du transport sanitaire, l'ambulancier transporte les blessés et malades, assure la surveillance clinique et pratique les gestes d'urgence.",
        "description": "L'ambulancier diplômé d'État (ADE) assure le transport sanitaire d'urgence ou programmé des patients dans des véhicules médicalisés spécialement équipés. Qu'il intervienne sur demande du SAMU pour une détresse aiguë à domicile ou sur la route, ou qu'il conduise l'Unité Mobile Hospitalière du SMUR aux côtés d'un médecin urgentiste, il allie conduite rapide et ultra-sécurisée, gestes de secours d'urgence (massage cardiaque, arrêt d'hémorragie, pose de collier cervical) et réconfort humain.",
        "studyLevel": "Diplôme d'État d'Ambulancier (DEA - Formation en institut agréé)",
        "daily": {
            "morning": "Prise de service, vérification des niveaux d'oxygène, du défibrillateur et de la propreté de l'ambulance • Départ en mission d'urgence déclenchée par le SAMU 15 : malaise cardiaque à domicile • Prise en charge du patient, oxygénation, monitoring et transport sécurisé vers le déchocage du CHU • Transport programmé couché d'un patient dialysé vers son centre de néphrologie",
            "afternoon": "Intervention SMUR avec médecin urgentiste et infirmier sur un accident de la route",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sante/ambulancier"
    },
    {
        "id": "assistant-regulation-medicale",
        "slug": "assistant-regulation-medicale",
        "title": "Assistant / Assistante de Régulation Médicale (ARM)",
        "aliases": [
            "ARM",
            "Opérateur SAMU",
            "Permanencier d'aide médicale urgente"
        ],
        "icon": "🎧",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "numerique-ia",
            "biologie-chimie"
        ],
        "domain": "Urgences, Secours Médical & Régulation",
        "domainId": "urgences-secours",
        "subdomain": "Régulation médicale (SAMU)",
        "shortDescription": "Première voix entendue au téléphone lors d'un appel au SAMU (le 15), l'ARM décroche en quelques secondes, localise la détresse, évalue la gravité et oriente vers le médecin régulateur.",
        "longDescription": "L'Assistant de Régulation Médicale (ARM) est le pivot invisible de la chaîne des secours. Installé dans la salle de régulation du SAMU devant plusieurs écrans, il réceptionne les appels d'urgence vitale, géolocalise précisément l'appelant en détresse, pose les questions clés pour discerner l'urgence absolue de la simple consultation, transmet le dossier au médecin régulateur et déclenche les moyens de secours adaptés (SMUR, pompiers, ambulance). Il peut également guider au téléphone les gestes de survie (massage cardiaque) en attendant l'arrivée des secours.",
        "simpleDefinition": "Professionnel qui décroche les appels d'urgence au numéro 15 (SAMU), calme les appelants en détresse et envoie les ambulances.",
        "level": "Bac à Bac +1 (Diplôme d'ARM - Formation 1 an en Centre de Formation d'ARM)",
        "missions": [
            "Réceptionner les appels d'aide médicale urgente sans délai dans un calme absolu",
            "Localiser précisément l'adresse de l'événement et identifier l'identité et l'âge du patient",
            "Poser les questions protocolisées pour identifier immédiatement une détresse vitale (arrêt respiratoire, hémorragie, coma)",
            "Guider l'appelant dans les gestes qui sauvent (compressions thoraciques, position latérale de sécurité) en direct au téléphone",
            "Transmettre immédiatement le dossier numérique au médecin régulateur et dispatcher les moyens de secours ordonnés (SMUR, ambulance)"
        ],
        "workEnvironment": "Salle de régulation des urgences du SAMU (Centre 15 / Centre 112) en milieu hospitalier.",
        "typicalDay": [
            {
                "time": "07:00",
                "activity": "Prise de poste au centre SAMU, connexion au poste de télécommunication et revue des moyens mobiles disponibles"
            },
            {
                "time": "08:15",
                "activity": "Décroché d'un appel angoissé : guidage téléphonique d'un père pour pratiquer la réanimation sur son enfant noyé"
            },
            {
                "time": "09:30",
                "activity": "Coordination avec les pompiers pour l'envoi simultané d'un VSAV et d'une équipe SMUR sur un carambolage"
            },
            {
                "time": "12:00",
                "activity": "Gestion des appels de médecine générale et orientation vers les médecins régulateurs libéraux"
            },
            {
                "time": "15:00",
                "activity": "Débriefing psychologique d'équipe suite à un appel pour urgence pédiatrique complexe"
            }
        ],
        "skills": {
            "technical": [
                "Techniques d'écoute active et de questionnement ciblé d'urgence",
                "Géolocalisation informatique avancée et cartographie d'urgence (SIG)",
                "Protocoles de régulation médicale et critères de gravité vitale",
                "Guidage téléphonique des gestes de réanimation cardio-pulmonaire",
                "Utilisation des systèmes informatiques de gestion des appels d'urgence (SGAU)"
            ],
            "human": [
                "Maîtrise absolue de ses émotions face à la panique ou aux cris de l'appelant",
                "Capacité d'écoute et autorité calme pour obtenir les informations vitales",
                "Sens aigu des priorités et rapidité d'exécution",
                "Résistance au stress et solidarité d'équipe"
            ],
            "tools": [
                "Casque téléphonique professionnel avec double écoute",
                "Système informatique de gestion des appels d'urgence (logiciel SAMU)",
                "Cartographie numérique de géolocalisation des flottes ambulancières",
                "Bases de données d'adresses et de télé-défibrillation citoyenne"
            ],
            "soft": [
                "Maîtrise absolue de ses émotions face à la panique ou aux cris de l'appelant",
                "Capacité d'écoute et autorité calme pour obtenir les informations vitales",
                "Sens aigu des priorités et rapidité d'exécution",
                "Résistance au stress et solidarité d'équipe"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Prérequis",
                    "title": "Baccalauréat toutes séries",
                    "desc": "Sélection sur dossier, tests psychotechniques et entretien oral."
                },
                {
                    "step": "Formation certifiante (1 an)",
                    "title": "Centres de Formation d'Assistants de Régulation Médicale (CFARM)",
                    "desc": "10 mois alternant enseignements théoriques médicaux/téléphoniques et stages pratiques en SAMU, SMUR et pompiers."
                }
            ],
            "schools": [
                {
                    "name": "Centres de Formation d'ARM (CFARM) agréés en France adossés aux CHU (Paris, Lyon, Nancy, Marseille)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Centre de Régulation du SAMU National du Sénégal (Dakar)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Diplôme d'Assistant de Régulation Médicale (Certifié niveau 4/5)",
                "AFGSU Niveau 2"
            ]
        },
        "career": {
            "sectors": [
                "Urgences hospitalières",
                "Sécurité civile et secours publics",
                "Centres d'appels d'urgence"
            ],
            "employerTypes": [
                "SAMU hospitaliers",
                "Services départementaux d'incendie et de secours (SDIS / 18-112)",
                "Plateformes communes de secours"
            ],
            "evolution": "ARM titulaire ➔ ARM superviseur de salle ➔ Cadre d'encadrement en régulation médicale ➔ Formateur en CFARM",
            "pros": "Chaque appel décroché peut sauver une vie humaine, rôle fondamental de sentinelle de santé, solidarité d'équipe exemplaire.",
            "cons": "Charge émotionnelle très lourde (appels dramatiques en direct), travail 24h/24 en gardes de 12 heures, sédentarité sur écran."
        },
        "salary": "🇫🇷 France : 1 800 - 2 800 € net/mois selon ancienneté et primes de gardes • 🇸🇳 Sénégal : 150 000 - 380 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Lors d'un arrêt cardiaque à domicile, chaque minute perdue avant le début du massage réduit les chances de survie de 10%. Grâce au guidage téléphonique vocal de l'ARM qui rythme les compressions à la seconde ('1, 2, 3, 4'), le taux de survie est multiplié par trois !",
            "pourquoi": "L'ARM transforme l'appelant paniqué en premier maillon actif de la réanimation avant l'arrivée du SMUR."
        },
        "sources": [
            {
                "organization": "Studyrama",
                "title": "Fiche métier : Assistant de régulation médicale",
                "url": "https://www.studyrama.com/formations/fiches-metiers/sante/assistant-de-regulation-medicale",
                "type": "metier"
            },
            {
                "organization": "Association Française des Assistants de Régulation Médicale (AFARM)",
                "title": "Le métier d'ARM au SAMU",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "urgences-secours",
            "soigner-aider",
            "technologie-code"
        ],
        "relatedJobSlugs": [
            "ambulancier",
            "medecin-urgentiste",
            "secretaire-medical"
        ],
        "summary": "Première voix entendue au téléphone lors d'un appel au SAMU (le 15), l'ARM décroche en quelques secondes, localise la détresse, évalue la gravité et oriente vers le médecin régulateur.",
        "description": "L'Assistant de Régulation Médicale (ARM) est le pivot invisible de la chaîne des secours. Installé dans la salle de régulation du SAMU devant plusieurs écrans, il réceptionne les appels d'urgence vitale, géolocalise précisément l'appelant en détresse, pose les questions clés pour discerner l'urgence absolue de la simple consultation, transmet le dossier au médecin régulateur et déclenche les moyens de secours adaptés (SMUR, pompiers, ambulance). Il peut également guider au téléphone les gestes de survie (massage cardiaque) en attendant l'arrivée des secours.",
        "studyLevel": "Bac à Bac +1 (Diplôme d'ARM - Formation 1 an en Centre de Formation d'ARM)",
        "daily": {
            "morning": "Prise de poste au centre SAMU, connexion au poste de télécommunication et revue des moyens mobiles disponibles • Décroché d'un appel angoissé : guidage téléphonique d'un père pour pratiquer la réanimation sur son enfant noyé • Coordination avec les pompiers pour l'envoi simultané d'un VSAV et d'une équipe SMUR sur un carambolage • Gestion des appels de médecine générale et orientation vers les médecins régulateurs libéraux",
            "afternoon": "Débriefing psychologique d'équipe suite à un appel pour urgence pédiatrique complexe",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sante/assistant-de-regulation-medicale"
    },
    {
        "id": "biologiste-medical",
        "slug": "biologiste-medical",
        "title": "Biologiste Médical / Directeur de Laboratoire de Biologie Médicale",
        "aliases": [
            "Médecin biologiste",
            "Pharmacien biologiste",
            "Directeur de laboratoire d'analyses médicales"
        ],
        "icon": "🔬",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "biologie-chimie"
        ],
        "domain": "Biologie Médicale & Diagnostics de Laboratoire",
        "domainId": "laboratoires-medicaux",
        "subdomain": "Biochimie clinique",
        "shortDescription": "Médecin ou pharmacien spécialisé, le biologiste médical valide et interprète les analyses biologiques indispensables au diagnostic, au dépistage et au suivi des traitements.",
        "longDescription": "Le biologiste médical dirige le laboratoire d'analyses de biologie médicale (LBM), en ville ou à l'hôpital. Docteur en médecine ou en pharmacie ayant réalisé un internat de 4 ans en biologie médicale, il est le garant de la fiabilité des examens de sang, d'urine et de tissus (hématologie, bactériologie, virologie, biochimie, génétique). Il valide médicalement les résultats, appelle les prescripteurs en cas d'anomalie critique vitale et participe à la décision thérapeutique.",
        "simpleDefinition": "Médecin ou pharmacien spécialiste qui dirige le laboratoire d'analyses, valide les prises de sang et explique les résultats aux docteurs.",
        "level": "Bac +9 à Bac +10 (DES de Biologie Médicale)",
        "missions": [
            "Superviser l'ensemble de la chaîne analytique du laboratoire dans le respect de la norme ISO 15189",
            "Valider biologiquement et médicalement les résultats d'analyses (hématologie, biochimie, immuno-sérologie)",
            "Alerter sans délai les cliniciens en cas de résultat vital critique (anémie sévère, troponine élevée, bactériémie)",
            "Conseiller les médecins prescripteurs sur le choix des examens pertinents et l'interprétation des profils complexes",
            "Piloter la démarche qualité, la métrologie des automates et le management des techniciens de laboratoire"
        ],
        "workEnvironment": "Laboratoires de biologie médicale privés (polyvalents ou spécialisés), laboratoires hospitaliers de CHU/CHR, centres de lutte contre le cancer.",
        "typicalDay": [
            {
                "time": "08:00",
                "activity": "Contrôle des calibrations et validation des contrôles de qualité internes sur les automates de biochimie"
            },
            {
                "time": "09:30",
                "activity": "Validation médicale des dossiers d'analyses et corrélation avec les renseignements cliniques"
            },
            {
                "time": "11:30",
                "activity": "Appel d'urgence à un médecin généraliste pour une hypokaliémie sévère imposant une hospitalisation immédiate"
            },
            {
                "time": "14:00",
                "activity": "Lecture au microscope de frottis sanguins suspects pour identification d'un profil leucémique"
            },
            {
                "time": "16:30",
                "activity": "Réunion du comité qualité et validation des procédures de traçabilité des réactifs chimiques"
            }
        ],
        "skills": {
            "technical": [
                "Physiopathologie humaine, biochimie clinique, hématologie et hémostase",
                "Microbiologie médicale, virologie et interprétation d'antibiogrammes",
                "Norme qualité ISO 15189 des laboratoires de biologie médicale",
                "Biologie moléculaire, PCR en temps réel et cytométrie en flux",
                "Gestion des alertes biologiques vitales et pharmacocinétique"
            ],
            "human": [
                "Sens aigu de la rigueur scientifique et de la responsabilité médicale",
                "Aisance relationnelle pour dialoguer avec les médecins prescripteurs",
                "Leadership managérial pour encadrer techniciens et secrétaires",
                "Capacité de décision rapide face à un résultat discordant"
            ],
            "tools": [
                "Automates d'hématologie et de biochimie haut débit (Roche, Sysmex)",
                "Microscope optique à immersion et fluorescence",
                "Spectromètre de masse MALDI-TOF pour identification bactérienne rapide",
                "Système informatique de laboratoire (SIL)"
            ],
            "soft": [
                "Sens aigu de la rigueur scientifique et de la responsabilité médicale",
                "Aisance relationnelle pour dialoguer avec les médecins prescripteurs",
                "Leadership managérial pour encadrer techniciens et secrétaires",
                "Capacité de décision rapide face à un résultat discordant"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Premier et deuxième cycle (Bac +1 à +5/6)",
                    "title": "Études de Médecine ou de Pharmacie",
                    "desc": "Validation du deuxième cycle médical ou pharmaceutique."
                },
                {
                    "step": "Internat spécialisé (Bac +6 à +10)",
                    "title": "DES de Biologie Médicale (4 ans)",
                    "desc": "Internat commun aux médecins et pharmaciens en CHU couvrant biochimie, hématologie, microbiologie, immunologie et génétique."
                }
            ],
            "schools": [
                {
                    "name": "FMPOS UCAD Dakar (Départements de Médecine et de Pharmacie / Institut Pasteur de Dakar)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Facultés de médecine et de pharmacie des universités françaises",
                    "country": "France",
                    "scope": "France"
                }
            ],
            "certifications": [
                "DES de Biologie Médicale",
                "Thèse de Docteur en Médecine ou Docteur en Pharmacie",
                "Ordre des Médecins ou Ordre des Pharmaciens"
            ]
        },
        "career": {
            "sectors": [
                "Biologie médicale de ville",
                "Biologie hospitalo-universitaire",
                "Recherche diagnostique et biotechnologies"
            ],
            "employerTypes": [
                "Groupes de laboratoires privés (LBM)",
                "Centres Hospitaliers Universitaires",
                "Instituts de recherche médicale (Institut Pasteur, Inserm)"
            ],
            "evolution": "Biologiste médical salarié ➔ Biologiste associé co-gérant de laboratoire ➔ Chef de pôle de biologie hospitalier ➔ Professeur des universités (PUPH)",
            "pros": "Métier intellectuellement stimulant à la pointe des technologies de santé, rôle décisif dans 70% des diagnostics médicaux, horaires plus réguliers que la clinique.",
            "cons": "Forte pression réglementaire et administrative liée aux accréditations COFRAC / ISO, astreintes de permanence des analyses hospitalières."
        },
        "salary": "🇫🇷 France : 5 000 - 12 000 € net/mois selon association ou statut hospitalier • 🇸🇳 Sénégal : 500 000 - 2 200 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Près de 70% de l'ensemble des décisions médicales prises par les médecins (prescriptions, opérations, hospitalisations) reposent directement sur les résultats d'analyses validés par un biologiste médical !",
            "pourquoi": "L'examen clinique seul ne permet pas d'observer les cellules sanguines, les virus ou les marqueurs biochimiques invisibles à l'œil nu."
        },
        "sources": [
            {
                "organization": "Studyrama",
                "title": "Fiche métier : Biologiste médical",
                "url": "https://www.studyrama.com/formations/fiches-metiers/sante/biologiste-medical",
                "type": "metier"
            },
            {
                "organization": "Ordre National des Pharmaciens & Ordre des Médecins",
                "title": "L'exercice de la biologie médicale",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "experiences-laboratoire",
            "comprendre-corps-humain",
            "soigner-aider"
        ],
        "relatedJobSlugs": [
            "technicien-analyses-biomedicales",
            "pharmacien-officine",
            "microbiologiste",
            "medecin-generaliste"
        ],
        "summary": "Médecin ou pharmacien spécialisé, le biologiste médical valide et interprète les analyses biologiques indispensables au diagnostic, au dépistage et au suivi des traitements.",
        "description": "Le biologiste médical dirige le laboratoire d'analyses de biologie médicale (LBM), en ville ou à l'hôpital. Docteur en médecine ou en pharmacie ayant réalisé un internat de 4 ans en biologie médicale, il est le garant de la fiabilité des examens de sang, d'urine et de tissus (hématologie, bactériologie, virologie, biochimie, génétique). Il valide médicalement les résultats, appelle les prescripteurs en cas d'anomalie critique vitale et participe à la décision thérapeutique.",
        "studyLevel": "Bac +9 à Bac +10 (DES de Biologie Médicale)",
        "daily": {
            "morning": "Contrôle des calibrations et validation des contrôles de qualité internes sur les automates de biochimie • Validation médicale des dossiers d'analyses et corrélation avec les renseignements cliniques • Appel d'urgence à un médecin généraliste pour une hypokaliémie sévère imposant une hospitalisation immédiate",
            "afternoon": "Lecture au microscope de frottis sanguins suspects pour identification d'un profil leucémique • Réunion du comité qualité et validation des procédures de traçabilité des réactifs chimiques",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sante/biologiste-medical"
    },
    {
        "id": "technicien-analyses-biomedicales",
        "slug": "technicien-analyses-biomedicales",
        "title": "Technicien / Technicienne de Laboratoire Médical",
        "aliases": [
            "Technicien d'analyses biomédicales",
            "Technicienne de laboratoire d'analyses médicales",
            "Technicien LBM"
        ],
        "icon": "🧫",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "biologie-chimie"
        ],
        "domain": "Biologie Médicale & Diagnostics de Laboratoire",
        "domainId": "laboratoires-medicaux",
        "subdomain": "Hématologie & Hémostase",
        "shortDescription": "Sous la responsabilité du biologiste médical, il manipule le sang, les cellules et les tissus, conduit les automates d'analyses et prépare les résultats diagnostiques.",
        "longDescription": "Le technicien de laboratoire de biologie médicale (TLM) réalise techniquement les examens prescrits par les médecins. Dans le respect scrupuleux des normes d'hygiène et de sécurité biologique, il réceptionne les tubes, calibre les automates d'analyse, prépare les lames de microscopie, isole les bactéries sur milieux de culture, réalise les antibiogrammes et signale toute anomalie technique au biologiste médical. Il peut également effectuer des prélèvements sanguins s'il est titulaire du certificat de capacité.",
        "simpleDefinition": "Professionnel de santé en blouse blanche qui analyse les prises de sang et les prélèvements sur des machines perfectionnées pour trouver les maladies.",
        "level": "Bac +3 (BUT Génie Biologique / BTS Analyses de Biologie Médicale - Grade Licence)",
        "missions": [
            "Réceptionner, enregistrer et vérifier la conformité des échantillons biologiques (sang, urine, LCR)",
            "Piloter et assurer la maintenance quotidienne des automates d'analyses de biochimie et d'hématologie",
            "Mettre en culture les prélèvements bactériologiques sur gélose et identifier les germes pathogènes",
            "Réaliser des frottis sanguins, des colorations de Gram et observer les cellules au microscope",
            "Effectuer les contrôles de qualité quotidiens et alerter le biologiste sur les valeurs critiques"
        ],
        "workEnvironment": "Laboratoires de biologie médicale privés (ville), laboratoires hospitaliers d'urgence, centres de transfusion sanguine (EFS), Institut Pasteur.",
        "typicalDay": [
            {
                "time": "07:30",
                "activity": "Prélèvements sanguins au centre de prélèvement du laboratoire pour les patients à jeun"
            },
            {
                "time": "08:30",
                "activity": "Chargement des portoirs de tubes sur la chaîne automatisée d'immuno-analyse"
            },
            {
                "time": "10:30",
                "activity": "Ensemencement manuel d'urines et de prélèvements de gorge sous hotte à flux laminaire"
            },
            {
                "time": "13:30",
                "activity": "Coloration d'un frottis sanguin et comptage de la formule leucocytaire au microscope"
            },
            {
                "time": "15:30",
                "activity": "Archivage stérile des sérothèques et décontamination des plans de travail"
            }
        ],
        "skills": {
            "technical": [
                "Techniques d'analyses biochimiques, hématologiques et bactériologiques",
                "Manipulation sécurisée sous hotte de sécurité microbiologique (PSM)",
                "Contrôle de qualité analytique et métrologie des analyseurs",
                "Techniques de prélèvement sanguin veineux (prise de sang)",
                "Normes d'hygiène hospitalière et élimination des déchets DASRI"
            ],
            "human": [
                "Minutie et rigueur méthodologique sans faille",
                "Capacité de concentration soutenue sur des séries d'échantillons",
                "Sens du travail en équipe sous la conduite du biologiste",
                "Discrétion et respect strict du secret médical des patients"
            ],
            "tools": [
                "Automates d'hématologie et de coagulation",
                "Microscope optique binoculaire à haute résolution",
                "Centrifugeuses de paillasse et bains-marie",
                "Poste de Sécurité Microbiologique (PSM)"
            ],
            "soft": [
                "Minutie et rigueur méthodologique sans faille",
                "Capacité de concentration soutenue sur des séries d'échantillons",
                "Sens du travail en équipe sous la conduite du biologiste",
                "Discrétion et respect strict du secret médical des patients"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Bac STL (Sciences et Technologies de Laboratoire) ou Bac général scientifique",
                    "desc": "Bases solides en biochimie et biologie."
                },
                {
                    "step": "Formation supérieure (Bac +3)",
                    "title": "BUT Génie Biologique parcours BMB ou BTS ABM",
                    "desc": "3 années de formation technique intensive avec nombreux stages cliniques en laboratoire hospitalier et privé."
                }
            ],
            "schools": [
                {
                    "name": "ENDSS — Section Techniciens Supérieurs de Laboratoire — Dakar",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "IUT et lycées techniques préparant au BTS ABM ou BUT Génie Biologique en France",
                    "country": "France",
                    "scope": "France"
                }
            ],
            "certifications": [
                "BTS Analyses de Biologie Médicale (ABM)",
                "BUT Génie Biologique BMB",
                "Certificat de Capacité de Prélèvements Sanguins"
            ]
        },
        "career": {
            "sectors": [
                "Biologie médicale privée",
                "Laboratoires hospitaliers",
                "Établissements de transfusion sanguine (EFS)"
            ],
            "employerTypes": [
                "Laboratoires d'analyses de ville",
                "Centres hospitaliers (CHU)",
                "Instituts de recherche biologique (Institut Pasteur)"
            ],
            "evolution": "Technicien de laboratoire ➔ Technicien référent qualité métrologie ➔ Cadre médico-technique de laboratoire",
            "pros": "Métier scientifique concret au cœur de la médecine diagnostique, environnement technologique de pointe, forte sécurité de l'emploi.",
            "cons": "Horaires postés en milieu hospitalier (gardes de nuit et week-end), travail répétitif lors des grandes séries d'automates."
        },
        "salary": "🇫🇷 France : 1 800 - 2 600 € net/mois • 🇸🇳 Sénégal : 150 000 - 380 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Pour pouvoir réaliser des prises de sang au laboratoire ou à domicile, le technicien doit obligatoirement réussir une épreuve pratique officielle devant un jury hospitalier comportant au moins 40 ponctions veineuses parfaites !",
            "pourquoi": "Cette réglementation stricte garantit un geste sûr et sans douleur pour le patient."
        },
        "sources": [
            {
                "organization": "Studyrama",
                "title": "Fiche métier : Technicien d'analyses biomédicales",
                "url": "https://www.studyrama.com/formations/fiches-metiers/sante/technicien-d-analyses-biomedicales",
                "type": "metier"
            },
            {
                "organization": "Ministère de la Santé",
                "title": "Conditions d'exercice des techniciens de laboratoire médical",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "experiences-laboratoire",
            "observer-microscope",
            "soigner-aider"
        ],
        "relatedJobSlugs": [
            "biologiste-medical",
            "technicien-laboratoire",
            "microbiologiste",
            "technicien-biologiste"
        ],
        "summary": "Sous la responsabilité du biologiste médical, il manipule le sang, les cellules et les tissus, conduit les automates d'analyses et prépare les résultats diagnostiques.",
        "description": "Le technicien de laboratoire de biologie médicale (TLM) réalise techniquement les examens prescrits par les médecins. Dans le respect scrupuleux des normes d'hygiène et de sécurité biologique, il réceptionne les tubes, calibre les automates d'analyse, prépare les lames de microscopie, isole les bactéries sur milieux de culture, réalise les antibiogrammes et signale toute anomalie technique au biologiste médical. Il peut également effectuer des prélèvements sanguins s'il est titulaire du certificat de capacité.",
        "studyLevel": "Bac +3 (BUT Génie Biologique / BTS Analyses de Biologie Médicale - Grade Licence)",
        "daily": {
            "morning": "Prélèvements sanguins au centre de prélèvement du laboratoire pour les patients à jeun • Chargement des portoirs de tubes sur la chaîne automatisée d'immuno-analyse • Ensemencement manuel d'urines et de prélèvements de gorge sous hotte à flux laminaire",
            "afternoon": "Coloration d'un frottis sanguin et comptage de la formule leucocytaire au microscope • Archivage stérile des sérothèques et décontamination des plans de travail",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sante/technicien-d-analyses-biomedicales"
    },
    {
        "id": "pharmacien-officine",
        "slug": "pharmacien-officine",
        "title": "Pharmacien / Pharmacienne d'Officine",
        "aliases": [
            "Pharmacien de ville",
            "Docteur en pharmacie",
            "Apothicaire moderne"
        ],
        "icon": "💊",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "biologie-chimie",
            "commerce-marketing"
        ],
        "domain": "Pharmacie Clinique, Officine & Distribution",
        "domainId": "pharmacie",
        "subdomain": "Pharmacie d'officine",
        "shortDescription": "Expert du médicament et soignant de proximité accessible sans rendez-vous, le pharmacien délivre les ordonnances, sécurise les posologies, vaccine et conseille les patients.",
        "longDescription": "Le pharmacien d'officine est le spécialiste incontournable des médicaments, des dispositifs médicaux et de la pharmacovigilance. En officine, il analyse chaque ordonnance pour éliminer les contre-indications, incompatibilités ou surdosages mortels. Désormais acteur de premier recours, il réalise des dépistages (angines, Covid), vaccine, conduit des bilans de médication pour les personnes âgées polymédiquées et prodigue des conseils d'automédication éclairés.",
        "simpleDefinition": "Docteur en pharmacie qui délivre les médicaments en pharmacie, vérifie que les ordonnances sont sans danger et donne des conseils de santé.",
        "level": "Bac +6 (Diplôme d'État de Docteur en Pharmacie)",
        "missions": [
            "Analyser méthodiquement les ordonnances médicales, contrôler les posologies et interactions médicamenteuses",
            "Délivrer les médicaments prescrits en expliquant clairement les modalités de prise et effets indésirables",
            "Administrer les vaccins (grippe, rappels) et réaliser les tests rapides d'orientation diagnostique (TROD)",
            "Conseiller les patients en automédication pour les maux du quotidien (douleurs, troubles digestifs, dermatologie)",
            "Gérer l'officine (gestion des stocks, management de l'équipe de préparateurs, respect de la chaîne du froid)"
        ],
        "workEnvironment": "Pharmacies d'officine de quartier, pharmacies de centre commercial, officines rurales de proximité.",
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Ouverture de la pharmacie, contrôle des températures des réfrigérateurs à vaccins"
            },
            {
                "time": "09:30",
                "activity": "Délivrance d'une ordonnance complexe de chimiothérapie orale avec entretien pharmaceutique personnalisé"
            },
            {
                "time": "11:15",
                "activity": "Appel à un médecin pour signaler une interaction dangereuse entre deux molécules prescrites et proposition d'alternative"
            },
            {
                "time": "14:30",
                "activity": "Séance de vaccination antigrippale dans l'espace de confidentialité de l'officine"
            },
            {
                "time": "17:00",
                "activity": "Conseil au comptoir pour une dermatite atopique d'un nourrisson et dispensation de soins dermo-cosmétiques"
            }
        ],
        "skills": {
            "technical": [
                "Pharmacologie clinique, pharmacocinétique et toxicologie approfondie",
                "Chimie thérapeutique et mécanismes d'action moléculaire",
                "Législation des substances vénéneuses, stupéfiants et règles de délivrance",
                "Techniques vaccinales et gestes de premiers secours",
                "Gestion d'entreprise officinale et législation pharmaceutique"
            ],
            "human": [
                "Écoute attentive, sens de l'accueil et diplomatie",
                "Pédagogie pour vulgariser les modes d'action des traitements",
                "Vigilance intellectuelle constante lors de la validation des lignes d'ordonnance",
                "Sens des responsabilités et éthique déontologique stricte"
            ],
            "tools": [
                "Logiciel de gestion d'officine avec base de données médicamenteuse intégrée (Vidal, Claude Bernard)",
                "Frigo médicalisé sécurisé avec enregistreur de température",
                "Espace de confidentialité conforme aux normes de vaccination",
                "Matériel de tests de dépistage rapide (TROD)"
            ],
            "soft": [
                "Écoute attentive, sens de l'accueil et diplomatie",
                "Pédagogie pour vulgariser les modes d'action des traitements",
                "Vigilance intellectuelle constante lors de la validation des lignes d'ordonnance",
                "Sens des responsabilités et éthique déontologique stricte"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Bac scientifique général ou S",
                    "desc": "Très bonnes bases en chimie et biologie."
                },
                {
                    "step": "Premier cycle (Bac +1 à +3)",
                    "title": "PASS/L.AS puis études pharmaceutiques",
                    "desc": "Chimie organique, botanique, biochimie, pharmacologie."
                },
                {
                    "step": "Deuxième & Troisième cycle (Bac +4 à +6)",
                    "title": "Filière officine et stage de 6 mois",
                    "desc": "Soutenance de la thèse d'exercice de Docteur en Pharmacie."
                }
            ],
            "schools": [
                {
                    "name": "FMPOS — UCAD Dakar (Département de Pharmacie)",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                },
                {
                    "name": "Facultés de pharmacie des universités françaises (Paris Cité, Châtenay-Malabry, Lyon, Montpellier)",
                    "country": "France",
                    "scope": "France"
                }
            ],
            "certifications": [
                "Diplôme d'État de Docteur en Pharmacie",
                "Inscription obligatoire à l'Ordre National des Pharmaciens"
            ]
        },
        "career": {
            "sectors": [
                "Pharmacie d'officine",
                "Distribution pharmaceutique (grossistes-répartiteurs)",
                "Santé publique"
            ],
            "employerTypes": [
                "Pharmacies de ville indépendantes ou associées",
                "Réseaux d'officines",
                "Agences de sécurité du médicament (ANSM, ARP Sénégal)"
            ],
            "evolution": "Pharmacien adjoint salarié ➔ Pharmacien titulaire propriétaire de son officine ➔ Pharmacien conseil ➔ Maître de stage",
            "pros": "Acteur de santé le plus accessible sans rendez-vous, confiance immense de la population, opportunité entrepreneuriale de posséder son entreprise.",
            "cons": "Horaires d'ouverture étendus (gardes de nuit et dimanches), lourdeur de la gestion des stocks et de la paperasserie administrative de tiers payant."
        },
        "salary": "🇫🇷 France : 2 800 - 4 500 € net/mois pour un adjoint salarié (5 000 à 12 000 € net/mois pour un titulaire installé) • 🇸🇳 Sénégal : 350 000 - 1 800 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Le pharmacien a l'obligation légale et déontologique de refuser la délivrance d'un médicament s'il estime que la prescription médicale met en jeu la vie ou la santé du patient !",
            "pourquoi": "Sa signature au bas de la délivrance engage sa pleine et entière responsabilité civile et pénale aux côtés du médecin."
        },
        "sources": [
            {
                "organization": "Studyrama",
                "title": "Fiche métier : Pharmacien d'officine",
                "url": "https://www.studyrama.com/formations/fiches-metiers/sante/pharmacien-d-officine",
                "type": "metier"
            },
            {
                "organization": "Ordre National des Pharmaciens",
                "title": "La profession de pharmacien d'officine",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "soigner-aider",
            "experiences-laboratoire",
            "comprendre-corps-humain"
        ],
        "relatedJobSlugs": [
            "preparateur-pharmacie",
            "biologiste-medical",
            "medecin-generaliste"
        ],
        "summary": "Expert du médicament et soignant de proximité accessible sans rendez-vous, le pharmacien délivre les ordonnances, sécurise les posologies, vaccine et conseille les patients.",
        "description": "Le pharmacien d'officine est le spécialiste incontournable des médicaments, des dispositifs médicaux et de la pharmacovigilance. En officine, il analyse chaque ordonnance pour éliminer les contre-indications, incompatibilités ou surdosages mortels. Désormais acteur de premier recours, il réalise des dépistages (angines, Covid), vaccine, conduit des bilans de médication pour les personnes âgées polymédiquées et prodigue des conseils d'automédication éclairés.",
        "studyLevel": "Bac +6 (Diplôme d'État de Docteur en Pharmacie)",
        "daily": {
            "morning": "Ouverture de la pharmacie, contrôle des températures des réfrigérateurs à vaccins • Délivrance d'une ordonnance complexe de chimiothérapie orale avec entretien pharmaceutique personnalisé • Appel à un médecin pour signaler une interaction dangereuse entre deux molécules prescrites et proposition d'alternative",
            "afternoon": "Séance de vaccination antigrippale dans l'espace de confidentialité de l'officine • Conseil au comptoir pour une dermatite atopique d'un nourrisson et dispensation de soins dermo-cosmétiques",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sante/pharmacien-d-officine"
    },
    {
        "id": "preparateur-pharmacie",
        "slug": "preparateur-pharmacie",
        "title": "Préparateur / Préparatrice en Pharmacie",
        "aliases": [
            "Technicien en pharmacie",
            "Préparateur hospitalier",
            "Préparateur en pharmacie d'officine"
        ],
        "icon": "💊",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "biologie-chimie"
        ],
        "domain": "Pharmacie Clinique, Officine & Distribution",
        "domainId": "pharmacie",
        "subdomain": "Préparation magistrale",
        "shortDescription": "Sous le contrôle effectif du pharmacien, le préparateur délivre les médicaments, réalise les préparations magistrales au préparatoire et gère les approvisionnements.",
        "longDescription": "Le préparateur en pharmacie seconde le pharmacien dans toutes les tâches quotidiennes. Titulaire d'un diplôme professionnel (DEUST de préparateur-technicien en pharmacie), il accueille les clients, délivre les ordonnances après vérification des posologies, réalise au laboratoire les préparations de crèmes, gélules et pommades prescrites sur mesure, gère le stock et réceptionne les commandes des grossistes.",
        "simpleDefinition": "Professionnel qui travaille en pharmacie au comptoir pour donner les médicaments et au laboratoire pour fabriquer des crèmes et gélules.",
        "level": "Bac +2 (DEUST Préparateur-Technicien en Pharmacie)",
        "missions": [
            "Accueillir les patients et délivrer les médicaments prescrits sous la surveillance du pharmacien",
            "Expliquer les posologies et s'assurer de la bonne compréhension du traitement par le patient",
            "Réaliser au préparatoire les préparations magistrales et officinales (pommades, gélules, solutions buvables)",
            "Réceptionner les livraisons quotidiennes des grossistes-répartiteurs et ranger les médicaments",
            "Contrôler les dates de péremption et veiller au respect de la chaîne du froid des produits biologiques"
        ],
        "workEnvironment": "Pharmacies d'officine de ville, pharmacies à usage intérieur (PUI) des hôpitaux et cliniques.",
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Réception des bacs de médicaments livrés par le répartiteur et vérification du bon de livraison"
            },
            {
                "time": "09:30",
                "activity": "Délivrance d'ordonnances au comptoir et conseils sur la prise des médicaments"
            },
            {
                "time": "11:30",
                "activity": "Au préparatoire : pesée précise des principes actifs et confection de 60 gélules pédiatriques dosées sur mesure"
            },
            {
                "time": "14:30",
                "activity": "Conseil en parapharmacie (gammes solaires, compléments alimentaires)"
            },
            {
                "time": "17:00",
                "activity": "Inventaire tournant des antibiotiques et réassort des tiroirs de dispensation"
            }
        ],
        "skills": {
            "technical": [
                "Pharmacologie de base, galénique et techniques de préparation magistrale",
                "Calculs de doses, pesées de précision et conversions d'unités",
                "Reconnaissance des matières premières et excipients",
                "Législation de la délivrance et gestion informatisée des stocks",
                "Bonnes Pratiques de Préparation (BPP)"
            ],
            "human": [
                "Sens de l'accueil, courtoisie et discrétion",
                "Rigueur et concentration méticuleuse au préparatoire",
                "Aptitude au travail en équipe sous la responsabilité du pharmacien",
                "Sens de l'organisation et mémoire des emplacements de produits"
            ],
            "tools": [
                "Balance électronique de précision au milligramme",
                "Gélulier manuel pour confection de gélules",
                "Mortier et pilon pour trituration des poudres",
                "Système informatique de gestion d'officine (scanners de boîtes Datamatrix)"
            ],
            "soft": [
                "Sens de l'accueil, courtoisie et discrétion",
                "Rigueur et concentration méticuleuse au préparatoire",
                "Aptitude au travail en équipe sous la responsabilité du pharmacien",
                "Sens de l'organisation et mémoire des emplacements de produits"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Baccalauréat général, STL ou ST2S",
                    "desc": "Bases en chimie et calculs numériques."
                },
                {
                    "step": "Formation en alternance (Bac +2)",
                    "title": "DEUST Préparateur-Technicien en Pharmacie (2 ans)",
                    "desc": "Formation universitaire en contrat d'apprentissage associant cours à l'université et exercice en officine."
                }
            ],
            "schools": [
                {
                    "name": "Centres de formation et facultés de pharmacie proposant le DEUST en France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Instituts de formation professionnelle de préparateurs en pharmacie — Dakar",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "DEUST Préparateur-Technicien en Pharmacie",
                "Diplôme de Préparateur en Pharmacie Hospitalière (DPPH) pour l'hôpital"
            ]
        },
        "career": {
            "sectors": [
                "Pharmacie d'officine",
                "Pharmacie hospitalière (PUI)",
                "Industrie pharmaceutique"
            ],
            "employerTypes": [
                "Pharmacies de ville",
                "Centres hospitaliers et cliniques",
                "Laboratoires cosmétiques et galéniques"
            ],
            "evolution": "Préparateur en officine ➔ Spécialisation en pharmacie hospitalière (DPPH) ➔ Préparateur référent en chimiothérapie ou stérilisation",
            "pros": "Contact humain constant sans la charge managériale et financière du titulaire, sécurité de l'emploi forte, horaires fixes de jour.",
            "cons": "Position debout quasi permanente derrière le comptoir, manipulation de produits chimiques nécessitant des protections."
        },
        "salary": "🇫🇷 France : 1 650 - 2 500 € net/mois selon coefficient conventionnel • 🇸🇳 Sénégal : 120 000 - 320 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Lorsqu'un médicament industriel n'existe pas au bon dosage pour un enfant prématuré (par exemple un comprimé adulte 10 fois trop fort), c'est le préparateur qui confectionne manuellement au préparatoire des mini-gélules au microgramme près sur ordonnance du médecin !",
            "pourquoi": "Cette activité de préparation magistrale sur mesure comble les vides de la production industrielle de masse."
        },
        "sources": [
            {
                "organization": "Studyrama",
                "title": "Fiche métier : Préparateur en pharmacie",
                "url": "https://www.studyrama.com/formations/fiches-metiers/sante/preparateur-en-pharmacie",
                "type": "metier"
            },
            {
                "organization": "Association Nationale des Préparateurs en Pharmacie d'Officine (ANPPO)",
                "title": "Le statut du préparateur",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "experiences-laboratoire",
            "soigner-aider",
            "construire-fabriquer"
        ],
        "relatedJobSlugs": [
            "pharmacien-officine",
            "technicien-galeniste",
            "technicien-analyses-biomedicales"
        ],
        "summary": "Sous le contrôle effectif du pharmacien, le préparateur délivre les médicaments, réalise les préparations magistrales au préparatoire et gère les approvisionnements.",
        "description": "Le préparateur en pharmacie seconde le pharmacien dans toutes les tâches quotidiennes. Titulaire d'un diplôme professionnel (DEUST de préparateur-technicien en pharmacie), il accueille les clients, délivre les ordonnances après vérification des posologies, réalise au laboratoire les préparations de crèmes, gélules et pommades prescrites sur mesure, gère le stock et réceptionne les commandes des grossistes.",
        "studyLevel": "Bac +2 (DEUST Préparateur-Technicien en Pharmacie)",
        "daily": {
            "morning": "Réception des bacs de médicaments livrés par le répartiteur et vérification du bon de livraison • Délivrance d'ordonnances au comptoir et conseils sur la prise des médicaments • Au préparatoire : pesée précise des principes actifs et confection de 60 gélules pédiatriques dosées sur mesure",
            "afternoon": "Conseil en parapharmacie (gammes solaires, compléments alimentaires) • Inventaire tournant des antibiotiques et réassort des tiroirs de dispensation",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sante/preparateur-en-pharmacie"
    },
    {
        "id": "directeur-hopital",
        "slug": "directeur-hopital",
        "title": "Directeur / Directrice d'Établissement de Santé (Directeur d'Hôpital)",
        "aliases": [
            "Directeur d'hôpital",
            "Directeur de clinique",
            "Manager d'établissement de santé"
        ],
        "icon": "🏥",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "droit-management",
            "finance-fintech"
        ],
        "domain": "Direction, Encadrement & Administration de Santé",
        "domainId": "management-administration-sante",
        "subdomain": "Direction d'établissement",
        "shortDescription": "Pilote stratégique, financier et humain d'une structure hospitalière, le directeur d'hôpital garantit la continuité des soins, l'équilibre budgétaire et le management des équipes.",
        "longDescription": "Le directeur d'hôpital dirige une véritable 'ville dans la ville'. À la tête d'un établissement public de santé ou d'une clinique privée, il arbitre les investissements médicaux majeurs (achats de scanners, rénovation de blocs), gère un budget de plusieurs dizaines ou centaines de millions d'euros, manage des milliers d'agents (soignants, médecins, administratifs, techniciens) et assure le dialogue avec les autorités de tutelle (Ministère de la Santé, Agences Régionales de Santé).",
        "simpleDefinition": "Grand dirigeant qui gère l'hôpital comme une entreprise : il décide des budgets, recrute le personnel et achète les équipements médicaux.",
        "level": "Bac +5 à Bac +7 (École des Hautes Études en Santé Publique - EHESP / Master Management de la Santé)",
        "missions": [
            "Définir le projet d'établissement et la stratégie médicale en concertation avec la communauté médicale d'établissement (CME)",
            "Gérer l'équilibre financier, élaborer l'état prévisionnel des recettes et des dépenses (EPRD) et négocier les financements",
            "Superviser les ressources humaines (recrutements, carrières, climat social, négociations syndicales)",
            "Garantir la sécurité des soins, la gestion des crises sanitaires et la conformité aux normes de qualité (certification HAS)",
            "Piloter les grands projets d'infrastructures hospitalières et de modernisation numérique"
        ],
        "workEnvironment": "Direction générale de centres hospitaliers (CHU, CHR), cliniques privées, groupes mutualistes, agences de santé.",
        "typicalDay": [
            {
                "time": "08:30",
                "activity": "Comité de direction hebdomadaire avec le directeur financier, le directeur des soins et le président de la CME"
            },
            {
                "time": "10:30",
                "activity": "Négociation avec l'Agence Régionale de Santé sur l'autorisation d'installation d'un nouvel équipement IRM"
            },
            {
                "time": "12:30",
                "activity": "Déjeuner de travail avec les chefs de pôles médicaux sur le recrutement de praticiens hospitaliers"
            },
            {
                "time": "14:30",
                "activity": "Visite du chantier d'extension des urgences avec les ingénieurs travaux et les architectes"
            },
            {
                "time": "17:00",
                "activity": "Réunion de dialogue social avec les représentants du personnel soignant"
            }
        ],
        "skills": {
            "technical": [
                "Finances hospitalières (tarification à l'activité, EPRD) et comptabilité publique",
                "Droit de la santé, responsabilité hospitalière et droit public hospitalier",
                "Management stratégique des organisations complexes",
                "Gestion de crise sanitaire et plans de secours hospitaliers (Plan Blanc)",
                "Conduite du dialogue social et négociation sociale"
            ],
            "human": [
                "Leadership rassembleur et autorité naturelle",
                "Grand sens de la diplomatie pour concilier impératifs médicaux et contraintes budgétaires",
                "Résistance au stress et capacité de décision en temps de crise",
                "Vision prospective de l'évolution du système de santé"
            ],
            "tools": [
                "Tableaux de bord financiers et de pilotage médico-économique",
                "Logiciels de gestion des ressources humaines hospitalières",
                "Plateformes institutionnelles de reporting de santé publique"
            ],
            "soft": [
                "Leadership rassembleur et autorité naturelle",
                "Grand sens de la diplomatie pour concilier impératifs médicaux et contraintes budgétaires",
                "Résistance au stress et capacité de décision en temps de crise",
                "Vision prospective de l'évolution du système de santé"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Diplôme Bac +5 préalable",
                    "title": "Sciences Po, Master Droit Public, Master Économie/Gestion ou École de Commerce",
                    "desc": "Solide socle en droit, économie et gestion publique."
                },
                {
                    "step": "Concours national très sélectif",
                    "title": "Concours de Directeur d'Hôpital (EHESP)",
                    "desc": "Concours de haute fonction publique hospitalière."
                },
                {
                    "step": "Formation à l'EHESP (2 ans)",
                    "title": "École des Hautes Études en Santé Publique (Rennes)",
                    "desc": "Formation rémunérée de 24 mois alternant enseignements théoriques de haut niveau et stages de direction en CHU."
                }
            ],
            "schools": [
                {
                    "name": "École des Hautes Études en Santé Publique (EHESP) — Rennes (France)",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Institut de Santé et Développement (ISED) — UCAD Dakar / ENA Sénégal",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Diplôme de Directeur d'Hôpital (EHESP)",
                "Haut fonctionnaire hospitalier"
            ]
        },
        "career": {
            "sectors": [
                "Direction hospitalière publique",
                "Cliniques privées et ESPIC",
                "Ministères et institutions de santé"
            ],
            "employerTypes": [
                "CHU et grands groupes hospitaliers",
                "Agences Régionales de Santé (ARS)",
                "Groupes privés de santé (Ramsay, Elsan, etc.)"
            ],
            "evolution": "Directeur adjoint (Finances, RH ou Achats) ➔ Directeur général d'hôpital ➔ Directeur général de CHU ➔ Directeur d'Agence Régionale de Santé (ARS)",
            "pros": "Impact stratégique majeur sur la santé de toute une population régionale, gestion de projets de grande envergure, statut prestigieux de dirigeant.",
            "cons": "Forte pression politique et médiatique, arbitrages budgétaires parfois douloureux, disponibilité H24 lors des crises sanitaires."
        },
        "salary": "🇫🇷 France : 3 500 - 9 000 € net/mois selon catégorie et responsabilités • 🇸🇳 Sénégal : 500 000 - 2 500 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Un grand Centre Hospitalier Universitaire (CHU) emploie souvent plus de 10 000 collaborateurs et gère un budget annuel supérieur à 1 milliard d'euros, ce qui en fait le premier employeur et le plus gros acteur économique de sa région !",
            "pourquoi": "L'hôpital moderne regroupe une immense diversité de métiers : médecins, soignants, cuisiniers, informaticiens, ingénieurs et logisticiens."
        },
        "sources": [
            {
                "organization": "Studyrama",
                "title": "Fiche métier : Directeur d'hôpital",
                "url": "https://www.studyrama.com/formations/fiches-metiers/sante/directeur-d-hopital",
                "type": "metier"
            },
            {
                "organization": "École des Hautes Études en Santé Publique (EHESP)",
                "title": "Le corps des directeurs d'hôpital",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "droit-management",
            "soigner-aider",
            "finance-fintech"
        ],
        "relatedJobSlugs": [
            "cadre-sante",
            "secretaire-medical",
            "medecin-generaliste"
        ],
        "summary": "Pilote stratégique, financier et humain d'une structure hospitalière, le directeur d'hôpital garantit la continuité des soins, l'équilibre budgétaire et le management des équipes.",
        "description": "Le directeur d'hôpital dirige une véritable 'ville dans la ville'. À la tête d'un établissement public de santé ou d'une clinique privée, il arbitre les investissements médicaux majeurs (achats de scanners, rénovation de blocs), gère un budget de plusieurs dizaines ou centaines de millions d'euros, manage des milliers d'agents (soignants, médecins, administratifs, techniciens) et assure le dialogue avec les autorités de tutelle (Ministère de la Santé, Agences Régionales de Santé).",
        "studyLevel": "Bac +5 à Bac +7 (École des Hautes Études en Santé Publique - EHESP / Master Management de la Santé)",
        "daily": {
            "morning": "Comité de direction hebdomadaire avec le directeur financier, le directeur des soins et le président de la CME • Négociation avec l'Agence Régionale de Santé sur l'autorisation d'installation d'un nouvel équipement IRM • Déjeuner de travail avec les chefs de pôles médicaux sur le recrutement de praticiens hospitaliers",
            "afternoon": "Visite du chantier d'extension des urgences avec les ingénieurs travaux et les architectes • Réunion de dialogue social avec les représentants du personnel soignant",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sante/directeur-d-hopital"
    },
    {
        "id": "cadre-sante",
        "slug": "cadre-sante",
        "title": "Cadre de Santé / Surveillant(e) de Service Hospitalier",
        "aliases": [
            "Cadre soignant",
            "Surveillant général",
            "Manager de proximité de santé"
        ],
        "icon": "📋",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "droit-management"
        ],
        "domain": "Direction, Encadrement & Administration de Santé",
        "domainId": "management-administration-sante",
        "subdomain": "Coordination des soins (Cadres)",
        "shortDescription": "Pilier du management de proximité hospitalier, le cadre de santé anime et coordonne l'équipe soignante, organise les plannings et garantit la qualité et la sécurité des soins dans son unité.",
        "longDescription": "Ancien soignant (infirmier, kiné, manipulateur radio) ayant accédé aux fonctions de management après une formation spécialisée en Institut de Formation des Cadres de Santé (IFCS), le cadre de santé fait le pont indispensable entre la direction de l'hôpital et le chevet du malade. Il gère les plannings et les compétences de l'équipe paramédicale (infirmiers, aides-soignants), veille à la disponibilité des lits et du matériel, intègre les nouveaux professionnels et anime les projets de soins du service.",
        "simpleDefinition": "Ancien soignant d'expérience qui dirige et organise l'équipe d'infirmiers et d'aides-soignants dans un service d'hôpital.",
        "level": "Bac +4 à Bac +5 (Diplôme de Cadre de Santé / Master Management des Établissements de Santé)",
        "missions": [
            "Organiser et coordonner les activités de soins de l'unité en veillant à la continuité et à la sécurité 24h/24",
            "Manager l'équipe paramédicale : plannings de travail, congés, évaluations annuelles, intégration des recrues",
            "Assurer la gestion logistique du service : commandes de pharmacie, matériel médical, maintenance des chambres",
            "Mener des démarches d'amélioration continue de la qualité et de gestion des risques infectieux",
            "Favoriser la communication entre l'équipe soignante, les médecins du service, les familles et la direction"
        ],
        "workEnvironment": "Services d'hospitalisation de jour ou de semaine, blocs opératoires, réanimations, EHPAD, instituts de formation (IFSI).",
        "typicalDay": [
            {
                "time": "08:00",
                "activity": "Tour du service, point sur les effectifs du jour et réajustement des plannings en cas d'absence imprévue"
            },
            {
                "time": "09:30",
                "activity": "Réunion de coordination des lits (bed management) pour fluidifier les admissions venant des urgences"
            },
            {
                "time": "11:00",
                "activity": "Entretien d'évaluation professionnelle annuel d'une infirmière et définition de son plan de formation"
            },
            {
                "time": "14:00",
                "activity": "Audit qualité des dossiers de soins informatisés et contrôle de l'application des protocoles d'hygiène"
            },
            {
                "time": "16:30",
                "activity": "Accueil d'une famille pour désamorcer une incompréhension concernant les modalités de visite"
            }
        ],
        "skills": {
            "technical": [
                "Management d'équipe soignante et gestion des conflits",
                "Législation hospitalière du travail et gestion des plannings (règles de temps de travail)",
                "Démarche d'amélioration continue de la qualité et gestion des évènements indésirables",
                "Gestion logistique et budgétaire de service de soins",
                "Pédagogie d'encadrement des étudiants et nouveaux professionnels"
            ],
            "human": [
                "Sens de l'écoute, justice et équité managériale",
                "Aptitude à la médiation et au dialogue apaisé",
                "Réactivité et capacité d'arbitrage dans l'urgence des flux de patients",
                "Loyauté envers l'institution tout en restant proche des réalités du terrain"
            ],
            "tools": [
                "Logiciel de gestion du temps de travail et plannings hospitaliers",
                "Système informatisé de gestion des lits (Bed Management)",
                "Outils de déclaration des événements indésirables (fiches d'incident)"
            ],
            "soft": [
                "Sens de l'écoute, justice et équité managériale",
                "Aptitude à la médiation et au dialogue apaisé",
                "Réactivité et capacité d'arbitrage dans l'urgence des flux de patients",
                "Loyauté envers l'institution tout en restant proche des réalités du terrain"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Diplôme paramédical d'origine",
                    "title": "Diplôme d'État d'Infirmier, Manipulateur, Kiné, etc.",
                    "desc": "Formation soignante socle."
                },
                {
                    "step": "Exercice clinique (4 ans minimum)",
                    "title": "Au moins 4 années d'exercice professionnel à temps plein",
                    "desc": "Exigence légale pour se présenter au concours d'entrée."
                },
                {
                    "step": "Institut des Cadres de Santé (1 an)",
                    "title": "Formation en IFCS (Diplôme de Cadre de Santé + Master 2)",
                    "desc": "10 mois de formation intensive au management, à la pédagogie et à la sociologie des organisations."
                }
            ],
            "schools": [
                {
                    "name": "Instituts de Formation des Cadres de Santé (IFCS) en France adossés aux universités",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "ENDSS — Section Cadres de Santé / Gestion des Services de Soins — Dakar",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Diplôme de Cadre de Santé",
                "Master en Management des Établissements de Santé"
            ]
        },
        "career": {
            "sectors": [
                "Hôpital public et privé",
                "Instituts de formation de santé (IFSI)",
                "Secteur médico-social (EHPAD)"
            ],
            "employerTypes": [
                "Centres hospitaliers généraux et universitaires",
                "Établissements de santé privés",
                "Centres de formation paramédicale"
            ],
            "evolution": "Cadre de santé d'unité ➔ Cadre supérieur de santé (gestion d'un pôle complet) ➔ Directeur des soins (membre de l'équipe de direction)",
            "pros": "Poste clé qui donne le cap et le sens au travail d'équipe, transformation concrète des conditions de travail et des soins, horaires réguliers sans gardes de nuit habituelles.",
            "cons": "Position parfois inconfortable 'entre le marteau et l'enclume' (exigences budgétaires de la direction et revendications du personnel), gestion perpétuelle du manque d'effectifs."
        },
        "salary": "🇫🇷 France : 2 400 - 4 100 € net/mois selon échelon • 🇸🇳 Sénégal : 250 000 - 700 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Un cadre de santé qui gère l'animation pédagogique dans une école d'infirmiers (IFSI) est appelé 'Cadre de santé formateur' ; il conçoit les cours et accompagne les étudiants pendant 3 ans jusqu'à leur diplôme.",
            "pourquoi": "Le diplôme de cadre de santé offre une double qualification officielle : le management de service et la formation pédagogique."
        },
        "sources": [
            {
                "organization": "Studyrama",
                "title": "Fiche métier : Cadre de santé",
                "url": "https://www.studyrama.com/formations/fiches-metiers/sante/cadre-de-sante",
                "type": "metier"
            },
            {
                "organization": "Association Nationale des Cadres de Santé (ANCS)",
                "title": "Le référentiel de compétences du cadre de santé",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "droit-management",
            "soigner-aider"
        ],
        "relatedJobSlugs": [
            "directeur-hopital",
            "infirmier-diplome-etat",
            "infirmier-pratique-avancee"
        ],
        "summary": "Pilier du management de proximité hospitalier, le cadre de santé anime et coordonne l'équipe soignante, organise les plannings et garantit la qualité et la sécurité des soins dans son unité.",
        "description": "Ancien soignant (infirmier, kiné, manipulateur radio) ayant accédé aux fonctions de management après une formation spécialisée en Institut de Formation des Cadres de Santé (IFCS), le cadre de santé fait le pont indispensable entre la direction de l'hôpital et le chevet du malade. Il gère les plannings et les compétences de l'équipe paramédicale (infirmiers, aides-soignants), veille à la disponibilité des lits et du matériel, intègre les nouveaux professionnels et anime les projets de soins du service.",
        "studyLevel": "Bac +4 à Bac +5 (Diplôme de Cadre de Santé / Master Management des Établissements de Santé)",
        "daily": {
            "morning": "Tour du service, point sur les effectifs du jour et réajustement des plannings en cas d'absence imprévue • Réunion de coordination des lits (bed management) pour fluidifier les admissions venant des urgences • Entretien d'évaluation professionnelle annuel d'une infirmière et définition de son plan de formation",
            "afternoon": "Audit qualité des dossiers de soins informatisés et contrôle de l'application des protocoles d'hygiène • Accueil d'une famille pour désamorcer une incompréhension concernant les modalités de visite",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sante/cadre-de-sante"
    },
    {
        "id": "secretaire-medical",
        "slug": "secretaire-medical",
        "title": "Secrétaire Médical(e) / Gestionnaire de Dossiers Patients",
        "aliases": [
            "Assistant médico-administratif",
            "Secrétaire médico-sociale",
            "Gestionnaire administratif de santé"
        ],
        "icon": "📁",
        "familyId": "sante-soins-paramedical",
        "connectedFamilies": [
            "sante-soins-paramedical",
            "droit-management",
            "numerique-ia"
        ],
        "domain": "Direction, Encadrement & Administration de Santé",
        "domainId": "management-administration-sante",
        "subdomain": "Secrétariat & Dossier patient",
        "shortDescription": "Premier visage et interlocuteur administratif du patient, le secrétaire médical gère l'accueil, les plannings de consultation, la frappe des comptes-rendus et le dossier médical.",
        "longDescription": "Le secrétaire médical maîtrise à la fois l'accueil relationnel et le vocabulaire médical pointu. En cabinet libéral, maison de santé ou service hospitalier, il filtre les appels, planifie les consultations et examens, accueille les patients avec bienveillance, retranscrit sous dictée vocale les comptes-rendus opératoires ou d'hospitalisation, gère les feuilles de soins et garantit la confidentialité absolue des données médicales.",
        "simpleDefinition": "Professionnel administratif qui accueille les patients, répond au téléphone pour donner les rendez-vous et rédige les courriers des médecins.",
        "level": "Bac à Bac +2 (Titre certifié de Secrétaire Médical / BTS SP3S)",
        "missions": [
            "Accueillir physiquement et téléphoniquement les patients, identifier l'urgence de leur demande et fixer les rendez-vous",
            "Créer, actualiser et classer les dossiers médicaux des patients dans le respect strict du secret médical",
            "Saisir et mettre en page les comptes-rendus de consultation, d'imagerie et les lettres de sortie médicale",
            "Gérer la facturation des actes, la télétransmission des feuilles de soins aux organismes de sécurité sociale et mutuelles",
            "Assurer la liaison administrative entre le médecin, les confrères correspondants, les laboratoires et les hôpitaux"
        ],
        "workEnvironment": "Cabinets médicaux de spécialistes ou généralistes, hôpitaux et cliniques, cabinets de radiologie, laboratoires d'analyses.",
        "typicalDay": [
            {
                "time": "08:15",
                "activity": "Ouverture du secrétariat, écoute des messages sur le répondeur et réorganisation de l'agenda du jour"
            },
            {
                "time": "09:00",
                "activity": "Accueil des premiers patients, vérification de la carte Vitale / d'assuré et encaissement des consultations"
            },
            {
                "time": "11:00",
                "activity": "Frappe et relecture d'un compte-rendu d'échographie cardiaque sous dictée numérique du cardiologue"
            },
            {
                "time": "14:00",
                "activity": "Gestion des dossiers d'admission hospitalière et transmission de pièces au service de facturation"
            },
            {
                "time": "16:30",
                "activity": "Réponse téléphonique aux questions des patients sur la préparation d'un examen médical de lendemain"
            }
        ],
        "skills": {
            "technical": [
                "Maîtrise approfondie de la terminologie médicale (anatomie, pathologies, actes médicaux)",
                "Dactylographie rapide et retranscription audio numérique",
                "Gestion informatisée des dossiers patients et logiciels métiers de santé",
                "Réglementation du secret professionnel médical (article 226-13 du Code pénal)",
                "Procédures de remboursement de l'Assurance Maladie et télétransmission"
            ],
            "human": [
                "Excellente élocution et accueil chaleureux au téléphone comme au comptoir",
                "Discrétion absolue et sens aigu de la confidentialité",
                "Patience et diplomatie face à des patients stressés par la maladie",
                "Organisation méthodique pour ne perdre aucun document médical"
            ],
            "tools": [
                "Logiciel de gestion de cabinet médical (Doctolib, Weda, Chorus)",
                "Pédalier de transcription et casque de dictée vocale",
                "Lecteur de carte d'assuré et terminal de paiement",
                "Plateforme de messagerie sécurisée de santé (MSSanté)"
            ],
            "soft": [
                "Excellente élocution et accueil chaleureux au téléphone comme au comptoir",
                "Discrétion absolue et sens aigu de la confidentialité",
                "Patience et diplomatie face à des patients stressés par la maladie",
                "Organisation méthodique pour ne perdre aucun document médical"
            ]
        },
        "studies": {
            "pathway": [
                {
                    "step": "Baccalauréat",
                    "title": "Baccalauréat général ou ST2S (Sciences et Technologies de la Santé et du Social)",
                    "desc": "Très bon niveau en orthographe et intérêt pour le secteur de la santé."
                },
                {
                    "step": "Formation certifiante (1 à 2 ans)",
                    "title": "Titre professionnel de Secrétaire Médico-Social (SMS) ou BTS SP3S",
                    "desc": "Apprentissage de la terminologie médicale, de la gestion documentaire et stages cliniques en milieu de soins."
                }
            ],
            "schools": [
                {
                    "name": "Lycées préparant au BTS SP3S et centres de formation continue (Croix-Rouge, Greta) en France",
                    "country": "France",
                    "scope": "France"
                },
                {
                    "name": "Écoles de secrétariat de santé et d'administration hospitalière — Dakar",
                    "country": "Sénégal",
                    "scope": "Sénégal"
                }
            ],
            "certifications": [
                "Titre Certifié de Secrétaire Médical(e)",
                "BTS Services et Prestations des Secteurs Sanitaire et Social (SP3S)"
            ]
        },
        "career": {
            "sectors": [
                "Médecine libérale",
                "Établissements hospitaliers publics et privés",
                "Centres d'imagerie et laboratoires"
            ],
            "employerTypes": [
                "Cabinets médicaux",
                "Hôpitaux et cliniques",
                "Centres de radiologie et d'oncologie"
            ],
            "evolution": "Secrétaire médical(e) ➔ Secrétaire médical(e) principal(e) ➔ Coordinateur de secrétariat médical ➔ Assistant de direction hospitalière",
            "pros": "Contact humain permanent, rôle central d'organisation au sein de l'équipe soignante, horaires de bureau réguliers sans gardes de nuit.",
            "cons": "Flux téléphonique continu pouvant être stressant, gestion de patients parfois impatients ou agressifs face aux délais d'attente."
        },
        "salary": "🇫🇷 France : 1 650 - 2 300 € net/mois • 🇸🇳 Sénégal : 120 000 - 300 000 FCFA net/mois",
        "saviezVous": {
            "fait": "Le secrétaire médical est astreint exactement au même secret médical absolu que le médecin : révéler à un tiers une information de santé apprise dans le cadre de ses fonctions est passible d'un an de prison et de 15 000 € d'amende !",
            "pourquoi": "La confiance du patient dans l'institution de santé repose sur la garantie que sa vie privée reste strictement protégée."
        },
        "sources": [
            {
                "organization": "Studyrama",
                "title": "Fiche métier : Secrétaire médicale",
                "url": "https://www.studyrama.com/formations/fiches-metiers/sante/secretaire-medicale",
                "type": "metier"
            },
            {
                "organization": "Ministère du Travail et de la Santé",
                "title": "Référentiel du Titre de Secrétaire Médico-Social",
                "type": "institutionnel"
            }
        ],
        "interests": [
            "droit-management",
            "soigner-aider",
            "lire-ecrire-litterature"
        ],
        "relatedJobSlugs": [
            "assistant-dentaire",
            "assistant-regulation-medicale",
            "cadre-sante"
        ],
        "summary": "Premier visage et interlocuteur administratif du patient, le secrétaire médical gère l'accueil, les plannings de consultation, la frappe des comptes-rendus et le dossier médical.",
        "description": "Le secrétaire médical maîtrise à la fois l'accueil relationnel et le vocabulaire médical pointu. En cabinet libéral, maison de santé ou service hospitalier, il filtre les appels, planifie les consultations et examens, accueille les patients avec bienveillance, retranscrit sous dictée vocale les comptes-rendus opératoires ou d'hospitalisation, gère les feuilles de soins et garantit la confidentialité absolue des données médicales.",
        "studyLevel": "Bac à Bac +2 (Titre certifié de Secrétaire Médical / BTS SP3S)",
        "daily": {
            "morning": "Ouverture du secrétariat, écoute des messages sur le répondeur et réorganisation de l'agenda du jour • Accueil des premiers patients, vérification de la carte Vitale / d'assuré et encaissement des consultations • Frappe et relecture d'un compte-rendu d'échographie cardiaque sous dictée numérique du cardiologue",
            "afternoon": "Gestion des dossiers d'admission hospitalière et transmission de pièces au service de facturation • Réponse téléphonique aux questions des patients sur la préparation d'un examen médical de lendemain",
            "challenges": "Gestion de la charge émotionnelle, rigueur diagnostique absolue et réactivité face aux urgences."
        },
        "studyramaUrl": "https://www.studyrama.com/formations/fiches-metiers/sante/secretaire-medicale"
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
            return JOBS.map(function(j) {
                if (!j.familyName) j.familyName = 'Santé, Soins & Paramédical';
                return j;
            });
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
        }
    };
}));

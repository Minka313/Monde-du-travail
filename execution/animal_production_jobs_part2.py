"""
Fiches Métiers de la Production Animale, de l'Élevage et des Filières Animales (Partie 2/2 : Métiers 11 à 22)
Source principale officielle : Groupe ESA (Angers, France) - https://www.groupe-esa.com/productions-animales/les-metiers-de-la-production-animale/
Compléments : BTS Métiers de l'élevage, Licence Pro PA, URSE (Unité de Recherche ESA/INRAE).
Écosystème africain / sénégalais : EISMV Dakar, ISFAR Bambey, ISRA LNERV, Ministère de l'Élevage.
"""

ANIMAL_PRODUCTION_JOBS_PART2 = [
    # -----------------------------------------------------------------------
    # 11. TECHNICO-COMMERCIAL EN NUTRITION ANIMALE
    # -----------------------------------------------------------------------
    {
        "id": "technico-commercial-nutrition-animale",
        "slug": "technico-commercial-nutrition-animale",
        "title": "Technico-Commercial en Nutrition Animale & Élevage",
        "aliases": ["Conseiller technico-commercial aliment du bétail", "Attaché commercial nutrition animale", "Conseiller en nutrition ruminants / monogastriques"],
        "icon": "🌽",
        "image": "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Animale, Élevage & Filières",
        "domainId": "elevage-productions-animales",
        "subdomain": "Alimentation animale & agrofourniture",
        "sourceESA": True,
        "isEmerging": False,
        "level": "BTS Métiers de l'élevage (Productions Animales) du Groupe ESA, Licence Pro PA ou Ingénieur ESA",
        "salary": "🇫🇷 France : 2 200 - 3 800 € net/mois + primes d'objectifs (~32 000 - 55 000 € brut/an, Source : Groupe ESA / Apecita) • 🇸🇳 Sénégal : 350 000 - 1 200 000 FCFA / mois (Provenderies industrielles Sedima, NMA, fermes)",
        "simpleDefinition": "Le technico-commercial en nutrition animale conseille les éleveurs sur l'équilibre alimentaire de leur troupeau, formule des préconisations de rationnement et commercialise des aliments complets, minéraux et compléments nutritionnels adaptés.",
        "shortDescription": "Fiche documentée par les filières du Groupe ESA, ce conseiller de terrain allie expertise zootechnique de la digestion animale et talent de négociation commerciale.",
        "longDescription": "Issu des filières de formation emblématiques du Groupe ESA (BTS Métiers de l'élevage et Licence Pro PA), le technico-commercial en nutrition animale est le partenaire quotidien de l'éleveur. Il analyse la valeur nutritive des fourrages récoltés sur l'exploitation (ensilage de maïs, foin, herbe pâturée) à l'aide de logiciels de rationnement (INRAE) pour calculer avec précision les apports en énergie, protéines et minéraux nécessaires à chaque stade physiologique (lactation, tarissement, engraissement). Il propose et vend les aliments composés et additifs nutritionnels fabriqués par son entreprise, tout en suivant l'état corporel (note d'état corporel NEC) et les performances zootechniques des troupeaux.",
        "mainObjective": "Optimiser le coût alimentaire et l'efficacité nutritionnelle des élevages tout en développant les ventes d'aliments et de minéraux de son entreprise.",
        "companyRole": "Ambassadeur commercial et zootechnicien de référence auprès des éleveurs sur son secteur.",
        "species": ["Bovins lait et viande", "Porcins", "Volailles", "Ovins", "Caprins"],
        "workEnvironment": [
            "🚜 Visites quotidiennes en élevages et étables de son secteur géographique",
            "🏢 Firmes d'aliments du bétail, coopératives agricoles et négoces privés",
            "🚗 Véhicule de fonction et bureau mobile pour les simulations de rationnement"
        ],
        "missions": [
            "Évaluer sur le terrain les stocks et la qualité des fourrages produits sur l'exploitation",
            "Calculer et optimiser les rations alimentaires à l'aide des tables de référence zootechniques (INRAE)",
            "Commercialiser la gamme d'aliments complets, correcteurs azotés et compléments minéraux vitaminés",
            "Suivre les indicateurs de santé du troupeau (acidose ruminale, consistance des bouses, taux butyreux et protéique du lait)",
            "Négocier les conditions tarifaires, planifier les livraisons en vrac ou en sacs et fidéliser son portefeuille d'éleveurs"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Première visite chez un éleveur laitier", "desc": "Audit de la ration des vaches en pic de lactation, vérification du hachage de l'ensilage et ajustement de l'apport en tourteau de colza."},
            {"time": "11:00", "title": "Visite d'un élevage de taurillons", "desc": "Pesée d'un échantillon d'animaux pour calculer le Gain Moyen Quotidien (GMQ) et proposition d'un aliment de finition."},
            {"time": "14:30", "title": "Calcul de rationnement au bureau", "desc": "Simulation informatique de plusieurs scénarios de coût de ration sous logiciel spécialisé pour un jeune installé."},
            {"time": "16:30", "title": "Appels commerciaux et suivi logistique", "desc": "Passation des commandes urgentes auprès de l'usine d'aliments et confirmation des livraisons en silo pour le lendemain."}
        ],
        "skills": {
            "technical": [
                "Physiologie digestive comparée (ruminants, monogastriques) et métabolisme énergétique",
                "Formulation et calcul de rations alimentaires selon les systèmes d'unités INRAE (UFL, UFV, PDI)",
                "Diagnostic clinique visuel de l'état des animaux (note d'état corporel, aplombs, bouses)",
                "Techniques de négociation commerciale B2B en milieu agricole"
            ],
            "human": [
                "Sens du contact humain, authenticité et écoute active du monde paysan",
                "Force de persuasion et capacité à justifier le retour sur investissement d'un aliment",
                "Rigueur zootechnique et honnêteté dans les préconisations techniques",
                "Autonomie et excellente gestion de ses tournées en milieu rural"
            ],
            "tools": [
                "Logiciels professionnels de rationnement (INRAtion, Systali, Rumix)",
                "Tamis séparateur de particules de fourrages (Penn State Separator)",
                "Outils de CRM agricole sur tablette tactile connectée",
                "Testeurs d'humidité et d'échauffement des silos"
            ],
            "analytical": [
                "Calcul de la marge sur coût alimentaire par litre de lait ou kilo de carcasse",
                "Interprétation des analyses de laboratoire sur la valeur nutritive des fourrages"
            ]
        },
        "specializations": ["Nutrition des vaches laitières de haute production", "Alimentation des porcins et sevrage sans antibiotiques", "Nutrition avicole de précision (pondeuses et poulets standard/label)"],
        "studies": {
            "pathway": [
                {"step": "Diplôme clé Bac +2", "title": "BTS Métiers de l'élevage (Productions Animales) — Groupe ESA", "desc": "La voie royale pour maîtriser les bases zootechniques, l'alimentation et la gestion de troupeau."},
                {"step": "Bac +3 spécialisé", "title": "Licence Professionnelle PA — Métiers du Conseil en Élevage (Groupe ESA)", "desc": "Perfectionnement en techniques de diagnostic d'exploitation et relation clientèle."},
                {"step": "Bac +5 / Ingénieur", "title": "Diplôme d'Ingénieur Agronome du Groupe ESA", "desc": "Accès aux postes d'ingénieur formulation ou directeur technique nutrition."}
            ],
            "schools": [
                {"name": "Groupe ESA — Angers, France", "country": "France", "scope": "France"},
                {"name": "Lycées agricoles partenaires de l'ESA proposant le BTS PA — France", "country": "France", "scope": "France"},
                {"name": "Institut Supérieur de Formation Agricole et Rurale (ISFAR Bambey) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "EISMV (École Vétérinaire de Dakar) — Sénégal", "country": "Sénégal", "scope": "Afrique"}
            ],
            "certifications": ["Certificat de Conseiller en Nutrition Animale", "Habilitation d'expert en rationnement informatisé"],
            "schoolSubjects": ["Biochimie & zootechnie", "Physiologie animale", "Techniques commerciales", "Agronomie fourragère"]
        },
        "career": {
            "sectors": ["Coopératives agricoles régionales d'approvisionnement", "Firmes d'aliments du bétail privées et prémixeurs (Sanders, Terrena, Agrial, Provimi, De Heus)", "Négoces agricoles indépendants"],
            "employerTypes": ["Entreprises de nutrition animale", "Coopératives polyvalentes", "Distributeurs d'agrofourniture"],
            "evolution": "Technico-commercial junior ➔ Responsable de secteur ➔ Chef de marché nutrition animale ➔ Directeur commercial élevage",
            "pros": "Grande liberté d'organisation quotidienne, métier alliant rigueur scientifique et fibre commerciale, relation de confiance durable avec les éleveurs.",
            "cons": "Déplacements constants par tous les temps, forte concurrence commerciale entre firmes, astreinte téléphonique lors des incidents de livraison."
        },
        "gettingStarted": {
            "beginnerProject": "Visiter une exploitation d'élevage et noter l'ensemble des composants d'une ration distribuée (fourrages, céréales, minéraux).",
            "intermediateProject": "Utiliser un simulateur en ligne gratuit pour calculer les besoins en énergie (UFL) et en protéines (PDI) d'une vache de 650 kg produisant 30 L de lait.",
            "advancedProject": "Réaliser un comparatif économique complet entre deux rations hivernales intégrant l'achat d'un correcteur azoté du commerce.",
            "portfolioIdeas": ["Audit zootechnique d'une ration laitière réelle", "Argumentaire de vente d'un aliment minéral enrichi en oligo-éléments chélatés"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA analyse les données en temps réel des colliers connectés et des robots de traite pour proposer automatiquement des ajustements de concentrés par animal.",
            "automatedTasks": ["Détection précoce des chutes d'ingestion ou de rumination", "Calcul instantané de rations à moindre coût par programmation linéaire"],
            "emergingSkills": ["Interprétation des flux de données IoT issus des auges connectées"],
            "humanEdge": "Le coup d'œil de terrain sur la santé globale des bêtes et la pédagogie bienveillante pour convaincre l'éleveur de modifier ses habitudes."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la rentabilité des élevages de volailles de chair et de vaches laitières améliorées dépend à 70% de la maîtrise du coût alimentaire. Les technico-commerciaux de sociétés comme Sedima, NMA Sanders et Grands Moulins de Dakar apportent un appui conseil décisif aux aviculteurs des Niayes et aux fermes laitières de la région de Thiès.",
            "localSectors": ["Industries d'aliments avicoles et bétail de Rufisque et Thiès", "Réseaux de boutiques d'intrants vétérinaires et d'aliments concentrés", "Coopératives d'éleveurs de bétail métissé de la zone sylvopastorale"],
            "remoteWork": "Strictement impossible (métier 100% terrain et contact éleveur).",
            "entrepreneurship": "Création d'un service mobile de pesée et de formulation de rations à base d'ingrédients locaux (tourteau de coton, son de blé, mélasse, niébé)."
        },
        "relatedJobSlugs": ["manager-agrofourniture", "responsable-usine-aliment-betail", "ingenieur-conseil-productions-animales", "eleveur"],
        "connectedFamilies": ["commerce-marketing", "chimie-biologie", "conseil-audit"],
        "resources": [
            {"type": "formation", "title": "BTS Métiers de l'élevage (Productions Animales) — Groupe ESA", "url": "https://www.groupe-esa.com/formation/bts-production-animales/", "source": "Groupe ESA"},
            {"type": "formation", "title": "Licence Pro PA Métiers du conseil en élevage — Groupe ESA", "url": "https://www.groupe-esa.com/formation/licence-pro-pa-productions-animales-metiers-du-conseil-en-elevage/", "source": "Groupe ESA"}
        ],
        "sources": ["Groupe ESA", "SNIA", "Idele"],
        "interests": ["nature-environnement", "negocier-convaincre", "conseiller-accompagner"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon les statistiques d'insertion du Groupe ESA, les jeunes diplômés de BTS Métiers de l'élevage et Licence Pro PA accédant aux postes de technico-commerciaux en nutrition trouvent un emploi en moins de deux mois, avec de fortes perspectives d'évolution.",
            "pourquoi": "L'alimentation représente jusqu'à 65% du coût de production d'un élevage : un conseiller capable de faire gagner 5 centimes d'euro par kilo produit sécurise la survie financière de l'exploitation.",
            "a_retenir": "L'allié zootechnique et économique incontournable qui nourrit les cheptels avec rigueur."
        }
    },

    # -----------------------------------------------------------------------
    # 12. INGÉNIEUR-CONSEIL EN PRODUCTIONS ANIMALES
    # -----------------------------------------------------------------------
    {
        "id": "ingenieur-conseil-productions-animales",
        "slug": "ingenieur-conseil-productions-animales",
        "title": "Ingénieur-Conseil en Productions Animales",
        "aliases": ["Ingénieur zootechnicien conseil", "Consultant expert en élevage", "Conseiller d'élevage territorial"],
        "icon": "📋",
        "image": "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Animale, Élevage & Filières",
        "domainId": "elevage-productions-animales",
        "subdomain": "Conseil & accompagnement des élevages",
        "sourceESA": True,
        "isEmerging": False,
        "level": "Diplôme d'Ingénieur Agronome du Groupe ESA — Majeure Productions Animales",
        "salary": "🇫🇷 France : 2 700 - 4 600 € net/mois (~38 000 - 64 000 € brut/an, Source : Groupe ESA / APEC) • 🇸🇳 Sénégal : 500 000 - 1 700 000 FCFA / mois (Bureaux d'études agricoles, projets Banque Mondiale, FAO)",
        "simpleDefinition": "L'ingénieur-conseil en productions animales apporte une expertise stratégique et technique globale aux élevages pour moderniser leurs pratiques, améliorer leur rentabilité et concevoir des programmes d'innovation zootechnique.",
        "shortDescription": "Fiche officielle du Groupe ESA, cet innovateur en matière d'élevage bovin, ovin, porcin ou avicole guide la transformation technologique et durable des cheptels.",
        "longDescription": "Selon la définition officielle fournie par le Groupe ESA : 'Innovateur en matière d’élevage bovin, ovin, porcin, caprin ou avicole, l’ingénieur en productions animales conçoit et supervise la mise en œuvre de programmes expérimentaux de reproduction. Il dirige une équipe au sein d’une structure de recherche ou d'un organisme de conseil.' Les compétences indispensables spécifiées par l'ESA sont l'organisation, le relationnel et le conseil. Au-delà des protocoles d'essais, il accompagne les chefs d'exploitation dans des diagnostics globaux à 360° : autonomie fourragère, transition carbone, réduction des émissions gazeuses, bien-être animal et rentabilité financière.",
        "mainObjective": "Conseiller les éleveurs et les filières dans leurs choix stratégiques de modernisation, de conduite zootechnique et de transition agroécologique.",
        "companyRole": "Conseiller stratégique de haut niveau pour l'avenir et la durabilité des exploitations.",
        "species": ["Bovins lait et viande", "Porcins", "Ovins", "Caprins", "Volailles"],
        "workEnvironment": [
            "🏢 Chambres d'agriculture régionales et organismes de conseil en élevage",
            "🚜 Exploitations agricoles pour les audits et diagnostics approfondis",
            "💻 Bureaux d'études zootechniques et rédaction de rapports stratégiques"
        ],
        "missions": [
            "Réaliser des diagnostics technico-économiques complets d'exploitations d'élevage",
            "Concevoir des plans d'amélioration génétique, sanitaire et nutritionnelle adaptés à chaque contexte",
            "Accompagner les éleveurs dans les démarches de décarbonation et d'évaluation environnementale (CAP'2ER)",
            "Animer des groupes d'éleveurs pour favoriser le partage de pratiques innovantes et la formation continue",
            "Superviser des projets pilotes d'expérimentation zootechnique en partenariat avec les instituts de recherche"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Diagnostic global chez un éleveur en transition", "desc": "Analyse du bilan carbone, de la trésorerie et de l'efficacité de la reproduction sur 5 années d'historique."},
            {"time": "11:30", "title": "Élaboration de préconisations stratégiques", "desc": "Modélisation de l'impact de l'implantation de légumineuses prairiales pour diminuer les achats d'engrais et de soja."},
            {"time": "14:30", "title": "Animation d'un groupe d'échange technique", "desc": "Atelier sur la réduction de la mortalité des jeunes animaux avec 12 éleveurs caprins du territoire."},
            {"time": "17:00", "title": "Rédaction d'une note d'expertise pour la Chambre d'Agriculture", "desc": "Synthèse des impacts économiques de la nouvelle réglementation sur le bien-être des volailles."}
        ],
        "skills": {
            "technical": [
                "Zootechnie avancée multiespèces (reproduction, alimentation, génétique)",
                "Diagnostic technico-économique d'exploitation et gestion prévisionnelle",
                "Méthodologie de bilan carbone et d'évaluation environnementale en élevage",
                "Réglementations européennes et nationales sur l'environnement et le bien-être animal"
            ],
            "human": [
                "Excellente aisance relationnelle et sens de l'écoute bienveillante (requis ESA)",
                "Pédagogie et capacité à conseiller sans imposer (requis ESA)",
                "Rigueur d'organisation et gestion de projets complexes (requis ESA)",
                "Vision systémique et neutralité d'analyse technique"
            ],
            "tools": [
                "Outils de diagnostic carbone et durabilité (CAP'2ER, IDEA)",
                "Logiciels de gestion technico-économique d'élevage (GTE, GTL, Bovi-Clic)",
                "Outils de modélisation prospective d'exploitations agricoles",
                "Plateformes collaboratives et SIG agricoles"
            ],
            "analytical": [
                "Corrélation entre indicateurs zootechniques et santé financière de la ferme",
                "Analyse critique des scénarios d'investissement (bâtiments, robotique, méthanisation)"
            ]
        },
        "specializations": ["Conseil en transition bas carbone et agroécologie de l'élevage", "Expertise en robotique de traite et précision zootechnique", "Conseil stratégique en transmission et restructuration d'exploitations"],
        "studies": {
            "pathway": [
                {"step": "Diplôme d'excellence", "title": "Diplôme d'Ingénieur Agronome du Groupe ESA — Majeure Productions Animales", "desc": "Formation d'ingénieur habilitée CTI offrant une triple compétence agronomique, économique et managériale."},
                {"step": "Double diplôme possible", "title": "Master Management des Entreprises Agricoles ou MSc International Livestock", "desc": "Ouverture sur le conseil de gestion de haut niveau."}
            ],
            "schools": [
                {"name": "Groupe ESA — Angers, France", "country": "France", "scope": "France"},
                {"name": "Institut Agro (Rennes-Angers, Dijon, Montpellier) — France", "country": "France", "scope": "France"},
                {"name": "ENSA (École Nationale Supérieure d'Agriculture) — Thiès, Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "EISMV Dakar — Sénégal", "country": "Sénégal", "scope": "Afrique"}
            ],
            "certifications": ["Certification Conseiller Carbone Élevage (Idele)", "Agrément de formateur d'adultes en milieu rural"],
            "schoolSubjects": ["Zootechnie générale", "Économie rurale", "Agronomie", "Sociologie du monde agricole"]
        },
        "career": {
            "sectors": ["Organismes de conseil en élevage (Seenergi, Seenorest, Eilyps, Conseil Élevage)", "Chambres d'agriculture régionales et départementales", "Bureaux d'études d'ingénierie agronomique et cabinets de conseil"],
            "employerTypes": ["Chambres consulaires", "Entreprises de conseil en élevage", "Cabinets d'audit agricole"],
            "evolution": "Ingénieur-conseil junior ➔ Ingénieur-conseil expert ➔ Responsable de pôle conseil élevage ➔ Directeur d'organisme de développement agricole",
            "pros": "Diversité intellectuelle passionnante, grande autonomie, rôle moteur dans l'adaptation de l'agriculture aux enjeux du siècle.",
            "cons": "Forte exigence de polyvalence (de la biologie au droit fiscal), confrontation à des situations de détresse économique chez certains agriculteurs."
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser un schéma systémique représentant les flux de matières (herbe, lait, déjections, aliments achetés) d'une étable de 60 vaches.",
            "intermediateProject": "Élaborer une grille d'audit pour évaluer l'autonomie fourragère d'une ferme ovine sur 3 années de sécheresse.",
            "advancedProject": "Rédiger un plan de réduction d'émissions de méthane entérique pour un cheptel laitier en combinant rationnement et génétique.",
            "portfolioIdeas": ["Rapport de diagnostic technico-économique anonymisé", "Guide méthodologique de gestion du stress thermique en été"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA aide l'ingénieur en agrégeant instantanément les historiques de centaines d'élevages pour détecter des trajectoires optimales de rentabilité.",
            "automatedTasks": ["Compilation automatique des données comptables et zootechniques", "Benchmarking automatisé des fermes par rapport aux moyennes régionales"],
            "emergingSkills": ["Pilotage de jumeaux numériques d'exploitations agricoles pour simuler des investissements"],
            "humanEdge": "L'empathie humaine et la psychologie nécessaires pour convaincre une famille d'éleveurs d'engager la transmission ou la restructuration de leur outil de travail."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, le Programme National de Développement de l'Élevage (PNDE) et les projets de zones pastorales s'appuient sur des ingénieurs-conseils pour structurer la filière laitière locale, réduire la dépendance à la poudre de lait importée et sécuriser l'hydratation des troupeaux dans le Ferlo.",
            "localSectors": ["Ministère de l'Élevage et des Productions Animales (MEPA)", "Projets PRAPS (Banque Mondiale / CILSS)", "Bureaux d'études de développement rural sénégalais"],
            "remoteWork": "Hybride (visites sur le terrain / travail de bureau et visioconférences).",
            "entrepreneurship": "Création d'un cabinet d'ingénierie zootechnique et d'audit de fermes modernes pour les investisseurs urbains se lançant dans l'agrobusiness."
        },
        "relatedJobSlugs": ["ingenieur-production-animale", "technico-commercial-nutrition-animale", "responsable-experimentation-animale", "conseiller-batiment-elevage"],
        "connectedFamilies": ["conseil-audit", "environnement-climat", "direction-strategie"],
        "resources": [
            {"type": "article", "title": "Ingénieur-conseil en productions animales — Groupe ESA", "url": "https://www.groupe-esa.com/productions-animales/les-metiers-de-la-production-animale/#ingenieur-conseil-en-productions-animales", "source": "Groupe ESA"},
            {"type": "formation", "title": "Ingénieur agronome — Groupe ESA", "url": "https://www.groupe-esa.com/formation/ingenieur-agronome/", "source": "Groupe ESA"}
        ],
        "sources": ["Groupe ESA", "France Conseil Élevage", "Chambres d'Agriculture France"],
        "interests": ["conseiller-accompagner", "nature-environnement", "donnees-chiffres"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon le Groupe ESA, la dimension relationnelle et l'écoute sont tout aussi décisives que les connaissances scientifiques pour réussir dans ce métier.",
            "pourquoi": "Un plan technique parfait sur le papier échoue s'il ne prend pas en compte le rythme de vie de l'éleveur, ses aspirations personnelles et son bien-être au travail.",
            "a_retenir": "L'architecte conseil qui sécurise la pérennité économique et humaine des éleveurs."
        }
    },

    # -----------------------------------------------------------------------
    # 13. CONSEILLER EN BÂTIMENT D'ÉLEVAGE & AMBIANCE
    # -----------------------------------------------------------------------
    {
        "id": "conseiller-batiment-elevage",
        "slug": "conseiller-batiment-elevage",
        "title": "Conseiller en Bâtiment d'Élevage & Ambiance",
        "aliases": ["Conseillère bâtiment agricole", "Expert en conception de bâtiments d'élevage", "Chargé d'études aménagement et ventilation d'étables"],
        "icon": "🏗️",
        "image": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Animale, Élevage & Filières",
        "domainId": "elevage-productions-animales",
        "subdomain": "Bâtiments & infrastructures d'élevage",
        "sourceESA": True,
        "isEmerging": False,
        "level": "BTS Métiers de l'élevage ESA, Licence Pro Bâtiment Agricole ou Ingénieur agronome",
        "salary": "🇫🇷 France : 2 200 - 3 600 € net/mois (~32 000 - 50 000 € brut/an, Source : Groupe ESA / Chambres d'agriculture) • 🇸🇳 Sénégal : 350 000 - 1 200 000 FCFA / mois (Bureaux d'études génie civil rural, constructeurs métalliques)",
        "simpleDefinition": "Le conseiller en bâtiment d'élevage accompagne les éleveurs de la conception architecturale à la réalisation de leurs infrastructures, en combinant règles de construction, bien-être animal, ventilation et démarches de permis de construire.",
        "shortDescription": "Fiche documentée par le Groupe ESA, cet expert conçoit des étables, porcheries et poulaillers alliant confort des animaux, ergonomie de travail et respect réglementaire.",
        "longDescription": "Comme l'énonce mot pour mot la fiche officielle du Groupe ESA : 'Il propose un ensemble de prestations allant du conseil ponctuel jusqu’au permis de construire. Le conseil bâtiment inclut à la fois des notions constructives, réglementaires et zootechniques. Compétences indispensables : Réactif et bien organisé.' Le bâtiment d'élevage n'est pas un simple hangar : c'est l'outil de production central qui conditionne la santé pulmonaire des animaux par sa ventilation (naturelle ou dynamique), la qualité de la litière, la luminosité, l'absence de courants d'air et l'ergonomie de l'éleveur pour réduire les troubles musculosquelettiques.",
        "mainObjective": "Concevoir des bâtiments d'élevage performants, ventilés et ergonomiques garantissant la biosécurité, le confort animal et la rentabilité de l'investissement.",
        "companyRole": "Concepteur et coordinateur technique des projets d'infrastructures d'élevage.",
        "species": ["Bovins", "Porcins", "Volailles", "Caprins", "Ovins", "Équins"],
        "workEnvironment": [
            "🚜 Exploitations agricoles et chantiers de construction",
            "🏢 Chambres d'agriculture, coopératives et constructeurs de hangars agricoles",
            "💻 Bureau d'études équipé de logiciels de CAO/DAO (AutoCAD, SketchUp)"
        ],
        "missions": [
            "Analyser les besoins d'agrandissement, de modernisation ou de robotisation de l'élevage",
            "Réaliser des diagnostics d'ambiance en étable (fumigènes de flux d'air, anémomètres, hygrométrie)",
            "Dessiner les plans de masse, plans intérieurs (cornadis, logettes, couloirs) et coupes de ventilation",
            "Constituer les dossiers de demande de permis de construire et déclarations ICPE environnementales",
            "Assister l'éleveur dans la consultation des entreprises de maçonnerie, charpente et équipements tubulaires"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Diagnostic d'ambiance avec test fumigène", "desc": "Déclenchement d'un fumigène dans une bergerie pour visualiser le renouvellement d'air et détecter les zones d'air vicié."},
            {"time": "11:00", "title": "Réunion sur chantier avec le charpentier", "desc": "Vérification des hauteurs de sablières et de la pose des filets brise-vent pour éviter les courants d'air sur les veaux."},
            {"time": "14:30", "title": "Conception de plan sous logiciel CAO", "desc": "Dessin de l'implantation d'un robot de traite et d'un couloir de tri automatisé dans un bâtiment rénové."},
            {"time": "16:45", "title": "Finalisation d'un dossier de permis de construire", "desc": "Vérification des pièces graphiques et des distances d'éloignement par rapport aux tiers (règles d'urbanisme)."}
        ],
        "skills": {
            "technical": [
                "Zootechnie d'ambiance (aéraulique des bâtiments, hygrométrie, thermorégulation animale)",
                "Dessin technique assisté par ordinateur (CAO/DAO) et calcul de surfaces agricoles",
                "Réglementation de l'urbanisme rural, permis de construire et dossiers ICPE",
                "Connaissance des matériaux de construction (bois, métal, béton) et équipements tubulaires"
            ],
            "human": [
                "Forte réactivité pour tenir les plannings de permis et de chantiers (requis ESA)",
                "Excellente organisation et rigueur méthodologique (requis ESA)",
                "Écoute attentive des souhaits de l'éleveur et vision ergonomique du travail",
                "Pédagogie pour expliquer les contraintes techniques aux artisans et aux éleveurs"
            ],
            "tools": [
                "Logiciels de CAO/DAO (AutoCAD, SketchUp Architecture, Revit)",
                "Appareils de mesure d'ambiance (fumigènes, anémomètres à fil chaud, luxmètres, thermohygrographes)",
                "Télémètres laser et niveaux de chantier numériques",
                "Bases de données de prix de référence de la construction agricole"
            ],
            "analytical": [
                "Dimensionnement précis des ouvertures de ventilation statique (entrées d'air et faîtages)",
                "Optimisation du coût du bâtiment par place d'animal logé"
            ]
        },
        "specializations": ["Bâtiments d'élevage bas carbone et toitures photovoltaïques", "Ambiance, ventilation et réduction du stress thermique", "Conception d'aménagements pour robots de traite et bien-être animal"],
        "studies": {
            "pathway": [
                {"step": "Formation de base", "title": "BTS Métiers de l'élevage (Productions Animales) — Groupe ESA", "desc": "Compréhension fine des exigences physiologiques et du comportement des animaux logés."},
                {"step": "Licence Pro spécialisée", "title": "Licence Pro Bâtiments d'Élevage et Énergies Renouvelables", "desc": "Acquisition des compétences de dessin, calcul de structures et dossiers réglementaires."},
                {"step": "Ingénieur", "title": "Diplôme d'Ingénieur Agronome du Groupe ESA", "desc": "Accès aux fonctions de chef de pôle aménagement rural et expert en génie de l'élevage."}
            ],
            "schools": [
                {"name": "Groupe ESA — Angers, France", "country": "France", "scope": "France"},
                {"name": "Lycées agricoles spécialisés en génie rural et agroéquipement — France", "country": "France", "scope": "France"},
                {"name": "École Polytechnique de Thiès (EPT) / Génie Rural — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "ISFAR Bambey — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Habilitation Conseiller Bâtiment Agréé (Idele / Chambres d'agriculture)", "Certification Diagnostic Ambiance et Ventilation"],
            "schoolSubjects": ["Dessin technique", "Aéraulique et thermodynamique", "Zootechnie", "Droit de l'urbanisme"]
        },
        "career": {
            "sectors": ["Chambres d'agriculture régionales (services aménagement et bâtiment)", "Entreprises et constructeurs de bâtiments agricoles métalliques ou bois", "Bureaux d'études spécialisés en élevage et coopératives"],
            "employerTypes": ["Chambres consulaires", "Constructeurs de bâtiments d'élevage", "Coopératives agricoles"],
            "evolution": "Dessinateur projeteur bâtiment ➔ Conseiller bâtiment d'élevage ➔ Responsable de pôle bâtiment ➔ Expert national en génie de l'élevage",
            "pros": "Satisfaction concrète de voir sortir de terre des bâtiments modernes, contact humain enrichissant, métier technique très recherché.",
            "cons": "Déplacements fréquents sur les chantiers, gestion des aléas d'entreprises du bâtiment, délais stricts d'instruction de permis."
        },
        "gettingStarted": {
            "beginnerProject": "Dessiner le plan simplifié de l'intérieur d'une stabulation libre en respectant les aires d'exercice, de couchage et d'alimentation.",
            "intermediateProject": "Calculer la surface d'ouverture nécessaire au faîtage d'un bâtiment accueillant 80 vaches pour assurer une vitesse d'air optimale.",
            "advancedProject": "Monter un dossier complet de permis de construire pour un bâtiment d'engraissement avec notice d'impact paysager et gestion des effluents.",
            "portfolioIdeas": ["Plan de bâtiment sous SketchUp ou AutoCAD", "Rapport de diagnostic d'ambiance avec mesures de flux d'air"]
        },
        "aiImpact": {
            "level": "Modéré à Élevé",
            "summary": "L'IA générative et le BIM génèrent des maquettes 3D optimisées en simulant automatiquement la dynamique des fluides et le flux d'air intérieur.",
            "automatedTasks": ["Simulation numérique CFD de ventilation des étables", "Génération automatique des bordereaux de pièces administratives"],
            "emergingSkills": ["Maîtrise du BIM agricole (Building Information Modeling)"],
            "humanEdge": "La perception physique des courants d'air sur place et la négociation diplomatique avec les services instructeurs d'urbanisme."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la protection des troupeaux contre les chaleurs extrêmes (> 40°C en période sèche) est vitale. Les conseillers en bâtiment conçoivent des poulaillers semi-fermés avec rideaux de brumisation (cooling pads) et des étables sahéliennes ventilées à toit double pour les vaches métisses de la zone des Niayes.",
            "localSectors": ["Constructeurs métalliques et hangars de Dakar et Thiès", "Fermes avicoles industrielles de Pout et Sébikotane", "Centres d'insémination et fermes laitières pilotes"],
            "remoteWork": "Hybride (visites de chantiers / dessin CAO en bureau).",
            "entrepreneurship": "Création d'une entreprise de conception et montage de bâtiments d'élevage biosécurisés adaptés au climat tropical chaud et sec."
        },
        "relatedJobSlugs": ["ingenieur-conseil-productions-animales", "coordinateur-formation-securite", "eleveur", "coordinateur-qhse-agro"],
        "connectedFamilies": ["btp-immobilier", "architecture-urbanisme", "energie-environnement"],
        "resources": [
            {"type": "article", "title": "Conseiller en bâtiment d'élevage — Groupe ESA", "url": "https://www.groupe-esa.com/productions-animales/les-metiers-de-la-production-animale/#conseiller-en-batiment-delevage", "source": "Groupe ESA"},
            {"type": "guide", "title": "Guide des bâtiments d'élevage — Idele", "url": "https://idele.fr/batiments-delevage", "source": "Institut de l'Élevage"}
        ],
        "sources": ["Groupe ESA", "Institut de l'Élevage (Idele)", "Chambres d'Agriculture"],
        "interests": ["construire-fabriquer", "nature-environnement", "donnees-chiffres"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon le Groupe ESA et l'Institut de l'Élevage, une bonne conception de la ventilation dans un bâtiment d'élevage réduit jusqu'à 40% les pathologies respiratoires des jeunes animaux et diminue fortement l'usage des antibiotiques.",
            "pourquoi": "L'ammoniac et l'humidité s'accumulent au niveau du sol si le renouvellement d'air est insuffisant : le conseiller bâtiment protège les poumons des bêtes par la simple mécanique des fluides.",
            "a_retenir": "L'architecte du bien-être et de la santé animale sous les toits de la ferme."
        }
    },

    # -----------------------------------------------------------------------
    # 14. COORDINATEUR QHSE AGROALIMENTAIRE & FILIÈRES ANIMALES
    # -----------------------------------------------------------------------
    {
        "id": "coordinateur-qhse-agro",
        "slug": "coordinateur-qhse-agro",
        "title": "Coordinateur QHSE Agroalimentaire & Filières Animales",
        "aliases": ["Responsable Qualité Hygiène Sécurité Environnement", "Animateur QHSE élevage et abattage", "Responsable sécurité et environnement agro"],
        "icon": "🛡️",
        "image": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Animale, Élevage & Filières",
        "domainId": "elevage-productions-animales",
        "subdomain": "Qualité, hygiène, sécurité & environnement (QHSE)",
        "sourceESA": True,
        "isEmerging": False,
        "level": "Licence Pro Qualité ou Ingénieur ESA / Master QHSE",
        "salary": "🇫🇷 France : 2 600 - 4 400 € net/mois (~36 000 - 62 000 € brut/an, Source : Groupe ESA / APEC) • 🇸🇳 Sénégal : 450 000 - 1 600 000 FCFA / mois (Industries agroalimentaires, abattoirs modernes, laiteries)",
        "simpleDefinition": "Le coordinateur QHSE élabore, met en œuvre et contrôle les politiques de qualité, d'hygiène, de sécurité du personnel et de respect de l'environnement au sein des exploitations d'élevage, usines d'aliment et abattoirs.",
        "shortDescription": "Fiche documentée par le Groupe ESA, ce garant de la conformité veille à la sécurité des salariés, à la pureté des produits et à l'impact environnemental des sites agroalimentaires.",
        "longDescription": "Comme documenté mot à mot par le Groupe ESA : 'Le coordinateur qualité hygiène sécurité environnement (ou responsable QHSE) est chargé d’élaborer et de contrôler l’application des politiques de qualité, d’hygiène, de sécurité et d’environnement. Bon communiquant, il est en relation constante avec ses supérieurs, des clients et des prestataires. Compétences indispensables : Bonnes connaissances en droit, en gestion de budget, en management environnemental et en risques industriels.' Dans les filières animales (laiteries, usines d'aliments du bétail, centres d'allotement, abattoirs), il traque les contaminations microbiologiques, prévient les accidents de travail et gère les rejets aqueux et odorants.",
        "mainObjective": "Garantir zéro accident du travail, zéro non-conformité sanitaire et une empreinte écologique minimale pour l'ensemble des installations industrielles ou d'élevage.",
        "companyRole": "Garde-fou réglementaire, protecteur des salariés et garant de la sécurité sanitaire des consommateurs.",
        "species": ["Toutes filières animales (bovins, porcins, volailles, ovins, caprins)"],
        "workEnvironment": [
            "🏭 Usines d'aliments du bétail, abattoirs, ateliers de découpe et laiteries",
            "🏢 Bureau de management de la qualité et gestion documentaire",
            "🚜 Sites d'élevage pour les audits de biosécurité et gestion des effluents"
        ],
        "missions": [
            "Concevoir et actualiser le Document Unique d'Évaluation des Risques Professionnels (DUERP)",
            "Déployer les plans de maîtrise sanitaire (HACCP), d'hygiène des ateliers et de nettoyage-désinfection",
            "Former les opérateurs aux gestes de sécurité, aux règles d'hygiène stricte et au port des EPI",
            "Piloter les audits de certification (ISO 9001, ISO 14001, ISO 45001, IFS Food, BRC)",
            "Gérer les plans de traitement des rejets industriels (stations d'épuration de laiteries, filtres à poussières)"
        ],
        "typicalDay": [
            {"time": "08:15", "title": "Tournée terrain hygiène et sécurité en usine", "desc": "Contrôle visuel des lignes d'ensachage d'aliments, vérification du port des protections auditives et propreté des sols."},
            {"time": "10:30", "title": "Gestion d'un incident de non-conformité", "desc": "Analyse 5 Pourquoi (root cause) suite au blocage d'une palette d'aliments présentant une anomalie de fermeture de sac."},
            {"time": "14:00", "title": "Session de sensibilisation sécurité pour les nouveaux arrivants", "desc": "Formation interactive sur la circulation des chariots élévateurs et la manipulation des produits de nettoyage."},
            {"time": "16:30", "title": "Suivi des indicateurs environnementaux", "desc": "Vérification des relevés de DCO de la station de traitement des eaux usées et déclaration mensuelle en préfecture."}
        ],
        "skills": {
            "technical": [
                "Droit du travail, réglementations ICPE et droit environnemental (requis ESA)",
                "Normes internationales de management (ISO 9001, 14001, 45001) et sécurité alimentaire (HACCP, IFS)",
                "Gestion des risques industriels et analyse des accidents de travail (arbre des causes)",
                "Gestion de budget de mise en conformité et sécurité (requis ESA)"
            ],
            "human": [
                "Excellente communication et pédagogie fédératrice (souligné par l'ESA)",
                "Fermeté bienveillante et autorité morale sur le respect des règles de sécurité",
                "Sens de l'écoute et gestion du dialogue social avec les représentants du personnel",
                "Réactivité et sang-froid en cas d'alerte sanitaire ou accidentelle"
            ],
            "tools": [
                "Logiciels de gestion intégrée QHSE et gestion électronique de documents (GED)",
                "Outils de mesure de bruit (sonomètres), luxmètres et détecteurs de gaz",
                "Matrices de risques professionnels et grilles d'audit standardisées",
                "Tableaux de bord d'indicateurs de fréquence et gravité des accidents"
            ],
            "analytical": [
                "Analyse statistique des presqu'accidents pour prévenir les accidents graves",
                "Évaluation technico-financière des investissements de réduction des impacts écologiques"
            ]
        },
        "specializations": ["Biosécurité en élevage et filières avicoles/porcines", "Sécurité alimentaire et HACCP en industrie laitière et carnée", "Management environnemental et économie circulaire en agroalimentaire"],
        "studies": {
            "pathway": [
                {"step": "Diplôme Bac +2/+3", "title": "BTS Métiers de l'élevage ESA ou Licence Pro Qualité / HSE", "desc": "Acquisition des compétences de base en hygiène, sécurité et réglementation agroalimentaire."},
                {"step": "Diplôme Bac +5", "title": "Diplôme d'Ingénieur Agronome du Groupe ESA — Majeure Agroalimentaire / QHSE", "desc": "Accès direct aux fonctions de direction QHSE de sites industriels majeurs."}
            ],
            "schools": [
                {"name": "Groupe ESA — Angers, France", "country": "France", "scope": "France"},
                {"name": "Universités et IUT proposant les filières HSE et Qualité — France", "country": "France", "scope": "France"},
                {"name": "École Supérieure Polytechnique (ESP Dakar) / Génie Chimique et Qualité — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Institut de Technologie Alimentaire (ITA) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification Auditeur Interne Qualité / HSE (IRCA / Afnor)", "Habilitation Sauveteur Secouriste du Travail (SST)"],
            "schoolSubjects": ["Droit de l'environnement", "Microbiologie alimentaire", "Toxicologie industrielle", "Communication"]
        },
        "career": {
            "sectors": ["Industries de transformation laitière (Lactalis, Danone, Savencia, Sodiaal)", "Industries de la viande et abattoirs (Bigard, LDC, Cooperl)", "Grandes usines de fabrication d'aliments pour bétail"],
            "employerTypes": ["Groupes agroalimentaires", "Coopératives de transformation", "Organismes d'audit et de contrôle"],
            "evolution": "Animateur QHSE ➔ Coordinateur QHSE ➔ Responsable QHSE de site industriel ➔ Directeur QHSE groupe",
            "pros": "Poste au cœur de la protection de la vie des hommes et de la sécurité des aliments, rôle transverse en lien avec tous les métiers.",
            "cons": "Position parfois inconfortable entre impératifs de cadence de production et respect strict des règles de sécurité."
        },
        "gettingStarted": {
            "beginnerProject": "Réaliser une fiche de sécurité simplifiée pour l'utilisation d'un produit acide de nettoyage de tank à lait.",
            "intermediateProject": "Construire un arbre des causes pour analyser un accident fictif de glissade sur un sol humide d'atelier.",
            "advancedProject": "Rédiger un plan complet de maîtrise sanitaire (HACCP) pour une ligne de conditionnement de yaourts artisanaux.",
            "portfolioIdeas": ["Exemple de procédure de gestion de crise sanitaire", "Tableau de bord d'indicateurs QHSE sous Excel/Power BI"]
        },
        "aiImpact": {
            "level": "Modéré à Élevé",
            "summary": "L'IA analyse les flux vidéo en usine pour détecter instantanément l'absence de port d'EPI et prédit les pannes d'épuration avant dépassement des seuils.",
            "automatedTasks": ["Détection automatique de non-port de gants ou de charlotte par vision IA", "Automatisation de la veille juridique et réglementaire"],
            "emergingSkills": ["Supervision des systèmes de surveillance vidéo intelligents pour la sécurité"],
            "humanEdge": "La culture sécurité ne se décrète pas par algorithme : elle repose sur la capacité humaine du coordinateur à convaincre et inspirer les équipes."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la conformité aux normes d'hygiène et de sécurité alimentaire (HACCP, Codex Alimentarius) est une priorité stratégique pour les laiteries (Kirène, Wayembam) et les grands abattoirs industriels pour conquérir les marchés sous-régionaux et garantir la santé publique.",
            "localSectors": ["Industries laitières et de boissons de la région dakaroise", "Abattoirs frigorifiques de Dakar et de Saint-Louis", "Direction de la Protection des Végétaux et Direction des Services Vétérinaires"],
            "remoteWork": "Strictement impossible (présence terrain quotidienne requise sur les lignes de fabrication).",
            "entrepreneurship": "Création d'un cabinet de conseil et de formation pratique aux normes HACCP et d'hygiène pour les petites laiteries et fermes avicoles locales."
        },
        "relatedJobSlugs": ["auditeur-interne-charte-qualite", "inspecteur-sanitaire", "coordinateur-formation-securite", "responsable-usine-aliment-betail"],
        "connectedFamilies": ["sante-biomedical", "industrie-mecanique", "droit-justice"],
        "resources": [
            {"type": "article", "title": "Coordinateur QHSE — Groupe ESA", "url": "https://www.groupe-esa.com/productions-animales/les-metiers-de-la-production-animale/#coordinateur-qhse", "source": "Groupe ESA"},
            {"type": "formation", "title": "Formations Qualité et Agroalimentaire — Groupe ESA", "url": "https://www.groupe-esa.com/transformation-agroalimentaire/", "source": "Groupe ESA"}
        ],
        "sources": ["Groupe ESA", "Ania (Association Nationale des Industries Alimentaires)", "INRS"],
        "interests": ["gerer-organiser", "nature-environnement", "conseiller-accompagner"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon les données de l'industrie agroalimentaire, la présence d'un coordinateur QHSE actif divise en moyenne par trois le taux de fréquence des accidents du travail sur les lignes de production.",
            "pourquoi": "La prévention active et la prise en compte ergonomique des postes de travail éliminent les situations dangereuses avant qu'elles ne se transforment en drames humains.",
            "a_retenir": "Le bouclier quotidien qui préserve la santé des salariés et l'intégrité de nos assiettes."
        }
    },

    # -----------------------------------------------------------------------
    # 15. AUDITEUR INTERNE DE LA CHARTE QUALITÉ
    # -----------------------------------------------------------------------
    {
        "id": "auditeur-interne-charte-qualite",
        "slug": "auditeur-interne-charte-qualite",
        "title": "Auditeur Interne de la Charte Qualité & Filières Animales",
        "aliases": ["Auditrice qualité élevage", "Auditeur filières animales et abattoirs", "Évaluateur cahiers des charges Label Rouge / Bio / AOP"],
        "icon": "📝",
        "image": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Animale, Élevage & Filières",
        "domainId": "elevage-productions-animales",
        "subdomain": "Qualité, hygiène, sécurité & environnement (QHSE)",
        "sourceESA": True,
        "isEmerging": False,
        "level": "BTS Métiers de l'élevage, Licence Pro Qualité ou Ingénieur Agronome ESA",
        "salary": "🇫🇷 France : 2 400 - 3 900 € net/mois (~34 000 - 55 000 € brut/an, Source : Groupe ESA / Organismes certificateurs) • 🇸🇳 Sénégal : 400 000 - 1 400 000 FCFA / mois (Organismes de contrôle qualité, coopératives agroexportatrices)",
        "simpleDefinition": "L'auditeur interne qualité évalue la conformité des pratiques d'élevage, d'abattage et de transformation par rapport aux chartes professionnelles, aux cahiers des charges sous signe de qualité et aux normes de management, pour stimuler l'amélioration continue.",
        "shortDescription": "Fiche officielle documentée par le Groupe ESA, cet observateur rigoureux garantit la crédibilité des labels de qualité et le respect des chartes d'élevage.",
        "longDescription": "Comme formulé sur le site officiel du Groupe ESA : 'La compétitivité d’une organisation est étroitement liée à son système de management de la qualité. L’Auditeur interne qualité est en charge de la réalisation des audits internes prévus par les normes qui traitent de systèmes de management, et il contribue ainsi, par son action, à l’amélioration continue de la qualité. Compétences indispensables : Un esprit de synthèse, de la rigueur et un bon sens de l’organisation sont requis pour assurer les différentes missions, notamment les évaluations effectuées, l’interaction avec les parties impliquées et la gestion du processus d’audit.' Dans le domaine de l'élevage (Charte des Bonnes Pratiques d'Élevage CBPE, filières Label Rouge, Bleu-Blanc-Cœur, agriculture biologique), il audite les exploitations et les ateliers pour valider le respect scrupuleux des engagements.",
        "mainObjective": "Vérifier la stricte conformité des pratiques aux référentiels de qualité, identifier les écarts et accompagner les équipes vers l'excellence opérationnelle.",
        "companyRole": "Garant indépendant de la véracité des engagements qualité et moteur du progrès continu.",
        "species": ["Bovins", "Porcins", "Volailles", "Ovins", "Caprins"],
        "workEnvironment": [
            "🚜 Visites d'élevages et d'ateliers de transformation sur le terrain",
            "🏢 Sièges de coopératives agricoles, groupements de producteurs et organismes de certification",
            "💻 Bureau pour la rédaction des rapports d'audit et le suivi des plans d'actions correctives"
        ],
        "missions": [
            "Élaborer le calendrier annuel des audits internes en accord avec la politique qualité de l'organisation",
            "Préparer les grilles d'évaluation et questionnaires d'audit adaptés aux cahiers des charges visés",
            "Mener les entretiens d'audit sur place, examiner les registres d'élevage (ordonnances vétérinaires, traçabilité)",
            "Identifier les écarts, non-conformités majeures et mineures, et les pistes de progrès",
            "Rédiger des rapports d'audit synthétiques et animer les réunions de clôture avec les exploitants ou chefs d'atelier"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Audit d'une exploitation laitière sous charte qualité", "desc": "Réunion d'ouverture avec l'éleveur, présentation des objectifs de l'audit et vérification du carnet sanitaire."},
            {"time": "10:30", "title": "Inspection des installations et des animaux", "desc": "Vérification de la propreté de la salle de traite, du stockage des produits vétérinaires sous clé et de l'état des logettes."},
            {"time": "14:00", "title": "Réunion de clôture et restitution des constats", "desc": "Échange constructif avec l'éleveur sur un point d'amélioration concernant le stockage des aliments minéraux."},
            {"time": "16:30", "title": "Rédaction du rapport d'audit au bureau", "desc": "Formalisation des fiches d'écarts et enregistrement sur la plateforme qualité de la coopérative."}
        ],
        "skills": {
            "technical": [
                "Méthodologie d'audit selon la norme ISO 19011 (lignes directrices pour l'audit des systèmes)",
                "Maîtrise des cahiers des charges agricoles (CBPE, Label Rouge, AOP/AOC, Bio, HVE)",
                "Connaissance approfondie de la réglementation zootechnique, sanitaire et de bien-être animal",
                "Gestion des processus et formulation de plans d'actions correctives (CAPA)"
            ],
            "human": [
                "Grand esprit de synthèse et rigueur impartiale (requis ESA)",
                "Sens aigu de l'organisation et ponctualité méthodique (requis ESA)",
                "Pédagogie, diplomatie et capacité d'interaction constructive sans être inquisiteur",
                "Sens de l'écoute et neutralité émotionnelle face aux contestations"
            ],
            "tools": [
                "Tablettes tactiles d'audit avec formulaires numériques déconnectés",
                "Logiciels de gestion de la qualité (Q-Pulse, Qualios, BlueKango)",
                "Appareils photos pour constitution des preuves visuelles d'audit",
                "Registres officiels de traçabilité animale (BDNI, carnets d'agnelage/vêlage)"
            ],
            "analytical": [
                "Distinction nette entre un écart ponctuel et une défaillance systémique de gestion",
                "Analyse des tendances des non-conformités à l'échelle d'un groupement de 200 éleveurs"
            ]
        },
        "specializations": ["Auditeur filières avicoles Label Rouge et plein air", "Auditeur bien-être animal et transport d'animaux vivants", "Auditeur de systèmes de management de la sécurité des denrées (ISO 22000)"],
        "studies": {
            "pathway": [
                {"step": "Formation socle", "title": "BTS Métiers de l'élevage (Productions Animales) — Groupe ESA", "desc": "Bases solides pour comprendre les réalités de terrain et dialoguer d'égal à égal avec les éleveurs."},
                {"step": "Licence Pro", "title": "Licence Pro Management de la Qualité dans les Filières Agricoles", "desc": "Formation spécialisée aux techniques d'audit et aux normes qualité."},
                {"step": "Bac +5", "title": "Diplôme d'Ingénieur Agronome du Groupe ESA", "desc": "Accès aux fonctions de responsable qualité de coopérative ou auditeur tierce partie pour des certificateurs internationaux."}
            ],
            "schools": [
                {"name": "Groupe ESA — Angers, France", "country": "France", "scope": "France"},
                {"name": "Instituts de formation en agroalimentaire et qualité — France", "country": "France", "scope": "France"},
                {"name": "Institut de Technologie Alimentaire (ITA) — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "EISMV Dakar (Master Qualité des Aliments d'Origine Animale) — Sénégal", "country": "Sénégal", "scope": "Afrique"}
            ],
            "certifications": ["Certificat d'Auditeur Interne IRCA / ICA", "Habilitation d'auditeur de la Charte des Bonnes Pratiques d'Élevage"],
            "schoolSubjects": ["Gestion de la qualité", "Droit agroalimentaire", "Zootechnie", "Communication & négociation"]
        },
        "career": {
            "sectors": ["Coopératives et groupements d'éleveurs (organisations de producteurs OP)", "Organismes certificateurs indépendants (Certipaq, Bureau Veritas, Ecocert)", "Grandes entreprises de découpe de viande et transformation laitière"],
            "employerTypes": ["Groupements d'éleveurs", "Organismes de certification", "Industries agroalimentaires"],
            "evolution": "Auditeur interne junior ➔ Auditeur qualité senior ➔ Responsable management de la qualité filières ➔ Directeur certification",
            "pros": "Métier très formateur qui permet de visiter une grande diversité d'élevages, utilité publique pour préserver la confiance du consommateur.",
            "cons": "Déplacements quotidiens en voiture, résistance psychologique parfois rencontrée chez des professionnels réticents au contrôle."
        },
        "gettingStarted": {
            "beginnerProject": "Télécharger la grille de la Charte des Bonnes Pratiques d'Élevage (CBPE) et en faire la lecture critique point par point.",
            "intermediateProject": "Réaliser un audit à blanc de la pharmacie vétérinaire d'un élevage pédagogique et rédiger 3 fiches de non-conformité fictives.",
            "advancedProject": "Construire un plan d'audit complet de 3 jours pour une coopérative bovine préparant une certification Label Rouge.",
            "portfolioIdeas": ["Grille d'évaluation d'audit personnalisée", "Rapport d'audit qualité blanc rédigé selon les règles ISO 19011"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "L'IA transcrit automatiquement les notes vocales d'audit et analyse les documents administratifs scannés pour repérer les incohérences de dates de traitement.",
            "automatedTasks": ["Génération assistée des rapports d'audit à partir de notes brutes", "Détection automatique d'incohérences de traçabilité dans les bases de données"],
            "emergingSkills": ["Utilisation d'outils d'audit assistés par IA générative"],
            "humanEdge": "Le discernement éthique sur place pour évaluer si une non-conformité résulte d'une négligence délibérée ou d'un aléa exceptionnel."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la certification qualité des denrées animales (lait pasteurisé, poulet de chair sain, œufs de consommation) est indispensable pour lutter contre les circuits informels à risque sanitaire et accéder aux supermarchés de Dakar et aux marchés de la sous-région.",
            "localSectors": ["Association Sénégalaise de Normalisation (ASN)", "Groupements interprofessionnels avicoles (IPAS)", "Laiteries modernes et industriels de la volaille"],
            "remoteWork": "Faible (audits physiques en élevages et abattoirs indispensables).",
            "entrepreneurship": "Création d'un cabinet d'audit qualité et d'accompagnement à la certification bio/équitable pour les producteurs de miel, de lait local et de volailles fermières."
        },
        "relatedJobSlugs": ["coordinateur-qhse-agro", "inspecteur-sanitaire", "responsable-collecte-laitiere", "technicien-centre-allotement"],
        "connectedFamilies": ["conseil-audit", "droit-justice", "gestion-finance"],
        "resources": [
            {"type": "article", "title": "Auditeur interne de la charte qualité — Groupe ESA", "url": "https://www.groupe-esa.com/productions-animales/les-metiers-de-la-production-animale/#auditeur-interne-de-la-charte-qualite", "source": "Groupe ESA"},
            {"type": "charte", "title": "Charte des Bonnes Pratiques d'Élevage — France", "url": "https://www.cbpe.fr/", "source": "Filières Élevage"}
        ],
        "sources": ["Groupe ESA", "Afnor Certification", "Institut de l'Élevage"],
        "interests": ["gerer-organiser", "nature-environnement", "conseiller-accompagner"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon le Groupe ESA, la réussite d'un auditeur repose sur sa capacité à ne pas se positionner en censeur ou en inspecteur de police, mais en allié du progrès de l'éleveur.",
            "pourquoi": "Un audit bien conduit donne envie à l'éleveur d'améliorer ses méthodes, alors qu'un audit autoritaire conduit à la dissimulation des problèmes réels.",
            "a_retenir": "L'évaluateur bienveillant qui transforme chaque contrôle en opportunité de progrès."
        }
    },

    # -----------------------------------------------------------------------
    # 16. INSPECTEUR SANITAIRE & VÉTÉRINAIRE
    # -----------------------------------------------------------------------
    {
        "id": "inspecteur-sanitaire",
        "slug": "inspecteur-sanitaire",
        "title": "Inspecteur Sanitaire & Vétérinaire des Filières Animales",
        "aliases": ["Inspectrice vétérinaire de santé publique", "Technicien supérieur des services du ministère de l'agriculture (DDPP)", "Contrôleur sanitaire en abattoir"],
        "icon": "🩺",
        "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Animale, Élevage & Filières",
        "domainId": "elevage-productions-animales",
        "subdomain": "Santé, bien-être & suivi des animaux",
        "sourceESA": True,
        "isEmerging": False,
        "level": "Concours de la fonction publique (Inspecteur de santé publique vétérinaire ou Technicien supérieur du Ministère de l'Agriculture)",
        "salary": "🇫🇷 France : 2 100 - 4 200 € net/mois selon grade et ancienneté (Source : Grille fonction publique d'État - DGAL / DDPP) • 🇸🇳 Sénégal : 300 000 - 1 200 000 FCFA / mois (Direction des Services Vétérinaires DSV)",
        "simpleDefinition": "L'inspecteur sanitaire veille à la stricte application des politiques sanitaires, de la santé animale, de la protection des animaux et de la sécurité sanitaire des aliments définies par l'État dans les élevages, les transports et les abattoirs.",
        "shortDescription": "Fiche documentée par le Groupe ESA, cet agent assermenté garantit la sécurité alimentaire de la population et veille au bien-être des animaux.",
        "longDescription": "Comme formulé sur la fiche officielle du Groupe ESA : 'Il veille à la bonne application des politiques sanitaires, médicosociales et sociales de l’État. Compétences indispensables : Connaître l’environnement institutionnel et administratif des ministères sociaux, avoir des notions de politiques sanitaires et sociales. Conduite de projet, traitement de l’information et compétences en management.' Dans le secteur agricole et animal, il intervient sous l'autorité du Ministère de l'Agriculture (DGAL / DDPP). Il contrôle la santé des bêtes vivantes (inspection ante-mortem), la salubrité des carcasses en abattoir (inspection post-mortem), le respect des règles de bien-être animal lors du transport et la traçabilité des médicaments vétérinaires.",
        "mainObjective": "Protéger la santé publique en éliminant les risques de zoonoses (tuberculose, grippe aviaire, salmonellose) et garantir le respect des lois sur le bien-être animal.",
        "companyRole": "Représentant régalien assermenté veillant à la santé publique et à la conformité légale des filières.",
        "species": ["Bovins", "Porcins", "Ovins", "Caprins", "Volailles", "Gibier d'élevage"],
        "workEnvironment": [
            "🥩 Abattoirs publics et privés pour le contrôle sanitaire quotidien des carcasses",
            "🚜 Exploitations d'élevage pour les contrôles inopinés de santé et de bien-être",
            "🏢 Services vétérinaires départementaux (DDPP en France, DSV au Sénégal)"
        ],
        "missions": [
            "Réaliser l'inspection sanitaire ante-mortem des animaux à leur arrivée à l'abattoir",
            "Inspecter minutieusement chaque carcasse et viscère (inspection post-mortem) pour prononcer la saisie en cas de pathologie",
            "Contrôler le respect des normes d'étourdissement et de protection animale lors de la mise à mort",
            "Mener des enquêtes épidémiologiques et gérer les foyers de maladies animales à déclaration obligatoire",
            "Délivrer les certificats sanitaires officiels pour l'exportation d'animaux vivants ou de produits carnés"
        ],
        "typicalDay": [
            {"time": "05:00", "title": "Prise de poste en abattoir industriel", "desc": "Inspection ante-mortem sur le quai de déchargement des bétaillères pour vérifier l'absence d'animaux blessés ou fiévreux."},
            {"time": "07:30", "title": "Inspection des carcasses sur la chaîne d'abattage", "desc": "Palpation des poumons, incision des ganglions lymphatiques et détection d'éventuelles lésions de cysticercose."},
            {"time": "11:00", "title": "Décision de saisie vétérinaire et rédaction du certificat", "desc": "Retrait officiel de la consommation humaine d'un lot de viande présentant des abcès multiples et information de l'éleveur."},
            {"time": "14:30", "title": "Contrôle inopiné de biosécurité en élevage de volailles", "desc": "Vérification des sas sanitaires, de l'étanchéité aux oiseaux sauvages et tenue du registre d'utilisation des antibiotiques."}
        ],
        "skills": {
            "technical": [
                "Anatomie, sémiologie et pathologie vétérinaire des animaux de boucherie",
                "Réglementation sanitaire européenne ('Paquet Hygiène') et droit administratif français",
                "Gestes techniques d'inspection post-mortem (incisions ganglionnaires, palpations d'organes)",
                "Gestion de crise sanitaire épidémique (isolement, abattage préventif, désinfection)"
            ],
            "human": [
                "Connaissance approfondie de l'environnement institutionnel de l'État (requis ESA)",
                "Sens de l'autorité régalienne, impartialité et intégrité morale irréprochable",
                "Capacité de traitement de l'information et compétences en management (requis ESA)",
                "Pédagogie et fermeté pour expliquer les décisions de saisie ou de sanction"
            ],
            "tools": [
                "Couteaux d'inspection sanitaire professionnels et fusils d'affûtage",
                "Tampons d'estampille sanitaire officielle et scellés vétérinaires",
                "Systèmes d'information sanitaires de l'État (SIGAL, TRACES pour l'Union Européenne)",
                "Thermomètres à sonde étalonnés et pH-mètres de viande"
            ],
            "analytical": [
                "Diagnostic différentiel rapide entre lésion physiologique bénigne et pathologie zoonotique",
                "Évaluation du risque épidémiologique à l'échelle d'un bassin d'élevage"
            ]
        },
        "specializations": ["Inspection sanitaire en abattoirs de grands ruminants et porcs", "Police sanitaire et veille épidémiologique (influenza aviaire, peste porcine)", "Contrôle vétérinaire aux frontières et douanes (postes frontaliers SIVEP)"],
        "studies": {
            "pathway": [
                {"step": "Diplôme de base", "title": "BTS Métiers de l'élevage (Productions Animales) — Groupe ESA ou DUT Biologie", "desc": "Connaissances solides en anatomie animale et systèmes d'élevage."},
                {"step": "Concours de catégorie B", "title": "Technicien Supérieur du Ministère de l'Agriculture (TSMA) — Spécialité Vétérinaire", "desc": "Formation rémunérée d'un an à l'INFOMA après réussite du concours public."},
                {"step": "Corps de catégorie A+", "title": "Docteur Vétérinaire ou Ingénieur Agronome ESA ➔ Concours ISPV", "desc": "Inspecteur de Santé Publique Vétérinaire après l'ENSV-VetAgro Sup."}
            ],
            "schools": [
                {"name": "Groupe ESA — Angers, France", "country": "France", "scope": "France"},
                {"name": "INFOMA (Institut National de Formation des Personnels du Ministère de l'Agriculture) — France", "country": "France", "scope": "France"},
                {"name": "EISMV (École Inter-États des Sciences et Médecine Vétérinaires) — Dakar, Sénégal", "country": "Sénégal", "scope": "Afrique"}
            ],
            "certifications": ["Prestation de serment d'agent public assermenté", "Habilitation officielle d'inspection sanitaire en abattoir"],
            "schoolSubjects": ["Pathologie animale", "Droit administratif", "Microbiologie", "Hygiène publique"]
        },
        "career": {
            "sectors": ["Ministère de l'Agriculture et de la Souveraineté Alimentaire (DGAL, DDPP, DRAAF)", "Postes d'inspection frontaliers des aéroports et ports de commerce", "Organismes internationaux de santé animale (WOAH / OIE, FAO, OMS)"],
            "employerTypes": ["État et ministères", "Directions départementales de la protection des populations", "Services sanitaires frontaliers"],
            "evolution": "Technicien supérieur inspecteur ➔ Chef d'équipe d'abattoir ➔ Chef de service de santé et protection animale en DDPP ➔ Inspecteur général",
            "pros": "Mission d'intérêt public fondamentale protégeant des millions de concitoyens, stabilité de l'emploi public, respect de la déontologie.",
            "cons": "Horaires très matinaux en abattoir (dès 4h ou 5h du matin), environnement froid et humide, confrontation parfois tendue avec les professionnels contrôlés."
        },
        "gettingStarted": {
            "beginnerProject": "Consulter le site officiel du Ministère de l'Agriculture pour comprendre les missions des DDPP dans la chaîne alimentaire.",
            "intermediateProject": "Étudier les 10 principales causes de saisie de carcasses de bovins en abattoir et rédiger une fiche synthétique illustrée.",
            "advancedProject": "Simuler une procédure d'alerte épidémiologique suite à la suspicion d'un cas de fièvre aphteuse dans une commune rurale.",
            "portfolioIdeas": ["Fiche de synthèse réglementaire sur le Paquet Hygiène", "Grille de contrôle de la protection animale en abattoir"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des systèmes de caméras intelligentes installés sur les chaînes de volailles détectent automatiquement les hématomes ou anomalies cutanées pour guider l'inspecteur.",
            "automatedTasks": ["Pré-tri optique automatisé des anomalies sur les carcasses de volailles", "Enregistrement vocal automatique des motifs de saisie"],
            "emergingSkills": ["Utilisation des outils d'aide à la décision par imagerie hyperspectrale"],
            "humanEdge": "La décision légale de saisie et la responsabilité morale de bloquer un lot pour protéger des vies humaines ne peuvent jamais être déléguées à une machine."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la Direction des Services Vétérinaires (DSV) et les docteurs et inspecteurs vétérinaires diplômés de l'EISMV Dakar exercent une veille cruciale aux abattoirs de Dakar (Sogas) et aux frontières contre les épizooties comme la péripneumonie contagieuse bovine et la peste porcine africaine.",
            "localSectors": ["Direction des Services Vétérinaires (Ministère de l'Élevage)", "Société de Gestion des Abattoirs du Sénégal (SOGAS)", "Postes vétérinaires de contrôle aux frontières (Rosso, Kidira, aéroport AIBD)"],
            "remoteWork": "Strictement impossible (présence physique quotidienne sur les postes d'abattage et de contrôle).",
            "entrepreneurship": "Non applicable (corps régalien d'État assermenté)."
        },
        "relatedJobSlugs": ["coordinateur-qhse-agro", "auditeur-interne-charte-qualite", "technicien-centre-allotement", "acheteur-estimateur-betail"],
        "connectedFamilies": ["droit-justice", "sante-biomedical", "securite-defense"],
        "resources": [
            {"type": "article", "title": "Inspecteur sanitaire — Groupe ESA", "url": "https://www.groupe-esa.com/productions-animales/les-metiers-de-la-production-animale/#inspecteur-sanitaire", "source": "Groupe ESA"},
            {"type": "officiel", "title": "Devenir inspecteur de santé publique vétérinaire — Ministère Agriculture", "url": "https://agriculture.gouv.fr/devenir-inspecteur-de-sante-publique-veterinaire", "source": "Ministère de l'Agriculture"}
        ],
        "sources": ["Groupe ESA", "Ministère de l'Agriculture et de la Souveraineté Alimentaire", "DGAL"],
        "interests": ["gerer-organiser", "nature-environnement", "conseiller-accompagner"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon les rapports du Ministère de l'Agriculture, en France, 100% des carcasses de grands animaux abattus dans les filières commerciales font l'objet d'une inspection sanitaire vétérinaire individuelle avant de pouvoir recevoir la marque de salubrité.",
            "pourquoi": "Ce contrôle permanent garantit que la viande arrivant chez le boucher ou au supermarché est totalement exempte de parasites ou d'infections transmissibles à l'homme.",
            "a_retenir": "La sentinelle régalienne de la santé publique au cœur des filières animales."
        }
    },

    # -----------------------------------------------------------------------
    # 17. COORDINATEUR FORMATION SÉCURITÉ EN MILIEU AGRICOLE
    # -----------------------------------------------------------------------
    {
        "id": "coordinateur-formation-securite",
        "slug": "coordinateur-formation-securite",
        "title": "Coordinateur Formation & Sécurité au Travail en Milieu Agricole",
        "aliases": ["Responsable prévention des risques professionnels agricoles", "Formateur sécurité élevage et machinisme", "Coordinateur sécurité chantier d'élevage"],
        "icon": "⛑️",
        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Animale, Élevage & Filières",
        "domainId": "elevage-productions-animales",
        "subdomain": "Bâtiments & infrastructures d'élevage",
        "sourceESA": True,
        "isEmerging": False,
        "level": "BTS Métiers de l'élevage, Licence Pro Sécurité au travail ou Master HSE",
        "salary": "🇫🇷 France : 2 300 - 3 700 € net/mois (~32 000 - 52 000 € brut/an, Source : Groupe ESA / MSA) • 🇸🇳 Sénégal : 350 000 - 1 200 000 FCFA / mois (Organismes de formation rurale, sécurité au travail)",
        "simpleDefinition": "Le coordinateur formation sécurité coordonne l'ensemble des actions réglementaires, de prévention des risques et de formation pratique aux gestes de sécurité sur les chantiers de construction d'élevage et au sein des exploitations agricoles.",
        "shortDescription": "Fiche documentée par le Groupe ESA, ce formateur prévient les accidents graves liés aux animaux lourds, au machinisme et aux chantiers d'élevage.",
        "longDescription": "Comme indiqué sur la fiche officielle du Groupe ESA : 'Il est responsable de la coordination de toutes les actions réglementaires et de prévention dans ce domaine. Il est en lien direct avec le maître d’ouvrage en charge du chantier sur lequel il intervient. Compétences indispensables : Coordination et communication.' L'agriculture et l'élevage comptent parmi les secteurs d'activité les plus accidentogènes (écrasement par des taureaux, accidents d'arbres de transmission de prise de force, chutes de toiture, asphyxie par les gaz de lisier, poussières d'ensilage). Il anime des formations pratiques, audite les chantiers et met en place des protocoles de sécurité adaptés à la réalité rurale.",
        "mainObjective": "Coordonner les démarches réglementaires et former les agriculteurs, salariés et bâtisseurs aux comportements sûrs pour éliminer les accidents mortels et invalidants.",
        "companyRole": "Pilote de la prévention des risques professionnels et de la formation des acteurs du monde rural.",
        "species": ["Toutes espèces d'élevage"],
        "workEnvironment": [
            "🚜 Exploitations agricoles pour les sessions de formation en situation réelle",
            "🏗️ Chantiers de construction et de modernisation de bâtiments d'élevage",
            "🏫 Centres de formation professionnelle agricole et caisses de protection sociale (MSA)"
        ],
        "missions": [
            "Coordonner les mesures de sécurité et de protection de la santé (SPS) lors des chantiers de bâtiments d'élevage",
            "Concevoir et animer des sessions de formation pratique (contention des animaux, conduite de tracteurs, gestes de secours)",
            "Auditer les exploitations agricoles et rédiger des préconisations d'amélioration des postes de travail",
            "Assurer la veille réglementaire sur les normes d'hygiène, de sécurité et d'équipements de travail",
            "Sensibiliser les jeunes en formation agricole (élèves de BTS PA, apprentis) à la culture de la prévention"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Visite de coordination SPS sur chantier de stabulation", "desc": "Point avec le maître d'ouvrage et les artisans charpentiers sur les filets antichute et l'échafaudage de toiture."},
            {"time": "10:30", "title": "Animation d'un atelier pratique sur la contention bovine", "desc": "Formation de 10 jeunes éleveurs aux réflexes d'approche des animaux et à l'utilisation sécurisée d'une cage de contention."},
            {"time": "14:00", "title": "Analyse d'un accident du travail en élevage porcin", "desc": "Enquête sur les causes d'un écrasement au pied et proposition d'aménagement d'une barrière de séparation automatique."},
            {"time": "16:30", "title": "Mise à jour des supports pédagogiques de sécurité", "desc": "Création d'un module vidéo court sur les risques d'intoxication au sulfure d'hydrogène (H2S) lors du brassage de lisier."}
        ],
        "skills": {
            "technical": [
                "Réglementation de la sécurité au travail et coordination SPS (Sécurité et Protection de la Santé)",
                "Connaissance approfondie des risques spécifiques en élevage (comportement animal, gaz toxiques, prise de force)",
                "Ingénierie de formation et techniques d'animation pédagogique pour adultes",
                "Ergonomie des postes de travail et analyse des gestes professionnels"
            ],
            "human": [
                "Qualités exceptionnelles de coordination et de diplomatie (souligné par l'ESA)",
                "Aisance de communication et écoute empathique des réalités de travail (requis ESA)",
                "Pédagogie bienveillante sans ton infantilisant envers les agriculteurs expérimentés",
                "Capacité d'adaptation face à des publics variés (artisans, exploitants, jeunes apprentis)"
            ],
            "tools": [
                "Équipements de protection individuelle (EPI) pédagogiques et mannequins de simulation",
                "Appareils de mesure des gaz toxiques (détecteurs 4 gaz pour lisier : H2S, CH4, CO, O2)",
                "Supports multimédias de formation et plateformes e-learning",
                "Grilles d'audit de sécurité des chantiers et registres SPS"
            ],
            "analytical": [
                "Évaluation de la hiérarchie des risques entre urgence vitale et confort de travail",
                "Mesure de l'impact des formations sur la baisse réelle de la sinistralité"
            ]
        },
        "specializations": ["Coordination SPS sur chantiers de bâtiments d'élevage", "Formation à la manipulation sécurisée et éthologie des animaux lourds", "Prévention des risques chimiques et respiratoires en élevage confiné"],
        "studies": {
            "pathway": [
                {"step": "Formation agricole socle", "title": "BTS Métiers de l'élevage (Productions Animales) — Groupe ESA", "desc": "Connaissance intime des gestes professionnels et de la conduite des animaux."},
                {"step": "Licence Pro / Titre pro", "title": "Licence Pro Hygiène et Sécurité au Travail ou Titre de Coordinateur SPS", "desc": "Acquisition de la qualification légale de coordination de chantier et de formateur d'adultes."},
                {"step": "Perfectionnement", "title": "Master Management des Risques Professionnels", "desc": "Accès aux fonctions de responsable régional de la prévention à la MSA ou dans de grands groupes coopératifs."}
            ],
            "schools": [
                {"name": "Groupe ESA — Angers, France", "country": "France", "scope": "France"},
                {"name": "Organismes de formation certifiés pour la coordination SPS — France", "country": "France", "scope": "France"},
                {"name": "Institut Supérieur de Formation Agricole et Rurale (ISFAR Bambey) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Attestation de compétence de Coordonnateur SPS de niveau 2 ou 3", "Certification de Formateur PRAP (Prévention des Risques liés à l'Activité Physique)"],
            "schoolSubjects": ["Droit du travail", "Ergonomie", "Pédagogie", "Zootechnie & machinisme"]
        },
        "career": {
            "sectors": ["Mutualité Sociale Agricole (MSA) — services prévention des risques", "Bureaux de contrôle et cabinets de coordination SPS", "Grandes coopératives d'élevage et groupements d'employeurs agricoles"],
            "employerTypes": ["Caisses de sécurité sociale agricole (MSA)", "Bureaux d'études SPS", "Centres de formation agricole (CFA/CFPPA)"],
            "evolution": "Formateur sécurité junior ➔ Coordinateur formation sécurité ➔ Responsable régional prévention ➔ Directeur santé-sécurité au travail",
            "pros": "Métier qui sauve concrètement des vies et évite des handicaps à vie, forte reconnaissance humaine, utilité sociale majeure.",
            "cons": "Résistance culturelle parfois tenace au changement dans certaines exploitations ('on a toujours fait comme ça')."
        },
        "gettingStarted": {
            "beginnerProject": "Relever les 5 principaux risques d'accidents dans une étable laitière et proposer des solutions simples à faible coût.",
            "intermediateProject": "Concevoir un guide illustré d'une page sur l'approche sécurisée d'un taureau ou d'un bélier reproducteur.",
            "advancedProject": "Bâtir un scénario pédagogique complet de 2 heures pour former des saisonniers aux risques de la faucheuse et de la pailleuse.",
            "portfolioIdeas": ["Plan Général de Coordination (PGC) simplifié pour étable", "Kit pédagogique illustré sur la manipulation d'animaux"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "La réalité virtuelle (casques VR) permet de former les futurs éleveurs aux réactions imprévisibles d'animaux en situation simulée sans risque corporel.",
            "automatedTasks": ["Suivi automatique des échéances de recyclage des habilitations sécurité", "Simulations immersives d'accidents en environnement 3D"],
            "emergingSkills": ["Animation de formations en réalité virtuelle immersive"],
            "humanEdge": "La conviction humaine et l'art de faire prendre conscience du danger à un exploitant chevronné sans braquer son amour-propre."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la modernisation des fermes avicoles et l'essor de la motorisation pastorale rendent indispensable la formation aux risques du matériel agricole, aux piqûres/morsures et à la manipulation des désinfectants et vaccins par les ouvriers agricoles.",
            "localSectors": ["Caisse de Sécurité Sociale du Sénégal (Direction de la Prévention des Risques)", "Centres de Formation Professionnelle Agricole (CFPA)", "Grandes exploitations agro-industrielles"],
            "remoteWork": "Strictement impossible (formations physiques et visites de chantiers).",
            "entrepreneurship": "Création d'un cabinet privé de formation mobile aux premiers secours et à la sécurité au travail pour les fermes et PME agricoles rurales."
        },
        "relatedJobSlugs": ["coordinateur-qhse-agro", "conseiller-batiment-elevage", "eleveur", "technicien-centre-allotement"],
        "connectedFamilies": ["education-formation", "btp-immobilier", "sante-biomedical"],
        "resources": [
            {"type": "article", "title": "Coordinateur formation sécurité — Groupe ESA", "url": "https://www.groupe-esa.com/productions-animales/les-metiers-de-la-production-animale/#coordinateur-formation-securite", "source": "Groupe ESA"},
            {"type": "guide", "title": "Santé et sécurité au travail en agriculture — MSA", "url": "https://www.msa.fr/sante-securite-au-travail", "source": "MSA"}
        ],
        "sources": ["Groupe ESA", "MSA (Mutualité Sociale Agricole)", "INRS"],
        "interests": ["conseiller-accompagner", "nature-environnement", "gerer-organiser"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon les statistiques de la MSA, la mise en place d'un quai d'embarquement aux normes et d'un couloir de contention sécurisé réduit de plus de 80% les accidents corporels lors du chargement des bovins dans les bétaillères.",
            "pourquoi": "Un animal effrayé développe une force musculaire de plusieurs tonnes : seule une infrastructure bien pensée protège l'éleveur sans violence.",
            "a_retenir": "L'ange gardien qui protège les vies humaines sur les fermes et les chantiers ruraux."
        }
    },

    # -----------------------------------------------------------------------
    # 18. ACHETEUR-ESTIMATEUR DE BÉTAIL
    # -----------------------------------------------------------------------
    {
        "id": "acheteur-estimateur-betail",
        "slug": "acheteur-estimateur-betail",
        "title": "Acheteur-Estimateur de Bétail",
        "aliases": ["Acheteur de bétail vif", "Estimateur d'animaux de boucherie", "Négociant en bestiaux"],
        "icon": "🐂",
        "image": "https://images.unsplash.com/photo-1546445317-29f4545e9d53?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Animale, Élevage & Filières",
        "domainId": "elevage-productions-animales",
        "subdomain": "Achats, approvisionnement & commerce du bétail",
        "sourceESA": True,
        "isEmerging": False,
        "level": "BTS Métiers de l'élevage (Productions Animales) ESA ou Licence Pro Commerce de Bétail",
        "salary": "🇫🇷 France : 2 400 - 4 500 € net/mois + commissions (~35 000 - 65 000 € brut/an, Source : Groupe ESA / FNB) • 🇸🇳 Sénégal : 350 000 - 1 500 000 FCFA / mois (Marchés aux bestiaux de Dahra, Touba, Tambacounda)",
        "simpleDefinition": "L'acheteur-estimateur de bétail parcourt les exploitations pour évaluer le poids, la conformation bouchère et l'état d'engraissement des animaux vivants, puis négocie leur achat au juste prix pour approvisionner abattoirs et centres d'allotement.",
        "shortDescription": "Fiche documentée par le Groupe ESA, ce négociateur de terrain possède un coup d'œil exceptionnel pour estimer la valeur marchande d'un animal vivant.",
        "longDescription": "Comme indiqué mot à mot sur le site officiel du Groupe ESA : 'Il est chargé d’approvisionner l’entreprise en animaux de boucherie et/ou en animaux d’élevage. L’acheteur-estimateur s’appuie sur sa bonne connaissance du marché et des productions animales pour conduire des négociations commerciales avec les vendeurs ou les acheteurs de bétail. Compétences indispensables : Sens commercial, connaissances du marché du bétail, vente et négociation.' Véritable figure centrale du commerce de bestiaux, il maîtrise la grille européenne EUROP de classement des carcasses (conformation musculaire de E à P, état d'engraissement de 1 à 5) et sait prédire avec précision le rendement en viande d'un animal simplement en l'observant et en le palpant.",
        "mainObjective": "Approvisionner son entreprise en cheptel de qualité conforme aux attentes des abattoirs et des distributeurs tout en négociant des tarifs équilibrés avec les éleveurs.",
        "companyRole": "Négociateur commercial clé et expert de l'estimation de la valeur marchande des animaux.",
        "species": ["Bovins viande et lait", "Veaux de boucherie", "Ovins", "Porcins", "Caprins"],
        "workEnvironment": [
            "🚜 Tournées quotidiennes dans les fermes et élevages de sa région",
            "🏢 Marchés aux bestiaux au cadran et centres de rassemblement / allotement",
            "🚗 Voiture professionnelle et smartphone connecté pour suivre les cours du bétail"
        ],
        "missions": [
            "Visiter les élevages partenaires pour estimer visuellement et par palpation la conformation et le poids des animaux",
            "Évaluer le rendement en carcasse et la classe d'engraissement selon la grille officielle EUROP",
            "Négocier le prix d'achat au kilo vif ou au kilo carcasse en tenant compte des cotations du marché national et européen",
            "Organiser le ramassage des animaux et planifier la logistique des bétaillères avec les transporteurs",
            "Garantir la conformité documentaire et sanitaire des animaux achetés (passeports bovins, attestations sanitaires)"
        ],
        "typicalDay": [
            {"time": "06:30", "title": "Présence au marché aux bestiaux au cadran", "desc": "Observation des lots de broutards et génisses présentés sous la halle et participation aux enchères électroniques."},
            {"time": "09:30", "title": "Tournée chez 4 éleveurs de taurillons", "desc": "Examen minutieux de 25 jeunes bovins en étable, palpation du dos et de la culotte, estimation du rendement à 62%."},
            {"time": "13:00", "title": "Négociation commerciale et conclusion des bons d'achat", "desc": "Discussion franche et équitable autour d'une table avec l'exploitant, signature du contrat d'achat."},
            {"time": "16:00", "title": "Organisation logistique avec le centre d'allotement", "desc": "Transmission des ordres d'enlèvement aux chauffeurs de bétaillères pour la livraison à l'abattoir le lendemain."}
        ],
        "skills": {
            "technical": [
                "Coup d'œil zootechnique d'estimation du poids vif et du rendement en viande carcasse",
                "Maîtrise parfaite de la grille officielle européenne EUROP (conformation et engraissement)",
                "Connaissance intime des cotations nationales et internationales du bétail vif et de la viande",
                "Réglementation de l'identification, du bien-être animal et de la traçabilité sanitaire"
            ],
            "human": [
                "Remarquable sens commercial, négociation et force de persuasion (requis ESA)",
                "Excellente aisance relationnelle et respect scrupuleux de la parole donnée",
                "Résistance au stress et rapidité de prise de décision lors des enchères",
                "Passion authentique pour le bétail et le contact avec les éleveurs"
            ],
            "tools": [
                "Ruban de barymétrie et pesons électroniques portables",
                "Applications professionnelles de cotation du bétail en temps réel (FranceAgriMer, Idele)",
                "Outils mobiles de saisie de bons de vente et vérification des passeports par code-barres",
                "Bâtons de guidage d'animaux homologués bien-être animal"
            ],
            "analytical": [
                "Calcul instantané de marge brute par tête en intégrant les coûts de transport et d'abattage",
                "Anticipation des fluctuations de cours en fonction des saisons et de la demande de la distribution"
            ]
        },
        "specializations": ["Acheteur de broutards et d'animaux d'engraissement pour l'exportation", "Estimateur de gros bovins de boucherie de races à viande (Charolaise, Limousine, Blonde d'Aquitaine)", "Acheteur d'agneaux de boucherie et ovins"],
        "studies": {
            "pathway": [
                {"step": "Diplôme de référence", "title": "BTS Métiers de l'élevage (Productions Animales) — Groupe ESA", "desc": "Acquisition des bases de la zootechnie, de l'anatomie musculaire et de l'alimentation animale."},
                {"step": "Licence Pro / Spécialisation", "title": "Licence Pro Commercialisation du Bétail et Viandes ou Titre de Négociant en Bestiaux", "desc": "Formation spécifique aux techniques d'estimation, au droit commercial et à la négociation."},
                {"step": "Ingénieur", "title": "Diplôme d'Ingénieur Agronome du Groupe ESA", "desc": "Accès aux postes de directeur des approvisionnements bétail de grands groupes industriels."}
            ],
            "schools": [
                {"name": "Groupe ESA — Angers, France", "country": "France", "scope": "France"},
                {"name": "Écoles et centres de formation aux métiers de la viande et du bétail — France", "country": "France", "scope": "France"},
                {"name": "Institut Supérieur de Formation Agricole et Rurale (ISFAR Bambey) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certificat de Négociant en Bestiaux Agréé (FNB)", "Certificat d'Aptitude Professionnelle au Transport d'Animaux Vivants (CAPTAV)"],
            "schoolSubjects": ["Zootechnie des races à viande", "Techniques de négociation", "Droit commercial", "Économie des filières"]
        },
        "career": {
            "sectors": ["Entreprises de négoce de bestiaux privées et coopératives agricoles de commercialisation", "Grands groupes d'abattage et de transformation de viande (Bigard, Elivia, SVA Jean Rozé)", "Organisations de producteurs (OP) bovines et ovines"],
            "employerTypes": ["Négoces de bestiaux", "Abattoirs industriels", "Coopératives d'éleveurs"],
            "evolution": "Acheteur junior ➔ Acheteur-estimateur confirmé ➔ Responsable des achats bétail régional ➔ Directeur des approvisionnements vifs",
            "pros": "Grande liberté de travail sur le terrain, adrénaline de la négociation, métier où la réputation et le talent de l'individu font toute la différence.",
            "cons": "Déplacements constants en voiture, horaires matinaux, pression financière lors des fluctuations brutales des cours de la viande."
        },
        "gettingStarted": {
            "beginnerProject": "Assister à une matinée d'enchères dans un marché aux bestiaux pour observer le rythme des transactions et le vocabulaire des négociants.",
            "intermediateProject": "S'entraîner à estimer le poids vif et la classe de conformation EUROP de 10 animaux à partir de photos ou vidéos commentées.",
            "advancedProject": "Calculer la marge prévisionnelle d'un lot de 20 taurillons en intégrant le coût d'achat vif, la perte de transport, le coût d'abattage et le prix carcasse.",
            "portfolioIdeas": ["Grille d'estimation visuelle de conformation bouchère", "Simulation d'achat-revente d'un lot d'animaux avec calcul de rentabilité"]
        },
        "aiImpact": {
            "level": "Modéré",
            "summary": "Des portiques de vision 3D à l'entrée des abattoirs scannent les animaux vivants pour prédire automatiquement leur poids et rendement en carcasse.",
            "automatedTasks": ["Scan 3D volumétrique de la masse musculaire des animaux", "Comparaison automatisée des cours des marchés régionaux"],
            "emergingSkills": ["Utilisation d'outils d'estimation morphologique 3D assistés par ordinateur"],
            "humanEdge": "La négociation en tête-à-tête avec l'éleveur au milieu de l'étable : aucune IA ne peut remplacer la poignée de main et le lien de confiance qui scellent une vente."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les marchés aux bestiaux hebdomadaires (loumas) de Dahra Djoloff, Touba, Missirah et Tambacounda brassent des dizaines de milliers de têtes de bovins et de moutons (notamment pour la fête de la Tabaski). Les acheteurs et courtiers traditionnels (téfankés) jouent un rôle économique colossal dans l'approvisionnement des villes.",
            "localSectors": ["Marchés à bétail traditionnels et modernes du Ferlo et du bassin arachidier", "Commerçants et chevillards des abattoirs de Dakar (Sogas)", "Filières d'importation de bétail du Mali et de Mauritanie"],
            "remoteWork": "Strictement impossible (métier 100% physique sur les marchés et dans les parcs de bétail).",
            "entrepreneurship": "Création d'une entreprise structurée d'achat, d'embouche et de revente de bétail vif calibré et garanti sain pour les boucheries de Dakar."
        },
        "relatedJobSlugs": ["technicien-centre-allotement", "responsable-achat-approvisionnement-agri", "inspecteur-sanitaire", "eleveur"],
        "connectedFamilies": ["commerce-marketing", "transport-logistique", "gestion-finance"],
        "resources": [
            {"type": "article", "title": "Acheteur-estimateur de bétail — Groupe ESA", "url": "https://www.groupe-esa.com/productions-animales/les-metiers-de-la-production-animale/#acheteur-estimateur-de-betail", "source": "Groupe ESA"},
            {"type": "filiere", "title": "Fédération Nationale du Bétail (FNB)", "url": "https://www.fnb.asso.fr/", "source": "FNB"}
        ],
        "sources": ["Groupe ESA", "Fédération Française des Commerçants en Bestiaux (FFCB)", "Institut de l'Élevage"],
        "interests": ["negocier-convaincre", "nature-environnement", "donnees-chiffres"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon les négociants chevronnés et les formateurs du Groupe ESA, un bon estimateur de bétail est capable de deviner le poids d'un taureau de 800 kg à 10 kilos près, simplement en le regardant marcher et en posant une main sur ses reins.",
            "pourquoi": "Ce coup d'œil unique s'acquiert par la pratique intensive de milliers d'observations reliant la morphologie de l'animal vivant au ticket de pesée final de l'abattoir.",
            "a_retenir": "L'expert du coup d'œil et de la négociation qui valorise le travail d'élevage."
        }
    },

    # -----------------------------------------------------------------------
    # 19. RESPONSABLE ACHAT & APPROVISIONNEMENT AGROALIMENTAIRE
    # -----------------------------------------------------------------------
    {
        "id": "responsable-achat-approvisionnement-agri",
        "slug": "responsable-achat-approvisionnement-agri",
        "title": "Responsable Achat & Approvisionnement en Matières Premières Agricoles",
        "aliases": ["Acheteur matières premières agricoles", "Responsable approvisionnement usine d'aliment", "Trader céréales et oléoprotéagineux"],
        "icon": "📦",
        "image": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Animale, Élevage & Filières",
        "domainId": "elevage-productions-animales",
        "subdomain": "Achats, approvisionnement & commerce du bétail",
        "sourceESA": True,
        "isEmerging": False,
        "level": "Bac +5 / Ingénieur Agronome ESA ou Master Achats Internationaux",
        "salary": "🇫🇷 France : 3 000 - 5 200 € net/mois (~42 000 - 72 000 € brut/an, Source : Groupe ESA / APEC) • 🇸🇳 Sénégal : 500 000 - 1 800 000 FCFA / mois (Grandes industries agroalimentaires, Grands Moulins, provenderies)",
        "simpleDefinition": "Le responsable achat approvisionnement assure toutes les opérations d'achats de matières premières agricoles (céréales, tourteaux, prémix, ingrédients laitiers) et définit la politique d'achats stratégique de l'entreprise pour sécuriser les usines au meilleur coût.",
        "shortDescription": "Fiche documentée par le Groupe ESA, ce stratège des achats gère des millions d'euros de matières premières sur les marchés mondiaux et locaux.",
        "longDescription": "Comme l'énonce mot pour mot la fiche officielle du Groupe ESA : 'Il est chargé d’assurer toutes les opérations d’achats de matières premières et de leurs approvisionnements. À cet effet, il est amené à mettre en place une politique d’achats selon le domaine d’activités de l’entreprise pour laquelle il travaille. Compétences indispensables : Parfaite maîtrise des outils de gestion de projet, solides connaissances en vente et en négociation, excellentes connaissances dans la gestion d’entreprise. Réactif et déterminé, bien organisé, esprit fin et habile.' Dans l'industrie des productions animales et de l'alimentation du bétail, il achète les céréales (blé, maïs, orge), les tourteaux de soja et colza, les acides aminés et minéraux, en anticipant les cours mondiaux et les risques de rupture logistique.",
        "mainObjective": "Garantir un approvisionnement continu, sûr et au meilleur coût des usines de transformation tout en appliquant des critères de traçabilité et de durabilité.",
        "companyRole": "Négociateur stratégique de premier plan protégeant les marges financières et la continuité industrielle de l'entreprise.",
        "species": ["Toutes filières animales et végétales associées"],
        "workEnvironment": [
            "🏢 Sièges de grands groupes agroalimentaires, coopératives et usines d'alimentation animale",
            "💻 Salle de marchés matières premières et écrans de cotation Euronext/CBOT",
            "✈️ Déplacements ponctuels chez les fournisseurs et ports de commerce"
        ],
        "missions": [
            "Élaborer et mettre en œuvre la politique d'achats de matières premières de l'entreprise",
            "Négocier les contrats d'approvisionnement à terme (prix, volumes, qualité, délais de livraison)",
            "Suivre au quotidien les marchés financiers agricoles (cotations Euronext, Chicago Board of Trade)",
            "Auditer et référencer les fournisseurs de matières premières selon des critères de qualité et durabilité (soja non déforesté)",
            "Superviser la chaîne logistique d'approvisionnement des silos usines (bateaux, trains, camions)"
        ],
        "typicalDay": [
            {"time": "08:00", "title": "Revue des cours des marchés agricoles mondiaux", "desc": "Analyse de la clôture du CBOT de Chicago et des cours Euronext du blé et du colza après les rapports USDA."},
            {"time": "10:00", "title": "Négociation d'un contrat de tourteau de colza", "desc": "Discussion avec un grand triturateur d'oléagineux pour verrouiller un approvisionnement de 15 000 tonnes pour l'hiver."},
            {"time": "14:00", "title": "Point de crise logistique avec l'usine d'aliment", "desc": "Résolution d'un retard de livraison de phosphate minéral par réacheminement d'un camion depuis un port secondaire."},
            {"time": "16:30", "title": "Élaboration de la stratégie d'achats durables", "desc": "Sélection d'une nouvelle filière d'approvisionnement en protéines végétales locales garanties 100% françaises."}
        ],
        "skills": {
            "technical": [
                "Marchés à terme agricoles (Euronext, CBOT), instruments de couverture (hedging, options)",
                "Gestion des contrats commerciaux internationaux (Incoterms, droit des contrats d'achats)",
                "Gestion de projet complexe et supply chain agro-industrielle (requis ESA)",
                "Connaissance des propriétés technologiques et nutritionnelles des matières premières animales et végétales"
            ],
            "human": [
                "Esprit fin, habile, réactif et déterminé (souligné mot pour mot par l'ESA)",
                "Excellente organisation méthodique et gestion de stress de marché (requis ESA)",
                "Talent de négociateur de haut niveau et solidité relationnelle (requis ESA)",
                "Vision stratégique et capacité d'anticipation géopolitique et climatique"
            ],
            "tools": [
                "Terminaux de marchés financiers et d'informations agricoles (Bloomberg, Reuters, Tallage/Stratégie Grains)",
                "ERP de gestion d'entreprise et modules achats (SAP, Microsoft Dynamics)",
                "Outils d'optimisation logistique et de suivi des cargaisons de navires (maritime tracking)",
                "Tableaux de bord d'analyse des coûts de revient matière"
            ],
            "analytical": [
                "Analyse des bilans mondiaux offre-demande pour anticiper les retournements de cycles de prix",
                "Calcul de rentabilité comparative entre ingrédients de substitution formulés par l'usine"
            ]
        },
        "specializations": ["Achat de céréales et matières premières pour l'alimentation animale", "Trading d'ingrédients laitiers (poudres de lait, lactosérum, beurres industriels)", "Approvisionnements durables et filières décarbonées"],
        "studies": {
            "pathway": [
                {"step": "Diplôme d'excellence", "title": "Diplôme d'Ingénieur Agronome du Groupe ESA — Majeure Agroalimentaire / Économie", "desc": "La combinaison parfaite entre expertise technique du vivant et compétences de gestion."},
                {"step": "Spécialisation Bac +5", "title": "Master Achats Internationaux / Supply Chain (IAE ou École de Commerce)", "desc": "Maîtrise des techniques de négociation avancée et des marchés financiers."},
                {"step": "Double diplôme", "title": "Double diplôme Ingénieur ESA + Master en Commerce International", "desc": "Tremplin vers les postes de directeur des achats internationaux."}
            ],
            "schools": [
                {"name": "Groupe ESA — Angers, France", "country": "France", "scope": "France"},
                {"name": "Grandes écoles d'agronomie et de commerce — France", "country": "France", "scope": "France"},
                {"name": "Institut Supérieur de Management (ISM Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "BEM Dakar (Bordeaux Ecole de Management) — Sénégal", "country": "Sénégal", "scope": "Afrique"}
            ],
            "certifications": ["Certification CIPS (Chartered Institute of Procurement and Supply)", "Certification de Négociation sur Marchés à Terme"],
            "schoolSubjects": ["Économie internationale", "Gestion financière", "Agronomie", "Droit commercial"]
        },
        "career": {
            "sectors": ["Grandes firmes internationales de nutrition animale (Sanders/Avril, Cargill, InVivo, Neovia)", "Industries laitières et carnées majeures (Lactalis, Danone, Bigard)", "Négoces internationaux de grains et matières premières agricoles"],
            "employerTypes": ["Groupes agroalimentaires", "Coopératives céréalières et d'élevage", "Négoces internationaux"],
            "evolution": "Acheteur junior ➔ Responsable achats matières premières ➔ Directeur des achats groupe ➔ Directeur général adjoint des opérations",
            "pros": "Poste à très forte responsabilité stratégique, dimension internationale passionnante, rémunérations élevées.",
            "cons": "Forte pression liée à la volatilité quotidienne des cours, impact financier immédiat des erreurs de timing d'achat."
        },
        "gettingStarted": {
            "beginnerProject": "Suivre l'évolution du cours du blé meunier sur Euronext pendant 1 mois et identifier les facteurs météo ayant fait bouger les cours.",
            "intermediateProject": "Construire une matrice d'évaluation multicritères pour choisir entre 3 fournisseurs de tourteau de soja.",
            "advancedProject": "Rédiger une stratégie de couverture à terme pour sécuriser 50 000 tonnes de maïs face au risque de sécheresse estivale.",
            "portfolioIdeas": ["Stratégie d'achats de matières premières agricoles", "Simulation d'un appel d'offres d'ingrédients nutritionnels"]
        },
        "aiImpact": {
            "level": "Très Élevé",
            "summary": "L'IA et le machine learning analysent les images satellites de récoltes mondiales pour prédire les rendements et guider les achats optimaux à terme.",
            "automatedTasks": ["Veille continue et analyse prédictive des cours de matières premières", "Automatisation des passations de commandes récurrentes sur seuils de réapprovisionnement"],
            "emergingSkills": ["Utilisation de modèles d'IA prédictifs sur les cours agricoles"],
            "humanEdge": "Le flair relationnel et la négociation diplomatique avec les fournisseurs clés lors des crises majeures de pénurie mondiale."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, les responsables d'achats des grands groupes meuniers et provendiers (Grands Moulins de Dakar, Sedima, NMA) gèrent des importations vitales de centaines de milliers de tonnes de blé et de maïs tout en développant l'achat local de brisures de riz, de tourteau d'arachide et de maïs cultivé dans la vallée du fleuve Sénégal.",
            "localSectors": ["Grands Moulins de Dakar (GMD) et minoteries industrielles", "Provenderies et fabricants d'aliments avicoles", "Sociétés d'huileries et de transformation (Sonacos)"],
            "remoteWork": "Hybride (bureau de trading / télétravail possible pour l'analyse des marchés).",
            "entrepreneurship": "Création d'une centrale d'achats groupés d'intrants agricoles et de tourteaux pour les coopératives maraîchères et d'élevage de l'intérieur du pays."
        },
        "relatedJobSlugs": ["responsable-usine-aliment-betail", "acheteur-estimateur-betail", "controleur-gestion-usine-agri", "manager-agrofourniture"],
        "connectedFamilies": ["commerce-marketing", "gestion-finance", "transport-logistique"],
        "resources": [
            {"type": "article", "title": "Responsable achat approvisionnement — Groupe ESA", "url": "https://www.groupe-esa.com/productions-animales/les-metiers-de-la-production-animale/#responsable-achat-approvisionnement", "source": "Groupe ESA"},
            {"type": "formation", "title": "Formations commerce et gestion — Groupe ESA", "url": "https://www.groupe-esa.com/commerce-distribution-marketing/", "source": "Groupe ESA"}
        ],
        "sources": ["Groupe ESA", "APEC", "CNA (Conseil National des Achats)"],
        "interests": ["negocier-convaincre", "donnees-chiffres", "gerer-organiser"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon les experts en gestion de l'ESA, pour une usine d'aliments du bétail, une baisse de seulement 1,5% obtenue sur les prix d'achat des matières premières génère souvent plus de profit net qu'une augmentation de 10% du chiffre d'affaires des ventes.",
            "pourquoi": "Les matières premières représentent jusqu'à 75% du coût total de fabrication d'un aliment : la performance de l'acheteur est le premier moteur de la rentabilité de l'usine.",
            "a_retenir": "Le stratège financier qui négocie les récoltes du monde pour faire tourner nos usines."
        }
    },

    # -----------------------------------------------------------------------
    # 20. CONTRÔLEUR DE GESTION USINE AGROALIMENTAIRE
    # -----------------------------------------------------------------------
    {
        "id": "controleur-gestion-usine-agri",
        "slug": "controleur-gestion-usine-agri",
        "title": "Contrôleur de Gestion Usine Agroalimentaire & Filières Animales",
        "aliases": ["Contrôleur de gestion industrielle usine d'aliment", "Responsable du contrôle économique de production animale", "Contrôleur financier de site agroalimentaire"],
        "icon": "📊",
        "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Animale, Élevage & Filières",
        "domainId": "elevage-productions-animales",
        "subdomain": "Alimentation animale & agrofourniture",
        "sourceESA": True,
        "isEmerging": False,
        "level": "Master Contrôle de Gestion ou Ingénieur Agronome ESA avec spécialisation gestion / finance",
        "salary": "🇫🇷 France : 2 800 - 4 800 € net/mois (~40 000 - 68 000 € brut/an, Source : Groupe ESA / APEC Finance) • 🇸🇳 Sénégal : 500 000 - 1 700 000 FCFA / mois (Sites industriels laitiers, provenderies, abattoirs)",
        "simpleDefinition": "Le contrôleur de gestion usine pilote la performance économique et industrielle d'un site de production (usine d'aliments, laiterie, abattoir), calcule les coûts de revient, analyse les écarts budgétaires et évalue la rentabilité des nouveaux produits ou gammes.",
        "shortDescription": "Fiche officielle documentée par le Groupe ESA, ce copilote économique guide les décisions industrielles et le lancement de nouveaux produits.",
        "longDescription": "Comme indiqué sur la fiche officielle du Groupe ESA : 'Il définit le développement ou le lancement d’un produit ou d’une gamme de produit. Il commande des études de marché au service commercial pour connaître les besoins et les données relatives aux produits concurrents ou comparables. Compétences indispensables : Très bonne connaissance de son marché, capacités de synthèse et d’analyse, aisance relationnelle.' Cette fiche intègre ces missions clés d'analyse de marché et de rentabilité de lancement, combinées au cœur de métier du contrôleur de gestion industrielle : calcul des coûts de revient par tonne d'aliment fabriquée ou par litre de lait transformé, suivi des rendements matières, analyse des consommations énergétiques et élaboration des budgets de fonctionnement de l'usine.",
        "documentaryNote": "Note documentaire méthodologique : La fiche officielle du Groupe ESA décrit ce métier à travers la mission suivante : 'Il définit le développement ou le lancement d’un produit ou d’une gamme de produit. Il commande des études de marché au service commercial pour connaître les besoins et les données relatives aux produits concurrents ou comparables. Compétences : Très bonne connaissance de son marché, capacités de synthèse et d’analyse, aisance relationnelle.' Notre référentiel conserve scrupuleusement ces éléments d'études de rentabilité et d'analyse concurrentielle de lancement, tout en assurant le pilotage financier rigoureux des coûts de revient industriels dans les usines d'aliments et abattoirs.",
        "mainObjective": "Mesurer et optimiser la rentabilité des processus industriels, garantir la maîtrise des coûts de fabrication et valider la viabilité financière des innovations produits.",
        "companyRole": "Copilote économique et conseiller stratégique du directeur d'usine.",
        "species": ["Toutes filières animales et de transformation agroalimentaire"],
        "workEnvironment": [
            "🏭 Usines d'aliments du bétail, laiteries industrielles et abattoirs",
            "🏢 Bureau de direction industrielle et services financiers",
            "💻 Travail quotidien sur systèmes ERP, tableurs avancés et logiciels de Business Intelligence"
        ],
        "missions": [
            "Calculer les coûts de revient industriels (matières premières, main d'œuvre directe, énergie, amortissements)",
            "Analyser mensuellement les écarts entre les prévisions budgétaires et les réalisations en production",
            "Réaliser les études de rentabilité prévisionnelle (business cases) pour le lancement de nouveaux produits ou gammes",
            "Construire et animer les tableaux de bord d'indicateurs de performance industrielle (KPI) pour les chefs d'ateliers",
            "Participer à l'élaboration du budget annuel de fonctionnement et d'investissements du site de production"
        ],
        "typicalDay": [
            {"time": "08:15", "title": "Tournée en atelier et collecte des données de production", "desc": "Échange avec les chefs d'équipe sur les volumes ensachés la veille et le taux de rebuts matières."},
            {"time": "10:00", "title": "Calcul du coût de revient d'une nouvelle formule d'aliment", "desc": "Intégration du nouveau prix du tourteau et simulation du prix de vente minimum pour préserver la marge brute."},
            {"time": "14:00", "title": "Point budgétaire mensuel avec le directeur d'usine", "desc": "Présentation des dérives constatées sur la facture d'électricité et proposition de modulation des heures de broyage."},
            {"time": "16:30", "title": "Étude de rentabilité pour un investissement robotique", "desc": "Calcul du retour sur investissement (ROI) et de la VAN pour l'installation d'une banderoleuse automatique de palettes."}
        ],
        "skills": {
            "technical": [
                "Comptabilité analytique de gestion et calcul des coûts complets / coûts variables",
                "Gestion budgétaire, analyse financière et calcul du retour sur investissement (ROI, VAN)",
                "Connaissance intime des flux de production agro-industriels et pertes matières",
                "Très bonne connaissance de son marché et études de rentabilité de produits (requis ESA)"
            ],
            "human": [
                "Remarquables capacités de synthèse et d'analyse rigoureuse (souligné par l'ESA)",
                "Excellente aisance relationnelle et diplomatie avec les équipes de production (requis ESA)",
                "Pédagogie pour faire comprendre les enjeux financiers aux opérationnels de terrain",
                "Force de proposition pour identifier les sources d'économies d'énergie et de matières"
            ],
            "tools": [
                "ERP industriels (SAP FI-CO, Microsoft Dynamics 365, Sage X3)",
                "Outils avancés de Business Intelligence (Power BI, Tableau Software)",
                "Tableurs de modélisation financière avancée (Excel expert : Power Query, macros VBA)",
                "Logiciels de suivi de production d'usine (MES - Manufacturing Execution Systems)"
            ],
            "analytical": [
                "Décomposition fine des écarts de coût : effet volume, effet prix et effet mix produits",
                "Modélisation de scénarios de rentabilité en cas de flambée des cours de l'électricité ou du gaz"
            ]
        },
        "specializations": ["Contrôle de gestion en usine d'alimentation animale", "Contrôle financier en abattoir et valorisation de la carcasse", "Pilotage économique des lancements de produits agroalimentaires innovants"],
        "studies": {
            "pathway": [
                {"step": "Diplôme d'excellence", "title": "Diplôme d'Ingénieur Agronome du Groupe ESA — Majeure Économie / Gestion", "desc": "La double compétence rare et très prisée : compréhension technique de l'usine et maîtrise financière."},
                {"step": "Master Universitaire", "title": "Master Contrôle de Gestion et Audit Organisationnel (IAE / Université)", "desc": "Formation de référence en comptabilité de gestion et systèmes de pilotage."},
                {"step": "École de Management", "title": "Diplôme de Grande École de Commerce — Spécialisation Finance d'entreprise", "desc": "Accès aux postes de contrôleur financier de groupe agroalimentaire."}
            ],
            "schools": [
                {"name": "Groupe ESA — Angers, France", "country": "France", "scope": "France"},
                {"name": "Instituts d'Administration des Entreprises (IAE) et écoles de commerce — France", "country": "France", "scope": "France"},
                {"name": "Institut Supérieur de Management (ISM Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "CESAG (Centre Africain d'Études Supérieures en Gestion) — Dakar, Sénégal", "country": "Sénégal", "scope": "Afrique"}
            ],
            "certifications": ["Certification CMA (Certified Management Accountant)", "Certification Power BI Data Analyst"],
            "schoolSubjects": ["Contrôle de gestion", "Comptabilité financière", "Économie industrielle", "Statistiques"]
        },
        "career": {
            "sectors": ["Grandes usines de fabrication d'aliments du bétail", "Groupes coopératifs agroalimentaires régionaux et nationaux", "Industries laitières, fromagères et abattoirs industriels"],
            "employerTypes": ["Sites industriels agroalimentaires", "Groupes coopératifs agricoles", "Sociétés agro-industrielles multinationales"],
            "evolution": "Contrôleur de gestion junior ➔ Contrôleur de gestion usine ➔ Responsable contrôle de gestion industriel ➔ Directeur administratif et financier (DAF)",
            "pros": "Poste au cœur de toutes les décisions de l'usine, proximité concrète avec les ateliers de fabrication, fortes perspectives d'évolution vers la direction.",
            "cons": "Périodes de clôture mensuelle et budgétaire intenses, rôle parfois perçu comme inquisiteur par des chefs d'équipe s'il manque de pédagogie."
        },
        "gettingStarted": {
            "beginnerProject": "Créer un tableur simple calculant le coût de revient d'un gâteau en additionnant ingrédients, énergie et temps passé.",
            "intermediateProject": "Construire un tableau de bord mensuel de suivi des pertes matières pour une petite unité de transformation.",
            "advancedProject": "Réaliser une étude complète de rentabilité prévisionnelle (seuil de rentabilité, VAN, TRI) pour le lancement d'une nouvelle gamme d'aliments bio.",
            "portfolioIdeas": ["Tableau de bord de performance industrielle sous Power BI", "Modèle financier de calcul de coût de revient d'usine"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA automatise le rapprochement comptable et détecte en temps réel les dérives anormales de consommation d'énergie sur les broyeurs d'usine.",
            "automatedTasks": ["Rapprochement automatique des bons de pesée et des factures d'achat", "Détection automatisée des anomalies de coûts de fabrication"],
            "emergingSkills": ["Utilisation de l'IA pour l'analyse prédictive des coûts industriels"],
            "humanEdge": "Le dialogue de confiance avec les chefs d'atelier pour comprendre la réalité humaine derrière les chiffres d'une dérive budgétaire."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la rentabilité des provenderies industrielles et des laiteries modernes dépend d'une maîtrise au centime près des coûts de broyage, de granulation et de transport. Le contrôleur de gestion usine éclaire les investissements majeurs dans les zones industrielles de Diamniadio et Thiès.",
            "localSectors": ["Industries agroalimentaires de la zone industrielle de Dakar et Diamniadio", "Compagnies sucrières et meunières (CSS à Richard-Toll, GMD)", "Laiteries industrielles et unités d'aviculture intégrée"],
            "remoteWork": "Hybride (présence requise à l'usine / télétravail possible pour l'analyse de données financières).",
            "entrepreneurship": "Création d'un cabinet d'audit de gestion des coûts de revient pour les PME agroalimentaires locales en cours de formalisation."
        },
        "relatedJobSlugs": ["responsable-usine-aliment-betail", "responsable-achat-approvisionnement-agri", "manager-agrofourniture", "directeur-marketing-filiere-animale"],
        "connectedFamilies": ["gestion-finance", "direction-strategie", "industrie-mecanique"],
        "resources": [
            {"type": "article", "title": "Contrôleur de gestion usine — Groupe ESA", "url": "https://www.groupe-esa.com/productions-animales/les-metiers-de-la-production-animale/#controleur-de-gestion-usine", "source": "Groupe ESA"},
            {"type": "formation", "title": "Ingénieur agronome et gestion — Groupe ESA", "url": "https://www.groupe-esa.com/formation/ingenieur-agronome/", "source": "Groupe ESA"}
        ],
        "sources": ["Groupe ESA", "DFCG (Association des Directeurs Financiers et de Contrôle de Gestion)", "APEC"],
        "interests": ["donnees-chiffres", "gerer-organiser", "construire-fabriquer"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon les recruteurs de l'industrie agroalimentaire et le Groupe ESA, les profils combinant un diplôme d'ingénieur agronome et une compétence poussée en contrôle de gestion sont parmi les plus courtisés du marché avec des salaires de départ très attractifs.",
            "pourquoi": "Un financier classique ne comprend pas les contraintes biologiques des matières vivantes, tandis qu'un agronome gestionnaire parle à la fois le langage des meuniers et celui des banquiers.",
            "a_retenir": "Le copilote financier qui transforme les contraintes d'usine en rentabilité durable."
        }
    },

    # -----------------------------------------------------------------------
    # 21. DIRECTEUR MARKETING FILIÈRES ANIMALES
    # -----------------------------------------------------------------------
    {
        "id": "directeur-marketing-filiere-animale",
        "slug": "directeur-marketing-filiere-animale",
        "title": "Directeur Marketing Filières Animales & Agroalimentaires",
        "aliases": ["Directrice marketing nutrition animale", "Responsable marketing produits laitiers et carnés", "Chef de groupe marketing élevage"],
        "icon": "🎯",
        "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Animale, Élevage & Filières",
        "domainId": "elevage-productions-animales",
        "subdomain": "Filière viande & allotement",
        "sourceESA": True,
        "isEmerging": False,
        "level": "Bac +5 / Ingénieur Agronome ESA ou Master Marketing Agroalimentaire",
        "salary": "🇫🇷 France : 3 800 - 7 000 € net/mois (~55 000 - 100 000 € brut/an, Source : Groupe ESA / APEC) • 🇸🇳 Sénégal : 700 000 - 2 500 000 FCFA / mois (Grandes marques agroalimentaires, laiteries, volailles)",
        "simpleDefinition": "Le directeur marketing élabore et met en place les plans, stratégies et actions marketing pour développer la vente de produits, aliments pour animaux ou denrées agroalimentaires, en répondant aux attentes sociétales et aux tendances de consommation.",
        "shortDescription": "Fiche officielle documentée par le Groupe ESA, ce stratège créatif valorise les produits des filières animales et conçoit les marques de demain.",
        "longDescription": "Comme indiqué mot à mot sur le site officiel du Groupe ESA : 'Le directeur du marketing élabore et met en place des plans et actions marketing pour développer la vente de biens ou services d’une entreprise. Compétences indispensables : Gestion, finances, management du personnel, techniques commerciales, créativité et communication.' Dans le secteur des productions animales et de l'agroalimentaire, il pilote l'image des marques (produits laitiers, œufs, charcuteries, viandes sous label, gammes d'alimentation animale écoresponsables). Il analyse les études de marché, anticipe les attentes citoyennes en matière de bien-être animal et d'origine locale, et coordonne le lancement des nouveaux packagings et campagnes médiatiques.",
        "mainObjective": "Définir l'identité de marque, maximiser la part de marché des produits de la filière et valoriser économiquement le travail des éleveurs auprès des distributeurs et consommateurs.",
        "companyRole": "Stratège de l'image de marque et chef d'orchestre de la croissance commerciale de l'entreprise.",
        "species": ["Toutes filières animales et de transformation"],
        "workEnvironment": [
            "🏢 Sièges de grandes entreprises agroalimentaires, coopératives et firmes de nutrition",
            "💻 Réunions avec agences de communication, instituts de sondage et distributeurs",
            "🛒 Visites en grandes surfaces et salons professionnels (SIA Paris, SPACE Rennes)"
        ],
        "missions": [
            "Définir la stratégie marketing globale (mix-marketing : produit, prix, distribution, communication)",
            "Commander et analyser les panels consommateurs (Kantar, Nielsen) et études d'attentes sociétales",
            "Piloter le développement des nouveaux produits en lien étroit avec la R&D et les usines",
            "Concevoir les campagnes de communication digitales, publicitaires et de relations presse",
            "Manager l'équipe de chefs de produits, chargés de communication et graphistes"
        ],
        "typicalDay": [
            {"time": "09:00", "title": "Comité de direction marketing et innovation", "desc": "Revue des parts de marché du dernier yaourt fermier enrichi en oméga-3 issu de vaches nourries au lin."},
            {"time": "11:00", "title": "Briefing créatif avec l'agence de communication", "desc": "Validation du nouveau packaging valorisant le portrait d'éleveurs partenaires et l'engagement bien-être animal."},
            {"time": "14:30", "title": "Analyse financière des marges par circuit de distribution", "desc": "Étude de rentabilité comparée entre vente en grande distribution et réseaux de magasins spécialisés bio."},
            {"time": "16:45", "title": "Préparation du lancement d'une nouvelle gamme d'aliment pour veaux", "desc": "Coordination avec le responsable R&D et le manager de l'agrofourniture pour caler l'argumentaire technique."}
        ],
        "skills": {
            "technical": [
                "Marketing stratégique et opérationnel B2B et B2C en secteur agricole et alimentaire",
                "Gestion financière de gamme (compte d'exploitation produit, ROI des campagnes, budgets)",
                "Techniques d'études de marché et analyse de panels consommateurs (Nielsen, Kantar)",
                "Management d'équipes pluridisciplinaires et techniques commerciales (requis ESA)"
            ],
            "human": [
                "Créativité foisonnante et sensibilité aux tendances sociétales (requis ESA)",
                "Excellentes qualités de communication et leadership inspirant (requis ESA)",
                "Rigueur de gestion et vision financière solide (requis ESA)",
                "Aisance dans la prise de parole publique et capacité de conviction"
            ],
            "tools": [
                "Bases de données d'études de marché et panels (Kantar Worldpanel, IRI, Nielsen)",
                "Outils de veille concurrentielle et social listening",
                "Logiciels de gestion de projets marketing (Asana, Monday)",
                "Outils d'analyse de trafic web et de marketing digital"
            ],
            "analytical": [
                "Détection des signaux faibles de consommation (consommation locale, bien-être animal, sans additifs)",
                "Évaluation de l'élasticité-prix de la demande face à l'inflation alimentaire"
            ]
        },
        "specializations": ["Marketing B2B de l'alimentation animale et agrofourniture", "Marketing des signes officiels de qualité (Label Rouge, AOP, Bio)", "Brand management et communication d'engagement sociétal des filières"],
        "studies": {
            "pathway": [
                {"step": "Diplôme de base", "title": "Diplôme d'Ingénieur Agronome du Groupe ESA — Majeure Marketing & Commerce", "desc": "La légitimité technique du monde agricole combinée aux outils modernes du marketing."},
                {"step": "Bac +5 Grande École", "title": "Master Marketing Agroalimentaire ou Diplôme d'École Supérieure de Commerce", "desc": "Approfondissement de la stratégie de marque et du marketing digital."},
                {"step": "Double diplôme", "title": "Double diplôme Ingénieur ESA + Master Spécialisé Marketing", "desc": "Parcours d'excellence ouvrant directement la direction marketing de grands groupes."}
            ],
            "schools": [
                {"name": "Groupe ESA — Angers, France", "country": "France", "scope": "France"},
                {"name": "Grandes écoles de commerce et d'agronomie — France", "country": "France", "scope": "France"},
                {"name": "BEM Dakar (Bordeaux Management School) — Sénégal", "country": "Sénégal", "scope": "Sénégal"},
                {"name": "Institut Supérieur de Management (ISM Dakar) — Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Certification en Stratégie de Marque (Brand Strategy)", "Certification Marketing Digital Avancé"],
            "schoolSubjects": ["Marketing stratégique", "Gestion de marque", "Finances & comptabilité", "Psychologie du consommateur"]
        },
        "career": {
            "sectors": ["Grandes marques nationales et internationales de produits laitiers et carnés", "Firmes d'alimentation animale et laboratoires vétérinaires", "Interprofessions des filières d'élevage (Cniel, Interbev, Inaporc)"],
            "employerTypes": ["Groupes agroalimentaires", "Coopératives polyvalentes", "Interprofessions agricoles"],
            "evolution": "Chef de produit junior ➔ Chef de groupe ➔ Directeur marketing ➔ Directeur général de division",
            "pros": "Métier stimulant à haute créativité, rôle central dans l'adaptation des filières aux attentes des citoyens, forte reconnaissance professionnelle.",
            "cons": "Pression permanente sur les parts de marché, exposition médiatique lors des débats sociétaux sur l'élevage."
        },
        "gettingStarted": {
            "beginnerProject": "Analyser le rayon produits laitiers d'un supermarché et relever comment 3 marques différentes valorisent le bien-être animal.",
            "intermediateProject": "Construire un plan de mix-marketing (4P) pour lancer un fromage fermier au lait cru auprès d'une clientèle urbaine jeune.",
            "advancedProject": "Élaborer une campagne marketing 360° pour une coopérative voulant lancer une gamme de poulets élevés sans antibiotiques.",
            "portfolioIdeas": ["Dossier de lancement de nouveau produit agroalimentaire", "Analyse critique de positionnement de marque laitière"]
        },
        "aiImpact": {
            "level": "Révolutionnaire",
            "summary": "L'IA générative conçoit des concepts de packaging en quelques secondes et analyse en temps réel des millions de posts sur les réseaux sociaux pour cerner l'opinion.",
            "automatedTasks": ["Génération de maquettes de visuels et prototypes de packagings", "Analyse de sentiment sur les marques alimentaires sur les réseaux sociaux"],
            "emergingSkills": ["Pilotage de campagnes marketing automatisées par algorithmes d'IA"],
            "humanEdge": "La créativité émotionnelle, l'authenticité de l'histoire racontée et le respect sincère du labeur des agriculteurs."
        },
        "africaContext": {
            "senegalInsight": "Au Sénégal, la valorisation du lait local pasteurisé (face au lait en poudre importé) et de la volaille locale (face aux découpes congelées) a été portée par des stratégies marketing puissantes créant des marques nationales fières (Kirène, Dolima, Sedima). Le directeur marketing y joue un rôle clé dans la souveraineté alimentaire.",
            "localSectors": ["Grandes marques laitières locales (Dolima, Laiterie du Berger, Kirène)", "Filière avicole nationale (Sedima, NMA)", "Industries de boissons et produits transformés sénégalais"],
            "remoteWork": "Hybride (stratégie en bureau / télétravail possible).",
            "entrepreneurship": "Création d'une agence de communication et de marketing spécialisée dans la valorisation des terroirs et des produits agro-pastoraux africains."
        },
        "relatedJobSlugs": ["manager-agrofourniture", "directeur-rd-agri-animal", "controleur-gestion-usine-agri", "responsable-achat-approvisionnement-agri"],
        "connectedFamilies": ["commerce-marketing", "communication-medias", "direction-strategie"],
        "resources": [
            {"type": "article", "title": "Directeur marketing — Groupe ESA", "url": "https://www.groupe-esa.com/productions-animales/les-metiers-de-la-production-animale/#directeur-marketing", "source": "Groupe ESA"},
            {"type": "formation", "title": "Formations marketing et commerce — Groupe ESA", "url": "https://www.groupe-esa.com/commerce-distribution-marketing/", "source": "Groupe ESA"}
        ],
        "sources": ["Groupe ESA", "Adetem (Association Nationale des Professionnels du Marketing)", "APEC"],
        "interests": ["creer-innover", "negocier-convaincre", "gerer-organiser"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon les analyses de marché, les marques agroalimentaires qui valorisent de manière transparente et vérifiée le bien-être animal et la juste rémunération des éleveurs connaissent une croissance trois fois plus rapide que les marques standard.",
            "pourquoi": "Le consommateur moderne ne veut plus simplement se nourrir : il veut voter avec sa fourchette pour soutenir une agriculture respectueuse des bêtes et des hommes.",
            "a_retenir": "Le porte-voix créatif qui donne du sens et de la valeur aux produits de la terre."
        }
    },

    # -----------------------------------------------------------------------
    # 22. CONSEILLER EN AFFAIRES EUROPÉENNES & POLITIQUES AGRICOLES (PAC)
    # -----------------------------------------------------------------------
    {
        "id": "conseiller-affaires-europeennes-agri",
        "slug": "conseiller-affaires-europeennes-agri",
        "title": "Conseiller en Affaires Européennes & Politiques Agricoles (PAC)",
        "aliases": ["Chargé d'affaires européennes filières animales", "Lobbyiste agricole européen", "Expert politiques agricoles et internationales"],
        "icon": "🇪🇺",
        "image": "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&auto=format&fit=crop&q=80",
        "familyId": "agriculture-agritech",
        "familyName": "Agriculture, Élevage & Agroalimentaire",
        "domain": "Production Animale, Élevage & Filières",
        "domainId": "elevage-productions-animales",
        "subdomain": "Conseil & accompagnement des élevages",
        "sourceESA": True,
        "isEmerging": False,
        "level": "Bac +5 / Master Affaires Européennes, Sciences Po ou Ingénieur Agronome ESA",
        "salary": "🇫🇷 France / Bruxelles : 3 200 - 6 000 € net/mois (~45 000 - 85 000 € brut/an, Source : Groupe ESA / institutions européennes) • 🇸🇳 Sénégal : 600 000 - 2 200 000 FCFA / mois (CEDEAO, UEMOA, Ministère de l'Élevage)",
        "simpleDefinition": "Le conseiller en affaires européennes analyse les législations de l'Union européenne relatives à l'agriculture et à l'élevage (PAC, Green Deal, bien-être animal), informe son organisme des évolutions réglementaires et défend les intérêts de son secteur auprès des décideurs européens.",
        "shortDescription": "Fiche documentée par le Groupe ESA, ce diplomate agronomique relie la réalité du terrain agricole aux décisions politiques de Bruxelles.",
        "longDescription": "Comme formulé mot à mot sur le site officiel du Groupe ESA : 'Il fait des recherches sur les actualités européennes, effectue une veille sur les sujets liés à l’Union européenne, informe son établissement sur l’ensemble du fonctionnement des institutions, ou le processus législatif, et fait remonter les opinions et sujets de son établissement aux institutions européennes. Compétences indispensables : Diplomatie, organisation, relationnel.' Acteur clé de la défense des filières d'élevage, il décrypte la Politique Agricole Commune (PAC), les accords commerciaux internationaux (Mercosur, CETA), les directives sur le bien-être animal et le pacte vert (Green Deal) pour permettre aux éleveurs et coopératives d'anticiper les mutations et de faire entendre leur voix à Bruxelles et Strasbourg.",
        "mainObjective": "Assurer une veille stratégique sur le droit communautaire et représenter avec diplomatie les intérêts des filières agricoles auprès de la Commission, du Parlement et du Conseil européen.",
        "companyRole": "Ambassadeur diplomatique et éclaireur politique et réglementaire de l'organisation.",
        "species": ["Toutes filières animales et agricoles"],
        "workEnvironment": [
            "🇪🇺 Bruxelles (Quartier européen), Strasbourg et capitales européennes",
            "🏢 Sièges de syndicats agricoles (FNSEA, Copa-Cogeca), coopératives et chambres d'agriculture",
            "💻 Travail continu de veille juridique, rédaction de notes de position et plaidoyer"
        ],
        "missions": [
            "Assurer une veille quotidienne sur les projets de règlements et directives européennes agricoles et environnementales",
            "Décrypter les mécanismes financiers et aides de la Politique Agricole Commune (PAC - 1er et 2nd piliers)",
            "Rédiger des notes de cadrage, amendements législatifs et positions officielles pour les parlementaires européens",
            "Organiser des rencontres d'influence et auditions auprès des commissaires européens et députés",
            "Informer et former les dirigeants agricoles de son pays sur les opportunités et contraintes européennes"
        ],
        "typicalDay": [
            {"time": "08:30", "title": "Revue des parutions officielles du Parlement et de la Commission", "desc": "Lecture analytique d'un projet de révision des normes sur le transport des animaux vivants en Europe."},
            {"time": "10:30", "title": "Réunion de travail au Copa-Cogeca à Bruxelles", "desc": "Coordination avec les représentants des éleveurs italiens, espagnols et allemands pour bâtir une position commune."},
            {"time": "14:00", "title": "Rendez-vous avec un eurodéputé de la commission AGRI", "desc": "Présentation d'amendements techniques argumentés pour préserver le pastoralisme et les aides couplées."},
            {"time": "16:30", "title": "Rédaction d'un bulletin d'alerte pour les coopératives", "desc": "Synthèse vulgarisée des nouvelles règles d'étiquetage d'origine pour les éleveurs de volailles et bovins."}
        ],
        "skills": {
            "technical": [
                "Fonctionnement détaillé des institutions européennes et du processus de codécision (trilogues)",
                "Droit agricole communautaire, architecture de la Politique Agricole Commune (PAC)",
                "Économie agricole internationale, règles de l'OMC et accords de libre-échange",
                "Anglais professionnel bilingue indispensable (langue de travail des institutions à Bruxelles)"
            ],
            "human": [
                "Sens aigu de la diplomatie et tact relationnel (souligné expressément par l'ESA)",
                "Organisation rigoureuse et suivi méthodique des calendriers législatifs (requis ESA)",
                "Capacités relationnelles d'exception et art du réseau d'influence (requis ESA)",
                "Pédagogie pour vulgariser des textes de lois arides auprès des éleveurs de base"
            ],
            "tools": [
                "Bases de données documentaires de l'Union européenne (Eur-Lex, registre de transparence)",
                "Plateformes de veille parlementaire et législative (EU Monitor, Politico Pro)",
                "Outils de cartographie des parties prenantes et d'analyse des votes parlementaires",
                "Réseaux sociaux professionnels et communication d'influence (LinkedIn, X/Twitter)"
            ],
            "analytical": [
                "Anticipation des impacts économiques concrets d'un article de loi européen sur une étable familiale",
                "Capacité de négociation de compromis entre intérêts nationaux divergents"
            ]
        },
        "specializations": ["Politique Agricole Commune (PAC) et aides directes aux élevages", "Bien-être animal, santé vétérinaire et sécurité alimentaire à l'échelle européenne", "Commerce international, accords bilatéraux et négociations à l'OMC"],
        "studies": {
            "pathway": [
                {"step": "Double profil d'élite", "title": "Diplôme d'Ingénieur Agronome du Groupe ESA — Majeure Économie & Politiques Publiques", "desc": "Compréhension fine des réalités du monde paysan que peu de juristes possèdent à Bruxelles."},
                {"step": "Sciences Po / Droit", "title": "Master Affaires Européennes ou Master Droit Européen (Sciences Po, Collège d'Europe de Bruges)", "desc": "Formation de référence pour maîtriser les rouages des institutions communautaires."},
                {"step": "Diplôme combiné", "title": "Ingénieur Agronome ESA + Master Affaires Européennes", "desc": "Le profil le plus recherché par les délégations agricoles et les cabinets d'affaires publiques."}
            ],
            "schools": [
                {"name": "Groupe ESA — Angers, France", "country": "France", "scope": "France"},
                {"name": "Collège d'Europe (Bruges / Natolin) & Instituts d'Études Politiques (Sciences Po) — Europe", "country": "Europe", "scope": "Europe"},
                {"name": "Université Cheikh Anta Diop (UCAD) / Faculté des Sciences Juridiques et Politiques — Dakar, Sénégal", "country": "Sénégal", "scope": "Sénégal"}
            ],
            "certifications": ["Enregistrement officiel sur le Registre de transparence de l'UE", "Certification en Affaires Publiques et Plaidoyer"],
            "schoolSubjects": ["Droit de l'Union européenne", "Économie agricole", "Relations internationales", "Anglais de négociation"]
        },
        "career": {
            "sectors": ["Organisations professionnelles agricoles européennes (Copa-Cogeca à Bruxelles)", "Chambres d'agriculture France (bureau de Bruxelles) et syndicats agricoles (FNSEA)", "Institutions européennes (Commission européenne - DG AGRI, Parlement européen, Conseil)"],
            "employerTypes": ["Représentations agricoles à Bruxelles", "Institutions européennes", "Cabinets de conseil en affaires publiques"],
            "evolution": "Chargé de mission affaires européennes junior ➔ Conseiller affaires européennes senior ➔ Directeur du bureau bruxellois ➔ Député européen ou haut fonctionnaire européen",
            "pros": "Métier intellectuellement passionnant au cœur des décisions politiques qui façonnent le continent, dimension multiculturelle et multilingue.",
            "cons": "Lenteur des processus législatifs européens (plusieurs années de négociations), éloignement parfois ressenti entre Bruxelles et le quotidien des fermes."
        },
        "gettingStarted": {
            "beginnerProject": "Consulter le portail Eur-Lex pour lire les grands objectifs de la PAC 2023-2027.",
            "intermediateProject": "Rédiger une note de position de 2 pages argumentant les conséquences de la suppression des cages en élevage de poules pondeuses.",
            "advancedProject": "Simuler une négociation en trilogue (Commission, Conseil, Parlement) sur la définition de l'agriculteur actif.",
            "portfolioIdeas": ["Note de plaidoyer européen sur le bien-être animal", "Fiche de synthèse vulgarisée de la PAC pour les éleveurs"]
        },
        "aiImpact": {
            "level": "Élevé",
            "summary": "L'IA analyse en quelques secondes des rapports législatifs européens de 500 pages pour extraire tous les amendements impactant l'élevage.",
            "automatedTasks": ["Synthèse automatique des débats parlementaires et des propositions de loi", "Traduction instantanée multilingue des textes d'amendements"],
            "emergingSkills": ["Utilisation de l'IA pour la veille textuelle réglementaire européenne"],
            "humanEdge": "La diplomatie de couloir, la poignée de main et l'art de bâtir des compromis politiques entre des pays aux traditions d'élevage opposées."
        },
        "africaContext": {
            "senegalInsight": "En Afrique de l'Ouest, les politiques régionales de la CEDEAO (ECOWAP) et de l'UEMOA régissent le commerce transfrontalier du bétail et la fiscalité sur les importations de produits animaux. Des conseillers en politiques régionales agricoles défendent les intérêts des pasteurs sahéliens et du Sénégal dans ces instances.",
            "localSectors": ["CEDEAO (Département Agriculture et Développement Rural)", "UEMOA (Direction de l'Élevage et de la Pêche)", "Réseau des Organisations Paysannes et de Producteurs Agricoles d'Afrique de l'Ouest (ROPPA)"],
            "remoteWork": "Hybride (déplacements institutionnels / travail de rédaction en bureau).",
            "entrepreneurship": "Création d'un cabinet de conseil en politiques agricoles régionales et plaidoyer pour les organisations paysannes ouest-africaines."
        },
        "relatedJobSlugs": ["ingenieur-conseil-productions-animales", "directeur-rd-agri-animal", "responsable-achat-approvisionnement-agri", "inspecteur-sanitaire"],
        "connectedFamilies": ["droit-justice", "direction-strategie", "communication-medias"],
        "resources": [
            {"type": "article", "title": "Conseiller en Affaires Européennes — Groupe ESA", "url": "https://www.groupe-esa.com/productions-animales/les-metiers-de-la-production-animale/#conseiller-en-affaires-europeennes", "source": "Groupe ESA"},
            {"type": "institution", "title": "Direction Générale Agriculture (DG AGRI) — Commission Européenne", "url": "https://agriculture.ec.europa.eu/index_fr", "source": "Commission Européenne"}
        ],
        "sources": ["Groupe ESA", "Commission Européenne", "Copa-Cogeca"],
        "interests": ["conseiller-accompagner", "negocier-convaincre", "gerer-organiser"],
        "saviezVous": {
            "statut": "metier_en_tension",
            "fait": "Selon les experts des affaires publiques agricoles, plus de 80% des réglementations encadrant l'élevage et l'agriculture en France trouvent leur origine directe dans les textes votés à Bruxelles.",
            "pourquoi": "Dans un marché unique européen, les normes sanitaires, environnementales et de concurrence doivent être harmonisées pour tous les pays membres.",
            "a_retenir": "L'ambassadeur de terrain qui fait entendre la voix des agriculteurs au cœur de l'Europe."
        }
    }
]

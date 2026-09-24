# -*- coding: utf-8 -*-
"""
Part 3 of Communication, Marketing, Médias & Création Data Module
Contains 21 High-depth Job Cards:
  Domaine 5 : Création & Design (9 métiers)
  Domaine 6 : Événementiel & Expérience (12 métiers)
Sources : École Supérieure de Publicité (ESP Métiers) & Studyrama Communication
"""

JOBS_PART3 = [
    # =========================================================================
    # DOMAINE 5 : CRÉATION & DESIGN
    # =========================================================================
    {
        "id": "directeur-artistique",
        "slug": "directeur-artistique",
        "title": "Directeur Artistique / DA Publicitaire & Graphique",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "creation-design",
        "subdomain": "Direction artistique & Création",
        "sourceKey": "ESP_STUDYRAMA",
        "description": "Le Directeur Artistique conçoit l'identité visuelle et l'esthétique générale des campagnes publicitaires et des marques. En binôme avec le concepteur-rédacteur, il transforme une idée stratégique en un univers visuel marquant (typographie, photographie, couleur, composition).",
        "shortDescription": "Donne vie visuellement aux idées des campagnes et définit l'identité esthétique des marques.",
        "missions": [
            "Concevoir le concept visuel global des campagnes publicitaires (print, digital, film, affichage).",
            "Travailler en étroite synergie avec le concepteur-rédacteur au sein du team créatif de l'agence.",
            "Créer les moodboards, les pistes graphiques et les roughs pour matérialiser les intentions artistiques.",
            "Diriger les séances de prises de vue avec les photographes, réalisateurs, stylistes et illustrateurs.",
            "Superviser l'exécution graphique finale assurée par les graphistes et animateurs motion.",
            "Présenter et défendre avec passion le parti-pris esthétique devant l'annonceur."
        ],
        "salaries": {
            "france": {
                "junior": "32 000 - 38 000 € brut/an",
                "senior": "50 000 - 80 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "450 000 - 800 000 FCFA net/mois",
                "senior": "1 100 000 - 2 000 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Agences de publicité de création, agences de design de marque, studios graphiques, maisons de mode et de luxe, freelance.",
        "typicalDay": "Direction artistique sur un plateau de shooting mode le matin, retouche de colorimétrie l'après-midi sur Photoshop et création d'une présentation de concept visuel pour une compétition d'agence.",
        "skills": {
            "technical": ["Suite Adobe Creative Cloud (Photoshop, Illustrator, InDesign, After Effects)", "Maîtrise virtuose de la typographie, des couleurs et de la composition", "Direction de shooting photo et vidéo", "Culture visuelle, artistique et cinématographique immense", "Outils de design d'interface (Figma)"],
            "human": ["Sensibilité esthétique exceptionnelle", "Capacité à conceptualiser et synthétiser visuellement", "Curiosité insatiable pour l'art contemporain et la pop-culture", "Force de conviction et charisme créatif"]
        },
        "studies": {
            "france": ["Master en Direction Artistique / Design Graphique (ESP, Penninghen, Gobelins, Estienne, ECV, Sup de Pub)"],
            "senegal": ["Master en Arts Visuels & Direction Artistique (École Nationale des Arts de Dakar, Sup de Co Dakar, BEM)"]
        },
        "career": "Directeur de Création, Associé Fondateur de Studio Créatif ou Directeur du Design de Marque.",
        "relatedJobSlugs": ["concepteur-redacteur", "directeur-de-creation", "designer-graphique"],
        "resources": [
            {"title": "Fiche Métier ESP — Directeur artistique", "url": "https://espub.org/metiers/directeur-artistique/"},
            {"title": "Studyrama — Fiche Directeur artistique", "url": "https://www.studyrama.com/formations/fiches-metiers/communication/directeur-artistique"}
        ],
        "sources": ["ESP", "Studyrama"],
        "saviezVous": "Certaines des campagnes visuelles les plus mémorables de l'histoire, comme les affiches Benetton par Oliviero Toscani, sont le fruit d'une vision de direction artistique sans compromis.",
        "interests": ["J'aime créer des visuels", "J'aime l'art et le design", "J'aime les marques"],
        "connectedFamilies": ["arts-spectacle-audiovisuel", "culture-patrimoine"]
    },
    {
        "id": "directeur-de-creation",
        "slug": "directeur-de-creation",
        "title": "Directeur de Création / Executive Creative Director (ECD)",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "creation-design",
        "subdomain": "Direction artistique & Création",
        "sourceKey": "ESP",
        "description": "Le Directeur de Création est le patron de la création d'une agence de publicité. Il définit la ligne artistique et philosophique de l'agence, manage l'ensemble des teams créatifs, valide les concepts avant les présentations clients et inspire des campagnes récompensées dans les plus grands festivals internationaux (Cannes Lions).",
        "shortDescription": "Dirige l'ensemble du pôle créatif de l'agence et insuffle l'audace conceptuelle des campagnes.",
        "missions": [
            "Définir la vision créative de l'agence et veiller au niveau d'exigence artistique de chaque projet.",
            "Manager, recruter et coacher une équipe de directeurs artistiques, concepteurs-rédacteurs et designers.",
            "Sélectionner les meilleures idées proposées par les teams créatifs et les pousser vers l'excellence.",
            "Défendre en personne les partis-pris créatifs les plus audacieux devant les grands patrons annonceurs.",
            "Piloter la participation de l'agence aux compétitions majeures et aux prix internationaux de création publicitaire.",
            "Représenter l'agence lors des jurys professionnels et des conférences de l'industrie publicitaire."
        ],
        "salaries": {
            "france": {
                "junior": "55 000 - 75 000 € brut/an",
                "senior": "85 000 - 150 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "1 200 000 - 2 000 000 FCFA net/mois",
                "senior": "2 500 000 - 4 500 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Grandes agences internationales de publicité (BETC, Publicis Conseil, Marcel, Ogilvy), agences boutiques indépendantes renommées.",
        "typicalDay": "Revue des idées de 4 binômes créatifs sur une campagne internationale automobile, arbitrage tranché sur le concept à retenir, déjeuner avec le Directeur Général de l'agence et appel avec un juré des Cannes Lions.",
        "skills": {
            "technical": ["Capacité infaillible à reconnaître une idée de génie en 3 secondes", "Maîtrise totale de la chaîne créative (concept, rédaction, image, film)", "Leadership d'artistes et gestion de personnalités créatives complexes", "Excellence oratoire et charisme de soutenance", "Vision des tendances culturelles d'avant-garde"],
            "human": ["Audace intellectuelle et goût du risque", "Générosité pour faire grandir ses équipes", "Résistance extrême à la pression", "Pugnacité et exigence sans faille"]
        },
        "studies": {
            "france": ["Parcours d'excellence en Direction Artistique ou Conception-Rédaction (ESP, Penninghen, Gobelins, CELSA)"],
            "senegal": ["Parcours reconnu de créatif senior primé, issu des Beaux-Arts, CESTI ou Grandes Écoles de communication"]
        },
        "career": "Président d'Agence, Chief Creative Officer (CCO) de réseau mondial ou Créateur de sa propre agence.",
        "relatedJobSlugs": ["directeur-artistique", "concepteur-redacteur", "directeur-de-clientele"],
        "resources": [
            {"title": "Fiche Métier ESP — Directeur de création", "url": "https://espub.org/metiers/directeur-de-creation/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "Les plus grands Directeurs de Création mondiaux ont autant d'influence sur la culture populaire que des réalisateurs de cinéma oscarisés.",
        "interests": ["J'aime diriger une équipe", "J'aime l'art et le design", "J'aime créer des visuels"],
        "connectedFamilies": ["arts-spectacle-audiovisuel", "droit-management"]
    },
    {
        "id": "directeur-creatif",
        "slug": "directeur-creatif",
        "title": "Directeur Créatif / Head of Creative",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "creation-design",
        "subdomain": "Direction artistique & Création",
        "sourceKey": "ESP",
        "description": "Le Directeur Créatif orchestre l'innovation créative et l'expression transversale d'une marque ou d'une agence pluridisciplinaire. À la convergence du design, de la narration numérique et de l'expérience produit, il impulse des concepts créatifs holistiques.",
        "shortDescription": "Pilote l'expression créative 360° et l'innovation conceptuelle chez l'annonceur ou en agence d'expérience.",
        "missions": [
            "Concevoir l'univers créatif global d'une marque à travers tous ses vecteurs d'expression (produit, digital, retail, événement).",
            "Encadrer des équipes pluridisciplinaires composées d'UX/UI designers, de copywriters, de scénographes et de vidéastes.",
            "Traduire la stratégie commerciale de l'entreprise en concepts créatifs originaux et mémorables.",
            "Veiller à la cohérence de l'expérience de marque dans le monde physique comme dans les environnements virtuels.",
            "Piloter des collaborations artistiques exclusives (capsules mode, partenariats créateurs, pop-up stores).",
            "Accompagner les comités de direction dans la transformation créative de leur modèle d'affaires."
        ],
        "salaries": {
            "france": {
                "junior": "45 000 - 60 000 € brut/an",
                "senior": "70 000 - 110 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "800 000 - 1 400 000 FCFA net/mois",
                "senior": "1 800 000 - 3 200 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Studios de design d'expérience, directions de marque chez les annonceurs (mode, luxe, tech, divertissement), agences d'innovation.",
        "typicalDay": "Atelier de design prospectif sur l'expérience en boutique connectée de 2030, validation de l'univers visuel d'un jeu vidéo promotionnel et présentation de la vision de marque aux actionnaires.",
        "skills": {
            "technical": ["Vision holistique du design thinking et du design produit", "Direction créative multicanale (physique et digitale)", "Compréhension des technologies immersives (3D, VR, AR, IA générative)", "Gestion de projets créatifs transversaux", "Culture encyclopédique du design et de l'architecture"],
            "human": ["Vision prospective et intuition visionnaire", "Leadership inspirant et fédérateur", "Esprit de synthèse et communication captivante", "Ouverture d'esprit radicale"]
        },
        "studies": {
            "france": ["Master en Design / Création & Innovation (ESP, ENSCI-Les Ateliers, Strate École de Design, Gobelins)"],
            "senegal": ["Master en Design & Management de l'Innovation (BEM Dakar, Sup de Co Dakar, École des Arts)"]
        },
        "career": "Chief Design Officer (CDO), Vice-Président Création & Expérience de Marque ou Entrepreneur créatif.",
        "relatedJobSlugs": ["directeur-de-creation", "directeur-artistique", "brand-strategist"],
        "resources": [
            {"title": "Fiche Métier ESP — Directeur créatif", "url": "https://espub.org/metiers/directeur-creatif/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "Dans les maisons de mode et les entreprises de la Silicon Valley, le titre de Creative Director est souvent le rôle le plus influent après le Directeur Général.",
        "interests": ["J'aime l'art et le design", "J'aime concevoir des projets", "J'aime diriger une équipe"],
        "connectedFamilies": ["arts-spectacle-audiovisuel", "architecture-urbanisme-btp"]
    },
    {
        "id": "chef-de-studio-creatif",
        "slug": "chef-de-studio-creatif",
        "title": "Chef de Studio Créatif / Studio Manager",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "creation-design",
        "subdomain": "Graphisme, Illustration & PAO",
        "sourceKey": "ESP",
        "description": "Le Chef de Studio Créatif supervise la production graphique opérationnelle au sein d'une agence ou d'un studio. Il planifie les charges de travail des graphistes, maquettistes et retoucheurs, garantit la conformité technique des fichiers et respecte rigoureusement les délais de livraison des campagnes.",
        "shortDescription": "Pilote la logistique opérationnelle, la charge de travail et le contrôle qualité des équipes graphiques.",
        "missions": [
            "Organiser et répartir les plannings quotidiens des graphistes, maquettistes, infographistes et monteurs vidéo.",
            "Contrôler la faisabilité technique des maquettes transmises par les directeurs artistiques.",
            "Vérifier la parfaite conformité des fichiers d'exécution (résolution, profils colorimétriques, débord, normes de gravure/impression).",
            "Gérer les relations avec les imprimeurs, photograveurs et développeurs techniques.",
            "Recruter et encadrer les équipes graphiques permanentes et les freelances en période de rush.",
            "Optimiser les flux de production (workflows numériques) pour gagner en rapidité et réduire les coûts d'exécution."
        ],
        "salaries": {
            "france": {
                "junior": "32 000 - 38 000 € brut/an",
                "senior": "45 000 - 62 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "450 000 - 750 000 FCFA net/mois",
                "senior": "1 000 000 - 1 700 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Studios graphiques intégrés en agence de communication, maisons d'édition, imprimeries de packaging, régies médias.",
        "typicalDay": "Point de charge du matin pour attribuer les urgences de 12 campagnes en cours, vérification du BAT (Bon à Tirer) d'un catalogue de 80 pages et call d'arbitrage de délai avec un chef de publicité.",
        "skills": {
            "technical": ["Maîtrise experte de la chaîne graphique print et web", "Gestion des flux de prépresse et profils ICC", "Logiciels de planification de charge (Monday, Wrike, Asana)", "Suite Adobe Creative Cloud (InDesign, Photoshop, Illustrator)", "Règles typographiques et de mise en page"],
            "human": ["Organisation et rigueur quasi militaire", "Calme olympien sous la pression des délais", "Fermeté bienveillante dans le management", "Sens du service et de la réactivité"]
        },
        "studies": {
            "france": ["Licence Pro / Master Gestion de Flux Graphiques & Multimédia (ESP, École Estienne, Gobelins)"],
            "senegal": ["Licence / Master en Gestion de Production Graphique & Multimédia (École des Arts Dakar, ESMT)"]
        },
        "career": "Directeur de Production Graphique, Responsable Fabrication & Print ou Directeur des Opérations d'Agence.",
        "relatedJobSlugs": ["designer-graphique", "maquettiste-pao", "directeur-artistique"],
        "resources": [
            {"title": "Fiche Métier ESP — Chef de studio", "url": "https://espub.org/metiers/chef-de-studio/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "Une simple erreur d'espace insécable ou un profil de couleur non converti en quadrichromie (CMJN) peut entraîner la réimpression de centaines de milliers de catalogues aux frais du studio.",
        "interests": ["J'aime organiser des événements ou projets", "J'aime créer des visuels", "J'aime diriger une équipe"],
        "connectedFamilies": ["arts-spectacle-audiovisuel"]
    },
    {
        "id": "designer-graphique",
        "slug": "designer-graphique",
        "title": "Designer Graphique / Graphiste Créatif",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "creation-design",
        "subdomain": "Graphisme, Illustration & PAO",
        "sourceKey": "ESP_STUDYRAMA",
        "description": "Le Designer Graphique conçoit les identités visuelles des marques et réalise une variété de supports de communication visuelle (logos, affiches, brochures, habillages de réseaux sociaux, packagings) en combinant typographies, couleurs, photographies et illustrations.",
        "shortDescription": "Crée les logos, identités visuelles et supports visuels print et digitaux pour donner une image forte aux marques.",
        "missions": [
            "Créer des logotypes et des chartes graphiques complètes (systèmes visuels, palettes de couleurs, hiérarchies typographiques).",
            "Mettre en page des supports de communication imprimés (dépliants, brochures corporate, affiches, rapports annuels).",
            "Concevoir des déclinaisons graphiques digitales (bannières web, visuels pour réseaux sociaux, templates d'emails).",
            "Créer des packagings produits attractifs et conformes aux contraintes réglementaires et industrielles.",
            "Préparer les fichiers sources pour l'impression ou l'intégration web en respectant les normes techniques.",
            "Collaborer avec les directeurs artistiques pour décliner les concepts clés en supports concrets."
        ],
        "salaries": {
            "france": {
                "junior": "26 000 - 32 000 € brut/an",
                "senior": "38 000 - 52 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "300 000 - 600 000 FCFA net/mois",
                "senior": "750 000 - 1 400 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Studios de création graphique, agences de publicité, services communication d'entreprises, imprimeries, statut indépendant (freelance).",
        "typicalDay": "Finalisation du logo d'une startup sur Illustrator avec ses 3 déclinaisons de couleurs, mise en page d'un livre blanc de 20 pages sur InDesign et export des visuels pour le lancement LinkedIn.",
        "skills": {
            "technical": ["Suite Adobe Creative Cloud experte (Illustrator, Photoshop, InDesign)", "Connaissances solides des règles typographiques et de composition", "Gestion de la chaîne graphique print et formats web", "Création vectorielle de logos et pictogrammes", "Bases d'outils digitaux (Figma, Canva pro)"],
            "human": ["Créativité et sensibilité esthétique", "Patience et minutie dans les détails", "Capacité à écouter et intégrer les retours clients", "Polyvalence et autonomie"]
        },
        "studies": {
            "france": ["BTS Design Graphique / DN MADE Graphisme / Bachelor Design (ESP, Estienne, ECV, LISAA, Sup de Pub)"],
            "senegal": ["Licence Pro en Design Graphique & Infographie (École Nationale des Arts de Dakar, ISM, Sup de Co)"]
        },
        "career": "Directeur Artistique Junior, Lead Graphic Designer, Packaging Designer ou Fondateur d'un Studio Graphique.",
        "relatedJobSlugs": ["directeur-artistique", "maquettiste-pao", "illustrateur"],
        "resources": [
            {"title": "Fiche Métier ESP — Designer graphique", "url": "https://espub.org/metiers/designer-graphique/"},
            {"title": "Studyrama — Fiche métier Graphiste", "url": "https://www.studyrama.com/formations/fiches-metiers/communication/graphiste"}
        ],
        "sources": ["ESP", "Studyrama"],
        "saviezVous": "Le célèbre logo Nike (le « Swoosh ») a été conçu en 1971 par Carolyn Davidson, une étudiante en graphisme, pour la modique somme de 35 dollars.",
        "interests": ["J'aime créer des visuels", "J'aime l'art et le design", "J'aime le travail manuel ou minutieux"],
        "connectedFamilies": ["arts-spectacle-audiovisuel"]
    },
    {
        "id": "illustrateur",
        "slug": "illustrateur",
        "title": "Illustrateur / Concept Artist Publicitaire",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "creation-design",
        "subdomain": "Graphisme, Illustration & PAO",
        "sourceKey": "STUDYRAMA",
        "description": "L'Illustrateur donne vie à des récits visuels à travers son coup de crayon et son style artistique singulier. En communication et publicité, il crée des visuels poétiques, percutants ou humoristiques pour les affiches, packagings, livres, jeux de société et campagnes digitales.",
        "shortDescription": "Crée des œuvres dessinées et illustrations originales sur mesure pour la publicité, la presse et l'édition.",
        "missions": [
            "Comprendre l'univers et le message d'une marque pour proposer un style d'illustration adapté (vectoriel, aquarelle, crayonné, 3D).",
            "Créer des roughs et esquisses préparatoires pour valider la composition et les personnages.",
            "Réaliser l'illustration finale sur tablette graphique (iPad Pro, Wacom Cintiq) ou techniques traditionnelles.",
            "Concevoir des mascottes de marques et des univers visuels narratifs complets.",
            "Fournir les fichiers numériques haute définition détourés et calibrés pour l'impression ou l'animation.",
            "Négocier et formaliser les contrats de cession de droits d'auteur en fonction des territoires et durées d'exploitation."
        ],
        "salaries": {
            "france": {
                "junior": "24 000 - 30 000 € brut/an (ou équivalent cachets/droits)",
                "senior": "36 000 - 65 000 € brut/an (ou équivalent droits d'auteur)",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "250 000 - 550 000 FCFA net/mois",
                "senior": "700 000 - 1 500 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Exercice majoritairement en indépendant (freelance), représenté par des agents d'illustrateurs, ou au sein d'agences d'édition, de presse et de jeux vidéo.",
        "typicalDay": "Recherches d'ambiance et esquisses le matin sur tablette pour la couverture d'un magazine international, mise en couleur numérique l'après-midi et échange sur les droits d'auteur avec un directeur artistique d'agence.",
        "skills": {
            "technical": ["Maîtrise du dessin anatomique, de la perspective et de la théorie des couleurs", "Outils de dessin numérique (Procreate, Photoshop, Illustrator)", "Développement d'une signature graphique reconnaissable", "Connaissance des droits de propriété intellectuelle", "Adaptation aux contraintes de formats multiples"],
            "human": ["Imagination et univers poétique", "Patience et persévérance", "Sensibilité narrative", "Capacité à gérer son activité d'indépendant"]
        },
        "studies": {
            "france": ["DN MADE Mention Graphisme / Écoles d'Art et Illustration (École Émile Cohl, Estienne, Gobelins, Penninghen)"],
            "senegal": ["Diplôme de l'École Nationale des Arts de Dakar (ENA) / Beaux-Arts"]
        },
        "career": "Illustrateur international renommé, Directeur Artistique d'Édition, Auteur de bande dessinée ou Concept Artist en studio d'animation.",
        "relatedJobSlugs": ["designer-graphique", "directeur-artistique", "infographiste"],
        "resources": [
            {"title": "Studyrama — Fiche métier Illustrateur", "url": "https://www.studyrama.com/formations/fiches-metiers/communication/illustrateur"}
        ],
        "sources": ["Studyrama"],
        "saviezVous": "La plupart des illustrateurs célèbres sont représentés par des agents artistiques qui négocient leurs commandes auprès des agences de publicité de New York, Paris ou Tokyo.",
        "interests": ["J'aime l'art et le design", "J'aime créer des visuels", "J'aime le travail manuel ou minutieux"],
        "connectedFamilies": ["arts-spectacle-audiovisuel", "culture-patrimoine"]
    },
    {
        "id": "infographiste",
        "slug": "infographiste",
        "title": "Infographiste 2D/3D / Concepteur Visuel",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "creation-design",
        "subdomain": "Graphisme, Illustration & PAO",
        "sourceKey": "ESP_STUDYRAMA",
        "description": "L'Infographiste maîtrise les outils informatiques de création d'images fixes et animées. En publicité et communication d'entreprise, il modélise des produits en 3D photoréaliste, conçoit des schémas d'infographie de données complexes et intègre des éléments visuels interactifs.",
        "shortDescription": "Spécialiste de la création d'images assistée par ordinateur, de la modélisation 3D et de la visualisation de données.",
        "missions": [
            "Modéliser en 3D des produits, packagings ou éléments architecturaux pour des visuels publicitaires hyperréalistes.",
            "Créer des infographies didactiques (Data Visualization) pour rendre digestes des rapports financiers ou d'impact RSE.",
            "Traiter et retoucher numériquement des photographies haute définition (chromie, détourage complexe, incrustations).",
            "Concevoir des éléments graphiques 2D animés pour des présentations d'entreprise ou des vidéos explicatives.",
            "Générer des rendus d'éclairage et de textures réalistes pour les campagnes de lancement commercial.",
            "Archiver et classer rigoureusement les banques d'assets visuels numériques de l'entreprise."
        ],
        "salaries": {
            "france": {
                "junior": "28 000 - 34 000 € brut/an",
                "senior": "38 000 - 55 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "320 000 - 650 000 FCFA net/mois",
                "senior": "800 000 - 1 500 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Studios de rendu 3D, agences de packaging, studios de post-production, services communication de l'industrie automobile et du luxe.",
        "typicalDay": "Texture et éclairage d'un flacon de parfum modélisé en 3D sur Blender, export de rendus en 4K et réalisation d'une infographie statistique pour le rapport d'activité annuel.",
        "skills": {
            "technical": ["Logiciels de 3D (Blender, Cinema 4D, 3ds Max, Maya)", "Moteurs de rendu (Octane, Redshift, Cycles)", "Suite Adobe (Photoshop, Illustrator, After Effects)", "Techniques d'éclairage, texturing et mapping UV", "Visualisation graphique de données (Data Viz)"],
            "human": ["Sens de l'observation et du réalisme physique", "Patience et précision technique", "Capacité d'apprentissage permanent des nouveaux outils", "Sens du rendu esthétique"]
        },
        "studies": {
            "france": ["BTS / Bachelor Infographie & 3D (ESP, Gobelins, Supinfocom Rubika, LISAA)"],
            "senegal": ["Licence Pro en Infographie & Modélisation 3D (ESMT, Institut Supérieur des Arts Dakar, ISM)"]
        },
        "career": "Lead Infographiste 3D, Texture Artist, Superviseur d'Effets Visuels (VFX) ou Directeur Artistique 3D.",
        "relatedJobSlugs": ["designer-graphique", "illustrateur", "maquettiste-pao"],
        "resources": [
            {"title": "Fiche Métier ESP — Infographiste", "url": "https://espub.org/metiers/infographiste/"},
            {"title": "Studyrama — Fiche métier Infographiste", "url": "https://www.studyrama.com/formations/fiches-metiers/communication/infographiste"}
        ],
        "sources": ["ESP", "Studyrama"],
        "saviezVous": "La quasi-totalité des catalogues automobiles ou de mobilier contemporain (comme IKEA) ne sont plus photographiés en studio, mais modélisés intégralement en infographie 3D.",
        "interests": ["J'aime la technologie", "J'aime créer des visuels", "J'aime le travail manuel ou minutieux"],
        "connectedFamilies": ["arts-spectacle-audiovisuel", "informatique-numerique"]
    },
    {
        "id": "maquettiste-pao",
        "slug": "maquettiste-pao",
        "title": "Maquettiste PAO / Opérateur Prépresse",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "creation-design",
        "subdomain": "Graphisme, Illustration & PAO",
        "sourceKey": "STUDYRAMA",
        "description": "Le Maquettiste PAO (Publication Assistée par Ordinateur) est l'expert technique de la mise en page. Il assemble textes, images et éléments graphiques selon la charte du projet pour produire des documents prêts pour l'impression (magazines, livres, catalogues, packagings) dans le respect absolu des règles typographiques.",
        "shortDescription": "Met en page avec une rigueur absolue les textes et images pour l'édition et l'impression de masse.",
        "missions": [
            "Intégrer les textes rédigés et les visuels dans les grilles de mise en page sous InDesign.",
            "Respecter scrupuleusement la feuille de style typographique (interlignage, césures, veuves et orphelines).",
            "Calibrer et convertir les images en haute résolution et en profils colorimétriques CMJN adaptés au papier choisi.",
            "Créer les gabarits, folios, tables des matières et index de documents éditoriaux volumineux.",
            "Effectuer les relectures techniques et corriger les coquilles signalées par les correcteurs d'édition.",
            "Générer les fichiers PDF certifiés conformes (normes PDF/X-1a ou PDF/X-4) destinés au flashage et à l'imprimerie."
        ],
        "salaries": {
            "france": {
                "junior": "24 000 - 29 000 € brut/an",
                "senior": "33 000 - 45 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "250 000 - 500 000 FCFA net/mois",
                "senior": "600 000 - 1 100 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Maisons d'édition littéraire et scolaire, rédactions de journaux et magazines, imprimeries de labeur, studios de photogravure.",
        "typicalDay": "Mise en page d'un numéro spécial de magazine d'information sous la pression du bouclage d'impression du soir, correction des césures de texte et génération du Bon à Tirer (BAT) numérique.",
        "skills": {
            "technical": ["Maîtrise absolue d'Adobe InDesign et de ses fonctionnalités avancées (styles GREP, scripts)", "Photoshop et Illustrator pour la préparation technique des assets", "Code typographique français et règles orthotypographiques", "Connaissance approfondie de la chaîne graphique et des papiers", "Normes d'exportation prépresse et imposition"],
            "human": ["Rigueur et sens du détail extrême", "Patience et concentration de longue durée", "Résistance au stress des heures de bouclage", "Respect des consignes des directeurs artistiques"]
        },
        "studies": {
            "france": ["Bac Pro Réalisation de Produits Plurimédias / BTS Édition / DN MADE Graphisme"],
            "senegal": ["BTS en Industries Graphiques & Multimédia (Centre d'Enseignement Technique Féminin, ESMT)"]
        },
        "career": "Premier Maquettiste, Chef d'Atelier PAO, Responsable de Fabrication d'Édition ou Chef de Studio Créatif.",
        "relatedJobSlugs": ["chef-de-studio-creatif", "designer-graphique", "infographiste"],
        "resources": [
            {"title": "Studyrama — Fiche métier Maquettiste PAO", "url": "https://www.studyrama.com/formations/fiches-metiers/communication/maquettiste"}
        ],
        "sources": ["Studyrama"],
        "saviezVous": "Le code typographique français comporte des règles fascinantes et séculaires : une mauvaise utilisation d'un espace insécable avant un point-virgule peut ruiner la réputation d'une maison d'édition prestigieuse.",
        "interests": ["J'aime le travail manuel ou minutieux", "J'aime créer des visuels", "J'aime écrire des textes"],
        "connectedFamilies": ["lettres-philosophie", "arts-spectacle-audiovisuel"]
    },
    {
        "id": "photographe-pro",
        "slug": "photographe-pro",
        "title": "Photographe Professionnel Publicitaire & Corporate",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "creation-design",
        "subdomain": "Photographie & Production visuelle",
        "sourceKey": "ESP_STUDYRAMA",
        "description": "Le Photographe Publicitaire et Corporate capture les images qui illustrent les campagnes, catalogues de mode, packagings et communications d'entreprises. En studio ou en extérieur, il maîtrise la lumière, le cadrage et la mise en scène pour sublimer les personnes, les produits et les lieux.",
        "shortDescription": "Maître de la lumière et du cadrage : sublime les produits, égéries et entreprises pour des visuels d'impact.",
        "missions": [
            "Concevoir le dispositif technique de prise de vue (éclairage studio, flashs, réflecteurs, optiques spécialisées).",
            "Mettre en scène les produits ou guider les modèles, dirigeants et collaborateurs lors des séances de shooting.",
            "Collaborer étroitement avec le directeur artistique pour concrétiser le parti-pris visuel du brief.",
            "Développer les fichiers RAW et réaliser la retouche numérique poussée sur Capture One et Photoshop.",
            "Gérer la logistique de prise de vue (repérages de décors, régie, autorisations d'occupation du domaine public).",
            "Négocier les droits de diffusion commerciale et préserver la propriété intellectuelle de ses œuvres."
        ],
        "salaries": {
            "france": {
                "junior": "26 000 - 32 000 € brut/an (ou forfaits journaliers de 400 à 800 €)",
                "senior": "45 000 - 85 000 € brut/an (ou forfaits journaliers de 1 200 à 3 000 €)",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "300 000 - 650 000 FCFA net/mois (ou 75 000 à 150 000 FCFA/jour)",
                "senior": "800 000 - 1 800 000 FCFA net/mois (ou 200 000 à 500 000 FCFA/jour)",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Studios photo professionnels indépendants, plateaux de tournage, déplacements sur sites industriels, agences de mannequins et de presse.",
        "typicalDay": "Shooting en studio toute la matinée pour une grande marque de joaillerie avec lumière complexe, sélection (éditing) des 20 meilleurs clichés l'après-midi et envoi des épreuves retouchées au DA.",
        "skills": {
            "technical": ["Technique experte de l'éclairage de studio (strobisme, boîtes à lumière, Fresnel)", "Maîtrise des boîtiers moyen format et plein format (Hasselblad, Sony, Canon)", "Capture One Pro et Adobe Photoshop pour la retouche", "Gestion de la colorimétrie et étalonnage d'écrans", "Gestion contractuelle des droits d'image et droits d'auteur"],
            "human": ["Œil photographique affûté et sens du cadre", "Aisance relationnelle pour mettre les modèles en confiance", "Patience et ténacité pour capter l'instant parfait", "Adaptabilité aux conditions météorologiques et lumineuses"]
        },
        "studies": {
            "france": ["Bac Pro Photographie / BTS Photographie / Écoles supérieures (Gobelins, École Nationale Supérieure Louis-Lumière, Arles)"],
            "senegal": ["Formation professionnelle de l'École Nationale des Arts de Dakar / Centre d'Études Spécialisées en Image"]
        },
        "career": "Photographe de renommée internationale, Réalisateur de films publicitaires ou Directeur de la Photographie (Chef Opérateur).",
        "relatedJobSlugs": ["directeur-artistique", "acheteur-art-tv-producer", "designer-graphique"],
        "resources": [
            {"title": "Fiche Métier ESP — Photographe professionnel", "url": "https://espub.org/metiers/photographe/"},
            {"title": "Studyrama — Fiche métier Photographe", "url": "https://www.studyrama.com/formations/fiches-metiers/communication/photographe"}
        ],
        "sources": ["ESP", "Studyrama"],
        "saviezVous": "La photographie publicitaire de nature morte (montres, parfums, nourriture) requiert souvent plus de 4 heures d'ajustement millimétrique de la lumière pour une seule prise de vue finale.",
        "interests": ["J'aime créer des visuels", "J'aime l'art et le design", "J'aime le travail manuel ou minutieux"],
        "connectedFamilies": ["arts-spectacle-audiovisuel", "culture-patrimoine"]
    },

    # =========================================================================
    # DOMAINE 6 : ÉVÉNEMENTIEL & EXPÉRIENCE
    # =========================================================================
    {
        "id": "event-manager",
        "slug": "event-manager",
        "title": "Event Manager / Chef de Projet Événementiel",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "evenementiel-experience",
        "subdomain": "Projets événementiels & Production",
        "sourceKey": "ESP_STUDYRAMA",
        "description": "L'Event Manager pilote la conception et l'organisation d'événements de toutes envergures (conventions d'entreprise, soirées de gala, lancements de produit, festivals, salons). Il coordonne tous les prestataires, gère le budget et garantit une expérience inoubliable pour les participants.",
        "shortDescription": "Chef d'orchestre de la conception et réalisation d'événements marquants de A à Z.",
        "missions": [
            "Prendre le brief client et élaborer un concept événementiel original en phase avec les objectifs et le budget.",
            "Rechercher et sélectionner les lieux réceptifs atypiques et négocier les conditions de location.",
            "Lancer les appels d'offres auprès des traiteurs, techniciens audiovisuels, artistes, fleuristes et agents de sécurité.",
            "Construire le rétroplanning minute par minute (déroulé technique de la soirée ou de la convention).",
            "Superviser l'installation, coordonner les équipes sur le terrain le jour J et résoudre les aléas en temps réel.",
            "Établir le bilan financier final de l'événement et analyser la satisfaction des participants via des questionnaires post-événement."
        ],
        "salaries": {
            "france": {
                "junior": "28 000 - 34 000 € brut/an",
                "senior": "42 000 - 65 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "350 000 - 650 000 FCFA net/mois",
                "senior": "900 000 - 1 650 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Agences d'événementiel corporate et grand public, directions de la communication de grands groupes, palais des congrès, structures culturelles et sportives.",
        "typicalDay": "Visite technique d'un domaine viticole pour un séminaire de 200 personnes, dégustation test avec le traiteur, calage des micros et des éclairages avec la régie son, et gestion des listes d'invités VIP.",
        "skills": {
            "technical": ["Gestion budgétaire événementielle et rentabilité", "Réglementation des Établissements Recevant du Public (ERP) et sécurité", "Scénographie et technique audiovisuelle de base", "Négociation avec un panel varié de fournisseurs", "Outils de billetterie et d'inscription en ligne"],
            "human": ["Résistance exceptionnelle au stress", "Réactivité et capacité d'improvisation", "Sens relationnel chaleureux et sens du service", "Rigueur d'organisation sans faille"]
        },
        "studies": {
            "france": ["Bachelor / Master en Événementiel & Relations Publiques (ESP, Sup de Pub, ISCOM, EFAP, Écoles de commerce)"],
            "senegal": ["Licence / Master en Gestion d'Événements & Communication (BEM Dakar, Sup de Co Dakar, ISM, CESTI)"]
        },
        "career": "Directeur d'Agence Événementielle, Directeur de la Communication Événementielle ou Fondateur de son agence de production.",
        "relatedJobSlugs": ["coordinateur-evenementiel", "charge-production-evenementielle", "responsable-evenements-corporate"],
        "resources": [
            {"title": "Fiche Métier ESP — Event Manager", "url": "https://espub.org/metiers/event-manager/"},
            {"title": "Studyrama — Fiche Chef de projet événementiel", "url": "https://www.studyrama.com/formations/fiches-metiers/communication/chef-de-projet-evenementiel"}
        ],
        "sources": ["ESP", "Studyrama"],
        "saviezVous": "Le métier de chef de projet événementiel est régulièrement classé parmi les métiers les plus stimulants mais aussi les plus intenses en raison du stress du direct où chaque seconde compte.",
        "interests": ["J'aime organiser des événements ou projets", "J'aime communiquer avec les gens", "J'aime convaincre"],
        "connectedFamilies": ["hotellerie-restauration-hospitalite", "droit-management"]
    },
    {
        "id": "coordinateur-evenementiel",
        "slug": "coordinateur-evenementiel",
        "title": "Coordinateur Événementiel / Event Coordinator",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "evenementiel-experience",
        "subdomain": "Projets événementiels & Production",
        "sourceKey": "ESP",
        "description": "Le Coordinateur Événementiel est le bras droit opérationnel du chef de projet. Sur le terrain comme au bureau, il coordonne les prestataires, gère les plannings des hôtes et hôtesses, assure l'accueil des invités et veille à ce que chaque détail logistique s'exécute avec fluidité.",
        "shortDescription": "Coordonne les aspects pratiques, opérationnels et humains le jour de l'événement et en amont.",
        "missions": [
            "Assister le chef de projet dans la recherche de prestataires et le suivi des devis.",
            "Recruter, briefer et superviser le personnel d'accueil (hôtes, hôtesses, voituriers, vestiaires).",
            "Gérer la logistique des invitations, des confirmations et de l'émargement sur place (badges, QR codes).",
            "Coordonner l'acheminement des matériels, de la signalétique et des cadeaux invités (goodies).",
            "Être le point de contact privilégié des intervenants et animateurs le jour J pour gérer leur prise en charge.",
            "Participer au démontage des installations et à la remise en état des lieux après l'événement."
        ],
        "salaries": {
            "france": {
                "junior": "25 000 - 30 000 € brut/an",
                "senior": "34 000 - 45 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "280 000 - 550 000 FCFA net/mois",
                "senior": "700 000 - 1 200 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Agences événementielles, hôtels haut de gamme avec espaces congrès, centres de séminaires, associations professionnelles.",
        "typicalDay": "Briefing de 15 hôtesses d'accueil à 7h30 pour un congrès médical, vérification du bon fonctionnement des scanners de badges, distribution des paniers repas et gestion des arrivées tardives d'intervenants.",
        "skills": {
            "technical": ["Utilisation des logiciels de billetterie et d'émargement (Eventbrite, Weezevent)", "Gestion logistique et coordination terrain", "Techniques d'accueil et de relationnel public", "Bases de secourisme et consignes de sécurité", "Aisance en anglais pour les événements internationaux"],
            "human": ["Énergie débordante et dynamisme", "Sourire et sens de l'hospitalité en toute circonstance", "Grande débrouillardise et réactivité", "Sens du travail en équipe"]
        },
        "studies": {
            "france": ["BTS Tourisme / BTS SAM / Bachelor Événementiel (ESP, IUT, Écoles spécialisées)"],
            "senegal": ["Licence Pro en Tourisme & Management Événementiel (UGB Saint-Louis, Sup de Co Dakar, ISM)"]
        },
        "career": "Chef de Projet Événementiel, Event Manager Senior ou Responsable de Salle de Réception.",
        "relatedJobSlugs": ["event-manager", "charge-production-evenementielle", "logisticien-evenementiel"],
        "resources": [
            {"title": "Fiche Métier ESP — Coordinateur événementiel", "url": "https://espub.org/metiers/coordinateur-evenementiel/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "Un coordinateur événementiel parcourt souvent plus de 15 kilomètres à pied à l'intérieur d'un centre de congrès au cours d'une seule journée d'événement.",
        "interests": ["J'aime organiser des événements ou projets", "J'aime communiquer avec les gens", "J'aime bouger et être actif"],
        "connectedFamilies": ["hotellerie-restauration-hospitalite"]
    },
    {
        "id": "charge-production-evenementielle",
        "slug": "charge-production-evenementielle",
        "title": "Chargé de Production Événementielle",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "evenementiel-experience",
        "subdomain": "Projets événementiels & Production",
        "sourceKey": "ESP",
        "description": "Le Chargé de Production Événementielle est le bâtisseur concret de l'événement. Il traduit le concept créatif en réalité physique et technique : structures éphémères, podiums, éclairages, sonorisation, écrans géants et sécurité globale du site.",
        "shortDescription": "Prend en charge la réalisation technique, la fabrication et l'installation concrète des événements.",
        "missions": [
            "Étudier la faisabilité technique des concepts créatifs et dimensionner les moyens matériels nécessaires.",
            "Établir les cahiers des charges techniques pour les prestataires de son, lumière, vidéo et structures modulaires.",
            "Négocier et passer les commandes auprès des fournisseurs techniques et loueurs de matériel.",
            "Obtenir les autorisations administratives nécessaires (commissions de sécurité, préfecture, mairie).",
            "Superviser les phases de montage (load-in), d'exploitation technique et de démontage (load-out) dans les règles de l'art.",
            "Faire respecter scrupuleusement les normes d'hygiène, de santé et de sécurité du travail sur les chantiers événementiels."
        ],
        "salaries": {
            "france": {
                "junior": "28 000 - 34 000 € brut/an",
                "senior": "40 000 - 58 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "350 000 - 650 000 FCFA net/mois",
                "senior": "850 000 - 1 500 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Agences de production d'événements, parcs d'expositions, festivals de musique, sociétés de prestation technique audiovisuelle.",
        "typicalDay": "Supervision du montage d'un chapiteau géant et de l'accroche d'écrans LED suspendus à 8 mètres de haut, vérification de la conformité électrique avec l'inspecteur du bureau de contrôle.",
        "skills": {
            "technical": ["Technique du spectacle et de l'événementiel (son, lumière, vidéo, structures)", "Réglementation de sécurité ERP, travail en hauteur et électricité", "Planification de chantiers et logiciels de plans techniques (AutoCAD, SketchUp)", "Gestion des approvisionnements et transports volumineux", "Contrôle budgétaire de production"],
            "human": ["Sens pratique et pragmatisme rigoureux", "Autorité naturelle sur un chantier technique", "Sang-froid et gestion des imprévus techniques", "Grande endurance physique"]
        },
        "studies": {
            "france": ["BTS Métiers de l'Audiovisuel / Licence Pro Régie et Production Événementielle (ESP, CFA du Spectacle)"],
            "senegal": ["Licence Pro en Techniques Audiovisuelles & Gestion de Spectacle (Institut des Métiers des Arts et de la Culture, ESMT)"]
        },
        "career": "Directeur Technique Événementiel, Régisseur Général ou Directeur de Production en Agence.",
        "relatedJobSlugs": ["regisseur-general-evenementiel", "logisticien-evenementiel", "event-manager"],
        "resources": [
            {"title": "Fiche Métier ESP — Chargé de production événementielle", "url": "https://espub.org/metiers/charge-de-production-evenementielle/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "Sur des festivals majeurs, le chargé de production coordonne souvent des centaines de tonnes de matériel et des kilomètres de câblage déployés en moins de 48 heures.",
        "interests": ["J'aime bouger et être actif", "J'aime le travail manuel ou minutieux", "J'aime la technologie"],
        "connectedFamilies": ["arts-spectacle-audiovisuel", "architecture-urbanisme-btp"]
    },
    {
        "id": "responsable-evenements-corporate",
        "slug": "responsable-evenements-corporate",
        "title": "Responsable Événements Corporate & Séminaires",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "evenementiel-experience",
        "subdomain": "Corporate, Congrès & Salons",
        "sourceKey": "ESP",
        "description": "Le Responsable Événements Corporate pilote la stratégie événementielle interne et externe d'une grande entreprise : conventions annuelles des cadres, assemblées générales d'actionnaires, voyages de récompense (incentives), séminaires d'intégration et soirées de gala.",
        "shortDescription": "Conçoit et organise les temps forts événementiels internes et institutionnels pour engager les collaborateurs.",
        "missions": [
            "Concevoir le plan annuel des événements de l'entreprise en lien avec la stratégie RH et de communication interne.",
            "Piloter les agences événementielles prestataires via des appels d'offres rigoureux et contrôler leurs prestations.",
            "Scénariser le déroulé des conventions d'entreprise : thématiques, interventions des dirigeants, vidéos de synthèse.",
            "Organiser les séminaires de cohésion d'équipe (team buildings) et les voyages incentives à l'étranger.",
            "Gérer l'organisation logistique et protocolaire des Assemblées Générales et des réunions avec les actionnaires.",
            "Mesurer le niveau d'engagement et de fierté d'appartenance des collaborateurs post-événement."
        ],
        "salaries": {
            "france": {
                "junior": "35 000 - 42 000 € brut/an",
                "senior": "50 000 - 75 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "500 000 - 900 000 FCFA net/mois",
                "senior": "1 200 000 - 2 200 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Sièges sociaux de grands groupes multinationaux, banques, grands cabinets de conseil, entreprises industrielles.",
        "typicalDay": "Répétition de discours sur scène avec le PDG pour la convention annuelle de 1 000 collaborateurs, négociation des chambres d'un complexe hôtelier pour le séminaire managers et validation de la vidéo d'ouverture.",
        "skills": {
            "technical": ["Maîtrise des formats d'engagement collectif (hackathons, conventions, icebreakers)", "Gestion de budgets annuels corporate significatifs", "Protocoles d'accueil de dirigeants et personnalités publiques", "Sélection et audit d'agences réceptives (DMC)", "Techniques d'animation et de storytelling corporate"],
            "human": ["Excellente présentation et diplomatie de haut niveau", "Sens politique et discrétion absolue", "Empathie pour les cultures d'entreprise", "Rigueur d'organisation hors pair"]
        },
        "studies": {
            "france": ["Master en Communication d'Entreprise / Management Événementiel (ESP, CELSA, ISCOM, Sciences Po, IAE)"],
            "senegal": ["Master en Communication d'Entreprise & Management (BEM Dakar, IAM, Sup de Co Dakar, ISM)"]
        },
        "career": "Directeur de la Communication Interne, Directeur de l'Expérience Collaborateur ou Directeur de la RSE.",
        "relatedJobSlugs": ["responsable-communication-interne", "event-manager", "responsable-hospitality-vip"],
        "resources": [
            {"title": "Fiche Métier ESP — Responsable événements corporate", "url": "https://espub.org/metiers/responsable-evenementiel/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "Un séminaire d'entreprise réussi renforce la fidélisation des collaborateurs et réduit le turnover de manière mesurable au cours des 12 mois suivants.",
        "interests": ["J'aime organiser des événements ou projets", "J'aime communiquer avec les gens", "J'aime convaincre"],
        "connectedFamilies": ["droit-management"]
    },
    {
        "id": "wedding-planner",
        "slug": "wedding-planner",
        "title": "Wedding Planner / Organisateur d'Événements Privés & Cérémonies",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "evenementiel-experience",
        "subdomain": "Projets événementiels & Production",
        "sourceKey": "STUDYRAMA",
        "description": "Le Wedding Planner accompagne les futurs mariés de la première esquisse jusqu'au jour de la fête pour concevoir un mariage sur-mesure féerique et sans stress. Il gère le budget, négocie avec tous les prestataires et assure la coordination millimétrée le jour J.",
        "shortDescription": "Organise des mariages et cérémonies d'exception sur mesure en alliant magie esthétique et rigueur logistique.",
        "missions": [
            "Écouter les envies, l'histoire et les contraintes budgétaires des futurs mariés pour définir le concept et l'ambiance du mariage.",
            "Dénicher des lieux d'exception : châteaux, plages privées, domaines historiques, tentes nomades.",
            "Sélectionner et coordonner les meilleurs artisans : traiteur d'excellence, designer floral, photographe, DJ/orchestre, pâtissier.",
            "Concevoir la scénographie complète des tables, de la cérémonie laïque/religieuse et de l'espace de danse.",
            "Établir le planning minute par minute du jour J et orchestrer les temps forts (entrée, discours, ouverture de bal, pièce montée).",
            "Gérer avec sérénité et discrétion tous les imprévus techniques, météo ou familiaux le jour de la célébration."
        ],
        "salaries": {
            "france": {
                "junior": "24 000 - 30 000 € brut/an (ou honoraires de 2 500 à 5 000 € par mariage)",
                "senior": "38 000 - 65 000 € brut/an (ou honoraires de 6 000 à 15 000 € sur mariages haut de gamme)",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "300 000 - 600 000 FCFA net/mois (ou forfaits par célébration)",
                "senior": "800 000 - 1 800 000 FCFA net/mois (ou forfaits prestige cérémonies familiales)",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Créateur d'entreprise indépendant, agences de wedding planning haut de gamme et de destination weddings (mariages à l'étranger).",
        "typicalDay": "Dégustation du gâteau de mariage chez le chef pâtissier avec les mariés, ajustement des bouquets d'hortensias avec la fleuriste et installation de 200 chaises pour la cérémonie en plein air.",
        "skills": {
            "technical": ["Scénographie et décoration de table haut de gamme", "Gestion budgétaire rigoureuse et négociation de prestataires", "Maîtrise des protocoles de cérémonies laïques, religieuses et coutumières", "Coordination de déroulés événementiels millimétrés", "Gestion commerciale et marketing d'une agence indépendante"],
            "human": ["Empathie exceptionnelle et écoute sensible", "Patience et gestion des émotions intenses des familles", "Sens de l'esthétique et du détail parfait", "Calme olympien et sourire inaltérable"]
        },
        "studies": {
            "france": ["Certifications professionnelles de Wedding Planner reconnues / Formations en Événementiel (ESP, EFAP, écoles spécialisées)"],
            "senegal": ["Licence en Gestion d'Événements & Hôtellerie / Formations spécialisées en organisation de cérémonies (BEM, ISM)"]
        },
        "career": "Wedding Planner de renommée internationale (Destination Wedding), Directeur d'Agence d'Événements Privés ou Scénographe Événementiel de Luxe.",
        "relatedJobSlugs": ["event-manager", "scenographe-evenements", "coordinateur-evenementiel"],
        "resources": [
            {"title": "Studyrama — Fiche métier Wedding Planner", "url": "https://www.studyrama.com/formations/fiches-metiers/communication/wedding-planner"}
        ],
        "sources": ["Studyrama"],
        "saviezVous": "Le marché du « Destination Wedding » (se marier dans un pays d'accueil exotique avec tous ses invités) connaît une croissance mondiale fulgurante.",
        "interests": ["J'aime organiser des événements ou projets", "J'aime communiquer avec les gens", "J'aime l'art et le design"],
        "connectedFamilies": ["hotellerie-restauration-hospitalite"]
    },
    {
        "id": "regisseur-general-evenementiel",
        "slug": "regisseur-general-evenementiel",
        "title": "Régisseur Général Événementiel",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "evenementiel-experience",
        "subdomain": "Régie & Logistique événementielle",
        "sourceKey": "ESP",
        "description": "Le Régisseur Général Événementiel est le patron technique absolu sur le terrain. Responsable de la sécurité des personnes, de la coordination des équipes techniques et du respect des plannings de montage et de démontage, il veille au bon déroulement matériel de chaque seconde de l'événement.",
        "shortDescription": "Pilote technique et garant de la sécurité sur le terrain lors des montages, de l'exploitation et des démontages.",
        "missions": [
            "Étudier les plans d'implantation, les charges au sol et les capacités électriques des sites réceptifs.",
            "Coordonner sur place tous les corps de métier techniques (son, lumière, vidéo, machinerie, chapiteaux, sécurité).",
            "Élaborer et faire appliquer le plan de prévention des risques et les consignes de sécurité.",
            "Accueillir la commission de sécurité (pompiers, police, préfecture) et obtenir l'autorisation d'ouverture au public.",
            "Diriger les opérations en régie pendant toute la durée de l'événement (top départs, gestion des accès coulisses).",
            "Superviser le démontage rapide, le nettoyage complet et la restitution des lieux sans dommage."
        ],
        "salaries": {
            "france": {
                "junior": "30 000 - 36 000 € brut/an (ou statut d'intermittent du spectacle)",
                "senior": "45 000 - 68 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "400 000 - 700 000 FCFA net/mois",
                "senior": "900 000 - 1 600 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Festivals musicaux, grandes manifestations sportives, tournées de spectacles, agences de régie technique spécialisée.",
        "typicalDay": "Briefing de 50 techniciens à 6h du matin au talkie-walkie, contrôle de l'amarrage des structures métalliques face au vent et gestion de la mise sous tension générale des générateurs électriques.",
        "skills": {
            "technical": ["Législation stricte ERP, SSI (Systèmes de Sécurité Incendie) et habilitations électriques", "Lecture et modification de plans architecturaux (DWG, AutoCAD)", "Maîtrise de la chaîne technique scénique (accroches, levages, distribution électrique)", "Gestion des flux de véhicules poids-lourds et engins de levage", "Maniement des procédures d'évacuation d'urgence"],
            "human": ["Autorité naturelle indiscutable", "Sang-froid exemplaire en situation de crise", "Endurance physique et mentale hors du commun", "Sens du devoir et protection des personnes"]
        },
        "studies": {
            "france": ["Diplôme de Régisseur Général / Formations professionnelles supérieures de la régie (CFPTS, ISTS Avignon, ENSATT)"],
            "senegal": ["Diplôme en Régie de Spectacle & Gestion Technique Événementielle (ENA, IMAC Dakar)"]
        },
        "career": "Directeur Technique de Grande Salle de Spectacle (Arena, Zénith), Directeur des Opérations de Festival ou Consultant Sécurité ERP.",
        "relatedJobSlugs": ["charge-production-evenementielle", "logisticien-evenementiel", "event-manager"],
        "resources": [
            {"title": "Fiche Métier ESP — Régisseur événementiel", "url": "https://espub.org/metiers/regisseur-evenementiel/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "Le Régisseur Général a le pouvoir légal d'annuler ou d'interrompre un spectacle ou un événement si les conditions de sécurité du public ou des équipes ne sont pas garanties.",
        "interests": ["J'aime bouger et être actif", "J'aime diriger une équipe", "J'aime résoudre des énigmes"],
        "connectedFamilies": ["arts-spectacle-audiovisuel", "securite-defense"]
    },
    {
        "id": "logisticien-evenementiel",
        "slug": "logisticien-evenementiel",
        "title": "Logisticien Événementiel / Event Logistics Coordinator",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "evenementiel-experience",
        "subdomain": "Régie & Logistique événementielle",
        "sourceKey": "ESP",
        "description": "Le Logisticien Événementiel planifie et organise les flux de matériels, de marchandises et de personnes indispensables à la réussite de l'événement. Du transport des équipements jusqu'à l'hébergement et la gestion des flux de déchets, il assure une mécanique logistique sans accroc.",
        "shortDescription": "Organise les flux de transport, de stockage, de matériels et d'approvisionnement indispensables à l'événement.",
        "missions": [
            "Planifier l'acheminement, le déchargement et le stockage sécurisé des milliers d'équipements nécessaires.",
            "Gérer les réservations d'hébergement, de billetterie ferroviaire/aérienne et de transferts pour les participants et équipes.",
            "Mettre en place le plan de circulation des véhicules sur site et coordonner les zones de livraison et de stationnement.",
            "Gérer les stocks de consommables, de signalétique, de badges et de dotations cadeaux.",
            "Déployer un plan éco-responsable de tri des déchets, de lutte contre le gaspillage alimentaire et de nettoyage de site.",
            "Réaliser l'inventaire contradictoire du matériel au départ et au retour pour éviter les pertes."
        ],
        "salaries": {
            "france": {
                "junior": "26 000 - 32 000 € brut/an",
                "senior": "36 000 - 50 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "300 000 - 550 000 FCFA net/mois",
                "senior": "750 000 - 1 300 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Comités d'organisation de grandes compétitions sportives (JO, CAN, Marathons), agences de logistique événementielle, salons professionnels.",
        "typicalDay": "Gestion de l'arrivée échelonnée de 12 semi-remorques sur le site d'un salon, distribution des badges chauffeurs et optimisation des flux de tri des emballages recyclables avec la collectivité.",
        "skills": {
            "technical": ["Planification de la chaîne logistique (Supply Chain) appliquée à l'événementiel", "Logiciels de gestion de stocks et d'itinéraires", "Réglementation douanière pour le transport de matériel à l'international (carnets ATA)", "Éco-gestion événementielle (norme ISO 20121)", "Gestion des flottes de navettes et transports"],
            "human": ["Rigueur d'anticipation et sens méthodique", "Capacité à gérer le stress des retards de livraison", "Pragmatisme et réactivité", "Communication claire avec les transporteurs"]
        },
        "studies": {
            "france": ["BTS Transport et Prestations Logistiques / Licence Pro Logistique Événementielle (ESP, IUT)"],
            "senegal": ["Licence Pro en Logistique & Transport (BEM Dakar, Sup de Co Dakar, ISM)"]
        },
        "career": "Directeur Logistique Événementiel, Responsable des Opérations de Salon ou Directeur de Site (Venue Manager).",
        "relatedJobSlugs": ["regisseur-general-evenementiel", "coordinateur-evenementiel", "coordinateur-congres-salons"],
        "resources": [
            {"title": "Fiche Métier ESP — Logisticien événementiel", "url": "https://espub.org/metiers/logisticien-evenementiel/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "La norme internationale ISO 20121 encadre désormais la gestion responsable des événements pour limiter leur empreinte carbone, un défi au cœur du travail du logisticien moderne.",
        "interests": ["J'aime bouger et être actif", "J'aime organiser des événements ou projets", "J'aime résoudre des énigmes"],
        "connectedFamilies": ["transport-logistique"]
    },
    {
        "id": "coordinateur-congres-salons",
        "slug": "coordinateur-congres-salons",
        "title": "Coordinateur de Congrès, Foires & Salons Professionnels",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "evenementiel-experience",
        "subdomain": "Corporate, Congrès & Salons",
        "sourceKey": "ESP",
        "description": "Le Coordinateur de Congrès et Salons pilote l'organisation de grands rassemblements professionnels (B2B). Il commercialise les stands aux exposants, gère la logistique des palais des congrès, planifie les conférences plénières et garantit le succès commercial du salon.",
        "shortDescription": "Orchestre les foires, salons et congrès professionnels réunissant des milliers d'exposants et visiteurs.",
        "missions": [
            "Commercialiser les surfaces d'exposition et les espaces de stands auprès des entreprises de la filière.",
            "Coordonner l'implantation générale des allées, des stands modulaires et des zones de conférences (plan de masse).",
            "Élaborer le programme scientifique ou professionnel des tables rondes avec le comité de programmation.",
            "Gérer la logistique d'accueil des milliers de congressistes (badges d'accès, vestiaires, restauration rapide, wifi haut débit).",
            "Organiser les rendez-vous d'affaires individuels (B2B Matchmaking) entre acheteurs et fournisseurs.",
            "Analyser le trafic dans les allées et dresser le bilan d'impact économique pour les exposants."
        ],
        "salaries": {
            "france": {
                "junior": "28 000 - 35 000 € brut/an",
                "senior": "42 000 - 62 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "380 000 - 700 000 FCFA net/mois",
                "senior": "900 000 - 1 600 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Organisateurs professionnels de salons (Comexposium, GL Events, RX France), palais des congrès, centres d'exposition internationaux (CICES Dakar), fédérations professionnelles.",
        "typicalDay": "Suivi des inscriptions des 150 exposants d'un salon de l'énergie, calage de l'ordre de passage des ministres en séance plénière et vérification du débit wifi avec l'opérateur télécom.",
        "skills": {
            "technical": ["Gestion commerciale et prospection de salons B2B", "Plans d'aménagement et sécurité ERP de très grande capacité", "Gestion de programmes de conférences complexes", "Plateformes de mise en relation d'affaires (B2B matchmaking apps)", "Marketing direct et promotion de salon auprès des visiteurs"],
            "human": ["Aisance commerciale et négociation", "Rigueur d'organisation à grande échelle", "Sens de la diplomatie et accueil des délégations", "Capacité à coordonner une multitude d'acteurs"]
        },
        "studies": {
            "france": ["Master en Management de Congrès & Tourisme d'Affaires (ESP, IAE, Université d'Angers Esthua, Écoles de commerce)"],
            "senegal": ["Master en Tourisme d'Affaires & Gestion de Foires/Salons (UGB Saint-Louis, Sup de Co Dakar, BEM)"]
        },
        "career": "Directeur de Salon Professionnel, Directeur de Parc d'Exposition ou Directeur du Développement Événementiel B2B.",
        "relatedJobSlugs": ["event-manager", "logisticien-evenementiel", "responsable-evenements-corporate"],
        "resources": [
            {"title": "Fiche Métier ESP — Coordinateur de congrès", "url": "https://espub.org/metiers/coordinateur-de-congres-et-salons/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "Les grands salons professionnels comme le Salon de l'Agriculture ou le Mobile World Congress génèrent des retombées économiques de centaines de millions d'euros pour les villes qui les hébergent.",
        "interests": ["J'aime organiser des événements ou projets", "J'aime convaincre", "J'aime communiquer avec les gens"],
        "connectedFamilies": ["hotellerie-restauration-hospitalite", "droit-management"]
    },
    {
        "id": "scenographe-evenements",
        "slug": "scenographe-evenements",
        "title": "Scénographe d'Événements / Designer d'Espaces Éphémères",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "evenementiel-experience",
        "subdomain": "Expérience de marque & Hospitalité",
        "sourceKey": "ESP_STUDYRAMA",
        "description": "Le Scénographe d'Événements conçoit l'architecture éphémère, la mise en scène spatiale et l'ambiance immersive des événements (défilés de mode, stands spectaculaires, scènes de congrès, pop-up stores). Il marie volumes, lumières, matières et technologies pour créer une émotion visuelle immédiate.",
        "shortDescription": "Conçoit l'architecture intérieure éphémère, les décors et la mise en scène spatiale d'événements marquants.",
        "missions": [
            "Concevoir le concept spatial et l'univers décoratif en adéquation parfaite avec l'ADN de la marque.",
            "Dessiner les plans d'implantation, les croquis d'ambiance et les modélisations 3D photoréalistes du décor.",
            "Sélectionner les matériaux, mobiliers design, textiles, revêtements de sol et éclairages d'ambiance.",
            "Travailler en lien avec les constructeurs de décors, menuisiers, tapissiers et éclairagistes pour la fabrication.",
            "Garantir le respect des règles d'évacuation, de stabilité des structures et de classement au feu des matériaux (norme M1).",
            "Superviser l'installation finale des décors et ajuster les ambiances lumineuses jusqu'au rendu parfait."
        ],
        "salaries": {
            "france": {
                "junior": "28 000 - 35 000 € brut/an",
                "senior": "45 000 - 70 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "350 000 - 650 000 FCFA net/mois",
                "senior": "850 000 - 1 600 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Agences de scénographie événementielle, bureaux d'architecture éphémère, agences de design de luxe, grandes marques de mode.",
        "typicalDay": "Modélisation 3D sur SketchUp de la scène d'un lancement de smartphone haut de gamme, sélection d'échantillons de bois éco-responsable et visite de l'atelier de menuiserie pour vérifier les finitions.",
        "skills": {
            "technical": ["Modélisation spatiale 3D (SketchUp, AutoCAD, Vectorworks, Rhino)", "Rendu photoréaliste (V-Ray, Enscape)", "Culture du design d'espace, du mobilier et de l'architecture d'intérieur", "Connaissance des matériaux, des normes de résistance et de sécurité incendie", "Conception de décors démontables et réutilisables"],
            "human": ["Sensibilité poétique et vision des volumes", "Créativité plastique et sens des textures", "Capacité à concrétiser une idée abstraite en un lieu palpable", "Rigueur constructive"]
        },
        "studies": {
            "france": ["Diplôme en Scénographie / Design d'Espace (ESP, École Boulle, Ensad, Camondo, Écoles d'Architecture)"],
            "senegal": ["Diplôme en Arts Plastiques, Scénographie ou Architecture d'Intérieur (École Nationale des Arts, Collège Universitaire d'Architecture)"]
        },
        "career": "Directeur de la Scénographie, Architecte d'Intérieur Commercial ou Directeur Artistique d'Espaces Éphémères.",
        "relatedJobSlugs": ["directeur-creatif", "event-manager", "charge-production-evenementielle"],
        "resources": [
            {"title": "Fiche Métier ESP — Scénographe événementiel", "url": "https://espub.org/metiers/scenographe/"},
            {"title": "Studyrama — Fiche métier Scénographe", "url": "https://www.studyrama.com/formations/fiches-metiers/communication/scenographe"}
        ],
        "sources": ["ESP", "Studyrama"],
        "saviezVous": "Les défilés de haute couture Chanel au Grand Palais ont élevé la scénographie éphémère au rang d'œuvre d'art totale, recréant fusées spatiales, plages de sable blanc ou forêts d'automne sous la verrière.",
        "interests": ["J'aime concevoir des projets", "J'aime l'art et le design", "J'aime le travail manuel ou minutieux"],
        "connectedFamilies": ["architecture-urbanisme-btp", "arts-spectacle-audiovisuel"]
    },
    {
        "id": "responsable-experience-client",
        "slug": "responsable-experience-client",
        "title": "Responsable Expérience Client / CX Manager",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "evenementiel-experience",
        "subdomain": "Expérience de marque & Hospitalité",
        "sourceKey": "ESP",
        "description": "Le Responsable Expérience Client (Customer Experience Manager) conçoit et harmonise chaque moment d'interaction entre le consommateur et la marque (en boutique, sur les plateformes digitales, lors des événements et au service après-vente) pour susciter enchantement, fidélité et bouche-à-oreille positif.",
        "shortDescription": "Orchestre l'ensemble des interactions et émotions vécues par le client pour créer un parcours d'exception.",
        "missions": [
            "Cartographier l'intégralité des parcours clients omnicanaux (Customer Journeys) et détecter les points de friction.",
            "Définir les standards d'accueil, de personnalisation et de services dans les points de vente physiques et événements.",
            "Concevoir des rituels de marque mémorables et des attentions surprenantes pour enchanter les clients.",
            "Piloter les outils de recueil de la voix du client (Voice of the Customer) et analyser le NPS (Net Promoter Score) en continu.",
            "Sensibiliser et former l'ensemble des équipes en contact avec le public à la culture du service d'excellence.",
            "Mettre en place des protocoles rapides de résolution des réclamations pour transformer des clients mécontents en ambassadeurs."
        ],
        "salaries": {
            "france": {
                "junior": "36 000 - 42 000 € brut/an",
                "senior": "55 000 - 80 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "500 000 - 900 000 FCFA net/mois",
                "senior": "1 300 000 - 2 300 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Marques de luxe, hôtellerie haut de gamme, compagnies aériennes, distribution sélective, banques privées, parcs à thèmes.",
        "typicalDay": "Analyse matinale des verbatims clients recueillis après une visite en boutique, réunion de refonte du packaging de commande e-commerce pour améliorer l'expérience d'unboxing et atelier de formation des équipes d'accueil.",
        "skills": {
            "technical": ["Méthodologie de Design Thinking et Customer Journey Mapping", "Indicateurs de satisfaction (NPS, CSAT, CES)", "Outils de feedback management (Qualtrics, Medallia)", "Culture du service haut de gamme et d'hospitalité", "Gestion de projet transverse et conduite du changement"],
            "human": ["Empathie naturelle exceptionnelle", "Obsession du détail et de l'harmonie", "Aisance relationnelle et leadership bienveillant", "Capacité à fédérer des métiers hétérogènes"]
        },
        "studies": {
            "france": ["Master en Customer Experience / Marketing des Services / Hôtellerie de Luxe (ESP, Glion, Essec, IAE)"],
            "senegal": ["Master en Management de la Relation Client & Hospitalité (BEM Dakar, Sup de Co Dakar, IAM)"]
        },
        "career": "Chief Customer Officer (CCO), Directeur de l'Expérience de Marque ou Directeur Général d'Enseigne.",
        "relatedJobSlugs": ["responsable-crm", "chef-projet-hospitality", "brand-strategist"],
        "resources": [
            {"title": "Fiche Métier ESP — Responsable expérience client", "url": "https://espub.org/metiers/responsable-experience-client/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "Selon plusieurs études de marché mondiales, plus de 80 % des consommateurs se disent prêts à payer plus cher pour un produit ou service s'il s'accompagne d'une expérience client exceptionnelle.",
        "interests": ["J'aime communiquer avec les gens", "J'aime résoudre des énigmes", "J'aime les marques"],
        "connectedFamilies": ["hotellerie-restauration-hospitalite", "droit-management"]
    },
    {
        "id": "chef-projet-hospitality",
        "slug": "chef-projet-hospitality",
        "title": "Chef de Projet Hospitality & Relations VIP",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "evenementiel-experience",
        "subdomain": "Expérience de marque & Hospitalité",
        "sourceKey": "ESP",
        "description": "Le Chef de Projet Hospitality conçoit et déploie les programmes d'accueil haut de gamme pour les invités de marque, délégations officielles, célébrités et clients stratégiques lors de grands événements (Roland-Garros, Grand Prix de Formule 1, festivals de cinéma, loges de stades).",
        "shortDescription": "Gère l'accueil personnalisé d'exception et les programmes VIP lors de grands événements sportifs et culturels.",
        "missions": [
            "Concevoir les offres et packages d'hospitalité pour les entreprises partenaires et leurs invités de prestige.",
            "Aménager et scénariser les espaces de réception privatifs (loges d'honneur, salons VIP, pavillons éphémères).",
            "Superviser les prestations gastronomiques avec des chefs étoilés et sommeliers de renom.",
            "Organiser les accès privilégiés, les coupes-files, les voituriers et la conciergerie dédiée aux personnalités.",
            "Assurer la prise en charge personnalisée des invités de marque depuis leur arrivée jusqu'à leur départ.",
            "Gérer avec tact et célérité les demandes les plus spécifiques des célébrités et décideurs économiques."
        ],
        "salaries": {
            "france": {
                "junior": "30 000 - 36 000 € brut/an",
                "senior": "45 000 - 68 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "450 000 - 800 000 FCFA net/mois",
                "senior": "1 100 000 - 1 900 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Fédérations sportives (FIFA, UEFA, FFT), comités de grands tournois, agences spécialisées en relations publiques et hospitality, palaces.",
        "typicalDay": "Vérification des accès loges avant l'ouverture des portes d'un match de gala, accueil d'un directeur général de multinationale et de ses invités, et coordination d'un service de conciergerie VIP imprévu.",
        "skills": {
            "technical": ["Protocoles d'accueil de haut niveau et étiquette internationale", "Gestion de la restauration gastronomique et des arts de la table", "Sécurité des personnalités et confidentialité", "Négociation de partenariats de conciergerie de luxe", "Maîtrise courante de plusieurs langues étrangères"],
            "human": ["Discrétion absolue et diplomatie irréprochable", "Présentation et élocution impeccables", "Sens du service exceptionnel et réactivité", "Maîtrise de soi en présence de personnalités célèbres"]
        },
        "studies": {
            "france": ["Master en Hospitality Management / Relations Publiques (ESP, Institut Paul Bocuse, Vatel, Glion)"],
            "senegal": ["Master en Management Hôtelier & Événementiel de Luxe (BEM Dakar, Sup de Co Dakar, IAM)"]
        },
        "career": "Directeur de l'Hospitalité & du Protocole, Directeur des Relations VIP ou Directeur de Palace.",
        "relatedJobSlugs": ["responsable-experience-client", "event-manager", "charge-de-relations-publiques"],
        "resources": [
            {"title": "Fiche Métier ESP — Chef de projet hospitality", "url": "https://espub.org/metiers/charge-de-projet-hospitality/"}
        ],
        "sources": ["ESP"],
        "saviezVous": "Pendant des tournois comme les Jeux Olympiques, les programmes d'hospitalité représentent souvent un tiers des recettes commerciales totales générées par l'organisation.",
        "interests": ["J'aime communiquer avec les gens", "J'aime organiser des événements ou projets", "J'aime convaincre"],
        "connectedFamilies": ["hotellerie-restauration-hospitalite"]
    },
    {
        "id": "charge-de-mecenat",
        "slug": "charge-de-mecenat",
        "title": "Chargé de Mécénat, Sponsoring & Partenariats",
        "familyId": "communication-marketing-medias-creation",
        "domainId": "evenementiel-experience",
        "subdomain": "Corporate, Congrès & Salons",
        "sourceKey": "ESP_STUDYRAMA",
        "description": "Le Chargé de Mécénat et Sponsoring recherche et noue des partenariats financiers, en nature ou de compétences entre des entreprises et des projets culturels, sportifs, humanitaires ou écologiques afin de faire rayonner leur engagement sociétal.",
        "shortDescription": "Développe des partenariats de financement et de visibilité entre entreprises et projets culturels ou sportifs.",
        "missions": [
            "Définir la stratégie de mécénat ou de sponsoring en lien avec les valeurs de la fondation ou de l'entreprise.",
            "Prospecter des entreprises marraines ou des institutions pour financer des festivals, expositions ou projets solidaires.",
            "Concevoir des dossiers de partenariat attrayants démontrant l'impact sociétal et les contreparties de visibilité offertes.",
            "Négocier et rédiger les conventions juridiques de mécénat et de sponsoring en respectant le cadre fiscal avantageux.",
            "Assurer la mise en œuvre fidèle des contreparties promises (visibilité sur les supports, places VIP, visites privées).",
            "Entretenir des relations de confiance durable avec les mécènes à travers des bilans d'impact chaleureux et documentés."
        ],
        "salaries": {
            "france": {
                "junior": "28 000 - 35 000 € brut/an",
                "senior": "42 000 - 65 000 € brut/an",
                "currency": "EUR",
                "period": "an"
            },
            "senegal": {
                "junior": "350 000 - 650 000 FCFA net/mois",
                "senior": "850 000 - 1 600 000 FCFA net/mois",
                "currency": "XOF",
                "period": "mois"
            }
        },
        "workEnvironment": "Fondations d'entreprises, musées nationaux, théâtres et opéras, ONG, clubs sportifs professionnels, agences de conseil en mécénat.",
        "typicalDay": "Rendez-vous avec le directeur RSE d'un groupe du CAC 40 pour lui présenter le programme éducatif d'une fondation d'art contemporain, suivi de la rédaction d'une convention de mécénat fiscalement optimisée.",
        "skills": {
            "technical": ["Droit du mécénat et dispositifs fiscaux d'exonération (Loi Aillagon)", "Techniques de prospection et de levée de fonds (Fundraising)", "Montage de dossiers de sponsoring commercial et sportif", "Connaissance fine de l'écosystème associatif et culturel", "Outils de CRM donateurs"],
            "human": ["Force de conviction et enthousiasme contagieux", "Sensibilité aux causes culturelles et humanitaires", "Sens politique et aisance auprès des grands dirigeants", "Ténacité et rigueur de suivi"]
        },
        "studies": {
            "france": ["Master en Mécénat / Gestion de Projets Culturels / Communication (ESP, Sciences Po, CELSA, Dauphine, IAE)"],
            "senegal": ["Master en Gestion des Projets de Développement & Économie Solidaire (UCAD, BEM Dakar, Sup de Co)"]
        },
        "career": "Directeur du Mécénat et des Partenariats, Délégué Général de Fondation d'Entreprise ou Directeur du Développement d'Institution Culturelle.",
        "relatedJobSlugs": ["responsable-communication-rse", "charge-de-relations-publiques", "event-manager"],
        "resources": [
            {"title": "Fiche Métier ESP — Chargé de mécénat", "url": "https://espub.org/metiers/charge-de-mecenat/"},
            {"title": "Studyrama — Fiche métier Chargé de mécénat", "url": "https://www.studyrama.com/formations/fiches-metiers/communication/charge-de-mecenat"}
        ],
        "sources": ["ESP", "Studyrama"],
        "saviezVous": "En France, la loi Aillagon de 2003 permet aux entreprises de déduire de leur impôt sur les sociétés 60 % du montant de leur don de mécénat, ce qui en fait un levier puissant d'engagement sociétal.",
        "interests": ["J'aime convaincre", "J'aime communiquer avec les gens", "J'aime aider les autres"],
        "connectedFamilies": ["culture-patrimoine", "droit-management"]
    }
]

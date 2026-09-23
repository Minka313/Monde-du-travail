#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
TRANSPORT, LOGISTIQUE & SUPPLY CHAIN - PART 2 (Métiers 17 à 32)
Fiches métiers exhaustives et ultra-détaillées avec architecture à 6 onglets.
Contexte dual : France (€ brut/an) & Sénégal/UEMOA (FCFA net/mois).
Sources officielles : Imagine ton Futur, France Travail, AFT-IFTTIM, ASLOG, AFTRAL, IATA, FIATA, douane.gouv.fr, douanes.sn.
"""

def get_transport_jobs_part2():
    return [
        # 17. Affréteur International
        {
            "id": "affreteur-international",
            "title": "Affréteur International / Commissionnaire de Transport",
            "slug": "affreteur-international",
            "family": "transport-logistique-supply-chain",
            "familyLabel": "Transport, Logistique & Supply Chain",
            "domain": "transit-douane-affretement",
            "domainLabel": "Transit International, Douane & Affrètement",
            "subdomain": "Affrètement multimodal & commission de transport",
            "badge": "📚 Référence Imagine ton Futur",
            "sourceImagineTonFutur": True,
            "brief": "L'affréteur international est l'architecte contractuel et logistique du transport de marchandises, négociant les capacités auprès des transporteurs (route, mer, air, fer) pour le compte de chargeurs aux meilleures conditions tarifaires et de délai.",
            "description": "Intermédiaire incontournable du commerce mondial, l'affréteur international met en relation des expéditeurs de fret (chargeurs industriels ou commerciaux) avec des transporteurs tiers détenteurs de véhicules ou navires. Véritable négociateur et stratège des flux, il analyse les caractéristiques des marchandises (tonnage, volume, dangerosité, périssabilité), sélectionne les modes de transport les plus efficients (routier, conteneur maritime FCL/LCL, fret aérien direct ou consolidé, ferroutage), négocie âprement les taux de fret et contractualise les chartes-parties ou lettres de voiture. En charge de la rentabilité commerciale de chaque opération (marge brute au dossier), il optimise le remplissage des véhicules, résout les litiges de non-conformité, pilote les aléas climatiques ou géopolitiques en temps réel, et veille au strict respect des Incoterms 2020 (EXW, FOB, CIF, DDP) et des réglementations internationales de transport (CMR, Convention de Varsovie/Montréal, Règles de La Haye-Visby).",
            "missions": [
                "Recueillir les besoins d'expédition des clients (nature du fret, dimensions, poids, impératifs de date et budget).",
                "Rechercher des capacités de fret disponibles sur les bourses de fret électroniques (B2PWeb, TimoCom, Transporeon) ou auprès d'un panel de transporteurs partenaires.",
                "Négocier les tarifs de transport à l'achat et fixer le prix de vente au client en sécurisant la marge commerciale.",
                "Rédiger et émettre les ordres d'affrètement, lettres de voiture internationales (CMR) et instructions de transport.",
                "Coordonner les interfaces de pré-acheminement, transit portuaire/aéroportuaire et post-acheminement.",
                "Assurer le suivi en direct (tracking) de l'acheminement et gérer proactivement les retards, pannes ou sinistres.",
                "Vérifier la conformité des factures transporteurs, instruire les dossiers de litiges d'avaries avec les assureurs et clôturer le dossier de fret."
            ],
            "skills": {
                "hard": [
                    "Techniques d'affrètement multimodal (route, fleuve, maritime, aérien)",
                    "Maîtrise des Incoterms 2020 de la Chambre de Commerce Internationale (CCI)",
                    "Droit des transports et conventions internationales (CMR, Convention de Montréal, Règles de Rotterdam)",
                    "Utilisation des bourses de fret et TMS (B2PWeb, Transporeon, Wolters Kluwer)",
                    "Calcul de rentabilité au dossier et tarification volumétrique (ratio poids/volume 1:3 aérien, 1:1 maritime)",
                    "Gestion des litiges fret et assurances maritimes/terrestres"
                ],
                "soft": [
                    "Excellente aisance relationnelle et talents de négociateur acharné",
                    "Résistance aiguë au stress et réactivité instantanée face aux urgences",
                    "Rigueur administrative et réactivité commerciale",
                    "Sens aigu du résultat financier et de l'optimisation des coûts"
                ],
                "tools": [
                    "Bourses de fret (B2PWeb, TimoCom, Wtransnet, Teleroute)",
                    "TMS Affrètement (Dashdoc, DDS Cargo, Transport Pro, Transwide)",
                    "Suivi GPS et visibilité supply chain (Project44, Shippeo, FourKites)",
                    "Outils de cotation fret aérien/maritime (Freightos, Cargo.one)"
                ],
                "languages": [
                    "Français (courant, vocabulaire juridique du transport)",
                    "Anglais (courant impératif C1, langue quotidienne des négociations et contrats de fret internationaux)",
                    "Espagnol, Arabe ou Allemand (atout déterminant pour les corridors régionaux)"
                ]
            },
            "formations": {
                "france": [
                    "BTS Gestion des Transports et Logistique Associée (GTLA)",
                    "BUT Management de la Logistique et des Transports (MLT)",
                    "Titre Professionnel Organisateur de Transports Multimodaux et Internationaux (OTMI - AFTRAL/Promotrans)",
                    "Licence Pro Logistique et Transports Internationaux",
                    "Master / Titre Manager des Transports et de la Logistique Internationale (ISTELI / AFTRAL, Université Paris 1 Panthéon-Sorbonne)"
                ],
                "senegal": [
                    "BTS Transport-Logistique (CFPT Sénégal-Japon, IPG Dakar)",
                    "Licence Professionnelle en Transport et Logistique Internationale (EBAD / UCAD, IAM Dakar, ISM)",
                    "Master en Management des Transports Internationaux et Transit (BEM Management School Dakar, CESAG)",
                    "Certificat de Formation Spécialisée en Affrètement Portuaire et Maritime (CFM / Port Autonome de Dakar)"
                ]
            },
            "salaries": {
                "france": {
                    "debutant": "28 000 € à 34 000 € brut/an (+ primes sur marge brute)",
                    "intermediaire": "35 000 € à 46 000 € brut/an",
                    "expert": "48 000 € à 65 000 € brut/an (Cadre affréteur senior / Responsable Bureau d'Affrètement)"
                },
                "senegal": {
                    "debutant": "270 000 à 420 000 FCFA net/mois",
                    "intermediaire": "450 000 à 800 000 FCFA net/mois",
                    "expert": "850 000 à 1 500 000 FCFA net/mois (Chef de bureau affrètement chez Maersk, Bolloré/AGL, Grimaldi)"
                }
            },
            "career": {
                "evolution": [
                    "Chef de bureau d'affrètement / Responsable pôle route/maritime",
                    "Responsable commercial fret international / Key Account Manager Transport",
                    "Directeur d'agence de transport et de commission de transport",
                    "Directeur des achats transport (côté chargeur industriel)"
                ],
                "relatedJobs": [
                    "Agent de transit",
                    "Déclarant en douane",
                    "Exploitant transport routier",
                    "Gestionnaire de flotte"
                ],
                "associatedFamilies": [
                    "commerce-vente-distribution",
                    "finance-comptabilite-gestion",
                    "droit-justice"
                ]
            },
            "sources": [
                {
                    "organization": "Imagine ton Futur",
                    "title": "Fiche Métier : Affréteur international",
                    "url": "https://www.imaginetonfutur.com/les-metiers/affreteur.html",
                    "type": "Portail d'orientation"
                },
                {
                    "organization": "AFT-IFTTIM / AFTRAL",
                    "title": "Référentiel Métier : Affréteur routier et international",
                    "url": "https://www.aftral.com",
                    "type": "Organisme professionnel de formation"
                }
            ]
        },

        # 18. Agent de Transit
        {
            "id": "agent-de-transit",
            "title": "Agent de Transit / Agent d'Expédition Fret",
            "slug": "agent-de-transit",
            "family": "transport-logistique-supply-chain",
            "familyLabel": "Transport, Logistique & Supply Chain",
            "domain": "transit-douane-affretement",
            "domainLabel": "Transit International, Douane & Affrètement",
            "subdomain": "Expédition internationale & gestion documentaire fret",
            "badge": "📚 Référence Imagine ton Futur",
            "sourceImagineTonFutur": True,
            "brief": "L'agent de transit organise et supervise les étapes administratives, douanières et matérielles du déplacement des marchandises à l'importation comme à l'exportation, garantissant leur acheminement sans blocage documentaire.",
            "description": "Cheville ouvrière du transit international travaillant au sein de maisons de transit, de compagnies maritimes ou aériennes, ou chez des commissionnaires de transport (freight forwarders), l'agent de transit orchestre le passage des marchandises d'un pays à un autre. Il prend en charge le dossier dès la confirmation de commande jusqu'à la livraison finale au destinataire. Il réserve les espaces de fret (booking maritime ou LTA aérienne), rassemble et contrôle scrupuleusement l'ensemble des pièces documentaires obligatoires (factures commerciales, listes de colisage, certificats d'origine EUR1/Form A, certificats phytosanitaires, connaissements maritimes Bill of Lading, manifestes de fret). Travaillant en tandem permanent avec les déclarants en douane, les compagnies de manutention portuaire et les transporteurs terrestres, il dénoue toute anicroche opérationnelle (retenue de conteneurs, avaries, surstaries portuaires, contrôles sanitaires) avec une précision chirurgicale.",
            "missions": [
                "Constituer et instruire les dossiers d'expédition à l'export ou de dédouanement à l'import.",
                "Réserver les bookings auprès des compagnies maritimes, aériennes ou ferroviaires.",
                "Établir les documents de transport internationaux (LTA, B/L, connaissement fluvial, lettre de voiture).",
                "Assurer la liaison continue avec les services des douanes, vétérinaires et d'inspection aux frontières.",
                "Coordonner les opérations d'empotage, dépotage et manutention sur les terminaux portuaires ou aéroports.",
                "Informer les clients importateurs/exportateurs de la progression physique et douanière de leurs envois.",
                "Facturer les prestations de transit (débours douaniers, frais portuaires, honoraires d'intervention)."
            ],
            "skills": {
                "hard": [
                    "Réglementation du transport multimodal international et procédures portuaires/aéroportuaires",
                    "Formalités documentaires (Bill of Lading, Sea Waybill, Air Waybill LTA, Carnet ATA)",
                    "Connaissance des régimes douaniers de base et des incoterms",
                    "Gestion des opérations portuaires et des terminaux conteneurs",
                    "Comptabilité de transit (gestion des débours et provisions douanières)",
                    "Maîtrise des logiciels de transit et plateformes communautaires (AP+ / Sonepar, Cargo Community Systems)"
                ],
                "soft": [
                    "Rigueur administrative absolue et zéro tolérance pour l'erreur documentaire",
                    "Sens aigu du service client et diplomatie opérationnelle",
                    "Capacité à jongler avec de multiples urgences simultanées",
                    "Esprit d'équipe et flexibilité horaire"
                ],
                "tools": [
                    "Logiciels de transit & forwarding (CargoWise One, Akanea, Conex, AP+, PortNet)",
                    "Systèmes douaniers (Delta-G / Delta-T en France, GAINDE au Sénégal)",
                    "Outils de tracking des compagnies maritimes (CMA CGM, MSC, Maersk, Hapag-Lloyd)",
                    "Bureautique avancée (Excel, ERP transport)"
                ],
                "languages": [
                    "Français (maîtrise parfaite à l'écrit comme à l'oral)",
                    "Anglais (B2/C1 professionnel indispensable pour la correspondance avec les agents correspondants mondiaux)"
                ]
            },
            "formations": {
                "france": [
                    "Bac Pro Organisation de Transport de Marchandises (OTM)",
                    "BTS Gestion des Transports et Logistique Associée (GTLA)",
                    "BUT Management de la Logistique et des Transports (MLT)",
                    "Titre certifié Agent de Transit / Agent d'Exploitation Fret (AFTRAL / Promotrans)"
                ],
                "senegal": [
                    "Brevet Professionnel / BTS Transit-Douane-Transport (CFPT Sénégal-Japon, ENDC)",
                    "Licence Pro en Commerce International & Transit (EBAD / UCAD, ISM, Institut Supérieur de Transport)",
                    "Diplôme d'Agent de Transit Agréé en Douane (Centre de Formation Douanière de Dakar)"
                ]
            },
            "salaries": {
                "france": {
                    "debutant": "23 000 € à 27 000 € brut/an",
                    "intermediaire": "28 000 € à 36 000 € brut/an",
                    "expert": "38 000 € à 48 000 € brut/an (Agent principal de transit / Chef de groupe transit)"
                },
                "senegal": {
                    "debutant": "200 000 à 350 000 FCFA net/mois",
                    "intermediaire": "380 000 à 600 000 FCFA net/mois",
                    "expert": "650 000 à 1 100 000 FCFA net/mois (Chef de département transit maritime/aérien)"
                }
            },
            "career": {
                "evolution": [
                    "Chef de groupe transit / Responsable de bureau maritime ou aérien",
                    "Déclarant en douane (par spécialisation réglementaire)",
                    "Affréteur international / Responsable commissionnaire de transport",
                    "Responsable logistique import-export chez un industriel"
                ],
                "relatedJobs": [
                    "Déclarant en douane",
                    "Affréteur international",
                    "Agent maritime consignataire",
                    "Gestionnaire des litiges transport"
                ],
                "associatedFamilies": [
                    "commerce-vente-distribution",
                    "droit-justice",
                    "administration-gestion-organisation"
                ]
            },
            "sources": [
                {
                    "organization": "Imagine ton Futur",
                    "title": "Fiche Métier : Agent de transit",
                    "url": "https://www.imaginetonfutur.com/les-metiers/agent-de-transit.html",
                    "type": "Portail d'orientation"
                },
                {
                    "organization": "France Travail",
                    "title": "Fiche ROME N1202 : Gestion des opérations de circulation internationale des marchandises",
                    "url": "https://candidat.francetravail.fr/metierscope/fiche-metier/N1202",
                    "type": "Répertoire officiel des métiers"
                }
            ]
        },

        # 19. Coordinateur Logistique Humanitaire
        {
            "id": "coordinateur-logistique-humanitaire",
            "title": "Coordinateur Logistique Humanitaire / Logistics Officer ONG",
            "slug": "coordinateur-logistique-humanitaire",
            "family": "transport-logistique-supply-chain",
            "familyLabel": "Transport, Logistique & Supply Chain",
            "domain": "logistique-humanitaire-urgence",
            "domainLabel": "Logistique Humanitaire, Urgence & Crise",
            "subdomain": "Supply chain d'urgence & opérations de secours ONG",
            "badge": "📚 Référence Imagine ton Futur",
            "sourceImagineTonFutur": True,
            "brief": "Le coordinateur logistique humanitaire conçoit, déploie et supervise l'ensemble des chaînes d'approvisionnement, des parcs de véhicules, des bases-vie et des télécommunications en zones de crise ou de conflit pour les ONG internationales.",
            "description": "Opérant sur des théâtres d'interventions d'urgence (catastrophes naturelles, conflits armés, épidémies, crises de réfugiés), le coordinateur logistique humanitaire (Log Co) est la colonne vertébrale des missions de secours déployées par des organisations comme Médecins Sans Frontières (MSF), Action Contre la Faim (ACF), la Croix-Rouge ou le Programme Alimentaire Mondial (PAM/WFP). Il a sous sa responsabilité directe la totalité des infrastructures matérielles de la mission : sécurisation et maintenance de la flotte de véhicules 4x4 et camions, gestion des ponts aériens de fret d'urgence (UNHAS), chaîne d'approvisionnement des médicaments vitaux et des rations alimentaires (avec maintien strict de la chaîne du froid vaccinale), gestion des générateurs d'électricité, traitement de l'eau potable (WASH), et mise en place des réseaux de télécommunication radio VHF/HF et liaisons satellitaires (BGAN, Starlink). Responsable de la sécurité logistique de la base-vie et des équipes expatriées et nationales, il rédige les plans d'évacuation d'urgence, négocie avec les autorités locales et factions armées pour l'obtention d'accès humanitaires, et audite la conformité des achats locaux selon les règles des bailleurs de fonds internationaux (ECHO, USAID, BHA, AFD).",
            "missions": [
                "Définir la stratégie logistique opérationnelle de la mission humanitaire en fonction du contexte sécuritaire et humanitaire.",
                "Superviser les achats locaux et internationaux en garantissant la transparence des appels d'offres et la conformité des bailleurs.",
                "Gérer les dépôts de stockage d'urgence, le contrôle des dates de péremption des médicaments et des rations nutritionnelles.",
                "Piloter le parc automobile (affectation des véhicules, protocoles radio, consommations de carburant, maintenance préventive).",
                "Garantir le fonctionnement ininterrompu de l'énergie (groupes électrogènes, solaire) et des télécommunications de crise.",
                "Mettre en œuvre les protocoles de sûreté et de sécurité passive (barriérage, stocks de sécurité, plans d'hibernation et d'évacuation).",
                "Recruter, former et manager les équipes logistiques nationales (chauffeurs, magasiniers, gardiens, mécaniciens, radio-opérateurs)."
            ],
            "skills": {
                "hard": [
                    "Gestion de la supply chain en milieu dégradé ou hostile (Last Mile Logistics)",
                    "Maintenance mécanique de base de flottes 4x4 et générateurs diesel",
                    "Réseaux radio télécoms (VHF, HF, téléphones satellites Iridium/Thuraya, Starlink)",
                    "Procédure des bailleurs institutionnels (ECHO, USAID, FCDO, PAM)",
                    "Conformité de la chaîne du froid pour vaccins et réactifs (Cold Chain Management)",
                    "Gestion de crise sécuritaire, analyse de risques et plans d'évacuation sanitaire/sécuritaire"
                ],
                "soft": [
                    "Sang-froid exceptionnel et résilience mentale en zone de danger",
                    "Capacité d'adaptation extrême et débrouillardise opérationnelle",
                    "Leadership interculturel et respect des principes humanitaires (neutralité, impartialité)",
                    "Sens aigu de la diplomatie et de la négociation sous tension"
                ],
                "tools": [
                    "Outils ERP humanitaires (Unifield pour MSF, Sagitta, Agresso)",
                    "Systèmes d'information géographique (QGIS, Google Earth Pro humanitaire)",
                    "Outils de suivi GPS de convois humanitaires (InReach, TracKar)",
                    "Matériel télécoms (Codan, Motorola VHF, BGAN Inmarsat)"
                ],
                "languages": [
                    "Français (courant)",
                    "Anglais (bilingue opérationnel indispensable C1/C2)",
                    "Arabe, Espagnol, Swahili ou Haoussa (atout inestimable pour les missions spécifiques)"
                ]
            },
            "formations": {
                "france": [
                    "Bioforce Lyon : Titre certifié Manager Logistique Humanitaire / Responsable de l'Environnement de Travail et de la Logistique Humanitaire",
                    "Master Pro Coopération Internationale et Action Humanitaire (Université Paris 1, IRIS Sup', Bioforce)",
                    "Diplôme d'ingénieur généraliste ou Master Logistique complété par une spécialisation humanitaire",
                    "Formations internes qualifiantes des ONG (MSF, CICR, Croix-Rouge française)"
                ],
                "senegal": [
                    "Bioforce Afrique (Centre de Formation de Dakar) : Coordinateur Logistique Humanitaire / Logisticien Humanitaire",
                    "Master Gestion des Crises et Actions Humanitaires (UGB Saint-Louis / IPG Dakar)",
                    "Master Transport et Logistique Spécialité Humanitaire (CESAG Dakar / EBAD UCAD)",
                    "Programmes de formation conjointe Croix-Rouge Sénégalaise / PAM Dakar (UN Humanitarian Response Depot)"
                ]
            },
            "salaries": {
                "france": {
                    "debutant": "26 000 € à 32 000 € brut/an (+ per diem mission et prise en charge logement/billets)",
                    "intermediaire": "34 000 € à 45 000 € brut/an (+ indemnités d'expatriation)",
                    "expert": "48 000 € à 65 000 € brut/an (Directeur Logistique Pays / Logistics Desk Officer Siège ONG)"
                },
                "senegal": {
                    "debutant": "600 000 à 1 000 000 FCFA net/mois (statut national ONG internationale)",
                    "intermediaire": "1 100 000 à 1 800 000 FCFA net/mois",
                    "expert": "2 000 000 à 3 500 000 FCFA net/mois (Coordinateur Logistique Régional Afrique de l'Ouest / Chef de base ONU/PAM)"
                }
            },
            "career": {
                "evolution": [
                    "Chef de Mission Humanitaire / Country Director ONG",
                    "Responsable du pôle Logistique au siège d'une organisation internationale (Genève, Paris, Rome, New York)",
                    "Coordinateur Logistique d'Urgence pour les agences des Nations Unies (OCHA, PAM, HCR, UNICEF)",
                    "Consultant international en sûreté, résilience et logistique de crise"
                ],
                "relatedJobs": [
                    "Supply Chain Manager",
                    "Responsable Sécurité et Sûreté",
                    "Directeur des Opérations d'Urgence",
                    "Ingénieur Sanitaire et Eau (WASH)"
                ],
                "associatedFamilies": [
                    "sante-social",
                    "securite-defense",
                    "politique-relations-internationales"
                ]
            },
            "sources": [
                {
                    "organization": "Bioforce Institute",
                    "title": "Métier : Coordinateur Logistique Humanitaire",
                    "url": "https://www.bioforce.org",
                    "type": "Centre d'excellence international en formation humanitaire"
                },
                {
                    "organization": "Imagine ton Futur",
                    "title": "Fiche Métier : Logisticien Humanitaire",
                    "url": "https://www.imaginetonfutur.com/les-metiers/logisticien-humanitaire.html",
                    "type": "Portail d'orientation"
                }
            ]
        },

        # 20. Ingénieur en Logistique Hospitalière
        {
            "id": "ingenieur-logistique-hospitaliere",
            "title": "Ingénieur en Logistique Hospitalière / Manager des Flux de Santé",
            "slug": "ingenieur-logistique-hospitaliere",
            "family": "transport-logistique-supply-chain",
            "familyLabel": "Transport, Logistique & Supply Chain",
            "domain": "logistique-sante-chaine-du-froid",
            "domainLabel": "Logistique de Santé, Pharmaceutique & Chaîne du Froid",
            "subdomain": "Flux intra-hospitaliers, pharmacie centrale & plateformes biomédicales",
            "badge": "📚 Référence Imagine ton Futur",
            "sourceImagineTonFutur": True,
            "brief": "L'ingénieur en logistique hospitalière conçoit et pilote l'ensemble des flux physiques, pharmaceutiques, hôteliers et de déchets au sein d'un centre hospitalier ou d'un groupement hospitalier de territoire (GHT).",
            "description": "L'hôpital est une ville dans la ville fonctionnant 24h/24 et 365 jours par an : l'ingénieur en logistique hospitalière en est le mécanicien des flux. Responsable de la performance, de la traçabilité et de la sécurité des approvisionnements, il coordonne des chaînes logistiques hautement critiques : délivrance des médicaments et dispositifs médicaux stériles depuis la pharmacie à usage intérieur (PUI) vers les blocs opératoires et services de soins, approvisionnement des linges propres et gestion du circuit du linge sale (norme RABC), distribution quotidienne des repas diététiques (liaison froide/chaude), acheminement urgent des prélèvements biologiques vers les laboratoires d'analyses, et évacuation réglementée des déchets d'activités de soins à risques infectieux (DASRI). Il introduit des technologies de pointe telles que les Véhicules à Guidage Automatique (AGV/tortues robotisées) dans les sous-sols techniques, le transport pneumatique sous vide et les armoires sécurisées connectées en réanimation, contribuant directement à soulager les soignants des tâches logistiques et à sécuriser la prise en charge des patients.",
            "missions": [
                "Modéliser et optimiser l'ensemble des circuits et flux logistiques de l'établissement de santé (médicaments, hôtellerie, stérilisation, déchets).",
                "Déployer et superviser les flottes de robots AGV et le réseau de pneumatiques hospitaliers.",
                "Gérer les stocks de sécurité sanitaire et de matériel médical stratégique (plans blancs, crises sanitaires).",
                "Superviser les équipes logistiques internes (brancardiers, magasiniers santé, conducteurs de navettes inter-sites, agents de voirie).",
                "Garantir la conformité aux normes d'hygiène hospitalière et de traçabilité des dispositifs médicaux implantables (DMI).",
                "Piloter les marchés publics d'achats logistiques et de prestations externalisées (blanchisserie industrielle, restauration hospitalière).",
                "Concevoir les schémas directeurs logistiques lors de rénovations ou constructions de nouveaux bâtiments hospitaliers."
            ],
            "skills": {
                "hard": [
                    "Ingénierie des flux logistiques et modélisation hospitalière (Lean Healthcare)",
                    "Connaissance des réglementations sanitaires (normes DASRI, RABC linge, HACCP repas, Bonnes Pratiques de Pharmacie)",
                    "Technologies d'automatisation intralogistique hospitalière (AGV, réseaux de pneumatiques, armoires Kanban connectées)",
                    "Gestion des marchés publics de santé (code de la commande publique)",
                    "Traçabilité code-barres / RFID des médicaments et dispositifs médicaux stériles"
                ],
                "soft": [
                    "Sens profond de la responsabilité et de l'impact direct sur la vie des patients",
                    "Aisance relationnelle pour dialoguer avec les médecins, pharmaciens et directeurs de soins",
                    "Capacité d'analyse méthodique des processus et conduite du changement",
                    "Calme et réactivité lors du déclenchement des Plans Blancs"
                ],
                "tools": [
                    "Systèmes d'information hospitaliers et logistiques (Maincare, GEF, SAP Santé, Magh2, Copilote)",
                    "Logiciels de gestion des AGV hospitaliers (Swisslog, Oppent, Aethon TUG)",
                    "Logiciels de modélisation de flux (FlexSim Healthcare, Arena)"
                ],
                "languages": [
                    "Français (maîtrise absolue, vocabulaire médical et hospitalier)",
                    "Anglais (B2 technique pour la documentation des équipements et benchmarks internationaux)"
                ]
            },
            "formations": {
                "france": [
                    "Diplôme d'Ingénieur en Génie Industriel / Logistique (Arts et Métiers, INSA, UTBM, Polytech)",
                    "Master Gestion de Production, Logistique, Achats parcours Logistique Hospitalière (Université d'Aix-Marseille, Université de Lorraine)",
                    "Titre de Manager de la Logistique Hospitalière (EHESP - École des Hautes Études en Santé Publique, Rennes)"
                ],
                "senegal": [
                    "Diplôme d'Ingénieur en Génie Industriel ou Électromécanique (ESP Dakar, Polytech Thiès)",
                    "Master en Gestion Hospitalière et des Systèmes de Santé (ISED / UCAD Dakar, CESAG Dakar)",
                    "Master Logistique des Produits de Santé (Faculté de Médecine et de Pharmacie UCAD / EBAD)"
                ]
            },
            "salaries": {
                "france": {
                    "debutant": "32 000 € à 38 000 € brut/an (Fonction publique hospitalière cat. A / Ingénieur hospitalier)",
                    "intermediaire": "40 000 € à 52 000 € brut/an (Ingénieur principal)",
                    "expert": "55 000 € à 75 000 € brut/an (Ingénieur général hospitalier / Directeur de la Logistique de CHU ou GHT)"
                },
                "senegal": {
                    "debutant": "350 000 à 550 000 FCFA net/mois",
                    "intermediaire": "600 000 à 950 000 FCFA net/mois",
                    "expert": "1 100 000 à 1 800 000 FCFA net/mois (Responsable Logistique d'un grand hôpital national : Fann, Dantec, Principal de Dakar)"
                }
            },
            "career": {
                "evolution": [
                    "Directeur des Services Économiques et Logistiques d'un centre hospitalier",
                    "Directeur de la chaîne logistique d'un Groupement Hospitalier de Territoire (GHT)",
                    "Directeur des Opérations chez un prestataire spécialisé en logistique pharmaceutique/médicale",
                    "Consultant en organisation et performance hospitalière"
                ],
                "relatedJobs": [
                    "Responsable Chaîne du Froid",
                    "Directeur d'Hôpital",
                    "Pharmacien Hospitalier Gérant",
                    "Ingénieur Biomédical"
                ],
                "associatedFamilies": [
                    "sante-social",
                    "industrie-ingenierie",
                    "administration-gestion-organisation"
                ]
            },
            "sources": [
                {
                    "organization": "EHESP",
                    "title": "École des Hautes Études en Santé Publique : Ingénierie logistique hospitalière",
                    "url": "https://www.ehesp.fr",
                    "type": "Grande école de santé publique"
                },
                {
                    "organization": "Imagine ton Futur",
                    "title": "Fiche Métier : Ingénieur logistique",
                    "url": "https://www.imaginetonfutur.com/les-metiers/ingenieur-logistique.html",
                    "type": "Portail d'orientation"
                }
            ]
        },

        # 21. Responsable Chaîne du Froid
        {
            "id": "responsable-chaine-du-froid",
            "title": "Responsable Chaîne du Froid & Logistique Pharmaceutique",
            "slug": "responsable-chaine-du-froid",
            "family": "transport-logistique-supply-chain",
            "familyLabel": "Transport, Logistique & Supply Chain",
            "domain": "logistique-sante-chaine-du-froid",
            "domainLabel": "Logistique de Santé, Pharmaceutique & Chaîne du Froid",
            "subdomain": "Températures dirigées, cryogénie & Bonnes Pratiques de Distribution",
            "badge": "📚 Référence Imagine ton Futur",
            "sourceImagineTonFutur": True,
            "brief": "Le responsable chaîne du froid garantit l'intégrité thermique ininterrompue des produits thermosensibles (vaccins, produits sanguins, biomédicaments, denrées fraîches) tout au long de leur stockage et transport.",
            "description": "Véritable garant de la sécurité sanitaire et de l'efficacité thérapeutique des médicaments, le responsable chaîne du froid et logistique pharmaceutique maîtrise les conditions de conservation sous températures dirigées les plus strictes : froid positif (+2°C/+8°C pour les vaccins et insulines, +15°C/+25°C pour les médicaments ambiants), froid négatif (-20°C pour le plasma), très basse température (-80°C pour les vaccins à ARN messager) et cryogénie sous azote liquide (-196°C pour les thérapies cellulaires). Évoluant chez des dépositaires pharmaceutiques, laboratoires, transporteurs sous température dirigée ou grands entrepôts agroalimentaires, il veille à la qualification métrologique des chambres froides, des conteneurs isothermes et des groupes frigorifiques embarqués. En stricte conformité avec les Bonnes Pratiques de Distribution en Gros (BPDG) de l'ANSM ou de l'OMS, il analyse les courbes d'enregistrement de température (dataloggers RFID/IoT), pilote les analyses d'excursions thermiques en cas d'alerte, et coordonne les protocoles de libération ou destruction des lots altérés.",
            "missions": [
                "Définir et superviser la politique de management de la chaîne du froid sur l'ensemble des sites de stockage et de transit.",
                "Qualifier et valider thermiquement les équipements (chambres froides, congélateurs ultra-basse température, camions frigorifiques, emballages isothermes).",
                "Monitorer en continu les données de température via des systèmes de supervision centralisés et gérer les astreintes 24/7 en cas d'alarme thermique.",
                "Instruire les dossiers d'excursion de température (calcul de la durée et de l'amplitude du dépassement, impact sur la stabilité du produit).",
                "Former les équipes logistiques et les chauffeurs aux exigences des Bonnes Pratiques de Distribution (BPD/BPDG) et à l'utilisation des enregistreurs de température.",
                "Sélectionner et auditer les transporteurs et partenaires sous température dirigée (certifications Certicold Pharma / ATP).",
                "Coordonner les retours et rappels de lots thermosensibles en cas d'incident qualité avéré."
            ],
            "skills": {
                "hard": [
                    "Bonnes Pratiques de Distribution de médicaments à usage humain (BPDG / GDP Europe / Guidelines OMS)",
                    "Thermodynamique appliquée et métrologie des températures (sondes PT100, étalonnage COFRAC)",
                    "Accord relatif aux transports internationaux de denrées périssables (Accord ATP)",
                    "Gestion des emballages isothermes actifs (moteurs Stirling, compresseurs) et passifs (plaques eutectiques, carboglace)",
                    "Analyse de risque qualité (FMEA / HACCP appliquée à la chaîne du froid)"
                ],
                "soft": [
                    "Rigueur scientifique sans concession et sens aigu de la conformité réglementaire",
                    "Disponibilité et grande réactivité face aux déclenchements d'alarmes hors heures ouvrées",
                    "Aptitude à trancher des décisions critiques de blocage/déblocage de produits de santé",
                    "Pédagogie pour former le personnel de quai et les transporteurs"
                ],
                "tools": [
                    "Systèmes de monitoring thermique IoT (Testo Saveris, JRI MySirius, Oceasoft, Elpro Libero)",
                    "Dataloggers de température USB / Bluetooth / RFID (Sensitech, Cryolog)",
                    "Logiciels de gestion de la qualité et déviations (TrackWise, Veeva Vault, Enablon)"
                ],
                "languages": [
                    "Français (maîtrise technique et réglementaire)",
                    "Anglais (B2/C1 professionnel nécessaire pour les audits internationaux et rapports de déviation)"
                ]
            },
            "formations": {
                "france": [
                    "Diplôme d'Ingénieur Frigoriste / Génie Thermique et Énergie (IFFI - Institut Français du Froid Industriel, INSA)",
                    "Master Logistique et Qualité des Produits de Santé (Université Paris-Saclay, Université de Strasbourg)",
                    "Docteur en Pharmacie (filière industrie) complété par un Master en Supply Chain Pharmaceutique",
                    "Licence Pro Métiers du Froid et du Conditionnement d'Air option Chaîne du Froid"
                ],
                "senegal": [
                    "Diplôme d'Ingénieur en Génie Électromécanique / Froid Industriel (ESP Dakar, CFPT Sénégal-Japon)",
                    "Master en Régulation et Assurance Qualité des Médicaments (Faculté de Pharmacie UCAD)",
                    "Formation qualifiante en Management de la Chaîne du Froid Vaccinale (Centre Régional de Formation OMS / UNICEF Dakar)"
                ]
            },
            "salaries": {
                "france": {
                    "debutant": "33 000 € à 39 000 € brut/an",
                    "intermediaire": "42 000 € à 54 000 € brut/an",
                    "expert": "58 000 € à 75 000 € brut/an (Responsable Cold Chain Global / Pharmacien Délégué Transport)"
                },
                "senegal": {
                    "debutant": "350 000 à 500 000 FCFA net/mois",
                    "intermediaire": "550 000 à 900 000 FCFA net/mois",
                    "expert": "1 000 000 à 1 700 000 FCFA net/mois (Responsable chaîne du froid chez un grossiste répartiteur ou au Programme Élargi de Vaccination PEV)"
                }
            },
            "career": {
                "evolution": [
                    "Directeur Qualité & Réglementaire Transport / GDP Manager",
                    "Directeur des Opérations Pharma & Cold Chain chez un 3PL spécialisé",
                    "Pharmacien Délégué / Pharmacien Responsable chez un dépositaire",
                    "Auditeur international en certification de chaîne du froid"
                ],
                "relatedJobs": [
                    "Ingénieur en Logistique Hospitalière",
                    "Responsable Qualité Agroalimentaire",
                    "Supply Chain Manager",
                    "Technicien Frigoriste Industriel"
                ],
                "associatedFamilies": [
                    "sante-social",
                    "agroalimentaire-agriculture",
                    "industrie-ingenierie"
                ]
            },
            "sources": [
                {
                    "organization": "Association Française du Froid (AFF)",
                    "title": "Guide des Bonnes Pratiques de la Chaîne du Froid du Médicament",
                    "url": "https://www.affroid.org",
                    "type": "Organisme de référence technique"
                },
                {
                    "organization": "Imagine ton Futur",
                    "title": "Fiche Métier : Responsable logistique",
                    "url": "https://www.imaginetonfutur.com/les-metiers/responsable-logistique.html",
                    "type": "Portail d'orientation"
                }
            ]
        },

        # 22. Ingénieur Transport & Mobilités Durables
        {
            "id": "ingenieur-transport-mobilite-durable",
            "title": "Ingénieur Transport & Mobilités Durables / Chef de Projet Décarbonation",
            "slug": "ingenieur-transport-mobilite-durable",
            "family": "transport-logistique-supply-chain",
            "familyLabel": "Transport, Logistique & Supply Chain",
            "domain": "logistique-verte-mobilite-durable",
            "domainLabel": "Logistique Verte, Éco-Mobilité & Transition Énergétique",
            "subdomain": "Décarbonation des flottes, report modal & logistique urbaine décarbonée",
            "badge": "📚 Référence Imagine ton Futur",
            "sourceImagineTonFutur": True,
            "brief": "L'ingénieur transport et mobilités durables conçoit et déploie des stratégies de décarbonation du transport de fret et de personnes, favorisant le report modal, l'électrification des flottes et les carburants alternatifs.",
            "description": "Face à l'urgence climatique et aux objectifs européens de neutralité carbone (Fit for 55, fin des moteurs thermiques, déploiement des Zones à Faibles Émissions ZFE-m), l'ingénieur transport et mobilités durables est le stratège de la transition écologique des transports. Au sein d'autorités organisatrices de transport (comme Île-de-France Mobilités ou le CETUD à Dakar), de bureaux d'études en ingénierie urbaine ou chez de grands transporteurs et chargeurs industriels, il pilote la décarbonation profonde des flottes : conversion aux véhicules électriques à batterie, bioGNV, hydrogène vert ou biocarburants (HVO100). Il structure les schémas de report modal vers le rail (ferroutage, autoroutes ferroviaires) et les voies navigables fluviales, optimise les circuits de cyclo-logistique urbaine (vélos-cargos et hubs de micro-logistique) et modélise les plans de déplacements urbains durables pour réduire drastiquement l'empreinte carbone (émissions Scope 1, 2 et 3) et la pollution atmosphérique aux particules fines.",
            "missions": [
                "Réaliser les bilans d'émissions de gaz à effet de serre (BEGES / Bilan Carbone) des activités de transport et plans de réduction associés.",
                "Étudier la faisabilité technico-économique de l'électrification des flottes de poids lourds, bus et véhicules utilitaires (autonomie, infrastructures de recharge IRVE).",
                "Concevoir et mettre en place des solutions de report modal (ferroviaire, fluvial, cabotage maritime).",
                "Dimensionner les réseaux de micro-hubs urbains pour la cyclo-logistique et la livraison douce du dernier kilomètre.",
                "Accompagner les entreprises dans l'obtention du label 'Objectif CO2' ou l'adhésion au programme FRET21 / EVE de l'ADEME.",
                "Modéliser les flux de circulation et les reports de trafic à l'aide de logiciels de simulation de mobilité.",
                "Rédiger les réponses aux appels d'offres publics de mobilités durables et négocier les financements de transition écologique."
            ],
            "skills": {
                "hard": [
                    "Méthodologie Bilan Carbone (ADEME) et comptabilité carbone transport (norme ISO 14083 / GLEC Framework)",
                    "Technologies de propulsion verte (électrique lourd, bornes IRVE forte puissance, hydrogène H2, BioGNV)",
                    "Ingénierie du report modal (techniques de transbordement rail-route, conteneurisation intermodale)",
                    "Réglementations environnementales (ZFE, directive CSRD, directive Eurovignette, loi Climat et Résilience)",
                    "Modélisation prospective des transports et analyses de cycle de vie (ACV)"
                ],
                "soft": [
                    "Conviction écologique et vision prospective des enjeux énergétiques",
                    "Capacité à convaincre des décideurs économiques avec des business cases rigoureux",
                    "Aisance pédagogique et conduite du changement auprès des exploitants de flotte",
                    "Rigueur d'analyse scientifique et goût pour l'innovation technologique"
                ],
                "tools": [
                    "Outils de calcul carbone transport (TK'Blue, BigMile, EcoTransIT World, Bilan Carbone ADEME)",
                    "Logiciels de modélisation de trafic et mobilités (Aimsun, Vissim, Cube, EMME)",
                    "Outils SIG environnementaux (ArcGIS, QGIS)"
                ],
                "languages": [
                    "Français (maîtrise experte écrite et orale)",
                    "Anglais (courant C1, indispensables pour les projets européens de R&D Horizon Europe et normes internationales)"
                ]
            },
            "formations": {
                "france": [
                    "Diplôme d'Ingénieur en Transport / Génie Urbain / Énergie (École des Ponts ParisTech, ENTPE, INSA Lyon, UTC)",
                    "Master Transports et Développement Durable (École des Ponts / AgroParisTech / Mines Paris)",
                    "Master Mobilités Durables et Transition Énergétique (Université Gustave Eiffel, Sciences Po Rennes)"
                ],
                "senegal": [
                    "Diplôme d'Ingénieur en Génie Civil / Transport et Mobilité (Polytech Thiès, ESP Dakar)",
                    "Master en Mobilités Urbaines Durables et Aménagement du Territoire (CETUD / EPUT Thiès / UCAD)",
                    "Master Environnement et Développement Durable (Institut des Sciences de l'Environnement ISE / UCAD)"
                ]
            },
            "salaries": {
                "france": {
                    "debutant": "35 000 € à 42 000 € brut/an",
                    "intermediaire": "44 000 € à 56 000 € brut/an",
                    "expert": "60 000 € à 85 000 € brut/an (Directeur Mobilités Durables / Green Supply Chain Director)"
                },
                "senegal": {
                    "debutant": "380 000 à 600 000 FCFA net/mois",
                    "intermediaire": "650 000 à 1 100 000 FCFA net/mois",
                    "expert": "1 200 000 à 2 200 000 FCFA net/mois (Chef de projet décarbonation au CETUD, BRT Dakar, ministères ou bailleurs AFD/Banque Mondiale)"
                }
            },
            "career": {
                "evolution": [
                    "Directeur de la Transition Écologique & RSE d'un grand groupe de transport ou logistique",
                    "Directeur des Mobilités d'une grande collectivité ou métropole",
                    "Chef de Département Ingénierie des Transports en bureau d'études (Egis, Systra, Setec)",
                    "Expert indépendant auprès des institutions internationales (Banque Mondiale, BAD, Union Européenne)"
                ],
                "relatedJobs": [
                    "Responsable RSE Transport",
                    "Ingénieur Ferroviaire",
                    "Urbaniste des Transports",
                    "Supply Chain Manager"
                ],
                "associatedFamilies": [
                    "environnement-developpement-durable",
                    "industrie-ingenierie",
                    "administration-gestion-organisation"
                ]
            },
            "sources": [
                {
                    "organization": "ADEME",
                    "title": "Programme EVE : Éco-responsabilité et valorisation des engagements transport",
                    "url": "https://www.ademe.fr",
                    "type": "Agence de la transition écologique"
                },
                {
                    "organization": "Imagine ton Futur",
                    "title": "Fiche Métier : Ingénieur transport",
                    "url": "https://www.imaginetonfutur.com/les-metiers/ingenieur-transport.html",
                    "type": "Portail d'orientation"
                }
            ]
        },

        # 23. Responsable Reverse Logistics
        {
            "id": "responsable-reverse-logistics",
            "title": "Responsable Reverse Logistics & Économie Circulaire",
            "slug": "responsable-reverse-logistics",
            "family": "transport-logistique-supply-chain",
            "familyLabel": "Transport, Logistique & Supply Chain",
            "domain": "logistique-verte-mobilite-durable",
            "domainLabel": "Logistique Verte, Éco-Mobilité & Transition Énergétique",
            "subdomain": "Gestion des retours, reconditionnement & recyclage des flux",
            "badge": "📚 Référence Imagine ton Futur",
            "sourceImagineTonFutur": True,
            "brief": "Le responsable reverse logistics conçoit et pilote les circuits logistiques retours des marchandises (produits e-commerce retournés, SAV, emballages réutilisables, équipements en fin de vie pour reconditionnement ou recyclage).",
            "description": "Porté par l'explosion du e-commerce (où le taux de retour peut dépasser 25-30% dans le textile et l'électronique) et les impératifs de la loi anti-gaspillage pour une économie circulaire (loi AGEC en France), le responsable reverse logistics gère les flux inversés, de l'utilisateur final vers l'entrepôt, l'usine de reconditionnement ou la filière de recyclage. Il transforme ce qui était auparavant un centre de coûts et de pertes en un levier stratégique de valeur ajoutée et de fidélisation client. Il optimise le transport retour (étiquettes pré-affranchies, points relais, casiers automatisés), met en place des cellules d'expertise technique pour le tri instantané des articles retournés (réintégration en stock comme neuf, réparation SAV, reconditionnement pour le marché de seconde main, ou démantèlement matière conforme aux filières REP - Déchets d'Équipements Électriques et Électroniques DEEE). Il supervise également la boucle fermée des contenants réutilisables et des palettes consignées, garantissant une empreinte écologique minimale.",
            "missions": [
                "Définir la politique globale de gestion des retours clients et SAV en accord avec la direction commerciale et financière.",
                "Concevoir le parcours physique et digital du retour (génération des bordereaux, réseaux de points de dépôt, étiquettes QR-code sans impression).",
                "Organiser les ateliers de contrôle qualité, diagnostic technique, nettoyage et reconditionnement au sein de l'entrepôt.",
                "Optimiser le taux de remise en stock immédiate (restocking) pour maximiser la rotation des inventaires.",
                "Développer les filières de valorisation des produits non réintégrables en stock (ventes en déstockage, dons aux associations, recyclage DEEE).",
                "Piloter la boucle logistique des emballages réutilisables, bacs navettes et palettes consignées (systèmes de lavage et réacheminement).",
                "Calculer et minimiser le coût unitaire du retour (Cost to Return) et les pertes d'exploitation."
            ],
            "skills": {
                "hard": [
                    "Processus de logistique des retours (Reverse Logistics & Circular Supply Chain)",
                    "Réglementation relative à l'économie circulaire (Loi AGEC, filières REP - Responsabilité Élargie du Producteur)",
                    "Techniques de diagnostic qualité et processus de reconditionnement industriel",
                    "Paramétrage des modules retours dans les WMS et ERP",
                    "Calcul des coûts complets de reverse logistics (transport retour, manutention, décote produit)"
                ],
                "soft": [
                    "Sens aigu de la rentabilité économique et de l'efficience opérationnelle",
                    "Orientation client et souci de l'expérience utilisateur",
                    "Esprit d'innovation dans les modèles d'économie circulaire",
                    "Rigueur d'organisation et capacité à gérer des flux déstructurés et imprévisibles"
                ],
                "tools": [
                    "Plateformes de gestion des retours e-commerce (Revers.io, Returnado, Narvar, ZigZag Global)",
                    "WMS modules Reverse (Manhattan, Reflex, Speed WMS)",
                    "Outils de traçabilité des contenants réutilisables (RFID, codes 2D)"
                ],
                "languages": [
                    "Français (courant)",
                    "Anglais (B2/C1 professionnel nécessaire pour les supply chains internationales et plateformes e-commerce transfrontalières)"
                ]
            },
            "formations": {
                "france": [
                    "BUT Management de la Logistique et des Transports (MLT)",
                    "Licence Pro Logistique et Économie Circulaire / Développement Durable",
                    "Master Management de la Supply Chain et Achats Éco-responsables (Kedge, Neoma, Université Paris-Dauphine)",
                    "Diplôme d'Ingénieur en Génie Industriel option Chaînes Logistiques Durables"
                ],
                "senegal": [
                    "Licence Pro en Logistique et Gestion des Flux (IAM Dakar, ISM, EBAD)",
                    "Master en Management de la Logistique et Développement Durable (BEM Dakar / CESAG)",
                    "Formation en Économie Circulaire et Gestion des Déchets Industriels (Institut des Sciences de l'Environnement ISE / UCAD)"
                ]
            },
            "salaries": {
                "france": {
                    "debutant": "30 000 € à 36 000 € brut/an",
                    "intermediaire": "38 000 € à 48 000 € brut/an",
                    "expert": "50 000 € à 68 000 € brut/an (Head of Reverse Logistics chez un géant du e-commerce ou de la mode)"
                },
                "senegal": {
                    "debutant": "300 000 à 450 000 FCFA net/mois",
                    "intermediaire": "500 000 à 850 000 FCFA net/mois",
                    "expert": "900 000 à 1 500 000 FCFA net/mois (Responsable logistique retours et recyclage dans la distribution ou les télécoms)"
                }
            },
            "career": {
                "evolution": [
                    "Directeur Logistique E-commerce",
                    "Directeur de la Supply Chain Circulaire & RSE",
                    "Responsable des Opérations SAV & Reconditionnement",
                    "Directeur d'Usine de Recyclage et Reconditionnement"
                ],
                "relatedJobs": [
                    "Logisticien E-commerce",
                    "Supply Chain Manager",
                    "Responsable d'Entrepôt",
                    "Ingénieur RSE"
                ],
                "associatedFamilies": [
                    "environnement-developpement-durable",
                    "commerce-vente-distribution",
                    "industrie-ingenierie"
                ]
            },
            "sources": [
                {
                    "organization": "France Supply Chain by Aslog",
                    "title": "Livre Blanc : La Reverse Logistics au cœur de l'économie circulaire",
                    "url": "https://www.francesupplychain.org",
                    "type": "Association professionnelle des directeurs supply chain"
                },
                {
                    "organization": "Imagine ton Futur",
                    "title": "Fiche Métier : Responsable logistique",
                    "url": "https://www.imaginetonfutur.com/les-metiers/responsable-logistique.html",
                    "type": "Portail d'orientation"
                }
            ]
        },

        # 24. Logisticien E-commerce
        {
            "id": "logisticien-e-commerce",
            "title": "Logisticien E-commerce & Gestionnaire Flux Omnicanaux",
            "slug": "logisticien-e-commerce",
            "family": "transport-logistique-supply-chain",
            "familyLabel": "Transport, Logistique & Supply Chain",
            "domain": "e-commerce-omnicanal",
            "domainLabel": "Logistique E-Commerce, Distribution Omnicanale & Fulfillment",
            "subdomain": "Fulfillment center, préparation unitaire & intégration marketplace",
            "badge": "📚 Référence Imagine ton Futur",
            "sourceImagineTonFutur": True,
            "brief": "Le logisticien e-commerce pilote les processus de stockage, préparation de commandes au détail et expédition rapide (fulfillment) pour les boutiques en ligne, places de marché et réseaux de distribution omnicanaux.",
            "description": "À la croisée de la vente en ligne, de la tech et des opérations physiques, le logisticien e-commerce gère les flux ultra-cadencés des entrepôts de fulfillment (Amazon, Cdiscount, prestataires spécialisés ou hubs retail omnicanaux). Contrairement à la logistique traditionnelle qui manipule des palettes complètes, il orchestre la préparation unitaire (Each Picking) pour des millions de références expédiées à l'unité sous des délais ultra-courts (Same-Day Delivery, Next-Day Delivery, Click & Collect sous 2 heures). Il synchronise en temps réel les flux d'informations entre les CMS e-commerce (Shopify, Magento), les marketplaces et le WMS de l'entrepôt. Responsable de la productivité et de la qualité de service, il configure les vagues de préparation (batch picking, put-to-light, pick-to-belt), optimise les emballages éco-conçus sur-mesure (réduction du vide dans les colis) et négocie les contrats de messagerie express pour garantir des taux de livraison dans les délais (OTIF) proches de 100%.",
            "missions": [
                "Superviser les opérations de réception, stockage dynamique (chaotique/random storage) et préparation de commandes e-commerce.",
                "Ordonnancer les vagues de préparation en fonction des cut-offs des transporteurs et des promesses de livraison clients.",
                "Optimiser l'ergonomie et la vitesse des postes d'emballage (packing stations) et le contrôle pondéral anti-erreur.",
                "Assurer la synchronisation parfaite des stocks en temps réel entre le site e-commerce, les marketplaces et l'entrepôt.",
                "Gérer les pics d'activité saisonniers intenses (Black Friday, Cyber Monday, fêtes de fin d'année, soldes).",
                "Sélectionner et piloter les prestataires de transport express et de livraison du dernier kilomètre (Colissimo, Chronopost, Mondial Relay, DPD).",
                "Suivre les indicateurs clés de performance e-commerce (temps de traitement commande, taux d'erreur de picking, coût logistique par colis)."
            ],
            "skills": {
                "hard": [
                    "Techniques de préparation de commandes unitaires (Picking vocal, Put-to-Light, Goods-to-Person)",
                    "Maîtrise des intégrations API e-commerce (Shopify, PrestaShop, Mirakl, WooCommerce) avec les WMS/ERP",
                    "Packaging e-commerce éco-responsable et machines d'emballage sur-mesure (3D packaging)",
                    "Connaissance fine des réseaux de messagerie express et points relais",
                    "Gestion des flux omnicanaux (Ship-from-Store, Click & Collect, Reserve & Collect)"
                ],
                "soft": [
                    "Agilité et résistance au stress lors des pics de charge extrêmes",
                    "Obsession pour la satisfaction du consommateur final et le zéro défaut",
                    "Capacité à motiver et encadrer des équipes de préparateurs sous forte pression de cadence",
                    "Esprit orienté données (Data-driven mindset)"
                ],
                "tools": [
                    "WMS spécialisés e-commerce (Reflex, Manhattan Active Omni, Speed WMS, Logiway)",
                    "Connecteurs flux e-commerce (Shippingbo, Sendcloud, Boxtal, Shipup)",
                    "Outils de gestion d'entrepôt assistée (scanners Android industriels Zebra, ring scanners)"
                ],
                "languages": [
                    "Français (courant)",
                    "Anglais (B2 professionnel indispensable pour les outils logiciels et les échanges avec les plateformes internationales)"
                ]
            },
            "formations": {
                "france": [
                    "BTS Gestion des Transports et Logistique Associée (GTLA)",
                    "BUT Management de la Logistique et des Transports (MLT)",
                    "Licence Pro E-Logistique et Distribution Omnicanale (Université Paris-Est Créteil, Université d'Angers)",
                    "Master Supply Chain & E-Commerce (Kedge Business School, ISEL Le Havre, NEOMA)"
                ],
                "senegal": [
                    "BTS Transport-Logistique (CFPT Sénégal-Japon, Institut Supérieur de Management ISM)",
                    "Licence Professionnelle en E-Commerce & Logistique Digitale (IAM Dakar, BEM Dakar)",
                    "Master Management Logistique et Distribution (CESAG Dakar, Faculté d'Économie UCAD)"
                ]
            },
            "salaries": {
                "france": {
                    "debutant": "27 000 € à 33 000 € brut/an",
                    "intermediaire": "35 000 € à 45 000 € brut/an",
                    "expert": "48 000 € à 65 000 € brut/an (Fulfillment Operations Manager / Directeur Logistique E-Commerce)"
                },
                "senegal": {
                    "debutant": "250 000 à 400 000 FCFA net/mois",
                    "intermediaire": "450 000 à 750 000 FCFA net/mois",
                    "expert": "800 000 à 1 400 000 FCFA net/mois (Head of Operations chez Jumia, plateformes de livraison ou distributeurs omnicanaux)"
                }
            },
            "career": {
                "evolution": [
                    "Fulfillment Operations Director / Directeur de site logistique e-commerce",
                    "Head of Supply Chain & Omnichannel d'une marque de retail",
                    "Consultant en transformation digitale des entrepôts et e-logistique",
                    "Directeur des opérations de livraison dernier kilomètre"
                ],
                "relatedJobs": [
                    "Responsable d'Entrepôt",
                    "Responsable Reverse Logistics",
                    "Supply Chain Manager",
                    "Responsable E-Commerce"
                ],
                "associatedFamilies": [
                    "commerce-vente-distribution",
                    "numerique-intelligence-artificielle",
                    "marketing-communication"
                ]
            },
            "sources": [
                {
                    "organization": "FEVAD",
                    "title": "Fédération du e-commerce et de la vente à distance : Baromètre de la logistique e-commerce",
                    "url": "https://www.fevad.com",
                    "type": "Fédération professionnelle"
                },
                {
                    "organization": "Imagine ton Futur",
                    "title": "Fiche Métier : Logisticien",
                    "url": "https://www.imaginetonfutur.com/les-metiers/logisticien.html",
                    "type": "Portail d'orientation"
                }
            ]
        },

        # 25. Ingénieur Automatisation Intralogistique & Robotique
        {
            "id": "ingenieur-en-automatisation-intralogistique",
            "title": "Ingénieur Automatisation Intralogistique & Robotique d'Entrepôt",
            "slug": "ingenieur-en-automatisation-intralogistique",
            "family": "transport-logistique-supply-chain",
            "familyLabel": "Transport, Logistique & Supply Chain",
            "domain": "intralogistique-robotique",
            "domainLabel": "Intralogistique, Automatisation, Robotique & Entrepôts 4.0",
            "subdomain": "Robots mobiles AMR/AGV, transtockeurs & systèmes Goods-to-Person",
            "badge": "📚 Référence Imagine ton Futur",
            "sourceImagineTonFutur": True,
            "brief": "L'ingénieur en automatisation intralogistique conçoit, déploie et optimise les systèmes robotiques et automatisés au sein des entrepôts modernes (transtockeurs, robots AMR, trieurs haute cadence).",
            "description": "L'entrepôt du XXIe siècle est une usine numérique ultra-automatisée : l'ingénieur en automatisation intralogistique en est le concepteur et le pilote technique. Travaillant chez des intégrateurs et constructeurs mondiaux de robotique d'entrepôt (Dematic, Vanderlande, Swisslog, Fives, Exotec, Scallog) ou chez de grands donneurs d'ordre logistiques, il conçoit des architectures mécatroniques complexes pour supprimer la pénibilité physique et démultiplier les cadences de traitement. Il supervise l'ingénierie et le déploiement d'équipements de pointe : magasins automatiques grande hauteur à transtockeurs (AS/RS), flottes de robots mobiles autonomes (AMR) naviguant par cartographie LiDAR (SLAM), systèmes Goods-to-Person où des flottes de robots apportent les bacs directement aux opérateurs, convoyeurs intelligents et trieurs à haute cadence (Cross-Belt sorters à plus de 15 000 colis/heure). Il assure l'interfaçage logiciel critique entre les automates programmables industriels (PLC), le Warehouse Execution System (WES), le Warehouse Control System (WCS) et le WMS central.",
            "missions": [
                "Concevoir les schémas d'implantation et dimensionner les architectures mécaniques et logicielles des systèmes automatisés d'entrepôt.",
                "Rédiger les cahiers des charges fonctionnels et techniques pour les sous-systèmes robotiques et convoyeurs.",
                "Programmer et tester les automates industriels (PLC Siemens, Schneider, Beckhoff) et les contrôleurs de mouvement.",
                "Assurer l'interfaçage et l'intégration des flux de données entre les couches WCS/WES et le progiciel WMS.",
                "Superviser les phases de montage sur site, de mise en service (commissioning) et de tests de performance (ramp-up).",
                "Optimiser les algorithmes d'évitement d'obstacles, de routage des flottes de robots et d'équilibrage de charge dynamique.",
                "Former les équipes de maintenance de site et diagnostiquer les anomalies complexes d'arrêt de ligne en production."
            ],
            "skills": {
                "hard": [
                    "Automatismes industriels et programmation PLC (Siemens TIA Portal, Step 7, Beckhoff TwinCAT, Rockwell)",
                    "Robotique mobile industrielle et navigation autonome (SLAM, LiDAR, ROS - Robot Operating System)",
                    "Architecture des couches logicielles d'entrepôt (WMS, WCS, WES, SCADA)",
                    "Mécatronique, pneumatique industrielle, variateurs de vitesse et bus de terrain (Profinet, EtherCAT)",
                    "Sûreté de fonctionnement des machines (norme ISO 13849, barrières immatérielles, arrêts d'urgence)"
                ],
                "soft": [
                    "Rigueur d'analyse technique et méthodique",
                    "Capacité à résoudre des pannes complexes sous forte pression temporelle",
                    "Sens aigu du travail collaboratif pluridisciplinaire (mécanique, informatique, exploitation)",
                    "Goût pour le terrain industriel et disponibilité pour des déplacements sur site"
                ],
                "tools": [
                    "Logiciels de programmation d'automates (Siemens TIA Portal, CoDeSys)",
                    "Logiciels de CAO/DAO mécanique et d'implantation (AutoCAD, SolidWorks)",
                    "Logiciels d'émulation et de jumeau numérique (Emulate3D, Demo3D, FlexSim)"
                ],
                "languages": [
                    "Français (maîtrise technique)",
                    "Anglais (courant C1 obligatoire pour la documentation constructeurs, le code et les projets internationaux)"
                ]
            },
            "formations": {
                "france": [
                    "Diplôme d'Ingénieur en Automatique, Robotique ou Mécatronique (INSA, UTC, Arts et Métiers, ENSEA, Polytech)",
                    "Master Automatique et Systèmes Intelligents / Ingénierie des Systèmes Complexes",
                    "Licence Pro Automatisme et Informatique Industrielle complétée par une solide expérience intralogistique"
                ],
                "senegal": [
                    "Diplôme d'Ingénieur en Génie Électromécanique / Électronique & Automatique (ESP Dakar, Polytech Thiès)",
                    "Master en Mécatronique et Systèmes Intelligents (UGB Saint-Louis, Université Amadou Mahtar Mbow UAM)",
                    "Licence Professionnelle en Automatisme et Robotique Industrielle (CFPT Sénégal-Japon Dakar)"
                ]
            },
            "salaries": {
                "france": {
                    "debutant": "36 000 € à 43 000 € brut/an",
                    "intermediaire": "45 000 € à 58 000 € brut/an",
                    "expert": "60 000 € à 85 000 € brut/an (Directeur Technique Automation / Intralogistics Solutions Architect)"
                },
                "senegal": {
                    "debutant": "400 000 à 650 000 FCFA net/mois",
                    "intermediaire": "700 000 à 1 200 000 FCFA net/mois",
                    "expert": "1 300 000 à 2 300 000 FCFA net/mois (Ingénieur expert automatisation sur terminaux à conteneurs modernes DP World ou usines automatisées)"
                }
            },
            "career": {
                "evolution": [
                    "Directeur des Projets d'Automatisation & Ingénierie d'Entrepôt",
                    "Architecte Solutions Intralogistiques chez un fabricant de robots (Exotec, Dematic, Knapp)",
                    "Directeur de la Maintenance et des Systèmes Automatisés de grands sites logistiques",
                    "Consultant expert en modernisation et robotisation logistique 4.0"
                ],
                "relatedJobs": [
                    "Ingénieur Mécatronique",
                    "Supply Chain Data Analyst",
                    "Responsable Maintenance Industrielle",
                    "Chef de Projet WMS"
                ],
                "associatedFamilies": [
                    "industrie-ingenierie",
                    "numerique-intelligence-artificielle",
                    "artisanat-metiers-techniques"
                ]
            },
            "sources": [
                {
                    "organization": "France Automation / Gimélec",
                    "title": "Observatoire de l'automatisation et de la robotisation intralogistique",
                    "url": "https://www.gimelec.fr",
                    "type": "Organisation professionnelle"
                },
                {
                    "organization": "Imagine ton Futur",
                    "title": "Fiche Métier : Ingénieur automaticien",
                    "url": "https://www.imaginetonfutur.com/les-metiers/automaticien.html",
                    "type": "Portail d'orientation"
                }
            ]
        },

        # 26. Supply Chain Data Analyst
        {
            "id": "supply-chain-data-analyst",
            "title": "Supply Chain Data Analyst / Planificateur de Flux Prédictifs",
            "slug": "supply-chain-data-analyst",
            "family": "transport-logistique-supply-chain",
            "familyLabel": "Transport, Logistique & Supply Chain",
            "domain": "intralogistique-robotique",
            "domainLabel": "Intralogistique, Automatisation, Robotique & Entrepôts 4.0",
            "subdomain": "Analytics supply chain, prévision de la demande par l'IA & dashboards",
            "badge": "📚 Référence Imagine ton Futur",
            "sourceImagineTonFutur": True,
            "brief": "Le supply chain data analyst extrait, modélise et valorise les masses de données issues de la chaîne logistique afin d'optimiser les niveaux de stock, de prévoir la demande future et de fluidifier les opérations de transport.",
            "description": "Pilier de la tour de contrôle (Supply Chain Control Tower), le Supply Chain Data Analyst fait le pont entre la science des données et la réalité des opérations de transport et stockage. Confronté à des volumes massifs de données générées par les ERP, WMS, TMS, capteurs IoT et bourses de fret, il conçoit des modèles statistiques et des algorithmes de machine learning prédictifs. Sa mission : anticiper la demande des consommateurs avec une précision maximale pour éviter le piège des ruptures de stock ou le surstockage coûteux (effet coup de fouet / Bullwhip effect), optimiser les itinéraires de distribution en fonction des prévisions de trafic et de météo, mesurer avec exactitude l'empreinte carbone par colis, et construire des tableaux de bord interactifs en temps réel pour éclairer les arbitrages stratégiques des directeurs supply chain.",
            "missions": [
                "Collecter, nettoyer et consolider les données hétérogènes issues des WMS, TMS, ERP et systèmes IoT.",
                "Développer des modèles de prévision de la demande (Demand Planning) intégrant des variables externes (saisonnalité, météo, promotions).",
                "Construire et administrer les tableaux de bord de pilotage opérationnel et financier (KPI : taux de service OTIF, rotation des stocks, coût de transport au kg).",
                "Identifier les goulots d'étranglement logistiques et proposer des scénarios d'optimisation par simulation numérique.",
                "Modéliser les stocks de sécurité optimaux en fonction de la variabilité des délais fournisseurs (Lead Time).",
                "Collaborer avec les équipes IT/Data pour automatiser les pipelines de données et alimenter les tours de contrôle décisionnelles.",
                "Présenter des analyses actionnables aux équipes d'approvisionnement, d'entrepôt et de transport."
            ],
            "skills": {
                "hard": [
                    "Analyse de données et statistiques appliquées à la supply chain (Python - Pandas, NumPy, Scikit-learn, R)",
                    "Requêtage SQL avancé sur bases de données relationnelles et data warehouses (BigQuery, Snowflake)",
                    "Outils de Business Intelligence et dataviz (Power BI, Tableau Software, Qlik Sense)",
                    "Modèles mathématiques de gestion des stocks (formule de Wilson, modélisation stochastique, S&OP)",
                    "Compréhension approfondie des processus de transport, de stockage et d'approvisionnement"
                ],
                "soft": [
                    "Esprit d'analyse aiguisé et rigueur méthodologique",
                    "Capacité à traduire des données mathématiques complexes en recommandations opérationnelles concrètes",
                    "Curiosité intellectuelle et aisance de communication avec les équipes de terrain",
                    "Sens des priorités face aux urgences opérationnelles"
                ],
                "tools": [
                    "Langages : Python, SQL, R",
                    "Outils BI : Microsoft Power BI, Tableau, Looker",
                    "Data Platforms : Snowflake, Databricks, Google Cloud BigQuery",
                    "Logiciels APS (Advanced Planning Systems) : Kinaxis RapidResponse, Blue Yonder, OMP, SAP IBP"
                ],
                "languages": [
                    "Français (courant)",
                    "Anglais (C1 professionnel, standard international de la communauté data et des éditeurs logiciels)"
                ]
            },
            "formations": {
                "france": [
                    "Diplôme d'Ingénieur avec spécialisation Data Science ou Génie Industriel / Supply Chain (CentraleSupélec, INSA, Télécom Paris)",
                    "Master Data Science pour l'Économie et l'Entreprise (Université Paris-Dauphine, Sorbonne Université)",
                    "Master Spécialisé Supply Chain Management & Data Analytics (ESSEC, emlyon, Kedge)",
                    "BUT Statistique et Informatique Décisionnelle (STID) complété par une formation supply chain"
                ],
                "senegal": [
                    "Diplôme d'Ingénieur Informatique / Télécoms option Big Data (ESP Dakar, EPT Thiès)",
                    "Master en Science des Données et Intelligence Artificielle (Université Amadou Mahtar Mbow UAM, UCAD)",
                    "Master en Méthodes Statistiques et Économétriques / Actuariat (ENSAE Dakar)",
                    "Master Management de la Supply Chain Digitale (BEM Management School Dakar)"
                ]
            },
            "salaries": {
                "france": {
                    "debutant": "38 000 € à 45 000 € brut/an",
                    "intermediaire": "48 000 € à 62 000 € brut/an",
                    "expert": "65 000 € à 85 000 € brut/an (Lead Supply Chain Data Scientist / Head of Supply Chain Analytics)"
                },
                "senegal": {
                    "debutant": "400 000 à 650 000 FCFA net/mois",
                    "intermediaire": "700 000 à 1 200 000 FCFA net/mois",
                    "expert": "1 300 000 à 2 200 000 FCFA net/mois (Data Analyst senior au sein de multinationales de transport, de télécoms ou banques à Dakar)"
                }
            },
            "career": {
                "evolution": [
                    "Lead Supply Chain Data Scientist / Manager Tour de Contrôle Logistique",
                    "Directeur des Prévisions et de la Planification Globale (Demand & Supply Planning Director)",
                    "Chief Data Officer appliqué à la Supply Chain",
                    "Consultant senior en transformation data et supply chain prédictive"
                ],
                "relatedJobs": [
                    "Directeur Supply Chain",
                    "Data Scientist",
                    "Ingénieur Automatisation Intralogistique",
                    "Gestionnaire de Stocks"
                ],
                "associatedFamilies": [
                    "numerique-intelligence-artificielle",
                    "finance-comptabilite-gestion",
                    "industrie-ingenierie"
                ]
            },
            "sources": [
                {
                    "organization": "Imagine ton Futur",
                    "title": "Fiche Métier : Data analyst",
                    "url": "https://www.imaginetonfutur.com/les-metiers/data-analyst.html",
                    "type": "Portail d'orientation"
                },
                {
                    "organization": "Supply Chain Magazine",
                    "title": "Dossier : La data au cœur de la tour de contrôle logistique",
                    "url": "https://www.supplychainmagazine.fr",
                    "type": "Presse spécialisée professionnelle"
                }
            ]
        },

        # 27. Responsable Sécurité, Sûreté & Conformité Transport
        {
            "id": "responsable-securite-surete-transport",
            "title": "Responsable Sécurité, Sûreté & Conformité Transport",
            "slug": "responsable-securite-surete-transport",
            "family": "transport-logistique-supply-chain",
            "familyLabel": "Transport, Logistique & Supply Chain",
            "domain": "securite-surete-conformite",
            "domainLabel": "Sécurité, Sûreté, Risques & Conformité Logistique",
            "subdomain": "Règlementations TMD/ADR, sûreté du fret, TAPA & certifications",
            "badge": "📚 Référence Imagine ton Futur",
            "sourceImagineTonFutur": True,
            "brief": "Le responsable sécurité, sûreté et conformité veille au respect des normes de sécurité au travail, à la prévention des accidents de la route, à la protection anti-intrusion des cargaisons (TAPA) et au transport de marchandises dangereuses.",
            "description": "Dans un secteur soumis à des risques physiques majeurs et à des menaces criminelles croissantes (vols de fret, piraterie maritime, intrusions de migrants, cyberattaques sur les WMS), le Responsable Sécurité, Sûreté et Conformité est le garant de la protection des hommes, des cargaisons et des infrastructures. Il pilote le Document Unique d'Évaluation des Risques Professionnels (DUERP) sur les sites logistiques, sensibilise aux gestes et postures pour éradiquer les accidents du travail et les troubles musculosquelettiques (TMS) des manutentionnaires. Sur le volet sûreté, il implémente les standards internationaux de lutte contre le vol de marchandises à haute valeur ajoutée (normes TAPA TSR pour le transport routier et FSR pour les entrepôts), pilote la vidéosurveillance, le contrôle d'accès biométrique et le scellement haute sécurité des conteneurs. Souvent désigné comme Conseiller à la Sécurité pour le Transport des Marchandises Dangereuses (TMD / ADR route, RID rail, code IMDG mer, IATA DGR air), il certifie les protocoles de chargement des produits chimiques, inflammables ou explosifs.",
            "missions": [
                "Élaborer et mettre en œuvre la politique de santé, sécurité au travail et sûreté sur les plateformes logistiques et les réseaux de transport.",
                "Rédiger et actualiser le Document Unique d'Évaluation des Risques Professionnels (DUERP) et les plans de prévention.",
                "Superviser les protocoles de transport et de stockage des matières dangereuses en conformité avec les réglementations TMD (ADR, IMDG, IATA).",
                "Piloter les dispositifs de sûreté physique et anti-intrusion des entrepôts (vidéoprotection intelligente, contrôle d'accès, gardiennage).",
                "Conduire les enquêtes après accident du travail ou incident de transport (arbre des causes) et définir les plans d'actions correctives.",
                "Mettre en conformité les sites avec les standards internationaux (certification TAPA, ISO 45001, OHSAS 18001).",
                "Former les conducteurs et le personnel d'entrepôt aux risques professionnels, à l'éco-conduite sécuritaire et aux protocoles d'alerte."
            ],
            "skills": {
                "hard": [
                    "Réglementation TMD (certification de Conseiller à la Sécurité ADR / IMDG / IATA DGR)",
                    "Standards internationaux de sûreté du fret (normes TAPA FSR/TSR, Opérateur Économique Agréé volet Sécurité OEA-S)",
                    "Santé et sécurité au travail en milieu logistique (normes ISO 45001, CACES, protocoles de chargement/déchargement)",
                    "Maîtrise des systèmes de sécurité électronique (contrôle d'accès, vidéosurveillance CCTV, détection intrusion, sprinklers)",
                    "Méthodes d'analyse des risques (Arbre des causes, HAZOP, AMDEC)"
                ],
                "soft": [
                    "Autorité naturelle, fermeté et rigueur absolue dans l'application des règles de sécurité",
                    "Qualités de pédagogue et force de conviction pour diffuser une culture de sécurité partagée",
                    "Sang-froid et méthode lors de situations d'urgence ou d'accidents graves",
                    "Discrétion et intégrité morale irréprochable"
                ],
                "tools": [
                    "Logiciels de gestion QHSE (Enablon, Divalto, Tenforce)",
                    "Systèmes de contrôle d'accès et vidéosurveillance (Genetec, Milestone, Nedap)",
                    "Outils de déclaration et suivi des incidents (registres dématérialisés des accidents)"
                ],
                "languages": [
                    "Français (maîtrise absolue du droit du travail et des réglementations)",
                    "Anglais (B2 professionnel indispensable pour les audits de sûreté internationaux TAPA et la documentation TMD)"
                ]
            },
            "formations": {
                "france": [
                    "Certificat de Conseiller à la Sécurité pour le Transport des Marchandises Dangereuses (examen CIFMD obligatoire)",
                    "Diplôme d'Ingénieur Hygiène, Sécurité, Environnement (INSA, Polytech, ESAIP)",
                    "Master Qualité, Sécurité, Environnement (QSE) et Management des Risques Industriels",
                    "BUT Hygiène, Sécurité, Environnement (HSE)"
                ],
                "senegal": [
                    "Diplôme d'Ingénieur en Génie de l'Environnement et Sécurité Industrielle (ESP Dakar, EPT Thiès)",
                    "Master QHSE (Qualité, Hygiène, Sécurité, Environnement) (ISM Dakar, IAM, Faculté des Sciences UCAD)",
                    "Certificat de Spécialisation en Sûreté Portuaire et Maritime Code ISPS (Centre de Formation Douanière / PAD)"
                ]
            },
            "salaries": {
                "france": {
                    "debutant": "32 000 € à 38 000 € brut/an",
                    "intermediaire": "40 000 € à 52 000 € brut/an",
                    "expert": "55 000 € à 75 000 € brut/an (Directeur Sûreté & Sécurité Supply Chain Groupe)"
                },
                "senegal": {
                    "debutant": "350 000 à 500 000 FCFA net/mois",
                    "intermediaire": "550 000 à 900 000 FCFA net/mois",
                    "expert": "1 000 000 à 1 800 000 FCFA net/mois (Responsable HSE/Sûreté sur terminaux portuaires miniers, pétroliers ou conteneurs)"
                }
            },
            "career": {
                "evolution": [
                    "Directeur QHSE / Sûreté d'un groupe de transport ou logistique",
                    "Conseiller à la sécurité indépendant / Auditeur TAPA accrédité",
                    "Directeur de la Prévention des Risques et des Assurances Transport",
                    "Consultant senior en management des risques et conformité réglementaire"
                ],
                "relatedJobs": [
                    "Responsable d'Entrepôt",
                    "Auditeur Conformité Douanière OEA",
                    "Ingénieur QHSE",
                    "Chef d'Exploitation Transport"
                ],
                "associatedFamilies": [
                    "securite-defense",
                    "droit-justice",
                    "industrie-ingenierie"
                ]
            },
            "sources": [
                {
                    "organization": "INRS",
                    "title": "Santé et sécurité dans les métiers du transport et de la logistique",
                    "url": "https://www.inrs.fr",
                    "type": "Institut national de recherche et de sécurité"
                },
                {
                    "organization": "Imagine ton Futur",
                    "title": "Fiche Métier : Responsable sécurité",
                    "url": "https://www.imaginetonfutur.com/les-metiers/responsable-securite.html",
                    "type": "Portail d'orientation"
                }
            ]
        },

        # 28. Auditeur & Expert en Conformité Douanière / OEA
        {
            "id": "auditeur-conformite-douaniere-oea",
            "title": "Auditeur & Expert en Conformité Douanière / Statut OEA",
            "slug": "auditeur-conformite-douaniere-oea",
            "family": "transport-logistique-supply-chain",
            "familyLabel": "Transport, Logistique & Supply Chain",
            "domain": "securite-surete-conformite",
            "domainLabel": "Sécurité, Sûreté, Risques & Conformité Logistique",
            "subdomain": "Statut OEA, audits de conformité douanière & contentieux",
            "badge": "📚 Référence Imagine ton Futur",
            "sourceImagineTonFutur": True,
            "brief": "L'auditeur en conformité douanière garantit la rigueur légale des opérations de commerce extérieur d'une entreprise et pilote l'obtention et le maintien du statut d'Opérateur Économique Agréé (OEA).",
            "description": "Évoluant à la frontière du droit des affaires, de la fiscalité internationale et de la supply chain, l'auditeur en conformité douanière (Customs Compliance Specialist) est le conseiller juridique et stratégique des grands groupes exportateurs et importateurs. Il audite de manière exhaustive les processus douaniers internes pour prévenir les redressements et poursuites pénales douanières : exactitude de l'espèce tarifaire (code SH / TARIC), justification indiscutable de l'origine préférentielle et non préférentielle des composants, et détermination rigoureuse de la valeur en douane (prix de transfert, redevances, ajustements). Maître d'œuvre du prestigieux statut d'Opérateur Économique Agréé (OEA Simplifications douanières / Sécurité-Sûreté), délivré par les administrations douanières (DGDDI en France, Douanes sénégalaises), il conduit les audits d'auto-évaluation, met en place les pistes d'audit fiables et négocie avec les autorités douanières des régimes économiques avantageux (perfectionnement actif/passif, entrepôt sous douane) générant d'immenses gains de trésorerie.",
            "missions": [
                "Conduire des audits douaniers internes et identifier les zones de risques de non-conformité ou de redressement fiscal.",
                "Piloter le projet d'obtention, de maintien et d'audit de renouvellement du statut d'Opérateur Économique Agréé (OEA).",
                "Sécuriser les déclarations de classement tarifaire (dépôt de Renseignements Tarifaires Contraignants - RTC).",
                "Valider les règles d'origine des marchandises exportées (Renseignements sur l'Origine Contraignants - ROC, statut d'Exportateur Enregistré REX).",
                "Optimiser le recours aux régimes douaniers particuliers (admission temporaire, perfectionnement actif/passif, transit sous douane).",
                "Assister l'entreprise lors des contrôles des agents des douanes et instruire les réponses aux avis de redressement ou contentieux.",
                "Former les équipes achats, logistique et commerciale aux exigences réglementaires douanières."
            ],
            "skills": {
                "hard": [
                    "Code des Douanes de l'Union (CDU) et réglementation douanière UEMOA/CEDEAO",
                    "Technique du triptyque douanier fondamental : Espèce tarifaire (SH), Origine (règles de cumul, accords de libre-échange), Valeur en douane",
                    "Référentiel OEA (Opérateur Économique Agréé) et normes de sécurité internationales",
                    "Régimes douaniers économiques et facilitations fiscales",
                    "Audit juridique, contrôle interne et méthodologie de la piste d'audit fiable"
                ],
                "soft": [
                    "Rigueur intellectuelle et juridique absolue",
                    "Sens aigu de la négociation et diplomatie avec les administrations étatiques",
                    "Capacité d'analyse critique et de synthèse de dossiers complexes",
                    "Pédagogie pour vulgariser le droit douanier auprès des opérationnels"
                ],
                "tools": [
                    "Bases de données tarifaires officielles (RITA / TARIC, Access2Markets de la Commission Européenne)",
                    "Portails douaniers administratifs (Douane.gouv.fr, Soprano, REX)",
                    "Logiciels de gestion douanière et conformité (Conex, Thomson Reuters ONESOURCE, SAP Global Trade Services GTS)"
                ],
                "languages": [
                    "Français (maîtrise juridique experte)",
                    "Anglais (courant C1 indispensable pour les accords de libre-échange internationaux et audits mondiaux)"
                ]
            },
            "formations": {
                "france": [
                    "Master 2 Droit Douanier, des Transports et du Commerce International (Université de Rouen, Université Paris 1 Panthéon-Sorbonne)",
                    "Master Droit des Affaires Internationales ou Fiscalité Internationale",
                    "Formation certifiante ODASCE (Office de Développement par l'Automatisation et la Simplification du Commerce Extérieur) : Responsable Douane",
                    "Diplôme d'école de commerce avec spécialisation Trade Compliance & Customs"
                ],
                "senegal": [
                    "Master Droit des Affaires et Fiscalité (Faculté des Sciences Juridiques et Politiques FSJP / UCAD)",
                    "Master Commerce International et Douane (CESAG Dakar, ISM, EBAD)",
                    "Diplôme Supérieur de Douane (Centre de Formation Douanière de Dakar)"
                ]
            },
            "salaries": {
                "france": {
                    "debutant": "35 000 € à 42 000 € brut/an",
                    "intermediaire": "45 000 € à 60 000 € brut/an",
                    "expert": "65 000 € à 90 000 € brut/an (Directeur Douane & Conformité Internationale / Global Customs Director)"
                },
                "senegal": {
                    "debutant": "380 000 à 600 000 FCFA net/mois",
                    "intermediaire": "650 000 à 1 100 000 FCFA net/mois",
                    "expert": "1 200 000 à 2 200 000 FCFA net/mois (Expert-conseil en douane agréé / Directeur conformité de grand groupe importateur)"
                }
            },
            "career": {
                "evolution": [
                    "Directeur Douane & Commerce International (Head of Global Customs & Trade Compliance)",
                    "Avocat spécialisé en droit douanier et contentieux du commerce international",
                    "Consultant senior en cabinet d'audit et de conseil international (Big Four : Deloitte, PwC, EY, KPMG)",
                    "Inspecteur principal / Cadre supérieur au sein des administrations douanières"
                ],
                "relatedJobs": [
                    "Déclarant en douane",
                    "Responsable Sécurité et Sûreté Transport",
                    "Directeur Supply Chain",
                    "Juriste d'Affaires Internationales"
                ],
                "associatedFamilies": [
                    "droit-justice",
                    "finance-comptabilite-gestion",
                    "politique-relations-internationales"
                ]
            },
            "sources": [
                {
                    "organization": "Direction Générale des Douanes et Droits Indirects",
                    "title": "Le statut d'Opérateur Économique Agréé (OEA)",
                    "url": "https://www.douane.gouv.fr",
                    "type": "Portail officiel de la douane française"
                },
                {
                    "organization": "Imagine ton Futur",
                    "title": "Fiche Métier : Déclarant en douane",
                    "url": "https://www.imaginetonfutur.com/les-metiers/declarant-en-douane.html",
                    "type": "Portail d'orientation"
                }
            ]
        },

        # 29. Logisticien Événementiel & Salons
        {
            "id": "logisticien-evenementiel",
            "title": "Logisticien Événementiel & Salons Internationaux",
            "slug": "logisticien-evenementiel",
            "family": "transport-logistique-supply-chain",
            "familyLabel": "Transport, Logistique & Supply Chain",
            "domain": "logistique-evenementielle",
            "domainLabel": "Logistique Événementielle, Foires, Salons & Spectacles",
            "subdomain": "Tournées de spectacles, salons professionnels & opérations éphémères",
            "badge": "📚 Référence Imagine ton Futur",
            "sourceImagineTonFutur": True,
            "brief": "Le logisticien événementiel organise et synchronise le transport, le montage, le stockage éphémère et le démontage des structures, équipements scéniques et stands pour les festivals, grands événements sportifs et foires internationales.",
            "description": "Spécialiste de l'éphémère et de l'ultra-court délai où tout retard est immédiatement fatal, le logisticien événementiel opère dans les coulisses des festivals musicaux, des salons professionnels mondiaux, des défilés de haute couture et des grands rendez-vous sportifs (Jeux Olympiques, Coupes du Monde). Il conçoit et orchestre des plans de transport millimétrés pour acheminer des tonnes d'équipements techniques (scènes, sonorisation, éclairage, écrans géants LED, décors monumentaux) et des structures d'accueil (chapiteaux, tentes réceptives, mobilier). Travaillant sur site en conditions souvent acrobatiques et sous contraintes horaires impératives (montage en 48 heures, démontage en 24 heures de nuit), il régule les files de camions sur les zones de déchargement, coordonne les engins de levage (grues mobiles, chariots télescopiques) et veille à la sécurisation des flux de techniciens et de public. Il maîtrise également les formalités douanières temporaires (Carnets ATA) pour les tournées mondiales d'artistes ou les salons internationaux.",
            "missions": [
                "Élaborer le rétroplanning logistique complet de l'événement (phase d'acheminement, montage, exploitation, démontage et retour).",
                "Réserver et coordonner les flottes de semi-remorques, camions dédiés et conteneurs maritimes.",
                "Gérer les procédures de douane temporaire (Carnet ATA) pour le matériel en transit international.",
                "Piloter les opérations de déchargement, stockage tampon et approvisionnement des stands ou scènes.",
                "Superviser les équipes de manutentionnaires événementiels (roadies, monteurs, caristes) et les engins de levage.",
                "Veiller à la sécurité des chantiers temporaires d'installation et au respect des normes ERP (Établissements Recevant du Public).",
                "Gérer la logistique des déchets et le nettoyage rapide du site après la manifestation."
            ],
            "skills": {
                "hard": [
                    "Gestion de projet logistique événementiel en temps réel et rétroplannings serrés",
                    "Réglementation douanière temporaire (Carnet ATA de la Chambre de Commerce)",
                    "Sécurité des chantiers événementiels et réglementation des ERP et chapiteaux (CTS)",
                    "Techniques de calage, arrimage et manutention de matériel scénique fragile",
                    "Coordination de parcs d'engins de levage (chariots télescopiques tout-terrain, nacelles)"
                ],
                "soft": [
                    "Résistance exceptionnelle au stress et endurance physique (horaires décalés, travail de nuit)",
                    "Réactivité et débrouillardise hors pair pour surmonter les imprévus matériels",
                    "Leadership d'équipe et communication claire dans un environnement bruyant et effervescent",
                    "Sens aigu du service et souci du détail visuel"
                ],
                "tools": [
                    "Logiciels de planification de projet (MS Project, Monday.com, Trello)",
                    "Plans d'implantation 2D/3D (AutoCAD, SketchUp Event)",
                    "Outils de gestion d'inventaire événementiel (Rentman, Current RMS)"
                ],
                "languages": [
                    "Français (courant)",
                    "Anglais (B2/C1 professionnel impératif pour échanger avec les productions internationales et équipes de tournées)"
                ]
            },
            "formations": {
                "france": [
                    "BTS Gestion des Transports et Logistique Associée (GTLA)",
                    "BUT Management de la Logistique et des Transports (MLT)",
                    "Licence Pro Régie des Événements et Spectacles Vivants / Logistique Événementielle (Université Paris-Nanterre, Université d'Avignon)",
                    "Titre certifié Régisseur Général / Directeur Technique du Spectacle Vivant (CFPTS Bagnolet)"
                ],
                "senegal": [
                    "BTS Transport-Logistique ou Gestion de Projets (CFPT Sénégal-Japon, ISM Dakar)",
                    "Licence Professionnelle en Management Événementiel et Culturel (IAM Dakar, BEM Dakar)",
                    "Formation qualifiante en Régie Générale de Spectacles (Institut Français de Dakar / FESMAN)"
                ]
            },
            "salaries": {
                "france": {
                    "debutant": "25 000 € à 30 000 € brut/an (ou statut intermittent du spectacle au cachet journalier)",
                    "intermediaire": "32 000 € à 42 000 € brut/an",
                    "expert": "45 000 € à 65 000 € brut/an (Directeur Logistique Événementielle / Régisseur Général de grands festivals)"
                },
                "senegal": {
                    "debutant": "250 000 à 400 000 FCFA net/mois (ou forfaits prestations par événement)",
                    "intermediaire": "450 000 à 750 000 FCFA net/mois",
                    "expert": "800 000 à 1 500 000 FCFA net/mois (Régisseur général de grands festivals internationaux comme la Biennale de Dakar DAK'ART, Saint-Louis Jazz)"
                }
            },
            "career": {
                "evolution": [
                    "Directeur Technique & Logistique de grands festivals ou stades",
                    "Directeur des Opérations au sein d'une agence de production événementielle internationale",
                    "Responsable logistique de délégations sportives et comités d'organisation",
                    "Directeur de salon d'exposition (Viparis, GL Events, Eurexpo)"
                ],
                "relatedJobs": [
                    "Régisseur Général",
                    "Exploitant Transport Routier",
                    "Responsable d'Entrepôt",
                    "Directeur de Production"
                ],
                "associatedFamilies": [
                    "arts-culture-patrimoine",
                    "marketing-communication",
                    "sport-animation-loisirs"
                ]
            },
            "sources": [
                {
                    "organization": "UNIMEV",
                    "title": "Union Française des Métiers de l'Événement : Les métiers de la logistique d'exposition",
                    "url": "https://www.unimev.fr",
                    "type": "Union professionnelle"
                },
                {
                    "organization": "Imagine ton Futur",
                    "title": "Fiche Métier : Régisseur général",
                    "url": "https://www.imaginetonfutur.com/les-metiers/regisseur-general.html",
                    "type": "Portail d'orientation"
                }
            ]
        },

        # 30. Responsable Logistique de Chantier & Projets Industriels
        {
            "id": "responsable-logistique-de-chantier",
            "title": "Responsable Logistique de Chantier & Projets Industriels",
            "slug": "responsable-logistique-de-chantier",
            "family": "transport-logistique-supply-chain",
            "familyLabel": "Transport, Logistique & Supply Chain",
            "domain": "logistique-industrielle-projets",
            "domainLabel": "Logistique Industrielle, Chantier, Convois Exceptionnels & Projets Lourds",
            "subdomain": "Supply chain BTP, plateformes de consolidation & convois hors gabarit",
            "badge": "📚 Référence Imagine ton Futur",
            "sourceImagineTonFutur": True,
            "brief": "Le responsable logistique de chantier conçoit et pilote l'approvisionnement cadencé des matériaux, engins lourds et préfabriqués sur les grands chantiers de construction, de génie civil et les projets industriels majeurs.",
            "description": "Sur les méga-chantiers d'infrastructure (lignes de métro Grand Paris Express, autoroutes, centrales solaires/nucléaires, tours de grande hauteur, plateformes pétrolières offshore), le responsable logistique de chantier est le chef d'orchestre des flux matériels. Il conçoit le Schéma d'Organisation Logistique du Chantier (SOLC) pour éviter l'engorgement de la voirie et des zones de travail exiguës. Il installe et pilote des Bases Logistiques Arrières (BLA) où les matériaux sont massifiés, contrôlés et préparés avant d'être livrés sur le chantier au moment exact de leur mise en œuvre (flux tendus Just-in-Time). Il planifie les créneaux d'accès des toupies béton, des livraisons d'acier et d'éléments préfabriqués via des plateformes numériques de réservation, gère les aires de stockage tampon, coordonne les grues à tour et monte-matériaux, et orchestre le transport exceptionnel des colis lourds hors gabarit (convois de plusieurs centaines de tonnes escortés). Il est également le garant de la logistique des déblais et du recyclage des déchets de chantier.",
            "missions": [
                "Rédiger et mettre en œuvre le Schéma d'Organisation Logistique et Environnementale du Chantier (SOLEC).",
                "Mettre en place et administrer la plateforme numérique de réservation des créneaux de livraison pour toutes les entreprises co-traitantes.",
                "Gérer la plateforme logistique avancée (base arrière de stockage et de pré-assemblage).",
                "Organiser les transports de convois exceptionnels hors gabarit (itinéraires sécurisés, autorisations préfectorales, escortes de police).",
                "Coordonner l'utilisation partagée des moyens de levage lourds (grues à tour, grues mobiles télescopiques, monte-charges).",
                "Organiser l'évacuation massive des terres excavées et déblais de terrassement (filières de valorisation, transport fluvial ou ferroviaire).",
                "Veiller au respect des règles de sécurité de circulation sur le chantier et des plans de prévention."
            ],
            "skills": {
                "hard": [
                    "Logistique appliquée au BTP et grands projets industriels (Lean Construction / Juste-à-Temps)",
                    "Réglementation des transports exceptionnels de 1ère, 2e et 3e catégorie (arrêtés préfectoraux, autorisations de passage)",
                    "Gestion des plateformes de réservation de livraisons de chantier (Collaborative Logistics)",
                    "Connaissance des matériaux de construction, des engins de levage lourd et du génie civil",
                    "Réglementation de l'évacuation et de la traçabilité des déchets de chantier (bordereaux de suivi des déchets BSD)"
                ],
                "soft": [
                    "Forte autorité naturelle et capacité à faire respecter les plannings par des dizaines d'entreprises tierces",
                    "Rigueur d'anticipation et gestion des aléas climatiques ou techniques",
                    "Sang-froid face aux risques d'accidents de manutention lourde",
                    "Excellent sens de la négociation et de la conciliation sur le terrain"
                ],
                "tools": [
                    "Plateformes collaboratives de logistique chantier (Trackted, LogiChantier, Altagem)",
                    "Logiciels de modélisation BIM appliqués à la logistique 4D (Revit, Navisworks, Synchro PRO)",
                    "Outils de planification (MS Project, Primavera P6)"
                ],
                "languages": [
                    "Français (maîtrise technique et réglementaire)",
                    "Anglais (B2 technique utile sur les grands chantiers internationaux avec des entreprises de génie civil étrangères)"
                ]
            },
            "formations": {
                "france": [
                    "Diplôme d'Ingénieur en Bâtiment / Travaux Publics / Génie Civil (ESTP, INSA, Polytech, CESI, École des Mines)",
                    "Master Génie Civil parcours Logistique et Gestion de Chantiers",
                    "BUT Génie Civil - Construction Durable (GCCD) ou Management de la Logistique et des Transports (MLT)",
                    "Titre professionnel de Conducteur de Travaux spécialité Logistique de Chantier"
                ],
                "senegal": [
                    "Diplôme d'Ingénieur en Génie Civil (Polytech Thiès, ESP Dakar, École Supérieure du Bâtiment)",
                    "Master en Management de Projets de Construction et BTP (Institut Supérieur de Management ISM / EPUT Thiès)",
                    "Licence Pro en Conduite de Travaux BTP et Logistique Industrielle (IUT Thiès / CFPT Sénégal-Japon)"
                ]
            },
            "salaries": {
                "france": {
                    "debutant": "34 000 € à 40 000 € brut/an",
                    "intermediaire": "42 000 € à 55 000 € brut/an",
                    "expert": "58 000 € à 80 000 € brut/an (Directeur Logistique de Grands Projets d'Infrastructures / Major Projects Logistics Manager chez Vinci, Bouygues, Eiffage)"
                },
                "senegal": {
                    "debutant": "350 000 à 550 000 FCFA net/mois",
                    "intermediaire": "600 000 à 1 000 000 FCFA net/mois",
                    "expert": "1 100 000 à 2 000 000 FCFA net/mois (Responsable logistique grands chantiers : TER de Dakar, BRT, projets pétro-gaziers GTA/Sangomar, autoroutes)"
                }
            },
            "career": {
                "evolution": [
                    "Directeur de la Logistique et des Moyens Généraux de filiale BTP",
                    "Directeur de Travaux / Directeur de Projet d'Infrastructures",
                    "Expert en ingénierie des transports exceptionnels et colis lourds",
                    "Chef de Projet BIM 4D et digitalisation de chantier"
                ],
                "relatedJobs": [
                    "Ingénieur BTP",
                    "Conducteur de Travaux",
                    "Exploitant Transport Routier",
                    "Responsable Sécurité et Sûreté"
                ],
                "associatedFamilies": [
                    "btp-architecture-construction",
                    "industrie-ingenierie",
                    "environnement-developpement-durable"
                ]
            },
            "sources": [
                {
                    "organization": "Fédération Française du Bâtiment (FFB)",
                    "title": "Guide de la logistique d'approvisionnement des chantiers de bâtiment",
                    "url": "https://www.ffbatiment.fr",
                    "type": "Fédération professionnelle"
                },
                {
                    "organization": "Imagine ton Futur",
                    "title": "Fiche Métier : Ingénieur BTP",
                    "url": "https://www.imaginetonfutur.com/les-metiers/ingenieur-btp.html",
                    "type": "Portail d'orientation"
                }
            ]
        },

        # 31. Exploitant Transport Routier
        {
            "id": "exploitant-transport-routier",
            "title": "Exploitant Transport / Dispatcheur Routier & Flotte",
            "slug": "exploitant-transport-routier",
            "family": "transport-logistique-supply-chain",
            "familyLabel": "Transport, Logistique & Supply Chain",
            "domain": "exploitation-planification",
            "domainLabel": "Exploitation, Planification & Dispatching des Transports",
            "subdomain": "Tournées, gestion de flotte de camions & respect RSE",
            "badge": "📚 Référence Imagine ton Futur",
            "sourceImagineTonFutur": True,
            "brief": "L'exploitant transport planifie, optimise et affecte en temps réel les tournées des conducteurs et des véhicules de transport routier, veillant à la rentabilité économique et au respect absolu de la Réglementation Sociale Européenne.",
            "description": "Pivot opérationnel de toute entreprise de transport de marchandises, l'exploitant transport (ou dispatcheur) fait le lien permanent entre les clients chargeurs et les chauffeurs routiers sur le terrain. À l'aide de logiciels de gestion de flotte et de tournées (TMS), il organise quotidiennement l'acheminement des cargaisons de façon à maximiser le taux de remplissage des véhicules et à éliminer les kilomètres à vide (dead miles). Il affecte chaque mission à un conducteur en prenant en compte scrupuleusement la Réglementation Sociale Européenne (RSE) : temps de conduite journalier (maximum 9h ou 10h deux fois par semaine), pauses obligatoires de 45 minutes, temps de repos journalier et hebdomadaire, et validité des permis et cartes chronotachygraphes. En liaison permanente par géolocalisation avec ses conducteurs, il gère en direct les aléas de la route (bouchons, pannes, retards aux quais de déchargement, intempéries) et ajuste le plan de transport pour garantir le respect de l'heure de livraison promise au client.",
            "missions": [
                "Planifier et optimiser les plannings des conducteurs et les tournées des véhicules à l'aide du progiciel TMS.",
                "Affecter les ordres de transport aux conducteurs et leur transmettre les feuilles de route et instructions particulières.",
                "Suivre en temps réel la position de la flotte par télématique embarquée et gérer les imprévus de circulation.",
                "Contrôler scrupuleusement le respect de la Réglementation Sociale Européenne (RSE) et des temps de conduite et repos.",
                "Vérifier et archiver les données des cartes conducteurs et des chronotachygraphes numériques.",
                "Optimiser la rentabilité des tournées (taux de chargement, consommation de carburant, réduction des trajets à vide).",
                "Gérer les relations téléphoniques quotidiennes avec les clients expéditeurs et destinataires pour confirmer les livraisons."
            ],
            "skills": {
                "hard": [
                    "Réglementation Sociale Européenne (RSE) et droit du travail applicable aux transports routiers",
                    "Fonctionnement et analyse des données des chronotachygraphes numériques",
                    "Optimisation de tournées de transport (Route Optimization & Dispatching)",
                    "Connaissance de la géographie routière, des restrictions de circulation poids lourds et du réseau autoroutier",
                    "Calcul des coûts de revient kilométriques et gestion de la rentabilité d'une flotte"
                ],
                "soft": [
                    "Sens aigu du contact humain et psychologie pour manager des conducteurs à distance",
                    "Capacité exceptionnelle à gérer le stress et les imprévus en temps réel",
                    "Réactivité, flexibilité et sens de l'improvisation calculée",
                    "Rigueur administrative et sens aigu de l'organisation"
                ],
                "tools": [
                    "TMS Exploitation (Dashdoc, Transics, Akanea Transport, Cofidis, GPI)",
                    "Télématique embarquée et géolocalisation (Trimble, Webfleet, Astrata, Masternaut)",
                    "Logiciels de gestion des temps et chronotachygraphes (Solid, TachoScan, TransFollow)"
                ],
                "languages": [
                    "Français (courant, excellente communication orale)",
                    "Anglais ou Espagnol/Polonais (atout majeur pour échanger avec des conducteurs internationaux)"
                ]
            },
            "formations": {
                "france": [
                    "Bac Pro Organisation de Transport de Marchandises (OTM)",
                    "BTS Gestion des Transports et Logistique Associée (GTLA)",
                    "BUT Management de la Logistique et des Transports (MLT)",
                    "Titre Professionnel Technicien Supérieur du Transport Terrestre de Marchandises (TSTTM - AFTRAL / Promotrans)"
                ],
                "senegal": [
                    "BTS Transport et Logistique (CFPT Sénégal-Japon, IPG Dakar)",
                    "Licence Professionnelle en Gestion des Flottes et Transport Terrestre (EBAD / UCAD, IAM)",
                    "Attestation de Capacité Professionnelle en Transport Routier de Marchandises (Direction des Transports Terrestres du Sénégal)"
                ]
            },
            "salaries": {
                "france": {
                    "debutant": "24 000 € à 28 000 € brut/an",
                    "intermediaire": "29 000 € à 37 000 € brut/an",
                    "expert": "39 000 € à 50 000 € brut/an (Chef d'exploitation transport / Responsable de planning flotte)"
                },
                "senegal": {
                    "debutant": "220 000 à 380 000 FCFA net/mois",
                    "intermediaire": "400 000 à 650 000 FCFA net/mois",
                    "expert": "700 000 à 1 200 000 FCFA net/mois (Chef d'exploitation au sein d'une grande compagnie de transport routier de marchandises ou de carburant)"
                }
            },
            "career": {
                "evolution": [
                    "Chef d'exploitation transport / Responsable d'agence de transport",
                    "Affréteur routier / Responsable affrètement",
                    "Gestionnaire de flotte automobile et poids lourds (Fleet Manager)",
                    "Directeur des Opérations Transport"
                ],
                "relatedJobs": [
                    "Affréteur International",
                    "Conducteur Routier de Marchandises",
                    "Chef de Quai",
                    "Responsable Sécurité et Sûreté Transport"
                ],
                "associatedFamilies": [
                    "commerce-vente-distribution",
                    "administration-gestion-organisation",
                    "securite-defense"
                ]
            },
            "sources": [
                {
                    "organization": "Imagine ton Futur",
                    "title": "Fiche Métier : Exploitant transport",
                    "url": "https://www.imaginetonfutur.com/les-metiers/exploitant-transport.html",
                    "type": "Portail d'orientation"
                },
                {
                    "organization": "France Travail",
                    "title": "Fiche ROME N4201 : Direction d'exploitation des transports routiers de marchandises",
                    "url": "https://candidat.francetravail.fr/metierscope/fiche-metier/N4201",
                    "type": "Répertoire officiel des métiers"
                }
            ]
        },

        # 32. Conducteur d'Autobus & Autocar
        {
            "id": "conducteur-autobus-autocar",
            "title": "Conducteur d'Autobus & Autocar / Chauffeur de Transport Public",
            "slug": "conducteur-autobus-autocar",
            "family": "transport-logistique-supply-chain",
            "familyLabel": "Transport, Logistique & Supply Chain",
            "domain": "transport-voyageurs-mobilite",
            "domainLabel": "Transport de Voyageurs, Mobilité Urbaine & Interurbaine",
            "subdomain": "Réseaux urbains de bus, autocars de tourisme & transport scolaire",
            "badge": "📚 Référence Imagine ton Futur",
            "sourceImagineTonFutur": True,
            "brief": "Le conducteur d'autobus ou d'autocar transporte quotidiennement des passagers sur des lignes urbaines, périurbaines, scolaires ou de tourisme international, garantissant confort, sécurité et ponctualité.",
            "description": "Acteur essentiel de la mobilité quotidienne et du lien social dans les villes et les campagnes, le conducteur d'autobus et d'autocar assure le transport collectif de personnes au sein de réseaux urbains (RATP, Keolis, Transdev, Dakar Dem Dikk), d'entreprises de transport interurbain ou de lignes touristiques nationales et internationales (FlixBus, BlaBlaCar Bus). Au volant de véhicules modernes d'un gabarit imposant (jusqu'à 18 mètres pour les bus articulés ou les bus à haut niveau de service BHNS / BRT), il manœuvre avec une dextérité millimétrée dans un trafic urbain dense et encombré. Outre la conduite préventive, éco-responsable et souple pour assurer le bien-être des passagers, il accueille le public, renseigne les usagers, vend des titres de transport, veille à l'accessibilité des personnes à mobilité réduite (PMR) et gère avec sang-froid et diplomatie les situations de tension ou les incivilités à bord.",
            "missions": [
                "Effectuer les vérifications de sécurité du véhicule avant le départ (pneumatiques, freins, rétroviseurs, feux, issues de secours, extincteurs).",
                "Conduire de manière souple et sécuritaire en respectant scrupuleusement le code de la route et les limitations de vitesse.",
                "Accueillir les passagers, délivrer les titres de transport et renseigner les usagers sur les correspondances et itinéraires.",
                "Assurer l'embarquement et le débarquement sécurisé des personnes à mobilité réduite (déploiement de la rampe PMR).",
                "Respecter les horaires de passage aux arrêts et la cadence de la ligne sous la supervision du poste de commande centralisé (PCC).",
                "Gérer les situations d'urgence (accident, malaise voyageur, panne mécanique) selon les procédures de l'exploitant.",
                "Désamorcer avec calme les incivilités et veiller à la tranquillité et à la propreté à bord."
            ],
            "skills": {
                "hard": [
                    "Maîtrise de la conduite d'un véhicule lourd de transport de personnes (Permis D et FIMO Voyageurs)",
                    "Connaissance parfaite du code de la route et de la réglementation du transport de voyageurs",
                    "Éco-conduite préventive et anticipation des comportements des autres usagers de la route",
                    "Réglementation Sociale Européenne (RSE) appliquée au transport de personnes",
                    "Gestes de premiers secours (PSC1) et utilisation d'un défibrillateur automatisé"
                ],
                "soft": [
                    "Excellente maîtrise de soi, patience et courtoisie permanente envers les usagers",
                    "Vigilance continue et grande concentration visuelle",
                    "Sens prononcé de la ponctualité et du service public",
                    "Bonne condition physique et adaptation aux horaires décalés (tôt le matin, tard le soir, week-ends)"
                ],
                "tools": [
                    "Système d'Aide à l'Exploitation et à l'Information Voyageurs (SAEIV)",
                    "Pupitre de vente et validation billettique embarquée",
                    "Système de communication radio avec le PCC (Poste de Contrôle Centralisé)"
                ],
                "languages": [
                    "Français (courant, excellente élocution)",
                    "Anglais de base (un plus apprécié sur les lignes touristiques et aéroports)"
                ]
            },
            "formations": {
                "france": [
                    "Permis D (dès 21 ou 24 ans) + FIMO Voyageurs (Formation Initiale Minimale Obligatoire)",
                    "Titre Professionnel de Conducteur de Transport en Commun sur Route (CTCR - AFTRAL, Promotrans)",
                    "CAP Conducteur Routier de Marchandises ou Voyageurs",
                    "FCOS Voyageurs (Formation Continue Obligatoire de Sécurité) à renouveler tous les 5 ans"
                ],
                "senegal": [
                    "Permis de Conduire Catégorie D (Transport en commun)",
                    "Certificat d'Aptitude à la Conduite des Véhicules de Transport Public (Dakar Dem Dikk, CETUD)",
                    "Formation spéciale Conducteur BRT de Dakar (SunuBRT / Dakar Mobility)",
                    "Formation en Conduite Défensive et Sécurité Routière (CFPT Sénégal-Japon, AFT Sénégal)"
                ]
            },
            "salaries": {
                "france": {
                    "debutant": "22 000 € à 26 000 € brut/an (+ primes dimanches, nuits, panier repas)",
                    "intermediaire": "27 000 € à 33 000 € brut/an",
                    "expert": "34 000 € à 42 000 € brut/an (Conducteur tuteur / Lignes Grand Tourisme international)"
                },
                "senegal": {
                    "debutant": "160 000 à 250 000 FCFA net/mois (compagnies urbaines ou scolaires)",
                    "intermediaire": "260 000 à 400 000 FCFA net/mois (Dakar Dem Dikk, conducteurs BRT Dakar Mobility)",
                    "expert": "420 000 à 650 000 FCFA net/mois (Conducteur interurbain international / Lignes VIP sous-régionales)"
                }
            },
            "career": {
                "evolution": [
                    "Contrôleur de titres / Agent de prévention et de médiation",
                    "Régulateur de ligne / Agent de maîtrise au Poste de Commande Centralisé (PCC)",
                    "Conducteur tuteur / Formateur de conducteurs",
                    "Chef de ligne / Responsable d'exploitation réseau voyageurs"
                ],
                "relatedJobs": [
                    "Conducteur de Train",
                    "Conducteur-Livreur Urbain",
                    "Conducteur Routier de Marchandises",
                    "Régulateur Transport"
                ],
                "associatedFamilies": [
                    "tourisme-hotellerie-restauration",
                    "securite-defense",
                    "administration-gestion-organisation"
                ]
            },
            "sources": [
                {
                    "organization": "Imagine ton Futur",
                    "title": "Fiche Métier : Conducteur d'autobus",
                    "url": "https://www.imaginetonfutur.com/les-metiers/conducteur-d-autobus.html",
                    "type": "Portail d'orientation"
                },
                {
                    "organization": "UTP",
                    "title": "Union des Transports Publics et Ferroviaires : Métier de conducteur de bus",
                    "url": "https://www.utp.fr",
                    "type": "Union professionnelle"
                }
            ]
        }
    ]

if __name__ == "__main__":
    jobs = get_transport_jobs_part2()
    print(f"✅ transport_jobs_part2.py : {len(jobs)} métiers chargés avec succès.")
    for j in jobs:
        print(f" - [{j['id']}] {j['title']} ({j['domainLabel']})")
